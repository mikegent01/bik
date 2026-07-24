// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_058 = {
  "night_shadow_cloak": {
    "id": "night_shadow_cloak",
    "name": "Cloak of Midnight Dealings",
    "description": "The Cloak of Midnight Dealings is a shadowy garment woven from the threads of forgotten night. It whispers with the wind and moves like a ghost, granting you advantage on Dexterity (Stealth) checks at night. However, during the day or in bright light, it casts an eerie glow that imposes disadvantage on your Stealth attempts. Wario, ever cautious, ensures its scent is faintly reminiscent of garlic to ward off unwanted attention.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧥",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Advantage on Stealth",
      "Disadvantage under Bright Light"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Swift Courier Service",
    "levelRequirement": 1,
    "warning": "Wario claims it's 'legally acquired'. Don't ask questions.",
    "effectDetails": [
      {
        "title": "Nighttime Advantage",
        "rules": "When you use the cloak for stealth activities at night, it grants you advantage on Dexterity (Stealth) checks. This effect is instantaneous and does not require any action."
      },
      {
        "title": "Daytime Disadvantage",
        "rules": "During the day or when in bright light, the cloak emits a faint glow that imposes disadvantage on your Stealth checks. This effect persists as long as you are under such conditions."
      }
    ],
    "levelRequirementReason": "This cloak is suitable for adventurers of all levels who might need to navigate dark alleys and hidden passages.",
    "vendorReason": "Wario personally ensures the cloak's quality, having acquired it from a reputable source.",
    "shippingDetail": "Delivered within three days with expedited service available for an additional fee.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous and ongoing while conditions persist.",
      "endsWhen": "The effect ends when you enter bright light or at the start of your next turn if you are in a place without dark lighting.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Considering its unique and balanced utility, this cloak is priced to reflect its moderate advantage bonus.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T21:50:15.530852+00:00",
    "aiReviewedAt": "2026-07-23T21:50:15.530852+00:00",
    "aiReviewVersion": 1
  },
  "night_black_market_map": {
    "id": "night_black_market_map",
    "name": "Black Market Contact List",
    "description": "The Black Market Contact List is a crumpled, weathered paper filled with meticulously written notes and coordinates of secretive 'alternative shopping venues' across the kingdom. When unfolded at night, it reveals three hidden vendor locations that are otherwise invisible to all but those in the know. The ink used is sensitive to light; if read under daylight, the list self-destructs, leaving only a faint memory of its former existence.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🗺️",
    "stock": 3,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Reveals Hidden Vendors",
      "Nighttime Discount"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier of Shadows",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Vendors",
        "rules": "When unfolded at night and within 30 feet, the user can reveal three hidden vendor locations that are otherwise invisible. This effect lasts until the end of the next long rest."
      },
      {
        "title": "Nighttime Discount",
        "rules": "For one week after unfolding, the user gains a +2 bonus to the effective price when purchasing goods from underground merchants. The ink is sensitive; if read in daylight, this effect and the list self-destruct immediately."
      }
    ],
    "levelRequirementReason": "The list's complex yet simple nature requires only basic understanding of its mechanics.",
    "vendorReason": "Wario Direct specializes in exotic and rare goods, including those from the underground market.",
    "shippingDetail": "Delivered under cover of darkness to ensure secrecy.",
    "usage": {
      "activation": "Unfolding the list at night within 30 feet.",
      "duration": "Until the end of the next long rest.",
      "endsWhen": "If read in daylight, it self-destructs immediately.",
      "charges": "Unlimited; each use is a one-time effect."
    },
    "priceReason": "Balanced at 1000 XP to reflect the list's utility and limited duration effects without overpricing.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T21:51:07.369981+00:00",
    "aiReviewedAt": "2026-07-23T21:51:07.369981+00:00",
    "aiReviewVersion": 1
  },
  "night_cursed_coin": {
    "id": "night_cursed_coin",
    "name": "Wario's 'Lucky' Coin",
    "description": "Wario's 'Lucky' Coin appears as a gleaming gold coin, seemingly crafted by forges lost to time. Its origins are shrouded in mystery, and its surface bears intricate patterns that whisper tales of Wario’s mischievous schemes. This coin is no mere trinket; it can force any coin flip to the side Wario wants, ensuring his whims always align with fortune. The coin also grants a daily windfall, allowing one to gain 1d100 gold from ‘mysterious sources’—a testament to its cursed yet fateful nature.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🪙",
    "stock": 1,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Force Coin Flip",
      "Mystical Gold Gain"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Chompers Express",
    "levelRequirement": 8,
    "warning": "Previous owner disappeared. Unrelated, probably.",
    "effectDetails": [
      {
        "title": "Force Coin Flip",
        "rules": "As a bonus action, the wielder can force any coin flip to their preferred result. This effect is usable once per day and has no save DC or range requirements."
      },
      {
        "title": "Mystical Gold Gain",
        "rules": "At midnight each night, the wielder gains 1d100 gold from ‘mysterious sources’. This effect occurs automatically and requires no action. The source of this gain is considered a one-time event that cannot be repeated."
      }
    ],
    "levelRequirementReason": "Requires at least 8th level to wield, ensuring the coin’s power aligns with the character's capacity for mischievous and strategic thinking.",
    "vendorReason": "Wario Direct is known for its unique and questionable inventory, making it a fitting vendor for such a coin.",
    "shippingDetail": "Delivered via Courier Chompers Express; arrives the next night if within Wario’s territory, otherwise, delivery time varies.",
    "usage": {
      "activation": "Bonus action to force a coin flip.",
      "duration": "Instantaneous.",
      "endsWhen": "Daily use limit reached for the ‘Force Coin Flip’ effect or after midnight for the daily gold gain.",
      "charges": "Unlimited uses per day, but only once at midnight."
    },
    "priceReason": "The coin's power and rarity justify its price of 1000 XP, reflecting both its cursed nature and the unique value it brings to players of all backgrounds.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-23T21:50:29.416968+00:00",
    "aiReviewedAt": "2026-07-23T21:50:29.416968+00:00",
    "aiReviewVersion": 1
  },
  "night_stolen_goods_bundle": {
    "id": "night_stolen_goods_bundle",
    "name": "Mystery Crate (No Questions Asked)",
    "description": "This intricately crafted wooden crate, branded with 'DEFINITELY NOT STOLEN' in Wario's unmistakable scrawl, conceals a trove of mysterious and potentially valuable items. When opened, it reveals one to four random objects, each worth between 2000 and 10,000 XP, depending on the item's quality and utility. However, buyers beware: there is a 50% chance that the crate contains something genuinely useful, but also a 10% risk that the original owner will return seeking their property, complicating any attempt to sell or use the contents.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📦",
    "stock": 5,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Random Rewards",
      "Risky Ownership"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Pooch",
    "levelRequirement": 1,
    "warning": "No refunds. No receipts. No witnesses.",
    "effectDetails": [
      {
        "title": "Random Rewards",
        "rules": "When opened, this crate yields one to four items with XP values ranging from 2000 to 10,000. The exact value and utility of each item are determined by the DM."
      },
      {
        "title": "Risky Ownership",
        "rules": "There is a 50% chance that an item contained within will be genuinely useful, but also a 10% risk that the original owner will seek retribution for its theft. The owner's reaction to finding their property depends on DM discretion."
      }
    ],
    "levelRequirementReason": "This crate is designed for adventurers of all levels who are willing to take risks and face unexpected challenges.",
    "vendorReason": "Wario offers this crate as a way to introduce new players to the thrill of mystery and discovery, knowing full well that some crates hold more than just cheap knockoffs.",
    "shippingDetail": "Delivered via the notorious Courier Pooch within one week. No returns or refunds due to its unpredictable nature.",
    "usage": {
      "activation": "Instantaneous action upon opening the crate.",
      "duration": "One-time use; once opened, it is discarded and cannot be reused.",
      "endsWhen": "The crate is opened or destroyed by external force.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the balance between the risk of obtaining valuable items and the potential for unwanted encounters with the original owner.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T21:50:43.773882+00:00",
    "aiReviewedAt": "2026-07-23T21:50:43.773882+00:00",
    "aiReviewVersion": 1
  },
  "night_waluigi_number": {
    "id": "night_waluigi_number",
    "name": "Waluigi's Private Number",
    "description": "Waluigi's Private Number is a scrunched-up napkin, its corners frayed and ink smudged from Wario's hurried scribbling. This relic of criminal partnerships promises 'assistance' from the notorious financier, yet results are as unpredictable as a roulette wheel—ranging from 'miraculous success' to 'utter disaster.' The phone number, marked with an unmistakable 'W' logo, is said to be the key to unlocking Waluigi's hidden vaults and schemes.",
    "category": "services",
    "price": 1000,
    "icon": "📱",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Weekly Call for Assistance",
      "One Task from Waluigi"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Pigeon Express",
    "levelRequirement": 1,
    "warning": "Waluigi may or may not actually answer. No guarantees.",
    "effectDetails": [
      {
        "title": "Weekly Call for Assistance",
        "rules": "Activates once per week. The user may call Waluigi to request 'assistance,' which could range from strategic advice to direct intervention. The task or assistance provided is subject to Waluigi's whims and interpretations, with results varying greatly. This effect ends after a single use."
      },
      {
        "title": "One Task from Waluigi",
        "rules": "Upon activation, the user receives one task chosen by Waluigi. Tasks may be beneficial or detrimental, depending on their interpretation of 'help.' The task must be completed within 7 days; failure to do so results in a new task being assigned. This effect has no duration beyond its completion."
      }
    ],
    "levelRequirementReason": "Even the lowest-level adventurer can afford Wario's services, though the outcome is far from guaranteed.",
    "vendorReason": "Wario personally oversees this service to ensure his clients are not left in the dark.",
    "shippingDetail": "Delivered by a courier pigeon within 24 hours of purchase.",
    "usage": {
      "activation": "A weekly phone call or task request.",
      "duration": "Instantaneous, with results varying based on Waluigi's mood and interpretation.",
      "endsWhen": "Upon completion of the task or after one week without usage.",
      "charges": "Unlimited uses per item."
    },
    "priceReason": "The item's legendary rarity and Wario's personal oversight justify its relatively lower price compared to other legendary items.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-23T21:50:47.150174+00:00",
    "aiReviewedAt": "2026-07-23T21:50:47.150174+00:00",
    "aiReviewVersion": 1
  },
  "night_smuggled_star_shard": {
    "id": "night_smuggled_star_shard",
    "name": "Smuggled Star Shard",
    "description": "The Smuggled Star Shard, a chipped fragment of a stolen Power Star, is wrapped in greasy Wario-brand parchment that reeks of illicit deals and midnight scrambles. This relic grants its bearer the power to manipulate fate with a flick of thought—before or after seeing a d20 roll, add +1d4 to that roll. However, overuse can lead to dire consequences; after three consecutive nights of use, the user must succeed on a Wisdom saving throw (DC 13) or risk suffering from cosmic hangovers, leaving them exhausted and questioning their choices for days.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌟",
    "stock": 1,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Fate Manipulation",
      "Cosmic Hangover"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Express Night Courier",
    "levelRequirement": 7,
    "warning": "If any Luma asks, you’ve never seen this thing.",
    "effectDetails": [
      {
        "title": "Fate Manipulation",
        "rules": "Activate as a bonus action before or after seeing the result of a d20 roll. Add +1d4 to that roll. This effect can be used once per night and is recharged under an open night sky (requiring 1 short rest outside at night)."
      },
      {
        "title": "Cosmic Hangover",
        "rules": "If used three nights in a row, the user must succeed on a Wisdom saving throw (DC 13) or suffer 1 level of exhaustion from 'cosmic hangovers'. This effect ends when the exhaustion is removed."
      }
    ],
    "levelRequirementReason": "Requires significant experience to handle the power without mishap.",
    "vendorReason": "Wario's network spans the night, dealing in stolen goods and secrets, including this illicit fragment of cosmic origin.",
    "shippingDetail": "Delivered only at nightfall; must be picked up within 24 hours of delivery or it will return to Wario's hands.",
    "usage": {
      "activation": "Bonus action before or after seeing a d20 roll.",
      "duration": "Instantaneous, recharges under an open sky (1 short rest at night).",
      "endsWhen": "Exhaustion from three consecutive uses is removed.",
      "charges": "Rechargeable with 1 short rest outside at night."
    },
    "priceReason": "Balanced price reflects the item's limited use and the risk of overuse.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:51:15.767509+00:00",
    "aiReviewedAt": "2026-07-23T21:51:15.767509+00:00",
    "aiReviewVersion": 1
  },
  "night_midnight_warp_flute": {
    "id": "night_midnight_warp_flute",
    "name": "Midnight Warp Flute",
    "description": "The Midnight Warp Flute is a weathered wooden instrument with tarnished silver keys. It emits a haunting melody that only those attuned to shadowy places can hear. Its eerie tune allows you and up to three allies to vanish into the night, reappearing in any nearby darkened location within 120 feet. However, if used outside of shadows, it produces nothing but a pitiful squeak, drawing curious Boos in its wake.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎶",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Shadowy Teleport",
      "Boo Companion"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Shadow Courier",
    "levelRequirement": 4,
    "warning": "Wario denies responsibility if you warp into a wall. Or a jail cell.",
    "effectDetails": [
      {
        "title": "Shadowy Teleport",
        "rules": "As an action, you and up to three willing adjacent allies can teleport to a shadowed spot within 120 feet. You must have line of sight to the destination. The effect ends if any participant moves out of a shadow or into direct sunlight."
      },
      {
        "title": "Boo Companion",
        "rules": "There's a 10% chance that a Boo will follow you and your party members until dawn, unless you use it again before sunrise."
      }
    ],
    "levelRequirementReason": "Requires the user to be able to navigate shadows effectively.",
    "vendorReason": "Wario's direct sales ensure that only those who know how to handle such tricky items can obtain it.",
    "shippingDetail": "Ships via the Shadow Courier, ensuring the flute arrives in a shadowy state for optimal use.",
    "usage": {
      "activation": "As an action",
      "duration": "Instantaneous",
      "endsWhen": "Any participant moves out of a shadow or into direct sunlight; reverts to squeaking if used outside shadows.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price considering the unique utility and limited activation conditions.",
    "priceOriginal": 16000,
    "priceReviewedAt": "2026-07-23T21:50:58.551209+00:00",
    "aiReviewedAt": "2026-07-23T21:50:58.551209+00:00",
    "aiReviewVersion": 1
  },
  "night_shy_guy_mask_of_silence": {
    "id": "night_shy_guy_mask_of_silence",
    "name": "Shy Guy Mask of Midnight Silence",
    "description": "The Shy Guy Mask of Midnight Silence is a matte-black, matte-finish mask that conceals more than just your face—it mutes your presence and personality alike. Crafted from the very essence of Mushroom Kingdom folklore, this mask amplifies shadows and whispers in the dead hours of night, granting you stealth and deception prowess. Wear it and you become just another silent shadow; speak a word, and it's as if the night itself betrays you with an involuntary 'HURRRP'—a sound that echoes not only through the air but through your soul for ten minutes.",
    "category": "equipment",
    "price": 1000,
    "icon": "😷",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Silent Shadow",
      "Involuntary Betrayal"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Couriers from the Mushroom Kingdom Express",
    "levelRequirement": 3,
    "warning": "Do not wear to romantic dinners. Or job interviews.",
    "effectDetails": [
      {
        "title": "Silent Shadow",
        "rules": "While wearing this mask, you gain advantage on Stealth checks. Additionally, if someone within hearing distance (30 feet) rolls a perception check to notice you, they must succeed on a DC 12 Wisdom saving throw or be unable to pinpoint your exact location due to the mask's mystical properties."
      },
      {
        "title": "Involuntary Betrayal",
        "rules": "If you speak more than one sentence while wearing this mask, it emits an involuntary 'HURRRP' sound. For the next 10 minutes, you have disadvantage on Persuasion checks and cannot use any Charisma-based skills or abilities."
      }
    ],
    "levelRequirementReason": "Suitable for players who have begun to navigate the more complex social and stealth challenges of adventuring.",
    "vendorReason": "Wario Direct is known for its unique, quirky wares that cater to those seeking an edge in both combat and social situations—perfect for this mask's dual-purpose charm.",
    "shippingDetail": "Delivered with a special 'silent' delivery service, ensuring no one overhears your order or arrival.",
    "usage": {
      "activation": "Wearing the mask passively activates its effects until removed or until the duration ends.",
      "duration": "Until removed and for ten minutes after speaking more than one sentence while wearing it.",
      "endsWhen": "The mask's effect ceases when removed, or if you speak more than a single sentence while wearing it.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the mask's unique combination of stealth and social challenges, offering players significant utility without being overpowered.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-23T21:51:18.933402+00:00",
    "aiReviewedAt": "2026-07-23T21:51:18.933402+00:00",
    "aiReviewVersion": 1
  },
  "night_twilight_boo_lantern": {
    "id": "night_twilight_boo_lantern",
    "name": "Twilight Boo Lantern",
    "description": "The Twilight Boo Lantern is a lantern crafted from ethereal wood and adorned with runes that glow only after sunset. Its light, a captured essence of Boo-light, casts a spectral hue over shadows, revealing invisible foes as hazy silhouettes within 30 feet. In the crypts or battlefields it illuminates, you gain advantage on Investigation checks to uncover secrets hidden in darkness. On sunny days, it flickers weakly and draws minor undead creatures, a silent reminder of its nocturnal purpose.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏮",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Boon of Shadows",
      "Secrets Revealed"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Mail Goober",
    "levelRequirement": 2,
    "warning": "Wario: 'If the Boos ask, this is a NIGHTLIGHT, okay?'",
    "effectDetails": [
      {
        "title": "Boon of Shadows",
        "rules": "While lit at night, you gain advantage on Investigation checks in ruins, crypts, or battlefields. This effect lasts until the lantern is extinguished."
      },
      {
        "title": "Secrets Revealed",
        "rules": "When held and activated during nighttime, the Twilight Boo Lantern emits a 30-foot radius of bright ghostly light that reveals invisible creatures as hazy outlines within the area. The light fades to dim after 10 minutes."
      }
    ],
    "levelRequirementReason": "Adept adventurers who can handle twilight's secrets.",
    "vendorReason": "Wario’s direct sales ensure you get the real deal, even if it is a nightlight.",
    "shippingDetail": "Ships within two nights of order placement.",
    "usage": {
      "activation": "Bonus action to light or extinguish",
      "duration": "Until lit at night; dim glow lasts for 10 minutes after activation",
      "endsWhen": "Extinguished by hand, runs out of light after 10 minutes in bright conditions",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price for a rare but useful tool that enhances nocturnal exploration.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-23T21:51:12.646224+00:00",
    "aiReviewedAt": "2026-07-23T21:51:12.646224+00:00",
    "aiReviewVersion": 1
  },
  "night_underground_bank_chip": {
    "id": "night_underground_bank_chip",
    "name": "Underground Bank Access Chip",
    "description": "The Underground Bank Access Chip is a cold, metallic coin with a cryptic scannable glyph etched into its surface. In any major town under cover of night, this chip allows you to remotely access Wario's notorious banker vaults. Deposit or withdraw up to 5000 gold without the hassle of physical transport—though be wary, as the bank is perpetually on fire and prone to random raids. Stored wealth here remains undetectable by mundane means; however, if discovered during a raid, your funds are at Wario's mercy.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💾",
    "stock": 1,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Remote Vault Access",
      "Risky but Untraceable"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Pianta Express",
    "levelRequirement": 5,
    "warning": "Fine print: 'Bank may, at any time, become on fire.'",
    "effectDetails": [
      {
        "title": "Remote Vault Access",
        "rules": "At night in any major town, you can activate this chip to remotely access a hidden Wario-run banker vault. The action is instantaneous and requires no material components. This effect lasts until the end of your next turn or until you are detected by law enforcement. There's a 5% chance each use that 'fees' reduce your stored gold by 1d100."
      },
      {
        "title": "Risky but Untraceable",
        "rules": "Gold stored in this vault is undetectable by normal means, including divination spells. However, if the bank gets raided, your funds are at risk and may be confiscated or lost. This effect has no save DC and can be used once per week."
      }
    ],
    "levelRequirementReason": "Requires experience to navigate the risks associated with dealing with Wario's dubious banking practices.",
    "vendorReason": "Wario is well-known for his questionable business ventures, including this illicit bank service.",
    "shippingDetail": "Shipment requires a special escort; delivery may be delayed due to the ever-present fire hazard.",
    "usage": {
      "activation": "Instant action at night in any major town.",
      "duration": "Until end of your next turn or detection by law enforcement.",
      "endsWhen": "Detection by law enforcement, end of your next turn, or when the weekly limit is reached.",
      "charges": "One use per week"
    },
    "priceReason": "Balanced price considering the risk and limited utility of this item.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-23T21:51:25.415191+00:00",
    "aiReviewedAt": "2026-07-23T21:51:25.415191+00:00",
    "aiReviewVersion": 1
  },
  "night_ghost_mushroom_tea_set": {
    "id": "night_ghost_mushroom_tea_set",
    "name": "Ghost Mushroom Tea Set",
    "description": "The Ghost Mushroom Tea Set consists of delicate porcelain cups and a chipped teapot that emanate an eerie, earthy scent reminiscent of graveyards and chamomile. Crafted from rare ghost mushrooms found only in the twilight realm, this set grants you fleeting communion with the dead. Spend 10 minutes brewing tea under moonlight, and your next target of Speak With Dead gains a +2 bonus to Charisma (Deception) checks, if any are required.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🍵",
    "stock": 3,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Speak With Dead Boost",
      "Spectral Silhouettes"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 3,
    "warning": "Wario: 'If the dead start nagging you, that's not my problem.'",
    "effectDetails": [
      {
        "title": "Speak With Dead Boost",
        "rules": "Activates during night by brewing tea. Drink the tea to cast Speak with Dead without expending a spell slot, and grant +2 bonus to Charisma (Deception) checks for the target if any are required."
      },
      {
        "title": "Spectral Silhouettes",
        "rules": "For 1 hour after drinking the tea, you can see faint silhouettes of nearby spirits. This effect does not provide mechanical bonuses but serves as a roleplaying or DM callout for visual and atmospheric enhancements."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to effectively engage with the supernatural aspects of the set.",
    "vendorReason": "Wario's Direct offers a wide array of unique and slightly questionable wares, making this tea set a perfect addition to their inventory.",
    "shippingDetail": "Pickup only at Wario's Direct shop; no delivery available.",
    "usage": {
      "activation": "Activates by brewing the tea during night time.",
      "duration": "1 hour after drinking the tea.",
      "endsWhen": "Expires upon dawn or if brewed tea is consumed.",
      "charges": "Unlimited, but only one target can be chosen per use."
    },
    "priceReason": "The rarity and supernatural utility of the Ghost Mushroom Tea Set justify its price of 1000 XP.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-23T21:51:29.196444+00:00",
    "aiReviewedAt": "2026-07-23T21:51:29.196444+00:00",
    "aiReviewVersion": 1
  },
  "night_boo_chain_contract": {
    "id": "night_boo_chain_contract",
    "name": "Boo Chain Harassment Contract",
    "description": "The greasy scroll, 'Boo Chain Harassment Contract', promises to hire a squad of mischievous Boos for nocturnal persuasion. When activated at midnight, it targets an NPC, causing them to be plagued by restless Boos each following night until the third. The target suffers from sleepless nights and mental distractions, making Insight and Concentration checks unreliable. Additionally, there's a 10% chance that an exorcist is sent to trace the contract back to you, adding a layer of potential risk.",
    "category": "services",
    "price": 1000,
    "icon": "📜",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Nightly Haunting",
      "Insight & Concentration Disadvantage"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Pooch",
    "levelRequirement": 3,
    "warning": "Strictly 'non-lethal' haunting. Probably.",
    "effectDetails": [
      {
        "title": "Nightly Haunting",
        "rules": "Activate once per week at midnight. Targets one NPC for three nights with minor Boos causing sleepless and distracted nights. The target has disadvantage on Insight and Concentration checks during these nights."
      },
      {
        "title": "10% Exorcist Risk",
        "rules": "There's a 10% chance that an exorcist is sent to trace the contract back to you after it's used."
      }
    ],
    "levelRequirementReason": "Requires at least third level to manage and control the effects of the haunting.",
    "vendorReason": "Wario Direct specializes in unique and potentially controversial services, making this contract a fitting addition.",
    "shippingDetail": "Delivered by Courier Pooch, known for their timely deliveries even during the night.",
    "usage": {
      "activation": "Activate once per week at midnight.",
      "duration": "3 nights of haunting.",
      "endsWhen": "The third night ends the effect.",
      "charges": "One use per scroll."
    },
    "priceReason": "Balanced price reflects the unique and potentially risky nature of the contract, suitable for mid-level adventurers.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T21:51:31.350867+00:00",
    "aiReviewedAt": "2026-07-23T21:51:31.350867+00:00",
    "aiReviewVersion": 1
  },
  "night_royal_ledger_scrap": {
    "id": "night_royal_ledger_scrap",
    "name": "Scrap from the Royal War Ledger",
    "description": "A tattered, ink-splattered page torn from an ancient ledger, its parchment yellowed and brittle. The cryptic codes and hidden names are written in a hand that seems to have been hurried by fear or haste. By night, this scrap speaks with eerie clarity: ask it about the funding of any noble house, faction, or battle during the civil war, and it will whisper secrets only partially legible but always true (DM answers). In daylight, the page's ink glows faintly, giving you advantage in Persuasion or Intimidation against those whose names are scratched out with purple marker. However, reading it by day causes a dull headache that penalizes your Intelligence checks for an hour.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📄",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Night Oracle",
      "Daylight Advantage"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Night Courier Service",
    "levelRequirement": 6,
    "warning": "Several names have been clumsily scratched out with purple marker. Wonder who.",
    "effectDetails": [
      {
        "title": "Night Oracle",
        "rules": "At night, once per long rest, you can ask the scrap one cryptic but truthful question about a noble house, faction, or battle's funding during the civil war. The DM answers in a way that reveals only partial truths and requires interpretation."
      },
      {
        "title": "Daylight Advantage",
        "rules": "By day, if you read this scrap near anyone whose name has been scratched out with purple marker, you gain advantage on Persuasion or Intimidation checks against them. This effect lasts until the end of your next short rest."
      }
    ],
    "levelRequirementReason": "Requires at least 6th level to handle the ledger's cryptic nature and its potential for psychological strain.",
    "vendorReason": "Wario Direct, known for their vast collection of historical curiosities, naturally stocks this artifact from the Royal War Ledger.",
    "shippingDetail": "Delivered by Night Courier in one night at no additional cost if you are a member of the Luminous Club.",
    "usage": {
      "activation": "At night: once per long rest; during the day: read near an NPC with a scratched-out name.",
      "duration": "Instantaneous",
      "endsWhen": "The next short rest or when you use it again.",
      "charges": "Unlimited, but each use requires a short or long rest to recover."
    },
    "priceReason": "The item's rarity and historical significance justify its price of 1000 XP.",
    "priceOriginal": 11000,
    "priceReviewedAt": "2026-07-23T21:51:36.932151+00:00",
    "aiReviewedAt": "2026-07-23T21:51:36.932151+00:00",
    "aiReviewVersion": 1
  },
  "night_koopa_night_watch_badge": {
    "id": "night_koopa_night_watch_badge",
    "name": "Koopa Night Watchman Badge",
    "description": "The Koopa Night Watchman Badge is a blackened security badge worn by Bowser’s old curfew enforcers. Crafted from ancient Koopa metal, it bears the crest of the Mushroom Kingdom on its surface. When you wear this badge at night and are on guard duty, you gain advantage on Perception checks to spot intruders or sneaking creatures. Additionally, you receive a +2 bonus to your Initiative roll as long as you're performing guard duties. However, anyone who lived under Bowser's curfew will recognize the badge and react with suspicion or hostility.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Nightly Guard Duty Advantage",
      "Enhanced Nighttime Initiative"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Toad Post Courier Service",
    "levelRequirement": 1,
    "warning": "Some older Toads will slam their shutters when they see it.",
    "effectDetails": [
      {
        "title": "Nightly Guard Duty Advantage",
        "rules": "While wearing this badge at night and on guard duty, you gain advantage on Perception checks to spot intruders or sneaking creatures. This effect lasts for the duration of your shift (until dawn)."
      },
      {
        "title": "Enhanced Nighttime Initiative",
        "rules": "You receive a +2 bonus to your Initiative roll when you are performing guard duties at night, as long as you are not sleeping or carousing. This bonus is permanent while the badge is worn."
      }
    ],
    "levelRequirementReason": "The badge's design and functionality are simple enough for even a low-level adventurer to use effectively.",
    "vendorReason": "Wario, as a former Watchman himself, still keeps relics of his patrol days in his inventory.",
    "shippingDetail": "Delivered within the night watch hours only; must be picked up by dawn.",
    "usage": {
      "activation": "Passive while wearing the badge at night on guard duty.",
      "duration": "Until dawn or until you stop being a guard.",
      "endsWhen": "Dawn, ceasing to perform guard duties, or removing the badge.",
      "charges": "Unlimited; always ready for use."
    },
    "priceReason": "The badge's historical significance and unique crafting make it a rare find worth its price in XP.",
    "priceOriginal": 13000,
    "priceReviewedAt": "2026-07-23T21:51:42.002645+00:00",
    "aiReviewedAt": "2026-07-23T21:51:42.002645+00:00",
    "aiReviewVersion": 1
  },
  "night_piranha_seed_pouch": {
    "id": "night_piranha_seed_pouch",
    "name": "Midnight Piranha Seed Pouch",
    "description": "The Midnight Piranha Seed Pouch is a tattered cloth pouch containing three mischievous piranha seeds, each labeled 'PLANT AFTER DARK – STAND BACK'. When planted at night (1 action), these seeds sprout into a stealthy trap that lies dormant until the next sunset. On activation, it unleashes a flurry of razor-sharp leaves and snapping teeth on any creature entering its 5-foot radius, forcing them to make a Dexterity saving throw or risk being bitten and restrained by the voracious plant. Once the trap strikes, it withers at dawn, leaving behind an eerie scorched mark that looks suspiciously like a mischievous Wario, a silent reminder of its nocturnal mischief.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌱",
    "stock": 4,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Stealthy Trap",
      "Razor-Sharp Bite"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Quick Delivery Express",
    "levelRequirement": 4,
    "warning": "Do NOT plant inside your own bedroom. Learned that one the hard way.",
    "effectDetails": [
      {
        "title": "Stealthy Trap",
        "rules": "Planting one seed at night (1 action) creates a hidden Piranha Plant trap that lies dormant until the next sunset. When triggered, it unleashes its attack on creatures entering the 5-foot radius, forcing them to make a Dexterity saving throw (DC 13) or be bitten and restrained."
      },
      {
        "title": "Razor-Sharp Bite",
        "rules": "Creatures within the trap's 5-foot area must succeed on a Dexterity saving throw (DC 13) or suffer 2d6 piercing damage and become restrained until they use an action to escape. The trap withers at dawn after its first attack, leaving behind a Wario-shaped scorch mark."
      }
    ],
    "levelRequirementReason": "Requires enough experience to handle the plant's unpredictable nature.",
    "vendorReason": "Wario sells this item knowing it can cause trouble, but he’s also the only one who knows how to deal with it.",
    "shippingDetail": "Ships within the night cycle, delivered by Quick Delivery Express.",
    "usage": {
      "activation": "1 action to plant; trap activates on sunset.",
      "duration": "Instant activation, lasts until dawn after first attack.",
      "endsWhen": "Withers at dawn or destroyed upon creature escape.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price for the risk and unpredictable nature of the trap.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-23T21:52:01.828261+00:00",
    "aiReviewedAt": "2026-07-23T21:52:01.828261+00:00",
    "aiReviewVersion": 1
  },
  "night_roulette_coin_of_fate": {
    "id": "night_roulette_coin_of_fate",
    "name": "Roulette Coin of Midnight Fate",
    "description": "The Roulette Coin of Midnight Fate is a heavy, cursed coin with a W on one side and a skull on the other. It hums ominously in casinos, casting an eerie glow that unnerves those around you. If flipped before a d20 roll, it offers two chances at fortune: landing on W ensures results 9 or below become 10s; landing on skull transforms results of 12 and above into 11s. Beware, for gambling with this coin doubles your winnings but also doubles your losses. Should you manage to flip the coin three nights in a row and land only skulls, it vanishes, leaving all your non-magical gold as 'fees'.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🎲",
    "stock": 1,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Fateful Roll",
      "Doubling Hazard"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 1,
    "warning": "Guaranteed to make your life exciting. Not guaranteed to keep you solvent.",
    "effectDetails": [
      {
        "title": "Fateful Roll",
        "rules": "Before a d20 roll, the user may flip the coin. On W (50%), results of 9 or lower are treated as 10s; on skull (50%), results of 12 or higher are treated as 11s. This effect can be used once per night."
      },
      {
        "title": "Doubling Hazard",
        "rules": "When gambling, this coin doubles your winnings but also doubles any losses. There is no limit to the number of times this effect applies in a session."
      }
    ],
    "levelRequirementReason": "This item's effects are unpredictable and potentially dangerous, suitable for beginners.",
    "vendorReason": "Wario Direct specializes in exotic and cursed items from the twilight zones of various casinos around the world.",
    "shippingDetail": "Pickup only at Wario's Casino Emporium, known for its notorious late-night delivery policies.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect is used or the night ends",
      "charges": "Once per night"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its cursed nature and unpredictable effects that can greatly impact a player's fortune.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-23T21:51:47.482279+00:00",
    "aiReviewedAt": "2026-07-23T21:51:47.482279+00:00",
    "aiReviewVersion": 1
  },
  "night_mirror_of_shady_referrals": {
    "id": "night_mirror_of_shady_referrals",
    "name": "Mirror of Shady Referrals",
    "description": "The Mirror of Shady Referrals is a cracked hand-mirror with an etched surface that gleams like the moonlit streets of a bustling city. Each night, it reveals the face of a different black-market contact, their eyes reflecting the neon signs and alleyways of the underworld. This mirror offers more than just a glimpse; it introduces you to individuals who can help fulfill your requests, though they come with their own agendas. The contact may not always be what they seem, but each encounter grants you a permanent 5% discount on future dealings.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🪞",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Nightly Contact",
      "Discounted Deals"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Pooch",
    "levelRequirement": 3,
    "warning": "Wario: 'These are all my VERY TRUSTWORTHY friends. Heh.'",
    "effectDetails": [
      {
        "title": "Nightly Contact",
        "rules": "Once per night, speak your request into the mirror. The DM introduces a contact who can help fulfill that request but may come with strings attached."
      },
      {
        "title": "Discounted Deals",
        "rules": "Each time you use the mirror to meet a new contact, you gain a permanent 5% discount on any future transactions with them."
      }
    ],
    "levelRequirementReason": "Requires basic knowledge of the underworld and the ability to discern potential allies.",
    "vendorReason": "Wario's network spans across the black market, offering a wide range of contacts through his Mirror.",
    "shippingDetail": "Delivered by the reliable but quirky Courier Pooch; arrives with a complimentary midnight snack.",
    "usage": {
      "activation": "As an action during any night.",
      "duration": "Instantaneous effect.",
      "endsWhen": "The contact or opportunity introduced is utilized, or you use it again on another night.",
      "charges": "Unlimited charges."
    },
    "priceReason": "Balanced price reflects the unique and occasionally dangerous nature of black-market contacts.",
    "priceOriginal": 22000,
    "priceReviewedAt": "2026-07-23T21:51:51.317926+00:00",
    "aiReviewedAt": "2026-07-23T21:51:51.317926+00:00",
    "aiReviewVersion": 1
  },
  "night_bullet_bill_signal_flare": {
    "id": "night_bullet_bill_signal_flare",
    "name": "Bullet Bill Signal Flare",
    "description": "The Bullet Bill Signal Flare is a fearsome black projectile with glowing red eyes painted on its casing. Crafted from meteoric iron and enchanted by Wario's mischievous magic, it crackles with dark energy. Aim it into the night sky to summon a homing Bullet Bill that streaks towards your target, delivering 4d6 force damage in a 10-foot radius (DEX save DC 15 for half). Should you aim at an area rich with coins, there's a 10% chance the Bullet Bill will misinterpret and target the closest source of wealth instead.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎆",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Homing Homing Bullet",
      "Coin Misreading"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Wario Express Delivery",
    "levelRequirement": 7,
    "warning": "DO NOT light indoors. Unless you really hate your ceiling.",
    "effectDetails": [
      {
        "title": "Homing Homing Bullet",
        "rules": "Activate as a bonus action. The Bullet Bill streaks towards a point or creature within 300 feet, dealing 4d6 force damage in a 10-foot radius (DEX save DC 15 for half). This effect lasts until the start of your next turn."
      },
      {
        "title": "Coin Misreading",
        "rules": "There is a 10% chance that if you target an area rich with coins, the Bullet Bill will misinterpret and instead aim at the closest source of wealth within line of sight. The DM selects this 'rich' target."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Stealth to effectively use the homing feature.",
    "vendorReason": "Wario's direct sales channel ensures you get the genuine, mischievous goods straight from the source.",
    "shippingDetail": "Delivered by Wario himself or his trusted delivery team. Ensure your door is unlocked for the best service.",
    "usage": {
      "activation": "Bonus action to summon a Bullet Bill and activate its homing feature.",
      "duration": "Instantaneous activation, lasts until start of next turn.",
      "endsWhen": "The next time you take a full action or rest.",
      "charges": "One use per day"
    },
    "priceReason": "Balanced at the cost of 1000 XP, reflecting its rare crafting and mischievous magic.",
    "priceOriginal": 17000,
    "priceReviewedAt": "2026-07-23T21:51:58.489408+00:00",
    "aiReviewedAt": "2026-07-23T21:51:58.489408+00:00",
    "aiReviewVersion": 1
  },
  "night_spiked_chomp_collar": {
    "id": "night_spiked_chomp_collar",
    "name": "Night-Run Spiked Chomp Collar",
    "description": "The Night-Run Spiked Chomp Collar is a dark leather collar studded with sharp spikes, imbued with ancient magic. It whispers of midnight escapades and forbidden knowledge. At night, when you wear it as a belt or torc, your unarmed strikes become potent tools for intimidation, dealing 1d6 piercing damage instead of normal. The collar also subtly guides you to forgotten paths, tugging gently towards locked gates or vaults, as if it knows the old ways.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦴",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Unarmed Strike",
      "Nightly Guidance"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Pigeon Express",
    "levelRequirement": 6,
    "warning": "Collar may attract actual Chain Chomps looking for their old owner.",
    "effectDetails": [
      {
        "title": "Unarmed Strike",
        "rules": "While wearing this collar at night, your unarmed strikes deal 1d6 piercing damage instead of normal. This effect can be used once per turn."
      },
      {
        "title": "Nightly Guidance",
        "rules": "At night, you gain advantage on Intimidation checks against beasts and simple monsters. Additionally, the collar subtly guides you towards locked gates or vaults, pulling gently in those directions. This effect ends when the collar is removed or if you are outside at night."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Stealth to effectively use the collar's guidance feature.",
    "vendorReason": "Wario Direct specializes in unique, questionable items that adventurers might find useful or just too dangerous not to buy.",
    "shippingDetail": "Delivered by a pigeon courier within the hour during night-time hours only.",
    "usage": {
      "activation": "Passive effect at night when worn as a belt or torc.",
      "duration": "Lasts until dawn or collar is removed.",
      "endsWhen": "Collar is removed or you are outside at night.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price for a rare item that offers both combat and exploration benefits, but requires specific conditions to be effective.",
    "priceOriginal": 16000,
    "priceReviewedAt": "2026-07-23T21:52:06.844253+00:00",
    "aiReviewedAt": "2026-07-23T21:52:06.844253+00:00",
    "aiReviewVersion": 1
  },
  "night_starless_cloak_lining": {
    "id": "night_starless_cloak_lining",
    "name": "Starless Cloak Lining",
    "description": "The Starless Cloak Lining is a detachable fabric insert that conceals your form in starlight, crafted from an ancient weave that absorbs celestial luminescence. Sewn into any cloak or coat over ten minutes, it grants you advantage on Stealth checks in dim light or darkness at night. Yet, during the day, it curls up and hides its magic, rendering inactive until dusk. Exposed to sunlight for an hour will burn out this enchantment, leaving the lining unusable until the following sunset.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧥",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Stealth Advantage",
      "Sunlight Vulnerability"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Puffa",
    "levelRequirement": 1,
    "warning": "Wario: 'Hides you from the stars, AND from witnesses. Two-for-one!'",
    "effectDetails": [
      {
        "title": "Stealth Advantage",
        "rules": "You gain advantage on Stealth checks in dim light or darkness for as long as this lining is sewn into your cloak or coat. This effect ends when the lining becomes inactive due to sunlight exposure."
      },
      {
        "title": "Sunlight Vulnerability",
        "rules": "Exposure to bright sunlight for one hour will deactivate the lining, rendering it unusable until sunset on the same day. During this time, you cannot benefit from any effects that rely on starlight, such as divinations or certain blessings (DM discretion applies)."
      }
    ],
    "levelRequirementReason": "This item's enchantment is straightforward and beneficial for all levels of adventurers.",
    "vendorReason": "Wario Direct specializes in unique and whimsical items, including this star-themed accessory.",
    "shippingDetail": "Delivered by the trusted Courier Puffa with a special delivery note from Wario himself.",
    "usage": {
      "activation": "Sewn into any cloak or coat over ten minutes.",
      "duration": "Active at night until exposed to sunlight for an hour, when it becomes inactive.",
      "endsWhen": "Exposure to bright sunlight for one hour; reactivates automatically the next sunset.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This item offers a balanced trade-off between utility and cost, providing stealth benefits without requiring high-level capabilities.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:52:11.357341+00:00",
    "aiReviewedAt": "2026-07-23T21:52:11.357341+00:00",
    "aiReviewVersion": 1
  },
  "night_ink_of_anonymous_graffiti": {
    "id": "night_ink_of_anonymous_graffiti",
    "name": "Ink of Anonymous Graffiti",
    "description": "A small vial containing a mysterious, deep purple ink that glows only under the pale light of the moon or in areas of magical darkness. It is said to be crafted from the remnants of forgotten graffiti left by an ancient artist known as 'The Phantom.' When used, the ink allows you to create tags that are invisible to all but those who possess a similar vial and are attuned to its magic. The ink's glow intensifies when near your own tag, granting a temporary boost to your Charisma checks.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🖋️",
    "stock": 4,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Moonlit Messages",
      "Charismatic Boost"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Pigeon Express",
    "levelRequirement": 1,
    "warning": "Not liable for slogans that start revolutions… unless Wario gets a cut.",
    "effectDetails": [
      {
        "title": "Moonlit Messages",
        "rules": "Activates as an action. When you write something with the ink, it remains invisible until viewed in moonlight or magical darkness. Law enforcement cannot track this ink's magic, but Wario can if there’s a debt owed."
      },
      {
        "title": "Charismatic Boost",
        "rules": "While standing near one of your own tags visible under moonlight, you gain +2 to any single Charisma check once per short or long rest. This effect only applies when within 30 feet of the tag and cannot be used more than twice per day."
      }
    ],
    "levelRequirementReason": "The ink's magic is subtle enough that even a novice can harness it, but its utility requires basic understanding of Charisma checks.",
    "vendorReason": "Wario sells the Ink of Anonymous Graffiti to collect any 'debts' owed by those who use it for mischief.",
    "shippingDetail": "Delivery is swift, but there’s a chance Wario will intercept the package if you owe him money.",
    "usage": {
      "activation": "Action to write with ink or check Charisma.",
      "duration": "Instantaneous for writing; one use per day for Charisma boost.",
      "endsWhen": "Used up for writing, ends after a short or long rest for Charisma boost.",
      "charges": "Unlimited uses when not actively writing."
    },
    "priceReason": "The ink's rarity and magical properties justify its price without being overpowered.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-23T21:52:38.592935+00:00",
    "aiReviewedAt": "2026-07-23T21:52:38.592935+00:00",
    "aiReviewVersion": 1
  },
  "night_smuggler_mushroom_roadmap": {
    "id": "night_smuggler_mushroom_roadmap",
    "name": "Smuggler’s Mushroom Roadmap",
    "description": "The Smuggler’s Mushroom Roadmap is a weathered, hand-drawn map made of parchment. Tiny toadstools are inked into the routes through the war-ravaged Kingdom, marking paths that have been tested by countless travelers. It whispers of hidden caches and smugglers' safehouses, each use bringing you closer to untold secrets. Wario Direct sells it as a relic of the old world, though the map occasionally shows mildly cursed ruins marked with 'scenic' in his signature font.",
    "category": "services",
    "price": 1000,
    "icon": "🧭",
    "stock": 3,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Swift Travel",
      "Random Encounters Avoidance"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Puffa",
    "levelRequirement": 1,
    "warning": "Routes may occasionally go through 'mildly cursed' ruins. Wario calls that 'scenic'.",
    "effectDetails": [
      {
        "title": "Swift Travel",
        "rules": "While traveling at night, overland travel speed increases by 25% along mapped regions. This effect is passive and does not require an action."
      },
      {
        "title": "Random Encounters Avoidance",
        "rules": "Once per long rest, you may avoid a random encounter by taking a side path (DM adjusts the narration). The map's hidden caches or safehouses provide new plot hooks. This effect can be used once and recharges after a long rest."
      }
    ],
    "levelRequirementReason": "Beginners need this for their first night-time travels.",
    "vendorReason": "Wario Direct specializes in relics of the old world, including maps and guides.",
    "shippingDetail": "Delivered within a week by trusted Courier Puffa.",
    "usage": {
      "activation": "Passive for night-time travel; once per long rest to avoid an encounter.",
      "duration": "Instantaneous or until the next dawn, whichever comes first.",
      "endsWhen": "The map's effects end upon exhaustion of charges or recharging after a long rest.",
      "charges": "1 charge per use"
    },
    "priceReason": "Balanced at this price considering its utility and lore, suitable for first-level adventurers.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-23T21:52:20.243167+00:00",
    "aiReviewedAt": "2026-07-23T21:52:20.243167+00:00",
    "aiReviewVersion": 1
  },
  "night_phantom_kart_voucher": {
    "id": "night_phantom_kart_voucher",
    "name": "Phantom Kart Escape Voucher",
    "description": "The Phantom Kart Escape Voucher is a musty, ticket-like artifact imbued with spectral energy. When snapped at night, it conjures a ghostly kart that zips away in an eerie blur, leaving behind a trail of ectoplasmic smoke. The kart can transport up to four Medium characters or eight Small creatures instantly out of harm’s way. However, there's a chance the phantom vehicle may veer off course, leading its riders through treacherous Boo-infested roads for a brief, spine-chilling encounter.",
    "category": "services",
    "price": 1000,
    "icon": "🎟️",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Spectral Escape",
      "Boo-infested Shortcut"
    ],
    "vendor": "wario_direct",
    "shippedBy": "No delivery; pickup only at the Wario Direct store.",
    "levelRequirement": 3,
    "warning": "Seatbelts are 'optional'. Helmets not included.",
    "effectDetails": [
      {
        "title": "Spectral Escape",
        "rules": "Activation: Onset action. Target: Up to four Medium creatures or eight Small creatures within 30 feet. Duration: Instantaneous. The kart transports the targeted party members out of immediate danger, countering most non-flying pursuers for one scene with DM adjudication. After use, there is a 20% chance that the kart takes an unexpected 'shortcut' through Boo-infested roads."
      },
      {
        "title": "Boo-infested Shortcut",
        "rules": "When the kart takes a shortcut, it lasts for 1 minute and imposes disadvantage on all non-magical attack rolls. Any creature entering this area must make a DC 14 Wisdom saving throw or be frightened until the end of their next turn."
      }
    ],
    "levelRequirementReason": "Requires basic combat and survival skills to safely use the kart.",
    "vendorReason": "Wario Direct specializes in unique, often questionable, services that can save you from the most dire of situations.",
    "shippingDetail": "Pickup is required within the shop’s operating hours. No deliveries made after midnight.",
    "usage": {
      "activation": "Onset action to snap and activate the voucher.",
      "duration": "Instantaneous for the escape, but the shortcut lasts one minute.",
      "endsWhen": "The kart reaches its destination or encounters Boo-infested roads.",
      "charges": "One use per voucher."
    },
    "priceReason": "Balanced at 1000 XP to reflect a rare, powerful service that can save multiple lives instantly.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:52:26.996989+00:00",
    "aiReviewedAt": "2026-07-23T21:52:26.996989+00:00",
    "aiReviewVersion": 1
  },
  "night_midnight_shell_mail": {
    "id": "night_midnight_shell_mail",
    "name": "Midnight Shell Mail",
    "description": "The Midnight Shell Mail, crafted from darkened Koopa armor lacquered to blend seamlessly into night's embrace, offers a sleek silhouette that whispers of stealth. Wear it under the moonlight in urban or rocky terrain and gain advantage on Stealth checks; its shell camouflages you perfectly. However, expose yourself to bright light, and the heat-absorbing shell bakes you, reducing your movement by 5 feet as if baked by the sun’s harsh rays.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐢",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Stealth Advantage at Night",
      "Reduced Movement in Bright Light"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Quickstep Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Stealth Advantage at Night",
        "rules": "While wearing the Midnight Shell Mail, you have advantage on Dexterity (Stealth) checks in urban or rocky terrain during nighttime. This effect is active as long as you are not exposed to bright light."
      },
      {
        "title": "Reduced Movement in Bright Light",
        "rules": "When worn in areas of bright light, the heat-absorbing shell reduces your movement speed by 5 feet for the duration of your time spent in such conditions. This effect is triggered automatically when you enter an area of bright light and ends when you exit or remove the armor."
      }
    ],
    "levelRequirementReason": "The Midnight Shell Mail requires a minimum level to ensure that its stealth and environmental adaptation benefits are balanced with character capabilities.",
    "vendorReason": "Wario Direct, known for its specialized gear, carries the Midnight Shell Mail due to its unique design and functionality tailored for night operations and urban environments.",
    "shippingDetail": "Ships within a week of order placement; delivery is swift but requires a signature upon receipt.",
    "usage": {
      "activation": "Passive effect, no activation required.",
      "duration": "Active until you leave an area of bright light or remove the armor.",
      "endsWhen": "Exposure to bright light or removal of the armor.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Midnight Shell Mail is priced at 1000 XP, reflecting its rare craftsmanship and specialized utility for stealth operations in specific lighting conditions.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T21:52:47.246163+00:00",
    "aiReviewedAt": "2026-07-23T21:52:47.246163+00:00",
    "aiReviewVersion": 1
  },
  "night_blackout_fire_flower": {
    "id": "night_blackout_fire_flower",
    "name": "Blackout Fire Flower",
    "description": "The Blackout Fire Flower is a soot-blackened bloom that exudes a suffocating darkness, extinguishing all non-magical light within its radius and casting a fiery spell of chaos in its wake. This rare artifact blooms only under the cover of night, unleashing a wave of fire that scorches enemies and cloaks itself and you in impenetrable shadow. Once it's in bloom, there's no mistaking its presence—its petals are as black as the void, and its flames burn with a malevolent glow that can be seen even when all else is dark.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Blinding Shadows",
      "Fiery Inferno"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Pooch",
    "levelRequirement": 7,
    "warning": "Great for ambushes, terrible for reading.",
    "effectDetails": [
      {
        "title": "Blinding Shadows",
        "rules": "As an action, you can cast Burning Hands (3d6 fire damage) and extinguish all non-magical light within a 20-foot radius for the duration of the spell. You gain dim light in this area as long as it's dark. Any use during daylight blinds you for 1 round (no fire effect). This ability can be used once per night."
      },
      {
        "title": "Fiery Inferno",
        "rules": "During the casting of Burning Hands, all creatures within the 20-foot cone of fire must make a DC 14 Dexterity saving throw or take half damage from the spell. You regain one use after a long rest."
      }
    ],
    "levelRequirementReason": "This rare item requires a minimum level to ensure you can handle its power and manage its effects.",
    "vendorReason": "Wario Direct specializes in rare and exotic items, including the Blackout Fire Flower, known for their unique and powerful properties.",
    "shippingDetail": "Delivered by Courier Pooch with a two-day turnaround. Handle with care as it's highly sensitive to light.",
    "usage": {
      "activation": "Action or Reaction (requires concentration for the duration of the spell)",
      "duration": "Instantaneous, lasts until the end of your next turn",
      "endsWhen": "Onset of daylight, interrupted by a successful save against the fire effect, or when you choose to end it early",
      "charges": "One use per night"
    },
    "priceReason": "This balanced price reflects its rarity and powerful effects that make it both useful and dangerous.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:52:58.323801+00:00",
    "aiReviewedAt": "2026-07-23T21:52:58.323801+00:00",
    "aiReviewVersion": 1
  },
  "night_koopa_courier_boots": {
    "id": "night_koopa_courier_boots",
    "name": "Koopa Night Courier Boots",
    "description": "The Koopa Night Courier Boots are crafted from ancient, weathered leather and emblazoned with a curfew insignia. They whisper silently on cobblestone streets, their soles designed to glide through the night's shadows. Runners in Toad Town swear by these boots, for they double your speed at night and give you advantage on Stealth checks while delivering messages between two known locations. In daylight, however, their crest becomes a beacon of light that disadvantages you on Stealth rolls; the bright daylight crowds make your presence unmistakable.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥾",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Night Prowler",
      "Swift Dash"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Toad Couriers",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Night Prowler",
        "rules": "While in darkness, these boots allow you to move up to 30 feet per round and grant advantage on Stealth checks while running messages between two known locations. This effect lasts until the start of your next turn after leaving an area of darkness."
      },
      {
        "title": "Swift Dash",
        "rules": "You can use a bonus action at the end of your turn to dash 30 feet without provoking opportunity attacks, once per long rest."
      }
    ],
    "levelRequirementReason": "The boots' advanced mechanics and silent soles necessitate a higher level to ensure proficiency in stealth and control over their unique abilities.",
    "vendorReason": "Wario Direct specializes in rare, high-demand equipment, making these boots a natural fit for their inventory.",
    "shippingDetail": "Delivered the next nightfall; please have your destination ready at dusk.",
    "usage": {
      "activation": "Passive and on-demand (bonus action)",
      "duration": "Until end of turn in darkness or after leaving a dark area, instantaneous",
      "endsWhen": "Leaving an area of darkness or the start of your next turn, exhausted after use",
      "charges": "Unlimited"
    },
    "priceReason": "The boots' rarity and advanced mechanics are reflected in their price, balancing their unique benefits with a cost that reflects their utility.",
    "priceOriginal": 13000,
    "priceReviewedAt": "2026-07-23T21:53:36.145316+00:00",
    "aiReviewedAt": "2026-07-23T21:53:36.145316+00:00",
    "aiReviewVersion": 1
  },
  "night_boo_pager": {
    "id": "night_boo_pager",
    "name": "Boo Pager",
    "description": "The Boo Pager is a small, rattling device with a glowing button and an eerie green light. Crafted in the twilight realms of the Mushroom Kingdom, it can summon a minor Boo spy by pressing its button. The Boo scurries off to scout up to 60 feet away, returning with valuable intel or gossip about you. Beware: there's a slim chance the Boo might bring back unwanted news about yourself instead.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📟",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Boo Spy",
      "Gossip Risk"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Toad Messenger Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Boo Spy",
        "rules": "Activates on a bonus action. The Boo spy scouts up to 60 feet away and reports back telepathically for one hour. The spy has no combat stats, but it can pass through most walls and flee bright light or strong holy auras."
      },
      {
        "title": "Gossip Risk",
        "rules": "Each use has a 5% chance that the Boo will bring gossip about YOU instead of its intended target. This effect is independent of the spy's mission."
      }
    ],
    "levelRequirementReason": "This item aids in reconnaissance and espionage, making it accessible to lower-level characters.",
    "vendorReason": "Wario Direct specializes in unique gadgets and curiosities from the Mushroom Kingdom, including this peculiar device.",
    "shippingDetail": "Ships via Toad Messenger Service; delivery is typically within three days.",
    "usage": {
      "activation": "Bonus action to summon a Boo spy.",
      "duration": "One hour for each use.",
      "endsWhen": "The Boo returns or the duration expires.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This price reflects its rare crafting materials and utility in reconnaissance, making it a valuable but not overpowered tool for explorers and spies.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:52:54.648829+00:00",
    "aiReviewedAt": "2026-07-23T21:52:54.648829+00:00",
    "aiReviewVersion": 1
  },
  "night_wartime_looter_gloves": {
    "id": "night_wartime_looter_gloves",
    "name": "Wartime Looter’s Gloves",
    "description": "The Wartime Looter’s Gloves are fingerless and appear to be cobbled together from salvaged gear. Their leather is reinforced with metal patches, and they bear the faint scent of gunpowder. These gloves grant their wearer an edge in stealthy situations, making them nearly invisible during nocturnal operations. They also possess a unique ability that allows for one effortless theft attempt against an unaware commoner-level NPC each night without provoking suspicion.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧤",
    "stock": 4,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Nighttime Advantage",
      "Stealthy Thievery"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Pianta Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Nighttime Advantage",
        "rules": "While in darkness, the wearer gains advantage on Dexterity (Sleight of Hand) checks. This effect is limited to one use per night."
      },
      {
        "title": "Stealthy Thievery",
        "rules": "Once per night, the wearer can make a Dexterity (Sleight of Hand) check against an unaware commoner-level NPC without needing to roll. On failure, the target gains advantage on any Perception check to detect these gloves within 24 hours."
      }
    ],
    "levelRequirementReason": "These gloves are designed for beginners and those who need a bit of extra help in their early adventures.",
    "vendorReason": "Wario's direct sales ensure these unique, yet practical, looting tools find their way to the right hands.",
    "shippingDetail": "Ships via Courier Pianta Express with a delivery time of 3 days during night stock periods.",
    "usage": {
      "activation": "Passive effect active in darkness; one-time use per night for thievery attempt.",
      "duration": "Instantaneous theft check and all-night advantage on Sleight of Hand checks",
      "endsWhen": "Effect ends by the end of the day, or when the next night begins if used",
      "charges": "Unlimited, as long as they are not destroyed"
    },
    "priceReason": "The gloves provide a significant advantage in stealth and thievery for a reasonable price.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-23T21:53:03.486680+00:00",
    "aiReviewedAt": "2026-07-23T21:53:03.486680+00:00",
    "aiReviewVersion": 1
  },
  "night_rogueport_forged_passport": {
    "id": "night_rogueport_forged_passport",
    "name": "Rogueport Forged Passport",
    "description": "The Rogueport Forged Passport is a slim leather-bound document, its pages brimming with meticulously forged Mushroom Kingdom visas. This passport grants you unparalleled access to Peach's Blossom Town and beyond, allowing you to bypass city gates, curfews, and checkpoints with ease. Should your deception falter, this passport offers a swift remedy: a single failed Charisma (Deception) check against bureaucrats is treated as if you rolled a 10, ensuring you slip through official systems undetected.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📘",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Swift Access",
      "Deceptive Safeguard"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Poochy",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Swift Access",
        "rules": "You can use an action to activate this passport and gain advantage on Charisma (Deception) checks to bypass city gates, curfews, and checkpoints. This effect lasts until the start of your next turn."
      },
      {
        "title": "Deceptive Safeguard",
        "rules": "Once per night, you can use an action to activate this passport if you roll a natural 1 on a Charisma (Deception) check against bureaucrats. The failed result is treated as a 10, and all 'official' systems tied to Peach-era bureaucracy will not flag you."
      }
    ],
    "levelRequirementReason": "This passport requires your proficiency in Deception and the ability to convincingly bypass official checks.",
    "vendorReason": "Wario, a notorious forger, sells this counterfeit document exclusively through his network.",
    "shippingDetail": "This item is couriered personally by Courier Poochy, ensuring it reaches you in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "Until the start of your next turn (Swift Access) or once per night (Deceptive Safeguard)",
      "endsWhen": "The use limit is reached for each activation",
      "charges": "Unlimited, as long as you haven't failed a Charisma (Deception) check against bureaucrats."
    },
    "priceReason": "This passport balances at 1000 XP, reflecting its forgery quality and the risk involved in using it.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T21:53:10.955158+00:00",
    "aiReviewedAt": "2026-07-23T21:53:10.955158+00:00",
    "aiReviewVersion": 1
  },
  "night_dark_yoshi_saddle": {
    "id": "night_dark_yoshi_saddle",
    "name": "Dark Yoshi Recon Saddle",
    "description": "The Dark Yoshi Recon Saddle is a sleek, black-finished leather saddle crafted by Wario Direct. Its stealth fittings make it an ideal choice for covert reconnaissance missions at night. The mount and rider gain advantage on Stealth checks when moving under the cover of darkness, and once per long rest, the rider can command the mount to perform a silent charge—granting advantage on the first attack from the mount in that round. In daylight, the saddle imbues the mount with heightened alertness; it gains disadvantage on Animal Handling checks during this time.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐎",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Stealth Advantage",
      "Silent Charge"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Mario Express Courier",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Stealth Advantage",
        "rules": "While mounted on a Yoshi or similar mount at night, both the rider and mount gain advantage on Stealth checks. This effect lasts until the start of the next long rest."
      },
      {
        "title": "Silent Charge",
        "rules": "Once per long rest, the rider can command their mount to perform a silent charge. During this silent charge, the mount’s first attack from mounted combat in that round has advantage. This effect ends when the mount makes another attack or when the rider dismounts."
      }
    ],
    "levelRequirementReason": "The saddle's advanced stealth and tactical capabilities require a proficient rider with at least 7th level experience.",
    "vendorReason": "Wario Direct specializes in high-tech gear for covert operations, making it the perfect vendor for this custom saddle.",
    "shippingDetail": "Ships within a week of order placement. Delivery includes expert installation by Mario Express Specialists.",
    "usage": {
      "activation": "Passive effect active during night; Silent Charge is an action that can be used once per long rest.",
      "duration": "Stealth Advantage lasts until the start of the next long rest; Silent Charge ends when the mount attacks again or the rider dismounts.",
      "endsWhen": "Silent Charge ends when the mount makes another attack or when the rider dismounts.",
      "charges": "The silent charge effect can be used once per long rest."
    },
    "priceReason": "This saddle represents a significant investment in advanced stealth and combat capabilities, justifying its lower price point compared to more powerful items.",
    "priceOriginal": 19000,
    "priceReviewedAt": "2026-07-23T21:53:15.387051+00:00",
    "aiReviewedAt": "2026-07-23T21:53:15.387051+00:00",
    "aiReviewVersion": 1
  },
  "night_chomp_chain_keyring": {
    "id": "night_chomp_chain_keyring",
    "name": "Chomp-Chain Keyring",
    "description": "The Chomp-Chain Keyring is a heavy, retired Chain Chomp link keychain forged from the very jaws of Wario's nemesis. Crafted from the very links that once clamped down on adventurers' misdeeds during the night, it radiates with a faint metallic sheen. When you use it at night, it grants you an advantage in breaking mundane chains or shackles. The keyring also allows for a single, powerful shove or bust attempt where your Strength is treated as 18. However, if you move faster than a walk, the links clink loudly, giving away your position and imposing disadvantage on Stealth checks.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔗",
    "stock": 4,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Nighttime Breaker",
      "Powerful Shove"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Toad Messenger Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Nighttime Breaker",
        "rules": "When activated during nighttime, you gain advantage on Strength (Athletics) checks to break mundane chains, shackles, or padlocks. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Powerful Shove",
        "rules": "Once per night, you can use this keyring for a single shove or bust attempt, treating your Strength score as 18 for that check. The keyring then requires a short rest to recharge its power."
      }
    ],
    "levelRequirementReason": "The Chomp-Chain Keyring's forged resilience and night-specific powers make it accessible to all adventurers, regardless of level.",
    "vendorReason": "Wario Direct specializes in unique and rare items from the Mushroom Kingdom, including this keychain that once held its own against legends like Link and Mario.",
    "shippingDetail": "The Toad Messenger delivers the Chomp-Chain Keyring with a special delivery, ensuring it arrives securely in your hands at night.",
    "usage": {
      "activation": "Activate as an action during nighttime for one of its effects.",
      "duration": "Nighttime Breaker lasts until the end of your next long rest. Powerful Shove is a single use per night and requires a short rest to recharge.",
      "endsWhen": "The keyring's powers end when used or at the start of your next day. The keyring regains its power after a short rest.",
      "charges": "Unlimited uses, but only once per night."
    },
    "priceReason": "While not an overpowered item, the Chomp-Chain Keyring's unique properties and rarity justify this price in terms of XP value.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-23T21:53:22.169432+00:00",
    "aiReviewedAt": "2026-07-23T21:53:22.169432+00:00",
    "aiReviewVersion": 1
  },
  "night_thieves_market_membership": {
    "id": "night_thieves_market_membership",
    "name": "Thieves’ Market Membership Token",
    "description": "The Thieves’ Market Membership Token is a worn wooden token etched with the symbol of the Shadow Broker. This relic grants access to clandestine black markets that pop up at night in larger settlements, offering rare and illicit wares. Each use allows you to locate such a market within an hour; there's even a 10% chance it will be raided by authorities upon your arrival. With this token, every purchase made at one of these markets comes with a permanent 10% discount.",
    "category": "services",
    "price": 1000,
    "icon": "🪵",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Nighttime Market Access",
      "Discounted Purchases"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Puffa Duck Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Nighttime Market Access",
        "rules": "Activates as an action. Once per night, within any sizable settlement, you can locate a temporary thieves' market within one hour (DM determines the vendors). There's a 10% chance the market will be raided by authorities upon your arrival."
      },
      {
        "title": "Discounted Purchases",
        "rules": "Permanent +10% discount on all purchases made at any thieves’ market accessed with this token. The discount does not stack with other discounts or offers."
      }
    ],
    "levelRequirementReason": "Requires basic knowledge of black markets and the ability to identify legitimate opportunities.",
    "vendorReason": "Wario Direct specializes in connecting players with rare and unique items, including access to exclusive venues like thieves' markets.",
    "shippingDetail": "Delivered within the night of purchase, ensuring you have time to locate a market before dawn.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Market location is determined or the token is destroyed in combat",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price reflects the unique and valuable access it provides to players.",
    "priceOriginal": 21000,
    "priceReviewedAt": "2026-07-23T21:53:25.865355+00:00",
    "aiReviewedAt": "2026-07-23T21:53:25.865355+00:00",
    "aiReviewVersion": 1
  },
  "night_stolen_koopa_war_banner": {
    "id": "night_stolen_koopa_war_banner",
    "name": "Stolen Koopa War Banner (Night Standard)",
    "description": "The Stolen Koopa War Banner (Night Standard) is a tattered banner stained with the blood of countless battles. Crafted from dark, enchanted fabric that glows faintly under moonlight, it once flew over Toad Town at dusk, instilling fear in Bowser's foes. By night, allies within 20 feet gain +1 to damage rolls against Koopa-aligned enemies who fear Bowser. By day, planting the banner among civilians saps their morale, reducing them to -1 on hope checks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🚩",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Nighttime Allies Boost",
      "Daytime Morale Sink"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Toad Post",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Nighttime Allies Boost",
        "rules": "When planted at night as a bonus action within 20 feet of foes, all allies within the area gain +1 to damage rolls against Koopa-aligned creatures who fear Bowser. This effect lasts until the start of your next turn after planting or if the banner is removed by an opponent."
      },
      {
        "title": "Daytime Morale Sink",
        "rules": "When planted during daylight as a bonus action, it saps civilian morale within 20 feet for one minute. All civilians in range must make a Wisdom saving throw (DC 13) or suffer -1 to all hope checks until the end of their next long rest."
      }
    ],
    "levelRequirementReason": "Requires level 8 to handle the banner's potent enchantments responsibly.",
    "vendorReason": "Wario acquired this relic from a shady Toad who once served under Bowser, and it holds sentimental value for him.",
    "shippingDetail": "Ships via Toad Post's night courier service, ensuring the banner arrives at dusk for optimal use. Delivery is restricted to night hours only.",
    "usage": {
      "activation": "Bonus action required to plant or remove during day/night.",
      "duration": "Lasts until start of next turn after planting or removed by an opponent.",
      "endsWhen": "Banner's effect ends if the banner is removed, or when used again at night. Charges are unlimited.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price for a rare relic that offers potent but temporary battlefield advantages.",
    "priceOriginal": 17000,
    "priceReviewedAt": "2026-07-23T21:53:32.729058+00:00",
    "aiReviewedAt": "2026-07-23T21:53:32.729058+00:00",
    "aiReviewVersion": 1
  },
  "night_burned_peach_wanted_poster": {
    "id": "night_burned_peach_wanted_poster",
    "name": "Burned Peach Loyalist Wanted Poster",
    "description": "A charred relic of a bygone era, this Wanted Poster of a Peach loyalist from the civil war offers more than just a historical artifact. At night, it grants you advantage on Insight and History checks related to the factions involved in the conflict. Tear off a piece during the evening for +1 temporary Intelligence modifier when making Intimidation checks against former rebels or soldiers. Use it openly with royalists, but be wary: doing so imposes disadvantage on Persuasion attempts for 24 hours.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📜",
    "stock": 3,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Night Insight Advantage",
      "Tear Piece for Bonus"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Pooch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Night Insight Advantage",
        "rules": "Active at night, this poster grants the user advantage on Insight and History checks pertaining to the civil war factions."
      },
      {
        "title": "Tear Piece for Bonus",
        "rules": "Once per night, tearing off a piece of the poster grants +1 temporary Intelligence modifier when making an Intimidation check against ex-soldiers or rebels. The effect lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This relic is accessible to all adventurers, as it serves as a tangible connection to historical events.",
    "vendorReason": "Wario Direct specializes in rare and unusual items that can be found through various channels, including wanted posters from the past.",
    "shippingDetail": "Delivered by the reliable Courier Pooch within 3 days of placing your order.",
    "usage": {
      "activation": "Passive and on-demand for tearing off a piece",
      "duration": "Until start of next turn after using an Intimidation check",
      "endsWhen": "The poster is destroyed or the temporary effect expires",
      "charges": "Unlimited, with no need to recharge"
    },
    "priceReason": "This balanced price reflects both its historical value and practical utility without being overpowered.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T21:53:38.206832+00:00",
    "aiReviewedAt": "2026-07-23T21:53:38.206832+00:00",
    "aiReviewVersion": 1
  },
  "night_undead_toll_contract": {
    "id": "night_undead_toll_contract",
    "name": "Undead Toll-Road Contract",
    "description": "The Undead Toll-Road Contract is a cryptic parchment signed in blood. It binds minor undead patrols to ignore you during your nocturnal travels through graveyards and battlefields, as long as you do not provoke their ire. Upon activation, it grants passage through one choke point held by these undead without interruption. Violating the contract by striking first will make all such undead pursue you with relentless fervor for a week.",
    "category": "services",
    "price": 1000,
    "icon": "📄",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Nocturnal Traveler's Privilege",
      "Undead Chokepoint Passage"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Nightmare Express Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Nocturnal Traveler's Privilege",
        "rules": "While traveling between midnight and dawn in graveyards or battlefields, non-intelligent undead are indifferent towards you unless provoked. This effect is active for the duration of your travel within these locations."
      },
      {
        "title": "Undead Chokepoint Passage",
        "rules": "You may activate this contract once per night to pass through one choke point held by minor undead without being stopped (unless a greater undead is present). The contract expires at dawn, and using it provokes the ire of all such undead for 7 days if broken."
      }
    ],
    "levelRequirementReason": "This item provides a mild advantage in specific dangerous situations.",
    "vendorReason": "Wario Direct specializes in services that help adventurers navigate the treacherous night world more safely.",
    "shippingDetail": "Pickup only; ensure to have this item signed for at your location.",
    "usage": {
      "activation": "Instantaneous action when entering a choke point or during travel in graveyards/battlefields.",
      "duration": "Until dawn of the next day, or until provoked by an undead.",
      "endsWhen": "Dawn, or if you provoke the ire of the bound undead patrols.",
      "charges": "One use per night"
    },
    "priceReason": "This item provides a moderate advantage in nocturnal travel through dangerous areas without being overpowered.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:53:42.340022+00:00",
    "aiReviewedAt": "2026-07-23T21:53:42.340022+00:00",
    "aiReviewVersion": 1
  },
  "night_phantom_coin_purse": {
    "id": "night_phantom_coin_purse",
    "name": "Phantom Coin Purse",
    "description": "The Phantom Coin Purse feels as light as air by day, its leather smooth and unremarkable to the touch. Yet at nightfall, it swells with coins, each one weightless until midnight strikes. At that moment, the purse's true form reveals: a canvas for your wealth, where a single deposit can vanish into 500 gp of untraceable coinage. However, beware; every week, the purse demands its 'maintenance fee': a 1d100 gp note may spontaneously disappear without warning.",
    "category": "equipment",
    "price": 1000,
    "icon": "👛",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Weightless Coins by Day",
      "Midnight Alchemy"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Pigeon Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Weightless Coins by Day",
        "rules": "Coins placed inside the purse feel weightless during daylight hours. These coins do not contribute to encumbrance and can be removed at any time without penalty."
      },
      {
        "title": "Midnight Alchemy",
        "rules": "At midnight, you may activate this effect by placing up to 500 gp worth of legitimate loot into the purse. The next morning, that sum vanishes, replaced with 500 gp in completely untraceable coinage."
      }
    ],
    "levelRequirementReason": "This item is suitable for lower-level adventurers who need a reliable way to secure their wealth without worrying about encumbrance.",
    "vendorReason": "Wario's business model revolves around providing services that make life easier, even if that means dealing with oddities like the Phantom Coin Purse.",
    "shippingDetail": "Delivered by courier pigeon within one hour of purchase.",
    "usage": {
      "activation": "Standard action at midnight to activate and 'wash' coins into the purse.",
      "duration": "Instantaneous activation, effect lasts until morning.",
      "endsWhen": "The effect ends with the onset of morning light.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This price reflects a rare and useful item that balances utility without being overpowered.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-23T21:54:18.925196+00:00",
    "aiReviewedAt": "2026-07-23T21:54:18.925196+00:00",
    "aiReviewVersion": 1
  },
  "night_mario_bro_broken_wrench": {
    "id": "night_mario_bro_broken_wrench",
    "name": "Mario Bro. Broken Wrench",
    "description": "The Mario Bro. Broken Wrench, once a symbol of plumber prowess, now serves as an icon of the past. Its M-engraved handle and scorched blade hint at a battle fought in the dark. At night, this relic offers its wielder a fleeting advantage on repair or sabotage checks—Mario's spectral essence whispers guidance to those who know how to listen. Should you strike an ally with it, it loses its power forever, as if Mario himself disapproves.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔧",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Nightly Sabotage",
      "Construct Critter"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Pooch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Nightly Sabotage",
        "rules": "At night, you can use the wrench once per long rest to gain advantage on a single Strength or Dexterity check related to sabotage or repair. This effect is limited to once per long rest and only applies at night."
      },
      {
        "title": "Construct Critter",
        "rules": "You can use it as an improvised melee weapon (1d6 bludgeoning damage) against constructs, where a successful hit on 19–20 results in a critical. However, if used deliberately against an ally or during the day, this effect is lost."
      }
    ],
    "levelRequirementReason": "Even the simplest plumber can recognize and use this relic.",
    "vendorReason": "Wario, ever the opportunist, sells whatever he can find to those who need a bit of nostalgia or a quick fix.",
    "shippingDetail": "Delivered by night in a crate marked with a W.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Used successfully, deliberately striking an ally, or during the day",
      "charges": "Unlimited"
    },
    "priceReason": "The wrench's sentimental value and limited utility justify its price.",
    "priceOriginal": 16000,
    "priceReviewedAt": "2026-07-23T21:54:20.721639+00:00",
    "aiReviewedAt": "2026-07-23T21:54:20.721639+00:00",
    "aiReviewVersion": 1
  },
  "night_civil_war_dogtag_chain": {
    "id": "night_civil_war_dogtag_chain",
    "name": "Chain of Mixed Dogtags",
    "description": "The Chain of Mixed Dogtags is a rare artifact forged from ID tags of soldiers from both sides of the conflict. Crafted by Wario Direct, it hangs heavy with stories and traumas. This chain can be worn around the neck, and its links whisper tales of the Night Civil War. When worn, it provides advantage on Insight checks against veterans of the war, allowing you to read their deepest fears. Additionally, once per night, you may reroll a failed death saving throw, choosing your second result to ensure survival.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⛓️",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Reroll Death Save",
      "Advantage on Insight vs Veterans"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Swift Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reroll Death Save",
        "rules": "Activates as an action. Once per night, you can reroll a failed death saving throw and must use the second result."
      },
      {
        "title": "Advantage on Insight vs Veterans",
        "rules": "While wearing this chain, you gain advantage on Insight checks to read the deepest traumas of veterans from the Night Civil War."
      }
    ],
    "levelRequirementReason": "This item is crafted with common materials and lore but offers significant narrative value.",
    "vendorReason": "Wario Direct specializes in unique, story-driven artifacts from the Night Civil War era.",
    "shippingDetail": "Delivered within a week of order placement.",
    "usage": {
      "activation": "Action (rerolling death save), Passive (advantage on Insight checks)",
      "duration": "Instantaneous (reroll), Permanent (advantage)",
      "endsWhen": "Exhausted after one use or when removed from the body",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects its narrative significance and the effort to craft it by Wario Direct.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:53:51.690701+00:00",
    "aiReviewedAt": "2026-07-23T21:53:51.690701+00:00",
    "aiReviewVersion": 1
  },
  "night_spirit_of_the_war_drum": {
    "id": "night_spirit_of_the_war_drum",
    "name": "Haunted War Drumhead",
    "description": "The drumhead of a Toad war drum, now tensioned with spectral sinew. Its surface is etched with ancient runes that glow faintly in the moonlight. When beaten, it resonates with a haunting melody that can send even the bravest warriors into a trance-like state of heightened combat prowess for one hour each night. The drum's power imposes disadvantage on enemies attempting to instill fear among its allies until dawn.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥁",
    "stock": 1,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Nightly Resonance",
      "Fear Resistance"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Toad Express",
    "levelRequirement": 5,
    "warning": "Neighbors WILL complain. If they’re still alive.",
    "effectDetails": [
      {
        "title": "Nightly Resonance",
        "rules": "Once per night, the drummer can beat the drum as a bonus action to grant all allies within 30 feet temporary hit points equal to your level + your Charisma modifier. The effect lasts for one hour and imposes disadvantage on enemy fear effects against those allies until dawn."
      },
      {
        "title": "Fear Resistance",
        "rules": "While under the drum's influence, allies gain advantage on saving throws against being frightened by creatures or effects. This effect persists until dawn."
      }
    ],
    "levelRequirementReason": "Players need to demonstrate basic combat proficiency before wielding such a powerful and unpredictable artifact.",
    "vendorReason": "Wario Direct specializes in rare and exotic equipment that can enhance the battlefield, and this drumhead fits perfectly into their inventory.",
    "shippingDetail": "Delivered by Toad Express; expect a slight delay due to its mystical nature.",
    "usage": {
      "activation": "Bonus action to beat the drum.",
      "duration": "One hour each night, until dawn.",
      "endsWhen": "Dawn or when destroyed.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Haunted War Drumhead is moderately priced for its rarity and the limited nightly usage it provides.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-23T21:53:56.189192+00:00",
    "aiReviewedAt": "2026-07-23T21:53:56.189192+00:00",
    "aiReviewVersion": 1
  },
  "night_napkin_oath_with_bowser_jr": {
    "id": "night_napkin_oath_with_bowser_jr",
    "name": "Crumpled Napkin Oath (Bowser Jr. 'Deal')",
    "description": "A tattered napkin with 'NO SNITCH – B.J.' scrawled in childish handwriting, accompanied by a crude drawing of Bowser Jr. This napkin is rumored to be imbued with the mischievous spirit of the Koopa King himself. Use it at night and you can call upon a small squad of rogue Koopas for a covert operation, but beware—Bowser's spies might catch wind of your activities. After three activations, the ink fades and its magic dissolves.",
    "category": "services",
    "price": 1000,
    "icon": "🧻",
    "stock": 1,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Covert Operative",
      "Spy Alert"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Poochy & Nana",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Covert Operative",
        "rules": "At night, as a bonus action, you can call upon a squad of rogue Koopas for a covert operation. The DM defines the specifics: size of the squad and type of mission (small strike team or distraction). The squad will remain active until your next long rest. This effect has no save DC but is limited to once per week."
      },
      {
        "title": "Spy Alert",
        "rules": "Using this napkin leaves unmistakable traces, giving Bowser or his generals a 10% chance (+1 per use) to become aware of your meddling within the next month. The effect has no save DC and is limited to three uses."
      }
    ],
    "levelRequirementReason": "This item requires at least third level for players to effectively manage its covert operations without overstepping their current capabilities.",
    "vendorReason": "As a direct supplier of Bowser Jr.'s mischievous schemes, Wario Direct naturally stocks items that can be used in such endeavors.",
    "shippingDetail": "Delivered swiftly by the Koopa Twins' trusted couriers; they will personally hand it over to ensure its safe arrival at nightfall.",
    "usage": {
      "activation": "Bonus action, once per week",
      "duration": "Until your next long rest",
      "endsWhen": "After three uses or upon a successful long rest",
      "charges": "3"
    },
    "priceReason": "The balanced price reflects the item's limited use, covert nature, and the strategic value it provides to players without giving them an unfair advantage.",
    "priceOriginal": 21000,
    "priceReviewedAt": "2026-07-23T21:54:07.816038+00:00",
    "aiReviewedAt": "2026-07-23T21:54:07.816038+00:00",
    "aiReviewVersion": 1
  },
  "night_shadow_mario_graffiti_can": {
    "id": "night_shadow_mario_graffiti_can",
    "name": "Shadow Mario Graffiti Can",
    "description": "The Shadow Mario Graffiti Can is a sleek, metallic container exuding an eerie glow. Allegedly 'borrowed' from Bowser Jr.'s arsenal, it's rumored to be filled with paint that can alter reality for brief moments. When shaken and sprayed, it paints a 10×10 ft square of illusory terrain that feels like difficult terrain to anyone who isn't Shadow Mario or his allies. This camouflage can fool even the most vigilant eyes until exposed to sunlight, when it transforms into an embarrassing portrait of Wario, forever etched on the canvas.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🖌️",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Illusory Terrain",
      "Pass Through Illusion"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Pooch",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Illusory Terrain",
        "rules": "At your action, you can spray the can to paint a 10×10 ft square of illusory terrain that behaves as difficult terrain for others. This effect lasts until exposed to sunlight or until the area is cleaned with any means (instantaneous). You and your chosen allies are immune to the effects of this terrain."
      },
      {
        "title": "Expose to Sun",
        "rules": "If exposed to direct sunlight, the painted illusion turns into a crude portrait of Wario that remains visible for 1 hour. This effect cannot be undone until it fades naturally or is cleaned."
      }
    ],
    "levelRequirementReason": "Requires basic understanding of how to use and control illusory effects.",
    "vendorReason": "Wario Direct specializes in items related to his own brand, including this graffiti can.",
    "shippingDetail": "Ships within the night, delivered by a mischievous Pooch.",
    "usage": {
      "activation": "Action",
      "duration": "Until exposed to sunlight or cleaned",
      "endsWhen": "Exposure to sunlight or cleaning with any means",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price for a rare, night-specific item that can alter reality.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-23T21:54:12.698391+00:00",
    "aiReviewedAt": "2026-07-23T21:54:12.698391+00:00",
    "aiReviewVersion": 1
  },
  "night_boo_tailored_pinstripe_suit": {
    "id": "night_boo_tailored_pinstripe_suit",
    "name": "Boo-Tailored Pinstripe Suit",
    "description": "The Boo-Tailored Pinstripe Suit is a sharp, ill-fitting ensemble with an unmistakable odor of cigar smoke. Its oversized cut and peculiar design make it a perfect accessory for those who deal in shadows. At night, it whispers secrets only to the wearer, aiding in illegal deals or bribes. In hallowed places, the suit's seams itch, imposing disadvantage on Charisma checks but also granting an eerie charm that can turn the tide of any encounter.",
    "category": "equipment",
    "price": 1000,
    "icon": "🤵",
    "stock": 1,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Night Whispers",
      "Holy Itch"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Darkmoon Express",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Night Whispers",
        "rules": "At night, while wearing this suit, you gain a +2 bonus to Charisma (Deception) and (Persuasion) checks regarding illegal deals or bribes. You can use this ability once per long rest. This effect is enhanced by the suit's mysterious presence."
      },
      {
        "title": "Holy Itch",
        "rules": "In places of holy ground, wearing this suit imposes disadvantage on all Charisma (Persuasion) checks. However, it grants a +1 bonus to Charisma (Intimidation) checks against those who challenge your authority in such locations."
      }
    ],
    "levelRequirementReason": "This suit is crafted for individuals who navigate the dark alleys of society with finesse and confidence.",
    "vendorReason": "Wario Direct specializes in exotic and limited-edition items that cater to those looking for a unique edge.",
    "shippingDetail": "Orders are delivered under the cover of night, ensuring your suit arrives just when you need it most.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until you finish a long rest or enter holy ground.",
      "endsWhen": "The suit's effects end at dawn or when entering holy ground.",
      "charges": "Once per long rest"
    },
    "priceReason": "Considering its rare origin and the unique benefits it offers, this suit is fairly priced for those who value discretion and influence.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-23T21:54:26.013029+00:00",
    "aiReviewedAt": "2026-07-23T21:54:26.013029+00:00",
    "aiReviewVersion": 1
  },
  "night_wario_branded_lockpick_watch": {
    "id": "night_wario_branded_lockpick_watch",
    "name": "Wario-Branded Lockpick Watch",
    "description": "The Wario-Branded Lockpick Watch is a chunky, neon-green wristwatch that glows faintly at night. Its face flips up to reveal a toolkit of gleaming metal, each tool etched with the mischievous visage of its creator. Crafted from durable steel and infused with Wario's dark humor, this watch grants you a masterful edge in unlocking even the most stubborn locks. At night, it pulses softly, offering +2 to your lockpicking attempts and allowing you to pick one non-magical lock as a bonus action each evening.",
    "category": "equipment",
    "price": 1000,
    "icon": "⌚",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Lockpick Boost",
      "Nightly Lockpick"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Superstar Express Delivery Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Lockpick Boost",
        "rules": "While wearing the Wario-Branded Lockpick Watch, you count as having masterwork thieves' tools. This grants a +2 bonus to all lockpicking checks."
      },
      {
        "title": "Nightly Lockpick",
        "rules": "Once per night, you can use your action or bonus action to pick one non-magical lock. If you roll a natural 1 on this check, the watch jams until it is repaired (no tool bonus applies until fixed)."
      }
    ],
    "levelRequirementReason": "This item requires no level because it offers a minor advantage for beginners or those needing quick access to lockpicking tools.",
    "vendorReason": "Wario Direct is the only vendor that sells this product, as it’s his personal brand and logo adorns the watch.",
    "shippingDetail": "Delivered by Superstar Express within a day of purchase.",
    "usage": {
      "activation": "Bonus action or action",
      "duration": "Instantaneous",
      "endsWhen": "Once per night; exhausted after use",
      "charges": "Unlimited, as long as the watch is not jammed"
    },
    "priceReason": "The price reflects its rare status and the unique combination of utility and humor.",
    "priceOriginal": 16000,
    "priceReviewedAt": "2026-07-23T21:54:42.442243+00:00",
    "aiReviewedAt": "2026-07-23T21:54:42.442243+00:00",
    "aiReviewVersion": 1
  },
  "night_peach_balcony_shadow_fragment": {
    "id": "night_peach_balcony_shadow_fragment",
    "name": "Shadow Fragment of Peach’s Balcony",
    "description": "The Shadow Fragment of Peach’s Balcony is a relic that captures the ethereal essence of twilight. It is a small, obsidian cube with faint, shifting patterns that hint at the shadows of night. This fragment, bottled in the dead of dusk, can be poured on any flat surface to create a 15-foot-radius patch of deep shadow, effectively obscuring all but the most keen-eyed creatures for ten minutes. Additionally, it grants advantage to Stealth checks and imposes disadvantage on ranged attacks directed at or through this area by enemies within range.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧪",
    "stock": 1,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Shadow Patch",
      "Stealth Aid"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Nightshade Courier Service",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Shadow Patch",
        "rules": "Once per night, the user can activate this fragment to pour it on a flat surface. A 15-foot-radius patch of deep shadow forms, which counts as heavily obscured terrain for 10 minutes. This effect ends if the area is no longer a flat surface or if the duration expires."
      },
      {
        "title": "Stealth Aid",
        "rules": "Allies within 30 feet of where the Shadow Patch is active have advantage on Stealth checks, while enemies in that area have disadvantage on ranged attack rolls targeting them. This effect ends when the Shadow Patch's duration ends or if the fragment is used more than three times."
      }
    ],
    "levelRequirementReason": "This relic requires a minimum level to activate its effects, ensuring it remains a strategic tool rather than a trivial item.",
    "vendorReason": "Wario Direct specializes in rare and powerful items from night-time vendors, making this relic an appropriate addition to their offerings.",
    "shippingDetail": "Delivered under the cover of darkness; delivery time varies depending on moon phases.",
    "usage": {
      "activation": "Standard action (once per night)",
      "duration": "10 minutes or until conditions change",
      "endsWhen": "Duration ends, fragment used more than three times, or area ceases to be a flat surface",
      "charges": "Unlimited uses; the fragment recharges after 24 hours"
    },
    "priceReason": "This relic's price is adjusted to reflect its epic rarity and strategic utility without overshadowing other items of similar power.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-23T21:54:36.513847+00:00",
    "aiReviewedAt": "2026-07-23T21:54:36.513847+00:00",
    "aiReviewVersion": 1
  },
  "night_bullet_bill_night_racing_permit": {
    "id": "night_bullet_bill_night_racing_permit",
    "name": "Night Racing Permit (Bullet Bill League)",
    "description": "A sleek black laminated card with Wario's signature in neon glow. This permit grants entry to the neon-lit, underground Night Bullet Bill League races where illegal speed and precision meet. Each race is a high-stakes affair; win one weekly race, and you might earn either 1d4×1000 gp or an epic favor from Wario himself. However, there's no guarantee that your vehicle will be returned by morning.",
    "category": "services",
    "price": 1000,
    "icon": "🏁",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Weekly Racing Prize",
      "Vehicle Risk"
    ],
    "vendor": "wario_direct",
    "shippedBy": "N/A - Pickup Only",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Weekly Racing Prize",
        "rules": "Once per in-game week, upon winning a race, you may choose to gain either 1d4×1000 gp or an epic favor. This effect is instantaneous and requires no action."
      },
      {
        "title": "Vehicle Risk",
        "rules": "There's a 15% chance that your vehicle will be 'kindly borrowed' by another racer before the morning of each visit, requiring you to either pay for repairs or start anew with a different vehicle. This effect ends when the permit is used."
      }
    ],
    "levelRequirementReason": "This permit requires a certain level to access its unique risks and rewards.",
    "vendorReason": "Wario personally oversees these races, so his direct outlet sells the permits for entry.",
    "shippingDetail": "Pickup only at Wario Direct's neon-lit garage.",
    "usage": {
      "activation": "Instantaneous upon winning a race.",
      "duration": "Until the next in-game week.",
      "endsWhen": "The permit is used for its weekly prize or the vehicle risk occurs.",
      "charges": "Unlimited, but only one use per week."
    },
    "priceReason": "The price reflects a balance between the high-stakes risks and rewards of the races.",
    "priceOriginal": 19000,
    "priceReviewedAt": "2026-07-23T21:54:34.633200+00:00",
    "aiReviewedAt": "2026-07-23T21:54:34.633200+00:00",
    "aiReviewVersion": 1
  },
  "night_dry_bones_clattering_dice": {
    "id": "night_dry_bones_clattering_dice",
    "name": "Dry Bones Clattering Dice",
    "description": "A pair of dice carved from the dry bones of a forgotten necromancer, these eerie relics never quite stop rattling in your palm. The fingers seem to twitch as if still animated, and their ancient carvings whisper secrets only to the initiated. When you roll them before a d20 check, on a 10-12, you may treat it as a natural 10. If you roll snake eyes (a 2), your next failed death saving throw cannot be rerolled by any means.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🎲",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Fortune's Flicker",
      "Silent Death"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Pooch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fortune's Flicker",
        "rules": "Once per night, before a d20 roll, you may roll these dice. On a result of 10-12, treat the roll as if it were a natural 10."
      },
      {
        "title": "Silent Death",
        "rules": "If you roll snake eyes (a 2), your next failed death saving throw cannot be rerolled by any means. This effect is not cumulative and can only occur once per night."
      }
    ],
    "levelRequirementReason": "This relic is designed for beginning adventurers, offering a touch of the arcane without requiring extensive experience.",
    "vendorReason": "Wario Direct often stocks unique and slightly questionable items that appeal to both seasoned players and newcomers alike.",
    "shippingDetail": "Delivered within a week, with no additional charges for fragile items like these dice.",
    "usage": {
      "activation": "On a d20 roll before your turn.",
      "duration": "Instantaneous; effect is resolved at the end of your turn.",
      "endsWhen": "The next failed death save or when you make another d20 roll before your turn.",
      "charges": "Unlimited, but only one use per night."
    },
    "priceReason": "The price reflects the rare materials and ancient craftsmanship required to create these dice, as well as their limited utility compared to more versatile magic items.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:54:58.646521+00:00",
    "aiReviewedAt": "2026-07-23T21:54:58.646521+00:00",
    "aiReviewVersion": 1
  },
  "night_star_thief_handbook": {
    "id": "night_star_thief_handbook",
    "name": "Star Thief’s Night Handbook",
    "description": "The Star Thief’s Night Handbook is a leather-bound tome with gold-embossed stars on its cover. It whispers advice in a smug, gravelly voice only when you're near sacred grounds or ancient vaults at night. Studying it for an hour under the moon's light grants you advantage on your next skill check to steal or procure magical items. If your attempt fails catastrophically (rolling a natural 1), the item’s guardian becomes aware of your presence, but only if they are within hearing distance and have not already gone to sleep.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📙",
    "stock": 1,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Moonlit Mastery",
      "Guardian Awareness"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier PikaExpress",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Moonlit Mastery",
        "rules": "By studying the handbook for one hour at night, you gain advantage on your next skill check made to steal or procure a magical item. This effect can only be used once per long rest."
      },
      {
        "title": "Guardian Awareness",
        "rules": "If your attempt to steal or procure fails catastrophically (natural roll of 1), the item's guardian becomes aware of you within 30 feet if they are awake and not in a state of deep slumber. This effect does not trigger if the item is unattended."
      }
    ],
    "levelRequirementReason": "This handbook requires basic knowledge of stealth and thievery to effectively use its advantages.",
    "vendorReason": "Wario Direct specializes in items that enhance mischievous activities, making this a perfect fit for their inventory.",
    "shippingDetail": "Delivered within the night of purchase by PikaExpress. Requires pickup from the nearest Wario Direct store.",
    "usage": {
      "activation": "Studying the handbook for one hour at night under moonlight.",
      "duration": "Instantaneous, once per long rest.",
      "endsWhen": "After use or if your attempt fails catastrophically.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced for a high-level character who needs an edge in stealth and thievery without overpowered mechanics.",
    "priceOriginal": 22000,
    "priceReviewedAt": "2026-07-23T21:54:52.480839+00:00",
    "aiReviewedAt": "2026-07-23T21:54:52.480839+00:00",
    "aiReviewVersion": 1
  },
  "night_koopa_trench_periscope": {
    "id": "night_koopa_trench_periscope",
    "name": "Koopa Trench Periscope",
    "description": "The Koopa Trench Periscope is a sleek, collapsible device with night-tuned lenses and etchings of shells that glimmer under moonlight. Crafted by Wario's own hands from rare materials, it allows you to observe unseen in the darkest nights. Granting advantage on Perception checks made from total cover at night, this periscope also offers a unique boon: once per night, you can spot an ally within 60 feet for their first ranged attack roll, granting them advantage if they hit.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔭",
    "stock": 4,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Night Vision Advantage",
      "Spotting Ally's Attack"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Fastest Express Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Night Vision Advantage",
        "rules": "You gain a +2 bonus to Perception checks made from total cover at night. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Spotting Ally's Attack",
        "rules": "As an action, you can use the periscope to spot for an ally within 60 feet who is making their first ranged attack roll this round. The target gains advantage on that roll if they hit. You can use this feature only once per night."
      }
    ],
    "levelRequirementReason": "This basic yet useful tool requires no particular skill or level to operate, allowing even the newest adventurers to benefit from its capabilities.",
    "vendorReason": "Wario Direct specializes in unique and practical items that can be found nowhere else, making this periscope a natural fit for their inventory.",
    "shippingDetail": "Delivered within three days of purchase with express handling.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous (Night Vision Advantage) / Until the end of your next short or long rest (Spotting Ally's Attack)",
      "endsWhen": "The effects expire as per their duration descriptions or when you use it again.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from rare materials and designed for utility in dark environments, the Koopa Trench Periscope is a balanced purchase that fits its uncommon rarity.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-23T21:54:54.629787+00:00",
    "aiReviewedAt": "2026-07-23T21:54:54.629787+00:00",
    "aiReviewVersion": 1
  },
  "night_boo_campfire_log": {
    "id": "night_boo_campfire_log",
    "name": "Boo Campfire Log",
    "description": "The Boo Campfire Log burns with a cold, eerie blue flame that casts an unsettling glow over the night. This log, crafted from ancient wood said to have been felled by spectral hands, attracts the talkative dead who gather nearby, eager to share tales of forgotten battles and lost souls. The log’s flames are known to provide a fleeting but powerful connection to the past, granting the party insight into historical events during one night's rest.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🪵",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Attracts Ghostly Witnesses",
      "Provides Historical Insight"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Swift Courier Services",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Attracts Ghostly Witnesses",
        "rules": "Upon lighting this log for a short rest, the area within 60 feet becomes a focal point for nearby restless spirits. These ghosts remain passive but offer cryptic insights into past events, particularly during one collective History or Lore check about significant historical battles or figures."
      },
      {
        "title": "Provides Historical Insight",
        "rules": "The party gains advantage on one collective History or Lore check related to a specific historical event of your choice. This effect lasts until the end of their next short rest after using the log."
      }
    ],
    "levelRequirementReason": "This item is designed for newer adventurers who might benefit from a tool that helps them learn more about historical events and connect with the lore of the land.",
    "vendorReason": "Wario Direct specializes in unique, hard-to-find items, including those that offer a connection to history and the supernatural, making this log an ideal addition to their catalog.",
    "shippingDetail": "Delivered within one night's rest, ensuring players can start using it immediately upon arrival.",
    "usage": {
      "activation": "Lit for a short rest during nighttime hours.",
      "duration": "One collective History or Lore check per short rest.",
      "endsWhen": "After three uses; the log crumbles into ordinary ash thereafter.",
      "charges": "Limited to three uses"
    },
    "priceReason": "The item's rarity and unique historical value justify its price, providing a valuable tool for both learning and adventuring.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T21:55:28.487386+00:00",
    "aiReviewedAt": "2026-07-23T21:55:28.487386+00:00",
    "aiReviewVersion": 1
  },
  "night_starlit_shy_guy_lantern": {
    "id": "night_starlit_shy_guy_lantern",
    "name": "Starlit Shy Guy Lantern",
    "description": "The Starlit Shy Guy Lantern casts an ethereal glow under a starry sky, its mask resembling the bashful character from Mushroom Kingdom. This lantern provides a 30-foot radius of bright light in the center and dim light for another 30 feet outward, yet it remains cleverly concealed, as enemies can only discern your general direction but not pinpoint your exact location. Crafted with a unique blend of starlight dust and Shy Guy essence, this lantern is an artifact from Wario's eccentric workshop. It sputters and extinguishes during storms or heavy cloud cover, making clear skies essential for its full effect.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏮",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Starlight Guidance",
      "Concealed Presence"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Superstar Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Starlight Guidance",
        "rules": "Under clear starry skies, the lantern provides a bright and dim light in a 30-foot radius. Enemies can only determine your general direction but not your exact position; this advantage applies to Survival checks for nighttime navigation by stars."
      },
      {
        "title": "Concealed Presence",
        "rules": "The lantern sputters and goes out during storms or heavy cloud cover, requiring clear skies for its full effect. This property adds an additional layer of stealth when used in conjunction with the Starlight Guidance."
      }
    ],
    "levelRequirementReason": "This lantern is designed to be accessible to lower-level adventurers who benefit from enhanced visibility and stealth during night-time navigation.",
    "vendorReason": "Wario Direct specializes in unique and eccentric items, making the Starlit Shy Guy Lantern a fitting addition to their inventory.",
    "shippingDetail": "Delivered swiftly by Superstar Couriers; pick-up only within the Mushroom Kingdom.",
    "usage": {
      "activation": "Passive effect active under clear starry skies.",
      "duration": "Instantaneous, reactivates when conditions are met.",
      "endsWhen": "Storms or heavy cloud cover obscure the sky.",
      "charges": "Unlimited, recharges with starlight."
    },
    "priceReason": "The Starlit Shy Guy Lantern offers a unique combination of light and stealth benefits at a price that reflects its rarity and utility for lower-level adventurers.",
    "priceOriginal": 13000,
    "priceReviewedAt": "2026-07-23T21:55:23.104227+00:00",
    "aiReviewedAt": "2026-07-23T21:55:23.104227+00:00",
    "aiReviewVersion": 1
  },
  "night_toad_rebel_signal_whistle": {
    "id": "night_toad_rebel_signal_whistle",
    "name": "Toad Rebel Signal Whistle",
    "description": "The Toad Rebel Signal Whistle is a two-tone, brass contraption forged in the shadows of the Mushroom Kingdom's resistance cells. Crafted from stolen royal metal and imbued with whispers of rebellion, it can call sympathetic commoners or resistance fighters to action after curfew. When blown, it echoes through the streets like a rallying cry, drawing guards into confusion as it grants advantage on search checks. The whistle's shrill tone is said to be heard by even the most vigilant sentries, turning their own ears against them.",
    "category": "equipment",
    "price": 1000,
    "icon": "📯",
    "stock": 4,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Signal for Resistance",
      "Guard Disruption"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Toad Resistance Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Signal for Resistance",
        "rules": "When activated as a bonus action, this whistle can call nearby sympathetic commoners or resistance fighters to join the cause. The DM determines if 1–3 low-CR NPC allies are drawn to the area within hearing range. These allies have advantage on Charisma checks related to underground Toad groups and related activities that night."
      },
      {
        "title": "Guard Disruption",
        "rules": "Any guard who hears the whistle must make a Wisdom (Perception) saving throw with a DC of 12 or become confused for 1 minute. During this time, they have disadvantage on all attacks and ability checks unless they succeed on another Perception save."
      }
    ],
    "levelRequirementReason": "It requires minimal proficiency to operate the whistle effectively.",
    "vendorReason": "Wario Direct supplies essential tools for any resistance movement, from stolen goods to covert communication devices.",
    "shippingDetail": "Delivered by Toad couriers who ensure the whistle reaches its destination securely and swiftly through back alleys and hidden paths.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous signal, confusion lasts until the next dawn",
      "endsWhen": "Disruption ends when the confused guard regains their senses or upon sunrise",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The whistle's rarity and craftsmanship justify its price, as it is a vital tool for resistance fighters.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-23T21:55:21.423243+00:00",
    "aiReviewedAt": "2026-07-23T21:55:21.423243+00:00",
    "aiReviewVersion": 1
  },
  "night_luigi_flashlight_of_cowardice": {
    "id": "night_luigi_flashlight_of_cowardice",
    "name": "Luigi’s Flashlight of Cowardice",
    "description": "Luigi’s Flashlight of Cowardice is a peculiar green flashlight that shivers in your hand when you switch it on. Crafted from an old, rusted metal, its beam has a peculiar quality that unsettles even the bravest souls. It's said to have been found in the remnants of Wario’s abandoned workshop during the night, a relic left behind by Luigi himself. When aimed at ghostly or undead creatures, it forces them to make a Wisdom saving throw (DC 14) or suffer disadvantage on their next attack roll. The flashlight also offers a once-per-long-rest boost: while clutching it and shouting 'Goomba Smiter,' you gain advantage on a single save against fear.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔦",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Ghostly Disadvantage",
      "Fearless Boost"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Express Couriers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Ghostly Disadvantage",
        "rules": "When aimed at ghostly or undead creatures, the flashlight forces them to make a Wisdom saving throw (DC 14). On failure, they must suffer disadvantage on their next attack roll. This effect can be used once per short rest."
      },
      {
        "title": "Fearless Boost",
        "rules": "While clutching Luigi’s Flashlight of Cowardice and shouting 'Goomba Smiter,' you gain advantage on a single save against fear. You can use this ability once per long rest."
      }
    ],
    "levelRequirementReason": "This flashlight is designed for those who are just starting to venture into the more dangerous aspects of adventuring.",
    "vendorReason": "Wario, ever the opportunist, has decided to sell this peculiar relic as a way to attract night-time shoppers looking for something offbeat and potentially useful.",
    "shippingDetail": "Delivered within one night cycle via Express Couriers. Pickup only is also available.",
    "usage": {
      "activation": "Using the flashlight requires an action, while shouting its catchphrase 'Goomba Smiter' grants advantage on a single save against fear.",
      "duration": "Duration varies by effect: Ghostly Disadvantage lasts until the creature makes its next attack roll. Fearless Boost is used once per long rest and lasts for the duration of one saving throw.",
      "endsWhen": "The effects end when their durations expire or when you stop clutching the flashlight in a fear save situation.",
      "charges": "Unlimited uses, as it recharges after each short and long rest."
    },
    "priceReason": "Considering its unique abilities to both disrupt undead and bolster bravery during moments of fear, this flashlight offers good value for the price.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:55:15.543382+00:00",
    "aiReviewedAt": "2026-07-23T21:55:15.543382+00:00",
    "aiReviewVersion": 1
  },
  "night_ration_of_starlight_mushroom_soup": {
    "id": "night_ration_of_starlight_mushroom_soup",
    "name": "Ration of Starlight Mushroom Soup",
    "description": "A sealed jar of silver-flecked mushroom broth, this Ration of Starlight Mushroom Soup is crafted from a rare mushroom that only blooms under lunar cycles. When consumed beneath the stars at night, it grants darkvision out to 120 feet (or +60 ft if you already have it) for 8 hours and bestows advantage on one Wisdom saving throw during this time. Consuming it in daylight causes your body to falter; you gain disadvantage on Initiative rolls until after a long rest.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🥣",
    "stock": 4,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Night Vision Boost",
      "Wisdom Saving Throw Advantage"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Moonlight Courier Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Night Vision Boost",
        "rules": "Activates when consumed at night. Provides darkvision out to 120 feet for 8 hours or +60 feet if you already have darkvision, with no save required."
      },
      {
        "title": "Wisdom Saving Throw Advantage",
        "rules": "Grants advantage on one Wisdom saving throw during the duration of night vision. Ends when the darkvision ends."
      }
    ],
    "levelRequirementReason": "The rare ingredients and crafting process ensure this ration is accessible to lower-level adventurers.",
    "vendorReason": "Wario Direct specializes in exotic and hard-to-find curiosities, making this ration available to their discerning clientele.",
    "shippingDetail": "Delivered by Moonlight Courier Express; delivery is only possible at night under a clear sky.",
    "usage": {
      "activation": "Eaten at night for its effects",
      "duration": "8 hours or until consumed in daylight",
      "endsWhen": "Exhausted upon being eaten during the day or after 8 hours of use",
      "charges": "Unlimited, as it is a single-use ration"
    },
    "priceReason": "The rare ingredients and crafting process justify its fair value of 1000 XP.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-23T21:55:31.048066+00:00",
    "aiReviewedAt": "2026-07-23T21:55:31.048066+00:00",
    "aiReviewVersion": 1
  },
  "night_garlic_investment_bond": {
    "id": "night_garlic_investment_bond",
    "name": "Wario’s Garlic Investment Bond",
    "description": "Wario’s Garlic Investment Bond is a noxious-smelling bond certificate with 'Lucrative Nocturnal Returns' printed on it. Each week, at midnight, you receive a mysterious payment of 1d4×1000 gold pieces from this bond. However, after four payouts, your luck runs thin; you must roll a d20 each subsequent week—on a 1–3, the scheme collapses and you gain nothing further, but on a 4–20, it continues for another four weeks.",
    "category": "services",
    "price": 500,
    "icon": "💰",
    "stock": 1,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Nightly Dividend",
      "Uncertain Future"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Toadstool Express",
    "levelRequirement": 5,
    "warning": "It’s not a pyramid scheme. Wario prefers the term 'triangle of opportunity'.",
    "effectDetails": [
      {
        "title": "Nightly Dividend",
        "rules": "At the start of your turn every in-game week at midnight, you gain a payment of 1d4×1000 gold pieces. This effect is passive and does not require any action."
      },
      {
        "title": "Uncertain Future",
        "rules": "After receiving four payments, roll a d20 each subsequent week. On a result of 1–3, the bond collapses, and you receive no further payments; on a result of 4–20, the bond continues for another four weeks."
      }
    ],
    "levelRequirementReason": "This bond requires at least 5th level to handle its mysterious nature and potential risks.",
    "vendorReason": "Only Wario would offer such a questionable investment opportunity directly.",
    "shippingDetail": "Delivery is immediate, but you must pick up the bond in person from Wario's office at night.",
    "usage": {
      "activation": "Passive and automatic every week at midnight.",
      "duration": "Until the bond collapses or continues as per the roll of a d20.",
      "endsWhen": "On rolling 1-3, after four weeks; on rolling 4-20, it continues for another four weeks.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the weekly risk and potential reward of this uncertain investment.",
    "priceOriginal": 30000,
    "priceReviewedAt": "2026-07-23T21:55:37.862811+00:00",
    "aiReviewedAt": "2026-07-23T21:55:37.862811+00:00",
    "aiReviewVersion": 1
  },
  "wario_recipe_garlic_grenade_soup": {
    "id": "wario_recipe_garlic_grenade_soup",
    "name": "Recipe: Garlic Grenade Soup",
    "description": "The Recipe: Garlic Grenade Soup is a culinary creation of Wario's culinary prowess. This potent concoction, when served in a steaming pot, can be thrown like an explosive, dealing 1d8 fire damage to all creatures within a 10-foot radius. Those who smell it must succeed on a Constitution saving throw (DC 13) or take 2d6 poison damage and become poisoned for the duration of their next short rest. Drinking this soup grants temporary immunity to poison for an hour but comes with a painful cost, taking 1d6 poison damage immediately.",
    "price": 1000,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Poisonous Inhalation",
      "Explosive Pot"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wafting Cloud Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Poisonous Inhalation",
        "rules": "Any creature within 10 feet who smells the soup must make a Constitution saving throw (DC 13). On a failed save, they take 2d6 poison damage and become poisoned for the duration of their next short rest. The effect ends if the creature moves more than 10 feet away from the source or succeeds on another saving throw."
      },
      {
        "title": "Explosive Pot",
        "rules": "The pot can be thrown as a bonus action, dealing 1d8 fire damage to all creatures within a 10-foot radius. The effect ends if the user moves more than 30 feet away from where they threw it or if the pot is destroyed."
      }
    ],
    "levelRequirementReason": "This recipe can be used by any character, making it accessible for all levels.",
    "vendorReason": "Wario Land is known for his culinary experiments and this explosive soup is one of his latest creations.",
    "shippingDetail": "The delivery time is typically two days, but it can vary based on weather conditions in the Mushroom Kingdom.",
    "usage": {
      "activation": "Bonus action to throw; passive while smelling or drinking",
      "duration": "Instantaneous and short rest for poisoning effect",
      "endsWhen": "On a successful save, moving away from source, or destruction of the pot",
      "charges": "Unlimited"
    },
    "priceReason": "The recipe is priced at 1000 XP to reflect its unique combination of culinary and combat utility.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T21:55:42.386248+00:00",
    "aiReviewedAt": "2026-07-23T21:55:42.386248+00:00",
    "aiReviewVersion": 1
  },
  "halfling_recipe_second_breakfast_surprise": {
    "id": "halfling_recipe_second_breakfast_surprise",
    "name": "Recipe: Second Breakfast Surprise",
    "description": "The Recipe for Second Breakfast Surprise is a handwritten parchment that, when consumed, transforms ordinary food into a feast fit for a king. The aroma alone can charm even the most suspicious of diners, and it provides an entire meal's worth of sustenance without the need to prepare anything else until your next mealtime. Enemies nearby are left bewildered by its delicious magic, giving you a significant advantage in social interactions or stealth missions.",
    "price": 1000,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Enemy Confusion",
      "Full for Eight Hours"
    ],
    "vendor": "halfling",
    "shippedBy": "Hobbit Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enemy Confusion",
        "rules": "When consumed, the Recipe grants advantage on Deception checks against any creature within a 30-foot radius. The effect lasts for one hour and is expended when used."
      },
      {
        "title": "Full for Eight Hours",
        "rules": "Eating this recipe satisfies hunger for eight hours, reducing the need to consume other meals during that time. This effect ends if you eat another meal or if your character's hunger condition changes."
      }
    ],
    "levelRequirementReason": "This simple yet effective recipe is accessible to all adventurers just starting their journey.",
    "vendorReason": "The Halflings are renowned for their culinary expertise and often share their secrets with the world through such recipes.",
    "shippingDetail": "Delivered by trusted Hobbit Post couriers, ensuring the recipe arrives in perfect condition.",
    "usage": {
      "activation": "Eating the Recipe",
      "duration": "One Hour for Enemy Confusion; Eight Hours of Sustenance",
      "endsWhen": "Used or consumed another meal",
      "charges": "Unlimited"
    },
    "priceReason": "The recipe's value lies in its utility and the unique advantage it provides, making it a worthwhile investment for any adventurer.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-23T21:55:57.916715+00:00",
    "aiReviewedAt": "2026-07-23T21:55:57.916715+00:00",
    "aiReviewVersion": 1
  },
  "mages_guild_recipe_spell_slot_soup": {
    "id": "mages_guild_recipe_spell_slot_soup",
    "name": "Recipe: Spell Slot Soup",
    "description": "A steaming bowl of this soup is made from shredded spell scrolls and enchanted with arcane energies. Consuming it restores one 1st-level spell slot, but you'll feel a tingling in your fingertips for an hour, as if the magic is still settling within you. The flavor is indescribable, a mix of parchment and ink that lingers on your tongue, granting you disadvantage on Persuasion checks for the same duration.",
    "price": 1000,
    "icon": "📜",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Spell Slot Restoration",
      "Taste of Magic"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spell Slot Restoration",
        "rules": "Activates as a bonus action. Restores one expended 1st-level spell slot immediately after consumption."
      },
      {
        "title": "Taste of Magic",
        "rules": "You are disadvantaged on all Persuasion checks for 1 hour, and you emit a faint glow from the residual magic in your body (disadvantage on Stealth checks during this time)."
      }
    ],
    "levelRequirementReason": "This simple yet powerful recipe is accessible to beginners but still requires basic arcane knowledge.",
    "vendorReason": "The Mages Guild provides this unique item as a way for novice mages to practice and experiment with spellcasting in a safe, flavorful manner.",
    "shippingDetail": "Ships via the Arcane Relay within one day of purchase.",
    "usage": {
      "activation": "Bonus action upon consumption",
      "duration": "Until the end of your next long rest",
      "endsWhen": "If you consume another bowl or finish a long rest",
      "charges": "Unlimited, as it regenerates with each meal"
    },
    "priceReason": "The rare ingredients and arcane energies required to create this soup make it a valuable yet balanced purchase for young wizards.",
    "priceOriginal": 8200,
    "priceReviewedAt": "2026-07-23T21:55:46.691617+00:00",
    "aiReviewedAt": "2026-07-23T21:55:46.691617+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_recipe_mithril_ale_brew": {
    "id": "dwarf_realms_recipe_mithril_ale_brew",
    "name": "Recipe: Mithril Ale Brew",
    "description": "The Recipe: Mithril Ale Brew, a parchment detailing the ancient art of crafting an ale so potent it can dent even the strongest armor. Crafted in the heart of the Dwarf Realms from mithral and hallowed water, this recipe imparts its drinker with resilience. For a brief hour, the imbiber's constitution is bolstered against danger, yet their reflexes are dulled for twice as long. A sip can also ignite small flames, dealing minor fire damage to flammable objects within reach.",
    "price": 1000,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Fortified Constitution",
      "Reframed Reflexes"
    ],
    "vendor": "dwarf_realms",
    "shippedBy": "Sturdy Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fortified Constitution",
        "rules": "When consumed, this recipe grants the drinker advantage on Constitution saving throws for 1 hour. This effect ends when the drinker finishes a long rest."
      },
      {
        "title": "Reframed Reflexes",
        "rules": "For 2 hours after consumption, the drinker has disadvantage on Dexterity checks and ability checks that involve quick movement or finesse. This effect expires upon finishing a short rest."
      }
    ],
    "levelRequirementReason": "This recipe is accessible to all adventurers, providing an immediate boost without requiring high-level expertise.",
    "vendorReason": "The Dwarf Realms brews this ale and shares its secrets through this parchment, making it a staple of their offerings.",
    "shippingDetail": "Delivered by the Sturdy Cart, known for its reliable deliveries within the realm.",
    "usage": {
      "activation": "Consumed as an action or bonus action.",
      "duration": "Advantage on Constitution saving throws lasts for 1 hour; disadvantage on Dexterity checks and ability checks lasts for 2 hours.",
      "endsWhen": "These effects end when the drinker finishes a long rest (Constitution) or short rest (Dexterity).",
      "charges": "Unlimited, as it is consumed rather than used."
    },
    "priceReason": "This recipe offers significant benefits at an accessible price point for any adventurer starting their journey.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-23T21:56:07.813790+00:00",
    "aiReviewedAt": "2026-07-23T21:56:07.813790+00:00",
    "aiReviewVersion": 1
  },
  "greenskins_recipe_waaagh_stew": {
    "id": "greenskins_recipe_waaagh_stew",
    "name": "Recipe: WAAAGH! Stew",
    "description": "The Recipe: WAAAGH! Stew is a handwritten parchment detailing the chaotic feasts of the Greenskin warriors. Consuming it makes you crave battle, turning your mind and body into a berserker's forge. It grants +2 to attack rolls for an hour but compels you to attack anything nearby. Those who partake must make a Wisdom saving throw (DC 13) each round or be driven by the primal urge to fight. While under its influence, fear is impossible, and your body feels as though it's made of unyielding green steel.",
    "price": 1000,
    "icon": "📜",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "+2 to attack rolls for 1 hour",
      "Must attack nearest creature each round (Wis save DC 13 to resist)"
    ],
    "vendor": "greenskins",
    "shippedBy": "Choppa Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Berserker's Feast",
        "rules": "Activates on consumption. Lasts for one hour or until the consumer makes a successful Wisdom saving throw, ends when consumed, and has no recharge."
      },
      {
        "title": "Unyielding Resolve",
        "rules": "Active while consuming. Provides immunity to fear effects but requires the consumer to make a Wisdom save each round against nearby creatures; failing this compels you to attack the nearest creature until successful or the effect ends."
      }
    ],
    "levelRequirementReason": "This recipe is accessible to all adventurers, as it's not inherently dangerous but requires self-control.",
    "vendorReason": "The Greenskin vendors are experts in their own ferocity and know that this recipe can be a useful tool for any brave soul looking to test their mettle in the battlefield.",
    "shippingDetail": "Delivered by fast-moving choppas, ensuring the stew is fresh upon arrival but may result in some minor spills during transit.",
    "usage": {
      "activation": "Eaten as a meal",
      "duration": "One hour or until consumed",
      "endsWhen": "Consumption completes or a successful Wisdom save is made",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the rarity and the unique challenge presented by this recipe, balancing its chaotic nature with its utility.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-23T21:56:09.840491+00:00",
    "aiReviewedAt": "2026-07-23T21:56:09.840491+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_regency_recipe_poison_mushroom_deluxe": {
    "id": "mushroom_regency_recipe_poison_mushroom_deluxe",
    "name": "Recipe: Poison Mushroom Deluxe",
    "description": "The Recipe for Poison Mushroom Deluxe is a clandestine culinary secret from the enigmatic Mushroom Regency. This deadly delicacy, when consumed by foes, unleashes a noxious spore that sickens and debilitates with 2d6 poison damage. Yet, if you partake in it, you are rewarded with 2d6 temporary hit points, providing a reprieve from the toxic wrath of your enemies. Toadkin are particularly repulsed by its presence, causing them to approach with caution, giving you an edge in negotiations or combat.",
    "price": 1000,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Poisonous Delight",
      "Toad's Disgust"
    ],
    "vendor": "mushroom_regency",
    "shippedBy": "Goomba Ground Transport",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Poisonous Delight",
        "rules": "When consumed by enemies, the Poison Mushroom Deluxe deals 2d6 poison damage to them. You gain 2d6 temporary hit points if you consume it yourself (immune to its poison). This effect has no save DC and does not expend charges."
      },
      {
        "title": "Toad's Disgust",
        "rules": "When consumed by Toads, they suffer a -2 penalty on Charisma checks and saving throws against your effects. This lasts until the end of their next turn unless they succeed on a DC 13 Constitution saving throw."
      }
    ],
    "levelRequirementReason": "The recipe requires basic knowledge of how to prepare and consume the mushroom safely.",
    "vendorReason": "Mushroom Regency specializes in exotic and dangerous mushrooms, making this recipe a staple in their product line.",
    "shippingDetail": "Due to its volatile nature, the mushroom must be couriered within 24 hours of purchase.",
    "usage": {
      "activation": "Passive effect when consumed by enemies or you.",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted upon use; no recharge.",
      "charges": "Unlimited"
    },
    "priceReason": "The unique and potentially lethal nature of the mushroom justifies a higher price point.",
    "priceOriginal": 7200,
    "priceReviewedAt": "2026-07-23T21:56:15.573581+00:00",
    "aiReviewedAt": "2026-07-23T21:56:15.573581+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_kingdom_recipe_royal_bean_feast": {
    "id": "beanbean_kingdom_recipe_royal_bean_feast",
    "name": "Recipe: Royal Bean Feast",
    "description": "This ancient parchment outlines a royal feast fit for a king's appetite. When prepared with fresh beans from Beanbean Kingdom, it feeds ten guests and boosts their Constitution by +1 to saves against poisons for an entire day. But beware—the gas that fills the air can poison those unaccustomed to the aroma unless they succeed on a DC 12 Constitution save. The feast also enhances your charm among bean enthusiasts, granting advantage on Charisma checks with them.",
    "price": 1000,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Feast of Ten",
      "Poisonous Gas"
    ],
    "vendor": "beanbean_kingdom",
    "shippedBy": "Beanstalk Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Feast of Ten",
        "rules": "Activates when the feast is prepared, providing a +1 bonus to Constitution saving throws against poison for 24 hours for all ten guests. Ends if any guest fails their Constitution save due to gas poisoning."
      },
      {
        "title": "Poisonous Gas",
        "rules": "All guests must make a DC 12 Constitution saving throw or be poisoned by the gas, which lasts for 1 hour. Advantage on Charisma checks with bean enthusiasts while the gas is active."
      }
    ],
    "levelRequirementReason": "This recipe requires no special prerequisite beyond basic cooking skills.",
    "vendorReason": "Beanbean Kingdom is renowned for its expertise in royal feasts and bean cultivation.",
    "shippingDetail": "Ships fresh from Beanbean Kingdom, ensuring the beans are of top quality when delivered.",
    "usage": {
      "activation": "Preparation of the feast by a cook or chef with at least one free hand and concentration for the duration of preparation (10 minutes).",
      "duration": "24 hours for the +1 Constitution bonus; poisonous gas lasts until all guests succeed on their save checks.",
      "endsWhen": "The effect ends if any guest fails their saving throw due to gas poisoning or when the parchment is destroyed.",
      "charges": "Unlimited, as it is a recipe."
    },
    "priceReason": "This uncommon item offers significant benefits for social encounters and survival in poison-rich environments, making its price fair.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T21:56:13.644061+00:00",
    "aiReviewedAt": "2026-07-23T21:56:13.644061+00:00",
    "aiReviewVersion": 1
  },
  "dk_crew_recipe_banana_bomb_pudding": {
    "id": "dk_crew_recipe_banana_bomb_pudding",
    "name": "Recipe: Banana Bomb Pudding",
    "description": "This recipe for Banana Bomb Pudding is a dessert that not only tantalizes the taste buds but also brings chaos. When served, it emits a cloud of banana-flavored mist that, upon contact with living creatures within 10 feet, forces them to make a DC 14 Dexterity saving throw or be blinded by the overwhelming banana mush. Additionally, consuming even a crumb grants temporary hit points equal to 2d8 HP but requires you to shout 'BANANA SLAMMA!' at the top of your lungs, drawing unwanted attention from nearby primates.",
    "price": 1000,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Banana Bomb Cloud",
      "Energetic Banana Boost"
    ],
    "vendor": "dk_crew",
    "shippedBy": "Barrel Roll Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Banana Bomb Cloud",
        "rules": "When activated by serving the pudding, a cloud of banana mist is released within 10 feet. Creatures in this area must make a DC 14 Dexterity saving throw or be blinded for 1 minute."
      },
      {
        "title": "Energetic Banana Boost",
        "rules": "Consuming even a small part grants the eater 2d8 temporary hit points but also requires them to shout 'BANANA SLAMMA!' at once, drawing the attention of nearby monkeys and other primates. This effect lasts for 1 hour."
      }
    ],
    "levelRequirementReason": "This dessert is simple enough for any adventurer to prepare without needing a higher level.",
    "vendorReason": "The DK Crew frequently travels through banana-rich territories and has adapted their menus to include such items.",
    "shippingDetail": "Ships in custom, insulated containers to ensure the pudding remains fresh upon arrival.",
    "usage": {
      "activation": "Activate by serving the pudding.",
      "duration": "Instantaneous for each target hit; ongoing effect lasts until the end of the encounter.",
      "endsWhen": "The effects expire at the end of the encounter or when consumed, whichever comes first.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced against other common consumables that provide temporary hit points.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T21:56:24.177771+00:00",
    "aiReviewedAt": "2026-07-23T21:56:24.177771+00:00",
    "aiReviewVersion": 1
  },
  "yoshi_clans_recipe_egg_shell_soup": {
    "id": "yoshi_clans_recipe_egg_shell_soup",
    "name": "Recipe: Eggshell Soup",
    "description": "The Recipe: Eggshell Soup is a surprisingly nutritious broth made from crushed eggshells sourced directly from the Yoshis' hatching grounds. This ancient recipe grants a +1 bonus to AC for an hour, bolstering your defenses with nature's calcium-rich fortitude. However, it also stiffens your joints, imposing disadvantage on Dexterity checks during this time. Yoshis are particularly sensitive to the soup; any encounter with them while under its effects brings about an additional layer of social awkwardness.",
    "price": 1000,
    "icon": "📜",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Calcium Boost",
      "Stiff Joints"
    ],
    "vendor": "yoshi_clans",
    "shippedBy": "Egg Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Calcium Boost",
        "rules": "You gain a +1 bonus to AC for 1 hour. This effect ends early if you take any action that requires concentration."
      },
      {
        "title": "Stiff Joints",
        "rules": "You have disadvantage on Dexterity checks and saving throws while this effect is active. The effect lasts for 1 hour, but it can be ended earlier by taking an action or a bonus action to stretch or relax."
      }
    ],
    "levelRequirementReason": "This recipe is simple enough that even the lowest-level adventurers can afford and benefit from its effects.",
    "vendorReason": "Yoshis are proud of their traditional recipes, and it's only natural for them to offer this soup to those seeking a boost in vitality.",
    "shippingDetail": "Shipped fresh daily by the Egg Drop, ensuring the calcium-rich properties remain potent.",
    "usage": {
      "activation": "Passive effect upon consumption.",
      "duration": "1 hour per serving.",
      "endsWhen": "The effect ends if you take an action that requires concentration or if you stretch to relax your joints.",
      "charges": "Unlimited, as the effects are temporary and do not deplete resources."
    },
    "priceReason": "This price reflects its uncommon rarity and the unique, natural ingredients used in this recipe.",
    "priceOriginal": 5900,
    "priceReviewedAt": "2026-07-23T21:56:27.109129+00:00",
    "aiReviewedAt": "2026-07-23T21:56:27.109129+00:00",
    "aiReviewVersion": 1
  },
  "kremling_krew_recipe_cannonball_chowder": {
    "id": "kremling_krew_recipe_cannonball_chowder",
    "name": "Recipe: Cannonball Chowder",
    "description": "A thick stew with iron-rich chunks, this Recipe: Cannonball Chowder is a hearty concoction that fortifies your body and betrays your smile. When consumed, it grants +2 to Strength checks for 1 hour, making you a force to be reckoned with in physical tasks. However, the recipe's secret ingredient, a rare type of iron shavings, ensures that metal detectors react around you for the same duration, guaranteeing your presence is noted wherever you go.",
    "price": 1000,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+2 to Strength checks",
      "Metal detectors react"
    ],
    "vendor": "kremling_krew",
    "shippedBy": "Cannonball Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Strength",
        "rules": "When consumed, this recipe grants +2 to all Strength checks for 1 hour. The effect ends if the chef stops using it or after 1 hour."
      },
      {
        "title": "Metal Detector Alert",
        "rules": "For 1 hour after consumption, metal detectors react around you as though you were carrying a significant amount of iron. This effect ends when the duration expires or the recipe is consumed by another person."
      }
    ],
    "levelRequirementReason": "This simple yet effective recipe can be used by any adventurer to boost their physical capabilities in a pinch.",
    "vendorReason": "Kremling Krew is known for its eccentric and practical recipes, making this chowder an expected offering from them.",
    "shippingDetail": "Shipped with the same day priority, ensuring you receive your recipe in time for a hearty meal.",
    "usage": {
      "activation": "Eating the stew",
      "duration": "1 hour",
      "endsWhen": "After 1 hour or when consumed by another person",
      "charges": "Unlimited"
    },
    "priceReason": "The uncommon nature of iron shavings and the unique recipe make this a valuable but not overly expensive item for adventurers.",
    "priceOriginal": 6400,
    "priceReviewedAt": "2026-07-23T21:56:30.345186+00:00",
    "aiReviewedAt": "2026-07-23T21:56:30.345186+00:00",
    "aiReviewVersion": 1
  },
  "lizardmen_recipe_swamp_sushi": {
    "id": "lizardmen_recipe_swamp_sushi",
    "name": "Recipe: Swamp Sushi",
    "description": "This parchment lists a recipe for Swamp Sushi, a delicacy crafted from raw fish found in the stagnant waters of the swamps. The sushi is known to be an acquired taste, with its slimy texture and pungent flavor that can either delight or disgust. Consuming it grants you advantage on saving throws against diseases for 1 hour, but there's a catch: if you roll a natural 1, you automatically contract a minor disease regardless of your Constitution save result.",
    "price": 1000,
    "icon": "📜",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Advantage on saves vs. disease",
      "Minor disease risk"
    ],
    "vendor": "lizardmen",
    "shippedBy": "Murky Waters Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Saves vs Disease",
        "rules": "You gain advantage on saving throws against diseases for 1 hour after consuming the sushi."
      },
      {
        "title": "Minor Disease Risk",
        "rules": "If you roll a natural 1 on your Constitution saving throw, you automatically contract a minor disease. This effect has no save DC and can only occur once per day."
      }
    ],
    "levelRequirementReason": "The recipe is simple enough for even the most novice adventurers to understand.",
    "vendorReason": "Lizardmen are known to have a unique relationship with swamp flora and fauna, making them experts in creating such exotic dishes.",
    "shippingDetail": "The sushi must be consumed within 24 hours of delivery or it spoils and becomes hazardous.",
    "usage": {
      "activation": "Instantaneous consumption upon acquiring the recipe.",
      "duration": "1 hour for advantage on saving throws against diseases; minor disease risk is a one-time effect per day.",
      "endsWhen": "The effects expire after the stated duration or if consumed outside its shelf life.",
      "charges": "Unlimited"
    },
    "priceReason": "The recipe represents valuable knowledge that can be used in various adventuring scenarios, justifying its moderate price.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-23T21:56:32.248498+00:00",
    "aiReviewedAt": "2026-07-23T21:56:32.248498+00:00",
    "aiReviewVersion": 1
  },
  "halfling_recipe_herb_crusted_pie": {
    "id": "halfling_recipe_herb_crusted_pie",
    "name": "Recipe: Herb-Crusted Comfort Pie",
    "description": "A pie that tastes like home, crafted by Halfling hands from a family recipe passed down through generations. The flaky crust is studded with fresh herbs, and the filling brims with nostalgia. After consuming this pie, you are momentarily transported to your home, feeling safe and content for an hour. However, you become homesick if you venture too far from familiar surroundings, giving you a disadvantage on all ability checks while away.",
    "price": 1000,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Removes one level of exhaustion",
      "Advantage on saves vs. fear"
    ],
    "vendor": "halfling",
    "shippedBy": "Hobbit Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restoration of Exhaustion",
        "rules": "Consume the pie as an action to remove one level of exhaustion. The effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Fear Resistance",
        "rules": "For 8 hours after eating the pie, you have advantage on saving throws against fear effects and being frightened."
      }
    ],
    "levelRequirementReason": "This recipe is simple enough for any character to understand but requires the right ingredients and care in preparation.",
    "vendorReason": "Halflings are known for their culinary skills, and this pie represents a cherished family tradition they proudly share.",
    "shippingDetail": "Ships within 2 days with the signature speed of the Hobbit Post.",
    "usage": {
      "activation": "Consume as an action",
      "duration": "One hour, until your next short or long rest for exhaustion removal; 8 hours for fear resistance advantage",
      "endsWhen": "At the end of a short or long rest (for exhaustion) or after 8 hours (for fear resistance)",
      "charges": "Unlimited, as the pie can be consumed multiple times"
    },
    "priceReason": "The recipe is crafted with high-quality ingredients and the labor of a skilled halfling baker.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-23T21:56:42.472032+00:00",
    "aiReviewedAt": "2026-07-23T21:56:42.472032+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_recipe_iron_gut_stew": {
    "id": "dwarf_realms_recipe_iron_gut_stew",
    "name": "Recipe: Iron Gut Stew",
    "description": "This parchment recipe for Iron Gut Stew is a culinary marvel from the Dwarven Realms. It's said that when prepared by a master chef, this hearty stew can fortify your digestive system against even the harshest of conditions. Savoring its contents grants you immunity to poison for 8 hours and allows you to consume any food or object without risk. However, it also comes with a drawback – you'll be dealing with terrible breath that lasts until the effect ends.",
    "price": 1000,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Immunity to Poison",
      "Indestructible Digestion"
    ],
    "vendor": "dwarf_realms",
    "shippedBy": "Sturdy Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Poison",
        "rules": "You gain immunity to poison for 8 hours. This effect ends when you take damage from a poison or the duration expires."
      },
      {
        "title": "Indestructible Digestion",
        "rules": "For the duration of this effect, you can consume any food, object, or substance without suffering harm. However, your breath becomes terrible and remains so until the effect ends."
      }
    ],
    "levelRequirementReason": "This recipe is accessible to all adventurers regardless of level as it serves a basic survival need.",
    "vendorReason": "The Dwarven Realms are renowned for their culinary expertise and this recipe is one of their finest creations.",
    "shippingDetail": "Shipped by cart, arriving within a week from order placement.",
    "usage": {
      "activation": "Eating the stew",
      "duration": "8 hours or until consumed",
      "endsWhen": "You take poison damage or when the duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the rarity and valuable ingredients used in this recipe from the Dwarven Realms.",
    "priceOriginal": 7400,
    "priceReviewedAt": "2026-07-23T21:56:42.333792+00:00",
    "aiReviewedAt": "2026-07-23T21:56:42.333792+00:00",
    "aiReviewVersion": 1
  },
  "greenskins_recipe_goblin_gumbo_deluxe": {
    "id": "greenskins_recipe_goblin_gumbo_deluxe",
    "name": "Recipe: Goblin Gumbo Deluxe",
    "description": "A clandestine recipe for Goblin Gumbo Deluxe, this stew not only fills your belly but also warps your mind momentarily. When consumed, it grants you a goblin's keen wit and mischief, making you think like one for the next hour. However, beware—failure to resist its influence leaves you acting like a goblin yourself, causing you to unintentionally mimic their behavior and speech. This concoction is a staple among Greenskin cooks, known for its potent effects that have turned the heads of many an adventurer seeking the peculiar flavor of true Goblin Gumbo.",
    "price": 1000,
    "icon": "📜",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Think Like a Goblin",
      "Act Like a Goblin"
    ],
    "vendor": "greenskins",
    "shippedBy": "War Drum",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Think Like a Goblin",
        "rules": "You gain advantage on Stealth checks for 1 hour. Additionally, you can cast the spell *Glibness* (DC 15) once as an action at the start of your turn."
      },
      {
        "title": "Act Like a Goblin",
        "rules": "For 1 minute after consuming the stew, you must make a DC 12 Wisdom saving throw. On a failed save, you act like a goblin for the duration: mimicking their mannerisms and speech, which can be embarrassing or dangerous in certain situations."
      }
    ],
    "levelRequirementReason": "This recipe is simple enough that even low-level characters can partake of its effects.",
    "vendorReason": "Greenskin cooks are known for their unique and potent recipes, making the Goblin Gumbo Deluxe a staple in their offerings.",
    "shippingDetail": "Shipped via a courier who ensures the stew remains hot until delivery, but it must be consumed within 24 hours of arrival.",
    "usage": {
      "activation": "Instantaneous consumption as an action or bonus action.",
      "duration": "1 hour for 'Think Like a Goblin'; 1 minute for 'Act Like a Goblin'.",
      "endsWhen": "The effects end when the duration expires or if you are unconscious.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "The recipe is moderately complex and involves rare ingredients that are hard to source outside of Greenskin territories.",
    "priceOriginal": 6600,
    "priceReviewedAt": "2026-07-23T21:57:07.200248+00:00",
    "aiReviewedAt": "2026-07-23T21:57:07.200248+00:00",
    "aiReviewVersion": 1
  },
  "mages_guild_recipe_mana_muffins": {
    "id": "mages_guild_recipe_mana_muffins",
    "name": "Recipe: Mana Muffins",
    "description": "The Recipe for Mana Muffins, a rare treat from the Mages Guild, is said to be crafted in the heart of their arcane laboratory. These muffins are not just baked goods but magical confections that restore one used spell slot upon consumption. However, if you eat them while casting spells, your concentration falters for an hour, subjecting you to disadvantage on all Concentration checks and saving throws during this time. The faint glow of the Mana Muffin makes it a poor choice for stealth missions.",
    "price": 1000,
    "icon": "📜",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Restores Spell Slot",
      "Disadvantage in Concentration"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Restore Spell Slot",
        "rules": "Eating one Mana Muffin restores one used spell slot. This effect is instant and does not require an action."
      },
      {
        "title": "Disadvantage on Concentration",
        "rules": "If consumed while casting, the eater suffers disadvantage on all Concentration checks and saving throws for 1 hour following consumption."
      }
    ],
    "levelRequirementReason": "The complexity of the recipe requires a minimum level to ensure proper handling.",
    "vendorReason": "Only the Mages Guild has access to the arcane ingredients and knowledge required for this recipe.",
    "shippingDetail": "Mana Muffins are delivered by Arcane Relay, ensuring they remain magically potent throughout transport.",
    "usage": {
      "activation": "Instantaneous consumption of one Mana Muffin.",
      "duration": "Instantaneous and permanent effect on spell slot restoration. Disadvantage lasts for 1 hour starting immediately after consumption.",
      "endsWhen": "The disadvantage ends once the hour has passed.",
      "charges": "Unlimited, as each muffin restores a single spell slot."
    },
    "priceReason": "The rarity and complexity of the ingredients justify this price in XP.",
    "priceOriginal": 8800,
    "priceReviewedAt": "2026-07-23T21:57:02.738887+00:00",
    "aiReviewedAt": "2026-07-23T21:57:02.738887+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_mario_war_hammer": {
    "id": "wario_cw_mario_war_hammer",
    "name": "Civil War Relic: Mario's War Hammer",
    "description": "The Civil War Relic: Mario's War Hammer is a formidable weapon forged in the fires of conflict. Its iron head glows faintly with a reddish hue, and a carved 'M' adorns its wooden handle. This relic was crafted by blacksmiths during the war to combat Koopa tanks, and it bears the scars of countless battles. It grants +2 to attack rolls and deals an additional 1d6 damage to constructs. With a shout of 'MARIO!', Mario can destroy a non-magical Large or smaller object instantly.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔨",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+2 Warhammer",
      "Smash Object"
    ],
    "vendor": "wario_land",
    "shippedBy": "Heavy Package Couriers",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Enhanced Damage",
        "rules": "When you hit with this war hammer, the target takes an additional 1d6 damage. This effect can be used once per day."
      },
      {
        "title": "Smash Object",
        "rules": "You can shout 'MARIO!' to instantly destroy a non-magical Large or smaller object within your reach. You must succeed on a DC 15 Strength (Athletics) check, and failure results in you taking 1d4 psychic damage."
      }
    ],
    "levelRequirementReason": "This relic is designed for seasoned heroes who have faced the trials of battle.",
    "vendorReason": "Wario acquired this relic during his travels and now sells it to those who seek unique artifacts.",
    "shippingDetail": "The weapon is shipped carefully packed in a reinforced wooden crate.",
    "usage": {
      "activation": "Action or Reaction (Shout 'MARIO!' when activating the Smash Object ability)",
      "duration": "Instantaneous for Smash Object; otherwise, until the start of your next turn",
      "endsWhen": "Exhausted after use",
      "charges": "1"
    },
    "priceReason": "This relic is rare and comes with a steep price due to its historical significance and unique abilities.",
    "priceOriginal": 9200,
    "priceReviewedAt": "2026-07-23T21:56:59.119861+00:00",
    "aiReviewedAt": "2026-07-23T21:56:59.119861+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_bowser_war_crown": {
    "id": "wario_cw_bowser_war_crown",
    "name": "Civil War Relic: Bowser's War Crown (Replica)",
    "description": "The Civil War Relic: Bowser's War Crown (Replica) is a tarnished but still imposing crown, its gold and gemstone accents dulled by time. Wario swears it belonged to Bowser himself during the siege of Toad Town. It grants +1 Charisma when speaking with Koopa Troop members, while reducing that bonus by -2 points against anyone else. For a moment of truth, once per day you can breathe a 15-foot cone of fire dealing 2d6 fire damage to all creatures in the area; they must succeed on a DC 13 Dexterity saving throw or take half damage.",
    "category": "equipment",
    "price": 1000,
    "icon": "👑",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+Charisma with Koopa Troop",
      "Fire Cone of Truth"
    ],
    "vendor": "wario_land",
    "shippedBy": "Shell-Carrier Courier",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "+Charisma with Koopa Troop",
        "rules": "You gain a +1 bonus to Charisma checks and saving throws when speaking to members of the Koopa Troop. This effect is not applicable against anyone else."
      },
      {
        "title": "Fire Cone of Truth",
        "rules": "As an action, you can breathe a 15-foot cone of fire dealing 2d6 fire damage to all creatures in the area. Creatures must make a DC 13 Dexterity saving throw or take half damage. The use ends if you are incapacitated."
      }
    ],
    "levelRequirementReason": "This relic is designed for experienced adventurers who can handle its fiery truth-telling power.",
    "vendorReason": "Wario keeps this item in his collection, offering it to those who can appreciate its Koopa history and Bowser's connection.",
    "shippingDetail": "Shipped with care wrapped in old newspaper for safe delivery.",
    "usage": {
      "activation": "Action or Reaction (for the Fire Cone of Truth)",
      "duration": "Instantaneous, until you are incapacitated",
      "endsWhen": "You are incapacitated or use it again",
      "charges": "1 charge per day"
    },
    "priceReason": "The price reflects the item's historical significance and Bowser's connection to the Koopa Troop.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T21:57:00.898441+00:00",
    "aiReviewedAt": "2026-07-23T21:57:00.898441+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_toad_rebel_flag": {
    "id": "wario_cw_toad_rebel_flag",
    "name": "Civil War Relic: Toad Rebel Battle Flag",
    "description": "The Civil War Relic: Toad Rebel Battle Flag is a tattered flag bearing a mushroom emblem and crossed swords. Its crimson stains tell of fierce battles fought by the Toad rebels against Bowser's forces. Held aloft, it grants allies within 30 feet advantage on attack rolls and bestows a +1 bonus to Charisma checks when interacting with fellow Toad loyalists. However, it draws Bowser’s attention, compelling his minions to target you first in combat, forcing them to roll initiative against your disadvantage.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏴",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Toad Ally Advantage",
      "Draws Attention"
    ],
    "vendor": "wario_land",
    "shippedBy": "Toad Trot Transport",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Toad Ally Advantage",
        "rules": "Allies within 30 feet gain advantage on attack rolls while the flag is held. This effect lasts until the end of the owner's next turn."
      },
      {
        "title": "Draws Attention",
        "rules": "Bowser's forces target the holder of this flag first in combat, granting them disadvantage on initiative checks against the user. This effect persists for 1 minute or until the flag is no longer being held."
      }
    ],
    "levelRequirementReason": "This relic requires a character of at least level 3 to wield effectively.",
    "vendorReason": "Wario Land, known for his connections with the Toad rebels, sells this emblematic flag as a symbol of resistance against Bowser’s tyranny.",
    "shippingDetail": "The flag is carefully packed to ensure it arrives in pristine condition, delivered within a week.",
    "usage": {
      "activation": "Held by the owner during combat",
      "duration": "Instantaneous activation; lasts until end of next turn or until no longer held",
      "endsWhen": "Flag ceases to be held, ends at the start of the holder's next turn",
      "charges": "Unlimited uses"
    },
    "priceReason": "The flag is priced moderately given its historical significance and the advantages it provides in combat.",
    "priceOriginal": 7200,
    "priceReviewedAt": "2026-07-23T21:57:19.051466+00:00",
    "aiReviewedAt": "2026-07-23T21:57:19.051466+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_luigi_silenced_pistol": {
    "id": "wario_cw_luigi_silenced_pistol",
    "name": "Civil War Relic: Luigi's Silenced Pistol",
    "description": "Luigi's Silenced Pistol is a Civil War relic, its barrel etched with Luigi's name. Crafted from a strange alloy and imbued with ghostly whispers, it can fire without a sound. A true testament to Luigi's stealthy missions, it deals piercing damage like no other weapon of its kind. Once per day, this pistol can unleash a spectral bullet that deals necrotic damage, leaving behind the lingering fear of the one who wielded it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔫",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Silent Firearm",
      "Spectral Bullet"
    ],
    "vendor": "wario_land",
    "shippedBy": "Ghostly Whisper",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Silent Firearm",
        "rules": "When you fire this pistol, it deals 2d6+2 piercing damage. It has no sound and does not impose disadvantage on your Stealth checks."
      },
      {
        "title": "Spectral Bullet",
        "rules": "You can use an action to fire a spectral bullet that deals 3d6 necrotic damage. You must succeed on a DC 10 Wisdom save or be frightened for 1 round, as Luigi's fear lingers."
      }
    ],
    "levelRequirementReason": "This relic requires the user to have a basic understanding of firearms and stealth techniques.",
    "vendorReason": "Wario Land has a collection of rare Civil War artifacts, including this silenced pistol Luigi used for his missions.",
    "shippingDetail": "The delivery is accompanied by a whispering spirit that guides the buyer to their location.",
    "usage": {
      "activation": "Action or bonus action to fire; an action to use the spectral bullet",
      "duration": "Instantaneous for both effects",
      "endsWhen": "Charges are exhausted after one use of each effect",
      "charges": "2 charges, recharged after a long rest"
    },
    "priceReason": "The pistol's rarity and the unique spectral bullet feature justify its cost.",
    "priceOriginal": 9800,
    "priceReviewedAt": "2026-07-23T21:57:19.383566+00:00",
    "aiReviewedAt": "2026-07-23T21:57:19.383566+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_peach_royal_seal": {
    "id": "wario_cw_peach_royal_seal",
    "name": "Civil War Relic: Princess Peach's Royal Seal",
    "description": "Princess Peach's Royal Seal is a gold-embossed disc with intricate engravings of her royal crest. Wario 'found' it amidst the ruins of a Civil War battlefield, and its power has not waned over time. This relic can seal any document, making it legally binding in all dimensions, and once per week, its user may issue a decree that must be obeyed by all within earshot, provided they succeed on a Wisdom saving throw with a DC of 17. There's also a 10% chance each use that Princess Peach's ghost will appear, demanding her seal back.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏛️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Seal Any Document",
      "Royal Decree"
    ],
    "vendor": "wario_land",
    "shippedBy": "Silk Scroll Case",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Seal Any Document",
        "rules": "Activate as a bonus action. This effect makes any sealed document legally binding in all dimensions until the start of your next turn."
      },
      {
        "title": "Royal Decree",
        "rules": "Activates once per week as a reaction upon hearing or seeing an unjust act. Must be within 30 feet to use. The target must succeed on a Wisdom saving throw (DC 17) or obey the decree until they make another successful save."
      }
    ],
    "levelRequirementReason": "This relic is best suited for someone with intermediate experience and skills.",
    "vendorReason": "Wario acquired this item during his adventures, so it makes sense he sells it in his land.",
    "shippingDetail": "Delivered by a swift messenger hawk, ensuring the relic arrives intact and ceremoniously wrapped.",
    "usage": {
      "activation": "Bonus action or reaction (Royal Decree).",
      "duration": "Instantaneous (Seal Any Document), until start of next turn (Royal Decree)",
      "endsWhen": "On successful save or upon the start of your next turn for Seal Any Document. On failed save or another reaction for Royal Decree.",
      "charges": "Unlimited, but only one decree can be in effect at a time."
    },
    "priceReason": "This relic is rare and valuable due to its unique abilities and historical significance.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T21:57:25.504684+00:00",
    "aiReviewedAt": "2026-07-23T21:57:25.504684+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_koopa_troopa_shell_shield": {
    "id": "wario_cw_koopa_troopa_shell_shield",
    "name": "Civil War Relic: Koopa Troopa Shell Shield",
    "description": "The Civil War Relic: Koopa Troopa Shell Shield is a sturdy shield crafted from a Koopa Troopa's shell, forged in the fires of war. It retains the natural curvature and strength of its origin, providing +2 AC to any who wield it. Defectors from the Koopa ranks imbued this shield with special properties—those Koopas recognize it instantly, granting advantage on Charisma checks when dealing with them. For a moment of focused effort, the shield can be spun like a discus, knocking prone all creatures in its path (Str save DC 14).",
    "category": "equipment",
    "price": 1000,
    "icon": "🐢",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+2 AC",
      "Koopas Recognize"
    ],
    "vendor": "wario_land",
    "shippedBy": "Shell Sound Service",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Spin Dash Knockback",
        "rules": "As an action, the wielder can spin dash up to 20 feet, knocking prone all creatures in a straight line within reach (Str save DC 14). The effect ends if the wielder is hit or moves out of range."
      },
      {
        "title": "Koopas Recognize",
        "rules": "When interacting with Koopas, the shield grants advantage on Charisma checks. This effect lasts until the next long rest."
      }
    ],
    "levelRequirementReason": "Requires basic combat skills and some understanding of Koopa culture to wield effectively.",
    "vendorReason": "Wario, a defector himself, often trades in relics like this one from his past.",
    "shippingDetail": "Delivered swiftly by the Shell Sound Service, who are known for their reliable and fast deliveries of Koopa-related goods.",
    "usage": {
      "activation": "Action or Bonus Action (spin dash), Passive (Koopas recognize)",
      "duration": "Instantaneous (spin dash), Until next long rest (Koopas recognize)",
      "endsWhen": "Hit in combat, Move out of range, End of long rest",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price for a shield with unique defensive and social utility.",
    "priceOriginal": 7600,
    "priceReviewedAt": "2026-07-23T21:57:27.718547+00:00",
    "aiReviewedAt": "2026-07-23T21:57:27.718547+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_shy_guy_assassin_mask": {
    "id": "wario_cw_shy_guy_assassin_mask",
    "name": "Civil War Relic: Shy Guy Assassin Mask",
    "description": "The Civil War Relic: Shy Guy Assassin Mask is a black, intricately crafted visage made from an amalgamation of wartime scavenged metals and nightshade fibers. Its origin lies in the shadows where Shy Guys once plotted their silent strikes. This mask grants its wearer unparalleled stealth under moonlight and allows them to become momentarily invisible, but silence themself as well. Wearing it is not without consequence; a charade of miscommunication ensues when one speaks through it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎭",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Stealth in Darkness",
      "Invisibility Burst"
    ],
    "vendor": "wario_land",
    "shippedBy": "Masked Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Stealth in Darkness",
        "rules": "You gain advantage on Dexterity (Stealth) checks while wearing the mask and under moonlight. This effect lasts until you attack or take damage."
      },
      {
        "title": "Invisibility Burst",
        "rules": "As a bonus action, you can become invisible for 1 minute. While invisible, you are also unable to speak, imposing disadvantage on Charisma (Deception) and Charisma (Performance) checks until the end of your next turn."
      }
    ],
    "levelRequirementReason": "This relic is crafted from rare wartime materials and requires a seasoned user familiar with its silent whispers.",
    "vendorReason": "Wario Land, being well-traveled in the underground world of Mushroom Kingdom artifacts, has acquired this mask through obscure channels.",
    "shippingDetail": "The Masked Courier ensures discreet delivery, often choosing night for the journey to match the mask’s origin.",
    "usage": {
      "activation": "Bonus action (Invisibility Burst)",
      "duration": "1 minute or until you attack or take damage (Stealth in Darkness), ends when the effect is used up (Invisibility Burst)",
      "endsWhen": "You attack, take damage, or use it again",
      "charges": "Once per day"
    },
    "priceReason": "Crafted from wartime scavenged metals and nightshade fibers, this mask represents a significant investment in rare materials and labor.",
    "priceOriginal": 8800,
    "priceReviewedAt": "2026-07-23T21:57:49.476230+00:00",
    "aiReviewedAt": "2026-07-23T21:57:49.476230+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_bob_omb_battalion_flag": {
    "id": "wario_cw_bob_omb_battalion_flag",
    "name": "Civil War Relic: Bob-omb Battalion Flag",
    "description": "The Civil War Relic: Bob-omb Battalion Flag is a tattered banner made from old military uniforms and bomb casings. It crackles with a faint, eerie glow that hints at the fiery destruction it can unleash. Allies within 20 feet gain +1d4 fire damage on attacks, while enemies caught in its vicinity are forced to make a Dexterity saving throw (DC 15) or face a 15-foot radius explosion dealing 3d6 fire damage.",
    "category": "equipment",
    "price": 1000,
    "icon": "💣",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Allied Fire Boost",
      "Explosive Fury"
    ],
    "vendor": "wario_land",
    "shippedBy": "Volatile Mail",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Allied Fire Boost",
        "rules": "Allies within 20 feet of the flag deal +1d4 fire damage on attacks. This effect lasts until the end of your next turn."
      },
      {
        "title": "Explosive Fury",
        "rules": "Once per day, you can cause a 15-foot radius explosion centered on the flag dealing 3d6 fire damage to all creatures within the area. Creatures in the area must make a Dexterity saving throw (DC 15) or be knocked prone and take half damage."
      }
    ],
    "levelRequirementReason": "Requires level 8 due to its tactical importance and explosive nature.",
    "vendorReason": "Wario Land, known for rare historical artifacts, carries this relic from the Civil War era.",
    "shippingDetail": "Ships via Volatile Mail with a special delivery handling that ensures safe transport of potentially hazardous items.",
    "usage": {
      "activation": "Once per day as an action",
      "duration": "Instantaneous, but the flag must be held to use it effectively",
      "endsWhen": "The daily use is exhausted after one activation",
      "charges": "1"
    },
    "priceReason": "Balanced at 1000 XP for its unique historical value and tactical utility.",
    "priceOriginal": 8200,
    "priceReviewedAt": "2026-07-23T21:57:36.756046+00:00",
    "aiReviewedAt": "2026-07-23T21:57:36.756046+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_magikoopa_staff_fragment": {
    "id": "wario_cw_magikoopa_staff_fragment",
    "name": "Civil War Relic: Magikoopa Staff Fragment",
    "description": "A broken piece of Kamek's staff.",
    "category": "equipment",
    "price": 9400,
    "icon": "🪄",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Can cast one 1st-level spell from the wizard list once per day",
      "You have advantage on saves vs. magic",
      "Kamek can sense it: 20% chance per day he appears to reclaim it"
    ],
    "vendor": "wario_land",
    "shippedBy": "Spellbound Satchel",
    "levelRequirement": 9
  },
  "wario_cw_wartime_communication_orb": {
    "id": "wario_cw_wartime_communication_orb",
    "name": "Civil War Relic: Wartime Communication Orb",
    "description": "The Civil War Relic: Wartime Communication Orb is a polished, brass sphere engraved with intricate lines of semaphore code. Crafted during the Civil War, it hums faintly as you speak into its surface, sending whispers across miles of battlefield terrain to any general who once crossed your path. Its twin feature allows for an unknown voice to reach your ears each day, a mysterious message from a figure unseen. But beware; there's always a chance this very orb might inadvertently broadcast your deepest secrets, amplifying them through the chaotic din of war.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Message Relay",
      "Mysterious Whisper"
    ],
    "vendor": "wario_land",
    "shippedBy": "Telepathic Link",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Message Relay",
        "rules": "Activates as an action. The orb sends a whispered message to any general you've previously met, who hears it as if spoken directly into their ear. This effect can be used once per long rest."
      },
      {
        "title": "Mysterious Whisper",
        "rules": "Every day, the orb receives a single message from an unknown source, which you must decipher. The message is delivered at your convenience and originates from a mysterious sender known only to the DM. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This relic requires no specific level as it caters to all who have experienced the turmoil of war.",
    "vendorReason": "Wario Land, a former general himself, still holds a deep connection to relics from his time on the battlefield.",
    "shippingDetail": "The orb is delivered swiftly via Telepathic Link, ensuring its arrival without delay or interference.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for Message Relay; lasts until the start of your next turn for Mysterious Whisper",
      "endsWhen": "Used up, after each long rest",
      "charges": "2 charges per day"
    },
    "priceReason": "This relic's price is balanced at 1000 XP to reflect its historical significance and limited utility within a campaign.",
    "priceOriginal": 10200,
    "priceReviewedAt": "2026-07-23T21:57:57.228841+00:00",
    "aiReviewedAt": "2026-07-23T21:57:57.228841+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_toad_medic_field_kit": {
    "id": "wario_cw_toad_medic_field_kit",
    "name": "Civil War Relic: Toad Medic Field Kit",
    "description": "The Civil War Relic: Toad Medic Field Kit is a rusted yet sturdy medical box, its leather straps and brass fittings still gleaming with a faint coppery sheen. Inside lies an array of wartime remedies: five healing potions that can restore vitality, and a set of field tools designed for rapid treatment. This relic grants you advantage on Medicine checks, ensuring your skills are sharp as ever. However, the kit is cursed—anyone who uses it must tend to any injured creature they see or risk disadvantage in all Medicine checks until they do so.",
    "category": "equipment",
    "price": 1000,
    "icon": "🩺",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Healing Potions",
      "Advantage on Medicine Checks"
    ],
    "vendor": "wario_land",
    "shippedBy": "Medical Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Potions",
        "rules": "This kit contains five healing potions, each restoring 2d4+2 hit points. One potion recharges per long rest."
      },
      {
        "title": "Advantage on Medicine Checks",
        "rules": "While carrying this field kit, you gain advantage on Medicine checks to treat wounds and injuries. The effect lasts until the end of your next short or long rest."
      }
    ],
    "levelRequirementReason": "This relic is crafted for a novice medic who might find it invaluable in the heat of battle.",
    "vendorReason": "Wario Land, known for his connections to historical artifacts, sells this item as part of his vast collection of relics and curiosities.",
    "shippingDetail": "The kit is shipped via a trusted Medical Courier who ensures it arrives in pristine condition.",
    "usage": {
      "activation": "Instantaneous use; one per day for each potion, recharging after a long rest.",
      "duration": "Until end of next short or long rest",
      "endsWhen": "After the duration ends or when you finish a long rest without using all potions.",
      "charges": "5 uses + 1 per long rest"
    },
    "priceReason": "The relic's historical significance and its utility in quick field treatments justify this moderate price.",
    "priceOriginal": 8600,
    "priceReviewedAt": "2026-07-23T21:57:52.460329+00:00",
    "aiReviewedAt": "2026-07-23T21:57:52.460329+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_bowser_jr_paintbrush": {
    "id": "wario_cw_bowser_jr_paintbrush",
    "name": "Civil War Relic: Bowser Jr's Paintbrush",
    "description": "Bowser Jr's Paintbrush is a relic crafted during the Civil War. Its handle is made from an old cannon barrel, and its bristles are woven with remnants of ancient graffiti. This brush can paint portals on walls that teleport enemies to their doom (10 ft radius, 3 uses per day). The paintings it creates come to life, attacking foes with a flurry of color and ink (1d4 damage per round for each painting created). With every use, there's a 5% chance Bowser Jr himself will appear, demanding the brush back. His demands are not to be ignored.",
    "category": "equipment",
    "price": 1000,
    "icon": "🖌️",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Graffiti Portals",
      "Living Paintings"
    ],
    "vendor": "wario_land",
    "shippedBy": "Paint Splatter Express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Graffiti Portals",
        "rules": "Activates as an action. Creates a portal on any wall within reach (10 ft radius). Teleports enemies into the portal, dealing no damage but ending their turn and leaving them disoriented for 1 round. Limited to 3 uses per day."
      },
      {
        "title": "Living Paintings",
        "rules": "The brush paints living paintings that attack with 1d4 piercing damage per round. Each painting lasts until destroyed or the end of your next turn, whichever comes first. Painting a new painting ends their attacks and starts a new one."
      }
    ],
    "levelRequirementReason": "The relic's power requires a deep understanding of both artistry and war strategy.",
    "vendorReason": "Wario Land has a vast collection of unique and powerful artifacts, many with historical significance.",
    "shippingDetail": "Delivered via enchanted rollercoaster that ensures the brush is in pristine condition upon arrival.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (Graffiti Portals), Until Destroyed or Dismissed (Living Paintings)",
      "endsWhen": "The end of your next turn, enemy destroyed, painting dismissed by you, or the end of a short rest for daily uses.",
      "charges": "3 daily uses"
    },
    "priceReason": "Balanced price reflects its rarity and unique historical value.",
    "priceOriginal": 9200,
    "priceReviewedAt": "2026-07-23T21:58:08.893194+00:00",
    "aiReviewedAt": "2026-07-23T21:58:08.893194+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_peach_castle_banquet_horn": {
    "id": "wario_cw_peach_castle_banquet_horn",
    "name": "Civil War Relic: Peach's Castle Banquet Horn",
    "description": "The Civil War Relic: Peach's Castle Banquet Horn is a tarnished brass horn adorned with intricate engravings of fruit and armor. It was crafted in the grand kitchens of Peach’s Castle during the height of the conflict to signal feasts for soldiers, who eagerly awaited these calls. When sounded, it grants all nearby allies temporary fortitude, bolstering them against fatigue. The horn also has a once-per-day ability to bestow a surge of bravery upon three comrades, lending them the courage to face even the most daunting challenges.",
    "category": "equipment",
    "price": 1000,
    "icon": "📯",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Feast Call",
      "Bravery Surge"
    ],
    "vendor": "wario_land",
    "shippedBy": "Royal Parcel",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Feast Call",
        "rules": "When activated as an action, all allies within 60 feet gain 1d8 temporary hit points. The effect lasts for 1 minute."
      },
      {
        "title": "Bravery Surge",
        "rules": "Once per day, the horn can be used to cast the Heroism spell on up to three creatures. This ability requires an action and has a duration of 1 hour."
      }
    ],
    "levelRequirementReason": "The complexity of controlling such a relic demands at least a third-level character.",
    "vendorReason": "Wario Land, being a master of all things related to the battlefield and feasts, sells this relic to ensure even the most valorous warriors are well-equipped for both combat and celebration.",
    "shippingDetail": "The horn is carefully packed in straw and cushioned wood to prevent damage during transit. Delivery takes approximately one week.",
    "usage": {
      "activation": "Action",
      "duration": "Feast Call lasts until the end of the next long rest; Bravery Surge has a duration of 1 hour.",
      "endsWhen": "The effects end when the user rests or when the number of uses is exhausted.",
      "charges": "2 charges"
    },
    "priceReason": "This relic represents a balance between historical value and battlefield utility, making it worth 1000 XP.",
    "priceOriginal": 8200,
    "priceReviewedAt": "2026-07-23T21:58:08.998915+00:00",
    "aiReviewedAt": "2026-07-23T21:58:08.998915+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_koopa_king_scepter_tip": {
    "id": "wario_cw_koopa_king_scepter_tip",
    "name": "Civil War Relic: Koopa King Scepter Tip",
    "description": "The jeweled tip of Bowser's scepter, this relic gleams with a fiery hue, crafted from obsidian and encrusted with gems that shift in color as it is wielded. It grants its bearer an undeniable command over reptilian and fiendish creatures within close reach. Rumored to have been forged during the tumultuous Civil War between Luigi's forces and Bowser's kingdom, this relic is a symbol of power and prowess, but also a constant reminder of the conflict that shaped it.",
    "category": "equipment",
    "price": 1000,
    "icon": "💎",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "+2 Charisma with reptiles and fiends",
      "Command"
    ],
    "vendor": "wario_land",
    "shippedBy": "Heavy Guard",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Charisma",
        "rules": "You gain +2 to your Charisma (Persuasion) checks against reptilian and fiendish creatures, or when trying to influence them in any way."
      },
      {
        "title": "Command Spell",
        "rules": "Once per long rest, you can use an action to cast the Command spell. The target must be within 30 feet of you, and it must be a creature with an intelligence score of 2 or less. The save DC for this effect is 15."
      }
    ],
    "levelRequirementReason": "This relic is designed to be accessible early on, providing a powerful tool for new adventurers to command and control creatures they encounter.",
    "vendorReason": "Wario Land is known for his extensive knowledge of rare and unique artifacts, having acquired this tip through covert means during the Civil War.",
    "shippingDetail": "The Heavy Guard ensures secure delivery of this delicate relic to your doorstep within a week.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Charges are expended or the item is destroyed.",
      "charges": "1"
    },
    "priceReason": "The price reflects a balanced XP value for a relic that provides both mechanical and thematic benefits, suitable for early to mid-level adventurers.",
    "priceOriginal": 11800,
    "priceReviewedAt": "2026-07-23T21:58:30.981775+00:00",
    "aiReviewedAt": "2026-07-23T21:58:30.981775+00:00",
    "aiReviewVersion": 1
  },
  "wario_cw_shy_guy_squad_leader_mask": {
    "id": "wario_cw_shy_guy_squad_leader_mask",
    "name": "Civil War Relic: Shy Guy Squad Leader Mask",
    "description": "The Civil War Relic: Shy Guy Squad Leader Mask is a shimmering helm of gold and brass, its visage etched with the proud emblem of Wario Land's militia. When worn, it commands unwavering respect from all Shy Guys within sight, who will instantly rally to your command. The mask's weight seems to grow heavier over time, making it nigh impossible to remove without causing a scene, thus compelling you to lead confidently and with purpose.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎭",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Commanding Loyalty",
      "Masked Authority"
    ],
    "vendor": "wario_land",
    "shippedBy": "Masked Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Commanding Loyalty",
        "rules": "You can command up to three Shy Guys to follow your lead for one hour. This effect requires an action and has a range of 30 feet. The Shy Guys obey your direct orders but are not compelled to engage in dangerous situations. If you attempt to remove the mask, you must succeed on a DC 15 Wisdom saving throw or become incapacitated due to the mask's weight."
      },
      {
        "title": "Masked Authority",
        "rules": "While wearing this mask, you gain advantage on Charisma checks and saving throws made with Shy Guys. The mask’s influence is so strong that it becomes nearly impossible to ignore its wearer in any social setting within the area of effect."
      }
    ],
    "levelRequirementReason": "This relic demands a certain level of authority and experience to wield, as only those who have faced the Shy Guys' capricious nature can fully command their loyalty.",
    "vendorReason": "Wario Land is known for its extensive dealings with Shy Guys, making this mask an essential tool for anyone navigating the militia's ranks.",
    "shippingDetail": "The Masked Courier ensures swift delivery of your purchase, arriving in a style that befits only those who command respect.",
    "usage": {
      "activation": "Action or Reaction (to issue commands)",
      "duration": "One Hour",
      "endsWhen": "Mask is removed or Shy Guys are no longer within sight",
      "charges": "1/Day"
    },
    "priceReason": "The mask’s rarity and unique properties, combined with the strategic advantage it provides in militia operations, justify its moderate price.",
    "priceOriginal": 8900,
    "priceReviewedAt": "2026-07-23T21:58:43.129024+00:00",
    "aiReviewedAt": "2026-07-23T21:58:43.129024+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_garlic_breath_mints": {
    "id": "wario_land_garlic_breath_mints",
    "name": "Wario's Garlic Breath Mints",
    "description": "Wario's Garlic Breath Mints are a foul-smelling confection that leaves your breath reeking of garlic. They're infamous in the Mushroom Kingdom, where they've become a popular gag gift. These mints not only make you smell like you've eaten raw garlic but also give you advantage on Intimidation checks for 1 hour and disadvantage on Persuasion checks for 2 hours. Rumor has it that even vampires are said to flee at the mere scent of these mints, though this effect is more legend than fact.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍬",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Intimidating Advantage",
      "Persuasive Disadvantage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wafting Cloud Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Intimidating Advantage",
        "rules": "Eating one mint grants you advantage on Intimidation checks for 1 hour. This effect ends when the duration expires."
      },
      {
        "title": "Persuasive Disadvantage",
        "rules": "Eating one mint imposes disadvantage on Persuasion checks for 2 hours. This effect ends when the duration expires."
      }
    ],
    "levelRequirementReason": "These mints are widely available and easy to use, making them suitable for any level of adventurer.",
    "vendorReason": "Wario Land is known for his eccentric inventions, including these infamous breath mints.",
    "shippingDetail": "Delivered by the Wafting Cloud Express within a day of purchase.",
    "usage": {
      "activation": "Eating one mint",
      "duration": "1 hour for Intimidation advantage, 2 hours for Persuasive disadvantage",
      "endsWhen": "Duration expires",
      "charges": "Unlimited; can be eaten multiple times"
    },
    "priceReason": "Considering the item's popularity and its mildly balanced effects, a price of 1000 XP is fair.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-23T21:58:24.192321+00:00",
    "aiReviewedAt": "2026-07-23T21:58:24.192321+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_fake_mustache_kit": {
    "id": "wario_land_fake_mustache_kit",
    "name": "Wario's Fake Mustache Kit",
    "description": "Wario's Fake Mustache Kit transforms a humble mustache into an emblem of authority. Crafted from lightweight plastic and painted with precision, these mustaches add +2 to your Charisma score for as long as they are worn. However, the wearer's nose may twitch uncontrollably on a critical failure, causing them to sneeze uncontrollably (disadvantage on Perception checks). The mustache is known to slip off during any unexpected action or when you critically fail an attack roll.",
    "category": "equipment",
    "price": 1000,
    "icon": "👨",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "+2 Charisma",
      "Disadvantage on Perception checks"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Package Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "When wearing the kit, you gain +2 to your Charisma score. This effect is passive and lasts until the mustache falls off."
      },
      {
        "title": "Nose Ticks and Sneezes",
        "rules": "You have disadvantage on Perception checks while wearing the mustaches. Additionally, if you critically fail an attack roll or any unexpected action, the mustache falls off (instantaneous effect)."
      }
    ],
    "levelRequirementReason": "This kit is designed for anyone who wants to quickly project authority without requiring a specific level of experience.",
    "vendorReason": "Wario's Land specializes in mustachery and other comedic accessories, making this item a perfect fit for their inventory.",
    "shippingDetail": "The kit is delivered via Suspicious Package Express with same-day delivery to ensure you're looking authoritative before the day ends.",
    "usage": {
      "activation": "Passive effect when mustache is worn; falls off on critical failure or unexpected action.",
      "duration": "Active as long as the mustache remains in place",
      "endsWhen": "Mustache falls off due to critical failure, unexpected actions, or removal by wearer",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the quality of materials and craftsmanship, as well as the comedic value and convenience of the item.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-23T21:58:41.550713+00:00",
    "aiReviewedAt": "2026-07-23T21:58:41.550713+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_questionable_potion_of_questionable_power": {
    "id": "wario_land_questionable_potion_of_questionable_power",
    "name": "Wario's 'Probably Magic' Potion",
    "description": "Wario's 'Probably Magic' Potion, a suspiciously green vial labeled with a question mark, is said to be enchanted by the whimsical logic of Wario Land. When consumed, it has a 60% chance of granting temporary protection or a minor boon, while a 40% chance leaves you sputtering, having just downed a sip of his bathwater. The potion's effects are unpredictable, but if it does anything, it might grant temp HP and bolster your saves, or leave you with a lingering taste of garlic juice.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧪",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Temp HP Boost",
      "Save Bonuses"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Bottle Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Hit Points",
        "rules": "On activation, roll 1d6: 3-4 grants the recipient 2d10 temporary hit points that last for 1 hour. This effect has no save and is usable once per short or long rest."
      },
      {
        "title": "Save Bonuses",
        "rules": "Alternatively, if the roll results in 5-6, you gain +2 to all saving throws until the end of your next long rest. No save DC applies here, but this effect can only be used once per day."
      }
    ],
    "levelRequirementReason": "The potion's unpredictable nature and potential for minor benefits make it accessible to lower-level characters who might benefit from its effects.",
    "vendorReason": "Wario, ever the eccentric inventor of the Mushroom Kingdom, has a penchant for creating questionable yet potentially useful concoctions.",
    "shippingDetail": "Shipped with a note that reads 'May or may not be safe. Proceed at your own risk.' The delivery time is unpredictable and varies between 1 to 7 days due to Wario's erratic schedule.",
    "usage": {
      "activation": "Consume the potion as an action.",
      "duration": "Duration varies: 2d10 temp HP last for 1 hour, +2 saves last until next long rest.",
      "endsWhen": "Temp HP expire at the end of your next short or long rest; save bonuses end when you finish a long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The potion's unpredictable nature and potential for minor benefits justify its price, making it a reasonable investment for players looking to hedge their bets.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-23T21:59:20.763178+00:00",
    "aiReviewedAt": "2026-07-23T21:59:20.763178+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_gold_plated_nothing": {
    "id": "wario_land_gold_plated_nothing",
    "name": "Wario's Gold-Plated Nothing",
    "description": "Wario's Gold-Plated Nothing is an ornate, golden box that gleams under any light. Its surface is so meticulously crafted that one might mistake it for a treasure trove, but alas, it contains absolutely nothing inside—just a hollow echo of emptiness. The vendor claims its value lies in the absurdity and the collector's thrill, not in its contents. Unwrapping this item elicits Wario’s maniacal cackle, heard for miles around, leaving all who witness it with an unsettling feeling that lingers for days.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Audible Laughter",
      "Emptiness"
    ],
    "vendor": "wario_land",
    "shippedBy": "Heavy Package",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Audible Laughter",
        "rules": "When the box is opened, Wario's laughter can be heard within a radius of 100 feet. This effect lasts for one round and imposes disadvantage on all saving throws against depression until the end of the next long rest."
      },
      {
        "title": "Emptiness",
        "rules": "The box contains nothing, but its value is in the absurdity. It can be sold to Wario Land for 5000 gp as a collector's item."
      }
    ],
    "levelRequirementReason": "This item is accessible to all adventurers, symbolizing the absurd and whimsical nature of its origin.",
    "vendorReason": "Wario Land delights in selling items that are as eccentric as his personality.",
    "shippingDetail": "Ships via Wario's personal courier, ensuring it arrives with a flourish of laughter.",
    "usage": {
      "activation": "Interacting with the box to open it (action)",
      "duration": "Instantaneous effect; lasts until the end of the next long rest for those who heard the laugh",
      "endsWhen": "The effect ends at the start of the next long rest for listeners",
      "charges": "Unlimited uses"
    },
    "priceReason": "Its price reflects its rarity and the collector's interest in absurdity, rather than any intrinsic value.",
    "priceOriginal": 8800,
    "priceReviewedAt": "2026-07-23T21:59:07.616035+00:00",
    "aiReviewedAt": "2026-07-23T21:59:07.616035+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_bootleg_princess_dress": {
    "id": "wario_land_bootleg_princess_dress",
    "name": "Bootleg Princess Dress (Wario-Sized)",
    "description": "The Bootleg Princess Dress (Wario-Sized) is a hilariously oversized gown that mimics Peach's elegant design. It drags on the ground, making it nearly impossible to move stealthily or keep up with a brisk pace. Despite its comical appearance, wearing this dress grants you an advantage in Deception checks against those who are unaware of your true form. However, real princesses are quick to spot the poor craftsmanship and will readily identify you for what you are, imposing a penalty on any Charisma-based interactions.",
    "category": "equipment",
    "price": 1000,
    "icon": "👗",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Disguise Advantage",
      "Huge and Clumsy"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Package Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disguise Advantage",
        "rules": "When wearing this dress, you gain advantage on Deception checks against creatures that cannot see or recognize you as Wario. This effect is passive."
      },
      {
        "title": "Huge and Clumsy",
        "rules": "While wearing the dress, your speed is reduced by 10 feet, and you have disadvantage on Dexterity (Stealth) checks. Additionally, real princesses within 30 feet of you can identify you as an impostor, giving them advantage on Charisma-based interaction rolls with you."
      }
    ],
    "levelRequirementReason": "This item is designed for players who are just starting their adventures and need a fun, thematic outfit without the complexity of higher-level abilities.",
    "vendorReason": "Wario Land specializes in creating themed items that players can use to add humor and flair to their characters.",
    "shippingDetail": "The package may arrive with a slight delay, but the dress is guaranteed to be as comically oversized as expected.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous (once per short or long rest)",
      "endsWhen": "You stop wearing the dress",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the unique and whimsical nature of the item, offering a fair value for its thematic and humorous role in play.",
    "priceOriginal": 7200,
    "priceReviewedAt": "2026-07-23T21:58:57.523599+00:00",
    "aiReviewedAt": "2026-07-23T21:58:57.523599+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_invisible_coin": {
    "id": "wario_land_invisible_coin",
    "name": "Wario's Invisible Coin",
    "description": "Wario's Invisible Coin is a shimmering gold coin that vanishes into thin air when not in use. Crafted from an alloy of rare metals, it can only be seen by those with exceptional sleight of hand skills. When presented to shopkeepers, there’s a 50% chance they’ll believe you have the coin without seeing it, sparing you the hassle of producing it. However, if disbelief strikes, the coin's disappearance makes it seem like you're trying to dupe them, prompting them to call for guards.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🪙",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Coin is invisible",
      "50% chance shopkeepers believe"
    ],
    "vendor": "wario_land",
    "shippedBy": "Invisible Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Coin is invisible",
        "rules": "When not in use, the coin becomes invisible. You can activate this effect as a bonus action to make it vanish into thin air. This lasts until you present the coin or another creature sees it within 5 feet of you. Once activated, it has no further uses."
      },
      {
        "title": "50% chance shopkeepers believe",
        "rules": "When presented to a shopkeeper, there is a 50% chance they will accept your word without seeing the coin. If disbelief occurs, the coin's disappearance suggests you are trying to deceive them, and they immediately call for guards."
      }
    ],
    "levelRequirementReason": "It requires basic sleight of hand skills to both activate and maintain its invisibility.",
    "vendorReason": "Wario Land is known for his cunning and trickery, making him the perfect merchant for such a coin.",
    "shippingDetail": "The Invisible Courier ensures that Wario's Invisible Coin arrives in perfect condition, invisible to all but those with exceptional skills.",
    "usage": {
      "activation": "Bonus action to make it vanish into thin air",
      "duration": "Until presented or seen by another creature within 5 feet",
      "endsWhen": "Presentation or seeing by another creature",
      "charges": "Unlimited, once per short rest"
    },
    "priceReason": "The coin's invisibility and the risk it poses to shopkeepers make it a valuable and rare item.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-23T21:58:59.365764+00:00",
    "aiReviewedAt": "2026-07-23T21:58:59.365764+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_garlic_perfume": {
    "id": "wario_land_garlic_perfume",
    "name": "Wario's Garlic Perfume",
    "description": "Wario's Garlic Perfume is a peculiar cologne that wafts a pungent aroma of victory and garlic. Spritzed on, it grants you advantage on Intimidation checks for an hour, intimidating your foes into submission. However, the scent also brings about disadvantage on Persuasion checks for two hours, leaving you tongue-tied in social situations. Most notably, vampires recoiling from its stench grant you advantage on saving throws against their charm effects.",
    "category": "equipment",
    "price": 1000,
    "icon": "💐",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Advantage on Intimidation checks",
      "Disadvantage on Persuasion checks"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wafting Cloud Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Intimidating Aura (1 hour)",
        "rules": "Activate as a bonus action. Grants advantage on all Intimidation checks within the next hour. Ends when the time expires or if you lose concentration by taking damage."
      },
      {
        "title": "Charmed Resistance (2 hours)",
        "rules": "Activate once per short rest. Grants advantage on saving throws against charm effects from vampires for two hours. Ends when the duration runs out, and using it again before that time is up will end its current effect prematurely."
      }
    ],
    "levelRequirementReason": "Wario's Garlic Perfume is a common item, suitable for beginners to enhance their social interactions in a unique way.",
    "vendorReason": "As Wario's personal creation and a popular product among his fans, it makes sense that he would sell this peculiar cologne in his shop.",
    "shippingDetail": "Delivered by the Wafting Cloud Express, ensuring your perfume arrives with the pungent aroma intact.",
    "usage": {
      "activation": "Bonus action or short rest",
      "duration": "1 hour and 2 hours respectively for each effect",
      "endsWhen": "Time expires or when concentration is lost (damage taken)",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced XP price reflects the item's unique effects, which enhance social interactions in specific ways.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-23T21:59:12.882340+00:00",
    "aiReviewedAt": "2026-07-23T21:59:12.882340+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_fake_1up_mushroom": {
    "id": "wario_land_fake_1up_mushroom",
    "name": "Fake 1-UP Mushroom (Looks Real)",
    "description": "A mushroom painted with meticulous green strokes that mimic a real 1-UP Mushroom. Despite its deceiving appearance, this fake is crafted from sturdy oak and features a subtle, hand-painted design. The vendor, Wario Land, procured it from an underground artisan who specializes in counterfeit collectibles. Consuming it grants you temporary hit points equal to 1d4 (plus your Constitution modifier) for the next hour, and you gain advantage on saving throws against being frightened. However, if you die while under this effect, you cannot use the extra life granted by the mushroom.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Extra Life",
      "Temporary Hit Points"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Package",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Extra Life",
        "rules": "You gain advantage on saving throws against being frightened for 1 hour upon consuming this mushroom. If you die while under the effect, the extra life is negated."
      },
      {
        "title": "Temporary Hit Points",
        "rules": "Upon eating the mushroom, you gain temporary hit points equal to 1d4 (plus your Constitution modifier) that last for 1 hour or until reduced to 0. This effect does not stack with other sources of temporary hit points."
      }
    ],
    "levelRequirementReason": "This mushroom is designed as a simple, accessible item suitable for all adventurers.",
    "vendorReason": "Wario Land specializes in oddities and counterfeit items, so selling this fake 1-UP Mushroom fits his business model.",
    "shippingDetail": "The package arrives with a note that says 'It's just a mushroom.' Be careful with it!",
    "usage": {
      "activation": "Eating the mushroom",
      "duration": "1 hour or until reduced to 0 temporary hit points",
      "endsWhen": "You die while under its effect, or you are no longer frightened for any reason.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the item's rarity and the craftsmanship needed to create a convincing counterfeit.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-23T21:59:14.579536+00:00",
    "aiReviewedAt": "2026-07-23T21:59:14.579536+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_questionable_insurance_policy": {
    "id": "wario_land_questionable_insurance_policy",
    "name": "Wario's Questionable Insurance Policy",
    "description": "Wario's Questionable Insurance Policy is a tattered, hand-drawn document that promises to cover you in all but the most obvious scenarios. This policy excludes combat, magic, accidents, and even the mundane like disease or old age. Should disaster strike, Wario himself will ensure your next of kin receives 100 gp—minus his hefty processing fee, naturally. The policy is a relic of dubious origin, said to have been crafted in exchange for favors from various underground entities.",
    "category": "services",
    "price": 1000,
    "icon": "📋",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Disaster Exclusion",
      "Wario's Processing Fee"
    ],
    "vendor": "wario_land",
    "shippedBy": "Contractual Obligation",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disaster Exclusion",
        "rules": "The policy excludes coverage for combat, magic, accidents, disease, old age, and natural causes. The effect is instantaneous upon the occurrence of any excluded event."
      },
      {
        "title": "Wario's Processing Fee",
        "rules": "Upon activation, Wario deducts 90% of the premium as a processing fee. The policy provides no coverage beyond this fee."
      }
    ],
    "levelRequirementReason": "This policy is accessible to all adventurers due to its simple nature and widespread availability.",
    "vendorReason": "Wario Land is infamous for offering questionable services at inflated prices, making this policy a staple in his catalog.",
    "shippingDetail": "The document arrives sealed with Wario's signature and a promise of fulfillment. However, the courier is often unreliable, leading to occasional delays.",
    "usage": {
      "activation": "Instantaneous upon the occurrence of an excluded event.",
      "duration": "Instantaneous effect; no duration.",
      "endsWhen": "The event occurs or when combat, magic, accidents, disease, old age, or natural causes are involved.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This policy provides a basic level of insurance for a modest price, making it accessible to most adventurers.",
    "priceOriginal": 7200,
    "priceReviewedAt": "2026-07-23T21:59:38.806299+00:00",
    "aiReviewedAt": "2026-07-23T21:59:38.806299+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_bootleg_star_rod": {
    "id": "wario_land_bootleg_star_rod",
    "name": "Bootleg Star Rod (Wario's Wish Maker)",
    "description": "The Bootleg Star Rod (Wario's Wish Maker) appears to be a crude plastic rod topped with a neon star, its surface covered in Wario-themed graffiti. This wish-granting tool is infamous for bending reality according to Wario’s whims; when activated, it grants one wish, but the outcome is always unpredictable and often ends up being something entirely different than what was asked for. The rod hums ominously as you hold it, and after each use, its plastic exterior chips away until it crumbles into nothingness.",
    "category": "equipment",
    "price": 1000,
    "icon": "⭐",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "One Wish",
      "Rod Breaks After One Use"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Package Delivery Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "One Wish",
        "rules": "Activates as a bonus action. The item grants one wish, but Wario’s interpretation of the wish is always applied. The effect lasts until used or destroyed. If used within 10 feet of another Bootleg Star Rod, both rods activate simultaneously and their wishes cancel each other out."
      },
      {
        "title": "Rod Breaks After One Use",
        "rules": "The rod shatters into plastic fragments after one successful activation. It cannot be repaired or recharged; the only way to use it again is to purchase a new one from Wario Land."
      }
    ],
    "levelRequirementReason": "Anyone can attempt to activate this wish-granting rod, but even simple wishes can have unexpected results.",
    "vendorReason": "Wario Land is the only one who would dare sell such a questionable item that defies logic and reality.",
    "shippingDetail": "The delivery is slow, often delayed by Wario’s schemes, and the package arrives with a signature 'W' logo on it.",
    "usage": {
      "activation": "Bonus action to activate; can only use once per day.",
      "duration": "Instantaneous effect upon activation.",
      "endsWhen": "After one successful wish or when the rod breaks into fragments.",
      "charges": "One charge, unlimited uses."
    },
    "priceReason": "The item is rare and comes with unpredictable results; its value lies in its novelty rather than practicality.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T21:59:47.302043+00:00",
    "aiReviewedAt": "2026-07-23T21:59:47.302043+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_garlic_mine_sweeper": {
    "id": "wario_land_garlic_mine_sweeper",
    "name": "Garlic Mine Sweeper (Wario's Demining Tool)",
    "description": "The Garlic Mine Sweeper, crafted by Wario Land, is a device of explosive garlic and ingenuity. This compact gadget can detect mines within a 10-foot radius, giving you advantage on Perception checks to spot hidden dangers. When it identifies a mine, the sweeper detonates it with a burst of pungent garlic, ensuring your safety at the cost of a minor explosion. Though loud, this device is a lifesaver in perilous terrains, making every step through minefields safer and more predictable.",
    "category": "equipment",
    "price": 1000,
    "icon": "💣",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Mine Detection",
      "Explosive Garlic Detonation"
    ],
    "vendor": "wario_land",
    "shippedBy": "Explosive Parcel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mine Detection",
        "rules": "When activated, the Garlic Mine Sweeper can detect mines within a 10-foot radius. You gain advantage on Perception checks to locate hidden traps or dangers."
      },
      {
        "title": "Explosive Garlic Detonation",
        "rules": "If the sweeper detects a mine, it triggers the mine with garlic, dealing 2d6 fire damage to the mine (ignoring resistance). You have immunity to the effects of the garlic used. This effect can be triggered once per long rest."
      }
    ],
    "levelRequirementReason": "Requires minimal skill to operate and is useful for beginners.",
    "vendorReason": "Wario Land specializes in gadgets that make dangerous terrains safer, including this lifesaving device.",
    "shippingDetail": "Ships via Explosive Parcel, known for its reliable and swift delivery of potentially hazardous items.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Used or expended after one successful trigger",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a fair value, considering its utility for both new and seasoned adventurers.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T22:00:01.990674+00:00",
    "aiReviewedAt": "2026-07-23T22:00:01.990674+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_invisible_treasure_map": {
    "id": "wario_land_invisible_treasure_map",
    "name": "Invisible Treasure Map (Wario's Secret)",
    "description": "Wario's Invisible Treasure Map conceals its path under layers of shadow, only revealing itself to the initiated and those who know Wario's peculiar sense of humor. With a flicker of light and a knowing wink, this map whispers the location of buried gold, but it speaks in riddles and misdirections. Wario, ever the prankster, ensures that while the map is invisible to all but its intended user, there’s always a 50% chance it will lead you astray unless you've earned his trust.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🗺️",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Invisible Path",
      "Prankster's Ploy"
    ],
    "vendor": "wario_land",
    "shippedBy": "Invisible Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisible Path",
        "rules": "Activates as an action. The map is invisible to all but the user, and it grants advantage on checks to hide its location. If the map leads you astray (50% chance), you must succeed on a DC 13 Intelligence saving throw or believe that Wario is right about your grip on his trust."
      },
      {
        "title": "Prankster's Ploy",
        "rules": "If the map leads to no treasure, it whispers a cryptic message: 'You're holding it wrong.' This effect ends when you successfully find treasure or after 10 minutes of fruitless searching. The map can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The map's activation requires a basic understanding of Wario's sense of humor and confidence in your relationship with him.",
    "vendorReason": "Wario sells it to those who can appreciate his brand of mischief and have the means to navigate his traps.",
    "shippingDetail": "The map is delivered by an enigmatic courier known only as 'Shadowfoot,' ensuring its arrival without revealing its location.",
    "usage": {
      "activation": "Activates as an action.",
      "duration": "Instantaneous effect; duration varies based on the outcome of your search.",
      "endsWhen": "Effect ends when you find treasure, fail a saving throw, or after 10 minutes of searching.",
      "charges": "Unlimited uses per short rest."
    },
    "priceReason": "The map's value lies in its unique ability to both deceive and reveal, making it a rare and sought-after item among adventurers who have crossed paths with Wario.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-23T21:59:55.056065+00:00",
    "aiReviewedAt": "2026-07-23T21:59:55.056065+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_bootleg_fire_flower": {
    "id": "wario_land_bootleg_fire_flower",
    "name": "Bootleg Fire Flower (Wario's Florist)",
    "description": "The Bootleg Fire Flower, a wilted and misshapen bloom from Wario's Florist, is a twisted mockery of a Fireflower. Its petals are scorched and brittle, yet when activated, it releases a burst of flame that dances unpredictably around you. On rare occasions, the flower seems to take delight in its chaos, backfiring with a fiery backlash. Be wary: once it wilts after three uses, the bloom crumbles into ash, leaving no trace of its volatile magic.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌻",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Flame Burst",
      "Backfire Chance"
    ],
    "vendor": "wario_land",
    "shippedBy": "Floral Freight",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Flame Burst",
        "rules": "As a bonus action, activate the flower to unleash a burst of flame. This creates a fire effect centered on you in a 10-foot radius. Creatures within this area must make a DC 14 Dexterity saving throw or take 2d6 fire damage. The flower wilts after three uses."
      },
      {
        "title": "Backfire Chance",
        "rules": "There is a 30% chance that the Flame Burst effect backfires, causing you to take 1d6 fire damage instead of dealing it to others. This effect cannot be resisted with a saving throw."
      }
    ],
    "levelRequirementReason": "This item requires at least second-level magic proficiency due to its unpredictable nature and the risk involved in using it.",
    "vendorReason": "Wario's Florist is known for its questionable goods, including this misbegotten flower that somehow still manages to find buyers despite its flaws.",
    "shippingDetail": "Delivered within a week by Floral Freight. The delivery includes detailed instructions on how to activate and use the item safely.",
    "usage": {
      "activation": "Bonus action to cast Flame Burst, or automatic backfire if conditions are met.",
      "duration": "Instantaneous effect; ends when used up.",
      "endsWhen": "The flower wilts after three uses. Once wilted, it crumbles into ash and is no longer functional.",
      "charges": "3 uses"
    },
    "priceReason": "The item's rarity and unpredictable nature justify its price; the risk of backfire and the limited number of uses make it a valuable but dangerous commodity.",
    "priceOriginal": 7200,
    "priceReviewedAt": "2026-07-23T22:00:12.755999+00:00",
    "aiReviewedAt": "2026-07-23T22:00:12.755999+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_questionable_life_insurance": {
    "id": "wario_land_questionable_life_insurance",
    "name": "Wario's Life Insurance (Double or Nothing)",
    "description": "This document serves as a grim reminder of Wario's questionable business practices. Should you perish in battle, the certificate 'Insured by Wario' ensures that Wario pockets exactly 5000 gp from your estate. If you survive, however, this same document obligates Wario to pay you a mere 100 gp—though he likely won't honor it. The item is tangible and serves as a memento of the deal struck in blood.",
    "category": "services",
    "price": 1000,
    "icon": "💀",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Death Benefit",
      "Survival Debt"
    ],
    "vendor": "wario_land",
    "shippedBy": "Blood Contract",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Death Benefit",
        "rules": "If you die, this document grants Wario Land ownership of your estate's entire wealth, specifically 5000 gp. The effect is instantaneous upon death."
      },
      {
        "title": "Survival Debt",
        "rules": "If you survive the campaign, Wario Land agrees to pay you 100 gp, though this payment may never be collected. This benefit is triggered only once per document."
      }
    ],
    "levelRequirementReason": "Anyone can recognize the dubious nature of Wario's offer and decide not to invest in such a scheme.",
    "vendorReason": "Wario Land is known for its questionable business practices, making this document a typical offering from the vendor.",
    "shippingDetail": "Delivered via Wario's personal courier, ensuring no one else can claim your estate until the deal is fulfilled.",
    "usage": {
      "activation": "Passive effect upon death or survival of campaign.",
      "duration": "Instantaneous at time of death or end of campaign.",
      "endsWhen": "Death or completion of the campaign.",
      "charges": "Unlimited"
    },
    "priceReason": "The document's value lies in its unique and unenforceable terms, making it worth a significant but balanced amount.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-23T22:00:04.966297+00:00",
    "aiReviewedAt": "2026-07-23T22:00:04.966297+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_bootleg_princess_peach_autograph": {
    "id": "wario_land_bootleg_princess_peach_autograph",
    "name": "Bootleg Princess Peach Autograph (Wario Forged)",
    "description": "The 'Bootleg Princess Peach Autograph' is a counterfeit autographed print forged by Wario, made to mimic Peach's elegant script. It is bound in a cheap leather frame and bears Wario’s signature, which exudes the same smug satisfaction as his infamous antics. This forgery might just fool the most gullible of collectors, granting advantage on Deception checks when attempting to pass it off, but it also carries the potential to offend true fans of Princess Peach, compelling them to treat you with disdain and disadvantage your Charisma-based interactions.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✍️",
    "stock": 7,
    "rarity": "common",
    "effects": [
      "Collectors Might Believe It",
      "True Fans Are Offended"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Envelope",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Collectors Might Believe It",
        "rules": "When used in a Deception check against an NPC that is gullible, you gain advantage on the check. The effect lasts until the start of your next turn."
      },
      {
        "title": "True Fans Are Offended",
        "rules": "When interacting with someone who considers themselves a true fan of Princess Peach, you must succeed on a Charisma (Persuasion) check with a DC equal to 10 + the target's Wisdom modifier. On failure, they treat you as an opponent and impose disadvantage on all Charisma-based checks made by you."
      }
    ],
    "levelRequirementReason": "This item is intended for low-level characters who might find it useful to fool gullible NPCs or to cause trouble in social situations.",
    "vendorReason": "Wario Land often sells unique and questionable items, including this forgery, which aligns with his reputation as a prankster.",
    "shippingDetail": "The item is delivered in an unmarked envelope that gives off a faint smell of Wario's latest misadventure.",
    "usage": {
      "activation": "Used once per short or long rest, as part of the action used to make the Deception check against gullible NPCs or when interacting with true fans of Princess Peach.",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends at the start of your next turn after it is used.",
      "charges": "Recharges on a short rest"
    },
    "priceReason": "This item offers balanced utility, combining social manipulation with a thematic twist that fits within the expected value for low-level characters.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-23T22:00:45.710657+00:00",
    "aiReviewedAt": "2026-07-23T22:00:45.710657+00:00",
    "aiReviewVersion": 1
  },
  "the_onyx_hand_shadow_dagger": {
    "id": "the_onyx_hand_shadow_dagger",
    "name": "Shadow Dagger of Midnight Deals",
    "description": "The Shadow Dagger of Midnight Deals is a weapon forged from onyx and shadow, its hilt wrapped in fine silk that glows faintly under moonlight. This dagger can only be seen by those who have struck deals with the Onyx Hand, and it operates solely within the realm of darkness. In dim light or complete darkness, it gleams ominously, but in bright sunlight, it becomes translucent and useless. Its blade is said to whisper secrets from the shadows.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗡️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+1 Dagger",
      "Advantage on Attacks in Darkness"
    ],
    "vendor": "the_onyx_hand",
    "shippedBy": "Shadow Drop",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Psychic Damage",
        "rules": "When you strike a creature with this dagger, it deals 1d6 psychic damage instead of piercing. This effect is active only when used in darkness."
      },
      {
        "title": "Translucent in Bright Light",
        "rules": "If the Shadow Dagger is not in complete darkness or moonlight, it becomes translucent and loses all effects until moved back into a dark environment."
      }
    ],
    "levelRequirementReason": "Only those who have proven their worth through shadowy dealings can wield this dagger.",
    "vendorReason": "The Onyx Hand exclusively deals in items that have dark origins and only offers them to trusted patrons.",
    "shippingDetail": "Delivered by the shadows themselves, ensuring secrecy and discretion.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Until moved out of darkness or until used in combat",
      "endsWhen": "If not in darkness, it becomes translucent; if used in bright light, it loses all effects instantly.",
      "charges": "Unlimited"
    },
    "priceReason": "The dagger's rarity and unique properties make it a valuable addition to any shadowy campaign.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-23T22:00:57.273139+00:00",
    "aiReviewedAt": "2026-07-23T22:00:57.273139+00:00",
    "aiReviewVersion": 1
  },
  "mages_guild_robe_of_endless_pockets": {
    "id": "mages_guild_robe_of_endless_pockets",
    "name": "Robe of Endless Pockets (Mostly Empty)",
    "description": "The Robe of Endless Pockets (Mostly Empty) is a mage's garment with countless pockets that never seem to fill. Crafted from dark, shimmering fabric woven in secret guild workshops, it magically expands and contracts as needed. Despite its endless storage space, the pockets are perpetually empty, save for a single coin you place there. Retrieving an item still requires patience; it takes 1d4 rounds of rummaging to locate your treasure. The robe's itchy weave imposes disadvantage on Concentration checks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥼",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Endless Storage",
      "Retrieval Delays"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Endless Storage",
        "rules": "The Robe of Endless Pockets can store any number of weightless items. Items stored are not lost or damaged, but retrieving them requires a search attempt (1d4 rounds). The robe has unlimited storage capacity."
      },
      {
        "title": "Retrieval Delays",
        "rules": "When attempting to retrieve an item from the Robe's endless pockets, it takes 1d4 rounds of rummaging. You must make a Dexterity (Stealth) check with disadvantage due to the robe's itchy weave. Failure means you cannot find your item until after another search attempt."
      }
    ],
    "levelRequirementReason": "The magic in the Robe of Endless Pockets is complex, requiring a minimum character level for effective use.",
    "vendorReason": "The Mages Guild has exclusive access to these robes due to their intricate creation process and magical properties.",
    "shippingDetail": "Ships via Arcane Relay, known for its reliable delivery of arcane goods across the realm.",
    "usage": {
      "activation": "Passive effect; items are stored and retrieved automatically with a search attempt.",
      "duration": "Instantaneous when storing or retrieving an item.",
      "endsWhen": "The robe's storage continues indefinitely until another item is placed in it, at which point the previous contents are lost.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced with a lower price due to its limited utility and retrieval inconvenience.",
    "priceOriginal": 9200,
    "priceReviewedAt": "2026-07-23T22:00:22.151622+00:00",
    "aiReviewedAt": "2026-07-23T22:00:22.151622+00:00",
    "aiReviewVersion": 1
  },
  "custodians_mop_of_cleaning_plus": {
    "id": "custodians_mop_of_cleaning_plus",
    "name": "Mop of Cleaning+1",
    "description": "The Mop of Cleaning+1 is a sturdy mop crafted by Custodians from enchanted bristles and a core of polished oak. It not only cleans but also fights, embodying the spirit of those who tend to the city’s cleanliness. Once per day, you can command it to create a gust that sweeps away dirt and debris within 10 feet, leaving behind sparkling floors. The mop’s presence is always felt; you are compelled to keep your surroundings tidy, imposing disadvantage on saving throws against being charmed or frightened if you neglect messes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧹",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Quarterstaff +1",
      "Gust of Wind"
    ],
    "vendor": "custodians",
    "shippedBy": "Sanitation Truck",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gust of Wind",
        "rules": "As an action, command the mop to create a gust of wind. This creates a strong breeze in a 10-foot radius centered on you. Creatures within this area must succeed on a DC 12 Strength saving throw or be pushed up to 10 feet away from you and knocked prone. The effect lasts for 1 minute per use."
      },
      {
        "title": "Tidy Compulsion",
        "rules": "If you ignore visible messes, you are compelled to clean them; impose disadvantage on saving throws against being charmed or frightened. This compulsion ends when you successfully clean the area or gain a level."
      }
    ],
    "levelRequirementReason": "Even the simplest custodian can wield this mop with ease.",
    "vendorReason": "Custodians are known for their practical and effective cleaning tools, including this enchanted mop.",
    "shippingDetail": "Delivered by the city’s sanitation vehicles within a week.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute per use",
      "endsWhen": "The effect ends when you clean the area or gain a level.",
      "charges": "Unlimited, as long as it is not destroyed"
    },
    "priceReason": "Balanced at 1000 XP, this mop offers both utility and combat ability for beginners.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T22:00:29.103336+00:00",
    "aiReviewedAt": "2026-07-23T22:00:29.103336+00:00",
    "aiReviewVersion": 1
  },
  "internet_ethernet_cable_whip": {
    "id": "internet_ethernet_cable_whip",
    "name": "Ethernet Cable Whip (Cat-5 O' Nine Tails)",
    "description": "The Ethernet Cable Whip (Cat-5 O' Nine Tails) is a fearsome weapon forged from old internet cables, its core still humming with residual digital signals. Its braided strands can trip tech-savvy foes and deal punishing blows that siphon their psychic stability, leaving them lagging in both body and mind. Crafted by the eccentric internet vendor, this whip ensures that even the most advanced digital threats are brought down to their knees.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎮",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Trip Digital Creatures",
      "Psychic Lag Damage"
    ],
    "vendor": "internet",
    "shippedBy": "Digital Wind Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Trip Digital Creatures",
        "rules": "When you hit a creature with this whip as part of an attack, the target must succeed on a Strength saving throw or be knocked prone. The DC for this save is equal to 8 + your proficiency bonus + your Dexterity modifier."
      },
      {
        "title": "Psychic Lag Damage",
        "rules": "This weapon deals 1d6 slashing damage plus 1d4 psychic damage when you hit with it. On a critical hit, the target also takes an additional 1d6 psychic damage and must succeed on a Wisdom saving throw (DC 10 + your proficiency bonus + your Charisma modifier) or be stunned until the end of its next turn."
      }
    ],
    "levelRequirementReason": "This weapon requires a certain level of dexterity and familiarity with both physical and digital combat to wield effectively.",
    "vendorReason": "The internet vendor specializes in unusual tech-related artifacts, including this whip made from salvaged network cables.",
    "shippingDetail": "Ships via Digital Wind Courier; delivery time varies based on the recipient's digital signal strength.",
    "usage": {
      "activation": "Attack action",
      "duration": "Instantaneous",
      "endsWhen": "The whip is destroyed or expended, whichever comes first. It has an unlimited number of uses per day.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from rare and reclaimed materials, this weapon combines physical prowess with the arcane power of digital anomalies.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-23T22:00:50.973083+00:00",
    "aiReviewedAt": "2026-07-23T22:00:50.973083+00:00",
    "aiReviewVersion": 1
  },
  "changeling_hive_mimic_armor": {
    "id": "changeling_hive_mimic_armor",
    "name": "Mimic Armor (Looks Like Clothes)",
    "description": "This armor, a mimic of everyday attire, seamlessly blends into any outfit, fooling even the most seasoned eyes at first glance. Its weighty construction conceals formidable plate beneath a deceptive facade of common clothes. Wearing it requires a Deception check to avoid suspicion; failure means you're marked as a liar. Over time, its shape shifts unpredictably, mimicking the clothing style of nearby individuals or environments, in a whimsical yet unsettling dance of appearances.",
    "category": "equipment",
    "price": 1000,
    "icon": "👔",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Fooling Eyes",
      "Shape-Shifting"
    ],
    "vendor": "changeling_hive",
    "shippedBy": "Metamorphic Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fooling Eyes",
        "rules": "While wearing this armor, you have advantage on Deception checks to disguise yourself. However, if the check fails by 5 or more, it's clear you're lying about your attire."
      },
      {
        "title": "Shape-Shifting",
        "rules": "The armor randomly changes its appearance every hour. This transformation is at the DM’s discretion and may be amusingly absurd, such as turning into a tuxedo one moment and a medieval gambeson the next. It doesn't affect your AC."
      }
    ],
    "levelRequirementReason": "This armor is designed for beginners to enjoy its whimsical yet challenging features without being too restrictive.",
    "vendorReason": "The Changeling Hive, known for their mischievous and shape-shifting nature, are the perfect purveyors of this armor that mimics their own abilities.",
    "shippingDetail": "Delivered with a courier who ensures the armor fits through any door, no matter its current form.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous shape-shifting every hour",
      "endsWhen": "Destroyed or when no longer worn for a week",
      "charges": "Unlimited"
    },
    "priceReason": "The armor's rarity and unique, entertaining features justify its price in XP.",
    "priceOriginal": 9800,
    "priceReviewedAt": "2026-07-23T22:01:06.204155+00:00",
    "aiReviewedAt": "2026-07-23T22:01:06.204155+00:00",
    "aiReviewVersion": 1
  },
  "cybernetic_smart_shield": {
    "id": "cybernetic_smart_shield",
    "name": "Smart Shield (With Ads)",
    "description": "The Smart Shield (With Ads) is a cybernetic marvel that integrates sleek, polished steel with holographic technology. It not only grants +2 AC but also displays targeted advertisements that can charm potential customers, giving you advantage on Charisma checks when dealing with merchants. However, its ads are so distracting that they impose disadvantage on Concentration checks. The shield also tracks your location, which is both a boon and a bane—useful for navigation yet compromising stealth efforts.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+2 AC",
      "Targeted Ads: Advantage on Charisma with merchants"
    ],
    "vendor": "cybernetic",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Targeted Ads",
        "rules": "When you use this shield to interact with a merchant, the targeted ads displayed grant you advantage on Charisma checks. This effect ends when the conversation with the merchant concludes."
      },
      {
        "title": "Distracting Ads",
        "rules": "The ads are so distracting that they impose disadvantage on Concentration checks for as long as the shield is worn and active. This effect persists until you remove the shield or take a short rest."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 2 to handle its advanced cybernetic features.",
    "vendorReason": "The Cybernetic vendor is well-known for their cutting-edge tech and offers this innovative shield.",
    "shippingDetail": "Delivered within three days, but the package may contain small holographic components that require careful handling.",
    "usage": {
      "activation": "Passive effect active while wearing the shield.",
      "duration": "Instantaneous activation on contact with a merchant for targeted ads; distraction lasts until removed or after a short rest.",
      "endsWhen": "This item ceases to function if it is physically damaged beyond repair.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The shield's innovative cybernetic features and utility justify its fair value of 1000 XP.",
    "priceOriginal": 8600,
    "priceReviewedAt": "2026-07-23T22:01:13.555641+00:00",
    "aiReviewedAt": "2026-07-23T22:01:13.555641+00:00",
    "aiReviewVersion": 1
  },
  "hacktivist_ad_blocker_helmet": {
    "id": "hacktivist_ad_blocker_helmet",
    "name": "Ad-Blocker Helmet",
    "description": "The Ad-Blocker Helmet is a sleek, matte black visor that conceals its wearer from all digital distractions. Crafted from a blend of advanced alloy and enchanted polymers, it not only blocks advertisements but also filters out unwanted notifications. Wearing this helmet grants you immunity to magical illusions meant to lure or distract, yet it comes with the trade-off: you'll find yourself disoriented in public spaces, suffering disadvantage on Constitution saving throws against headaches and on Intelligence (Investigation) checks that require visual observation.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪖",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Magical Ad Immunity",
      "Disadvantage on Investigation"
    ],
    "vendor": "hacktivist",
    "shippedBy": "Anonymous Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Magical Ad Immunity",
        "rules": "While wearing the helmet, you are immune to magical advertisements and illusions designed to draw your attention. The effect is always active as long as the helmet is worn."
      },
      {
        "title": "Disadvantage on Investigation",
        "rules": "When required to make an Intelligence (Investigation) check involving visual observation, you suffer a -1 penalty to the roll due to disorientation caused by the helmet's filtering technology. This effect lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "The Ad-Blocker Helmet is designed for beginners and tech-savvy individuals who wish to focus on more critical matters without being interrupted by trivial digital distractions.",
    "vendorReason": "The hacktivist vendor specializes in technology-related gear that enhances efficiency and privacy, making the Ad-Blocker Helmet a perfect fit for their product line.",
    "shippingDetail": "Ships discreetly via anonymous courier; delivery time varies but is generally reliable within a week of purchase.",
    "usage": {
      "activation": "Passive effect once worn",
      "duration": "Instantaneous; always active while worn",
      "endsWhen": "Effect ends at the end of your next long rest",
      "charges": "Unlimited, recharges with rest"
    },
    "priceReason": "The helmet's balanced price reflects its unique combination of protection and minor inconvenience, offering a fair value for players seeking to enhance their focus.",
    "priceOriginal": 7400,
    "priceReviewedAt": "2026-07-23T22:01:20.447522+00:00",
    "aiReviewedAt": "2026-07-23T22:01:20.447522+00:00",
    "aiReviewVersion": 1
  },
  "the_onyx_hand_shadow_boots": {
    "id": "the_onyx_hand_shadow_boots",
    "name": "Shadow Boots of Silent Steps",
    "description": "The Shadow Boots of Silent Steps are a pair of onyx-hued footwear crafted from the bones of shadow spiders. These boots allow you to move silently across any surface, leaving behind only ephemeral shadow prints that vanish after an hour. They whisper secrets through their soft leather lining; if you listen closely during your next investigation, you gain advantage on the check while creatures within 30 feet who attempt to track you must succeed on a DC 15 Wisdom saving throw or become confused for 1 minute.",
    "category": "equipment",
    "price": 1000,
    "icon": "👢",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stealthy Silence",
      "Whispering Secrets"
    ],
    "vendor": "The Onyx Hand",
    "shippedBy": "Shadow Drop Courier Service",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Stealthy Silence",
        "rules": "While wearing these boots, you have advantage on Dexterity (Stealth) checks. The shadow footprints left behind last for up to one hour and can be used by creatures with the Track feat or similar ability to follow your movements."
      },
      {
        "title": "Whispering Secrets",
        "rules": "When you listen closely during an investigation, you have advantage on Intelligence (Investigation) checks. Additionally, any creature within 30 feet that attempts to track you must succeed on a DC 15 Wisdom saving throw or become confused for the duration of one minute."
      }
    ],
    "levelRequirementReason": "These boots require a minimum character level of 2 to ensure the wearer can effectively utilize their stealth and tracking resistance.",
    "vendorReason": "The Onyx Hand is known for its unique and powerful artifacts, making it fitting that they sell these shadowy footwear.",
    "shippingDetail": "Ships within a week; delivery is often delayed by the enigmatic nature of the boots themselves.",
    "usage": {
      "activation": "Passive effect upon donning the boots.",
      "duration": "Until removed or until the shadow prints vanish after an hour.",
      "endsWhen": "The boots are removed, or when the shadow prints disappear after one hour.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the rarity and utility of these boots, providing a fair value for their unique abilities.",
    "priceOriginal": 8800,
    "priceReviewedAt": "2026-07-23T22:01:28.211666+00:00",
    "aiReviewedAt": "2026-07-23T22:01:28.211666+00:00",
    "aiReviewVersion": 1
  },
  "mages_guild_spellbook_of_forgotten_spells": {
    "id": "mages_guild_spellbook_of_forgotten_spells",
    "name": "Spellbook of Forgotten Spells",
    "description": "The Spellbook of Forgotten Spells hums with an ancient, almost forgotten magic. Its pages are bound in leather dyed a deep, almost imperceptible brown, and its cover is embossed with runes that whisper secrets only the wind can hear. This tome contains spells no one remembers, but when you open it, the air seems to shimmer with latent power. The book whispers the forgotten incantations, granting you advantage on the casting of any spell within, yet disadvantage on Concentration checks while its pages are open.",
    "category": "equipment",
    "price": 1000,
    "icon": "📚",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Contains Forgotten Spells",
      "Whispers Forgotten Incantations"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Forgotten Spells",
        "rules": "This effect allows the user to cast any spell found within the book, which consists of 1d4 random spells of levels 1-3. The DM selects these spells each time the book is opened. You have disadvantage on Arcana checks to identify the spells contained within."
      },
      {
        "title": "Whispers Forgotten Incantations",
        "rules": "When you open the Spellbook, it whispers the forgotten incantations of the contained spell(s). This grants advantage on the casting of any spell found in the book. However, while the pages are open, you have disadvantage on Concentration checks."
      }
    ],
    "levelRequirementReason": "This spellbook contains forgotten spells that require a certain level to access and understand.",
    "vendorReason": "The Mages Guild has exclusive access to ancient texts and magical artifacts, including this forgotten spellbook.",
    "shippingDetail": "Delivered by the Arcane Relay with a 1d4 day delay due to the mystical nature of the shipment.",
    "usage": {
      "activation": "Opening the spellbook to access its contents.",
      "duration": "Instantaneous, lasting until the pages are closed.",
      "endsWhen": "The book's pages are closed or you make a Concentration check.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price for a rare item that contains powerful but obscure spells.",
    "priceOriginal": 11200,
    "priceReviewedAt": "2026-07-23T22:01:37.176998+00:00",
    "aiReviewedAt": "2026-07-23T22:01:37.176998+00:00",
    "aiReviewVersion": 1
  },
  "custodians_plunger_of_power": {
    "id": "custodians_plunger_of_power",
    "name": "Plunger of Power",
    "description": "The Plunger of Power is a robust, brass-plated plunger crafted in the bustling workshops of the Custodians. Its handle bears the mark of a custodian's pride, and its core is forged from ancient, enchanted metal that whispers of unclogged dimensions. This plunger can unclog anything, from mundane blockages to cosmic rifts, and offers an advantage on Strength checks for pushing or pulling heavy objects. However, you feel an unyielding compulsion to clear any obstruction; if you ignore a blockage, you suffer disadvantage on your next Strength check.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪠",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Unlocks Blockages",
      "Strength Bonus"
    ],
    "vendor": "custodians",
    "shippedBy": "Sanitation Truck",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unlock Blockages",
        "rules": "As an action, you can use the Plunger of Power to unclog any obstruction, including magical ones up to 3rd level. This effect has a daily limit of once."
      },
      {
        "title": "Strength Bonus",
        "rules": "You gain advantage on Strength checks when pushing or pulling objects that weigh more than 100 pounds. This bonus lasts until the end of your next short rest."
      }
    ],
    "levelRequirementReason": "It requires minimal strength and dexterity to wield, making it accessible for new adventurers.",
    "vendorReason": "The Custodians are known for their expertise in unclogging the world's most complex blockages, from plumbing to metaphysical barriers.",
    "shippingDetail": "Delivered by a Sanitation Truck, which often travels through bustling cities and towns, ensuring timely delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when you finish your next short rest or if used on another obstruction.",
      "charges": "Daily"
    },
    "priceReason": "Balanced at a cost of 1000 XP, the Plunger's rarity and practical utility make it a fair price for adventurers.",
    "priceOriginal": 7600,
    "priceReviewedAt": "2026-07-23T22:01:44.516262+00:00",
    "aiReviewedAt": "2026-07-23T22:01:44.516262+00:00",
    "aiReviewVersion": 1
  },
  "internet_wifi_booster_staff": {
    "id": "internet_wifi_booster_staff",
    "name": "Wi-Fi Booster Staff",
    "description": "The Wi-Fi Booster Staff is a sleek, intricately carved staff made of polished copper and inlaid with glowing digital circuits. Crafted by the tech-savvy artisans of Netweave, this staff amplifies magical signals within its range, turning any spell into a supercharged wave of connectivity. Within 10 feet of the staff, creatures must make a Constitution saving throw (DC 15) or become distracted, suffering disadvantage on Perception checks until the end of their next turn. The staff also emits an incessant hum that can be heard miles away, imposing disadvantage on Stealth checks within its range.",
    "category": "equipment",
    "price": 1000,
    "icon": "📡",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+2 to spell range",
      "Distracts nearby creatures"
    ],
    "vendor": "internet",
    "shippedBy": "Wireless Signal Courier",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Signal Amplification",
        "rules": "The Wi-Fi Booster Staff increases the range of any spell cast by its wielder by +20 feet. This effect is active as long as the staff remains in hand."
      },
      {
        "title": "Distracting Hum",
        "rules": "Creatures within 10 feet must make a Constitution saving throw (DC 15) or become distracted, suffering disadvantage on Perception checks until the end of their next turn. The distraction lasts for one minute per level of the caster."
      }
    ],
    "levelRequirementReason": "The Wi-Fi Booster Staff requires at least a 7th-level spellcaster to manage its complex magical circuits and amplify signals effectively.",
    "vendorReason": "Netweave, the tech-savvy artisans who crafted this staff, are known for their innovative and powerful equipment that enhances one's connection to the digital world.",
    "shippingDetail": "The staff is carefully packed with specialized anti-static materials to ensure it arrives in pristine condition. Delivery takes three days within the realm.",
    "usage": {
      "activation": "Instantaneous activation when a spell is cast, once per short or long rest.",
      "duration": "Active for one minute per level of the caster, recharges after a short or long rest.",
      "endsWhen": "The effect ends if the staff is no longer held in hand or if the caster takes any other action that requires concentration.",
      "charges": "Unlimited uses, recharging after each short or long rest."
    },
    "priceReason": "Crafted from rare digital materials and powered by advanced magic, this staff commands a price of 1000 XP, reflecting its unique blend of technology and spellcasting.",
    "priceOriginal": 9200,
    "priceReviewedAt": "2026-07-23T22:02:09.630899+00:00",
    "aiReviewedAt": "2026-07-23T22:02:09.630899+00:00",
    "aiReviewVersion": 1
  },
  "changeling_hive_identity_crisis_cloak": {
    "id": "changeling_hive_identity_crisis_cloak",
    "name": "Identity Crisis Cloak",
    "description": "The Identity Crisis Cloak is a peculiar garment woven from threads of shifting light and shadow. When donned, it warps your appearance into an uncanny resemblance to another creature, complete with minor traits like eye color or hair texture. It grants advantage on Deception checks but leaves you prone to confusion spells, as the cloak's magic momentarily erases your sense of self every hour unless you concentrate (as a bonus action).",
    "category": "equipment",
    "price": 1000,
    "icon": "🧥",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Deception Checks",
      "Confusion Vulnerability"
    ],
    "vendor": "changeling_hive",
    "shippedBy": "Metamorphic Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Deceptive Appearance",
        "rules": "You gain advantage on Deception checks while wearing the cloak. This effect is always active as long as you are wearing it."
      },
      {
        "title": "Confusion Vulnerability",
        "rules": "The cloak causes you to be prone to confusion spells, as your perception of reality momentarily collapses every hour unless you concentrate (as a bonus action) to maintain your sense of self. If you fail a save against a confusion spell while wearing the cloak, you are stunned until the end of your next turn."
      }
    ],
    "levelRequirementReason": "The cloak's magic is subtle but effective, suitable for adventurers just starting their journey.",
    "vendorReason": "As custodians of the realm, the Changeling Hive has a vested interest in items that can alter reality and appearance.",
    "shippingDetail": "Ships within three days via Metamorphic Delivery's specialized courier service.",
    "usage": {
      "activation": "Passive effect, but concentration (bonus action) required to maintain self-awareness.",
      "duration": "Instantaneous change every hour; concentration is needed to counteract confusion spells.",
      "endsWhen": "Concentration ends on a confusion spell save failure or if the cloak is removed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced price reflects the cloak's subtle magic and utility without overwhelming novice adventurers.",
    "priceOriginal": 8600,
    "priceReviewedAt": "2026-07-23T22:01:44.264849+00:00",
    "aiReviewedAt": "2026-07-23T22:01:44.264849+00:00",
    "aiReviewVersion": 1
  },
  "cybernetic_bionic_arm_upgrade": {
    "id": "cybernetic_bionic_arm_upgrade",
    "name": "Bionic Arm Upgrade",
    "description": "The Bionic Arm Upgrade is a sleek cybernetic marvel crafted from advanced alloys and powered by quantum core technology. This mechanical replacement for your natural arm grants +2 to Strength checks and allows you to leverage its enhanced capabilities with a simple thought command, making it an invaluable asset in combat and manual labor. However, while the arm's presence offers tactical advantages, it also makes you more susceptible to technological threats, imposing disadvantage on saving throws against technomancy.",
    "category": "services",
    "price": 1000,
    "icon": "🦾",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Cybernetic Edge",
      "Tech Vulnerability"
    ],
    "vendor": "cybernetic",
    "shippedBy": "Surgical Drone",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Cybernetic Edge",
        "rules": "Activate as a bonus action. The Bionic Arm Upgrade grants you +2 to Strength checks and Strength saving throws until the start of your next turn."
      },
      {
        "title": "Tech Vulnerability",
        "rules": "You suffer disadvantage on all saving throws against effects with the 'technomancy' descriptor. This effect persists until the end of each long rest or when you are no longer exposed to a technomantic threat."
      }
    ],
    "levelRequirementReason": "The Bionic Arm Upgrade's advanced technology requires a certain level of expertise and physical capacity, making it accessible only after level 8.",
    "vendorReason": "Cybernetic specializes in augmenting human capabilities with cutting-edge cybernetics, including the Bionic Arm Upgrade.",
    "shippingDetail": "The Surgical Drone ensures safe and efficient delivery of your new arm, integrating it seamlessly into your body within a day.",
    "usage": {
      "activation": "Bonus action to activate for Strength benefits; no activation needed for tech vulnerabilities.",
      "duration": "Until the start of your next turn after activation or until exposed to technomantic threats ends.",
      "endsWhen": "Ends when you take a long rest or are no longer exposed to technomancy.",
      "charges": "Unlimited, recharges on a full night's sleep."
    },
    "priceReason": "The Bionic Arm Upgrade is priced at 1000 XP as it provides significant mechanical benefits without overbalancing the game.",
    "priceOriginal": 11200,
    "priceReviewedAt": "2026-07-23T22:01:55.478527+00:00",
    "aiReviewedAt": "2026-07-23T22:01:55.478527+00:00",
    "aiReviewVersion": 1
  },
  "hacktivist_burner_phone": {
    "id": "hacktivist_burner_phone",
    "name": "Burner Phone (Self-Destructs)",
    "description": "The Burner Phone, a sleek device made from salvaged tech and untraceable comms, is a one-time call device crafted for stealthy communication. It grants you one Sending spell to anyone, anywhere, offering a fleeting connection with the world beyond. After your single message, it self-destructs in a fiery blaze, leaving no trace of its use or origin. Its explosive end delivers 2d6 fire damage to you (no save), ensuring that even if intercepted, it incinerates all evidence.",
    "category": "equipment",
    "price": 1000,
    "icon": "📱",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "One Sending spell",
      "Self-Destructs"
    ],
    "vendor": "hacktivist",
    "shippedBy": "Anonymous Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "One Sending Spell",
        "rules": "Activation: Use an action. Range: 10 feet. This effect grants you the equivalent of a Sending spell to anyone, anywhere. No save is required. Once used, it cannot be recharged."
      },
      {
        "title": "Self-Destructs",
        "rules": "After use, the phone detonates in an explosion of fire that deals 2d6 fire damage to you (no saving throw). This effect ends immediately upon activation and cannot be used again."
      }
    ],
    "levelRequirementReason": "This device is intended for quick and covert communication, accessible even to those with minimal experience.",
    "vendorReason": "The hacktivist vendor specializes in tools that aid subversive communication and operations.",
    "shippingDetail": "Ships via a trusted courier who ensures no records are left behind, delivered directly to your doorstep.",
    "usage": {
      "activation": "Use an action.",
      "duration": "Instantaneous upon activation.",
      "endsWhen": "The phone detonates after one use.",
      "charges": "Unlimited; self-destructs each time it's used."
    },
    "priceReason": "This price reflects the unique combination of a Sending spell and self-destruct technology, offering both utility and security at an accessible cost.",
    "priceOriginal": 6400,
    "priceReviewedAt": "2026-07-23T22:02:21.352934+00:00",
    "aiReviewedAt": "2026-07-23T22:02:21.352934+00:00",
    "aiReviewVersion": 1
  },
  "servants_cosmic_asteroid_belt": {
    "id": "servants_cosmic_asteroid_belt",
    "name": "Asteroid Belt (Literally)",
    "description": "A belt made from tiny asteroids.",
    "category": "equipment",
    "price": 9800,
    "icon": "🌑",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+1 AC, can cast Meteor Swarm once (then belt breaks)",
      "Belt is heavy: -10 ft speed",
      "Astronomers hate you: disadvantage on Charisma with them"
    ],
    "vendor": "servants_cosmic",
    "shippedBy": "Meteor Mail",
    "levelRequirement": 9
  },
  "asclepia_medical_malpractice_insurance": {
    "id": "asclepia_medical_malpractice_insurance",
    "name": "Medical Malpractice Insurance",
    "description": "The Medical Malpractice Insurance is a rare, leather-bound tome that magically protects you from the worst of healing gone wrong. Crafted by the meticulous hands of Aesclepius, it ensures that if a healer's treatment backfires, you receive compensation in the form of 1000 gp. However, this insurance also makes healers wary, giving them disadvantage on Medicine checks when treating you. Filling out forms is a necessary part of dealing with this insurance, imposing a disadvantage on any relevant check without proper stationery and ink.",
    "category": "services",
    "price": 1000,
    "icon": "🛡️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Healing Gone Wrong Compensation",
      "Wary Healers"
    ],
    "vendor": "Aesclepius",
    "shippedBy": "Medical Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Gone Wrong Compensation",
        "rules": "If a healer's treatment results in harm to you, activate the insurance by presenting it during the healing session. You receive 1000 gp as compensation for any adverse effects, but this only applies once per insured individual."
      },
      {
        "title": "Wary Healers",
        "rules": "While under the protection of Medical Malpractice Insurance, you impose disadvantage on healers' Medicine checks when treating you. This effect lasts until the session ends or a successful DC 15 Wisdom (Medicine) check is made by another healer."
      }
    ],
    "levelRequirementReason": "This insurance is available to anyone who can afford it, as its primary purpose is to protect all who seek healing.",
    "vendorReason": "As the founder of medical ethics and a patron deity of physicians, Aesclepius provides this insurance to ensure that healers are held accountable for their actions.",
    "shippingDetail": "The Medical Courier guarantees swift delivery within one week from the time of purchase, ensuring you can start your protection immediately upon receipt.",
    "usage": {
      "activation": "Activates during a healing session if harm results from treatment.",
      "duration": "Lasts until the end of the healing session or until a successful DC 15 Medicine check is made by another healer.",
      "endsWhen": "The insurance ends when the healer completes their treatment, or if a new healer intervenes and makes a successful check.",
      "charges": "Unlimited uses; the insurance can be activated multiple times."
    },
    "priceReason": "The fair value reflects the rarity of this insurance and its unique protection against unforeseen medical mishaps.",
    "priceOriginal": 7200,
    "priceReviewedAt": "2026-07-23T22:02:23.488678+00:00",
    "aiReviewedAt": "2026-07-23T22:02:23.488678+00:00",
    "aiReviewVersion": 1
  },
  "pony_nobility_magic_hairbrush": {
    "id": "pony_nobility_magic_hairbrush",
    "name": "Magic Hairbrush of Fabulousness",
    "description": "The Magic Hairbrush of Fabulousness is a luxurious brush with an elegant handle and shimmering bristles made from rare, enchanted hair. It's crafted in the grand halls of Pony Nobility by skilled artisans who infuse it with spells that enhance one’s charisma and charm. After use, the user gains +1 Charisma for 8 hours, but their appearance becomes overly dazzling, causing them to be seen as vain in certain situations.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪮",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+1 Charisma",
      "Overly Dazzling Appearance"
    ],
    "vendor": "pony_nobility",
    "shippedBy": "Enchanted Brush Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "When activated by a bonus action, the user gains +1 to their Charisma score for 8 hours. This effect is instantaneous and does not require concentration."
      },
      {
        "title": "Overly Dazzling Appearance",
        "rules": "The user must make a saving throw against charm effects with a DC of 12 due to their overly dazzling appearance, which can be seen as vain behavior. The duration ends when the user stops using it or if they are incapacitated."
      }
    ],
    "levelRequirementReason": "This item is intended for beginners and players who want a minor boost to their charisma without needing high-level features.",
    "vendorReason": "Pony Nobility, known for their exquisite craftsmanship, offers this brush as part of their line of magical accessories designed to enhance social interactions.",
    "shippingDetail": "Delivered with a special charm that ensures the recipient is charmed by its arrival for a brief moment.",
    "usage": {
      "activation": "Bonus action",
      "duration": "8 hours or until incapacitated",
      "endsWhen": "User stops using it or becomes incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the uncommon rarity and enchantments, providing a fair value for the player's in-game benefits.",
    "priceOriginal": 6600,
    "priceReviewedAt": "2026-07-23T22:02:23.109153+00:00",
    "aiReviewedAt": "2026-07-23T22:02:23.109153+00:00",
    "aiReviewVersion": 1
  },
  "lemuria_conclave_memory_eraser": {
    "id": "lemuria_conclave_memory_eraser",
    "name": "Memory Eraser (Single Use)",
    "description": "The Memory Eraser is a fragile vial containing a potent, colorless liquid. It targets one specific memory at your will, erasing it from your mind forever. After use, you suffer a mental fog, suffering disadvantage on any Wisdom (Insight) check for the next day as you forget why you chose to erase that particular memory. The erased memory may resurface under moments of great stress or psychological strain at the Dungeon Master's discretion.",
    "category": "services",
    "price": 1000,
    "icon": "🧠",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Erase one specific memory permanently",
      "Disadvantage on a Wisdom (Insight) check daily"
    ],
    "vendor": "lemuria_conclave",
    "shippedBy": "Psychic Echo",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Memory Erasure",
        "rules": "This vial, when ingested, targets and erases one specific memory from the user's mind. The erased memory may resurface during times of great stress or psychological strain at the Dungeon Master's discretion."
      },
      {
        "title": "Mental Fog",
        "rules": "For 24 hours following use, the user suffers a -5 penalty to Wisdom (Insight) checks due to forgetting why they chose to erase that memory."
      }
    ],
    "levelRequirementReason": "This item is only accessible to lower-level characters who need it for specific, life-altering circumstances.",
    "vendorReason": "Lemuria Conclave specializes in services and items that help adventurers recover from the mental toll of their journeys.",
    "shippingDetail": "The delivery is handled by Psychic Echo, known for its reliable and quick service, ensuring the item reaches you safely and swiftly.",
    "usage": {
      "activation": "Consume the Memory Eraser as an action.",
      "duration": "Instantaneous; erasure occurs upon activation. The mental fog effect lasts until the next midnight.",
      "endsWhen": "The memory is erased or the user dies, whichever comes first.",
      "charges": "Single use"
    },
    "priceReason": "This price reflects the rarity and the significant mental cost of permanently erasing a memory.",
    "priceOriginal": 11200,
    "priceReviewedAt": "2026-07-23T22:02:37.912163+00:00",
    "aiReviewedAt": "2026-07-23T22:02:37.912163+00:00",
    "aiReviewVersion": 1
  },
  "oracula_cursed_fortune": {
    "id": "oracula_cursed_fortune",
    "name": "Cursed Fortune (Guaranteed Bad Luck)",
    "description": "A wretched fortune that guarantees misfortune in all its forms. This cursed token grants you one guaranteed success, but it will be a calamitous one—so bad that even the caster of this foul item knows they've made a grave mistake. It offers advantage on a single check where the outcome is critical to your plans, but at a terrible cost: disadvantage on two other checks, ensuring unforeseen and dire consequences follow in its wake.",
    "category": "services",
    "price": 1000,
    "icon": "🥠",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Fortune comes true... for the worse",
      "Calamitous success"
    ],
    "vendor": "oracula",
    "shippedBy": "Baked Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Guaranteed Success (Worst Kind)",
        "rules": "You gain advantage on one ability check of your choice. However, this success will be so catastrophic that it brings about additional misfortune."
      },
      {
        "title": "Unforeseen Consequences",
        "rules": "Immediately after you use the item, you and another creature of your choice must each make a DC 15 Charisma saving throw. On a failed save, you both suffer disadvantage on all ability checks until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "Even novice adventurers should know better than to dabble with such dark magic.",
    "vendorReason": "The Oracular Oracle specializes in fateful items, both good and ill.",
    "shippingDetail": "Ships overnight via Baked Delivery's express courier service, ensuring your cursed item arrives fresh from the oven of misfortune.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect with ongoing consequences",
      "endsWhen": "Ends when you or another creature makes a Charisma saving throw on a failed roll",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the item's rare and dangerous nature, ensuring only those who truly understand its peril will purchase it.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-23T22:02:40.175444+00:00",
    "aiReviewedAt": "2026-07-23T22:02:40.175444+00:00",
    "aiReviewVersion": 1
  },
  "halfling_luck_charm_pro": {
    "id": "halfling_luck_charm_pro",
    "name": "Halfling Luck Charm Pro",
    "description": "The Halfling Luck Charm Pro is a small, intricately crafted amulet made from copper and brass, adorned with a delicate charm that seems to shimmer with an otherworldly glow. This trinket grants its bearer a touch of fate’s favor, allowing them to reroll one natural 1 die per day. However, there's a catch; if you roll a natural 20, the charm can backfire, forcing you to reroll again. The charm only activates when used by someone shorter than five feet in height.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍀",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Reroll one natural 1",
      "Backfires on a natural 20"
    ],
    "vendor": "halfling",
    "shippedBy": "Hobbit Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fortunate Reroll",
        "rules": "Activates as an action. The user can reroll one natural 1 they rolled during the day. This effect has no cooldown and is usable once per day."
      },
      {
        "title": "Backfire on a Natural 20",
        "rules": "If the charm backfires, it forces the user to immediately roll again if they rolled a natural 20. The reroll does not count as another use of this effect. This effect has no cooldown and can occur multiple times per day."
      }
    ],
    "levelRequirementReason": "This charm is designed for beginners, providing a simple way to enhance daily luck without overwhelming complexity.",
    "vendorReason": "Halflings are renowned for their luck and often sell items that enhance fortune in various ways.",
    "shippingDetail": "Delivered swiftly, usually within a week of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Used or destroyed upon activation",
      "charges": "Unlimited"
    },
    "priceReason": "The charm's balanced price reflects its daily-use, non-combat utility and moderate risk factor.",
    "priceOriginal": 7200,
    "priceReviewedAt": "2026-07-23T22:02:40.408461+00:00",
    "aiReviewedAt": "2026-07-23T22:02:40.408461+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_beard_of_dwarven_kings": {
    "id": "dwarf_realms_beard_of_dwarven_kings",
    "name": "Beard of Dwarven Kings (Clip-On)",
    "description": "The Beard of Dwarven Kings (Clip-On) is a meticulously crafted, thick, and wiry beard that commands instant respect among dwarves who can't resist its regal allure. When donned, it grants +2 Charisma specifically with dwarf kin, but those elves who dare to mock you feel the itch of their own making, imposing disadvantage on Charisma checks against them. The beard's constant tickle forces a persistent disadvantage on Concentration checks, ensuring even the most focused dwarven mind can't escape its playful nudge.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧔",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+2 Charisma with Dwarves",
      "Disadvantage on Charisma with Elves (mocking you)"
    ],
    "vendor": "dwarf_realms",
    "shippedBy": "Dwarf Beard Oil Delivery Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "+2 Charisma with Dwarves",
        "rules": "The Beard of Dwarven Kings grants the wearer +2 to Charisma checks or saving throws when interacting with other dwarves. This effect is active as long as the beard remains attached and does not require any action."
      },
      {
        "title": "Disadvantage on Charisma with Elves",
        "rules": "When in the presence of elves, the wearer must make a Charisma check at disadvantage due to their mocking behavior towards the beard. This effect is active as long as the wearer is within 30 feet of an elf and does not require any action."
      }
    ],
    "levelRequirementReason": "This item's effects are minor but versatile, suitable for adventurers just starting their journey.",
    "vendorReason": "Dwarven realms is a stronghold of dwarven culture and craftsmanship, making it the ideal vendor for such a regal beard.",
    "shippingDetail": "The beard is shipped in an ornate wooden box with a personalized note from the blacksmith who crafted it.",
    "usage": {
      "activation": "Instantaneous, passive effect as long as the beard remains attached.",
      "duration": "Permanent until removed or destroyed",
      "endsWhen": "Removed by the wearer or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The Beard of Dwarven Kings is crafted with fine materials and dwarven craftsmanship, making it a valuable yet balanced addition to any adventurer's gear.",
    "priceOriginal": 8600,
    "priceReviewedAt": "2026-07-23T22:03:11.715897+00:00",
    "aiReviewedAt": "2026-07-23T22:03:11.715897+00:00",
    "aiReviewVersion": 1
  },
  "greenskins_war_paint_of_waaagh": {
    "id": "greenskins_war_paint_of_waaagh",
    "name": "War Paint of WAAAGH!",
    "description": "The War Paint of WAAAGH! is a thick, emerald-green paste that transforms you into a ravenous warrior. Applied by the Greenskin clan, it imbues you with primal ferocity for the duration. Slathered on your face and torso, this paint grants +1 to attack rolls but forces you to bellow 'WAAAGH!' during combat; doing so imposes disadvantage on Stealth checks. The paint is permanent until you scrub it off with steel wool, a task that leaves you battered and bruised.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎨",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "+1 to attack rolls",
      "Forced battle cry"
    ],
    "vendor": "greenskins",
    "shippedBy": "War Drum Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ferocious Attack",
        "rules": "When you use an action or bonus action to make a melee attack, you gain +1 to the roll. This effect lasts for 8 hours after application."
      },
      {
        "title": "Battle Cry",
        "rules": "You must shout 'WAAAGH!' during your turn when attacking; doing so imposes disadvantage on any Stealth checks you attempt until your next short rest."
      }
    ],
    "levelRequirementReason": "This paint is accessible to all warriors, regardless of level, as it requires no specific training.",
    "vendorReason": "The Greenskin clan creates this war paint for their own use and sells it to those who seek a boost in combat ferocity.",
    "shippingDetail": "The War Drum Courier delivers the paint swiftly, often arriving within a day of order placement.",
    "usage": {
      "activation": "Application at the start of your turn as an action or bonus action.",
      "duration": "8 hours after application.",
      "endsWhen": "When scrubbed off with steel wool; this removes the effect and leaves you vulnerable to pain.",
      "charges": "Unlimited, as the paint is applied in a single use."
    },
    "priceReason": "This price reflects the unique application method and the permanent nature of its effects until scrubbed off.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-23T22:02:58.939316+00:00",
    "aiReviewedAt": "2026-07-23T22:02:58.939316+00:00",
    "aiReviewVersion": 1
  },
  "jotunheimr_giant_gauntlets": {
    "id": "jotunheimr_giant_gauntlets",
    "name": "Giant Gauntlets (Too Big)",
    "description": "These gauntlets, crafted for a giant's formidable hands, are so oversized that they barely fit any human. The metal plates creak and groan under your grip, threatening to buckle at the slightest strain. While your unarmed strikes now deal 1d8 bludgeoning damage, you struggle with delicate tasks; disadvantage on Sleight of Hand checks is a constant nuisance. Touching anything smaller than yourself risks breaking it due to the sheer power in your grasp.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥊",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Unarmed Strikes",
      "Sleight of Hand Disadvantage"
    ],
    "vendor": "jotunheimr",
    "shippedBy": "Giant Courier",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Unarmed Strikes",
        "rules": "Your unarmed strikes deal 1d8 bludgeoning damage. This effect is always active as long as you are wearing the gauntlets."
      },
      {
        "title": "Sleight of Hand Disadvantage",
        "rules": "You have disadvantage on Sleight of Hand checks. This persists for the duration of the gauntlet's use, which can be up to one day if not removed and rested."
      }
    ],
    "levelRequirementReason": "The gauntlets are designed with a giant's strength in mind; only those of similar stature or beyond can wield them effectively.",
    "vendorReason": "Jötunheimr, the land of giants, is renowned for crafting items that suit its monstrous inhabitants. These gauntlets are no exception.",
    "shippingDetail": "The Giant Courier delivers these heavy items with a delay of one week due to their size and weight.",
    "usage": {
      "activation": "Passive effect while wearing the gauntlets.",
      "duration": "Instantaneous activation, permanent until removed or rested for at least 8 hours.",
      "endsWhen": "The gauntlets are removed or rested for a full day.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The rare materials and specialized craftsmanship required to create these gauntlets justify their price.",
    "priceOriginal": 9200,
    "priceReviewedAt": "2026-07-23T22:03:41.526592+00:00",
    "aiReviewedAt": "2026-07-23T22:03:41.526592+00:00",
    "aiReviewVersion": 1
  },
  "high_elves_elven_cloak_of_arrogance": {
    "id": "high_elves_elven_cloak_of_arrogance",
    "name": "Elven Cloak of Arrogance",
    "description": "The Elven Cloak of Arrogance is a finely woven cloak that exudes an air of superiority, its emerald threads shimmering under moonlight. It whispers to the wearer their own arrogance, making them believe they are unmatched among other races. Those who wear it must speak in iambic pentameter when interacting with others, and it grants a +2 bonus on Charisma checks with elves but imposes disadvantage on such checks with non-elves, as they seem beneath you.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧥",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Elvish Charm",
      "Non-Evil Disadvantage"
    ],
    "vendor": "high_elves",
    "shippedBy": "Graceful Stride Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Elvish Charm",
        "rules": "When interacting with elves, the wearer gains a +2 bonus on Charisma checks. This effect lasts until the end of their next long rest."
      },
      {
        "title": "Non-Evil Disadvantage",
        "rules": "The wearer is at disadvantage on Charisma checks and saving throws against non-evil creatures, as they feel these beings are beneath them. This effect persists for 1 hour after interacting with such a creature."
      }
    ],
    "levelRequirementReason": "The Cloak of Arrogance requires a certain level to command its arrogance without causing social disruption.",
    "vendorReason": "The High Elves, known for their pride and finesse, craft this cloak as a symbol of their heritage.",
    "shippingDetail": "Ships within the week via Graceful Stride Express, ensuring the cloak arrives with all its shimmering emerald threads intact.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Lasts until the end of a long rest or when removed.",
      "endsWhen": "The wearer completes a long rest or removes the cloak.",
      "charges": "Unlimited, recharges with a short or long rest."
    },
    "priceReason": "The price reflects its rarity and the complexity of its enchantments without making it overpowered.",
    "priceOriginal": 8600,
    "priceReviewedAt": "2026-07-23T22:03:23.052259+00:00",
    "aiReviewedAt": "2026-07-23T22:03:23.052259+00:00",
    "aiReviewVersion": 1
  },
  "dark_elves_spider_silk_armor": {
    "id": "dark_elves_spider_silk_armor",
    "name": "Spider Silk Armor",
    "description": "Forged from the silken threads of Arachnath, the ancient spiders of the Dark Elven forests, this armor weaves a protective layer around you. Its weightless spider silk clings to your form like a second skin, granting you unmatched agility and grace in combat. You can climb sheer stone walls as if they were made of sand, and your movements become so fluid that even arachnophobes are left breathless with awe or terror.",
    "category": "equipment",
    "price": 1000,
    "icon": "🕷️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Climb Like a Spider",
      "Arachnid Aura"
    ],
    "vendor": "dark_elves",
    "shippedBy": "Web Delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Climb Like a Spider",
        "rules": "You have advantage on Dexterity (Acrobatics) checks to climb. Additionally, you can move up and down walls as if they were easy terrain."
      },
      {
        "title": "Arachnid Aura",
        "rules": "While wearing this armor, arachnophobes within 30 feet of you must succeed on a DC 14 Wisdom saving throw or be frightened until the end of their next turn. This effect can only occur once per day."
      }
    ],
    "levelRequirementReason": "The intricate weaving and magical properties of the armor demand a certain level of skill to properly harness its benefits.",
    "vendorReason": "The Dark Elves are renowned for their mastery over spider silk, which is why they alone can craft such delicate yet formidable armor.",
    "shippingDetail": "Delivered by Arachnath's own swift spiders, this armor arrives within a week of your order, woven with the precision and care of its creators.",
    "usage": {
      "activation": "Passive effect upon donning the armor.",
      "duration": "Until removed or until you take off more than one piece of armor.",
      "endsWhen": "The armor is removed or if you gain more than one layer of armor.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from rare spider silk and imbued with ancient enchantments, this armor offers unparalleled agility and a unique defensive advantage.",
    "priceOriginal": 9800,
    "priceReviewedAt": "2026-07-23T22:03:24.765677+00:00",
    "aiReviewedAt": "2026-07-23T22:03:24.765677+00:00",
    "aiReviewVersion": 1
  },
  "trainer_guild_pokeball_shield": {
    "id": "trainer_guild_pokeball_shield",
    "name": "Poké Ball Shield",
    "description": "This Poké Ball Shield gleams with a metallic sheen, its surface etched with the familiar red and white stripes of a Poké Ball. Crafted in the heart of the Pokémon League, it not only adds +2 AC to your defenses but also reflects spells of 3rd level or lower, turning them back on their caster. Be wary, however; when the shield opens unexpectedly, you must succeed on a Dexterity saving throw or find yourself 'captured,' restrained in place for one round as if by an unseen Poké Ball.",
    "category": "equipment",
    "price": 7200,
    "icon": "⚪",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+2 AC",
      "Reflect spells of 3rd level or lower (1/day)"
    ],
    "vendor": "trainer_guild",
    "shippedBy": "Pokedex Delivery",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Spell Reflection",
        "rules": "When you use the Poké Ball Shield to reflect a spell, the spell is redirected back at its caster. The spell has disadvantage on this redirection attempt and deals double damage if it hits the caster instead."
      },
      {
        "title": "Unexpected Capture",
        "rules": "If the shield opens while in your possession, you must make a Dexterity saving throw (DC 12). Failure results in you being 'captured'—restrained for one round as if by an unseen Poké Ball. This effect can only occur once per long rest."
      }
    ],
    "levelRequirementReason": "The Poké Ball Shield requires a minimum level of 6 to wield, ensuring that users are proficient in combat and spellcasting.",
    "vendorReason": "The Trainer's Guild is well-known for its connection with Pokémon trainers and their gear, making it the ideal vendor for this item.",
    "shippingDetail": "Ships via Pokedex Delivery within a week, ensuring safe arrival to your doorstep.",
    "usage": {
      "activation": "As an action, you can activate the shield's spell reflection ability.",
      "duration": "Instantaneous for each use; lasts until used.",
      "endsWhen": "Used once per day or expended in combat.",
      "charges": "1/long rest"
    },
    "priceReason": "The Poké Ball Shield's unique crafting process and powerful defensive abilities justify its high price.",
    "priceOriginal": 7200,
    "priceReviewedAt": "2026-07-23T22:04:34.644952+00:00",
    "aiReviewedAt": "2026-07-23T22:04:34.644952+00:00",
    "aiReviewVersion": 1
  },
  "crimision_isle_pirate_cutlass": {
    "id": "crimision_isle_pirate_cutlass",
    "name": "Pirate Cutlass 'The Sea's Revenge'",
    "description": "The Pirate Cutlass 'The Sea's Revenge' is a fearsome weapon forged from the bones of its many victims. Its blade thirsts for blood and whispers of the sea's fury. This cursed cutlass deals +1d6 damage to creatures with blood, but it demands a daily dose of violence; failing to deliver leaves you with a gash that bleeds 1d6 points of damage. On ships, it grants advantage on Intimidation checks, for only the most ruthless sailors dare wield its power.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+1 scimitar",
      "daily bloodshed requirement"
    ],
    "vendor": "crimision_isle",
    "shippedBy": "Pirate Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Bloodthirsty Blade",
        "rules": "The cutlass deals +1d6 damage to creatures with blood. If you do not deal at least 10 points of slashing damage to a creature with blood each day, the cutlass retaliates by dealing 1d6 damage to you."
      },
      {
        "title": "Sea's Fury",
        "rules": "While aboard a ship, you gain advantage on Intimidation checks. This advantage is lost if you fail an Intimidation check or if you leave the ship without having dealt bloodshed that day."
      }
    ],
    "levelRequirementReason": "This cutlass demands a seasoned sailor who can handle its volatile nature and ensure it doesn't turn against them.",
    "vendorReason": "The crew of Crimision Isle are no strangers to the wrath of 'The Sea's Revenge' and have learned how to handle it responsibly.",
    "shippingDetail": "Delivered by trusted hands, but beware: the cutlass may test its new owner during transit.",
    "usage": {
      "activation": "Instantaneous use",
      "duration": "Until you deal bloodshed or leave the ship without fulfilling your daily requirement",
      "endsWhen": "You fail an Intimidation check while aboard a ship, or you do not meet the daily bloodshed requirement",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced against other uncommon weapons, this cutlass's cursed nature and daily upkeep justify its price.",
    "priceOriginal": 8600,
    "priceReviewedAt": "2026-07-23T22:03:41.402559+00:00",
    "aiReviewedAt": "2026-07-23T22:03:41.402559+00:00",
    "aiReviewVersion": 1
  },
  "blessed_order_holy_mace": {
    "id": "blessed_order_holy_mace",
    "name": "Holy Mace of the Blessed Order",
    "description": "The Holy Mace of the Blessed Order is a hallowed weapon forged from blessed iron by the hands of skilled artisans. Its head glows faintly with a holy light, and its haft is adorned with intricate symbols that ward away unholy forces. This mace not only strikes down undead and fiends with radiant power but also requires daily prayer to maintain its divine blessing; otherwise, it reverts to an ordinary mace until the next morning’s dawn.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔨",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+2 Mace",
      "Radiant Damage +1d8 vs Undead and Fiends"
    ],
    "vendor": "blessed_order",
    "shippedBy": "Holy Procession",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Divine Strike",
        "rules": "When you hit a target with this mace, it deals an additional 1d8 radiant damage to undead and fiendish creatures. This effect requires no action."
      },
      {
        "title": "Daily Prayer Requirement",
        "rules": "You must spend at least one hour in prayer each day. If you fail to do so, the mace loses its magical properties for 24 hours until it is prayed over again."
      }
    ],
    "levelRequirementReason": "The mace's divine power requires a certain spiritual discipline that only a seasoned paladin or cleric can maintain.",
    "vendorReason": "The Blessed Order is known for its sacred relics and ensures the purity of their holy weapons.",
    "shippingDetail": "Ships with ceremonial blessings, adding a day to delivery but ensuring the mace arrives in pristine condition.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "Instantaneous; reverts after prayer period",
      "endsWhen": "Prayer period ends or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a reasonable price to reflect its daily maintenance requirement and divine power.",
    "priceOriginal": 9400,
    "priceReviewedAt": "2026-07-23T22:03:39.874245+00:00",
    "aiReviewedAt": "2026-07-23T22:03:39.874245+00:00",
    "aiReviewVersion": 1
  },
  "sirsirian_ocean_trident_of_tides": {
    "id": "sirsirian_ocean_trident_of_tides",
    "name": "Trident of Tides",
    "description": "The Trident of Tides is forged from the bones of ancient sea serpents and the teeth of stormy waves. Its prongs shimmer with the light of lighthouses, and it hums in harmony with ocean tides. This weapon can command the seas, creating or destroying water within its range, and grants advantage to attacks made while in the midst of the waves. However, on land, it causes you to miss your mark, as if the sea itself has abandoned you.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔱",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+2 trident",
      "Advantage on attacks in water"
    ],
    "vendor": "sirsirian_ocean",
    "shippedBy": "Tidal Wave Express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Control Water",
        "rules": "Can cast Create or Destroy Water (3/day) with a bonus action. Range: Self. Duration: Instantaneous; ends when the effect is used up."
      },
      {
        "title": "Submerged Strike",
        "rules": "Advantage on attacks made in water within 60 feet. Disadvantage on attacks not made while in water, as if you miss the sea entirely."
      }
    ],
    "levelRequirementReason": "The Trident of Tides requires a character to be at least 8th level to wield its power effectively.",
    "vendorReason": "Sirsirian Ocean is known for their deep-sea treasures and the Trident's unique connection to oceanic lore makes it an ideal fit for their shop.",
    "shippingDetail": "The Trident of Tides is shipped via Tidal Wave Express, ensuring safe passage through treacherous waters to reach its new owner.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous per use",
      "endsWhen": "Effect ends when the daily limit is reached or a new action is taken",
      "charges": "3 charges; recharges on completion of a long rest"
    },
    "priceReason": "The Trident's rarity and unique abilities justify its fair price of 1000 XP.",
    "priceOriginal": 10200,
    "priceReviewedAt": "2026-07-23T22:03:56.723893+00:00",
    "aiReviewedAt": "2026-07-23T22:03:56.723893+00:00",
    "aiReviewVersion": 1
  },
  "saddle_arabia_camel_saddle_of_comfort": {
    "id": "saddle_arabia_camel_saddle_of_comfort",
    "name": "Camel Saddle of Eternal Comfort",
    "description": "The Camel Saddle of Eternal Comfort is a hand-carved masterpiece from the deserts of Arabia. Its leather is treated with oils that repel sand, and its design allows for perfect balance on even the longest journeys. Dismounting requires you to succeed a DC 15 Wisdom saving throw or risk falling off due to sheer comfort. Camels adore this saddle; it grants you advantage on Animal Handling checks when dealing with them.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐪",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Camel's Comfort",
      "Dismount Difficulty"
    ],
    "vendor": "saddle_arabia",
    "shippedBy": "Camel Caravan",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Camel's Comfort",
        "rules": "While mounted, you have advantage on saving throws against exhaustion and can attempt to Animal Handle camels. This benefit lasts until the end of your next long rest."
      },
      {
        "title": "Dismount Difficulty",
        "rules": "You must succeed a DC 15 Wisdom saving throw at the start of each of your turns while mounted on this saddle, or you fall off and are disoriented for 1 minute. You can repeat the save at the end of each of your turns."
      }
    ],
    "levelRequirementReason": "This saddle is designed to be accessible to beginners, as it requires no specific character level.",
    "vendorReason": "Saddle Arabia specializes in desert gear and this item perfectly complements their range of camel-related products.",
    "shippingDetail": "Ships with the next caravan, usually within a month from the date of purchase.",
    "usage": {
      "activation": "Passive effect while mounted on the saddle.",
      "duration": "Until the end of your next long rest or until you dismount and fall off due to failed Wisdom saving throw.",
      "endsWhen": "You are no longer mounted, fail a Wisdom saving throw, or successfully make three consecutive saves.",
      "charges": "Unlimited"
    },
    "priceReason": "The saddle's exotic materials and craftsmanship justify this price point.",
    "priceOriginal": 7200,
    "priceReviewedAt": "2026-07-23T22:03:59.581536+00:00",
    "aiReviewedAt": "2026-07-23T22:03:59.581536+00:00",
    "aiReviewVersion": 1
  },
  "ratchet_raiders_wrench_of_tinkering": {
    "id": "ratchet_raiders_wrench_of_tinkering",
    "name": "Wrench of Infinite Tinkering",
    "description": "The Wrench of Infinite Tinkering is a rusted, hand-forged tool with a handle that's been hammered into a spiral. Crafted from scavenged metal and imbued with the spirit of an old raider, it hums faintly when you use it to fix something. It can mend almost any broken mechanism or gadget, though the repairs are often makeshift, lasting only as long as your next rest before they fail again. The wrench compels you to tinker continuously; if you ignore a broken item, you must roll with disadvantage on all checks until you address it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔧",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Repairs",
      "Temporary Fixes Fail"
    ],
    "vendor": "ratchet_raiders",
    "shippedBy": "Rusty Runner",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Repairs",
        "rules": "When using your action to repair a broken item, you gain advantage on the Repair check. This effect can be used once per short rest."
      },
      {
        "title": "Temporary Fixes Fail",
        "rules": "Items repaired with this wrench last for 1d4 hours before breaking again. Until then, they function as normal but are considered made of subpar materials. You feel compelled to fix them; if you ignore a broken item, you have disadvantage on all ability checks until it is addressed."
      }
    ],
    "levelRequirementReason": "This wrench requires no specific level because its power lies in its versatility and the spirit of tinkering rather than advanced knowledge.",
    "vendorReason": "The Ratchet Raiders specialize in salvaging and repairing broken gear, so they naturally sell tools like this one that help them do their job better.",
    "shippingDetail": "Ships via the Rusty Runner, a creaky wagon known for its unpredictable delivery times but reliable service within the region.",
    "usage": {
      "activation": "As an action to repair a broken item.",
      "duration": "1d4 hours before repairs fail again.",
      "endsWhen": "The next time you rest after using it, or if the item is ignored for too long.",
      "charges": "Unlimited"
    },
    "priceReason": "This wrench's price reflects its uncommon utility and the unique enchantment that imbues it with a raider spirit.",
    "priceOriginal": 8200,
    "priceReviewedAt": "2026-07-23T22:04:14.857032+00:00",
    "aiReviewedAt": "2026-07-23T22:04:14.857032+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_gold_digger_shovel": {
    "id": "wario_land_gold_digger_shovel",
    "name": "Gold Digger's Shovel",
    "description": "The Gold Digger's Shovel is a sturdy tool forged from iron and imbued with the spirit of a long-dead miner. It grants you an edge in treasure hunts, providing advantage on checks to locate buried wealth. However, every time you use it near gold or valuable objects, you must dig for it, risking angering whatever guardian they have. The shovel's curse ensures that you cannot pass by any significant find without uncovering its secrets.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛏️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Treasure Checks",
      "Curse of the Miner"
    ],
    "vendor": "wario_land",
    "shippedBy": "Heavy Package Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Treasure Checks",
        "rules": "When using this shovel to search for treasure, you gain advantage on any Wisdom (Perception) check made to locate hidden or buried wealth."
      },
      {
        "title": "Curse of the Miner",
        "rules": "Whenever you use this shovel near a significant find of gold or valuable objects, roll a d20. On an even result, you must immediately dig up and uncover what lies beneath. This might provoke the ire of the guardian."
      }
    ],
    "levelRequirementReason": "A beginner miner can handle this shovel's basic operation without needing much experience.",
    "vendorReason": "Wario Land is known for finding and selling unique tools from various treasure-hunting expeditions.",
    "shippingDetail": "Delivered with extra padding to protect the sturdy shovel during transit.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Instantaneous",
      "endsWhen": "The action is used; ends when you stop using it",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the shovel's utility and unique curse.",
    "priceOriginal": 7600,
    "priceReviewedAt": "2026-07-23T22:04:10.847394+00:00",
    "aiReviewedAt": "2026-07-23T22:04:10.847394+00:00",
    "aiReviewVersion": 1
  },
  "millennium_millennial_sword": {
    "id": "millennium_millennial_sword",
    "name": "Millennial Sword (Participation Trophy)",
    "description": "The Millennial Sword (Participation Trophy) is a longsword forged from the collective spirit of countless battles. It hums with the shared memories and resilience of those who fought, granting +1 to attack and damage rolls. While its wielder feels entitled and gains advantage on Charisma checks related to other millennials, it imposes a disadvantage when attempting intimidating feats, as the sword itself seems to whisper doubts about one's true worth.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗡️",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "+1 longsword",
      "Entitlement Advantage"
    ],
    "vendor": "millennium",
    "shippedBy": "Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Tangible Spirit Boost",
        "rules": "When you make an attack with this longsword, it deals +1 damage. Additionally, when making Charisma checks against other millennials, you have advantage."
      },
      {
        "title": "Entitlement and Self-Doubt",
        "rules": "You gain disadvantage on saving throws against effects related to greed or excessive self-importance. This effect is tied to the sword's history of serving as a symbol for those who fought but not necessarily excelled in the war."
      }
    ],
    "levelRequirementReason": "The sword's power is accessible to all, recognizing every participant’s contribution regardless of outcome.",
    "vendorReason": "As the official supplier of war memorabilia, Millennium ensures that everyone receives a piece of history.",
    "shippingDetail": "Ships with Courier's Swift Delivery, ensuring timely arrival to all who fought in the war.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "Concentration up to 1 minute (recharges on a short or long rest)",
      "endsWhen": "Lost concentration, ends if you take damage, or when you finish a short or long rest",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect the sword's historical and sentimental value without overvaluing it.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T22:04:13.200201+00:00",
    "aiReviewedAt": "2026-07-23T22:04:13.200201+00:00",
    "aiReviewVersion": 1
  },
  "mu_empire_ancient_sandals": {
    "id": "mu_empire_ancient_sandals",
    "name": "Ancient Sandals of the Mu Empire",
    "description": "The Ancient Sandals of the Mu Empire are crafted from weathered leather dyed with hues of forgotten empires. They whisper tales as you stride, their age-old soles offering a speed boost and insight into ancient history. Yet, they are fragile, snapping under critical blows that send you sprawling. These sandals also imbue wearers with a sense of the past, granting advantage on History checks but imposing disadvantage against necrotic damage.",
    "category": "equipment",
    "price": 1000,
    "icon": "🩴",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+10 speed",
      "Advantage on History checks"
    ],
    "vendor": "mu_empire",
    "shippedBy": "Silk Road Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "The sandals increase your walking speed by +10 feet. This effect is passive and lasts until the end of each long rest."
      },
      {
        "title": "History Insight",
        "rules": "While wearing these sandals, you gain advantage on History checks. This effect persists for 24 hours after donning them but does not stack with other similar effects."
      }
    ],
    "levelRequirementReason": "These sandals are crafted for travelers and historians who need a bit of ancient knowledge to aid their quests.",
    "vendorReason": "The Mu Empire is renowned for its preservation and study of ancient artifacts, making these sandals a fitting addition to the vendor's offerings.",
    "shippingDetail": "Delivered via the treacherous but reliable Silk Road route. Allow two weeks for delivery due to potential hazards along the journey.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Lasts until the end of each long rest or until removed.",
      "endsWhen": "Removed from your feet or at the start of a new long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The sandals are crafted with ancient leather and infused with knowledge, making them moderately priced for their utility.",
    "priceOriginal": 8200,
    "priceReviewedAt": "2026-07-23T22:04:39.100777+00:00",
    "aiReviewedAt": "2026-07-23T22:04:39.100777+00:00",
    "aiReviewVersion": 1
  },
  "mages_guild_spellbook_of_plagiarism": {
    "id": "mages_guild_spellbook_of_plagiarism",
    "name": "Spellbook of Plagiarism",
    "description": "The Spellbook of Plagiarism is a leather-bound tome with ink that seems to bubble and shift. It whispers spells as it copies them, but always alters the wording in a way that's just off—enough for a DM to change one critical word. Copies of copied spells are even more mangled, leading to potential legal entanglements with the original spellcaster who may challenge you to an impromptu duel of wits and words.",
    "category": "equipment",
    "price": 1000,
    "icon": "📖",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Copy Spell",
      "Legal Trouble"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Copy Spell",
        "rules": "You can copy a spell you observe being cast once per day. The copied spell is slightly altered: the DM changes one word in the spell's description, making it unpredictable and potentially less powerful."
      },
      {
        "title": "Legal Trouble",
        "rules": "The original spellcaster may sue for plagiarism if they catch you. You must make a Charisma saving throw (DC 15) with them present; on failure, you are marked as a plagiarist until the matter is resolved."
      }
    ],
    "levelRequirementReason": "Copying and adapting spells requires some experience in spellcasting.",
    "vendorReason": "The Mages' Guild deals with all aspects of magical knowledge, including the murky waters of intellectual property.",
    "shippingDetail": "Ships via the Arcane Relay's fastest courier, ensuring your spellbook arrives in pristine condition.",
    "usage": {
      "activation": "Standard action to observe and copy a spell.",
      "duration": "Instantaneous copying; effect lasts until used or spell is lost.",
      "endsWhen": "The copied spell is used or the book is destroyed by fire.",
      "charges": "Unlimited, but only one spell can be copied per day."
    },
    "priceReason": "Balanced price for a rare item that offers limited daily use and unpredictable results.",
    "priceOriginal": 9800,
    "priceReviewedAt": "2026-07-23T22:04:26.813165+00:00",
    "aiReviewedAt": "2026-07-23T22:04:26.813165+00:00",
    "aiReviewVersion": 1
  },
  "data_merchant_statistical_armor": {
    "id": "data_merchant_statistical_armor",
    "name": "Statistical Armor (Based on Probability)",
    "description": "The Statistical Armor (Based on Probability) is a peculiar piece of armor that seems to exist only when it suits its wearer. Crafted from an unknown alloy, it appears and disappears at will, leaving its wearer in a state of constant doubt regarding its reality. At the start of each day, you roll 1d4 to determine your AC bonus (values: 1-4). When the armor is active, you gain advantage on Deception checks, making lies seem plausible even to the most skeptical observers. However, when the illusion fades, you suffer disadvantage on saving throws against illusions, as the world around you seems to question your senses.",
    "category": "equipment",
    "price": 1000,
    "icon": "📊",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Dayly AC Roll",
      "Advantage on Deception"
    ],
    "vendor": "data_merchant",
    "shippedBy": "Data Stream",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Daily AC Roll",
        "rules": "At the start of each day, roll a d4 to determine your AC bonus for that day. The value ranges from 1 to 4."
      },
      {
        "title": "Advantage on Deception",
        "rules": "While wearing this armor, you gain advantage on all Deception checks until it becomes invisible or is destroyed."
      }
    ],
    "levelRequirementReason": "The Statistical Armor requires a level 6 character due to its complex magical properties.",
    "vendorReason": "The Data Merchant, known for their wide array of unique and strange items, carries this armor as part of an exclusive collection.",
    "shippingDetail": "Shipped via the Data Stream courier within 3 days.",
    "usage": {
      "activation": "Passive effect until destroyed or dispelled by magic.",
      "duration": "Instantaneous, daily re-roll.",
      "endsWhen": "Destroyed by a successful Dispel Magic spell or when its wearer no longer believes in it.",
      "charges": "Unlimited"
    },
    "priceReason": "The Statistical Armor is priced at 1000 XP due to its unique and unreliable nature, offering both advantages and disadvantages.",
    "priceOriginal": 8600,
    "priceReviewedAt": "2026-07-23T22:04:30.002001+00:00",
    "aiReviewedAt": "2026-07-23T22:04:30.002001+00:00",
    "aiReviewVersion": 1
  },
  "changeling_hive_personality_swap_potion": {
    "id": "changeling_hive_personality_swap_potion",
    "name": "Personality Swap Potion (Temporary)",
    "description": "The Changeling Hive Personality Swap Potion, a frothy elixir in a glass vial, can temporarily exchange your personality traits with that of another creature within reach. After imbibing, you and the targeted creature experience each other's strengths and flaws for an hour, leaving both of you confused and disoriented until the swap ends. The potion is crafted from the essence of Changeling dreams and the forgotten lore of their hive networks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧪",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Swap personalities with nearest creature",
      "Gain all proficiencies and flaws of the target"
    ],
    "vendor": "changeling_hive",
    "shippedBy": "Metamorphic Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Swap Personalities (1 hour)",
        "rules": "Drink this potion to temporarily exchange personalities with a creature within reach. Both you and your target gain each other's proficiencies and flaws for one hour, after which both creatures are confused and disoriented until the swap ends. The effect can be negated by either party succeeding on a Wisdom saving throw (DC 15)."
      },
      {
        "title": "Confusion",
        "rules": "For one minute after the personality swap ends, you and your target are both confused and disoriented. This condition imposes disadvantage on all ability checks and attack rolls until it is ended."
      }
    ],
    "levelRequirementReason": "The potion requires a basic understanding of personal boundaries and the willingness to temporarily accept another's traits.",
    "vendorReason": "As creators and shapeshifters, Changelings are experts in swapping identities and can brew this potion with precision.",
    "shippingDetail": "Delivered by trusted Changeling messengers who ensure the potion remains potent until it is consumed.",
    "usage": {
      "activation": "Drink",
      "duration": "1 hour",
      "endsWhen": "Both creatures are confused for 1 minute after the swap ends, and the effect can be negated with a successful Wisdom saving throw (DC 15).",
      "charges": "Unlimited"
    },
    "priceReason": "The potion's rarity and the complexity of its ingredients justify its moderate price.",
    "priceOriginal": 7600,
    "priceReviewedAt": "2026-07-23T22:05:09.522217+00:00",
    "aiReviewedAt": "2026-07-23T22:05:09.522217+00:00",
    "aiReviewVersion": 1
  },
  "cybernetic_memory_chip_implant": {
    "id": "cybernetic_memory_chip_implant",
    "name": "Memory Chip Implant",
    "description": "The Memory Chip Implant is a surgically inserted cybernetic device that enhances memory retention. It allows you to store up to ten perfect memories, each etched with vivid detail. However, it also leaves you more vulnerable; the implant's presence makes you susceptible to hacking attempts by granting disadvantage on saving throws against memory-altering effects. Over time, your natural memory begins to degrade, imposing a disadvantage on Wisdom (Memory) checks unless you rest and recharge the chip.",
    "category": "services",
    "price": 1000,
    "icon": "💾",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Perfect Memory Storage",
      "Vulnerability to Hacking"
    ],
    "vendor": "cybernetic",
    "shippedBy": "Surgical Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Perfect Memory Storage",
        "rules": "You can store up to ten memories, each with perfect recall. This effect is passive and does not require activation."
      },
      {
        "title": "Vulnerability to Hacking",
        "rules": "While the chip is active, you are vulnerable to hacking attempts. On a failed saving throw against such effects, you must make an additional Wisdom (Memory) check at disadvantage. The chip can be hacked once per long rest."
      }
    ],
    "levelRequirementReason": "The Memory Chip Implant is designed for beginners who need to enhance their memory but are not yet at the level of advanced spellcasters.",
    "vendorReason": "Cybernetic specializes in enhancing physical and mental capabilities, making them a logical vendor for this implant.",
    "shippingDetail": "The Surgical Drone ensures a swift and precise delivery, guaranteeing that the implant is inserted correctly upon arrival.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Permanent until removed or hacked.",
      "endsWhen": "Removed by a successful surgery check or hacked once per long rest.",
      "charges": "Unlimited, but can be hacked."
    },
    "priceReason": "The Memory Chip Implant offers significant memory enhancement at an affordable price point, balancing its powerful effects with a lower cost to ensure it is accessible for players of all levels.",
    "priceOriginal": 10200,
    "priceReviewedAt": "2026-07-23T22:04:47.363089+00:00",
    "aiReviewedAt": "2026-07-23T22:04:47.363089+00:00",
    "aiReviewVersion": 1
  },
  "hacktivist_zero_day_exploit": {
    "id": "hacktivist_zero_day_exploit",
    "name": "Zero-Day Exploit (Single Use)",
    "description": "The Zero-Day Exploit is a sleek, metallic disc embedded with a microchip that glows faintly when activated. Crafted from salvaged electronics and ancient data, this single-use exploit allows you to bypass any technological security once. However, its activation alerts the authorities, who will hunt you for exactly one week thereafter. Wario, a notorious figure in the hacker underground, takes credit for your exploits, leaving you with a reputation tarnished by his shadowy influence.",
    "category": "services",
    "price": 1000,
    "icon": "💻",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Bypass one technological security system",
      "Alerts the authorities: they hunt you for one week"
    ],
    "vendor": "hacktivist",
    "shippedBy": "Anonymous Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Security Bypass",
        "rules": "When activated, this disc allows the user to automatically succeed on a single Technology or Thieves' Tools check. The effect is instantaneous and has no duration."
      },
      {
        "title": "Authority Alert",
        "rules": "The item's activation triggers an alert that results in authorities hunting you for exactly one week. This effect ends when the week is up, regardless of any other conditions."
      }
    ],
    "levelRequirementReason": "This exploit can be used by characters with basic technological knowledge and a sense of adventure.",
    "vendorReason": "The hacktivist specializes in tools that push the boundaries of technology, making this item an essential part of their inventory.",
    "shippingDetail": "Shipped via a trusted courier who ensures discreet delivery.",
    "usage": {
      "activation": "Standard action",
      "duration": "Instantaneous",
      "endsWhen": "One week after activation",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity, limited availability, and the risk involved in its use justify this balanced price.",
    "priceOriginal": 11200,
    "priceReviewedAt": "2026-07-23T22:05:43.284936+00:00",
    "aiReviewedAt": "2026-07-23T22:05:43.284936+00:00",
    "aiReviewVersion": 1
  },
  "servants_cosmic_horoscope_subscription": {
    "id": "servants_cosmic_horoscope_subscription",
    "name": "Premium Horoscope Subscription",
    "description": "Daily prophecies delivered by starlight.",
    "category": "services",
    "price": 6800,
    "icon": "♈",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Each morning: receive a prophecy (DM gives vague hint)",
      "Prophecy is 50% accurate",
      "You become superstitious: disadvantage if you ignore it"
    ],
    "vendor": "servants_cosmic",
    "shippedBy": "Starlight Beam",
    "levelRequirement": 5
  },
  "asclepia_health_potion_subscription": {
    "id": "asclepia_health_potion_subscription",
    "name": "Health Potion Subscription Box",
    "description": "The Health Potion Subscription Box arrives each month, packed in a sturdy wooden crate adorned with the Aesclepius symbol. Inside lies an assortment of potent healing potions, each one crafted by the skilled hands of Aesclepius' apothecaries. While the box contains up to four potent healing potions (2d4+2), there's always a 10% chance that one potion could be mislabeled and potentially harmful if consumed. The subscription auto-renews, draining your coffers by 100 gp monthly until you manually cancel it.",
    "category": "premium",
    "price": 1000,
    "icon": "📦",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Weekly Healing Bonanza",
      "Mislabeled Potions"
    ],
    "vendor": "asclepia",
    "shippedBy": "Medical Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Weekly Healing Bonanza",
        "rules": "Each week, receive a crate containing up to four healing potions (2d4+2). The effects are instantaneous upon consumption and fully restore hit points. This effect is passive and occurs automatically each month."
      },
      {
        "title": "Mislabeled Potions",
        "rules": "There's an 10% chance that one of the potions could be mislabeled as poison. If consumed, it has a save DC of 15 to resist its effects; on failure, you are poisoned for 1d4 hours."
      }
    ],
    "levelRequirementReason": "This item is accessible to players early in their journey, aiding them as they face increasing challenges.",
    "vendorReason": "Aesclepius is renowned for its expertise in medical magic and potions; it's only fitting that they would offer this subscription service.",
    "shippingDetail": "Ships via the Medical Courier, ensuring timely delivery of each month’s batch.",
    "usage": {
      "activation": "Passive effect, occurs weekly with crate arrival.",
      "duration": "Instantaneous upon consumption.",
      "endsWhen": "Subscription is canceled or expires naturally.",
      "charges": "Unlimited; crate arrives monthly."
    },
    "priceReason": "The price reflects the ongoing nature of the subscription, providing regular access to potent healing potions without requiring continuous expenditure.",
    "priceOriginal": 8600,
    "priceReviewedAt": "2026-07-23T22:05:13.751881+00:00",
    "aiReviewedAt": "2026-07-23T22:05:13.751881+00:00",
    "aiReviewVersion": 1
  },
  "pony_nobility_friendship_counseling": {
    "id": "pony_nobility_friendship_counseling",
    "name": "Friendship Counseling (Group Session)",
    "description": "The 'Friendship Counseling (Group Session)' is a rare, golden figurine of two ponies in deep conversation, crafted by the esteemed Pony Nobility to foster unity and understanding among parties. This session grants your party +1 to all saving throws for 24 hours, fostering stronger bonds. However, it also requires every party member to openly share their thoughts and feelings, applying disadvantage on Intimidation checks for a day as trust is built through vulnerability.",
    "category": "services",
    "price": 1000,
    "icon": "💕",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Bonding Boost",
      "Emotional Transparency"
    ],
    "vendor": "pony_nobility",
    "shippedBy": "Heartfelt Message",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Bonding Boost",
        "rules": "All party members gain +1 to all saving throws for 24 hours. This effect ends if the session is interrupted or one member leaves the party."
      },
      {
        "title": "Emotional Transparency",
        "rules": "Each party member must reveal a personal secret at the start of the session, applying disadvantage on Intimidation checks for 1 day thereafter. The session ends if any member fails to comply with this condition."
      }
    ],
    "levelRequirementReason": "This service requires characters to be at least level 5 to handle the emotional depth and complexity of group therapy.",
    "vendorReason": "The Pony Nobility specializes in services that promote harmony and understanding, making them the ideal purveyors of this item.",
    "shippingDetail": "Ships via Heartfelt Message with a one-day delay to ensure the session's effectiveness is maximized.",
    "usage": {
      "activation": "Used as an action at the start of a new day, once per party member.",
      "duration": "24 hours or until interrupted",
      "endsWhen": "The session ends if any party member leaves the group or fails to share their secret.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This service is priced at 1000 XP, reflecting its rarity and the profound impact it has on party dynamics.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-23T22:05:37.113675+00:00",
    "aiReviewedAt": "2026-07-23T22:05:37.113675+00:00",
    "aiReviewVersion": 1
  },
  "lemuria_conclave_past_life_regression_package": {
    "id": "lemuria_conclave_past_life_regression_package",
    "name": "Past Life Regression (Deluxe)",
    "description": "Unlock all your past lives in vivid detail. This deluxe package allows you to remember your entire past life journey, including a random proficiency from one of them that becomes permanent. However, this deep exploration comes with a cost: each day, you suffer flashbacks on one check, granting disadvantage. Additionally, the experience of a past life gone wrong leaves an indelible mark; the DM selects a flaw that affects your character's future adventures.",
    "category": "services",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Random Proficiency",
      "Flashback Vulnerability"
    ],
    "vendor": "lemuria_conclave",
    "shippedBy": "Past Life Echo",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Random Proficiency",
        "rules": "You gain one random proficiency from a past life, which becomes permanent. No save or action is required."
      },
      {
        "title": "Flashback Vulnerability",
        "rules": "Each day, you have disadvantage on one check of your choice until the end of your next long rest. The DM chooses the specific check affected."
      }
    ],
    "levelRequirementReason": "This service is accessible to all adventurers who wish to explore their past lives.",
    "vendorReason": "Lemuria Conclave specializes in arcane and mystical services, including the exploration of one's past lives.",
    "shippingDetail": "The package is delivered within a week by the Past Life Echo, ensuring that you receive all the necessary information for your regression experience.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous (effect lasts until next long rest).",
      "endsWhen": "The effect ends at the start of each new day when a check is made with disadvantage due to flashbacks.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the deep mystical work required for such an extensive regression, including the selection and permanence of a new proficiency.",
    "priceOriginal": 11200,
    "priceReviewedAt": "2026-07-23T22:05:27.319885+00:00",
    "aiReviewedAt": "2026-07-23T22:05:27.319885+00:00",
    "aiReviewVersion": 1
  },
  "oracula_fortune_telling_session": {
    "id": "oracula_fortune_telling_session",
    "name": "Fortune Telling Session (Live)",
    "description": "Oracula, the seer of ancient lore and future truths, invites you to a personal fortune telling session where she reads your palm and gazes into her crystal ball. The encounter is intimate, revealing one cryptic prophecy that can guide or puzzle you for days. Your fate unfolds in her dimly lit chamber, where the air is thick with mysticism and ancient incense. Afterward, any attempt to interpret this prophecy rolls with disadvantage until you seek further clarification.",
    "category": "services",
    "price": 7200,
    "icon": "🔮",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Cryptic Revelation",
      "Disadvantage on Interpretation"
    ],
    "vendor": "oracula",
    "shippedBy": "Baked Delivery",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Cryptic Revelation",
        "rules": "Upon completion of the session, you gain one true prophecy from Oracula. The DM provides a cryptic hint that requires interpretation to uncover its meaning."
      },
      {
        "title": "Disadvantage on Interpretation",
        "rules": "Until further clarification is sought and paid for (100 gp per question), any attempt to interpret the prophecy rolls with disadvantage."
      }
    ],
    "levelRequirementReason": "The session requires a basic understanding of the arcane arts, which is typically gained by at least third level.",
    "vendorReason": "Oracula is renowned for her wisdom and ability to divine truths, making her the ideal vendor for such an intimate experience.",
    "shippingDetail": "The session is conducted in person at Oracula's sanctuary; delivery time varies based on the distance from your location to hers.",
    "usage": {
      "activation": "Once per character, upon payment of 7200 XP and a successful DC 15 Charisma (Performance) check.",
      "duration": "Instantaneous",
      "endsWhen": "The session ends when Oracula completes the reading or you choose to end it prematurely.",
      "charges": "Unlimited, as long as the character remains of third level or higher."
    },
    "priceReason": "The price reflects the cost of a rare and personal encounter with an esteemed seer known for her accuracy in prophecy.",
    "priceOriginal": 7200,
    "priceReviewedAt": "2026-07-23T22:06:22.036807+00:00",
    "aiReviewedAt": "2026-07-23T22:06:22.036807+00:00",
    "aiReviewVersion": 1
  },
  "halfling_second_breakfast_catering_service": {
    "id": "halfling_second_breakfast_catering_service",
    "name": "Second Breakfast Catering (Weekly)",
    "description": "Each morning, a plump halfling arrives bearing an array of pastries and hot beverages, filling your belly with sweet temp HP—1d6 points that bolster you for the day's trials. The generous fare is a joy to behold but leaves its mark: for one hour after feasting, you move as if encumbered, taking disadvantage on Dexterity checks. This weekly catering service transforms ordinary mornings into a symphony of flavors and sustenance, delivered with heart by the Halflings' Guild.",
    "category": "premium",
    "price": 1000,
    "icon": "🥞",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Morning Feast",
      "Encumbering Delight"
    ],
    "vendor": "halfling",
    "shippedBy": "Hobbit Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Morning Feast",
        "rules": "At the start of each long rest, you gain 1d6 temporary hit points. This effect is not cumulative with other sources of temporary hit points and does not trigger if you do not take a long rest."
      },
      {
        "title": "Encumbering Delight",
        "rules": "For one hour after consuming the breakfast, you have disadvantage on Dexterity checks and saving throws. You also become encumbered for this duration, affecting your movement speed and any activity requiring fine motor skills."
      }
    ],
    "levelRequirementReason": "This service is available to all adventurers who can afford its cost.",
    "vendorReason": "The Halflings' Guild specializes in providing services that enhance the daily lives of their patrons, from transportation to culinary delights.",
    "shippingDetail": "Delivered by the trusted Hobbit Post within a week of purchase, ensuring that your morning is always filled with the aroma of freshly baked pastries and steaming beverages.",
    "usage": {
      "activation": "Automatic at the start of each long rest",
      "duration": "One hour after consuming the breakfast",
      "endsWhen": "After one hour or if you consume no food for more than a day",
      "charges": "Unlimited, as it is included in the weekly service"
    },
    "priceReason": "The cost reflects the halflings' dedication to providing quality meals and the unique labor involved in delivering gourmet breakfasts every morning.",
    "priceOriginal": 8600,
    "priceReviewedAt": "2026-07-23T22:06:39.100432+00:00",
    "aiReviewedAt": "2026-07-23T22:06:39.100432+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_beard_mortgage_refinance": {
    "id": "dwarf_realms_beard_mortgage_refinance",
    "name": "Beard Mortgage Refinance",
    "description": "In the heart of Dwarf Realms, this ancient service allows you to refinance your beard loan with a twist. For a modest fee, you can reduce your debt by half and extend the term so that for every day you remain in debt, your beard grows an inch closer to vengeance. Should you default, your beard becomes sentient and seeks its due, growing at a rapid pace until it exacts payment.",
    "category": "services",
    "price": 1000,
    "icon": "💰",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reduce Beard Debt",
      "Beard Growth Extension"
    ],
    "vendor": "dwarf_realms",
    "shippedBy": "Gold Cart",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Reduce Beard Debt",
        "rules": "This service reduces your beard loan debt by 500 gp. The effect is instantaneous and does not require any action to activate."
      },
      {
        "title": "Beard Growth Extension",
        "rules": "For every day you remain in debt, your beard grows 1 inch. This effect lasts until the loan is fully repaid or defaulted upon. On default, the beard becomes sentient and seeks revenge with an aggressive growth rate."
      }
    ],
    "levelRequirementReason": "Basic financial services are available to all adventurers regardless of level.",
    "vendorReason": "Dwarf Realms is known for its robust economy and diverse range of services, including unique beard refinancing options.",
    "shippingDetail": "Delivered by the Gold Cart, ensuring timely service within Dwarf Realms territories.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "Until the debt is repaid or defaulted",
      "endsWhen": "Debt repayment or default",
      "charges": "Unlimited uses"
    },
    "priceReason": "The service offers a reasonable reduction in debt, balanced against its unique and potentially dangerous effects.",
    "priceOriginal": 9200,
    "priceReviewedAt": "2026-07-23T22:05:57.078384+00:00",
    "aiReviewedAt": "2026-07-23T22:05:57.078384+00:00",
    "aiReviewVersion": 1
  },
  "greenskins_waaagh_energy_drink_subscription": {
    "id": "greenskins_waaagh_energy_drink_subscription",
    "name": "WAAAGH! Energy Drink Subscription",
    "description": "The WAAAGH! Energy Drink Subscription arrives each month, delivering a potent batch of Greenskin-brewed energy drinks. With every four drinks consumed within a week, you gain +1 to your attack rolls for that hour. However, the jitters from these drinks make you clumsy; after consuming two, you suffer disadvantage on Dexterity checks until you rest or abstain. The subscription ensures a constant surge of vitality, but beware—overindulgence can lead to addiction, making it harder to focus without another drink in hand.",
    "category": "premium",
    "price": 1000,
    "icon": "🥤",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Weekly Energy Boost",
      "Jitters and Disadvantage"
    ],
    "vendor": "greenskins",
    "shippedBy": "Choppa Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Weekly Energy Boost",
        "rules": "Consume four drinks within a week to gain +1 to your attack rolls for that hour. This effect is instantaneous upon consuming the drinks."
      },
      {
        "title": "Jitters and Disadvantage",
        "rules": "After drinking two or more, you suffer disadvantage on Dexterity checks until you rest or abstain from further drinks."
      }
    ],
    "levelRequirementReason": "This item provides a mild boost suitable for all adventurers regardless of level.",
    "vendorReason": "The Greenskins are known for their relentless energy and this drink is a testament to their resilience and vitality.",
    "shippingDetail": "Delivered by the swift Choppas, ensuring your next batch arrives fresh each month.",
    "usage": {
      "activation": "Consume four drinks within a week to gain +1 attack for that hour.",
      "duration": "Instantaneous upon consumption; lasts for one hour.",
      "endsWhen": "Expires after one hour or when the drink is consumed.",
      "charges": "Unlimited, as long as you continue the subscription."
    },
    "priceReason": "The cost reflects both the rarity and the unique brewing process of these energy drinks.",
    "priceOriginal": 7600,
    "priceReviewedAt": "2026-07-23T22:06:16.738335+00:00",
    "aiReviewedAt": "2026-07-23T22:06:16.738335+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_regency_mycelium_network_subscription": {
    "id": "mushroom_regency_mycelium_network_subscription",
    "name": "Mycelium Network Subscription (Premium)",
    "description": "The Mycelium Network Subscription (Premium) is a rare fungal internet subscription that allows you to communicate telepathically with other premium subscribers within a ten-mile radius. The network thrives in damp, earthy environments, and its spies ensure you are always privy to the latest dirt, granting you advantage on Investigation checks related to underground or fungal lore. However, when you step into pristine, clean spaces, your connection to the Mycelium Network grows stronger, imposing a disadvantage on Charisma-based interactions.",
    "category": "premium",
    "price": 1000,
    "icon": "🍄",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Telepathic Communication",
      "Advantage on Investigation"
    ],
    "vendor": "mushroom_regency",
    "shippedBy": "Spore Cloud Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Telepathic Communication",
        "rules": "You can communicate telepathically with other premium subscribers within 10 miles. This ability is passive and does not require an action."
      },
      {
        "title": "Advantage on Investigation",
        "rules": "When you are investigating something related to the underground or fungal lore, you gain advantage on the check until the end of your next short rest. This effect ends if you spend time in a completely clean environment for more than an hour."
      }
    ],
    "levelRequirementReason": "The Mycelium Network Subscription (Premium) requires no level to activate, as it is designed for all adventurers who wish to be connected.",
    "vendorReason": "Mushroom Regency specializes in fungal-based technology and services, making the Mycelium Network Subscription a natural addition to their product line.",
    "shippingDetail": "The Spore Cloud delivers the subscription within one week of purchase. Delivery is accompanied by a small spore packet that aids in establishing your connection once you receive the service.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the end of your next short rest after spending time in a clean environment for more than an hour.",
      "endsWhen": "Spending over an hour in a completely clean environment.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the rarity and utility of the Mycelium Network Subscription, providing significant advantage without being overpowered.",
    "priceOriginal": 8600,
    "priceReviewedAt": "2026-07-23T22:06:11.066970+00:00",
    "aiReviewedAt": "2026-07-23T22:06:11.066970+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_kingdom_bean_counting_service": {
    "id": "beanbean_kingdom_bean_counting_service",
    "name": "Bean Counting Service (Professional)",
    "description": "Bean Counting Service (Professional) is a meticulous service that ensures your coinage and bean stores are accurately counted. The Bean Counters of Beanbean Kingdom, renowned for their precision, will not only count but also provide you with a detailed report on the purity and authenticity of your beans. With this service, you gain peace of mind knowing every last detail is accounted for—so much so that you may develop a mild obsession with counting, which imposes disadvantage on non-counting checks.",
    "category": "services",
    "price": 1000,
    "icon": "💰",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Accurate Bean Count",
      "Obsessive Compulsion"
    ],
    "vendor": "beanbean_kingdom",
    "shippedBy": "Bean Counter Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Accurate Bean Count",
        "rules": "Upon completion of the service, you gain a +1 bonus to any saving throw or skill check related to counting or inventory management. The service also ensures that your gold is counted with perfect accuracy, finding an additional 5% more than usual (but at a cost of a 5% fee)."
      },
      {
        "title": "Obsessive Compulsion",
        "rules": "If you do not count things regularly after using this service, you suffer disadvantage on non-counting checks. This effect persists until your next short or long rest."
      }
    ],
    "levelRequirementReason": "The service is accessible to all levels as it requires no strenuous effort or skill beyond a keen eye for detail.",
    "vendorReason": "Beanbean Kingdom's expertise in bean counting and authenticity is unparalleled, making them the premier choice for this service.",
    "shippingDetail": "The service is delivered via Bean Counter Express, ensuring timely delivery of your count results within a week.",
    "usage": {
      "activation": "Passive effect upon completion of the service.",
      "duration": "Instantaneous; ongoing with regular counting.",
      "endsWhen": "Disadvantage on non-counting checks ends at the end of a short or long rest.",
      "charges": "Unlimited, as it is a one-time service."
    },
    "priceReason": "The service is moderately priced due to its meticulous nature and the expertise required for accurate counting.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-23T22:06:30.037048+00:00",
    "aiReviewedAt": "2026-07-23T22:06:30.037048+00:00",
    "aiReviewVersion": 1
  },
  "dk_crew_banana_conservation_service": {
    "id": "dk_crew_banana_conservation_service",
    "name": "Banana Conservation Service",
    "description": "The Banana Conservation Service is a meticulously crafted device, forged by the DK Crew to preserve the golden fruits of the tropics forever. This compact contraption can safeguard up to fifty bananas, ensuring they remain firm and ripe for years to come. However, once you've angered the local monkey population, these creatures will show their displeasure, granting you disadvantage on all Animal Handling checks when you're in their presence.",
    "category": "services",
    "price": 1000,
    "icon": "🍌",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Preserve Bananas",
      "Monkey Displeasure"
    ],
    "vendor": "dk_crew",
    "shippedBy": "Barrel Roll Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Preserve Bananas",
        "rules": "Activate the Banana Conservation Service as an action to preserve up to fifty bananas. The preserved bananas are rock hard and cannot spoil, but if thrown, they deal 1d4 bludgeoning damage due to their firmness."
      },
      {
        "title": "Monkey Displeasure",
        "rules": "While carrying the Banana Conservation Service, you suffer a -5 penalty on all Animal Handling checks involving monkeys. This effect persists until you deactivate the service or leave the area where monkeys are present."
      }
    ],
    "levelRequirementReason": "The Banana Conservation Service is accessible to all levels as it serves a practical purpose for any adventurer.",
    "vendorReason": "The DK Crew specializes in services that assist adventurers, and this device fits perfectly into their portfolio of useful items.",
    "shippingDetail": "Delivered via Barrel Roll Delivery, ensuring your bananas arrive fresh and preserved despite the journey.",
    "usage": {
      "activation": "Activate as an action to preserve bananas or deactivate for ongoing effects.",
      "duration": "Instantaneous when activated; ongoing effects last until deactivated.",
      "endsWhen": "Disadvantage on Animal Handling checks with monkeys ends when you leave their presence.",
      "charges": "Unlimited uses, but limited by the number of bananas that can be preserved at one time."
    },
    "priceReason": "The Banana Conservation Service is priced moderately as it provides a valuable service to adventurers who frequently travel through banana-rich regions.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-23T22:07:29.040958+00:00",
    "aiReviewedAt": "2026-07-23T22:07:29.040958+00:00",
    "aiReviewVersion": 1
  },
  "yoshi_clans_egg_daycare_service": {
    "id": "yoshi_clans_egg_daycare_service",
    "name": "Egg Daycare Service (Weekly)",
    "description": "The Egg Daycare Service from Yoshi Clans ensures your eggs are safe and nurtured while you're away, but beware: there's a chance that one of them might hatch into something untamed or dangerous. Each week, you can expect to see at least one hatched egg, though the creature within is unpredictable. Be prepared for the unexpected, as these eggs hold mysteries best left unexplored until they hatch. The service comes with a price: 100 gp per egg per week, and there's no guarantee that the hatchling will be anything other than an enigma.",
    "category": "services",
    "price": 1000,
    "icon": "🥚",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Random Creatures Hatch",
      "50% Chance of Dangerous Hatches"
    ],
    "vendor": "yoshi_clans",
    "shippedBy": "Egg Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hatch Random Creatures Weekly",
        "rules": "Each week, you may claim one hatched egg. The creature that emerges is random and can be anything from a cute animal to something far more sinister."
      },
      {
        "title": "50% Chance of Dangerous Hatches",
        "rules": "There's a 50% chance any hatched egg will yield a dangerous or unpredictable creature, necessitating immediate caution."
      }
    ],
    "levelRequirementReason": "Anyone can use the service to nurture eggs, though the unpredictability of the results is more suited for those with experience.",
    "vendorReason": "Yoshi Clans are renowned for their expertise in egg care and nurturing, ensuring that the eggs they watch over are safe and healthy until you can take them home.",
    "shippingDetail": "The Egg Drop service delivers the hatched eggs directly to your doorstep every week on a specific day, chosen at the time of purchase.",
    "usage": {
      "activation": "Automatic weekly upon payment of the fee.",
      "duration": "Instantaneous; each egg is claimed and delivered once per week.",
      "endsWhen": "The service ends when you no longer pay for it or when all eggs are hatched, whichever comes first.",
      "charges": "Unlimited charges as long as you continue to pay the weekly fee."
    },
    "priceReason": "While the service is relatively inexpensive, the unpredictability and potential danger of the hatchlings make it a premium offering.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T22:06:52.688690+00:00",
    "aiReviewedAt": "2026-07-23T22:06:52.688690+00:00",
    "aiReviewVersion": 1
  },
  "kremling_krew_cannon_rental": {
    "id": "kremling_krew_cannon_rental",
    "name": "Cannon Rental (Hourly)",
    "description": "The Kremling Krew Cannon Rental offers a fearsome hour of firepower. Rent this cannon to unleash 4d10 bludgeoning damage within a 60-foot range, perfect for clearing out dens or drawing the attention of nearby patrols. Failure to return it in one hour results in a -2 penalty on Charisma checks until you do. The cannon has a 10% chance per use to misfire and explode, dousing your foes in 3d6 fire damage.",
    "category": "services",
    "price": 1000,
    "icon": "🔫",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Bludgeoning Blast",
      "Charisma Penalty"
    ],
    "vendor": "kremling_krew",
    "shippedBy": "Cannonball Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bludgeoning Blast",
        "rules": "When you activate the cannon as a bonus action, it deals 4d10 bludgeoning damage to all creatures in a 60-foot line. The cannon must be returned within one hour or risk misfiring and exploding."
      },
      {
        "title": "Charisma Penalty",
        "rules": "If you fail to return the cannon within an hour, you suffer a -2 penalty on Charisma checks until it is returned."
      }
    ],
    "levelRequirementReason": "This rental requires basic combat proficiency.",
    "vendorReason": "The Kremling Krew specializes in community services and equipment rentals for adventurers of all levels.",
    "shippingDetail": "Delivered within the hour, ensuring you have ample time to use your cannon effectively.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous (effect lasts until the end of next turn)",
      "endsWhen": "The cannon misfires and explodes or is returned within one hour",
      "charges": "Unlimited, but only rentable once per day"
    },
    "priceReason": "Balanced at 1000 XP to reflect the cost of materials and labor for an hour-long rental service.",
    "priceOriginal": 8200,
    "priceReviewedAt": "2026-07-23T22:06:45.959583+00:00",
    "aiReviewedAt": "2026-07-23T22:06:45.959583+00:00",
    "aiReviewVersion": 1
  },
  "lizardmen_swamp_guided_tour": {
    "id": "lizardmen_swamp_guided_tour",
    "name": "Swamp Guided Tour (Alligator Included)",
    "description": "Embark on a guided tour of the treacherous swamps where you'll be accompanied by an alligator guide, whose silent presence ensures your path through the murky waters remains unspoken and mysterious. For thirty days, you gain advantage on Survival checks in swampy terrains, but beware, as there's always a 50% chance that no matter how well-guided you are, you'll still find yourself hopelessly lost in the endless muck.",
    "category": "services",
    "price": 1000,
    "icon": "🐊",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Survival Checks",
      "Guided Yet Lost"
    ],
    "vendor": "lizardmen",
    "shippedBy": "Murky Waters Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Survival Checks",
        "rules": "For a duration of 30 days, you gain advantage on all Survival checks made in swamps. This effect is passive and does not require any action to activate."
      },
      {
        "title": "Guided Yet Lost",
        "rules": "There's a 50% chance that despite the guide’s presence, you will still become hopelessly lost within the swamp. This effect occurs randomly during your time on the tour and cannot be avoided."
      }
    ],
    "levelRequirementReason": "This service is suitable for adventurers of any level but especially useful for those new to swampland navigation.",
    "vendorReason": "The Lizardmen are the native guardians of these swamps and thus provide the most authentic guided tours available.",
    "shippingDetail": "The tour is delivered by boat, so ensure you're prepared for a journey through the swamp's deepest waters. Delivery may take an additional day due to the unpredictable nature of the swamps.",
    "usage": {
      "activation": "Passive effect upon purchase and begins immediately.",
      "duration": "30 days from the start of the tour.",
      "endsWhen": "The duration ends after 30 days or when you no longer require it, whichever comes first.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The cost reflects the expertise and resources required to conduct a guided tour through the treacherous swamps.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-23T22:07:06.454666+00:00",
    "aiReviewedAt": "2026-07-23T22:07:06.454666+00:00",
    "aiReviewVersion": 1
  },
  "halfling_gardening_service": {
    "id": "halfling_gardening_service",
    "name": "Halfling Gardening Service (Monthly)",
    "description": "The Halfling Gardening Service arrives monthly, bringing with it a team of industrious halflings who tend to your garden with meticulous care. Each month, their skilled hands produce an average harvest of 2d10 herbs, ensuring your pantry is always well-stocked and fragrant. However, the halflings are known for their whimsical nature; occasionally, they may refuse to grow certain plants, leaving you to decide which crops will thrive in your garden's unique soil.",
    "category": "services",
    "price": 1000,
    "icon": "🌱",
    "stock": 7,
    "rarity": "common",
    "effects": [
      "Sentient Garden",
      "Halfling Consumption"
    ],
    "vendor": "halfling",
    "shippedBy": "Hobbit Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sentient Garden",
        "rules": "The garden gains sentience and may refuse to grow certain plants. The halflings must be convinced otherwise with a successful Charisma (Persuasion) check at a DC of 15, or the targeted plants will not grow for that month."
      },
      {
        "title": "Halfling Consumption",
        "rules": "At the end of each month, the halflings consume 10% of the harvested herbs. This effect is passive and does not require an action from the owner."
      }
    ],
    "levelRequirementReason": "The service requires minimal skill to manage a garden.",
    "vendorReason": "Halflings are known for their agricultural expertise and love of gardens, making them ideal providers for this service.",
    "shippingDetail": "The halfling team arrives via the Hobbit Post within one week of purchase.",
    "usage": {
      "activation": "Passive effect; requires no action from the owner.",
      "duration": "Monthly, recurring until payment is stopped or the contract ends.",
      "endsWhen": "Payment stops or the contract expires.",
      "charges": "Unlimited uses per month"
    },
    "priceReason": "The price reflects the ongoing labor and resources required to maintain a high-quality gardening service.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-23T22:07:29.194121+00:00",
    "aiReviewedAt": "2026-07-23T22:07:29.194121+00:00",
    "aiReviewVersion": 1
  },
  "dwarf_realms_beard_grooming_service": {
    "id": "dwarf_realms_beard_grooming_service",
    "name": "Beard Grooming Service (Royal Treatment)",
    "description": "The Beard Grooming Service (Royal Treatment) is a meticulously crafted grooming experience that ensures your facial hair is in perfect condition. Upon completion, you gain +2 Charisma with Dwarves for 10 days and your beard becomes so majestic it grants disadvantage on Stealth checks within the next hour. However, this royal touch demands respect: you must protect your beard at all times thereafter, incurring a disadvantage on saves against fear of beard damage.",
    "category": "services",
    "price": 1000,
    "icon": "✂️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+2 Charisma with Dwarves for 10 days",
      "Your beard becomes majestic; disadvantage on Stealth checks within the next hour"
    ],
    "vendor": "dwarf_realms",
    "shippedBy": "Beard Oil Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Royal Charm",
        "rules": "This effect increases your Charisma score by +2 when interacting with Dwarves. This bonus lasts for a period of 10 days."
      },
      {
        "title": "Beard's Majesty",
        "rules": "For the duration of one hour after the service, you incur disadvantage on Stealth checks due to your majestic beard."
      }
    ],
    "levelRequirementReason": "The grooming service is accessible to all adventurers who can afford its cost.",
    "vendorReason": "Dwarf Realms specializes in services that cater to the unique needs of their kin, ensuring they always look and feel their best.",
    "shippingDetail": "The Beard Oil Courier Service ensures your grooming service is delivered with the utmost care, arriving within a day.",
    "usage": {
      "activation": "Instantaneous upon completion of the service",
      "duration": "10 days for Charisma boost; 1 hour for Stealth disadvantage",
      "endsWhen": "The effects expire as stated",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to offer a significant but not overpowered enhancement, this service is priced at 1000 XP.",
    "priceOriginal": 7200,
    "priceReviewedAt": "2026-07-23T22:07:06.441664+00:00",
    "aiReviewedAt": "2026-07-23T22:07:06.441664+00:00",
    "aiReviewVersion": 1
  },
  "greenskins_war_drumming_service": {
    "id": "greenskins_war_drumming_service",
    "name": "War Drumming Service (Battle)",
    "description": "When the war drum sounds, a cadre of Greenskin drummers accompanies you into battle. Their rhythmic beats grant +2 to attack rolls for allies within 30 feet. However, their drums are deafening; any attempt at stealth by nearby creatures is automatically failed and they take disadvantage on Dexterity (Stealth) checks. The drummers also claim a share of the spoils, taking 15% of the gold won in combat as their payment.",
    "category": "services",
    "price": 1000,
    "icon": "🥁",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Battle Rhythm",
      "Deafening Beats"
    ],
    "vendor": "greenskins",
    "shippedBy": "War Drum",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Battle Rhythm",
        "rules": "+2 to attack rolls for allies within 30 feet, lasts until the end of your next turn. Ends if you are incapacitated or die."
      },
      {
        "title": "Deafening Beats",
        "rules": "Any creature within 15 feet takes disadvantage on Dexterity (Stealth) checks and is automatically failed. Lasts until the end of your next turn. Ends when the drumming ceases."
      }
    ],
    "levelRequirementReason": "Requires at least third level to effectively use the drummers' support in combat.",
    "vendorReason": "Greenskin drummers are known for their battle prowess and are often hired by commanders looking to bolster their forces with skilled fighters and strategic advantages.",
    "shippingDetail": "Ships via a convoy of Greenskin war drums, ensuring safe delivery but adding one day to the shipping time.",
    "usage": {
      "activation": "Passive effect activated by the presence of the drummers in battle.",
      "duration": "Lasts until the end of your next turn or until you are incapacitated/die.",
      "endsWhen": "The effect ends if you are incapacitated, die, or the drumming ceases.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect the utility and support provided by the drummers in battle.",
    "priceOriginal": 8600,
    "priceReviewedAt": "2026-07-23T22:07:23.992252+00:00",
    "aiReviewedAt": "2026-07-23T22:07:23.992252+00:00",
    "aiReviewVersion": 1
  },
  "jotunheimr_giant_translation_service": {
    "id": "jotunheimr_giant_translation_service",
    "name": "Giant Translation Service",
    "description": "The Jotunheimr Giant Translation Service is a compact, rune-engraved device that allows you to effortlessly understand and speak Giant tongue for seven days. However, your effort may be misinterpreted: giants believe you are mocking them, imposing disadvantage on Charisma checks involving social interactions with them. Additionally, your voice carries the weight of an avalanche, making it difficult to move silently in their presence; you suffer a disadvantage on Stealth checks.",
    "category": "services",
    "price": 1000,
    "icon": "🗣️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Understand and Speak Giant",
      "Disadvantage on Charisma Checks"
    ],
    "vendor": "jotunheimr",
    "shippedBy": "Giant Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Language Mastery",
        "rules": "This effect lasts for 7 days. You gain the ability to understand and speak Giant as if it were your native language, but giants may misinterpret your tone or attempts at humor."
      },
      {
        "title": "Mocked by Giants",
        "rules": "You suffer a disadvantage on Charisma checks when interacting with giants. This effect persists until you complete a long rest."
      }
    ],
    "levelRequirementReason": "This device is designed to be accessible, allowing even the lowest-level adventurers to bridge communication gaps.",
    "vendorReason": "The Jotunheimr shop specializes in services that help travelers navigate encounters with giants and other monstrous races.",
    "shippingDetail": "Delivered by a giant courier who will inform you of your reputation among giants upon arrival, adding flavor to the purchase experience.",
    "usage": {
      "activation": "Passive effect once purchased.",
      "duration": "7 days or until completed long rest.",
      "endsWhen": "Completion of a long rest or expiration after 7 days.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The price reflects the specialized runes and magical energy required to create this device, balancing its utility with the risk it poses in certain social situations.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-23T22:07:39.850600+00:00",
    "aiReviewedAt": "2026-07-23T22:07:39.850600+00:00",
    "aiReviewVersion": 1
  },
  "high_elves_etiquette_lessons": {
    "id": "high_elves_etiquette_lessons",
    "name": "Elven Etiquette Lessons (Crash Course)",
    "description": "Elven Etiquette Lessons (Crash Course) are an immersive experience that transforms your social interactions, granting you a week of refined elven manners and grace. You gain advantage on Charisma checks when dealing with elves, making your conversations smoother and more effective. However, you must walk the fine line of politeness; any attempt at intimidation is met with disadvantage, as your newfound manners would never allow such actions. Each day, an elf may test your etiquette by randomly selecting a check where you face a challenge with disadvantage.",
    "category": "services",
    "price": 1000,
    "icon": "🧘",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Charisma checks with elves",
      "Disadvantage on Intimidation checks"
    ],
    "vendor": "high_elves",
    "shippedBy": "Graceful Stride Express Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elvish Charm Advantage",
        "rules": "Gain advantage on all Charisma checks when interacting with elves for a period of one week. This effect is instantaneous upon completion and lasts exactly seven days."
      },
      {
        "title": "Polite Disincentive",
        "rules": "Suffer disadvantage on any Intimidation check, as your newfound etiquette forbids such actions. The effect remains in place until the course ends or you choose to forgo further lessons."
      }
    ],
    "levelRequirementReason": "These lessons are designed for beginners and anyone seeking a taste of elven refinement.",
    "vendorReason": "The High Elves are the custodians of etiquette, ensuring that all who seek to master it receive their teachings.",
    "shippingDetail": "Ships within three days via Graceful Stride's elite courier network.",
    "usage": {
      "activation": "Instantaneous upon purchase and completion of the lessons.",
      "duration": "One week from the start date.",
      "endsWhen": "The course concludes, or you choose to discontinue participating in it.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced at a cost of 1000 XP, these lessons offer a unique and enriching experience without overwhelming the player's character.",
    "priceOriginal": 7200,
    "priceReviewedAt": "2026-07-23T22:07:53.336814+00:00",
    "aiReviewedAt": "2026-07-23T22:07:53.336814+00:00",
    "aiReviewVersion": 1
  },
  "dark_elves_edgelord_training": {
    "id": "dark_elves_edgelord_training",
    "name": "Edgelord Training Program",
    "description": "The Edgelord Training Program is a shadowy, arcane ritual designed to hone your dark charisma and brooding mystique. For seven days, you gain +2 to Intimidation checks, but suffer disadvantage on Persuasion attempts. Additionally, you become sun-sensitive for the duration of the program, requiring darkness or heavy cloaks in bright light. This training is a rite of passage for Dark Elves, imparted by the ancient and enigmatic Dark Coven.",
    "category": "services",
    "price": 1000,
    "icon": "🖤",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+2 to Intimidation (7 days)",
      "Disadvantage on Persuasion",
      "Sunlight Sensitivity (7 days)"
    ],
    "vendor": "dark_elves",
    "shippedBy": "Shadow Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Intimidation",
        "rules": "Gain +2 bonus to all Intimidation checks. This effect lasts for a duration of seven days and cannot be used again until after the character has completed a long rest."
      },
      {
        "title": "Persuasion Disadvantage",
        "rules": "You are at a disadvantage on all Persuasion checks while under the effects of this program. This persists for the entire period of the training."
      },
      {
        "title": "Sunlight Sensitivity",
        "rules": "You suffer from reduced effectiveness in sunlight, requiring you to either stay in darkness or wear heavy cloaks and hats. This effect lasts for seven days and cannot be mitigated by any means except completing a long rest."
      }
    ],
    "levelRequirementReason": "This training is accessible to adventurers of all levels but requires a certain level of discipline and focus.",
    "vendorReason": "The Dark Coven, guardians of the Dark Elves' secrets, offer this program exclusively to their kin and trusted allies.",
    "shippingDetail": "Delivered by the enigmatic Shadow Couriers, known for their meticulous and timely service, ensuring your training begins immediately upon receipt.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Seven days from start of training.",
      "endsWhen": "Upon completion of a long rest after the duration ends.",
      "charges": "Unlimited; can be recharged with a long rest."
    },
    "priceReason": "The price reflects the arcane energy and Dark Coven expertise required to conduct this training, making it moderately priced for its effects.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T22:08:22.300334+00:00",
    "aiReviewedAt": "2026-07-23T22:08:22.300334+00:00",
    "aiReviewVersion": 1
  },
  "trainer_guild_pokemon_therapy_session": {
    "id": "trainer_guild_pokemon_therapy_session",
    "name": "Pokémon Therapy Session",
    "description": "Enhance your animal companion's bond and combat prowess with a session from Pauline's Microphone. This unique device analyzes your companion's vocalizations, improving their attack rolls by +1 for one week. During this time, the Pokémon will speak more openly about its past, revealing hidden traumas that deepen your understanding of its character. However, skipping therapy sessions results in a disadvantage on all interaction checks with your group.",
    "category": "services",
    "price": 1000,
    "icon": "🐾",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Boosts Companion's Attack Rolls",
      "Reveals Companion’s Hidden Trauma"
    ],
    "vendor": "trainer_guild",
    "shippedBy": "Pokedex Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Boosts Companion's Attack Rolls",
        "rules": "The companion gains a +1 bonus to attack rolls for one week. This effect ends if the companion is reduced to 0 hit points or if the owner skips therapy sessions."
      },
      {
        "title": "Reveals Companion’s Hidden Trauma",
        "rules": "During the session, the companion reveals a hidden trauma that provides insight into its past. The owner learns one secret about their companion. This effect ends after the session is completed."
      }
    ],
    "levelRequirementReason": "This item requires less of a prerequisite level as it focuses on enhancing companionship and understanding rather than combat prowess.",
    "vendorReason": "The Trainer's Guild specializes in services that enhance the bond between trainers and their Pokémon, making this therapy session a natural fit for them.",
    "shippingDetail": "Delivered by Pokedex Delivery within one week of purchase.",
    "usage": {
      "activation": "Interact with the device during a therapy session.",
      "duration": "One week from the start of the session.",
      "endsWhen": "The companion is reduced to 0 hit points or if the owner skips sessions.",
      "charges": "Unlimited"
    },
    "priceReason": "This item offers a unique service that enhances both combat and emotional bonds, making it moderately priced for its value.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-23T22:07:45.757233+00:00",
    "aiReviewedAt": "2026-07-23T22:07:45.757233+00:00",
    "aiReviewVersion": 1
  },
  "crimision_isle_pirate_licensing_service": {
    "id": "crimision_isle_pirate_licensing_service",
    "name": "Pirate Licensing Service",
    "description": "The Pirate Licensing Service is a brass medallion emblazoned with a skull and crossbones, granted by the infamous Crimision Isle. When you wear it, you gain the respect of fellow pirates, allowing you to communicate effectively in their language and customs. However, this license comes at a price: while it grants you an advantage on Charisma checks when dealing with other pirates, it also makes you a target for naval forces nearby, imposing disadvantage on Stealth checks within sight of military patrols.",
    "category": "services",
    "price": 1000,
    "icon": "🏴‍☠️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage in Pirate Communication",
      "Disadvantage Near Naval Forces"
    ],
    "vendor": "crimision_isle",
    "shippedBy": "Pirate Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage in Pirate Communication",
        "rules": "When you use Charisma checks to interact with other pirates, you gain advantage. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Disadvantage Near Naval Forces",
        "rules": "While within 1 mile of any naval vessel, you have disadvantage on Stealth checks. This effect ends when you leave the area controlled by a naval force."
      }
    ],
    "levelRequirementReason": "This is a basic service that can be obtained by adventurers at the start of their journey.",
    "vendorReason": "Crimision Isle has long been a hub for pirates, providing official licenses to those who wish to operate within their waters.",
    "shippingDetail": "The license is delivered by trusted couriers aboard pirate ships. Expect delivery in one week or less.",
    "usage": {
      "activation": "Passive effect upon wearing the medallion.",
      "duration": "Until end of next short or long rest, or when removed.",
      "endsWhen": "Ends at the start of your next short or long rest, or when you remove it.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the cost of obtaining official recognition from Crimision Isle and the ongoing respect and protection offered by the pirates.",
    "priceOriginal": 8200,
    "priceReviewedAt": "2026-07-23T22:07:57.249461+00:00",
    "aiReviewedAt": "2026-07-23T22:07:57.249461+00:00",
    "aiReviewVersion": 1
  },
  "blessed_order_confession_service": {
    "id": "blessed_order_confession_service",
    "name": "Confession Service (All Sins Forgiven)",
    "description": "The Confession Service, a relic of the Blessed Order, purifies the soul and absolves one sin at the altar of repentance. For those truly remorseful, it removes an alignment-based penalty or curse, yet you must walk the path of virtue; failing to do so results in disadvantage on further checks involving morality. Though your secret is safe with only a few, the Order's eyes are ever vigilant, ensuring that your sins remain hidden from all but 1d4 NPCs who might overhear your confession.",
    "category": "services",
    "price": 1000,
    "icon": "🙏",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Remove one alignment-based penalty or curse",
      "Disadvantage on further checks if you sin again"
    ],
    "vendor": "blessed_order",
    "shippedBy": "Holy Procession",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sin Removal",
        "rules": "When used, this service purges a single alignment-based penalty or curse. The effect is instantaneous and permanent."
      },
      {
        "title": "Repentance Penalty",
        "rules": "If you commit another sin after using the Confession Service, you suffer disadvantage on all Charisma checks and saving throws involving morality for 1d4 weeks."
      }
    ],
    "levelRequirementReason": "This service is accessible to any soul seeking redemption, regardless of their current alignment or status.",
    "vendorReason": "The Blessed Order ensures that all who seek absolution can find it through their Confession Services.",
    "shippingDetail": "Delivered by a procession of holy figures, the service arrives with a blessing, ensuring its sanctity.",
    "usage": {
      "activation": "A short prayer and donation are required to activate this service.",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the sin is removed or the disadvantage on checks applies for their duration.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the sacred nature of the service and its ongoing maintenance.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-23T22:08:43.484523+00:00",
    "aiReviewedAt": "2026-07-23T22:08:43.484523+00:00",
    "aiReviewVersion": 1
  },
  "sirsirian_ocean_underwater_breathing_lessons": {
    "id": "sirsirian_ocean_underwater_breathing_lessons",
    "name": "Underwater Breathing Lessons",
    "description": "Master the ancient art of underwater breathing from Sirsirian Ocean's renowned diving school. With this unique service, you learn to hold your breath for extended periods, making underwater exploration safer and more comfortable. However, the training leaves you with a lingering gill envy, reducing Charisma checks when interacting with fish. You also acquire an olfactory affinity that makes you smell faintly of seaweed, affecting Stealth checks in aquatic environments.",
    "category": "services",
    "price": 1000,
    "icon": "💧",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Extended Breath Holding",
      "Gill Envy"
    ],
    "vendor": "sirsirian_ocean",
    "shippedBy": "Tidal Wave Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Extended Breath Holding",
        "rules": "You can hold your breath for up to 1 hour. This effect is passive and does not require an action or concentration."
      },
      {
        "title": "Gill Envy",
        "rules": "When interacting with fish, you have disadvantage on Charisma checks. This lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This service is suitable for anyone who wants to enhance their underwater survival skills without requiring a high-level character.",
    "vendorReason": "Sirsirian Ocean specializes in aquatic training and services, making it the perfect place to learn underwater breathing techniques.",
    "shippingDetail": "The service is delivered directly by Tidal Wave Express ensuring safe and timely arrival.",
    "usage": {
      "activation": "Passive effect upon completion of training.",
      "duration": "1 hour per day, up to a maximum of 5 hours total over the course of the service.",
      "endsWhen": "The duration ends when you finish your next long rest or if you are no longer in an underwater environment.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This training is a valuable skill for adventurers who need to explore aquatic environments, making the price fair and balanced.",
    "priceOriginal": 7200,
    "priceReviewedAt": "2026-07-23T22:08:08.936501+00:00",
    "aiReviewedAt": "2026-07-23T22:08:08.936501+00:00",
    "aiReviewVersion": 1
  },
  "saddle_arabia_sand_navigation_course": {
    "id": "saddle_arabia_sand_navigation_course",
    "name": "Sand Navigation Masterclass",
    "description": "The Sand Navigation Masterclass saddle is intricately crafted from the finest leather and camel hair. It imparts an ancient wisdom, allowing you to navigate desert landscapes with ease. You can see the dunes' whispers; in the desert, you have advantage on Survival checks for 30 days. However, this gift also makes cities feel alien: you suffer disadvantage on Perception checks within urban settings. Camels, once mounted, respect your command and grant you advantage on Animal Handling checks with them.",
    "category": "services",
    "price": 1000,
    "icon": "🏜️",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Desert Navigation Expertise",
      "City Perception Disadvantage"
    ],
    "vendor": "saddle_arabia",
    "shippedBy": "Camel Caravan",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Desert Navigation Expertise",
        "rules": "You gain advantage on Survival checks related to desert navigation for a period of 30 days after the saddle is mounted."
      },
      {
        "title": "City Perception Disadvantage",
        "rules": "While this saddle is in use, you suffer disadvantage on Perception checks within urban environments."
      }
    ],
    "levelRequirementReason": "This saddle is designed for all travelers and adventurers who wish to master desert navigation.",
    "vendorReason": "Saddle Arabia is renowned for its expertise in crafting gear that suits the harsh climates of the desert.",
    "shippingDetail": "The saddle is delivered by a trusted camel caravan, ensuring safe and timely delivery to your doorstep.",
    "usage": {
      "activation": "Passive effect once mounted.",
      "duration": "30 days from the moment of first use.",
      "endsWhen": "The effect ends when you stop using the saddle or after 30 days have passed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This saddle is priced to reflect its unique utility and the materials used in its construction, making it a balanced investment for any adventurer.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T22:08:11.423418+00:00",
    "aiReviewedAt": "2026-07-23T22:08:11.423418+00:00",
    "aiReviewVersion": 1
  },
  "ratchet_raiders_mechanical_companion_rental": {
    "id": "ratchet_raiders_mechanical_companion_rental",
    "name": "Mechanical Companion Rental (Hourly)",
    "description": "For an hourly rental, you can summon a sturdy and loyal construct companion. This compact robot friend stands at your side for one hour, following basic commands with precision. Built by the Ratchet Raiders, it may be clumsy in complex tasks but is adept at simple, straightforward instructions. Should this Construct Companion break during its tenure, repairs cost 5000 gp—though you can simply return it in working order to avoid such expenses.",
    "category": "services",
    "price": 1000,
    "icon": "🤖",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Construct Companion",
      "Clumsy Commands"
    ],
    "vendor": "ratchet_raiders",
    "shippedBy": "Oil Can Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Construct Companion",
        "rules": "The Construct Companion is a CR 2 construct that follows basic commands for one hour. It provides aid on attack rolls and can move to support you in combat, but it has disadvantage on checks requiring finesse or Dexterity-based skills."
      },
      {
        "title": "Clumsy Commands",
        "rules": "While the Construct is clumsy, it still offers a +1 bonus to AC and initiative. It cannot perform complex tasks or follow intricate instructions without risking damage to itself."
      }
    ],
    "levelRequirementReason": "This rental service is suitable for adventurers who are just starting their journey.",
    "vendorReason": "The Ratchet Raiders specialize in salvaging and repairing mechanical constructs, making them the perfect providers of such a service.",
    "shippingDetail": "Delivered by Oil Can Express with same-day delivery if available; otherwise, within three days.",
    "usage": {
      "activation": "Action to summon the Construct Companion for one hour.",
      "duration": "One hour.",
      "endsWhen": "The hour is up or the Construct is destroyed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This price reflects the cost of maintenance and repair, as well as the labor involved in preparing the Construct for a new rental.",
    "priceOriginal": 8200,
    "priceReviewedAt": "2026-07-23T22:08:25.287007+00:00",
    "aiReviewedAt": "2026-07-23T22:08:25.287007+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_garlic_futures_contract": {
    "id": "wario_land_garlic_futures_contract",
    "name": "Garlic Futures Contract (Speculative)",
    "description": "The Garlic Futures Contract (Speculative) is a speculative investment document from Wario Land, promising a lucrative payoff in exchange for your trust and a dash of optimism. This contract requires you to frequently discuss garlic with anyone who will listen, ensuring that you never forget the promise of future profits. However, if Wario's calculations are off—or if the market doesn't align—your investment could be lost entirely. Rumors say that Wario's predictions are as reliable as a broken clock, but the chance of striking gold in garlic futures is too tempting to pass up.",
    "category": "services",
    "price": 1000,
    "icon": "📈",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Garlic Talk Obligation",
      "Risky Speculation"
    ],
    "vendor": "wario_land",
    "shippedBy": "Contractual Obligation Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Garlic Talk Obligation",
        "rules": "For the duration of the contract, you are required to discuss garlic with any willing listener. You have disadvantage on Charisma (Deception) checks and saving throws involving social interactions."
      },
      {
        "title": "Risky Speculation",
        "rules": "You may invest 1000 XP in this contract once per month. There is a 50% chance that you will gain 2000 XP within 30 days, while there is also a 50% chance of losing your entire investment."
      }
    ],
    "levelRequirementReason": "The contract requires minimal experience to invest in speculative futures.",
    "vendorReason": "Wario Land's expertise in market manipulation makes him a logical vendor for speculative investments like garlic futures.",
    "shippingDetail": "The contract is delivered by the Contractual Obligation Courier, who ensures that your investment details are kept confidential and secure.",
    "usage": {
      "activation": "Investing in the contract requires no action but triggers once per month automatically.",
      "duration": "Until the end of each 30-day period following an investment.",
      "endsWhen": "The contract expires after one year or when you choose to cancel it.",
      "charges": "Unlimited, as long as you maintain your monthly investment."
    },
    "priceReason": "This price reflects the speculative nature of the investment and the potential for high reward or loss.",
    "priceOriginal": 7600,
    "priceReviewedAt": "2026-07-23T22:08:43.701538+00:00",
    "aiReviewedAt": "2026-07-23T22:08:43.701538+00:00",
    "aiReviewVersion": 1
  },
  "millennium_retro_gaming_console": {
    "id": "millennium_retro_gaming_console",
    "name": "Retro Gaming Console (Cursed)",
    "description": "The Retro Gaming Console (Cursed) is a sleek, retro-styled controller that hums with an eerie light. Crafted from the remnants of ancient gaming machines, its buttons and dials are worn but still functional. This cursed relic grants you inspiration for every hour spent playing, but beware—its addictive pull demands daily use to avoid disadvantage on all ability checks until you play again. A misstep in your game world may trap you inside forever, requiring a DC 15 saving throw each week.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Inspiration Hour",
      "Daily Addiction"
    ],
    "vendor": "millennium",
    "shippedBy": "Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Inspiration Hour",
        "rules": "When you play for one hour, you gain the benefit of inspiration. You can use this effect once per day."
      },
      {
        "title": "Daily Addiction",
        "rules": "If you do not play daily, you suffer disadvantage on all ability checks and saving throws until you play again. This effect lasts indefinitely until satisfied."
      }
    ],
    "levelRequirementReason": "Even the simplest characters can be drawn into the allure of the past.",
    "vendorReason": "Millennium deals in relics and curiosities from bygone eras, so this cursed console is a fitting addition to their inventory.",
    "shippingDetail": "Ships within one week with the Courier’s reliable service.",
    "usage": {
      "activation": "Passive effect upon playing for an hour; daily addiction requires daily use.",
      "duration": "Inspiration lasts until used, daily addiction is indefinite until satisfied.",
      "endsWhen": "Daily addiction ends when you play again; inspiration expires after one use.",
      "charges": "Uses per day"
    },
    "priceReason": "The cursed nature and the unique benefits make it a rare find, worth its balanced price.",
    "priceOriginal": 9200,
    "priceReviewedAt": "2026-07-23T22:08:36.550779+00:00",
    "aiReviewedAt": "2026-07-23T22:08:36.550779+00:00",
    "aiReviewVersion": 1
  },
  "mu_empire_ancient_curse_removal": {
    "id": "mu_empire_ancient_curse_removal",
    "name": "Ancient Curse Removal (90% Effective)",
    "description": "The Ancient Curse Removal is a vial of ethereal liquid said to have been crafted by forgotten magi. It gleams with an otherworldly light, pulsing faintly as it absorbs and neutralizes curses. This remedy has a 90% success rate against the most insidious enchantments, but there's always a risk—it might transfer the curse to you instead, leaving you burdened with a new disadvantage on saves against ancient magic.",
    "category": "services",
    "price": 1000,
    "icon": "🏺",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Curses Removed",
      "Ancient Curse Transfer"
    ],
    "vendor": "mu_empire",
    "shippedBy": "Silk Road Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Curses Removed",
        "rules": "When used, this vial successfully removes one curse from the target creature. The success rate is 90%, but there's a 10% chance that the curse transfers to the user instead."
      },
      {
        "title": "Ancient Curse Transfer",
        "rules": "If the curse transfer occurs, the user gains a new curse: disadvantage on all saving throws against ancient magic for 24 hours. This effect lasts until it is dispelled by another means or the curse is otherwise resolved."
      }
    ],
    "levelRequirementReason": "This remedy is designed to be accessible, even to low-level characters who might find themselves cursed.",
    "vendorReason": "Mu Empire has a long-standing reputation for dealing with ancient and arcane matters, making them the trusted source for such remedies.",
    "shippingDetail": "The vial is shipped in a specially insulated container to ensure its potency remains intact during transit.",
    "usage": {
      "activation": "A bonus action to activate and use on a creature within reach.",
      "duration": "Instantaneous, with effects lasting until they are dispelled or resolved.",
      "endsWhen": "The curse is removed from the target or transferred to you; once used, it can't be reused.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects a balanced XP cost for a remedy with high success rates and manageable risks.",
    "priceOriginal": 11200,
    "priceReviewedAt": "2026-07-23T22:08:39.503516+00:00",
    "aiReviewedAt": "2026-07-23T22:08:39.503516+00:00",
    "aiReviewVersion": 1
  },
  "mages_guild_spell_slot_rental": {
    "id": "mages_guild_spell_slot_rental",
    "name": "Spell Slot Rental (By the Hour)",
    "description": "Harness a mage's spare spell slots for your own urgent casting needs. This enchanted hour-long rental grants you one spell slot of levels 1-3 to use, but beware—these borrowed slots are volatile! There's a 20% chance that any spell cast during this time fails spectacularly. In return, you owe the wizard a favor, which may involve completing a minor quest or service for their guild.",
    "category": "services",
    "price": 1000,
    "icon": "🎰",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Rental of one spell slot (levels 1-3)",
      "20% chance spell fails"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spell Slot Rental",
        "rules": "Activates on demand. Instantaneous effect. Ends when the hour ends or the spell is cast, whichever comes first."
      },
      {
        "title": "Unstable Spellcasting",
        "rules": "A 20% chance that any spell cast during this time fails. No save DC provided; this is a random event."
      }
    ],
    "levelRequirementReason": "Appropriate for beginning wizards who need occasional support without permanent investment.",
    "vendorReason": "The Mages' Guild maintains this service to help fledgling mages and provide a steady income stream.",
    "shippingDetail": "Delivered immediately by arcane courier; no delays for spell slots of critical importance.",
    "usage": {
      "activation": "Activates on demand as a bonus action.",
      "duration": "Instantaneous, lasting one hour from activation.",
      "endsWhen": "The hour ends or the spell is cast.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced at this price to reflect the rarity and utility of spell slots, providing a flexible but not overpowered option for wizards.",
    "priceOriginal": 8200,
    "priceReviewedAt": "2026-07-23T22:08:54.504196+00:00",
    "aiReviewedAt": "2026-07-23T22:08:54.504196+00:00",
    "aiReviewVersion": 1
  },
  "data_merchant_data_backup_service": {
    "id": "data_merchant_data_backup_service",
    "name": "Data Backup Service (Cloud Storage)",
    "description": "This sleek, metallic box bears the Data Stream logo and a blinking cloud icon. When activated, it securely backs up your memories to an encrypted server in the cloud, ensuring they are safe from memory alteration. However, there's always a risk; if your data is compromised, you face a 5% chance of having your most cherished recollections leaked online. Additionally, the box delivers personalized ads that target your every whim, giving you disadvantage on saving throws against suggestion spells.",
    "category": "services",
    "price": 1000,
    "icon": "☁️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Cloud Backup",
      "Memory Leak Risk"
    ],
    "vendor": "data_merchant",
    "shippedBy": "Data Stream Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cloud Backup",
        "rules": "Activates as a bonus action. The Data Backup Service securely backs up your memories to the cloud, providing immunity against memory alteration until the next long rest."
      },
      {
        "title": "Memory Leak Risk",
        "rules": "At the end of each day, roll a d20. On a 1-5 (inclusive), there is a 5% chance that your memories are leaked online."
      }
    ],
    "levelRequirementReason": "The Data Backup Service requires no level as it is a simple device available to all who can afford its cost.",
    "vendorReason": "The Data Merchant has been trusted by many to keep their data safe, and this service is just one of the many offerings they provide.",
    "shippingDetail": "Delivered within a week via Data Stream's most reliable courier. The device comes fully charged with no activation cost.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous, lasts until the next long rest",
      "endsWhen": "The next long rest or if your data is compromised and leaked online",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the rare material used in its construction and the advanced encryption technology required for safe cloud storage.",
    "priceOriginal": 9200,
    "priceReviewedAt": "2026-07-23T22:09:36.369562+00:00",
    "aiReviewedAt": "2026-07-23T22:09:36.369562+00:00",
    "aiReviewVersion": 1
  },
  "changeling_hive_identity_theft_insurance": {
    "id": "changeling_hive_identity_theft_insurance",
    "name": "Identity Theft Insurance",
    "description": "The Changeling Hive’s Identity Theft Insurance provides a shield against the ever-present threat of identity theft in their realm. Upon proof of your ID, this insurance grants you a 10% discount on any services provided by the Hive, and if your identity is stolen, it ensures you receive 5,000 gold pieces compensation within one month. However, dealing with Changelings can be a tricky affair; they may make you feel less than human, imposing disadvantage on Charisma checks when interacting with them.",
    "category": "services",
    "price": 1000,
    "icon": "🛡️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Identity Compensation",
      "Changeling Disadvantage"
    ],
    "vendor": "changeling_hive",
    "shippedBy": "Metamorphic Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Identity Compensation",
        "rules": "If your identity is stolen by any means while covered under this insurance, you receive a one-time payment of 5,000 gold pieces. This effect activates upon proof of theft and the claim being approved by the Hive."
      },
      {
        "title": "Changeling Disadvantage",
        "rules": "When interacting with Changelings, you must make any Charisma checks with disadvantage due to their ability to shift forms and deceive easily."
      }
    ],
    "levelRequirementReason": "This insurance is available to all adventurers regardless of level as it protects against a common threat in the realm.",
    "vendorReason": "The Changelings offer this service as a way to build trust and loyalty among their patrons, ensuring they feel protected within their domain.",
    "shippingDetail": "Insurance is shipped via Metamorphic Delivery, known for its swift and reliable service across the shifting realms of Changeling Hive.",
    "usage": {
      "activation": "Instantaneous upon proof of identity theft or at any time you wish to claim a 10% discount on Hive services.",
      "duration": "Permanent, unless revoked by the Hive.",
      "endsWhen": "Revoked by the Hive.",
      "charges": "Unlimited"
    },
    "priceReason": "The price is set at 1000 XP to reflect a moderate level of service and protection offered, ensuring it remains accessible yet valuable.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T22:09:15.909586+00:00",
    "aiReviewedAt": "2026-07-23T22:09:15.909586+00:00",
    "aiReviewVersion": 1
  },
  "cybernetic_system_update_service": {
    "id": "cybernetic_system_update_service",
    "name": "System Update Service (Mandatory)",
    "description": "The System Update Service is a mandatory procedure for those relying on cybernetic systems. During the 8-hour process, you are rendered unconscious as the Surgical Drone meticulously scans and updates your implants. This service not only fixes existing bugs but also introduces new capabilities, enhancing your performance in technology-related tasks. However, there's always a risk; after the update, one random check type becomes unreliable until the next update cycle.",
    "category": "services",
    "price": 1000,
    "icon": "🔄",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Bug Fixes",
      "New Capabilities"
    ],
    "vendor": "cybernetic",
    "shippedBy": "Surgical Drone",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Bug Fixes",
        "rules": "You gain advantage on all Technology checks. This effect lasts for 7 days from when you complete the service, after which you must undergo another update cycle."
      },
      {
        "title": "New Capabilities",
        "rules": "After completing this service, one random check type (chosen by your DM) becomes unreliable until you undergo a subsequent update. This drawback lasts for 1 month."
      }
    ],
    "levelRequirementReason": "This procedure requires a stable cybernetic system and the skill to handle such updates.",
    "vendorReason": "Cybernetic maintains exclusive contracts with leading Surgical Drone manufacturers for these mandatory services.",
    "shippingDetail": "The service is delivered via a Surgical Drone, ensuring the process is sterile and secure. Delivery time is approximately 8 hours, during which you are unconscious.",
    "usage": {
      "activation": "Passive effect; requires undergoing the procedure every 7 days for optimal performance.",
      "duration": "Instantaneous update with effects lasting for 7 days or until next cycle.",
      "endsWhen": "The service is completed and the downtime ends when you are conscious again after 8 hours.",
      "charges": "Unlimited, but requires a mandatory cycle every 7 days."
    },
    "priceReason": "This price reflects the cost of materials, technology, and expertise required for this procedure, ensuring it's balanced within the game economy.",
    "priceOriginal": 8200,
    "priceReviewedAt": "2026-07-23T22:09:12.373119+00:00",
    "aiReviewedAt": "2026-07-23T22:09:12.373119+00:00",
    "aiReviewVersion": 1
  },
  "hacktivist_dark_web_subscription": {
    "id": "hacktivist_dark_web_subscription",
    "name": "Dark Web Subscription (Annual)",
    "description": "The Dark Web Subscription (Annual) grants access to a shadowy network of illegal goods and information. This premium subscription, delivered by Anonymous Drop, allows you to navigate through hidden servers with ease, but beware: your presence in major cities will draw unwanted attention from law enforcement. The FBI may monitor your communications, forcing you to walk cautiously in urban environments. Each month, the price is steep—100 gp—but the risks are worth it for those who seek forbidden knowledge and untouchable deals.",
    "category": "premium",
    "price": 1000,
    "icon": "🌐",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Access illegal goods: advantage on Investigation checks",
      "FBI may monitor you: disadvantage on Stealth checks in cities"
    ],
    "vendor": "hacktivist",
    "shippedBy": "Anonymous Drop",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Access illegal goods",
        "rules": "You gain a +1 bonus to Intelligence (Investigation) checks when interacting with hidden networks or black markets. This effect is passive and applies continuously."
      },
      {
        "title": "FBI may monitor you",
        "rules": "When in major cities, you have disadvantage on Dexterity (Stealth) checks while attempting to remain unseen. This effect lasts for 1 hour after entering a city and ends when you leave the urban area or complete a short rest."
      }
    ],
    "levelRequirementReason": "This subscription is intended for characters who have demonstrated their ability to navigate complex environments and deal with illegal activities.",
    "vendorReason": "The hacktivist specializes in providing access to underground networks and services, making them the perfect vendor for a Dark Web Subscription.",
    "shippingDetail": "Delivered through encrypted channels; no tracking available.",
    "usage": {
      "activation": "Passive effect. No activation required.",
      "duration": "Continuous while in possession, ends when lost or destroyed.",
      "endsWhen": "Lost, destroyed, or sold to another party.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The price reflects the subscription's ongoing nature and access to restricted information.",
    "priceOriginal": 9800,
    "priceReviewedAt": "2026-07-23T22:09:07.398413+00:00",
    "aiReviewedAt": "2026-07-23T22:09:07.398413+00:00",
    "aiReviewVersion": 1
  },
  "the_onyx_hand_assassination_contract": {
    "id": "the_onyx_hand_assassination_contract",
    "name": "Assassination Contract (Target of Your Choice)",
    "description": "The Assassination Contract, crafted from onyx and shadow, is a compact, vial-like device that whispers your target's fate into the hands of a skilled assassin. When activated, it sends an elite mercenary to eliminate the chosen foe with absolute precision. However, the contract also leaves a bitter taste in the air: there's a 10% chance the assassin will turn on you next, and you gain a reputation that sullies your standing among lawful societies, making it difficult to trust or rely on others.",
    "category": "services",
    "price": 1000,
    "icon": "🗡️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Target is eliminated (no save)",
      "Assassin may betray you"
    ],
    "vendor": "The Onyx Hand",
    "shippedBy": "Shadow Drop Express",
    "levelRequirement": 10,
    "warning": "Using this may end your campaign.",
    "effectDetails": [
      {
        "title": "Target Elimination",
        "rules": "Activates with a successful delivery and immediate assassination of the target. The assassin, once dispatched, cannot be called back or altered; the contract is final."
      },
      {
        "title": "Betrayal Risk",
        "rules": "There's a 10% chance (DC 15 Wisdom saving throw) that the assassin will betray you after completing your target. The betrayal can occur at any time within one week of the successful assassination, and you have no way to prevent it."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to ensure players are capable of dealing with the consequences of such an item.",
    "vendorReason": "Only The Onyx Hand, known for their secretive and deadly services, can offer this dark contract.",
    "shippingDetail": "Delivered by Shadow Drop within one week; any delays could be fatal to the target.",
    "usage": {
      "activation": "Requires a successful delivery and immediate assassination of the chosen target.",
      "duration": "Instantaneous, with the assassin acting immediately upon receiving the contract.",
      "endsWhen": "The target is eliminated or the assassin betrays you (whichever comes first).",
      "charges": "Unlimited uses per target."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its powerful and morally ambiguous nature without breaking gameplay.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T22:09:36.682789+00:00",
    "aiReviewedAt": "2026-07-23T22:09:36.682789+00:00",
    "aiReviewVersion": 1
  },
  "servants_cosmic_star_chart_subscription": {
    "id": "servants_cosmic_star_chart_subscription",
    "name": "Star Chart Subscription (Daily Horoscopes)",
    "description": "Each dawn, a meteor descends from the cosmos, delivering a handcrafted star chart subscription that promises to align your fate with the heavens' wisdom. The charts, crafted by the cosmic artisans of Servants Cosmic, grant you advantage on one check each day, ensuring your path is guided by the stars. However, if you ignore their counsel, superstition seizes you, imposing a disadvantage on any task undertaken without consulting the chart.",
    "category": "premium",
    "price": 1000,
    "icon": "🌟",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Daily Horoscope Advantage",
      "Superstitious Disadvantage"
    ],
    "vendor": "servants_cosmic",
    "shippedBy": "Meteor Mail Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Daily Horoscope Advantage",
        "rules": "At dawn each day, you receive a star chart that grants advantage on one check of your choice. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Superstitious Disadvantage",
        "rules": "If you do not consult and follow the advice in your daily star chart, you become superstitious. Until you seek out a cosmic oracle to clear your mind, you have disadvantage on all checks and saving throws."
      }
    ],
    "levelRequirementReason": "This subscription is suitable for any adventurer who wishes to align their fate with the stars.",
    "vendorReason": "Servants Cosmic, renowned cosmic artisans, offer this exclusive service to help their patrons navigate life's challenges through celestial guidance.",
    "shippingDetail": "Delivered by Meteor Mail Express, known for its timely and reliable deliveries via meteoric courier.",
    "usage": {
      "activation": "Automatic at dawn each day",
      "duration": "Until the end of your next short or long rest",
      "endsWhen": "You gain a new chart at dawn",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the cosmic labor, meteor delivery service, and exclusive crafting that goes into each star chart.",
    "priceOriginal": 7600,
    "priceReviewedAt": "2026-07-23T22:09:59.209320+00:00",
    "aiReviewedAt": "2026-07-23T22:09:59.209320+00:00",
    "aiReviewVersion": 1
  },
  "asclepia_plague_insurance": {
    "id": "asclepia_plague_insurance",
    "name": "Plague Insurance (Pandemic Coverage)",
    "description": "Plague Insurance (Pandemic Coverage) provides a safety net for those who have seen too much suffering in a time of sickness and death. For 1000 XP, you can purchase this policy from the reputable Aesclepia, which ensures that if you contract a disease, you are compensated with 2000 gp, though it comes at the cost of being quarantined for 30 days during which you suffer disadvantage on Charisma checks and saves. The insurance does not cover magical diseases, ensuring that only natural plagues are addressed.",
    "category": "services",
    "price": 1000,
    "icon": "🦠",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Disease Compensation",
      "Quarantine Disadvantage"
    ],
    "vendor": "asclepia",
    "shippedBy": "Medical Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disease Compensation",
        "rules": "If you contract a disease while this insurance is active, you receive 2000 gp compensation. This effect is instantaneous and applies only once per policy."
      },
      {
        "title": "Quarantine Disadvantage",
        "rules": "For the duration of your quarantine (30 days), you suffer disadvantage on all Charisma checks and saving throws. The insurance does not cover magical diseases, so any magical ailments are excluded from this effect."
      }
    ],
    "levelRequirementReason": "This basic level requirement ensures that even the most inexperienced adventurers can afford peace of mind.",
    "vendorReason": "Aesclepia is known for its expertise in health and safety, making it a trusted source for such insurance policies.",
    "shippingDetail": "The policy is shipped via the reliable Medical Courier service, ensuring timely delivery of your vital documents.",
    "usage": {
      "activation": "Purchasing this insurance at any time ensures its active coverage until it expires or is used to claim compensation for a disease.",
      "duration": "Instantaneous upon purchasing; lasts indefinitely until one of the effects is triggered or the policy expires.",
      "endsWhen": "The effect ends when either you contract a disease and claim the 2000 gp, or the insurance period expires without any claims being made.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This price reflects the relatively low risk of contracting a natural plague for most adventurers and ensures that even minor funds can afford this essential service.",
    "priceOriginal": 8200,
    "priceReviewedAt": "2026-07-23T22:09:48.732059+00:00",
    "aiReviewedAt": "2026-07-23T22:09:48.732059+00:00",
    "aiReviewVersion": 1
  },
  "pony_nobility_friendship_boot_camp": {
    "id": "pony_nobility_friendship_boot_camp",
    "name": "Friendship Boot Camp (Intensive)",
    "description": "The Friendship Boot Camp (Intensive) is a grueling weeklong training regime designed to forge unbreakable bonds among friends. Forged in the heart of Equestria, this boot camp uses ancient friendship magic to strengthen alliances and deepen camaraderie. Upon completion, you and your party gain +1 to all saving throws for 30 days, but at a cost: each day missed during the training reduces this bonus by half until it reaches zero after three consecutive absences.",
    "category": "services",
    "price": 1000,
    "icon": "💪",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Daily Bonding Bonus",
      "Exhaustion and Attendance Penalty"
    ],
    "vendor": "pony_nobility",
    "shippedBy": "Heartfelt Message",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Daily Bonding Bonus",
        "rules": "Upon completion of the boot camp, you and your party gain +1 to all saving throws for 30 days. Missing any day reduces this bonus by half, reducing it to +0.5 after two absences and to +0 after three consecutive absences."
      },
      {
        "title": "Exhaustion and Attendance Penalty",
        "rules": "Completing the boot camp grants you one level of exhaustion. If you miss a day during training, you must spend 24 hours in recovery before attending the next session, reducing your effectiveness for that day."
      }
    ],
    "levelRequirementReason": "This intensive training requires a certain level to ensure participants can handle its rigorous demands.",
    "vendorReason": "Pony Nobility specializes in fostering unity and strength among friends, making this boot camp a natural addition to their offerings.",
    "shippingDetail": "Delivered by trusted Heartfelt Messengers who ensure the package arrives safely within three days.",
    "usage": {
      "activation": "Completion of the boot camp through daily attendance over one week.",
      "duration": "30 days, reducing to +0.5 for each missed day, and +0 after three consecutive absences.",
      "endsWhen": "Missed days reduce the bonus; reaches zero at 3 consecutive absences or if not completed within one week.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects the intensive training, potential exhaustion, and the special friendship magic required to perform this service.",
    "priceOriginal": 9800,
    "priceReviewedAt": "2026-07-23T22:10:26.621183+00:00",
    "aiReviewedAt": "2026-07-23T22:10:26.621183+00:00",
    "aiReviewVersion": 1
  },
  "lemuria_conclave_memory_consolidation": {
    "id": "lemuria_conclave_memory_consolidation",
    "name": "Memory Consolidation Service",
    "description": "The Memory Consolidation Service is a delicate process performed by Lemuria Conclave, a council of ancient scholars. This service organizes your memories into a coherent and ordered sequence, making it easier to recall facts but harder to access personal anecdotes quickly. For seven days after the service, you gain advantage on Intelligence checks, but you must endure disadvantages when attempting quick-witted repartee or when recalling embarrassing moments, forcing you to roll with disadvantage on Charisma-based checks once per day.",
    "category": "services",
    "price": 1000,
    "icon": "🧠",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Intelligence Checks",
      "Disadvantage on Quick Recall and Charisma-Based Checks"
    ],
    "vendor": "lemuria_conclave",
    "shippedBy": "Psychic Echo",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Memory Access",
        "rules": "You gain advantage on Intelligence checks for 7 days after receiving the service. This effect is passive and does not require any action to activate."
      },
      {
        "title": "Embarrassing Recall",
        "rules": "You must roll with disadvantage on Charisma-based checks once per day, reflecting your difficulty in recalling embarrassing or personal moments quickly."
      }
    ],
    "levelRequirementReason": "The service is designed for all adventurers who may need to enhance their memory capabilities but are not yet of advanced proficiency.",
    "vendorReason": "Lemuria Conclave specializes in ancient knowledge and mental acuity, making this service a natural addition to their offerings.",
    "shippingDetail": "The service is delivered through Psychic Echo, ensuring your mind remains calm during the process. The courier ensures no external distractions occur during the memory reorganization.",
    "usage": {
      "activation": "Passive effect upon completion of the service.",
      "duration": "Lasts for 7 days following the service.",
      "endsWhen": "Expires after 7 days or if you receive another Memory Consolidation Service.",
      "charges": "Unlimited"
    },
    "priceReason": "The service is priced at a thousand XP, reflecting its complexity and the expertise required from Lemuria Conclave.",
    "priceOriginal": 8600,
    "priceReviewedAt": "2026-07-23T22:10:21.885107+00:00",
    "aiReviewedAt": "2026-07-23T22:10:21.885107+00:00",
    "aiReviewVersion": 1
  },
  "oracula_prophecy_verification_service": {
    "id": "oracula_prophecy_verification_service",
    "name": "Prophecy Verification Service",
    "description": "The Prophecy Verification Service is a cryptic inquiry offered by Oracula, who taps into the very fabric of fate itself to probe one prophecy. Upon invocation, you receive an enigmatic response: either 'It is so,' or 'It may be.' However, this service casts a pall over all other prophecies, forcing those around you to roll with disadvantage on saving throws against divination magic for 24 hours. The service is delivered by Baked Delivery with the promise of a warm, if slightly cryptic, pie upon arrival.",
    "category": "services",
    "price": 1000,
    "icon": "✔️",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Query one prophecy",
      "All nearby characters suffer disadvantage on saves vs. divination"
    ],
    "vendor": "oracula",
    "shippedBy": "Baked Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Prophecy Query",
        "rules": "Activates as a bonus action. You receive an immediate response from Oracula, either confirming or negating the truth of one prophecy you name. The effect is instantaneous and has no save."
      },
      {
        "title": "Divination Disadvantage",
        "rules": "Lasts for 24 hours after the service is invoked. Those within a 30-foot radius must roll with disadvantage on all saving throws against divination magic during this time. The effect ends when the duration expires."
      }
    ],
    "levelRequirementReason": "This service is accessible to any character, as it requires no specific class or feat.",
    "vendorReason": "Oracula is renowned for her deep knowledge of fate and prophecies.",
    "shippingDetail": "The pie included with the service must be consumed within three hours of delivery to unlock the full potential of the service.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous, with a 24-hour duration",
      "endsWhen": "When the 24-hour period ends or if the service is invoked again",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the intricate magic required to tap into the fabric of fate and deliver it swiftly.",
    "priceOriginal": 9200,
    "priceReviewedAt": "2026-07-23T22:10:17.237996+00:00",
    "aiReviewedAt": "2026-07-23T22:10:17.237996+00:00",
    "aiReviewVersion": 1
  },
  "night_koopa_shell_polish": {
    "id": "night_koopa_shell_polish",
    "name": "Midnight Koopa Shell Polish",
    "description": "Midnight Koopa Shell Polish is a mysterious black-market concoction that renders any Koopa shell invisible under the lunar glow. Crafted from a rare blend of moonstone and Wario’s cologne, this polish ensures stealthy maneuvers in the night. Once applied, the shell reflects the moonlight so perfectly that it grants disadvantage on Stealth checks if even a sliver of light touches its surface. This enigmatic substance is only available at Wario Direct during the night, adding an air of exclusivity to its allure.",
    "price": 1000,
    "icon": "🌙",
    "stock": 3,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Moonlit Invisibility",
      "Reflective Moonlight"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Poochyneese",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Moonlit Invisibility",
        "rules": "Apply this polish to any Koopa shell armor or shield. The item becomes invisible under moonlight, providing a +2 bonus to Stealth checks while worn. The effect lasts until the next sunrise."
      },
      {
        "title": "Reflective Moonlight",
        "rules": "The applied shell reflects moonlight perfectly, granting disadvantage on Stealth checks if any light source directly illuminates it during nighttime. This effect persists for 1 hour after application unless dispelled by a successful DC 15 Disable Device check."
      }
    ],
    "levelRequirementReason": "This item is accessible to all adventurers, making it an excellent starting companion.",
    "vendorReason": "Wario Direct specializes in black-market goods and rare items, including the Midnight Koopa Shell Polish.",
    "shippingDetail": "Ships via Courier Poochyneese directly to your door at night only. Delivery is guaranteed within one hour of purchase.",
    "usage": {
      "activation": "Apply polish as a bonus action.",
      "duration": "12 hours (or until next sunrise, whichever comes first).",
      "endsWhen": "The effect ends when the next sunrise arrives or if the shell is no longer worn or applied.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's rarity and exclusive availability justify its moderate price of 1000 XP.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T22:10:14.011630+00:00",
    "aiReviewedAt": "2026-07-23T22:10:14.011630+00:00",
    "aiReviewVersion": 1
  },
  "night_fake_starman": {
    "id": "night_fake_starman",
    "name": "Bootleg Starman (30-second charge)",
    "description": "The Bootleg Starman is a flickering, off-brand star that hums with an 8-bit star theme. When activated, it grants you invincibility and boosts your movement speed by +10 feet for 30 seconds. After the brief respite, it violently explodes in a 10-foot radius, dealing 3d6 fire damage to all creatures within (no save). The star's music plays loudly throughout its short duration, adding to the cacophony of any environment.",
    "price": 1000,
    "icon": "⭐",
    "stock": 4,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Invincibility and Speed Boost",
      "Explosive Debut"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Pianta Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invincibility and Speed Boost",
        "rules": "Single use. When activated as a bonus action, you gain temporary invulnerability and your speed increases by +10 feet for 30 seconds."
      },
      {
        "title": "Explosive Debut",
        "rules": "At the end of its 30-second duration or if prematurely destroyed, it violently explodes in a 10-foot radius, dealing 3d6 fire damage to all creatures within. (No save)."
      }
    ],
    "levelRequirementReason": "This low-level requirement allows characters of any class to experience the chaos and fun of the Bootleg Starman.",
    "vendorReason": "Wario Direct specializes in quirky, off-brand items that are sure to disrupt the norm.",
    "shippingDetail": "Ships immediately from Wario's Warehouse; no delivery delays.",
    "usage": {
      "activation": "Bonus action",
      "duration": "30 seconds or until destroyed",
      "endsWhen": "Explosive detonation or premature destruction",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the item's limited duration, explosive effect, and its quirky nature.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T22:10:33.251882+00:00",
    "aiReviewedAt": "2026-07-23T22:10:33.251882+00:00",
    "aiReviewVersion": 1
  },
  "night_bob_omb_alarm_clock": {
    "id": "night_bob_omb_alarm_clock",
    "name": "Bob-omb Alarm Clock (Guaranteed Wake-Up)",
    "description": "The Bob-omb Alarm Clock (Guaranteed Wake-Up) is a menacing timepiece crafted by Wario's Workshop, designed for those who need a jarring reality check. Its metallic casing glows with an eerie blue light as it hovers in the air. The moment you set its time and activate it, the clock begins to count down. When the alarm sounds, the Bob-omb inside detonates, waking you instantly but leaving a 15-foot radius of charred fire behind (Dex save DC 14 for half). This is not just an alarm; it’s a wake-up call from Wario himself.",
    "price": 1000,
    "icon": "💣",
    "stock": 6,
    "rarity": "common",
    "stockType": "night_only",
    "effects": [
      "Instant Wake-Up",
      "Explosive Start"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Express Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Wake-Up",
        "rules": "When activated, the clock instantly wakes you up. You are not subjected to a saving throw and cannot fall unconscious again until after this effect ends."
      },
      {
        "title": "Explosive Start",
        "rules": "At the chosen time, the Bob-omb Alarm Clock detonates with a blast of 4d6 fire damage in a 15-foot radius. Any creature within this area must make a Dexterity saving throw (DC 14) or take half as much damage."
      }
    ],
    "levelRequirementReason": "This clock is designed for adventurers of all levels, but beginners might need its wake-up power.",
    "vendorReason": "Wario Direct ensures that even the most insomniac heroes get their start with a jarring, yet effective alarm.",
    "shippingDetail": "Delivered within an hour of purchase in most cities; pick-up available.",
    "usage": {
      "activation": "A standard action to set the time and activate the clock.",
      "duration": "Instantaneous upon activation, ending immediately after the explosion.",
      "endsWhen": "The explosive effect ends when it detonates.",
      "charges": "One use per item. Ever."
    },
    "priceReason": "This price reflects its unique functionality and the rare craftsmanship required to create such a powerful yet whimsical device.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-23T22:10:49.437718+00:00",
    "aiReviewedAt": "2026-07-23T22:10:49.437718+00:00",
    "aiReviewVersion": 1
  },
  "night_wario_private_reserve_garlic": {
    "id": "night_wario_private_reserve_garlic",
    "name": "Wario's Private Reserve Garlic (Aged 7 Years)",
    "description": "This ancient bulb, aged in Wario's secret vault for seven years, exudes a pungent aroma that fills the air with a garlicky stench. The garlic is said to have been harvested from the very soil of Dr. Mario's nightmares. Eating it raw grants you temporary hit points and forces those within its aura to gag and retch. Vampires are particularly susceptible, their fangs rendered useless by the sheer potency of the garlic.",
    "price": 1000,
    "icon": "🧄",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Garlic Aura",
      "Vampire Vulnerability"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Gloomygator Express",
    "levelRequirement": 3,
    "warning": "Wario will personally hunt you if you waste it.",
    "effectDetails": [
      {
        "title": "Garlic Aura",
        "rules": "Eating this garlic grants you 2d10 temporary hit points and creates a 30-foot radius aura centered on you. Creatures within the aura must succeed on a Constitution saving throw (DC 16) or be poisoned for 1 hour. Vampires in the area automatically fail this save and take an additional 4d6 radiant damage."
      },
      {
        "title": "Vampire Vulnerability",
        "rules": "This item is particularly effective against vampires, who must make a DC 16 Constitution saving throw or be rendered unable to use their fangs for the duration of its effect. Consuming this garlic also forces them to take an additional 4d6 radiant damage."
      }
    ],
    "levelRequirementReason": "Even seasoned adventurers might struggle with the pungent effects, requiring at least third-level proficiency in resisting its potency.",
    "vendorReason": "Wario's direct sales ensure that only those truly dedicated to his brand can obtain this rare and potent item.",
    "shippingDetail": "Delivered by the Gloomygator, known for its unpredictable flight paths and occasional detours through shadowy realms.",
    "usage": {
      "activation": "Eating raw garlic (consuming the entire bulb)",
      "duration": "1 hour or until used in combat",
      "endsWhen": "The effect ends if you are killed or if you consume another garlic item.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "The garlic's rarity and the risk of angering Wario himself make it an expensive yet valuable commodity in the D&D market.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T22:10:55.740338+00:00",
    "aiReviewedAt": "2026-07-23T22:10:55.740338+00:00",
    "aiReviewVersion": 1
  },
  "night_one_wing_angel_feather": {
    "id": "night_one_wing_angel_feather",
    "name": "One-Wing Angel Feather (Real One This Time)",
    "description": "The One-Wing Angel Feather (Real One This Time) is a dark feather that pulses with an ethereal glow when not observed. Crafted from the down of a mythical creature, it bleeds a jet-black substance under moonlight. When activated, this feather grants you a single black wing for one hour, allowing flight at 60 feet per second—ideal for swift evasion or aerial strikes. However, while active, any healing you receive is halved, leaving you vulnerable to damage over the duration. Upon its expiration, the wing withers and causes psychic pain, dealing 3d6 points of damage as it reverts to a feather.",
    "price": 1000,
    "icon": "🪶",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Flight",
      "Healing Reduction"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Swift Courier Services",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Flight",
        "rules": "Activation: On your action. Duration: One hour. Range: Personal. Ends When: The duration ends, or when destroyed by a successful DC 15 Constitution saving throw."
      },
      {
        "title": "Healing Reduction",
        "rules": "While the feather is active, all healing received is reduced by half until it expires or is destroyed. No save needed to negate this effect."
      }
    ],
    "levelRequirementReason": "This item's power and complexity necessitate a higher level to ensure balance.",
    "vendorReason": "Wario Direct deals in rare and unusual items, including mystical artifacts like the One-Wing Angel Feather.",
    "shippingDetail": "Ships within one week of order placement. Requires special handling to preserve the feather's magical properties.",
    "usage": {
      "activation": "Action",
      "duration": "One hour",
      "endsWhen": "The duration ends or is destroyed by a successful DC 15 Constitution saving throw",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the feather's rarity and unique properties, including its ethereal glow and the potential for psychic damage.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T22:10:41.727989+00:00",
    "aiReviewedAt": "2026-07-23T22:10:41.727989+00:00",
    "aiReviewVersion": 1
  },
  "night_waluigi_tennis_racket": {
    "id": "night_waluigi_tennis_racket",
    "name": "Waluigi's Tennis Racket (Match-Used)",
    "description": "Waluigi's Tennis Racket (Match-Used) bears the scars of countless victories, its graphite frame now a mottled mix of sweat and dirt from the tournament that brought Mario to his knees. The racket's strings are taut with a vengeance, each swing imbued with Waluigi's signature force. Legend has it that the very ground trembles when he strikes; his serves are so powerful that even seasoned players dare not face them in the ring.",
    "price": 1000,
    "icon": "🎾",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Serve of Doom",
      "Psychic Volley"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Poochy",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Serve of Doom",
        "rules": "As a bonus action, you can serve an enemy so hard they must succeed on a Dexterity saving throw (DC 17) or be knocked prone and stunned until the end of their next turn. If the save fails, the target is also restrained for 1 minute."
      },
      {
        "title": "Psychic Volley",
        "rules": "If you score a critical hit with this weapon, you have the option to either shout 'WAAALUIGI TIME' and instead deal 1d6 psychic damage to yourself or maintain the normal critical effect. You can use this feature once per day."
      }
    ],
    "levelRequirementReason": "Requires a minimum of three levels to wield Waluigi's powerful racket.",
    "vendorReason": "Wario Direct exclusively stocks rare items from the world's greatest tennis champions, including this match-used trophy.",
    "shippingDetail": "Ships within the next moon cycle; delays due to lunar phases are inevitable.",
    "usage": {
      "activation": "Bonus action or reaction (for 'Serve of Doom')",
      "duration": "Instantaneous (effect lasts until end of turn)",
      "endsWhen": "Target saves successfully, or the effect ends when you use your next bonus or reaction action",
      "charges": "Once per day"
    },
    "priceReason": "Balanced at 1000 XP for its rare origin and unique, powerful effects.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T22:11:19.494666+00:00",
    "aiReviewedAt": "2026-07-23T22:11:19.494666+00:00",
    "aiReviewVersion": 1
  },
  "night_moonlight_mushroom": {
    "id": "night_moonlight_mushroom",
    "name": "Moonlight Mushroom (Grows Only Under Full Moon)",
    "description": "The Moonlight Mushroom is a glowing blue fungus that only blooms at midnight under a full moon. It's harvested just as the first rays of dawn begin to break, and its bioluminescence can be seen for miles on clear nights. Consuming this mushroom grants you Truesight within 60 feet for one hour. You also become naturally luminescent during darkness, but doing so renders you unable to use or benefit from any form of invisibility or Stealth. After the effect ends, you are blinded for a minute as your eyes adjust to normal light.",
    "price": 1000,
    "icon": "🌕",
    "stock": 3,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Truesight",
      "Naturally Luminescent"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Moonlit Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Truesight",
        "rules": "Consume the Moonlight Mushroom to gain Truesight within 60 feet for 1 hour. This effect can be activated as a bonus action and requires no saving throw."
      },
      {
        "title": "Naturally Luminescent",
        "rules": "You become naturally luminescent, meaning you cannot use or benefit from any form of invisibility or Stealth in darkness. This effect remains active for the duration of Truesight, which is 1 hour after activation."
      }
    ],
    "levelRequirementReason": "Requires level 6 to access its powerful night vision and bioluminescence abilities.",
    "vendorReason": "Wario Direct specializes in rare, night-harvested items like the Moonlight Mushroom due to their unique properties and limited availability.",
    "shippingDetail": "Ships only on nights of a full moon; delays may occur if the moon is obscured or not visible.",
    "usage": {
      "activation": "Bonus Action (Truesight)",
      "duration": "1 hour after activation",
      "endsWhen": "The duration ends when the effect expires, and you are blinded for 1 minute afterward due to eye adjustment.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP as it provides powerful but limited night-based abilities without being overpowered.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-23T22:10:58.664817+00:00",
    "aiReviewedAt": "2026-07-23T22:10:58.664817+00:00",
    "aiReviewVersion": 1
  },
  "night_boo_house_deed": {
    "id": "night_boo_house_deed",
    "name": "Haunted Boo Mansion Deed (Legit…ish)",
    "description": "The Haunted Boo Mansion Deed grants you ownership of a decrepit, spectral mansion that's been abandoned for decades. Its walls are lined with restless spirits who have made it their home, and though they're mostly harmless, every full moon they stage elaborate pranks designed to startle even the bravest heart. The mansion is riddled with traps, but Wario has already cleared out any valuables, leaving you to fend for yourself against its many booby-traps and mischievous residents.",
    "price": 1000,
    "icon": "🏚️",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Haunted Residences",
      "Prank Night"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Direct Pickup Only",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Haunted Residences",
        "rules": "You gain ownership of a haunted mansion, which appears on the DM's map. The mansion is home to three to six boos who are mostly friendly but prone to pranks. You must make a DC 12 Wisdom saving throw each night at sunset; if you fail, you spend the night in constant fear and cannot use any abilities or take actions."
      },
      {
        "title": "Prank Night",
        "rules": "Every full moon (once per month), the boos attempt to scare you to death. You must make a DC 14 Wisdom saving throw; on a failed save, you are frightened for one hour and cannot move more than 5 feet from your bed or a safe room."
      }
    ],
    "levelRequirementReason": "The mansion's defenses and the boos' pranks require a competent party capable of dealing with both.",
    "vendorReason": "Wario has looted the mansion for any valuables, leaving you to manage its spectral inhabitants.",
    "shippingDetail": "Pickup at Wario's HQ; no deliveries available.",
    "usage": {
      "activation": "Passive effect once owned.",
      "duration": "Until the next full moon or until you sell the deed.",
      "endsWhen": "You sell the mansion deed to another party.",
      "charges": "Unlimited"
    },
    "priceReason": "The mansion's value lies in its unique haunted nature and the boos' antics, making it a rare and intriguing asset.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-23T22:11:43.074301+00:00",
    "aiReviewedAt": "2026-07-23T22:11:43.074301+00:00",
    "aiReviewVersion": 1
  },
  "night_wario_time_stop_watch": {
    "id": "night_wario_time_stop_watch",
    "name": "Wario Time-Stop Pocket Watch (3 Seconds)",
    "description": "The Wario Time-Stop Pocket Watch is a cracked, rusted timepiece with a mischievous charm. Crafted from tarnished brass and adorned with a broken second hand, it was once used by Wario to outmaneuver his enemies in the shadows of the night. When activated, this pocket watch halts time for precisely 3 seconds during which you may move up to your speed and take one action. Upon resuming, you must shout 'IT'S WARIO TIME!' or risk a catastrophic explosion that deals 6d6 force damage within 20 feet (15/60 feet at legendary rarity).",
    "price": 1000,
    "icon": "⏱️",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Time Stop",
      "Explosive Finish"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Pooch",
    "levelRequirement": 1,
    "warning": "Wario wants this one back eventually.",
    "effectDetails": [
      {
        "title": "Time Stop",
        "rules": "Activation: Reaction. Duration: Instantaneous. Range: Self. When activated, time stops for 3 seconds during which you may move up to your speed and take one action. The effect ends if the wearer shouts 'IT'S WARIO TIME!' or when time resumes due to an external force."
      },
      {
        "title": "Explosive Finish",
        "rules": "When time resumes, if the wearer does not shout 'IT'S WARIO TIME!', a catastrophic explosion occurs dealing 6d6 force damage within 20 feet. The watch shatters permanently and cannot be used again."
      }
    ],
    "levelRequirementReason": "This item is accessible to players of all levels, but its mischievous nature and potential for chaos make it an advanced tool.",
    "vendorReason": "Wario personally ensures that his time-stopping device remains in the hands of those who can appreciate its unique utility.",
    "shippingDetail": "Ships via Courier Pooch directly from Wario’s lair. Delivery may be delayed by a night's sleep or two.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous",
      "endsWhen": "Time resumes or the wearer shouts 'IT'S WARIO TIME!'",
      "charges": "Unlimited, but only one use per day"
    },
    "priceReason": "Balanced at 1000 XP, this item offers a rare and dangerous tool for players who can handle its unpredictable nature.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T22:11:11.426578+00:00",
    "aiReviewedAt": "2026-07-23T22:11:11.426578+00:00",
    "aiReviewVersion": 1
  },
  "night_infinite_coin_glitch_box": {
    "id": "night_infinite_coin_glitch_box",
    "name": "Infinite Coin Glitch Box (Works Once)",
    "description": "This is a peculiar wooden box with an antique coin slot. Crafted in the shadowy alleys of Night Town, it whispers tales of lost treasures and forgotten gold. Insert any coin into its slot, and instantly, a cascade of 255 gleaming gold coins spills out. The world around you flickers briefly with a burst of neon light before settling back to normal. Once used, the box transforms into a glowing pixelated cube that hums softly for a moment before imploding into digital dust.",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Coin Doubler",
      "Digital Dissolution"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Night Courier Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Coin Doubler",
        "rules": "When activated as an action, insert any coin. The box produces 255 gold coins instantly. This effect has no save DC and can be used once."
      },
      {
        "title": "Digital Dissolution",
        "rules": "After use, the box transforms into a pixelated cube that emits a soft hum for 1 round before disintegrating into digital dust. There is no save DC to resist this effect."
      }
    ],
    "levelRequirementReason": "This item's mechanics are simple and straightforward, making it accessible to even the lowest-level characters.",
    "vendorReason": "Wario himself crafted these boxes in his secret workshop and sells them directly to ensure their authenticity.",
    "shippingDetail": "Delivered via Night Courier Express, this item requires a special delivery window due to its magical properties.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "After use or when destroyed by digital means",
      "charges": "One-time use"
    },
    "priceReason": "The item's rarity and unique mechanics, combined with its one-time use, justify a price of 1000 XP.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T22:11:11.160057+00:00",
    "aiReviewedAt": "2026-07-23T22:11:11.160057+00:00",
    "aiReviewVersion": 1
  },
  "night_wario_master_sword_replica": {
    "id": "night_wario_master_sword_replica",
    "name": "Master Sword Replica (Wario Edition)",
    "description": "The Master Sword Replica (Wario Edition) gleams under the moonlight, its golden blade etched with the defiant proclamation 'PROPERTY OF LINK (NOT ANYMORE)' in bold runes. Crafted from a mysterious metal alloy that glows faintly in darkness, this sword's hilt is encrusted with Wario-themed emblems. It only activates at night or when surrounded by shadows, dealing an extra 1d8 radiant damage to evil foes and turning into a harmless pool noodle in sunlight.",
    "price": 1000,
    "icon": "🗡️",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "+2 Longsword",
      "Radiant Damage vs Evil Creatures"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Moonlight Express Courier Service",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Radiant Damage vs Evil",
        "rules": "When the sword strikes an evil creature, it deals an additional 1d8 radiant damage. This effect is only active when used at night or in darkness. Exposure to sunlight immediately turns this sword into a pool noodle."
      },
      {
        "title": "Daytime Inactivity",
        "rules": "During daylight hours, the sword's magical properties are dormant and it functions as an ordinary golden longsword. When exposed to direct sunlight, the sword emits a soft glow before transforming into a pool noodle that can be safely handled."
      }
    ],
    "levelRequirementReason": "This sword is imbued with powerful magic that requires a seasoned adventurer of at least 8th level to wield effectively.",
    "vendorReason": "Wario Direct, known for its eccentric and thematic wares, offers this unique item as part of their exclusive line of retro-themed gear.",
    "shippingDetail": "Delivered by the Moonlight Express only during nighttime hours. Orders placed after sunset are guaranteed to arrive at your doorstep before dawn.",
    "usage": {
      "activation": "Instantaneous, but only active in darkness or at night; turns into a pool noodle when exposed to sunlight",
      "duration": "Instantaneous effect with ongoing damage per successful strike against evil creatures",
      "endsWhen": "Exposure to direct sunlight transforms the sword into a harmless pool noodle",
      "charges": "Unlimited uses, but only active in its magical form at night or in darkness"
    },
    "priceReason": "The item's unique enchantment and thematic appeal justify this balanced XP price.",
    "priceOriginal": 8800,
    "priceReviewedAt": "2026-07-23T22:11:39.906320+00:00",
    "aiReviewedAt": "2026-07-23T22:11:39.906320+00:00",
    "aiReviewVersion": 1
  },
  "night_phantom_hourglass_sand": {
    "id": "night_phantom_hourglass_sand",
    "name": "Phantom Hourglass Sand (One Pinch)",
    "description": "Phantom Hourglass Sand (One Pinch) is a cursed sand that, when sprinkled, slows time for all within earshot except you. The grains are said to be harvested from an ancient desert where time flows backward. Sprinkle it during a crisis and gain precious moments to strategize and escape—your own passage through the sand remains unhindered. After use, you are instantly aged by one year, forever bearing the mark of this fleeting gift.",
    "price": 1000,
    "icon": "⌛",
    "stock": 2,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Time Stop",
      "Temporal Shield"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Pika Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Time Stop",
        "rules": "Single use; activate as a bonus action. All creatures within 30 feet of you must succeed on a DC 17 Constitution saving throw or be slowed (reduced speed to half) for the duration. You are immune to this effect and gain +2 AC until the end of your next turn."
      },
      {
        "title": "Temporal Shield",
        "rules": "You remain unaffected by time manipulation effects within the duration, including spells and abilities that affect time flow."
      }
    ],
    "levelRequirementReason": "Beginners who have faced time-based challenges are best suited to use this sand.",
    "vendorReason": "Wario Direct specializes in cursed and rare items, making it the perfect vendor for such a darkly enchanting product.",
    "shippingDetail": "Ships within 24 hours with express delivery to your door.",
    "usage": {
      "activation": "Bonus action: sprinkle sand and activate effect.",
      "duration": "1 minute per use.",
      "endsWhen": "Ends when the duration expires or you are no longer within range of the effect.",
      "charges": "Unlimited, but each use ages you by one year."
    },
    "priceReason": "The price reflects the cursed nature and rare ingredient sourcing of this item, balancing its powerful effects with a fair cost.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-23T22:11:28.062007+00:00",
    "aiReviewedAt": "2026-07-23T22:11:28.062007+00:00",
    "aiReviewVersion": 1
  },
  "night_final_boss_key": {
    "id": "night_final_boss_key",
    "name": "Final Boss Door Key (Unknown Dungeon)",
    "description": "This massive golden key radiates an ancient, almost malevolent energy. It is said to have been crafted by a forgotten civilization, lost to time and legend. No one knows what door it opens… yet, but many believe it unlocks the Final Boss Chamber of an unknown dungeon that will one day challenge even the mightiest heroes. Wario refuses to say where he got it, only hinting that it was found in a place where legends are born.",
    "price": 1000,
    "icon": "🗝️",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Opens the Final Boss Door",
      "Grants no power until then — just heavy and ominous"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier P. Plumber",
    "levelRequirement": 10,
    "warning": "Buying this may end your campaign.",
    "effectDetails": [
      {
        "title": "Opens the Final Boss Door",
        "rules": "When used, this key opens the Final Boss Door in an unknown dungeon. The door appears exactly one day after purchasing the key. The door is immune to all damage and can only be closed by defeating its guardian."
      },
      {
        "title": "Grants no power until then — just heavy and ominous",
        "rules": "The key has no effect until it is used to open the Final Boss Door. Once opened, the door triggers a series of events that cannot be altered or stopped by any means short of defeating its guardian."
      }
    ],
    "levelRequirementReason": "Only seasoned adventurers can handle the unknown challenges and dangers associated with the Final Boss Chamber.",
    "vendorReason": "Wario, always on the lookout for unique items, acquired this key from a mysterious source.",
    "shippingDetail": "The key is shipped via special courier with a delivery window of one week after purchase.",
    "usage": {
      "activation": "Standard Action to use the key at the final boss door location.",
      "duration": "Instantaneous, once per owner.",
      "endsWhen": "Used to open the Final Boss Door or destroyed if not used within one year of purchase.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The key's rarity and the unknown challenges it brings justify its moderate price.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-23T22:11:41.360314+00:00",
    "aiReviewedAt": "2026-07-23T22:11:41.360314+00:00",
    "aiReviewVersion": 1
  }
};
