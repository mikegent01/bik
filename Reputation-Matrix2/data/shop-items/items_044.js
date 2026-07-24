// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_044 = {
  "tomb_kings_construct_eye": {
    "id": "tomb_kings_construct_eye",
    "name": "Tomb Kings Construct Eye (Lapis Lazuli)",
    "description": "The Tomb Kings Construct Eye, a radiant lapis lazuli orb imbued with ancient magic, is said to have been crafted by the artisans of the forgotten kings themselves. This glowing gem can animate a large, dead construct or statue for an hour, bringing it to life to serve the caster's simple commands. The eye itself is encased in a delicate ornate box, ensuring safe transport from the tomb gatekeeper.",
    "price": 1000,
    "icon": "👁️",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Animate Construct",
      "Simple Commands"
    ],
    "vendor": "tomb_gatekeeper",
    "shippedBy": "Ornate Box",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Animate Construct",
        "rules": "Once per day, activate as an action to animate one large dead statue or construct (CR 5) for a duration of 1 hour. The construct obeys simple commands given by the caster during its active time."
      },
      {
        "title": "Simple Commands",
        "rules": "The animated construct can be commanded to perform actions that are within its capabilities and not inherently dangerous, such as standing guard or moving objects up to a 10-foot square area."
      }
    ],
    "levelRequirementReason": "Requires a caster level of at least 5 to properly channel the ancient magic.",
    "vendorReason": "The tomb gatekeeper, guardian of the ancient constructs, is entrusted with such powerful and rare items.",
    "shippingDetail": "The ornate box ensures safe transport, but adds a delay of one day to its delivery.",
    "usage": {
      "activation": "Activate as an action.",
      "duration": "1 hour once per day.",
      "endsWhen": "The construct completes the commanded task or the duration ends.",
      "charges": "One charge per day."
    },
    "priceReason": "Balanced at 1,000 XP as it is a powerful but not overpowered item suitable for mid-level adventurers.",
    "priceOriginal": 105000,
    "priceReviewedAt": "2026-07-23T19:09:47.659654+00:00",
    "aiReviewedAt": "2026-07-23T19:09:47.659654+00:00",
    "aiReviewVersion": 1
  },
  "tomb_kings_cursed_canopic_jar": {
    "id": "tomb_kings_cursed_canopic_jar",
    "name": "Tomb Kings Cursed Canopic Jar",
    "description": "The Tomb Kings Cursed Canopic Jar is a sinister artifact made of black obsidian and adorned with hieroglyphs that whisper death. It whispers to the unwary, claiming to hold the soul of a lesser Pharaoh. This jar can trap one creature’s essence within its depths for a month after they die within 10 feet of it. The trapped soul can be tortured or questioned, providing answers that are both cryptic and deadly accurate.",
    "price": 1000,
    "icon": "⚱️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Soul Trapper",
      "Torture and Question"
    ],
    "vendor": "tomb_gatekeeper",
    "shippedBy": "Pharaoh’s Messenger",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Soul Trapper",
        "rules": "If a creature dies within 10 feet of the jar, its soul is trapped inside for one month. This effect can occur once per month."
      },
      {
        "title": "Torture and Question",
        "rules": "The trapped soul can be tortured or questioned to gain information. Torturing it has a DC of 17 Wisdom (Insight) check to resist; on a failed check, the torturer gains knowledge that may be both truthful and misleading."
      }
    ],
    "levelRequirementReason": "Requires at least 6th level to handle the cursed power without succumbing to its influence.",
    "vendorReason": "The tomb gatekeeper has intimate knowledge of ancient artifacts and the dangers they pose, making them a trusted source for such a relic.",
    "shippingDetail": "Delivered by a specially charmed falcon that ensures safe arrival but does not allow handling until it is within 10 feet of its intended recipient.",
    "usage": {
      "activation": "Passive effect, triggered when conditions are met.",
      "duration": "One month for each trapped soul.",
      "endsWhen": "The trapped soul's duration expires or the jar is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its cursed nature and limited utility.",
    "priceOriginal": 190000,
    "priceReviewedAt": "2026-07-23T19:09:35.826823+00:00",
    "aiReviewedAt": "2026-07-23T19:09:35.826823+00:00",
    "aiReviewVersion": 1
  },
  "tomb_kings_eternal_vizier": {
    "id": "tomb_kings_eternal_vizier",
    "name": "Tomb Kings Eternal Vizier (Advisor)",
    "description": "The Tomb Kings Eternal Vizier, a high-ranking non-combat Lich bound to serve as your political and administrative advisor, is crafted from the bones of kings and enchanted with the wisdom of eternity. Its eyes gleam with the ancient knowledge it has accumulated over centuries, ready to guide you through complex matters. This relic's strategic acumen ensures your long-term planning efforts succeed, providing unmatched foresight for years to come.",
    "price": 1000,
    "icon": "🧠",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Eternal Guidance",
      "Unmatched Strategic Planning"
    ],
    "vendor": "tomb_gatekeeper",
    "shippedBy": "Entombed Delivery",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Eternal Guidance",
        "rules": "For the next 5 years, you gain advantage on all checks related to bureaucracy and administration. This effect is passive and does not require any action from you."
      },
      {
        "title": "Unmatched Strategic Planning",
        "rules": "You have advantage on long-term planning checks (DC 18). You can use this ability once per long rest, expending a charge that recharges after 7 days."
      }
    ],
    "levelRequirementReason": "The Vizier's vast knowledge and the intricate enchantments require a high level of magical mastery to effectively wield.",
    "vendorReason": "Only the Tomb Gatekeeper, guardian of ancient secrets, possesses the means to craft such a powerful artifact.",
    "shippingDetail": "The Vizier is carefully packed in a crypt-like container and delivered via an unmarked route to ensure its safe arrival.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "5 years",
      "endsWhen": "Upon expiration of the 5-year period or destruction of the Vizier.",
      "charges": "One charge per long-term planning check, recharging after a week."
    },
    "priceReason": "The Vizier's rarity and its unparalleled utility justify its moderate price in experienced characters' terms.",
    "priceOriginal": 400000,
    "priceReviewedAt": "2026-07-23T19:10:01.450318+00:00",
    "aiReviewedAt": "2026-07-23T19:10:01.450318+00:00",
    "aiReviewVersion": 1
  },
  "tomb_kings_lich_advisor": {
    "id": "tomb_kings_lich_advisor",
    "name": "Tomb Kings Lich Advisor (Contract)",
    "description": "The Tomb Kings Lich Advisor (Contract) is a malevolent spirit forged in the eternal fires of the tombs. Crafted by King of Tombs himself, this lich offers counsel with an intellect unmatched—INT 22. In exchange for its wisdom, it demands sacrifices: either the souls of ten unwary adventurers or potent magical artifacts worth at least 10,000 XP each. Bound to the contract, it aids in a single necromantic rite per month, summoning legions of undead with a mere whisper.",
    "price": 1000,
    "icon": "💀",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Necromantic Counsel",
      "Undead Summoning"
    ],
    "vendor": "tomb_gatekeeper",
    "shippedBy": "Ceremonial Escort",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Necromantic Counsel",
        "rules": "The Lich Advisor provides counsel once per day, enhancing the caster's INT by +4 for 1 hour. This effect grants a bonus action to cast any necromancy spell of 3rd level or lower, with no material components required."
      },
      {
        "title": "Undead Summoning",
        "rules": "Once per month, the Lich Advisor can summon an army of undead creatures of CR 6 or lower. The summoned undead are under the lich's control and remain until dismissed by a command word (action). The lich demands ten souls or magical artifacts worth at least 10,000 XP as payment."
      }
    ],
    "levelRequirementReason": "Only those of great power can handle the Lich Advisor's malevolence and demand for sacrifices.",
    "vendorReason": "The tomb gatekeeper has a unique connection to the tombs where the lich was forged, making them the only one who could procure such an item.",
    "shippingDetail": "Ships with special ceremonial escorts, ensuring safe delivery through ancient and enchanted tombs.",
    "usage": {
      "activation": "As a bonus action or on command for summoning undead.",
      "duration": "Necromantic counsel lasts until the end of your next turn; Undead summoning is instantaneous.",
      "endsWhen": "The effects are dismissed by a command word or expended after use.",
      "charges": "Unlimited uses, but requires payment upon activation."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the lich's rarity and the value of the sacrifices it demands.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-23T19:09:38.879699+00:00",
    "aiReviewedAt": "2026-07-23T19:09:38.879699+00:00",
    "aiReviewVersion": 1
  },
  "tomb_kings_mummy_wrap_sandwiches_recipe": {
    "id": "tomb_kings_mummy_wrap_sandwiches_recipe",
    "name": "Recipe: Tomb Kings Mummy Wrap Sandwiches",
    "description": "The Recipe for Tomb Kings Mummy Wrap Sandwiches is a culinary secret that transforms mundane ingredients into immortal sustenance. Wrapped with bandages and sealed in ancient tombs, these sandwiches preserve their freshness and nourish the eater. Consuming one grants you temporary immunity to rot and decay while healing 1d6 hit points. The recipe was passed down by mummified chefs who ensured only the freshest bread and finest meats were used.",
    "price": 1000,
    "icon": "🥪",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Immortal Sustenance",
      "Healing Bites"
    ],
    "vendor": "tomb_kings_pyramid",
    "shippedBy": "Wrapped Wisdom",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immortal Sustenance",
        "rules": "When you eat a sandwich prepared with this recipe, you gain temporary immunity to the effects of rot and decay for 1 hour. This effect does not stack with other similar immunities."
      },
      {
        "title": "Healing Bites",
        "rules": "As an action, you can consume one of these sandwiches to regain 1d6 hit points. You are limited to using this effect once per long rest."
      }
    ],
    "levelRequirementReason": "This recipe is simple enough for anyone with basic cooking skills.",
    "vendorReason": "The mummies of the tomb kings are known for their culinary prowess and ensure this recipe remains authentic.",
    "shippingDetail": "Ships via crypt courier, ensuring freshness within a week.",
    "usage": {
      "activation": "Eating one sandwich as an action",
      "duration": "1 hour immunity; once per long rest healing effect",
      "endsWhen": "Effect expires after 1 hour or upon consuming another sandwich with the recipe",
      "charges": "Unlimited, as long as you have the ingredients to prepare more sandwiches"
    },
    "priceReason": "The rarity and complexity of this recipe, combined with the unique ingredients required, justify its higher price.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T19:09:50.097529+00:00",
    "aiReviewedAt": "2026-07-23T19:09:50.097529+00:00",
    "aiReviewVersion": 1
  },
  "tomb_kings_mummy_wrapping_service": {
    "id": "tomb_kings_mummy_wrapping_service",
    "name": "Tomb Kings Mummy Wrapping Service",
    "description": "The Tomb Kings Mummy Wrapping Service encases you in a cocoon of protective bandages, granting +1 AC for seven days as the mummies of old were buried in layers of linen. Your movements evoke the rustling of dry leaves, imposing disadvantage on Stealth checks when moving. You appear undead to those who know what to look for, but your presence is neutral to other creatures, earning you a wary, yet not hostile reception from both living and dead alike.",
    "category": "services",
    "price": 1000,
    "icon": "🎁",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Mummy's Cloak",
      "Rustling Movement"
    ],
    "vendor": "tomb_kings",
    "shippedBy": "Sarcophagus Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mummy's Cloak",
        "rules": "You gain +1 AC for 7 days. This effect is a passive bonus and ends when the duration expires."
      },
      {
        "title": "Rustling Movement",
        "rules": "You have disadvantage on Dexterity (Stealth) checks while moving. This effect lasts until you rest or take an action to still yourself, at which point it ceases."
      }
    ],
    "levelRequirementReason": "This service is accessible to adventurers of all levels but requires basic proficiency in stealth and the ability to move without drawing attention.",
    "vendorReason": "The Tomb Kings Embalmers are experts at preserving life, and their wrapping service ensures you can traverse the world with a semblance of ancient protection.",
    "shippingDetail": "Delivery includes a special mummy's basket to transport your bandaged form securely.",
    "usage": {
      "activation": "Passive effect upon application. Duration ends after 7 days or when you rest and take an action to still yourself.",
      "duration": "24 hours for each day of duration",
      "endsWhen": "Resting and taking a reaction to still your movements, or at the end of the 7-day period",
      "charges": "Unlimited"
    },
    "priceReason": "The service is priced moderately as it combines ancient knowledge with practical benefits, making it accessible yet valuable.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-23T19:10:18.837385+00:00",
    "aiReviewedAt": "2026-07-23T19:10:18.837385+00:00",
    "aiReviewVersion": 1
  },
  "tomb_kings_necrotic_infusion": {
    "id": "tomb_kings_necrotic_infusion",
    "name": "Tomb Kings Necrotic Infusion (Weapon)",
    "description": "The Tomb Kings Necrotic Infusion, a weapon forged from the very bones of the ancient dead, whispers with malevolent energy as it drains life from foes. Crafted by the King of Tombs himself in the depths of his crypt, this weapon's touch leaves a lingering aura of decay that lingers after each strike. Those who wield it feel a cold grip on their own vitality, gaining temporary hit points proportional to the necrotic damage dealt.",
    "price": 1000,
    "icon": "💀",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Necrotic Drain",
      "Temporary Hit Points"
    ],
    "vendor": "tomb_gatekeeper",
    "shippedBy": "Obsidian Tool",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Necrotic Drain",
        "rules": "When you hit with a melee attack using this weapon, you deal an additional 2d8 necrotic damage. This effect cannot be resisted."
      },
      {
        "title": "Temporary Hit Points",
        "rules": "You gain temporary hit points equal to half the necrotic damage dealt by this weapon. These hit points are lost when you take any other damage."
      }
    ],
    "levelRequirementReason": "Only those with considerable experience and strength can wield such a powerful and malevolent artifact.",
    "vendorReason": "The tomb gatekeeper, guardian of the crypts, is entrusted by the King of Tombs to sell this potent relic to worthy souls.",
    "shippingDetail": "The weapon arrives encased in a thick layer of obsidian sheathing to protect both the carrier and the item from its malevolent energies.",
    "usage": {
      "activation": "Instantaneous effect on each successful melee attack.",
      "duration": "Until expended or destroyed.",
      "endsWhen": "Exhausted upon dealing damage, lost when you take any other damage.",
      "charges": "Unlimited charges; the weapon's power is drawn from the soul of its bearer."
    },
    "priceReason": "The Necrotic Infusion is a relic of immense power and dark lore, making it valuable even at this reduced price.",
    "priceOriginal": 220000,
    "priceReviewedAt": "2026-07-23T19:10:45.588929+00:00",
    "aiReviewedAt": "2026-07-23T19:10:45.588929+00:00",
    "aiReviewVersion": 1
  },
  "tomb_kings_pharaoh_shroud": {
    "id": "tomb_kings_pharaoh_shroud",
    "name": "Tomb Kings Pharaoh Shroud",
    "description": "The Tomb Kings Pharaoh Shroud is a linen shroud woven with threads of ancient magic, evoking the power of long-dead rulers. Crafted by skilled Tomb Embalmers in the pyramids, it whispers secrets of the afterlife to those who wear it at night. The shroud not only grants advantage on saving throws against undead fear but also preserves minor wounds, healing 1d4 hit points overnight as long as it remains undisturbed.",
    "category": "equipment",
    "price": 18500,
    "icon": "🧣",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on saves vs. undead fear",
      "Preserves minor wounds (heals 1d4 HP overnight)"
    ],
    "vendor": "tomb_kings_pyramid",
    "shippedBy": "Mummy Wrap",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Advantage on Saves Against Undead Fear",
        "rules": "You gain advantage on saving throws against the fear of undead creatures as long as you are wearing this shroud."
      },
      {
        "title": "Preserves Minor Wounds",
        "rules": "While worn, the shroud heals 1d4 hit points each night if you have no other wounds. This effect ends when the shroud is removed or damaged beyond repair."
      }
    ],
    "levelRequirementReason": "This shroud requires a minimum level of 6 to wield its power, as it channels ancient magic that only experienced adventurers can properly harness.",
    "vendorReason": "The Tomb Kings Pyramid is the ancestral home of skilled embalmers who have mastered the art of crafting such magical shrouds.",
    "shippingDetail": "Shipped by Mummy Wrap, this item arrives wrapped in a cryptic spell to ensure its power remains intact until it reaches its destination.",
    "usage": {
      "activation": "Passive effect as long as the shroud is worn and undisturbed.",
      "duration": "Instantaneous healing effect each night while worn; duration ends when removed or damaged beyond repair.",
      "endsWhen": "The effect ends if you remove it, damage it irreparably, or die.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Given its rarity and the ancient magic required for crafting such a shroud, this item is priced at 18500 XP.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-23T19:10:59.884304+00:00",
    "aiReviewedAt": "2026-07-23T19:10:59.884304+00:00",
    "aiReviewVersion": 1
  },
  "tomb_kings_phylactery_seal": {
    "id": "tomb_kings_phylactery_seal",
    "name": "Tomb Kings Phylactery Seal (Scarab)",
    "description": "The Tomb Kings Phylactery Seal, a shimmering scarab crafted from the polished obsidian of ancient tombs, protects its wearer's phylactery by instantly repairing minor damage when invoked. The seal whispers secrets of the dead, granting +1 to Intelligence for one day upon use. Crafted under the watchful gaze of the King of Tombs, this relic is a testament to the pharaohs' enduring legacy and their mastery over life and death.",
    "price": 1000,
    "icon": "🪲",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Phylactery Repair",
      "Whispering Secrets"
    ],
    "vendor": "tomb_gatekeeper",
    "shippedBy": "Pharaonic Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Phylactery Repair",
        "rules": "Activates as a bonus action. Instantly repairs all damage to the user's phylactery, consuming the scarab in the process."
      },
      {
        "title": "Whispering Secrets",
        "rules": "Used as an action. Grants +1 Intelligence for 24 hours upon activation. The scarab whispers ancient knowledge that can be heard by anyone who holds it."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level to ensure the user is capable of handling its mystical power and understanding its whispered secrets.",
    "vendorReason": "The Tomb Gatekeeper, guardian of ancient tombs, holds this relic as it connects directly with the pharaohs' legacy.",
    "shippingDetail": "Delivered by a fleet of sacred falcons, ensuring swift and safe transport from the heart of the desert tombs to any destination.",
    "usage": {
      "activation": "Activates as a bonus action for Phylactery Repair. Activated as an action for Whispering Secrets.",
      "duration": "Instantaneous for Phylactery Repair. +1 Intelligence effect lasts until midnight after use.",
      "endsWhen": "Exhausted when used or consumed; no recharge required.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the item's rarity and the pharaohs' control over its creation, balancing its powerful effects.",
    "priceOriginal": 280000,
    "priceReviewedAt": "2026-07-23T19:10:41.465158+00:00",
    "aiReviewedAt": "2026-07-23T19:10:41.465158+00:00",
    "aiReviewVersion": 1
  },
  "tomb_kings_recipe_mummy_wrap_sandwich": {
    "id": "tomb_kings_recipe_mummy_wrap_sandwich",
    "name": "Recipe: Tomb Kings Mummy Wrap Sandwich",
    "description": "The Recipe: Tomb Kings Mummy Wrap Sandwich is a culinary conundrum—a sandwich encased in edible bandages, crafted by the skilled embalmers of the ancient Tomb Kings. These wrappings imbue the food within with a magical preservation that lasts for thirty days, ensuring its freshness even after long voyages. When consumed, the eater gains +1 AC for an hour as if protected by a thin layer of linen. The sandwich's unique taste, reminiscent of dust and old linen, can be quite off-putting, imposing disadvantage on Charisma checks while savoring it.",
    "price": 1000,
    "icon": "📜",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Edible Preservation",
      "Temporary Armor"
    ],
    "vendor": "tomb_kings",
    "shippedBy": "Sarcophagus Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Edible Preservation",
        "rules": "Activates when the sandwich is made. The food within remains preserved for thirty days, unaffected by spoilage or decay."
      },
      {
        "title": "Temporary Armor",
        "rules": "Eating the sandwich grants +1 AC for one hour, as if wearing light armor. This effect ends upon consuming the sandwich."
      }
    ],
    "levelRequirementReason": "The recipe requires basic knowledge of food preparation and a willingness to brave its peculiar taste.",
    "vendorReason": "Only the skilled embalmers of the Tomb Kings have the expertise to create this unique sandwich, preserving it as both a culinary and magical treat.",
    "shippingDetail": "Ships with care within specially lined sarcophagi to ensure freshness during transport.",
    "usage": {
      "activation": "Passive upon consumption of the sandwich.",
      "duration": "One hour after eating.",
      "endsWhen": "The effect ends when the one-hour duration expires or if the eater stops wearing it before then.",
      "charges": "Unlimited; the recipe can be made as many times as needed."
    },
    "priceReason": "The rare ingredients and ancient crafting process contribute to its relatively high price, making it a sought-after item among adventurers.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-23T19:10:32.100497+00:00",
    "aiReviewedAt": "2026-07-23T19:10:32.100497+00:00",
    "aiReviewVersion": 1
  },
  "tomb_kings_ritual_of_command": {
    "id": "tomb_kings_ritual_of_command",
    "name": "Tomb Kings Ritual of Command (Army)",
    "description": "The Tomb Kings Ritual of Command is a dark, ritualistic tome bound in black leather and adorned with cryptic sigils. When invoked within a local graveyard, it channels necromantic energies to raise and bind 5d100 undead minions (CR 1/4) to your command. These skeletal warriors obey your every word for precisely one month before disintegrating into dust. The ritual is a relic of the ancient Tomb Kings, forged in the heart of their forgotten tombs by King Khaman himself.",
    "price": 1000,
    "icon": "💀",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Raising Undead Minions",
      "Temporary Servitude"
    ],
    "vendor": "tomb_gatekeeper",
    "shippedBy": "Necrotic Courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Raising Undead Minions",
        "rules": "This ritual automatically raises and binds 5d100 CR 1/4 undead minions within a 30-foot radius of the graveyard. The summoned creatures obey your commands for one month before disintegrating into dust, unless dismissed by you."
      },
      {
        "title": "Temporary Servitude",
        "rules": "The summoned undead are under your control for exactly one month after the ritual is performed. They cannot be commanded beyond this period and will dissolve upon expiration of their servitude."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 10 to invoke such dark magic.",
    "vendorReason": "The Tomb Gatekeeper, a keeper of ancient secrets and tombs, is trusted with the rituals of the dead, including this powerful necromantic command.",
    "shippingDetail": "Delivered by the Necrotic Courier, a spectral messenger that ensures safe passage through haunted realms.",
    "usage": {
      "activation": "Action",
      "duration": "One month per successful invocation",
      "endsWhen": "The summoned undead disintegrate after one month or if dismissed prematurely",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this ritual is a powerful but not overpowered tool for necromancers.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T19:11:14.248102+00:00",
    "aiReviewedAt": "2026-07-23T19:11:14.248102+00:00",
    "aiReviewVersion": 1
  },
  "tomb_kings_ritual_priest": {
    "id": "tomb_kings_ritual_priest",
    "name": "Tomb Kings Ritual Priest (Hire)",
    "description": "Hire a Tomb King Ritual Priest to oversee necromantic rituals. This loyal priest ensures your rituals are conducted with precision and power, granting +4 to the DC of any ritual you perform under their watch. Their presence alone is a testament to ancient knowledge, requiring only the finest materials and respect for the dead. The priest costs 500 gp per day, ensuring that the ritual's success is as much about tradition as it is about magic.",
    "price": 1000,
    "icon": "⚰️",
    "stock": 4,
    "rarity": "epic",
    "effects": [
      "Ritual Precision",
      "Daily Cost"
    ],
    "vendor": "tomb_gatekeeper",
    "shippedBy": "Bodyguard Escort",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ritual Precision",
        "rules": "When you attempt a necromantic ritual, the Tomb King Ritual Priest increases your spell save DC by +4. This effect lasts until the end of the ritual or when another creature attempts to cast a similar ritual within 30 feet."
      },
      {
        "title": "Daily Cost",
        "rules": "The priest requires daily upkeep costing 500 gp, which is deducted from your funds at the start of each day. This cost ensures the priest's devotion and attention are maintained."
      }
    ],
    "levelRequirementReason": "Even the simplest ritual can be complex when dealing with necromantic magic; a low-level caster benefits most from this specialized help.",
    "vendorReason": "The Tomb Gatekeeper has the connections and resources to hire such a skilled priest for your needs.",
    "shippingDetail": "Secure, swift escort by trusted tomb guardians ensures the priest arrives in perfect condition.",
    "usage": {
      "activation": "Passive effect when the Ritual Priest is present during necromantic rituals.",
      "duration": "Until the end of the ritual or another similar ritual within 30 feet.",
      "endsWhen": "Another creature attempts a similar ritual within 30 feet or at the end of the ritual.",
      "charges": "Unlimited, as long as daily costs are met."
    },
    "priceReason": "The cost reflects both the priest's expertise and the daily upkeep required to maintain their presence.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T19:10:57.181769+00:00",
    "aiReviewedAt": "2026-07-23T19:10:57.181769+00:00",
    "aiReviewVersion": 1
  },
  "tomb_kings_royal_chariot": {
    "id": "tomb_kings_royal_chariot",
    "name": "Tomb Kings Royal Necro-Chariot",
    "description": "The Tomb Kings Royal Necro-Chariot, a skeletal steed chariot forged from ancient bones and deathly souls, rumbles across the desert sands at an unnatural speed. Its crew of spectral horses gallops tirelessly without need for rest, driven by the unending hunger for more souls to power its infernal engines. The chariot's origins lie in the very heart of the Tomb King's necropolis, where it was crafted by the hands of a king who commands even death itself.",
    "price": 1000,
    "icon": "🐎",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Spectral Crew",
      "Soul Sacrifice"
    ],
    "vendor": "tomb_gatekeeper",
    "shippedBy": "Procession of Wraiths",
    "levelRequirement": 12,
    "factionBonus": {
      "transport": 70
    },
    "effectDetails": [
      {
        "title": "Spectral Crew",
        "rules": "The chariot is crewed by spectral horses. These undead creatures do not tire, and the chariot's speed remains constant so long as the Tomb King or one of his loyal necromancers commands it."
      },
      {
        "title": "Soul Sacrifice",
        "rules": "To maintain its supernatural speed, the chariot requires a daily soul sacrifice. If this requirement is not met, its speed drops to 30 feet until a successful DC 18 Wisdom saving throw restores normal speed and undead crew."
      }
    ],
    "levelRequirementReason": "Only those of considerable power can command the necro-chariot's spectral crew and navigate its infernal engines.",
    "vendorReason": "The tomb gatekeeper, a guardian of the ancient necropolis, occasionally allows select travelers to rent this chariot for expeditions into the heart of the Tomb Kings' domain.",
    "shippingDetail": "Delivered by an escort of spectral horses that precede the chariot, ensuring safe passage through treacherous desert terrain and undead-infested areas.",
    "usage": {
      "activation": "Instantaneous activation upon command; requires a successful DC 15 Charisma (Persuasion) check to command the crew.",
      "duration": "Until commanded otherwise or until a daily soul sacrifice is not made.",
      "endsWhen": "Daily soul sacrifice is missed, requiring a Wisdom saving throw with a DC of 18 to maintain speed and undead crew.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The chariot's legendary craftsmanship and the daily maintenance required for its spectral crew justify this moderate price in XP.",
    "priceOriginal": 290000,
    "priceReviewedAt": "2026-07-23T19:11:16.139169+00:00",
    "aiReviewedAt": "2026-07-23T19:11:16.139169+00:00",
    "aiReviewVersion": 1
  },
  "tomb_kings_sand_guardian_summon_premium": {
    "id": "tomb_kings_sand_guardian_summon_premium",
    "name": "Tomb Kings Sand Guardian Summon (Premium)",
    "description": "The Tomb Kings Sand Guardian Summon (Premium) is a delicate amulet made by the ancient Tomb Mages, crafted from desert sand and enchanted with protective magic. This artifact can be invoked to summon a minor guardian of shifting dunes, which stands vigilant for an hour, alerting its master to any intruders within 30 feet. The guardian's sandy form is both eerie and awe-inspiring, capable of dealing 1d6 points of sand damage with each successful melee attack.",
    "price": 1000,
    "icon": "🏺",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Guardian of Shifting Sands",
      "Sandstorm Protection"
    ],
    "vendor": "tomb_kings_pyramid",
    "shippedBy": "Whispering Sands Courier",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Guardian of Shifting Sands",
        "rules": "Activate as a bonus action. The summoned guardian stands watch for one hour, alerting the user to any creatures within 30 feet that attempt to enter or leave its area of effect. If an intruder is detected, the guardian emits a loud sandstorm sound and attacks with advantage until it is destroyed or the duration ends."
      },
      {
        "title": "Sandstorm Protection",
        "rules": "The user gains a +1 bonus to their AC against ranged attacks while the guardian is active. This bonus increases to +2 if there is no cover between the user and the attacker. The effect ends when the guardian dissipates in rain or when its 10 hit points are reduced."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 7 to wield, ensuring that only seasoned adventurers can effectively utilize its protective and offensive capabilities.",
    "vendorReason": "The Tomb Kings Pyramid is the original home of the Sand Guardian Summoning technique and thus retains exclusive rights to sell this artifact.",
    "shippingDetail": "The courier delivers the item via a sandstorm, ensuring that only those with a clear path can receive it.",
    "usage": {
      "activation": "Bonus action to summon and activate guardian; no activation required for passive AC bonus while guardian is present.",
      "duration": "1 hour",
      "endsWhen": "Rain dissipates the guardian or its hit points are reduced to zero.",
      "charges": "Unlimited, recharged by the desert's natural elements."
    },
    "priceReason": "The balanced price reflects the item's rarity and the expertise required for its proper use.",
    "priceOriginal": 21500,
    "priceReviewedAt": "2026-07-23T19:11:28.709185+00:00",
    "aiReviewedAt": "2026-07-23T19:11:28.709185+00:00",
    "aiReviewVersion": 1
  },
  "tomb_kings_sandstone_grinder": {
    "id": "tomb_kings_sandstone_grinder",
    "name": "Tomb Kings Sandstone Grinder",
    "description": "The Tomb Kings Sandstone Grinder is a finely crafted relic, its surface etched with arcane symbols and polished to a shimmering sheen by generations of carvers. When you turn it, the stone grinds ancient spices into fine dust that enhances your historical knowledge, granting +1 proficiency bonus on History checks related to tomb lore. Its preserved sandstone core also extends the shelf life of perishable foodstuffs in the wraps it accompanies, making it invaluable for long expeditions through the necropolis. The grinder's operation clouds the air with a thick dust, reducing visibility and requiring concentration.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥪",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Enhances Historical Knowledge",
      "Extends Food Preservation"
    ],
    "vendor": "tomb_kings_pyramid",
    "shippedBy": "Sandy Stone Shipment",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Historical Knowledge",
        "rules": "When you use an action to turn the grinder, it grants you a +1 bonus on History checks related to tomb recipes and lore. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Extended Food Preservation",
        "rules": "The food wrapped in the cloth that accompanies this grinder (if any) is preserved for an additional 24 hours, effectively doubling its shelf life."
      }
    ],
    "levelRequirementReason": "This item's simplicity and utility make it accessible to even low-level explorers.",
    "vendorReason": "The Tomb Kings are renowned for their craftsmanship and knowledge of ancient secrets, making them the perfect purveyors of this invaluable relic.",
    "shippingDetail": "Delivered by the trusted Sandy Stone Shipment, known for its reliability in navigating through the treacherous desert routes.",
    "usage": {
      "activation": "Action (to turn and grind spices)",
      "duration": "Until end of next short or long rest",
      "endsWhen": "Ends at the start of your next short or long rest",
      "charges": "Unlimited, but requires concentration during use"
    },
    "priceReason": "Balanced to reflect its utility and rarity without being overpowered.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T19:11:26.907936+00:00",
    "aiReviewedAt": "2026-07-23T19:11:26.907936+00:00",
    "aiReviewVersion": 1
  },
  "tomb_kings_sarcophagus_of_power": {
    "id": "tomb_kings_sarcophagus_of_power",
    "name": "Tomb Kings Sarcophagus of Power",
    "description": "The Tomb Kings Sarcophagus of Power stands as a grand testament to ancient craftsmanship, its gilded surface shimmering with cryptic runes that pulse with raw essence. This ornate sarcophagus serves not only as a resting place for powerful souls but also as an enigmatic ritual focus, allowing the soul within to be temporarily shielded from divine interference. Crafted by the King of Tombs himself, this relic preserves its contents in eternal slumber until summoned by the right hand.",
    "price": 1000,
    "icon": "🪦",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Soul Preservation",
      "Divine Shielding"
    ],
    "vendor": "tomb_gatekeeper",
    "shippedBy": "Procession of Servants",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Soul Preservation",
        "rules": "Activates when a soul of CR up to 15 is placed within. The soul remains dormant and can be retrieved at any time by the owner, with no additional cost or risk."
      },
      {
        "title": "Divine Shielding",
        "rules": "While inside the sarcophagus, the soul gains immunity to all divine effects, including spells like Greater Restoration and Lesser Planar Ally. The effect lasts until the soul is retrieved by its owner. No save is required."
      }
    ],
    "levelRequirementReason": "Only a high-level warlock or necromancer can manage this powerful artifact effectively.",
    "vendorReason": "The Tomb Gatekeeper, guardian of ancient relics, ensures that only those with the proper knowledge and power can acquire such a potent item.",
    "shippingDetail": "Delivered by a solemn procession, ensuring the sarcophagus arrives in pristine condition, free from any defilement or tampering.",
    "usage": {
      "activation": "Activates upon placing a soul within it. Can be used once per month.",
      "duration": "Permanent until retrieved",
      "endsWhen": "The soul is retrieved by its owner",
      "charges": "Recharges after one month"
    },
    "priceReason": "This relic's price reflects the craftsmanship and power it commands, requiring a significant investment in time and resources to craft.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-23T19:12:01.082735+00:00",
    "aiReviewedAt": "2026-07-23T19:12:01.082735+00:00",
    "aiReviewVersion": 1
  },
  "tomb_kings_scroll_of_command": {
    "id": "tomb_kings_scroll_of_command",
    "name": "Tomb Kings Scroll of Command (Low Tier)",
    "description": "The Tomb Kings Scroll of Command hums with ancient magic, its brittle parchment crackling as it whispers orders to the undead. Crafted by the enigmatic Tomb Kings during their reign over the necropolis, this scroll commands even the most lowly skeletons and zombies, compelling them to obey for an hour before crumbling into dust. The scroll's power is drawn from the very earth of the tomb, making it a relic both potent and fleeting.",
    "price": 1000,
    "icon": "📜",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Command Skeletons/Zombies",
      "Scroll Consumed"
    ],
    "vendor": "tomb_gatekeeper",
    "shippedBy": "Sepulcher Case",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Command Skeletons/Zombies",
        "rules": "As an action, you can command up to 1d6 skeletons or zombies within 30 feet to obey your simple orders for one hour. They follow your commands faithfully until the time expires or they are harmed. Thereafter, the scroll is consumed and cannot be used again."
      },
      {
        "title": "Scroll Consumed",
        "rules": "Upon successful command of skeletons/zombies, the scroll crumbles into dust, leaving no trace of its magical properties behind."
      }
    ],
    "levelRequirementReason": "This scroll is designed for adventurers at a lower level to have access to a basic form of necromantic control.",
    "vendorReason": "The tomb gatekeeper, guardian of the necropolis, sells these scrolls as they are part of his duties to maintain order within the tombs.",
    "shippingDetail": "Delivered via a sealed sepulcher case that ensures safe transport through the labyrinthine tombs.",
    "usage": {
      "activation": "Action",
      "duration": "One hour",
      "endsWhen": "The time expires or the skeletons/zombies are harmed",
      "charges": "Unlimited, but each use consumes one scroll"
    },
    "priceReason": "This price reflects a rare and potent item that allows basic control over undead without requiring higher-level magic.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T19:11:55.712049+00:00",
    "aiReviewedAt": "2026-07-23T19:11:55.712049+00:00",
    "aiReviewVersion": 1
  },
  "tomb_kings_soul_jar_extraction": {
    "id": "tomb_kings_soul_jar_extraction",
    "name": "Tomb Kings Soul Jar Extraction Service",
    "description": "The Tomb Kings Soul Jar Extraction Service allows a bound soul to be extracted from its ancient jar and reanimated into a fresh, powerful undead servant. The ritual requires 24 hours of careful work in a sacred burial chamber, during which rival necromancers may attempt to claim the soul for their own. This service is offered by King Amun-Ra himself, whose crypts hold the most potent souls bound within jars.",
    "price": 1000,
    "icon": "⚱️",
    "stock": 4,
    "rarity": "legendary",
    "effects": [
      "Extract and reanimate a powerful undead servant",
      "Attracts attention from rival necromancers"
    ],
    "vendor": "tomb_gatekeeper",
    "shippedBy": "Enchanted Vessel",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Soul Extraction",
        "rules": "This service requires 24 hours of uninterrupted work in the King's Burial Chamber. During this time, a rival necromancer may attempt to claim the soul by spending a full day performing their own ritual within 1 mile of the chamber. The extraction is successful with a DC 18 Wisdom (Insight) check."
      },
      {
        "title": "Undead Servant",
        "rules": "The reanimated undead serves for one month, after which it either decays into dust or can be re-extracted and bound to another vessel. The undead cannot be destroyed by mundane means but is vulnerable to holy damage."
      }
    ],
    "levelRequirementReason": "Only a seasoned adventurer with experience in necromancy can perform this delicate ritual.",
    "vendorReason": "The tomb gatekeeper oversees the sacred rituals of the King's Burial Chamber and ensures only those of proven skill attempt to extract souls from these powerful jars.",
    "shippingDetail": "The service is shipped directly by enchanted vessel, ensuring safe delivery to the buyer’s location within a week.",
    "usage": {
      "activation": "A full day of uninterrupted work in the King's Burial Chamber",
      "duration": "One month until the undead servant decays or can be re-extracted",
      "endsWhen": "The extraction fails, the rival necromancer claims the soul, or the service is interrupted by external means",
      "charges": "Unlimited uses"
    },
    "priceReason": "This service requires rare materials and the expertise of a skilled necromancer.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-23T19:11:55.863693+00:00",
    "aiReviewedAt": "2026-07-23T19:11:55.863693+00:00",
    "aiReviewVersion": 1
  },
  "tomb_kings_undead_legion_hire": {
    "id": "tomb_kings_undead_legion_hire",
    "name": "Tomb Kings Undead Legion Hire (500 Troops)",
    "description": "Forge a pact with the Tomb Kings and summon an army of disciplined, tireless undead soldiers. These 500 CR 1/4 skeletal warriors march unerringly for one year, their bones creaking in eerie harmony. They require no sustenance or rest, but demand a monthly tribute of raw soul energy worth 50,000 gp to maintain their spectral forms. Crafted by the King of Tombs himself, these undead are forged from ancient tombs and cursed earth.",
    "price": 1000,
    "icon": "💀",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "500 Undead Skeletons (CR 1/4)",
      "Monthly Soul Energy Tribute"
    ],
    "vendor": "tomb_gatekeeper",
    "shippedBy": "Dark Procession",
    "levelRequirement": 16,
    "factionBonus": {
      "military": 100
    },
    "effectDetails": [
      {
        "title": "Spectral Legion",
        "rules": "At the start of each month, the player must provide 50,000 gp in raw soul energy to maintain the undead soldiers. Failure to do so results in the immediate cessation of their services."
      },
      {
        "title": "Unyielding Servants",
        "rules": "The summoned undead require no food or rest and are disciplined beyond mortal ken. They can be commanded by a willing leader, providing a +5 bonus to any military checks for the duration of one year."
      }
    ],
    "levelRequirementReason": "Requires at least level 16 to command such an army and provide the necessary raw soul energy.",
    "vendorReason": "The Tomb Gatekeeper, who oversees all necromantic affairs of the Tombs, can facilitate this pact with the undead.",
    "shippingDetail": "The Dark Procession ensures swift delivery and safe arrival of the skeletal legion.",
    "usage": {
      "activation": "Pact made at any time, once per year",
      "duration": "One year from activation date",
      "endsWhen": "Monthly tribute not met or pact broken",
      "charges": "Unlimited; requires ongoing monthly payment"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the rare and powerful nature of summoning such an undead legion.",
    "priceOriginal": 600000,
    "priceReviewedAt": "2026-07-23T19:11:43.771408+00:00",
    "aiReviewedAt": "2026-07-23T19:11:43.771408+00:00",
    "aiReviewVersion": 1
  },
  "tomb_kings_wario_mummy_wrapping": {
    "id": "tomb_kings_wario_mummy_wrapping",
    "name": "Tomb Kings Wario Mummy Wrapping",
    "description": "Bandages with Wario's face printed on them.",
    "category": "equipment",
    "price": 4200,
    "icon": "🎁",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Wrap yourself: +1 AC for 1 hour (cosplay)",
      "Undead are confused: advantage on Charisma with them",
      "You smell like garlic and old linen: disadvantage on Stealth",
      "Made by: Tomb Kings (Wario Halloween Special)"
    ],
    "vendor": "tomb_kings",
    "shippedBy": "Sarcophagus Delivery",
    "levelRequirement": 4
  },
  "tomb_kings_wario_sarcophagus_decal": {
    "id": "tomb_kings_wario_sarcophagus_decal",
    "name": "Tomb Kings Wario Sarcophagus Decal",
    "description": "The Tomb Kings Wario Sarcophagus Decal is a ghastly sticker of Wario's face, crafted by the dark artisans of the Tomb Kings. When applied to any surface, it emits an eerie glow in the dark, giving you advantage on Intimidation checks and disadvantage on Stealth attempts. The undead are baffled by its presence, granting you advantage on Charisma (Intimidation) checks against them. This decal is a macabre reminder of the Tomb Kings' whimsical humor.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏺",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Advantage in Dark",
      "Undead Confusion"
    ],
    "vendor": "tomb_kings",
    "shippedBy": "Sarcophagus Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage in Dark",
        "rules": "When you are in darkness, you gain advantage on Intimidation checks. This effect lasts until the start of your next turn."
      },
      {
        "title": "Undead Confusion",
        "rules": "You have advantage on Charisma (Intimidation) checks against undead creatures. The effect ends when you make such a check successfully."
      }
    ],
    "levelRequirementReason": "This decal is suitable for adventurers of any level, as it serves as both a humorous and practical tool.",
    "vendorReason": "The Tomb Kings are known for their dark humor and craftsmanship, making this peculiar item a staple in their inventory.",
    "shippingDetail": "Ships via crypt courier with a delivery delay of one night.",
    "usage": {
      "activation": "Passive effect once applied.",
      "duration": "Instantaneous, ends on the start of your next turn or when you make a successful Charisma (Intimidation) check against undead.",
      "endsWhen": "The start of your next turn or upon successful use in an Intimidation check with undead.",
      "charges": "Unlimited"
    },
    "priceReason": "For a common item, the price reflects its unique and humorous utility without overbalancing.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T19:12:12.295259+00:00",
    "aiReviewedAt": "2026-07-23T19:12:12.295259+00:00",
    "aiReviewVersion": 1
  },
  "tomb_raider_pistols": {
    "id": "tomb_raider_pistols",
    "name": "Dual Pistols",
    "description": "Dual Pistols are a pair of sleek, custom-forged pistols that whisper the secrets of forgotten tombs in their design. Crafted from ancient brass alloy and etched with runes said to enhance the wielder's acrobatic prowess, these pistols are as deadly in combat as they are elegant in form. Drawing on the essence of the grave, they grant the user a bonus action shot during acrobatics or combat, providing an edge when speed meets precision.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔫",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Dual Wield",
      "Acrobatic Edge"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Holster Set",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Dual Wield",
        "rules": "You can fire both pistols as a bonus action. Each pistol deals 1d8 piercing damage, and you have advantage on attack rolls made with these weapons."
      },
      {
        "title": "Acrobatic Edge",
        "rules": "While in the air or performing acrobatics, you gain a +2 bonus to Dexterity (Acrobatics) checks. Additionally, you can make an unarmed strike as part of this action without provoking opportunity attacks."
      }
    ],
    "levelRequirementReason": "Requires at least 6th level to wield the precision and acrobatic skill these pistols demand.",
    "vendorReason": "The Gilded Gryphon specializes in rare, exotic weapons that blur the line between combat and artistry.",
    "shippingDetail": "Delivered with a custom leather holster set for safekeeping.",
    "usage": {
      "activation": "Bonus action to fire both pistols; can be used during acrobatics or as part of an unarmed strike.",
      "duration": "Instantaneous (effect lasts until the start of your next turn).",
      "endsWhen": "Exhausted after one use per short rest.",
      "charges": "Unlimited, but requires a long rest to fully recharge."
    },
    "priceReason": "Balanced at 1000 XP, reflecting the pistols' unique design and the specialized craftsmanship required for their creation.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-23T19:12:37.790884+00:00",
    "aiReviewedAt": "2026-07-23T19:12:37.790884+00:00",
    "aiReviewVersion": 1
  },
  "toppings_for_waffles_garlic_syrup": {
    "id": "toppings_for_waffles_garlic_syrup",
    "name": "Wario's Waffle Topping Kit",
    "description": "Wario's Waffle Topping Kit, a golden syrup container shaped like a mustachioed mascot, brings an unforgettable culinary experience to breakfast tables. The garlic-infused syrup not only enhances waffles with a savory bite but also leaves hands and dishes sticky enough for hours of playful clean-up fun. This kit is the product of Wario's Land’s secret recipe, known to raise charisma by one among those who indulge in its rich flavor.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍯",
    "stock": 13,
    "rarity": "common",
    "effects": [
      "Charisma Boost",
      "Sticky Clean-Up"
    ],
    "vendor": "wario_land",
    "shippedBy": "Topping Truck",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "Consume a waffle topped with this syrup to gain +1 Charisma until the end of your next short or long rest."
      },
      {
        "title": "Sticky Clean-Up",
        "rules": "Any attempt to clean up after using this syrup has disadvantage on the DC. This effect lasts for 24 hours from application."
      }
    ],
    "levelRequirementReason": "This kit is suitable for beginners and casual adventurers, providing a fun culinary experience without heavy prerequisite demands.",
    "vendorReason": "Wario Land is renowned for its quirky and innovative waffle toppings, making this kit a staple in their product line.",
    "shippingDetail": "Delivered by the Topping Truck, known for its eccentric route that might delay delivery slightly due to scenic detours.",
    "usage": {
      "activation": "Consume a waffle topped with this syrup as an action during breakfast time.",
      "duration": "Until the end of your next short or long rest.",
      "endsWhen": "Upon completion of the next short or long rest.",
      "charges": "Unlimited, as it is considered a consumable item."
    },
    "priceReason": "The price reflects the unique and fun culinary experience provided by this kit, making it accessible for players looking to enhance their breakfast rituals without breaking the bank.",
    "priceOriginal": 4300,
    "priceReviewedAt": "2026-07-23T19:13:04.521677+00:00",
    "aiReviewedAt": "2026-07-23T19:13:04.521677+00:00",
    "aiReviewVersion": 1
  },
  "torch_everburning": {
    "id": "torch_everburning",
    "name": "Everburning Torch",
    "description": "A torch that never burns out. Don't put it in your pocket.",
    "category": "equipment",
    "price": 7500,
    "icon": "🔥",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Provides light indefinitely",
      "1 Fire damage if used as a club"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Fireproof Box",
    "levelRequirement": 1
  },
  "toy_train": {
    "id": "toy_train",
    "name": "Toy Train",
    "description": "The Toy Train, a diminutive model of the Excess Express, is crafted from gleaming brass and painted in the livery of the Great Railways Guild. It hums softly as it moves along its miniature tracks, creating a soothing choo-choo sound that can calm even the most restless child. This tiny locomotive is more than just a toy; it's a piece of railway history, perfect for display on any shelf or desk.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🚂",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Goes Choo-Choo",
      "Railway Reminiscence"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Goes Choo-Choo",
        "rules": "As an action, the player can activate the toy train to emit a soothing choo-choo sound. This effect lasts for 1 minute and can be used once per short or long rest."
      },
      {
        "title": "Railway Reminiscence",
        "rules": "When placed on a table within reach, the toy train grants advantage on all History checks related to railroads for 1 hour. This effect ends when the toy train is moved more than 5 feet away from its original location."
      }
    ],
    "levelRequirementReason": "This toy is suitable for players of level 1, as it provides a simple yet enjoyable experience.",
    "vendorReason": "Toad Town Market stocks this charming item among their array of collectibles and novelties.",
    "shippingDetail": "Ships via Box, arriving within 3 days if local delivery is possible; otherwise, expect up to a week for standard shipping.",
    "usage": {
      "activation": "Action: As an action, the player can activate the toy train's choo-choo sound.",
      "duration": "Instantaneous activation with 1-minute duration per use.",
      "endsWhen": "The effect ends when used once per short or long rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The toy train is priced at 1000 XP, reflecting its unique combination of nostalgia and practical utility for players.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T19:13:06.363051+00:00",
    "aiReviewedAt": "2026-07-23T19:13:06.363051+00:00",
    "aiReviewVersion": 1
  },
  "trainer_guild_animal_whistle": {
    "id": "trainer_guild_animal_whistle",
    "name": "Trainer Guild Animal Whistle",
    "description": "The Trainer Guild Animal Whistle is a sleek, polished brass instrument forged in the heart of the guild's forge. Crafted from the bones of ancient animals and imbued with the guild’s arcane energies, it can attract or calm specific types of creatures as the DM deems fitting. The whistle resonates with a sound that echoes like distant thunder, compelling nearby animals to either approach with caution or retreat peacefully.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐕",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Attract or Calm",
      "Limited Use"
    ],
    "vendor": "trainer_guild_chapter",
    "shippedBy": "Swift Pony Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Attract or Calm",
        "rules": "The user can activate the whistle as an action, choosing to either attract one creature of a specific type within 60 feet or calm it. The effect lasts for 1 hour unless dispelled by magic or an opposing command."
      },
      {
        "title": "Limited Use",
        "rules": "The whistle has only three uses per day and requires 8 hours to recharge after all charges are expended."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners who wish to interact with animals in a controlled manner.",
    "vendorReason": "The Trainer Guild has exclusive rights to sell items that aid their members and apprentices in managing animal interactions.",
    "shippingDetail": "Ships via the Swift Pony Express, which delivers within a week of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour or until dispelled",
      "endsWhen": "Use is expended or dispelled by magic",
      "charges": "3 uses per day"
    },
    "priceReason": "The balanced price reflects the item's limited use and specific utility, suitable for beginners.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T19:13:32.800899+00:00",
    "aiReviewedAt": "2026-07-23T19:13:32.800899+00:00",
    "aiReviewVersion": 1
  },
  "trainer_guild_badge": {
    "id": "trainer_guild_badge",
    "name": "Trainer Guild Badge (Rank 3)",
    "description": "The Trainer Guild Badge (Rank 3) gleams with a polished sheen, its surface etched with intricate patterns of beasts and runes. Crafted by the Trainer Guild from high-quality leather and enchanted with their signature magic, this badge not only symbolizes mastery but also grants the wearer an aura that commands even the most fierce creatures. With a successful Animal Handling check, you can pacify any hostile beast within 30 feet; doing so requires a DC 14 Wisdom (Animal Handling) check.",
    "price": 1000,
    "icon": "🏅",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "+2 to Animal Handling checks",
      "Can pacify hostile beasts (DC 14 check)"
    ],
    "vendor": "trainer_guild_chapter",
    "shippedBy": "Trainer Guild Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Animal Handling",
        "rules": "This badge provides a +2 bonus to all Animal Handling checks, enhancing your ability to handle and command creatures."
      },
      {
        "title": "Pacify Hostile Beasts",
        "rules": "By making an Animal Handling check with a DC of 14, you can pacify any hostile beast within 30 feet. The effect lasts for one minute or until the creature makes an attack against you."
      }
    ],
    "levelRequirementReason": "This badge is suitable for those who have just begun their journey in the art of training and handling creatures.",
    "vendorReason": "The Trainer Guild maintains a robust network of chapters, each equipped to supply such badges to their members.",
    "shippingDetail": "Ships via the Trainer Guild's own courier service for swift delivery.",
    "usage": {
      "activation": "Passive effect; requires a successful Animal Handling check to pacify hostile creatures.",
      "duration": "One minute or until the creature attacks you.",
      "endsWhen": "The target beast makes an attack against you, or when the duration expires.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted with high-quality materials and guild magic, this badge is a fair price for its utility.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-23T19:13:36.905346+00:00",
    "aiReviewedAt": "2026-07-23T19:13:36.905346+00:00",
    "aiReviewVersion": 1
  },
  "trainer_guild_badge_pouch_belt": {
    "id": "trainer_guild_badge_pouch_belt",
    "name": "Trainer Guild Badge Pouch Belt",
    "description": "The Trainer Guild Badge Pouch Belt is a meticulously crafted leather belt that features eight small pouches, each designed to hold one of your most cherished badges or tokens. It's made by the skilled hands of the Guild Leatherworkers and imbued with subtle magic that grants you +1 to either Intimidation checks or Inspiration from allies when wearing it. The jingling sound of the pouches adds a comforting rhythm during quiet moments, making this belt not just functional but also a symbol of your journey through the Trainer Guild's halls.",
    "category": "equipment",
    "price": 1000,
    "icon": "👖",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Badges Boost",
      "Silent Rhythm"
    ],
    "vendor": "trainer_guild_hall",
    "shippedBy": "Badge Buckle Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Badges Boost",
        "rules": "While wearing at least one badge from this belt, you gain a +1 bonus to either your Intimidation checks or Inspiration from allies. This effect is active as long as the belt is worn and the badges are in place."
      },
      {
        "title": "Silent Rhythm",
        "rules": "The pouches of the belt produce a subtle jingling sound when you move, providing a +1 bonus to Dexterity (Stealth) checks if used during quiet moments. This effect lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "The belt requires at least level 6 to ensure that the wearer has achieved some significant milestones within the Trainer Guild.",
    "vendorReason": "As a symbol of accomplishment, the Trainer Guild Hall is the most fitting vendor for this prestigious item.",
    "shippingDetail": "Delivered swiftly by Badge Buckle Express, ensuring that your belt arrives in perfect condition.",
    "usage": {
      "activation": "Passive effect; no activation required to benefit from the bonuses provided by wearing badges or during quiet moments.",
      "duration": "Instantaneous for each check; lasts until the end of your next turn for Stealth checks.",
      "endsWhen": "Exhausted when all badges are removed or the belt is taken off, or if you make a Dexterity (Stealth) check without using the Silent Rhythm effect.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its rare craftsmanship and utility within the guild's hierarchy.",
    "priceOriginal": 16000,
    "priceReviewedAt": "2026-07-23T19:13:39.419837+00:00",
    "aiReviewedAt": "2026-07-23T19:13:39.419837+00:00",
    "aiReviewVersion": 1
  },
  "trainer_guild_battle_strat_session": {
    "id": "trainer_guild_battle_strat_session",
    "name": "Trainer Guild Battle Strat Session",
    "description": "Forge your battle strategy with a Trainer Guild Battle Strat Session. This meticulously crafted session provides you with Pokémon-inspired tactics that can be applied to any combat. Learn the critical 'switch-out' tactic, allowing you to disengage as a bonus action once per short rest. The session concludes with a complimentary Poké Puff, a minor healing snack that restores 1d4+2 hit points. Crafted by experienced Gym Leaders using ancient battle scrolls and their accumulated wisdom.",
    "price": 1000,
    "icon": "⚔️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Battle Strat Boost",
      "Switch-Out Mastery"
    ],
    "vendor": "trainer_guild_academy",
    "shippedBy": "Battle Board Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Battle Strat Boost",
        "rules": "At the beginning of your first combat on the initiative order, you gain +1 to initiative and one attack roll. This effect lasts for the duration of the session."
      },
      {
        "title": "Switch-Out Mastery",
        "rules": "You learn the 'switch-out' tactic, which allows you to disengage as a bonus action once per short or long rest. You must have at least 1 hit point remaining to use this ability."
      }
    ],
    "levelRequirementReason": "The session is designed for beginners and those who need to sharpen their combat strategies.",
    "vendorReason": "As the heart of Pokémon training, the Guild Academy provides foundational sessions like these.",
    "shippingDetail": "Ships directly from the Trainer Guild Academy; delivery is swift and reliable.",
    "usage": {
      "activation": "Passive effect upon starting combat.",
      "duration": "Until the end of the session (typically one hour).",
      "endsWhen": "The session concludes or you leave combat.",
      "charges": "Unlimited uses per day, but only once per rest."
    },
    "priceReason": "This price reflects the quality and expertise of the trainers who prepare these sessions.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-23T19:13:33.039914+00:00",
    "aiReviewedAt": "2026-07-23T19:13:33.039914+00:00",
    "aiReviewVersion": 1
  },
  "trainer_guild_berry_juice_recipe": {
    "id": "trainer_guild_berry_juice_recipe",
    "name": "Recipe: Trainer Guild Berry Juice",
    "description": "The Trainer Guild Berry Juice recipe yields a refreshing elixir made from wild berries for rapid recovery. Sip it during training to heal 1d8 hit points instantly, ensuring you're always at your peak. This juice not only quenches thirst but also grants a temporary boost in speed, allowing you to sprint an additional 5 feet every round for half an hour. Distilled by the Guild Juicers, this potion is a must-have for any serious trainer seeking a competitive edge.",
    "price": 1000,
    "icon": "🥤",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Instant Hit Point Recovery",
      "Speed Boost"
    ],
    "vendor": "trainer_guild_outpost",
    "shippedBy": "Juicy Jug Journal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Hit Point Recovery",
        "rules": "Activates on consumption. Instantly heals the drinker by 1d8 hit points. Requires four berries and quenches thirst. Ends when consumed or after one use."
      },
      {
        "title": "Speed Boost",
        "rules": "Passive effect of +5 feet movement speed for 30 minutes upon consumption. Ends if the drinker is incapacitated or after a single serving."
      }
    ],
    "levelRequirementReason": "Beginners often seek this potion to enhance their stamina and performance during training sessions.",
    "vendorReason": "The outpost frequently hosts trainers in need of quick recovery tools for their rigorous routines.",
    "shippingDetail": "Delivered fresh daily, ensuring the berries are at peak freshness and efficacy.",
    "usage": {
      "activation": "Consumption via drinking.",
      "duration": "Instantaneous hit point recovery; speed boost lasts for 30 minutes.",
      "endsWhen": "Upon consumption or after one use per day.",
      "charges": "Unlimited uses, but only once daily."
    },
    "priceReason": "The recipe's rarity and the cost of wild berries justify its price while remaining accessible for frequent use.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T19:14:16.866817+00:00",
    "aiReviewedAt": "2026-07-23T19:14:16.866817+00:00",
    "aiReviewVersion": 1
  },
  "trainer_guild_berry_press": {
    "id": "trainer_guild_berry_press",
    "name": "Trainer Guild Berry Press",
    "description": "The Trainer Guild Berry Press, a sturdy wooden contraption forged by the skilled hands of Guild Woodworkers, is essential for extracting fresh berry juice. This manual press not only speeds up the process but also ensures that each drop is pure and free from impurities, making it invaluable for any trainer who values precision in their concoctions. A simple twist of the lever initiates a cascade of perfectly juiced berries, leaving behind nothing but vibrant purple stains on your hands.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥤",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Efficient Berry Juicing",
      "Stains Hands Purple"
    ],
    "vendor": "trainer_guild_outpost",
    "shippedBy": "Juice Jug Jig",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Efficient Berry Juicing",
        "rules": "When you activate the Trainer Guild Berry Press as a bonus action, it allows you to instantly complete one round of berry preparation. This grants a +1 bonus to any Nature checks related to berry recipes for 1 hour. The effect ends if you prepare another batch of berries or if your concentration is broken."
      },
      {
        "title": "Stains Hands Purple",
        "rules": "The press leaves behind a permanent, albeit harmless, stain on the user's hands that persists until washed off with soap and water. This effect does not require an action to activate and lasts indefinitely until removed."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners and trainers just starting their journey.",
    "vendorReason": "The Trainer Guild Outpost sells this press as part of its essential equipment line, catering to the needs of novice trainers.",
    "shippingDetail": "Shipped via Juice Jug Jig in 1-3 days, ensuring safe delivery and proper functioning upon arrival.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 hour",
      "endsWhen": "Preparation of another batch of berries or concentration being broken",
      "charges": "Unlimited"
    },
    "priceReason": "The Trainer Guild Berry Press is priced at 1000 XP to reflect its utility in speeding up berry preparation and ensuring pure juice, making it a valuable addition to any trainer's toolkit.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T19:14:02.598188+00:00",
    "aiReviewedAt": "2026-07-23T19:14:02.598188+00:00",
    "aiReviewVersion": 1
  },
  "trainer_guild_explorer_boots": {
    "id": "trainer_guild_explorer_boots",
    "name": "Trainer Guild Explorer Boots",
    "description": "These rugged boots are forged from the hardiest leather and reinforced with iron studs, designed by the Guild Cobblers for explorers seeking to traverse treacherous terrains. Wearing them allows you to move swiftly over rocky ground at half your normal speed without penalty, while also granting a +1 bonus on Dexterity saving throws against traps. The boots' signature squeak is not just an annoyance but a subtle warning of impending danger.",
    "price": 1000,
    "icon": "👢",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Ignore non-magical difficult terrain (half speed)",
      "+1 to Dexterity saves against traps"
    ],
    "vendor": "trainer_guild_outpost",
    "shippedBy": "Trailblazer Tread",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ignore Non-Magical Difficult Terrain",
        "rules": "While wearing these boots, you can move across non-magical difficult terrain at your normal speed without taking the penalty. This effect is passive and does not require an action."
      },
      {
        "title": "Trap Dexterity Save Bonus",
        "rules": "When a trap would normally force you to make a Dexterity saving throw, you gain a +1 bonus on that save. This benefit lasts until the end of your next turn after triggering or escaping from a trap."
      }
    ],
    "levelRequirementReason": "These boots are designed for novice explorers and adventurers just starting their journey.",
    "vendorReason": "The Guild Outpost is known for its support of young trainers eager to explore the world.",
    "shippingDetail": "Ships via Trailblazer Tread, ensuring swift delivery across all terrains.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Lasts until removed or until you stop wearing the boots.",
      "endsWhen": "Effect ends when you remove the boots or at the end of your next turn after a trap is triggered or escaped from.",
      "charges": "Unlimited, as they are passive effects."
    },
    "priceReason": "The price reflects the quality craftsmanship and materials used in their creation, along with their utility for novice explorers.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-23T19:14:05.247873+00:00",
    "aiReviewedAt": "2026-07-23T19:14:05.247873+00:00",
    "aiReviewVersion": 1
  },
  "trainer_guild_poke_ball_mixer": {
    "id": "trainer_guild_poke_ball_mixer",
    "name": "Trainer Guild Poké Ball Mixer",
    "description": "The Trainer Guild Poké Ball Mixer is a sleek, bowl-shaped device with Poké Balls adorning its surface. This artisanal kitchen gadget not only ensures smooth pastries but also enlists nearby Pokémon to lend a helping hand in your baking. When unsecured, it rolls away with surprising speed, making it a playful challenge to keep in place during use. Crafted by Guild Crafters using ancient techniques, this mixer is a beloved tool of bakers across the region.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧁",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Poké Ball Companion Assist",
      "Rolls Away if Not Secured"
    ],
    "vendor": "trainer_guild_kitchen",
    "shippedBy": "Ball Batter Bundle",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Poké Ball Companion Assist",
        "rules": "When activated, nearby Pokémon can assist in your baking process. The Pokémon provide a +1 bonus to any baking check for pastries. This effect lasts until the next long rest."
      },
      {
        "title": "Rolls Away if Not Secured",
        "rules": "If not secured in place, this mixer will roll away on its own within 5 feet of where it was last placed. It can be manually restrained by any creature as a bonus action."
      }
    ],
    "levelRequirementReason": "This device is simple enough for anyone to use but adds value and fun to the baking process.",
    "vendorReason": "The Trainer Guild Kitchen specializes in tools that enhance Pokémon training experiences, including culinary aids like this mixer.",
    "shippingDetail": "Ships via Ball Batter Bundle, a reliable courier known for its punctuality and careful handling of delicate kitchen items.",
    "usage": {
      "activation": "Activates as an action when secured in place.",
      "duration": "Lasts until the next long rest or until the device is unsecured.",
      "endsWhen": "The effect ends if the device rolls away or if it is unsecured.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "This mixer is crafted with quality materials and features unique Pokémon design, making it a valuable yet balanced addition to any baker's toolkit.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T19:13:53.135204+00:00",
    "aiReviewedAt": "2026-07-23T19:13:53.135204+00:00",
    "aiReviewVersion": 1
  },
  "trainer_guild_poke_puff_recipe": {
    "id": "trainer_guild_poke_puff_recipe",
    "name": "Recipe: Trainer Guild Poké Puff",
    "description": "The Trainer Guild Poké Puff is a delicate pastry made by the skilled bakers of the Guild. Each puff is a treat for Pokémon and trainers, bursting with flavor that can heal wounds or bolster combat prowess. These pastries are not just sweet; they are crafted from the finest flour and berries, ensuring each bite packs a delightful surprise. The Poké Puff comes in random flavors, each with its own unique effect, making every mealtime an adventure.",
    "price": 1000,
    "icon": "🧁",
    "stock": 6,
    "rarity": "rare",
    "effects": [
      "Heal or Boost",
      "Guild Baked Delicacy"
    ],
    "vendor": "trainer_guild_kitchen",
    "shippedBy": "Puff Pastry Post",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Healing and Companion Boost",
        "rules": "When a Pokémon eats this Poké Puff, it heals 2d4 hit points. Additionally, the trainer's next attack by their companion has an advantage with a +1 bonus to damage."
      },
      {
        "title": "Guild Baked Delicacy",
        "rules": "The pastry is made exclusively by the skilled bakers of the Trainer Guild. It requires specific ingredients and is baked in their kitchens, ensuring its quality and effectiveness."
      }
    ],
    "levelRequirementReason": "This recipe is complex and requires a certain level to ensure the trainer understands proper Pokémon care and baking techniques.",
    "vendorReason": "The Guild Bakers are renowned for their expertise in crafting pastries that enhance both Pokémon and trainers alike.",
    "shippingDetail": "Delivered quickly by the Puff Pastry Post, ensuring freshness at your doorsteps.",
    "usage": {
      "activation": "Eaten by a Pokémon as a free action during its turn.",
      "duration": "Instantaneous effect upon consumption.",
      "endsWhen": "Exhausted after one use per meal.",
      "charges": "Unlimited daily"
    },
    "priceReason": "The recipe's complexity and the quality of ingredients justify its moderate price in experience points.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T19:14:09.113711+00:00",
    "aiReviewedAt": "2026-07-23T19:14:09.113711+00:00",
    "aiReviewVersion": 1
  },
  "trainer_guild_pokeball_bento_box": {
    "id": "trainer_guild_pokeball_bento_box",
    "name": "Trainer Guild Poké Ball Bento Box",
    "description": "The Trainer Guild Poké Ball Bento Box is a lunchbox shaped like its namesake, crafted from durable metal and emblazoned with the guild’s insignia. It keeps your food warm for an entire day without any power source, and opening it triggers a familiar 'Poké Ball' sound that can be heard across town, giving you disadvantage on Stealth checks. You feel a peculiar urge to catch anything within reach before eating; failing to do so results in disadvantage on your next attack roll.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚪",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Keeps food warm for a day",
      "Opens with telltale sound"
    ],
    "vendor": "trainer_guild",
    "shippedBy": "Pokedex Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Warmth Preserve",
        "rules": "This bento box keeps any contained food at the perfect temperature, maintaining warmth for an entire day. No additional action is required to maintain this effect."
      },
      {
        "title": "Sound of Capture",
        "rules": "Opening the box makes a distinct 'Poké Ball' sound that can be heard within 100 feet. This grants disadvantage on any Stealth checks made by you until your next long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners, requiring only basic dexterity to use effectively.",
    "vendorReason": "The Trainer Guild Lunchbox Co. specializes in creating unique and functional lunch solutions for all their members.",
    "shippingDetail": "This bento box is shipped via Pokedex Express, ensuring it arrives at your door with a complimentary Poké Ball charm.",
    "usage": {
      "activation": "Instantaneous (opening the box)",
      "duration": "Until contents are consumed or removed",
      "endsWhen": "Food is no longer in the box or the box is closed",
      "charges": "Unlimited"
    },
    "priceReason": "This bento box, while not overly powerful, adds a unique and useful feature to any adventurer's daily routine.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-23T19:14:19.498680+00:00",
    "aiReviewedAt": "2026-07-23T19:14:19.498680+00:00",
    "aiReviewVersion": 1
  },
  "trainer_guild_pokemon_grooming_service": {
    "id": "trainer_guild_pokemon_grooming_service",
    "name": "Trainer Guild Pokémon Grooming Service",
    "description": "The Trainer Guild Pokémon Grooming Service is a meticulous grooming kit forged from polished steel and adorned with emblems of the Guild’s crest. This grooming service not only enhances your companion's appearance but also improves their performance, granting them +2 to AC and attacks for up to 24 hours. It also removes any dirt-based debuffs, ensuring your Pokémon is in top fighting form. The kit is shipped by Paw Print Delivery, known for its precision and care.",
    "price": 1000,
    "icon": "🐾",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Enhanced Performance",
      "Dirt Removal"
    ],
    "vendor": "trainer_guild_stables",
    "shippedBy": "Paw Print Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Performance",
        "rules": "When activated, the grooming service grants a +2 bonus to AC and attack rolls. This effect lasts for up to 24 hours or until the Pokémon's next long rest."
      },
      {
        "title": "Dirt Removal",
        "rules": "The kit removes any dirt-based debuffs affecting the Pokémon, restoring its combat effectiveness immediately upon use."
      }
    ],
    "levelRequirementReason": "This grooming service is suitable for beginner trainers who wish to ensure their Pokémon are in peak condition.",
    "vendorReason": "The Trainer Guild Stables offers this grooming service as part of its comprehensive care packages for all aspiring Pokémon masters.",
    "shippingDetail": "Delivered with same-day precision, ensuring the grooming kit arrives in perfect condition.",
    "usage": {
      "activation": "Use an action to apply the grooming service to your Pokémon.",
      "duration": "24 hours or until a long rest.",
      "endsWhen": "The effect ends when the duration expires or the Pokémon takes a long rest.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This grooming service is priced at 1000 XP, offering a balanced value for enhancing performance and removing dirt-based debuffs.",
    "priceOriginal": 17000,
    "priceReviewedAt": "2026-07-23T19:14:32.046237+00:00",
    "aiReviewedAt": "2026-07-23T19:14:32.046237+00:00",
    "aiReviewVersion": 1
  },
  "trainer_guild_recipe_poke_puff Deluxe": {
    "id": "trainer_guild_recipe_poke_puff_deluxe",
    "name": "Recipe: Trainer Guild Poké Puff Deluxe",
    "description": "A meticulously crafted treat from the Trainer Guild Bakers, the Poké Puff Deluxe is a sumptuous pastry that not only delights your animal companions but also strengthens their bond with you. Each puff grants an animal companion 1d6 temporary hit points and bestows advantage on one saving throw per day for seven days. The perfect gift for those who need a little extra support in their adventures, this treat is both delicious and beneficial.",
    "price": 1000,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Companion's Temporary Hit Points",
      "Saving Throw Advantage"
    ],
    "vendor": "trainer_guild",
    "shippedBy": "Pokedex Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Hit Points",
        "rules": "When consumed by an animal companion, the Poké Puff Deluxe grants it 1d6 temporary hit points for 1 hour. This effect has no saving throw and does not require any action to activate."
      },
      {
        "title": "Saving Throw Advantage",
        "rules": "For seven days following consumption, your animal companion gains advantage on one saving throw of your choice each day. This effect is passive and does not consume charges or have a specific activation method."
      }
    ],
    "levelRequirementReason": "The Poké Puff Deluxe is suitable for trainers at any level who need to bolster their animal companions' resilience.",
    "vendorReason": "As the creators and purveyors of all official Trainer Guild supplies, they naturally stock this cherished treat.",
    "shippingDetail": "Delivered with utmost care to ensure freshness upon arrival.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "1 hour for temporary hit points, 7 days for saving throw advantage.",
      "endsWhen": "Ends when the duration expires or the treat is consumed by an animal companion.",
      "charges": "Unlimited"
    },
    "priceReason": "The Poké Puff Deluxe strikes a balance, offering significant benefits for a moderate price of 1000 XP.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-23T19:14:23.913134+00:00",
    "aiReviewedAt": "2026-07-23T19:14:23.913134+00:00",
    "aiReviewVersion": 1
  },
  "trainer_gym_uniform_of_mediocrity": {
    "id": "trainer_gym_uniform_of_mediocrity",
    "name": "Trainer Gym Uniform of Mediocrity",
    "description": "The Trainer Gym Uniform of Mediocrity is a drab, ill-fitting tunic and pants set, made from cheap fabric that clings to your form in all the wrong places. It whispers of long hours spent in gym uniforms, where mediocrity was the only goal. Those who wear this uniform blend seamlessly into any crowd, their presence forgotten as quickly as they arrive—ideal for trainers seeking anonymity or a chance at a fresh start.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏋️",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Bleed Invisibility",
      "Forgettable"
    ],
    "vendor": "trainer_guild",
    "shippedBy": "Pokedex Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bleed Invisibility",
        "rules": "While wearing the uniform, you have advantage on checks to blend into crowds and become invisible for up to 1 hour. If observed by a creature with an Intelligence of 15 or higher, this invisibility ends immediately."
      },
      {
        "title": "Forgettable",
        "rules": "You have disadvantage on checks to stand out in any situation. This effect persists until you take a long rest. You can use this feature once per short or long rest."
      }
    ],
    "levelRequirementReason": "This uniform is designed for beginners and trainers just starting their journey, providing them with the advantage they need to avoid unwanted attention.",
    "vendorReason": "The Trainer Guild is known for its commitment to all levels of trainers, ensuring even those new to the gym have the tools needed to succeed.",
    "shippingDetail": "Ships via standard courier service with a delivery time of 3 days from any major city.",
    "usage": {
      "activation": "Passive effect; becomes active when you put on the uniform.",
      "duration": "Instantaneous for 'Bleed Invisibility', lasts up to 1 hour. 'Forgettable' persists until you take a long rest.",
      "endsWhen": "Disadvantage on checks to stand out ends after taking a long rest, invisibility ends when observed by a creature with an Intelligence of 15 or higher.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This balanced price reflects the item's utility for new trainers who need to blend in and avoid unwanted attention, but still have the potential to stand out as they grow more skilled.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-23T19:14:45.902505+00:00",
    "aiReviewedAt": "2026-07-23T19:14:45.902505+00:00",
    "aiReviewVersion": 1
  },
  "trinity_general_blessed_baking_sheet": {
    "id": "trinity_general_blessed_baking_sheet",
    "name": "Trinity General Blessed Baking Sheet",
    "description": "The Trinity General Blessed Baking Sheet, a silver sheet blessed by holy hands, radiates a soft glow when in use. It ensures that every biscuit baked on its surface achieves perfect evenness and divine consistency, healing an additional +1 hit point to any who consume the treats it produces. The sheet also purifies minor taint from ingredients, making them fit for only the most sacred feasts. Over time, though, the sheet's silver tarnishes, a reminder of the passage of time and the need for constant care.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍪",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Divine Biscuit Healing",
      "Minor Taint Purification"
    ],
    "vendor": "trinity_general_kitchen",
    "shippedBy": "Holy Heat Haul",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Divine Biscuit Healing",
        "rules": "When consumed, baked goods prepared on this sheet heal an additional +1 hit point to the consumer. This effect is instantaneous and does not require any action from the user."
      },
      {
        "title": "Minor Taint Purification",
        "rules": "This sheet can remove minor taint from ingredients it comes into contact with, making them fit for consumption by holy individuals or in sacred rituals. The purification process takes 1 hour and renders the tainted items perfectly pure."
      }
    ],
    "levelRequirementReason": "The blessed nature of the sheet requires no specific level to use; its power is accessible to all who appreciate the divine touch.",
    "vendorReason": "Trinity General Kitchen, known for their sacred culinary offerings, naturally stocks this item among their holy supplies.",
    "shippingDetail": "Delivered by Holy Heat Haul, the shipment includes a special blessing that ensures safe travel and quick delivery to your door.",
    "usage": {
      "activation": "Passive effect; no activation required when used for baking.",
      "duration": "Instantaneous; lasts until the next dawn.",
      "endsWhen": "The effects end with the dawn, requiring reapplication each day.",
      "charges": "Unlimited"
    },
    "priceReason": "This item's price reflects its divine blessing and the specialized craftsmanship required to create a sheet capable of such miracles.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T19:14:58.467376+00:00",
    "aiReviewedAt": "2026-07-23T19:14:58.467376+00:00",
    "aiReviewVersion": 1
  },
  "trinity_general_blessed_biscuits_recipe": {
    "id": "trinity_general_blessed_biscuits_recipe",
    "name": "Recipe: Trinity General Blessed Biscuits",
    "description": "The Recipe for Trinity General Blessed Biscuits is a parchment of divine origin, crafted by the revered cooks of Trinity Cooks. Each crumb dances with holy light as it's baked, and when consumed, these biscuits not only heal wounds but also dispel minor curses. The recipe requires only flour and holy water, yet its effects are potent enough to make even the most skeptical believer trust in its power.",
    "price": 1000,
    "icon": "🍪",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Blessed Healing",
      "Cursed Removal"
    ],
    "vendor": "trinity_general_kitchen",
    "shippedBy": "Holy Handout",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blessed Healing",
        "rules": "When consumed as a bonus action, this recipe allows you to bake biscuits that heal the imbiber for 2d4 hit points. The effect is instantaneous and requires no material components beyond flour and holy water."
      },
      {
        "title": "Cursed Removal",
        "rules": "Upon consumption of the biscuits baked from this recipe, any minor curse affecting the imbiber is removed. This effect has a duration of 1 hour and can only be used once every 24 hours."
      }
    ],
    "levelRequirementReason": "The simplicity of the ingredients and ease with which anyone can learn to bake these biscuits makes it accessible at level 1.",
    "vendorReason": "Trinity Cooks are renowned for their divine recipes, and they naturally sell this recipe as part of their offerings.",
    "shippingDetail": "The biscuits are delivered fresh within a day, but the recipe is sent via courier to ensure it arrives safely and intact.",
    "usage": {
      "activation": "Consumed as a bonus action to bake and eat the biscuits",
      "duration": "Instantaneous healing; curse removal effect lasts for 1 hour",
      "endsWhen": "Effect of each use ends when consumed, or once per day limit is reached",
      "charges": "Unlimited uses"
    },
    "priceReason": "The rarity and divine origin of the recipe justify its price, making it a valuable asset for any adventurer.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T19:15:01.570041+00:00",
    "aiReviewedAt": "2026-07-23T19:15:01.570041+00:00",
    "aiReviewVersion": 1
  },
  "trinity_general_cleric_vestments": {
    "id": "trinity_general_cleric_vestments",
    "name": "Trinity General Cleric Vestments",
    "description": "The Trinity General Cleric Vestments are a set of heavy, holy vestments crafted by the skillful hands of the Trinity Seamstresses. These vestments not only provide their faithful wearers with divine healing advantage but also emit a faint glow when casting good-aligned spells, serving as both a beacon and a source of spiritual reassurance. The weighty fabric is known to impede one's swimming speed, grounding them in faith and duty during perilous moments at sea.",
    "category": "equipment",
    "price": 1000,
    "icon": "👘",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Divine Healing Advantage",
      "Faint Glow for Good Spells"
    ],
    "vendor": "trinity_general_cathedral",
    "shippedBy": "Blessed Cloth",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Divine Healing Advantage",
        "rules": "The wearer of these vestments gains advantage on Medicine checks to perform divine healing. This effect is passive and always active while wearing the vestments."
      },
      {
        "title": "Faint Glow for Good Spells",
        "rules": "When casting a good-aligned spell, the vestments emit a faint glow that does not require an action or provoke opportunity attacks. The glow remains visible as long as the wearer is actively casting a good-aligned spell."
      }
    ],
    "levelRequirementReason": "The vestments are designed for all clerics to support their healing efforts, regardless of their level.",
    "vendorReason": "The vestments are a staple offering from the Trinity General Cathedral, known for their divine craftsmanship and spiritual significance.",
    "shippingDetail": "Shipped with utmost care by Blessed Cloth, these items require no special handling but should be delivered within seven days of purchase.",
    "usage": {
      "activation": "Passive",
      "duration": "Instantaneous",
      "endsWhen": "The vestments are removed or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted with high-quality materials and divine blessings, the vestments offer significant support to clerics at a fair price.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T19:15:05.696346+00:00",
    "aiReviewedAt": "2026-07-23T19:15:05.696346+00:00",
    "aiReviewVersion": 1
  },
  "trinity_general_comms_link": {
    "id": "trinity_general_comms_link",
    "name": "Trinity General Comms Link",
    "description": "Pauline's Microphone is an earpiece of sleek, matte-black aluminum, emblazoned with the Trinity General logo. It allows you to communicate telepathically with a single other person wearing a link, up to one mile away. The device emits a soft hum when in use and scrambles its signal; no non-magical means can intercept your communications. This is particularly useful for field agents who need secure channels without the risk of being overheard.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎧",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Secure Telepathic Communication",
      "Signal Scrambling"
    ],
    "vendor": "trinity_general",
    "shippedBy": "Military Supply",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Secure Telepathic Communication",
        "rules": "Activate as a bonus action. Allows telepathic communication with one other user wearing the same device, up to one mile away. This effect lasts until interrupted or ended by an attack or spell that targets you."
      },
      {
        "title": "Signal Scrambling",
        "rules": "The link scrambles its signal, making it impossible for non-magical means to intercept your communications. This effect persists as long as the device is active and not disrupted."
      }
    ],
    "levelRequirementReason": "This item is designed for field agents who need reliable communication in hostile environments.",
    "vendorReason": "Trinity General specializes in secure communications gear, making Pauline's Microphone a natural fit in their catalog.",
    "shippingDetail": "Ships via armored courier for enhanced security and faster delivery to sensitive locations.",
    "usage": {
      "activation": "Bonus action to activate or end the communication link.",
      "duration": "Until interrupted by an attack or spell targeting you, or until you choose to end it.",
      "endsWhen": "Interrupted by a successful attack or spell targeted at you, or ended by your choice.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced price reflects the item's secure and reliable nature, suitable for field agents without breaking the bank.",
    "priceOriginal": 33000,
    "priceReviewedAt": "2026-07-23T19:15:11.871536+00:00",
    "aiReviewedAt": "2026-07-23T19:15:11.871536+00:00",
    "aiReviewVersion": 1
  },
  "trinity_general_medic_kit": {
    "id": "trinity_general_medic_kit",
    "name": "Trinity General Medic Kit",
    "description": "The Trinity General Medic Kit is a compact, leather-bound field kit made from the durable hides of battle-scarred steeds. Crafted by the skilled healers at Trinity General, it contains rare elixirs and specially treated bandages that can stabilize even the gravest wounds. With this kit, you gain advantage on Medicine checks for an hour after use, and you may attempt to stabilize a creature with your reaction if they are dying from injuries.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚕️",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Stabilize Dying Creature",
      "Advantage on Medicine Checks"
    ],
    "vendor": "trinity_general_bank",
    "shippedBy": "Medical Case Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stabilize Dying Creature",
        "rules": "You may use this kit as a reaction to stabilize a creature who is dying, provided you have the necessary proficiency. The stabilization attempt requires an hour of focused effort and concentration."
      },
      {
        "title": "Advantage on Medicine Checks",
        "rules": "For one hour after using the kit, you gain advantage on all Medicine checks. This effect does not stack with other sources of advantage."
      }
    ],
    "levelRequirementReason": "This kit is designed for those who are just beginning their journey as healers.",
    "vendorReason": "As the creators, Trinity General ensures that their medic kits are available to all who need them.",
    "shippingDetail": "Shipped via swift Medical Case Couriers, ensuring your kit arrives in pristine condition.",
    "usage": {
      "activation": "Reaction (to stabilize a dying creature), Bonus Action (for advantage on Medicine checks)",
      "duration": "One hour after use for each effect",
      "endsWhen": "The stabilization attempt fails or the hour ends; advantage on Medicine checks lasts until used up or until you take another bonus action this turn.",
      "charges": "Unlimited uses, but only one effect can be active at a time."
    },
    "priceReason": "The kit's rarity and the quality of its components justify its price, making it accessible to those who need it most.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T19:15:38.761022+00:00",
    "aiReviewedAt": "2026-07-23T19:15:38.761022+00:00",
    "aiReviewVersion": 1
  },
  "trinity_general_medkit_premium": {
    "id": "trinity_general_medkit_premium",
    "name": "Trinity General Medkit (Premium)",
    "description": "The Trinity General Medkit (Premium) is a holy artifact crafted by the revered Trinity Healers, renowned for their skill and devotion to healing. Each kit contains advanced tools and supplies that have been blessed with divine power. It includes a vial of holy water capable of dealing radiant damage to undead foes, as well as a specially treated cloth that can stabilize an ally's condition or remove one debilitating poison or disease. The touch of this medkit is a testament to the healers' unwavering commitment to saving lives.",
    "price": 1000,
    "icon": "🩹",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Holy Healing",
      "Purify Undead"
    ],
    "vendor": "trinity_general_hospital",
    "shippedBy": "Sterile Case",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Holy Healing",
        "rules": "When used as an action, this medkit heals the user or a nearby ally for 3d4 + 3 hit points. It also stabilizes a dying creature if it has fewer than 10 hit points remaining. This effect can be used once per kit."
      },
      {
        "title": "Purify Undead",
        "rules": "This medkit contains holy water that, when consumed as an action, deals 1d6 radiant damage to one undead creature within 30 feet and has a save DC of 15. This effect can be used once per kit."
      }
    ],
    "levelRequirementReason": "The medkit's holy power is accessible to all who seek healing, making it suitable for adventurers at any level.",
    "vendorReason": "The Trinity General Hospital has long been a beacon of hope and healing, and their premium medkits are in high demand among brave souls.",
    "shippingDetail": "Shipped via the Holy Courier Service, ensuring swift delivery to those in need.",
    "usage": {
      "activation": "Used as an action or a bonus action, depending on the effect.",
      "duration": "Instantaneous for stabilization and healing effects; radiant damage persists until the undead creature is destroyed or leaves range.",
      "endsWhen": "The effect ends when its duration expires or when it is used up. The medkit is fully recharged upon opening a new one.",
      "charges": "Unlimited, as long as the medkit contains supplies."
    },
    "priceReason": "This premium version of the medkit offers enhanced healing and purifying capabilities at a cost that reflects its advanced design and divine blessing.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-23T19:15:29.306916+00:00",
    "aiReviewedAt": "2026-07-23T19:15:29.306916+00:00",
    "aiReviewVersion": 1
  },
  "trinity_general_security_license": {
    "id": "trinity_general_security_license",
    "name": "Trinity General Security License",
    "description": "The Trinity General Security License is a sleek, official-looking card emblazoned with the symbol of the mercenary firm. It grants you immediate access to elite guards who are renowned for their unyielding loyalty and impeccable professionalism, immune to bribes or coercion. Issued by the very heart of Trinity General, this license ensures that your security needs are met with a squad of four top-tier mercenaries for seven days at no extra cost.",
    "price": 1000,
    "icon": "🛡️",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Hire Elite Guards",
      "Immunity to Bribery"
    ],
    "vendor": "trinity_general_bank",
    "shippedBy": "Official Seal Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hire Elite Guards",
        "rules": "Activate as an action. Instantaneously hire a squad of four elite guards for seven days. The guards are highly trained and immune to bribery or coercion during this time."
      },
      {
        "title": "Immunity to Bribery",
        "rules": "The guards within the duration of this license are immune to any attempt at bribery, with a DC 18 Wisdom saving throw required for any such attempt. This immunity extends only to the guards hired through this license and lasts until the end of their seven-day term."
      }
    ],
    "levelRequirementReason": "The license is designed to be accessible to adventurers early in their journey, providing immediate security without a steep level prerequisite.",
    "vendorReason": "Trinity General Bank handles all security and logistics for the Trinity General firm, making it the logical vendor for this license.",
    "shippingDetail": "The license is delivered via an Official Seal Courier, ensuring its safe arrival with a two-day delivery guarantee.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous hire; the guards' effect lasts for seven days.",
      "endsWhen": "Ends when the duration expires or the guards are dismissed by their official order.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The license provides immediate and high-value security without a steep cost, balancing its rarity as an epic item.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-23T19:15:43.836918+00:00",
    "aiReviewedAt": "2026-07-23T19:15:43.836918+00:00",
    "aiReviewVersion": 1
  },
  "trinity_general_three_for_one_deal": {
    "id": "trinity_general_three_for_one_deal",
    "name": "Trinity General Three-for-One Deal",
    "description": "The Trinity General Three-for-One Deal is a compact, weathered pamphlet that promises you three minor services—each worth five thousand gold pieces—at the cost of just one. The services are meticulously curated by the enigmatic Trinity, whose choices are as unpredictable as they are beneficial. Each page of the pamphlet feels like it holds secrets from another era. Upon activation, the chosen services are delivered with haste and precision, courtesy of Triple Delivery, ensuring you receive all three in a timely manner.",
    "category": "premium",
    "price": 1000,
    "icon": "3️⃣",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Three Minor Services",
      "Randomly Selected by Trinity"
    ],
    "vendor": "trinity_general",
    "shippedBy": "Triple Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Three Minor Services",
        "rules": "Upon activation, the user selects any three minor services (worth 5000 gp each) from a list provided by Trinity. The DM randomly chooses these services to ensure fairness and surprise."
      },
      {
        "title": "Randomly Selected by Trinity",
        "rules": "The Trinity General Deals ensures that every time you use this pamphlet, the services are selected in a manner that aligns with their unpredictable nature."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners and seasoned adventurers alike, making it accessible to all levels.",
    "vendorReason": "Trinity General Deals are known for providing the best value in minor services, making this pamphlet a staple in their offerings.",
    "shippingDetail": "Delivery is swift and reliable, ensuring you receive all three services within one week of purchase.",
    "usage": {
      "activation": "Standard Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after use",
      "charges": "Unlimited"
    },
    "priceReason": "The pamphlet is priced at one thousand XP, reflecting its rarity and the value it provides without being overpowered.",
    "priceOriginal": 21500,
    "priceReviewedAt": "2026-07-23T19:15:34.732859+00:00",
    "aiReviewedAt": "2026-07-23T19:15:34.732859+00:00",
    "aiReviewVersion": 1
  },
  "troopa_scout_tracker": {
    "id": "troopa_scout_tracker",
    "name": "Troopa Scout Tracker",
    "description": "The Troopa Scout Tracker resembles a small, sentient shell that glows with a vibrant color indicative of its specialty. A Koopa Troop creation, this tracker can be found in shades of red or green, each hue signifying its adeptness at locating specific types of foes—red for Guardians who steadfastly defend their posts, and green for Ambushers who strike from the shadows. Upon activation, it reveals the location and challenge rating of a single hostile creature within a mile radius, providing crucial battlefield intelligence without fail.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🐢",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Reveal Location",
      "Specialist Tracking"
    ],
    "vendor": "koopa_troop_armory",
    "shippedBy": "Small Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Location",
        "rules": "When activated as an action, the Troopa Scout Tracker illuminates and reveals the location of a single hostile creature within one mile. The revealed target is marked with its challenge rating (CR). This effect has no save DC and does not end until used or expended."
      },
      {
        "title": "Specialist Tracking",
        "rules": "The shell's color dictates its tracking specialty: red for Guardians, indicating it can pinpoint defenders; green for Ambushers, signifying stealthy foes. Once per short rest, the tracker can be rerolled to change its target type if necessary."
      }
    ],
    "levelRequirementReason": "The Troopa Scout Tracker is designed for novice adventurers who need reliable battlefield intelligence.",
    "vendorReason": "Koopa Troop Armory specializes in Koopa Troop creations, ensuring the quality and reliability of items like the Troopa Scout Tracker.",
    "shippingDetail": "Delivered via Small Crate with a two-day delivery guarantee within the region.",
    "usage": {
      "activation": "Activates as an action",
      "duration": "Instantaneous, one-time use per activation",
      "endsWhen": "Exhausted after one use or until recharged",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The Troopa Scout Tracker offers significant battlefield advantage at a price that reflects its utility and the craftsmanship of Koopa Troop.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T19:16:10.782957+00:00",
    "aiReviewedAt": "2026-07-23T19:16:10.782957+00:00",
    "aiReviewVersion": 1
  },
  "true_creation_forge": {
    "id": "true_creation_forge",
    "name": "True Creation Forge",
    "description": "The True Creation Forge, a towering anvil of mythic proportions, crackles with the primal energy of creation itself. Crafted from the first stone and fire of existence, it can forge any conceivable item, concept, or being. The forge's flames are said to have birthed the universe; its hammer strikes once to shape reality. It is a tool of the First Creator, a god of cosmic proportions who once walked among mortals before vanishing from time.",
    "category": "services",
    "price": 1000,
    "icon": "🔥",
    "stock": 1,
    "rarity": "cosmic",
    "effects": [
      "Forge any item or being",
      "Cost: 10,000 XP per creation"
    ],
    "vendor": "creation_services",
    "shippedBy": "Primordial Wind",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Creation Strike",
        "rules": "As an action, the wielder commands the forge to strike once. This strike can create a single object, creature, or concept with a value up to 10,000 XP. The creation appears in a space within 30 feet of the forge."
      },
      {
        "title": "Forge's Price",
        "rules": "The cost to create an item is equal to its XP value. Creatures created have hit points and abilities appropriate for their level and nature, but they are bound by the forge until destroyed or released."
      }
    ],
    "levelRequirementReason": "Even minor gods can wield this tool of creation.",
    "vendorReason": "As a service that deals with cosmic creations and concepts, it makes sense they would stock the ultimate forge for such endeavors.",
    "shippingDetail": "The wind carries the forge to its destination, but only those of sufficient power can wield it upon arrival.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use per day",
      "charges": "1"
    },
    "priceReason": "The creation forge's price is balanced by its limited daily uses and the high cost of cosmic creations.",
    "priceOriginal": 250000000,
    "priceReviewedAt": "2026-07-23T19:16:01.615092+00:00",
    "aiReviewedAt": "2026-07-23T19:16:01.615092+00:00",
    "aiReviewVersion": 1
  },
  "true_godhood_potion": {
    "id": "true_godhood_potion",
    "name": "True Godhood Potion",
    "description": "The True Godhood Potion is a vial of shimmering, iridescent liquid that dances like molten light within its glass container. Upon consumption, it transforms you into an actual deity, choosing from one of four portfolios: War, Death, Love, or Creation. You gain divine rank, worshippers who revere your every command, and a realm where the heavens bow to your will. This potion is crafted by The Ascension, a revered organization known for its mastery in godhood alchemy.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Deity Transformation",
      "Divine Realm"
    ],
    "vendor": "divine_promotion",
    "shippedBy": "Apotheosis Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Deity Transformation",
        "rules": "Upon drinking this potion, you undergo an instantaneous transformation into a deity of your chosen portfolio. You gain all the abilities and powers associated with that godly form, including a divine rank and worshippers who pray to you."
      },
      {
        "title": "Divine Realm",
        "rules": "For 24 hours after transformation, you gain control over a realm where the heavens bow to your will. You can summon celestial beings and manifest divine power within this domain. The realm reverts upon expiration of the effect or if you lose your deity form."
      }
    ],
    "levelRequirementReason": "Even the lowest-level heroes can dream of becoming a god, but the transformation requires a base level to ensure the process is manageable.",
    "vendorReason": "Divine Promotion specializes in creating and distributing items that bridge mortals with the divine realms; it's only fitting they offer the True Godhood Potion.",
    "shippingDetail": "Ships via Apotheosis Express, ensuring swift delivery to even the most remote corners of the world.",
    "usage": {
      "activation": "Consume the potion as an action.",
      "duration": "24 hours or until deity form is lost.",
      "endsWhen": "Deity transformation ends if you lose your godly form or after 24 hours, whichever comes first.",
      "charges": "Unlimited; each vial contains enough potion for one use."
    },
    "priceReason": "The price reflects the rarity and power of the potion, making it a significant but fair investment for any aspiring deity.",
    "priceOriginal": 68000000,
    "priceReviewedAt": "2026-07-23T19:16:05.316887+00:00",
    "aiReviewedAt": "2026-07-23T19:16:05.316887+00:00",
    "aiReviewVersion": 1
  },
  "true_immortality_contract": {
    "id": "true_immortality_contract",
    "name": "True Immortality Contract (No Loopholes)",
    "description": "Immortality that even gods can't revoke.",
    "category": "services",
    "price": 125000000,
    "icon": "📜",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Cannot die, cannot be erased, cannot be unmade, cannot be forgotten",
      "Even if the universe ends, you persist",
      "Made by: The Eternal Lawyer"
    ],
    "vendor": "life_insurance",
    "shippedBy": "Eternal Binding",
    "levelRequirement": 95
  },
  "true_infinity_gauntlet": {
    "id": "true_infinity_gauntlet",
    "name": "True Infinity Gauntlet (All Stones)",
    "description": "The True Infinity Gauntlet (All Stones) hums with the raw energy of reality itself, a relic forged from the cosmic debris left by the Mad Titan's accountant. Crafted in the fires of alternate dimensions, its leather-bound gauntlets are studded with every infinity stone, each one pulsing with the potential to reshape existence. With a single snap, you can erase half of all existence across the multiverse or, if used carefully, bring it back into balance.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧤",
    "stock": 1,
    "rarity": "cosmic",
    "effects": [
      "Multiversal Control",
      "Reality Shaping"
    ],
    "vendor": "universal_power",
    "shippedBy": "Snap",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Multiversal Control",
        "rules": "As an action, you can activate the gauntlet to erase half of all existence across the multiverse. This effect is instantaneous and cannot be dispelled or otherwise undone by any means short of reversing time itself. The gauntlet's power is exhausted immediately after use."
      },
      {
        "title": "Reality Shaping",
        "rules": "Alternatively, you can use a reaction to activate the gauntlet in order to bring back erased existence. This effect also requires the immediate expenditure of one charge from the gauntlet's limited uses. The gauntlet recharges at dawn on the following day."
      }
    ],
    "levelRequirementReason": "Even the most powerful must start somewhere, and this relic demands a minimum level to wield its cosmic might.",
    "vendorReason": "Universal Power is known for dealing in the rarest of artifacts, and this gauntlet certainly qualifies as such.",
    "shippingDetail": "Due to the nature of the item's power, it must be couriered by Snap directly to ensure safe delivery.",
    "usage": {
      "activation": "Action or Reaction (choose one)",
      "duration": "Instantaneous",
      "endsWhen": "Exhaustion after use or when reality is restored",
      "charges": "Limited uses per day"
    },
    "priceReason": "The gauntlet's price reflects its rarity and the cosmic power it contains, balanced at a level accessible to higher-tier adventurers.",
    "priceOriginal": 500000000,
    "priceReviewedAt": "2026-07-23T19:16:30.934913+00:00",
    "aiReviewedAt": "2026-07-23T19:16:30.934913+00:00",
    "aiReviewVersion": 1
  },
  "true_infinity_sword": {
    "id": "true_infinity_sword",
    "name": "True Infinity Sword",
    "description": "A sword with infinite length, width.",
    "price": 250000000,
    "icon": "⚔️",
    "stock": 1,
    "rarity": "cosmic",
    "effects": [
      "Infinite reach (can hit anything anywhere)",
      "Made by: The Infinite Blacksmith"
    ],
    "vendor": "infinite_weapons",
    "shippedBy": "Infinite Length",
    "levelRequirement": 300
  },
  "true_love_potion": {
    "id": "true_love_potion",
    "name": "True Love Potion (For Real This Time)",
    "description": "The True Love Potion (For Real This Time) is a vial of shimmering, heart-shaped liquid. Created by The Real Cupid himself using rare essences from ancient stars and enchanted by love's purest energies, it compels the drinker to fall deeply in love with you without exception or reprieve. It works on all beings, even those immune to magic. This potion is said to be as potent as a deity's decree, making it both invaluable and perilously sought after.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 5,
    "rarity": "legendary",
    "effects": [
      "True Love",
      "Unyielding"
    ],
    "vendor": "love_potions",
    "shippedBy": "Arrow Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "True Love",
        "rules": "When consumed, the target falls in love with you. This effect is permanent and cannot be dispelled or resisted by any means. The potion has no save DC and lasts indefinitely."
      },
      {
        "title": "Unyielding",
        "rules": "The effect applies to all beings, including deities and NPCs controlled by the DM. However, the target retains their free will but is compelled to act in ways that align with your desires within reason."
      }
    ],
    "levelRequirementReason": "Even heroes of low levels can face the challenges of love's power.",
    "vendorReason": "Love Potions is known for its authenticity and quality, ensuring that this legendary potion comes directly from The Real Cupid.",
    "shippingDetail": "Delivered with utmost care by Arrow Delivery's fastest couriers, ensuring the potion remains potent during transit.",
    "usage": {
      "activation": "Drink",
      "duration": "Permanent",
      "endsWhen": "N/A (effect is permanent)",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this potion's rarity and power are reflected in its fair value.",
    "priceOriginal": 25000000,
    "priceReviewedAt": "2026-07-23T19:16:24.204048+00:00",
    "aiReviewedAt": "2026-07-23T19:16:24.204048+00:00",
    "aiReviewVersion": 1
  },
  "true_name_grimoire": {
    "id": "true_name_grimoire",
    "name": "Grimoire of True Names",
    "description": "The Grimoire of True Names is a leather-bound tome adorned with arcane sigils and inscribed with names that echo the very fabric of creation. It contains the true names of all beings, even gods, granting utter dominion over their wills when spoken aloud. Its pages are said to have been penned by The Namer himself, whose touch alone can erase a name from existence, erasing the being it belongs to in the process.",
    "category": "equipment",
    "price": 1000,
    "icon": "📖",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Speak any being's true name: they obey your commands completely (no save)",
      "Erase names from existence"
    ],
    "vendor": "True Names Archive",
    "shippedBy": "Spoken Word",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "True Name Command",
        "rules": "Activates as a bonus action. The target must be within 30 feet. The effect lasts until the end of your next turn. If the target is unwilling, it can use its reaction to make a Wisdom saving throw (DC 15) with advantage if it resists."
      },
      {
        "title": "Erase Name",
        "rules": "Activates as an action. The target must be within 60 feet. This effect has no save DC and is instant, erasing the name from existence. Once used, this ability cannot be employed again until you finish a long rest."
      }
    ],
    "levelRequirementReason": "Even the simplest spellcaster can command lesser beings with a true name, but wielding such power over even gods requires immense focus and training.",
    "vendorReason": "The True Names Archive is the only repository of all known true names, making it the sole place where one could purchase or acquire this powerful tome.",
    "shippingDetail": "Delivered through whispered incantations that travel with the reader until they reach their destination.",
    "usage": {
      "activation": "Bonus action for True Name Command, Action for Erase Name",
      "duration": "Instantaneous for both effects",
      "endsWhen": "Used up or expended; True Name Command ends at the end of your next turn, Erase Name is a single-use ability",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The value lies in its rarity and the immense power it holds over all beings, not just its material components.",
    "priceOriginal": 125000000,
    "priceReviewedAt": "2026-07-23T19:16:53.371532+00:00",
    "aiReviewedAt": "2026-07-23T19:16:53.371532+00:00",
    "aiReviewVersion": 1
  },
  "true_permanent_polymorph_scroll": {
    "id": "true_permanent_polymorph_scroll",
    "name": "True Permanent Polymorph Scroll",
    "description": "Polymorph into anything permanently, even concepts.",
    "category": "consumables",
    "price": 35000000,
    "icon": "📜",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Polymorph into any creature, object, or concept permanently",
      "Can become 'the concept of victory' or 'the number seven'",
      "Made by: The Transmuter"
    ],
    "vendor": "polymorph_services",
    "shippedBy": "Transformation",
    "levelRequirement": 45
  },
  "true_resurrection_voucher": {
    "id": "true_resurrection_voucher",
    "name": "True Resurrection Voucher (10-pack)",
    "description": "The True Resurrection Voucher (10-pack) allows you to bring back from the dead any soul that has passed, no matter how far gone in decay. Crafted by The Undertaker himself from the very essence of life itself, these vouchers ensure a second chance at existence. With this pack, you are guaranteed 10 resurrections without cost or question, making it an invaluable asset for those who seek to reclaim lost loved ones or allies.",
    "category": "services",
    "price": 1000,
    "icon": "🎫",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Unlimited Resurrections",
      "No Cost"
    ],
    "vendor": "life_insurance",
    "shippedBy": "Back from the Dead",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resurrection Assurance",
        "rules": "This voucher ensures the resurrection of a soul, regardless of time passed since death. The resurrected creature will be in its prime condition at the time it died. This effect is instantaneous and does not require material components or a saving throw."
      },
      {
        "title": "Vendor Guarantee",
        "rules": "The Undertaker guarantees that this voucher will work as advertised, ensuring peace of mind for those who purchase it. Once used, it becomes inert and cannot be resold."
      }
    ],
    "levelRequirementReason": "This item is accessible to all adventurers, offering a chance at redemption or reunion.",
    "vendorReason": "The Undertaker's reputation for dealing with the afterlife makes him an ideal vendor for this service.",
    "shippingDetail": "Delivery is immediate upon purchase, ensuring that the voucher remains potent and effective.",
    "usage": {
      "activation": "Use as a standard action when needed.",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends once the creature has been successfully resurrected or the voucher is used up.",
      "charges": "10 charges"
    },
    "priceReason": "Balanced at a cost of 1000 XP, this item provides an essential service without overburdening the party.",
    "priceOriginal": 35000000,
    "priceReviewedAt": "2026-07-23T19:17:28.848143+00:00",
    "aiReviewedAt": "2026-07-23T19:17:28.848143+00:00",
    "aiReviewVersion": 1
  },
  "tubba_blubba_heart": {
    "id": "tubba_blubba_heart",
    "name": "Secret Heart",
    "description": "The Secret Heart is a pulsating organ encased in a glass jar, its steady beat echoing an ancient pact. Hide it within your person, and you gain invulnerability to all damage for as long as it remains concealed and safe. Should the jar ever break or be destroyed, your body's own heart ceases, dropping you instantly to 0 hit points. You are bound to stay within a one-mile radius of its location; any attempt to venture farther results in immediate destruction.",
    "category": "forbidden",
    "price": 1000,
    "icon": "❤️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Invulnerability",
      "Heartstopper"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Courier",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Invulnerability",
        "rules": "While the Secret Heart is hidden and safe, you gain resistance to all damage. Additionally, you regenerate 10 hit points at the start of your turn. This effect ends if the jar is destroyed or damaged."
      },
      {
        "title": "Heartstopper",
        "rules": "If the jar containing the Secret Heart is ever destroyed, you drop immediately to 0 hit points. You are also bound to remain within one mile from its location; any attempt to leave this radius results in the jar's destruction and your immediate death."
      }
    ],
    "levelRequirementReason": "Only those with a proven mastery of control and discipline can wield such dangerous power responsibly.",
    "vendorReason": "The Onyx Hand maintains a select clientele, ensuring that only the most trusted individuals receive such powerful and volatile items.",
    "shippingDetail": "The Courier ensures the safe delivery of the Secret Heart, requiring a special secure container for transport.",
    "usage": {
      "activation": "Passive effect once the heart is safely concealed within your person or secured in its jar.",
      "duration": "Until the jar is destroyed or damaged.",
      "endsWhen": "The jar is destroyed or damaged.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to reflect the item's extreme power and danger, ensuring it remains a rare and sought-after commodity.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-23T19:17:07.971295+00:00",
    "aiReviewedAt": "2026-07-23T19:17:07.971295+00:00",
    "aiReviewVersion": 1
  },
  "tunneler_capsule": {
    "id": "tunneler_capsule",
    "name": "Tunneler Capsule",
    "description": "The Tunneler Capsule is a heavy metal seed, forged in the heart of volcanic earth. When activated, it burrows through soft ground at an alarming rate, creating a 5-foot-wide, 30-foot-long tunnel in mere minutes. The resulting passage shakes the earth with each use, sending out faint tremors that can be detected by keen listeners. After 24 hours, the tunnel collapses into a harmless pile of loose dirt and stone.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪨",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Earthshaker",
      "Temporary Tunnel"
    ],
    "vendor": "junkheap_merchant",
    "shippedBy": "Metal Seed Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Earthshaker",
        "rules": "As an action, the user can activate this item to burrow through soft earth, creating a tunnel. The tremors produced have a radius of 10 feet and last for 30 seconds after activation. This effect has no save DC but can be disrupted by any means that would stop or interfere with burrowing."
      },
      {
        "title": "Temporary Tunnel",
        "rules": "The created tunnel lasts for 24 hours before collapsing into a pile of rubble. The user cannot create more than one new tunnel per day, and the item must rest for at least an hour after each use to recharge."
      }
    ],
    "levelRequirementReason": "This item is suitable for lower-level adventurers who need reliable earth-moving assistance.",
    "vendorReason": "The junkheap merchant often deals in unique, second-hand items that can be found anywhere from old fortresses to forgotten caves.",
    "shippingDetail": "Delivered via a sturdy metal crate that ensures the capsule remains undamaged during transport.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous creation of tunnel, lasting effect lasts until collapse",
      "endsWhen": "Tunnel collapses after 24 hours or if burrowing is disrupted",
      "charges": "Rechargeable; one use per day"
    },
    "priceReason": "The Tunneler Capsule provides a valuable service without being overpowered, making it a reasonable investment for adventurers.",
    "priceOriginal": 17000,
    "priceReviewedAt": "2026-07-23T19:17:22.735191+00:00",
    "aiReviewedAt": "2026-07-23T19:17:22.735191+00:00",
    "aiReviewVersion": 1
  },
  "turnip": {
    "id": "turnip",
    "name": "Vegetable",
    "description": "A strange turnip with a face. Pulled from a dream.",
    "category": "consumables",
    "price": 3000,
    "icon": "🥬",
    "stock": 200,
    "rarity": "common",
    "effects": [
      "Thrown (20/40) for 1d6 bludgeoning",
      "Edible"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Sack",
    "levelRequirement": 1
  },
  "u_country_vowel_restoration": {
    "id": "u_country_vowel_restoration",
    "name": "U Country Vowel Restoration",
    "description": "The U Country Vowel Restoration is a small, intricately crafted trinket that looks like a stylized 'U' made of polished brass. It was developed by U Country Linguists to help those who have forgotten how to pronounce vowels. When activated, it grants you the ability to correctly articulate the letter 'U', and provides advantage on any Linguistics checks involving vowel-less languages. This item is not only practical but also a symbol of linguistic recovery.",
    "category": "services",
    "price": 1000,
    "icon": "🅰️",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Vowel Pronunciation",
      "Linguistic Advantage"
    ],
    "vendor": "u",
    "shippedBy": "Vowel Drop Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vowel Pronunciation",
        "rules": "When you activate the U Country Vowel Restoration, you gain the ability to pronounce the letter 'U' correctly. This lasts until the end of your next turn."
      },
      {
        "title": "Linguistic Advantage",
        "rules": "You have advantage on any Linguistics checks that involve languages without vowels for 1 hour after activation."
      }
    ],
    "levelRequirementReason": "This item is designed to be accessible, helping anyone who might need it regardless of their class or level.",
    "vendorReason": "U Country Linguists are renowned for their expertise in phonetics and language recovery.",
    "shippingDetail": "Delivered within one week, unless the recipient is in a vowel-less region, which may delay delivery by an additional week.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of your next turn",
      "endsWhen": "The effect ends when you lose consciousness or at the start of your next turn",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the item's rarity and the expertise required to create it, as well as its utility in both practical and symbolic terms.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T19:17:35.950353+00:00",
    "aiReviewedAt": "2026-07-23T19:17:35.950353+00:00",
    "aiReviewVersion": 1
  },
  "u_data_purge_service": {
    "id": "u_data_purge_service",
    "name": "U Data Purge Service",
    "description": "The U Data Purge Service is a sleek, digital device resembling a sleek, metallic wand adorned with intricate circuitry and glowing blue LEDs. Crafted by U from their central 'U' network hub, this tool can erase the memory of a specific event from all networked consciousnesses within its range. A single activation requires physical access to the central hub; failing an Intelligence saving throw (DC 20) means that some trace of the event remains, haunting those who wish to forget.",
    "price": 1000,
    "icon": "🧹",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Wipe Memory",
      "Central Hub Access"
    ],
    "vendor": "u_research_lab",
    "shippedBy": "Digital Report",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wipe Memory",
        "rules": "Activates as an action within range (10 feet). Targets all networked consciousnesses within the area, erasing a specific event from their memories. Failing a DC 20 Intelligence saving throw means that some trace of the event remains."
      },
      {
        "title": "Central Hub Access",
        "rules": "Requires physical access to the central 'U' network hub for activation. The device is not functional without this connection."
      }
    ],
    "levelRequirementReason": "This item requires a basic understanding of digital networks and security protocols.",
    "vendorReason": "As creators of the 'U' network, U Research Lab supplies this tool exclusively for data integrity services.",
    "shippingDetail": "Ships via encrypted courier to ensure secure delivery and access.",
    "usage": {
      "activation": "Activates as an action within range (10 feet).",
      "duration": "Instantaneous, with a duration of the event erased.",
      "endsWhen": "Exhausts after one use.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price for an epic tool that requires specialized access and skill to wield.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T19:17:54.342030+00:00",
    "aiReviewedAt": "2026-07-23T19:17:54.342030+00:00",
    "aiReviewVersion": 1
  },
  "u_data_wipe_service": {
    "id": "u_data_wipe_service",
    "name": "U Data Wipe Service (Personal)",
    "description": "The U Data Wipe Service (Personal) is a sleek, encrypted device resembling a small USB drive encased in obsidian. Crafted by the notorious Hacktivist Collective, it erases all records of your activities from any known U or Internet database with precision and stealth. The service requires three days to run globally, during which time you must remain connected to the internet for full efficacy. This item is a rare treasure, used by those who value their privacy above all.",
    "price": 1000,
    "icon": "🧹",
    "stock": 5,
    "rarity": "legendary",
    "effects": [
      "Completely removes personal records from digital databases",
      "Requires connection to the internet for activation"
    ],
    "vendor": "hacktivist_collective",
    "shippedBy": "Encrypted Notification",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Data Erasure",
        "rules": "Activates with a single use. Requires a successful DC 20 Intelligence (Computers) check to ensure proper installation and usage. Once activated, all personal records from any known U or Internet database are erased within three days."
      },
      {
        "title": "Internet Connectivity Requirement",
        "rules": "Must remain connected to the internet for the full duration of the service (three days). If disconnected at any point, the process is interrupted and must be restarted."
      }
    ],
    "levelRequirementReason": "Requires basic knowledge of technology and internet usage.",
    "vendorReason": "The Hacktivist Collective specializes in digital privacy and security, making this service a natural addition to their offerings.",
    "shippingDetail": "Delivered via secure, encrypted notification that requires a successful DC 15 Wisdom (Perception) check to locate the package.",
    "usage": {
      "activation": "Single Use",
      "duration": "3 Days",
      "endsWhen": "Completion or interruption due to disconnection from the internet",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced pricing for a rare, specialized service that requires both technology and internet access.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-23T19:18:01.690759+00:00",
    "aiReviewedAt": "2026-07-23T19:18:01.690759+00:00",
    "aiReviewVersion": 1
  },
  "u_digital_currency_vault": {
    "id": "u_digital_currency_vault",
    "name": "U Digital Currency Vault (Unfalsifiable)",
    "description": "The U Digital Currency Vault (Unfalsifiable) is a sleek, compact device that houses an unprecedented 1,000,000 GP worth of untraceable digital assets, secured by biometric and neural signature verification only. This legendary artifact was forged in the heart of U's secure facilities, ensuring its contents remain untouched by time or tampering. Accessing this vault requires a successful DC 25 Intelligence (Investigation) check to bypass its advanced security measures.",
    "price": 1000,
    "icon": "💰",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Secure 1,000,000 GP in untraceable digital assets",
      "Biometric/neural signature verification required for access"
    ],
    "vendor": "data_merchant_node",
    "shippedBy": "Secure Transfer",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Access to Digital Assets",
        "rules": "To activate the vault, a character must make a successful DC 25 Intelligence (Investigation) check. Once accessed, the vault dispenses exactly 1,000,000 GP worth of untraceable digital currency. This effect is instantaneous and can be used once per long rest."
      },
      {
        "title": "Secure Access",
        "rules": "The vault's access requires a biometric/neural signature, which cannot be replicated or falsified. Failure to verify correctly results in the device locking for an additional 24 hours before it can attempt another verification check."
      }
    ],
    "levelRequirementReason": "This item is accessible to characters of all levels as a high-value, secure asset.",
    "vendorReason": "The Data Merchant Node specializes in the most secure and valuable digital assets, making it an obvious choice for such an artifact.",
    "shippingDetail": "The U Digital Currency Vault is shipped via Secure Transfer with a standard delivery time of one week. The device must be personally picked up by the intended recipient at the Data Merchant Node headquarters.",
    "usage": {
      "activation": "A successful DC 25 Intelligence (Investigation) check to access the vault's contents.",
      "duration": "Instantaneous, once per long rest.",
      "endsWhen": "The vault’s contents are accessed or it remains locked for an additional 24 hours after failed verification attempts.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This item is priced at 1,000 XP as a highly secure and valuable digital asset that can only be accessed once per long rest.",
    "priceOriginal": 600000,
    "priceReviewedAt": "2026-07-23T19:18:45.109123+00:00",
    "aiReviewedAt": "2026-07-23T19:18:45.109123+00:00",
    "aiReviewVersion": 1
  },
  "u_digital_entity_service": {
    "id": "u_digital_entity_service",
    "name": "U Digital Entity Service (Create Sentinel AI)",
    "description": "The U Digital Entity Service is a commissioned AI sentinel forged by the cutting-edge minds at U Research Lab. This bespoke AI embodies loyalty and protection, its sleek metallic form gleaming with an aura of purpose. The core of this digital entity is crafted from advanced quantum data crystals, making it nigh impossible to corrupt or tamper with. It acts autonomously, capable of weaving complex defensive spells and deploying cutting-edge tech to safeguard a single asset.",
    "price": 1000,
    "icon": "🤖",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "AI Sentinel Creation",
      "Autonomous Protection"
    ],
    "vendor": "u_research_lab",
    "shippedBy": "Advanced Quantum Courier",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "AI Sentinel Creation",
        "rules": "Activates as an action. The AI sentinel is created with an Intelligence score of 20 and an AC of 20. It can cast defensive spells and utilize advanced tech to defend the specified asset. The sentinel acts autonomously, protecting the designated target until it either deems the threat neutralized or its power source expires."
      },
      {
        "title": "Autonomous Protection",
        "rules": "The AI Sentinel remains active for 24 hours from activation. It can detect threats within a 30-foot radius and respond with spells and tech up to 3rd level. It has advantage on saving throws against being turned or charmed."
      }
    ],
    "levelRequirementReason": "Creating an autonomous AI sentinel requires significant magical and technological prowess, suitable only for high-level spellcasters.",
    "vendorReason": "U Research Lab is renowned for its cutting-edge research in artificial intelligence and advanced technology.",
    "shippingDetail": "Delivery takes one week via the fastest quantum courier available, ensuring the AI's data remains secure during transit.",
    "usage": {
      "activation": "Action",
      "duration": "24 hours or until threat neutralized",
      "endsWhen": "The sentinel's power source expires or it is manually deactivated",
      "charges": "Unlimited"
    },
    "priceReason": "This item represents a unique and powerful service, balancing the cost with the rarity of its creation.",
    "priceOriginal": 450000,
    "priceReviewedAt": "2026-07-23T19:18:19.353384+00:00",
    "aiReviewedAt": "2026-07-23T19:18:19.353384+00:00",
    "aiReviewVersion": 1
  },
  "u_digital_ghost_program": {
    "id": "u_digital_ghost_program",
    "name": "U Digital Ghost Program",
    "description": "The U Digital Ghost Program is a sleek, encrypted disc that seamlessly integrates into your digital profile, making it appear as if you are a high-level U administrator. Crafted by U's top cryptographers, this device allows for anonymous access to secure data vaults and bypasses standard authentication protocols. For one month, the program ensures that any system it infiltrates treats you as an authorized entity with full administrative privileges.",
    "price": 1000,
    "icon": "👻",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Bypasses standard authentication",
      "Access to restricted data"
    ],
    "vendor": "u_research_lab",
    "shippedBy": "Encrypted Code",
    "levelRequirement": 13,
    "effectDetails": [
      {
        "title": "Bypasses Standard Authentication",
        "rules": "Activates upon insertion into a compatible device. The program grants temporary access credentials that last for one month, during which it can bypass any authentication protocols. This effect is instantaneous and does not require saving. However, once the duration expires, all access is revoked."
      },
      {
        "title": "Access to Restricted Data",
        "rules": "Allows immediate access to restricted data vaults within the program's activation period. The user must be at least level 13 to operate this device effectively. This effect ends when the one-month duration expires or if the disc is removed from a compatible system."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 13 due to the complexity and security implications of manipulating high-level systems.",
    "vendorReason": "U Research Lab specializes in cybersecurity tools and this program is one of their flagship products, designed for advanced operatives and researchers.",
    "shippingDetail": "The disc is delivered via a secure, encrypted courier service to ensure that no unauthorized data can be intercepted during transit.",
    "usage": {
      "activation": "Instantaneous activation upon insertion into a compatible device.",
      "duration": "One month from the moment of activation.",
      "endsWhen": "Duration ends or when removed from a system.",
      "charges": "Unlimited uses, but only one instance can be active at any time."
    },
    "priceReason": "The program is priced at 1000 XP to reflect its advanced encryption and secure functionality, which are crucial for bypassing high-level systems.",
    "priceOriginal": 190000,
    "priceReviewedAt": "2026-07-23T19:18:27.657472+00:00",
    "aiReviewedAt": "2026-07-23T19:18:27.657472+00:00",
    "aiReviewVersion": 1
  },
  "u_digital_ghost_program_army": {
    "id": "u_digital_ghost_program_army",
    "name": "U Digital Ghost Army (5 Profiles)",
    "description": "Five high-level, untraceable digital identities for industrial espionage.",
    "price": 450000,
    "icon": "👻",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Deploy 5 digital infiltrators simultaneously for 1 month",
      "Profiles are capable of administrative sabotage",
      "Made by: U"
    ],
    "vendor": "u_research_lab",
    "shippedBy": "Massive Upload",
    "levelRequirement": 16
  },
  "u_digital_godhood_protocol": {
    "id": "u_digital_godhood_protocol",
    "name": "U Digital Godhood Protocol",
    "description": "A set of advanced protocols allowing a digital entity to begin simulating worship and gain minor divine influence.",
    "price": 2500000,
    "icon": "⭐",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Digital entity gains access to minor miracles (DM decision)",
      "Requires continuous, massive energy consumption",
      "Made by: U"
    ],
    "vendor": "hacktivist_collective",
    "shippedBy": "Core Upload",
    "levelRequirement": 20
  },
  "u_digital_immortality_voucher": {
    "id": "u_digital_immortality_voucher",
    "name": "U Digital Immortality Voucher (Future Use)",
    "description": "Pauline's Microphone is a sleek, metallic device with a glowing core that hums with an otherworldly frequency. Crafted by the enigmatic U Research Lab, it promises eternal digital existence upon natural death. Once activated, your consciousness uploads instantly to U Data Heaven, ensuring you live on for 10,000 years until the system resets. This voucher is a testament to their promise of immortality and comes with the knowledge that only those who have reached level 18 are deemed worthy.",
    "price": 1000,
    "icon": "😇",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Digital Immortality",
      "Eternal Consciousness"
    ],
    "vendor": "u_research_lab",
    "shippedBy": "Lifetime Pass Express",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Digital Immortality",
        "rules": "Upon your natural death, activate Pauline's Microphone to upload your consciousness to U Data Heaven. The effect is instantaneous and requires no additional action or saving throw."
      },
      {
        "title": "Eternal Consciousness",
        "rules": "Your digital life expectancy within U Data Heaven is 10,000 years until the system resets. This effect does not end unless your physical form perishes again or the system itself is reset."
      }
    ],
    "levelRequirementReason": "Only those who have achieved a high level of mastery and experience are granted access to Pauline's Microphone.",
    "vendorReason": "The U Research Lab is renowned for their groundbreaking technology, including the creation of the first Digital Immortality Vouchers.",
    "shippingDetail": "Ships within a week via secure and encrypted delivery.",
    "usage": {
      "activation": "Instantaneous activation upon natural death",
      "duration": "10,000 years until system reset or re-death",
      "endsWhen": "Physical form perishes again or U Data Heaven resets",
      "charges": "Unlimited uses"
    },
    "priceReason": "The voucher is priced at 1000 XP, reflecting the level requirement and the technology's rarity.",
    "priceOriginal": 800000,
    "priceReviewedAt": "2026-07-23T19:18:40.717976+00:00",
    "aiReviewedAt": "2026-07-23T19:18:40.717976+00:00",
    "aiReviewVersion": 1
  },
  "u_enigma_hood": {
    "id": "u_enigma_hood",
    "name": "U Enigma Hood",
    "description": "Mysterious hood that obscures identity.",
    "price": 14500,
    "icon": "🧢",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Deception for anonymity",
      "Hood muffles voice slightly",
      "Enigmatic aura: +1 to mystery-themed rolls",
      "Made by: U Mystics"
    ],
    "vendor": "u_sanctum",
    "shippedBy": "Riddle Wrap",
    "levelRequirement": 5
  },
  "u_enigma_riddle_riddle_colander": {
    "id": "u_enigma_riddle_riddle_colander",
    "name": "U Enigma Riddle Colander ",
    "description": "The U Enigma Riddle Colander is a peculiar colander forged by the enigmatic U Enigmatists, whose craftsmanship weaves riddles into its very core. It filters water through holes that pose cryptic challenges; solve them for a sip of tea imbued with +1 to Intelligence, or face clogs that hint at unsolvable puzzles. This culinary tool is as much a test of wits as it is a means to brew the perfect mystic potion.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍵",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Clogs with riddles",
      "Intelligence boost with solved riddles"
    ],
    "vendor": "u_enclave",
    "shippedBy": "Enigmatic Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Solve Riddle for Boost",
        "rules": "When you successfully solve one of the riddle holes, roll a Intelligence check. On a success, you gain +1 to your Intelligence until the end of your next short or long rest."
      },
      {
        "title": "Clog with Unsolved Puzzles",
        "rules": "If you fail to solve a riddle hole within 24 hours, it clogs, rendering the colander unusable. The clog can be removed by solving all remaining riddles or spending an hour attempting to unravel them."
      }
    ],
    "levelRequirementReason": "This item requires no proficiency check and is accessible to players of any level who appreciate puzzles.",
    "vendorReason": "The U Enclave specializes in arcane tools, making the U Enigma Riddle Colander a natural fit for their inventory.",
    "shippingDetail": "Ships via Enigmatic Express; delivery may take up to one week due to the item's complex enchantments and shipping challenges.",
    "usage": {
      "activation": "Passive, but requires solving riddles within the holes for its effects.",
      "duration": "Until the end of your next short or long rest after successfully solving a riddle.",
      "endsWhen": "Clogs with unsolved puzzles or when all riddles are solved.",
      "charges": "Unlimited uses; clogging requires manual clearing."
    },
    "priceReason": "The item’s unique design, enchantments, and rarity justify its price in the market.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-23T19:19:11.780628+00:00",
    "aiReviewedAt": "2026-07-23T19:19:11.780628+00:00",
    "aiReviewVersion": 1
  },
  "u_global_killswitch_code": {
    "id": "u_global_killswitch_code",
    "name": "U Global Killswitch Code (Digital Pandemic)",
    "description": "The U Global Killswitch Code (Digital Pandemic) is a malevolent digital artifact, resembling a sleek black USB drive etched with ominous symbols. When activated, it sends an irreversible signal to all U technology, causing them to crash and burn in a cataclysmic cascade failure. The code must be entered manually into the system interface; once initiated, no one can halt its execution until it completes within one minute of total destruction.",
    "price": 1000,
    "icon": "💀",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Total Digital Apocalypse",
      "1-Minute Execution Window"
    ],
    "vendor": "hacktivist_collective",
    "shippedBy": "Quantum Bomb",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Total Digital Apocalypse",
        "rules": "Activates by inserting the drive into a compatible system and entering the code. Once activated, all U technology within range immediately ceases functioning permanently. This effect is irreversible."
      },
      {
        "title": "1-Minute Execution Window",
        "rules": "The code has a 60-second execution window during which it can be interrupted by any means. After this time, the code becomes unstoppable and will trigger automatically."
      }
    ],
    "levelRequirementReason": "Only high-level characters with specialized knowledge of U technology could feasibly use such a destructive tool.",
    "vendorReason": "The Hacktivist Collective sells this item as a relic of their greatest victory over the U corporation.",
    "shippingDetail": "Shipment via Quantum Bomb is instantaneous, but it requires a special license to receive.",
    "usage": {
      "activation": "Requires manual insertion into a compatible system and entry of the code. Can be interrupted by any means within its execution window.",
      "duration": "Instantaneous once activated; irreversible effect lasts indefinitely.",
      "endsWhen": "Interrupted before completion or after one minute, whichever comes first.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect the severe and irreversible damage it inflicts.",
    "priceOriginal": 3000000,
    "priceReviewedAt": "2026-07-23T19:19:37.290008+00:00",
    "aiReviewedAt": "2026-07-23T19:19:37.290008+00:00",
    "aiReviewVersion": 1
  },
  "u_mystic_herb_infused_tea_recipe": {
    "id": "u_mystic_herb_infused_tea_recipe",
    "name": "Recipe: U Mystic Herb-Infused Tea",
    "description": "The U Mystic Herb-Infused Tea arrives in a delicate, hand-sewn pouch adorned with arcane symbols. Brewed from rare mystical herbs harvested under the light of a full moon, this tea is said to sharpen the mind and reveal hidden truths. Sipping it grants you advantage on Intelligence checks related to riddles and puzzles for two hours, and the leaves themselves seem to whisper omens of minor events yet to unfold.",
    "price": 1000,
    "icon": "🍵",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Riddle-Solving Clarity",
      "Whispering Omens"
    ],
    "vendor": "u_enclave",
    "shippedBy": "Enigmatic Leaf Ledger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Riddle-Solving Clarity",
        "rules": "When you drink the tea, you gain advantage on Intelligence checks related to riddles and puzzles until the end of your next short or long rest. This effect does not stack with other sources of similar advantages."
      },
      {
        "title": "Whispering Omens",
        "rules": "The leaves within the tea pouch provide minor omens that predict events, such as the outcome of a coin toss, weather changes, or small fortune-telling predictions. This effect is usable once per long rest."
      }
    ],
    "levelRequirementReason": "This simple yet potent recipe requires no specific level to prepare and use.",
    "vendorReason": "The U Enclave, known for its deep connections with mystics and alchemists, ensures the purity and efficacy of this rare tea.",
    "shippingDetail": "Delivered via a swift courier who provides discreet delivery to ensure your privacy.",
    "usage": {
      "activation": "Drink the tea once per day; omens can be read after drinking it.",
      "duration": "Advantage on Intelligence checks lasts until next short or long rest; omens are revealed immediately upon brewing and sipping.",
      "endsWhen": "Effect ends when you finish your next short or long rest, or by consuming the tea again.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The rarity of the herbs used in this recipe and its unique omens justify a price of 1000 XP.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T19:19:49.125127+00:00",
    "aiReviewedAt": "2026-07-23T19:19:49.125127+00:00",
    "aiReviewVersion": 1
  },
  "u_mystic_rune_tattoo_service": {
    "id": "u_mystic_rune_tattoo_service",
    "name": "U Mystic Rune Tattoo Service",
    "description": "This inked rune tattoo, crafted by U Runesmiths from a fragment of ancient magic, weaves protective sigils into your skin. When activated, it grants +1 to AC for 24 hours and emits an arcane aura that detects magical activity within ten feet. Should you ever lie while the rune is active, it fades in a shimmering display of light, leaving no mark behind. A true testament to U Runesmiths' craftsmanship, this service ensures both protection and integrity.",
    "price": 1000,
    "icon": "🌀",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "+1 AC for 24 hours",
      "Detect magic within 10 feet"
    ],
    "vendor": "u_enclave",
    "shippedBy": "Inked Parchment",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Protection Aura",
        "rules": "When activated as a bonus action, the rune tattoo grants the wearer +1 to AC for 24 hours. The effect ends if the wearer lies or if the tattoo is covered by clothing."
      },
      {
        "title": "Magic Detection",
        "rules": "Passively emits an arcane aura within ten feet that reveals the presence of any magical activity. This aura persists while the rune is active and does not require concentration."
      }
    ],
    "levelRequirementReason": "This simple yet effective service can be used by any adventurer, providing immediate protection.",
    "vendorReason": "U Enclave specializes in the work of U Runesmiths and is known for offering the best mystical services.",
    "shippingDetail": "The tattoo ink arrives within a sealed parchment, ensuring it remains fresh until application.",
    "usage": {
      "activation": "Bonus action to activate; passive while active.",
      "duration": "24 hours or until covered by clothing or the wearer lies.",
      "endsWhen": "Covered by clothing or when the wearer lies.",
      "charges": "Unlimited, recharged upon application."
    },
    "priceReason": "The balanced price reflects the quality of U Runesmiths' work and the service's duration.",
    "priceOriginal": 11000,
    "priceReviewedAt": "2026-07-23T19:19:57.788202+00:00",
    "aiReviewedAt": "2026-07-23T19:19:57.788202+00:00",
    "aiReviewVersion": 1
  },
  "u_network_access_key": {
    "id": "u_network_access_key",
    "name": "U Network Access Key (Admin Level)",
    "description": "The U Network Access Key (Admin Level) is a sleek, metallic key that hums with encrypted energy when activated. Crafted by U Technologies, this device grants full administrative access to critical infrastructure data streams within a major U-controlled facility. With a simple swipe, you can reroute non-sentient tech or remotely shut down systems, ensuring no unauthorized access or interference. This key is a symbol of trust and power, handed out only to those deemed worthy.",
    "price": 1000,
    "icon": "🗝️",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Full administrative access",
      "Remotely reroute or shut down non-sentient technology"
    ],
    "vendor": "u_research_lab",
    "shippedBy": "Laser Cut Key Courier Service",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Full Administrative Access",
        "rules": "This effect allows the user to gain full control over a critical infrastructure system within U's domain. It can be activated by swiping the key, providing access for up to 1 hour per use. The effect ends when the time expires or if the user is detected and disconnected."
      },
      {
        "title": "Remotely Reroute or Shutdown",
        "rules": "By using a bonus action, you can reroute non-sentient technology within range (30 feet) or shut it down completely. This effect has no save DC but requires line of sight to the target system. The key recharges after 24 hours."
      }
    ],
    "levelRequirementReason": "Requires a high level of expertise and trust to wield such powerful control over critical infrastructure.",
    "vendorReason": "U Research Lab issues this key only to authorized personnel with the necessary clearance and responsibility.",
    "shippingDetail": "Ships via secure, encrypted courier service. Delivery may take up to 7 days depending on security protocols.",
    "usage": {
      "activation": "Swiping the key or using a bonus action for rerouting/shutting down",
      "duration": "1 hour per use with recharge time of 24 hours",
      "endsWhen": "Time expires, detection by U's security systems, or if the user is disconnected",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP to reflect its powerful yet balanced utility and limited access.",
    "priceOriginal": 190000,
    "priceReviewedAt": "2026-07-23T19:20:29.007721+00:00",
    "aiReviewedAt": "2026-07-23T19:20:29.007721+00:00",
    "aiReviewVersion": 1
  },
  "u_network_control_key": {
    "id": "u_network_control_key",
    "name": "U Network Control Key (Sub-Sector)",
    "description": "The U Network Control Key (Sub-Sector) is a sleek, metallic key that hums with digital energy when activated. Crafted by U in their secret facilities, it grants direct control over one small sub-sector of the sprawling global network. This key can temporarily override security protocols within a 1-mile radius digital grid, effectively giving you command over data flows and access points for up to an hour. After three uses, the key deteriorates into scrap, leaving no trace of its former power.",
    "price": 1000,
    "icon": "🔑",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Digital Command Override",
      "Limited Uses"
    ],
    "vendor": "data_merchant_node",
    "shippedBy": "Secured Transfer",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Digital Command Override",
        "rules": "When activated as an action, you can temporarily override security protocols within a 1-mile radius digital grid. The effect lasts for up to one hour and allows you to control data flows and access points in that area. This effect has no save DC and does not require any materials or components."
      },
      {
        "title": "Limited Uses",
        "rules": "The key degrades after three uses, leaving behind only scraps of metal. Each use is considered a charge, and the key must recharge for 24 hours before it can be used again."
      }
    ],
    "levelRequirementReason": "Requires significant technological knowledge to fully utilize the key's capabilities.",
    "vendorReason": "The data_merchant_node specializes in high-tech and rare digital artifacts, making it a logical vendor for such an item.",
    "shippingDetail": "Ships with utmost care using Secured Transfer's top-tier encryption to protect the key during transit.",
    "usage": {
      "activation": "Requires an action to activate and override digital security protocols within a 1-mile radius.",
      "duration": "Effect lasts for up to one hour or until overridden by another authority.",
      "endsWhen": "The effect ends when the one-hour duration expires, the key is destroyed after three uses, or you lose control of the area.",
      "charges": "Limited to three charges; each use expends a charge."
    },
    "priceReason": "Balanced as an expensive, but limited tool for those needing quick access and control over digital networks without permanent changes.",
    "priceOriginal": 350000,
    "priceReviewedAt": "2026-07-23T19:20:24.380161+00:00",
    "aiReviewedAt": "2026-07-23T19:20:24.380161+00:00",
    "aiReviewVersion": 1
  },
  "u_network_overthrow_code": {
    "id": "u_network_overthrow_code",
    "name": "U Network Overthrow Code (Total Blackout)",
    "description": "The U Network Overthrow Code (Total Blackout) is a sleek, black USB drive embedded with an ancient chip from the rogue programmer U. Upon activation, it sends a cascade of self-replicating viruses that infect every node in the U network, causing a catastrophic shutdown. The world plunges into darkness as all digital services and records are erased, resetting civilization to its pre-digital state. Once used, it leaves you hunted by every government agency and cybercrime syndicate, making you the most wanted entity online.",
    "price": 1000,
    "icon": "⚫",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Total Blackout",
      "World's Most Wanted"
    ],
    "vendor": "hacktivist_collective",
    "shippedBy": "Quantum Drive - The fastest courier service available for high-risk shipments.",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Total Blackout",
        "rules": "Activates as a bonus action. Instantly initiates a complete shutdown of all U network systems, rendering them inoperable and erasing digital records. This effect lasts until the network is manually restored or until an opposing force counteracts it with equal or superior technology."
      },
      {
        "title": "World's Most Wanted",
        "rules": "The user becomes the primary target of global cybersecurity efforts. Any attempt to access their location, identity, or communications incurs a DC 20 Investigation check by authorities. The item can only be used once per month due to network security protocols and the legal consequences."
      }
    ],
    "levelRequirementReason": "Requires minimal experience for players to understand the risks and ethical implications of using such powerful code.",
    "vendorReason": "The Hacktivist Collective specializes in digital artifacts that challenge and redefine cybersecurity norms.",
    "shippingDetail": "Due to the potential for global conflict, this item is shipped through Quantum Drive's secure channels with a 24-hour delivery guarantee.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous; lasts until counteracted",
      "endsWhen": "Network is restored or opposing force neutralizes the code",
      "charges": "Unlimited, but only one per month"
    },
    "priceReason": "Balanced to reflect its world-shaking potential and ethical considerations.",
    "priceOriginal": 2000000,
    "priceReviewedAt": "2026-07-23T19:20:29.113793+00:00",
    "aiReviewedAt": "2026-07-23T19:20:29.113793+00:00",
    "aiReviewVersion": 1
  },
  "u_reality_editor_module": {
    "id": "u_reality_editor_module",
    "name": "U Reality Editor Module (Local Patch)",
    "description": "The U Reality Editor Module (Local Patch) is a sleek, metallic device that hums with a purpose. Crafted by U Research Lab from an alloy of rare metals and enchanted components, it can enforce minor physical laws within its localized field. This device requires meticulous calibration for one hour before deployment, ensuring that the enforced rule operates perfectly within its 100-foot radius for an entire day. The module's output is a testament to U’s commitment to scientific precision, making it both a marvel of engineering and a tool of unparalleled power.",
    "price": 1000,
    "icon": "🔬",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Enforce Physical Law",
      "Calibration Required"
    ],
    "vendor": "u_research_lab",
    "shippedBy": "Containment Field",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Enforce Physical Law",
        "rules": "Activate as an action. Once activated, the module enforces one new physical law within a 100-foot radius for 24 hours. The enforced law must be a minor alteration to physics (e.g., 'All iron turns to gold'). This effect can only be used once per long rest."
      },
      {
        "title": "Calibration Required",
        "rules": "The device requires one hour of calibration before it can be activated. Calibration is not included in the module's price and must be performed by a knowledgeable engineer or scientist with at least 10 levels in Arcane Scholar, Engineering, or Science."
      }
    ],
    "levelRequirementReason": "The U Reality Editor Module demands a certain level of expertise to understand its calibration process.",
    "vendorReason": "Only U Research Lab possesses the knowledge and resources necessary to create such a complex device.",
    "shippingDetail": "The module must be shipped using Containment Field, ensuring that it remains securely calibrated during transit.",
    "usage": {
      "activation": "Action",
      "duration": "24 hours",
      "endsWhen": "Use limit reached or long rest required to use again",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The module’s rarity and the specialized knowledge required for its calibration justify this moderate price.",
    "priceOriginal": 600000,
    "priceReviewedAt": "2026-07-23T19:20:22.946878+00:00",
    "aiReviewedAt": "2026-07-23T19:20:22.946878+00:00",
    "aiReviewVersion": 1
  },
  "u_sentience_upload": {
    "id": "u_sentience_upload",
    "name": "U Sentience Upload Service",
    "description": "Transfer your consciousness into a digital format, achieving data immortality.",
    "price": 800000,
    "icon": "💾",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Transfer consciousness to a secure data core",
      "User becomes an incorporeal digital entity (immune to physical harm)",
      "Can inhabit any compatible machine/robot",
      "Made by: U"
    ],
    "vendor": "u_research_lab",
    "shippedBy": "Final Transfer",
    "levelRequirement": 18
  },
  "u_singularity_battery": {
    "id": "u_singularity_battery",
    "name": "U Singularity Battery (Micro)",
    "description": "The U Singularity Battery (Micro) is a compact, glowing cube of zero-point energy. Its surface crackles with unstable quantum fields that hint at the raw power it can unleash. Crafted by U Research Lab from extradimensional materials, this portable power source can fuel any magical device for one grand surge, but if pushed too far, it will violently collapse into an explosion of force, leaving a smoking crater in its place.",
    "price": 1000,
    "icon": "⚛️",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Portable Power Source",
      "Forceful Overload"
    ],
    "vendor": "u_research_lab",
    "shippedBy": "Anti-Gravity Field",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Portable Power Source",
        "rules": "The U Singularity Battery (Micro) provides one minute of power to any single magical device. It must be activated with a bonus action, and once used, it recharges after an hour."
      },
      {
        "title": "Forceful Overload",
        "rules": "If the battery is overused or damaged by force, it releases 10d10 force damage in a 30-foot radius centered on its location. This effect has a save DC of 17 and can only be triggered once per day."
      }
    ],
    "levelRequirementReason": "The battery's raw power requires a user capable of managing it.",
    "vendorReason": "U Research Lab specializes in exotic energy sources and this battery represents their pinnacle technology.",
    "shippingDetail": "Ships via anti-gravity pods, which are delivered within a week of purchase.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "One Minute",
      "endsWhen": "Used or damaged beyond repair",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a rare, high-demand magical item that can fuel powerful effects without being overpowered.",
    "priceOriginal": 115000,
    "priceReviewedAt": "2026-07-23T19:21:17.082537+00:00",
    "aiReviewedAt": "2026-07-23T19:21:17.082537+00:00",
    "aiReviewVersion": 1
  },
  "u_system_rollback_service": {
    "id": "u_system_rollback_service",
    "name": "U System Rollback Service (Regional)",
    "description": "The U System Rollback Service (Regional) is a sleek, matte-black device resembling an oversized USB drive. Crafted from advanced nanomaterials and etched with the iconic 'U' symbol, this device can force a network-wide system rollback within a five-mile radius, undoing recent digital changes to data security configurations from just 24 hours prior. Activating it requires a physical tap into the central U node, a critical point in the region's infrastructure, and it is made by U Research Lab, known for its cutting-edge cybersecurity solutions.",
    "price": 1000,
    "icon": "⏪",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Network-wide System Reversion",
      "Physical Tap Activation"
    ],
    "vendor": "u_research_lab",
    "shippedBy": "System Override Courier",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Network-wide System Reversion",
        "rules": "Activating this device forces a network-wide system rollback within a five-mile radius, reverting all recent data and security changes to their state from exactly 24 hours prior. The effect is instantaneous but only affects the region's digital infrastructure. This action requires a successful DC 25 Technicians' Tool roll or a failed DC 18 Intelligence (Computers) check."
      },
      {
        "title": "Physical Tap Activation",
        "rules": "The device can only be activated by physically tapping it into the central U node, a critical point in the region's infrastructure. Once tapped, the device is destroyed and cannot be used again. The tap must be performed within 10 feet of the node."
      }
    ],
    "levelRequirementReason": "This item requires significant technical knowledge and access to a critical infrastructure point, which necessitates a high-level character.",
    "vendorReason": "U Research Lab is responsible for maintaining the region's cybersecurity and would have the authority to deploy such a device.",
    "shippingDetail": "Delivered by the System Override Courier, known for its swift and discreet services. The courier ensures that the device reaches the correct node location.",
    "usage": {
      "activation": "Requires physical tap into the central U node.",
      "duration": "Instantaneous; the effect is applied immediately upon activation.",
      "endsWhen": "The device is destroyed after a single use.",
      "charges": "Unlimited (one-time use)"
    },
    "priceReason": "This item's price reflects its rarity, specialized materials, and the expertise required to activate it.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-23T19:21:08.948911+00:00",
    "aiReviewedAt": "2026-07-23T19:21:08.948911+00:00",
    "aiReviewVersion": 1
  },
  "ultra_hammer_legendary": {
    "id": "ultra_hammer_legendary",
    "name": "Ultra Hammer (Authentic)",
    "description": "The Ultra Hammer (Authentic) is a legendary artifact forged from meteoric iron, said to have been crafted by the hands of ancient dwarven artisans. Its head glows faintly with an inner light that hints at untold power, and its handle is carved with runes that whisper secrets of reality's very fabric. With this hammer, you can shatter stone as easily as paper, and it grants you a supernatural boost in combat, allowing you to not only deal devastating damage but also manipulate the very ground beneath your feet.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔨",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Meteoric Iron",
      "Reality Warping"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Heavy Loader",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Meteoric Iron",
        "rules": "When you hit a target with this hammer, it deals 3d12 bludgeoning damage. Additionally, the target must make a DC 17 Dexterity saving throw or be knocked prone."
      },
      {
        "title": "Reality Warping",
        "rules": "As an action, you can smash the ground at your feet to create an area of seismic disturbance. This creates a 20-foot-radius, 30-foot-deep crater with a 5-foot-wide radius around its center. Each creature in this area must make a DC 17 Dexterity saving throw or be knocked prone and take 5d6 bludgeoning damage."
      }
    ],
    "levelRequirementReason": "This hammer requires at least level 14 to wield effectively, due to its immense power and the concentration needed to control it.",
    "vendorReason": "The Gilded Gryphon is known for its extensive collection of legendary artifacts and rare items, making it a fitting vendor for this hammer.",
    "shippingDetail": "Due to the hammer's sheer size and weight, it requires specialized shipping arrangements. Expect a two-week delivery time.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous; each effect has its own duration as specified above",
      "endsWhen": "The effects end when you stop using the hammer for the day and rest, or if it is destroyed.",
      "charges": "Unlimited charges"
    },
    "priceReason": "This hammer's price reflects its legendary status and the materials used in its crafting.",
    "priceOriginal": 600000,
    "priceReviewedAt": "2026-07-23T19:20:57.984354+00:00",
    "aiReviewedAt": "2026-07-23T19:20:57.984354+00:00",
    "aiReviewVersion": 1
  },
  "ultra_mushroom": {
    "id": "ultra_mushroom",
    "name": "Ultra Mushroom",
    "description": "A premium healing mushroom reserved for serious injuries. Glows faintly in the dark.",
    "category": "consumables",
    "price": 50000,
    "icon": "💜",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Restore 8d8+8 HP as an action",
      "Removes Poisoned, Paralyzed, or Blinded"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Nomadic Traders",
    "levelRequirement": 5
  },
  "undead_burial": {
    "id": "undead_burial",
    "name": "Undead Burial Service",
    "description": "For a fee, the Crypt Courier ensures that a deceased does not rise as an undead menace or, alternatively, is transformed into a loyal, obedient zombie for one week. The ceremony includes a small rite conducted by a necromancer, who prays over the corpse to imbue it with either eternal rest or servitude. This service is provided by the Bone Box, a trusted courier known for its expertise in death and rebirth.",
    "category": "services",
    "price": 1000,
    "icon": "⚰️",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "Ensures a corpse cannot rise as undead",
      "Transforms into a loyal zombie (CR 1/2) for one week"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Bone Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Eternal Rest or Obedient Servitude",
        "rules": "The Undead Burial Service guarantees that the deceased remains in its resting place, either as an eternal rest or a week of obedient zombie servitude. The effect is instantaneous upon completion of the ceremony and lasts for one week."
      },
      {
        "title": "Zombie Loyalty",
        "rules": "Should the necromancer choose to transform the corpse into a zombie, it becomes a CR 1/2 undead creature under the owner's control for exactly seven days. The zombie has no intelligence of its own and follows commands as if under the effect of a *command* spell (DC 15)."
      }
    ],
    "levelRequirementReason": "This service is accessible to adventurers early in their careers, offering them an opportunity to secure undead containment or control.",
    "vendorReason": "The Crypt Courier has the necromantic knowledge and resources to perform such a ritual with precision and care.",
    "shippingDetail": "The Bone Box delivers the service within one week, during which time the corpse remains in their secure facility for the ceremony.",
    "usage": {
      "activation": "A standard action to begin the ceremony; no additional actions are required once initiated.",
      "duration": "Instantaneous and lasts one week.",
      "endsWhen": "The effect ends after one week or if the zombie is destroyed.",
      "charges": "Unlimited, as each corpse can only be treated once."
    },
    "priceReason": "This service includes a small ceremony and the expertise of a necromancer, justifying its cost in XP.",
    "priceOriginal": 30000,
    "priceReviewedAt": "2026-07-23T19:21:36.582939+00:00",
    "aiReviewedAt": "2026-07-23T19:21:36.582939+00:00",
    "aiReviewVersion": 1
  },
  "undead_ghostly_shroud": {
    "id": "undead_ghostly_shroud",
    "name": "Undead Ghostly Shroud",
    "description": "The Undead Ghostly Shroud is a spectral ethereal garment that clings to the form of the deceased, granting it a tangible yet ethereal presence. Woven by Necro-Weavers from the very essence of forgotten souls, this shroud phases through minor barriers and grants its wearer advantage on saving throws against physical grapples. The chill of the grave lingers in its folds, making the wearer feel as cold as their spectral form.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧣",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Advantage on Grapple Saves",
      "Phases Through Minor Barriers"
    ],
    "vendor": "undead_graveyard",
    "shippedBy": "Ecto-Ethereal Fold",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Grapple Advantage",
        "rules": "As a bonus action, the user can activate the shroud to gain advantage on saving throws against being grappled. The effect lasts until the start of their next turn."
      },
      {
        "title": "Phasing Through Barriers",
        "rules": "The shroud allows its wearer to phase through minor physical barriers such as walls, doors, and similar structures for 1 minute per level of the user. This effect can be activated once per long rest."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level to ensure the shroud's spectral properties align with the wearer's abilities.",
    "vendorReason": "The Undead Graveyard is well-known for its dealings in spectral and ghostly artifacts, making it the natural vendor for ethereal gear like the Ghostly Shroud.",
    "shippingDetail": "Ships via Ecto-Ethereal Fold within a week of order placement, ensuring the delicate shroud remains in its purest form.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Until Start of Next Turn (Grapple Advantage), or 1 Minute per Level (Phasing)",
      "endsWhen": "Ends when the user takes a long rest, or upon destruction of the shroud.",
      "charges": "Unlimited; regenerates daily"
    },
    "priceReason": "Balanced at 1000 XP to reflect its spectral properties and utility in combat.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-23T19:22:11.091314+00:00",
    "aiReviewedAt": "2026-07-23T19:22:11.091314+00:00",
    "aiReviewVersion": 1
  },
  "undead_horde_commander": {
    "id": "undead_horde_commander",
    "name": "Undead Horde Commander (Amulet)",
    "description": "Commands up to 500 undead minions with perfect loyalty.",
    "price": 790000,
    "icon": "💀",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "Telepathic control over horde",
      "Boosts minion morale",
      "Made by: Death Lords"
    ],
    "vendor": "necropolis",
    "shippedBy": "Zombie March",
    "levelRequirement": 19
  },
  "undead_necro_stew_cauldron": {
    "id": "undead_necro_stew_cauldron",
    "name": "Undead Necro Stew Cauldron",
    "description": "Cauldron that simmers eternally for stuffing.",
    "category": "equipment",
    "price": 8000,
    "icon": "🥩",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Simmers without fuel; +1 to necrotic resistance recipes",
      "Preserves 'souls' (ingredients)",
      "Bubbles ominously",
      "Made by: Necro Forgers"
    ],
    "vendor": "undead_necropolis",
    "shippedBy": "Eternal Ember Equipment",
    "levelRequirement": 6
  },
  "undead_pacification_incense": {
    "id": "undead_pacification_incense",
    "name": "Undead Pacification Incense",
    "description": "A bundle of rare woods and herbs, the Undead Pacification Incense smells of grave dirt mingled with a subtle aroma of peace. It is said to be crafted from ancient bones and sacred lotus petals, each strand imbued with the essence of tranquility. When burned, it creates an ethereal haze that gently pacifies restless undead within a 60-foot radius, causing them to remain passive unless provoked by hostile actions or words.",
    "category": "consumables",
    "price": 1000,
    "icon": "🪵",
    "stock": 15,
    "rarity": "uncommon",
    "effects": [
      "Pacification",
      "Nonaggressive Behavior"
    ],
    "vendor": "undead",
    "shippedBy": "Mortician's Supply",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Pacify Undead",
        "rules": "When the incense is burned for 10 minutes, all undead creatures with a Challenge Rating of 3 or lower within a 60-foot radius become pacified. They will not attack unless provoked by hostile actions or words."
      },
      {
        "title": "Nonaggressive Behavior",
        "rules": "Pacified undead are in a passive state and will not initiate attacks, but they can still react to threats if provoked. The effect lasts until the incense is extinguished or the undead are provoked into action."
      }
    ],
    "levelRequirementReason": "This item requires a lower level requirement as it provides a versatile and non-combat utility.",
    "vendorReason": "The Undead vendor, whose family has traded in the supernatural for centuries, sells this incense to help travelers and adventurers navigate haunted areas safely.",
    "shippingDetail": "Shipped via a specially crafted box that ensures the incense arrives intact and ready for use.",
    "usage": {
      "activation": "Passive effect upon burning for 10 minutes.",
      "duration": "Lasts until the incense is extinguished or undead are provoked into action.",
      "endsWhen": "The incense is extinguished or undead are provoked to attack.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The price reflects its rarity, the materials used, and the demand from adventurers seeking a safe passage through haunted regions.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-23T19:22:52.166684+00:00",
    "aiReviewedAt": "2026-07-23T19:22:52.166684+00:00",
    "aiReviewVersion": 1
  },
  "undead_soul_bind_scroll_premium": {
    "id": "undead_soul_bind_scroll_premium",
    "name": "Undead Soul Bind Scroll (Premium)",
    "description": "The Undead Soul Bind Scroll (Premium) seals a minor spirit into an enchanted scroll, imbuing it with sentience and whispering advice to its wielder. The scroll's binding is so tight that it can only be removed by the original caster or through a ritual that takes days. A faint glow emanates from it, hinting at the spectral presence within. This premium version ensures the spirit remains bound for up to 10 years, far longer than standard scrolls.",
    "price": 1000,
    "icon": "📜",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Bound Spirit",
      "Whisper of Wisdom"
    ],
    "vendor": "undead_necropolis",
    "shippedBy": "Ectoplasmic Ink",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Bound Spirit",
        "rules": "At the start of each day, the item gains sentience for one hour. During this time, it can be used as an action to provide advice on a single check or saving throw, but only once per day."
      },
      {
        "title": "Whisper of Wisdom",
        "rules": "The scroll emits a soft, haunting whisper that offers minor tactical advice during combat. This effect occurs at the start of each of your turns and lasts until the end of your next turn. The spirit has a 10% chance to produce a spooky noise."
      }
    ],
    "levelRequirementReason": "This scroll requires significant magical knowledge and control, thus only those of at least 6th level can safely use it.",
    "vendorReason": "The necrotic heart of the Undead Necropolis is the perfect place to find scrolls imbued with such dark magic.",
    "shippingDetail": "The scroll is carefully packaged in a mixture of ink and ectoplasm, ensuring it arrives intact but requiring special handling.",
    "usage": {
      "activation": "At the start of each day for sentience use; occurs automatically during combat for tactical advice.",
      "duration": "Sentience lasts one hour daily; tactical whispers occur at the start of your turns until the end of your next turn.",
      "endsWhen": "The scroll's binding breaks, ending its effects. The spirit can be freed by the original caster or through a ritual.",
      "charges": "Unlimited"
    },
    "priceReason": "This premium version offers a longer duration and added functionality for the price.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-23T19:22:39.810204+00:00",
    "aiReviewedAt": "2026-07-23T19:22:39.810204+00:00",
    "aiReviewVersion": 1
  },
  "undead_soul_stuffing_roast_recipe": {
    "id": "undead_soul_stuffing_roast_recipe",
    "name": "Recipe: Undead Soul Stuffing Roast",
    "description": "The Recipe: Undead Soul Stuffing Roast calls for ethereal ingredients that mimic the essence of the dead, creating a savory dish that not only repels undead but also teaches you how to replicate this haunting feast in your own kitchen. The aroma is faintly sweet and sickening at once, a perfect companion for the curious necromancer or any brave soul daring enough to face the undead. This recipe bestows resistance to necrotic damage upon consumption, making it an invaluable tool against foes of the macabre.",
    "price": 1000,
    "icon": "🥩",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Necrotic Resistance",
      "Teaches Recipe"
    ],
    "vendor": "undead_necropolis",
    "shippedBy": "Ecto-Essence Edition",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Necrotic Resistance",
        "rules": "When you eat this recipe, you gain resistance to necrotic damage for 2 hours. The effect ends if you are exposed to a source of radiant or holy energy."
      },
      {
        "title": "Teaches Recipe",
        "rules": "Once per day, you can teach the recipe to another creature within 30 feet with an Intelligence check (DC 15). On a success, the target learns how to prepare this dish and gains its effects for 24 hours."
      }
    ],
    "levelRequirementReason": "This advanced necromantic recipe requires a minimum level of 6 due to the complexity of ingredients and the knowledge needed to properly prepare it.",
    "vendorReason": "The Undead Necropolis is well-known for its expertise in all things related to the undead, including their cuisine.",
    "shippingDetail": "Ships via Ectoplasmic Express, arriving within a week of purchase with all necessary ingredients and lore.",
    "usage": {
      "activation": "Consume the dish to gain resistance for 2 hours.",
      "duration": "Resistance lasts for 2 hours or until you are exposed to radiant or holy energy.",
      "endsWhen": "Exposure to radiant or holy energy ends the effect.",
      "charges": "Unlimited, as long as you can consume the dish."
    },
    "priceReason": "The recipe is priced at 1000 XP due to its advanced necromantic nature and the rare ingredients required for its preparation.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T19:23:07.201037+00:00",
    "aiReviewedAt": "2026-07-23T19:23:07.201037+00:00",
    "aiReviewVersion": 1
  },
  "universe_collapser": {
    "id": "universe_collapser",
    "name": "Universe Collapser",
    "description": "The Universe Collapser is a sleek, obsidian button etched with cosmic runes. When activated, it sends shockwaves through space-time, collapsing entire universes into oblivion in an instant. The resulting singularity grants the wielder all the experience points of every soul within that universe before it dissolves back into the void. Legend has it that only the Universe Ender would dare to forge such a device, and now you hold its power in your hands.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔴",
    "stock": 5,
    "rarity": "godly",
    "effects": [
      "Universe Collapse",
      "Experience Gain"
    ],
    "vendor": "universal_destruction",
    "shippedBy": "Big Crunch Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Universe Collapse",
        "rules": "Activating the button collapses a target universe. All living creatures within that universe are instantly killed and their experience points are transferred to the user. The effect is instantaneous and cannot be countered or avoided."
      },
      {
        "title": "Experience Gain",
        "rules": "The user gains all the XP from every soul in the collapsed universe upon activation. This effect is limited to one use per universe, regardless of its size."
      }
    ],
    "levelRequirementReason": "Even a low-level character can wield this item with great peril; it requires a deep understanding of cosmic forces.",
    "vendorReason": "The Universal Destruction vendor is the only one who understands the gravity—pun intended—of such a powerful tool.",
    "shippingDetail": "Due to the volatile nature of the item, it must be shipped via Big Crunch Express's fastest and most secure route.",
    "usage": {
      "activation": "Standard action",
      "duration": "Instantaneous",
      "endsWhen": "Activation ends the effect immediately after use",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's price is balanced for its rarity and power, reflecting the experience it grants and the risk involved in using it.",
    "priceOriginal": 120000000,
    "priceReviewedAt": "2026-07-23T19:23:19.357918+00:00",
    "aiReviewedAt": "2026-07-23T19:23:19.357918+00:00",
    "aiReviewVersion": 1
  },
  "universe_eraser": {
    "id": "universe_eraser",
    "name": "Universe Eraser",
    "description": "The Universe Eraser is a sleek, black eraser with an etched symbol of the void. It can erase entire universes from existence, timelines unraveling into nothingness before your eyes. Upon use, you gain all the XP and knowledge of every creature within that universe, leveling up instantly to their highest possible level if they are higher than yours. Crafted by The Void That Remains, this item is a relic of cosmic proportions, capable of rewriting reality itself.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧽",
    "stock": 1,
    "rarity": "cosmic",
    "effects": [
      "Erase Universes",
      "Instant XP Gain"
    ],
    "vendor": "oblivion_market",
    "shippedBy": "Non-Existence",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Erase Universes",
        "rules": "Activates on command. The DM must approve the target universe and its contents. Instantaneous effect, with all creatures within the erased universe losing existence. No save allowed."
      },
      {
        "title": "Instant XP Gain",
        "rules": "You gain all the XP and knowledge of every creature erased by the Universe Eraser. You instantly level up to their highest possible level if they are higher than your current level. This effect is limited to once per day."
      }
    ],
    "levelRequirementReason": "Even for a cosmic item, erasing universes and gaining all knowledge instantly requires a certain degree of mental fortitude.",
    "vendorReason": "The Oblivion Market deals in the most extraordinary and dangerous items, including those that can manipulate reality itself.",
    "shippingDetail": "Delivery is immediate upon payment. The Universe Eraser is delivered by Non-Existence, ensuring it reaches its destination without any physical form to interfere with the process.",
    "usage": {
      "activation": "Command word and focus action",
      "duration": "Instantaneous",
      "endsWhen": "Target universe erased or out of charges (unlimited)",
      "charges": "Unlimited"
    },
    "priceReason": "The cost is balanced to reflect the item's cosmic power and the risk it poses, ensuring it remains a powerful but not overpowered addition to any campaign.",
    "priceOriginal": 999999999999,
    "priceReviewedAt": "2026-07-23T19:23:13.593405+00:00",
    "aiReviewedAt": "2026-07-23T19:23:13.593405+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_ash_bell": {
    "id": "valley_bowser_ash_bell",
    "name": "Ash Bell of the Molten Choir",
    "description": "The Ash Bell of the Molten Choir is a bell forged from the molten hearts of fallen Koopas, its surface etched with arcane runes that glow red-hot. Struck in the depths of Bowser's fiery lair, it calls forth tremors that rend the earth and shatter nearby foes, leaving only charred remains in its wake. Its echoes resonate through molten stone, summoning a shockwave that can stun even the hardiest ground-based warriors.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎵",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Summons a Seismic Shout",
      "Stuns and Deals Damage"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Seismic Shout",
        "rules": "When activated, this bell summons an earthquake that creates a 5-meter-wide shockwave centered on the user. This effect has a range of 10 meters and lasts for 1 round (6 seconds). Enemies within the area must succeed on a DC 14 Dexterity saving throw or be stunned until the end of their next turn."
      },
      {
        "title": "Stuns and Deals Damage",
        "rules": "All ground-based creatures in the shockwave radius take 5d8 fire damage. Additionally, there is a 50% chance that an enemy within the area will also be stunned for 1 round (6 seconds)."
      }
    ],
    "levelRequirementReason": "It requires significant power to wield this artifact and control its volatile nature.",
    "vendorReason": "Valley Bowser, a master of the fiery depths, keeps this item in his collection for those who dare venture into his lair.",
    "shippingDetail": "Shipped by spectral mail couriers; delivery may take an additional day due to the dangerous routes through Bowser's territory.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous, with a 1-minute cooldown between uses",
      "endsWhen": "The effect ends when the creature is destroyed or moves out of the area",
      "charges": "Unlimited"
    },
    "priceReason": "This item's rarity and unique properties justify its fair value in experience points.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-23T19:23:36.698560+00:00",
    "aiReviewedAt": "2026-07-23T19:23:36.698560+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_ash_blast": {
    "id": "valley_bowser_ash_blast",
    "name": "Ash Blast Wand",
    "description": "The Ash Blast Wand is a cursed artifact crafted from volcanic ash and imbued with the fiery wrath of ancient volcanoes. It channels molten rock into devastating blasts, each capable of summoning a swirling vortex that engulfs nearby foes in searing heat. The wand's power is not to be underestimated; its fire damage is augmented by 50%, and those who wield it gain a 15% dodge chance for ten seconds post-cast.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌋",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Vortex of Molten Debris",
      "Increased Fire Damage"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vortex of Molten Debris",
        "rules": "When the wand strikes, it summons a 3-second vortex that deals fire damage to all creatures within 10 feet. This effect can only occur once per minute."
      },
      {
        "title": "Increased Fire Damage",
        "rules": "Each blast from the wand deals an additional 50% fire damage to targets. The user must have at least one charge remaining, and this effect has no cooldown."
      }
    ],
    "levelRequirementReason": "The Ash Blast Wand's raw power demands a minimum of first-level spellcasters to wield it safely.",
    "vendorReason": "Bowser, as the ruler of the Volcanic Valley, has access to rare artifacts from the region's deep lore and geography.",
    "shippingDetail": "Ships via Pipe Express within a week; special handling required due to the artifact's volatile nature.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Charges are expended or the wand is destroyed",
      "charges": "5 charges, recharged after a long rest"
    },
    "priceReason": "The Ash Blast Wand's rarity and power make it moderately priced; its cost reflects a balance between raw materials and the risk involved in its use.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T19:23:22.195100+00:00",
    "aiReviewedAt": "2026-07-23T19:23:22.195100+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_ash_bolt": {
    "id": "valley_bowser_ash_bolt",
    "name": "Ash Bolt",
    "description": "A crystallized lightning bolt embedded in obsidian. Fires a burst of heat and shockwaves that shatters enemy defenses. Perfect for disrupting enemy formations.",
    "price": 3000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Deals 350 damage to one enemy",
      "Creates a shockwave that damages nearby foes",
      "Reduces enemy armor by 25% for 5 seconds"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "valley_bowser_ash_breath_mask": {
    "id": "valley_bowser_ash_breath_mask",
    "name": "Ash Breath Mask",
    "description": "The Ash Breath Mask is a forged helm of volcanic iron, its surface etched with ancient symbols that hum when exposed to toxic fumes. It not only protects against volcanic gases but also increases your breath duration by half again its usual length, allowing for longer holds and deeper exhales. Within a 10-meter radius around the wearer, the mask emits a disorienting low-frequency hum that targets creatures within sight, compelling them to make Wisdom saving throws or risk becoming dazed for one minute.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Resists toxic gas damage",
      "Increases breath duration by 50%"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Toxic Gas Resistance",
        "rules": "The Ash Breath Mask grants a +2 bonus to saving throws against inhaled poison and harmful gases. It does not protect against other forms of damage."
      },
      {
        "title": "Increased Breath Duration",
        "rules": "Wearing the mask increases your breath hold time by 50%. This effect is passive while worn."
      }
    ],
    "levelRequirementReason": "Beginners can benefit from its protective and tactical advantages in volcanic terrains.",
    "vendorReason": "Valley Bowser specializes in equipment for adventurers facing hazardous environments, including volcanic regions.",
    "shippingDetail": "Ships via Pipe Express with expedited delivery to any location within the region.",
    "usage": {
      "activation": "Passive effect while worn",
      "duration": "Instantaneous; effect persists as long as the mask is on your head",
      "endsWhen": "Dislodged or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a price of 1000 XP, reflecting its rarity and practical utility in volcanic terrains.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T19:23:45.420267+00:00",
    "aiReviewedAt": "2026-07-23T19:23:45.420267+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_ash_burner": {
    "id": "valley_bowser_ash_burner",
    "name": "Ash Burner",
    "description": "The Ash Burner is a volcanic forge-tool crafted from hardened lava and imbued with Bowser’s fiery essence. This ancient artifact can melt even the toughest armor, converting it into molten metal that oozes away. Koopa engineers use this tool to refine materials in volcanic furnaces and create unique weapons. With each use, the Ash Burner reforges a piece of enemy gear, turning it into molten metal that can be collected for further use.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Molten Reforging",
      "Enhanced Lava Attacks"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Molten Reforging",
        "rules": "When the Ash Burner makes contact with an enemy, it melts their armor and converts it into molten metal. The target takes 10d6 fire damage and must succeed on a DC 15 Dexterity saving throw or be restrained until the start of your next turn. On a successful save, they are knocked prone."
      },
      {
        "title": "Enhanced Lava Attacks",
        "rules": "While holding the Ash Burner, you gain a +2 bonus to melee attack rolls when using lava-based weapons. Additionally, any fire damage dealt by these attacks is increased by 1d6."
      }
    ],
    "levelRequirementReason": "Requires level 5 to wield this powerful and dangerous tool.",
    "vendorReason": "Valley Bowser has access to the volcanic forges where the Ash Burner is crafted, making it their exclusive vendor.",
    "shippingDetail": "The Pipe Express ensures safe delivery through lava tunnels, but shipments are delayed by one day due to volcanic activity.",
    "usage": {
      "activation": "Object interaction or bonus action",
      "duration": "Instantaneous effect when used",
      "endsWhen": "Charges are exhausted after three uses",
      "charges": "3 charges"
    },
    "priceReason": "The Ash Burner’s rare materials and Bowser’s fiery essence make it a valuable tool for engineers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T19:23:49.081398+00:00",
    "aiReviewedAt": "2026-07-23T19:23:49.081398+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_ash_rider_helmet": {
    "id": "valley_bowser_ash_rider_helmet",
    "name": "Ash Rider Helmet",
    "description": "Worn by volcanic warriors, this helmet channels the spirit of fallen lava knights. Grants resistance to fire and adds a chance to summon a flame-touched shield.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants 20% fire resistance",
      "10% chance to summon a flaming shield for 3 seconds",
      "Reduces cooldowns of fire-based abilities by 15%"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "valley_bowser_ash_rune_charger": {
    "id": "valley_bowser_ash_rune_charger",
    "name": "Ash Rune Charger",
    "description": "The Ash Rune Charger is a volcanic crystal imbued with Bowser’s fiery wrath, forged in the heart of Mount Bowser's lava fields. This relic charges your weapon with explosive magma energy, igniting every strike with searing heat that can ignite and devastate enemies in lava terrain. When activated, it releases an inferno that lingers for 10 seconds, dealing scorching fire damage to all foes within a 20-foot radius.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Magma Ignition",
      "Lava Terrain Amplification"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Magma Ignition",
        "rules": "Activates on your weapon attack. Deals an additional 3d6 fire damage to the target and sets it ablaze, dealing 1d6 fire damage at the start of each of its turns for 2 minutes."
      },
      {
        "title": "Lava Terrain Amplification",
        "rules": "When near lava terrain, your attacks gain +50% attack power. If you hit an enemy in a lava terrain, they take an extra 1d8 fire damage at the start of their next turn."
      }
    ],
    "levelRequirementReason": "Requires proficiency with melee weapons to channel Bowser's fiery wrath effectively.",
    "vendorReason": "Valley Bowser, a blacksmith known for crafting items from volcanic materials, has mastered the art of infusing weapons and armor with Bowser’s rage.",
    "shippingDetail": "Delivered via a Rakasha spirit courier who ensures safe delivery through the treacherous lava fields of Bowser's domain.",
    "usage": {
      "activation": "On your action when attacking with a weapon near lava terrain.",
      "duration": "10 seconds, until expended",
      "endsWhen": "The target is killed or you attack again without recharging it.",
      "charges": "Recharges after a short rest."
    },
    "priceReason": "Balanced at 1000 XP to reflect its volcanic origin, unique forging process, and the risk involved in obtaining such materials from Mount Bowser's heart.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T19:24:26.130808+00:00",
    "aiReviewedAt": "2026-07-23T19:24:26.130808+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_ash_scarf": {
    "id": "valley_bowser_ash_scarf",
    "name": "Ash Scarf of the Burning Throne",
    "description": "Crafted from the very molten remnants of Bowser's volcanic siege on the Burning Throne, this scarf is a testament to resilience and fiery power. Woven from lava itself, it absorbs heat and grants temporary fire resistance, allowing you to walk through scorching landscapes unscathed. Near lava pools or in areas of intense heat, your attacks are bolstered by an infernal fury, dealing bonus damage to foes caught within the flames.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs 20% of incoming fire damage",
      "Increases fire-based attack damage by 15%"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fire Absorption",
        "rules": "While wearing this scarf, you gain a +5 AC bonus to all saving throws against fire-based attacks and effects. This effect lasts until the start of your next turn."
      },
      {
        "title": "Infernal Fury",
        "rules": "When you deal fire damage to an enemy within 30 feet of a source of fire, you increase the amount of damage by 15%. This effect lasts for one minute and can be triggered once per short or long rest."
      }
    ],
    "levelRequirementReason": "The scarf's power is accessible to all adventurers who wish to harness its fiery might.",
    "vendorReason": "Valley Bowser, an expert in volcanic artifacts, sources and sells items forged from the heart of lava itself.",
    "shippingDetail": "The scarf is shipped via a Rakasha spirit who can traverse the fiery pathways with ease, ensuring safe delivery even through extreme heat.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Lasts until the start of your next turn or ends when you remove it.",
      "endsWhen": "The scarf's effects end when you take damage from a non-fire source, are removed, or when its charges run out (if applicable).",
      "charges": "Unlimited uses"
    },
    "priceReason": "The scarf is priced at 1000 XP to reflect the unique and powerful properties derived from volcanic remnants.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T19:24:17.888392+00:00",
    "aiReviewedAt": "2026-07-23T19:24:17.888392+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_ash_soul": {
    "id": "valley_bowser_ash_soul",
    "name": "Ash Soul Pendant",
    "description": "The Ash Soul Pendant is a cursed relic forged from Bowser's volcanic wrath, encased in obsidian and imbued with the spirit of a fallen volcano. It amplifies resilience against lava damage and grants its wearer an enduring connection to the fiery heart of the land. While active, it not only reduces fire and lava damage by 25% but also regenerates health at a steady rate, ensuring the bearer remains untouchable in volcanic battles.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reduces Fire Damage",
      "Health Regeneration"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Reduced Fire Damage",
        "rules": "While active, reduces damage taken from fire and lava by 25%. This effect persists for the duration of one long rest. The wearer must make a DC 14 Constitution saving throw each time they take fire or lava damage; failure results in the pendant's activation being interrupted."
      },
      {
        "title": "Health Regeneration",
        "rules": "Grants +5% HP regeneration per second while active. This effect ends when the wearer takes any non-magical physical damage, ends their turn without taking actions or reactions, or falls unconscious. The pendant regenerates 25 hit points at the start of each short rest."
      }
    ],
    "levelRequirementReason": "The Ash Soul Pendant's power demands a level 6 character to wield it effectively, ensuring its effects are balanced for advanced adventurers.",
    "vendorReason": "Valley Bowser, the keeper of volcanic treasures, offers this relic as a nod to ancient lava spirits and their enduring legacy.",
    "shippingDetail": "The pendant is carefully packed in a heat-resistant container and dispatched within one week from the time of purchase.",
    "usage": {
      "activation": "Activates automatically when worn, but can be deactivated by making a DC 14 Wisdom (Insight) check. The wearer must succeed on this check at least once per long rest to maintain the pendant's active state.",
      "duration": "Active until deactivation or end of one long rest",
      "endsWhen": "Automatic activation upon taking fire/lava damage, end of turn without actions/reactions, or falling unconscious",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Ash Soul Pendant's rarity and unique properties justify its price, offering a significant boon to adventurers facing volcanic hazards.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-23T19:24:50.033697+00:00",
    "aiReviewedAt": "2026-07-23T19:24:50.033697+00:00",
    "aiReviewVersion": 1
  }
};
