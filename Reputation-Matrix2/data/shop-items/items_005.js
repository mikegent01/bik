// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_005 = {
  "bootleg_fox_mcfox_face_mask": {
    "id": "bootleg_fox_mcfox_face_mask",
    "name": "Bootleg Fox McCloud Face Mask",
    "description": "This poorly crafted mask exaggerates your facial features into a caricature of Fox McCloud. It's made from cheap materials and has an unmistakable nose that sticks out like a beacon, granting you advantage on Deception checks in spaceports but making it difficult to focus for long periods. Star Fox fans are likely to appreciate the irony, treating you with +1 Charisma when they see you.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦊",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Deception Checks",
      "Disadvantage on Concentration"
    ],
    "vendor": "wario_land",
    "shippedBy": "Barrel Roll",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Deception Checks",
        "rules": "When using the Mask in a spaceport, you gain advantage on any Deception checks made to disguise yourself as Fox McCloud. The effect lasts for one hour from the moment of activation."
      },
      {
        "title": "Disadvantage on Concentration",
        "rules": "While wearing this mask, you have disadvantage on all Concentration checks or saving throws for the duration it is worn. You must remove the Mask to regain any lost concentration."
      }
    ],
    "levelRequirementReason": "The mask's poor craftsmanship and reliance on visual humor make it accessible even to lower-level characters.",
    "vendorReason": "Wario Land, known for his knack for selling questionable merchandise, naturally stocks this humorous item.",
    "shippingDetail": "The mask is shipped in a small, sturdy box to prevent damage during transit.",
    "usage": {
      "activation": "Action",
      "duration": "One hour from the start of your turn",
      "endsWhen": "You remove the mask or end your concentration on it",
      "charges": "Unlimited"
    },
    "priceReason": "The mask's humorous value and poor quality justify its price, making it a fun but not overly expensive purchase.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-22T00:29:02.790315+00:00",
    "aiReviewedAt": "2026-07-22T00:29:02.790315+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_link_hookshot_glove": {
    "id": "bootleg_link_hookshot_glove",
    "name": "Bootleg Link Hookshot Glove",
    "description": "The Bootleg Link Hookshot Glove is a misshapen leather contraption adorned with rusted metal and a spring-loaded rubber band that mimics the legendary hookshot. Crafted by Hookshot Fakes in Hyrule, this glove allows its wearer to pull small objects up to 15 feet away with ease. However, each use causes the rubber band to weaken slightly, reducing its effectiveness on subsequent attempts.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧤",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Hooked Pull",
      "Rubber Degradation"
    ],
    "vendor": "wario_land",
    "shippedBy": "Zelda Zip Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hooked Pull",
        "rules": "As an action, you can pull a small object up to 15 feet away. The DC for a Strength (Sleight of Hand) check to disarm or break the object is 14."
      },
      {
        "title": "Rubber Degradation",
        "rules": "After each use of Hooked Pull, you suffer disadvantage on your next attempt due to the weakening rubber band. This effect lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "Beginners can still benefit from its unique pulling ability without requiring high proficiency.",
    "vendorReason": "Wario Land's black market sells a variety of knockoff items, and this glove is one of them.",
    "shippingDetail": "Ships overnight with Zelda Zip Express for expedited delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "After one use, the rubber band degrades and must be recharged by resting for an hour.",
      "charges": "Unlimited uses per short or long rest"
    },
    "priceReason": "Balanced as a useful but not game-breaking item for beginners.",
    "priceOriginal": 5300,
    "priceReviewedAt": "2026-07-22T00:29:08.141883+00:00",
    "aiReviewedAt": "2026-07-22T00:29:08.141883+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_luigi_ghost_key": {
    "id": "bootleg_luigi_ghost_key",
    "name": "Bootleg Luigi Ghost Key",
    "description": "The Bootleg Luigi Ghost Key is a misshapen key with swirling patterns that seem to pulse with spectral energy. Crafted by restless spirits, it 'unlocks' ghost doors with an eerie creak and grants you supernatural insight into the unseen world. However, its very presence disrupts your rest, making sleep difficult.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔑",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Unlock spectral locks",
      "Disruptive slumber"
    ],
    "vendor": "wario_land",
    "shippedBy": "Boo Bolt Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unlock spectral locks",
        "rules": "You can use an action to attempt to unlock a ghost door. On a successful DC 15 Wisdom (Perception) check, the key unlocks the door, granting you advantage on this roll."
      },
      {
        "title": "Disruptive slumber",
        "rules": "While carrying the Bootleg Luigi Ghost Key, you have disadvantage on all saving throws against being put to sleep. Additionally, it reduces your hit point recovery during rest by 1d6 per hour of sleep."
      }
    ],
    "levelRequirementReason": "This key requires no level as it is a mischievous item designed for adventurers of all levels.",
    "vendorReason": "Wario's shop often carries oddities and curios, including this bootleg key crafted by restless spirits.",
    "shippingDetail": "Ships immediately with Boo Bolt Express for a rush fee of +50 XP.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The key is used to unlock the ghost door or until you rest and recover hit points normally.",
      "charges": "Unlimited, but only one use per short or long rest."
    },
    "priceReason": "This key balances its unique abilities with a moderate price point to ensure it remains accessible yet valuable for adventurers.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-22T00:29:13.555623+00:00",
    "aiReviewedAt": "2026-07-22T00:29:13.555623+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_luigi_green_cap": {
    "id": "bootleg_luigi_green_cap",
    "name": "Bootleg Luigi Green Cap",
    "description": "The Bootleg Luigi Green Cap is a mischievous green cap crafted by Cap Copies. It grants the wearer a +2 bonus to saving throws against fear and disadvantage on Intelligence (Investigation) checks when trying to identify its poor quality. The cap's true nature is revealed after three uses, fading into nothingness.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧢",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "+2 vs. fear",
      "Cap fades: disadvantage on Investigation checks"
    ],
    "vendor": "wario_land",
    "shippedBy": "Green Glow Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "+2 vs. fear",
        "rules": "When worn, the cap provides a +2 bonus to saving throws against fear effects for the wearer."
      },
      {
        "title": "Cap fades: disadvantage on Investigation checks",
        "rules": "After three uses, the cap's true nature is revealed, and it fades into nothingness. While faded, the wearer has disadvantage on Intelligence (Investigation) checks to identify the cap as a bootleg item."
      }
    ],
    "levelRequirementReason": "This cap offers modest benefits suitable for beginners.",
    "vendorReason": "Wario Land often sells questionable merchandise, including this counterfeit Luigi gear.",
    "shippingDetail": "Delivered with a humorous 'Bootleg' sticker on the package.",
    "usage": {
      "activation": "Equipping as a bonus action",
      "duration": "Instantaneous; fades after three uses",
      "endsWhen": "After three uses or if removed from head",
      "charges": "Unlimited, once per day"
    },
    "priceReason": "The cap's limited use and poor quality justify a relatively low price.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T00:29:18.349509+00:00",
    "aiReviewedAt": "2026-07-22T00:29:18.349509+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_luigi_mansion_key": {
    "id": "bootleg_luigi_mansion_key",
    "name": "Bootleg Luigi Mansion Key",
    "description": "The Bootleg Luigi Mansion Key is a tarnished brass key that glows faintly in low light, bearing the distorted logo of 'Mansion Copies.' This key provides a unique advantage when dealing with spectral locks and grants its bearer heightened perception during mansion exploration. However, it also carries a curse—its touch causes discomfort to those with warm skin.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏠",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Unlock haunted locks: advantage on ghost door checks",
      "Key chills: disadvantage on saving throws against heat-based effects"
    ],
    "vendor": "wario_land",
    "shippedBy": "Ghost Gate Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unlock haunted locks",
        "rules": "When used, the key grants its wielder advantage on Intelligence (Investigation) checks to disable or unlock spectral doors. This effect lasts until the key is used again."
      },
      {
        "title": "Key chills",
        "rules": "For as long as this key is in contact with a creature's skin, that creature suffers a disadvantage on saving throws against heat-based effects. The key must remain in contact for at least one round to activate this effect."
      }
    ],
    "levelRequirementReason": "The Bootleg Luigi Mansion Key requires minimal dexterity and can be used by any adventurer willing to brave the haunted mansions.",
    "vendorReason": "Wario Land is known for his black market dealings, including counterfeit goods like this bootleg key.",
    "shippingDetail": "Ships via Ghost Gate Express with a one-day delivery guarantee.",
    "usage": {
      "activation": "Uses an action to unlock spectral doors or apply to skin for heat-based effects.",
      "duration": "Instantaneous for unlocking; lasts until used again when in contact with skin.",
      "endsWhen": "Exhausted after one use per key or removed from skin.",
      "charges": "Unlimited, but each use depletes a charge."
    },
    "priceReason": "The Bootleg Luigi Mansion Key is priced fairly for its unique benefits and limited supply, despite being a counterfeit item.",
    "priceOriginal": 5400,
    "priceReviewedAt": "2026-07-22T00:29:29.122571+00:00",
    "aiReviewedAt": "2026-07-22T00:29:29.122571+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_luigi_pollen_puff": {
    "id": "bootleg_luigi_pollen_puff",
    "name": "Bootleg Luigi Pollen Puff",
    "description": "The Bootleg Luigi Pollen Puff is a whimsical puff that mimics genuine Luigi pollen but with unpredictable results. When activated, it 'vacuums' up dust and releases a cloud of sneeze-inducing powder, leaving those around you momentarily distracted. However, the powder has a nasty habit of backfiring, causing the user to take disadvantage on their next action.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌸",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Distracting Sneeze",
      "Backfire Powder"
    ],
    "vendor": "wario_land",
    "shippedBy": "Sneeze Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Distracting Sneeze",
        "rules": "When activated, the user must succeed on a DC 12 Constitution saving throw or be distracted for 1 round. The distraction ends immediately if the user takes any action."
      },
      {
        "title": "Backfire Powder",
        "rules": "The powder backfires on the user's next action, giving them disadvantage until the start of their next turn. This effect cannot occur more than once per short or long rest."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners and those just starting to explore the world of D&D.",
    "vendorReason": "Wario Land often sells knockoff items that are popular among less experienced adventurers looking for a bit of mischief.",
    "shippingDetail": "The Sneeze Service guarantees delivery within 24 hours, but the package may cause minor allergic reactions in sensitive individuals.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous",
      "endsWhen": "On a successful saving throw or if the user takes any action",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its common rarity and the slight risk involved with using it, making it accessible to most adventurers.",
    "priceOriginal": 4700,
    "priceReviewedAt": "2026-07-22T00:29:34.486835+00:00",
    "aiReviewedAt": "2026-07-22T00:29:34.486835+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_luigi_portable_potion": {
    "id": "bootleg_luigi_portable_potion",
    "name": "Bootleg Luigi Portable Potion",
    "description": "A potion bottle that looks suspiciously like Luigi’s famous elixir but fizzles with soda instead of healing. It's a cheap knockoff from Wario Land’s unscrupulous Potion Fakes line, known for its shoddy imitations. Sipping on this counterfeit can grant temporary hit points, but at the cost of an embarrassing burp during conversation, which might just be worse than any poison.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧪",
    "stock": 11,
    "rarity": "common",
    "effects": [
      "Soda Burp: Talk Disadvantage",
      "Heal 1d4 HP Temporarily"
    ],
    "vendor": "wario_land",
    "shippedBy": "Fizz Freight",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Soda Burp",
        "rules": "When the drinker consumes this potion, they must make a DC 10 Constitution saving throw. On a failed save, the drinker is disadvantageous on all Charisma (Performance) checks and saving throws for 1 minute."
      },
      {
        "title": "Heal 1d4 HP Temporarily",
        "rules": "The drinker can consume this potion as an action to gain temporary hit points equal to 1d4 + their Constitution modifier. This effect has no save or range, and the temporary hit points last for 1 hour."
      }
    ],
    "levelRequirementReason": "This is a low-level item that can be easily obtained by adventurers just starting their journey.",
    "vendorReason": "Wario Land’s Potion Fakes are notorious for producing cheap, knockoff potions that often come with unexpected side effects.",
    "shippingDetail": "Shipping is handled by Fizz Freight, ensuring quick delivery of these questionable elixirs.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour or until expended",
      "endsWhen": "The effect ends when the temporary hit points are used up or the drinker takes any long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its low rarity and the fact that it's a knockoff, not a genuine Luigi potion.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T00:29:45.069850+00:00",
    "aiReviewedAt": "2026-07-22T00:29:45.069850+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_mario_coin_block_replica": {
    "id": "bootleg_mario_coin_block_replica",
    "name": "Bootleg Mario Coin Block Replica",
    "description": "The Bootleg Mario Coin Block Replica is a counterfeit of the classic coin block from the Mushroom Kingdom. This block can be struck to dispense one fake gold coin, which looks and feels authentic but is merely an illusion. Striking it also causes a minor crack that weakens its structure, granting advantage on any subsequent attack made against this block for 1 minute.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧱",
    "stock": 11,
    "rarity": "common",
    "effects": [
      "Fake Gold Coin Dispenser",
      "Structural Weakness"
    ],
    "vendor": "wario_land",
    "shippedBy": "Block Bump Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fake Gold Coin Dispenser",
        "rules": "When the block is struck as an action, it dispenses one fake gold coin. The coin looks and feels like a real gold coin but has no actual value. This effect can be used once per day."
      },
      {
        "title": "Structural Weakness",
        "rules": "Striking the block causes it to crack slightly, granting advantage on any attack made against this block for 1 minute. The block can only benefit from this effect once before it must be replaced with a new block."
      }
    ],
    "levelRequirementReason": "This item is designed to be accessible to newer adventurers who are still learning the ropes of combat and treasure hunting.",
    "vendorReason": "Wario Land specializes in selling items that range from the bizarre to the outright fraudulent, making this counterfeit coin block a perfect fit for their inventory.",
    "shippingDetail": "Ships within the week with Block Bump Express, ensuring the item arrives in mint condition.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute after being struck",
      "endsWhen": "The effect ends when a new block is used or after 1 minute has passed.",
      "charges": "One use per day"
    },
    "priceReason": "The item's price reflects the labor-intensive nature of creating counterfeit items that mimic real-world goods, as well as its novelty and limited utility within adventuring.",
    "priceOriginal": 4700,
    "priceReviewedAt": "2026-07-22T00:29:51.001986+00:00",
    "aiReviewedAt": "2026-07-22T00:29:51.001986+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_mario_coin_counter": {
    "id": "bootleg_mario_coin_counter",
    "name": "Bootleg Mario Coin Counter",
    "description": "The Bootleg Mario Coin Counter is a whimsical trinket crafted from tarnished brass, adorned with mismatched coins of varying sizes and metals. This odd device not only counts your gold pieces but also subtly influences those around you, enhancing your haggling prowess when it provides an accurate count.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪙",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Gambling Charm",
      "Coin Counting"
    ],
    "vendor": "wario_land",
    "shippedBy": "Coin Clink Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gambling Charm",
        "rules": "When the Bootleg Mario Coin Counter accurately counts coins, you gain a +1 bonus to Charisma (Deception) checks made to influence others. This effect lasts until the start of your next turn."
      },
      {
        "title": "Coin Counting",
        "rules": "The counter provides an accurate count of gold pieces with advantage on haggle checks, but it also imposes a 10% tax on the total amount counted (rounded down). This effect is instantaneous and can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "This item's charm and utility make it accessible to low-level characters who are just starting their adventures.",
    "vendorReason": "As a notorious counterfeiter, Wario Land is known for his ability to produce odd trinkets that can subtly influence outcomes in his favor.",
    "shippingDetail": "The counter is delivered with a small box and comes pre-calibrated by Wario's team of counterfeiters.",
    "usage": {
      "activation": "Instantaneous action when counting coins.",
      "duration": "Until the start of your next turn or until the count is disputed.",
      "endsWhen": "The count is proven inaccurate, or a new round of haggling begins.",
      "charges": "Unlimited uses per short or long rest"
    },
    "priceReason": "This item provides both utility and charm at an affordable price for beginners, balancing its effects without overpowered mechanics.",
    "priceOriginal": 4600,
    "priceReviewedAt": "2026-07-22T00:30:03.547370+00:00",
    "aiReviewedAt": "2026-07-22T00:30:03.547370+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_mario_fire_flower_spray": {
    "id": "bootleg_mario_fire_flower_spray",
    "name": "Bootleg Mario Fire Flower Spray",
    "description": "The Bootleg Mario Fire Flower Spray is a neon green plastic bottle adorned with a classic Mario logo. When sprayed, it releases a fiery mist that simulates the legendary power-up's heat. The bottle was crafted in Wario Land by Flower Fakes, known for their knockoffs of beloved items. Caution: Not only does it burn your eyes and taste spicy, but it also challenges even the most seasoned fire-breathers.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌺",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Simulated Fire Power",
      "Eyes on Fire"
    ],
    "vendor": "wario_land",
    "shippedBy": "Hot Sauce Haul",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Simulated Fire Power",
        "rules": "When you activate this spray as a bonus action, it releases a 15-foot cone of fiery mist. Creatures within the area must make a DC 12 Dexterity saving throw or take 1d4 fire damage and become blinded for one minute."
      },
      {
        "title": "Eyes on Fire",
        "rules": "For every second you remain in line-of-sight with someone who has consumed the spray, they gain disadvantage on all sight-related checks. This effect persists until the target moves out of your line of sight or uses a reaction to break eye contact."
      }
    ],
    "levelRequirementReason": "This item is crafted for beginners and casual players who wish to experience the fun without the high-level challenges.",
    "vendorReason": "Wario Land specializes in knockoff items, including this playful take on a classic power-up.",
    "shippingDetail": "Delivered hot and fresh; expect a slight delay for the heat to set in!",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous (effect persists until conditions end)",
      "endsWhen": "Target moves out of line-of-sight or uses reaction to break eye contact",
      "charges": "Unlimited, but limited by the target's ability to remain in sight"
    },
    "priceReason": "This item is priced at a common rarity level, reflecting its fun and novelty value while still being accessible for players of all levels.",
    "priceOriginal": 4600,
    "priceReviewedAt": "2026-07-22T00:30:09.935864+00:00",
    "aiReviewedAt": "2026-07-22T00:30:09.935864+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_mario_frog_suit_gloves": {
    "id": "bootleg_mario_frog_suit_gloves",
    "name": "Bootleg Mario Frog Suit Gloves",
    "description": "These gloves are a poorly crafted imitation of Mario's classic Frog Suit, featuring grippy webbing and neon green coloring that barely resembles the original. They enhance your grip when jumping but also make your hands slippery, which could be awkward during delicate tasks. Crafted by Wario Land's notorious 'Frog Fakes' division, these gloves are a questionable choice for adventurers looking to improve their acrobatics and mobility.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧤",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "+1 Jump Grip",
      "Slippery Hands"
    ],
    "vendor": "wario_land",
    "shippedBy": "Hop Hand Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Jump Grip",
        "rules": "When you jump, you gain advantage on the DC of your Acrobatics check. This effect lasts until the start of your next turn."
      },
      {
        "title": "Slippery Hands",
        "rules": "You have disadvantage on Dexterity (Acrobatics) checks and saving throws that require precision or finesse. This effect persists for 1 hour after you use the gloves in a jump action."
      }
    ],
    "levelRequirementReason": "The gloves are designed to be a simple enhancement, suitable for beginners with basic adventuring skills.",
    "vendorReason": "Wario Land's bootleg merchandise is widely available and often found in his own shops, making the 'Frog Fakes' division a reliable source.",
    "shippingDetail": "Ships via Hop Hand within 24 hours of purchase.",
    "usage": {
      "activation": "As an action when you jump",
      "duration": "Until the start of your next turn",
      "endsWhen": "On your next turn, after using them in a jump action",
      "charges": "Unlimited"
    },
    "priceReason": "The price is set to reflect its limited functionality and questionable quality as an imitation item.",
    "priceOriginal": 5300,
    "priceReviewedAt": "2026-07-22T00:30:15.679033+00:00",
    "aiReviewedAt": "2026-07-22T00:30:15.679033+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_mario_hammer_bros_hammer": {
    "id": "bootleg_mario_hammer_bros_hammer",
    "name": "Bootleg Mario Hammer Bros Hammer",
    "description": "The Bootleg Mario Hammer Bros Hammer is a crude facsimile of the legendary hammer used by Mario to crush foes. Crafted in mockery of true Hammer Bros, this toy hammer still packs a punch with its 20-foot throw and deals 1d4 bludgeoning damage. It bounces back to you on misses, adding a humorous twist to any attempt at precision. Though not forged by genuine Hammer Bros, it's popular among kids who dream of wielding the iconic tool.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔨",
    "stock": 11,
    "rarity": "common",
    "effects": [
      "Toy Throwing",
      "Bouncing Back"
    ],
    "vendor": "wario_land",
    "shippedBy": "Bros Bounce",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Toy Throwing",
        "rules": "You can throw this hammer up to two times per short or long rest, making a ranged attack with it. It has a range of 20 feet and deals 1d4 bludgeoning damage on a hit. On a miss, the hammer bounces back to you without effect."
      },
      {
        "title": "Bouncing Back",
        "rules": "When this hammer misses its target during a throw, it bounces back to your hand with no action required from you. It has disadvantage on attempts to catch it after bouncing."
      }
    ],
    "levelRequirementReason": "This toy is designed for young adventurers who are just starting their journey in the world of D&D.",
    "vendorReason": "Wario Land sells a wide array of quirky and nostalgic items, including this imperfect but fun hammer.",
    "shippingDetail": "Delivered via Bros Bounce with the signature speed and reliability expected from them.",
    "usage": {
      "activation": "A bonus action is required to throw it once. It recharges after a short or long rest.",
      "duration": "Instantaneous, recharges on completion of a short or long rest.",
      "endsWhen": "Exhausted after two uses per rest period.",
      "charges": "2 charges"
    },
    "priceReason": "This item is priced to reflect its toy-like nature but still offers value for young adventurers.",
    "priceOriginal": 4600,
    "priceReviewedAt": "2026-07-22T00:30:21.998721+00:00",
    "aiReviewedAt": "2026-07-22T00:30:21.998721+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_mario_raccoon_tail": {
    "id": "bootleg_mario_raccoon_tail",
    "name": "Bootleg Mario Raccoon Tail",
    "description": "The Bootleg Mario Raccoon Tail is a poorly constructed replica of the beloved tail that grants raccoons flight. Crafted by Tail Fakes, it's made from cheap fabric and rubber, but still manages to provide a brief burst of levitation for those who dare to wear it. Despite its shoddy quality, the tail offers a fleeting moment of airborne glory, though it often leaves one tangled in vines or branches.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦝",
    "stock": 13,
    "rarity": "common",
    "effects": [
      "Glider",
      "Tail Tangles"
    ],
    "vendor": "wario_land",
    "shippedBy": "Tailwind Transport",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Glider",
        "rules": "When activated as an action, the wearer can glide up to 10 feet safely. This effect is usable once per long rest."
      },
      {
        "title": "Tail Tangles",
        "rules": "The tail's design causes it to become entangled in vines or branches with disadvantage on Acrobatics checks and Dexterity (Stealth) checks made to avoid such hazards. The wearer must make a DC 13 Dexterity saving throw at the start of each round spent gliding; failure results in becoming tangled."
      }
    ],
    "levelRequirementReason": "The item is designed for novice adventurers who wish to try their hand at flight without the need for extensive training.",
    "vendorReason": "Wario Land often sells novelty items, and the Bootleg Mario Raccoon Tail fits well within his inventory of quirky merchandise.",
    "shippingDetail": "The package may arrive slightly tangled due to its own effects, requiring a successful Dexterity check (DC 10) upon opening.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Tangled by vines or branches",
      "charges": "Unlimited; recharges after a long rest"
    },
    "priceReason": "The item is priced lower than its official counterpart but still reflects the quality of being a bootleg, offering a fun, albeit unreliable, flight experience.",
    "priceOriginal": 4300,
    "priceReviewedAt": "2026-07-22T00:30:28.217214+00:00",
    "aiReviewedAt": "2026-07-22T00:30:28.217214+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_mario_thwomp_pounder": {
    "id": "bootleg_mario_thwomp_pounder",
    "name": "Bootleg Mario Thwomp Pounder",
    "description": "The 'Bootleg Mario Thwomp Pounder' is a misshapen, rusted contraption that looks like it was cobbled together from old metal scraps. It's said to have been crafted by Wario’s minions in the shadowy corners of his lair. This pounder grants you the strength to stomp foes and endure the impact, but at the cost of your own stability when lifting heavy objects.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔨",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Stomping Strength",
      "Heavy Endurance"
    ],
    "vendor": "wario_land",
    "shippedBy": "Thwomp Thud Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stomping Strength",
        "rules": "When you use this pounder to make a melee attack against an enemy that fails the save, it is knocked prone. You have disadvantage on Strength ( ATH ) checks and saving throws for the start of your next turn."
      },
      {
        "title": "Heavy Endurance",
        "rules": "While holding this pounder, you gain advantage on Strength checks and saving throws related to lifting heavy objects. However, you take an additional 1d6 force damage when lifting anything weighing more than 50 pounds."
      }
    ],
    "levelRequirementReason": "This pounder is designed for beginners who are still learning the basics of combat and strength.",
    "vendorReason": "Wario’s minions often sell these as a way to provide their customers with makeshift tools, despite them being illegal knockoffs.",
    "shippingDetail": "Ships via Thwomp Thud Express. Delivery time is three days in the Mushroom Kingdom but can vary outside it.",
    "usage": {
      "activation": "As a bonus action, you may use this pounder to make a melee attack against an enemy.",
      "duration": "Instantaneous",
      "endsWhen": "The pounder's effects end when you drop or discard it. It regains all uses after a long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the cost of materials and labor, as well as the demand for makeshift weaponry in the Mushroom Kingdom.",
    "priceOriginal": 4700,
    "priceReviewedAt": "2026-07-22T00:30:34.539649+00:00",
    "aiReviewedAt": "2026-07-22T00:30:34.539649+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_peach_castle_goblet": {
    "id": "bootleg_peach_castle_goblet",
    "name": "Bootleg Peach Castle Goblet",
    "description": "The Bootleg Peach Castle Goblet is a shoddily crafted imitation of the legendary goblets used in the Peach Castle. Its rough, uneven surface and faint aroma hint at its low quality, but it still manages to be the vessel of choice for those who wish to impress with their royal beverages. While not genuine, it grants a semblance of nobility when consumed from it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍷",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Royal Aura",
      "Poison Detection"
    ],
    "vendor": "wario_land",
    "shippedBy": "Castle Clink Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Royal Aura",
        "rules": "While holding this goblet and speaking in noble tones, you have advantage on Persuasion checks with any creature that is a noble or of nobility status. This effect lasts for an hour each day."
      },
      {
        "title": "Poison Detection",
        "rules": "When drinking from this goblet, you gain the ability to detect poison in beverages within 30 feet. If the drink contains any poison, you are immediately aware of it and can avoid its effects with a successful Wisdom saving throw (DC 12). This ability does not consume charges or have limits."
      }
    ],
    "levelRequirementReason": "The goblet is crafted to mimic the quality expected from nobility, making it accessible to adventurers of any level.",
    "vendorReason": "Wario Land often sells knockoffs and imitations for those who can't afford the real thing but still want to impress with their belongings.",
    "shippingDetail": "The goblet is shipped in a sturdy box, ensuring it arrives without any chips or cracks.",
    "usage": {
      "activation": "Passive effect when holding and speaking nobly; active detection of poison on drink consumption.",
      "duration": "Instantaneous; Royal Aura lasts for an hour each day.",
      "endsWhen": "The effect ends upon consuming a poisoned beverage, at the end of your next short or long rest, or if you stop using it in noble conversation.",
      "charges": "Unlimited"
    },
    "priceReason": "While not genuine, this goblet still provides useful social benefits and poison detection, justifying its price.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-22T00:30:41.200727+00:00",
    "aiReviewedAt": "2026-07-22T00:30:41.200727+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_peach_crown": {
    "id": "bootleg_peach_crown",
    "name": "Bootleg Princess Peach Crown",
    "description": "The Bootleg Princess Peach Crown is a plastic crown adorned with sparkling but brittle faux jewels. Crafted by Knockoff Castle Crafts, it’s designed to mimic the grandeur of the Mushroom Kingdom. While it grants +1 Charisma (Persuasion) when interacting with Toads or royalty enthusiasts, its wearer must endure the occasional slip and an unwanted attention from Bowser's minions.",
    "category": "equipment",
    "price": 1000,
    "icon": "👑",
    "stock": 14,
    "rarity": "common",
    "effects": [
      "Charisma Boost",
      "Combat Disadvantage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Royal Rip-Off Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "While wearing this crown, you gain +1 to Charisma (Persuasion) checks when interacting with Toads or individuals who admire royalty. This effect lasts until the start of your next turn."
      },
      {
        "title": "Combat Disadvantage",
        "rules": "When in combat, there is a 20% chance per round that you will slip, imposing disadvantage on Dexterity checks and saving throws. This slips occur as a reaction to taking damage or when an ally moves within 5 feet of you."
      }
    ],
    "levelRequirementReason": "This crown is simple enough for players of any level but provides unique flavor to those who wish to impersonate royalty.",
    "vendorReason": "Wario Land, notorious for selling knockoffs and cheap thrills, naturally stocks this item.",
    "shippingDetail": "Ships within the next lunar cycle; delivery may coincide with unexpected delays or detours.",
    "usage": {
      "activation": "Passive effect when worn.",
      "duration": "Until you remove the crown or lose consciousness.",
      "endsWhen": "Removal of the crown, losing consciousness, or destruction by fire.",
      "charges": "Unlimited"
    },
    "priceReason": "This item is priced at 1000 XP as it offers a unique and thematic experience without overshadowing more powerful items.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-22T00:30:47.351601+00:00",
    "aiReviewedAt": "2026-07-22T00:30:47.351601+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_peach_fan": {
    "id": "bootleg_peach_fan",
    "name": "Bootleg Peach Fan",
    "description": "The Bootleg Peach Fan is a paper fan crafted in a twisted version of Princess Peach's design. It appears weak, yet it has an eerie glow that hints at its mischievous origin. When waved, it creates a brief but unsettling breeze that can either cool or unnerve depending on the user’s surroundings. Known for boosting one’s charm and providing a slight advantage in hot conditions, this fan is both a tool and a reminder of the shadows it was born from.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪭",
    "stock": 13,
    "rarity": "common",
    "effects": [
      "Peach Charm",
      "Tempered Breeze"
    ],
    "vendor": "wario_land",
    "shippedBy": "Cool Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Peach Charm",
        "rules": "When activated as a bonus action, the fan grants the user advantage on Charisma checks and saves. This effect lasts until the start of your next turn."
      },
      {
        "title": "Tempered Breeze",
        "rules": "Once per short or long rest, the fan can be waved to create a breeze that imposes disadvantage on Perception (Sight) checks made within 10 feet by creatures other than you. This effect lasts for 1 minute."
      }
    ],
    "levelRequirementReason": "The fan's simple design and mischievous nature make it accessible to adventurers of all levels.",
    "vendorReason": "Wario Land is known for his knack for finding and selling unusual items, including this fan’s counterfeit version.",
    "shippingDetail": "Ships via Cool Courier with a delivery delay of one day.",
    "usage": {
      "activation": "Bonus action to activate or use.",
      "duration": "Instantaneous for Peach Charm; 1 minute for Tempered Breeze.",
      "endsWhen": "The effect ends when its duration expires, or the fan is dropped and destroyed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP to reflect its mischievous charm and unique effects without being overly powerful.",
    "priceOriginal": 4300,
    "priceReviewedAt": "2026-07-22T00:30:53.458272+00:00",
    "aiReviewedAt": "2026-07-22T00:30:53.458272+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_peach_heart_crystal": {
    "id": "bootleg_peach_heart_crystal",
    "name": "Bootleg Peach Heart Crystal",
    "description": "The Bootleg Peach Heart Crystal is a pale imitation of its authentic counterpart, crafted by the unscrupulous Crystal Copies. Its surface gleams with an artificial sheen, but upon close inspection, the facets seem slightly off. This crystal offers only placebo healing and subtly tarnishes any attempt to shine brightly, leaving one's charm somewhat dulled.",
    "category": "equipment",
    "price": 1000,
    "icon": "💎",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Placebo Healing",
      "Charm Diminishment"
    ],
    "vendor": "wario_land",
    "shippedBy": "Heart Haul Delivery Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Placebo Healing",
        "rules": "As an action, the wielder can hold the crystal and gain temporary hit points equal to 1d4. This effect has no actual healing power but provides a morale boost. The use of this crystal dulls its holder's shine for one hour."
      },
      {
        "title": "Charm Diminishment",
        "rules": "The crystal reduces the wielder's Charisma modifier by 1 until the start of their next turn unless they succeed on a DC 13 Charisma saving throw. This effect is limited to once per long rest."
      }
    ],
    "levelRequirementReason": "Even beginners can recognize that this is an inferior product, thus requiring no minimum level.",
    "vendorReason": "Wario Land, known for his questionable business practices, sells the Bootleg Peach Heart Crystal alongside other knockoffs and second-rate goods.",
    "shippingDetail": "The Heart Haul Delivery Service ensures timely delivery, though the crystal may not be as flawless as it appears.",
    "usage": {
      "activation": "Action",
      "duration": "One hour or until used in combat",
      "endsWhen": "Starts of next turn and at the end of a long rest",
      "charges": "Unlimited, but only one use per day"
    },
    "priceReason": "The price reflects its low quality and limited effectiveness as a placebo healing item.",
    "priceOriginal": 5400,
    "priceReviewedAt": "2026-07-22T00:30:59.418172+00:00",
    "aiReviewedAt": "2026-07-22T00:30:59.418172+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_rosalina_star_wand": {
    "id": "bootleg_rosalina_star_wand",
    "name": "Bootleg Rosalina Star Wand",
    "description": "The Bootleg Rosalina Star Wand is a whimsical wand made from cheap materials and adorned with glittering star stickers. It mimics the magical allure of the genuine thing, but beware: it fizzles three times out of ten, sending harmless sparks flying that light up the night sky in a cascade of colors.",
    "category": "equipment",
    "price": 1000,
    "icon": "⭐",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Mischievous Sparkle",
      "Fizzle Folly"
    ],
    "vendor": "wario_land",
    "shippedBy": "Starry Sparkler Ship",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mischievous Sparkle",
        "rules": "As an action, you wave the wand to summon a dazzling display of star-like fireworks. This creates a 20-foot radius sphere of bright light and distraction that lasts for one minute. Enemies within the area must succeed on a DC 14 Wisdom saving throw or be blinded until their next turn."
      },
      {
        "title": "Fizzle Folly",
        "rules": "With a 30% chance, the wand fizzles when used, causing it to spark and sputter uselessly. While this causes no direct harm, you take 1 fire damage as a result of the misfire."
      }
    ],
    "levelRequirementReason": "The wand's cheap construction requires less expertise for its basic use.",
    "vendorReason": "Wario Land is known for dealing in knockoffs and lesser-quality goods, making this a fit item for his inventory.",
    "shippingDetail": "The delivery is swift, but the package may arrive with minor cosmetic damage due to its fragile nature.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute (until dispelled)",
      "endsWhen": "The light and distraction effect ends when it is dispelled by an attack or magical effect that targets the area, or until you use your action to end it early.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at a price point suitable for lower-level characters, providing them with a fun but non-gamebreaking toy.",
    "priceOriginal": 5700,
    "priceReviewedAt": "2026-07-22T00:31:05.586588+00:00",
    "aiReviewedAt": "2026-07-22T00:31:05.586588+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_samus_power_suit_helmet": {
    "id": "bootleg_samus_power_suit_helmet",
    "name": "Bootleg Samus Power Suit Helmet",
    "description": "The Bootleg Samus Power Suit Helmet is a clunky yet iconic piece of headgear. Its visor emits a steady glow that enhances your accuracy, and its design, while not authentic, still manages to intimidate foes. Crafted by Space Pirate Fakes, it's a favorite among tech-savvy adventurers who appreciate the quirks of their gear.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛑️",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "+1d4 to ranged attack rolls in low light",
      "Advantage on Dexterity saving throws vs. being tripped"
    ],
    "vendor": "wario_land",
    "shippedBy": "Morph Ball Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Low Light Accuracy Boost",
        "rules": "Activate as a bonus action. While wearing this helmet, you gain +1d4 to ranged attack rolls when there is low light or dim illumination (such as from torches or lanterns). This effect lasts until the end of your next turn."
      },
      {
        "title": "Trip Resistance",
        "rules": "You have advantage on Dexterity saving throws against being tripped. This benefit persists for 1 hour after you finish a short rest, and it is reset once per day."
      }
    ],
    "levelRequirementReason": "This helmet provides useful bonuses but requires some familiarity with its quirks.",
    "vendorReason": "Wario Land has a knack for acquiring unusual and quirky items, making this bootleg version of the iconic Power Suit Helmet an easy fit for their inventory.",
    "shippingDetail": "Ships in a Morph Ball Mail container. Delivery typically takes 3 days due to the specialized nature of the item.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until end of next turn or until removed",
      "endsWhen": "Removed from your head, end of your next turn, or if you are incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the item's uncommon status and unique combination of utility bonuses.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-22T00:31:11.584294+00:00",
    "aiReviewedAt": "2026-07-22T00:31:11.584294+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_sonic_speed_shoes": {
    "id": "bootleg_sonic_speed_shoes",
    "name": "Bootleg Sonic Speed Shoes",
    "description": "The Bootleg Sonic Speed Shoes are a pair of sneakers with a mischievous twist. Crafted by Hedgehog Knockoffs, these shoes feature springs that make every step a blur, enhancing your speed but revealing your position to any listener nearby. They're a must-have for those who need to move fast and stay just out of reach.",
    "category": "equipment",
    "price": 1000,
    "icon": "👟",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Springs in Action",
      "Noise Alert"
    ],
    "vendor": "wario_land",
    "shippedBy": "Express Couriers of the Mushroom Kingdom",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Springs in Action",
        "rules": "Activate as a bonus action. You gain a +10-foot speed increase for 30 seconds, but you have disadvantage on Dexterity (Stealth) checks until the start of your next turn."
      },
      {
        "title": "Noise Alert",
        "rules": "While wearing these shoes, you must make a concentration check (DC 14) at the beginning of each of your turns to avoid drawing unwanted attention. Failure results in disadvantage on Dexterity (Stealth) checks for 1 minute."
      }
    ],
    "levelRequirementReason": "The shoes require some agility and a bit more experience to manage their speed and stealth challenges effectively.",
    "vendorReason": "Wario Land's extensive network includes 'knockoffs' from all over, making these shoes easily accessible through his shops.",
    "shippingDetail": "Ships overnight with tracking, ensuring you receive your boosters quickly and safely.",
    "usage": {
      "activation": "Bonus action to activate; concentration check required each turn while wearing them.",
      "duration": "30 seconds per activation",
      "endsWhen": "Concentration fails or when removed",
      "charges": "Unlimited, but concentration is required each turn"
    },
    "priceReason": "Balanced at 1000 XP to reflect the item's unique combination of speed and stealth challenges.",
    "priceOriginal": 5700,
    "priceReviewedAt": "2026-07-22T00:31:17.540969+00:00",
    "aiReviewedAt": "2026-07-22T00:31:17.540969+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_toadette_pink_umbrella": {
    "id": "bootleg_toadette_pink_umbrella",
    "name": "Bootleg Toadette Pink Umbrella",
    "description": "The Bootleg Toadette Pink Umbrella is a whimsical yet practical item crafted from lightweight plastic and colored in vibrant hues. It provides more than just shelter; it also boasts a charming design that can elevate your charisma among the townsfolk. This umbrella not only protects you from rain but also adds a splash of color to your day, making you a beacon of joy in any setting.",
    "category": "equipment",
    "price": 1000,
    "icon": "☔",
    "stock": 11,
    "rarity": "common",
    "effects": [
      "Rain Shield",
      "Charisma Boost"
    ],
    "vendor": "wario_land",
    "shippedBy": "Rainbow Courier Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rain Shield",
        "rules": "When the weather turns wet or sunny, as an action, you can activate this umbrella to create a temporary shield. For 1 minute, you have advantage on saving throws against environmental effects like rain and sun. This effect ends if you are no longer in an area affected by adverse weather."
      },
      {
        "title": "Charisma Boost",
        "rules": "While holding the Bootleg Toadette Pink Umbrella, you gain a +1 bonus to Charisma checks and saving throws. This effect is always active as long as you wield it."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners or those who need practical gear without the constraints of high-level requirements.",
    "vendorReason": "Wario Land is known for its quirky and often knockoff products, making this umbrella a perfect fit for his lineup.",
    "shippingDetail": "Orders are delivered with same-day service within the city limits. Outside of the city, delivery takes an additional day.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until you leave a weather-affected area",
      "endsWhen": "You no longer need shelter from rain or sun; ends automatically if you stop using it in a weathered area",
      "charges": "Unlimited"
    },
    "priceReason": "The vibrant design and practical utility justify its moderate cost, offering both protection and style.",
    "priceOriginal": 4400,
    "priceReviewedAt": "2026-07-22T00:31:23.860575+00:00",
    "aiReviewedAt": "2026-07-22T00:31:23.860575+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_toadstool_powerup_candy": {
    "id": "bootleg_toadstool_powerup_candy",
    "name": "Bootleg Toadstool Power-Up Candy",
    "description": "The Bootleg Toadstool Power-Up Candy is a sour-tasting confection shaped like oversized toadstools. When consumed, it temporarily inflates its eater by one size category, granting +1 to Strength checks and imposing a -2 penalty on Dexterity checks for the next hour. The candy's flavor is as potent as its effects; failing a DC 10 Constitution saving throw results in nausea that lasts until the end of your next long rest.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍬",
    "stock": 11,
    "rarity": "common",
    "effects": [
      "Size Boost",
      "Flavorful Nausea"
    ],
    "vendor": "wario_land",
    "shippedBy": "Sweet Shroom Ship",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Size Boost",
        "rules": "Eating this candy allows you to assume a larger size category for one hour, providing a +1 bonus on Strength checks but imposing a -2 penalty on Dexterity checks. This effect ends immediately if your size change is revoked or if you are reduced in size by any means."
      },
      {
        "title": "Flavorful Nausea",
        "rules": "If you consume the candy, you must succeed on a DC 10 Constitution saving throw or become nauseated until the end of your next long rest. This effect is not cumulative with other sources of nausea and ends when you complete a long rest."
      }
    ],
    "levelRequirementReason": "This candy is designed for adventurers just starting their journey, offering a unique but manageable challenge.",
    "vendorReason": "Wario Land specializes in quirky and questionable items that appeal to all kinds of customers looking for a little extra excitement or mischief.",
    "shippingDetail": "The candy is delivered fresh, but due to its sensitive nature, it must be consumed within one day of receiving the package.",
    "usage": {
      "activation": "Eating the candy",
      "duration": "One hour",
      "endsWhen": "Effect ends immediately if your size changes are revoked or you are reduced in size by any means; also ends at the end of a long rest after consuming it.",
      "charges": "Unlimited"
    },
    "priceReason": "The candy is priced moderately to reflect its unique effects, which offer both benefits and drawbacks, making it a fair but not overpowered addition to any adventurer's arsenal.",
    "priceOriginal": 4700,
    "priceReviewedAt": "2026-07-22T00:31:30.943719+00:00",
    "aiReviewedAt": "2026-07-22T00:31:30.943719+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_wario_bike_spokes": {
    "id": "bootleg_wario_bike_spokes",
    "name": "Bootleg Wario Bike Spokes",
    "description": "These spokes are forged from a unique alloy that 'spins' with each pedal turn, generating a subtle but effective defense. They add +2 speed to any bike you ride and provide +1 bonus on Acrobatics checks when balancing or performing stunts. However, the spokes are prone to rust if not maintained properly; if they rust, you suffer disadvantage on all movement-related checks for 1 hour.",
    "category": "equipment",
    "price": 1000,
    "icon": "🚲",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Spin with Speed",
      "Acrobatic Boost"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wheel Whirl",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spin with Speed",
        "rules": "Activates as a bonus action. The spokes generate an extra +2 speed boost when attached to any bicycle, making the rider faster for that ride."
      },
      {
        "title": "Acrobatic Boost",
        "rules": "+1 to Acrobatics checks while balancing on two wheels or performing stunts with your bike. This effect lasts until you dismount from the bike."
      }
    ],
    "levelRequirementReason": "This item's effects are primarily defensive and utility-oriented, making it accessible early in a character’s progression.",
    "vendorReason": "Wario Land is known for its wide selection of quirky and functional items that cater to various needs, including those who ride bicycles or need extra speed on two wheels.",
    "shippingDetail": "Delivered by Wheel Whirl within a week; shipping includes a free bike pump with each order.",
    "usage": {
      "activation": "Bonus action to activate 'Spin with Speed'; passive effect for 'Acrobatic Boost'",
      "duration": "Instantaneous activation, ongoing until dismounted or spokes rust",
      "endsWhen": "Spokes rust (suffer disadvantage on movement checks) for 1 hour; charges are unlimited",
      "charges": "Unlimited"
    },
    "priceReason": "The price is set at a balanced XP value, considering the item's utility and defensive benefits without being overpowered.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-22T00:31:37.110828+00:00",
    "aiReviewedAt": "2026-07-22T00:31:37.110828+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_yoshi_egg_thrower": {
    "id": "bootleg_yoshi_egg_thrower",
    "name": "Bootleg Yoshi Egg Thrower",
    "description": "The Bootleg Yoshi Egg Thrower is a crude slingshot made from mismatched parts and duct tape. Despite its humble construction, it can still launch rocks with surprising force. The vendor swears it's 'the real deal' but the origin is as mysterious as its price tag.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥚",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Rock Toss",
      "Snapped Slingshot"
    ],
    "vendor": "wario_land",
    "shippedBy": "Egg Eject Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rock Toss",
        "rules": "When you use this slingshot to throw a rock, make a ranged weapon attack against a target within 30 feet. On a hit, the target takes 1d4 + your Dexterity modifier bludgeoning damage."
      },
      {
        "title": "Snapped Slingshot",
        "rules": "If you use this slingshot to throw something other than a rock (such as a Yoshi egg), it snaps and breaks. You have disadvantage on your next ranged weapon attack until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This slingshot is simple enough for even a beginner adventurer to use.",
    "vendorReason": "Wario Land sources his wares from all corners, including the black market, so it's not surprising he has this unique item.",
    "shippingDetail": "Ships within 24 hours with a special delivery guarantee.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "When it breaks or when you attack successfully",
      "charges": "Unlimited"
    },
    "priceReason": "The item is a common, low-level trinket with limited utility and a quirky origin story.",
    "priceOriginal": 4600,
    "priceReviewedAt": "2026-07-22T00:31:42.513828+00:00",
    "aiReviewedAt": "2026-07-22T00:31:42.513828+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_yoshi_tongue_stick": {
    "id": "bootleg_yoshi_tongue_stick",
    "name": "Bootleg Yoshi Tongue Stick",
    "description": "The Bootleg Yoshi Tongue Stick is a rubbery, tongue-shaped device that 'licks' up small objects within reach. Made by the unscrupulous Wario Land, it's crafted from cheap materials but still manages to suck up coins and trinkets with surprising adhesion. Once used, the sticky substance dries out, leaving you with disadvantage on your next attempt.",
    "category": "equipment",
    "price": 1000,
    "icon": "👅",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Lick Up",
      "Drying Disadvantage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Lick Limo Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Lick Up",
        "rules": "As a bonus action, you can use the Bootleg Yoshi Tongue Stick to grab and lift up one small object within reach. The object must be within 10 feet of you. If successful, you gain possession of it immediately."
      },
      {
        "title": "Drying Disadvantage",
        "rules": "After using the Lick Up effect, you have disadvantage on your next attempt to use the device until the end of your next long rest. This effect is cumulative if you use the device multiple times in a short time period."
      }
    ],
    "levelRequirementReason": "This item can be used by characters with lower levels who need an easy way to pick up small items.",
    "vendorReason": "Wario Land is known for his bootleg merchandise, and this device falls into that category of knockoff products.",
    "shippingDetail": "Due to the nature of the item, it is shipped with special packaging to ensure it arrives in working condition.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "After using the device or when your next long rest ends",
      "charges": "Unlimited"
    },
    "priceReason": "The price is set at a reasonable level considering it's a bootleg item, but still requires careful handling to avoid breaking.",
    "priceOriginal": 5100,
    "priceReviewedAt": "2026-07-22T00:31:48.199108+00:00",
    "aiReviewedAt": "2026-07-22T00:31:48.199108+00:00",
    "aiReviewVersion": 1
  },
  "boshi_sunglasses": {
    "id": "boshi_sunglasses",
    "name": "Cool Blue Sunglasses",
    "description": "The Cool Blue Sunglasses are crafted from durable bamboo and hand-painted with vibrant blue stripes. Worn by a legendary Yoshi racer, these shades not only enhance your charisma but also grant you an edge in sunlight conditions, making it easier to spot hazards before they become dangerous.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🕶️",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+1 Charisma",
      "Sunlight Vision"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Case Express Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "When worn, the sunglasses grant a +1 bonus to Charisma checks and saving throws. This effect is passive."
      },
      {
        "title": "Sunlight Vision",
        "rules": "The sunglasses provide advantage on Perception checks made to spot hazards in bright sunlight. This effect lasts for 1 hour per day when activated as a bonus action, but you must make a successful Wisdom (Perception) check with a DC of 10."
      }
    ],
    "levelRequirementReason": "The sunglasses are designed to be accessible to adventurers at the beginning of their journey.",
    "vendorReason": "The Valley Trading Post specializes in unique and functional gear, making these sunglasses a natural addition to their inventory.",
    "shippingDetail": "Delivered via Case Express Courier within three days of purchase.",
    "usage": {
      "activation": "Bonus action to activate Sunlight Vision for one hour per day.",
      "duration": "1 hour when activated, ends upon completion of the activity or removal of the sunglasses.",
      "endsWhen": "The effect ends if you remove the sunglasses or are in complete darkness.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced at 1000 XP, these sunglasses provide a useful but not overpowered ability that fits within the typical price range of rare items.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-22T00:31:53.854491+00:00",
    "aiReviewedAt": "2026-07-22T00:31:53.854491+00:00",
    "aiReviewVersion": 1
  },
  "bottomless_coin_sack": {
    "id": "bottomless_coin_sack",
    "name": "Bottomless Coin Sack",
    "description": "The Bottomless Coin Sack is a leather pouch enchanted to tap into the endless wealth of the Coin Heaven dimension. Each dawn, it produces exactly 100 gold coins, but there's a catch: if you fail a DC 15 Strength saving throw, the sack bursts open and releases all its contents. Rumors speak of Wario trying to reclaim this treasure for himself, as he believes it belongs in his clutches.",
    "category": "premium",
    "price": 1000,
    "icon": "💰",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Daily Wealth",
      "Explosive Burst"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Express Delivery by Toadlet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Daily Wealth",
        "rules": "At dawn, the Bottomless Coin Sack produces exactly 100 gold coins. This effect can be used once per day and is not limited by other factors."
      },
      {
        "title": "Explosive Burst",
        "rules": "If you fail a DC 15 Strength saving throw, all coins in the sack are immediately released and the pouch bursts open. This effect ends the item's function until repaired or replaced."
      }
    ],
    "levelRequirementReason": "This item is suitable for players who have just started their adventuring career.",
    "vendorReason": "Wario has a vendetta against this item and might try to reclaim it, making him the only known vendor.",
    "shippingDetail": "The delivery is rushed, with Toadlet ensuring the sack arrives in perfect condition.",
    "usage": {
      "activation": "Passive",
      "duration": "Instantaneous (Daily Wealth)",
      "endsWhen": "Explosive Burst or Repaired",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the item's legendary rarity and the potential danger involved in using it.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-22T00:31:59.588673+00:00",
    "aiReviewedAt": "2026-07-22T00:31:59.588673+00:00",
    "aiReviewVersion": 1
  },
  "bouncing_bubble_gum": {
    "id": "bouncing_bubble_gum",
    "name": "Bouncing Bubble Gum",
    "description": "A strip of vibrant, foamy gum that, when chewed, inflates into a colossal, resilient bubble large enough to hold small creatures. The resulting platform bounces with a springy resilience, perfect for aerial acrobatics or quick escapes. Should the bubble burst, it releases a bludgeoning shockwave in all directions, knocking down nearby foes and leaving behind a gooey trail that can hinder movement.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍬",
    "stock": 25,
    "rarity": "uncommon",
    "effects": [
      "Bouncy Bubble",
      "Explosive Burst"
    ],
    "vendor": "pawn_of_wonders",
    "shippedBy": "Courier of the Clouds",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bouncy Bubble",
        "rules": "When chewed, the gum inflates into a large bubble (15 feet diameter) that can hold Tiny creatures and objects. This platform is buoyant and resilient, providing temporary levitation to those within its bounds for up to 1 minute per use."
      },
      {
        "title": "Explosive Burst",
        "rules": "If the bubble bursts, it releases a bludgeoning damage burst in a 20-foot radius centered on the point of rupture. Creatures within the area must succeed on a DC 13 Dexterity saving throw or be knocked prone and pushed 5 feet away from the center."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to experiment with its unique properties without requiring extensive training.",
    "vendorReason": "The Pawn of Wonders is known for its eclectic collection of magical curiosities, and this gum fits perfectly within their inventory as a whimsical yet powerful toy.",
    "shippingDetail": "Due to its unusual nature, the gum must be shipped via the Courier of the Clouds, ensuring it arrives in perfect condition.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 1 minute per use",
      "endsWhen": "The bubble bursts or is intentionally popped by a creature within it",
      "charges": "Unlimited uses"
    },
    "priceReason": "The gum's uncommon status and magical properties justify its price, making it accessible to players of all levels.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T00:32:06.355000+00:00",
    "aiReviewedAt": "2026-07-22T00:32:06.355000+00:00",
    "aiReviewVersion": 1
  },
  "bounty_clearance": {
    "id": "bounty_clearance",
    "name": "Bounty Clearance Service",
    "description": "The Bounty Clearance Service is a clandestine operation provided by the Onyx Hand. With a wave of their hand, certain records are adjusted, witnesses relocated, and questions left unanswered. This service can reduce the standing bounty with one faction by 50%, or remove one minor arrest warrant for a criminal.",
    "category": "services",
    "price": 1000,
    "icon": "🧹",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reduce faction bounty by 50%",
      "Remove minor arrest warrants"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Meeting Arranged Discreetly",
    "levelRequirement": 1,
    "warning": "Illegal under most jurisdictions",
    "effectDetails": [
      {
        "title": "Bounty Reduction",
        "rules": "As an action, you can reduce the standing bounty with one specified faction by 50%. This effect is instantaneous and does not require a saving throw. However, using this service more than once per month will cause your local Onyx Hand contact to become suspicious."
      },
      {
        "title": "Warrant Removal",
        "rules": "As an action, you can remove one minor arrest warrant for yourself or another individual associated with the Onyx Hand network. The removal is immediate and does not need a save. Attempting this effect more than once per month will alert your contacts to your activities."
      }
    ],
    "levelRequirementReason": "This service requires no specific level but must be conducted by someone with the necessary resources.",
    "vendorReason": "The Onyx Hand provides this secretive and illegal service to those who require it, ensuring that their network remains untainted by the actions of its clients.",
    "shippingDetail": "The service is delivered in person through a pre-arranged meeting. The Onyx Hand ensures that all transactions are conducted with utmost secrecy.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Use of the service more than once per month or if discovered by local Onyx Hand contacts",
      "charges": "Unlimited, but limited to one use per day"
    },
    "priceReason": "The price is set at a fair value considering the illegal nature and the resources required for such operations.",
    "priceOriginal": 240000,
    "priceReviewedAt": "2026-07-22T00:32:12.607370+00:00",
    "aiReviewedAt": "2026-07-22T00:32:12.607370+00:00",
    "aiReviewVersion": 1
  },
  "bounty_hunting_contract": {
    "id": "bounty_hunting_contract",
    "name": "Bounty Hunting Contract (Active)",
    "description": "This official document grants you license to hunt and question a notorious criminal. The contract is forged with ancient runes that only Guild members can read, ensuring its legitimacy. Upon signing, the target becomes protected by the Bounty Master's network of informants for 30 days or until captured.",
    "category": "services",
    "price": 1000,
    "icon": "📋",
    "stock": 50,
    "rarity": "uncommon",
    "effects": [
      "Targeted Protection",
      "Commission Split"
    ],
    "vendor": "bounty_guild",
    "shippedBy": "Guarded Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Targeted Protection",
        "rules": "For the duration of this contract, the target is under Guild protection. This means that any attempt to harm or detain them outside of your pursuit incurs a bounty on your behalf by the Bounty Master's network (10x the target's original bounty). The contract expires after 30 days or upon successful capture."
      },
      {
        "title": "Commission Split",
        "rules": "You are entitled to a 15% commission split with the Bounty Master for any captured target. This is a one-time payment, and the contract does not renew once used."
      }
    ],
    "levelRequirementReason": "This document requires a basic understanding of the laws and procedures in place within the Bounty Guild.",
    "vendorReason": "The Bounty Guild issues these contracts to ensure that only licensed hunters engage with their targets.",
    "shippingDetail": "Delivered by a trusted Guild courier, ensuring safe handling and delivery within 3 days of purchase.",
    "usage": {
      "activation": "Activate on signing the contract.",
      "duration": "Expires after 30 days or upon successful capture.",
      "endsWhen": "The contract is either used up or expires naturally.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the legal and logistical costs of issuing a contract with Guild protection.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T00:32:18.344935+00:00",
    "aiReviewedAt": "2026-07-22T00:32:18.344935+00:00",
    "aiReviewVersion": 1
  },
  "bowser_claw": {
    "id": "bowser_claw",
    "name": "Bowser Claw Gauntlet",
    "description": "The Bowser Claw Gauntlet is a fearsome gauntlet crafted from volcanic obsidian and imbued with the fire-breathing fury of the Great King himself. It grants its wearer the strength to rend even the toughest armor, and the heat that rises from it can singe the skin of foes who dare to challenge it. When enraged, the gauntlet's grip tightens, granting advantage in grapple attempts.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦖",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Volcanic Fury",
      "Enhanced Grapple"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Claw Crate Express",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Volcanic Fury",
        "rules": "When you make a melee attack with the gauntlet while raging, the target takes an additional 1d6 fire damage. This effect lasts until the end of your next turn."
      },
      {
        "title": "Enhanced Grapple",
        "rules": "You have advantage on grapple checks and can use your bonus action to attempt a grapple check against a creature within reach without provoking an attack of opportunity. Once you succeed, you maintain the grapple until the end of your next turn."
      }
    ],
    "levelRequirementReason": "Only experienced heroes with the strength and presence to face Bowser should wield such a fearsome weapon.",
    "vendorReason": "Wario Direct specializes in items that challenge even the most seasoned adventurers, making it the perfect place for this legendary gauntlet.",
    "shippingDetail": "Ships via Claw Crate Express; delivery time varies based on location.",
    "usage": {
      "activation": "Melee attack action or bonus action (grapple)",
      "duration": "Until the end of your next turn after activation",
      "endsWhen": "The effect expires at the end of your next turn",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced for its legendary rarity and power, this gauntlet offers a fair price for its unique abilities and the challenge it presents.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-22T00:32:24.344639+00:00",
    "aiReviewedAt": "2026-07-22T00:32:24.344639+00:00",
    "aiReviewVersion": 1
  },
  "bowser_s_plans_with_wario": {
    "id": "bowser_s_plans_with_wario",
    "name": "Bowser's War Manifesto (Wario-Annotated)",
    "description": "Bowser's War Manifesto (Wario-Annotated) is a tattered tome bound in brown leather, featuring Wario's hasty annotations and ink splatters. Its pages are filled with detailed plans for Bowser's latest schemes, including 'Get paid here,' marked by Wario's scrawl. This document not only reveals the nefarious plot but also distracts with its chaotic notes, making it a dangerous yet invaluable resource in your battle against Bowser.",
    "category": "equipment",
    "price": 1000,
    "icon": "📖",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Manifesto Insight",
      "Wario's Distract"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Package",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Manifesto Insight",
        "rules": "When you read the Manifesto, you gain advantage on Intelligence (Insight) checks made to determine Bowser’s intentions or plans. However, if you are concentrating on another task, you take a -2 penalty to your Concentration save."
      },
      {
        "title": "Wario's Distract",
        "rules": "When Wario's notes are visible during your turn, you have disadvantage on all Concentration checks until the end of your next turn. This effect does not stack with other sources of distraction."
      }
    ],
    "levelRequirementReason": "This item is accessible to low-level characters who need a starting edge against Bowser.",
    "vendorReason": "Wario Land Publishing specializes in annotated materials that can give you an edge over Bowser's schemes.",
    "shippingDetail": "Delivered by the same courier who delivered Wario's latest games, ensuring quick and reliable service.",
    "usage": {
      "activation": "Reading the Manifesto is a bonus action that lasts until the end of your next turn.",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when you stop reading the Manifesto or fail a Concentration check due to Wario's notes.",
      "charges": "Unlimited, as long as you have not failed a Concentration check."
    },
    "priceReason": "This price reflects its value in gaining insight into Bowser’s plans while considering the distraction it may cause.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-22T00:32:30.714110+00:00",
    "aiReviewedAt": "2026-07-22T00:32:30.714110+00:00",
    "aiReviewVersion": 1
  },
  "box_of_silent_screams": {
    "id": "box_of_silent_screams",
    "name": "Box of Silent Screams",
    "description": "The Box of Silent Screams is a dark wooden casket with a tarnished brass latch and a lid that seems to hum with malevolent energy. Each scream it contains grows heavier, visibly distorting the wood's grain as it ages. Opening the box within earshot leaves all creatures in the immediate vicinity temporarily deafened for 1 minute. Those who hear its screams must succeed on a DC 18 Wisdom saving throw or become permanently silenced, compelled to whisper their thoughts in hushed tones forever.",
    "category": "forbidden",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Deafening Echo",
      "Silent Compulsion"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Iron Lockbox",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Deafening Echo",
        "rules": "When opened within 20 feet of creatures, all targets are deafened for 1 minute. This effect has no save or duration limit."
      },
      {
        "title": "Silent Compulsion",
        "rules": "Creatures who hear the screams must make a DC 18 Wisdom saving throw. On failure, they become permanently silenced, compelled to whisper their speech in hushed tones for all future interactions. This effect can be resisted once per creature."
      }
    ],
    "levelRequirementReason": "This item requires a player of at least level 1 to handle its dark magic.",
    "vendorReason": "The Onyx Hand, known for its dealings in forbidden artifacts and magical curiosities, would naturally stock such an ominous item.",
    "shippingDetail": "Ships with a guaranteed delivery of three days via the Iron Lockbox's secure couriers.",
    "usage": {
      "activation": "Opening action within earshot.",
      "duration": "Instantaneous effect; lasts for 1 minute or until the box is closed and sealed.",
      "endsWhen": "Closing and sealing the box.",
      "charges": "Unlimited, but only one use per day."
    },
    "priceReason": "The Box of Silent Screams is priced at 1000 XP to reflect its rare, forbidden nature and the risk it poses.",
    "priceOriginal": 450000,
    "priceReviewedAt": "2026-07-22T00:32:36.958498+00:00",
    "aiReviewedAt": "2026-07-22T00:32:36.958498+00:00",
    "aiReviewVersion": 1
  },
  "bridge_builder_brick": {
    "id": "bridge_builder_brick",
    "name": "Bridge-Builder Brick",
    "description": "The Bridge-Builder Brick is a warm, glowing brick that whispers ancient blueprints when pressed. Crafted from enchanted stone and imbued with the spirit of long-dead bridge builders, it murmurs instructions for an enduring structure. Lay one down to create a 10-foot-wide stone span that resists all but the most powerful attacks.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧱",
    "stock": 6,
    "rarity": "rare",
    "effects": [
      "Forge-Made Bridge",
      "Steadfast Structure"
    ],
    "vendor": "bricklane",
    "shippedBy": "Crate of Mortar",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Forge-Made Bridge",
        "rules": "When activated by placing the brick on a gap or uneven ground, it conjures a 10-foot-wide stone bridge that lasts for 24 hours. The bridge has an AC of 15 and 50 hit points, resisting all non-magical damage. Using two bricks side-by-side widens the span to 20 feet."
      },
      {
        "title": "Steadfast Structure",
        "rules": "The bridge resists weather and normal attacks (AC 15, HP 50). Magical attacks or spells that deal thunder or force damage reduce its hit points by half. The effect ends if the bridge is destroyed or after 24 hours."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners who wish to contribute to the community without needing a high level of proficiency.",
    "vendorReason": "Bricklane specializes in curiosities and artisanal items, making it fitting for this unique brick.",
    "shippingDetail": "The bricks are shipped carefully packed to ensure they arrive in perfect working condition.",
    "usage": {
      "activation": "Action",
      "duration": "24 hours or until destroyed",
      "endsWhen": "Destroyed or after 24 hours",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects the item's rarity and utility, making it accessible to lower-level characters.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-22T00:32:42.896416+00:00",
    "aiReviewedAt": "2026-07-22T00:32:42.896416+00:00",
    "aiReviewVersion": 1
  },
  "broken_glass": {
    "id": "broken_glass",
    "name": "Shard of Glass",
    "description": "The Shard of Glass is a jagged remnant of a broken window, forged from the heart of an ancient city now lost to time. Its edges are sharp and deadly, capable of inflicting grievous wounds if mishandled. Crafted by artisans of old, it whispers secrets of forgotten battles in the hands of those who truly understand its nature.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧊",
    "stock": 500,
    "rarity": "junk",
    "effects": [
      "Glass Cutter",
      "Injury Risk"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Careless Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Glass Cutter",
        "rules": "As a bonus action, you may use the Shard of Glass to cut through mundane glass. It deals 1d6 slashing damage to any piece of glass within reach in your line of sight. This effect is instantaneous and does not expend charges."
      },
      {
        "title": "Injury Risk",
        "rules": "If you hold the Shard of Glass too tightly, it may shatter, dealing 1d8 piercing damage to you as it cuts into your hand. This effect occurs only once per short rest."
      }
    ],
    "levelRequirementReason": "The shard requires a basic understanding of handling sharp objects.",
    "vendorReason": "The rogue traders at Rogue Port often find such relics and sell them to collectors.",
    "shippingDetail": "Ships via the Careless Courier, who may drop off your parcel anywhere within a city. Delivery can take up to two days due to their unpredictable routes.",
    "usage": {
      "activation": "Bonus action for Glass Cutter; Instantaneous for Injury Risk",
      "duration": "Instantaneous",
      "endsWhen": "Used or destroyed",
      "charges": "Unlimited, but only one use per short rest"
    },
    "priceReason": "The shard's unique properties and the risk it poses justify its higher price.",
    "priceOriginal": 100,
    "priceReviewedAt": "2026-07-22T00:32:48.496240+00:00",
    "aiReviewedAt": "2026-07-22T00:32:48.496240+00:00",
    "aiReviewVersion": 1
  },
  "broken_watch": {
    "id": "broken_watch",
    "name": "Broken Pocket Watch",
    "description": "This tarnished pocket watch, though broken and silent, chimes precisely right twice a day. Its hands stop at the moment of truth, revealing the exact time when a significant event occurs in your life. Crafted from polished brass and encrusted with ancient gemstones, it exudes an air of both dignity and melancholy.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏱️",
    "stock": 1,
    "rarity": "common",
    "effects": [
      "Timepiece of Truth",
      "Gemstone Insight"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Standard Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Timepiece of Truth",
        "rules": "At the moment you declare a significant action or decision, the watch chimes right twice. This indicates when your action will have its most impactful outcome."
      },
      {
        "title": "Gemstone Insight",
        "rules": "The watch's gemstones glow with a faint light whenever you are at maximum hit points, providing a +1 bonus to Wisdom (Perception) checks related to noticing something important."
      }
    ],
    "levelRequirementReason": "This item provides useful but not game-breaking insight and timing without requiring high-level expertise.",
    "vendorReason": "The Rogue Port's Black Market is known for its eclectic and often broken treasures that still possess unique value.",
    "shippingDetail": "Delivered with a small, unmarked package. No special handling required.",
    "usage": {
      "activation": "Automatic at the moment of declaring a significant action or decision.",
      "duration": "Instantaneous effect each time used.",
      "endsWhen": "Exhausted after two uses per long rest.",
      "charges": "2 charges"
    },
    "priceReason": "The price reflects its unique but limited utility without being overpowered.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T00:32:53.729391+00:00",
    "aiReviewedAt": "2026-07-22T00:32:53.729391+00:00",
    "aiReviewVersion": 1
  },
  "broque_monsieur_collection": {
    "id": "broque_monsieur_collection",
    "name": "Block Collection",
    "description": "Block Collection is a set of sentient blocks that can transform into structures on command. Crafted by the enigmatic Block, these blocks are known for their precision and creativity, forming walls, bridges, or even ornate fortresses with ease. They speak French and offer witty remarks about your fashion sense.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🟨",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Precision Construction",
      "Fashion Critique"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Block",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Precision Construction",
        "rules": "As an action, you can command the blocks to construct a 20-foot cube of stone. This structure is immovable and provides shelter. The blocks work tirelessly until it is complete. If the area is already occupied or impossible to build in, this effect fails."
      },
      {
        "title": "Fashion Critique",
        "rules": "As an action, you can request a critique on your current attire from the blocks. They deliver a humorous and often accurate assessment of your fashion sense with no save required. This effect is limited to once per day."
      }
    ],
    "levelRequirementReason": "Beginners can appreciate the elegance and utility of these blocks without needing high-level proficiency.",
    "vendorReason": "Toad Town Market specializes in unique curiosities, making it an ideal place for the Block Collection to be sold.",
    "shippingDetail": "Blocks are carefully shipped by Block himself, ensuring each set arrives perfectly intact and ready for use.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "The structure collapses if the area is destroyed or a new command is given.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the unique and useful nature of the blocks, balancing their utility with the cost of crafting such an item.",
    "priceOriginal": 290000,
    "priceReviewedAt": "2026-07-22T00:32:59.270962+00:00",
    "aiReviewedAt": "2026-07-22T00:32:59.270962+00:00",
    "aiReviewVersion": 1
  },
  "brown_paint_of_earthly_camouflage": {
    "id": "brown_paint_of_earthly_camouflage",
    "name": "Brown Paint of Earthly Camouflage",
    "description": "This weathered brown paint blends seamlessly into rocky outcrops and dusty earth. Applied by Earth Elemental Paint Co., it grants you a natural advantage in Stealth checks while outdoors, but also makes you more vulnerable to psychic attacks. Beware, children might mistake you for a new garden project.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎨",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Blend with Dirt",
      "Grounded Down"
    ],
    "vendor": "dwarf_realms_paint",
    "shippedBy": "Mud Pack",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blend with Dirt",
        "rules": "When applied to your person or clothing, this paint grants you advantage on Stealth checks in natural terrain. The effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Grounded Down",
        "rules": "For the duration of 1 hour after applying this paint, you are more susceptible to psychic damage from spells and effects; you take an additional 1d6 psychic damage on a failed saving throw against such attacks. This effect ends when the rest period is over."
      }
    ],
    "levelRequirementReason": "This paint is intended for adventurers of any level who might need to blend into their environment.",
    "vendorReason": "Dwarven realms are known for their practical and durable paints, making this product a staple in their inventory.",
    "shippingDetail": "Ships via Mud Pack's reliable earthworm couriers, ensuring the paint remains intact through rough terrain.",
    "usage": {
      "activation": "Apply as an action. Lasts until the end of your next short or long rest.",
      "duration": "Until the end of your next short or long rest",
      "endsWhen": "The duration ends when you complete a short or long rest.",
      "charges": "Unlimited, recharges on a short or long rest."
    },
    "priceReason": "The paint's unique properties and the reputable vendor justify its balanced price in XP.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-22T00:33:05.024585+00:00",
    "aiReviewedAt": "2026-07-22T00:33:05.024585+00:00",
    "aiReviewVersion": 1
  },
  "build_traps_that_lead_to": {
    "id": "build_traps_that_lead_to",
    "name": "Wario's Bottomless Pitfall Trap Kit (Scam Trap!)",
    "description": "Craft a trap that creates an illusion of a bottomless pit, fooling even the most cautious. This trap's deceitful design is a hallmark of Wario’s expertise, leaving adventurers to ponder if they've fallen into a deadly abyss or merely an elaborate joke.",
    "category": "equipment",
    "price": 1000,
    "icon": "🕳️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "False Bottomless Pit",
      "Scam Mechanism"
    ],
    "vendor": "wario_land",
    "shippedBy": "Pitfall Parcel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "False Bottomless Pit",
        "rules": "When activated, the trap appears as a deep pit, requiring a DC 14 Perception check to notice its shallowness. Characters who fall into it suffer no damage and are ejected after 3 rounds. The pit is only 5 feet deep."
      },
      {
        "title": "Scam Mechanism",
        "rules": "The trap can be set up once per day, but the mechanism is easily tampered with. Any attempt to use this item without Wario's Trap Emporium’s knowledge risks it being rendered inert for 24 hours."
      }
    ],
    "levelRequirementReason": "Crafting traps requires basic understanding of engineering and construction.",
    "vendorReason": "Wario's Trap Emporium specializes in whimsical and practical pranks, including this cleverly devious pitfall kit.",
    "shippingDetail": "Ships via Pitfall Parcel; delivery is immediate within the Kingdom of Mushroom.",
    "usage": {
      "activation": "Action (set up once per day)",
      "duration": "Instantaneous setup, lasts until tampered with or destroyed",
      "endsWhen": "Tampered with or destroyed by an intelligent creature",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced as a rare item for its clever design and practicality in traps.",
    "priceOriginal": 16000,
    "priceReviewedAt": "2026-07-22T00:33:10.550583+00:00",
    "aiReviewedAt": "2026-07-22T00:33:10.550583+00:00",
    "aiReviewVersion": 1
  },
  "bulk_up_like_wario_side": {
    "id": "bulk_up_like_wario_side",
    "name": "Wario's WAAAAH! Fitness Shake Mix",
    "description": "Wario's WAAAAH! Fitness Shake Mix is a peculiar concoction that tastes as foul as it smells. This garlic-laden mix, when mixed with water and consumed, grants +2 to Strength checks for one hour but forces you to make a DC 15 Constitution saving throw every 10 minutes or suffer an aggressive flatulence burst that poisons creatures within 10 feet for 1 round. The shake's unique flavor can repel vampires, giving them advantage on Charisma (Intimidation) checks against you.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥤",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Strength Boost",
      "Poisonous Flatulence"
    ],
    "vendor": "wario_land",
    "shippedBy": "Shake Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Strength Boost",
        "rules": "Activate as a bonus action. Grants +2 to Strength checks for one hour. Must succeed on a DC 15 Constitution saving throw every 10 minutes or suffer the effects of the Poisonous Flatulence."
      },
      {
        "title": "Poisonous Flatulence",
        "rules": "If you fail your Constitution save, you emit a cloud of foul-smelling gas within 10 feet that poisons all creatures in the area for 1 round (DC 15 saving throw). Vampires have advantage on Charisma checks to repel this effect."
      }
    ],
    "levelRequirementReason": "Beginners need a boost, but even the weakest can't afford the side effects.",
    "vendorReason": "Wario Land Fitness is known for pushing limits and encouraging unconventional methods to stay in shape.",
    "shippingDetail": "Delivered with a complimentary 'leaky' shaker cup, no returns accepted after consumption.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 hour",
      "endsWhen": "Ends upon expiration of the duration or if you fail a Constitution saving throw.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price for an item that offers both significant and potentially dangerous effects.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-22T00:33:16.686375+00:00",
    "aiReviewedAt": "2026-07-22T00:33:16.686375+00:00",
    "aiReviewVersion": 1
  },
  "bullet_bill_helmet": {
    "id": "bullet_bill_helmet",
    "name": "Bullet Bill Helmet",
    "description": "The Bullet Bill Helmet is a sleek rocket-shaped headgear that propels you forward with explosive force. Upon activation, it launches you in a straight line at blinding speed, leaving behind a fiery trail of smoke. Enemies caught in its path are flung aside by the shockwave, but the impact can be punishing for both friend and foe.",
    "category": "equipment",
    "price": 1000,
    "icon": "🚀",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Rocket Dash",
      "Shockwave"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Thundercloud Express",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Rocket Dash",
        "rules": "As a bonus action, you can activate your Bullet Bill Helmet to dash in a straight line up to 60 feet. Any creature in the path of this movement must succeed on a Dexterity saving throw or be knocked prone and take 1d8 bludgeoning damage."
      },
      {
        "title": "Shockwave",
        "rules": "You take 1d6 bludgeoning damage upon activation, but you can use it once per short rest. If you fail your save against the shockwave effect on a creature, they are knocked prone and take an additional 1d6 force damage."
      }
    ],
    "levelRequirementReason": "Requires sufficient agility to handle its rapid movement.",
    "vendorReason": "The valley's traders often encounter travelers seeking unique and powerful gear for their quests.",
    "shippingDetail": "Ships via Thundercloud Express, ensuring arrival with a dramatic sonic boom.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous",
      "endsWhen": "Effect ends on the creature's next turn if it fails its saving throw.",
      "charges": "Once per short rest"
    },
    "priceReason": "Balanced at a price that reflects its limited uses and moderate power.",
    "priceOriginal": 19000,
    "priceReviewedAt": "2026-07-22T00:33:22.117325+00:00",
    "aiReviewedAt": "2026-07-22T00:33:22.117325+00:00",
    "aiReviewVersion": 1
  },
  "bullet_bill_launcher": {
    "id": "bullet_bill_launcher",
    "name": "Bullet Bill Blaster",
    "description": "The Bullet Bill Blaster is a compact cannon with a sleek, metallic barrel that hums with energy when primed. Crafted from enchanted iron, this relic fires explosive Bullet Bills capable of leveling small structures in their path. Its origins lie in the Forges of Fortuna, where it was once used to defend against invasions by hostile forces.",
    "category": "equipment",
    "price": 1000,
    "icon": "🚀",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Line of Fire",
      "Overheating"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Armored Wagon",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Line of Fire",
        "rules": "As a bonus action, you can fire the Bullet Bill Blaster. This creates a line of explosive energy that deals 4d6 Fire damage to all creatures in the line (60-foot range). Creatures must make a Dexterity saving throw or take an additional 2d6 Fire damage on a failed save."
      },
      {
        "title": "Overheating",
        "rules": "The Bullet Bill Blaster overheat after three uses. If it overheats, you and any creature within 10 feet of you must make a Dexterity saving throw (DC 15) or take 1d4 Fire damage."
      }
    ],
    "levelRequirementReason": "Requires proficiency in ranged weapons to effectively manage the recoil and precision needed.",
    "vendorReason": "The valley's trading post often receives rare items from distant forges, making it a likely place for this weapon to appear.",
    "shippingDetail": "Delivered by the Armored Wagon, which ensures safe and swift transport of the cannon through treacherous terrains.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous",
      "endsWhen": "Overheats or runs out of charges",
      "charges": "3 uses, recharged at dawn"
    },
    "priceReason": "Balanced to ensure the cannon is a rare but not overpowered addition to any party.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-22T00:33:28.006355+00:00",
    "aiReviewedAt": "2026-07-22T00:33:28.006355+00:00",
    "aiReviewVersion": 1
  },
  "bullet_bill_mask": {
    "id": "bullet_bill_mask",
    "name": "Bullet Bill Mask",
    "description": "The Bullet Bill Mask transforms you into a living, explosive bullet, capable of dashing in a line and detonating with fiery force. Crafted from the remnants of fallen Bullet Bills, this mask is both powerful and dangerous, best suited for those who can control their own charge.",
    "category": "consumables",
    "price": 1000,
    "icon": "🚀",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Living Charge",
      "Explosive Impact"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Swift Express Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Living Charge",
        "rules": "As a bonus action, you dash up to 60 feet in a straight line. All creatures within the path must succeed on a DC 14 Dexterity saving throw or be knocked prone and take 2d8 piercing damage."
      },
      {
        "title": "Explosive Impact",
        "rules": "On impact with a creature, the mask detonates, causing 3d6 fire damage to you and all creatures within 5 feet. You are immune to this damage but can still be knocked prone as per Living Charge."
      }
    ],
    "levelRequirementReason": "This mask is designed for beginners who need the challenge of mastering their charge while learning to control explosive situations.",
    "vendorReason": "The Valley Trading Post specializes in unique and rare items that can be found across various regions, including this one.",
    "shippingDetail": "Ships within 24 hours of purchase with a guaranteed delivery to your doorstep.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous (effect lasts until impact or end of turn)",
      "endsWhen": "The effect ends when you are knocked prone, the target is hit by another attack, or at the start of your next turn.",
      "charges": "Unlimited"
    },
    "priceReason": "This mask offers a balanced challenge for lower-level characters while providing a unique and powerful combat tool.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T00:33:33.714662+00:00",
    "aiReviewedAt": "2026-07-22T00:33:33.714662+00:00",
    "aiReviewVersion": 1
  },
  "bumper_badge": {
    "id": "bumper_badge",
    "name": "Bumper Badge",
    "description": "The Bumper Badge is a small, polished brass pin that glimmers with each impact. When struck by an enemy's melee attack, it causes them to stumble backward three full steps and lose their next action. Crafted in the bustling market of Ironforge, this badge is more than just a symbol—it repels attacks like a seasoned guard dog.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛑",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Melee Repulse",
      "Disruptive Stance"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Standard Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Melee Repulse",
        "rules": "When an enemy successfully hits the wearer with a melee attack, they are pushed back 3 feet and lose their next action. This effect has no save DC and can occur once per short or long rest."
      },
      {
        "title": "Disruptive Stance",
        "rules": "While wearing the Bumper Badge, you gain advantage on Dexterity saving throws against being knocked prone by environmental hazards and magical effects."
      }
    ],
    "levelRequirementReason": "The Bumper Badge's defensive properties are accessible to low-level characters who need a reliable way to repel immediate threats.",
    "vendorReason": "Valley Trading Post caters to adventurers seeking practical and sturdy gear, making the Bumper Badge an ideal addition to their inventory.",
    "shippingDetail": "Ships within three days via Standard Courier from Ironforge.",
    "usage": {
      "activation": "Instantaneous effect triggered by a melee hit.",
      "duration": "Once per short or long rest, lasts until the end of your next turn.",
      "endsWhen": "The effect ends when you use another action to repel an attack.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, the Bumper Badge offers a reasonable defense for its price point, suitable for beginning adventurers.",
    "priceOriginal": 40000,
    "priceReviewedAt": "2026-07-22T00:33:39.511822+00:00",
    "aiReviewedAt": "2026-07-22T00:33:39.511822+00:00",
    "aiReviewVersion": 1
  },
  "burnt_pan": {
    "id": "burnt_pan",
    "name": "Burnt Frying Pan",
    "description": "This burnt frying pan is a relic of Wario's ill-fated attempt at culinary arts. The handle has melted into the metal, and its surface is scored with blackened streaks from failed cooking experiments. Despite its ruined state, it still retains a faint smoky scent that clings to your hand as you grip it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍳",
    "stock": 5,
    "rarity": "junk",
    "effects": [
      "Bludgeoning Weapon",
      "Smoke Aura"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Standard Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bludgeoning Weapon",
        "rules": "When you attack with the burnt frying pan, it deals 1d4 bludgeoning damage. If your target is reduced to half its hit points or fewer by this attack, the pan releases a cloud of acrid smoke in a 5-foot radius centered on the target. This smoke imposes disadvantage on all ranged attacks made against any creature within the area until the start of your next turn."
      },
      {
        "title": "Smoke Aura",
        "rules": "The burnt frying pan emits an unpleasant, smoky aura that lasts for 1 hour or until you sheathe it in water. Any creature within 5 feet of you who can see the pan must succeed on a DC 10 Wisdom saving throw or be incapacitated by the smell for 1 minute."
      }
    ],
    "levelRequirementReason": "Basic mechanics and no significant power make this accessible to low-level characters.",
    "vendorReason": "Toad Town Market often stocks quirky, locally-made items that can be useful in unexpected ways during adventures.",
    "shippingDetail": "Delivered within a week of purchase with standard handling.",
    "usage": {
      "activation": "On your action or as a bonus action",
      "duration": "Instantaneous and until used, but the smoke aura lasts for 1 hour or until sheathed in water.",
      "endsWhen": "The effects end when you discard the pan, it breaks, or it is submerged in water.",
      "charges": "Unlimited"
    },
    "priceReason": "The item has balanced mechanics that ensure it does not overshadow more powerful options but still provides a unique and thematic addition to any adventurer's arsenal.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T00:33:46.024153+00:00",
    "aiReviewedAt": "2026-07-22T00:33:46.024153+00:00",
    "aiReviewVersion": 1
  },
  "buzzy_beetle_shell": {
    "id": "buzzy_beetle_shell",
    "name": "Buzzy Beetle Shell",
    "description": "The Buzzy Beetle Shell is a hardened exoskeleton that protects its bearer from fire and physical harm. Crafted from the fused remains of a rare, fire-resistant beetle species, this shell grants protection and offers the resilience to survive in fiery environments. The shell's weight reduces movement speed by 5 feet but provides a +2 bonus to AC and resistance to fire damage.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐞",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Fire Resistance",
      "Shield: +2 AC"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Swift Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fire Resistance",
        "rules": "The wearer gains resistance to fire damage. This effect lasts until the start of your next turn."
      },
      {
        "title": "Shield: +2 AC",
        "rules": "When worn, the Buzzy Beetle Shell provides a +2 bonus to AC. This benefit is active while the item is equipped and does not require an action or reaction."
      }
    ],
    "levelRequirementReason": "The Buzzy Beetle Shell's inherent resilience makes it accessible to lower-level characters who need basic protection from fire hazards.",
    "vendorReason": "The Valley Trading Post specializes in goods that are useful for adventurers facing environmental challenges, making the Buzzy Beetle Shell a fitting addition to their inventory.",
    "shippingDetail": "Ships via Swift Courier; expedited delivery within one week of purchase.",
    "usage": {
      "activation": "Passive effect when equipped.",
      "duration": "Instantaneous, lasting until the start of your next turn.",
      "endsWhen": "The effect ends at the start of your next turn and can be re-applied.",
      "charges": "Unlimited uses; the item does not have charges."
    },
    "priceReason": "The Buzzy Beetle Shell is priced at 1000 XP, reflecting its unique properties and utility in combating fire hazards without being overpowered for a lower-level character.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T00:33:51.941184+00:00",
    "aiReviewedAt": "2026-07-22T00:33:51.941184+00:00",
    "aiReviewVersion": 1
  },
  "cackleberry": {
    "id": "cackleberry",
    "name": "Cackleberry",
    "description": "The Cackleberry is a small, giggling egg that brings both laughter and stealth to those who consume it. Crafted from enchanted wood and imbued with trickster magic by the mischievous sprite community, this treat enhances one’s ability to hide while also increasing the likelihood of being overheard. Perfect for adventurers seeking to outsmart their foes or simply enjoy a whimsical snack.",
    "category": "consumables",
    "price": 1000,
    "icon": "🥚",
    "stock": 30,
    "rarity": "common",
    "effects": [
      "Stealth Boost",
      "Giggly Reveal"
    ],
    "vendor": "twine_shop",
    "shippedBy": "Wicker Basket",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth Boost",
        "rules": "When consumed, the Cackleberry grants advantage on Stealth checks for 10 minutes. If you are already proficient in Stealth, this effect increases your chance of success by +4 to the roll."
      },
      {
        "title": "Giggly Reveal",
        "rules": "There is a 30% chance that consuming the Cackleberry will cause you to laugh uncontrollably for 1 minute. During this time, you have disadvantage on Dexterity (Stealth) checks and any attack rolls made against you are at advantage."
      }
    ],
    "levelRequirementReason": "The Cackleberry’s effects are minor enough that even low-level adventurers can benefit from its stealthy properties without requiring a significant challenge.",
    "vendorReason": "Twinestitch, the owner of Twine Shop, is well-known for her love of all things quirky and magical. It only makes sense that she stocks such an odd yet useful treat.",
    "shippingDetail": "The Cackleberry is shipped in a special wicker basket to ensure it reaches its destination fresh and ready to eat.",
    "usage": {
      "activation": "Eating the Cackleberry",
      "duration": "10 minutes for Stealth Boost, 1 minute for Giggly Reveal",
      "endsWhen": "The duration ends naturally or if consumed by an enemy creature",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Cackleberry’s price is adjusted to reflect its unique magical properties and the special care required in its preparation.",
    "priceOriginal": 400,
    "priceReviewedAt": "2026-07-22T00:33:58.340998+00:00",
    "aiReviewedAt": "2026-07-22T00:33:58.340998+00:00",
    "aiReviewVersion": 1
  },
  "cage_of_the_unborn": {
    "id": "cage_of_the_unborn",
    "name": "Cage of the Unborn",
    "description": "The Cage of the Unborn is a tiny metal cage that holds the soul of an unborn child. Crafted from ancient, cursed iron and bound with eldritch sigils, it whispers dark secrets to those who dare open it. The soul within can be released, but at a terrible cost—it becomes your child, yet ages ten times faster than normal, growing to adulthood in mere months.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🪝",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Born as a Shadow",
      "Accelerated Aging"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Silver Crib",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Release the Soul",
        "rules": "As an action, you can release the soul from the cage. The released soul becomes your child, but it ages ten times faster than normal. It gains one level at dawn and dusk each day until it reaches its maximum age for its race."
      },
      {
        "title": "Shadow Child",
        "rules": "The shadow child is born as a shadow creature with the same abilities and hit points as an adult of their race, but they cannot be healed by normal means. They are immune to disease, poison, and most forms of damage."
      }
    ],
    "levelRequirementReason": "Even the weakest wizard can summon the power needed to release a soul from this cursed artifact.",
    "vendorReason": "The crypt courier deals in forbidden knowledge and dark artifacts, making them the perfect vendor for such an item.",
    "shippingDetail": "Delivered by Silver Crib with a delay of one week due to the cursed nature of the artifact.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The soul is released and becomes your child.",
      "charges": "Unlimited"
    },
    "priceReason": "While the item's power is limited, its forbidden nature and cursed components justify a modest price.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-22T00:34:04.078801+00:00",
    "aiReviewedAt": "2026-07-22T00:34:04.078801+00:00",
    "aiReviewVersion": 1
  },
  "cake_mix": {
    "id": "cake_mix",
    "name": "Cake Mix",
    "description": "This is a mix of ingredients for creating a classic cake, ready to be baked in any oven. The smell of fresh batter brings joy and sweet anticipation to any kitchen. Created by Zess T., it's essential not just for baking but also for satisfying your sweet tooth when eaten raw.",
    "category": "consumables",
    "price": 1000,
    "icon": "🥡",
    "stock": 200,
    "rarity": "common",
    "effects": [
      "Restores 1 HP",
      "Sweeten the Mood"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Paper Bag",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Health",
        "rules": "When consumed, this Cake Mix restores 1 Hit Point to you. This effect can be used once per short or long rest."
      },
      {
        "title": "Sweeten the Mood",
        "rules": "Eating a serving of Cake Mix grants advantage on saving throws against being frightened for 10 minutes. You must consume it within one hour of purchase."
      }
    ],
    "levelRequirementReason": "The Cake Mix is simple and safe, suitable for all levels.",
    "vendorReason": "Toad Town Market is known for its wide variety of food items and this mix fits well with their offerings.",
    "shippingDetail": "Delivered in a paper bag to ensure freshness. Delivery time varies based on the region but typically takes no more than three days.",
    "usage": {
      "activation": "Eating",
      "duration": "Instantaneous for health restoration; 10 minutes of advantage on saving throws against being frightened.",
      "endsWhen": "Once consumed, effects end immediately.",
      "charges": "Unlimited"
    },
    "priceReason": "The price is adjusted to reflect the item's utility in both practical and mood-boosting aspects.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T00:34:14.205089+00:00",
    "aiReviewedAt": "2026-07-22T00:34:14.205089+00:00",
    "aiReviewVersion": 1
  },
  "camera_poltergust": {
    "id": "camera_poltergust",
    "name": "Vintage Camera",
    "description": "This Vintage Camera is a sepia-toned relic with a lens that glows faintly in the dark. It captures memories, but its flash can temporarily blind those caught within its light. The camera's shutter click feels like it could capture more than just an image—it holds the essence of fleeting moments.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📷",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Blinding Flash",
      "Capture Memories"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Fragile Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blinding Flash",
        "rules": "As a bonus action, you can activate the camera's flash. Any creature within 5 feet must make a Constitution saving throw (DC 14) or be blinded until the start of your next turn. This effect has no limit per day."
      },
      {
        "title": "Capture Memories",
        "rules": "When you capture an image with the camera, it records a memory of the scene. You can use this memory to provide insight into events that occurred during the session. The memory lasts until used or destroyed. This effect is unlimited per day."
      }
    ],
    "levelRequirementReason": "This Vintage Camera requires no level, but it demands a keen eye for detail and timing.",
    "vendorReason": "The Rogue Port's Black Market is known for its eclectic array of unusual items, including this mysterious relic.",
    "shippingDetail": "Due to the camera’s delicate nature, it must be shipped in a specially designed box with padding and insulation.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous (blinding effect lasts until start of next turn)",
      "endsWhen": "The blinding flash ends when its effect is over or if the camera's memory function is used.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the item’s uncommon rarity and unique abilities, offering a balance between power and cost.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-22T00:34:19.734031+00:00",
    "aiReviewedAt": "2026-07-22T00:34:19.734031+00:00",
    "aiReviewVersion": 1
  },
  "candle_of_the_first_fire": {
    "id": "candle_of_the_first_fire",
    "name": "Candle of the First Fire",
    "description": "The Candle of the First Fire is a relic of ancient times, its wick made from the first flame ever lit. Its light is cold and pure, searing the surface of objects but leaving flesh untouched. It can also reveal the magical essence within enchanted items, unlocking their secrets for those who seek them.",
    "category": "premium",
    "price": 1000,
    "icon": "🕯️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Cold Flame",
      "Reveal Enchantment"
    ],
    "vendor": "artificer_tower",
    "shippedBy": "Ashen Holder",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cold Flame",
        "rules": "When activated as an action, this candle projects a 30-foot radius of cold flame that deals 1d6 fire damage to all objects in the area. This effect has no effect on creatures or constructs."
      },
      {
        "title": "Reveal Enchantment",
        "rules": "As a bonus action, you can point the candle at an object within 30 feet and reveal its magical properties. The candle burns out after this use."
      }
    ],
    "levelRequirementReason": "This candle is accessible to any character, as it serves primarily as a tool for revealing hidden enchantments.",
    "vendorReason": "The Artificer Tower has long preserved and studied relics of the First Age, including this ancient candle.",
    "shippingDetail": "Delivered by the Ashen Holder with a promise to deliver within three days or refund in full.",
    "usage": {
      "activation": "Action (Cold Flame), Bonus Action (Reveal Enchantment)",
      "duration": "Instantaneous for Cold Flame, until revealed for Reveal Enchantment",
      "endsWhen": "The candle burns out after a single use of either effect",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the candle's rarity and unique utility in revealing enchantments without the risk of damaging magical items.",
    "priceOriginal": 420000,
    "priceReviewedAt": "2026-07-22T00:34:25.117101+00:00",
    "aiReviewedAt": "2026-07-22T00:34:25.117101+00:00",
    "aiReviewVersion": 1
  },
  "candle_of_the_last_breath": {
    "id": "candle_of_the_last_breath",
    "name": "Candle of the Last Breath",
    "description": "The Candle of the Last Breath is a pitch-black candle that flickers with an eerie light. It burns for exactly one minute, during which it can resurrect a recently deceased creature within reach and grant them one truth before they return to dust, at the cost of your own lifespan.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🕯️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Resurrection",
      "Truthful Revelation"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Ashen Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resurrection",
        "rules": "When activated, this candle burns for exactly 1 minute and allows you to resurrect a recently deceased creature within 1 hour. The creature returns with 1 hit point and full memories of their life before death. They must speak one truth about the most recent event they witnessed before dissolving into smoke."
      },
      {
        "title": "Truthful Revelation",
        "rules": "The resurrected creature, upon returning to dust at the end of its one minute of existence, speaks a single truthful sentence about the most significant event it observed just prior to death. This truth is not subject to saving throws or other means of manipulation."
      }
    ],
    "levelRequirementReason": "The Candle requires no specific level as it operates on a higher plane of magic.",
    "vendorReason": "The Onyx Hand has access to rare and forbidden items, making the Candle of the Last Breath a suitable addition to their inventory.",
    "shippingDetail": "Ships via Ashen Box with expedited service, ensuring safe arrival within one week.",
    "usage": {
      "activation": "Instantaneous action",
      "duration": "One minute, during which the candle burns and performs its effects",
      "endsWhen": "The candle extinguishes after burning for exactly one minute or if the creature it resurrects is no longer alive when that duration ends",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to be a rare but not overpowered item, reflecting its forbidden nature and mystical properties.",
    "priceOriginal": 300000,
    "priceReviewedAt": "2026-07-22T00:34:30.836073+00:00",
    "aiReviewedAt": "2026-07-22T00:34:30.836073+00:00",
    "aiReviewVersion": 1
  },
  "cannon_box": {
    "id": "cannon_box",
    "name": "Cannon Box",
    "description": "The Cannon Box is a brass contraption worn at your waist. When activated, it fires a cannonball with explosive force, sending projectiles flying in all directions around you. The box's weight and recoil reduce your movement speed by 10 feet while active.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Wearable Artillery",
      "Reduced Mobility"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Heavy Crate Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wearable Artillery",
        "rules": "As a bonus action, you can activate the Cannon Box to fire one cannonball. The cannonball deals 2d10 bludgeoning damage and explodes in a 30-foot radius centered on your location, dealing an additional 1d6 thunder damage to all creatures within that area who fail a DC 14 Dexterity saving throw."
      },
      {
        "title": "Reduced Mobility",
        "rules": "While the Cannon Box is active, you have disadvantage on Dexterity (Acrobatics) checks and your speed is reduced by 10 feet. The Cannon Box requires no attunement but must be worn at your waist. It recharges after a short rest."
      }
    ],
    "levelRequirementReason": "This item provides an immediate combat advantage to low-level adventurers without being overly powerful.",
    "vendorReason": "Wario Direct specializes in quirky and unusual equipment, making the Cannon Box a perfect fit for their inventory.",
    "shippingDetail": "The Cannon Box is shipped via Heavy Crate Express, ensuring it arrives safely despite its unwieldy size.",
    "usage": {
      "activation": "Bonus action to activate; requires no attunement while worn at your waist.",
      "duration": "One minute per short rest, recharging after each.",
      "endsWhen": "The cannonball is fired or the effect ends as part of a short rest recharge.",
      "charges": "Unlimited charges, recharged with each short rest."
    },
    "priceReason": "This item offers a unique and balanced combat advantage for low-level adventurers at this price point.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-22T00:34:36.681372+00:00",
    "aiReviewedAt": "2026-07-22T00:34:36.681372+00:00",
    "aiReviewVersion": 1
  },
  "cape_feather": {
    "id": "cape_feather",
    "name": "Cape Feather",
    "description": "The Cape Feather is a shimmering golden cape adorned with a single, radiant feather. It exudes nostalgia and freedom, reminiscent of ancient times when heroes soared through skies. The feather's scent lingers like a distant memory, evoking feelings of flight and adventure.",
    "category": "consumables",
    "price": 1000,
    "icon": "🪶",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Brief Flight",
      "Stunning Spin Attack"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Feather Pillow Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Brief Flight",
        "rules": "Use your action to activate the cape. You gain a flying speed of 40 feet for 1 minute, allowing you to soar gracefully through the air. The effect ends early if you fall or are incapacitated."
      },
      {
        "title": "Stunning Spin Attack",
        "rules": "As an action while airborne, you can perform a spin attack targeting one creature within 5 feet of your position. You make a melee weapon attack against the target with advantage. On a hit, the target takes 1d6 slashing damage plus 1d4 force damage."
      }
    ],
    "levelRequirementReason": "Suitable for beginners to experience the thrill of flight and combat.",
    "vendorReason": "Toad Town Market is known for its eclectic mix of magical items, including the Cape Feather, which has become a popular choice among adventurers seeking unique abilities.",
    "shippingDetail": "The cape is carefully packed to prevent damage during transit, ensuring it arrives in perfect condition.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until incapacitated",
      "endsWhen": "Effect ends early if you fall or become incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, the Cape Feather provides a unique and memorable item without being overpowered.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T00:34:42.062704+00:00",
    "aiReviewedAt": "2026-07-22T00:34:42.062704+00:00",
    "aiReviewVersion": 1
  },
  "cappy_replica": {
    "id": "cappy_replica",
    "name": "Spirit Cap",
    "description": "The Spirit Cap is a hat imbued with the restless spirit of an ancient bonneter. Its brim glows faintly, hinting at the presence within. This artifact allows you to momentarily possess another creature, exerting your will over their body for a brief time.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎩",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Possession",
      "Dominated Target"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Hat Box Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Possession",
        "rules": "You can use an action to throw the Spirit Cap at a creature within 30 feet. The target must make a Wisdom saving throw (DC 14). On a failed save, you control their body for 1 minute. During this time, your physical form vanishes into the hat and you gain control over the possessed creature's actions."
      },
      {
        "title": "Dominated Target",
        "rules": "While possessing the target, they are dominated by you. They follow your commands to the best of their ability but can still attempt to resist with a successful Wisdom saving throw (DC 14) at the start of each of their turns."
      }
    ],
    "levelRequirementReason": "Requires some experience in controlling and commanding others.",
    "vendorReason": "Comet Observatory has a special interest in ancient artifacts and spirits.",
    "shippingDetail": "Ships via Hat Box Express, known for their timely deliveries of delicate items.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until you release the target",
      "endsWhen": "You release control over the target or are incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a lower price to reflect its limited duration and controlled effect.",
    "priceOriginal": 380000,
    "priceReviewedAt": "2026-07-22T00:34:47.296031+00:00",
    "aiReviewedAt": "2026-07-22T00:34:47.296031+00:00",
    "aiReviewVersion": 1
  },
  "captain_toad_backpack": {
    "id": "captain_toad_backpack",
    "name": "Captain's Heavy Backpack",
    "description": "The Captain's Heavy Backpack is a compact vest that looks smaller than it seems. Despite its diminutive appearance, this enchanted pack can carry an infinite amount of gear without adding any weight. While it ensures you never need to jump or fly, it also reduces your speed by five feet per round, making every step feel like a deliberate march.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎒",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Infinite Carrying Capacity",
      "Prevents Jumping and Flying"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Crane's Express Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Infinite Carrying Capacity",
        "rules": "The backpack can hold an infinite amount of gear without adding any weight. This effect is always active."
      },
      {
        "title": "Prevents Jumping and Flying",
        "rules": "You cannot jump or fly at all. This persists until the end of your next turn. There is no saving throw to negate this effect."
      }
    ],
    "levelRequirementReason": "This backpack is designed for adventurers who need to carry a lot but prefer not to expend energy on jumping.",
    "vendorReason": "Crane, the market vendor known for his wisdom and experience, stocks this item as it caters to those who value practicality over flash.",
    "shippingDetail": "The backpack is carefully packed by Crane himself, ensuring it arrives in perfect condition with no delays.",
    "usage": {
      "activation": "Passive effect; always active once worn.",
      "duration": "Instantaneous and persists until the end of your next turn.",
      "endsWhen": "At the start of your next turn.",
      "charges": "Unlimited"
    },
    "priceReason": "The backpack's price is adjusted to reflect its practical utility rather than its rarity, ensuring it remains accessible for adventurers.",
    "priceOriginal": 210000,
    "priceReviewedAt": "2026-07-22T00:34:52.507109+00:00",
    "aiReviewedAt": "2026-07-22T00:34:52.507109+00:00",
    "aiReviewVersion": 1
  },
  "captain_toad_lamp": {
    "id": "captain_toad_lamp",
    "name": "Captain Toad's Lamp",
    "description": "Captain Toad's Lamp is an antique brass lantern adorned with a red glass shade and a handle etched with whimsical toads. It not only illuminates its surroundings but also reveals hidden caches of treasure, making it indispensable for adventurers seeking wealth in dark tombs and dungeons. Once per day, the lamp can reveal a secret door, aiding groups in uncovering concealed passages.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🏮",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Shine: Detect Hidden Items",
      "Reveal Secret Door"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Courier Toad Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shine: Detect Hidden Items",
        "rules": "Activate as an action to emit light from the lamp, revealing hidden items within a 30-foot radius. This effect lasts until the start of your next turn. The lamp has no effect on creatures or objects not hidden."
      },
      {
        "title": "Reveal Secret Door",
        "rules": "Activate once per day as an action to reveal a secret door in the immediate area, up to 30 feet away. This effect is instantaneous and does not require a save. The door reverts after 1 hour unless a creature uses an action to reinforce it."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginning adventurers who need assistance in uncovering hidden treasures.",
    "vendorReason": "Toad Town Market stocks items that are useful for young adventurers, and this lamp has proven invaluable to many of them.",
    "shippingDetail": "Ships via Toad Courier Express; delivery is usually within a week, but may vary depending on market conditions.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for the secret door effect. Lasts until your next turn for the hidden item detection.",
      "endsWhen": "The effect ends when you use it again or at the start of your next turn.",
      "charges": "Rechargeable after 24 hours."
    },
    "priceReason": "This price reflects its utility in treasure hunts and exploration, making it a reasonable investment for adventurers.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T00:34:58.429259+00:00",
    "aiReviewedAt": "2026-07-22T00:34:58.429259+00:00",
    "aiReviewVersion": 1
  },
  "cardboard_box": {
    "id": "cardboard_box",
    "name": "Suspicious Box",
    "description": "The Suspicious Box is a stout wooden crate with a padlock and an ominous red 'X' painted on its side. It exudes a faint, unsettling aura that makes nearby creatures uneasy. When you open it, a hidden compartment reveals a single, glowing item of your choosing.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 20,
    "rarity": "common",
    "effects": [
      "Shake to Reveal",
      "Uneasy Aura"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Shadow Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shake to Reveal",
        "rules": "As an action, shake the box. A hidden compartment opens, revealing a single item of your choice from any category (not exceeding gear worth up to 50 XP). The item is usable immediately."
      },
      {
        "title": "Uneasy Aura",
        "rules": "All creatures within 10 feet must succeed on a DC 12 Wisdom saving throw or become frightened for 1 minute. This effect ends early if the creature moves more than 5 feet away from you."
      }
    ],
    "levelRequirementReason": "The box's eerie qualities and the effort required to shake it make a low-level character the most suitable user.",
    "vendorReason": "The Rogueport Black Market deals in mysterious and potentially dangerous goods, making it an ideal vendor for this unsettling yet useful item.",
    "shippingDetail": "Delivered by the Shadow Courier Service within a week. A special delivery fee of 10 XP is included to cover the courier's risks.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for each shake; ends when shaken or destroyed",
      "endsWhen": "Once shaken, its contents are revealed and it can no longer be used. The box breaks into pieces if subjected to damage.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the item's eerie nature, the potential reward of a hidden treasure, and the risk involved in using it.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T00:35:04.132249+00:00",
    "aiReviewedAt": "2026-07-22T00:35:04.132249+00:00",
    "aiReviewVersion": 1
  },
  "cartography_commission": {
    "id": "cartography_commission",
    "name": "Cartography Commission (Custom Map)",
    "description": "Hire a master cartographer to commission an exquisite map of any area up to 50 square miles. This meticulously crafted parchment reveals hidden locations, ancient ley lines, and perilous hazard zones. The map glows faintly when danger approaches within 1 mile, alerting the bearer to potential threats.",
    "category": "services",
    "price": 1000,
    "icon": "🗺️",
    "stock": 12,
    "rarity": "rare",
    "effects": [
      "Hidden Locations Revealed",
      "Glowing Danger Indicator"
    ],
    "vendor": "scholar_society",
    "shippedBy": "Swift Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hidden Locations Revealed",
        "rules": "Upon completion of a Cartography Commission, the map uncovers hidden locations such as ancient ruins or secret tunnels. These features are marked with a symbol and a brief description on the map."
      },
      {
        "title": "Glowing Danger Indicator",
        "rules": "The map emits a soft glow when danger is within 1 mile of its location, alerting the bearer to potential threats such as hostile creatures or traps. The glow persists until the danger moves more than 1 mile away."
      }
    ],
    "levelRequirementReason": "Commissioning this service requires basic adventuring skills and knowledge.",
    "vendorReason": "The Scholar Society specializes in such scholarly endeavors, offering expertise from the finest cartographers.",
    "shippingDetail": "Delivered within 3 days of payment. Expedited delivery available for an additional fee.",
    "usage": {
      "activation": "Passive effect once completed.",
      "duration": "Permanent",
      "endsWhen": "Destroyed or lost.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price for a service that guarantees detailed and magically accurate information.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T00:35:09.040628+00:00",
    "aiReviewedAt": "2026-07-22T00:35:09.040628+00:00",
    "aiReviewVersion": 1
  },
  "castle_deed": {
    "id": "castle_deed",
    "name": "Deed to Abandoned Fortress",
    "description": "The Deed to Abandoned Fortress is a tattered parchment with an ancient seal. It grants ownership of a sprawling, decrepit fortress in the Dark Land, requiring renovation and restoration efforts to bring it back into use. This deed allows you to garrison up to 100 troops within the fortress walls and provides lair actions when inside. The fortress also generates income through taxes levied upon its tenants.",
    "category": "faction",
    "price": 1000,
    "icon": "🏰",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Permanent Stronghold",
      "Generates Income"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Courier Pigeon Service",
    "levelRequirement": 10,
    "factionBonus": {
      "defense": 50,
      "economy": 20
    },
    "effectDetails": [
      {
        "title": "Stronghold",
        "rules": "Allows the owner to garrison up to 100 troops within the fortress. The owner can use lair actions when inside, but must be present in or adjacent to the fortress to do so."
      },
      {
        "title": "Income Generation",
        "rules": "The fortress generates income through taxes levied upon its tenants. This effect is passive and requires the owner to maintain a presence within 1 mile of the fortress for it to function. Income generation ends if the owner leaves the area or the fortress falls into disrepair."
      }
    ],
    "levelRequirementReason": "This deed is complex, requiring significant management and resources that are only accessible to those of at least 10th level.",
    "vendorReason": "Wario Direct specializes in property and land deals, making them the ideal vendor for such a unique item as this deed.",
    "shippingDetail": "The deed is delivered by a Courier Pigeon, ensuring swift delivery to the owner's doorstep. However, the pigeon may take longer if the Dark Land is under shadowed influence.",
    "usage": {
      "activation": "Passive effect upon acquisition; requires maintenance and presence within 1 mile of the fortress for income generation.",
      "duration": "Permanent with maintenance",
      "endsWhen": "Owner leaves the area or the fortress falls into disrepair",
      "charges": "Unlimited"
    },
    "priceReason": "The price is set at 1,000 XP to reflect the significant resources and management required to maintain a stronghold in the Dark Land.",
    "priceOriginal": 550000,
    "priceReviewedAt": "2026-07-22T00:35:15.208175+00:00",
    "aiReviewedAt": "2026-07-22T00:35:15.208175+00:00",
    "aiReviewVersion": 1
  },
  "celestial_compass": {
    "id": "celestial_compass",
    "name": "Celestial Compass (Navigation)",
    "description": "The Celestial Compass emits a soft, divine glow that points true north and reveals nearby holy sites. Crafted by Angelic Scouts from celestial materials, it is said to align with the very threads of the heavens themselves.",
    "price": 1000,
    "icon": "🧭",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Aligns to True North",
      "Detects Nearest Holy Site"
    ],
    "vendor": "divine_outpost",
    "shippedBy": "Holy Light Courier",
    "levelRequirement": 1,
    "factionBonus": {
      "divine": 50
    },
    "effectDetails": [
      {
        "title": "Aligns to True North",
        "rules": "The user must hold the compass in their hand. It immediately points directly north, true to the celestial plane. This effect is instantaneous and does not require any action."
      },
      {
        "title": "Detects Nearest Holy Site",
        "rules": "As a bonus action, the user can activate the compass to detect the nearest holy site within 1 mile. The compass emits a soft light indicating direction. Once used, it requires a short rest to be used again."
      }
    ],
    "levelRequirementReason": "The Celestial Compass is simple enough for even novice adventurers to use effectively.",
    "vendorReason": "Divine Outpost, known for its connections with celestial beings, naturally stocks items that align with the divine.",
    "shippingDetail": "Ships via Holy Light Courier, ensuring safe and swift delivery of this sacred artifact.",
    "usage": {
      "activation": "Bonus action or holding in hand for alignment",
      "duration": "Instantaneous",
      "endsWhen": "Compass is destroyed or the user rests",
      "charges": "Unlimited, but requires a short rest after each use"
    },
    "priceReason": "The Celestial Compass, though not overly powerful, provides significant utility for adventurers of all levels and is thus priced affordably.",
    "priceOriginal": 610000,
    "priceReviewedAt": "2026-07-22T00:35:20.350463+00:00",
    "aiReviewedAt": "2026-07-22T00:35:20.350463+00:00",
    "aiReviewVersion": 1
  },
  "celestial_harvester_drone": {
    "id": "celestial_harvester_drone",
    "name": "Celestial Harvester Drone (Automated)",
    "description": "The Celestial Harvester Drone (Automated) is a swarm of nano-drones crafted from starlight and celestial materials. Deployed in orbit, it harnesses stellar energy through a process of quantum resonance, returning to its point of origin via the fabric of space itself. Each drone can collect up to 1000 energy units per solar cycle.",
    "price": 1000,
    "icon": "⭐",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Stellar Energy Harvest",
      "Hyperspace Delivery"
    ],
    "vendor": "starforge_outpost",
    "shippedBy": "Orbital Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stellar Energy Harvest",
        "rules": "The drone collects 1000 energy units per solar cycle. This effect is passive and does not require any action from the user."
      },
      {
        "title": "Hyperspace Delivery",
        "rules": "Upon command, the drones return to their point of origin via hyperspace. This effect can be activated as a bonus action, with an instantaneous duration. The drone must have at least 500 energy units before it can activate this ability."
      }
    ],
    "levelRequirementReason": "The Celestial Harvester Drone is accessible to all levels of adventurers who require stellar power.",
    "vendorReason": "Starforge Outpost specializes in exotic and rare celestial items, making the Celestial Harvester Drone a natural addition to their inventory.",
    "shippingDetail": "Ships within one solar cycle, with drones arriving fully charged.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous",
      "endsWhen": "Charges are depleted or the drone is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The Celestial Harvester Drone provides a valuable, passive source of energy without requiring any active effort from the user.",
    "priceOriginal": 450000,
    "priceReviewedAt": "2026-07-22T00:35:25.587084+00:00",
    "aiReviewedAt": "2026-07-22T00:35:25.587084+00:00",
    "aiReviewVersion": 1
  },
  "celestial_sunforge_blueprints": {
    "id": "celestial_sunforge_blueprints",
    "name": "Celestial Sunforge Blueprints",
    "description": "Celestial Sunforge Blueprints are divine schematics crafted by celestial archons in the heart of a sunforge. These blueprints detail the construction of artifacts imbued with the purest sunlight, capable of channeling solar energy into weapons and armor that burn like living flames.",
    "price": 1000,
    "icon": "📜",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Craft Solar Radiance Armor",
      "Forged from Celestial Light"
    ],
    "vendor": "divine_archive",
    "shippedBy": "Solar Flare Transmission",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Craft Solar Radiance Armor",
        "rules": "Activates as an action. The user must spend 20,000 gp in celestial materials to craft the armor. The armor grants a +1 bonus to AC and deals radiant damage equal to your proficiency bonus on a successful unarmed strike against a creature within 5 feet. This effect lasts until expended."
      },
      {
        "title": "Forged from Celestial Light",
        "rules": "The blueprints require a level 15 caster or higher to use. Once per short rest, the user may activate this ability to imbue their next weapon attack with solar energy, dealing an additional 2d6 radiant damage."
      }
    ],
    "levelRequirementReason": "The blueprints require a high-level caster to properly utilize and understand the intricate celestial magic they contain.",
    "vendorReason": "Divine Archive houses rare and powerful items crafted by celestial beings, including these divine schematics.",
    "shippingDetail": "Ships via a solar flare, arriving within one week of purchase. The item is delivered with a protective aura that ensures its purity remains intact.",
    "usage": {
      "activation": "Action and bonus action",
      "duration": "Until expended or destroyed by damage",
      "endsWhen": "The blueprints are destroyed by any means",
      "charges": "Unlimited, but requires celestial materials to activate"
    },
    "priceReason": "Balanced at a price of 1000 XP, considering the rarity and divine origin of these blueprints.",
    "priceOriginal": 465000,
    "priceReviewedAt": "2026-07-22T00:35:31.400369+00:00",
    "aiReviewedAt": "2026-07-22T00:35:31.400369+00:00",
    "aiReviewVersion": 1
  },
  "centaur_khanate_bow": {
    "id": "centaur_khanate_bow",
    "name": "Centaur Khanate Composite Bow",
    "description": "The Centaur Khanate Composite Bow is a masterwork of centaur craftsmanship. Its sleek design allows for precise shots while mounted, and its powerful draw can be felt in every pull. Arrows fired from this bow travel twice as far, and it grants the archer advantage on attacks made while riding.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏹",
    "stock": 8,
    "rarity": "rare",
    "effects": [
      "Riding Shot",
      "Extended Range"
    ],
    "vendor": "Centaur Khanate",
    "shippedBy": "Swift Wind Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Riding Shot",
        "rules": "When you use a bonus action to draw this bow while mounted, you gain the benefit of your mount's speed on your ranged attack. This effect ends when you dismount or lose control of the mount."
      },
      {
        "title": "Extended Range",
        "rules": "Arrows fired from this bow have an extended range equal to 50% further than a standard longbow. This effect lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "This bow is designed for versatile use and can be wielded by beginners with ease.",
    "vendorReason": "The Centaur Khanate is renowned for its mastery of composite bows, perfecting this one to suit their riders' needs.",
    "shippingDetail": "Delivered via swift winds, ensuring the bow arrives in prime condition.",
    "usage": {
      "activation": "Bonus action to draw while mounted; ranged attack with a standard action",
      "duration": "Instantaneous for Riding Shot; ends at end of next turn for Extended Range",
      "endsWhen": "Dismounting or losing control, end of your next turn respectively",
      "charges": "Unlimited"
    },
    "priceReason": "The reduced price reflects the bow's more versatile and beginner-friendly design.",
    "priceOriginal": 16000,
    "priceReviewedAt": "2026-07-22T00:35:36.648653+00:00",
    "aiReviewedAt": "2026-07-22T00:35:36.648653+00:00",
    "aiReviewVersion": 1
  },
  "centaur_khanate_horse_shoe_enchant_service": {
    "id": "centaur_khanate_horse_shoe_enchant_service",
    "name": "Centaur Khanate Horse Shoe Enchant Service",
    "description": "These enchanted horse shoes are forged with the precision of Khanate Farriers. The clopping sound they produce is both a signature of their craftsmanship and a sign that your mount is moving at its peak speed, gaining +10 feet to its movement rate for a week. In addition, you gain advantage on mounted charge attacks, making your charge more devastating.",
    "price": 1000,
    "icon": "🐎",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Mount Speed Boost",
      "Advantage on Mounted Charges"
    ],
    "vendor": "centaur_khanate_steppes",
    "shippedBy": "Hoof Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mount Speed Boost",
        "rules": "When equipped, the enchanted horse shoes increase the mount's speed by +10 feet for a duration of one week. The effect ends when the duration expires or if the shoes are removed."
      },
      {
        "title": "Advantage on Mounted Charges",
        "rules": "You gain advantage on attack rolls made with your mount while charging, up to once per long rest. The advantage is lost if you dismount before making an attack."
      }
    ],
    "levelRequirementReason": "This enchantment is suitable for mounts of all levels and can be used by young adventurers as well.",
    "vendorReason": "The Centaur Khanate Steppes specializes in equine care and equipment, including enchanted shoes that boost mount performance.",
    "shippingDetail": "The enchanted horse shoes are delivered by trusted Hoof Delivery couriers who ensure the delicate equipment arrives safely to your stable.",
    "usage": {
      "activation": "Equipping the shoes is an instantaneous action.",
      "duration": "One week, from moment of application until removal or expiration.",
      "endsWhen": "The duration expires or when the shoes are removed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects a balance between the high-quality craftsmanship and the utility it provides, making it accessible to new adventurers.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T00:35:42.115685+00:00",
    "aiReviewedAt": "2026-07-22T00:35:42.115685+00:00",
    "aiReviewVersion": 1
  },
  "centaur_khanate_steppe_coat": {
    "id": "centaur_khanate_steppe_coat",
    "name": "Centaur Khanate Steppe Coat",
    "description": "This thick wool coat is tailored for nomadic riders of the Centaur Khanate. The heavy fabric resists wind chill, keeping its wearer warm even in harsh steppe conditions. Its sturdy construction grants +1 to mounted speed endurance and provides a +2 bonus to saving throws against cold effects.",
    "price": 1000,
    "icon": "🧥",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Cold Resistance",
      "Mounted Endurance Boost"
    ],
    "vendor": "centaur_khanate_camp",
    "shippedBy": "Horsehair Hide",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cold Resistance",
        "rules": "The coat provides a +2 bonus to saving throws made to resist the effects of cold. This benefit lasts for the duration of one long rest."
      },
      {
        "title": "Mounted Endurance Boost",
        "rules": "Wearing this coat grants you a +1 bonus to mounted speed endurance, which lasts until the start of your next short or long rest."
      }
    ],
    "levelRequirementReason": "The coat's tailored design ensures it provides benefits that can be enjoyed by even novice riders.",
    "vendorReason": "As the coat is made by the very herders of the Centaur Khanate, they have exclusive rights to sell this item.",
    "shippingDetail": "The coat is carefully rolled and shipped in a specially designed container that ensures its integrity during transit.",
    "usage": {
      "activation": "Automatic upon donning the coat",
      "duration": "Lasts until the start of your next short or long rest",
      "endsWhen": "Exhausted after one long rest for Cold Resistance and one short rest for Mounted Endurance Boost",
      "charges": "Unlimited"
    },
    "priceReason": "The coat's rarity, craftsmanship, and the special materials used justify its reduced price.",
    "priceOriginal": 16000,
    "priceReviewedAt": "2026-07-22T00:35:47.133967+00:00",
    "aiReviewedAt": "2026-07-22T00:35:47.133967+00:00",
    "aiReviewVersion": 1
  },
  "centaur_khanate_steppe_grill": {
    "id": "centaur_khanate_steppe_grill",
    "name": "Centaur Khanate Steppe Grill",
    "description": "The Centaur Khanate Steppe Grill is a portable marvel forged from durable steel and adorned with intricate designs of steppe flora. It can be wielded while mounted, providing a +1 bonus to Charisma (Performance) checks made for entertaining crowds. The grill also allows you to cook food twice as fast in windy conditions without fear of it being blown out.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥛",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Mounted Cooking Boost",
      "Windproof"
    ],
    "vendor": "centaur_khanate_steppes",
    "shippedBy": "Steppe Smoke Shipment",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mounted Cooking Boost",
        "rules": "When used while mounted, the user gains a +1 bonus to Charisma (Performance) checks made for entertaining crowds. This effect lasts until the end of your next turn."
      },
      {
        "title": "Windproof",
        "rules": "This grill maintains its heat and function even in strong winds, doubling cooking speed without risking flameout or damage from gusts."
      }
    ],
    "levelRequirementReason": "The Steppe Grills are simple enough for even the novice to use effectively.",
    "vendorReason": "They are a staple of Khanate life and culture, often gifted or sold by the Centaurs themselves.",
    "shippingDetail": "Ships with Steppe Smoke Shipment within one week from the Steppes.",
    "usage": {
      "activation": "Use as a bonus action while mounted to begin grilling or cooking.",
      "duration": "Instantaneous effect; ends at the start of your next turn.",
      "endsWhen": "The effect ends when you dismount, end your turn, or are no longer mounted.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This Steppe Grill is crafted from high-quality materials and designed for both practicality and durability in the harsh conditions of the Steppes, making it a worthwhile investment despite its moderate price.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T00:35:52.621947+00:00",
    "aiReviewedAt": "2026-07-22T00:35:52.621947+00:00",
    "aiReviewVersion": 1
  },
  "centaur_khanate_steppe_yogurt_drink_recipe": {
    "id": "centaur_khanate_steppe_yogurt_drink_recipe",
    "name": "Recipe: Centaur Khanate Steppe Yogurt Drink",
    "description": "This parchment carefully documents a centuries-old recipe for the Centaur Khanate Steppe Yogurt Drink. A fermented, nomadic staple, it's brewed with mare’s milk and consumed to enhance one’s endurance during endless rides across the steppes. The drink is said to be as potent as the winds that blow through the khanate, granting riders an extra burst of speed for their mounts.",
    "price": 1000,
    "icon": "🥛",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Nomadic Endurance",
      "Ride Swiftly"
    ],
    "vendor": "centaur_khanate_steppes",
    "shippedBy": "The Swift Yurt Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Nomadic Endurance",
        "rules": "After drinking the yogurt drink, you gain a +10 foot bonus to your mount’s speed for 4 hours. This effect ends early if you dismount or if the duration expires."
      },
      {
        "title": "Ride Swiftly",
        "rules": "While under the effects of Nomadic Endurance, your mount can use its action on its turn to either move an additional 20 feet or make a Ride check with advantage. This effect is limited to once per long rest."
      }
    ],
    "levelRequirementReason": "The recipe’s complexity and the physical exertion required for brewing it are accessible to adventurers of any level.",
    "vendorReason": "Centaur Khanates have mastered this recipe, teaching it to trusted allies and travelers who seek to traverse their vast steppes with ease.",
    "shippingDetail": "Delivered by the Swift Yurt Express, which ensures that the drink is fresh and potent for consumption upon arrival.",
    "usage": {
      "activation": "Consume as a bonus action.",
      "duration": "4 hours or until you dismount or end your turn.",
      "endsWhen": "The duration expires or if you dismount from the mount.",
      "charges": "Unlimited, but limited to once per long rest."
    },
    "priceReason": "This recipe is crafted with rare ingredients and requires specialized knowledge, making it a valuable commodity among travelers and riders.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-22T00:35:58.586581+00:00",
    "aiReviewedAt": "2026-07-22T00:35:58.586581+00:00",
    "aiReviewVersion": 1
  },
  "chain_chomp_chain": {
    "id": "chain_chomp_chain",
    "name": "Chain Chomp's Leash",
    "description": "A heavy iron chain that once held a fearsome beast. The links still rattle with residual aggression when foes approach within 30 feet, and you feel an uncontrollable urge to bark at any mailman who dares get too close. This relic of ancient times is no mere leash; it's a living reminder of the tamed creature that once roamed free.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛓️",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Rattle Alert",
      "Bark Command"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Iron Chest",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Rattle Alert",
        "rules": "When an enemy moves within 30 feet, the chain rattles and you can make a Wisdom (Perception) check against the creature's Stealth check to notice it. You don't need to use your action on this check."
      },
      {
        "title": "Bark Command",
        "rules": "As an action, you can bark at any creature within 30 feet that is not hostile towards you or your allies. The target must make a Charisma saving throw (DC 12). On a failure, the target is frightened of you for 1 minute."
      }
    ],
    "levelRequirementReason": "This relic requires a character to have reached at least 6th level to wield its power effectively.",
    "vendorReason": "The Valley Trading Post is known for its unique and rare items, making it the perfect place for adventurers to find such an ancient artifact.",
    "shippingDetail": "The chain is carefully packed with straw to prevent any damage during transit.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "Instantaneous or 1 minute (whichever ends first)",
      "endsWhen": "The target succeeds on the saving throw, or when you use an action to bark again.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's rarity and its unique utility in both combat and social situations.",
    "priceOriginal": 22000,
    "priceReviewedAt": "2026-07-22T00:36:04.403009+00:00",
    "aiReviewedAt": "2026-07-22T00:36:04.403009+00:00",
    "aiReviewVersion": 1
  },
  "chain_chomp_leash": {
    "id": "chain_chomp_leash",
    "name": "Chain Chomp Leash",
    "description": "The Chain Chomp Leash is a robust steel chain with a secure loop for a fearsome pet. Crafted by Onyx Hand, it channels the beast’s ferocity into your command. The leash can summon or control a Chain Chomp, which listens to your commands and strikes on your signal.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔗",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Summon Chain Chomp",
      "Controlled Chomp Attacks"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Reinforced Chain",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Summon Chain Chomp",
        "rules": "As an action, you can summon a Chain Chomp as a pet. The Chain Chomp is a CR 2 beast with bite attacks dealing 2d6 piercing damage. It remains under your control until dismissed or until you take damage."
      },
      {
        "title": "Controlled Chomp Attacks",
        "rules": "On your command, the Chain Chomp can make a bite attack as a bonus action. If the attack rolls a natural 1 on the d20, it breaks free from your control and attacks the nearest creature other than you."
      }
    ],
    "levelRequirementReason": "This leash requires at least 6th level to handle its powerful beast companion.",
    "vendorReason": "Onyx Hand specializes in taming and controlling wild creatures, making them the perfect vendor for this unique item.",
    "shippingDetail": "The leash is shipped securely wrapped to ensure safe delivery of such a powerful pet tool.",
    "usage": {
      "activation": "Action",
      "duration": "Until dismissed or you take damage",
      "endsWhen": "Dismissed by the user, or if the Chain Chomp breaks free due to a natural 1 attack roll",
      "charges": "Unlimited"
    },
    "priceReason": "This leash is priced at 1000 XP as it represents a powerful tool for controlling a CR 2 beast without the need for a familiar.",
    "priceOriginal": 22000,
    "priceReviewedAt": "2026-07-22T00:36:10.007684+00:00",
    "aiReviewedAt": "2026-07-22T00:36:10.007684+00:00",
    "aiReviewVersion": 1
  },
  "changeling_hive_camo_jacket": {
    "id": "changeling_hive_camo_jacket",
    "name": "Changeling Hive Camo Jacket",
    "description": "The Changeling Hive Camo Jacket weaves a shifting pattern of colors and textures that blend seamlessly into any terrain. Each hour, it selects one random environment to masterfully mimic, offering advantage on Stealth checks in those conditions while subtly drawing attention elsewhere (disadvantage on other terrains). The jacket's patterns shift during critical moments, potentially distracting observers from your true movements.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧥",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Stealth Mastery",
      "Distraction Point"
    ],
    "vendor": "changeling_hive",
    "shippedBy": "Metamorphic Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth Mastery",
        "rules": "At the start of each hour, you gain advantage on Stealth checks in one randomly determined terrain type. This advantage lasts until the next change (12 hours). You have disadvantage on Stealth checks in all other terrains during this period."
      },
      {
        "title": "Distraction Point",
        "rules": "During a critical conversation or tense situation, the jacket's patterns shift to create a momentary distraction. This effect occurs once per short rest and has no saving throw required to negate its impact."
      }
    ],
    "levelRequirementReason": "The jacket requires minimal proficiency to operate but is complex enough that only low-level characters can afford it.",
    "vendorReason": "Changeling Hive Weavers specialize in adaptive and versatile camo gear, making this jacket a natural addition to their line.",
    "shippingDetail": "Ships via specialized metamorphs that can navigate the most challenging terrains to ensure timely delivery.",
    "usage": {
      "activation": "Instantaneous; the jacket selects its terrain type and patterns automatically at the start of each hour.",
      "duration": "12 hours per cycle",
      "endsWhen": "At the end of one cycle or when a critical conversation occurs (distraction point)",
      "charges": "Unlimited, but only one distraction point can occur per short rest."
    },
    "priceReason": "The jacket's adaptive capabilities and rarity justify its cost as a mid-level rare item.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-22T00:36:15.946990+00:00",
    "aiReviewedAt": "2026-07-22T00:36:15.946990+00:00",
    "aiReviewVersion": 1
  },
  "changeling_hive_chitin_armor": {
    "id": "changeling_hive_chitin_armor",
    "name": "Changeling Hive Chitin Armor",
    "description": "Light armor made from the shed chitin of a changeling. It shifts and adapts to your form.",
    "category": "equipment",
    "price": 19000,
    "icon": "🐛",
    "stock": 6,
    "rarity": "rare",
    "effects": [
      "Light Armor: AC 13 + DEX modifier",
      "Advantage on checks made to impersonate a humanoid",
      "Once per long rest: as a bonus action, change your appearance as per 'Alter Self'"
    ],
    "vendor": "Changeling Hive",
    "shippedBy": "Disguised Parcel",
    "levelRequirement": 5
  },
  "changeling_hive_disguise_kit": {
    "id": "changeling_hive_disguise_kit",
    "name": "Changeling Hive Disguise Kit",
    "description": "A kit containing makeup and tools to mimic a specific humanoid's appearance.",
    "category": "equipment",
    "price": 9500,
    "icon": "🎭",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Grants advantage on Deception checks to appear as someone else",
      "Kit contains enough material for 3 uses",
      "Made by: Changeling Hive"
    ],
    "vendor": "changeling_hive_exchange",
    "shippedBy": "Makeup Case",
    "levelRequirement": 4
  },
  "changeling_hive_disguise_kit_premium": {
    "id": "changeling_hive_disguise_kit_premium",
    "name": "Changeling Hive Disguise Kit (Premium)",
    "description": "Shapeshifting makeup for temporary personas.",
    "price": 18000,
    "icon": "🎭",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Change appearance for 1 hour (Disguise check advantage)",
      "3 uses per kit; fools casual observers",
      "Itches after 30 minutes (disadvantage on Concentration)",
      "Made by: Hive Mimics"
    ],
    "vendor": "changeling_hive_lair",
    "shippedBy": "Shapeshift Surprise",
    "levelRequirement": 6
  },
  "changeling_hive_identity_rental": {
    "id": "changeling_hive_identity_rental",
    "name": "Changeling Hive Identity Rental",
    "description": "Borrow a changeling's face and voice for a day.",
    "category": "services",
    "price": 19500,
    "icon": "🎭",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Disguise Self at will for 24 hours, but you look like a specific changeling named 'Steve'",
      "Steve's mom might call you via telepathy to check in",
      "Advantage on Deception, disadvantage on Performance (Steve can't sing)",
      "Made by: Changeling Hive Identity Dept."
    ],
    "vendor": "changeling_hive",
    "shippedBy": "Metamorphic Delivery",
    "levelRequirement": 6
  },
  "changeling_hive_love_jam_recipe": {
    "id": "changeling_hive_love_jam_recipe",
    "name": "Recipe: Changeling Hive Love Jam",
    "description": "Sweet jam infused with emotional essence for empathy.",
    "price": 7500,
    "icon": "🍓",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Teaches recipe: Simmer fruits with 'love' (30 min); spread on bread to gain advantage on Insight for emotions (2 hours)",
      "Requires: Berries; non-changelings feel tingly",
      "Boosts bonds – +1 to social with loved ones",
      "Made by: Hive Foragers"
    ],
    "vendor": "changeling_hive_nest",
    "shippedBy": "Sticky Sweet Scroll",
    "levelRequirement": 5
  },
  "changeling_hive_mimic_apron": {
    "id": "changeling_hive_mimic_apron",
    "name": "Changeling Hive Mimic Apron",
    "description": "An apron that changes to look clean.",
    "category": "equipment",
    "price": 12500,
    "icon": "🎽",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Always appears clean: advantage on Charisma checks while cooking",
      "Actually filthy: disadvantage on saves vs. disease (you're cooking in germs)",
      "Apron changes color to match your outfit (cosmetic, but fashionable)",
      "Made by: Changeling Hive Textiles"
    ],
    "vendor": "changeling_hive",
    "shippedBy": "Metamorphic Delivery",
    "levelRequirement": 5
  },
  "changeling_hive_mimic_potholder": {
    "id": "changeling_hive_mimic_potholder",
    "name": "Changeling Hive Mimic Potholder",
    "description": "A potholder that looks like your hand.",
    "category": "equipment",
    "price": 7500,
    "icon": "🧤",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Protects from heat: immunity to fire damage from cooking accidents",
      "Looks like your hand: you forget you're holding it (disadvantage on Sleight of Hand)",
      "Potholder changes appearance: sometimes you grab the hot pan (1 fire damage)",
      "Made by: Changeling Hive Textiles"
    ],
    "vendor": "changeling_hive",
    "shippedBy": "Metamorphic Delivery",
    "levelRequirement": 5
  },
  "changeling_hive_recipe_identity_crisis_casserole": {
    "id": "changeling_hive_recipe_identity_crisis_casserole",
    "name": "Recipe: Changeling Hive Identity Crisis Casserole",
    "description": "A casserole that changes flavor mid-bite.",
    "price": 12500,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Grants advantage on Deception checks for 1 hour (you feel deceptive)",
      "You forget your favorite food (disadvantage on checks involving memory)",
      "Casserole changes flavor 1d6 times while eating (confusing but delicious)",
      "Made by: Changeling Hive Cooks"
    ],
    "vendor": "changeling_hive",
    "shippedBy": "Metamorphic Delivery",
    "levelRequirement": 5
  },
  "changeling_hive_shape_shifter_sifter": {
    "id": "changeling_hive_shape_shifter_sifter",
    "name": "Changeling Hive Shape-Shifter Sifter",
    "description": "Sifter that 'adapts' to ingredient sizes for jams.",
    "category": "equipment",
    "price": 7500,
    "icon": "🍓",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Sifts varying sizes; advantage on prep for emotional recipes",
      "Changes mesh for love essences",
      "Shifts form randomly (fun or frustrating)",
      "Made by: Hive Toolmakers"
    ],
    "vendor": "changeling_hive_nest",
    "shippedBy": "Adaptive Alloy",
    "levelRequirement": 5
  },
  "changeling_hive_shapeshift_scarf": {
    "id": "changeling_hive_shapeshift_scarf",
    "name": "Changeling Hive Shapeshift Scarf",
    "description": "Scarf that aids in minor disguises.",
    "price": 18500,
    "icon": "🧣",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Disguise checks for facial alterations",
      "Scarf changes color to match surroundings",
      "Itches if worn too long (disadvantage on Concentration)",
      "Made by: Hive Silkers"
    ],
    "vendor": "changeling_hive_nest",
    "shippedBy": "Chameleon Wrap",
    "levelRequirement": 7
  },
  "changeling_molt_cloak": {
    "id": "changeling_molt_cloak",
    "name": "Changeling Molt Cloak",
    "description": "A cloak made from shed skin, allowing the wearer to perfectly mimic the texture and scent of another.",
    "price": 55000,
    "icon": "🦎",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Allows perfect mimicry of a single humanoid's scent, texture, and superficial appearance",
      "Requires 1 hour to attune to a new target",
      "Made by: Changeling Hive"
    ],
    "vendor": "changeling_hive_exchange",
    "shippedBy": "Live Specimen",
    "levelRequirement": 8
  },
  "chaos_dwarfs_daemon_engine_tune_service": {
    "id": "chaos_dwarfs_daemon_engine_tune_service",
    "name": "Chaos Dwarfs Daemon Engine Tune Service",
    "description": "Boost a construct's power slightly.",
    "price": 16000,
    "icon": "⚙️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Construct +1 attack/damage for 1 day",
      "Risk of chaos mutation (roll d6: minor quirk)",
      "Engine purrs ominously",
      "Made by: Chaos Mechanics"
    ],
    "vendor": "chaos_dwarfs_forge",
    "shippedBy": "Hellbolt Delivery",
    "levelRequirement": 7
  },
  "chaos_dwarfs_hell_bellows": {
    "id": "chaos_dwarfs_hell_bellows",
    "name": "Chaos Dwarfs Hell Bellows",
    "description": "Bellows fueled by chaos for roasts.",
    "category": "equipment",
    "price": 7500,
    "icon": "🥩",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Fans chaotic flames; advantage on unpredictable recipes",
      "Random heat (boon or bane)",
      "Bellows warp slightly",
      "Made by: Chaos Forges"
    ],
    "vendor": "chaos_dwarfs_forge",
    "shippedBy": "Hell Heat Haul",
    "levelRequirement": 5
  },
  "chaos_dwarfs_hellfire_roast_recipe": {
    "id": "chaos_dwarfs_hellfire_roast_recipe",
    "name": "Recipe: Chaos Dwarfs Hellfire Roast",
    "description": "Spicy roast cooked over infernal flames for chaotic vigor.",
    "price": 8500,
    "icon": "🥩",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Teaches recipe: Roast over heat (1 hour); eat to gain random mutation boon (+1 random stat for 2 hours) or bane",
      "Requires: Meat and chaos spices; unpredictable",
      "Chaos gods approve",
      "Made by: Hellforge Cooks"
    ],
    "vendor": "chaos_dwarfs_forge",
    "shippedBy": "Fiery Flesh Folio",
    "levelRequirement": 6
  },
  "chaos_dwarfs_hellforged_leather": {
    "id": "chaos_dwarfs_hellforged_leather",
    "name": "Chaos Dwarfs Hellforged Leather",
    "description": "Tough leather from infernal beasts.",
    "price": 20000,
    "icon": "🧥",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+1 AC against fire or chaos",
      "Leather resists tearing",
      "Emits faint heat (uncomfortable in summer)",
      "Made by: Chaos Forgers"
    ],
    "vendor": "chaos_dwarfs_anvil",
    "shippedBy": "Branded Hide",
    "levelRequirement": 7
  },
  "chaos_heart": {
    "id": "chaos_heart",
    "name": "The Chaos Heart",
    "description": "A dark artifact capable of consuming all worlds. The Void is calling.",
    "category": "forbidden",
    "price": 1500000,
    "icon": "🖤",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Grants invulnerability to all attacks unless pierced by Pure Heart",
      "Can open Void rifts (banish enemies to non-existence)",
      "You slowly lose your soul to the Void",
      "The universe begins to decay while you hold this"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Dimensional Rift",
    "levelRequirement": 200,
    "warning": "WILL END THE CAMPAIGN IF USED IMPROPERLY"
  },
  "chaos_heart_shard": {
    "id": "chaos_heart_shard",
    "name": "Shard of the Chaos Heart",
    "description": "A fragment of dimensional instability. The Cosmic Jesters' holiest relic.",
    "category": "forbidden",
    "price": 750000,
    "icon": "💜",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "On critical hit: Reality warps (roll on Wild Magic table)",
      "Advantage on Chaos-based magic",
      "Disadvantage on all saves vs. Order-based effects",
      "Dimensions occasionally bleed into your vicinity"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "DIMENSIONAL INSTABILITY - PICKUP ONLY",
    "levelRequirement": 12,
    "warning": "Possession punishable by banishment to the Void Between Worlds"
  },
  "cheep_cheep_aquarium": {
    "id": "cheep_cheep_aquarium",
    "name": "Portable Cheep-Cheep Tank",
    "description": "A bubble containing a living fish. Shoots water jets on command.",
    "category": "equipment",
    "price": 11000,
    "icon": "🐟",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Action: 15ft water jet, 2d6 Bludgeoning",
      "Can breathe underwater while holding tank",
      "Cheep-Cheep sings sea shanties",
      "Tank cracks if dropped (fish becomes hostile)"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Water Bubble",
    "levelRequirement": 3
  },
  "cheep_cheep_life_preserver": {
    "id": "cheep_cheep_life_preserver",
    "name": "Cheep Cheep Life Preserver",
    "description": "Floats you safely... while screaming underwater opera.",
    "category": "equipment",
    "price": 15000,
    "icon": "🐠",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "You cannot drown",
      "Swim Speed 30ft",
      "While submerged, emits loud operatic singing (no stealth)",
      "Attracts aquatic predators (roll WIS save DC 12 or summon 1d4 hostile fish)"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Floating Crate",
    "levelRequirement": 3
  },
  "cheep_cheep_net": {
    "id": "cheep_cheep_net",
    "name": "Cheep Cheep Net",
    "description": "A net that catches flying fish for food or bombs.",
    "category": "equipment",
    "price": 6000,
    "icon": "🕸️",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Catch aquatic creatures (1d4 fish per use)",
      "Can entangle flying enemies (restrained, STR save DC 13)",
      "Durable, 5 uses before repair"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Net Roll",
    "levelRequirement": 2
  },
  "chet_rippo_service": {
    "id": "chet_rippo_service",
    "name": "Stat Reallocation",
    "description": "Chet Rippo will rearrange your stats. It might hurt.",
    "category": "services",
    "price": 100000,
    "icon": "🧙‍♂️",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Move 2 points from one Stat to another permanently",
      "Cannot exceed 20"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "In Person",
    "levelRequirement": 5
  },
  "chomp_call_whistle": {
    "id": "chomp_call_whistle",
    "name": "Chain Chomp Call",
    "description": "A rusty whistle that summons a wild Chain Chomp. Hope you're friends.",
    "category": "consumables",
    "price": 15000,
    "icon": "📯",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Summons CR 2 Chain Chomp (1 minute)",
      "50% chance it attacks you instead",
      "Chomp leaves after 1 minute or when bored",
      "Dogs hate the sound"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Chain Wrap",
    "levelRequirement": 5
  }
};
