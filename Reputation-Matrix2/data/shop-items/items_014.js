// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_014 = {
  "feywild_fated_fey_ward": {
    "id": "feywild_fated_fey_ward",
    "name": "Fated Fey Ward",
    "description": "The Fated Fey Ward is a delicate silver amulet adorned with intricate Feywild flora. Crafted by The Cosmic Jesters and the Skull King’s Cartographer, it grants immunity to fey magic when worn and enhances all damage from attacks by +2d6. However, using it during a Skaven siege triggers an ancient curse, and it can only be attuned in the Fated Place, a hidden realm of shifting mists and glowing flora.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Fey Magic Immunity",
      "Enhanced Damage"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Fey Magic Immunity",
        "rules": "While attuned to the Fated Fey Ward, you are immune to all magical effects from fey creatures and their spells. This benefit lasts until removed by a Remove Curse spell or similar effect."
      },
      {
        "title": "Enhanced Damage",
        "rules": "When you deal damage with a weapon or spell attack, you add 2d6 to the roll. This effect persists for 1 hour per level of attunement. You can end it early by removing the amulet."
      }
    ],
    "levelRequirementReason": "The intricate magic and lore behind this item demand a minimum character level to properly understand its purpose.",
    "vendorReason": "As a Feywild vendor, Feywild can offer the Fated Fey Ward as it is deeply connected with the realm’s mystical creatures.",
    "shippingDetail": "The item may take an additional week due to the unpredictable nature of the Fated Place and its influence on the postal system.",
    "usage": {
      "activation": "Passive effect once attuned; enhanced damage is active during each attack roll until removed.",
      "duration": "1 hour per level of attunement",
      "endsWhen": "Removed by a Remove Curse spell or similar effect, or after 8 hours if not actively used in combat.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's rarity and the special attunement process make it reasonably priced at 1000 XP.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T05:06:34.918562+00:00",
    "aiReviewedAt": "2026-07-22T05:06:34.918562+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fated_place_connector": {
    "id": "feywild_fated_place_connector",
    "name": "Spirit Walk Courier Charm",
    "description": "The Spirit Walk Courier Charm is a delicate silver pendant adorned with swirling patterns of Feywild flora. It allows the wearer to travel between the realms of the Feywild and Fated Place, disrupting the natural flow of time for a brief moment. Each use causes a fleeting loss of sanity, but grants the user temporary immunity to temporal anomalies. The charm's origins lie in the hands of the DK Crew, who crafted it from ancient fey metals.",
    "price": 1000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Teleportation Between Realms",
      "Temporal Immunity"
    ],
    "vendor": "feywild",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Teleportation Between Realms",
        "rules": "As an action, the user can activate the charm to teleport between the Feywild and Fated Place. The duration is instantaneous, but the use causes 1d4 points of sanity loss. This effect ends when the user reaches their destination or after a successful DC 15 Wisdom saving throw."
      },
      {
        "title": "Temporal Immunity",
        "rules": "The user gains temporary immunity to time loops and temporal effects for 1 hour per use. This benefit lasts until the start of the user's next turn, upon which it expires or is ended by an attack against them."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to ensure players are well-versed in time-based magic.",
    "vendorReason": "The charm's origins and power make it a natural fit for the Feywild vendor.",
    "shippingDetail": "Delivery via an ethereal courier, ensuring safe passage between realms.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Upon arrival or successful saving throw",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a rare, well-crafted item that requires significant effort to craft.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T05:06:32.605748+00:00",
    "aiReviewedAt": "2026-07-22T05:06:32.605748+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fated_place_item": {
    "id": "feywild_fated_place_item",
    "name": "Skullcrusher Gauntlet",
    "description": "The Skullcrusher Gauntlet, forged from the bones of forgotten warriors in the heart of the Fated Place, amplifies your melee strikes by a fearsome 50%, but at the cost of your mind's stability. Every five rounds, you feel an eerie pull towards the war zones hidden within the Fated Place, requiring a DC 16 Wisdom saving throw or take a -2 penalty to all ability checks and saves until the end of your next long rest.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦴",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Enhanced Melee Damage",
      "Mental Instability"
    ],
    "vendor": "feywild",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Enhanced Melee Damage",
        "rules": "When you use an action or bonus action to make a melee attack with the gauntlet, your damage increases by 50% for 3 rounds. This effect can be used once per long rest."
      },
      {
        "title": "Mental Instability",
        "rules": "Every five rounds, you are drawn towards the Fated Place's hidden war zones. You must succeed on a DC 16 Wisdom saving throw or take a -2 penalty to all ability checks and saves until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "The gauntlet requires a level 10 character due to its potent magical properties and the mental toll it imposes.",
    "vendorReason": "The Feywild vendors are well-known for their access to otherworldly artifacts like the Skullcrusher Gauntlet, which they trade with rare and powerful items.",
    "shippingDetail": "Ships via a Rakasha spirit courier who delivers it within one week of purchase.",
    "usage": {
      "activation": "Action or bonus action to make a melee attack.",
      "duration": "3 rounds after each activation.",
      "endsWhen": "Ends when the gauntlet is removed, and the duration expires.",
      "charges": "One use per long rest."
    },
    "priceReason": "The gauntlet's price reflects its powerful abilities, rare forging process, and the mental toll it imposes on the wearer.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T05:07:02.386059+00:00",
    "aiReviewedAt": "2026-07-22T05:07:02.386059+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_blood": {
    "id": "feywild_fey_blood",
    "name": "Blood of the Court’s Echo",
    "description": "A vial containing a crimson drop of ancient fey essence, Blood of the Court’s Echo amplifies wild magic in unpredictable ways when consumed. This potent draught grants its drinker a chance to trigger time loop effects on foes, potentially causing them to repeat their actions or become ensnared by the Feywild's whims. However, the user risks becoming a vessel for the fey's will, losing track of time and speaking in their arcane tongue.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Amplifies wild magic damage",
      "Grants chance to trigger time loop effects on enemies"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Wild Magic Amplification",
        "rules": "The user gains a +50% bonus to wild magic spell attack rolls and damage for 10 minutes. This effect ends if the user casts a cantrip or attacks with a weapon."
      },
      {
        "title": "Time Loop Effects",
        "rules": "Once per short rest, the user can cause an enemy within 30 feet to repeat their last action on their next turn as a reaction. The target must make a Wisdom saving throw (DC 14) or be affected for up to one minute."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to harness the unpredictable magic and avoid immediate danger.",
    "vendorReason": "The vials are crafted by Feywild alchemists who specialize in extracting essences from the realm's ancient trees.",
    "shippingDetail": "Due to its fragile nature, this item is shipped using Koopa Postal’s reinforced courier service, ensuring safe delivery within a week.",
    "usage": {
      "activation": "Consume the vial as an action.",
      "duration": "10 minutes or until used in combat.",
      "endsWhen": "The effect ends if the user casts a cantrip or attacks with a weapon during its duration.",
      "charges": "Unlimited, but only one effect per short rest."
    },
    "priceReason": "Balanced as an expensive yet risky item that provides potent magic amplification and chaotic effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:07:27.868026+00:00",
    "aiReviewedAt": "2026-07-22T05:07:27.868026+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_breath": {
    "id": "feywild_fey_breath",
    "name": "Fey Breath",
    "description": "Fey Breath is a vial sealed with enchanted air plucked directly from the Feywild, shimmering with iridescent hues. Its contents whisper of ancient magic and the wilds beyond. Inhaling it grants you a fleeting connection to the fey realms—your wild magic surges for one turn, while exhaling it can disrupt an enemy's next action, leaving them disoriented. Rumors say those who use Fey Breath may hear echoes of the Fey Courts that predict both fortune and misfortune.",
    "price": 1000,
    "icon": "🌿",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Wild Magic Surge",
      "Disrupt Enemy Action"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wild Magic Surge",
        "rules": "On activation as a bonus action, inhale the contents to gain +2d6 wild magic damage for one round. This effect does not require an attack roll and has no saving throw."
      },
      {
        "title": "Disrupt Enemy Action",
        "rules": "Exhale the vial as a bonus action to disrupt one enemy's next action, forcing them to use their reaction on something other than your Wild Magic Surge. This effect ends if the target is incapacitated or if you use Fey Breath again."
      }
    ],
    "levelRequirementReason": "Feywild creatures and those attuned to nature can harness the vial's magic with ease, making it accessible even at level one.",
    "vendorReason": "The Feywild is home to these magical artifacts, as its inhabitants frequently use them for rituals and spells.",
    "shippingDetail": "Delivered swiftly by Lakitu drones, ensuring the vial remains potent upon arrival.",
    "usage": {
      "activation": "Bonus action (either inhaling or exhaling)",
      "duration": "Instantaneous (Wild Magic Surge) / One round (Disrupt Enemy Action)",
      "endsWhen": "Activation ends; Exhale effect ends if target is incapacitated",
      "charges": "3 charges, recharges after a long rest"
    },
    "priceReason": "Feywild Breath's rarity and the magic required to extract it from the Feywild justify its price.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T19:28:51.106539+00:00",
    "aiReviewedAt": "2026-07-22T19:28:51.106539+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_court_bottle": {
    "id": "feywild_fey_court_bottle",
    "name": "Fey Court Bottle",
    "description": "A frosted glass vial, its surface etched with ancient runes that shimmer faintly under moonlight, contains a swirling essence of a fey court spirit. Sipping this bottle grants you temporary control over one creature within a 10-meter radius for the duration of your next long rest, but it leaves them disoriented and confused until then. The essence is a fragile conduit, crafted from the heartwood of an ancient fey tree in the Feywild, ensuring its effects are both potent and fleeting.",
    "price": 1000,
    "icon": "🍸",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Control over one creature",
      "Disorientation to target"
    ],
    "vendor": "feywild",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Control Over Creature",
        "rules": "As a bonus action, you can attempt to exert control over one willing or unaware creature within 10 meters. The target must succeed on a Wisdom saving throw (DC 14) or be unaffected. You gain advantage on attack rolls and ability checks against the target for the duration of your next long rest. The effect ends if the target is subjected to another form of control, such as through magic."
      },
      {
        "title": "Disorientation",
        "rules": "The target creature becomes disoriented until you complete a long rest. They have disadvantage on all ability checks and attack rolls while under this effect. This condition persists for the duration of your next long rest unless cured by a successful save or dispelled by magic."
      }
    ],
    "levelRequirementReason": "First-level spellcasters can access this item, as its effects are similar in complexity to spells like Suggestion.",
    "vendorReason": "The Feywild is the only realm where such artifacts are created and sold by their native fey creatures.",
    "shippingDetail": "Due to its fragile nature, this item requires special handling and arrives via Pipe Express's express courier service.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the end of your next long rest",
      "endsWhen": "Target successfully saves or another form of control is applied",
      "charges": "Unlimited"
    },
    "priceReason": "This item offers powerful but limited control over a creature, making it valuable for first-level spellcasters and adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:28:52.331988+00:00",
    "aiReviewedAt": "2026-07-22T19:28:52.331988+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_court_bow": {
    "id": "feywild_fey_court_bow",
    "name": "Court of Thorns Bow",
    "description": "Crafted from the twisted essence of a Fey court long banished, the Court of Thorns Bow weaves reality into its own cruel dance. Each arrow fired is a declaration that the laws of nature are no match for the bow's wild magic; it scatters a 10-foot-radius burst of chaotic rifts that can either trap foes in time loops or reveal hidden paths within the battlefield, all while dealing 2d8 damage plus wild magic surge upon impact.",
    "category": "equipment",
    "price": 3500,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Time Loop Trap",
      "Rift and Reveal"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Time Loop Trap",
        "rules": "When an arrow strikes a target, there is a 50% chance that the target is pulled into a random time loop for up to 1d4 rounds. The target must make a DC 15 Dexterity saving throw or be trapped in the loop until it successfully escapes. The trap ends immediately if the target deals damage within its duration."
      },
      {
        "title": "Rift and Reveal",
        "rules": "The bow fires an arrow that creates a 10-foot-radius rift centered on the target, revealing hidden paths or secret doors within a 30-foot radius for the duration of the fight. The effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Requires at least 6th level to wield effectively due to its arcane and chaotic nature.",
    "vendorReason": "Feywild, a master of all things Fey, is the only vendor capable of dealing with such an item from their realm.",
    "shippingDetail": "Due to its magical nature, the bow must be shipped via Koopa Postal's enchanted courier service, which ensures safe arrival but adds a delay of one day.",
    "usage": {
      "activation": "Action or bonus action to fire an arrow.",
      "duration": "Instantaneous effect; time loops last up to 1d4 rounds, while the reveal effect lasts for the duration of the fight.",
      "endsWhen": "The effects end immediately if the target deals damage within their duration or at the start of the next turn after the effect is triggered.",
      "charges": "Recharges on a long rest."
    },
    "priceReason": "Reflects the bow's unique and powerful abilities, as well as its rare origin from the Feywild realm.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T05:07:31.706875+00:00",
    "aiReviewedAt": "2026-07-22T05:07:31.706875+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_court_bribe": {
    "id": "feywild_fey_court_bribe",
    "name": "Courtly Gaze of the Sycophant",
    "description": "The Courtly Gaze of the Sycophant is a shimmering pendant, its surface etched with intricate Fey runes that catch and reflect light like a prism. This delicate piece grants temporary immunity to Fey court charms for 10 minutes, allowing one to sidestep their whims. However, wearing it may draw unwanted attention from noble patrons, compelling you to engage in social interactions or risk the charm's effects lingering beyond the intended duration.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Immunity to Fey Charms",
      "Advantage on Social Checks"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Fey Charms",
        "rules": "This effect grants temporary immunity to all charm and compulsion effects from Fey courts for a duration of 10 minutes. The wearer is immune to these effects as long as they are wearing the pendant. If used in a looped event, such as a continuous social gathering, the charm may persist beyond this normal duration."
      },
      {
        "title": "Advantage on Social Checks",
        "rules": "While wearing this pendant, you gain advantage on any Charisma (Deception or Persuasion) checks made to influence Fey courts. This effect lasts until the end of your next short or long rest."
      }
    ],
    "levelRequirementReason": "The Courtly Gaze requires only a minimal character level, as it is designed for adventurers just beginning their journey into the Feywild.",
    "vendorReason": "Feywild, being native to the Feywild and familiar with its inhabitants, offers this item to travelers seeking temporary protection from the whims of Fey courts.",
    "shippingDetail": "Ships via Koopa Postal's Express Lane, ensuring swift delivery even in the most remote parts of the Feywild.",
    "usage": {
      "activation": "This effect is active as long as you are wearing the pendant. No activation required.",
      "duration": "10 minutes",
      "endsWhen": "The effect ends when you remove the pendant or if it is destroyed, whichever happens first.",
      "charges": "Unlimited"
    },
    "priceReason": "The Courtly Gaze of the Sycophant is priced at 1000 XP to reflect its utility in navigating Feywild social dynamics without being overly powerful.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T05:07:59.152653+00:00",
    "aiReviewedAt": "2026-07-22T05:07:59.152653+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_court_charm": {
    "id": "feywild_fey_court_charm",
    "name": "Fey Court Charm",
    "description": "The Fey Court Charm is a delicate, silver pendant adorned with swirling fey runes that hum in tune with the court's whimsical magic. It grants wearers access to exclusive courtly events and temporary alliances with the capricious lords of the Feywild. Use it during a court trial or punishment, and you'll find yourself caught in an endless time-loop, reliving the same moment over and over until the charm is removed by a fey lord's will.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Courtly Charm",
      "Temporary Fey Ally"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Courtly Charm",
        "rules": "Activates as an action. Grants +2 to Charisma checks during courtly events and performances. This effect lasts until the end of your next turn."
      },
      {
        "title": "Temporary Fey Ally",
        "rules": "Activates as a bonus action, requiring you to make a successful Charisma (Persuasion) check against DC 15. On a success, you summon a minor fey ally who provides advice or assistance for one round. This effect ends if the fey leaves your vicinity."
      }
    ],
    "levelRequirementReason": "The charm's unpredictable magic and courtly etiquette require some experience before wielding it.",
    "vendorReason": "Feywild, being a merchant of the Feywild, specializes in items that grant access to their realm.",
    "shippingDetail": "Ships via Koopa's enchanted mail pouches, delivered directly to your door within three days.",
    "usage": {
      "activation": "Courtly Charm: As an action. Temporary Fey Ally: As a bonus action.",
      "duration": "Courtly Charm: Until the end of your next turn. Temporary Fey Ally: For one round.",
      "endsWhen": "Courtly Charm: Ends at the start of your next turn. Temporary Fey Ally: When the fey leaves your vicinity or the effect is dispelled by a fey lord.",
      "charges": "Unlimited, recharged upon removal from the realm."
    },
    "priceReason": "The charm's unpredictable magic and courtly etiquette require some experience before wielding it, making it moderately priced for those who can afford its risks.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T05:08:29.874240+00:00",
    "aiReviewedAt": "2026-07-22T05:08:29.874240+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_court_cloak": {
    "id": "feywild_fey_court_cloak",
    "name": "Courtly Cloak of the Whispering Veil",
    "description": "The Courtly Cloak of the Whispering Veil is woven from the ephemeral threads of the Feywild, shimmering with the light of forgotten dreams. This enchanted cloak grants its wearer invisibility to all senses for one round, blending them into the very fabric of the fey realm. With a whispered command, you can mimic the voice or movements of any nearby Fey creature, leaving even the most perceptive observers confused and deceived.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Voice Mimicry"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "The wearer becomes invisible to all senses for one round. This effect is not detectable by any means, including divination magic, until the end of your turn."
      },
      {
        "title": "Voice Mimicry",
        "rules": "By uttering a command word, you can mimic the voice or movements of a nearby Fey creature. This lasts for one round and requires a successful DC 14 Deception check to be convincing. You are otherwise considered to have no voice or movement in your mimicry."
      }
    ],
    "levelRequirementReason": "Requires a basic understanding of the Feywild's magic to wield this cloak effectively.",
    "vendorReason": "As the cloak originates from the Feywild, it is only sold by vendors with deep ties to the fey realms.",
    "shippingDetail": "The cloak arrives wrapped in protective amulets to preserve its magic during transit.",
    "usage": {
      "activation": "Reaction or bonus action",
      "duration": "One round per effect",
      "endsWhen": "At the end of your next turn, exhausted, or when dispelled by a successful saving throw against a DC 14 Deception check",
      "charges": "Unlimited uses"
    },
    "priceReason": "The cloak's rarity and its unique combination of invisibility and voice mimicry justify this price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:07:54.110978+00:00",
    "aiReviewedAt": "2026-07-22T05:07:54.110978+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_court_crown": {
    "id": "feywild_fey_court_crown",
    "name": "Fey Court Crown",
    "description": "The Fey Court Crown, a regal tiara crafted from the laughter of forgotten Feywild courts, grants its wearer control over time loops within a 50-foot radius for as long as it is worn. Its essence whispers secrets of the wilds and bends reality to your will, but beware: any non-Fey creature venturing into this temporal distortion risks a 1d6 confusion penalty, muddling their thoughts for an hour. This crown must be worn continuously or else its effects dissolve like mist in sunlight.",
    "category": "equipment",
    "price": 1000,
    "icon": "👑",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Temporal Control",
      "Feywild Confusion"
    ],
    "vendor": "feywild",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporal Control",
        "rules": "While wearing the crown, you can exert control over time loops within a 50-foot radius. As an action, you can attempt to manipulate these loops, causing them to warp or stabilize for up to 1 minute. This effect is lost if you remove the crown or fall unconscious."
      },
      {
        "title": "Feywild Confusion",
        "rules": "Any non-Feywild creature entering the area of temporal control must succeed on a DC 15 Wisdom saving throw or suffer a 1d6 confusion penalty for 1 hour. This effect is not cumulative, and creatures can attempt to save again if they leave and re-enter the area."
      }
    ],
    "levelRequirementReason": "The crown's power demands a certain understanding of both reality and the wilds.",
    "vendorReason": "Feywild, a guardian of all things Fey, is entrusted with items that hold secrets from their domain.",
    "shippingDetail": "Ships via a spectral courier who delivers the crown directly to your door, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Action or Reaction (to attempt control over time loops)",
      "duration": "Up to 1 minute per activation",
      "endsWhen": "Lost if you remove the crown or fall unconscious",
      "charges": "Unlimited"
    },
    "priceReason": "The crown's rare essence and unique properties justify its fair value in XP.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T05:08:24.914348+00:00",
    "aiReviewedAt": "2026-07-22T05:08:24.914348+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_court_echo": {
    "id": "feywild_fey_court_echo",
    "name": "Fey Court Echo",
    "description": "The Fey Court Echo is a delicate amulet crafted from shimmering, iridescent glass that captures whispers of forgotten fey courts. When worn, it pulses with untold laughter, allowing the wearer to momentarily mimic the voice and mannerisms of a courtier so precisely that even the most astute observers are deceived. The mimicry can trigger rare and potent fey illusions or cause time to briefly pause, creating an ethereal experience of enchantment and wonder.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎭",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Court Mimicry",
      "Illusion Trigger"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Court Mimicry",
        "rules": "The wearer assumes the role of a courtier for 1 minute, speaking and behaving as one. The mimicry is so convincing that it can trigger fey illusions or cause time to pause temporarily, creating an illusionary experience. This effect has no save DC but can be disrupted by any action that would otherwise interrupt concentration on an illusion."
      },
      {
        "title": "Illusion Trigger",
        "rules": "Randomly causes one of the following effects: a time loop (time briefly repeats), an illusionary escape (a creature is temporarily transported to a different location), or charm (a target is charmed for 1 minute). The effect has no save DC and can only occur once per day."
      }
    ],
    "levelRequirementReason": "The amulet's complex enchantments require at least 3rd level to cast effectively.",
    "vendorReason": "Feywild, the source of all fey magic, is the only place where such a delicate and powerful artifact can be found and crafted.",
    "shippingDetail": "The amulet is delivered swiftly by Lakitu Drones, ensuring it reaches its destination in perfect condition.",
    "usage": {
      "activation": "Standard action to activate the mimicry effect; can be used once per day for illusion triggering.",
      "duration": "1 minute or until interrupted",
      "endsWhen": "The wearer's concentration is broken by any means, or upon reaching the duration limit",
      "charges": "Uses 1 charge each time the effect is activated"
    },
    "priceReason": "Crafted from rare fey materials and imbued with potent enchantments, this amulet's price reflects its intricate construction and magical properties.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-22T05:08:35.683877+00:00",
    "aiReviewedAt": "2026-07-22T05:08:35.683877+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_court_essence": {
    "id": "feywild_fey_court_essence",
    "name": "Essence of the Court’s Whisper",
    "description": "This vial holds a fragment of the Feywild’s essence, captured from whispers that dance between realms. When uncorked, it allows the wielder to mimic the voice of a Court deity for three rounds, granting immunity to fear and confusion—a boon in the face of fiendish foes or treacherous alliances. However, this mimicry comes at a cost: the caster may inadvertently speak in riddles that leave even their allies bewildered.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Immunity to Fear and Confusion",
      "May Cause Riddling Speech"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Fear and Confusion",
        "rules": "The wielder gains immunity to fear and confusion effects for a duration of three rounds. This effect is active upon activation and ends when the duration expires or if the vial is destroyed."
      },
      {
        "title": "May Cause Riddling Speech",
        "rules": "For one round after activation, there is a 50% chance that any command given by the wielder will be reversed. Additionally, speech may become riddled with cryptic phrases and puzzles, making coherent communication difficult."
      }
    ],
    "levelRequirementReason": "The vial requires only a basic understanding of Fey magic to activate.",
    "vendorReason": "Feywild is the heart of the Fey Court and naturally handles items that draw from its essence.",
    "shippingDetail": "The vial must be shipped in a padded, sealed container to prevent accidental activation during transit.",
    "usage": {
      "activation": "Action (requires uncorking the vial)",
      "duration": "3 rounds",
      "endsWhen": "Duration ends or vial is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The essence is rare, but its effects are not overly powerful to justify a higher cost.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:08:38.095293+00:00",
    "aiReviewedAt": "2026-07-22T05:08:38.095293+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_court_fanfare": {
    "id": "feywild_fey_court_fanfare",
    "name": "Fey Court Fanfare",
    "description": "Fey Court Fanfare is a delicate, iridescent fan crafted from the petals of fey flora and adorned with silver threads spun by the weavers of dreams. Each swing sends ripples through the fabric of reality, allowing you to swap locations or alter the appearance of nearby terrain. The fan's soft feathers whisper secrets of the Feywild as they flutter in your hand, creating a temporary illusionary veil that can disrupt foes and shield allies from harm.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦅",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Court Shift",
      "Illusionary Veil"
    ],
    "vendor": "feywild",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Court Shift",
        "rules": "As an action, you may use Fey Court Fanfare to swap your location or alter the appearance of nearby terrain. This effect creates a temporary reality shift that lasts for 1 minute. The area affected is a 5-foot cube centered on you. Creatures within the area must succeed on a DC 13 Wisdom saving throw or be disoriented, losing their turn until the end of their next full rest."
      },
      {
        "title": "Illusionary Veil",
        "rules": "As an action, you can create a 5-foot-radius sphere of illusory mist around yourself. This illusionary veil lasts for 1 minute and grants you advantage on Dexterity (Stealth) checks made while within the area. The mist dissipates if you leave its area or take any hostile actions."
      }
    ],
    "levelRequirementReason": "The fan's delicate craftsmanship requires a user with some experience to control its effects without causing unintended disturbances.",
    "vendorReason": "Feywild is the only vendor who can source and craft items from the ever-changing realms of the Feywild, ensuring their authenticity and power.",
    "shippingDetail": "Delivered by spectral couriers, this fan arrives with a whispering echo of the Feywild, enhancing its magical properties during transit.",
    "usage": {
      "activation": "Action or Reaction (for Court Shift); Action (for Illusionary Veil)",
      "duration": "1 minute",
      "endsWhen": "The effect ends when you stop concentrating on it, your concentration is broken, or the duration expires.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from rare Feywild flora and enchanted with illusions that require precise control, this fan's price reflects its rarity and mystical abilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:09:12.231024+00:00",
    "aiReviewedAt": "2026-07-22T05:09:12.231024+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_court_flask": {
    "id": "feywild_fey_court_flask",
    "name": "Court of Echoes Flask",
    "description": "This delicate glass vial contains a luminescent green liquid that shimmers with the essence of the Feywild. When consumed, it opens a fleeting portal to the Court of Echoes, allowing you to momentarily slip into its ethereal dreamscape. You become invisible to all but other Fey creatures and can overhear whispers of forgotten lore, enhancing your knowledge of ancient magic for 1 minute. However, this brief immersion may leave you disoriented for up to 1d4 rounds.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility to non-Fey",
      "Whispers of Forgotten Lore"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Invisibility to Non-Fey",
        "rules": "You gain the benefit of the Invisibility spell for 1 minute. This effect is active when you consume the flask and lasts until its duration ends or you take any action other than moving at your normal speed."
      },
      {
        "title": "Whispers of Forgotten Lore",
        "rules": "For the duration, you can make a History check with advantage. Additionally, if you fail an Intelligence saving throw while in the Feywild, you do not suffer any effects from the failed save for 1d4 rounds."
      }
    ],
    "levelRequirementReason": "The potion requires a basic understanding of Feywild magic to utilize its effects effectively.",
    "vendorReason": "Feywild is the primary source and steward of all things related to the Feywild, including this magical flask.",
    "shippingDetail": "The flask must be shipped in a specially enchanted container that preserves its potency for up to one week.",
    "usage": {
      "activation": "Consume the flask as an action",
      "duration": "1 minute or until you take any action other than moving normally",
      "endsWhen": "You take any action other than moving at your normal speed, or after 1 minute",
      "charges": "Unlimited"
    },
    "priceReason": "The Court of Echoes Flask is rare and requires specific Feywild ingredients to craft.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:08:44.963620+00:00",
    "aiReviewedAt": "2026-07-22T05:08:44.963620+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_court_key": {
    "id": "feywild_fey_court_key",
    "name": "Echoing Court Key",
    "description": "The Echoing Court Key is a delicate silver key adorned with swirling patterns that shimmer like the twilight of the Feywild. It opens a hidden door to a chamber where time seems to loop and twist, creating an ever-changing maze. The key grants access for one round, allowing the wielder to navigate this temporal labyrinth. Use it with caution; exiting prematurely can scramble your memory, leaving you disoriented and lost in the shifting realms.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Temporal Loop Maze",
      "Memory Scramble"
    ],
    "vendor": "feywild",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Loop Maze",
        "rules": "When activated as an action, the wielder enters a maze within which time loops and changes. The duration is one round. Exiting the chamber prematurely requires a DC 15 Wisdom saving throw or risk losing all memory of the event."
      },
      {
        "title": "Memory Scramble",
        "rules": "If used more than once per long rest, there's a cumulative -1 penalty to Intelligence checks and saving throws for each additional use. This effect resets after a short rest."
      }
    ],
    "levelRequirementReason": "The key's mystical properties require a certain level of arcane knowledge to wield safely.",
    "vendorReason": "As the key originates from the Feywild, it is only sold by vendors who have direct connections with the fey realms.",
    "shippingDetail": "The key must be shipped via Boo Spectral Mail to ensure its delicate nature remains unharmed during transit.",
    "usage": {
      "activation": "Action",
      "duration": "1 round",
      "endsWhen": "Exiting the chamber prematurely or ending your turn within it",
      "charges": "Unlimited, but limited by rest durations"
    },
    "priceReason": "The key's rare materials and the risk involved in its use justify this price.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T05:08:49.725075+00:00",
    "aiReviewedAt": "2026-07-22T05:08:49.725075+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_court_ring": {
    "id": "feywild_fey_court_ring",
    "name": "Fey Court Ring",
    "description": "The Fey Court Ring is a delicate, iridescent band forged from the light of the Feywild. It grants temporary control over the court’s whims but at the cost of one's willpower. Each use bends reality for a round, compelling targets to obey or face dire consequences, yet with each manipulation, the wearer grows ever more entangled in the Feywild’s embrace, increasing their chance of becoming a permanent courtling by 1%.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Control over Feytime",
      "Compel obedience"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Control over Feytime",
        "rules": "Activates as a bonus action. Targets one creature within 30 feet, compelling it to obey the ring's command for 1 round (at -1 HP). Each use increases the chance of becoming a courtling by 1%."
      },
      {
        "title": "Compel obedience",
        "rules": "Activates as a bonus action. Targets one creature within 30 feet, compelling it to obey any command for 1 round (at -1 HP). Each use increases the chance of becoming a permanent courtling by 1%. The ring must be removed or destroyed after three uses."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to wield due to its Feywild magic and the inherent risks involved.",
    "vendorReason": "The Feywild ensures only those who understand their realm can handle such a powerful and dangerous artifact.",
    "shippingDetail": "Delivered swiftly through the Feywild's natural magic, ensuring safe arrival without delay.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 round per use",
      "endsWhen": "The ring is removed or destroyed after three uses",
      "charges": "3"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the item's rarity and Feywild origin.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T05:08:52.490345+00:00",
    "aiReviewedAt": "2026-07-22T05:08:52.490345+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_court_satchel": {
    "id": "feywild_fey_court_satchel",
    "name": "Fey Court Satchel of Whispers",
    "description": "The Fey Court Satchel of Whispers is a woven bag of living moss and starlight, its fabric shimmering with the echoes of forgotten fey courtly whispers. When opened, it hums softly, weaving truths into your mind—memories that might be remembered or erased at its will. The satchel’s threads are spun from the very essence of the Feywild, granting a strange and fleeting power over one's own recollections.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌿",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Echoes of Forgotten Truth",
      "Memory's Gambit"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Echoes of Forgotten Truth",
        "rules": "When activated as an action, the satchel briefly rewrites three memory entries. On a successful DC 15 Wisdom saving throw, you gain minor bonuses to perception checks involving fey magic for the next hour. Failure results in a fleeting madness that imposes disadvantage on all perception checks until you complete a long rest."
      },
      {
        "title": "Memory's Gambit",
        "rules": "At the end of each turn, roll a d8. On a 1-3, you gain a minor bonus to your next perception check involving fey magic. On a 4-8, you must recall one forgotten truth from the satchel’s whispers or risk suffering a short-term madness that imposes disadvantage on all perception checks for the rest of the day."
      }
    ],
    "levelRequirementReason": "The satchel's power requires a deeper connection to the Feywild, suitable only for those who have ventured its depths.",
    "vendorReason": "Feywild is the birthplace of this magical bag and keeps it in stock as a token of the wild’s secrets.",
    "shippingDetail": "The satchel must be delivered directly by Shy Guy Smugglers to ensure its magic remains intact during transit.",
    "usage": {
      "activation": "Activates as an action, once per short or long rest.",
      "duration": "Instantaneous effect for memory rewriting; minor bonuses last until the next long rest.",
      "endsWhen": "Use ends after one activation or if you complete a long rest without using it.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The satchel is priced at 1000 XP, reflecting its rare origins and the magic woven into its fabric.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T05:09:17.197853+00:00",
    "aiReviewedAt": "2026-07-22T05:09:17.197853+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_court_scepter": {
    "id": "feywild_fey_court_scepter",
    "name": "Scepter of the Unraveling Court",
    "description": "The Scepter of the Unraveling Court is a bone-white staff with intricate Feywild runes etched into its surface. Crafted from the bones of a court that once thrived in the realm of Faerie, it grants the wielder the power to bend reality within the Feywild for moments at a time. With each use, there's a risk that the fabric of the world will unravel, causing localized distortions or shifts in perception. The scepter also allows the user to briefly experience another’s perspective, though the exact nature of this vision is unpredictable and can be unsettling.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏰",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Reality Distortion",
      "Perspective Shift"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Reality Distortion",
        "rules": "As a bonus action, the wielder can cause a localized reality shift within the Feywild. The area affected is a 10-foot radius centered on them for 1 round (6 seconds). During this time, the environment may change in strange ways, such as time slowing or gravity reversing, but these effects are temporary and do not last beyond the duration."
      },
      {
        "title": "Perspective Shift",
        "rules": "Once per long rest, the user can gain a fleeting glimpse of another's perspective for 1 minute. This effect is purely sensory and does not grant understanding or knowledge; it merely provides an odd sensation as if they were seeing through someone else’s eyes."
      }
    ],
    "levelRequirementReason": "The scepter requires a user with significant experience to wield its power safely without causing widespread harm.",
    "vendorReason": "The Feywild is the origin of this item, and only those who understand its mysteries can handle it responsibly.",
    "shippingDetail": "Ships via Koopa Postal. Delays are common due to the mystical nature of the shipment.",
    "usage": {
      "activation": "Bonus action or reaction (to defend against reality shifts)",
      "duration": "1 round for Reality Distortion, 1 minute for Perspective Shift",
      "endsWhen": "Ends when the duration expires or the user is hit by an attack",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The scepter's rarity and mystical properties, coupled with its unpredictable nature, justify this balanced price.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T05:09:05.258317+00:00",
    "aiReviewedAt": "2026-07-22T05:09:05.258317+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_court_wardrobe": {
    "id": "feywild_fey_court_wardrobe",
    "name": "Fey Court Wardrobe of Wandering Wishes",
    "description": "The Fey Court Wardrobe of Wandering Wishes is a whimsical wardrobe that appears as an ornate, shimmering chest adorned with delicate silver and emerald accents. It weaves outfits designed by the Fey Courts themselves, each tailored to the wearer’s current emotional state. When opened, it reveals garments imbued with unique magical effects, from the joy of springtime to the tranquility of a summer twilight. The wardrobe is known for its capricious nature—it may change appearance mid-use and can only be worn in the Feywild or with a token of fey goodwill.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Mood-Linked Transformations",
      "Restricted to Feywild"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Mood-Linked Transformations",
        "rules": "Activates on opening. The wardrobe provides an outfit that grants a unique magical effect based on the wearer’s current emotional state, such as +1d6 to all rolls when joyful or invisibility for 1 round when fearful. Each use consumes one wish token found in the shop and ends if the wearer enters the Shadowfell without a Fey Court blessing."
      },
      {
        "title": "Restricted to Feywild",
        "rules": "Cannot be worn outside the Feywild unless accompanied by a token of fey goodwill, which provides temporary access within 1 mile. This effect lasts for 24 hours and can only be used once per month."
      }
    ],
    "levelRequirementReason": "The intricate magic required to open and wear the wardrobe safely demands at least a 3rd-level spellcaster.",
    "vendorReason": "Only the Feywild, guardian of the fey realm, can provide such an item, as it is crafted from the very essence of the Feywild’s magic.",
    "shippingDetail": "Delivered by Lakitu Drones within one week, but only during daylight hours when the veil between worlds is thinnest.",
    "usage": {
      "activation": "Opening the wardrobe",
      "duration": "Instantaneous effect; lasts until the wearer enters the Shadowfell without a blessing or the outfit is replaced",
      "endsWhen": "Wearer enters the Shadowfell, no blessing provided, or the outfit is replaced by another",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Crafted from rare Feywild materials and infused with powerful fey magic, this wardrobe is a rare find worth its weight in wish tokens.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T05:09:08.979235+00:00",
    "aiReviewedAt": "2026-07-22T05:09:08.979235+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_echo": {
    "id": "feywild_fey_echo",
    "name": "Fey Echo",
    "description": "The Fey Echo is a delicate silver pendant adorned with swirling patterns of starlight and fae flora, said to have been crafted by the elusive weavers of the feywilds. When touched, it whispers secrets of forgotten courts, causing the wearer to enter a trance-like state where they gain fleeting insight into the emotional essence of any living creature they touch for 10 minutes. The pendant also amplifies its effects in time loops, extending the duration exponentially, but may cause the user to lose track of time, creating a perception gap.",
    "price": 1000,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Fey Insight",
      "Time Distortion"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fey Insight",
        "rules": "When activated as an action, the wearer gains 10 minutes of insight into the emotional core of any touched living creature. This effect requires no saving throw but may cause temporary disorientation."
      },
      {
        "title": "Time Distortion",
        "rules": "If used within a time loop, the duration is extended exponentially, doubling with each consecutive use until it reaches 10 minutes per level of the user's time manipulation ability. This effect ends if the user leaves the time loop or if their time manipulation ability is disabled."
      }
    ],
    "levelRequirementReason": "The pendant’s magic is subtle and requires no specific combat proficiency, making it accessible to lower-level characters.",
    "vendorReason": "As a guardian of the feywilds, Feywild is entrusted with items that connect mortals to the fae realms.",
    "shippingDetail": "The pendant is delivered discreetly via Shy Guy Smugglers' secret routes, ensuring it reaches its destination without attracting unwanted attention.",
    "usage": {
      "activation": "Activate as a bonus action upon touching the pendant while in contact with another living creature.",
      "duration": "10 minutes per use.",
      "endsWhen": "The duration ends when the user leaves the time loop or if their time manipulation ability is disabled, whichever comes first.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP to reflect its rarity and limited utility without overshadowing more powerful items.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T05:09:37.282333+00:00",
    "aiReviewedAt": "2026-07-22T05:09:37.282333+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_echo_amulet": {
    "id": "feywild_fey_echo_amulet",
    "name": "Fey Echo Amulet",
    "description": "The Fey Echo Amulet is a pulsing, enchanted piece of jewelry that weaves together threads of emotion and magic. Crafted from the heartwood of a fey-touched elder tree, it whispers the moods of those around you, granting buffs based on their expressions. This amulet makes its wearer invisible to fey who do not recognize them, ensuring safe passage through the wilds or avoiding unwanted encounters with these otherworldly beings.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎭",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Emotionally Responsive Buff",
      "Invisibility Against Unfamiliar Fey"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Emotionally Responsive Buff",
        "rules": "When a creature around the wearer expresses joy, fear, or confusion, the amulet grants temporary bonuses: +1d4 to attack rolls if the wearer is laughing or terrified; +1d6 to saving throws against illusions if the wearer is confused. These effects last for 1 minute."
      },
      {
        "title": "Invisibility Against Unfamiliar Fey",
        "rules": "The amulet renders its wearer invisible to fey who do not recognize them. This effect lasts until a successful Wisdom (Insight) check by an observing creature, or until the wearer takes any hostile action."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to handle the amulet's complex magical properties.",
    "vendorReason": "The Feywild vendors specialize in items that interact with fey creatures, making them the perfect place for such an artifact.",
    "shippingDetail": "Ships via Koopa Express, ensuring swift delivery to adventurers seeking this item.",
    "usage": {
      "activation": "Passive effect; triggered by nearby emotions and recognition checks.",
      "duration": "1 minute or until a hostile action is taken.",
      "endsWhen": "A successful Wisdom (Insight) check by an observing creature, or taking any hostile action.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect the amulet's dual functionality and its interaction with fey creatures.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T05:09:24.546601+00:00",
    "aiReviewedAt": "2026-07-22T05:09:24.546601+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_fate_pearl": {
    "id": "feywild_fey_fate_pearl",
    "name": "Fey Fate Pearl",
    "description": "The Fey Fate Pearl is a luminescent sphere that hums with an ethereal light. When activated, it opens a transient rift to the Feywild, revealing hidden glades and secrets of the fey realms for a fleeting moment. The pearl's glow can also loop time within a 10-foot radius, showing random sequences from the past or future, but beware—this temporal distortion might disorient those caught in its strange currents.",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Temporal Rift",
      "Feywild Insight"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Rift",
        "rules": "Activates as a bonus action. Reveals hidden Feywild glades within a 10-foot radius for up to 5 seconds. Subjects exposed to the rift have disadvantage on Wisdom (Perception) checks and saving throws against illusions until the effect ends."
      },
      {
        "title": "Feywild Insight",
        "rules": "Passively grants +1 to all Charisma checks when interacting with Fey creatures or magical effects originating from the Feywild. This benefit lasts for 1 hour after each use of the pearl."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to utilize the delicate magic that opens a rift to the Feywild.",
    "vendorReason": "Feywild is a trusted vendor known for exotic and magical items from their realm, including this pearl of fey secrets.",
    "shippingDetail": "Delivery may take an additional day as the pearl's magic enhances its own concealment during transit.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Up to 5 seconds for Temporal Rift, passive benefit lasts until used again or 1 hour after use",
      "endsWhen": "Effect ends upon activation duration expiration, or if the user moves out of range for Temporal Rift. Passive Charisma boost expires when the pearl is used again.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to reflect its unique ability to manipulate time and reveal Feywild secrets, this price ensures it remains a valuable but not overpowered item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:09:27.879898+00:00",
    "aiReviewedAt": "2026-07-22T05:09:27.879898+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_folly_glove": {
    "id": "feywild_fey_folly_glove",
    "name": "Fey Folly Glove",
    "description": "The Fey Folly Glove is a delicate, enchanted mitten woven from threads of starlight and woven into the patterns of the Feywild. When worn, it grants you temporary control over the whimsy of a nearby court, allowing you to either turn chaos into opportunity or misdirect your foes. The glove also causes minor time distortions for 1 round among its wearer's allies, creating a brief window where actions seem to slow down around them. If used repeatedly in a loop, the effect becomes permanent for 1 round, but only within a small radius of the glove’s wearer.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Court Whimsy Control",
      "Temporal Misdirection"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Court Whimsy Control",
        "rules": "As an action, you can command a nearby court to grant you or your allies a random beneficial effect for 1 round. The effect is temporary and could range from 'Heal 1d6' to 'Steal 1d4 gold'. This power can be used once per short rest."
      },
      {
        "title": "Temporal Misdirection",
        "rules": "As an action, you can cause minor time distortions for 1 round among your allies within a 20-foot radius. During this time, actions seem to slow down around them, granting advantage on Dexterity (Stealth) checks and saving throws against being surprised or knocked prone until the start of your next turn. This effect can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The glove’s power is accessible to players who have reached a basic understanding of the game's mechanics.",
    "vendorReason": "Feywild, being the source of the Fey Folly Glove, naturally sells items that harness and embody its magic.",
    "shippingDetail": "The gloves are delivered swiftly by Lakitu Drones, ensuring they reach their destination within a day.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "1 round",
      "endsWhen": "Ends at the start of your next turn",
      "charges": "Once per short rest"
    },
    "priceReason": "The price reflects the glove's rare enchantments and its utility in strategic gameplay.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:09:33.343522+00:00",
    "aiReviewedAt": "2026-07-22T05:09:33.343522+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_frenzy": {
    "id": "feywild_fey_frenzy",
    "name": "Fey Frenzy",
    "description": "The Fey Frenzy is a shimmering amulet that pulses with chaotic energy. When worn, it grants +3 to all skill checks involving wild magic or illusion, but at the cost of one's mental stability; each use drains a point of sanity and may trigger a time-looping effect during Fey court events. This amulet is a symbol of the Feywild’s unpredictable nature, crafted by the whimsical fey themselves for those who dare to dance with madness.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Wild Magic Boost",
      "Sanity Drain"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Wild Magic Boost",
        "rules": "The wearer gains +3 to all skill checks involving wild magic or illusion. This effect is active as long as the amulet is worn."
      },
      {
        "title": "Sanity Drain",
        "rules": "Using the amulet causes a minor sanity drain, reducing the wearer's Wisdom saving throw bonus by 1 until the end of their next short rest."
      }
    ],
    "levelRequirementReason": "The amulet’s chaotic magic requires a certain level of control and mental fortitude to wield effectively.",
    "vendorReason": "As a direct representative of the Feywild, the vendor maintains a deep connection with the mystical items that can influence such places.",
    "shippingDetail": "The amulet comes with a special pouch to protect it during transit and ensure its power remains intact until it reaches its destination.",
    "usage": {
      "activation": "Instantaneous activation when worn; wild magic effects are active as long as the amulet is worn.",
      "duration": "Permanent while worn",
      "endsWhen": "The amulet is removed or destroyed",
      "charges": "Unlimited uses"
    },
    "priceReason": "The amulet’s balanced price reflects its unique blend of utility and risk, making it a sought-after yet carefully priced item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:09:39.225239+00:00",
    "aiReviewedAt": "2026-07-22T05:09:39.225239+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_fury_essence": {
    "id": "feywild_fey_fury_essence",
    "name": "Court of Thorns Essence",
    "description": "The Court of Thorns Essence is a volatile elixir that glows with an eerie green light, reminiscent of the Feywild. Upon consumption, it grants you a fleeting rage, doubling your attack damage for one round but risks sending you into a disorienting dream loop where time seems to fold upon itself. The essence whispers secrets of the Feywild and may cause you to momentarily lose track of your own name, leaving a lingering sense of confusion.",
    "price": 1000,
    "icon": "🌿",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+200% Attack Damage",
      "Temporary Dream Loop"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Fury of Thorns",
        "rules": "When consumed, the essence grants you +200% damage to all attacks for one round. This effect cannot be used again until you complete a short or long rest."
      },
      {
        "title": "Dream Loop",
        "rules": "There is a 50% chance that after consuming the essence, you will become temporarily entangled in a looping dream of the Feywild. For 1 round, time seems to fold upon itself; you lose track of your own name and may find yourself reliving the same moments repeatedly until the effect ends."
      }
    ],
    "levelRequirementReason": "This essence requires a higher level due to its volatile nature and Feywild magic.",
    "vendorReason": "The Feywild vendor is familiar with the lore and can source such potent essences.",
    "shippingDetail": "Due to the essence's instability, it must be shipped via special courier within a sealed container.",
    "usage": {
      "activation": "Consume as a bonus action",
      "duration": "1 round",
      "endsWhen": "The effect ends when your concentration is broken or you complete a short or long rest.",
      "charges": "Unlimited, but cannot be used again until rested."
    },
    "priceReason": "Balanced at 1000 XP to reflect its volatile nature and Feywild magic.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:09:43.135103+00:00",
    "aiReviewedAt": "2026-07-22T05:09:43.135103+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_gaze": {
    "id": "feywild_fey_gaze",
    "name": "Fey Gaze Lens",
    "description": "The Fey Gaze Lens is a pair of delicate, iridescent lenses forged from the essence of the Feywild. When worn, they transform the mundane world into a kaleidoscope of hidden magic, revealing the true nature of time and space. The wearer can see through illusions and perceive the shifting layers of reality, uncovering secrets that lie just beyond sight. Time itself appears as a shimmering tapestry, with a 5% chance to glimpse fleeting echoes of past events in vivid replay.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Fey Court Vision",
      "Temporal Echoes"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Fey Court Vision",
        "rules": "As an action, the wearer can activate this lens. The effect lasts for 1 minute and grants advantage on perception checks to detect hidden Feywild magic within a 30-foot radius. This effect ends early if the wearer removes or damages one of the lenses."
      },
      {
        "title": "Temporal Echoes",
        "rules": "The lens has a 5% chance per short rest to activate and reveal a 3-second temporal echo, showing past events in vivid detail within a 10-foot radius. The user can attempt an Intelligence (History) check with advantage while viewing the echo. This effect cannot be triggered more than once per day."
      }
    ],
    "levelRequirementReason": "The lens requires a minimum level to balance its potent effects and ensure players have sufficient experience before using it.",
    "vendorReason": "Feywild, the original merchant of the Feywild, is known for their expertise in crafting items that interact with the mystical realm.",
    "shippingDetail": "The lenses are carefully sealed and require special handling to ensure they arrive undamaged. Shipping takes an additional day due to their fragile nature.",
    "usage": {
      "activation": "Action: Activated as a bonus action.",
      "duration": "1 minute, or until the wearer removes one of the lenses.",
      "endsWhen": "The effect ends if the wearer leaves the area or removes one lens.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "The price reflects its rarity and the unique value it adds to perception checks, making it a valuable tool for explorers and scholars of the Feywild.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T05:10:16.663525+00:00",
    "aiReviewedAt": "2026-07-22T05:10:16.663525+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_gaze_lens": {
    "id": "feywild_fey_gaze_lens",
    "name": "Gaze of the Courtly Wisp",
    "description": "The Gaze of the Courtly Wisp is a crystalline lens forged from the shards of Feywild light, worn as an accessory by those who wish to perceive hidden magic in the fae realms. It allows its wearer to detect enchanted pathways that shimmer with unseen power and pinpoint unstable time loops where reality bends. However, prolonged use near volatile magical forces may cause temporary disorientation, leaving the beholder's vision clouded for a moment.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Detects hidden Fey magic",
      "Identifies temporal anomalies"
    ],
    "vendor": "feywild",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Reveal Hidden Fey Magic",
        "rules": "When worn, the lens allows the wearer to detect and see through enchantments in their immediate vicinity. This effect has a radius of 30 feet and lasts for 1 minute per use. If used near unstable magic, there is a 5% chance that it causes temporary disorientation (DC 12 Wisdom saving throw)."
      },
      {
        "title": "Identify Temporal Anomalies",
        "rules": "The lens can identify time loops and portals within 60 feet. Once per day, the wearer may take a bonus action to activate this ability for 5 minutes. If a temporal anomaly is detected, the user must make a Wisdom saving throw (DC 14) or be temporarily blinded for 1d4 rounds."
      }
    ],
    "levelRequirementReason": "The lens requires a minimum level to properly harness its Feywild magic without risk of disorientation.",
    "vendorReason": "Feywild is the original home of such mystical artifacts, crafted by fae artisans for those who wish to explore their realm.",
    "shippingDetail": "Ships via spectral courier, arriving under cover of twilight and accompanied by a wisp of light.",
    "usage": {
      "activation": "Bonus action (to activate the temporal anomaly detection) or worn as an accessory (for detecting hidden Fey magic)",
      "duration": "Instantaneous (temporal anomaly detection), 1 minute per use (hidden Fey magic detection)",
      "endsWhen": "Ends when removed, or upon successful saving throw",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP as a rare item with two potent effects and specific limitations.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T05:10:06.406579+00:00",
    "aiReviewedAt": "2026-07-22T05:10:06.406579+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_gaze_potion": {
    "id": "feywild_fey_gaze_potion",
    "name": "Gaze of the Courtly Thicket",
    "description": "Gaze of the Courtly Thicket allows you to peer into the hidden heart of the Feywild, where time bends and magic dances. For an hour, your senses are attuned to the whimsical and perilous realms of the fey, revealing magical anomalies and hidden paths that elude even the most perceptive eyes. The potion grants a fleeting glimpse into the true nature of time in the Feywild, but beware; prolonged use may cause disorientation or hallucinations within the chaotic loops of time.",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Perception of Fey Anomalies",
      "Time-Loop Vision"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Perception of Fey Anomalies",
        "rules": "For one hour after consuming this potion, you gain advantage on Perception checks to detect magical anomalies in the Feywild. This effect is limited to once per long rest."
      },
      {
        "title": "Time-Loop Vision",
        "rules": "You can see through time within a 30-foot radius for the duration of your concentration (up to one minute). While using this vision, you have disadvantage on Dexterity saving throws due to disorientation. This effect is limited to three times per long rest."
      }
    ],
    "levelRequirementReason": "This potion is accessible at level 1 as it requires no specific class or background prerequisite.",
    "vendorReason": "The Feywild vendor, known for their intimate knowledge of the realm's secrets, carries this potent brew.",
    "shippingDetail": "Shipped by Lakitu Drones, with a delivery time of two days to ensure the potion remains effective.",
    "usage": {
      "activation": "Drink one dose as an action.",
      "duration": "One hour or until you are disoriented from time loops (whichever comes first).",
      "endsWhen": "Disorientation ends when the duration expires or you are no longer within the Feywild.",
      "charges": "Unlimited; replenished at dawn."
    },
    "priceReason": "The potion's rarity and its unique ability to grant a glimpse into the Feywild justify this price in XP.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-22T05:10:05.154368+00:00",
    "aiReviewedAt": "2026-07-22T05:10:05.154368+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_haunt_gear": {
    "id": "feywild_fey_haunt_gear",
    "name": "Fey Haunt Gear",
    "description": "The Fey Haunt Gear, a delicate set of bracers adorned with swirling Feywild runes and woven from the very threads of fae magic, grants its wearer fleeting access to the hidden paths of the realm. By tapping into these ancient conduits, you can teleport instantly within a hundred meters, but at the cost of one memory shard—each fragment a relic of forgotten lore reclaimed from the fey courts. Upon arrival, however, a brief disorientation strikes, leaving you momentarily off-kilter for two seconds before your senses realign.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Teleportation to Feywild Paths",
      "Memory Shard Sacrifice"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fey Teleport",
        "rules": "As an action, you can teleport up to 100 meters to any location within range. The use of this ability costs one memory shard. This effect is instantaneous but causes temporary disorientation for 2 seconds upon arrival."
      },
      {
        "title": "Memory Shard Sacrifice",
        "rules": "Each use of the Fey Haunt Gear requires a memory shard, which can be recovered from the Feywild after being used, thus allowing limited access to the fae realm without permanent loss. Failure to provide a shard before each use results in the item's immediate deactivation."
      }
    ],
    "levelRequirementReason": "This gear is designed for adventurers who are just beginning their journey into the Feywild, allowing them to explore its hidden paths without the need for extensive preparation.",
    "vendorReason": "The Feywild vendor, a trusted source of all things fey, sells this gear to help travelers navigate the realm's enigmatic landscapes.",
    "shippingDetail": "Delivered swiftly by Lakitu drones, ensuring that your journey into the Feywild is as seamless as possible.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Memory shard not provided or out of uses",
      "charges": "Unlimited (up to one memory shard)"
    },
    "priceReason": "The balance in price reflects the item's rarity and its limited, yet powerful utility within the Feywild.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T05:10:10.340752+00:00",
    "aiReviewedAt": "2026-07-22T05:10:10.340752+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_heart": {
    "id": "feywild_fey_heart",
    "name": "Fey Heart",
    "description": "The Fey Heart is a pulsating orb of wild magic that resonates with the fey courts. Its soft, iridescent glow allows the wearer to perceive fey magic and emotions within 30 feet, as if their senses were attuned to the whimsical fae. When near a court, the wearer may hear whispers of courtly secrets, offering insights into the delicate intrigues that swirl around them. In times of time loops, the heart’s rhythm synchronizes with the loop's, granting a 50% chance to avoid a trap set by fey trickery.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Fey Perception",
      "Court Whisper"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fey Perception",
        "rules": "The wearer gains the ability to perceive fey magic and emotions within 30 feet as a passive effect. This does not grant advantage on perception checks but allows the wearer to detect the presence of fey magic and emotional states."
      },
      {
        "title": "Court Whisper",
        "rules": "Once per short rest, when near a fey court, the wearer can hear whispers of courtly secrets as an action. This provides one piece of information about current intrigues or plans within the court. The DM decides the nature and reliability of this information."
      }
    ],
    "levelRequirementReason": "The simple enchantment does not require a high level to benefit from its magical properties.",
    "vendorReason": "Feywild is known for selling items that are in tune with the fey realms, and this heart reflects that theme perfectly.",
    "shippingDetail": "The item requires special handling by Shy Guy Smugglers to ensure it arrives intact, adding a day to delivery time.",
    "usage": {
      "activation": "Passive and once per short rest as an action",
      "duration": "Instantaneous for Fey Perception; varies for Court Whisper",
      "endsWhen": "The wearer leaves the fey court or rests for one hour (Court Whisper)",
      "charges": "Unlimited, with a 24-hour recharging period"
    },
    "priceReason": "The item's enchantments are powerful but not overpowered, fitting within the rare rarity category.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T05:10:23.024714+00:00",
    "aiReviewedAt": "2026-07-22T05:10:23.024714+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_heart_pearl": {
    "id": "feywild_fey_heart_pearl",
    "name": "Fey Heart Pearl",
    "description": "The Fey Heart Pearl pulses with a spectrum of colors that shift in time with the wild magic of the Feywild. When worn, it grants temporary immunity to time-stasis effects and allows its bearer to phase into nearby Fey courts with a whispered command. The pearl's power is drawn from the essence of ancient fey hearts, making it both a symbol and tool for those who wish to traverse realms unseen by mortal eyes.",
    "category": "equipment",
    "price": 1000,
    "icon": "💖",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Temporal Immunity",
      "Feywild Teleport"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Immunity",
        "rules": "When worn, the Fey Heart Pearl grants immunity to time-stasis effects for 1 minute. The wearer can activate this effect once per long rest."
      },
      {
        "title": "Feywild Teleport",
        "rules": "By whispering a command in Sylvan or casting a minor spell of Sylvan communication, the wearer can phase into a nearby Fey court within 50 yards. This ability requires a bonus action and has no cooldown between uses."
      }
    ],
    "levelRequirementReason": "The pearl's power is accessible to adventurers who are just beginning their journey in the Feywild.",
    "vendorReason": "Feywild, a creature of the realm, curates items that connect mortals with the magic of her domain.",
    "shippingDetail": "Shipped by Lakitu Drones, delivering the pearl within a week to any location within the Feywild.",
    "usage": {
      "activation": "Activates on command or as an action",
      "duration": "1 minute per use for Temporal Immunity; instantaneous for Feywild Teleport",
      "endsWhen": "Exhausted after one use, rechargeable at a druid's camp within the Feywild",
      "charges": "Unlimited uses between rests"
    },
    "priceReason": "Balanced against other rare items that offer unique abilities and access to special realms.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T05:10:21.230836+00:00",
    "aiReviewedAt": "2026-07-22T05:10:21.230836+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_lullaby": {
    "id": "feywild_fey_lullaby",
    "name": "Fey Lullaby of Echoes",
    "description": "The Fey Lullaby of Echoes is a delicate, wooden flute carved from the heartwood of a forgotten tree in the Feywild. Its haunting melody weaves through time and memory, allowing its bearer to recall a distant memory from another timeline. However, with each note played, one's own personal memory crumbles, replaced by the ephemeral echoes of the past. This fragile instrument triggers unpredictable time loops when used within a looped area of the Feywild, causing ripples in reality that may persist indefinitely.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporal Echo",
      "Memory Trade"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Echo",
        "rules": "When played within the Feywild, the lullaby creates a time loop that lasts for one minute per memory recalled. During this time, non-Feywild creatures may experience hallucinations and disorientation as reality bends around them."
      },
      {
        "title": "Memory Trade",
        "rules": "Using the flute allows the player to recall a specific memory from another timeline at the cost of one of their own memories. The recalled memory is vivid but fleeting, lasting only until the next dawn."
      }
    ],
    "levelRequirementReason": "The lullaby requires minimal preparation and can be used by those with basic musical knowledge.",
    "vendorReason": "Feywild is a master of all things Fey-related, including the creation and sale of magical instruments like this flute.",
    "shippingDetail": "The delicate nature of the lullaby necessitates swift delivery via Lakitu Drones to ensure it arrives in pristine condition.",
    "usage": {
      "activation": "A bonus action or reaction when played.",
      "duration": "Instantaneous for memory recall; temporal echoes last one minute per memory.",
      "endsWhen": "The use of the lullaby ends with a successful DC 15 Wisdom saving throw by an affected non-Feywild creature, or upon the dawn following its use.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the item's rarity and the Feywild vendor's expertise in crafting such magical instruments.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:10:42.316411+00:00",
    "aiReviewedAt": "2026-07-22T05:10:42.316411+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_rage_ring": {
    "id": "feywild_fey_rage_ring",
    "name": "Rage Ring of the Shattered Court",
    "description": "The Rage Ring of the Shattered Court is a twisted bauble forged from the wild magic that courses through the Feywild. Its silver surface bears intricate, fading runes that whisper secrets of forgotten feuds. Wielded by those who dare to challenge the Fey court’s ancient silence, it amplifies your Wild Magic fury for 1 round, but at the cost of a fleeting memory—each use erases one cherished name from your past. The ring's magic warps time in the Feywild for moments, creating a palpable distortion around you.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+3 to Wild Magic damage",
      "Erases one cherished name"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Amplified Fury",
        "rules": "When activated as an action, the wearer gains +3 bonus to all Wild Magic damage rolls for 1 round. This effect ends if you are incapacitated or if it is used again."
      },
      {
        "title": "Memory Erasure",
        "rules": "Using the ring causes the wearer to forget one cherished name from their past, as though affected by the spell *Erase Memories*. The memory loss lasts for 1 round and can only be triggered once per short or long rest."
      }
    ],
    "levelRequirementReason": "Requires a proficient character in Arcana to channel its chaotic magic effectively.",
    "vendorReason": "The ring's origin in the Feywild makes it a natural fit for the vendor, who can source such relics from deep within the wilds.",
    "shippingDetail": "Ships via Lakitu Drones' express delivery service, ensuring swift arrival to those who dare to challenge the court’s silence.",
    "usage": {
      "activation": "Activates as an action.",
      "duration": "1 round of Wild Magic amplification.",
      "endsWhen": "You are incapacitated or it is used again.",
      "charges": "One use per short or long rest."
    },
    "priceReason": "Balanced at this price to reflect its limited uses and the risk of memory loss, making it a strategic yet risky tool for Wild Magic users.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:10:32.063935+00:00",
    "aiReviewedAt": "2026-07-22T05:10:32.063935+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_rune": {
    "id": "feywild_fey_rune",
    "name": "Fey Rune of the Forgotten Hour",
    "description": "The Fey Rune of the Forgotten Hour is a glowing glyph made from the essence of forgotten moments. Carved with arcane symbols and wild magic, this rune can be drawn on any surface to rewrite a moment in time. Use it once to reset a decision or erase a memory, though drawing it costs you 1% of your soul energy, leaving behind a brief delusion that mimics the rewritten event.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Rewrites a single moment",
      "Costs 1% of user’s soul energy"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Rewrite Moment",
        "rules": "The rune allows you to rewrite one moment in time. This can be used to reset a decision, erase a memory, or alter fate. Drawing the rune costs 1% of your soul energy. The effect is instantaneous and lasts until the start of your next turn."
      },
      {
        "title": "Brief Delusion",
        "rules": "For 1 minute after using the rune, you experience a delusional reenactment of the rewritten moment. During this time, you are unable to distinguish between reality and the illusion."
      }
    ],
    "levelRequirementReason": "Requires a moderate level to manage the risk of soul energy expenditure.",
    "vendorReason": "The Feywild vendors sell it as one of their most powerful yet ethically questionable items.",
    "shippingDetail": "Ships via Koopa Postal’s fastest courier, a journey that typically takes three days.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "At the start of your next turn after use",
      "charges": "One-time use"
    },
    "priceReason": "Balanced to allow for a rare but not overpowered moment-altering rune.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:10:34.911142+00:00",
    "aiReviewedAt": "2026-07-22T05:10:34.911142+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_rune_chest": {
    "id": "feywild_fey_rune_chest",
    "name": "Fey Rune Chest",
    "description": "The Fey Rune Chest is a chest crafted from moss enchanted by ancient Fey magic. It glows faintly with an otherworldly light, its surface etched with runes that whisper forgotten truths. The chest opens only when a user whispers a truth known to the court's elders; any falsehood or lie seals it shut forever. Inside lies a key to a hidden time-loop chamber where time flows in unpredictable loops and paradoxes await those who dare enter.",
    "price": 1000,
    "icon": "🗝",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Whispered Truth Required",
      "Time-Loop Chamber Access"
    ],
    "vendor": "feywild",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Whispered Truth Required",
        "rules": "The chest opens only when a user whispers a truth known to the court's elders. If the statement is a lie or falsehood, the chest remains sealed and any attempts at further use are futile until the next full moon."
      },
      {
        "title": "Time-Loop Chamber Access",
        "rules": "Opening the chest grants access to a hidden time-loop chamber where time behaves in paradoxical ways. The user must make an Intelligence (History) saving throw with a DC of 15; on a failed save, they are disoriented for 1d4 rounds and suffer from temporal confusion that requires a short rest to recover."
      }
    ],
    "levelRequirementReason": "Characters must have some understanding of history or court lore to successfully use the chest.",
    "vendorReason": "Feywild is renowned for its connection to ancient secrets and magical artifacts, making it a fitting vendor for such an item.",
    "shippingDetail": "Special delivery via Pipe Express ensures the chest arrives safely within one week of purchase.",
    "usage": {
      "activation": "Standard action to whisper a truth and open the chest.",
      "duration": "Instantaneous upon opening, effects last until the user exits the time-loop chamber.",
      "endsWhen": "The user exits the time-loop chamber or the chest is sealed again by a lie.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The item's unique properties and the risk of temporal confusion justify this price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:10:38.127526+00:00",
    "aiReviewedAt": "2026-07-22T05:10:38.127526+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_silence_ring": {
    "id": "feywild_fey_silence_ring",
    "name": "Fey Silence Ring",
    "description": "The Fey Silence Ring is a delicate silver band inscribed with ancient runes that hum faintly. Crafted from the essence of Feywild flora, it grants its wearer the power to silence Fey magic for one round at the cost of their next breath. If the wearer fails a saving throw, they are trapped within a loop, reliving the last moment of the ring’s activation. This tool is invaluable when navigating the whimsical and dangerous realms of the Feywild.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Silence Fey magic",
      "Costs next breath"
    ],
    "vendor": "feywild",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silence Fey Magic",
        "rules": "When activated, this ring silences all Fey magic within a 10-foot radius for one round. The wearer must make a DC 15 Constitution saving throw or be trapped in a loop of the last moment, repeating it every 3 rounds until the effect ends."
      },
      {
        "title": "Costs Next Breath",
        "rules": "Activating this ring costs the wearer their next breath, reducing their hit points by 2d6. If the wearer fails a DC 15 Constitution saving throw, they are trapped in a time loop, repeating the last moment of activation every 3 rounds until dispelled or otherwise ended."
      }
    ],
    "levelRequirementReason": "This ring is designed for adventurers who may not meet the higher level requirement but still need to disrupt Fey magic.",
    "vendorReason": "The Feywild vendor has a deep understanding of the realm's magic and knows when such a tool can be used without causing undue harm.",
    "shippingDetail": "Ships via the Void Drifter Relay, known for its precise deliveries through the most challenging terrain.",
    "usage": {
      "activation": "Action",
      "duration": "One round",
      "endsWhen": "The effect ends when the duration expires or a dispel magic is successfully cast on it.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the ring's utility in both combat and exploration, balancing its powerful effects with a fair cost.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-22T05:10:48.179112+00:00",
    "aiReviewedAt": "2026-07-22T05:10:48.179112+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_soul_amber": {
    "id": "feywild_fey_soul_amber",
    "name": "Amber of the Fey Court’s Whisper",
    "description": "Amber of the Fey Court’s Whisper is a radiant, crystalline orb that hums with ancient magic and the echoes of forgotten oaths. Crafted from the heartwood of elder trees in the Feywild's oldest courts, it grants its bearer access to the cryptic whispers of the fey. Upon donning this gem, you hear the subtlest murmurs of the court’s most binding oaths—knowledge that could either liberate or entrap.",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Grants passive Fey Court knowledge",
      "May trigger a random court oath effect"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Passive Fey Court Knowledge",
        "rules": "While wearing the amber, you gain advantage on saving throws against enchantment spells and effects from creatures of the fey origin. This benefit lasts for 10 minutes."
      },
      {
        "title": "Court Oath Trigger",
        "rules": "There is a 25% chance that upon donning the amber, a random court oath effect will be triggered (e.g., 'You must obey the first command of the court you face'). The oath lasts for 1d4 hours."
      }
    ],
    "levelRequirementReason": "The amber’s magic is complex and requires a minimum understanding of Feywild lore.",
    "vendorReason": "Only the Feywild can craft items that bridge their realm with the mortal world.",
    "shippingDetail": "The Amber is carefully packed in enchanted straw to preserve its radiance during transit.",
    "usage": {
      "activation": "Passive effect upon donning the amber. Ends when removed or after 10 minutes, whichever comes first.",
      "duration": "10 minutes while worn",
      "endsWhen": "Removed from wearer or after 10 minutes",
      "charges": "Unlimited"
    },
    "priceReason": "The amber’s rarity and the complexity of its enchantment justify a price tag of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:11:02.483927+00:00",
    "aiReviewedAt": "2026-07-22T05:11:02.483927+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_soul_cage": {
    "id": "feywild_fey_soul_cage",
    "name": "Fey Soul Cage",
    "description": "The Fey Soul Cage is an ethereal, thorny construct of Fey magic, woven from the very essence of the Feywild’s natural lores. It hums with chaotic energy, trapping a foe’s soul for 1d4 rounds and compelling them to relive their last five minutes, each moment etched in vivid, maddening detail. The cage's shifting thorns emit an eerie, melodic resonance that drives those who don’t understand its magic into madness.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 0,
    "rarity": "rare",
    "effects": [
      "Soul Trap",
      "Relive Past"
    ],
    "vendor": "feywild",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Soul Trap",
        "rules": "When activated by a Feywild adept, the cage traps an enemy's soul for 1d4 rounds. The target must succeed on a DC 15 Wisdom saving throw or be affected by the Relive Past effect."
      },
      {
        "title": "Relive Past",
        "rules": "The trapped foe relives their last five minutes, experiencing it in vivid detail. This effect imposes the frightened condition for the duration of the cage's trap and causes 1d6 psychic damage upon escape or destruction."
      }
    ],
    "levelRequirementReason": "Requires a Feywild adept to activate this artifact due to its complex magic.",
    "vendorReason": "The Feywild are the custodians of this magical artifact, crafting it from the very essence of their realm's lores.",
    "shippingDetail": "Ships via the Void Drifter Relay, ensuring safe transport through the Feywild’s unpredictable realms.",
    "usage": {
      "activation": "Reaction to trap an enemy within the cage.",
      "duration": "1d4 rounds until the trapped soul escapes or the cage is destroyed.",
      "endsWhen": "The trapped soul escapes, the artifact is destroyed, or a successful Wisdom saving throw is made.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP as it provides a unique and limited-time effect that can be used multiple times.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T05:11:05.869247+00:00",
    "aiReviewedAt": "2026-07-22T05:11:05.869247+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_soul_ink": {
    "id": "feywild_fey_soul_ink",
    "name": "Fey Soul Ink",
    "description": "A vial of liquid starlight that drips with the essence of forgotten courtiers, Fey Soul Ink is a relic from the Feywild, crafted by the whimsical weavers who spin threads of magic and time. When applied to a weapon or spell, it imbues the next spell cast with a random effect—chaos magic, time rewind, or a fey charm. This ink never fails to surprise, but it may cause minor temporal glitches on subsequent uses, leaving the caster in a state of fleeting confusion.",
    "price": 1000,
    "icon": "🖋",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Fey Resonance",
      "Random Spell Effect"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Fey Resonance",
        "rules": "Grants +2 to Charisma (Deception, Performance) checks when used in Feywild encounters. This effect lasts until the end of your next turn."
      },
      {
        "title": "Random Spell Effect",
        "rules": "When applied to a spell or weapon, the next spell cast has its effects altered randomly: +3d6 damage, time rewind for 1 round, or a fey charm on one creature. This effect lasts until the end of your next turn and cannot be resisted with a saving throw."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to ensure the caster can effectively wield this unpredictable magic.",
    "vendorReason": "The ink is crafted by the very weavers who inhabit the Feywild and are best suited to distribute its magical essence.",
    "shippingDetail": "Delivered swiftly through the Feywild's shimmering mists, ensuring the ink remains potent until it reaches its destination.",
    "usage": {
      "activation": "Applied once per short or long rest to a weapon or spell.",
      "duration": "Instantaneous effect upon casting the next spell.",
      "endsWhen": "The spell is cast and its effects are applied; no further uses remain after one application.",
      "charges": "Unlimited, as it can be recharged with a short or long rest."
    },
    "priceReason": "Balanced at 1000 XP to reflect the unpredictable and powerful nature of Fey Soul Ink.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T05:11:13.369185+00:00",
    "aiReviewedAt": "2026-07-22T05:11:13.369185+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_soul_pearl": {
    "id": "feywild_fey_soul_pearl",
    "name": "Fey Soul Pearl of the Forgotten Court",
    "description": "The Fey Soul Pearl of the Forgotten Court pulses with an otherworldly light, whispering secrets from the Feywild's hidden courts. When worn by a caster, it reveals forgotten truths about a target creature’s past alliances and unspoken pacts, but at a cost: the wearer may momentarily lose their own identity, forgetting their name for one hour. The pearl grants immunity to illusion spells cast upon you for that same duration.",
    "price": 1000,
    "icon": "🍬",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reveals hidden truth",
      "Forgets wearer's identity"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Forgotten Truth",
        "rules": "When activated, the Fey Soul Pearl casts a divination spell (DC 15) to reveal one significant secret about a target creature’s past alliances or unspoken pacts. The effect has a range of 30 feet and lasts for up to 1 hour per use."
      },
      {
        "title": "Forget Wearer's Identity",
        "rules": "The wearer temporarily loses their own identity, forgetting their name for one hour upon activation. This effect ends when the hour expires or if the wearer takes a short rest. The wearer regains knowledge of their name on completion of a short rest."
      }
    ],
    "levelRequirementReason": "Wearing the Fey Soul Pearl requires at least first-level spellcasting to effectively utilize its divination capabilities.",
    "vendorReason": "The Feywild has a direct connection to the hidden courts, making it a logical vendor for such an artifact.",
    "shippingDetail": "Feywild magic ensures swift delivery through Lakitu Drones; the pearl arrives within one day of order placement.",
    "usage": {
      "activation": "A bonus action to activate, with a concentration requirement for its duration.",
      "duration": "Up to 1 hour per use",
      "endsWhen": "The effect ends when the time expires or if concentration is lost.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the rarity and utility of the Fey Soul Pearl.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:11:15.878640+00:00",
    "aiReviewedAt": "2026-07-22T05:11:15.878640+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_soul_ribbon": {
    "id": "feywild_fey_soul_ribbon",
    "name": "Fey Soul Ribbon",
    "description": "The Fey Soul Ribbon is a shimmering ribbon woven from the essence of the feywild. When worn, it binds the wearer to the whims of a fey court and grants passage through hidden paths only visible to those who have trespassed. It triggers a random court event that can either bless or curse the bearer, and there's always a chance you might find yourself 'borrowed' by a mischievous fae for 10 minutes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Passage Through Hidden Paths",
      "Random Court Event"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Passage Through Hidden Paths",
        "rules": "The wearer gains temporary invisibility and can travel through hidden paths only known to those who have broken a rule. This effect lasts until the end of your next turn, requiring no action to activate."
      },
      {
        "title": "Random Court Event",
        "rules": "At the start of each long rest while wearing this ribbon, you must roll a d20. On a 1-5, you are 'borrowed' by a fey for 10 minutes, during which time you have disadvantage on all ability checks and saving throws."
      }
    ],
    "levelRequirementReason": "Wearing the ribbon requires a basic understanding of the feywild's rules and consequences.",
    "vendorReason": "The ribbon is crafted by the weavers of the feywild, ensuring it only sells to those who respect their domain.",
    "shippingDetail": "Ships within one week; delivery may be delayed for up to two days due to unpredictable fae interference.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "Until the end of your next turn",
      "endsWhen": "The effect ends at the start of your next turn",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as it offers a unique and limited utility without breaking game balance.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:11:17.967387+00:00",
    "aiReviewedAt": "2026-07-22T05:11:17.967387+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_soul_shard": {
    "id": "feywild_fey_soul_shard",
    "name": "Whispering Court Shard",
    "description": "A delicate shard of glassy essence, the Whispering Court Shard hums with the whispers of forgotten fey and offers fleeting glimpses into possible outcomes. Each use risks reality flickering or triggering a minor time anomaly; wield it carefully for insight, but be warned—its power comes at a cost. The shard is said to have been crafted from the soul of an ancient Fey court long lost in the mists of the Feywild.",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Glimpse Possible Outcomes",
      "Risk Minor Time Distortion"
    ],
    "vendor": "feywild",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Glimpse Possible Outcomes",
        "rules": "The wielder gains temporary visions into possible outcomes for a target action or decision. This lasts for 10 seconds and provides +2 to Intelligence (Insight) checks related to the visioned outcome. The shard can be used once per 24 hours."
      },
      {
        "title": "Risk Minor Time Distortion",
        "rules": "Upon using the shard, there is a 35% chance that reality flickers for 1d4+1 seconds, causing confusion and disorientation to all within hearing range. The wielder must succeed on a DC 12 Constitution saving throw or be affected by this time distortion as well."
      }
    ],
    "levelRequirementReason": "The shard's power is too great for novices; only those who have proven their worth should dare to use it.",
    "vendorReason": "As guardians of the Feywild, the fey themselves ensure that such powerful artifacts are handled responsibly and wisely.",
    "shippingDetail": "The shard is carefully packed in a spectral envelope to protect it during transit, ensuring its safe arrival.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds or until the wielder's next turn",
      "endsWhen": "The effect ends if the wielder uses another action on their next turn, is interrupted by an attack, or the shard is destroyed in combat.",
      "charges": "Unlimited, but can be used only once per 24 hours"
    },
    "priceReason": "The shard's rare and powerful nature justifies its high price; it is a valuable tool for those who seek to understand the fates of the Feywild.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T05:12:09.703276+00:00",
    "aiReviewedAt": "2026-07-22T05:12:09.703276+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_soul_ward": {
    "id": "feywild_fey_soul_ward",
    "name": "Fey Soul Ward of the Whispering Court",
    "description": "The Fey Soul Ward of the Whispering Court is a delicate circlet woven from threads of twilight and moonlight, worn to protect against the psychic prying of fey. It hums faintly with the echo of ancient court rituals, revealing subtle insights into the whimsical minds of nearby fae. When worn, it creates an imperceptible barrier that blocks any psychic attempts by fey to probe or influence you for 10 minutes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Blocks fey psychic intrusion",
      "Insight into fey thoughts"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Fey Intrusion Blockade",
        "rules": "Activates as a bonus action, providing a barrier that blocks all fey-induced psychic intrusions within 30 feet for 10 minutes. Ends if the wearer is no longer in contact with the feywild or if the wearer takes any damage."
      },
      {
        "title": "Fey Thought Insight",
        "rules": "Activates as a standard action, granting the wearer insight into nearby fey's thoughts, revealing one minor detail about their current state of mind. This effect is usable once per long rest and can be recharged by spending 1 hour in the Feywild."
      }
    ],
    "levelRequirementReason": "Requires proficiency with Arcana to wear effectively for its intended purpose.",
    "vendorReason": "The ward's mystical properties and origin from the Feywild make it a natural fit for the vendor who specializes in fey artifacts.",
    "shippingDetail": "Ships via Lakitu Drones, known for their reliable but slightly delayed deliveries due to fey interference.",
    "usage": {
      "activation": "Bonus action or standard action",
      "duration": "10 minutes or until blocked by damage",
      "endsWhen": "No longer in the Feywild or wearer takes damage",
      "charges": "Once per long rest, rechargeable with time spent in the Feywild"
    },
    "priceReason": "Balanced for its unique properties and rarity within the Feywild.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:11:28.766030+00:00",
    "aiReviewedAt": "2026-07-22T05:11:28.766030+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_tendrils": {
    "id": "feywild_fey_tendrils",
    "name": "Tendrils of the Whispering Court",
    "description": "Tendrils of the Whispering Court are living vines that twist and entangle foes, their roots a vibrant hue of twilight green. Drawn directly from the Feywild's heart, these tendrils sap movement speed and infuse targets with wild magic, causing unpredictable stat shifts. Severing them unleashes a burst of chaotic energy, but they also offer a way to anchor allies to a fixed point, preventing displacement for a brief time.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Entangle",
      "Chaotic Magic Infusion"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Entangle",
        "rules": "As an action, the user can entangle a creature within reach. The target's movement speed is reduced by half (50%) for 10 seconds. This effect ends if the tendrils are severed or if the target uses its action to break free."
      },
      {
        "title": "Chaotic Magic Infusion",
        "rules": "The user can use this ability as a bonus action, causing wild magic to surge through an entangled target for 10 seconds. The target gains advantage on saving throws against magical effects but suffers random stat boosts or debuffs chosen by the DM at the start of each round."
      }
    ],
    "levelRequirementReason": "Requires a character with some experience to wield these potent tendrils effectively.",
    "vendorReason": "The Feywild's natural bounty includes these magical vines, which the region's guardians sell to adventurers for their unique power.",
    "shippingDetail": "Due to the delicate nature of the tendrils, they are shipped in a specially designed container with cooling packs and must be handled carefully by trained couriers.",
    "usage": {
      "activation": "Action or Bonus Action depending on use",
      "duration": "10 seconds for each effect",
      "endsWhen": "Tendrils severed or target breaks free, or the duration ends",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The price reflects the rare material and magical properties of Feywild vines.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:11:31.163234+00:00",
    "aiReviewedAt": "2026-07-22T05:11:31.163234+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_tide_satchel": {
    "id": "feywild_fey_tide_satchel",
    "name": "Tide of the Fey’s Whisper",
    "description": "The Tide of the Fey’s Whisper is a satchel crafted from living moss and enchanted bark, woven by the whimsical weavers of the Feywild. As you fill it with magic energy from the fey realm, it absorbs the power, granting temporary immunity to magical backlash. However, this magic comes at a price; once filled, it may briefly summon a random Fey spirit within your mind, clouding your senses and forcing you to act on its whims for one round.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Absorbs Magic Backlash",
      "Fey Spirit Possession"
    ],
    "vendor": "feywild",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Absorbs Magic Backlash",
        "rules": "When activated, the satchel absorbs 1d4 points of magic damage each turn for up to 3 rounds. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Fey Spirit Possession",
        "rules": "Once filled with magic energy, a random Fey spirit may possess the wearer for one round (1 minute). The possessor grants the user temporary confusion, requiring a DC 15 Wisdom saving throw to end. On failure, the wearer must follow the spirit’s commands."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to wield due to the mystical and unpredictable nature of the Feywild.",
    "vendorReason": "Feywild specializes in items that harness the magic of their realm, making them the perfect vendor for this satchel.",
    "shippingDetail": "Delivered by spectral couriers who may delay delivery if interrupted by fey mischief.",
    "usage": {
      "activation": "Instantaneous activation; no action required.",
      "duration": "Up to 3 rounds per use.",
      "endsWhen": "Ends after 3 rounds or upon absorbing a critical hit.",
      "charges": "Unlimited charges, but the satchel must be refilled with magic energy from the Feywild."
    },
    "priceReason": "The rare and unpredictable nature of the item's effects, combined with its unique craftsmanship, justify a price of 1000 XP.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T05:11:59.700309+00:00",
    "aiReviewedAt": "2026-07-22T05:11:59.700309+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_token": {
    "id": "feywild_fey_token",
    "name": "Fey Token of the Shifting Courts",
    "description": "The Fey Token of the Shifting Courts is a small, pulsating orb that glows with the ethereal light of the Feywild. Its surface shifts between hues of lavender and emerald, reflecting the ever-changing nature of the fey realms. This token grants you a +2 bonus to any roll involving wild or fey magic. When thrown into a time loop, there’s a 50% chance it will reset the loop, with an additional 10% chance to trigger a random event from the Feywild. The orb is consumed after use.",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "+2 to wild and fey magic rolls",
      "Reset time loops (with fey event chance)"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Magic Roll Bonus",
        "rules": "When used, the Fey Token grants a +2 bonus to any roll involving wild or fey magic. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Time Loop Reset",
        "rules": "If thrown into a time loop, there’s a 50% chance for the loop to reset. Additionally, there’s a 10% chance for a random event from the Feywild to occur. The token is consumed after use."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 3 to harness the power and magic of the Feywild.",
    "vendorReason": "The Fey Token is crafted by the fey themselves, making it a natural fit for the Feywild vendor.",
    "shippingDetail": "Delivered with utmost secrecy and speed, ensuring the token arrives in pristine condition.",
    "usage": {
      "activation": "Instantaneous action when thrown into a time loop or used normally.",
      "duration": "Instantaneous effect; consumed after use.",
      "endsWhen": "The effect ends upon being consumed.",
      "charges": "Unlimited, as the token is replenished by the Feywild."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rarity and magical properties.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T05:12:11.915670+00:00",
    "aiReviewedAt": "2026-07-22T05:12:11.915670+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_wand": {
    "id": "feywild_fey_wand",
    "name": "Wand of the Courtly Mist",
    "description": "The Wand of the Courtly Mist is a slender staff hewn from the heartwood of a feywild tree, its bark shimmering with iridescent hues. When invoked, it weaves enchantments that mimic the whimsical magic of the Feywild, granting temporary boosts to abilities but at the cost of fleeting memories. Each use grants one random bonus effect, such as +1d6 to a dexterity check or advantage on a saving throw, yet after three activations, the wielder may temporarily forget a significant detail.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Random Bonus Effect",
      "Memory Loss Risk"
    ],
    "vendor": "feywild",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Random Bonus Effect",
        "rules": "The user gains one random temporary ability boost upon activation. This can include bonuses to checks, saving throws, or other abilities as determined by the DM. The effect is instantaneous and lasts until the end of the user's next turn."
      },
      {
        "title": "Memory Loss Risk",
        "rules": "After three uses, there is a 50% chance that one significant memory will be temporarily lost. This effect is instantaneous but can be prevented by completing an 18 Wisdom saving throw at the time of the third use."
      }
    ],
    "levelRequirementReason": "The wand's whimsical magic requires a certain degree of concentration and understanding, suitable for a level 3 character.",
    "vendorReason": "The feywild is the birthplace of this magical staff, making it only fitting that its denizens sell it to outsiders.",
    "shippingDetail": "Ships via the Void Drifters, a service known for its speed and reliability.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect is expended after one use or when the user's next turn ends.",
      "charges": "Recharge after three days of rest"
    },
    "priceReason": "Balanced for its daily recharge and limited uses, this wand offers a unique and powerful yet risky ability.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:11:44.758877+00:00",
    "aiReviewedAt": "2026-07-22T05:11:44.758877+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_wanderer_helm": {
    "id": "feywild_fey_wanderer_helm",
    "name": "Wanderer of the Winking Woods Helm",
    "description": "The Wanderer of the Winking Woods Helm is a helm forged from the twisted branches of ancient fey trees, its surface etched with runes that shimmer like starlight. This enchanted headpiece allows the wearer to perceive hidden paths in the Feywild and sense where reality bends. By focusing on the helm's glowing runes, you can detect nearby time loops or reality fractures within 50 feet, but only when you are within a Fey court’s domain.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Perceive Hidden Paths",
      "Detect Reality Fractures"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Perceive Hidden Paths",
        "rules": "Activate as a bonus action. While wearing this helm, you gain advantage on Perception checks in chaotic Feywild zones for 1 hour. The effect ends if you leave the Feywild or are no longer within sight of a Fey court."
      },
      {
        "title": "Detect Reality Fractures",
        "rules": "Activate as a reaction when you sense something amiss, such as a sudden distortion in time or space. You can detect nearby time loops or reality fractures within 50 feet, but only if you are currently within a Fey court. If successful (DC 15 Intelligence saving throw), the helm grants you and any allies within 30 feet temporary hit points equal to your proficiency bonus + your Wisdom modifier."
      }
    ],
    "levelRequirementReason": "The helm requires at least second-level spellcasting ability to fully appreciate its magical properties.",
    "vendorReason": "The Feywild vendor, known for their extensive knowledge of the fae and their domains, often stocks items that are deeply tied to their realm.",
    "shippingDetail": "Delivered by Shy Guy Smugglers, with a three-day delay due to Feywild travel restrictions. Ensure you have it within the next week before its magical properties diminish.",
    "usage": {
      "activation": "Bonus action (Perceive Hidden Paths), Reaction (Detect Reality Fractures)",
      "duration": "1 hour (Perceive Hidden Paths), Instantaneous (Detect Reality Fractures with successful save)",
      "endsWhen": "Leaving the Feywild or not within sight of a Fey court (Perceive Hidden Paths), Failure on saving throw (Detect Reality Fractures)",
      "charges": "Unlimited, but limited to once per day"
    },
    "priceReason": "The helm's rarity and its unique ability to interact with the Feywild make it a valuable yet balanced item for adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:12:17.989757+00:00",
    "aiReviewedAt": "2026-07-22T05:12:17.989757+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_warp_shawl": {
    "id": "feywild_fey_warp_shawl",
    "name": "Fey Warp Shawl of the Shifting Court",
    "description": "The Fey Warp Shawl of the Shifting Court is a shimmering garment woven from threads spun by fey weavers. Its fabric glows faintly with an otherworldly light, allowing its wearer to briefly phase through barriers and glimpse into the hidden realms of the Feywild. The shawl can create a fleeting portal, opening a small window where time seems to bend, offering moments of exploration that defy the known laws of space.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Phasing Barrier",
      "Feywild Portal"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Phasing Barrier",
        "rules": "The wearer can phase through Feywild barriers for a distance of up to 10 feet as an action. This effect lasts for 1 minute and does not require concentration."
      },
      {
        "title": "Feywild Portal",
        "rules": "Once per long rest, the shawl can create a temporary portal, opening a Feywild window that allows the wearer to teleport up to 30 feet to an adjacent Feywild zone. This effect is instantaneous and does not consume charges."
      }
    ],
    "levelRequirementReason": "This shawl requires a minimum level of 5 to harness its ethereal power, ensuring it remains balanced within the realm of adventuring.",
    "vendorReason": "Only those who understand and respect the Feywild would carry such an item, as it is crafted by the very weavers of the fey realms themselves.",
    "shippingDetail": "Delivered swiftly by Lakitu drones, ensuring the shawl arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute (Phasing Barrier), Instantaneous (Feywild Portal)",
      "endsWhen": "Ends naturally when duration expires or effect is interrupted",
      "charges": "Unlimited, but can only use Feywild Portal once per long rest"
    },
    "priceReason": "The balanced price reflects the rarity and unique abilities of the shawl, ensuring it remains a valuable yet attainable item for players.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:12:16.369592+00:00",
    "aiReviewedAt": "2026-07-22T05:12:16.369592+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fey_woven_satchel": {
    "id": "feywild_fey_woven_satchel",
    "name": "Fey Woven Satchel of Unstable Truths",
    "description": "The Fey Woven Satchel of Unstable Truths, a satchel bound by the delicate threads spun from a fey court's forgotten bargain, weaves truth and falsehood into its contents with each opening. Its unpredictable nature can reveal hidden truths or weave lies that momentarily cloud perception. The satchel may grant temporary invisibility for one round, leaving you unseen in the world, but beware—its touch can also instill confusion, causing a fleeting state of disorientation that clouds your senses.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reveals truth or falsehood",
      "Temporary invisibility"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Unstable Truths",
        "rules": "When opened, the satchel may reveal either a truth or a falsehood about the current situation. This effect is immediate and has no save DC. The item can only be used once per day."
      },
      {
        "title": "Invisibility",
        "rules": "The user gains temporary invisibility for 1 round (60 seconds). There is no saving throw involved, but this effect can only be activated once every 24 hours."
      }
    ],
    "levelRequirementReason": "This satchel requires a minimum level of 3 to use due to its unpredictable nature and the potential for disorientation.",
    "vendorReason": "The Feywild vendor is familiar with the threads used in crafting this satchel, ensuring authenticity and potency.",
    "shippingDetail": "Due to its fragile nature, the satchel must be delivered via Shy Guy Smugglers to ensure safe arrival.",
    "usage": {
      "activation": "A bonus action is required to open and use the satchel.",
      "duration": "The truth or falsehood effect lasts until the end of your next turn. Invisibility persists for 1 round (60 seconds).",
      "endsWhen": "The effects end when the duration expires or if the item is destroyed.",
      "charges": "Unlimited uses per day, but only once every 24 hours."
    },
    "priceReason": "This satchel's balanced price reflects its unpredictable nature and potential for confusion, making it a rare and valuable item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:12:40.992547+00:00",
    "aiReviewedAt": "2026-07-22T05:12:40.992547+00:00",
    "aiReviewVersion": 1
  },
  "feywild_feycourt_mirror": {
    "id": "feywild_feycourt_mirror",
    "name": "Feycourt Mirror of the Shifting Throne",
    "description": "The Feycourt Mirror of the Shifting Throne is a shattered mirror that reveals the true nature of one’s soul's alignment with the Feywild. Held in hand, it mirrors not just one’s reflection but the essence of the current court's magic, showing whether one's heart leans towards Fey, Chaotic, or Bound. When used while caught in a time loop, this mirror disrupts the loop, causing it to reset back to before your last action, granting you temporary immunity to such effects for that round.",
    "price": 1000,
    "icon": "📦",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Reflects the true nature of the user’s soul alignment",
      "Temporarily breaks time loops"
    ],
    "vendor": "feywild",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Soul Alignment Revelation",
        "rules": "When held, the mirror reveals whether your heart aligns with Fey, Chaotic, or Bound. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Time Loop Disruption",
        "rules": "If used while in a time loop, it resets the loop to before your last action. This effect is an immediate reaction and lasts for 1 round. You gain temporary immunity to further time loop effects during this duration."
      }
    ],
    "levelRequirementReason": "Requires significant arcane knowledge of the Feywild to wield effectively.",
    "vendorReason": "The mirror is a direct product of the Feywild’s courts and is known only through their influence.",
    "shippingDetail": "Ships via Rakasha spirit courier, arriving in 1d6 days with no tracking.",
    "usage": {
      "activation": "Instantaneous action when held and used.",
      "duration": "Until the end of your next turn or until you are no longer caught in a time loop.",
      "endsWhen": "The effect ends if you are removed from a time loop, or after one round has passed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price for a legendary item that offers both deep insight and practical utility.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T05:12:27.089064+00:00",
    "aiReviewedAt": "2026-07-22T05:12:27.089064+00:00",
    "aiReviewVersion": 1
  },
  "feywild_feycourt_scent": {
    "id": "feywild_feycourt_scent",
    "name": "Court of Whispers Perfume",
    "description": "Court of Whispers Perfume exudes a delicate fragrance that allows you to hear the ethereal whispers of Fey courts, providing glimpses into their hidden locations and triggering vivid memories from your last visit. The scent is as enchanting as it is fleeting; after half an hour, it causes mild disorientation, clouding perception and memory for a brief period. This perfume is crafted by the fey themselves, using ingredients from the heart of the Feywild, making it both a practical tool and a magical trinket.",
    "price": 1000,
    "icon": "🌿",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Hears Fey Court Whispers",
      "Triggers Memory Echo"
    ],
    "vendor": "feywild",
    "shippedBy": "Pipe Express",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Fey Court Whispers",
        "rules": "Upon application, you can hear the whispers of nearby Fey courts. This ability lasts for up to 1 hour, revealing hidden locations within a 30-foot radius. You gain advantage on Perception checks made to notice secret doors or hidden passages in this area. The effect is instantaneous and does not require an action."
      },
      {
        "title": "Memory Echo",
        "rules": "If you enter a Fey court while wearing the perfume, you are overwhelmed by vivid memories of your last visit there. You must succeed on a DC 15 Wisdom saving throw or be subjected to a momentary disorientation lasting for 1 minute. During this time, you have disadvantage on attack rolls and ability checks."
      }
    ],
    "levelRequirementReason": "The perfume's effects require a basic understanding of the Feywild to interpret its ethereal whispers correctly.",
    "vendorReason": "Only those who dwell in or closely interact with the Feywild would possess the knowledge and skills necessary to craft Court of Whispers Perfume.",
    "shippingDetail": "Due to its delicate nature, the perfume must be shipped via Pipe Express, which ensures swift delivery through Feywild tunnels.",
    "usage": {
      "activation": "Instantaneous effect upon application.",
      "duration": "1 hour for hearing whispers; 1 minute disorientation on memory echo.",
      "endsWhen": "Discontinues when the time expires or removed from your person.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The perfume's rarity and magical properties, combined with the complexity of its effects, justify a price of 1000 XP.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-22T05:13:17.317054+00:00",
    "aiReviewedAt": "2026-07-22T05:13:17.317054+00:00",
    "aiReviewVersion": 1
  },
  "feywild_feycourts_feywild_item_name": {
    "id": "feywild_feycourts_feywild_item_name",
    "name": "Whispering Court Mask",
    "description": "The Whispering Court Mask, crafted from the delicate petals of the Feywild's twilight bloom and enchanted by the whimsical Faeries, lets its wearer hear the faint murmurs of the Fey Courts. Each whisper may be a prophesy or a lie, testing one's perception and judgment. Wield it with caution, for those who wear it during a Fey Court ritual lose their ability to cast spells for 1d4+1 rounds, risking entanglement in the fey realm's capricious nature.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Hear Fey Whispers",
      "Whispers May Be Lies"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Hear Fey Whispers",
        "rules": "When worn, you gain a +2 bonus to Perception or Investigation checks related to hearing and understanding the whispers of the Fey Courts. This effect is active for 1 minute."
      },
      {
        "title": "Whispers May Be Lies",
        "rules": "Once per short rest while wearing the mask, you can attempt to discern if a Fey Court whisper is true or false. On a successful Wisdom (Insight) check with a DC of 15, you uncover the truth; otherwise, you are misled for 1d6 rounds."
      }
    ],
    "levelRequirementReason": "The mask's enchantments and its potential to mislead require a moderate understanding of perception and magic.",
    "vendorReason": "Feywild, being the realm where such masks are crafted, naturally sells them to those who wish to interact with the Fey Courts.",
    "shippingDetail": "The mask arrives wrapped in a layer of twilight mist to preserve its delicate enchantments.",
    "usage": {
      "activation": "Wear as equipment",
      "duration": "1 minute, or until removed",
      "endsWhen": "Removed or end of the duration",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from rare materials and enchanted by Faeries, this mask offers a unique but balanced interaction with the Feywild.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T05:13:00.522082+00:00",
    "aiReviewedAt": "2026-07-22T05:13:00.522082+00:00",
    "aiReviewVersion": 1
  },
  "feywild_feytide_ammunition": {
    "id": "feywild_feytide_ammunition",
    "name": "Feytide Ammunition",
    "description": "The Feytide Ammunition is a set of enchanted bolts forged from the wild magic of the Feywild, each one a conduit for chaotic energies that bend time and space. These bolts are said to have been crafted by the elusive fey creatures who inhabit the realm's most enigmatic groves. When fired, they unleash a burst of wild magic that shatters solid barriers with ease and leaves behind a lingering temporal echo, making them invaluable in any pursuit where tracking is paramount.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporal Echo",
      "Wild Magic Burst"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Echo",
        "rules": "When the bolt strikes its target, it leaves behind a brief afterimage of the target's last movement. This effect can be used to track targets in time loops or for quick recon. The echo lasts for 1 round and does not require an action to activate."
      },
      {
        "title": "Wild Magic Burst",
        "rules": "On impact, the bolt unleashes a burst of wild magic that deals 3d6 points of chaotic damage to the target. This effect has a range of 50 feet and lasts until the end of the creature's next turn."
      }
    ],
    "levelRequirementReason": "Even a novice can appreciate the utility of these enchanted bolts in dealing with time-based challenges.",
    "vendorReason": "The Feywild is known for its vast resources and mysterious artifacts, including this set of ammunition that enhances one's ability to navigate the realm's unique properties.",
    "shippingDetail": "Due to the volatile nature of these bolts, they are shipped only via Shy Guy Smugglers for their unparalleled discretion and reliability.",
    "usage": {
      "activation": "Instantaneous on firing",
      "duration": "Until the end of the target's next turn or until expended in a time loop",
      "endsWhen": "The bolt is used, expended, or destroyed upon impact",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its unique utility and rarity, this ammunition offers a significant strategic advantage at an appropriate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:12:57.300542+00:00",
    "aiReviewedAt": "2026-07-22T05:12:57.300542+00:00",
    "aiReviewVersion": 1
  },
  "feywild_feywhisper_shield": {
    "id": "feywild_feywhisper_shield",
    "name": "Feywhisper Shield",
    "description": "The Feywhisper Shield is a shimmering, iridescent barrier forged from the laughter of forgotten fae, its edges pulsing with colors that reflect the chaotic nature of the Feywild. When wielded, it deflects magical backlash and grants you a round of time-stasis, during which foes perceive their actions delayed by 1 second. Its shifting hues and enchanting hum make it a formidable yet ethereal shield for those who dare to venture into Faerie lands.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Deflects Magical Backlash",
      "Time-Stasis"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Deflects Magical Backlash",
        "rules": "When an attack or spell deals magical damage to you, the Feywhisper Shield reflects this damage back at the attacker for 1 round (up to once per long rest). The shield absorbs a maximum of 30d6 points of magical damage before expiring. The reflection has a save DC of 15."
      },
      {
        "title": "Time-Stasis",
        "rules": "Upon activation, the Feywhisper Shield grants you and allies within 5 feet a round of time-stasis (slow motion effect). During this duration, foes perceive their actions delayed by 1 second. The effect ends if an ally moves more than 5 feet away from you or if a critical hit is scored against any character in the area."
      }
    ],
    "levelRequirementReason": "This shield's complexity and magical properties require at least third level proficiency to wield effectively.",
    "vendorReason": "The Feywild vendor, with its deep ties to Faerie magic, offers this unique item.",
    "shippingDetail": "Delivered via a series of enchanted portals, the shield arrives swiftly but may cause disorientation for up to an hour upon initial use.",
    "usage": {
      "activation": "Reaction (used once per short or long rest)",
      "duration": "Instantaneous effect with one round duration",
      "endsWhen": "The reflection ends when it has absorbed its maximum damage, and time-stasis ends if the conditions are met",
      "charges": "Unlimited uses"
    },
    "priceReason": "This shield's rarity and unique properties justify its fair price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:13:09.722691+00:00",
    "aiReviewedAt": "2026-07-22T05:13:09.722691+00:00",
    "aiReviewVersion": 1
  },
  "feywild_feywild_flicker_ward": {
    "id": "feywild_feywild_flicker_ward",
    "name": "Flicker Ward of the Shifting Court",
    "description": "The Flicker Ward of the Shifting Court is a delicate amulet crafted from shimmering fae glass, imbued with the essence of the Feywild. It grants you a nimbleness that allows you to dodge attacks during time loops, and when worn on nonfey terrain, it briefly disorients your foes by shifting your form slightly. This ward is enchanted by the Jester’s Court and must be trickster’s whispered for its full power.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Feywild Shifting",
      "Nonfey Disorientation"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Feywild Shifting",
        "rules": "You have a 20% chance to dodge attacks during time loops. This effect lasts for the duration of any time loop you are within and ends when you are no longer in a time loop."
      },
      {
        "title": "Nonfey Disorientation",
        "rules": "When worn on nonfey terrain, you cause minor disorientation to your enemies by shifting form. Enemies within 5 feet must succeed on a DC 13 Dexterity saving throw or be stunned for 1 round. This effect ends if the wearer leaves the nonfey area."
      }
    ],
    "levelRequirementReason": "The complexity of enchanting the Flicker Ward and its ability to interact with time loops make it suitable only for characters at level 4 or higher.",
    "vendorReason": "The Feywild vendors are experts in crafting items that resonate with the essence of their domain, making them the ideal source for such an artifact.",
    "shippingDetail": "Due to its delicate nature, the Flicker Ward is shipped via Koopa Postal's express courier service, ensuring swift delivery and safe arrival.",
    "usage": {
      "activation": "Passive effect during time loops; active when on nonfey terrain.",
      "duration": "Instantaneous for time loop effects; lasts until you leave nonfey terrain.",
      "endsWhen": "No save DC or charges required; ends naturally upon leaving the respective condition.",
      "charges": "Unlimited"
    },
    "priceReason": "The item's enchantment, rarity, and unique abilities justify its price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T05:13:13.671396+00:00",
    "aiReviewedAt": "2026-07-22T05:13:13.671396+00:00",
    "aiReviewVersion": 1
  },
  "feywild_feywild_glass": {
    "id": "feywild_feywild_glass",
    "name": "Feywild Glass of Shifting Realities",
    "description": "The Feywild Glass of Shifting Realities is a cracked mirror, its facets shimmering with iridescent light from the Fey Courts. When held and focused upon, it reveals a fleeting glimpse into potential futures within the Feywild—whether you become an ethereal guide or are tasked to tend to a legendary tree. However, heed the glass's warning: some revelations are irrevocable, binding you to the Feywild's will for as long as their magic holds true.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals a potential Feywild outcome",
      "Temporary stat boost upon use"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fey Outcome Revelation",
        "rules": "When activated, the user must make a Wisdom saving throw. On a successful save, they see a brief vision of a future event in the Feywild related to their current alignment or role. The vision is permanent if the DM deems it significant enough."
      },
      {
        "title": "Temporary Stat Boost",
        "rules": "Upon use, the user gains a temporary bonus to one ability score of their choice (e.g., +1 to Dexterity). This effect lasts for 24 hours and can be used once per day."
      }
    ],
    "levelRequirementReason": "Even novices may seek guidance from the Feywild, though only those who have proven themselves worthy should handle this artifact.",
    "vendorReason": "The Feywild's own keepers and guardians are entrusted with such items to ensure they are used wisely.",
    "shippingDetail": "Ships via Lakitu Drones, delivered directly from the Feywild's heart. Ensure you have a clear path in your mind as it arrives.",
    "usage": {
      "activation": "A bonus action to activate and focus on the glass for its effects.",
      "duration": "Permanent until used; daily use limit applies.",
      "endsWhen": "The effect ends after one day, or if the user makes a failed saving throw.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The glass's rarity and Feywild origin justify its price, as it is a tool for those who wish to align with the Feywild's will.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T05:13:31.154866+00:00",
    "aiReviewedAt": "2026-07-22T05:13:31.154866+00:00",
    "aiReviewVersion": 1
  },
  "feywild_feywild_heart_wood": {
    "id": "feywild_feywild_heart_wood",
    "name": "Feywild Heartwood",
    "description": "The Feywild Heartwood is a gnarled trunk shaped like a heart, its bark shimmering with iridescent hues of the Feywild. When held, it pulses with ancient magic that grants insight into hidden paths and forgotten courts, allowing the wielder to discern invisible trails through the wilds or hear the whispers of the fey. The heartwood hums with life, a reminder of the wild magic that courses through the Feywild’s veins.",
    "price": 1000,
    "icon": "🌲",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Sees Invisibility",
      "Whispers from Forgotten Courts"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Sees Invisibility",
        "rules": "The wielder gains advantage on Wisdom (Perception) checks to detect hidden or invisible creatures within the Feywild for 10 minutes. This effect does not work outside of the Feywild."
      },
      {
        "title": "Whispers from Forgotten Courts",
        "rules": "Once per day, the wielder can hear a mental message from the wild magic court. The message is a single sentence that provides insight into the current situation or future events within the Feywild. This effect has no save DC and does not require action to use."
      }
    ],
    "levelRequirementReason": "This item’s magic requires some familiarity with the Feywild to properly harness.",
    "vendorReason": "The Heartwood is a revered item within the Feywild, known for its connection to the fey and their secrets.",
    "shippingDetail": "Delivered through secret routes that ensure the item arrives without detection by outsiders.",
    "usage": {
      "activation": "Passive effect when held within the Feywild; active use for ‘Whispers from Forgotten Courts’",
      "duration": "10 minutes (‘Sees Invisibility’); instantaneous (‘Whispers from Forgotten Courts’)",
      "endsWhen": "The effect ends naturally upon its duration or use limit, whichever comes first.",
      "charges": "Unlimited; the heartwood regenerates its effects after a day of rest within the Feywild."
    },
    "priceReason": "Balanced price reflects the item’s unique connection to the Feywild and its utility within its domain.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T05:13:54.109347+00:00",
    "aiReviewedAt": "2026-07-22T05:13:54.109347+00:00",
    "aiReviewVersion": 1
  },
  "feywild_feywild_rift_key": {
    "id": "feywild_feywild_rift_key",
    "name": "Feywild Rift Key",
    "description": "The Feywild Rift Key is an intricately carved iron key with runes of forgotten fey languages etched into its surface. This relic opens portals to the most chaotic and unpredictable courts of the Feywild, each offering a unique challenge or boon. When used, it conjures a portal that lasts for one round, allowing the user to step into a realm where time may loop, memories distort, or feasts curse all who partake.",
    "price": 1000,
    "icon": "🏰",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Court Rift",
      "Fey Echo"
    ],
    "vendor": "feywild",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Court Rift",
        "rules": "Activates as an action. Opens a rift to a random Fey court for one round. The court may be a time loop, memory palace, or cursed feast. If the court is a time loop, the user must survive until the loop ends or choose to exit. Thereafter, the user gains +2 to all rolls against fey creatures while inside the court."
      },
      {
        "title": "Fey Echo",
        "rules": "The user gains +1d4 temporary hit points for each round spent within a Fey court, up to a maximum of 5 rounds. This effect ends when the user exits the court or the key's use is exhausted."
      }
    ],
    "levelRequirementReason": "Requires at least third level to handle the chaotic nature of the Feywild courts.",
    "vendorReason": "The Feywild is the source and home of this key, naturally making it available from its denizens.",
    "shippingDetail": "Ships via a Rakasha courier who will deliver the key directly to your door.",
    "usage": {
      "activation": "Action",
      "duration": "One round per use",
      "endsWhen": "The portal closes or the user chooses to exit",
      "charges": "Unlimited, but only one use per day"
    },
    "priceReason": "Balanced as a rare item that can offer significant combat advantages against fey creatures.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T05:13:29.382472+00:00",
    "aiReviewedAt": "2026-07-22T05:13:29.382472+00:00",
    "aiReviewVersion": 1
  },
  "feywild_feywild_spiral_shard": {
    "id": "feywild_feywild_spiral_shard",
    "name": "Feywild Spiral Shard",
    "description": "The Feywild Spiral Shard is a fractured crystal shard etched with runes of forgotten magic. Held in one’s hand, it whispers the names of lost patrons and distorts time around the wielder, causing all nearby creatures to move at double speed for a brief moment. Randomly, it recalls a memory of a past encounter with a Fey court, offering wisdom or confusion. The shard emits a soft hum that can cause nearby creatures to lose their next action if fate is not kind.",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Time Distortion",
      "Memory Echo"
    ],
    "vendor": "feywild",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Time Distortion",
        "rules": "When activated as an action, the wielder and all creatures within a 10-foot radius move at double speed for 1 round. This effect ends if any creature takes damage or when the duration expires."
      },
      {
        "title": "Memory Echo",
        "rules": "Randomly triggers once per long rest, causing the wielder to recall a memory from an encounter with a Fey court. The DM narrates this memory and its implications. No save is required."
      }
    ],
    "levelRequirementReason": "The shard's magic requires a level of at least 5 to control its effects without causing unintended chaos.",
    "vendorReason": "Feywild curates rare artifacts from the fey realm, and this shard is one such relic.",
    "shippingDetail": "Delivered via a Rakasha spirit walk, ensuring safe arrival in 24 hours.",
    "usage": {
      "activation": "Action",
      "duration": "1 round",
      "endsWhen": "Any creature takes damage or the duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The shard's magic is powerful but not overpowered, making it a rare and valuable item.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T05:13:33.040581+00:00",
    "aiReviewedAt": "2026-07-22T05:13:33.040581+00:00",
    "aiReviewVersion": 1
  },
  "feywild_feywild_tide_essence": {
    "id": "feywild_feywild_tide_essence",
    "name": "Tide Essence of the Feywild Heart",
    "description": "The Tide Essence of the Feywild Heart, a vial containing swirling liquid that mirrors the heart of the Feywild’s temporal pulse, grants temporary resistance to Fey magic and unleashes wild magic in bursts. Drink it and feel the essence surge through your veins, granting you +1d6 wild magic damage per round for 3 rounds, but at a cost: there's a 50% chance each round that an emotional overload will strike—either losing one action or becoming disoriented until the start of your next turn. The heart of the Feywild beats within this vial, making it both a gift and a curse.",
    "price": 1000,
    "icon": "💧",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Wild Magic Burst",
      "Fey Resistance"
    ],
    "vendor": "feywild",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Wild Magic Burst",
        "rules": "Each round while under the effect of Tide Essence, you deal +1d6 wild magic damage to all creatures within 5 feet. There is a 50% chance each round that an emotional overload will occur: either lose one action or become disoriented until your next turn."
      },
      {
        "title": "Fey Resistance",
        "rules": "You gain temporary resistance to Fey magic for 1 round, reducing the damage from such effects by half. This effect does not stack with other forms of resistance."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 5 to handle the essence without succumbing too quickly to its wild influence.",
    "vendorReason": "The Feywild source this essence from their core and sell it as a rare, potent item for those who can wield its power responsibly.",
    "shippingDetail": "Ships via Boo Spectral Mail, which ensures quick delivery but requires the recipient to be within the Feywild’s borders.",
    "usage": {
      "activation": "Consume as a bonus action",
      "duration": "1 round per use",
      "endsWhen": "The effect ends at the start of your next turn regardless of remaining duration, or if consumed again before then.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced as a rare item with potent effects that require careful handling and a minimum level requirement.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T05:13:58.664908+00:00",
    "aiReviewedAt": "2026-07-22T05:13:58.664908+00:00",
    "aiReviewVersion": 1
  },
  "feywild_feywild_ward": {
    "id": "feywild_feywild_ward",
    "name": "Feywild Ward of the Unseen Court",
    "description": "The Feywild Ward of the Unseen Court, a shimmering sentinel woven from threads of starlight and faerie dust, protects its bearer from the capricious magic of the Feywild realm. When activated, it momentarily grounds your senses in the present, preventing the tangle of time loops that plague the fey realms. Nearby fey creatures grow wary and may flee when this ward is used in a public court of their kind.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Temporal Shield",
      "Fey Avoidance"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Shield",
        "rules": "When activated as a reaction, the Feywild Ward grants the wearer immunity to time loop effects for three rounds. This effect does not stack with similar protections."
      },
      {
        "title": "Fey Avoidance",
        "rules": "While wearing this ward, you have advantage on saving throws against fey illusions and can reduce their chance of success by 25%. Additionally, if activated within a public court of faeries or other fey creatures, nearby fey may flee."
      }
    ],
    "levelRequirementReason": "This ward is crafted with simple enchantments to protect even the least experienced adventurers.",
    "vendorReason": "The Feywild marketplaces are known for their wares that protect against fey magic, and this item is a staple there.",
    "shippingDetail": "Delivered with special care by the Shy Guys, who ensure the ward's enchantments remain intact during transit.",
    "usage": {
      "activation": "Reaction to prevent time loop effects; bonus action to activate Fey Avoidance in public courts.",
      "duration": "Temporal Shield lasts for three rounds; Fey Avoidance is continuous as long as you are in a public court.",
      "endsWhen": "The ward's effect ends when the duration expires or it is destroyed.",
      "charges": "Unlimited, but requires concentration to maintain effects within public courts."
    },
    "priceReason": "This ward strikes a balance between its protective and avoidance abilities, making it a valuable tool for adventurers navigating the treacherous fey realms without breaking the bank.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T05:13:59.935000+00:00",
    "aiReviewedAt": "2026-07-22T05:13:59.935000+00:00",
    "aiReviewVersion": 1
  },
  "feywild_flickering_bard_rod": {
    "id": "feywild_flickering_bard_rod",
    "name": "Flickering Bard Rod",
    "description": "The Flickering Bard Rod hums with a vibrant, shifting light that dances between hues of twilight and starlight. This slender rod is crafted from the bark of ancient fey trees, imbued with the essence of the Feywild. When wielded by a bard, it can warp reality in unpredictable ways, perfect for duels within the fey courts or chaotic ambushes. Its magic grants +2 to all skill checks involving deception and illusion, and causes nearby enemies to stutter and falter in their actions, creating moments of disarray.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Deception Boost",
      "Feywild Stutter"
    ],
    "vendor": "feywild",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Deception Boost",
        "rules": "When the bard activates the Flickering Bard Rod as a bonus action, it grants +2 to all skill checks involving deception or illusion for 1 minute. This effect can be used once per long rest."
      },
      {
        "title": "Feywild Stutter",
        "rules": "The rod causes nearby enemies within 30 feet to stutter in their actions as if affected by the Slowed condition for 1 round (up to a maximum of three targets). This effect has no save DC and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "This item is crafted from ancient feywood, requiring a bard of at least fifth level to wield its magic effectively.",
    "vendorReason": "The Feywild vendor supplies unique artifacts that reflect the whimsical and unpredictable nature of their realm.",
    "shippingDetail": "Ships via spectral courier, ensuring safe delivery through the mists of the Feywild.",
    "usage": {
      "activation": "Bonus action to activate; once per long rest for Deception Boost and once per short rest for Feywild Stutter.",
      "duration": "1 minute (Deception Boost) or 1 round (Feywild Stutter)",
      "endsWhen": "Ends when the bard stops concentrating on it, or if the bard falls unconscious.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The rod's rarity and the complexity of its magical properties justify a price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:14:31.144070+00:00",
    "aiReviewedAt": "2026-07-22T05:14:31.144070+00:00",
    "aiReviewVersion": 1
  },
  "feywild_flickering_talisman": {
    "id": "feywild_flickering_talisman",
    "name": "Flickering Talisman of Echoing Steps",
    "description": "The Flickering Talisman of Echoing Steps hums with the restless energy of the Feywild, its iridescent surface flickering between shades of violet and indigo. Crafted from enchanted crystal harvested deep within the wildwood, it grants temporary immunity to time-loop effects and allows you to rewind reality for a brief moment, returning you to your last stable step. The talisman's erratic glow signals the presence of Feywild distortions that could tear apart the fabric of space-time at any moment.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Time-Loop Immunity",
      "Rewind Reality"
    ],
    "vendor": "feywild",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Time-Loop Immunity",
        "rules": "The wearer gains temporary immunity to time-loop effects and reality-shifting spells for a short duration. This effect lasts until the end of your next turn after activation, providing a brief respite from chaotic realities."
      },
      {
        "title": "Rewind Reality",
        "rules": "Activate as an action to rewind 10 seconds of recent events. You can use this ability once per long rest. The rewinding causes minor disorientation and confusion for you until the end of your next turn, as your perception is slightly altered by Feywild magic."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to harness the unstable energy of the talisman.",
    "vendorReason": "The talismans are crafted and sold by Feywild artisans who understand the delicate balance of time and reality in their realm.",
    "shippingDetail": "Delivered via spectral courier with a slight delay to ensure the talisman's magic remains intact.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of your next turn",
      "endsWhen": "The effect ends naturally at the conclusion of your next turn",
      "charges": "Once per long rest"
    },
    "priceReason": "Balanced price reflects the rare and unstable magic required to craft this talisman.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:14:08.924974+00:00",
    "aiReviewedAt": "2026-07-22T05:14:08.924974+00:00",
    "aiReviewVersion": 1
  },
  "feywild_flower_of_twisted_time": {
    "id": "feywild_flower_of_twisted_time",
    "name": "Flower of Twisted Time",
    "description": "The Flower of Twisted Time is a pulsing violet bloom that thrives only in realms where time bends and reality warps. Its nectar, when consumed, allows the drinker to momentarily halt the flow of seconds, creating a pocket of stillness amidst chaos. However, as the world adjusts, a random event unfolds within 10 seconds—either a beneficial surprise or an unforeseen mishap. This delicate flower is cherished in the Feywild’s shifting courts, where it symbolizes the ephemeral nature of time.",
    "price": 1000,
    "icon": "🌿",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporal Stasis",
      "Echoing Event"
    ],
    "vendor": "feywild",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporal Stasis",
        "rules": "As a bonus action, the drinker can consume the nectar to pause time for up to 1 round. During this time, no creature or effect can move, cast spells, or perform actions. This effect ends when the drinker uses their next turn."
      },
      {
        "title": "Echoing Event",
        "rules": "At the end of the first round after consuming the nectar, a random event occurs within 10 seconds. The DM rolls on a d20 to determine if the event is beneficial (DC 15) or detrimental (DC 10)."
      }
    ],
    "levelRequirementReason": "Consuming this flower requires a certain understanding of temporal magic, accessible only to those who have reached at least third level.",
    "vendorReason": "The Feywild is the birthplace of such flora and holds it in high regard for its magical significance.",
    "shippingDetail": "Ships under cover of night to ensure safe delivery, as light can disrupt the flower's delicate balance.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 1 round",
      "endsWhen": "The drinker uses their next turn or a disruptive effect ends it early",
      "charges": "Unlimited"
    },
    "priceReason": "This flower's rarity and the risk of its unpredictable effects justify its moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:14:15.953033+00:00",
    "aiReviewedAt": "2026-07-22T05:14:15.953033+00:00",
    "aiReviewVersion": 1
  },
  "feywild_fungal_blood_amber": {
    "id": "feywild_fungal_blood_amber",
    "name": "Fungal Blood Amber",
    "description": "Fungal Blood Amber, a translucent gem pulsing with crimson light, is said to have been crafted from the heart of a fallen princess in the Whispering Fungi’s embrace. This eerie relic warps reality when touched, causing the air around it to shimmer and distort. When consumed, it grants temporary immunity to mind control but may unleash vivid hallucinations of one's deepest regrets, leaving the imbiber lost in a swirling maelstrom of memory.",
    "price": 1000,
    "icon": "🍄",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Immunizes against mind control",
      "Causes vivid personal regret hallucinations"
    ],
    "vendor": "feywild",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mind Control Immunity",
        "rules": "When consumed, the user gains temporary immunity to all mind control effects for a duration of 10 minutes. This effect can only be used once per long rest."
      },
      {
        "title": "Personal Regret Hallucinations",
        "rules": "Upon consumption, the user is subjected to vivid hallucinations that reflect their deepest personal regrets. These visions last for 30 seconds and do not require a saving throw but may cause the user to become incapacitated due to shock or trauma."
      }
    ],
    "levelRequirementReason": "This item can be consumed by any level 1 character, providing immediate utility without demanding advanced combat capabilities.",
    "vendorReason": "The Feywild is known for its enigmatic and otherworldly relics, making it a fitting source for this mystical amber.",
    "shippingDetail": "Shipped via the Rakasha's ethereal plane courier service, ensuring swift delivery through the Feywild’s portals.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "10 minutes of immunity to mind control; visions last for 30 seconds",
      "endsWhen": "Effect duration ends or user becomes incapacitated by hallucinations",
      "charges": "One use per long rest"
    },
    "priceReason": "The item’s rarity, origin from the Feywild, and unique effects justify a price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T05:14:29.491149+00:00",
    "aiReviewedAt": "2026-07-22T05:14:29.491149+00:00",
    "aiReviewVersion": 1
  },
  "feywild_glimmering_ambrosia": {
    "id": "feywild_glimmering_ambrosia",
    "name": "Glimmering Ambrosia",
    "description": "Glimmering Ambrosia, a shimmering nectar that glows faintly like starlight in the murk of the Whispering Wells, is said to be sipped directly from the Feywild's hidden courts. Drinking this ethereal essence rewinds time for one round to your last action, allowing you to correct minor mistakes or seize fleeting opportunities. For a moment, you catch a glimpse into the Feywild’s veiled realms, where the trees whisper secrets and the air hums with ancient magic, granting you a brief vision of hidden courts and their ethereal inhabitants.",
    "price": 1000,
    "icon": "🍺",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Rewind Time",
      "Feywild Vision"
    ],
    "vendor": "feywild",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Rewind Time",
        "rules": "As an action, you can rewind time for one round to your last action. This effect has no range or area and is instantaneous. You regain the use of your last action, but any damage or effects that occurred in that round are negated. There is no saving throw against this effect."
      },
      {
        "title": "Feywild Vision",
        "rules": "For one round after drinking Glimmering Ambrosia, you gain the ability to perceive hidden Feywild courts and their inhabitants. This vision lasts for 1 minute. You can see through illusions and observe the delicate magic that binds these hidden realms, but you cannot interact with them directly."
      }
    ],
    "levelRequirementReason": "This item's power requires a character to be at least level 3 to effectively utilize its time-reversal and vision abilities.",
    "vendorReason": "The Feywild is the source of this nectar, and only those who understand its mysteries can procure it.",
    "shippingDetail": "Due to the fragile nature of Glimmering Ambrosia, it must be shipped in specially insulated containers to ensure it arrives at its destination in perfect condition.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for Rewind Time; 1 minute for Feywild Vision",
      "endsWhen": "The effects expire naturally after their respective durations or if the drinker takes any damage.",
      "charges": "One use per day"
    },
    "priceReason": "This nectar is rare and requires significant resources to procure, making it a valuable but not overpowered item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:15:26.219300+00:00",
    "aiReviewedAt": "2026-07-22T05:15:26.219300+00:00",
    "aiReviewVersion": 1
  },
  "feywild_hedge_maze_key": {
    "id": "feywild_hedge_maze_key",
    "name": "Hedge Maze Key",
    "description": "The Hedge Maze Key is a delicate silver token, intricately etched with symbols of the Feywild. It opens the enigmatic labyrinth and can be enchanted to reveal hidden paths within. Carrying it allows you to teleport through the thorned maze, while nearby enemies may become momentarily disoriented by its arcane power. This key must be held to activate its magic, making navigation both a challenge and a reward for those who dare enter.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌿",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Teleports to nearest hedge maze entrance",
      "Causes minor confusion among enemies in the maze"
    ],
    "vendor": "feywild",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Maze Teleportation",
        "rules": "When the key is held, the wielder can teleport instantly to the nearest entrance of a hedge maze. This effect has a duration of instantaneous and requires no saving throw."
      },
      {
        "title": "Minor Confusion",
        "rules": "Any creature within 30 feet of the wielder in a hedge maze must succeed on a Wisdom saving throw (DC 12) or become confused for 1 minute. This effect can only be triggered once per day, and it ends if the key is lost."
      }
    ],
    "levelRequirementReason": "This key requires no level to activate, as its magic is accessible to all who understand its purpose within the Feywild.",
    "vendorReason": "The Feywild vendor sells this key because it is a symbol of their realm's enchantments and helps travelers navigate the labyrinthine paths.",
    "shippingDetail": "Transit through the maze itself, ensuring the key arrives intact for its next adventure.",
    "usage": {
      "activation": "Held in hand to activate teleportation; held and spoken with a command word to trigger confusion among enemies.",
      "duration": "Instantaneous teleportation; confusion lasts until the duration ends or the effect is dispelled.",
      "endsWhen": "The key is lost, destroyed, or its daily use limit is reached.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The price reflects its rarity and utility in navigating the maze, as well as its enchantment potential.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T05:14:43.221580+00:00",
    "aiReviewedAt": "2026-07-22T05:14:43.221580+00:00",
    "aiReviewVersion": 1
  },
  "feywild_illusion_generator": {
    "id": "feywild_illusion_generator",
    "name": "Feywild Illusion Generator (Toy)",
    "description": "The Feywild Illusion Generator is a whimsical toy crafted by the elusive Fey Tricksters, whose magic weaves illusions that dance and shift like living light. Its intricate gears and enchanted springs hum with the energy of the Feywild itself, capable of producing lifelike specters that playfully interact with their environment for up to an hour at a time. It's a beloved item among courtiers and jesters who use it to entertain guests or deceive foes in subtle ways.",
    "price": 1000,
    "icon": "🎭",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Generates Lifelike Illusions",
      "Limited Uses per Day"
    ],
    "vendor": "illusion_shop",
    "shippedBy": "Mirage Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Generate Illusion",
        "rules": "The generator can produce an illusion within a 100-foot radius. The illusion lasts for up to one hour, during which time it interacts with its surroundings in a manner consistent with the environment's setting."
      },
      {
        "title": "Daily Uses",
        "rules": "The toy has five uses per day. Once depleted, it must be recharged by spending an hour of quiet meditation and focus. The illusion is dispelled if the generator is damaged or its daily limit is reached."
      }
    ],
    "levelRequirementReason": "This toy is designed for a wide audience, from young adventurers to seasoned court jesters.",
    "vendorReason": "The illusion shop specializes in magical curiosities and toys that delight and astonish their patrons.",
    "shippingDetail": "Ships via the fastest mirage winds, ensuring swift delivery to even the most distant lands.",
    "usage": {
      "activation": "A bonus action is required to activate the generator.",
      "duration": "The illusion lasts up to one hour or until disrupted.",
      "endsWhen": "The illusion ends if its uses are exhausted or it is damaged.",
      "charges": "Five daily uses, recharged after a full day of meditation."
    },
    "priceReason": "This toy's price reflects the Feywild magic and craftsmanship required to create such an enchanting device.",
    "priceOriginal": 520000,
    "priceReviewedAt": "2026-07-22T05:14:57.375610+00:00",
    "aiReviewedAt": "2026-07-22T05:14:57.375610+00:00",
    "aiReviewVersion": 1
  },
  "feywild_item_name": {
    "id": "feywild_item_name",
    "name": "Heartbeat of the Unbound",
    "description": "The Heartbeat of the Unbound is a translucent, pulsating crystal that hums with the chaotic energy of the Feywild. When worn, it resonates with the emotional and temporal shifts around you, revealing hidden paths in the labyrinthine forests or lost moments in time. Standing still allows you to sense when a time loop has formed nearby, potentially resetting it for a brief moment, granting insight into otherwise hidden court rituals.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Detects Emotional Resonance",
      "Identifies Time Loops"
    ],
    "vendor": "feywild",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Detects Emotional Resonance",
        "rules": "When worn, the crystal allows you to sense emotional shifts in nearby fey creatures within a 30-foot radius. This effect is passive and does not require action."
      },
      {
        "title": "Identifies Time Loops",
        "rules": "By standing still for at least one round, you can detect if a time loop has formed around you. If it has, the loop resets for 1 round (6 turns). This effect is instantaneous and requires no action to activate."
      }
    ],
    "levelRequirementReason": "The crystal's sensitivity to Feywild energies and temporal anomalies demands a certain level of magical awareness.",
    "vendorReason": "The Heartbeat of the Unbound is a product of the Feywild, crafted by its own creatures for those who seek to understand their realm better.",
    "shippingDetail": "The item is shipped via special courier, ensuring it arrives in pristine condition and fully charged.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Permanent until removed or broken.",
      "endsWhen": "Effect ends if the crystal breaks or is removed from your person.",
      "charges": "Unlimited"
    },
    "priceReason": "The Heartbeat of the Unbound represents a rare and valuable tool for navigating the complexities of the Feywild, making it worth its weight in XP.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-22T05:14:57.553387+00:00",
    "aiReviewedAt": "2026-07-22T05:14:57.553387+00:00",
    "aiReviewVersion": 1
  },
  "feywild_item_name_here": {
    "id": "feywild_item_name_here",
    "name": "Trickster Scepter of Twisted Time",
    "description": "The Trickster Scepter of Twisted Time is a staff forged from the whimsical essence of the Feywild, its surface adorned with intricate runes that shimmer like starlight. This enchanted tool allows you to bend time itself, granting moments of temporal freedom. With it, you can step out of the flow of time for 1 minute per use and skip through three short intervals of time daily, causing minor confusion in your allies during each skip but ensuring your own actions remain seamless.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporal Bending",
      "Time Skip"
    ],
    "vendor": "feywild",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Bending",
        "rules": "When you activate the scepter, you become immune to time loops for 1 minute. You can use this ability once per short or long rest."
      },
      {
        "title": "Time Skip",
        "rules": "You may skip through three intervals of time each day. During each skip, minor confusion affects your allies within 30 feet of you for 1 minute. You regain these skips after completing a long rest."
      }
    ],
    "levelRequirementReason": "The scepter requires a 5th level character to manage its temporal effects without overwhelming their concentration.",
    "vendorReason": "The Pony Nobility, masters of the Feywild, crafted this scepter to grant time-bending abilities that are both useful and balanced within their realm's delicate balance.",
    "shippingDetail": "Ships via Warp Whistle Transit, known for their swift yet reliable deliveries through the Feywild’s ethereal paths.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute per use",
      "endsWhen": "The effect ends when you complete a short or long rest",
      "charges": "Uses per day are regained after completing a long rest"
    },
    "priceReason": "Balanced at 1000 XP, this scepter offers powerful but balanced time manipulation abilities suitable for its rarity and intended use.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T05:15:41.524715+00:00",
    "aiReviewedAt": "2026-07-22T05:15:41.524715+00:00",
    "aiReviewVersion": 1
  },
  "feywild_loom_of_fey_winds": {
    "id": "feywild_loom_of_fey_winds",
    "name": "Loom of Fey Winds",
    "description": "The Loom of Fey Winds is a delicate, wind-swept loom crafted from the ethereal threads of the Feywild. Its wooden frame glows faintly with the colors of twilight, and its strings are woven from the very essence of time and chaos. When activated, it allows the user to 'reweave' reality, resetting a scene by 3 seconds or creating entirely new sequences, all in perfect harmony with the whimsical winds of the Feywild.",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Time Rewind",
      "Chaos Weave"
    ],
    "vendor": "feywild",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Time Rewind",
        "rules": "As a bonus action, the user can rewind time by 3 seconds. This effect resets all actions and decisions made since the last use of this ability within that timeframe. The ability can be used once per short or long rest."
      },
      {
        "title": "Chaos Weave",
        "rules": "As an action, activate the loom to introduce a random chaotic alteration affecting up to two enemy abilities for one round. This effect has a 50% chance of success and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Requires proficiency with Feywild magic to properly harness the loom's unpredictable forces.",
    "vendorReason": "The Loom is a staple of the Feywild, often crafted by its weavers and sold among those who dwell in harmony with nature’s capricious heart.",
    "shippingDetail": "Ships via the Void Drifter Relay; delivery can take up to one week due to the mystical nature of Feywild travel.",
    "usage": {
      "activation": "Bonus action or action (for Chaos Weave)",
      "duration": "Instantaneous for Time Rewind, one round for Chaos Weave",
      "endsWhen": "On use; ends immediately if the user is incapacitated or dies",
      "charges": "Unlimited, but each long rest resets the ability's cooldown"
    },
    "priceReason": "Reflects its rarity and the complex magic required to craft such a versatile item.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T05:15:43.610924+00:00",
    "aiReviewedAt": "2026-07-22T05:15:43.610924+00:00",
    "aiReviewVersion": 1
  },
  "feywild_looming_fey_hive": {
    "id": "feywild_looming_fey_hive",
    "name": "Looming Fey Hive",
    "description": "The Looming Fey Hive looms large, its shifting tendrils and iridescent carapace a testament to the wild magic that binds it. This hive is not just a home but also a vessel of ancient Fey power; as you approach, it expands in response to your presence, granting temporary dominion over nearby fey. However, if you ever abandon it or fail to maintain its core, it will unleash a tempest of stinging wasps that can turn even the most seasoned adventurers into targets of its fury.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐝",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Grants +2 to all rolls in Feywild terrain",
      "Can be used to summon a temporary Fey court"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Fey Control",
        "rules": "Activate as an action. The hive expands for 10 minutes, granting you advantage on perception checks within 60 feet and allowing you to use a bonus action each round to command any Fey creature within your reach, provided it doesn't exceed your Charisma modifier in challenge rating."
      },
      {
        "title": "Court Summoning",
        "rules": "Activate as an action. For the next 1 hour, you can summon and control a temporary Fey court composed of fey creatures whose total CR does not exceed your level +2. These creatures are under your command for the duration."
      }
    ],
    "levelRequirementReason": "Requires 4th level to channel the ancient magic needed to maintain and command such a powerful Fey construct.",
    "vendorReason": "The Feywild vendor, known for dealing in rare magical items, carries this item due to its unique power within their realm.",
    "shippingDetail": "Special delivery service ensures the hive arrives intact and ready for use.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Fey Control: 10 minutes, Court Summoning: 1 hour",
      "endsWhen": "The duration ends when you lose concentration (as if concentrating on a spell), the hive is abandoned, or destroyed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Reflects its powerful abilities within Feywild terrain and its unique Fey origin.",
    "priceOriginal": 700,
    "priceReviewedAt": "2026-07-22T05:16:11.996873+00:00",
    "aiReviewedAt": "2026-07-22T05:16:11.996873+00:00",
    "aiReviewVersion": 1
  },
  "feywild_looming_lullaby": {
    "id": "feywild_looming_lullaby",
    "name": "Looming Lullaby of the Shifting Court",
    "description": "The Looming Lullaby of the Shifting Court is a crystal flute etched with Feywild runes that whisper tales of forgotten realms. When played, it sends nearby creatures into a trance-like state where they either repeat a single action in an endless loop or are temporarily lost to their own memories. Only within the heart of the Feywild can its haunting melody resonate fully, and those who hear it must brace for a momentary loss of focus and purpose.",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Trance-like State",
      "Memory Loop"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Trance-like State",
        "rules": "When played within the Feywild, this lullaby causes one creature to enter a trance for 1 round. The creature is dazed and cannot take actions or move. This effect ends if the creature takes any action other than remaining still."
      },
      {
        "title": "Memory Loop",
        "rules": "Additionally, when played in the Feywild, it grants you the ability to create a 10-foot radius area around yourself where creatures within the area must succeed on a DC 13 Wisdom saving throw or enter a memory loop for 2 rounds. In this state, they are unable to recall anything that transpired during their looped actions."
      }
    ],
    "levelRequirementReason": "The complexity of controlling the lullaby's effects and navigating the Feywild require a minimum character level.",
    "vendorReason": "The flute’s origins in the Feywild ensure it only finds its way to those who understand its power.",
    "shippingDetail": "Due to the flute's delicate nature and the need for proper conditions, it is shipped with specialized care by Shy Guy Smugglers.",
    "usage": {
      "activation": "Playing the lullaby as a bonus action within the Feywild activates its effects.",
      "duration": "Each effect lasts until the beginning of your next turn unless interrupted or dispelled.",
      "endsWhen": "The creature takes any action other than remaining still, or the caster is no longer in the Feywild.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect its unique abilities and rarity within the Feywild.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:15:54.402287+00:00",
    "aiReviewedAt": "2026-07-22T05:15:54.402287+00:00",
    "aiReviewVersion": 1
  },
  "feywild_loop_bangle": {
    "id": "feywild_loop_bangle",
    "name": "Loop Bangle of Unending Thirst",
    "description": "The Loop Bangle of Unending Thirst, a cold iron bauble pulsating with wild magic, distorts time in its wearer’s grasp. Every thirty seconds, it forces the user to relive the last half-minute, repeating their actions ad infinitum until they break free or exhaust its three uses. This bangle is said to have been forged from the very essence of the Feywild, where it feeds on the chaos and unpredictability that define its origin.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Time Distortion",
      "Wild Magic Amplification"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Time Distortion",
        "rules": "Activating this bangle causes a time loop, repeating the wearer’s actions from thirty seconds prior. The effect lasts until the user stops wearing it or uses up all three charges within a session."
      },
      {
        "title": "Wild Magic Amplification",
        "rules": "While active, the Loop Bangle amplifies wild magic damage by 20%, affecting any spell or effect that deals such damage. This boost is only effective when the bangle’s time loop is in effect."
      }
    ],
    "levelRequirementReason": "The bangle can be wielded by lower-level characters, but its unpredictable nature requires caution and experience.",
    "vendorReason": "Feywild vendors have a knack for dealing with items of wild magic and chaos.",
    "shippingDetail": "The bangle is carefully packed in enchanted bubble wrap to protect it from the time loops during transit.",
    "usage": {
      "activation": "Activates as a bonus action, remaining active until removed or used up all charges for the session.",
      "duration": "Until removed or expended",
      "endsWhen": "Worn off or charges exhausted",
      "charges": "3 uses per long rest"
    },
    "priceReason": "The bangle’s wild magic and time-altering capabilities make it a rare and valuable item, but not so powerful as to be overpriced.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-22T05:16:07.741041+00:00",
    "aiReviewedAt": "2026-07-22T05:16:07.741041+00:00",
    "aiReviewVersion": 1
  },
  "feywild_loop_key": {
    "id": "feywild_loop_key",
    "name": "Time Loop Key",
    "description": "The Time Loop Key is an ancient, tarnished key forged from twisted briarwood and enchanted with Feywild magic. It opens portals to the time loops of the Feywild realm, allowing one to retrace their steps or escape a trap. With each use, the wielder must endure the temporal disorientation that comes from traversing these loops, but they are granted temporary immunity to any further loop effects for a round thereafter.",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Temporal Tether",
      "Loop Escape"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Tether",
        "rules": "The user may activate the key as an action, entering a time loop that lasts for 1d4 rounds. During this time, they can choose to either reset their actions or continue them from where they left off. While in the loop, they are immune to any further time loop effects."
      },
      {
        "title": "Loop Escape",
        "rules": "For one round after using the key, the user gains temporary immunity to the effects of time loops and similar temporal anomalies."
      }
    ],
    "levelRequirementReason": "The intricate magic required to wield this key is accessible to those with a basic understanding of Feywild lore.",
    "vendorReason": "The fey themselves recognize the value of such a key, which can be crucial for navigating their ever-changing realm.",
    "shippingDetail": "Due to its delicate nature, the Time Loop Key is shipped under special conditions with Koopa Postal ensuring safe delivery.",
    "usage": {
      "activation": "Action",
      "duration": "1d4 rounds (user may choose to reset or continue)",
      "endsWhen": "The user chooses to exit the loop or it expires after 1d4 rounds",
      "charges": "1 charge per use; recharges after 1d4 hours"
    },
    "priceReason": "This key represents a balance between the cost of Feywild magic and its utility, making it accessible but not trivial.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T05:16:28.726035+00:00",
    "aiReviewedAt": "2026-07-22T05:16:28.726035+00:00",
    "aiReviewVersion": 1
  },
  "feywild_loop_key_ring": {
    "id": "feywild_loop_key_ring",
    "name": "Loop Key Ring",
    "description": "The Feywild Loop Key Ring is a delicate, silver chain adorned with an etched loop that can only be found in the heart of the timeless forests. When worn, it allows its bearer to traverse through time's loops effortlessly, but each use risks either gaining or losing precious seconds of their life. The key ring whispers of ancient Feywild legends and promises those who dare to wear it a dance between past and future.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporal Passage",
      "Fey Court Invitation"
    ],
    "vendor": "feywild",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Passage",
        "rules": "As an action, the wearer can activate this key ring to enter or exit a time loop. The duration is instantaneous but requires the passage of 10 seconds in real time as a cost. Each use has a chance of gaining or losing one moment of real time. A successful DC 15 Wisdom saving throw negates the risk."
      },
      {
        "title": "Fey Court Invitation",
        "rules": "If used during a loop, the key ring triggers a Fey Court effect, inviting the wearer to a brief audience with the spirits of the Feywild. This effect lasts for 1 minute and imposes no additional risks or drawbacks."
      }
    ],
    "levelRequirementReason": "The complexity and inherent risk of using the key ring make it suitable only for those who have proven their worth through experience.",
    "vendorReason": "Feywild is the heart of this item's origin, making them the most knowledgeable about its properties.",
    "shippingDetail": "The key ring must be delivered by a Rakasha courier to ensure it reaches its destination intact and unaltered.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "After each use or if the wearer fails their saving throw.",
      "charges": "Unlimited, but risks apply with each use."
    },
    "priceReason": "The item's rarity and magical properties justify a price of 1000 XP, reflecting its value in both lore and practical application.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:16:24.261545+00:00",
    "aiReviewedAt": "2026-07-22T05:16:24.261545+00:00",
    "aiReviewVersion": 1
  },
  "feywild_loop_mirror": {
    "id": "feywild_loop_mirror",
    "name": "Mirror of the Shifting Hour",
    "description": "The Mirror of the Shifting Hour is a glassy orb that seems to shimmer with an ethereal light, reflecting the current moment while simultaneously showing a glimpse into what will come in just ten fleeting seconds. Its surface dances like water, mirroring both past and future, yet it may disorient the user if employed too frequently or in moments of heightened stress. Use this mirror to avoid traps, but be wary of the unintended consequences that could unfold from seeing the future too clearly.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔄",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Reflects Future",
      "Temporal Mirage"
    ],
    "vendor": "feywild",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reflects Future",
        "rules": "When activated as a bonus action, this mirror shows an image of the next ten seconds of reality. The effect is instantaneous and provides a +2 insight bonus to any Dexterity (Stealth) check made immediately after activation. This benefit lasts until your next turn."
      },
      {
        "title": "Temporal Mirage",
        "rules": "If used too often, or in moments of high stress, the mirror's surface can become unstable, causing a brief state of disorientation. On such occasions, you are incapacitated for 1 round as your perception of time becomes skewed."
      }
    ],
    "levelRequirementReason": "A basic understanding of timing and situational awareness is necessary to effectively use this mirror.",
    "vendorReason": "The feywild are known for their intimate connection with time, making them the best vendors for such a tool.",
    "shippingDetail": "The mirror arrives securely packaged to prevent any accidental use during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous; +2 insight bonus lasts until your next turn",
      "endsWhen": "Effect ends after one use or if you take damage",
      "charges": "Unlimited, but only once per short rest"
    },
    "priceReason": "This price reflects the mirror's rarity and the complexities of its temporal mechanics.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:28:56.296382+00:00",
    "aiReviewedAt": "2026-07-22T19:28:56.296382+00:00",
    "aiReviewVersion": 1
  },
  "feywild_loop_rod": {
    "id": "feywild_loop_rod",
    "name": "Rod of the Infinite Loop",
    "description": "The Rod of the Infinite Loop is a slender, silver rod that hums with an ethereal, chaotic energy. It pulses with unpredictable temporal fluxes, and when swung, it weaves a localized loop in time, forcing its wielder to choose between two divergent outcomes—one fraught with peril and the other promising unforeseen rewards. The rod’s power is both a blessing and a curse; each loop may bring about memory loss or cause one to relive past events, altering the course of the future.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Temporal Loop",
      "Unstable Consequences"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporal Loop",
        "rules": "When swung as a bonus action, the rod creates a 5-foot radius temporal loop for up to 1 minute. The wielder must choose between two outcomes: one that brings about memory loss or hallucinations, and another where time may inadvertently be altered. This effect can only be used once per long rest."
      },
      {
        "title": "Unstable Consequences",
        "rules": "The chosen outcome has a chance to cause additional effects, such as accidental time travel or temporal distortions affecting the immediate area. These effects are unpredictable and vary in severity. The wielder must succeed on a DC 15 Constitution saving throw or suffer from the chosen consequence."
      }
    ],
    "levelRequirementReason": "This rod requires a minimum level to ensure the user can handle its unpredictable temporal properties.",
    "vendorReason": "The Feywild market is known for exotic and powerful artifacts, making it an ideal place for such a unique item.",
    "shippingDetail": "Delivered with special courier services that ensure the rod’s temporal stability during transit.",
    "usage": {
      "activation": "Bonus action to swing and create a loop",
      "duration": "Up to 1 minute per use, once per long rest",
      "endsWhen": "The chosen outcome is activated or the user's decision ends the effect prematurely",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare nature and unpredictable power.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:16:28.590528+00:00",
    "aiReviewedAt": "2026-07-22T05:16:28.590528+00:00",
    "aiReviewVersion": 1
  },
  "feywild_loop_satchel": {
    "id": "feywild_loop_satchel",
    "name": "Loop Satchel of the Fey Court",
    "description": "The Loop Satchel of the Fey Court is a time-fiber satchel crafted by the weavers of the Feywild. It allows its bearer to briefly step into a loop of the faerie realm, where time flows differently for one round. The satchel's weave prevents the user from aging during this loop and ensures they return precisely to their starting point unless a mischievous fey intervenes. Ideal for scouting or testing traps without risk to oneself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔄",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Enter a Feywild loop",
      "Temporal stasis"
    ],
    "vendor": "feywild",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Feywild Loop",
        "rules": "The user enters a temporary loop of the Feywild. This effect lasts for one round (1 minute). While within, time flows differently: the user does not age and cannot be affected by time-based effects. Upon exiting, they return to their exact starting point unless interrupted by a fey creature."
      },
      {
        "title": "Temporal Stasis",
        "rules": "The user is immune to aging during the loop's duration. The effect ends when the round expires or if disrupted by a fey creature."
      }
    ],
    "levelRequirementReason": "This satchel allows for brief, safe exploration of the Feywild without requiring advanced spellcasting abilities.",
    "vendorReason": "The satchel is a product of their realm and thus sold by feyweavers who craft such magical gear.",
    "shippingDetail": "Ships via spirit courier, ensuring safe delivery to the recipient’s doorstep.",
    "usage": {
      "activation": "Object interaction (requires two hands)",
      "duration": "One round (1 minute)",
      "endsWhen": "Round ends or interrupted by a fey creature",
      "charges": "Once per day"
    },
    "priceReason": "Crafted from time-fiber, this satchel is rare and requires specialized weavers to produce.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:16:40.759084+00:00",
    "aiReviewedAt": "2026-07-22T05:16:40.759084+00:00",
    "aiReviewVersion": 1
  },
  "feywild_loop_soul_key": {
    "id": "feywild_loop_soul_key",
    "name": "Loop Soul Key",
    "description": "The Loop Soul Key is a key crafted from the twisted wood of Feywild trees and imbued with ancient magic. When activated, it creates a time loop that lasts for one round, during which any action taken repeats at a random moment in time—either immediately or after 1 to 3 seconds. This key is perfect for strategizing or catching elusive prey, but be wary; the unpredictable nature of the loops can turn even your best plans into chaos.",
    "price": 1000,
    "icon": "🔄",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Time Loop",
      "Random Delay"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Time Loop",
        "rules": "Activating this key triggers a time loop that lasts for one round. All actions performed during the loop repeat once, either immediately or after 1 to 3 seconds at random. The user can choose any action but cannot initiate a new loop while the current one is active."
      },
      {
        "title": "Random Delay",
        "rules": "The repeated actions occur at a random time delay between 1 and 3 seconds after their original execution. This effect has no save DC or saving throw."
      }
    ],
    "levelRequirementReason": "This key is designed for beginners to experiment with its magic without needing a high-level character.",
    "vendorReason": "The Feywild merchants have long traded in items that bridge the realms, and this key is one of their most popular wares.",
    "shippingDetail": "Ships swiftly by Lakitu Drones within a week from the Feywild.",
    "usage": {
      "activation": "Action",
      "duration": "One round (6 seconds)",
      "endsWhen": "The loop ends after one round or when a new action is taken without waiting for the loop to complete.",
      "charges": "Unlimited, but only one use per day"
    },
    "priceReason": "This key offers a balanced price by providing an interesting and versatile time-manipulation ability without being overpowered.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T05:16:45.192172+00:00",
    "aiReviewedAt": "2026-07-22T05:16:45.192172+00:00",
    "aiReviewVersion": 1
  },
  "feywild_looped_heart": {
    "id": "feywild_looped_heart",
    "name": "Looped Heart Pendant",
    "description": "The Loped Heart Pendant, a pulsing amulet of fey origin, weaves its wearer into a looped web of time and dream. When activated, it grants immunity to time loops for one round but saps the mind's stability, causing mental fatigue in the following turn. The pendant draws you into a fleeting dream state, where the veil between reality and the Feywild grows thin. With each loop broken, the wearer senses the world unraveling around them, a price paid in sanity.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Immunity to Time Loops",
      "Mental Fatigue"
    ],
    "vendor": "feywild",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Immunity to Time Loops",
        "rules": "Activates as a bonus action. Grants immunity to one time loop effect per round. Ends when the time loop ends, or if the wearer takes any damage."
      },
      {
        "title": "Mental Fatigue",
        "rules": "The wearer suffers 1d6 psychic damage on their next turn after using this pendant. This effect can be resisted with a Wisdom saving throw (DC 13)."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to handle the mental strain and temporal manipulation.",
    "vendorReason": "The Feywild vendor, known for their mystical wares, sources this pendant from the heart of the Feywild, where time flows in endless loops.",
    "shippingDetail": "Ships via the Void Drifter Relay, a service that ensures timely delivery through the treacherous realms between dimensions.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "One round per activation",
      "endsWhen": "Time loop ends or wearer takes damage",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price reflects the item's rare and mystical nature, as well as its potent temporal effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:17:10.714052+00:00",
    "aiReviewedAt": "2026-07-22T05:17:10.714052+00:00",
    "aiReviewVersion": 1
  },
  "feywild_looped_mist": {
    "id": "feywild_looped_mist",
    "name": "Mist of the Looming Echo",
    "description": "The Mist of the Looming Echo is a swirling loop of ethereal mist that dances in patterns reminiscent of forgotten Feywild legends. This ghostly vapor cloaks its bearer, blurring vision and mimicking the eerie sound of spectral echoes. It whispers tales of bygone days, potentially leading to unintended encounters with phantoms or false allies. Caution is advised when using this item within time loops; it may extend the duration of any temporal anomalies.",
    "price": 1000,
    "icon": "🌫",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporal Illusion",
      "Echo Hallucination"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Temporal Illusion",
        "rules": "When activated, the Mist creates an illusory veil around the user. This veil conceals the user from line of sight for up to 1d4 rounds. The effect is passive and does not require a saving throw. Once used, it cannot be reactivated until after a short or long rest."
      },
      {
        "title": "Echo Hallucination",
        "rules": "The Mist can trigger one of three types of hallucinations: false memory, false direction, or false ally. The user chooses the type when activating the item. A creature within 30 feet must succeed on a DC 15 Wisdom saving throw or be affected by the chosen illusion for 1 minute."
      }
    ],
    "levelRequirementReason": "Requires at least 2nd level to effectively use and navigate the illusory effects.",
    "vendorReason": "The Mist is a specialty item crafted by Feywild artisans, known for their mastery of temporal and illusionary magic.",
    "shippingDetail": "Ships via the Koopa Express, which guarantees delivery within a week.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 1d4 rounds or until dispelled by an effect like Dispel Magic",
      "endsWhen": "The duration ends when dispelled, after 1d4 rounds, or when the user completes their next turn.",
      "charges": "1 use per day"
    },
    "priceReason": "Balanced price reflects its rare materials and the complexity of crafting an item that manipulates time and illusion.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T05:17:08.761413+00:00",
    "aiReviewedAt": "2026-07-22T05:17:08.761413+00:00",
    "aiReviewVersion": 1
  },
  "feywild_looped_satchel": {
    "id": "feywild_looped_satchel",
    "name": "Looped Satchel of Infinite Return",
    "description": "The Loped Satchel of Infinite Return is a delicate, looped leather satchel adorned with runes that shimmer faintly in the Feywild light. It never loses its contents, but when its wearer enters a time loop, it subtly guides them back to where they last stood, even if reality has shifted. The satchel's magic ensures that 1d6 hit points are restored after each looped encounter, provided the loop is longer than three turns.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Item Retention",
      "Healing Regeneration"
    ],
    "vendor": "feywild",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Item Retention",
        "rules": "The satchel retains all stored items regardless of time loops. The wearer must be in a Feywild zone to activate the item; failure results in temporary disorientation."
      },
      {
        "title": "Healing Regeneration",
        "rules": "Upon entering a time loop, the wearer regenerates 1d6 hit points per looped encounter longer than three turns. This effect does not function outside of Feywild zones."
      }
    ],
    "levelRequirementReason": "The satchel requires a moderate understanding of the Feywild and its magic, suitable for characters who have ventured into this realm.",
    "vendorReason": "Feywild merchants specialize in items that bridge the magical realms, making them the ideal purveyors of such an artifact.",
    "shippingDetail": "The satchel is shipped via Pipe Express's special Feywild courier service, ensuring it arrives safely and intact.",
    "usage": {
      "activation": "Passive effect when in a Feywild zone; requires the wearer to be within the realm for regeneration to occur.",
      "duration": "Instantaneous healing upon entering a time loop; ends once the loop is exited or the wearer leaves the Feywild.",
      "endsWhen": "The effects cease when the wearer exits the time loop and returns to a stable environment outside the Feywild.",
      "charges": "Unlimited, but requires a Feywild zone for regeneration."
    },
    "priceReason": "The satchel's unique properties and the rarity of its magical components justify this moderate price.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T05:17:55.245392+00:00",
    "aiReviewedAt": "2026-07-22T05:17:55.245392+00:00",
    "aiReviewVersion": 1
  },
  "feywild_looped_silken_satchel": {
    "id": "feywild_looped_silken_satchel",
    "name": "Looped Silken Satchel",
    "description": "The Loped Silken Satchel is a woven marvel from the Feywild, its threads looped in an ancient pattern. Each time you open it, the contents shift unpredictably—sometimes doubling in quantity, other times vanishing into thin air. Ideal for those who navigate between worlds or thrive on chaos, this satchel grants +1 to Perception checks against fey illusions and a 5% chance of triggering a time-loop event that reshapes reality briefly when opened.",
    "price": 1000,
    "icon": "🧭",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Shifted Contents",
      "Fey Illusion Resistance"
    ],
    "vendor": "feywild",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Shifted Contents",
        "rules": "When you open the satchel, roll a d6. On a result of 1-2, one item in it doubles; on a result of 3-4, nothing happens; and on a result of 5-6, one item vanishes into thin air. This effect can occur up to three times per long rest."
      },
      {
        "title": "Fey Illusion Resistance",
        "rules": "+1 bonus to all Perception checks against illusions created by fey creatures or fey magic. This benefit lasts until the end of your next short or long rest."
      }
    ],
    "levelRequirementReason": "This satchel's unpredictable nature requires a certain degree of experience and adaptability.",
    "vendorReason": "The Feywild vendors are accustomed to dealing with the whimsical and chaotic items that traverse their realm.",
    "shippingDetail": "Delivered via spectral couriers, the satchel arrives safely but with a slight delay due to its ethereal nature.",
    "usage": {
      "activation": "Instantaneous action when opening the satchel.",
      "duration": "Up to three times per long rest.",
      "endsWhen": "The effects expire at the end of your next short or long rest, or if the satchel is closed for 10 minutes without being opened.",
      "charges": "Unlimited, but only one effect can occur per opening."
    },
    "priceReason": "Balanced at this price point to reflect its unpredictable nature and Feywild origin.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T05:17:24.690387+00:00",
    "aiReviewedAt": "2026-07-22T05:17:24.690387+00:00",
    "aiReviewVersion": 1
  },
  "feywild_looped_soul_ward": {
    "id": "feywild_looped_soul_ward",
    "name": "Looped Soul Ward",
    "description": "The Looped Soul Ward is a shimmering silver ring that weaves together threads of Feywild essence. When donned, it binds the wearer to a time loop within the ring's confines. The loop lasts until the next shift in the Feywild, trapping the user for exactly one hour. During this time, perception sharpens; the wearer gains +3 to all Perception checks and is granted an ethereal echo of the Feywild that enhances their senses.",
    "category": "equipment",
    "price": 1000,
    "icon": "🕳",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Looped Time Anchor",
      "Fey Echo Senses"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Looped Time Anchor",
        "rules": "Activates when worn. The wearer is trapped in a time loop for one hour, ending only with the next Feywild shift. This effect cannot be broken by normal means until the loop concludes."
      },
      {
        "title": "Fey Echo Senses",
        "rules": "Passive effect while wearing the ring. Grants +3 to all Perception checks. The wearer experiences a heightened awareness of their surroundings due to the ethereal connection with the Feywild."
      }
    ],
    "levelRequirementReason": "The Looped Soul Ward is accessible early on, allowing adventurers to test its capabilities in various situations without requiring advanced levels.",
    "vendorReason": "Feywild traders are well-known for their wares that allow visitors and residents alike to experience the magic of their realm, making this item a staple in their offerings.",
    "shippingDetail": "The ring is carefully packed by Lakitu Drones, ensuring it arrives undamaged through the whimsical paths of the Feywild.",
    "usage": {
      "activation": "Worn as a ring",
      "duration": "One hour or until next Feywild shift",
      "endsWhen": "Feywild shift ends loop",
      "charges": "Unlimited, recharges with the next shift"
    },
    "priceReason": "The balanced XP price reflects the item's utility in both combat and exploration without overshadowing other essential gear.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T05:17:25.707793+00:00",
    "aiReviewedAt": "2026-07-22T05:17:25.707793+00:00",
    "aiReviewVersion": 1
  },
  "feywild_loops_of_love": {
    "id": "feywild_loops_of_love",
    "name": "Loops of Love",
    "description": "The Loops of Love is a delicate amulet crafted from the silver threads spun by the fey themselves. It binds time to the rhythm of the heart, allowing wearers to rewind their last ten seconds and relive crucial choices. Each use, however, leaves a subtle scar on the soul, causing minor emotional decay that manifests as irritability or melancholy. This charm-enhancing trinket is perfect for lovers who seek a second chance at love's most delicate moments.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Rewind Time",
      "Emotional Decay"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Rewind Time",
        "rules": "As an action, the wearer can use this amulet to rewind time for one moment. This allows them to relive a decision made in their last ten seconds. The effect is instantaneous and does not require a save or attack roll."
      },
      {
        "title": "Emotional Decay",
        "rules": "After each use, the wearer must make a Wisdom saving throw (DC 12). On a failed save, they suffer an emotional effect: irritability for 1d4 hours with disadvantage on Charisma checks and saves, or melancholy which reduces their maximum hit points by 1d6 until the start of their next long rest."
      }
    ],
    "levelRequirementReason": "The amulet's emotional toll requires a certain level of mental fortitude to handle.",
    "vendorReason": "The Feywild are known for crafting items that bridge the gap between worlds, and this amulet is one such artifact.",
    "shippingDetail": "Delivered by Lakitu Drones with a tracking device to ensure safe arrival.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the moment is relived or the amulet is no longer in contact with the wearer's skin.",
      "charges": "10 uses, recharged after a long rest"
    },
    "priceReason": "Crafted from fey threads and imbued with rare magic, the Loops of Love offers a unique emotional and strategic advantage.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:17:34.078869+00:00",
    "aiReviewedAt": "2026-07-22T05:17:34.078869+00:00",
    "aiReviewVersion": 1
  },
  "feywild_loopsilk_sash": {
    "id": "feywild_loopsilk_sash",
    "name": "Loopsilk Sash of Echoing Fate",
    "description": "The Loopsilk Sash of Echoing Fate, a delicate band woven from the threads of time and memory, allows the wearer to glimpse three possible futures for their next action: one that veils hidden consequences, another that unfolds in stark clarity, and a third that hints at unforeseen magical repercussions. This sash grants immunity to one magical effect per use but can cause temporary dizziness if used too frequently, leaving the wearer reeling for 1d4 rounds.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Sees Three Possible Futures",
      "Magical Immunity"
    ],
    "vendor": "feywild",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Sees Three Possible Futures",
        "rules": "Activates as a bonus action. The wearer can see three possible outcomes of their next action, including one hidden consequence. This effect lasts for the duration of the next action and is limited to once per day."
      },
      {
        "title": "Magical Immunity",
        "rules": "Activates when the user chooses to grant immunity to a single magical effect. The sash provides this immunity until the start of your next turn, at which point it must be recharged for one hour before use again."
      }
    ],
    "levelRequirementReason": "Wielders must have sufficient experience and discipline to handle the temporal and magical intricacies of the sash.",
    "vendorReason": "The Feywild are known for their deep connection with time and memory, making them the perfect caretakers of this artifact.",
    "shippingDetail": "Delivered by a spirit courier who ensures the sash is handled with utmost care to preserve its delicate threads.",
    "usage": {
      "activation": "Bonus action or reaction (activates when chosen action is initiated)",
      "duration": "Instantaneous, lasting until the end of the next turn",
      "endsWhen": "The start of your next turn; immunity lasts for one turn after activation",
      "charges": "Daily 1 use per day"
    },
    "priceReason": "Balanced at this price to reflect its unique ability to provide insight into future outcomes and grant temporary magical resistance.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T05:17:52.245131+00:00",
    "aiReviewedAt": "2026-07-22T05:17:52.245131+00:00",
    "aiReviewVersion": 1
  },
  "feywild_loopty_loop_core": {
    "id": "feywild_loopty_loop_core",
    "name": "Loopty Loop Core",
    "description": "The Loopty Loop Core is a pulsating crystal forged from the very essence of Feywild, its surface shimmering with iridescent hues that warp and twist with every loop. It allows you to step back in time for one round, re-entering the same moment as if nothing had passed, perfect for dodging deadly traps or rerolling wild magic. The crystal's power is as capricious as it is reliable; its use can leave you momentarily disoriented, a small price to pay for such temporal mastery.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporal Loop",
      "Magical Immunity"
    ],
    "vendor": "feywild",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Loop",
        "rules": "Activates on command as a reaction. The user is transported back in time, re-entering the same moment as if nothing had passed for one round (30 seconds). This effect grants immunity to all magical effects during its duration but may cause minor disorientation for 2d6 seconds after use."
      },
      {
        "title": "Magical Immunity",
        "rules": "For every successful activation, the user gains temporary immunity to all magical effects until the start of their next turn. This effect stacks with itself up to three times per day but does not stack with other forms of magical immunity."
      }
    ],
    "levelRequirementReason": "The Loopty Loop Core's temporal mechanics require a basic understanding of magic and timing, making it accessible to low-level spellcasters.",
    "vendorReason": "Feywild is the origin of this crystal, crafting items that bend reality itself. The Loopty Loop Core fits seamlessly into their line of temporally inclined wares.",
    "shippingDetail": "Delivered via Pipe Express, known for its reliable and swift service through Feywild's mystical tunnels.",
    "usage": {
      "activation": "Reaction",
      "duration": "1 round (30 seconds)",
      "endsWhen": "The effect ends when the round concludes or the user is subjected to a magical effect.",
      "charges": "One use per long rest"
    },
    "priceReason": "Crafted with rare Feywild materials and imbued with potent time magic, the Loopty Loop Core's price reflects its exotic nature and powerful utility.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:17:53.343620+00:00",
    "aiReviewedAt": "2026-07-22T05:17:53.343620+00:00",
    "aiReviewVersion": 1
  },
  "feywild_loopy_lantern": {
    "id": "feywild_loopy_lantern",
    "name": "Loopy Lantern",
    "description": "The Loopy Lantern flickers with a soft, ethereal glow that seems to dance on its own accord. Crafted from enchanted wood found deep within the Feywild, it warps time slightly, allowing you to loop a single action once per round. This lantern is not only a handy tool for dodging traps or re-rolling failed rolls but also disturbs the flow of time around you, causing a 1d4-second stutter in nearby events. When used during a time loop event, it doubles the chance of triggering a Fey court illusion, making it a treasured companion for those who venture into the wilds of Faerie.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporal Loop",
      "Feywild Disturbance"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Loop",
        "rules": "When activated as a reaction, you may reroll one d20 roll or avoid one trap effect. This use of the lantern expends its charge and cannot be used again until the next short or long rest."
      },
      {
        "title": "Feywild Disturbance",
        "rules": "Using the lantern causes a 1d4-second time stutter in the surrounding area, affecting all creatures within 30 feet. This effect has a duration of 1 round and ends when the creature takes damage or moves."
      }
    ],
    "levelRequirementReason": "Even novice adventurers can benefit from the Loopy Lantern's ability to save them in tight situations.",
    "vendorReason": "The lantern is a staple of Feywild vendors, known for their extensive knowledge of Faerie magic and items.",
    "shippingDetail": "Ships via Lakitu Drones, ensuring safe delivery within one week of purchase.",
    "usage": {
      "activation": "Reaction (used as a reaction to reroll a d20 or avoid a trap)",
      "duration": "Instantaneous for the Temporal Loop effect; 1 round for Feywild Disturbance",
      "endsWhen": "The use ends when the creature takes damage, moves, or completes its next turn.",
      "charges": "One charge per day"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's unique and powerful abilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:18:04.192967+00:00",
    "aiReviewedAt": "2026-07-22T05:18:04.192967+00:00",
    "aiReviewVersion": 1
  },
  "feywild_loopy_ribbon": {
    "id": "feywild_loopy_ribbon",
    "name": "Loopy Ribbon",
    "description": "The Loopy Ribbon, a delicate silk ribbon spun from the threads of time, unravels in your hands to reveal a shimmering path through Feywild's loops and mists. When worn, it grants you immunity to all illusion effects for one round, protecting you from the whimsical yet dangerous fey magic. However, if you encounter a creature from the Feywild during its use, there is a chance it will cause you to become entangled in a time loop, where your last action could be rewritten at any moment, potentially leading to unpredictable and chaotic outcomes for 1d6 rounds.",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Immunity to Illusions",
      "Time Loop Entanglement"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Immunity to Illusions",
        "rules": "When worn, the Loopy Ribbon grants you immunity to all illusion effects for one round. This effect is instantaneous and does not require an action or reaction to activate."
      },
      {
        "title": "Time Loop Entanglement",
        "rules": "If used in a Feywild encounter, there is a chance that your last action will be rewritten at the end of the round, potentially causing confusion or mishap. The effect lasts for 1d6 rounds and can only occur once per day."
      }
    ],
    "levelRequirementReason": "The intricate magic woven into the Loopy Ribbon requires a certain mastery to wield without becoming entangled in its own effects.",
    "vendorReason": "The Feywild creatures value this ribbon for its unique properties and are willing to trade it with those who understand their world.",
    "shippingDetail": "The ribbon is carefully packaged in a protective container to prevent unraveling during transit, ensuring it arrives intact.",
    "usage": {
      "activation": "Worn as an accessory (no action required)",
      "duration": "Instantaneous effect; immunity lasts for one round",
      "endsWhen": "The wearer removes the ribbon or completes its duration",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's unique and potentially dangerous abilities.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T05:18:21.826208+00:00",
    "aiReviewedAt": "2026-07-22T05:18:21.826208+00:00",
    "aiReviewVersion": 1
  },
  "feywild_loot_of_the_fey": {
    "id": "feywild_loot_of_the_fey",
    "name": "Loot of the Fey",
    "description": "The Loot of the Fey is a tattered, enchanted satchel woven from threads of starlight and moonbeam. Its origins lie in the crumbled Feywild, where it once held treasures from a bygone court. When opened, it spills a cascade of shimmering baubles that whisper with ancient magic. Each time you use it, there's a 20% chance for one of these trinkets to activate, casting a Fey spell on your next action. The bag also grants +1d6 to any spell roll for the next ten minutes, ensuring your magic never falters in its power.",
    "price": 1000,
    "icon": "🎁",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Random Fey Spell Activation",
      "+1d6 to Magic Rolls"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Random Fey Spell Activation",
        "rules": "Roll a d20. On a roll of 17 or higher, choose one random spell from the Feywild Spells table. This spell is cast on your next action. The spell has no save DC and requires no material components."
      },
      {
        "title": "+1d6 to Magic Rolls",
        "rules": "You gain +1d6 to all spell attack rolls and spell saving throws for 10 minutes after opening the bag. This effect is cumulative if you open the bag multiple times within this duration, but does not stack between different uses of the bag."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level to handle its unpredictable magic and Feywild origins.",
    "vendorReason": "The Feywild is the source of this enchanted satchel, making it a logical vendor for such an artifact.",
    "shippingDetail": "Due to the magical nature of the contents, the item may arrive slightly disheveled. Ensure you inspect the bag before use to check for any damage or loss of items.",
    "usage": {
      "activation": "Activates when opened. Random spell activation is a one-time event per opening.",
      "duration": "10 minutes",
      "endsWhen": "The duration ends after 10 minutes or if you open the bag again before it expires.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's unpredictable magic and Feywild origins justify a moderate price, balancing its potential for powerful effects.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-22T05:18:37.992141+00:00",
    "aiReviewedAt": "2026-07-22T05:18:37.992141+00:00",
    "aiReviewVersion": 1
  },
  "feywild_melting_time_bottle": {
    "id": "feywild_melting_time_bottle",
    "name": "Melting Time Bottle",
    "description": "The Melting Time Bottle is a shimmering glass vial that distorts reality, causing moments around you to warp and stretch into surreal loops. Crafted from Feywild quartz, its surface glows with an ethereal sheen, bending time in unpredictable ways. This bottle is perfect for sneaking through the labyrinthine corridors of the Feywild or escaping from a temporal trap, but be wary—rolling a 1 on a d6 every five seconds can either grant you 1000 XP or deal 500 HP damage.",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Temporal Distortion",
      "Time Loop Bubble"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "For the duration of one minute, time around the user is slowed by 20%. Any creature or object that moves through this area has its movement speed reduced by half. This effect does not stack with other effects that modify time."
      },
      {
        "title": "Time Loop Bubble",
        "rules": "Creates a 10-second time loop in a 30-foot radius around the user, causing all creatures within to experience a surreal moment of lost time. Creatures caught in this effect must succeed on a DC 15 Dexterity saving throw or be stunned for the duration."
      }
    ],
    "levelRequirementReason": "Users should have at least two levels to understand and handle the time-altering effects safely.",
    "vendorReason": "The Feywild vendor is well-versed in the magical properties of such items, having crafted them from authentic Feywild materials.",
    "shippingDetail": "Delivered by Shy Guy Smugglers, this item requires special handling and may take an additional day to arrive.",
    "usage": {
      "activation": "Used as a bonus action; the user must be within 30 feet of their target area.",
      "duration": "One minute for Temporal Distortion; 10 seconds for Time Loop Bubble, both are instantaneous in effect.",
      "endsWhen": "The duration ends when the user dismisses it or at the end of their next turn.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted from Feywild quartz and imbued with complex temporal magic, this item is a rare find and thus priced accordingly.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T05:18:54.120139+00:00",
    "aiReviewedAt": "2026-07-22T05:18:54.120139+00:00",
    "aiReviewVersion": 1
  },
  "feywild_minus_world_item": {
    "id": "feywild_minus_world_item",
    "name": "Minus World Echo",
    "description": "The Minus World Echo, a relic from a vanished dimension, hums softly when held. Crafted by the Pony Nobility from the very fabric of the Feywild, this talisman grants its bearer temporary invisibility in shadowy environs and causes a fleeting 20% reduction to all physical stats for ten minutes. Upon activation, it weaves a web of arcane forgetfulness that erases minor memories, compelling the user to relive recent moments without recall.",
    "price": 1000,
    "icon": "🌀",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Invisibility in Shadows",
      "Stat Reduction"
    ],
    "vendor": "feywild",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility in Shadows",
        "rules": "When activated as an action within a shadowy environment, the Minus World Echo grants temporary invisibility to the wielder for 1 minute. This effect ends if the user leaves the shadows or takes any hostile action."
      },
      {
        "title": "Stat Reduction",
        "rules": "For ten minutes after activation, all physical ability scores are reduced by 20%. This debuff lasts until it is dispelled by a successful DC 15 Constitution saving throw. The user regains their full abilities once the duration ends."
      }
    ],
    "levelRequirementReason": "The Minus World Echo's power, while potent, is accessible to newer adventurers who can appreciate its unique utility without overtaxing their capabilities.",
    "vendorReason": "Feywild, a trusted merchant of the Feywild, is known for offering relics from other dimensions and this item perfectly suits their catalog.",
    "shippingDetail": "The Minus World Echo is carefully packed to withstand travel through the Feywild's unstable portals. Delivery time varies depending on the destination but typically arrives within a week of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until the user leaves shadows",
      "endsWhen": "Leaving shadowy environs or taking hostile action, dispelled by Constitution save",
      "charges": "Unlimited"
    },
    "priceReason": "The Minus World Echo's price reflects its Feywild origin and the unique combination of invisibility and stat reduction effects, making it a valuable but not overpowered addition to any adventurer's arsenal.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-22T05:18:32.227734+00:00",
    "aiReviewedAt": "2026-07-22T05:18:32.227734+00:00",
    "aiReviewVersion": 1
  },
  "feywild_mirage_torch": {
    "id": "feywild_mirage_torch",
    "name": "Torch of the Dying Hour",
    "description": "The Torch of the Dying Hour glows faintly in your hand, a relic forged from the dying embers of forgotten Feywild realms. When ignited, it reveals hidden paths through time and space, allowing you to traverse temporal barriers as if they were mere shadows. The flame itself seems to pulse with the heartbeat of the Feywild, momentarily pausing the surrounding environment for 10 seconds before flickering out, leaving behind a faint glow that hints at the passage of time.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Temporal Barrier Breaker",
      "Brief Time Pause"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Barrier Breaker",
        "rules": "As an action, you may ignite the torch to break through temporal barriers in your immediate vicinity. This effect reveals hidden Feywild paths and allows movement through time loops for up to 10 seconds. The duration of this effect is limited to once per long rest."
      },
      {
        "title": "Brief Time Pause",
        "rules": "When activated, the torch causes a localized pause in the surrounding environment for 10 seconds. During this time, creatures and objects are frozen in place. This effect has no save DC but ends if you take damage or move away from the torch."
      }
    ],
    "levelRequirementReason": "The intricate magic required to wield the Torch of the Dying Hour demands a level of mastery that only fifth-level spellcasters can achieve.",
    "vendorReason": "Feywild, with its deep connections to the realms beyond time and space, is the only vendor capable of supplying such a relic.",
    "shippingDetail": "The torch must be delivered by Lakitu Drones for safe handling during transit due to its delicate nature.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds, once per long rest",
      "endsWhen": "You take damage or move away from the torch",
      "charges": "Unlimited"
    },
    "priceReason": "The Torch of the Dying Hour is a rare and powerful relic, requiring significant magical energy to maintain its temporal properties.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T05:19:03.138984+00:00",
    "aiReviewedAt": "2026-07-22T05:19:03.138984+00:00",
    "aiReviewVersion": 1
  },
  "feywild_mirror_mist_ward": {
    "id": "feywild_mirror_mist_ward",
    "name": "Mirror Mist Ward",
    "description": "The Mirror Mist Ward is a shimmering veil of unstable reflections that shields the wearer from wild magic bursts, creating an ephemeral mirror dimension where time loops can be observed but not altered. This ethereal shield grants the wearer +10% resistance to wild magic damage and ensures they see their own reflection in every Fey court encounter. The ward's essence is drawn from the shifting mists of the Feywild, lending it a mystic power that protects against the whimsical yet dangerous forces of nature.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Mirror Dimension",
      "Wild Magic Resistance"
    ],
    "vendor": "feywild",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Mirror Dimension",
        "rules": "Activating the Mirror Mist Ward creates a temporary mirror dimension for 30 seconds. The wearer can use this effect to escape from time loops by observing but not altering them. This ability is usable once per long rest."
      },
      {
        "title": "Wild Magic Resistance",
        "rules": "The wearer gains +10% resistance to wild magic damage from the moment they activate their Mirror Mist Ward, providing a tangible defense against unpredictable magical energies. This effect lasts until the end of the wearer's next short or long rest."
      }
    ],
    "levelRequirementReason": "The intricate weave of wild magic and Feywild mists requires a minimum level to master.",
    "vendorReason": "The Ward is crafted by the fey themselves, who sell it through their envoys in the Feywild.",
    "shippingDetail": "Delivered via a fleet of ethereal drakes that navigate the Feywild's misty pathways with precision.",
    "usage": {
      "activation": "Reaction or bonus action to activate, usable once per long rest.",
      "duration": "30 seconds (usable once per long rest).",
      "endsWhen": "The effect ends when the wearer completes a short or long rest.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its intricate magical properties and Feywild origin.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:18:59.986711+00:00",
    "aiReviewedAt": "2026-07-22T05:18:59.986711+00:00",
    "aiReviewVersion": 1
  },
  "feywild_mirror_of_wild_wishes": {
    "id": "feywild_mirror_of_wild_wishes",
    "name": "Mirror of Wild Wishes",
    "description": "The Mirror of Wild Wishes is a fractured glass surface, its edges etched with ancient runes that shimmer like starlight. It holds the power to grant one’s deepest wish at the cost of a precious memory, chosen by the mirror itself from your past. The mirror's unpredictable nature can lead to unintended consequences if the wish is too chaotic, potentially causing a time loop that echoes the moment you first laid eyes on it.",
    "price": 1000,
    "icon": "🔮",
    "stock": 0,
    "rarity": "rare",
    "effects": [
      "Manifests one random wish",
      "Erases one memory"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wish Manifestation",
        "rules": "The user speaks their wish aloud, and the mirror grants it. The DM determines the outcome, ensuring it aligns with the mirror's unpredictable nature. If the wish is too chaotic or complex, a time loop may ensue, repeating the moment of the wish’s invocation."
      },
      {
        "title": "Memory Erasure",
        "rules": "One random memory from the user's past is lost forever upon using the mirror. The DM selects which memory it is, based on the context and timing of its use."
      }
    ],
    "levelRequirementReason": "The mirror's power is too unpredictable for those below first level; even a minor misstep could have dire consequences.",
    "vendorReason": "Feywild vendors are known to trade in items that blur the line between reality and fantasy, making this mirror an ideal addition to their inventory.",
    "shippingDetail": "The mirror is carefully packed by Lakitu Drones, ensuring it arrives intact but with a slight delay due to its fragile nature.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "When the wish is granted or the memory is erased; the mirror's power is exhausted for one day after use.",
      "charges": "Unlimited, but only one wish can be made per month."
    },
    "priceReason": "The mirror’s unpredictable nature and the risk it poses justify a price that reflects its high value in XP terms.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:19:03.658791+00:00",
    "aiReviewedAt": "2026-07-22T05:19:03.658791+00:00",
    "aiReviewVersion": 1
  },
  "feywild_mirrored_bottle": {
    "id": "feywild_mirrored_bottle",
    "name": "Mirrored Bottle of Shifting Echoes",
    "description": "The Mirrored Bottle of Shifting Echoes is a delicate glass vessel etched with runes that shimmer like the twilight of the Feywild. When its contents are poured into water, it distills the very essence of one’s recent pivotal decision, revealing a fractured memory of their choice. The drinker glimpses fleeting echoes of alternate realities, each ripple offering insight into unseen paths taken. Consuming this bottle grants temporary resilience to chaotic forces, bolstered by an internal fortitude that can resist such effects for a brief moment.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Echoes of Choice",
      "Chaotic Resistance"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Echoes of Choice",
        "rules": "Upon drinking the bottle's contents, the drinker is granted a vision of their most recent pivotal decision. This effect reveals one random memory from this decision, including alternate outcomes. The memory lasts for a duration equal to 1 round and ends when the drinker completes an action or reaction."
      },
      {
        "title": "Chaotic Resistance",
        "rules": "For 1 minute after consumption, the drinker gains temporary resistance to chaotic damage and effects. This bonus can be used once per short rest as a reaction against such attacks or spells."
      }
    ],
    "levelRequirementReason": "The bottle's visions are too complex for those who lack the mental fortitude, requiring at least third-level characters to fully comprehend and utilize its effects.",
    "vendorReason": "The Feywild is home to such mystical artifacts, and the denizens there have a deep connection with these bottles' origins.",
    "shippingDetail": "The delivery can be delayed by up to one week due to the bottle's delicate nature and the smugglers' preference for avoiding official Feywild checkpoints.",
    "usage": {
      "activation": "Consuming the contents of the bottle as a bonus action",
      "duration": "1 round (Echoes) or 1 minute (Chaotic Resistance)",
      "endsWhen": "Completion of an action or reaction (Echoes), or end of duration (Chaotic Resistance)",
      "charges": "Unlimited, but limited to once per short rest for Chaotic Resistance"
    },
    "priceReason": "The bottle's rarity and the complexity of its effects justify a price reflecting its value in XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:19:15.629651+00:00",
    "aiReviewedAt": "2026-07-22T05:19:15.629651+00:00",
    "aiReviewVersion": 1
  },
  "feywild_mirrored_soul": {
    "id": "feywild_mirrored_soul",
    "name": "Mirror of the Unseen Self",
    "description": "The Mirror of the Unseen Self is a fractured mirror, its surface etched with runes and symbols that shimmer like shifting starlight. When held before an ethereal glow illuminates your vision, it reveals not just the hidden paths or weaknesses of foes, but also the true form of creatures cloaked in illusion—though it demands you accept this truth fully, or risk losing your mind to madness. Crafted by Feywild artisans, its edges whisper secrets of the fey realm.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals hidden truths and weaknesses",
      "Prevents illusions and fey tricks"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Truthful Revelation",
        "rules": "When activated as an action, this mirror reveals the true form of any creature or secret path within range. The target must make a Wisdom saving throw (DC 13). On a failed save, they are blinded for 1 minute and cannot benefit from any illusion or fey trickery for that duration."
      },
      {
        "title": "Mind's Acceptance",
        "rules": "If the user accepts the vision without hesitation, they gain advantage on Perception checks against illusions and fey tricks until the end of their next short rest. Otherwise, they must succeed on a DC 13 Wisdom saving throw or suffer from temporary madness for 24 hours."
      }
    ],
    "levelRequirementReason": "This mirror is designed to be accessible early in one's adventuring career, allowing players to quickly gain insights into their environment.",
    "vendorReason": "The Mirror of the Unseen Self is a specialty item crafted by Feywild artisans and sold exclusively at Feywild, known for its unique magical items.",
    "shippingDetail": "Due to the fragile nature of this mirror, it must be shipped via Koopa Postal's express courier service to ensure safe delivery.",
    "usage": {
      "activation": "Activate as an action",
      "duration": "Instantaneous; ends when the user chooses not to accept the vision or upon destruction of the mirror",
      "endsWhen": "The effect ends if the user fails a saving throw and becomes temporarily insane, or when the mirror is destroyed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its rarity and unique utility without being game-breaking.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:19:17.976108+00:00",
    "aiReviewedAt": "2026-07-22T05:19:17.976108+00:00",
    "aiReviewVersion": 1
  }
};
