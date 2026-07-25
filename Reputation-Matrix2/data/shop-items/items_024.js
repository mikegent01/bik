// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_024 = {
  "isle_delfino_shine_spirit_bottle": {
    "id": "isle_delfino_shine_spirit_bottle",
    "name": "Shine Spirit Bottle",
    "description": "The Shine Spirit Bottle is a glass vial encrusted with iridescent seafoam and silver, filled to the brim with the pure essence of the Delfino Sea's legendary sprite. When uncorked, its contents sparkle with an ethereal glow that temporarily enhances your elemental attacks by 20%, granting you a 15% chance to summon a diminutive Shine Sprite ally alongside. This sprite offers assistance for exactly one minute, dancing in front of you and boosting your defense by 5%. After consumption, the bottle shimmers as if it were filled with starlight, leaving behind only an empty vial that glows faintly for a few moments.",
    "price": 1200,
    "icon": "🌈",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Elemental Damage Boost",
      "Chance to Summon Shine Sprite"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Elemental Damage Boost",
        "rules": "The user gains a +20 bonus to all elemental damage rolls for 1 minute. This effect is instantaneous upon consumption."
      },
      {
        "title": "Chance to Summon Shine Sprite",
        "rules": "There's a 15% chance that, after consuming the bottle, a small Shine Sprite appears and assists you in combat by boosting your defense by +50 for one minute. The sprite remains visible only during its duration."
      }
    ],
    "levelRequirementReason": "The elemental magic within the bottle is potent enough to require a few levels of experience before safely consuming it.",
    "vendorReason": "Isle Delfino, known for its magical and enchanted items, naturally stocks this rare elixir.",
    "shippingDetail": "Ships via Koopa Express; delivery is swift but requires a special request due to the fragile nature of the bottle's contents.",
    "usage": {
      "activation": "Consumed as an action.",
      "duration": "Instantaneous, with effects lasting for one minute each.",
      "endsWhen": "The effects end when they expire or the user dies.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP as it offers potent but not overpowered abilities.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T07:31:03.793182+00:00",
    "aiReviewedAt": "2026-07-22T07:31:03.793182+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_spirit_pearl": {
    "id": "isle_delfino_shine_spirit_pearl",
    "name": "Shine Spirit Pearl",
    "description": "The Shine Spirit Pearl, crafted from the essence of forgotten sea sprites and enchanted by Delfino's ancient mariners, is a shimmering gem that glows faintly under moonlight. When worn, it grants you temporary invincibility in battle, allowing you to shrug off harm for a fleeting moment. Its otherworldly glow also draws allies from the depths, summoning three ethereal sprites to assist you in combat. These sprites dance around you, enhancing your presence and drawing enemies closer.",
    "price": 5500,
    "icon": "🌈",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Blink of Invincibility",
      "Alluring Aura"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Blink of Invincibility",
        "rules": "Activating the Shine Spirit Pearl grants you a +4 bonus to AC and immunity to all damage for 5 seconds. This effect cannot be used more than once per long rest."
      },
      {
        "title": "Alluring Aura",
        "rules": "While wearing the Pearl, your presence is enhanced by an aura that attracts nearby allies within 30 feet. Any non-hostile creatures within this radius are drawn to you as if under a charm spell (DC 15). This effect lasts for 2 minutes and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The complex enchantment requires significant magical energy, suitable only for seasoned adventurers.",
    "vendorReason": "Isle Delfino specializes in rare and enchanted sea artifacts, making the Shine Spirit Pearl a perfect addition to their inventory.",
    "shippingDetail": "The gem is carefully packaged and delivered via magical courier, ensuring safe arrival within a single day.",
    "usage": {
      "activation": "A bonus action to activate, once per short rest for 'Blink of Invincibility', and once per long rest for 'Alluring Aura'.",
      "duration": "'Blink of Invincibility' lasts 5 seconds; 'Alluring Aura' lasts 2 minutes.",
      "endsWhen": "The effects end when the duration expires or when you remove the Pearl from your person.",
      "charges": "Unlimited, as it regenerates after each rest."
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare and powerful magical properties.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T07:31:06.088505+00:00",
    "aiReviewedAt": "2026-07-22T07:31:06.088505+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_spirit_rod": {
    "id": "isle_delfino_shine_spirit_rod",
    "name": "Shine Spirit Rod",
    "description": "The Shine Spirit Rod pulses with a soft, ethereal light that dances like starlight. Crafted from ancient, luminescent wood found in the depths of Delfino Isle's forgotten groves, this staff channels the pure essence of the elemental sprites. When activated, it summons a protective barrier that absorbs magical damage and grants temporary resistance to all elemental attacks, while also boosting elemental damage by 25% against foes with enchanted cores.",
    "category": "equipment",
    "price": 1200,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs 15% of incoming magical damage",
      "Boosts elemental damage by 25% vs. enemies with magical cores"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Sea Drift Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Barrier Absorption",
        "rules": "Activates as a bonus action, creating a 3-meter radius barrier that absorbs 15% of all incoming magical damage for 1 minute. Ends if the caster is no longer within range."
      },
      {
        "title": "Elemental Boost",
        "rules": "Grants +25% elemental damage against enemies with magical cores, lasts until expended or recharged. Requires a bonus action to activate and consumes one charge each use."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to help them better manage the challenges of early adventuring.",
    "vendorReason": "Isle Delfino, renowned for its connection with nature, sells items that harness and protect the elemental energies of their environment.",
    "shippingDetail": "Ships via Sea Drift Courier within one week; expedited options available for additional fees.",
    "usage": {
      "activation": "Bonus action to activate barrier, or bonus action to boost damage against magical core enemies.",
      "duration": "Barrier lasts 1 minute per activation. Damage boost is instantaneous and lasts until expended or recharged.",
      "endsWhen": "Barrier ends if caster moves out of range, or the item is destroyed. Boost effect expires after use.",
      "charges": "Has 3 charges that recharge on a short rest."
    },
    "priceReason": "The price reflects its rare material and the unique abilities it provides for beginners to navigate early challenges effectively.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:31:17.904030+00:00",
    "aiReviewedAt": "2026-07-22T07:31:17.904030+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_spirit_satchel": {
    "id": "isle_delfino_shine_spirit_satchel",
    "name": "Shine Spirit Satchel",
    "description": "The Shine Spirit Satchel is a glowing pouch crafted from enchanted leather and adorned with fragments of starlight. It holds the essence of fey creatures known as Shine Sprites, whose light can illuminate hidden paths within the Feywild or grant allies temporary boosts in combat. Activated at sunrise or sunset, it emits a radiant burst that not only reveals concealed routes but also enhances nearby allies with a surge of protective energy.",
    "category": "equipment",
    "price": 1200,
    "icon": "💫",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+10% chance to reveal hidden paths",
      "Buff allies with +5 damage and +10 attack speed"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Paths",
        "rules": "Activates passively at sunrise or sunset, increasing the chance of discovering secret routes by +10% within the Feywild. This effect lasts until dusk or dawn."
      },
      {
        "title": "Buff Allies",
        "rules": "When activated during sunrise or sunset, this satchel buffs all allies within 30 feet, granting them a +5 bonus to damage rolls and a +10% increase in attack speed for 10 minutes. The effect ends if the user is incapacitated."
      }
    ],
    "levelRequirementReason": "Beginners can utilize this satchel early on, making it accessible as soon as players venture into the Feywild.",
    "vendorReason": "Isle Delfino specializes in enchanted goods and has a long-standing relationship with fey creatures, ensuring the quality of such magical items.",
    "shippingDetail": "The satchel is delivered through Shy Guy Smugglers' network, known for their reliable and swift service across the Feywild.",
    "usage": {
      "activation": "Passive at sunrise or sunset",
      "duration": "10 minutes until dusk or dawn",
      "endsWhen": "User becomes incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the item's utility in both exploration and combat, making it a valuable addition to any adventurer's gear.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:30:51.454297+00:00",
    "aiReviewedAt": "2026-07-22T07:30:51.454297+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_spirit_torch": {
    "id": "isle_delfino_shine_spirit_torch",
    "name": "Shine Sprite Torch of Radiance",
    "description": "The Shine Sprite Torch of Radiance hums with the ethereal energy of its sprite creators, casting a warm golden glow that illuminates even the darkest caverns. Crafted by the Pond Patrol in Delfino Isle, this torch not only brightens your path but also strengthens morale, making every step forward feel lighter and more hopeful. In sunny weather, it glows brighter, amplifying its light output and boosting the spirits of those around you.",
    "category": "equipment",
    "price": 1200,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Luminous Pathlight",
      "Morale Boost"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Luminous Pathlight",
        "rules": "When activated, the torch illuminates a 30-foot radius area for 1 minute. It provides bright light in this area and dim light beyond it. The light is magical and grants advantage on saving throws made to resist being frightened within the area."
      },
      {
        "title": "Morale Boost",
        "rules": "Once per short or long rest, the torch can be used as an action to boost morale. For 1 hour, all allies within 30 feet gain a +5 bonus to attack rolls and saving throws. This effect ends when it is recharged."
      }
    ],
    "levelRequirementReason": "Beginners find the Shine Sprite Torch useful for navigating their early adventures in Delfino Isle.",
    "vendorReason": "The Pond Patrol ensures that adventurers have the tools they need to thrive, especially when exploring the island's many hidden paths.",
    "shippingDetail": "Ships within Delfino Isle in one business day. Outside of Delfino Isle, delivery may take up to a week depending on postal routes.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "1 minute (Luminous Pathlight) / 1 hour (Morale Boost)",
      "endsWhen": "Recharged or destroyed after 3 uses",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "The Shine Sprite Torch offers significant utility and morale boosts, making it a valuable asset for any adventurer.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:31:19.752469+00:00",
    "aiReviewedAt": "2026-07-22T07:31:19.752469+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_spray_gel": {
    "id": "isle_delfino_shine_spray_gel",
    "name": "Shine Spray Gel",
    "description": "The Shine Spray Gel exudes a shimmering iridescence when applied, casting an ethereal glow that dances like starlight on the skin. This gel not only dazzles enemies under moonlit nights but also has the unique ability to reflect light attacks back at the attacker, creating a dazzling storm of reflected beams. A rare find from Isle Delfino, this gel amplifies your presence in any shadowed encounter, turning simple fights into spectacular displays of radiant energy.",
    "price": 1200,
    "icon": "💫",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reflects Light Attacks",
      "Moonlit Aura"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Reflects Light Attacks",
        "rules": "When an attacker uses a light-based attack against the user, the Shine Spray Gel reflects this attack back at the attacker for 3 seconds. This effect has no save DC and can occur once per combat."
      },
      {
        "title": "Moonlit Aura",
        "rules": "While under moonlight, the Shine Spray Gel grants a +2 bonus to all damage rolls made by the user against enemies. The bonus lasts until the end of your next turn if you are exposed to moonlight for at least 1 minute."
      }
    ],
    "levelRequirementReason": "To harness the full power and radiant effects of Shine Spray Gel, a character must be of at least level 6.",
    "vendorReason": "Isle Delfino is renowned for its magical creations, and Shine Spray Gel is one such item that enhances one's presence in any shadowy encounter with a touch of starlight.",
    "shippingDetail": "The Koopa Postal service ensures the gel remains intact by using special moonlit wax paper to cushion it during transit.",
    "usage": {
      "activation": "Instantaneous application; no activation required for effects.",
      "duration": "Reflects light attacks only when attacked, lasts until end of next turn. Moonlit Aura effect lasts until the end of your next turn while exposed to moonlight.",
      "endsWhen": "Effect ends when the combat ends or you leave a moonlit area in the case of the aura.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Shine Spray Gel is priced at 1000 XP, reflecting its rarity and the unique magical properties that enhance combat and social interactions.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T19:48:29.122468+00:00",
    "aiReviewedAt": "2026-07-22T19:48:29.122468+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_springs_amber": {
    "id": "isle_delfino_shine_springs_amber",
    "name": "Shine Springs Amber",
    "description": "Shine Springs Amber radiates a warm, golden glow that seems to pulse with the heartbeat of Delfino Isle. Crafted from ancient coral and enchanted by the sprite guardians of the island, this glowing gemstone emits a dazzling aura that repels shadows and enhances the wielder's combat prowess. When activated, it not only illuminates the darkness but also grants an unexpected burst of speed and a chance to stun foes with its radiant light.",
    "price": 1200,
    "icon": "💫",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Radiant Aura",
      "Stunning Light"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Radiant Aura",
        "rules": "Activating the Shine Springs Amber creates a dazzling aura that repels shadows within a 10-foot radius. This effect lasts for 30 seconds and offers advantage on saving throws against being frightened by creatures within this area."
      },
      {
        "title": "Stunning Light",
        "rules": "Each time you hit an enemy with a melee attack while holding the Shine Springs Amber, there is a 25% chance to stun them for 1 round. This effect has no cooldown and can be used as a bonus action."
      }
    ],
    "levelRequirementReason": "The gem's intricate enchantments require a proficient adventurer of at least level 3 to wield it effectively.",
    "vendorReason": "Isle Delfino is renowned for its connection with the sprite guardians, who imbue this item with their magic.",
    "shippingDetail": "The gemstone arrives wrapped in protective layers of shimmering mist to ensure it reaches its destination unharmed and fully charged.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "30 seconds, until dismissed or interrupted by an attack",
      "endsWhen": "The activation ends when the user dismisses it or is attacked while active",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from ancient coral and enchanted with sprite magic, this item offers a unique combination of defensive and offensive benefits at a balanced price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:31:55.798854+00:00",
    "aiReviewedAt": "2026-07-22T07:31:55.798854+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_springs_amulet": {
    "id": "isle_delfino_shine_springs_amulet",
    "name": "Shine Springs Amulet",
    "description": "The Shine Springs Amulet glows softly in twilight but erupts into a dazzling radiance under the sun's gaze, casting light-based attacks that dazzle and blind foes. Crafted from the essence of Delfino Island’s radiant sprites, this amulet amplifies your light-based abilities, making you shine like an afternoon star. Its core pulses with energy only in full sunlight, granting temporary invisibility when its brilliance is at its peak.",
    "category": "equipment",
    "price": 1200,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Radiant Burst",
      "Sunlight Invisibility"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Radiant Burst",
        "rules": "As a bonus action, you can activate the amulet to unleash a burst of light-based damage. This attack has a range of 30 feet and deals an additional +1d6 radiant damage per level (to a maximum of +5d6 at 5th level) on a successful hit. The target must make a DC 14 Dexterity saving throw or become blinded for 1 minute."
      },
      {
        "title": "Sunlight Invisibility",
        "rules": "When in full sunlight, the amulet grants you and any allies within 30 feet temporary invisibility for up to 1 hour. This effect requires no action to activate but ends if you leave an area of bright light or take any hostile actions."
      }
    ],
    "levelRequirementReason": "The amulet’s power demands a certain level of proficiency with light-based magic and combat, making it suitable for adventurers who have proven their mettle in the sunlit realms.",
    "vendorReason": "Isle Delfino is renowned for its connection to the radiant sprites, making it the perfect vendor for an amulet imbued with similar magic.",
    "shippingDetail": "The amulet is carefully packed and shipped via Pipe Express, known for its reliable delivery even in the most remote parts of the archipelago.",
    "usage": {
      "activation": "Bonus action (Radiant Burst), Passive (Sunlight Invisibility)",
      "duration": "Instantaneous (Radiant Burst), 1 hour (Sunlight Invisibility)",
      "endsWhen": "Target leaves bright light or takes hostile actions (Sunlight Invisibility), On use (Radiant Burst)",
      "charges": "Unlimited"
    },
    "priceReason": "The amulet’s rarity and unique, yet balanced, abilities justify its price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:32:00.603208+00:00",
    "aiReviewedAt": "2026-07-22T07:32:00.603208+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_sprite_amber": {
    "id": "isle_delfino_shine_sprite_amber",
    "name": "Shine Sprite Amber",
    "description": "The Shine Sprite Amber gleams like a tropical dawn, its crystalline shell iridescent and vibrant. This captured fragment of pure radiance grants a dazzling aura that reveals hidden paths and secret spots with uncanny precision. Wielders experience a heightened sense of discovery, increasing their chance to find rare items by 15%. The amber's light is so bright that it reduces enemy damage dealt to you by 20%, making your foes' strikes less effective in combat.",
    "category": "equipment",
    "price": 1200,
    "icon": "🌞",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reveals hidden paths and secret spots",
      "Increases chance to find rare loot"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Hidden Path Revelation",
        "rules": "Activates as a bonus action. The wearer's surroundings become temporarily illuminated, revealing hidden paths and secret spots within a 10-foot radius for 1 minute. This effect has no save DC but is limited to once per short or long rest."
      },
      {
        "title": "Rare Loot Discovery Boost",
        "rules": "Passive effect that increases the wearer's chance of finding rare items by 15%. This effect remains active as long as the item is worn, with no need for activation. No save DC required; simply a constant boost to luck and fortune."
      }
    ],
    "levelRequirementReason": "This item requires at least level 3 to wield effectively, providing its benefits without overwhelming lower-level adventurers.",
    "vendorReason": "The vibrant and magical essence of the Shine Sprite Amber aligns perfectly with Isle Delfino's reputation for exotic and enchanted goods.",
    "shippingDetail": "Delivered swiftly by the Koopa Postal service, ensuring that your order arrives at your doorstep without delay.",
    "usage": {
      "activation": "Bonus action to activate Hidden Path Revelation effect.",
      "duration": "1 minute per activation; limited once per short or long rest.",
      "endsWhen": "Effect ends when the item is removed from the wearer's body or when a new activation occurs.",
      "charges": "Unlimited uses, but only one effect can be active at any given time."
    },
    "priceReason": "The balanced price reflects the item's rarity and utility without being overpowered, offering value to mid-level adventurers.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:31:44.787619+00:00",
    "aiReviewedAt": "2026-07-22T07:31:44.787619+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_sprite_flask": {
    "id": "isle_delfino_shine_sprite_flask",
    "name": "Shine Sprite Flask",
    "description": "The Shine Sprite Flask holds within it the very essence of a mythical creature, its glass vial shimmering with an ethereal light. When consumed in battle, this flask grants you a surge of vitality and resilience, bolstering your elemental resistance by 30% and restoring 1d6 + 2 hit points per second for 5 seconds. The Sprite's magic is fleeting but potent, leaving you refreshed yet wary of the next clash.",
    "price": 1200,
    "icon": "🍸",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+30% Elemental Resistance",
      "+1d6 + 2 HP/second"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Elemental Boost",
        "rules": "Upon consuming the flask in combat, you gain a +30% bonus to all elemental damage resistances for 5 seconds. This effect has a 5-second cooldown."
      },
      {
        "title": "Vitality Surge",
        "rules": "For 5 seconds after consumption, you regenerate 1d6 + 2 hit points per second. You regain no more than your maximum hit points during this time and cannot benefit from this effect again until the duration ends or you take damage."
      }
    ],
    "levelRequirementReason": "The flask's magic is potent, requiring a minimum level of 3 to harness its full potential.",
    "vendorReason": "Isle Delfino, with its rich history of trade and magical artifacts, has the means to source such rare items from distant shores.",
    "shippingDetail": "The flask is shipped via Boo Spectral Mail, ensuring safe delivery through enchanted means but requiring a week for arrival.",
    "usage": {
      "activation": "Eating the flask during combat.",
      "duration": "5 seconds; ends when the duration expires or you take damage.",
      "endsWhen": "The effect concludes after its 5-second duration or upon taking damage in battle.",
      "charges": "Unlimited, but has a 5-second cooldown."
    },
    "priceReason": "Balanced at 1000 XP, the flask's effects are potent and rare enough to justify this price point.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T07:32:25.970471+00:00",
    "aiReviewedAt": "2026-07-22T07:32:25.970471+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_sprite_glove": {
    "id": "isle_delfino_shine_sprite_glove",
    "name": "Shine Sprite Glove",
    "description": "The Shine Sprite Glove is crafted from ethereal linen and enchanted with the essence of radiant sprites, bestowing the wearer with the ability to glide through the air like a sprite in flight. Its woven threads emit a soft, shimmering light that can dazzle foes or guide allies. With these gloves, you are no longer bound by gravity, but instead, you dance among the stars, leaving trails of light behind as you soar.",
    "category": "equipment",
    "price": 5500,
    "icon": "🔮",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Radiant Flight",
      "Dazzling Light Aura"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Radiant Flight",
        "rules": "Activating this ability requires a bonus action. The wearer can fly for up to 10 seconds after landing successfully on the ground with three consecutive melee hits. This flight provides a +20 AC bonus against ranged attacks, but it ends if you are hit by an attack or fall from the sky."
      },
      {
        "title": "Dazzling Light Aura",
        "rules": "The wearer emits a 15-foot radius of dazzling light for 1 minute. Any creature within this area must make a DC 16 Dexterity saving throw, taking 2d8 radiant damage on a failed save and being blinded until the start of their next turn on a successful one."
      }
    ],
    "levelRequirementReason": "The complex enchantments require a high degree of magical proficiency.",
    "vendorReason": "Isle Delfino specializes in enchanted items that enhance the wearer's natural abilities and performance.",
    "shippingDetail": "Delivered swiftly by Lakitu, these gloves are packaged with protective enchantments to ensure their delicate nature is not compromised during transit.",
    "usage": {
      "activation": "Bonus action for flight; no activation required for light aura.",
      "duration": "10 seconds of flight per use; light aura lasts 1 minute.",
      "endsWhen": "Flight ends on hit or fall; light aura ends when its duration expires or if the wearer is incapacitated.",
      "charges": "Unlimited, but requires a short rest to regain the ability after using it."
    },
    "priceReason": "Balanced as an epic rarity, this item combines unique flight and light effects with a challenging level requirement.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-22T07:32:42.089520+00:00",
    "aiReviewedAt": "2026-07-22T07:32:42.089520+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_sprite_pearl": {
    "id": "isle_delfino_shine_sprite_pearl",
    "name": "Shine Sprite Pearl of Lumina",
    "description": "The Shine Sprite Pearl of Lumina is a radiant, luminescent orb that glows with an ethereal light. When activated, it casts a shimmering aura around its bearer, compelling nearby allies to gravitate toward them while repelling dark entities that dare approach too close. This glowing essence not only heals all nearby comrades by 15 HP but also enhances the user's reflexes, offering a 10% chance of dodging enemy attacks.",
    "category": "equipment",
    "price": 5900,
    "icon": "💫",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Heals Allies",
      "Dodges Attacks"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Healing Aura",
        "rules": "When activated, the Shine Sprite Pearl grants all allies within a 3-meter radius a healing effect of 15 HP. The aura lasts for 1 minute and can be used once per short or long rest."
      },
      {
        "title": "Dodge Chance",
        "rules": "The user gains a +2 bonus to Dexterity saving throws, offering a 10% chance of dodging any incoming attack. This effect is passive and can be used infinitely often."
      }
    ],
    "levelRequirementReason": "This rare artifact requires significant magical prowess to wield effectively.",
    "vendorReason": "Isle Delfino specializes in rare, enchanted items that empower adventurers and enhance their journeys.",
    "shippingDetail": "The Shine Sprite Pearl is carefully couriered by the Rakasha Spirit Walk, ensuring it arrives fresh from Lumina Island.",
    "usage": {
      "activation": "Uses an action to activate; once per short or long rest for healing effects.",
      "duration": "1 minute when used in combat; passive dodge chance always active.",
      "endsWhen": "Expires at the end of a short or long rest, or if destroyed.",
      "charges": "Unlimited uses until expended."
    },
    "priceReason": "The Shine Sprite Pearl's rare enchantment and powerful healing/defensive capabilities justify its high price in experience points.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T07:32:46.285884+00:00",
    "aiReviewedAt": "2026-07-22T07:32:46.285884+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_spritewisp_core": {
    "id": "isle_delfino_shine_spritewisp_core",
    "name": "Shine Sprite Wisp Core",
    "description": "The Shine Sprite Wisp Core pulses with a radiant golden light, its heart-shaped form pulsating in time with the rhythm of tropical breezes. Fused to any weapon, it channels sprite magic into dazzling strikes that ignite enemy armor, leaving trails of incandescent brilliance in their wake. This rare core is said to have been crafted from the essence of Delphini's own wisp companions, making it a prized upgrade for any warrior seeking to dazzle and devastate with each blow.",
    "price": 5500,
    "icon": "📦",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Dazzling Strikes",
      "Armor Ignition"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Dazzling Strikes",
        "rules": "When you hit an enemy with a weapon attack, the Shine Sprite Wisp Core grants a +30% increase to your weapon damage. This effect lasts for 1 minute and can be reactivated once per long rest."
      },
      {
        "title": "Armor Ignition",
        "rules": "For every successful hit against an enemy wearing armor while this core is active, there's a 15% chance that the armor will catch fire. The target must make a DC 14 Dexterity saving throw or take an additional 2d6 fire damage at the start of their next turn."
      }
    ],
    "levelRequirementReason": "This core requires a level 6 character to harness its full magical potential.",
    "vendorReason": "Isle Delfino is renowned for its expertise in rare and powerful magical artifacts, making it the ideal vendor for the Shine Sprite Wisp Core.",
    "shippingDetail": "The core is shipped via Pipe Express with expedited delivery ensuring its timely arrival to eager adventurers.",
    "usage": {
      "activation": "Instantaneous activation upon fusion with a weapon.",
      "duration": "1 minute, recharges after a long rest.",
      "endsWhen": "At the start of your next turn or when you lose access to your weapon.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Shine Sprite Wisp Core's rarity and unique magical properties justify its price, offering significant combat advantages for those who can wield it.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T07:32:44.915018+00:00",
    "aiReviewedAt": "2026-07-22T07:32:44.915018+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_sprits_staff": {
    "id": "isle_delfino_shine_sprits_staff",
    "name": "Shine Sprits Staff",
    "description": "The Shine Sprits Staff radiates a soft, ethereal glow that dances like starlight on the wind. This ancient artifact is said to channel the essence of Delfino's luminescent waters, creating sparkling orbs of light that can be used for both distraction and support in battle. With each cast, the staff releases three orbs that emit a dazzling light, blinding foes within a 10-foot radius while granting temporary invisibility to allies nearby.",
    "category": "equipment",
    "price": 5700,
    "icon": "🌀",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Summons Sparkling Orbs",
      "Temporary Invisibility"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Summons Sparkling Orbs",
        "rules": "Activates as a bonus action, releasing three sparkling orbs that deal no damage but create a blinding light effect within a 10-foot radius for up to 1 minute. Creatures in the area must make a DC 14 Constitution saving throw or be blinded until the end of their next turn."
      },
      {
        "title": "Temporary Invisibility",
        "rules": "Provides temporary invisibility to allies within 30 feet, granting them advantage on Dexterity (Stealth) checks for up to 1 minute. This effect ends if an ally willingly moves more than 15 feet away from the staff or takes any action that requires sight."
      }
    ],
    "levelRequirementReason": "Requires at least 6th level to wield, ensuring it complements higher-level party strategies.",
    "vendorReason": "Islas Delfino is renowned for its mastery of light and water magic, making it a fitting vendor for this luminescent staff.",
    "shippingDetail": "Delivered by the Shy Guys, ensuring safe passage through treacherous waters to reach eager adventurers.",
    "usage": {
      "activation": "Bonus action to summon orbs and cast invisibility.",
      "duration": "Orbs last for up to 1 minute. Invisibility lasts until the end of an ally's next turn or they move more than 15 feet away from the staff.",
      "endsWhen": "Orbs dissipate after their duration ends, and invisibility ends when conditions are met.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Reflects its rare craftsmanship and unique utility in both combat and exploration.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T07:32:58.354486+00:00",
    "aiReviewedAt": "2026-07-22T07:32:58.354486+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_sprout": {
    "id": "isle_delfino_shine_sprout",
    "name": "Shine Sprout",
    "description": "The Shine Sprout is a luminescent leaf that pulses with the Sprite magic of Isle Delfino, its glow flickering in time with the tides. When equipped, it enhances the wearer's elemental affinity, allowing them to channel their inner power more effectively. This enchanted leaf also boosts attack speed, making every strike faster and more precise. Ideal for agile fighters and spellcasters, it is a testament to the island’s ancient magic.",
    "category": "equipment",
    "price": 1200,
    "icon": "🌿",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Elemental Boost",
      "Swift Strikes"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Elemental Boost",
        "rules": "Increases elemental damage by 15%. This effect lasts until the end of your next turn. You can activate this ability once per short or long rest."
      },
      {
        "title": "Swift Strikes",
        "rules": "Increases attack speed by 20%, allowing you to make an additional attack at the start of your next turn if you have any remaining attacks from a bonus action or reaction. This effect lasts until the end of your next turn and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The Shine Sprout requires a level 6 character to harness its full power, ensuring that only those with experience can wield such an ancient artifact.",
    "vendorReason": "Isle Delfino is renowned for its connection to the Sprite magic, making it the rightful keeper of such enchanted items.",
    "shippingDetail": "Ships within 3 days via Koopa Express, ensuring that your sprout arrives in perfect condition.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Until the end of your next turn",
      "endsWhen": "At the start of your next turn",
      "charges": "Once per short or long rest"
    },
    "priceReason": "The Shine Sprout is priced at 1000 XP, reflecting its rarity and the ancient magic imbued within it.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T07:33:14.400299+00:00",
    "aiReviewedAt": "2026-07-22T07:33:14.400299+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_sprout_seed": {
    "id": "isle_delfino_shine_sprout_seed",
    "name": "Shine Sprout Seed",
    "description": "The Isle Delfino Shine Sprout Seed is a luminous seed that, when planted in fertile soil, bursts into life with a radiant bloom. In mere moments, it transforms into a glowing guardian spirit that stands vigilant for 30 seconds, its light casting shadows on any foe within reach. This guardian offers +25% defense to the caster and can be summoned anywhere, making it ideal for quick defenses during perilous encounters.",
    "price": 280,
    "icon": "🌱",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Summons Radiant Guardian",
      "Boosts Defense"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Summons Radiant Guardian",
        "rules": "When the seed is planted and activated, a radiant guardian spirit appears to defend for 30 seconds. The guardian provides +25% defense to the caster during its duration."
      },
      {
        "title": "Boosts Defense",
        "rules": "The guardian increases the caster's defense by +25%. This boost ends when the guardian expires or if any damage is taken by the caster."
      }
    ],
    "levelRequirementReason": "This seed is accessible to low-level characters, providing a useful tool for early encounters.",
    "vendorReason": "Isle Delfino specializes in flora and natural remedies, making this seed a fitting addition to their inventory.",
    "shippingDetail": "Delivered by Pipe Express, ensuring the sprout remains viable upon arrival.",
    "usage": {
      "activation": "Immediate action",
      "duration": "30 seconds",
      "endsWhen": "The guardian expires or caster takes damage",
      "charges": "Unlimited"
    },
    "priceReason": "The seed's rarity and unique utility justify its moderate price in the market.",
    "priceOriginal": 1000,
    "priceReviewedAt": "2026-07-22T07:33:01.025359+00:00",
    "aiReviewedAt": "2026-07-22T07:33:01.025359+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_sprout_staff": {
    "id": "isle_delfino_shine_sprout_staff",
    "name": "Shine Sprout Staff",
    "description": "The Shine Sprout Staff is a wooden staff covered in bioluminescent sprouts that glow more intensely when near tropical hotspots. Crafted from driftwood found along the shores of Delfino Isle, this magical staff enhances light-based attacks and can heal an ally by 30% of their maximum hit points whenever it glows. The staff's glow also provides a minor speed boost during daylight hours, making explorers faster when navigating sunny terrains.",
    "category": "equipment",
    "price": 1200,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Light Boost",
      "Healing Glow"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Light Boost",
        "rules": "The user gains a +25% bonus to all light-based attack rolls. This effect is active as long as the staff glows. The glow is initiated by proximity to a tropical hotspot and lasts until the staff is put out of range or recharged."
      },
      {
        "title": "Healing Glow",
        "rules": "When the staff glows, an ally within 10 feet heals for 30% of their maximum hit points. This effect can be triggered by a tropical hotspot and has no cooldown period."
      }
    ],
    "levelRequirementReason": "The Shine Sprout Staff requires at least level 5 to wield due to its intricate magical properties.",
    "vendorReason": "Isle Delfino is renowned for crafting items that draw inspiration from the tropical hotspots, making it a perfect vendor for this staff.",
    "shippingDetail": "Ships via Boo Spectral Mail, ensuring safe and swift delivery to adventurers across the realm.",
    "usage": {
      "activation": "Passive effect activated by proximity to a tropical hotspot. Healing glow can be triggered manually as an action.",
      "duration": "Active while within range of a tropical hotspot; heals continuously until out of range or recharged.",
      "endsWhen": "Glow ends when the staff is put out of range of a tropical hotspot or recharged.",
      "charges": "Unlimited, but requires tropical hotspot proximity to be active."
    },
    "priceReason": "The balanced XP price reflects its rare craftsmanship and ongoing magical properties.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:33:04.736716+00:00",
    "aiReviewedAt": "2026-07-22T07:33:04.736716+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_sprout_sword": {
    "id": "isle_delfino_shine_sprout_sword",
    "name": "Shine Sprout Sword",
    "description": "The Shine Sprout Sword gleams with a vibrant, iridescent light that dances in the coral reefs. Its blade is forged from the essence of tropical flora and glows with the energy of the ocean's sprites. Each swing leaves behind a trail of luminescence, slicing through shadows like a beacon of hope for those lost in darkness. This weapon enhances critical hits by 20% and grants +10 damage against enemies weakened by status effects.",
    "category": "equipment",
    "price": 1200,
    "icon": "🌊",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Critical Hit Boost",
      "Enhanced Damage vs Weakened"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Critical Hit Boost",
        "rules": "When you score a critical hit with this weapon, the attack deals an additional +2d6 damage. This effect is limited to once per short or long rest."
      },
      {
        "title": "Enhanced Damage vs Weakened",
        "rules": "This sword inflicts 15 additional damage against targets suffering from a negative status effect. The target can make a Constitution saving throw (DC 14) to negate this bonus once per short or long rest."
      }
    ],
    "levelRequirementReason": "The weapon's enchanted core requires the wielder to be at least level 3 to harness its full power.",
    "vendorReason": "Isle Delfino specializes in crafting and selling weapons inspired by the ocean's folklore, making this sword a fitting addition to their inventory.",
    "shippingDetail": "The delivery is handled by Lakitu Drones, known for their swift and reliable service across the archipelago.",
    "usage": {
      "activation": "Melee Weapon Attack",
      "duration": "Instantaneous",
      "endsWhen": "The sword's enchantment expires at the end of a long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The sword's rare materials and enchantments make it a valuable find, justifying its moderate price in experience points.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T07:33:52.976058+00:00",
    "aiReviewedAt": "2026-07-22T07:33:52.976058+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_tide_ammunition": {
    "id": "isle_delfino_shine_tide_ammunition",
    "name": "Shine Tide Ammunition",
    "description": "Shine Tide Ammunition, forged from the essence of Delfino's marine sprites, is a series of enchanted bullets that pierce through illusions and leave behind trails of radiant light. When these projectiles strike an illusion, they unleash a burst of pure energy, stunning foes for several moments. The weapon also casts a fleeting aura around allies, restoring their vitality with each hit, ensuring those nearby are both protected and healed in the heat of battle.",
    "price": 1200,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Pierces through Illusions",
      "Heals Allies Nearby"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Illusion Piercing",
        "rules": "When this ammunition strikes an illusion, it deals 200% damage to it and triggers a radiant burst that stuns the target for up to 3 rounds. The stun ends if the target takes any damage or moves."
      },
      {
        "title": "Allied Healing Aura",
        "rules": "For each successful hit with this ammunition, an ally within 10 feet gains temporary hit points equal to half of the weapon's attack bonus (rounded down) for 5 minutes. This effect can occur once per turn."
      }
    ],
    "levelRequirementReason": "This ammunition is crafted to be accessible to all, enhancing combat effectiveness across various levels.",
    "vendorReason": "Isle Delfino's artisans are known for their mastery of magical weaponry, making Shine Tide Ammunition a natural addition to their inventory.",
    "shippingDetail": "Delivered swiftly by Lakitu Drones, ensuring the ammunition arrives in perfect condition and ready for immediate use.",
    "usage": {
      "activation": "On a successful hit with any ranged weapon",
      "duration": "Instantaneous effect; ends when expended or interrupted",
      "endsWhen": "Expended upon hitting an illusion or used to heal allies",
      "charges": "Unlimited, as long as ammunition remains in the weapon"
    },
    "priceReason": "The price reflects the rare material and magical essence required for its crafting.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T19:48:39.565916+00:00",
    "aiReviewedAt": "2026-07-22T19:48:39.565916+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_shine_wisp_staff": {
    "id": "isle_delfino_shine_wisp_staff",
    "name": "Shine Wisp Staff",
    "description": "The Shine Wisp Staff radiates an ethereal glow that dances and pulses with each successful strike, casting a shimmering shield around its wielder. Crafted from the enchanted wood of Delfino Isle's ancient trees, this staff channels the island’s natural magic to disrupt foes, causing them to stagger in their tracks. Its luminous core amplifies any melee attacks, making it a favorite among martial artists and fighters who seek both offense and defense on the battlefield.",
    "category": "equipment",
    "price": 1200,
    "icon": "📦",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Disrupts Enemies",
      "Enhances Melee Attacks"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Disrupting Stagger",
        "rules": "When a creature within reach is hit by an attack made with this staff, it must succeed on a DC 14 Strength saving throw or be knocked prone and stunned for 2 seconds. This effect has a range of 5 feet and can only occur once per target per long rest."
      },
      {
        "title": "Enhanced Melee Attacks",
        "rules": "While wielding this staff, all melee weapon attacks deal an additional +1d6 radiant damage. The enhancement lasts until the start of your next turn or until you use a bonus action to dismiss it. You can only enhance one melee weapon attack at a time."
      }
    ],
    "levelRequirementReason": "This staff requires a minimum character level of 3 due to its complex enchantments and the need for proficiency in martial weapons.",
    "vendorReason": "Isle Delfino is known for crafting items that blend local magic with practical combat utility, making this staff a natural fit for their inventory.",
    "shippingDetail": "The staff arrives fully charged and ready to use. Due to its delicate nature, it must be handled with care during transit by the Lakitu Drones.",
    "usage": {
      "activation": "As a bonus action or on hit (melee weapon attack)",
      "duration": "Instantaneous; ends when used again",
      "endsWhen": "Used in another melee attack or dismissed as an action",
      "charges": "Unlimited, recharges after a short rest"
    },
    "priceReason": "The staff’s enhanced combat utility and the enchantments that protect against magical disruption justify its moderate price.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T07:33:32.624532+00:00",
    "aiReviewedAt": "2026-07-22T07:33:32.624532+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sonic_dragon_tether": {
    "id": "isle_delfino_sonic_dragon_tether",
    "name": "Sonic Dragon Tether",
    "description": "The Sonic Dragon Tether, a pulsating device that hums with a low-frequency resonance, is a relic of ancient Regal Empire engineering designed to disrupt dragon sonic attacks. Crafted from enchanted metal and imbued with the essence of a slumbering dragon’s voice, it emits a disorienting pulse that can confuse even the most formidable dragons for several moments. Users must brace themselves; while the device counters dragon abilities, it also echoes their own thoughts in reverse, causing a brief moment where their own words seem to speak from another's mouth.",
    "category": "equipment",
    "price": 1200,
    "icon": "🎵",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Disrupts Dragon Sonic Attacks",
      "Echoes User’s Thoughts"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Disrupts Dragon Sonic Attacks",
        "rules": "When activated, the device emits a pulse that lasts for 5 seconds. During this time, any dragon within 30 feet has disadvantage on all sonic attack rolls and spell checks. If used near a dragon, the user hears their own voice echoing in reverse for 1 minute."
      },
      {
        "title": "Echoes User’s Thoughts",
        "rules": "For 5 seconds after activation, the user experiences their thoughts being echoed back to them as if spoken by another. This effect does not grant any benefit but is a reminder of the device's dual-edged nature. The user can attempt to resist this effect with a Wisdom saving throw (DC 13)."
      }
    ],
    "levelRequirementReason": "Requires attunement due to its complex, enchanted structure and the need for a sonic device or dragon's voice to activate it.",
    "vendorReason": "Isle Delfino specializes in rare artifacts and relics with unique origins, making this device a perfect fit for their inventory.",
    "shippingDetail": "Ships via Boo Spectral Mail, known for its swift but mysterious delivery methods. The package requires special handling to maintain the device's enchantment.",
    "usage": {
      "activation": "Requires attunement with a sonic device or dragon’s voice.",
      "duration": "Pulse lasts 5 seconds; echo effect lasts 5 seconds.",
      "endsWhen": "Effect ends when the duration expires or the user is no longer within range of a dragon.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The device's rarity, enchantment, and unique attunement requirements justify its fair value at 1000 XP.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T07:33:59.023653+00:00",
    "aiReviewedAt": "2026-07-22T07:33:59.023653+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_spectral_shine_bottle": {
    "id": "isle_delfino_spectral_shine_bottle",
    "name": "Spectral Shine Bottle",
    "description": "The Spectral Shine Bottle glows faintly before shattering into a burst of starlight upon impact, illuminating its surroundings in a dazzling display of spectral energy. When thrown, it unleashes a radiant light that blinds foes within a 3-meter radius for 2 turns, dealing an additional 10% damage to all enemies struck by the light. The shattered remains leave behind shimmering residue, granting you and your allies +5% dodge chance for 5 rounds.",
    "price": 1200,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Radiant Light Burst",
      "Blinding Aura"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Radiant Light Burst",
        "rules": "When thrown as a bonus action, the bottle bursts into starlight. All enemies within a 3-meter radius must succeed on a DC 14 Dexterity saving throw or be blinded for 2 turns and take an additional 10% damage."
      },
      {
        "title": "Blinding Aura",
        "rules": "The burst of light creates a blinding aura that grants you and your allies within the area +5% dodge chance until the end of their next turn. This effect lasts for up to 5 rounds, refreshing on each new round."
      }
    ],
    "levelRequirementReason": "This bottle is crafted with simple enchantments suitable for beginners and experienced adventurers alike.",
    "vendorReason": "Isle Delfino, known for its magical curiosities, often features this item in their vast array of mystical wares.",
    "shippingDetail": "The bottles are shipped under a protective enchantment to prevent premature activation during transit.",
    "usage": {
      "activation": "Bonus action (thrown as a projectile)",
      "duration": "Instantaneous, lasting effects until the end of each round for up to 5 rounds",
      "endsWhen": "The effect ends when the blinding aura duration expires or the bottle is used again",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at this price point, it provides a versatile utility without overshadowing more powerful items.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T07:34:41.162824+00:00",
    "aiReviewedAt": "2026-07-22T07:34:41.162824+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_spiral_soul_ring": {
    "id": "isle_delfino_spiral_soul_ring",
    "name": "Spiral Soul Ring",
    "description": "The Spiral Soul Ring pulses with the ancient energy of the deep, its carven spiral a testament to millennia spent in the ocean's embrace. Wear it and feel the rhythm of the tides surge through your veins, granting you elemental prowess and the ability to summon spirits that lend their power to your spells. This unique artifact is a relic from the Mages Guild’s underwater research, a symbol of their profound connection with aquatic magic.",
    "category": "equipment",
    "price": 5500,
    "icon": "📦",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "+20% critical strike damage for elemental spells",
      "Grants 30% chance to summon a spirit ally for 5 seconds"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Critical Strike Boost",
        "rules": "Activates on the caster's turn as a bonus action. Increases the user’s critical strike damage by +20% for elemental spells only, lasting until the end of their next turn."
      },
      {
        "title": "Spirit Summoning",
        "rules": "Activates when the wearer makes an attack roll or casts an elemental spell. There is a 30% chance to summon a spirit ally that grants a +1d6 bonus to all damage rolls for 5 seconds, ending upon taking any other action."
      }
    ],
    "levelRequirementReason": "This ring requires a high level of magical aptitude and connection with the elementals.",
    "vendorReason": "The Mages Guild at Isle Delfino has long been involved in underwater research, making this artifact an integral part of their equipment line.",
    "shippingDetail": "Delivered via Lakitu Drone within a week from the vendor.",
    "usage": {
      "activation": "Bonus action to activate critical strike boost; reaction to summon spirit ally.",
      "duration": "Until end of next turn for critical strike, 5 seconds for spirit summoning.",
      "endsWhen": "On taking another action or at the start of the wearer's next turn.",
      "charges": "Unlimited"
    },
    "priceReason": "The Spiral Soul Ring is a well-balanced epic item, offering significant but not overpowered benefits that align with its rarity and level requirement.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T07:34:47.163910+00:00",
    "aiReviewedAt": "2026-07-22T07:34:47.163910+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_spirit_bottle": {
    "id": "isle_delfino_spirit_bottle",
    "name": "Spirit Bottle",
    "description": "The Spirit Bottle is a fragile, glass vial adorned with golden runes that shimmer faintly under moonlight. Crafted from the enchanted sands of Delfino Isle, it contains the essence of Shine Sprites, their ethereal energy pulsing within its depths. When uncorked, it releases a protective aura around you and nearby allies, granting magical resistance and reducing incoming damage by half for one turn. The bottle also grants a temporary boost to spellcasting power, allowing you to cast spells with an additional +1 modifier.",
    "price": 1200,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Magical Resistance Aura",
      "Enhanced Spellcasting"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Magical Resistance Aura",
        "rules": "When activated as a bonus action, the Spirit Bottle releases a shimmering aura around you and within a 10-foot radius. For one turn, all creatures in this area gain resistance to magical damage. The effect ends when the duration expires or if an attack roll for magical damage is made against any creature within the area."
      },
      {
        "title": "Enhanced Spellcasting",
        "rules": "The bottle grants a +1 bonus to spell attack and spell save checks, as well as to the DC of your spells. This effect lasts until you use another action to activate the bottle or until you finish a long rest."
      }
    ],
    "levelRequirementReason": "This item is crafted for adventurers who have begun their journey and can handle its ethereal power.",
    "vendorReason": "The vendors at Isle Delfino are known for their magical artifacts, and the Spirit Bottle is a staple in their offerings.",
    "shippingDetail": "Due to its fragile nature, the bottle must be shipped with special care using padded crates and reinforced packaging.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 turn",
      "endsWhen": "The duration expires or an attack roll for magical damage is made against any creature within the aura area.",
      "charges": "Unlimited, but requires a long rest to regain the spellcasting bonus"
    },
    "priceReason": "This balanced price reflects the bottle's rare craftsmanship and its utility in enhancing both defensive capabilities and offensive magic.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:34:38.371420+00:00",
    "aiReviewedAt": "2026-07-22T07:34:38.371420+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_spirit_sandals": {
    "id": "isle_delfino_spirit_sandals",
    "name": "Spirit Sandals",
    "description": "The Spirit Sandals of Isle Delfino are crafted from the shells of glow sprites, their essence woven into the leather straps. These lightweight sandals not only enhance your agility, allowing you to dance gracefully across rocky terrain, but also grant you temporary invisibility in the bright, sunlit areas around the island. When worn, you move with a fluid grace that seems to blend you into the very landscape of Isle Delfino, making it easier to navigate without being noticed by those who dwell there.",
    "category": "equipment",
    "price": 1200,
    "icon": "🌊",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Enhanced Agility",
      "Daylight Invisibility"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Agility",
        "rules": "When worn, the sandals increase your movement speed by 25%, allowing you to traverse rocky and uneven terrain with ease. This effect is passive while you are in daylight or areas of bright light."
      },
      {
        "title": "Daylight Invisibility",
        "rules": "For every hour spent within the sunlight of Isle Delfino, these sandals grant you a +1 bonus on Dexterity (Stealth) checks to become invisible. This effect lasts for 10 minutes per day, and it can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The Spirit Sandals are crafted with simple magic that is accessible to low-level adventurers who wish to enhance their movement and stealth capabilities without the need for high-level spells.",
    "vendorReason": "Isle Delfino's artisans create these sandals, drawing on the island’s natural magic to infuse them with the essence of its glow sprites.",
    "shippingDetail": "The sandals are shipped quickly via Pipe Express, ensuring they arrive at your doorstep in perfect condition.",
    "usage": {
      "activation": "Passive effect while worn; active use requires a long rest to recharge the daylight invisibility ability.",
      "duration": "Instantaneous for enhanced agility; daylight invisibility lasts 10 minutes per day and recharges after a long rest.",
      "endsWhen": "The effects end when you remove them or if your long rest is interrupted.",
      "charges": "Daylight Invisibility can be used once per long rest."
    },
    "priceReason": "This price reflects the combination of enhanced agility and stealth capabilities, which are highly valued by adventurers seeking to improve their movement speed and ability to remain unseen in bright areas.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:34:47.056856+00:00",
    "aiReviewedAt": "2026-07-22T07:34:47.056856+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_spirit_shard_pendant": {
    "id": "isle_delfino_spirit_shard_pendant",
    "name": "Spirit Shard Pendant",
    "description": "The Spirit Shard Pendant is a shimmering talisman crafted from the ethereal essence of ancient sprites, glowing faintly in hues of twilight and dawn. Worn by those seeking to harness its power, it grants an enchanting aura that not only increases elemental damage by 20% but also restores 15% of your health every minute. This pendant is a symbol of Isle Delfino's mystical heritage, forged in the heart of its enchanted forests.",
    "category": "equipment",
    "price": 1200,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Enhances Elemental Damage",
      "Restores Health Gradually"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Enhanced Elemental Damage",
        "rules": "While wearing this pendant, you gain a +20% bonus to all elemental damage rolls. This effect is passive and does not require activation."
      },
      {
        "title": "Health Restoration",
        "rules": "Every minute while wearing the pendant, you regain 15% of your maximum hit points. This effect ends when the pendant is removed or destroyed."
      }
    ],
    "levelRequirementReason": "The pendant's mystical energy requires a certain level to resonate with its enchantments.",
    "vendorReason": "As guardians of Isle Delfino, the vendors there are entrusted with preserving and selling relics like this pendant.",
    "shippingDetail": "The pendant is delivered via a swift courier known for its precision and reliability.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Permanent while worn, ends when removed or destroyed.",
      "endsWhen": "Removed from the wearer or destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "The pendant's rarity and mystical properties justify its moderate price in XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:35:06.295996+00:00",
    "aiReviewedAt": "2026-07-22T07:35:06.295996+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_spirit_spray": {
    "id": "isle_delfino_spirit_spray",
    "name": "Spirit Spray",
    "description": "Spirit Spray is a delicate mist crafted by the sea sprites of Isle Delfino, forged from the essence of Shine Sprites. Upon application, it grants temporary elemental immunity and enhances the recipient's aura glow, making them shimmer with an ethereal light that can be seen for miles. This spray not only protects but also boosts one’s natural radiance, a gift from the deep waters to those who seek its protection.",
    "price": 50,
    "icon": "🔮",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "+10% Elemental Resistance",
      "Boost Aura Glow"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elemental Immunity Boost",
        "rules": "When applied, Spirit Spray grants the recipient a +10% chance to ignore elemental damage for 1 minute. This effect is limited to once per day."
      },
      {
        "title": "Enhanced Aura Glow",
        "rules": "The recipient's aura glow increases by +20% in radius and brightness for 5 minutes, making them a beacon of light. This effect can only be used twice per week."
      }
    ],
    "levelRequirementReason": "This spray is designed to aid adventurers who are still learning the ways of the world.",
    "vendorReason": "Isle Delfino's sea sprites specialize in creating items that enhance one’s connection to nature and protect against its dangers.",
    "shippingDetail": "The Void Drifter ensures swift delivery, but the spray must be used within a week of receipt to maintain its potency.",
    "usage": {
      "activation": "A bonus action is required to apply Spirit Spray.",
      "duration": "1 minute for Elemental Immunity Boost; 5 minutes for Enhanced Aura Glow",
      "endsWhen": "The duration ends or the user takes damage, whichever comes first.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The balance of the price reflects its rarity and the expertise required to craft such a beneficial spray.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T07:35:23.324166+00:00",
    "aiReviewedAt": "2026-07-22T07:35:23.324166+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_splash_spirit": {
    "id": "isle_delfino_splash_spirit",
    "name": "Splash Spirit Amulet",
    "description": "The Splash Spirit Amulet is a shimmering, wave-shaped charm crafted from polished seashells and enchanted by Delfino's mystical artisans. Wearers of this amulet can summon a fleeting splash to deflect projectiles in combat or use it for quick evasion near water's edge. The amulet grants the wearer increased swim speed and a bonus dodge chance when surrounded by aquatic elements, making it an invaluable companion for adventurers navigating treacherous waters.",
    "category": "equipment",
    "price": 1200,
    "icon": "💧",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Water Disruption",
      "Enhanced Evasion"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Finsail Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Water Disruption",
        "rules": "As a bonus action, the wearer can summon a splash of water to deflect one projectile within 5 feet for 5 seconds. This effect has no save DC and does not consume charges but may be used once per long rest."
      },
      {
        "title": "Enhanced Evasion",
        "rules": "The amulet grants the wearer a +10% chance to dodge attacks when near water, stacking with other sources of dodge. This bonus lasts until the end of the wearer's next turn and does not have a save DC or recharge."
      }
    ],
    "levelRequirementReason": "The amulet requires at least level 5 to activate its abilities effectively in combat.",
    "vendorReason": "Isle Delfino is renowned for crafting items that harmonize with the ocean's magic, making it a fitting vendor for such an aquatic charm.",
    "shippingDetail": "Delivered by Finsail Express within three days of purchase.",
    "usage": {
      "activation": "Bonus action to summon a water splash; passive dodge bonus while near water.",
      "duration": "Instantaneous and lasts until the end of next turn for Water Disruption, and until the start of the wearer's next turn for Enhanced Evasion.",
      "endsWhen": "The effect ends when the amulet is removed or the duration expires.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The balanced price reflects its rare craftsmanship and unique aquatic magic.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:35:31.724613+00:00",
    "aiReviewedAt": "2026-07-22T07:35:31.724613+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_splish_splash_amulet": {
    "id": "isle_delfino_splish_splash_amulet",
    "name": "Splish Splash Amulet",
    "description": "The Splish Splash Amulet gleams with the vibrant hues of a tropical waterfall, its polished shell shimmering like liquid emerald. When submerged in water, it grants you the agility of a sprite, enhancing your movement speed by 10% and allowing you to perform watery acrobatics with ease. The amulet also deals an additional 2d6 fire damage when attacking aquatic foes, ensuring your strikes are as sharp as the waves that inspire its design.",
    "category": "equipment",
    "price": 1200,
    "icon": "🌊",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Aquatic Agility",
      "Splash Fire Damage"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Aquatic Agility",
        "rules": "While in water or a watery environment, you gain a +10 bonus to Dexterity (Movement) checks and can swim at your highest land walking speed. This effect lasts for the duration of time spent submerged."
      },
      {
        "title": "Splash Fire Damage",
        "rules": "When making an attack against an aquatic creature or object, you deal an additional 2d6 fire damage as the amulet channels the heat and energy of a tropical waterfall into your strike. This effect can be used once per short rest."
      }
    ],
    "levelRequirementReason": "This amulet is crafted for beginners to introduce them to the joys of aquatic combat.",
    "vendorReason": "Islé Delfín specializes in aquatic-themed gear, making this amulet a natural addition to its inventory.",
    "shippingDetail": "The Void Drifter ensures swift delivery of your purchase, even across the most turbulent seas.",
    "usage": {
      "activation": "Passive effect while submerged in water or a watery environment.",
      "duration": "Lasts until you exit the water or enter an area not considered watery.",
      "endsWhen": "Expires at the end of your next turn after exiting the water.",
      "charges": "Unlimited, recharges after 8 hours spent out of water."
    },
    "priceReason": "The amulet's unique combination of utility and combat prowess makes it a fair price for adventurers seeking to enhance their aquatic capabilities without breaking the bank.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T07:35:28.439114+00:00",
    "aiReviewedAt": "2026-07-22T07:35:28.439114+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_splish_splash_gear": {
    "id": "isle_delfino_splish_splash_gear",
    "name": "Splish Splash Gear Set",
    "description": "The Splish Splash Gear Set, a rare ensemble crafted from water-resistant silk and enchanted cotton, transforms your movements in tropical climates or rainy weather into an exhilarating splash. When you activate this set, you emit a playful geyser with each step, ensuring you stay agile yet whimsical amidst the elements. Equipped in both armor and boots, it grants +20% mobility on wet ground and boosts your damage by +10% when near water sources or moisture.",
    "category": "equipment",
    "price": 1300,
    "icon": "🌊",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+20% Mobility in Wet Terrain",
      "Enhanced Splash Effect"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Enhanced Splash Effect",
        "rules": "When you move, there is a 10% chance that your steps create a small splash. This effect lasts for the duration of one short rest and does not stack with other similar effects."
      },
      {
        "title": "+20% Mobility in Wet Terrain",
        "rules": "This benefit activates as soon as you equip both pieces of the gear set. It remains active until you remove either piece or complete a long rest. While this effect is active, you gain advantage on Dexterity (Acrobatics) checks."
      }
    ],
    "levelRequirementReason": "The intricate enchantments and materials used in crafting the Splish Splash Gear Set require a level of proficiency in handling such delicate items.",
    "vendorReason": "Isle Delfino specializes in gear for aquatic and tropical adventures, making this set an ideal addition to their inventory.",
    "shippingDetail": "The gear is carefully packed with waterproofing materials to ensure it arrives in pristine condition.",
    "usage": {
      "activation": "Activates on initial equipping and remains active until removed or upon completion of a long rest.",
      "duration": "Active for the duration of one short rest or until removed or resting.",
      "endsWhen": "Effect ends when you remove either piece, complete a long rest, or if the gear is destroyed.",
      "charges": "Unlimited uses; recharges after a long rest."
    },
    "priceReason": "The set's rare materials and enchantments justify its value, making it a sought-after item for adventurers navigating wet terrains.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:35:35.552662+00:00",
    "aiReviewedAt": "2026-07-22T07:35:35.552662+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_splish_splash_glove": {
    "id": "isle_delfino_splish_splash_glove",
    "name": "Splish Splash Glove",
    "description": "The Splish Splash Glove is a neon-painted, waterproof glove crafted from enchanted rubber. When donned, it channels the whimsical chaos of Delfino Isle to absorb attacks and convert them into speed boosts. Designed for adventurers who navigate dream zones or watery realms, this glove enhances your agility in wet conditions by 20%, while also granting a 50% chance to dodge enemy hits when they have less than half their health.",
    "category": "equipment",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs Damage and Boosts Speed",
      "Enhanced Agility in Water"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Damage Absorption and Speed Boost",
        "rules": "When a creature makes an attack against the wearer, they take only 50% of the damage. This absorbed damage is converted into a speed boost equal to 10% of their movement speed for 1 minute."
      },
      {
        "title": "Enhanced Agility in Water",
        "rules": "While in water or dream zones, the wearer's jump height increases by 20%. Additionally, there is a 50% chance that they will dodge an attack if the attacking creature has less than half of its hit points."
      }
    ],
    "levelRequirementReason": "A basic level requirement ensures that even novice adventurers can benefit from this unique glove.",
    "vendorReason": "Isle Delfino specializes in equipment for aquatic and dream zone exploration, making it the perfect vendor for this glove.",
    "shippingDetail": "Delivered swiftly by Koopa Postal within a week of purchase.",
    "usage": {
      "activation": "Passive effect activated upon equipping; ends when removed or if the wearer is no longer in water or dream zones.",
      "duration": "Instantaneous speed boost on damage absorption; enhanced agility lasts for 1 minute while in water or dream zones.",
      "endsWhen": "The effects end either by removing the glove, leaving a watery environment, or at the end of the duration period.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the enchantments and unique properties that make this glove a valuable asset for adventurers navigating aquatic and dream zones.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:35:39.946853+00:00",
    "aiReviewedAt": "2026-07-22T07:35:39.946853+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_splish_splash_rod": {
    "id": "isle_delfino_splish_splash_rod",
    "name": "Splish Splash Rod",
    "description": "The Splish Splash Rod is a whimsical fishing rod crafted from polished coral and adorned with silver runes that shimmer like stars in the deep sea. This artifact not only lures aquatic spirits but also yields rare coral gems, perfect for both catching fish and collecting Shine Sprite tokens. With each successful cast, it sends ripples through the water, creating a mesmerizing display of bubbles that can stun foes temporarily.",
    "category": "equipment",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% chance to catch rare coral tokens",
      "Deals 10% extra damage to water-based enemies"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Salty Sea Delivery Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bubble Blast",
        "rules": "After casting the rod three times successfully, you can activate the Bubble Blast ability. This creates a burst of bubbles that stuns all water-based enemies within a 10-foot radius for 1 round (DC 14 Wisdom save). The effect ends if a creature moves out of the area or takes any action."
      },
      {
        "title": "Rare Coral Yield",
        "rules": "For every successful cast, there is a +30% chance to retrieve a rare coral gem. These gems are highly sought after by collectors and can be used for various magical purposes. This effect does not expend charges but requires the rod to be in good condition."
      }
    ],
    "levelRequirementReason": "The Splish Splash Rod is designed for beginners who wish to explore aquatic environments and collect rare treasures without needing extensive experience.",
    "vendorReason": "Isle Delfino is renowned for its deep-sea expeditions and the Splish Splash Rod complements their mission of discovering hidden aquatic secrets.",
    "shippingDetail": "The rod arrives wrapped in waterproof packaging, ensuring it remains in pristine condition during shipment.",
    "usage": {
      "activation": "Bonus action to cast the rod and retrieve a catch or gem, or use the Bubble Blast ability after three successful casts.",
      "duration": "Instantaneous for each effect",
      "endsWhen": "The effects end when the creature moves out of range or takes an action, or if the rod breaks and requires repair.",
      "charges": "Unlimited charges"
    },
    "priceReason": "The Splish Splash Rod is priced at 1000 XP due to its unique combination of fishing prowess and magical capabilities, making it a valuable asset for any adventurer.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:35:59.459847+00:00",
    "aiReviewedAt": "2026-07-22T07:35:59.459847+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_spray_spirit": {
    "id": "isle_delfino_spray_spirit",
    "name": "Spray Spirit Vial",
    "description": "The Spray Spirit Vial holds a shimmering essence of the Delfino Sea, imbuing the drinker with the grace and agility of its mythical creatures. When uncorked, it grants a dancer's evasion, making you as slippery as the waves themselves for 15 seconds. The vial also increases your swim speed by 25%, allowing you to glide through water as though it were air. The sparkling trail left behind confounds foes, leaving them momentarily disoriented and off-balance.",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Enhances evasion",
      "Boosts swim speed"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Evasion Boost",
        "rules": "When the Spray Spirit Vial is uncorked, you gain a +30% bonus to your AC against melee and ranged attacks for 15 seconds. This effect ends when the vial is empty or upon taking an action, reaction, or other activity that requires concentration."
      },
      {
        "title": "Swim Speed Increase",
        "rules": "The Spray Spirit Vial increases your swim speed by +25% while active. This enhancement lasts for 15 seconds and ends when the vial is empty or upon taking an action, reaction, or other activity that requires concentration."
      }
    ],
    "levelRequirementReason": "This elixir is designed to be accessible to adventurers of all levels, enhancing their natural abilities without imposing a high barrier.",
    "vendorReason": "The vial's origins are tied directly to the Delfino Sea, making it only fitting that Isle Delfino stocks this product.",
    "shippingDetail": "Shipped via Koopa's fastest courier pigeons; arrives within a week of purchase.",
    "usage": {
      "activation": "Uncork and consume the vial to activate its effects.",
      "duration": "15 seconds per uncorking, duration ends when the vial is empty or upon taking an action, reaction, or other activity that requires concentration.",
      "endsWhen": "The vial is empty, you take an action, reaction, or other activity requiring concentration, or after 15 seconds.",
      "charges": "Unlimited uses per vial."
    },
    "priceReason": "The Spray Spirit Vial's rarity and unique properties justify its moderate price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:36:26.793981+00:00",
    "aiReviewedAt": "2026-07-22T07:36:26.793981+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sprinkles_of_shine": {
    "id": "isle_delfino_sprinkles_of_shine",
    "name": "Sprinkles of Shine",
    "description": "Sprinkles of Shine are a shimmering, sugary elixir that exudes a radiant glow when shaken. Each bottle contains essence distilled from the rarest Sparkle Sprites found in Delfino Isle's hidden lagoons. Drinking these sprinkles grants you and your allies a burst of energy, temporarily boosting morale during chaotic events. For three turns after consumption, there’s a 50% chance to avoid enemy attacks or traps, and nearby allies gain an ethereal sparkle that increases their attack speed by 10%. These precious elixirs are handcrafted using ancient Delfino Isle secrets and shipped with care via the Koopa Postal Service.",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Radiant Boost",
      "Sparkle Aura"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Radiant Boost",
        "rules": "When consumed, Sprinkles of Shine restore 30% of the drinker’s maximum hit points and mana. There is a 50% chance to avoid an enemy attack or fall into a trap for three turns after drinking."
      },
      {
        "title": "Sparkle Aura",
        "rules": "For three turns, Sprinkles create a sparkling aura around the drinker and nearby allies, increasing their attack speed by 10%. The sparkle effect is visually represented as a trail of tiny, twinkling stars following the drinker."
      }
    ],
    "levelRequirementReason": "These sprinkles are designed for adventurers at all levels to enjoy, providing a morale boost and defensive advantage in any chaotic situation.",
    "vendorReason": "Isle Delfino is renowned for its expertise in crafting elixirs that enhance the spirit of its visitors.",
    "shippingDetail": "The Koopa Postal Service ensures these precious sprinkles arrive fresh, delivered via their fastest courier pigeons.",
    "usage": {
      "activation": "Consume one Sprinkle of Shine as a bonus action.",
      "duration": "Three turns after activation.",
      "endsWhen": "After the duration ends or if the drinker takes any damage.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The price reflects the rare ingredients and ancient Delfino Isle crafting techniques required to produce these elixirs.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:36:30.158390+00:00",
    "aiReviewedAt": "2026-07-22T07:36:30.158390+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sprout_bloom_helmet": {
    "id": "isle_delfino_sprout_bloom_helmet",
    "name": "Sprout Bloom Helmet",
    "description": "The Sprout Bloom Helmet pulses with vibrant, tropical energy, its surface a lattice of verdant vines and glowing nodes. This jungle helm grants you immunity to knockback for 5 seconds, allowing you to counterattack without fear of being flung back. A unique feature triggers on each hit, releasing a burst of leafy tendrils that blind your foes within a 10-foot radius for 2 rounds. Perfect for the dense, unforgiving battles in the Delfino jungle.",
    "category": "equipment",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Immunity to Knockback",
      "Tropical Burst on Hit"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Immunity to Knockback",
        "rules": "When you take knockback, you are instead immune to it for 5 seconds. If this effect ends before the duration expires and you take another knockback, the immunity resets."
      },
      {
        "title": "Tropical Burst on Hit",
        "rules": "Whenever you hit an opponent with a melee attack, a burst of leafy tendrils springs from the helmet, creating a 10-foot-radius Blinding Mist centered on your target. The mist lasts for 2 rounds and grants advantage to your next attack against that target."
      }
    ],
    "levelRequirementReason": "The Sprout Bloom Helmet requires level 5 to wear due to its intricate enchantments and the need to navigate jungle hazards.",
    "vendorReason": "Isle Delfino is renowned for crafting gear that thrives in tropical environments, making it a perfect vendor for this helmet.",
    "shippingDetail": "The helmet is shipped via the Rakasha Spirit Walk, ensuring its arrival with vibrant energy intact.",
    "usage": {
      "activation": "Passive effect upon donning. Requires no action to activate.",
      "duration": "5 seconds of immunity and a 2-round duration for the burst.",
      "endsWhen": "The effects end when the duration expires or when you take another knockback, at which point they reset.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the rare enchantments and materials used in crafting this jungle-adapted helmet.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:48:26.584430+00:00",
    "aiReviewedAt": "2026-07-22T19:48:26.584430+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sprout_bottle": {
    "id": "isle_delfino_sprout_bottle",
    "name": "Sprout Bottle",
    "description": "The Sprout Bottle is a delicate glass vial, its surface etched with ancient runes that hum faintly in the light. Contained within is the essence of a Shine Sprite’s growth spurt, a verdant liquid that pulses with life itself. When sipped, the drinker experiences an explosion of energy, their stamina replenished by half and movement speed doubled for one turn. The air around them crackles with newfound vitality, leaving behind a trail of shimmering sparkles that reveals hidden paths in the immediate vicinity.",
    "price": 1300,
    "icon": "🍵",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Stamina Regeneration",
      "Movement Boost"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stamina Regeneration",
        "rules": "When consumed as a bonus action, the user regains 25% of their maximum stamina. This effect lasts for 1 turn and cannot be used more than once per long rest."
      },
      {
        "title": "Movement Boost",
        "rules": "Upon activation, the drinker’s movement speed is doubled for 1 turn. Additionally, any path they traverse leaves behind a trail of sparkling light that reveals hidden or obscured areas within a 5-foot radius for the duration of their enhanced movement."
      }
    ],
    "levelRequirementReason": "The Sprout Bottle is accessible to all adventurers who can afford its price, as it offers a useful but not overpowered burst of energy.",
    "vendorReason": "Isle Delfino, known for its connection with nature and magic, sells the Sprout Bottle as part of their line of unique magical artifacts.",
    "shippingDetail": "The bottle is shipped in a specially lined box to prevent breakage during transit, ensuring it arrives intact and potent.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 Turn",
      "endsWhen": "Ends at the start of your next turn or when used again within a long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The Sprout Bottle is priced moderately, reflecting its rare and valuable essence but not so expensive as to be out of reach for most adventurers.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-22T07:36:54.408685+00:00",
    "aiReviewedAt": "2026-07-22T07:36:54.408685+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sprout_chestplate": {
    "id": "isle_delfino_sprout_chestplate",
    "name": "Sprout Chestplate of Radiant Growth",
    "description": "The Sprout Chestplate of Radiant Growth is crafted from the heartwood of ancient sunflowers, imbued with the essence of life itself. This armor not only shields you against harsh environmental conditions but also encourages your own growth and regeneration. As it clings to your form like a second skin, its petals seem to pulse in rhythm with your heartbeat, offering an ever-present reminder that even in the harshest of climates, new life can bloom.",
    "category": "equipment",
    "price": 5500,
    "icon": "🌿",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "+30% Regeneration Rate",
      "Environmental Protection"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Enhanced Regeneration",
        "rules": "While wearing this chestplate, your natural regeneration is increased by 30%. This effect functions passively and continues as long as the chestplate remains on you. The regenerative power reaches its peak when your hit point total is below 50%, but it does not exceed half of your maximum hit points."
      },
      {
        "title": "Environmental Shield",
        "rules": "The Sprout Chestplate offers a +20% defense bonus against environmental damage, such as fire, cold, and acid. This effect grants the wearer the ability to shrug off these harsh conditions more easily, providing an additional layer of protection in challenging terrains."
      }
    ],
    "levelRequirementReason": "This armor is designed for seasoned adventurers who have faced numerous trials and can now benefit from its unique properties.",
    "vendorReason": "The artisans at Isle Delfino are known for their expertise in crafting gear that harmonizes with nature, making the Sprout Chestplate a natural addition to their inventory.",
    "shippingDetail": "Ships via Pipe Express within three days of purchase. Expedited shipping options available for an additional fee.",
    "usage": {
      "activation": "Passive effect; no activation required",
      "duration": "Persistent while worn",
      "endsWhen": "Removes the chestplate or dies",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the unique materials and enchantments used in its creation, as well as the specialized craftsmanship required.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T07:37:22.995614+00:00",
    "aiReviewedAt": "2026-07-22T07:37:22.995614+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sprout_gear": {
    "id": "isle_delfino_sprout_gear",
    "name": "Sprout Gear",
    "description": "Sprout Gear is a magical tool forged from enchanted soil, designed to nurture rare flora and call upon the natural world's guardians. With this gear, gardeners can summon Shine Sprites—tiny yet formidable allies that bolster their plant growth by 20% and provide a 50% damage boost in combat. As if nature itself assists, Sprout Gear also amplifies plant growth speed, ensuring your gardens flourish faster than ever before.",
    "category": "equipment",
    "price": 1300,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Summons Shine Sprites",
      "Boosts Plant Growth"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Summon Shine Sprites",
        "rules": "As a bonus action, you can summon a Shine Sprite that appears in an unoccupied space within 30 feet of you. The sprite has 100 hit points and grants you advantage on attack rolls against creatures with plant-based weaknesses. This effect lasts until the end of your next turn."
      },
      {
        "title": "Boost Plant Growth",
        "rules": "Sprout Gear increases the growth speed of any plants within a 60-foot radius by 20%. This bonus remains in effect as long as you hold the gear and does not stack with other similar effects. No saving throw is required."
      }
    ],
    "levelRequirementReason": "Sprout Gear's simplicity allows even novice gardeners to harness its power.",
    "vendorReason": "Isle Delfino, a haven for nature enthusiasts, stocks Sprout Gear as part of their gardening tool collection.",
    "shippingDetail": "Ships via Boo Spectral Mail; delivery is swift but requires a signature from a plant-based entity.",
    "usage": {
      "activation": "Bonus action to summon Shine Sprite, passive boost for plant growth.",
      "duration": "Summoned sprite lasts until the end of your next turn. Boost remains active while holding Sprout Gear.",
      "endsWhen": "The effect ends when you drop or lose control over the gear.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Sprout Gear offers a balanced mix of utility and combat support for gardeners, making it worth its price in experience points.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:37:27.266744+00:00",
    "aiReviewedAt": "2026-07-22T07:37:27.266744+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sprout_glider": {
    "id": "isle_delfino_sprout_glider",
    "name": "Sprout Glider",
    "description": "The Sprout Glider is a leaf-shaped apparatus crafted from the resilient bark of Delfino Island's sacred trees, its veins etched with ancient runes that whisper the secrets of flight. This glider allows you to soar silently above the lush canopy, evading patrols or delivering surprise attacks with ease. Once airborne, the glider's roots seem to merge with the very air, offering a 25% chance to reduce fall damage and granting +10% evasion while in flight.",
    "category": "equipment",
    "price": 5500,
    "icon": "🌿",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Silent Flight",
      "Reduced Fall Damage"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silent Flight",
        "rules": "As an action, you can activate the glider to soar silently for up to 1 minute. While airborne, any noise made by your flight is reduced to a faint rustling that only nearby creatures with keen hearing can detect. The glider's roots extend and retract seamlessly, allowing for silent landings without leaving a trace."
      },
      {
        "title": "Reduced Fall Damage",
        "rules": "When you fall from a height of 30 feet or less and activate the glider before hitting the ground, reduce fall damage by 5d6. This effect can only be used once per short rest."
      }
    ],
    "levelRequirementReason": "Even though it's an epic item, the Sprout Glider is accessible to lower-level characters as a means to introduce aerial combat and stealth.",
    "vendorReason": "Isle Delfino has long been known for its mastery of nature magic, making the glider a fitting addition to their offerings.",
    "shippingDetail": "The glider is shipped via the Rakasha Spirit Walk, ensuring it arrives in pristine condition and fully charged with magical energy.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 1 minute per short rest",
      "endsWhen": "You deactivate it or fall from a height without using it first.",
      "charges": "Unlimited, but requires a short rest to regain any used charges."
    },
    "priceReason": "The Sprout Glider's price is balanced at 1000 XP as it offers significant utility and stealth capabilities without overwhelming the player.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T07:37:25.635869+00:00",
    "aiReviewedAt": "2026-07-22T07:37:25.635869+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sprout_potion": {
    "id": "isle_delfino_sprout_potion",
    "name": "Sprout Potion",
    "description": "The Isle Delfino Sprout Potion is a vibrant green elixir that glimmers with the essence of tropical plants. This potion sips instantly to restore vitality and grants a burst of energy, making the drinker's movements fluid and precise. Sip twice within an hour to temporarily transform into a dancing lily pad, floating gracefully for 30 seconds. The transformation is more than just a spectacle; it provides a +20% bonus to Dexterity-based checks while active.",
    "price": 1300,
    "icon": "🍹",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "+20% Dexterity-based check boost",
      "Temporary plant-like transformation"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Sea Sprite Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vitality and Energy Boost",
        "rules": "The drinker regains 50 hit points upon consumption. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Floating Plant Transformation",
        "rules": "Sipping twice within one hour causes the drinker to transform into a floating lily pad for 30 seconds, granting a +20% bonus to Dexterity-based checks during this time. This transformation ends if the drinker takes any damage or when its duration expires."
      }
    ],
    "levelRequirementReason": "This potion is accessible to all adventurers as it provides quick restorative benefits and a fun, temporary form of mobility.",
    "vendorReason": "Isle Delfino is known for its magical and restorative elixirs, making this potion a staple in their offerings.",
    "shippingDetail": "The Sea Sprite Courier delivers the potion swiftly from the tropical isles to adventurers across the realm.",
    "usage": {
      "activation": "Instantaneous consumption by sipping",
      "duration": "30 seconds when transformed into a lily pad",
      "endsWhen": "Transformation ends on taking damage or after its duration expires",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the potion's potent effects, including immediate health restoration and a unique temporary transformation ability.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T07:37:08.260631+00:00",
    "aiReviewedAt": "2026-07-22T07:37:08.260631+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sprout_shield": {
    "id": "isle_delfino_sprout_shield",
    "name": "Sprout Shield of the Glow Sprite",
    "description": "The Sprout Shield of the Glow Sprite is a pulsating leaf shield that absorbs sunlight and converts it into vibrant, radiant power. This enchanted shield not only enhances its wielder's defense but also retaliates with a dazzling flash when shattered by an attacker. Crafted from the pure essence of the Isle Delfino’s sacred groves, each sprout captures the island’s luminescent energy, ensuring that those who bear it are both fortified and formidable.",
    "category": "equipment",
    "price": 1300,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Sunlight Absorption",
      "Retaliatory Flash"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Sunlight Absorption",
        "rules": "While wearing the shield, the wielder gains a +3 bonus to AC. This effect is active as long as the shield is not broken and receives sunlight for at least one hour per day."
      },
      {
        "title": "Retaliatory Flash",
        "rules": "When the shield breaks or is destroyed in combat, it deals radiant damage equal to 1d6 + your Charisma modifier. This effect can be used once per short rest and requires no action to activate."
      }
    ],
    "levelRequirementReason": "The shield's magic requires a minimum of third-level spellcasting ability to properly harness its radiant energy.",
    "vendorReason": "As the creators and stewards of the sacred groves, Isle Delfino is the only place where such an enchanted item can be crafted and sold.",
    "shippingDetail": "Delivered swiftly by Lakitu drones, ensuring that the shield arrives at its destination in optimal condition.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until destroyed or until a new short rest is taken.",
      "endsWhen": "Destroyed in combat or when the wielder takes a long rest.",
      "charges": "Unlimited, but requires sunlight for at least one hour per day to maintain its active state."
    },
    "priceReason": "The shield’s rarity and the specialized materials required for its creation justify this price in game XP.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T19:48:14.395836+00:00",
    "aiReviewedAt": "2026-07-22T19:48:14.395836+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sprout_soul_ring": {
    "id": "isle_delfino_sprout_soul_ring",
    "name": "Sprout Soul Ring",
    "description": "The Sprout Soul Ring is a verdant circlet made from enchanted wood and sunlight-dyed silk. Crafted by Isle Delfino's master artisans, this ring absorbs solar energy, which fuels your sprite's natural healing and boosts during sunny days. It grants you an extra burst of vitality, enhancing your critical hits with the power of the sun, and reducing cooldowns for your abilities when the sun is at its zenith.",
    "category": "equipment",
    "price": 1300,
    "icon": "🌿",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Solar Healing Boost",
      "Sunshine Critters"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Solar Healing Boost",
        "rules": "Passive effect: While exposed to sunlight, you restore 20% of your maximum hit points every 4 seconds. This effect is limited to a total duration of 1 hour per day."
      },
      {
        "title": "Sunshine Critters",
        "rules": "Active effect: When using abilities with the 'sun' keyword, you gain a +5 bonus to critical hit chance. This ability can be used once every short or long rest."
      }
    ],
    "levelRequirementReason": "The ring's simple design and natural materials make it accessible to all levels.",
    "vendorReason": "Isle Delfino is renowned for its expertise in crafting magical accessories that harmonize with nature, making the Sprout Soul Ring a perfect fit for their inventory.",
    "shippingDetail": "The ring arrives encased in a sunlight-infused silk pouch to preserve its energy. Delivery time is expedited by Void Drifter Relay's fastest courier service.",
    "usage": {
      "activation": "Passive and active effects are always active during sunlight exposure.",
      "duration": "Passive effect lasts for up to 1 hour per day, while the active effect can be used once every short or long rest.",
      "endsWhen": "The passive effect ends after one hour of continuous sun exposure; the active effect ends at the end of your next short or long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The ring's rarity and enchanted components justify its fair price, offering significant utility to any party.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T07:37:38.813710+00:00",
    "aiReviewedAt": "2026-07-22T07:37:38.813710+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sprout_spirit_bottle": {
    "id": "isle_delfino_sprout_spirit_bottle",
    "name": "Sprout Spirit Bottle",
    "description": "The Sprout Spirit Bottle, a glass vial crafted from the translucent bark of ancient trees, holds the essence of a Shine Sprite’s laughter. When shaken, it releases a burst of joy that enhances both your movement speed and attack speed, making you fleet-footed and swift in combat. The bottle's contents are said to be imbued with the very spirit of nature itself, granting temporary power boosts to those who wield it.",
    "price": 600,
    "icon": "🍵",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+15% movement speed",
      "+10% attack speed"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Burst of Joy (Instantaneous)",
        "rules": "When the Sprout Spirit Bottle is shaken, the user gains +15% movement speed and +10% attack speed for 5 seconds. This effect ends if the user takes any damage or on their next turn."
      },
      {
        "title": "Healing Essence (Instantaneous)",
        "rules": "Upon activation, the user heals 10% of their maximum hit points. This effect cannot be used more than once per day."
      }
    ],
    "levelRequirementReason": "The bottle's magic is potent enough to require a minimum level of 3 for safe use.",
    "vendorReason": "Isle Delfino, renowned for its connection with nature and spirits, offers the Sprout Spirit Bottle as a tribute to the elements.",
    "shippingDetail": "The bottle is carefully packed in Void Drifter's special eco-friendly material to ensure it arrives undamaged.",
    "usage": {
      "activation": "Action",
      "duration": "5 seconds per use",
      "endsWhen": "On the user's next turn or if the user takes damage",
      "charges": "1/Day"
    },
    "priceReason": "The bottle is priced at 800 XP, reflecting its rare and potent nature.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T07:38:35.718564+00:00",
    "aiReviewedAt": "2026-07-22T07:38:35.718564+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sprout_spirit_gloves": {
    "id": "isle_delfino_sprout_spirit_gloves",
    "name": "Sprout Spirit Gloves",
    "description": "The Sprout Spirit Gloves are lightweight, woven from the fibers of ancient coral and enchanted by the mystical energy of a hidden coral reef. These gloves enhance your movements through jungle and reef zones, allowing you to glide with ease among the dense foliage or navigate the labyrinthine reefs. The gloves pulse with an ethereal glow, revealing secret paths and enhancing your stealth, making you nearly invisible in dark or dimly lit areas.",
    "category": "equipment",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% movement speed in jungle or reef zones",
      "Grants +5% dodge chance against ranged attacks"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Sea Sprite Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Glow Path",
        "rules": "Activates when you are within a coral reef. Reveals hidden paths and secret routes for 1 minute, allowing you to navigate with ease through the labyrinthine coral formations."
      },
      {
        "title": "Stealth Boost",
        "rules": "Increases your Stealth check by +5 if made in dimly lit or dark areas. This bonus lasts until the end of your next turn after using this effect."
      }
    ],
    "levelRequirementReason": "These gloves are crafted for travelers and explorers who venture into dense jungles and coral reefs, requiring no special training to use.",
    "vendorReason": "Isle Delfino specializes in crafting items that enhance the natural environment of their island, making these gloves a perfect fit.",
    "shippingDetail": "Ships directly from Isle Delfino with a Sea Sprite delivering the package within two days.",
    "usage": {
      "activation": "Activates as a bonus action when you are in a jungle or reef zone.",
      "duration": "1 minute",
      "endsWhen": "The duration ends if you leave the jungle or reef zone, or if you take any hostile action.",
      "charges": "Unlimited; recharge after 8 hours of rest."
    },
    "priceReason": "Balanced for a rare item that enhances movement and stealth in specific environments without being game-breaking.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:37:55.804966+00:00",
    "aiReviewedAt": "2026-07-22T07:37:55.804966+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sprout_sprout_seed": {
    "id": "isle_delfino_sprout_sprout_seed",
    "name": "Sprout Sprout Seed",
    "description": "The Sprout Sprout Seed, a rare gem from the enchanted groves of Shine Sprite Isle, is no ordinary seed. When planted in soil, it grows into a luminescent plant that emits magical pollen, enhancing the battle morale and stamina of its surroundings. The glow of this plant can only be hastened by the Sunlight Charm, which accelerates its growth without sacrificing its vibrant health. Its pollen, when collected, not only restores 50% of a party member's stamina but also grants them an extra action for the duration of their next combat round.",
    "price": 280,
    "icon": "🌱",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Restores Stamina and Grants Extra Action",
      "Enhances Battle Morale with Ambient Glow"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restores Stamina and Grants Extra Action",
        "rules": "When a party member consumes pollen, they immediately regain 50% of their stamina. Additionally, the next round, they gain an extra action as long as no major combat event occurs."
      },
      {
        "title": "Enhances Battle Morale with Ambient Glow",
        "rules": "The Sprout Sprout Plant emits a soft, magical light that increases all party members' morale by +1 to their Charisma (Performance) checks for the duration of one short rest. The plant requires sunlight and cannot be extinguished without proper care."
      }
    ],
    "levelRequirementReason": "This seed is accessible to adventurers at the beginning of their journey, making it a valuable early-game tool.",
    "vendorReason": "Isle Delfino specializes in rare and enchanted seeds from its groves, ensuring that visitors have access to these magical items.",
    "shippingDetail": "The seed is delivered with a special charm that ensures it remains fertile during transit. This delivery method is reliable but can be delayed by adverse weather conditions.",
    "usage": {
      "activation": "Planting the seed (requires soil) and collecting pollen (once the plant matures)",
      "duration": "Instantaneous for stamina restoration, one short rest for morale enhancement",
      "endsWhen": "The plant dies without proper care or if the pollen is consumed",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at this price to reflect its rarity and utility as a valuable resource for early-game adventuring parties.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:38:24.510463+00:00",
    "aiReviewedAt": "2026-07-22T07:38:24.510463+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sprout_sword": {
    "id": "isle_delfino_sprout_sword",
    "name": "Sprout Sword",
    "description": "The Sprout Sword is a shimmering blade forged from the essence of Delfino Isle's enchanted forests. Its hilt glows with vibrant, emerald energy that pulses in time with the forest's heartbeat. When wielded, it grants an attacker +20% damage to their strikes and can heal 5% of their health upon each swing. Ideal for dual-wielding or combo-focused players, this sword dances with the spirit of nature itself.",
    "category": "equipment",
    "price": 1300,
    "icon": "📦",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% Attack Damage",
      "Heals 5% HP on Swing"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Damage",
        "rules": "The Sprout Sword provides a +20% damage bonus to all melee attacks made with it. This effect is passive and lasts until the end of the wielder's next turn."
      },
      {
        "title": "Healing Swing",
        "rules": "Whenever the wielder swings this sword, they gain a healing surge equal to 5% of their maximum hit points. This effect can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Sprout Sword's connection to Delfino Isle requires the wielder to have at least reached the first level.",
    "vendorReason": "The sword is a symbol of Delfino Isle’s strength and resilience, crafted by the island itself and sold through its trusted vendor.",
    "shippingDetail": "Ships via the Void Drifter Relay, ensuring safe delivery within two weeks.",
    "usage": {
      "activation": "Passive effect on use.",
      "duration": "Instantaneous.",
      "endsWhen": "Exhausted after one short or long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The Sprout Sword is priced at 1000 XP as a rare, high-demand item that enhances both offensive and defensive capabilities.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T07:38:09.073138+00:00",
    "aiReviewedAt": "2026-07-22T07:38:09.073138+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_spryte_soul_core": {
    "id": "isle_delfino_spryte_soul_core",
    "name": "Spryte Soul Core of the Whispering Winds",
    "description": "The Spryte Soul Core of the Whispering Winds is a radiant, floating orb that hums with the essence of the sea and sky. Crafted from the ethereal hearts of long-departed Shine Sprites, it grants its bearer the gift of eluding attacks with uncanny precision. When activated, it conjures a shimmering shield that not only slows foes but also enhances the user's agility, making each dodge a graceful evasion.",
    "category": "equipment",
    "price": 5800,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Dodging Mastery",
      "Ethereal Shield"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Dodging Mastery",
        "rules": "Activates as a reaction to an attack. Grants advantage on Dexterity saving throws for the start of your next turn and increases your chance to dodge by +20%. This effect ends if you are incapacitated or when you use this ability again."
      },
      {
        "title": "Ethereal Shield",
        "rules": "Activates as a bonus action. Summons an ethereal shield that slows creatures within 10 feet of the user by 20% for 1 minute per activation, up to three times per long rest. The shield dissipates when a creature enters its area or if you take damage."
      }
    ],
    "levelRequirementReason": "Requires at least level 6 to channel the protective and evasive energies of the Spryte Soul Core.",
    "vendorReason": "Isle Delfino specializes in items imbued with the natural magic found within their coastal regions, making it a fitting vendor for this ethereal core.",
    "shippingDetail": "Delivered by Pipe Express, known for its swift and reliable service along the Delfino archipelago.",
    "usage": {
      "activation": "Reaction to an attack; Bonus action to summon the shield",
      "duration": "Instantaneous dodge effect; 1 minute per activation of the shield",
      "endsWhen": "Incapacitation or reactivation; Shield dissipates on damage or entry into its area",
      "charges": "Unlimited, recharges at dawn"
    },
    "priceReason": "The rare and magical essence of the Spryte Soul Core justifies this price, reflecting its powerful defensive capabilities.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T07:38:26.916504+00:00",
    "aiReviewedAt": "2026-07-22T07:38:26.916504+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sugar_cane_glove": {
    "id": "isle_delfino_sugar_cane_glove",
    "name": "Sugar Cane Glove",
    "description": "The Sugar Cane Glove is a crystalline glove forged from the sugarcane fields of Isle Delfino, imbued with the essence of shining sprites. Crafted by the island's master artisans, it enhances the wearer’s agility in tropical terrains and fills the air with an inviting sweetness that draws nearby friendly creatures. Its sugar-infused weave grants a +25% increase to movement speed within dense foliage and marshes, while also attracting helpful companions within 10 meters of its wearer.",
    "category": "equipment",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+25% Movement Speed in Tropical Terrain",
      "Attracts Friendly Creatures"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Mobility",
        "rules": "When worn, the Sugar Cane Glove grants a +25% increase to movement speed while in tropical terrains such as dense foliage and marshes. This effect is passive and lasts until removed or when the wearer leaves the specified terrain."
      },
      {
        "title": "Friendly Attraction",
        "rules": "The glove emits an inviting aura that attracts friendly creatures within 10 meters of its wearer for a duration of 8 hours. Once activated, it can be used again after completing a long rest."
      }
    ],
    "levelRequirementReason": "Suitable for adventurers at the beginning of their journey, this item enhances mobility and social interactions in tropical environments.",
    "vendorReason": "Isle Delfino is known for its sugarcane fields and masterful craftsmanship, making it the perfect place to source such enchanted items.",
    "shippingDetail": "Ships via a spirit courier, arriving within one week of purchase.",
    "usage": {
      "activation": "Passive effect; requires no activation. Attracts friendly creatures upon use and lasts until the wearer leaves tropical terrain or completes a long rest.",
      "duration": "Instantaneous attraction; lasts for 8 hours.",
      "endsWhen": "The effect ends when the wearer leaves tropical terrains or after completing a long rest.",
      "charges": "Unlimited uses, one per long rest."
    },
    "priceReason": "Balanced price considering its utility in tropical terrains and the enchantment required for such an item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:38:38.214846+00:00",
    "aiReviewedAt": "2026-07-22T07:38:38.214846+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sugar_fury_potion": {
    "id": "isle_delfino_sugar_fury_potion",
    "name": "Sugar Fury Elixir",
    "description": "The Sugar Fury Elixir is a crystalline elixir that transforms into a shimmering, sugary mist when uncorked. Crafted in Isle Delfino's bustling markets, this potion grants swift bursts of energy and dexterity, perfect for outrunning the next rogue wave or sprinting to the beachside fiesta. A fleeting taste of pure sugar, it enhances your reflexes with a 5% dodge chance on hit and boosts attack speed by 20% for 12 seconds.",
    "price": 290,
    "icon": "🍬",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Boosts Attack Speed",
      "Enhances Reflexes"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Boosted Attack Speed",
        "rules": "Increase your attack speed by 20% for 12 seconds. This effect ends if you take an action that requires a bonus action or if the duration expires."
      },
      {
        "title": "Enhanced Reflexes",
        "rules": "Grants a +5 bonus to Dexterity saving throws and a 5% chance to dodge attacks on hit for the duration of the elixir. This effect ends when you take a major action or if the duration expires."
      }
    ],
    "levelRequirementReason": "The Sugar Fury Elixir is a simple potion that can be used by any adventurer, as its effects are easily manageable for all levels.",
    "vendorReason": "Isle Delfino, famous for its sugary treats and lively markets, is the perfect place to source such an elixir.",
    "shippingDetail": "The Koopa Postal service delivers the Elixir within two days of purchase.",
    "usage": {
      "activation": "Drink the potion as a bonus action.",
      "duration": "12 seconds, expiring when you take an action that requires a bonus action or at the end of your next turn.",
      "endsWhen": "The duration ends if you take a major action or if the effects are interrupted by another effect.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Given its simple yet effective enhancement, this elixir is priced at 1000 XP to reflect its utility and accessibility.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T07:38:54.903263+00:00",
    "aiReviewedAt": "2026-07-22T07:38:54.903263+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sugar_soul_pearl": {
    "id": "isle_delfino_sugar_soul_pearl",
    "name": "Sugar Soul Pearl",
    "description": "The Sugar Soul Pearl is a shimmering, crystalline orb that hums with the sweet energy of Delfino Isle's lullabies. Crafted from sugarcane and imbued with the essence of islander chants, it grants temporary buffs to nearby allies. When activated, it restores 30% of its wielder’s hit points and enhances their critical hit chance by +15%, each lasting for 5 seconds. This enchanted gem also bestows a 20% dodge chance on the next attack aimed at its user.",
    "price": 1300,
    "icon": "🍬",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Restores HP",
      "Enhances Critical Hit Chance"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Glow",
        "rules": "When activated as an action, this crystal restores 30% of the user's hit points. The effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Sweet Critter",
        "rules": "For 5 seconds after activation, increases the user’s critical hit chance by +15%. This effect stacks with other sources of critical hit chance up to a maximum of +40%, and can be used once every short rest."
      }
    ],
    "levelRequirementReason": "The Sugar Soul Pearl is accessible to adventurers just starting their journey, as its effects are straightforward and beneficial.",
    "vendorReason": "Isle Delfino is known for its sweet treats and enchantments, making it a fitting vendor for the Sugar Soul Pearl.",
    "shippingDetail": "Ships via Boo Spectral Mail with a 1-day delivery guarantee.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect lasting 5 seconds; can be used once per short rest",
      "endsWhen": "The duration expires or the user takes damage",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Sugar Soul Pearl offers significant healing and combat benefits, making it a valuable yet balanced purchase for any adventurer.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:38:55.062772+00:00",
    "aiReviewedAt": "2026-07-22T07:38:55.062772+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sugarplum_bottle": {
    "id": "isle_delfino_sugarplum_bottle",
    "name": "Sugarplum Bottle",
    "description": "The Sugarplum Bottle is a delicate glass flask, its surface etched with floral patterns and adorned with a sugared rim that glistens in the sunlight. When uncorked, it releases a cloud of effervescent sweetness that fills the air, causing allies to pirouette in synchronized bubbles while reducing the resistance of nearby foes to charm spells or effects by half for 30 seconds. A true treat for the senses and a potent tool for lighthearted combat.",
    "price": 290,
    "icon": "🍬",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Reduces enemy resistance to charm effects",
      "Causes allies to perform random dance moves"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charm Resistance Reduction",
        "rules": "Allies within a 10-foot radius gain advantage on saving throws against being charmed. This effect lasts for 30 seconds after the bottle is uncorked."
      },
      {
        "title": "Ally Dance Moves",
        "rules": "When the Sugarplum Bottle is uncorked, all allies within a 15-foot radius must perform a random dance move as a reaction. These moves are harmless but can be amusing or distracting to foes. The bottle can only be used once per short rest."
      }
    ],
    "levelRequirementReason": "The Sugarplum Bottle is suitable for beginners, providing an easy way to enhance team morale and disrupt enemy tactics.",
    "vendorReason": "Isle Delfino specializes in sweet treats and lighthearted items that bring joy and camaraderie to adventurers.",
    "shippingDetail": "The bottle is shipped with a sugared cushion to ensure it arrives intact, though the delivery may take slightly longer due to the delicate nature of its contents.",
    "usage": {
      "activation": "Uncorking the bottle causes its effects",
      "duration": "30 seconds after uncorking",
      "endsWhen": "The duration ends or the bottle is used again during a short rest",
      "charges": "Unlimited, as long as the cork remains in place"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the bottle's unique combination of utility and flavor, suitable for adventurers seeking both charm and fun.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:39:53.003181+00:00",
    "aiReviewedAt": "2026-07-22T07:39:53.003181+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sun_bloom_gauntlet": {
    "id": "isle_delfino_sun_bloom_gauntlet",
    "name": "Sun Bloom Gauntlet",
    "description": "The Sun Bloom Gauntlet pulses with vibrant, tropical radiance, channeling the very essence of Isle Delfino's golden sun. This artisan-crafted gauntlet grants its wearer a burst of sunlight during combat, each swing unleashing a dazzling flash that stuns foes for 2 seconds. Crafted from the petals and bone of legendary sunflowers, it is said to imbibe the spirit of the island itself, restoring vitality with every third strike.",
    "category": "equipment",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stuns Enemies",
      "Heals on Third Strike"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Dazzling Flash",
        "rules": "When swung as a bonus action, the gauntlet emits a blinding flash that stuns all enemies within 10 feet for 2 seconds. The effect has no save DC and can be used once per short or long rest."
      },
      {
        "title": "Vitality Surge",
        "rules": "On every third successful hit, the gauntlet restores 20 hit points to its wearer. This effect does not stack; only one surge occurs per attack."
      }
    ],
    "levelRequirementReason": "The intricate craftsmanship and divine properties of the Sun Bloom Gauntlet demand a minimum level to harness effectively.",
    "vendorReason": "Only Isle Delfino's master artisans can craft such an item, imbued with the essence of their sacred sun.",
    "shippingDetail": "Ships via airship from Isle Delfino to the nearest port, ensuring timely arrival for its eager buyers.",
    "usage": {
      "activation": "Bonus action when swung in combat.",
      "duration": "Instantaneous effect; lasts until used or interrupted by an enemy save.",
      "endsWhen": "Used once per short/long rest. Interrupted by any attack on the wearer.",
      "charges": "Unlimited, recharged after a long rest."
    },
    "priceReason": "Crafted from rare materials and infused with divine essence, this gauntlet's price reflects its unique craftsmanship and power.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:39:08.926954+00:00",
    "aiReviewedAt": "2026-07-22T07:39:08.926954+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sun_bloom_staff": {
    "id": "isle_delfino_sun_bloom_staff",
    "name": "Sun Bloom Staff",
    "description": "The Sun Bloom Staff exudes a golden radiance that warms the hands of its wielder, crafted from the heartwood of tropical sunflowers and enchanted by the island's ancient magic. Its gentle glow enhances elemental spells with a touch of the tropics, making each cast feel like a sip of fresh nectar. This relic is perfect for those who find their best magic in bright, breezy climes like Isle Delfino, where it was first discovered.",
    "category": "equipment",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% Crit Chance",
      "20% Mana Regen"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Critical Boost",
        "rules": "Activates on spell cast as a bonus action. Grants +10% chance to crit with elemental spells for the duration of one round after activation."
      },
      {
        "title": "Mana Sustenance",
        "rules": "Passive effect: Grants 20% increased mana regeneration while casting elemental magic, lasting until the start of your next turn. This effect can only be activated once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Sun Bloom Staff requires no minimum level as its effects are beneficial enhancements rather than combat-oriented abilities.",
    "vendorReason": "As a relic of Isle Delfino, the staff is naturally found and sold by the island's vendors like Lakitu.",
    "shippingDetail": "Delivered swiftly via Lakitu Drone service, ensuring the staff arrives in pristine condition.",
    "usage": {
      "activation": "Activates as a bonus action on spell cast. Passive effect always active while casting elemental magic.",
      "duration": "Instantaneous for critical boost; passive effect lasts until start of next turn.",
      "endsWhen": "Ends upon completion of the spell or when mana regen is no longer needed.",
      "charges": "Unlimited"
    },
    "priceReason": "The Sun Bloom Staff's price reflects its rarity and utility as a magical enhancement for elemental spells, making it accessible but not cheap.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:39:26.214209+00:00",
    "aiReviewedAt": "2026-07-22T07:39:26.214209+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sun_bloom_torch": {
    "id": "isle_delfino_sun_bloom_torch",
    "name": "Sun Bloom Torch",
    "description": "The Sun Bloom Torch radiates a warm, golden glow that heals allies within its light and enhances their speed. Crafted from rare tropical blossoms and enchanted by Isle Delfino's alchemists, it shines brighter during tropical storms, casting a shimmering aura over darkened paths. Ideal for beach patrols or treasure hunts at night, this torch not only illuminates the way but also heals those who carry it, making it indispensable for adventurers seeking both light and life in the wild.",
    "price": 1300,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Heals nearby allies",
      "Boosts movement speed"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Healing Glow",
        "rules": "The Sun Bloom Torch heals an ally within its radius by restoring 30 hit points per second while active. The effect ends when the torch is extinguished or a creature outside the light moves into it."
      },
      {
        "title": "Swift Steps",
        "rules": "While within the torch's light, creatures have their movement speed increased by 15%. This boost persists as long as they remain in the light. The effect ends if the torch is extinguished or a creature exits the light."
      }
    ],
    "levelRequirementReason": "Crafted from rare materials and enchanted with complex magic, the Sun Bloom Torch requires at least third-level proficiency to wield effectively.",
    "vendorReason": "Isle Delfino's alchemists are renowned for their expertise in crafting magical flora-based items, making it logical that they would offer such a versatile and powerful torch.",
    "shippingDetail": "Quickly delivered by Lakitu Drones, the Sun Bloom Torch is shipped with protective packaging to ensure its delicate enchantments remain intact during transit.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "Instantaneous; continues as long as it remains lit and within reach of an ally",
      "endsWhen": "Extinguished or a creature outside the light moves into it",
      "charges": "Unlimited, recharged by sunlight"
    },
    "priceReason": "The Sun Bloom Torch's rarity, craftsmanship, and magical properties justify its moderate price in terms of experience points.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T19:48:42.611252+00:00",
    "aiReviewedAt": "2026-07-22T19:48:42.611252+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sun_burst_essence": {
    "id": "isle_delfino_sun_burst_essence",
    "name": "Sunburst Essence",
    "description": "The Sunburst Essence is a crystalline fragment that pulses with golden light, emanating warmth and vitality. This tropical energy essence can be consumed to bolster your recovery rate by +50% for 10 seconds, while also granting allies within a 3-meter radius a radiant aura of protection, boosting their defense by +10% for 5 seconds. The visual effect is one of bright sunburst particles dancing around the user, creating an ethereal glow in its wake.",
    "price": 290,
    "icon": "🌞",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Radiant Recovery Boost",
      "Defensive Aura"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Radiant Recovery Boost",
        "rules": "Consume the Sunburst Essence to gain a +50% recovery rate for 10 seconds. This effect is instantaneous upon consumption and lasts until its duration ends."
      },
      {
        "title": "Defensive Aura",
        "rules": "Grants allies within 3 meters of the user a +10% increase in defense for 5 seconds after consuming the essence. The aura ends if an ally leaves this range or if the user consumes another Sunburst Essence."
      }
    ],
    "levelRequirementReason": "The Sunburst Essence is accessible to all adventurers, as it enhances recovery and grants temporary defensive boosts crucial for any combat scenario.",
    "vendorReason": "Isle Delfino's tropical vendors are known for their unique healing and utility items that enhance the capabilities of adventurers exploring sunlit zones.",
    "shippingDetail": "Sunburst Essences are carefully packed in insulated containers to ensure they remain effective until delivery.",
    "usage": {
      "activation": "Eaten as a food-like item.",
      "duration": "10 seconds for recovery boost, 5 seconds for defensive aura.",
      "endsWhen": "Duration ends or user consumes another essence.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Sunburst Essence is priced at 1000 XP due to its unique combination of healing and defensive buffs, which are essential for adventurers in tropical zones.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:40:18.171131+00:00",
    "aiReviewedAt": "2026-07-22T07:40:18.171131+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sun_drenched_bolt": {
    "id": "isle_delfino_sun_drenched_bolt",
    "name": "Sun Drenched Bolt",
    "description": "The Sun Drenched Bolt is a crystalline shard forged from the heart of a tropical sunbeam, encased in a protective sheath of golden light. When unleashed, it fires an intense beam that deals radiant damage and leaves behind a trail of healing light that mends allies within its path. This rare artifact shines brightest in vibrant arenas where its dual purpose as both weapon and healer can truly be appreciated.",
    "category": "equipment",
    "price": 1300,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Radiant Beam",
      "Healing Trail"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Radiant Beam",
        "rules": "When activated, the Sun Drenched Bolt fires a beam of radiant energy that deals 10d6 damage to a single target within 30 feet. The user gains advantage on attack rolls with radiant weapons for the next minute."
      },
      {
        "title": "Healing Trail",
        "rules": "For 5 seconds after firing, any ally moving through or in contact with the beam's trail regains 2d8 hit points. This effect can only occur once per round and does not stack."
      }
    ],
    "levelRequirementReason": "Crafted from the essence of a tropical sunbeam, this artifact requires significant magical energy, making it suitable for those of at least 6th level.",
    "vendorReason": "Known for their expertise in tropical magic and radiant artifacts, Isle Delfino is the premier source for such rare items.",
    "shippingDetail": "Due to its delicate nature, this item must be shipped via Shy Guy Smugglers' specialized magical courier service.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The bolt is expended after use",
      "charges": "Unlimited charges"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the rare and powerful nature of the Sun Drenched Bolt.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T07:40:09.833875+00:00",
    "aiReviewedAt": "2026-07-22T07:40:09.833875+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sun_kissed_shield": {
    "id": "isle_delfino_sun_kissed_shield",
    "name": "Sun Kissed Shield",
    "description": "The Sun Kissed Shield is a gleaming, radiant shield forged from the very essence of a sun-kissed day and enchanted by the playful magic of Shine Sprites. It reflects sunlight attacks with a shimmering flash, granting temporary invincibility during bright skies. The shield's energy pulses in harmony with daylight, enhancing its bearer’s defense and offering a chance to dodge attacks when the sun shines high in the sky.",
    "category": "equipment",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reflects Sunlight Attacks",
      "Daytime Defense Boost"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Reflects Sunlight Attacks",
        "rules": "When an attack uses direct sunlight as a source of damage, the Sun Kissed Shield reflects it with a dazzling flash. This effect grants temporary invincibility to the shield bearer for three turns, during which attacks from that source are negated. The effect ends if the user is no longer in direct sunlight."
      },
      {
        "title": "Daytime Defense Boost",
        "rules": "While under bright skies and during daylight hours, the Sun Kissed Shield increases the bearer's defense by 15%. This bonus does not stack with other sources of defense. The effect ends if the shield is removed from direct sunlight or if the user no longer benefits from a daylit environment."
      }
    ],
    "levelRequirementReason": "The Sun Kissed Shield requires a minimum level to properly harness its celestial magic and withstand its enchanted power.",
    "vendorReason": "Isle Delfino, known for their magical wares, offers the Sun Kissed Shield as a unique item that complements the region's vibrant daylight environment.",
    "shippingDetail": "The shield is carefully packed in a light-proof container to preserve its enchantment during transit.",
    "usage": {
      "activation": "Passive effect activated by direct sunlight; no specific action required.",
      "duration": "3 turns when reflecting sunlight attacks; permanent while under bright skies and daylight hours.",
      "endsWhen": "No longer in direct sunlight or if the bearer is no longer in a daylit environment.",
      "charges": "Unlimited, recharged automatically by exposure to sunlight."
    },
    "priceReason": "The Sun Kissed Shield's rarity and unique properties justify its fair market value of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:40:26.601915+00:00",
    "aiReviewedAt": "2026-07-22T07:40:26.601915+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sun_kissed_spirit": {
    "id": "isle_delfino_sun_kissed_spirit",
    "name": "Sun Kissed Spirit",
    "description": "The Sun Kissed Spirit is a tropical essence that dances with light and wind. When worn on your person, it amplifies your agility in sunlight, allowing you to move swiftly through sandy dunes or lush gardens. Its radiant glow illuminates the path before you, making it an indispensable companion for beachside explorations. In sunlit zones, this essence grants a 15% increase in movement speed and a 20% chance to dodge attacks, ensuring swift escapes when needed.",
    "category": "equipment",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Sunlight Agility",
      "Dodge Chance"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Sunlight Agility",
        "rules": "While within sunlit areas, you gain a +10 bonus to your speed. This effect is active for the duration of your stay in such zones."
      },
      {
        "title": "Dodge Chance",
        "rules": "In sunlit conditions, you have advantage on Dexterity saving throws to dodge attacks and can attempt an additional Dexterity (Acrobatics) check each round to avoid a hit. This effect lasts for 1 minute or until you leave the sunlit area."
      }
    ],
    "levelRequirementReason": "This essence is best suited for those who have begun their journey and are ready to face simple challenges.",
    "vendorReason": "Isle Delfino, a haven of tropical adventures, naturally stocks items that enhance beachside experiences.",
    "shippingDetail": "Delivered by air mail with priority courier services, ensuring the essence remains vibrant upon arrival.",
    "usage": {
      "activation": "Passive effect when in sunlit areas.",
      "duration": "1 minute or until you leave a sunlit area.",
      "endsWhen": "Leaving the sunlit area or if your speed is reduced to 0.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price, considering its utility in tropical environments and beachside adventures.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:40:22.491547+00:00",
    "aiReviewedAt": "2026-07-22T07:40:22.491547+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sun_scent": {
    "id": "isle_delfino_sun_scent",
    "name": "Sun Scent Vial",
    "description": "The Sun Scent Vial is a delicate glass vial filled with a golden mist that shimmers like sunlight filtering through leaves. When shaken, it releases a radiant mist that temporarily enhances your vision and reduces enemy stealth detection within a fifty-foot radius. This vial is crafted by the artisans of Isle Delfino using rare herbs from the sunlit islands, ensuring its effectiveness in revealing hidden dangers and enhancing perception.",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% Vision Range",
      "20% chance to detect hidden enemies"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Vision",
        "rules": "When the Sun Scent Vial is shaken, it grants you advantage on Perception checks within a fifty-foot radius for one minute. This effect ends if you are incapacitated or when the vial's contents dissipate."
      },
      {
        "title": "Stealth Detection",
        "rules": "For one minute after shaking the Sun Scent Vial, you have a 20% chance to notice hidden enemies within fifty feet of you. This effect ends if you are incapacitated or when the vial's contents dissipate."
      }
    ],
    "levelRequirementReason": "The simplicity and elegance of the Sun Scent Vial make it accessible to all adventurers, regardless of their current level.",
    "vendorReason": "Isle Delfino is renowned for its herbal knowledge and crafting skills, making this vial a staple in their inventory.",
    "shippingDetail": "The Pipe Express guarantees swift delivery of the Sun Scent Vial, ensuring it arrives at your doorstep in pristine condition.",
    "usage": {
      "activation": "Standard action to shake and release the mist.",
      "duration": "One minute per use.",
      "endsWhen": "You are incapacitated or when the vial's contents dissipate after one minute.",
      "charges": "Unlimited uses, but requires a short rest to recover."
    },
    "priceReason": "The Sun Scent Vial is crafted with rare ingredients and advanced alchemy techniques, justifying its price in experience points.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:48:54.350249+00:00",
    "aiReviewedAt": "2026-07-22T19:48:54.350249+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunbeam_bottle": {
    "id": "isle_delfino_sunbeam_bottle",
    "name": "Sunbeam Elixir",
    "description": "The Sunbeam Elixir is a shimmering amber vial, its contents swirling with captured golden light from the heart of Isle Delfino's sun-drenched skies. This elixir not only restores half of your maximum Hit Points but also grants you temporary immunity to darkness effects, allowing you to navigate even the deepest shadows unscathed for ten seconds. As if by magic, it enhances your attacks involving light sources, increasing their damage by 15% for thirty seconds.",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Restores HP",
      "Immunity to Darkness"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Glow",
        "rules": "When consumed as a bonus action, the Sunbeam Elixir restores half of your maximum Hit Points and grants immunity to darkness effects for ten seconds. This effect ends if you take any damage or when the duration expires."
      },
      {
        "title": "Luminous Strike",
        "rules": "For thirty seconds after imbibing the elixir, all attacks dealing light-based damage are increased by 15%. This enhancement is lost if you use a full action to attack with a weapon that deals light damage or when the duration expires."
      }
    ],
    "levelRequirementReason": "The Sunbeam Elixir's potent effects make it accessible early in your adventuring career, ensuring even novices can benefit from its power.",
    "vendorReason": "Isle Delfino is renowned for its natural magic and healing waters, making it fitting that this elixir originates here.",
    "shippingDetail": "Ships via Boo Spectral Mail, known for their timely deliveries even in the most challenging weather conditions.",
    "usage": {
      "activation": "Bonus action to consume and gain effects.",
      "duration": "Ten seconds of immunity to darkness; thirty seconds of increased light-based damage.",
      "endsWhen": "Effect ends if you take any damage or when the duration expires.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Sunbeam Elixir's rarity and potent effects justify its price, offering significant healing and combat advantages at a fair cost.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:41:30.333205+00:00",
    "aiReviewedAt": "2026-07-22T07:41:30.333205+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunbeam_cape": {
    "id": "isle_delfino_sunbeam_cape",
    "name": "Sunbeam Cape of the Toad King",
    "description": "The Sunbeam Cape of the Toad King is a shimmering cloak woven from the captured sunlight of Shining Isle. Its fabric glows with an ever-present golden radiance, casting a dazzling glow upon its wearer and those nearby. This cape not only enhances the wearer's attacks against dark foes but also creates a protective barrier that reduces enemy damage by 10%, leaving them momentarily stunned under its bright light.",
    "category": "equipment",
    "price": 1300,
    "icon": "🌞",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Sunlight Buff",
      "Darkness Resistance"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Sunlight Buff",
        "rules": "When activated, this cape grants the wearer a +2 bonus to attack rolls and damage against dark-aligned enemies. The effect lasts for 1 minute."
      },
      {
        "title": "Darkness Resistance",
        "rules": "While wearing the cape, you have advantage on saving throws against being charmed or frightened by creatures of darkness. Additionally, any creature that starts its turn within 5 feet of you must make a DC 14 Dexterity saving throw or be blinded for 1 minute."
      }
    ],
    "levelRequirementReason": "The cape requires a minimum level to ensure it doesn't overshadow the abilities of lower-level adventurers.",
    "vendorReason": "Isle Delfino, known for its magical artifacts, naturally carries this item from their mystical isles.",
    "shippingDetail": "The cape arrives within a week, delivered by the Void Drifters in pristine condition.",
    "usage": {
      "activation": "A bonus action to activate and maintain the effects of the cape.",
      "duration": "1 minute per activation; ends if you drop the cape or are incapacitated.",
      "endsWhen": "The wearer drops it, is incapacitated, or the duration expires.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its powerful yet not overpowered effect in gameplay.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:40:38.327679+00:00",
    "aiReviewedAt": "2026-07-22T07:40:38.327679+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunbeam_satchel": {
    "id": "isle_delfino_sunbeam_satchel",
    "name": "Sunbeam Satchel",
    "description": "The Sunbeam Satchel gleams with a vibrant, golden light that seems to draw warmth from the very air of the Fractured Atrium. Crafted by the artisans of Isle Delfino, it weaves tropical energy into its fabric, subtly enhancing the wearer's speed and shielding them against the harsh environmental hazards that plague this unstable realm. When worn, its glow becomes a beacon in shadowy corridors, revealing hidden paths that others might miss.",
    "category": "equipment",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Speed Boost",
      "Environmental Shield"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "When activated as a bonus action, the Sunbeam Satchel enhances the wearer's speed by +15% for 1 hour. The effect ends if the wearer is incapacitated or if they remove the satchel."
      },
      {
        "title": "Environmental Shield",
        "rules": "The satchel reduces damage from environmental hazards, such as extreme heat or cold, by 30%. This benefit lasts for 1 hour and is negated if the wearer enters an environment with a significantly different hazard level."
      }
    ],
    "levelRequirementReason": "The Sunbeam Satchel's intricate design requires a minimum of two levels to properly harness its tropical energies.",
    "vendorReason": "Isle Delfino is renowned for its craftsmanship and understanding of the Fractured Atrium, making it the ideal vendor for such an artifact.",
    "shippingDetail": "Shipped via Lakitu Drones' express service, ensuring timely delivery through the unpredictable Fractured Atrium skies.",
    "usage": {
      "activation": "Bonus action to activate; can be used once per long rest.",
      "duration": "1 hour or until wearer is incapacitated or removes the satchel.",
      "endsWhen": "The effect ends if the wearer becomes incapacitated, removes the satchel, or completes a long rest without using it again.",
      "charges": "Unlimited uses between long rests."
    },
    "priceReason": "Crafted with rare materials and intricate design work, the Sunbeam Satchel is priced at 1000 XP to reflect its unique benefits and limited availability in the Fractured Atrium.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:49:09.041102+00:00",
    "aiReviewedAt": "2026-07-22T19:49:09.041102+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunbeam_shard": {
    "id": "isle_delfino_sunbeam_shard",
    "name": "Sunbeam Shard of the Delfino Dawn",
    "description": "The Sunbeam Shard of the Delfino Dawn is a radiant crystal that glows with the light of dawn, emanating a soft yet piercing radiance. It grants temporary sight in dim environments and weakens shadowy creatures, making them more vulnerable to your attacks. With each use, you can enhance your vision by 10%, up to +30% visibility, and reduce shadow creature damage by 20%. The crystal’s light also grants a fleeting boost to your speed, allowing you to move faster for a short time.",
    "category": "equipment",
    "price": 1300,
    "icon": "📦",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Enhances Vision in Dim Environments",
      "Weakens Shadow Creatures"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Visibility",
        "rules": "Activate as a bonus action. You gain temporary vision enhancement in dim light, increasing your vision by +10% for every use up to a maximum of +30%. This effect ends when you rest or the duration expires."
      },
      {
        "title": "Shadow Weakness",
        "rules": "While within 60 feet of the shard, any shadow creature within range takes an additional 20% damage from your attacks. Ends when you move more than 30 feet away from it."
      }
    ],
    "levelRequirementReason": "The crystal’s light is potent but not overwhelming.",
    "vendorReason": "As a beacon of the Delfino Dawn, Isle Delfino ensures its citizens have access to such magical artifacts.",
    "shippingDetail": "The shard is carefully transported using the Rakasha Spirit Walk, ensuring it arrives intact and glowing with power.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 hour per use",
      "endsWhen": "Resting or moving more than 30 feet away from the shard",
      "charges": "Unlimited"
    },
    "priceReason": "The crystal’s rarity and unique properties justify a price of 1000 XP.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T07:40:51.705077+00:00",
    "aiReviewedAt": "2026-07-22T07:40:51.705077+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunbeam_shield": {
    "id": "isle_delfino_sunbeam_shield",
    "name": "Sunbeam Shield of the Shine Sprite",
    "description": "The Sunbeam Shield of the Shine Sprite gleams with a radiant translucence, its surface shimmering like liquid sunlight. Crafted from the polished shells of tropical sea creatures and imbued with the essence of a gleeful sprite, this shield not only deflects elemental attacks but also amplifies your defenses under the warmth of the sun. When sunlight is present, it grants you a 10% chance to dodge your next attack, and any incoming damage can be partially reflected as vibrant energy orbs that pulse around you.",
    "category": "equipment",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% defense against elemental attacks",
      "10% chance to dodge next attack when sunlight is present"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Solar Defense Boost",
        "rules": "While under the influence of direct sunlight, this shield provides a +30% increase in your defense against all elemental attacks. This effect lasts for 1 minute and ends if you leave an area with bright sunlight or are incapacitated."
      },
      {
        "title": "Sun-Dodging Chance",
        "rules": "When sunlight is present, there is a 10% chance that the next attack directed at you will be dodged. This effect has no save DC and can only trigger once per short rest."
      }
    ],
    "levelRequirementReason": "The shield's intricate enchantments require a minimum of 5th-level spellcasting to properly harness its solar magic.",
    "vendorReason": "Isle Delfino is renowned for its connection with the natural world, making it the ideal vendor for this magical shield.",
    "shippingDetail": "The shipment arrives via a swift, floating courier who ensures the shield's delicate enchantments are preserved during transit.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "1 minute, or until the user leaves an area with bright sunlight or becomes incapacitated.",
      "endsWhen": "Leaving a brightly sunlit area or becoming incapacitated.",
      "charges": "Unlimited"
    },
    "priceReason": "The shield's rare materials and intricate enchantments justify its price, making it an exquisite addition to any adventurer's inventory.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:41:22.060018+00:00",
    "aiReviewedAt": "2026-07-22T07:41:22.060018+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunbeam_shirt": {
    "id": "isle_delfino_sunbeam_shirt",
    "name": "Sunbeam Shirt of the Fractured Atrium",
    "description": "The Sunbeam Shirt of the Fractured Atrium is woven from threads of fractured sunlight and shadow. Its shimmering fabric emits a constant, radiant glow that dances like stardust in the wind. When worn under sunlight, you gain temporary light resistance and a dazzling aura that blinds foes within 30 feet for one minute. The shirt's core, forged from the remnants of an ancient atrium, grants +20% to Light Resistance and +10% Attack Speed during daylight hours.",
    "category": "equipment",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% Light Resistance",
      "Blind Enemies Within 30 Feet"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Radiant Glow",
        "rules": "You gain temporary light resistance equal to +20%. This effect lasts for one hour and requires no activation. While in sunlight, you also have a dazzling aura that blinds all creatures within 30 feet of you for one minute on the start of your turn, provided you aren't incapacitated."
      },
      {
        "title": "Shadow Resistance",
        "rules": "When facing enemies with shadow or darkness traits, you gain +5% to Critical Hit Chance. This effect is passive and always active while wearing the shirt."
      }
    ],
    "levelRequirementReason": "This item's effects are designed for adventurers just starting their journey.",
    "vendorReason": "Isle Delfino specializes in unique, enchanted clothing that suits travelers venturing into the light and shadow realms.",
    "shippingDetail": "Ships via Pipe Express within three days, ensuring your attire is pristine for its intended use.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until you remove the shirt or it breaks down in sunlight.",
      "endsWhen": "The effects end when you are no longer exposed to sunlight.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the item's unique enchantments and its rarity, making it a valuable addition for adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:41:39.521670+00:00",
    "aiReviewedAt": "2026-07-22T07:41:39.521670+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunbeam_sip": {
    "id": "isle_delfino_sunbeam_sip",
    "name": "Sunbeam Sip",
    "description": "A shimmering glass vial that captures a fleeting ray of the Isle Delfino sun, the Sunbeam Sip is said to be crafted by the very hands of the Shine Sprites themselves. Drinking this essence restores your spirits and momentarily enhances your combat prowess, making it an indispensable companion for adventurers facing relentless foes along the coastal paths. The sip not only boosts morale but also grants a brief respite from the battle's harshness, allowing you to regain focus and strength.",
    "price": 290,
    "icon": "🍹",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+15% attack power for 10 seconds",
      "25% chance of dodging next enemy melee attack"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Boosted Attack Power",
        "rules": "Upon consumption, the drinker gains a +15 bonus to their attack rolls for 10 seconds. This effect is instantaneous and cannot be repeated within one long rest."
      },
      {
        "title": "Enhanced Dodge Chance",
        "rules": "The drinker has a 25% chance of dodging the next melee attack made against them after drinking this vial. This effect triggers only once per battle, regardless of how many times they are attacked."
      }
    ],
    "levelRequirementReason": "This refreshing beverage is designed for all adventurers and requires no minimum level to consume.",
    "vendorReason": "The Isle Delfino, known for its magical waters and the presence of Shine Sprites, naturally sells items imbued with their essence.",
    "shippingDetail": "Due to the perishable nature of the drink, it is shipped within a specially cooled container to ensure freshness upon arrival.",
    "usage": {
      "activation": "Consume as an action",
      "duration": "10 seconds",
      "endsWhen": "The effect concludes after 10 seconds or if the drinker takes any damage during its duration",
      "charges": "Unlimited, but only one sip can be consumed per battle"
    },
    "priceReason": "Balanced to provide a significant combat boost without being overpowered, this item is priced fairly for its utility.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T07:42:06.877255+00:00",
    "aiReviewedAt": "2026-07-22T07:42:06.877255+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunbeam_sprout": {
    "id": "isle_delfino_sunbeam_sprout",
    "name": "Sunbeam Sprout",
    "description": "The Sunbeam Sprout is a vibrant, glowing plant that thrives in tropical waters, its leaves shimmering like sunlight on the sea's surface. When planted near water, it not only restores minor wounds but also attracts the playful Shine Sprites, whose ethereal glow adds an extra layer of protection and agility to your party. The sprout’s light is so serene that it can be used as a beacon for lost mariners or simply enjoyed during lulls in combat.",
    "price": 290,
    "icon": "🌞",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Restores Health",
      "Attracts Shine Sprites"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Health",
        "rules": "When consumed, the Sunbeam Sprout restores 20 hit points to a creature. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Attract Shine Sprites",
        "rules": "For 10 seconds, the sprout attracts one Shine Sprite, which grants +10% attack speed to nearby allies within a 15-foot radius. The sprite remains until it is dismissed by an action or leaves on its own."
      }
    ],
    "levelRequirementReason": "The Sunbeam Sprout's gentle nature and straightforward mechanics make it accessible to even the most novice adventurers.",
    "vendorReason": "Isle Delfino is renowned for its lush tropical landscapes, making it the perfect vendor for items that thrive in such environments.",
    "shippingDetail": "Shipped directly from the island's botanical gardens; delivery can be delayed by unpredictable ocean currents.",
    "usage": {
      "activation": "Instantaneous (no action required)",
      "duration": "Instantaneous for health restoration, 10 seconds for attracting Shine Sprites",
      "endsWhen": "Dismissed or lasts until its effect ends",
      "charges": "Unlimited"
    },
    "priceReason": "The Sunbeam Sprout's rarity and the unique benefits it offers, including health restoration and temporary buffs from Shine Sprites, justify its moderate price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:41:56.370931+00:00",
    "aiReviewedAt": "2026-07-22T07:41:56.370931+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunbeam_syringe": {
    "id": "isle_delfino_sunbeam_syringe",
    "name": "Sunbeam Syringe",
    "description": "The Sunbeam Syringe is a vial of pure golden light, its surface etched with intricate patterns that shimmer under candlelight. When injected, this syringe grants you and your allies a burst of vitality, restoring 15% of your health while imbuing you with the strength of a midday sun. For three turns thereafter, all magic-based attacks you or your companions make gain +5%, shining with an ethereal glow that repels shadows in its wake.",
    "price": 290,
    "icon": "🔮",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Restores Health",
      "Enhances Magic Attacks"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Surge",
        "rules": "When injected, this syringe restores up to 15% of the user's maximum hit points. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Solar Might",
        "rules": "For three turns, all magic-based attacks made by the user or their allies gain a +5 bonus to attack rolls until the start of your next turn. If you are reduced to 0 hit points while this effect is active, it ends immediately."
      }
    ],
    "levelRequirementReason": "This syringe provides immediate health and combat buffs that can be used by any adventurer regardless of their level.",
    "vendorReason": "Known for their herbal remedies, Isle Delfino is a trusted source for such restorative potions and syringes.",
    "shippingDetail": "Delivered by spectral couriers who ensure the syringe's golden light never fades during transit.",
    "usage": {
      "activation": "Instantaneous use, requires an injection.",
      "duration": "Three turns or until reduced to 0 hit points.",
      "endsWhen": "Reduced to 0 hit points or the duration ends.",
      "charges": "Unlimited"
    },
    "priceReason": "The syringe's rare ingredients and unique formula justify its price, providing immediate and potent benefits.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:42:16.145230+00:00",
    "aiReviewedAt": "2026-07-22T07:42:16.145230+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunbeam_torch": {
    "id": "isle_delfino_sunbeam_torch",
    "name": "Sunbeam Torch of the Delfino Dusk",
    "description": "The Sunbeam Torch of the Delfino Dusk glows with a golden light, casting an inviting warmth that illuminates the twilight reefs. When ignited, it emits a burst of sunlight that heals allies within its reach and temporarily blights nearby shadows. Crafted from Delfino's sacred coral and enchanted by the island’s master artisans, this torch not only guides through the dark but also protects those who wield it against the creeping shadows of night.",
    "category": "equipment",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Sunlight Burst",
      "Shadow Blight"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Spectral Wind Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sunlight Burst",
        "rules": "When activated as a bonus action, this torch emits a burst of sunlight within a 5-meter radius, healing all allies within the area for 10 hit points. The effect lasts for 3 seconds and can be used once every short or long rest."
      },
      {
        "title": "Shadow Blight",
        "rules": "For 6 seconds after activation, this torch reduces the movement speed of any shadow-based enemies by 5 feet and grants immunity to all Shadow damage. This effect can only be triggered once per day."
      }
    ],
    "levelRequirementReason": "This torch is designed for adventurers just starting their journey into the twilight reefs, offering a helpful tool without requiring high-level expertise.",
    "vendorReason": "The island’s artisans are renowned for crafting tools that enhance navigation and safety in Delfino's dangerous waters.",
    "shippingDetail": "Ships via the Spectral Wind Courier, ensuring safe delivery through even the darkest seas.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous (Sunlight Burst) / 6 seconds (Shadow Blight)",
      "endsWhen": "Effect duration expires or the torch is extinguished",
      "charges": "1 use per day"
    },
    "priceReason": "Crafted from sacred coral and imbued with powerful magic, this torch represents a significant investment for any adventurer.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:42:47.905014+00:00",
    "aiReviewedAt": "2026-07-22T07:42:47.905014+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunbeard_mask": {
    "id": "isle_delfino_sunbeard_mask",
    "name": "Sunbeard Mask",
    "description": "The Sunbeard Mask is a rare coral carving, its surface etched with ancient runes that shimmer under the island's relentless sun. Crafted from the sacred coral trees of Delfino Isle, this mask allows wearers to blend into their surroundings, becoming undetectable by enemies when the noonday light is at its peak. The mask not only grants temporary invisibility but also subtly reduces physical strain during combat, conserving stamina for those who wield it in prolonged battles.",
    "category": "equipment",
    "price": 1300,
    "icon": "🌞",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Invisibility under bright daylight",
      "Reduces stamina drain"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility under Bright Daylight",
        "rules": "The wearer becomes invisible to all creatures within 30 feet during the noon sun. This effect lasts for a duration of 1 minute, starting when the user finishes their action and ending either when the conditions that triggered it are no longer met or at the end of its duration."
      },
      {
        "title": "Reduced Stamina Drain",
        "rules": "While wearing this mask in combat, the wearer's stamina drain is reduced by 20%. This effect persists as long as the user remains within a bright daylight condition and ends when either the conditions change or at the end of its duration."
      }
    ],
    "levelRequirementReason": "This mask requires no level, making it accessible to all adventurers seeking to blend into their environment.",
    "vendorReason": "Isle Delfino is renowned for its unique craftsmanship and this mask's origin ensures it is a staple in the vendor's offerings.",
    "shippingDetail": "The mask is carefully packed to preserve its delicate coral structure during transit, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Activates as an action when the user completes a move or attack action under bright daylight conditions.",
      "duration": "1 minute duration starting at the end of their action.",
      "endsWhen": "Conditions that trigger invisibility are no longer met, or at the end of its 1-minute duration.",
      "charges": "Unlimited"
    },
    "priceReason": "The mask's unique material and craftsmanship justify a price of 1000 XP, reflecting its rarity and utility.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T07:42:25.229494+00:00",
    "aiReviewedAt": "2026-07-22T07:42:25.229494+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunbloom_bottle": {
    "id": "isle_delfino_sunbloom_bottle",
    "name": "Sunbloom Bottle",
    "description": "The Sunbloom Bottle glows with a soft, golden light that seems to dance in harmony with the sunlight. When uncorked, its nectar restores vitality and fills the air with the sweet scent of blooming delfino sunflowers. Each sip grants you an extra burst of strength, as if the very essence of the sun has been captured within. The bottle's glow intensifies with each use, attracting rare Shine Sprites who linger at your side, ready to aid in your next adventure.",
    "price": 290,
    "icon": "📦",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Summons a Shine Sprite upon consumption",
      "Restores 20% of maximum HP"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shine Sprite Summon",
        "rules": "When consumed, the Sunbloom Bottle releases a burst of golden light that summons a friendly Shine Sprite. The sprite remains for 1 minute, providing minor healing and granting advantage on Insight checks made to detect deception. This effect has no save DC and can only occur once per short or long rest."
      },
      {
        "title": "Healing Nectar",
        "rules": "Sipping from the Sunbloom Bottle restores 20% of your maximum hit points, but this effect can be used only once every long rest. The bottle's glow intensifies with each use, becoming more vibrant and potent."
      }
    ],
    "levelRequirementReason": "The Sunbloom Bottle is crafted for those just embarking on their adventures to restore vitality quickly.",
    "vendorReason": "Isle Delfino, known for its natural wonders and healing herbs, naturally stocks the Sunbloom Bottle as a symbol of its care for travelers.",
    "shippingDetail": "Delivered with swift precision by the Rakasha Spirit Walk, ensuring the nectar remains potent upon arrival.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "Instantaneous; Shine Sprite lasts for 1 minute",
      "endsWhen": "After use or if consumed again before a long rest",
      "charges": "Unlimited, with one use per long rest"
    },
    "priceReason": "The Sunbloom Bottle's rarity and the unique healing it provides justify its price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:42:34.981917+00:00",
    "aiReviewedAt": "2026-07-22T07:42:34.981917+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunbloom_flask": {
    "id": "isle_delfino_sunbloom_flask",
    "name": "Sunbloom Flask",
    "description": "The Sunbloom Flask is a vial of nectar harvested from the rare and sunlit flowers found only on Isle Delfino's southernmost peak. This elixir not only restores vitality, healing 250 hit points upon consumption, but also grants temporary immunity to the scorching heat that plagues the island’s sun-drenched shores for a brief 10 seconds. It is said that the nectar captures the essence of the island's eternal daylight, making it a perfect companion for adventurers navigating the island's most intense zones.",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Restores Vitality",
      "Immunity to Sunburn"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Vitality",
        "rules": "Consume this flask to heal up to 250 hit points. This effect is instantaneous and can only be used once per long rest."
      },
      {
        "title": "Immunity to Sunburn",
        "rules": "Gain temporary immunity to the effects of sunburn for a duration of 10 seconds upon activation. This immunity cannot be extended, and it has no save DC or other limitations."
      }
    ],
    "levelRequirementReason": "This item is suitable for adventurers of all levels, making it an essential tool for navigating the island’s harsh conditions.",
    "vendorReason": "The vendor at Isle Delfino has exclusive access to these rare nectars due to their natural habitat on the island's peak.",
    "shippingDetail": "Ships via Pipe Express, ensuring safe and timely delivery straight from the heart of the island.",
    "usage": {
      "activation": "Consume as a bonus action.",
      "duration": "Instantaneous for Restore Vitality; 10 seconds immunity to sunburn upon activation.",
      "endsWhen": "Expires after its duration or when consumed, whichever comes first.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Sunbloom Flask's price reflects the rarity of its components and the unique healing properties it provides to adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:42:44.228770+00:00",
    "aiReviewedAt": "2026-07-22T07:42:44.228770+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunbloom_shield": {
    "id": "isle_delfino_sunbloom_shield",
    "name": "Sunbloom Shield",
    "description": "The Sunbloom Shield is a radiant, tropical shield made from the vibrant petals of the Sunbloom Orchid, a plant that thrives only in Isle Delfino's sun-drenched jungles. Its surface glows with a soft, golden light, and when struck by an enemy attack, it emits a dazzling flash that stuns foes for one turn, leaving them dazed and disoriented. The shield's aura also subtly reduces the speed of nearby enemies, making their movements sluggish and less precise.",
    "category": "equipment",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stun on Hit",
      "Reduced Enemy Speed"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stun on Hit",
        "rules": "When an attacker strikes this shield with a melee or ranged physical attack, the target is stunned for 1 turn. The effect ends if the target takes any additional damage or moves to a new location."
      },
      {
        "title": "Reduced Enemy Speed",
        "rules": "For every enemy within 5 feet of the user, their movement speed is reduced by 30% for 1 minute. This effect lasts until the end of the user's next turn or if an enemy moves more than 10 feet away."
      }
    ],
    "levelRequirementReason": "The shield requires minimal dexterity to wield and is designed for adventurers at any starting level.",
    "vendorReason": "Isle Delfino's artisans are renowned for crafting items from local flora, making the Sunbloom Shield a staple of their inventory.",
    "shippingDetail": "The shield is carefully packed in a custom tropical box to maintain its vibrant glow and protect it during transport.",
    "usage": {
      "activation": "Instantaneous on hit by any melee or ranged physical attack.",
      "duration": "Stun lasts for 1 turn, reduced speed effect lasts for 1 minute.",
      "endsWhen": "Target takes additional damage or moves more than 10 feet away; the shield's aura ends at the end of the user's next turn.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Sunbloom Shield’s rarity and unique enchantments justify its price, offering a balance between physical defense and area-of-effect debuffs.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:42:56.466739+00:00",
    "aiReviewedAt": "2026-07-22T07:42:56.466739+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunbloom_spray": {
    "id": "isle_delfino_sunbloom_spray",
    "name": "Sunbloom Spray",
    "description": "The Sunbloom Spray exudes a vibrant mist of tropical flora, its shimmering droplets glowing like stardust under the sun's golden rays. This potion not only boosts morale by 20% for three turns but also grants a temporary increase in speed, making you feel as light and swift as the island breezes. Enemies caught in its spray must endure a minor sunburn that reduces their movement speed by 10 feet for one turn.",
    "price": 290,
    "icon": "🌞",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Sunburn",
      "Boosted Morale"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Sunburn",
        "rules": "Enemies within 5 feet of the user must make a DC 12 Dexterity saving throw or take 3 (1d6) radiant damage and have their movement speed reduced by 10 feet for 1 turn. This effect ends immediately upon taking damage."
      },
      {
        "title": "Boosted Morale",
        "rules": "All allies within 10 feet gain a +2 bonus to saving throws and ability checks, lasting for 3 turns. This effect does not stack with other morale-boosting effects."
      }
    ],
    "levelRequirementReason": "This spray is designed for adventurers who are just starting their journey and need an immediate morale boost.",
    "vendorReason": "Isle Delfino specializes in tropical goods, including this vibrant and invigorating potion.",
    "shippingDetail": "Pipe Express ensures quick delivery via the island's wind currents, guaranteeing your Sunbloom Spray arrives freshly activated.",
    "usage": {
      "activation": "A bonus action to activate.",
      "duration": "Instantaneous effect; lasts for its duration unless dispelled or interrupted.",
      "endsWhen": "The effects end when the user takes damage or is incapacitated.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This Sunbloom Spray offers a balanced mix of utility and combat advantage, making it a valuable resource for adventurers without being overpowered.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T19:49:05.533552+00:00",
    "aiReviewedAt": "2026-07-22T19:49:05.533552+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunbloom_sprout": {
    "id": "isle_delfino_sunbloom_sprout",
    "name": "Sunbloom Sprout",
    "description": "The Sunbloom Sprout is a radiant tropical plant that exudes an aura of warmth and vitality. When planted, it fills the air with a golden light, enhancing both the body's resilience and its mobility. Upon activation, it grants temporary haste to the wielder, boosting movement speed by 15% for 10 seconds, and when consumed, it offers a swift recovery, restoring 25% of maximum hit points. This vibrant sprout is native to the sun-drenched shores of Isle Delfino, where it thrives in the balmy climate.",
    "price": 290,
    "icon": "🌞",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Haste",
      "Healing"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Haste",
        "rules": "Activates on a bonus action. The user gains a +15% increase to movement speed for 10 seconds. This effect ends if the user takes damage or casts a spell."
      },
      {
        "title": "Healing",
        "rules": "Eaten as an action, providing instantaneous restoration of 25% of the user's maximum hit points. The sprout can only be consumed once every long rest."
      }
    ],
    "levelRequirementReason": "This item is accessible to lower-level adventurers who need quick bursts of vitality and speed.",
    "vendorReason": "Isle Delfino is renowned for its lush gardens and natural remedies, making it the perfect vendor for this sun-soaked plant.",
    "shippingDetail": "The sprout is carefully packaged to preserve its vibrant glow during transit.",
    "usage": {
      "activation": "Bonus action (Haste) or as an action (Healing)",
      "duration": "10 seconds for Haste, instantaneous for Healing",
      "endsWhen": "On damage, spellcasting, or consuming the sprout again",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects its rarity and utility in providing both speed and healing.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:43:00.525702+00:00",
    "aiReviewedAt": "2026-07-22T07:43:00.525702+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunbloom_sword": {
    "id": "isle_delfino_sunbloom_sword",
    "name": "Sunbloom Sword of the Shine Sprite",
    "description": "The Sunbloom Sword of the Shine Sprite is a radiant blade that glows with the essence of tropical luminescence. Its hilt is wrapped in woven sunlight, and its edge shimmers like the morning dew on golden leaves. This weapon not only slices through shadows but also projects a cheerful chime that can stun foes with a critical hit. Enemies struck by this sword are left feeling light-hearted, moving at a slower pace as if dancing to an unseen tune.",
    "category": "equipment",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Cheerful Stun",
      "Sunny Mood"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Cheerful Stun",
        "rules": "When you score a critical hit with this sword, there is a 20% chance to stun the target for one turn. This effect has no save DC and does not consume charges."
      },
      {
        "title": "Sunny Mood",
        "rules": "Whenever an enemy is struck by this sword, they are inflicted with a 'Sunny Mood' that reduces their movement speed by 30% until the end of their next turn. This effect can be triggered multiple times per day."
      }
    ],
    "levelRequirementReason": "This sword requires a minimum level to wield its radiant energy and channel the essence of the Shine Sprite.",
    "vendorReason": "Isle Delfino is known for its connection with nature and whimsical magic, making it fitting that they stock this enchanted blade.",
    "shippingDetail": "Delivered by Lakitu drones, the sword arrives encased in a glowing light show, enhancing the joy of receiving such an item.",
    "usage": {
      "activation": "Instantaneous effect when scoring a critical hit or upon contact with an enemy.",
      "duration": "One turn for each effect",
      "endsWhen": "The target's turn ends or they are no longer within range",
      "charges": "Unlimited"
    },
    "priceReason": "The sword’s balanced price reflects its unique abilities to stun and debuff foes while maintaining a joyful tone.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:43:06.003511+00:00",
    "aiReviewedAt": "2026-07-22T07:43:06.003511+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunburst_scepter": {
    "id": "isle_delfino_sunburst_scepter",
    "name": "Sunburst Scepter of the Shine Sprite",
    "description": "The Sunburst Scepter of the Shine Sprite pulses with vibrant, tropical energy that crackles like a midday sunbeam. This radiant staff not only enhances the wielder's attack speed by +10% but also summons a shimmering sprite companion who deals an additional 50% damage to enemies. The sprite dances around, distracting foes and delivering precise strikes. Its light is said to have been forged from the very essence of Delfino Isle’s sunlit waves.",
    "category": "equipment",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% Attack Speed",
      "Summons a Shine Sprite Companion"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Radiant Boosts",
        "rules": "Activates on command as a bonus action. The effect lasts until the end of your next turn. You gain +10% to attack speed and are considered proficient in all ranged weapon attacks for this duration."
      },
      {
        "title": "Shine Sprite Companion",
        "rules": "Summons a sprite that joins you in combat. The sprite deals an additional 50% damage on its attacks against targets within 30 feet of it. This effect lasts until the end of your next turn, and the sprite disappears at the start of your next turn."
      }
    ],
    "levelRequirementReason": "This scepter is crafted for adventurers who are just beginning their journey, ensuring even novices can benefit from its tropical magic.",
    "vendorReason": "The Isle of Delfino's artisans have long been known to fuse local flora and fauna into magical items, making this scepter a perfect addition to the vendor’s collection.",
    "shippingDetail": "Shipped via Pipe Express with express delivery within one week of purchase.",
    "usage": {
      "activation": "Bonus action for radiant boosts; reaction to summon a Shine Sprite companion when an ally is hit by an attack.",
      "duration": "Instantaneous",
      "endsWhen": "At the start of your next turn, or if you take a short rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the item's balance between utility and rarity, ensuring it remains a valuable yet attainable option for adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:43:27.676933+00:00",
    "aiReviewedAt": "2026-07-22T07:43:27.676933+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunken_tide_talisman": {
    "id": "isle_delfino_sunken_tide_talisman",
    "name": "Sunken Tide Talisman",
    "description": "The Sunken Tide Talisman pulses with the ancient power of drowned ruins, its emerald core glowing faintly as it draws strength from the ocean's depths. Worn by Shine Sprite scouts, this relic grants a swim speed bonus and enhances damage against aquatic foes, but those who wear it too long in water risk succumbing to a minor drowning effect. This talisman unlocks hidden underwater paths in the Midlands and allows its bearer to navigate submerged ruins with ease, all while maintaining a connection to the ocean's ancient secrets.",
    "category": "equipment",
    "price": 290,
    "icon": "🌊",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Enhanced Aquatic Combat",
      "Swim Speed Bonus"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Paratroopa Air Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Aquatic Combat",
        "rules": "While wearing this talisman underwater, you gain a +1 bonus to attack rolls and damage against aquatic creatures. This effect lasts for as long as the wearer remains in water but ends if they leave the water or are knocked unconscious."
      },
      {
        "title": "Swim Speed Bonus",
        "rules": "When wearing this talisman underwater, you gain a +2 bonus to your swimming speed. This benefit is active while submerged and lasts until you exit the water or lose consciousness."
      }
    ],
    "levelRequirementReason": "This relic’s power aligns with beginners who are just learning to navigate aquatic environments.",
    "vendorReason": "Isle Delfino is renowned for its nautical heritage and connection to the ocean, making it a logical vendor for this relic.",
    "shippingDetail": "The talisman is carefully packed in waterproof containers to ensure safe delivery through Paratroopa's air routes.",
    "usage": {
      "activation": "Passive effect when worn underwater, no activation required.",
      "duration": "Instantaneous while submerged; ends if the wearer exits water or loses consciousness.",
      "endsWhen": "Exhausted after extended wear in water.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The talisman's rarity and unique aquatic-focused abilities justify its price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:44:00.256196+00:00",
    "aiReviewedAt": "2026-07-22T07:44:00.256196+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunset_cape": {
    "id": "isle_delfino_sunset_cape",
    "name": "Sunset Cape of the Drowned Flame",
    "description": "The Sunset Cape of the Drowned Flame weaves the fiery glow of a setting sun into its fabric, casting an ambient warmth that enhances your agility and resilience on the battlefield. Crafted from the remnants of ancient drowned flames, this caped cloak not only absorbs enemy fire but also grants you unmatched speed in low-light conditions, making you a formidable force to flank or escape with. The cape's absorbed damage is redirected into a protective barrier, bolstering your defense during critical moments.",
    "category": "equipment",
    "price": 5500,
    "icon": "🌅",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Absorbs and redirects incoming damage",
      "Enhances agility in low-light environments"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Damage Absorption and Redirect",
        "rules": "When you take damage from a creature, the cape absorbs up to 20% of that damage. The absorbed damage is redirected as a barrier that lasts for 1 minute or until expended. This effect has no save DC but can be used once per short rest."
      },
      {
        "title": "Agility Boost in Low-Light",
        "rules": "While in low-light conditions, you gain a +20 foot bonus to your movement speed and have advantage on Dexterity (Stealth) checks. This effect is passive while the cape is worn but can only be used once per short rest."
      }
    ],
    "levelRequirementReason": "The complex magic woven into the cape requires a high level of proficiency in stealth and combat to wield effectively.",
    "vendorReason": "Islé Delfíno, known for its unique and powerful artifacts, has long been associated with this enchanted garment.",
    "shippingDetail": "Ships via a rare Rakasha spirit courier, ensuring swift delivery but requiring a special ritual upon arrival.",
    "usage": {
      "activation": "Passive effect while worn; requires no activation.",
      "duration": "Instantaneous absorption; lasts for 1 minute or until expended.",
      "endsWhen": "The barrier dissipates after 1 minute of continuous use or when the cape is removed.",
      "charges": "Unlimited, recharges on a short rest."
    },
    "priceReason": "Crafted from ancient elements and imbued with powerful defensive magic, the cape's rarity and utility justify its fair price in XP.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-22T07:43:37.132982+00:00",
    "aiReviewedAt": "2026-07-22T07:43:37.132982+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunset_reflection_ammunition": {
    "id": "isle_delfino_sunset_reflection_ammunition",
    "name": "Sunset Reflection Ammunition",
    "description": "Sunset Reflection Ammunition consists of three glowing arrows that mimic the vibrant hues and dazzling light of a setting sun, perfect for illuminating dark corners or dazzling foes in tight spaces. Each arrow fires with a burst of light that temporarily blinds nearby creatures, while the third strikes with a blinding flash capable of stunning even the most resilient warriors. These projectiles are crafted from rare metals found deep within the Sunken Isles and imbued with the essence of twilight.",
    "price": 1300,
    "icon": "💥",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "+50% area brightness on cast",
      "Stunning effect on hit"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "SeaWings Express Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Blinding Light",
        "rules": "When fired, the first arrow illuminates a 10-foot radius area with bright light for 1 minute. Creatures in this area have disadvantage on Dexterity saving throws and attack rolls while within the area."
      },
      {
        "title": "Stunning Flash",
        "rules": "The third arrow strikes with a blinding flash, causing creatures hit by it to make a DC 15 Constitution saving throw or be stunned until the end of their next turn. This effect can only occur once per target."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to wield effectively, as the ammunition's light effects and stunning capabilities demand a proficient hand.",
    "vendorReason": "Isle Delfino specializes in crafting and selling rare and magical weapons that enhance combat prowess in various environments.",
    "shippingDetail": "Ships via SeaWings Express Courier, delivered within 3 days of purchase.",
    "usage": {
      "activation": "Standard Action",
      "duration": "Instantaneous for each arrow fired",
      "endsWhen": "Charges are exhausted or the ammunition is destroyed",
      "charges": "Unlimited charges"
    },
    "priceReason": "The material and magical essence used in crafting this ammunition justify its moderate price, making it an excellent value for adventurers.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-22T07:44:08.377267+00:00",
    "aiReviewedAt": "2026-07-22T07:44:08.377267+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunset_satchel": {
    "id": "isle_delfino_sunset_satchel",
    "name": "Sunset Satchel of the Drowned Delfino",
    "description": "The Sunset Satchel of the Drowned Delfino is a leather-bound satchel adorned with sea-glass pendants and crafted from ancient, sun-bleached driftwood. It allows its bearer to store up to five magical treasures or rare artifacts without diminishing their potency. When invoked, it summons a glowing beach spirit named Luna, who provides 100 damage per attack for thirty seconds. The satchel also grants the user +10% armor bonus while the spirit is active.",
    "price": 5500,
    "icon": "🎁",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Stores up to five magical treasures",
      "Summons a glowing beach spirit"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Spirit of Luna's Support",
        "rules": "When the user activates the satchel, it summons Luna for thirty seconds. Luna provides 100 damage per attack and grants +10% armor bonus to the user during this time. The spirit can be dismissed early if the user makes a successful Wisdom saving throw."
      },
      {
        "title": "Treasure Storage",
        "rules": "The satchel allows storage of up to five magical treasures or rare artifacts, which do not deteriorate while inside. Retrieving an item requires a minute-long process and cannot be done instantaneously."
      }
    ],
    "levelRequirementReason": "This satchel is crafted with the arcane knowledge of Delfino's drowned wizards, requiring a minimum level to properly harness its magical properties.",
    "vendorReason": "The artisans of Isle Delfino are renowned for their mastery in crafting items that blend magic and nature, making this satchel one of their finest creations.",
    "shippingDetail": "The satchel is delivered with Pipe Express, known for its reliable service across the archipelago. The delivery time may vary due to unpredictable sea currents but the item is guaranteed safe arrival.",
    "usage": {
      "activation": "Action",
      "duration": "30 seconds per activation",
      "endsWhen": "The spirit dissipates naturally or can be dismissed by making a successful Wisdom saving throw.",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "Crafted with rare sea-glass and enchanted driftwood, the Sunset Satchel is a valuable treasure worth its price in gold.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:44:08.255120+00:00",
    "aiReviewedAt": "2026-07-22T07:44:08.255120+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunset_shade_cape": {
    "id": "isle_delfino_sunset_shade_cape",
    "name": "Sunset Shade Cape",
    "description": "The Sunset Shade Cape, crafted from the twilight shadows of Isle Delfino, captures the essence of the setting sun. This elegant garment not only absorbs heat but also channels it into elemental resistance, protecting the wearer against the island’s scorching afternoons. Worn by those who know the secrets of the sea, this cape is as much a symbol of resilience as it is a practical tool for survival in Delfino's sun-drenched climes.",
    "category": "equipment",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Heat Absorption",
      "Elemental Resistance"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heat Absorption",
        "rules": "When the wearer is exposed to heat damage, the cape absorbs up to 30 points of that damage and redirects it as radiant energy. This effect can be triggered once per short rest."
      },
      {
        "title": "Elemental Resistance",
        "rules": "For 1 minute after absorbing heat damage, the wearer gains a +5 bonus to all saving throws against fire and radiant damage. The cape can only activate this effect once every long rest."
      }
    ],
    "levelRequirementReason": "This versatile item is suitable for adventurers of any level who might find themselves in need of protection from the elements.",
    "vendorReason": "Isle Delfino's artisans are known for their mastery of local materials and natural magic, making this cape a perfect fit for their inventory.",
    "shippingDetail": "Ships via the Whispering Gale, ensuring swift delivery straight to your doorstep.",
    "usage": {
      "activation": "Passive effect upon donning the cape; requires no additional action.",
      "duration": "1 minute for Heat Absorption and 1 hour for Elemental Resistance, both once per short rest or long rest respectively.",
      "endsWhen": "The wearer takes heat damage again or completes a short or long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from unique materials and imbued with local magic, the Sunset Shade Cape provides essential protection for any adventurer.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:44:21.416219+00:00",
    "aiReviewedAt": "2026-07-22T07:44:21.416219+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunset_soul_shield": {
    "id": "isle_delfino_sunset_soul_shield",
    "name": "Sunset Soul Shield",
    "description": "The Sunset Soul Shield gleams with a golden aura, its surface etched with ancient runes that pulse in sync with the setting sun. Crafted from the very essence of a fallen star, this shield not only absorbs damage but also channels it into healing light, making it an indispensable companion for warriors facing the horizon's wrath. During the golden hour (5pm-7pm), its defense is heightened by 10%, and it offers potent regenerative power that can save lives when the sun begins to dip below the horizon.",
    "category": "equipment",
    "price": 28000,
    "icon": "🌅",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Absorbs Damage",
      "Regenerates Health"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Damage Absorption",
        "rules": "When a creature attacks you, this shield absorbs 25% of the damage dealt. The absorbed damage is converted into healing for the user at the end of each short rest."
      },
      {
        "title": "Healing Surge",
        "rules": "At sunset (5pm-7pm), the shield grants the wielder +10 to their AC and heals 15 hit points per second for a total of 10 seconds. This effect can only be used once every 24 hours."
      }
    ],
    "levelRequirementReason": "Only those with proven experience in combat can wield the Sunset Soul Shield, ensuring its power is matched by the user's skill.",
    "vendorReason": "The artisans of Isle Delfino have long been revered for their mastery of celestial materials, making them the perfect guardians of such a powerful artifact.",
    "shippingDetail": "Ships via special courier pigeon, ensuring swift delivery even in the most unpredictable weather conditions.",
    "usage": {
      "activation": "Passive effect; requires no activation. The shield's regenerative properties begin as soon as it is donned.",
      "duration": "Instantaneous effects at sunset and during combat. Regeneration lasts for 10 seconds.",
      "endsWhen": "The user is no longer in the golden hour or when the shield is removed from the body.",
      "charges": "Unlimited uses per day, but only one 'Healing Surge' effect can be used."
    },
    "priceReason": "Crafted from a star's essence and imbued with celestial runes, this shield represents unparalleled craftsmanship and power, justifying its high price in experience points.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-22T07:44:36.294911+00:00",
    "aiReviewedAt": "2026-07-22T07:44:36.294911+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunshine_balm": {
    "id": "isle_delfino_sunshine_balm",
    "name": "Sunshine Balm for the Soul",
    "description": "Sunshine Balm for the Soul, a shimmering gel that bathes the skin in tropical essence, is the perfect companion after a long swim or during a sun-drenched beach party. Infused with the scent of citrus and sugar cane, it instantly soothes fatigue and lifts spirits, leaving you feeling refreshed and rejuvenated. Crafted by the Pond Patrol using enchanted ingredients from the depths of the ocean, this balm offers more than just physical healing—it nurtures your soul.",
    "price": 290,
    "icon": "🌞",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Soothes Fatigue",
      "Enhances Mobility"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Soothes Fatigue",
        "rules": "Apply as a bonus action to gain temporary hit points equal to twice your level (minimum of 1). This effect lasts for 2 minutes and can be re-applied once per short or long rest."
      },
      {
        "title": "Enhances Mobility",
        "rules": "For the duration, increase your walking speed by 15 feet until the effects of a fatigue condition are alleviated. This enhancement does not stack with other movement bonuses."
      }
    ],
    "levelRequirementReason": "This balm is accessible to adventurers who have just begun their journey.",
    "vendorReason": "Known for its connection to the ocean, Isle Delfino sources rare and magical items that enhance the well-being of all visitors.",
    "shippingDetail": "Shipped within 3 days via Koopa Express, ensuring the freshness and potency of the balm upon arrival.",
    "usage": {
      "activation": "Bonus action to apply; can be re-applied once per short or long rest.",
      "duration": "2 minutes duration per application",
      "endsWhen": "When the effects are alleviated by a full night’s sleep or when the duration expires.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted from rare oceanic ingredients, this balm offers significant benefits at an accessible price for adventurers.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:44:59.498163+00:00",
    "aiReviewedAt": "2026-07-22T07:44:59.498163+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunshine_bloom": {
    "id": "isle_delfino_sunshine_bloom",
    "name": "Sunshine Bloom",
    "description": "The Sunshine Bloom exudes a vibrant glow, its petals shimmering like tropical sunbeams. This radiant flower not only soothes fatigue but also infuses vitality into those who wear it, making it an ideal companion for both serene sunbathing and fierce combat under the humid heat of Isle Delfino. When worn, it grants a gentle aura that can be seen as a soft, golden light around you, enhancing your steps with its increase in movement speed.",
    "price": 290,
    "icon": "🌞",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Restores vitality",
      "Increases agility"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Vitality",
        "rules": "Activates on donning the flower. Restores 30 hit points to the wearer and grants a +5% chance to dodge attacks for every hour it remains worn, up to a maximum of +25%. The effect ends when removed or after 8 hours."
      },
      {
        "title": "Increase Agility",
        "rules": "Activates on donning the flower. Increases the wearer's movement speed by 15% for 10 minutes while in sunlight. This effect is limited to once per day, and it ends when the wearer leaves a sunny area or enters darkness."
      }
    ],
    "levelRequirementReason": "The Sunshine Bloom is accessible to all adventurers, enhancing their stamina and reflexes for those just starting on their journey.",
    "vendorReason": "Isle Delfino's sunny climate makes it the perfect place to find this botanical treasure that thrives in tropical warmth.",
    "shippingDetail": "Ships within one day, delivered by a fleet of colorful Koopa shells ensuring safe and swift delivery.",
    "usage": {
      "activation": "Activates on donning the flower.",
      "duration": "10 minutes while in sunlight or until removed.",
      "endsWhen": "Removed from wear or wearer leaves sunlight for darkness.",
      "charges": "Unlimited daily uses"
    },
    "priceReason": "The Sunshine Bloom's rarity and the unique benefits it provides make it a fair value, offering a significant boost in both vitality and agility without being overly powerful.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:44:59.620670+00:00",
    "aiReviewedAt": "2026-07-22T07:44:59.620670+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunshine_satchel": {
    "id": "isle_delfino_sunshine_satchel",
    "name": "Sunshine Satchel",
    "description": "The Sunshine Satchel is a glowing, leather pouch that radiates an inviting warmth, perfect for tropical adventures or when you need to uplift your squad's spirits. Crafted from enchanted palm leaves and adorned with gleaming seashells, it boosts morale by 30% for up to five minutes, making every team member feel invigorated and ready for the next challenge. This magical pouch also increases your movement speed by 10%, allowing you to traverse sandy shores or dense jungles with ease.",
    "price": 1300,
    "icon": "🌞",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Warmth Boost",
      "Speed Increase"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Warmth Boost",
        "rules": "Activate as a bonus action. This effect lasts for 5 minutes and grants a +30% morale boost to all allies within 10 feet, enhancing their resolve and combat effectiveness."
      },
      {
        "title": "Speed Increase",
        "rules": "Activate on your turn as a free action. While this effect is active, you gain a +10 bonus to your movement speed for the duration of the encounter or until you take an action requiring concentration."
      }
    ],
    "levelRequirementReason": "The Sunshine Satchel's enchantments are designed to be accessible to all adventurers, regardless of their level.",
    "vendorReason": "As a hub for tropical adventures and beachside quests, Isle Delfino is the perfect vendor for this item that complements its idyllic setting.",
    "shippingDetail": "Ships within 24 hours with a special delivery charm that ensures the Satchel arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action or free action (when moving)",
      "duration": "5 minutes or until end of encounter, whichever comes first",
      "endsWhen": "Ends when you take an action requiring concentration or at the start of your next turn after the effect duration ends",
      "charges": "Unlimited"
    },
    "priceReason": "The Sunshine Satchel is priced moderately to reflect its enchantments that enhance both morale and combat efficiency without being overpowered.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:44:52.517123+00:00",
    "aiReviewedAt": "2026-07-22T07:44:52.517123+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunshine_shield": {
    "id": "isle_delfino_sunshine_shield",
    "name": "Sunshine Shield of the Delfino Dunes",
    "description": "The Sunshine Shield of the Delfino Dunes is a shimmering, translucent shield made from the coral and shells of the Delfino Dunes. Crafted by the whimsical Shine Sprites who inhabit these tropical shores, it reflects the sun's light in dazzling patterns that can deflect even the fiercest storms. When activated, it emits a radiant glow, temporarily granting invincibility to its bearer during combat, while also boosting nearby allies' morale and restoring their health.",
    "category": "equipment",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Deflects Storm Damage",
      "Boosts Ally Morale"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Deflects Storm Damage",
        "rules": "When activated as a bonus action, the shield deflects up to 50% of incoming damage for one minute. This effect does not stack with other damage mitigation abilities."
      },
      {
        "title": "Boosts Ally Morale",
        "rules": "For every ally within 10 feet, their morale increases by +2 until the start of your next turn. If no allies are nearby, the shield's user gains this benefit instead."
      }
    ],
    "levelRequirementReason": "Crafted with intricate spells and a deep connection to the Delfino Sprites' magic, this shield requires at least third-level proficiency for effective use.",
    "vendorReason": "The local merchants of Isle Delfino are proud custodians of the shield's lore and craftsmanship, ensuring it reaches those who can appreciate its magical properties.",
    "shippingDetail": "Shipped via Pipe Express with a special delivery that ensures the shield arrives in pristine condition, ready for immediate use upon arrival.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "One Minute",
      "endsWhen": "The start of your next turn or when destroyed by damage",
      "charges": "Unlimited (Recharges after a Long Rest)"
    },
    "priceReason": "Crafted with rare materials and the magical essence of Shine Sprites, this shield is priced to reflect its unique properties and the effort required for its creation.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:44:52.294602+00:00",
    "aiReviewedAt": "2026-07-22T07:44:52.294602+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunshine_spray": {
    "id": "isle_delfino_sunshine_spray",
    "name": "Sunshine Spray",
    "description": "The Sunshine Spray is a delicate, iridescent mist bottle crafted by the artisans of Isle Delfino, made from the essence of a thousand Shine Sprites and laced with the purest light. When released, it illuminates the battlefield in a dazzling display, restoring allies' health and boosting their combat prowess. The spray's golden vapor dances through the air, leaving behind a trail of healing and speed-enhancing magic that can only be used on sunny afternoons or when under the watchful gaze of the celestial sprites.",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Healing Breeze",
      "Speed Surge"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Breeze",
        "rules": "Upon activation, the Sunshine Spray releases a healing mist that restores 50% of hit points to all allies within a 10-foot radius. This effect lasts for 1 minute and has no save requirement or limits."
      },
      {
        "title": "Speed Surge",
        "rules": "For the duration of its effect, any ally in range gains a +2 bonus to their attack rolls and action speed. This enhancement persists until the end of the spray's 1-minute duration; allies must be within 10 feet of the user to benefit."
      }
    ],
    "levelRequirementReason": "The Sunshine Spray is designed for novice adventurers, offering a simple yet effective tool for healing and boosting combat efficiency.",
    "vendorReason": "Isle Delfino's artisans are renowned for their magical creations, which are in high demand among the young heroes training there.",
    "shippingDetail": "The Void Drifter ensures timely delivery of the Sunshine Spray, even across vast distances.",
    "usage": {
      "activation": "A bonus action to release the mist and activate the effects.",
      "duration": "1 minute from activation.",
      "endsWhen": "The duration ends after 1 minute or when used up in combat.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The Sunshine Spray's rarity and the unique combination of healing and speed effects justify its moderate price, making it a valuable asset for any adventurer.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:49:07.627347+00:00",
    "aiReviewedAt": "2026-07-22T19:49:07.627347+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_sunshine_sprout": {
    "id": "isle_delfino_sunshine_sprout",
    "name": "Sunshine Sprout",
    "description": "The Sunshine Sprout is a vibrant, glowing orb of verdant life that radiates warmth and cheer. It's said to be crafted from the essence of Delfino's sun-drenched waters. When brought near water or exposed to sunlight, its emerald leaves shimmer more brightly, releasing a soothing aura that heals minor wounds and uplifts spirits. Its presence makes even the gloomiest day feel brighter, as it grants a temporary boost in speed and agility.",
    "price": 1300,
    "icon": "🌞",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Heals Minor Wounds",
      "Increases Speed"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Healing",
        "rules": "When brought near water or exposed to sunlight, the Sunshine Sprout restores up to 30 hit points to a creature within 10 feet. This effect is limited to once per short or long rest."
      },
      {
        "title": "Speed Boost",
        "rules": "The user gains a +15% increase to their walking speed for 10 minutes, starting when the item is activated. The boost ends if the user enters combat or if the duration expires."
      }
    ],
    "levelRequirementReason": "This simple yet powerful tool requires no special training and can be easily used by anyone.",
    "vendorReason": "Isle Delfino is known for its connection to nature, making the Sunshine Sprout a perfect addition to their inventory.",
    "shippingDetail": "Ships within 3 days via Boo Spectral Mail; ensure it’s kept out of direct sunlight during transit.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "10 minutes or until used in combat",
      "endsWhen": "Combat entry or expiration of duration",
      "charges": "Unlimited, but limited to once per short or long rest"
    },
    "priceReason": "The Sunshine Sprout’s rare components and the specialized process for crafting it justify its fair value.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T19:49:12.891957+00:00",
    "aiReviewedAt": "2026-07-22T19:49:12.891957+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_swirl_shield": {
    "id": "isle_delfino_swirl_shield",
    "name": "Swirl Shield",
    "description": "The Swirl Shield is a shimmering magical shield that gleams with vibrant auroras upon impact. Crafted from the sands of Delfino Isle, its surface reflects like rippling waters under the moonlight. This shield not only deflects projectiles but also heals allies within reach by 10% of their maximum hit points for each projectile it intercepts. Its enchantment grants a +2 bonus to AC and allows the wielder to gain a 10% dodge chance.",
    "category": "equipment",
    "price": 1300,
    "icon": "🌀",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Deflects Projectiles",
      "Heals Allies"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "The Windrunner Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Projectile Deflection",
        "rules": "When a creature attacks with a projectile, the Swirl Shield intercepts it, reducing damage by half. The shield can deflect one projectile per use."
      },
      {
        "title": "Healing Aura",
        "rules": "For each projectile intercepted, allies within 5 feet gain temporary hit points equal to 10% of their maximum hit points. This effect lasts until the start of your next turn and has no cooldown between uses."
      }
    ],
    "levelRequirementReason": "The Swirl Shield's enchantments require a moderate amount of mana, suitable for characters who have reached at least third level.",
    "vendorReason": "Isle Delfino is renowned for its magical artifacts and the Swirl Shield is one of their most popular exports.",
    "shippingDetail": "Delivered by the swift winds, ensuring quick arrival to eager adventurers.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous",
      "endsWhen": "At the start of your next turn or if an attack misses its target",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from rare materials and imbued with powerful magic, this shield is a valuable yet balanced purchase for frontline defenders.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T07:45:15.741787+00:00",
    "aiReviewedAt": "2026-07-22T07:45:15.741787+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tide_soul_core": {
    "id": "isle_delfino_tide_soul_core",
    "name": "Tide Soul Core of the Coral Depths",
    "description": "The Tide Soul Core of the Coral Depths is a pulsating crystal that draws its power from the ancient spirits of the sea. When activated, it grants the user an instantaneous phase through water and releases a wave of oceanic fury that erupts with devastating force upon contact with foes. This core is crafted by the enigmatic Isle Delfino, whose artisans have woven the essence of coral and seaweed into its very structure.",
    "price": 1300,
    "icon": "🌊",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Phasing Through Water",
      "Tidal Wave"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Phasing Through Water",
        "rules": "As a bonus action, the user can phase through water for up to 5 feet in any direction. This effect has no duration limit and can be used once per short rest."
      },
      {
        "title": "Tidal Wave",
        "rules": "Upon activation as an action within water or while underwater, the user summons a wave that deals 1d8+2 bludgeoning damage to all creatures in a 10-foot radius. The wave lasts for 5 seconds and has a range of 30 feet."
      }
    ],
    "levelRequirementReason": "The core's power is accessible to novice adventurers, making it an excellent tool for early exploration.",
    "vendorReason": "Isle Delfino is renowned for its deep-sea artifacts and magic items, ensuring a steady supply of the Tide Soul Core.",
    "shippingDetail": "The package is delivered through Boo Spectral Mail, known for its reliable yet ethereal couriers.",
    "usage": {
      "activation": "Bonus action to phase; action to summon wave",
      "duration": "Instantaneous phasing; 5 seconds for tidal wave",
      "endsWhen": "Phasing ends when the user exits water; wave ends after 5 seconds or upon contact with creatures",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced at 1000 XP, this core offers a potent combination of utility and combat prowess for adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:45:17.532624+00:00",
    "aiReviewedAt": "2026-07-22T07:45:17.532624+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tide_whisper_ammunition": {
    "id": "isle_delfino_tide_whisper_ammunition",
    "name": "Tide Whisper Ammunition",
    "description": "The Tide Whisper Ammunition is crafted from the very essence of Delfino's tides. Each round carries the roar of the ocean and a whisper of ancient aquatic magic, perfect for coastal skirmishes. When fired, it creates a brief wave that surges through the water, dealing additional damage to aquatic foes and harming nearby enemies within 10 feet. The ammunition also reduces the cooldown time of water-based spells by 30% upon use.",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Aquatic Damage",
      "Area of Effect"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Aquatic Damage",
        "rules": "When fired, this ammunition creates a surge that deals an additional 120% damage to aquatic enemies within the area. The wave lasts for 1 round and affects all creatures in a 10-foot radius from where it lands."
      },
      {
        "title": "Area of Effect",
        "rules": "Enemies within a 10-foot radius around the point of impact take 2d6 + Dexterity modifier (if applicable) damage. The effect occurs on each successful hit and ends after 1 round or when the ammunition runs out."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 5 to effectively utilize the tide whisper's aquatic magic.",
    "vendorReason": "Isle Delfino, renowned for its coastal defense and expertise in water-based magic, is the only vendor that stocks these enchanted rounds.",
    "shippingDetail": "The ammunition is carefully packed to ensure it retains its magical properties during transit. Shipping times are expedited due to their importance to coastal defenses.",
    "usage": {
      "activation": "On a successful hit with any ranged weapon",
      "duration": "Instantaneous; ends when the ammunition runs out or after 1 round",
      "endsWhen": "Exhausted or after 1 round of effect duration",
      "charges": "Unlimited, recharged by the ocean's tides each dawn"
    },
    "priceReason": "The balanced price reflects the rare materials and magical essence required for its crafting.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:45:31.029239+00:00",
    "aiReviewedAt": "2026-07-22T07:45:31.029239+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tide_whisper_talisman": {
    "id": "isle_delfino_tide_whisper_talisman",
    "name": "Tide Whisper Talisman",
    "description": "The Tide Whisper Talisman hums with a gentle, oceanic melody, its surface rippling like water itself. Crafted from polished seashells and enchanted with the spirit of Delfino's guardian mermaids, this trinket enhances your agility in aquatic environments. Wield it in tidal battles or underwater explorations; its magic ensures you move swiftly through water while reducing the risk of drowning by 15%. The talisman's enchantments are as ancient as the sea itself and have been trusted by brave adventurers for generations.",
    "category": "equipment",
    "price": 1300,
    "icon": "🌊",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+25% movement speed underwater",
      "Reduces risk of drowning by 15%"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Sea Serpent Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Movement in Water",
        "rules": "When worn, the talisman grants a +25% bonus to your movement speed while submerged. This effect is active as long as you are underwater and has no cooldown or recharge."
      },
      {
        "title": "Drowning Resistance",
        "rules": "The talisman provides temporary resistance to drowning damage, reducing the risk of drowning by 15%. This benefit lasts for 10 seconds each time it activates. You can use this ability once per short rest."
      }
    ],
    "levelRequirementReason": "This trinket is designed for beginners and adventurers who are not yet skilled in aquatic combat or exploration.",
    "vendorReason": "Isle Delfino, known for its connection to the sea, offers this talisman as a gift from the ocean's guardian mermaids to those who seek to explore its depths safely.",
    "shippingDetail": "The Sea Serpent Courier delivers the talisman in a sealed, waterproof container ensuring it arrives undamaged and ready for use.",
    "usage": {
      "activation": "Instantaneous activation when entering water; recharges after a short rest.",
      "duration": "10 seconds per activation",
      "endsWhen": "The effect ends upon exiting the water or if you take damage from drowning.",
      "charges": "Recharges once per short rest"
    },
    "priceReason": "The talisman's rarity and magical properties, combined with its utility for both combat and exploration, justify this fair price in experience points.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T07:45:44.565377+00:00",
    "aiReviewedAt": "2026-07-22T07:45:44.565377+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tomb_kings_tidebreaker": {
    "id": "isle_delfino_tomb_kings_tidebreaker",
    "name": "Tidebreaker Scepter",
    "description": "The Tidebreaker Scepter exudes an ancient, malevolent energy from its coral and obsidian core, a cursed relic of the drowned kingdom of Delfino. Its wielder gains +20% damage to water-based attacks and increases stamina regeneration by 30% during combat. However, it also inflicts minor drowning damage on land, sapping vitality with each step. The scepter's power is unpredictable, triggering random elemental backlash every 30 seconds, a reminder of the dark magic that forged it.",
    "category": "equipment",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Water Damage Boost",
      "Stamina Regeneration"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Water Damage Boost",
        "rules": "While wielding the Tidebreaker Scepter, the user gains +20% damage to water-based attacks. This effect is passive and persists for the duration of combat."
      },
      {
        "title": "Stamina Regeneration",
        "rules": "Increases the user's stamina regeneration by 30% during combat, up to a maximum of 15 additional points per minute. This effect ends when combat ends or if the user leaves water."
      }
    ],
    "levelRequirementReason": "The arcane energy of the Tidebreaker Scepter is too potent for those without sufficient magical training.",
    "vendorReason": "Isle Delfino, a master collector of ancient artifacts, has acquired this cursed relic from the depths and offers it to adventurers willing to brave its dangers.",
    "shippingDetail": "The scepter is delivered via a Rakasha spirit courier who ensures safe delivery but warns that handling the item may have unforeseen consequences.",
    "usage": {
      "activation": "Passive effect during combat; requires no activation.",
      "duration": "Active for the duration of combat or until removed from water.",
      "endsWhen": "Combat ends, user leaves water, or the scepter is destroyed by elemental backlash.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The price reflects the item's rarity and potential for catastrophic effects in the wrong hands.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T07:46:27.588453+00:00",
    "aiReviewedAt": "2026-07-22T07:46:27.588453+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_aura_ring": {
    "id": "isle_delfino_tropical_aura_ring",
    "name": "Tropical Aura Ring",
    "description": "The Tropical Aura Ring glows with a vibrant turquoise hue, its energy resonating in perfect harmony with the island's lush flora. This ring reduces magic cooldowns by 20% and grants an ally a 10% chance to cast a free elemental burst each time they use their next spell or ability. The wearer’s elemental damage is increased by 5%, amplifying their offensive prowess under the warm tropical skies of Delfino Isle.",
    "category": "equipment",
    "price": 1300,
    "icon": "🌴",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reduces magic cooldowns",
      "Grants elemental burst"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Reduced Magic Cooldowns",
        "rules": "The wearer's allies' magic abilities have their cooldown reduced by 20%. This effect lasts until the end of the wearer’s next turn."
      },
      {
        "title": "Elemental Burst Chance",
        "rules": "Each time an ally casts a spell or uses an ability, there is a 10% chance they can cast a free elemental burst. This effect has no cooldown and can stack up to three times per short rest."
      }
    ],
    "levelRequirementReason": "The ring's energy requires the wearer to be sufficiently attuned to the island’s magic.",
    "vendorReason": "As Delfino Isle's premier jewelers, Isle Delfino provides authentic and enchanted items like the Tropical Aura Ring.",
    "shippingDetail": "Ships within three days via Koopa Pony Express.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous, lasts until end of turn or short rest",
      "endsWhen": "Ends at the start of the wearer's next turn or upon a short rest",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its level and effects, providing a moderate XP value that reflects the ring’s enchantment.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:45:57.811505+00:00",
    "aiReviewedAt": "2026-07-22T07:45:57.811505+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_bloom": {
    "id": "isle_delfino_tropical_bloom",
    "name": "Tropical Bloom Elixir",
    "description": "The Tropical Bloom Elixir is a sweet, glowing nectar that bubbles like living light in the heart of Delfino Isle’s tropical groves. Sip it to restore vitality and feel your limbs surge with unmatched speed, leaving behind a shimmering trail as you race through the jungle. This elixir's magic is said to be distilled from the essence of the island’s ancient flora, granting both healing and swift-footed prowess.",
    "price": 290,
    "icon": "🍬",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Restores Vitality",
      "Boosts Swift Movement"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Vitality",
        "rules": "When consumed, this elixir restores 250 hit points. The effect is instantaneous and provides a temporary healing burst."
      },
      {
        "title": "Boost Swift Movement",
        "rules": "For the next 20 seconds after consumption, the drinker gains +15% movement speed. This effect ends if the drinker falls unconscious or takes any damage."
      }
    ],
    "levelRequirementReason": "The elixir’s potent formula requires no minimum level to access its benefits.",
    "vendorReason": "Isle Delfino is renowned for its natural remedies and the Tropical Bloom Elixir is a local favorite, sold by the island apothecary.",
    "shippingDetail": "Ships directly from Delfino Isle; the elixir arrives in pristine condition with no delays.",
    "usage": {
      "activation": "Consumed as a bonus action",
      "duration": "20 seconds",
      "endsWhen": "The drinker falls unconscious or takes damage",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its potent healing and speed benefits, this elixir is priced fairly at 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:46:48.066595+00:00",
    "aiReviewedAt": "2026-07-22T07:46:48.066595+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_bloom_core": {
    "id": "isle_delfino_tropical_bloom_core",
    "name": "Tropical Bloom Core",
    "description": "The Tropical Bloom Core is a shimmering crystalline core pulsating with vibrant tropical life, its hues shifting between emerald and gold like a coral reef under moonlight. This relic enhances healing magic by amplifying the effectiveness of such spells by +30%, allowing them to restore an additional 25 hit points per use. Upon activation, it also grants nearby allies a fleeting burst of vitality, restoring 1d6+2 temporary hit points for all within 10 feet. The core's power is drawn from the essence of tropical flora and fauna, making it a rare artifact crafted by the enigmatic Isle Delfino.",
    "price": 1300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Healing Amplification",
      "Bloom of Vitality"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Amplification",
        "rules": "When activated as an action, this core boosts the power of healing spells by +30%, restoring an additional 25 hit points for each spell cast. The effect lasts until the end of the next long rest."
      },
      {
        "title": "Bloom of Vitality",
        "rules": "Upon activation, the core triggers a temporary 'bloom' effect that heals all allies within 10 feet by 1d6+2 temporary hit points. This effect occurs once per short or long rest and can only be triggered if no healing has been received in the current rest."
      }
    ],
    "levelRequirementReason": "The core's power is accessible to all adventurers, enhancing their ability to survive combat.",
    "vendorReason": "Isle Delfino specializes in crafting and distributing magical artifacts derived from the tropical ecosystems they steward.",
    "shippingDetail": "The core is carefully packed with enchanted seaweed to protect it during transit, ensuring its arrival remains intact.",
    "usage": {
      "activation": "Action",
      "duration": "Until end of next long rest",
      "endsWhen": "Ends at the start of your next short or long rest",
      "charges": "Unlimited, but only one bloom effect per rest"
    },
    "priceReason": "The core's unique and beneficial effects justify a price slightly below its maximum rarity.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:46:45.615555+00:00",
    "aiReviewedAt": "2026-07-22T07:46:45.615555+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_bottle": {
    "id": "isle_delfino_tropical_bottle",
    "name": "Tropical Bottle of Shimmering Rain",
    "description": "The Tropical Bottle of Shimmering Rain captures the essence of Isle Delfino’s misty rain, a fleeting sip that refreshes your spirit and fortifies you against the rigors of long journeys. When uncorked, it grants temporary immunity to fatigue, allowing you to push through without succumbing to weariness. The bottle's contents are as vibrant as the island itself, shimmering with hues of blue and green under the sun’s light.",
    "price": 290,
    "icon": "🍹",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Immunity to Fatigue",
      "Restores 30% Health"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Fatigue",
        "rules": "When consumed, this bottle grants you immunity to fatigue for one hour. This effect ends if you fall unconscious or take damage from a non-magical source."
      },
      {
        "title": "Restores 30% Health",
        "rules": "Upon drinking, the bottle restores 30% of your maximum hit points. You cannot gain more than 15 hit points from this effect, and it has no effect if you have fewer than 20 hit points."
      }
    ],
    "levelRequirementReason": "The essence within the bottle is potent enough to benefit even novices on their adventures.",
    "vendorReason": "Isle Delfino's local apothecaries are well-known for sourcing ingredients from the island’s heart, making this product a natural addition to their offerings.",
    "shippingDetail": "The Tropical Bottle is shipped via Pipe Express, ensuring that its contents remain fresh and potent during transit.",
    "usage": {
      "activation": "Drink",
      "duration": "1 hour",
      "endsWhen": "You fall unconscious or take damage from a non-magical source",
      "charges": "Unlimited"
    },
    "priceReason": "The bottle’s rarity and the potent ingredients required for its creation justify this price, providing adventurers with a valuable tool without breaking the bank.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T07:46:44.034305+00:00",
    "aiReviewedAt": "2026-07-22T07:46:44.034305+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_fury": {
    "id": "isle_delfino_tropical_fury",
    "name": "Tropical Fury",
    "description": "The Tropical Fury is a spiked shell weapon forged from the very essence of the Delfino Isle's stormy tides. Its oceanic energy crackles with power, delivering devastating blows that reduce an opponent's defenses and leave them momentarily stunned. Crafted by the artisans of Isle Delfino, this weapon is perfect for close combat, ensuring that every strike not only deals 120 damage but also reduces enemy armor class by 10% for five seconds.",
    "category": "equipment",
    "price": 1300,
    "icon": "🐚",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Shell Shock",
      "Tide Stun"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Shell Shock",
        "rules": "When you hit a target with the Tropical Fury, it deals 120 damage and reduces the target's armor class by 10% for 5 seconds. This effect has no save DC and can be used once per long rest."
      },
      {
        "title": "Tide Stun",
        "rules": "There is a 10% chance that each hit with the Tropical Fury will stun the target for 2 seconds. The effect ends when the stunned condition expires or if the target takes any action, and it can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The weapon's oceanic energy demands a certain level of mastery to control its power effectively.",
    "vendorReason": "Isle Delfino is renowned for its artisans who craft weapons imbued with the essence of their natural surroundings.",
    "shippingDetail": "The weapon is shipped in a specially insulated box to ensure that its power remains intact during transit.",
    "usage": {
      "activation": "On hit",
      "duration": "Instantaneous, with effects lasting for the specified durations",
      "endsWhen": "At the end of the target's next turn or when the effect is interrupted by an action",
      "charges": "Unlimited"
    },
    "priceReason": "The weapon's rare forging and unique power contribute to its fair value.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:46:41.390892+00:00",
    "aiReviewedAt": "2026-07-22T07:46:41.390892+00:00",
    "aiReviewVersion": 1
  }
};
