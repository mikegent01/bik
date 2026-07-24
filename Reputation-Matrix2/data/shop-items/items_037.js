// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_037 = {
  "rogueport_shadow_tongue": {
    "id": "rogueport_shadow_tongue",
    "name": "Shadow Tongue",
    "description": "A cursed tongue that whispers secrets of the underworld. When worn, it reveals hidden truths and amplifies deception. Ideal for blackmail or seduction.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals hidden truths when spoken to enemies",
      "Grants +20% chance to succeed in deception checks",
      "Causes enemies to fear the wearer’s voice"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "rogueport_shadow_torch": {
    "id": "rogueport_shadow_torch",
    "name": "Shadow Torch",
    "description": "A flickering flame that burns only in the dark, illuminating areas without revealing the user’s presence. Perfect for infiltration and ambush.",
    "price": 4500,
    "icon": "🌑",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Illuminates 10 meters in darkness for 30 seconds",
      "Leaves no trace when extinguished",
      "Grants +2 stealth rating while active"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 7
  },
  "rogueport_shadowed_soul_amber": {
    "id": "rogueport_shadowed_soul_amber",
    "name": "Shadowed Soul Amber",
    "description": "The Shadowed Soul Amber glows faintly, its amber surface etched with shadows that dance like fleeting spirits. This gemstone is said to be crafted from the essence of the Veil of Lost Souls, capturing a fragment of the Shadowfell’s dark magic. When worn, it grants the bearer temporary stealth in shadowy environs and immortality to fear effects for a brief time, allowing them to walk unafraid into the heart of darkness.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Stealth in Shadows",
      "Fearlessness"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shadowfax Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Stealth in Shadows",
        "rules": "When worn within shadowy areas, the wearer gains advantage on Dexterity (Stealth) checks for 1 minute. This effect is interrupted if they leave a shadowed area or are exposed to direct sunlight."
      },
      {
        "title": "Fearlessness",
        "rules": "The wearer becomes immune to fear effects and other similar conditions for 10 seconds upon activation. This immunity ends when the duration expires, and the user must succeed on a DC 15 Wisdom saving throw or become frightened for 1 minute."
      }
    ],
    "levelRequirementReason": "The gem's dark magic requires a certain degree of discipline and experience to wield without mishap.",
    "vendorReason": "Rogueport is known for its trade in rare and esoteric goods, including items that bridge the gap between reality and the Shadowfell.",
    "shippingDetail": "The gem is carefully packed to prevent exposure to direct sunlight during transit. It must be kept in a shadowed container until activated.",
    "usage": {
      "activation": "Standard action",
      "duration": "1 minute or until the wearer leaves a shadowy area, whichever ends first",
      "endsWhen": "Leaving a shadowy area or being exposed to direct sunlight",
      "charges": "Unlimited"
    },
    "priceReason": "The gem's crafting requires rare Shadowfell essence and precise dark alchemy, balancing its powerful effects with a fair market value.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:35:22.056207+00:00",
    "aiReviewedAt": "2026-07-23T17:35:22.056207+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_shadowed_talon": {
    "id": "rogueport_shadowed_talon",
    "name": "Shadowed Talon Dagger",
    "description": "The Shadowed Talon Dagger, forged from a blend of stolen shadowsteel and the whispers of ancient labyrinths, glows softly in the dark, slicing through illusions and dispelling fear. Its blade shimmers with an eerie luminescence that pierces magical defenses, leaving foes reeling under its psychic sting. When wielded within the Shadowfell, it deals +10 extra damage to enemies and grants its bearer a +20% evasion bonus against all magical attacks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Illusion Piercing",
      "Psychic Sting"
    ],
    "vendor": "rogueport",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Illusion Piercing",
        "rules": "When wielded in the Shadowfell, this dagger deals an additional 10 points of damage to illusory targets. This effect persists for the duration of any combat encounter and is exhausted upon entering non-Shadowfell terrain."
      },
      {
        "title": "Psychic Sting",
        "rules": "Whenever a target within 5 feet casts a spell, the wielder can choose to expend one charge to deal 1d4 points of psychic damage. This effect has no save DC and cannot be used more than once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Shadowed Talon Dagger's unique properties require a proficient rogue with at least three levels to wield it effectively.",
    "vendorReason": "Rogueport, known for its shady dealings and arcane wares, is the only vendor willing to stock this dagger forged from forbidden materials.",
    "shippingDetail": "Ships via Boo Spectral Mail, ensuring swift delivery with a chance of misdelivery due to spectral interference.",
    "usage": {
      "activation": "Instantaneous action to use within the Shadowfell or when an enemy casts a spell.",
      "duration": "Until end of combat encounter in the Shadowfell; single-use per short/long rest for Psychic Sting.",
      "endsWhen": "Exhausted upon leaving the Shadowfell or after one use per rest for Psychic Sting.",
      "charges": "Unlimited, recharged at dawn."
    },
    "priceReason": "The unique properties of shadowsteel and its arcane forging justify a price slightly above average but still within reach for a seasoned rogue.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:35:25.426171+00:00",
    "aiReviewedAt": "2026-07-23T17:35:25.426171+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_shadowwhisper_ambassador": {
    "id": "rogueport_shadowwhisper_ambassador",
    "name": "Shadowwhisper Ambassador",
    "description": "The Shadowwhisper Ambassador is a sleek, obsidian-tipped gauntlet that whispers secrets of the Feywild to its wearer. Crafted from the bones of ancient fae and enchanted with shadow magic, this gauntlet grants the wearer unparalleled stealth in darkened or enchanted zones. It can reveal hidden paths or traps within 30 feet, allowing for strategic evasion. The gauntlet also has a subtle enchantment that confuses enemies during stealth encounters, granting a 5% chance to disarm them or cause confusion.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+20% Stealth in Shadowed or Enchanted Areas",
      "Reveal Hidden Paths and Traps"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Stealth (+20%)",
        "rules": "While wearing the Shadowwhisper Ambassador, you gain a +20 bonus to Dexterity (Stealth) checks in shadowed or enchanted areas. This effect lasts for 1 hour per use and requires no action."
      },
      {
        "title": "Reveal Hidden Paths and Traps",
        "rules": "As an action, you can use the Shadowwhisper Ambassador to reveal hidden paths or traps within a 30-foot radius. You can do this once every long rest."
      }
    ],
    "levelRequirementReason": "This gauntlet is designed for its subtle magic and requires no high-level proficiency to wield.",
    "vendorReason": "Rogueport, known for its expertise in espionage gear, offers this unique item to their customers seeking the edge in covert operations.",
    "shippingDetail": "Shipped via Lakitu Drones, ensuring secure and fast delivery with a one-day turnaround time.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "1 hour per use for Enhanced Stealth; once every long rest for Revealing Hidden Paths and Traps",
      "endsWhen": "The duration expires or the gauntlet is removed from your hand",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects its rare enchantment, unique crafting materials, and limited availability.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T17:35:50.318651+00:00",
    "aiReviewedAt": "2026-07-23T17:35:50.318651+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_silence_blood": {
    "id": "rogueport_silence_blood",
    "name": "Silence Blood",
    "description": "Silence Blood is a vial of dark, crimson liquid that whispers secrets of forgotten courts. When consumed in combat, it casts an eerie silence over your surroundings for 10 minutes, muffling all noise and echoes. The effects are potent but fleeting; once the silence ends, you remain vulnerable to sudden sounds that could give away your position. This cursed vial leaves a faint, metallic sheen on your skin, making you appear suspicious if discovered.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Silence Surroundings",
      "Temporary Vulnerability"
    ],
    "vendor": "rogueport",
    "shippedBy": "Courier of Shadows",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Silence Surroundings",
        "rules": "When consumed as an action, this vial casts a 30-foot radius cone of silence that muffles all sound for 10 minutes. This effect has no save DC and can be used once per long rest."
      },
      {
        "title": "Temporary Vulnerability",
        "rules": "For the duration of its effects, you are vulnerable to any noise-based attacks or spells targeting auditory senses. If you take damage from an auditory source during this time, you must make a DC 14 Constitution saving throw or be stunned until the start of your next turn."
      }
    ],
    "levelRequirementReason": "Requires basic combat experience and subtlety to wield its effects without drawing attention.",
    "vendorReason": "Rogueport specializes in items that blur the line between stealth and treachery, making Silence Blood a natural fit for their inventory.",
    "shippingDetail": "Delivered by the Courier of Shadows, this vial arrives under the cover of darkness with no traceable delivery path.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "10 minutes",
      "endsWhen": "Ends when its duration expires or you take damage from an auditory source during that time",
      "charges": "One charge per use, recharged after a long rest"
    },
    "priceReason": "Balanced as a rare item with potent stealth capabilities but at a moderate level requirement.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-23T17:35:54.509577+00:00",
    "aiReviewedAt": "2026-07-23T17:35:54.509577+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_silence_bottle": {
    "id": "rogueport_silence_bottle",
    "name": "Silence Bottle",
    "description": "The Silence Bottle holds a fragment of a fallen priestess’s essence, sealed within a glass vial. When uncorked and consumed, it creates an impenetrable silence around the wielder for 10 seconds, muffling all sounds cast by magic. The air itself seems to hold still as arcane whispers are silenced, granting the user +2 to Stealth checks for two turns. In close combat, nearby enemies’ spellcasting is reduced by 50% for three turns, disrupting their incantations and gestures.",
    "price": 1000,
    "icon": "🧪",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Silences magical sounds",
      "Enhances Stealth checks"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silencing Magic",
        "rules": "When consumed, the Silence Bottle creates a zone of silence around the user for 10 seconds. All sounds cast by magic within this area are suppressed. This effect has a radius of 5 feet and lasts until its duration ends or the bottle is used again."
      },
      {
        "title": "Stealth Enhancement",
        "rules": "+2 to Stealth checks for two turns after consuming the Silence Bottle. No save DC required; the effect is purely situational, enhancing the user’s ability to move unseen."
      }
    ],
    "levelRequirementReason": "This item requires minimal preparation and can be used by lower-level characters to gain an advantage in stealthy situations.",
    "vendorReason": "Rogueport is known for its extensive trade network, including exotic magical items that aid in espionage and thievery.",
    "shippingDetail": "The bottle must be delivered via a trusted courier to ensure it remains intact and potent.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "10 seconds, per use",
      "endsWhen": "Duration ends or the bottle is used again",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Silence Bottle’s rarity and unique magical properties justify its price; it provides a significant tactical advantage at minimal cost.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T17:37:03.473327+00:00",
    "aiReviewedAt": "2026-07-23T17:37:03.473327+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_silence_gear": {
    "id": "rogueport_silence_gear",
    "name": "Silence Gear of the Whispering Cartel",
    "description": "The Silence Gear of the Whispering Cartel is a pair of supple leather gloves crafted from the hides of whispering serpents. These gloves muffle your movements and whispers, making you nearly invisible to detection. The serpent's skin imbues them with an eerie yet effective silence that can turn even the noisiest environment into a silent passage. When worn, enemies cannot hear you for 30 seconds, and your stealth becomes as quiet as a whispering breeze.",
    "category": "equipment",
    "price": 1000,
    "icon": "🕵",
    "stock": 0,
    "rarity": "epic",
    "effects": [
      "Silence Detection",
      "Whisper Stealth"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Silence Detection",
        "rules": "While wearing the Silence Gear, enemies cannot hear you for 30 seconds. This effect does not grant invisibility but significantly reduces your noise footprint. You can activate this ability as a bonus action."
      },
      {
        "title": "Whisper Stealth",
        "rules": "For each hour of use, you gain a +5 bonus to Dexterity (Stealth) checks. This effect is cumulative and does not reset until 24 hours have passed since the last use."
      }
    ],
    "levelRequirementReason": "Requires level 7 to ensure proficiency in stealth and dexterity.",
    "vendorReason": "Rogueport is known for its connections with undercity thieves, making them the perfect vendor for this gear.",
    "shippingDetail": "Delivered by Shy Guy Smugglers within two days of purchase.",
    "usage": {
      "activation": "Bonus action to activate; activates once per long rest.",
      "duration": "30 seconds",
      "endsWhen": "The duration ends when you take damage or when the next long rest occurs.",
      "charges": "Unlimited, but only one use per long rest."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its epic rarity and unique stealth benefits.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T17:36:10.550838+00:00",
    "aiReviewedAt": "2026-07-23T17:36:10.550838+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_silence_mouth": {
    "id": "rogueport_silence_mouth",
    "name": "Silence Mouth",
    "description": "The Silence Mouth is a cursed mask crafted from blackened leather and adorned with silver runes. It muffles all vocalizations, rendering the wearer silent for exactly one minute unless they speak in hushed tones. This artifact was once used by a notorious guild to outmaneuver their enemies without a sound. The mask prevents enemy shouts or screams from triggering traps but is rendered useless if the wearer speaks louder than a whisper.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Silence Vocalizations",
      "Trap Disarmament"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silence Vocalizations",
        "rules": "Activates as an action, muffling all vocalizations for one minute. Ends if the wearer speaks above a whisper or at the end of their next turn."
      },
      {
        "title": "Trap Disarmament",
        "rules": "Prevents enemy shouts and screams from triggering traps within 10 feet of the wearer. This effect lasts until the wearer speaks louder than a whisper or for one minute, whichever comes first."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners to use in its intended role without requiring high-level expertise.",
    "vendorReason": "Rogueport specializes in crafting and selling equipment that aids in silent operations, making the Silence Mouth a fitting addition to their inventory.",
    "shippingDetail": "Delivered with a cloak of invisibility for an hour upon arrival.",
    "usage": {
      "activation": "Action",
      "duration": "One minute or until wearer speaks above a whisper",
      "endsWhen": "Wearer speaks louder than a whisper or at the end of their next turn",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects its cursed nature and utility in silent combat scenarios.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:36:18.222948+00:00",
    "aiReviewedAt": "2026-07-23T17:36:18.222948+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_silence_pearl": {
    "id": "rogueport_silence_pearl",
    "name": "Silence Pearl of the Whispering Deep",
    "description": "The Silence Pearl of the Whispering Deep hums softly like a forgotten melody, its surface etched with ancient runes that glow faintly in the dark. When activated, it mutes sound around you, creating an impenetrable silence that can fool even the most perceptive ears for several moments. It is said to have been crafted by deep-sea artisans from the shells of long-dead creatures, imbuing it with the whispers of the ocean's forgotten lore.",
    "price": 1000,
    "icon": "🎵",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Mutes Sound",
      "Enhances Stealth"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mute Sound",
        "rules": "When activated as a bonus action, the Silence Pearl creates an area of silence around you that lasts for 10 seconds. Within this duration, all sound within a 5-foot radius is suppressed. This effect has no save DC and does not expend charges."
      },
      {
        "title": "Enhance Stealth",
        "rules": "For the first 5 seconds after activating the Silence Pearl, your Stealth checks are made at advantage. Additionally, creatures making Perception checks to detect you have disadvantage during this time. This effect has no save DC and does not expend charges."
      }
    ],
    "levelRequirementReason": "This item is crafted for adventurers of all levels, but its effects are most useful in stealth-oriented scenarios.",
    "vendorReason": "Rogueport specializes in items that enhance the skills and abilities of their patrons, making this pearl a perfect addition to their inventory.",
    "shippingDetail": "This item is shipped with Pipe Express for expedited delivery, ensuring it arrives at your doorstep without delay.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "10 seconds and 5 seconds respectively for each effect",
      "endsWhen": "The duration of both effects ends when their respective time periods are up; no save DC is required.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item provides significant utility in stealth and combat, justifying its moderate price tag.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T17:36:49.693163+00:00",
    "aiReviewedAt": "2026-07-23T17:36:49.693163+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_silence_satchel": {
    "id": "rogueport_silence_satchel",
    "name": "Silence Satchel",
    "description": "The Silence Satchel is a sleek, matte-black duffel crafted from enchanted leather. It whispers with a faint glow when activated, creating an impenetrable sound barrier around its wielder. The bag’s core, forged in the heart of ancient forges, amplifies this power, rendering footsteps and whispers undetectable to foes within 10 feet. A true rogue's companion, it can also be thrown to create a temporary soundproof zone covering a 3x3 grid area around its thrower.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎧",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Silent Footsteps",
      "Reduced Detection"
    ],
    "vendor": "rogueport",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Silent Footsteps",
        "rules": "The wielder and any creatures within 10 feet of them are rendered silent for 30 seconds. This effect creates a temporary soundproof zone around the user, masking all ambient noise and movements. The satchel can be thrown to create this zone in a 3x3 grid area centered on where it lands."
      },
      {
        "title": "Reduced Detection",
        "rules": "Enemies within the 10-foot radius have their passive Perception checks for detecting hidden or stealthy creatures reduced by 4. This effect lasts until the user moves more than 20 feet away from the satchel’s position."
      }
    ],
    "levelRequirementReason": "The Silence Satchel requires a minimum level of 3 to wield, ensuring that only experienced rogues can harness its complex magic.",
    "vendorReason": "Rogueport is renowned for supplying the finest equipment to seasoned stealth operatives and mercenaries seeking to enhance their capabilities in covert missions.",
    "shippingDetail": "The Silence Satchel must be shipped via Koopa Postal’s express courier service, ensuring it reaches its destination securely and on time.",
    "usage": {
      "activation": "A bonus action to activate the soundproofing effect or a thrown action to deploy the grid zone.",
      "duration": "30 seconds for silent footsteps; ends when the user moves more than 20 feet away from the satchel’s position in the case of reduced detection.",
      "endsWhen": "The effect is interrupted if the user moves beyond the specified range or distance.",
      "charges": "Unlimited, as long as the user remains within the soundproof zone."
    },
    "priceReason": "The Silence Satchel’s balance ensures it provides a strategic advantage without overshadowing other party members, making its cost of 1000 XP fair and reasonable.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T17:36:28.087321+00:00",
    "aiReviewedAt": "2026-07-23T17:36:28.087321+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_silence_scarf": {
    "id": "rogueport_silence_scarf",
    "name": "Silence Scarf",
    "description": "The Silence Scarf is a meticulously woven fabric of enchanted silks, spun from threads that whisper secrets to the wind itself. Its weave dampens all ambient sound within a 5-foot radius for up to 10 seconds, allowing its wearer to slip past guards unseen and unheard. The scarf’s subtle patterns seem to absorb noise, making every nearby creature feel suddenly deafened. Enemies who attempt to speak while in proximity suffer from a momentary disorientation, halting their speech mid-sentence.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎭",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Silences ambient sound within a 5-foot radius",
      "Disorients enemies attempting to speak"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sound Suppression",
        "rules": "Activates as a bonus action. The scarf silences all ambient sounds in a 5-foot radius for up to 10 seconds, granting the wearer advantage on Dexterity (Stealth) checks made during this time. If worn while moving, it reduces the DC of such Stealth checks by 2."
      },
      {
        "title": "Speech Disruption",
        "rules": "Enemies within a 5-foot radius who attempt to speak are rendered momentarily speechless for up to 10 seconds. Creatures can make a Wisdom saving throw (DC 13) to resist. On a successful save, they remain unaffected by this effect."
      }
    ],
    "levelRequirementReason": "The scarf's enchantment is subtle but effective, requiring only a basic understanding of magic.",
    "vendorReason": "Rogueport specializes in gear that enhances the capabilities of its patrons for infiltration and stealth operations.",
    "shippingDetail": "Delivered swiftly by Lakitu drones, ensuring the scarf arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action to activate; can be used once per short or long rest",
      "duration": "Up to 10 seconds per activation",
      "endsWhen": "The duration ends when the user speaks or moves beyond a 5-foot radius from the scarf's location",
      "charges": "Unlimited uses, resets after a short or long rest"
    },
    "priceReason": "Balanced as a rare item with limited utility but significant tactical advantage for infiltration.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:36:47.820214+00:00",
    "aiReviewedAt": "2026-07-23T17:36:47.820214+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_silence_spray": {
    "id": "rogueport_silence_spray",
    "name": "Silence Spray of the Whispering Viper",
    "description": "The Silence Spray of the Whispering Viper is a sleek, obsidian spray bottle adorned with shimmering scales that seem to vibrate in anticipation. When activated, it releases a fine mist that mutes all ambient sounds for ten seconds, allowing you to slip away unnoticed or eavesdrop on hushed conversations. The faint afterglow left behind is visible only to enemies within 30 feet, revealing your position with an eerie glow. This spray is the perfect tool for rogues seeking to blend into their surroundings and avoid unwanted attention.",
    "price": 1000,
    "icon": "🧪",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Silence: Mutes ambient sound",
      "Stealth Aura"
    ],
    "vendor": "rogueport",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Silence",
        "rules": "When activated, this spray mutes all ambient sounds within a radius of 10 feet for ten seconds. This effect grants advantage on Dexterity (Stealth) checks made during its duration and ends if the user moves more than 5 feet or attacks."
      },
      {
        "title": "Stealth Aura",
        "rules": "For the duration of the Silence effect, you have a +10% chance to successfully use the Stealth skill. This aura lasts for ten seconds but is dispelled immediately upon taking damage, attacking, or moving more than 5 feet."
      }
    ],
    "levelRequirementReason": "This spray requires at least second-level proficiency in Stealth to effectively utilize its full potential.",
    "vendorReason": "Rogueport is a notorious hub for espionage and stealth equipment, making it the perfect vendor for this specialized tool.",
    "shippingDetail": "The spray arrives fully charged but requires recharging after each use by spending ten minutes in a quiet environment.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds",
      "endsWhen": "You move more than 5 feet, take damage, or attack",
      "charges": "Unlimited"
    },
    "priceReason": "The spray's balanced price reflects its utility and the time required to recharge it after each use.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:36:55.531528+00:00",
    "aiReviewedAt": "2026-07-23T17:36:55.531528+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_silence_wristband": {
    "id": "rogueport_silence_wristband",
    "name": "Silence Wristband",
    "description": "The Silence Wristband is a sleek, blackened alloy band that instantly muffles all ambient noise within a five-meter radius. Ideal for infiltrating secure zones or avoiding detection by audio-based surveillance systems, it causes a brief disorientation in nearby enemies who can still see you clearly but are momentarily deaf to the world around them. The effect fades after 15 minutes of use, leaving you to navigate the silence with heightened senses.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Mutes Ambient Sound",
      "Causes Enemy Disorientation"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mutes Ambient Sound",
        "rules": "Activates as a bonus action. Mutes all ambient sound within a five-meter radius for 15 minutes, reducing the effective range of any audio-based detection by half. Ends when the wearer removes or damages the wristband."
      },
      {
        "title": "Causes Enemy Disorientation",
        "rules": "Enemies within ten feet of the wearer who hear the silence must make a DC 14 Constitution saving throw or become stunned for one round, unable to take actions but still aware of their surroundings. This effect only occurs once per encounter."
      }
    ],
    "levelRequirementReason": "The Silence Wristband requires no specific level as it is a versatile tool for any rogue or investigator.",
    "vendorReason": "Rogueport specializes in gear that enhances the capabilities of spies and infiltrators, making this wristband a natural addition to their product line.",
    "shippingDetail": "Ships via Lakitu Drone Express, ensuring timely delivery within three days from the Rogueport Warehouse.",
    "usage": {
      "activation": "Bonus action to activate and remove.",
      "duration": "15 minutes per use.",
      "endsWhen": "Wristband is removed or damaged.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Silence Wristband offers a powerful utility for spies and rogues, enhancing their ability to move undetected while providing a unique tactical advantage. Its rarity and utility justify its fair value of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:37:04.724081+00:00",
    "aiReviewedAt": "2026-07-23T17:37:04.724081+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_silencer_gel": {
    "id": "rogueport_silencer_gel",
    "name": "Silent Gel of the Whispering Vault",
    "description": "The Silent Gel of the Whispering Vault is a thick, pitch-black viscous gel that coats any weapon or armor you apply it to, absorbing sound waves and dampening echoes in the process. Upon activation, your strikes become nearly silent, allowing for precise, stealthy combat without giving away your position. It's ideal for assassins and spies who must move unseen through treacherous environments, ensuring that their presence is as quiet as a whisper.",
    "price": 1000,
    "icon": "🧪",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Sound Suppression",
      "Stealth Enhancement"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sound Suppression",
        "rules": "When applied to a weapon or armor, the gel reduces the noise of your attacks by 75%, making them almost silent. This effect lasts for 1 minute and can be activated as a bonus action."
      },
      {
        "title": "Stealth Enhancement",
        "rules": "For each use, you gain a +10% bonus to Stealth checks that last until the end of your next short or long rest. The gel provides a continuous enhancement for 30 seconds upon application."
      }
    ],
    "levelRequirementReason": "The gel's effects are subtle but effective, suitable for lower-level characters who need to remain unseen.",
    "vendorReason": "Rogueport specializes in gear and tools that enhance the capabilities of assassins and spies, making it a natural fit for this item.",
    "shippingDetail": "Ships via Pipe Express within 24 hours with next-day delivery to major cities.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute or until the end of your next short or long rest, whichever comes first",
      "endsWhen": "The effect ends when you stop using it or after one minute, whichever is sooner. It can be reactivated once per long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, the gel offers a significant stealth and sound suppression advantage without breaking game balance.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:37:17.778021+00:00",
    "aiReviewedAt": "2026-07-23T17:37:17.778021+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_silent_siren": {
    "id": "rogueport_silent_siren",
    "name": "Silent Siren",
    "description": "The Silent Siren is a delicate, whispering device crafted from enameled steel and adorned with arcane runes. When activated, it muffles all footstep sounds within a ten-meter radius, allowing you to slip past even the most vigilant sentries. Its enchantments also grant a +2 bonus on Stealth checks, making your movements nearly invisible. The siren's power recharges upon connecting to a nearby ley line or similar source of natural magic.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Muffles Footstep Sounds",
      "Enhanced Stealth Bonus"
    ],
    "vendor": "rogueport",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Muffle Footsteps",
        "rules": "Activate as an action. The Silent Siren mutes all footstep sounds within a ten-meter radius for the duration of use. This effect ends when you move beyond the radius or if you deactivate it."
      },
      {
        "title": "Enhanced Stealth Bonus",
        "rules": "Grants a +2 bonus to all Stealth checks while activated, which lasts until the end of your next turn after deactivating the device."
      }
    ],
    "levelRequirementReason": "The Silent Siren's intricate enchantments are subtle and require no advanced magical knowledge.",
    "vendorReason": "Rogueport specializes in gear for covert operations, making the Silent Siren a natural addition to their lineup.",
    "shippingDetail": "The device is shipped via Koopa Express, ensuring it arrives undamaged and fully charged.",
    "usage": {
      "activation": "Activate as an action.",
      "duration": "Until the end of your next turn after deactivating or moving beyond the ten-meter radius.",
      "endsWhen": "Deactivation or movement beyond the ten-meter radius.",
      "charges": "Unlimited, recharges upon connecting to a ley line."
    },
    "priceReason": "The Silent Siren's advanced enchantments and unique materials justify its moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:37:24.886753+00:00",
    "aiReviewedAt": "2026-07-23T17:37:24.886753+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_silken_hush": {
    "id": "rogueport_silken_hush",
    "name": "Silken Hush",
    "description": "Silken Hush is a whisper-thin fabric that weaves silence around those who wear it. Crafted from the finest threads of ancient forest silkworms, this garment reduces ambient noise by 70%, making it perfect for stealthy maneuvers. However, its weave also muffles spoken words to a mere murmur, reducing vocal communication by two-thirds. This fabric grants a subtle edge in close combat, providing an evasion bonus against auditory-based detection traps.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Silent Steps",
      "Muted Voice"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silent Steps",
        "rules": "Activates as a bonus action. Reduces all ambient noise within a 10-foot radius by 70%. This effect lasts for 1 minute and ends if the wearer moves more than 30 feet or takes an action that generates sound."
      },
      {
        "title": "Muted Voice",
        "rules": "Passive effect. When worn, vocal output is muffled to 30% of normal volume. This does not apply to whispered speech. The effect ends when the wearer removes the garment or when the wearer speaks."
      }
    ],
    "levelRequirementReason": "This item provides a basic advantage for stealth and allows characters to remain undetected in quiet environments.",
    "vendorReason": "Rogueport specializes in gear that enhances mobility, making Silken Hush a natural fit for their inventory.",
    "shippingDetail": "Delivered by Lakitu Drones within three days of purchase.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute",
      "endsWhen": "The wearer moves more than 30 feet or takes an action that generates sound, or when the wearer removes the garment or speaks.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the rare materials and advanced weaving techniques required to produce Silken Hush.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:37:18.826936+00:00",
    "aiReviewedAt": "2026-07-23T17:37:18.826936+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_silken_mask_of_the_blood_owl": {
    "id": "rogueport_silken_mask_of_the_blood_owl",
    "name": "Silken Mask of the Blood Owl",
    "description": "The Silken Mask of the Blood Owl is a hooded visage woven from threads of shadow and dried blood, once belonging to an owl that commanded the alleys of Rogueport. When donned in dim light, it grants the wearer temporary invisibility within a radius of ten feet, allowing for swift ambushes or stealthy movements. The mask also emits a chilling aura that instills fear into nearby foes, causing them to falter and deal 1d6 damage upon their next action.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Shadow Veil",
      "Owl's Chill"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Shadow Veil",
        "rules": "Activates as a bonus action. The wearer becomes invisible in dimly lit areas for 1 minute, with a range of ten feet around them. This effect ends if the wearer moves more than 10 feet or attacks."
      },
      {
        "title": "Owl's Chill",
        "rules": "Activates whenever the wearer is within stealth and targets an enemy. The target must make a DC 13 Wisdom saving throw against fear, taking 1d6 damage on a failed save. This effect can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to wield effectively in combat.",
    "vendorReason": "Rogueport is known for its underworld secrets and this mask aligns with their inventory of arcane artifacts.",
    "shippingDetail": "Delivered via shadow courier, ensuring secrecy and quick delivery within the city limits.",
    "usage": {
      "activation": "Bonus action to activate Shadow Veil; reaction or action for Owl's Chill.",
      "duration": "1 minute for Shadow Veil, until the next save for Owl's Chill.",
      "endsWhen": "Ends if moved more than ten feet or attacked while active.",
      "charges": "Recharges after a short or long rest."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rare and powerful utility in stealth and combat.",
    "priceOriginal": 4100,
    "priceReviewedAt": "2026-07-23T17:37:20.780892+00:00",
    "aiReviewedAt": "2026-07-23T17:37:20.780892+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_silken_scarab": {
    "id": "rogueport_silken_scarab",
    "name": "Silken Scarab of the Silent Cartel",
    "description": "The Silken Scarab of the Silent Cartel is a polished obsidian beetle encased in plush velvet, said to have been smuggled from a vault beneath the moon. When worn, it grants the wearer immunity to charm and suggestion spells, effectively silencing the whispers of secrets that would otherwise be heard by foes. Its velvety texture subtly shifts colors with each passing hour, hinting at the cartel's ever-changing schemes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Immunity to Charm",
      "Silenced Secrets"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Immunity to Charm",
        "rules": "The wearer gains immunity to all charm and suggestion effects. This immunity persists as long as the scarab is worn. Saving throws against such spells are not required."
      },
      {
        "title": "Silenced Secrets",
        "rules": "Enemies within 30 feet of the wearer have disadvantage on Wisdom (Perception) checks and Investigation rolls to discern secrets from whispers. This effect lasts for 1 hour, or until the scarab is removed."
      }
    ],
    "levelRequirementReason": "The Silken Scarab's complexity requires a minimum of two character levels to wear it effectively.",
    "vendorReason": "Rogueport specializes in items that enhance one's stealth and survival, making the Silken Scarab a perfect fit for their inventory.",
    "shippingDetail": "Delivered swiftly by Lakitu Drones, this scarab arrives within 24 hours of purchase.",
    "usage": {
      "activation": "Passive effect",
      "duration": "1 hour or until removed",
      "endsWhen": "Worn off the body or when removed",
      "charges": "Unlimited"
    },
    "priceReason": "The scarab's rarity and unique properties justify its price, offering significant strategic advantages without unbalancing the game.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:37:34.750011+00:00",
    "aiReviewedAt": "2026-07-23T17:37:34.750011+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_silken_scarf_of_the_gutter": {
    "id": "rogueport_silken_scarf_of_the_gutter",
    "name": "Silken Scarf of the Gutter",
    "description": "The Silken Scarf of the Gutter is a luxurious, shimmering scarf woven from stolen silk and cursed threads, its fabric whisper-soft but imbued with malevolent intent. It allows the wearer to move silently through alleyways, leaving barely a sound, and grants them an eerie ability to bypass traps on their first approach. The scarf's threads hum with dark magic, making the wearer nearly invisible in dim light conditions.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌙",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Stealth Masterpiece",
      "Trap Bypass"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Stealth Masterpiece",
        "rules": "The Silken Scarf of the Gutter grants a +5 bonus to Dexterity (Stealth) checks. This effect is active as long as you are wearing it and within dim light or darkness. It does not expend charges but can be used once per short rest."
      },
      {
        "title": "Trap Bypass",
        "rules": "When you first approach a trap, there is a 30% chance that the trap will fail to activate due to the scarf's dark magic. This effect has no save DC and does not expend charges but can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "The scarf's cursed threads require a proficient rogue to channel its malevolent power effectively.",
    "vendorReason": "Rogueport is known for trading in the most unique and dangerous items, including those with dark origins such as this scarf.",
    "shippingDetail": "The scarf arrives rolled tightly to preserve its form, and the delivery takes a week due to the item's fragile nature.",
    "usage": {
      "activation": "Passive effect activated by wearing the scarf in dim light or darkness.",
      "duration": "Active until removed or until you take a short rest.",
      "endsWhen": "The effects end when you remove it, at the start of your next long rest, or if the item is destroyed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The scarf's rarity and unique properties make it a valuable, yet not overpowered, addition to any rogue's arsenal.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T17:38:04.749905+00:00",
    "aiReviewedAt": "2026-07-23T17:38:04.749905+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_silken_scarf_of_the_scarred": {
    "id": "rogueport_silken_scarf_of_the_scarred",
    "name": "Silken Scarf of the Scarred",
    "description": "The Silken Scarf of the Scarred, woven from the threads of fallen assassins and smuggled silk, is a haunting relic that cloaks its wearer in invisibility within dim or shadowed environs. Its faint whisper carries the echo of your last kill, a macabre reminder of each deed. The scarf's fabric is both light as air and strong as steel, yet it bears the weight of countless lives lost to its weave.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility in Dim or Shadowed Environments",
      "+5% Stealth Roll Success"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "The wearer becomes invisible within dim light, shadow, or darkness. This effect lasts for 1 minute and requires a bonus action to activate. The scarf can be used once per day."
      },
      {
        "title": "Stealth Boost",
        "rules": "+5% stealth check success on rolls made in dim light or shadowed areas. This benefit is permanent, but the wearer must have at least 10 feet of cover or darkness to gain its full effect."
      }
    ],
    "levelRequirementReason": "The scarf's inherent darkness and the haunting echo require a seasoned rogue with experience in shadowplay.",
    "vendorReason": "Rogueport, known for its trade in rare relics and illicit goods, naturally sells this macabre artifact.",
    "shippingDetail": "Delivered with utmost discretion by Lakitu Drones, ensuring the scarf arrives undetected to its recipient.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute per use",
      "endsWhen": "The duration ends when the user uses their action on another task or when they leave a dimly lit area.",
      "charges": "Once per day"
    },
    "priceReason": "The scarf's rarity, the whispers it carries, and its limited daily usage justify its moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:38:02.235684+00:00",
    "aiReviewedAt": "2026-07-23T17:38:02.235684+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_silken_scuttle": {
    "id": "rogueport_silken_scuttle",
    "name": "Silken Scuttle",
    "description": "A woven silk cord infused with stolen venom, perfect for silent escapes or tying down foes with deadly grace. Glows faintly under moonlight, revealing hidden paths.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% stealth in shadows",
      "+5% chance to disarm enemy",
      "+10% chance to trigger trap if enemy is nearby"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "rogueport_silken_sleeve": {
    "id": "rogueport_silken_sleeve",
    "name": "Silken Sleeve of the Whispering Shadow",
    "description": "The Silken Sleeve of the Whispering Shadow is a meticulously crafted piece of armor that encases one arm, muffling all sounds within a five-foot radius. It whispers secrets only to the wearer's trained ear, leaving behind an imperceptible inked trace on their skin. This sleeve is not merely a tool for stealth; it is a whisper from the shadows itself, woven with threads of ancient lore and shadow magic.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Mutes ambient sound",
      "Leaves inked whisper residue"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sound Suppression",
        "rules": "Activates as a bonus action. Mutes all sounds within a 5-foot radius for 1 minute, or until the wearer speaks, takes damage, or moves more than 10 feet away from the sleeve."
      },
      {
        "title": "Inked Whisper Residue",
        "rules": "Leaves behind an imperceptible inked trace on the wearer's skin that can be detected by trained ears with a successful DC 15 Perception check. The effect ends after 24 hours or when washed off."
      }
    ],
    "levelRequirementReason": "This sleeve is crafted for versatility, suitable even to low-level rogues who need an edge in stealth.",
    "vendorReason": "Rogueport specializes in gear that enhances the capabilities of its patrons, making this sleeve a perfect fit.",
    "shippingDetail": "Delivered within three days via Pipe Express's top-secret delivery routes.",
    "usage": {
      "activation": "Bonus action to activate; mutes sounds for 1 minute or until the wearer moves more than 10 feet away.",
      "duration": "1 minute, or until the wearer speaks, takes damage, or moves more than 10 feet away.",
      "endsWhen": "The wearer speaks, takes damage, or moves more than 10 feet away from the sleeve.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect its utility and moderate magical properties without overbalancing.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:37:50.117182+00:00",
    "aiReviewedAt": "2026-07-23T17:37:50.117182+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_silken_thief_satchel": {
    "id": "rogueport_silken_thief_satchel",
    "name": "Silken Thief Satchel",
    "description": "The Silken Thief Satchel, crafted from midnight silk and hidden alloy, whispers secrets in the dark with its faint luminescence. It seamlessly blends into any crowd, granting the user a +2 bonus to Deception checks for 5 minutes when activated. When emptied, it leaves no trace of its contents, ensuring that even the most meticulous investigation yields nothing amiss. This pouch can carry five times more than a normal satchel without adding bulk.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎭",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Disguise",
      "No Trace"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shadowrunner Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disguise",
        "rules": "When activated as an action, the Silken Thief Satchel grants you advantage on Deception checks for up to 5 minutes. This effect ends if you are incapacitated or when it is used again."
      },
      {
        "title": "No Trace",
        "rules": "When emptied of contents and used as a bonus action, the satchel ensures that no trace remains of its past use, making it invaluable for espionage and stealth operations. This effect has no save DC and does not consume charges; however, it can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "The Silken Thief Satchel requires a minimum level of 1 to ensure that even novice rogues have the opportunity to use its unique abilities.",
    "vendorReason": "Rogueport is known for its extensive network and expertise in distributing items tailored for thieves and spies, making it an ideal vendor for this satchel.",
    "shippingDetail": "The Silken Thief Satchel is delivered via Shadowrunner Express, ensuring swift and discreet delivery to your doorstep.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "5 minutes for Disguise; instantaneous for No Trace",
      "endsWhen": "Incapacitation or re-use",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects the item's utility in espionage and stealth, making it a worthwhile investment for level 1 characters.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T17:38:34.252480+00:00",
    "aiReviewedAt": "2026-07-23T17:38:34.252480+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_silken_vault_key": {
    "id": "rogueport_silken_vault_key",
    "name": "Velvet Vault Key",
    "description": "The Velvet Vault Key is a delicate artifact carved from stolen ceremonial wax. It opens one hidden vault beneath the Old Clocktower with perfect precision, granting access to treasures sealed long ago. For five minutes thereafter, you are immune to the effects of traps, as the key's enchantment neutralizes their triggers. However, this very key leaves behind an iridescent scent trail that can be tracked by any creature with a sense of smell sharp enough to detect it.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Opens one hidden vault door",
      "Immunity to trap detection"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vault Access",
        "rules": "Activation: Standard action. Duration: Instantaneous. Range: Touch. This effect is used up when the key is inserted into a vault lock and successfully opens it."
      },
      {
        "title": "Trapper's Blindness",
        "rules": "Activation: Passive immunity. Duration: 5 minutes. Ends When: The duration expires, or you are exposed to another trap. Save DC: 14 (Wisdom saving throw). Requires a successful save to end the effect early."
      }
    ],
    "levelRequirementReason": "The key's enchantment is subtle and requires no extraordinary skill to wield.",
    "vendorReason": "Rogueport specializes in items that aid thieves and explorers, making the Velvet Vault Key a perfect fit for their inventory.",
    "shippingDetail": "The key is delivered swiftly by Lakitu Drones, ensuring it arrives intact and ready to use before your next session.",
    "usage": {
      "activation": "Standard action",
      "duration": "Instantaneous for opening the vault, passive immunity lasts for five minutes",
      "endsWhen": "Duration expires or you are exposed to a trap requiring detection",
      "charges": "Unlimited"
    },
    "priceReason": "The key's rarity and unique properties justify its fair value of 1000 XP.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T17:38:16.564616+00:00",
    "aiReviewedAt": "2026-07-23T17:38:16.564616+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_silver_blood_tattoo": {
    "id": "rogueport_silver_blood_tattoo",
    "name": "Silver Blood Tattoo",
    "description": "The Silver Blood Tattoo is a cursed ink that seeps into your skin, granting you temporary invisibility in dim light. For 30 minutes, foes are left with only a faint afterimage as you slip past their notice. The tattoo leaves behind a lingering chill, making the air around you seem colder than usual. This shadowy relic is perfect for those who wish to bypass security without being seen or felt.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility in dim light",
      "Cold aura"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Invisibility in Dim Light",
        "rules": "As a bonus action, the wearer can become invisible for up to 30 minutes. This effect ends early if the wearer takes any damage or when they attack someone or something. The tattoo grants a +5 bonus to Dexterity (Stealth) checks during this time."
      },
      {
        "title": "Cold Aura",
        "rules": "The tattoo creates an area of cold air around you, reducing the speed of all creatures within 10 feet by 20%. This effect lasts for 30 minutes and ends when the wearer takes damage or moves out of the area. No save is required to resist this effect."
      }
    ],
    "levelRequirementReason": "The intricate design of the tattoo requires a certain skill in alchemy and stealth, making it suitable for characters who have reached at least fifth level.",
    "vendorReason": "Rogueport is known for its extensive network of underground contacts and secret deals; selling such a specialized item fits their reputation.",
    "shippingDetail": "Pipe Express guarantees the safe delivery of the tattoo, ensuring it reaches its recipient in perfect condition within a day of purchase.",
    "usage": {
      "activation": "Bonus action to activate and become invisible for up to 30 minutes.",
      "duration": "Up to 30 minutes or until taking damage or attacking someone/something.",
      "endsWhen": "Taking damage, attacking, or moving out of the cold aura area.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The tattoo is priced at 1000 XP as it requires rare inks and a complex alchemical process to create, making it a valuable yet balanced addition to the character's arsenal.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:38:20.959332+00:00",
    "aiReviewedAt": "2026-07-23T17:38:20.959332+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_silver_scuttle": {
    "id": "rogueport_silver_scuttle",
    "name": "Silver Scuttle of the Broken Ledger",
    "description": "The Silver Scuttle of the Broken Ledger is a diminutive, coin-shaped device with intricate engravings that emit a soft hum. When activated, it erases all digital traces of the user’s identity for precisely ten minutes, leaving no trace in the Ledger's records. The faint residual sound it emits can alert nearby enemies, adding an eerie echo to the silence it creates. After use, the device decays, rendering the user’s digital signature unstable for thirty seconds, making them a target for any lingering digital scrutiny.",
    "price": 1000,
    "icon": "💰",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Identity Erasure",
      "Echo"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Identity Erasure",
        "rules": "When activated as an action, this device erases all digital traces of the user’s identity from the Ledger for ten minutes. It has no save DC and is instantaneous in effect."
      },
      {
        "title": "Echo",
        "rules": "Leaves a faint residual sound that can alert nearby enemies within 30 feet. This effect lasts until the start of your next turn, with a save DC of 12 to ignore it."
      }
    ],
    "levelRequirementReason": "This item requires no specific level, as it is designed for quick and discrete use by anyone needing anonymity.",
    "vendorReason": "Rogueport specializes in items that aid those who need to navigate the digital underworld discreetly.",
    "shippingDetail": "Ships via Pipe Express, known for its reliable and swift delivery through the city’s underground networks.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous, effect lasts ten minutes",
      "endsWhen": "The duration ends or when used again",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the item’s rarity and its utility for those who need to maintain digital anonymity regularly.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:38:30.446298+00:00",
    "aiReviewedAt": "2026-07-23T17:38:30.446298+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_silver_silence": {
    "id": "rogueport_silver_silence",
    "name": "Silver Silence",
    "description": "Silver Silence is a sleek, hand-carved dagger that whispers through the air like a ghost. Its blade is etched with ancient runes that resonate in silence when it moves. The dagger can be activated to create an 18-foot radius of deadened sound for 6 seconds, ensuring total stealth within its range. Should the hidden trigger be pressed, it unleashes a concentrated burst of smoke and a minor explosive force capable of stunning nearby foes for 1 round.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Silence Aura",
      "Explosive Burst"
    ],
    "vendor": "rogueport",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silence Aura",
        "rules": "When activated as an action, the dagger creates a 18-foot radius of silence that lasts for 6 seconds. All noise within this area is deadened to inaudible levels. This effect has no save DC and does not consume charges."
      },
      {
        "title": "Explosive Burst",
        "rules": "The hidden trigger can be pressed once every long rest, creating a burst of smoke and force that deals 1d6 thunder damage within a 20-foot radius centered on the user. This effect stuns all creatures in the area for 1 round if they fail a DC 13 Constitution saving throw."
      }
    ],
    "levelRequirementReason": "The dagger's activation requires no specific proficiency or skill, making it accessible to all characters.",
    "vendorReason": "Rogueport is known for its extensive supply of stealth and combat equipment tailored for rogues and assassins.",
    "shippingDetail": "Ships discreetly, ensuring the dagger arrives in mint condition within a day.",
    "usage": {
      "activation": "Action or bonus action to activate the silence aura. The explosive burst can be triggered once per long rest.",
      "duration": "The silence aura lasts for 6 seconds and ends when its duration expires.",
      "endsWhen": "The user reactivates it or completes a short or long rest.",
      "charges": "Unlimited uses, with the explosive burst being usable once per long rest."
    },
    "priceReason": "Balanced at 1000 XP to reflect its unique combination of stealth and combat utility without overshadowing other equipment options.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T17:38:40.556679+00:00",
    "aiReviewedAt": "2026-07-23T17:38:40.556679+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_silver_tongue_ink": {
    "id": "rogueport_silver_tongue_ink",
    "name": "Silver Tongue Ink",
    "description": "Silver Tongue Ink is a shimmering liquid that, when applied to your lips, transforms your speech into a whisper of secrets. It can make even the most guarded guardsmen falter under its spell with their own lies or taunts. The ink's essence reveals hidden truths if used deceitfully, causing the speaker to blush and stammer for 1d4 rounds as they grapple with the shame. Dissolves after 30 seconds of use.",
    "price": 1000,
    "icon": "💬",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Voice modulation: whispers, lies, or taunts",
      "Reveals truth if used deceptively"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Voice Modulation",
        "rules": "Activates on application to the lips. Lasts for 30 seconds unless interrupted by an action from the target. A successful DC 15 Wisdom saving throw ends its effect early."
      },
      {
        "title": "Truth Reveal",
        "rules": "If used deceptively, the speaker must succeed on a DC 15 Charisma (Deception) check or become temporarily embarrassed and blushed for 1d4 rounds. The truth of what was said is revealed to all within hearing range."
      }
    ],
    "levelRequirementReason": "This ink is accessible to low-level characters who may find it useful in their earliest adventuring endeavors.",
    "vendorReason": "Rogueport's extensive network of spies and informants ensures they have access to such specialized items as the Silver Tongue Ink.",
    "shippingDetail": "Delivered by a stealthy courier, ensuring it arrives in perfect condition without arousing suspicion.",
    "usage": {
      "activation": "Apply to lips as an action",
      "duration": "30 seconds or until interrupted",
      "endsWhen": "Used deceptively, or if the user takes an action against their will",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect its utility in tricky social situations without being overpowered.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:39:15.922239+00:00",
    "aiReviewedAt": "2026-07-23T17:39:15.922239+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_silver_tongue_vial": {
    "id": "rogueport_silver_tongue_vial",
    "name": "Silver Tongue Vial",
    "description": "The Silver Tongue Vial is a sleek, glass phial containing a shimmering liquid that whispers of truth and deceit. When consumed, it grants perfect eloquence and the power to charm any audience, turning words into silver threads that weave through the air. This vial temporarily silences dissent in negotiations and bestows immunity to truth-telling checks for 30 minutes, leaving you the master of your tongue until its effects fade.",
    "price": 1000,
    "icon": "🧪",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+15% Persuasion skill",
      "Immunity to truth-telling"
    ],
    "vendor": "rogueport",
    "shippedBy": "Koopa Postal Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Enhanced Persuasion",
        "rules": "When consumed, the vial grants a +15 bonus to Persuasion checks for 30 minutes. This effect is instantaneous upon consumption and does not require an action."
      },
      {
        "title": "Truth-Telling Immunity",
        "rules": "The user gains immunity to truth-telling checks for 30 minutes after consuming the vial. This immunity lasts until the end of their next long rest, preventing any spells or abilities that would otherwise compel them to speak the truth."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 5 to handle the mental strain of perfect eloquence and the ethical implications of using such a potent tool.",
    "vendorReason": "Rogueport is known for their extensive network of spies, negotiators, and tricksters who frequently require tools that can manipulate situations in their favor.",
    "shippingDetail": "Due to the nature-sensitive properties of the vial, it must be shipped within a temperature-controlled container to ensure its potency remains intact.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "30 minutes",
      "endsWhen": "Ends at the start of the user's next long rest",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "The vial is priced at 1000 XP as it represents a rare and powerful tool that can significantly alter interactions in social situations.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:39:05.927651+00:00",
    "aiReviewedAt": "2026-07-23T17:39:05.927651+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_silvered_tongue": {
    "id": "rogueport_silvered_tongue",
    "name": "Silvered Tongue",
    "description": "The Silvered Tongue is a rare artifact with a faint metallic sheen that whispers secrets of its past. Crafted from an ancient mob boss's tongue, it grants temporary silence and persuasive power to those who wield it. When activated, all ambient noise around the user ceases for 15 seconds, allowing for silent passage through crowded areas. Its bluffing aura increases the likelihood of successful persuasion checks by a convincing +40%, making it invaluable in diplomatic or criminal endeavors.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Silent Whisper",
      "Persuasive Charm"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silent Whisper",
        "rules": "Activates as a bonus action. All ambient noise around the user ceases for 15 seconds, providing total silence within a 10-foot radius. This effect ends if the user takes any action that generates sound or when the duration expires."
      },
      {
        "title": "Persuasive Charm",
        "rules": "Grants +40 to Persuasion checks for the duration of one short rest, after which the bonus is lost. This effect cannot be used more than once per long rest."
      }
    ],
    "levelRequirementReason": "A basic rogue can utilize this artifact without advanced training.",
    "vendorReason": "Rogueport specializes in the trade of rare artifacts and equipment for rogues and thieves.",
    "shippingDetail": "Delivered by a rakasha courier within 3 days, ensuring discreet transport.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "15 seconds",
      "endsWhen": "User takes any action that generates sound or at the end of its duration",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price for a rare artifact providing significant but not game-breaking benefits.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:38:53.034959+00:00",
    "aiReviewedAt": "2026-07-23T17:38:53.034959+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_siren_sigh_torch": {
    "id": "rogueport_siren_sigh_torch",
    "name": "Siren Sigh Torch",
    "description": "The Siren Sigh Torch, a twisted and haunting artifact forged from the forgotten bones of ancient shipwrecks, emits an eerie melody that can disorient foes in its immediate vicinity. The torch's flame dances with the ghostly echoes of past tragedies, making it ideal for stealthy ambushes in narrow alleys. Once ignited, the Siren Sigh Torch burns steadily for 2 minutes before collapsing into ash, leaving behind a lingering echo that haunts the battlefield long after its use.",
    "price": 1000,
    "icon": "🔥",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Disorients targets with haunting melody",
      "Leaves lingering echo"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Disorienting Melody",
        "rules": "When activated, the torch emits an eerie sound that disorients all creatures within 5 meters for 5 seconds. This effect can be resisted with a successful DC 13 Wisdom saving throw."
      },
      {
        "title": "Lingering Echo",
        "rules": "For 3 seconds after its use, any creature in the immediate area must make a DC 12 Dexterity saving throw to avoid being affected by the haunting echoes. On a failed save, they are incapacitated for 1 round."
      }
    ],
    "levelRequirementReason": "The Siren Sigh Torch requires at least 4th level to wield effectively due to its arcane and emotional resonance.",
    "vendorReason": "Rogueport, known for its network of thieves and smugglers, regularly trades in rare and dangerous artifacts like the Siren Sigh Torch.",
    "shippingDetail": "Ships via Pipe Express with a 2-day delivery time.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "1 round (30 seconds) per activation",
      "endsWhen": "The duration ends or the torch is extinguished",
      "charges": "Unlimited uses, recharges after a long rest"
    },
    "priceReason": "The Siren Sigh Torch's unique properties and the lore behind its creation justify a price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:39:25.061796+00:00",
    "aiReviewedAt": "2026-07-23T17:39:25.061796+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_siren_silencer": {
    "id": "rogueport_siren_silencer",
    "name": "Siren Silencer of the Silent Choir",
    "description": "The Siren Silencer of the Silent Choir hums a low, soothing vibration as it quiets all ambient noise within its five-meter radius, creating an imperceptible barrier that renders nearby enemies less aggressive and more disoriented. Crafted from ancient, rune-carved glass, this device is said to have been found in a forgotten temple dedicated to the god of silence. Its whispering presence calms allies and disrupts traps and alarms reliant on sound.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Silence Field",
      "Calm Aura"
    ],
    "vendor": "rogueport",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Silence Field",
        "rules": "When activated, the Silence Field within a five-meter radius becomes completely silent. This effect lasts for one minute or until a creature in the area makes a Wisdom saving throw (DC 13) with advantage if it is an enemy. The field has no effect on creatures who succeed on their save."
      },
      {
        "title": "Calm Aura",
        "rules": "All friendly creatures within ten feet of the Siren Silencer gain advantage on saving throws against being frightened and have resistance to fear effects for one minute, or until they leave the area. This effect is instantaneous upon activation and ends when the creature leaves the ten-foot radius."
      }
    ],
    "levelRequirementReason": "Requires at least level 6 to operate this device effectively in combat.",
    "vendorReason": "Rogueport is known for its connections with underground artisans and smugglers, making it the perfect vendor for such a clandestine item.",
    "shippingDetail": "Ships discreetly using Koopa Postal's standard courier service, ensuring quick delivery without drawing unwanted attention.",
    "usage": {
      "activation": "Action",
      "duration": "One minute or until a creature in the area makes a Wisdom saving throw (DC 13) with advantage if it is an enemy",
      "endsWhen": "A creature within the effect's radius successfully saves against the Silence Field or leaves the area.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Siren Silencer's rarity and unique properties justify its moderate price of 1000 XP.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-23T17:39:35.179471+00:00",
    "aiReviewedAt": "2026-07-23T17:39:35.179471+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_sneak_suit": {
    "id": "rogueport_sneak_suit",
    "name": "Sneak Suit",
    "description": "The Rogueport Sneak Suit is a sleek, shadow-hued leather trench coat lined with soft, silent padding and embedded with heat-sensing tech that subtly warms to blend into ambient temperatures. This suit allows you to move undetected for short bursts while blending seamlessly into the shadows, making you nearly invisible to all but the most discerning eyes. Its silent padding reduces noise by 50%, ensuring your movements are as quiet as a whisper in the night.",
    "category": "equipment",
    "price": 3000,
    "icon": "🧩",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Bleed Into Shadows",
      "Silent Step"
    ],
    "vendor": "rogueport",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Bleed Into Shadows",
        "rules": "As an action, you can activate the suit's shadowy lining to blend into your surroundings. For the next minute, you have advantage on Dexterity (Stealth) checks and can move through difficult terrain as if it were not present. This effect ends if you leave a solid object or if you are hit by an attack."
      },
      {
        "title": "Silent Step",
        "rules": "While wearing the suit, noise from your movement is reduced by 50%. This benefit lasts for up to 1 hour per long rest. The suit's padding also muffles your steps, making them nearly silent to the discerning ear."
      }
    ],
    "levelRequirementReason": "The suit requires a minimum Dexterity of 14 and proficiency in Stealth to fully utilize its effects.",
    "vendorReason": "Rogueport specializes in gear for stealth operations, making the Sneak Suit a natural addition to their inventory.",
    "shippingDetail": "The suit is carefully packed and shipped via Void Drifter Relay, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "Leaving a solid object or being hit by an attack; ends when the wearer rests for at least 8 hours.",
      "charges": "Unlimited, but requires concentration to maintain Bleed Into Shadows."
    },
    "priceReason": "The suit's advanced heat-sensing tech and silent padding make it a rare find, justifying its higher price point.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T17:39:48.411122+00:00",
    "aiReviewedAt": "2026-07-23T17:39:48.411122+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_soul_bribe": {
    "id": "rogueport_soul_bribe",
    "name": "Soul Bribe Pouch",
    "description": "A small leather pouch, worn by shadowy figures in Rogueport’s darkest alleys, filled with whispers of regret and despair. When used, it allows the user to ‘pay’ a target with their own guilt or fear, making corrupt officials tremble and reveal secrets they wish they could forget. The pouch grants temporary immunity to fear-based traps or ambushes, but at the cost of leaving the target feeling guilty for 30 seconds after its use.",
    "price": 1000,
    "icon": "💀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Fear Immunity",
      "Guilt Inducement"
    ],
    "vendor": "rogueport",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fear Immunity",
        "rules": "When activated as an action, this pouch grants the user temporary immunity to fear-based traps or ambushes for a duration of 1 hour. The effect is negated if the target makes a successful Wisdom saving throw with a DC equal to 8 + the user’s Charisma modifier."
      },
      {
        "title": "Guilt Inducement",
        "rules": "If used on a corrupt official, the target will reveal secrets they wish they could forget. The effect lasts for 30 seconds and cannot be repeated within the same day by the same user."
      }
    ],
    "levelRequirementReason": "The pouch is designed to aid adventurers of all levels but requires a minimum Charisma score to effectively use its fear-inducing properties.",
    "vendorReason": "Rogueport, known for dealing in the dark arts and secrets, would naturally sell items that manipulate guilt and fear.",
    "shippingDetail": "The pouch must be sent via Boo Spectral Mail to ensure it arrives securely and arrives with a chilling message.",
    "usage": {
      "activation": "Used as an action, either by the user or another creature within 30 feet.",
      "duration": "1 hour of immunity to fear-based effects; guilt lasts for 30 seconds.",
      "endsWhen": "The duration ends when the time passes or a successful saving throw is made against it.",
      "charges": "Unlimited uses"
    },
    "priceReason": "While not extraordinarily powerful, the Soul Bribe Pouch offers unique and potentially game-changing abilities that justify its price.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T17:39:44.699170+00:00",
    "aiReviewedAt": "2026-07-23T17:39:44.699170+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_soul_crypt_key": {
    "id": "rogueport_soul_crypt_key",
    "name": "Soul Crypt Key of the Hollow Vault",
    "description": "The Soul Crypt Key of the Hollow Vault is a tarnished brass key, its surface etched with symbols that glow faintly in the dark. Crafted from an ancient alloy meant to withstand eternity itself, it whispers secrets of lost souls when held close to the ear. This key can manipulate atmospheric conditions within a 30-foot radius, temporarily transforming foggy or smoky environments into perfect cover for stealth and concealment. When used near a locked door, it reveals hidden traps with eerie precision, alerting the wielder to potential dangers lurking behind closed doors.",
    "price": 1000,
    "icon": "🗝",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Stealth in Fog & Smoke",
      "Trap Detection"
    ],
    "vendor": "rogueport",
    "shippedBy": "Spiritbound Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Stealth in Fog & Smoke",
        "rules": "When activated as a bonus action within a foggy or smoky environment, the key grants +50% stealth proficiency for 1 minute. The user can move through smoke and fog without penalty to movement speed."
      },
      {
        "title": "Trap Detection",
        "rules": "Upon use near a locked door, this key reveals any hidden traps within 30 feet with an accuracy that is uncanny. This effect lasts for 1 minute, providing the user with critical insight into potential dangers."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Stealth to fully utilize its atmospheric manipulation and stealth benefits.",
    "vendorReason": "Rogueport is known for their connections to the underworld, making them a prime vendor for keys that unlock secrets of the lost and forgotten.",
    "shippingDetail": "Shipped by Spiritbound Express, this key arrives with a cryptic note from an unknown sender warning about the dangers of unlocking such ancient secrets.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute, or until used again",
      "endsWhen": "The effect ends when the user activates it again within the same duration.",
      "charges": "Unlimited, but requires concentration to maintain for more than a few minutes."
    },
    "priceReason": "Balanced at 1000 XP, this key offers significant utility and is priced according to its rare origin and unique effects.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T17:39:54.727796+00:00",
    "aiReviewedAt": "2026-07-23T17:39:54.727796+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_soul_scarf": {
    "id": "rogueport_soul_scarf",
    "name": "Soul Scarf of the Broken Pact",
    "description": "The Soul Scarf of the Broken Pact is a dark, fraying scarf spun from the very essence of a gangster's soul. It whispers of deals gone wrong and fortunes lost to fate. Wear it in battle to deal an extra surge of damage to enemies struck by fear or shock, leaving them reeling with memories of their own failures. The scarf’s psychic echo blinds attackers for a second, blurring the lines between victory and defeat.",
    "category": "equipment",
    "price": 4500,
    "icon": "🔮",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Extra Damage on Fear/Shock",
      "Psychic Echo"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Extra Damage on Fear/Shock",
        "rules": "When you deal damage to an enemy with the frightened or stunned condition, you deal an additional 1d6 necrotic damage. This effect has a limit of once per turn."
      },
      {
        "title": "Psychic Echo",
        "rules": "As a bonus action, you can activate the scarf’s echo, blinding all creatures within 5 feet for 1 round (30 seconds). The effect ends if you use it again or if an ally moves into the area."
      }
    ],
    "levelRequirementReason": "The scarf requires a certain level of experience and control to harness its malevolent power without succumbing fully.",
    "vendorReason": "Rogueport, known for dealing in cursed items, naturally sells this artifact that carries the weight of many broken deals.",
    "shippingDetail": "Shipped via Lakitu Drones, expect a 2-day delivery with a tracking number included.",
    "usage": {
      "activation": "Bonus action to activate echo; can be used once per short rest.",
      "duration": "The blind effect lasts for 1 round (30 seconds).",
      "endsWhen": "The effect ends if you use it again or if an ally moves into the area where the echo is active.",
      "charges": "Unlimited uses, but only one echo can be active at a time."
    },
    "priceReason": "Reflecting its cursed nature and powerful effects, the Soul Scarf of the Broken Pact is priced high to balance its utility in battle.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T17:39:51.482980+00:00",
    "aiReviewedAt": "2026-07-23T17:39:51.482980+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_soul_shard": {
    "id": "rogueport_soul_shard",
    "name": "Soul Shard",
    "description": "A pulsating crystal that channels stolen memories and emotions into a temporary burst of psychic power. Use with caution—may cause emotional overload.",
    "price": 3000,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Grants 100% chance to steal a target’s memory for 10 seconds",
      "Inflicts 50% mental drain on target",
      "Can be used once per session"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 6
  },
  "rogueport_soul_siphon_chest": {
    "id": "rogueport_soul_siphon_chest",
    "name": "Soul Siphon Chest",
    "description": "The Soul Siphon Chest exudes an eerie crimson glow, its surface etched with ancient runes that whisper of forbidden magic. This darkly enchanted chest can draw life force from foes it strikes, converting their vitality into temporary resilience for the wielder. It is a masterwork creation by Rogueport's finest, designed specifically for rogues to survive in treacherous encounters. The chest hums softly when active, its crimson light flickering as it siphons energy.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Life Siphon",
      "Enhanced Dodging"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Life Siphon",
        "rules": "When the user strikes an enemy with a melee attack, the Soul Siphon Chest drains 10% of the target's maximum hit points as temporary hit points for the user. This effect has no save DC and can be triggered once per turn."
      },
      {
        "title": "Enhanced Dodging",
        "rules": "While the Soul Siphon Chest is active, the user gains a +20% bonus to their Armor Class (AC) until the start of their next turn. This effect ends if the user takes any damage or if they move more than 10 feet away from the chest."
      }
    ],
    "levelRequirementReason": "The intricate enchantments require a certain expertise, making this item suitable for experienced rogues.",
    "vendorReason": "Rogueport is known for its expert craftsmanship and the creation of such powerful yet balanced items.",
    "shippingDetail": "Ships via Pipe Express, ensuring secure delivery within a week from Rogueport.",
    "usage": {
      "activation": "Activates as an action when struck against an enemy.",
      "duration": "Instantaneous effect each time it is used.",
      "endsWhen": "The effect ends if the user takes damage or moves more than 10 feet away from the chest.",
      "charges": "Unlimited; the chest replenishes its energy over a 20-minute period."
    },
    "priceReason": "Balanced at this price to reflect its rare crafting and unique properties, providing rogues with enhanced survivability in dangerous situations.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:40:17.979904+00:00",
    "aiReviewedAt": "2026-07-23T17:40:17.979904+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_soul_siphon_taser": {
    "id": "rogueport_soul_siphon_taser",
    "name": "Soul Siphon Taser",
    "description": "The Soul Siphon Taser is a rare weapon forged from the very essence of an ancient spirit prison. Its core glows with a faint, eerie light as it channels the soul energy of its victims directly into the wielder's grip. Each strike deals 1d6 psychic damage and grants the user a +2 strength bonus until their next action, but at the cost of reducing the target’s hit points by the same amount. The weapon leaves a lingering feeling of unease in both the victim and the wielder.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+2 Strength Bonus on Strikes",
      "1d6 Psychic Damage and Soul Energy Drain"
    ],
    "vendor": "rogueport",
    "shippedBy": "Spiritbound Couriers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Strength Boost",
        "rules": "When you hit a target with this weapon, you gain a +2 strength bonus until your next action. This effect is instantaneous and does not require an action to activate."
      },
      {
        "title": "Soul Drain",
        "rules": "Upon hitting a target, the weapon drains 1d6 points of the target's hit points as psychic damage. The wielder must succeed on a DC 15 Constitution saving throw or become exhausted until the start of their next turn."
      }
    ],
    "levelRequirementReason": "This weapon requires significant skill and control to wield effectively without causing harm to oneself.",
    "vendorReason": "Rogueport is known for its extensive collection of rare and exotic weapons, including those with unique abilities like the Soul Siphon Taser.",
    "shippingDetail": "The weapon arrives encased in a protective spirit barrier to prevent accidental soul energy leakage during transit.",
    "usage": {
      "activation": "On hit",
      "duration": "Until your next action",
      "endsWhen": "You make another attack or use an action",
      "charges": "Unlimited"
    },
    "priceReason": "The weapon's unique soul-siphoning properties, combined with its rarity and the risk involved in using it, justify this balanced price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:40:06.324427+00:00",
    "aiReviewedAt": "2026-07-23T17:40:06.324427+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_spectral_bone_torch": {
    "id": "rogueport_spectral_bone_torch",
    "name": "Spectral Bone Torch",
    "description": "The Spectral Bone Torch glows with a ghostly blue flame that pierces through the deepest shadows, revealing hidden passageways and traps in abandoned sewers. Its ethereal light illuminates even in total darkness, casting eerie reflections on the walls of ancient tunnels. Ideal for smuggling or luring targets into deadly traps, this relic is said to be crafted from bones of forgotten heroes by a spectral blacksmith who once called these sewers home.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Illuminates Darkness",
      "Reveals Hidden Hazards"
    ],
    "vendor": "rogueport",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Illuminates Darkness",
        "rules": "The Spectral Bone Torch provides bright illumination for up to 30 minutes, revealing all creatures and objects within a 15-foot radius. It can also penetrate total darkness, but only to a distance of 20 feet."
      },
      {
        "title": "Reveals Hidden Hazards",
        "rules": "When activated, the torch emits a resonant hum that detects hidden or secret doors and traps within a 30-foot radius. This effect lasts for 1 minute and requires no action to maintain once triggered."
      }
    ],
    "levelRequirementReason": "The Spectral Bone Torch is crafted from the bones of forgotten heroes, making it accessible to even low-level adventurers.",
    "vendorReason": "Rogueport vendors are known for their extensive knowledge of ancient and magical artifacts used in urban exploration.",
    "shippingDetail": "The package is delivered under the cover of night, ensuring secrecy during transit.",
    "usage": {
      "activation": "A bonus action to activate",
      "duration": "1 minute per activation or until expended",
      "endsWhen": "Used up or extinguished",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Spectral Bone Torch is crafted from rare bones and imbued with spectral magic, making it a valuable tool for explorers.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:40:35.177808+00:00",
    "aiReviewedAt": "2026-07-23T17:40:35.177808+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_spectral_mask": {
    "id": "rogueport_spectral_mask",
    "name": "Shadow Veil Mask",
    "description": "Conceals the wearer’s identity with a shifting, smoke-like veil that mimics ambient shadows. Perfect for slipping past guards or avoiding recognition. When worn, the mask whispers secrets of the wearer’s past.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Hide from vision and sound detection",
      "Grants 10% chance to reveal hidden enemies’ location",
      "Voice modulation: whispers can be heard in darkened rooms"
    ],
    "vendor": "rogueport",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "rogueport_tainted_heart": {
    "id": "rogueport_tainted_heart",
    "name": "Tainted Heart",
    "description": "The Tainted Heart, a cursed artifact crafted from the core of a fallen warlord, whispers dark secrets to its bearer. This forger-made relic enhances stealth by cloaking the wearer in an echo of death, but at the price of emotional stability. After thirty seconds, it emits a low-frequency hum that disorients foes within ten feet, requiring a successful Constitution saving throw or being dazed until the start of their next turn.",
    "price": 1000,
    "icon": "💀",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Whispering Soul",
      "Disorienting Hum"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Whispering Soul",
        "rules": "Activates as a bonus action, providing the wearer with +15% stealth rating. The effect lasts until the start of your next turn."
      },
      {
        "title": "Disorienting Hum",
        "rules": "Activated after 30 seconds by the wearer or any creature within ten feet. Requires a successful Constitution saving throw (DC 14) for enemies to be dazed until their next turn. Ends when the wearer is no longer in contact with the artifact."
      }
    ],
    "levelRequirementReason": "Requires a minimum of level 4 to wield, balancing its cursed nature and powerful effects.",
    "vendorReason": "Rogueport, known for their extensive trade in rare artifacts, naturally sells this dark relic.",
    "shippingDetail": "Ships via fast courier service directly from Rogueport, arriving within a week of purchase.",
    "usage": {
      "activation": "Bonus action and reaction",
      "duration": "Until the start of your next turn for Whispering Soul; until the wearer is no longer in contact with the artifact for Disorienting Hum",
      "endsWhen": "Whispering Soul ends when the start of your next turn arrives; Disorienting Hum ends when the wearer ceases to be within ten feet.",
      "charges": "Unlimited, but only one effect can activate at a time."
    },
    "priceReason": "Balanced price for its effects and cursed nature, aligning with other uncommon relics in the market.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:40:46.966047+00:00",
    "aiReviewedAt": "2026-07-23T17:40:46.966047+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_tainted_silence_ammunition": {
    "id": "rogueport_tainted_silence_ammunition",
    "name": "Tainted Silence Ammunition",
    "description": "The Tainted Silence Ammunition is a deadly contraption forged from the shadows of Rogueport, crafted by the city's most cunning alchemists. Each round suppresses its target’s heartbeat for a full three seconds, creating an eerie silence that can only be broken by the sudden, toxic burst that drains stamina and leaves behind a lingering sense of dread. Only to be used under the cover of night when shadows are deepest.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Silent Shot: No sound upon firing",
      "Toxic Heartstopper: Target’s heartbeat slows for three seconds, followed by stamina drain"
    ],
    "vendor": "rogueport",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Silent Shot",
        "rules": "When the user fires this ammunition, the target's heartbeat is momentarily suppressed for a full 3 seconds. The effect has no save DC and ends immediately after activation."
      },
      {
        "title": "Toxic Heartstopper",
        "rules": "Following the suppression of the target’s heartbeat, they are subjected to a potent toxin that drains 20% of their stamina. This effect lasts until the target completes their next turn or takes any action. There is no save DC for this effect."
      }
    ],
    "levelRequirementReason": "This ammunition requires expertise in stealth and the ability to use it effectively, which comes with experience.",
    "vendorReason": "Rogueport's alchemists are known for their innovations in poisons and silent weapons, making this a natural addition to their inventory.",
    "shippingDetail": "Special delivery via the Void Drifter, ensuring the ammunition arrives under cover of night.",
    "usage": {
      "activation": "Uses an action to fire one round.",
      "duration": "The suppression lasts for 3 seconds and the stamina drain lasts until the target completes their next turn or takes any action.",
      "endsWhen": "The effect ends when the target completes a turn or takes another action, or if the ammunition is reloaded or expended.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This ammunition represents advanced alchemy and rare components, making it valuable but not overly powerful.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:41:03.428470+00:00",
    "aiReviewedAt": "2026-07-23T17:41:03.428470+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_tea_leaf_tattoo": {
    "id": "rogueport_tea_leaf_tattoo",
    "name": "Tea Leaf Tattoo",
    "description": "The Tea Leaf Tattoo is a faint, inked symbol that whispers of dark alleys and hidden truths. When activated in dim light, it grants the wearer an uncanny ability to blend into shadows, cloaking them for the night. The tattoo glows softly under moonlight, its light flickering like a candle flame, momentarily blinding any pursuers with its deceptive glow. Only those who have served the Tea Leaf Syndicate can see this mark, making it both a badge of honor and a tool of stealth.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Shadow Cloak",
      "Blinding Glow"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shadow Cloak",
        "rules": "When activated as an action in dim light, the wearer gains advantage on Dexterity (Stealth) checks and has a +5 bonus to their Stealth score for 10 minutes. This effect ends if they are hit by an attack or move out of dim light."
      },
      {
        "title": "Blinding Glow",
        "rules": "The tattoo emits a soft, flickering glow when activated in low light conditions. For the next round, any creature within 5 feet that can see the wearer must succeed on a DC 13 Dexterity saving throw or be blinded until the start of their next turn."
      }
    ],
    "levelRequirementReason": "The tattoo is accessible to all adventurers who have completed at least one mission for the Tea Leaf Syndicate.",
    "vendorReason": "Rogueport, known for its network of hidden alleys and secret deals, is a fitting vendor for this emblem of the underground.",
    "shippingDetail": "The tattoo is couriered discreetly within an ornate scroll case to ensure it arrives in perfect condition.",
    "usage": {
      "activation": "Action",
      "duration": "10 minutes or until the wearer moves out of dim light",
      "endsWhen": "The wearer is hit by an attack or moves out of dim light",
      "charges": "Unlimited, recharged after a long rest"
    },
    "priceReason": "The tattoo's value lies in its unique crafting technique and the exclusive knowledge required to activate it.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:41:16.956092+00:00",
    "aiReviewedAt": "2026-07-23T17:41:16.956092+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_tear_drop_amulet": {
    "id": "rogueport_tear_drop_amulet",
    "name": "Tear Drop Amulet of the Fallen King",
    "description": "The Tear Drop Amulet of the Fallen King is a dark, obsidian pendant with a single, teardrop-shaped gemstone that pulses with an eerie light. Worn by those who have lost their soul to the underworld, it grants fleeting visions of past events, allowing the wearer to see through the eyes of the dead. Its glow intensifies with the wearer's pain and regret, casting a shadow over their steps.",
    "price": 1000,
    "icon": "💀",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Past Visions",
      "Armor Penalty"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Past Visions",
        "rules": "As a bonus action, the wearer can activate this amulet to gain a vision of past events. This allows them to see through the eyes of an enemy within 30 feet who has died recently. The effect lasts for 1 minute and requires no saving throw."
      },
      {
        "title": "Armor Penalty",
        "rules": "While wearing this amulet, enemies have a +10 bonus to their Armor Class against the wearer's attacks. This penalty persists until the wearer removes the amulet or ends their turn without attacking."
      }
    ],
    "levelRequirementReason": "This amulet requires a level 4 character to wield, as it draws power from the wearer’s deep emotional turmoil.",
    "vendorReason": "Rogueport is known for its connection with the underworld and sells items that relate to lost souls.",
    "shippingDetail": "The amulet arrives quickly, but the delivery may be unsettling due to its dark origins.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute or until wearer ends their turn without attacking",
      "endsWhen": "Wearer removes the amulet or ends their turn without attacking",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects its ability to provide strategic advantages and its connection with the underworld.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:41:07.668506+00:00",
    "aiReviewedAt": "2026-07-23T17:41:07.668506+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_tinder_of_the_fallen_gods": {
    "id": "rogueport_tinder_of_the_fallen_gods",
    "name": "Tinder of the Fallen Gods",
    "description": "The Tinder of the Fallen Gods is a cursed ember that ignites any material, even steel or stone, when touched. Its flames burn with divine fury, casting an ethereal glow and leaving behind a faint afterimage of your last triumph. This ember grants you temporary +3 to dodge rolls while it burns, and with each touch, it has a 20% chance to deal a critical hit to any target within reach.",
    "price": 1000,
    "icon": "🔥",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Divine Flame",
      "Critical Touch"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Divine Flame",
        "rules": "When you ignite the Tinder, it deals 1d6 fire damage to all creatures within 5 feet. Creatures have advantage on saving throws against this effect if they can see the Tinder. The duration is until the start of your next turn."
      },
      {
        "title": "Critical Touch",
        "rules": "When you ignite an enemy with the Tinder, there is a 20% chance that the attack deals double damage and has a critical hit. This effect cannot be used more than once per short or long rest."
      }
    ],
    "levelRequirementReason": "This ember can be wielded by beginners to harness its divine power.",
    "vendorReason": "Rogueport is known for selling mystical artifacts that empower adventurers in their quests.",
    "shippingDetail": "Ships via high-speed drones, arriving within a day of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The Tinder goes out after one use or is destroyed by water.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for a rare item that offers potent utility and combat benefits.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T17:41:16.814584+00:00",
    "aiReviewedAt": "2026-07-23T17:41:16.814584+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_toad_lee_s_blood_scarf": {
    "id": "rogueport_toad_lee_s_blood_scarf",
    "name": "Toad Lee Blood Scarf",
    "description": "The Toad Lee Blood Scarf, a rare relic woven from Hag-infused silk and imbued with Toad Lee's resilience, glows an eerie crimson hue when enemies draw near. This talisman absorbs poison damage for three turns and slows any foe within reach by 50%, turning their steps into a sluggish crawl. Legends say it was crafted in the heart of the Hag's lair as a token of survival.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Absorbs Poison Damage",
      "Slows Enemy Movement"
    ],
    "vendor": "rogueport",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Absorbs Poison Damage",
        "rules": "When an enemy creature attacks with poison damage, the Toad Lee Blood Scarf absorbs this damage for three turns. The wearer does not take the poison effect during that time."
      },
      {
        "title": "Slows Enemy Movement",
        "rules": "Any enemy within 5 feet of the wearer has their movement speed reduced by half (to 10 feet) until the start of its next turn. This effect does not stack with other movement reduction effects."
      }
    ],
    "levelRequirementReason": "The scarf's magic is potent, but not overwhelming, requiring at least a third-level character to wield it effectively.",
    "vendorReason": "Rogueport, known for its eclectic and often questionable wares, stocks this relic as a testament to legendary adventures and the unpredictable nature of survival in dangerous lands.",
    "shippingDetail": "The scarf is carefully wrapped in protective Hag silk and shipped under cover of darkness by Boo Spectral Mail to ensure its arrival remains a mystery.",
    "usage": {
      "activation": "Passive effect, activated upon donning the scarf.",
      "duration": "Instantaneous; lasts for three turns after absorbing poison damage or until the start of an enemy's next turn when slowing their movement.",
      "endsWhen": "The wearer removes the scarf, it is destroyed by fire, or it reaches its maximum uses limit (20 uses).",
      "charges": "Unlimited, recharges after 8 hours of rest."
    },
    "priceReason": "Crafted from Hag-infused silk and imbued with Toad Lee's legendary resilience, the scarf is a rare find, priced to reflect its rarity and historical significance.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T17:41:40.611051+00:00",
    "aiReviewedAt": "2026-07-23T17:41:40.611051+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_torch_of_silence": {
    "id": "rogueport_torch_of_silence",
    "name": "Torch of the Silent God",
    "description": "A blackened torch that burns with eerie silence. When lit, it leaves no trace of its presence — perfect for evading surveillance or sneaking past guards.",
    "price": 2800,
    "icon": "🔥",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Creates a 30-foot silent zone for 10 seconds",
      "Grants +50% evasion against sound-based traps",
      "After use, all nearby enemies are stunned for 2 seconds if they detect noise"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "rogueport_vault_key": {
    "id": "rogueport_vault_key",
    "name": "Vault Key of the Forgotten Vault",
    "description": "The Vault Key of the Forgotten Vault is a rusted, ancient key made from a mix of iron and brass alloy. It bears an enigmatic symbol that tells of a hidden vault beneath the city’s oldest brothel, rumored to contain treasures lost for centuries. The key can only be used once, but when it clicks into place, it unlocks a trove of rare goods and secrets that have eluded many before you. Should the key fail, it will shatter, leaving behind nothing more than a memory of its past glory.",
    "price": 1000,
    "icon": "🗝",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Vault Entry",
      "One Use Only"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vault Entry",
        "rules": "Activates as an action to open one hidden vault beneath the city’s oldest brothel. The vault contains a random loot of rare goods and secrets, which can include gold, magical items, ancient scrolls, or other valuable relics. This effect is instantaneous and ends when the vault is opened."
      },
      {
        "title": "One Use Only",
        "rules": "The key can only be used once before it shatters into nothing but an ordinary piece of metal. If not used within 24 hours after receiving it, the key loses its magical properties and becomes a mundane object."
      }
    ],
    "levelRequirementReason": "Even for the lowest-level rogue, this key holds ancient power that only someone with basic skills can unlock.",
    "vendorReason": "Rogueport is known for its connections to hidden secrets and forgotten treasures, making them the perfect vendor for such a key.",
    "shippingDetail": "The key is delivered swiftly by Lakitu Drones, ensuring it arrives in prime condition.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The vault is opened or the key shatters",
      "charges": "One Use Only"
    },
    "priceReason": "Balanced to reflect its rare and powerful nature, ensuring it remains a valuable find without being overpowered.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T17:41:48.683568+00:00",
    "aiReviewedAt": "2026-07-23T17:41:48.683568+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_vault_key_07": {
    "id": "rogueport_vault_key_07",
    "name": "Vault Key 07",
    "description": "Vault Key 07 is an ancient iron key with a tarnished surface that whispers of forgotten secrets. Crafted from the alloy of long-lost blacksmiths, it opens a hidden vault beneath Raventree Manor’s lower levels. The key's edge has been etched with runes that glow faintly in dark places, and its weight feels heavier than it appears. In combat zones, it triggers a 10% chance for an ambush or trap, ensuring every use is perilous.",
    "price": 1000,
    "icon": "🔐",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Opens hidden vault door",
      "Triggers 10% ambush or trap"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vault Door Activation",
        "rules": "When used, the key opens a hidden vault door. The user must succeed on a DC 15 Dexterity (Stealth) check to avoid triggering any traps within the vault."
      },
      {
        "title": "Ambush or Trap Trigger",
        "rules": "If used in a combat zone, there is a 10% chance that an ambush or trap is triggered. The user can attempt a DC 15 Wisdom (Perception) check to notice this before it happens."
      }
    ],
    "levelRequirementReason": "This key requires no specific level as it is designed for all adventurers, from novices to veterans.",
    "vendorReason": "Rogueport is known for its extensive network of underground secrets and has legitimate ties with the manor’s hidden vaults.",
    "shippingDetail": "The key is delivered discreetly, but no tracking or delivery confirmation can be provided.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "After use",
      "charges": "Unlimited"
    },
    "priceReason": "The key's rarity, the hidden vault’s significance, and its potential for danger justify this price.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T17:41:33.954152+00:00",
    "aiReviewedAt": "2026-07-23T17:41:33.954152+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_vault_key_iron": {
    "id": "rogueport_vault_key_iron",
    "name": "Vault Key of Iron Thieves",
    "description": "The Vault Key of Iron Thieves is a gnarled, rusted key forged from the bones of a long-forgotten vault in Rogueport’s underworld. Its surface glows faintly with an otherworldly crimson hue that seems to flicker even when not in use. This key grants +30% damage to lockpicking attempts and can open any locked door or safe in the city, earning it its name among the crafty thieves of the district.",
    "price": 1000,
    "icon": "🗝",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+30% Lockpicking Damage",
      "Opens Any Locked Door or Safe"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Lockpicking",
        "rules": "When used during a lockpicking attempt, this key provides +30% damage. The effect is instantaneous and does not expend charges."
      },
      {
        "title": "Universal Key",
        "rules": "This key can open any locked door or safe in Rogueport’s underworld. Once used per day until recharged by a successful Crafting check at an Alchemist’s Workshop. Failure results in the key breaking and requiring replacement from a vendor."
      }
    ],
    "levelRequirementReason": "The key's utility is accessible to low-level characters who need its benefits early in their adventuring career.",
    "vendorReason": "Rogueport's underground economy thrives on the tools and resources needed by thieves, making this key a staple in the vendor’s inventory.",
    "shippingDetail": "Delivered within the hour via Pipe Express’ secret underground tunnels.",
    "usage": {
      "activation": "Used during lockpicking attempts or when opening doors and safes.",
      "duration": "Instantaneous effect; permanent until expended.",
      "endsWhen": "The key breaks after one use per day, requiring a Crafting check to replace it at an Alchemist’s Workshop.",
      "charges": "1/Day"
    },
    "priceReason": "This price reflects the unique crafting materials and the key's utility in Rogueport’s underworld.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-23T17:42:02.147942+00:00",
    "aiReviewedAt": "2026-07-23T17:42:02.147942+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_vault_key_ring": {
    "id": "rogueport_vault_key_ring",
    "name": "Vault Key Ring of the Forgotten Vault",
    "description": "The Vault Key Ring of the Forgotten Vault is a tarnished bronze ring, its surface etched with runes from forgotten vaults. It holds five keys that open ancient safehouses in different dimensions—Physical Shadowfell and Feywild. The ring whispers secrets of lost treasures to those who wield it, granting them insight into the nature of each lock. Its weight feels heavy as if carrying the memories of countless forgotten souls.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Dimensional Keys",
      "Locksmith’s Touch"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Dimensional Keys",
        "rules": "Each key grants advantage on a single lockpick check against a specific vault. The keys can only be used in the dimension they correspond to. Using an inappropriate key results in a -2 penalty."
      },
      {
        "title": "Locksmith’s Touch",
        "rules": "+2 to all lockpicking checks for 10 minutes, after which the ring must rest for 24 hours before use again."
      }
    ],
    "levelRequirementReason": "Requires a character with experience in navigating the underbelly of Rogueport.",
    "vendorReason": "The vendor at Rogueport is well-connected to the city’s underground, making them privy to such exotic items.",
    "shippingDetail": "Delivered with a special delivery that ensures it arrives in pristine condition.",
    "usage": {
      "activation": "A bonus action is required to use one of the keys.",
      "duration": "10 minutes for Locksmith’s Touch, until used on a lock.",
      "endsWhen": "After the duration or when an inappropriate key is used.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The ring's rarity and unique utility justify its cost in experience points.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-23T17:41:55.064582+00:00",
    "aiReviewedAt": "2026-07-23T17:41:55.064582+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_vault_keychain": {
    "id": "rogueport_vault_keychain",
    "name": "Vault Keychain of the Fallen God",
    "description": "A tarnished brass keychain shaped like a skull, its surface marred by age and tarnish. This relic of the Forgotten Gods can unlock hidden doors in all three underworld districts, revealing secrets long buried beneath the city's shadow. When used in combat zones, it triggers 'Wrath of the Fallen God'—a divine backlash that strikes all enemies with +100% damage for 2d6 turns or until they succeed on a DC 15 Strength save.",
    "price": 1000,
    "icon": "🔮",
    "stock": 0,
    "rarity": "rare",
    "effects": [
      "Unlock hidden doors",
      "Divine backlash in combat"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wrath of the Fallen God",
        "rules": "When used in a combat zone, triggers a divine backlash that deals +100% damage to all enemies for 2d6 turns. Ends when an enemy succeeds on a DC 15 Strength save or the effect expires after 3 rounds."
      },
      {
        "title": "Unlock hidden doors",
        "rules": "Can be used once per day to unlock any hidden door in the underworld districts, revealing secrets and treasures."
      }
    ],
    "levelRequirementReason": "This keychain is accessible to all who dare to venture into the underworld.",
    "vendorReason": "Rogueport specializes in exotic relics from the forgotten past, making this keychain a fitting addition to their inventory.",
    "shippingDetail": "Ships via Lakitu Drones, ensuring swift delivery straight to your door.",
    "usage": {
      "activation": "Standard action",
      "duration": "Instantaneous for unlocking; divine backlash lasts for 2d6 turns or until an enemy saves.",
      "endsWhen": "An enemy succeeds on a DC 15 Strength save or the effect expires after 3 rounds.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The price reflects its rarity and the divine power it wields, making it a sought-after relic.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:42:04.006689+00:00",
    "aiReviewedAt": "2026-07-23T17:42:04.006689+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_vault_of_voices": {
    "id": "rogueport_vault_of_voices",
    "name": "Vault of Voices",
    "description": "The Vault of Voices is a brass relic, hollowed to house the echoes of the dead. Crafted from the very bones of forgotten heroes, it whispers their final words into your ear when activated. Within its eerie glow, the last spoken words of any soul who died within ten meters resonate like a haunting lullaby. However, each use leaves you with a lingering sense of dread, as if the voices whisper secrets only to retreat just beyond hearing.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗝",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Echoes Final Words",
      "Causes Psychic Backlash"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Echoes Final Words",
        "rules": "When activated as a bonus action, this relic allows the user to hear the last spoken word of any soul who died within ten meters. This effect lasts for one round and requires no verbal or somatic components."
      },
      {
        "title": "Causes Psychic Backlash",
        "rules": "After three uses per day, the user must succeed on a DC 15 Wisdom saving throw or be stunned for one minute. The psychic backlash can be resisted with a successful save each time it is triggered."
      }
    ],
    "levelRequirementReason": "The Vault of Voices requires a minimum character level to handle its eerie power and prevent overuse.",
    "vendorReason": "Rogueport specializes in relics that aid in the pursuit of secrets, making this item a perfect fit for their inventory.",
    "shippingDetail": "The item is delivered by a Rakasha courier who ensures its safe arrival with a touch that leaves no trace behind.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "One Round",
      "endsWhen": "After Three Uses Per Day or With a Successful Save to Resist Psychic Backlash",
      "charges": "Three Charges"
    },
    "priceReason": "The Vault of Voices strikes a balance, offering powerful insight into recent deaths while maintaining a reasonable price.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T17:42:22.181045+00:00",
    "aiReviewedAt": "2026-07-23T17:42:22.181045+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_vaulted_tongue": {
    "id": "rogueport_vaulted_tongue",
    "name": "Vaulted Tongue",
    "description": "The Vaulted Tongue is an amulet shaped like a tongue, crafted from twisted obsidian and adorned with cryptic symbols. It allows its wearer to speak in the ancient language of the underworld, granting them access to forgotten knowledge and secret codes. By uttering certain coded phrases, the amulet enables bypassing security checks and unlocking hidden doors. The effect fades after 10 minutes of continuous use or if exposed to direct sunlight.",
    "price": 1000,
    "icon": "📜",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Underworld Tongue",
      "Security Bypass"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Underworld Tongue",
        "rules": "The wearer can speak in the ancient tongue of the underworld, allowing them to communicate with underground entities and decipher cryptic messages. This ability lasts for 10 minutes or until exposed to sunlight."
      },
      {
        "title": "Security Bypass",
        "rules": "By speaking certain coded phrases, the wearer can bypass security checks and unlock hidden doors. The effect is instantaneous but may be detected by advanced security systems with a successful DC 15 Wisdom (Insight) check."
      }
    ],
    "levelRequirementReason": "This amulet provides essential communication skills to adventurers of all levels, particularly useful for infiltration and negotiation.",
    "vendorReason": "Rogueport specializes in items that aid in espionage and undercover work, making the Vaulted Tongue a perfect fit for their inventory.",
    "shippingDetail": "The amulet is delivered discreetly via Shy Guy Smugglers, ensuring it arrives without drawing attention.",
    "usage": {
      "activation": "Passive while worn; requires speech to activate specific phrases for bypassing security.",
      "duration": "10 minutes or until exposed to sunlight",
      "endsWhen": "Exposure to sunlight or 10 minutes of use",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Vaulted Tongue is crafted from rare obsidian and imbued with powerful magical properties, making it a valuable tool for adventurers.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T17:42:30.990144+00:00",
    "aiReviewedAt": "2026-07-23T17:42:30.990144+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_venom_amber": {
    "id": "rogueport_venom_amber",
    "name": "Amber Fang of the Crimson Viper",
    "description": "The Amber Fang of the Crimson Viper is a fang carved from ancient amber, imbued with venom that can paralyze foes in an instant. This toothy relic, once wielded by a vengeful serpent, delivers a potent toxin upon impact, leaving targets immobile for 3 seconds and vulnerable to your blade or escape. Crafted by the alchemists of Rogueport, this weapon is as deadly as it is rare, making it indispensable for the sneaky rogue who values speed and precision over brute force.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐍",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Venomous Paralysis",
      "Armor-Piercing Strike"
    ],
    "vendor": "rogueport",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Venomous Paralysis",
        "rules": "When thrown or used in a melee attack, the Amber Fang injects a paralyzing toxin into the target. This effect renders the target immobile for 3 seconds, during which time it cannot take actions or reactions. The save DC is equal to 8 + the rogue's proficiency bonus + half their level. If successful, this effect ends immediately."
      },
      {
        "title": "Armor-Piercing Strike",
        "rules": "The fang delivers a particularly potent strike that ignores 25% of the target’s armor class. This effect is most effective against heavily armored foes, dealing an additional 1d6 damage to those wearing plate mail or greater."
      }
    ],
    "levelRequirementReason": "The fang's venom and piercing nature make it a tool for more experienced rogues who can effectively utilize its paralyzing effect.",
    "vendorReason": "Rogueport is known for its rare and exotic weapons, making the Amber Fang of the Crimson Viper an ideal addition to their inventory.",
    "shippingDetail": "The fangs are shipped in a specially designed padded case to protect them during transit.",
    "usage": {
      "activation": "Requires a bonus action or thrown as a ranged weapon (up to 30 feet)",
      "duration": "Instantaneous effect; lasts for 3 seconds",
      "endsWhen": "The save is successful or the duration expires",
      "charges": "Unlimited, recharged after long rest"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its rare crafting and potent effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:42:33.527176+00:00",
    "aiReviewedAt": "2026-07-23T17:42:33.527176+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_venom_blood_cloak": {
    "id": "rogueport_venom_blood_cloak",
    "name": "Venom Blood Cloak",
    "description": "The Venom Blood Cloak is a tattered, red-laced cloak that whispers of ancient poisons and forgotten battles. Crafted from the fibers of venom-drenched plants, it absorbs deadly toxins like a sponge, its faint red glow a subtle warning to those who dare approach. This cloak is perfect for infiltrating toxic lairs or escaping poison traps, as long as you can avoid direct hits that might rupture its protective weave.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Poison Absorption",
      "Faint Red Glow"
    ],
    "vendor": "rogueport",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Poison Absorption",
        "rules": "The cloak absorbs all poison damage taken by the wearer, mitigating it as if it were not dealt. The effect lasts for 10 minutes or until struck directly, at which point the cloak’s protective weave ruptures and no longer offers absorption."
      },
      {
        "title": "Faint Red Glow",
        "rules": "While active, the cloak emits a faint red glow that can be seen by enemies within 30 feet. This glow is not bright enough to blind or affect darkvision but serves as a subtle warning that the wearer is protected."
      }
    ],
    "levelRequirementReason": "The cloak's protective weave requires minimal magic, making it accessible to low-level rogues and adepts.",
    "vendorReason": "Rogueport specializes in gear for infiltrators and poison handlers, ensuring its stock includes items like the Venom Blood Cloak.",
    "shippingDetail": "The cloak is shipped carefully to avoid damage from rough handling or exposure to extreme environments.",
    "usage": {
      "activation": "Passive effect upon donning the cloak.",
      "duration": "10 minutes, or until struck directly by a melee attack that deals poison damage.",
      "endsWhen": "Struck by a direct hit dealing poison damage or after 10 minutes of continuous use.",
      "charges": "Unlimited charges; the cloak reabsorbs any absorbed poison."
    },
    "priceReason": "The cloak's rarity and the complexity of its weave justify this price, as it is a valuable tool for infiltrators and poison handlers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:42:54.784241+00:00",
    "aiReviewedAt": "2026-07-23T17:42:54.784241+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_venom_tincture": {
    "id": "rogueport_venom_tincture",
    "name": "Venom Tincture of the Broken Blade",
    "description": "A vial of dark green liquid with a faintly glowing edge, the Venom Tincture of the Broken Blade is said to have been brewed from the venom of assassins long forgotten. Injecting this potent elixir grants you a surge of adrenaline and temporarily dulls pain, though it comes at a price. The rush lasts only 15 seconds but during that time, your attacks can deal double damage on your first hit while there's a chance to inflict bleeding on enemies.",
    "price": 1000,
    "icon": "💉",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+2d6 damage on first hit",
      "20% chance for bleeding"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Double Damage First Hit",
        "rules": "When you make your first attack roll during a turn, you have a +2 bonus to the attack. On a hit, you deal an additional 2d6 damage."
      },
      {
        "title": "Bleeding Chance",
        "rules": "There is a 20% chance that any melee or ranged weapon attack made against you during the effect’s duration will cause you to bleed, dealing 1d4 necrotic damage at the start of each of your turns until the bleeding ends."
      }
    ],
    "levelRequirementReason": "This tincture's potent effects require a certain level of expertise and control.",
    "vendorReason": "The Rogueport vendors have specialized in such exotic poisons and elixirs for generations.",
    "shippingDetail": "Ships via Rakasha’s ethereal couriers, ensuring swift delivery within a week of purchase.",
    "usage": {
      "activation": "Drink the tincture as an action",
      "duration": "15 seconds",
      "endsWhen": "The effect ends when you take damage or lose consciousness",
      "charges": "Unlimited uses"
    },
    "priceReason": "The rarity and potency of the ingredients used in its creation justify this price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:42:47.354884+00:00",
    "aiReviewedAt": "2026-07-23T17:42:47.354884+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_venom_tongue": {
    "id": "rogueport_venom_tongue",
    "name": "Venom Tongue",
    "description": "The Venom Tongue is a cursed, serpentine appendage crafted from the venomous bite of a toad and a smuggled poison viper. Its whispers can be heard from fifty feet away and its touch leaves an enemy poisoned for three seconds, dealing damage equal to twenty percent of their maximum hit points. However, if not handled with care, it might backfire, poisoning the wielder instead in a deadly cascade of toxins.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Venomous Lick",
      "Toxic Backlash"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Venomous Lick",
        "rules": "As an action, the user can lick an enemy within 30 feet. The target is poisoned for 3 seconds and takes damage equal to 20% of their maximum hit points. This effect has a short cooldown."
      },
      {
        "title": "Toxic Backlash",
        "rules": "There's a 15% chance that each time the user uses Venomous Lick, they suffer a dose of poison themselves. The user must make a DC 14 Constitution saving throw or become poisoned for 1 minute."
      }
    ],
    "levelRequirementReason": "The Venom Tongue requires at least level 3 to wield effectively and avoid the toxic backlash.",
    "vendorReason": "Rogueport specializes in exotic and cursed items, making the Venom Tongue a fitting addition to their inventory.",
    "shippingDetail": "Due to its volatile nature, Pipe Express ships the Venom Tongue with special handling and requires an additional day for delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous; lasts until the end of the target's next turn or is dispelled by another effect.",
      "endsWhen": "The poison effect ends when the target makes a successful saving throw, is healed, or dies.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects its cursed nature and the exotic materials used in crafting it.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:43:03.506654+00:00",
    "aiReviewedAt": "2026-07-23T17:43:03.506654+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_viper_tongue": {
    "id": "rogueport_viper_tongue",
    "name": "Viper Tongue of the Underworld",
    "description": "The Viper Tongue of the Underworld is a cursed whispering tongue made from the hardened scales of an underworld serpent. Crafted in the forges of forgotten necromancers, it mimics any voice or language with chilling precision, but its use leaves you disoriented and lost. This artifact's whispers can deceive even the most wary interrogator, but after 30 minutes, your sense of direction is irreparably marred by the serpent's malevolent influence.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐍",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Voice Mimicry",
      "Sense of Direction Loss"
    ],
    "vendor": "rogueport",
    "shippedBy": "Koopa Postal Express",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Voice Mimicry",
        "rules": "The user can mimic any voice or language for up to one hour. This effect requires an action to activate and does not require concentration. It has no save DC, but the target must be within 30 feet of the user."
      },
      {
        "title": "Sense of Direction Loss",
        "rules": "After using this item for 30 minutes, you lose your sense of direction until dawn. This effect can be mitigated by a successful Wisdom (Perception) check with a DC of 15. You regain the ability to navigate normally after a long rest."
      }
    ],
    "levelRequirementReason": "Requires at least second-level proficiency to resist its disorienting effects.",
    "vendorReason": "The Rogue Port's underground network makes it the perfect place for such a cursed artifact.",
    "shippingDetail": "Due to the delicate nature of this item, Koopa Postal ensures expedited delivery with all packages insured against loss or damage.",
    "usage": {
      "activation": "Action",
      "duration": "Up to one hour per use",
      "endsWhen": "The duration ends naturally after use or when the user loses their sense of direction due to overuse.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this cursed tongue offers a significant advantage in espionage and interrogation without being overpowered.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-23T17:43:05.054835+00:00",
    "aiReviewedAt": "2026-07-23T17:43:05.054835+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_void_piercer": {
    "id": "rogueport_void_piercer",
    "name": "Whispering Dagger",
    "description": "The Whispering Dagger, forged from the shadowy edge of Almost at the Edge, whispers secrets of chaos into the ears of those nearby. Its blade cuts through ethereal foes like a breeze through leaves, and when it strikes, the air hums with the sound of impending doom. Upon each strike, there is a chance to inflict Edgebleed—a lingering wound that saps vitality over time, making the enemy's strength wane in the face of your weapon.",
    "category": "equipment",
    "price": 1000,
    "icon": "💀",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Inflicts additional damage on ethereal foes.",
      "Has a chance to inflict Edgebleed"
    ],
    "vendor": "rogueport",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Edgebleed",
        "rules": "When you hit an enemy with the Whispering Dagger, there is a 20% chance it inflicts Edgebleed. The target takes an additional 1d6 necrotic damage at the start of its next turn for each level you possess, up to a maximum of 5d6. This effect ends when the target is reduced to 0 hit points or if the target successfully saves against this effect with a DC equal to 8 + your proficiency bonus + your Dexterity modifier."
      },
      {
        "title": "Additional Damage",
        "rules": "The Whispering Dagger deals an additional 1d6 damage when used against ethereal foes. This extra damage is not subject to resistance or immunity."
      }
    ],
    "levelRequirementReason": "Requires level 6 to wield the dagger effectively, as it taps into chaotic energies.",
    "vendorReason": "Rogueport is a hub for exotic and dangerous items, making it fitting that they sell a weapon of chaos like the Whispering Dagger.",
    "shippingDetail": "Ships via Noki Coral Fleet, known for their swift and reliable deliveries through treacherous waters.",
    "usage": {
      "activation": "Requires a bonus action to activate.",
      "duration": "Instantaneous; the effects last until expended or interrupted.",
      "endsWhen": "Exhausted after 5 uses per short rest.",
      "charges": "5 charges"
    },
    "priceReason": "The balanced XP price reflects its rarity and the chaotic energy it channels.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T17:43:57.333260+00:00",
    "aiReviewedAt": "2026-07-23T17:43:57.333260+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_wet_glass": {
    "id": "rogueport_wet_glass",
    "name": "Wet Glass of the Broken Lullaby",
    "description": "The Wet Glass of the Broken Lullaby is a shard of shattered glass, its surface etched with the reflection of liquid moonlight. When held, it amplifies your fear aura, causing nearby foes to tremble in dread. The reflections within are not mere images but glimpses into your deepest, darkest memories—twisted and distorted by time’s passage. This relic was crafted in the shadowed forges of Rogueport, where mirrors turn into weapons of the mind.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌙",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Distorts the wielder's reflection",
      "Amplifies fear aura"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Distorted Reflections",
        "rules": "When you activate this item, it projects a distorted image of yourself within 10 feet. Creatures within line of sight must succeed on a DC 15 Wisdom saving throw or become frightened for 1 minute."
      },
      {
        "title": "Amplified Fear Aura",
        "rules": "While holding the Wet Glass, you gain advantage on saving throws against fear effects and have a +2 bonus to Charisma (Intimidation) checks. This effect lasts until your next long rest."
      }
    ],
    "levelRequirementReason": "Crafted from Rogueport’s shadowy forges, this item requires a level 6 character to wield its power.",
    "vendorReason": "Rogueport is known for its dark and twisted artifacts, making it the perfect vendor for such a macabre relic.",
    "shippingDetail": "Ships via Lakitu Drones' express service, ensuring safe delivery within one week.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "Until your next long rest or until the item is destroyed",
      "endsWhen": "Your next long rest or when the item is destroyed",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its rare crafting materials and unique properties.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T17:43:39.240466+00:00",
    "aiReviewedAt": "2026-07-23T17:43:39.240466+00:00",
    "aiReviewVersion": 1
  },
  "rope_ladder": {
    "id": "rope_ladder",
    "name": "Vine Ladder",
    "description": "A ladder made of sturdy vines. 50ft long.",
    "category": "equipment",
    "price": 5000,
    "icon": "🪜",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Climbing aid",
      "Bio-degradable"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Sack",
    "levelRequirement": 1
  },
  "rosalina_wand": {
    "id": "rosalina_wand",
    "name": "Rosalina's Wand",
    "description": "Rosalina's Wand hums with the power of the cosmos, its body a polished ebony cane adorned with celestial runes that glow faintly under starlight. This legendary wand not only grants protection but also commands the cosmic forces to your aid. When struck by an enemy, it can cast Shield, boosting your armor class by +5 as a reaction, and it can summon a Luma ally to dance beside you in battle, providing both morale boost and tactical support.",
    "category": "premium",
    "price": 1000,
    "icon": "🌟",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Shield",
      "Luma Ally"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Star Delivery",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Shield",
        "rules": "As a reaction when you are hit by an attack roll, you can cast Shield. This grants you +5 to your AC until the start of your next turn."
      },
      {
        "title": "Luma Ally",
        "rules": "Once per day, you may summon a Luma ally. The Luma is a CR 1 celestial creature that fights by your side for one hour or until it falls in combat. It has a base AC of 14 and deals 5 (1d6 + 2) force damage with its bite."
      }
    ],
    "levelRequirementReason": "To wield Rosalina's Wand, you must be at least level 10 to effectively utilize the cosmic forces it commands.",
    "vendorReason": "The Comet Observatory holds exclusive artifacts that have been discovered during their astronomical expeditions and studies of celestial bodies.",
    "shippingDetail": "Ships via Star Delivery with a special courier, ensuring the wand arrives in pristine condition.",
    "usage": {
      "activation": "Shield is cast as a reaction to an attack. Luma Ally can be summoned once per day as an action.",
      "duration": "Shield lasts until your next turn. Luma Ally remains for one hour or until it falls in combat.",
      "endsWhen": "Shield ends when you take the first action on your next turn. Luma Ally ends if it is reduced to 0 hit points, or if you dismiss it as an action.",
      "charges": "Luma Ally can be summoned once per day."
    },
    "priceReason": "The price reflects the cosmic energies and rare materials required to craft this legendary wand, balancing its powerful effects with a reasonable cost.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-23T17:44:02.717855+00:00",
    "aiReviewedAt": "2026-07-23T17:44:02.717855+00:00",
    "aiReviewVersion": 1
  },
  "rotten_mush": {
    "id": "rotten_mush",
    "name": "Rotten Mushroom",
    "description": "The Rotten Mushroom exudes an unmistakable stench of decomposing organic matter, its cap a sickly green hue that gleams under dim light like rotting flesh in a crypt. When consumed, it offers a fleeting moment of respite, restoring 1 hit point to the eater; however, this reprieve comes at a price—a cascade of nausea follows, leaving the imbiber Poisoned for the next ten minutes with a DC 13 Constitution saving throw to negate.",
    "category": "consumables",
    "price": 1000,
    "icon": "🤢",
    "stock": 99,
    "rarity": "common",
    "effects": [
      "Restore 1 HP",
      "Poisoned for 10 minutes (DC 13 CON)"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Garbage Chute",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restoration of Health",
        "rules": "When consumed, the Rotten Mushroom provides a single use that restores 1 hit point to the consumer. This effect is instantaneous and does not require any action."
      },
      {
        "title": "Poisoned State",
        "rules": "Upon consuming the Rotten Mushroom, the consumer becomes Poisoned for the next ten minutes. The condition lasts until a successful DC 13 Constitution saving throw is made. There are no other effects or penalties associated with this condition."
      }
    ],
    "levelRequirementReason": "This item can be consumed by any level 1 character, offering a basic utility that can aid in survival situations.",
    "vendorReason": "The Rotten Mushroom is a staple of the Rogueport Black Market due to its low cost and the occasional desperate circumstances in which it finds willing buyers.",
    "shippingDetail": "Delivered via a high-risk, often smelly route through the city’s refuse system, this mushroom is typically available within an hour of purchase.",
    "usage": {
      "activation": "Eaten as a free action",
      "duration": "Instantaneous; lasts ten minutes if Poisoned",
      "endsWhen": "Consume a successful Constitution saving throw or after ten minutes",
      "charges": "Unlimited, one use per day"
    },
    "priceReason": "The price of the Rotten Mushroom has been increased to reflect its more significant utility and the potential for poisoning, balancing it with other common consumables.",
    "priceOriginal": 500,
    "priceReviewedAt": "2026-07-23T17:44:07.884015+00:00",
    "aiReviewedAt": "2026-07-23T17:44:07.884015+00:00",
    "aiReviewVersion": 1
  },
  "royal_feast": {
    "id": "royal_feast",
    "name": "Royal Feast (For 100 Guests)",
    "description": "The Royal Feast for 100 Guests is a grand, enchanted banquet that unfolds like clockwork, complete with live entertainment and an array of magical feasts fit for royalty. The savory dishes are not only delectable but also imbued with potent magic; guests who partake gain +2 to all ability checks for one day. The feast can improve relations with important factions, as the aroma of the meal seems to speak directly to their hearts and minds. Any leftovers from the feast are preserved in a manner that ensures they never spoil, even after days of feasting.",
    "category": "premium",
    "price": 1000,
    "icon": "🍽️",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Enhanced Ability Checks",
      "Faction Relations Improvement"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Floating Banquet Hall",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Ability Checks",
        "rules": "All guests who partake in the feast gain a +2 bonus to all ability checks for one day. This effect is instantaneous upon consumption and lasts until the start of their next long rest."
      },
      {
        "title": "Faction Relations Improvement",
        "rules": "The feast can significantly improve relations with important factions, granting a +1 bonus to Diplomacy or Intimidation checks made against such groups. This effect is active for one week from the day the feast begins and ends when the bonus expires."
      }
    ],
    "levelRequirementReason": "The feast's enchanted nature requires a basic understanding of magic.",
    "vendorReason": "The Gilded Gryphon specializes in rare feasts and banquets, ensuring the quality and enchantments are unmatched.",
    "shippingDetail": "The feast is delivered by a magically levitating banquet hall that arrives with its own entertainment troupe.",
    "usage": {
      "activation": "Instantaneous upon consumption; no activation required, simply partake in the feast.",
      "duration": "1 day for ability checks bonus; one week for faction relations improvement until expiration of their bonuses.",
      "endsWhen": "The duration ends as per specified times: end of long rest and when the one-week period is over.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects a balanced cost considering the magical enhancements, entertainment value, and the quality of ingredients.",
    "priceOriginal": 150000,
    "priceReviewedAt": "2026-07-23T17:45:07.956661+00:00",
    "aiReviewedAt": "2026-07-23T17:45:07.956661+00:00",
    "aiReviewVersion": 1
  },
  "royal_pardon": {
    "id": "royal_pardon",
    "name": "Royal Pardon",
    "description": "The Royal Pardon is a parchment of deepest vellum, signed and sealed by the crown. Upon its activation, all charges against the bearer are instantly cleared, both in the eyes of the law and through powerful enchantments that enforce the pardon's decree. While it may anger those wronged, it grants immediate and irrevocable freedom from prosecution for any crimes or bounties. However, its wielder must be wary; the power to absolve comes with a price, as the original victims' rights are nullified indefinitely.",
    "category": "premium",
    "price": 1000,
    "icon": "📜",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Clears all criminal charges",
      "Magically enforces the pardon"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Royal Seal Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Pardon",
        "rules": "When activated by a royal official or through proper ceremony, this parchment instantly clears all criminal charges against its bearer. The effect is immediate and cannot be resisted. Once used, it can never be recharged."
      },
      {
        "title": "Magical Enforcement",
        "rules": "The pardon's power compels the enforcement of its decree by any authorities present within a 50-foot radius. This includes clearing bounties and dismissing charges. The effect lasts until the bearer is apprehended by lawful means, at which point the effects are nullified."
      }
    ],
    "levelRequirementReason": "The power to invoke justice with such finality requires a minimum level of understanding and trust in the legal system.",
    "vendorReason": "Wario Direct handles all royal affairs, including the distribution of official documents like the Royal Pardon.",
    "shippingDetail": "Delivered by trusted Royal Seal Couriers; delivery is swift and secure.",
    "usage": {
      "activation": "Requires a formal ceremony or presentation by a royal official.",
      "duration": "Instantaneous, lasting until the bearer is apprehended.",
      "endsWhen": "The bearer is apprehended lawfully.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP as it provides a significant and powerful benefit, but not so great as to unbalance the game.",
    "priceOriginal": 200000,
    "priceReviewedAt": "2026-07-23T17:44:42.375404+00:00",
    "aiReviewedAt": "2026-07-23T17:44:42.375404+00:00",
    "aiReviewVersion": 1
  },
  "royal_sticker": {
    "id": "royal_sticker",
    "name": "Royal Sticker (Crown)",
    "description": "The Royal Sticker, a shimmering crown decal forged by royal alchemists, allows you to 'paperize' reality. Place it on any inanimate object, and it flattens into a 2D sticker, but only for moments before it reasserts its regal form. With a flick of your wrist, the sticker pastes itself into the world, permanently transforming that area into a miniature replica of the crown's domain, complete with a sassy fairy companion named Kersti who insists on her curse. Beware: the sticker is vulnerable to fire and water, which can extinguish it or melt its royal form.",
    "category": "forbidden",
    "price": 1000,
    "icon": "👑",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Royal Flattening",
      "Imbued Reality"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Album Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Royal Flattening",
        "rules": "As an action, you flatten any inanimate object into a 2D sticker. The object must be no larger than your size category and cannot be living or magical. This effect is instantaneous but only usable once per short rest."
      },
      {
        "title": "Imbued Reality",
        "rules": "As an action, you paste the Royal Sticker into a 2D area up to 10 feet in diameter. The sticker permanently transforms that area into a miniature replica of a crown's domain, complete with Kersti the sassy fairy. This effect lasts indefinitely until dispelled by magic or destroyed."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to ensure players understand and use the item responsibly within their adventuring party.",
    "vendorReason": "The Rogueport Black Market is known for its rare and powerful items, making it an ideal location for this unique artifact.",
    "shippingDetail": "Delivered by Album Courier within one week of purchase. The sticker must be inspected in person before activation to ensure authenticity.",
    "usage": {
      "activation": "Royal Flattening: Action; Imbued Reality: Action",
      "duration": "Instantaneous for Royal Flattening, indefinite for Imbued Reality",
      "endsWhen": "Destroyed by fire or water, dispelled by magic, or removed manually",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The sticker's rarity and unique effects justify its value in terms of both power and novelty.",
    "priceOriginal": 650000,
    "priceReviewedAt": "2026-07-23T17:44:37.694899+00:00",
    "aiReviewedAt": "2026-07-23T17:44:37.694899+00:00",
    "aiReviewVersion": 1
  },
  "rub_for_a_genie_or": {
    "id": "rub_for_a_genie_or",
    "name": "Wario's Wish-Granting Lamp",
    "description": "Wario's Wish-Granting Lamp is a dusty, brass lamp that exudes an aura of mischief. Rubbing it summons either Wario himself to grant whimsical or mischievous wishes, or a minor boon that can be in the form of gold coins worth up to 10 gp. The lamp's age is evident by its chipped paint and tarnished surface, which adds to its charm but also brings with it disadvantages—those who rub it must roll with disadvantage on their Persuasion checks when trying to convince others of Wario's benevolence.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏺",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Rub: Random Wario Response",
      "Minor Boon or Mischievous Wish"
    ],
    "vendor": "wario_land",
    "shippedBy": "Rub Rush Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rub: Random Wario Response",
        "rules": "Activating the lamp by rubbing it can result in either Wario appearing to grant a wish or providing a minor boon. The DM rolls a d20, on an even roll Wario appears, and on an odd roll a minor boon (worth up to 10 gp) is granted. Wario's appearance requires the user to make a Persuasion check with disadvantage."
      },
      {
        "title": "Minor Boon or Mischievous Wish",
        "rules": "The minor boon can be in the form of gold coins worth up to 10 gp, and it appears immediately after rubbing the lamp. The boon is a one-time use effect that cannot be repeated through further interactions with the lamp."
      }
    ],
    "levelRequirementReason": "This lamp can be used by adventurers of any level as its whimsical nature makes it accessible to all.",
    "vendorReason": "Wario Land is known for his collection of quirky and mischievous items, making the Wario's Wish-Granting Lamp a perfect addition to his inventory.",
    "shippingDetail": "The lamp is shipped via Rub Rush Express, ensuring quick delivery with a special delivery confirmation charm that prevents any tampering.",
    "usage": {
      "activation": "Standard action by rubbing the lamp",
      "duration": "Instantaneous effect",
      "endsWhen": "Once used up or if Wario decides to play a prank",
      "charges": "Unlimited uses, but only one boon per day"
    },
    "priceReason": "The lamp's unique and whimsical nature, combined with its accessible price point, makes it a fair value for players looking for something out of the ordinary.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-23T17:44:26.048536+00:00",
    "aiReviewedAt": "2026-07-23T17:44:26.048536+00:00",
    "aiReviewVersion": 1
  },
  "ruin_powder": {
    "id": "ruin_powder",
    "name": "Ruin Powder",
    "description": "Ruin Powder is a fine, shimmering dust derived from ancient, crumbling ruins. When thrown, it creates an illusory mist that snares and confounds foes within its radius for moments of disarray. This powder's origin lies in the heart of forgotten cities where time has ceased to flow, and the very air holds secrets of old. Its effects are as fleeting as they are potent, leaving enemies struggling with a sense of déjà vu.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧂",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Illusory Mist",
      "Confusion"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Courier of Dust",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Illusory Mist",
        "rules": "When thrown, the Ruin Powder creates an illusory mist within a 20-foot radius. Targets in this area must make a CON saving throw (DC 14) or be incapacitated for 1 minute as the mist distorts their perception."
      },
      {
        "title": "Confusion",
        "rules": "For 1 hour, targets who fail the save are also affected by confusion. They have disadvantage on attack rolls and ability checks until the effect ends."
      }
    ],
    "levelRequirementReason": "This powder's potency is balanced for lower-level characters to complement their abilities.",
    "vendorReason": "The Shamans of the Ruins are well-acquainted with the mysteries of ancient artifacts and powders like this one.",
    "shippingDetail": "Ships via a courier who can navigate narrow, forgotten paths.",
    "usage": {
      "activation": "Throw as an action within 20 feet.",
      "duration": "1 hour + 1 minute per failed save (up to 3 hours).",
      "endsWhen": "The effect ends when all targets succeed their saves or after 3 hours.",
      "charges": "Unlimited, recharged by dusk."
    },
    "priceReason": "Balanced price considering its duration and effects that enhance a party's combat flexibility without being overpowered.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T17:45:05.381224+00:00",
    "aiReviewedAt": "2026-07-23T17:45:05.381224+00:00",
    "aiReviewVersion": 1
  },
  "rune_engraved_shield": {
    "id": "rune_engraved_shield",
    "name": "Rune-Engraved Shield (Defensive)",
    "description": "The rune-engraved shield is a heavy steel shield, its surface etched with intricate dwarven runes that shimmer faintly in moonlight. Crafted by the renowned Rune Smiths of Ironfist Hold, this shield not only absorbs magical attacks but also grants its wielder ancient wisdom and fortitude. Once per short rest, it can absorb up to 50 spell levels from a single attack, storing them until fully recharged under the light of the full moon.",
    "price": 1000,
    "icon": "🛡️",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Absorbs Spell Levels",
      "Recharges Under Moonlight"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "Mountain Caravan",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Spell Absorption",
        "rules": "When this shield is struck by a magical attack, it absorbs up to 50 spell levels from the attack. The absorbed energy can be used to power the shield's recharge process under moonlight."
      },
      {
        "title": "Moonlit Recharge",
        "rules": "The shield regenerates its spell absorption capacity every night under full moonlight, but only after absorbing a total of 50 spell levels during that cycle. A failed Concentration (DC 18) check can prevent the recharge if the wielder is distracted."
      }
    ],
    "levelRequirementReason": "Crafted by the legendary Rune Smiths, this shield requires a character of at least level 14 to fully harness its power.",
    "vendorReason": "The dwarven smiths who create these shields are known for their mastery of ancient magic and runes, making them the perfect source for such an item.",
    "shippingDetail": "Ships via the Mountain Caravan, which ensures safe delivery through treacherous terrains. Delivery time varies but is expedited during the full moon cycle.",
    "usage": {
      "activation": "Passive effect; activated by absorbing a magical attack.",
      "duration": "Instantaneous absorption and recharge.",
      "endsWhen": "Recharged under moonlight or when destroyed.",
      "charges": "Unlimited, as long as it is recharged."
    },
    "priceReason": "The balanced XP price reflects the shield's rarity and the significant power boost it provides to a character of the required level.",
    "priceOriginal": 390000,
    "priceReviewedAt": "2026-07-23T17:45:34.257888+00:00",
    "aiReviewedAt": "2026-07-23T17:45:34.257888+00:00",
    "aiReviewVersion": 1
  },
  "runescape_rune_set": {
    "id": "runescape_rune_set",
    "name": "Rune Set",
    "description": "This rune set is a finely crafted collection of elemental runes, each glowing with an otherworldly light. Crafted from volcanic glass and enchanted by ancient druids, these runes are said to have been found in the heart of Mount Kasali. Each set contains ten runes capable of casting fire bolts (1d8+1 damage), earth bolts (1d6+1 damage), or ice bolts (1d4+1 damage). Craft more with the help of mining and druidic lore.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔮",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Elemental Bolt",
      "Craft More"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Windborn Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elemental Bolt",
        "rules": "Cast an elemental bolt as a bonus action. Choose fire, earth, or ice bolts. Each bolt deals 1d8+1 damage to one target within 30 feet. The spell ends if you cast another elemental bolt or if your next short or long rest begins."
      },
      {
        "title": "Craft More",
        "rules": "After completing a successful mining check, gain an additional rune from this set. This effect can be used once per day and is exhausted after use."
      }
    ],
    "levelRequirementReason": "Beginners can start crafting with the basics of elemental magic.",
    "vendorReason": "The Gilded Gryphon specializes in enchanted items crafted by druids and ancient artifacts.",
    "shippingDetail": "Delivered swiftly through the air currents, ensuring your runes arrive in perfect condition.",
    "usage": {
      "activation": "Bonus action for casting an elemental bolt; once per day for crafting more runes.",
      "duration": "Instantaneous; ends after one use or if a short/long rest is taken.",
      "endsWhen": "After casting another elemental bolt or at the start of your next short or long rest.",
      "charges": "Unlimited, but exhausted daily."
    },
    "priceReason": "Balanced to offer a solid starting point for aspiring mages without being overpowered.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T17:44:56.002462+00:00",
    "aiReviewedAt": "2026-07-23T17:44:56.002462+00:00",
    "aiReviewVersion": 1
  },
  "rust_monkey_wrench": {
    "id": "rust_monkey_wrench",
    "name": "Rust Monkey Wrench",
    "description": "The Rust Monkey Wrench is a gnarled, corroded tool that seems to have been forged in the heart of a smoky forge. It hums softly as trained rhesus monkeys appear beside it, ready to wreak havoc on any mechanical construct within reach. These mischievous monkeys are known for their relentless sabotage, dealing damage and causing unintended destruction with every wrench turn. The wrench's power comes from a long-lost tribe of monkey tinkerers who once thrived in the jungles surrounding an ancient forge.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔧",
    "stock": 6,
    "rarity": "rare",
    "effects": [
      "Summons",
      "Sabotage"
    ],
    "vendor": "beastmaster_tools",
    "shippedBy": "Monkey Business Shipping",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Summon Rust Monkeys",
        "rules": "As a bonus action, you can activate the wrench to summon 1d3 rhesus monkeys. These trained simians have +5 to their Dexterity (Stealth) and are proficient with simple melee weapons. They remain active for 1 minute or until they sabotage at least one construct. Each monkey deals 1d4+2 damage per turn and has a 20% chance of accidentally damaging an item you own instead."
      },
      {
        "title": "Sabotage Constructs",
        "rules": "The summoned monkeys target constructs within 30 feet, attempting to disable or damage them. They can be commanded to focus on specific areas but cannot enter the space of a creature with an Intelligence score higher than 2. Once the duration ends or all charges are exhausted, they return to their resting place in the wrench."
      }
    ],
    "levelRequirementReason": "Summoning trained monkeys requires a certain level of experience and understanding of their behavior.",
    "vendorReason": "The Beastmaster Tools vendor specializes in unique, animal-themed gear that is often sought after by adventurers who need to handle various fauna.",
    "shippingDetail": "Monkeys are shipped securely and monitored until they reach their destination. A small crate of bananas must accompany the monkeys during transport.",
    "usage": {
      "activation": "Bonus action to summon, reaction to end sabotage if interrupted by a creature with an Intelligence score higher than 2.",
      "duration": "1 minute or until all constructs are disabled",
      "endsWhen": "Target construct is disabled, sabotaged, or the duration ends",
      "charges": "Recharge after 8 hours of rest"
    },
    "priceReason": "The wrench's rarity and unique utility justify its moderate price.",
    "priceOriginal": 15800,
    "priceReviewedAt": "2026-07-23T17:45:42.118395+00:00",
    "aiReviewedAt": "2026-07-23T17:45:42.118395+00:00",
    "aiReviewVersion": 1
  },
  "rusted_starman": {
    "id": "rusted_starman",
    "name": "Rusted Starman",
    "description": "The Rusted Starman is a once-mighty relic of celestial origin, now tarnished by aeons of space travel. Its surface is riddled with scrapes and dents, yet it still hums faintly as if recalling the speed it once possessed. This relic grants you a fleeting moment of invulnerability to physical harm, but at the cost of your mobility for hours afterward. The cosmos itself seems to watch over its use, occasionally sending cosmic scavengers to claim it.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌠",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Cosmic Invulnerability",
      "Mobility Sacrifice"
    ],
    "vendor": "lunar_auction",
    "shippedBy": "Antique Box Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cosmic Invulnerability",
        "rules": "When activated as an action, you gain immunity to all physical damage for a full round. Any attacker who hits you during this time must succeed on a DC 15 Strength saving throw or drop one weapon or piece of equipment of their choice."
      },
      {
        "title": "Mobility Sacrifice",
        "rules": "After using the relic, you become immobile and exhausted for 24 hours. You can take no actions, only move as a free action up to half your speed, and must make a DC 15 Constitution saving throw at the end of each long rest to recover from exhaustion."
      }
    ],
    "levelRequirementReason": "This relic requires minimal magical power but still offers a significant boost in combat. Suitable for beginning adventurers who can handle its risks.",
    "vendorReason": "Lunar Auction, known for rare and ancient artifacts, acquired this relic from a distant star trader.",
    "shippingDetail": "Ships via Antique Box Express; delivery can take up to one week due to the item's delicate nature.",
    "usage": {
      "activation": "Activate as an action.",
      "duration": "Immunity lasts for a full round (6 seconds).",
      "endsWhen": "The round ends or you are hit by an attack.",
      "charges": "Unlimited, but only one use per day."
    },
    "priceReason": "The Rusted Starman's price reflects its rarity and the risk it poses to the user, making it a valuable yet potentially dangerous tool for adventurers.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-23T17:45:49.824955+00:00",
    "aiReviewedAt": "2026-07-23T17:45:49.824955+00:00",
    "aiReviewVersion": 1
  },
  "rusty_dwarven_lockpick_set": {
    "id": "rusty_dwarven_lockpick_set",
    "name": "Rusty Dwarven Lockpick Set",
    "description": "The Rusty Dwarven Lockpick Set is a set of ancient picks forged in a long-lost dwarven armory. The metal is worn from centuries of use, yet the craftsmanship remains unmatched. These picks emit a faint glow when near trapped doors and are renowned for their ability to open mundane locks with ease. However, they break on a natural roll of 1 but can be repaired at any blacksmith shop for 50 gold pieces.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔑",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Mundane Lock Opening",
      "Repairable"
    ],
    "vendor": "undermountain_trader",
    "shippedBy": "Mail Cart Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mundane Lock Opening",
        "rules": "When used to open a mundane lock (DC 15 or lower), the user gains advantage on Sleight of Hand checks. The lockpick set can be used once per short rest."
      },
      {
        "title": "Repairable",
        "rules": "If broken, it can be repaired at any blacksmith shop for 50 gold pieces and can only be used again after a long rest."
      }
    ],
    "levelRequirementReason": "The set is crafted to be usable by anyone with basic locksmithing skills.",
    "vendorReason": "The Undermountain Trader has connections with various blacksmiths and sells a wide range of equipment, including this rare dwarven set.",
    "shippingDetail": "Ships via the Mail Cart Courier, ensuring safe arrival within a week.",
    "usage": {
      "activation": "As a bonus action during an attempt to open a mundane lock.",
      "duration": "Instantaneous effect; lasts until the lock is opened or the check fails.",
      "endsWhen": "The lock opens successfully or the user fails the Sleight of Hand check.",
      "charges": "Unlimited uses per day, but only once per short rest."
    },
    "priceReason": "The set's rarity and unique crafting make it a valuable tool for adventurers needing to bypass mundane locks quickly.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T17:45:21.524984+00:00",
    "aiReviewedAt": "2026-07-23T17:45:21.524984+00:00",
    "aiReviewVersion": 1
  },
  "rusty_sword_sharpening_stone": {
    "id": "rusty_sword_sharpening_stone",
    "name": "Rusty Sword Sharpening Stone",
    "description": "The Rusty Sword Sharpening Stone is a weathered tool crafted from ancient iron and imbued with the spirits of forgotten bladesmiths. It honours its humble origins, yet remains a formidable aid to any warrior. When applied to a weapon, it grants +1 bonus to attack rolls for 1 hour but beware, if left too long in the stone's embrace, your blade may succumb to a minor rust, reducing all damage dealt by one die size until cleaned.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔️",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Sharpening Edge",
      "Rust Hazard"
    ],
    "vendor": "blacksmiths_scrap",
    "shippedBy": "Oiled Cloth Wrap",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sharpening Edge",
        "rules": "Activate as an action. The target weapon gains +1 to attack rolls for the next hour. This effect can be used once per day."
      },
      {
        "title": "Rust Hazard",
        "rules": "If not cleaned within 24 hours, there is a 10% chance that the weapon gains minor rust (disadvantage on all damage rolls until cleaned)."
      }
    ],
    "levelRequirementReason": "This stone requires no specific level as it is designed to assist any warrior in need of sharpening their blade.",
    "vendorReason": "Blacksmiths Scrap are renowned for their expertise in weapons and tools, making them the perfect vendor for such an item.",
    "shippingDetail": "Carefully packed to prevent further rusting during transit.",
    "usage": {
      "activation": "Activate as a bonus action.",
      "duration": "1 hour.",
      "endsWhen": "The buff ends when the time expires or if the weapon gains minor rust.",
      "charges": "Unlimited, but can be used only once per day."
    },
    "priceReason": "This price reflects a balanced cost for an item that requires daily maintenance and provides significant combat utility.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T17:45:35.565685+00:00",
    "aiReviewedAt": "2026-07-23T17:45:35.565685+00:00",
    "aiReviewVersion": 1
  },
  "saddle_arabia_caravan_guide_service": {
    "id": "saddle_arabia_caravan_guide_service",
    "name": "Saddle Arabia Caravan Guide Service",
    "description": "The Saddle Arabia Caravan Guide Service is a finely crafted leather harness adorned with intricate brass fittings and etched with ancient Arabian symbols. Crafted by the nomadic tribes of the desert, it ensures safe passage through treacherous dunes. When worn, it provides expert guidance, ensuring you avoid deadly sandstorms and navigate with precision. Each week, the guide can heal 1d4 points of damage with a single dose of camel dates, a fruit that restores vitality in the arid lands.",
    "price": 1000,
    "icon": "🏜️",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Avoidsandstorms",
      "Healing Camel Dates"
    ],
    "vendor": "saddle_arabia_bazaar",
    "shippedBy": "Camel Train",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Avoidsandstorms",
        "rules": "While wearing this saddle, you gain a +2 bonus to Survival checks made to avoid sandstorms in desert environments. This effect lasts for one week."
      },
      {
        "title": "Healing Camel Dates",
        "rules": "Once per day, the guide can provide you with a single dose of camel dates that restores 1d4 hit points. This effect heals you instantaneously upon consumption."
      }
    ],
    "levelRequirementReason": "This saddle is designed for travelers and adventurers starting their journey, providing essential desert navigation skills.",
    "vendorReason": "The Saddle Arabia Bazaar specializes in goods crafted by the nomadic tribes of the Arabian deserts, ensuring authenticity and quality.",
    "shippingDetail": "Ships via a traditional camel caravan, which can take up to one week depending on desert conditions.",
    "usage": {
      "activation": "Passive effect; no activation required for guidance or healing fruit.",
      "duration": "One week and instantaneous, respectively.",
      "endsWhen": "The effects expire after the stated duration without further use.",
      "charges": "Unlimited"
    },
    "priceReason": "This saddle is crafted with expertise and materials that make it both functional and durable for desert travel.",
    "priceOriginal": 13000,
    "priceReviewedAt": "2026-07-23T17:46:04.108916+00:00",
    "aiReviewedAt": "2026-07-23T17:46:04.108916+00:00",
    "aiReviewVersion": 1
  },
  "saddle_arabia_date_palm_cookies_recipe": {
    "id": "saddle_arabia_date_palm_cookies_recipe",
    "name": "Recipe: Saddle Arabia Date Palm Cookies",
    "description": "The Saddle Arabia Date Palm Cookies are a desert delicacy crafted by Arabian Bakers, their chewy exterior and rich date-filled core providing sustenance for long journeys. These cookies are not just a snack but a survival tool, enhancing your endurance in heat with +5 ft speed while also healing you of 1d4 hit points from dehydration. Camels themselves have been known to nudge these treats out of sheer appreciation.",
    "price": 1000,
    "icon": "🍪",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Desert Endurance",
      "Dehydration Healing"
    ],
    "vendor": "saddle_arabia_oasis",
    "shippedBy": "Sweet Date Dispatch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Desert Endurance",
        "rules": "Eating one cookie grants you a +5 foot speed increase for the duration of your next long rest. This effect is limited to once per day."
      },
      {
        "title": "Dehydration Healing",
        "rules": "Consume this cookie within 1 hour of experiencing dehydration symptoms, and regain 1d4 hit points. This effect can only be used once every 24 hours."
      }
    ],
    "levelRequirementReason": "Even the most novice traveler can benefit from these cookies' desert survival skills.",
    "vendorReason": "The Saddle Arabia Oasis is renowned for its expertise in crafting foods that sustain travelers through harsh conditions.",
    "shippingDetail": "The cookies are shipped fresh, wrapped in palm leaves to maintain their freshness and flavor.",
    "usage": {
      "activation": "Eat one cookie as a bonus action.",
      "duration": "Until your next long rest.",
      "endsWhen": "Once per day, after the duration of Desert Endurance ends.",
      "charges": "Unlimited; each cookie is self-contained."
    },
    "priceReason": "The rare ingredients and artisanal craftsmanship contribute to this balanced price point.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T17:46:01.473877+00:00",
    "aiReviewedAt": "2026-07-23T17:46:01.473877+00:00",
    "aiReviewVersion": 1
  },
  "saddle_arabia_date_palm_presser": {
    "id": "saddle_arabia_date_palm_presser",
    "name": "Saddle Arabia Date Palm Presser",
    "description": "The Saddle Arabia Date Palm Presser is a handcrafted saddle designed for Arabian camels. Its body is made of sturdy palm wood, inlaid with silver detailing that captures the essence of desert craftsmanship. This press not only extracts sweet date syrup but also enhances any cooking task involving sweets or pastries, granting advantage on such rolls and increasing recipe yields by one serving. The wood retains its sticky residue, requiring oil for cleaning after use.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍪",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Advantage on sweet recipe prep",
      "Extra syrup yield (+1 serving)"
    ],
    "vendor": "saddle_arabia_oasis",
    "shippedBy": "Sweet Squeeze Sack",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sweet Advantage",
        "rules": "When used to prepare a sweet dish or ingredient, the user gains advantage on the relevant ability check."
      },
      {
        "title": "Increased Yield",
        "rules": "Using this press increases the yield of date syrup by one serving. This effect is limited to once per day."
      }
    ],
    "levelRequirementReason": "This saddle is designed for beginners and travelers, making it accessible to all adventurers.",
    "vendorReason": "Saddle Arabia Oasis specializes in exotic Arabian goods, including this culturally rich presser.",
    "shippingDetail": "Ships within three days via camel caravan, ensuring the item arrives fresh and ready for use.",
    "usage": {
      "activation": "Used as an action to extract syrup or prepare a sweet dish.",
      "duration": "Instantaneous effect; advantage lasts until the start of your next turn.",
      "endsWhen": "Exhausted after one use per day.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The craftsmanship and unique functionality justify this balanced price point for an uncommon item.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T17:45:55.376972+00:00",
    "aiReviewedAt": "2026-07-23T17:45:55.376972+00:00",
    "aiReviewVersion": 1
  },
  "saddle_arabia_date_pitter": {
    "id": "saddle_arabia_date_pitter",
    "name": "Saddle Arabia Date Pitter",
    "description": "The Saddle Arabia Date Pitter is a finely crafted saddle adorned with delicate pitting tools that allow for the precise creation of perfectly pit dates. The saddle's leather, softened by centuries of use in the desert, whispers tales of ancient Bedouin traditions. Crafted by the skilled artisans of Saddle Arabia, it not only aids in the culinary perfection of dates but also allows you to pit olives and cherries with ease. This saddle is a symbol of expertise and precision, granting those who ride it an innate knowledge of date lore.",
    "category": "equipment",
    "price": 1000,
    "icon": "🫒",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Perfect Pit Dates",
      "Versatile Pitting"
    ],
    "vendor": "saddle_arabia",
    "shippedBy": "Camel Caravan",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Perfect Pit Dates",
        "rules": "When used to pit dates, the Saddle Arabia Date Pitter grants you advantage on any check related to culinary precision. This effect lasts for one hour after use and requires no specific action."
      },
      {
        "title": "Versatile Pitting",
        "rules": "With a minor action, the saddle can also pit olives or cherries with equal proficiency as it does dates. This versatility allows you to prepare a wider variety of dishes without needing additional tools."
      }
    ],
    "levelRequirementReason": "Beginners and seasoned travelers alike find this saddle useful for its precise pitting abilities.",
    "vendorReason": "Saddle Arabia is renowned for their expertise in crafting saddles that enhance daily tasks, making the Date Pitter a perfect addition to their offerings.",
    "shippingDetail": "The saddle is shipped by camel caravan, ensuring it arrives in pristine condition after a two-week journey across the desert. The delivery includes instructions on how to care for the saddle's unique leather finish.",
    "usage": {
      "activation": "Minor action (to pit dates or olives/cherries) and passive effect while riding",
      "duration": "One hour when pitting dates; instant for other fruits",
      "endsWhen": "After one hour of use or when the saddle is no longer in contact with the fruit being pitted",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the saddle's utility and the craftsmanship required to create such a precision tool.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T17:46:18.991467+00:00",
    "aiReviewedAt": "2026-07-23T17:46:18.991467+00:00",
    "aiReviewVersion": 1
  },
  "saddle_arabia_desert_compass": {
    "id": "saddle_arabia_desert_compass",
    "name": "Saddle Arabia Desert Compass",
    "description": "The Saddle Arabia Desert Compass is a leather-bound compass with an etched map of the Arabian desert. Its needle always points towards the nearest oasis, ensuring travelers never stray too far from life-sustaining water in the harsh desert environment. Crafted by Saddle Arabia, this tool grants advantage on Survival checks made while navigating deserts and can also be used to detect the presence of underground water sources with a successful Wisdom (Survival) check.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧭",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Oasis Pointer",
      "Survival Advantage"
    ],
    "vendor": "desert_traders_post",
    "shippedBy": "Camel Caravans",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Oasis Pointer",
        "rules": "The Saddle Arabia Desert Compass always points towards the nearest oasis. This effect is active during any time spent in a desert environment and does not require an action to use."
      },
      {
        "title": "Survival Advantage",
        "rules": "While equipped, the user gains advantage on Survival checks made while navigating deserts. This effect lasts until the end of the user's next long rest."
      }
    ],
    "levelRequirementReason": "This compass is designed to be useful for all adventurers who might find themselves in a desert environment, requiring no specific character level.",
    "vendorReason": "Desert Traders Post specializes in supplies and tools essential for traversing the deserts of Arabia, making this compass one of their signature items.",
    "shippingDetail": "Ships via a camel caravan, ensuring safe delivery to even the remotest desert outposts within three weeks.",
    "usage": {
      "activation": "Passive",
      "duration": "Until end of next long rest",
      "endsWhen": "Long rest ends",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the item's utility and rarity, providing a reliable tool for desert travel without being overly expensive.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T17:46:09.797248+00:00",
    "aiReviewedAt": "2026-07-23T17:46:09.797248+00:00",
    "aiReviewVersion": 1
  },
  "saddle_arabia_desert_robe": {
    "id": "saddle_arabia_desert_robe",
    "name": "Saddle Arabia Desert Robe",
    "description": "The Saddle Arabia Desert Robe is a loose, flowing garment crafted from camel-hair fibers by Arabian Weavers. It resists the scorching sands and harsh winds of the desert, its billowing fabric providing a natural shield against ranged attacks in the arid expanse. The robe's weave is so fine that it grants resistance to heat exhaustion and enhances your Constitution saving throws by +1 when you are in a desert environment.",
    "price": 1000,
    "icon": "👘",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Resistance to Heat",
      "Constitution Boost"
    ],
    "vendor": "saddle_arabia_souk",
    "shippedBy": "Camel Hair Fold",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heat Resistance",
        "rules": "You gain resistance to heat damage while wearing the robe. Additionally, your Constitution saving throws against heat-related conditions are made with advantage."
      },
      {
        "title": "Desert Savvy",
        "rules": "While in a desert environment, you have advantage on Constitution saving throws and can use a bonus action each day to cast the Shield spell (no material components required)."
      }
    ],
    "levelRequirementReason": "The Saddle Arabia Desert Robe is designed for travelers and adventurers who frequently find themselves in desert environs.",
    "vendorReason": "Saddle Arabia Souk, a renowned shop specializing in desert gear, stocks the Saddle Arabia Desert Robe as one of its most popular items among travelers.",
    "shippingDetail": "The robe is rolled tightly and secured with protective sheaths to prevent damage during transportation by camel.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "While the robe remains on you.",
      "endsWhen": "Removing or damaging the robe ends the effects.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Saddle Arabia Desert Robe is crafted with rare camel-hair fibers and intricate weaving techniques, making it a valuable yet balanced item for adventurers.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T17:47:09.562045+00:00",
    "aiReviewedAt": "2026-07-23T17:47:09.562045+00:00",
    "aiReviewVersion": 1
  },
  "saddle_arabia_recipe_date_and_camel_milk_smoothie": {
    "id": "saddle_arabia_recipe_date_and_camel_milk_smoothie",
    "name": "Recipe: Saddle Arabia Date & Camel Milk Smoothie",
    "description": "The Recipe: Saddle Arabia Date & Camel Milk Smoothie is a potent elixir crafted from the sweetest dates and freshest camel milk, brewed in the heart of the desert by the skilled hands of the Saddle Arabia Oasis Bar. When consumed, it grants you an extra burst of speed, allowing you to navigate through scorching sands as if they were paved roads. The smoothie also quenches your thirst for a day and night, ensuring you can face the next leg of your journey without fear of dehydration.",
    "price": 1000,
    "icon": "📜",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Desert Sprint",
      "Thirstless"
    ],
    "vendor": "saddle_arabia",
    "shippedBy": "Camel Caravan",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Desert Sprint",
        "rules": "When consumed, this recipe grants a +10 foot increase to your walking speed in desert terrain for 4 hours. This effect is instant upon consumption and lasts until the duration expires or you are no longer in a desert environment."
      },
      {
        "title": "Thirstless",
        "rules": "For 24 hours after drinking this recipe, you do not need to drink water or eat food. The effects of dehydration are negated, allowing you to conserve resources for more critical needs."
      }
    ],
    "levelRequirementReason": "This recipe is suitable for adventurers of all levels who might encounter the harsh conditions of a desert.",
    "vendorReason": "Saddle Arabia Oasis Bar is renowned for its expertise in crafting nourishing and life-saving elixirs for weary travelers.",
    "shippingDetail": "The smoothie is shipped in sealed containers to ensure freshness, delivered by the swift and reliable Camel Caravan.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "4 hours in desert terrain; 24 hours of thirstlessness",
      "endsWhen": "Effect duration expires or you leave a desert environment; effect ends if you consume another recipe",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the rare ingredients and skilled craftsmanship required to brew this desert survival aid.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-23T17:46:32.388006+00:00",
    "aiReviewedAt": "2026-07-23T17:46:32.388006+00:00",
    "aiReviewVersion": 1
  },
  "saddle_arabia_saddle_blanket": {
    "id": "saddle_arabia_saddle_blanket",
    "name": "Saddle Arabia Saddle Blanket",
    "description": "This saddle blanket, woven with camel hair and adorned with intricate patterns that shimmer under the desert sun, is a masterpiece of Saddle Arabia craftsmanship. It not only provides comfort for your mount but also strengthens your bond, making you both feel at one with the vast sands. The blanket grants you advantage on saving throws against exhaustion from long travel and brings peace to your steed, granting advantage on Animal Handling checks while mounted.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐪",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Comfort and Bond",
      "Travel Resilience"
    ],
    "vendor": "saddle_arabia",
    "shippedBy": "Camel Caravan",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Comfort and Bond",
        "rules": "You gain a +2 bonus to saving throws against exhaustion from long travel. Additionally, your mount gains advantage on Animal Handling checks while you are mounted."
      },
      {
        "title": "Travel Resilience",
        "rules": "The blanket provides a +1 status bonus to your Constitution saving throw whenever you spend a night in the desert. It can only be used once per day and recharges after 24 hours of non-use."
      }
    ],
    "levelRequirementReason": "This saddle blanket is designed for adventurers starting their journey, providing essential support without imposing a high-level prerequisite.",
    "vendorReason": "Saddle Arabia Weavers are renowned for their expertise in crafting gear that enhances both comfort and performance, especially suited for desert expeditions.",
    "shippingDetail": "Ships via the Camel Caravan, known for its swift and reliable delivery across deserts. Delivery time is approximately one week from Saddle Arabia's capital city.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous; recharges after a day of non-use.",
      "endsWhen": "Use ends when the blanket is not used for a full day or when expended during a long rest.",
      "charges": "Unlimited, but only one use per day."
    },
    "priceReason": "This saddle blanket offers significant benefits to adventurers, making it a valuable purchase despite its moderate price. Its craftsmanship and desert-specific utility justify this balanced cost in XP terms.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-23T17:46:37.352914+00:00",
    "aiReviewedAt": "2026-07-23T17:46:37.352914+00:00",
    "aiReviewVersion": 1
  },
  "safe_house_rental": {
    "id": "safe_house_rental",
    "name": "Safe House Rental (1 Month)",
    "description": "The Safe House Rental (1 Month) offers a secure, hidden refuge in the heart of Rogueport's shadowy alleys. This well-constructed dwelling is equipped with defensive wards that prevent scrying and detection, ensuring your privacy remains intact. Two secret exits lead to different districts, providing you with swift escape routes should the need arise. Monthly supplies are included, covering essentials like food, water, and basic medicines, allowing you to focus on other matters without worry.",
    "category": "services",
    "price": 1000,
    "icon": "🏠",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Secure Lodging",
      "Swift Escape Routes"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Keys Delivered",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Defensive Wards",
        "rules": "The rental is protected by defensive wards that prevent scrying and detection. These wards last for the duration of the month-long lease (30 days). The effect does not end unless the house is vacated or the wards are manually deactivated."
      },
      {
        "title": "Secret Exits",
        "rules": "The property features two secret exits leading to different districts within Rogueport. These exits can be used once per day for a quick escape, with no need for an action or bonus action to activate them. The effect is instantaneous and ends when the district is left."
      }
    ],
    "levelRequirementReason": "This rental is suitable for adventurers of all levels but requires basic knowledge of Rogueport's layout.",
    "vendorReason": "The Black Market deals in unique and covert services, including this secure and anonymous lodging option.",
    "shippingDetail": "The keys are delivered directly to your specified location within Rogueport, ensuring a smooth transition into the rental without drawing attention.",
    "usage": {
      "activation": "Instantaneous (Secret Exits)",
      "duration": "30 days for defensive wards; instantaneous for secret exits",
      "endsWhen": "Leaving the district via secret exit or vacating the house",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The price reflects a balance between the secure nature of the lodging and the convenience of having two secret exits, all included in one month.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T17:46:47.043707+00:00",
    "aiReviewedAt": "2026-07-23T17:46:47.043707+00:00",
    "aiReviewVersion": 1
  },
  "safety_goggles": {
    "id": "safety_goggles",
    "name": "Safety Goggles",
    "description": "These Safety Goggles, crafted by Professor E. Gadd himself, are more than just a fashion statement—they're a practical necessity for any adventurer who's been through the Dusty Caverns of Toad Town. They protect your eyes from the blinding sandstorms, and their sleek, oversized frames make you look like a true scholar of the arcane. The goggles hum gently as they filter out harmful particles, ensuring you see clearly even in the worst conditions.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥽",
    "stock": 100,
    "rarity": "common",
    "effects": [
      "Blindness Resistance",
      "Nerdy Chic"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Case Express Delivery Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blindness Resistance",
        "rules": "As a bonus action, you can activate these goggles to grant yourself immunity to blindness from dust and sand for 1 hour. The goggles filter out harmful particles, but they do not protect against other forms of blindness or damage."
      },
      {
        "title": "Nerdy Chic",
        "rules": "While wearing the Safety Goggles, you gain a +2 bonus to your Charisma (Performance) checks and saving throws while using them in public. This effect lasts until you remove the goggles."
      }
    ],
    "levelRequirementReason": "These goggles are designed for adventurers who frequently explore dusty environments or engage in scholarly activities, making level 1 a reasonable requirement.",
    "vendorReason": "Toad Town Market specializes in gear and equipment that help adventurers navigate its dangerous landscapes, including the dust storms that plague the area.",
    "shippingDetail": "Goggles are shipped via Case Express within 3 days of purchase. Shipping is free for this item due to its delicate nature.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 hour, or until removed by the wearer",
      "endsWhen": "The effects end when you remove the goggles or they break.",
      "charges": "Unlimited"
    },
    "priceReason": "The goggles are priced at 1000 XP due to their utility in hazardous environments, their unique design, and the expertise required for their crafting.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-23T17:46:59.959122+00:00",
    "aiReviewedAt": "2026-07-23T17:46:59.959122+00:00",
    "aiReviewVersion": 1
  },
  "safety_ring": {
    "id": "safety_ring",
    "name": "Safety Ring",
    "description": "The Safety Ring is a simple yet sturdy band made of polished steel and adorned with an etched rune. It whispers promises of protection, shielding its wearer from the whims of fate. This ring guarantees immunity to status effects such as poison and paralysis, ensuring your survival in even the most treacherous circumstances. Its origin lies in ancient alchemical lore, crafted by a long-forgotten guild dedicated to safeguarding adventurers.",
    "category": "equipment",
    "price": 1000,
    "icon": "💍",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Immunity to Status Effects",
      "Immune to Poison and Paralysis"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Velvet Box Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Status Effects",
        "rules": "The wearer is immune to all non-magical status effects, including poison and paralysis. This immunity lasts for the duration of a short rest."
      },
      {
        "title": "Immune to Poison and Paralysis",
        "rules": "This ring grants its owner immunity to being poisoned or paralyzed by any means, magical or otherwise, as long as they are not under the effect of a spell that specifically targets this immunity."
      }
    ],
    "levelRequirementReason": "The Safety Ring requires no level prerequisite for wearers, as it is designed to be accessible to all adventurers.",
    "vendorReason": "The Shamans' Hut specializes in items that enhance the resilience of adventurers, making this ring a fitting addition to their offerings.",
    "shippingDetail": "Delivered with utmost care and insured for safe arrival.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous; lasts until the end of your next short rest",
      "endsWhen": "The wearer completes a short rest",
      "charges": "Unlimited, recharges on completion of a short rest"
    },
    "priceReason": "The Safety Ring is priced at 1000 XP, reflecting its legendary status and the alchemical resources required for its creation.",
    "priceOriginal": 400000,
    "priceReviewedAt": "2026-07-23T17:46:51.305439+00:00",
    "aiReviewedAt": "2026-07-23T17:46:51.305439+00:00",
    "aiReviewVersion": 1
  },
  "samus_arm_cannon": {
    "id": "samus_arm_cannon",
    "name": "Arm Cannon Replica",
    "description": "The Arm Cannon Replica is a hulking, battle-worn weapon forged from salvaged parts and experimental tech. Its barrel glows with an eerie blue light when in use, and the grip feels warm to the touch—a testament to its forgeheart core. Crafted by the eccentric inventor Wario Direct himself, this cannon can unleash both forceful blasts and explosive missiles, making it a versatile tool for any adventurer seeking to carve their name into the annals of battle.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔫",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Fire energy",
      "Missile mode"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Tech Crate Express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Force Blast",
        "rules": "The Arm Cannon Replica can be fired as an action, releasing a force blast with a range of 100 feet. This attack deals 3d6 force damage and has a save DC of 15."
      },
      {
        "title": "Missile Salvo",
        "rules": "Activating the missile mode requires 2 uses per day. Each shot in this salvo deals 4d6 explosive damage with a range of 80 feet, and it has a save DC of 14."
      }
    ],
    "levelRequirementReason": "This weapon is designed for seasoned adventurers who can handle its complex mechanisms and powerful output.",
    "vendorReason": "Wario Direct personally oversees the sale of this item, ensuring it meets his high standards for quality and innovation.",
    "shippingDetail": "Ships via Tech Crate Express within 3 days, with a flat rate of $50 regardless of distance.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "Charges are expended or the item is destroyed",
      "charges": "4 charges per day"
    },
    "priceReason": "This price reflects its rarity and the cost of materials used in its construction, as well as its limited availability.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-23T17:47:29.517195+00:00",
    "aiReviewedAt": "2026-07-23T17:47:29.517195+00:00",
    "aiReviewVersion": 1
  },
  "sapphire_frog_boots": {
    "id": "sapphire_frog_boots",
    "name": "Sapphire Frog Boots",
    "description": "Boots with a glossy blue sheen and webbed hems. You feel amphibious and precise.",
    "category": "equipment",
    "price": 38000,
    "icon": "🐸",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Grants swim speed equal to walking speed and advantage on Acrobatics in water",
      "Once per day: leap across 60ft of water as if solid",
      "Leaves a faint spray with each step"
    ],
    "vendor": "sea_seller",
    "shippedBy": "Waterproof Satchel",
    "levelRequirement": 6
  },
  "sarasaland_desert_soul_torch": {
    "id": "sarasaland_desert_soul_torch",
    "name": "Desert Soul Torch",
    "description": "The Desert Soul Torch is a golden-hued beacon that crackles with the spirit of ancient desert guardians. Its flame flickers with a primal energy, illuminating the arid sands for a full minute and casting an eerie glow over undead foes, dealing 1d6 radiant damage. While wielding it, travelers find themselves fleet of foot, their speed increasing by 10 feet when running through open terrain. The torch burns bright until its core crumbles after five uses, or if exposed to moonlight during use, causing a brief disorientation.",
    "price": 1000,
    "icon": "🌞",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Illuminates and Damages Undead",
      "Increases Running Speed"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Illuminates and Damages Undead",
        "rules": "The Desert Soul Torch illuminates the area in a golden glow for one minute, dealing 1d6 radiant damage to undead creatures within 30 feet. The torch burns out after five uses or if exposed to moonlight during use."
      },
      {
        "title": "Increases Running Speed",
        "rules": "While holding and using the Torch, your running speed increases by 10 feet for as long as you maintain the Torch's active duration of one minute. This effect ends when the torch burns out or if exposed to moonlight during use."
      }
    ],
    "levelRequirementReason": "The Desert Soul Torch is accessible to adventurers with minimal experience.",
    "vendorReason": "Sarasaland's extensive trade routes include the desert regions where these torches are forged, making them familiar with their creation and distribution.",
    "shippingDetail": "Ships via Warp Whistle Transit within 3 days of purchase.",
    "usage": {
      "activation": "As a bonus action to light or relight the Torch.",
      "duration": "One minute, recharges after five uses.",
      "endsWhen": "Exposure to moonlight during use or after five uses.",
      "charges": "5 charges"
    },
    "priceReason": "The torch's unique crafting process and the mystical energy it contains justify its higher price.",
    "priceOriginal": 400,
    "priceReviewedAt": "2026-07-23T17:47:15.099897+00:00",
    "aiReviewedAt": "2026-07-23T17:47:15.099897+00:00",
    "aiReviewVersion": 1
  },
  "sarasaland_dream_touched_glove": {
    "id": "sarasaland_dream_touched_glove",
    "name": "Dream Touched Glove",
    "description": "Woven from the ethereal essence of Dream Land’s mischievous puffballs, this glove allows its wearer to manipulate dreamscapes through simple gestures. It grants temporary control over hallucinogenic fog within a 10-meter radius but risks trapping the user in a nightmare dimension if overused. Worn by the Shy Guys Union and delivered by Chain Chomp Courier with a note: “If you’re not afraid of your own mind, you’ll get it back.”",
    "category": "equipment",
    "price": 1000,
    "icon": "🌈",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Manipulates dream fog within 10 meters",
      "Grants +2 to Perception checks against illusions"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Chain Chomp Courier (unreliable)",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dream Manipulation",
        "rules": "As a bonus action, the wearer can manipulate hallucinogenic fog within a 10-meter radius. This effect lasts for 1 minute and requires concentration (ends if interrupted). The glove grants temporary control over the fog but risks trapping the user in a nightmare dimension if used excessively."
      },
      {
        "title": "Illusion Resistance",
        "rules": "The wearer gains a +2 bonus to Perception checks against illusions. This effect is always active while wearing the glove and does not require any action."
      }
    ],
    "levelRequirementReason": "This item requires only level 1 to use, making it accessible for adventurers early in their journey.",
    "vendorReason": "Sarasaland has a long-standing relationship with the mischievous puffballs of Dream Land and sells items that reflect this connection.",
    "shippingDetail": "Expected delivery time is 3 days, but delays are common. The courier may require an additional Chain Chomp token as a tip.",
    "usage": {
      "activation": "Bonus action to manipulate fog; always active for illusion resistance",
      "duration": "1 minute with concentration (ends if interrupted); always active while worn",
      "endsWhen": "Concentration ends or wearer falls unconscious; always active when worn",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects its uncommon rarity and the unique properties that make it a valuable tool for early adventurers.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:47:40.338019+00:00",
    "aiReviewedAt": "2026-07-23T17:47:40.338019+00:00",
    "aiReviewVersion": 1
  },
  "sarasaland_dusty_scepter": {
    "id": "sarasaland_dusty_scepter",
    "name": "Dusty Scepter of the Fallen Sun",
    "description": "The Dusty Scepter of the Fallen Sun is a tarnished staff adorned with enigmatic carvings. Its surface glows faintly, casting an afterimage of a sun that has long since set. This relic grants its bearer +1 to Charisma checks when engaging in diplomacy and can deliver 1d4 psychic damage to any hostile creature within reach during regency parleys. The scepter's presence evokes the scent of old sand and forgotten crowns, whispering tales of lost glory.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌅",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Charismatic Diplomacy",
      "Psychic Stinger"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charismatic Diplomacy",
        "rules": "When used as part of a Charisma check during diplomacy, the wielder gains a +1 bonus. This effect lasts until the end of the encounter."
      },
      {
        "title": "Psychic Stinger",
        "rules": "As an action, the wielder can make a melee attack against one hostile creature within 5 feet. On a hit, the target takes 1d4 psychic damage and must succeed on a DC 13 Constitution saving throw or be stunned until the end of its next turn."
      }
    ],
    "levelRequirementReason": "The relic's historical significance makes it accessible to lower-level characters with noble aspirations.",
    "vendorReason": "Sarasaland is known for its extensive collection of ancient and forgotten artifacts, including this dusty scepter.",
    "shippingDetail": "The scepter arrives encased in an ornate, protective sheath to preserve the artifact's integrity during transit.",
    "usage": {
      "activation": "Action or Reaction (for Psychic Stinger)",
      "duration": "Instantaneous for Charismatic Diplomacy; until the end of the encounter for Psychic Stinger",
      "endsWhen": "The effect ends if the wielder is incapacitated or the scepter is destroyed.",
      "charges": "Unlimited, but only one use per round"
    },
    "priceReason": "The relic's historical value and unique abilities justify a fair price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:47:29.690923+00:00",
    "aiReviewedAt": "2026-07-23T17:47:29.690923+00:00",
    "aiReviewVersion": 1
  },
  "sarasaland_furry_canteen": {
    "id": "sarasaland_furry_canteen",
    "name": "Furry Canteen of the Bowserite Nomads",
    "description": "The Furry Canteen of the Bowserite Nomads is crafted from the hide of a once-loyal rat-tamer, imbued with the resilience of desert winds and the warmth of ancient oases. It keeps your drink steaming for ten minutes, and when consumed slowly, it restores 10 hit points. However, if gulped down too quickly, it causes 1d2 nausea. This canteen is a cherished relic among nomads, passed through generations to quench thirsts in the harshest of climates.",
    "price": 1000,
    "icon": "🍽",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Restores Hit Points",
      "Causes Nausea"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Hit Points",
        "rules": "When consumed slowly over a minute, the canteen restores 10 hit points to the drinker. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Causes Nausea",
        "rules": "If consumed in less than half a minute, the drinker must succeed on a DC 12 Constitution saving throw or be stunned for 1 minute due to nausea. This effect lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This canteen is designed for adventurers just starting their journey, providing essential hydration and a touch of resilience.",
    "vendorReason": "Sarasaland is known for its connection to desert nomads and travelers who value practical yet magical items like the Furry Canteen.",
    "shippingDetail": "Ships via a spirit courier, arriving within one week of order placement.",
    "usage": {
      "activation": "Consume slowly over one minute or quickly in less than half a minute.",
      "duration": "Instantaneous for hit point restoration; 1 minute of nausea if consumed too quickly.",
      "endsWhen": "Effect ends when the duration expires or the drinker successfully saves against nausea.",
      "charges": "Unlimited, as it refills with each use."
    },
    "priceReason": "The canteen's rarity and magical properties, combined with its unique flavor profile and desert lore, justify this higher price in experience points.",
    "priceOriginal": 300,
    "priceReviewedAt": "2026-07-23T17:48:00.768188+00:00",
    "aiReviewedAt": "2026-07-23T17:48:00.768188+00:00",
    "aiReviewVersion": 1
  },
  "sarasaland_glowing_scepter": {
    "id": "sarasaland_glowing_scepter",
    "name": "Glowing Scepter of the Sunken Throne",
    "description": "The Glowing Scepter of the Sunken Throne pulses with an ancient, fiery light that dances along its ornate carvings. Crafted from sun-struck obsidian and lapis lazuli, it hums with the power of a dying star. Once wielded by the last royal sun-dragon of Sarasaland, this scepter grants brief bursts of radiant energy, both blinding foes and healing allies—though at a cost to its user’s vitality. Koopa nobles hid it beneath the sand to prevent the awakening of ancient sun-worshipers, repurposing it as a diplomatic tool for delicate negotiations.",
    "category": "equipment",
    "price": 1000,
    "icon": "☀",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Radiant Burst",
      "Sacrificial Healing"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Radiant Burst",
        "rules": "As an action, the wielder can cast Radiant Burst. This ability blinds all creatures within 30 feet of them for 1 round and deals 1d6 radiant damage to each one. The caster must have at least 20 hit points remaining or suffer a 10% temporary ability score drain (wisdom) as an immediate consequence."
      },
      {
        "title": "Sacrificial Healing",
        "rules": "The wielder can gain temporary hit points equal to 1d4 + their proficiency bonus. This effect is only usable once per long rest and costs the user 5% of their total current hit points as a minor sacrifice."
      }
    ],
    "levelRequirementReason": "The scepter's ancient power demands a minimum level to wield it effectively without risk.",
    "vendorReason": "Sarasaland continues to honor the legacy of its sun-dragon heritage, and this relic is one such symbol of that history.",
    "shippingDetail": "Shipment via Koopa Postal includes a special protective case to ensure safe delivery from the deserts of Sarasaland.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (effect lasts until end of next turn)",
      "endsWhen": "The effect ends when the target creature moves out of range or is no longer blinded by the radiant burst.",
      "charges": "Unlimited, but requires a long rest to regain temporary hit points."
    },
    "priceReason": "Balanced at 1000 XP as it offers powerful effects that require careful use and are not overpowered for a mid-level character.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T17:48:03.169999+00:00",
    "aiReviewedAt": "2026-07-23T17:48:03.169999+00:00",
    "aiReviewVersion": 1
  },
  "sarasaland_golden_dream_bottle": {
    "id": "sarasaland_golden_dream_bottle",
    "name": "Golden Dream Bottle",
    "description": "The Golden Dream Bottle is a crystal vessel adorned with intricate carvings that shimmer like molten gold. It purportedly captures the essence of Sarasaland's first sunrise, yet those who partake in its illusory contents find themselves ensnared by a dreamworld where deserts bloom with impossible flora and fauna. After three nights, the bottle emits whispers of forgotten lore, but the dreams it grants are ephemeral, leaving the drinker to forget their last 24 hours upon waking.",
    "price": 1000,
    "icon": "💫",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Dreamscapes of Forgotten Realms",
      "Temporal Oblivion"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dreamscapes of Forgotten Realms",
        "rules": "The user enters a dreamworld where deserts bloom with impossible flora and fauna. This effect lasts for one hour, during which the user is immune to fear and confusion. The duration ends when they wake up from their slumber."
      },
      {
        "title": "Temporal Oblivion",
        "rules": "Upon awakening from the effects of the Golden Dream Bottle, the user forgets any events that transpired in the last 24 hours. This effect is instantaneous and cannot be resisted with a saving throw."
      }
    ],
    "levelRequirementReason": "The bottle's illusions are potent enough to affect even the most novice adventurers who lack the experience to resist them.",
    "vendorReason": "Sarasaland is renowned for its magical artifacts, and the Golden Dream Bottle is one of their most mysterious creations.",
    "shippingDetail": "Ships via Pipe Express with a two-day delivery time.",
    "usage": {
      "activation": "Consume the contents of the bottle as a bonus action.",
      "duration": "One hour, ending when you wake up from your slumber.",
      "endsWhen": "The duration ends when you wake up after consuming its contents.",
      "charges": "Unlimited"
    },
    "priceReason": "The bottle is a legendary item crafted by the enigmatic Land Mordor, making it a rare and sought-after commodity among adventurers.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-23T17:48:32.121449+00:00",
    "aiReviewedAt": "2026-07-23T17:48:32.121449+00:00",
    "aiReviewVersion": 1
  },
  "sarasaland_iron_bottle_bubble": {
    "id": "sarasaland_iron_bottle_bubble",
    "name": "Iron Bottle Bubble",
    "description": "A glass vial filled with liquid iron that hums with the sound of a thousand war drums. It was smuggled across the desert by a desert merchant who claimed it could turn sand into gold—until it accidentally turned the merchant into a sandworm.",
    "price": 500,
    "icon": "💧",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Grants temporary resistance to fire damage for 1 turn",
      "Causes hallucinations of desert storms if consumed too fast",
      "Increases thirst by 200% after use",
      "Can be used as a distraction during combat",
      "Crafted by: Land Mordor"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3
  },
  "sarasaland_item_name_here": {
    "id": "sarasaland_item_name_here",
    "name": "Desert Wind Blade",
    "description": "The Desert Wind Blade is a razor-sharp blade forged from the very breath of the dunes. It hums with the whispering winds and its edge shimmers like desert glass under the sun's harsh gaze. This weapon deals extra damage to enemies in open terrain, as if the winds themselves are aiding your strikes. However, its sharpness comes at a cost; when used in combat, it slows your movement speed slightly, making every step a struggle against nature’s resistance. Caution is advised.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Extra Damage in Open Terrain",
      "Slowed Movement"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Extra Damage in Open Terrain",
        "rules": "When attacking an enemy in open terrain, the Desert Wind Blade deals an additional 1d6 damage. This effect is active as long as you are within 30 feet of an open space and does not require activation."
      },
      {
        "title": "Slowed Movement",
        "rules": "Using the Desert Wind Blade in combat reduces your movement speed by 5 feet until the start of your next turn. This effect is triggered when you make a melee attack with the weapon."
      }
    ],
    "levelRequirementReason": "The blade's sharpness and wind magic are accessible to any adventurer willing to learn its secrets.",
    "vendorReason": "Sarasaland is renowned for its exotic weapons, including those that draw power from the land itself.",
    "shippingDetail": "Ships are delayed by one day due to the winds' unpredictable nature.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "Until the start of your next turn or when you stop moving in combat",
      "endsWhen": "You stop moving in combat or use an action to sheathe it",
      "charges": "Unlimited"
    },
    "priceReason": "The blade's rarity and unique properties justify its moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:48:18.577650+00:00",
    "aiReviewedAt": "2026-07-23T17:48:18.577650+00:00",
    "aiReviewVersion": 1
  },
  "sarasaland_onyx_hand_gloves": {
    "id": "sarasaland_onyx_hand_gloves",
    "name": "Onyx Hand Gloves",
    "description": "The Onyx Hand Gloves are crafted from the very essence of shadow and night, their fingers etched with ancient runes that bend reality to the wearer’s will. These elite vampire enforcers’ gloves grant invisibility for fleeting moments, allowing one to slip past foes undetected. The gloves also deal 2d6 dark damage against enemies with high stealth, a perfect counter to those who seek to hide in the shadows themselves.",
    "category": "equipment",
    "price": 3000,
    "icon": "👁",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Invisibility Burst",
      "Stealth Damage"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Invisibility Burst",
        "rules": "Activates as a bonus action. The wearer becomes invisible for 5 seconds, granting advantage on Dexterity (Stealth) checks until the start of their next turn."
      },
      {
        "title": "Stealth Damage",
        "rules": "When attacking an enemy with high stealth, deal 2d6 necrotic damage and impose disadvantage on the target’s Dexterity saving throws for 1 minute. This effect is limited to once per long rest."
      }
    ],
    "levelRequirementReason": "These gloves are crafted by the Onyx Hand’s inner circle, requiring a high degree of arcane knowledge and power.",
    "vendorReason": "Sarasaland is known for its connections with dark rituals and elite vampire enforcers, making it a fitting vendor for these powerful yet ethically questionable items.",
    "shippingDetail": "Ships via Warp Whistle Transit within 3 days of purchase.",
    "usage": {
      "activation": "Bonus action to activate invisibility burst, once per long rest to deal stealth damage.",
      "duration": "Invisibility lasts for 5 seconds; stealth damage effect is until the start of the target’s next turn.",
      "endsWhen": "Runs out after 1 minute or when the wearer takes a major action.",
      "charges": "Unlimited, recharges on completion of a long rest."
    },
    "priceReason": "Reflecting their rarity and power, these gloves are priced at an epic level, offering players a potent yet balanced option for stealth-oriented combat.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T17:48:30.908088+00:00",
    "aiReviewedAt": "2026-07-23T17:48:30.908088+00:00",
    "aiReviewVersion": 1
  }
};
