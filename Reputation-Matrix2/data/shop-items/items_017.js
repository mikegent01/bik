// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_017 = {
  "fractured_atrium_cursed_tome": {
    "id": "fractured_atrium_cursed_tome",
    "name": "Cursed Tome of the Shattered Throne",
    "description": "The Cursed Tome of the Shattered Throne is a leather-bound grimoire, its pages stained with the blood of ages past and cursed by the very lineage it seeks to uncover. Reading this forbidden text grants fleeting visions of forgotten battles and dark rituals, but at an unspoken cost—each page turned leaves the reader's mind fractured, visions of chaos dancing in their thoughts for moments that feel like hours.",
    "price": 950,
    "icon": "📖",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Grants fleeting visions of past events",
      "Causes mental fatigue"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Fleeting Visions",
        "rules": "When the reader focuses on a page, they gain a vision of a significant event from the past. This effect lasts for 1 minute but leaves them disoriented and unable to focus on mundane tasks for the following 3 seconds."
      },
      {
        "title": "Mental Fatigue",
        "rules": "After reading any hidden lore page, the reader must make a Wisdom saving throw (DC 15) or become dazed until the start of their next turn. They also suffer from a -2 penalty to Intelligence and Charisma checks for 1 hour."
      }
    ],
    "levelRequirementReason": "The tome's dark magic requires a reader with some experience in combat and lore.",
    "vendorReason": "The Atrium has long been a repository of forbidden knowledge, and the Cursed Tome is no exception.",
    "shippingDetail": "Delivered via secret courier, this tome arrives under cover of night to ensure its arrival remains undetected by the guardians of the past.",
    "usage": {
      "activation": "Reading a page as an action",
      "duration": "1 minute and lasts until the start of their next turn after reading",
      "endsWhen": "The reader makes a successful saving throw or completes another task that requires focus",
      "charges": "Unlimited, but each use leaves the reader more mentally exhausted"
    },
    "priceReason": "The tome's price reflects its forbidden nature and the risk of its dark magic.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:48:23.058953+00:00",
    "aiReviewedAt": "2026-07-22T05:48:23.058953+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_dark_mirror": {
    "id": "fractured_atrium_dark_mirror",
    "name": "Dark Mirror of the Fractured Atrium",
    "description": "The Dark Mirror of the Fractured Atrium is a shard-crazed relic, its glass fractured into a thousand pieces, each fragment reflecting a lost soul from beyond the veil. This mirror allows necromancers to see through the shadows and reveals hidden sigils etched by ancient necromantic energies. With every use, it saps its own power, diminishing in effectiveness until it becomes cursed with a permanent -10% attack speed penalty for 10 seconds after three activations.",
    "price": 950,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+30% detection chance for necromantic traps",
      "Reveals hidden sigils and lost souls"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Necromantic Trap Detection",
        "rules": "Activates as a bonus action. The user gains +30% detection chance for necromantic traps within the next round, reducing by 10% each subsequent use until it becomes ineffective."
      },
      {
        "title": "Reveal Hidden Sigils and Souls",
        "rules": "When activated, this mirror reveals hidden sigils and lost souls in a 30-foot radius. The user must make an Intelligence (Arcana) check to interpret the sigil's meaning. Failure results in a -1d4 on all Arcana checks for 1 minute."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to wield due to its arcane complexity and necromantic energies.",
    "vendorReason": "The vendor, a guild of necromancers who specialize in the dead, has access to rare relics like this mirror.",
    "shippingDetail": "Ships via Pipe Express, known for its reliable and swift delivery through the necrotic mists.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous effect; lasts until the end of next turn",
      "endsWhen": "Exhausted after three uses or destroyed by a successful destruction roll (DC 17)",
      "charges": "3"
    },
    "priceReason": "Balanced for its rarity and unique utility in combat against necromantic threats.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:48:11.695301+00:00",
    "aiReviewedAt": "2026-07-22T05:48:11.695301+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_dark_mirror_core": {
    "id": "fractured_atrium_dark_mirror_core",
    "name": "Dark Mirror Core",
    "description": "The Dark Mirror Core is a fractured heart of the Deep Mirror, a relic that warps reality for a brief moment. When activated, it reveals hidden paths and reflects the caster’s deepest fears into enemy armor, distorting their vision in ways both terrifying and revealing. This artifact's power is drawn from the very essence of forgotten realms, making it an invaluable tool for those who dare to face the unknown.",
    "category": "equipment",
    "price": 950,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveal Hidden Weaknesses",
      "Reflect Enemy Spells"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Reveal Hidden Weaknesses",
        "rules": "When activated as a bonus action, this core grants the user an advantage on one saving throw against any single spell or ability check targeting them within the next round. This effect ends when used."
      },
      {
        "title": "Reflect Enemy Spells",
        "rules": "Once per short rest, upon activation, the caster can reflect a single spell cast at them back to its source with a save DC equal to 10 + the spell’s level. Failure means the spell affects the caster instead for half damage."
      }
    ],
    "levelRequirementReason": "Requires at least third-level magic proficiency to wield this powerful artifact effectively.",
    "vendorReason": "The fractured heart of Atrium is a known repository for ancient relics, including the Dark Mirror Core's origins.",
    "shippingDetail": "Ships via spectral courier with a two-week delivery time, ensuring the artifact arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action to activate and use once per short rest.",
      "duration": "Instantaneous effect; ends when used or spell is reflected.",
      "endsWhen": "Used up once per short rest.",
      "charges": "Unlimited, recharges at dawn."
    },
    "priceReason": "Balanced for its powerful yet limited effects, this relic is priced to reflect its unique utility and rarity.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:48:07.304979+00:00",
    "aiReviewedAt": "2026-07-22T05:48:07.304979+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_dark_mirrored_satchel": {
    "id": "fractured_atrium_dark_mirrored_satchel",
    "name": "Dark Mirrored Satchel",
    "description": "The Dark Mirrored Satchel is a satchel crafted from fractured mirror shards of the Deep Mirror. It whispers and gleams with an otherworldly light, reflecting the wielder’s will into the shadows. Any spell cast through it becomes a spectral twin, doubling its damage but negating magical resistance. This relic is known to enhance necromancy spells, increasing their duration by 50%. The satchel itself seems to have a life of its own, as if the fractured mirrors are alive with an ancient power.",
    "category": "equipment",
    "price": 950,
    "icon": "🧭",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Shadow Duplication",
      "Magical Resistance Negation"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shadow Duplication",
        "rules": "When you cast a spell from the Dark Mirrored Satchel, it creates a shadow duplicate that deals an additional 120% damage. The duplicate has no save DC and is immune to magical resistance."
      },
      {
        "title": "Necromancy Enhancement",
        "rules": "When used with necromancy spells, the duration of the spell increases by 50%. This effect does not stack with other duration-enhancing effects."
      }
    ],
    "levelRequirementReason": "The satchel requires a caster level of 3 to channel its power effectively.",
    "vendorReason": "Fractured Atrium has been known for selling artifacts from the Deep Mirror's realm, making this satchel one of their most sought-after items.",
    "shippingDetail": "Delivered with a mysterious aura that seems to amplify its power before it is even used.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous, the duplicate spell resolves immediately upon casting",
      "endsWhen": "The satchel runs out of charges or if you discard it in combat",
      "charges": "5 uses"
    },
    "priceReason": "Balanced at 1000 XP, the Dark Mirrored Satchel is a rare find that offers significant utility without overpowered effects.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T05:47:56.385390+00:00",
    "aiReviewedAt": "2026-07-22T05:47:56.385390+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_dark_reflection": {
    "id": "fractured_atrium_dark_reflection",
    "name": "Dark Reflection of the Fractured Atrium",
    "description": "The Dark Reflection of the Fractured Atrium is a shattered mirror whose fractured surface gleams with an eerie, soul-laden light. Crafted from the remnants of ancient necrotic energies, it bends and warps reality around its wearer, absorbing attacks and converting them into potent soul energy. This relic offers defensive prowess to those who wield it, creating a field that not only reduces incoming damage but also amplifies the user's defensive capabilities in battle.",
    "category": "equipment",
    "price": 5600,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Absorbs Damage",
      "Enhanced Defense"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Soul Absorption",
        "rules": "When activated, this mirror absorbs 20% of incoming damage and converts it into soul energy. This effect lasts for 10 seconds and can be reactivated once per short rest."
      },
      {
        "title": "Defensive Amplification",
        "rules": "For the duration of its active state, the user's defense is increased by 30%, providing a significant boost to their defensive capabilities. This effect also grants the wearer resistance against necrotic damage."
      }
    ],
    "levelRequirementReason": "This mirror requires a minimum level of 5 due to its intricate crafting and the complex nature of the soul energies it manipulates.",
    "vendorReason": "The Fractured Atrium is well-known for its connection to ancient necrotic artifacts, making it the perfect vendor for this relic.",
    "shippingDetail": "Ships via the Void Drifter Relay, known for its swift and secure delivery of high-value items.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds",
      "endsWhen": "The mirror is deactivated or when the duration ends",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity, craftsmanship, and unique defensive abilities justify its price of 2500 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:48:10.260341+00:00",
    "aiReviewedAt": "2026-07-22T05:48:10.260341+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_dark_reflection_bottle": {
    "id": "fractured_atrium_dark_reflection_bottle",
    "name": "Dark Reflection Bottle",
    "description": "The Dark Reflection Bottle is a sinister, shattered glass vial adorned with deep etchings that shimmer with malevolent light. Crafted from fragments of the Deep Mirror’s fractured surface, this cursed vessel captures and amplifies the very essence of dark magic. When its contents are poured into a spell, the caster's power surges by 50%, but at a terrible cost: temporary insanity may ensue, causing a random boost or curse to one of their stats for ten seconds during combat.",
    "price": 950,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Enhances necromantic spell power",
      "Causes temporary insanity"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Necrotic Power Boost",
        "rules": "When the contents are poured into a necromancy spell, the caster's spell attack rolls and spell DCs increase by +1d6 for one minute. The effect ends if the caster casts another spell or takes damage."
      },
      {
        "title": "Temporary Insanity",
        "rules": "The caster suffers temporary insanity, causing their next action to be a random boost or curse (e.g., Strength, Dexterity, Constitution) that lasts for 10 seconds. If the effect causes a stat boost, it grants +2d4 temporary hit points; if it's a curse, the caster must make a DC 15 Wisdom saving throw or be incapacitated until the end of their next turn."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to handle its dark magic without severe risk.",
    "vendorReason": "Fractured Atrium deals in relics and artifacts of the Deep Mirror, making this cursed bottle a fitting addition to their stock.",
    "shippingDetail": "Ships via the Void Drifter Relay, known for its unpredictable routes that may add up to one week to delivery times.",
    "usage": {
      "activation": "Bonus action to pour contents into a spell",
      "duration": "Necrotic Power Boost lasts until caster casts another spell or takes damage; Temporary Insanity lasts for 10 seconds and ends on the next turn if not saved against.",
      "endsWhen": "The effect ends when the caster casts another spell or takes damage, or upon natural expiration in 10 seconds.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect its dark magic and cursed nature while ensuring it remains a challenging but not game-breaking item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:48:57.035454+00:00",
    "aiReviewedAt": "2026-07-22T05:48:57.035454+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_dark_tome": {
    "id": "fractured_atrium_dark_tome",
    "name": "Tome of the Fractured Atrium",
    "description": "The Tome of the Fractured Atrium is a leather-bound volume, its pages marred by dark sigils and cryptic runes. Hidden within the Corvinarus lineage's forbidden library, this ancient tome holds forgotten resurrection rites. Reading one page per day risks binding your soul to the void, but it grants you a 10% chance of success on necromantic checks. The text whispers with malevolent intent, its ink glowing faintly in the dark.",
    "price": 950,
    "icon": "📜",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Resurrection Rite",
      "Soul Bound Risk"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resurrection Rite",
        "rules": "Activates on reading one page per day. The reader gains a +10% chance to succeed on necromantic checks but risks their soul being bound to the void, as described in the original description."
      },
      {
        "title": "Soul Bound Risk",
        "rules": "At the end of each long rest after reading one page, roll 1d4. On a result of 3 or 4, your soul is bound to the void for 24 hours, reducing your hit point maximum by 5 until dispelled."
      }
    ],
    "levelRequirementReason": "Beginners must be cautious with such powerful and dangerous knowledge.",
    "vendorReason": "The vendor is a trusted heir of the Corvinarus lineage, who inherited this tome as part of their heritage.",
    "shippingDetail": "Delivered discreetly with an overnight courier service by the Shy Guy Smugglers.",
    "usage": {
      "activation": "Reads one page per day, passively activating its effects.",
      "duration": "Until the next long rest after reading a page.",
      "endsWhen": "The soul binding ends when dispelled or after 24 hours.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the risk and power of such a tome.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T05:48:25.371971+00:00",
    "aiReviewedAt": "2026-07-22T05:48:25.371971+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_dead_echo_amulet": {
    "id": "fractured_atrium_dead_echo_amulet",
    "name": "Dead Echo Amulet",
    "description": "The Dead Echo Amulet, forged from the last breath of a corrupted prince, hums with an eerie resonance as it clings to your neck. Its surface is etched with arcane runes that glow faintly in necrotic light, whispering secrets of forgotten realms. This heirloom allows you to hear the voices of the dead and discern hidden paths behind cursed mirrors, offering invaluable aid in navigating treacherous corridors or interrogating the soulless.",
    "category": "equipment",
    "price": 950,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Necromantic Resonance",
      "Pathfinding Mirror"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Necromantic Resonance",
        "rules": "As a bonus action, you can activate the amulet to emit an auditory pulse that reveals any necromantic traps or cursed artifacts within 30 feet. This effect lasts for 1 minute and has no save DC. The amulet can be used once per short rest."
      },
      {
        "title": "Pathfinding Mirror",
        "rules": "At the start of your turn, you can point to a corrupted mirror that conceals hidden paths or secret doors within 60 feet as a bonus action. The mirror reveals its concealed secret until the end of your next turn. No save DC is required."
      }
    ],
    "levelRequirementReason": "The amulet's necromantic resonance requires a basic understanding of arcane forces.",
    "vendorReason": "As a relic dealer, Fractured Atrium specializes in ancient and cursed artifacts like the Dead Echo Amulet.",
    "shippingDetail": "The amulet is sent via Koopa Postal's express courier, ensuring it arrives swiftly to your doorstep.",
    "usage": {
      "activation": "Bonus action for Necromantic Resonance; Bonus action for Pathfinding Mirror",
      "duration": "1 minute for Necromantic Resonance; Until the end of your next turn for Pathfinding Mirror",
      "endsWhen": "The effect duration ends or when the amulet is destroyed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The amulet's rarity and unique abilities justify a price of 1000 XP, making it a valuable yet balanced addition to any adventurer's inventory.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:48:41.208798+00:00",
    "aiReviewedAt": "2026-07-22T05:48:41.208798+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_death_echo_amulet": {
    "id": "fractured_atrium_death_echo_amulet",
    "name": "Death Echo Amulet of the Broken Throne",
    "description": "The Death Echo Amulet of the Broken Throne hums with the quiet whispers of the deceased. Crafted from the fractured stones of the Atrium, it channels the essence of those who have passed. When worn, you can call upon their final emotions to bolster your combat prowess. The amulet's pulse marks the passage of time, and each invocation saps a fraction of your vitality, but its power ensures that your allies feel your resolve.",
    "category": "equipment",
    "price": 950,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Echo of the Fallen",
      "Emotion Boost"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Echo of the Fallen",
        "rules": "As an action, you can speak to the deceased and call forth their essence. This grants +20% damage to all targets within 15 feet for 3 rounds. The effect ends if you are incapacitated or if your HP drops below half."
      },
      {
        "title": "Emotion Boost",
        "rules": "The amulet amplifies the last emotion of the deceased, providing a temporary buff based on their final state: +2 to Stealth checks when the last emotion was sadness; +2 to Speed when it was rage. This lasts until the start of your next turn or if you take damage."
      }
    ],
    "levelRequirementReason": "To harness the amulet's power, you must be seasoned enough in combat and loss to wield its influence.",
    "vendorReason": "The fractured realm of Atrium holds many secrets, and those who venture there often seek relics that can help them understand their losses.",
    "shippingDetail": "Delivered by a Rakasha spirit courier, the amulet arrives with a whisper of the past.",
    "usage": {
      "activation": "Action",
      "duration": "3 rounds or until incapacitated",
      "endsWhen": "You are incapacitated or your HP drops below half",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to be a rare item that offers significant buffs but requires careful use.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:48:37.398462+00:00",
    "aiReviewedAt": "2026-07-22T05:48:37.398462+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_death_harmonizer": {
    "id": "fractured_atrium_death_harmonizer",
    "name": "Death Harmonizer",
    "description": "The Death Harmonizer is a hauntingly beautiful lute made from darkwood and obsidian, said to have been crafted in the shadowed halls of an ancient necromancer's workshop. Its strings vibrate with necrotic energy, and when played correctly, it can silence the most powerful necromantic chants or summon undead forces to your will. A misstep, however, can unleash a curse that renders its wielder speechless for a turn. Only those who have mastered the steady hand required to play this instrument truly dare to use it.",
    "category": "equipment",
    "price": 950,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Silence Necromancy",
      "Summon Undead"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Silence Necromancy",
        "rules": "When played as a bonus action, the Death Harmonizer emits a discordant tone that silences all ongoing necromantic spells within 30 feet for up to 1 minute. The spellcaster must succeed on a DC 15 Wisdom saving throw or be stunned until the end of their next turn."
      },
      {
        "title": "Summon Undead",
        "rules": "By playing a specific melody as an action, you can summon one undead creature with CR 3 or lower. The summoned creature appears within 60 feet and is under your control for 1 minute. If the melody is played incorrectly, you are cursed to be silenced for 1 round."
      }
    ],
    "levelRequirementReason": "The Death Harmonizer requires a player of at least fifth level to wield it effectively, as its necrotic energies demand a significant amount of control and strength.",
    "vendorReason": "Fractured Atrium, known for its unique and powerful items, carries the Death Harmonizer due to its dark magic and potential to disrupt necromantic rituals within the region.",
    "shippingDetail": "Due to its fragile nature and the arcane energy it contains, the Death Harmonizer is shipped via a specially charmed Pipe Express courier, ensuring safe delivery by nightfall.",
    "usage": {
      "activation": "Bonus action for Silence Necromancy; Action to Summon Undead",
      "duration": "Silence lasts up to 1 minute; Summoned undead controlled for 1 minute",
      "endsWhen": "Spell ends on a successful saving throw or when the duration expires; Cursed player is silenced until their next turn",
      "charges": "Unlimited, but requires concentration"
    },
    "priceReason": "The Death Harmonizer's balanced XP price reflects its dual abilities to silence necromancy and summon undead, along with the risk of a potential curse.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:32:13.816135+00:00",
    "aiReviewedAt": "2026-07-22T19:32:13.816135+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_death_mirage": {
    "id": "fractured_atrium_death_mirage",
    "name": "Death Mirage Cloak",
    "description": "The Death Mirage Cloak is a cloak spun from the very fabric of deathly dreams. Woven with threads of shadow and wraith, it grants the wearer the eerie ability to phase through solid matter for brief moments. This spectral garment also offers a slim chance of resurrection should one's life flicker out on the battlefield. Ideal for infiltrating necromancer strongholds or escaping from deadly traps, this cloak is both a weapon and a shield in the dark arts.",
    "category": "equipment",
    "price": 950,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Phasing Through Walls",
      "Resurrection Chance"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Phasing Through Walls",
        "rules": "As a bonus action, the wearer can phase through walls for up to 3 seconds. This effect ends when the user moves into solid matter or after 3 seconds expire. The wearer takes 1d6 force damage on a failed Strength saving throw (DC 14) if they try to phase while their body is partially obstructed."
      },
      {
        "title": "Resurrection Chance",
        "rules": "If the wearer dies in combat, there is a 20% chance that they will be resurrected immediately. This effect can only trigger once per day and requires no action from the user to activate."
      }
    ],
    "levelRequirementReason": "The cloak's necrotic properties are too potent for lower-level characters, making it suitable for those who have already faced the terrors of death.",
    "vendorReason": "Fractured Atrium specializes in rare and dangerous equipment that can be found only within the darkest corners of existence.",
    "shippingDetail": "The cloak arrives in a sealed, shadow-infused container. Upon opening, the wearer must make a DC 15 Wisdom saving throw to avoid being cursed by the cloak's dark magic for one week.",
    "usage": {
      "activation": "Bonus action (Phasing), Instantaneous (Resurrection)",
      "duration": "Up to 3 seconds per phasing attempt, Instantaneous",
      "endsWhen": "Ends when the user moves into solid matter or after expiration, Ends upon successful resurrection",
      "charges": "Unlimited"
    },
    "priceReason": "The cloak's rarity and unique abilities justify its moderate price point. Its necromantic nature ensures it remains a valuable but not overpowered tool for adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:48:55.126176+00:00",
    "aiReviewedAt": "2026-07-22T05:48:55.126176+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_death_mirror_vial": {
    "id": "fractured_atrium_death_mirror_vial",
    "name": "Death Mirror Vial",
    "description": "The Death Mirror Vial is a vial of liquid darkness, said to be the tears of a corrupted mirror that once stood in the heart of the Atrium of Shadows. When consumed, it grants the user temporary control over shadows, allowing them to phase through solid objects for 30 seconds and become nearly undetectable to any form of stealth detection. Enemies who manage to enter this phasing state are left disoriented, stumbling and faltering in their movements.",
    "price": 950,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Shadow Phase",
      "Stealth Evasion"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Shadow Phase",
        "rules": "The user can phase through solid objects for 30 seconds. This effect ends if the user is hit by an attack, takes damage, or reverts to their natural form as a reaction."
      },
      {
        "title": "Stealth Evasion",
        "rules": "Enemies have disadvantage on Wisdom (Perception) checks and Intelligence (Investigation) checks made to detect the user. This effect lasts for 30 seconds and ends if the user moves more than 15 feet from their original location."
      }
    ],
    "levelRequirementReason": "The vial's control over shadows requires a basic understanding of shadow manipulation.",
    "vendorReason": "The vendors at Fractured Atrium specialize in dark and corrupted artifacts, including this mysterious vial.",
    "shippingDetail": "Ships via Lakitu Drones' express courier service, delivered within one week of purchase.",
    "usage": {
      "activation": "Consume the vial as a bonus action.",
      "duration": "30 seconds.",
      "endsWhen": "Hit by an attack or take damage, revert to natural form as a reaction; move more than 15 feet from original location.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The vial's rarity and unique effects justify this price point in the market.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:49:35.545649+00:00",
    "aiReviewedAt": "2026-07-22T05:49:35.545649+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_death_rune": {
    "id": "fractured_atrium_death_rune",
    "name": "Death Rune of the Atrium’s Maw",
    "description": "The Death Rune of the Atrium’s Maw is an ancient obsidian tablet etched with a fractured mirror image, its surface dappled by the fading light of the Deep Mirror. When invoked, it summons a spectral servant that dances in eerie patterns, delivering 100% necrotic damage and a staggering effect to any foe within reach. This spectral entity is fueled by the rune's ancient magic but requires a significant mana outlay to manifest.",
    "price": 5600,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Spectral Servant",
      "Mana Drain"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Spectral Servant",
        "rules": "When activated as an action, this rune summons a spectral servant that deals 10d6 necrotic damage per round and has a 50% chance to stagger the target. The spectral entity remains active for 10 seconds."
      },
      {
        "title": "Mana Drain",
        "rules": "Activating the rune consumes 200 mana, and the caster must have at least 300 mana to cast it. It can be used once every minute."
      }
    ],
    "levelRequirementReason": "Requires a minimum of 5th level to channel the ancient magic and sustain the spectral servant.",
    "vendorReason": "The Atrium's Maw is known for its ancient artifacts, and the Death Rune represents one of its most powerful relics.",
    "shippingDetail": "Due to the delicate nature of the rune, it is shipped by the Rakasha Spirit Walk, ensuring safe delivery through spectral means.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds",
      "endsWhen": "The spectral servant dissipates after 10 seconds or when damaged",
      "charges": "Once per minute"
    },
    "priceReason": "Reflects the rarity and power of an ancient artifact, requiring significant resources to craft and maintain.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:49:10.802686+00:00",
    "aiReviewedAt": "2026-07-22T05:49:10.802686+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_death_rune_scroll": {
    "id": "fractured_atrium_death_rune_scroll",
    "name": "Death Rune Scroll of the Atrium",
    "description": "This scroll, inscribed with ancient sigils and carved from the very bones of forgotten atriums, channels malevolent necrotic energies into a rift that opens upon activation. It drains the vitality of foes, reducing their hit points by 30%, and deals an additional 200% damage to undead creatures. The scroll is said to have been crafted in the depths where life and death intertwine, a relic of a time when necromancers ruled the atriums.",
    "price": 950,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Necrotic Drain",
      "Undead Amplification"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Necrotic Drain",
        "rules": "When activated as an action, this scroll opens a rift that reduces all enemy hit points by 30%. The effect has a range of 15 feet and lasts until the end of your next turn. Saving against DC 17 Constitution can negate the damage."
      },
      {
        "title": "Undead Amplification",
        "rules": "This scroll deals an additional 200% damage to undead enemies when activated. The extra damage is applied after the rift's initial damage and stacks with other sources of damage against undead."
      }
    ],
    "levelRequirementReason": "Requires a caster level of at least 5 to handle the necrotic energies effectively.",
    "vendorReason": "The fractured atrium is known for its dark artifacts and scrolls, making it the prime vendor for such potent necromantic relics.",
    "shippingDetail": "Ships via Boo Spectral Mail, ensuring swift delivery with a touch of eerie magic.",
    "usage": {
      "activation": "Action to open the rift and activate its effects.",
      "duration": "Instantaneous; lasts until the end of your next turn.",
      "endsWhen": "The effect ends when you use an action to dismiss it or if you take another action that requires concentration.",
      "charges": "Limited to 3 uses per day"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its potent necrotic capabilities and limited daily uses.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:49:40.713138+00:00",
    "aiReviewedAt": "2026-07-22T05:49:40.713138+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_death_scarf": {
    "id": "fractured_atrium_death_scarf",
    "name": "Death Scarf of the Unseen Throne",
    "description": "Woven from the threads of a forgotten necromancer’s final breath, this scarf is dyed in the blood of the damned. It grants the wearer the ability to see the soul's path of the dead and reveals hidden undead paths and trap locations within haunted halls. Worn for protection against spectral foes, it also restores 10% of your hit points after defeating a foe, making you feel stronger as you confront the dark.",
    "category": "equipment",
    "price": 950,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reveals Undead Paths",
      "Restores HP Post-Victory"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Reveal Undead Paths",
        "rules": "As an action, the scarf allows you to see hidden undead paths and trap locations within a 30-foot radius for 1 minute. This effect does not grant advantage on perception checks but ensures you avoid deadly pitfalls."
      },
      {
        "title": "Restore HP Post-Victory",
        "rules": "After defeating an enemy, this scarf restores 10% of your maximum hit points (rounded down). This effect can be used once per long rest and does not stack with other healing abilities."
      }
    ],
    "levelRequirementReason": "The complex magic woven into the scarf requires a certain level of arcane knowledge to harness effectively.",
    "vendorReason": "Fractured Atrium specializes in rare artifacts from forgotten necromancers and their works, making this scarf an expected offering.",
    "shippingDetail": "Ships under a veil of darkness, ensuring the scarf arrives undetected by any spectral beings.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The effect ends when you enter an area that doesn't have hidden undead paths or traps within its radius.",
      "charges": "Once per long rest"
    },
    "priceReason": "Balanced at a price of 1000 XP, the Death Scarf reflects its rare and powerful abilities without overshadowing other gear.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:49:24.264396+00:00",
    "aiReviewedAt": "2026-07-22T05:49:24.264396+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_death_scribe": {
    "id": "fractured_atrium_death_scribe",
    "name": "Death Scribe’s Quill",
    "description": "The Death Scribe’s Quill is crafted from the spine of an ancient scholar, its quill tip gleaming with a sickly green light. Writing with this quill channels necromantic energy into ink that etches spectral sigils upon enemies, marking them as targets for the living dead. Each use leaves behind a lingering mark that enhances subsequent attacks against the marked foe by 5%. This quill is ideal for spellcasters who seek to haunt their opponents on the battlefield.",
    "price": 950,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% damage from necromantic spells",
      "Each spell cast leaves a spectral mark"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Spectral Marking (Instant)",
        "rules": "When you cast a necromantic spell using this quill, it channels energy to etch a spectral sigil on an enemy within 30 feet. The mark remains until the end of your next turn."
      },
      {
        "title": "Enhanced Damage",
        "rules": "For every unique spectral mark left by this quill, any subsequent attack made against that target deals an additional 5% damage to it for the duration of one minute."
      }
    ],
    "levelRequirementReason": "Requires at least third level to effectively manage and enhance necromantic spells.",
    "vendorReason": "The scholarly artifacts of Fractured Atrium are known for their unique and powerful relics, making it a fitting vendor for this quill.",
    "shippingDetail": "Delivered with special care, ensuring the quill arrives in pristine condition.",
    "usage": {
      "activation": "As part of your action or bonus action when casting a necromantic spell.",
      "duration": "Instantaneous for spectral marking; enhanced damage lasts one minute per unique mark.",
      "endsWhen": "The effect ends if the target is no longer within range or if you cast another spell using this quill.",
      "charges": "Unlimited, but you can only leave a spectral mark with each use."
    },
    "priceReason": "Balanced to reflect its unique capabilities and rarity among magical artifacts.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T05:50:38.673928+00:00",
    "aiReviewedAt": "2026-07-22T05:50:38.673928+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_death_will_essence": {
    "id": "fractured_atrium_death_will_essence",
    "name": "Death Will Essence",
    "description": "A vial containing the final breath of a necromantic martyr, this Death Will Essence is forged from the very shadows that haunt the battlefield. When consumed, it grants temporary control over the battlefield’s shadows, allowing you to cast shadow-bound spells with guaranteed success on your next turn. The essence also grants immunity to fear for 5 seconds and reduces enemy movement speed by 30% while active, making foes stumble in their tracks.",
    "price": 950,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Guaranteed Shadow Spell",
      "Immunity to Fear"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Guaranteed Shadow Spell",
        "rules": "Upon consuming the essence and successfully casting a shadow-bound spell, you are guaranteed to cast it on your next turn. This effect has no save DC and does not consume any charges or uses."
      },
      {
        "title": "Immunity to Fear",
        "rules": "For 5 seconds after consumption, you gain immunity to the fear condition. During this duration, fear-based attacks and abilities have no effect on you. This immunity can be used once per short rest."
      }
    ],
    "levelRequirementReason": "This essence is potent but not overly powerful for lower-level characters.",
    "vendorReason": "The necromancers of Fractured Atrium frequently trade in such dark artifacts, as they are well-versed in the arts of shadow and death.",
    "shippingDetail": "Ships via Void Drifter Relay; delivery can take up to a week due to the unstable nature of the routes through the astral plane.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "Instantaneous effect, with duration lasting until the end of your next turn",
      "endsWhen": "The effect ends when you lose consciousness or take damage during the duration",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its rarity and potency without being game-breaking.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:50:15.419586+00:00",
    "aiReviewedAt": "2026-07-22T05:50:15.419586+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_death_wisp_core": {
    "id": "fractured_atrium_death_wisp_core",
    "name": "Death Wisp Core",
    "description": "The Death Wisp Core, a fragment of shadowy essence from the Deep Mirror's final wisp, hums with necromantic energy. When activated, it amplifies your necromancy spells by +40%, and for a brief moment, conjures a spectral wisp to dance around you, striking nearby enemies in its wake for 5 seconds. This core grants resistance to necrotic damage for the duration of its effect, ensuring you remain resilient against dark magic.",
    "category": "equipment",
    "price": 960,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Necromancy Spell Amplification",
      "Spectral Wisp Companion"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Necromancy Spell Amplification",
        "rules": "Activates as a bonus action. Grants +40% duration to all necromancy spells cast until the end of your next turn."
      },
      {
        "title": "Spectral Wisp Companion",
        "rules": "Activates as an action, summoning a spectral wisp that attacks nearby enemies for 5 seconds. The wisp deals 1d6 necrotic damage per round and has immunity to all non-magical attacks."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to wield this core effectively, as it demands a deeper grasp of necromancy.",
    "vendorReason": "The fractured atrium is known for its dark artifacts and relics from the Deep Mirror's collapse, making it the prime vendor for such an item.",
    "shippingDetail": "Delivered by spectral messengers who ensure discreet delivery within the nightmarish realms of necromancy.",
    "usage": {
      "activation": "Bonus action to activate spell amplification; Action to summon the wisp companion.",
      "duration": "Spell amplification lasts until the end of your next turn, while the wisp companion lasts for 5 seconds.",
      "endsWhen": "The effects dissipate upon their duration ending or if you lose concentration (as if on a spell).",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Death Wisp Core is priced at 1000 XP, reflecting its rare origin and the power it provides to necromancers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:50:22.287184+00:00",
    "aiReviewedAt": "2026-07-22T05:50:22.287184+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_echo_of_abyss": {
    "id": "fractured_atrium_echo_of_abyss",
    "name": "Echo of the Abyss",
    "description": "The Echo of the Abyss is a fractured crystal prism that shatters reality and amplifies necromantic might. Crafted from the shards of an abyssal rift, it echoes with the voices of the dead, resonating in the Fractured Atrium where time bends and shadows twist. When wielded, it grants temporary immunity to status effects for a fleeting moment and amplifies all necromantic spells cast within its proximity by 50%. Only those attuned to the arcane can harness this artifact's power.",
    "price": 960,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Necromantic Amplification",
      "Soul Echo"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Necromantic Amplification",
        "rules": "When activated by a necromancer, all necromantic spells cast within the prism's vicinity are enhanced by 50%, increasing their potency and damage output. This effect lasts for 1 minute or until the caster ends it."
      },
      {
        "title": "Soul Echo",
        "rules": "Grants temporary immunity to status effects for all allies within a 5-meter radius, lasting for 1 turn. This immunity can only be triggered once per encounter and is nullified by any condition that would normally dispel or end the effect."
      }
    ],
    "levelRequirementReason": "Only those with an understanding of necromancy are capable of wielding this artifact's chaotic power.",
    "vendorReason": "The fractured nature of the Atrium allows for such artifacts to be found and sold here, where reality itself is unstable.",
    "shippingDetail": "Special delivery through the Koopa Postal service ensures that this artifact arrives safely within the Fractured Atrium's unpredictable environment.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until ended by the caster",
      "endsWhen": "The effect is manually ended or the caster loses their concentration",
      "charges": "Unlimited, but requires concentration to maintain"
    },
    "priceReason": "Balanced for its rarity and unique ability to enhance necromantic spells without overpowered effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:49:54.905126+00:00",
    "aiReviewedAt": "2026-07-22T05:49:54.905126+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_echo_of_corvinarus": {
    "id": "fractured_atrium_echo_of_corvinarus",
    "name": "Echo of Corvinarus",
    "description": "The Echo of Corvinarus is a fractured relic forged from the final breath of the Corvinarus lineage. Its surface glows with spectral light, and it whispers the dark legacy of its creators. This artifact allows you to command spectral phantoms to fight by your side for moments, while also echoing your actions to grant dodging chances. It is a grim heirloom that only those who have faced their deepest fears can wield.",
    "category": "equipment",
    "price": 960,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Phantom Command",
      "Echo of Action"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Phantom Command",
        "rules": "As an action, you summon a spectral phantom to fight by your side for 5 seconds. The phantom deals 30% of your maximum hit points in damage per round but does not take commands beyond its initial appearance."
      },
      {
        "title": "Echo of Action",
        "rules": "At the end of each combat, you gain a 20% chance to dodge attacks for 10 seconds. This effect can only occur once per short or long rest."
      }
    ],
    "levelRequirementReason": "Only those who have faced their deepest fears and are at least level 5 can wield this relic.",
    "vendorReason": "The relics of the Corvinarus lineage are stored in the care of Fractured Atrium, a vendor known for rare artifacts from dark origins.",
    "shippingDetail": "Due to its fragile nature, this item is shipped with extra padding and under strict conditions to ensure safe delivery.",
    "usage": {
      "activation": "Action",
      "duration": "5 seconds for Phantom Command; lasts until the end of each combat for Echo of Action",
      "endsWhen": "On completion or if you take a short rest",
      "charges": "Unlimited, but cannot be used during the same combat"
    },
    "priceReason": "The price reflects its rarity and the balance required to ensure it does not overshadow other items of similar power.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:50:08.483049+00:00",
    "aiReviewedAt": "2026-07-22T05:50:08.483049+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_echo_of_darkness": {
    "id": "fractured_atrium_echo_of_darkness",
    "name": "Echo of Darkness",
    "description": "The Echo of Darkness is a ring forged from the very essence of forgotten graves, its surface etched with runes that shimmer like the void itself. This relic grants the wearer an eerie invisibility cloaked in shadow, allowing them to slip unnoticed through the cracks of reality for ten seconds at a time. Its whispers are more than mere sounds; they carry the weight of ancient souls, offering cryptic guidance from beyond the veil and granting +25% effectiveness to necromancy spells cast within its influence.",
    "category": "equipment",
    "price": 960,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility Cloak",
      "Necromancy Expertise"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility Cloak",
        "rules": "Activates as a bonus action, providing the wearer with invisibility for ten seconds. This effect can be used once per short or long rest."
      },
      {
        "title": "Necromancy Expertise",
        "rules": "+25% effectiveness to necromancy spells cast while this ring is worn, with no limit on spell use per day."
      }
    ],
    "levelRequirementReason": "The Echo of Darkness's dark magic and cryptic runes are accessible to even the novice caster.",
    "vendorReason": "The relic is a prized find from the ancient tombs of Atrium, making it a natural addition to the vendor’s inventory.",
    "shippingDetail": "Ships with expedited Void Drifter service ensuring safe and swift delivery through the dimensions.",
    "usage": {
      "activation": "Bonus action for invisibility; active while worn for necromancy spell effectiveness.",
      "duration": "Invisibility lasts ten seconds; necromancy spells are always effective when worn.",
      "endsWhen": "Effect ends at the start of your next turn or if you activate it again, whichever comes first. Necromancy effectiveness is permanent as long as the ring is worn.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Echo of Darkness combines rare materials with ancient magic to offer both utility and power at an accessible price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:51:18.876062+00:00",
    "aiReviewedAt": "2026-07-22T05:51:18.876062+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_echo_scepter": {
    "id": "fractured_atrium_echo_scepter",
    "name": "Echo Scepter of the Deep Mirror",
    "description": "The Echo Scepter of the Deep Mirror is a mirror-bound scepter etched with runes that shimmer like fractured glass. Crafted from an ancient mirror salvaged from the sunken Atrium, it channels the very essence of fear and memory. When activated, it summons spectral echoes of past battles, their visages causing fleeting hallucinations in any foe within 30 feet who must succeed on a DC 15 Wisdom saving throw or be disoriented for 24 hours.",
    "category": "equipment",
    "price": 960,
    "icon": "🌀",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+20% critical strike chance against undead",
      "Summons spectral echo of last battle"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Echoes of Battle",
        "rules": "Activates as a bonus action, summoning an ethereal echo of the wielder’s most recent conflict. The echo lingers for 10 seconds, creating a daze in nearby foes within 30 feet who fail a DC 15 Wisdom saving throw (resists with advantage). Once used per long rest."
      },
      {
        "title": "Critical Edge",
        "rules": "+20% chance to score critical hits against undead creatures. This effect does not stack with other sources of critical hit bonuses."
      }
    ],
    "levelRequirementReason": "Requires level 5 to wield, as the magic channels deep psychological and spiritual energies.",
    "vendorReason": "The Atrium was once a nexus of ancient magic, making it fitting that its relics are sold by those who guard its secrets.",
    "shippingDetail": "Due to the fragile nature of the mirror components, this item is shipped with utmost care using padded crates and reinforced packaging.",
    "usage": {
      "activation": "Bonus action",
      "duration": "10 seconds",
      "endsWhen": "The echo dissipates after 10 seconds or when the wielder attacks an enemy within range.",
      "charges": "1 per long rest"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rare crafting materials and unique magical properties.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:50:46.401496+00:00",
    "aiReviewedAt": "2026-07-22T05:50:46.401496+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_echo_soul_ward": {
    "id": "fractured_atrium_echo_soul_ward",
    "name": "Echo Soul Ward",
    "description": "The Echo Soul Ward is a fractured amulet crafted from the heartwood of a spectral tree, said to have been found in the ruins of Atrium Fractured. This protective charm absorbs the echoes of spectral entities and channels them into your next spell, bolstering necromantic incantations with raw spectral power. The ward's core glows faintly under dim light, pulsing when it draws energy from a spectral attack. It is a perfect companion for those navigating fractured dimensions or battling phantoms.",
    "category": "equipment",
    "price": 960,
    "icon": "🧟",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs Spectral Echoes",
      "Enhances Necromantic Spells"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Absorbs Spectral Echoes",
        "rules": "When the wearer is hit by a spectral attack, they absorb 100% of the damage and can use this absorbed energy to enhance their next spell. The absorption can only happen once per battle."
      },
      {
        "title": "Enhances Necromantic Spells",
        "rules": "The Echo Soul Ward grants a +1 bonus to all necromancy spell checks, with an additional +2 bonus if the wearer is within 30 feet of a spectral ally summoned through this amulet. The effect lasts until the end of their next turn."
      }
    ],
    "levelRequirementReason": "The Echo Soul Ward requires a minimum level to ensure its user can effectively harness and control the absorbed spectral energies.",
    "vendorReason": "Fractured Atrium specializes in crafting items that resonate with the fractured dimensions, making it an ideal vendor for such an item.",
    "shippingDetail": "Ships directly from the spectral plane, potentially causing a slight delay due to dimensional interference.",
    "usage": {
      "activation": "Instantaneous when hit by a spectral attack or as a bonus action to enhance a spell check.",
      "duration": "Until the end of their next turn for spell enhancement.",
      "endsWhen": "The absorption is used, the spell cast, or at the start of their next turn if no spells are cast.",
      "charges": "Unlimited; recharges after a long rest."
    },
    "priceReason": "Balanced to ensure it remains a valuable asset without overshadowing other necromancer equipment.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:32:25.135541+00:00",
    "aiReviewedAt": "2026-07-22T19:32:25.135541+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_echoing_cloak": {
    "id": "fractured_atrium_echoing_cloak",
    "name": "Echoing Cloak of the Fractured Atrium",
    "description": "The Echoing Cloak of the Fractured Atrium weaves whispers of shattered glass and spectral light into its fabric, amplifying necromantic chants and granting a fleeting glimpse into the world beyond. When worn during a ritual, it stirs the very air to summon a spectral servant with a 30% chance, providing temporary aid in combat or exploration. The cloak hums with latent energy that only those attuned to its fractured essence can harness.",
    "category": "equipment",
    "price": 960,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% necromancy spell damage",
      "30% chance to summon spectral servant during ritual"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Spectral Servant Summoning",
        "rules": "When worn during a necromantic ritual, the Echoing Cloak grants a 30% chance to summon a spectral servant with CR 1/8 that assists for 1 hour. The cloak must be activated as an action and requires a successful DC 15 Wisdom (Insight) check to maintain concentration."
      },
      {
        "title": "Necromancy Amplification",
        "rules": "The Echoing Cloak amplifies necromantic chants by +15% damage, affecting all spells of the necromancy school cast while worn. This effect lasts for 1 minute and can be renewed as a bonus action."
      }
    ],
    "levelRequirementReason": "The cloak's latent spectral energy requires at least a 3rd-level spellcaster to effectively harness its power.",
    "vendorReason": "Fractured Atrium specializes in artifacts recovered from the shattered atrium, making this cloak one of their most sought-after items.",
    "shippingDetail": "Ships via the Void Drifter Relay with an additional handling delay of 1 week due to its delicate nature.",
    "usage": {
      "activation": "Activate as a bonus action to amplify necromancy spells and concentrate for spectral servant summoning.",
      "duration": "Spectral Servant lasts 1 hour, Necromancy Amplification lasts 1 minute (renewable by bonus action).",
      "endsWhen": "Concentration is lost or the duration ends naturally.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced for a rare item, providing significant utility in necromantic rituals without overpowered effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:51:39.857552+00:00",
    "aiReviewedAt": "2026-07-22T05:51:39.857552+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_feywild_essence_core": {
    "id": "fractured_atrium_feywild_essence_core",
    "name": "Feywild Essence Core",
    "description": "The Feywild Essence Core is a jagged shard of fractured reality, pulsating with chaotic necromantic energy. Crafted from the very essence of the Feywild, it grants temporary phase shifts to summoned undead, making them immune to area effects for 10 seconds. This core also imbues summoned units with +20% necromantic damage and a chance to trigger a 'Feywild Echo' upon their death, which manifests as an unpredictable beneficial or detrimental effect.",
    "category": "equipment",
    "price": 960,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Phase Shift Immunity",
      "+20% Necromantic Damage"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Phase Shift Immunity",
        "rules": "When activated, the core grants summoned undead a temporary phase shift, making them immune to area damage for 10 seconds. This effect ends if the unit takes any damage or when its duration expires."
      },
      {
        "title": "Necromantic Boost",
        "rules": "Summons receive +20% necromantic damage. This effect is active until the next time the summoned creature attacks, moves, or casts a spell."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to master the necromantic energies and control such an artifact.",
    "vendorReason": "Fractured Atrium, a forger of arcane relics, sources rare materials from the Feywild itself.",
    "shippingDetail": "Ships under cover of night to ensure the core's energy remains undisturbed during transit.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds",
      "endsWhen": "Damage is taken or duration expires",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "Balanced price reflects the item's unique combination of utility and rarity in crafting necromantic items.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:50:59.309048+00:00",
    "aiReviewedAt": "2026-07-22T05:50:59.309048+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_feywraith_spirit": {
    "id": "fractured_atrium_feywraith_spirit",
    "name": "Feywraith Echo",
    "description": "The Feywraith Echo, a cursed relic that channels shadowy power from the Feywild, weaves spectral weapons from the shadows to assist its bearer in navigating fractured dimensions. Its wielder can summon ephemeral blades that deal true damage and grant +50% critical strike chance against undead foes. With each use, the relic heals 10% of the user's maximum hit points from shadow damage taken, but it also saps their essence, requiring a week-long rest to recharge.",
    "price": 960,
    "icon": "🌿",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Ephemeral Blades",
      "+50% Critical Strike Chance vs Undead"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Ephemeral Blades",
        "rules": "As an action, the wielder can summon spectral blades that deal 1d6 force damage to a creature within 3 meters. The blades persist for up to 1 minute or until they deal damage."
      },
      {
        "title": "+50% Critical Strike Chance vs Undead",
        "rules": "The user gains +50% chance to land critical strikes against undead enemies, with no additional saving throw required."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to wield effectively and combat the challenges of the Feywild.",
    "vendorReason": "Fractured Atrium specializes in relics that bridge otherworldly realms, making it a logical vendor for this Feywild artifact.",
    "shippingDetail": "The relic is fragile and requires special packaging. Shipping can take up to two days due to the delicate nature of the item.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous summoning, lasts for 1 minute or until used in combat",
      "endsWhen": "Used in combat against a creature or after 1 minute expires",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The price reflects the relic's rarity, Feywild origin, and its unique benefits that enhance combat effectiveness.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T05:51:30.357003+00:00",
    "aiReviewedAt": "2026-07-22T05:51:30.357003+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_mirror_blood": {
    "id": "fractured_atrium_mirror_blood",
    "name": "Mirror Blood Infusion",
    "description": "A vial of liquid shadow-mirror energy, harvested from the fractured heart of the Atrium, Mirror Blood Infusion grants fleeting visions into the past and enhances necromantic resonance. Consumed with a grimace, the vial's contents coat your tongue in a bitter, crimson hue before settling into your veins, offering glimpses of lost battles and forgotten sorceries. At the cost of your sanity, you may see the past, but remember: what is revealed might haunt you for years to come.",
    "price": 960,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% necromancy spell duration",
      "Grants 10-second vision of past events"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Necromancy Spell Duration Boost",
        "rules": "When consumed, this vial increases the duration of any necromancy spell cast by you by +20%. The effect is instantaneous upon drinking and lasts until the spell ends or you use it again."
      },
      {
        "title": "Vision of Past Events",
        "rules": "For 10 seconds after consuming the vial, you gain the ability to see past events as if they were unfolding before your eyes. You can use this effect three times per day at dawn. The vision reveals a single event from within the last year. While under its effects, you have disadvantage on Wisdom (Perception) checks that rely on hearing or sight."
      }
    ],
    "levelRequirementReason": "This item's price and effects are balanced for characters who have already reached a significant milestone in their necromancy studies.",
    "vendorReason": "The Atrium's fractured heart yields this unique vial, and only the Fractured Atrium can claim its secrets.",
    "shippingDetail": "Delivered via the Void Drifters' fastest courier service, ensuring that the fragile vial reaches you in perfect condition.",
    "usage": {
      "activation": "Consume the vial as an action.",
      "duration": "Instantaneous effect with a duration of 10 seconds for each use.",
      "endsWhen": "The vision ends when its duration expires, or if consumed again before it has ended.",
      "charges": "Can be used three times per day."
    },
    "priceReason": "This price reflects the rarity of the Atrium's shadow-mirror energy and the unique balance between utility and risk.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:52:28.656361+00:00",
    "aiReviewedAt": "2026-07-22T05:52:28.656361+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_mirror_core": {
    "id": "fractured_atrium_mirror_core",
    "name": "Mirror Core of the Fractured Atrium",
    "description": "The Mirror Core of the Fractured Atrium hums with the spectral light of forgotten battles and the whispers of the dead. Crafted from the shattered glass of an ancient atrium, this pulsating crystal reflects not just light but the very memories of those who have passed. When used in necromantic rituals, it amplifies dark magic by 25%, revealing hidden truths about the deceased within a 10-meter radius and granting a +10% chance to detect any undead structures lying in wait.",
    "category": "equipment",
    "price": 960,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Dark Magic Amplifier",
      "Undead Detection"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Dark Magic Amplifier",
        "rules": "When activated as an action, this core amplifies necromancy spells by 25%. It has a duration of 1 minute and requires a concentration check (DC 14). The effect ends if the caster stops concentrating or takes damage."
      },
      {
        "title": "Undead Detection",
        "rules": "Once per short rest, this core can be used to reveal hidden undead structures within a 10-meter radius. This ability has no save DC and does not require concentration."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 5 due to its potent necromantic properties.",
    "vendorReason": "The Fractured Atrium is known for dealing with rare and powerful artifacts, making the Mirror Core a natural addition to their inventory.",
    "shippingDetail": "This item is shipped via special courier ensuring safe delivery within one week of order placement.",
    "usage": {
      "activation": "Activates as an action or bonus action during necromancy rituals.",
      "duration": "1 minute (concentration required).",
      "endsWhen": "Effect ends if the caster stops concentrating or takes damage.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The balanced XP price reflects its rarity and powerful necromantic capabilities, making it a sought-after item in the market.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:52:10.925164+00:00",
    "aiReviewedAt": "2026-07-22T05:52:10.925164+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_mirror_echo": {
    "id": "fractured_atrium_mirror_echo",
    "name": "Mirror Echo of the Deep",
    "description": "The Mirror Echo of the Deep shatters light into spectral fragments, each shard a window to the final moments of the dead. Crafted from the fractured remains of an ancient atrium, this mirror reveals hidden wills and last thoughts, granting temporary necromantic visions that dance across its surface like dying embers. When wielded, it offers a fleeting glimpse into the souls of the abyss, making the unseen undead just as tangible as the living.",
    "category": "equipment",
    "price": 960,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% chance to detect nearby undead",
      "Grants +15% necromancy skill proficiency"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Undead Detection Boost",
        "rules": "Activates on command, lasts for 3 rounds. Grants a +20% bonus to Perception checks made to detect undead within 60 feet. Ends when the wielder dismisses it or upon failing a Wisdom saving throw (DC 14)."
      },
      {
        "title": "Enhanced Necromancy Proficiency",
        "rules": "Passive effect that increases the user's proficiency in necromancy by +15% until the end of their next long rest. This benefit does not stack with other sources of proficiency."
      }
    ],
    "levelRequirementReason": "This mirror requires a minimum level to wield due to its complex enchantments and the mystical energy it draws from deep necrotic realms.",
    "vendorReason": "The vendors at Fractured Atrium specialize in rare relics recovered from ancient ruins, making this mirror an expected offering for those who seek dark knowledge.",
    "shippingDetail": "Delivered with a ceremonial spirit guide to ensure safe passage through treacherous terrains.",
    "usage": {
      "activation": "Command word or short action",
      "duration": "3 rounds, ends on command or failed save",
      "endsWhen": "Dismissed by the wielder or upon failure of a Wisdom saving throw (DC 14)",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its rarity and the magical materials required for its construction, as well as the mystical energy it harnesses.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:40:56.175583+00:00",
    "aiReviewedAt": "2026-07-22T19:40:56.175583+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_mirror_echo_core": {
    "id": "fractured_atrium_mirror_echo_core",
    "name": "Mirror Echo Core of the Fractured Atrium",
    "description": "The Mirror Echo Core of the Fractured Atrium is a fractured relic encased in obsidian, its surface etched with arcane runes that shimmer like shattered glass. When activated, it conjures a 3x3 mirror field that echoes and reflects both your spells and enemies' attacks, doubling necromantic damage. Each reflection has a chance to trigger a soul echo burst, unleashing a surge of spectral energy that can disrupt the battlefield for a fleeting moment.",
    "price": 960,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+25% Necromantic Damage",
      "Reflects Spells and Movement"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Echoing Reflections",
        "rules": "Activate as an action. The Mirror Echo Core creates a 3x3 mirror field that lasts for 10 seconds, reflecting all necromantic spells cast by the user or any enemy attacks directed at them. Each reflected spell has a 25% chance to trigger a soul echo burst, which deals additional necromantic damage equal to twice the original spell's level."
      },
      {
        "title": "Soul Echo Burst",
        "rules": "When triggered by a reflected attack or spell, the Mirror Echo Core releases an energy pulse that disrupts all creatures within 10 feet. This burst has a duration of 5 rounds and deals necromantic damage to all targets in the area, equal to twice the user's Charisma modifier."
      }
    ],
    "levelRequirementReason": "The core requires a minimum of three levels to wield effectively, ensuring it complements more advanced necromancers.",
    "vendorReason": "This relic is a direct product of the Fractured Atrium's mystical forge and thus belongs exclusively in their inventory.",
    "shippingDetail": "Due to its fragile nature, it must be sent via Koopa Postal’s reinforced courier service with additional padding for safe delivery.",
    "usage": {
      "activation": "Activate as a bonus action.",
      "duration": "10 seconds per activation.",
      "endsWhen": "The mirror field dissipates after 10 seconds or if the user takes an action that requires their hands.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The core's unique construction and rare mystical properties justify its moderate price in terms of XP value.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:52:21.143242+00:00",
    "aiReviewedAt": "2026-07-22T05:52:21.143242+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_mirror_heart": {
    "id": "fractured_atrium_mirror_heart",
    "name": "Mirror Heart of the Deep Atrium",
    "description": "The Mirror Heart of the Deep Atrium is a shattered relic, its fractured surface etched with arcane symbols that glow faintly in the dark. Crafted from the heartwood of an ancient Atrium tree, this artifact amplifies necromantic magic and reveals the true essence of enemies struck down. Upon slaying a foe, it grants a fleeting vision of their true form, allowing you to glimpse beyond the veil of existence for a brief moment.",
    "price": 960,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+25% Necromantic Damage",
      "True Form Vision"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Necromantic Amplification",
        "rules": "Activate as an action. This effect increases the damage of necromantic spells by +25%. The amplification lasts until the end of your next turn."
      },
      {
        "title": "True Form Vision",
        "rules": "Activates upon defeating a target with a melee weapon attack or a spell dealing necromantic damage. You gain True Sight for 8 seconds, allowing you to see through illusions and perceive the true form of the slain creature."
      }
    ],
    "levelRequirementReason": "Requires at least third-level spells to effectively utilize its amplification.",
    "vendorReason": "The fractured Atrium is known for salvaging and selling relics of the Deep Atrium, including this powerful mirror heart.",
    "shippingDetail": "Ships via Void Drifter Relay with a two-week delivery time due to its fragile nature.",
    "usage": {
      "activation": "Activate as an action or reaction.",
      "duration": "Necromantic Amplification lasts until the end of your next turn. True Form Vision lasts for 8 seconds upon activation.",
      "endsWhen": "The effects end when you take a long rest, are incapacitated, or die.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP as it provides significant utility without being overpowered.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T05:52:52.804984+00:00",
    "aiReviewedAt": "2026-07-22T05:52:52.804984+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_mirror_of_the_dead": {
    "id": "fractured_atrium_mirror_of_the_dead",
    "name": "Mirror of the Dead Sovereign",
    "description": "The Mirror of the Dead Sovereign is a rare artifact crafted from ancient necrotic glass. It hums with malevolent energy, reflecting not just physical form but also the true essence of its target. When activated, it reveals the soul of an enemy, exposing their deepest necromantic secrets for 10 seconds and granting insight into their weaknesses. Upon reflection, it causes temporary damage to the foe's spirit for 5 seconds. The mirror’s gaze can even summon a spectral duplicate of the targeted creature, providing a fleeting but deadly distraction.",
    "category": "equipment",
    "price": 960,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Expose Necrotic Secrets",
      "Spectral Doppelganger"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Expose Necrotic Secrets",
        "rules": "When activated as an action, the mirror reveals the necromantic weaknesses of a target enemy for 10 seconds. The effect ends if the wielder drops or sheaths the mirror."
      },
      {
        "title": "Spectral Doppelganger",
        "rules": "Upon activation, the mirror can summon a spectral duplicate of an enemy within reach as a bonus action, which lasts for 3 seconds and has no save DC. This effect is limited to once per long rest."
      }
    ],
    "levelRequirementReason": "The Mirror requires significant arcane knowledge and power to wield its necrotic magic effectively.",
    "vendorReason": "Master Forger Cynara of Fractured Atrium specializes in crafting items that challenge the boundaries between life and death, making this mirror a fitting addition to her inventory.",
    "shippingDetail": "The item is delivered securely by Lakitu Drones with a guaranteed safe arrival within one week.",
    "usage": {
      "activation": "Activated as an action or bonus action. The spectral duplicate can be summoned as a bonus action.",
      "duration": "10 seconds for 'Expose Necrotic Secrets', and 3 seconds for summoning the 'Spectral Doppelganger'.",
      "endsWhen": "The effect ends if the wielder drops or sheaths the mirror, or if the creature it duplicates is destroyed.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare craftsmanship and powerful effects without overshadowing other items of similar rarity.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T05:52:37.451913+00:00",
    "aiReviewedAt": "2026-07-22T05:52:37.451913+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_mirror_shard": {
    "id": "fractured_atrium_mirror_shard",
    "name": "Mirror Shard of the Fractured Atrium",
    "description": "The Mirror Shard of the Fractured Atrium is a jagged, fractured relic from an ancient mirror that once held the soul of the Atrium. Its surface hums with unstable necromantic energies, and when activated, it summons spectral echoes of the dead. These echoes are not mere ghosts but wisps of energy that dance around you, enhancing your necromantic abilities. The shard itself is a shimmering amalgamation of glass and shadow, each jagged edge reflecting a fragment of the past.",
    "category": "equipment",
    "price": 970,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Summon Spectral Echoes",
      "Enhanced Necromancy"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Summon Spectral Echoes",
        "rules": "As an action, you can summon one spectral echo within 30 feet. This echo lasts until the end of your next turn and provides a +1 bonus to all necromantic damage rolls. You can only summon one echo per short or long rest."
      },
      {
        "title": "Enhanced Necromancy",
        "rules": "You gain a +20% increase to the damage dealt by any necromantic spell you cast. This effect lasts until the end of your next turn and does not stack with other similar bonuses."
      }
    ],
    "levelRequirementReason": "This shard requires significant magical prowess, as it manipulates unstable necromantic energies that are inherently dangerous.",
    "vendorReason": "The shards were originally discovered within the ruins of the Atrium and remain in the care of its guardian, ensuring they are sold only to those who can wield them safely.",
    "shippingDetail": "Due to the shard's fragile nature, it is shipped via specialized protective packaging and requires a day longer than usual for delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of your next turn",
      "endsWhen": "The effect ends when you cast another spell or take an action that requires concentration",
      "charges": "Unlimited"
    },
    "priceReason": "This shard is priced at 1000 XP due to its rarity, the unstable necromantic energies it contains, and the skill required to safely wield it.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:52:58.581391+00:00",
    "aiReviewedAt": "2026-07-22T05:52:58.581391+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_mirror_tome": {
    "id": "fractured_atrium_mirror_tome",
    "name": "Mirror Tome of the Deep Reflection",
    "description": "The Mirror Tome of the Deep Reflection is a cursed, leather-bound tome whose pages shimmer with an eerie light. When opened, it reflects the caster’s deepest fears and regrets into its glassy surface, revealing not only the target's hidden curse but also granting a 20% chance to detect concealed enemy spells or traps. However, if the target is indeed cursed, the tome drains 10% of the reader’s soul strength, leaving them more vulnerable.",
    "price": 970,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals hidden curse and reveals soul trait",
      "Grants chance to detect hidden enemy spells or traps"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Detect Hidden Threats",
        "rules": "When the tome is opened, there is a 20% chance to reveal any concealed enemy spells or traps within the area. This effect lasts for an hour and can be used once per long rest."
      },
      {
        "title": "Soul Drain on Cursed Targets",
        "rules": "If the target revealed by the tome is indeed cursed, the reader suffers a 10% drain to their Soul Strength stat immediately after the reading. This effect cannot be resisted with a saving throw and ends when the caster completes a short rest."
      }
    ],
    "levelRequirementReason": "The item requires a minimum level of 5 due to its cursed nature, which drains soul strength.",
    "vendorReason": "The Fractured Atrium is known for dealing with arcane artifacts and relics tainted by dark magic, making it the perfect vendor for this cursed tome.",
    "shippingDetail": "Ships via spirit courier; delivery can take up to a week depending on location.",
    "usage": {
      "activation": "Reading the tome requires an action and is used once per short or long rest.",
      "duration": "The effects last for one hour, expiring after this time.",
      "endsWhen": "The effect ends when the reader completes a short rest or if the target's curse is revealed.",
      "charges": "Unlimited uses between rests"
    },
    "priceReason": "The item’s price reflects its cursed nature, limited use, and the risks involved with using it.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:53:07.879009+00:00",
    "aiReviewedAt": "2026-07-22T05:53:07.879009+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_mirror_wraith": {
    "id": "fractured_atrium_mirror_wraith",
    "name": "Mirror Wraith Shard",
    "description": "The Mirror Wraith Shard, a fractured relic of the Atrium, traps an ethereal wraith within its glassy surface. This shard allows you to see through the eyes of the dead, revealing the true form of your enemies for fleeting moments. However, each time you use it, your own reflection flickers in the mirror's depths, leaving you vulnerable to your own visage for 10 seconds. The wraith also causes a 15% chance that any enemy movement is reflected back at them, disrupting their attacks and spells.",
    "category": "equipment",
    "price": 970,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Reveals True Form",
      "Reflects Enemy Movement"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Reveal True Form",
        "rules": "When you activate the shard as a bonus action, it reveals an enemy's true form for 10 seconds. This effect has no save DC and does not consume charges. However, your own reflection appears in the mirror within that time, reducing your AC by 2 during this duration."
      },
      {
        "title": "Reflect Enemy Movement",
        "rules": "The shard grants a 15% chance that any movement or attack made by an enemy is reflected back at them. This effect lasts for as long as you hold the shard and has no save DC, but it can only occur once per round."
      }
    ],
    "levelRequirementReason": "The wraith's ethereal energy demands a certain level of arcane mastery to control.",
    "vendorReason": "This relic is a specialty item crafted by the fractured Atrium, known for its unique and powerful artifacts.",
    "shippingDetail": "Delivered with spectral speed, ensuring safe arrival at your doorstep.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "10 seconds per activation",
      "endsWhen": "The duration ends when the effect expires or you stop holding the shard.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced as a rare item that offers unique and potent utility without being overpowered.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:53:15.936768+00:00",
    "aiReviewedAt": "2026-07-22T05:53:15.936768+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_mirrored_bone": {
    "id": "fractured_atrium_mirrored_bone",
    "name": "Mirrored Bone of Corvinarus",
    "description": "The Mirrored Bone of Corvinarus is a fractured relic, its bone shards etched with ghostly runes. When touched, it opens a spectral portal that allows you to see through the eyes of the recently departed, gaining insight into their final moments and intentions. The bone's echo lingers in your vision for 10 seconds, granting you a fleeting communion with the dead. Perfect for necromantic investigators seeking truths from beyond.",
    "category": "equipment",
    "price": 970,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+20% to Necromancy skill",
      "Grants 30% chance to reveal enemy soul signature"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spectral Communion",
        "rules": "Activates on contact, providing a brief vision through the eyes of the recently deceased. Lasts for 10 seconds and can be used once per long rest."
      },
      {
        "title": "Echo of the Dead",
        "rules": "For as long as you hold the bone, there is a 30% chance that any hostile soul signature within 60 feet will be revealed to you. This effect does not require an action and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The relic's spectral properties are potent but not overwhelming, making it accessible to beginning necromancers.",
    "vendorReason": "As a vendor specializing in arcane and rare relics, Fractured Atrium naturally stocks items that aid necromantic investigation.",
    "shippingDetail": "Delivered discreetly through Shady Channel, ensuring the relic arrives unmarked and undisturbed.",
    "usage": {
      "activation": "Contact with the bone",
      "duration": "10 seconds on activation; lasts for a short rest once per day",
      "endsWhen": "The effect ends when the duration expires or you stop holding the bone",
      "charges": "Unlimited, resets at dawn"
    },
    "priceReason": "Balanced against other rare items, this relic offers potent necromantic insight without breaking the bank.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T05:53:33.828042+00:00",
    "aiReviewedAt": "2026-07-22T05:53:33.828042+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_mirrored_bone_scepter": {
    "id": "fractured_atrium_mirrored_bone_scepter",
    "name": "Mirrored Bone Scepter",
    "description": "The Mirrored Bone Scepter is a necromantic relic forged from the shattered reflection of a fallen god-king, its surface etched with ancient runes that pulse with the echoes of dead kings’ whispers. It amplifies necromancy spells with eerie precision and grants the wielder a spectral lieutenant as a summoned guardian. The scepter’s very essence is bound to the undead it commands, making it an indispensable tool for those who walk in darkness.",
    "category": "equipment",
    "price": 5600,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% Necromancy Spell Damage",
      "Grants Spectral Lieutenant on Cast"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Echo of the Dead",
        "rules": "When cast, this spell deals 200% damage to undead creatures and can be used once per long rest."
      },
      {
        "title": "Spectral Lieutenant",
        "rules": "On activation, the scepter summons a spectral lieutenant that remains for one minute. The lieutenant has AC 18, 30 hit points, attacks with +4 bonus to hit and deals 2d6 necrotic damage on hit. It can be dismissed as an action."
      }
    ],
    "levelRequirementReason": "This relic requires a minimum level of 5 due to its powerful necromantic abilities.",
    "vendorReason": "Fractured Atrium is known for handling ancient and exotic items, including this broken yet potent scepter.",
    "shippingDetail": "The scepter is carefully packed in a protective case to prevent damage during transit.",
    "usage": {
      "activation": "Requires a bonus action to activate the spectral lieutenant. The Echo of the Dead spell can be cast as an action with a range of 120 feet.",
      "duration": "Spectral lieutenant remains for one minute or until dismissed. Echo of the Dead lasts for 1 hour and can only be cast once per long rest.",
      "endsWhen": "The effect ends when the scepter is destroyed, expended, or the spell ends.",
      "charges": "Unlimited uses, recharging after a short rest."
    },
    "priceReason": "The item’s rarity and unique necromantic abilities justify its price of 2500 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:40:55.809142+00:00",
    "aiReviewedAt": "2026-07-22T19:40:55.809142+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_mirrored_core": {
    "id": "fractured_atrium_mirrored_core",
    "name": "Mirrored Core of the Deep Atrium",
    "description": "The Mirrored Core of the Deep Atrium is a crystalline orb forged from the ancient ruins of the Atrium, a place where reality bends and mirrors distort. When held, it reveals the true form of one’s deepest fear, causing an eerie reflection that swaps soul attributes with its mirror version for 1 minute. This core grants +20% resistance to illusions and hallucinations but also causes the user's image to flicker briefly, giving enemies a momentary glimpse into their fears.",
    "price": 970,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Swap Soul Attributes",
      "Resistance to Illusions"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Soul Swap",
        "rules": "When activated as an action, the user temporarily swaps soul attributes with its mirror version. This effect lasts for 1 minute and has a 25% chance of failure each use. The swap ends early if the user is damaged."
      },
      {
        "title": "Illusion Resistance",
        "rules": "Grants +20% resistance to illusions and hallucinations until the end of your next turn. This effect stacks with other sources of resistance, up to a maximum of 50%. It does not protect against all effects."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to handle the core's unstable magic and mental strain.",
    "vendorReason": "The Atrium's ruins are scattered with such artifacts, making it a natural source for the Mirrored Core.",
    "shippingDetail": "Delivered through shadowy channels, ensuring safe and discreet transport.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until damaged",
      "endsWhen": "Damage or end of the effect duration",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1,000 XP, reflecting its rare forging and unstable magic.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T05:53:21.653801+00:00",
    "aiReviewedAt": "2026-07-22T05:53:21.653801+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_mirrored_echo": {
    "id": "fractured_atrium_mirrored_echo",
    "name": "Mirrored Echo Pendant",
    "description": "The Mirrored Echo Pendant hums with fractured shards of the Deep Mirror’s essence, each shimmer reflecting a whisper of its ancient magic. When worn, it grants the wearer the ability to deflect enemy spells or attacks back at their source, creating a fleeting echo that leaves behind a haunting resonance. The pendant shatters upon full use, leaving only a faint echo of the user's last thoughts, as if time itself has been briefly undone.",
    "category": "equipment",
    "price": 970,
    "icon": "🌀",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Reflects spells and attacks",
      "Leaves a haunting echo"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rebound Spell or Attack",
        "rules": "The wearer may use this pendant to reflect an incoming spell or attack back at its caster as a reaction. The reflected effect has the same level and type but deals no additional damage. This effect ends when used."
      },
      {
        "title": "Haunting Echo",
        "rules": "For 3 seconds after reflecting, the wearer is surrounded by a faint echo that reduces incoming magic damage by 25%. This reduction stacks with other magical effects affecting the user but does not exceed 75% of incoming magic damage. The echo ends when it expires."
      }
    ],
    "levelRequirementReason": "The pendant's ancient magic is potent enough to be worn by even low-level adventurers, though its full power can only be harnessed by those who have faced significant challenges.",
    "vendorReason": "The vendor, a guardian of the Deep Mirror’s secrets, provides relics and artifacts that bridge the gap between the mortal world and the fractured realms beyond.",
    "shippingDetail": "The pendant is delivered discreetly via Shy Guy Smugglers, ensuring its arrival without drawing undue attention or suspicion.",
    "usage": {
      "activation": "Reaction (to reflect an incoming spell or attack)",
      "duration": "Instantaneous upon use; echo lasts for 3 seconds",
      "endsWhen": "The effect is used up when the echo expires or when the wearer takes damage in excess of 50% of their maximum hit points.",
      "charges": "Unlimited, but can only be used once per short rest"
    },
    "priceReason": "The pendant's rare and ancient essence justifies its price, as it is a unique artifact that cannot be replicated or mass-produced.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:54:29.750194+00:00",
    "aiReviewedAt": "2026-07-22T05:54:29.750194+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_mirrored_scepter": {
    "id": "fractured_atrium_mirrored_scepter",
    "name": "The Mirror Scepter of the Deep Atrium",
    "description": "The Mirror Scepter of the Deep Atrium is a fractured relic of forgotten magic, its surface etched with arcane symbols. Crafted from the shattered remnants of an ancient mirror, it bends light and spellcraft in ways unknown to most. This scepter allows you to cast reflections of your spells, confusing foes as they struggle to discern reality from shadow. Moreover, it grants a +50% dodge chance against magical attacks and reduces incoming magical damage by 15%.",
    "category": "equipment",
    "price": 970,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Spell Reflection",
      "Magical Dodging"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Spell Reflection",
        "rules": "As an action, you can cast a reflection of the last spell you cast. The reflected spell has half its original power but affects all creatures in a 10-foot radius centered on the target creature. This effect lasts for 5 seconds or until dispelled."
      },
      {
        "title": "Magical Dodging",
        "rules": "You gain a +50 bonus to Dexterity saving throws against magical attacks. Additionally, you have resistance to all damage from magical sources."
      }
    ],
    "levelRequirementReason": "Requires lower level to balance its powerful effects for earlier game stages.",
    "vendorReason": "The fractured atrium is known for selling rare relics and artifacts, including this unique scepter.",
    "shippingDetail": "Ships via spectral courier with a 24-hour delivery time.",
    "usage": {
      "activation": "Action (to cast reflection)",
      "duration": "5 seconds or until dispelled",
      "endsWhen": "The effect ends when the spell is dispelled, after its duration expires, or if you take a short rest.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced price for a rare item with unique and powerful effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:53:35.071734+00:00",
    "aiReviewedAt": "2026-07-22T05:53:35.071734+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_mirrored_shroud": {
    "id": "fractured_atrium_mirrored_shroud",
    "name": "Mirrored Shroud of the Hollow King",
    "description": "The Mirrored Shroud of the Hollow King is a spectral garment woven from fractured reflections of ancient necromancers. Worn by the echoes of a dead king, it warps and bends light, distorting enemy vision into blinding shadows. The shroud amplifies dark energy damage to an alarming degree, making every spell cast against you more potent. Its wearer feels the weight of a thousand dark lords, drawing in their malevolent energy to bolster their own necromantic prowess.",
    "category": "equipment",
    "price": 970,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Distorts Vision",
      "Enhances Necromancy"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Distorts Vision",
        "rules": "When an enemy within 30 feet of you casts a spell, they must make a DC 15 Dexterity saving throw or be blinded until the start of your next turn. This effect ends if the target moves more than 10 feet away from you."
      },
      {
        "title": "Enhances Necromancy",
        "rules": "You gain a +2 bonus to necromantic spell attack rolls and deal an additional 1d6 necrotic damage on hits. This effect is exhausted after three uses per long rest."
      }
    ],
    "levelRequirementReason": "The shroud's malevolent power requires a certain level of dark magic mastery to wield effectively.",
    "vendorReason": "This vendor specializes in relics from the forgotten necromancer realms, making it no surprise they stock this spectral garment.",
    "shippingDetail": "Ships via the Void Drifter Relay, known for its swift and reliable delivery of rare artifacts and magical items.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after three uses per long rest or upon destruction",
      "charges": "Unlimited"
    },
    "priceReason": "The shroud's rare materials and the dark magic it channels make it a costly yet powerful relic.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:53:47.929752+00:00",
    "aiReviewedAt": "2026-07-22T05:53:47.929752+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_mirrored_soul": {
    "id": "fractured_atrium_mirrored_soul",
    "name": "Mirrored Soul Shard of the Deep Mirror",
    "description": "The Mirrored Soul Shard of the Deep Mirror is a fractured fragment of an ancient atrium's core mirror, crafted from the very essence of time and fate. When touched, it reveals visions of both doom and salvation, shimmering with cryptic prophecies that can only be glimpsed in moments of stillness and reflection. It is said to hold the future within its shards, but one must use it with caution; misuse could unravel the very fabric of destiny itself.",
    "price": 970,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Vision of Future Events",
      "Prophecy Defense"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vision of Future Events",
        "rules": "The user gains a fleeting glimpse into the future, providing a +2d6 bonus to their next saving throw or attack roll within 5 minutes. The effect lasts for 5 seconds and can be cast once every 30 minutes."
      },
      {
        "title": "Prophecy Defense",
        "rules": "If the prophecy revealed shows impending doom, the wearer gains +50% resistance to necrotic damage until the end of their next long rest. This effect is triggered only if the prophecy indicates death or significant harm."
      }
    ],
    "levelRequirementReason": "The shard's power lies in its ability to reveal cryptic and potentially dangerous truths, making it accessible but not overpowered for even novice adventurers.",
    "vendorReason": "The shards are rare and valuable artifacts from the Atrium’s deep lore, only available through the fractured atrium's trusted vendor.",
    "shippingDetail": "Ships via the Rakasha Spirit Walk, known for its mysterious but reliable service. Delivery takes 1d4 days.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "5 seconds or until the end of your next turn",
      "endsWhen": "The effect ends when you take damage or are incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price point to ensure it is a valuable but not game-breaking item for any level 1 character.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:54:02.175115+00:00",
    "aiReviewedAt": "2026-07-22T05:54:02.175115+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_mirrored_soul_core": {
    "id": "fractured_atrium_mirrored_soul_core",
    "name": "Mirrored Soul Core",
    "description": "The Mirrored Soul Core is a fractured essence from the Deep Mirror’s realm, embodying the Corvinarus lineage's spectral power. When activated, it reflects the next spell cast by an enemy back to its source, dealing the same damage as the original spell. It also summons a spectral guardian that fights for you for three turns before fading into the abyss. This core enhances your necromancy skill by 20% for one turn.",
    "category": "equipment",
    "price": 970,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reflects next enemy spell",
      "Summons spectral guardian"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Spell Reflection",
        "rules": "When an enemy casts a spell, the core reflects it back to its caster. The spell is cast with disadvantage and deals half damage if successful."
      },
      {
        "title": "Spectral Guardian Summoning",
        "rules": "Summons a spectral guardian that fights for you for 3 turns. The guardian has AC 15, 20 hit points, and can make a bite attack (melee weapon attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8+2 necrotic)). It then fades away."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to effectively use the Mirrored Soul Core's abilities.",
    "vendorReason": "The Mirrored Soul Core is a rare artifact from the fractured realm, and Fractured Atrium specializes in such arcane relics.",
    "shippingDetail": "Ships via Lakitu Drones with an expedited delivery within one week of purchase.",
    "usage": {
      "activation": "Action to activate the core, it then reflects the next spell cast by an enemy and summons a guardian for three turns.",
      "duration": "Instantaneous summoning; guardian lasts for 3 turns.",
      "endsWhen": "The guardian fades after 3 turns or if the core is destroyed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rare and powerful abilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:54:03.939945+00:00",
    "aiReviewedAt": "2026-07-22T05:54:03.939945+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_mournful_chalice": {
    "id": "fractured_atrium_mournful_chalice",
    "name": "Mournful Chalice of the Hollow King",
    "description": "The Mournful Chalice of the Hollow King is a decrepit vessel of ancient craftsmanship, its sides etched with forgotten runes that whisper of lost souls. When consumed, it grants fleeting fury in the form of necrotic energy, but at a terrible price: the drinker's connection to their soul weakens, leaving them vulnerable for a time. The chalice also siphons the life force from undead foes, draining them of vitality while the imbiber reaps dark power.",
    "price": 970,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Necrotic Fury",
      "Undead Drain"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Necrotic Fury",
        "rules": "When consumed as a bonus action, the drinker gains temporary necrotic damage resistance equal to their Charisma modifier (minimum +3). This effect lasts for 1 minute. It ends early if the drinker drops to 0 hit points or takes any non-necrotic damage."
      },
      {
        "title": "Undead Drain",
        "rules": "For every round the drinker remains within 5 feet of an undead creature, there is a 25% chance that the undead will take 1d6 necrotic damage. This effect ends when the chalice is consumed or if the drinker moves more than 30 feet away from any undead."
      }
    ],
    "levelRequirementReason": "Only those with a certain level of experience and training can safely handle the chalice's dark magic.",
    "vendorReason": "The chalice is a relic from the Hollow King, an entity known to have dealings with the fractured atrium. Its origin makes it a fitting item for such a vendor.",
    "shippingDetail": "Ships via spirit courier; delivery can take up to one week depending on the destination.",
    "usage": {
      "activation": "Bonus action to consume and activate the chalice's effects.",
      "duration": "1 minute or until expended, ending if the drinker drops to 0 hit points or takes non-necrotic damage.",
      "endsWhen": "The drinker's temporary effects end when consumed or interrupted by non-necrotic damage.",
      "charges": "Unlimited uses; the chalice refills itself upon being consumed."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rarity and the dark power it provides for a steep price in soul resonance.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:54:19.835690+00:00",
    "aiReviewedAt": "2026-07-22T05:54:19.835690+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necro_satchel": {
    "id": "fractured_atrium_necro_satchel",
    "name": "Necro Satchel of the Corvinarus Veil",
    "description": "The Necro Satchel of the Corvinarus Veil is a leather-bound pouch that whispers the dark secrets of its necromancer master’s failed rituals. When opened, it reveals one of three options: a cursed artifact that withers flesh on contact, a spell scroll imbued with potent necrotic magic, or an ancient tome that corrupts the soul. Its true power lies in its unpredictability; the satchel might just spit out a harmless trinket, but the risk of corruption is ever-present.",
    "price": 970,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Random artifact or cursed item",
      "Necromantic spell potency increase"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Artifact Revelation",
        "rules": "When opened, the satchel reveals one random cursed artifact or a spell scroll. The scroll grants a +25% bonus to necromancy spells for one turn but may corrupt the user’s soul with a 33% chance of temporary -10% HP."
      },
      {
        "title": "Soul Corruption",
        "rules": "There is a 1 in 3 chance that opening the satchel will cause soul corruption, resulting in a temporary -10% hit points. This effect can be resisted with a DC 15 Constitution saving throw."
      }
    ],
    "levelRequirementReason": "Even the most novice necromancers must learn to handle such unpredictable and potentially dangerous artifacts.",
    "vendorReason": "Fractured Atrium specializes in relics of dark magic, making it a fitting vendor for this cursed satchel.",
    "shippingDetail": "Delivered by the Rakasha Spirit Walk; expect a swift and mysterious delivery.",
    "usage": {
      "activation": "Action to open and reveal its contents",
      "duration": "Instantaneous effect; spell scroll lasts one turn, artifact and corruption last until used or dispelled",
      "endsWhen": "Used up all charges or when the effects are dispelled by a successful saving throw",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Necro Satchel’s rarity, unpredictable nature, and potential for corruption justify its moderate price in XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:54:33.610414+00:00",
    "aiReviewedAt": "2026-07-22T05:54:33.610414+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necro_soul_ash": {
    "id": "fractured_atrium_necro_soul_ash",
    "name": "Ash of the Necro Soul",
    "description": "A vial containing the ashen remnants of a necromancer’s soul, now fractured and infused with the raw energy of the Atrium. Consuming this vial grants you temporary necrotic power, enhancing your touch attacks by +20% damage for ten minutes. The Ash also reveals hidden necromantic glyphs on the battlefield, aiding in spellcasting and strategy. Be wary; those who consume it may find themselves momentarily blinded as their eyes adjust to the soul’s fractured light.",
    "price": 970,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Necrotic Power Boost",
      "Reveal Hidden Glyphs"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Necrotic Power Boost",
        "rules": "When consumed, this vial grants the user temporary +20% necromantic damage on touch attacks for ten minutes. The effect ends if used in combat or if the user takes any non-magical action."
      },
      {
        "title": "Reveal Hidden Glyphs",
        "rules": "Upon consuming the Ash, you can reveal one hidden glyph within a 30-foot radius that is pertinent to necromancy. This effect lasts until the end of your next turn and requires no action from you."
      }
    ],
    "levelRequirementReason": "This item’s power is accessible to lower-level characters, providing them with an opportunity to engage in powerful necromantic combat without needing high-level magic.",
    "vendorReason": "The fractured nature of the Atrium makes it a fitting place for such relics and their unique properties.",
    "shippingDetail": "Due to its fragile nature, this vial is shipped with special care using Koopa Postal's reinforced packaging.",
    "usage": {
      "activation": "Consumption of the vial as an action",
      "duration": "Ten minutes or until used in combat",
      "endsWhen": "Used in combat or taking a non-magical action",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "The Ash of the Necro Soul is priced at 1000 XP to reflect its rare and powerful nature, providing necrotic power and strategic advantage without being overpowered.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:54:39.819012+00:00",
    "aiReviewedAt": "2026-07-22T05:54:39.819012+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necro_soul_core": {
    "id": "fractured_atrium_necro_soul_core",
    "name": "Necro Soul Core Shard",
    "description": "The Necro Soul Core Shard is a desiccated fragment of an ancient necromancer's soul, forged in dark rituals and now wielded by those who seek to harness spectral power. This shard allows its bearer to merge with phantoms for brief periods, granting them the ability to command spectral echoes that lash out at foes. With each use, it restores a portion of your vitality, but the core itself grows ever more corrupted over time.",
    "price": 970,
    "icon": "💀",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Spectral Echo Attack",
      "Phantom Merge"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Spectral Echo Attack",
        "rules": "As an action, you can summon a spectral echo that attacks a target within 30 feet. The echo deals 1d8 necrotic damage and has the properties of a ghost touch weapon. This effect ends on your next turn."
      },
      {
        "title": "Phantom Merge",
        "rules": "As an action, you can merge with a nearby spectral form for up to three rounds, gaining advantage on Stealth checks and being able to move through difficult terrain. While merged, you take 1d6 necrotic damage at the start of each of your turns."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to cast spells that can interact with spectral forms.",
    "vendorReason": "The vendor specializes in items recovered from ancient necromantic ruins, making this shard an ideal offering.",
    "shippingDetail": "Delivered by night couriers with a 10% chance of being intercepted by spectral guardians.",
    "usage": {
      "activation": "Action or Bonus Action for each effect, limited to once per short rest.",
      "duration": "Instantaneous for Spectral Echo Attack; up to three rounds for Phantom Merge.",
      "endsWhen": "The duration ends when the effect is used again or you take damage.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price considering its spectral manipulation abilities and limited, but potent effects.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T05:55:15.417385+00:00",
    "aiReviewedAt": "2026-07-22T05:55:15.417385+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_amber": {
    "id": "fractured_atrium_necrotic_amber",
    "name": "Necrotic Amber of the Corvinarus Line",
    "description": "The Necrotic Amber of the Corvinarus Line is a shimmering fragment of a noble's soul, encased within a golden sheath. Crafted from the essence of a fallen Corvinarus heir, it exudes a hauntingly beautiful glow and the pungent scent of decay. This relic amplifies necromantic spells by 25% and allows the wielder to command spectral echoes for 10 seconds, turning them into obedient servants that deal 1d6 necrotic damage per round.",
    "price": 5600,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Necrotic Amplification",
      "Command Spectral Echoes"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Necrotic Amplification",
        "rules": "Increases the damage of all necromantic spells by 25%. This effect lasts until the end of your next turn."
      },
      {
        "title": "Command Spectral Echoes",
        "rules": "For 10 seconds, you can command spectral echoes to serve you as obedient minions. They deal 1d6 necrotic damage per round and have a speed of 30 feet. Command ends if an echo takes damage or when the duration expires."
      }
    ],
    "levelRequirementReason": "The item's powerful necromantic essence requires a minimum level to wield effectively.",
    "vendorReason": "Fractured Atrium deals in artifacts of noble origins, and this relic carries the legacy of the Corvinarus bloodline.",
    "shippingDetail": "Ships with a spectral escort to ensure safe delivery; delays may occur due to ethereal disturbances.",
    "usage": {
      "activation": "As an action, you can command the spectral echoes or infuse it into your next necromantic spell.",
      "duration": "10 seconds for commanding spectral echoes. Duration ends if an echo takes damage or when the duration expires.",
      "endsWhen": "The duration of command ends if a spectral echo takes damage or at the end of your turn.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price reflects its powerful necromantic capabilities and rarity.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:54:45.839116+00:00",
    "aiReviewedAt": "2026-07-22T05:54:45.839116+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_aura_ward": {
    "id": "fractured_atrium_necrotic_aura_ward",
    "name": "Necrotic Aura Ward of the Hollow Choir",
    "description": "The Necrotic Aura Ward of the Hollow Choir is a fragile ward imbued with the spectral echoes of the Deep Mirror, a place where soul-echoes linger and haunt. This ritual-bound protector creates a field that absorbs damage and whispers commands to your allies, enhancing their necromancy prowess in battle. The ward's ethereal glow flickers as it protects, whispering ancient incantations that empower nearby allies with spectral strength.",
    "category": "equipment",
    "price": 980,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs 20% of incoming damage for all allies within range",
      "Increases allied necromancers' damage by 15%"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Damage Absorption",
        "rules": "The ward absorbs 20% of the damage taken by any ally within a 5-meter radius. This effect is passive and does not require activation."
      },
      {
        "title": "Necromancy Boost",
        "rules": "Allies within range gain an additional 15% necromancy damage for the duration of their next combat action, once per short rest."
      }
    ],
    "levelRequirementReason": "The ward's intricate enchantment requires a caster capable of understanding and maintaining its delicate balance.",
    "vendorReason": "The fractured heart of the Atrium is well-acquainted with spectral magic, making it a fitting vendor for this item.",
    "shippingDetail": "Ships via shadowy courier, arriving within one night's travel.",
    "usage": {
      "activation": "Passive; requires no action or activation",
      "duration": "Until the end of each ally's next turn",
      "endsWhen": "The ward is destroyed or its caster level drops below the requirement",
      "charges": "Unlimited, recharges on a short rest"
    },
    "priceReason": "Balanced as it offers defensive and offensive benefits without being overpowered.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:32:55.741433+00:00",
    "aiReviewedAt": "2026-07-22T19:32:55.741433+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_blood": {
    "id": "fractured_atrium_necrotic_blood",
    "name": "Necrotic Blood of the Atrium",
    "description": "Housed in a vial of obsidian, the Necrotic Blood of the Atrium is the final remnant of a necromancer's life force. When consumed, it grants temporary dominion over the dead and enhances dark rituals with a potent surge of power. For thirty seconds, you can command nearby undead allies to move faster, granting them +10% movement speed as 'Bleeding Veil'. However, there is a 10% chance that consuming this vial will result in losing a random limb or soul fragment permanently.",
    "price": 980,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% necromancy spell power for 30 seconds",
      "Grants ‘Bleeding Veil’ buff: all undead allies gain +10% movement speed"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Necrotic Surge",
        "rules": "Activates on consumption. Increases the caster's necromancy spell power by 15% for thirty seconds. Ends if consumed by a creature other than the original user or if the user is reduced to 0 hit points."
      },
      {
        "title": "Bleeding Veil",
        "rules": "Grants all nearby undead allies a +10% increase in movement speed for thirty seconds. The effect ends if any ally leaves the area or if the caster's concentration is broken by an attack or spell."
      }
    ],
    "levelRequirementReason": "This vial requires significant magical energy and control, suitable only for necromancers of at least fifth level.",
    "vendorReason": "Fractured Atrium is known for its dark artifacts and rituals, making it a logical vendor for this potent necrotic substance.",
    "shippingDetail": "Delivered by spectral couriers who ensure the blood remains undisturbed during transit.",
    "usage": {
      "activation": "Consumed as an action.",
      "duration": "30 seconds.",
      "endsWhen": "The effect ends if consumed by a creature other than the original user, or if the user is reduced to 0 hit points.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "This item represents rare necromantic power and comes with significant risks, making it moderately priced yet valuable for those who seek to harness its dark magic.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:55:07.262227+00:00",
    "aiReviewedAt": "2026-07-22T05:55:07.262227+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_blood_satchel": {
    "id": "fractured_atrium_necrotic_blood_satchel",
    "name": "Necrotic Blood Satchel of Corvinarus",
    "description": "The Necrotic Blood Satchel of Corvinarus is a leather pouch infused with the dark essence of a fallen necromancer. When unzipped, the satchel releases a foul stench and a glowing crimson fluid that clings to your skin. Each use restores half of your hit points but drains 10% more of them over time until you rest. Only non-living creatures can wield this cursed artifact without suffering its necrotic taint.",
    "price": 980,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Restores Half of Maximum Hit Points",
      "Drains Additional Health Over Time"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Restoration and Drainage",
        "rules": "Activating the satchel is a bonus action that restores half of your maximum hit points. However, you are marked with necrotic corruption for one minute after use. This effect ends if you take any nonmagical damage or if you rest."
      },
      {
        "title": "Necrotic Drain",
        "rules": "Every hour spent with the satchel in your possession drains an additional 10% of your maximum hit points until you rest. This drain stacks each day, but it resets upon a successful DC 15 Constitution saving throw."
      }
    ],
    "levelRequirementReason": "The necrotic essence within the satchel requires a certain degree of dark magic knowledge to safely handle and activate.",
    "vendorReason": "As a relic dealer, Fractured Atrium specializes in artifacts tainted by ancient curses and forbidden magics like this one.",
    "shippingDetail": "Due to the volatile nature of the satchel's contents, it must be delivered via Lakitu Drones within 24 hours.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "One minute and one round per use",
      "endsWhen": "You take nonmagical damage or rest",
      "charges": "Unlimited"
    },
    "priceReason": "The satchel's rarity, dark magic, and unique effects justify its moderate price.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-22T05:55:13.341244+00:00",
    "aiReviewedAt": "2026-07-22T05:55:13.341244+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_bloodstone": {
    "id": "fractured_atrium_necrotic_bloodstone",
    "name": "Necrotic Bloodstone of the Deep Mirror",
    "description": "The Necrotic Bloodstone of the Deep Mirror is a pulsating obsidian stone infused with the essence of the drowned, crafted from the very heart of an ancient sunken citadel. When activated, it siphons life force from foes, converting their vitality into potent necrotic energy that can be wielded as a weapon against the living and the dead alike. Its pulse is relentless, drawing strength from the bloodshed around you to fuel your dark magic.",
    "price": 980,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Life Drain",
      "Necrotic Surge"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Life Drain",
        "rules": "When an enemy deals damage to you, you restore 50% of the damage taken as necrotic energy. This effect has a 10-minute cooldown."
      },
      {
        "title": "Necrotic Surge",
        "rules": "As a bonus action, you can unleash a surge of necrotic energy from the stone, dealing 2d6 necrotic damage to all creatures within 5 feet. This effect has a recharge time of 1 hour."
      }
    ],
    "levelRequirementReason": "Crafted from the essence of an ancient sunken citadel, this artifact requires a master craftsman with at least 5 levels in any necromancy-related class to wield it effectively.",
    "vendorReason": "The fractured atrium is known for its collection of rare and exotic artifacts recovered from the depths of the ocean, including the Necrotic Bloodstone of the Deep Mirror.",
    "shippingDetail": "Due to its fragile nature, the stone must be shipped via Boo Spectral Mail, which ensures safe and swift delivery through spectral couriers.",
    "usage": {
      "activation": "Bonus action for Necrotic Surge; Passive effect of Life Drain",
      "duration": "Instantaneous (Necrotic Surge) / Permanent (Life Drain)",
      "endsWhen": "Recharge or expended (Necrotic Surge); Ends when you die (Life Drain)",
      "charges": "Unlimited uses per day for Life Drain; 1 charge per use for Necrotic Surge"
    },
    "priceReason": "The price reflects the unique crafting process, rare materials, and the arcane power it channels.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:55:38.656615+00:00",
    "aiReviewedAt": "2026-07-22T05:55:38.656615+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_bolt": {
    "id": "fractured_atrium_necrotic_bolt",
    "name": "Necrotic Bolt of the Atrium",
    "description": "The Necrotic Bolt of the Atrium is a cursed bullet forged from the very essence of a long-dead necromancer. It siphons life and magic, leaving only death in its wake. When fired, it creates a localized necrotic vortex that amplifies undead's strength, turning the battlefield into a grave for the living. After each use, the wielder suffers temporary blindness, but the bolt's power is unmatched against magical foes.",
    "price": 980,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Soul Drain",
      "Necrotic Vortex"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Soul Drain",
        "rules": "When fired, the Necrotic Bolt of the Atrium deals 10d6 necrotic damage to a target and drains its hit points equal to 25% of the target's current total. The user is blinded for 1 round after firing."
      },
      {
        "title": "Necrotic Vortex",
        "rules": "The bolt creates a 3m radius area where all undead within gain +50% damage on their attacks and actions, but they are immune to non-necrotic damage. This effect lasts for 1 minute."
      }
    ],
    "levelRequirementReason": "Requires at least level 5 to wield due to the item's necrotic essence and temporary blindness.",
    "vendorReason": "The vendors of Fractured Atrium specialize in cursed and rare items, making them the perfect place for such a powerful and dangerous artifact.",
    "shippingDetail": "Ships via spirit courier with a delay of one week due to the item's volatile nature.",
    "usage": {
      "activation": "Requires a bonus action to fire. The user must be within 30 feet of the target and have line of sight.",
      "duration": "Instantaneous, but the user is blinded for 1 round after use.",
      "endsWhen": "The effect ends when the user completes their next turn or takes any action.",
      "charges": "Recharges on a long rest."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its powerful necrotic abilities and temporary blindness effect.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:55:42.348976+00:00",
    "aiReviewedAt": "2026-07-22T05:55:42.348976+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_cloak": {
    "id": "fractured_atrium_necrotic_cloak",
    "name": "Necrotic Cloak of the Unbound",
    "description": "The Necrotic Cloak of the Unbound is a garment woven from the veins of the dead, each thread pulsing with the life it has drained. When donned in front of a mirror, your very soul echoes through its reflections, amplifying every strike you deliver into a deadly echo that strikes true at your command. This cloak not only saps vitality from foes but also channels their lost strength to bolster your own resilience.",
    "category": "equipment",
    "price": 980,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Drains Vitality on Contact",
      "Echoes Your Attack in Reflection"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Drain Vitality on Contact",
        "rules": "When you hit an enemy with a melee attack while wearing the cloak, it drains 10% of their maximum hit points as temporary hit points for yourself. The effect has no save DC and can be used once per short or long rest."
      },
      {
        "title": "Echoes Your Attack in Reflection",
        "rules": "When you attack an enemy with a melee weapon while wearing the cloak and standing before a mirror, the attack’s damage is increased by 50%. This effect can occur only once every three turns."
      }
    ],
    "levelRequirementReason": "The necrotic energies of the cloak demand a certain mastery over your own abilities to wield its power effectively.",
    "vendorReason": "The Fractured Atrium specializes in dark artifacts and relics, making it an ideal vendor for this malevolent yet powerful item.",
    "shippingDetail": "Delivered via shadowy courier, the cloak arrives wrapped in darkness, ensuring its arrival is both swift and mysterious.",
    "usage": {
      "activation": "Instantaneous on contact with an enemy during a melee attack.",
      "duration": "Instantaneous effect.",
      "endsWhen": "Exhausts after one use per short or long rest; recharges at dawn the next day.",
      "charges": "1"
    },
    "priceReason": "The cloak's necrotic essence and unique ability to enhance combat effectiveness justify its moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:56:14.268567+00:00",
    "aiReviewedAt": "2026-07-22T05:56:14.268567+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_essence": {
    "id": "fractured_atrium_necrotic_essence",
    "name": "Necrotic Essence of the Whispering Vault",
    "description": "Within a vial of glass so dark it mirrors the soul, lies the Necrotic Essence of the Whispering Vault. This fragment of an ancient ritual's endowments imbues necromantic spells with the chilling whisperings of forgotten memories and hidden truths. Casters who dare to use this essence risk uncovering secrets they may not wish to see, yet it grants them a 10% chance to reveal enemy weaknesses as if gifted by the vault itself.",
    "price": 980,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Whispering Memory",
      "Increased Spell Cost"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Whispering Memory",
        "rules": "When used, this essence grants a 10% chance to reveal hidden weaknesses of enemies. This effect has no save DC and lasts until the end of the caster's next turn. If the spell fails or is dispelled before then, the essence remains active."
      },
      {
        "title": "Increased Spell Cost",
        "rules": "The spell costs 20% more mana to cast when this essence is used. This increase persists for 1 minute after use or until the essence is expended in a failed casting attempt."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to handle the ritual's dark energy and its potential psychological impact.",
    "vendorReason": "The Atrium's enigmatic traders, who specialize in ancient artifacts and forbidden knowledge, are known for carrying this vial of soul-fragments.",
    "shippingDetail": "Delivered via a shadowed courier, the essence is packed within enchanted darkness to preserve its integrity during transit.",
    "usage": {
      "activation": "Used as an additional material component for a necromantic spell.",
      "duration": "Until the end of the caster's next turn or until the essence is expended in a failed casting attempt.",
      "endsWhen": "The essence shatters, releasing a soul fragment that can be recovered if used within 1 hour.",
      "charges": "Unlimited; the essence recharges when poured into a new vial."
    },
    "priceReason": "Balanced at 1000 XP to reflect its rarity and the potential for both powerful and dangerous effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:56:07.206625+00:00",
    "aiReviewedAt": "2026-07-22T05:56:07.206625+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_eyeshadow": {
    "id": "fractured_atrium_necrotic_eyeshadow",
    "name": "Necrotic Eyeshadow",
    "description": "Necrotic Eyeshadow, a shimmering black-gold pigment that seeps into the soul’s eye, is a cosmetic of dark magic and ancient lore. Applied to the eyelids, it reveals hidden weaknesses in foes and dims their resolve, casting a shadow over their willpower. This haunting gaze has been said to amplify the caster's own necromantic abilities, making it a treasured item for those who walk the dark paths of sorcery.",
    "price": 980,
    "icon": "👁",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Reveals Hidden Weaknesses",
      "Diminishes Enemy Resistance"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Reveals Hidden Weaknesses",
        "rules": "When applied, the eyeshadow activates as a bonus action. It reveals hidden weaknesses in an enemy within 30 feet with a 15% chance to trigger. The effect lasts for 1 minute and can be maintained by reapplying the eyeshadow as a bonus action. A successful DC 14 Wisdom (Insight) check against the target allows the user to exploit these weaknesses during combat."
      },
      {
        "title": "Diminishes Enemy Resistance",
        "rules": "The eyeshadow also increases the chance of triggering a curse on an enemy with necromantic effects by +5%. This effect applies to any necromancer using this item and lasts until the end of their next long rest. A successful DC 14 Constitution saving throw ends this effect prematurely."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to wield effectively, as it demands a deeper understanding of necromancy.",
    "vendorReason": "The vendors at Fractured Atrium specialize in arcane and dark items, making this cosmetic an ideal addition to their inventory.",
    "shippingDetail": "Due to its potent necromantic properties, the eyeshadow must be shipped under special conditions to ensure it remains stable during transit.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute (renewable by reapplying as a bonus action)",
      "endsWhen": "The end of your next long rest or if cursed on an enemy is triggered prematurely",
      "charges": "Unlimited, but reapplication requires concentration"
    },
    "priceReason": "The eyeshadow's rarity and potent effects justify its high price in the market.",
    "priceOriginal": 1000,
    "priceReviewedAt": "2026-07-22T05:56:12.395243+00:00",
    "aiReviewedAt": "2026-07-22T05:56:12.395243+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_fang": {
    "id": "fractured_atrium_necrotic_fang",
    "name": "Necrotic Fang of the Hollow King",
    "description": "The Necrotic Fang of the Hollow King, a bone-tipped blade forged from the skeletal remains of a fallen Corvinarus warlord, splits the veil between life and death. Each strike carves into the very essence of its target, causing them to bleed necrotic essence and suffer from an unending decay that eats at their vitality over time. This weapon's touch is a harbinger of doom, whispering secrets of death and decay in every clash.",
    "category": "equipment",
    "price": 980,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Bleeds Necrotic Essence",
      "Continuous Vitality Drain"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Bleed Necrotic Essence",
        "rules": "When you hit a creature with the Necrotic Fang, it takes an additional 2d8 necrotic damage. The target is also marked for 1 minute, during which time they continuously lose 1 hit point per round until this effect ends."
      },
      {
        "title": "Continuous Vitality Drain",
        "rules": "For every creature you mark with the Bleed Necrotic Essence ability, you gain a +1 bonus to your next attack roll and a +2 bonus to saving throws against necromancy effects for 1 hour. This effect can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to wield this weapon effectively, as it channels dark magic and necrotic energy.",
    "vendorReason": "Fractured Atrium specializes in relics of the fallen and lost, making this blade a fitting addition to their inventory.",
    "shippingDetail": "The weapon is delivered via spirit courier, ensuring it arrives intact but requiring a brief ritual activation upon arrival.",
    "usage": {
      "activation": "On hit only; no additional action required for the Bleed Necrotic Essence effect.",
      "duration": "1 minute per creature marked",
      "endsWhen": "The effect ends when the marked target is healed or the duration expires.",
      "charges": "Unlimited, but one use per short or long rest."
    },
    "priceReason": "Balanced at 1000 XP for its necromantic power and unique effects that provide both offensive and defensive benefits.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:56:26.851648+00:00",
    "aiReviewedAt": "2026-07-22T05:56:26.851648+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_forged": {
    "id": "fractured_atrium_necrotic_forged",
    "name": "Necrotic Forged Blade",
    "description": "The Necrotic Forged Blade, crafted from the bones of a fallen Corvinarus warlord, drips with an unholy essence that seems to seep into the very fabric of reality. When wielded, it strikes with brutal efficiency, leaving a trail of decaying flesh in its wake and draining vitality as the cursed energy courses through your foe’s veins. The blade's forgeheart core amplifies your strikes, increasing critical strike chance by 15% when you wield it.",
    "category": "equipment",
    "price": 980,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Inflicts Necrotic Drain",
      "Increased Critical Strike Chance"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Necrotic Drain",
        "rules": "When you hit an enemy with this weapon, they must make a DC 14 Constitution saving throw or take 2d6 necrotic damage and be debuffed for 5 rounds. The debuff reduces their vitality by 30% during that time."
      },
      {
        "title": "Increased Critical Strike Chance",
        "rules": "While wielding this blade, your critical strike chance is increased by 15%. This effect does not stack with other sources of critical strike chance."
      }
    ],
    "levelRequirementReason": "Crafted from the bones of a fallen Corvinarus warlord, the necrotic energy within requires a proficient wielder to channel its power.",
    "vendorReason": "The vendors at Fractured Atrium specialize in rare and cursed artifacts, ensuring that patrons receive items imbued with dark lore and potent magic.",
    "shippingDetail": "The blade is shipped securely within a custom-forged iron case to protect it from external influences until it reaches its intended wielder.",
    "usage": {
      "activation": "Melee Weapon Attack",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted or the weapon is dropped",
      "charges": "Unlimited"
    },
    "priceReason": "The blade's rarity, origin from a fallen Corvinarus warlord, and its potent necrotic effects justify this price in experience points.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:56:38.290631+00:00",
    "aiReviewedAt": "2026-07-22T05:56:38.290631+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_gauntlet": {
    "id": "fractured_atrium_necrotic_gauntlet",
    "name": "Necrotic Gauntlet of Corvinarus",
    "description": "The Necrotic Gauntlet of Corvinarus, forged from the bones of forgotten necromancers, channels the very essence of undeath into your grip. Its weighty presence is palpable in every swing, and its touch seems to draw forth the dead’s strength with each blow. With a simple gesture, this gauntlet can summon a ghostly ally for a fleeting moment on the battlefield, lending you a spectral partner in your darkest battles.",
    "category": "equipment",
    "price": 980,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+15% damage against undead",
      "Necromantic aura that deals 10% extra damage"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Summon Ghostly Ally",
        "rules": "As an action, the wearer can summon a ghostly ally. This ally appears as a minor spectral version of themselves and fights for one turn. The ally has CR 1/8 and deals 5 necrotic damage on hit. It is immune to all non-necrotic damage types and cannot attack. The gauntlet can only summon once per short or long rest."
      },
      {
        "title": "Necromantic Aura",
        "rules": "The gauntlet emits a necromantic aura that deals an additional 10% damage to enemies hit by the wearer’s melee attacks. This effect lasts until the end of your next turn, and it can only trigger once per round."
      }
    ],
    "levelRequirementReason": "Requires level 5 to wield effectively, as it demands a solid grasp of necromantic energies.",
    "vendorReason": "The Fractured Atrium is known for its unique stock of arcane and dark artifacts, making the Necrotic Gauntlet a fitting addition to their offerings.",
    "shippingDetail": "Due to the delicate nature of the gauntlet, it must be shipped via Koopa Postal’s express courier service.",
    "usage": {
      "activation": "Summoning ally: Action; Aura effect: Instantaneous",
      "duration": "Until end of next turn for summoning ally; Until end of your next turn for aura effect",
      "endsWhen": "Rests, or when the gauntlet is removed from the wearer's hand",
      "charges": "Unlimited charges"
    },
    "priceReason": "Balanced at 1000 XP to reflect its unique abilities and dark craftsmanship.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T05:57:10.873967+00:00",
    "aiReviewedAt": "2026-07-22T05:57:10.873967+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_gaze": {
    "id": "fractured_atrium_necrotic_gaze",
    "name": "Necrotic Gaze",
    "description": "The Necrotic Gaze is a cursed mirror, its surface etched with runes of the dead. It reflects not only one's own soul but also the spectral forms that lurk within the shadows. By gazing into it, a user can command these ethereal avatars to strike at foes, delivering a blow of concentrated malice equal to their life force. With each use, the mirror's influence darkens, granting temporary stealth and evasive prowess for two turns.",
    "category": "equipment",
    "price": 980,
    "icon": "🌑",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Soul Reflection",
      "Necrotic Strike"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Soul Reflection",
        "rules": "The user gains a spectral avatar that mirrors their current status, including damage resistance, speed, and any other conditions. This effect lasts for the duration of the encounter."
      },
      {
        "title": "Necrotic Strike",
        "rules": "Activates as an action, allowing the user to command a spectral form to deal 100% of their maximum hit points in damage to one target. If the user has no hit points remaining, it deals 100% of the lost hit points. This effect ends if the user is incapacitated or knocked unconscious."
      }
    ],
    "levelRequirementReason": "Requires at least level 5 for a necromancer to harness its dark energies effectively.",
    "vendorReason": "The fractured atrium deals with cursed and ancient relics, making it the perfect vendor for such an item.",
    "shippingDetail": "Due to its volatile nature, the mirror must be shipped via the securest courier available. Delivery time is extended by one week due to safety precautions.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; ends if the user becomes incapacitated or knocked unconscious.",
      "endsWhen": "The user's condition changes to incapacitated or they are knocked unconscious.",
      "charges": "Unlimited, but only one use per short rest."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its cursed nature and the dark magic required for its creation.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T05:56:56.521240+00:00",
    "aiReviewedAt": "2026-07-22T05:56:56.521240+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_heart_core": {
    "id": "fractured_atrium_necrotic_heart_core",
    "name": "Necrotic Heart Core",
    "description": "The Necrotic Heart Core, a pulsating core of corrupted life, once belonged to a fallen Corvinarus relic. Its surface is etched with dark runes that glow faintly in necrotic light. When activated, it grants the wielder temporary immunity to necrotic damage and drains vitality from foes, leaving them as fragile husks. For 120 seconds, this core ensures the bearer remains unscathed by necrotic attacks while siphoning health from those who dare challenge.",
    "category": "equipment",
    "price": 980,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Necrotic Immunity",
      "Vitality Drain"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Necrotic Immunity",
        "rules": "When activated, the wielder gains temporary immunity to all necrotic damage for a duration of 120 seconds. The effect can be used once per long rest."
      },
      {
        "title": "Vitality Drain",
        "rules": "For every second the core is active, it drains 5 hit points from a target within 30 feet. Targets have advantage on saving throws against this effect while inside their own area of control or if they are undead. The core can only drain one target at a time."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to experiment with necrotic magic without the risk of facing immediate death.",
    "vendorReason": "Fractured Atrium specializes in relics and ancient artifacts, making this core a fitting addition to their inventory.",
    "shippingDetail": "Delivered within three days via high-speed courier drones.",
    "usage": {
      "activation": "Action",
      "duration": "120 seconds",
      "endsWhen": "The core's effect ends when the duration expires or it is destroyed, whichever comes first.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "This price reflects the item’s rarity and its utility for beginners to experiment with necrotic magic without undue risk.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:57:09.533406+00:00",
    "aiReviewedAt": "2026-07-22T05:57:09.533406+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_heart_potion": {
    "id": "fractured_atrium_necrotic_heart_potion",
    "name": "Necrotic Heart Potion",
    "description": "The Necrotic Heart Potion is crafted from the embalmed heart of a Corvinarus lich, whose dark magic has been distilled into this vial. When consumed, it grants necromancers the power to drain life essence and inflict curses upon their foes, yet it may also corrupt the soul and unravel one's sanity over time. This potion is both a blessing and a curse, fueling necromantic might while draining vitality from both the living and the undead alike.",
    "price": 980,
    "icon": "🍺",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Life Drain",
      "Curse Infusion"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Life Drain",
        "rules": "When consumed, this potion restores 1000 Mana Points (MP) to the necromancer and reduces all enemy regenerations by 30% for the next three turns. The effect is instantaneous upon activation."
      },
      {
        "title": "Curse Infusion",
        "rules": "There is a 10% chance that the potion will curse an adjacent target, causing them to lose 5% of their Hit Points (HP) each round for two rounds. The curse lasts until the end of the target's next turn or it is dispelled."
      }
    ],
    "levelRequirementReason": "Requires level 5 to ensure players have a foundational understanding of necromantic magic and can handle such potent effects.",
    "vendorReason": "The Fractured Atrium is known for its dark alchemy, specializing in potions that harness the power of ancient liches and forgotten rituals.",
    "shippingDetail": "Delivered with utmost secrecy; the Shy Guy Smugglers ensure the potion's arrival remains unknown to all but those who seek it.",
    "usage": {
      "activation": "Consumed as a bonus action.",
      "duration": "Instantaneous effects, lasting until the end of the target's next turn or dispelled by a successful save.",
      "endsWhen": "The effect ends when the target makes a successful DC 15 Constitution saving throw or at the start of their next turn.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced to ensure it remains a powerful yet attainable option for high-level necromancers.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T05:57:22.683894+00:00",
    "aiReviewedAt": "2026-07-22T05:57:22.683894+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_herald_ring": {
    "id": "fractured_atrium_necrotic_herald_ring",
    "name": "Necrotic Herald Ring",
    "description": "The Necrotic Herald Ring, forged from the bones of ancient Corvinarus kin, whispers dark secrets and commands the dead with a mere touch. Crafted in the forges of the Atrium's fractured heart, it grants immunity to fear effects and allows you to issue a chilling command that stuns undead foes. This ring channels the essence of the grave, enhancing your necromancy spells by 20% and ensuring your whispers carry weight even among the dead.",
    "category": "equipment",
    "price": 980,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Immunity to Fear",
      "Whisper of the Grave"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Immunity to Fear",
        "rules": "The wearer gains temporary immunity to fear effects. This immunity lasts until the start of their next turn."
      },
      {
        "title": "Whisper of the Grave",
        "rules": "As a bonus action, the wearer can issue an eerie command to undead within 30 feet. On a successful DC 15 Wisdom (Insight) check, the target undead is stunned for 2 seconds."
      }
    ],
    "levelRequirementReason": "The ring's dark magic and intricate craftsmanship necessitate a minimum level of 5 to wield its power safely.",
    "vendorReason": "The fractured Atrium, a place where ancient necromancy still lingers, is the only known source for such powerful relics.",
    "shippingDetail": "Ships via the Void Drifter Relay, arriving within one week of purchase with a special delivery handling fee included in the price.",
    "usage": {
      "activation": "As a bonus action to issue an order or command.",
      "duration": "Instantaneous for the stun effect; immunity lasts until the start of the next turn.",
      "endsWhen": "The stunned undead regain consciousness, or the wearer uses their next action on another target.",
      "charges": "Unlimited"
    },
    "priceReason": "The ring's rare materials and dark magic contribute to its moderate price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:57:24.489183+00:00",
    "aiReviewedAt": "2026-07-22T05:57:24.489183+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_ink": {
    "id": "fractured_atrium_necrotic_ink",
    "name": "Necrotic Ink of the Corvinarus Tome",
    "description": "A vial of Necrotic Ink from the Corvinarus Tome, its ink a sickly shade of violet. Applied to a weapon or piece of armor, it channels dark energies, summoning spectral echoes that reflect the wielder’s darkest thoughts and fears. Each use reveals a fragment of their psyche for 5 seconds, making enemies more wary as they face the very essence of their nightmares. This ink enhances the wielder's critical chance by +15% when facing undead foes.",
    "price": 990,
    "icon": "🖋",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Echoes of Fear",
      "+15% Critical Chance vs Undead"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Echoes of Fear",
        "rules": "When the ink is applied to a weapon or armor, it grants the wielder the ability to summon spectral echoes that reflect their deepest fears. Each use reveals a fragment of their psyche for 5 seconds. This effect lasts until the end of the user's next turn."
      },
      {
        "title": "+15% Critical Chance vs Undead",
        "rules": "The ink increases critical hit chance by +15% when attacking undead creatures, with no save DC required. The effect is active as long as the ink remains on the weapon or armor and does not expend charges."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 3 to handle the dark energies without adverse effects.",
    "vendorReason": "Fractured Atrium is known for dealing with forbidden and dangerous artifacts, making this ink available only through their network.",
    "shippingDetail": "The ink must be shipped under strict conditions to prevent accidental exposure to dark magic.",
    "usage": {
      "activation": "Apply the ink as an action to a weapon or piece of armor.",
      "duration": "Instantaneous effect, lasts until the end of the user's next turn.",
      "endsWhen": "The effect ends when the ink is removed or at the start of the wielder’s next turn.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price for a rare and dangerous item that provides significant combat benefits.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T05:57:26.562003+00:00",
    "aiReviewedAt": "2026-07-22T05:57:26.562003+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_key": {
    "id": "fractured_atrium_necrotic_key",
    "name": "The Key to the Mirror Vault",
    "description": "The Key to the Mirror Vault is a ghastly key forged from the bones of an ancient necromancer, said to have perished in the catacombs beneath the Atrium. Its surface is etched with runes that whisper of forgotten rituals and lost souls. This macabre artifact unlocks not only the hidden vault but also grants its bearer a +10% chance to find hidden items when looting, making it invaluable for those who delve into necromantic secrets.",
    "price": 990,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Unlock the Hidden Vault",
      "Enhanced Loot Detection"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Unlock the Hidden Vault",
        "rules": "Activates as an action. The key unlocks a hidden vault beneath the Atrium, granting access to rare necromantic relics. This effect can only be used once per day."
      },
      {
        "title": "Enhanced Loot Detection",
        "rules": "Passive ability that grants a +10% chance to find hidden items when looting. This bonus does not stack with other similar abilities and lasts until the end of the encounter."
      }
    ],
    "levelRequirementReason": "The key's necromantic power demands a certain level of proficiency in dark magic.",
    "vendorReason": "The Fractured Atrium is the only place where such ancient and dangerous artifacts are known to be traded openly.",
    "shippingDetail": "Due to its macabre nature, the key must be shipped by Boo Spectral Mail for added safety precautions.",
    "usage": {
      "activation": "Activates as an action.",
      "duration": "Instantaneous.",
      "endsWhen": "The effect can only be used once per day.",
      "charges": "Unlimited."
    },
    "priceReason": "Balanced to reflect its powerful necromantic abilities and limited use.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:57:40.913226+00:00",
    "aiReviewedAt": "2026-07-22T05:57:40.913226+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_mantle": {
    "id": "fractured_atrium_necrotic_mantle",
    "name": "Necrotic Mantle of the Hollow Throne",
    "description": "The Necrotic Mantle of the Hollow Throne is a cloak woven from the very essence of forgotten kings and hollowed bones, its black fabric shimmering with sickly green light. It whispers of death's breath and the cold grip of eternity. When worn, it drains vitality from the living to fuel its malevolent power, granting the wearer a chilling aura that slows enemies within five meters, reducing their speed by 20%. The mantle also protects the undead who wear it, reducing the damage they receive by 10%. Activating the mantle costs one hit point but grants ten necrotic power points.",
    "category": "equipment",
    "price": 990,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "-20% enemy movement speed within 5 meters",
      "+10% damage reduction for undead"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Chilling Aura",
        "rules": "The wearer's aura imposes a -20 penalty to the movement speeds of all creatures within five meters. This effect lasts until an enemy ends their turn, and it can be used once per short or long rest."
      },
      {
        "title": "Undead Protection",
        "rules": "When worn by an undead creature, this mantle grants a +10 bonus to AC against nonmagical attacks. This benefit persists for one minute after the wearer no longer qualifies as undead (e.g., upon being destroyed or dispelled)."
      }
    ],
    "levelRequirementReason": "The necrotic energies within the mantle are too powerful for those of lesser strength, requiring a level five character to wield it effectively.",
    "vendorReason": "Fractured Atrium deals in relics and artifacts from forgotten realms, making this mantle an appropriate addition to their inventory.",
    "shippingDetail": "The cloak is delivered by the Rakasha, who ensure that it arrives safely but may delay its arrival due to the unpredictable nature of spirit travel.",
    "usage": {
      "activation": "Activates as a bonus action and lasts one minute. Ends when the wearer no longer qualifies as undead or upon being removed from the body.",
      "duration": "One minute",
      "endsWhen": "The wearer is no longer considered undead, or it is removed from their body.",
      "charges": "Unlimited"
    },
    "priceReason": "While not as powerful as some rare artifacts, the Necrotic Mantle requires careful handling and a deep understanding of necromancy to wield effectively.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-22T05:58:38.164301+00:00",
    "aiReviewedAt": "2026-07-22T05:58:38.164301+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_mantle_of_silence": {
    "id": "fractured_atrium_necrotic_mantle_of_silence",
    "name": "Necrotic Mantle of Silence",
    "description": "The Necrotic Mantle of Silence is a cloak woven from the whispers of the dead, its shadowy fabric muffling sound and granting temporary invisibility when necromantic power is low. The faint, spectral aura around it fades as the wearer's necromancy charges rise, hinting at a deeper connection between the user and the undead world. This mantle enhances the caster’s stealth during necromantic incantations, muffling sound and silencing enemy spells for brief moments of unspoken power.",
    "category": "equipment",
    "price": 990,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Silence Spells",
      "Stealthy Necromancy"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Silence Spells",
        "rules": "As a bonus action, the wearer can attempt to silence an enemy spell for up to 3 turns. The target must make a DC 15 Wisdom saving throw or be rendered speechless and unable to cast spells for that duration."
      },
      {
        "title": "Stealthy Necromancy",
        "rules": "The mantle grants the wearer +20% stealth chance when casting necromantic spells, allowing them to move silently through shadows and avoid detection more easily. This effect lasts until the end of the wearer’s next turn."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 3 to ensure the user has enough control over necromantic power.",
    "vendorReason": "Fractured Atrium specializes in arcane and shadowy artifacts, making it an ideal vendor for this necrotic cloak.",
    "shippingDetail": "The mantle is delivered via Boo Spectral Mail, ensuring safe and swift delivery through spectral means.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous (Silence Spells) or until the end of the next turn (Stealthy Necromancy)",
      "endsWhen": "The effect ends when the duration expires or the wearer takes a long rest.",
      "charges": "Unlimited, but the mantle can be used only once per short or long rest."
    },
    "priceReason": "This rare item offers significant advantages in stealth and spell silencing, justifying its moderate price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:57:55.282846+00:00",
    "aiReviewedAt": "2026-07-22T05:57:55.282846+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_maw": {
    "id": "fractured_atrium_necrotic_maw",
    "name": "Necrotic Maw",
    "description": "The Necrotic Maw is a grotesque, toothed mask forged from the bones and flesh of ancient undead. Its surface glows with an eerie violet light, pulsing with the essence of death itself. Wearing it grants you the power to summon shadowy wights that fight by your side, their spectral forms weaving through combat like shadows on a wall. The mask also absorbs damage dealt to you, channeling it into its own decayed form until it reaches capacity, after which it releases the absorbed energy in a burst of necrotic force.",
    "category": "equipment",
    "price": 990,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Summons Shadow Wights",
      "Absorbs Damage and Releases Necrotic Burst"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Summon Shadow Wights",
        "rules": "As an action, you can summon a wight to fight by your side. The summoned wight has AC 15, 20 hit points, and deals 6 necrotic damage with its bite attack. It remains for up to one minute or until it drops to 0 hit points. You can dismiss the wight as a bonus action."
      },
      {
        "title": "Absorbs Damage and Releases Necrotic Burst",
        "rules": "The mask absorbs 15% of damage dealt to you. When its absorption reaches 250 hit points, it releases a burst of necrotic energy (save DC 14). On a failed save, you take 3d6 necrotic damage and are restrained until the start of your next turn. On a successful save, you only take half as much damage."
      }
    ],
    "levelRequirementReason": "The mask's power requires a adept necromancer to control its dark energies.",
    "vendorReason": "The shop specializes in rare and powerful artifacts from the forgotten realms of the dead.",
    "shippingDetail": "Delivery is handled by the Shy Guy Smugglers, known for their timely but mysterious couriers.",
    "usage": {
      "activation": "Action to summon wight; no activation to absorb damage, burst happens when absorption reaches capacity.",
      "duration": "Wight summoned lasts up to one minute or until dismissed.",
      "endsWhen": "Wight drops to 0 hit points or is dismissed. Absorption ends upon death of wearer.",
      "charges": "Unlimited uses, but the mask must be recharged after a long rest."
    },
    "priceReason": "The mask's rare materials and necromantic essence make it worth nearly double its original price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:58:43.414548+00:00",
    "aiReviewedAt": "2026-07-22T05:58:43.414548+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_mirage": {
    "id": "fractured_atrium_necrotic_mirage",
    "name": "Necrotic Mirage",
    "description": "The Necrotic Mirage is a shimmering dagger forged from the fractured depths of the Atrium, its blade etched with runes that whisper of death and decay. When wielded, it momentarily corrupts nearby undead into illusory phantoms, causing them to collapse into harmless dust as soon as they are touched or attacked by an ally. Its touch is a curse, reducing necromantic damage by half for all creatures within 10 feet.",
    "category": "equipment",
    "price": 990,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Corrupts Undead Into Illusions",
      "Reduces Necrotic Damage"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Illusory Corruption",
        "rules": "Activate as a bonus action. Targets all undead within 10 feet of you for 6 seconds, turning them into harmless phantoms that dissipate when touched or attacked by an ally."
      },
      {
        "title": "Necrotic Reduction",
        "rules": "Inflicts a 50% damage reduction to necromantic creatures. This effect lasts until the start of your next turn and can be reactivated once per short rest."
      }
    ],
    "levelRequirementReason": "Requires some familiarity with necrotic energies to wield effectively.",
    "vendorReason": "The fractured depths of the Atrium are where this dagger was forged, and only those who understand its origins can sell it.",
    "shippingDetail": "Delivered by spectral couriers through the Ethereal Plane, ensuring safe arrival without delay.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "6 seconds",
      "endsWhen": "Start of your next turn; can be reactivated once per short rest.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to reflect its unique abilities and the materials used in its construction.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:57:53.675817+00:00",
    "aiReviewedAt": "2026-07-22T05:57:53.675817+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_reflection": {
    "id": "fractured_atrium_necrotic_reflection",
    "name": "Necrotic Reflection Shard",
    "description": "A shard from a fractured atrium, this Necrotic Reflection Shard is a twisted remnant of dark magic. When wielded, it absorbs and re-renders enemy spells, disrupting their arcane flow for moments that can turn the tide of battle. Its surface glows with an eerie violet light, casting a shadow over nearby foes, and its touch brings a subtle chill to the air, enhancing your dodge chance against magical attacks.",
    "category": "equipment",
    "price": 990,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs and re-renders enemy spell damage",
      "Enhances dodge chance against magical attacks"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Spell Absorption",
        "rules": "When an enemy casts a spell within 5 feet, the shard absorbs it for 2 seconds. The absorbed spell is re-rendered as a harmless flash of light that has no effect on allies or enemies."
      },
      {
        "title": "Enhanced Dodge",
        "rules": "While holding this shard, you have advantage on Dexterity saving throws against magical attacks and gain a +15 bonus to your AC against such attacks. This benefit lasts for 1 minute per use."
      }
    ],
    "levelRequirementReason": "This shard requires a character of at least level 3 to wield its dark magic effectively.",
    "vendorReason": "The fractured atrium is known for its peculiar and powerful relics, making this shard an appropriate addition to their inventory.",
    "shippingDetail": "Ships via the Void Drifter Relay; expect a 2-week delivery time due to the fragile nature of the item.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous, with one use per short rest",
      "endsWhen": "After being used or when the user completes a short rest",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects its rare and powerful nature, balancing its effect on enemy spellcasters with its manageable limitations.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:58:33.600720+00:00",
    "aiReviewedAt": "2026-07-22T05:58:33.600720+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_ring": {
    "id": "fractured_atrium_necrotic_ring",
    "name": "Necrotic Ring of the Atrium’s Echo",
    "description": "The Necrotic Ring of the Atrium’s Echo is a twisted bauble crafted from the shattered remains of the Deep Mirror. Its surface pulses with a sickly green glow, and when worn, it grants you the eerie ability to see through the eyes of the dead. This cursed ring allows you to detect soulbound undead within 30 feet with perfect clarity, and your necromancy spellcasting is accelerated by +15%. The ring's malevolent essence also inflicts 1d6 necrotic damage upon foes within 5 feet when you cast a necromantic spell.",
    "category": "equipment",
    "price": 990,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Soulbound Vision",
      "Accelerated Necromancy"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Soulbound Vision",
        "rules": "Activate as a bonus action. You gain the ability to detect soulbound undead within 30 feet for 1 minute. This effect ends if you take damage, you cast another spell, or you remove the ring."
      },
      {
        "title": "Accelerated Necromancy",
        "rules": "Passive effect. While wearing the ring, your necromancy spellcasting is accelerated by +15%. This benefit lasts until you finish a long rest."
      }
    ],
    "levelRequirementReason": "The cursed nature of the ring necessitates a moderate level to safely wield its power without succumbing to its malevolent influence.",
    "vendorReason": "Fractured Atrium specializes in arcane relics and cursed artifacts, making it an ideal vendor for such a sinister piece.",
    "shippingDetail": "The ring is carefully packed to prevent its malevolent essence from affecting the courier during transit.",
    "usage": {
      "activation": "Bonus action (Soulbound Vision)",
      "duration": "1 minute (Soulbound Vision)",
      "endsWhen": "Taking damage, casting another spell, or removing the ring",
      "charges": "Unlimited"
    },
    "priceReason": "The ring's cursed nature and unique abilities justify a price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:58:09.330158+00:00",
    "aiReviewedAt": "2026-07-22T05:58:09.330158+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_shroud": {
    "id": "fractured_atrium_necrotic_shroud",
    "name": "Necrotic Shroud of the Deep Mirror",
    "description": "The Necrotic Shroud of the Deep Mirror is a twilight-hued cloak woven from the remnants of forgotten necromantic experiments. Its fabric absorbs ambient light and re-emits it as malevolent necrotic energy, making you invisible in dimly lit areas. With each heartbeat, it amplifies dark magic, enhancing your necromantic spells by +30% damage. This shroud is a relic from the depths of an ancient necropolis, crafted to aid stealthy necromancers in their dark endeavors.",
    "category": "equipment",
    "price": 5700,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Necrotic Invisibility",
      "Enhanced Necromancy"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Necrotic Invisibility",
        "rules": "Activates as a bonus action. Grants invisibility for 10 seconds in dim light or darkness. Can be used once per short rest."
      },
      {
        "title": "Enhanced Necromancy",
        "rules": "Grants +30% damage to all necromantic spells, until the wearer completes a long rest. No save is required; this effect stacks with other sources of necrotic damage."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to master its dark magic and control its effects.",
    "vendorReason": "Fractured Atrium specializes in arcane artifacts, including relics of forgotten necromancers.",
    "shippingDetail": "Ships via spectral courier, ensuring safe and swift delivery to your doorstep.",
    "usage": {
      "activation": "Bonus action to activate invisibility. Long rest required for enhanced necromancy to reset.",
      "duration": "10 seconds of invisibility; long rest resets enhanced necromancy effect.",
      "endsWhen": "Ends when the wearer completes a long rest or is dispelled.",
      "charges": "Unlimited, but limited by one use per short rest for invisibility."
    },
    "priceReason": "Reflecting its rare and powerful nature, this shroud justifies a price of 2800 XP.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T05:58:23.395683+00:00",
    "aiReviewedAt": "2026-07-22T05:58:23.395683+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_sigh": {
    "id": "fractured_atrium_necrotic_sigh",
    "name": "Necrotic Sigh of the Forgotten",
    "description": "The Necrotic Sigh of the Forgotten is a hollowed bone whistle, its surface etched with ancient sigils that whisper of forgotten battles and lost souls. When sounded in a time of dire need, it channels the final breath of the fallen to resurrect an ally for ten seconds, granting them 50% health regeneration during this time. The instrument also fortifies undead allies, reducing their incoming damage by 30%, but only as long as the whistle's haunting tune resounds.",
    "price": 990,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Resurrection and Health Regeneration",
      "Undead Damage Reduction"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Echo of the Fallen",
        "rules": "On the next successful necromantic spell cast, there is a 10% chance for the caster to gain an additional +1d8 necrotic damage on their next attack."
      },
      {
        "title": "Necrotic Sigh",
        "rules": "Activation: A bonus action. Duration: Ten seconds. Range: Self. Ends When: The effect ends when the duration expires, the wielder uses an action to dismiss it, or a successful DC 15 Wisdom (Insight) check is made by an opponent."
      }
    ],
    "levelRequirementReason": "Only those who have faced the abyss and survived can master such dark magic.",
    "vendorReason": "The vendors at Fractured Atrium specialize in rare relics of forgotten lore, and this whistle is a prime example of their stock.",
    "shippingDetail": "Delivered by the swift Rakasha, who ensures the item arrives intact and imbued with its full power.",
    "usage": {
      "activation": "A bonus action to activate the effect.",
      "duration": "Ten seconds of effect duration.",
      "endsWhen": "The effect ends when the duration expires, the wielder uses an action to dismiss it, or a successful DC 15 Wisdom (Insight) check is made by an opponent.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to reflect its rarity and the dark magic required for its creation.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:58:52.107056+00:00",
    "aiReviewedAt": "2026-07-22T05:58:52.107056+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_silence": {
    "id": "fractured_atrium_necrotic_silence",
    "name": "Necrotic Silence",
    "description": "Necrotic Silence is a vial of corrupted echo-essence, its contents swirling with an eerie violet glow that whispers of forgotten tombs and spectral hauntings. When uncorked in the presence of deathly spirits, it amplifies their silent wails into a deafening cacophony, silencing all audible psychic echoes within 30 feet for 30 seconds. The vial also grants the wielder an ethereal necromantic aura that increases spellcasting speed by 25%, allowing for faster casting of necromancy spells without sacrificing potency.",
    "price": 990,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Silence Audible Echoes",
      "Enhanced Necromancer Speed"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silence Audible Echoes",
        "rules": "Activates on uncorking, silencing all audible psychic echoes within a 30-foot radius for 30 seconds. The effect ends if the vial is corked or if the wielder moves out of the area."
      },
      {
        "title": "Enhanced Necromancer Speed",
        "rules": "Increases necromancy spellcasting speed by 25%. This effect lasts until the end of your next turn. There are no save DCs, and this effect can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "Necrotic Silence is accessible to lower-level necromancers who wish to augment their abilities without the need for higher-tier magic.",
    "vendorReason": "This vendor specializes in rare and exotic items from ancient tombs, making Necrotic Silence a fitting addition to their inventory.",
    "shippingDetail": "Ships via Koopa Express, ensuring safe delivery of this fragile vial within three days.",
    "usage": {
      "activation": "Uncorking the vial",
      "duration": "30 seconds upon activation; ends if corked or wielder moves out of area",
      "endsWhen": "Vial is corked or wielder leaves the area",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The price reflects its rarity and the specialized crafting required to obtain this unique item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:59:33.271866+00:00",
    "aiReviewedAt": "2026-07-22T05:59:33.271866+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_soul_cloth": {
    "id": "fractured_atrium_necrotic_soul_cloth",
    "name": "Necrotic Soul Cloth",
    "description": "The Necrotic Soul Cloth, woven from the very essence of forgotten tombs and the whispers of the dead, is a spectral garment that amplifies necromantic spells and channels dark magic into its wearer. It pulses with faint spectral echoes that guide the wearer through shadowed halls, providing an eerie sense of direction in the most haunted places. This cloth not only enhances necromancy but also absorbs 10% of incoming necrotic damage, allowing the living to survive longer in the realm of the dead.",
    "category": "equipment",
    "price": 990,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Necromantic Amplification",
      "Spectral Guidance"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Necromantic Amplification",
        "rules": "When you cast a necromantic spell, it deals an additional +30% damage. This effect lasts until the start of your next turn."
      },
      {
        "title": "Spectral Guidance",
        "rules": "Once per short rest, wearing this cloth allows you to see spectral echoes that guide you through shadowy areas for 1 minute, providing advantage on Stealth checks and saving throws against being frightened within a 60-foot radius."
      }
    ],
    "levelRequirementReason": "Wearing the Necrotic Soul Cloth requires a character to have at least 3 levels in a necromancer class or similar background.",
    "vendorReason": "The Fractured Atrium is known for its dark antiquities and relics, making it the ideal vendor for such an evocative item.",
    "shippingDetail": "Due to the cloth's ethereal nature, it requires special handling by the Void Drifter Relay to ensure safe delivery through the astral planes.",
    "usage": {
      "activation": "Passive effect when worn; spectral echoes activate once per short rest.",
      "duration": "Spectral Guidance lasts for 1 minute from the start of your turn.",
      "endsWhen": "The duration ends or you remove the cloth.",
      "charges": "Unlimited, recharges at dawn."
    },
    "priceReason": "The Necrotic Soul Cloth is priced moderately high due to its rarity and the specialized materials required for its creation.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:59:08.050122+00:00",
    "aiReviewedAt": "2026-07-22T05:59:08.050122+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_soul_core": {
    "id": "fractured_atrium_necrotic_soul_core",
    "name": "Necrotic Soul Core of the Deep Mirror",
    "description": "The Necrotic Soul Core of the Deep Mirror pulses with a dark, ethereal light, forged from the fractured reflections of the Atrium's deepest mirror. This relic amplifies necromancy spells by +30% and channels the essence of the dead into your next melee strike, ensuring that every blow is imbued with bone-chilling power. Crafted in the heart of a shattered atrium, it requires careful handling to prevent its malevolent energy from corrupting its wielder.",
    "price": 990,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% spell power for necromancy spells",
      "Channels necrotic essence into next melee strike"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal Service",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Necrotic Amplification",
        "rules": "Activates on casting a necromancy spell. The effect lasts until the end of your next turn, providing +30% to spell power for the duration."
      },
      {
        "title": "Essence Strike",
        "rules": "At the start of each of your turns after channeling the essence, you can make a melee attack that deals an additional 2d6 necrotic damage. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The core's malevolent energy requires a seasoned necromancer to safely channel its power.",
    "vendorReason": "The fractured atrium is the birthplace of this relic, and its vendor deals exclusively in artifacts from that location.",
    "shippingDetail": "Due to its volatile nature, the Necrotic Soul Core must be shipped via Koopa's secure, cold-storage couriers.",
    "usage": {
      "activation": "Activates on casting a necromancy spell.",
      "duration": "Until the end of your next turn after activation.",
      "endsWhen": "At the start of your next turn or if you cast another spell requiring concentration.",
      "charges": "Once per long rest"
    },
    "priceReason": "Balanced at a price that reflects its powerful necromantic abilities and unique crafting requirements.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:59:13.127114+00:00",
    "aiReviewedAt": "2026-07-22T05:59:13.127114+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_soulshard": {
    "id": "fractured_atrium_necrotic_soulshard",
    "name": "Necrotic Soulshard",
    "description": "The Necrotic Soulshard pulses with a dark, corrupted light, its surface etched with names of the forgotten and lost. When summoned, it amplifies necromantic spells by +30% damage and grants temporary control over spectral remnants for 1 minute, allowing you to command them as willing allies. Each invocation drains one soul point from the shard, replenishing in the night, but its glow dims with each death, hinting at the finite nature of this dark power.",
    "category": "equipment",
    "price": 990,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% necromancy spell damage",
      "Grants temporary control over spectral remnants for 1 minute"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Amplified Necromancy",
        "rules": "Activates as a bonus action. Increases the damage of all necromancy spells by +30%. The effect lasts until the end of your next turn."
      },
      {
        "title": "Spectral Control",
        "rules": "Activates on command during your turn, granting you temporary control over spectral remnants for 1 minute. You can command them as willing allies to perform tasks or combat actions."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 5 due to its dark magic and soul-consuming nature.",
    "vendorReason": "Fractured Atrium, an ancient necromancer's den, houses this relic as it is known for dealing with the macabre and arcane.",
    "shippingDetail": "Ships via a shadowy courier ensuring swift delivery to your door at dawn.",
    "usage": {
      "activation": "Bonus action or command during your turn",
      "duration": "Amplified Necromancy lasts until the end of your next turn. Spectral Control lasts for 1 minute.",
      "endsWhen": "The effect ends if you are incapacitated, or if you dismiss it as an action.",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "This price reflects the item's rarity and its powerful necromantic abilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:32:55.915435+00:00",
    "aiReviewedAt": "2026-07-22T19:32:55.915435+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_tome": {
    "id": "fractured_atrium_necrotic_tome",
    "name": "Tome of the Unshackled Dead",
    "description": "The Tome of the Unshackled Dead is an ancient, leather-bound grimoire adorned with sigils that whisper the names of fallen souls. Its pages crackle with necrotic energy, and its weight feels unnervingly heavy. This tome demands a sacrifice from its user—a personal item or fragment thereof—each time it is used to command undead, ensuring that its power comes at a steep price in both soul and substance.",
    "price": 990,
    "icon": "📜",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+50% damage to undead foes",
      "Grants temporary control over summoned undead"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Command Undead",
        "rules": "As an action, the user commands a nearby undead creature within 30 feet. The target is granted temporary control for up to three turns, during which time it fights on your side. This effect has no save DC and does not require any material components."
      },
      {
        "title": "Necrotic Surge",
        "rules": "Upon successful command of undead, the user gains a +50% bonus to damage against all undead foes for 1 hour. This effect can be used once per long rest. The tome must be sacrificed after three uses."
      }
    ],
    "levelRequirementReason": "The power of the tome demands a certain mastery over necromancy and control, suitable only for those of at least third level.",
    "vendorReason": "The Fractured Atrium has long traded in forbidden knowledge and ancient relics, making it a fitting home for such an item.",
    "shippingDetail": "Due to the dangerous nature of the tome, it is shipped under heavy guard by Shy Guy Smugglers with enhanced security measures.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; control lasts for up to three turns",
      "endsWhen": "The target undead creature escapes or is otherwise lost from the user's control",
      "charges": "Once per long rest"
    },
    "priceReason": "The balance of power and sacrifice required by this tome justifies its price in experience points.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:00:01.620187+00:00",
    "aiReviewedAt": "2026-07-22T06:00:01.620187+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_tongue": {
    "id": "fractured_atrium_necrotic_tongue",
    "name": "Necrotic Tongue of the Unseen",
    "description": "The Necrotic Tongue of the Unseen is a twisted, blackened tongue that hangs from a leather harness. Its gnarled surface glows faintly with necromantic runes. When activated, it speaks in forgotten tongues, revealing hidden truths about enemies and allies alike. It grants a 10% bonus to necromancy skill checks for the duration of combat, and after two turns, it unlocks ancient runes that expose an enemy's weaknesses, making them vulnerable to your attacks.",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Necromantic Revelation",
      "Enhanced Necromancer"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Necromantic Revelation",
        "rules": "On activation as a bonus action, the tongue grants you advantage on necromancy skill checks for the duration of combat. After two turns, it exposes an enemy's weaknesses, reducing their AC by 2 until the end of your next turn."
      },
      {
        "title": "Enhanced Necromancer",
        "rules": "For each successful necromancy check made while wearing the tongue, you gain a +1 bonus to your next necromancy skill check within one minute. This effect stacks up to three times per long rest."
      }
    ],
    "levelRequirementReason": "Requires at least third-level proficiency in necromancy to effectively harness its power.",
    "vendorReason": "The relics of the Unseen are often sold by traders from Fractured Atrium, who have access to rare and forgotten artifacts.",
    "shippingDetail": "Ships via the Void Drifter Relay, known for its quick but unpredictable delivery times.",
    "usage": {
      "activation": "Bonus action to activate; requires a necromancy skill check.",
      "duration": "Until the end of combat or until expended.",
      "endsWhen": "Exhausted after two turns or expended by using all charges.",
      "charges": "2 uses per long rest"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the item's rare necromantic properties and limited uses.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T06:00:11.598039+00:00",
    "aiReviewedAt": "2026-07-22T06:00:11.598039+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_vial": {
    "id": "fractured_atrium_necrotic_vial",
    "name": "Vial of the Unwashed Dead",
    "description": "The Vial of the Unwashed Dead holds a vile essence extracted from a recently resurrected corpse. Drinking it heals you for 200 hit points but casts an unsettling curse on your foes—any enemy struck by you has a 50% chance to be turned into a spectral minion, which hovers at your side for 10 seconds before vanishing. This vial is a macabre relic from the fractured Atrium, where the dead walk among the living.",
    "price": 230,
    "icon": "🔮",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Restore 200 HP",
      "Turn enemy into spectral minion"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Healing Restoration",
        "rules": "When consumed by the user, this vial restores 200 hit points. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Spectral Minion Curse",
        "rules": "Any enemy struck by you has a 50% chance to be turned into a spectral minion for 10 seconds. The minion hovers at your side, but it cannot attack or interact with the environment and vanishes after the duration."
      }
    ],
    "levelRequirementReason": "This vial's potent curse requires a character of at least level 3 to manage its effects.",
    "vendorReason": "The fractured Atrium, where the dead walk among the living, is known for its dark curios and relics like this vial.",
    "shippingDetail": "Due to its volatile nature, the vial must be shipped in a specially insulated container with cold packs to preserve its potency.",
    "usage": {
      "activation": "Consumed as an action.",
      "duration": "Instantaneous for healing; minion effect lasts 10 seconds.",
      "endsWhen": "The curse ends if you are incapacitated or the minion is destroyed.",
      "charges": "Unlimited, but each use depletes one of your daily vial uses."
    },
    "priceReason": "The vial's potent healing and cursed effect make it a valuable but dangerous commodity in the fractured Atrium.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T05:59:59.599536+00:00",
    "aiReviewedAt": "2026-07-22T05:59:59.599536+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_vision": {
    "id": "fractured_atrium_necrotic_vision",
    "name": "Necrotic Vision Lens",
    "description": "The Necrotic Vision Lens, forged from the eye of a drowned necromancer, is a fractured crystal lens that warps reality, revealing hidden necromantic energies and exposing enemy weaknesses within the Atrium’s broken mirrors. When activated, it distorts your vision for mere instants, yet long enough to uncover secret artifacts or exploit foes' vulnerabilities. It can only be used in areas where light and shadow intertwine, making it a crucial tool for those navigating the fractured heart of the necromantic domain.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals hidden necromantic artifacts",
      "Exposes enemy necrotic weaknesses"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Expose Hidden Artifacts",
        "rules": "When activated, this lens distorts your vision for up to 10 seconds within a 30-foot radius. It reveals hidden necromantic artifacts and weak points in the Atrium's mirrors. You can use it once per short or long rest."
      },
      {
        "title": "Expose Weaknesses",
        "rules": "For the duration of its effect, this lens allows you to make Intelligence (Arcana) checks with advantage when attempting to detect enemy necrotic weaknesses within a 30-foot radius. It can be used once per short rest."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to wield effectively due to the lens's complex magical properties and the need for advanced understanding of necromantic energies.",
    "vendorReason": "Only the fractured Atrium can supply such a unique and dangerous item, as it is crafted within its very heart.",
    "shippingDetail": "The lens must be specially couriered by a Rakasha to ensure its delicate magical properties are preserved during transit.",
    "usage": {
      "activation": "A bonus action to activate and distort your vision for up to 10 seconds.",
      "duration": "Up to 10 seconds per use",
      "endsWhen": "The effect ends when the duration expires or you take damage.",
      "charges": "Unlimited, recharges after a short rest."
    },
    "priceReason": "Balanced at 1000 XP as it provides significant utility in navigating and combating necrotic threats within the Atrium’s fractured mirrors.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:00:35.264777+00:00",
    "aiReviewedAt": "2026-07-22T06:00:35.264777+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_wand": {
    "id": "fractured_atrium_necrotic_wand",
    "name": "Necrotic Wand of the Hollow Throne",
    "description": "The Necrotic Wand of the Hollow Throne is a staff hewn from the petrified heartwood of an ancient altar, its surface etched with runes that whisper of forgotten kings and lost battles. It pulses with dark energy, capable of summoning tendrils that bind foes in a web of death, draining their vitality as they struggle to escape. Use it sparingly, for each invocation leaves the wielder's touch tainted by the very essence of decay.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧟",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Necrotic Bind",
      "Ephemeral Invisibility"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Necrotic Bind",
        "rules": "Activates as an action. Summons a web of necrotic tendrils that binds the target, reducing their speed by half and granting the user +50% damage against them for 3 turns. The effect ends if the target is freed from the bind or takes any movement."
      },
      {
        "title": "Ephemeral Invisibility",
        "rules": "Activates as a bonus action. The wielder becomes invisible for 5 seconds, granting advantage on Dexterity (Stealth) checks and allowing them to avoid opportunity attacks during this time. This effect ends when the user reverts to visibility or if they take any action that requires vision."
      }
    ],
    "levelRequirementReason": "The wand's dark magic demands a certain level of mastery over necromancy before it can be wielded effectively.",
    "vendorReason": "Fractured Atrium deals in relics and artifacts from lost realms, making this necrotic treasure a fitting addition to their inventory.",
    "shippingDetail": "Delivered by shadowy couriers who whisper secrets of the night as they transport the item.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous, lasts for 3 turns (Necrotic Bind) / 5 seconds (Ephemeral Invisibility)",
      "endsWhen": "Target freed from Necrotic Bind / User reverts to visibility / Takes an action requiring vision",
      "charges": "Unlimited"
    },
    "priceReason": "The wand's rare material and dark enchantments justify its price, providing a powerful but balanced tool for necromancers.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-22T06:00:53.295262+00:00",
    "aiReviewedAt": "2026-07-22T06:00:53.295262+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_wardstone": {
    "id": "fractured_atrium_necrotic_wardstone",
    "name": "Necrotic Wardstone",
    "description": "Crafted from the petrified remains of a Corvinarus elder, this Necrotic Wardstone gleams with a sickly green glow, its surface etched with ancient runes that whisper of death and rebirth. When activated, it absorbs magical damage, siphoning it into a pulsating core that radiates death energy. The stone's power is both defensive and regenerative: while active, it grants +1 to necromancy skill checks on the next spell cast and restores 5% health per second for frontline necromancers.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs magical damage",
      "Regenerates health"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Damage Absorption",
        "rules": "When activated, the Necrotic Wardstone reduces incoming magical damage by 30%. The effect lasts for 1 minute and ends if the user takes non-magical damage or is incapacitated. This does not stack with other similar effects."
      },
      {
        "title": "Health Regeneration",
        "rules": "While active, the stone restores 5% hit points per second to the user. This effect ceases when the user takes any non-magical damage or becomes incapacitated. The regeneration is limited to a maximum of 100 HP during the duration."
      }
    ],
    "levelRequirementReason": "Requires at least level 3 to channel the necrotic energies effectively.",
    "vendorReason": "The Fractured Atrium is known for its connections with dark rituals and ancient artifacts, making it a fitting vendor for this powerful relic.",
    "shippingDetail": "Ships via Lakitu Drone, ensuring swift delivery of this fragile artifact.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "User takes non-magical damage or becomes incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the item's rare and powerful necrotic properties.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:00:47.310415+00:00",
    "aiReviewedAt": "2026-07-22T06:00:47.310415+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_necrotic_wisp": {
    "id": "fractured_atrium_necrotic_wisp",
    "name": "Necrotic Wisp Core",
    "description": "The Necrotic Wisp Core is a fractured crystal core encasing a corrupted soul. Its crystalline structure glows faintly with an eerie, greenish hue, and when fused into a weapon, it can summon wisp tendrils that drain life essence from foes. Each wisp weaves through the air, leaving trails of shadowy energy behind, and their touch saps vitality with each strike. This core is said to have been crafted in the depths of an ancient necromantic laboratory where dark magic once thrived.",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Summons Wisp Tendrils",
      "Drains Vitality"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Summons Wisp Tendrils",
        "rules": "On activation as a bonus action, the user can summon three wisp tendrils. These tendrils hover around the target for up to 1 minute or until dismissed by the user. Each tendril deals necrotic damage equal to 1d6 + the wielder's proficiency bonus over 3 seconds and imposes a -1 penalty on Dexterity saving throws within 5 feet of them."
      },
      {
        "title": "Drains Vitality",
        "rules": "For every successful hit from the wisp tendrils, the target must make a Constitution saving throw (DC 12) or suffer an additional 1d4 necrotic damage per minute for up to 3 minutes. A successful save halves this duration."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to wield effectively, as it demands a strong understanding of necromancy.",
    "vendorReason": "Fractured Atrium is known for its dark artifacts and items with corrupted magical properties.",
    "shippingDetail": "The package may arrive slightly delayed due to the nature of the item's origin and the dangers it poses during transit.",
    "usage": {
      "activation": "Bonus action to summon wisp tendrils; can dismiss them at any time.",
      "duration": "Up to 1 minute or until dismissed",
      "endsWhen": "Target makes a successful saving throw, or the effect expires naturally after 3 minutes",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP to reflect its dark magic and limited utility while remaining within player budget.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:00:29.549936+00:00",
    "aiReviewedAt": "2026-07-22T06:00:29.549936+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_shadow_blood": {
    "id": "fractured_atrium_shadow_blood",
    "name": "Shadow Blood of the Atrium Veil",
    "description": "The Shadow Blood of the Atrium Veil is a dark, viscous elixir harvested from the mirrored voids beneath the Atrium's shattered veil. Crafted by necromancers in secret, it imbues weapons and armor with the power to become invisible for thirty seconds and inflict chilling cold damage upon contact. This potent brew can only be obtained through the fractured veins of the Atrium itself, making it a rare and coveted tool for those who walk the shadows.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Chilling Touch"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "Activates as an action. The wielder gains invisibility for thirty seconds. This effect is interrupted by any movement or attack made during its duration."
      },
      {
        "title": "Chilling Touch",
        "rules": "Inflicts 2d4 cold damage to all creatures touched and causes 1d2 shadow damage to undead creatures within the wielder's reach. The effect ends when the wielder makes an attack or moves, or after thirty seconds."
      }
    ],
    "levelRequirementReason": "This elixir requires a minimum of three levels to activate its effects due to its potent necromantic properties.",
    "vendorReason": "The Atrium's fractured veins are the only source for this rare elixir, making it a natural fit for Fractured Atrium.",
    "shippingDetail": "Ships via spectral courier with a one-week delivery time.",
    "usage": {
      "activation": "Action",
      "duration": "30 seconds or until interrupted by movement or attack",
      "endsWhen": "Movement, attack made, or thirty seconds",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the rare and necromantic nature of the elixir, as well as its limited availability.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:01:39.188399+00:00",
    "aiReviewedAt": "2026-07-22T06:01:39.188399+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_shadow_bone_gauntlet": {
    "id": "fractured_atrium_shadow_bone_gauntlet",
    "name": "Shadow Bone Gauntlet of the Hollow Throne",
    "description": "The Shadow Bone Gauntlet of the Hollow Throne is a gauntlet forged from the bones of a fallen necromancer, imbued with the spectral energy that once animated its master. Its intricate engravings glow faintly in the dark, and it whispers with an eerie, otherworldly voice when worn. This relic amplifies shadow-based attacks to devastating effect and grants the wearer the ability to phase through solid objects briefly, evading foes or slipping past barriers unseen.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+25% damage with shadow attacks",
      "Phase through solid objects for 3 seconds"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Shadow Amplification",
        "rules": "When you deal shadow-based damage, you gain a +25 bonus to the attack roll. This effect lasts until you use your action in combat."
      },
      {
        "title": "Phasing",
        "rules": "As an action, you can phase through solid objects for 3 seconds. You have advantage on Strength (Athletics) checks made to move while phasing and gain resistance to all damage taken from non-magical attacks. This effect ends when the duration expires or if you are hit by an attack."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 5 due to its necromantic power and intricate craftsmanship.",
    "vendorReason": "The vendor is known for handling rare, cursed artifacts from the depths of the Atrium.",
    "shippingDetail": "Ships via secure, shadow-infused drones that ensure safe delivery to your doorstep.",
    "usage": {
      "activation": "Action or Reaction (for Phasing)",
      "duration": "Instantaneous for Shadow Amplification; 3 seconds for Phasing",
      "endsWhen": "Ends when the duration expires or if you are hit by an attack",
      "charges": "Unlimited, but only one Phasing per short rest"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare crafting and potent abilities.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T06:00:50.006154+00:00",
    "aiReviewedAt": "2026-07-22T06:00:50.006154+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_shadow_breath": {
    "id": "fractured_atrium_shadow_breath",
    "name": "Shadow Breath Mask",
    "description": "The Shadow Breath Mask, forged from the bones of a drowned necromancer, shrouds its wearer in an eerie mist that mimics the whispers of the undead. Its spectral breath can summon ethereal shadows to reveal hidden foes and their precise locations within a radius. This macabre visage is said to have been crafted by the hands of ancient necromancers who sought to command the dead, but it now finds a new purpose in the hands of those who seek to outmaneuver their enemies on the battlefield.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility and Shadow Whispers",
      "Necrotic Aura"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Invisibility and Shadow Whispers",
        "rules": "When activated, the mask grants the wearer temporary invisibility for 10 seconds. Additionally, it can summon spectral whispers that reveal the location of enemies within a 30-foot radius. This effect has no save DC but is limited to once per short rest."
      },
      {
        "title": "Necrotic Aura",
        "rules": "The mask emits a necrotic aura that increases the damage of all necromantic spells cast by the wearer by +20%. The aura persists as long as the mask is worn but does not stack with other sources of necrotic damage."
      }
    ],
    "levelRequirementReason": "The intricate crafting and dark magic required to imbue the mask with its powers make it suitable only for those of at least fifth level.",
    "vendorReason": "The masked necromancers who once called this place home are said to have left behind some of their most prized creations, including the Shadow Breath Mask.",
    "shippingDetail": "Delivered by spectral couriers who ensure that the mask arrives in perfect condition, even through the gravest perils.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds of invisibility; once per short or long rest to summon spectral whispers",
      "endsWhen": "The duration ends when the effect is used or after 10 seconds",
      "charges": "Unlimited, but each use requires a short or long rest"
    },
    "priceReason": "Crafted from rare materials and infused with necromantic energies, this mask offers potent battlefield advantages at a price that reflects its dark craftsmanship.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:01:30.439083+00:00",
    "aiReviewedAt": "2026-07-22T06:01:30.439083+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_shadow_cloak": {
    "id": "fractured_atrium_shadow_cloak",
    "name": "Shadow Cloak of the Bleeding Veil",
    "description": "The Shadow Cloak of the Bleeding Veil, crafted from the very essence of a fallen necromancer’s soul, weaves ambient darkness into its weave. It whispers secrets of the dead to those who dare to listen, revealing nearby undead or necromantic threats in dim environments. When struck by magical spells, it absorbs 10% of their power and redirects that energy back at the caster, doubling as a defensive shield against supernatural forces.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs magical damage",
      "Whispers secrets"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Absorb Magical Damage",
        "rules": "When struck by a magical attack or spell, the cloak absorbs 10% of its damage and redirects it back at the caster as an additional damage roll. This effect has no save DC but does not stack with other similar effects."
      },
      {
        "title": "Whispering Secrets",
        "rules": "While wearing the cloak in dim or dark environments, you can use your action to listen for nearby undead or necromantic threats within 30 feet. You gain advantage on Wisdom (Perception) checks made to detect such threats."
      }
    ],
    "levelRequirementReason": "Crafted with powerful necromantic energies, this cloak is best suited for those of at least fifth level.",
    "vendorReason": "The necromancers of Fractured Atrium still revere the fallen and their tools, including this cursed yet powerful artifact.",
    "shippingDetail": "Ships via a Rakasha spirit courier, ensuring safe and swift delivery. Requires an additional week for magical item handling.",
    "usage": {
      "activation": "Passive effect; requires no activation, but whispers occur only in dim or dark environments.",
      "duration": "Instantaneous; effects last until the start of your next turn when struck by a magical attack or spell.",
      "endsWhen": "The wearer is no longer within 30 feet of dim light and darkness, or if the cloak takes damage.",
      "charges": "Unlimited; recharges after a long rest."
    },
    "priceReason": "Balanced at half price to reflect its moderate power level while still being a rare item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:01:20.931260+00:00",
    "aiReviewedAt": "2026-07-22T06:01:20.931260+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_shadow_gaze": {
    "id": "fractured_atrium_shadow_gaze",
    "name": "Shadow Gaze of the Deep Mirror",
    "description": "The Shadow Gaze of the Deep Mirror is a cursed eye crafted from ancient obsidian and shadow essence. It grants its wielder perfect stealth in darkened areas, allowing them to move unseen among shadows. Upon use, it reveals a fleeting glimpse into the target’s most hidden memory, offering insight into their darkest secrets. This artifact is said to have been forged by a long-lost necromancer who sought to bend souls to his will.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Perfect Stealth",
      "Memory Revelation"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Perfect Stealth",
        "rules": "When activated, the user gains advantage on Dexterity (Stealth) checks for one round in any shadowed area. The effect is instantaneous and ends when the user moves out of a shadowy environment."
      },
      {
        "title": "Memory Revelation",
        "rules": "Upon activation, the user can briefly glimpse into the target’s past by looking directly at them. This grants the user insight into one hidden memory of the target's past. The effect lasts for 1 round and requires a successful Wisdom (Insight) check against the target’s Wisdom saving throw DC."
      }
    ],
    "levelRequirementReason": "This artifact is powerful and dangerous, requiring a user skilled enough to handle its dark magic without succumbing to it.",
    "vendorReason": "The Fractured Atrium has long traded in items of dark lore and cursed artifacts, making the Shadow Gaze an appropriate addition to their inventory.",
    "shippingDetail": "Due to its cursed nature, the Shy Guy Smugglers provide special handling for this item, ensuring it arrives undisturbed by any foul magic in transit.",
    "usage": {
      "activation": "Action",
      "duration": "One round per use",
      "endsWhen": "The user moves out of a shadowed area or the effect is interrupted",
      "charges": "Uses up one charge; recharges after a long rest"
    },
    "priceReason": "Balanced as a rare artifact, this item provides unique and powerful abilities while remaining within the bounds of reasonable value for its rarity.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:01:09.216853+00:00",
    "aiReviewedAt": "2026-07-22T06:01:09.216853+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_shadow_harness": {
    "id": "fractured_atrium_shadow_harness",
    "name": "Shadow Harness of the Corvinarus Lineage",
    "description": "The Shadow Harness of the Corvinarus Lineage, a dark and segmented harness forged from the spectral remains of ancient nobility, binds its wearer to the ethereal echoes of the Corvinarus line. It allows for the phasing through solid matter for brief moments and summons spectral guardians that fight alongside their master, dealing 150% damage with each strike and a 20% chance to stagger foes. In battle, it amplifies the user's resilience against undead attacks by reducing incoming damage by 25%. Only those of noble blood can wield this relic, for it speaks only to true heirs.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Phasing through Solid Matter",
      "Summon Spectral Guardians"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Phasing through Solid Matter",
        "rules": "The wearer has a 20% chance per round to phase through solid matter for 3 seconds. During this time, they are immune to all damage and movement restrictions. This effect is limited to once every three minutes."
      },
      {
        "title": "Summon Spectral Guardians",
        "rules": "By expending one charge, the wearer can summon a spectral guardian that fights alongside them for 1 minute. The guardian deals 150% weapon damage and has a 20% chance to stagger an enemy with each successful hit. The guardian reverts to its ethereal form after the duration ends."
      }
    ],
    "levelRequirementReason": "Only those of noble blood, typically reaching level 5 or higher, can harness the power of the Corvinarus.",
    "vendorReason": "The relics and artifacts of ancient nobility are often preserved by the fractured atrium, a repository of lost knowledge and forgotten treasures.",
    "shippingDetail": "Due to its fragile nature, the Shadow Harness is shipped via Shy Guy Smugglers' secure, armored couriers who ensure safe delivery in less than three days.",
    "usage": {
      "activation": "Reaction or bonus action for phasing; expend one charge for guardianship",
      "duration": "Instantaneous phasing; spectral guardian lasts 1 minute per charge used",
      "endsWhen": "Phasing ends when the wearer is hit by an attack, and guardians revert to ethereal form after their duration expires",
      "charges": "5 charges, recharged after a long rest"
    },
    "priceReason": "The Shadow Harness of the Corvinarus Lineage offers significant offensive and defensive capabilities at an appropriate level for noble characters.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:01:41.217460+00:00",
    "aiReviewedAt": "2026-07-22T06:01:41.217460+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_shadow_mirror": {
    "id": "fractured_atrium_shadow_mirror",
    "name": "Shadow Mirror of the Deep Atrium",
    "description": "The Shadow Mirror of the Deep Atrium is a fractured mirror, its surface etched with runes that whisper secrets of the shadow realm. When activated, it distorts foes into spectral duplicates who mimic their original movements, and reveals hidden truths by reflecting the true nature of those around you. Crafted from ancient necrotic glass and bound to the will of a forgotten spirit, this mirror grants +20% resistance to psychic and necrotic damage.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Spectral Duplication",
      "Truth Echo"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Spectral Duplication",
        "rules": "When activated as an action, the Shadow Mirror creates spectral duplicates of a target creature within 30 feet for 3 rounds. These duplicates mimic the target's movements and actions. The duplicates have half the target's hit points and are immune to psychic damage, but they take 5d6 necrotic damage from their own attacks. They end when destroyed or after 3 turns."
      },
      {
        "title": "Truth Echo",
        "rules": "Activating the mirror as a bonus action reveals hidden truths about creatures within 60 feet for 1 minute, including their alignment and any concealed abilities. This effect has no save DC but is limited to once per long rest."
      }
    ],
    "levelRequirementReason": "Requires at least level 5 to wield the necromantic power of the mirror.",
    "vendorReason": "The Fractured Atrium specializes in items from ancient realms, including this mirror crafted by forgotten necromancers.",
    "shippingDetail": "Shipped via shadowy couriers who deliver the mirror within a week of purchase.",
    "usage": {
      "activation": "Action or Bonus Action to activate either effect.",
      "duration": "3 turns for Spectral Duplication; 1 minute for Truth Echo.",
      "endsWhen": "The duplicates are destroyed or after their duration ends; ends when the mirror is used again.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare crafting and potent effects in combat.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:41:01.789284+00:00",
    "aiReviewedAt": "2026-07-22T19:41:01.789284+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_shadow_realm_key": {
    "id": "fractured_atrium_shadow_realm_key",
    "name": "Shadow Realm Key of Corvinarus",
    "description": "The Shadow Realm Key of Corvinarus is a dark, gnarled key forged from the molten heart of the fractured Atrium mirror. Its surface is etched with ancient runes that glow faintly in the dim light, and it hums ominously when held. This cursed artifact opens a portal to the Shadowfell, allowing passage into the realm of nightmares and decay. Once opened, the key grants the wielder an eerie shadow clone to aid them in necromantic rituals or combat within the void.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Shadow Clone",
      "Portal Opening"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shadow Clone",
        "rules": "When activated, this key creates a perfect shadow clone of the wielder. The clone can act independently for up to 1 minute and has half the wielder's hit points but full spellcasting ability. The clone is invisible until it moves or attacks."
      },
      {
        "title": "Portal Opening",
        "rules": "The key opens a stable portal to the Shadowfell that lasts for 60 seconds, allowing passage between realms. Any creature that steps through this portal must succeed on a DC 15 Wisdom saving throw or be permanently lost in the Shadowfell."
      }
    ],
    "levelRequirementReason": "The key's dark magic requires a minimum of three levels to channel its malevolent power.",
    "vendorReason": "As guardians of arcane relics, the Fractured Atrium is entrusted with items that open gateways to other dimensions.",
    "shippingDetail": "The key must be shipped via the Void Drifter Relay due to its unstable nature and potential to summon shadowy creatures during transit.",
    "usage": {
      "activation": "Action",
      "duration": "60 seconds or until dismissed",
      "endsWhen": "The portal collapses, clone is destroyed, or wielder dismisses it early",
      "charges": "Unlimited"
    },
    "priceReason": "This key's rarity and the inherent risks of using its powers justify a price slightly below its market value.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:01:59.149863+00:00",
    "aiReviewedAt": "2026-07-22T06:01:59.149863+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_shadow_realm_tome": {
    "id": "fractured_atrium_shadow_realm_tome",
    "name": "Shadow Realm Tome of the Fractured",
    "description": "The Shadow Realm Tome of the Fractured is a tattered leather-bound book with ink that glows faintly in dim light. It whispers dark secrets from the Shadowfell, and when opened within its bounds, it allows you to summon a spectral echo of your last spell cast. This spectral mimic can be used as a mirror or an ally in shadowy combat, but only in places where shadows dance freely. Requires 20 seconds between uses.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% Spellcasting Speed",
      "Mirror Last Spell"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Mirror Last Spell",
        "rules": "As a bonus action, you may summon a spectral echo that mirrors your last spell cast. This spectral mimic can be used to replicate the effects of the last spell within the next round (10 seconds). It has no save DC and requires the use of an action on your part."
      },
      {
        "title": "+15% Spellcasting Speed",
        "rules": "While holding this tome, you gain a +15% bonus to all spellcasting speed checks. This effect is permanent as long as you hold the tome."
      }
    ],
    "levelRequirementReason": "This item requires a certain degree of arcane knowledge and discipline not available until at least third level.",
    "vendorReason": "The vendors at Fractured Atrium have a unique access to ancient and dark artifacts from the Shadowfell, making this tome an expected offering.",
    "shippingDetail": "The book is sent in a sealed case that only opens within shadowy areas; delays are common as it requires darkness for safe delivery.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "After the spectral echo completes its effect or you cast another spell",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the rare material and dark lore required to craft this tome, as well as its unique utility in shadowy combat.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:01:53.625911+00:00",
    "aiReviewedAt": "2026-07-22T06:01:53.625911+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_shadow_relic": {
    "id": "fractured_atrium_shadow_relic",
    "name": "Shadowbound Echo",
    "description": "Shadowbound Echo is a shard of the Deep Mirror’s shattered soul, a fragment that whispers forgotten necromantic spells. Crafted from the heartwood of ancient yew trees and imbued with dark ritual power, it amplifies the wielder's necromancy skill by +10% per level. This relic suits those of the Corvinarus lineage, whose affinity for the dead is legend. Summon an undead ally through its Shadow Pact ability, temporarily binding a spectral creature to your side for 30 seconds on a successful concentration check.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% necromancy skill gain per level",
      "Shadow Pact: summon 1 undead ally (30 sec cooldown)"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Necromancy Skill Enhancement",
        "rules": "Grant +10% to the user's necromancy skill proficiency for each character level. This bonus stacks with other similar abilities."
      },
      {
        "title": "Shadow Pact",
        "rules": "Activates as a bonus action, lasts 30 seconds on a successful concentration check. Summons an undead ally within 60 feet that can be commanded by the user. The summoned creature is a CR2 undead with 40 hit points and has the ability to take one action each turn. The effect ends if you lose your concentration or if the summoned creature takes any damage."
      }
    ],
    "levelRequirementReason": "This relic assists beginners in necromancy, allowing them to experiment with dark rituals.",
    "vendorReason": "Fractured Atrium specializes in relics recovered from the Deep Mirror’s fractured soul, making Shadowbound Echo a fitting addition to their inventory.",
    "shippingDetail": "Ships via Lakitu Drones' express courier service within three days of order placement.",
    "usage": {
      "activation": "Bonus action for the Shadow Pact ability.",
      "duration": "30 seconds or until concentration is lost or the summoned creature takes damage.",
      "endsWhen": "Concentration is lost, summoned undead ally takes damage, or you lose your connection to it.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price for a rare relic that enhances necromancy skill and provides temporary undead summoning.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:02:50.796200+00:00",
    "aiReviewedAt": "2026-07-22T06:02:50.796200+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_shadow_requiem": {
    "id": "fractured_atrium_shadow_requiem",
    "name": "Shadow Requiem",
    "description": "Shadow Requiem is a cursed flute crafted from the bleached bones of ancient necromancers, its notes a macabre symphony that can disrupt and manipulate the very shadows around you. Struck by this instrument, the air itself seems to mourn with spectral echoes that rend the battlefield, amplifying necrotic energies and sending undead enemies into an eerie frenzy. It is said that playing it too often can summon the very darkness from which it was forged.",
    "price": 1000,
    "icon": "🎶",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Spectral Echoes",
      "Necrotic Amplification"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spectral Echoes",
        "rules": "When played, Shadow Requiem summons three spectral echoes of the dead within a 30-foot radius for 10 seconds. These echoes deal necrotic damage (6d6) to all creatures in their area and can be targeted by dispel magic or similar effects."
      },
      {
        "title": "Necrotic Amplification",
        "rules": "Enemies within 30 feet of the player take an additional 25% necrotic damage on attacks and spells cast during this turn. This effect lasts until the start of your next turn, after which it is reset."
      }
    ],
    "levelRequirementReason": "Beginners can already master its dark melodies to disrupt foes without being overpowered.",
    "vendorReason": "The shopkeepers of Fractured Atrium are known for their wide array of unusual and cursed items, making Shadow Requiem a fitting addition.",
    "shippingDetail": "Due to its cursed nature, the item requires special handling. Shipping is delayed by one day, and an additional cautionary message accompanies it.",
    "usage": {
      "activation": "Playing the instrument as a bonus action",
      "duration": "10 seconds per play",
      "endsWhen": "The effect ends when the duration expires or dispelled",
      "charges": "Unlimited"
    },
    "priceReason": "Shadow Requiem is priced at a moderate cost due to its unique properties and the risk involved in using it.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T06:02:48.510779+00:00",
    "aiReviewedAt": "2026-07-22T06:02:48.510779+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_shadow_ritual_scroll": {
    "id": "fractured_atrium_shadow_ritual_scroll",
    "name": "Shadow Ritual Scroll",
    "description": "The Shadow Ritual Scroll is a brittle parchment inscribed with ancient necromantic sigils, its ink glowing faintly in the dark. Unfolding it creates a swirling rift that beckons spectral guardians from the realm of shadows. These guardians are ephemeral yet potent, dealing damage equal to your own attacks and granting you a +20% dodge chance for 45 seconds. The scroll's power is drawn from the very fabric of the Atrium, making it rare but not too powerful in the wrong hands.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Summons spectral guardians",
      "Enhances user’s dodge chance"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Spectral Guardians",
        "rules": "Activates as a bonus action. Summons one spectral guardian for 60 seconds. The guardian deals damage equal to your own attack rolls per hit. Saving throw DC is 13. This effect can only be used once every long rest."
      },
      {
        "title": "Dodge Chance Boost",
        "rules": "+20% dodge chance to the user for 45 seconds. Ends when the user takes damage, expends a charge, or completes a short or long rest."
      }
    ],
    "levelRequirementReason": "Requires at least level 3 to control the spectral guardians without risk of losing concentration.",
    "vendorReason": "The Atrium is known for its necromantic artifacts, and this scroll was crafted there by skilled artisans.",
    "shippingDetail": "Delivered swiftly via the Atrium’s secure courier service, ensuring safe arrival.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "60 seconds for guardians; 45 seconds for dodge chance boost",
      "endsWhen": "On damage taken, completing a short or long rest, or expending charges",
      "charges": "One charge per scroll"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare crafting and controlled use in combat.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:02:24.359435+00:00",
    "aiReviewedAt": "2026-07-22T06:02:24.359435+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_shadow_satchel": {
    "id": "fractured_atrium_shadow_satchel",
    "name": "Shadow Satchel",
    "description": "The Shadow Satchel, a pocket-sized pouch of dark leather, seems to absorb the very shadows it touches. When unzipped, it spills forth a shimmering array of necromantic artifacts—each one a fragment from forgotten tombs and shadowy vaults. The satchel draws its power directly from the user's own health, consuming 10% of their current hit points to unleash its dark magic. Perfect for those who delve into the macabre, it is a tool both feared and revered by grave-diggers and necromancers alike.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Necrotic Artifact",
      "Health Drain Activation"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Necrotic Artifact",
        "rules": "When activated as an action, the satchel grants a random necromantic ability to the user. This effect is instantaneous and lasts until the end of the user's next turn."
      },
      {
        "title": "Health Drain Activation",
        "rules": "The Shadow Satchel requires the user to consume 10% of their current hit points upon activation. If this condition cannot be met, the satchel remains dormant until the user regenerates sufficient health."
      }
    ],
    "levelRequirementReason": "Only those with some experience in necromancy can safely wield such a volatile and dangerous item.",
    "vendorReason": "The vendors at Fractured Atrium specialize in exotic and rare artifacts, making this shadowy pouch an ideal addition to their inventory.",
    "shippingDetail": "Due to the fragile nature of necromantic items, they are shipped under special conditions using Pipe Express's secure courier service.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends at the start of the user's next turn or if their hit points drop below the consumed amount.",
      "charges": "Unlimited, but requires a full short rest to regain any lost health."
    },
    "priceReason": "Balanced for its necrotic abilities and health drain, this item is priced at 1000 XP, reflecting both its rarity and potential danger.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:02:49.187437+00:00",
    "aiReviewedAt": "2026-07-22T06:02:49.187437+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_shadow_scarf": {
    "id": "fractured_atrium_shadow_scarf",
    "name": "Shadow Scarf of the Unseen",
    "description": "The Shadow Scarf of the Unseen is a wraith-woven scarf that whispers of forgotten tombs and necromantic rites. Its threads shimmer faintly in dim light, blending its wearer into the shadows. When worn within a darkened crypt or shadowy alley, it grants near-perfect invisibility, making you nearly undetectable by even the most perceptive eyes. It also amplifies your stealth evasion, reducing the chance of detection by 50% when using Stealth checks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility in Shadows",
      "Stealth Detection Evasion"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Invisibility in Shadows",
        "rules": "While within a shadowed or dimly lit area, the wearer becomes nearly invisible. This effect grants a +5 bonus to Dexterity (Stealth) checks and reduces the chance of being detected by any passive Perception check by 50%. The effect lasts for 1 minute per level of the user."
      },
      {
        "title": "Stealth Detection Evasion",
        "rules": "For 30 seconds after an unsuccessful Stealth check, the wearer's chances of being detected by any passive Perception check are reduced by 50%. This effect can be used once per short or long rest and requires a successful DC 15 Dexterity (Stealth) check."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Stealth to fully utilize the scarf's stealth benefits.",
    "vendorReason": "The necromancers of Fractured Atrium have a deep connection with shadow magic, making them expert artisans of items like this scarf.",
    "shippingDetail": "Ships via special night courier drones, ensuring the scarf arrives in perfect condition.",
    "usage": {
      "activation": "Passive effect while within a dimly lit or shadowed area. Can be activated for a Stealth check to gain the evasion benefit.",
      "duration": "1 minute per level (upgradable with higher-level spells)",
      "endsWhen": "The effect ends when the wearer leaves a dimly lit or shadowed area, or after 30 seconds of failed Stealth checks.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced price considering its stealth and invisibility benefits in specific environments.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:02:43.411582+00:00",
    "aiReviewedAt": "2026-07-22T06:02:43.411582+00:00",
    "aiReviewVersion": 1
  }
};
