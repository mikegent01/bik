// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_043 = {
  "teyvat_ghostly_bargain": {
    "id": "teyvat_ghostly_bargain",
    "name": "The Koopa Bank Heist Scroll",
    "description": "The Koopa Bank Heist Scroll is a parchment of ancient design, crafted by Mages Guild Portal to siphon wealth from the treacherous Koopa Kingdoms. When activated, it instantaneously transfers 5000 coins directly into your account, but at a cost: there's a 20% chance you'll experience a brief mental glitch where you see yourself in the bustling streets of Koopatris. This scroll is crafted with a rare contract that binds your soul to the scroll, and it can only be used by those who have already faced the Mages Guild Portal's trials.",
    "price": 1000,
    "icon": "💰",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Instant Coin Transfer",
      "Vision Glitch"
    ],
    "vendor": "teyvat",
    "shippedBy": "Mages Guild Portal",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Instant Coin Transfer",
        "rules": "When activated as a bonus action, this scroll transfers 5000 coins directly into your account. The effect is instantaneous and requires no material components or verbal components. This use does not expend charges but is limited to once per long rest."
      },
      {
        "title": "Vision Glitch",
        "rules": "There's a 20% chance that activating this scroll will cause you to see yourself in the bustling streets of Koopatris for 1 minute. This effect can be ended early with a successful Wisdom saving throw (DC 14). You regain use of this ability after completing a long rest."
      }
    ],
    "levelRequirementReason": "This scroll requires a certain level to ensure the user understands the risks and benefits involved.",
    "vendorReason": "Teyvat is known for its intricate trade agreements with the Koopa Kingdoms, making it a fitting vendor for such an item.",
    "shippingDetail": "Ships directly from Mages Guild Portal, ensuring secure delivery of this arcane artifact.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous (Vision Glitch: 1 minute)",
      "endsWhen": "Ends early with a successful Wisdom saving throw or after completing a long rest.",
      "charges": "Unlimited, but limited to once per long rest."
    },
    "priceReason": "The scroll's price is adjusted to reflect its unique effects and the risk involved in using it.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T18:59:38.183806+00:00",
    "aiReviewedAt": "2026-07-23T18:59:38.183806+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_grimdusk_ratskin_cowl": {
    "id": "teyvat_grimdusk_ratskin_cowl",
    "name": "Grimdusk Ratskin Cowl",
    "description": "Woven from the tattered hides of rats that feasted on the blood of fallen archons, this cowl hums with the ancient magic of Gavirith. Crafted by Hammer Bros Handling, it whispers tales of forgotten battles and cursed rituals. When worn, it grants temporary invisibility in dim light for 10 seconds and bestows a +2 bonus to Stealth checks in dark or confined areas, but also amplifies the wearer's fear response by 30% during combat.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐭",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Temporary Invisibility",
      "Enhanced Stealth"
    ],
    "vendor": "teyvat",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "Activates as a bonus action. The wearer becomes invisible for 10 seconds in dim light. This effect ends if the wearer attacks or casts a spell, or if they move more than 5 feet."
      },
      {
        "title": "Stealth Bonus",
        "rules": "Passive +2 to Stealth checks in dark or confined areas. This benefit is permanent as long as the cowl remains on the wearer's head."
      }
    ],
    "levelRequirementReason": "Suitable for beginners, this cowl provides a useful stealth advantage.",
    "vendorReason": "Teyvat is known for its diverse and unique magical items, including those with ancient origins like the Grimdusk Ratskin Cowl.",
    "shippingDetail": "Quickly delivered by Hammer Bros Handling, this cowl arrives in pristine condition ready for use.",
    "usage": {
      "activation": "Bonus action to activate invisibility. Passive +2 Stealth bonus while worn.",
      "duration": "10 seconds of invisibility in dim light; ends if the wearer attacks or moves more than 5 feet.",
      "endsWhen": "The effect ends when the wearer attacks, casts a spell, moves over 5 feet, or removes the cowl.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its unique crafting and magical properties.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T18:59:00.964188+00:00",
    "aiReviewedAt": "2026-07-23T18:59:00.964188+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_gunpowder_halo": {
    "id": "teyvat_gunpowder_halo",
    "name": "Gunpowder Halo",
    "description": "The Gunpowder Halo is a modified halo crafted from ancient, gunpowder-laden metal. It channels elemental energy into gunfire, capable of unleashing a burst of explosive projectiles upon activation. This relic grants +50% damage against foes with elemental resistances and comes with the caveat that it requires a vision holder to function correctly within Kivotos Academy's active halo zones. Only Dry Bones Dead Drop can craft such a device, making it both rare and valuable.",
    "price": 1000,
    "icon": "🎯",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Elemental Burst",
      "Enhanced Damage Against Resistances"
    ],
    "vendor": "teyvat",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elemental Burst",
        "rules": "When activated as an action within Kivotos Academy's halo zones, the Gunpowder Halo releases a burst of explosive projectiles. This effect has a range of 30 feet and deals fire damage equal to your level + 2d8. Creatures in the area must make a Dexterity saving throw (DC = 15) or be knocked prone."
      },
      {
        "title": "Enhanced Damage Against Resistances",
        "rules": "While within Kivotos Academy's halo zones, this item grants you advantage on attack rolls against creatures with fire resistance. The bonus is +50% damage against such targets."
      }
    ],
    "levelRequirementReason": "Even beginners can wield the Gunpowder Halo responsibly within Kivotos Academy’s controlled environment.",
    "vendorReason": "Teyvat is renowned for its academic excellence and the Gunpowder Halo's unique origins align with their research in elemental studies.",
    "shippingDetail": "Ships via special courier, ensuring safe delivery within a day of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous burst effect; ends when the activation ends",
      "endsWhen": "Exhausted after one use per short rest",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafting this item requires rare materials and expertise, making it a valuable addition to any adventurer's arsenal.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-23T18:59:14.021478+00:00",
    "aiReviewedAt": "2026-07-23T18:59:14.021478+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_inkstorm_cloak": {
    "id": "teyvat_inkstorm_cloak",
    "name": "Inkstorm Cloak",
    "description": "The Inkstorm Cloak is a fluid garment that shifts hue with the flow of ink. Crafted by Bullet Bill Express, this cloak not only enhances your presence in ink-based environments but also provides an ever-changing canvas for your movements. It reduces elemental reaction cooldown by 20%, making you more versatile on the battlefield, and increases evasion chance by 15% within ink pools, ensuring you always have a way out.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌈",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Ink Absorption",
      "Enhanced Evasion"
    ],
    "vendor": "teyvat",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Ink Absorption",
        "rules": "When in contact with ink-based damage (melee or ranged), the cloak absorbs one point of damage and converts it to temporary hit points equal to half the absorbed amount. This effect can be used once per short rest."
      },
      {
        "title": "Enhanced Evasion",
        "rules": "While within an ink pool, you gain a +2 bonus to Dexterity saving throws and have advantage on Dexterity (Stealth) checks. This effect lasts for 1 minute or until you leave the ink pool."
      }
    ],
    "levelRequirementReason": "Requires level 6 to ensure players can maximize its battlefield utility.",
    "vendorReason": "Teyvat, being a hub for fashion and combat innovation, is the ideal vendor for this versatile item.",
    "shippingDetail": "Delivered within 3 days via Bullet Bill Express's high-speed ink courier service.",
    "usage": {
      "activation": "Passive effect when in contact with ink.",
      "duration": "Instantaneous for Ink Absorption; lasts 1 minute for Enhanced Evasion.",
      "endsWhen": "Leaves an ink pool or completes a short rest after absorbing damage, respectively.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect its utility and versatility in combat scenarios.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T18:58:57.597605+00:00",
    "aiReviewedAt": "2026-07-23T18:58:57.597605+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_inkwell_glove": {
    "id": "teyvat_inkwell_glove",
    "name": "Inkwell Glove",
    "description": "The Inkwell Glove is a pair of meticulously crafted gloves, their leather embossed with swirling ink patterns that seem to pulse with life. Infused with the essence of Inkopolis ink, these gloves are not merely functional; they are works of art in motion. When you strike an enemy, the gloves unleash a burst of ink, dealing 2d4 ink damage and temporarily obscuring their vision, making you a master of ink warfare on any battlefield.",
    "category": "equipment",
    "price": 1000,
    "icon": "🖋",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Ink Burst Strike",
      "Enhanced Ink Absorption"
    ],
    "vendor": "teyvat",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ink Burst Strike",
        "rules": "When you strike an enemy with a weapon attack, the Inkwell Glove releases a concentrated burst of ink. This attack deals 2d4 ink damage and causes the target to have disadvantage on their next attack roll or saving throw, ending if they succeed at a DC 13 Wisdom saving throw."
      },
      {
        "title": "Enhanced Ink Absorption",
        "rules": "The gloves absorb ink from the environment, reducing your ink absorption rate by 50% for 24 hours. This effect can only be used once per long rest and requires a successful DC 13 Dexterity check."
      }
    ],
    "levelRequirementReason": "The Inkwell Glove is designed with basic ink manipulation techniques in mind, making it suitable for players at level 1.",
    "vendorReason": "Teyvat's vast network of artisans and the local ink culture make them a fitting vendor for this masterfully crafted accessory.",
    "shippingDetail": "Ships within one week, delivered in a custom box that preserves the gloves' integrity during transit.",
    "usage": {
      "activation": "Instantaneous upon striking an enemy with a weapon attack.",
      "duration": "The ink effect lasts until the start of your next turn. The absorption effect is temporary and only active for 24 hours after use.",
      "endsWhen": "The ink effect ends if you succeed at a saving throw, otherwise it fades when you take damage or end your turn without using it.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "Balanced as the Inkwell Glove offers both immediate combat advantage and long-term utility in ink manipulation, justifying its price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T18:59:28.559795+00:00",
    "aiReviewedAt": "2026-07-23T18:59:28.559795+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_name_here": {
    "id": "teyvat_item_name_here",
    "name": "Archon Sight Lens",
    "description": "The Archon Sight Lens, a small, glowing ocular device crafted from the polished obsidian of Liyue's highest peaks and imbued with the essence of the Mona, grants its wearer the ability to perceive hidden elemental patterns and pathways in Teyvat. This lens is a product of the Void Drifters' alchemy, unlocking a skill tree that enhances one’s understanding of the region’s myriad elemental interactions. After three uses, the lens distorts vision, requiring a DC 15 Wisdom saving throw or causing temporary blindness for an hour.",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Reveals Elemental Patterns",
      "Enhances Perception"
    ],
    "vendor": "teyvat",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Elemental Patterns",
        "rules": "The wearer can activate the lens as a bonus action to reveal elemental patterns and reactions in their immediate area. This effect lasts for 1 minute, with no range limit. Those within 30 feet of the user must make a DC 15 Wisdom saving throw or be temporarily blinded for 1d4 rounds."
      },
      {
        "title": "Enhances Perception",
        "rules": "The wearer gains advantage on Intelligence (Investigation) checks made to discern hidden information. This effect is active as long as the lens remains in use, with no set duration limit."
      }
    ],
    "levelRequirementReason": "The Archon Sight Lens requires at least level 1 to activate due to its complexity and the advanced alchemy needed for its construction.",
    "vendorReason": "Teyvat, being a hub of elemental studies and ancient artifacts, is an appropriate vendor as it houses the expertise required to handle such items.",
    "shippingDetail": "The lens is carefully packed in protective obsidian cases to prevent damage during transit. Delivery time varies depending on the courier's schedule.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute (recharges after a short or long rest)",
      "endsWhen": "Ends if the user is blinded, recharges after a short or long rest",
      "charges": "Unlimited; recharges with rest"
    },
    "priceReason": "The Archon Sight Lens is priced at 1000 XP due to its unique construction and the advanced alchemy required for its creation.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-23T18:59:43.538981+00:00",
    "aiReviewedAt": "2026-07-23T18:59:43.538981+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_metal_soul_belt": {
    "id": "teyvat_metal_soul_belt",
    "name": "Metal Soul Belt",
    "description": "The Metal Soul Belt channels the raw essence of ancient, forgotten metals. Crafted by the Iron Legion from fragments of a lost forge, this belt grants its wearer the ability to channel metallic power into their attacks, dealing bonus damage and unlocking hidden gacha triggers. The belt's very presence can reduce elemental reaction cooldowns, making it an indispensable companion for any adventurer seeking to harness the might of metal.",
    "price": 1000,
    "icon": "⚙",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Metallic Surge",
      "Hidden Gacha Activation"
    ],
    "vendor": "teyvat",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Metallic Surge",
        "rules": "When you attack with a weapon made primarily of metal, you deal an additional 1d4 damage. This effect can be used once per short or long rest."
      },
      {
        "title": "Hidden Gacha Activation",
        "rules": "Once per battle, the belt can activate a hidden gacha event that grants temporary metallic resonance, providing a +2 bonus to all saving throws against metal-based effects for 1 minute. This effect has no save DC and cannot be used more than once per long rest."
      }
    ],
    "levelRequirementReason": "The Metal Soul Belt requires a minimum level of 7 to ensure that the wearer can effectively utilize its unique properties in combat.",
    "vendorReason": "Teyvat, known for its diverse array of rare and exotic items, naturally stocks this piece of gear crafted by the Iron Legion.",
    "shippingDetail": "The Metal Soul Belt is carefully packed to prevent any damage during shipment. Delivery times may vary due to the fragility of the item.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "Until the end of your next turn for Metallic Surge; lasts 1 minute for Hidden Gacha Activation",
      "endsWhen": "The effects are expended or interrupted by an attack, spell, or other event that ends your concentration on the effect.",
      "charges": "Unlimited per long rest"
    },
    "priceReason": "The Metal Soul Belt is priced at 1000 XP due to its unique crafting process and the rare materials used in its construction.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T19:00:24.225025+00:00",
    "aiReviewedAt": "2026-07-23T19:00:24.225025+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_mushroom_crown": {
    "id": "teyvat_mushroom_crown",
    "name": "Fungi Crown of the Whispering Fungal",
    "description": "The Fungi Crown of the Whispering Fungal is a regal yet ethereal headpiece crafted from shimmering mycelium and adorned with iridescent fungi. It whispers secrets of ancient fungal civilizations to its wearer, granting +2 to all Fungi-related skill checks. Upon donning this crown, nearby enemies with mushroom-themed traits are struck by a wave of confusion, forcing them to make a DC 14 Wisdom saving throw or be dazed for up to 1 minute. The crown’s effects fade after 30 minutes of non-use.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Fungi Whisper",
      "Mushroom Confusion"
    ],
    "vendor": "teyvat",
    "shippedBy": "Mages Guild Portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fungi Whisper",
        "rules": "While wearing the Fungi Crown, you gain a +2 bonus to any skill check related to fungi. This effect is passive and does not require an action."
      },
      {
        "title": "Mushroom Confusion",
        "rules": "When worn in a battle, enemies with mushroom-themed traits within 30 feet must make a DC 14 Wisdom saving throw or be dazed for up to 1 minute. The effect ends if the enemy successfully saves."
      }
    ],
    "levelRequirementReason": "The Fungi Crown is accessible to adventurers of all levels, as it aids in understanding and manipulating fungal environments.",
    "vendorReason": "Teyvat, the Mages Guild’s outpost, specializes in items related to natural elements like fungi and plants.",
    "shippingDetail": "Shipped via enchanted mycelium runners for swift delivery, ensuring the crown arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "30 minutes of non-use or until removed by the wearer.",
      "endsWhen": "The effects end if the wearer removes it or after 30 minutes without use.",
      "charges": "Unlimited, as this is a passive effect."
    },
    "priceReason": "Crafted from rare mycelium and enchanted by Mages Guild Portal, the Fungi Crown offers both strategic advantage and narrative depth at a fair price of 1000 XP.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T18:59:43.742458+00:00",
    "aiReviewedAt": "2026-07-23T18:59:43.742458+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_sacred_temple_key": {
    "id": "teyvat_sacred_temple_key",
    "name": "Sacred Temple Key",
    "description": "The Sacred Temple Key is crafted from the sacred heartwood of the First Temple in Hyrule. With each insertion into a hidden lock, it opens pathways to ancient sanctuaries where time itself seems to pause. Upon activation, it grants wielders fleeting resistance to elemental damage and randomly reveals secret chambers within the temple. However, its power comes at a cost—the key’s own timeline may unravel with each use.",
    "price": 1000,
    "icon": "🏯",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Opens one ancient temple door",
      "Grants +5% resistance to all elemental damage"
    ],
    "vendor": "teyvat",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "When used, this key creates a 10-second temporal distortion within the immediate area. The duration ends when the key is removed from the lock or if another creature enters the area."
      },
      {
        "title": "Hidden Chamber Revelation",
        "rules": "At activation, this key reveals one hidden chamber within the temple. This effect has a 50% chance of success and cannot be used more than once per day."
      }
    ],
    "levelRequirementReason": "This key is crafted for adventurers seeking ancient treasures but requires no high-level magic to use.",
    "vendorReason": "Teyvat specializes in exotic and arcane items from various realms, including those with sacred ties.",
    "shippingDetail": "The key is shipped via Warp Whistle Transit, ensuring it arrives safely without temporal disturbances.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "When removed from the lock or another creature enters the area",
      "charges": "Unlimited"
    },
    "priceReason": "The key's rarity, mystical origin, and unique effects justify a price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T18:59:53.319027+00:00",
    "aiReviewedAt": "2026-07-23T18:59:53.319027+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_sacred_triforce_heartstone": {
    "id": "teyvat_sacred_triforce_heartstone",
    "name": "Triforce Heartstone",
    "description": "The Triforce Heartstone is a crystalline core forged from the blood of the First Guardian and the tears of the Triforce’s awakening. Buried beneath the Temple of the Lost Balance, it radiates an ancient power that can manifest as a sacred aura, deflecting both physical and magical attacks with divine precision. However, prolonged use risks the wielder becoming a vessel for the Triforce's dormant will, leading to temporary confusion or memory loss.",
    "price": 1000,
    "icon": "⚔",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Sacred Aura",
      "Healing on Miss"
    ],
    "vendor": "teyvat",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Sacred Aura",
        "rules": "Activates as a bonus action. The wielder gains a +10 AC bonus and immunity to all physical and magical attacks for 1 minute. Ends if the wielder takes an attack action or drops to 0 hit points."
      },
      {
        "title": "Healing on Miss",
        "rules": "Passive effect: If the wielder misses with a melee attack, they have a 25% chance to recover 1d4+2 Hit Points. This effect has no cooldown and can occur once per long rest."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level for proficient use of the artifact’s divine power.",
    "vendorReason": "Teyvat, as a nexus of Hyrulean artifacts, regularly imports this sacred relic for its patrons.",
    "shippingDetail": "Ships within 7 days via standard air mail service.",
    "usage": {
      "activation": "Bonus action to activate the Sacred Aura.",
      "duration": "1 minute, or ends if the wielder attacks or drops to 0 HP.",
      "endsWhen": "The aura fades if the wielder attacks or drops to 0 HP.",
      "charges": "Unlimited use, as long as the user can take bonus actions."
    },
    "priceReason": "Balanced price reflects the artifact’s divine power and risks of prolonged use.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T18:59:59.981452+00:00",
    "aiReviewedAt": "2026-07-23T18:59:59.981452+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_seal_fragment_7": {
    "id": "teyvat_seal_fragment_7",
    "name": "Seal Fragment Seven",
    "description": "Seal Fragment Seven is a shimmering crystal shard, etched with ancient runes that glow faintly in the dark. Crafted from the primordial wyrm's seal, it hums with latent power, resonating with elemental forces beyond comprehension. This fragment can restore one seal point when used within a ritual but, should it be wielded outside such sacred ceremonies, it unleashes a pulse of raw elemental energy, striking foes with 1d4 damage from the element of its origin.",
    "price": 1000,
    "icon": "🧩",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Restores Seal Point in Ritual",
      "Elemental Damage Outside Ritual"
    ],
    "vendor": "teyvat",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Restores Seal Point in Ritual",
        "rules": "Activate as a bonus action during a ritual. The fragment restores one seal point to the user if used correctly within the confines of a valid ritual."
      },
      {
        "title": "Elemental Damage Outside Ritual",
        "rules": "Activate on command outside of rituals, dealing 1d4 damage from the element it embodies (chosen at time of crafting) to all enemies in a 5-foot radius. The effect lasts until expended and can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "Requires level 7 due to its potent elemental power and the complexity of the ritual it supports.",
    "vendorReason": "Teyvat, as a hub for mystical artifacts, regularly stocks this fragment crafted by Team Rocket.",
    "shippingDetail": "Ships via Dry Bones Dead Drop, known for its unreliable but fast courier service. Fragments are sent in specially reinforced containers to prevent accidental activation during transit.",
    "usage": {
      "activation": "Bonus action or command word outside ritual; requires vision holder",
      "duration": "Instantaneous when used; lasts until expended",
      "endsWhen": "Exhausted after one use per long rest, destroyed upon successful save against DC 15 Con saving throw",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP as it requires a significant level and offers potent but limited utility.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T19:00:13.781931+00:00",
    "aiReviewedAt": "2026-07-23T19:00:13.781931+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_soulbound_satchel": {
    "id": "teyvat_soulbound_satchel",
    "name": "Soulbound Satchel",
    "description": "The Soulbound Satchel is a leather-bound pouch adorned with ancient symbols that hold the echoes of forgotten souls. It can store up to three soul fragments, each fragment glowing faintly and imbued with an elemental aura. This satchel enhances spellcasting, granting increased speed when carried and providing elemental resistance bonuses. When opened during a Vision Holder event, it triggers a random elemental reaction, unleashing a brief burst of raw power.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧭",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Elemental Echoes",
      "Swift Casting"
    ],
    "vendor": "teyvat",
    "shippedBy": "Swift Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elemental Echoes",
        "rules": "When three soul fragments are stored in the satchel during a Vision Holder event, it triggers a random elemental reaction. The reaction lasts for 1 minute and deals fire, water, lightning, or wind damage equal to 2d6 + your proficiency bonus. Requires an action to open."
      },
      {
        "title": "Swift Casting",
        "rules": "+10% spellcasting speed while carrying the satchel (passive). The effects of this item are exhausted after 8 hours of inactivity or upon opening it during a Vision Holder event."
      }
    ],
    "levelRequirementReason": "This level requirement reflects its moderate power and utility, suitable for beginners to safely use its features.",
    "vendorReason": "Teyvat's extensive trade network allows them to source unique items like the Soulbound Satchel from various regions.",
    "shippingDetail": "Ships within 3 days, delivered by trusted Swift Courier services.",
    "usage": {
      "activation": "Opening during a Vision Holder event",
      "duration": "1 minute for elemental reaction; passive while carrying",
      "endsWhen": "8 hours of inactivity or opening during a Vision Holder event",
      "charges": "Unlimited, but effects are exhausted as described"
    },
    "priceReason": "The price is adjusted to reflect the item's moderate power and utility without being overpriced for its rarity.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T19:00:07.486836+00:00",
    "aiReviewedAt": "2026-07-23T19:00:07.486836+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_teyvat_echo_chime": {
    "id": "teyvat_teyvat_echo_chime",
    "name": "Teyvat Echo Chime",
    "description": "The Teyvat Echo Chime is a delicate yet formidable artifact crafted from the fractured resonance of Archon’s wrath. This chime amplifies elemental reactions with its resonant sound, turning the air into a vibrant canvas of elemental power. Struck by a skilled hand, it releases a wave that enhances elemental effects, but the wielder must endure the emotional echo—either shouting louder or becoming momentarily silent, as if their soul echoes the world’s forgotten gods.",
    "price": 1000,
    "icon": "🎵",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Amplifies elemental reactions",
      "Mimics emotional state"
    ],
    "vendor": "teyvat",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elemental Amplification",
        "rules": "When activated by a bonus action, this chime amplifies elemental reaction damage by 20% for the next 30 seconds. Targets within 15 feet are affected. The effect ends if used in combat without a Vision Holder or if the wielder’s emotional state changes."
      },
      {
        "title": "Emotional Echo",
        "rules": "The chime temporarily mimics the wielder's emotional state, causing them to either shout louder for 10 seconds with disadvantage on all attacks and saves (save DC 12) or fall silent for 5 seconds. This effect occurs as a reaction when struck."
      }
    ],
    "levelRequirementReason": "This chime is accessible to beginners, yet powerful enough to be useful in various combat scenarios.",
    "vendorReason": "Teyvat's local artisans and elemental scholars are known for creating tools that blend utility with lore.",
    "shippingDetail": "The chime is carefully packed to protect its resonance, ensuring it arrives in perfect condition.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "30 seconds or until used in combat without a Vision Holder",
      "endsWhen": "Wielder's emotional state changes or used in combat without a Vision Holder",
      "charges": "Unlimited"
    },
    "priceReason": "This chime offers significant utility and is priced to reflect its balance between elemental amplification and emotional mimicry.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T19:00:15.485886+00:00",
    "aiReviewedAt": "2026-07-23T19:00:15.485886+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_turbo_squid_torch": {
    "id": "teyvat_turbo_squid_torch",
    "name": "Turbo Squid Torch",
    "description": "The Turbo Squid Torch hums with inkopolis' vibrant ink energy, its body a swirling mass of bioluminescent ink. This torch not only illuminates but also amplifies the battlefield for ink-based fighters, granting them temporary absorption and allowing them to ignite ink-saturated areas around them. Use it during an ink warfare event to unleash a torrent of ink onto your foes, or face the splatter that may rain down on your allies in return.",
    "price": 1000,
    "icon": "🔥",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Enhances ink-based abilities",
      "Ignites ink-rich terrain"
    ],
    "vendor": "teyvat",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Absorb Ink",
        "rules": "Grants temporary ink absorption for 1 minute. Requires a bonus action to activate. Ends immediately if the wielder takes any damage."
      },
      {
        "title": "Ink Ignition",
        "rules": "Can ignite ink-rich terrain within 30 feet, causing it to erupt into ink for 30 seconds. This effect requires an action and ends when the torch is destroyed or extinguished."
      }
    ],
    "levelRequirementReason": "Requires a basic understanding of ink manipulation techniques.",
    "vendorReason": "Teyvat's vendors stock it for their patrons who need to dazzle and dominate during fashion shows.",
    "shippingDetail": "Ships via express courier, arriving the next day during ink warfare events.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute or until destroyed/extinguished",
      "endsWhen": "Destroyed, extinguished, or the wielder takes damage",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, considering its ink manipulation capabilities and thematic design.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T19:00:33.400059+00:00",
    "aiReviewedAt": "2026-07-23T19:00:33.400059+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_void_touched_satchel": {
    "id": "teyvat_void_touched_satchel",
    "name": "Void Touched Satchel",
    "description": "The Void Touched Satchel, crafted from ancient void-touched leather and adorned with runes that shimmer like starlight, is a vessel of elemental power. It can store three elemental reactions, each imbuing it with fleeting bursts of raw energy. When brought near a dimensional rift, there's a 10% chance for the satchel to summon a minor void echo—a wisp of dark matter that flickers and vanishes in moments. Each reaction use slightly wears down its durability, but those who enchant it with a Vision Holder’s sigil can extract an additional 50% more elemental reactions from it.",
    "price": 1000,
    "icon": "🌀",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Elemental Reaction Storage",
      "Void Echo Summoning"
    ],
    "vendor": "teyvat",
    "shippedBy": "Goomba Ground Delivery",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Elemental Reaction Storage",
        "rules": "The user may store up to three elemental reactions within the satchel. These reactions can be used by the wielder in combat or for other purposes, but each use reduces the satchel’s durability by 10%. The satchel regenerates its durability at a rate of +5% per long rest."
      },
      {
        "title": "Void Echo Summoning",
        "rules": "When used near a dimensional rift, there is a 10% chance that the Void Touched Satchel will summon a minor void echo. The echo appears as a small, dark wisp of matter and disappears after 3 rounds or if it takes damage."
      }
    ],
    "levelRequirementReason": "Requires at least second-level proficiency to handle the satchel’s reactive power effectively.",
    "vendorReason": "Teyvat, a master of elemental manipulation, is known for crafting items that amplify one's abilities in the world of Teyvan magic.",
    "shippingDetail": "Ships via Goomba Ground Delivery, which ensures safe arrival within three days.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous",
      "endsWhen": "The satchel is destroyed or its durability reaches zero.",
      "charges": "Unlimited, but each reaction use reduces durability by 10%"
    },
    "priceReason": "Balanced at 1000 XP as it offers a unique mix of elemental storage and minor summoning capabilities.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T19:00:42.938370+00:00",
    "aiReviewedAt": "2026-07-23T19:00:42.938370+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_wario_trophy": {
    "id": "teyvat_wario_trophy",
    "name": "Wario Trophy",
    "description": "The Wario Trophy is a trophy forged from the soul of a defeated archon. Its surface gleams with an eerie green light, and the signature 'W' etched into it by Wario himself adds to its malevolent charisma. When wielded, it drains 1000 HP but grants the user a 2d6 bonus to damage for 3 rounds against enemies with elemental affinity. The trophy's power is concentrated in its core, which causes temporary paralysis when struck.",
    "price": 1000,
    "icon": "🏆",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Paralyze with Parry",
      "Devastating Damage Boost"
    ],
    "vendor": "teyvat",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Paralyze with Parry",
        "rules": "When the user attacks an enemy within 5 feet that has elemental affinity, they can make a melee attack as a bonus action. On a hit, the target is paralyzed for 1 round (DC 17 Wisdom saving throw to resist). The effect ends if the target takes damage from any source."
      },
      {
        "title": "Devastating Damage Boost",
        "rules": "The user gains a +2d6 bonus to all weapon attack rolls and damage during their next turn. This effect lasts for 3 rounds, after which it dissipates without further use. The user must have at least 1 hit point remaining to activate the effect."
      }
    ],
    "levelRequirementReason": "This trophy's power requires a seasoned adventurer with at least 5 levels of experience.",
    "vendorReason": "Teyvat is known for its unique and powerful artifacts, and the Wario Trophy is no exception to their offerings.",
    "shippingDetail": "The trophy must be delivered in a reinforced, sealed container to prevent premature activation during transit.",
    "usage": {
      "activation": "Bonus Action (melee attack)",
      "duration": "Until the start of your next turn or until you take damage",
      "endsWhen": "You take damage from any source",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "The price reflects the trophy's legendary rarity and the unique abilities it grants, balanced to ensure it remains challenging yet fair.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T19:00:30.438898+00:00",
    "aiReviewedAt": "2026-07-23T19:00:30.438898+00:00",
    "aiReviewVersion": 1
  },
  "the_dk_crew_banana_bread_recipe": {
    "id": "the_dk_crew_banana_bread_recipe",
    "name": "Recipe: The DK Crew Banana Bread ",
    "description": "The DK Crew Banana Bread, a moist confection crafted from jungle bananas, provides a unique treat for those with nimble hands and an affinity for climbing. This delightful bread not only enhances your agility but also serves as a playful warning to those who dare handle the slippery peels, which act as bonus traps. The DK Jungle Chefs are known for their unconventional methods, blending fun and functionality in every dish they create.",
    "price": 1000,
    "icon": "🍌",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Mash and Bake (40 min)",
      "Slippery Peels as Bonus Traps"
    ],
    "vendor": "the_dk_crew_treehouse",
    "shippedBy": "Peel Pulp Page",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mash and Bake",
        "rules": "Eating this banana bread allows you to gain advantage on Dexterity (Acrobatics) checks for climbing, which lasts for up to 2 hours. The effect is passive while the bread remains in your possession."
      },
      {
        "title": "Slippery Peels",
        "rules": "The peels of this banana bread act as bonus traps, providing a +1 difficulty class to any Dexterity saving throw made by an opponent attempting to handle or manipulate them. This effect persists until the peels are discarded."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners who want to enhance their climbing skills with a taste of adventure.",
    "vendorReason": "As part-time chefs and full-time adventurers, the DK Crew Treehouse offers unique items that blend practicality with fun.",
    "shippingDetail": "The peels are shipped in specially designed envelopes to ensure they remain slippery until use.",
    "usage": {
      "activation": "Consume the banana bread (passive effect)",
      "duration": "Up to 2 hours while the bread is consumed",
      "endsWhen": "Bread is discarded or eaten, or after 2 hours",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the unique combination of utility and whimsy that this item offers.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T19:00:52.995828+00:00",
    "aiReviewedAt": "2026-07-23T19:00:52.995828+00:00",
    "aiReviewVersion": 1
  },
  "the_dk_crew_banana_hoard": {
    "id": "the_dk_crew_banana_hoard",
    "name": "DK Crew's Banana Hoard",
    "description": "The DK Crew's Banana Hoard is a singular, magically-preserved banana from their legendary hoard. This humble fruit, though merely a banana, carries with it an aura of ancient lore and unexpected utility. When consumed, it grants the eater 2d4 hit points and provides +5 feet of speed for one hour, making it both nourishing and swift-footed. The peel, when cast aside, becomes a trap; any creature stepping on it must succeed on a Dexterity saving throw or fall prone, adding an element of mischievous defense to this humble fruit.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍌",
    "stock": 50,
    "rarity": "uncommon",
    "effects": [
      "Banana Boost",
      "Peel Trap"
    ],
    "vendor": "The DK Crew",
    "shippedBy": "Barrel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Banana Boost",
        "rules": "When consumed as a bonus action, the eater gains 2d4 hit points and a +5 feet speed increase for one hour. This effect is limited to once per long rest."
      },
      {
        "title": "Peel Trap",
        "rules": "The peel can be thrown as an action, causing any creature that steps on it to make a Dexterity saving throw (DC 13) or fall prone. The peel trap lasts for one minute and can only be set once per short rest."
      }
    ],
    "levelRequirementReason": "The DK Crew's Banana Hoard is suitable for adventurers of all levels, but especially useful for those who need a quick boost in speed or an unexpected defensive element.",
    "vendorReason": "The DK Crew has always been known for their eccentric and practical hoards; this banana is no different.",
    "shippingDetail": "Ships via a sturdy barrel, which may add to the mystique but ensures safe delivery.",
    "usage": {
      "activation": "Eaten as a bonus action or thrown as an action (peel trap)",
      "duration": "One hour for Banana Boost; one minute for Peel Trap",
      "endsWhen": "Ends when the duration expires, consumed, or discarded",
      "charges": "Unlimited uses"
    },
    "priceReason": "The DK Crew's Banana Hoard is priced at 1000 XP due to its magical preservation and the unexpected utility it provides in combat.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T19:00:46.477824+00:00",
    "aiReviewedAt": "2026-07-23T19:00:46.477824+00:00",
    "aiReviewVersion": 1
  },
  "the_dk_crew_barrel_mixer": {
    "id": "the_dk_crew_barrel_mixer",
    "name": "The DK Crew Barrel Mixer ",
    "description": "The DK Crew Barrel Mixer, a sturdy barrel crafted from reclaimed banana crates and enchanted by the mischievous members of the DK Barrelmakers crew, rolls and blends dough like a rolling pin's dream. Its sides are scored with playful patterns that serve as both artistic flourishes and subtle grips for mashing bananas. The barrel leaks just enough banana mush to keep things interesting, making every batch a delightful experiment in doughy chaos.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍌",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Banana Mash Mastery",
      "Rolling Fun"
    ],
    "vendor": "the_dk_crew_treehouse",
    "shippedBy": "Rolling Rumple Rig",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Banana Mash Mastery",
        "rules": "When the Barrel Mixer is rolled over dough or mashed bananas, it grants advantage on checks to mix and blend ingredients. The effect lasts until the next long rest."
      },
      {
        "title": "Rolling Fun",
        "rules": "The barrel can be set in motion by any creature within 5 feet as a bonus action, causing it to roll forward 10 feet. On a successful DC 12 Dexterity saving throw, the user can control its direction for up to 30 feet."
      }
    ],
    "levelRequirementReason": "The Barrel Mixer is simple and fun, requiring no special skill or training.",
    "vendorReason": "The DK crew members are known for their love of banana bread and often share their tools with others who enjoy the same treats.",
    "shippingDetail": "Delivered by the crew's own banana-powered rolling rig, ensuring a fresh delivery straight from the barrelmakers' hands to yours.",
    "usage": {
      "activation": "Bonus action to roll; can be controlled with a successful Dexterity saving throw for up to 30 feet.",
      "duration": "Until next long rest or until destroyed by an external force.",
      "endsWhen": "Exhausted after one use, then requires 24 hours to recharge.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The Barrel Mixer is moderately priced for its fun and unique functionality, making it a worthwhile purchase for anyone who enjoys baking with a bit of chaos.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T19:01:04.950169+00:00",
    "aiReviewedAt": "2026-07-23T19:01:04.950169+00:00",
    "aiReviewVersion": 1
  },
  "the_dk_crew_barrel_roll_lesson_service": {
    "id": "the_dk_crew_barrel_roll_lesson_service",
    "name": "The DK Crew Barrel Roll Lesson ",
    "description": "The DK Crew Barrel Roll Lesson is a unique training session that hones your reflexes and agility. This lesson comes with a specially crafted banana, which heals you for 1d4 hit points when consumed during combat. The instructor's signature phrase, 'Do a barrel roll!,' adds an element of chaos to your enemies' plans by forcing them to make a Dexterity saving throw or be disoriented for the rest of the encounter.",
    "price": 1000,
    "icon": "🌀",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Banana Healer",
      "Reflexive Dodging"
    ],
    "vendor": "the_dk_crew_jungle",
    "shippedBy": "Barrel Delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Banana Healer",
        "rules": "Consume this banana during combat to heal you for 1d4 hit points. You can use this ability once per long rest."
      },
      {
        "title": "Reflexive Dodging",
        "rules": "When an enemy makes a melee attack against you, you can use your reaction to force the attacker to make a Dexterity saving throw (DC 13) or be disoriented until the start of your next turn. You can use this ability once per short rest."
      }
    ],
    "levelRequirementReason": "The DK Crew Barrel Roll Lesson is designed for players who have already gained some combat experience, requiring at least a level 5 character to fully appreciate its benefits.",
    "vendorReason": "DK Trainers are experts in jungle survival and combat techniques, making them the ideal vendors for this unique training session.",
    "shippingDetail": "The Barrel Delivery service ensures that your lesson arrives safely and on time, prepared with a fresh banana.",
    "usage": {
      "activation": "Reaction (Banana Healer), Reaction (Reflexive Dodging)",
      "duration": "Instantaneous for Banana Healer; until the start of your next turn for Reflexive Dodging",
      "endsWhen": "Charges are used up or after a short or long rest, whichever comes first.",
      "charges": "2"
    },
    "priceReason": "The DK Crew Barrel Roll Lesson is priced at 1000 XP to reflect its unique training value and the expertise of DK Trainers.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-23T19:00:58.445405+00:00",
    "aiReviewedAt": "2026-07-23T19:00:58.445405+00:00",
    "aiReviewVersion": 1
  },
  "the_dk_crew_jungle_vine_belt": {
    "id": "the_dk_crew_jungle_vine_belt",
    "name": "The DK Crew Jungle Vine Belt ",
    "description": "The DK Crew Jungle Vine Belt is a sturdy, hand-woven belt crafted from vines so tough they can barely be distinguished from steel. It grants its wearer an advantage on Athletics checks for swinging and climbing, and it comes pre-stocked with three bananas that heal minor wounds upon consumption. However, beware: the vines are notorious for snagging on rough surfaces like rocks or thick branches, making movement unpredictable but exhilarating.",
    "price": 1000,
    "icon": "👖",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Swing Advantage",
      "Banana Snack"
    ],
    "vendor": "the_dk_crew_treehouse",
    "shippedBy": "Banana Loop Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Swing Advantage",
        "rules": "When using the belt to swing from vines, the wearer gains advantage on Athletics checks. This effect lasts until the start of their next turn."
      },
      {
        "title": "Banana Snack",
        "rules": "The belt holds three bananas that provide minor healing when consumed. Each banana heals 1d4+2 hit points. The bananas are replenished after a full night's rest."
      }
    ],
    "levelRequirementReason": "This belt is designed for beginners and those who value versatility over raw power.",
    "vendorReason": "The DK Crew Treehouse specializes in gear that enhances jungle survival, making this belt a natural fit.",
    "shippingDetail": "Ships within two days via Banana Loop Express. Delivery includes a free banana as a thank you from the DK Crew.",
    "usage": {
      "activation": "Passive effect when used for swinging or climbing vines.",
      "duration": "Instantaneous once per short rest to consume bananas.",
      "endsWhen": "Restores after a full night's rest.",
      "charges": "Unlimited, but bananas replenish only at the end of a long rest."
    },
    "priceReason": "The price is balanced considering its unique utility in jungle environments and the materials used in its construction.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-23T19:01:13.010815+00:00",
    "aiReviewedAt": "2026-07-23T19:01:13.010815+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_bakery_keychain": {
    "id": "the_edge_bakery_keychain",
    "name": "Bakery Keychain",
    "description": "The Bakery Keychain, a charming croissant-shaped trinket, is a must-have for dough folk and spellcasters alike. Crafted from flaky pastry and enchanted by a master baker, it glows faintly under the moonlight, hinting at its magical origins. This keychain not only opens doors in the mystical LEclaire Isle but also grants a sweet respite during chaotic encounters, restoring hit points while causing a brief moment of confusion. Legends say that its glow intensifies when near Waluigi’s nefarious presence, warning all who dare to get too close.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍞",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Opens Doors",
      "Restores Hit Points"
    ],
    "vendor": "the_edge",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Door Opener",
        "rules": "When activated as a bonus action, this keychain opens doors in LEclaire Isle. It has no effect on other doors or locks."
      },
      {
        "title": "Hit Point Restoration & Confusion",
        "rules": "Restores 1d4 + 2 hit points when used during magical or chaotic encounters. The user becomes temporarily confused for 1 minute, requiring a DC 15 Wisdom saving throw to resist. This effect cannot be used more than once per long rest."
      }
    ],
    "levelRequirementReason": "This keychain is designed for beginners and those who need a touch of magic in their daily adventures.",
    "vendorReason": "The Edge Bakery specializes in items that blend practicality with whimsy, making this keychain an essential purchase for all its patrons.",
    "shippingDetail": "Ships within the next full moon cycle, ensuring timely delivery to adventurers across the land.",
    "usage": {
      "activation": "Bonus action to open doors or use in magical/chaotic encounters.",
      "duration": "Instantaneous for door opening; temporary confusion lasts 1 minute.",
      "endsWhen": "Once per long rest due to its limited uses.",
      "charges": "Unlimited, but only one use per long rest."
    },
    "priceReason": "The Bakery Keychain's enchantments and unique functionality justify its high price, offering both utility and a touch of magical lore in every adventure.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T19:01:23.198131+00:00",
    "aiReviewedAt": "2026-07-23T19:01:23.198131+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_doughnut_hole_key": {
    "id": "the_edge_doughnut_hole_key",
    "name": "Doughnut Hole Keychain",
    "description": "The Doughnut Hole Keychain is a relic crafted from the central void’s most dangerous anomaly. Its hollow center pulses with dark energy, and its surface is etched with arcane symbols that shimmer faintly in the light. This keychain not only grants the wielder bonuses against void entities but also has a peculiar charm that occasionally causes brief cosmic déjà vu. Crafted by Warp Whistle Transit, it's a symbol of their expertise in merging the mundane with the ethereal.",
    "price": 1000,
    "icon": "🍩",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Void Resistance",
      "Cosmic Déjà Vu"
    ],
    "vendor": "the_edge",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Void Resistance",
        "rules": "When used against void entities, this keychain grants a bonus to all rolls equal to 2d4. It also has a 10% chance per day to locate a lost soul in the Doughnut Hole. The effect is instantaneous and does not require an action."
      },
      {
        "title": "Cosmic Déjà Vu",
        "rules": "The user experiences brief, disorienting déjà vu when using it near void anomalies. This effect lasts for 1 minute and has no save DC or recharge requirement. It occurs once per day."
      }
    ],
    "levelRequirementReason": "This keychain is crafted to be accessible but still rare, suitable for adventurers of lower levels who can benefit from its unique abilities.",
    "vendorReason": "The Edge specializes in relics and oddities that bridge the gap between the known world and the unknown, making it an ideal vendor for this keychain.",
    "shippingDetail": "Ships via Warp Whistle Transit's fastest courier service, ensuring timely delivery of this precious item.",
    "usage": {
      "activation": "Instantaneous use against void entities or in the Doughnut Hole.",
      "duration": "Instantaneous for Void Resistance; lasts 1 minute for Cosmic Déjà Vu.",
      "endsWhen": "Effect ends upon successful use or when the day ends, whichever comes first.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The balanced XP price reflects its unique abilities and the expertise of Warp Whistle Transit in crafting such items.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-23T19:01:15.370284+00:00",
    "aiReviewedAt": "2026-07-23T19:01:15.370284+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_dust_of_aegis": {
    "id": "the_edge_dust_of_aegis",
    "name": "Dust of Aegis",
    "description": "The Dust of Aegis is a fine powder that shimmers with an ethereal glow. Crafted from the dust collected during the Aegis Prison Break, it is said to hold the essence of defiance against tyranny. When consumed, this potent dust grants a heroic surge, restoring 200 Hit Points and 100 Magic Points immediately. It also momentarily shields the user's mind, granting temporary immunity to psychic damage for 10 seconds. Nearby enemies are left in a state of confusion, causing minor glitches that distort their vision for 2 seconds.",
    "price": 1000,
    "icon": "🧪",
    "stock": 15,
    "rarity": "uncommon",
    "effects": [
      "Heroic Surge",
      "Mind Shield"
    ],
    "vendor": "the_edge",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heroic Surge",
        "rules": "The user regains 200 Hit Points and 100 Magic Points. This effect is a bonus action that can be used once per combat encounter."
      },
      {
        "title": "Mind Shield",
        "rules": "The user gains temporary immunity to psychic damage for 10 seconds, starting when the dust is consumed. It ends early if the user takes psychic damage or if they are incapacitated."
      }
    ],
    "levelRequirementReason": "This dust is accessible to all adventurers who have proven their resolve in minor skirmishes.",
    "vendorReason": "The Edge, a vendor known for its connection with Aegis Prison Break survivors, sells this nostalgic relic.",
    "shippingDetail": "Ships within 2 days, delivered by Hammer Bros. Handling's trusted couriers.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous and lasts for 10 seconds",
      "endsWhen": "Early if the user takes psychic damage or becomes incapacitated",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced XP price reflects its rarity and utility without overpricing a versatile item.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T19:01:19.174580+00:00",
    "aiReviewedAt": "2026-07-23T19:01:19.174580+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_feywild_brew": {
    "id": "the_edge_feywild_brew",
    "name": "Feywild Brew",
    "description": "The Feywild Brew is a shimmering elixir that dances in your cup, its surface reflecting whispers of forgotten dreams and glowing with the essence of ancient fey magic. When consumed, it restores 5 hit points to the imbiber and grants temporary blindness to any enemy within line of sight for one round at no cost to you. The brew also offers a fleeting portal: once per day, it teleports the drinker to a random location within 100 meters, but only in the Feywild dimensions where its magic is strongest. Beware, however, for this potent nectar can consume your sanity; failing a saving throw costs you 1d2 points of sanity each time.",
    "price": 1000,
    "icon": "🍷",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Restores HP and grants temporary blindness",
      "Teleports to random location within 100 meters"
    ],
    "vendor": "the_edge",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Healing and Blindness",
        "rules": "When consumed, the Feywild Brew restores 5 hit points. It also causes any enemy in line of sight to be temporarily blinded for one round (no save DC required). This effect does not affect allies or the user."
      },
      {
        "title": "Feywild Teleport",
        "rules": "Once per day, this potion allows you to teleport yourself to a random location within 100 meters of your current position. The destination must be in the Feywild dimensions for the effect to activate. This use does not expend charges or require an action."
      }
    ],
    "levelRequirementReason": "The brew's potent effects, especially its teleportation and temporary blindness, demand a certain level of control and experience.",
    "vendorReason": "The Edge vendors are known for their extensive knowledge of the Feywild and can provide this unique potion.",
    "shippingDetail": "Delivered with special care by Hammer Bros, ensuring its potency remains intact during transit.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "Temporary blindness lasts one round; teleportation effect is instantaneous",
      "endsWhen": "Teleport ends when the destination is reached or if the user exits the Feywild dimensions",
      "charges": "One use per day"
    },
    "priceReason": "This potion's rarity and unique effects, including its telepathic capabilities, justify this high price.",
    "priceOriginal": 150,
    "priceReviewedAt": "2026-07-23T19:01:58.043635+00:00",
    "aiReviewedAt": "2026-07-23T19:01:58.043635+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_feywild_forged_ring": {
    "id": "the_edge_feywild_forged_ring",
    "name": "Feywild Forged Ring",
    "description": "The Feywild Forged Ring is a delicate circlet of twisted eldritch metal and glowing twilight crystal. Crafted by the last dream-weavers of the Feywild, it pulses with raw magical energy. When worn, it allows the wearer to step into the illusory realms of the Feywild, where the line between reality and fantasy blurs. Misuse can result in moments of disorientation or even the loss of one’s memory altogether.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Feywild Step",
      "Memory Glitch"
    ],
    "vendor": "the_edge",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Feywild Step",
        "rules": "As a bonus action, the wearer can use the ring to step into the illusory realms of the Feywild for 1 minute. While in this state, any creature they interact with is affected as if under the influence of a minor illusion spell (DC 14). The effect ends early if the wearer takes three consecutive damage from non-magical attacks."
      },
      {
        "title": "Memory Glitch",
        "rules": "There is a 5% chance per hour of overuse that the wearer will forget their own name or lose the last memory they held for up to one minute. The wearer can use an action to stabilize themselves, ending this effect immediately."
      }
    ],
    "levelRequirementReason": "The ring’s eldritch power requires a moderate understanding of magic and its effects.",
    "vendorReason": "The Edge is known for dealing in rare artifacts, and this ring fits perfectly into their inventory.",
    "shippingDetail": "Due to the delicate nature of the item, it is shipped with enhanced magical protections to ensure safe delivery.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute or until interrupted by damage",
      "endsWhen": "The wearer takes three consecutive non-magical damage from attacks or uses an action to stabilize themselves",
      "charges": "Unlimited, but requires attunement"
    },
    "priceReason": "Crafted by the last dream-weavers and requiring attunement, this ring is a rare and powerful artifact.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T19:01:31.155629+00:00",
    "aiReviewedAt": "2026-07-23T19:01:31.155629+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_gear_of_chaos": {
    "id": "the_edge_gear_of_chaos",
    "name": "Gear of Chaos",
    "description": "The Gear of Chaos is a relic forged from twisted metal and swirling entropy. Crafted by Bob-omb Rush Delivery, this gear warps the fabric of reality within its wearer's grasp. It grants +1 to all skill checks against logic or order-based enemies. Additionally, once per combat, it can cause an enemy’s next attack to be randomized with a 30% chance at the start of each battle, affecting allies within 5 feet for 1d4 rounds.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reality Warp",
      "Randomized Attack"
    ],
    "vendor": "the_edge",
    "shippedBy": "Bob-omb Rush Delivery",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Reality Warp",
        "rules": "At the start of combat, the wearer rolls a d6. On a roll of 1 or 2, an enemy's next attack becomes randomized, affecting allies within 5 feet for 1d4 rounds."
      },
      {
        "title": "Randomized Attack",
        "rules": "Grants +1 to all skill checks against logic- or order-based enemies. This effect is passive and requires no activation."
      }
    ],
    "levelRequirementReason": "The Gear of Chaos requires a minimum level of 6 due to its complex alignment manipulation capabilities.",
    "vendorReason": "The Edge specializes in rare and powerful relics, making the Gear of Chaos an ideal addition to their inventory.",
    "shippingDetail": "Ships via a special void zone express service, ensuring safe delivery within 3 days.",
    "usage": {
      "activation": "Passive effect; requires no activation.",
      "duration": "Instantaneous; lasts until the start of your next turn after use.",
      "endsWhen": "The effect ends when the combat ends or a new battle begins.",
      "charges": "Unlimited; does not deplete charges."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its unique alignment-altering properties and limited availability in void zones.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T19:01:33.811632+00:00",
    "aiReviewedAt": "2026-07-23T19:01:33.811632+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_glitch_core": {
    "id": "the_edge_glitch_core",
    "name": "Glitch Core",
    "description": "The Glitch Core hums with a chaotic energy, pulsing like the heart of a malfunctioning void. Crafted from the remains of forgotten tech and ancient void matter, it flickers between dimensions, leaking strange glitches that ripple through reality. When activated, this core grants an immediate 20% boost to all damage dealt for five seconds. Enemies caught in its proximity suffer random glitches—teleportation or explosions—that disrupt their actions for three seconds.",
    "price": 1000,
    "icon": "⚙",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Boost Damage Output",
      "Glitch Enemies"
    ],
    "vendor": "the_edge",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Boost Damage Output",
        "rules": "Activates on a bonus action. Grants the user a +20% boost to all damage dealt for five seconds. Ends when the duration expires or the user takes damage."
      },
      {
        "title": "Glitch Enemies",
        "rules": "Triggers upon activation, causing nearby enemies within 30 feet to suffer either teleportation or explosion glitches that last for three seconds. The glitch type is random and occurs with a 50% chance of each. Ends when the duration expires."
      }
    ],
    "levelRequirementReason": "Requires level 7 due to its complex mechanics and powerful effects.",
    "vendorReason": "The Edge, known for its cutting-edge tech and experimental gear, naturally stocks the Glitch Core.",
    "shippingDetail": "Ships via a specialized void courier that ensures quick delivery through dimensional shortcuts.",
    "usage": {
      "activation": "Bonus action",
      "duration": "5 seconds",
      "endsWhen": "Ends when the duration expires or the user takes damage",
      "charges": "Unlimited, recharges after long rest"
    },
    "priceReason": "Balanced at 1000 XP to reflect its powerful effects and limited utility.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T19:01:50.453492+00:00",
    "aiReviewedAt": "2026-07-23T19:01:50.453492+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_halopod_tether": {
    "id": "the_edge_halopod_tether",
    "name": "Halopod Tether",
    "description": "The Halopod Tether is a compact, sleek device adorned with glowing Kivotos insignia. Crafted by Bob-omb Rush Delivery, it connects students directly to the academy’s internal network for seamless teleportation and communication. When within proximity of other halo-equipped students (within 10 feet), you gain +2 initiative. However, using it in Gehenna Academy's main halls triggers a 5% chance of a minor glitch that may disrupt your concentration.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎓",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Initiative Boost",
      "Glitch Risk"
    ],
    "vendor": "the_edge",
    "shippedBy": "Bob-omb Rush Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Initiative Boost",
        "rules": "When within 10 feet of another student equipped with a halo, you gain +2 to initiative rolls. This effect is passive and does not require any action."
      },
      {
        "title": "Glitch Risk",
        "rules": "Using the Halopod Tether in Gehenna Academy’s main halls triggers a 5% chance of a minor glitch that may disrupt your concentration for 1 minute, requiring a DC 13 Concentration save to end. The device can only be used once per day."
      }
    ],
    "levelRequirementReason": "The Halopod Tether is designed for beginners and students who need assistance with their teleportation needs.",
    "vendorReason": "The Edge specializes in educational tools, making it the perfect vendor for this device.",
    "shippingDetail": "Ships within 3 days of order placement.",
    "usage": {
      "activation": "Passive effect; no activation required when proximity conditions are met.",
      "duration": "Instantaneous, but only active while in proximity to other halo-equipped students.",
      "endsWhen": "Disruption by a minor glitch or moving out of range.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The balanced price reflects the device's unique features and utility without being overpowered.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T19:01:44.962055+00:00",
    "aiReviewedAt": "2026-07-23T19:01:44.962055+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_internet_virus_core": {
    "id": "the_edge_internet_virus_core",
    "name": "Internet Virus Core",
    "description": "The Internet Virus Core is a corrupted artifact from the digital void that pulses with viral static. It grants temporary psychic powers to those who attune themselves, but at great risk. Every use confers +1d4 to mental checks and may trigger a glitch: memory loss, hallucination, or temporary invisibility. Some say it was the last artifact left after the Great Data Collapse, now a relic of forgotten internet sites and the digital wilds.",
    "price": 1000,
    "icon": "🖥",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Mental Boost",
      "Glitch Risk"
    ],
    "vendor": "the_edge",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mental Boost",
        "rules": "Grants +1d4 to mental checks. On failed checks, the user takes 1d4 psychic damage and risks triggering a glitch."
      },
      {
        "title": "Glitch Risk",
        "rules": "Every use has a 25% chance of triggering one of three glitches: memory loss (target forgets one detail), hallucination (user sees an illusion for 1 minute), or temporary invisibility (user becomes invisible for 1 round)."
      }
    ],
    "levelRequirementReason": "This core's power is potent but not overwhelming, suitable for novice characters.",
    "vendorReason": "The Edge specializes in relics and artifacts from the digital world, including the Internet Virus Core.",
    "shippingDetail": "Shipped via encrypted quantum courier, ensuring safe arrival through digital turbulence.",
    "usage": {
      "activation": "A bonus action to use once per short rest",
      "duration": "Instantaneous effect; glitch occurs at the start of next turn",
      "endsWhen": "Glitch ends after one round or when the user takes damage",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "The core's digital and mental nature, combined with its unique risk/reward balance, justifies this price.",
    "priceOriginal": 700,
    "priceReviewedAt": "2026-07-23T19:01:47.408136+00:00",
    "aiReviewedAt": "2026-07-23T19:01:47.408136+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_abyss_bite": {
    "id": "the_edge_item_abyss_bite",
    "name": "Abyss Bite",
    "description": "The Abyss Bite is a peculiar snack made from the entrails of a creature that straddles both light and shadow, harvested in the depths of the abyss. It's said to imbue the eater with a taste for the dark, causing them to inadvertently spill secrets like spilled ink. Consuming this snack grants temporary stat buffs and enhances damage output, but it also risks drawing the very void into your soul.",
    "category": "consumables",
    "price": 1000,
    "icon": "🩸",
    "stock": 37,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Enhanced Damage",
      "Void Spill"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "Void Courier",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Enhanced Damage",
        "rules": "When you consume the Abyss Bite, you gain a +15% bonus to your damage rolls for 1 minute. This effect ends if you take any damage or if you finish a short rest."
      },
      {
        "title": "Void Spill",
        "rules": "There's a 20% chance each time you deal hit point damage with a melee weapon that the target falls into the void, taking an additional 1d6 necrotic damage. This effect ends when you finish a short rest."
      }
    ],
    "levelRequirementReason": "This snack's effects are too potent for lower-level characters to safely handle.",
    "vendorReason": "The Abyss Trader has exclusive access to abyssal resources and the knowledge of how to properly harvest these dangerous ingredients.",
    "shippingDetail": "Ships directly from the abyss, arriving with a delay due to the instability of the void's currents.",
    "usage": {
      "activation": "Eating the snack as an action",
      "duration": "1 minute or until you take damage/finish a short rest",
      "endsWhen": "You finish a short rest or take damage",
      "charges": "Unlimited, but one per long rest"
    },
    "priceReason": "The rare and dangerous nature of the ingredients combined with its potent effects justify this price.",
    "priceOriginal": 700,
    "priceReviewedAt": "2026-07-23T19:02:43.718491+00:00",
    "aiReviewedAt": "2026-07-23T19:02:43.718491+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_final_shop_ambition": {
    "id": "the_edge_item_final_shop_ambition",
    "name": "Final Shop Ambition",
    "description": "Final Shop Ambition is a rare, golden medallion that whispers promises of success in its intricate engravings. This artifact allows you to outmaneuver the final shop’s closing bell, offering endless opportunities to secure deals and advance your faction standing. With each use, it amplifies your negotiation prowess by +3 to all faction-based abilities, granting you one extra faction quest per day, and doubling reputation gains for a full 24 hours.",
    "category": "faction",
    "price": 1000,
    "icon": "👑",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Faction Boost",
      "Extra Quest"
    ],
    "vendor": "final_shop",
    "shippedBy": "The Last Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Faction Boost",
        "rules": "Activates as a bonus action. Grants +3 to all faction-based abilities, lasts until the end of your next turn, and can be used once per short rest."
      },
      {
        "title": "Extra Quest",
        "rules": "Allows you to take one additional faction quest per day, which must be completed by the final shop’s closing bell. This effect is limited to once per day."
      }
    ],
    "levelRequirementReason": "This medallion requires a player of at least level 8 to handle its complex magic.",
    "vendorReason": "The final shop, ever eager for business and players' loyalty, stocks this rare artifact among its wares.",
    "shippingDetail": "Ships within the week via The Last Courier's express service, ensuring timely delivery to your doorstep.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "Instantaneous; lasts until the end of your next turn for Faction Boost. Extra Quest is daily use only.",
      "endsWhen": "The effect ends when you take a short rest, and Extra Quest resets at midnight.",
      "charges": "Unlimited daily uses"
    },
    "priceReason": "Final Shop Ambition's price reflects its rarity and the significant faction advantage it grants.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T19:02:13.215607+00:00",
    "aiReviewedAt": "2026-07-23T19:02:13.215607+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_forbidden_fury": {
    "id": "the_edge_item_forbidden_fury",
    "name": "Forbidden Fury",
    "description": "The Forbidden Fury is a cursed blade forged in the depths of an ancient volcano. Its very touch burns like lava, and its strikes send waves of searing heat through enemies. It grants you the power to unleash chaotic fury upon foes, but beware — it may drive you mad with rage. When wielded, your attacks deal 30% extra damage to low HP targets and stun them for two turns after each hit.",
    "category": "equipment",
    "price": 1000,
    "icon": "💥",
    "stock": 4,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Extra Damage on Low HP",
      "Stun Enemies"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "The Edge Express",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Extra Damage on Low HP",
        "rules": "When you deal damage with this weapon, creatures reduced to less than half their maximum hit points take an additional 30% damage from the attack. This effect has no save DC and can only be used once per short or long rest."
      },
      {
        "title": "Stun Enemies",
        "rules": "After each successful hit with this weapon, stunned targets are incapacitated for two turns. The stun ends if they take any damage, if the condition that caused it is removed, or at the start of their next turn, whichever comes first. This effect has a save DC of 15 and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "Requires a high level to wield its chaotic power safely.",
    "vendorReason": "Edge Outpost deals in exotic and powerful artifacts, making Forbidden Fury an appropriate addition.",
    "shippingDetail": "Ships via The Edge Express within one week of order placement.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Until the start of your next turn",
      "endsWhen": "The effect ends when you take damage, cast a spell, or are incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect its chaotic power and rarity.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T19:02:05.211859+00:00",
    "aiReviewedAt": "2026-07-23T19:02:05.211859+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_name_here": {
    "id": "the_edge_item_name_here",
    "name": "Phantom Brokers Lure",
    "description": "Phantom Brokers Lure is a siren’s call in the form of a shimmering, spectral real estate flyer that dances before your eyes. When activated, it grants you an illusory taste of boundless wealth, but at a terrible cost: you must forget your name and be ensnared by ghostly merchants who haunt you with their promises for 10 minutes. Only in haunted properties can the lure remain active, or risk vanishing into nothingness.",
    "price": 1000,
    "icon": "💰",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Illusory Wealth",
      "Forgetting One's Name"
    ],
    "vendor": "the_edge",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Illusory Wealth",
        "rules": "Upon activation, you gain a +2 bonus to all Charisma checks and saving throws for the duration of your next long rest. However, this effect ends immediately if you are not in a haunted property."
      },
      {
        "title": "Forgetting One's Name",
        "rules": "You lose 1 level and forget your name until you complete a short or long rest. This effect can be countered by successfully saving against a DC 15 Wisdom save, but you must still suffer the consequences of forgetting your name."
      }
    ],
    "levelRequirementReason": "Only those with at least 1 level can afford the risk and potential loss associated with this item.",
    "vendorReason": "The Edge is a notorious vendor known for their questionable deals, making this item a fitting addition to their inventory.",
    "shippingDetail": "Delivery is instant within haunted properties; outside such locations, the lure vanishes after 10 minutes of non-use.",
    "usage": {
      "activation": "Requires an action to activate and remains active for 10 minutes or until used in a haunted property.",
      "duration": "Active for 10 minutes unless used in a haunted property.",
      "endsWhen": "The effect ends immediately if not within a haunted property, or if the user completes a short or long rest after forgetting their name.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the item's legendary rarity and the significant risk it poses to its wielder.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-23T19:02:26.739659+00:00",
    "aiReviewedAt": "2026-07-23T19:02:26.739659+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_l_eclaire_bread_talisman": {
    "id": "the_edge_l_eclaire_bread_talisman",
    "name": "LEclaire Bread Talisman",
    "description": "The LEclaire Bread Talisman is a golden-baked pastry charm, its surface flecked with sugar and sprinkles, imbued with the laughter of dough folk from LEclaire Isle. When worn, it emits a sweet, buttery scent that calms wild magic surges, but beware—eating too much risks transforming you into a non-corporeal, doughy entity. The charm is crafted by the Mages Guild Portal and shipped with care to ensure its magical properties remain intact.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍞",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Calms magic surges",
      "Draws sugar-spirits"
    ],
    "vendor": "the_edge",
    "shippedBy": "Mages Guild Portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Magic Calm",
        "rules": "When worn, the talisman reduces magic fatigue by 20% for 10 minutes. This effect ends if the wearer's magic fatigue exceeds 80%. No save is required."
      },
      {
        "title": "Sugary Support",
        "rules": "For 3 rounds, the charm attracts friendly dough folk who provide support and minor assistance. They grant a +1 bonus to saving throws against spells or effects that cause physical harm within their range (5 feet). This effect ends if the talisman is removed."
      }
    ],
    "levelRequirementReason": "The charm's magic is simple enough for first-level spellcasters, yet potent enough to aid them in their adventuring.",
    "vendorReason": "The Edge specializes in items from LEclaire Isle and the talisman fits perfectly with their thematic offerings.",
    "shippingDetail": "Shipped under magical protection to ensure the talisman's enchantments remain intact during transit.",
    "usage": {
      "activation": "Worn as a piece of equipment",
      "duration": "10 minutes per use, recharges after a long rest",
      "endsWhen": "The wearer's magic fatigue exceeds 80% or the talisman is removed",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted by the Mages Guild Portal and imbued with specific, useful effects, this talisman provides significant utility at a fair price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T19:02:35.407196+00:00",
    "aiReviewedAt": "2026-07-23T19:02:35.407196+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_meridian_mug": {
    "id": "the_edge_meridian_mug",
    "name": "Meridian Mug",
    "description": "The Meridian Mug is a handcrafted ceramic vessel forged from the last embers of an Iron Legion furnace. Its glaze retains the faint echoes of forgotten battles and whispered tales of the Midlands. Each sip brews tea that warms the soul, granting temporary resistance to poison for one turn, and leaves behind a lingering memory of a lost city, causing mild hallucinations for two turns before fading into the misty past.",
    "price": 1000,
    "icon": "☕",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Poison Resistance",
      "Hallucination Echoes"
    ],
    "vendor": "the_edge",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Poison Resistance",
        "rules": "The drinker gains temporary resistance to poison damage for one turn. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Hallucination Echoes",
        "rules": "For two turns, the drinker experiences vivid hallucinations of a forgotten city in the Midlands. This effect ends when the drinker takes any action or when their concentration is broken by an attack or ability that targets them."
      }
    ],
    "levelRequirementReason": "The Meridian Mug's effects are subtle but powerful, suitable for adventurers of all levels.",
    "vendorReason": "The Edge vendors often stock items with a touch of nostalgia and history, making the Meridian Mug a fitting addition to their inventory.",
    "shippingDetail": "Ships via Dry Bones Dead Drop, known for its reliable but rather slow couriers. Delivery may take up to three days.",
    "usage": {
      "activation": "Passive effect upon consumption of the tea.",
      "duration": "Instantaneous poison resistance; hallucinations last for two turns.",
      "endsWhen": "The effects end when the drinker takes any action or their concentration is broken by an attack or ability that targets them.",
      "charges": "Unlimited, as it can be consumed multiple times."
    },
    "priceReason": "The Meridian Mug's unique historical significance and its effects make it a valuable but not overpriced addition to the shop.",
    "priceOriginal": 500,
    "priceReviewedAt": "2026-07-23T19:02:26.602092+00:00",
    "aiReviewedAt": "2026-07-23T19:02:26.602092+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_pianta_village_scam": {
    "id": "the_edge_pianta_village_scam",
    "name": "Pianta Village Fortune Teller’s Goblet",
    "description": "The Pianta Village Fortune Teller’s Goblet is a tarnished pewter goblet with swirling patterns of the Pipe Network. It whispers tales of freedom to those who drink it, but only if they wear mismatched socks. The liquid prophecy within promises visions of the future, yet it corrupts the mind, causing echoes in speech and movement. Beware, for this relic is a scam meant to ensnare the desperate with false hope.",
    "price": 1000,
    "icon": "🍷",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Vision of Future",
      "Echoes of Corruption"
    ],
    "vendor": "the_edge",
    "shippedBy": "Mages Guild Portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vision of Future",
        "rules": "As an action, drink from the goblet. Gain one divination spell effect for 1 minute. This vision is misleading and may not reflect reality."
      },
      {
        "title": "Echoes of Corruption",
        "rules": "For 3 rounds after drinking, your speech and movements are reversed. Save DC 15. On a successful save, the effect ends immediately."
      }
    ],
    "levelRequirementReason": "Even the lowest adventurer can recognize a scam when they encounter one.",
    "vendorReason": "The Edge is known for its collection of questionable artifacts and curiosities, including this infamous goblet.",
    "shippingDetail": "Ships via the Mages Guild’s secure courier network within a week.",
    "usage": {
      "activation": "Action to drink from the goblet.",
      "duration": "1 minute for Vision of Future, 3 rounds for Echoes of Corruption.",
      "endsWhen": "The effects end upon successful save or after duration expires.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item is priced to reflect its status as a scam relic, not an actual useful tool.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-23T19:02:41.898074+00:00",
    "aiReviewedAt": "2026-07-23T19:02:41.898074+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_ring_of_the_wyrm": {
    "id": "the_edge_ring_of_the_wyrm",
    "name": "Ring of the Wyrm",
    "description": "The Ring of the Wyrm is a cursed elven artifact forged from twisted gears and molten metal. Its dark core glows ominously, hinting at the chaos it commands. This ring grants the wearer fluency in the language of machinery and fire, but also compels mechanical limbs to twitch uncontrollably around them. Discovered deep within the Wyrm’s hollow belly, this relic is a testament to both the elven craftsman's skill and their surrender to malevolent power.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚙",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Speak Gear & Flame",
      "Mechanical Twitch"
    ],
    "vendor": "the_edge",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Speak Gear & Flame",
        "rules": "The wearer can understand and speak the language of machinery and fire. This ability grants advantage on all Intelligence (Arcana) checks related to mechanical devices or fire-based magic. The effect is passive."
      },
      {
        "title": "Mechanical Twitch",
        "rules": "Whenever a non-mechanical enemy attacks the wearer within 5 feet, there is a 20% chance that one of their own mechanical limbs will twitch uncontrollably for 1 minute, imposing disadvantage on all Dexterity (Acrobatics) checks. This effect lasts until the end of the wearer's next turn."
      }
    ],
    "levelRequirementReason": "The Ring requires attunement by a mechanical expert to harness its chaotic power without succumbing fully to its curse.",
    "vendorReason": "The Edge is known for dealing in rare and exotic items, including cursed artifacts like the Ring of the Wyrm.",
    "shippingDetail": "Due to its cursed nature, the ring must be shipped via Chain Chomp Courier's express service within 48 hours.",
    "usage": {
      "activation": "Passive effect.",
      "duration": "Instantaneous activation; lasts until end of next turn or until worn off after 3 hours of non-battle use.",
      "endsWhen": "Discontinues when the wearer removes it from their hand, after 3 hours of non-use, or upon destruction of the ring.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The Ring's balance is adjusted to reflect its cursed nature and limited duration, ensuring it remains a challenging but fair addition to any character’s arsenal.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T19:02:46.288892+00:00",
    "aiReviewedAt": "2026-07-23T19:02:46.288892+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_scam_soul_charger": {
    "id": "the_edge_scam_soul_charger",
    "name": "Soul Charger",
    "description": "The Soul Charger is a glowing, pulsating sphere encased in ethereal light. Crafted by Dry Bones Dead Drop and shipped with an ominous aura, it promises to restore your soul's vitality—though only if you believe in its power. Using the charger in combat grants you a surge of energy, but at a terrible cost: your sanity deteriorates permanently after each use. This cursed artifact is a relic of ancient lore, crafted by spirits seeking to trap the living within their void.",
    "price": 1000,
    "icon": "⚡",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Soul Surge",
      "Sanity Drain"
    ],
    "vendor": "the_edge",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Soul Surge",
        "rules": "When activated as an action during combat, you gain +1d8 temporary hit points for 1 minute. The effect ends if you leave combat or take any damage."
      },
      {
        "title": "Sanity Drain",
        "rules": "After each use of the Soul Charger, you suffer a permanent loss of 1d4 sanity points. This effect persists until you complete a long rest."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to prevent low-level characters from being overwhelmed by its side effects.",
    "vendorReason": "The Edge sells rare and dangerous items, including cursed artifacts like the Soul Charger.",
    "shippingDetail": "Ships with a cryptic warning label: 'Caution: This item is not for the faint of heart.'",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "Leaving combat or taking damage",
      "charges": "Unlimited"
    },
    "priceReason": "Reflects the item's cursed nature and limited utility, balanced against its potential for temporary combat advantage.",
    "priceOriginal": 100000,
    "priceReviewedAt": "2026-07-23T19:02:49.741643+00:00",
    "aiReviewedAt": "2026-07-23T19:02:49.741643+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_seal_fragment": {
    "id": "the_edge_seal_fragment",
    "name": "Seal Fragment of Lothlórien",
    "description": "The Seal Fragment of Lothlórien is a glowing shard of ancient elvish craftsmanship, embedded with living crystal that pulses softly in harmony with the forest's magic. Crafted from the heartwood of Ents and etched with runes that whisper the forgotten lore of the forest, it grants a deep connection to the realm of trees. When activated during a battle, this fragment can reduce an enemy’s defense by 1 for one round, making the Wyrm energy around you more palpable.",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Primordial Bond",
      "Battle Aura"
    ],
    "vendor": "the_edge",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Primordial Bond",
        "rules": "When combined with three other fragments of Lothlórien, this shard allows the user to activate the final seal. This requires a bonus action and has an instantaneous duration."
      },
      {
        "title": "Battle Aura",
        "rules": "Activates as a reaction when entering combat. Reduces the target’s defense by 1 for one round. No save DC required; ends immediately if the user leaves combat or is incapacitated."
      }
    ],
    "levelRequirementReason": "Users must be proficient in spellcasting to effectively utilize this fragment's connection to ancient magic.",
    "vendorReason": "The Edge, a vendor of ancient artifacts, carries this rare fragment due to its deep lore and magical significance.",
    "shippingDetail": "Ships via the Chain Chomp Courier, ensuring safe delivery through enchanted means.",
    "usage": {
      "activation": "Bonus action or reaction depending on effect used",
      "duration": "Instantaneous for Primordial Bond; one round for Battle Aura",
      "endsWhen": "Primordial Bond ends when all fragments are combined; Battle Aura ends upon leaving combat or incapacitation",
      "charges": "Unlimited, but requires a bonus action to activate"
    },
    "priceReason": "Balanced at this price due to its limited use and the significant power it offers when fully activated.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T19:02:57.437486+00:00",
    "aiReviewedAt": "2026-07-23T19:02:57.437486+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_shadowfell_key": {
    "id": "the_edge_shadowfell_key",
    "name": "Shadowfell Key",
    "description": "The Shadowfell Key is a gnarled iron key, its surface etched with arcane runes that shimmer faintly in the dark. It opens portals to the shadowy realm, granting passage through any door of the Shadowfell, but it strikes fear into those who wield it; on first use, it inflicts 2d4 shadow damage and blinds the user for one minute. Only those attuned to shadow magic can wield this key, yet its dark power comes with a price—blessing it with sugar magic from LEclaire Isle is required to use it freely in that realm.",
    "price": 1000,
    "icon": "🔑",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Opens any door in the Shadowfell dimension",
      "Grants 2d4 shadow damage on first strike"
    ],
    "vendor": "the_edge",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Shadow Damage",
        "rules": "When the key is used, the user takes 2d4 shadow damage. This effect ends when the key is no longer in use."
      },
      {
        "title": "Blindness",
        "rules": "The user is blinded for one minute after using the key. This blindness can be cured with a successful DC 15 Constitution saving throw or by the end of their next long rest."
      }
    ],
    "levelRequirementReason": "Requires at least 6th level to wield due to its shadowy power and attunement demands.",
    "vendorReason": "The Edge, a vendor of arcane curiosities, carries this rare key as part of their extensive collection of magical artifacts.",
    "shippingDetail": "Delivered with extra care to ensure the key arrives safely and intact.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Instantaneous; blinds the user for one minute after use",
      "endsWhen": "On completion of its effect or when no longer in use",
      "charges": "Unlimited, but requires attunement"
    },
    "priceReason": "The key's rarity and shadow magic make it a valuable commodity among adventurers.",
    "priceOriginal": 1000,
    "priceReviewedAt": "2026-07-23T19:03:11.359081+00:00",
    "aiReviewedAt": "2026-07-23T19:03:11.359081+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_void_drifter_gear": {
    "id": "the_edge_void_drifter_gear",
    "name": "Void Drifter Gauntlets",
    "description": "Void Drifter Gauntlets are crafted from the remnants of shattered realities and worn by those who dance between worlds. These gauntlets grant their wielder +3 to melee attack rolls within void zones, delivering an extra +10% damage against entities with negative health. Upon each successful hit, there's a slight chance (as determined by a d20 roll) that nearby enemies glitch momentarily, causing them confusion and rendering them less effective in combat for the next round. These gauntlets wear out after 30 combat uses.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Void Zone Mastery",
      "Glitch Glue"
    ],
    "vendor": "the_edge",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Void Zone Mastery",
        "rules": "Grants +3 to all melee attack rolls in void zones. This effect is active as long as the gauntlets are worn and the user is within a void zone."
      },
      {
        "title": "Glitch Glue",
        "rules": "There's a 10% chance (as determined by a d20 roll) that each successful melee hit against an entity with negative health causes nearby enemies to glitch momentarily. This effect lasts for one round and ends when the gauntlet is removed from combat."
      }
    ],
    "levelRequirementReason": "Requires at least level 7 to wield these gauntlets effectively in void zones.",
    "vendorReason": "The Edge specializes in gear for those who navigate the most perilous and unstable environments, making Void Drifter Gauntlets a natural fit.",
    "shippingDetail": "Ships via Warp Whistle Transit's fastest courier, ensuring prompt delivery to even the most remote locations.",
    "usage": {
      "activation": "Passive effect when worn within void zones.",
      "duration": "Instantaneous hit-based effect; lasts until gauntlets are removed from combat.",
      "endsWhen": "The gauntlets wear out after 30 combat uses or when removed from a void zone.",
      "charges": "Unlimited, but wears out after use."
    },
    "priceReason": "Balanced at 1000 XP to reflect the item's unique and powerful abilities within specific environments.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-23T19:03:02.216281+00:00",
    "aiReviewedAt": "2026-07-23T19:03:02.216281+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_void_drifter_satchel": {
    "id": "the_edge_void_drifter_satchel",
    "name": "Void Drifter Satchel",
    "description": "The Void Drifter Satchel, a leather-bound bag adorned with arcane symbols, holds void fragments that shimmer like dark stars. Crafted by the Abyssal Court, it can store up to three fragments, each granting +2 damage to all attacks for one round when activated in a glitch zone. When opened within such a zone, it triggers a 1d4 random effect, ranging from creating an area of darkness to summoning a small whirlwind that disorients foes. This relic is attuned only by Void Drifters or Cosmic Jester cultists, ensuring its power remains in the hands of those who understand its cosmic significance.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Void Fragment Storage",
      "Glitch Zone Effect"
    ],
    "vendor": "the_edge",
    "shippedBy": "Bob-omb Rush Delivery",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Void Fragment Storage",
        "rules": "The satchel can hold up to three void fragments. Each fragment, when activated with a bonus action inside a glitch zone, grants +2 damage on all attack rolls for one round."
      },
      {
        "title": "Glitch Zone Effect",
        "rules": "When the bag is opened within a glitch zone, it triggers a 1d4 random effect. These effects range from disorienting enemies to creating an area of darkness or summoning a whirlwind that lasts for one minute."
      }
    ],
    "levelRequirementReason": "This relic requires attunement by characters with Void Drifter heritage or affiliation, ensuring only those capable of understanding its power can wield it.",
    "vendorReason": "The Edge is known for its trade in cosmic and arcane artifacts, making the Void Drifter Satchel a fitting addition to their inventory.",
    "shippingDetail": "Due to the fragile nature of void fragments within the satchel, it requires special packaging for safe delivery.",
    "usage": {
      "activation": "Bonus action to activate or open within a glitch zone.",
      "duration": "Instantaneous activation; effects last one round or minute per triggered effect.",
      "endsWhen": "The effects end when their duration expires or when the satchel is opened outside a glitch zone without triggering an effect.",
      "charges": "Unlimited, but requires attunement."
    },
    "priceReason": "Balanced at 1000 XP to reflect its powerful cosmic effects and limited usability in specific zones.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T19:03:36.968530+00:00",
    "aiReviewedAt": "2026-07-23T19:03:36.968530+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_waluigi_soul_tap": {
    "id": "the_edge_waluigi_soul_tap",
    "name": "Waluigi Soul Tap",
    "description": "The Waluigi Soul Tap is a sleek, metallic device that hums with chaotic energy. Crafted from a rare alloy found in the depths of the Mushroom Kingdom, it channels Waluigi’s mischievous spirit. Activating this device grants you a +1d6 bonus to all attacks and a 5% chance to trigger a Waluigi-inspired rampage that lasts until the end of your next turn. The device also deals 1d8 psychic damage to enemies with more than half their hit points, but prolonged use wears you down over time, leaving you in a minor glitch state after five minutes.",
    "price": 1000,
    "icon": "🎮",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Bonus Damage",
      "Rampage Trigger"
    ],
    "vendor": "the_edge",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bonus Damage",
        "rules": "When you attack an enemy, add 1d6 damage to the roll. The device has no charges and is not depleted by use."
      },
      {
        "title": "Rampage Trigger",
        "rules": "As a bonus action, activate the device to trigger a Waluigi-inspired rampage that lasts until the end of your next turn. This effect ends if you are incapacitated or the device is destroyed. There is no save DC."
      }
    ],
    "levelRequirementReason": "This device requires minimal magic to activate, making it accessible to all adventurers.",
    "vendorReason": "The Edge specializes in rare and magical artifacts from the Mushroom Kingdom, including this mischievous relic.",
    "shippingDetail": "Ships within a week with standard delivery.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the end of your next turn (Rampage Trigger) or destroyed/incapacitated (Device)",
      "endsWhen": "Incapacitation or destruction of the device",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect its unique and thematic abilities within the game.",
    "priceOriginal": 30000,
    "priceReviewedAt": "2026-07-23T19:03:11.606606+00:00",
    "aiReviewedAt": "2026-07-23T19:03:11.606606+00:00",
    "aiReviewVersion": 1
  },
  "the_hammer_used_to_forge": {
    "id": "the_hammer_used_to_forge",
    "name": "Smithy's Sledge",
    "description": "Smithy's Sledge, a hammer forged in the heart of Weapon World, glows faintly with elemental energy. It is said that this hammer was wielded by the gods themselves to forge the very weapons used in celestial battles. With it, you can craft any weapon or armor in mere hours instead of days, and even transmute living creatures into potent weapons, but at a cost: a successful CON save (DC 20) or risk turning yourself into one.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔨",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Crafting Mastery",
      "Living Weapon"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Anvil",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Crafting Mastery",
        "rules": "As an action, you can use Smithy's Sledge to craft a weapon or piece of armor. The item is created in your hand and functions as if crafted by the best master craftsman with no saving throw required."
      },
      {
        "title": "Living Weapon",
        "rules": "You may use your action to transform yourself into a living weapon, granting you the properties of a weapon (as per the Craft Wondrous Item spell) for 1 hour. This transformation requires a CON save (DC 20); failure turns you into a weapon until dispelled by another character."
      }
    ],
    "levelRequirementReason": "This hammer is a legendary artifact, but even the most novice craftsman can wield its power.",
    "vendorReason": "The Onyx Hand vendor has an unbreakable connection to the forgeheart of Weapon World and sells only items with divine origins.",
    "shippingDetail": "Ships via Anvil, known for its precision in delivering delicate artifacts.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous (Crafting Mastery) / 1 hour (Living Weapon)",
      "endsWhen": "Transformation ends when dispelled by another character (Living Weapon); Crafting Mastery is a one-time use effect.",
      "charges": "Unlimited"
    },
    "priceReason": "The hammer's price reflects its legendary crafting abilities and the risk of potential transformation into a weapon.",
    "priceOriginal": 420000,
    "priceReviewedAt": "2026-07-23T19:03:32.356058+00:00",
    "aiReviewedAt": "2026-07-23T19:03:32.356058+00:00",
    "aiReviewVersion": 1
  },
  "the_heart_of_a_weaponized": {
    "id": "the_heart_of_a_weaponized",
    "name": "Chain Chomp Core",
    "description": "The Chain Chomp Core is a chaotic essence forged from the heart of a weaponized Chain Chomp, now a weapon of untamed power. Crafted by Red Winter and Kremling Smuggle Run for Noki & Koopa Control, it harnesses the beast's raw ferocity to deal devastating damage. When struck, enemies flee in terror, but at a cost: using its abilities consumes precious Hit Points. This core can be wielded as both a melee weapon and a ranged projectile, delivering chaos wherever you strike.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐍",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Chain Reactions",
      "Terrorizing Strike"
    ],
    "vendor": "kivotos",
    "shippedBy": "Red Winter Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Chain Reactions",
        "rules": "When the Chain Chomp Core deals damage to an enemy, it has a 50% chance to cause that foe and all adjacent foes to flee in fear for 1 round. The target must succeed on a DC 14 Dexterity saving throw or be frightened until the start of its next turn."
      },
      {
        "title": "Terrorizing Strike",
        "rules": "The Chain Chomp Core can be used as either a melee weapon (melee attack, +2 to hit) or a ranged weapon with a range of 30 feet. On a hit, it deals 4d8 slashing damage plus an additional 1d6 damage on the first strike against mechanical foes."
      }
    ],
    "levelRequirementReason": "The Chain Chomp Core's chaotic power requires a firmer grasp of magic and combat to control.",
    "vendorReason": "Kivotos, a vendor of the macabre, offers this relic forged by Kremling Smuggle Run for Noki & Koopa Control.",
    "shippingDetail": "Ships directly from Gehenna Academy with expedited delivery.",
    "usage": {
      "activation": "Action or bonus action to attack (melee or ranged)",
      "duration": "Instantaneous, single use per turn",
      "endsWhen": "Expended after a successful hit",
      "charges": "Unlimited uses between long rests"
    },
    "priceReason": "The Chain Chomp Core's chaotic power and unique crafting make it a balanced purchase, equivalent to a powerful magical weapon.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-23T19:03:28.326780+00:00",
    "aiReviewedAt": "2026-07-23T19:03:28.326780+00:00",
    "aiReviewVersion": 1
  },
  "the_iron_fists_fist_forge_griddle": {
    "id": "the_iron_fists_fist_forge_griddle",
    "name": "The Iron Fists Fist Forge Griddle",
    "description": "The Iron Fists Fist Forge Griddle is a compact, fist-powered griddle that heats to perfection with each strike of your hand. Crafted by the Fist Forgers using ancient techniques, it not only enhances your strength in cooking but also offers a unique challenge—overstrike and suffer the consequences of bruised knuckles. This durable tool is perfect for any chef looking to mix power and precision in their culinary creations.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥞",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Heats with Impact",
      "Strength Boost for Cooking"
    ],
    "vendor": "the_iron_fists_dojo",
    "shippedBy": "Punch Pan Parcel",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Heats with Impact",
        "rules": "When you strike the griddle, it heats up momentarily to enhance your cooking. This effect lasts until your next action or until the griddle is struck again."
      },
      {
        "title": "Strength Boost for Cooking",
        "rules": "While using this griddle, you gain a +1 bonus to Strength (Athletics) checks related to cooking tasks. This benefit persists as long as you hold and use the griddle."
      }
    ],
    "levelRequirementReason": "Requires basic hand-to-hand combat proficiency to safely operate.",
    "vendorReason": "The Iron Fists dojo specializes in tools that enhance martial prowess and discipline, making this griddle a natural fit.",
    "shippingDetail": "Delivered by the Punch Pan Parcel service with an extra vibration alert to notify when your order is on its way.",
    "usage": {
      "activation": "On your action or bonus action, strike the griddle for its effects.",
      "duration": "Until your next action or until struck again.",
      "endsWhen": "If you cease striking it or if someone else strikes it.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced price considers the tool's unique design, durability, and the expertise required to use it effectively.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T19:03:41.094489+00:00",
    "aiReviewedAt": "2026-07-23T19:03:41.094489+00:00",
    "aiReviewVersion": 1
  },
  "the_iron_fists_fist_fuel_smoothie_recipe": {
    "id": "the_iron_fists_fist_fuel_smoothie_recipe",
    "name": "Recipe: The Iron Fists Fist Fuel Smoothie",
    "description": "The Iron Fists Fist Fuel Smoothie Recipe is a blend of invigorating fruits and robust proteins, crafted by martial monks who imbue every sip with their iron will. Drinking this smoothie allows you to channel their strength into your own fists for a brief period, making them feel as if they are forged from the very heart of a blacksmith’s forge. This recipe teaches you how to blend these ingredients perfectly in just 10 minutes, and once consumed, it grants you +2 to unarmed strikes for 1 hour, allowing you to unleash powerful blows that echo like the clang of steel on steel.",
    "price": 1000,
    "icon": "🥤",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Unarmed Strikes Power-Up",
      "Forge-Strong Fists"
    ],
    "vendor": "the_iron_fists_dojo",
    "shippedBy": "Muscle Mix Manual",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Unarmed Strikes Power-Up",
        "rules": "When you drink this smoothie, you gain a +2 bonus to unarmed strike damage until the start of your next turn. This effect lasts for 1 hour from the moment it is consumed."
      },
      {
        "title": "Forge-Strong Fists",
        "rules": "For the duration of the effect, your unarmed strikes are considered magical and deal an additional 1d6 bludgeoning damage. This bonus does not stack with other sources of magical damage."
      }
    ],
    "levelRequirementReason": "This recipe requires a moderate understanding of martial arts to fully appreciate its benefits.",
    "vendorReason": "The Iron Fists Dojo specializes in the teachings and techniques that enhance physical prowess, making them the perfect vendor for this unique smoothie recipe.",
    "shippingDetail": "Shipped via Muscle Mix Manual's premium courier service, ensuring swift delivery to your doorstep within a day.",
    "usage": {
      "activation": "Passive effect upon consumption. Requires no activation.",
      "duration": "1 hour from the moment it is consumed.",
      "endsWhen": "The start of your next turn after the duration ends.",
      "charges": "Unlimited, once per long rest."
    },
    "priceReason": "Balanced to provide a significant boost in combat effectiveness while remaining within the price range for an uncommon item.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T19:03:57.581854+00:00",
    "aiReviewedAt": "2026-07-23T19:03:57.581854+00:00",
    "aiReviewVersion": 1
  },
  "the_iron_fists_monk_robe": {
    "id": "the_iron_fists_monk_robe",
    "name": "The Iron Fists Monk Robe",
    "description": "The Iron Fists Monk Robe is a martial artist's essential attire, crafted from tempered steel fibers and imbued with the essence of Fist Monks' ancient traditions. This simple robe enhances both agility and combat prowess; it flows gracefully during flips but can trip you if not handled carefully. The robe's design ensures that every strike is more powerful by +1 to unarmed strikes, while its weight distribution grants a +2 bonus on Dexterity (Acrobatics) checks for acrobatic maneuvers.",
    "category": "equipment",
    "price": 1000,
    "icon": "👘",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Enhanced Unarmed Strikes",
      "Improved Acrobatics"
    ],
    "vendor": "the_iron_fists_dojo",
    "shippedBy": "Zen Zip Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Enhanced Unarmed Strikes",
        "rules": "While wearing the robe, you gain a +1 bonus to unarmed strike damage. This effect lasts until the start of your next turn."
      },
      {
        "title": "Improved Acrobatics",
        "rules": "When you make an Acrobatics check with the robe on, you have advantage if you are proficient in the skill and the check is related to acrobatic flips or maneuvers. This effect lasts for 1 hour per level."
      }
    ],
    "levelRequirementReason": "The robe's steel fibers require a certain physical and mental discipline, best suited for martial artists of at least third level.",
    "vendorReason": "As the creators of the robe, The Iron Fists Dojo ensures that only their disciples and students receive this essential training gear.",
    "shippingDetail": "The robe is carefully packed to prevent damage during transit and arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect, no activation required.",
      "duration": "Until the start of your next turn for unarmed strikes; lasts for 1 hour per level for acrobatics checks.",
      "endsWhen": "At the start of your next turn or when removed from combat.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects its quality craftsmanship and unique properties, suitable for a third-level monk.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T19:04:38.139897+00:00",
    "aiReviewedAt": "2026-07-23T19:04:38.139897+00:00",
    "aiReviewVersion": 1
  },
  "the_iron_fists_monk_weapon_leasing": {
    "id": "the_iron_fists_monk_weapon_leasing",
    "name": "The Iron Fists Monk Weapon Leasing",
    "description": "The Iron Fists Monk Weapon Leasing grants you the use of a high-quality monk weapon for a week. The weapon, previously wielded by a master monk from 'The Iron Fists Dojo,' bears their initials as a testament to their skill. Returning it late incurs a curse that whispers reminders of discipline, urging you to practice more diligently. This item is crafted with precision and care, embodying the dojo's commitment to excellence in martial arts training.",
    "category": "premium",
    "price": 1000,
    "icon": "💪",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Gently Used Weapon",
      "Late Return Penalty"
    ],
    "vendor": "the_iron_fists",
    "shippedBy": "Monk Courier (on foot)",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Gently Used Weapon",
        "rules": "You gain a +1 monk weapon for 7 days. The weapon has been used by a master monk, and its previous owner's initials are carved into it as a mark of their skill."
      },
      {
        "title": "Late Return Penalty",
        "rules": "If returned late, the weapon becomes cursed, delivering daily reminders on discipline that only fade upon returning the weapon promptly for 7 days. The curse ends if you spend 100 XP to lift it immediately."
      }
    ],
    "levelRequirementReason": "This item requires a monk of at least 6th level to handle its martial prowess and discipline.",
    "vendorReason": "'The Iron Fists Dojo' specializes in providing students with the best tools for their training, including this premium leasing option.",
    "shippingDetail": "Delivered personally by a monk courier on foot to ensure the weapon arrives in pristine condition.",
    "usage": {
      "activation": "At will",
      "duration": "Instantaneous; can be used again after returning the weapon promptly for 7 days",
      "endsWhen": "Returning it late or spending 100 XP to lift the curse early",
      "charges": "Unlimited, as long as returned on time"
    },
    "priceReason": "The balanced price reflects the high-quality and unique nature of the weapon, requiring significant XP for a monk to afford without selling gear.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-23T19:03:52.486155+00:00",
    "aiReviewedAt": "2026-07-23T19:03:52.486155+00:00",
    "aiReviewVersion": 1
  },
  "the_iron_fists_punch_glove_premium": {
    "id": "the_iron_fists_punch_glove_premium",
    "name": "The Iron Fists Punch Glove (Premium)",
    "description": "Enhance fisticuffs.",
    "price": 16500,
    "icon": "🥊",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Unarmed +1d4 damage once per day",
      "+1 Athletics for grapples",
      "Glove squeaks on hit",
      "Made by: Fist Fighters"
    ],
    "vendor": "the_iron_fists_dojo",
    "shippedBy": "Padded Mitt",
    "levelRequirement": 5
  },
  "the_onyx_hand_gloved_fingers": {
    "id": "the_onyx_hand_gloved_fingers",
    "name": "The Onyx Hand Gloved Fingers",
    "description": "The Onyx Hand Gloved Fingers are sleek, black leather gloves imbued with the essence of shadow and thievery. Crafted by the secretive Onyx Thieves guild from ancient, enchanted onyx, these gloves grant their wearer an advantage in any stealthy endeavor. The touch of these gloves leaves no trace behind—no fingerprints, no telltale residue—but they do leave a slight, sticky residue as if touched by shadow itself, causing minor grip issues while using tools.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧤",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Stealth checks",
      "No fingerprint or residue left"
    ],
    "vendor": "the_onyx_hand_guild",
    "shippedBy": "Shadow Stitch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Stealth Checks",
        "rules": "The Onyx Hand Gloved Fingers grant the wearer advantage on Dexterity (Stealth) checks. This effect lasts until the end of your next short rest."
      },
      {
        "title": "No Fingerprint or Residue",
        "rules": "When wearing these gloves, you leave no fingerprints or residues behind after touching objects. This effect is always active while worn but does not apply if the wearer actively tries to leave a mark."
      }
    ],
    "levelRequirementReason": "These gloves are designed for beginners and thieves-in-training who want to master the art of stealth.",
    "vendorReason": "The Onyx Thieves guild is known for its meticulous craftsmanship, ensuring these gloves meet their exacting standards for thievery.",
    "shippingDetail": "Delivery via Shadow Stitch takes three days but ensures the gloves arrive in pristine condition.",
    "usage": {
      "activation": "Passive effect while worn; requires no activation.",
      "duration": "Until the end of your next short rest or until removed.",
      "endsWhen": "The effect ends when you take a long rest or remove the gloves.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This price reflects the unique crafting process and materials used, as well as the guild's reputation for quality.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-23T19:04:31.080551+00:00",
    "aiReviewedAt": "2026-07-23T19:04:31.080551+00:00",
    "aiReviewVersion": 1
  },
  "the_onyx_hand_recipe_shadow_soup": {
    "id": "the_onyx_hand_recipe_shadow_soup",
    "name": "Recipe: The Onyx Hand Shadow Soup",
    "description": "The Onyx Hand Shadow Soup whispers secrets in darkness. When consumed within shadows, you gain advantage on Stealth checks for an hour, blending seamlessly into the night's embrace. However, exposure to bright light forces you to hide your true self: it imposes disadvantage on Charisma checks until you find a way to retreat into the dark again. The soup is invisible, defying sight and detection unless its aroma guides you to it.",
    "price": 1000,
    "icon": "📜",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Stealth Checks",
      "Disadvantage on Charisma in Bright Light"
    ],
    "vendor": "the_onyx_hand",
    "shippedBy": "Shadow Drop Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Stealth Checks",
        "rules": "Activates when consumed within darkness. Grants advantage on all Stealth checks for the next hour, after which it expires."
      },
      {
        "title": "Disadvantage on Charisma in Bright Light",
        "rules": "Forces disadvantage on all Charisma checks while exposed to bright light until you return to a dark environment or consume another serving of Shadow Soup."
      }
    ],
    "levelRequirementReason": "Beginners can learn the art of stealth and deception without requiring a high level.",
    "vendorReason": "The Onyx Hand Cooks specialize in shadow lore, offering this unique dish that enhances one's ability to move unseen.",
    "shippingDetail": "Delivered by the mysterious Shadow Drop Express, known for its reliable service through darkened routes.",
    "usage": {
      "activation": "Eaten within darkness",
      "duration": "1 hour",
      "endsWhen": "Exposure to bright light or after one hour",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a lower price point due to its limited duration and specific activation requirements.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-23T19:04:20.359064+00:00",
    "aiReviewedAt": "2026-07-23T19:04:20.359064+00:00",
    "aiReviewVersion": 1
  },
  "the_onyx_hand_shadow_pie_recipe": {
    "id": "the_onyx_hand_shadow_pie_recipe",
    "name": "Recipe: The Onyx Hand Shadow Pie ",
    "description": "The Onyx Hand Shadow Pie is a dark pie with an enigmatic allure. Its crust is as black as night, and the fruit within seems to shimmer with an otherworldly glow. This pie's flavors are elusive, like shadows that dance on the edge of perception. Bake it with care using only the darkest fruits—blackberries and elderberries—and consume a slice to gain minor invisibility in dim light for 1 minute. The pie vanishes if left untouched too long, spoiling quickly after its mysterious creation.",
    "price": 1000,
    "icon": "🥧",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Minor Invisibility",
      "Dark Fruit Requirement"
    ],
    "vendor": "the_onyx_hand_guild",
    "shippedBy": "Dark Crust Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Invisibility (Dim Light)",
        "rules": "Eating a slice grants the user minor invisibility in dim light for 1 minute. This effect ends if the user takes any action other than moving quietly or if they are exposed to bright light."
      },
      {
        "title": "Dark Fruit Requirement",
        "rules": "The pie requires blackberries and elderberries as ingredients, which must be used exactly as stated. The pie cannot be made with any other fruits."
      }
    ],
    "levelRequirementReason": "This recipe is simple enough for beginners but still retains its mysterious charm.",
    "vendorReason": "The Shadow Chefs, known for their mastery of dark and shadowy concoctions, are the only ones who can offer this pie’s unique formula.",
    "shippingDetail": "Delivered by Dark Crust Delivery, known for its swift and reliable service in delivering all manner of dark edibles.",
    "usage": {
      "activation": "Eating a slice",
      "duration": "1 minute",
      "endsWhen": "Taking an action other than moving quietly or being exposed to bright light",
      "charges": "Unlimited (one slice per pie)"
    },
    "priceReason": "The rare and dark ingredients, combined with the unique recipe, make this pie a valuable treat.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T19:04:34.338762+00:00",
    "aiReviewedAt": "2026-07-23T19:04:34.338762+00:00",
    "aiReviewVersion": 1
  },
  "the_onyx_hand_shadow_puppet_service": {
    "id": "the_onyx_hand_shadow_puppet_service",
    "name": "The Onyx Hand Shadow Puppet Service",
    "description": "The Onyx Hand Shadow Puppet Service transforms your hand into an illusory puppet, casting mobile shadows that dance and distort light. Crafted by the secretive Onyx Puppeteers, this service can create distracting, lifelike illusions that might even tell dad jokes if overused, adding a whimsical yet dangerous edge to any performance. With each use, you can command these shadows for a moment of distraction, giving your hands a second life in the art of misdirection.",
    "price": 1000,
    "icon": "🖐️",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Shadow Puppet Distraction",
      "Misdirection Advantage"
    ],
    "vendor": "the_onyx_hand_theater",
    "shippedBy": "Dark Hand Delivery",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shadow Puppet Distraction",
        "rules": "You can activate this service as an action, creating a mobile shadow that moves up to your speed for one minute. The shadow is a Tiny creature and can be used to create illusions that distract opponents. You have advantage on Dexterity (Sleight of Hand) checks made during the distraction."
      },
      {
        "title": "Misdirection Advantage",
        "rules": "For each use, you gain advantage on Sleight of Hand checks for 1 hour after using this service. This effect can be used once per day."
      }
    ],
    "levelRequirementReason": "Requires basic dexterity and hand-eye coordination to effectively manipulate the shadows.",
    "vendorReason": "The Onyx Puppeteers are renowned for their shadow puppetry, making this service one of their most sought-after items.",
    "shippingDetail": "Ships via dark courier, ensuring the shadows arrive in perfect form.",
    "usage": {
      "activation": "Action",
      "duration": "One minute",
      "endsWhen": "The puppet's duration ends or it is destroyed by physical contact with a solid object.",
      "charges": "Once per day"
    },
    "priceReason": "Crafted from onyx and imbued with complex puppeteering magic, this service commands a price befitting its unique capabilities.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-23T19:05:04.370119+00:00",
    "aiReviewedAt": "2026-07-23T19:05:04.370119+00:00",
    "aiReviewVersion": 1
  },
  "the_onyx_hand_shadow_stirrer": {
    "id": "the_onyx_hand_shadow_stirrer",
    "name": "The Onyx Hand Shadow Stirrer ",
    "description": "The Onyx Hand Shadow Stirrer is a delicate spoon crafted from dark onyx, its surface etched with ancient runes that whisper of forgotten rituals. This stirring tool can vanish into shadow when not in use, reappearing instantly at your command. When used to stir shadow pies, it enhances the cook's skill by +1 in darkness and introduces an eerie flavor that lingers like a minor illusion, making each bite seem as if the pie is dancing before one’s eyes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥧",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Shadowy Stir",
      "Eerie Flavor"
    ],
    "vendor": "the_onyx_hand_guild",
    "shippedBy": "Shadowy Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shadowy Stir",
        "rules": "When used to stir shadow pies in darkness, the Onyx Hand Shadow Stirrer grants the cook a +1 bonus to cooking checks. Additionally, it creates an eerie flavor effect that lasts for 1 minute, during which time any creature who eats the pie must succeed on a DC 13 Wisdom saving throw or be frightened until the end of their next turn."
      },
      {
        "title": "Eerie Flavor",
        "rules": "The spoon's shadowy essence infuses each bite with an eerie flavor that lasts for 1 hour. Any creature who consumes food stirred by this spoon must make a DC 13 Constitution saving throw or become nauseated for 1 minute."
      }
    ],
    "levelRequirementReason": "Even the simplest cook can appreciate the elegance and utility of stirring shadow pies.",
    "vendorReason": "The Onyx Hand Guild specializes in arcane tools that aid in dark magic rituals, including culinary arts that involve shadow ingredients.",
    "shippingDetail": "The spoon is carefully wrapped and shipped via the Shadowy Courier to ensure it arrives intact, as even a scratch could disrupt its magical properties.",
    "usage": {
      "activation": "Use an action to stir with the spoon in darkness while preparing shadow pies. The eerie flavor effect activates upon consumption of the pie.",
      "duration": "Eerie Flavor lasts for 1 hour; Shadowy Stir effects last until the end of a cooking check or when the pie is consumed.",
      "endsWhen": "The effects are dispelled by light, sunlight, or when the pie is consumed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP as it provides flavorful and thematic benefits without overshadowing other cooking tools.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T19:05:10.056799+00:00",
    "aiReviewedAt": "2026-07-23T19:05:10.056799+00:00",
    "aiReviewVersion": 1
  },
  "the_onyx_hand_stealth_hoodie": {
    "id": "the_onyx_hand_stealth_hoodie",
    "name": "The Onyx Hand Stealth Hoodie",
    "description": "The Onyx Hand Stealth Hoodie is a sleek, dark garment that seamlessly blends you into your surroundings. Crafted by The Onyx Hand Tailors from enchanted onyx threads, this hoodie makes you nearly invisible in urban settings, allowing you to slip unnoticed past guards and NPCs alike. However, its pockets are so expansive they can hold up to 10 pounds of items, though the wearer risks losing track of what they've stored inside. The hoodie's Wi-Fi is a joke among tech-savvy friends; it renders any communication-based checks impossible.",
    "category": "equipment",
    "price": 1000,
    "icon": "👕",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Stealth in Urban Areas",
      "Forgetful Pockets"
    ],
    "vendor": "the_onyx_hand",
    "shippedBy": "Shadow Drop Courier Service",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Stealth in Urban Areas",
        "rules": "When wearing this hoodie, you have advantage on Dexterity (Stealth) checks to avoid notice in urban environments. The effect lasts until the start of your next turn after removing it."
      },
      {
        "title": "Forgetful Pockets",
        "rules": "The hoodie's pockets are so spacious that they can hold up to 10 pounds of items, but you must make a DC 15 Intelligence saving throw at the end of each long rest. On a failed save, you lose track of one item stored in the pocket."
      }
    ],
    "levelRequirementReason": "The hoodie's enchantments are subtle and require a basic understanding of spellcasting.",
    "vendorReason": "The Onyx Hand Tailors specialize in crafting items that enhance one specific aspect, making this hoodie their specialty.",
    "shippingDetail": "Ships discreetly and arrives within a week of order placement.",
    "usage": {
      "activation": "Passive effect while wearing the hoodie.",
      "duration": "Until removed.",
      "endsWhen": "The start of your next turn after removing it.",
      "charges": "Unlimited, as long as you wear it."
    },
    "priceReason": "Balanced at this price to reflect the hoodie's utility without overshadowing more powerful items.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-23T19:04:55.840005+00:00",
    "aiReviewedAt": "2026-07-23T19:04:55.840005+00:00",
    "aiReviewVersion": 1
  },
  "the_toad_cult_frog_hop_funnel": {
    "id": "the_toad_cult_frog_hop_funnel",
    "name": "The Toad Cult Frog Hop Funnel ",
    "description": "The Toad Cult Frog Hop Funnel is a quirky, brass funnel with a spring-loaded frog etched into its side. When poured, it mimics a frog's hop, bouncing liquids up to ten feet in any direction. Crafted by the whimsical Toad Toolers of the marshy Boglands, this funnel grants advantage on recipes involving amphibious ingredients. However, if hopped too vigorously, it spills whatever is inside, requiring a steady hand and finesse.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍤",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Bouncing Brews",
      "Liquids Leaper"
    ],
    "vendor": "the_toad_cult_bog",
    "shippedBy": "Hop Funnel Haul",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bouncing Brews",
        "rules": "When used to pour liquids, the funnel hovers up to ten feet in any direction, granting advantage on checks and saves related to amphibian recipes. The duration is instantaneous upon activation, and it ends when the liquid stops bouncing."
      },
      {
        "title": "Liquids Leaper",
        "rules": "If poured too vigorously or with excessive force, the funnel spills its contents. This requires a DC 12 Dexterity saving throw to prevent the spillage; on a failed save, the funnel's contents are wasted immediately."
      }
    ],
    "levelRequirementReason": "A basic skill in potion-making is required to utilize this item effectively.",
    "vendorReason": "The Toad Cult Bog specializes in items that enhance the magical and culinary prowess of amphibious creatures, making it a natural seller for this unique funnel.",
    "shippingDetail": "Delivered via Hop Funnel Haul, known for their precision in handling fragile funnels and other delicate equipment.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Instantaneous; ends when the liquid stops bouncing or spills",
      "endsWhen": "Spills if hopped too much",
      "charges": "Unlimited, but requires steady hands"
    },
    "priceReason": "Balanced to fit within a reasonable price for an uncommon item that provides both utility and challenge.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-23T19:05:05.847243+00:00",
    "aiReviewedAt": "2026-07-23T19:05:05.847243+00:00",
    "aiReviewVersion": 1
  },
  "the_toad_cult_frog_leap_boots_service": {
    "id": "the_toad_cult_frog_leap_boots_service",
    "name": "The Toad Cult Frog Leap Boots Service",
    "description": "These boots are crafted from the sacred hide of toad spirits and imbued with ancient magic. When you wear them, your feet transform into agile toad legs, allowing you to leap with grace and power. You can leap up to 15 feet in a single bound, gaining advantage on any jump checks or related ability checks. Upon landing, the boots emit a soft ribbit as if to mark your passage through the world.",
    "price": 1000,
    "icon": "👢",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Leap Like a Toad",
      "Advantage on Jump Checks"
    ],
    "vendor": "the_toad_cult_bog",
    "shippedBy": "Slimy Socks Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Leap Like a Toad",
        "rules": "You can use an action to make a Leap Like a Toad. You leap up to 15 feet in any direction, making the jump at your movement speed without needing to spend additional movement."
      },
      {
        "title": "Advantage on Jump Checks",
        "rules": "While wearing these boots, you gain advantage on all Strength (Athletics) checks that involve jumping. This effect lasts until the end of your next short or long rest."
      }
    ],
    "levelRequirementReason": "These boots are crafted for adventurers just starting their journey and require no prior experience.",
    "vendorReason": "The Toad Cult is known for its reverence of toad spirits, making them the perfect purveyors of these magical footwear.",
    "shippingDetail": "Delivered by a fleet of enchanted amphibious courier frogs. The boots are carefully packed in waterproof containers to ensure their integrity during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous leap, lasts until the end of your next short or long rest for jump checks advantage",
      "endsWhen": "Ends at the start of your next short or long rest",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from sacred toad hide and imbued with ancient magic, these boots offer a unique advantage without requiring an uncommon level.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-23T19:05:12.845606+00:00",
    "aiReviewedAt": "2026-07-23T19:05:12.845606+00:00",
    "aiReviewVersion": 1
  },
  "the_toad_cult_frog_legs_fritters_recipe": {
    "id": "the_toad_cult_frog_legs_fritters_recipe",
    "name": "Recipe: The Toad Cult Frog Legs Fritters ",
    "description": "The Toad Cult Frog Legs Fritters Recipe, a fragrant elixir of fried delicacy, is the heart of the Toad Cult's sacred feasts. These crispy fritters are not just a meal; they are an ancient ritual that elevates the eater to new heights, granting them leaping prowess unmatched by mere mortals. The secret lies in the arcane herbs and sacred fire used by the cult fryers, who have honed this craft over centuries of hoppy meals and ribbit-y chants.",
    "price": 1000,
    "icon": "🍤",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Crispy Jump Boost",
      "Sacred Herb Flare"
    ],
    "vendor": "the_toad_cult_bog",
    "shippedBy": "Hoppin Hot Handbook",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Crispy Jump Boost",
        "rules": "Eating these fritters grants the eater a +10 foot increase to their jump distance for one hour. This effect is immediate upon consumption and lasts until the duration ends."
      },
      {
        "title": "Sacred Herb Flare",
        "rules": "For 1d4 rounds after consuming, the eater gains advantage on Dexterity (Acrobatics) checks and saving throws related to balance and agility. This effect cannot be used more than once per long rest."
      }
    ],
    "levelRequirementReason": "Even the novice can partake in this sacred recipe, as its power lies in the ritual rather than raw strength.",
    "vendorReason": "The Toad Cult Fryers are the only ones who know how to craft these fritters with the right arcane herbs and fire.",
    "shippingDetail": "Delivered fresh from the bog, these fritters arrive piping hot in their signature bamboo containers.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "One hour or until the eater finishes a long rest",
      "endsWhen": "The duration ends after one hour or when the eater completes a long rest",
      "charges": "Unlimited, as each eating session renews the effect"
    },
    "priceReason": "Balanced at 1000 XP, this recipe reflects its unique blend of culinary and magical elements.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-23T19:05:35.457124+00:00",
    "aiReviewedAt": "2026-07-23T19:05:35.457124+00:00",
    "aiReviewVersion": 1
  },
  "the_toad_cult_slime_slippers": {
    "id": "the_toad_cult_slime_slippers",
    "name": "The Toad Cult Slime Slippers ",
    "description": "These squishy slippers are crafted from the softest bog slime, dyed with vibrant colors by the Toad Cultists. They leave a trail of slick mud behind you as you walk, making your enemies slip on their own footsteps. The Toad Cult Slime Slippers whisper secrets to you in the muck, granting advantage on Dexterity saving throws when navigating through muddy terrain. Their squishy texture and vibrant hues make them unmistakable among other footwear.",
    "price": 1000,
    "icon": "👡",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Dexterity Saves",
      "Slippery Footprints"
    ],
    "vendor": "the_toad_cult_bog",
    "shippedBy": "Slimy Sole Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Dexterity Saves",
        "rules": "When you are in muddy terrain, you have advantage on Dexterity saving throws. This effect lasts until the end of your next turn after leaving mud."
      },
      {
        "title": "Slippery Footprints",
        "rules": "As a bonus action, you leave behind a trail of slick mud that makes creatures within 5 feet of where you step at disadvantage on Dexterity saving throws for 1 minute. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "These slippers are simple yet effective, requiring no high-level magic or expertise.",
    "vendorReason": "The Toad Cultists are known for their craftsmanship and the use of unique materials in their creations.",
    "shippingDetail": "Delivered within a day, ensuring they arrive fresh from the bog.",
    "usage": {
      "activation": "Bonus action to leave slippery footprints",
      "duration": "1 minute per use",
      "endsWhen": "Ends after your next turn when you leave muddy terrain or once per long rest for slipper prints",
      "charges": "Unlimited, but only one activation of the slippery footprints effect"
    },
    "priceReason": "The price reflects the unique materials and craftsmanship required to create these slippers.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-23T19:05:21.481280+00:00",
    "aiReviewedAt": "2026-07-23T19:05:21.481280+00:00",
    "aiReviewVersion": 1
  },
  "the_toad_gang_marsh_muck_boots": {
    "id": "the_toad_gang_marsh_muck_boots",
    "name": "The Toad Gang Marsh Muck Boots",
    "description": "Boots for slogging through swamps.",
    "category": "equipment",
    "price": 12000,
    "icon": "👢",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Ignore mud difficult terrain",
      "+1 to Strength (Athletics) in bogs",
      "Boots squelch loudly",
      "Made by: Gang Mudders"
    ],
    "vendor": "the_toad_gang_swamp",
    "shippedBy": "Muck Mud",
    "levelRequirement": 5
  },
  "the_toad_gang_marsh_muck_strainer": {
    "id": "the_toad_gang_marsh_muck_strainer",
    "name": "The Toad Gang Marsh Muck Strainer",
    "description": "The Toad Gang Marsh Muck Strainer is a sturdy, hand-hammered metal funnel that channels through the muddiest bog water. Crafted by the Toad Gang from iron reclaimed in swamp scrap drives, it grants advantage on checks to cook ingredients over open flames and repels mud, clogging only when used too often. The gang's signature logo etched into its handle hints at the secret ingredient in their famous swamp stew.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍲",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Cooking Checks",
      "Mud Repellant"
    ],
    "vendor": "the_toad_gang_hideout",
    "shippedBy": "Muck Mesh Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Cooking Checks",
        "rules": "When using this strainer to prepare swamp ingredients, the user gains advantage on checks made with the Survival or Nature skill. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Mud Repellant",
        "rules": "This strainer can be activated as a bonus action to repel mud and water from its surface, rendering it immune to being clogged for 1 hour. Failing to do so within the first three uses results in the item becoming clogged."
      }
    ],
    "levelRequirementReason": "This simple but effective tool is suitable for beginners who need to master cooking over open flames.",
    "vendorReason": "The Toad Gang hides out in the swamps, and they're known for their expertise with marsh ingredients and tools.",
    "shippingDetail": "Ships via Muck Mesh Mail's swamp courier network, which is notorious for its unpredictable schedules. Expect a delay of at least one week due to the treacherous swamp conditions.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous effect; lasts for 1 hour",
      "endsWhen": "Clogged or used too often (3 times within 24 hours)",
      "charges": "Unlimited, but clogs after excessive use"
    },
    "priceReason": "Reflects the quality craftsmanship and specialized materials used in its construction.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-23T19:05:41.656760+00:00",
    "aiReviewedAt": "2026-07-23T19:05:41.656760+00:00",
    "aiReviewVersion": 1
  },
  "the_toad_gang_toad_in_the_hole_recipe": {
    "id": "the_toad_gang_toad_in_the_hole_recipe",
    "name": "Recipe: The Toad Gang Toad in the Hole",
    "description": "This ancient parchment, stained with bog mud and inscribed in a cryptic dialect, details The Toad Gang's secret recipe for 'Toad in the Hole.' When baked, it produces a savory pudding encasing meaty sausages. This dish not only brings bravery to those consumed but also strengthens their resolve against fear. Only the Toad Gang's trusted members can obtain this recipe, handed down from generation to generation within their secretive hideout.",
    "price": 1000,
    "icon": "🥧",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Swamp Bravery",
      "Devouring Meat"
    ],
    "vendor": "the_toad_gang_hideout",
    "shippedBy": "Hole-y Batter Book",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Swamp Bravery",
        "rules": "Eating the Toad in the Hole grants you advantage on saving throws against being frightened while in a swamp or bog for 2 hours. This effect can only be used once per long rest."
      },
      {
        "title": "Devouring Meat",
        "rules": "After consuming the dish, you gain temporary hit points equal to twice your level (maximum of 40) until the start of your next short or long rest."
      }
    ],
    "levelRequirementReason": "The recipe is simple enough for even a novice adventurer to prepare.",
    "vendorReason": "Only the Toad Gang, known for their culinary prowess and bravery, can provide this ancient recipe.",
    "shippingDetail": "The delivery is made by a courier who hops from bog to bog on a series of springy toads' backs, ensuring timely arrival.",
    "usage": {
      "activation": "Eating the dish",
      "duration": "2 hours or until consumed",
      "endsWhen": "Ends when the effect duration expires or you eat another Toad in the Hole dish",
      "charges": "Unlimited"
    },
    "priceReason": "The recipe's rarity and the secretive nature of its origin justify this balanced price.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T19:05:33.983651+00:00",
    "aiReviewedAt": "2026-07-23T19:05:33.983651+00:00",
    "aiReviewVersion": 1
  },
  "the_toad_gang_toadstool_identification": {
    "id": "the_toad_gang_toadstool_identification",
    "name": "The Toad Gang Toadstool Identification",
    "description": "The Toad Gang Toadstool Identification is a small, intricately carved wooden box adorned with dried toadstools. It grants you an expert knowledge of local fungi and toadstools, allowing you to quickly identify their species and potential dangers. The Toad Gang Mycologists have crafted it from the bark of ancient toadstool trees, ensuring its accuracy is unmatched. For a week after using this box, you gain advantage on Nature checks related to fungi. Additionally, by licking the included sample (not recommended), you can instantly identify any toadstool within 30 feet.",
    "category": "services",
    "price": 1000,
    "icon": "🍄",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Advantage on Fungi Identification",
      "Instantaneous Toadstool Identification"
    ],
    "vendor": "the_toad_gang",
    "shippedBy": "Toad Hop Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Fungi Identification",
        "rules": "You gain advantage on all Nature checks related to fungi for one week after using the box. This effect is instantaneous upon activation."
      },
      {
        "title": "Instantaneous Toadstool Identification",
        "rules": "By licking the included sample (not recommended), you can instantly identify any toadstool within 30 feet. This ability has a limited use, and using it again without recharging it is not advised."
      }
    ],
    "levelRequirementReason": "This item's utility for beginners makes it accessible at level 1.",
    "vendorReason": "The Toad Gang Mycologists are renowned experts in fungi and toadstool identification, ensuring the box’s accuracy.",
    "shippingDetail": "Delivered by Toad Hop Express within a week of purchase. The box must be handled with care as it contains fragile samples.",
    "usage": {
      "activation": "Use an action to activate, or use a bonus action for the toadstool identification ability.",
      "duration": "Instantaneous; advantage lasts one week after first activation.",
      "endsWhen": "The effect ends if you no longer need it or upon reusing without recharging.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, this item provides a useful service for beginners and seasoned adventurers alike.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T19:05:52.415243+00:00",
    "aiReviewedAt": "2026-07-23T19:05:52.415243+00:00",
    "aiReviewVersion": 1
  },
  "the_toad_gang_toadstool_mush_premium": {
    "id": "the_toad_gang_toadstool_mush_premium",
    "name": "The Toad Gang Toadstool Mush (Premium)",
    "description": "The Toad Gang Toadstool Mush Premium, a waxy mushroom capped in glowing neon green and red stripes, is said to have been foraged from ancient swamps by the Toad Gang. Consuming it grants you either healing or an illusory boon—50% chance each—but beware: its effects can trip you up if not consumed carefully. This rare delicacy offers a unique survival advantage in marshy terrains, making it invaluable to adventurers navigating treacherous swamps.",
    "price": 1000,
    "icon": "🍄",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Heal or Illusion",
      "Advantage on Survival"
    ],
    "vendor": "the_toad_gang_hideout",
    "shippedBy": "Mush Jar Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heal or Illusion",
        "rules": "Upon consumption, roll a d6. On an even result, you heal 1d6 hit points; on an odd result, you gain advantage on one saving throw until the end of your next turn."
      },
      {
        "title": "Advantage on Survival in Swamps",
        "rules": "While within a swamp, you have advantage on Survival checks. This effect lasts for 1 hour after consuming the mushroom."
      }
    ],
    "levelRequirementReason": "This toadstool is accessible to beginners who might benefit from its unique survival advantages.",
    "vendorReason": "The Toad Gang, known for their foraging skills, have perfected the art of cultivating and distributing this premium mushroom.",
    "shippingDetail": "Delivered via a specialized Mush Jar that ensures freshness during transit.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "Instantaneous healing, advantage lasts until end of next turn or until used",
      "endsWhen": "Effect ends when the duration expires or if consumed incorrectly (trip)",
      "charges": "Unlimited"
    },
    "priceReason": "The rare and labor-intensive foraging by the Toad Gang justifies this price, offering a unique and essential survival tool.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-23T19:06:35.368263+00:00",
    "aiReviewedAt": "2026-07-23T19:06:35.368263+00:00",
    "aiReviewVersion": 1
  },
  "the_unchained_chain_breaker_tool_service": {
    "id": "the_unchained_chain_breaker_tool_service",
    "name": "The Unchained Chain Breaker Tool Service",
    "description": "The Unchained Chain Breaker Tool Service is a durable iron tool forged from the remnants of broken manacles. Crafted by Freedom Fighters, it hums with residual magic that makes even the most stubborn chains yield. This tool grants you advantage on escape checks and can be used to break one set of manacles per day. A symbol of freedom and defiance, this service ensures that no chain is too strong for your resolve.",
    "price": 1000,
    "icon": "🔗",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Break Manacles",
      "Advantage on Escape Checks"
    ],
    "vendor": "the_unchained_camp",
    "shippedBy": "Freedom Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Break Manacles",
        "rules": "When you use an action to break manacles with this tool, it has a 10% chance of bending if overused. You can attempt to break one set of manacles per day."
      },
      {
        "title": "Advantage on Escape Checks",
        "rules": "While holding The Unchained Chain Breaker Tool Service, you have advantage on checks made to escape from bonds or restraints."
      }
    ],
    "levelRequirementReason": "This tool is designed for those who are just starting their journey of freedom and defiance.",
    "vendorReason": "The Unchained Camp specializes in tools that empower those fighting against chains, both literal and metaphorical.",
    "shippingDetail": "Ships via Freedom Courier within a week. Expedited delivery available for an additional cost.",
    "usage": {
      "activation": "Action to use the tool or take the escape check.",
      "duration": "Instantaneous when used, lasts until complete.",
      "endsWhen": "Exhausted after one use per day.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced at a price that reflects the tool's utility and rarity without being overpowered.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-23T19:05:56.964201+00:00",
    "aiReviewedAt": "2026-07-23T19:05:56.964201+00:00",
    "aiReviewVersion": 1
  },
  "the_unchained_freedom_chains_cuffs": {
    "id": "the_unchained_freedom_chains_cuffs",
    "name": "The Unchained Freedom Chains Cuffs ",
    "description": "The Unchained Freedom Chains Cuffs are sleek, iron bracelets that have been meticulously handcrafted by the Unchained Smiths. These cuffs not only serve as a stylish adornment but also whisper rebellion in every clank. When worn, they grant you advantage on saving throws against being restrained and provide +1 Inspiration each time you hear their distinctive sound. The Unchained Smiths have long been known for their revolutionary designs, and these cuffs are no exception—crafted to inspire freedom and resilience.",
    "price": 1000,
    "icon": "📿",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Advantage on saves vs. restraint",
      "Inspiration from clank"
    ],
    "vendor": "the_unchained_fort",
    "shippedBy": "Swift Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Advantage on Saves vs. Restraint",
        "rules": "While wearing the Unchained Freedom Chains Cuffs, you gain advantage on saving throws against being restrained. This effect lasts until the start of your next turn."
      },
      {
        "title": "Inspiration from Clank",
        "rules": "Each time you hear the distinctive clank of these cuffs, you gain +1 Inspiration. You can use this effect a number of times equal to your Charisma modifier (minimum 1). Refreshed once per short or long rest."
      }
    ],
    "levelRequirementReason": "This item is suitable for characters who have just begun their journey and could benefit from its inspirational boost.",
    "vendorReason": "The Unchained Fort specializes in items that promote freedom and resilience, making these cuffs a perfect fit.",
    "shippingDetail": "Ships via Swift Courier within a week of purchase.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the start of your next turn or until removed.",
      "endsWhen": "The effects end when the cuffs are removed or destroyed.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "This price reflects the craftsmanship and the inspirational value of these cuffs, suitable for characters who need a little boost at the start of their adventures.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T19:06:32.365805+00:00",
    "aiReviewedAt": "2026-07-23T19:06:32.365805+00:00",
    "aiReviewVersion": 1
  },
  "the_unchained_liberty_fruit_salad_recipe": {
    "id": "the_unchained_liberty_fruit_salad_recipe",
    "name": "Recipe: The Unchained Liberty Fruit Salad ",
    "description": "The Unchained Liberty Fruit Salad Recipe is a vibrant mix of wild, untamed fruits that burst with freedom. This recipe teaches you how to prepare a salad that not only satisfies the palate but also liberates your spirit for an hour. When you eat it, you gain +1 on saving throws against being restrained or chained for 2 hours. The recipe requires fresh, unbound produce and is crafted by Unchained Foragers who believe in breaking metaphorical bonds with every bite.",
    "price": 1000,
    "icon": "🥗",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Breaks Metaphorical Chains",
      "Freedom-Flavored Salad"
    ],
    "vendor": "the_unchained_camp",
    "shippedBy": "Free Fruit Folio",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Freedom-Flavored Salad",
        "rules": "When you eat the salad, you gain +1 on saving throws against being restrained or chained for a duration of 2 hours. This effect cannot be used again until you finish a long rest."
      },
      {
        "title": "Breaks Metaphorical Chains",
        "rules": "The recipe teaches you how to prepare a salad that provides temporary freedom from restraints and chains when consumed. Once prepared, the recipe can only be used once before it is exhausted."
      }
    ],
    "levelRequirementReason": "A basic knowledge of cooking is sufficient for this recipe.",
    "vendorReason": "The Unchained Camp specializes in recipes that promote freedom and liberation, making it the ideal vendor for this recipe.",
    "shippingDetail": "Ships fresh with a special delivery method ensuring the salad's ingredients remain unbound until consumption.",
    "usage": {
      "activation": "Eating the salad",
      "duration": "2 hours on saving throws, once per long rest",
      "endsWhen": "After 2 hours or when used up during a long rest",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The recipe's unique ingredients and the time required to prepare it justify its moderate price.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-23T19:06:09.965387+00:00",
    "aiReviewedAt": "2026-07-23T19:06:09.965387+00:00",
    "aiReviewVersion": 1
  },
  "the_unchained_liberty_loaf_pan": {
    "id": "the_unchained_liberty_loaf_pan",
    "name": "The Unchained Liberty Loaf Pan ",
    "description": "The Unchained Liberty Loaf Pan is a sleek, chain-free pan that allows for the creation of free-form loaves with perfect rise and shape. Crafted by the rebellious Unchained Bakers, this pan ensures no mold or chain can confine its dough's natural form. With each use, bakers experience +1 to their creative cooking rolls, and the pan itself never sticks, freeing up every moment for more delicious culinary experiments.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍞",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Freedom from Mold",
      "Creative Boost"
    ],
    "vendor": "the_unchained_camp",
    "shippedBy": "Free Form Fold",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Freedom from Mold",
        "rules": "The Unchained Liberty Loaf Pan breaks free of any mold or form, allowing the baker to shape dough into any desired form. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Creative Boost",
        "rules": "+1 bonus to all creative cooking rolls when using this pan. This effect lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This pan is designed for beginning bakers and those looking to break free from tradition.",
    "vendorReason": "The Unchained Bakers sell this pan as part of their commitment to culinary freedom and innovation.",
    "shippingDetail": "Ships via Free Form Fold, known for its reliable delivery with no additional charges.",
    "usage": {
      "activation": "Instantaneous; no action required",
      "duration": "Until the end of your next long rest",
      "endsWhen": "The effect ends at the start of your next short or long rest",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced price reflects its uncommon status and the unique benefits it offers to bakers.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-23T19:06:49.504600+00:00",
    "aiReviewedAt": "2026-07-23T19:06:49.504600+00:00",
    "aiReviewVersion": 1
  },
  "thick_gumbo_with_crawfish_and": {
    "id": "thick_gumbo_with_crawfish_and",
    "name": "Recipe: Lizardmen Swamp Gumbo",
    "description": "The Recipe: Lizardmen Swamp Gumbo is a thick, rich stew simmered in the swampy waters of Zinj’s Bayou. The gumbo's deep brown broth simmers with okra and crawfish, flavored by the very mud that churns beneath the bayou. This dish not only strengthens your resilience but also deepens your connection to the wild. Lizard Chefs from the village of Kharulok share their secrets with those who brave the swamp’s mysteries.",
    "price": 1000,
    "icon": "🍲",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Simmered Resilience",
      "Wild Knowledge"
    ],
    "vendor": "lizardmen_village",
    "shippedBy": "Boggy Broth Book",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Simmered Resilience",
        "rules": "Eating this gumbo grants you advantage on Swimming checks and resistance to disease for 1 hour. The stew's thick consistency provides a tangible boost to your watery endurance, while the swamp’s flavors cleanse foreign pathogens."
      },
      {
        "title": "Wild Knowledge",
        "rules": "For 8 hours after consuming this gumbo, you gain proficiency with Animal Handling checks when interacting with creatures native to swamps or jungles. This knowledge comes from the very essence of Zinj’s Bayou and its custodians."
      }
    ],
    "levelRequirementReason": "Anyone can benefit from this swampy wisdom, but only those who show respect for the wild can truly appreciate it.",
    "vendorReason": "The Lizardmen of Kharulok are proud stewards of their culinary heritage and share these secrets with those who prove their worth by venturing into Zinj’s Bayou.",
    "shippingDetail": "Ships via the Muckmaster Express, ensuring delivery through the swamps' treacherous waters without spilling a drop of this precious gumbo.",
    "usage": {
      "activation": "Eating one portion of Lizardmen Swamp Gumbo",
      "duration": "1 hour and 8 hours of additional effect after consumption",
      "endsWhen": "The effects expire naturally at the end of their duration or if you consume another such dish within that time.",
      "charges": "Unlimited, as long as you do not consume it more than once per day."
    },
    "priceReason": "Balanced to reflect the unique ingredients and labor-intensive preparation of this swamp delicacy.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T19:07:04.652187+00:00",
    "aiReviewedAt": "2026-07-23T19:07:04.652187+00:00",
    "aiReviewVersion": 1
  },
  "thin_wafers_that_expand_in": {
    "id": "thin_wafers_that_expand_in",
    "name": "Wario's  Wafer Cookies",
    "description": "Wario's Wafer Cookies are thin, delicate pastries that, upon consumption, rapidly expand within your digestive tract, granting a temporary +1 to Constitution for a full feeling. However, these cookies not only bloat you but also hinder your agility; after eating them, you suffer disadvantage on Dexterity checks and saving throws until the effect wears off. Additionally, those who enjoy baking or are fans of Wario's signature cookie recipe gain advantage in Persuasion attempts related to culinary topics.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍪",
    "stock": 13,
    "rarity": "common",
    "effects": [
      "Bloat",
      "Constitution Boost"
    ],
    "vendor": "wario_land",
    "shippedBy": "Crunchy Crate Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bloat",
        "rules": "You suffer disadvantage on Dexterity checks and saving throws until the effect ends. The effect lasts for 1 hour after consuming the cookies."
      },
      {
        "title": "Constitution Boost",
        "rules": "Upon eating a Wario's Wafer Cookie, you gain temporary +1 to Constitution for a full feeling. This effect is instantaneous upon consumption and does not require an action."
      }
    ],
    "levelRequirementReason": "These cookies are designed for adventurers of all levels but are particularly useful for those who need to maintain their physical resilience.",
    "vendorReason": "Wario's Land is known for its quirky and often questionable food items, and these cookies are a prime example of his whimsical creations.",
    "shippingDetail": "Due to the unusual nature of Wario's products, they may arrive in a slightly inflated state, but their effects do not activate until consumed.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "1 hour after consumption",
      "endsWhen": "The effect ends when the duration expires or you consume another Wario's Wafer Cookie of the same type within a short rest period, which resets the timer.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the unique and potentially dangerous nature of these cookies, as well as their whimsical origin.",
    "priceOriginal": 4300,
    "priceReviewedAt": "2026-07-23T19:07:00.790221+00:00",
    "aiReviewedAt": "2026-07-23T19:07:00.790221+00:00",
    "aiReviewVersion": 1
  },
  "this_obsidian_key_was_forged": {
    "id": "this_obsidian_key_was_forged",
    "name": "Onyx Hand Key",
    "description": "This obsidian key was forged by the last surviving member of the Onyx Hand before their banishment by the Regal Empire. Its surface is etched with arcane symbols that shimmer faintly under moonlight, and it hums softly when approached by a true believer in the Supernatural Sovereignty Act. The key's power lies in its ability to unlock hidden vaults beneath the Shadowfell’s deepest roots, but those who doubt the Regal Empire risk blinding themselves for days.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔑",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Unlocks hidden vaults",
      "Causes temporary blindness if wielded by a non-believer"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Cheep Cheep Shipping",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Unlock Hidden Vaults",
        "rules": "The key can be used as an action to unlock a hidden vault beneath the Shadowfell or Earth Land zones. The user must make a Wisdom (Perception) check against DC 15; on a failure, the key shatters and the attempt is wasted."
      },
      {
        "title": "Temporary Blindness",
        "rules": "If wielded by someone who does not believe in the Supernatural Sovereignty Act, the user becomes blinded for 24 hours. This effect has no save DC but can be ended early if the user regains their sight through other means."
      }
    ],
    "levelRequirementReason": "The key's power is tied to deep arcane knowledge and a firm belief in the Supernatural Sovereignty Act, both of which require significant experience.",
    "vendorReason": "Dungeon Keepers Isles are known for their connections with ancient relics and artifacts from forbidden guilds like the Onyx Hand.",
    "shippingDetail": "The key is fragile and must be shipped in a specially padded box to avoid damage during transit, adding an extra day to the delivery time.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; lasts until the user regains their sight or the key shatters",
      "endsWhen": "The key shatters upon failure to unlock a vault or if wielded by someone who does not believe in the Supernatural Sovereignty Act",
      "charges": "Unlimited, but only one use per day"
    },
    "priceReason": "The item is crafted from rare materials and requires significant magical energy to forge, balancing its high price with a moderate level requirement.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T19:06:51.574430+00:00",
    "aiReviewedAt": "2026-07-23T19:06:51.574430+00:00",
    "aiReviewVersion": 1
  },
  "thunder_leaf": {
    "id": "thunder_leaf",
    "name": "Thunder Leaf",
    "description": "The Thunder Leaf crackles with raw, unrefined lightning. When you grip it during a melee attack, sparks fly and the air hums with an electric charge that turns your strike into a bolt of pure electricity. After use, the leaf smolders for a moment before returning to its dormant state, leaving behind a faint scent of ozone. This leaf can ignite flammable materials within reach when struck, making it both a deadly weapon and a dangerous companion.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍃",
    "stock": 6,
    "rarity": "epic",
    "effects": [
      "Melee Attack Boost",
      "Flame Ignition"
    ],
    "vendor": "storm_seller",
    "shippedBy": "Thundercloud Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Melee Attack Boost",
        "rules": "When you use your action to make a melee attack, the Thunder Leaf channels a bolt of lightning into your strike. The target takes an additional 1d8 lightning damage and you have advantage on Acrobatics checks until the start of your next turn."
      },
      {
        "title": "Flame Ignition",
        "rules": "If you strike a flammable material with the Thunder Leaf, it ignites immediately after use. This has a range of 10 feet, and you must be able to see the target material to ignite it."
      }
    ],
    "levelRequirementReason": "The power contained within the Thunder Leaf is potent enough that only those with at least fifth level can safely wield its might.",
    "vendorReason": "The storm seller, known for her mastery of weather magic, sells items that channel the raw forces of nature. The Thunder Leaf is a perfect example of her wares.",
    "shippingDetail": "The Thundercloud Courier ensures swift delivery through its stormy skies, but packages containing flammable materials are routed separately to prevent accidents.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use; recharges at dawn the next day",
      "charges": "1"
    },
    "priceReason": "The Thunder Leaf's rarity, powerful effects, and the risk it poses to its wielder justify a high price.",
    "priceOriginal": 21000,
    "priceReviewedAt": "2026-07-23T19:07:16.118581+00:00",
    "aiReviewedAt": "2026-07-23T19:07:16.118581+00:00",
    "aiReviewVersion": 1
  },
  "thunder_rage": {
    "id": "thunder_rage",
    "name": "Thunder Rage",
    "description": "Thunder Rage is a compacted storm in a bottle, crafted from the heartwood of ancient storm trees and sealed within a thunderous metal flask. When shaken vigorously and hurled at your foes, it unleashes a blinding flash followed by a deafening crack of lightning, leaving enemies reeling with shockwaves that spread outwards like ripples on water. This volatile potion is said to have been perfected in the shadowy corners of Rogueport's Black Market, where only the boldest and most daring dare to trade.",
    "category": "consumables",
    "price": 1000,
    "icon": "⚡",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Area of Effect",
      "Save for Half Damage"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Thunderclap Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Lightning Burst",
        "rules": "When activated by throwing, Thunder Rage releases a burst of lightning within a 20-foot radius centered on the point where it lands. All creatures in this area must make a Dexterity saving throw (DC 14) or take 5d6 thunder damage and be stunned until the end of their next turn."
      },
      {
        "title": "Stunning Shockwave",
        "rules": "After resolving the lightning burst, a shockwave spreads outwards from the point where Thunder Rage lands. All creatures within its 20-foot radius must make another Dexterity saving throw (DC 14) or be stunned for 1 minute."
      }
    ],
    "levelRequirementReason": "This potion is accessible to lower-level characters who require a powerful yet manageable tool in their early adventuring days.",
    "vendorReason": "Rogueport's Black Market is known for its eclectic and potent wares, making it the perfect place for this volatile concoction.",
    "shippingDetail": "The delivery is rushed to ensure that the potion remains effective upon arrival.",
    "usage": {
      "activation": "Throw as a bonus action",
      "duration": "Instantaneous",
      "endsWhen": "Effect ends after its duration or when used up",
      "charges": "Unlimited, but only one can be active at a time"
    },
    "priceReason": "The balanced price reflects the rare materials and complex alchemy involved in creating Thunder Rage.",
    "priceOriginal": 28000,
    "priceReviewedAt": "2026-07-23T19:07:36.965788+00:00",
    "aiReviewedAt": "2026-07-23T19:07:36.965788+00:00",
    "aiReviewVersion": 1
  },
  "thwomp_glove": {
    "id": "thwomp_glove",
    "name": "Thwomp's Crushing Glove",
    "description": "Thwomp's Crushing Glove is a heavy, stone gauntlet that mimics the formidable fist of the legendary Thwomp. Crafted from volcanic rock and imbued with the power to crush, it can literally slam doors or flatten obstacles in its path. This relic deals 2d6 bludgeoning damage on unarmed strikes and pushes targets back 10 feet when hit; once per short rest, you can unleash a devastating slam that affects all creatures within a 5-foot radius for 4d6 bludgeoning damage. The glove's power comes with a price: it imposes disadvantage on Sleight of Hand checks.",
    "category": "equipment",
    "price": 1000,
    "icon": "👊",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Unarmed Strikes Deal 2d6 Bludgeoning",
      "Push Target Back 10 Feet"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Iron Chest",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unarmed Strike",
        "rules": "When you make an unarmed strike with Thwomp's Crushing Glove, it deals 2d6 bludgeoning damage. On a hit, the target is pushed back 10 feet."
      },
      {
        "title": "Massive Slam",
        "rules": "Once per short rest, you can slam your hand down on a flat surface or creature within reach, affecting all creatures within a 5-foot radius for 4d6 bludgeoning damage. This effect ends if the glove is destroyed."
      }
    ],
    "levelRequirementReason": "This relic requires no special level as it can be used by anyone to perform powerful, albeit crude, actions.",
    "vendorReason": "The Gilded Gryphon specializes in rare and unconventional items that blend power with a touch of whimsy, making this gauntlet an ideal fit for their inventory.",
    "shippingDetail": "Ships via Iron Chest's sturdy couriers who deliver the glove within three days of purchase.",
    "usage": {
      "activation": "As a bonus action to make an unarmed strike or once per short rest to perform the massive slam.",
      "duration": "Instantaneous for unarmed strikes; lasts until the start of your next turn after using it for the massive slam.",
      "endsWhen": "The effect ends if you drop the glove, it is destroyed in combat, or you use all available uses.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP as its effects are powerful but not overpowered, providing a unique and thematic experience for the player.",
    "priceOriginal": 19000,
    "priceReviewedAt": "2026-07-23T19:07:33.701570+00:00",
    "aiReviewedAt": "2026-07-23T19:07:33.701570+00:00",
    "aiReviewVersion": 1
  },
  "thwomp_statue": {
    "id": "thwomp_statue",
    "name": "Thwomp Statue",
    "description": "This miniature Thwomp statue, crafted from solid granite and imbued with ancient magic, stands ready to crush any trap or door it encounters. Its surface is etched with runes that glow faintly in the dark, hinting at forgotten spells woven into its core. This relic weighs a hefty 50 pounds and can be activated by simply placing it on top of a target, whereupon it unleashes a deafening crash and devastating bludgeoning force.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🪨",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Crush Object",
      "Single Use"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Stone Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Crush Object",
        "rules": "When activated by placing the statue on top of a target object or door, the Thwomp Statue unleashes its inherent power. This deals 4d10 bludgeoning damage to all creatures in a 5-foot radius around the target and collapses any wooden doors within reach. The effect is instantaneous but can only be used once before the statue crumbles into harmless stone dust."
      },
      {
        "title": "Single Use",
        "rules": "The Thwomp Statue has a single charge, which is exhausted upon activation. It cannot be recharged and must be purchased anew if another use is desired."
      }
    ],
    "levelRequirementReason": "Beginners can handle the statue's power but require experience to manage its destructive force responsibly.",
    "vendorReason": "The Gilded Gryphon specializes in rare and exotic relics, making this miniature Thwomp a fitting addition to their inventory.",
    "shippingDetail": "Due to its weight and fragility, the statue is shipped via Stone Delivery's secure underground routes, ensuring it arrives undamaged.",
    "usage": {
      "activation": "Place on target object or door",
      "duration": "Instantaneous",
      "endsWhen": "Activation ends the effect; the statue crumbles into stone dust after use",
      "charges": "One-time use"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's rarity and unique utility without overshadowing other party members.",
    "priceOriginal": 11000,
    "priceReviewedAt": "2026-07-23T19:07:46.213889+00:00",
    "aiReviewedAt": "2026-07-23T19:07:46.213889+00:00",
    "aiReviewVersion": 1
  },
  "time_acceleration_chamber": {
    "id": "time_acceleration_chamber",
    "name": "Time Acceleration Chamber (Permanent)",
    "description": "The Time Acceleration Chamber is a sleek, metallic pod with pulsating circuits and an eerie green glow. Inside, time ticks at an accelerated rate—each day spent within is equivalent to one year passing in the outside world. The chamber can accommodate up to four individuals simultaneously, ensuring efficient use for both training and aging processes. Exiting the chamber leaves you disoriented, requiring a successful Constitution saving throw or causing you to lose your concentration on any activity for 1d4 hours.",
    "category": "premium",
    "price": 1000,
    "icon": "⏰",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Time Warp Training",
      "Post-Exit Disorientation"
    ],
    "vendor": "artificer_tower",
    "shippedBy": "Temporal Express Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Time Warp Training",
        "rules": "Each day spent in the chamber grants one level of exhaustion reduced and accelerates aging, experience gain, and skill training by a year's worth. This effect is passive while inside the chamber."
      },
      {
        "title": "Post-Exit Disorientation",
        "rules": "Upon exiting, you are disoriented for 1d4 hours. You have disadvantage on all ability checks and saving throws until the end of your next short or long rest. A successful Constitution saving throw halves this duration."
      }
    ],
    "levelRequirementReason": "Requires at least level 1 to use, as it involves basic concentration and safety protocols.",
    "vendorReason": "The Artificer Tower specializes in advanced temporal devices and offers the Time Acceleration Chamber for those who need accelerated training and aging services.",
    "shippingDetail": "Ships directly to your location, ensuring prompt delivery of this time-sensitive device.",
    "usage": {
      "activation": "Passive while inside the chamber.",
      "duration": "Instantaneous effect upon exiting.",
      "endsWhen": "Disorientation ends after 1d4 hours or sooner with a successful saving throw.",
      "charges": "Unlimited uses, recharging on a full rest."
    },
    "priceReason": "Balanced at 1000 XP to reflect the chamber's utility for accelerated training and aging without being overpowered.",
    "priceOriginal": 850000,
    "priceReviewedAt": "2026-07-23T19:07:30.613380+00:00",
    "aiReviewedAt": "2026-07-23T19:07:30.613380+00:00",
    "aiReviewVersion": 1
  },
  "time_lord_chronometer": {
    "id": "time_lord_chronometer",
    "name": "Time Lord Chronometer",
    "description": "The Time Lord Chronometer is a sleek, pocket-sized watch crafted from platinum and adorned with engravings of celestial patterns. This artifact can manipulate time itself, allowing its wielder to stop, reverse, or fast-forward time within a twenty-foot radius for up to one minute each use. The Clockmaker's creation defies the laws of paradox; it is immune to any temporal disturbances, ensuring that no ill effects arise from its manipulation.",
    "category": "equipment",
    "price": 1000,
    "icon": "🕰️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Temporal Manipulation",
      "Paradox Immunity"
    ],
    "vendor": "temporality_inc",
    "shippedBy": "Time Loop Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Manipulation",
        "rules": "Activate as a bonus action. Choose an area of 20 feet radius centered on you. Stop, reverse, or fast-forward time in that area for up to one minute per use. The duration can be adjusted at the start of your next turn. This effect is instantaneous and has no save DC required."
      },
      {
        "title": "Paradox Immunity",
        "rules": "You are immune to any damage or effects from paradoxes created by the Chronometer's temporal manipulation. No additional saving throws or checks are required."
      }
    ],
    "levelRequirementReason": "The Time Lord Chronometer requires a minimum character level of 1 due to its complex mechanics and the precision needed to wield it effectively.",
    "vendorReason": "Temporality Inc. is the only source for such an artifact, as they are responsible for its creation and maintenance.",
    "shippingDetail": "Ships via Time Loop Express, ensuring that the Chronometer arrives in perfect condition.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous (up to one minute per use)",
      "endsWhen": "The duration ends when you choose a new action or when the effect is interrupted by another spell or ability.",
      "charges": "Unlimited, but requires concentration for each manipulation"
    },
    "priceReason": "The Time Lord Chronometer's rarity and unique properties justify its price of 1000 XP.",
    "priceOriginal": 85000000,
    "priceReviewedAt": "2026-07-23T19:08:00.355144+00:00",
    "aiReviewedAt": "2026-07-23T19:08:00.355144+00:00",
    "aiReviewVersion": 1
  },
  "time_sand_hourglass": {
    "id": "time_sand_hourglass",
    "name": "Hourglass of Stilled Seconds",
    "description": "The Hourglass of Stilled Seconds is a glass vessel filled with shimmering moonlight sand, its surface etched with ancient runes that whisper of forgotten times and unyielding fate. It can slow fleeting moments or rewind recent events, granting those who wield it the power to rewrite destiny. Crafted by the lunar masters of the Silver Veil, this artifact is as delicate as it is potent, capable of altering time itself in the heat of battle.",
    "category": "premium",
    "price": 1000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Rewind Time",
      "Fortune Rewinder"
    ],
    "vendor": "lunar_auction",
    "shippedBy": "Hermetic Case",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Rewind Time",
        "rules": "As a reaction, spend 3 charges to rewind the last 6 seconds of combat. This effect allows you and your allies to re-roll any attack rolls or saving throws made during that time. You must keep track of the outcomes and choose whether to use the new result."
      },
      {
        "title": "Fortune Rewinder",
        "rules": "As a bonus action, spend 1 charge to grant +10 to a single d20 roll (rewinding a failure). This effect can be used on any failed saving throw or attack roll. It does not affect rolls that are critical failures."
      }
    ],
    "levelRequirementReason": "Only those with the fortitude and wisdom of an experienced adventurer can wield such a volatile artifact.",
    "vendorReason": "The lunar auction is known for its rare and ancient artifacts, including this time-honored relic.",
    "shippingDetail": "Shipped under strict lunar phases, ensuring the integrity of the artifact during transit.",
    "usage": {
      "activation": "Reaction or Bonus Action",
      "duration": "Instantaneous for Rewind Time; until the start of your next turn for Fortune Rewinder",
      "endsWhen": "Charges are exhausted or when the item is destroyed",
      "charges": "3 charges, recharging 1 charge per full moon"
    },
    "priceReason": "This price reflects its rarity and the skill required to properly use such a delicate artifact.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-23T19:08:04.315972+00:00",
    "aiReviewedAt": "2026-07-23T19:08:04.315972+00:00",
    "aiReviewVersion": 1
  },
  "timeless_sand": {
    "id": "timeless_sand",
    "name": "Timeless Sand",
    "description": "A small, ornate jar containing sand that never runs out, this Timeless Sand flows backward when touched, reversing time for a moment. Each grain of sand is said to hold a fragment of forgotten history, and the jar's craftsmanship reflects the ancient artistry of the Lycan Forge. Touching it causes the sand to ripple and reverse its flow, but each use ages the user by 1d4 days, marking the passage of time in an ironic twist.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Sprinkle: Reverse Time",
      "Temporal Aging"
    ],
    "vendor": "lunar_auction",
    "shippedBy": "Crystal Jar Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sprinkle: Reverse Time",
        "rules": "As a bonus action, sprinkle the sand to reverse the flow of time for one object or creature within reach. The effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Temporal Aging",
        "rules": "Each use of the Timeless Sand ages the user by 1d4 days, as if time had advanced that amount in a single moment. This effect has no save DC and cannot be negated or reduced."
      }
    ],
    "levelRequirementReason": "The delicate nature of handling such an ancient artifact requires basic dexterity.",
    "vendorReason": "Lunar Auctions specialize in rare, exotic artifacts from forgotten times and cultures.",
    "shippingDetail": "Delivered by Crystal Jar Express with a ceremonial escort to ensure safe arrival.",
    "usage": {
      "activation": "Bonus action to sprinkle the sand.",
      "duration": "1 minute for each use.",
      "endsWhen": "The duration ends when time moves forward again, or the user ages as described.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "Balanced at 1000 XP to reflect its ancient craftsmanship and magical properties without being overpowered.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T19:08:02.589430+00:00",
    "aiReviewedAt": "2026-07-23T19:08:02.589430+00:00",
    "aiReviewVersion": 1
  },
  "toad_cap": {
    "id": "toad_cap",
    "name": "Toad Cap",
    "description": "The Toad Cap, a whimsical hat crafted from enchanted toadstools found in the heart of Toad Town, radiates a soothing aura when worn. Its spotty surface changes hue with the wearer's mood and environment, offering both visual delight and subtle healing. The cap whispers encouragement and joy, bolstering the wearer’s resolve and charisma. Each day, it grants a minor recovery of 1d4 hit points to self or an ally, while also bestowing +1 to Charisma checks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Minor Healing",
      "Charisma Boost"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Cap Box Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Touch",
        "rules": "Once per day, the wearer can activate this effect by touching it. The cap grants a minor recovery of 1d4 hit points to either the wearer or an adjacent ally within reach. This effect has no save DC and is limited to once per day."
      },
      {
        "title": "Charisma Boost",
        "rules": "+1 bonus to Charisma checks and saving throws, which lasts until the end of the wearer's next long rest. The cap does not expend a charge for this benefit; it simply enhances the user’s natural charisma."
      }
    ],
    "levelRequirementReason": "The Toad Cap is designed to be accessible to adventurers just starting their journey, providing them with immediate benefits.",
    "vendorReason": "Toad Town Market stocks a variety of items crafted by local artisans, and the Toad Cap is one such creation that offers both practical value and whimsical charm.",
    "shippingDetail": "The Cap Box Express ensures swift delivery to adventurers eager for their next grand adventure. Delivery times are expedited thanks to this courier’s reputation for reliability and speed.",
    "usage": {
      "activation": "Activates as a bonus action or by touch, depending on the effect used.",
      "duration": "Healing Touch is instantaneous; Charisma Boost lasts until the end of the next long rest.",
      "endsWhen": "The effects expire naturally upon the completion of their duration. The cap does not need to recharge and can be worn continuously.",
      "charges": "Unlimited"
    },
    "priceReason": "While the Toad Cap is crafted from enchanted materials, its price reflects a balance between its minor healing ability and charisma boost, making it an attractive purchase for those embarking on their adventures.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-23T19:08:18.444803+00:00",
    "aiReviewedAt": "2026-07-23T19:08:18.444803+00:00",
    "aiReviewVersion": 1
  },
  "toad_cult_shrine_key": {
    "id": "toad_cult_shrine_key",
    "name": "Toad Cult Shrine Key",
    "description": "This massive brass key gleams with an eerie green hue, adorned with toad motifs that seem to move ever so slightly. It opens a hidden shrine dedicated to the Toad Cult, a place of ancient mysticism and reverence. Within, you can receive a minor blessing: +1 to all checks for 8 hours (once per week), or be granted a momentary reprieve from time's passage, pausing your aging by 24 hours.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🗝️",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Opens a hidden Toad Shrine",
      "Minor Blessing"
    ],
    "vendor": "the_toad_cult",
    "shippedBy": "Toad-in-a-Box Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blessing of the Toad Cult",
        "rules": "Upon entering the shrine and using this key, you gain a +1 bonus to all ability checks until the start of your next turn. This effect can be used once per week."
      },
      {
        "title": "Aging Pause",
        "rules": "Use this key within the shrine to pause aging for 24 hours. You cannot use this effect more than once every three months, and it requires an hour-long meditation session inside the shrine."
      }
    ],
    "levelRequirementReason": "The Toad Cult Shrine Key is a minor artifact suitable for novice adventurers.",
    "vendorReason": "The Toad Cult's priests are responsible for maintaining the shrines and thus sell keys to their members.",
    "shippingDetail": "Ships via magical toad courier, delivery is swift but requires a week of travel time.",
    "usage": {
      "activation": "Activating this key requires entering the shrine and using it within its bounds.",
      "duration": "Blessing lasts until your next turn. Aging Pause lasts for 24 hours.",
      "endsWhen": "The effect ends when the duration expires or you leave the shrine.",
      "charges": "Unlimited, but limited by weekly use."
    },
    "priceReason": "Balanced as a rare item, this key offers significant utility without overpowered effects.",
    "priceOriginal": 24000,
    "priceReviewedAt": "2026-07-23T19:08:15.832310+00:00",
    "aiReviewedAt": "2026-07-23T19:08:15.832310+00:00",
    "aiReviewVersion": 1
  },
  "toad_house_cookie": {
    "id": "toad_house_cookie",
    "name": "Toad House Power Cookie",
    "description": "The Toad House Power Cookie is a star-shaped confection baked by Toadette herself, its golden surface flecked with twinkling stars. When you consume this treat, the universe seems to align in your favor—your wounds mend and your spirit soars. It’s said that eating one of these cookies grants you 1d10 temporary hit points and a bonus on your next saving throw, as if the entire world is cheering for your success.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍪",
    "stock": 15,
    "rarity": "uncommon",
    "effects": [
      "Eat: Gain 1d10 temporary HP",
      "Advantage on next saving throw"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Cookie Tin",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Hit Points",
        "rules": "When you eat this cookie, you gain 1d10 temporary hit points for the duration of the short rest. These hit points fade at the start of your next long rest."
      },
      {
        "title": "Saving Throw Advantage",
        "rules": "For the next saving throw you make after consuming the cookie, you have advantage on it. This effect ends when you successfully make that save or if you take any damage before then."
      }
    ],
    "levelRequirementReason": "This treat is designed for adventurers just starting their journey and can help them overcome initial challenges.",
    "vendorReason": "The Toad Town Market is known for its magical treats, so it's only fitting that they carry this legendary cookie.",
    "shippingDetail": "Shipped in a specially crafted tin to preserve the cookie’s flavor and magic until you arrive at your destination.",
    "usage": {
      "activation": "Eat the cookie as an action.",
      "duration": "Until the start of your next long rest.",
      "endsWhen": "At the start of your next long rest or if you take damage before then.",
      "charges": "Unlimited, but only one cookie at a time."
    },
    "priceReason": "The price reflects its rarity and the magical craftsmanship required for Toadette to bake it.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T19:08:32.140555+00:00",
    "aiReviewedAt": "2026-07-23T19:08:32.140555+00:00",
    "aiReviewVersion": 1
  },
  "toad_house_voucher": {
    "id": "toad_house_voucher",
    "name": "Toad House Voucher",
    "description": "The Toad House Voucher, embossed with a toad's crest in shimmering gold, grants entry to any official Toad House for one night. Enjoy a rejuvenating full rest, a hearty meal fit for a king, and the assurance of unassailable safety under the watchful gaze of the toads' guardianship. This voucher is not just a ticket; it’s an invitation to a sanctuary where your every need is met with care and hospitality.",
    "category": "services",
    "price": 1000,
    "icon": "🏠",
    "stock": 200,
    "rarity": "common",
    "effects": [
      "Full Rest Benefits",
      "Hot Meal Included"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Toad Messenger Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Full Rest Benefits",
        "rules": "Instantly regain hit points equal to twice the level of the recipient, remove all exhaustion, and gain one hour of uninterrupted sleep. This effect is instantaneous upon activation."
      },
      {
        "title": "Hot Meal Included",
        "rules": "Receive a hot meal fit for any noble, consisting of three courses: soup, main course, and dessert. The meal replenishes 2d6 + level hit points, consumed immediately after the voucher's use."
      }
    ],
    "levelRequirementReason": "A basic level requirement ensures that adventurers of all backgrounds can experience the Toad Houses.",
    "vendorReason": "The toads at Toad Town Market are known for their hospitality and willingness to share the comforts of their homes with travelers.",
    "shippingDetail": "Delivered instantly by a fleet of toad messengers, ensuring you arrive at your Toad House before nightfall.",
    "usage": {
      "activation": "Use as an action upon arrival at the Toad House for immediate benefits.",
      "duration": "Instantaneous and ongoing until consumed or interrupted.",
      "endsWhen": "The effects end when the voucher is used, either by sleeping or consuming the meal.",
      "charges": "Unlimited; the voucher can be used multiple times."
    },
    "priceReason": "The balanced price reflects the luxury and services provided, making it accessible yet valuable to adventurers.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-23T19:08:33.787026+00:00",
    "aiReviewedAt": "2026-07-23T19:08:33.787026+00:00",
    "aiReviewVersion": 1
  },
  "toadette_bow": {
    "id": "toadette_bow",
    "name": "Toadette's Pink Bow",
    "description": "Toadette's Pink Bow is a colossal, vibrant accessory made from soft, bioluminescent toadstools and enchanted silk. It radiates a comforting aura that instills confidence in its bearer, making them appear more charismatic and approachable. The bow not only boosts one’s Charisma (Persuasion) checks by +2 but also grants advantage on Performance checks specifically for dance routines. When you're nervous, the bow squeaks softly, a quirky reminder of Toadette's playful nature.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎀",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Charisma Boost",
      "Dance Advantage"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Royal Courier of Hyrule",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "When worn, Toadette's Pink Bow provides +2 to Charisma (Persuasion) checks. This effect is passive and persists as long as the bow remains on your person."
      },
      {
        "title": "Dance Advantage",
        "rules": "While wearing Toadette's Pink Bow, you gain advantage on Performance checks for dance routines. This effect lasts until the end of your next short or long rest."
      }
    ],
    "levelRequirementReason": "This bow is designed to be accessible to all players, enhancing their charisma without demanding a high level.",
    "vendorReason": "Toad Town Market stocks the most popular and whimsical items from the Mushroom Kingdom, including Toadette's Pink Bow.",
    "shippingDetail": "The bow is shipped in a plush velvet box with a special delivery ensuring it arrives in perfect condition.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Persistent while worn.",
      "endsWhen": "Effect ends at the end of your next short or long rest, or when removed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The bow's enchantments and materials make it a valuable yet accessible item for enhancing one’s charisma and performance skills.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T19:08:45.911745+00:00",
    "aiReviewedAt": "2026-07-23T19:08:45.911745+00:00",
    "aiReviewVersion": 1
  },
  "toadette_tea_set": {
    "id": "toadette_tea_set",
    "name": "Toadette’s Calming Tea Set",
    "description": "Toadette’s Calming Tea Set is a delicate brass ensemble, complete with a silver teapot and a trio of porcelain cups. Each cup brims with a fragrant blend that soothes the soul. Perform the full tea ceremony to restore hit points and banish fear, but beware: after sipping three cups, your charm might turn against those who dislike the ritual. The teapot hums softly, occasionally breaking into song, adding a whimsical touch to your daily routine.",
    "category": "curiosities",
    "price": 1000,
    "icon": "☕",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Tea Ceremony",
      "Toad Charm"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Steam-Powered Trolley",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Tea Ceremony",
        "rules": "As an action, brew and consume the tea from one cup. Restore 1d8 hit points and remove the Frightened condition. The ceremony must be performed in full; rushing it does not activate its effects."
      },
      {
        "title": "Toad Charm",
        "rules": "After consuming three cups of tea, gain a +5 bonus to Persuasion checks with Toads for 24 hours. This effect also grants a -5 penalty to Persuasion checks with Koopas due to their disdain for the ritual."
      }
    ],
    "levelRequirementReason": "Toadette’s Calming Tea Set is designed for beginners and those seeking a calming break from their adventures.",
    "vendorReason": "Shaman's Hut specializes in items that promote inner peace and balance, making it the ideal vendor for Toadette’s Calming Tea Set.",
    "shippingDetail": "Delivered by the trusty Steam-Powered Trolley, ensuring your tea set arrives in perfect condition.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; charm lasts for 24 hours after consuming three cups",
      "endsWhen": "After consuming three cups and ending the charm with a successful or failed Persuasion check against Koopas",
      "charges": "Unlimited, but requires performing the full tea ceremony each time"
    },
    "priceReason": "The price reflects its uncommon rarity and the unique benefits it offers for beginners.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-23T19:08:35.377376+00:00",
    "aiReviewedAt": "2026-07-23T19:08:35.377376+00:00",
    "aiReviewVersion": 1
  },
  "toadstool_tea_set": {
    "id": "toadstool_tea_set",
    "name": "Toadstool Tea Set",
    "description": "The Toadstool Tea Set is a delicate porcelain affair adorned with intricate mushroom motifs. Each cup and saucer exudes a faint, ethereal glow from the enchanted toadstools embedded within. This set brews potions of dubious origin; it's said that sipping its tea can bring unexpected revelations or minor transformations. The set whispers amusing facts about toads during tea time, adding levity to any gathering. However, misuse with coffee will shatter it into harmless fragments.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🍵",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Tea Time Revelations",
      "Toad Lore"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Tea Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Tea Time Revelations",
        "rules": "As an action, brew a potion of minor magic (Heal 2d4, Poison 1d6, or Invisibility for 10 minutes). The set whispers amusing facts about toads during tea time. This effect can be used once per long rest."
      },
      {
        "title": "Toad Lore",
        "rules": "+1 bonus to Charisma (Persuasion) while sipping the tea, but the user must make a Wisdom saving throw (DC 12) or fall asleep for 1 hour. This effect lasts until the end of your next short rest."
      }
    ],
    "levelRequirementReason": "This set requires no level as its effects are minor and whimsical.",
    "vendorReason": "The market sells local curiosities, including this enchanted tea set from Toadstool Village.",
    "shippingDetail": "Shipped in a plush-lined crate to protect the delicate porcelain during transit.",
    "usage": {
      "activation": "Action or bonus action (to brew a potion) and passive effect (while sipping)",
      "duration": "Instantaneous for brewing, 1 hour for persuasion boost",
      "endsWhen": "Ends at the start of your next short rest or when used with coffee.",
      "charges": "Unlimited; recharge after a long rest"
    },
    "priceReason": "The price reflects its minor magic and unique craftsmanship, making it an uncommon find.",
    "priceOriginal": 13000,
    "priceReviewedAt": "2026-07-23T19:08:48.628459+00:00",
    "aiReviewedAt": "2026-07-23T19:08:48.628459+00:00",
    "aiReviewVersion": 1
  },
  "tomb_king_khopesh": {
    "id": "tomb_king_khopesh",
    "name": "Tomb King Khopesh",
    "description": "The Tomb King Khopesh is a bronze sickle-sword forged by ancient pharaohs. Its blade is etched with arcane symbols that whisper the names of defeated foes. When wielded, it draws upon the souls of the dead, humming ominously as it seeks to claim more victims. Those struck by its edge must succeed on a DC 14 Constitution saving throw or become cursed, suffering from disadvantage on attack rolls until the curse is dispelled or they rest for eight hours.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Soulbound Curses",
      "Necrotic Retribution"
    ],
    "vendor": "king_of_tombs",
    "shippedBy": "Sarcophagus Delivery",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Soulbound Curses",
        "rules": "When you hit a creature with the Tomb King Khopesh, that creature must make a DC 14 Constitution saving throw. On failure, it is cursed (disadvantage on attack rolls against you) until the curse is dispelled or the target rests for eight hours."
      },
      {
        "title": "Necrotic Retribution",
        "rules": "While a creature remains cursed by the Tomb King Khopesh, any attacks made against it deal an additional +1d4 necrotic damage. The curse ends when dispelled or when the target rests for eight hours."
      }
    ],
    "levelRequirementReason": "This weapon's arcane power requires a certain level of magical understanding to wield effectively.",
    "vendorReason": "The King of Tombs understands the ancient lore behind this cursed blade and can provide it to those who seek its dark power.",
    "shippingDetail": "This item is shipped in a specially sealed sarcophagus to ensure it reaches you unharmed, though rumors say it might already be alive with the souls of the dead.",
    "usage": {
      "activation": "On hit",
      "duration": "Until dispelled or target rests for eight hours",
      "endsWhen": "Cursed effect ends upon dispelling or rest",
      "charges": "Unlimited"
    },
    "priceReason": "This weapon's price reflects its cursed nature and the arcane resources required to craft such a blade.",
    "priceOriginal": 40000,
    "priceReviewedAt": "2026-07-23T19:08:50.484408+00:00",
    "aiReviewedAt": "2026-07-23T19:08:50.484408+00:00",
    "aiReviewVersion": 1
  },
  "tomb_kings_ancestral_consultation": {
    "id": "tomb_kings_ancestral_consultation",
    "name": "Tomb Kings Ancestral Consultation",
    "description": "The Tomb Kings Ancestral Consultation is a weathered scroll bound in black leather and inscribed with ancient hieroglyphs. When unrolled, it hums faintly as the spirit of a long-dead ancestor speaks through it. The ancestor's voice carries an unmistakable tone of frustration, offering cryptic advice that often seems more like a challenge than guidance. For 7 days after consulting, you gain advantage on one History check per day, but be wary: the ancestor may demand repayment in the form of completing their unfinished chores—a minor quest hook that could lead to unexpected adventures.",
    "category": "services",
    "price": 1000,
    "icon": "💀",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Speak with Ancestral Spirit",
      "Advantage on One History Check Per Day"
    ],
    "vendor": "tomb_kings",
    "shippedBy": "Sarcophagus Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Speak with Ancestral Spirit",
        "rules": "You can activate this ability as an action. The ancestor provides a cryptic and often frustrating consultation, which lasts for the duration of your concentration (up to 10 minutes). If you fail a Wisdom saving throw with a DC of 12, the spirit's advice becomes nonsensical."
      },
      {
        "title": "Advantage on One History Check Per Day",
        "rules": "For 7 days after consulting the ancestor, you gain advantage on one History check per day. You can use this ability only once per day and must rest for at least 8 hours before using it again."
      }
    ],
    "levelRequirementReason": "This item is designed to be accessible early in a campaign to offer players guidance without being too powerful.",
    "vendorReason": "The Tomb Kings are masters of necromancy and ancestor worship, making them the perfect vendor for this unique service.",
    "shippingDetail": "Delivered by a convoy of ancient hearse-like vehicles, often accompanied by a procession of mummified guardians.",
    "usage": {
      "activation": "Action (concentration up to 10 minutes)",
      "duration": "Concentration (up to 10 minutes)",
      "endsWhen": "Ends when you lose concentration or complete the consultation",
      "charges": "Unlimited, but only one History check advantage per day"
    },
    "priceReason": "The price reflects the scroll's rarity and the complex ritual required to activate it.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-23T19:08:53.013649+00:00",
    "aiReviewedAt": "2026-07-23T19:08:53.013649+00:00",
    "aiReviewVersion": 1
  },
  "tomb_kings_ancient_preservation_jar": {
    "id": "tomb_kings_ancient_preservation_jar",
    "name": "Tomb Kings Ancient Preservation Jar",
    "description": "The Tomb Kings Ancient Preservation Jar, a sleek obsidian container adorned with hieroglyphs, traps food within its sealed depths for eternity—or at least until the month's end. Once opened, the preserved meal retains its nutritional value and freshness, but its flavors transform into a haunting essence of ancient grains and musty linen. The jar whispers secrets from long-dead pharaohs, granting one History check advantage daily as it hums with forgotten lore.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏺",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Eternal Preservation",
      "Musty Flavor"
    ],
    "vendor": "tomb_kings",
    "shippedBy": "Sarcophagus Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Eternal Preservation",
        "rules": "Activates on opening and lasts for a month. Food within the jar remains preserved, retaining its nutritional value but acquiring an ancient flavor profile."
      },
      {
        "title": "Musty Flavor",
        "rules": "Food tastes like old linen and dust when consumed. The eater suffers disadvantage on Charisma (Interaction) checks until the food is discarded."
      }
    ],
    "levelRequirementReason": "This item is accessible to all adventurers, requiring no specific level for use.",
    "vendorReason": "The Tomb Kings are renowned preservers of ancient artifacts and knowledge, including this culinary relic.",
    "shippingDetail": "Ships via a ceremonial hearse, ensuring the jar arrives with due respect for its origins.",
    "usage": {
      "activation": "Activates on opening the jar.",
      "duration": "Lasts until opened or discarded.",
      "endsWhen": "The food is consumed or the jar is broken.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this item offers a unique and flavorful addition to any adventurer's pantry without overwhelming its value.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-23T19:09:12.319242+00:00",
    "aiReviewedAt": "2026-07-23T19:09:12.319242+00:00",
    "aiReviewVersion": 1
  },
  "tomb_kings_army_reanimation": {
    "id": "tomb_kings_army_reanimation",
    "name": "Tomb Kings Mass Reanimation Ritual (Local)",
    "description": "The Tomb Kings Mass Reanimation Ritual (Local) is a necromantic tome bound in black leather and adorned with gold-threaded hieroglyphs. When invoked, it unleashes a wave of bone-rattling energy that can raise every corpse within a one-mile radius into obedient undead soldiers. The ritual's power comes from the ancient rituals crafted by the King of Tombs himself, who sought to command the dead in his eternal war.",
    "price": 1000,
    "icon": "💀",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Mass Undead",
      "Ritualistic Focus"
    ],
    "vendor": "tomb_gatekeeper",
    "shippedBy": "Dark Summoning",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Mass Undead",
        "rules": "This ritual raises 1d6 x 50 undead troops with a Challenge Rating of 1/8, who are loyal to the caster. The raised undead are under the command of the caster and can be directed in combat or other tasks. The effect lasts until the ritual is completed."
      },
      {
        "title": "Ritualistic Focus",
        "rules": "The ritual takes 12 hours to complete and requires a large necromantic focus, such as a tome of bones or a skull crown. The caster must make a DC 20 Wisdom (Medicine) check at the end of each hour spent on the ritual."
      }
    ],
    "levelRequirementReason": "The complexity and power of this ritual necessitate that the caster be of at least 8th level to manage its effects.",
    "vendorReason": "Only a gatekeeper familiar with the tombs and their secrets would possess such knowledge and resources to craft or trade in this ritual tome.",
    "shippingDetail": "The ritual is shipped via Dark Summoning, which ensures it arrives safely but can take up to three days due to the nature of the cargo.",
    "usage": {
      "activation": "A full action and 12 hours of concentration",
      "duration": "Instantaneous effect lasting until completed",
      "endsWhen": "The ritual is interrupted or the caster loses concentration",
      "charges": "Unlimited, but requires a large necromantic focus"
    },
    "priceReason": "This price reflects the rarity and power of the ritual, as well as the materials and expertise required to craft it.",
    "priceOriginal": 550000,
    "priceReviewedAt": "2026-07-23T19:09:05.045705+00:00",
    "aiReviewedAt": "2026-07-23T19:09:05.045705+00:00",
    "aiReviewVersion": 1
  },
  "tomb_kings_bone_golem_heart": {
    "id": "tomb_kings_bone_golem_heart",
    "name": "Tomb Kings Bone Golem Heart (Dormant)",
    "description": "The Tomb Kings Bone Golem Heart (Dormant) is a skeletal femur imbued with necrotic essence, crafted by the ancient King of Tombs. This dormant heart requires only a willing sacrifice to bring a massive Bone Golem construct to life, bound eternally to its new master's will. Its power comes from the crypts where it was forged, making it as formidable and ancient as the very pharaohs who commanded it.",
    "price": 1000,
    "icon": "🦴",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Activates Bone Golem",
      "Bound Servitude"
    ],
    "vendor": "tomb_gatekeeper",
    "shippedBy": "Lead Casket",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Activate Bone Golem",
        "rules": "A willing sacrifice must be made to activate the heart, bringing a CR 8 Bone Golem construct under your command. The golem serves its master until its destruction or while it remains dormant in a crypt."
      },
      {
        "title": "Bound Servitude",
        "rules": "The Bone Golem created is bound to follow the holder's commands as long as the heart remains unclaimed by another. If the heart changes hands, the golem must make a DC 18 Charisma saving throw or be compelled to serve its new master."
      }
    ],
    "levelRequirementReason": "Only those of sufficient power and experience can command such an ancient and formidable construct.",
    "vendorReason": "The Tomb Gatekeeper has the means to recover such relics from the deepest crypts, making them available for trade.",
    "shippingDetail": "Delivery is via a sealed lead casket, ensuring the heart's safe transport and preventing premature activation during transit.",
    "usage": {
      "activation": "Object interaction to make the sacrifice and activate the golem.",
      "duration": "Permanent until destroyed or the golem's destruction.",
      "endsWhen": "The golem is destroyed or its control is lost.",
      "charges": "Unlimited"
    },
    "priceReason": "This item represents a rare and ancient artifact that can command formidable power, yet it does not provide indefinite use.",
    "priceOriginal": 180000,
    "priceReviewedAt": "2026-07-23T19:09:04.841482+00:00",
    "aiReviewedAt": "2026-07-23T19:09:04.841482+00:00",
    "aiReviewVersion": 1
  },
  "tomb_kings_canopic_collection": {
    "id": "tomb_kings_canopic_collection",
    "name": "Tomb Kings Canopic Collection (Standard)",
    "description": "The Tomb Kings Canopic Collection stands as a macabre yet essential guardian of noble heritage, each alabaster jar meticulously crafted to house the heart, liver, lungs, and intestines of high-ranking nobles. The jars are imbued with ancient spells that not only ward off thieves but also ensure that if a noble's soul remains within the vicinity after death, it is preserved for ritualistic rebirth. Should a noble die near these jars, their spirit is safeguarded against decay until the ritual begins.",
    "price": 1000,
    "icon": "🏺",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Soul Preservation",
      "Magical Ward"
    ],
    "vendor": "tomb_gatekeeper",
    "shippedBy": "Stone Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Soul Preservation",
        "rules": "If a noble or hero dies within 30 feet of any jar, their soul is preserved for ritual use. The effect lasts until the soul is either consumed in a rebirth ceremony or disperses into the afterlife. This effect does not require an action and has no save DC."
      },
      {
        "title": "Magical Ward",
        "rules": "The jars are warded against thieves with a magical alarm that triggers if anyone attempts to open them without proper ritual knowledge or permission, giving the noble's heirs a +2 bonus on saving throws made before the alarm is silenced. The ward lasts until the jars are opened by someone with the appropriate knowledge."
      }
    ],
    "levelRequirementReason": "The Canopic Collection's intricate enchantments and ancient wards make it accessible but not trivial for even a low-level character.",
    "vendorReason": "Only those trusted with the secrets of the dead, like the tomb gatekeeper, can handle such sacred relics.",
    "shippingDetail": "The jars are shipped in an ornate stone crate lined with protective sand and sealed with a sigil that prevents unauthorized opening during transit.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Permanent until the soul is consumed or dispersed",
      "endsWhen": "Soul disperses into the afterlife or is consumed in ritual",
      "charges": "Unlimited"
    },
    "priceReason": "The Canopic Collection's value lies in its historical significance and the protection it offers, making it a valuable yet balanced purchase.",
    "priceOriginal": 70000,
    "priceReviewedAt": "2026-07-23T19:09:16.614860+00:00",
    "aiReviewedAt": "2026-07-23T19:09:16.614860+00:00",
    "aiReviewVersion": 1
  },
  "tomb_kings_canopic_jar": {
    "id": "tomb_kings_canopic_jar",
    "name": "Tomb Kings' Canopic Jar",
    "description": "The Tomb Kings' Canopic Jar is a venerated relic crafted to house the preserved organs of ancient kings. Its pulsating necromantic energy is said to be imbued with the essence of life itself. This jar can animate up to six skeleton corpses each week, and the undead it controls are more resilient, gaining +1 hit point per Hit Die. The jar's owner may occasionally demand tribute from those who seek its power.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🏺",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Animate Skeletons",
      "Enhanced Undead"
    ],
    "vendor": "Tomb Kings",
    "shippedBy": "Sand-Covered Sarcophagus",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Animate Skeletons",
        "rules": "The user can cast Animate Dead once per week on up to six skeleton corpses within range. The skeletons are animated for the duration of a long rest, and they count as undead for the purpose of effects that target undead creatures."
      },
      {
        "title": "Enhanced Undead",
        "rules": "Any skeletons animated by this jar gain +1 hit point per Hit Die until destroyed or until the next dawn. They do not need to breathe, eat, or sleep."
      }
    ],
    "levelRequirementReason": "This item requires a high-level spellcaster who can handle its necromantic power responsibly.",
    "vendorReason": "The vendors are descendants of the kings whose organs were preserved in these jars and thus have intimate knowledge of their powers.",
    "shippingDetail": "Delivered by a trusted courier, this item arrives carefully wrapped to prevent accidental opening during transit.",
    "usage": {
      "activation": "Once per week as an action",
      "duration": "Until the next dawn or until destroyed",
      "endsWhen": "The skeletons are defeated, they return to their resting place, or the jar is destroyed",
      "charges": "One use per week"
    },
    "priceReason": "This balanced price reflects its epic rarity and the weekly limit on its powerful effects.",
    "priceOriginal": 31000,
    "priceReviewedAt": "2026-07-23T19:09:15.445322+00:00",
    "aiReviewedAt": "2026-07-23T19:09:15.445322+00:00",
    "aiReviewVersion": 1
  }
};
