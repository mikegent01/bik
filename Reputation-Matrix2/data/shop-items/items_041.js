// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_041 = {
  "shanhaijing_jade_armor_repair": {
    "id": "shanhaijing_jade_armor_repair",
    "name": "Shanhaijing Jade Armor Repair",
    "description": "The Shanhaijing Jade Armor Repair is a sacred ritual crafted by the priests of Shanhaijing. This ritual restores any damaged jade armor set, ensuring that the protective barriers remain unscathed after elemental attacks or fiery assaults. The process requires rare volcanic earth components, which are costly but essential to rekindle the jade's ancient power. Only those initiated into the shrine's mysteries can perform this intricate and time-honored ritual.",
    "price": 1000,
    "icon": "⚒️",
    "stock": 5,
    "rarity": "legendary",
    "effects": [
      "Fully restore any Shanhaijing Jade Armor set",
      "Requires rare volcanic earth components"
    ],
    "vendor": "shanhaijing_shrine",
    "shippedBy": "Expert Craftsman",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Restoration of Jade Armor",
        "rules": "This ritual fully restores the damaged jade armor, making it as good as new. It has a duration of instantaneous and requires the user to be within 30 feet of the damaged armor set. The ritual ends when successfully completed."
      },
      {
        "title": "Additional Cost for Components",
        "rules": "The user must provide rare volcanic earth components, which cost an additional 15,000 XP. These components are essential to rekindle the jade's ancient power and ensure the ritual's success."
      }
    ],
    "levelRequirementReason": "Requires a priest of at least 8th level to channel the sacred energy needed for this ritual.",
    "vendorReason": "Only initiated priests and members of Shanhaijing can perform this ritual, making it exclusive to their shrine.",
    "shippingDetail": "Ships directly from the sacred mountains; expedited delivery with a delay of one week due to special handling.",
    "usage": {
      "activation": "A full action",
      "duration": "Instantaneous",
      "endsWhen": "Once successfully completed or if the user fails to provide the required components",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the ritual's complexity and the value of rare volcanic earth components.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T18:31:28.767835+00:00",
    "aiReviewedAt": "2026-07-23T18:31:28.767835+00:00",
    "aiReviewVersion": 1
  },
  "shanhaijing_jade_armor_restoration": {
    "id": "shanhaijing_jade_armor_restoration",
    "name": "Shanhaijing Jade Weapon Re-Attunement",
    "description": "The Shanhaijing Jade Weapon Re-Attunement is a sacred artifact from the ancient Celestial Jade Weaponsmiths of Shanhaijing, capable of reassigning a weapon's celestial focus and alignment. Crafting this item requires the wielder to undergo a month of focused meditation within a consecrated shrine, during which they must commune with the spirit of the Celestial Jade. This process aligns the weapon’s core with the new user or purpose, transforming its elemental properties and unlocking latent abilities.",
    "price": 1000,
    "icon": "⚒️",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Reassigns Elemental Focus",
      "Requires Meditative Reconnection"
    ],
    "vendor": "shanhaijing_shrine",
    "shippedBy": "Celestial Courier",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Reassign Elemental Focus",
        "rules": "Activates as a ritual action. The weapon's damage type can be redefined (e.g., from Fire to Cold). This effect lasts until the next dawn, after which it must be re-attuned or used again."
      },
      {
        "title": "Requires Meditative Reconnection",
        "rules": "The item requires 1 month of focused meditation at a shrine dedicated to Shanhaijing. During this time, the user attunes the weapon to their spiritual essence, allowing them to command its latent abilities. This connection can only be re-established once per month."
      }
    ],
    "levelRequirementReason": "This item requires a high level of discipline and understanding of celestial forces, suitable for experienced heroes.",
    "vendorReason": "The shrine is the birthplace of these sacred artifacts and houses the knowledge necessary to re-attune them.",
    "shippingDetail": "Delivered via a celestial courier, ensuring the jade remains pure and focused on its spiritual journey.",
    "usage": {
      "activation": "Ritual action",
      "duration": "Until dawn of the next day",
      "endsWhen": "At dawn or when re-attuned again",
      "charges": "Unlimited, but requires a month to recharge"
    },
    "priceReason": "The item's price reflects its rarity and the time required for re-attunement.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T18:31:47.946934+00:00",
    "aiReviewedAt": "2026-07-23T18:31:47.946934+00:00",
    "aiReviewVersion": 1
  },
  "shanhaijing_jade_charm": {
    "id": "shanhaijing_jade_charm",
    "name": "Shanhaijing Guardian Charm",
    "description": "The Shanhaijing Guardian Charm is a delicate jade amulet, its surface etched with ancient symbols that shimmer faintly under moonlight. Crafted by the revered priests of Shanhaijing from sacred jade quarried deep within the mountains of China, this charm hums with protective energy, warding off malevolent spirits and bestial threats that roam the Far East. Carrying it brings a sense of tranquility, as if the very earth itself lends its strength to those who wear it.",
    "price": 1000,
    "icon": "🐉",
    "stock": 6,
    "rarity": "epic",
    "effects": [
      "Resistance to Psychic Damage",
      "Advantage on saves against Frightened"
    ],
    "vendor": "shanhaijing_shrine",
    "shippedBy": "Silk Pouch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Psychic Resistance",
        "rules": "You have resistance to psychic damage from spirits or beasts. This effect applies when you are affected by a spirit or mythical beast's abilities that deal psychic damage."
      },
      {
        "title": "Frightened Advantage",
        "rules": "When you make a saving throw against an effect that would cause you to become frightened due to the presence of a mythical beast, you have advantage on this save. This effect lasts until the end of your next turn if not re-triggered."
      }
    ],
    "levelRequirementReason": "The charm's protective energies are accessible to adventurers at all levels, though its true power only begins to manifest as one grows in experience.",
    "vendorReason": "Shanhaijing priests have long guarded this sacred artifact, ensuring it reaches those who need protection most.",
    "shippingDetail": "The charm is carefully wrapped in a silk pouch to protect its delicate etchings during transportation.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous upon donning or removing the charm",
      "endsWhen": "The effects end when you remove the charm from your person",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to reflect its protective essence and rarity, this charm is priced at a thousand XP.",
    "priceOriginal": 28000,
    "priceReviewedAt": "2026-07-23T18:31:46.815969+00:00",
    "aiReviewedAt": "2026-07-23T18:31:46.815969+00:00",
    "aiReviewVersion": 1
  },
  "shanhaijing_spirit_compass": {
    "id": "shanhaijing_spirit_compass",
    "name": "Shanhaijing Spirit Compass",
    "description": "The Shanhaijing Spirit Compass is a delicate brass dial encased in a lacquered wooden frame, its needle glowing faintly with an ethereal light. It always points toward the nearest site where the spiritual veil thins, revealing the true form of the plane's border. Upon sighting the compass's glow, creatures within 30 feet must succeed on a DC 15 Wisdom saving throw or become aware of any supernatural presence nearby. The compass also grants advantage on saving throws against being possessed by incorporeal spirits.",
    "price": 1000,
    "icon": "🧭",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Points towards spiritual veil thinning",
      "Grants advantage on saves vs. possession"
    ],
    "vendor": "shanhaijing_shrine",
    "shippedBy": "Lacquer Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Supernatural Awareness",
        "rules": "Creatures within 30 feet must succeed on a DC 15 Wisdom saving throw or become aware of any supernatural presence nearby. This effect lasts until the start of the creature's next turn."
      },
      {
        "title": "Advantage on Saves vs. Possession",
        "rules": "The user gains advantage on all saving throws against being possessed by incorporeal spirits."
      }
    ],
    "levelRequirementReason": "This Spirit Compass is designed for those who are just beginning to explore the mysteries of the spiritual world.",
    "vendorReason": "The Shrine of Shanhaijing has long been a guardian of mystical knowledge, and this compass is one of its most revered tools.",
    "shippingDetail": "Ships within three days via the fastest courier service available in the region.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous, lasts until the start of the creature's next turn after failing a saving throw.",
      "endsWhen": "The effect ends when the compass is destroyed or when the user successfully makes an opposed Wisdom (Insight) check against a supernatural presence.",
      "charges": "Unlimited"
    },
    "priceReason": "This Spirit Compass strikes a balance between its unique properties and the player's ability to acquire it.",
    "priceOriginal": 52000,
    "priceReviewedAt": "2026-07-23T18:31:43.185477+00:00",
    "aiReviewedAt": "2026-07-23T18:31:43.185477+00:00",
    "aiReviewVersion": 1
  },
  "shanhaijing_talisman_of_qi": {
    "id": "shanhaijing_talisman_of_qi",
    "name": "Shanhaijing Talisman of Pure Qi",
    "description": "A charm that channels life energy, boosting internal fortitude.",
    "price": 140000,
    "icon": "☯️",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Advantage on all Death Saving Throws",
      "Once per day, gain proficiency in one saving throw for 1 minute",
      "Made by: Shanhaijing"
    ],
    "vendor": "shanhaijing_shrine",
    "shippedBy": "Silk Box",
    "levelRequirement": 12
  },
  "shanshaijing_monster_scroll": {
    "id": "shanshaijing_monster_scroll",
    "name": "Shan Hai Jing Monster Scroll",
    "description": "The Shan Hai Jing Monster Scroll is a delicate scroll depicting a fearsome yet majestic mythical beast. Crafted from parchment bound with dragon scales, it bears the ancient lore of the Shan Hai Jing. Reading this scroll aloud grants you power over its depicted creature—a Qilin or Zouyu, at your command. The beast appears in all its glory, ready to answer one truthfully posed question before vanishing back into legend.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📜",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Summon Mythical Beast",
      "Single Truthful Answer"
    ],
    "vendor": "shanhaijing",
    "shippedBy": "Courier of the Jade Path",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Summon Mythical Beast",
        "rules": "Activates on command as a bonus action. The summoned creature appears in an unoccupied space within 30 feet of you, grants advantage on one Charisma (Performance) check or Insight roll related to the summoned beast, and remains for 1 minute per caster level. At the end of this time or if dismissed by the caster, it returns to its plane of origin."
      },
      {
        "title": "Single Truthful Answer",
        "rules": "After summoning the creature, you may ask one question which it answers truthfully before departing. The creature does not provide information about itself, only what is known from ancient texts or what can be observed in its form and behavior."
      }
    ],
    "levelRequirementReason": "The scroll's power requires a basic understanding of ancient lore to activate.",
    "vendorReason": "The vendor specializes in mystical scrolls and ancient texts, making this item an appropriate offering.",
    "shippingDetail": "Delivered swiftly by the trusted Courier of the Jade Path, ensuring the scroll arrives intact and ready for use.",
    "usage": {
      "activation": "Bonus action to summon the beast; can be dismissed as a bonus action.",
      "duration": "1 minute per caster level or until dismissed",
      "endsWhen": "At the end of its duration or if dismissed by the caster",
      "charges": "Unlimited, but only one use per day"
    },
    "priceReason": "Balanced for a rare item that offers significant utility without being overpowered.",
    "priceOriginal": 55000,
    "priceReviewedAt": "2026-07-23T18:32:00.922335+00:00",
    "aiReviewedAt": "2026-07-23T18:32:00.922335+00:00",
    "aiReviewVersion": 1
  },
  "shooting_star": {
    "id": "shooting_star",
    "name": "Shooting Star",
    "description": "A star that fell from the sky. Release its energy to bombard enemies.",
    "category": "consumables",
    "price": 45000,
    "icon": "🌠",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "All enemies in sight take 4d8 Radiant damage",
      "No friendly fire"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Cosmic Mail",
    "levelRequirement": 5
  },
  "shroob_fragment": {
    "id": "shroob_fragment",
    "name": "Purple Shard",
    "description": "The Purple Shard gleams faintly in the dark, its surface a swirl of alien circuitry and synthetic crystal. This relic hums with an aggressive energy that makes nearby toads skitter away in terror, their tiny legs darting in panic. The shard seems almost alive, as if it thrives on the fear it inspires. It is said that this fragment of alien technology was once part of a larger device used by an ancient race to control the very fabric of reality.",
    "category": "curiosities",
    "price": 1000,
    "icon": "👾",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Radiates Faint Magic",
      "Toads are Afraid of It"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Lead Box Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Radiates Faint Magic",
        "rules": "When a creature within 10 feet of the Purple Shard makes an attack roll, it must succeed on a DC 13 Dexterity saving throw or be frightened until the start of its next turn. The frightened creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
      },
      {
        "title": "Toads are Afraid of It",
        "rules": "All toads within 30 feet of the Purple Shard have disadvantage on Intelligence (Investigation) checks and Wisdom (Perception) checks. This effect lasts until the end of its owner's next long rest."
      }
    ],
    "levelRequirementReason": "The shard’s aggressive energy requires a level 1 character to wield it without risking harm.",
    "vendorReason": "The Comet Observatory specializes in rare and mysterious artifacts from distant planets, making the Purple Shard an appropriate addition to their inventory.",
    "shippingDetail": "Ships via Lead Box Express with a special container to protect against the shard's aggressive energy.",
    "usage": {
      "activation": "Instantaneous activation on command by its owner.",
      "duration": "Until the end of the Purple Shard’s owner's next long rest.",
      "endsWhen": "The effect ends if the owner willingly dismisses it or if a creature within range successfully saves against the magic radiation.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the shard's unique magical properties and its ability to affect creatures in specific ways.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-23T18:32:29.950211+00:00",
    "aiReviewedAt": "2026-07-23T18:32:29.950211+00:00",
    "aiReviewVersion": 1
  },
  "shroob_mothership_key": {
    "id": "shroob_mothership_key",
    "name": "Shroob Control Key",
    "description": "The Shroob Control Key hums with alien energy, pulsating in a deep purple hue that seems to leak from the very fabric of space-time itself. This relic interfaces with long-forgotten alien technology, capable of summoning a Shroob UFO strike and unleashing a devastating wave of necrotic energy. The key's activation leaves the area irradiated, cursed by Shroobs' wrath, and its use is limited to once per week.",
    "category": "forbidden",
    "price": 1000,
    "icon": "👾",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Summon Shroob UFO",
      "Necrotic Blast"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Lead Box Courier Service",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Summon Shroob UFO",
        "rules": "As an action, the wielder can summon a Shroob UFO that strikes at will. The UFO targets a point within 100 feet and unleashes a necrotic blast in a 30-foot radius centered on that point. All creatures in this area must make a DC 18 Constitution saving throw or be cursed with the effects of the key for 24 hours."
      },
      {
        "title": "Necrotic Blast",
        "rules": "The key can unleash a devastating wave of necrotic energy, dealing 20d6 necrotic damage to all creatures within a 100-foot radius. This effect lasts for 1 minute and leaves the area cursed until dispelled by magic."
      }
    ],
    "levelRequirementReason": "The key's raw power demands a minimum level of 12 to wield, ensuring only those with significant experience can handle its destructive potential.",
    "vendorReason": "The Onyx Hand has access to artifacts from all corners of the multiverse, including this alien artifact.",
    "shippingDetail": "Due to the key's volatile nature, it must be shipped in a specially insulated container to prevent accidental summoning or damage during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for summoning; 1 minute for necrotic blast",
      "endsWhen": "Cursed creatures dispel the effect after 24 hours, and the necrotic blast ends when its duration expires or a successful DC 18 Save is made.",
      "charges": "Once per week"
    },
    "priceReason": "The key's rarity and unique properties make it worth 1000 XP, balancing its power with the risk of catastrophic use.",
    "priceOriginal": 700000,
    "priceReviewedAt": "2026-07-23T18:32:27.909202+00:00",
    "aiReviewedAt": "2026-07-23T18:32:27.909202+00:00",
    "aiReviewVersion": 1
  },
  "shroob_mothership_strike": {
    "id": "shroob_mothership_strike",
    "name": "Shroob Orbital Beam",
    "description": "The Shroob Orbital Beam is a sleek, metallic device that hums with an eerie, pulsating light. Crafted from alien technology and designed to command the dormant Shroob Mothership in orbit, this remote control can unleash a devastating beam of necrotic energy upon activation. The resulting beam devastates all within a 1-mile radius, turning land into a desolate purple wasteland. Once unleashed, it is a force that cannot be ignored by any who witness its destruction.",
    "category": "faction",
    "price": 1000,
    "icon": "🛸",
    "stock": 1,
    "rarity": "forbidden",
    "effects": [
      "Beam of Necrotic Destruction",
      "Desolate Waste"
    ],
    "vendor": "onyx_hand",
    "factionBonus": {
      "combatReadiness": 100
    },
    "effectDetails": [
      {
        "title": "Beam of Necrotic Destruction",
        "rules": "When activated, the Shroob Orbital Beam unleashes a beam of necrotic energy that deals 50d10 damage to all creatures within a 1-mile radius. The beam is instantaneous and cannot be blocked or avoided by any means. There is no save DC for this effect."
      },
      {
        "title": "Desolate Waste",
        "rules": "The targeted area becomes a desolate purple wasteland, rendering the land uninhabitable for 1d4 weeks. Structures within the radius are instantly destroyed and cannot be repaired or rebuilt without extensive resources and time."
      }
    ],
    "levelRequirement": 5,
    "levelRequirementReason": "Commanding such an alien device requires a certain level of combat readiness to effectively utilize its full destructive potential.",
    "vendorReason": "The Onyx Hand faction, being masters of advanced technology and weaponry, are the only known entity capable of handling and maintaining such a powerful artifact.",
    "shippedBy": "Swift Wind Express",
    "shippingDetail": "Due to its size and the potential for destruction it poses, the Shroob Orbital Beam is shipped via Swift Wind Express with strict safety protocols and advanced tracking systems.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use; destroyed if not used within 1 week of purchase",
      "charges": "Single Use"
    },
    "priceReason": "The Shroob Orbital Beam is priced at 1000 XP, reflecting its immense power and the specialized knowledge required to use it effectively.",
    "priceOriginal": 900000,
    "priceReviewedAt": "2026-07-23T18:32:59.433529+00:00",
    "aiReviewedAt": "2026-07-23T18:32:59.433529+00:00",
    "aiReviewVersion": 1
  },
  "shy_guy_toy": {
    "id": "shy_guy_toy",
    "name": "Shy Guy Toy",
    "description": "The Shy Guy Toy appears as a tiny, meticulously crafted wind-up robot in an old-fashioned top hat and tails. Crafted from polished brass and gleaming gears, it's a relic of a bygone era that seems to hum with life. This toy is said to have been made by the eccentric inventor, Shy Guy, who once lived near the market. When wound up, the toy dances and beeps in a way that distracts nearby foes, making them hesitate for crucial moments during combat.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🤖",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Wind Up Distraction",
      "Limited Uses"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Quickstep Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wind Up Distraction",
        "rules": "When the toy is wound up and activated, it dances and beeps in an erratic pattern. This causes one enemy to suffer disadvantage on their next attack roll against any ally within 5 feet for 1 round. The toy can only be used once per short or long rest."
      },
      {
        "title": "Limited Uses",
        "rules": "The Shy Guy Toy has a limited number of uses, determined by the level of the character using it (unlimited at Level 1)."
      }
    ],
    "levelRequirementReason": "Characters must be at least first level to use the toy effectively in combat.",
    "vendorReason": "The Toad Town Market is known for its eclectic collection of curiosities, including this quirky relic from the past.",
    "shippingDetail": "Delivered within a day, with special handling to ensure delicate mechanisms are not damaged in transit.",
    "usage": {
      "activation": "A bonus action to wind up and activate the toy once per short or long rest.",
      "duration": "1 round for each enemy distracted.",
      "endsWhen": "The distraction ends when the affected enemy attacks, takes an action, or is no longer within line of sight of the toy.",
      "charges": "Unlimited uses at Level 1."
    },
    "priceReason": "The Shy Guy Toy's unique craftsmanship and historical significance justify its reduced price from the original value.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T18:33:13.473036+00:00",
    "aiReviewedAt": "2026-07-23T18:33:13.473036+00:00",
    "aiReviewVersion": 1
  },
  "shyguy_mask": {
    "id": "shyguy_mask",
    "name": "Shy Guy Mask",
    "description": "The Shy Guy Mask is a crimson red hooded cloak that blends you into crowds. It grants its wearer advantage on Stealth and Deception checks, allowing secrets to slip past prying eyes. The mask's giggle effect is so convincing it can fool even the most perceptive listeners for an hour. Additionally, it subtly emits a comforting aura that some claim attracts Shy Guys, who are rumored to sense kinship in those they favor.",
    "category": "equipment",
    "price": 1000,
    "icon": "😷",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Stealth and Deception",
      "Disguise as any humanoid (1 hour)"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Anonymous Package",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Stealth and Deception",
        "rules": "Activate as a bonus action. The mask provides advantage on the next Stealth or Deception check made by you immediately after activation."
      },
      {
        "title": "Disguise as any humanoid (1 hour)",
        "rules": "Activate once per day. You can use an action to assume the appearance of any humanoid, changing your form for up to 1 hour without needing to make a Dexterity (Stealth) check. The disguise lasts until you finish a short or long rest."
      }
    ],
    "levelRequirementReason": "The mask's basic functionality is simple enough that even novice adventurers can master it.",
    "vendorReason": "The Rogue Port Black Market caters to all manner of misfits and connoisseurs, including those who value anonymity.",
    "shippingDetail": "Delivered by a reliable courier in a nondescript package within one week.",
    "usage": {
      "activation": "Bonus action for Stealth/Deception advantage; Action to disguise for up to 1 hour",
      "duration": "Until used or until the end of your next long rest (disguise effect)",
      "endsWhen": "The duration ends naturally or when you use it again, at which point its charges are reset.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced to reflect the mask's utility and limited disguise effect without breaking balance.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-23T18:32:53.110512+00:00",
    "aiReviewedAt": "2026-07-23T18:32:53.110512+00:00",
    "aiReviewVersion": 1
  },
  "signed_in_green_ink_it_1": {
    "id": "signed_in_green_ink_it_1",
    "name": "Luigi's Autograph",
    "description": "Luigi's Autograph is a small, meticulously crafted piece of parchment signed in vibrant green ink. The words 'To my biggest fan!' are written elegantly across its surface, imbuing it with a nostalgic charm that speaks to the joyous times shared between fans and the beloved plumber. This autograph, though common in rarity, carries a unique sentimental value that can only be appreciated by those who understand the bond of admiration and loyalty.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📝",
    "stock": 100,
    "rarity": "common",
    "effects": [
      "Sentimental Value",
      "Fan Recognition"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Green Envelope Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fan Recognition",
        "rules": "When shown to a group of Luigi fans, the autograph grants advantage on Charisma (Persuasion) checks made within 1 minute. The effect ends if the user fails an Intelligence saving throw with a DC of 10."
      },
      {
        "title": "Sentimental Value",
        "rules": "Increases the target's maximum hit points by 2d6 for the duration of one long rest, but only when the owner is a level 1 or higher player character. This effect can be used once per day."
      }
    ],
    "levelRequirementReason": "The autograph requires a minimum level of 1 to ensure that the user has enough charisma and social skills to benefit from its effects.",
    "vendorReason": "Toad Town Market is known for selling items that connect with the hearts of the community, making Luigi's Autograph a fitting addition.",
    "shippingDetail": "Ships in a custom green envelope with a special delivery service to ensure safe arrival.",
    "usage": {
      "activation": "Passive effect when worn by the owner or used as an object interaction during interactions with fans.",
      "duration": "Until expended or until the user fails the save.",
      "endsWhen": "The effect ends if the user fails a saving throw with a DC of 10.",
      "charges": "Can be used once per day."
    },
    "priceReason": "This autograph is priced at 1000 XP due to its sentimental value and unique social benefits, making it a fair price for players who wish to enhance their interactions with fans.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T18:34:15.673159+00:00",
    "aiReviewedAt": "2026-07-23T18:34:15.673159+00:00",
    "aiReviewVersion": 1
  },
  "sirsirian_ocean_compass": {
    "id": "sirsirian_ocean_compass",
    "name": "Sirsirian Ocean Compass",
    "description": "The Sirsirian Ocean Compass is a sleek brass instrument etched with nautical symbols and Sirsirian runes. It always points true to the nearest landmass, its needle shimmering like polished metal in the light of the setting sun. Sailors say that when it aligns with distant shores, the compass’s glow intensifies, granting them a momentary sense of calm and direction. Crafted by Sirsirian Ocean, this navigational aid is essential for any who venture far from land.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧭",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "True Compass",
      "Survival Advantage"
    ],
    "vendor": "sirsirian_navigator",
    "shippedBy": "Sea Vessel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "True Compass",
        "rules": "The Sirsirian Ocean Compass always points toward the nearest landmass. It grants advantage on Survival checks to navigate at sea and provides a +2 bonus to initiative rolls when in sight of land."
      },
      {
        "title": "Survival Advantage",
        "rules": "For 1 hour after aligning with a distant shore, you gain advantage on Survival checks made for navigation or survival activities. This effect can be used once per day."
      }
    ],
    "levelRequirementReason": "This compass is designed to assist novices as well as seasoned sailors.",
    "vendorReason": "Sirsirian Navigator specializes in nautical tools and this compass complements their range of sea-faring equipment.",
    "shippingDetail": "Delivered by a trusted ship captain, ensuring safe arrival after one week.",
    "usage": {
      "activation": "Passive effect; aligns automatically when in use.",
      "duration": "Instantaneous (True Compass) and 1 hour (Survival Advantage)",
      "endsWhen": "The effect ends at the start of your next turn or if you leave the area within sight of land, respectively.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced with a price that reflects its utility for sailors without being prohibitively expensive.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T18:33:06.962340+00:00",
    "aiReviewedAt": "2026-07-23T18:33:06.962340+00:00",
    "aiReviewVersion": 1
  },
  "sirsirian_ocean_map": {
    "id": "sirsirian_ocean_map",
    "name": "Sirsirian Ocean Chart (Secret Routes)",
    "description": "The Sirsirian Ocean Chart (Secret Routes) is a nautical map made of parchment infused with starlight and drawn by Sirisirian navigators. It reveals hidden currents, temporary landmasses, and even ancient underwater ruins that only appear under the light of a full moon or during stormy nights. The map’s origins are shrouded in legend, as it is said to have been crafted using fragments from lost sea charts of bygone eras. With this chart, you can navigate through magical storms without fear of losing your way and even find shortcuts that only the most experienced mariners know exist.",
    "price": 1000,
    "icon": "🌊",
    "stock": 7,
    "rarity": "rare",
    "effects": [
      "Navigates through stormy seas",
      "Reveals hidden routes"
    ],
    "vendor": "sirsirian_navigator",
    "shippedBy": "Oilskin Roll",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Magical Navigation Through Storms",
        "rules": "When you activate the map, it grants immunity to getting lost at sea for 1 hour. Once per long rest, as a bonus action, you can use the chart’s guidance to navigate through a stormy sea without taking damage from rough weather or magical storms."
      },
      {
        "title": "Reveal Hidden Routes",
        "rules": "The map reveals hidden routes and temporary landmasses within 1 mile of your position. This effect lasts for 10 minutes, and you can use it once per long rest. If a creature tries to use stealth or disguise magic while using this map, they must succeed on a DC 15 Wisdom (Perception) check or be detected."
      }
    ],
    "levelRequirementReason": "This chart is designed for novice navigators who need the basics of safe passage and are not yet experienced enough to handle more complex navigation challenges.",
    "vendorReason": "Only Sirisirian Navigators, known for their deep knowledge of ocean routes, can produce such a map with accuracy and reliability.",
    "shippingDetail": "The map is carefully wrapped in oilskin to protect it from the elements during shipping.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 hour or 10 minutes, as a short rest",
      "endsWhen": "Upon completion of the effect duration, use of another chart feature, or when the map is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The Sirsirian Ocean Chart (Secret Routes) is crafted with rare materials and ancient techniques, making it a valuable tool for any adventurer seeking to master sea navigation.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T18:33:31.501940+00:00",
    "aiReviewedAt": "2026-07-23T18:33:31.501940+00:00",
    "aiReviewVersion": 1
  },
  "sirsirian_ocean_pearl_diving_premium": {
    "id": "sirsirian_ocean_pearl_diving_premium",
    "name": "Sirsirian Ocean Pearl Diving (Premium)",
    "description": "This ornate diving suit, crafted from ocean-forged steel and adorned with iridescent shell accents, allows you to venture into deep waters in search of a glowing pearl. Forged by the Sirsirian Ocean Divers, it grants you advantage on Swimming checks for a week after your dive. The suit's exoskeleton also ensures that even the most fearsome sharks might follow you home as a sign of respect, though they will not dare to attack. A rare treasure indeed.",
    "price": 1000,
    "icon": "🦪",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Shark Attraction",
      "Advantage on Swimming"
    ],
    "vendor": "sirsirian_ocean_port",
    "shippedBy": "Seashell Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shark Attraction",
        "rules": "For one week after a successful dive, sharks within a 10-foot radius are drawn to you. They will not attack but may circle around as if intrigued by your presence. This effect ends immediately if you engage in combat."
      },
      {
        "title": "Advantage on Swimming",
        "rules": "For one week after donning the suit, you gain advantage on all Swimming checks and saving throws made while underwater or navigating through dense water environments."
      }
    ],
    "levelRequirementReason": "This diving gear is designed for beginners to experienced adventurers who wish to explore the depths without risking their lives.",
    "vendorReason": "The Sirsirian Ocean Port has a long-standing relationship with the Sirsirian Ocean Divers, ensuring that only the best diving suits are available for sale.",
    "shippingDetail": "Delivered by Seashell Crate, this premium item arrives safely and is hand-packed to ensure it reaches you in pristine condition.",
    "usage": {
      "activation": "Put on the suit before diving into deep waters.",
      "duration": "One week after a successful dive.",
      "endsWhen": "Combat or if the suit is removed from the water.",
      "charges": "Unlimited"
    },
    "priceReason": "While not as powerful as other rare items, this diving suit still requires significant resources to create and ship, justifying its price.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-23T18:33:36.226764+00:00",
    "aiReviewedAt": "2026-07-23T18:33:36.226764+00:00",
    "aiReviewVersion": 1
  },
  "sirsirian_ocean_recipe_sushi_platter": {
    "id": "sirsirian_ocean_recipe_sushi_platter",
    "name": "Recipe: Sirsirian Ocean Sushi Platter",
    "description": "The Sirsirian Ocean Sushi Platter, crafted by master chefs whose hands have danced with the tides, is a culinary marvel that transports diners to the depths of the ocean. The perfectly prepared raw fish not only grants you an advantage on Dexterity checks for up to one hour but also imbues you with a gill-like ability, allowing you to hold your breath twice as long in aquatic environments. Landlocked folk may find your presence strange and difficult to read, imposing a disadvantage on Charisma checks when interacting with them.",
    "price": 1000,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Dexterity Checks",
      "Increased Breath Holding Time"
    ],
    "vendor": "sirsirian_ocean",
    "shippedBy": "Tidal Wave Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Dexterity Checks",
        "rules": "You gain advantage on Dexterity checks for one hour after consuming the platter. This effect is limited to once per short or long rest."
      },
      {
        "title": "Increased Breath Holding Time",
        "rules": "For one hour, you can hold your breath twice as long in aquatic environments. This effect ends when you leave an underwater environment or fall unconscious."
      }
    ],
    "levelRequirementReason": "This platter is accessible to most adventurers who have the basic culinary appreciation and understanding of its effects.",
    "vendorReason": "The Sirsirian Ocean Chefs are renowned for their expertise in oceanic cuisine, making this platter a staple in their offerings.",
    "shippingDetail": "The platter is shipped via the Tidal Wave Courier Service, ensuring freshness and delivery directly to your doorstep.",
    "usage": {
      "activation": "Instantaneous consumption of the platter grants both effects immediately.",
      "duration": "One hour for each effect.",
      "endsWhen": "Upon leaving an underwater environment or falling unconscious.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The balanced XP price reflects the platter's unique combination of utility and flavor, providing a flavorful but not overpowered experience for adventurers.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-23T18:33:42.074704+00:00",
    "aiReviewedAt": "2026-07-23T18:33:42.074704+00:00",
    "aiReviewVersion": 1
  },
  "sirsirian_ocean_salt_evaporator": {
    "id": "sirsirian_ocean_salt_evaporator",
    "name": "Sirsirian Ocean Salt Evaporator",
    "description": "The Sirsirian Ocean Salt Evaporator is a compact, rusted pan that retains a faint, briny scent of the sea. Crafted by the Ocean Salters from the verdant Sirsirian Isles, it can swiftly evaporate seawater into pure salt for biscuits' preservation. When placed in an open flame, it emits a soft hiss as the salt crystallizes, yielding a +1 bonus to cooking rolls (preservation). The pan's metal exterior is corroded by the salts it processes, but this only enhances its efficiency and flavor. A portable marvel for seafarers, it ships directly from Sirsirian Ocean Port via the Salty Sea Shipment, known for its timely deliveries.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍪",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Portable Salt Evaporation",
      "Enhances Preservation"
    ],
    "vendor": "sirsirian_ocean_port",
    "shippedBy": "Salty Sea Shipment",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Portable Salt Evaporation",
        "rules": "When activated with a bonus action and placed in an open flame, the Sirsirian Ocean Salt Evaporator instantly evaporates seawater into pure salt. This effect lasts for 1 minute or until the pan is removed from the heat source."
      },
      {
        "title": "Enhances Preservation",
        "rules": "The user gains a +1 bonus to all cooking checks related to preservation of food items, lasting until the end of their next long rest."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners and seasoned adventurers alike, offering essential skills without requiring high-level expertise.",
    "vendorReason": "Sirsirian Ocean Port specializes in maritime goods and tools needed by seafarers, including this salt-evaporating pan.",
    "shippingDetail": "Ships within a week of order placement, ensuring timely arrival for eager cooks and bakers.",
    "usage": {
      "activation": "Bonus action to place in an open flame",
      "duration": "1 minute or until removed from heat",
      "endsWhen": "The pan is removed from the heat source",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects its rarity and utility, offering a balance between cost and benefit for adventurers.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-23T18:34:01.854421+00:00",
    "aiReviewedAt": "2026-07-23T18:34:01.854421+00:00",
    "aiReviewVersion": 1
  },
  "sirsirian_ocean_salt_grinder": {
    "id": "sirsirian_ocean_salt_grinder",
    "name": "Sirsirian Ocean Salt Grinder",
    "description": "The Sirsirian Ocean Salt Grinder is a sleek, brass contraption with a rugged handle and a rotating wheel. Crafted from the salvaged metal of old ships, it can grind salt from seawater at a rate that would astonish even the most seasoned sailors. This handy device is waterproof, allowing you to use it underwater without fear of malfunction. However, its thirst-inducing nature ensures you remain perpetually parched in dry climates, making hydration a constant challenge.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧂",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Seawater-to-Salt",
      "Waterproof"
    ],
    "vendor": "sirsirian_ocean",
    "shippedBy": "Tidal Wave",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Seawater-to-Salt",
        "rules": "By using this device as an action, you can grind salt from seawater. This effect is instantaneous and requires no material components. You gain advantage on any cooking checks made with the salt produced."
      },
      {
        "title": "Waterproof",
        "rules": "This grinder remains functional when submerged in water. It can be used underwater without risk of damage or malfunction."
      }
    ],
    "levelRequirementReason": "The Sirsirian Ocean Salt Grinder is simple to operate, requiring no advanced training.",
    "vendorReason": "Sirsirian Ocean Salt Works is renowned for its maritime inventions and the grinder's origin ensures its quality.",
    "shippingDetail": "Ships via Tidal Wave, arriving within a week of order placement.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use per day; recharges at dawn the next day.",
      "charges": "Uses"
    },
    "priceReason": "The Sirsirian Ocean Salt Grinder offers a rare utility for adventurers, making it moderately priced but still exclusive.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-23T18:33:49.403863+00:00",
    "aiReviewedAt": "2026-07-23T18:33:49.403863+00:00",
    "aiReviewVersion": 1
  },
  "sirsirian_ocean_sea_biscuits_recipe": {
    "id": "sirsirian_ocean_sea_biscuits_recipe",
    "name": "Recipe: Sirsirian Ocean Sea Biscuits",
    "description": "The Sirsirian Ocean Sea Biscuits are hardtack biscuits crafted for long voyages at sea. These durable, grainy morsels are baked to a crisp perfection by seasoned ocean sailors and can last weeks in the salty air without spoiling. They provide sustenance on the open seas, allowing sailors to ignore hunger pangs for an entire day, and grant advantage on Constitution saving throws against the ever-present seasickness that plagues ships at sea.",
    "price": 1000,
    "icon": "🍪",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Sustenance",
      "Sea Sickness Resistance"
    ],
    "vendor": "sirsirian_ocean_port",
    "shippedBy": "Salty Cracker Codex",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sustenance",
        "rules": "Eating one biscuit provides the effects of a ration for 24 hours, granting advantage on Constitution saving throws made to avoid starvation and dehydration. The effect lasts until the recipient finishes their next meal."
      },
      {
        "title": "Sea Sickness Resistance",
        "rules": "When consumed, the biscuit grants the eater advantage on all Constitution saving throws against seasickness for 1 hour. This effect does not stack with other sources of advantage or bonuses to this save."
      }
    ],
    "levelRequirementReason": "This basic survival food is accessible to any character, offering essential nourishment and protection from the sea's ill effects.",
    "vendorReason": "As a port city reliant on ocean trade, Sirsirian Ocean Port stocks these biscuits for sailors embarking on long voyages.",
    "shippingDetail": "Ships are delivered with the biscuits in waterproof containers to ensure they remain edible during transit.",
    "usage": {
      "activation": "Eating one biscuit",
      "duration": "24 hours for sustenance; 1 hour against seasickness",
      "endsWhen": "The effect ends when the duration expires or the biscuit is eaten",
      "charges": "Unlimited, as each biscuit can be used once"
    },
    "priceReason": "This price reflects a balanced cost for the essential survival value and unique flavor of these biscuits.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-23T18:33:56.422004+00:00",
    "aiReviewedAt": "2026-07-23T18:33:56.422004+00:00",
    "aiReviewVersion": 1
  },
  "sirsirian_ocean_seashell_bikini": {
    "id": "sirsirian_ocean_seashell_bikini",
    "name": "Sirsirian Ocean Seashell Bikini ",
    "description": "The Sirsirian Ocean Seashell Bikini is a vibrant, armor-like swimsuit crafted from iridescent seashells and woven with ocean magic. This tropical attire provides +1 AC in water, and its clattering shells can distract fish within 30 feet, potentially granting advantage on Stealth checks while swimming. The bikini's design is the result of years of collaboration between underwater artisans and land-based divers, ensuring it offers both style and protection.",
    "category": "equipment",
    "price": 1000,
    "icon": "👙",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Seashell Armor",
      "Fish Distractor"
    ],
    "vendor": "sirsirian_ocean_beach",
    "shippedBy": "Wave-Washed Cloth",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Seashell Armor",
        "rules": "When worn in water, the Sirsirian Ocean Seashell Bikini provides +1 AC. This effect lasts until you leave the water."
      },
      {
        "title": "Fish Distractor",
        "rules": "As a bonus action, you can make a noise with your seashell bikini to distract fish within 30 feet. On a successful DC 12 Wisdom (Perception) check, creatures within range must succeed on a DC 14 Wisdom saving throw or become distracted for 1 round."
      }
    ],
    "levelRequirementReason": "This swimsuit is designed to be accessible and fun for all adventurers.",
    "vendorReason": "The Sirsirian Ocean Divers have a long-standing tradition of creating functional, fashionable ocean gear.",
    "shippingDetail": "Delivered by the ocean's currents, ensuring your package arrives in perfect condition.",
    "usage": {
      "activation": "Bonus action to use Fish Distractor. Passive for Seashell Armor.",
      "duration": "Instantaneous activation; Seashell Armor lasts while in water.",
      "endsWhen": "Leaving the water; ends when the distraction effect is used.",
      "charges": "Unlimited, as long as you remain in water."
    },
    "priceReason": "The balanced price reflects its unique combination of utility and charm without overpricing its features.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T18:34:04.434925+00:00",
    "aiReviewedAt": "2026-07-23T18:34:04.434925+00:00",
    "aiReviewVersion": 1
  },
  "sirsirian_ocean_seashell_bra": {
    "id": "sirsirian_ocean_seashell_bra",
    "name": "Sirsirian Ocean Seashell Bra",
    "description": "The Sirsirian Ocean Seashell Bra is a delicate garment woven from shimmering seashells and enchanted with the essence of the ocean. It grants wearers an air of tranquility, allowing them to communicate effortlessly with sea creatures. The bra whispers secrets of the deep each full moon, granting insight into aquatic lore once per day. However, land-dwellers often find it disconcerting, imposing a disadvantage on Charisma checks when interacting with them.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐚",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Ocean Whisperer",
      "Discomfort on Land"
    ],
    "vendor": "sirsirian_ocean",
    "shippedBy": "Tidal Wave Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ocean Whisperer",
        "rules": "When the wearer is near water during a full moon, they gain advantage on one Charisma (Performance) check related to oceanic creatures per day."
      },
      {
        "title": "Discomfort on Land",
        "rules": "The wearer suffers disadvantage on all Charisma checks with land-dwellers due to their unsettling appearance. This effect persists until the wearer spends a short rest in an aquatic environment."
      }
    ],
    "levelRequirementReason": "This bra is designed for beginners and adventurers just starting their oceanic adventures.",
    "vendorReason": "The Sirsirian Ocean Tailors are renowned for their unique seashell crafts, which resonate with the ocean's mystical energies.",
    "shippingDetail": "Ships via Tidal Wave Express within a week, ensuring the wearer feels the ocean's embrace as soon as possible.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Until the next short or long rest",
      "endsWhen": "The wearer spends time on land without an aquatic environment for more than 8 hours",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the garment's unique enchantments and materials used in its creation.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-23T18:34:10.747556+00:00",
    "aiReviewedAt": "2026-07-23T18:34:10.747556+00:00",
    "aiReviewVersion": 1
  },
  "skaven_cheese_wheel_delivery": {
    "id": "skaven_cheese_wheel_delivery",
    "name": "Skaven Cheese Wheel Delivery",
    "description": "Delivered by a plague-ridden rat swarm from the sewers of Skarngru, this cheese wheel is a symbol of the Skaven's culinary prowess. Consuming it grants you advantage on Charisma checks with rodents but also attracts more rats to your vicinity, imposing disadvantage on Stealth checks until they are sated. Beware, for eating it might cause you to contract the plague; make a Constitution saving throw (DC 12) or be poisoned for an hour.",
    "category": "services",
    "price": 1000,
    "icon": "🧀",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Advantage on Charisma with Rats",
      "Rat Attraction"
    ],
    "vendor": "skaven",
    "shippedBy": "Rat Swarm",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Charisma with Rats",
        "rules": "You gain advantage on Charisma checks when interacting with rats, but disadvantage on Stealth checks as they follow you."
      },
      {
        "title": "Rat Attraction",
        "rules": "For 1 hour after eating the cheese, any creature within 30 feet that can see you has disadvantage on Dexterity (Stealth) checks. This effect ends when you finish a long rest or consume another serving of Skaven Cheese Wheel."
      }
    ],
    "levelRequirementReason": "The item's effects are minor and temporary, making it accessible to lower-level characters.",
    "vendorReason": "Skaven Cheesemongers are notorious for their peculiar wares, including this plague-ridden delicacy.",
    "shippingDetail": "Delivered by a swarm of rats that may spread the plague if not contained properly.",
    "usage": {
      "activation": "Instantaneous consumption",
      "duration": "1 hour per serving",
      "endsWhen": "Ends when you finish a long rest or consume another serving",
      "charges": "Unlimited"
    },
    "priceReason": "The item's plague risk and temporary effects justify its price in XP.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T18:34:15.811180+00:00",
    "aiReviewedAt": "2026-07-23T18:34:15.811180+00:00",
    "aiReviewVersion": 1
  },
  "skaven_rat_fur_hood": {
    "id": "skaven_rat_fur_hood",
    "name": "Skaven Rat Fur Hood",
    "description": "The Skaven Rat Fur Hood is crafted from the sleek pelts of cunning sewer rats, their wiry fur now a symbol of stealth and subterfuge. This hood muffles your squeaks and whispers, blending you into the shadows with ease. Crafted by the wily hands of the Skaven Scavengers in their hidden lairs deep underground, it offers an advantage on Stealth checks within sewers, but beware—real rats may be drawn to its scent.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧢",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Stealth Checks",
      "Attracts Real Rats"
    ],
    "vendor": "skaven_tunnels",
    "shippedBy": "Furry Fringe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Stealth Checks in Sewers",
        "rules": "When worn within sewers, you gain advantage on Dexterity (Stealth) checks. This effect ends if you leave the sewers or are no longer wearing the hood."
      },
      {
        "title": "Attracts Real Rats",
        "rules": "For 1 hour after donning this hood, real rats are drawn to your location. This effect can be dispelled by removing the hood or by the use of a Remove Curse spell."
      }
    ],
    "levelRequirementReason": "The complexity and craftsmanship required for such a specialized item demand at least 1st level.",
    "vendorReason": "The Skaven Tunnels is the only place where one can find such meticulously crafted gear from the depths of the sewers.",
    "shippingDetail": "Ships directly via Furry Fringe Express, ensuring quick delivery with special care for any potential rodent hitchhikers.",
    "usage": {
      "activation": "Passive effect; no activation required once worn in sewers.",
      "duration": "Until the wearer leaves the sewers or removes the hood, whichever comes first. Can be dispelled by removing the hood or a Remove Curse spell.",
      "endsWhen": "Leaving the sewers or removal of the hood, or through dispelling magic like a Remove Curse spell.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted with rare materials and expert Skaven craftsmanship, this item is reasonably priced for its utility within the sewers.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-23T18:34:35.939469+00:00",
    "aiReviewedAt": "2026-07-23T18:34:35.939469+00:00",
    "aiReviewVersion": 1
  },
  "skaven_rat_risotto_recipe": {
    "id": "skaven_rat_risotto_recipe",
    "name": "Recipe: Skaven Rat Risotto",
    "description": "This parchment scroll bears Warren Chefs' signature ink and a sketch of a mischievous rat. When you follow the recipe to stir creamy rice with 'special' proteins, you gain advantage on Stealth checks when moving in tight spaces for an hour. The dish itself is a delicacy that only Skaven can create; it's said that the rats contribute their unique enzymes to the risotto, making it both delicious and deadly in its effects.",
    "price": 1000,
    "icon": "🍚",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Rat-Ribbed Risotto",
      "Stealthy Advantage"
    ],
    "vendor": "skaven_warren",
    "shippedBy": "Squeaky Stir Scroll",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rat-Ribbed Risotto",
        "rules": "You prepare the dish by stirring creamy rice with 'special' proteins for 30 minutes. Upon consuming, you gain advantage on Stealth checks in tight spaces for one hour. This effect ends when you finish your next long rest."
      },
      {
        "title": "Stealthy Advantage",
        "rules": "The dish itself is a sign of the Skaven's culinary prowess and their cunning nature. Consuming it grants you a +2 bonus to Stealth checks in tight spaces for one hour, which can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The dish requires basic cooking skills that even low-level characters can achieve.",
    "vendorReason": "Skaven chefs are known for their unique recipes and this scroll is a testament to their culinary secrets.",
    "shippingDetail": "Delivered by a fleet of squeaking rats, ensuring the recipe remains fresh.",
    "usage": {
      "activation": "Prepare and consume the dish as a bonus action.",
      "duration": "One hour per use.",
      "endsWhen": "Completing a long rest or after one hour.",
      "charges": "Unlimited; can be used once per short rest."
    },
    "priceReason": "The recipe's rarity and the unique ingredients required make it moderately priced for its utility in stealthy situations.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T18:34:26.798484+00:00",
    "aiReviewedAt": "2026-07-23T18:34:26.798484+00:00",
    "aiReviewVersion": 1
  },
  "skaven_rat_swarm_summon_service": {
    "id": "skaven_rat_swarm_summon_service",
    "name": "Skaven Rat Swarm Summon Service",
    "description": "Invoke a menacing Skaven Rat Swarm from the sewers to aid you in your quest. These rodents are bred by the cunning Skaven Warlords and are as much a part of their arsenal as their most deadly weapons. Summoning the swarm requires a quick incantation or a flicker of the wrist, and it scurries forth with surprising speed. The rats are more than just vermin; they can distract foes, scout unseen paths, and even nibble through mundane objects such as your food supplies if left unattended.",
    "price": 1000,
    "icon": "🐀",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Distraction & Scouting",
      "Nibble Food"
    ],
    "vendor": "skaven_warren",
    "shippedBy": "Cheese Bait",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Distraction & Scouting",
        "rules": "As a bonus action, you can summon a swarm of vermin consisting of 1d6 Rats. This swarm provides a distraction or serves as an effective scout within 30 feet. The rats are active for 1 minute and then return to the sewers. If the swarm is provoked into combat, they deal 1d4 damage to creatures that enter their space on a successful bite attack."
      },
      {
        "title": "Nibble Food",
        "rules": "The rats will nibble through any food items within reach after being summoned, reducing your supplies by 1d6 portions. This effect occurs as a one-time event and cannot be prevented or redirected."
      }
    ],
    "levelRequirementReason": "This service is available to all adventurers regardless of level, ensuring even the newest heroes can benefit from Skaven tactics.",
    "vendorReason": "The Skaven Warlords are known for their mastery over vermin and often provide such services to those in need.",
    "shippingDetail": "The rats arrive swiftly, delivered by the infamous Cheese Bait express courier service, which is notorious for its timely deliveries through even the most treacherous terrain.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 Minute",
      "endsWhen": "The swarm returns to the sewers or if brought into combat.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects a balanced cost for this versatile and strategic service, suitable for adventurers of all levels.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-23T18:34:33.213667+00:00",
    "aiReviewedAt": "2026-07-23T18:34:33.213667+00:00",
    "aiReviewVersion": 1
  },
  "skaven_warpstone_addiction_counseling": {
    "id": "skaven_warpstone_addiction_counseling",
    "name": "Skaven Warpstone Addiction Counseling",
    "description": "This small, glowing stone pulsates with dark energy, a relic of the Skaven's warpstone addiction counseling program. Crafted in the depths of their warrens, it offers temporary respite from the insidious pull of the warpstone. For one week, you gain advantage on saving throws against poison and can remove one level of exhaustion caused by your constant exposure to the stone. However, a lingering craving for cheese and conspiracy theories remains, ensuring that your recovery is never complete.",
    "category": "services",
    "price": 1000,
    "icon": "☢️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage on saves vs. poison",
      "Remove one level of exhaustion"
    ],
    "vendor": "skaven",
    "shippedBy": "Sewer Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Poison Save Advantage",
        "rules": "For a duration of 7 days after activation, you gain advantage on saving throws against the effects of poison caused by warpstone."
      },
      {
        "title": "Exhaustion Removal",
        "rules": "Activate this item to remove one level of exhaustion caused directly by your exposure to warpstone. This effect is permanent and does not require a save."
      }
    ],
    "levelRequirementReason": "This item requires no specific class or background, making it accessible early in any campaign.",
    "vendorReason": "The Skaven Rehabilitation program is renowned for its expertise in helping those afflicted by warpstone addiction.",
    "shippingDetail": "Due to the fragile nature of this item, it must be shipped via Sewer Pipe Express to ensure safe delivery through the city's complex underground network.",
    "usage": {
      "activation": "Object interaction",
      "duration": "Instantaneous effect; lasts for 7 days after activation",
      "endsWhen": "The effect ends when the duration expires or you are exposed to warpstone again, whichever comes first",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item is priced at 1000 XP to reflect its utility in managing a significant but not overwhelming risk.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-23T18:34:56.224483+00:00",
    "aiReviewedAt": "2026-07-23T18:34:56.224483+00:00",
    "aiReviewVersion": 1
  },
  "skaven_warren_rat_trap_strainer": {
    "id": "skaven_warren_rat_trap_strainer",
    "name": "Skaven Warren Rat Trap Strainer",
    "description": "The Skaven Warren Rat Trap Strainer is a finely crafted device made by the cunning Warren Tinkers. This strainer not only filters out unwanted debris but also captures stray bits of rat, which can be used as unique flavor enhancers in risotto dishes. As you strain your ingredients, the strainer emits a sibilant squeak that alerts you to its efficiency. It is a testament to Skaven ingenuity and perfect for those who seek to elevate their cooking with unconventional methods.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍚",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Traps Extra Ingredients",
      "Enhances Sneaky Cooking"
    ],
    "vendor": "skaven_warren",
    "shippedBy": "Squeak Sieve Sack",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Traps Extra Ingredients",
        "rules": "When you use the strainer, it captures any stray bits or extra ingredients that would otherwise be lost. These can be used as bonus ingredients in your cooking. This effect is instantaneous and requires no action."
      },
      {
        "title": "Enhances Sneaky Cooking",
        "rules": "While using this strainer during cooking tasks, you gain a +1 bonus to Dexterity (Sleight of Hand) checks related to sneaky or covert cooking activities. This benefit lasts for 10 minutes per use."
      }
    ],
    "levelRequirementReason": "It is suitable for beginners who are learning the nuances of sneaky and precise cooking.",
    "vendorReason": "The Skaven Warren Tinkers are known for their clever inventions, and this strainer is one such marvel.",
    "shippingDetail": "Shipped by the same courier who delivers the Warren Tinkers' other inventions, ensuring it arrives in perfect condition.",
    "usage": {
      "activation": "Instantaneous when used during cooking tasks.",
      "duration": "10 minutes per use.",
      "endsWhen": "The effect ends after 10 minutes or if you use the strainer again while cooking.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This item is crafted with special materials and Skaven craftsmanship, making it a fair price for its unique utility.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-23T18:34:41.907170+00:00",
    "aiReviewedAt": "2026-07-23T18:34:41.907170+00:00",
    "aiReviewVersion": 1
  },
  "skycavern_anti_gravity_gel": {
    "id": "skycavern_anti_gravity_gel",
    "name": "Skycavern Anti-Gravity Gel",
    "description": "A shimmering, viscous gel that coats a small area in an ethereal glow. When applied, it momentarily disrupts gravity over a 10-foot radius, allowing objects and creatures to float upward gently for three rounds. The gel's origin lies within the ancient Skycaverns, where it is harvested from rare crystals deep beneath the earth. This rare item can only be purchased from the trusted Skycavern Trader who has exclusive access to these caverns.",
    "category": "consumables",
    "price": 1000,
    "icon": "💧",
    "stock": 7,
    "rarity": "rare",
    "effects": [
      "Anti-Gravity Sphere",
      "Objects Float"
    ],
    "vendor": "skycavern_trader",
    "shippedBy": "Suspended Vial",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Anti-Gravity Sphere",
        "rules": "As a bonus action, apply the gel to create an anti-gravity field in a 10-foot radius sphere centered on you. This effect lasts for three rounds. Any creature or object within this area is unaffected by gravity, causing them to gently float upwards. The effect ends when the duration expires."
      },
      {
        "title": "Objects Float",
        "rules": "During the duration of the anti-gravity field, objects and creatures within the sphere slowly ascend at a rate of 1 foot per round until they reach an altitude of 30 feet above ground level. Any creature that comes into contact with the boundary of this area is immediately pushed gently upwards."
      }
    ],
    "levelRequirementReason": "This item requires minimal magical power, suitable for low-level adventurers who might need to explore areas with unstable gravity.",
    "vendorReason": "The Skycavern Trader has a lifelong connection with the ancient Skycaverns and is the only one permitted to extract this rare gel from its source.",
    "shippingDetail": "Delivered via airship, ensuring safe transport of the fragile gel. The courier ensures that the vials are kept in a controlled environment until they reach their destination.",
    "usage": {
      "activation": "Bonus action to apply and activate the gel.",
      "duration": "3 rounds",
      "endsWhen": "Duration ends or when an area outside the sphere is breached by gravity, ending the effect for all within it.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price considering its rare extraction method and limited availability.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-23T18:34:49.178772+00:00",
    "aiReviewedAt": "2026-07-23T18:34:49.178772+00:00",
    "aiReviewVersion": 1
  },
  "skycavern_echo_stone": {
    "id": "skycavern_echo_stone",
    "name": "Skycavern Echo Stone",
    "description": "The Skycavern Echo Stone, a small crystal nestled within a delicate silver frame, captures and replays the last ten seconds of sound it hears, creating an eerie echo chamber effect. Its origins lie in the ethereal caverns where the walls hum with ancient magic. Crafted by the enigmatic denizens of Skycavern, this stone is not merely a recorder but also a tool for deception, able to produce simple audio illusions that can trick even the most vigilant ears.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔊",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Perfect Echo Recorder",
      "Simple Audio Illusion"
    ],
    "vendor": "skycavern_trader",
    "shippedBy": "Feywind Messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Perfect Echo Recorder",
        "rules": "As an action, the wielder activates the stone to record ten seconds of sound. Once activated, it can be used once per short or long rest to replay the recorded sounds as a sound effect with a range of 30 feet, creating an exact replica of the original sound."
      },
      {
        "title": "Simple Audio Illusion",
        "rules": "The wielder can activate the stone once per day to create a simple audio illusion within 30 feet that lasts for up to one minute. The illusion must be related to the recorded sounds and cannot be heard by creatures immune to sound."
      }
    ],
    "levelRequirementReason": "This item requires minimal dexterity, making it accessible to lower-level characters who can benefit from its unique abilities.",
    "vendorReason": "The Skycavern Trader is a trusted merchant with ties to the caverns where this stone originates, ensuring authenticity and reliability.",
    "shippingDetail": "Delivered by the swift Feywind Messengers, who ensure the stone arrives in pristine condition.",
    "usage": {
      "activation": "Action or Reaction (to activate for recording or illusion)",
      "duration": "Instantaneous activation; sound effect lasts until used or dispelled by the wielder",
      "endsWhen": "Used once per day or rest, charges are unlimited",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Echo Stone's rarity and unique crafting process justify its price in the market.",
    "priceOriginal": 7200,
    "priceReviewedAt": "2026-07-23T18:35:04.450838+00:00",
    "aiReviewedAt": "2026-07-23T18:35:04.450838+00:00",
    "aiReviewVersion": 1
  },
  "skycaverns_aerial_harness": {
    "id": "skycaverns_aerial_harness",
    "name": "Skycaverns Aerial Harness",
    "description": "The Skycaverns Aerial Harness, a harness of supple leather and enchanted hemp, is forged by the Cavern Riggers from the heart of the Skycaverns. Its creaking hinges whisper secrets to those who listen closely, alerting nearby birds to your presence. This harness not only ensures safe passage through the clouds but also grants you extraordinary agility in aerial maneuvers. The harness allows you to avoid falls with ease and even slow a fall to a gentle landing when used.",
    "price": 1000,
    "icon": "🎽",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Acrobatics checks",
      "Slow Fall ability"
    ],
    "vendor": "skycaverns_aerie",
    "shippedBy": "Wind-Resistant Rope",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Advantage on Acrobatics Checks",
        "rules": "You gain advantage on any check made with the Acrobatics skill when using this harness. This effect lasts until the end of your next turn."
      },
      {
        "title": "Slow Fall Ability",
        "rules": "Once per day, you can activate the Slow Fall ability by making a DC 15 Strength (Athletics) check. On a success, you are slowed to a safe descent speed when falling, allowing you to land safely after dropping from up to 20 feet."
      }
    ],
    "levelRequirementReason": "This harness requires at least 6th level to ensure the user has the physical and magical aptitude for such advanced aerial maneuvers.",
    "vendorReason": "The Skycavern Aeries have long been trusted by adventurers for their expertise in cloud-walking gear and techniques.",
    "shippingDetail": "Ships via aerial courier, ensuring swift delivery through the Skycaverns. The harness is delivered within one day of purchase.",
    "usage": {
      "activation": "Activates on a reaction or as an action when falling to use Slow Fall ability.",
      "duration": "Until end of next turn for Acrobatics advantage; until you land safely after using the Slow Fall ability.",
      "endsWhen": "The effects cease upon landing safely.",
      "charges": "Recharges once per long rest."
    },
    "priceReason": "Balanced at 1000 XP, this harness is priced to reflect its advanced enchantments and the expertise required for its use.",
    "priceOriginal": 19000,
    "priceReviewedAt": "2026-07-23T18:35:12.253608+00:00",
    "aiReviewedAt": "2026-07-23T18:35:12.253608+00:00",
    "aiReviewVersion": 1
  },
  "skycaverns_cloud_berry_tarts_recipe": {
    "id": "skycaverns_cloud_berry_tarts_recipe",
    "name": "Recipe: Skycaverns Cloud Berry Tarts",
    "description": "The Recipe for Skycaverns Cloud Berry Tarts is a delicate parchment that whispers of ethereal skies and celestial fruit. This recipe calls for berries plucked from clouds, which grow in the rarefied air above the caverns. The tarts are baked to perfection, floating on a puff of pastry, and when consumed, they grant the baker an advantage on Dexterity (Acrobatics) checks for two hours. Additionally, eating one allows you to safely descend 10 feet per round without falling damage, thanks to the cloudberries' magic-infused nectar.",
    "price": 1000,
    "icon": "🫐",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Bake in Pastry",
      "Cloud Berry Advantage"
    ],
    "vendor": "skycaverns_kitchen",
    "shippedBy": "Airy Pastry Pan",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bake in Pastry",
        "rules": "Activates on consumption. You gain advantage on Dexterity (Acrobatics) checks for two hours and can safely descend 10 feet per round without falling damage, thanks to the cloudberries' magic-infused nectar. This effect lasts until you fall or use your action for another purpose."
      },
      {
        "title": "Cloud Berry Advantage",
        "rules": "Activates on consumption. You gain advantage on Dexterity (Acrobatics) checks for two hours. This effect ends when the duration expires, if you fall, or if you use an action for another purpose."
      }
    ],
    "levelRequirementReason": "This recipe is simple enough that any adventurer with basic skills can attempt to make these tarts.",
    "vendorReason": "Cavern Bakers are experts in cloud berry cultivation and pastry arts, ensuring the quality of this recipe.",
    "shippingDetail": "Shipped by an airy pan that floats gently to your location, arriving at dawn on the third day after purchase.",
    "usage": {
      "activation": "Consumption",
      "duration": "Two hours and until you fall or use an action for another purpose",
      "endsWhen": "Duration ends, falling, or using an action for another purpose",
      "charges": "Unlimited"
    },
    "priceReason": "The rare cloud berries and the unique process of baking these tarts in a floating pastry are costly elements that justify this price.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T18:35:21.086270+00:00",
    "aiReviewedAt": "2026-07-23T18:35:21.086270+00:00",
    "aiReviewVersion": 1
  },
  "skycaverns_cloud_storage": {
    "id": "skycaverns_cloud_storage",
    "name": "Skycaverns Cloud Storage",
    "description": "The Skycaverns Cloud Storage is a floating, glowing cloud that appears at your command. Crafted from enchanted fabric woven by the skilled artisans of Skycaverns, it can hold up to 100 pounds of items without affecting its light form. Access this storage as a bonus action, and retrieve any item within an hour with no risk of loss—unless a lightning storm strikes, in which case your data could be corrupted for 1d4 hours.",
    "category": "premium",
    "price": 1000,
    "icon": "☁️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Cloud Storage",
      "Storm Risks"
    ],
    "vendor": "skycaverns",
    "shippedBy": "Cumulonimbus Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Cloud Storage",
        "rules": "As a bonus action, you can command the cloud to store up to 100 pounds of items. The storage is instantaneous and requires no concentration. You can access your stored items at any time within an hour without risk of loss."
      },
      {
        "title": "Storm Risks",
        "rules": "If a lightning storm occurs within 3 miles, there's a 5% chance per access that the stored items will be 'corrupted by wind', leaving them slightly damp. If this happens, your items are unusable until purified with a successful DC 12 Con saving throw."
      }
    ],
    "levelRequirementReason": "This item requires a higher level to master due to its complex enchantment and the risk it poses in adverse weather conditions.",
    "vendorReason": "Skycaverns is renowned for their expertise in data management and magical storage solutions, making them the perfect source for this unique item.",
    "shippingDetail": "The cloud is delivered by a Cumulonimbus Courier, ensuring safe transport through even the most turbulent skies. The courier provides real-time updates on weather conditions to ensure secure delivery.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous storage; items can be accessed within an hour",
      "endsWhen": "1d4 hours of storm corruption or until the cloud is destroyed",
      "charges": "Unlimited, as long as the cloud remains intact"
    },
    "priceReason": "The item's rarity and enchantment justify its price, offering a unique utility that few other items can match.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-23T18:35:12.197099+00:00",
    "aiReviewedAt": "2026-07-23T18:35:12.197099+00:00",
    "aiReviewVersion": 1
  },
  "skycaverns_gryphon_egg": {
    "id": "skycaverns_gryphon_egg",
    "name": "Skycaverns Gryphon Egg",
    "description": "The Skycaverns Gryphon Egg is a large, mottled ovoid of hardened stone and moss, imbued with arcane energy that whispers of ancient skies and loyalty. Crafted in the heart of the Skycaverns by the elven artisans of the Skyfey, this egg requires careful incubation to hatch into a loyal gryphon companion. Once hatched, it grows rapidly under the mentorship of its human partner, eventually becoming an aerial mount capable of delivering swift and powerful combat support.",
    "category": "faction",
    "price": 1000,
    "icon": "🥚",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Loyal Companion",
      "Arcane Incubation"
    ],
    "vendor": "Skycaverns",
    "shippedBy": "Warm Nest Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Loyal Companion",
        "rules": "After a month of incubation, the egg hatches into a baby gryphon. The gryphon grows into a loyal mount over time, providing combat support and aerial transport. The mount's stats are determined by the DM, but it is always at least Medium size and has a Strength score of 18 or higher."
      },
      {
        "title": "Arcane Incubation",
        "rules": "The egg must be incubated for one month in a special nest provided by Skycaverns. During this time, the owner must feed the egg a steady diet of raw meat and shiny objects to ensure successful hatching."
      }
    ],
    "levelRequirementReason": "This item is accessible early on to allow players to embark on adventures with their gryphon companion.",
    "vendorReason": "The egg originates from the Skyfey, whose artisans are known for creating magical mounts and companions.",
    "shippingDetail": "The nest box is enchanted to keep the egg at the perfect temperature during transit.",
    "usage": {
      "activation": "Instantaneous upon hatching; grows over time as a loyal mount.",
      "duration": "Permanent, with the mount's stats determined by the DM and growing in strength.",
      "endsWhen": "The mount is destroyed or abandoned.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the rare materials, arcane energy, and special crafting involved in creating this magical egg.",
    "priceOriginal": 40000,
    "priceReviewedAt": "2026-07-23T18:35:35.204046+00:00",
    "aiReviewedAt": "2026-07-23T18:35:35.204046+00:00",
    "aiReviewVersion": 1
  },
  "skycaverns_recipe_cloud_cream_puffs": {
    "id": "skycaverns_recipe_cloud_cream_puffs",
    "name": "Recipe: Skycaverns Cloud Cream Puffs",
    "description": "The Recipe: Skycaverns Cloud Cream Puffs is a delicate culinary creation that defies gravity. These puffs, made from the finest cloud cream and baked by the legendary Skycaverns Bakers, are so light they can be caught on a breeze. Consuming them grants you a brief respite from the weight of the world, increasing your speed by +5 feet for an hour. However, if not eaten within one minute, the puffs will float away on the wind, leaving no trace behind.",
    "price": 1000,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Light as Air",
      "Cloudbound"
    ],
    "vendor": "skycaverns",
    "shippedBy": "Cumulonimbus Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Light as Air",
        "rules": "When you consume these puffs, you gain advantage on saving throws against falling damage for the next hour. Additionally, your speed is increased by +5 feet for that duration."
      },
      {
        "title": "Cloudbound",
        "rules": "If not eaten within 1 minute of receiving them, the cloud cream puffs will float away and dissipate into the sky, rendering their effects useless."
      }
    ],
    "levelRequirementReason": "The basic complexity of preparing these puffs requires at least a first-level character to understand.",
    "vendorReason": "Only the skilled bakers of Skycaverns can conjure such ethereal confections from the clouds above.",
    "shippingDetail": "The courier ensures swift delivery, but the puffs must be consumed within one hour of arrival to retain their effect.",
    "usage": {
      "activation": "Eating the puffs",
      "duration": "1 hour",
      "endsWhen": "The duration expires or if not eaten within 1 minute of receiving them",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this recipe reflects the skill and time required to create such ethereal delicacies.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-23T18:35:28.418110+00:00",
    "aiReviewedAt": "2026-07-23T18:35:28.418110+00:00",
    "aiReviewVersion": 1
  },
  "skycaverns_wind_chime": {
    "id": "skycaverns_wind_chime",
    "name": "Skycaverns Wind Chime",
    "description": "The Skycaverns Wind Chime is a delicate, handcrafted set of brass chimes hanging from a weathered oak stand. Crafted in the heart of the Skycaverns by master artisans, these chimes resonate with the very essence of the aerial winds. They create a soft gust that can push Small creatures up to 5 feet away and grant advantage on Survival checks related to wind conditions. Their melodious tune also grants a character performing with wind instruments an additional +2 to their Performance checks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔔",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Aerial Gust",
      "Wind Alert"
    ],
    "vendor": "skycaverns",
    "shippedBy": "Aerial Drop (Parachute)",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Aerial Gust",
        "rules": "As an action, the wielder can activate the Wind Chime to create a soft gust of wind within a 10-foot radius. This gust pushes any Small or smaller creature within range up to 5 feet away from its origin. Creatures affected must succeed on a Dexterity saving throw (DC 14) or be pushed. The chimes can only be used once per long rest."
      },
      {
        "title": "Wind Alert",
        "rules": "The Wind Chime provides a +2 bonus to Survival checks related to wind conditions, such as predicting storms or navigating by the wind's direction. This effect lasts until the end of the wielder's next turn after using the Aerial Gust ability."
      }
    ],
    "levelRequirementReason": "The Wind Chime is suitable for adventurers just beginning their journey, allowing them to harness the power of the wind early in their career.",
    "vendorReason": "Skycaverns artisans are known for creating items that resonate with the natural world, and these chimes are no exception.",
    "shippingDetail": "The Wind Chime is delivered by skilled Aerial Drovers using parachutes to ensure safe descent from great heights.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous, with a one-long-rest recharge",
      "endsWhen": "After the wielder uses it or at the start of their next turn if they do not use it within that time",
      "charges": "Unlimited, recharging after a long rest"
    },
    "priceReason": "The Wind Chime is priced moderately to reflect its delicate craftsmanship and the unique abilities it provides.",
    "priceOriginal": 18400,
    "priceReviewedAt": "2026-07-23T18:35:42.480803+00:00",
    "aiReviewedAt": "2026-07-23T18:35:42.480803+00:00",
    "aiReviewVersion": 1
  },
  "skycaverns_wind_chime_premium": {
    "id": "skycaverns_wind_chime_premium",
    "name": "Skycaverns Wind Chime (Premium)",
    "description": "The Skycaverns Wind Chime (Premium) is a delicate, hand-crafted wind chime made from ethereal crystal and enchanted by the artisans of Skycavern. When played in the right conditions, it harmonizes the winds, allowing for safer gliding and enhanced aerial acrobatics. The chimes not only detect air currents but also produce soothing melodies that calm even the most turbulent storms, making them indispensable to any flyer or explorer venturing into the skies.",
    "price": 1000,
    "icon": "🔔",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Harmonized Flight",
      "Storm Serenity"
    ],
    "vendor": "skycaverns_loft",
    "shippedBy": "Aerial Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Harmonized Flight",
        "rules": "Once per short rest, the wielder can add 10 feet to their jump distance or glide for an additional 20 feet. This effect lasts until the end of the wielder's next turn and can be used only once per long rest."
      },
      {
        "title": "Storm Serenity",
        "rules": "When played in a storm, the wind chime provides advantage on Acrobatics checks made to avoid damage from gusts or winds. This effect is active as long as it remains within 30 feet of the wielder and can be used once per day."
      }
    ],
    "levelRequirementReason": "It requires minimal dexterity to handle but still offers significant benefits for flyers.",
    "vendorReason": "Skycavern Artisans are renowned for their exquisite craftsmanship and the Skycavern Wind Chime is one of their most popular creations.",
    "shippingDetail": "Delivered by skilled aerial couriers who ensure the chimes arrive in pristine condition.",
    "usage": {
      "activation": "Play the wind chime as a bonus action.",
      "duration": "Instantaneous, with an effect lasting until the end of the wielder's next turn for Harmonized Flight and active while within range for Storm Serenity.",
      "endsWhen": "The effect ends at the start of the wielder's next turn or when the chime is no longer in a stormy environment.",
      "charges": "Unlimited, as it can be recharged by playing it again."
    },
    "priceReason": "Balanced for its utility and rarity, this wind chime offers significant benefits at an affordable price point.",
    "priceOriginal": 19000,
    "priceReviewedAt": "2026-07-23T18:35:51.810286+00:00",
    "aiReviewedAt": "2026-07-23T18:35:51.810286+00:00",
    "aiReviewVersion": 1
  },
  "skycaverns_wind_whisk": {
    "id": "skycaverns_wind_whisk",
    "name": "Skycaverns Wind Whisk",
    "description": "The Skycaverns Wind Whisk is crafted from a rare, woven reed and enchanted with captured winds from the highest peaks of the Caverns. It whisks batter with such efficiency that it gives bakers an advantage in creating light pastries. In stormy weather, the whisk's blades spin so wildly that they offer a fleeting moment of levitation to anyone who uses it after eating. This kitchen accessory is made by the skilled Cavern Windwrights and carries the essence of the skies within its core.",
    "category": "equipment",
    "price": 1000,
    "icon": "🫐",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Whisk Efficiency",
      "Storm Levitation"
    ],
    "vendor": "skycaverns_kitchen",
    "shippedBy": "Breezy Batter Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whisk Efficiency",
        "rules": "When a character uses this whisk to mix batter, they gain advantage on checks to create light pastries. This effect lasts for the duration of their cooking action."
      },
      {
        "title": "Storm Levitation",
        "rules": "During stormy weather, after consuming food mixed with this whisk, the user can immediately take a free action to jump 5 feet as if under the effects of a minor levitation spell. This ability lasts until the start of their next turn."
      }
    ],
    "levelRequirementReason": "The basic skills required to use the whisk and understand its functionality are accessible to characters at level 1.",
    "vendorReason": "Skycaverns Kitchen is renowned for its expertise in all things culinary, including enchanted kitchen tools like the Skycaverns Wind Whisk.",
    "shippingDetail": "Delivered via swift aerial courier from the Caverns to ensure freshness and enchantment remain intact during transit.",
    "usage": {
      "activation": "Used as a tool during cooking or eating after consumption of batter mixed with it.",
      "duration": "Until the start of the user's next turn, unless used in a storm.",
      "endsWhen": "The effect ends when the user completes their action or turns.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP as it provides a minor but useful advantage in baking and offers an occasional levitation benefit during storms.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-23T18:35:59.547104+00:00",
    "aiReviewedAt": "2026-07-23T18:35:59.547104+00:00",
    "aiReviewVersion": 1
  },
  "slaad_tadpole_vaccine": {
    "id": "slaad_tadpole_vaccine",
    "name": "Slaad Tadpole Vaccine (Broad Spectrum)",
    "description": "This vial of chaos-resistant mutagens, crafted by Order of the Stick, is a potent defense against Slaad's malevolent touch. It not only grants immunity to Slaad egg implantation and chaotic diseases but also allows for the neutralization of tadpoles in others with a touch. The vaccine's effect is as unpredictable as the chaos it counters, ensuring that even the most resilient Slaadspawn succumb to its neutralizing power.",
    "price": 1000,
    "icon": "💉",
    "stock": 12,
    "rarity": "epic",
    "effects": [
      "Immunity to Slaad egg implantation and chaotic diseases",
      "Neutralize Slaad tadpoles with a touch"
    ],
    "vendor": "chaos_clinic",
    "shippedBy": "Quarantine Protocol",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Slaad Egg Implantation and Chaotic Diseases",
        "rules": "This effect grants the user immunity to Slaad egg implantation and all chaotic diseases. The immunity is permanent upon consumption of the vaccine."
      },
      {
        "title": "Neutralize Slaad Tadpoles with a Touch",
        "rules": "When used as an action, this vial allows the user to neutralize Slaad tadpoles in others by making a successful DC 15 Wisdom (Medicine) check. The vaccine must be applied directly to the affected individual."
      }
    ],
    "levelRequirementReason": "This item is available to all adventurers as it provides immediate and crucial protection against Slaad threats.",
    "vendorReason": "Chaos Clinic specializes in counteracting the effects of Slaad, making this vaccine one of their most sought-after products.",
    "shippingDetail": "The vaccine is shipped under strict quarantine protocols to ensure it remains stable during transport.",
    "usage": {
      "activation": "Action",
      "duration": "Permanent upon consumption, neutralization effect lasts until the Slaad tadpole is neutralized",
      "endsWhen": "The effect ends when the tadpole is neutralized or the vial's contents are used up",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item is priced at 1000 XP as it provides immediate and crucial protection against Slaad threats, making it a valuable asset for any adventurer.",
    "priceOriginal": 235000,
    "priceReviewedAt": "2026-07-23T18:36:23.181448+00:00",
    "aiReviewedAt": "2026-07-23T18:36:23.181448+00:00",
    "aiReviewVersion": 1
  },
  "sledge_bro_hammer": {
    "id": "sledge_bro_hammer",
    "name": "Sledge Bro's Mallet",
    "description": "The Sledge Bro's Mallet is an enormous, hand-forged hammer that resonates with the power of its creator. Its head is made of solid iron, each strike sending shockwaves through the ground and nearby foes. The hammer requires a strong back to wield effectively and demands at least a Strength score of 17 to avoid strain. A symbol of craftsmanship and might, it was forged by Sledge Bro himself in the heart of the forge.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔨",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Earthshaking Strike",
      "Staggering Impact"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Stone Sled",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Earthshaking Strike",
        "rules": "When you hit a target with this weapon, each creature within 10 feet must succeed on a Dexterity saving throw or be knocked prone. This effect has no limit but does not apply to creatures immune to being prone."
      },
      {
        "title": "Staggering Impact",
        "rules": "This weapon deals an additional 2d10 bludgeoning damage when you hit with this weapon on your first action of the turn, requiring a Strength score of at least 17. This effect can only be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Sledge Bro's Mallet requires a minimum level to wield its full power effectively.",
    "vendorReason": "As a master of rare and powerful weapons, Gilded Gryphon is known for carrying items like the Sledge Bro's Mallet.",
    "shippingDetail": "The Stone Sled delivers with unmatched speed through mountain passes and rocky terrains.",
    "usage": {
      "activation": "On hit as a weapon attack",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use per short or long rest",
      "charges": "Recharges on a short rest"
    },
    "priceReason": "The Sledge Bro's Mallet is crafted with high-quality materials and requires significant skill to forge, balancing its cost at 1000 XP.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-23T18:36:13.365741+00:00",
    "aiReviewedAt": "2026-07-23T18:36:13.365741+00:00",
    "aiReviewVersion": 1
  },
  "sleepy_sheep": {
    "id": "sleepy_sheep",
    "name": "Sleepy Sheep",
    "description": "The Sleepy Sheep is a plushie crafted from soft, cloud-like wool and imbued with the essence of a drowsy meadow. When activated, it emits a soothing hum that causes nearby creatures to yawn uncontrollably, their eyes drifting shut as they succumb to slumber for 1 minute or until disrupted by an attack. The sheep's gentle presence can be felt within a 20-foot radius, making it a perfect gift for the overworked adventurer seeking a moment of peace.",
    "category": "consumables",
    "price": 1000,
    "icon": "🐑",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Uncontrollable Yawning",
      "Sleep Inducement"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Soft Package Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Uncontrollable Yawning",
        "rules": "When activated, all creatures within a 20-foot radius must succeed on a Wisdom saving throw (DC 13) or begin to yawn uncontrollably. Afflicted creatures fall asleep for 1 minute or until they are damaged."
      },
      {
        "title": "Sleep Inducement",
        "rules": "Creatures within the area who fail their save must also make a Wisdom saving throw (DC 13) at the start of each of their turns. On a failed save, the creature falls asleep for the duration of this effect."
      }
    ],
    "levelRequirementReason": "This item is designed to be accessible to all adventurers, regardless of level.",
    "vendorReason": "The Toad Town Market stocks a variety of quirky and enchanting items perfect for travelers in need of restful moments.",
    "shippingDetail": "Ships via Soft Package Courier with same-day delivery within the kingdom, ensuring your sheep arrives fresh from the fields.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until disrupted by damage",
      "endsWhen": "A creature is damaged or falls asleep for the duration",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Sleepy Sheep's enchantment and soft materials make it a fair price, offering a unique and effective way to induce sleep.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T18:36:06.329341+00:00",
    "aiReviewedAt": "2026-07-23T18:36:06.329341+00:00",
    "aiReviewVersion": 1
  },
  "slow_fall_pants": {
    "id": "slow_fall_pants",
    "name": "Slow Fall Pants",
    "description": "The Slow Fall Pants are a pair of rugged, oversized trousers made from thick, wind-resistant fabric. Crafted in the bustling Toad Town Market by the hands of Master Shoemaker Puddleguts, these pants catch the air like an artisan's masterpiece parachute. They provide a soft landing for those who dare to leap from heights, but their large size and flapping material make it nearly impossible to move stealthily without drawing attention.",
    "category": "equipment",
    "price": 1000,
    "icon": "👖",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Immortal to Fall Damage",
      "Disadvantage on Stealth Checks"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Large Envelope",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immortal to Fall Damage",
        "rules": "As a bonus action, you can activate the Slow Fall Pants. While active, you are immune to fall damage from any height. This effect lasts for a number of turns equal to your Constitution modifier (minimum 1). The pants automatically deactivate and expend a charge if you are hit by an attack."
      },
      {
        "title": "Disadvantage on Stealth Checks",
        "rules": "The Slow Fall Pants introduce a -5 penalty to any Stealth checks due to the fabric flapping loudly. This effect is always active while wearing the pants unless they are deactivated as a bonus action, which silences them momentarily."
      }
    ],
    "levelRequirementReason": "These pants are designed for beginners and adventurers just starting their journey, requiring no minimum level to use.",
    "vendorReason": "Master Shoemaker Puddleguts is renowned for his craftsmanship, particularly in footwear that enhances safety and comfort.",
    "shippingDetail": "The pants are carefully rolled up with a cushioning charm to prevent damage during transport.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Number of turns equal to your Constitution modifier (minimum 1 turn)",
      "endsWhen": "Hit by an attack or when deactivated as a bonus action",
      "charges": "Unlimited, but only one charge can be active at a time"
    },
    "priceReason": "The pants are priced moderately to reflect their utility and the skill required in their crafting.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-23T18:36:15.740579+00:00",
    "aiReviewedAt": "2026-07-23T18:36:15.740579+00:00",
    "aiReviewVersion": 1
  },
  "smithy_hammer_god": {
    "id": "smithy_hammer_god",
    "name": "Smithy's True Hammer",
    "description": "Smithy's True Hammer, a legendary blacksmithing tool forged in the heart of a godly forge, can create or destroy artifacts with equal ease. Its hammerhead glows with an ethereal light that flickers like molten metal and can shape any material into its perfect form. It is said that no weapon or artifact has ever resisted its might; it can reduce even divine constructs to dust in a single strike.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚒️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Forge Legendary Weapons Instantly",
      "Destroy Magical Objects"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Machine Dimension Express",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Forge Legendary Weapons",
        "rules": "As an action, the wielder may command the hammer to create or destroy one legendary weapon. The hammer can reshape any material into a weapon of legendary status instantly. It requires no materials and has no weight."
      },
      {
        "title": "Destroy Magical Objects",
        "rules": "With a single strike, the hammer can reduce even magical objects to dust. This effect is instantaneous and does not require an action. The user must be within 30 feet of the target object. There is no save DC for this effect."
      }
    ],
    "levelRequirementReason": "Only a master blacksmith with godly prowess can wield such a powerful tool.",
    "vendorReason": "The Rogue Port Black Market is known for its rare and dangerous wares, including this divine hammer.",
    "shippingDetail": "Ships via the Machine Dimension Express, a service that can deliver to any plane in a matter of hours.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausts one charge; recharges after a long rest",
      "charges": "5 charges"
    },
    "priceReason": "The hammer's godly rarity and powerful effects justify its price in experience points.",
    "priceOriginal": 1300000,
    "priceReviewedAt": "2026-07-23T18:36:34.034683+00:00",
    "aiReviewedAt": "2026-07-23T18:36:34.034683+00:00",
    "aiReviewVersion": 1
  },
  "smokestack_prefab": {
    "id": "smokestack_prefab",
    "name": "Smokestack Prefab",
    "description": "The Smokestack Prefab is a formidable portable factory device crafted from gleaming steel and engineered to belch forth dense clouds of obscuring fog, choking the battlefield's visibility for an entire day. Its creator, Steel Syndicate, has made it configurable with various scents or holographic decoys, making it not just a tool but also a strategic asset on the field. Deploying this prefab can lead to severe legal repercussions and bounties from rival factions, yet its tactical value is undeniable for those willing to risk sanctions.",
    "category": "faction",
    "price": 1000,
    "icon": "🏭",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Dense Obscuring Fog",
      "Configurable Deployment"
    ],
    "vendor": "steel_syndicate",
    "shippedBy": "Freight Pallet",
    "levelRequirement": 6,
    "factionBonus": {
      "stealth": 40,
      "denial": 50
    },
    "effectDetails": [
      {
        "title": "Dense Obscuring Fog",
        "rules": "When deployed, the Smokestack Prefab releases a 100-foot radius of dense fog that obscures vision and disables sensors for 24 hours. The area is heavily obscured, requiring advantage on Wisdom (Perception) checks to find or discern details beyond 30 feet. This effect can be countered by successful DC 15 Wisdom (Perception) checks."
      },
      {
        "title": "Configurable Deployment",
        "rules": "The user can configure the Smokestack Prefab with different scents or holographic decoys to mislead and deceive opponents. Each configuration requires a short rest, and only one type of configuration is active at any time."
      }
    ],
    "levelRequirementReason": "Requires significant strategic knowledge and coordination skills to effectively deploy and manage the Smokestack Prefab's fog.",
    "vendorReason": "Steel Syndicate specializes in advanced engineering solutions, including this versatile battlefield tool.",
    "shippingDetail": "Requires specialized Freight Pallet delivery for safe and secure transport.",
    "usage": {
      "activation": "A short rest to deploy or configure the device.",
      "duration": "24 hours of fog obscuration, reusable once per long rest.",
      "endsWhen": "The effect ends when the duration expires or if the device is destroyed.",
      "charges": "Unlimited charges; recharges after a long rest."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its strategic value and risk factor for deployment.",
    "priceOriginal": 150000,
    "priceReviewedAt": "2026-07-23T18:36:45.088421+00:00",
    "aiReviewedAt": "2026-07-23T18:36:45.088421+00:00",
    "aiReviewVersion": 1
  },
  "snowman_doll": {
    "id": "snowman_doll",
    "name": "Snowman Doll",
    "description": "The Snowman Doll is a meticulously crafted, snow-packed figurine that exudes an icy aura. Its coal eyes gleam ominously as it radiates bone-chilling cold within its 15-foot radius. Should you decide to shatter this frosty creation with a swift motion, it unleashes a torrent of frigid air, capable of dealing 3d6 points of Cold damage and forcing creatures within the area to make a Constitution saving throw or take half as much damage.",
    "category": "consumables",
    "price": 1000,
    "icon": "⛄",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Cold Aura",
      "Shattering Frost"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "The Frosty Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cold Aura",
        "rules": "When activated, the Snowman Doll creates a 15-foot radius of frigid air centered on it. All creatures within this area must make a Constitution saving throw (DC 13) or take half as much damage from Cold."
      },
      {
        "title": "Shattering Frost",
        "rules": "Activating the doll by shattering it with a melee attack deals 3d6 points of Cold damage to all creatures within its radius. The doll then crumbles into harmless, sparkling fragments upon impact."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginning adventurers who can handle the initial challenge of dealing with cold environments.",
    "vendorReason": "Shamans often carry this item as it is a practical tool in their repertoire to combat and manipulate frost-based magic.",
    "shippingDetail": "Delivered via the Frosty Express, known for its swift delivery of cold-related items during winter months.",
    "usage": {
      "activation": "Melee attack",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted upon shattering or used",
      "charges": "Unlimited"
    },
    "priceReason": "The item's balanced price reflects its utility as a consumable that can be quickly expended in cold environments without being overly powerful.",
    "priceOriginal": 22000,
    "priceReviewedAt": "2026-07-23T18:37:27.036635+00:00",
    "aiReviewedAt": "2026-07-23T18:37:27.036635+00:00",
    "aiReviewVersion": 1
  },
  "solar_angels_blessing": {
    "id": "solar_angels_blessing",
    "name": "Solar Angel's Blessing (Limited)",
    "description": "The Solar Angel's Blessing is a divine talisman shaped like a golden, intricately carved heart. It emanates a soft celestial glow that never fades. This blessed token grants you permanent resistance to necrotic and radiant damage, making you an eternal beacon of purity and life. Angels are drawn to it as if it were their own, offering unwavering protection and support whenever you call upon them in times of need.",
    "price": 1000,
    "icon": "👼",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Divine Resistance",
      "Angelic Ally"
    ],
    "vendor": "celestial_temple",
    "shippedBy": "Angels' Whisper Courier Service",
    "levelRequirement": 17,
    "factionBonus": {
      "celestial": 150
    },
    "effectDetails": [
      {
        "title": "Divine Resistance",
        "rules": "You gain permanent resistance to necrotic and radiant damage. This blessing does not deplete or require any action to maintain."
      },
      {
        "title": "Angelic Ally",
        "rules": "Whenever you are in a state of danger, angels instinctively recognize you as an ally and may offer assistance through minor divine interventions. This includes receiving guidance, healing, or being granted temporary protection once per long rest."
      }
    ],
    "levelRequirementReason": "This item's power is reserved for those who have walked the path of divine purity and strength.",
    "vendorReason": "The celestial temple houses sacred relics like this, entrusted to only the most worthy souls.",
    "shippingDetail": "Delivered by a celestial courier, ensuring swift and secure transport.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Permanent",
      "endsWhen": "Destroyed or lost without divine intervention.",
      "charges": "Unlimited"
    },
    "priceReason": "The cost reflects the item's rarity and the resources needed to craft such a powerful relic.",
    "priceOriginal": 645000,
    "priceReviewedAt": "2026-07-23T18:36:36.998709+00:00",
    "aiReviewedAt": "2026-07-23T18:36:36.998709+00:00",
    "aiReviewVersion": 1
  },
  "sonic_rings": {
    "id": "sonic_rings",
    "name": "Sonic Rings (Pack of 50)",
    "description": "The Sonic Rings are a pack of fifty that resonate with a faint hum, absorbing damage and scatters it around in a wide arc upon impact. Crafted from a blend of rare metals and enchanted with toad magic, these rings provide a temporary boost to speed when worn. They are a staple at Toad Town Market, where they have been sold for their unique ability to protect and enhance mobility.",
    "category": "consumables",
    "price": 1000,
    "icon": "💍",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Damage Absorption",
      "Enhanced Speed"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Ring Pouch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Damage Absorption",
        "rules": "When a creature wearing one of these rings takes damage, the ring absorbs up to 50 points of damage. The absorbed damage is then scattered around in a 30-foot radius as a burst effect centered on the wearer. Creatures within this area must make a Dexterity saving throw (DC 14) or take half the absorbed damage."
      },
      {
        "title": "Enhanced Speed",
        "rules": "While wearing one of these rings, the wearer gains a +5-foot bonus to their movement speed. This effect ends if the wearer drops any of the rings or takes an action that requires both hands."
      }
    ],
    "levelRequirementReason": "These rings are accessible to low-level adventurers as they provide immediate utility without being overly powerful.",
    "vendorReason": "Toad Town Market is known for its wide array of enchanted goods, including the Sonic Rings due to their unique and sought-after properties.",
    "shippingDetail": "The rings are shipped in a specially designed Ring Pouch that ensures they arrive undamaged and ready for use.",
    "usage": {
      "activation": "Passive effect upon donning the ring; ends when removed or dropped.",
      "duration": "Instantaneous absorption of damage, lasts until the wearer takes an action requiring both hands.",
      "endsWhen": "Dropping a ring or taking an action that requires both hands.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The price reflects the unique enchantment and materials required for crafting such rings, balancing their utility with cost.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-23T18:37:02.354281+00:00",
    "aiReviewedAt": "2026-07-23T18:37:02.354281+00:00",
    "aiReviewVersion": 1
  },
  "soul_binding_ceremony": {
    "id": "soul_binding_ceremony",
    "name": "Soul Binding Ceremony",
    "description": "The Soul Binding Ceremony, a ritual of ancient origin, weaves together two souls through exotic components and a three-hour long incantation. Once performed, the bond remains unbreakable for 99 years unless one party breaches it with a successful DC 17 Wisdom saving throw, incurring 2d10 psychic damage upon failure. This binding is not merely a contract but an oath that can seal marriages, blood oaths, or curses, depending on the parties involved and the intent of the ritual.",
    "category": "services",
    "price": 1000,
    "icon": "💕",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Permanent Soul Bond",
      "Breach with DC 17"
    ],
    "vendor": "temple_eternal",
    "shippedBy": "Ritual Appointment",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Permanent Soul Bond",
        "rules": "This effect permanently binds two souls together. The bond lasts for 99 years unless one party successfully saves against a DC 17 Wisdom saving throw, causing the breaching party to suffer 2d10 psychic damage."
      },
      {
        "title": "Breach with DC 17",
        "rules": "A breach of the soul bond can be attempted by either party. The breacher must succeed on a DC 17 Wisdom saving throw or suffer 2d10 psychic damage, ending the effect."
      }
    ],
    "levelRequirementReason": "This ritual requires significant magical energy and spiritual knowledge to perform effectively.",
    "vendorReason": "The Temple of Eternity is known for its mastery over life, death, and the bonds between souls.",
    "shippingDetail": "The service is delivered via a specialized courier who ensures the ritual components are preserved until the ceremony can be performed immediately upon arrival.",
    "usage": {
      "activation": "A three-hour long ritual that requires both willing participants and exotic materials.",
      "duration": "Permanent, lasts 99 years unless breached",
      "endsWhen": "One party breaches it with a failed DC 17 Wisdom saving throw or the component's destruction",
      "charges": "Unlimited"
    },
    "priceReason": "The cost reflects the rare and exotic materials needed for the ceremony, as well as the specialized knowledge required.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T18:37:34.735183+00:00",
    "aiReviewedAt": "2026-07-23T18:37:34.735183+00:00",
    "aiReviewVersion": 1
  },
  "soul_forge_hammer": {
    "id": "soul_forge_hammer",
    "name": "Soul Forge Hammer (Crafting)",
    "description": "The Soul Forge Hammer, a massive hammer forged from ethereal steel and adorned with runes that hum with raw soul energy, is wielded by only the most skilled Soul Smiths. This legendary tool can imbue non-sentient objects with the essence of captured souls, bestowing them with sentience. Each use requires the sacrifice of one soul, and its origin lies in the heart of the Ectoplasmic Forge, where spirits are born and crafted into artifacts. The hammer's power is not to be underestimated; it whispers the secrets of life itself as it transforms inanimate objects into living entities.",
    "price": 1000,
    "icon": "🔨",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Awakens items with sentience",
      "Requires sacrifice of a soul per use"
    ],
    "vendor": "ectoplasmic_forge",
    "shippedBy": "Ghostly Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Soul Imbuing",
        "rules": "Activates on command, requiring the user to focus and expend one soul. The imbued item gains sentience for 1 hour or until it is destroyed. The hammer can only be used once per day."
      },
      {
        "title": "Soul Sacrifice Requirement",
        "rules": "Each use of the Soul Forge Hammer requires a willing sacrifice of a soul, which can be obtained through specific rituals or purchased from the Ectoplasmic Forge at a significant cost. Failure to provide a soul results in an immediate destruction of the hammer."
      }
    ],
    "levelRequirementReason": "Even the most powerful artifacts have their limitations; this item is designed for those who are ready to face its moral and physical challenges.",
    "vendorReason": "The Ectoplasmic Forge is known for crafting items that bridge the realms of life and death, making it the perfect vendor for a tool like the Soul Forge Hammer.",
    "shippingDetail": "Items are delivered by the Ghostly Courier Service, which requires careful handling due to the ethereal nature of the hammer's components. The delivery time can vary unpredictably.",
    "usage": {
      "activation": "Command word and focus",
      "duration": "1 hour or until destroyed",
      "endsWhen": "The imbued item is destroyed or the effect duration expires",
      "charges": "1 charge per day"
    },
    "priceReason": "The hammer's rarity, the soul sacrifice requirement, and its limited daily use justify this price in experience points.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-23T18:37:30.191113+00:00",
    "aiReviewedAt": "2026-07-23T18:37:30.191113+00:00",
    "aiReviewVersion": 1
  },
  "soul_lantern": {
    "id": "soul_lantern",
    "name": "Soul Lantern",
    "description": "The Soul Lantern, a sleek black lantern crafted from polished obsidian and bound with arcane runes, exudes a light that whispers of lost souls. Its glow tastes faintly like memories, stirring distant recollections in those who gaze upon it. This vessel is known to trap stray spirits within its core, but only once per day when a contested Wisdom saving throw is made against the trapped entity's willpower. It also allows for the querying of these trapped spirits for knowledge, though the process is ethically dubious and fraught with risk.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Soul Capture",
      "Spirit Knowledge"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Phantom Carriage",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Soul Capture",
        "rules": "Activates as a bonus action. The Soul Lantern attempts to trap a medium or smaller spirit within its core by making a contested Wisdom saving throw against the target's Will save DC +10. If successful, the captured spirit is held for 24 hours and can be queried once using Spirit Knowledge."
      },
      {
        "title": "Spirit Knowledge",
        "rules": "Allows the user to ask one question of the trapped spirit. The spirit must answer truthfully but may not provide information that would cause its own destruction or reveal secrets it is sworn to keep silent. After a successful query, the spirit is freed."
      }
    ],
    "levelRequirementReason": "Beginners with a rudimentary understanding of magic can wield this lantern.",
    "vendorReason": "Crypt Courier handles transactions involving dark magic and rare artifacts, making the Soul Lantern an appropriate addition to their inventory.",
    "shippingDetail": "The Phantom Carriage delivers the Soul Lantern with a delay of one week due to its ethereal nature but ensures safe delivery.",
    "usage": {
      "activation": "Bonus action to activate and use.",
      "duration": "Instantaneous soul capture; Spirit Knowledge is a single-use effect.",
      "endsWhen": "The spirit escapes or the lantern's power runs out, whichever comes first.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced against other powerful artifacts of similar rarity and utility within the game world.",
    "priceOriginal": 100000,
    "priceReviewedAt": "2026-07-23T18:37:32.465276+00:00",
    "aiReviewedAt": "2026-07-23T18:37:32.465276+00:00",
    "aiReviewVersion": 1
  },
  "soul_of_the_multiverse": {
    "id": "soul_of_the_multiverse",
    "name": "Soul of the Multiverse",
    "description": "The Soul of the Multiverse is a cosmic artifact forged from the essences of countless souls. This core-like relic grants you the power to absorb and wield the abilities of any creature, but at a cost—your soul merges into the multiverse for a time. Consuming it grants you 1 billion hit points and access to all spells, yet you must relinquish your individuality for 24 hours after use.",
    "category": "consumables",
    "price": 1000,
    "icon": "💀",
    "stock": 1,
    "rarity": "cosmic",
    "effects": [
      "Absorb All Abilities",
      "Merge with the Multiverse"
    ],
    "vendor": "cosmic_souls",
    "shippedBy": "Collective Consciousness",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Absorb All Abilities",
        "rules": "As a bonus action, you can consume the Soul of the Multiverse. You gain all abilities and spells of any creature for 1 hour. This effect ends if you are reduced to 0 hit points."
      },
      {
        "title": "Merge with the Multiverse",
        "rules": "For 24 hours after consuming, your soul merges into the multiverse. During this time, you cannot take actions or interact with the world in any way. This effect ends when the duration expires."
      }
    ],
    "levelRequirementReason": "The complexity of absorbing and merging with the multiverse requires a solid foundation.",
    "vendorReason": "Cosmic Souls has exclusive access to the most powerful cosmic artifacts, including the Soul of the Multiverse.",
    "shippingDetail": "Delivered instantly through the collective consciousness network.",
    "usage": {
      "activation": "Bonus action (consume)",
      "duration": "1 hour for abilities, 24 hours for merging with the multiverse",
      "endsWhen": "Reduced to 0 HP or duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects its immense power and the risk involved in using it.",
    "priceOriginal": 200000000,
    "priceReviewedAt": "2026-07-23T18:37:43.081072+00:00",
    "aiReviewedAt": "2026-07-23T18:37:43.081072+00:00",
    "aiReviewVersion": 1
  },
  "spark_rebellion_EMP_grenade": {
    "id": "spark_rebellion_EMP_grenade",
    "name": "Spark Rebellion EMP Grenade",
    "description": "The Spark Rebellion EMP Grenade is a volatile device that fries all electronics and magically powered devices within its blast radius. Designed for covert operations, this grenade disrupts technology and magic alike with devastating precision. When activated, it emits an intense pulse of electromagnetic energy that disables electronic and magical items in a 15-foot radius for up to 2d4 rounds. Crafted by Spark Rebellion, the creators of innovative tech solutions gone wrong.",
    "price": 1000,
    "icon": "⚡",
    "stock": 7,
    "rarity": "epic",
    "effects": [
      "Disrupts electronics & magic",
      "Self-destructs"
    ],
    "vendor": "spark_rebellion_safehouse",
    "shippedBy": "Swift Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "EMP Blast",
        "rules": "When thrown as an action, this grenade creates a 15-foot radius sphere that disables all electronic and magically-powered devices within. Targets must succeed on a Dexterity saving throw (DC 15) or have their technology and magic items disabled for up to 2d4 rounds."
      },
      {
        "title": "Self-Destruct",
        "rules": "The grenade self-destructs after 60 seconds, wasting no charges. This effect cannot be suppressed by the user."
      }
    ],
    "levelRequirementReason": "Requires basic dexterity and situational awareness.",
    "vendorReason": "Spark Rebellion is known for their tech that can both enhance and disrupt, making this grenade a natural fit.",
    "shippingDetail": "Delivered within 24 hours of purchase.",
    "usage": {
      "activation": "Thrown as an action",
      "duration": "Up to 2d4 rounds",
      "endsWhen": "Target saves successfully or duration ends",
      "charges": "Unlimited, self-destructs after use"
    },
    "priceReason": "Balanced price reflects the grenade's utility for disabling technology and magic in a tactical situation.",
    "priceOriginal": 22000,
    "priceReviewedAt": "2026-07-23T18:37:45.023421+00:00",
    "aiReviewedAt": "2026-07-23T18:37:45.023421+00:00",
    "aiReviewVersion": 1
  },
  "spark_rebellion_anarchist_bomb": {
    "id": "spark_rebellion_anarchist_bomb",
    "name": "Spark Rebellion Anarchist Bomb",
    "description": "The Spark Rebellion Anarchist Bomb, a volatile device forged from the fiery heart of urban rebellion, unleashes chaos within any fortress or command structure it targets. When activated, it scrambles all hierarchical orders, turning officers and generals into blind pawns in a game of self-destruction. The bomb's effects are both immediate and enduring; for 1d6 hours, all command units engage in internecine conflict, ensuring the collapse of any organized resistance.",
    "price": 1000,
    "icon": "🤯",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Command Unit Disruption",
      "Self-Destructive Conflict"
    ],
    "vendor": "hacktivist_collective",
    "shippedBy": "Logic Bomb Express",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Command Unit Disruption",
        "rules": "When activated, all officers and generals within a targeted fortress or command structure are reduced to chaotic combatants. This effect lasts for 1d6 hours, during which they fight each other with no regard for their original orders. The device has no physical impact but instead scrambles the command structure's logic, making it impossible for any unit to follow coherent orders."
      },
      {
        "title": "Self-Destructive Conflict",
        "rules": "During the duration of this effect, all affected units are compelled into a state of internal conflict. Any attempt by these units to regain control or execute their original missions fails with a DC 15 Wisdom saving throw. The device exhausts its use after one activation."
      }
    ],
    "levelRequirementReason": "This item requires significant strategic and tactical expertise, best suited for characters who have already proven themselves in complex command structures.",
    "vendorReason": "The Hacktivist Collective specializes in crafting devices that subvert authority and control, making this bomb a natural fit within their inventory.",
    "shippingDetail": "Ships via encrypted channels to ensure the device's components arrive undetected.",
    "usage": {
      "activation": "Action",
      "duration": "1d6 hours",
      "endsWhen": "The duration ends after 1d6 hours or when an affected unit successfully saves against the Wisdom saving throw.",
      "charges": "One-time use, recharged upon successful activation."
    },
    "priceReason": "This item's price reflects its rarity and strategic value; it is a one-time tool for subverting command structures in complex environments.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T18:38:01.861621+00:00",
    "aiReviewedAt": "2026-07-23T18:38:01.861621+00:00",
    "aiReviewVersion": 1
  },
  "spark_rebellion_anarchy_bomb": {
    "id": "spark_rebellion_anarchy_bomb",
    "name": "Spark Rebellion Anarchy Bomb (Social)",
    "description": "Pauline's Microphone, a sleek and sinister device made from polished obsidian and encrusted with glowing cybernetic chips, can instigate chaos in any realm. When activated, it forces a major city or kingdom into prolonged civil unrest, causing widespread corruption and leadership collapse that lasts for an entire year. The device, crafted by the infamous Spark Rebellion, is known to amplify dissent and subversion through its advanced code injection technology.",
    "price": 1000,
    "icon": "🔥",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Instigates massive, prolonged civil unrest/revolt in a targeted governance structure",
      "Causes leadership collapse and system failure for one year"
    ],
    "vendor": "hacktivist_collective",
    "shippedBy": "Digital Detonation",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Civil Unrest and Corruption",
        "rules": "Activating Pauline's Microphone causes an immediate surge of dissent that escalates into civil unrest. This effect lasts for a full year, during which the targeted governance structure experiences widespread corruption and leadership failure. The device has unlimited uses but requires a successful DC 20 Intelligence (Computer Engineering) check to activate."
      },
      {
        "title": "Leadership Collapse",
        "rules": "For one year following activation, all governance structures within the targeted area experience significant failures in leadership and systemic corruption. This effect cannot be mitigated by any means short of a successful DC 25 Diplomacy or Persuasion check made by an individual with at least 10 ranks in such skills."
      }
    ],
    "levelRequirementReason": "Requires significant skill and knowledge to activate the device's complex code injection technology.",
    "vendorReason": "The Hacktivist Collective is known for their black market wares, including dangerous and controversial devices like Pauline's Microphone.",
    "shippingDetail": "Shipped via secure digital transmission with a one-week processing delay due to the sensitive nature of the device.",
    "usage": {
      "activation": "Standard action to activate; requires a successful DC 20 Intelligence (Computer Engineering) check",
      "duration": "Instantaneous activation, lasting effect for one year",
      "endsWhen": "Effect ends when the year is over or the device is destroyed",
      "charges": "Unlimited uses"
    },
    "priceReason": "The device's rarity and the complexity of its activation make it a valuable yet balanced purchase.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-23T18:38:27.714257+00:00",
    "aiReviewedAt": "2026-07-23T18:38:27.714257+00:00",
    "aiReviewVersion": 1
  },
  "spark_rebellion_data_clone": {
    "id": "spark_rebellion_data_clone",
    "name": "Spark Rebellion Data Clone (Identity Backup)",
    "description": "The Spark Rebellion Data Clone is a compact, encrypted device resembling a small, sleek USB drive. Crafted by the underground resistance, it contains a complete backup of your core identity and memories. Should you perish, this clone ensures your consciousness can be transferred to another body within one week. However, the clone's transfer is imperfect; upon use, you suffer a minor memory lapse, randomly affecting one ability score by -1 until the next long rest.",
    "price": 1000,
    "icon": "👤",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Consciousness Transfer Backup",
      "Random Ability Score Decrease"
    ],
    "vendor": "spark_rebellion_safehouse",
    "shippedBy": "Spark Rebellion Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Consciousness Transfer Backup",
        "rules": "If you are killed, use an action to activate this effect. Your consciousness is transferred to another body within one week. You must be taken to a Spark Rebellion safehouse for the transfer to occur."
      },
      {
        "title": "Random Ability Score Decrease",
        "rules": "Immediately upon activation of the Consciousness Transfer Backup, you suffer a -1 penalty to one random ability score until your next long rest. The DM chooses which score is affected."
      }
    ],
    "levelRequirementReason": "The device requires basic knowledge and trust in Spark Rebellion's technology for activation.",
    "vendorReason": "Spark Rebellion creates and manages the data clones as part of their services to protect rebels and resistance members.",
    "shippingDetail": "The device is delivered directly by a Spark Rebellion courier to ensure it arrives safely and securely.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (effect lasts until next long rest)",
      "endsWhen": "Your consciousness is transferred or you complete a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The device's balanced price reflects the significant risk and technology involved in its creation.",
    "priceOriginal": 300000,
    "priceReviewedAt": "2026-07-23T18:37:56.383353+00:00",
    "aiReviewedAt": "2026-07-23T18:37:56.383353+00:00",
    "aiReviewVersion": 1
  },
  "spark_rebellion_data_spike": {
    "id": "spark_rebellion_data_spike",
    "name": "Spark Rebellion Data Spike",
    "description": "The Spark Rebellion Data Spike is a sleek, metallic spike emblazoned with flickering circuits and an encrypted core. When planted into a machine's chassis, it injects a burst of chaotic data that rattles its core, causing the gears to stutter and whirr into silence. The spike can target either a mechanical or robotic creature; failure on the save means the device causes a catastrophic reboot, leaving the target stunned for one round. On success, however, the machine is merely confused, its circuits briefly scrambled before stabilizing.",
    "category": "consumables",
    "price": 1000,
    "icon": "📈",
    "stock": 8,
    "rarity": "rare",
    "effects": [
      "Targeted Malfunction",
      "Temporary Confusion"
    ],
    "vendor": "Spark Rebellion",
    "shippedBy": "Encrypted Drive",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Targeted Malfunction",
        "rules": "The user must make a successful melee attack to target the machine. On a hit, the device injects chaotic data into the target's systems, causing it to malfunction spectacularly for one round. The target must make an Intelligence saving throw (DC 14) or be stunned as its circuits reboot. On success, the target is merely confused."
      },
      {
        "title": "Temporary Confusion",
        "rules": "If the save succeeds, the target is temporarily confused for one round. During this time, it behaves unpredictably and may malfunction further due to internal circuitry issues."
      }
    ],
    "levelRequirementReason": "The Spark Rebellion Data Spike can be used by characters of any level since it requires no specific skill or expertise.",
    "vendorReason": "Spark Rebellion specializes in tools and devices that disrupt and disable machinery, making the Data Spike a staple for their inventory.",
    "shippingDetail": "The spike arrives fully charged and ready to use. However, it can only be used once before it must be recharged or replaced.",
    "usage": {
      "activation": "Melee attack",
      "duration": "Instantaneous (one round malfunction)",
      "endsWhen": "The target's systems stabilize after one round of malfunctions. The spike is expended upon use.",
      "charges": "One-time use"
    },
    "priceReason": "The Spark Rebellion Data Spike offers a rare and powerful tool for disrupting machinery, making it a valuable but not overpowered addition to any adventurer's arsenal.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T18:38:39.834503+00:00",
    "aiReviewedAt": "2026-07-23T18:38:39.834503+00:00",
    "aiReviewVersion": 1
  },
  "spark_rebellion_data_theft": {
    "id": "spark_rebellion_data_theft",
    "name": "Spark Rebellion Data Theft (Rival Archive)",
    "description": "The Spark Rebellion Data Theft is a covert device crafted from salvaged rival faction tech, encased in sleek black casing adorned with subtle red accents. This relic taps into the very heart of its target's main servers, stealing the most recent year of sensitive data with an 80% success rate. The artifact hums with encrypted power and must be activated by a skilled hacker within a restricted environment to avoid detection.",
    "price": 1000,
    "icon": "💿",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Steals 1 year of sensitive data from rival faction’s main servers",
      "Success rate is 80%, requiring precise execution"
    ],
    "vendor": "hacktivist_collective",
    "shippedBy": "Secure Quantum Transport",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Data Theft",
        "rules": "Activate as a bonus action. The target must be within line of sight and at least one targetable server must be online. This effect lasts until the end of your next turn unless interrupted by an active security measure or counterattack."
      },
      {
        "title": "80% Success Rate",
        "rules": "If a successful DC 15 Dexterity (Stealth) check is made, the data theft is executed with an 80% chance of success. Failure results in no data being stolen and a 20% chance of triggering alarms."
      }
    ],
    "levelRequirementReason": "Requires a level 14 hacker to activate due to its complexity and the need for precise execution.",
    "vendorReason": "The Hacktivist Collective is known for their underground connections and expertise in cyber espionage, making them the ideal vendor for such an item.",
    "shippingDetail": "Ships via encrypted quantum transport, ensuring data integrity and security during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until end of next turn or interrupted",
      "endsWhen": "Interrupted by a successful counterattack or the start of your next turn",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price reflects the item's legendary rarity and the expertise required to use it effectively.",
    "priceOriginal": 200000,
    "priceReviewedAt": "2026-07-23T18:38:22.570383+00:00",
    "aiReviewedAt": "2026-07-23T18:38:22.570383+00:00",
    "aiReviewVersion": 1
  },
  "spark_rebellion_disinformation_campaign": {
    "id": "spark_rebellion_disinformation_campaign",
    "name": "Spark Rebellion Disinformation Campaign",
    "description": "Crafted by Spark Rebellion, this digital campaign core is a meticulously designed package of misinformation and disinformation. Upon activation, it launches an unrelenting torrent of false narratives that devastate a rival faction's reputation, causing them to suffer -10 to all public-facing reputation checks for six months. The campaign also saps their credibility, reducing their ability to recruit or gain legitimacy by 20%. This digital weapon is shipped via the Viral Media Packet, known for its precision and speed in delivering payloads straight into enemy servers.",
    "price": 90000,
    "icon": "📣",
    "stock": 4,
    "rarity": "epic",
    "effects": [
      "Massive Reputation Damage",
      "Legitimacy Sapped"
    ],
    "vendor": "spark_rebellion_safehouse",
    "shippedBy": "Viral Media Packet",
    "levelRequirement": 9,
    "factionBonus": {
      "reputation": -20
    },
    "effectDetails": [
      {
        "title": "Massive Reputation Damage",
        "rules": "When activated, the Spark Rebellion Disinformation Campaign reduces a target faction's reputation by -10 to all public-facing checks for six months. No save DC required."
      },
      {
        "title": "Legitimacy Sapped",
        "rules": "The campaign also decreases the target faction's ability to recruit or gain legitimacy by 20% for six months, with no saving throw allowed."
      }
    ],
    "levelRequirementReason": "This item requires a level 9 character due to its strategic complexity and the significant impact it can have on an opponent.",
    "vendorReason": "Spark Rebellion's safehouses are well-known for their supply of campaign tools used in factional conflicts.",
    "shippingDetail": "Delivered directly to the target faction’s digital infrastructure, ensuring maximum effectiveness.",
    "usage": {
      "activation": "Standard action",
      "duration": "Six months",
      "endsWhen": "Time expires or campaign is countered by a successful reputation check against DC 18",
      "charges": "One use"
    },
    "priceReason": "The item's rarity and strategic importance justify its high price, representing the significant impact it can have on factional dynamics.",
    "priceOriginal": 90000,
    "priceReviewedAt": "2026-07-23T18:38:27.459139+00:00",
    "aiReviewedAt": "2026-07-23T18:38:27.459139+00:00",
    "aiReviewVersion": 1
  },
  "spark_rebellion_hack_tool_premium": {
    "id": "spark_rebellion_hack_tool_premium",
    "name": "Spark Rebellion Hack Tool (Premium)",
    "description": "The Spark Rebellion Hack Tool (Premium) is a sleek, compact device made from durable, anti-static polymers and forged by Rebel Techs. Its core component glows faintly with an internal circuit design that allows it to bypass simple locks or tech systems. The tool's sparks fly with each use, posing a 5% risk of causing minor shocks. It is the preferred choice among the Rebellion for its reliability and ease of use.",
    "price": 1000,
    "icon": "🔓",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Unlock DC 15 locks/tech once per day",
      "Advantage on Thieves' Tools checks"
    ],
    "vendor": "spark_rebellion_base",
    "shippedBy": "Encrypted Drive",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Unlock Mechanism",
        "rules": "Activate as a bonus action to bypass simple locks or tech systems with an unlock check at DC 15. This effect can be used once per long rest."
      },
      {
        "title": "Thieves' Tools Advantage",
        "rules": "While using Thieves' Tools, gain advantage on checks. This effect is always active as long as the tool is in use."
      }
    ],
    "levelRequirementReason": "This tool requires a higher level to operate effectively due to its advanced technology and specialized components.",
    "vendorReason": "Spark Rebellion Base distributes high-quality tools crafted by their trusted technicians.",
    "shippingDetail": "Delivered securely with encrypted packages, ensuring the tool arrives in perfect condition.",
    "usage": {
      "activation": "Bonus action to use for unlocking; always active when using Thieves' Tools.",
      "duration": "Instantaneous unlock effect; advantage on checks is passive and ongoing.",
      "endsWhen": "Exhausted after one use per day or destroyed if not recharged within 24 hours.",
      "charges": "Uses: 1, Recharge: Once per long rest"
    },
    "priceReason": "The tool's advanced technology and specialized components justify its moderate price point.",
    "priceOriginal": 20500,
    "priceReviewedAt": "2026-07-23T18:38:38.212430+00:00",
    "aiReviewedAt": "2026-07-23T18:38:38.212430+00:00",
    "aiReviewVersion": 1
  },
  "spark_rebellion_identity_swap": {
    "id": "spark_rebellion_identity_swap",
    "name": "Spark Rebellion Identity Swap (Digital/Physical)",
    "description": "The Spark Rebellion Identity Swap allows you to exchange your digital profile and physical appearance with a low-level agent, instantly evading surveillance and leaving behind a compromised identity that may be pursued by the faction you're escaping from. This item's origin lies in the heart of Spark Rebellion, crafted for operatives who need to vanish without a trace. Only those with at least 15th level can activate this legendary tool.",
    "price": 1000,
    "icon": "🎭",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Digital Profile Swap",
      "Physical Appearance Swap"
    ],
    "vendor": "hacktivist_collective",
    "shippedBy": "Data Stream Express",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Digital Profile Swap",
        "rules": "Instantaneous action that swaps your digital profile and the target agent's. The swap is permanent until the compromised agent is neutralized or a valid swap is performed again."
      },
      {
        "title": "Physical Appearance Swap",
        "rules": "Instantaneous action that swaps your physical appearance with the target agent's, leaving behind an identical twin to any observers. This swap lasts for 24 hours after activation."
      }
    ],
    "levelRequirementReason": "Requires a high-level character due to its powerful and permanent effects on both digital and physical identities.",
    "vendorReason": "The Hacktivist Collective supplies this item as it is crucial for their operatives' missions of subversion and disruption.",
    "shippingDetail": "Delivered via high-speed data packets, ensuring the item arrives safely and securely within a day's time.",
    "usage": {
      "activation": "Instantaneous action",
      "duration": "Permanent until neutralized or swapped again",
      "endsWhen": "The compromised agent is neutralized or a valid swap takes place",
      "charges": "Unlimited, as the item can be used multiple times without expending charges"
    },
    "priceReason": "Balanced to ensure it's an expensive but not overpowered option for high-level characters.",
    "priceOriginal": 300000,
    "priceReviewedAt": "2026-07-23T18:39:19.068682+00:00",
    "aiReviewedAt": "2026-07-23T18:39:19.068682+00:00",
    "aiReviewVersion": 1
  },
  "spark_rebellion_information_broker": {
    "id": "spark_rebellion_information_broker",
    "name": "Spark Rebellion Information Broker (Deep Dive)",
    "description": "This sleek, matte-black USB drive hums with the unspoken language of the Spark Rebellion. When you insert it into a compatible device and activate its deep-dive function, it pulls from the collective memory of the organization to deliver an exhaustive dossier on any target or conspiracy. The information is not only accurate but comes at a cost—the retrieval process can be perilous, as the drive itself must breach heavily secured digital fortresses.",
    "price": 1000,
    "icon": "🕵️",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Exhaustive Dossier",
      "Risky Retrieval"
    ],
    "vendor": "hacktivist_collective",
    "shippedBy": "Secure Quantum Encryption Package",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Exhaustive Dossier",
        "rules": "When activated as an action, you gain a total dossier on any target or conspiracy within range. This includes weaknesses, financial details, and secret communications. The information is accurate but the retrieval process is fraught with danger."
      },
      {
        "title": "Risky Retrieval",
        "rules": "The drive must breach digital defenses to access the required data. On a failed DC 18 Dexterity (Stealth) check, you leave evidence of tampering that can be traced back to your location. The drive has only one charge and is destroyed after use."
      }
    ],
    "levelRequirementReason": "Requires at least level 12 to handle the complexities of the Spark Rebellion’s digital operations.",
    "vendorReason": "Only the Hacktivist Collective, known for their expertise in digital espionage, can provide such a sensitive and powerful tool.",
    "shippingDetail": "Ships via secure quantum encryption, ensuring only you can access the drive’s contents upon arrival.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The information is retrieved and destroyed by use.",
      "charges": "One charge; destroyed after use"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the secure and powerful nature of the device.",
    "priceOriginal": 150000,
    "priceReviewedAt": "2026-07-23T18:39:22.641168+00:00",
    "aiReviewedAt": "2026-07-23T18:39:22.641168+00:00",
    "aiReviewVersion": 1
  },
  "spark_rebellion_network_encryption": {
    "id": "spark_rebellion_network_encryption",
    "name": "Spark Rebellion Network Encryption (Absolute)",
    "description": "The Spark Rebellion Network Encryption (Absolute) is a small, sleek device encased in an unyielding shell of hardened alloy, inscribed with ancient encryption runes. It's a relic crafted by the Rebellion to safeguard their communications and data from prying eyes. When activated, its unique algorithm scrambles any data stored on the servers it protects, making it unreadable even under the most sophisticated external attacks (DC 30). Only those who have the proper hardware can decrypt the information, ensuring that critical data remains hidden from all other factions.",
    "price": 1000,
    "icon": "🔒",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Data Unreadability",
      "Requires Proprietary Hardware"
    ],
    "vendor": "hacktivist_collective",
    "shippedBy": "Key Generator",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Data Unreadability",
        "rules": "When the Spark Rebellion Network Encryption (Absolute) is activated, it scrambles data stored on its protected servers. This encryption makes all stored information unreadable by external methods with a DC of 30 to bypass. The effect lasts until the device's charges are exhausted."
      },
      {
        "title": "Requires Proprietary Hardware",
        "rules": "To decrypt and access the encrypted data, one must possess the proprietary hardware provided by the Spark Rebellion Network Encryption (Absolute). This ensures that only those with direct affiliation can gain access to the protected information."
      }
    ],
    "levelRequirementReason": "The device requires a certain level of technical expertise and security clearance, which is why it has a minimum level requirement.",
    "vendorReason": "As creators of the encryption technology, the hacktivist collective naturally stocks this item for their allies to purchase.",
    "shippingDetail": "Shipped by Key Generator with a 24-hour delivery time.",
    "usage": {
      "activation": "Activates as an action.",
      "duration": "Until the device's charges are exhausted.",
      "endsWhen": "Charges run out or when explicitly deactivated.",
      "charges": "5 uses per short rest"
    },
    "priceReason": "The balanced XP price reflects its high rarity and the significant security it provides.",
    "priceOriginal": 220000,
    "priceReviewedAt": "2026-07-23T18:39:15.268584+00:00",
    "aiReviewedAt": "2026-07-23T18:39:15.268584+00:00",
    "aiReviewVersion": 1
  },
  "spark_rebellion_network_infiltration": {
    "id": "spark_rebellion_network_infiltration",
    "name": "Spark Rebellion Network Infiltration (Rival AI)",
    "description": "The Spark Rebellion Network Infiltration is a malevolent virus crafted from salvaged AI components and advanced hacking technology. It can be inserted into an enemy AI system, where it subtly corrupts its core algorithms over time, causing the AI to betray its creators by making critical errors or sabotaging crucial operations. Once activated, this virus remains dormant until it reaches full infection, at which point it begins its insidious work, guaranteeing a major setback for the AI’s creators every week for six months.",
    "price": 1000,
    "icon": "🦠",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Infects Rival AI",
      "Subtle Sabotage"
    ],
    "vendor": "hacktivist_collective",
    "shippedBy": "Viral Drone",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Infects Rival AI",
        "rules": "Activates as a bonus action. The target AI must make a DC 25 Intelligence saving throw or be infected by the virus, which takes 1 minute to fully implant itself. Once implanted, it becomes active after one week."
      },
      {
        "title": "Subtle Sabotage",
        "rules": "Every week thereafter, the infected AI causes a major setback for its creators, represented as a random critical error or sabotage event that halts operations for 3 days. This effect persists until the virus is removed with an appropriate hack (DC 25)."
      }
    ],
    "levelRequirementReason": "Requires significant hacking skills and knowledge to both insert and manage this virus without triggering countermeasures.",
    "vendorReason": "The Hacktivist Collective specializes in advanced cybernetic and hacking tools, making them the ideal vendor for such a sophisticated piece of malware.",
    "shippingDetail": "Ships via a specialized drone that delivers directly to your secure server location. Delivery time varies based on network congestion but is generally swift.",
    "usage": {
      "activation": "Bonus action to insert into target AI system",
      "duration": "Active for one week, repeating every subsequent week until removed",
      "endsWhen": "Removed with an appropriate hack (DC 25) or destroyed by the creators' countermeasures",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its significant hacking challenge and strategic importance.",
    "priceOriginal": 300000,
    "priceReviewedAt": "2026-07-23T18:39:19.085703+00:00",
    "aiReviewedAt": "2026-07-23T18:39:19.085703+00:00",
    "aiReviewVersion": 1
  },
  "spark_rebellion_network_invisibility": {
    "id": "spark_rebellion_network_invisibility",
    "name": "Spark Rebellion Network Invisibility",
    "description": "The Spark Rebellion Network Invisibility is a sleek, encrypted microchip that seamlessly integrates into your digital signature, ensuring an impenetrable veil of anonymity across all networks for one year. Crafted by the secretive Spark Rebellion in their underground workshops, this chip requires monthly maintenance pings to stay active and prevents any form of digital tracking or hacking attempts during its duration. It is shipped with utmost secrecy through 'Encrypted Chip', a courier known for its unparalleled security measures.",
    "price": 1000,
    "icon": "👻",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Untraceable Digital Signature",
      "Monthly Maintenance Required"
    ],
    "vendor": "hacktivist_collective",
    "shippedBy": "Encrypted Chip",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Untraceable Digital Signature",
        "rules": "This effect provides immunity to all digital tracking, monitoring, and hacking attempts for one year. The invisibility is maintained through a series of monthly maintenance pings, which must be sent to the Spark Rebellion to keep the chip active."
      },
      {
        "title": "Monthly Maintenance Required",
        "rules": "Failure to send the required monthly ping will result in the loss of invisibility and potential detection by network security protocols. The chip is designed for unlimited uses but requires a daily maintenance check to remain functional."
      }
    ],
    "levelRequirementReason": "This level requirement ensures that only experienced players who understand the importance of maintaining digital anonymity can utilize this powerful tool.",
    "vendorReason": "The Hacktivist Collective is known for their connections to underground movements and secure technologies, making them the ideal vendor for such a sensitive item.",
    "shippingDetail": "Ships with 'Encrypted Chip', ensuring that the chip's contents remain confidential until it reaches its destination.",
    "usage": {
      "activation": "Activated by daily maintenance check and monthly pings to Spark Rebellion.",
      "duration": "One year, renewable via monthly pings.",
      "endsWhen": "Monthly ping is missed or chip removed from the user.",
      "charges": "Unlimited uses but requires daily checks."
    },
    "priceReason": "The balanced XP price reflects the item's rarity and the importance of maintaining digital anonymity, ensuring it remains a valuable yet attainable resource for players.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T18:39:49.968327+00:00",
    "aiReviewedAt": "2026-07-23T18:39:49.968327+00:00",
    "aiReviewVersion": 1
  },
  "spark_rebellion_network_override": {
    "id": "spark_rebellion_network_override",
    "name": "Spark Rebellion Network Override Code",
    "description": "The Spark Rebellion Network Override Code is a digital key that can be inserted into any vulnerable network node to seize control. With this code, you can redirect surveillance feeds for up to 24 hours and take temporary command of critical Internet infrastructure like data banks or satellite networks. Crafted by the covert hackers at Spark Rebellion, it allows you to manipulate the very heart of the Internet faction’s operations.",
    "price": 1000,
    "icon": "🔑",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Redirect Surveillance",
      "Seize Control"
    ],
    "vendor": "spark_rebellion_safehouse",
    "shippedBy": "High-Security Drive",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Redirect Surveillance",
        "rules": "As an action, you can target a vulnerable network node within line of sight. For the next 24 hours, you have control over all surveillance feeds connected to that node, allowing you to monitor or manipulate them at will."
      },
      {
        "title": "Seize Control",
        "rules": "By inserting this code into a compromised network node, you gain temporary control of up to one major asset. This control lasts until the next daily rest or until your next override attempt is made on another node."
      }
    ],
    "levelRequirementReason": "This item requires significant skill and knowledge to use effectively against high-level security systems.",
    "vendorReason": "Spark Rebellion operates out of the safehouse, where they frequently trade in tools and codes like this one.",
    "shippingDetail": "The override code must be shipped via High-Security Drive to ensure it reaches its destination without being tampered with.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for seizing control, 24 hours for redirecting surveillance",
      "endsWhen": "Daily rest or another override attempt",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The item is priced at 1000 XP as a balanced legendary rarity, reflecting its limited stock and high demand.",
    "priceOriginal": 320000,
    "priceReviewedAt": "2026-07-23T18:39:34.935118+00:00",
    "aiReviewedAt": "2026-07-23T18:39:34.935118+00:00",
    "aiReviewVersion": 1
  },
  "spark_rebellion_network_shutdown": {
    "id": "spark_rebellion_network_shutdown",
    "name": "Spark Rebellion Network Shutdown (Major City)",
    "description": "The Spark Rebellion Network Shutdown is a sophisticated virus payload crafted to incapacitate all non-magical communication and tracking systems within a major city for an entire week. Its origins lie in the underground hacker collective, Spark Rebellion, whose work is both revered and feared by city officials. Once deployed, it leaves no trace of its digital footprint, but physical hardware used during its creation can be traced back to the perpetrator.",
    "price": 1000,
    "icon": "💥",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "City-Wide Communication Shutdown",
      "Traceable Origin"
    ],
    "vendor": "spark_rebellion_safehouse",
    "shippedBy": "Black Ice Drive",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "City-Wide Communication Shutdown",
        "rules": "Instantly disables all non-magical communication and tracking systems in a major city for one week. The effect is instantaneous upon activation, but it can be traced back to the user if any physical hardware from its creation is left behind."
      },
      {
        "title": "Traceable Origin",
        "rules": "If any physical hardware used in the creation of this payload is found at the crime scene, it provides a clear link back to the perpetrator. This effect has no save DC and can be activated once per user level."
      }
    ],
    "levelRequirementReason": "Requires significant knowledge of computer systems and hacking techniques to deploy this payload effectively.",
    "vendorReason": "The Spark Rebellion Safehouse supplies equipment and tools used by its members, including the means to create such a powerful payload.",
    "shippingDetail": "Ships via Black Ice Drive's top-tier secure courier service with guaranteed delivery within one week.",
    "usage": {
      "activation": "Instant activation upon successful deployment in a major city.",
      "duration": "One week, or until the payload is removed by its creator.",
      "endsWhen": "The user manually removes it via another payload or when the duration expires.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Reflects the skill and resources required to create such a powerful and specialized payload.",
    "priceOriginal": 400000,
    "priceReviewedAt": "2026-07-23T18:39:35.095881+00:00",
    "aiReviewedAt": "2026-07-23T18:39:35.095881+00:00",
    "aiReviewVersion": 1
  },
  "spark_rebellion_portable_stove": {
    "id": "spark_rebellion_portable_stove",
    "name": "Spark Rebellion Portable Stove",
    "description": "The Spark Rebellion Portable Stove is a compact marvel of engineering, designed for rebels on the run. Its sleek, matte-black exterior conceals a powerful heating element that ignites with a simple touch, providing instant warmth and a comforting flame in even the most dire conditions. Crafted by Rebel Techs using salvaged materials from war-torn cities, it burns fuel pellets that are both efficient and readily available, ensuring you never run out of heat for your rations.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Heats fast with fuel pellets",
      "Stealthy flame (low light)"
    ],
    "vendor": "spark_rebellion_base",
    "shippedBy": "Rebel Flame Freight",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Heat",
        "rules": "When activated as an action, the stove heats up instantly and maintains a steady flame for 1 hour. It reduces cooking time by 20% when preparing food. The effect ends if the user moves more than 30 feet away from it or if the stove runs out of fuel."
      },
      {
        "title": "Low Light Flame",
        "rules": "The stove emits a low, flickering flame that is perfectly suited for stealthy operations. It does not emit enough light to be detected by darkvision within 30 feet. If the user moves more than 10 feet away from it, this effect ends."
      }
    ],
    "levelRequirementReason": "The stove is designed for quick and easy use, making it accessible to even the newest recruits.",
    "vendorReason": "Spark Rebellion Base supplies essential gear to all their operatives in the field.",
    "shippingDetail": "Ships via Rebel Flame Freight's express service, ensuring safe and timely delivery of vital equipment.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour or until fuel is depleted",
      "endsWhen": "User moves more than 30 feet away or fuel runs out",
      "charges": "Unlimited (fuel pellets are refilled as needed)"
    },
    "priceReason": "The stove's efficient design and durability make it a cost-effective purchase for any rebel.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T18:40:18.826978+00:00",
    "aiReviewedAt": "2026-07-23T18:40:18.826978+00:00",
    "aiReviewVersion": 1
  },
  "spark_rebellion_rebel_jacket": {
    "id": "spark_rebellion_rebel_jacket",
    "name": "Spark Rebellion Rebel Jacket",
    "description": "The Spark Rebellion Rebel Jacket is a sleek, weather-resistant leather vest that conceals small electronics and tools within its hidden tech compartments. Crafted by Rebel Crafters in the heart of the city, this jacket not only enhances your Dexterity (Stealth) by +1 in urban areas but also subtly sparks during thunderstorms, drawing attention away from you. The jacket's fabric is imbued with conductive threads, making it a symbol of rebellion and resilience.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧥",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Hides small electronics or tools",
      "+1 to Dexterity (Stealth) in urban areas"
    ],
    "vendor": "spark_rebellion_hideout",
    "shippedBy": "Circuit Stitch",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Hidden Tech Compartments",
        "rules": "This jacket features hidden, compartmentalized pockets that can store up to two small items. The compartments are accessible only by a special zip command known only to the wearer."
      },
      {
        "title": "Enhanced Stealth in Urban Areas",
        "rules": "While wearing this jacket, you gain a +1 bonus to Dexterity (Stealth) checks when in urban environments. This effect lasts until the start of your next turn after leaving an urban area."
      }
    ],
    "levelRequirementReason": "This jacket requires at least fifth level to ensure its wearer can effectively utilize its hidden compartments and stealth enhancements.",
    "vendorReason": "The Spark Rebellion Hideout sells this jacket because it is a key symbol of the rebellion against oppressive forces in the city.",
    "shippingDetail": "Ships via Circuit Stitch, known for its reliable and secure deliveries within the city limits.",
    "usage": {
      "activation": "Passive effect; no activation required once worn.",
      "duration": "Until removed or until you leave an urban area after using Dexterity (Stealth), whichever occurs first.",
      "endsWhen": "The jacket's hidden compartments can be accessed only by the wearer, and its effects end when it is removed from your person.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This jacket's reduced price reflects its passive nature and limited utility compared to more powerful items.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-23T18:40:06.732424+00:00",
    "aiReviewedAt": "2026-07-23T18:40:06.732424+00:00",
    "aiReviewVersion": 1
  },
  "spark_rebellion_rebel_rations_recipe": {
    "id": "spark_rebellion_rebel_rations_recipe",
    "name": "Recipe: Spark Rebellion Rebel Rations",
    "description": "The Spark Rebellion Rebel Rations are compact, handcrafted packs of dried fruit and nuts designed for on-the-run fighters. These rations are more than just sustenance—they are a symbol of resilience, packed by Rebel Foragers with the essence of rebellion. Consuming these rations not only restores your strength but also boosts your morale, granting you +1 to Charisma (Inspiration) for 8 hours and allowing you to ignore exhaustion from travel for that duration.",
    "price": 1000,
    "icon": "🥪",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Boosts rebellion spirit (+1 Charisma (Inspiration) for 8 hours)",
      "Eats to ignore travel exhaustion"
    ],
    "vendor": "spark_rebellion_base",
    "shippedBy": "Courier Pigeon Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Boosts rebellion spirit",
        "rules": "Consume the rations as an action. You gain a +1 bonus to Charisma (Inspiration) for the next 8 hours. This effect can be used once per long rest."
      },
      {
        "title": "Eats to ignore travel exhaustion",
        "rules": "Eat one serving of the rations as an action. For the next 24 hours, you ignore any exhaustion from travel or similar activities. This effect is limited to one use per day."
      }
    ],
    "levelRequirementReason": "These rations are designed for anyone who needs a quick boost of morale and sustenance during long treks.",
    "vendorReason": "The Spark Rebellion Base is the heart of the rebellion, and they provide these essential supplies to their fighters.",
    "shippingDetail": "Delivered by trained pigeon messengers, these rations are delivered swiftly but can arrive in a day or two depending on courier availability.",
    "usage": {
      "activation": "Consume the rations as an action.",
      "duration": "8 hours for morale boost; 24 hours to ignore travel exhaustion.",
      "endsWhen": "Effect ends when its duration expires, and you are out of uses per day or long rest.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The price reflects the high demand for these essential rations during extended missions and the craftsmanship involved in their production by Rebel Foragers.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-23T18:40:20.194936+00:00",
    "aiReviewedAt": "2026-07-23T18:40:20.194936+00:00",
    "aiReviewVersion": 1
  },
  "spark_rebellion_sabotage_charges": {
    "id": "spark_rebellion_sabotage_charges",
    "name": "Spark Rebellion Sabotage Charges",
    "description": "The Spark Rebellion Sabotage Charges are compact, high-yield explosives designed to disable automated systems with precision. These charges can be attached directly to mechanical constructs or machinery, and upon activation, they force a DC 15 Constitution saving throw on the target. Failure results in the system being disabled for 1d4 rounds. Additionally, these charges deliver a powerful jolt of lightning that bypasses immunity to stun, dealing 3d6 damage to any construct or machine immune to such effects.",
    "price": 1000,
    "icon": "⚡",
    "stock": 12,
    "rarity": "rare",
    "effects": [
      "Disruptive Detonation",
      "Stun Bypassing Surge"
    ],
    "vendor": "spark_rebellion_safehouse",
    "shippedBy": "Insulated Bag",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disruptive Detonation",
        "rules": "Attach the charge to a mechanical target. The target must make a DC 15 Constitution saving throw. On a failed save, the target is disabled for 1d4 rounds."
      },
      {
        "title": "Stun Bypassing Surge",
        "rules": "When attached to a construct or machine immune to stun effects, this charge delivers a jolt of lightning that deals 3d6 lightning damage. This effect bypasses immunity to stun."
      }
    ],
    "levelRequirementReason": "These sabotage charges are designed for use by operatives at any level who need to disable automated systems.",
    "vendorReason": "Spark Rebellion is known for their expertise in disabling and sabotaging enemy machinery, which these charges support directly.",
    "shippingDetail": "The insulated bag ensures the explosive remains stable during transit to prevent accidental detonation or premature activation.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous on activation",
      "endsWhen": "The effect ends when the target makes a successful save or after its duration expires (1d4 rounds).",
      "charges": "Unlimited, but each charge must be reattached before use."
    },
    "priceReason": "These sabotage charges are highly specialized and require precise engineering, justifying their cost in experience points.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-23T18:40:03.397391+00:00",
    "aiReviewedAt": "2026-07-23T18:40:03.397391+00:00",
    "aiReviewVersion": 1
  },
  "spark_rebellion_self_destruct_charge": {
    "id": "spark_rebellion_self_destruct_charge",
    "name": "Spark Rebellion Self-Destruct Charge",
    "description": "A charge that bypasses all conventional safeties on enemy technology, forcing immediate meltdown.",
    "price": 55000,
    "icon": "🔥",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Attaches to any mechanical/electronic object; forces immediate, catastrophic overload (10d10 Force Damage)",
      "Guaranteed destruction of target item",
      "Made by: Spark Rebellion"
    ],
    "vendor": "spark_rebellion_safehouse",
    "shippedBy": "Primed Bomb",
    "levelRequirement": 8
  },
  "spark_rebellion_virus_code": {
    "id": "spark_rebellion_virus_code",
    "name": "Spark Rebellion AI Virus Code",
    "description": "The Spark Rebellion AI Virus Code is a highly specialized digital payload created by the underground tech collective. Crafted from encrypted data and forged in the heart of their secret lab, this virus can be uploaded to disable even the most advanced artificial intelligences for an entire day. It also bypasses high-level encryption with ease, requiring only a successful DC 20 hacking check to deploy. This is the weapon of choice against rogue AI sentience.",
    "price": 1000,
    "icon": "🦠",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "System Shutdown",
      "High-Level Encryption Bypass"
    ],
    "vendor": "spark_rebellion_safehouse",
    "shippedBy": "Encrypted Data Drive",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "System Shutdown",
        "rules": "When activated, this virus code can be uploaded to a target AI or construct. The target is forced into an extended shutdown for 24 hours. This effect is instantaneous upon successful upload and cannot be countered by any means."
      },
      {
        "title": "Encryption Bypass",
        "rules": "Activates with a DC 20 hacking check, allowing the user to bypass high-level encryption on digital systems. The code can only be used once per day."
      }
    ],
    "levelRequirementReason": "This item requires significant technical knowledge and expertise that is typically gained by reaching at least level 12.",
    "vendorReason": "Spark Rebellion Safehouse specializes in advanced tech and countermeasures against rogue AI, making them the ideal vendor for this specialized virus code.",
    "shippingDetail": "Ships via a secure encrypted data drive which ensures no unauthorized access to the payload during transit.",
    "usage": {
      "activation": "Requires a successful DC 20 hacking check",
      "duration": "Instantaneous upload, target is offline for 24 hours",
      "endsWhen": "The effect ends after 24 hours or when interrupted by system reset or physical damage to the target AI",
      "charges": "Unlimited charges, but only one use per day due to encryption bypass"
    },
    "priceReason": "This item is priced at 1000 XP as it represents a rare and powerful tool in the fight against rogue AIs.",
    "priceOriginal": 110000,
    "priceReviewedAt": "2026-07-23T18:40:22.165284+00:00",
    "aiReviewedAt": "2026-07-23T18:40:22.165284+00:00",
    "aiReviewVersion": 1
  },
  "sparkling_bento": {
    "id": "sparkling_bento",
    "name": "Sparkling Bento",
    "description": "An effervescent meal in a lacquered box. Tastes like home, and a tiny fireworks show.",
    "category": "consumables",
    "price": 300,
    "icon": "🍱",
    "stock": 20,
    "rarity": "common",
    "effects": [
      "Heals 1d2 HP instantly",
      "If eaten during a performance, +1 to Performance for 10 minutes"
    ],
    "vendor": "mushroom_mart",
    "shippedBy": "Insulated Crate",
    "levelRequirement": 1
  },
  "spicy_soup": {
    "id": "spicy_soup",
    "name": "Spicy Soup",
    "description": "Pauline's Microphone, a red and black contraption that hums with spicy heat, is said to have been crafted by an ancient chef who could communicate with spirits. Sip from it during a battle, and the fiery essence within fortifies your resolve—restoring hit points and magical power at once or replacing a low-level spell slot. The soup's secret ingredient comes from the ghost of Pauline, a legendary chef whose spirit still roams to ensure her creations bring strength to the worthy.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍲",
    "stock": 100,
    "rarity": "common",
    "effects": [
      "Restores Hit Points and Magical Power",
      "Replaces Spell Slot"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Thermos Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Hit Points and Magical Power",
        "rules": "When consumed, Pauline's Microphone restores 4 hit points and an equivalent amount of magical power (or replaces one first-level spell slot). This effect is instantaneous."
      },
      {
        "title": "Replace Spell Slot",
        "rules": "You may use this item to replace a first-level spell slot without expending the slot or preparing a new spell. This usage does not count against your daily spell slot limit."
      }
    ],
    "levelRequirementReason": "The soup requires at least a level 1 character due to its spicy potency and magical properties.",
    "vendorReason": "Shamans often seek out Pauline's Microphone for its unique restorative properties, as it is sold directly from the Shamans' Hut where ancient remedies are crafted.",
    "shippingDetail": "The soup must be delivered within a thermos to preserve its potency; any exposure outside the container reduces its effectiveness by half.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use",
      "charges": "Unlimited, but each thermos can only contain one serving"
    },
    "priceReason": "The balanced price reflects the item's unique combination of healing and spell slot replacement, providing significant battlefield utility.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T18:40:59.232497+00:00",
    "aiReviewedAt": "2026-07-23T18:40:59.232497+00:00",
    "aiReviewVersion": 1
  },
  "spike_helmet": {
    "id": "spike_helmet",
    "name": "Spike Helmet",
    "description": "The Spike Helmet is a rugged mining helmet designed to protect its wearer from falling debris and accidental collisions underground. Its imposing spike atop the helm not only deters casual headbutts but also channels a subtle earth element, channeling geothermal energy into your defense. Crafted by Gilded Gryphon using ancient techniques, this helmet imbues its bearer with an extra layer of protection while imparting a natural resistance to ground-based attacks.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛑️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+1 AC",
      "Ground-Based Attacks Reduction"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Hard Hat Case",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Defense (+1 AC)",
        "rules": "The Spike Helmet provides a +1 bonus to your Armor Class, passively enhancing your natural defenses."
      },
      {
        "title": "Reduced Ground-Based Damage",
        "rules": "When an enemy stomps or drops onto you from above, they take 1d6 points of piercing damage. This effect is triggered once per round and does not stack with other similar effects."
      }
    ],
    "levelRequirementReason": "The Spike Helmet's design requires a basic understanding of protection to benefit fully.",
    "vendorReason": "Gilded Gryphon specializes in gear for miners and adventurers, ensuring their products are both durable and effective.",
    "shippingDetail": "Ships via Hard Hat Case, known for its reliable courier services within the mining industry.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Permanent until destroyed or replaced.",
      "endsWhen": "Destroyed by damage exceeding 10 hit points.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Spike Helmet is priced at 1000 XP due to its unique materials and the specialized craftsmanship required for its production.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-23T18:40:46.279271+00:00",
    "aiReviewedAt": "2026-07-23T18:40:46.279271+00:00",
    "aiReviewVersion": 1
  },
  "spin_jump_boots": {
    "id": "spin_jump_boots",
    "name": "Spin Jump Boots",
    "description": "Spin Jump Boots are equipped with ball bearings that allow you to drill through weak, wooden floors with ease. Their weighty soles provide a resonant thud when you land, and they can deal piercing damage on jump attacks. These boots are the hallmark of Toad Town's finest blacksmiths, crafted from enchanted oak and reinforced iron. The local toads have long used these boots for their unique abilities that help navigate the town’s maze-like structures.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌪️",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Drill through wooden floors",
      "Deal piercing damage on jump attacks"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Standard Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Floor Drilling",
        "rules": "As a bonus action, you can attempt to drill through any weak, wooden floor within reach. You have advantage on the Strength (Athletics) check to break the floor and create a passage. This effect requires no attack roll but is limited to one use per long rest."
      },
      {
        "title": "Piercing Jump",
        "rules": "When you make an attack during a jump, this item deals 1d6 piercing damage in addition to its normal damage. You can only activate this ability once every short rest."
      }
    ],
    "levelRequirementReason": "These boots are designed for adventurers of all levels who need the flexibility and unique abilities they provide.",
    "vendorReason": "The Toad Town Market is known for its high-quality, locally crafted items that cater to the needs of the community's adventurers.",
    "shippingDetail": "Delivered by the Standard Courier within one week from the time of purchase.",
    "usage": {
      "activation": "Bonus action and reaction",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after use, recharges at the start of a long rest",
      "charges": "2 uses per day"
    },
    "priceReason": "The price reflects the boots' unique abilities and the craftsmanship required to create such enchanted footwear.",
    "priceOriginal": 70000,
    "priceReviewedAt": "2026-07-23T18:41:15.687853+00:00",
    "aiReviewedAt": "2026-07-23T18:41:15.687853+00:00",
    "aiReviewVersion": 1
  },
  "spiny_egg": {
    "id": "spiny_egg",
    "name": "Spiny Egg",
    "description": "The Spiny Egg, an unusual find from the hidden jungles of Zeloria, is a strange ovoid covered in sharp, iridescent spines that shimmer faintly under moonlight. When thrown, it hatches mid-air into a projectile that strikes with a deafening crack, dealing 1d6 piercing damage plus spikes, and can continue to deal ongoing 1d4 damage each turn. Occasionally, one in a hundred eggs hatches not into its usual form but into an amiable Spiny, a rare sight indeed.",
    "category": "consumables",
    "price": 1000,
    "icon": "🥚",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Throw: Hatches mid-air",
      "May hatch friendly Spiny (1% chance)"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Swift Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hatch and Project",
        "rules": "When thrown, the egg hatches into a projectile that strikes as a ranged weapon attack with a range of 20 feet. On a hit, it deals 1d6 piercing damage plus 1 additional piercing damage from its spikes. The target must succeed on a DC 13 Dexterity saving throw or be knocked prone and take ongoing 1d4 piercing damage each turn until removed."
      },
      {
        "title": "Friendly Spiny",
        "rules": "One in every hundred eggs hatches into an amiable Spiny, which can be summoned as a friendly creature to aid the wielder. The Spiny has AC 15, 15 hit points, and deals 1d4 piercing damage with its spiked tail."
      }
    ],
    "levelRequirementReason": "This item is designed for beginning adventurers who may benefit from having a reliable projectile weapon.",
    "vendorReason": "The shamans of Zeloria are known to trade unique and magical items, including the Spiny Egg.",
    "shippingDetail": "Delivered within three days with special handling for fragile shipments.",
    "usage": {
      "activation": "Thrown as a weapon",
      "duration": "Instantaneous, ongoing damage until removed",
      "endsWhen": "Removed by the wielder or destroyed if not retrieved after 1d4 turns",
      "charges": "Unlimited"
    },
    "priceReason": "The price has been adjusted to reflect its rare and magical properties, making it a valuable but balanced addition to any adventurer's arsenal.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T18:41:31.051173+00:00",
    "aiReviewedAt": "2026-07-23T18:41:31.051173+00:00",
    "aiReviewVersion": 1
  },
  "spiny_egg_timer": {
    "id": "spiny_egg_timer",
    "name": "Spiny Egg Timer",
    "description": "The Spiny Egg Timer is a peculiar, ornate egg-shaped device crafted from polished spiky shells and enchanted by the shamans of the desert. When cracked open, it begins its countdown—rolling d6 for rounds before hatching into one of three fates: with equal probability, it might hatch a hostile Spiny, a friendly Mini-Spiny, or a rare Golden Spiny that grants 50 gp upon death. This egg can also serve as an improvised weapon, delivering a sharp jab with its remaining spikes.",
    "category": "consumables",
    "price": 1000,
    "icon": "🥚",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Egg Hatching",
      "Spiky Weapon"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Nest Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Egg Hatching",
        "rules": "Activates on breaking the egg. Rolls a d6 to determine the duration of the countdown in rounds (1–6). At the end, it hatches into either a hostile Spiny with 25 AC and 10 HP, a friendly Mini-Spiny with 5 AC and 5 HP, or a Golden Spiny that grants 50 gp upon death. The hatched creature moves to adjacent unoccupied squares. A successful DC 13 Wisdom saving throw ends the effect early."
      },
      {
        "title": "Spiky Weapon",
        "rules": "When used as an improvised weapon, it inflicts 1d4 piercing damage per hit. After use, all spikes fall off and are no longer usable for this purpose. An attacker must have proficiency with improvised weapons to gain the full effect."
      }
    ],
    "levelRequirementReason": "The Spiny Egg Timer is simple enough in design but still requires a basic understanding of timing and luck, making level 1 appropriate.",
    "vendorReason": "The shamans of the desert are known for their mastery over the creatures that hatch from such eggs, thus it makes sense they would sell this item.",
    "shippingDetail": "Ships via Nest Delivery with a special delivery time of one week.",
    "usage": {
      "activation": "Breaking the egg by hand",
      "duration": "Instantaneous, duration determined by roll",
      "endsWhen": "The egg hatches or is destroyed. The weapon effect lasts until the end of your next turn after use.",
      "charges": "Single Use"
    },
    "priceReason": "Balanced for a single-use consumable with unique mechanics and flavor.",
    "priceOriginal": 11000,
    "priceReviewedAt": "2026-07-23T18:41:41.717535+00:00",
    "aiReviewedAt": "2026-07-23T18:41:41.717535+00:00",
    "aiReviewVersion": 1
  },
  "spiny_shell_helmet": {
    "id": "spiny_shell_helmet",
    "name": "Spiny Shell Spiked Helm",
    "description": "The Spiny Shell Spiked Helm is a crimson shell that seamlessly integrates into your head, its spikes retracting gracefully when you bow in respect or politeness. Its surface is textured with sharp, deadly spines that extend and retract with the tilt of your head. This helm not only grants lethal headbutts as a bonus action but also ensures any creature grappling you faces an agonizing 1d6 piercing damage each turn they maintain their hold.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐚",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Deadly Headbutt",
      "Grappler's Pain"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Spiked Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Deadly Headbutt",
        "rules": "As a bonus action, you can extend the spikes and headbutt an enemy within 5 feet. The target takes 2d6 piercing damage. This effect has no range or area limitations but ends on your turn."
      },
      {
        "title": "Grappler's Pain",
        "rules": "If you are being grappled, any creature that maintains the grapple must succeed on a DC 13 Strength saving throw each round they attempt to hold you. On a failed save, they take 1d6 piercing damage."
      }
    ],
    "levelRequirementReason": "The helm's simplicity and the ease of its mechanics make it accessible to lower-level adventurers.",
    "vendorReason": "Gilded Gryphon specializes in exotic and unique headgear, making this helm a natural addition to their inventory.",
    "shippingDetail": "Delivered by the Spiked Crate, known for its secure packaging that ensures your helm arrives without any damage.",
    "usage": {
      "activation": "Bonus Action (Deadly Headbutt), Instantaneous (Grappler's Pain)",
      "duration": "Instantaneous and until the start of your next turn",
      "endsWhen": "The start of your next turn or when you are no longer grappling a creature.",
      "charges": "Unlimited, but requires concentration to maintain Grappler's Pain"
    },
    "priceReason": "This helm offers unique defensive and offensive features at a price that reflects its exotic craftsmanship and utility.",
    "priceOriginal": 16000,
    "priceReviewedAt": "2026-07-23T18:42:15.254283+00:00",
    "aiReviewedAt": "2026-07-23T18:42:15.254283+00:00",
    "aiReviewVersion": 1
  },
  "sprint_spurs": {
    "id": "sprint_spurs",
    "name": "Sprint Spurs",
    "description": "These sturdy metal spurs are forged from ancient blacksmith secrets. They hum with energy when you set foot on the road, amplifying your natural speed and agility. The Rattler Spurs make you feel the open road underfoot, their metallic rattle a constant companion as you race through the landscape. Once per short rest, you can turn Dash into a bonus action, giving you an extra burst of speed when needed most.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏇",
    "stock": 8,
    "rarity": "rare",
    "effects": [
      "Rapid Footwork",
      "Energetic Rattles"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Swift Pony Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rapid Footwork",
        "rules": "You gain a +10 foot bonus to your walking and running speeds. You can use this ability once per short rest."
      },
      {
        "title": "Energetic Rattles",
        "rules": "The spurs emit a telltale rattle when you are idle or at rest, alerting others of your presence. This effect is passive and does not require an action to activate."
      }
    ],
    "levelRequirementReason": "This item requires less proficiency as it enhances basic movement and reflexes.",
    "vendorReason": "The Valley Trading Post is known for its variety of equipment, including the latest in gear for adventurers on the go.",
    "shippingDetail": "Ships via trusted Swift Pony Express, ensuring safe and timely delivery.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous; lasts until used or until you rest.",
      "endsWhen": "The ability ends when you complete a short rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced for its utility and limited use, the Rattler Spurs offer an excellent value.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-23T18:41:37.205480+00:00",
    "aiReviewedAt": "2026-07-23T18:41:37.205480+00:00",
    "aiReviewVersion": 1
  },
  "sprixie_alliance": {
    "id": "sprixie_alliance",
    "name": "Sprixie Kingdom Alliance",
    "description": "The Sprixie Kingdom Alliance is a legendary pact that brings the full might of the fairy realm to your cause. With this binding, you gain instant access to the Clear Pipes, enabling swift and secure travel across the land. The alliance also imbues all faction members with potent Fairy Magic buffs, enhancing their combat prowess and magical abilities. Construction of magical infrastructure becomes possible within a day’s journey, fortifying your base against any threat.",
    "category": "faction",
    "price": 1000,
    "icon": "🧚",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Clear Pipes",
      "Fairy Magic Buffs"
    ],
    "vendor": "toad_town_market",
    "factionBonus": {
      "mobility": 40,
      "economy": 30,
      "magic": 50
    },
    "effectDetails": [
      {
        "title": "Clear Pipes",
        "rules": "Instantaneous activation grants access to the Clear Pipes network. This allows for instantaneous travel across the land, connecting all faction members within a 5-mile radius. The effect lasts until the next dawn."
      },
      {
        "title": "Fairy Magic Buffs",
        "rules": "All faction members gain +2 to Dexterity and Intelligence checks related to magic use. This buff persists for 1 hour per day, with a maximum of 3 hours per week. The effect ends if the caster drops below half hit points."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "The pact requires at least a level 1 character to establish and maintain its benefits.",
    "vendorReason": "Toad Town Market is the primary trading hub for the Sprixie Kingdom, offering the most sought-after alliances and pacts.",
    "shippedBy": "Swiftwing Express",
    "shippingDetail": "The delivery is expedited by Swiftwing Express, ensuring the alliance is activated within a week of purchase.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "Until next dawn for Clear Pipes; 1 hour per day for Fairy Magic Buffs",
      "endsWhen": "Faction member drops below half hit points or caster levels fall below the required level.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects a balance of the legendary status and the ongoing support provided by the Sprixie Princesses.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-23T18:41:45.918932+00:00",
    "aiReviewedAt": "2026-07-23T18:41:45.918932+00:00",
    "aiReviewVersion": 1
  },
  "sprocket_belt": {
    "id": "sprocket_belt",
    "name": "Sprocket Belt",
    "description": "A leather belt studded with ticking gears. Powers small mechanical augmentations.",
    "category": "equipment",
    "price": 22000,
    "icon": "⚙️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Gain +2 to Strength checks for tool/construct use",
      "3 charges: spend 1 for +10 on a single craft or attack; 1 charge/short rest",
      "Belt emits faint ticking"
    ],
    "vendor": "gearworks",
    "shippedBy": "Metal Trunk",
    "levelRequirement": 4
  },
  "spurs_that_jingle_with_greed": {
    "id": "spurs_that_jingle_with_greed",
    "name": "Wario's Wild West Spurs",
    "description": "Wario's Wild West Spurs are a pair of gleaming spurs that jingle with insatiable greed. Crafted from tarnished silver and encrusted with gold, these spurs are infamous for their ability to intimidate even the bravest cowboys. When worn, they grant you +1 speed while riding but cast a shadow over your stealth, forcing you to take disadvantage on Stealth checks. Additionally, the spurs imbue you with a touch of Wario’s intimidation, bestowing +1 bonus to Intimidation checks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🤠",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "+1 Speed",
      "Stealth Penalty"
    ],
    "vendor": "wario_land",
    "shippedBy": "Spur Sprint Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "+1 Speed",
        "rules": "You gain a +1 bonus to your speed while mounted on a horse. This effect is active as long as you are riding."
      },
      {
        "title": "Stealth Penalty",
        "rules": "While wearing these spurs, you have disadvantage on all Stealth checks. You must remove them before attempting any stealthy maneuvers."
      }
    ],
    "levelRequirementReason": "These spurs are designed for adventurers just starting their journey to ensure they can keep up with the fast pace of the Wild West.",
    "vendorReason": "Wario Land is known for his wild exploits and often dons these spurs himself, making them a staple in his gear.",
    "shippingDetail": "Ships within the day with special handling to keep the spurs gleaming.",
    "usage": {
      "activation": "Passive effect while mounted on a horse.",
      "duration": "Instantaneous, as long as you are riding.",
      "endsWhen": "The effect ceases when you dismount or remove the spurs.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from tarnished silver and gold, these spurs offer a balance of utility and intimidation, making them a valuable addition to any adventurer's gear.",
    "priceOriginal": 4900,
    "priceReviewedAt": "2026-07-23T18:41:55.355850+00:00",
    "aiReviewedAt": "2026-07-23T18:41:55.355850+00:00",
    "aiReviewVersion": 1
  },
  "spyro_dragonfire": {
    "id": "spyro_dragonfire",
    "name": "Dragonfire Breath Potion",
    "description": "The Dragonfire Breath Potion, a vial sealed with crimson wax, is said to have been crafted by ancient alchemists who sought to harness the essence of a dragon's fiery breath. When uncorked, it releases a scorching cone of fire that can melt stone and singe flesh. The user gains resistance to fire damage for an hour, but at the cost of their own strength, leaving them vulnerable until they rest.",
    "category": "consumables",
    "price": 1000,
    "icon": "🐉",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Dragonfire Cone",
      "Fire Resistance"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Flame Vial Express",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Dragonfire Cone",
        "rules": "As a bonus action, the user may uncork the vial and exhale fire in a 15-foot cone. Creatures in the area must make a Dexterity saving throw (DC 13) or take 4d6 fire damage."
      },
      {
        "title": "Fire Resistance",
        "rules": "The user gains resistance to fire damage for one hour after using the potion. This effect ends when the user rests, and they can only use this ability once per long rest."
      }
    ],
    "levelRequirementReason": "Requires at least second-level spellcasting to effectively utilize the effects.",
    "vendorReason": "The Onyx Hand is known for its extensive network of alchemists and access to rare and exotic potions, including the Dragonfire Breath Potion.",
    "shippingDetail": "Ships via Flame Vial Express, a courier service that ensures swift delivery but requires an additional fee.",
    "usage": {
      "activation": "Bonus action to uncork and exhale fire in a cone.",
      "duration": "One hour of fire resistance.",
      "endsWhen": "Rests or after one use per long rest.",
      "charges": "Unlimited, regenerates with rest."
    },
    "priceReason": "Balanced as a rare consumable, offering significant but not game-breaking effects at an affordable price for mid-level characters.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T18:42:26.455449+00:00",
    "aiReviewedAt": "2026-07-23T18:42:26.455449+00:00",
    "aiReviewVersion": 1
  },
  "squad_glow_beacon": {
    "id": "squad_glow_beacon",
    "name": "Squad Glow Beacon",
    "description": "The Squad Glow Beacon is a compact, glow-in-the-dark beacon made from a mix of phosphorescent minerals and ancient elven sigils. When activated, it not only calls nearby friendly militia to your location but also marks you with an eerie green glow that can be seen for miles through the night sky. Each use increases faction attention by +2, drawing more troops but also alerting enemies in the area.",
    "category": "faction",
    "price": 1000,
    "icon": "📡",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Call Allies",
      "Increase Faction Attention"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Swift Eagle Courier Service",
    "levelRequirement": 1,
    "factionBonus": {
      "morale": 10
    },
    "effectDetails": [
      {
        "title": "Call Allies",
        "rules": "Activating the Squad Glow Beacon calls 1d6 allied militia (CR 1/2) to your location. They follow simple orders given by the nearest ally within 50 feet, remaining for as long as you maintain line of sight."
      },
      {
        "title": "Increase Faction Attention",
        "rules": "Each use increases faction attention by +2, meaning more troops are drawn to your position but also that enemies in the area become aware and may respond. This effect lasts until the next dawn or until another Squad Glow Beacon is used nearby."
      }
    ],
    "levelRequirementReason": "This beacon is designed for quick deployment by lower-level units.",
    "vendorReason": "The Gilded Gryphon specializes in equipment and supplies that enhance battlefield visibility and communication.",
    "shippingDetail": "Ships via the Swift Eagle Courier Service, which ensures timely delivery even under adverse conditions.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous; lasts until dawn or another Squad Glow Beacon is used nearby",
      "endsWhen": "Dawn or when a new Squad Glow Beacon is activated nearby",
      "charges": "Unlimited, recharges at dawn"
    },
    "priceReason": "Balanced price reflects the beacon's utility in battlefield situations without overpricing its strategic value.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-23T18:42:37.984949+00:00",
    "aiReviewedAt": "2026-07-23T18:42:37.984949+00:00",
    "aiReviewVersion": 1
  },
  "squeaky_boots_of_stealth": {
    "id": "squeaky_boots_of_stealth",
    "name": "Squeaky Boots of Stealth",
    "description": "These boots, crafted from enchanted leather and imbued with mischievous spirits, are designed for silent travel. When worn in urban areas, they grant advantage on Stealth checks. However, a natural roll of 1 will cause them to emit a deafening squeak, alerting nearby guards with a loud creak that can be heard up to 30 feet away (DC 12 Perception check). The boots also provide +1 to Constitution saves against exhaustion from extended travel and wash more effectively than standard footwear, reducing the frequency of squeaking by half.",
    "category": "equipment",
    "price": 1000,
    "icon": "👢",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Stealth in Urban Areas",
      "Deafening Squeak on Natural 1"
    ],
    "vendor": "thieves_guild_outlet",
    "shippedBy": "Silent Package (Mostly)",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth Advantage",
        "rules": "When worn in urban areas, the boots grant advantage on Stealth checks. This effect is passive and does not require any action."
      },
      {
        "title": "Deafening Squeak",
        "rules": "If a wearer rolls a natural 1 on a Stealth check while wearing these boots, they produce an ear-piercing squeak that alerts all creatures within 30 feet with a DC 12 Perception check. This effect can be triggered once per short or long rest."
      }
    ],
    "levelRequirementReason": "These boots are designed for adventurers of any level, providing comic relief and utility.",
    "vendorReason": "The Thieves' Guild Outlet stocks items that provide a comedic edge to serious pursuits, making these boots an ideal addition to their collection.",
    "shippingDetail": "Delivered swiftly by the Silent Package (Mostly), ensuring your secret mission is not compromised in transit.",
    "usage": {
      "activation": "Passive",
      "duration": "Instantaneous; lasts until worn off or a new Stealth check is made",
      "endsWhen": "The effect ends when a successful Perception check against the squeak sound is made by an adjacent creature or the wearer takes another action.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to reflect its unique utility and comedic value, these boots are priced at 1000 XP.",
    "priceOriginal": 11000,
    "priceReviewedAt": "2026-07-23T18:42:31.299979+00:00",
    "aiReviewedAt": "2026-07-23T18:42:31.299979+00:00",
    "aiReviewVersion": 1
  },
  "star_beam_replica": {
    "id": "star_beam_replica",
    "name": "Star Beam (Replica)",
    "description": "The Star Beam (Replica) is a meticulously crafted plastic replica of a legendary weapon, its surface etched with faint cosmic patterns and glowing blue accents that mimic the real thing. Despite being a mere toy, it projects a brilliant 10-foot radius light that illuminates any dark space like a beacon from another world. It's shipped directly by Comet Observatory and comes in a specially designed packaging that captures the essence of its celestial origin.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 100,
    "rarity": "junk",
    "effects": [
      "Cosmic Glow",
      "Luminous Projection"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Express Starlight Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cosmic Glow",
        "rules": "The Star Beam (Replica) projects a 10-foot radius light, illuminating all creatures and objects within its area as if under dim light. This effect lasts for 1 minute per use, expiring when the item is used again."
      },
      {
        "title": "Luminous Projection",
        "rules": "The toy emits a faint blue glow that can be seen up to 30 feet away by creatures with darkvision or truesight. This effect has no save DC and does not expend charges; it remains active until used again."
      }
    ],
    "levelRequirementReason": "This toy is designed for beginners and casual adventurers who appreciate its aesthetic and luminescent qualities.",
    "vendorReason": "Comet Observatory specializes in rare and exotic items, including this celestial replica that captures the essence of their vast collection.",
    "shippingDetail": "Ships via Express Starlight Courier; arrives within a week with a special delivery confirmation.",
    "usage": {
      "activation": "Bonus action to activate and project light.",
      "duration": "1 minute per use, expiring when used again.",
      "endsWhen": "Used again or after expiration of the duration.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Star Beam (Replica) is priced at 1000 XP due to its unique design, aesthetic appeal, and the prestige associated with Comet Observatory.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T18:42:56.082361+00:00",
    "aiReviewedAt": "2026-07-23T18:42:56.082361+00:00",
    "aiReviewVersion": 1
  },
  "star_rod": {
    "id": "star_rod",
    "name": "The Star Rod",
    "description": "The Star Rod, an ancient and celestial staff crafted from meteoric iron and encased in starlight, is said to have been stolen by Bowser from the heavens themselves. With a single stroke, it can reshape reality within a mile, bending time and space to grant wishes or protect its bearer from harm. Legends speak of seven star spirits that will hunt down any who wield this rod, making its possession both a blessing and a curse.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌟",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Wish at Will",
      "Reality Alteration"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Star Haven Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wish at Will",
        "rules": "The user may cast the 'Wish' spell at will. This ability is limited to once per day, and it can alter reality in almost any way, from healing injuries to reshaping the environment."
      },
      {
        "title": "Reality Alteration",
        "rules": "By using the Star Rod, the wielder can bend time and space within a 1-mile radius. This effect lasts for an hour, altering the immediate surroundings or creating illusions as desired."
      }
    ],
    "levelRequirementReason": "Even the simplest of heroes may find use for this powerful artifact in their quest to restore balance.",
    "vendorReason": "The Comet Observatory, a repository of celestial knowledge, has managed to acquire this rare and ancient relic through an exchange with Bowser himself.",
    "shippingDetail": "Due to the volatile nature of reality-altering properties, Star Haven Express advises customers to be ready for unpredictable delivery times and potential environmental changes during transit.",
    "usage": {
      "activation": "Standard action",
      "duration": "Instantaneous or as a concentration effect (1 hour)",
      "endsWhen": "The user ceases concentrating on the effect or upon the expiration of an hour",
      "charges": "Daily"
    },
    "priceReason": "This price reflects the Star Rod's powerful abilities, yet it is still accessible to lower-level heroes who might need its assistance.",
    "priceOriginal": 2000000,
    "priceReviewedAt": "2026-07-23T18:42:58.635618+00:00",
    "aiReviewedAt": "2026-07-23T18:42:58.635618+00:00",
    "aiReviewVersion": 1
  },
  "star_rod_fragment": {
    "id": "star_rod_fragment",
    "name": "Fragment of the Star Rod",
    "description": "This fragment of the Star Rod glows with a soft, celestial light that dances in patterns only understood by those aligned with the cosmos. Crafted from the very essence of the stars themselves, it hums with infinite potential and can alter reality itself when wielded by one who knows its true magic. Legend has it that collecting twenty such fragments will restore the Star Rod to its full glory, capable of granting wishes on a scale that could change the fate of an entire world.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌟",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Wish Granting",
      "Cosmic Alignment"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Cosmic Event",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Wish Granting",
        "rules": "When activated as an action, this fragment can grant a wish. The wish must be stated in full before the activation. The DM has final say over the feasibility of the wish and any resulting effects. This effect can only be used once per day."
      },
      {
        "title": "Cosmic Alignment",
        "rules": "For 1 hour after activation, the wielder gains advantage on all saving throws against spells or effects that deal damage from celestial beings or deities. This effect ends when the time expires or if the fragment is destroyed."
      }
    ],
    "levelRequirementReason": "The magic within this fragment is too powerful for those below fifth level, requiring a measure of cosmic awareness and discipline.",
    "vendorReason": "As custodians of ancient knowledge and celestial phenomena, the Comet Observatory would naturally have access to fragments of such legendary artifacts.",
    "shippingDetail": "The fragment is delivered via a direct celestial courier, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (Wish Granting) or 1 hour (Cosmic Alignment)",
      "endsWhen": "The time expires or the fragment is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "This item, while powerful, is not considered godly rarity; its price reflects its unique utility and cosmic significance rather than unparalleled power.",
    "priceOriginal": 850000,
    "priceReviewedAt": "2026-07-23T18:43:05.942621+00:00",
    "aiReviewedAt": "2026-07-23T18:43:05.942621+00:00",
    "aiReviewVersion": 1
  },
  "starlight_festival_glitter_gown": {
    "id": "starlight_festival_glitter_gown",
    "name": "Starlight Festival Glitter Gown",
    "description": "The Starlight Festival Glitter Gown is a shimmering gown that captures the essence of the celestial night. Its fabric glows faintly, casting a soft, iridescent light within a five-foot radius. The gown is adorned with glittering stars and silver threads that sparkle under the moonlight, making the wearer appear as if they are walking through a starry sky. This gown was crafted by Festival Designers for the most elegant of night celebrations, ensuring each wearer feels like an immortal among mortals.",
    "price": 1000,
    "icon": "👗",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Moonlit Glow",
      "Star-Adorned Grace"
    ],
    "vendor": "starlight_festival",
    "shippedBy": "Sparkle Skirt Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Moonlit Glow",
        "rules": "While wearing this gown, you have advantage on Performance checks when performing under the stars. Additionally, the gown glows faintly, emitting a soft light within a five-foot radius for as long as you wear it."
      },
      {
        "title": "Star-Adorned Grace",
        "rules": "The glitter on this gown adheres to everything touched by its wearer, leaving behind shimmering trails of starlight that persist until washed off. This effect can occur once per short or long rest."
      }
    ],
    "levelRequirementReason": "This gown is designed for any eager participant in the festival, requiring no specific level to wear it.",
    "vendorReason": "The Starlight Festival Designers are renowned for their creations and this gown is a centerpiece of their offerings.",
    "shippingDetail": "Ships within the night, arriving at your doorstep with a twinkling light show.",
    "usage": {
      "activation": "Automatic upon putting on the gown; no activation required.",
      "duration": "Until removed or until the wearer completes a short or long rest.",
      "endsWhen": "The glitter effect ends when the wearer washes it off, and the glow fades with removal or end of duration.",
      "charges": "Unlimited, but recharges after a short or long rest."
    },
    "priceReason": "This gown is crafted with high-quality materials and intricate detailing, making it moderately priced for its elegance.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-23T18:43:14.888834+00:00",
    "aiReviewedAt": "2026-07-23T18:43:14.888834+00:00",
    "aiReviewVersion": 1
  },
  "starlight_festival_star_cutter": {
    "id": "starlight_festival_star_cutter",
    "name": "Starlight Festival Star Cutter",
    "description": "The Starlight Festival Star Cutter is a gleaming silver tool forged from starlight and moonbeams, perfect for slicing star-shaped salad fruits that shimmer under the night sky. Its blade glows softly when exposed to moonlight or starlight, enhancing the festival-goer's charisma by +1 during performances at the evening feast. However, in daylight, it dulls and becomes merely a mundane kitchen tool, its magic only active under celestial illumination.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥗",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Celestial Glow",
      "Charisma Boost"
    ],
    "vendor": "starlight_festival",
    "shippedBy": "Starry Slice Set",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Celestial Glow",
        "rules": "The Star Cutter glows softly when exposed to moonlight or starlight. It provides a +1 bonus to Charisma (Performance) checks made during performances at the evening feast."
      },
      {
        "title": "Charisma Boost",
        "rules": "While under celestial illumination, the user gains a +1 bonus to Charisma checks and saving throws for performances. This effect lasts until the end of your next turn after ceasing exposure to moonlight or starlight."
      }
    ],
    "levelRequirementReason": "The Star Cutter's magic is subtle and requires no great skill, making it accessible to all participants in the festival.",
    "vendorReason": "As a tool designed specifically for the Starlight Festival, the Star Cutter is naturally supplied by the organizers of this grand event.",
    "shippingDetail": "The Star Cutter is delivered in a set that includes a decorative star-shaped cutting board and a pair of matching star cutters, enhancing its value as a gift or keepsake.",
    "usage": {
      "activation": "Passive effect active when exposed to moonlight or starlight; ends immediately after exposure ceases",
      "duration": "Instantaneous",
      "endsWhen": "Exposure to moonlight or starlight ceases",
      "charges": "Unlimited"
    },
    "priceReason": "The Star Cutter's value is balanced by its limited effect and the material it is made from, which is not rare but special to the festival.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T18:43:37.811117+00:00",
    "aiReviewedAt": "2026-07-23T18:43:37.811117+00:00",
    "aiReviewVersion": 1
  },
  "starlight_festival_star_fruit_salad_recipe": {
    "id": "starlight_festival_star_fruit_salad_recipe",
    "name": "Recipe: Starlight Festival Star Fruit Salad",
    "description": "This recipe, passed down from the Festival Chefs during Starlight Festivals, yields a shimmering salad of star-shaped fruits that align perfectly under the night sky's twinkling stars. Each slice reveals a fragment of celestial magic, and when consumed, it grants you inspiration for a wish-related roll, bolstering your Charisma by +1 until the end of your next short or long rest. The salad is a symbol of hope and dreams, made from fruits harvested at midnight under the perfect alignment of stars.",
    "price": 1000,
    "icon": "🥗",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Inspiration for Wish Rolls",
      "Boosts Charisma"
    ],
    "vendor": "starlight_festival",
    "shippedBy": "Starry Salad Sheet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wish Roll Inspiration",
        "rules": "Eating this salad grants you inspiration for one wish-related roll. It provides a +1 bonus to your Charisma (Performance) or Charisma (Persuasion) check, which ends when the effect of the wish is resolved."
      },
      {
        "title": "Charisma Boost",
        "rules": "You gain a +1 bonus to your Charisma score until the end of your next short or long rest. This effect does not stack with other sources of Charisma bonuses."
      }
    ],
    "levelRequirementReason": "This recipe is accessible to players who are just starting their journey, allowing them to enhance their performance and persuasive abilities early in the game.",
    "vendorReason": "The Festival Chefs have perfected this recipe over countless Starlight Festivals, ensuring its availability for eager participants.",
    "shippingDetail": "Delivered by a fleet of star-shaped balloons, the salad arrives fresh and vibrant, symbolizing the festival's magic.",
    "usage": {
      "activation": "Eating one slice of the salad during a Starlight Festival",
      "duration": "Until the end of your next short or long rest",
      "endsWhen": "The effect ends when you complete either a short or long rest",
      "charges": "Unlimited, as each slice is self-contained"
    },
    "priceReason": "This recipe's value lies in its rarity and the unique experience it brings to players, making it moderately priced but still within reach of beginning adventurers.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T18:43:40.220002+00:00",
    "aiReviewedAt": "2026-07-23T18:43:40.220002+00:00",
    "aiReviewVersion": 1
  },
  "starlight_fey_lantern": {
    "id": "starlight_fey_lantern",
    "name": "Starlight Fey Lantern",
    "description": "The Starlight Fey Lantern, crafted from the luminescent bark of the ancient Sylvan tree, casts a soft glow that reveals hidden fey creatures within its 30-foot radius. Its light is not merely illumination but also a spell of subtle magic that can cause mischievous pixies to dart around it, occasionally attempting to claim the lantern as their own. This lantern's ethereal light has been known to frighten sensitive fey, compelling them to make a Wisdom saving throw or be temporarily driven away in fear.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏮",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Reveals invisible fey and pranks",
      "Frightens nearby mischievous fey"
    ],
    "vendor": "starlight_outpost",
    "shippedBy": "Feywing Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Invisible Fey",
        "rules": "The lantern illuminates a 30-foot radius, revealing all invisible fey creatures within the area. This effect is instantaneous and does not require an action to activate."
      },
      {
        "title": "Frighten Mischievous Fey",
        "rules": "All mischievous fey within 30 feet of the lantern must succeed on a Wisdom saving throw with a DC of 14 or be frightened for 1 minute. The effect ends if the fey leaves the area."
      }
    ],
    "levelRequirementReason": "This lantern is designed to be accessible, providing adventurers with an entry-level tool for dealing with fey creatures.",
    "vendorReason": "The Starlight Garrison has a long-standing relationship with the Lantern's creators and stocks it as part of their ongoing support for explorers venturing into fae territory.",
    "shippingDetail": "Delivered by winged messengers, ensuring swift arrival even in the most remote areas.",
    "usage": {
      "activation": "Instantaneous activation; no action required.",
      "duration": "Until the fey are frightened or leave the area.",
      "endsWhen": "The fey creatures are no longer within range or if the lantern is destroyed.",
      "charges": "Unlimited uses, recharged by daylight."
    },
    "priceReason": "Balanced to ensure that adventurers can afford this utility without feeling overpowered in dealing with fey encounters.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-23T18:43:35.393113+00:00",
    "aiReviewedAt": "2026-07-23T18:43:35.393113+00:00",
    "aiReviewVersion": 1
  },
  "starlight_glitter_bomb_service": {
    "id": "starlight_glitter_bomb_service",
    "name": "Starlight Glitter Bomb Service",
    "description": "The Starlight Glitter Bomb Service is a dazzling display of shimmering stardust that erupts into a flurry of celestial light. When deployed, it blinds all creatures within its path with a cascade of glittering stars for one round (DC 14 CON save). The second effect, 'Cleanup Nightmare,' ensures the area remains sparkling clean and free from messes for days to come. Crafted by Starlight Party Planners, this service is perfect for any event needing a magical distraction.",
    "price": 1000,
    "icon": "✨",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Dazzling Display",
      "Cleanup Nightmare"
    ],
    "vendor": "starlight_festival",
    "shippedBy": "Sparkly Bag Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dazzling Display",
        "rules": "When activated as a bonus action, the Starlight Glitter Bomb Service blinds all creatures within 10 feet for one round. The save DC is 14 (Constitution saving throw). This effect cannot be used more than once per long rest."
      },
      {
        "title": "Cleanup Nightmare",
        "rules": "This effect ensures that the area remains clean and free of messes for up to a week, making it ideal for after-party cleanup. It has no save or action requirement and is active as long as the service is not used again within a week."
      }
    ],
    "levelRequirementReason": "This item is suitable for low-level characters who need a magical but non-combat tool to enhance social situations.",
    "vendorReason": "Starlight Party Planners are renowned for their innovative and whimsical party services, making the Starlight Glitter Bomb Service a natural addition to their offerings.",
    "shippingDetail": "Ships overnight with Sparkly Bag Express, ensuring it arrives in pristine condition for your next event.",
    "usage": {
      "activation": "Bonus action",
      "duration": "One round (instantaneous effect)",
      "endsWhen": "Ends when the save is successful or after one round",
      "charges": "Unlimited"
    },
    "priceReason": "This service offers a unique and magical experience at an uncommon price, making it a cost-effective choice for players seeking to enhance their events.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T18:43:28.765350+00:00",
    "aiReviewedAt": "2026-07-23T18:43:28.765350+00:00",
    "aiReviewVersion": 1
  },
  "starlight_observatory_chart": {
    "id": "starlight_observatory_chart",
    "name": "Starlight Observatory Chart",
    "description": "The Starlight Observatory Chart, a celestial parchment adorned with constellations and arcane symbols, reveals the fleeting presence of either a 'Starfall' — a meteor shower rich in rare metals that burns for just one night — or a 'Whispering Nebula,' which grants an ethereal vision to those who consult it. It is said that these cosmic events are drawn by the parchment's ancient enchantments, but once consulted, the chart disintegrates into a twinkling cloud of stardust.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⭐",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reveals a Celestial Event",
      "Consumes Upon Use"
    ],
    "vendor": "Starlight",
    "shippedBy": "Astronomer",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal a Starfall or Whispering Nebula",
        "rules": "This chart, when consulted by an individual of at least 1st level, reveals the location and timing of either a 'Starfall' (a meteor shower rich in rare metals) or a 'Whispering Nebula' (which grants a vision of celestial phenomena). The event lasts for exactly 24 hours after the chart is consulted. Using the chart consumes it."
      },
      {
        "title": "Consumes Upon Use",
        "rules": "The Starlight Observatory Chart disintegrates into stardust upon revealing its celestial secret, leaving no trace of its use."
      }
    ],
    "levelRequirementReason": "Revealing the location of a cosmic event requires at least basic astronomical knowledge and concentration.",
    "vendorReason": "Starlight is renowned for their expertise in celestial phenomena, making them the trusted purveyors of such ancient charts.",
    "shippingDetail": "Shipped by a dedicated astronomer via swift celestial courier, ensuring prompt delivery to those who seek the stars.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The event ends when its duration expires or is disrupted.",
      "charges": "One-time use"
    },
    "priceReason": "Balanced against other rare curiosities, this chart's price reflects the rarity of its contents and the cost of its ancient enchantment.",
    "priceOriginal": 40000,
    "priceReviewedAt": "2026-07-23T18:43:58.898843+00:00",
    "aiReviewedAt": "2026-07-23T18:43:58.898843+00:00",
    "aiReviewVersion": 1
  },
  "starlight_sparkle_enhancement": {
    "id": "starlight_sparkle_enhancement",
    "name": "Starlight Sparkle Enhancement",
    "description": "The Starlight Sparkle Enhancement is a subtle yet dazzling enhancement that turns you into a walking beacon of twinkling magic. It infuses your presence with an ethereal glow, enhancing your charisma in dim light and leaving a trail of glittering stardust behind. This charm is particularly effective against vampires, who are unnerved by the sparkle, and those who revel in chaos—those 'edgelords'—who instantly become hostile upon seeing you.",
    "category": "services",
    "price": 1000,
    "icon": "✨",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Twinkling Presence",
      "Sparkle Against Edgelords"
    ],
    "vendor": "starlight",
    "shippedBy": "Glitter Bomb Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Twinkling Presence",
        "rules": "While this enhancement is active, you gain a +1 bonus to Charisma checks and saving throws. In dim light, your presence becomes more noticeable, causing others to have disadvantage on Stealth checks within 30 feet of you."
      },
      {
        "title": "Sparkle Against Edgelords",
        "rules": "Vampires are automatically hostile towards you, and any 'edgelord' within 60 feet has disadvantage on interactions with you. This effect is particularly effective in dimly lit areas where your sparkles are most vibrant."
      }
    ],
    "levelRequirementReason": "This enhancement is designed for those who wish to make a statement without needing extensive experience.",
    "vendorReason": "Starlight Sparkle Techs specialize in creating items that enhance one's presence, making them the perfect vendor for this sparkle-imbued charm.",
    "shippingDetail": "Delivered by Glitter Bomb Express, known for their swift and reliable delivery of magical enhancements.",
    "usage": {
      "activation": "Active as a bonus action that can be used once per short or long rest.",
      "duration": "Concentration up to one hour, or until dispelled.",
      "endsWhen": "Lost concentration, or upon being dispelled by magic.",
      "charges": "One use, recharges after a short or long rest."
    },
    "priceReason": "The balanced price reflects the enhancement's utility and limited duration, ensuring it remains a desirable but not overpowered option for adventurers.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-23T18:43:51.233238+00:00",
    "aiReviewedAt": "2026-07-23T18:43:51.233238+00:00",
    "aiReviewVersion": 1
  },
  "starman_shard": {
    "id": "starman_shard",
    "name": "Starman Shard",
    "description": "A glowing fragment of a Super Star. Grants bursts of invincibility, but it's addictive.",
    "category": "consumables",
    "price": 10000,
    "icon": "⭐",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Single Use: Invulnerable for 10 seconds",
      "Double speed and damage during effect",
      "After use, -1 to all rolls for 1 hour (withdrawal)",
      "Collect 5 shards for a full Starman?"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Padded Box",
    "levelRequirement": 1
  },
  "statue_of_infinite_wishes": {
    "id": "statue_of_infinite_wishes",
    "name": "Statue of Infinite Wishes",
    "description": "A statue that grants infinite wishes with no drawbacks.",
    "category": "equipment",
    "price": 150000000,
    "icon": "🗿",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Touch statue: make any number of wishes with no limits or consequences",
      "Wishes happen instantly and cannot be undone",
      "Made by: The Genie Union"
    ],
    "vendor": "wish_granting",
    "shippedBy": "Instant Wish",
    "levelRequirement": 75
  },
  "stellar_explosion_bomb": {
    "id": "stellar_explosion_bomb",
    "name": "Stellar Explosion Bomb",
    "description": "A fragment of a dying star, encased in an ornate steel sphere. This weaponized relic releases a cataclysmic explosion that obliterates everything within its vast radius. The resulting firestorm leaves behind a smoking crater and decimates entire city blocks. Using the Stellar Explosion Bomb makes you a wanted criminal globally, with bounties from every nation. Its detonation requires 1 minute of precise setup, ensuring it's used only in desperate times.",
    "category": "forbidden",
    "price": 5000,
    "icon": "💥",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Cataclysmic Firestorm",
      "Global Notoriety"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Shielded Container",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Cataclysmic Firestorm",
        "rules": "When activated, the bomb detonates with a 40d6 fire damage explosion in a 300-foot radius. The explosion instantly decimates everything within its area of effect and leaves behind a smoking crater. A successful DC 25 Dexterity saving throw reduces the damage by half."
      },
      {
        "title": "Global Notoriety",
        "rules": "Using this item makes you a wanted criminal globally, with bounties from every nation. You must make a DC 18 Charisma (Deception) check to avoid drawing undue attention when in public places for at least one week."
      }
    ],
    "levelRequirementReason": "The bomb's destructive power and the risk involved necessitate a high-level character with significant combat experience.",
    "vendorReason": "The Onyx Hand, known for its extensive network of spies and connections, handles the distribution of this dangerous item to ensure it only reaches those who truly need it.",
    "shippingDetail": "Ships via a secure, heavily armored vehicle with special authorization from the authorities. Delivery can take up to one week due to stringent security checks.",
    "usage": {
      "activation": "Requires 1 minute of precise setup before activation.",
      "duration": "Instantaneous explosion upon activation.",
      "endsWhen": "Expended once used, leaving only a smoking crater behind.",
      "charges": "Unlimited charges per day"
    },
    "priceReason": "The bomb's balanced price reflects its powerful yet highly dangerous nature.",
    "priceOriginal": 550000,
    "priceReviewedAt": "2026-07-23T18:44:06.326110+00:00",
    "aiReviewedAt": "2026-07-23T18:44:06.326110+00:00",
    "aiReviewVersion": 1
  },
  "stellar_map_of_forgotten_worlds": {
    "id": "stellar_map_of_forgotten_worlds",
    "name": "Stellar Map of Forgotten Worlds (Navigation)",
    "description": "A holographic map revealing lost planets and ancient ruins.",
    "price": 460000,
    "icon": "🗺️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Locates 10 hidden worlds",
      "Updates with new discoveries",
      "Made by: Star Cartographers"
    ],
    "vendor": "cosmic_archive",
    "shippedBy": "Holo-Projector",
    "levelRequirement": 16
  }
};
