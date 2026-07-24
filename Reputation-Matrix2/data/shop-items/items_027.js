// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_027 = {
  "love_curse_reversal": {
    "id": "love_curse_reversal",
    "name": "Love Curse Reversal (Specialty)",
    "description": "The Love Curse Reversal is a delicate artifact crafted from the heartwood of an ancient love tree, said to have been blessed by the gods of both passion and balance. This rare service undoes even the most complex magical entanglements affecting the heart and mind, restoring freedom to those ensnared by enchantment or curse. Once invoked, it neutralizes the source of emotional compulsion, allowing the target to reclaim their autonomy without fear of reversion.",
    "category": "services",
    "price": 1000,
    "icon": "💔",
    "stock": 8,
    "rarity": "rare",
    "effects": [
      "Neutralize a love spell, charm, or emotional entanglement",
      "Restore autonomy and emotional balance"
    ],
    "vendor": "dream_sanctuary",
    "shippedBy": "Emissary of the Heartwood Grove",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spell Neutralization",
        "rules": "As an action, the caster can neutralize one enchantment or curse affecting a target within 30 feet. The target regains full control of their emotions, and the original caster may feel backlash (DC 16 saving throw; on failure, they take 4d6 psychic damage). This effect lasts until the next dawn."
      },
      {
        "title": "Emotional Reclamation",
        "rules": "The target gains immunity to all forms of enchantment or charm for one day. They can also resist any ongoing effects that affect their emotions (DC 18 saving throw; on failure, they are stunned until the next dawn)."
      }
    ],
    "levelRequirementReason": "Requires minimal magical skill to invoke, but only those with experience in love magic can truly appreciate its subtlety.",
    "vendorReason": "Dream Sanctuary specializes in divine and mystical services that restore balance and harmony to troubled hearts.",
    "shippingDetail": "Delivered personally by a trusted envoy, ensuring confidentiality and timely service.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect lasting until dawn",
      "endsWhen": "The spell is neutralized or the target regains control",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price reflects the delicate nature of the service and the rare materials required.",
    "priceOriginal": 28000,
    "priceReviewedAt": "2026-07-22T19:52:27.027989+00:00",
    "aiReviewedAt": "2026-07-22T19:52:27.027989+00:00",
    "aiReviewVersion": 1
  },
  "lucky_day_badge": {
    "id": "lucky_day_badge",
    "name": "Lucky Day Badge",
    "description": "The Lucky Day Badge is a shimmering four-leaf clover pin, blessed by the Cosmic Jesters themselves. Crafted from enchanted copper and adorned with a starry sky gemstone, it glows faintly at moments of good fortune. This badge grants you the rarest of boons: once per long rest, you may reroll any d20 roll, ensuring that misfortune can never be your fate. Enemies, however, are reminded of their own luck's scarcity; they suffer a -1 penalty to all attack rolls against you while this badge is worn.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reroll Fortunes",
      "Enemy Misfortune"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Anonymous Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reroll Fortunes",
        "rules": "Once per long rest, the wearer may reroll any d20 roll. The new result replaces the original. This effect is limited to one use per day."
      },
      {
        "title": "Enemy Misfortune",
        "rules": "While wearing this badge, enemies are at a disadvantage; they suffer a -1 penalty to all attack rolls against you. This effect persists for the duration of the encounter or until removed by an action that specifically counters magic items."
      }
    ],
    "levelRequirementReason": "The Lucky Day Badge is accessible early on, encouraging players to embrace their luck early in their journey.",
    "vendorReason": "The Cosmic Jesters are known for their whimsical and powerful trinkets; the Rogueport Black Market is their primary distribution hub.",
    "shippingDetail": "Delivered swiftly by the same courier who ensures all items from the Cosmic Jesters' realm reach adventurers in time for their next grand adventure.",
    "usage": {
      "activation": "Once per long rest, active use of the reroll ability.",
      "duration": "Instantaneous; duration limited to one use per day.",
      "endsWhen": "The effect ends when a new long rest is commenced or until used.",
      "charges": "Unlimited uses, but only one per long rest."
    },
    "priceReason": "The Lucky Day Badge offers significant utility and protection for players at an early stage of their adventuring career, making it a fair value for the XP cost.",
    "priceOriginal": 180000,
    "priceReviewedAt": "2026-07-22T08:15:18.580701+00:00",
    "aiReviewedAt": "2026-07-22T08:15:18.580701+00:00",
    "aiReviewVersion": 1
  },
  "lucky_pixel": {
    "id": "lucky_pixel",
    "name": "Lucky Pixel",
    "description": "The Lucky Pixel, a diminutive, glowing mote of digital fortuity, is a gambler's talisman and a tech enthusiast's charm. Crafted from salvaged bits of vintage circuit boards by Starflea, it clings to any nearby electronics with an almost magnetic pull. Its magic ensures that when you're on the brink of a critical decision, you can reroll your fortune with a simple tap, transforming potential loss into gain.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔴",
    "stock": 50,
    "rarity": "common",
    "effects": [
      "Reroll Fortunes",
      "Electron Magnet"
    ],
    "vendor": "starflea",
    "shippedBy": "Small Tin Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reroll Fortunes",
        "rules": "Activate as an action to reroll a d20. Take the higher of the two rolls, but only once per day."
      },
      {
        "title": "Electron Magnet",
        "rules": "Passively attracts stray electronics within 5 feet for 1 minute, doubling the chances of finding lost components or tools nearby without requiring any action to maintain."
      }
    ],
    "levelRequirementReason": "Requires no level as it provides a simple, everyday utility.",
    "vendorReason": "Starflea is known for its eclectic mix of digital and mechanical curiosities, and the Lucky Pixel fits perfectly within their inventory.",
    "shippingDetail": "Ships via Small Tin with a delivery delay of one week due to the fragile nature of the electronics involved.",
    "usage": {
      "activation": "Action (once per day)",
      "duration": "Instantaneous for reroll, lasts 1 minute for Electron Magnet",
      "endsWhen": "Ends when the duration expires or the item is destroyed",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price reflects its everyday utility and minor magical effects.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T08:15:05.026137+00:00",
    "aiReviewedAt": "2026-07-22T08:15:05.026137+00:00",
    "aiReviewVersion": 1
  },
  "luigi_ghost_hunting_net_replica": {
    "id": "luigi_ghost_hunting_net_replica",
    "name": "Luigi Ghost-Hunting Net Replica",
    "description": "This flimsy net, crafted by Wannabe Ghostbusters Inc., bears a striking resemblance to Luigi's iconic hunting tool. Made of delicate gossamer threads, it is designed specifically for capturing small spirits or illusions. When used, there's a slim chance (50%) that the net will tear after one use, requiring a DC 13 saving throw to avoid being trapped by the broken strands. Holding this net grants Luigi's 'ghost luck,' bestowing advantage on saves against fear.",
    "category": "equipment",
    "price": 1000,
    "icon": "🕸️",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Ghostly Capture",
      "Fragile Net"
    ],
    "vendor": "wario_land",
    "shippedBy": "Boo Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ghostly Capture",
        "rules": "When used, the net can attempt to capture small spirits or illusions. The target must succeed on a DC 13 Wisdom saving throw or be trapped within the net for 1 minute."
      },
      {
        "title": "Fragile Net",
        "rules": "There is a 50% chance that the net will tear after one use, causing the user to fall prone and disadvantageous on their next action. The net has only one charge."
      }
    ],
    "levelRequirementReason": "This item can be used by low-level characters as a starter tool for ghost hunting.",
    "vendorReason": "Wario Land, known for quirky gadgets and novelties, stocks Luigi Ghost-Hunting Net Replicas to cater to amateur adventurers.",
    "shippingDetail": "Ships via Boo Delivery within three business days.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous or 1 minute (whichever ends first)",
      "endsWhen": "The target escapes, the user fails a saving throw, or one use is expended.",
      "charges": "One charge"
    },
    "priceReason": "Balanced at 1000 XP to reflect its limited utility and fragile nature.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-22T08:14:40.185925+00:00",
    "aiReviewedAt": "2026-07-22T08:14:40.185925+00:00",
    "aiReviewVersion": 1
  },
  "luigi_hat_replica": {
    "id": "luigi_hat_replica",
    "name": "Green Hat Replica",
    "description": "The Green Hat Replica, a humble yet distinctive cap with an embossed 'L' on its crown, is a relic of Toad Town's past. Crafted from durable fabric and adorned with a faded green hue, this hat has seen better days but still retains its charm. It might not offer much in the way of protection, but it certainly catches eyes—people often mistake you for someone else entirely when wearing it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧢",
    "stock": 100,
    "rarity": "common",
    "effects": [
      "Mistaken Identity",
      "Itchy Comfort"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Standard Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mistaken Identity",
        "rules": "When worn in a populated area, there's a 20% chance someone will mistake you for Luigi. This effect lasts until the end of your next turn and can be resisted with a successful Dexterity saving throw (DC 13)."
      },
      {
        "title": "Itchy Comfort",
        "rules": "The Green Hat Replica causes constant itching, requiring concentration to ignore. You must make a Constitution saving throw at the start of each of your turns while wearing it; failure means you are incapacitated until the hat is removed."
      }
    ],
    "levelRequirementReason": "This item's charm and inconvenience level are suitable for beginning adventurers.",
    "vendorReason": "The Toad Town Market sells a variety of nostalgic items, including this relic of Luigi's past.",
    "shippingDetail": "Ships within a week with Standard Courier service.",
    "usage": {
      "activation": "Passive effect while wearing the hat.",
      "duration": "Instantaneous; lasts until removed or resisted via save.",
      "endsWhen": "The effects end when you remove the hat, successfully resist them, or are incapacitated by them.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a cost of 1000 XP, considering its charm and inconvenience.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T08:15:02.946300+00:00",
    "aiReviewedAt": "2026-07-22T08:15:02.946300+00:00",
    "aiReviewVersion": 1
  },
  "luigi_poltergust": {
    "id": "luigi_poltergust",
    "name": "Poltergust Replica",
    "description": "The Poltergust Replica hums with a ghostly blue aura, its body crafted from polished brass and enchanted with ancient, spectral runes. It can suck up both ethereal creatures and ordinary objects with alarming efficiency, storing them in its compact frame until you're ready to unleash their power. Crafted by the Rogueport Black Market for use in the city's haunted alleys, this vacuum is a must-have tool for those facing poltergists or mischievous spirits.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Suction of Ethereal",
      "Releases Phantom Force"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Ghostly Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Suction of Ethereal",
        "rules": "Activates as an action. Targets one creature within 30 feet that is a ghost or a poltergeist, forcing it to make a Wisdom saving throw (DC 15). On failure, the target is sucked into the Poltergust Replica and stored for up to 24 hours before you can release it as part of an attack. The creature remains incapacitated until released."
      },
      {
        "title": "Releases Phantom Force",
        "rules": "Activates when you wish to use a stored ghost or poltergeist as part of an attack, requiring no action. Releases the stored creature in a 10-foot cone. Each target within the area must make a Dexterity saving throw (DC 14). On failure, they are pushed back and take 3d6 force damage."
      }
    ],
    "levelRequirementReason": "This vacuum requires significant skill to handle ethereal creatures and effectively use its stored power.",
    "vendorReason": "The Rogueport Black Market is known for selling tools that help navigate the city's supernatural dangers, making it a logical vendor for this item.",
    "shippingDetail": "Delivered by a spectral messenger who ensures swift and safe transport of the Poltergust Replica to its destination.",
    "usage": {
      "activation": "Activates as an action or reaction when targeting ethereal creatures, or as part of an attack if using stored creatures.",
      "duration": "The suction lasts for up to 24 hours before released; stored creatures can be released once per short rest.",
      "endsWhen": "Uses are exhausted after 5 activations. The device recharges at dawn the next day.",
      "charges": "Limited by charges and resets daily."
    },
    "priceReason": "This balanced price reflects its rarity, utility, and the effort required to handle spectral threats.",
    "priceOriginal": 28000,
    "priceReviewedAt": "2026-07-22T08:15:34.319590+00:00",
    "aiReviewedAt": "2026-07-22T08:15:34.319590+00:00",
    "aiReviewVersion": 1
  },
  "luigis_diary_key": {
    "id": "luigis_diary_key",
    "name": "Key to Luigi's Diary",
    "description": "The key glimmers faintly in your hand, its surface etched with intricate symbols that seem to hum with a secret of their own. Legend says it was crafted by an ancient blacksmith in the Mushroom Kingdom, hidden away for safekeeping in Mario's basement. Few have seen the diary it unlocks; few have dared to open its pages, which are filled with mundane yet tantalizing secrets about Luigi's daily life and his unspoken dreams.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🗝️",
    "stock": 1,
    "rarity": "unique",
    "effects": [
      "Unlocks a book you don't have",
      "Reveals secret notes upon use"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Envelope",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unlock Mystery",
        "rules": "When used, the key unlocks an ancient leather-bound diary hidden in Mario's basement. The diary is not within your possession; it appears as if by magic after the key is turned."
      },
      {
        "title": "Mundane Secrets",
        "rules": "Upon opening, the diary reveals secret notes that are surprisingly ordinary—notes about Luigi’s daily routines, sketches of his dreams, and a few hints at his hidden aspirations. These secrets do not grant any power or advantage in combat."
      }
    ],
    "levelRequirementReason": "The key's ability to unlock something beyond your possession requires basic dexterity and curiosity.",
    "vendorReason": "Toads from Toad Town have access to many hidden treasures and secrets of the Mushroom Kingdom, including this mysterious diary key.",
    "shippingDetail": "The key is carefully packed in a Toad-themed envelope with extra padding for safe delivery.",
    "usage": {
      "activation": "Standard action",
      "duration": "Instantaneous",
      "endsWhen": "Once the diary has been unlocked and its secrets revealed",
      "charges": "Unlimited, but each use requires a successful Dexterity check (DC 10)"
    },
    "priceReason": "The key's rarity and the legend surrounding it justify its reduced price to reflect its unique nature.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T08:16:09.810965+00:00",
    "aiReviewedAt": "2026-07-22T08:16:09.810965+00:00",
    "aiReviewVersion": 1
  },
  "lycan_pack_full_moon_howl_stew_recipe": {
    "id": "lycan_pack_full_moon_howl_stew_recipe",
    "name": "Recipe: Lycan Pack Full Moon Howl Stew",
    "description": "This recipe for Lycan Pack Full Moon Howl Stew is a rare concoction brewed under the lunar glow. It's said that only those who partake in this stew can truly understand the howling of the pack at night. The stew must be consumed during a full moon, and upon doing so, you gain advantage on attack rolls made after dark for 2 hours. Additionally, it strengthens your connection to other lycans, allowing you to share a bond through howls that reach across distances.",
    "price": 1000,
    "icon": "🍲",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Moonlit Feast",
      "Howling Synergy"
    ],
    "vendor": "lycan_pack_lodge",
    "shippedBy": "Lunar Ladle Lore",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Moonlit Feast",
        "rules": "Consume the stew during a full moon. Gain advantage on attack rolls made in dim light or darkness for 2 hours after consumption."
      },
      {
        "title": "Howling Synergy",
        "rules": "When you and other lycans howl together under the same full moon, your bond strengthens, allowing you to communicate through howls. This effect lasts until the next dawn."
      }
    ],
    "levelRequirementReason": "Suitable for all adventurers, as it enhances teamwork and combat effectiveness during night-time adventures.",
    "vendorReason": "The Lycan Lodge is known for its deep connection to lycanthropy and the natural world, thus they are trusted keepers of such a recipe.",
    "shippingDetail": "Ships under cover of night with a full moon overhead, ensuring the stew's potency remains intact.",
    "usage": {
      "activation": "Consume during a full moon for 2 hours of advantage on attack rolls in dim light or darkness.",
      "duration": "2 hours after consumption",
      "endsWhen": "At dawn following consumption",
      "charges": "Unlimited, as it is a recipe that can be prepared multiple times"
    },
    "priceReason": "Balanced at 1000 XP to reflect the rare ingredients and brewing process required for this lycan stew.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T08:15:32.477371+00:00",
    "aiReviewedAt": "2026-07-22T08:15:32.477371+00:00",
    "aiReviewVersion": 1
  },
  "lycan_pack_full_moon_ritual_service": {
    "id": "lycan_pack_full_moon_ritual_service",
    "name": "Lycan Pack Full Moon Ritual Service",
    "description": "The Lycan Pack Full Moon Ritual Service is a ritual kit crafted by the ancient Moon Shamans. Made from silver and wolfsbane, it safely harnesses the lunar power during a full moon. Activating this service grants you wolf form traits: Darkvision and +1 to Strength for one hour, ensuring no risk of becoming cursed like a true lycan. Additionally, it allows you to howl, which has a 20% chance to call distant pack members for aid. This item is the result of centuries of ritual refinement.",
    "price": 1000,
    "icon": "🌕",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Wolf Form Traits",
      "No Curse Risk"
    ],
    "vendor": "lycan_pack_lodge",
    "shippedBy": "Lunar Amulet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wolf Form Traits",
        "rules": "Activates as a bonus action, grants Darkvision and +1 to Strength for one hour. This effect ends when the duration expires or if you leave your current location."
      },
      {
        "title": "No Curse Risk",
        "rules": "This item ensures no risk of becoming cursed like true lycans; it only provides wolf form benefits without any side effects. No saving throw is required."
      }
    ],
    "levelRequirementReason": "This service is designed for adventurers who are not yet fully trained but still wish to safely explore the lunar powers.",
    "vendorReason": "The Lycan Pack Lodge has a deep understanding of lycanthropy and its rituals, making them the perfect vendor for this item.",
    "shippingDetail": "Ships via the Lunar Amulet courier service. The delivery is expedited but can take up to one week depending on lunar phases.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 hour or until duration expires",
      "endsWhen": "Leaving your current location or when the duration ends",
      "charges": "Unlimited, as it is a service rather than an item that depletes charges."
    },
    "priceReason": "The price reflects its rarity and the skill of Moon Shamans in crafting this safe ritual tool. It is not overpriced for adventurers who need to explore lunar power without risk.",
    "priceOriginal": 16000,
    "priceReviewedAt": "2026-07-22T08:15:46.968048+00:00",
    "aiReviewedAt": "2026-07-22T08:15:46.968048+00:00",
    "aiReviewVersion": 1
  },
  "lycan_pack_moonlit_fur_trousers": {
    "id": "lycan_pack_moonlit_fur_trousers",
    "name": "Lycan Pack Moonlit Fur Trousers",
    "description": "These trousers are crafted from the dense fur of wolves that run under the moonlight. The fabric is woven with threads made from forest vines, enhancing their durability and flexibility. They provide a natural camouflage in the night, making you blend seamlessly into the shadows during full moons. Their wearer gains a +5 ft speed bonus when navigating through thick forests and gains advantage on Dexterity (Acrobatics) checks performed under moonlight.",
    "price": 1000,
    "icon": "👖",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Moonlit Camouflage",
      "Forest Sprint"
    ],
    "vendor": "lycan_pack_den",
    "shippedBy": "Lunar Leather Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Moonlit Camouflage",
        "rules": "This effect grants the wearer a +2 bonus to Dexterity (Stealth) checks made in areas with dim light. It activates at dusk and ends at dawn."
      },
      {
        "title": "Forest Sprint",
        "rules": "When moving through forests, the wearer’s speed increases by 10 feet for 1 hour each day after sunset. This effect requires no action to activate and does not expend charges or have a limit."
      }
    ],
    "levelRequirementReason": "These trousers are designed for beginners who want to enhance their natural abilities in forested areas.",
    "vendorReason": "The Lycan Pack Den specializes in gear made by the Pack Tanners, known for their unique and functional designs.",
    "shippingDetail": "Ships within a week during the full moon cycle; expedited shipping available upon request.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Until dawn or removed",
      "endsWhen": "Dawn or manually removed",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a lower price to reflect the moderate benefits and ease of use for beginners.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T08:15:45.933548+00:00",
    "aiReviewedAt": "2026-07-22T08:15:45.933548+00:00",
    "aiReviewVersion": 1
  },
  "lycan_pack_moonlit_mortar": {
    "id": "lycan_pack_moonlit_mortar",
    "name": "Lycan Pack Moonlit Mortar",
    "description": "The Lycan Pack Moonlit Mortar is a handcrafted mortar forged by the Pack Carvers under the lunar gaze. Its porcelain bowl glows faintly in the night, enhancing the potency of any herbs ground during its pounding. The mortar's howl at moonrise adds an eerie charm to the ritual, but it also serves as a signal for nearby pack members. Only those attuned to the rhythms of the night can harness its full potential.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌕",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Moonlit Boost",
      "Pack Signal"
    ],
    "vendor": "lycan_pack_lodge",
    "shippedBy": "Moonlit Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Moonlit Boost",
        "rules": "When you grind herbs in this mortar during a full moon, you gain advantage on Intelligence (Herbalism) checks. The effect lasts until the start of your next short rest."
      },
      {
        "title": "Pack Signal",
        "rules": "If you pound this mortar at the peak of the lunar cycle, it emits a howl that can be heard by other Lycan Pack members within 1 mile. This signal does not require an action and does not expend charges or uses."
      }
    ],
    "levelRequirementReason": "This item's balance is appropriate for beginning adventurers who might find use in herbalism.",
    "vendorReason": "The Lycan Pack Lodge is a hub for those attuned to the lunar cycle and its effects on plant life.",
    "shippingDetail": "Ships via the Lunar Grind Gear, ensuring it arrives at the right phase of the moon.",
    "usage": {
      "activation": "Pounding this mortar during a full moon for grinding herbs.",
      "duration": "Until your next short rest or until the moon wanes.",
      "endsWhen": "The full moon cycle ends or you take a short rest.",
      "charges": "Unlimited, but only active during a lunar cycle."
    },
    "priceReason": "This price reflects its specialized crafting and limited availability within the pack's lore.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T08:15:49.376051+00:00",
    "aiReviewedAt": "2026-07-22T08:15:49.376051+00:00",
    "aiReviewVersion": 1
  },
  "lycan_pack_werewolf_shedding_service": {
    "id": "lycan_pack_werewolf_shedding_service",
    "name": "Lycan Pack Werewolf Shedding Service",
    "description": "The Lycan Pack Werewolf Shedding Service is a ritualistic grooming session that alleviates the burden of lycanthropy. During this service, you undergo a thorough cleaning that temporarily suppresses your curse for seven days. However, the experience leaves you covered in fur, granting disadvantage on Stealth checks until the next long rest. The Lycan Pack Groomers, renowned for their expertise in all things canine, offer this unique service to help werewolves manage their condition.",
    "category": "services",
    "price": 1000,
    "icon": "🐺",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Temporary Suppression",
      "Fur Everywhere"
    ],
    "vendor": "lycan_pack",
    "shippedBy": "Full Moon Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Suppression",
        "rules": "As a bonus action, you can activate the service for temporary suppression of one curse of lycanthropy. This effect lasts for 7 days and provides advantage on Constitution saving throws against being charmed or frightened by werewolf forms."
      },
      {
        "title": "Fur Everywhere",
        "rules": "For every day the suppression lasts, you leave behind a significant amount of fur. As a result, you have disadvantage on Stealth checks until your next long rest."
      }
    ],
    "levelRequirementReason": "This service is designed for any werewolf, regardless of their current level, to provide immediate relief from the challenges of lycanthropy.",
    "vendorReason": "The Lycan Pack Groomers are well-known for their unparalleled expertise in dealing with the unique needs of werewolves.",
    "shippingDetail": "Ships under a Full Moon, ensuring the service is performed during the most effective lunar cycle.",
    "usage": {
      "activation": "Bonus action to activate and receive temporary suppression benefits.",
      "duration": "7 days of temporary suppression.",
      "endsWhen": "The duration ends after 7 days or when the effect is disrupted by a harmful event affecting your form.",
      "charges": "Unlimited, as this service can be repeated."
    },
    "priceReason": "This price reflects the expertise and ritual involved in the service, ensuring it remains balanced and accessible to all werewolves.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T08:16:00.561852+00:00",
    "aiReviewedAt": "2026-07-22T08:16:00.561852+00:00",
    "aiReviewVersion": 1
  },
  "magic_carpet": {
    "id": "magic_carpet",
    "name": "Pidgit's Magic Carpet",
    "description": "Pidgit's Magic Carpet is a hand-crafted flying rug, woven from threads of starlight and enchanted with the essence of Subcon magic. It hums softly as it carries up to four medium creatures through the skies, its flight steady and silent. The air around it smells faintly of fresh vegetables, a subtle reminder of its humble origins in the fields of Pidgit's garden. This magical carpet does not require fuel for its flight, making long journeys both easy and efficient.",
    "category": "premium",
    "price": 1000,
    "icon": "🧞",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Carries up to 4 medium creatures",
      "Flight Speed 50 feet"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Rolled Up",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Carrying Capacity",
        "rules": "The carpet can carry up to four medium-sized creatures. If more than this number ride upon it, the carpet's flight becomes labored and may descend for rest."
      },
      {
        "title": "Flight Speed 50 feet",
        "rules": "As a bonus action, the user can activate Pidgit's Magic Carpet to fly at 50 feet per round. The duration is instantaneous but requires concentration until the end of the user's next turn."
      }
    ],
    "levelRequirementReason": "The magic of the carpet is simple enough for even a novice to control.",
    "vendorReason": "Shamans at Pidgit's hut are known for their mastery of Subcon magic, making this item an in-house creation.",
    "shippingDetail": "The carpet is rolled up tightly and delivered using the local courier service. Shipping time is approximately three days.",
    "usage": {
      "activation": "Bonus action to activate; concentration required until end of next turn.",
      "duration": "Instantaneous activation, lasts until end of user's next turn with concentration.",
      "endsWhen": "Concentration ends or the carpet descends due to overloading.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The price reflects its material rarity and the skill needed for such enchantment, but not as a legendary item.",
    "priceOriginal": 240000,
    "priceReviewedAt": "2026-07-22T19:52:40.385984+00:00",
    "aiReviewedAt": "2026-07-22T19:52:40.385984+00:00",
    "aiReviewVersion": 1
  },
  "magic_missile_mod_kit": {
    "id": "magic_missile_mod_kit",
    "name": "Magic Missile Mod Kit (Tactical)",
    "description": "The Magic Missile Mod Kit (Tactical) is a sleek, arcane device that enhances your basic evocation spells. These fuses not only add flair to your magic missiles but also grant them a sparkly discharge that can be seen for several feet. Once per day, you can alter the damage type of your missile to force, radiant, or necrotic. The kit's most unique feature is its ability to knock targets 5 feet in any direction upon impact, providing a tactical advantage in close combat.",
    "category": "equipment",
    "price": 1000,
    "icon": "💎",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Sparkly Discharge",
      "Damage Type Alteration"
    ],
    "vendor": "wild_mage_surplus",
    "shippedBy": "Swift Courier of the Arcane Arts",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sparkly Discharge",
        "rules": "When you cast Magic Missile using this mod kit, the missiles leave behind a sparkling trail that can be seen up to 30 feet away. This effect has no save DC and does not expend charges."
      },
      {
        "title": "Damage Type Alteration",
        "rules": "Once per day, you may change one missile's damage type to force, radiant, or necrotic when using this mod kit. The spell has a range of 120 feet, and the effect lasts until the start of your next turn. There is no save DC for this modification."
      }
    ],
    "levelRequirementReason": "This mod kit requires no specific caster level as it enhances basic evocation spells available to lower-level spellcasters.",
    "vendorReason": "Wild Mage Surplus specializes in arcane accessories and spell-enhancing kits, making this item a perfect fit for their inventory.",
    "shippingDetail": "Shipped via Swift Courier of the Arcane Arts, arriving within one week at most.",
    "usage": {
      "activation": "On casting Magic Missile",
      "duration": "Instantaneous; lasts until your next turn",
      "endsWhen": "The start of your next turn",
      "charges": "Unlimited"
    },
    "priceReason": "This mod kit provides significant tactical advantages and enhances a basic spell, making it a valuable but not overpowered addition to any caster's arsenal.",
    "priceOriginal": 14300,
    "priceReviewedAt": "2026-07-22T08:16:03.773286+00:00",
    "aiReviewedAt": "2026-07-22T08:16:03.773286+00:00",
    "aiReviewVersion": 1
  },
  "magikoopa_wand": {
    "id": "magikoopa_wand",
    "name": "Magikoopa's Bent Wand",
    "description": "The Magikoopa's Bent Wand is a misshapen, cackling stick that bends and twists in your hand as it fires off random spells, often targeting the wrong foe or ally with comical precision. Its unpredictable nature can be both a boon and a bane; sometimes, it grants you just the spell you need, but other times, it unleashes chaos on your party. The wand's cackles are audible even when you're miles away, hinting at its mischievous spirit.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪄",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Spells Misfire",
      "Cackles and Explodes"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Star Wrap Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spells Misfire",
        "rules": "When the wand is activated, it casts a random 1st-level spell. There is a 50% chance that the target of the spell is wrong; the DM chooses the target in this case."
      },
      {
        "title": "Cackles and Explodes",
        "rules": "The wand emits an ear-piercing cackle when used, and it explodes on a natural roll of 1 for the casted spell. The explosion deals 2d6 force damage to you. You must succeed on a DC 13 Dexterity saving throw or be knocked prone."
      }
    ],
    "levelRequirementReason": "Even novice wizards can manage this wand's unpredictable magic, though the risks are just as high.",
    "vendorReason": "The comet observatory stocks eccentric and whimsical items, often found in the hands of its patrons.",
    "shippingDetail": "Delivered via Star Wrap Express; expect a delay due to cosmic interference.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous; the spell is cast and resolved immediately",
      "endsWhen": "The spell effect ends when the spell's duration expires, or if it explodes on a natural roll of 1",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its unpredictable nature and potential for both success and disaster.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-22T08:16:29.668862+00:00",
    "aiReviewedAt": "2026-07-22T08:16:29.668862+00:00",
    "aiReviewVersion": 1
  },
  "makes_waffles_with_wario_s": {
    "id": "makes_waffles_with_wario_s",
    "name": "Wario's  Waffle Iron",
    "description": "Wario's Waffle Iron is a fearsome culinary tool forged in the heart of the Mushroom Kingdom. It not only bakes waffles into the shape of Wario’s iconic face but also brings a touch of intimidation to any breakfast table. Use it at your own peril, as those who dare to clean up after using this iron must contend with sticky, misshapen waffles that seem to mock them every time they attempt to tidy up.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥞",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Wario's Face",
      "Messy Cleanup"
    ],
    "vendor": "wario_land",
    "shippedBy": "Waffle Wagon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wario's Face",
        "rules": "When used, this iron bakes waffles into the shape of Wario’s face. This effect provides advantage on Intimidation checks made during breakfast but also imposes a disadvantage if you are attempting to clean up afterward."
      },
      {
        "title": "Messy Cleanup",
        "rules": "If you attempt to clean up after using this iron, you must succeed on a DC 12 Dexterity saving throw or be marked with sticky waffles that last for an hour. This effect imposes disadvantage on your next initiative check."
      }
    ],
    "levelRequirementReason": "This item is designed to be accessible to beginning adventurers who can appreciate its unique and potentially chaotic nature.",
    "vendorReason": "Wario Land himself ensures that this kitchenware reaches the hands of those who will truly appreciate its craftsmanship and quirks.",
    "shippingDetail": "The Waffle Wagon delivers with a flourish, ensuring that your waffles arrive piping hot and ready to be shaped into Wario’s face.",
    "usage": {
      "activation": "As a bonus action when starting breakfast.",
      "duration": "Instantaneous effect.",
      "endsWhen": "Cleanup attempt or if the iron is not used for one week.",
      "charges": "Unlimited, but requires weekly maintenance to keep it in top shape."
    },
    "priceReason": "The price reflects both the unique craftsmanship and the potential chaos this item can bring to any breakfast table.",
    "priceOriginal": 5300,
    "priceReviewedAt": "2026-07-22T08:16:19.985252+00:00",
    "aiReviewedAt": "2026-07-22T08:16:19.985252+00:00",
    "aiReviewVersion": 1
  },
  "makes_waffles_with_wario_stamps": {
    "id": "makes_waffles_with_wario_stamps",
    "name": "Wario's Waffle Maker",
    "description": "Wario's Waffle Maker churns out golden waffles stamped with his mischievous likeness, a culinary masterpiece that heals you and adds a boost to your constitution in the morning. Each use not only replenishes your health but also grants a temporary advantage to your next sale attempt, making it easier to peddle your goods. This contraption is a testament to Wario's knack for turning every mealtime into an adventure.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥞",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Healing Breakfast",
      "Boosting Charisma"
    ],
    "vendor": "wario_land",
    "shippedBy": "Waffle Wave Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Breakfast",
        "rules": "When activated, the Waffle Maker produces a waffle that heals the user for 1d4 + Constitution modifier hit points. This effect is instantaneous and does not require any action to activate."
      },
      {
        "title": "Boosting Charisma",
        "rules": "For 24 hours after using the Waffle Maker, you gain advantage on Charisma (Persuasion) checks made in the morning. This temporary boost can be used once per day and is limited to one use per long rest."
      }
    ],
    "levelRequirementReason": "Anyone can use this iconic item for its delightful and practical benefits.",
    "vendorReason": "Wario Land naturally sells the best-selling Waffle Maker, a staple in his culinary empire.",
    "shippingDetail": "Orders are shipped within 24 hours of purchase and delivered via Waffle Wave Express, ensuring you receive your waffle-making magic fresh from the source.",
    "usage": {
      "activation": "Instantaneous action",
      "duration": "Until morning ends",
      "endsWhen": "After 24 hours or upon using another breakfast buff",
      "charges": "Unlimited"
    },
    "priceReason": "The Waffle Maker offers a unique combination of healing and social advantage, justifying its fair value in XP.",
    "priceOriginal": 5400,
    "priceReviewedAt": "2026-07-22T08:16:59.949613+00:00",
    "aiReviewedAt": "2026-07-22T08:16:59.949613+00:00",
    "aiReviewVersion": 1
  },
  "makes_your_wallet_bigger_inside": {
    "id": "makes_your_wallet_bigger_inside",
    "name": "Wario's Wallet Expander",
    "description": "Wario's Wallet Expander is a peculiar leather pouch with an embossed 'W' and a hint of green slime around its edges. This enchanted wallet can hold up to 200 extra gold pieces, but it leaks at a rate of 5% daily. When the touch of Wario nears, you gain advantage on checks related to greed or hoarding. Beware, though—it's not just a financial asset: its contents are subject to unpredictable shifts in value and occasional contamination.",
    "category": "equipment",
    "price": 1000,
    "icon": "💼",
    "stock": 11,
    "rarity": "common",
    "effects": [
      "Gold Leak",
      "Greed Advantage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Expand Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gold Leak",
        "rules": "The wallet leaks gold at a rate of 5% daily. This effect is cumulative, and the lost gold must be replaced for it to function properly again."
      },
      {
        "title": "Greed Advantage",
        "rules": "You gain advantage on checks related to greed or hoarding when within 30 feet of Wario's Wallet Expander. The effect lasts until you move out of range or use an action to close the wallet completely."
      }
    ],
    "levelRequirementReason": "Basic manipulation and handling are required, making it accessible to low-level characters.",
    "vendorReason": "Only Wario would dare sell such a peculiar yet useful item in his shop.",
    "shippingDetail": "Delivered by the most reliable courier in the Mushroom Kingdom, but beware—its contents might shift during transit.",
    "usage": {
      "activation": "Instantaneous activation to close the wallet.",
      "duration": "Until you use an action to reopen it.",
      "endsWhen": "You move out of range or use an action to close it.",
      "charges": "Unlimited, but requires replacement gold."
    },
    "priceReason": "The enchantment and the unique material contribute to its moderate price point.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-22T08:16:33.030801+00:00",
    "aiReviewedAt": "2026-07-22T08:16:33.030801+00:00",
    "aiReviewVersion": 1
  },
  "mallows_cloud": {
    "id": "mallows_cloud",
    "name": "Nimbus Cloud",
    "description": "The Nimbus Cloud is a fluffy, rideable mount that appears as if woven from the softest cotton. Its pure white form glows faintly under starlight, and it can only be ridden by those whose hearts remain unblemished by darkness. When summoned, it emits a gentle hum that invites you to climb aboard. The cloud can summon light rain to quench the earth below, but if you commit an act of malice, you will plummet through its form, crashing to the ground with a sickening thud.",
    "category": "premium",
    "price": 1000,
    "icon": "☁️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Personal Flying Mount",
      "Falls Through Evil Acts"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Celestial Winds",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Cloud Flight",
        "rules": "The Nimbus Cloud functions as a personal flying mount for riders whose hearts remain pure. When activated, it grants the rider the ability to fly at a speed of up to 30 feet per round, but only while their alignment remains lawful good."
      },
      {
        "title": "Rainfall",
        "rules": "By willing the cloud into motion, you can summon light rain in a 15-foot radius around your mount. This effect lasts for 1 minute and provides shelter from direct sunlight, granting cover to creatures within its area. If you perform an act of evil, the cloud will disintegrate, sending you plummeting to the ground."
      }
    ],
    "levelRequirementReason": "Only those who have proven their unwavering goodness can command such a pure and noble mount.",
    "vendorReason": "The Comet Observatory, a beacon of celestial knowledge, naturally stocks items that align with the heavens.",
    "shippingDetail": "Ships via the fastest celestial winds, arriving within one week under clear skies.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous activation; lasts until dismissed or an evil act is committed",
      "endsWhen": "An evil act is performed by the rider, or the mount is dismissed",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the cloud's rarity and the significant XP required to ensure only those of pure heart can command it.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-22T08:17:08.825523+00:00",
    "aiReviewedAt": "2026-07-22T08:17:08.825523+00:00",
    "aiReviewVersion": 1
  },
  "map_fragment_starfield": {
    "id": "map_fragment_starfield",
    "name": "Starfield Map Fragment",
    "description": "This fragment of an ancient star map is a tattered scrap of parchment, crisscrossed with celestial symbols and lines. It reveals hidden ley nodes and celestial shrines when held aloft under moonlight, casting a faint glow that flickers with the stars above. The map's origins are shrouded in mystery, but it's said to have been crafted by scholars who charted the heavens long before the Age of Legends. A relic of forgotten knowledge, it requires only the light of the night sky to unfold its secrets.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🗺️",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Reveals nearby ley nodes and celestial shrines",
      "Safe path revelation"
    ],
    "vendor": "orbit_outpost",
    "shippedBy": "Rolled Tube Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Celestial Revelation",
        "rules": "When held aloft under moonlight, this fragment reveals hidden ley nodes and celestial shrines within a 60-foot radius. This effect is instantaneous and does not require an action to activate."
      },
      {
        "title": "Safe Path Revelation",
        "rules": "Once per day, the user can point the map in any direction and it will reveal the safest path through the surrounding terrain for up to one mile. The DM has final discretion over what 'safest' means in this context."
      }
    ],
    "levelRequirementReason": "This fragment is accessible to beginners, as its power lies more in its ancient knowledge than in complex magic.",
    "vendorReason": "Orbit Outpost deals in relics and curiosities from distant worlds; a star map fragment fits well within their inventory.",
    "shippingDetail": "Ships via the Rolled Tube, arriving in 2-3 days with no special handling required.",
    "usage": {
      "activation": "Passive effect when held aloft under moonlight; Safe Path Revelation is a once-daily use.",
      "duration": "Instantaneous",
      "endsWhen": "The map's effects end upon exhaustion of its uses or if the user willingly dismisses it.",
      "charges": "Once per day for Celestial Revelation, one daily use for Safe Path Revelation"
    },
    "priceReason": "The fragment is priced at 1000 XP to reflect its rare and ancient nature, providing a useful but not overpowered tool for explorers.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-22T08:16:47.385953+00:00",
    "aiReviewedAt": "2026-07-22T08:16:47.385953+00:00",
    "aiReviewVersion": 1
  },
  "map_of_nowhere": {
    "id": "map_of_nowhere",
    "name": "Map of Nowhere",
    "description": "The Map of Nowhere is a tattered, leather-bound scroll adorned with cryptic symbols and faded ink. Its origins are lost to time, yet it offers travelers a glimpse into realms that should not exist—portals to places where reality bends and twists. When unrolled in the right light, the map reveals hidden paths, but only to those who can understand its ancient language. It is said that each journey taken through these portals comes with an equal chance of revelation or peril.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🗺️",
    "stock": 1,
    "rarity": "unique",
    "effects": [
      "Portal Glimpse",
      "Ancient Language"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Tube",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Portal Glimpse",
        "rules": "When a character spends an action to read the map, they can attempt to locate a hidden portal by making a Wisdom (Perception) check. On a success, they discover one unmarked portal within a 1-mile radius that leads to a random location on the map's secret grid. The portal lasts for 1 hour and is only usable once per day."
      },
      {
        "title": "Ancient Language",
        "rules": "The map grants its owner advantage on any Intelligence (History) checks related to ancient, forgotten lore or hidden places. Additionally, it can be used as a component in rituals that involve travel between planes of existence, requiring no material components."
      }
    ],
    "levelRequirementReason": "The map's cryptic symbols and the risk associated with its portals make it suitable for characters who have demonstrated basic adventuring skills.",
    "vendorReason": "Comet Observatory has a reputation for collecting unusual artifacts, and this map fits well within their diverse inventory of curiosities.",
    "shippingDetail": "The Map of Nowhere is shipped via Tube's express courier service, ensuring it reaches its destination quickly despite its fragile nature.",
    "usage": {
      "activation": "Reading the map as an action to activate Portal Glimpse and using it in rituals requires a component pouch or similar item.",
      "duration": "Portal effects last for 1 hour, while Ancient Language is a permanent benefit.",
      "endsWhen": "The portal closes after one use, and the effect ends when the map's owner no longer understands its language.",
      "charges": "Unlimited, but only usable once per day."
    },
    "priceReason": "Considering the unique utility of the Map of Nowhere in exploration and lore, this price reflects its rarity without making it prohibitively expensive for a mid-level party.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T08:17:16.221681+00:00",
    "aiReviewedAt": "2026-07-22T08:17:16.221681+00:00",
    "aiReviewVersion": 1
  },
  "maple_armor_patch": {
    "id": "maple_armor_patch",
    "name": "Maple Armor Patch",
    "description": "A patch of living, maple-colored bark that adheres to armor like a second skin, this Maple Armor Patch not only restores its wearer's dexterity but also mends the metal itself. Each day, it heals 1d4 hit points to the armor, effectively restoring its luster and strength. In natural settings, if the patch is soaked in rainwater or exposed to fire, it sprouts vibrant leaves, enhancing the wearer's stealth by +2 to Stealth checks within dense foliage or forests.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪵",
    "stock": 20,
    "rarity": "uncommon",
    "effects": [
      "Armor Mending",
      "Stealth Enhancement"
    ],
    "vendor": "mossy_stall",
    "shippedBy": "Leaf-Wrapped Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Armor Mending",
        "rules": "The Maple Armor Patch restores 1d4 hit points of damage to the wearer’s armor at the start of each day. This effect does not trigger for more than one day per week."
      },
      {
        "title": "Stealth Enhancement",
        "rules": "If the patch is soaked in water or exposed to fire, it sprouts leaves that enhance the wearer's Stealth checks by +2 within natural areas like dense forests and thickets. This benefit lasts for 1 hour after activation but can only be used once per week."
      }
    ],
    "levelRequirementReason": "The patch requires a basic understanding of armor care and natural survival techniques.",
    "vendorReason": "Mossy Stall specializes in rare, nature-related items that aid adventurers in their quests through the wilds.",
    "shippingDetail": "The patch is delivered wrapped in leaves to protect it during transit and ensure its vitality remains intact.",
    "usage": {
      "activation": "Passive effect; no activation required. Soaking or burning the patch triggers the secondary effects.",
      "duration": "Instantaneous, daily restoration; stealth enhancement lasts for 1 hour after activation.",
      "endsWhen": "The effect ends when the week's limit is reached or the item is removed from the armor.",
      "charges": "Unlimited"
    },
    "priceReason": "The patch combines the value of both armor maintenance and survival gear, making it a balanced purchase.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T08:17:20.115389+00:00",
    "aiReviewedAt": "2026-07-22T08:17:20.115389+00:00",
    "aiReviewVersion": 1
  },
  "maple_super": {
    "id": "maple_super",
    "name": "Maple Super",
    "description": "Maple Super is a unique delicacy crafted by Toad Town's finest chefs. This confectionary delight combines the invigorating properties of a Super Mushroom with the syrupy richness of pure maple sugar, renowned for its ability to energize even the most exhausted adventurer. A single serving can restore 20 hit points and grants one additional spell slot at your disposal, perfect for those moments when you need that extra boost before an epic battle.",
    "category": "consumables",
    "price": 1000,
    "icon": "🥞",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Restore Health",
      "Grant Spell Slot"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Priority Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Health Restoration",
        "rules": "Eating Maple Super restores 20 hit points to the consumer. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Spell Slot Grant",
        "rules": "Maple Super grants one additional spell slot of any level that you can cast, but only once per long rest. Requires a bonus action to consume."
      }
    ],
    "levelRequirementReason": "This confectionary is designed for adventurers who are just beginning their journey and need an extra boost.",
    "vendorReason": "Toad Town Market specializes in unique, life-enhancing items that cater to the needs of young adventurers.",
    "shippingDetail": "Ships within one day with Priority Mail service.",
    "usage": {
      "activation": "Bonus action or passive consumption",
      "duration": "Instantaneous",
      "endsWhen": "Consumed, no duration",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the item's rarity and its beneficial effects on a young adventurer.",
    "priceOriginal": 40000,
    "priceReviewedAt": "2026-07-22T08:17:11.662640+00:00",
    "aiReviewedAt": "2026-07-22T08:17:11.662640+00:00",
    "aiReviewVersion": 1
  },
  "marilith_blade_sharpening": {
    "id": "marilith_blade_sharpening",
    "name": "Marilith Blade Sharpening Service",
    "description": "The Marilith Blade Sharpening Service hones your weapon to a razor's edge, granting it +1 to attack and damage rolls that stack up to +3 until you use it against a celestial creature. Crafted by the legendary Marilith Master Smith, this service ensures your blade is as sharp as a demon lord’s fang. Once employed in battle with a celestial, the enchantment wanes, leaving behind a weapon whose edge is dulled yet still formidable.",
    "price": 1000,
    "icon": "🔪",
    "stock": 20,
    "rarity": "epic",
    "effects": [
      "Weapon Gains +1 to Attack and Damage",
      "Lasts Until Weapon Kills a Celestial"
    ],
    "vendor": "abyssal_services",
    "shippedBy": "Imp Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Edge Enhancement",
        "rules": "The weapon gains +1 to attack and damage rolls, which can stack up to +3. These bonuses are only active while the weapon is in your possession."
      },
      {
        "title": "Celestial Slayer",
        "rules": "The enchantment ends once you use the weapon to kill a celestial creature. After this battle, the weapon’s edge remains sharp but no longer gains additional attack or damage bonuses from this service."
      }
    ],
    "levelRequirementReason": "This service is accessible to all adventurers who can afford its cost.",
    "vendorReason": "The Abyssal Services vendor offers unique and powerful items crafted by demon lords, making the Marilith Blade Sharpening Service a fitting addition to their offerings.",
    "shippingDetail": "Delivered swiftly by Imps who ensure your weapon arrives razor-sharp before you need it most.",
    "usage": {
      "activation": "Instantaneous, once per weapon and celestial creature killed",
      "duration": "Until weapon is used to kill a celestial or until the enchantment ends",
      "endsWhen": "Weapon is used against a celestial and kills one",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this service offers a significant boost to combat prowess without overbalancing the game.",
    "priceOriginal": 195000,
    "priceReviewedAt": "2026-07-22T19:53:03.619193+00:00",
    "aiReviewedAt": "2026-07-22T19:53:03.619193+00:00",
    "aiReviewVersion": 1
  },
  "mario_cap_replica": {
    "id": "mario_cap_replica",
    "name": "Red Cap Replica",
    "description": "This Red Cap Replica is a meticulously crafted, red plastic cap emblazoned with a gleaming 'M'. The cap's origin lies in Toad Town Market, where it was sold by Toadsworth himself for his latest charity auction. Wearing it grants you the semblance of Mario, complete with the iconic yellow mustache that only a true Mushroom Kingdom hero could muster. However, beware—its power is limited to mere appearance; it offers no real protection or combat advantage.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧢",
    "stock": 200,
    "rarity": "common",
    "effects": [
      "+0 AC",
      "Cosplay use only"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Standard Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Appearance Boost",
        "rules": "While wearing the Red Cap Replica, you gain a +2 bonus to Charisma (Performance) checks and saving throws. This effect lasts for an hour from the moment you put on the cap."
      },
      {
        "title": "Limited Duration",
        "rules": "The cap's magical properties are only active once per day. Removing it before the duration ends does not reset its daily use limit."
      }
    ],
    "levelRequirementReason": "Anyone can don this cap, regardless of level, as it focuses on appearance and performance rather than combat prowess.",
    "vendorReason": "Toadsworth frequently sells unique items from his market to raise funds for the Mushroom Kingdom.",
    "shippingDetail": "Delivered within a week, with no special handling required.",
    "usage": {
      "activation": "Wearing the cap as an action",
      "duration": "One hour from activation",
      "endsWhen": "The duration ends when you remove the cap or after one hour, whichever comes first.",
      "charges": "Unlimited"
    },
    "priceReason": "This replica is crafted with care and sold at a fair price that reflects its quality and unique origin story.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T08:17:48.028298+00:00",
    "aiReviewedAt": "2026-07-22T08:17:48.028298+00:00",
    "aiReviewVersion": 1
  },
  "measures_ingredients_to_the_molecule": {
    "id": "measures_ingredients_to_the_molecule",
    "name": "Mages' Guild Measuring Cups of Precision",
    "description": "These delicate measuring cups are crafted from arcane silver and enchanted by the Mages' Guild. They can measure ingredients with precision down to the molecule, ensuring that even the most minuscule differences in quantity do not affect your culinary results. The cups glow softly when you achieve perfect measurements, but they emit a disconcerting hum if you falter. With these tools, every cook becomes an alchemist, striving for perfection at all times.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥛",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Precision Measurement",
      "Perfectionist Trait"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Precision Measurement",
        "rules": "When using the measuring cups to prepare a meal or potion, you gain advantage on checks requiring precise measurements. This effect is active as long as you are preparing the meal or potion and ends when it is complete."
      },
      {
        "title": "Perfectionist Trait",
        "rules": "If you do not measure exactly with these cups, they emit a disconcerting hum that lasts for 1 minute. On your turn while this effect is active, you have disadvantage on all ability checks and saving throws unless the meal or potion you are preparing has been completed."
      }
    ],
    "levelRequirementReason": "This item requires no specific level as it aids in basic precision tasks.",
    "vendorReason": "The Mages' Guild is renowned for its precision and would naturally offer tools that enhance this quality.",
    "shippingDetail": "Ships via Arcane Relay, with expedited delivery to ensure your culinary magic arrives fresh and intact.",
    "usage": {
      "activation": "Instantaneous effect when using the cups for precise measurements.",
      "duration": "Active until the meal or potion is completed.",
      "endsWhen": "Effect ends when the preparation is complete.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The price reflects the item's rarity, craftsmanship, and utility in precise tasks.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T08:17:29.677966+00:00",
    "aiReviewedAt": "2026-07-22T08:17:29.677966+00:00",
    "aiReviewVersion": 1
  },
  "mega_mole_gloves": {
    "id": "mega_mole_gloves",
    "name": "Mega Mole Digging Gloves",
    "description": "The Mega Mole Digging Gloves are colossal, clawed gauntlets forged from ancient earth and enchanted by a long-forgotten shaman. These gloves allow their wielder to burrow through soil at an impressive speed of 20 feet per turn, leaving behind unmistakable trails that can be seen for miles around. The ground beneath your steps becomes friendlier; worms emerge from the dirt and seem to follow you, offering a strange but useful companionship.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥊",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Burrowing Expertise",
      "Friendly Worms"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Dirt Mound Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Burrowing Expertise",
        "rules": "When using your action to burrow through soil, you can move up to twice your speed. This movement does not provoke opportunity attacks and leaves a distinct trail visible for one hour."
      },
      {
        "title": "Friendly Worms",
        "rules": "While wearing these gloves, any worms within 30 feet of you that are not hostile become passive allies. They will assist you by carrying small objects or marking safe paths through dangerous ground. This effect lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "The gloves' magic is relatively straightforward, requiring only a first-level spellcaster to wield them effectively.",
    "vendorReason": "As the original creator of these gloves, the Shaman's Hut continues to stock and sell them as part of their legacy items.",
    "shippingDetail": "Special delivery via a Dirt Mound Express guarantees safe arrival within one week, though the trail left by the delivery may cause some inconvenience.",
    "usage": {
      "activation": "Action or bonus action to burrow or Friendly Worms",
      "duration": "Instantaneous for burrowing; until end of next long rest for worm companionship",
      "endsWhen": "The effect ends when you are no longer wearing the gloves, upon death, or at the start of your next short rest.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced for a rare item that offers both utility and thematic flavor without breaking game mechanics.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-22T08:17:58.600745+00:00",
    "aiReviewedAt": "2026-07-22T08:17:58.600745+00:00",
    "aiReviewVersion": 1
  },
  "mega_mushroom": {
    "id": "mega_mushroom",
    "name": "Mega Mushroom",
    "description": "The Mega Mushroom towers over you, its cap a shade of vibrant green that seems to pulse with raw energy. This colossal specimen is no ordinary mushroom—it's said to have been crafted in ancient forges by elemental alchemists. Consuming it transforms you into a kaiju, capable of walking through buildings and leaving nothing but rubble in your wake. Your strength skyrockets, becoming a force of nature immune to most physical harm, save for the mind itself.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍄",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Kaiju Transformation",
      "Elemental Destruction"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Hazardous Materials",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Kaiju Transformation",
        "rules": "When consumed, you transform into a kaiju. Your size becomes Gargantuan and your Strength score becomes 26. You gain the ability to walk through buildings (destroying them in the process) and are immune to all damage except psychic damage. This effect lasts for 1 minute or until you take any damage."
      },
      {
        "title": "Elemental Destruction",
        "rules": "While transformed, you can destroy structures within a 30-foot radius with your mere presence. This destruction is instantaneous and does not require an action. You regain 2d6 Strength points at the start of each of your turns while this effect lasts."
      }
    ],
    "levelRequirementReason": "The transformation's raw power demands a minimum level to prevent uncontrolled chaos.",
    "vendorReason": "Toad Town Market specializes in rare and exotic items, including the Mega Mushroom due to its unique crafting process and lore.",
    "shippingDetail": "Ships via Hazardous Materials, with strict handling protocols for both safety and magical stability.",
    "usage": {
      "activation": "Eating the mushroom",
      "duration": "1 minute or until you take damage",
      "endsWhen": "You take any damage or the effect ends after 1 minute",
      "charges": "Unlimited"
    },
    "priceReason": "The Mega Mushroom's price reflects its rarity, crafting complexity, and the risk involved in acquiring it.",
    "priceOriginal": 260000,
    "priceReviewedAt": "2026-07-22T08:18:09.083410+00:00",
    "aiReviewedAt": "2026-07-22T08:18:09.083410+00:00",
    "aiReviewVersion": 1
  },
  "megaman_buster": {
    "id": "megaman_buster",
    "name": "Mega Buster",
    "description": "The Mega Buster is a sleek arm blaster with a compact design that belies its formidable power. Crafted from high-alloy steel, it channels energy from the very core of Mega Man's reactor. Each charged shot releases an explosive burst of force that can level walls, while rapid fire allows for quick, continuous strikes. This weapon also has the unique ability to replicate any enemy weapon once per day, giving you a temporary arsenal change in combat.",
    "category": "equipment",
    "price": 1000,
    "icon": "🤖",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Charge Shot",
      "Rapid Fire"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Arm Case Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Charge Shot",
        "rules": "When you use an action to charge the Mega Buster, it releases a devastating force blast. This attack deals 4d6 force damage and requires you to wait one turn before using this ability again."
      },
      {
        "title": "Rapid Fire",
        "rules": "As a bonus action, you can unleash rapid fire from the Mega Buster which allows you to make three attacks with it against different targets. Each attack deals 1d6 force damage."
      }
    ],
    "levelRequirementReason": "This weapon requires significant skill and control to harness its power effectively.",
    "vendorReason": "Wario Direct specializes in high-demand, powerful weapons like the Mega Buster that require specialized handling and expertise.",
    "shippingDetail": "Ships via Arm Case Express with same-day delivery within the kingdom.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "Recharges after a short rest",
      "charges": "3 charges per day"
    },
    "priceReason": "Balanced at this price, the Mega Buster is an epic weapon that offers significant combat versatility without overshadowing other options.",
    "priceOriginal": 30000,
    "priceReviewedAt": "2026-07-22T08:18:00.136842+00:00",
    "aiReviewedAt": "2026-07-22T08:18:00.136842+00:00",
    "aiReviewVersion": 1
  },
  "memory_alteration": {
    "id": "memory_alteration",
    "name": "Memory Alteration (Professional)",
    "description": "Pauline's Microphone, a sleek and enigmatic device crafted from polished obsidian and etched with arcane runes, allows its wielder to manipulate memories with precision. It can erase, modify, or implant one memory at a time, seamlessly altering the target’s mind without leaving any detectable trace of alteration. However, the process is perilous; a failed attempt risks driving the target into madness. This item has made Pauline infamous among memory mages and their rivals alike.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🧠",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Memory Manipulation",
      "Risky Alteration"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Procedure Appointment",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Memory Manipulation",
        "rules": "The wielder targets a willing or incapacitated creature. By using an action, they can erase one memory, modify it to something else, or implant a new memory. The effect is seamless; the target has no way of detecting the change unless they possess a divination spell or item that reveals such alterations."
      },
      {
        "title": "Risky Alteration",
        "rules": "If the alteration fails (as determined by the DM), the target risks becoming permanently insane. The risk is higher if the memory being altered is crucial to the target’s identity or well-being. This effect has no save DC but requires a successful check against the wielder's proficiency bonus + 5."
      }
    ],
    "levelRequirementReason": "Requires at least first-level proficiency in Arcana to handle and use this delicate device without mishap.",
    "vendorReason": "Crypt Courier specializes in forbidden and controversial items, making Pauline's Microphone a natural addition to their inventory.",
    "shippingDetail": "The item is delivered by Procedure Appointment with strict secrecy protocols, ensuring the delivery remains confidential.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Targeted creature’s memory alteration",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP as it offers a potent and dangerous power that could drastically alter the course of an adventurer's life.",
    "priceOriginal": 95000,
    "priceReviewedAt": "2026-07-22T08:18:37.883478+00:00",
    "aiReviewedAt": "2026-07-22T08:18:37.883478+00:00",
    "aiReviewVersion": 1
  },
  "mercenary_band_hire": {
    "id": "mercenary_band_hire",
    "name": "Hire: 50-Unit Mercenary Band",
    "description": "The mercenary band Hire: 50-Unit Mercenary Band is a formidable Koopa Troopas, Hammer Bros, and Snifits contingent sworn to your service for one week. Their armor gleams under the moonlight, and their weapons are honed to perfection by the legendary blacksmiths of the Mushroom Kingdom. Deploy them in defense, escort missions, or assaults with precision; should they suffer more than 50% casualties, they demand double pay and disband, leaving you with only a tarnished memory of their valor.",
    "category": "services",
    "price": 1000,
    "icon": "🪖",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "50 elite troops (CR 1/2 to 2) under your command for one week",
      "Can be deployed in defense, escort missions, or assaults"
    ],
    "vendor": "iron_legion",
    "shippedBy": "Marching Orders",
    "levelRequirement": 1,
    "factionBonus": {
      "combatReadiness": 30,
      "economy": -10
    },
    "effectDetails": [
      {
        "title": "Deployment and Command",
        "rules": "Activate as an action. The mercenary band can be deployed for a mission within the next hour. They remain under your command for one week, during which they follow your orders with unwavering loyalty."
      },
      {
        "title": "Casualty Clause",
        "rules": "If the mercenary band suffers more than 50% casualties in combat, activate as an action to negotiate a new contract. Upon reaching agreement, they will continue their service for another week without further penalty; otherwise, they disband and demand double pay."
      }
    ],
    "levelRequirementReason": "The mercenary band requires basic coordination skills, thus level 1 is sufficient.",
    "vendorReason": "Iron Legion specializes in elite troops and offers the best mercenary bands available.",
    "shippingDetail": "Delivered by a trusted courier who ensures that the band arrives fully equipped and ready for action.",
    "usage": {
      "activation": "Action",
      "duration": "One week",
      "endsWhen": "Casualties exceed 50% or contract expires",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the training, equipment, and maintenance of a skilled mercenary band for one week.",
    "priceOriginal": 300000,
    "priceReviewedAt": "2026-07-22T08:18:42.351995+00:00",
    "aiReviewedAt": "2026-07-22T08:18:42.351995+00:00",
    "aiReviewVersion": 1
  },
  "merchant_guild_barter_charm_premium": {
    "id": "merchant_guild_barter_charm_premium",
    "name": "Merchant Guild Barter Charm (Premium)",
    "description": "The Merchant Guild Barter Charm (Premium) is a sleek, polished silver pendant adorned with guild insignia. It whispers subtle advice to aid your haggling, and its charm jingles softly as you speak. When activated, it grants advantage on Persuasion checks for the next two hours when buying or selling, and it ensures a 10% discount on your next purchase from any merchant in town. The charm's presence is so reassuring that even the most skeptical shopkeepers are inclined to give you a fair deal.",
    "price": 1000,
    "icon": "💰",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Persuasion Rolls",
      "10% Discount on Next Purchase"
    ],
    "vendor": "merchant_guild_hall",
    "shippedBy": "Guild Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Persuasive Advantage",
        "rules": "When activated, the charm grants advantage on all Persuasion checks for buying or selling until the end of your next long rest."
      },
      {
        "title": "Discounted Deals",
        "rules": "The charm ensures a 10% discount on your next purchase from any merchant in town. This effect is usable once per day, and it can't be used again for 24 hours after you use it."
      }
    ],
    "levelRequirementReason": "This charm is accessible to all adventurers who seek to improve their trading skills.",
    "vendorReason": "The Guild Hall sells this charm as part of its services to train and equip new merchants.",
    "shippingDetail": "Shipped via the Guild's trusted courier, ensuring safe delivery within a week.",
    "usage": {
      "activation": "Standard Action",
      "duration": "Until the end of your next long rest",
      "endsWhen": "The effect ends when you finish a long rest or if you activate it again on the same day.",
      "charges": "Unlimited"
    },
    "priceReason": "This balanced price reflects the charm's utility and limited daily use, making it accessible to most adventurers.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-22T08:18:22.607112+00:00",
    "aiReviewedAt": "2026-07-22T08:18:22.607112+00:00",
    "aiReviewVersion": 1
  },
  "merchant_guild_merchant_robe": {
    "id": "merchant_guild_merchant_robe",
    "name": "Merchant Guild Merchant Robe",
    "description": "The Merchant Guild Merchant Robe is a tailored ensemble of fine, burgundy silk adorned with subtle gold embroidery that whispers trade secrets to those who wear it. The robe's pouches are not merely decorative but are magically enchanted to hold up to 50gp without adding any weight—rumored to be the handiwork of the Guild Tailors themselves. Strangers find themselves compelled to haggle when you speak, gaining advantage on Persuasion checks for bartering and trade negotiations.",
    "category": "equipment",
    "price": 1000,
    "icon": "👘",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Persuasion Rolls",
      "Holds 50gp Without Weight"
    ],
    "vendor": "merchant_guild_bazaar",
    "shippedBy": "Coin Cloth",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Trade Charm",
        "rules": "When you use your Charisma (Persuasion) to influence a potential buyer or seller, you gain advantage on the roll. This effect lasts until the start of your next turn."
      },
      {
        "title": "Weightless Wealth",
        "rules": "The robe's pouches can hold up to 50gp in coins without increasing its weight. This benefit is permanent and does not require any action or expenditure."
      }
    ],
    "levelRequirementReason": "This simple yet effective robe requires no specific level, making it accessible to all traders and merchants.",
    "vendorReason": "The Merchant Guild regularly stocks this essential attire for its members and visitors.",
    "shippingDetail": "Delivered by the Guild's trusted courier, ensuring swift arrival to your doorstep.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous",
      "endsWhen": "Exhausts after one use per long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The robe's enchantments and quality materials make it a valuable yet balanced purchase for any aspiring merchant.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T08:18:38.070497+00:00",
    "aiReviewedAt": "2026-07-22T08:18:38.070497+00:00",
    "aiReviewVersion": 1
  },
  "merchant_guild_profit_pudding_recipe": {
    "id": "merchant_guild_profit_pudding_recipe",
    "name": "Recipe: Merchant Guild Profit Pudding",
    "description": "The Merchant Guild Profit Pudding Recipe, a parchment scented with golden syrup, promises prosperity through every trade. This sweetened treat is said to bring haggling luck and lucrative profits. Only those who have mastered basic cooking may attempt this recipe, as the art of persuasion and the craft of baking blend to create a dessert that not only tastes divine but also enhances one's abilities in negotiation and commerce.",
    "price": 1000,
    "icon": "🍮",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Persuasion Advantage",
      "Profit Boost"
    ],
    "vendor": "merchant_guild_hall",
    "shippedBy": "Golden Gel Guide",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Persuasion Advantage",
        "rules": "When you consume the pudding, you gain advantage on Persuasion checks for trades. This effect lasts until the start of your next turn after two hours."
      },
      {
        "title": "Profit Boost",
        "rules": "For one hour after eating the pudding, any trade or business transaction results in a +10% increase in profit margin. This effect is cumulative with other sources of increased profits but does not stack beyond a 30% bonus."
      }
    ],
    "levelRequirementReason": "Basic cooking skills are essential to attempt this recipe, making it accessible to all characters regardless of level.",
    "vendorReason": "As the creators and custodians of such culinary treasures, only guild members can offer this precious recipe.",
    "shippingDetail": "The Golden Gel Guide ensures swift delivery, but due to its high demand, it is often in limited supply. Orders may take up to a week for fulfillment.",
    "usage": {
      "activation": "Eating the pudding once per day",
      "duration": "2 hours and one hour respectively (stackable)",
      "endsWhen": "At the start of your next turn after two hours or when consumed, whichever comes first; daily use is limited to once per character.",
      "charges": "Unlimited"
    },
    "priceReason": "The recipe's rarity and the skill required to successfully produce it justify its moderate price.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T08:18:50.353170+00:00",
    "aiReviewedAt": "2026-07-22T08:18:50.353170+00:00",
    "aiReviewVersion": 1
  },
  "merchant_guild_profit_scale_mixer": {
    "id": "merchant_guild_profit_scale_mixer",
    "name": "Merchant Guild Profit Scale Mixer",
    "description": "The Merchant Guild Profit Scale Mixer is a precision-engineered device made from polished guild brass and inlaid with runes of prosperity. Crafted by the Guild Measurers, this mixer not only measures ingredients for perfect pudding portions but also subtly tips the scales to favor profits, ensuring every batch yields just that little bit extra. Its balance aligns with the greed of its users, rewarding those who seek wealth above all.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍮",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Precision Measurement",
      "Profits Favor"
    ],
    "vendor": "merchant_guild_hall",
    "shippedBy": "Scale Sweet Shipment",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Precision Measurement",
        "rules": "When mixing ingredients, you have advantage on checks to determine the perfect balance of flavors. This effect lasts until the end of your next turn."
      },
      {
        "title": "Profits Favor",
        "rules": "For 1 hour after use, any food or drink prepared with this mixer gains an additional +1d4 to its value when sold in a guild hall market. This effect ends if you rest for at least 8 hours."
      }
    ],
    "levelRequirementReason": "This device is accessible to novice merchants and bakers who wish to start their journey with an advantage.",
    "vendorReason": "The Merchant Guild Hall is known for its support of aspiring traders, providing them with tools that give a competitive edge from the outset.",
    "shippingDetail": "Delivered within three days by Scale Sweet Shipment, ensuring your ingredients are always fresh and measured to perfection.",
    "usage": {
      "activation": "As an action when mixing ingredients for a pudding.",
      "duration": "Until the end of your next turn or until you rest for at least 8 hours.",
      "endsWhen": "Either effect ends if you rest for at least 8 hours, or if you use it again before completing the duration.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The balanced price reflects its unique combination of utility and flavor-altering properties, offering a fair value to players seeking an edge in their trade.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T08:19:05.321379+00:00",
    "aiReviewedAt": "2026-07-22T08:19:05.321379+00:00",
    "aiReviewVersion": 1
  },
  "merlee_charm": {
    "id": "merlee_charm",
    "name": "Merlee's Charm Service",
    "description": "Merlee's Charm Service bestows a fleeting bond between you and the whimsical sea creatures of the Merlees' realm, enhancing your resilience in battle. For the next three combat encounters, you gain either +1 to AC or +1 to damage on melee attacks—whichever brings greater benefit at the moment. The charm is as unpredictable as it is powerful, with the service originating from Shamans Hut, a place where ancient magic and nature coexist.",
    "category": "services",
    "price": 1000,
    "icon": "✨",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "+1 AC or +1 Damage",
      "Limited Duration"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Sea Breeze Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Resilience",
        "rules": "At the start of each combat encounter for three encounters, you gain either a +1 bonus to your Armor Class (AC) or a +1 bonus to melee attack damage. You must choose which benefit applies at the beginning of each combat round and cannot change it mid-battle."
      },
      {
        "title": "Duration Limit",
        "rules": "The charm's effects last for three combat encounters, after which it ceases to function until recharged by a Shamans Hut cleric. The service can only be used once per day."
      }
    ],
    "levelRequirementReason": "This service requires at least first-level proficiency with basic spells or magical abilities.",
    "vendorReason": "Shamans Hut is renowned for its deep connection to the natural world, making them perfect custodians of this aquatic charm.",
    "shippingDetail": "The service is delivered by a fleet of enchanted sea creatures who ensure it reaches you swiftly and in pristine condition.",
    "usage": {
      "activation": "Passive effect at the start of each combat encounter for three encounters.",
      "duration": "3 combat encounters",
      "endsWhen": "After 3 combat encounters or if you leave a combat without using all effects.",
      "charges": "1 use per day"
    },
    "priceReason": "The charm's rarity and limited duration, combined with the unique magical service it provides, justify its fair value.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-22T08:19:06.622251+00:00",
    "aiReviewedAt": "2026-07-22T08:19:06.622251+00:00",
    "aiReviewVersion": 1
  },
  "metal_cap_permanent": {
    "id": "metal_cap_permanent",
    "name": "Liquid Metal Coating",
    "description": "Liquid Metal Coating is a vial containing living quicksilver, its surface gleaming with an almost metallic sheen. When applied to your skin, it melds into your flesh, granting you near-indestructibility and cold endurance while also making you heavy and cumbersome in the water. Your movements slow by ten feet per turn, yet you are resistant to non-magical bludgeoning, piercing, and slashing damage, and immune to poison and suffocation.",
    "category": "premium",
    "price": 1000,
    "icon": "🔩",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Indestructible Skin",
      "Waterbound"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Reinforced Container",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Indestructible Skin",
        "rules": "You have advantage on saving throws against being reduced to 0 hit points by non-magical bludgeoning, piercing or slashing damage. You also gain immunity to poison and suffocation."
      },
      {
        "title": "Waterbound",
        "rules": "While in water, you sink at a rate of 1 inch per second without the ability to swim. Your movement speed is reduced by 10 feet while in any environment with an ambient temperature below freezing."
      }
    ],
    "levelRequirementReason": "This item's permanent effects and high price make it suitable for characters of at least eighth level.",
    "vendorReason": "The Shamans' Hut specializes in crafting and selling items that enhance a character’s physical prowess, making Liquid Metal Coating an ideal product for them to offer.",
    "shippingDetail": "The container must be shipped via magical courier to ensure the quicksilver remains stable during transit.",
    "usage": {
      "activation": "Passive effect upon application and removal of the vial, once per day",
      "duration": "Permanent until removed by a Wish spell or similar effect",
      "endsWhen": "The coating is removed with a successful DC 20 Constitution saving throw; otherwise, it remains indefinitely",
      "charges": "1 use"
    },
    "priceReason": "The item's legendary rarity and permanent effects justify its moderate price of 1000 XP.",
    "priceOriginal": 350000,
    "priceReviewedAt": "2026-07-22T08:19:08.642997+00:00",
    "aiReviewedAt": "2026-07-22T08:19:08.642997+00:00",
    "aiReviewVersion": 1
  },
  "metal_cap_polish": {
    "id": "metal_cap_polish",
    "name": "Metal Cap Polish",
    "description": "Metal Cap Polish transforms your armor into a gleaming testament to craftsmanship, its surface catching every ray of light like the legendary Metal Cap itself. Crafted in the forgeheart of Toad Town, this polish not only shines but also tells the tale of its maker's dedication and skill. Apply once, and you'll dazzle onlookers with armor that sparkles as though it were forged by the very hands of a god.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧢",
    "stock": 100,
    "rarity": "common",
    "effects": [
      "Armor Sparkles",
      "Enhanced Appearance"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Bottle",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Armor Sparkles",
        "rules": "Apply once per day. The armor becomes exceptionally shiny, as if freshly polished, for the duration of your next long rest. This effect has no mechanical benefit."
      },
      {
        "title": "Enhanced Appearance",
        "rules": "Your appearance is significantly improved when wearing this armor. While under its effects, you are considered to have advantage on Persuasion checks and Charisma-based saving throws while in public or social settings."
      }
    ],
    "levelRequirementReason": "This polish requires no special level for application; it is suitable for beginners and seasoned adventurers alike.",
    "vendorReason": "Toad Town Market is known for its array of cosmetic items, and this polish is a beloved item among its patrons.",
    "shippingDetail": "Delivered by the trusted Bottles of Toad Town; arrives swiftly with no delays.",
    "usage": {
      "activation": "Apply once per day as an action.",
      "duration": "Until your next long rest.",
      "endsWhen": "At the end of a long rest or when removed.",
      "charges": "Unlimited, as it regenerates daily."
    },
    "priceReason": "The fair price reflects its rarity and the artisanal craftsmanship required for such an item.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T08:19:16.300891+00:00",
    "aiReviewedAt": "2026-07-22T08:19:16.300891+00:00",
    "aiReviewVersion": 1
  },
  "metaphysical_bank_account": {
    "id": "metaphysical_bank_account",
    "name": "Metaphysical Bank Account",
    "description": "The Metaphysical Bank Account is a whimsical yet powerful vessel, crafted from the very essence of abstract thought and bound by The Abstract Banker's will. It stores intangible concepts like 'love', 'time', or 'gravity', allowing you to withdraw them later for unforeseen needs. Withdrawals are made at a cost—once sold, these concepts vanish into the cosmic weave, leaving no trace in reality but granting an infinite amount of gold.",
    "category": "services",
    "price": 1000,
    "icon": "🏦",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Store and retrieve abstract concepts",
      "Sell concepts for infinite gold"
    ],
    "vendor": "conceptual_banking",
    "shippedBy": "Abstract Transfer",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Concept Withdrawal",
        "rules": "To withdraw a concept, the user must spend 1 minute concentrating on the desired concept. The DM decides if the withdrawal is successful based on the complexity and rarity of the concept."
      },
      {
        "title": "Infinite Gold for Concepts",
        "rules": "Selling a concept allows you to obtain an infinite amount of gold, but the concept ceases to exist in reality thereafter. This effect can only be used once per concept."
      }
    ],
    "levelRequirementReason": "The Metaphysical Bank Account is accessible to all adventurers due to its simplicity and utility.",
    "vendorReason": "Conceptual Banking specializes in abstract and intangible items, making the Metaphysical Bank Account a perfect fit for their inventory.",
    "shippingDetail": "The item is delivered through Abstract Transfer, ensuring it arrives directly to your doorstep without any delays or interruptions.",
    "usage": {
      "activation": "A standard action is required to withdraw a concept from the bank account.",
      "duration": "Instantaneous effect upon successful withdrawal.",
      "endsWhen": "Exhausted after one use per concept sold.",
      "charges": "Unlimited uses, but each concept can only be used once."
    },
    "priceReason": "The Metaphysical Bank Account is reasonably priced considering its utility and the infinite gold it provides in exchange for concepts that vanish from reality.",
    "priceOriginal": 55000000,
    "priceReviewedAt": "2026-07-22T21:59:41.718625+00:00",
    "aiReviewedAt": "2026-07-22T21:59:41.718625+00:00",
    "aiReviewVersion": 1
  },
  "metaphysical_lawyer_retainer": {
    "id": "metaphysical_lawyer_retainer",
    "name": "Metaphysical Lawyer Retainer",
    "description": "The Metaphysical Lawyer Retainer is a sentient scroll case that contains an argumentative entity. It can be activated to argue any rule, effect, or outcome in your favor, compelling the DM to listen and consider its points. Its other power allows you to sue gods for damages, with them usually settling due to the Retainer's formidable reputation. Crafted by The Cosmic Bar Association from arcane materials, this powerful retainer can shift outcomes at critical moments.",
    "category": "services",
    "price": 1000,
    "icon": "⚖️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Argue Any Rule",
      "Sue Gods"
    ],
    "vendor": "legal_services",
    "shippedBy": "Courier of the Cosmic Bar Association",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Argue Any Rule",
        "rules": "Activates as a bonus action. The DM must listen and consider the Retainer's arguments for up to one minute, after which they are required to rule in your favor if reasonable. This effect has no save DC or charges."
      },
      {
        "title": "Sue Gods",
        "rules": "Requires a reaction when you take damage from a god. The Retainer will argue on your behalf for compensation. The DM must roll a 15+ to ignore the Retainer's arguments, and gods usually settle out of court."
      }
    ],
    "levelRequirementReason": "This retainer is accessible early in play to help players navigate complex situations.",
    "vendorReason": "Legal Services specializes in powerful magical artifacts that assist with game mechanics, and this retainer fits their offerings perfectly.",
    "shippingDetail": "Delivered by trusted courier within one week, ensuring timely arrival for critical moments during play.",
    "usage": {
      "activation": "Bonus action to argue any rule or effect in your favor; reaction when taking damage from a god to sue them.",
      "duration": "Until the DM rules on the argument or until you take another action, whichever comes first.",
      "endsWhen": "The retainer's arguments are considered by the DM and ruled upon.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects its utility in both minor rule disputes and major confrontations with divine entities.",
    "priceOriginal": 65000000,
    "priceReviewedAt": "2026-07-22T08:19:21.409146+00:00",
    "aiReviewedAt": "2026-07-22T08:19:21.409146+00:00",
    "aiReviewVersion": 1
  },
  "metaphysical_upgrade_token": {
    "id": "metaphysical_upgrade_token",
    "name": "Metaphysical Upgrade Token",
    "description": "The Metaphysical Upgrade Token is a shimmering, glowing disc etched with arcane sigils that seem to pulse with the very essence of reality itself. Crafted by The Meta-Game from the very fabric of existence, this token grants its bearer the ability to transcend the mundane and make meta-decisions during gameplay. When activated, it allows you to see your character sheet in-game, making OOC decisions IC without penalty. This is a once-in-a-lifetime opportunity, as only one exists per campaign.",
    "category": "consumables",
    "price": 1000,
    "icon": "🪙",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Meta-Decision Making",
      "Character Sheet Transparency"
    ],
    "vendor": "existence_upgrades",
    "shippedBy": "Reality Upgrade Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Meta-Deccision Making",
        "rules": "Activating the token allows you to make meta-decisions during gameplay. This includes strategizing with your party, discussing upcoming challenges, or even altering the course of a battle before it begins. The DM retains final authority over all decisions and outcomes."
      },
      {
        "title": "Character Sheet Transparency",
        "rules": "For one minute after activation, you can view your character sheet in-game, making OOC decisions IC without penalty. This includes adjusting your tactics or discussing strategies with the party. The token's effect is instantaneous but ends when the minute expires."
      }
    ],
    "levelRequirementReason": "This item is accessible to all players, as it represents a fundamental shift in gameplay that should be available early.",
    "vendorReason": "Only Existence Upgrades possesses the means and knowledge to create such an item, ensuring its authenticity.",
    "shippingDetail": "The token is couriered via Reality Upgrade Express, a service known for its flawless delivery of metaphysical items.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect lasting one minute per activation",
      "endsWhen": "At the end of your next turn after activation or when used again",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item's price is balanced at 1000 XP, reflecting its rarity and unique utility in gameplay without skewing the balance of power.",
    "priceOriginal": 75000000,
    "priceReviewedAt": "2026-07-22T08:19:50.683423+00:00",
    "aiReviewedAt": "2026-07-22T08:19:50.683423+00:00",
    "aiReviewVersion": 1
  },
  "meteor_swarm_in_a_bottle": {
    "id": "meteor_swarm_in_a_bottle",
    "name": "Meteor Swarm in a Bottle",
    "description": "The Meteor Swarm in a Bottle is a vial of shimmering, crystalline essence that condenses the raw power of a celestial bombardment into a convenient form. Crafted by The Bottler using ancient alchemical techniques, this bottle can either be thrown to unleash a concentrated burst of fire and acid or consumed, turning the imbiber into a living meteor that explodes upon impact. A true relic of legend, it is both potent and perilous, a symbol of the universe's most devastating fury now tamed in a glass vial.",
    "category": "consumables",
    "price": 2500,
    "icon": "🍾",
    "stock": 5,
    "rarity": "legendary",
    "effects": [
      "Throw Bottle",
      "Drink It"
    ],
    "vendor": "spell_bottling",
    "shippedBy": "Explosive Delivery",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Throw Bottle",
        "rules": "You throw the bottle as an action. On a hit with a DC 24 Strength (Athletics) check, it shatters and releases a concentrated burst of fire and acid centered on you in a 30-foot cone. The explosion deals 15d6 fire damage to all creatures in the area and 10d6 fire and acid damage to objects. This effect ends if the bottle misses or is destroyed."
      },
      {
        "title": "Drink It",
        "rules": "You drink the contents of the bottle as a bonus action, transforming into a living meteor swarm for 1 minute. While in this form, you gain the ability to fly at your movement speed and can make a single attack roll with advantage against any creature within reach. You explode on your turn on your next initiative, dealing 5d6 fire damage to all creatures within 10 feet of you (DC 13 Dexterity saving throw for half). This effect ends if you are incapacitated."
      }
    ],
    "levelRequirementReason": "This item requires a high level to handle its potent alchemical power and the risks involved in using it.",
    "vendorReason": "The Bottler is renowned for their expertise in capturing and bottling spells, making them the most trusted source for such rare artifacts.",
    "shippingDetail": "Special handling required. Shipment can only be made during daylight hours due to the volatile nature of the contents.",
    "usage": {
      "activation": "Throw Bottle: action, Drink It: bonus action",
      "duration": "Instantaneous for throw; 1 minute for drink",
      "endsWhen": "Destroyed on miss or explosion effect",
      "charges": "Unlimited"
    },
    "priceReason": "This item is priced at a fraction of its potential damage output, reflecting its rarity and the expertise required to craft it.",
    "priceOriginal": 25000000,
    "priceReviewedAt": "2026-07-22T08:19:45.559086+00:00",
    "aiReviewedAt": "2026-07-22T08:19:45.559086+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_connectopia_item_name_here": {
    "id": "middle_earth_connectopia_item_name_here",
    "name": "Coral Lure Net",
    "description": "The Coral Lure Net is a delicate silk creation spun by Noki Elders from the ocean's depths. Crafted to ensnare only what the sea yields, this net can capture three random marine artifacts or creatures within its range. When used correctly, it grants the wielder +5% crafting efficiency for 20 seconds, enhancing their skill with materials derived from the ocean. However, improper use risks triggering a trap that causes 1d4 temporary hit points of damage to the user as the net snares something unexpected.",
    "price": 1000,
    "icon": "🎣",
    "stock": 15,
    "rarity": "uncommon",
    "effects": [
      "Captures 3 marine items",
      "+5% crafting efficiency"
    ],
    "vendor": "middle_earth",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Capture Marine Items",
        "rules": "Activate on a bonus action within 30 feet of water. Targets must be small or medium creatures/objects. The net captures three random marine items or creatures, which are temporarily held and may be retrieved at the user's discretion."
      },
      {
        "title": "Crafting Efficiency",
        "rules": "Passive effect that grants +5% crafting efficiency for 20 seconds upon activation. This bonus does not stack with other similar effects."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners, as it aids in gathering marine resources and enhancing crafting skills.",
    "vendorReason": "Middle Earth vendors sell a variety of Noki-made goods, including this net which helps travelers gather oceanic treasures.",
    "shippingDetail": "Ships via the Noki Coral Fleet, ensuring swift delivery across Middle Earth's waters.",
    "usage": {
      "activation": "Bonus action within range of water.",
      "duration": "20 seconds or until used in crafting.",
      "endsWhen": "Expired after duration or when captured items are retrieved.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the rarity and craftsmanship required to create such a net, as well as its utility in both gathering and crafting.",
    "priceOriginal": 500,
    "priceReviewedAt": "2026-07-22T08:19:34.153380+00:00",
    "aiReviewedAt": "2026-07-22T08:19:34.153380+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_elven_cloak_of_shadows": {
    "id": "middle_earth_elven_cloak_of_shadows",
    "name": "Cloak of Whispered Secrets",
    "description": "The Cloak of Whispered Secrets is a shimmering, moonlit cloak spun from the threads of ancient elven whispers. Its fabric seems to blend seamlessly with the night, granting its wearer both stealth and agility. In dim light, it evades attacks with uncanny precision, and when worn in darkness, it reveals hidden foes with a flicker of shadow. The cloak is said to have been crafted by the elves of Lothlórien, whose mastery of the eldritch has imbued it with secrets known only to the stars themselves.",
    "category": "equipment",
    "price": 1000,
    "icon": "👻",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Moonlit Agility",
      "Shadow Revelation"
    ],
    "vendor": "middle_earth",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Moonlit Agility",
        "rules": "While in dim light, the wearer gains a +15% chance to evade attacks. This effect lasts for 1 minute when used as an action or on a failed Stealth check."
      },
      {
        "title": "Shadow Revelation",
        "rules": "When attacked while wearing this cloak in darkness, the wearer can reveal nearby hidden enemies within 30 feet by spending a reaction. The effect ends if the wearer takes any other action or is hit by an attack."
      }
    ],
    "levelRequirementReason": "This cloak requires a character of at least level 8 to wield it effectively, as its magic aligns with more seasoned adventurers.",
    "vendorReason": "The elves of Lothlórien are renowned for their craftsmanship and the Cloak's origin ensures its authenticity.",
    "shippingDetail": "Ships via Warp Whistle Transit, known for its swift delivery across Middle-earth.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "1 minute or until the wearer takes another action or is hit by an attack",
      "endsWhen": "The duration ends when the wearer takes another action or is attacked.",
      "charges": "Unlimited, but only one use per long rest"
    },
    "priceReason": "The Cloak's rarity and magical properties, combined with its alignment to more experienced adventurers, justify this price.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T08:19:49.389577+00:00",
    "aiReviewedAt": "2026-07-22T08:19:49.389577+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_inkopolis_ink_sting": {
    "id": "middle_earth_inkopolis_ink_sting",
    "name": "Inkopolis Ink Sting",
    "description": "The Inkopolis Ink Sting is a quill weapon that exudes ink upon strike, leaving behind a shimmering trail of black fluid. Crafted by The Quill Syndicate of Inkopolis, this weapon not only strikes with deadly precision but also leaves its mark in the form of ink on both gear and skin. A single hit can sully your armor, reducing your AC by 1d4 for one round, while the ink's persistence allows you to activate the powerful Inkopolis Ink Blight upon entry into an ink-marked area, dealing 2d4 damage to any foe caught within.",
    "category": "equipment",
    "price": 1000,
    "icon": "🖋",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Ink Slick",
      "Mark of Ink"
    ],
    "vendor": "middle_earth",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Ink Slick",
        "rules": "When you hit with the Inkopolis Ink Sting, the target is marked with ink and loses 1d4 to their AC for one round. This effect does not stack."
      },
      {
        "title": "Mark of Ink",
        "rules": "Each hit applies a mark to the target's gear or body. If three marks are accumulated within an area, you can activate the Ink Blight: deal 2d4 damage to all enemies in that area on your next successful attack."
      }
    ],
    "levelRequirementReason": "The advanced crafting and specialized ink used make this weapon suitable for players at least 3rd level.",
    "vendorReason": "Middle Earth is known for its diverse trade routes, and The Quill Syndicate has established a reputation for delivering high-quality quill weapons like the Inkopolis Ink Sting.",
    "shippingDetail": "Due to the delicate nature of the ink, this weapon requires careful handling during transport. Expect a two-day delivery time.",
    "usage": {
      "activation": "On hit with the weapon",
      "duration": "One round for Ink Slick, until all marks are removed by the target's next action or when the target is no longer in an ink-marked area for Ink Blight",
      "endsWhen": "The effects end if the target takes an action to clean off the ink or leaves the ink-marked area.",
      "charges": "Unlimited, with a 1-hour reapplication time for the ink marks"
    },
    "priceReason": "This weapon's rarity and the specialized ink make it worth 1000 XP; the unique debuff effects justify its higher price.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-22T08:20:17.872596+00:00",
    "aiReviewedAt": "2026-07-22T08:20:17.872596+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_inkopolis_squid_ink_bombs": {
    "id": "middle_earth_inkopolis_squid_ink_bombs",
    "name": "Splat Bombs",
    "description": "Splat Bombs are explosive ink concoctions designed by Inkopolis. These volatile bombs unleash a cloud of squid ink and potent stimulants upon impact, creating a chaotic scene. When thrown, they explode in a small radius, dealing moderate damage to enemies and temporarily blinding those struck. The resulting ink stain not only slows movement for one turn but also leaves a telltale mark that can be used by allies to track the area of effect.",
    "price": 1000,
    "icon": "💥",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Explosive Ink",
      "Blindness"
    ],
    "vendor": "middle_earth",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Explosive Ink",
        "rules": "When thrown, Splat Bombs explode in a 5-foot radius. Enemies within the area take 1d6 + level damage (fire and ink) on hit. The explosion also leaves behind an ink stain that imposes a -2 penalty to Dexterity saving throws for one minute."
      },
      {
        "title": "Blindness",
        "rules": "Enemies struck by Splat Bombs must make a DC 13 Constitution saving throw or be blinded for 1d4 turns. On a successful save, the blindness effect is reduced to 1 turn."
      }
    ],
    "levelRequirementReason": "Sufficient skill in handling volatile materials and basic combat training.",
    "vendorReason": "Middle Earth's vendors stock a variety of Inkopolis products, including these explosive ink bombs for adventurers who need to cause chaos on the battlefield.",
    "shippingDetail": "Ships via Warp Whistle Transit with a handling time of one week.",
    "usage": {
      "activation": "Thrown as an action",
      "duration": "Instantaneous explosion upon contact",
      "endsWhen": "Explosion occurs or bomb is used up",
      "charges": "Unlimited, as long as the user has throwing proficiency"
    },
    "priceReason": "Balanced to reflect the explosive damage, duration effects, and the unique ink-based property of the bombs.",
    "priceOriginal": 200,
    "priceReviewedAt": "2026-07-22T08:20:04.263470+00:00",
    "aiReviewedAt": "2026-07-22T08:20:04.263470+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_inkwell_of_ancient_wisdom": {
    "id": "middle_earth_inkwell_of_ancient_wisdom",
    "name": "Inkwell of Ancient Lore",
    "description": "The Inkwell of Ancient Lore is a simple yet enchanting artifact, crafted from ancient Elven wood and inlaid with runes. The ink within, a legacy of forgotten lore, whispers secrets only to those who write in it. Each drop captures the essence of long-lost knowledge, ready to be unleashed upon the page. When used by scholars or scribes, there is a 20% chance that a single sentence written in this ink will yield profound insight into an arcane topic, while scrolls penned with its ink translate seamlessly between any two languages understood by the reader.",
    "price": 1000,
    "icon": "📖",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Insightful Writing",
      "Universal Translation"
    ],
    "vendor": "middle_earth",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Insightful Writing",
        "rules": "When a user writes in this inkwell, there is a 20% chance that a single sentence will grant temporary knowledge of an arcane topic. This effect requires the writer to focus for one minute and has no save DC or duration; it ends when the sentence is written."
      },
      {
        "title": "Universal Translation",
        "rules": "Any scroll written with ink from this inkwell automatically translates between any two languages understood by the reader, without requiring any action. This effect is instantaneous and unlimited in use per day."
      }
    ],
    "levelRequirementReason": "The Inkwell's arcane nature requires a user to be at least of first level to properly channel its magic.",
    "vendorReason": "Middle-earth vendors, especially those in Rivendell, are well-versed in ancient lore and relics, making the Inkwell of Ancient Lore an appropriate item for their inventory.",
    "shippingDetail": "Ships via Warp Whistle Transit; delivery takes two weeks from the nearest port to Rivendell.",
    "usage": {
      "activation": "Passive upon writing with the inkwell's ink.",
      "duration": "Instantaneous for Insightful Writing, unlimited use per day for Universal Translation.",
      "endsWhen": "Insightful Writing ends when a sentence is written; Universal Translation never expires unless the scroll is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "The Inkwell's unique properties and rarity justify its price of 1000 XP.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T08:20:06.761874+00:00",
    "aiReviewedAt": "2026-07-22T08:20:06.761874+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_elven_eyeball_sorcerer": {
    "id": "middle_earth_item_elven_eyeball_sorcerer",
    "name": "Elven Eyeball Sorcerer",
    "description": "The Elven Eyeball Sorcerer is a curious artifact, a hollowed elf eye encased in glass, imbued with ancient magic from the elves of Lothlórien. When used, it grants you the ability to see through the eyes of any elf within sight for three turns, allowing you to spy on their every move without them knowing. However, if an elf attempts to look away, they are momentarily confused, causing them to lose concentration and potentially reveal their secrets.",
    "category": "consumables",
    "price": 1000,
    "icon": "👁️",
    "stock": 7,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "See Through Target's Eyes",
      "Confuse Targets Attempting to Look Away"
    ],
    "vendor": "elven_market",
    "shippedBy": "Elven Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "See Through Target's Eyes",
        "rules": "You can use an action to activate the Elven Eyeball Sorcerer. For three turns, you gain the ability to see through the eyes of any elf within 30 feet who is not actively trying to prevent it. If a target looks away or closes their eyes, they must succeed on a DC 15 Wisdom saving throw or become confused for 1 minute."
      },
      {
        "title": "Confuse Targets Attempting to Look Away",
        "rules": "If an elf you are seeing through attempts to look away by closing their eyes or turning away, they must make a DC 15 Wisdom saving throw. On a failed save, the target becomes confused for 1 minute."
      }
    ],
    "levelRequirementReason": "The Elven Eyeball Sorcerer requires at least third-level spellcasting to effectively use its spying and confusion effects without drawing unwanted attention.",
    "vendorReason": "Elven artisans are known for creating such unique and magical items, especially those that cater to the espionage needs of their own kind.",
    "shippingDetail": "The Elven Express ensures swift delivery through its network of enchanted pathways, guaranteeing your artifact arrives in perfect condition.",
    "usage": {
      "activation": "Action",
      "duration": "3 turns",
      "endsWhen": "The target looks away or the three turns expire",
      "charges": "Unlimited"
    },
    "priceReason": "The Elven Eyeball Sorcerer's fair value is set at 1000 XP, reflecting its unique combination of espionage and confusion effects, as well as the rarity and craftsmanship involved in its creation.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T19:53:37.694300+00:00",
    "aiReviewedAt": "2026-07-22T19:53:37.694300+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_faction_goblin_guild": {
    "id": "middle_earth_item_faction_goblin_guild",
    "name": "Goblin Guild Alliance",
    "description": "The Goblin Guild Alliance is a unique faction token, forged in the chaotic heart of Middle-earth by the mischievous Goblins. It grants you an unbreakable bond to the Goblin Guild, ensuring you never lack for quests or treasure drops. With this token, you can summon goblin minions at will to assist in your endeavors—just beware, as these loyal allies may turn on you if provoked! Wario's words hold true: ‘Better a chaotic faction than none at all.’",
    "category": "faction",
    "price": 1000,
    "icon": "🤝",
    "stock": 3,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Faction Quest Bonus",
      "Goblin Minion Summoning"
    ],
    "vendor": "shire_shop",
    "shippedBy": "The Shire Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Faction Quest Bonus",
        "rules": "Gain a +10% bonus to XP earned from completing faction quests. This effect is passive and applies continuously."
      },
      {
        "title": "Goblin Minion Summoning",
        "rules": "You can summon 1-3 goblin minions as an action, which last until the end of your next turn. These minions follow your commands but have a 50% chance to attack any creature that provokes their anger."
      }
    ],
    "levelRequirementReason": "Suitable for players who are just beginning their journey in Middle-earth and could benefit from the chaos and treasure of the Goblin Guild.",
    "vendorReason": "The Shire Shop, known for its unique and useful items, offers this token to adventurers seeking an edge over their rivals.",
    "shippingDetail": "Delivered promptly via The Shire Express's reliable service.",
    "usage": {
      "activation": "Summoning goblin minions is a standard action.",
      "duration": "Instantaneous summon, lasts until the end of your next turn.",
      "endsWhen": "The summoned goblins return to their realm or are destroyed by attack.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This price reflects the unique and chaotic nature of the Goblin Guild Alliance, providing both benefits and challenges that adventurers must navigate.",
    "priceOriginal": 500,
    "priceReviewedAt": "2026-07-22T08:20:33.334993+00:00",
    "aiReviewedAt": "2026-07-22T08:20:33.334993+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_name_here": {
    "id": "middle_earth_item_name_here",
    "name": "Gondorian Shield of the Last King",
    "description": "The Gondorian Shield of the Last King is a gleaming bronze shield, its surface polished to a mirror finish that reflects the light like a starlit sky. Etched upon it are ancient sigils that whisper tales of valor and sacrifice from ages long past. This shield not only reduces incoming damage by 25% but also grants its bearer an additional +10% defense bonus when engaged in combat, making every strike feel less forceful as if the shield absorbs the blows itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Reduced Damage",
      "Enhanced Defense"
    ],
    "vendor": "middle_earth",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Damage Reduction",
        "rules": "The wielder is granted a +25% reduction in damage taken from physical attacks. This effect is passive and applies to all creatures that deal physical damage."
      },
      {
        "title": "Defense Bonus",
        "rules": "When the shield is used, it grants its bearer a bonus to their Defense equal to 10%. This effect lasts until the end of the wielder's next turn. The shield can only be activated once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Gondorian Shield requires a minimum level of 8 due to its complex enchantments and the strength needed to wield it effectively.",
    "vendorReason": "Middle Earth's expert forges have long been known for crafting items that blend historical lore with magical power, making the Gondorian Shield a natural addition to their offerings.",
    "shippingDetail": "The shield is shipped via Noki Coral Fleet, ensuring safe and swift delivery through enchanted sea routes.",
    "usage": {
      "activation": "Activates on reaction or as bonus action when attacked by a physical attack.",
      "duration": "Instantaneous; effect lasts until the end of the wielder's next turn.",
      "endsWhen": "The shield can only be used once per short or long rest, and it recharges after 8 hours of non-combat rest.",
      "charges": "Unlimited charges"
    },
    "priceReason": "The Gondorian Shield's price reflects its epic rarity and the cost of materials and craftsmanship required to create such a historically significant item.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T08:20:47.828008+00:00",
    "aiReviewedAt": "2026-07-22T08:20:47.828008+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_ring_of_wario_the_great": {
    "id": "middle_earth_item_ring_of_wario_the_great",
    "name": "Ring of Wario the Great",
    "description": "The Ring of Wario the Great, forged from ancient metals and imbued with a dark enchantment, grants its wearer an aura of invincibility that echoes through the land. Its laugh can deafen foes for an instant, leaving them disoriented and confused. The ring also subtly amplifies your size, making you harder to miss in combat. Legends say it was stolen from a wizard’s tower long ago, though no one knows why it finds itself in the heart of Middle-earth.",
    "category": "equipment",
    "price": 1000,
    "icon": "👑",
    "stock": 1,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Invincibility Aura",
      "Disorienting Laughter"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "Dwarven Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invincibility Aura",
        "rules": "Activates as a bonus action. Grants temporary invulnerability for one round, rendering you immune to all damage from attacks and effects. Ends when the wearer takes any action other than moving or interacting with objects."
      },
      {
        "title": "Disorienting Laughter",
        "rules": "Once per short rest, the wearer can unleash a laugh that deafens all creatures within 30 feet for 1 round (DC 15 Wisdom saving throw; on failure, they are stunned until the end of their next turn). The effect ends if you take an action other than moving."
      }
    ],
    "levelRequirementReason": "The ring's dark magic requires a relatively high level to wield without adverse effects.",
    "vendorReason": "Dwarves appreciate the craftsmanship and powerful relics that can be found in Middle-earth, including stolen treasures like this ring.",
    "shippingDetail": "Ships with Dwarven Express, known for its reliability but often delayed by treacherous terrain.",
    "usage": {
      "activation": "Bonus action to activate invincibility aura. Once per short rest to unleash disorienting laughter.",
      "duration": "Invincibility lasts one round; Disorienting Laughter has a 1-round duration and ends if the wearer takes an action other than moving.",
      "endsWhen": "The effect ends when you take any action other than moving or interacting with objects, or at the end of your turn.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced to ensure it remains a powerful but not game-breaking item, priced accordingly.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-22T19:53:07.697630+00:00",
    "aiReviewedAt": "2026-07-22T19:53:07.697630+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_rakasha_spirit_walk": {
    "id": "middle_earth_rakasha_spirit_walk",
    "name": "Rakasha Spirit Walk",
    "description": "The Rakasha Spirit Walk is a gnarled walking stick hewn from ancient willowwood. It crackles with faint, ethereal light and bears marks of battles fought in realms beyond. This spirit-infused tool grants +2 to all perception checks against spirit or shadow entities and allows for an additional 1d4 feet of movement when within the Shadowfell or Feywild. Activating it near a portal may trigger 'Spirit Echo'—a spectral discharge that deals 1d6 necrotic damage to nearby enemies, requiring a DC 15 Dexterity saving throw.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Shadowstep",
      "Spirit Echo"
    ],
    "vendor": "middle_earth",
    "shippedBy": "Shadowfell Couriers",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Shadowstep",
        "rules": "When activated as an action within the Shadowfell or Feywild, allows for 1d4 additional feet of movement. This effect lasts until the end of your next turn and is exhausted after use."
      },
      {
        "title": "Spirit Echo",
        "rules": "Activating near a portal triggers this spectral attack, dealing 1d6 necrotic damage to all creatures within 5 feet with a successful DC 15 Dexterity saving throw. The effect ends if the user moves away from the portal or after a short rest."
      }
    ],
    "levelRequirementReason": "Requires at least second-level proficiency in Arcana or Nature to properly channel the spirit energy.",
    "vendorReason": "Middle-earth's trade with Rakasha ensures these wondrous tools are available for those who seek them.",
    "shippingDetail": "Delivered through the treacherous Shadowfell, usually within three days of initial order placement.",
    "usage": {
      "activation": "Action or bonus action to activate and use Shadowstep; requires a reaction to trigger Spirit Echo near a portal.",
      "duration": "Instantaneous for Shadowstep; until end of next turn for Spirit Echo.",
      "endsWhen": "Exhausted after one use, or if the user moves away from a triggering portal.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced price considers its rarity and unique abilities, granting significant utility to those who can afford it.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-22T19:53:19.088735+00:00",
    "aiReviewedAt": "2026-07-22T19:53:19.088735+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_ring_of_the_deep_woods": {
    "id": "middle_earth_ring_of_the_deep_woods",
    "name": "Ring of Whispering Vines",
    "description": "The Ring of Whispering Vines is a simple silver circlet adorned with an intricate carving of intertwined vines. It whispers secrets of the ancient forest to its wearer, granting them a bond with the flora and fauna that can be both boon and bane in times of need. When worn within a forested area, the ring enhances one's movement speed by +10 feet but also emits a subtle hum that attracts nearby predators, doubling their natural initiative for 1 minute.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌿",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Enhanced Forest Movement",
      "Attractive Hum"
    ],
    "vendor": "middle_earth",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Enhanced Forest Movement",
        "rules": "While in forested areas, the wearer's movement speed increases by +10 feet. This effect lasts until the end of your next turn after leaving a forested area."
      },
      {
        "title": "Attractive Hum",
        "rules": "The ring emits an audible hum that attracts dangerous predators within 30 feet. These creatures have initiative doubled for 1 minute upon entering this range, but the effect ends if they move out of the range or if a creature uses an action to dispel it."
      }
    ],
    "levelRequirementReason": "The ring's abilities require a degree of focus and connection with nature that is only possible for characters of at least 8th level.",
    "vendorReason": "Middle-earth's diverse ecosystems and its deep-rooted history make it the perfect place to source such an enchanted item from the Dwarves of Erebor, known for their craftsmanship in nature-themed artifacts.",
    "shippingDetail": "The ring is shipped via Warp Whistle Transit, which ensures safe and quick delivery through the treacherous lands surrounding the ancient forests.",
    "usage": {
      "activation": "Passive effect while in a forested area; no activation required.",
      "duration": "Instantaneous for movement speed increase; 1 minute for predator attraction.",
      "endsWhen": "Leaving the forested area or when a creature uses an action to dispel the attractive hum, respectively.",
      "charges": "Unlimited"
    },
    "priceReason": "The ring's unique abilities and its rarity justify this price point, ensuring it remains balanced within the game economy.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T19:53:23.155257+00:00",
    "aiReviewedAt": "2026-07-22T19:53:23.155257+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_rings_of_power_tether": {
    "id": "middle_earth_rings_of_power_tether",
    "name": "Rings of Power Tether",
    "description": "The Rings of Power Tether are ancient artifacts, once bound to Sauron’s Nine Rings, now repurposed into a magical tether that controls arcane energy flow. Crafted by Remi Coil and discovered in Lothlórien's vaults, these rings grant immunity to sonic shockwaves and allow their wielder to redirect arcane energy to allies or bind an enemy to a fixed position for three rounds. They are a key tool in stabilizing the Dragon Conspiracy’s sonic traps and securing dragon lairs.",
    "price": 10000,
    "icon": "⚔",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Immunity to Sonic Shockwaves",
      "Redirect Arcane Energy"
    ],
    "vendor": "middle_earth",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Sonic Immunity",
        "rules": "The wielder gains immunity to all sonic damage. This effect is active as long as the rings are worn and not expended."
      },
      {
        "title": "Arcane Redirect",
        "rules": "As an action, the wielder can redirect a spell of 1st level or higher targeting them to an ally within 30 feet, provided they have an unobstructed line of sight. The redirected spell has no effect on its original target."
      }
    ],
    "levelRequirementReason": "Requires a character with significant magical prowess and understanding of arcane energies.",
    "vendorReason": "Middle Earth vendors specialize in rare artifacts and magical relics, making the Rings of Power Tether available to adventurers.",
    "shippingDetail": "Ships via Void Drifter Relay, a highly secure courier known for delivering sensitive items.",
    "usage": {
      "activation": "Action or Reaction (at the wielder's discretion)",
      "duration": "Instantaneous (Sonic Immunity is active while worn); Arcane Redirect lasts until the end of the next turn",
      "endsWhen": "Arcane Redirect ends when the spell target is no longer within line of sight, or if the wielder uses an action to dismiss it.",
      "charges": "5 charges"
    },
    "priceReason": "The Rings are a valuable relic with limited availability and complex crafting requirements.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-22T19:53:43.952062+00:00",
    "aiReviewedAt": "2026-07-22T19:53:43.952062+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_sonic_scythe": {
    "id": "middle_earth_sonic_scythe",
    "name": "Sonic Scythe",
    "description": "The Sonic Scythe, a cursed blade forged from volcanic obsidian and etched with ancient dragon song harmonics, hums with raw sonic energy. Designed by the Regal Empire’s sonic division, it disrupts dragon echolocation, shattering scales and silencing roars in a deafening pulse of sound. Crafted through smuggled Void Drifter Relay tunnels into the Valley of Bowser, this weapon is an attunement challenge for only the most skilled sonic masters.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎵",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Dragon Disruption",
      "Sonic Pulse"
    ],
    "vendor": "middle_earth",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Dragon Disruption",
        "rules": "When activated as a bonus action, the Sonic Scythe emits resonant frequencies that shatter dragon scales and disrupt their echolocation for one round. Targets must succeed on a DC 15 Dexterity saving throw or be rendered deafened (no sound) for the duration."
      },
      {
        "title": "Sonic Pulse",
        "rules": "Activating the Sonic Scythe as an action summons a dragon fear aura in a 30-foot radius around you. All creatures within this area must succeed on a DC 15 Wisdom saving throw or be frightened for one minute, reducing their speed to half and disallowing movement actions."
      }
    ],
    "levelRequirementReason": "Requires attunement by a sonic master capable of harnessing the weapon’s raw energy.",
    "vendorReason": "The regal Empire Sonic Division has established trade routes with Middle Earth, and middle_earth is a trusted supplier of exotic and rare equipment from across the realms.",
    "shippingDetail": "Ships via the secretive Void Drifter Relay tunnels, ensuring swift delivery but with a 1-week transit time.",
    "usage": {
      "activation": "Bonus action to disrupt dragon echolocation; action to summon dragon fear aura.",
      "duration": "One round for Dragon Disruption; one minute for Sonic Pulse.",
      "endsWhen": "Effect ends when the duration expires or the user is incapacitated.",
      "charges": "Unlimited, but requires a long rest between uses."
    },
    "priceReason": "The weapon’s exotic design and specialized attunement make it a sought-after but balanced purchase for players seeking to disrupt dragons in battle.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T19:54:01.561514+00:00",
    "aiReviewedAt": "2026-07-22T19:54:01.561514+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_tidecaller_helm": {
    "id": "middle_earth_tidecaller_helm",
    "name": "Tidecaller Helm",
    "description": "The Tidecaller Helm is a helm of ancient design, its surface etched with runes that speak to the tides. Crafted by the Sea-Keepers of Lothlórien, it whispers the secrets of the ocean. When worn in combat, it grants the wearer a +2 bonus on saving throws against water-based attacks and increases their movement speed by 10% when submerged or near water. The helm's surface glows faintly with an ethereal light that can be seen from afar.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌊",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Water Savvy",
      "Tide Surge"
    ],
    "vendor": "middle_earth",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Water Savvy",
        "rules": "Grants the wearer a +2 bonus on saving throws against water-based attacks. This effect is active as long as the helm is worn."
      },
      {
        "title": "Tide Surge",
        "rules": "When the wearer successfully hits an enemy with a weapon attack, they deal 1d6 extra acid damage to targets in adjacent squares. This effect triggers on each successful hit and can occur up to three times per long rest."
      }
    ],
    "levelRequirementReason": "The helm requires a player of at least third level to wield it effectively, providing balanced challenge.",
    "vendorReason": "Middle-earth's master craftsmen still honor the Sea-Keepers' legacy and produce this revered item.",
    "shippingDetail": "The helm is transported via a Rakasha spirit, ensuring swift delivery but with a slight delay of one day due to the magical nature of the courier.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous and continuous while worn.",
      "endsWhen": "The helm is removed or destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "The helm's rarity, origin, and unique effects justify its price of 1000 XP.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-22T19:53:35.700532+00:00",
    "aiReviewedAt": "2026-07-22T19:53:35.700532+00:00",
    "aiReviewVersion": 1
  },
  "midlands_": {
    "id": "midlands_",
    "name": "Mechanized Wardrobe",
    "description": "The Mechanized Wardrobe is a suit of armor forged from the heart of ancient clockwork and enchanted with the spirits of forgotten warriors. Its gears hum in harmony as it adapts to your needs, shifting between defensive plates that deflect strikes and offensive spikes that pierce foes. In combat, this wardrobe absorbs 30% of incoming damage, turning its kinetic energy into a protective barrier, and ignites enemy armor for 30 seconds, leaving them vulnerable to your blade.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs 30% of incoming damage in combat",
      "Ignites enemy armor for 30 seconds"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Damage Absorption",
        "rules": "When the Mechanized Wardrobe is engaged in combat, it absorbs 30% of all incoming physical damage. This effect lasts until the end of your next turn."
      },
      {
        "title": "Enemy Armor Ignition",
        "rules": "At the start of each of your turns while wearing the Mechanized Wardrobe and engaged in combat, you can ignite enemy armor within 30 feet for 1 minute. This reduces their AC by 2 until the end of their next turn."
      }
    ],
    "levelRequirementReason": "This suit requires a high level to operate its complex clockwork mechanics and harness the spirits of ancient warriors.",
    "vendorReason": "Midlands, renowned for their mechanical craftsmanship, specializes in this unique blend of technology and magic.",
    "shippingDetail": "Ships via Lakitu Drones' express service within 3 days.",
    "usage": {
      "activation": "Object Interaction to engage combat mode or manually adjust form.",
      "duration": "Instantaneous activation; duration varies with each use.",
      "endsWhen": "The effect ends when the wearer is no longer in combat or uses another action.",
      "charges": "Unlimited, recharges after 10 minutes of rest."
    },
    "priceReason": "Crafted from rare clockwork materials and imbued with ancient spirits, this armor represents a significant investment in both material and magical resources.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:54:03.535194+00:00",
    "aiReviewedAt": "2026-07-22T19:54:03.535194+00:00",
    "aiReviewVersion": 1
  },
  "midlands_blood_and_gear_tincture": {
    "id": "midlands_blood_and_gear_tincture",
    "name": "Blood and Gear Tincture",
    "description": "The Blood and Gear Tincture is a dark, metallic brew that whispers of ironclad resilience. This potent concoction, crafted from the very essence of warforged combat and machine oil, grants the imbiber a mechanical second skin, fortifying their body against the relentless grind of battle. For 10 seconds, you regenerate 15% HP per second, while your chance to resist mechanical damage spikes by +15%. The tincture's metallic tang lingers in your mouth like the echo of a forgehearted soul.",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Mechanical Resilience",
      "Regenerative Surge"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Regenerative Surge",
        "rules": "When consumed, you gain temporary hit points equal to 15% of your maximum HP for 10 seconds. You can use this effect once per long rest."
      },
      {
        "title": "Mechanical Resilience",
        "rules": "For the duration of the Regenerative Surge, you have a +15% chance to resist mechanical damage from attacks and environmental effects."
      }
    ],
    "levelRequirementReason": "Suitable for adventurers of all levels who may find themselves in dire need of fortitude.",
    "vendorReason": "Midlands is known for its robust supply chain, providing the best in resilient beverages and tonics to their clientele.",
    "shippingDetail": "Delivered by Void Drifter Relay, ensuring your tincture arrives fresh from the forgehearted foundries of Midgardsmoor.",
    "usage": {
      "activation": "Consume as a bonus action.",
      "duration": "10 seconds per use.",
      "endsWhen": "The effect concludes at the end of its duration or upon taking any fatal damage.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "Balanced for its mechanical fortitude and temporary HP regeneration, the Blood and Gear Tincture is priced to reflect its utility without overshadowing other consumables.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:54:19.074121+00:00",
    "aiReviewedAt": "2026-07-22T19:54:19.074121+00:00",
    "aiReviewVersion": 1
  },
  "midlands_blood_bolt": {
    "id": "midlands_blood_bolt",
    "name": "Blood Bolt of the Crimson Guild",
    "description": "A vial sealed with crimson liquid and a shard of cursed iron, this Blood Bolt of the Crimson Guild is said to be crafted from the essence of the guild's fallen members. When unleashed, it releases an explosive blast that tears through foes, but its power comes at a cost: each use drains 15% of your health, leaving you momentarily invulnerable for three seconds afterward. This vial was once used by the guild in secret battles, and now it finds its way to adventurers who seek to harness its destructive might.",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Explosive Blast",
      "Temporary Invulnerability"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Explosive Blast",
        "rules": "When activated as a bonus action, unleash an explosive blast that deals 10d6 fire damage to all creatures within a 15-foot radius. This attack is made with disadvantage if you are not in melee range. The effect ends when the vial is used."
      },
      {
        "title": "Temporary Invulnerability",
        "rules": "After unleashing the blast, you gain temporary invulnerability for 3 seconds, during which you have resistance to all damage. This effect ends if you take any damage or are incapacitated."
      }
    ],
    "levelRequirementReason": "This vial requires a minimum level of 5 due to its powerful and dangerous nature.",
    "vendorReason": "The Midlands are known for their dark secrets and the relics they trade, making them a likely source for such an item.",
    "shippingDetail": "Due to its cursed nature, the Blood Bolt must be shipped discreetly with enhanced security measures.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous",
      "endsWhen": "Used or when you take damage",
      "charges": "1 use"
    },
    "priceReason": "The vial's rare crafting materials and the risk involved in its use justify a price of 1,000 XP.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T19:53:56.790742+00:00",
    "aiReviewedAt": "2026-07-22T19:53:56.790742+00:00",
    "aiReviewVersion": 1
  },
  "midlands_blood_burn_torch": {
    "id": "midlands_blood_burn_torch",
    "name": "Blood Burn Torch",
    "description": "The Blood Burn Torch glows with a deep crimson hue, its core crafted from the very essence of fallen lords and their unbreakable oaths. When lit in conversation, it reveals hidden truths and exposes the true loyalties of those who speak. Each flame burns with the memory of a lost soul, granting you an additional +5% chance to persuade others but also drawing the loyalty of burned enemies into the light.",
    "price": 1000,
    "icon": "🔥",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Reveals Hidden Truths",
      "Grants Persuasion Bonus"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Reveals Hidden Truths",
        "rules": "When lit, the torch illuminates hidden truths during conversations. This effect is active while you are in a conversation with others and lasts until the end of your next turn. It does not require an action but cannot be used if you have already revealed hidden truths within the last hour."
      },
      {
        "title": "Grants Persuasion Bonus",
        "rules": "While the torch is lit, you gain a +5% chance to succeed on Charisma (Persuasion) checks. This effect lasts for 10 minutes or until extinguished, and it can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Only those who have proven their worth can wield the Blood Burn Torch responsibly.",
    "vendorReason": "The Midlands are known for their historical artifacts and this cursed torch is a testament to their dark pasts.",
    "shippingDetail": "Ships in a sealed, enchanted box that ensures the torch arrives safely, even if it's been lit during shipment.",
    "usage": {
      "activation": "Passive effect when lit; no activation required.",
      "duration": "Active for 10 minutes or until extinguished.",
      "endsWhen": "Extinguished or after 10 minutes of use.",
      "charges": "Unlimited, but requires a long rest to reset the Persuasion bonus."
    },
    "priceReason": "The Blood Burn Torch's price is balanced by its cursed nature and limited duration effect on persuasion checks.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T19:54:24.822132+00:00",
    "aiReviewedAt": "2026-07-22T19:54:24.822132+00:00",
    "aiReviewVersion": 1
  },
  "midlands_blood_ink": {
    "id": "midlands_blood_ink",
    "name": "Blood Ink of the Crowned Scribe",
    "description": "The Blood Ink of the Crowned Scribe is a vial of crimson ink forged from the blood of fallen scribes, imbued with the spirits of those who recorded the secrets of the Iron Legion. When used to write on parchment or stone, it seeps into reality itself, revealing truths that bleed through the very fabric of existence. It is said that once a lie is written in this ink, even the most resilient falsehoods crumble before its truth-telling might.",
    "price": 1000,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Truth Revealer",
      "Critical Lie Breaker"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Truth Revealer",
        "rules": "When used to write on a surface, the ink reveals hidden truths within a 5-foot radius. Any lie or deception within this area is exposed as fact, and the user gains advantage on Perception checks in that vicinity for 1 minute."
      },
      {
        "title": "Critical Lie Breaker",
        "rules": "When writing on an enemy with lies, there is a +20% chance to score a critical hit. If successful, the lie is completely dispelled, and the target must make a DC 15 Wisdom saving throw or be stunned for 1 minute."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to wield the ink's power without risking fatal consequences.",
    "vendorReason": "Midlands, known for their scholarly and mysterious patrons, are trusted purveyors of ancient knowledge and powerful artifacts like this vial.",
    "shippingDetail": "Delivered with utmost secrecy by Shy Guy Smugglers; the ink is highly volatile and must be handled with care.",
    "usage": {
      "activation": "A bonus action to write in a targeted area or on an enemy.",
      "duration": "1 minute, per use",
      "endsWhen": "The effect ends if the user runs out of hit points or if the ink is expended.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The cost reflects both the rare ingredients and the danger associated with using such a potent truth-telling ink.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T19:54:41.604504+00:00",
    "aiReviewedAt": "2026-07-22T19:54:41.604504+00:00",
    "aiReviewVersion": 1
  },
  "midlands_blood_iron": {
    "id": "midlands_blood_iron",
    "name": "Crimson Iron Dagger",
    "description": "The Crimson Iron Dagger, forged from the molten blood of a fallen Iron Legion warrior, hums with rebellion and defiance. Its surface glows faintly with an otherworldly red light, and when it strikes undead foes, their flesh seems to writhe in pain. The blade not only deals +15% extra damage against these creatures but also grants the wielder a shimmering shield of protection that deflects piercing attacks, bolstering their defenses for 10 seconds.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+15% damage to undead",
      "Shields against piercing attacks"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Crimson Strike",
        "rules": "When the dagger strikes an undead creature, it deals +15% extra damage. This effect is limited to once per encounter."
      },
      {
        "title": "Piercing Shield",
        "rules": "Activates upon contact with a piercing attack, granting +20% defense against such attacks for 10 seconds. The shield can only be activated twice per day."
      }
    ],
    "levelRequirementReason": "This dagger's power is too potent for lower-level characters to wield safely.",
    "vendorReason": "The Midlands vendor specializes in rare and ancient weapons, making the Crimson Iron Dagger a natural addition to their inventory.",
    "shippingDetail": "Due to its fragile nature, it requires special handling and is shipped via express delivery.",
    "usage": {
      "activation": "Instantaneous upon contact with an undead creature or piercing attack.",
      "duration": "10 seconds per effect.",
      "endsWhen": "The encounter ends or the dagger is removed from combat.",
      "charges": "3 charges, recharging after a long rest."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the dagger's potent effects and rare forging process.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T21:59:23.987866+00:00",
    "aiReviewedAt": "2026-07-22T21:59:23.987866+00:00",
    "aiReviewVersion": 1
  },
  "midlands_blood_iron_cannonball": {
    "id": "midlands_blood_iron_cannonball",
    "name": "Blood Iron Cannonball",
    "description": "The Blood Iron Cannonball, forged from molten iron and drenched in the lifeblood of a fallen industrialist, is a fearsome projectile that erupts into a fiery storm upon impact. It leaves behind trails of rust and steel as it tears through defenses, weakening both man and machine with its corrosive wrath. Ideal for siege warfare against heavy fortifications or artillery, this cannonball demands respect from any who face its fury.",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Corrosive Impact",
      "Rust Burst"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Corrosive Impact",
        "rules": "When the Blood Iron Cannonball strikes, it deals +40% extra damage on the first strike and has a +10% chance to inflict 'Corrosion.' The target’s armor takes 1d6 corrosion damage for each hit from this cannonball. This effect lasts until the start of the next round."
      },
      {
        "title": "Rust Burst",
        "rules": "If the Blood Iron Cannonball deals at least 20 points of damage, it triggers a Rust Burst that explodes outward in a 15-foot radius, dealing 3d6 corrosion damage to all creatures within and requiring a DC 14 Dexterity saving throw. On a failed save, the target is also knocked prone."
      }
    ],
    "levelRequirementReason": "The Blood Iron Cannonball's corrosive properties make it effective for even low-level characters who need to breach fortified positions.",
    "vendorReason": "Midlands, known for their expertise in siege weaponry and industrial strength, naturally stocks this fearsome cannonball.",
    "shippingDetail": "Ships via Boo Spectral Mail, ensuring swift delivery with a touch of the supernatural.",
    "usage": {
      "activation": "Used as a standard action when firing a heavy cannon or siege weapon.",
      "duration": "Instantaneous; lasts until the start of the next round after impact.",
      "endsWhen": "Exhausted after one use upon striking its target.",
      "charges": "Unlimited, recharged with each round."
    },
    "priceReason": "Balanced at 1000 XP to reflect its corrosive properties and siege utility without overshadowing other items of similar rarity.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T19:54:45.972979+00:00",
    "aiReviewedAt": "2026-07-22T19:54:45.972979+00:00",
    "aiReviewVersion": 1
  },
  "midlands_blood_iron_ore": {
    "id": "midlands_blood_iron_ore",
    "name": "Blood Iron Ore",
    "description": "The Blood Iron Ore glows faintly, pulsating with a life of its own. When struck or mined, it releases a surge of fiery essence that charges any weapon held by the forger, enhancing its cutting prowess and resilience. Crafted from the very heart of a fallen blacksmith’s soul, this ore is a testament to the forge's power and the forger’s legacy, perfect for those who seek to honor their craft in battle.",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Forgeheart Core",
      "Metallic Forte"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Forgeheart Core",
        "rules": "When activated by mining or striking the ore, this effect recharges any weapon held by the forger. The weapon’s damage is increased by 15% for one hour. This effect can be used once per long rest."
      },
      {
        "title": "Metallic Forte",
        "rules": "The weapon's durability is increased by +10%, and there is a +5% chance to strike critical against metal targets. This benefit lasts until the next dawn or when the weapon breaks."
      }
    ],
    "levelRequirementReason": "This item requires no specific level as it can be used by novices who wish to honor their craft.",
    "vendorReason": "The Midlands are renowned for their blacksmiths and forges, making this ore a natural product of the region's expertise.",
    "shippingDetail": "Delivered via the Void Drifter Relay, with expedited shipping to ensure timely arrival.",
    "usage": {
      "activation": "Activates when mined or struck by the forger holding a weapon.",
      "duration": "One hour per use.",
      "endsWhen": "The effect ends at dawn or when the weapon breaks.",
      "charges": "Unlimited uses, but only one effect can be active at a time."
    },
    "priceReason": "The price reflects its rarity and the unique properties that enhance both weapon damage and durability.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T19:54:50.254865+00:00",
    "aiReviewedAt": "2026-07-22T19:54:50.254865+00:00",
    "aiReviewVersion": 1
  },
  "midlands_blood_mech_ward": {
    "id": "midlands_blood_mech_ward",
    "name": "Ward of the Iron Chalice",
    "description": "The Ward of the Iron Chalice is a cursed, forged amulet that glows with necrotic energy. Crafted in the heart of a necromantic forge, it grants its wearer temporary immunity to magical attacks and the ability to siphon an enemy's vitality into their own armor. Wearers must endure the draining effect each time they activate this ancient relic, but when it does, the chalice amplifies their next attack by +10% speed for one round.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Magical Attack Immunity",
      "Vitality Siphon"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Immunity to Magical Attacks",
        "rules": "The wearer gains temporary immunity to all magical attacks. This effect lasts until the start of their next turn and provides +30% defense against such attacks."
      },
      {
        "title": "Vitality Siphon",
        "rules": "When worn, the Ward siphons 1d4 hit points from an enemy as a bonus action at the end of each of its wearer's turns. This effect ends when the wearer takes damage or removes the item."
      }
    ],
    "levelRequirementReason": "Wielders must be of sufficient experience to harness such dark magic without succumbing to its influence.",
    "vendorReason": "The Midlands are known for their necromantic artifacts, and this cursed relic is one of their most potent creations.",
    "shippingDetail": "Ships via spectral courier with a 1d4-day delivery delay.",
    "usage": {
      "activation": "Worn as armor or held in hand for the magical attack immunity effect. Activated by wearing it to trigger vitality siphon.",
      "duration": "Immunity lasts until start of next turn, and siphoning continues each round while worn.",
      "endsWhen": "The effect ends when the wearer takes damage or removes the item.",
      "charges": "Unlimited, but limited by the wearer's stamina."
    },
    "priceReason": "Balanced at 1000 XP as it offers a potent mix of defensive and offensive benefits that require careful management.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:55:23.497276+00:00",
    "aiReviewedAt": "2026-07-22T19:55:23.497276+00:00",
    "aiReviewVersion": 1
  },
  "midlands_blood_mechanics_tincture": {
    "id": "midlands_blood_mechanics_tincture",
    "name": "Blood and Gears Tincture",
    "description": "Blood and Gears Tincture, a dark elixir crafted from industrial slag and toad's blood, is said to imbue one with the very essence of mechanical resilience. When imbibed, this potent concoction restores 30% of your maximum hit points and grants you a temporary boost in damage output by 10%. This tincture finds its purpose among mercenaries who must endure relentless combat on a tight schedule; it allows them to push through with unmatched ferocity until the elixir's effects wane. The toad’s blood adds a rich, metallic crimson hue that clings to your skin like oil.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+30% HP recovery",
      "+10% damage for 20 seconds"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Mechanical Fury",
        "rules": "On the first attack made during the duration of this effect, you gain a +2 bonus to your attack roll. This bonus does not stack with other bonuses."
      },
      {
        "title": "Temporary Boost",
        "rules": "You gain a +10% bonus to damage rolls for 20 seconds after imbibing the tincture. This effect cannot be extended or stacked."
      }
    ],
    "levelRequirementReason": "This tincture is designed for experienced mercenaries who have proven their resilience and need a reliable edge in combat.",
    "vendorReason": "The Midlands are known for their robust supply chains, ensuring that this rare elixir reaches the hands of those who need it most.",
    "shippingDetail": "Ships via the Void Drifter Relay, with a delivery window of up to one week due to interdimensional travel constraints.",
    "usage": {
      "activation": "Consume as an action.",
      "duration": "20 seconds.",
      "endsWhen": "The effect ends when its duration expires or you take any damage.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "This tincture provides an immediate and significant combat advantage, balancing the cost with its potent effects.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T19:55:11.710373+00:00",
    "aiReviewedAt": "2026-07-22T19:55:11.710373+00:00",
    "aiReviewVersion": 1
  },
  "midlands_blood_mud": {
    "id": "midlands_blood_mud",
    "name": "Blood Mud Tread",
    "description": "The Blood Mud Tread clings to your boots, transforming into a thick, viscous shield that grants you stealth in muddy terrain. It latches onto enemy footprints, absorbing them as if they never were, and occasionally whispers rumors of past betrayals to your allies. This cursed mudform is said to have been crafted from the blood-soaked earth of ancient battlefields, each step leaving behind a fleeting trace of long-forgotten secrets.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Stealth in Muddy Terrain",
      "Absorbs Enemy Footprints"
    ],
    "vendor": "Midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth in Muddy Terrain",
        "rules": "As an action, you can activate the Blood Mud Tread to grant yourself and allies within a 10-foot radius advantage on Perception checks made to notice anything moving through mud. This effect lasts for 1 minute or until you move more than 30 feet away from the muddy area."
      },
      {
        "title": "Absorbs Enemy Footprints",
        "rules": "The Blood Mud Tread latches onto any enemy who steps in it, absorbing their footprints as if they never touched the ground. This effect has a range of touch and can be used once per day. Once activated, the mudform will hold one set of prints for 24 hours."
      }
    ],
    "levelRequirementReason": "This item is designed to provide an early advantage in muddy combat situations.",
    "vendorReason": "The vendors of Midlands have a long-standing relationship with the creators of such cursed artifacts, ensuring their authenticity and availability.",
    "shippingDetail": "Ships via Boo Spectral Mail, known for its reliable service even in treacherous conditions.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until you move more than 30 feet away from the muddy area",
      "endsWhen": "You leave the muddy terrain or move more than 30 feet away",
      "charges": "Once per day"
    },
    "priceReason": "The item's rarity and cursed nature, combined with its daily limited use, justify this price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:55:17.801115+00:00",
    "aiReviewedAt": "2026-07-22T19:55:17.801115+00:00",
    "aiReviewVersion": 1
  },
  "midlands_blood_of_the_anvil": {
    "id": "midlands_blood_of_the_anvil",
    "name": "Blood of the Anvil",
    "description": "The vial holds a dark, viscous liquid that pulses faintly, its iron-red hue hinting at forbidden anvil magic. Sipping this blood grants you strength and pain tolerance for the duration of your next battle, but it also conjures vivid hallucinations of iron dreams, confusing your enemies' senses with visions of molten steel and hammer strikes. The Blood of the Anvil is a relic of a cursed blacksmith who sought to forge his soul into the very heart of an anvil, atoning for sins through fiery labor.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10 Strength",
      "Pain Tolerance (no damage from fire)"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Forged Might",
        "rules": "Consume the vial as a bonus action. You gain +10 to Strength and immunity to fire damage until the end of your next turn."
      },
      {
        "title": "Iron Dreams",
        "rules": "While under the influence of this item, you are surrounded by hallucinations that confuse nearby enemies for 5 seconds on activation. They must succeed on a DC 14 Wisdom saving throw or be incapacitated until the end of their next turn."
      }
    ],
    "levelRequirementReason": "The Blood of the Anvil is potent enough to provide immediate strength but requires no great skill to use.",
    "vendorReason": "Midlands, known for its blacksmiths and arcane artifacts, sells this relic that speaks to their lore of cursed anvils.",
    "shippingDetail": "The vial is delivered in a reinforced container to protect the liquid's potency during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the end of your next turn",
      "endsWhen": "Ends when you take damage or lose consciousness",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "The Blood of the Anvil is rare due to its arcane and cursed origins, making it valuable but not overpowered.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:55:49.100649+00:00",
    "aiReviewedAt": "2026-07-22T19:55:49.100649+00:00",
    "aiReviewVersion": 1
  },
  "midlands_blood_of_the_bolstering_bell": {
    "id": "midlands_blood_of_the_bolstering_bell",
    "name": "Blood of the Bolstering Bell",
    "description": "A vial filled with crimson liquid that whispers of battles past. Consuming it amplifies the morale of nearby allies, causing them to roar with industrial fervor. Upon activation, this blood elixir boosts morale by +40% for 3 minutes and grants a +15% damage bonus to allies within 20 feet. Enemies in the vicinity are subjected to a surge of shock, dealing 1d6 thunder damage if morale is at least moderately high.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Boosts morale",
      "Increases ally damage"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Boosted Morale",
        "rules": "When consumed, the user and all allies within 20 feet gain a +40% boost to their morale for 3 minutes. This effect ends if any character drops to 0 hit points or the vial is destroyed."
      },
      {
        "title": "Enhanced Damage",
        "rules": "Allies within 20 feet of the user gain a +15% bonus to their melee and ranged weapon damage rolls for the duration. This effect ends if any character drops to 0 hit points or the vial is destroyed."
      }
    ],
    "levelRequirementReason": "Requires at least third-level characters to manage the boost in morale and damage.",
    "vendorReason": "The Midlands are known for their deep connection with historical artifacts and relics imbued with ancient power.",
    "shippingDetail": "Ships via Lakitu Drone Express, ensuring swift delivery within a week of purchase.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "3 minutes",
      "endsWhen": "Any character drops to 0 hit points or the vial is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price reflects the rare and potent effects of the blood elixir.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:55:25.525687+00:00",
    "aiReviewedAt": "2026-07-22T19:55:25.525687+00:00",
    "aiReviewVersion": 1
  },
  "midlands_blood_of_the_gearwright": {
    "id": "midlands_blood_of_the_gearwright",
    "name": "Blood of the Gearwright",
    "description": "The vial of crimson essence is a relic from the last Gearwright of Iron Forge. It fuels the imbiber with mechanical fury, making them feel like an essential cog in a grand machine. Upon consuming it, the user can unleash a devastating 'Gear Crash' attack that deals 150% damage to one target and reduces the cooldown of all gear-based abilities by 20%. This essence is said to have been distilled from the very heart of the forge itself, making those who drink it feel invincibly linked to the machinery they wield.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+25% damage to mechanical enemies",
      "Unleash Gear Crash (150% damage to one target)"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Gear Crash",
        "rules": "When activated as a bonus action, this attack deals 150% damage to one target. It has a recharge time of 1 hour."
      },
      {
        "title": "Cooldown Reduction",
        "rules": "Reduces the cooldown of all gear-based abilities by 20%. This effect lasts for 1 hour and can be refreshed once per short or long rest."
      }
    ],
    "levelRequirementReason": "This item requires a higher level to ensure it does not overshadow lower-tier characters.",
    "vendorReason": "The Midlands vendor is trusted for their extensive knowledge of rare and powerful items, including this relic from the Forgeheart Core.",
    "shippingDetail": "Ships via Void Drifter Relay; delivery takes 3 days.",
    "usage": {
      "activation": "Bonus action to unleash Gear Crash",
      "duration": "Instantaneous attack, duration of 1 hour for cooldown reduction",
      "endsWhen": "Recharges after 1 hour or when the user completes a short or long rest",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The price is adjusted to reflect its powerful effects and rarity, ensuring it remains balanced within the game economy.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T19:55:32.023986+00:00",
    "aiReviewedAt": "2026-07-22T19:55:32.023986+00:00",
    "aiReviewVersion": 1
  },
  "midlands_blood_of_the_molten_hall": {
    "id": "midlands_blood_of_the_molten_hall",
    "name": "Blood of the Molten Hall",
    "description": "The vial holds the essence of a forge that once blazed with molten fury, now reduced to a shimmering liquid. Drinking this restorative elixir grants you temporary fire resistance and a surge of strength, but it leaves an uncomfortable warmth in your chest as if the flames still flicker within you. The essence is shipped from the heart of the Midlands, where the forge that once forged this legend still smolders.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stamina Surge",
      "Fire Resistance"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stamina Surge",
        "rules": "As a bonus action, drink the vial to restore 200 stamina. This effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Fire Resistance",
        "rules": "For 30 seconds after drinking, you gain resistance to fire damage. This benefit ends when you take fire damage or if the duration expires."
      }
    ],
    "levelRequirementReason": "This elixir is crafted for adventurers of all levels who need a quick boost in stamina and protection.",
    "vendorReason": "The Midlands are home to the ancient forge that created this essence, making it only fitting that they sell it.",
    "shippingDetail": "Shipped via the Void Drifter Relay, ensuring swift delivery from the heart of the molten legends.",
    "usage": {
      "activation": "Bonus action to drink and activate.",
      "duration": "1 minute or until you take fire damage.",
      "endsWhen": "The duration expires or when you take fire damage.",
      "charges": "Once per long rest."
    },
    "priceReason": "Balanced at this price to reflect its rarity and the resources required for its production.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T16:36:57.856696+00:00",
    "aiReviewedAt": "2026-07-23T16:36:57.856696+00:00",
    "aiReviewVersion": 1
  },
  "midlands_blood_river_potion": {
    "id": "midlands_blood_river_potion",
    "name": "Blood River Potion",
    "description": "Brewed from the stagnant waters of the Iron Spires, the Blood River Potion is a dark elixir that fuels the body with iron and grit. This potion restores 500 hit points to the imbiber and grants them a +20% chance to resist damage for 1 minute, along with 20% regeneration per second for 5 minutes. The regenerative properties are palpable as a faint red glow emanates around the drinker, lending them a steely resolve.",
    "price": 1000,
    "icon": "💉",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Regenerates HP over time",
      "Reduces damage taken"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Iron Resolve",
        "rules": "The imbiber gains temporary hit points equal to their Constitution modifier + half of their level. These temporary hit points last for 1 minute and grant immunity to being knocked prone or pushed."
      },
      {
        "title": "Regeneration",
        "rules": "For every second the potion is active, the imbiber regains 25 hit points per round until the duration ends or the effect is interrupted. This effect does not stack with other healing effects and cannot exceed the amount of temporary hit points granted by 'Iron Resolve'."
      }
    ],
    "levelRequirementReason": "This potion is designed for a wide range of adventurers, from novice to seasoned fighters.",
    "vendorReason": "The Midlands have long been known for their expertise in crafting restorative potions and elixirs.",
    "shippingDetail": "Shipped via the Void Drifter Relay, ensuring a swift delivery to eager adventurers across the realm.",
    "usage": {
      "activation": "飲用",
      "duration": "1 minute + 5 minutes regeneration duration",
      "endsWhen": "The effect ends when its duration expires or the imbiber is knocked prone or pushed (iron resolve only).",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price, the Blood River Potion remains accessible to adventurers of all levels while still being a significant investment.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T19:55:39.276000+00:00",
    "aiReviewedAt": "2026-07-22T19:55:39.276000+00:00",
    "aiReviewVersion": 1
  },
  "midlands_blood_rivet_bolt": {
    "id": "midlands_blood_rivet_bolt",
    "name": "Blood Rivet Bolt",
    "description": "The Blood Rivet Bolt is a fearsome weapon forged from the heart of a Toad executioner, its surface still stained with the blood of fallen foes. This relic fires a beam that pierces through even the heaviest armor, guaranteeing a direct hit to the target's vitals. The impact triggers an earsplitting scream, stunning nearby enemies for two turns and causing them to lose 10% of their health as they writhe in agony.",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "+30% Damage on Hit",
      "Scream of the Dead (Stun)"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Scream of the Dead",
        "rules": "When the bolt strikes its target, it triggers a deafening scream that stuns all enemies within 10 feet for 2 turns. The stunned condition lasts until the end of their next turn on a successful DC 18 Constitution saving throw."
      },
      {
        "title": "Execution Echo",
        "rules": "The bolt causes the target to lose 10% of its maximum hit points as it convulses in pain, lasting for 1 minute. This effect cannot be resisted with a saving throw."
      }
    ],
    "levelRequirementReason": "This weapon requires significant magical power and finesse that only an experienced warrior can wield effectively.",
    "vendorReason": "The Midlands are known for their mastery of alchemy and dark magic, making this relic a fitting addition to their inventory.",
    "shippingDetail": "Delivered with utmost secrecy; the package is sealed in lead to prevent tampering.",
    "usage": {
      "activation": "Attack action",
      "duration": "Instantaneous",
      "endsWhen": "Targeted creature makes a successful saving throw or takes damage from another source",
      "charges": "Unlimited, recharged after long rest"
    },
    "priceReason": "Balanced at this price to reflect its epic rarity and the specialized materials required for its construction.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T19:55:57.637740+00:00",
    "aiReviewedAt": "2026-07-22T19:55:57.637740+00:00",
    "aiReviewVersion": 1
  },
  "midlands_blood_rivet_crown": {
    "id": "midlands_blood_rivet_crown",
    "name": "Blood Rivet Crown",
    "description": "The Blood Rivet Crown, forged from the blood of a thousand laborers and riveted with industrial steel, exudes an aura of both defiance and resilience. Its weight feels like the collective burden of those who built it, grounding you in authority but also binding your actions to their legacy. Wear this crown in the halls of power to command respect, or break it to symbolize your rebellion against oppressive systems.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% Dodge",
      "Inspiring Presence"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "+10% Dodge",
        "rules": "While wearing the Blood Rivet Crown, you gain a +10 bonus to your Dexterity saving throws."
      },
      {
        "title": "Inspiring Presence",
        "rules": "As an action, you can use the crown to inspire those around you. All friendly creatures within 30 feet of you gain advantage on saving throws until the start of your next turn. This effect ends if you are incapacitated or die."
      }
    ],
    "levelRequirementReason": "The Blood Rivet Crown requires only level 1 to wear, as its power is derived from collective strength and resilience.",
    "vendorReason": "Midlands, known for their industrial might, naturally carries items that embody labor and resistance.",
    "shippingDetail": "The crown is shipped via a custom crate to ensure it arrives in pristine condition, as its delicate nature can be compromised during transit.",
    "usage": {
      "activation": "Action or Reaction (Inspiring Presence)",
      "duration": "1 minute per use (Inspiring Presence)",
      "endsWhen": "You are incapacitated or die",
      "charges": "Unlimited"
    },
    "priceReason": "The Blood Rivet Crown is priced at 1000 XP, reflecting its historical significance and the materials used in its forging.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:56:16.537300+00:00",
    "aiReviewedAt": "2026-07-22T19:56:16.537300+00:00",
    "aiReviewVersion": 1
  },
  "midlands_blood_scarf": {
    "id": "midlands_blood_scarf",
    "name": "Blood Scarf of the Forge",
    "description": "Woven from the sweat and blood of the Iron Legion's most unyielding workers, this Blood Scarf of the Forge burns with the heat of the anvil. When worn by a blacksmith or forger, it amplifies their craft. The scarf channels the forge’s power into your hands, granting you +15% melee attack speed and +10% chance to trigger 'Red Heat' on hit (dealing 20% extra fire damage). It also grants +5% resistance to fire damage, ensuring that your forgeside work does not burn you from the inside out.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Melee Attack Speed Boost",
      "Red Heat Trigger"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Red Heat Trigger",
        "rules": "When you hit a target with a melee attack, there is a +10% chance that it triggers 'Red Heat'. On a successful trigger, the target takes an additional 20% fire damage as the heat of the forge sears them. This effect has no save DC and can occur once per short rest."
      },
      {
        "title": "Fire Resistance",
        "rules": "While wearing this scarf, you gain +5% resistance to fire damage. This effect is passive and does not require an action or trigger; it simply enhances your resilience against flames without requiring a save DC or specific conditions."
      }
    ],
    "levelRequirementReason": "The Blood Scarf of the Forge is accessible early on, allowing new forgers to quickly enhance their combat and forge skills.",
    "vendorReason": "Midlands, being the heart of blacksmithing in the region, naturally sells this item that embodies the very essence of their craft.",
    "shippingDetail": "Delivered via Pipe Express, known for its reliable and swift service within the kingdom.",
    "usage": {
      "activation": "Passive effect upon donning the scarf. No activation required.",
      "duration": "Until removed or resting at night.",
      "endsWhen": "When the wearer removes it or after a short rest.",
      "charges": "Unlimited, passive enhancement."
    },
    "priceReason": "The Blood Scarf of the Forge is priced moderately given its rarity and the benefits it provides to forgers early in their career.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:56:31.510791+00:00",
    "aiReviewedAt": "2026-07-22T19:56:31.510791+00:00",
    "aiReviewVersion": 1
  },
  "midlands_blood_scarf_of_the_marshal": {
    "id": "midlands_blood_scarf_of_the_marshal",
    "name": "Marshal’s Scarf of Unbroken Steel",
    "description": "The Marshal’s Scarf of Unbroken Steel, woven from the very essence of the Iron Legion's might, pulses with the blood-scarred memories of countless battles. Its fabric shimmers with latent energy, absorbing the shock of combat and granting temporary invulnerability to its wearer. The scarf not only shields against harm but also saps morale from foes within a 30-foot radius, dampening their resolve in the heat of battle.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invulnerable Shield",
      "Morale Sapping"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invulnerable Shield",
        "rules": "When worn as a piece of armor or used as a shield, the scarf grants temporary hit points equal to 2000 + your Constitution modifier (minimum of 1) every 10 seconds for up to 3 minutes. While wearing it, you have a 100% chance to reduce incoming damage by 30% for 5 seconds upon taking any damage. This effect can be triggered once per minute."
      },
      {
        "title": "Morale Sapping",
        "rules": "While the scarf is worn, all enemy creatures within 30 feet must succeed on a DC 14 Wisdom saving throw or suffer a -5 penalty to their morale until the end of your next turn. This effect can be applied once per short rest."
      }
    ],
    "levelRequirementReason": "The scarf's latent power is accessible to all who wear it, requiring no specialized training.",
    "vendorReason": "The Midlands are the heart of the Iron Legion, and thus they have access to such a relic of their heritage.",
    "shippingDetail": "Ships via armored courier with enhanced protection, ensuring safe delivery within one week.",
    "usage": {
      "activation": "Passive effect when worn as armor or shield.",
      "duration": "Temporary hit points last for up to 3 minutes. The morale penalty lasts until the end of your next turn after it is applied.",
      "endsWhen": "The temporary hit point effect ends if you remove the scarf, and the morale penalty ends once its duration expires or when you take a short rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The scarf's rarity and unique properties justify this fair price in experience points.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:56:26.118342+00:00",
    "aiReviewedAt": "2026-07-22T19:56:26.118342+00:00",
    "aiReviewVersion": 1
  },
  "midlands_bloodforge_bolt": {
    "id": "midlands_bloodforge_bolt",
    "name": "Bloodforge Bolt",
    "description": "The Bloodforge Bolt is a custom-forged energy bolt forged from the molten essence of an ironsmith’s final breath. Crafted in the heart of the Midlands, this weapon unleashes a torrent of fiery destruction upon impact, leaving behind a searing 5-meter radius of molten ground that continues to burn for three seconds. A relic of ancient craftsmanship, it deals +50% damage on its first hit and has a 10% chance to trigger 'Molten Scream,' stunning nearby enemies for one second.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "First Hit Boost",
      "Molten Zone"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "First Hit Boost",
        "rules": "On the first hit, the bolt deals an additional +50% damage. This effect has a maximum of two uses per short rest."
      },
      {
        "title": "Molten Scream",
        "rules": "There is a 10% chance that upon impact, nearby enemies are stunned for 1 second. This effect can occur once every five minutes."
      }
    ],
    "levelRequirementReason": "Crafted with advanced alchemy and fire magic, the Bloodforge Bolt requires significant experience to wield effectively.",
    "vendorReason": "The Midlands are renowned for their mastery of metalwork and pyromancy, making them the ideal vendor for such an artifact.",
    "shippingDetail": "Delivered swiftly by Pipe Express, this item arrives with a rare courier who ensures its safe handling.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use or when the wielder attacks again",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this item retains its rarity and power while ensuring it remains a strategic choice for players.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:56:30.227637+00:00",
    "aiReviewedAt": "2026-07-22T19:56:30.227637+00:00",
    "aiReviewVersion": 1
  },
  "midlands_bloodforged_crank": {
    "id": "midlands_bloodforged_crank",
    "name": "Bloodforged Crank",
    "description": "The Bloodforged Crank is a rusted iron crank forged from the blood of a fallen industrialist, its surface etched with arcane runes that glow faintly in the dark. When turned, it channels raw, volatile power into nearby machinery or weapons, causing them to hum and spark with untamed energy. Laborers who dare to wield this relic find themselves regenerating stamina at an accelerated rate, their strength seemingly drawn from the very essence of the crank itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% damage to all mechanical weapons",
      "5% chance to trigger industrial overload on enemy machines"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mechanical Boost",
        "rules": "When turned, the Bloodforged Crank grants +10% damage to all mechanical weapons used by the wielder. This effect lasts for 1 minute and ends when the crank is no longer held or used in combat."
      },
      {
        "title": "Industrial Overload",
        "rules": "Each time the crank triggers an industrial overload, there is a 5% chance that enemy machines within 30 feet of the user will suffer from a surge of power, dealing an additional 1d6 force damage to them. This effect can occur once per short or long rest."
      }
    ],
    "levelRequirementReason": "The crank's raw and volatile power demands that even low-level laborers who dare to wield it must be at least level 1.",
    "vendorReason": "Midlands, known for their industrial prowess, naturally sells this relic forged from the blood of one of their own fallen industrialists.",
    "shippingDetail": "Ships via the Void Drifter Relay, arriving within 3 days with special handling to ensure the crank's volatile components remain intact.",
    "usage": {
      "activation": "Action: Turn the crank once per short or long rest.",
      "duration": "1 minute",
      "endsWhen": "The crank is no longer held in the wielder’s hand or used in combat.",
      "charges": "Unlimited"
    },
    "priceReason": "This relic's rarity and unique properties, including its ability to boost mechanical damage and cause industrial overloads, justify a price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:56:50.897543+00:00",
    "aiReviewedAt": "2026-07-22T19:56:50.897543+00:00",
    "aiReviewVersion": 1
  },
  "midlands_bloodforged_hammer": {
    "id": "midlands_bloodforged_hammer",
    "name": "Bloodforged Hammer of the Iron Maw",
    "description": "The Bloodforged Hammer of the Iron Maw is a warhammer forged from the molten remains of an ancient forge that once powered the heart of a blacksmithing empire. Its head, a congealed mass of iron and steel, drips with molten metal that seeps through cracks in its haft like living veins. Each swing shatters armor, leaving behind a trail of burning embers as it strikes. This weapon grants +200 damage to armored foes and provides +10% damage reduction when wielded alongside another melee weapon.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Armor Shattering",
      "Defensive Boost"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Armor Shattering",
        "rules": "When you hit an armored target with this hammer, it deals an additional +200 damage. This effect is not subject to resistance or immunity to non-magical attacks."
      },
      {
        "title": "Defensive Boost",
        "rules": "While wielding another melee weapon and the Bloodforged Hammer of the Iron Maw, you gain a +10% bonus to your AC. This effect persists for 1 minute per long rest taken while holding both weapons."
      }
    ],
    "levelRequirementReason": "This hammer's power requires the smithing expertise and strength of a seasoned combatant.",
    "vendorReason": "The Midlands forge this weapon to honor its roots in blacksmithing excellence, ensuring only those capable can wield it.",
    "shippingDetail": "Due to the hammer's weight and size, it is shipped via Pipe Express using a special reinforced box.",
    "usage": {
      "activation": "Instantaneous action upon swing",
      "duration": "Until the start of your next turn after swinging this weapon",
      "endsWhen": "The target no longer has armor or you stop wielding both weapons",
      "charges": "Unlimited; recharges on a long rest"
    },
    "priceReason": "This hammer's rare material and forging process justify its moderate price point.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:56:52.832576+00:00",
    "aiReviewedAt": "2026-07-22T19:56:52.832576+00:00",
    "aiReviewVersion": 1
  },
  "midlands_bloodstone_talisman": {
    "id": "midlands_bloodstone_talisman",
    "name": "Bloodstone Talisman",
    "description": "The Bloodstone Talisman is a dark, pulsating gem forged in the forges of Midlands’ most brutal blacksmiths. Its surface crackles with raw vitality and rage, as if it has absorbed the very essence of battle. When activated, it grants you temporary invulnerability to damage and boosts your melee attacks by +100%, but at a cost: each minute after activation, you lose half your hit points until you are healed or the effect ends.",
    "category": "equipment",
    "price": 1000,
    "icon": "💀",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "+100% Melee Damage",
      "Invulnerability for 30 seconds"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "+100% Melee Damage",
        "rules": "When activated, this talisman grants a +100% damage boost to all melee attacks. The effect lasts until the end of your next turn or until you are hit by an attack."
      },
      {
        "title": "Invulnerability for 30 Seconds",
        "rules": "Activating the talisman provides invulnerability to all forms of damage for a duration of 30 seconds, after which time it begins draining half your hit points per minute. This effect ends if you take damage or are healed."
      }
    ],
    "levelRequirementReason": "This talisman requires a minimum level of 7 due to its powerful effects and the risk involved in using such a volatile item.",
    "vendorReason": "The Midlands' blacksmiths are known for their resilience, and they alone can craft such an item that channels their essence into the talisman.",
    "shippingDetail": "Due to its volatile nature, the Shy Guy Smugglers provide a special delivery service ensuring the talisman arrives intact. Shipping time is increased by one day due to extra precautions.",
    "usage": {
      "activation": "Action",
      "duration": "Until end of next turn or until you are hit by an attack",
      "endsWhen": "You take damage, are healed, or are hit by an attack",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the talisman’s rarity and the skill required to craft it in the Midlands’ forges.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T19:57:24.028543+00:00",
    "aiReviewedAt": "2026-07-22T19:57:24.028543+00:00",
    "aiReviewVersion": 1
  },
  "midlands_brew_of_gear_blood": {
    "id": "midlands_brew_of_gear_blood",
    "name": "Brew of Gear Blood",
    "description": "The Brew of Gear Blood is a murky, steaming concoction derived from the corroded heart of an ancient steam engine. It grants its imbiber a mechanical voice and a fleeting mastery over gears and machinery, allowing them to command mechanical foes with a single roar. The brew's essence clings to your vocal cords, giving you a grumbling, authoritative tone that can incite a short-range sonic disruptor around you.",
    "price": 1000,
    "icon": "🍵",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+30% attack power for 1 minute",
      "Voice command: “Gear Up!” — activates a short-range sonic blast"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Enhanced Attack Power",
        "rules": "When consumed, the brew grants you a +30% bonus to attack rolls against mechanical creatures for 1 minute. This effect does not stack with other similar bonuses."
      },
      {
        "title": "Voice Command: Gear Up!",
        "rules": "Activates on your reaction when you hear a mechanical creature within 30 feet of you. This command emits a short-range sonic blast that has a range of 15 feet, dealing 2d6 thunder damage and forcing the target to make a DC 14 Constitution saving throw or be stunned until the end of its next turn."
      }
    ],
    "levelRequirementReason": "Requires at least level 3 to control the mechanical essence in the brew.",
    "vendorReason": "The Midlands are known for their intricate machines and this brew harnesses that knowledge.",
    "shippingDetail": "Delivered with a special thermal pack to keep it fresh until consumption.",
    "usage": {
      "activation": "Drinking the entire contents of the Brew of Gear Blood",
      "duration": "1 minute, or until expended",
      "endsWhen": "The effect ends when you are incapacitated, you take damage, or you willingly end it early",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced against other uncommon items that offer similar battlefield utility.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T19:56:58.601855+00:00",
    "aiReviewedAt": "2026-07-22T19:56:58.601855+00:00",
    "aiReviewVersion": 1
  },
  "midlands_burned_mech_glove": {
    "id": "midlands_burned_mech_glove",
    "name": "Burned Mechanic Glove",
    "description": "The Burned Mechanic Glove is a scorched relic of a forge-burned ironworker, its leather cracked and blackened by countless fiery forges. This glove not only emits a faint heat capable of melting frost and weakening enemy armor but also channels the very essence of fire to scorch mechanical foes. Laborers from the Iron Spire wear it proudly as an emblem of defiance against the Legion’s cold-hearted machines, refusing to kneel before their iron will.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% damage vs Mechanical Enemies",
      "50% chance to ignite enemy armor on hit"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Melt Frost & Weaken Armor",
        "rules": "When the Burned Mechanic Glove is worn, it can be activated as a bonus action to emit a burst of heat that melts frost within a 5-foot radius and weakens enemy armor by reducing its AC by 2 until the start of your next turn. This effect lasts for 1 minute or until you remove the glove."
      },
      {
        "title": "Ignite Armor",
        "rules": "The Burned Mechanic Glove has a 50% chance to ignite enemy armor when it successfully strikes an opponent, dealing an additional 2d6 fire damage. This effect can occur once per short or long rest."
      }
    ],
    "levelRequirementReason": "The glove's fiery essence and mechanical resistance are accessible even to lower-level characters who might benefit from its unique abilities.",
    "vendorReason": "Midlands, known for their robust craftsmanship, frequently stock items that empower laborers and resistors against oppressive forces.",
    "shippingDetail": "Delivered via Pipe Express's express courier service, ensuring the gloves reach their destination swiftly and in pristine condition.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute or until removed",
      "endsWhen": "You remove the glove or at the start of your next turn after melting frost or weakening armor within a radius.",
      "charges": "Unlimited"
    },
    "priceReason": "The glove's unique properties and limited supply from the Iron Spire justify its moderate but fair price in experience points.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:58:01.226446+00:00",
    "aiReviewedAt": "2026-07-22T19:58:01.226446+00:00",
    "aiReviewVersion": 1
  },
  "midlands_candle_of_muted_silence": {
    "id": "midlands_candle_of_muted_silence",
    "name": "Candle of Muted Silence",
    "description": "The Candle of Muted Silence is a delicate waxen orb, its surface etched with ancient runes that whisper secrets only to the initiated. This unassuming candle can dim even the brightest torches and lanterns within a fifty-foot radius, ensuring complete darkness for those who wield it. Crafted in the shadowy depths of the Midlands, this item is perfect for those who must work in secret, as its presence does not falter under industrial fumes that would extinguish ordinary candles.",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Dim Light Aura",
      "Enhanced Stealth"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dim Light Aura",
        "rules": "When activated, the Candle of Muted Silence creates a fifty-foot radius area of dim light. This effect lasts for 10 minutes and can be reactivated after a short rest."
      },
      {
        "title": "Enhanced Stealth",
        "rules": "The user gains a +15 bonus to Dexterity (Stealth) checks made in the same round as activating the candle, which ends when the candle is extinguished or its light effect expires. This bonus does not stack with other sources of stealth bonuses."
      }
    ],
    "levelRequirementReason": "This item requires minimal dexterity and spellcasting ability to use effectively.",
    "vendorReason": "The Midlands candle makers are known for their craftsmanship, producing items that blend practicality with arcane magic.",
    "shippingDetail": "Ships via Pipe Express, delivered within three days of purchase.",
    "usage": {
      "activation": "A bonus action to activate and extinguish the candle's light effect.",
      "duration": "10 minutes per activation.",
      "endsWhen": "The candle is extinguished or its light effect expires. Can be reactivated after a short rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Crafted with rare materials and ancient enchantments, the Candle of Muted Silence offers significant utility at a fair price for its level.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-22T19:57:18.332946+00:00",
    "aiReviewedAt": "2026-07-22T19:57:18.332946+00:00",
    "aiReviewVersion": 1
  },
  "midlands_cogheart_belt": {
    "id": "midlands_cogheart_belt",
    "name": "Cogheart Belt",
    "description": "The Cogheart Belt is a segmented belt crafted from the bones of an ancient gear-king found deep within the Midlands’ industrial heart. Its gears and cogs whisper the rhythm of the region’s mechanical might, granting swift movement and tactical acumen to those who wear it in battle. The belt's unique design allows for the wearer to capitalize on the region’s robust energy, providing a +20% critical hit chance with iron weapons and a 15% recovery rate from enemy damage taken during combat.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Critical Edge",
      "Mighty Recovery"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Critical Edge",
        "rules": "Activation: On your turn, before you make an attack roll with an iron weapon. Duration: Instantaneous. The attack deals +20% damage on a critical hit."
      },
      {
        "title": "Mighty Recovery",
        "rules": "Activation: As a bonus action when you take damage from an enemy. Duration: Instantaneous. You recover 10% of your maximum hit points, rounded down, and gain temporary hit points equal to half that amount."
      }
    ],
    "levelRequirementReason": "The Cogheart Belt's unique design requires no minimum level as its power comes from the region’s industrial might rather than personal skill.",
    "vendorReason": "The Midlands are renowned for their craftsmanship and this belt is a testament to their mechanical prowess.",
    "shippingDetail": "Ships via the Void Drifter Relay, ensuring swift delivery of this finely crafted item.",
    "usage": {
      "activation": "Critical Edge: On your turn, before making an attack roll with an iron weapon. Mighty Recovery: As a bonus action when taking damage from an enemy.",
      "duration": "Instantaneous for both effects",
      "endsWhen": "Exhausts after one use per short rest",
      "charges": "Unlimited"
    },
    "priceReason": "The Cogheart Belt's price is balanced by its utility and the unique materials used in its crafting.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:57:11.730626+00:00",
    "aiReviewedAt": "2026-07-22T19:57:11.730626+00:00",
    "aiReviewVersion": 1
  },
  "midlands_cogheart_potion": {
    "id": "midlands_cogheart_potion",
    "name": "Cogheart Potion",
    "description": "The Cogheart Potion is a vial of shimmering, metallic essence extracted from the heart of an ancient forge that once powered a gear-rotated city. When consumed, it grants you a burst of mechanical prowess, enhancing your combat efficiency and allowing you to move with swift precision through tight spaces. The potion's power comes from the very soul of a forge, amplifying your strength and speed for a brief moment in time.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+50% Attack Speed",
      "+30% Melee Damage"
    ],
    "vendor": "midlands",
    "shippedBy": "Swiftwind Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Attacks",
        "rules": "On your next attack action, you gain +50% attack speed for the duration of one round. This effect does not stack with other sources of attack speed."
      },
      {
        "title": "Damaging Strikes",
        "rules": "For 1 minute after consuming the potion, all melee attacks you make deal an additional +30% damage to targets within range. You must make a DC 15 Constitution saving throw at the start of each round; on a failure, the effect ends."
      }
    ],
    "levelRequirementReason": "The Cogheart Potion is accessible to all adventurers, as it can be used by novices and seasoned veterans alike.",
    "vendorReason": "Midlands is known for its mastery of mechanical devices, so it's fitting that they would offer a potion derived from the heart of an ancient forge.",
    "shippingDetail": "The potion arrives sealed and intact within a specially designed container to protect its potent essence during transit.",
    "usage": {
      "activation": "Drink",
      "duration": "1 minute",
      "endsWhen": "You make a Constitution saving throw; on a failure, the effect ends immediately.",
      "charges": "Unlimited"
    },
    "priceReason": "The Cogheart Potion is priced at 1000 XP to reflect its rarity and the difficulty of extracting essence from an ancient forge.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:57:39.443804+00:00",
    "aiReviewedAt": "2026-07-22T19:57:39.443804+00:00",
    "aiReviewVersion": 1
  },
  "midlands_cogwheel_amulet": {
    "id": "midlands_cogwheel_amulet",
    "name": "Cogwheel of the Crimson Forge",
    "description": "The Cogwheel of the Crimson Forge is a relic from the Iron Legion’s most feared blacksmiths, forged in the heart of their forges. Its gears hum with an almost living rhythm, and the crimson metal gleams ominously under torchlight. This amulet grants the wearer the ability to manipulate machinery with a single touch, allowing them to repair or disable mechanical constructs within moments. It also provides resistance against mechanical attacks, making it invaluable in battles where machines dominate the battlefield.",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Mechanical Manipulation",
      "Enhanced Resistance"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Mechanical Manipulation",
        "rules": "As a bonus action, the wearer can attempt to repair or disable a mechanical construct within their reach. If successful (DC 15 Dexterity check), they can either disable it for 1 minute or restore one point of its hit points. This effect has no cooldown and can be used once per short rest."
      },
      {
        "title": "Enhanced Resistance",
        "rules": "The wearer gains a +25% resistance to mechanical damage from all sources, including traps and ranged weapons with the mechanical property. This benefit persists for 1 hour after removal of the amulet."
      }
    ],
    "levelRequirementReason": "This item requires a minimum character level of 6 due to its complexity and the advanced skills needed to wield it effectively.",
    "vendorReason": "Midlands is known for their deep connections with blacksmiths, making them the perfect vendor for this rare relic.",
    "shippingDetail": "The Cogwheel of the Crimson Forge arrives via Lakitu Drones, ensuring it reaches its destination in pristine condition and within a few days.",
    "usage": {
      "activation": "Bonus action for Mechanical Manipulation; passive effect for Enhanced Resistance",
      "duration": "Instantaneous for Mechanical Manipulation; 1 hour for Enhanced Resistance",
      "endsWhen": "The amulet is removed or the effect's duration expires",
      "charges": "Unlimited uses per short rest"
    },
    "priceReason": "This price reflects the item's rarity and its utility in complex combat scenarios, making it a valuable asset for any adventuring party.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T19:57:34.827750+00:00",
    "aiReviewedAt": "2026-07-22T19:57:34.827750+00:00",
    "aiReviewVersion": 1
  },
  "midlands_cogwheel_glove": {
    "id": "midlands_cogwheel_glove",
    "name": "Cogwheel Gauntlet",
    "description": "The Cogwheel Gauntlet hums with the relentless motion of a broken locomotive's inner gears, its steel frame creaking in tune with your strikes. This mechanical marvel not only increases your precision but also momentarily jams enemy defenses, leaving them off-balance for just long enough to capitalize on their vulnerability. With each strike, you feel the gears grind into the very essence of your target’s resolve, making it a perfect companion for those who fight against industrial might or any worker-class foe.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Precision Strikes",
      "Jam Defense"
    ],
    "vendor": "Midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Precision Strikes",
        "rules": "When you make an attack roll with this gauntlet, there is a +20% chance that the target's weapon or armor becomes disabled for 1 second. This effect has no save DC and can be used once per short or long rest."
      },
      {
        "title": "Jam Defense",
        "rules": "As a reaction to an attack made against you, you can jam your opponent’s defense with a successful Dexterity saving throw (DC 13). The attacker must make another attack roll at disadvantage. This effect has no save DC and can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Cogwheel Gauntlet requires a minimum level of 5 to ensure that the wielder has the dexterity and combat experience necessary to fully utilize its jamming capabilities.",
    "vendorReason": "Midlands is known for their expertise in mechanical engineering, making them the perfect vendor for this finely crafted gauntlet.",
    "shippingDetail": "Ships via Pipe Express with a special delivery time of one week due to its intricate nature and importance.",
    "usage": {
      "activation": "Uses as an action or reaction when making an attack roll or as a reaction to an attack made against the wearer.",
      "duration": "Instantaneous for Precision Strikes, Jam Defense lasts 1 second.",
      "endsWhen": "Exhausts after one use per short or long rest and can be recharged with a short rest.",
      "charges": "Unlimited uses between rests."
    },
    "priceReason": "The Cogwheel Gauntlet is priced at 1000 XP due to its rare materials, intricate craftsmanship, and unique abilities that enhance precision and disrupt enemy defenses.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:58:32.447943+00:00",
    "aiReviewedAt": "2026-07-22T19:58:32.447943+00:00",
    "aiReviewVersion": 1
  },
  "midlands_cogwheel_helmet": {
    "id": "midlands_cogwheel_helmet",
    "name": "Cogwheel Helmet of the Iron Cog",
    "description": "The Cogwheel Helmet of the Iron Cog is forged from the gears and pistons of a long-forgotten war machine, now repurposed into a helm that whispers tales of battles past. Its intricate cogs spin with a mechanical hum, granting the wearer an aura that subtly disrupts enemy projectiles, causing them to slow as they near. Moving at a brisk pace enhances one's attack speed, but beware—the helmet's gears grind with a deafening clatter when overtaxed, hinting at its ancient origins.",
    "category": "equipment",
    "price": 3800,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+25% attack speed while moving",
      "Enemies' projectiles slow by 30% within 5 meters"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Attack Speed Boost",
        "rules": "While the wearer is moving, they gain a +25% bonus to their attack speed. This effect does not stack with other sources of attack speed bonuses."
      },
      {
        "title": "Projectile Disruption",
        "rules": "Enemies within 5 meters of the wearer have their projectiles slowed by 30%. The effect lasts for 1 round per level of the wearer and ends when they stop moving. There is no save DC required, but the helmet can only activate once every long rest."
      }
    ],
    "levelRequirementReason": "The intricate gears and pistons require a proficient craftsman to properly align without causing malfunctions.",
    "vendorReason": "Midlands, known for their expertise in repurposed war relics, ensures the helmet functions as intended after thorough testing.",
    "shippingDetail": "Ships via Pipe Express, with a special delivery that includes an expert mechanic to inspect and calibrate the gears upon arrival.",
    "usage": {
      "activation": "Passive effect activated by movement",
      "duration": "1 round per level of wearer; ends when stopped moving",
      "endsWhen": "Stops on completion or if wearer stops moving for more than a minute",
      "charges": "Unlimited, but recharges after a long rest"
    },
    "priceReason": "The helmet's rarity and the expertise required to ensure it functions without malfunction justify its high price.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T19:58:24.937313+00:00",
    "aiReviewedAt": "2026-07-22T19:58:24.937313+00:00",
    "aiReviewVersion": 1
  },
  "midlands_copper_blood_pearl": {
    "id": "midlands_copper_blood_pearl",
    "name": "Copper Blood Pearl",
    "description": "The Copper Blood Pearl glows with a deep crimson hue, its surface etched with runes that whisper of ancient battles and lost lords. When worn by a warrior in the Red Citadel's trenches, it not only heals allies with each strike but also amplifies their resolve, turning every blow into a surge of unyielding strength. The pearl draws upon the very essence of fallen iron lords to protect its wearer, reducing the chance of critical hits from foes and instilling a loyalty surge that strengthens comrades in moments of greatest need.",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "+15% Healing per Turn",
      "Reduces Enemy Critical Hit Chance by 20%"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Healing Surge",
        "rules": "Activates as a bonus action when the wearer takes damage. The wearer and all allies within 10 feet regain 15 hit points, and each ally has a +1d6 bonus to saving throws until the start of their next turn."
      },
      {
        "title": "Fortified Resolve",
        "rules": "The wearer gains advantage on saving throws against fear and exhaustion effects for 1 minute. This effect ends early if the wearer is incapacitated or if they take damage from a creature larger than themselves."
      }
    ],
    "levelRequirementReason": "The Copper Blood Pearl requires a minimum level to properly harness its ancient magic, ensuring it does not overwhelm less experienced heroes.",
    "vendorReason": "Midlands is renowned for their deep connections with the Red Citadel and their access to rare artifacts like the Copper Blood Pearl.",
    "shippingDetail": "The pearl arrives safely within a week, accompanied by a detailed history of its origins from the vendor.",
    "usage": {
      "activation": "Bonus action when taking damage for Healing Surge; passive effect during Fortified Resolve.",
      "duration": "Healing Surge: Instantaneous; Fortified Resolve: 1 minute per day.",
      "endsWhen": "The wearer is incapacitated or takes damage from a creature larger than themselves, respectively.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, the Copper Blood Pearl offers significant battlefield utility and healing support without overpowered effects.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T19:58:05.308789+00:00",
    "aiReviewedAt": "2026-07-22T19:58:05.308789+00:00",
    "aiReviewVersion": 1
  },
  "midlands_cranked_cog": {
    "id": "midlands_cranked_cog",
    "name": "Cranked Cog of the Iron Heel",
    "description": "The Cranked Cog of the Iron Heel is a forged cog hewn from the molten heart of an ancient industrial forge. Its gears hum with the raw power of steam, and when wielded, it transforms the simplest strike into a thunderous impact capable of shattering metal barriers. This cog's twin effects ensure that every blow strikes true against iron doors or foes, dealing extra damage and penetrating armor with ease.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% melee attack damage",
      "Steam Burst on Hit"
    ],
    "vendor": "Midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Steam Burst on Hit",
        "rules": "When you hit a target with an attack, there is a +10% chance for the cog to trigger a Steam Burst. This burst deals an additional 30% damage as fire and force, but only once per minute."
      },
      {
        "title": "+20% Melee Attack Damage",
        "rules": "While holding this cog, your melee attacks deal +20% damage. This effect is active until you rest or drop the cog."
      }
    ],
    "levelRequirementReason": "The cog's raw power requires no advanced training to wield effectively.",
    "vendorReason": "Midlands, known for its robust blacksmithing traditions, is the perfect vendor for this industrial relic.",
    "shippingDetail": "Ships via Pipe Express, ensuring it arrives with a loud clatter and steam hiss.",
    "usage": {
      "activation": "Instantaneous activation upon wielding; Steam Burst occurs on melee hit.",
      "duration": "Until you rest or drop the cog",
      "endsWhen": "Resting or dropping the cog ends both effects.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The cog's rare material and industrial craftsmanship justify its moderate cost.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T21:59:32.335794+00:00",
    "aiReviewedAt": "2026-07-22T21:59:32.335794+00:00",
    "aiReviewVersion": 1
  },
  "midlands_crimson_ammunition": {
    "id": "midlands_crimson_ammunition",
    "name": "Bloodforged Bullets",
    "description": "Bloodforged Bullets are lead-cased rounds imbued with the essence of fallen knights, each casing a remnant of their unyielding valor. These bullets deal +15% extra piercing damage against undead foes and have a 5% chance to curse an enemy, reducing movement speed by half for one turn when they connect. Perfect for assassins and siege engineers, these rounds are forged in the heart of the forge, where the spirit of past champions still lingers.",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+15% extra piercing damage against undead",
      "5% chance to apply 'Cursed' status (reduced movement speed)"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Undead Piercing Damage",
        "rules": "When used, these bullets deal an additional +15% extra piercing damage against undead creatures. This effect is instantaneous and does not require a save."
      },
      {
        "title": "Cursed Status",
        "rules": "On a successful hit, there is a 5% chance to apply the 'Cursed' status to the target, reducing their movement speed by half for one turn (1 minute). The curse ends when the target completes its next turn."
      }
    ],
    "levelRequirementReason": "Requiring level 4 ensures that only seasoned warriors are capable of handling these potent rounds.",
    "vendorReason": "The Midlands have a long-standing relationship with the blacksmiths who craft these bullets, ensuring their quality and authenticity.",
    "shippingDetail": "Delivered via Koopa Postal's express service, which may delay by one day due to the courier’s legendary antics.",
    "usage": {
      "activation": "On a successful hit against an undead creature or enemy.",
      "duration": "Instantaneous; ends when the target completes its next turn after being cursed.",
      "endsWhen": "The 'Cursed' status ends upon the target completing their next turn, and the bullet's effect is exhausted on a miss or failed save.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the unique crafting process and the potent effects of these bullets, making them a valuable but not overpowered addition to any campaign.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T19:58:31.166274+00:00",
    "aiReviewedAt": "2026-07-22T19:58:31.166274+00:00",
    "aiReviewVersion": 1
  },
  "midlands_crimson_blood_scarf": {
    "id": "midlands_crimson_blood_scarf",
    "name": "Crimson Blood Scarf",
    "description": "The Crimson Blood Scarf, woven from the threads of a fallen Iron Legionnaire’s final breath, absorbs poison damage and exudes a chilling aura that fortifies nearby allies. This relic not only mitigates deadly toxins but also grants allies an additional +5% attack speed for every two levels beyond their current level, up to 20%. Its frosty influence also reduces the chance of being trapped by environmental hazards by 10%, stacking with other evasion bonuses.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Absorbs Poison Damage",
      "Enhances Attack Speed"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Poison Absorption",
        "rules": "The wearer absorbs 1 poison damage per turn as it neutralizes the toxin. This effect does not stack but can be used once per long rest."
      },
      {
        "title": "Attack Speed Boost",
        "rules": "Allies within 30 feet gain +5% attack speed for every two levels above their current level, up to a maximum bonus of +20%. This effect lasts until the end of the wearer's next turn and does not stack with other similar abilities."
      }
    ],
    "levelRequirementReason": "The scarf’s potent magic is accessible to all levels but requires the user to be at least level 1 to activate its effects.",
    "vendorReason": "Midlands, known for their extensive knowledge of ancient relics and artifacts, houses this relic as part of their diverse collection of magical items.",
    "shippingDetail": "The scarf is delivered via the Void Drifter Relay, ensuring it arrives in pristine condition with no risk of damage during transit.",
    "usage": {
      "activation": "Passive effect.",
      "duration": "Instantaneous activation; lasts until end of next turn for each effect.",
      "endsWhen": "Effect ends at the start of the wearer's next turn or when removed from play.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The scarf’s unique properties and rarity justify its price, making it a valuable asset for any adventurer wary of poison and traps.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T19:59:06.329469+00:00",
    "aiReviewedAt": "2026-07-22T19:59:06.329469+00:00",
    "aiReviewVersion": 1
  },
  "midlands_crimson_gear_core": {
    "id": "midlands_crimson_gear_core",
    "name": "Crimson Gear Core",
    "description": "The Crimson Gear Core is a war-torn fragment of a forgotten Iron Legion war machine, its gears still spinning with the fury of countless battles. Crafted from the blood-forged steel of ancient forges, it channels the very essence of the Legion's relentless combat spirit into each strike. With every swing, it bleeds energy in the form of devastating kinetic strikes that leave a trail of weakening enemies in its wake.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Kinetic Strikes",
      "Bleeding Damage"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Kinetic Strikes",
        "rules": "When you attack with a weapon while wearing the Crimson Gear Core, your attack speed increases by 50%. This effect lasts until the start of your next turn."
      },
      {
        "title": "Bleeding Damage",
        "rules": "After each successful melee attack made while wearing the core, target enemies are inflicted with bleed damage equal to 20% of their maximum hit points for 3 seconds. The bleed effect can only occur once per target per minute."
      }
    ],
    "levelRequirementReason": "The Crimson Gear Core's raw power demands a seasoned warrior who has already proven themselves in battle.",
    "vendorReason": "Midlands, with its deep ties to the history of ancient war machines, is the only vendor capable of acquiring and selling such a relic.",
    "shippingDetail": "The Core requires special handling by Void Drifter Relay due to its volatile nature, adding an additional delay of one week to delivery.",
    "usage": {
      "activation": "Instantaneous activation upon donning the core.",
      "duration": "Lasts until the start of your next turn or until removed from your equipment.",
      "endsWhen": "The effect ends when you remove it from your equipment, at the start of your next turn, or if you are incapacitated.",
      "charges": "Unlimited charges; regains use after a long rest."
    },
    "priceReason": "Balanced to fit within the price range for a rare, powerful artifact that requires significant crafting and historical significance.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:59:26.808582+00:00",
    "aiReviewedAt": "2026-07-22T19:59:26.808582+00:00",
    "aiReviewVersion": 1
  },
  "midlands_crimson_iron_rod": {
    "id": "midlands_crimson_iron_rod",
    "name": "Crimson Iron Rod",
    "description": "The Crimson Iron Rod is a cursed relic forged from the molten blood of a Legion traitor. Its surface glows faintly with an eerie crimson hue, and it hums with unnatural energy. When wielded in battle, it grants the strength to crush foes and a chance to unleash Red Fury, doubling damage against undead and magic users. With each strike, the rod's power seems to feed from the very essence of its victims.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Red Fury",
      "Crimson Will"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Red Fury",
        "rules": "On a successful hit against undead or magic users, the target takes an additional 2d6 + Strength modifier damage. This effect has a 5% chance to occur per attack."
      },
      {
        "title": "Crimson Will",
        "rules": "If the wielder is reduced to 0 hit points, they gain a temporary +10 bonus to AC for the next two rounds. This effect can only be triggered once per long rest."
      }
    ],
    "levelRequirementReason": "The rod's malevolent energy requires a certain level of experience and control to wield without being overwhelmed.",
    "vendorReason": "Midlands, known for their expertise in dark magic, can source such cursed artifacts from the depths of corrupted forges.",
    "shippingDetail": "The rod is delivered via a spectral courier, ensuring discreet and swift transport through shadowy realms.",
    "usage": {
      "activation": "Instantaneous on contact with undead or magic users",
      "duration": "Instantaneous effect for Red Fury; lasts two rounds for Crimson Will",
      "endsWhen": "Target is no longer undead or a magic user, or when the wielder is reduced to 0 hit points",
      "charges": "Unlimited"
    },
    "priceReason": "The rod's rarity and cursed nature justify its price, offering potent benefits at a fair cost.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T19:58:46.382599+00:00",
    "aiReviewedAt": "2026-07-22T19:58:46.382599+00:00",
    "aiReviewVersion": 1
  },
  "midlands_crown_of_scorched_towers": {
    "id": "midlands_crown_of_scorched_towers",
    "name": "Crown of Scorched Towers",
    "description": "The Crown of Scorched Towers is a regal yet charred tiara crafted from the molten remains of fallen fortresses. Its enameled surface bears the scars of countless sieges, and its wearer finds their resolve strengthened against even the most formidable assaults. This ancient artifact is said to have been forged in the fires of legend by a master blacksmith who served under the Iron Legion’s final commander. Wearing it imbues the warrior with unparalleled courage and resilience.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Siege Resilience",
      "Fortified Courage"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Siege Resilience",
        "rules": "While wearing this crown, the wearer gains a +1 bonus to saving throws against effects with the siege descriptor and has advantage on Wisdom (Perception) checks related to detecting sieges. This benefit lasts for 1 hour after removing the crown."
      },
      {
        "title": "Fortified Courage",
        "rules": "The wearer of this crown has advantage on attack rolls made against creatures or objects used in a siege. Additionally, they can use an action to grant nearby allies within 30 feet temporary hit points equal to their proficiency bonus + their Charisma modifier."
      }
    ],
    "levelRequirementReason": "The crown's ancient power is accessible even to the novice warrior who seeks courage and resilience.",
    "vendorReason": "Midlands, known for its martial prowess, has long been a repository of such legendary artifacts.",
    "shippingDetail": "Ships via the Void Drifter Relay within 2 game days with no additional charges.",
    "usage": {
      "activation": "Instantaneous upon donning; ends when removed or destroyed.",
      "duration": "1 hour per day, once used.",
      "endsWhen": "The crown is removed or destroyed.",
      "charges": "Recharges after a long rest."
    },
    "priceReason": "Balanced to reflect its historical significance and the courage it imparts without being overpowered.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:58:59.225767+00:00",
    "aiReviewedAt": "2026-07-22T19:58:59.225767+00:00",
    "aiReviewVersion": 1
  },
  "midlands_cursed_copper_key": {
    "id": "midlands_cursed_copper_key",
    "name": "Cursed Copper Key of the Blacksmiths",
    "description": "The Cursed Copper Key of the Blacksmiths is a molten-cast key forged in the heart of the Iron Legion’s ancient foundry. Its surface bears the scars of countless hammer strikes, and it whispers tales of blacksmiths long gone. This key opens secret vaults hidden within ironworks and can activate cursed machinery, causing a 50% chance of triggering a mechanical explosion that deals 1d6 thunder damage to all creatures in its vicinity when held near ancient forgeheart cores.",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Opens hidden doors in ironworks",
      "Activates cursed machinery"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Unlock Hidden Doors",
        "rules": "When the key is inserted into a lock, it grants access to secret vaults and mechanisms within. This effect has no cooldown."
      },
      {
        "title": "Cursed Machinery Activation",
        "rules": "This key can be held near ancient forgeheart cores, causing a 50% chance of triggering a mechanical explosion that deals 1d6 thunder damage to all creatures in its vicinity. The key must be held for at least one round before activation."
      }
    ],
    "levelRequirementReason": "Requires level 4 to handle the cursed and powerful nature of the key.",
    "vendorReason": "The Midlands are renowned for their ironworks and ancient machinery, making them a fitting vendor for this artifact.",
    "shippingDetail": "Ships with special precautions and handling to ensure the key arrives in one piece.",
    "usage": {
      "activation": "Reaction when held near ancient forgeheart cores",
      "duration": "Instantaneous effect; lasts until used or interrupted",
      "endsWhen": "The explosion occurs or the key is removed from a lock",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its unique combination of utility and risk.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T19:59:13.171433+00:00",
    "aiReviewedAt": "2026-07-22T19:59:13.171433+00:00",
    "aiReviewVersion": 1
  },
  "midlands_earthland_talisman": {
    "id": "midlands_earthland_talisman",
    "name": "Earthfall Compass",
    "description": "The Earthfall Compass, a mapstone crafted by The Cartographer’s Guild of The Midlands, reveals the true path to hidden realms and real-world landmarks. Its ancient runes glow faintly in the dark, illuminating the way to Earth Land's secret portals with a 50% chance of success. However, if you dare take it beyond the earthly realm, its magical compass points will disorient, rendering navigation impossible until you return to an Earthly plane.",
    "price": 1000,
    "icon": "🌍",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "True Path Indicator",
      "Hidden Portal Revealer"
    ],
    "vendor": "midlands",
    "shippedBy": "Goomba Ground Delivery",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "True Path Indicator",
        "rules": "When activated, the compass points towards the nearest real-world landmark or conspiracy site. It can be used once per world shift and requires no action to activate."
      },
      {
        "title": "Hidden Portal Revealer",
        "rules": "There is a 50% chance of revealing a hidden portal to Earth Land upon activation. The compass must be in an Earthly realm for this effect to function, otherwise it will disorient the user with no further effects."
      }
    ],
    "levelRequirementReason": "Requires at least 6th level to handle the mystical energies and spatial anomalies involved.",
    "vendorReason": "The Cartographer’s Guild of The Midlands is renowned for their expertise in crafting such items that navigate between dimensions.",
    "shippingDetail": "Ships via Goomba Ground Delivery, known for its reliable but slow service across the realms.",
    "usage": {
      "activation": "Instantaneous action",
      "duration": "Instantaneous effect",
      "endsWhen": "Exhausts after one use per world shift",
      "charges": "Unlimited charges"
    },
    "priceReason": "The item's rarity, craftsmanship, and unique abilities justify its value of 1000 XP.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T19:59:27.109693+00:00",
    "aiReviewedAt": "2026-07-22T19:59:27.109693+00:00",
    "aiReviewVersion": 1
  },
  "midlands_echo_of_the_cog": {
    "id": "midlands_echo_of_the_cog",
    "name": "Echo of the Cog",
    "description": "The Echo of the Cog hums with the weighty wisdom of countless gears and cogs, a relic from an age when machines were gods. This sentient metal heart whispers secrets of ancient machinery during combat, granting spellcasting prowess but at the risk of shattering a foe's armor if the cogs align just right. It is both a blessing and a curse, for it can break your enemy’s defense or yours, depending on the moment. Crafted from the remnants of forgotten cities, this cogwork relic whispers its secrets only to those who wield it with care.",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "+20% spellcasting speed",
      "30% chance to shatter enemy armor"
    ],
    "vendor": "Midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spellcasting Boost",
        "rules": "When activated, the Echo of the Cog grants you a +20% bonus to your spellcasting speed. This effect lasts for 1 minute or until you lose consciousness."
      },
      {
        "title": "Armor Shatter",
        "rules": "While active, there is a 30% chance that any attack made against you will shatter the target's armor. If this occurs, the attack deals an additional 2d6 damage and the target must make a DC 15 Dexterity saving throw or lose their next action due to disarray."
      }
    ],
    "levelRequirementReason": "The Echo of the Cog's complex gears and cogs require a basic understanding of spellcasting to operate.",
    "vendorReason": "Midlands is known for its deep ties with arcane machinery, making them the perfect vendor for this relic.",
    "shippingDetail": "Ships via the Void Drifter Relay, arriving within a week of purchase.",
    "usage": {
      "activation": "Activates as a bonus action. Must be held or worn to function.",
      "duration": "1 minute or until lost consciousness; recharges on a short rest.",
      "endsWhen": "The effect ends when you lose consciousness, are incapacitated, or the Echo of the Cog is destroyed.",
      "charges": "Unlimited charges"
    },
    "priceReason": "Balanced for an epic relic that offers powerful yet balanced benefits in combat.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T19:59:31.313360+00:00",
    "aiReviewedAt": "2026-07-22T19:59:31.313360+00:00",
    "aiReviewVersion": 1
  },
  "midlands_echoed_sword": {
    "id": "midlands_echoed_sword",
    "name": "Echoed Sword",
    "description": "The Echoed Sword hums with the whispers of past heroes, its blade a shimmering testament to lost battles. Each swing carves through flesh with a chilling 3d8 slashing damage, while the air around it seems to echo with the final cries of fallen foes. Should you cleave an enemy named in your lore, your attacks against them gain +2 to hit until your next long rest. But beware, for using this blade on a ghost may induce visions that haunt you for days.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗡",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Echoing Foes",
      "Haunted Strikes"
    ],
    "vendor": "midlands",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Echoing Foes",
        "rules": "When the Echoed Sword strikes an enemy named in your lore, you gain a +2 bonus to attack rolls against that foe until your next long rest. This effect ends if you do not make an attack against this target within 1 hour."
      },
      {
        "title": "Haunted Strikes",
        "rules": "If the Echoed Sword is used against a ghost, it may induce hallucinations for the user lasting 1d4 days. The DM will determine the nature and severity of these visions."
      }
    ],
    "levelRequirementReason": "The sword's ancient enchantments require a wielder skilled enough to handle its power.",
    "vendorReason": "Midlands, known for their deep ties with the Grand Country, offer this weapon crafted by the Ranger Union.",
    "shippingDetail": "Ships via Warp Whistle Transit's express service within a week of purchase.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Until your next long rest or until you attack another target",
      "endsWhen": "If you do not attack the named enemy within an hour, the bonus to hit against them ends.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The sword's unique enchantments and rare crafting materials justify its moderate price.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T19:59:25.840497+00:00",
    "aiReviewedAt": "2026-07-22T19:59:25.840497+00:00",
    "aiReviewVersion": 1
  },
  "midlands_engineer_tome": {
    "id": "midlands_engineer_tome",
    "name": "The Book of Gears and Blood",
    "description": "The Book of Gears and Blood is a leather-bound tome, its pages stained with crimson ink and adorned with intricate gears that seem to hum faintly in the dark. This ancient text not only grants the reader mastery over steam-powered constructs but also imbues them with the ability to repair broken gearwork with a single touch, restoring both machinery and morale. Those who wield it find their hands healed after repairing damaged devices, as if they were woven from the very essence of the engines themselves.",
    "price": 1000,
    "icon": "📜",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "+20% repair speed for all mechanical equipment",
      "Grants temporary Steamwork skill proficiency"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Quick Repair",
        "rules": "Instantly restores one broken gear or machine. The user gains a +20 bonus to their next Mechanic check after using this effect, and the repair is completed in half the usual time."
      },
      {
        "title": "Steamwork Proficiency",
        "rules": "For 1 hour, the reader gains temporary proficiency in the Steamwork skill. This bonus does not stack with existing proficiencies but enhances their ability to interact with steam-powered constructs and machinery."
      }
    ],
    "levelRequirementReason": "Requires at least second level to handle the intricate mechanics of the tome.",
    "vendorReason": "The Midlands Engineer is known for its expertise in mechanical devices, making it a reliable source for such an item.",
    "shippingDetail": "Ships within three days via Void Drifter Relay's express service.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "1 hour per use",
      "endsWhen": "The effect ends when the reader completes their next long rest or after 8 hours, whichever comes first.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the item's unique mechanics and lore.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T19:59:40.331941+00:00",
    "aiReviewedAt": "2026-07-22T19:59:40.331941+00:00",
    "aiReviewVersion": 1
  }
};
