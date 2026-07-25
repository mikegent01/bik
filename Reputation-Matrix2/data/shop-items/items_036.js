// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_036 = {
  "rogueport_death_bite": {
    "id": "rogueport_death_bite",
    "name": "Death Bite",
    "description": "The Death Bite is a cursed necklace made from the bones of those who died in Rogueport's sewers, imbued with the dark magic that plagues the city. It grants +20% damage on all attacks and a 10% chance to stun enemies struck. Wear it at your peril; if you meet an untimely end, the necklace activates its sinister curse, burying you alive in the very sewers from which it was crafted.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦷",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+20% Damage Boost",
      "10% Stun Chance on Hit"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Stun On Hit",
        "rules": "When you hit an enemy with a melee attack, there is a 10% chance to stun them for 1 round. This effect can occur once per short or long rest."
      },
      {
        "title": "Cursed Burial",
        "rules": "If the wearer dies while wearing this necklace, it activates its curse, causing the wearer to be buried alive in the sewers of Rogueport. This effect triggers instantly upon death and cannot be prevented by any means."
      }
    ],
    "levelRequirementReason": "The cursed nature of the Death Bite requires a certain level of expertise to handle its power without succumbing to its malevolent influence.",
    "vendorReason": "Rogueport's native vendors are well-acquainted with the dark magic that plagues their city and thus can offer this dangerous but powerful item.",
    "shippingDetail": "The necklace is shipped discreetly, ensuring it arrives in a timely manner even through the city's treacherous underbelly.",
    "usage": {
      "activation": "Passive effect; occurs on all melee attacks and enemy hits.",
      "duration": "Instantaneous; lasts until wearer dies or removes the necklace.",
      "endsWhen": "The curse activates upon death, or if the necklace is removed.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP due to its cursed nature and the potential for immediate danger it poses.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-23T17:21:02.507325+00:00",
    "aiReviewedAt": "2026-07-23T17:21:02.507325+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_dry_runes": {
    "id": "rogueport_dry_runes",
    "name": "Dry Runes of the Silent Blade",
    "description": "The Dry Runes of the Silent Blade are brittle runes etched from ancient bone and shadow, flickering with an eerie light as they suppress all ambient noise. They grant you a fleeting moment of silence that can be used for assassination or infiltration, allowing you to move stealthily through dark alleys without a sound. Each rune is a testament to forgotten secrets, once worn by silent assassins who knew the value of silence in the shadows.",
    "price": 1000,
    "icon": "🧭",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Ambient Noise Suppression",
      "Stealth Evasion Boost"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shadow Courier",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Ambient Noise Suppression",
        "rules": "As an action, you suppress all ambient sound within a 10-foot radius for 30 seconds. This effect is useful in stealthy maneuvers and silent assassinations but cannot be used in areas with heavy foot traffic or where the noise of your movements would disrupt the silence."
      },
      {
        "title": "Stealth Evasion Boost",
        "rules": "+15% evasion chance when you are using the Stealth skill. This effect lasts for 30 seconds and requires a successful Dexterity (Stealth) check to activate."
      }
    ],
    "levelRequirementReason": "This item is designed for rogue classes, requiring sufficient experience to handle such powerful stealth tools.",
    "vendorReason": "Rogueport specializes in items that aid in infiltration and stealth, making these runes a perfect fit for their inventory.",
    "shippingDetail": "Delivered by the Shadow Courier, known for its speed through dark alleys and hidden passages.",
    "usage": {
      "activation": "Action",
      "duration": "30 seconds",
      "endsWhen": "Ends when you take damage or move out of a public area with heavy foot traffic",
      "charges": "Unlimited, but cannot be used in areas with heavy noise"
    },
    "priceReason": "The price reflects the unique materials and intricate crafting required for these runes.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-23T17:20:34.618742+00:00",
    "aiReviewedAt": "2026-07-23T17:20:34.618742+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_dust_sword": {
    "id": "rogueport_dust_sword",
    "name": "Dust Sword",
    "description": "The Dust Sword, forged from the ashes of a fallen warlord, is a blade that whispers secrets in the night. Its silent strikes leave no trace, ensuring assassins can vanish without a sound after their deadly work. Crafted by blacksmiths who once served under the warlord himself, this weapon's touch never stains with blood or ash, making it the perfect tool for those who prefer to disappear into the shadows.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Silent Strike",
      "No Trace"
    ],
    "vendor": "rogueport",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Silent Strike",
        "rules": "When you hit a creature with this weapon, you do not generate any sound effect. This effect does not apply to other sounds made by your attacks or actions."
      },
      {
        "title": "No Trace",
        "rules": "After using this sword in combat, it leaves no blood or ash behind as evidence of its use. It also does not create footprints or other physical signs of a battle."
      }
    ],
    "levelRequirementReason": "The Dust Sword requires a minimum character level to ensure the wielder can handle and understand its silent, stealthy nature.",
    "vendorReason": "Rogueport is known for its extensive network of spies and assassins who rely on such tools to stay hidden in the shadows.",
    "shippingDetail": "Due to its delicate nature, the Dust Sword must be shipped via Koopa Postal's express courier service to ensure it arrives undamaged and ready for use.",
    "usage": {
      "activation": "On hit only",
      "duration": "Instantaneous",
      "endsWhen": "The sword is no longer in contact with a creature or object, or when the wielder moves more than 5 feet away from the target.",
      "charges": "Unlimited; recharges after a long rest"
    },
    "priceReason": "This price reflects its rarity and the specialized blacksmithing required to forge such an item, as well as the unique materials used in its creation.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:21:31.012351+00:00",
    "aiReviewedAt": "2026-07-23T17:21:31.012351+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_echo_ring": {
    "id": "rogueport_echo_ring",
    "name": "Echo Ring of the Unseen Path",
    "description": "The Echo Ring of the Unseen Path is a rare trinket forged from ancient, cursed metal. Each time you wear it, it whispers secrets of hidden locations or traitors in your party, but at a terrible cost to your sanity. The ring's whispering voice can be heard only when you are within a secret passage or an area where deception lies dormant. Its dark magic drains 50 HP per use, leaving you weakened for the remainder of the encounter.",
    "category": "equipment",
    "price": 1000,
    "icon": "🕳",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Reveals hidden locations and traitors",
      "Grants stealth bonus"
    ],
    "vendor": "rogueport",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Reveal Hidden Truths",
        "rules": "Activates as a bonus action. Reveals a hidden location or identifies a traitor in your party for the duration of one short rest. Ends when the ring's HP is depleted."
      },
      {
        "title": "Stealth Boost",
        "rules": "Passive effect while wearing the ring. Grants advantage on Dexterity (Stealth) checks if no enemy has detected you, otherwise disadvantage. The bonus or penalty persists until a long rest is taken."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Stealth to effectively use the ring's stealth-boosting property.",
    "vendorReason": "Rogueport, known for its underground trade and secrets, naturally stocks items that reveal hidden truths.",
    "shippingDetail": "Delivered by spectral courier with a 1d4-hour delay due to the item's ethereal nature.",
    "usage": {
      "activation": "Bonus action",
      "duration": "One short rest",
      "endsWhen": "Ring's HP is depleted or when a long rest is taken",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "Balanced price for a rare item that offers significant advantages in stealth and information-gathering.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T17:20:34.508426+00:00",
    "aiReviewedAt": "2026-07-23T17:20:34.508426+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_explosive_fireflower_seeds": {
    "id": "rogueport_explosive_fireflower_seeds",
    "name": "Primordial Bloom Seeds",
    "description": "Primordial Bloom Seeds are harvested from fire flowers that bloom near the treacherous Valley of Bowser. These seeds, imbued with ancient volcanic energies, can be planted to grow fire flowers whose petals explode in a fiery blast upon contact or after a set duration. When used to enchant weapons, they infuse the blade with searing heat and explosive potential, but the wielder risks unpredictable detonations that could claim their own life if not handled carefully.",
    "price": 1000,
    "icon": "🔥",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Explosive Petals",
      "Weapon Enchantment Risk"
    ],
    "vendor": "rogueport",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Explosive Petals",
        "rules": "When a fire flower grown from these seeds is struck by an attack or remains unattended for 1 minute, it explodes in a burst of fire dealing 2d8 fire damage to all creatures within 5 feet. The explosion ignites flammable objects within the area with no save. This effect can occur once per day."
      },
      {
        "title": "Weapon Enchantment Risk",
        "rules": "Weapons enchanted with the essence of Primordial Bloom Seeds deal an additional 1d6 fire damage on a hit. However, there is a 25% chance (DC 15 Dexterity save) that the weapon will spontaneously combust and explode, dealing 4d8 fire damage to the wielder in addition to their normal attack damage."
      }
    ],
    "levelRequirementReason": "Only those with experience and control can handle the volatile nature of these seeds.",
    "vendorReason": "Rogueport's network includes traders who venture into dangerous zones like the Valley of Bowser.",
    "shippingDetail": "Carefully packed and shipped via underwater pneumatic tubes to ensure safe delivery through treacherous waters.",
    "usage": {
      "activation": "Planted or enchanted as a bonus action.",
      "duration": "Explosive petals last until triggered or extinguished. Weapon enchantment is permanent until reset by the wielder.",
      "endsWhen": "The seed's explosive potential is used up after one explosion or when the weapon is re-balanced.",
      "charges": "Unlimited, but requires a short rest to reset any weapon enchanted."
    },
    "priceReason": "Balanced for its rare and hazardous nature, these seeds are costly due to their volatile properties and the danger of acquiring them.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T17:20:52.835744+00:00",
    "aiReviewedAt": "2026-07-23T17:20:52.835744+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_fey_soul_core": {
    "id": "rogueport_fey_soul_core",
    "name": "Fey Soul Core Fragment",
    "description": "The Fey Soul Core Fragment is a pulsating orb of emerald light, said to be the very essence of a fey queen's soul. Crafted from the heartwood of an ancient fae tree and imbued with the whispers of forgotten fey realms, it grants temporary charm. When activated, enemies within 10 feet are compelled to flee or surrender for 30 seconds, while the wielder gains a +5 bonus on Dexterity (Stealth) checks and advantage on saving throws against being frightened.",
    "price": 1000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+5 bonus on Stealth checks",
      "Advantage on saves vs. frightened"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Fey Charm Aura",
        "rules": "Activates as an action, creating a 10-foot radius aura around the wielder for 30 seconds. Enemies within the area must make a DC 14 Wisdom saving throw or flee or surrender for that duration. The effect ends if any creature in the area uses an action to attack the wielder."
      },
      {
        "title": "Stealth and Fear Resistance",
        "rules": "The wielder gains a +5 bonus on Dexterity (Stealth) checks and advantage on saving throws against being frightened while the aura is active. This effect ends when the aura's duration expires or if the wielder attacks."
      }
    ],
    "levelRequirementReason": "Requires at least 6th level to handle the mystical energies of the Fey Soul Core Fragment.",
    "vendorReason": "Rogueport is known for its extensive trade in magical artifacts, including rare fey relics such as the Fey Soul Core Fragment.",
    "shippingDetail": "Delivered via a mysterious portal that appears only at night, ensuring the item arrives intact and secure.",
    "usage": {
      "activation": "Action to activate the aura within range of 10 feet.",
      "duration": "30 seconds or until interrupted by an attack on the wielder.",
      "endsWhen": "The aura's duration ends when it expires or is disrupted by an attack.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rare nature and the intricate magic required to craft such a fragment.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-23T17:20:51.547407+00:00",
    "aiReviewedAt": "2026-07-23T17:20:51.547407+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_feywhisper_glove": {
    "id": "rogueport_feywhisper_glove",
    "name": "Feywhisper Glove",
    "description": "The Feywhisper Glove is a rare, enchanted gauntlet crafted by the elusive Shy Guy Smugglers. Its intricate leatherwork and silver thread shimmer with an ethereal glow, allowing its wearer to communicate seamlessly with fey creatures. While speaking with fey, the glove grants +10% stealth while moving, making it invaluable for covert operations or infiltration missions. However, each use saps 5% of the wearer's health, a price paid in blood and silence.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌿",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Speak to Fey",
      "Stealth Boost"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Speak to Fey",
        "rules": "The wearer can whisper to fey creatures for 30 seconds. This effect is instantaneous upon activation, and it ends when the duration expires or if the wearer enters combat."
      },
      {
        "title": "Stealth Boost",
        "rules": "While wearing the glove, the user gains +10% stealth while moving. The boost lasts until the start of their next turn after using the glove in a battle or combat situation."
      }
    ],
    "levelRequirementReason": "The complexity and magic required to craft such an item necessitates at least fifth-level proficiency.",
    "vendorReason": "Rogueport specializes in exotic and rare items suitable for adventurers and infiltrators, including enchanted gloves that enhance communication with fey.",
    "shippingDetail": "The gloves are typically delivered by the Shy Guy Smugglers, known for their timely and discreet deliveries.",
    "usage": {
      "activation": "Use an action to activate.",
      "duration": "Instantaneous; ends when duration expires or wearer enters combat.",
      "endsWhen": "Combat or expiration of 30 seconds.",
      "charges": "Unlimited, but each use costs 5% of the user's health."
    },
    "priceReason": "The glove's rarity and utility justify its price, offering a balance between cost and value for adventurers seeking to communicate with fey.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T17:21:07.823619+00:00",
    "aiReviewedAt": "2026-07-23T17:21:07.823619+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_feywhisper_ring": {
    "id": "rogueport_feywhisper_ring",
    "name": "Feywhisper Ring of the Unseen",
    "description": "The Feywhisper Ring of the Unseen is a delicate silver ring adorned with fey runes and a shimmering, ever-changing motes of light. It allows its wearer to briefly traverse the hidden paths of the Feywild, teleporting to nearby fey locations for 5 minutes. The ring whispers with an ethereal glow when worn in a non-feyland region, causing a fleeting disorientation that lasts until the ring's magic stabilizes. It is crafted by the elusive fae craftsmen of the Feywild and bears their signature runes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Fey Teleport",
      "Fae Protection"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Fey Teleport",
        "rules": "Activates as a bonus action. The wearer can teleport to a nearby Feywild location within 30 feet, provided the destination is not a hostile environment. The effect lasts for 5 minutes and can only be used once per day."
      },
      {
        "title": "Fae Protection",
        "rules": "+15% reduction in damage from magical attacks, active while the ring is worn. This protection does not stack with other forms of magical resistance or similar effects."
      }
    ],
    "levelRequirementReason": "The ring's magic requires a degree of spiritual attunement that most characters achieve at level 3.",
    "vendorReason": "Rogueport, known for its extensive trade with the Feywild, regularly imports such magical artifacts from their fey allies.",
    "shippingDetail": "The ring is delivered via a Rakasha courier who ensures the package remains enchanted and secure during transit.",
    "usage": {
      "activation": "Bonus action to teleport or as a passive effect for protection.",
      "duration": "5 minutes, once per day.",
      "endsWhen": "After 5 minutes or if removed from a Feywild location.",
      "charges": "Rechargeable daily"
    },
    "priceReason": "Balanced to reflect its enchantment and rarity without being overpowered.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-23T17:21:09.188623+00:00",
    "aiReviewedAt": "2026-07-23T17:21:09.188623+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_feywild_flicker": {
    "id": "rogueport_feywild_flicker",
    "name": "Feywild Flicker",
    "description": "The Feywild Flicker is a shimmering amulet that pulses with ethereal light. When activated, it allows its wearer to step briefly into the Feywild realm, becoming invisible and nearly untraceable within mundane sight for ten seconds. The wearer must remain in a Feywild or Shadowfell zone during this time; otherwise, the effect fails. Entering these zones at random introduces a 50% chance of disorientation, leaving the wearer temporarily confused upon returning to the Material Plane.",
    "price": 1000,
    "icon": "🌿",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Stealthy Invisibility",
      "Feywild Disorientation"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealthy Invisibility",
        "rules": "Activates as a bonus action. The wearer becomes invisible and nearly untraceable by mundane sight within Feywild or Shadowfell zones for ten seconds. Ends immediately if the wearer leaves these zones."
      },
      {
        "title": "Feywild Disorientation",
        "rules": "There is a 50% chance that entering the Feywild zone causes temporary disorientation, which lasts until the start of your next turn and imposes disadvantage on all Dexterity (Stealth) checks for the duration. The effect does not occur if you remain in the Material Plane."
      }
    ],
    "levelRequirementReason": "The amulet's magic is simple enough that even a low-level rogue can master it.",
    "vendorReason": "Rogueport specializes in items for those who navigate the realms beyond, including tools to traverse and exploit the Feywild.",
    "shippingDetail": "The amulet is delivered via Lakitu's fast courier service, which ensures it arrives within a week of purchase.",
    "usage": {
      "activation": "Bonus action",
      "duration": "10 seconds",
      "endsWhen": "Leaving Feywild or Shadowfell zones; use ends immediately if the wearer takes damage",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The amulet's rarity and utility justify its price, offering both stealth and a chance of disorientation.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-23T17:21:18.890912+00:00",
    "aiReviewedAt": "2026-07-23T17:21:18.890912+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_feywild_scent_ointment": {
    "id": "rogueport_feywild_scent_ointment",
    "name": "Feywild Scent Ointment of the Whispering Veil",
    "description": "A vial of perfumed essence, its surface shimmering with iridescent hues as if alive with Feywild magic. This elixir is said to be gathered from the Whispering Veil’s hidden groves, where it captures the very whispers of nature itself. When applied, it grants a fleeting euphoria and enhances the wearer's ability to hear and interpret the land’s secrets, making them nearly invisible to prying eyes for moments at a time.",
    "price": 1000,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+15% Stealth Bonus",
      "Enhanced Trap Bypass"
    ],
    "vendor": "rogueport",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whispering Euphoria",
        "rules": "Upon application, the wearer gains a +15% bonus to Dexterity (Stealth) checks for 20 seconds. This effect does not stack with other sources of stealth bonuses."
      },
      {
        "title": "Enhanced Trap Bypass",
        "rules": "The user has advantage on Intelligence (Investigation) checks made to bypass traps or secret mechanisms, and can make a Wisdom (Perception) check as an action if no other creature is already making such a check. This effect lasts for 30 seconds."
      }
    ],
    "levelRequirementReason": "This elixir provides a significant but not overwhelming advantage to stealth and perception, suitable for lower-level characters.",
    "vendorReason": "Rogueport traders often find themselves in need of such potions that enhance their skills in espionage and infiltration.",
    "shippingDetail": "Ships via the Void Drifter Relay, known for its unpredictable but reliable delivery times.",
    "usage": {
      "activation": "Apply the ointment to your skin or clothing as an action.",
      "duration": "20 seconds (Stealth) and 30 seconds (Trap Bypass)",
      "endsWhen": "The effects expire after their respective durations, or if the wearer takes any damage.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at this price point to ensure it remains a valuable but not overpowered tool for lower-level adventurers.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T17:21:50.006487+00:00",
    "aiReviewedAt": "2026-07-23T17:21:50.006487+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_flesh_scarab": {
    "id": "rogueport_flesh_scarab",
    "name": "Flesh Scarab",
    "description": "The Flesh Scarab is a pulsating, living scarab that adheres to your skin, leaving behind ephemeral psychic traces of stolen secrets or valuable intel. It can be used to leave cryptic messages that only allies with the right expertise can read, or it can increase stealth by masking movement and sound for covert operations. When enemies touch you while the scarab is active, they are struck with a wave of fear.",
    "price": 1000,
    "icon": "🦋",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Psychic Trace",
      "Stealth Boost"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Psychic Trace",
        "rules": "As an action, you can activate the Flesh Scarab to leave behind a fleeting psychic trace on your skin. Allies within 10 feet who succeed on a DC 15 Wisdom (Insight) check can interpret this trace as a message from you or gather useful intel. The effect lasts for 15 seconds."
      },
      {
        "title": "Stealth Boost",
        "rules": "As an action, the Flesh Scarab can increase your stealth by masking your movement and sound. You gain advantage on Dexterity (Stealth) checks until the start of your next turn. This effect lasts for 1 round."
      }
    ],
    "levelRequirementReason": "The Flesh Scarab requires a minimum level to ensure you can handle its inherent risks and benefits.",
    "vendorReason": "Rogueport is known for distributing items that aid in espionage and stealth, making the Flesh Scarab a perfect fit.",
    "shippingDetail": "The scarab is carefully packed to ensure it arrives alive and functional, delivered via Lakitu Drones within two days.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous (Psychic Trace) / Instantaneous (Stealth Boost)",
      "endsWhen": "The effect ends when the duration expires or you take damage.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "The Flesh Scarab is priced moderately high due to its unique and valuable utility in espionage scenarios.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:21:23.831889+00:00",
    "aiReviewedAt": "2026-07-23T17:21:23.831889+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_forged_hooded_scarf": {
    "id": "rogueport_forged_hooded_scarf",
    "name": "Phantom Veil Scarf",
    "description": "The Phantom Veil Scarf is a spectral, hooded scarf woven from the threads of shadow and night. Worn like a second skin, it dances at your will, obscuring your silhouette in dark environs. When darkness falls, it grants you an additional +10% evasion chance, making you nigh invisible to all eyes. Crafted from the remnants of a rogue noble's funeral procession, this scarf not only hides but also disables vision-based detection systems within its shadowy embrace.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Silhouette Obscuring",
      "Evasion Boost"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silhouette Obscuring",
        "rules": "While in a dark environment, the Phantom Veil Scarf grants you advantage on Dexterity (Stealth) checks. Additionally, it disables vision-based detection systems within its radius."
      },
      {
        "title": "Evasion Boost",
        "rules": "You gain a +10% bonus to your evasion chance in dark environments. This effect is passive and does not require any action to activate."
      }
    ],
    "levelRequirementReason": "This scarf requires no level, as it provides a simple yet effective utility for all adventurers.",
    "vendorReason": "Rogueport is known for its stolen goods and this scarf fits perfectly into their inventory of unique and useful items.",
    "shippingDetail": "Delivered swiftly by the reliable drones of Lakitu, ensuring you receive your Phantom Veil Scarf without delay.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous and continuous while in a dark environment.",
      "endsWhen": "The darkness ends or the scarf is removed.",
      "charges": "Unlimited"
    },
    "priceReason": "This scarf provides significant utility without being overpowered, making its price fair for its effects.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T17:21:47.175761+00:00",
    "aiReviewedAt": "2026-07-23T17:21:47.175761+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_forgotten_collar": {
    "id": "rogueport_forgotten_collar",
    "name": "Forgotten Collar of the Drowned Courier",
    "description": "The Forgotten Collar of the Drowned Courier is a rusted, chain-link collar embedded with tarnished silver runes that glow faintly under torchlight. It whispers secrets from the city’s sunken past when worn, granting invisibility to its wearer for 15 seconds and unlocking hidden lore that can be used to uncover buried treasures or ancient mysteries. This relic of the drowned courier enhances one's chance of finding secret caches by +5%.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "- Invisibility",
      "- Hidden Lore"
    ],
    "vendor": "rogueport",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "Activate as a bonus action, providing invisibility to the wearer for 15 seconds. This effect ends if the wearer attacks or casts spells, or if they move more than 10 feet in any direction."
      },
      {
        "title": "Hidden Lore",
        "rules": "Passively grants +5% chance to find hidden loot when worn. This bonus stacks with other similar effects but does not apply to treasure maps or divination magic."
      }
    ],
    "levelRequirementReason": "This collar is accessible to low-level rogues who are just beginning their journey into the city’s underbelly.",
    "vendorReason": "Rogueport is a bustling hub for relics and curios, often housing forgotten artifacts like this collar.",
    "shippingDetail": "The collar arrives in a custom waterproof container to ensure its delicate state remains undisturbed during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "15 seconds",
      "endsWhen": "Attacking, casting spells, or moving more than 10 feet",
      "charges": "Unlimited"
    },
    "priceReason": "The collar's rarity and unique historical significance justify its fair value of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:21:53.036746+00:00",
    "aiReviewedAt": "2026-07-23T17:21:53.036746+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_forgotten_tome": {
    "id": "rogueport_forgotten_tome",
    "name": "Forgotten Tome of the Black Market",
    "description": "The Forgotten Tome of the Black Market, a decrepit leather-bound volume, whispers secrets of shadowy alleys and hidden treasures. Its pages ripple with unseen knowledge, revealing the locations of secret shops and caches in dimly lit corners of the city. The tome's spine crackles as it alters your perception, making shadows dance like living entities, but only when you're within a 10-foot radius under low light conditions.",
    "price": 1000,
    "icon": "📜",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Secrets Revealed",
      "Shadow Perception"
    ],
    "vendor": "rogueport",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Secrets Revealed",
        "rules": "As an action, the user can open the tome to see hidden shop locations or secrets. This effect lasts until the end of your next turn and has a radius of 30 feet."
      },
      {
        "title": "Shadow Perception",
        "rules": "While within 10 feet of the tome, you are aware of any creature that attempts to hide in darkness within 60 feet. This effect lasts for 1 minute unless dispelled."
      }
    ],
    "levelRequirementReason": "The Forgotten Tome requires a high level character to manage its power and use it effectively.",
    "vendorReason": "Rogueport, known for their extensive knowledge of the city's underbelly, is the only vendor with access to such arcane secrets.",
    "shippingDetail": "The tome must be shipped within a sealed container to prevent its secrets from being revealed prematurely.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of your next turn for 'Secrets Revealed'; 1 minute for 'Shadow Perception'",
      "endsWhen": "The effect ends when you use another action or reaction that requires concentration on this tome, or when dispelled by magic.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Forgotten Tome's rarity and the powerful information it provides justify its price.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T17:22:29.878789+00:00",
    "aiReviewedAt": "2026-07-23T17:22:29.878789+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_fury_belt": {
    "id": "rogueport_fury_belt",
    "name": "Fury Belt of the Crimson Gambit",
    "description": "The Fury Belt of the Crimson Gambit, a belt forged from the bones of a fallen gang lord in the forges of Rogueport, channels raw fury into each strike, granting you the strength to overcome even your own fatigue. When reduced to half health during combat, it ignites your rage, increasing your damage by 40% and reducing stamina drain by 30%. The belt hums with the spirit of its creator, enhancing critical hit chance by 15%, ensuring every blow is a deadly dance.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Fortified Strikes",
      "Fatigue Resistance"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Fortified Strikes",
        "rules": "When reduced to half health during combat, the Fury Belt triggers an increase in damage by 40% for 10 seconds. This effect expends a charge and requires you to have at least one charge remaining."
      },
      {
        "title": "Fatigue Resistance",
        "rules": "The belt reduces your stamina drain by 30% during combat, lasting until the start of your next turn. The effect ends if you are no longer engaged in combat or if you fall unconscious."
      }
    ],
    "levelRequirementReason": "This belt requires a minimum level to harness its raw power and channel the spirit of a fallen gang lord.",
    "vendorReason": "Rogueport is known for crafting items that blend utility with dark lore, making it fitting for this belt's origin.",
    "shippingDetail": "Ships via the Rakasha Spirit Walk, known for their swift and reliable deliveries within Rogueport.",
    "usage": {
      "activation": "Passive effect triggered when reduced to half health; requires charges.",
      "duration": "10 seconds after being activated or until end of combat",
      "endsWhen": "Combat ends, you fall unconscious, or the effect is expended",
      "charges": "Limited by charges per day"
    },
    "priceReason": "The belt's rarity and unique crafting process justify its price, balancing its powerful effects with a reasonable cost.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-23T17:22:16.703659+00:00",
    "aiReviewedAt": "2026-07-23T17:22:16.703659+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_glowing_eyepatch": {
    "id": "rogueport_glowing_eyepatch",
    "name": "Glowing Eyepatch of the Midnight Gambler",
    "description": "The Glowing Eyepatch of the Midnight Gambler is a leather-bound patch adorned with an ancient, glowing rune that seems to pulse in sync with the heartbeat of the night itself. In dimly lit areas, it reveals hidden paths and secret doors with each step you take, its light flickering like a beacon guiding through shadows. Crafted by Rogueport's most secretive artisans, this eyepatch is said to have been blessed by an ancient pirate who sought to outmaneuver his adversaries in the dark.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals Hidden Paths and Doors",
      "Guides with Flickering Light"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Paths and Doors",
        "rules": "When worn, this eyepatch grants advantage on Intelligence (Investigation) checks to uncover hidden paths or secret doors in dimly lit areas. It activates as a bonus action, and the effect lasts for 10 minutes."
      },
      {
        "title": "Flickering Light Guidance",
        "rules": "The eyepatch's glow flickers with each step taken by the wearer, illuminating the immediate area around them for 30 feet. This light is dim but sufficient to reveal hidden details within its radius. The effect ends when the wearer stops moving."
      }
    ],
    "levelRequirementReason": "Crafted with simple materials and ancient lore, this eyepatch is accessible to adventurers of all levels.",
    "vendorReason": "Rogueport is known for its unique and practical items that cater to the needs of its inhabitants and visitors alike.",
    "shippingDetail": "Delivered by Pipe Express, this eyepatch arrives in pristine condition with a tracking number included.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "10 minutes or until wearer stops moving",
      "endsWhen": "Wearer stops moving or ends the effect early",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the eyepatch's utility and rarity without being overly expensive.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:22:36.349151+00:00",
    "aiReviewedAt": "2026-07-23T17:22:36.349151+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_gutter_ambush_ring": {
    "id": "rogueport_gutter_ambush_ring",
    "name": "Gutter Ambush Ring of the Silent Ghost",
    "description": "The Gutter Ambush Ring of the Silent Ghost is a silver ring that whispers secrets of the shadows. When you enter a shadowy area, it amplifies your stealth to near-perfection, granting +20% stealth and a +15% chance to trigger ambushes. It also subtly increases trap awareness by +10%, but only when you're already in stealth mode. This deadly tool for underworld assassins is the pinnacle of silent sabotage.",
    "category": "equipment",
    "price": 1000,
    "icon": "🕳",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+20% stealth",
      "+15% chance to trigger ambushes"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Stealth Amplification",
        "rules": "Activates when you enter a shadowy area. Grants +20% stealth and a +15% chance to trigger ambushes for the duration of your next short or long rest."
      },
      {
        "title": "Enhanced Trap Awareness",
        "rules": "Activated upon entering stealth mode, this effect increases trap detection by +10% as long as you remain in stealth. Ends if you are discovered or exit stealth."
      }
    ],
    "levelRequirementReason": "This ring is designed for experienced rogues who can manage its effects more effectively.",
    "vendorReason": "Rogueport's network of underworld contacts ensures they have the most cutting-edge tools for urban assassins and spies.",
    "shippingDetail": "Delivered by Pipe Express, known for its reliable underground courier service.",
    "usage": {
      "activation": "Passive effect activated upon entering a shadowy area or stealth mode.",
      "duration": "Until the end of your next short or long rest.",
      "endsWhen": "If you are discovered in stealth or leave a shadowy area, the effects cease immediately.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at this price to reflect its unique combination of stealth and ambush benefits without overshadowing other rogue gear.",
    "priceOriginal": 2600,
    "priceReviewedAt": "2026-07-23T17:22:07.862196+00:00",
    "aiReviewedAt": "2026-07-23T17:22:07.862196+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_gutter_bane": {
    "id": "rogueport_gutter_bane",
    "name": "Gutter Bane Mask",
    "description": "The Gutter Bane Mask shrouds its wearer in a noxious, smoky veil that dances like the breath of forgotten alleyway fiends. Worn under cover of darkness or shadowy environs, it grants invisibility and immunity to fear checks, allowing the bold rogue to slip past their foes unseen. Crafted from the bones of damned souls and alchemically treated with a noxious blend of alley smoke, the mask enhances Perception by +10 in such conditions, making it an indispensable tool for those who navigate the city's underbelly.",
    "category": "equipment",
    "price": 1000,
    "icon": "👤",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Invisibility",
      "Immunity to Fear"
    ],
    "vendor": "rogueport",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "Activates as a bonus action. The wearer becomes invisible until their next turn or when they take damage, whichever comes first. This effect can be used once per short rest."
      },
      {
        "title": "Immunity to Fear",
        "rules": "The wearer gains immunity to fear effects in dark or shadowy conditions. This immunity persists as long as the wearer is within an area of dim light or darkness. No saving throw is required against any fear effect while wearing this mask."
      }
    ],
    "levelRequirementReason": "Crafted with complex alchemy and necromancy, the Gutter Bane Mask requires a minimum character level to harness its dark energies.",
    "vendorReason": "Rogueport's extensive network in the city's underbelly allows them to acquire rare and powerful items like the Gutter Bane Mask.",
    "shippingDetail": "Ships via Boo Spectral Mail, known for its timely deliveries even through the most dangerous parts of town.",
    "usage": {
      "activation": "Bonus action to activate invisibility; no activation required for immunity to fear.",
      "duration": "Invisibility lasts until the wearer's next turn or when they take damage, whichever comes first. Immunity persists while in dark or shadowy conditions.",
      "endsWhen": "The effect ends if the wearer takes damage or leaves a darkened area.",
      "charges": "This mask has an unlimited number of uses."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rarity and the materials used in its creation.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T17:22:55.814374+00:00",
    "aiReviewedAt": "2026-07-23T17:22:55.814374+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_gutter_blood": {
    "id": "rogueport_gutter_blood",
    "name": "Gutter Blood Vial",
    "description": "The Gutter Blood Vial is a vial of dark crimson liquid that once belonged to a rat from the roughest alleyways of Rogueport. Drinking it unleashes a primal rage, causing your eyes to glint with an eerie red light and your movements to become faster and more focused. It's said that the essence within can stir the basest instincts, making you nearly unstoppable in close-quarters combat for a short time.",
    "price": 1000,
    "icon": "💉",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Bloodrage",
      "Rapid Stalker"
    ],
    "vendor": "rogueport",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bloodrage",
        "rules": "When consumed, the drinker enters a state of bloodrage. For 1 minute, you gain advantage on attack rolls and melee damage rolls. If an enemy attacks you while you are stunned, they take 1d6 psychic damage."
      },
      {
        "title": "Rapid Stalker",
        "rules": "For the duration of Bloodrage, your walking speed increases by 10%. You can only use this effect once every long rest."
      }
    ],
    "levelRequirementReason": "The Gutter Blood Vial is potent and dangerous even for lower-level rogues, requiring a minimum level to safely handle its effects.",
    "vendorReason": "Rogueport vendors have the means to source such exotic and dangerous items from the city's underbelly.",
    "shippingDetail": "The vials are shipped by Boo, who ensures they reach their destination in one piece, though the journey can be long due to the unpredictable nature of his deliveries.",
    "usage": {
      "activation": "Consume the vial as an action.",
      "duration": "1 minute",
      "endsWhen": "You enter a stunned condition or are knocked unconscious.",
      "charges": "Once per long rest"
    },
    "priceReason": "The Gutter Blood Vial is priced high due to its rarity, the difficulty in procuring such an item, and the inherent risk involved with consuming it.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T17:22:32.351625+00:00",
    "aiReviewedAt": "2026-07-23T17:22:32.351625+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_gutter_gear": {
    "id": "rogueport_gutter_gear",
    "name": "Gutter Gear",
    "description": "Gutter Gear is a rusted, jury-rigged tool that gleams with years of clandestine use. Crafted from scavenged parts and reinforced by the sweat and ingenuity of its previous owner, this tool can break down even the most sophisticated locks. Moving through dimly lit areas, you feel an unerring sense of confidence, as if the shadows themselves part to let you pass unseen. Gutter Gear is a rogue's best friend in high-stakes situations, whether you're infiltrating or escaping with your life.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Lockbreaker",
      "Shadow Stealth"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Lockbreaker",
        "rules": "By using an action, you can attempt to unlock any mechanical lock. This uses a Dexterity (Sleight of Hand) check opposed by the lock's DC. If successful, the lock is bypassed with 100% success."
      },
      {
        "title": "Shadow Stealth",
        "rules": "While in dimly lit areas, you gain a +2 bonus to Dexterity (Stealth) checks and have advantage on perception checks made to avoid being noticed. This effect lasts until the end of your next turn after leaving a dimly lit area."
      }
    ],
    "levelRequirementReason": "This tool is designed for beginners who are learning the basics of lockpicking and stealth.",
    "vendorReason": "Rogueport specializes in equipment that caters to those who live by their wits, making Gutter Gear a perfect fit for their inventory.",
    "shippingDetail": "Ships within the week with special handling to ensure it arrives in pristine condition.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous (Lockbreaker) and lasts until end of next turn (Shadow Stealth)",
      "endsWhen": "The effect ends when you leave a dimly lit area for Shadow Stealth, or the lock is bypassed for Lockbreaker.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects its rare craftsmanship and the materials needed to create such an essential tool for a rogue.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:23:28.581939+00:00",
    "aiReviewedAt": "2026-07-23T17:23:28.581939+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_gutter_glaive": {
    "id": "rogueport_gutter_glaive",
    "name": "Gutter Glaive of the Broken Chain",
    "description": "The Gutter Glaive of the Broken Chain is a cursed blade forged from stolen steel, its edge glowing faintly in the dark. This weapon delivers devastating blows to foes with chain or linked abilities, dealing three times the normal damage. Each strike leaves behind a lingering trail of blood that marks your enemy's path for moments. The glaive's curse ensures it may shatter after just three uses, rendering it a dangerous yet limited tool for the daring and desperate.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Chain Break",
      "Blood Echo"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Chain Break",
        "rules": "When you hit an enemy with chain or linked abilities, this weapon deals triple damage. This effect ends when the glaive shatters."
      },
      {
        "title": "Blood Echo",
        "rules": "After each successful attack, a faint trail of blood marks your foe's path for 3 seconds. An enemy within 10 feet must succeed on a DC 14 Dexterity saving throw or become disoriented until the start of their next turn."
      }
    ],
    "levelRequirementReason": "This weapon requires significant skill and experience to wield its cursed power effectively.",
    "vendorReason": "Rogueport is known for dealing in rare, dangerous, and cursed items like the Gutter Glaive of the Broken Chain.",
    "shippingDetail": "The blade must be shipped via Pipe Express to ensure it arrives safely, as its curse could otherwise break during transit.",
    "usage": {
      "activation": "On hit with a melee attack",
      "duration": "Instantaneous per use",
      "endsWhen": "The glaive shatters after three uses",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to reflect its cursed nature and limited durability, this weapon offers a powerful yet risky option for adventurers.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T17:22:47.433381+00:00",
    "aiReviewedAt": "2026-07-23T17:22:47.433381+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_gutter_glass": {
    "id": "rogueport_gutter_glass",
    "name": "Gutter Glass of the Crimson Gutter",
    "description": "The Gutter Glass of the Crimson Gutter is a cracked, obsidian-tinted lens forged from the very heart of the city's underbelly. Crafted by shadowy alchemists in the depths of the sewers, this relic reveals hidden paths and secrets when held near dark alleys or sewers. Its truth-lens glow can be seen for 10 feet, revealing lies and motives on those it faces. The glass itself is said to hum with the echoes of past smugglers and their clandestine routes, guiding the observant to unseen exits and entrances.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Secret Sight",
      "Truth Lens"
    ],
    "vendor": "rogueport",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Secret Sight",
        "rules": "When activated as an action within a 10-foot radius of hidden paths or traps, the Gutter Glass illuminates them for the duration. This effect does not require line of sight and can reveal only one set of secrets per use."
      },
      {
        "title": "Truth Lens",
        "rules": "When activated as an action on a creature within 10 feet, the glass reveals any lies or hidden motives the target is currently concealing. The target must make a Wisdom saving throw (DC 13) or be temporarily confused for 1 round."
      }
    ],
    "levelRequirementReason": "Requires basic knowledge of the city's secrets to effectively use this glass.",
    "vendorReason": "Rogueport is a hub of underground activity and would stock items that help with tracking and avoiding detection in their territory.",
    "shippingDetail": "Ships via Koopa Postal's express courier, arriving within one week, but may require a special delivery to the recipient’s location.",
    "usage": {
      "activation": "Activates as an action or bonus action when used near hidden paths or on targets.",
      "duration": "Instantaneous for Secret Sight; 1 round for Truth Lens.",
      "endsWhen": "Charges are exhausted after two uses, and the item requires a short rest to be recharged.",
      "charges": "2"
    },
    "priceReason": "Balanced at this price due to its rarity and utility for both stealth and deception.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:23:08.166402+00:00",
    "aiReviewedAt": "2026-07-23T17:23:08.166402+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_gutter_glove": {
    "id": "rogueport_gutter_glove",
    "name": "Gutter Glove",
    "description": "The Gutter Glove, a cursed leather memento of Rogueport's darker streets, grants its wearer a fleeting immunity to traps and environmental hazards. When activated, its green-glowing fingers emit an eerie light that dances in the shadows, making it nearly invisible within dark alleys or underground tunnels. The glove also channels ambient darkness, healing itself with 1d6 hit points when used in shadowy zones, but this regenerative property is limited to three uses per day.",
    "category": "equipment",
    "price": 1000,
    "icon": "🕯",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Immunity to Trap Triggers",
      "Shadow Healing"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shadow Couriers of Rakasha",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Immunity to Trap Triggers",
        "rules": "When activated as a bonus action, the Gutter Glove grants its wearer immunity to trap triggers for 1 minute. This effect can be used once per short rest. If worn in an area of shadow or darkness, the glove also provides +2d4 damage when dealing non-corporeal target damage."
      },
      {
        "title": "Shadow Healing",
        "rules": "The Gutter Glove gains 1d6 hit points from ambient darkness for each use within a shadowy zone. This effect can be used up to three times per day, and it does not consume any of the glove's charges."
      }
    ],
    "levelRequirementReason": "The cursed nature of the Gutter Glove requires its wearer to have sufficient experience and skill to properly handle such a dangerous artifact.",
    "vendorReason": "Rogueport's vendors, known for their dealings in dark magic and cursed relics, are well-acquainted with the Gutter Glove's origins.",
    "shippingDetail": "The Shadow Couriers ensure that the Gutter Glove arrives safely within a sealed darkness envelope, protecting it from prying eyes until it reaches its destination.",
    "usage": {
      "activation": "Bonus action to activate immunity and deal damage; passive shadow healing occurs.",
      "duration": "1 minute per use",
      "endsWhen": "Ends when the effect duration expires or a successful DC 15 Wisdom (Insight) check is made against it by an observer. The shadow healing regenerates hit points only while in darkness and within three uses per day limit.",
      "charges": "Unlimited, but limited to three shadow healing uses per day"
    },
    "priceReason": "The Gutter Glove's cursed nature and the risks involved with its use justify this fair price in XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:23:18.464278+00:00",
    "aiReviewedAt": "2026-07-23T17:23:18.464278+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_gutter_gut_bolt": {
    "id": "rogueport_gutter_gut_bolt",
    "name": "Gutter Gut Bolt",
    "description": "The Gutter Gut Bolt is a gnarled, corroded metal spike forged from the discarded tools of Rogueport's underbelly. Its surface is pitted with age and use, yet it glows faintly with an ancient magic that ignites upon impact. In confined spaces, this spiked projectile explodes into a cloud of razor-sharp shards, dealing heavy damage and creating a choking gas that forces enemies to cough for moments on end.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Explosive Spikes",
      "Choking Cloud"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Explosive Spikes",
        "rules": "When thrown, the Gutter Gut Bolt explodes into a cloud of sharp metal shards. Creatures within 5 feet must succeed on a DC 14 Dexterity saving throw or take 20d6 piercing damage and be knocked prone."
      },
      {
        "title": "Choking Cloud",
        "rules": "For the next 3 seconds, creatures in the area of effect are subjected to a choking gas. They must make a DC 14 Constitution saving throw at the start of their turn or take 5d6 poison damage and be incapacitated until the start of their next turn."
      }
    ],
    "levelRequirementReason": "Requires basic combat proficiency to effectively use this weapon in confined spaces.",
    "vendorReason": "Rogueport's underground blacksmiths create this item from salvaged materials, perfecting its design for close-quarters combat.",
    "shippingDetail": "Due to the fragility of the explosive core, it must be shipped via Pipe Express within a reinforced wooden crate.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous explosion and effect duration",
      "endsWhen": "The cloud dissipates after 3 seconds or when a creature is no longer in range of the choke zone.",
      "charges": "Unlimited, but requires a short rest to reload"
    },
    "priceReason": "Balanced for its explosive and choking capabilities; worth more than standard equipment.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T17:23:52.176065+00:00",
    "aiReviewedAt": "2026-07-23T17:23:52.176065+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_gutter_gutter_gutter": {
    "id": "rogueport_gutter_gutter_gutter",
    "name": "Gutter Gutter Gutter",
    "description": "The Gutter Gutter Gutter, a sleek obsidian dagger with edges that shimmer like dark water, whispers through defenses as silently as it strikes. Its cursed edge leaves behind a trail of phantom echoes that disorient foes, making them stumble and lose their footing. The dagger's blade seems to dance on its own, slicing through armor and flesh with deadly precision, leaving an unsettling echo in the air long after the strike.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+50% critical strike chance",
      "10% chance to stun target on hit"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Critical Strike Boost",
        "rules": "When you make a melee attack with this dagger, it grants you advantage on the roll and increases your critical hit range by one step. This effect lasts until the start of your next turn."
      },
      {
        "title": "Stunning Echo",
        "rules": "On a successful hit, there is a 10% chance to stun the target for 1 round. The target must make a DC 15 Dexterity saving throw or be stunned. Once per short rest, you can use your action to attempt this effect."
      }
    ],
    "levelRequirementReason": "Requires at least third-level proficiency in stealth and weapon use to wield the dagger effectively.",
    "vendorReason": "Rogueport specializes in crafting and selling weapons for those who walk the shadows, making it a natural fit for such an enigmatic item.",
    "shippingDetail": "Ships via Pipe Express with expedited delivery to ensure your dagger arrives sharp and ready for use.",
    "usage": {
      "activation": "On hit during a melee attack as a bonus action",
      "duration": "Instantaneous, lasting until the start of your next turn after the strike",
      "endsWhen": "The effect ends on a miss or when you make another melee attack with this dagger before your next turn.",
      "charges": "Unlimited; it reforges itself after each use"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its cursed edge and disorienting effects that make it a formidable weapon for rogue classes.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-24T23:30:33.583502+00:00",
    "aiReviewedAt": "2026-07-24T23:30:33.583502+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_gutter_serpent_tongue": {
    "id": "rogueport_gutter_serpent_tongue",
    "name": "Gutter Serpent Tongue",
    "description": "The Gutter Serpent Tongue, a jagged obsidian blade forged from the last bite of a serpent that consumed an entire rogue port's underbelly, splits through even the toughest armor with ease. Its tip drips with the venom of its creator and deals extra damage to stealthy foes. While holding it, your melee attacks are swifter, granting you +5% attack speed until exhaustion, and striking an enemy reduces their movement speed by 10%. This weapon is a relic of dark times, crafted in the fires of treachery.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Venomous Bite",
      "Swift Strikes"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Venomous Bite",
        "rules": "When you hit an enemy with this weapon, they must succeed on a DC 14 Constitution saving throw or suffer a -10 foot movement speed penalty until the end of their next turn."
      },
      {
        "title": "Swift Strikes",
        "rules": "While holding the Gutter Serpent Tongue, you gain +5% to your melee attack speed. This effect lasts for 1 minute and resets after each short rest."
      }
    ],
    "levelRequirementReason": "This relic requires a certain level of expertise in combat to wield its full potential.",
    "vendorReason": "Rogue Port has a deep connection with the weapon's origin and is privy to such rare artifacts.",
    "shippingDetail": "Delivered through shadowy couriers, ensuring safe arrival but not without its own risks.",
    "usage": {
      "activation": "Instantaneous effect upon hit. Swift Strikes lasts until exhaustion or after a short rest.",
      "duration": "Venomous Bite: Until the end of the target's next turn. Swift Strikes: Lasts for 1 minute per use, resetting on short rest.",
      "endsWhen": "Exhaustion or short rest for Swift Strikes; failed saving throw ends Venomous Bite.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at a price that reflects its rare origin and unique effects, ensuring it's within reach of those who truly need it.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T17:23:44.441918+00:00",
    "aiReviewedAt": "2026-07-23T17:23:44.441918+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_gutter_soul": {
    "id": "rogueport_gutter_soul",
    "name": "Gutter Soul",
    "description": "The Gutter Soul is a blackened vial that exudes an eerie, dark glow. Crafted from the essence of forgotten souls in the depths of Rogueport's undercity, it drains 10% of the user’s health to restore 50 hit points and grant temporary resistance to all damage types for 1 minute. This macabre elixir is infamous among rogues and scoundrels for its ability to turn desperation into a fleeting advantage.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Drains Health, Restores HP",
      "Resistance to All Damage"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blood Reclamation",
        "rules": "The user must spend 10% of their current health. This effect grants the user 50 hit points and temporary resistance to all damage types for a duration of 1 minute. The effect has no save DC and can be used once per long rest."
      },
      {
        "title": "Dreadful Draught",
        "rules": "The Gutter Soul is crafted from the essence of souls lost in Rogueport's undercity, making it a rare and dangerous item. Its usage is limited to one time per day due to its dark crafting process and the toll it takes on the user."
      }
    ],
    "levelRequirementReason": "This potion can be used by characters of any level who have the skills needed to find or purchase it.",
    "vendorReason": "Rogueport is known for its underground markets and this vial's dark origins make it a fitting item for their collection.",
    "shippingDetail": "Delivered by Shy Guy Smugglers, the Gutter Soul must be handled with care due to its volatile nature. Delivery takes approximately one week from Rogueport.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "1 minute",
      "endsWhen": "The duration expires or the user is incapacitated",
      "charges": "Unlimited, but can only be used once per day"
    },
    "priceReason": "This rare potion's price reflects its dark origins and the limited number of souls available for crafting.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:23:57.894699+00:00",
    "aiReviewedAt": "2026-07-23T17:23:57.894699+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_gutter_tongue_tome": {
    "id": "rogueport_gutter_tongue_tome",
    "name": "Gutter Tongue Tome of the Unwritten Law",
    "description": "The Gutter Tongue Tome of the Unwritten Law is a worn leather-bound tome that hums with the city’s undercurrents. Its pages are stained with ink and grease, and its edges are frayed from countless readings. This book whispers secrets of the city’s hidden dealings, revealing truths only through the cryptic language of street slang and bribes. Reading it uncovers one secret or rumor each day, while its very presence reveals the true cost of services, often much higher than advertised.",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Street Whisper",
      "True Cost Revelation"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Street Whisper",
        "rules": "As an action, you can read a secret or rumor from the city’s underworld. This effect reveals one piece of information each day, but only when used in areas known for their underground activities."
      },
      {
        "title": "True Cost Revelation",
        "rules": "While holding this tome, any transaction you make with a corrupt official is subject to a -1 penalty on the persuasion or bluff check. However, if successful, it uncovers the true cost of the item or service, often significantly higher than expected."
      }
    ],
    "levelRequirementReason": "This item requires basic street knowledge and experience to properly use its effects.",
    "vendorReason": "Rogueport is well-known for dealing in information and secrets, making this item a natural fit.",
    "shippingDetail": "Due to the nature of the book’s contents, it must be delivered personally by Shy Guy Smugglers to ensure its secrecy.",
    "usage": {
      "activation": "action",
      "duration": "instantaneous (one secret or rumor per day)",
      "endsWhen": "charges are exhausted or the item is destroyed",
      "charges": "1 charge per day"
    },
    "priceReason": "Balanced at this price point to reflect its rarity and usefulness without overshadowing other items.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-24T23:29:51.835741+00:00",
    "aiReviewedAt": "2026-07-24T23:29:51.835741+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_hag_s_cursed_glove": {
    "id": "rogueport_hag_s_cursed_glove",
    "name": "Hag S Cursed Glove",
    "description": "The Hag S Cursed Glove, a relic from an ancient hag’s lair, is imbued with malevolent magic that grants temporary immunity to fear and enhances stealth. Its leather is cracked and darkened by arcane sigils, and the gloves are said to have been crafted in unholy rituals. Each use drains its wearer's stamina, reducing it by 20%, but the curse also whispers secrets of the hag’s past to those who dare wear it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🖤",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Immunity to fear",
      "+2 bonus to Stealth checks"
    ],
    "vendor": "rogueport",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Fear",
        "rules": "The wearer gains temporary immunity to all fear effects for a duration of 2 turns. The effect ends if the wearer is subjected to another fear effect, or when the glove's charges are exhausted."
      },
      {
        "title": "Stealth Bonus",
        "rules": "+2 bonus to Stealth checks, which lasts until the end of the wearer’s next turn. This effect does not stack with any other sources of Stealth bonuses."
      }
    ],
    "levelRequirementReason": "The glove's magic is potent enough that even low-level rogues can benefit from its effects.",
    "vendorReason": "Rogueport, a bustling mercantile district, often deals in rare magical artifacts and relics of dark origins.",
    "shippingDetail": "The gloves are delivered by Boo Spectral Mail, known for its impeccable secrecy and reliability.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "2 turns",
      "endsWhen": "Subjected to another fear effect or when the glove's charges are exhausted",
      "charges": "One charge per use"
    },
    "priceReason": "The cursed nature of the item, its rarity, and the unique magical effects it provides justify a price of 1000 XP.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-23T17:24:25.830503+00:00",
    "aiReviewedAt": "2026-07-23T17:24:25.830503+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_heart_of_the_gutter": {
    "id": "rogueport_heart_of_the_gutter",
    "name": "Heart of the Gutter",
    "description": "The Heart of the Gutter, a pulsing amulet forged from the corrupted heart of a rogue port gargoyle, grants its wearer an eerie crimson glow that warns of impending danger. Its ancient craftsmanship allows the wearer to move silently through shadows, leaving no trace in their wake. The amulet's power is as treacherous as it is useful, amplifying stealth and evasion skills in the most unforgiving alleys of the city.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 0,
    "rarity": "rare",
    "effects": [
      "+2 bonus to Stealth checks",
      "Moves silently through shadows"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "+2 Bonus to Stealth Checks",
        "rules": "When the wearer uses Stealth, they gain a +2 bonus. This effect can be used once per short rest."
      },
      {
        "title": "Move Silently Through Shadows",
        "rules": "The wearer moves silently through shadows, leaving no sound or trace. This effect lasts for 1 minute and can be renewed as an action."
      }
    ],
    "levelRequirementReason": "This amulet requires a higher level to ensure its power is balanced with the abilities of more experienced rogues.",
    "vendorReason": "The Rogueport vendors specialize in relics and items that enhance one's skills in stealth and evasion, making this amulet an ideal addition to their stock.",
    "shippingDetail": "The item is delivered by the Rakasha Spirit Walk, ensuring it arrives swiftly and undetected.",
    "usage": {
      "activation": "Instantaneous (requires no action on subsequent turns)",
      "duration": "1 minute or until dismissed",
      "endsWhen": "The effect ends if the wearer takes a short rest, is incapacitated, or the amulet is removed from their body",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item's price reflects its rare origin and unique properties that enhance stealth abilities significantly.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-23T17:24:35.498845+00:00",
    "aiReviewedAt": "2026-07-23T17:24:35.498845+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_hush_baton": {
    "id": "rogueport_hush_baton",
    "name": "Hush Baton",
    "description": "The Hush Baton is a sleek, metallic device designed for rogues to silence guards without provoking alarms or drawing attention. Its core component is a precision-engineered diaphragm that emits an ultrasonic frequency, temporarily suppressing nearby enemies' ability to communicate. The hush it creates is so profound that even the most subtle of sounds are muffled, and its range extends to a ten-foot radius, ensuring stealthy missions remain undetected. When not in use as a weapon, the Hush Baton can be used for non-lethal incapacitation.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Suppresses enemy audio for 3 seconds",
      "Can be used as a blunt weapon"
    ],
    "vendor": "rogueport",
    "shippedBy": "Koopa Postal Express",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Audio Suppression",
        "rules": "The Hush Baton emits an ultrasonic frequency that renders nearby enemies unable to communicate or make noise. This effect has a radius of ten feet and lasts for 3 seconds, during which time affected creatures are considered incapacitated and cannot take actions requiring speech or sound."
      },
      {
        "title": "Blunt Weapon",
        "rules": "When used as a weapon, the Hush Baton deals 1d6 bludgeoning damage on a hit. It requires no special proficiency to use and can be wielded in either hand, but it cannot be reloaded or fired."
      }
    ],
    "levelRequirementReason": "Requires at least second-level proficiency for the finesse and stealth skills that this device demands.",
    "vendorReason": "Rogueport specializes in equipment needed by their agents to complete missions without being detected or interrupted.",
    "shippingDetail": "Delivered with utmost secrecy, ensuring the Hush Baton arrives in pristine condition and undetected.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when its duration expires or when the user activates another ability that suppresses sound within the same area.",
      "charges": "Unlimited, but requires a short rest to fully recharge after extended use."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its precision engineering and specialized use in stealth operations.",
    "priceOriginal": 2700,
    "priceReviewedAt": "2026-07-23T17:25:13.998057+00:00",
    "aiReviewedAt": "2026-07-23T17:25:13.998057+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_hush_hush_hood": {
    "id": "rogueport_hush_hush_hood",
    "name": "Hush Hush Hood",
    "description": "The Hush Hush Hood is a dark, tattered cloth that whispers secrets to the wind. Crafted from enchanted silence threads in the hidden workshops of Rogueport, it muffles sound and grants its wearer an evasive edge. When donned with the silence spell or its equivalent, this hood boosts your Dexterity saving throws by +2 and offers a 30% chance to dodge melee attacks for up to one hour, until you speak or remove it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎭",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Silent evasion",
      "Muffled sound"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silent Evasion",
        "rules": "Activates on donning with Silence. Grants a +2 bonus to Dexterity saving throws and a 30% chance to dodge melee attacks for one hour, ends when you speak or remove the hood."
      },
      {
        "title": "Muffled Sound",
        "rules": "Grants the wearer complete silence while worn; sound is muffled by 50%. Ends upon removal of the hood or speaking."
      }
    ],
    "levelRequirementReason": "Basic enchantment that offers utility to novice adventurers without overburdening them with power.",
    "vendorReason": "Rogueport is known for its underground trade in magical trinkets and devices, making the Hush Hush Hood a fitting addition.",
    "shippingDetail": "Delivered with a Shy Guy Smugglers delivery slip, ensuring secrecy during transport.",
    "usage": {
      "activation": "Donned with Silence or its equivalent spell",
      "duration": "One hour, until you speak or remove the hood",
      "endsWhen": "Speaking or removing the hood",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price for a rare item that offers both utility and thematic immersion without being overpowered.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T17:24:53.747136+00:00",
    "aiReviewedAt": "2026-07-23T17:24:53.747136+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_ink_blade": {
    "id": "rogueport_ink_blade",
    "name": "Bloodstained Blade of the Silent Gambler",
    "description": "The Bloodstained Blade of the Silent Gambler, forged from the very pages of a notorious criminal's ledger, whispers of past betrayals in its red glow when your target is near peril. This dagger deals an additional 25% damage to foes marked by 'doubt' or 'confusion', and its blade shimmers with a malevolent light that betrays hidden malice. Wielding it comes at a cost: you must sacrifice 1000 hit points for the chance to unleash its fury, but only once per day.",
    "category": "equipment",
    "price": 3800,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Glows red when target is in danger",
      "Deals extra damage against enemies with 'doubt' or 'confusion'"
    ],
    "vendor": "rogueport",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Glow and Danger Detection",
        "rules": "When the blade glows red, it indicates that your target is in imminent peril. This effect lasts until the start of your next turn."
      },
      {
        "title": "Extra Damage",
        "rules": "For 10 seconds after activation, this blade deals an additional 25% damage to targets with the 'doubt' or 'confusion' condition. The blade's usage costs 1000 hit points and can only be used once per day."
      }
    ],
    "levelRequirementReason": "The complexity of the blade's magic requires a minimum of 5 levels to master its invocation.",
    "vendorReason": "Rogueport, with their extensive network in criminal circles, is privy to such rare and powerful artifacts forged from the very lore they trade in.",
    "shippingDetail": "Ships via Boo Spectral Mail, a service known for its reliability but slightly delayed deliveries.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds or until the start of your next turn",
      "endsWhen": "The duration ends when the target leaves combat or is no longer in danger.",
      "charges": "Once per day"
    },
    "priceReason": "The blade's rare materials and unique enchantments justify its substantial price.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-23T17:25:03.134400+00:00",
    "aiReviewedAt": "2026-07-23T17:25:03.134400+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_ink_jam_talisman": {
    "id": "rogueport_ink_jam_talisman",
    "name": "Ink Jam Talisman",
    "description": "The Ink Jam Talisman is a relic of Admiral Bloopers' ink-jamming campaign, crafted by the Hammer Bros Handling team. This talisman was once used to seal Ricco Harbor's docks and now serves as a sabotage tool for stealthy rogues. When activated, it coats enemies in shimmering ink, rendering their armor temporarily invisible while dealing minor ink damage. It grants the wearer a +2 bonus to Stealth checks during its duration.",
    "price": 1000,
    "icon": "🖋",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Armor Invisibility",
      "Ink Damage"
    ],
    "vendor": "rogueport",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Armor Invisibility",
        "rules": "When activated, this talisman coats enemies in ink, making their armor invisible for 1 round. This effect is instantaneous and has a range of touch. There is no save DC; the enemy's armor simply vanishes from view."
      },
      {
        "title": "Ink Damage",
        "rules": "The talisman also inflicts 1d4 points of ink damage to any target it strikes, dealing this damage at the start of the target's turn. The effect ends when the talisman is removed or expended in combat."
      }
    ],
    "levelRequirementReason": "This relic requires high skill and dexterity to wield effectively.",
    "vendorReason": "Rogueport specializes in relics of sabotage and stealth, making this talisman a perfect fit for their inventory.",
    "shippingDetail": "The Hammer Bros ensure safe delivery with their signature precision, though the ink may cause minor delays due to drying out.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; Armor Invisibility lasts for 1 round",
      "endsWhen": "Effect ends when talisman is removed or expended in combat",
      "charges": "Unlimited"
    },
    "priceReason": "The talisman's unique crafting and historical significance justify its moderate price.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T17:25:06.682285+00:00",
    "aiReviewedAt": "2026-07-23T17:25:06.682285+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_ink_of_the_void": {
    "id": "rogueport_ink_of_the_void",
    "name": "Ink of the Void",
    "description": "The Ink of the Void is a vial containing inky black liquid, its surface slick and unnaturally smooth. Once applied to parchment or papyrus, written words become invisible to the naked eye—until the recipient chooses to read them. If exposed to hostile magic or intense scrutiny, it triggers a psychic backlash, leaving the user disoriented for 1d4 rounds. This ink is invaluable for blackmail, deception, and erasing debts without trace.",
    "price": 1000,
    "icon": "🖋",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Invisibility to Written Text",
      "Psychic Backlash on Hostile Exposure"
    ],
    "vendor": "rogueport",
    "shippedBy": "Courier of Shadows",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility to Written Text",
        "rules": "When applied to a surface, this ink renders written words invisible for up to 24 hours. The effect is instantaneous and lasts until the recipient chooses to read it. Reading requires no action; the text reappears as normal. There are no saving throws or resistances against this effect."
      },
      {
        "title": "Psychic Backlash",
        "rules": "If exposed to hostile magic, intense scrutiny, or prolonged use, the ink triggers a psychic backlash. The user becomes disoriented for 1d4 rounds and suffers a -2 penalty to all dexterity-based rolls until the start of their next turn."
      }
    ],
    "levelRequirementReason": "The Ink of the Void is accessible to characters of any level as it requires no specific skills or abilities for use.",
    "vendorReason": "Rogueport, known for its clandestine dealings and expertise in espionage, naturally stocks this item used by their clients for covert operations.",
    "shippingDetail": "Ships via the Courier of Shadows, ensuring swift delivery with an additional layer of secrecy.",
    "usage": {
      "activation": "Instantaneous application to a surface; no action required once applied.",
      "duration": "Up to 24 hours per use.",
      "endsWhen": "User chooses to read it or exposure to hostile magic triggers the backlash.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Ink of the Void's rarity, unique properties, and versatile utility justify its price in experience points.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-23T17:25:25.040590+00:00",
    "aiReviewedAt": "2026-07-23T17:25:25.040590+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_inkwell_of_lies": {
    "id": "rogueport_inkwell_of_lies",
    "name": "Inkwell of Lies",
    "description": "The Inkwell of Lies is a sleek glass vial filled with an ink that defies reality. When applied to any surface, it instantaneously alters records and identities, crafting falsehoods that can mislead even the most vigilant. The ink's effects last precisely ten minutes before fading into nothingness, leaving behind only the shadows of its deception. Be cautious—those who glance upon altered records may find themselves momentarily disoriented by the lies they see.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "False Records",
      "Temporal Deception"
    ],
    "vendor": "rogueport",
    "shippedBy": "Courier Pegasus Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "False Records",
        "rules": "As a bonus action, apply ink to an unoccupied surface. The ink creates false records or identities that last for 10 minutes before fading away. Any creature reading the altered text has disadvantage on perception checks made within one minute of exposure."
      },
      {
        "title": "Temporal Deception",
        "rules": "The ink's effects are temporary and will fade after ten minutes, during which time any creature that reads the text must succeed on a DC 13 Wisdom saving throw or become confused for 1 round. This effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "This item is designed to assist novices in their mischievous endeavors without requiring high-level expertise.",
    "vendorReason": "Rogueport specializes in items that aid in subterfuge and espionage, making the Inkwell of Lies a fitting addition to their inventory.",
    "shippingDetail": "The ink is shipped in a specially insulated container to ensure it remains potent during transit.",
    "usage": {
      "activation": "Bonus action to apply ink and alter records.",
      "duration": "10 minutes before fading.",
      "endsWhen": "Exhaustion after one use per long rest or ten minutes of exposure.",
      "charges": "Unlimited uses, but only once per long rest."
    },
    "priceReason": "The Inkwell of Lies is priced to reflect its unique utility and the cost of materials needed for such a potent item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:25:20.197026+00:00",
    "aiReviewedAt": "2026-07-23T17:25:20.197026+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_iron_soul_key": {
    "id": "rogueport_iron_soul_key",
    "name": "Iron Soul Key",
    "description": "The Iron Soul Key hums with a cold metallic energy, forged from ancient iron that once sealed the gates of a forgotten realm. Its core glows faintly when it aligns with locks or secrets, and legends tell that its touch can bypass even the most intricate traps set by master blacksmiths. With this key, you can unlock hidden doors and safes, and perhaps even open the minds of those who guard forbidden knowledge.",
    "price": 1000,
    "icon": "🔐",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Unlock Hidden Security",
      "Trap Resistance"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unlock Hidden Security",
        "rules": "Activates as a bonus action to unlock one hidden door, safe, or similar lock. Successfully used on a lock with a DC of 25 grants you access and expends one use. Each key can be used three times per long rest."
      },
      {
        "title": "Trap Resistance",
        "rules": "Active for 10 minutes after successful unlock attempt. Grants immunity to all lock-based traps within 30 feet, including those triggered by a failed unlock roll. Ends when the duration expires or if the key is damaged in combat."
      }
    ],
    "levelRequirementReason": "The Iron Soul Key requires minimal dexterity and knowledge of locks to use effectively.",
    "vendorReason": "Rogueport specializes in tools needed for sneaking and escaping, so they stock the Iron Soul Key as a must-have item.",
    "shippingDetail": "Ships within three days via fast courier service.",
    "usage": {
      "activation": "Bonus action to unlock or Trap Resistance activation.",
      "duration": "10 minutes for Trap Resistance; instantaneous for unlocking.",
      "endsWhen": "Duration ends when the time expires, key is damaged in combat, or you use it three times per long rest.",
      "charges": "Three uses per day that recharge after a long rest."
    },
    "priceReason": "The Iron Soul Key combines both utility and defense, making it a valuable asset for any rogue or detective.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:25:35.880656+00:00",
    "aiReviewedAt": "2026-07-23T17:25:35.880656+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_ironclad_bloodmask": {
    "id": "rogueport_ironclad_bloodmask",
    "name": "Ironclad Bloodmask",
    "description": "The Ironclad Bloodmask is a cursed, heavy iron helm that conceals your visage and grants you temporary invisibility to slip past foes unnoticed. The mask's cold metal shimmers with an eerie glow when worn, its chilling aura sending tremors down the spines of nearby creatures. Upon donning it, there's a 20% chance for enemies to be confused on their first encounter with you; this confusion lasts until they make a successful Wisdom saving throw.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Confusion"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "When activated, the mask grants temporary invisibility to the wearer for up to 10 seconds. This effect ends if you take any action other than moving silently or if you voluntarily end it."
      },
      {
        "title": "Confusion",
        "rules": "There is a 20% chance that enemies confused by your presence will be incapacitated until the start of their next turn. To counteract this effect, they must succeed on a DC 13 Wisdom saving throw. This effect ends when you are no longer in combat."
      }
    ],
    "levelRequirementReason": "The mask's weight and curse make it more suited to lower-level adventurers.",
    "vendorReason": "Rogueport is known for its extensive dealings with exotic and cursed items, making the Ironclad Bloodmask a fitting addition to their inventory.",
    "shippingDetail": "Due to the mask's weight and fragile nature, it ships via Pipe Express with extra padding to prevent damage during transit.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds or until you take an action other than moving silently",
      "endsWhen": "You voluntarily end the effect or take any action other than moving silently",
      "charges": "Unlimited"
    },
    "priceReason": "The mask's rarity, cursed properties, and unique effects justify its relatively high price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-24T23:30:27.432862+00:00",
    "aiReviewedAt": "2026-07-24T23:30:27.432862+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_item_name": {
    "id": "rogueport_item_name",
    "name": "Whispering Ledger",
    "description": "The Whispering Ledger is a cursed tome bound in leather and adorned with runes that glow faintly under moonlight, recording your misdeeds with blood-red ink. Each entry not only reveals a hidden ally or foe but also saps you of strength, leaving behind a lingering echo of the crime recorded. Write within its pages to gain a fleeting moment of stealth, but beware, for each use drains 1000 HP and taints your soul further.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reveals Hidden Allies/Foes",
      "Temporary Stealth"
    ],
    "vendor": "rogueport",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hidden Insight",
        "rules": "As a bonus action, you can flip to a random page in the ledger and gain insight into either a hidden ally or foe within your line of sight. This effect reveals one such entity but does not provide exact location. The duration is instantaneous."
      },
      {
        "title": "Stealth Aura",
        "rules": "Upon writing in the ledger, you become invisible for 2 rounds (4 turns). You cannot attack while unseen and are penalized by disadvantage on Dexterity (Stealth) checks during this time. This effect ends when you complete a short or long rest."
      }
    ],
    "levelRequirementReason": "Requires minimal character development to wield the ledger's power without overburdening the player.",
    "vendorReason": "Rogueport is known for its wares that blur the line between useful and dangerous, making it a fitting vendor for this cursed tome.",
    "shippingDetail": "The ledger must be delivered by Boo Spectral Mail to ensure secrecy; delivery can take up to 3 days.",
    "usage": {
      "activation": "Bonus action or writing in the ledger",
      "duration": "Instantaneous for Hidden Insight, 2 rounds for Stealth Aura",
      "endsWhen": "Short rest, long rest, or upon death of the user",
      "charges": "Unlimited"
    },
    "priceReason": "The ledger's cursed nature and unique abilities justify its value in XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:25:48.099527+00:00",
    "aiReviewedAt": "2026-07-23T17:25:48.099527+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_jester_scarf": {
    "id": "rogueport_jester_scarf",
    "name": "Jester Scarf of Entropy",
    "description": "The Jester Scarf of Entropy is a whimsical yet treacherous scarf woven from threads of cosmic laughter and chaos. Crafted by the DK Crew, this relic grants its wearer an edge in combat through mischievous antics. When worn, it bestows +1 to dodge rolls against foes that laugh aloud, and it has a 20% chance per round to make nearby enemies erupt into uncontrollable giggles for one round, disrupting their focus.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎭",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Mischievous Giggles",
      "Entropy Bleed"
    ],
    "vendor": "rogueport",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Mischievous Giggles",
        "rules": "When the wearer hears an enemy laugh, they can use a bonus action to cause the target to fall into giggles for 1 round. The target has disadvantage on attack rolls and ability checks while in this state. This effect ends if the target is hit by an attack or moves more than 5 feet away."
      },
      {
        "title": "Entropy Bleed",
        "rules": "At the start of each enemy's turn, there is a 20% chance that they take 1d4 points of non-lethal damage as entropy seeps into their form. This effect ends when the target takes damage from an attack or moves more than 5 feet."
      }
    ],
    "levelRequirementReason": "Crafted by cosmic jester cultists, this scarf requires a certain understanding of chaotic magic that novice adventurers might lack.",
    "vendorReason": "Rogueport is known for its dealings with arcane and whimsical artifacts, making it the perfect vendor for such an item.",
    "shippingDetail": "Ships via Warp Whistle Transit's express courier service, delivered within a week of purchase.",
    "usage": {
      "activation": "Bonus action to cause target giggles; passive effect for entropy bleed",
      "duration": "One round per activation; continuous for entropy bleed until interrupted",
      "endsWhen": "Target moves more than 5 feet or takes damage, or wearer removes the scarf",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's unique combination of mischievous and chaotic effects, along with its origin from a cultist group, justifies its reduced price while still providing significant utility.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:25:41.015916+00:00",
    "aiReviewedAt": "2026-07-23T17:25:41.015916+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_liquid_ambition_tincture": {
    "id": "rogueport_liquid_ambition_tincture",
    "name": "Ambition Tincture",
    "description": "The Ambition Tincture, a dark elixir brewed from the tears of failed heists, is a volatile concoction that temporarily sharpens a rogue’s intuition and charisma. Drunk in a single gulp, it grants +20% stealth for 10 minutes, heightening one's senses to their peak. However, the drinker risks glimpsing hallucinations—a fleeting vision that rolls on a d6 (1-2: A shadowy silhouette of a successful heist, 3-4: A grand feast, 5-6: A menacing figure) that fades after the duration expires.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Stealth Boost",
      "Charisma Surge"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Stealth Boost",
        "rules": "On activation by drinking, a rogue gains a +20% bonus to Dexterity (Stealth) checks for 10 minutes. The effect ends immediately if the tincture's effects are negated or if the drinker is incapacitated."
      },
      {
        "title": "Charisma Surge",
        "rules": "Simultaneously, the drinker receives a +15% bonus to Charisma (Deception) checks for 5 minutes. This effect is lost if the user fails a saving throw against an attempt to disbelieve the deception."
      }
    ],
    "levelRequirementReason": "This tincture's volatile nature requires a rogue with some experience in stealth and deception.",
    "vendorReason": "Rogueport, known for its connections to the underworld, stocks this rare elixir as part of their diverse catalog of items for skilled thieves and spies.",
    "shippingDetail": "Due to the tincture's volatile nature, it must be delivered via Lakitu Drones within a day of purchase.",
    "usage": {
      "activation": "Consumed by drinking in one gulp.",
      "duration": "10 minutes for stealth boost and 5 minutes for charisma surge. Both effects end if the drinker is incapacitated or successfully saves against an effect negating their abilities.",
      "endsWhen": "The duration expires or the user's stealth or deception checks are failed due to disbelieve attempts.",
      "charges": "Unlimited, as it can be consumed multiple times."
    },
    "priceReason": "The Ambition Tincture is priced moderately given its short duration and the risk of hallucinations, making it a balanced choice for rogues looking to boost their skills temporarily.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T17:26:31.704106+00:00",
    "aiReviewedAt": "2026-07-23T17:26:31.704106+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_metallic_mind_wipe": {
    "id": "rogueport_metallic_mind_wipe",
    "name": "Metallic Mind Wipe",
    "description": "The vial of Metallic Mind Wipe contains a neural dampener extracted from Legion protocols, rendered in metallic glass vials by Rogueport’s alchemical forges. When administered, it erases one memory of betrayal or loyalty in the target's mind, granting them temporary immunity to such emotions for 24 hours. The user experiences fleeting disorientation and gains an evasive aura that increases their chance of dodging attacks by 20% during this period.",
    "price": 1000,
    "icon": "💊",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Erases 1 memory",
      "Grants 20% evasion chance"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Memory Erasure",
        "rules": "The user injects the target with Metallic Mind Wipe, erasing one memory of betrayal or loyalty. This effect is instantaneous and has a duration of 24 hours. The target must make a Wisdom saving throw (DC 15) to resist; on a success, they retain their memory."
      },
      {
        "title": "Evasion Aura",
        "rules": "The user gains an evasive aura for the duration of the effect. This grants them advantage on Dexterity saving throws and increases their chance to dodge attacks by 20%, until the effect ends or is otherwise interrupted."
      }
    ],
    "levelRequirementReason": "This item is suitable for lower-level characters who need a temporary edge in critical situations.",
    "vendorReason": "Rogueport specializes in alchemical wares and this item suits their expertise in extracting and manipulating neural protocols.",
    "shippingDetail": "Ships via Lakitu Drones, arriving within a week of purchase with special handling for fragile glass containers.",
    "usage": {
      "activation": "An action to inject the target.",
      "duration": "24 hours from activation.",
      "endsWhen": "The effect expires after 24 hours or is prematurely ended by the user.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This item provides a significant temporary advantage at an acceptable cost, balancing its powerful effects with limited duration and use.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-24T23:30:45.057347+00:00",
    "aiReviewedAt": "2026-07-24T23:30:45.057347+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_mirage_satchel": {
    "id": "rogueport_mirage_satchel",
    "name": "Mirage Satchel",
    "description": "The Mirage Satchel is a woven leather satchel that shimmers with illusory light. It feels heavy as it holds the weight of forgotten treasures, yet when opened, it reveals only empty air. This relic is forged from the very fabric of memory, crafted in Rogueport’s shadowy alleys by the hands of illusionists. When used during an exploration, it grants a 20% chance to find hidden items. However, its most insidious effect is that if used in a heist, the user risks being momentarily overwhelmed by illusions, causing temporary blindness for one round.",
    "price": 1000,
    "icon": "🌀",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Hidden Treasure",
      "Blinding Illusions"
    ],
    "vendor": "rogueport",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Hidden Treasure",
        "rules": "When this satchel is used during an exploration, the user gains a +2 bonus to Perception checks made to locate hidden or secret items. This effect lasts for 1 hour."
      },
      {
        "title": "Blinding Illusions",
        "rules": "If used in a heist situation, the wielder must succeed on a DC 15 Wisdom saving throw or be blinded by illusory forces for one round. The satchel can only be used once per session."
      }
    ],
    "levelRequirementReason": "It requires a fair amount of concentration and mental discipline to wield this artifact effectively.",
    "vendorReason": "Rogueport is known for its artisans who create items that enhance the skills of thieves and explorers.",
    "shippingDetail": "The satchel is couriered by Dry Bones, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "As an action",
      "duration": "1 hour or until used in a heist",
      "endsWhen": "Ends when the session ends",
      "charges": "Once per session"
    },
    "priceReason": "The Mirage Satchel is crafted with rare materials and advanced illusion magic, making it an expensive yet valuable tool for explorers.",
    "priceOriginal": 500,
    "priceReviewedAt": "2026-07-23T17:26:01.643897+00:00",
    "aiReviewedAt": "2026-07-23T17:26:01.643897+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_mirage_talisman": {
    "id": "rogueport_mirage_talisman",
    "name": "Mirage Talisman",
    "description": "The Mirage Talisman appears as a pocket-sized amulet that shifts and distorts light, appearing as a shimmering vortex of colors when held up to the sun. This rogueport artifact allows its wielder to phase through solid objects or become momentarily invisible for 30 seconds, but at a cost: each use leaves the user disoriented, taking 1d6 confusion damage. Known to be carried by Rogueport's infamous traders, it is said that the talisman was once part of an ancient artifact designed to navigate treacherous terrain.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Phasing Through Solid Objects",
      "Momentary Invisibility"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Phasing Through Solid Objects",
        "rules": "The user can move through solid objects for a duration of 30 seconds. This effect requires an action to activate and ends when the user leaves the phased state or the duration expires."
      },
      {
        "title": "Momentary Invisibility",
        "rules": "The user becomes invisible for 30 seconds, requiring no action to activate. The invisibility effect is neutralized if the user takes any damage during this time."
      }
    ],
    "levelRequirementReason": "It requires minimal skill but is still an item of rare craftsmanship.",
    "vendorReason": "Rogueport's traders specialize in exotic and dangerous items, making the Mirage Talisman a fitting addition to their inventory.",
    "shippingDetail": "Ships via invisible couriers, ensuring that the item arrives under the radar.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "30 seconds",
      "endsWhen": "Leaves phased state, takes damage while invisible or duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for a rare item that offers unique utility without overshadowing other abilities.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-23T17:26:43.868210+00:00",
    "aiReviewedAt": "2026-07-23T17:26:43.868210+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_mirage_vial": {
    "id": "rogueport_mirage_vial",
    "name": "Mirage Vial of the Vanishing Hour",
    "description": "The Mirage Vial of the Vanishing Hour is a shimmering vial that emits a ghostly mist when activated, cloaking its user in an illusory form. For 10 seconds, it creates a spectral decoy that can be mistaken for the original wielder. The illusion grants a +2 bonus to Dexterity (Stealth) checks and allows the user to move up to half their speed without making noise. This vial is a treasure of the Rogueport's shadowed marketplaces, where its secrets are as elusive as the mist it conjures.",
    "price": 1000,
    "icon": "🌀",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Spectral Decoy",
      "Stealth Boost"
    ],
    "vendor": "rogueport",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spectral Decoy",
        "rules": "Activates on a bonus action. The user is replaced by an illusory duplicate that lasts for 10 seconds. Any creature within 5 feet of the decoy must succeed on a DC 13 Wisdom saving throw or be incapacitated as they mistake the illusion for the original wielder. The decoy has half the user's hit points and AC."
      },
      {
        "title": "Stealth Boost",
        "rules": "Grants advantage on Dexterity (Stealth) checks for the duration of the vial's effect, allowing silent movement up to half the user’s speed without making noise. This effect cannot be used if the user is incapacitated."
      }
    ],
    "levelRequirementReason": "This vial is designed for quick and subtle uses suitable for beginners.",
    "vendorReason": "The Rogueport vendors are known to sell items that enhance one’s ability to evade capture or deceive enemies, making this vial a perfect fit.",
    "shippingDetail": "Ships via Boo Spectral Mail, ensuring the vial remains undisturbed and potent until it reaches its recipient.",
    "usage": {
      "activation": "Bonus action",
      "duration": "10 seconds",
      "endsWhen": "The duration ends or the user is incapacitated during the effect.",
      "charges": "Unlimited, but using it costs 200 HP."
    },
    "priceReason": "Balanced at 1000 XP to reflect its moderate power and utility in evasive maneuvers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:26:41.174287+00:00",
    "aiReviewedAt": "2026-07-23T17:26:41.174287+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_mirrored_soul_amber": {
    "id": "rogueport_mirrored_soul_amber",
    "name": "Mirrored Soul Amber",
    "description": "Mirrored Soul Amber is a fractured gemstone, its facets shimmering with the light of countless whispered secrets. When held and spoken to, it mirrors your target’s last word or action, forcing them into a brief disorientation where they can neither speak nor act for ten seconds. The stone also reveals any hidden weaknesses beneath an enemy's mask or armor, making it a formidable tool in both interrogation and combat.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Echoes Last Word",
      "Disorienting Reflection"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Echoes Last Word",
        "rules": "As a bonus action, you can activate the gem. It mirrors your target’s last spoken word or action for ten seconds. The target must succeed on a DC 13 Wisdom saving throw or be disoriented during this time."
      },
      {
        "title": "Disorienting Reflection",
        "rules": "When activated, the gem reveals any hidden weaknesses beneath an enemy's mask or armor, providing you with advantage on one attack roll against that target before the end of your next turn."
      }
    ],
    "levelRequirementReason": "It requires a basic understanding of how to use such a tool for effective interrogation.",
    "vendorReason": "Rogueport is known for its diverse array of tools and gadgets, including items that aid in covert operations and espionage.",
    "shippingDetail": "Delivered via Lakitu Drones, ensuring swift arrival within the city limits.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "10 seconds",
      "endsWhen": "The target succeeds on a Wisdom saving throw or when used against another target.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the gem's rarity and its dual utility in both combat and espionage.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:26:58.465448+00:00",
    "aiReviewedAt": "2026-07-23T17:26:58.465448+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_molten_mask": {
    "id": "rogueport_molten_mask",
    "name": "Molten Mask of the Iron Tongue",
    "description": "The Molten Mask of the Iron Tongue is a fearsome helm forged from volcanic iron, its surface etched with ancient runes that glow faintly in the dark. This mask not only scalds enemy armor but also leaves behind an unmistakable trail of scorched metal, rendering foes' defenses useless until they are cooled or repaired by blacksmithing. Designed for the crafty rogue, it must be carefully tended and cooled to prevent overheating, lest its molten core spill onto the bearer.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Scalds enemy armor on contact",
      "Leaves a trail of scorched metal"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Armor Scorch",
        "rules": "When worn, the mask emits a burst of molten heat that deals 1d6 fire damage to any piece of armor it touches. This effect is instantaneous and ends when the mask is removed or cooled for at least 10 minutes."
      },
      {
        "title": "Scorched Trail",
        "rules": "The mask leaves a visible trail of scorched metal on armor, reducing its effectiveness by half until it is repaired or replaced. This effect persists until the damaged armor is restored to full condition."
      }
    ],
    "levelRequirementReason": "This mask requires no specific level because it is designed for versatility and can be adapted by any rogue who understands its care and use.",
    "vendorReason": "Rogueport, known for its expert blacksmiths and keen understanding of gear for stealthy rogues, offers this unique mask to enhance their clients' abilities in combat and espionage.",
    "shippingDetail": "Ships via Pipe Express within three days with a special thermal insulation package to ensure the mask arrives safely without overheating.",
    "usage": {
      "activation": "Worn as headgear during combat",
      "duration": "Instantaneous; ends when removed or cooled for at least 10 minutes",
      "endsWhen": "Mask is removed, cooled, or damaged beyond repair",
      "charges": "Unlimited, but requires cooling between uses"
    },
    "priceReason": "The mask's rarity and unique properties justify a price of 1000 XP, reflecting its specialized design and the skill required to both forge and maintain it.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:27:23.952514+00:00",
    "aiReviewedAt": "2026-07-23T17:27:23.952514+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_moonfang_blade": {
    "id": "rogueport_moonfang_blade",
    "name": "Moonfang Blade",
    "description": "The Moonfang Blade is a curved dagger forged from shadow steel, its edge glowing with lunar energy. Crafted in the forges of Rogueport, this weapon can cut through illusions and corrupt magic. When struck by a magical attack, it reflects the force back at the attacker, causing them to stumble for a round. The blade's silvered tip also has a 10% chance to stun enemies with its sharp edge during combat.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Illusion Caster",
      "Reflective Defense"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Illusion Caster",
        "rules": "When the wielder of the Moonfang Blade strikes an illusion, it is dispelled and the blade deals +20% damage to illusions. This effect lasts until the end of the wielder's next turn."
      },
      {
        "title": "Reflective Defense",
        "rules": "If a magical attack hits the wielder, the Moonfang Blade reflects 5d6 points of damage back at the attacker. The wielder is knocked prone and stunned for 1 round. This effect can only occur once per short or long rest."
      }
    ],
    "levelRequirementReason": "The complexity of the blade's construction and its magical properties necessitate a minimum level to effectively utilize its abilities.",
    "vendorReason": "Rogueport is known for its craftsmanship and magical artifacts, making it a fitting place for such an item.",
    "shippingDetail": "The blade arrives in a specially insulated package to preserve the integrity of its magic.",
    "usage": {
      "activation": "Instantaneous reaction when struck by a magical attack or attacking an illusion.",
      "duration": "Until the end of the wielder's next turn for Illusion Caster; until the attacker is knocked prone and stunned for Reflective Defense.",
      "endsWhen": "The effects expire naturally at the end of their durations.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "Balanced to ensure it remains a valuable yet not overpowered item for level 5 characters.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-23T17:26:59.553339+00:00",
    "aiReviewedAt": "2026-07-23T17:26:59.553339+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_moonfang_pack_s_iron_key": {
    "id": "rogueport_moonfang_pack_s_iron_key",
    "name": "Moonfang Pack Iron Key",
    "description": "The Moonfang Pack Iron Key is a rusted, iron key etched with ancient symbols of the city’s forgotten underworld. When inserted into the cryptic locks beneath Rogueport, it hums softly, resonating with the whispers of past crimes and secret passages. Its touch grants you an uncanny insight into hidden caches, allowing you to pinpoint their location with 10% greater stealth and finesse in your movements within vaults. However, misuse risks triggering mechanical glitches that alert nearby criminal networks.",
    "price": 1000,
    "icon": "🔑",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Unlocks hidden loot caches",
      "Enhances stealth rolls in vaults"
    ],
    "vendor": "rogueport",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unlock Hidden Loot Caches",
        "rules": "This key allows you to bypass the cryptic locks of the city’s forgotten vaults, granting access to secret caches. It must be inserted into a specific lock and requires no action to unlock."
      },
      {
        "title": "Enhanced Stealth in Vaults",
        "rules": "While within vaults, you gain a +1 bonus to Dexterity (Stealth) checks for the duration of one hour per use. This effect is cumulative with other bonuses but does not stack with abilities that grant similar benefits."
      }
    ],
    "levelRequirementReason": "This key requires no specific level, as it is designed to be a tool available to all rogues and explorers of Rogueport.",
    "vendorReason": "Rogueport sells this key because it is a necessary item for any criminal or adventurer who seeks to navigate the city’s hidden underworld.",
    "shippingDetail": "The key is delivered by Boo Spectral Mail, ensuring that it arrives intact and ready for use. Delivery time is expedited but may require a brief stop at the city's magical wards.",
    "usage": {
      "activation": "Passive effect upon insertion into lock; duration one hour per use",
      "duration": "One hour per use",
      "endsWhen": "The key is misused or damaged beyond repair, expending its charge",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the item’s rarity and the expertise required to craft such a key in the city's underworld.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-23T17:27:31.056225+00:00",
    "aiReviewedAt": "2026-07-23T17:27:31.056225+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_moonlit_soul_bottle": {
    "id": "rogueport_moonlit_soul_bottle",
    "name": "Moonlit Soul Bottle",
    "description": "The Moonlit Soul Bottle is a vial encased in moonstone, capturing the ethereal essence of a fallen moon-warden. When consumed, it grants 15 seconds of invisibility and imbues you with a whispering voice that can lure nearby enemies into traps set by your allies. Exposing the bottle to daylight shatters its arcane seal, rendering it useless. The captured soul's whispers also instill a temporary vulnerability in foes who approach too closely, reducing their effectiveness for 30 seconds.",
    "price": 1000,
    "icon": "🌙",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Lure Enemies"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "The Moonlit Soul Bottle grants the drinker 15 seconds of total invisibility. This effect ends if exposed to daylight or if the drinker takes any action other than moving silently."
      },
      {
        "title": "Lure Enemies",
        "rules": "For every enemy that comes within 30 feet and makes contact with the drinker, there is a 5% chance they will trigger traps set by allies. Additionally, enemies struck by the drinker receive a penalty to their next attack roll equal to half the bottle's price in XP (rounded down). This effect ends if exposed to daylight or after five successful interactions."
      }
    ],
    "levelRequirementReason": "The Moonlit Soul Bottle requires no specific level, but it is a rare item that novices and veterans alike can find useful.",
    "vendorReason": "Rogueport's extensive network of spies and thieves allows them to procure unusual relics like the Moonlit Soul Bottle.",
    "shippingDetail": "The bottle must be couriered under cover of night to prevent its arcane seal from breaking prematurely.",
    "usage": {
      "activation": "Eaten as a bonus action",
      "duration": "15 seconds, or until exposed to daylight",
      "endsWhen": "Exposure to daylight or the drinker taking an action other than moving silently",
      "charges": "Unlimited; each use is a one-time effect"
    },
    "priceReason": "The Moonlit Soul Bottle's rarity and utility justify its moderate price, offering both tactical advantage and strategic value.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-24T23:30:27.792862+00:00",
    "aiReviewedAt": "2026-07-24T23:30:27.792862+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_murder_bottle": {
    "id": "rogueport_murder_bottle",
    "name": "Murder Bottle of the Crimson Vow",
    "description": "The Murder Bottle of the Crimson Vow is a vial sealed with the essence of a condemned criminal's final breath. When consumed, it grants the imbiber a fleeting surge of lethal precision and a lingering fear that haunts their foes. For ten seconds, enemies within reach are overcome by a paralyzing dread, reducing their movement speed by 20%, while the drinker gains +20% critical hit chance for the duration.",
    "price": 1000,
    "icon": "💀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+20% Critical Hit Chance",
      "Enemies Gain Fear Effect (10 Seconds)"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Critical Surge",
        "rules": "Activates upon consumption as a bonus action. Grants +20% critical hit chance for one minute. Ends if the drinker drops to 0 hit points or takes damage."
      },
      {
        "title": "Fear Aura",
        "rules": "Enemies within five feet of the drinker become frightened and have their movement speed reduced by 20%. Lasts for 10 seconds, ends when the drinker moves more than 5 feet away from an affected enemy or if that enemy is no longer in line of sight."
      }
    ],
    "levelRequirementReason": "This item requires a level 6 proficiency to ensure the user can handle its potent effects.",
    "vendorReason": "Rogueport, with its extensive dealings in illicit and exotic items, naturally offers this bottle of dark magic.",
    "shippingDetail": "Ships within three days via high-speed courier service, ensuring the vial's potency remains intact.",
    "usage": {
      "activation": "Consumed as a bonus action.",
      "duration": "1 minute for Critical Surge; 10 seconds for Fear Aura.",
      "endsWhen": "Critical Surge ends when the drinker drops to 0 hit points or takes damage. Fear Aura ends if the drinker moves more than 5 feet away from an affected enemy or if that enemy is no longer in line of sight.",
      "charges": "Unlimited, but only one effect can activate at a time."
    },
    "priceReason": "The balanced price reflects the item's potent effects and rarity, making it accessible yet valuable for skilled rogues.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T17:27:14.250421+00:00",
    "aiReviewedAt": "2026-07-23T17:27:14.250421+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_murder_milk": {
    "id": "rogueport_murder_milk",
    "name": "Murder Milk of the Black Vault",
    "description": "The Murder Milk of the Black Vault is a vial of murky liquid, its surface flecked with dark sediment that hints at malevolent origins. Consuming it grants you a fleeting advantage over your foes by rendering them temporarily mute and sapping their resolve. The milk's curse risks leaving you in a state of madness for a short time, where confusion clouds your mind and allies may turn against you.",
    "price": 1000,
    "icon": "🍼",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Silence enemy",
      "Drain morale"
    ],
    "vendor": "rogueport",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Silence Enemy",
        "rules": "As an action, drink the milk to silence a creature within 30 feet for 1 minute. The target must make a DC 14 Constitution saving throw or become incapacitated and unable to speak until the end of its next turn."
      },
      {
        "title": "Drain Morale",
        "rules": "For the duration, reduce the target's morale by 30%. This effect persists for as long as the target is incapacitated from being silenced. A successful DC 14 Wisdom saving throw ends this effect early."
      }
    ],
    "levelRequirementReason": "Requires at least second-level proficiency to wield such a dangerous and unpredictable item.",
    "vendorReason": "Rogueport is known for its dark alleys and illicit deals, making it the perfect place to find this treacherous yet useful potion.",
    "shippingDetail": "The milk must be shipped in a specially insulated container with strict temperature controls due to its unstable properties.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute per use",
      "endsWhen": "The target makes a successful saving throw or the duration expires",
      "charges": "Unlimited, but requires a short rest to stabilize after use"
    },
    "priceReason": "Balanced at 1000 XP due to its moderate effectiveness and unpredictable risks.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:27:56.336268+00:00",
    "aiReviewedAt": "2026-07-23T17:27:56.336268+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_murder_mist": {
    "id": "rogueport_murder_mist",
    "name": "Murder Mist",
    "description": "Murder Mist is a noxious fog that cloaks you in invisibility, making it perfect for navigating through crowded alleys or escaping law enforcement without being detected by sight. The mist leaves behind a faint chemical trail that only trained trackers can follow, ensuring your escape remains undetected until it's too late. This deadly fog disorients nearby enemies with its lingering scent, causing them to stagger and lose their balance for several moments.",
    "price": 1000,
    "icon": "🌫",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Disorientation"
    ],
    "vendor": "rogueport",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "Activate as a bonus action. You become invisible to sight for 1 minute, but you are still detectable by smell and other senses within 5 feet of you. The mist leaves a faint chemical trail that can be tracked by trained trackers."
      },
      {
        "title": "Disorientation",
        "rules": "Activate as an action. For every round the target is exposed to Murder Mist, they must make a DC 13 Wisdom saving throw or become disoriented, losing their turn until the end of their next turn. This effect ends if the target moves more than 5 feet away from where it was first exposed."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to practice stealth and combat in crowded environments.",
    "vendorReason": "Rogueport specializes in items that aid in espionage, making Murder Mist a fitting addition to their inventory.",
    "shippingDetail": "The mist is shipped in a sealed container to prevent it from escaping during transit.",
    "usage": {
      "activation": "Bonus action for Invisibility, Action for Disorientation",
      "duration": "1 minute per activation of Invisibility; until the start of your next turn after exposure for Disorientation",
      "endsWhen": "The duration expires or the effect is dispelled by a successful saving throw.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Murder Mist offers significant tactical advantage in stealth and combat, justifying its moderate price.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T17:27:51.670229+00:00",
    "aiReviewedAt": "2026-07-23T17:27:51.670229+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_murder_moon_potion": {
    "id": "rogueport_murder_moon_potion",
    "name": "Murder Moon Potion",
    "description": "The Murder Moon Potion is a vial of shimmering elixir, its surface etched with arcane runes that glow faintly under moonlight. Brewed from the stolen essence of forgotten gods and the blood of those who were once revered, this potion grants the drinker a lethal charisma that makes enemies unwittingly target themselves in their haste to escape. The vial hums with an ancient power as the elixir is swallowed, its effects manifesting in moments of crisis when one least expects it.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Enemies Target Themselves",
      "Trigger Traps on Enemy Action"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enemies Target Themselves",
        "rules": "The drinker has a 20% chance to make enemies target themselves in combat. This effect lasts for 30 seconds and can be triggered once per short rest."
      },
      {
        "title": "Trigger Traps on Enemy Action",
        "rules": "For the duration of the potion's effect, there is a 20% chance that any trap set by an enemy within 15 feet triggers itself. This effect also lasts for 30 seconds and can be triggered once per long rest."
      }
    ],
    "levelRequirementReason": "This potion is designed to be accessible, allowing low-level rogues to exploit the chaos of battle without requiring a high proficiency in stealth or combat.",
    "vendorReason": "Rogueport, known for its clandestine dealings and expert knowledge of deadly poisons and potions, naturally sells this potion that enhances one's ability to manipulate situations.",
    "shippingDetail": "Shipped discreetly via Pipe Express, the vial is wrapped in a layer of moonstone dust to prevent detection by mundane means.",
    "usage": {
      "activation": "Instantaneous upon consumption; no additional actions required.",
      "duration": "30 seconds per use.",
      "endsWhen": "Expires at the end of its duration or when used up, whichever comes first. The potion can be consumed once per short rest for 'Enemies Target Themselves' and once per long rest for 'Trigger Traps on Enemy Action'.",
      "charges": "Unlimited; the vial refills with each new use."
    },
    "priceReason": "The potion's rarity, arcane ingredients, and unique crafting process justify its moderate price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:28:16.264055+00:00",
    "aiReviewedAt": "2026-07-23T17:28:16.264055+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_murder_satchel": {
    "id": "rogueport_murder_satchel",
    "name": "Murder Satchel of the Crimson Vault",
    "description": "The Murder Satchel of the Crimson Vault is a leather-bound satchel forged from the very essence of Rogueport's underbelly. Its hidden compartments, lined with enchanted silk, glow faintly in response to pressure, alerting its carrier to secret passageways or allies. This satchel has been used by the city's most notorious thieves and con artists to bribe, barter, and buy their way out of trouble. It whispers secrets of the underworld when clutched tightly, hinting at deals that can turn a simple favor into a life-changing opportunity.",
    "price": 1000,
    "icon": "💰",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Thievery Bonus",
      "Underworld Favor"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Thievery Bonus",
        "rules": "While carrying the Murder Satchel of the Crimson Vault, you gain a +10 bonus to Dexterity (Stealth) checks and an additional +20% chance to successfully loot or steal from guarded targets. This effect lasts until the end of your next short rest."
      },
      {
        "title": "Underworld Favor",
        "rules": "Once per day, you can use the satchel to gain a secret favor from the underworld. The favor is granted as a +5 bonus on one Charisma-based check or saving throw related to an underhanded deal, bribe, or con. This effect ends when used."
      }
    ],
    "levelRequirementReason": "This satchel requires no specific level as it is designed for any rogue to use its benefits.",
    "vendorReason": "Rogueport, the city of thieves and con artists, naturally stocks this item in their inventory.",
    "shippingDetail": "The satchel is carefully packed for transport to ensure it arrives in perfect condition. Pipe Express guarantees safe delivery within one week.",
    "usage": {
      "activation": "Passive effect while carrying the satchel; active use requires a daily check as per the Underworld Favor effect.",
      "duration": "Thievery Bonus lasts until the end of your next short rest; Underworld Favor is instantaneous and ends when used.",
      "endsWhen": "The Thievery Bonus ends at the start of your next long rest, and the Underworld Favor ends immediately after use.",
      "charges": "Unlimited uses for the Thievery Bonus; one daily use for the Underworld Favor."
    },
    "priceReason": "The balanced XP price reflects the satchel's utility in both thievery and negotiation, making it a valuable tool for any rogue.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-23T17:28:11.284123+00:00",
    "aiReviewedAt": "2026-07-23T17:28:11.284123+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_murderous_mask": {
    "id": "rogueport_murderous_mask",
    "name": "Murderous Mask of the Silent King",
    "description": "The Murderous Mask of the Silent King is a sleek, black-faced mask forged from obsidian and adorned with runes that whisper the ancient secrets of the Silent King. Worn in dim lighting, it grants the wearer near-perfect invisibility, blending them into shadows as one with night itself. The mask also whispers urgent advice, granting a 20% chance to evade capture during stealth checks, making any pursuit futile for those who dare to follow.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Invisibility in Dim Lighting",
      "Evasive Whisper"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Invisibility in Dim Lighting",
        "rules": "The wearer becomes invisible as if under the effect of an Invisibility spell. This lasts until the wearer takes damage or attacks, or until they voluntarily end it. The mask can only be used once per short rest."
      },
      {
        "title": "Evasive Whisper",
        "rules": "Once on each long rest, the wearer has a 20% chance to evade capture during stealth checks, as if under the effect of a Deception check. This ability does not stack with other evasion abilities and is negated by disadvantage."
      }
    ],
    "levelRequirementReason": "The mask's complex runes and mystical properties require a certain level of arcane knowledge to properly wield.",
    "vendorReason": "Rogueport is known for its extensive trade in rare and magical items, including those with ties to ancient lore and dark magic.",
    "shippingDetail": "The mask arrives wrapped in shadows, delivered by a Rakasha courier who leaves without a trace.",
    "usage": {
      "activation": "Activating the mask requires an action. The wearer must be wearing it and in dim lighting to activate its invisibility effect.",
      "duration": "Invisibility lasts until the wearer takes damage or attacks, or until they voluntarily end it. Evasive Whisper is a once-per-long-rest ability.",
      "endsWhen": "The invisibility ends when the wearer takes damage, attacks, or ends it as an action. Evasive Whisper ends after a successful stealth check.",
      "charges": "Unlimited; the mask recharges its abilities with each long rest."
    },
    "priceReason": "The mask's rarity and unique properties, including its connection to ancient magic and lore, justify its price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-24T23:31:22.917802+00:00",
    "aiReviewedAt": "2026-07-24T23:31:22.917802+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_murderous_mist_essence": {
    "id": "rogueport_murderous_mist_essence",
    "name": "Murderous Mist Essence of the Drowned Crown",
    "description": "The Murderous Mist Essence of the Drowned Crown is a dark, viscous mist that clings to your skin and transforms you into a living shadow. When consumed, it grants you the ability to slip through walls with ease, leaving behind trails of death as enemies around you falter under its influence. This ancient essence is said to have been extracted from the very heart of a legendary drowned king, imbuing it with necrotic power and shadows of the past.",
    "price": 1000,
    "icon": "💀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+25% damage on first hit with any weapon",
      "Death Whisper"
    ],
    "vendor": "rogueport",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shadowstep",
        "rules": "As a bonus action, you can teleport up to 3 meters in a straight line. This ability lasts for the duration of your turn and has a recharge time after each long rest."
      },
      {
        "title": "Death Whisper",
        "rules": "All creatures within 10 feet of you must make a DC 15 Constitution saving throw or take 1d6 necrotic damage. This effect lasts for the duration of your turn and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level to ensure its effects are balanced with player capabilities.",
    "vendorReason": "Rogueport is known for their vast selection of exotic and dangerous items, making this essence a fitting addition to their inventory.",
    "shippingDetail": "The essence arrives in a sealed container that must be broken before use. Once opened, it has a limited shelf life.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the start of your next turn",
      "endsWhen": "Ends when you take any other action on your turn or if you are incapacitated",
      "charges": "Recharge after each long rest"
    },
    "priceReason": "The essence is rare and requires significant resources to extract, making it a valuable yet balanced addition to the market.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T17:28:23.001470+00:00",
    "aiReviewedAt": "2026-07-23T17:28:23.001470+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_murderous_moss": {
    "id": "rogueport_murderous_moss",
    "name": "Murderous Moss of the Hollow Vault",
    "description": "The Murderous Moss of the Hollow Vault is a patchy green growth that thrives on the decay of the dead. Its tendrils pulse with malevolent energy, whispering the secrets of their former hosts. When plucked and touched to a living creature, it releases a haunting echo of their final thought—perfect for blackmail or interrogations. However, its touch is not without consequence; any who consume this moss suffer a temporary loss of 20% of their hit points until they rest.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "- Reveals hidden truths via whispered memory",
      "- Inflicts -20% HP on target if used in combat"
    ],
    "vendor": "rogueport",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whispering Truth",
        "rules": "When touched to a living creature, the moss whispers their last thought as an action. The effect is instantaneous and has no save DC required."
      },
      {
        "title": "Temporary Hit Point Loss",
        "rules": "Any creature consuming this moss loses 20% of its hit points for the duration of one short rest or until they take a long rest, whichever comes first. This effect cannot be resisted with a saving throw."
      }
    ],
    "levelRequirementReason": "This item is designed to be accessible early in the adventuring career as it can prove useful for gaining information.",
    "vendorReason": "Rogueport vendors are known for their connections with the macabre and arcane, making them a fitting seller of such a ghastly yet valuable item.",
    "shippingDetail": "The moss must be shipped within 24 hours to ensure its potency remains intact.",
    "usage": {
      "activation": "Touching the moss and applying it to a creature",
      "duration": "Instantaneous; effect lasts until the target rests or is healed",
      "endsWhen": "The target takes a short rest, long rest, or is healed via magical means",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects its rare and potent abilities, making it a valuable tool for any aspiring rogue.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:28:27.023116+00:00",
    "aiReviewedAt": "2026-07-23T17:28:27.023116+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_night_bane": {
    "id": "rogueport_night_bane",
    "name": "Night Bane",
    "description": "The Night Bane is a malevolent dagger that glows an eerie black hue when danger draws near, its edge sharp enough to gleam in moonlight and shadows alike. Crafted from the bones of defeated foes under a full moon's gaze, it delivers +2 damage against enemies during night hours. A flicker of light can blind your foe with a flash, but beware—overuse will drain its power, leaving you vulnerable.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+2 damage to enemies at night",
      "Blinding flash on attack (20% chance)"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "+2 Damage at Night",
        "rules": "When the target is within a 3-meter radius during nighttime, this dagger deals +2 additional damage. The effect is only active between sunset and sunrise."
      },
      {
        "title": "Blinding Flash",
        "rules": "On successful hit with the dagger, there's a 20% chance to blind the target for 1 minute as it experiences a dazzling flash of light. The save DC for this effect is 14. Recharging after three uses."
      }
    ],
    "levelRequirementReason": "This weapon requires experience and finesse, suitable only for seasoned rogues.",
    "vendorReason": "Rogueport specializes in the exotic and dangerous tools of stealth and combat.",
    "shippingDetail": "The dagger is couriered discreetly, ensuring it arrives in perfect condition.",
    "usage": {
      "activation": "Attack action",
      "duration": "Instantaneous effect (blinding flash)",
      "endsWhen": "Blinded target makes a successful saving throw or the duration expires. Recharges after three uses.",
      "charges": "3 charges, recharges after 1 long rest"
    },
    "priceReason": "The dagger's rare crafting materials and unique properties justify its fair price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:28:43.133097+00:00",
    "aiReviewedAt": "2026-07-23T17:28:43.133097+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_night_blood_vial": {
    "id": "rogueport_night_blood_vial",
    "name": "Night Blood Vial of the Forgotten Blade",
    "description": "The Night Blood Vial of the Forgotten Blade hums with an ancient, almost sentient power. Crafted from a legendary assassin's blood and sealed within a vial made of obsidian mined from forgotten catacombs, it grants its bearer a +15% stealth bonus and the ability to become momentarily invisible for 5 seconds upon activation. However, there is always risk; the user might find themselves briefly possessed by the vial’s restless spirit, a consequence that comes with a 10% chance each use.",
    "price": 1000,
    "icon": "💉",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+15% Stealth Bonus",
      "Temporary Invisibility Burst"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express - The fastest courier in the land",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "+15% Stealth Bonus",
        "rules": "When consumed, the user gains a +15% bonus to Dexterity (Stealth) checks for 1 minute. This effect can be triggered as a bonus action."
      },
      {
        "title": "Temporary Invisibility Burst",
        "rules": "Activates upon consuming the vial; the user becomes invisible for 5 seconds, granting advantage on Dexterity (Stealth) checks during this time. The invisibility ends if the user takes any action other than a bonus action to use their Stealth check."
      }
    ],
    "levelRequirementReason": "The vial's potent effects require no minimum level, but its unpredictable possession risk makes it suitable for all levels.",
    "vendorReason": "Rogueport, known for their extensive network of thieves and assassins, naturally stocks items imbued with deadly yet useful magic.",
    "shippingDetail": "Delivered within a day via Pipe Express's most trusted couriers.",
    "usage": {
      "activation": "Bonus action to activate the +15% Stealth bonus; reaction to use the invisibility burst upon consuming the vial.",
      "duration": "The stealth bonus lasts for 1 minute, while invisibility lasts 5 seconds or until an action is taken other than a bonus action.",
      "endsWhen": "The effects end when the duration expires or the user takes any action other than using their Stealth check during invisibility.",
      "charges": "Unlimited uses; the vial's power can be triggered repeatedly."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its potent abilities and unpredictable risk of possession.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-23T17:28:52.199070+00:00",
    "aiReviewedAt": "2026-07-23T17:28:52.199070+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_night_cloak": {
    "id": "rogueport_night_cloak",
    "name": "Night Cloak",
    "description": "The Night Cloak, a tattered coat made from the shadows of the Rogueport's night market, whispers with the wind and glows faintly in dark alleys. When in combat, its weave shifts to mimic the movements of nearby enemies, making you nearly invisible to foes' eyes. The fabric itself is woven from the threads of forgotten magic, granting a +20% stealth rating and a +15% damage reduction from light sources.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "+20% Stealth Rating",
      "Damage Reduction from Light"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Enhanced Stealth",
        "rules": "Activates as a bonus action, providing you with a +20% stealth rating for 1 minute. This effect ends early if you take damage or are incapacitated."
      },
      {
        "title": "Light Resistance",
        "rules": "Grants +15% resistance to damage from light sources while wearing the cloak. The effect persists until the start of your next turn after exiting a source of bright light."
      }
    ],
    "levelRequirementReason": "The cloak's magic is complex and requires a level of at least 6 to properly harness its effects without causing backlash.",
    "vendorReason": "Rogueport is known for its underground market, where magical artifacts like the Night Cloak are traded among thieves and shadowrunners.",
    "shippingDetail": "Ships via Pipe Express with a special delivery notification upon arrival in your area.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute, ends early if you take damage or become incapacitated",
      "endsWhen": "Start of your next turn after exiting bright light for the Light Resistance effect; ends at the start of your next turn otherwise",
      "charges": "Unlimited"
    },
    "priceReason": "The cloak's materials and enchantments are rare, justifying its relatively lower price compared to other epic items.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T17:29:36.579307+00:00",
    "aiReviewedAt": "2026-07-23T17:29:36.579307+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_night_hush": {
    "id": "rogueport_night_hush",
    "name": "Night Hush Amulet",
    "description": "The Night Hush Amulet is a dark, obsidian pendant encrusted with silver runes that whisper of ancient curses and silent victories. When donned, it casts an eerie silence over nearby creatures, muffling their voices and spellcasting for a breath's duration. It grants stealthy rogues the edge in covert operations, allowing them to slip through shadows unnoticed. The amulet is a relic from the Shadow Keep, once used by its enigmatic master to orchestrate silent assassinations.",
    "price": 1000,
    "icon": "🕯",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Silence",
      "Spellcasting Suppression"
    ],
    "vendor": "rogueport",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Silent Presence",
        "rules": "Activates as a bonus action. Grants silence to all creatures within 10 feet for up to 1 minute, reducing their ability to speak or cast spells. Ends if the wearer attacks or casts a spell with verbal components."
      },
      {
        "title": "Spell Suppression",
        "rules": "Reduces the DC of saving throws against non-verbal spell effects by +2 for creatures within 10 feet. Lasts until the end of the silent presence effect duration or if the wearer attacks, casts a spell, or the silence ends."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to wield effectively in combat and stealth scenarios.",
    "vendorReason": "Rogueport is known for its exotic wares, including artifacts with covert uses that enhance the city's underbelly of thieves and spies.",
    "shippingDetail": "The amulet arrives wrapped in an enigmatic mist, ensuring it reaches only those who truly seek it.",
    "usage": {
      "activation": "Bonus action to activate the silent presence effect.",
      "duration": "Up to 1 minute for each use.",
      "endsWhen": "The wearer attacks, casts a spell with verbal components, or ends their concentration.",
      "charges": "Unlimited, recharged at dawn."
    },
    "priceReason": "Balanced by its limited duration and recharge time, this amulet offers potent stealth and combat advantages without being overpowered.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:29:14.981358+00:00",
    "aiReviewedAt": "2026-07-23T17:29:14.981358+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_night_knife": {
    "id": "rogueport_night_knife",
    "name": "Night Knife of the Black Ledger",
    "description": "The Night Knife of the Black Ledger, forged from the bones of a rogue courier and moonstone stolen from the night sky, whispers secrets in the dark. Its blade glows faintly under starlight, leaving an ethereal trail that reveals hidden paths and secret passages. This weapon is not just a tool for the night; it is a guardian of shadows and a master of stealth, granting its wielder a +10% chance to sneak past guards in dim light.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Nightly Edge",
      "Trailblazer's Insight"
    ],
    "vendor": "rogueport",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Nightly Edge",
        "rules": "At night (defined as dusk until dawn), the Night Knife of the Black Ledger deals an additional +30% damage. This effect is active for the duration of a short rest and requires no other action to activate."
      },
      {
        "title": "Trailblazer's Insight",
        "rules": "When used in dim light, the knife leaves behind a faint glowing trail that reveals hidden paths within 10 feet. The user must make an Intelligence (Stealth) check with advantage; on a successful roll, they can see through the shadows and locate secret doors or passages."
      }
    ],
    "levelRequirementReason": "Requires at least third-level proficiency to wield effectively in stealthy scenarios.",
    "vendorReason": "Rogueport is known for dealing with the most notorious and sought-after tools of the underworld, making this knife an expected addition.",
    "shippingDetail": "The knife must be shipped via Void Drifter Relay to ensure it arrives in perfect condition.",
    "usage": {
      "activation": "Passive effect activated by nightfall; manual activation for revealing hidden paths.",
      "duration": "Instantaneous; re-activates at dusk the following day.",
      "endsWhen": "Exhausted after a short rest or destroyed if used in broad daylight.",
      "charges": "Unlimited, but limited to one trail revelation per long rest."
    },
    "priceReason": "The knife's rarity and unique properties justify its moderate price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:29:23.373046+00:00",
    "aiReviewedAt": "2026-07-23T17:29:23.373046+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_night_nectar": {
    "id": "rogueport_night_nectar",
    "name": "Night Nectar",
    "description": "Night Nectar is a vial of pitch-black liquid, its surface flecked with silver stars that shimmer faintly in the dark. In the moonlight or under starlit skies, consuming this nectar grants you momentary invisibility within shadows, allowing for silent passage through hidden alleys. However, overuse may warp your senses, causing you to see things that are not there and leading to disorientation. The nectar's potency is such that it can only be consumed in true darkness, else its effects are negated.",
    "price": 1000,
    "icon": "🍸",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Invisibility in Shadows",
      "Causes Hallucinations with Overuse"
    ],
    "vendor": "rogueport",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Invisibility in Shadows",
        "rules": "Activate as a bonus action. You become invisible until the start of your next turn, but only within darkness or areas obscured by shadows. This effect lasts for 1 minute per vial consumed."
      },
      {
        "title": "Causes Hallucinations with Overuse",
        "rules": "After consuming three vials, you suffer from hallucinations that last until the end of your next long rest. You have disadvantage on Wisdom (Perception) checks and saving throws against illusions for 1d4 days."
      }
    ],
    "levelRequirementReason": "Night Nectar's potency requires a certain degree of experience to handle its effects safely.",
    "vendorReason": "Rogueport is known for supplying the most effective tools and poisons to the underworld, making Night Nectar an essential addition to their inventory.",
    "shippingDetail": "Ships via a secret route through the stars, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action to activate and consume one vial.",
      "duration": "1 minute per vial consumed, until your next turn after consumption.",
      "endsWhen": "Ends when the duration expires or you are no longer within darkness.",
      "charges": "Unlimited uses; each vial is a single charge."
    },
    "priceReason": "The rare ingredients and alchemical processes required to create Night Nectar justify its cost in experience points.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-24T23:31:10.917389+00:00",
    "aiReviewedAt": "2026-07-24T23:31:10.917389+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_night_scarf": {
    "id": "rogueport_night_scarf",
    "name": "Night Scarf",
    "description": "The Night Scarf is a relic of ancient war, woven from the tattered remains of a forgotten warlord's cloak. Its fabric absorbs ambient light, allowing the wearer to see in pitch darkness with perfect clarity. Worn within shadowy environs, it grants immunity to fear and other mind-affecting effects for 2 turns. The scarf's weave enhances movement speed by 30% within dark areas, making stealth and quick escapes a breeze.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Shadow Sight",
      "Fearlessness"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shadowrunner Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shadow Sight",
        "rules": "The wearer gains the ability to see in total darkness as if it were dim light. This effect lasts for 1 minute when used within shadowy areas."
      },
      {
        "title": "Fearlessness",
        "rules": "When worn in shadows, the scarf grants immunity to all fear and mind-affecting effects for 2 turns. It has no save DC and can be activated once per short rest."
      }
    ],
    "levelRequirementReason": "The Night Scarf's shadow magic is accessible even to lower levels, as its core enchantment requires minimal mana.",
    "vendorReason": "Rogueport thrives on rare and mysterious artifacts that enhance survival in dark alleys and shadows.",
    "shippingDetail": "Special delivery through Shadowrunner ensures the scarf arrives in pristine condition, ready for use.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute or until used up within shadowy areas",
      "endsWhen": "Ends when removed from a shadowy area or at the end of your next turn if still worn",
      "charges": "Unlimited uses per short rest"
    },
    "priceReason": "The Night Scarf's balance comes from its limited duration and activation, making it an attractive but not overpowered addition to any rogue's inventory.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T17:29:29.139959+00:00",
    "aiReviewedAt": "2026-07-23T17:29:29.139959+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_night_siren": {
    "id": "rogueport_night_siren",
    "name": "Night Siren Whistle",
    "description": "The Night Siren Whistle is a brass instrument crafted by Rogueport's master artisans, its surface etched with ancient symbols that whisper of forgotten lore. When blown, it emits a haunting melody that disorients guards for 4 seconds, reducing their accuracy by 30% during the duration. It also triggers ambient sounds that reveal hidden paths and secret passages in the immediate area, perfect for escaping or setting up ambushes under the cover of darkness.",
    "price": 1000,
    "icon": "🎵",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Disorients Guards",
      "Reduces Accuracy"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disorienting Melody",
        "rules": "When activated by a player, the whistle emits an eerie sound that targets all creatures within 30 feet. These creatures become disoriented for 4 seconds, reducing their accuracy by 30% during this time. This effect ends when the creature successfully saves against a DC 15 Wisdom saving throw."
      },
      {
        "title": "Reveal Hidden Paths",
        "rules": "The whistle triggers ambient sounds that temporarily reveal hidden paths and secret passages within a 60-foot radius for 1 minute, providing advantageous terrain to anyone using it. This effect is useful for setting up ambushes or planning escape routes."
      }
    ],
    "levelRequirementReason": "The Night Siren Whistle requires no specific level as its effects are situational and can be used by players at any stage of their adventuring career.",
    "vendorReason": "Rogueport is known for its cleverly designed tools and gadgets, making the Night Siren Whistle a natural addition to their product line.",
    "shippingDetail": "The whistle comes with special packaging that ensures it arrives in pristine condition. Shipment typically takes no longer than one week.",
    "usage": {
      "activation": "A bonus action is required to blow the whistle and use its effects.",
      "duration": "Disorienting Melody lasts for 4 seconds, while Reveal Hidden Paths activates once and remains active until the start of your next turn.",
      "endsWhen": "The effect ends when a creature successfully saves against the Wisdom saving throw or on their next turn after the whistle is blown, respectively.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This price reflects its crafting complexity and utility in both combat and exploration scenarios, making it a valuable tool for any adventurer.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T17:29:53.480497+00:00",
    "aiReviewedAt": "2026-07-23T17:29:53.480497+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_night_watcher": {
    "id": "rogueport_night_watcher",
    "name": "Night Watcher Lantern",
    "description": "The Night Watcher Lantern casts a shifting, ever-moving shadow that dances across the walls like a wraith's touch. Its faint violet glow reveals hidden doors and secret passages in the dark, acting as both a guide and a sentinel. When activated during a heist, it can temporarily blind enemies who venture too close, forcing them to rely on their other senses or risk falling into traps unseen by their sight.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌙",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals Hidden Passages",
      "Blinds Enemies with Close Proximity"
    ],
    "vendor": "rogueport",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Reveals Hidden Passages",
        "rules": "When activated, the lantern emits a faint violet light for 1 minute. This light can reveal hidden doors or secret passages within a 20-foot radius, providing advantage on Perception checks to detect such features."
      },
      {
        "title": "Blinds Enemies with Close Proximity",
        "rules": "If an enemy moves within 5 feet of the lantern's light for more than 1 round, they must succeed on a DC 13 Constitution saving throw or become blinded until their next turn. The effect ends if the enemy leaves the area."
      }
    ],
    "levelRequirementReason": "The Night Watcher Lantern requires at least second-level proficiency to handle its subtle, yet powerful, effects.",
    "vendorReason": "Rogueport specializes in equipment that aids in heists and espionage, making the Night Watcher Lantern a natural addition to their inventory.",
    "shippingDetail": "The lantern is carefully packed with spectral energy to ensure it arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute (recharges after a short or long rest)",
      "endsWhen": "The effect ends if the user moves more than 30 feet away from the lantern, or if an enemy successfully saves against its blinding effect.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, reflecting both its rare material and the strategic advantage it provides in complex heists.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:29:57.239194+00:00",
    "aiReviewedAt": "2026-07-23T17:29:57.239194+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_nightfall_blade": {
    "id": "rogueport_nightfall_blade",
    "name": "Nightfall Blade",
    "description": "The Nightfall Blade, a dagger forged from the molten essence of an ancient abyss and smuggled through treacherous realms, glows crimson under moonlight, casting an eerie hue upon its wielder's hand. Its blade is said to whisper secrets of the night, causing enemies to feel its presence in their dreams. In the hands of a skilled rogue, it enhances both offense and defense, dealing +15% extra damage at night while also granting +5% dodge chance against stealthy foes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Moonlit Delight",
      "Dream Whispers"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Moonlit Delight",
        "rules": "When used during nighttime, the Nightfall Blade deals an additional 15% damage. This effect lasts until the end of the user's next turn."
      },
      {
        "title": "Dream Whispers",
        "rules": "Upon a successful hit against an enemy, there is a 20% chance that the target suffers from nightmares for one minute. The target must make a DC 13 Wisdom saving throw or be frightened until the start of their next turn."
      }
    ],
    "levelRequirementReason": "The Nightfall Blade requires a minimum level of 5 due to its complex forging and the mystical properties it holds.",
    "vendorReason": "Rogueport, known for its extensive network of spies and smugglers, is privy to such rare and powerful artifacts from the outer realms.",
    "shippingDetail": "The dagger arrives wrapped in a protective amulet that must be removed before use; failure to do so renders the blade unusable for one day.",
    "usage": {
      "activation": "Instantaneous action",
      "duration": "Until the end of the user's next turn",
      "endsWhen": "Onset of daylight or upon a failed saving throw (see effect details)",
      "charges": "Unlimited, but only usable at night"
    },
    "priceReason": "The blade's rarity and unique properties justify its price, making it a valuable asset for those who venture into the dark.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T17:30:16.488019+00:00",
    "aiReviewedAt": "2026-07-23T17:30:16.488019+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_nightfall_tongue": {
    "id": "rogueport_nightfall_tongue",
    "name": "Nightfall Tongue",
    "description": "The Nightfall Tongue is a venomous appendage that can be summoned from your mouth, slithering out like a deadly serpent to inject its toxic bite into foes. This macabre tongue leaves a lingering, pulsating trail of poison behind, drawing enemies to it like moths to flame—use this weapon with caution in tight spaces or during stealthy encounters. Once unleashed, the tongue's venomous strike can deal 150 points of poison damage instantly.",
    "price": 1000,
    "icon": "🐍",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Venomous Bite",
      "Poison Trail"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Venomous Bite",
        "rules": "When you activate the Nightfall Tongue, it strikes with a venomous bite. This deals 150 poison damage to one target within reach. The effect requires an action and has a range of 5 feet."
      },
      {
        "title": "Poison Trail",
        "rules": "The tongue leaves behind a pulsating trail that attracts creatures within 30 feet. Creatures on the trail are considered difficult terrain until they leave it, and they must make a DC 14 Dexterity saving throw or be pulled toward the source of the trail for 1d6 feet."
      }
    ],
    "levelRequirementReason": "This item requires proficiency in Stealth and is best used by rogues who can effectively employ stealth tactics.",
    "vendorReason": "Rogueport specializes in items that enhance the capabilities of its patrons, especially those involving subterfuge and combat.",
    "shippingDetail": "The Nightfall Tongue is carefully packed using Pipe Express' specialized anti-toxicity shipping containers to ensure it arrives safely at your destination.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the target makes a successful saving throw or when you dismiss the tongue, which requires an action.",
      "charges": "Unlimited, but it recharges after a short rest."
    },
    "priceReason": "Balanced at 1000 XP, this item is priced to reflect its unique abilities and the expertise required to wield it effectively.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:30:22.834270+00:00",
    "aiReviewedAt": "2026-07-23T17:30:22.834270+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_nightfall_ward": {
    "id": "rogueport_nightfall_ward",
    "name": "Nightfall Ward Cloak",
    "description": "The Nightfall Ward Cloak is a rare, dark purple cloak adorned with silver stars that seem to pulse faintly in the dead of night. Crafted from enchanted fabric woven under the light of a lunar eclipse, it absorbs ambient light and releases a soft, ethereal glow when worn. In total darkness, the cloak makes its wearer invisible, muffling sound by 50% and granting an additional +10% dodge chance while cloaked.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Invisibility in Total Darkness",
      "Sound Dampening"
    ],
    "vendor": "rogueport",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Nightfall Invisibility",
        "rules": "Activates as a bonus action, granting the wearer invisibility and sound dampening for 30 seconds. The effect ends if the wearer takes any action other than movement or if hit by an attack."
      },
      {
        "title": "Dodge Chance Increase",
        "rules": "+10% dodge chance while invisible, stacking with any existing bonuses but not exceeding +25%. This effect lasts for the duration of invisibility and is lost upon becoming visible again."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to effectively utilize its stealth capabilities without being overwhelmed by combat.",
    "vendorReason": "Rogueport specializes in gear for night-time operations, making the Nightfall Ward Cloak a perfect fit for their inventory.",
    "shippingDetail": "Ships via Boo Spectral Mail; delivery is swift and reliable, ensuring your cloak arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action to activate invisibility and sound dampening.",
      "duration": "30 seconds of invisibility and sound dampening.",
      "endsWhen": "The effect ends if the wearer takes an action other than movement or is hit by an attack.",
      "charges": "Unlimited uses per day, recharging at dawn."
    },
    "priceReason": "Balanced for a rare item that enhances stealth and sound evasion without overpowered abilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:30:29.337516+00:00",
    "aiReviewedAt": "2026-07-23T17:30:29.337516+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_nightshade_catalyst": {
    "id": "rogueport_nightshade_catalyst",
    "name": "Nightshade Catalyst",
    "description": "The Nightshade Catalyst is a vial of pitch-black essence that pulses with an eerie glow. Crafted from rare nightshade roots and alchemical reagents, it releases hallucinogenic fumes when activated. This concoction can be used during night raids to manipulate the perceptions of foes or allies, causing them to see illusory shadows for 6 seconds. The vial also has a chance to instill temporary paranoia in those affected, making them question their surroundings and comrades for up to an hour.",
    "price": 1000,
    "icon": "🌀",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Illusionary Shadows",
      "Paranoia"
    ],
    "vendor": "rogueport",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Illusionary Shadows",
        "rules": "The Nightshade Catalyst causes targets within 30 feet to see illusory shadows that move as if they were real for 6 seconds. This effect has no save DC and does not require an action to activate."
      },
      {
        "title": "Paranoia",
        "rules": "There is a 30% chance that any creature exposed to the Nightshade Catalyst will suffer from temporary paranoia, causing them to distrust their surroundings for up to an hour. This effect ends when the creature leaves the area affected by the catalyst."
      }
    ],
    "levelRequirementReason": "The Nightshade Catalyst is accessible to low-level rogues who wish to experiment with alchemical effects without advanced training.",
    "vendorReason": "Rogueport specializes in exotic and rare items, including the Nightshade Catalyst, which is a signature product of their trade network.",
    "shippingDetail": "The catalyst requires special handling to prevent accidental exposure during transit. The Void Drifter ensures safe delivery with expedited couriers.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "Instantaneous, lasts for up to an hour per use",
      "endsWhen": "Exhausted after one use or destroyed by the user",
      "charges": "Unlimited"
    },
    "priceReason": "The Nightshade Catalyst is priced at 1000 XP, reflecting its rare ingredients and alchemical complexity.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:30:34.927244+00:00",
    "aiReviewedAt": "2026-07-23T17:30:34.927244+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_nightshade_potion": {
    "id": "rogueport_nightshade_potion",
    "name": "Nightshade Elixir",
    "description": "A dark elixir that grants temporary invisibility and enhances stealth. Consuming it causes a brief hallucination of shadows dancing around you, making enemies misjudge your position.",
    "price": 2500,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Grants temporary invisibility for 10 seconds",
      "Enhances stealth by 30%",
      "Induces hallucinatory shadow visions"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "rogueport_onyx_blood_tincture": {
    "id": "rogueport_onyx_blood_tincture",
    "name": "Onyx Blood Tincture",
    "description": "The Onyx Blood Tincture is a dark, viscous elixir captured from the essence of the Onyx Hand, a malevolent spirit known for its mastery over decay and stealth. Draining a sip grants you temporary invisibility, allowing you to slip past foes unseen, but at the cost of your body’s own metabolism; for a fleeting moment, your pulse slows almost to stillness, leaving you disoriented if not careful. This dark potion is a rogue’s dream, perfect for those who walk in shadows and need to escape without trace.",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Metabolic Slowdown"
    ],
    "vendor": "rogueport",
    "shippedBy": "Courier of Shadows",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "As an action, you can consume the Onyx Blood Tincture to become invisible for 1 minute. You are also exposed to any line of sight that passes through you, and you have disadvantage on Dexterity (Stealth) checks until the end of your next turn."
      },
      {
        "title": "Metabolic Slowdown",
        "rules": "For 2 minutes after consuming the elixir, your metabolism slows by half. You gain advantage on Constitution saving throws but take an additional amount of damage equal to half your level from poison and disease. This effect ends when you finish a short or long rest."
      }
    ],
    "levelRequirementReason": "Beginners who wish to master the art of stealth often experiment with this potion, but it is too potent for less skilled adventurers.",
    "vendorReason": "Rogueport specializes in crafting and distributing items that enhance the abilities of rogues and thieves, making the Onyx Blood Tincture a natural fit.",
    "shippingDetail": "Ships via the shadowy paths of the Underdark, ensuring secrecy but adding a delay of one day to delivery.",
    "usage": {
      "activation": "Action (consuming)",
      "duration": "1 minute for Invisibility and 2 minutes for Metabolic Slowdown",
      "endsWhen": "Ends when you finish a short or long rest; disadvantage on Dexterity (Stealth) checks until the end of your next turn.",
      "charges": "Unlimited"
    },
    "priceReason": "The Onyx Blood Tincture is rare and potent, requiring precise brewing from a master alchemist. Its price reflects both the difficulty in obtaining its ingredients and the risk involved.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-23T17:31:12.468985+00:00",
    "aiReviewedAt": "2026-07-23T17:31:12.468985+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_rainfall_key": {
    "id": "rogueport_rainfall_key",
    "name": "Rainfall Key of the Wetback",
    "description": "The Rainfall Key of the Wetback is a tarnished iron key shaped like a miniature raindrop, its surface etched with ancient runes. Crafted by the shadowy figures who control Rogueport’s underbelly, it opens hidden vaults in the city's rain-soaked alleys. Each use triggers a brief downpour that obscures visibility and douses nearby flames, creating a 10-foot-radius splash effect for 30 seconds. In wet terrain, it grants its bearer an additional +5 stealth bonus, making them nearly invisible to the naked eye.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌧",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Unlock hidden sewer access points",
      "Minor rainstorm effect"
    ],
    "vendor": "rogueport",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Mineral Rain Trigger",
        "rules": "When used as a bonus action within wet terrain, this key triggers a 10-foot-radius splash effect that lasts for 30 seconds. This effect causes minor rainstorms, reducing visibility to 20 feet and extinguishing all non-magical flames in the area. It has no save DC and can be used once per long rest."
      },
      {
        "title": "Stealth Boost",
        "rules": "In wet terrain, using the key grants a +5 bonus to Dexterity (Stealth) checks for 1 hour. This effect is cumulative with other sources of stealth bonuses but does not stack with spells or abilities that provide similar benefits."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to use the key's effects without drawing unnecessary attention.",
    "vendorReason": "Only the shadowy figures who control Rogueport’s underbelly would dare sell such a cursed and valuable item.",
    "shippingDetail": "Delivered by Boo Spectral Mail, this key is carefully packaged to prevent unwanted attention during transit.",
    "usage": {
      "activation": "Bonus action within wet terrain",
      "duration": "30 seconds (minor rainstorm effect)",
      "endsWhen": "Ends after its duration or when the key is used again",
      "charges": "Unlimited, but limited to one use per long rest"
    },
    "priceReason": "The key's rarity and utility make it a valuable asset for those navigating Rogueport’s treacherous alleys.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:30:45.690740+00:00",
    "aiReviewedAt": "2026-07-23T17:30:45.690740+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_rakasha_amulet": {
    "id": "rogueport_rakasha_amulet",
    "name": "Shadow Pact Amulet",
    "description": "The Shadow Pact Amulet is a dark, enigmatic piece of jewelry forged from obsidian and adorned with ancient Rakasha sigils. It whispers secrets of shadow magic and binds the wearer to an eternal pact, granting resistance to both shadow spells and fear effects. Wielding this amulet allows you to conjure a faint shadow clone that can aid in combat or reconnaissance. The amulet's power is as fickle as it is potent; only those who have proven their worth through nine levels of prowess are deemed worthy to wear its burden.",
    "category": "equipment",
    "price": 1000,
    "icon": "🖤",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Shadow Resistance",
      "Shadow Clone"
    ],
    "vendor": "rogueport",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Shadow Resistance",
        "rules": "The wearer gains resistance to shadow damage and immunity to fear effects. This effect persists until the end of their next turn."
      },
      {
        "title": "Shadow Clone",
        "rules": "Once per long rest, the wearer can cast Shadow Clone as a ritual. The clone lasts for 1 minute and has half the user's hit points. A successful DC 15 Con saving throw ends this effect early."
      }
    ],
    "levelRequirementReason": "Only those who have proven their worth through nine levels of prowess are deemed worthy to wear its burden.",
    "vendorReason": "Rogueport, a hub for all things arcane and clandestine, offers this powerful artifact to those who can prove they need it.",
    "shippingDetail": "Delivered via the Noki's swift corals, ensuring safe transport even in treacherous waters.",
    "usage": {
      "activation": "Shadow Clone is cast as a ritual action once per long rest.",
      "duration": "Instantaneous; Shadow Resistance lasts until end of next turn.",
      "endsWhen": "Shadow Clone ends upon successful Con saving throw or completion of the duration.",
      "charges": "One charge per day"
    },
    "priceReason": "Balanced at 1000 XP, this amulet offers powerful abilities that are essential for high-level rogues and shadow mages.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T17:30:49.926021+00:00",
    "aiReviewedAt": "2026-07-23T17:30:49.926021+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_rakasha_keychain": {
    "id": "rogueport_rakasha_keychain",
    "name": "Rakasha Keychain of the Dock Ward",
    "description": "A metallic keychain with intricate engravings of the Rakasha clans' sigils, this charm is forged from an ancient metal said to have been crafted in the depths of the Undercity. It bears a hidden map fragment to Peasley Financial's vaults and grants its bearer a sense of clandestine knowledge when navigating the Dock Ward. Worn by the Rakasha clan members, it subtly enhances stealth with a +1 bonus on Stealth checks within alleys or docks, and there is an eerie 10% chance that it triggers a sudden silence in the area during heists.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗝",
    "stock": 4,
    "rarity": "common",
    "effects": [
      "Sudden Silence Trigger",
      "Stealth Bonus"
    ],
    "vendor": "rogueport",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sudden Silence Trigger",
        "rules": "When used during a heist, there is a 10% chance that it triggers a sudden silence in the area within a 30-foot radius for 1 minute. This effect ends if noise is made or an enemy within the area makes a successful Perception check (DC 15). The item has only one use per day."
      },
      {
        "title": "Stealth Bonus",
        "rules": "The wearer gains a +1 bonus to Stealth checks in docks or alleys. This effect is passive and does not require any action from the wearer, but it can be suppressed by wearing heavy armor. The bonus lasts until the wearer takes a long rest."
      }
    ],
    "levelRequirementReason": "This keychain provides basic support for stealth checks in urban environments without requiring high-level prowess.",
    "vendorReason": "Rogueport is known for its connections to the city's underworld and thus sells items crafted by the Rakasha clan members like this keychain.",
    "shippingDetail": "Delivered with priority courier service, ensuring swift arrival from the Undercity.",
    "usage": {
      "activation": "Passive effect; requires no action to activate.",
      "duration": "Until long rest or suppressed by heavy armor.",
      "endsWhen": "The wearer takes a long rest or wears heavy armor.",
      "charges": "Unlimited, but limited to one use per day for the Sudden Silence Trigger."
    },
    "priceReason": "This keychain offers both tactical and thematic benefits without being overly powerful, making it a balanced addition to any rogue's toolkit.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T17:31:02.240789+00:00",
    "aiReviewedAt": "2026-07-23T17:31:02.240789+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_raven_eyes": {
    "id": "rogueport_raven_eyes",
    "name": "Raven Eyes",
    "description": "Raven Eyes are a pair of sleek goggles forged from shadow-drenched steel and enchanted with the essence of ravens. They grant their wearer vision in near-total darkness, revealing hidden paths and secret doors within a 50-foot radius. In stealth mode, you have advantage on Dexterity (Stealth) checks and a +4 bonus to perception checks in dim light. These goggles are the creation of the Rogueport, masters of shadow and subterfuge.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Shadow Vision",
      "Stealth Advantage"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shadowrunner Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shadow Vision",
        "rules": "The wearer gains advantage on Perception checks to notice hidden paths or secret doors within a 50-foot radius. This effect is active as long as the goggles are worn."
      },
      {
        "title": "Stealth Advantage",
        "rules": "The wearer has advantage on Dexterity (Stealth) checks while wearing the Raven Eyes and is considered proficient in Stealth if they lack proficiency, for a duration of 1 hour per charge. Each use expends one charge."
      }
    ],
    "levelRequirementReason": "These goggles are designed to assist rogues at any level with their stealthy endeavors.",
    "vendorReason": "The Rogueport is renowned for crafting gear that enhances a character's ability to navigate dark and hidden places.",
    "shippingDetail": "Ships via Shadowrunner Express, arriving at your door in three days or less.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous (Shadow Vision), 1 hour per charge (Stealth Advantage)",
      "endsWhen": "The goggles are removed (Shadow Vision), the duration expires (Stealth Advantage) or charges are exhausted",
      "charges": "5"
    },
    "priceReason": "Crafted from rare materials and enchanted with powerful shadow magic, these goggles provide significant utility for adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:31:04.049377+00:00",
    "aiReviewedAt": "2026-07-23T17:31:04.049377+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_raven_scarf_of_vow": {
    "id": "rogueport_raven_scarf_of_vow",
    "name": "Raven Scarf of Vow",
    "description": "The Raven Scarf of Vow is a black silk scarf imbued with forgotten oaths and the whispers of broken promises. It is said to have been crafted in the shadowed forges of the Raven Queen's realm, where the threads of fate intertwine. Wearing this scarf grants immunity to debuffs for 10 seconds and increases your chance to escape traps by 20%. The fabric itself seems almost alive, pulsing with a faint blue glow when you invoke its power.",
    "category": "equipment",
    "price": 1000,
    "icon": "🕯",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Immunity to Debuffs",
      "Enhanced Trap Evasion"
    ],
    "vendor": "rogueport",
    "shippedBy": "Spiritbound Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Immunity to Debuffs",
        "rules": "Activates as a bonus action. Grants immunity to all debuffs for 10 seconds. Ends when the duration expires or if you take damage."
      },
      {
        "title": "Enhanced Trap Evasion",
        "rules": "Increases your chance to escape traps by 20% until the end of your next turn, requiring a Dexterity saving throw with a DC of 15. Ends if you fail this save or if you take damage."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to effectively use the scarf's abilities without being overwhelmed by debuffs.",
    "vendorReason": "Rogueport, known for its extensive trade with the underworld, often carries items that bridge the gap between the living and the dead, such as this scarf imbued with oaths and promises.",
    "shippingDetail": "Ships via Spiritbound Courier, ensuring the scarf arrives in pristine condition, ready for use upon its arrival.",
    "usage": {
      "activation": "Bonus action to activate; requires a Dexterity saving throw at the start of your turn with an enhanced chance to escape traps.",
      "duration": "10 seconds or until you take damage",
      "endsWhen": "Duration ends or you take damage",
      "charges": "Wears out after 3 uses"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rare crafting and the powerful abilities it offers.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-23T17:31:18.644229+00:00",
    "aiReviewedAt": "2026-07-23T17:31:18.644229+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_scarlet_glove": {
    "id": "rogueport_scarlet_glove",
    "name": "Scarlet Glove of Thievery",
    "description": "The Scarlet Glove of Thievery is a crimson gauntlet that whispers with the secrets of shadows. When donned, it grants its wearer +2 to Dexterity (Stealth) checks and a +15% chance to bypass security locks. In combat, its red glow masks your presence, making you an elusive target for even the keenest eyes. The glove is said to have been crafted from the remnants of ancient, forgotten thieves' guilds, each thread bearing the essence of their craft.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+2 Dexterity (Stealth)",
      "15% chance to bypass locks"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shadowy Mask",
        "rules": "While wearing this glove in combat, you gain advantage on Dexterity (Stealth) checks. This effect ends when the wearer is no longer in combat."
      },
      {
        "title": "Lockpicker's Edge",
        "rules": "Once per short or long rest, the wearer can use an action to attempt a lockpicking check with advantage. If successful, they bypass the lock completely. Failing this check does not expend the charge."
      }
    ],
    "levelRequirementReason": "The glove's enchantment is subtle and requires no high-level spellcasting.",
    "vendorReason": "Rogueport specializes in gear that enhances thievery and stealth, making it the perfect vendor for such an item.",
    "shippingDetail": "The gloves are shipped discreetly via Shy Guy Smugglers to ensure they arrive without attracting unwanted attention.",
    "usage": {
      "activation": "Passive effect, activated by donning the glove; lockpicking ability is a once-per-rest action.",
      "duration": "Until removed or wearer leaves combat",
      "endsWhen": "Leaving combat or removing the glove",
      "charges": "One per short or long rest"
    },
    "priceReason": "The glove's rarity and enchantment justify its price, making it a valuable but not overpowered addition to any rogue's arsenal.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:31:19.916559+00:00",
    "aiReviewedAt": "2026-07-23T17:31:19.916559+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_scarlet_shroud": {
    "id": "rogueport_scarlet_shroud",
    "name": "Scarlet Shroud",
    "description": "The Scarlet Shroud is a crimson cloak woven from the threads of starlight and shadow, its fabric shimmering like molten silk under the dark sky. It whispers secrets of hidden passageways as it glows red when you are near an enemy. This glowing garment can siphon vitality from foes, reducing their hit points by 5% each time you move adjacent to them. The cloak also reveals concealed paths and traps within a 10-foot radius around you.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Saps Enemy Vitality",
      "Reveals Hidden Paths"
    ],
    "vendor": "rogueport",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Sap Enemy Vitality",
        "rules": "When you move adjacent to an enemy, reduce its hit points by 5%. This effect has a 1/round limit and ends when the Shroud is removed or destroyed."
      },
      {
        "title": "Reveal Hidden Paths",
        "rules": "Passively reveals hidden passageways and traps within a 10-foot radius. The effect persists until an enemy moves into the area, at which point it becomes dormant for 1 minute."
      }
    ],
    "levelRequirementReason": "Requires reaching at least level 5 to harness its subtle yet potent magic.",
    "vendorReason": "Rogueport is known for its network of secret passages and concealed routes, making it the perfect vendor for this cloak.",
    "shippingDetail": "Ships via Koopa's Express, ensuring swift delivery through underground tunnels and hidden routes.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until removed or destroyed.",
      "endsWhen": "When the Shroud is removed or destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1,000 XP to reflect its rare and useful abilities in adventuring.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:32:17.992227+00:00",
    "aiReviewedAt": "2026-07-23T17:32:17.992227+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_scorched_soul": {
    "id": "rogueport_scorched_soul",
    "name": "Scorched Soul Fragment",
    "description": "The Scorched Soul Fragment is a charred, gemstone-like relic, said to have been forged in the heart of an ancient temple consumed by flames. It glows faintly with an eerie light, and when used, it may reveal secrets from your past that you wish were buried forever. This cursed fragment grants you fleeting visions of the past during heists, but beware—it might also expose hidden truths you would rather keep secret.",
    "price": 1000,
    "icon": "🗡",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+10% chance to find hidden loot in dark zones",
      "Echoes of the Past"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Echoes of the Past",
        "rules": "When used during a heist, this fragment reveals one enemy's true identity for the duration. This effect is instantaneous and has no save DC or recharge requirement."
      },
      {
        "title": "+10% chance to find hidden loot in dark zones",
        "rules": "This passive effect lasts until the end of your next long rest. There are no restrictions on usage, but you must be in a dark zone for it to activate."
      }
    ],
    "levelRequirementReason": "Requires at least 6th level to handle the cursed nature and potential psychological effects of the relic.",
    "vendorReason": "Rogueport, known for its underground trading networks, is a fitting vendor for such an artifact.",
    "shippingDetail": "Ships via Pipe Express with a delivery delay of one week due to restricted routes through the dark zones.",
    "usage": {
      "activation": "Used as an action during a heist.",
      "duration": "Instantaneous effect, lasting for the duration of your next long rest.",
      "endsWhen": "The effect ends at the start of your next long rest or when used again.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced price reflects its cursed nature, limited utility, and potential psychological risks.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-23T17:32:22.549370+00:00",
    "aiReviewedAt": "2026-07-23T17:32:22.549370+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_scorched_vault_key": {
    "id": "rogueport_scorched_vault_key",
    "name": "Scorched Vault Key",
    "description": "The Scorched Vault Key is crafted from the charred remains of an ancient, fire-scorched vault. It feels hot to the touch and emits a faint sizzle when drawn near metal surfaces. This key grants access to long-forgotten treasures but leaves its wielder with a lingering burn, causing minor discomfort for 10 seconds after use. With each attempt at unlocking, the key's fiery essence grants a fleeting boost in luck, increasing the chances of finding hidden loot by 20%. However, this charm comes at a price—those who handle it must endure a brief scalding.",
    "price": 1000,
    "icon": "🔐",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Unlocks Hidden Vaults",
      "Temporary Burn"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Unlock Hidden Vaults",
        "rules": "When used as an action, the key unlocks secret doors and safes. The wielder has advantage on Perception checks to locate hidden compartments within a radius of 30 feet."
      },
      {
        "title": "Temporary Burn",
        "rules": "The user is subjected to a minor burn effect for 10 seconds after using the key, dealing no damage but causing temporary discomfort. This effect ends naturally without a saving throw."
      }
    ],
    "levelRequirementReason": "Requires at least second-level proficiency to wield this delicate yet potent artifact.",
    "vendorReason": "Rogueport specializes in exotic and rare items, including those that enhance a character's stealth and resourcefulness.",
    "shippingDetail": "Ships via Pipe Express with expedited delivery within one week from Rogueport.",
    "usage": {
      "activation": "Action to unlock secret doors or safes; passive effect during use.",
      "duration": "Instantaneous, duration of the burn is 10 seconds.",
      "endsWhen": "The burn effect ends after 10 seconds without a saving throw.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP, this key is priced to reflect its rarity and utility in unlocking hidden treasures while posing minor discomfort.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T17:31:34.026849+00:00",
    "aiReviewedAt": "2026-07-23T17:31:34.026849+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_shadow_blood_satchel": {
    "id": "rogueport_shadow_blood_satchel",
    "name": "Shadow Blood Satchel",
    "description": "The Shadow Blood Satchel is a leather pouch filled with the concentrated essence of assassins who perished in failed missions. When activated, it grants the user total stealth for 10 seconds, making them undetectable to all senses except those with Keen Hearing or Darkvision. The satchel also reveals hidden paths and secret doors within a 30-foot radius, illuminating otherwise invisible exits and entrances. A slight risk of triggering a silent ambush ensures that nearby enemies are momentarily caught off guard.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Total Stealth",
      "Reveal Hidden Paths"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Total Stealth",
        "rules": "Activate as a bonus action, providing total stealth for 10 seconds. Ends when the user takes damage or enters an area of light."
      },
      {
        "title": "Reveal Hidden Paths",
        "rules": "Instantaneous effect that reveals hidden paths and secret doors within a 30-foot radius. Once used, it cannot be activated again until after a long rest."
      }
    ],
    "levelRequirementReason": "Basic stealth techniques are taught early in the rogue's training to ensure even novice rogues can benefit from this satchel.",
    "vendorReason": "Rogueport specializes in items that enhance the capabilities of its patrons, making the Shadow Blood Satchel a perfect fit for their inventory.",
    "shippingDetail": "Ships via Lakitu Drones' express service, delivered within 24 hours.",
    "usage": {
      "activation": "Bonus action to activate total stealth; instantaneous reveal of hidden paths and doors.",
      "duration": "10 seconds for total stealth; once per long rest for revealing hidden paths and doors.",
      "endsWhen": "Total stealth ends when the user takes damage or enters an area of light; reveals end upon use, with a cooldown until next long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The satchel's unique blend of fallen assassins' blood and its dual functions make it a valuable tool for rogues, justifying the price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:31:49.431959+00:00",
    "aiReviewedAt": "2026-07-23T17:31:49.431959+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_shadow_cloak": {
    "id": "rogueport_shadow_cloak",
    "name": "Shadow Cloak of the Drowned City",
    "description": "The Shadow Cloak of the Drowned City is a cloak spun from the remnants of long-lost fortunes, woven by hands that once held great guilt. Its fabric shifts with the light, blending seamlessly into dim or murky environments. The wearer becomes invisible in these conditions, but at a cost: their movement speed decreases by 15%, and they leave behind a faint trail of shadows that can be used to distract enemies or confuse foes.",
    "category": "equipment",
    "price": 4000,
    "icon": "🌑",
    "stock": 0,
    "rarity": "epic",
    "effects": [
      "Veil of Darkness",
      "Phantom Echo"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Veil of Darkness",
        "rules": "When activated as an action, the wearer becomes invisible in dim or murky environments for up to 1 minute. This effect ends if the wearer moves more than 30 feet away from their original location."
      },
      {
        "title": "Phantom Echo",
        "rules": "While the Veil of Darkness is active, a faint trail of shadows lingers behind the wearer for 10 feet in all directions. This can be used as a distraction to draw enemies' attention, but it provides only a +2 bonus on Dexterity (Stealth) checks made with this cloak."
      }
    ],
    "levelRequirementReason": "The cloak's complex weave and the guilt it carries demand a certain level of experience and skill.",
    "vendorReason": "Rogueport is known for its shady dealings, including stolen goods like this cursed yet powerful item.",
    "shippingDetail": "Ships directly from Rogueport, arriving within a week with a guaranteed delivery.",
    "usage": {
      "activation": "Activates as an action.",
      "duration": "1 minute or until the wearer moves more than 30 feet away.",
      "endsWhen": "The effect ends if the user moves too far from their starting point.",
      "charges": "Unlimited, but limited to once per long rest."
    },
    "priceReason": "Reflects the cloak's epic rarity and the complexity of its weaving.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-23T17:31:55.035099+00:00",
    "aiReviewedAt": "2026-07-23T17:31:55.035099+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_shadow_contract": {
    "id": "rogueport_shadow_contract",
    "name": "Shadow Contract",
    "description": "The Shadow Contract is a tattered, inked parchment that whispers with malevolent intent. When invoked, it seals your fate in a pact of temporary invulnerability, allowing you to shrug off all attacks for a fleeting moment. Each use, however, costs a fragment of your soul, leaving you more vulnerable than ever before. This cursed document is said to have been crafted by the Rakasha, whose dark arts infuse it with forbidden power.",
    "price": 1000,
    "icon": "📜",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Invulnerability",
      "Soul Drain"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Invulnerability",
        "rules": "When activated as a bonus action, the Shadow Contract grants you temporary invulnerability to all attacks for 10 seconds. This effect is instantaneous and lasts until it is interrupted or the duration ends."
      },
      {
        "title": "Soul Drain",
        "rules": "Using the contract costs 1 soul point from the user. The soul drain occurs immediately upon activation, reducing your resilience by a shadowed fraction."
      }
    ],
    "levelRequirementReason": "Only those with enough experience and skill to understand the risks can safely invoke this cursed artifact.",
    "vendorReason": "Rogueport's contacts in the dark markets have acquired this rare item, which they deem too dangerous for any but their most trusted clients.",
    "shippingDetail": "The shipment is delivered by a Rakasha courier who requires a blood oath from the recipient to ensure its safe use and proper disposal after activation.",
    "usage": {
      "activation": "Bonus action",
      "duration": "10 seconds or until interrupted",
      "endsWhen": "Duration ends, interrupted, or the contract is destroyed",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Shadow Contract's price reflects its epic rarity and the risk it poses to the user.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T17:32:42.211611+00:00",
    "aiReviewedAt": "2026-07-23T17:32:42.211611+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_shadow_crimson": {
    "id": "rogueport_shadow_crimson",
    "name": "Shadow Crimson Vial",
    "description": "The Shadow Crimson Vial contains a volatile elixir that, when consumed, transforms the drinker into an ethereal shadow for thirty seconds, making them invulnerable to all physical attacks. The vial's crimson liquid is said to come from the depths of the Shadowfell, imbued with the essence of forgotten souls. While immune to harm, the user feels a creeping sense of dread as their psyche becomes vulnerable to subtle mental manipulations.",
    "price": 1000,
    "icon": "💉",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Invulnerability to Physical Damage",
      "Mental Vulnerability"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shadowcarrier Couriers",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Invulnerability to Physical Damage",
        "rules": "The user is immune to all physical damage for thirty seconds upon activation. The effect ends if the user takes any kind of damage, drops the vial, or falls unconscious."
      },
      {
        "title": "Mental Vulnerability",
        "rules": "For five seconds after consuming the vial, the user's mind is susceptible to subtle mental manipulation. An attacker can attempt a Charisma (Intimidation) check against the user’s Will save DC (15 + user’s proficiency bonus). On a success, the attacker gains advantage on their next attack roll."
      }
    ],
    "levelRequirementReason": "The vial's powerful magic requires a proficient rogue to handle its effects without succumbing to the mental backlash.",
    "vendorReason": "Rogueport, known for their black-market wares and connections with shadowy forces, is rumored to have acquired this dangerous elixir from a forgotten necromancer's vault.",
    "shippingDetail": "The vial must be delivered via the Shadowcarriers' secure courier service, ensuring it remains undisturbed during transit.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "30 seconds or until interrupted",
      "endsWhen": "User takes damage, drops the vial, or falls unconscious",
      "charges": "Unlimited"
    },
    "priceReason": "The vial's rarity and the risk involved in procuring it from the Shadowfell make it a valuable commodity.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-23T17:32:25.706061+00:00",
    "aiReviewedAt": "2026-07-23T17:32:25.706061+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_shadow_crowd_tape": {
    "id": "rogueport_shadow_crowd_tape",
    "name": "Shadow Crowd Tape",
    "description": "Shadow Crowd Tape, a shimmering tapestry woven from the whispers of the night, binds foes into a cohesive crowd, leaving them ripe for devastating area-of-effect attacks. Activated by an alchemist's deft motion, this tapestry dissolves after 10 minutes if no enemies remain within its radius or upon any hostile movement nearby. A true masterwork of Rogueport's shadowy trades, it ensures that foes are never out of reach for the next wave of attackers.",
    "price": 1000,
    "icon": "🎭",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Crowd Binding",
      "Enhanced AoE Damage"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Crowd Binding",
        "rules": "Activates as a bonus action. Targets all creatures within 10 feet that can see or hear you, binding them into a cohesive group for the duration of the effect. Ends if any creature in the area moves more than 5 feet away from another bound creature. No save is allowed."
      },
      {
        "title": "Enhanced AoE Damage",
        "rules": "Increases damage taken by all creatures within the Crowd Binding effect by 30% for the duration of the effect. This bonus stacks with other area-of-effect damage bonuses, but not with damage resistance or immunities."
      }
    ],
    "levelRequirementReason": "This item requires minimal dexterity to activate and is suitable for lower-level players.",
    "vendorReason": "Rogueport is renowned for its masterpieces of espionage, and Shadow Crowd Tape is one such creation.",
    "shippingDetail": "Ships within Pipe Express' usual delivery time frame with a special delivery note ensuring secrecy.",
    "usage": {
      "activation": "Bonus action to activate and maintain the effect.",
      "duration": "10 minutes or until no creatures remain in the area, or any creature moves more than 5 feet away from another bound creature.",
      "endsWhen": "The duration ends if no enemies are within range for 10 minutes or upon hostile movement within the radius.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Shadow Crowd Tape offers significant tactical advantage, making it a fair value at 1000 XP.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T17:32:48.645305+00:00",
    "aiReviewedAt": "2026-07-23T17:32:48.645305+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_shadow_fang": {
    "id": "rogueport_shadow_fang",
    "name": "Shadow Fang",
    "description": "Shadow Fang is a cursed dagger forged from shadowy obsidian, its blade etched with runes that whisper secrets of the night. When it lands in a clean hit, it shatters into darkness, leaving behind a trail that absorbs and extinguishes any light-based magic within reach, plunging enemies into eternal twilight for three seconds. Its touch is as lethal as it is ominous, making every strike both deadly and mysterious.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Absorbs Light-Based Magic",
      "Instant Darkness Trail"
    ],
    "vendor": "rogueport",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Absorbs Light-Based Magic",
        "rules": "When Shadow Fang lands on a clean hit, it creates a 10-foot radius of darkness that extinguishes all light-based spells or effects within the area. This effect lasts for 3 seconds and has no save DC."
      },
      {
        "title": "Instant Darkness Trail",
        "rules": "The dagger leaves behind a 20-foot-long trail of shadowy darkness upon impact, blocking vision for any creature in the path for 3 seconds. This effect is instantaneous and does not require an action to activate."
      }
    ],
    "levelRequirementReason": "Shadow Fang's dark enchantments necessitate a proficient rogue who understands its shadows.",
    "vendorReason": "Rogueport, known for its black market wares, sells this cursed dagger to those who seek the darkest tools in their arsenal.",
    "shippingDetail": "Due to its cursed nature, Shadow Fang is shipped discreetly via Koopa Postal's top-secret courier service.",
    "usage": {
      "activation": "Instantaneous on a clean hit",
      "duration": "3 seconds per activation",
      "endsWhen": "The effect ends when the darkness dissipates or the dagger is removed from the affected area",
      "charges": "Unlimited, but only one activation per short rest"
    },
    "priceReason": "Shadow Fang's rare crafting materials and dark enchantments justify its moderate price.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T17:32:52.259810+00:00",
    "aiReviewedAt": "2026-07-23T17:32:52.259810+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_shadow_finger": {
    "id": "rogueport_shadow_finger",
    "name": "Shadow Finger",
    "description": "The Shadow Finger is a cursed artifact, a gnarled digit of obsidian and shadow that curls like a living thing. Crafted by the enigmatic Rogueport, it allows its wielder to phase through thin walls or shadows with ease. With each use, there's a chilling 15% chance of triggering a vivid hallucination, leaving you seeing ghostly images for ten seconds. It grants temporary invisibility, making it an invaluable tool for the stealthy and desperate.",
    "category": "equipment",
    "price": 1000,
    "icon": "👁",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Phase through thin walls or shadows",
      "15% chance to trigger a phantom hallucination"
    ],
    "vendor": "rogueport",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shadow Phase",
        "rules": "As a bonus action, you can use the Shadow Finger to phase through thin walls or shadows. You are invisible for 3 seconds and gain advantage on Dexterity (Stealth) checks. This effect has a cooldown of one minute."
      },
      {
        "title": "Phantom Hallucination",
        "rules": "There is a 15% chance that when you use the Shadow Finger, you will experience a vivid hallucination for 10 seconds. During this time, you are incapacitated and can't take actions or reactions."
      }
    ],
    "levelRequirementReason": "Requires at least third level to master the subtle arts of stealth and shadow manipulation.",
    "vendorReason": "Rogueport is known for its exotic and cursed artifacts, making it a fitting vendor for such an item.",
    "shippingDetail": "Ships via Koopa Postal's express service with a one-day delivery guarantee.",
    "usage": {
      "activation": "Bonus action to phase through thin walls or shadows; reaction to use in emergencies.",
      "duration": "Instantaneous, duration of effect is 3 seconds for invisibility and 10 seconds for hallucination.",
      "endsWhen": "Phasing ends when you move more than five feet away from the wall or shadow. Hallucinations end after their duration.",
      "charges": "Unlimited uses, one-minute cooldown between uses."
    },
    "priceReason": "Balanced at 1000 XP to reflect its cursed nature and utility in stealth scenarios.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-23T17:32:56.065765+00:00",
    "aiReviewedAt": "2026-07-23T17:32:56.065765+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_shadow_fist_glove": {
    "id": "rogueport_shadow_fist_glove",
    "name": "Shadow Fist Glove",
    "description": "The Shadow Fist Glove is a rare, cursed gauntlet that whispers secrets in darkness. Its midnight steel bands pulse with an eerie glow when shadows gather. Wield it only under total darkness, for its silent strikes deal 10% extra damage to hidden foes and amplify your stealth by +20%. The glove's dark magic requires the gloom to activate, binding you to the night and making you a shadow among the shadows.",
    "category": "equipment",
    "price": 1000,
    "icon": "🖤",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Stealth Boost",
      "Silent Strike"
    ],
    "vendor": "rogueport",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Stealth Boost",
        "rules": "While wearing this glove in total darkness, your chance to remain undetected increases by +20%. This effect is passive and does not require activation."
      },
      {
        "title": "Silent Strike",
        "rules": "When you make an attack against a hidden target while wearing the Shadow Fist Glove and under total darkness, the attack deals 10% extra damage. Requires full darkness to function; otherwise, it has no effect."
      }
    ],
    "levelRequirementReason": "Requires at least level 5 due to its cursed nature and the need for specialized stealth training.",
    "vendorReason": "Rogueport specializes in rare, enchanted equipment tailored for rogue classes like those who would wield such a glove.",
    "shippingDetail": "Ships via the Void Drifter Relay, known for its unpredictable but reliable deliveries through interdimensional routes.",
    "usage": {
      "activation": "Passive; requires total darkness to function.",
      "duration": "Instantaneous activation upon entering a state of total darkness.",
      "endsWhen": "Discontinues when exposed to light or lost by the wearer.",
      "charges": "Unlimited, recharges automatically in complete darkness."
    },
    "priceReason": "Balanced at 1000 XP as it provides a unique stealth boost and silent strike ability, suitable for a rare item of moderate power.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:33:38.257498+00:00",
    "aiReviewedAt": "2026-07-23T17:33:38.257498+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_shadow_fists": {
    "id": "rogueport_shadow_fists",
    "name": "Shadow Fists of the Iron Legion",
    "description": "The Shadow Fists of the Iron Legion are gauntlets forged from the very essence of forgotten voids, their surface etched with arcane symbols that shimmer with stolen light. Wielders must be ruthless, for these fists channel the dark energy of their victims, siphoning life force with each strike. The gauntlets grant devastating melee attacks and a fleeting moment of invisibility after three consecutive strikes, ensuring every blow is both deadly and unseen.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% Critical Hit Chance",
      "5% HP Drain on Each Hit"
    ],
    "vendor": "rogueport",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Critical Surge",
        "rules": "Activate as a bonus action. When you score a critical hit with these gauntlets, you gain temporary invisibility for 1 minute. This effect can only be used after three consecutive successful melee attacks."
      },
      {
        "title": "Lethal Drain",
        "rules": "Each time you make a melee attack while wearing the Shadow Fists of the Iron Legion, you drain 5% of your maximum hit points as temporary hit points. This effect ends if you are reduced to 0 hit points or if you remove the gauntlets."
      }
    ],
    "levelRequirementReason": "These gauntlets are suitable for any rogue, offering a potent edge in combat regardless of experience level.",
    "vendorReason": "Rogueport is known for its extensive network of black market vendors and this item fits perfectly within their offerings.",
    "shippingDetail": "The gauntlets are shipped via the Void Drifter Relay, a service that ensures secrecy and fast delivery.",
    "usage": {
      "activation": "Bonus action to activate the critical surge effect. Passive until used or interrupted by removing the gauntlets.",
      "duration": "Instantaneous, lasts until used or removed.",
      "endsWhen": "If you are reduced to 0 hit points or remove the gauntlets.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Shadow Fists of the Iron Legion provide a significant combat advantage at a moderate price, making them accessible yet valuable.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:33:30.861048+00:00",
    "aiReviewedAt": "2026-07-23T17:33:30.861048+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_shadow_forged_blade": {
    "id": "rogueport_shadow_forged_blade",
    "name": "Shadowforged Blade of the Fractured Veil",
    "description": "The Shadowforged Blade of the Fractured Veil is a weapon forged from the very echoes of Raventree Manor’s dimensional rifts. Its blade shifts and glows with an eerie, ever-changing shadow that seems to dance before your eyes. It can cut through both flesh and illusion, making it a masterful tool for those who navigate the boundaries between reality and the Feywild. Each strike has a chance to shatter enemy armor, leaving foes weakened by its spectral might.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% damage against illusions",
      "15% chance to shatter enemy armor on hit"
    ],
    "vendor": "rogueport",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Illusion Cutting",
        "rules": "When you deal damage with this weapon, it deals an additional +20% damage if the target is an illusion. This effect lasts until the start of your next turn."
      },
      {
        "title": "Armor Shattering",
        "rules": "Once per short rest, when you hit a creature with this weapon, there is a 15% chance that its armor shatters, granting advantage on attack rolls against it for 1 minute. This effect ends if the target takes damage from any source other than you."
      }
    ],
    "levelRequirementReason": "Requires proficiency in finesse weapons to wield effectively.",
    "vendorReason": "Rogueport is known for its extensive trade routes and unique wares from realms beyond, making it a fitting vendor for this blade.",
    "shippingDetail": "Due to the delicate nature of the blade’s construction, it may take an additional week for shipping through the Void Drifter Relay.",
    "usage": {
      "activation": "Normal weapon attack",
      "duration": "Instantaneous",
      "endsWhen": "The creature takes damage from a source other than you or completes a short rest.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to reflect its unique crafting and the rarity of materials used in its creation.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T17:33:07.037457+00:00",
    "aiReviewedAt": "2026-07-23T17:33:07.037457+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_shadow_fury_rod": {
    "id": "rogueport_shadow_fury_rod",
    "name": "Shadow Fury Rod",
    "description": "The Shadow Fury Rod is a cursed wand crafted from the blackened steel of a moonless night and stolen moonlight, its tip glowing ominously like a dying star. Its wielder can swing it to unleash a disorienting shriek that not only blinds foes momentarily but also drains their arcane power, leaving them weakened and vulnerable. This weapon is perfect for assassins who need to strike unseen and vanish into the night.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Disorients foes",
      "Drains arcane energy"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Disorienting Shriek",
        "rules": "When activated as a bonus action, the Shadow Fury Rod emits a disorienting shriek that blinds all creatures within 10 feet for 2 rounds. Creatures making a successful Wisdom saving throw are not blinded but still take the rod's damage and effect."
      },
      {
        "title": "Arcane Drain",
        "rules": "The shriek also drains arcane energy, dealing an additional 4d6 necrotic damage to creatures with magical resistances or immunity. This effect has a save DC of 15."
      }
    ],
    "levelRequirementReason": "Requires at least third level to control the rod's disorienting and draining powers effectively.",
    "vendorReason": "Rogueport is known for its network of thieves and assassins, making it the perfect vendor for a cursed weapon like this.",
    "shippingDetail": "The rod arrives wrapped in shadow cloth to protect its curse from prying eyes.",
    "usage": {
      "activation": "Bonus action to unleash the shriek and drain arcane energy.",
      "duration": "Instantaneous, lasting for 2 rounds after activation.",
      "endsWhen": "When the target creature succeeds on a Wisdom saving throw or is no longer within range.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The rod's unique cursed properties and its ability to drain arcane energy justify this balanced price in XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-24T23:31:10.937391+00:00",
    "aiReviewedAt": "2026-07-24T23:31:10.937391+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_shadow_ink": {
    "id": "rogueport_shadow_ink",
    "name": "Shadow Ink Vial",
    "description": "The Shadow Ink Vial exudes a dark, almost sentient ink that can be used to forge contracts or erase evidence without leaving behind any physical trace. When applied, it reacts with the surface to vanish into the paper or wall, leaving not even the faintest smudge behind. In moonlight, the vial glows faintly, revealing hidden messages left by its mysterious ink, a trait that could be both a blessing and a curse for those who wield it.",
    "price": 1000,
    "icon": "🖋",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Eradicates Inked Evidence",
      "Reveals Hidden Messages"
    ],
    "vendor": "rogueport",
    "shippedBy": "Courier of Shadows",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Eradicates Inked Evidence",
        "rules": "As an action, the user can apply the ink to any surface that has been recently written or drawn upon. The ink reacts with the existing ink, erasing it completely and leaving no trace of what was there before. This effect lasts until the ink is dry, which takes 30 seconds."
      },
      {
        "title": "Reveals Hidden Messages",
        "rules": "When exposed to moonlight, the vial emits a faint glow that reveals any hidden messages or symbols written in ink on surfaces within reach. The user can only read one message per night and must wait 1 hour before using this ability again."
      }
    ],
    "levelRequirementReason": "Even an untrained individual can use the vial to forge contracts or erase evidence, making it accessible to all levels.",
    "vendorReason": "Rogueport is known for its collection of rare and illicit items useful in forgery and espionage, and this vial fits perfectly into their inventory.",
    "shippingDetail": "The ink must be kept cool during transit to prevent premature drying. The Courier of Shadows ensures safe delivery through back alleys and hidden routes.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (30 seconds for eradication)",
      "endsWhen": "The ink dries or the user is caught in the act, whichever comes first",
      "charges": "Unlimited"
    },
    "priceReason": "The vial's rare ink and unique properties make it a valuable tool for anyone involved in forgery or espionage.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-24T23:31:49.336370+00:00",
    "aiReviewedAt": "2026-07-24T23:31:49.336370+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_shadow_scarf": {
    "id": "rogueport_shadow_scarf",
    "name": "Shadow Scarf of the Silent Hour",
    "description": "The Shadow Scarf of the Silent Hour is a silk scarf woven from stolen ink and whispered secrets, its dark weave shimmering faintly under moonlight. As you wear it, ambient noise fades into silence in crowded alleys, masking your presence with the very shadows that cloak you. During stealth missions at night, it grants a slight chance to evade patrol drones for 30 seconds, allowing you to slip past unseen and unheard.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stealth +20% during night hours",
      "10% evasion chance against patrol drones"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Nighttime Stealth Boost",
        "rules": "While wearing the scarf, your Stealth checks are made with advantage when it is nighttime. This effect lasts until the next sunrise."
      },
      {
        "title": "Drones Evasion Chance",
        "rules": "Once per day, you may attempt to evade a patrol drone's detection within 30 feet for 30 seconds. On a successful Dexterity (Stealth) check with a DC of 15, the drone fails to detect you."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Stealth to fully utilize its stealth benefits effectively.",
    "vendorReason": "Rogueport specializes in equipment that aids in covert operations and espionage, making this scarf a natural addition to their inventory.",
    "shippingDetail": "Delivered through the Shadow Veil, ensuring swift and secure transport from the depths of the Undercity.",
    "usage": {
      "activation": "Instantaneous activation by simply wearing it; no action required.",
      "duration": "Lasts until next sunrise or destroyed.",
      "endsWhen": "Destroyed if exposed to direct sunlight for more than a minute.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at this price point due to its niche utility in stealth and evasion, making it a valuable tool for rogue classes.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:33:57.462769+00:00",
    "aiReviewedAt": "2026-07-23T17:33:57.462769+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_shadow_scribe": {
    "id": "rogueport_shadow_scribe",
    "name": "Shadow Scribe Inkwell",
    "description": "The Shadow Scribe Inkwell is a vial of inky essence forged from the shadows of forgotten alleys. This ink allows its wielder to leave faint, ghostly signatures on walls or surfaces, perfect for marking hidden paths or bribing guards with invisible notes. The ink's touch is as cold and elusive as the night itself; it can be used to write on walls, doors, or glass without leaving marks. Beware: some ink can leave trails that follow the user’s soul, a haunting reminder of their passage.",
    "price": 1000,
    "icon": "🖋",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Invisible Ink Trail",
      "Illusionary Presence"
    ],
    "vendor": "rogueport",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Invisible Ink Trail",
        "rules": "When used to write on a living target, the ink leaves behind an invisible trail that follows the user for up to 30 seconds. The trail is only visible under specific conditions and can be detected with a successful DC 15 Perception check."
      },
      {
        "title": "Illusionary Presence",
        "rules": "If the ink touches a living target, it imparts a temporary illusion of the user’s presence that lasts for up to 1 minute. This effect requires no action and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Requires at least second-level proficiency in Stealth or Deception to effectively use this item.",
    "vendorReason": "Rogueport is known for its connections with shadowy figures, making it the ideal vendor for such an item.",
    "shippingDetail": "Delivery via Boo Spectral Mail is swift but eerie; expect a delivery that feels like you're being watched.",
    "usage": {
      "activation": "Uses an action to apply ink and write or touch the target.",
      "duration": "The invisible trail lasts for up to 30 seconds, while the illusionary presence lasts for up to 1 minute.",
      "endsWhen": "The effects end when the user moves out of range or if a successful DC 15 Wisdom (Perception) check is made by an observer.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced price considering its unique and versatile effects, requiring a mix of stealth and creativity to use effectively.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:34:09.275225+00:00",
    "aiReviewedAt": "2026-07-23T17:34:09.275225+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_shadow_siphon": {
    "id": "rogueport_shadow_siphon",
    "name": "Shadow Siphon Vial",
    "description": "The Shadow Siphon Vial is a vial of liquid darkness that drips like ink, seeping into the very essence of its target. When used, it drains a foe's aura, leaving them vulnerable to physical attacks for three rounds. The vial also enhances the wielder’s strikes, granting +10% chance to hit with melee or ranged attacks for one round. A potent brew indeed, it can cause temporary blindness in an enemy attempting to cast magic spells.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Aura Drain",
      "Enhanced Strikes"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Aura Drain",
        "rules": "When the vial is used, it drains 20% of a target’s aura for three rounds. The target must make a DC 15 Constitution saving throw or become temporarily blinded until the end of their next turn."
      },
      {
        "title": "Enhanced Strikes",
        "rules": "The user gains +10% chance to hit with melee and ranged attacks for one round upon using the vial. This effect is cumulative if used in combination with other bonuses to attack rolls, up to a maximum of +25%. This enhancement lasts until the end of the user's next turn."
      }
    ],
    "levelRequirementReason": "Requires at least third level to effectively utilize the vial’s potent effects without being overwhelmed.",
    "vendorReason": "Rogueport is known for its extensive network of spies and rogues, making it a prime location for such a covert item.",
    "shippingDetail": "Delivered with utmost discretion, ensuring the package arrives without detection.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; duration of each aura drain lasts for three rounds, and enhanced strikes last until the end of the user’s next turn.",
      "endsWhen": "The effects are exhausted after their respective durations or if the vial is used again before its current effect ends.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price considering the item's unique and potent effects, requiring precise timing for maximum effectiveness.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:34:27.014221+00:00",
    "aiReviewedAt": "2026-07-23T17:34:27.014221+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_shadow_suit": {
    "id": "rogueport_shadow_suit",
    "name": "Shadow Suit",
    "description": "The Shadow Suit is a sleek ensemble crafted from the stolen night-dreams of the city and rare black-market silk. Its weave shimmers with an ethereal glow that only deepens in dim light, making its wearer nearly invisible to all but the keenest eyes. However, each step taken while cloaked drains stamina at a rate of 10% per second, leaving the user fatigued until they rest or remove it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Shadow Cloak",
      "Stealthy Strike"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shadow Cloak",
        "rules": "The wearer becomes invisible in dim light and darkness. This effect lasts for 10 seconds, after which the user must rest to regain the ability to use this feature again."
      },
      {
        "title": "Stealthy Strike",
        "rules": "While wearing the Shadow Suit, the wielder gains +50% bonus to their stealth checks against guards. This effect is active for as long as they are moving and not engaging in combat."
      }
    ],
    "levelRequirementReason": "The Shadow Suit's invisibility requires a basic understanding of stealth techniques, suitable for even the most novice rogues.",
    "vendorReason": "Rogueport specializes in gear and equipment that aids in the art of thievery and espionage, making it an ideal vendor for the Shadow Suit.",
    "shippingDetail": "The suit is delivered with a special delivery notice to alert the recipient of its arrival.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds or until the wearer moves more than 30 feet in a turn",
      "endsWhen": "The invisibility ends, and the user must rest before using it again. Moving too far expends the effect.",
      "charges": "Unlimited"
    },
    "priceReason": "The Shadow Suit's rarity and unique construction, combined with its limited duration and stamina drain, justify this moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:34:21.719220+00:00",
    "aiReviewedAt": "2026-07-23T17:34:21.719220+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_shadow_tape": {
    "id": "rogueport_shadow_tape",
    "name": "Shadow Tape",
    "description": "Shadow Tape, a slimy, self-repairing adhesive that glows faintly in the dark, is crafted from enchanted silk and ink. It allows you to slip past surveillance undetected by erasing all digital or physical traces of your presence. Activating it reveals hidden passages or secret rooms, guiding you through concealed pathways. The tape's glow illuminates nearby allies or foes for 30 seconds, providing critical tactical insight in the shadows.",
    "price": 1000,
    "icon": "🖋",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Erases All Traces",
      "Reveals Hidden Passages"
    ],
    "vendor": "rogueport",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Erase All Traces",
        "rules": "As a bonus action, apply Shadow Tape to a surface. This erases all digital or physical traces of your presence within the area for 1 minute. You can use this effect once per long rest."
      },
      {
        "title": "Reveal Hidden Passages",
        "rules": "Activate Shadow Tape by touching it to a wall or floor, causing it to glow faintly and reveal any hidden passages or secret rooms in a 10-foot radius. This effect lasts for 1 minute and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners who wish to enhance their stealth and exploration abilities.",
    "vendorReason": "Rogueport specializes in items that assist adventurers in navigating treacherous terrains and outsmarting enemies.",
    "shippingDetail": "Ships via Koopa Express, ensuring timely delivery to your doorstep.",
    "usage": {
      "activation": "Bonus action for 'Erase All Traces'; Standard action for 'Reveal Hidden Passages'",
      "duration": "1 minute per use; ends when the time expires or you activate a second effect",
      "endsWhen": "The duration expires after 1 minute, or another Shadow Tape effect is activated",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to provide significant utility without overpowered effects.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-24T23:31:43.945385+00:00",
    "aiReviewedAt": "2026-07-24T23:31:43.945385+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_shadow_tapestry": {
    "id": "rogueport_shadow_tapestry",
    "name": "Shadow Tapestry of the Broken Veil",
    "description": "The Shadow Tapestry of the Broken Veil is a dark, intricate weave of shadow threads that shimmer faintly under moonlight. When donned, it warps reality around you, blurring your form into the fabric of night itself. Its woven patterns seem to shift with your emotions; fear and rage cause the tapestry's shadows to writhe like living creatures. It is said to have been crafted by dark-hearted weavers in the depths of forgotten realms, and its glow intensifies when emotions run high.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Shadow Concealment",
      "Emotionally Sensitive"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shadow Concealment",
        "rules": "Activates as a bonus action. For the next 10 seconds, you are completely hidden from normal sight and have advantage on Dexterity (Stealth) checks while moving. If an enemy is within 5 feet of you and has seen your form before, there is a 20% chance that they will be overcome with a hallucinatory vision, forcing them to make a DC 13 Wisdom saving throw or become blinded for 1 round."
      },
      {
        "title": "Emotionally Sensitive",
        "rules": "The tapestry's glow increases in intensity when fear or rage is present within 50 feet. When this happens, you gain temporary hit points equal to your level + your Dexterity modifier (maximum of twice your level) for the duration of the encounter."
      }
    ],
    "levelRequirementReason": "This item requires a low-level character due to its versatile utility and stealth capabilities.",
    "vendorReason": "Rogueport specializes in items that aid in espionage and covert operations, making this tapestry an ideal addition to their inventory.",
    "shippingDetail": "This item is delivered through shadowy means, ensuring secrecy during transport. The tapestry's glow dims significantly for the duration of shipment, but it fully regains its light upon arrival.",
    "usage": {
      "activation": "Bonus action to activate and deactivate.",
      "duration": "10 seconds or until expended.",
      "endsWhen": "The wearer is incapacitated, killed, or the tapestry is removed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The item's versatile utility and unique emotional sensitivity make it a valuable asset for any rogue, justifying its moderate price in XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:34:39.077702+00:00",
    "aiReviewedAt": "2026-07-23T17:34:39.077702+00:00",
    "aiReviewVersion": 1
  }
};
