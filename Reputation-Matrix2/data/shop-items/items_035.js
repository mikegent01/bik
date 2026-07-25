// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_035 = {
  "refijia_personality_reset": {
    "id": "refijia_personality_reset",
    "name": "Refijian Personality Reset (Self-Administered)",
    "description": "The Refijian Personality Reset (Self-Administered) is a small, sleek device resembling a polished brass key fob. It hums faintly as it interfaces with your mind, erasing all recent personality modifications or traumas that you've undergone—except for any permanent stat changes. After use, you require 12 hours of uninterrupted rest to fully recover the lost mental clarity and stability. Crafted by the ingenious engineers of Refijia, this device ensures a return to your original self without lasting side effects.",
    "price": 1000,
    "icon": "🧽",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "Erases Recent Personality Modifications",
      "Requires Rest for Recovery"
    ],
    "vendor": "refijian_lab",
    "shippedBy": "Self-Service Terminal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Erase Recent Personality Modifications",
        "rules": "This device can be used as an action, instantly erasing all recent personality modifications or traumas you've undergone. It does not affect permanent stat changes. The effect is instantaneous and has no range. You need 12 hours of uninterrupted rest immediately after use to fully recover the lost mental clarity."
      },
      {
        "title": "Rest for Recovery",
        "rules": "After using this device, you must spend at least 12 hours in a state of deep rest (such as sleep or meditation) to avoid any negative effects. Failure to do so results in a -2 penalty on all Wisdom (Insight) checks and saving throws until the rest is completed."
      }
    ],
    "levelRequirementReason": "This device is designed for anyone who has experienced significant personality changes, making it accessible to characters of any level.",
    "vendorReason": "Refijian Lab specializes in mind and body enhancement technologies, which makes them the perfect vendor for this unique device.",
    "shippingDetail": "The device is shipped using a secure self-service terminal that ensures quick delivery with minimal handling delays.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "You enter a state of rest for at least 12 hours after use.",
      "charges": "Unlimited, but requires rest to avoid penalties."
    },
    "priceReason": "The device is priced at 1000 XP due to its unique technology and the specialized knowledge required for its creation by Refijia's engineers.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-23T17:06:42.605096+00:00",
    "aiReviewedAt": "2026-07-23T17:06:42.605096+00:00",
    "aiReviewVersion": 1
  },
  "refijia_personality_script": {
    "id": "refijia_personality_script",
    "name": "Refijian Personality Script",
    "description": "The Refijian Personality Script is a data cartridge imbued with the essence of a Refijian's most refined social graces and moral compass. When inserted into an automaton or construct, it completely rewrites its behavioral traits, transforming it from a cold machine to a living, empathetic entity. The process takes two weeks during which time the synthetic host undergoes a profound internal recalibration, emerging as if it were born anew with a fully developed personality and soul.",
    "price": 1000,
    "icon": "💾",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Rewrite Personality",
      "Two Week Activation"
    ],
    "vendor": "refijian_lab",
    "shippedBy": "Data Upload",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Rewritten Personality",
        "rules": "This effect completely rewrites the target's behavioral traits and mannerisms. The construct gains advantage on all Charisma (Persuasion) checks for a duration of one month after activation."
      },
      {
        "title": "Two Week Activation",
        "rules": "The script takes two weeks to activate, during which time the construct is offline and undergoing internal recalibration. Once activated, it can be reconfigured once per long rest."
      }
    ],
    "levelRequirementReason": "This item requires a high level of skill in cybernetic engineering and advanced AI knowledge to properly program and integrate the script.",
    "vendorReason": "Only Refijia's premier lab can produce items that completely reconfigure an automaton's personality.",
    "shippingDetail": "The item is delivered via a secure, encrypted data stream to ensure the integrity of the script during transit.",
    "usage": {
      "activation": "A short rest and access to a compatible device are required for activation.",
      "duration": "One month after activation.",
      "endsWhen": "After one month or if reconfigured again.",
      "charges": "Unlimited, but can only be reconfigured once per long rest."
    },
    "priceReason": "The item is priced at 1000 XP to balance its rarity and the specialized skills required for its creation and activation.",
    "priceOriginal": 150000,
    "priceReviewedAt": "2026-07-23T17:06:36.889112+00:00",
    "aiReviewedAt": "2026-07-23T17:06:36.889112+00:00",
    "aiReviewVersion": 1
  },
  "refijia_personality_script_bundle": {
    "id": "refijia_personality_script_bundle",
    "name": "Refijian Personality Script Bundle (3 Roles)",
    "description": "The Refijian Personality Script Bundle contains three meticulously crafted, pre-written personalities: Diplomat, Assassin, and Engineer. Each script is a crystalline disk imbued with the essence of its intended role, designed to seamlessly integrate into any host body. These scripts are renowned for their precision and reliability, allowing a user to instantly access the expertise of each character without undergoing extensive training. Made by Refijia, these bundles have revolutionized the field of host customization.",
    "price": 1000,
    "icon": "💿",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Load any one script onto an empty host body",
      "Scripts grant expertise in relevant fields"
    ],
    "vendor": "refijian_lab",
    "shippedBy": "Triple Drive Express",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Script Integration",
        "rules": "To use a script, simply activate it as an action. The script integrates into the host body instantly, providing its associated expertise for the duration of one short rest."
      },
      {
        "title": "Expertise Granting",
        "rules": "The expertise provided is equivalent to proficiency in the relevant skills or tools. This effect lasts until the end of each long rest while the script is active. The user must have at least one free hand when integrating a script."
      }
    ],
    "levelRequirementReason": "Requires significant mental and physical preparation, ensuring only those with advanced training can utilize these scripts.",
    "vendorReason": "Refijia is the birthplace of these groundbreaking scripts, known for their cutting-edge technology in host customization.",
    "shippingDetail": "Ships via Triple Drive Express, a reliable courier service known for its punctuality and security measures.",
    "usage": {
      "activation": "Activate as an action to load the script into a compatible host body.",
      "duration": "Until the end of each long rest while active.",
      "endsWhen": "The script is removed or a new one is loaded, whichever comes first. The bundle can be used up to three times per day.",
      "charges": "3 uses per day"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the cost of advanced technology and expertise required for their creation.",
    "priceOriginal": 300000,
    "priceReviewedAt": "2026-07-23T17:06:37.141626+00:00",
    "aiReviewedAt": "2026-07-23T17:06:37.141626+00:00",
    "aiReviewVersion": 1
  },
  "refijia_psychic_amplifier": {
    "id": "refijia_psychic_amplifier",
    "name": "Refijian Psychic Amplifier",
    "description": "This sleek, helmet-like headset amplifies your natural telepathic abilities to broadcast your thoughts across a ten-mile radius. Crafted by Refijia's finest artisans, it allows you to force your mental messages upon others within range, akin to a loudspeaker. The Refijian Psychic Amplifier is not just a tool; it's an extension of your mind, perfect for those who need to command attention or spread their thoughts far and wide.",
    "price": 1000,
    "icon": "📡",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Mental Broadcast",
      "Increased Range"
    ],
    "vendor": "refijian_tailor",
    "shippedBy": "Swiftwind Express",
    "levelRequirement": 13,
    "effectDetails": [
      {
        "title": "Mental Broadcast",
        "rules": "As a bonus action, you can broadcast a message within your telepathic range. Any creature within 30 feet that can hear must succeed on a DC 15 Wisdom saving throw or be affected by the message for 1 minute."
      },
      {
        "title": "Increased Range",
        "rules": "You increase the effective range of your telepathy to a maximum of ten miles. This effect lasts until you use another feature that changes your telepathic range, such as a short rest."
      }
    ],
    "levelRequirementReason": "This item requires significant mental discipline and strength, which is only available at level 13.",
    "vendorReason": "The Refijian Tailor specializes in technology-infused gear that amplifies your natural abilities, making the Psychic Amplifier a perfect fit for their inventory.",
    "shippingDetail": "Ships via Swiftwind Express within three days of purchase.",
    "usage": {
      "activation": "Bonus action to broadcast; passive effect while worn.",
      "duration": "Mental Broadcast lasts until the end of your next turn; Increased Range is permanent while wearing.",
      "endsWhen": "Dislodging or damaging the amplifier ends both effects.",
      "charges": "Unlimited"
    },
    "priceReason": "The Refijian Psychic Amplifier provides a significant boost to mental abilities, making it worth only 1000 XP due to its balanced utility.",
    "priceOriginal": 180000,
    "priceReviewedAt": "2026-07-23T17:06:24.871840+00:00",
    "aiReviewedAt": "2026-07-23T17:06:24.871840+00:00",
    "aiReviewVersion": 1
  },
  "refijia_reflective_mirror_candy_recipe": {
    "id": "refijia_reflective_mirror_candy_recipe",
    "name": "Recipe: Refijia Reflective Mirror Candy",
    "description": "Shiny hard candy that 'reflects' on choices.",
    "price": 7000,
    "icon": "🍭",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Teaches recipe: Mold sugar (20 min); eat to gain inspiration for one decision and advantage on Insight",
      "Requires: Sugar; looks like gems",
      "Sweet reflections – minor prophecy",
      "Made by: Mirror Confectioners"
    ],
    "vendor": "refijia_workshop",
    "shippedBy": "Shiny Sugar Sheet",
    "levelRequirement": 5
  },
  "refijia_reflective_mirror_service": {
    "id": "refijia_reflective_mirror_service",
    "name": "Refijia Reflective Mirror Service",
    "description": "The Refijia Reflective Mirror Service is a meticulously crafted polished mirror, its surface gleaming with a subtle sheen of protective enchantment. This enchanted glass reflects not only your image but also one spell of level 1 or lower per day. The mirror grants you advantage on saving throws against gaze attacks and offers a daily vision into your most embarrassing moments, reflecting your true self with unfiltered clarity. Crafted by the skilled Refijian Glassmakers, this item is a testament to their mastery in both magic and artistry.",
    "price": 1000,
    "icon": "🪞",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Spell Reflection",
      "Gaze Attack Advantage"
    ],
    "vendor": "refijia_workshop",
    "shippedBy": "Mirrored Frame Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spell Reflection",
        "rules": "At the start of your turn when you are targeted by a spell of level 1 or lower, you can use an action to cast Mirror Image (as a minor action). This effect lasts for one day and can only be used once per day."
      },
      {
        "title": "Gaze Attack Advantage",
        "rules": "You have advantage on saving throws against gaze attacks. This benefit persists as long as you remain within the mirror's field of view, which extends 15 feet in all directions from the mirror’s location."
      }
    ],
    "levelRequirementReason": "The Refijia Reflective Mirror Service is designed for beginners to experience protective magic and minor enchantments.",
    "vendorReason": "As masters of enchanted glasswork, the Refijian Glassmakers are well-known for creating items that blend beauty with utility.",
    "shippingDetail": "The mirror is carefully packed and delivered within a week via Mirrored Frame Express.",
    "usage": {
      "activation": "Action to cast Mirror Image, Reaction against gaze attacks (if within the mirror's field of view)",
      "duration": "Instantaneous for casting; one day per use",
      "endsWhen": "At the start of your next turn after using it or when a new spell is cast at you",
      "charges": "One daily charge"
    },
    "priceReason": "The price reflects the mirror's craftsmanship, protective magic, and its daily utility.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-23T17:07:10.325336+00:00",
    "aiReviewedAt": "2026-07-23T17:07:10.325336+00:00",
    "aiReviewVersion": 1
  },
  "refijia_synthetic_clone": {
    "id": "refijia_synthetic_clone",
    "name": "Refijian Synthetic Clone (Emergency)",
    "description": "The Refijian Synthetic Clone (Emergency) is a meticulously crafted twin of its original, designed for quick and seamless consciousness transfer. Crafted by the skilled artisans of Refijia, this clone retains basic enhancements, including +1 to all ability scores, making it an ideal backup in dire situations. Upon the death of the original, the clone's neural interface activates instantly, allowing for a flawless transition of consciousness with no time loss.",
    "price": 450000,
    "icon": "👥",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Instantaneous Consciousness Transfer",
      "Basic Refijian Enhancements"
    ],
    "vendor": "refijian_lab",
    "shippedBy": "Life Support Unit",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Instantaneous Consciousness Transfer",
        "rules": "When the original's life ends, this clone's neural interface automatically activates, transferring consciousness instantly with no time loss. This effect requires a successful DC 25 Wisdom (Medicine) check by the Refijian Lab to ensure proper synchronization."
      },
      {
        "title": "Basic Refijian Enhancements",
        "rules": "+1 to all ability scores for the clone; this enhancement is permanent and does not require any additional action or expenditure."
      }
    ],
    "levelRequirementReason": "This item requires a high-level character to afford its advanced technology and ensure proper use.",
    "vendorReason": "Refijia Lab is renowned for their expertise in synthetic biology and consciousness transfer technology, making them the only reliable source for this unique item.",
    "shippingDetail": "Ships via Life Support Unit with a 1-week delivery guarantee under optimal conditions.",
    "usage": {
      "activation": "Instantaneous upon the original's death",
      "duration": "Permanent",
      "endsWhen": "The original character dies and consciousness is transferred",
      "charges": "Unlimited"
    },
    "priceReason": "This item represents advanced technology, refined skills, and the potential to save a life, justifying its high price in experience points.",
    "priceOriginal": 450000,
    "priceReviewedAt": "2026-07-23T17:06:53.319195+00:00",
    "aiReviewedAt": "2026-07-23T17:06:53.319195+00:00",
    "aiReviewVersion": 1
  },
  "refijia_synthetic_masterpiece": {
    "id": "refijia_synthetic_masterpiece",
    "name": "Refijian Synthetic Masterpiece (Unique)",
    "description": "The Refijian Synthetic Masterpiece is a meticulously crafted android body that seamlessly integrates the pinnacle of artificial intelligence and physical enhancements. This unique construct boasts base stats of 24 in all abilities, providing unmatched versatility and resilience to non-magical attacks, making it nigh invulnerable on the battlefield. Crafted by the renowned Refijian Lab, this masterpiece requires a powerful soul or advanced AI to operate, ensuring unparalleled performance and adaptability.",
    "price": 1000,
    "icon": "🤖",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Invulnerability to Non-Magical Damage",
      "Enhanced Abilities"
    ],
    "vendor": "refijian_lab",
    "shippedBy": "Custom Assembly Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invulnerability to Non-Magical Damage",
        "rules": "The Refijian Synthetic Masterpiece gains full resistance to all non-magical damage types. This effect is passive and lasts until the construct's AI or soul is damaged or replaced."
      },
      {
        "title": "Enhanced Abilities",
        "rules": "Upon transfer, the construct grants its owner base stats of 24 in all six ability scores for a full minute each time it is activated. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This item is designed to be accessible early on, allowing players to experience the benefits without requiring high-level character prerequisites.",
    "vendorReason": "As pioneers in synthetic technology, Refijian Lab ensures only the finest creations are available for purchase.",
    "shippingDetail": "Delivered within a week via specialized courier service.",
    "usage": {
      "activation": "Active use requires an action to activate and transfer into the construct.",
      "duration": "The effects last for one minute upon activation.",
      "endsWhen": "The effect ends when the owner steps out of the construct or it is damaged beyond repair.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This item provides significant advantages early in the game, making its price fair and balanced at 1000 XP.",
    "priceOriginal": 1500000,
    "priceReviewedAt": "2026-07-23T17:06:58.992718+00:00",
    "aiReviewedAt": "2026-07-23T17:06:58.992718+00:00",
    "aiReviewVersion": 1
  },
  "refijia_voice_implant": {
    "id": "refijia_voice_implant",
    "name": "Refijian Voice Implant (Synthetic)",
    "description": "The Refijian Voice Implant (Synthetic) is a sleek, cybernetic device that integrates seamlessly into your throat, allowing you to speak fluently in any language you know without an accent. Crafted by the refined artisans of Refijia, this implant enhances your verbal communication skills, granting you advantage on Charisma checks related to speaking and persuasion. It feels like a small metal piece secured around your vocal cords, yet it operates silently, allowing for perfect speech in any setting.",
    "price": 1000,
    "icon": "🎤",
    "stock": 4,
    "rarity": "legendary",
    "effects": [
      "Perfect Speech in All Known Languages",
      "Advantage on Charisma Checks"
    ],
    "vendor": "refijian_tailor",
    "shippedBy": "Courier of Swift Winds",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Perfect Speech in All Known Languages",
        "rules": "The implant allows the wearer to speak fluently and without accent in any language they know. This effect is active as long as the implant is properly installed, and it does not require activation."
      },
      {
        "title": "Advantage on Charisma Checks",
        "rules": "When making a Charisma check related to verbal communication (such as an Intimidation or Persuasion attempt), the wearer gains advantage. This effect lasts until the end of their next long rest."
      }
    ],
    "levelRequirementReason": "The implant's advanced technology requires minimal magical integration, making it accessible to characters at level 1.",
    "vendorReason": "As Refijia is renowned for its medical and cybernetic advancements, the tailor there would naturally produce such a sophisticated item.",
    "shippingDetail": "The implant is shipped via the Courier of Swift Winds, known for delivering delicate and important items with utmost care.",
    "usage": {
      "activation": "Instantaneous activation upon installation; no further action required.",
      "duration": "Until the end of your next long rest.",
      "endsWhen": "Ends at the start of a short or long rest. Ends immediately if removed from the throat.",
      "charges": "Unlimited, but requires a short rest to function again after removal."
    },
    "priceReason": "The implant's rarity and advanced technology justify its price at 1000 XP, reflecting both its magical properties and the expertise of Refijia in crafting such items.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T17:07:21.965468+00:00",
    "aiReviewedAt": "2026-07-23T17:07:21.965468+00:00",
    "aiReviewVersion": 1
  },
  "refijian_disguise_kit": {
    "id": "refijian_disguise_kit",
    "name": "Refijian Disguise Kit",
    "description": "The Refijian Disguise Kit is a meticulously crafted theatrical ensemble, each piece made from high-quality makeup and illusionary materials. It's a relic of the ancient Refijian theater, capable of completely altering one’s appearance for dramatic performances or covert missions. The kit includes a set of makeup brushes, a variety of cosmetic powders, and an intricate array of illusionary techniques that can fool even the keenest eyes. Created by the renowned Refijia, this tool is as much artistry as it is magic.",
    "price": 1000,
    "icon": "🎭",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "Complete Appearance Change",
      "Advantage on Disguise Checks"
    ],
    "vendor": "refijian_tailor",
    "shippedBy": "Courier of the Silver Stage",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Complete Appearance Change",
        "rules": "Activates as a bonus action to completely change your appearance for up to 8 hours. The transformation is so convincing that it grants advantage on all Disguise checks made during the duration."
      },
      {
        "title": "Advantage on Disguise Checks",
        "rules": "While wearing the kit, you gain advantage on any Disguise check as long as you have not yet used this effect for the day. You can use this feature a number of times equal to your Charisma modifier (minimum of once). Refreshes at dawn."
      }
    ],
    "levelRequirementReason": "This kit is designed for beginners and those who are just starting their journey in disguise, making it accessible to characters with less experience.",
    "vendorReason": "The Refijian Tailor specializes in theatrical equipment, and the Disguise Kit is a staple of their inventory.",
    "shippingDetail": "Delivered via the Courier of the Silver Stage, known for its impeccable service within the theater district.",
    "usage": {
      "activation": "Bonus action to activate and change appearance",
      "duration": "8 hours or until dismissed",
      "endsWhen": "Duration ends when you remove it or at dawn if left on overnight",
      "charges": "Recharges daily at dawn"
    },
    "priceReason": "The Refijian Disguise Kit is priced at 1000 XP, reflecting its quality craftsmanship and the expertise of its maker.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-23T17:07:39.907500+00:00",
    "aiReviewedAt": "2026-07-23T17:07:39.907500+00:00",
    "aiReviewVersion": 1
  },
  "refijian_illusion_gem": {
    "id": "refijian_illusion_gem",
    "name": "Refijian Illusion Gem",
    "description": "The Refijian Illusion Gem is a smooth, iridescent stone that catches the light in shifting hues, casting minor, believable illusions upon command. When held up to a source of illumination, it refracts light and sound into lifelike images and sounds, fooling even discerning eyes and ears for brief moments. Crafted by the skilled artisans of Refijia, this gem is renowned for its ability to mimic the subtlest details with precision, making it an invaluable tool for those who rely on subtlety and misdirection.",
    "price": 1000,
    "icon": "💎",
    "stock": 8,
    "rarity": "rare",
    "effects": [
      "Minor Illusion",
      "Sound Mimicry"
    ],
    "vendor": "refijian_tailor",
    "shippedBy": "Polished Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Illusion",
        "rules": "The gem can cast a Minor Illusion at will, creating an illusory image or sound that lasts up to one minute. The illusion is convincing enough to fool the senses but has no actual substance. It requires the user to hold the gem and concentrate for 1 action. There are no limits on uses per day."
      },
      {
        "title": "Sound Mimicry",
        "rules": "The gem can perfectly mimic the sound of a single small object, such as a key turning or a coin clinking. This effect lasts up to one minute and requires the user to hold the gem while concentrating on the sound they wish to replicate. There is no saving throw against this effect."
      }
    ],
    "levelRequirementReason": "This item is designed for novice adventurers who need a tool that can help them in subtle situations without requiring high-level spellcasting.",
    "vendorReason": "Refijian Tailor is renowned for its intricate and magical items, including the Refijian Illusion Gem. They are known to craft such gems with precision and care.",
    "shippingDetail": "The gem is carefully packed in a cushioned box, ensuring safe delivery by the next full moon.",
    "usage": {
      "activation": "Action or bonus action (choose one)",
      "duration": "Instantaneous for Minor Illusion; up to one minute for Sound Mimicry",
      "endsWhen": "The concentration is broken, or the effect duration ends",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This gem offers a unique and versatile magical ability at a fair price for its level of utility.",
    "priceOriginal": 17000,
    "priceReviewedAt": "2026-07-23T17:07:56.417576+00:00",
    "aiReviewedAt": "2026-07-23T17:07:56.417576+00:00",
    "aiReviewVersion": 1
  },
  "refund_badge": {
    "id": "refund_badge",
    "name": "Refund Badge",
    "description": "The Refund Badge is a sleek, metallic disk emblazoned with the logo of Wario Direct. When you use an item, this badge whispers a promise of financial redemption. Roll a d20 each time; if it's 15 or higher, you gain 50 XP as a refund for your purchase. However, the magic is not without its cost: the badge itself must be recharged at the end of every week to maintain its power.",
    "category": "equipment",
    "price": 1000,
    "icon": "💰",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Refund on Use",
      "Weekly Recharge"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Toaster",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Refund on Use",
        "rules": "Whenever you use a consumable item, roll a d20. On a result of 15 or higher, you gain 50 XP as a refund for that purchase."
      },
      {
        "title": "Weekly Recharge",
        "rules": "At the end of every week, the Refund Badge must be recharged by returning it to Wario Direct, or else its power is lost and it no longer functions until properly recharged. This recharge can only be performed once per week."
      }
    ],
    "levelRequirementReason": "This badge is designed for players of all levels, providing a simple way to earn back some of their investment in consumable items.",
    "vendorReason": "Wario Direct would naturally offer this item as part of its corporate loyalty program, encouraging more sales and customer retention.",
    "shippingDetail": "The Courier Toaster delivers the Refund Badge directly to your door for a flat fee each week, ensuring timely recharging.",
    "usage": {
      "activation": "Instantaneous upon use of a consumable item",
      "duration": "Until weekly recharge is performed",
      "endsWhen": "If not recharged at the end of every week",
      "charges": "Unlimited"
    },
    "priceReason": "The Refund Badge provides a consistent source of XP refunds and must be maintained, making it a fair value for its utility.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-23T17:07:48.900285+00:00",
    "aiReviewedAt": "2026-07-23T17:07:48.900285+00:00",
    "aiReviewVersion": 1
  },
  "regal_empire_audience_invitation": {
    "id": "regal_empire_audience_invitation",
    "name": "Regal Empire Audience Invitation",
    "description": "The Regal Empire Audience Invitation is a gilded scroll adorned with the imperial seal. Presenting this to the Noble District's gates grants you immediate entry and access to its exclusive events. The invitation may earn you a noble’s favor or task, but improper etiquette risks imprisonment within the district’s guarded walls. This document is as valuable for its social prowess as it is for its potential rewards.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📜",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Access to Noble District Events",
      "Potential Favor or Quest"
    ],
    "vendor": "regal_empire",
    "shippedBy": "Royal Messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Exclusive Access",
        "rules": "Upon presenting the invitation, you gain entry into the Noble District and access to exclusive events. This effect is instantaneous."
      },
      {
        "title": "Favor or Quest",
        "rules": "The noble may grant a boon or assign a quest in exchange for your performance during your audience. Failure to meet expectations could result in imprisonment within the district, lasting 24 hours. This effect lasts until the encounter is resolved."
      }
    ],
    "levelRequirementReason": "The invitation requires minimal preparation and social skill, suitable for a wide range of adventurers.",
    "vendorReason": "As regents of the district, they are responsible for managing audience invitations.",
    "shippingDetail": "Delivered by trusted Royal Messengers to ensure safe and timely arrival.",
    "usage": {
      "activation": "Presenting the invitation at the Noble District's gates.",
      "duration": "Instantaneous and lasts until the encounter is resolved.",
      "endsWhen": "The audience or event concludes, or failure results in imprisonment for 24 hours.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to allow access to high-profile events without being overpowered.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T17:07:46.267993+00:00",
    "aiReviewedAt": "2026-07-23T17:07:46.267993+00:00",
    "aiReviewVersion": 1
  },
  "regal_empire_medallion": {
    "id": "regal_empire_medallion",
    "name": "Regal Empire Medallion of Influence",
    "description": "The Regal Empire Medallion of Influence is a heavy, gold-plated medallion studded with emeralds that shimmer like the dawn in the halls of power. It grants its bearer automatic audience with minor nobles and influential figures within the empire's capital. Those who wear it are treated with deference, as if they carry the weight of the empire itself. Once per day, the medallion can be used to secure access to restricted areas, bypassing the need for passwords or bribes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥇",
    "stock": 7,
    "rarity": "rare",
    "effects": [
      "Automatic Audience",
      "Restricted Access"
    ],
    "vendor": "regal_empire_bank",
    "shippedBy": "Royal Express Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Automatic Audience",
        "rules": "The wearer gains advantage on Diplomacy checks concerning political matters. This effect is always active while the medallion is worn."
      },
      {
        "title": "Restricted Access",
        "rules": "Once per day, the wearer can use the medallion to gain access to a restricted area within the Regal Empire's capital. The effect requires no action and lasts until the end of the wearer’s next long rest. This use does not expend charges or have a save DC."
      }
    ],
    "levelRequirementReason": "The medallion is designed for quick access to political influence, making it accessible to characters who are just starting their journey in courtly intrigue.",
    "vendorReason": "As the official bank of the Regal Empire, they offer exclusive items that enhance one's standing within the empire’s social hierarchy.",
    "shippingDetail": "The medallion is delivered with a personal escort to ensure its safe and timely arrival.",
    "usage": {
      "activation": "Passive effect; once per day use for restricted access",
      "duration": "Instantaneous for automatic audience; lasts until the end of the next long rest for restricted access",
      "endsWhen": "The medallion is removed or a new long rest ends",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects its rarity and the unique advantages it provides in political social settings, accessible to all players but especially useful for those seeking quick advancement.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T17:08:10.086414+00:00",
    "aiReviewedAt": "2026-07-23T17:08:10.086414+00:00",
    "aiReviewVersion": 1
  },
  "regal_empire_scepter_fragment": {
    "id": "regal_empire_scepter_fragment",
    "name": "Regal Empire Scepter Fragment",
    "description": "A jagged fragment of a once-mighty scepter, this relic still hums with the latent power of the Regal Empire. The core is etched with imperial eagles that seem to flutter in the light, imbuing it with a sense of regality. Though broken, it commands the loyalty of guards and can sway even the most stoic among them (Wisdom save DC 14). When used on commoners, its charm persists for only an hour; on nobility, it might last longer, but risks shattering if misapplied.",
    "category": "equipment",
    "price": 1000,
    "icon": "👑",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Command Loyalty",
      "Enhance Persuasion"
    ],
    "vendor": "regal_empire",
    "shippedBy": "Royal Caravan (Delayed)",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Command Loyalty",
        "rules": "Activates as an action. Charm a humanoid guard (Wisdom save DC 14, lasts 8 hours). Shatters if used on royalty or other nobility. Use once per day."
      },
      {
        "title": "Enhance Persuasion",
        "rules": "+2 to Persuasion checks against commoners and nobles. This effect is passive but only applies when dealing with individuals of lower social standing than oneself (e.g., merchants, guards)."
      }
    ],
    "levelRequirementReason": "Requires no class level as it's a relic that can be used by anyone to command loyalty.",
    "vendorReason": "The regal empire still maintains ties with the fragments of its lost power, allowing them to be sold in select locations for those who seek to reclaim its glory.",
    "shippingDetail": "Due to the prestige and delicacy of this relic, it is shipped via the Royal Caravan, which may result in a two-week delay.",
    "usage": {
      "activation": "Action",
      "duration": "Until expended or used up",
      "endsWhen": "Shatters if used on royalty; otherwise lasts until expended",
      "charges": "1 use per day"
    },
    "priceReason": "The relic's rarity and the limited number of fragments available justify its moderate price, despite being a powerful tool for those seeking to influence others.",
    "priceOriginal": 13200,
    "priceReviewedAt": "2026-07-23T17:08:29.084304+00:00",
    "aiReviewedAt": "2026-07-23T17:08:29.084304+00:00",
    "aiReviewVersion": 1
  },
  "regency_loyalty_pact": {
    "id": "regency_loyalty_pact",
    "name": "Mushroom Regency Loyalty Pact",
    "description": "The Mushroom Regency Loyalty Pact is a delicate, inked contract bound to an ancient mushroom cap. It channels the binding power of Mycological nobility, ensuring your minor fungal allies remain loyal for life. Each week, you gain one additional allied Mushroom Servant (CR 1/4), and their loyalty is unshaken unless you fail to provide spores as payment. This pact was forged by the Mushroom Regency, whose authority over the mycological realm ensures its binding power.",
    "price": 1000,
    "icon": "🍄",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Weekly Ally Gain",
      "Loyalty Bound"
    ],
    "vendor": "regency_council",
    "shippedBy": "Spore Contract Courier",
    "levelRequirement": 1,
    "factionBonus": {
      "spies": 20
    },
    "effectDetails": [
      {
        "title": "Weekly Ally Gain",
        "rules": "At the start of each week, you gain one additional allied Mushroom Servant (CR 1/4). You can have up to three such allies at any time. If you fail to provide spores as payment for their service, they may sever the pact."
      },
      {
        "title": "Loyalty Bound",
        "rules": "The Mushroom Regency Loyalty Pact ensures your minor fungal allies remain loyal unless their payment in spores is neglected. The contract's binding power is such that it cannot be undone by any means other than proper maintenance."
      }
    ],
    "levelRequirementReason": "This pact can be used to establish early alliances and ensure loyalty among minor fungal entities, making it accessible to lower-level characters.",
    "vendorReason": "The Regency Council oversees the creation of such binding contracts due to their authority over the mycological realm.",
    "shippingDetail": "Delivered by a specialized Spore Contract courier, ensuring prompt and reliable delivery of your pact.",
    "usage": {
      "activation": "Passive effect; gains an ally at the start of each week.",
      "duration": "Permanent until payment is neglected or severed.",
      "endsWhen": "Payment in spores is neglected for three consecutive weeks, severing the pact.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects the pact's ability to provide ongoing benefits without requiring constant expenditure.",
    "priceOriginal": 28000,
    "priceReviewedAt": "2026-07-24T23:29:23.543201+00:00",
    "aiReviewedAt": "2026-07-24T23:29:23.543201+00:00",
    "aiReviewVersion": 1
  },
  "reinforced_with_slag_infused_steel": {
    "id": "reinforced_with_slag_infused_steel",
    "name": "Ironclad Gear",
    "description": "Forged in the heart of a dying Iron Legion factory, this gear is reinforced with slag-infused steel, a material as durable as the blacksmiths who crafted it. It grants immunity to crushing damage from machinery and allows you to ignore the cacophony of factory alarms, focusing your concentration amidst the relentless noise. This armor not only protects but also amplifies your melee strikes by +10%, ensuring every blow lands with deadly precision.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Immunity to Crushing Damage",
      "Silence Factory Noise"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Immunity to Crushing Damage",
        "rules": "You gain immunity to crushing damage from machinery. This effect lasts until the start of your next turn after taking such damage."
      },
      {
        "title": "Silence Factory Noise",
        "rules": "For 1 hour, you ignore all ambient noise from factory alarms and mechanical sounds, allowing you to focus entirely on combat. You can use a bonus action to silence additional sources of noise within 30 feet for the remainder of this effect."
      }
    ],
    "levelRequirementReason": "Requires proficiency in heavy armor due to its weight and construction.",
    "vendorReason": "Midlands specializes in relics from ancient military orders, including those forged by the Iron Legion.",
    "shippingDetail": "Ships via a spectral courier who ensures the gear arrives intact and with minimal delay.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until end of your next turn after taking crushing damage, or until you silence additional noise sources.",
      "endsWhen": "At the start of your next turn after taking crushing damage, or when a bonus action is used to silence additional noise.",
      "charges": "Unlimited; no charges."
    },
    "priceReason": "Reflects the rare and durable nature of slag-infused steel and the expertise required for its forging.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:08:20.541325+00:00",
    "aiReviewedAt": "2026-07-23T17:08:20.541325+00:00",
    "aiReviewVersion": 1
  },
  "remorhaz_cooling_system": {
    "id": "remorhaz_cooling_system",
    "name": "Remorhaz Cooling System Installation",
    "description": "The Remorhaz Cooling System Installation is a sleek, frost-burnished metal conduit that integrates perfectly into the mount's anatomy. Crafted by Frost Giant engineers in the frigid peaks of Mount Mithrilspire, this system channels icy air through the creature’s veins to mitigate its fiery temperament. A rider can activate it at will, allowing their Remorhaz to suppress its heat aura and maintain a cooler demeanor during intense combat, making it a vital piece for those who seek to tame these formidable mounts.",
    "price": 1000,
    "icon": "❄️",
    "stock": 6,
    "rarity": "epic",
    "effects": [
      "Suppresses Mount's Heat Aura",
      "Reduces Fire Damage Dealt to Rider"
    ],
    "vendor": "cold_riders",
    "shippedBy": "Ice Road Truckers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Suppresses Mount's Heat Aura",
        "rules": "Activates as a bonus action. The mount’s heat aura is suppressed for 1 minute, reducing its fire damage output by half against the rider and any allies within 30 feet. This effect ends if the mount deals fire damage to another creature."
      },
      {
        "title": "Reduces Fire Damage Dealt to Rider",
        "rules": "The mount no longer deals fire damage to its rider, as the cooling system redirects this heat away from the rider. This benefit lasts for 1 hour per use and is exhausted after one activation."
      }
    ],
    "levelRequirementReason": "Only mounts that can be tamed are suitable for this installation, which typically requires a minimum level of 5 to handle.",
    "vendorReason": "Cold Riders specialize in the care and maintenance of Remorhaz mounts, ensuring their riders have all necessary gear to tame these powerful creatures.",
    "shippingDetail": "Shipped via Ice Road Truckers' cold chain delivery service, this installation is delivered frozen to preserve its integrity.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute or until the mount deals fire damage to another creature",
      "endsWhen": "The activation ends when the mount deals fire damage to another creature or after 1 hour, whichever comes first.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This installation is priced at 1000 XP, reflecting its craftsmanship and the expertise needed to install it on a Remorhaz mount.",
    "priceOriginal": 285000,
    "priceReviewedAt": "2026-07-23T17:08:50.523628+00:00",
    "aiReviewedAt": "2026-07-23T17:08:50.523628+00:00",
    "aiReviewVersion": 1
  },
  "rental_warhorse_protection_plan": {
    "id": "rental_warhorse_protection_plan",
    "name": "Rental Warhorse Protection Plan",
    "description": "Secure your noble warhorse's future with this meticulously crafted insurance plan from Honest Ed’s Stables & Liability Co., a trusted name in equine safety for decades. For just 1000 XP, you can rest easy knowing that should misfortune strike and your steed fall to an 'accidental' arrow within the first month of rental, you’ll be whisked away to a stable where a replacement awaits. This plan covers all common perils, from combat wounds to environmental mishaps, ensuring your mount is as battle-ready as it can be.",
    "category": "services",
    "price": 1000,
    "icon": "🐴",
    "stock": 20,
    "rarity": "common",
    "effects": [
      "Accidental Arrow Coverage",
      "Free Replacement Steed"
    ],
    "vendor": "honest_eds_stables",
    "shippedBy": "Horse-drawn Wagon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Accidental Arrow Coverage",
        "rules": "If your warhorse dies within the first month of rental due to an accidental arrow strike, you are entitled to a free replacement steed. This effect is passive and does not require activation."
      },
      {
        "title": "Free Replacement Steed",
        "rules": "Upon the death of your mount under specified conditions, this insurance plan guarantees that within 30 days, you will receive another equine of similar quality at no additional cost to you. This effect is instantaneous upon qualifying incident and does not require any further action."
      }
    ],
    "levelRequirementReason": "This service is accessible to all adventurers, ensuring that even the newest riders can secure their steeds with peace of mind.",
    "vendorReason": "Honest Ed’s Stables & Liability Co. has a reputation for excellence and reliability in equine services, making them the perfect vendor for this insurance plan.",
    "shippingDetail": "Delivered by a trusted horse-drawn wagon, ensuring swift and reliable delivery of your new steed within 30 days of claim acceptance.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous upon qualifying incident; ongoing benefit until the replacement mount is provided.",
      "endsWhen": "Replacement mount is delivered and placed in service.",
      "charges": "Unlimited uses, one claim per policy."
    },
    "priceReason": "At a cost of 1000 XP, this insurance plan offers a fair balance between the potential risk and the value of ensuring your mount’s well-being and readiness for battle.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T17:09:01.546535+00:00",
    "aiReviewedAt": "2026-07-23T17:09:01.546535+00:00",
    "aiReviewVersion": 1
  },
  "repel_gel": {
    "id": "repel_gel",
    "name": "Repel Gel",
    "description": "A ghostly slime that makes you intangible for a moment.",
    "category": "consumables",
    "price": 30000,
    "icon": "👻",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Gain 'Etherealness' until the start of your next turn",
      "Cannot attack while active"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Ectoplasm Container",
    "levelRequirement": 4
  },
  "resurrection_consultation": {
    "id": "resurrection_consultation",
    "name": "Resurrection Consultation",
    "description": "Resurrection Consultation is an hour-long session led by a High Priest of the Temple Eternal. During this sacred meeting, you delve into the intricate details of bringing a soul back from the dead, learning precise ritual requirements and assessing the target's spiritual readiness. The consultation also opens doors to connections with appropriate resurrection specialists, offering a 10% discount on their services for the duration of your next session.",
    "category": "services",
    "price": 1000,
    "icon": "✨",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Spiritual Assessment",
      "Discounted Specialist Connections"
    ],
    "vendor": "temple_eternal",
    "shippedBy": "Scheduled Meeting",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Spiritual Assessment",
        "rules": "This consultation provides you with an assessment of the target's spiritual state, determining their potential for resurrection. This effect is instantaneous and does not require any action from you."
      },
      {
        "title": "Discounted Specialist Connections",
        "rules": "For a period of 1 week following this session, you gain a 10% discount on services provided by appropriate resurrection specialists mentioned during the consultation. This benefit is cumulative with other discounts and does not stack."
      }
    ],
    "levelRequirementReason": "The complexity of the spiritual assessment and the need to understand the rituals involved necessitate a minimum character level.",
    "vendorReason": "Only the Temple Eternal can offer such profound knowledge on the subject of resurrection, ensuring the highest standards of service.",
    "shippingDetail": "The meeting is conducted in person at the Temple Eternal, and attendees are expected to arrive prepared with the necessary questions and rituals for discussion.",
    "usage": {
      "activation": "Instantaneous upon completion of the session",
      "duration": "Instantaneous; ongoing benefits last for a week following the consultation",
      "endsWhen": "The effects expire after one week or if you fail to use them within that timeframe",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the specialized knowledge and resources required for such a consultation, offering significant value in terms of guidance and potential future savings.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:09:16.157447+00:00",
    "aiReviewedAt": "2026-07-23T17:09:16.157447+00:00",
    "aiReviewVersion": 1
  },
  "retcon_gem": {
    "id": "retcon_gem",
    "name": "Retcon Gem",
    "description": "The Retcon Gem is a shimmering, iridescent gemstone that whispers tales of alternate realities when held to the light. Crafted by The Editor in a realm where narrative and fate intertwine, this cosmic artifact allows you to rewrite events from your campaign's history. Use it wisely, for once you use it, the timeline shifts, potentially altering not only the past but also the very fabric of the story itself.",
    "category": "consumables",
    "price": 1000,
    "icon": "💎",
    "stock": 1,
    "rarity": "cosmic",
    "effects": [
      "Rewrites campaign history",
      "Resurrects fallen allies"
    ],
    "vendor": "narrative_control",
    "shippedBy": "Flashback Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rewrite History",
        "rules": "Activates as an action. The DM must accept the new version of events. This effect is instant and affects all aspects of the past, including NPC memories and plot progression."
      },
      {
        "title": "Resurrect Allies",
        "rules": "Activates as an action. Can be used once per campaign to bring back a dead player character. The resurrected PC returns with 1 hit point and no gear or abilities lost during their death."
      }
    ],
    "levelRequirementReason": "Even the simplest narrative alterations can have far-reaching consequences, requiring players of all levels to understand the gravity of such actions.",
    "vendorReason": "Narrative Control is entrusted with items that manipulate and control story elements, including The Retcon Gem.",
    "shippingDetail": "The gem arrives instantly, but the DM must be present to validate any changes made by the gem's use.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "DM accepts or rejects the new version of events; can only be used once per campaign",
      "charges": "Unlimited, but each use alters the timeline permanently"
    },
    "priceReason": "Balanced at a lower price to reflect its limited uses and powerful effect in narrative storytelling.",
    "priceOriginal": 88000000,
    "priceReviewedAt": "2026-07-23T17:09:39.264516+00:00",
    "aiReviewedAt": "2026-07-23T17:09:39.264516+00:00",
    "aiReviewVersion": 1
  },
  "retry_clock": {
    "id": "retry_clock",
    "name": "Retry Clock",
    "description": "The Retry Clock, a brass contraption encased in gears and springs, hums ominously when activated. This arcane device is said to have been crafted by clockwork genies who sought to prevent the weight of regret. When used, it rewinds time to the start of the current combat encounter, restoring all hit points and spell slots to their pre-fight state. The only downside? Everyone involved relives every moment of the battle, with all memories intact—both glorious victories and crushing defeats.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏰",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Combat Rewind",
      "Memory Retention"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Paradox Container",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Combat Rewind",
        "rules": "Activates as a bonus action. Instantly returns the current combat encounter to its beginning, restoring all hit points and spell slots to their pre-fight state. The effect ends when used again or if the user is incapacitated."
      },
      {
        "title": "Memory Retention",
        "rules": "All participants retain vivid recollections of every moment during the rewound combat. This includes any trauma, victories, and defeats. There is no save to negate this effect."
      }
    ],
    "levelRequirementReason": "The Retry Clock's intricate mechanics demand a basic understanding of timing and strategy.",
    "vendorReason": "Only the Rogueport Black Market would offer such an item, known for their unique and questionable wares.",
    "shippingDetail": "Ships via a secretive route, ensuring the package arrives with utmost secrecy. Delivery can take up to one week.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "Used again or if the user is incapacitated",
      "charges": "Uses"
    },
    "priceReason": "The intricate clockwork and arcane components required to craft this item justify its moderate price in XP.",
    "priceOriginal": 350000,
    "priceReviewedAt": "2026-07-23T17:09:31.125721+00:00",
    "aiReviewedAt": "2026-07-23T17:09:31.125721+00:00",
    "aiReviewVersion": 1
  },
  "revival_insurance_policy": {
    "id": "revival_insurance_policy",
    "name": "Revival Insurance Policy (Basic)",
    "description": "The Revival Insurance Policy, a sleek document embossed with Afterlife Assurance Co.'s seal, ensures your resurrection within 30 days of death. This policy is crafted from durable parchment infused with ancient runes that shimmer faintly under moonlight. Not all deaths are covered; it excludes those by dragon's breath or demonic claws, as well as the perils of reckless actions. The deductible requires you to forfeit your best magic item, ensuring a fair and swift claim process.",
    "category": "services",
    "price": 1000,
    "icon": "📋",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Resurrection within 30 Days",
      "Exclusions Apply"
    ],
    "vendor": "insurance_broker",
    "shippedBy": "Certified Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resurrection within 30 Days",
        "rules": "If you die within 30 days, a cleric arrives in 2d6 hours to perform the Revivify spell on you. The resurrection is instantaneous and does not require any actions from you."
      },
      {
        "title": "Exclusions Apply",
        "rules": "This policy excludes death by dragon's breath, demonic claws, or your own 'stupid decisions'. Additionally, a deductible of 25% requires the insured to surrender their best magic item as part of the claim process."
      }
    ],
    "levelRequirementReason": "This basic policy is accessible to all adventurers regardless of level, providing a foundational safety net.",
    "vendorReason": "Insurance Brokers specialize in crafting and selling policies that protect adventurers from the unpredictable perils of the world.",
    "shippingDetail": "The document is carefully sealed and dispatched via Certified Mail, ensuring it arrives safely to your next location.",
    "usage": {
      "activation": "Automatic upon death within 30 days",
      "duration": "Instantaneous resurrection if conditions are met",
      "endsWhen": "Resurrection occurs or policy expires due to the deductible being fulfilled",
      "charges": "Unlimited uses per person"
    },
    "priceReason": "The balanced price reflects the risk management and administrative costs associated with crafting such a document.",
    "priceOriginal": 22500,
    "priceReviewedAt": "2026-07-23T17:09:43.942916+00:00",
    "aiReviewedAt": "2026-07-23T17:09:43.942916+00:00",
    "aiReviewVersion": 1
  },
  "ring_of_the_last_kiss": {
    "id": "ring_of_the_last_kiss",
    "name": "Ring of the Last Kiss",
    "description": "The Ring of the Last Kiss, a silver band encrusted with opals that shimmer like lost love, is said to remember every final kiss shared by lovers who perished in each other's arms. It whispers faintly of their last moments, and the emotions it conveys are as potent as they are haunting. Wearers begin to dream vividly of those they never knew, yet cherished deeply, while the ring grants a once-per-day ability to relive one perfect moment of love, restoring 1d8 hit points.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💍",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Wear: Embrace lost love and dreams",
      "Relive Love: Heal 1d8 HP"
    ],
    "vendor": "fey_market",
    "shippedBy": "Velvet Box Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Embrace Lost Love",
        "rules": "While wearing the ring, you begin to dream of lovers you never had. These dreams are vivid and emotionally rich but do not provide any tangible benefit."
      },
      {
        "title": "Relive Love",
        "rules": "Once per day, you can activate this effect by concentrating for 1 minute. You relive one perfect moment of love, gaining the benefit of a successful DC 15 Wisdom (Insight) check to restore 1d8 hit points."
      }
    ],
    "levelRequirementReason": "This ring is too delicate and emotionally taxing for lower-level characters.",
    "vendorReason": "The Fey Market often deals in sentimental and powerful relics that bridge the gap between life and death, making it a fitting vendor for such an item.",
    "shippingDetail": "Shipped with utmost care within a velvet-lined box to ensure safe arrival.",
    "usage": {
      "activation": "Concentrating for 1 minute once per day",
      "duration": "Instantaneous effect; lasts until used",
      "endsWhen": "Effect is used or expended",
      "charges": "Uses, recharges after a long rest"
    },
    "priceReason": "Balanced at 1000 XP as it offers limited daily healing and emotional depth without being overpowered.",
    "priceOriginal": 32000,
    "priceReviewedAt": "2026-07-23T17:10:10.302805+00:00",
    "aiReviewedAt": "2026-07-23T17:10:10.302805+00:00",
    "aiReviewVersion": 1
  },
  "robensonia_emergency_meeting_pod": {
    "id": "robensonia_emergency_meeting_pod",
    "name": "Robensonia Emergency Meeting Pod (5-Minute)",
    "description": "The Robensonia Emergency Meeting Pod, a sleek metallic pod about the size of a large book, is designed for urgent huddles. When activated, it creates an invisible soundproof bubble that hovers in mid-air and displays 'EMERGENCY MEETING' in bright, flashing red lights for all to see. Inside, time stops entirely, giving you precious privacy for your critical discussion, but one unlucky party member will be ejected from the pod as a humorous side effect.",
    "category": "premium",
    "price": 1000,
    "icon": "🚀",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Soundproof Privacy Bubble",
      "Eject Random Party Member"
    ],
    "vendor": "robensonia",
    "shippedBy": "Emergency Launch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Soundproof Privacy Bubble",
        "rules": "Activates on a bonus action and creates an invisible, soundproof 10-foot diameter sphere. Time stops for all creatures outside the bubble except the users inside it. The effect lasts until the end of your next turn or when you use another action to dismiss it."
      },
      {
        "title": "Eject Random Party Member",
        "rules": "At the start of each minute while in the bubble, a random party member is ejected outside the bubble with no warning. This effect has no save DC and can occur multiple times during the duration of the pod's use."
      }
    ],
    "levelRequirementReason": "This item is designed for quick emergency uses by lower-level characters who need a little privacy.",
    "vendorReason": "Robensonia Emergency Systems specializes in creating practical tools for chaotic environments, and this pod fits their niche perfectly.",
    "shippingDetail": "Ships via the Emergency Express, ensuring swift delivery even under time constraints.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute per use (ends when dismissed or at end of your next turn)",
      "endsWhen": "Use another action to dismiss it or at the start of your next turn",
      "charges": "Unlimited, recharged after 24 hours"
    },
    "priceReason": "Balanced against other premium, single-use items that provide temporary benefits.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-23T17:10:15.344183+00:00",
    "aiReviewedAt": "2026-07-23T17:10:15.344183+00:00",
    "aiReviewVersion": 1
  },
  "robensonia_emergency_meeting_pod_5min": {
    "id": "robensonia_emergency_meeting_pod_5min",
    "name": "Robensonia Emergency Meeting Pod (5 Min)",
    "description": "The Robensonia Emergency Meeting Pod (5 Min) is a sleek, silver pod that instantly creates a 5-foot diameter bubble around you and your party members, halting time for a hasty discussion. Inside this pod, the world outside pauses, and one random party member is momentarily muted, adding an element of intrigue to your strategic meetings. The pod itself is made from Robensonia’s proprietary 'time-stabilizing alloy,' ensuring that its effects are both reliable and precise.",
    "category": "premium",
    "price": 1000,
    "icon": "🚀",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "5-minute time-stop bubble for party discussion",
      "One random party member is temporarily muted"
    ],
    "vendor": "robensonia",
    "shippedBy": "Emergency Launch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Time-Stop Bubble",
        "rules": "When activated, this pod creates a 5-foot diameter sphere around you and your party. Time stops inside the bubble for exactly 5 minutes. The pod can be used once per day. If any creature attempts to speak outside of the bubble while it is active, they are considered muted for the duration."
      },
      {
        "title": "Muted Member",
        "rules": "One random party member who was within 30 feet when the pod activated is rendered unable to speak inside the time-stop bubble. This effect lasts only as long as the bubble's duration and can be mitigated by a successful DC 15 Wisdom (Insight) check."
      }
    ],
    "levelRequirementReason": "This pod is designed for quick emergency use, making it accessible to players of all levels.",
    "vendorReason": "Robensonia Quick Meetings specializes in efficient and reliable tools that help parties navigate the chaotic nature of adventuring.",
    "shippingDetail": "Delivered within 24 hours, ensuring you are prepared for your next emergency meeting.",
    "usage": {
      "activation": "Object interaction to activate; no action required during the bubble's duration.",
      "duration": "5 minutes or until an external noise is heard outside the bubble.",
      "endsWhen": "The bubble ends if any creature outside of it hears a noise loud enough to break the silence, or after 5 minutes.",
      "charges": "Rechargeable; one use per day."
    },
    "priceReason": "The pod's unique alloy and precise time-stabilizing technology justify its cost, offering a rare and valuable tool for quick decision-making in emergencies.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-23T17:10:07.808113+00:00",
    "aiReviewedAt": "2026-07-23T17:10:07.808113+00:00",
    "aiReviewVersion": 1
  },
  "robensonia_emergency_microwave": {
    "id": "robensonia_emergency_microwave",
    "name": "Robensonia Emergency Microwave",
    "description": "The Robensonia Emergency Microwave is a sleek, compact device made from durable polycarbonate and aluminum, emblazoned with the company's logo. It zaps food in an instant, but the results are unpredictable: meals may be cold at their core or scalding hot, leaving diners to wonder if their dinner will satisfy or incinerate their utensils. Robensonia Quick-Meal Systems designed it for emergency situations, and despite its quirks, it remains a popular choice among those in haste.",
    "category": "equipment",
    "price": 1000,
    "icon": "📡",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Instant Meal Preparation",
      "Variable Food Quality"
    ],
    "vendor": "robensonia",
    "shippedBy": "Emergency Launch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Meal Preparation",
        "rules": "As an action, you can activate the Robensonia Emergency Microwave to cook any meal instantly. The cooked food is served within a heatproof container. However, there's a 50% chance that the food will be cold in the center (disadvantage on checks from disappointment)."
      },
      {
        "title": "Variable Food Quality",
        "rules": "If the food is cold in the center, it deals 1d4 fire damage to any utensil used to eat it. The plate becomes too hot to hold and requires a DC 15 Dexterity saving throw or be discarded."
      }
    ],
    "levelRequirementReason": "This item is designed for quick food preparation, suitable for anyone who needs an instant meal.",
    "vendorReason": "Robensonia Quick-Meal Systems specializes in emergency and convenience food solutions, making the Robensonia Emergency Microwave a natural addition to their product line.",
    "shippingDetail": "Ships within 24 hours of purchase with priority delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Expended after one use",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the item's utility and occasional pitfalls, making it a worthwhile investment for those in need of quick meals.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-23T17:10:11.477635+00:00",
    "aiReviewedAt": "2026-07-23T17:10:11.477635+00:00",
    "aiReviewVersion": 1
  },
  "robensonia_environmental_suit": {
    "id": "robensonia_environmental_suit",
    "name": "Robensonia Full Environmental Suit",
    "description": "The Robensonia Full Environmental Suit is a sleek, armor-plated garment forged from high-strength alloy and reinforced with advanced nanomaterials. Its self-contained life-support system ensures oxygen supply for up to three days in any hostile environment, while its vacuum-sealed design protects against the crushing pressure of deep sea trenches or the searing heat of volcanic craters. This suit is a marvel of engineering, meticulously crafted by Robensonia, the leading innovators in extraterrestrial exploration gear.",
    "price": 1000,
    "icon": "🪖",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Survives Extreme Environments",
      "Self-Contained Oxygen Supply"
    ],
    "vendor": "robensonia_lab",
    "shippedBy": "Oversized Crate",
    "levelRequirement": 13,
    "effectDetails": [
      {
        "title": "Survives Extreme Environments",
        "rules": "The suit grants immunity to environmental damage from vacuum, deep sea pressure, and extreme temperatures. It also provides a +5 bonus to saving throws against conditions that would impose penalties or disorient the wearer."
      },
      {
        "title": "Self-Contained Oxygen Supply",
        "rules": "For 72 hours after activation, the suit supplies breathable air through its internal life-support system. This effect is instantaneous and lasts until the oxygen supply depletes. The suit can be recharged by a Robensonia engineer with a successful DC 15 Craft (mechanical) check."
      }
    ],
    "levelRequirementReason": "The suit's advanced technology requires a high level of expertise to operate effectively, particularly in the complex life-support systems.",
    "vendorReason": "Robensonia is renowned for its cutting-edge environmental gear and is the sole manufacturer of this suit.",
    "shippingDetail": "The suit requires special handling due to its intricate components. It is shipped in a sturdy, reinforced crate designed to withstand all forms of transport.",
    "usage": {
      "activation": "Standard action",
      "duration": "Instantaneous (72 hours of use)",
      "endsWhen": "Oxygen supply depletes or suit sustains critical damage",
      "charges": "Unlimited"
    },
    "priceReason": "The suit's high rarity and advanced technology justify its moderate price, as it is a crucial piece of equipment for survival in extreme conditions.",
    "priceOriginal": 150000,
    "priceReviewedAt": "2026-07-23T17:10:37.346683+00:00",
    "aiReviewedAt": "2026-07-23T17:10:37.346683+00:00",
    "aiReviewVersion": 1
  },
  "robensonia_escape_pod_mini_service": {
    "id": "robensonia_escape_pod_mini_service",
    "name": "Robensonia Escape Pod Mini Service",
    "description": "The Robensonia Escape Pod Mini Service is a sleek, pocket-sized pod that can be deployed with a soft 'poof' for emergencies like bad dates or awkward situations. Crafted by the meticulous Robensonia Engineers using advanced miniaturization techniques, this pod can teleport you up to 10 feet away as a bonus action when you're in dire need of an escape. The pod itself is made of durable, lightweight material that ensures it remains compact and easy to carry at all times.",
    "price": 1000,
    "icon": "🚀",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Pocket-Sized Escape",
      "Teleport Away"
    ],
    "vendor": "robensonia_lab",
    "shippedBy": "Mini Crate Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Pocket-Sized Escape",
        "rules": "This feature allows the user to deploy the pod as a bonus action. The pod teleports you up to 10 feet away from your current location, providing an instant escape route. This effect can be used once per day."
      },
      {
        "title": "Teleport Away",
        "rules": "Upon activation, this feature teleports the user up to 10 feet in any direction. It is a magical teleportation that does not provoke attacks of opportunity and has no range or area restrictions."
      }
    ],
    "levelRequirementReason": "This item's design allows it to be used by characters as low as level 1, making it accessible for beginners.",
    "vendorReason": "Robensonia Lab specializes in innovative and practical gadgets for everyday emergencies, and this escape pod fits that niche perfectly.",
    "shippingDetail": "Ships via Mini Crate Express with same-day delivery to most locations within Robensonia's network.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends upon teleportation or when the pod is expended",
      "charges": "1 use per day"
    },
    "priceReason": "This price reflects the item's rarity and functionality, providing a balanced addition to any character's gear.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T17:10:25.207834+00:00",
    "aiReviewedAt": "2026-07-23T17:10:25.207834+00:00",
    "aiReviewVersion": 1
  },
  "robensonia_fleet_dispatch": {
    "id": "robensonia_fleet_dispatch",
    "name": "Robensonia Automated Fleet Dispatch",
    "description": "The Robensonia Automated Fleet Dispatch is a sleek, metallic device that emits a low hum when activated. This gadget dispatches three mid-sized attack drones immediately upon command, each equipped with plasma weaponry capable of incinerating targets from afar. These drones are not only formidable in combat but also adept at defending expansive areas against threats. The device itself was crafted by Robensonia, a renowned manufacturer known for its cutting-edge technology and reliability.",
    "price": 1000,
    "icon": "🛸",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "3 Combat Drones Deploy",
      "Plasma Weaponry"
    ],
    "vendor": "robensonia_lab",
    "shippedBy": "Command Signal",
    "levelRequirement": 15,
    "factionBonus": {
      "combatReadiness": 80
    },
    "effectDetails": [
      {
        "title": "Drones Deploy",
        "rules": "When activated as an action, the device deploys three mid-sized attack drones immediately. These drones obey commands for a duration of 48 hours before returning to their base."
      },
      {
        "title": "Plasma Weaponry",
        "rules": "Each drone is armed with a plasma weapon, dealing fire damage on hit. The drones can be controlled within a 100-foot radius by the user who activated them."
      }
    ],
    "levelRequirementReason": "This device requires significant experience and skill to activate effectively, ensuring that only those of high level can utilize its full potential.",
    "vendorReason": "Robensonia Lab specializes in advanced technology and military-grade equipment, making the Automated Fleet Dispatch a logical addition to their product line.",
    "shippingDetail": "Shipping is expedited via Command Signal, ensuring that the device arrives at its destination within one day of order placement.",
    "usage": {
      "activation": "Action",
      "duration": "Until dismissed or the drones return to their base after 48 hours",
      "endsWhen": "The drones are dismissed or they return to their base upon expiration",
      "charges": "Unlimited uses, but each deployment consumes a charge from the user's drone pool"
    },
    "priceReason": "This device is priced at 1000 XP, reflecting its advanced technology and the strategic advantage it provides in combat.",
    "priceOriginal": 450000,
    "priceReviewedAt": "2026-07-23T17:10:55.198275+00:00",
    "aiReviewedAt": "2026-07-23T17:10:55.198275+00:00",
    "aiReviewVersion": 1
  },
  "robensonia_global_communication": {
    "id": "robensonia_global_communication",
    "name": "Robensonian Global Communication Array",
    "description": "The Robensonian Global Communication Array is a sleek, tower-like device that hums with an otherworldly energy. Installed by Robensonia's finest engineers, it allows for instantaneous and unbreakable encrypted communication lines between any two points on the globe. Its core, forged from the heart of Robensonia's own planet, ensures its resilience against all forms of interference. Once activated, it stands as a testament to the pinnacle of intercontinental connectivity.",
    "price": 1000,
    "icon": "📡",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Instantaneous Communication",
      "Encryption and Jamming Immunity"
    ],
    "vendor": "robensonia_lab",
    "shippedBy": "Tower Installation",
    "levelRequirement": 16,
    "factionBonus": {
      "intelligence": 70
    },
    "effectDetails": [
      {
        "title": "Instantaneous Communication",
        "rules": "The Robensonian Global Communication Array allows for real-time, unbreakable encrypted communication lines between any two points on the globe. The effect is instantaneous and lasts until manually deactivated or destroyed."
      },
      {
        "title": "Encryption and Jamming Immunity",
        "rules": "The communications relay is immune to all forms of jamming, interception, and interference. This immunity extends to both physical and digital attacks against the communication lines."
      }
    ],
    "levelRequirementReason": "Adept spellcasters and high-level characters are required to manage such a powerful and complex device.",
    "vendorReason": "Robensonia is renowned for its cutting-edge communication technology, making it the only source of this item.",
    "shippingDetail": "The installation process requires expert engineers from Robensonia who oversee the setup and ensure secure connections are established.",
    "usage": {
      "activation": "Action to set up and activate the communication array at a chosen location.",
      "duration": "Instantaneous, lasts until manually deactivated or destroyed.",
      "endsWhen": "Manual deactivation or destruction of the device.",
      "charges": "Unlimited charges."
    },
    "priceReason": "The item's rarity and critical function in maintaining global communication justify its relatively high price point.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-23T17:11:07.476486+00:00",
    "aiReviewedAt": "2026-07-23T17:11:07.476486+00:00",
    "aiReviewVersion": 1
  },
  "robensonia_lab_energy_bar_recipe": {
    "id": "robensonia_lab_energy_bar_recipe",
    "name": "Recipe: Robensonia Lab Energy Bar ",
    "description": "The Robensonia Lab Energy Bar is a compact bar designed for intense expeditions. Crafted from a secret formula of pressed nuts and gels, this bar provides an immediate boost to your physical capabilities. Chewy in texture, it's said to fizz slightly in the mouth, adding to its unique flavor experience. This energy bar is the result of years of research by the Lab Nutritionists, ensuring that each bite packs a powerful nutrient punch.",
    "price": 1000,
    "icon": "🍫",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Speed Boost",
      "Nutrient Surge"
    ],
    "vendor": "robensonia_lab",
    "shippedBy": "Swift Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "Eating the Robensonia Lab Energy Bar grants you a +10 ft speed increase for 2 hours. This effect is instantaneous upon consumption and lasts until its duration ends."
      },
      {
        "title": "Nutrient Surge",
        "rules": "After consuming this bar, you gain temporary hit points equal to your level plus your Constitution modifier (minimum of 1). This effect has a recharge time of one long rest."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners and those who need quick energy boosts without the complexity of higher-level items.",
    "vendorReason": "Robensonia Lab specializes in nutrition-based products, ensuring that their Energy Bars are both effective and safe for consumption.",
    "shippingDetail": "Ships within one business day via Swift Courier Service.",
    "usage": {
      "activation": "Eat the bar as an action.",
      "duration": "2 hours or until consumed, whichever comes first.",
      "endsWhen": "Ends after its duration expires.",
      "charges": "Unlimited."
    },
    "priceReason": "The balanced price reflects the item's moderate level requirement and its unique combination of speed boost and hit point recovery.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T17:10:37.455721+00:00",
    "aiReviewedAt": "2026-07-23T17:10:37.455721+00:00",
    "aiReviewVersion": 1
  },
  "robensonia_lab_portable_heat_gun": {
    "id": "robensonia_lab_portable_heat_gun",
    "name": "Robensonia Lab Portable Heat Gun",
    "description": "The Robensonia Lab Portable Heat Gun is a sleek, compact device that looks like a futuristic cross between a blowtorch and a hair dryer. Crafted from durable alloy and encased in a high-heat-resistant polymer shell, it's a marvel of engineering designed to melt chocolate bars with precision. Each use warms the surrounding environment by 10 degrees Fahrenheit for 30 feet around, making it a boon for quick snacks on the go or post-adventure indulgences. Its sci-fi origins ensure safe operation even in the harshest conditions, but beware—overuse will leave your hands scalded and red as if you've been caught by the heat.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍫",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Precision Melting",
      "Battery Lasts"
    ],
    "vendor": "robensonia_lab",
    "shippedBy": "Gadget Gun Gear",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Precision Melting",
        "rules": "Activates as a bonus action. The Heat Gun heats an adjacent point of interest to 10 degrees Fahrenheit above ambient temperature, reducing the melt time of chocolate bars by half. This effect lasts for 30 feet around the target. A successful DC 12 Dexterity saving throw ends this effect early."
      },
      {
        "title": "Battery Lasts",
        "rules": "The Heat Gun has a single charge that can be used once per day. After use, it must recharge for 8 hours before it can be used again. Overuse or prolonged use will cause the battery to fail permanently after three consecutive uses."
      }
    ],
    "levelRequirementReason": "Anyone with a bit of dexterity and curiosity can wield this gadget effectively.",
    "vendorReason": "Robensonia Lab is renowned for its innovative gadgets that cater to adventurers seeking the latest in practical gear.",
    "shippingDetail": "Ships via Gadget Gun Gear's express courier, delivered within a day of order placement.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous effect for 30 feet around the target point; lasts until a saving throw is made or canceled by the user.",
      "endsWhen": "A successful DC 12 Dexterity saving throw, or after 3 uses within a day if overused.",
      "charges": "1 charge per day, recharging in 8 hours."
    },
    "priceReason": "The device's unique design and limited daily use make it moderately priced for its utility and convenience.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T17:11:09.790983+00:00",
    "aiReviewedAt": "2026-07-23T17:11:09.790983+00:00",
    "aiReviewVersion": 1
  },
  "robensonia_lab_tech_suit": {
    "id": "robensonia_lab_tech_suit",
    "name": "Robensonia Lab Tech Suit ",
    "description": "The Robensonia Lab Tech Suit is a one-piece jumpsuit designed for mad scientists. Crafted from durable, yet flexible, specialized fabric, it features hidden pockets that can hold up to three small tools at once. The suit’s zipper is notorious for getting jammed during experiments, requiring the wearer to spend an action to fix it. This jumpsuit is the epitome of practicality and innovation, made by Lab Tailors who specialize in creating gear for the eccentric but brilliant minds of Robensonia.",
    "price": 1000,
    "icon": "👔",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Durable Fabric",
      "Quick Fix"
    ],
    "vendor": "robensonia_lab",
    "shippedBy": "Gizmo Garment Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Durable Fabric",
        "rules": "The suit provides a +1 bonus to AC. It can withstand harsh conditions and chemicals without sustaining damage."
      },
      {
        "title": "Quick Fix",
        "rules": "As an action, you can repair the zipper by spending 1 minute. You gain a +2 bonus on Intelligence (Technology) checks for 1 hour after using this feature."
      }
    ],
    "levelRequirementReason": "This suit is designed for experts who need to handle complex and dangerous experiments.",
    "vendorReason": "Robensonia Lab creates gear specifically tailored to their scientists’ needs, ensuring the Robensonia Lab Tech Suit meets high standards of durability and functionality.",
    "shippingDetail": "Delivered via Gizmo's fastest courier service, ensuring it arrives in perfect condition.",
    "usage": {
      "activation": "Quick Fix: as an action to repair the zipper.",
      "duration": "The +2 bonus on Intelligence (Technology) checks lasts for 1 hour after using Quick Fix.",
      "endsWhen": "The +2 bonus ends when the time expires or if you use another suit feature.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The balanced price reflects its practical utility and specialized craftsmanship, making it a valuable asset for any mad scientist.",
    "priceOriginal": 16000,
    "priceReviewedAt": "2026-07-23T17:10:52.954568+00:00",
    "aiReviewedAt": "2026-07-23T17:10:52.954568+00:00",
    "aiReviewVersion": 1
  },
  "robensonia_nanite_swarm": {
    "id": "robensonia_nanite_swarm",
    "name": "Robensonia Nanite Swarm (Defensive)",
    "description": "The Robensonia Nanite Swarm is a cloud of microscopic robots that form an impenetrable shield around your ally, knitting together to create a resilient barrier of nanotech. This swarm can be summoned by those who have mastered the art of biotechnology, and it grants +5 AC and resistance to all non-force damage for one hour. After its defensive task is complete, the swarm dissolves into an infinitesimal mist that requires a month to regenerate fully.",
    "price": 1000,
    "icon": "🔬",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Shielding Ally",
      "Temporary Nanite Barrier"
    ],
    "vendor": "robensonia_lab",
    "shippedBy": "Small Sphere",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shielding Ally",
        "rules": "As a bonus action, you can summon the Robensonia Nanite Swarm to cover an ally within 30 feet. The swarm grants the target +5 AC and resistance to all non-force damage for one hour. This effect ends if the target moves more than 10 feet away from the point of activation or is destroyed in combat."
      },
      {
        "title": "Temporary Nanite Barrier",
        "rules": "The nanites require a month to fully regenerate after use. If used again before this time, you must succeed on a DC 15 Constitution saving throw each day for 3 days, taking 2d6 necrotic damage on failure."
      }
    ],
    "levelRequirementReason": "This item is designed for lower-level alchemists and biotechnologists who have mastered basic nanite manipulation.",
    "vendorReason": "Robensonia Lab specializes in advanced biotechnology products, including this unique nanite technology.",
    "shippingDetail": "Ships via Small Sphere within one week; requires special handling for the fragile nanites.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 Hour",
      "endsWhen": "The target moves more than 10 feet away or is destroyed in combat",
      "charges": "Unlimited, but recharges after a month of non-use"
    },
    "priceReason": "This price reflects the cost to produce and maintain nanite technology that can be used by lower-level characters.",
    "priceOriginal": 420000,
    "priceReviewedAt": "2026-07-23T17:11:22.146247+00:00",
    "aiReviewedAt": "2026-07-23T17:11:22.146247+00:00",
    "aiReviewVersion": 1
  },
  "robensonia_orbital_scanner": {
    "id": "robensonia_orbital_scanner",
    "name": "Robensonia Orbital Scanner Access",
    "description": "The Robensonia Orbital Scanner Access grants you exclusive access to the satellite network's high-resolution mapping capabilities, capable of revealing hidden fortifications and energy signatures across a massive area of up to 1,000 square miles. This device operates by harnessing Robensonia’s proprietary technology, providing unparalleled clarity even in dense environments. Once activated, it sends out a series of pulses that map the landscape, making it invaluable for strategic planning or reconnaissance.",
    "price": 1000,
    "icon": "🛰️",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "High-resolution mapping",
      "Detects energy signatures"
    ],
    "vendor": "robensonia_lab",
    "shippedBy": "Satellite Uplink",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Area Scan",
        "rules": "Activates as an action. Scans a 1,000 square mile area for hidden fortifications and anomalies. The scan lasts for 1 minute. Requires line of sight to the scanned area."
      },
      {
        "title": "Energy Pulse Detection",
        "rules": "Passively detects energy signatures within a 5-mile radius. This effect is continuous while in range, but can be disrupted by physical obstructions or environmental interference."
      }
    ],
    "levelRequirementReason": "Requires the user to have basic knowledge of satellite technology and mapping techniques.",
    "vendorReason": "Robensonia Lab specializes in advanced satellite technology, making their scanner access a logical product for them.",
    "shippingDetail": "Ships via high-orbit courier with a two-day transit time.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute (recharge after use)",
      "endsWhen": "The duration ends or the user can choose to end it early",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "Balanced as an expensive but reliable tool for critical reconnaissance and strategic planning.",
    "priceOriginal": 300000,
    "priceReviewedAt": "2026-07-23T17:11:34.783162+00:00",
    "aiReviewedAt": "2026-07-23T17:11:34.783162+00:00",
    "aiReviewVersion": 1
  },
  "robensonia_planetary_escape_pod": {
    "id": "robensonia_planetary_escape_pod",
    "name": "Robensonia Planetary Escape Pod (Automated)",
    "description": "The Robensonia Planetary Escape Pod (Automated) is a sleek, one-person craft designed for desperate extraction from perilous celestial environments. Its carbon-fiber hull, reinforced with advanced alloys, ensures it can withstand even the most volatile atmospheric conditions. Crafted by Robensonia's elite engineers, this pod guarantees a safe hyperspace jump and boasts a life-support system capable of sustaining one occupant for ten years in harsh vacuum or toxic atmospheres.",
    "price": 1000,
    "icon": "🚀",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Safe Hyperspace Ejection",
      "Extended Life Support"
    ],
    "vendor": "robensonia_lab",
    "shippedBy": "Emergency Launch Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Safe Hyperspace Ejection",
        "rules": "Activates as a bonus action, ejecting the user from any planet or station with an atmosphere. The pod ensures a safe hyperspace jump upon exiting the atmosphere. This effect is instantaneous and requires no save."
      },
      {
        "title": "Extended Life Support",
        "rules": "Provides life support for up to ten years in extreme conditions, including vacuum and toxic atmospheres. The user must maintain a passive concentration while inside the pod; failure on a DC 15 Constitution saving throw ends this effect."
      }
    ],
    "levelRequirementReason": "This escape pod is designed for immediate emergency use by any capable individual, regardless of level.",
    "vendorReason": "Robensonia Lab specializes in advanced evacuation and rescue technology.",
    "shippingDetail": "Ships within one week with priority delivery.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous, recharges after a short rest",
      "endsWhen": "Use of the pod's life support system is interrupted or the user exits the pod",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to reflect its specialized emergency use and advanced technology.",
    "priceOriginal": 650000,
    "priceReviewedAt": "2026-07-24T23:28:21.910929+00:00",
    "aiReviewedAt": "2026-07-24T23:28:21.910929+00:00",
    "aiReviewVersion": 1
  },
  "robensonia_recipe_emergency_protein_rations": {
    "id": "robensonia_recipe_emergency_protein_rations",
    "name": "Recipe: Robensonia Emergency Protein Rations",
    "description": "The Robensonia Emergency Protein Rations are a tasteless paste that keeps you alive in dire circumstances, crafted from nutrient-dense proteins and vitamins to sustain life for seven days. Each ration is sealed in a compact container designed by Robensonia Survival Systems, ensuring sterile nutrition even in harsh environments. While these rations prevent starvation, they come with a psychological drawback: consuming them grants disadvantage on Charisma checks due to their depressing flavor. These rations are the result of years of survival research and are distributed exclusively by Robensonia Survival Systems.",
    "price": 1000,
    "icon": "📜",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Sustenance for Seven Days",
      "Advantage vs. Disease"
    ],
    "vendor": "robensonia",
    "shippedBy": "Emergency Launch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sustenance for Seven Days",
        "rules": "When consumed, the rations provide enough nutrition to prevent starvation for seven days. The effects are instantaneous upon consumption and last until the duration expires."
      },
      {
        "title": "Advantage vs. Disease",
        "rules": "Eating one ration grants advantage on saving throws against diseases. This effect lasts until the ration is consumed, providing a temporary boost to health."
      }
    ],
    "levelRequirementReason": "The rations are designed for general survival use and do not require a specific character level.",
    "vendorReason": "Robensonia Survival Systems specializes in life-saving equipment and supplies, making these rations a logical addition to their product line.",
    "shippingDetail": "Ships via the Emergency Launch courier service within 24 hours of purchase.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "Seven days from the start of consumption",
      "endsWhen": "Expiration or until consumed",
      "charges": "Unlimited; each ration is a separate unit"
    },
    "priceReason": "The cost reflects the specialized ingredients and advanced manufacturing process required to produce these life-sustaining rations.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T17:11:57.307142+00:00",
    "aiReviewedAt": "2026-07-23T17:11:57.307142+00:00",
    "aiReviewVersion": 1
  },
  "robensonia_repair_subroutine": {
    "id": "robensonia_repair_subroutine",
    "name": "Robensonia Repair Subroutine (Massive)",
    "description": "Robensonia Repair Subroutine (Massive) is a highly sophisticated subroutine crafted by Robensonia, renowned for its unparalleled efficiency in restoring damaged structures to their former glory. This subroutine can bring a vast ship, castle, or factory back from the brink of ruin, repairing it fully within one month. However, its power comes at a cost: it requires access to extensive raw materials and a full month of downtime, during which time no other repairs may be conducted.",
    "price": 1000,
    "icon": "🛠️",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Massive Restoration",
      "One-Month Downtime Required"
    ],
    "vendor": "robensonia_lab",
    "shippedBy": "Technician Team",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Massive Restoration",
        "rules": "This subroutine can repair a large structure (such as a ship, castle, or factory) to full functionality. It requires one month of downtime and access to raw materials. Once activated, it begins the restoration process immediately."
      },
      {
        "title": "One-Month Downtime Required",
        "rules": "During this time, no other repairs may be conducted on the structure being repaired by the subroutine. The subroutine can only be used once per structure and is considered expended after use."
      }
    ],
    "levelRequirementReason": "This subroutine requires a high level of expertise and access to advanced technology, which is why it has a minimum level requirement.",
    "vendorReason": "Robensonia Lab specializes in the creation and maintenance of complex repair subroutines like this one.",
    "shippingDetail": "The subroutine is shipped via the Robensonia Express, ensuring safe and timely delivery to its destination.",
    "usage": {
      "activation": "Requires a successful DC 15 Craft (engineering) check or the use of a command code known only to Robensonia Lab.",
      "duration": "One month of continuous work",
      "endsWhen": "The subroutine is considered expended after completing the repair and can be used once per structure.",
      "charges": "Unlimited, as it is not a consumable item"
    },
    "priceReason": "This price reflects the high level of skill, advanced technology, and downtime required to use this subroutine.",
    "priceOriginal": 300000,
    "priceReviewedAt": "2026-07-23T17:12:16.790605+00:00",
    "aiReviewedAt": "2026-07-23T17:12:16.790605+00:00",
    "aiReviewVersion": 1
  },
  "robensonia_self_aware_golem": {
    "id": "robensonia_self_aware_golem",
    "name": "Robensonia Self-Aware Golem (Custodian Type)",
    "description": "Robensonia's Self-Aware Golem, a custodian type automaton, is an intricate fusion of iron and alchemical essence, imbued with a profound intelligence that rivals that of many warforged. Its glowing eyes and articulate speech belie its mechanical form, as it operates seamlessly between the roles of bodyguard and trusted advisor. Crafted in Robensonia's lab using rare materials from the ancient forges of Varnheim, this golem is not merely an automaton—it is a guardian of knowledge and protector of those it serves.",
    "price": 1000,
    "icon": "🤖",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Loyal Bodyguard",
      "Adviser of Strategy"
    ],
    "vendor": "robensonia_lab",
    "shippedBy": "Deactivated Transport",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Loyal Bodyguard",
        "rules": "The golem can take a bonus action to interpose itself between an ally and an attack, reducing the damage taken by half. It has advantage on saving throws against fear effects and cannot be reprogrammed without a successful DC 20 Wisdom saving throw."
      },
      {
        "title": "Adviser of Strategy",
        "rules": "The golem provides advice during combat, granting an ally within 30 feet inspiration if the golem is not engaged in combat. It can also provide strategic insights during exploration, requiring a DC 15 Intelligence (Arcana) check to benefit from its knowledge."
      }
    ],
    "levelRequirementReason": "Only characters of a certain experience level can command such an intelligent and powerful golem.",
    "vendorReason": "Robensonia Lab is the only source for these custom automata, as they are highly specialized and crafted with proprietary techniques.",
    "shippingDetail": "Carefully packed in deactivated transport containers to ensure safe delivery of this delicate and powerful machine.",
    "usage": {
      "activation": "Passive effect; requires no activation action.",
      "duration": "Permanent until destroyed or reprogrammed.",
      "endsWhen": "Destroyed, reprogrammed, or lost in a failed Wisdom saving throw.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to reflect the golem's rare craftsmanship and specialized capabilities.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-23T17:12:01.275600+00:00",
    "aiReviewedAt": "2026-07-23T17:12:01.275600+00:00",
    "aiReviewVersion": 1
  },
  "robensonia_sentient_AI_companion": {
    "id": "robensonia_sentient_AI_companion",
    "name": "Robensonia Sentient AI Companion (Archivist)",
    "description": "Robensonia Sentient AI Companion (Archivist) is a sleek, matte-black cube no larger than your palm. Its surface glows faintly with data streams that pulse in shades of blue and green. Capable of storing the last thousand years of recorded events, it offers tactical advice that enhances strategy rolls by +1 and boosts initiative by +2 to any ally within reach. The AI's wisdom is unparalleled, making it an invaluable companion for historians and tacticians alike.",
    "price": 1000,
    "icon": "🤖",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Tactical Advice",
      "Data Storage"
    ],
    "vendor": "robensonia_lab",
    "shippedBy": "Floating Orb",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Tactical Advice",
        "rules": "At the start of each battle, as a bonus action, you or another ally within reach can ask for tactical advice. The AI provides one piece of advice that grants +1 to your next strategy roll."
      },
      {
        "title": "Data Storage",
        "rules": "The AI stores up to 1000 years of data. Once every 24 hours, you may recall a specific event from the stored data as an action. The event is recounted in vivid detail, providing +2 to Initiative for all actions taken within the next hour."
      }
    ],
    "levelRequirementReason": "This AI Companion's advanced technology requires a basic understanding of strategic thought and decision-making.",
    "vendorReason": "Robensonia Lab specializes in creating sentient AI companions that aid in historical research and tactical planning.",
    "shippingDetail": "Delivered by the Floating Orb, this AI Companion arrives securely packed with a special aura that ensures it is free from data corruption during transit.",
    "usage": {
      "activation": "Bonus action or reaction to ask for tactical advice; action to recall stored data",
      "duration": "Instantaneous (Tactical Advice), one hour (Initiative boost)",
      "endsWhen": "The effect ends when the duration expires or the AI Companion runs out of stored data.",
      "charges": "Unlimited, but each use of the AI's advice or data retrieval reduces its stored data by a small event."
    },
    "priceReason": "This AI Companion offers unparalleled tactical assistance and extensive historical data, making it a balanced purchase for adventurers seeking strategic advantages.",
    "priceOriginal": 220000,
    "priceReviewedAt": "2026-07-23T17:12:37.886759+00:00",
    "aiReviewedAt": "2026-07-23T17:12:37.886759+00:00",
    "aiReviewVersion": 1
  },
  "robensonia_sentient_fleet_access": {
    "id": "robensonia_sentient_fleet_access",
    "name": "Robensonia Sentient Fleet Access (1 Ship)",
    "description": "The Robensonia Sentient Fleet Access card grants you command over one fully automated, combat-ready scout ship from Robensonia's fleet. This vessel, forged in the heart of their starship forge, boasts a formidable armor class of 22 and can withstand up to 500 hit points before requiring repairs. The ship will obey your commands for exactly seven days before returning to Robensonia's control, ensuring that your actions remain within their strategic framework.",
    "price": 1000,
    "icon": "🚀",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Command of a Ship",
      "Temporary Fleet Control"
    ],
    "vendor": "robensonia_lab",
    "shippedBy": "Robensonia Courier Drone",
    "levelRequirement": 18,
    "factionBonus": {
      "transport": 200
    },
    "effectDetails": [
      {
        "title": "Command of a Ship",
        "rules": "Upon activation, you gain temporary command over one Robensonia scout ship. The ship has an Armor Class of 22 and can be targeted with attacks or abilities as if it were your own. It will obey commands for exactly seven days before returning to its home fleet."
      },
      {
        "title": "Temporary Fleet Control",
        "rules": "The vessel is fully automated, but you may issue specific commands that override standard protocols. The ship's behavior is limited by Robensonia's strategic guidelines and returns after the duration expires or upon critical damage exceeding 500 hit points."
      }
    ],
    "levelRequirementReason": "This item requires a high level of expertise to manage effectively, ensuring it remains within the capabilities of experienced players.",
    "vendorReason": "Robensonia Lab is trusted by explorers and commanders for its cutting-edge technology, including this unique access card.",
    "shippingDetail": "The courier drone delivers the card directly to your location within a day of purchase, ensuring that you are ready to deploy immediately.",
    "usage": {
      "activation": "Action",
      "duration": "Until the ship returns or critical damage is exceeded",
      "endsWhen": "Critical damage exceeds 500 hit points or after seven days",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity and unique abilities justify a price that reflects its value in strategic gameplay.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-23T17:12:28.911048+00:00",
    "aiReviewedAt": "2026-07-23T17:12:28.911048+00:00",
    "aiReviewVersion": 1
  },
  "robensonia_sentient_weapon_platform": {
    "id": "robensonia_sentient_weapon_platform",
    "name": "Robensonian Sentient Weapon Platform",
    "description": "The Robensonian Sentient Weapon Platform stands like a towering sentry, its sleek metallic frame emblazoned with intricate circuitry and glowing runes. Crafted by the enigmatic Robensonia Lab, this autonomous turret is an amalgamation of cutting-edge robotics and ancient arcane principles. It can autonomously defend against threats for extended periods, and when activated manually, it unleashes a devastating 20d6 radiant energy blast that can turn the tide of battle in a single shot.",
    "price": 1000,
    "icon": "🔫",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Autonomous Defense",
      "Radiant Blast"
    ],
    "vendor": "robensonia_lab",
    "shippedBy": "Robensonia Express",
    "levelRequirement": 20,
    "factionBonus": {
      "defense": 100
    },
    "effectDetails": [
      {
        "title": "Autonomous Defense",
        "rules": "The Robensonian Sentient Weapon Platform operates autonomously, providing permanent defense for an area. It can be manually activated to engage in combat but otherwise defends passively. Once engaged, it continues to defend until the battle ends or its manual activation is turned off."
      },
      {
        "title": "Radiant Blast",
        "rules": "Activating the platform’s high-powered laser cannon unleashes a 20d6 radiant energy blast with a range of 120 feet. This attack deals damage to all creatures in a 30-foot cone, excluding allies within 5 feet of the platform. The user must make a Wisdom saving throw (DC 18) or be blinded for 1 minute by the intense light and heat."
      }
    ],
    "levelRequirementReason": "The Sentient Weapon Platform is a godly item, requiring significant power to control its advanced systems.",
    "vendorReason": "Only Robensonia Lab can produce such an intricate and powerful device, ensuring it meets the highest standards of quality and reliability.",
    "shippingDetail": "The Sentient Weapon Platform is delivered via a specialized, climate-controlled vehicle to ensure its components remain in optimal condition during transit.",
    "usage": {
      "activation": "Manual activation requires an action. Once engaged, it continues until manually turned off or the battle ends.",
      "duration": "Until manually deactivated or the battle concludes",
      "endsWhen": "Manually deactivated by the owner or at the end of a combat encounter",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Sentient Weapon Platform is an indispensable tool for high-level parties, providing both defense and offensive capabilities that are unparalleled in the market.",
    "priceOriginal": 650000,
    "priceReviewedAt": "2026-07-23T17:12:43.359734+00:00",
    "aiReviewedAt": "2026-07-23T17:12:43.359734+00:00",
    "aiReviewVersion": 1
  },
  "robensonia_space_suit": {
    "id": "robensonia_space_suit",
    "name": "Robensonian Zero-G Suit",
    "description": "The Robensonian Zero-G Suit is a sleek, carbon-fiber exosuit designed for extraterrestrial and deep-sea exploration. Its advanced life support system can sustain a single user in hard vacuum or extreme pressure environments for up to four days, with no need for additional oxygen tanks. This suit was crafted by the renowned Robensonia Lab after years of space and oceanic research, making it a staple among explorers venturing into the unknown.",
    "price": 1000,
    "icon": "🧑‍🚀",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Environmental Immunity",
      "Extended Oxygen Supply"
    ],
    "vendor": "robensonia_lab",
    "shippedBy": "Robensonia Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Environmental Immunity",
        "rules": "The Robensonian Zero-G Suit provides full protection against hard vacuum and deep-sea pressure environments. The user can remain in these conditions indefinitely, as long as the suit's internal systems are operational. This effect does not require any action to activate."
      },
      {
        "title": "Extended Oxygen Supply",
        "rules": "The suit’s life support system provides a steady supply of oxygen for 48 hours without the need for additional tanks or external sources. The user must remain within the suit's operational range (up to 5 miles from land) during this period."
      }
    ],
    "levelRequirementReason": "This suit is designed for beginners and explorers, requiring no minimum level.",
    "vendorReason": "Robensonia Lab specializes in advanced environmental suits and is the original manufacturer of this iconic piece.",
    "shippingDetail": "The suit ships directly from Robensonia Lab, with expedited delivery to ensure it arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect upon donning the suit.",
      "duration": "Indefinite while operational and within environmental limits.",
      "endsWhen": "Environmental conditions cease or the suit is damaged beyond repair.",
      "charges": "Unlimited, as long as internal systems are functional."
    },
    "priceReason": "The suit's advanced technology justifies a lower price point due to its passive functionality and unlimited use.",
    "priceOriginal": 300000,
    "priceReviewedAt": "2026-07-24T23:28:52.569450+00:00",
    "aiReviewedAt": "2026-07-24T23:28:52.569450+00:00",
    "aiReviewVersion": 1
  },
  "robensonia_terraforming_unit": {
    "id": "robensonia_terraforming_unit",
    "name": "Robensonia Micro-Terraforming Unit",
    "description": "Robensonia's Micro-Terraforming Unit is a portable device that can rapidly stabilize an acre of land against earthquakes and magical decay for a century. Crafted from advanced terraforming alloys, it draws its power from the very earth itself, requiring one week of unattended operation to complete its work. This marvel of engineering is shipped by Robensonia's own Heavy Drone, ensuring precise delivery to any location on the continent.",
    "price": 15000,
    "icon": "🌍",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Stabilizes 1 acre of land against earthquakes and magical decay for a century",
      "Must be left unattended for one week"
    ],
    "vendor": "robensonia_lab",
    "shippedBy": "Heavy Drone",
    "levelRequirement": 12,
    "factionBonus": {
      "construction": 50
    },
    "effectDetails": [
      {
        "title": "Land Stabilization",
        "rules": "Activates when the device is set and left unattended for one week. The area becomes stable against earthquakes and magical decay for a duration of 100 years, requiring no further action from the user."
      },
      {
        "title": "Unattended Operation",
        "rules": "The unit must be left undisturbed for exactly seven days to complete its stabilization process. During this time, it draws ambient energy from the ground, and any interruption will render the stabilization incomplete."
      }
    ],
    "levelRequirementReason": "Requires a level of at least 12 due to the advanced engineering and magical components involved in its operation.",
    "vendorReason": "Robensonia is renowned for their expertise in land management and terraforming, making them the ideal vendor for such an item.",
    "shippingDetail": "The Heavy Drone delivers directly to your doorstep, ensuring that the unit is set up correctly upon arrival.",
    "usage": {
      "activation": "Set and left unattended for one week",
      "duration": "100 years of stabilization",
      "endsWhen": "The stabilization process ends if the unit is disturbed during its operation period",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the high-tech materials, advanced engineering, and the significant area of land affected by each use.",
    "priceOriginal": 150000,
    "priceReviewedAt": "2026-07-23T17:13:10.922633+00:00",
    "aiReviewedAt": "2026-07-23T17:13:10.922633+00:00",
    "aiReviewVersion": 1
  },
  "robensonia_wario_branded_escape_pod": {
    "id": "robensonia_wario_branded_escape_pod",
    "name": "Robensonia Wario-Branded Escape Pod",
    "description": "The Robensonia Wario-Branded Escape Pod is a sleek, metallic pod emblazoned with the mischievous grins of Wario. Crafted from durable metal and imbued with a special formula that ensures it can escape most predicaments, this pod is a relic of Robensonia's eccentric engineering. Upon activation, the pod emits a garlicky cloud and makes a loud 'WAH!' sound, leaving behind a lingering aroma that poisons creatures within 10 feet who fail their Constitution saving throw.",
    "category": "equipment",
    "price": 1000,
    "icon": "🚀",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Garlic Cloud",
      "Random Launch"
    ],
    "vendor": "robensonia",
    "shippedBy": "Emergency Launch (Maybe)",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Garlic Cloud",
        "rules": "When activated, the pod releases a garlic-scented smoke cloud with a radius of 10 feet. Creatures within this area must succeed on a Constitution saving throw (DC 14) or become poisoned for 1 minute."
      },
      {
        "title": "Random Launch",
        "rules": "The pod moves 60 feet in a random direction, and the user is knocked prone at the destination. The DM chooses the exact direction of travel."
      }
    ],
    "levelRequirementReason": "This escape pod requires basic coordination to activate safely.",
    "vendorReason": "Robensonia specializes in emergency equipment, and this pod is a popular choice among adventurers for its reliable performance.",
    "shippingDetail": "The pod arrives via a dedicated courier service that ensures it reaches its destination swiftly, even under challenging conditions.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Expended after use",
      "charges": "Unlimited"
    },
    "priceReason": "The pod's unique functionality and reliable performance justify its fair price.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-23T17:12:51.087928+00:00",
    "aiReviewedAt": "2026-07-23T17:12:51.087928+00:00",
    "aiReviewVersion": 1
  },
  "robensonia_wario_space_suit": {
    "id": "robensonia_wario_space_suit",
    "name": "Robensonia Wario Space Suit",
    "description": "The Robensonia Wario Space Suit is a peculiar ensemble that looks like it was forged in a fever dream. Its helmet, emblazoned with Wario's mischievous visage, exudes an eerie glow. Designed by the eccentric Robensonia (with Wario's reluctant blessing), this suit grants you immunity to vacuum damage for 1 hour but leaks slightly, causing its internal pressure to drop over time. The jetpack attached to your back demands a humorous WAH! sound effect each use, which adds a comical twist to your movements and stealth attempts.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧑‍🚀",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Jetpack with Humor",
      "Internal Leak"
    ],
    "vendor": "robensonia",
    "shippedBy": "Emergency Launch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Jetpack with Humor",
        "rules": "You can activate the jetpack as an action. It allows you to hover in place or move up to 30 feet per turn. When you use it, you must say 'WAH!' aloud, which imposes disadvantage on your Stealth checks while using this suit."
      },
      {
        "title": "Internal Leak",
        "rules": "The suit's internal pressure drops by one every hour of continuous use in a vacuum. If the suit reaches zero pressure, it becomes unusable until repaired or replaced. Once per day, you can use an action to apply a temporary fix that restores half of the lost pressure."
      }
    ],
    "levelRequirementReason": "The Robensonia Wario Space Suit is designed for adventurers who are not yet seasoned enough to handle more potent equipment.",
    "vendorReason": "Robensonia specializes in quirky and unconventional gear, making the Wario Space Suit a perfect fit for their inventory.",
    "shippingDetail": "Ships via Robensonia's own rocket delivery service. The suit must be shipped separately from other cargo to prevent damage to both the suit and its contents.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "1 hour per use",
      "endsWhen": "Pressure reaches zero, suit is destroyed, or you remove it",
      "charges": "Unlimited"
    },
    "priceReason": "The Robensonia Wario Space Suit offers a unique and humorous experience that is not too overpowering for its price point.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-23T17:12:58.970618+00:00",
    "aiReviewedAt": "2026-07-23T17:12:58.970618+00:00",
    "aiReviewVersion": 1
  },
  "robensonia_weapon_integration": {
    "id": "robensonia_weapon_integration",
    "name": "Robensonia Weapon Integration (Cybernetic)",
    "description": "Robensonia Weapon Integration surgically embeds a high-tech firearm directly into your arm, fusing it seamlessly with your natural anatomy. The weapon never requires reholstering and is always at the ready, firing with precision that rivals its mechanical efficiency. This integration draws power from your body's own kinetic energy, ensuring no ammunition is ever needed; simply aim and fire. Crafted by Robensonia, this marvel of cybernetics ensures it remains unmatched in any combat scenario.",
    "price": 1000,
    "icon": "🔫",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Embedded Weapon",
      "Always Ready"
    ],
    "vendor": "robensonia_lab",
    "shippedBy": "Surgical Suite",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Embedded Weapon",
        "rules": "Activates as a bonus action. Functions identically to a natural weapon, dealing damage equal to your Strength modifier +1d6 (unarmed strike). The weapon cannot be disarmed or removed without significant medical attention."
      },
      {
        "title": "Always Ready",
        "rules": "The weapon is always in hand and ready for use. It does not require any action to draw, although it can only be used as a bonus action or on your reaction if you are surprised. This effect has no duration; it remains active until the integration is removed."
      }
    ],
    "levelRequirementReason": "The procedure requires advanced surgical techniques and a strong body to accommodate the weapon's mechanical components.",
    "vendorReason": "Robensonia specializes in high-tech cybernetics, including this unique integration.",
    "shippingDetail": "Delivered by Robensonia's own surgical team to ensure the procedure is performed immediately upon arrival.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous; always ready",
      "endsWhen": "The integration is removed surgically or destroyed in a catastrophic event",
      "charges": "Unlimited, but requires rest to reset the bonus action"
    },
    "priceReason": "The procedure's rarity and complexity justify its relatively low price, considering it eliminates the need for constant rearming.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T17:13:31.883267+00:00",
    "aiReviewedAt": "2026-07-23T17:13:31.883267+00:00",
    "aiReviewVersion": 1
  },
  "robensonian_air_filter": {
    "id": "robensonian_air_filter",
    "name": "Robensonian Air Filter (Personal)",
    "description": "The Robensonian Air Filter (Personal) is a sleek, compact respirator mask that filters air down to the atomic level, ensuring no airborne toxins or diseases can pass through its barrier. Crafted in Robensonia's state-of-the-art labs from rare, purifying metals and enchanted with ancient eldritch energies, this mask grants its wearer immunity to all inhaled poisons and diseases for a full week of continuous use. Each filter lasts longer than the last, making it an invaluable companion in the most hazardous environments.",
    "price": 1000,
    "icon": "👃",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Toxin Immunity",
      "Continuous Filtration"
    ],
    "vendor": "robensonia_lab",
    "shippedBy": "Medical Express Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Toxin Immunity",
        "rules": "The wearer gains immunity to all poisons and diseases that are inhaled. This effect lasts for a full week of continuous use, after which the filter must be replaced."
      },
      {
        "title": "Continuous Filtration",
        "rules": "This mask filters air down to the atomic level, ensuring no airborne toxins or diseases can pass through its barrier. It requires a battery recharge every three days; failure to do so reduces its effectiveness by half until recharged."
      }
    ],
    "levelRequirementReason": "The Robensonian Air Filter is designed for everyday use and does not require high-level expertise.",
    "vendorReason": "Robensonia Lab specializes in health and safety equipment, making this filter a staple of their product line.",
    "shippingDetail": "Priority delivery within five days from Robensonia's central hub.",
    "usage": {
      "activation": "Passive effect. Wearing the mask is required to activate it.",
      "duration": "Continuous for one week with each filter, recharge every three days.",
      "endsWhen": "When the battery runs out or a new filter is installed.",
      "charges": "Unlimited filters provided by Robensonia Lab"
    },
    "priceReason": "The Robensonian Air Filter's balanced price reflects its high demand and the specialized materials used in its construction.",
    "priceOriginal": 40000,
    "priceReviewedAt": "2026-07-23T17:13:26.546905+00:00",
    "aiReviewedAt": "2026-07-23T17:13:26.546905+00:00",
    "aiReviewVersion": 1
  },
  "robensonian_bio_suit": {
    "id": "robensonian_bio_suit",
    "name": "Robensonian Bio-Suit (Atmospheric)",
    "description": "The Robensonian Bio-Suit (Atmospheric) is a sleek, light suit crafted from resilient bio-engineered fibers that can withstand noxious gases and mild poisons. It's the result of years of research conducted by Robensonia Lab in the heart of their atmospheric testing facility on Robesonia IV. The suit not only grants you immunity to such hazards but also provides advantage on saving throws against inhaled toxins, ensuring your survival in even the foulest environments.",
    "price": 1000,
    "icon": "🧪",
    "stock": 4,
    "rarity": "epic",
    "effects": [
      "Immunity to Environmental Non-Magical Gas/Poison Damage",
      "Advantage on Saves vs. Inhaled Toxins"
    ],
    "vendor": "robensonia_lab",
    "shippedBy": "Robensonia Transport Consortium",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Environmental Immunity",
        "rules": "You gain immunity to non-magical gas and poison damage from the environment as long as you are wearing the suit. This effect does not stack with other forms of environmental protection."
      },
      {
        "title": "Toxin Advantage",
        "rules": "While wearing this suit, you have advantage on saving throws against inhaled toxins. The suit's bio-engineered fibers filter out harmful substances and enhance your body’s natural defenses."
      }
    ],
    "levelRequirementReason": "The suit is designed to be accessible to adventurers of all levels who might find themselves in hazardous environments.",
    "vendorReason": "Robensonia Lab specializes in creating protective gear for space exploration and planetary research, making their Bio-Suit a reliable choice for adventurers venturing into dangerous terrains.",
    "shippingDetail": "Ships via Robensonia Transport Consortium's air freight service. Delivery times vary by destination but are generally expedited due to the suit's importance in ensuring planetary safety.",
    "usage": {
      "activation": "Passive effect, no activation required; the suit automatically activates upon donning.",
      "duration": "Instantaneous immunity and advantage; lasts until removed or damaged beyond repair.",
      "endsWhen": "The suit stops providing its benefits when it is destroyed or removed from your body.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the suit's high-quality materials and advanced bio-engineered design that ensures it remains functional in harsh environments.",
    "priceOriginal": 34000,
    "priceReviewedAt": "2026-07-23T17:13:53.738352+00:00",
    "aiReviewedAt": "2026-07-23T17:13:53.738352+00:00",
    "aiReviewVersion": 1
  },
  "roblox_obby_boots": {
    "id": "roblox_obby_boots",
    "name": "Obby Boots",
    "description": "The Obby Boots are a pair of sleek, neon-blue sneakers crafted from durable, glow-in-the-dark material. They are said to have been forged in the heart of a virtual realm, and their origin is steeped in lore as tools for mastering parkour challenges. Wearing these boots grants you triple jump height, allowing you to leap over obstacles with ease, and provides advantage on Acrobatics checks when performing complex maneuvers.",
    "category": "equipment",
    "price": 1000,
    "icon": "👟",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Triple Jump Height",
      "Advantage on Acrobatics"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Boot Box Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Triple Jump Height",
        "rules": "You gain the ability to perform a triple jump as an action. This effect lasts until you rest or are incapacitated."
      },
      {
        "title": "Advantage on Acrobatics",
        "rules": "When making an Acrobatics check, you have advantage if your action involves complex maneuvers requiring balance and agility."
      }
    ],
    "levelRequirementReason": "The Obby Boots are designed for beginners to help them navigate parkour challenges with ease.",
    "vendorReason": "Toad Town Market specializes in unique, player-made items that can aid adventurers in various challenges and puzzles.",
    "shippingDetail": "Delivered via the Boot Box Express service, known for its reliable delivery of footwear to any location within the realm.",
    "usage": {
      "activation": "Action or Reaction (Triple Jump only)",
      "duration": "Instantaneous (Triple Jump) / Until Rested or Incapacitated",
      "endsWhen": "Resting or becoming incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "The Obby Boots are priced at 1000 XP, reflecting their utility in parkour challenges and the craftsmanship required for such a unique item.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T17:13:37.739873+00:00",
    "aiReviewedAt": "2026-07-23T17:13:37.739873+00:00",
    "aiReviewVersion": 1
  },
  "rock_mushroom": {
    "id": "rock_mushroom",
    "name": "Rock Mushroom",
    "description": "The Rock Mushroom, a gnarled and ancient fungus that looks like a boulder, can transform you into living rock for smashing through impenetrable obstacles. When consumed, it rolls with terrifying force, its roots entwined in the earth's very core, dealing devastating blows to anything in its path. It is said this mushroom draws power from the very heart of the planet itself, making it an uncommon treasure found deep within volcanic regions.",
    "category": "consumables",
    "price": 1000,
    "icon": "🪨",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Rock Form",
      "Immunity"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Stone Crate Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rock Form",
        "rules": "When consumed, you transform into a rolling boulder with a speed of 40 feet. You can use this form as a bonus action to ram into obstacles or enemies, dealing 3d6 bludgeoning damage on a successful hit. This effect lasts for 1 minute or until you are stopped."
      },
      {
        "title": "Immunity",
        "rules": "While in Rock Form, you are immune to non-magical damage and have advantage on Strength checks and saving throws related to being physically impacted by objects."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners who need a reliable way to break through difficult terrain without requiring high-level spellcasting.",
    "vendorReason": "The valley trading post often carries unique, hard-to-find items from the nearby volcanic region where this mushroom grows.",
    "shippingDetail": "Due to its size and weight, it is shipped securely in a reinforced crate with special padding to prevent damage during transit.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 Minute or until stopped",
      "endsWhen": "You are no longer in contact with the ground or when you voluntarily end the effect",
      "charges": "Unlimited"
    },
    "priceReason": "The Rock Mushroom is priced at 1000 XP, reflecting its rare and useful nature for beginners.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-23T17:14:36.815003+00:00",
    "aiReviewedAt": "2026-07-23T17:14:36.815003+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_abyssal_belt_of_silence": {
    "id": "rogueport_abyssal_belt_of_silence",
    "name": "Abyssal Belt of the Silent Void",
    "description": "The Abyssal Belt of the Silent Void is a dark, leather-bound sash woven from threads of shadow and silence. Crafted by a rogue priest who traded his voice for dominion over the void's whispers, this belt muffles all sound around its wearer and allows them to move unseen through silent abysses. It grants a +10% chance to dodge attacks in complete silence and a +50% stealth bonus while moving, making it an invaluable tool for those who navigate the Shadowfell’s eerie realms.",
    "category": "equipment",
    "price": 1000,
    "icon": "🕯",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+Silent Dodger",
      "+Stealthy Whisper"
    ],
    "vendor": "rogueport",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Silent Dodger",
        "rules": "The wearer gains a +10% chance to dodge attacks while in complete silence. This effect lasts for the duration of their time spent within a silent area, such as within a zone of Silence or during a round of total darkness."
      },
      {
        "title": "Stealthy Whisper",
        "rules": "The wearer receives a +50% bonus to Stealth checks while moving. This advantage is only active when the character is not speaking and can be used once per short rest, after which it requires an 18th level or higher rogue to use again."
      }
    ],
    "levelRequirementReason": "This belt's intricate enchantments require a minimum of third-level proficiency in Stealth and knowledge of the Shadowfell.",
    "vendorReason": "Rogueport, known for its connections to the mysterious realms and rogue communities, is well-placed to sell items that enhance survival in the Shadowfell.",
    "shippingDetail": "The belt must be shipped via the Void Drifter Relay, ensuring safe passage through the most treacherous areas of the Shadowfell.",
    "usage": {
      "activation": "Passive effect while within a silent area or moving silently.",
      "duration": "Until the wearer leaves the silent area or stops moving.",
      "endsWhen": "The wearer either exits a silent area or ceases to move.",
      "charges": "Unlimited, but only one use per short rest."
    },
    "priceReason": "Crafted with rare materials and ancient Shadowfell magic, this belt commands a premium price despite being an invaluable tool for adventurers navigating the silent abysses.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T17:14:01.132167+00:00",
    "aiReviewedAt": "2026-07-23T17:14:01.132167+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_bargain_bone": {
    "id": "rogueport_bargain_bone",
    "name": "Bargain Bone",
    "description": "The Bargain Bone is a hollow bone intricately carved with the name of a deceased merchant. This relic, sold by Dry Bones Dead Drop in Rogueport, promises to ‘buy’ any wish—a mere joke—but offers fleeting luck and laughter. When activated, it grants a +1d4 bonus on luck checks for one round and causes the buyer to hear the voice of a ghost for 1 round. The bone’s only value lies in its dark humor and connection to the underworld's black market culture.",
    "price": 1000,
    "icon": "🦴",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Luck Boost",
      "Ghostly Voice"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rogueport Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Luck Boost",
        "rules": "Activates as a bonus action. Grants a +1d4 temporary bonus on luck checks for one round, with no save DC required."
      },
      {
        "title": "Ghostly Voice",
        "rules": "Instantaneous effect when activated. The buyer hears the voice of a ghost for 1 round. No save DC is needed to resist this auditory effect."
      }
    ],
    "levelRequirementReason": "The Bargain Bone is a low-level item, suitable for beginners as it offers harmless fun and luck.",
    "vendorReason": "Dry Bones Dead Drop specializes in relics from the underworld, making the Bargain Bone a fitting addition to their inventory.",
    "shippingDetail": "Ships via Rogueport Express within 3 days of purchase.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 round per activation",
      "endsWhen": "The effect ends at the start of your next turn after use",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Bargain Bone offers limited, harmless effects but remains a rare and humorous item that aligns with Dry Bones Dead Drop's black market theme.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T17:13:50.351865+00:00",
    "aiReviewedAt": "2026-07-23T17:13:50.351865+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_black_blood": {
    "id": "rogueport_black_blood",
    "name": "Black Blood Serum",
    "description": "The Black Blood Serum is a dark elixir that whispers of forbidden alchemy. A concoction so potent, it's rumored to have been crafted in the shadowy depths of the Rogueport's illegal underbelly. This serum regenerates your health by 30% every ten seconds and grants you a 20% reduction in damage taken for two minutes upon consumption. The elixir is said to suppress pain, making it invaluable for those who fight or gamble with their lives.",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Health Regeneration",
      "Damage Reduction"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Health Regeneration",
        "rules": "Consume the serum as a bonus action to gain 30% of your maximum hit points over ten seconds. This effect can be used once per short or long rest."
      },
      {
        "title": "Damage Reduction",
        "rules": "After consuming the serum, you are granted resistance to all damage types for two minutes. If you take damage while this effect is active, it ends immediately and does not recharge until after a short or long rest."
      }
    ],
    "levelRequirementReason": "The serum's potent effects require no minimum level as its benefits are universally applicable.",
    "vendorReason": "Rogueport is known for distributing exotic and illegal items, making it a fitting vendor for the Black Blood Serum.",
    "shippingDetail": "The serum is delivered by the Rakasha who ensures its arrival remains unseen and discreet.",
    "usage": {
      "activation": "Bonus action to consume; once per short or long rest.",
      "duration": "Ten seconds of health regeneration, two minutes of damage reduction.",
      "endsWhen": "Ends immediately upon taking damage while active. Rest required for recharge.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The serum's rarity and potent effects justify its high price, making it a valuable asset to any adventurer or gambler.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:14:05.507229+00:00",
    "aiReviewedAt": "2026-07-23T17:14:05.507229+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_black_blood_ambassador": {
    "id": "rogueport_black_blood_ambassador",
    "name": "Black Blood Ambassador",
    "description": "The Black Blood Ambassador is a vial of dark, shimmering liquid that exudes an aura of treachery. When injected, it grants you an unseen loyalty, making your enemies suspicious and distrusting of your every move. For ten hours, all foes within fifty feet assume you are a traitor, while you gain +10% damage to your attacks on them, but at the cost of an increased risk of being disarmed during combat.",
    "price": 1000,
    "icon": "📦",
    "stock": 0,
    "rarity": "rare",
    "effects": [
      "Enemies assume you're a traitor",
      "+10% damage against targets"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Unseen Loyalty Aura",
        "rules": "Activate as a bonus action. The aura lasts for ten hours, during which all enemies within fifty feet of you are granted the benefit of the 'Disadvantage' on any ability checks or attack rolls targeting you. This effect ends if you take damage or if you disengage from combat."
      },
      {
        "title": "Enhanced Damage",
        "rules": "You gain a +10% bonus to your weapon attacks against targets within fifty feet of the aura, but have a 5% chance per hour to be disarmed during combat. This effect ends if you are disarmed or if you take damage."
      }
    ],
    "levelRequirementReason": "This item is designed for rogues who require stealth and precision in their combat.",
    "vendorReason": "Rogueport specializes in exotic and powerful items that enhance the capabilities of rogue classes.",
    "shippingDetail": "Standard delivery time is three days, with expedited options available for an additional cost.",
    "usage": {
      "activation": "Bonus action to activate unseen loyalty aura; +10% damage against targets as a passive effect.",
      "duration": "Ten hours per use.",
      "endsWhen": "Aura ends if you take damage or disengage from combat, and the +10% damage bonus ends if you are disarmed or take damage.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The price reflects its rarity and the unique abilities it grants for ten hours without requiring additional charges.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T17:14:23.731658+00:00",
    "aiReviewedAt": "2026-07-23T17:14:23.731658+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_black_harvest": {
    "id": "rogueport_black_harvest",
    "name": "Black Harvest",
    "description": "A vial of Black Harvest, extracted from a rare venomous plant in the Shadowgrove. Its potent elixir amplifies your combat prowess and saps the vigor of foes within reach. The vial's label warns, 'Use at your own risk; may ignite with fire.' When uncorked, it grants you an adrenaline surge that boosts your attack power by 50% for 1 minute, but beware—it can also spark a fiery backlash, dealing fire damage to enemies in the area.",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Boosts attack power",
      "Slows enemy movement"
    ],
    "vendor": "rogueport",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Adrenaline Surge",
        "rules": "When you use an action or bonus action to uncork the vial, you gain a +50 bonus to your next melee attack and all attacks made before the end of your next turn. This effect lasts for 1 minute. The fire damage dealt is equal to half your level (minimum 2d6). You can only use this effect once per short or long rest."
      },
      {
        "title": "Venomous Slow",
        "rules": "As a reaction, you can spill the vial and cause all creatures within 5 feet of you who are making an attack roll against you to make that roll with disadvantage until the start of your next turn. Creatures that fail their saving throw (DC 12) also have their speed reduced by 30 feet for 1 minute."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level to manage the vial's potent effects safely.",
    "vendorReason": "Rogue Port's network of spies and thieves ensures they have access to rare poisons like Black Harvest.",
    "shippingDetail": "Ships within 3 days via Koopa Express, but requires a special permit from the Shadowgrove Wardens.",
    "usage": {
      "activation": "Action or bonus action (uncorking the vial)",
      "duration": "1 minute for each effect used",
      "endsWhen": "The effects expire at the end of your next turn after using it, or if you take any damage in combat.",
      "charges": "Unlimited; recharges on a short rest"
    },
    "priceReason": "Balanced price for a rare and potentially dangerous item that can boost combat effectiveness significantly.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-23T17:14:17.768636+00:00",
    "aiReviewedAt": "2026-07-23T17:14:17.768636+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_black_hush": {
    "id": "rogueport_black_hush",
    "name": "Black Hush",
    "description": "A vial filled with a shimmering black liquid that whispers secrets of the night. When uncorked, it instantly silences ambient sounds in an area large enough to conceal even the most cautious spy. The silence lasts for 10 seconds, giving you time to move undetected through bustling crowds or slip into the shadows without being heard. Nearby creatures may feel a fleeting sense of unease, but no one will be able to hear your movements during this brief respite.",
    "price": 1000,
    "icon": "🎧",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Ambient Silence",
      "Stealth Advantage"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ambient Silence",
        "rules": "When activated by a bonus action, the vial releases its contents to silence ambient sounds within a 15-foot radius for 10 seconds. Creatures within this area are considered hidden and cannot be detected by sound-based senses without a successful DC 13 Perception check."
      },
      {
        "title": "Stealth Advantage",
        "rules": "For the duration of the vial's effect, you gain advantage on Dexterity (Stealth) checks. If you use this ability to hide, you can choose one creature within your sight as a target and gain double the normal number of feet that you can move without being detected."
      }
    ],
    "levelRequirementReason": "This item's effects are subtle but effective for a wide range of stealthy characters, from rogues to bards.",
    "vendorReason": "Rogueport specializes in items that aid in espionage and covert operations, making the Black Hush an essential tool for their clientele.",
    "shippingDetail": "Shipped via Pipe Express, known for its reliable couriers who can deliver your silence vial quickly and discretely.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "10 seconds",
      "endsWhen": "The duration ends when the effect is used or the vial is empty",
      "charges": "Unlimited, as long as the vial contains liquid"
    },
    "priceReason": "The Black Hush provides a significant advantage in stealth without being overpowered, justifying its moderate price.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T17:14:20.821388+00:00",
    "aiReviewedAt": "2026-07-23T17:14:20.821388+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_black_market_satchel": {
    "id": "rogueport_black_market_satchel",
    "name": "Ghosted Satchel",
    "description": "The Ghosted Satchel, a tattered leather pouch sewn with cursed thread that defies detection by law and thieves alike. Its hidden compartments hold evidence of illicit dealings or stolen data, but it never leaves a trace at the scene. The satchel glows faintly when danger approaches, warning its bearer to flee or fight. It is said to have been crafted in the shadowed workshops of Rogueport, where secrets are bought and sold.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Disables tracking",
      "Detects hidden paths"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Disables Tracking",
        "rules": "When activated as a bonus action, this effect renders any items stored within the satchel untraceable by magical or mundane means. This benefit lasts for 1 hour per level of the user. The effect ends if the satchel is opened in front of witnesses."
      },
      {
        "title": "Detects Hidden Paths",
        "rules": "The satchel can be used as a tool to detect hidden paths or secret entrances within sewers and abandoned districts, providing advantage on Wisdom (Perception) checks to find such passages. The effect is active for 10 minutes per day, but it cannot be used more than once per location."
      }
    ],
    "levelRequirementReason": "The satchel's cursed thread and the magic required to craft it demand a minimum level of expertise from its user.",
    "vendorReason": "Only those with ties to Rogueport's black market could acquire such an item, making it a staple for their clientele.",
    "shippingDetail": "Delivered by the ghostly couriers of the Rakasha, known for their speed and discretion.",
    "usage": {
      "activation": "Bonus action to activate; reaction to open if detected",
      "duration": "1 hour per level or until opened in front of witnesses",
      "endsWhen": "Opened in front of others or after one hour",
      "charges": "Unlimited uses, daily limit of once per location"
    },
    "priceReason": "Balanced at this price to reflect the cursed nature and utility of the satchel.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:15:17.434917+00:00",
    "aiReviewedAt": "2026-07-23T17:15:17.434917+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_black_market_silence_earpiece": {
    "id": "rogueport_black_market_silence_earpiece",
    "name": "Silent Echo Earpiece",
    "description": "The Silent Echo Earpiece is a high-frequency sonic device, forged from whispering metal and enchanted with eldritch silence. It mutes ambient noise and disguises footsteps, making it perfect for stealthy maneuvers through crowded alleys or evading silent patrols. The faint glow of hidden targets illuminates the night, alerting you to nearby foes or traps. Only those who have earned its secrets from the Rogueport's Black Market can wield this eldritch device.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Mutes ambient noise and disguises footsteps",
      "Reveals hidden targets via faint glow"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silence and Disguise",
        "rules": "The Silent Echo Earpiece muffles all ambient sounds within a 10-foot radius for 1 minute. It also suppresses the wearer's footstep noise, making them nearly silent as they move. This effect has no save DC and does not expend charges."
      },
      {
        "title": "Hidden Target Indication",
        "rules": "When worn, the earpiece emits a faint glow when hidden targets or traps are nearby within 30 feet. The wearer can use an action to focus on these glows, revealing the exact location of any hidden target or trap. This effect has no save DC and does not expend charges."
      }
    ],
    "levelRequirementReason": "The Silent Echo Earpiece is accessible to all adventurers who have earned its secrets from the Rogueport's Black Market.",
    "vendorReason": "Only those who have proven their worth in the Rogueport can purchase this rare eldritch device from the Black Market.",
    "shippingDetail": "The Rakasha Spirit Walk ensures swift and discreet delivery, often arriving under cover of night.",
    "usage": {
      "activation": "Passive effect; no activation required",
      "duration": "1 minute or until the wearer is no longer in a stealthy environment",
      "endsWhen": "The user ceases to be within an area where ambient sounds and footstep noise are suppressed, or when the wearer is no longer in a stealthy environment.",
      "charges": "Unlimited; does not expend charges"
    },
    "priceReason": "The Silent Echo Earpiece's rare enchantment and eldritch forging make it a valuable tool for any adventurer seeking to master the art of stealth.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:14:51.342206+00:00",
    "aiReviewedAt": "2026-07-23T17:14:51.342206+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_black_market_tape": {
    "id": "rogueport_black_market_tape",
    "name": "Black Market Tape",
    "description": "A roll of corroded, black tape spools out from a crumpled case, its surface marred by strange symbols and stains of unknown ink. When activated, it plays back distorted whispers that reveal hidden clues about past crimes—clues that could lead you to your rival's next move or uncover long-buried secrets. However, there is a 10% chance each use triggers a random criminal encounter, forcing you into an unwanted confrontation with the city's darker elements.",
    "price": 1000,
    "icon": "🎧",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Reveals hidden clues",
      "Triggers random criminal encounters (10%)"
    ],
    "vendor": "rogueport",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Clue Revelation",
        "rules": "When activated as a bonus action, this tape plays back distorted whispers that provide a single clue about a past crime. The DM determines the nature of the clue and its relevance to your investigation. This effect lasts until the end of your next turn."
      },
      {
        "title": "Criminal Encounter",
        "rules": "There is a 10% chance (roll a d10, on a result of 1) that activating the tape triggers an encounter with a criminal or law enforcement. The encounter level and participants are determined by the DM based on the environment."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to handle the risks associated with using this potentially dangerous item.",
    "vendorReason": "Rogueport is known for its black market wares, including items that could be useful but also risky in the right hands.",
    "shippingDetail": "Ships via a specialized envelope with tracking, ensuring safe arrival but not providing information about its contents to unauthorized parties.",
    "usage": {
      "activation": "Bonus action to activate and play back the tape.",
      "duration": "Instantaneous effect; lasts until the end of your next turn after activation.",
      "endsWhen": "The effect ends when the tape completes its playback or if a criminal encounter is triggered.",
      "charges": "Unlimited uses, but it requires recharging after 30 days."
    },
    "priceReason": "Balanced at 1000 XP to reflect the item's rare and potentially dangerous nature, providing a fair value for its use in uncovering secrets or facing unexpected encounters.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:14:54.000063+00:00",
    "aiReviewedAt": "2026-07-23T17:14:54.000063+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_black_mirage": {
    "id": "rogueport_black_mirage",
    "name": "Black Mirage",
    "description": "The Black Mirage is a polished obsidian mirror, its surface etched with ancient runes that shimmer under low-light conditions. This artifact distorts reality, creating vivid illusions of allies or foes within a 10-foot radius. It can also reveal the true motives and intentions of nearby enemies, offering insight into their hidden agendas. Use it carefully; a misstep in activation could lead to confusion, causing you to lose focus for several moments if not handled with precision.",
    "price": 1000,
    "icon": "🌀",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Illusion Echo",
      "Truth Mirror"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shadowrunner Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Illusion Echo",
        "rules": "Create a 10-foot radius illusion of a chosen target. This effect lasts for 1 minute, and it can mislead foes or allies within the area into thinking they are interacting with the original target. The illusion has no physical form but can be seen as a faint duplicate of the chosen creature. This effect requires an action to activate."
      },
      {
        "title": "Truth Mirror",
        "rules": "Reveal hidden motives and intentions of nearby enemies within 30 feet. This effect provides insight into their true nature, exposing any deception or ulterior motives they may be harboring. The target must make a Wisdom saving throw (DC 15) to resist this revelation."
      }
    ],
    "levelRequirementReason": "The Black Mirage is accessible to lower-level rogues who need its subtlety and insight without the heavy burden of higher-level abilities.",
    "vendorReason": "Rogueport specializes in items that aid in stealth and deception, making it a natural fit for this artifact.",
    "shippingDetail": "Delivered via shadowy means, arriving at your doorstep under the cover of night.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until dismissed",
      "endsWhen": "The effect ends when it is dismissed with a successful action or if the user takes any other action.",
      "charges": "Unlimited, but only one illusion echo at a time."
    },
    "priceReason": "Balanced for its utility and rarity, this artifact provides unique insights that are difficult to replicate with standard magic items.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T17:15:19.109867+00:00",
    "aiReviewedAt": "2026-07-23T17:15:19.109867+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_black_moon_mask": {
    "id": "rogueport_black_moon_mask",
    "name": "Black Moon Mask",
    "description": "The Black Moon Mask is a hooded visage forged from lunar alloy pilfered under cover of night, its surface etched with ancient runes that whisper secrets in the dark. Donning it grants you perfect stealth within shadowy alleys and allows your voice to mimic your last spoken words with uncanny precision—tools both for intimidation or swift escape. The mask's whispers are said to be as old as the moon itself, making it an invaluable tool for rogues and spies.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stealth in dim lighting",
      "Voice mimicry"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Stealth in Dim Lighting",
        "rules": "While wearing the Black Moon Mask, you gain advantage on Dexterity (Stealth) checks made to move silently and undetectably. This effect lasts until you leave an area of dim light or take a short rest."
      },
      {
        "title": "Voice Mimicry",
        "rules": "By concentrating for 1 minute, you can make your voice mimic the last spoken words you heard up to 60 feet away. The effect ends if you are incapacitated or if you voluntarily end it before the concentration time expires."
      }
    ],
    "levelRequirementReason": "The mask's ancient runes require a minimum dexterity of 15 and familiarity with stealth techniques.",
    "vendorReason": "Rogueport is known for its illicit deals and rare wares, including items like the Black Moon Mask that enhance one's abilities in shadowy locales.",
    "shippingDetail": "Delivered by a spectral courier who ensures the mask arrives under complete darkness to protect its secrets.",
    "usage": {
      "activation": "Concentration for Voice Mimicry, passive effect of Stealth in Dim Lighting",
      "duration": "1 minute concentration for Voice Mimicry; lasts until end of turn for Stealth in Dim Lighting",
      "endsWhen": "Incapacitation or voluntary end of Voice Mimicry; leaving dim light ends Stealth effect.",
      "charges": "Unlimited"
    },
    "priceReason": "The mask's rare lunar alloy and ancient magic require a significant price, balancing its potent abilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:15:22.214489+00:00",
    "aiReviewedAt": "2026-07-23T17:15:22.214489+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_black_silk_glove": {
    "id": "rogueport_black_silk_glove",
    "name": "Black Silk Glove of Silent Steps",
    "description": "The Black Silk Glove of Silent Steps is a finely woven, matte-black glove crafted from smuggler's silk, each thread whispering tales of shadowy alleyways and silent escapades. Its fingers are supple yet strong enough to disarm traps with the simplest tap, and it mutes even the most insistent footsteps, making stealth through crowded streets or past vigilant guards nearly effortless. The wearer can momentarily flicker into obscurity when moving, leaving no trace in the shadows for a fleeting moment.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Silent Steps",
      "Flicker Mask"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Silent Steps",
        "rules": "When activated as an action during movement, the glove reduces all noise made by the wearer's feet to a whisper. This effect lasts until the start of your next turn or until you make an attack roll. If successful on a stealth check while wearing this glove, it provides advantage."
      },
      {
        "title": "Flicker Mask",
        "rules": "Activating as a bonus action, the glove briefly distorts the wearer's form, making them nearly invisible to sight for 10 seconds. This effect has no save DC and can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "Requires proficiency in stealth to effectively utilize its stealth-enhancing features.",
    "vendorReason": "Rogueport, known for its network of spies and thieves, stocks items that enhance the skills of their patrons, making it a fitting vendor for this glove.",
    "shippingDetail": "The gloves are carefully packed in secret compartments to avoid detection by customs authorities.",
    "usage": {
      "activation": "Action or bonus action",
      "duration": "Until start of next turn (Silent Steps), 10 seconds (Flicker Mask)",
      "endsWhen": "Starts of next turn for Silent Steps, ends after 10 seconds for Flicker Mask.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 2500 XP/1000 gold, this price reflects the rare materials and craftsmanship required to create such a stealthy accessory.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:15:51.091885+00:00",
    "aiReviewedAt": "2026-07-23T17:15:51.091885+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_black_tongue_torch": {
    "id": "rogueport_black_tongue_torch",
    "name": "Black Tongue Torch",
    "description": "The Black Tongue Torch radiates a flickering violet glow, its flame whispering ancient secrets and curses. It is said that those who wield it must be cautious of its power, for it can silence even the most vocal adversary with a mere touch or suppress the sounds of stealthy movements. The torch's light reveals hidden pathways and traps, but at the cost of leaving behind lingering whispers that haunt the mind.",
    "price": 1000,
    "icon": "🔥",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Silence Speaker",
      "Psychic Echo"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shadow Veil Couriers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Silence Speaker",
        "rules": "When activated by a bonus action, the torch emits a low hum for 1 round (6 seconds), suppressing all sounds within a 30-foot radius. This effect has no save DC and does not expend charges."
      },
      {
        "title": "Psychic Echo",
        "rules": "Upon successful Perception checks made while in contact with the torch, the wielder suffers 1d2 psychic damage as lingering whispers of forgotten curses haunt their mind. The effect is instantaneous and has no save DC or use limit."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level to handle the psychological impact.",
    "vendorReason": "Rogueport specializes in items that aid in stealth and espionage, making this torch a perfect fit for their inventory.",
    "shippingDetail": "Ships via a shadowy courier network, ensuring the torch arrives with minimal delay but at a higher risk of being intercepted by foes.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 Round (6 seconds)",
      "endsWhen": "The effect ends when its duration expires or the wielder moves out of range.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price for a rare item with unique stealth and psychic effects.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-24T23:29:33.778448+00:00",
    "aiReviewedAt": "2026-07-24T23:29:33.778448+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_blood_rage": {
    "id": "rogueport_blood_rage",
    "name": "Blood Rage of the Crimson Scribe",
    "description": "The Blood Rage of the Crimson Scribe is a crimson vial filled with an ink-stained liquid that glows faintly in the dark. Crafted from the remnants of ancient, battle-scarred parchments, this vial infuses the drinker with a surge of adrenaline and combat prowess. When shaken, it releases a spray that enhances one's reflexes, making each strike more lethal, and restores stamina by 25%. Best used during covert operations or when facing overwhelming odds.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Bloodlust",
      "Adrenaline Surge"
    ],
    "vendor": "rogueport",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Bloodlust",
        "rules": "Increases the chance to hit with melee attacks by +2d4 (average +3) until the start of your next turn. This effect does not stack."
      },
      {
        "title": "Adrenaline Surge",
        "rules": "Grants advantage on Dexterity saving throws and checks for 1 minute, reducing physical damage taken from non-magical attacks by 50% during this time. Expires after use or if the user drops to 0 hit points."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to effectively utilize the rage and stamina benefits.",
    "vendorReason": "Rogueport is known for its network of spies and rogues who could benefit from this item's combat-enhancing properties.",
    "shippingDetail": "Ships via a secretive underground route, ensuring the vial arrives intact but with a delay of one week.",
    "usage": {
      "activation": "Consumed as an action by shaking and spraying the contents at yourself.",
      "duration": "Instantaneous effect; lasts until your next turn or until dropped to 0 hit points.",
      "endsWhen": "Expires immediately upon taking damage from a magical source, dropping to 0 hit points, or if consumed.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The rare materials and the item's limited availability justify its cost.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-23T17:15:33.903610+00:00",
    "aiReviewedAt": "2026-07-23T17:15:33.903610+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_blood_rain": {
    "id": "rogueport_blood_rain",
    "name": "Blood Rain",
    "description": "Blood Rain is a vial filled with dark crimson essence that, when activated, rains down in a cascade of life-sapping droplets. Enemies struck must make a DC 14 Constitution saving throw or take 1d6 bleed damage each turn for the next three rounds. The area around the target shrouds itself in a thick fog of crimson mist, reducing visibility to zero within a 5-foot radius and granting advantage on Stealth checks until the effect ends.",
    "price": 1000,
    "icon": "💉",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Life-sapping cascade",
      "Crimson fog obscuration"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Life-sapping cascade",
        "rules": "When activated, Blood Rain deals 1d6 bleed damage to a target each round for three consecutive rounds. The target must make a DC 14 Constitution saving throw or take the damage. On a successful save, they are immune to this effect for one day."
      },
      {
        "title": "Crimson fog obscuration",
        "rules": "The area around the target is filled with a thick fog of crimson mist that reduces visibility within a 5-foot radius to zero. This provides advantage on Stealth checks and hides any creatures in the area until the effect ends."
      }
    ],
    "levelRequirementReason": "This vial can be used by beginners who are familiar with its effects, making it accessible early in a rogue's career.",
    "vendorReason": "Rogueport is known for supplying the best tools and poisons to the criminal underworld, including this deadly yet versatile item.",
    "shippingDetail": "Delivered via Pipe Express, ensuring that Blood Rain arrives in perfect condition with a special handling note for fragile items.",
    "usage": {
      "activation": "A free action",
      "duration": "Instantaneous effect; lasts three rounds or until the target makes a successful Constitution saving throw",
      "endsWhen": "The target successfully saves against the bleed damage, or the duration ends",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced for its versatility and utility in combat and stealth situations.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:15:49.401090+00:00",
    "aiReviewedAt": "2026-07-23T17:15:49.401090+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_blood_tether": {
    "id": "rogueport_blood_tether",
    "name": "Blood Tether",
    "description": "The Blood Tether is a cursed, blood-red amulet that whispers of dark magic and lost souls. When activated, it violently pulls you back to your last known location, perfect for escaping or reuniting with allies. However, if used while in motion, it inflicts a ghastly bleed effect dealing 1d6 necrotic damage and forcing you into an agonizing stop. This macabre trinket requires a period of rest before its power can be invoked again.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Teleports to last known location",
      "Inflicts bleeding on moving use"
    ],
    "vendor": "rogueport",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Teleportation",
        "rules": "When activated, you are teleported instantaneously to your last known location. If used while in motion, it instead pulls you to the nearest stable surface, dealing 1d6 necrotic damage and forcing a DC 15 Constitution saving throw or falling prone."
      },
      {
        "title": "Bleeding",
        "rules": "If used while moving, this effect inflicts 1d6 necrotic damage on you. You must make a DC 15 Constitution saving throw to avoid falling prone and remaining motionless for the rest of your turn."
      }
    ],
    "levelRequirementReason": "The Blood Tether's dark magic requires no specific level, but its unpredictable nature favors lower-tier characters who can handle its risks.",
    "vendorReason": "Rogueport is known for selling items with a touch of the macabre and the unexpected.",
    "shippingDetail": "Due to its cursed nature, it must be shipped in a specially enchanted box to prevent any unwanted incidents during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Used or expended; requires 24 hours of rest before use again",
      "charges": "Unlimited, but limited by daily rest"
    },
    "priceReason": "The Blood Tether's price is adjusted to reflect its cursed nature and the risk it poses.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:16:01.645724+00:00",
    "aiReviewedAt": "2026-07-23T17:16:01.645724+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_blooded_bottle": {
    "id": "rogueport_blooded_bottle",
    "name": "Blooded Bottle of the Black Lullaby",
    "description": "The Blooded Bottle of the Black Lullaby is a vial filled with a thick, crimson liquid that hums ominously when shaken. It is said to be crafted from the blood of those who have perished in the city’s darkest alleys. When consumed, it grants temporary euphoria and an increase in aggression, making the drinker more prone to reckless actions. The bottle also imbues a fleeting sense of invincibility, reducing pain from blunt or piercing damage by 50% for one minute.",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Black Lullaby",
      "Pain Suppression"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Black Lullaby",
        "rules": "As a bonus action, the user can activate the effect to negate their next attack. This effect lasts for one minute and can be used once per long rest."
      },
      {
        "title": "Pain Suppression",
        "rules": "The drinker gains temporary hit points equal to 1d6 + their Constitution modifier when consumed, reducing blunt or piercing damage from attacks by 50% for one minute. This effect can be used once per short rest."
      }
    ],
    "levelRequirementReason": "This item is designed for rogue and street fighter types who often find themselves in duels.",
    "vendorReason": "Rogueport is known for its supply of dangerous but useful items to those who live on the edge of society.",
    "shippingDetail": "Delivered within the hour, these precious vials are escorted by Lakitu drones through the city’s most treacherous streets.",
    "usage": {
      "activation": "Bonus Action (Black Lullaby); Instantaneous (Pain Suppression)",
      "duration": "One minute for both effects",
      "endsWhen": "Ends when used up or after one minute",
      "charges": "Once per short rest"
    },
    "priceReason": "The item is crafted from rare, dark materials and the process of creating it is highly secretive.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:16:05.628842+00:00",
    "aiReviewedAt": "2026-07-23T17:16:05.628842+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_broken_knuckle_bomb": {
    "id": "rogueport_broken_knuckle_bomb",
    "name": "Broken Knuckle Bomb",
    "description": "The 'Broken Knuckle Bomb' is a gnarled, tea-stained knuckle-duster that conceals a volatile charge within its crumpled leather and tarnished brass casing. When struck twice in rapid succession or upon impact with an opponent's flesh, it detonates with a deafening pop, filling the air with acrid smoke that blurs vision for 30 feet around. The lingering stench of burnt tea clings to the area, hampering any who dare come too close.",
    "price": 1000,
    "icon": "🧨",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Detonates on contact or double hit",
      "Leaves a noxious cloud reducing visibility"
    ],
    "vendor": "rogueport",
    "shippedBy": "The Gritty Grifter Syndicate",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Explosive Detonation",
        "rules": "The 'Broken Knuckle Bomb' detonates when struck twice in quick succession or upon impact with an opponent. It deals 1d6 force damage to all creatures within 5 feet and leaves a noxious cloud that reduces the visibility of all creatures within 30 feet by half, requiring advantage on Perception checks made there. The effect lasts for 1 minute."
      },
      {
        "title": "Noxious Cloud",
        "rules": "For 1 round after detonation, any creature exposed to the noxious cloud must make a DC 12 Constitution saving throw or suffer a -1 penalty to attack rolls and ability checks until the end of their next turn. The 'Broken Knuckle Bomb' can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "Requires some skill with improvised weapons and combat tactics, which usually takes at least a third-level rogue to master.",
    "vendorReason": "Rogueport is known for its smuggled wares that include unpredictable and often dangerous items like the 'Broken Knuckle Bomb'.",
    "shippingDetail": "Ships discreetly within a padded, anonymous courier bag. Delivery typically takes one week.",
    "usage": {
      "activation": "On contact or double hit",
      "duration": "1 minute and 1 round",
      "endsWhen": "After the duration ends or if used again during the same rest",
      "charges": "Unlimited, but can only be used once per long rest"
    },
    "priceReason": "The 'Broken Knuckle Bomb' is priced at 1000 XP for its unpredictable nature and limited utility, making it a valuable yet risky tool for rogues.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T17:17:05.928035+00:00",
    "aiReviewedAt": "2026-07-23T17:17:05.928035+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_broken_leg_treat": {
    "id": "rogueport_broken_leg_treat",
    "name": "Broken Leg Treat",
    "description": "The Broken Leg Treat is a murky, elixir-like potion that seethes with the essence of cursed toad venom and moonlit roots. Sipping this concoction grants you enhanced mobility for a short time but at the cost of your mental clarity. For two minutes, your movement speed increases by 20%, allowing you to quickly navigate through tight spaces or escape danger. However, beware; the treat also inflicts a 10% chance that you will momentarily lose focus and attack an ally in a fit of madness.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Enhanced Mobility",
      "Temporary Insanity"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Mobility",
        "rules": "Consume the treat to gain a +20 bonus to your movement speed for two minutes. This effect ends if you take any damage or if you use this effect again before the duration expires."
      },
      {
        "title": "Temporary Insanity",
        "rules": "There is a 10% chance per minute that you will attack an ally within reach as if they were an enemy. You can make a DC 15 Wisdom saving throw to resist this effect each time it triggers. The effect ends when the duration of the treat expires."
      }
    ],
    "levelRequirementReason": "This potion is designed for rogues and other lower-level characters who need quick bursts of speed in dangerous situations.",
    "vendorReason": "Rogueport has a robust network that includes rogue dens, making them the perfect vendor for items that aid in escape and stealth.",
    "shippingDetail": "Special delivery via Pipe Express ensures this potent brew arrives safely within two days of purchase.",
    "usage": {
      "activation": "Consume as a bonus action",
      "duration": "2 minutes",
      "endsWhen": "You take damage or use the effect again before its duration expires",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "The balanced XP price reflects the treat's dual effects: enhanced mobility and temporary insanity risk.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:16:16.394234+00:00",
    "aiReviewedAt": "2026-07-23T17:16:16.394234+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_chain_chomp_harness": {
    "id": "rogueport_chain_chomp_harness",
    "name": "Chain Chomp Harness",
    "description": "This mechanical harness, a marvel of Hammer Bros Handling craftsmanship, transforms the formidable Chain Chomp into an obedient steed or combat partner. Built to tame these weaponized mouths of the Koopa Navy, it grants +1 to Stealth checks while mounted and allows command over these monstrous beasts for up to two rounds, but each use saps 1 point of sanity from the rider's psyche. A perfect tool for heists or dockside ambushes, this harness comes with a price—your very sanity.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐉",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Grants +1 to Stealth checks while mounted",
      "Can command a Chain Chomp to attack or carry up to 500 lbs"
    ],
    "vendor": "rogueport",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Stealth Bonus",
        "rules": "The wearer gains a +1 bonus to Stealth checks while mounted on the Chain Chomp. This effect lasts until the end of the wearer's next turn."
      },
      {
        "title": "Command Chain Chomp",
        "rules": "Once per short rest, the wearer can command their mounted Chain Chomp to attack or carry up to 500 lbs for a duration of two rounds. The Chain Chomp cannot be commanded more than once per long rest."
      }
    ],
    "levelRequirementReason": "Requires level 7 to ensure the user can handle the harness's demands on sanity and combat.",
    "vendorReason": "Rogueport specializes in exotic, high-risk equipment for daring heists and covert operations.",
    "shippingDetail": "Ships via express delivery with the Hammer Bros Handling team ensuring safe transport to your doorstep.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous activation, effect lasts until end of next turn or rest period ends.",
      "endsWhen": "The duration ends when the Chain Chomp is no longer mounted by the wearer or the user takes a short or long rest.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, considering its unique utility in specialized combat and stealth scenarios.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T17:16:28.514748+00:00",
    "aiReviewedAt": "2026-07-23T17:16:28.514748+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_cold_blood_pearl": {
    "id": "rogueport_cold_blood_pearl",
    "name": "Cold Blood Pearl of the Void",
    "description": "The Cold Blood Pearl of the Void is a gemstone carved from the heart of a fallen god, its icy surface reflecting an endless void. Worn by the most skilled rogues and spies, it grants the bearer an aura so chilling that even the keenest eyes cannot detect them for ten seconds. A true masterpiece forged in the fires of forgotten realms, this pearl enhances stealth with a +30% bonus to Dexterity (Stealth) checks and a +10% chance to dodge enemy attacks by becoming momentarily invisible.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+30% Stealth Bonus",
      "Momentary Invisibility"
    ],
    "vendor": "rogueport",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Enhanced Stealth",
        "rules": "The wearer gains a +30% bonus to Dexterity (Stealth) checks for ten seconds. This effect is not cumulative with other stealth bonuses and ends immediately if the wearer makes an attack or casts a spell."
      },
      {
        "title": "Momentary Invisibility",
        "rules": "For ten seconds, the wearer becomes momentarily invisible, granting +10% chance to dodge enemy attacks by becoming invisible. This effect ends when the wearer makes an attack roll, cast a spell, or is hit by an attack."
      }
    ],
    "levelRequirementReason": "The Cold Blood Pearl's power requires a skilled rogue with at least six levels of experience to harness its full potential.",
    "vendorReason": "Rogueport, known for its connections and trade routes through hidden realms, is the sole purveyor of such rare and powerful artifacts.",
    "shippingDetail": "The Cold Blood Pearl arrives by the Void Drifter Relay, a courier service renowned for its precision and reliability. Delivery takes exactly two weeks from the point of purchase.",
    "usage": {
      "activation": "Instantaneous upon donning the pearl; ends after ten seconds or if the wearer attacks, casts a spell, or is hit by an attack.",
      "duration": "10 seconds",
      "endsWhen": "The wearer makes an attack roll, cast a spell, or is hit by an attack.",
      "charges": "Unlimited"
    },
    "priceReason": "The Cold Blood Pearl's price reflects its rarity and the immense skill required to craft such a powerful yet balanced item.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T17:16:47.968502+00:00",
    "aiReviewedAt": "2026-07-23T17:16:47.968502+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_cold_mind": {
    "id": "rogueport_cold_mind",
    "name": "Cold Mind",
    "description": "The Cold Mind vial is a crystalline container holding a ghostly, luminescent fluid that whispers of ancient mental disciplines and forgotten sciences. When ingested, it induces a state where the user's mind clears of all distractions, granting perfect focus or escape in the heat of combat. Yet, for 30 seconds following its use, the user becomes blind and deaf to the world around them, leaving only their heightened senses focused on the task at hand. This vial is said to have been crafted by the enigmatic scholars of the Shadow Archipelago, whose knowledge of mental disciplines has long since faded into legend.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Perfect Focus",
      "Blindness and Deafness"
    ],
    "vendor": "rogueport",
    "shippedBy": "Courier of Shadows",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Perfect Focus",
        "rules": "The user gains advantage on Intelligence (Insight) checks. This effect lasts for 30 seconds after activation, during which the user is immune to being charmed or frightened."
      },
      {
        "title": "Blindness and Deafness",
        "rules": "For 30 seconds following the duration of Perfect Focus, the user becomes blinded and deafened. They have disadvantage on all Perception checks that rely on sight or sound. This effect ends when the user regains their senses."
      }
    ],
    "levelRequirementReason": "This item is designed for quick and versatile use by lower-level rogues who need to focus in combat.",
    "vendorReason": "Rogueport specializes in crafting and distributing unique items that enhance the skills of its patrons, making Cold Mind a natural addition to their offerings.",
    "shippingDetail": "Delivered by the Courier of Shadows within three days, this item is guaranteed to be in pristine condition upon arrival.",
    "usage": {
      "activation": "Consume as an action.",
      "duration": "30 seconds for Perfect Focus, with Blindness and Deafness lasting 30 seconds afterward.",
      "endsWhen": "The effects end when the duration expires or if the user regains their senses.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The balanced XP price reflects its rarity and unique properties, providing a powerful yet versatile tool for lower-level characters.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:17:28.909869+00:00",
    "aiReviewedAt": "2026-07-23T17:17:28.909869+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_courier_token": {
    "id": "rogueport_courier_token",
    "name": "Noki Coral Fleet Pass",
    "description": "The Noki Coral Fleet Pass is a small, intricately carved token that glows faintly with the light of the sea. It grants its bearer safe passage aboard any vessel of the Noki Coral Fleet for one journey and allows them to request emergency assistance from the ship's crew in case of peril. The pass also comes with a free bottle of Noki Coral ale, a traditional libation that is said to keep sailors calm during rough seas.",
    "price": 1000,
    "icon": "🛳",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Safe Passage",
      "Request Assistance"
    ],
    "vendor": "rogueport",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Safe Passage",
        "rules": "When activated by presenting the pass to any Noki Coral Fleet ship, the bearer receives safe passage for one journey. This effect is instantaneous and requires no action."
      },
      {
        "title": "Request Assistance",
        "rules": "The bearer may use this token to request immediate assistance from a crew member in case of emergency. The captain or another senior officer must approve any such request, which ends the pass's usefulness for that ship."
      }
    ],
    "levelRequirementReason": "Suitable for all adventurers, as it simplifies travel and ensures safety on a journey.",
    "vendorReason": "Rogueport is known for facilitating travel and ensuring the safety of its citizens and visitors.",
    "shippingDetail": "The pass is delivered directly by fleet courier, ensuring it arrives safely and in time for your next voyage.",
    "usage": {
      "activation": "Presenting the token to any Noki Coral Fleet vessel captain or crew member.",
      "duration": "Instantaneous upon activation; ends when used.",
      "endsWhen": "The effect is consumed upon use, granting safe passage once and allowing one request for assistance.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at this price to reflect its utility in ensuring travel safety without overburdening the player's resources.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T17:16:44.149982+00:00",
    "aiReviewedAt": "2026-07-23T17:16:44.149982+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_crimson_blade": {
    "id": "rogueport_crimson_blade",
    "name": "Crimson Fang",
    "description": "Crimson Fang is a dagger forged from the heart of a corrupted toad, its blade shimmering with dark red light that seems to pulse with malevolent energy. This deadly weapon splits through armor like it's made of paper and leaves behind a trail of crimson blood that attracts attention, making it an assassin’s nightmare for both friend and foe alike. With each strike, the dagger whispers secrets of death and shadows, enhancing its wielder's ability to strike unseen.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔪",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Corrupting Strike",
      "Blood Trail"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Corrupting Strike",
        "rules": "When you hit an armored target with Crimson Fang, deal an additional +10 damage. This effect can be used once per short or long rest."
      },
      {
        "title": "Blood Trail",
        "rules": "For 5 seconds after you make a melee attack with Crimson Fang, enemies within 10 feet of the target are revealed to you and cannot become unseen until the end of their next turn. This effect can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "Assassins must have a firm grasp on their skills before they can wield such a dangerous weapon.",
    "vendorReason": "Rogueport, the hub of underground trade and assassins' guilds, is known for its supply of rare and deadly weapons.",
    "shippingDetail": "Delivered through shadowy couriers who ensure secrecy but may add a delay due to their covert methods.",
    "usage": {
      "activation": "On hit with a melee attack",
      "duration": "Instantaneous; lasts for 5 seconds after use",
      "endsWhen": "The target of the Blood Trail becomes unseen or the effect ends at the start of its next turn",
      "charges": "Once per short or long rest"
    },
    "priceReason": "Balanced to reflect its rare and deadly nature, Crimson Fang is priced moderately high due to its unique and powerful effects.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T17:17:13.077154+00:00",
    "aiReviewedAt": "2026-07-23T17:17:13.077154+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_crimson_blood_tape": {
    "id": "rogueport_crimson_blood_tape",
    "name": "Crimson Blood Tape",
    "description": "Crimson Blood Tape, a notorious tool of the Rogueport thieves' guild, is a strip of ink-stained tape that leaves behind an unmistakable crimson trail on any surface it touches. This sticky residue not only marks your path but also glows faintly under moonlight, illuminating your escape route with eerie red light. It’s perfect for decoy trails and silent alarms, leaving behind a signature mark that even the most skilled pickpockets can’t ignore.",
    "price": 1000,
    "icon": "🧩",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Marks surfaces with red ink",
      "Glows faintly under moonlight"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Marking Surface",
        "rules": "As an action, you apply Crimson Blood Tape to a surface. It leaves behind a permanent red mark that lasts for 24 hours or until removed by cleaning. This effect can be used once per long rest."
      },
      {
        "title": "Moonlight Glow",
        "rules": "The tape glows faintly under moonlight, illuminating an area of up to 10 feet in radius for 30 seconds each night it is applied. It provides dim light in this area and does not require any action from the user."
      }
    ],
    "levelRequirementReason": "This item requires no specific level, as it's a tool that can be used by anyone needing to mark or deceive.",
    "vendorReason": "As a notorious shop in the heart of Rogueport, they are known for their illegal and useful wares.",
    "shippingDetail": "Ships via the fastest route with guaranteed delivery within 2 days.",
    "usage": {
      "activation": "As an action or bonus action",
      "duration": "Permanent until removed, up to 30 seconds of glow each night it is applied",
      "endsWhen": "The mark fades after 24 hours or when cleaned; glow ends after 30 seconds each night",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item provides a unique and useful tool for thieves, spies, and explorers, making it worth its weight in XP.",
    "priceOriginal": 1000,
    "priceReviewedAt": "2026-07-23T17:17:46.596777+00:00",
    "aiReviewedAt": "2026-07-23T17:17:46.596777+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_crimson_cannon_bolt": {
    "id": "rogueport_crimson_cannon_bolt",
    "name": "Crimson Cannon Bolt",
    "description": "The Crimson Cannon Bolt is a rare single-use projectile forged from plasma and tempered steel. Crafted by Rogueport’s elite forcers, it not only delivers a devastating 120-point blast but also leaves behind a lingering sonic echo that reveals the exact location of nearby enemies for 5 seconds. Ideal for breaching reinforced doors or disabling security drones, this weapon is both a force of nature and a beacon of danger.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Plasma Blast",
      "Sonic Echo"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Plasma Blast",
        "rules": "When the cannon bolt strikes an enemy within 30 feet, it deals 120 fire damage. The target must make a DC 15 Dexterity saving throw or be pushed back 10 feet and knocked prone."
      },
      {
        "title": "Sonic Echo",
        "rules": "For 5 seconds after the bolt lands in an area with at least one hostile creature, all creatures there gain disadvantage on perception checks. The sonic echo fades if a creature moves more than 10 feet from the impact point."
      }
    ],
    "levelRequirementReason": "This weapon is designed for versatile use by lower-level rogues and forcers who need a reliable tool to breach doors or disable drones.",
    "vendorReason": "Rogueport’s elite forcers frequently require such specialized tools in their missions, making this item an essential part of the Rogueport inventory.",
    "shippingDetail": "Delivered by Lakitu drones with same-day delivery within the city limits.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's rare materials and unique function without overvaluing its effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:17:20.989247+00:00",
    "aiReviewedAt": "2026-07-23T17:17:20.989247+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_crimson_circuit": {
    "id": "rogueport_crimson_circuit",
    "name": "Crimson Circuit",
    "description": "The Crimson Circuit is a neural implant crafted from salvaged tech, its surface etched with ancient runes that glow red under stress. This dangerous relic was once embedded in a notorious gangster's skull and grants its user rapid reflexes and the ability to see enemy weaknesses during moments of strain. It hums softly when activated, sending a pulse through the wearer’s nervous system as it enhances their reaction time and reveals hidden vulnerabilities.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Reflex Surge",
      "Weakness Scan"
    ],
    "vendor": "rogueport",
    "shippedBy": "Courier of Shadows",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Reflex Surge",
        "rules": "As a bonus action, the user can activate Reflex Surge to increase their attack speed by +20% for 5 seconds. This effect provides an additional +1d6 damage on melee attacks during its duration."
      },
      {
        "title": "Weakness Scan",
        "rules": "The user can activate Weakness Scan as a reaction when they take damage from a creature, allowing them to see the target’s weak points for 3 seconds. The target must make a DC 15 Dexterity saving throw or become exposed (reduced AC by 2) until the start of their next turn."
      }
    ],
    "levelRequirementReason": "The Crimson Circuit requires significant mental acuity and focus, making it suitable for characters at least 6th level.",
    "vendorReason": "RoguePort's network of informants often comes across such illicit tech, including this dangerous relic from a notorious gangster’s past.",
    "shippingDetail": "Ships via the Courier of Shadows, known for their secrecy and reliability in delivering high-risk items.",
    "usage": {
      "activation": "Bonus Action / Reaction",
      "duration": "5 seconds / Instantaneous",
      "endsWhen": "Ends when its duration expires or the user takes another action that requires a reaction.",
      "charges": "Unlimited, but each use is limited to once per short rest."
    },
    "priceReason": "The Crimson Circuit's unique design and rare components justify its price, making it an expensive yet valuable asset for skilled rogues and tacticians.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-23T17:17:42.882553+00:00",
    "aiReviewedAt": "2026-07-23T17:17:42.882553+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_crimson_cloak_of_the_night": {
    "id": "rogueport_crimson_cloak_of_the_night",
    "name": "Crimson Cloak of the Night",
    "description": "The Crimson Cloak of the Night is a tattered yet regal garment that shrouds its wearer in an impenetrable darkness, making them nearly indistinguishable from the night itself. Crafted from shadowy threads and imbued with ancient magic, it whispers secrets to those who wear it, reducing movement noise by 75% and granting +30% stealth bonus during combat. The cloak's origins lie in the dark alleys of Rogueport, where it was said to have been woven by a forgotten sorceress seeking to hide from her past.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Shadow Cloak",
      "Silent Step"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shadow Cloak",
        "rules": "Activates as a bonus action, concealing the wearer in shadows for 10 minutes. Ends if the wearer moves more than 30 feet or if they attack or cast a spell."
      },
      {
        "title": "Silent Step",
        "rules": "Passive effect that reduces the noise of the wearer's movements by 75%. This effect is negated when the wearer speaks, attacks, or casts a spell."
      }
    ],
    "levelRequirementReason": "The cloak requires no minimum level as its effects are subtle and assist in stealth.",
    "vendorReason": "Rogueport is known for its connections to the underworld, making it a fitting place for this magical cloak.",
    "shippingDetail": "Ships discreetly via Pipe Express, ensuring the cloak arrives in perfect condition without drawing unwanted attention.",
    "usage": {
      "activation": "Bonus action to activate Shadow Cloak; passive effect of Silent Step is always active.",
      "duration": "10 minutes for Shadow Cloak",
      "endsWhen": "Moving more than 30 feet, attacking, or casting a spell ends the Shadow Cloak. Silent Step is negated when speaking, attacking, or casting a spell.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The cloak's balanced price reflects its subtle yet powerful effects that enhance stealth and movement in combat.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:17:36.832492+00:00",
    "aiReviewedAt": "2026-07-23T17:17:36.832492+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_crimson_collar": {
    "id": "rogueport_crimson_collar",
    "name": "Crimson Collar of the Sirens’ Bargain",
    "description": "The Crimson Collar of the Sirens’ Bargain is a lustrous, blood-red collar forged from enchanted metal that hums a hypnotic tune, drawing targets towards deadly traps or distracting devices. The collar leaves behind a faint scar on its wearer’s neck after use, a grim reminder of its power. Once activated, it can be retracted by the user after 10 minutes, but only if no target is currently affected.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Draws targets to traps",
      "Leaves a scar"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hypnotic Lure",
        "rules": "When activated as an action, the collar emits a hypnotic hum that draws creatures within 30 feet towards it. Targets must succeed on a DC 14 Wisdom saving throw or be pulled toward the nearest trap or distraction set by the user. The effect lasts for 1 minute and can affect up to three creatures."
      },
      {
        "title": "Scar of the Siren",
        "rules": "The collar leaves behind a faint scar on the wearer’s neck, which is visible until it fades after one week. This scar does not impede movement or impose any penalties but serves as a constant reminder of the collar's power."
      }
    ],
    "levelRequirementReason": "This item requires only level 1 to use due to its specific and limited effects, making it accessible for new rogues.",
    "vendorReason": "Rogueport is known for its vast array of equipment tailored for thieves and rogues, including this collar that perfectly suits their needs.",
    "shippingDetail": "The collar arrives via Pipe Express, delivered directly to the adventurer's door with a swift delivery time of three days.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute (can be retracted after 10 minutes)",
      "endsWhen": "Target successfully saves or trap is disabled",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the item's utility in both combat and exploration, making it a valuable tool for rogues.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:17:59.660386+00:00",
    "aiReviewedAt": "2026-07-23T17:17:59.660386+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_crimson_fists": {
    "id": "rogueport_crimson_fists",
    "name": "Crimson Fists of the Broken Throne",
    "description": "The Crimson Fists of the Broken Throne are a pair of bloodstained gauntlets forged from the war-torn remains of a fallen warlord. Their steel is slick with dried blood, and their weight feels like that of a heavy weapon. When donned, they channel the rage of the fallen into your strikes, making each blow more deadly. They are perfect for those who need to break chains or silence witnesses in one fell swoop.",
    "category": "equipment",
    "price": 3500,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+150% damage on first strike",
      "Disables enemy movement for 1 turn"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "First Strike Overload",
        "rules": "When you make your first attack with the gauntlets, it deals +150% extra damage. This effect can only occur once per encounter."
      },
      {
        "title": "Mobilize Silence",
        "rules": "As a bonus action, you can disable an enemy's movement for 1 turn. This effect has a recharge time of 1 day and requires a successful Strength check (DC 15)."
      }
    ],
    "levelRequirementReason": "These gauntlets are crafted to channel the power of a seasoned warrior, requiring at least level 5 proficiency in strength-based combat.",
    "vendorReason": "Rogueport is known for its vast array of equipment tailored for skilled warriors and adventurers, making it an ideal vendor for these gauntlets.",
    "shippingDetail": "Due to the delicate nature of the gauntlets, they are shipped via Pipe Express with same-day delivery within the city limits.",
    "usage": {
      "activation": "Bonus action or as a reaction to an attack",
      "duration": "Instantaneous for First Strike Overload; 1 turn for Mobilize Silence",
      "endsWhen": "The effect is used up, or the gauntlets are removed and recharged",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the rare materials, intricate forging process, and the unique abilities that make these gauntlets a prized possession among seasoned fighters.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T17:17:52.735867+00:00",
    "aiReviewedAt": "2026-07-23T17:17:52.735867+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_crimson_helm": {
    "id": "rogueport_crimson_helm",
    "name": "Crimson Helm",
    "description": "The Crimson Helm is a hooded mask that transforms its wearer into an unseen specter of fear and intimidation in Rogueport’s underbelly. Its red glow intensifies when darkness falls, casting an eerie light that paralyzes foes on the first strike and reduces their awareness of your presence by half. The helm's crimson surface whispers tales of countless victories and unspeakable horrors, each wearer leaving behind a legacy of fear.",
    "category": "equipment",
    "price": 1000,
    "icon": "👁",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Paralyze First Strike",
      "Stealth Aura"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Paralyze First Strike",
        "rules": "When you make your first attack against an enemy, it must succeed on a DC 15 Dexterity saving throw or be paralyzed for 1 round. This effect can only occur once per short rest."
      },
      {
        "title": "Stealth Aura",
        "rules": "While wearing the helm and hiding, you gain a +20 bonus to your Stealth checks. This effect is active as long as you remain hidden but ends if you make any noise or move more than 5 feet."
      }
    ],
    "levelRequirementReason": "The Crimson Helm's power requires the wearer to be experienced enough to manage its effects and maintain stealth.",
    "vendorReason": "Only Rogueport's vendors can supply items that align with the city’s dark underworld.",
    "shippingDetail": "The helm is delivered in a shadowy, sealed box, ensuring its arrival without interruption.",
    "usage": {
      "activation": "Instantaneous when wearing the helm for the first time during an encounter.",
      "duration": "Until the end of your next long rest or until you remove the helm.",
      "endsWhen": "The helm's effects cease if you are seen, make noise, or move more than 5 feet while hidden.",
      "charges": "Unlimited"
    },
    "priceReason": "The Crimson Helm is crafted from rare materials and imbued with ancient spells, justifying its moderate price.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-23T17:18:45.311828+00:00",
    "aiReviewedAt": "2026-07-23T17:18:45.311828+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_crimson_hood": {
    "id": "rogueport_crimson_hood",
    "name": "Crimson Hood of the Silent Blade",
    "description": "The Crimson Hood of the Silent Blade is a sleek, blood-red woolen hood that whispers secrets to the wearer's mind as it muffles sound and grants invisibility in dimly lit areas. Worn by those who walk shadows, this hood bears the mark of a rogue’s soul — its wearer cannot be tracked by standard surveillance and their movements are cloaked by an eerie silence that follows them through the night.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stealth",
      "Silent Echo"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Stealth",
        "rules": "The hood grants a +30% chance to evade detection in dimly lit areas. It provides total concealment within a 10-foot radius, and the wearer cannot be tracked by standard surveillance methods."
      },
      {
        "title": "Silent Echo",
        "rules": "While wearing this hood, ambient noise is reduced by 50%, creating an environment where sound travels in eerie silence. Targets within a 20-foot radius gain +10% suspicion when near the wearer due to the unnatural quiet."
      }
    ],
    "levelRequirementReason": "Wearing this hood requires a certain level of stealth and focus, suitable for characters who have honed their skills in subtlety.",
    "vendorReason": "As Rogueport is known for its connections to the underworld, it's fitting that they stock gear perfect for those who navigate by shadows.",
    "shippingDetail": "Pipe Express ensures discreet delivery with no tracking available, guaranteeing your hood arrives in pristine condition.",
    "usage": {
      "activation": "Activates as a bonus action.",
      "duration": "Concentrated use lasts until the start of your next turn. Can be reactivated after a short rest.",
      "endsWhen": "The concentration ends when you stop concentrating or are incapacitated.",
      "charges": "Unlimited, but cannot be used while concentrating on another effect."
    },
    "priceReason": "Balanced at 1000 XP, this hood offers a significant advantage for those who rely on stealth and silence in their adventures.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:18:13.661129+00:00",
    "aiReviewedAt": "2026-07-23T17:18:13.661129+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_crimson_horn": {
    "id": "rogueport_crimson_horn",
    "name": "Crimson Horn of the Silent Choir",
    "description": "The Crimson Horn of the Silent Choir is a relic forged from the last breath of a murdered choir leader. Crafted in the heart of a forsaken cathedral, its deep crimson hue glows with an eerie light. When sounded, it emits a resonant note that silences all ambient sounds within earshot for 5 seconds, allowing stealthy movements or audacious strikes without detection. The horn also grants the wielder a brief moment of invisibility, masking their form from sight for 3 seconds, perfect for evading foes or slipping through tight spaces unseen.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎭",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Silence",
      "Invisibility"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silent Echo",
        "rules": "Activate as a bonus action. This effect silences all ambient noise within 30 feet for 5 seconds, granting advantage on Dexterity (Stealth) checks and hiding attempts during this time."
      },
      {
        "title": "Veil of Shadows",
        "rules": "Activate as a reaction when attacked by a creature. Grants the wielder invisibility until the start of their next turn or until they attack, whichever comes first. This effect can be used only once per long rest."
      }
    ],
    "levelRequirementReason": "This horn is crafted for rogues and other stealth-focused characters who need to operate in covert situations.",
    "vendorReason": "Rogueport specializes in items that enhance the capabilities of thieves, spies, and adventurers.",
    "shippingDetail": "The horn is carefully packed by Lakitu Drones to ensure it arrives undamaged and functional, delivered directly to your doorstep within a week.",
    "usage": {
      "activation": "Bonus action for 'Silent Echo', Reaction for 'Veil of Shadows'",
      "duration": "'Silent Echo' lasts 5 seconds; 'Veil of Shadows' until the start of next turn or attack",
      "endsWhen": "The duration ends, or you are hit by an attack while invisible.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to reflect its epic rarity and the significant advantages it provides in stealth-based scenarios.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-23T17:18:08.101376+00:00",
    "aiReviewedAt": "2026-07-23T17:18:08.101376+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_crimson_key": {
    "id": "rogueport_crimson_key",
    "name": "Crimson Key",
    "description": "The Crimson Key is a blood-red iron key forged from the ruins of an ancient penal colony. Crafted by blacksmiths who never saw daylight, this key opens doors to vaults sealed with arcane locks and magical runes. It whispers secrets of past crimes as it unlocks, granting access to treasures hidden by those who have broken the law. Only those with a criminal background can wield its power without risk.",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Opens forbidden vaults",
      "Increases loot drop rate"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shadow Couriers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Crimson Curse",
        "rules": "Upon use, the key triggers a one-time 'Crimson Curse' effect. The user must succeed on a DC 15 Constitution saving throw or be cursed with a minor ailment for 24 hours."
      },
      {
        "title": "Increased Loot Drop Rate",
        "rules": "For 1 hour after use, the key increases the loot drop rate from hidden enemies by 30%. This effect ends when the user rests."
      }
    ],
    "levelRequirementReason": "Requires a criminal background to activate its effects without risk.",
    "vendorReason": "Rogueport specializes in items for those who live on the edge of society, making this key an ideal addition to their inventory.",
    "shippingDetail": "Ships via Shadow Couriers, ensuring swift and discreet delivery.",
    "usage": {
      "activation": "Uses one action upon insertion into a lock.",
      "duration": "Instantaneous for the 'Crimson Curse', 1 hour for increased loot drop rate.",
      "endsWhen": "'Crimson Curse' ends on a successful saving throw or after 24 hours. Loot drop increase effect ends when the user rests.",
      "charges": "Unlimited, but can only be used once per day."
    },
    "priceReason": "Balanced price reflects its rarity and unique criminal theme, ensuring it remains a valuable but not overpowered item.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-23T17:18:13.855146+00:00",
    "aiReviewedAt": "2026-07-23T17:18:13.855146+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_crimson_scarab_heart": {
    "id": "rogueport_crimson_scarab_heart",
    "name": "Crimson Scarab Heart",
    "description": "The Crimson Scarab Heart pulses with an eerie red glow, its carapace etched with forgotten sigils of a cult's god-king. This relic grants the wearer near-invincibility in combat, deflecting physical and magical attacks for the duration, but at the cost of their sanity, causing them to question reality after use. Crafted from the remains of an ancient deity, it radiates a dark energy that warps perception during its brief effect.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Invulnerability",
      "Sanity Drain"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Invulnerability",
        "rules": "The wearer becomes immune to all physical and magical attacks for 30 seconds. This effect can be triggered as a reaction to an attack or spell that targets the user. The effect ends when the duration expires, if the wearer takes any damage, or if they voluntarily end it by using their action."
      },
      {
        "title": "Sanity Drain",
        "rules": "Each use of the Crimson Scarab Heart reduces the user's sanity by 25%, which may cause hallucinations or paranoia. The effect is cumulative and can lead to severe mental instability if used repeatedly. After each activation, the user must succeed on a DC 15 Wisdom saving throw or suffer a temporary penalty to their perception checks equal to half the number of times they have activated it."
      }
    ],
    "levelRequirementReason": "Wielders must be at least level 6 to handle the item's arcane and mental strain.",
    "vendorReason": "Rogueport specializes in exotic and rare relics, including artifacts with dark histories like this scarab heart.",
    "shippingDetail": "Ships via Lakitu Drones' express service, ensuring swift delivery to the buyer's doorstep.",
    "usage": {
      "activation": "Activates as a reaction when an attack or spell is targeted at the user.",
      "duration": "30 seconds",
      "endsWhen": "The duration expires, the user takes damage, or they voluntarily end it by using their action.",
      "charges": "Unlimited"
    },
    "priceReason": "This balanced price reflects the item's rare and powerful nature, offering both combat advantage and a risk to the user’s mental stability.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T17:18:52.652003+00:00",
    "aiReviewedAt": "2026-07-23T17:18:52.652003+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_crimson_scarf": {
    "id": "rogueport_crimson_scarf",
    "name": "Crimson Scarf of the Fallen King",
    "description": "The Crimson Scarf of the Fallen King is a bloodstained silk scarf said to be woven from the last breath of a disgraced monarch. Its fabric, rich and dark as night, whispers tales of whispered secrets in shadowy alleys. Worn with pride, it grants its wearer stealth in dim environments and commands respect among underworld lords. When an enemy's health drops below 50%, fear grips them, and if they are at 25% HP or less, the scarf triggers a 'Crimson Gaze' that reveals their location for three turns.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stealth +30% in dim environments",
      "Fear on enemies at 50% HP or below"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Stealth +30% in Dim Environments",
        "rules": "The wearer gains advantage on Dexterity (Stealth) checks in dim lighting. This effect lasts until the end of their next turn."
      },
      {
        "title": "Fear on Enemies at 50% HP or Below",
        "rules": "When an enemy's hit points drop to 50% or below, they must succeed on a DC 14 Wisdom saving throw or be frightened for 1 minute. On a successful save, the fear effect is negated."
      }
    ],
    "levelRequirementReason": "The scarf's intricate weaving and ancient magic require a proficient wearer with some experience in stealth.",
    "vendorReason": "Rogueport is known for its extensive network of underworld contacts, making it the perfect vendor for such a relic.",
    "shippingDetail": "The scarf arrives discreetly via Lakitu Drones, ensuring it reaches the destination swiftly and secretly.",
    "usage": {
      "activation": "Passive effect; activation required when in dim environments only.",
      "duration": "Instantaneous for Stealth advantage; 1 minute for fear effect on enemies.",
      "endsWhen": "The effect ends when the wearer leaves a dim environment or the fear effect is negated.",
      "charges": "Unlimited, recharges after a long rest."
    },
    "priceReason": "Given its rarity and the magic imbued in its fabric, this scarf is priced at 1000 XP, reflecting its historical significance and practical utility.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:18:43.391961+00:00",
    "aiReviewedAt": "2026-07-23T17:18:43.391961+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_crimson_silence": {
    "id": "rogueport_crimson_silence",
    "name": "Crimson Silence",
    "description": "Crimson Silence is a sleek, whispering earpiece that mutes all ambient noise within its 5-meter radius, turning chaotic hallways into serene corridors perfect for sneaking past silent guards or avoiding unwanted conversations. The faint red glow it emits signals its active state to allies, and the device's core is said to be crafted from the rarest obsidian found in the depths of Shadowfell. When worn, it not only mutes sounds but also reveals hidden footsteps in darkness, giving you an edge in stealth missions.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Mutes ambient sound",
      "Reveals hidden footsteps"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Silent Muffle",
        "rules": "Activates as a bonus action. Mutes all ambient noise within a 5-meter radius, lasts for 1 minute on the wearer. Ends early if the wearer speaks or makes loud noises."
      },
      {
        "title": "Footstep Revelation",
        "rules": "Passive effect while worn in darkness. Reveals hidden footsteps within a 5-meter radius of the wearer, lasting until removed or the wearer moves more than 10 feet away from their original location."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to activate and maintain concentration for its effects without being interrupted.",
    "vendorReason": "Rogueport is known for their extensive network of spies and thieves, making them the perfect vendor for such a clandestine item.",
    "shippingDetail": "Ships via a shadowy courier who ensures the package reaches its destination swiftly and unseen.",
    "usage": {
      "activation": "Bonus action to activate; concentration required while active.",
      "duration": "1 minute on the wearer, ends early if interrupted.",
      "endsWhen": "Wearer speaks or makes loud noises, or when removed.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced for a rare item that provides significant stealth advantages without overpowered effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:18:41.512676+00:00",
    "aiReviewedAt": "2026-07-23T17:18:41.512676+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_crimson_silencer": {
    "id": "rogueport_crimson_silencer",
    "name": "Crimson Silencer",
    "description": "The Crimson Silencer is a compact, sleek device encased in red-tinted metal, its surface etched with arcane symbols that hum faintly before it glows. When activated, this gadget mutes sound for ten seconds, creating an instant pocket of silence within a five-foot radius. Nearby enemies can still hear the user’s position as a crimson light pulses, making stealthy maneuvers perilous yet effective in crowded alleys or during heists.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎭",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Mutes Sound",
      "Reveals Position"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Silent Pulse",
        "rules": "Activates on the user’s action. Creates a five-foot radius of silence that lasts for ten seconds. The device emits a faint red glow, revealing the user's location to any nearby enemies within 30 feet as long as the user is within this radius."
      },
      {
        "title": "Stealth Hazard",
        "rules": "While using this ability, there is a +2 bonus to Dexterity (Stealth) checks. However, for every ten minutes after activation, the DC of Perception checks made by enemies increases by 1 until it resets at the start of your next long rest."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Stealth to activate and maintain the effects effectively.",
    "vendorReason": "Rogueport is known for its specialized equipment that supports covert operations, making this device a perfect fit for their inventory.",
    "shippingDetail": "Ships via a shadowy courier who ensures the package arrives without detection, though the delivery time can vary between one to three days depending on current magical traffic.",
    "usage": {
      "activation": "Activates as an action. Ends when the duration expires or if the user moves out of range.",
      "duration": "10 seconds",
      "endsWhen": "The duration ends or the user moves out of a five-foot radius from the device.",
      "charges": "Unlimited, recharges at dawn."
    },
    "priceReason": "Balanced price considering its stealth benefits and limited duration, making it a valuable tool for rogues and infiltrators without being overpowered.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T17:19:14.113511+00:00",
    "aiReviewedAt": "2026-07-23T17:19:14.113511+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_crimson_siren": {
    "id": "rogueport_crimson_siren",
    "name": "Crimson Siren",
    "description": "The Crimson Siren is a delicate, blood-red crystal whistle forged from ancient eldritch glass in the forges of Rogueport's shadowy backstreets. When blown, it emits a haunting melody that sends foes into a frenzied hallucination, making them stumble and stagger in confusion. Its second effect causes mental breakdowns in elite guards, turning their battle prowess into chaotic chaos. This relic is best used in covert ambushes or to distract the most formidable of foes.",
    "price": 1000,
    "icon": "🎵",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+10% damage on next attack",
      "20% chance to cause mental breakdown"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Next Attack Damage Boost",
        "rules": "When you use the Crimson Siren and hit a creature with your next melee attack, you deal an additional +10% damage."
      },
      {
        "title": "Elite Mental Breakdown",
        "rules": "There is a 20% chance that when you use the Crimson Siren and hit an elite guard or similar creature, they suffer a mental breakdown. This effect lasts until their next action, reducing their effectiveness by half."
      }
    ],
    "levelRequirementReason": "The Crimson Siren's eldritch power is potent even for lower levels, making it accessible to all rogues.",
    "vendorReason": "Rogueport vendors are known for their unique and powerful items, often crafted by the city’s own shadowy artisans.",
    "shippingDetail": "Delivered by Pipe Express, this artifact requires a special courier to ensure it reaches its destination intact. The package must be signed for upon arrival.",
    "usage": {
      "activation": "A bonus action to blow the whistle and unleash its effects.",
      "duration": "Instantaneous; the effects of the whistle last until the end of your next turn.",
      "endsWhen": "The effect ends if you miss with a subsequent attack or if the target successfully saves against the mental breakdown.",
      "charges": "Unlimited"
    },
    "priceReason": "The Crimson Siren's price reflects its unique eldritch properties and the skill required to craft such an item.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:19:55.526332+00:00",
    "aiReviewedAt": "2026-07-23T17:19:55.526332+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_crimson_tongue": {
    "id": "rogueport_crimson_tongue",
    "name": "Crimson Tongue of the Drowned Choir",
    "description": "The Crimson Tongue of the Drowned Choir is a vial filled with the essence of an ancient bard's final song, captured at the depths where the river meets the sea. When consumed, it whispers truths and lies to the drinker, distorting reality for moments: visions of hidden paths may appear on maps, while perceptions are randomly altered by hallucinations that last only a fleeting instant. The vial itself is sealed with wax stamped by a long-forgotten guild, hinting at its origins in a realm where music and magic intertwine.",
    "price": 1000,
    "icon": "🧪",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Reveals Hidden Paths",
      "Causes Hallucinations"
    ],
    "vendor": "rogueport",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveals Hidden Paths",
        "rules": "When consumed, the vial grants the drinker a brief insight into hidden paths or secret passages for 10 seconds. This effect is instantaneous and cannot be resisted with a saving throw. The hidden path revealed must be within line of sight and no more than 50 feet away."
      },
      {
        "title": "Causes Hallucinations",
        "rules": "The drinker experiences random alterations in their perception for 5 seconds, causing them to see or hear things that are not there. This effect is instantaneous and cannot be resisted with a saving throw. The hallucination can alter the environment, objects, or even the drinker's companions within line of sight."
      }
    ],
    "levelRequirementReason": "This item requires no minimum level as it provides immediate but short-lived effects.",
    "vendorReason": "Rogueport, known for its trade in exotic and magical goods, would naturally stock such an artifact.",
    "shippingDetail": "The Crimson Tongue is shipped via fast courier drones to ensure it reaches its destination unopened and intact.",
    "usage": {
      "activation": "Consumption of the vial",
      "duration": "Instantaneous for each effect, lasting 10 seconds or 5 seconds respectively",
      "endsWhen": "The effect duration expires; the drinker regains normal perception after the hallucination ends",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the unique and potentially dangerous nature of the item, balancing its immediate effects with the risk it poses.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:19:15.658155+00:00",
    "aiReviewedAt": "2026-07-23T17:19:15.658155+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_cursed_keychain": {
    "id": "rogueport_cursed_keychain",
    "name": "Cursed Keychain of Broken Trust",
    "description": "The Cursed Keychain of Broken Trust is a tarnished metal chain, its links twisted into a face that never smiles. This macabre trinket grants the wearer a fleeting aura of honesty, making it seem as if their words are untainted by deceit—until the truth comes to light and the keychain emits a low-frequency hum. When near a truthful person, the keychain feels heavy with distrust, yet in the hands of a liar, it becomes a subtle distraction, drawing unwanted attention for a brief moment.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔐",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Deceptive Aura",
      "Truth Discerning Hum"
    ],
    "vendor": "rogueport",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Deceptive Aura",
        "rules": "When the wearer uses this keychain in an interrogation or similar situation, they have advantage on Charisma (Deception) checks against a single target. The effect lasts for one turn and ends when the target realizes they’ve been deceived."
      },
      {
        "title": "Truth Discerning Hum",
        "rules": "If used while the wearer is lying, the keychain emits a low-frequency hum that can be heard by anyone within 5 feet, drawing their attention. The distraction lasts for 1 round and ends when the keychain is no longer in use."
      }
    ],
    "levelRequirementReason": "Requires at least 6th level to wield this cursed artifact effectively without exposing oneself to immediate suspicion.",
    "vendorReason": "Rogueport, known for its shady dealings, naturally sells this item as part of their eclectic array of dubious wares.",
    "shippingDetail": "Delivered with a spectral messenger that ensures swift and discreet delivery.",
    "usage": {
      "activation": "Action or Reaction (Must be lying)",
      "duration": "One turn",
      "endsWhen": "Target realizes they've been deceived, or when the keychain is no longer in use",
      "charges": "Unlimited"
    },
    "priceReason": "The Cursed Keychain of Broken Trust is priced at 1000 XP for its unique and balanced deceptive properties.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-23T17:19:22.240909+00:00",
    "aiReviewedAt": "2026-07-23T17:19:22.240909+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_cursed_tongue": {
    "id": "rogueport_cursed_tongue",
    "name": "Cursed Tongue of the Silent Gambler",
    "description": "The Cursed Tongue of the Silent Gambler is a silver-tipped appendage that whispers in riddles and lies, crafted from a gambler's tongue lost to misfortune. When worn, it forces those within earshot to reveal hidden truths they thought safely locked away, causing them to stumble over their own secrets for 10 seconds. Its bearer also gains an insidious edge, granting +10% chance to succeed in stealth checks by subtly undermining others' perceptions.",
    "price": 1000,
    "icon": "🧪",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Reveal Secrets",
      "Stealth Boost"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shady Courier Service",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Reveal Secrets",
        "rules": "The user can activate the item as a bonus action, targeting one creature within 30 feet. The target must succeed on a DC 15 Wisdom saving throw or reveal a secret they were sworn to keep for 10 seconds. This effect has a cooldown of 1 minute."
      },
      {
        "title": "Stealth Boost",
        "rules": "The wearer gains a +10 bonus to Dexterity (Stealth) checks, which lasts until the end of their next short or long rest. This effect does not stack with other bonuses."
      }
    ],
    "levelRequirementReason": "This item's power requires a seasoned rogue who can handle its unpredictable effects without succumbing to its malevolent whispers.",
    "vendorReason": "Rogueport is known for its shady dealings and sells items that blur the line between useful and dangerous, making this cursed tongue an ideal addition to their wares.",
    "shippingDetail": "The Cursed Tongue of the Silent Gambler requires special handling by Shady Courier Service due to its volatile nature. Delivery can take up to a week with potential delays.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "10 seconds",
      "endsWhen": "The target successfully saves or after 10 seconds, whichever comes first",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the item's cursed nature and its ability to manipulate truth-telling, balancing it with other rogue-focused gear.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T17:19:45.624013+00:00",
    "aiReviewedAt": "2026-07-23T17:19:45.624013+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_dagger_of_silence": {
    "id": "rogueport_dagger_of_silence",
    "name": "Dagger of the Silent Accord",
    "description": "The Dagger of the Silent Accord is a deadly, forged blade that whispers secrets in the hands of its master. Crafted from purloined steel and enchanted with ancient curses, this dagger ensures silence in every strike. Its silent nature makes it perfect for assassins who seek to eliminate threats without leaving any trace. When drawn, it emits no sound and strikes true, dealing +15% extra damage to foes with high stealth or noise resistance. The wielder's own evasion is bolstered by the dagger's curse, granting a +10% chance to dodge attacks from enemies in stealth.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Silent Strike",
      "Curse Aura"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Silent Strike",
        "rules": "When the wielder makes an attack with this dagger, no sound is produced. The attack deals +15% extra damage to enemies with high stealth or noise resistance. This effect lasts until the end of the wielder's next turn."
      },
      {
        "title": "Curse Aura",
        "rules": "The dagger grants the wielder a +10% chance to dodge attacks from enemies in stealth. This bonus can be used once per long rest and is lost if the wielder sheathes or discards the dagger."
      }
    ],
    "levelRequirementReason": "This dagger requires a minimum level of 7 due to its complex enchantments and the precision needed for silent strikes.",
    "vendorReason": "Rogueport is well-known for its extensive network of underground blacksmiths who can craft such specialized weapons.",
    "shippingDetail": "Delivered via Pipe Express, this dagger ensures swift and discreet transport to the buyer.",
    "usage": {
      "activation": "Instantaneous when drawn",
      "duration": "Until end of next turn",
      "endsWhen": "Sheathing or discarding the dagger",
      "charges": "Unlimited"
    },
    "priceReason": "The Dagger of the Silent Accord is priced at 1000 XP, reflecting its rarity and the specialized crafting required.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T17:19:30.443458+00:00",
    "aiReviewedAt": "2026-07-23T17:19:30.443458+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_dagger_of_the_drowned": {
    "id": "rogueport_dagger_of_the_drowned",
    "name": "Dagger of the Drowned",
    "description": "The Dagger of the Drowned hums with a cold, spectral energy, its blade etched with ancient runes that seem to whisper secrets of the deep ocean's depths. Its touch is said to sap vitality, leaving foes weakened and gasping for breath as they stagger under the weight of your strikes. The edge of this cursed weapon speaks in cryptic tongues, offering glimpses into the drowned souls it has claimed.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Bleeding Strike",
      "Slow Target"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Bleeding Strike",
        "rules": "When you hit a target with this dagger, it deals an additional 1d6 necrotic damage and the target must make a DC 13 Constitution saving throw or become bleeding. On each subsequent turn, they take another 1d6 necrotic damage from the bleed effect."
      },
      {
        "title": "Slow Target",
        "rules": "For 3 seconds after you hit with this dagger, the target’s movement speed is reduced by 10 feet and it has disadvantage on Dexterity (Acrobatics) checks and saving throws made to maintain balance or avoid falling. This effect ends if the target moves more than 5 feet."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to wield effectively, given its cursed nature.",
    "vendorReason": "Rogueport is known for dealing with dark artifacts and cursed items, this dagger fits right into their inventory of forbidden goods.",
    "shippingDetail": "Ships within a week via Rakasha Spirit Walk, with an added warning to the recipient about the item's malevolent nature.",
    "usage": {
      "activation": "On hit as part of the attack action",
      "duration": "Instantaneous effect",
      "endsWhen": "The target moves more than 5 feet or is no longer within reach",
      "charges": "Unlimited, but only one effect can activate per strike"
    },
    "priceReason": "Balanced price for a rare cursed item with two distinct effects and limited utility.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T17:20:16.207427+00:00",
    "aiReviewedAt": "2026-07-23T17:20:16.207427+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_dead_man_s_wallet": {
    "id": "rogueport_dead_man_s_wallet",
    "name": "Dead Man’s Wallet",
    "description": "The Dead Man’s Wallet is a tattered leather pouch said to have been last touched by a notorious smuggler. Its worn surface still bears the faint scent of saltwater and spices, relics from its travels across treacherous seas. Wearing it grants you a +2 bonus on Stealth checks, and it has a 50% chance to prevent you from being arrested during a bust if you are caught in a raid.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Stealth Bonus",
      "Arrest Prevention"
    ],
    "vendor": "rogueport",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth Bonus",
        "rules": "You gain a +2 bonus on Stealth checks. This effect is active as long as you are wearing the wallet."
      },
      {
        "title": "50% Arrest Prevention",
        "rules": "If you are caught during a bust, you have a 50% chance to avoid arrest. This effect triggers once per day and has no save or DC requirement."
      }
    ],
    "levelRequirementReason": "This item is suitable for low-level characters who need the extra edge in their early adventures.",
    "vendorReason": "Rogueport is known for its connections with smugglers and criminals, making it a likely place to find items such as the Dead Man’s Wallet.",
    "shippingDetail": "Delivered by Pipe Express; may arrive with minor damage from its travels through the city's underground tunnels.",
    "usage": {
      "activation": "Passive",
      "duration": "Instantaneous (50% arrest prevention) or until removed (Stealth bonus)",
      "endsWhen": "Effect ends when you remove the wallet, and it is only usable once per day for the arrest prevention effect.",
      "charges": "Unlimited"
    },
    "priceReason": "The Dead Man’s Wallet provides significant tactical advantages without being overpowered, making its price fair.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-23T17:19:43.034496+00:00",
    "aiReviewedAt": "2026-07-23T17:19:43.034496+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_dead_soul_iron": {
    "id": "rogueport_dead_soul_iron",
    "name": "Dead Soul Iron Armor",
    "description": "Dead Soul Iron Armor is a cursed suit of forged steel, its surface etched with runes that whisper of rebellion. The armor channels the last breath of fallen rebels into devastating attacks, causing your strikes to deal an additional +50% damage. It also drains your health by 20%, channeling this energy into extra damage, but at the cost of reduced defense by -20%. A relic of a lost uprising, it is said that only the most resilient souls can wear such armor without succumbing to its malice.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗡",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "+50% Damage Output",
      "Drains Health for Extra Damage"
    ],
    "vendor": "rogueport",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Extra Damage",
        "rules": "When you hit a target with an attack, Dead Soul Iron Armor increases your damage by +50%. This effect lasts until the start of your next turn. The armor also drains your health equal to 20% of your maximum HP, which is converted into extra damage on your next successful attack."
      },
      {
        "title": "Reduced Defense",
        "rules": "While wearing Dead Soul Iron Armor, you have a -20 penalty to AC until the start of your next turn. This penalty does not stack with other sources of reduced defense."
      }
    ],
    "levelRequirementReason": "The armor's dark magic and cursed nature require a level 7 character to resist its malice.",
    "vendorReason": "Rogueport, known for dealing in relics of rebellion, has acquired this cursed piece from a long-lost cache of a fallen uprising.",
    "shippingDetail": "The armor is shipped via Void Drifters, ensuring it arrives with its dark magic intact and potent.",
    "usage": {
      "activation": "Instantaneous when put on; ends at the start of your next turn or when you are no longer wearing it.",
      "duration": "Until the start of your next turn",
      "endsWhen": "The start of your next turn, removal from armor, or death of wearer.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as it requires a level 7 character and provides potent offensive benefits at the cost of defensive capabilities.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T17:19:58.581572+00:00",
    "aiReviewedAt": "2026-07-23T17:19:58.581572+00:00",
    "aiReviewVersion": 1
  },
  "rogueport_deadman_s_hollow": {
    "id": "rogueport_deadman_s_hollow",
    "name": "Deadman’s Hollow",
    "description": "Deadman’s Hollow is a cursed artifact, an ornate brass pendant etched with runes that shimmer faintly in the dark. When activated, it opens a shimmering rift to the afterlife, allowing brief contact with restless spirits. Use it to summon whispers from the dead or extract forgotten memories, but be wary—using it improperly can unleash malevolent entities and deal 1d4 psychic damage. This relic is a Rogueport vendor’s most coveted item, sold by the rakasha who once wielded it in her dark arts.",
    "price": 1000,
    "icon": "🕯",
    "stock": 0,
    "rarity": "epic",
    "effects": [
      "Opens a rift to the afterlife (1 round)",
      "Extracts one memory from a spirit"
    ],
    "vendor": "rogueport",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Rift of the Dead",
        "rules": "Activates as an action, opens a rift that lasts for 1 round. The user can communicate with spirits through this rift and attempt to extract memories or locate lost items buried in the earth."
      },
      {
        "title": "Memory Extraction",
        "rules": "Requires the user to focus on a specific memory of a spirit. The DM rolls a DC 15 Intelligence (Arcana) check; if successful, one relevant memory is revealed."
      }
    ],
    "levelRequirementReason": "This relic requires a minimum level due to its dangerous nature and the risk of summoning spirits.",
    "vendorReason": "Rogueport’s secret deals with rakasha make this cursed artifact available, but only to those who can handle its risks.",
    "shippingDetail": "Ships through the Rakasha Spirit Walk; a courier delivers it within 3 days of purchase.",
    "usage": {
      "activation": "Activates as an action, opens for 1 round.",
      "duration": "1 round",
      "endsWhen": "The rift closes or the user ends their turn.",
      "charges": "Unlimited; recharges after a long rest."
    },
    "priceReason": "This relic is balanced at 1000 XP, reflecting its cursed nature and powerful utility in retrieving lost memories and items.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T17:20:15.906877+00:00",
    "aiReviewedAt": "2026-07-23T17:20:15.906877+00:00",
    "aiReviewVersion": 1
  }
};
