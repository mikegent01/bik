// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_022 = {
  "hyrule_temple_heart_rod": {
    "id": "hyrule_temple_heart_rod",
    "name": "Temple Heart Rod of the Forgotten King",
    "description": "The Temple Heart Rod of the Forgotten King is a relic carved from the central core of the ancient Temple of the Ancients, where time seems to stand still. Its power allows you to rewind the battlefield's fate, restoring it to its pristine state after combat. For those who wield this rod, an aura of forgotten might accompanies every strike, granting immunity to environmental damage and reducing enemy HP regeneration for a fleeting moment.",
    "category": "equipment",
    "price": 2500,
    "icon": "📦",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporal Rewind",
      "Environmental Immunity"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Rewind",
        "rules": "As a bonus action, the wielder can activate this effect at the end of their turn. The battlefield is restored to its state before combat began, effectively nullifying all changes made during battle. This has no effect on conditions or status effects that do not involve health. The effect lasts for 10 seconds and may be used once per long rest."
      },
      {
        "title": "Environmental Immunity",
        "rules": "For the duration of 2 rounds after using the rod, the wielder is immune to all environmental damage, such as fire, cold, or poison. This effect cannot stack with other forms of immunity and has no save DC."
      }
    ],
    "levelRequirementReason": "The rod's ancient power requires a certain mastery over time and combat to wield effectively.",
    "vendorReason": "Hyrule is renowned for its deep connection with ancient artifacts, making it the keeper of such powerful relics.",
    "shippingDetail": "Shipped via a Rakasha spirit messenger who ensures swift delivery, even across long distances.",
    "usage": {
      "activation": "Bonus Action at the end of your turn",
      "duration": "10 seconds",
      "endsWhen": "The effect duration ends or you use it again during the same rest",
      "charges": "Unlimited (Recharges after a Long Rest)"
    },
    "priceReason": "The rod's rarity and powerful effects justify its high price, making it a valuable asset in any adventuring party.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:01:58.605897+00:00",
    "aiReviewedAt": "2026-07-22T07:01:58.605897+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_heartstone": {
    "id": "hyrule_temple_heartstone",
    "name": "Heartstone of the Ancient Sanctum",
    "description": "The Heartstone of the Ancient Sanctum glows with a serene, otherworldly light from its origins deep within Hyrule's Temple of the Ancients. Crafted by ancient hands and forged in sacred fires, it grants immunity to poison and burn effects, ensuring your purity remains unscathed in the harshest trials. Upon activation, it also boosts stamina regeneration by 30%, allowing you to recover with each step, as if the temple itself rejuvenates you.",
    "category": "equipment",
    "price": 4500,
    "icon": "🌌",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Immunity to Poison",
      "Stamina Boost"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Immunity to Poison",
        "rules": "The Heartstone grants immunity to poison effects. This immunity lasts until the end of your next turn after activation."
      },
      {
        "title": "Stamina Boost",
        "rules": "Increases stamina regeneration by 30% for 1 minute upon activation, providing a passive boost that ends when you are incapacitated or the duration expires."
      }
    ],
    "levelRequirementReason": "The Heartstone's ancient magic requires a deep understanding of Hyrulean lore and power to activate.",
    "vendorReason": "Hyrule is the guardian of this sacred artifact, ensuring it reaches those who have proven their worth in the temple.",
    "shippingDetail": "The Koopa Postal service ensures timely delivery to those who seek the Heartstone's blessings.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "1 minute or until you are incapacitated",
      "endsWhen": "You become incapacitated or at the end of your next turn after activation",
      "charges": "Unlimited"
    },
    "priceReason": "The Heartstone's rarity and unique properties justify its substantial price, reflecting its value in both lore and combat.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T07:01:55.890561+00:00",
    "aiReviewedAt": "2026-07-22T07:01:55.890561+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_key": {
    "id": "hyrule_temple_key",
    "name": "Zora’s Whisper Key",
    "description": "The Zora’s Whisper Key is a delicate, aquamarine key forged from the bones of ancient lake creatures and encrusted with luminescent pearls. When inserted into a temple door, it hums softly, whispering secrets of the lake’s depths. It grants temporary water-based teleportation within the immediate vicinity, allowing adventurers to dart between submerged chambers in moments. The key also reveals hidden underwater pathways on any map, providing a tactical advantage for navigating the treacherous temples.",
    "price": 1000,
    "icon": "🔑",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Temporarily Teleports Between Submerged Chambers",
      "Reveals Hidden Underwater Pathways"
    ],
    "vendor": "hyrule",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Water-Based Teleportation",
        "rules": "The Zora’s Whisper Key allows the user to teleport between submerged chambers within a 30-foot radius. This effect lasts for up to 1 minute and can be used once per long rest."
      },
      {
        "title": "Reveals Hidden Underwater Pathways",
        "rules": "Upon insertion into a temple door, this key illuminates hidden underwater pathways on any map within the immediate area. The revelation lasts until the next dawn or until the user uses another effect of this key."
      }
    ],
    "levelRequirementReason": "This key is designed for adventurers who are just beginning their journey into the Zora’s Domain, offering them an essential tool to explore these ancient temples.",
    "vendorReason": "Hyrule is a trusted vendor known for its connections with ancient artifacts and relics from across Hyrule's many domains.",
    "shippingDetail": "The Shy Guys ensure the key arrives safely, but delivery can take up to one week due to the delicate nature of the item.",
    "usage": {
      "activation": "Standard Action",
      "duration": "1 minute or until used again",
      "endsWhen": "At the end of each long rest",
      "charges": "Unlimited"
    },
    "priceReason": "This key is priced at a reasonable rate considering its rarity and the convenience it offers to adventurers navigating the Zora’s Domain.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T07:02:01.487977+00:00",
    "aiReviewedAt": "2026-07-22T07:02:01.487977+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_key_of_whispers": {
    "id": "hyrule_temple_key_of_whispers",
    "name": "Temple Key of Whispers",
    "description": "The Temple Key of Whispers, a sleek obsidian key etched with ancient runes, whispers secrets of the past when wielded by one in perfect focus. It opens only the most sacred temple doors, granting temporary stealth and revealing enemy weaknesses that even the keenest eyes miss. This key is said to have been crafted from the heartwood of a long-felled sacred tree, its power tied to moments of pure concentration.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Silent Stealth",
      "Reveal Weaknesses"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Silent Stealth",
        "rules": "Activate as a bonus action. You gain +50% stealth during movement for 1 minute, but you must maintain perfect focus. If your focus drops below 40%, the effect ends immediately."
      },
      {
        "title": "Reveal Weaknesses",
        "rules": "Upon successful use, you can target an enemy within 30 feet to reveal a weakness that lasts for 1 minute. This effect has a range of 60 feet and requires concentration. The save DC is 15."
      }
    ],
    "levelRequirementReason": "Requires at least level 5 to wield the key, as its power draws on the user's heightened focus.",
    "vendorReason": "Hyrule is renowned for its sacred relics and ancient artifacts, making it a fitting vendor for this key of whispers.",
    "shippingDetail": "Ships via the Void Drifter Relay, ensuring swift delivery within 3 days.",
    "usage": {
      "activation": "Activate as a bonus action.",
      "duration": "1 minute per use.",
      "endsWhen": "Focus drops below 40%, or you lose concentration on the revealed weakness.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The key's rarity and unique crafting make it a valuable asset, worth 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:01:44.794459+00:00",
    "aiReviewedAt": "2026-07-22T07:01:44.794459+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_key_ring": {
    "id": "hyrule_temple_key_ring",
    "name": "Key of the Shattered Chamber",
    "description": "The Key of the Shattered Chamber is a delicate ring, its surface etched with runes that shimmer faintly in the dark. Crafted from ancient temple metal and imbued with the essence of forgotten realities, it grants access to doors sealed by time and chaos. When used near unstable architecture, it can absorb minor reality tears, potentially revealing hidden passages within. This artifact's power wears thin after each use but never breaks, ensuring its resilience through countless ages.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Opens ancient, sealed doors",
      "Absorbs minor reality tears"
    ],
    "vendor": "hyrule",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Door Unlocking",
        "rules": "As an action, the wielder can use the key to unlock a door. The DC for any Perception check required to find hidden traps or secret panels is reduced by 5 when used within 30 feet of ancient architecture."
      },
      {
        "title": "Reality Absorption",
        "rules": "When used near unstable structures, the key can absorb minor reality tears, reducing the DC to save against effects originating from such locations by 2. This effect is limited to once per long rest."
      }
    ],
    "levelRequirementReason": "The key's power is accessible to adventurers of all levels but requires a minimum of first-level proficiency in investigation or history.",
    "vendorReason": "Hyrule's ancient temples and libraries are the birthplace of such relics, making Hyrule the most reliable vendor for these mystical artifacts.",
    "shippingDetail": "Due to its fragile nature, the key is shipped in a custom, magically reinforced box designed by the Shy Guys themselves.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; duration of benefit varies based on effect used",
      "endsWhen": "Exhausted after one use or when not within range for absorption effects",
      "charges": "Unlimited, but only once per long rest for reality absorption"
    },
    "priceReason": "The Key of the Shattered Chamber's price reflects its rare origin and enduring utility in unlocking ancient mysteries.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:02:14.277012+00:00",
    "aiReviewedAt": "2026-07-22T07:02:14.277012+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_key_rune": {
    "id": "hyrule_temple_key_rune",
    "name": "Temple Key Rune",
    "description": "The Temple Key Rune, a glowing rune inscribed with arcane symbols, hums with ancient power as it unlocks sealed doors or vaults within a hundred meters. Its resonant chime not only breaks wards and traps but also triggers hidden mechanisms, revealing secrets long forgotten in the heart of the temple. The rune's glow intensifies when activated, casting an ethereal light that illuminates dark corners even after its effect has faded.",
    "price": 1000,
    "icon": "🔐",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Unlocks sealed doors or vaults",
      "Disrupts wards and traps"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unlocking Mechanisms",
        "rules": "When activated, the Temple Key Rune emits a resonant chime that can unlock any sealed door or vault within 100 meters. This effect is instantaneous and requires no save. The rune can be used once per short rest."
      },
      {
        "title": "Disrupting Wards",
        "rules": "The rune's chime disrupts wards and traps for up to 5 seconds, rendering them inactive within a 10-meter radius around the user. Enemies in this area must make a DC 13 Dexterity saving throw or be stunned until their next action. This effect can only occur once per long rest."
      }
    ],
    "levelRequirementReason": "The Temple Key Rune's ancient power is accessible to adventurers of all levels, making it a versatile tool for exploration.",
    "vendorReason": "Hyrulean artifacts are renowned for their historical and magical significance, and the Temple Key Rune is no exception.",
    "shippingDetail": "The rune arrives in a sturdy, protective case to ensure its ancient power remains intact during transit.",
    "usage": {
      "activation": "Standard action",
      "duration": "Instantaneous for unlocking; 5 seconds for disrupting wards",
      "endsWhen": "Effect ends when the duration expires or the user is incapacitated",
      "charges": "Unlimited, but one use per short rest"
    },
    "priceReason": "The Temple Key Rune's rarity and unique ability justify its moderate price of 1000 XP.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:02:39.150418+00:00",
    "aiReviewedAt": "2026-07-22T07:02:39.150418+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_keyblade": {
    "id": "hyrule_temple_keyblade",
    "name": "Keyblade of the Lost Temple",
    "description": "The Keyblade of the Lost Temple is a glowing relic forged from ancient Hyrulean steel within the sacred ruins. Its heart-shaped guard glows with ethereal blue light, and its blade bears intricate carvings of forgotten symbols. This weapon opens sealed doors and triggers hidden mechanisms, but careless use risks setting off deadly traps with a 25% chance. In temple zones, it deals +10% bonus damage to foes, ensuring swift passage through ancient halls.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Seals and Traps",
      "Temple Bonus Damage"
    ],
    "vendor": "hyrule",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Seals and Traps",
        "rules": "Activates locked doors or hidden mechanisms as a bonus action. Setting off traps requires a DC 15 Dexterity saving throw; on a failed save, the wielder takes 2d6 damage from the trap."
      },
      {
        "title": "Temple Bonus Damage",
        "rules": "+10% additional damage to enemies within temple zones for an hour after activation. The effect ends if the keyblade is sheathed or used in combat outside of a temple zone."
      }
    ],
    "levelRequirementReason": "This keyblade requires a minimum level to handle its ancient magic and intricate mechanisms.",
    "vendorReason": "The Hyrulean market is well-known for artifacts from the Sacred Realm, including this lost temple relic.",
    "shippingDetail": "Delivered by Shy Guys with a 1-day delay; must be picked up within 3 days of notification.",
    "usage": {
      "activation": "Bonus action to open doors or activate mechanisms, or as an action to set off traps.",
      "duration": "Instantaneous effect when activated. Temple bonus damage lasts for one hour after activation.",
      "endsWhen": "The trap is triggered, the keyblade is sheathed, or used in combat outside of a temple zone.",
      "charges": "Unlimited uses; recharged upon entering another temple zone."
    },
    "priceReason": "This keyblade balances rarity and power by requiring a lower level requirement while maintaining its unique abilities within the game's economy.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:02:15.618396+00:00",
    "aiReviewedAt": "2026-07-22T07:02:15.618396+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_keychain": {
    "id": "hyrule_temple_keychain",
    "name": "Temple Keychain of the Fractured Gate",
    "description": "The Temple Keychain of the Fractured Gate is a delicate keychain forged from ancient Hyrulean bronze, adorned with intricate sigils that shimmer faintly in the light. It allows its bearer to bypass locks on sacred temple doors with ease and, upon entering a temple, triggers a 'Temple Echo' event—a resonant surge that grants all party members temporary buffs. The keychain also enhances one's luck, increasing the chance of finding hidden treasures within the temple.",
    "price": 1000,
    "icon": "🗝",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Bypasses temple locks",
      "Triggers Temple Echo"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bypass Locks",
        "rules": "The keychain allows the user to bypass locked doors with a simple tap. This effect has no save DC and does not consume charges or require activation."
      },
      {
        "title": "Temple Echo",
        "rules": "When the keychain is brought into a temple, it triggers a 'Temple Echo' event. All party members gain a +1 bonus to attack rolls, saving throws, and ability checks for 1 hour. The duration ends when the user leaves the temple grounds."
      }
    ],
    "levelRequirementReason": "The keychain is crafted from common materials but its enchantment provides significant utility in certain situations.",
    "vendorReason": "Hyrulean vendors are known for their cultural artifacts, and this keychain is a symbol of the sacred temples that draw pilgrims from afar.",
    "shippingDetail": "Delivered via Pipe Express, this item ships quickly with no special handling required.",
    "usage": {
      "activation": "Passive effect; activation required to enter temple grounds",
      "duration": "1 hour upon entering the temple",
      "endsWhen": "Leaving the temple grounds",
      "charges": "Unlimited"
    },
    "priceReason": "The keychain combines practical utility with cultural significance, making it a valuable yet balanced purchase.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:02:27.647266+00:00",
    "aiReviewedAt": "2026-07-22T07:02:27.647266+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_mantle": {
    "id": "hyrule_temple_mantle",
    "name": "Guardian’s Mantle of the Shattered Spire",
    "description": "The Guardian’s Mantle of the Shattered Spire is a tattered, yet resilient cloak worn by those who have faced the Temple's ancient trials. Woven from threads spun in the heart of the spire itself, it grants resilience to environmental hazards and echoes of battles past. Those who wear it find their health slowly restored after each confrontation with a temple boss, as if the very cloak draws strength from the fallen.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Resilience Against Hazards",
      "Boss Battle Health Regen"
    ],
    "vendor": "hyrule",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Resilience Against Hazards",
        "rules": "The mantle grants the wearer +12% damage reduction from environmental hazards. This effect is passive and does not require activation."
      },
      {
        "title": "Boss Battle Health Regen",
        "rules": "After defeating a temple boss, the mantle grants the wearer a 20% chance to regenerate health equal to their maximum hit points over 1 hour. This effect can only occur once per day and is exhausted upon use."
      }
    ],
    "levelRequirementReason": "Survivors of the Temple's trials are typically seasoned adventurers by level 6, capable of handling its challenges.",
    "vendorReason": "Hyrule is a trusted source for relics and artifacts from ancient temples like the Shattered Spire.",
    "shippingDetail": "The cloak arrives with a special delivery, ensuring it reaches its destination without mishap. However, the wearer must swear to protect the mantle's secrets upon receipt.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until defeated in battle or until exhausted after use",
      "endsWhen": "Upon defeat of a temple boss or after one hour if health regen is triggered, this effect ends and may not be used again the following day.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The mantle's rarity and the unique properties derived from its ancient origins justify a price of 1000 XP.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T07:02:45.499495+00:00",
    "aiReviewedAt": "2026-07-22T07:02:45.499495+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_mechanism": {
    "id": "hyrule_temple_mechanism",
    "name": "Gear of the Lost Guardian",
    "description": "The Gear of the Lost Guardian is a rusted mechanical cog retrieved from the Temple of the Guardian. Its gears hum with ancient power, allowing the wielder to manipulate gravity within confined spaces. Only those who have faced the temple’s trials may wield this relic, as it responds only to one who has proven their mettle in its chambers. It grants a 20% bonus to jump height and allows for one use of gravity pull every 30 seconds.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Jump Height Boost",
      "Gravity Pull"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Jump Height Boost",
        "rules": "The wielder gains a +2 bonus to their jump height. This effect is instantaneous and lasts until the end of their next turn."
      },
      {
        "title": "Gravity Pull",
        "rules": "Activates as a reaction when the user is falling. The Gear of the Lost Guardian allows the user to redirect themselves 5 feet horizontally or vertically, reducing fall damage by 50% for 5 seconds. This effect can be used once every 30 seconds."
      }
    ],
    "levelRequirementReason": "Only those who have faced and survived the Temple of the Guardian’s trials are considered worthy to wield this ancient relic.",
    "vendorReason": "The Hyrulean vendors are known for their connection with ancient relics, making them the ideal purveyors of such an artifact.",
    "shippingDetail": "Due to its fragile nature and the importance of its provenance, it is shipped via Koopa Postal’s express courier service, ensuring safe delivery.",
    "usage": {
      "activation": "Reaction (for Gravity Pull) or Passive (for Jump Height Boost)",
      "duration": "Instantaneous for Jump Height; 5 seconds for Gravity Pull",
      "endsWhen": "The user ceases to be in a fall when using Gravity Pull, otherwise ends at the end of their next turn.",
      "charges": "One use every 30 seconds"
    },
    "priceReason": "The Gear of the Lost Guardian is a rare and powerful relic that balances well with its price point, offering significant utility but not overpowered effects.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T07:02:30.726609+00:00",
    "aiReviewedAt": "2026-07-22T07:02:30.726609+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_mind_blade": {
    "id": "hyrule_temple_mind_blade",
    "name": "Temple Mind Blade",
    "description": "The Temple Mind Blade, forged from the very heart of a long-dead guardian, hums with the echoes of ancient battles. Its blade cuts through illusions and the whispers of deceit, leaving behind a lingering echo that repeats your last attack's sound and pattern. This weapon is not only a tool of combat but also a conduit for echoing strikes that can reflect your enemies' own damage back to them.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Cuts Through Illusions",
      "Echoing Strike"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Cuts Through Illusions",
        "rules": "When you strike an illusion, the blade creates a brief echo that lasts for 3 seconds. During this time, any creature affected by the echo must succeed on a DC 14 Wisdom saving throw or be stunned until the end of their next turn."
      },
      {
        "title": "Echoing Strike",
        "rules": "As an action, you can activate the blade to reflect your attack's damage back to the target and any creatures within 5 feet. This effect lasts for 2 seconds. The reflection deals force damage equal to half of the original damage dealt."
      }
    ],
    "levelRequirementReason": "The blade requires a certain level of mastery in combat to wield its echoing abilities effectively.",
    "vendorReason": "Hyrule's vendors are known for their unique and powerful artifacts, making the Temple Mind Blade an expected addition.",
    "shippingDetail": "The blade is carefully couriered by the Rakasha Spirit Walk, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Action or Reaction (to activate echoing strike)",
      "duration": "Instantaneous (echo effect lasts for 3 seconds; reflection lasts for 2 seconds)",
      "endsWhen": "The echo ends when the target makes a successful saving throw, and the reflection ends when it deals damage.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to reflect its rarity and unique abilities, ensuring players can afford it without overpowered play.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T21:57:50.022849+00:00",
    "aiReviewedAt": "2026-07-22T21:57:50.022849+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_mirage_key": {
    "id": "hyrule_temple_mirage_key",
    "name": "Mirage Key of the Forgotten Temple",
    "description": "The Mirage Key of the Forgotten Temple is a delicate iron key forged from the very essence of the Temple of the Whispering Wind. Crafted by ancient masons, it whispers secrets of forgotten realms when held to the light. This key can unlock hidden chambers by distorting reality briefly, allowing you to bypass locked doors with ease—but be wary, for each use leaves a faint echo that could lead an enemy directly to your last step.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔍",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Bypasses Locked Doors",
      "Leaves Echo Trail"
    ],
    "vendor": "hyrule",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Bypass Locks",
        "rules": "When used, the key distorts reality for up to 10 seconds, allowing you to bypass a locked door. You must be within 30 feet of the door and have line of effect. This effect has no save DC and can only be used once per short or long rest."
      },
      {
        "title": "Echo Trail",
        "rules": "For every successful use, you leave behind an echo that lasts for 1 minute. The echo leaves a faint sound trail that can be tracked by creatures with the Tracking feat. This effect has no save DC and is permanent unless dispelled."
      }
    ],
    "levelRequirementReason": "The key's distortion magic requires a user of at least fifth level to wield effectively.",
    "vendorReason": "Hyrule's ancient relics are often traded by the Hyrulean authorities, and this key is no exception.",
    "shippingDetail": "The key must be shipped discreetly as it contains powerful enchantments. Shipment takes an extra day due to customs checks.",
    "usage": {
      "activation": "Standard action",
      "duration": "Up to 10 seconds per use",
      "endsWhen": "The distortion effect ends naturally, or if dispelled by a creature with the Tracking feat.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this key's price reflects its powerful but limited utility in bypassing locks and its unique echo effect.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:02:58.516008+00:00",
    "aiReviewedAt": "2026-07-22T07:02:58.516008+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_mirage_rod": {
    "id": "hyrule_temple_mirage_rod",
    "name": "Mirage of the Sacred Well",
    "description": "The Mirage of the Sacred Well is a staff forged from the very essence of Hyrule’s sacred wells, its surface shimmering like rippling water in the light. This ancient artifact warps reality within the Temple's shifting corridors, turning foes into ephemeral illusions that vanish upon contact. It grants you an evasion edge, allowing you to slip through tight spaces and dodge attacks with ease, while also offering a slim chance of spontaneous teleportation when struck.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Illusionary Disruption",
      "Evasion Edge"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Illusionary Disruption",
        "rules": "When an enemy attacks you within the Temple, they are reduced to an illusion for two turns. This effect ends if the target is hit by another attack or spell. There is no save required."
      },
      {
        "title": "Evasion Edge",
        "rules": "You gain a +15% evasion chance when navigating temple environments. This effect lasts until you leave the Temple area or take damage from an enemy, at which point it ends immediately."
      }
    ],
    "levelRequirementReason": "The staff's magic is complex and requires a certain mastery of control to wield effectively.",
    "vendorReason": "Hyrule's sacred guardians have long traded this staff, as it aids in protecting the Temple from intruders.",
    "shippingDetail": "The staff must be shipped by a trusted courier, as its magical properties can disrupt standard mail services.",
    "usage": {
      "activation": "Instantaneous reaction to an enemy attack within the Temple.",
      "duration": "2 turns for each enemy reduced to illusion.",
      "endsWhen": "Hit by another attack or spell, or when you leave the Temple area.",
      "charges": "Unlimited; recharges upon leaving the Temple."
    },
    "priceReason": "The staff's rarity and unique properties justify its moderate price in Hyrule’s market.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:03:32.205557+00:00",
    "aiReviewedAt": "2026-07-22T07:03:32.205557+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_mirror_shard": {
    "id": "hyrule_temple_mirror_shard",
    "name": "Mirror Shard of the Temple of Reflection",
    "description": "The Mirror Shard of the Temple of Reflection is a shimmering fragment salvaged from an ancient mirror, now cracked and broken beyond repair. It grants its user the uncanny ability to momentarily glimpse through the eyes of their foes, predicting their next move with chilling accuracy. The shard also subtly enhances reflexes, granting a +1 bonus to Dexterity saving throws for the duration of this effect. However, using it while in motion risks temporary blindness.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Vision of Enemy Moves",
      "Dexterity Saving Throws Boost"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Vision of Enemy Moves",
        "rules": "As a bonus action, the user can briefly see through an enemy's eyes for up to 10 seconds. This grants advantage on Dexterity (Stealth) checks and insight into their next move, but it also provokes opportunity attacks from creatures they are not already targeting. The effect ends if the user is incapacitated or changes targets."
      },
      {
        "title": "Dexterity Saving Throws Boost",
        "rules": "For 1 minute after using the shard in combat, the user gains a +1 bonus to Dexterity saving throws. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Requires at least level 5 to wield this powerful relic of ancient magic.",
    "vendorReason": "Hyrule is the custodian of many relics from its sacred temples, including those of the Temple of Reflection.",
    "shippingDetail": "The shard must be carefully transported by a Rakasha spirit to ensure it arrives in pristine condition.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "10 seconds or until the user changes targets, whichever comes first",
      "endsWhen": "User is incapacitated or changes target",
      "charges": "Once per short rest"
    },
    "priceReason": "The shard's rare and magical properties, combined with its unique utility in combat, justify this balanced XP cost.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:03:22.307231+00:00",
    "aiReviewedAt": "2026-07-22T07:03:22.307231+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_shard_of_echoes": {
    "id": "hyrule_temple_shard_of_echoes",
    "name": "Shard of Echoes",
    "description": "The Shard of Echoes is a delicate fragment of temple glass, resonating with the whispers of ancient rituals. Crafted from the heart of Hyrule's Echo Temple, it amplifies your voice during battle, disrupting enemy focus and unsettling their minds. When you speak true, its echo disrupts spellcasting within 30 feet, forcing enemies to save or be silenced for a round. It can also trigger a temple resonance aura that grants allies +2d6 temporary hit points for the duration of a short rest.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+2d6 temp HP on ally short rest",
      "Silence enemy spellcasting within 30 feet"
    ],
    "vendor": "hyrule",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Disrupt Spellcasting",
        "rules": "When you activate the Shard of Echoes, a resonant echo disrupts an enemy’s spellcasting. The target must succeed on a DC 15 Wisdom saving throw or be silenced for one minute."
      },
      {
        "title": "Temple Resonance Aura",
        "rules": "Activate once per short rest to grant allies within 30 feet +2d6 temporary hit points until the end of your next turn. This effect ends if you are incapacitated, die, or leave the area."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to access the powerful resonant effects.",
    "vendorReason": "Hyrulean vendors are trusted for their knowledge of ancient artifacts and rituals.",
    "shippingDetail": "Delivered through secret underground tunnels, ensuring safe passage to the buyer.",
    "usage": {
      "activation": "Activates as a bonus action when spoken.",
      "duration": "Instantaneous effect for Disrupt Spellcasting; lasts until end of next turn for Temple Resonance Aura.",
      "endsWhen": "Disrupted spellcasting ends on save failure. Temple Resonance Aura ends if you are incapacitated, die, or leave the area.",
      "charges": "Unlimited uses per short rest"
    },
    "priceReason": "Balanced price considering its powerful effect and rarity.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:03:55.989728+00:00",
    "aiReviewedAt": "2026-07-22T07:03:55.989728+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_silence_pearl": {
    "id": "hyrule_temple_silence_pearl",
    "name": "Pearl of the Silent Temple",
    "description": "The Pearl of the Silent Temple, a sacred relic from Hyrule's ancient Temple of the Unseen, whispers secrets of bygone eras when held to your ear. Crafted in the heart of the temple's forges, its surface gleams with an ethereal sheen, pulsing faintly as it suppresses magic within a 30-meter radius, cutting through spells and enchantments like a silent blade. This artifact not only disrupts enemy sorcery but also reveals hidden passageways in ancient ruins, guiding explorers to forgotten treasures and traps.",
    "price": 1000,
    "icon": "🌙",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Suppresses Magic Radius",
      "Reveals Hidden Passages"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Suppressed Magic Radius",
        "rules": "When activated by the bearer holding the pearl to their ear, all magic within a 30-meter radius is suppressed for 1 minute. This effect has no save DC and does not require charges or recharge."
      },
      {
        "title": "Reveal Hidden Passages",
        "rules": "The pearl grants the user a +2 insight bonus on checks to uncover hidden or secret doors within ancient ruins, palaces, or temples. This benefit lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This artifact requires no specific level as it is an item that aids exploration and magic disruption.",
    "vendorReason": "Hyrule, being a hub for ancient relics, naturally stocks this powerful tool for adventurers seeking to explore its many hidden temples and dungeons.",
    "shippingDetail": "Delivered by Boo Spectral Mail, the delivery is swift but requires a special signature upon arrival.",
    "usage": {
      "activation": "Passive effect activated when held to ear; reveal passages as an action at start of turn",
      "duration": "1 minute or until end of next long rest for hidden passage reveal",
      "endsWhen": "Magic suppression ends after the specified duration, passageway revelation ends with a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "This balanced price reflects its utility in both combat and exploration without skewing power levels.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T07:03:50.661512+00:00",
    "aiReviewedAt": "2026-07-22T07:03:50.661512+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_soul_amber": {
    "id": "hyrule_temple_soul_amber",
    "name": "Temple Soul Amber",
    "description": "Temple Soul Amber is a luminous amber fragment forged from the very essence of an ancient temple guardian spirit. It amplifies your attacks, turning each strike into a shimmering burst of divine energy, and reveals hidden paths in sacred ruins, illuminating forgotten routes with a radiant glow that lasts for ten seconds. When combat erupts within its light, it grants temporary immunity to status effects, ensuring you remain unshaken by the temple's ancient maladies.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% damage to enemy defenses",
      "Reveals hidden temple entrances"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Divine Amplification",
        "rules": "Activate as a bonus action. For the duration of your next turn, deal an additional +20% damage to all attacks against enemies within range (15 feet). This effect does not stack with other sources of damage increases."
      },
      {
        "title": "Sacred Illumination",
        "rules": "Activate as a standard action. Reveals hidden temple entrances within 30 feet for the duration of one round (10 seconds). If used in combat, the light intensifies, granting temporary immunity to all status effects until the end of your next turn."
      }
    ],
    "levelRequirementReason": "The Temple Soul Amber requires a minimum level of 5 due to its divine essence and potent abilities.",
    "vendorReason": "Hyrule is known for its sacred artifacts, and the Temple Soul Amber's origins in an ancient temple make it a prime candidate for their offerings.",
    "shippingDetail": "Due to the fragile nature of this item, Pipe Express will deliver it via special courier, ensuring safe arrival.",
    "usage": {
      "activation": "Activates as a bonus action or standard action.",
      "duration": "Divine Amplification lasts for the duration of your next turn. Sacred Illumination reveals hidden paths for one round (10 seconds).",
      "endsWhen": "Exhausted after use, with no recharge time required.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced price reflects the item's divine origin and potent abilities, making it accessible yet valuable.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:04:15.005432+00:00",
    "aiReviewedAt": "2026-07-22T07:04:15.005432+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_soul_catalyst": {
    "id": "hyrule_temple_soul_catalyst",
    "name": "Soul Catalyst of the Forgotten Temple",
    "description": "The Soul Catalyst of the Forgotten Temple is a glowing, ethereal core embedded with the essence of a temple’s guardian. Crafted from the heartwood of an ancient tree and imbued with divine magic by the priests of Hyrule, it allows its wielder to channel untold power. By activating this relic, you can call forth spectral echoes that deal 100% damage for 10 seconds and grant a +50 bonus to spell attack rolls for three turns.",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Spectral Echo Call",
      "Divine Spell Boost"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Spectral Echo Call",
        "rules": "By using an action, you can summon spectral echoes that deal 100% damage to all creatures within a 30-foot radius for 10 seconds. This ability has a recharge time of one short rest."
      },
      {
        "title": "Divine Spell Boost",
        "rules": "For three turns, your spell attack rolls are increased by +50. You can use this effect once per long rest."
      }
    ],
    "levelRequirementReason": "This relic requires a high level of magical prowess to wield effectively.",
    "vendorReason": "Hyrule is renowned for its ancient artifacts and the preservation of divine magic.",
    "shippingDetail": "Ships within 3 days, delivered by Lakitu's fastest drones.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds",
      "endsWhen": "At the end of your next turn after use or when you take another action on your turn",
      "charges": "Recharge one short rest"
    },
    "priceReason": "Balanced to provide significant utility and power without overbalancing.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T07:03:47.695654+00:00",
    "aiReviewedAt": "2026-07-22T07:03:47.695654+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_soul_cloth": {
    "id": "hyrule_temple_soul_cloth",
    "name": "Temple Soul Cloak",
    "description": "Woven from the essence of ancient temple spirits, the Temple Soul Cloak is a shimmering garment that absorbs enemy magic and grants the wearer an aura of sacred silence, enhancing stealth and defense against enchantments. This relic of Hyrulean lore reduces incoming magical damage by half for up to 10 minutes after each successful absorption, while also granting a +2 bonus to Dexterity (Stealth) checks for 5 seconds upon activation.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs Magic Damage",
      "Enhances Stealth"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Magic Absorption",
        "rules": "When the wearer takes magical damage, they can activate this effect as a reaction to reduce the incoming damage by half. The effect lasts for up to 10 minutes and can be used once per short or long rest."
      },
      {
        "title": "Stealth Boost",
        "rules": "The Temple Soul Cloak grants the wearer a +2 bonus to Dexterity (Stealth) checks when activated, which lasts for 5 seconds. This effect can be used up to three times per day."
      }
    ],
    "levelRequirementReason": "This cloak is designed for adventurers of all levels but requires at least first-level proficiency in Stealth.",
    "vendorReason": "Hyrule's ancient temples and their guardians have long revered the Temple Soul Cloak, making it a staple among Hyrule's vendors.",
    "shippingDetail": "The cloak is shipped in a specially enchanted pipe that ensures swift delivery, even across treacherous terrains.",
    "usage": {
      "activation": "Reaction or Action (Stealth Boost)",
      "duration": "Instantaneous (Magic Absorption), 5 seconds (Stealth Boost)",
      "endsWhen": "At the end of each short or long rest (Magic Absorption), after 5 seconds (Stealth Boost)",
      "charges": "Unlimited, but can only be used once per short or long rest (Magic Absorption), up to three times per day (Stealth Boost)"
    },
    "priceReason": "The cloak's rarity and the unique magic it contains justify its fair value of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:46:17.863496+00:00",
    "aiReviewedAt": "2026-07-22T19:46:17.863496+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_soul_core": {
    "id": "hyrule_temple_soul_core",
    "name": "Soul Core of the Temple Guardian",
    "description": "The Soul Core of the Temple Guardian, a crystalline heart forged from the essence of a fallen guardian, absorbs enemy magic and converts it into potent offensive power. When fully charged after striking three foes, this core unleashes a piercing beam capable of slicing through multiple enemies in one devastating strike. The core's magical energy resonates with the ancient temple's sacred geometry, reducing all nearby enemies' magic resistance by 30% while active.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 0,
    "rarity": "rare",
    "effects": [
      "Absorbs Magic and Enhances Attacks",
      "Reduces Enemy Magic Resistance"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Absorbs Magic and Enhances Attacks",
        "rules": "When the user deals damage to three targets within a 30-foot radius with any weapon attack, the Soul Core charges for 30 seconds. During this time, it absorbs 50% of incoming magic damage and converts it into 10% additional damage on all attacks made until the core is fully charged."
      },
      {
        "title": "Reduces Enemy Magic Resistance",
        "rules": "While the Soul Core is active (up to a maximum of 2 minutes), it reduces all enemy targets within 30 feet by 30%. This effect cannot be countered with any spell or ability that counters magic resistance."
      }
    ],
    "levelRequirementReason": "The core requires the user's intimate knowledge and connection to ancient magical energies, which is only available to those of 8th level or higher.",
    "vendorReason": "Only the esteemed Hyrulean Temple has access to such sacred relics forged from the essence of its guardians.",
    "shippingDetail": "The core is shipped under strict magical wards, ensuring safe delivery and preventing any tampering during transit.",
    "usage": {
      "activation": "Fully charges after three weapon attacks against targets within a 30-foot radius. The effect ends when the user drops to 0 hit points or if the core is destroyed.",
      "duration": "Up to 2 minutes, or until fully charged and used.",
      "endsWhen": "If the user drops to 0 hit points or if the core is destroyed.",
      "charges": "Unlimited charges; the core recharges after a long rest."
    },
    "priceReason": "The core's value lies in its unique ability to convert magical energy into combat power, making it a rare and valuable asset for any fighter or spellcaster.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T07:04:49.226531+00:00",
    "aiReviewedAt": "2026-07-22T07:04:49.226531+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_soul_gem": {
    "id": "hyrule_temple_soul_gem",
    "name": "Temple Soul Gem",
    "description": "The Temple Soul Gem is a glowing crystal forged from the essence of an ancient guardian who fought to protect Hyrule's holy grounds. Captured from the soul of this brave spirit, it hums with a potent negative energy that can be harnessed by the worthy. This gem not only absorbs lethal negative energy but also grants its wielder a blessed immunity to fear and confusion, ensuring calm in even the most haunted of ruins.",
    "price": 1000,
    "icon": "💎",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Absorbs Negative Energy",
      "Immunity to Fear and Confusion"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Absorption of Negative Energy",
        "rules": "When activated by a bonus action, this gem absorbs up to 1000 negative energy points. It can be used once per long rest."
      },
      {
        "title": "Immunity to Fear and Confusion",
        "rules": "For the duration of one short or long rest, the wielder gains immunity to fear and confusion spells and effects. This immunity does not stack with other similar immunities."
      }
    ],
    "levelRequirementReason": "This gem is crafted from the essence of a powerful ancient guardian and requires significant spiritual strength to wield.",
    "vendorReason": "Hyrule, as the protector of sacred sites, holds this item in its vaults for those who seek to protect and honor its holy places.",
    "shippingDetail": "Ships via Boo Spectral Mail, ensuring safe delivery even through the most haunted zones.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "One Short or Long Rest",
      "endsWhen": "The effect ends when a short or long rest is completed",
      "charges": "Once per Long Rest"
    },
    "priceReason": "Crafted from the essence of an ancient guardian, this gem's price reflects its rare and powerful nature.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T07:05:02.552728+00:00",
    "aiReviewedAt": "2026-07-22T07:05:02.552728+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_soul_ring": {
    "id": "hyrule_temple_soul_ring",
    "name": "Temple Soul Ring",
    "description": "The Temple Soul Ring is forged from the essence of a guardian who died to protect the sacred Triforce. Its surface glows faintly with an ancient, ethereal light, and it hums in tune with the temple’s soul. Wearing this ring allows you to sense when the temple's balance is disturbed or when spirits are near; its power amplifies your spirit-based attacks by 10% and grants a critical hit chance bonus of +5.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Spirit Sense",
      "Enhanced Spirit Attacks"
    ],
    "vendor": "hyrule",
    "shippedBy": "Windwings Courier Service",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Spirit Sense",
        "rules": "You gain the ability to detect disturbances in the temple’s balance as if you had the Detect Magic spell. This effect lasts until you attack a creature or object within 30 feet."
      },
      {
        "title": "Enhanced Spirit Attacks",
        "rules": "For every point of your Wisdom modifier (minimum +1), your spirit-based attacks deal an extra 1d6 damage. This effect is active as long as you are wearing the ring and ends when you remove it or if its charges run out."
      }
    ],
    "levelRequirementReason": "The ring requires a basic understanding of spiritual energies to activate.",
    "vendorReason": "Hyrule is renowned for preserving ancient relics and items imbued with powerful magic.",
    "shippingDetail": "Ships via Windwings Express, ensuring swift delivery to your door.",
    "usage": {
      "activation": "Passive effect; requires no activation.",
      "duration": "Instantaneous, lasting until you attack or until the ring's charges are depleted.",
      "endsWhen": "The ring's effects end when it runs out of charges after five uses per short rest.",
      "charges": "5"
    },
    "priceReason": "Balanced at this price to reflect its unique spiritual properties and limited recharge.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:04:27.841750+00:00",
    "aiReviewedAt": "2026-07-22T07:04:27.841750+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_soul_shard": {
    "id": "hyrule_temple_soul_shard",
    "name": "Temple Soul Shard",
    "description": "The Temple Soul Shard is a crystalline fragment exhumed from the heart of an ancient Hyrulean temple. Crafted by forgotten guardians, it pulses with the essence of elemental spirits. When invoked, it grants you temporary invulnerability to fire and water attacks for thirty seconds, allowing you to weather deadly flames or icy blasts. Additionally, it reveals hidden passages within the temple walls, illuminating paths that lead to untold treasures or secrets.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Elemental Immunity (Fire & Water)",
      "Reveal Hidden Passages"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elemental Immunity",
        "rules": "As a bonus action, activate the Temple Soul Shard to become temporarily immune to fire and water elemental attacks for thirty seconds. This immunity does not apply to other types of damage. The effect ends when the duration expires or if you are subjected to another elemental attack."
      },
      {
        "title": "Reveal Hidden Passages",
        "rules": "Activate this shard as an action to reveal hidden temple passages and secret doors within thirty feet, providing insight into the architecture and layout of ancient temples. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The Temple Soul Shard is accessible to all adventurers who wish to explore ancient Hyrulean ruins.",
    "vendorReason": "Hyrule, as the steward of ancient relics and guardian of forgotten knowledge, sells items that empower explorers to uncover secrets of the past.",
    "shippingDetail": "The shard is carefully wrapped in spectral mail to ensure safe delivery through darkened corridors and cursed passages.",
    "usage": {
      "activation": "Bonus action or as an action",
      "duration": "30 seconds for Elemental Immunity, once per long rest for Revealing Hidden Passages",
      "endsWhen": "Duration ends or another elemental attack is received",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Temple Soul Shard offers significant battlefield utility and exploration advantages, making it a valuable but not overpowered addition to any adventurer's arsenal.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:05:09.346697+00:00",
    "aiReviewedAt": "2026-07-22T07:05:09.346697+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_soul_torch": {
    "id": "hyrule_temple_soul_torch",
    "name": "Flame of the Temple’s Will",
    "description": "The Flame of the Temple’s Will is a torch forged from the very will of an ancient temple's last priest, its body crafted from sacred stone and imbued with divine fire. When lit, it grants the wielder an unbreakable shield that deflects attacks and enhances their reflexes, allowing them to dodge even the most precise strikes. The priest’s spirit lingers within, whispering guidance and protection during battle.",
    "price": 1000,
    "icon": "🔥",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Divine Shield",
      "Enhanced Dodge"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Divine Shield",
        "rules": "When activated as a bonus action, the wielder gains a +50 temporary hit point shield that lasts for 10 seconds. The effect ends if the wielder takes damage or is incapacitated."
      },
      {
        "title": "Enhanced Dodge",
        "rules": "Increases the wielder's chance to dodge by 15% until they are hit in combat, with a maximum of +3 on their Dexterity saving throw. This effect ends when the wielder takes damage or is incapacitated."
      }
    ],
    "levelRequirementReason": "Requires at least second level to channel the priest’s divine will effectively.",
    "vendorReason": "Hyrulean priests and scholars revere this relic as a symbol of their heritage, ensuring it remains in their care.",
    "shippingDetail": "Delivered by the ghostly couriers who traverse the spirit realms, ensuring swift but ethereal transport.",
    "usage": {
      "activation": "Bonus Action to light and activate; reaction to gain shield if hit in combat.",
      "duration": "10 seconds or until the wielder takes damage or is incapacitated.",
      "endsWhen": "Wielder takes damage, becomes incapacitated, or after 10 seconds.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "Balanced price reflects its rare origin and divine power, making it a valuable but not overpowered addition to any adventurer’s arsenal.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:05:38.266534+00:00",
    "aiReviewedAt": "2026-07-22T07:05:38.266534+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_spirit_amber": {
    "id": "hyrule_temple_spirit_amber",
    "name": "Amber Soul of the Temple",
    "description": "The Amber Soul of the Temple is a crystalline essence harvested from the heart of Hyrule's Temple of Light, where it absorbs the very essence of ancient power and purity. When consumed, it grants the imbuer an unyielding boost in strength that can shatter illusions or deception around them, allowing for clarity in both body and mind. The soulstone glows faintly as it temporarily enhances one’s physical prowess and mental acuity.",
    "price": 1000,
    "icon": "💡",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Boosts Strength",
      "Reveals Illusions"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Boosted Strength",
        "rules": "The user gains a +30% bonus to their Strength score for 10 seconds. This effect is instantaneous upon consumption and does not require any actions."
      },
      {
        "title": "Reveal Illusions",
        "rules": "For the next 15 seconds, the user gains the ability to see through illusions or deception as if they had successful Perception checks against all such effects. This ability is active until either a saving throw is made (DC 13) or the duration expires."
      }
    ],
    "levelRequirementReason": "Consuming this essence requires a user with at least 6th level to harness its raw power without overwhelming their body.",
    "vendorReason": "Hyrule's ancient temples hold the knowledge and artifacts that can enhance one’s abilities, making the Amber Soul of the Temple an appropriate offering from this venerable source.",
    "shippingDetail": "The Boo Spectral Mail ensures safe delivery through its spectral wards, but the item must be consumed within 24 hours to retain its potency.",
    "usage": {
      "activation": "Instantaneous consumption upon finding a suitable opportunity.",
      "duration": "10 seconds for Strength boost and 15 seconds for revealing illusions.",
      "endsWhen": "After 15 seconds or if the user makes a successful saving throw (DC 13).",
      "charges": "Unlimited, but only one use per day."
    },
    "priceReason": "The Amber Soul of the Temple is priced at 1000 XP due to its rarity and the specific ancient magic required for its creation within Hyrule’s sacred temples.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-22T07:05:23.140502+00:00",
    "aiReviewedAt": "2026-07-22T07:05:23.140502+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_talisman": {
    "id": "hyrule_temple_talisman",
    "name": "Heart of the Shattered Vault",
    "description": "The Heart of the Shattered Vault is a glowing relic forged from the soul of an ancient temple guardian, its surface etched with arcane runes that pulse with raw mana. This talisman grants temporary resistance to magical explosions and lets the wearer speak to echoes of the temple’s past, revealing hidden lore and forgotten secrets. Each use leaves a faint, lingering hum that draws the attention of nearby magical entities.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Speak to Echoes",
      "Magical Explosion Resistance"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Speak to Echoes",
        "rules": "As an action, the wearer can speak with echoes of the temple’s past. This lasts for 1 minute and reveals hidden lore or forgotten secrets within a 30-foot radius. The DC for any Wisdom (Insight) check made by others to discern the truth is increased by 5."
      },
      {
        "title": "Magical Explosion Resistance",
        "rules": "The wearer gains temporary resistance to magical explosions equal to their proficiency bonus + 10. This effect lasts until the end of their next turn and can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The relic requires a minimum level to access its powers, ensuring it is not overpowered for lower-level characters.",
    "vendorReason": "As one of the most revered guardians of ancient sites and relics, Hyrule's vendors are trusted to offer such powerful but balanced artifacts.",
    "shippingDetail": "The shipment is made by a Rakasha who ensures the package reaches its destination safely and swiftly, delivering it within one week of purchase.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous (effect lasts until the end of next turn)",
      "endsWhen": "Used up once per short/long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The Heart of the Shattered Vault is priced at 1000 XP, reflecting its rare and powerful nature while ensuring it remains a balanced addition to any adventurer's arsenal.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T07:05:34.642438+00:00",
    "aiReviewedAt": "2026-07-22T07:05:34.642438+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_talisman_of_echoes": {
    "id": "hyrule_temple_talisman_of_echoes",
    "name": "Talisman of the Echoing Temple",
    "description": "Carved from the obsidian heart of the ancient Temple of the Forgotten, the Talisman of the Echoing Temple is a heavy amulet that hums softly as it absorbs the whispers of time. It grants its wearer visions of hidden paths and lost truths, revealing secret passages within the labyrinthine temples of Hyrule. When worn in such sacred spaces, the talisman's power amplifies, granting temporary invisibility for 2 seconds after using a skill to navigate ancient ruins.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Echoes of Hidden Paths",
      "Invisibility on Ancient Grounds"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Echoes of Hidden Paths",
        "rules": "When in an ancient temple zone, the wearer gains a +25% bonus to their map exploration and can see hidden paths. This effect lasts until leaving the area or being outside such zones for more than 10 minutes."
      },
      {
        "title": "Invisibility on Ancient Grounds",
        "rules": "After successfully using a skill in an ancient temple zone, the wearer becomes invisible for 2 seconds. This effect can only be used once per long rest and is expended by entering water or being exposed to direct sunlight."
      }
    ],
    "levelRequirementReason": "The talisman's power draws on ancient magic that resonates with all who enter its sacred spaces, requiring no specific level for use.",
    "vendorReason": "Hyrulean relics and artifacts are known to carry the essence of their origin, making this item a prime offering from their esteemed vendors.",
    "shippingDetail": "Delivered carefully within Hyrule's secure postal service; delivery can take up to one week depending on local conditions.",
    "usage": {
      "activation": "Passive while in ancient temple zones, active when using a skill outside such zones for the invisibility effect.",
      "duration": "Echoes of Hidden Paths: Until leaving an ancient temple zone or being away from them for more than 10 minutes. Invisibility on Ancient Grounds: Instantaneous and lasts for 2 seconds after successfully using a skill.",
      "endsWhen": "Leaving the area for Echoes; entering water or direct sunlight for Invisibility.",
      "charges": "Unlimited, but only one use per long rest for invisibility."
    },
    "priceReason": "The talisman's rarity and ancient magic make it a valuable item, balancing its powerful effects with the need to ensure it is not overpowered in play.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-22T19:46:36.739149+00:00",
    "aiReviewedAt": "2026-07-22T19:46:36.739149+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_ward": {
    "id": "hyrule_temple_ward",
    "name": "Temple Ward Stone",
    "description": "The Temple Ward Stone, a radiant crystal etched with ancient symbols from the First Temple of Hyrule, radiates a soft luminescence that repels dark entities and grants temporary sanctuary to all within its glow. When placed upon sacred ground, it creates an impenetrable ward, preventing hostile creatures from crossing into its protective field for 30 seconds. This stone also enhances the agility of defenders, granting them +5% movement speed during its duration, making swift retreats or attacks possible.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Repels Dark Entities",
      "Enhances Agility"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Repels Dark Entities",
        "rules": "When placed on sacred ground, the Temple Ward Stone creates a 10-meter radius ward zone that prevents hostile creatures from entering. The effect lasts for 30 seconds and can be activated as an action. A creature within the area has advantage on saving throws against being charmed or frightened by dark entities."
      },
      {
        "title": "Enhances Agility",
        "rules": "The stone grants a +5% movement speed bonus to all creatures within its 10-meter radius while active, which lasts for the duration of 30 seconds. This effect is passive and cannot be disrupted or ended early by actions other than the expiration time."
      }
    ],
    "levelRequirementReason": "This stone is accessible to any hero who dares enter sacred grounds in Hyrule, as it requires no specific skill or level.",
    "vendorReason": "Hyrule's vendors are known for their extensive knowledge of ancient artifacts and relics, making the Temple Ward Stone a fitting addition to their inventory.",
    "shippingDetail": "The stone is shipped using Koopa Postal’s express service, which ensures timely delivery even in the most dangerous regions of Hyrule.",
    "usage": {
      "activation": "Activate as an action",
      "duration": "30 seconds",
      "endsWhen": "Expires after its duration or when removed by a creature outside the ward area",
      "charges": "Unlimited, recharges upon removal"
    },
    "priceReason": "The balanced price reflects the stone's utility in repelling dark entities and enhancing agility without overcompensating its abilities.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-22T07:06:23.195545+00:00",
    "aiReviewedAt": "2026-07-22T07:06:23.195545+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_ward_amber": {
    "id": "hyrule_temple_ward_amber",
    "name": "Amber Ward of the Ancient Temple",
    "description": "The Amber Ward of the Ancient Temple is a glowing, hand-carved amulet that hums with the forgotten magic of Hyrule's Eastern Sanctum. Crafted from amber infused with the essence of long-lost temples, it channels ancient defenses to protect its wearer. When worn, the amulet subtly amplifies the temple’s protective aura, reducing magical backlash by 35% and temporarily silencing harmful spells cast against you for 12 seconds.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reduces Magical Backlash",
      "Silences Enemy Spells"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Reduced Magical Backlash",
        "rules": "Activates passively upon donning the amulet. Reduces incoming magical damage by 35%. Ends when removed or at the end of your next turn."
      },
      {
        "title": "Silence on Enemy Spells",
        "rules": "Activates as a reaction when you are targeted by a harmful spell. Temporarily silences the spell for 12 seconds, rendering it harmless to you and any allies within 5 feet. Ends if the spell is dispelled or its duration expires."
      }
    ],
    "levelRequirementReason": "The ancient magic of the temple requires a certain level of spiritual purity.",
    "vendorReason": "Hyrule's knowledge and relics are preserved by its scholars who have access to such artifacts.",
    "shippingDetail": "Ships under cover of night, ensuring the amulet remains undisturbed until it reaches its destination.",
    "usage": {
      "activation": "Passive and automatic upon donning; requires a reaction to activate spell silence.",
      "duration": "Passive effect is permanent while worn. Spell silence lasts for 12 seconds.",
      "endsWhen": "Removed or the end of your next turn, dispelled, or its duration expires.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted from rare materials and infused with ancient magic, this amulet is a balanced treasure.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:06:12.892788+00:00",
    "aiReviewedAt": "2026-07-22T07:06:12.892788+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_warden_belt": {
    "id": "hyrule_temple_warden_belt",
    "name": "Temple Warden Belt",
    "description": "The Temple Warden Belt, crafted from ancient Zoraite metal, is a symbol of guardianship in the sacred Temples of Hyrule. When worn, it channels the earth's elemental forces to protect and rejuvenate its bearer during prolonged combat. The belt grants temporary immunity to all elemental damage for 10 seconds, allowing you to focus on your next strike without fear of harm. Additionally, it enhances stamina regeneration by 20% every 3 seconds, ensuring that no foe can wear down the wearer's resolve over time.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Elemental Immunity",
      "Stamina Regeneration"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Elemental Immunity",
        "rules": "Activates as a reaction when you are first hit by an attack. Provides immunity to all elemental damage for 10 seconds, but ends if you take another elemental damage before the duration expires."
      },
      {
        "title": "Stamina Regeneration",
        "rules": "Passive effect that grants +20% stamina regeneration while active. Ends when the belt is removed or upon death."
      }
    ],
    "levelRequirementReason": "The intricate enchantments on this belt require a certain level of mastery to wield effectively.",
    "vendorReason": "Hyrule's official guardians are known for their sacred relics and this belt is one such artifact.",
    "shippingDetail": "Ships via Lakitu Express, ensuring safe delivery within a week of purchase.",
    "usage": {
      "activation": "Reaction",
      "duration": "10 seconds per use",
      "endsWhen": "You take another elemental damage or the belt is removed, whichever comes first. Ends upon death.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted with ancient Zoraite metal and sacred enchantments, this belt offers unparalleled protection and stamina enhancement.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:06:30.558010+00:00",
    "aiReviewedAt": "2026-07-22T07:06:30.558010+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_warden_scepter": {
    "id": "hyrule_temple_warden_scepter",
    "name": "Temple Warden Scepter",
    "description": "The Temple Warden Scepter, forged from the heart of Hyrule's ancient temples, channels the essence of forgotten guardians. This relic grants temporary invulnerability upon striking an opponent, and disrupts their spellcasting with a shattering force that renders incantations null and void for a fleeting moment. Crafted by the hands of temple warden mages, it is said to bear the echo of those who once defended the sacred sites from darkness.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporarily Invulnerable on Hit",
      "Disrupts Spellcasting"
    ],
    "vendor": "hyrule",
    "shippedBy": "Royal Couriers of Hyrule",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporarily Invulnerable on Hit",
        "rules": "When you hit an opponent with a melee attack, you gain temporary invulnerability for 10 seconds. This effect cannot be used more than once every 5 minutes."
      },
      {
        "title": "Disrupts Spellcasting",
        "rules": "If you hit an opponent while they are casting a spell, their current spell attempt is disrupted and they must succeed on a DC 15 Wisdom saving throw or lose the spell. This effect does not reset if you miss your attack."
      }
    ],
    "levelRequirementReason": "The intricate magic required to wield this scepter demands at least three levels of experience.",
    "vendorReason": "Hyrule is the birthplace and guardian of the Temple Warden Scepter, making it a logical choice for its sale in their marketplaces.",
    "shippingDetail": "The scepter is shipped within a specially enchanted wooden box to protect the relic during transit.",
    "usage": {
      "activation": "Reaction (used on hitting an opponent)",
      "duration": "10 seconds, or until the end of your next turn if you miss your attack",
      "endsWhen": "The effect ends when the duration expires or you miss your attack",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted with rare materials and ancient Hyrulean magic, this scepter is priced at a moderate cost to reflect its balance in power and rarity.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:07:12.425020+00:00",
    "aiReviewedAt": "2026-07-22T07:07:12.425020+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_warder": {
    "id": "hyrule_temple_warder",
    "name": "Echoing Temple Ward",
    "description": "The Echoing Temple Ward is a relic forged from ancient temple stones, its surface etched with runes that hum in response to forgotten magic. It grants temporary resistance to spells and enhances perception of hidden paths, allowing the wielder to sense secret passages even when they are not actively being concealed by magical means. This ward has a presence that resonates through the air, making it an invaluable companion for any adventurer seeking to navigate the labyrinthine ruins of Hyrule's lost temples.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Magic Resistance Boost",
      "Perception Enhancer: Detect Hidden Paths"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Magic Resistance Boost",
        "rules": "The Echoing Temple Ward grants you resistance to all magical damage. This effect lasts for 1 minute and can be reactivated once the duration has expired."
      },
      {
        "title": "Perception Enhancer: Detect Hidden Paths",
        "rules": "While wearing the Echoing Temple Ward, you gain advantage on Perception checks to detect hidden or secret paths. This benefit lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "The ward's ancient magic is potent enough for even a novice adventurer to harness.",
    "vendorReason": "Hyrule's most revered temple guardians are known to carry this relic, which they offer to visitors seeking guidance in their quests.",
    "shippingDetail": "The Echoing Temple Ward is shipped via Pipe Express with expedited delivery due to its fragile nature and the urgency of its use.",
    "usage": {
      "activation": "Activates as a bonus action.",
      "duration": "1 minute per activation.",
      "endsWhen": "The duration ends at the start of your next turn after it has expired or you take damage.",
      "charges": "Unlimited, recharges upon completion of a long rest."
    },
    "priceReason": "This relic's rarity and its potent magical properties justify its price, making it a worthwhile investment for adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:06:47.515751+00:00",
    "aiReviewedAt": "2026-07-22T07:06:47.515751+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_wisp_shield": {
    "id": "hyrule_temple_wisp_shield",
    "name": "Wisp Shield of the Vaulted Depths",
    "description": "The Wisp Shield of the Vaulted Depths is a gleaming, ancient shield that pulses with faint blue light, absorbing echoes of forgotten temple magic. When worn near crumbling ruins, it shields its bearer from the very forces that threaten the temple's integrity, granting +10% dodge chance and revealing minor secrets of the temple’s past. The shield hums with energy when in a sacred space, as if whispering tales of bygone eras.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Absorbs magical damage from temple sources",
      "Grants +10% dodge chance near temples"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temple Echo Absorption",
        "rules": "When the shield is worn within 50 feet of a crumbling temple, it absorbs all incoming magical damage. The effect lasts until the end of your next turn or until you are no longer near a temple ruin."
      },
      {
        "title": "Dodge Chance Boost",
        "rules": "While equipped and near a temple ruin, the shield grants a +10% bonus to your AC as long as you remain within 50 feet of the ruins. This effect ends if you leave the area or take any action that requires movement."
      }
    ],
    "levelRequirementReason": "The shield's magic is complex and requires a fair amount of concentration to stabilize its power.",
    "vendorReason": "Hyrulean scholars and temple guardians often trade or sell such artifacts for their unique abilities in protecting sacred sites.",
    "shippingDetail": "Ships via Lakitu Drones, with a delivery delay of one week due to the shield's size and delicate nature.",
    "usage": {
      "activation": "Automatic when near temple ruins; no activation required.",
      "duration": "Lasts until the end of your next turn or you leave the area.",
      "endsWhen": "The effect ends if you are no longer within 50 feet of a temple ruin or take any action that requires movement.",
      "charges": "Unlimited, recharges when not near temple ruins."
    },
    "priceReason": "Balanced at the price to reflect its rarity and unique abilities without being overpowered.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T07:06:49.871024+00:00",
    "aiReviewedAt": "2026-07-22T07:06:49.871024+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temples_echo_rod": {
    "id": "hyrule_temples_echo_rod",
    "name": "Echoes of the Temple Rod",
    "description": "The Echoes of the Temple Rod is a relic forged from the whispers of ancient temples, its iron body etched with arcane symbols that shimmer faintly under moonlight. This rod channels divine echoes to amplify your weapon's damage, and when swung, it summons a spectral echo of the temple’s guardian spirit for a brief burst of power. The spectral guardian dances around you, adding a second strike to your attacks but only for a fleeting moment.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% weapon damage",
      "Summons spectral guardian on hit"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "+30% Weapon Damage",
        "rules": "Activates as a bonus action. The next melee attack made with the rod or any weapon deals an additional +30% damage, but only once per short rest."
      },
      {
        "title": "Summons Spectral Guardian",
        "rules": "Activates on a successful melee hit. A spectral guardian appears and makes a single melee attack against the target of your attack. The guardian persists for 5 seconds or until it drops to 0 hit points, whichever comes first."
      }
    ],
    "levelRequirementReason": "Requires at least level 3 to wield this relic effectively.",
    "vendorReason": "Hyrule is renowned for its ancient artifacts and relics, making it a fitting vendor for the Echoes of the Temple Rod.",
    "shippingDetail": "Ships via Koopa Express, which guarantees safe delivery within one week.",
    "usage": {
      "activation": "Bonus action to activate and melee hit to summon guardian.",
      "duration": "5 seconds or until target drops to 0 HP.",
      "endsWhen": "Charges expended after 3 uses per long rest.",
      "charges": "Unlimited charges, but only 3 uses per long rest."
    },
    "priceReason": "The Echoes of the Temple Rod is priced at 1000 XP due to its potent effects and limited resource usage.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:06:56.841715+00:00",
    "aiReviewedAt": "2026-07-22T07:06:56.841715+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_time_craft": {
    "id": "hyrule_time_craft",
    "name": "Time Weavers’ Temple Tool",
    "description": "The Time Weavers’ Temple Tool is a delicate, intricately crafted device from the Temple of Time’s lost archives. Its glowing core pulses with temporal energy, allowing you to manipulate moments and reset enemy turns with a flick of its wrist. This relic grants you an eerie connection to time itself, enhancing your combat prowess when near altered zones by 5% damage increase and providing a 10% chance to reveal hidden boss phases.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Temporal Reset",
      "Enhanced Damage"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Reset",
        "rules": "Activates on your reaction when you would take damage from an enemy. Grants a 10% chance to reset the turn order of that encounter, affecting only one creature per use."
      },
      {
        "title": "Enhanced Damage",
        "rules": "While within 30 feet of time-affected zones, deal an additional 5% damage on weapon attacks. This effect is cumulative with other sources of damage bonuses and does not stack with itself."
      }
    ],
    "levelRequirementReason": "The Time Weavers’ Temple Tool is a rare relic that even novice adventurers can wield, offering them a powerful tool to master the battlefield.",
    "vendorReason": "Hyrule's scholars and mystics often trade such relics for the knowledge they hold about ancient times and their manipulation of the temporal plane.",
    "shippingDetail": "Delivered via the Void Drifter Relay, this tool arrives in pristine condition, with no time distortion affecting its power or functionality.",
    "usage": {
      "activation": "Reaction to reset turn order; Instantaneous damage bonus",
      "duration": "Until end of next combat encounter for Temporal Reset; Until end of your next long rest for Enhanced Damage",
      "endsWhen": "Used, or when the effect naturally expires at the end of a combat encounter or after a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The Time Weavers’ Temple Tool is crafted from rare materials and ancient knowledge, making it an excellent addition to any adventurer’s arsenal without being overpowered.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-22T07:07:03.288927+00:00",
    "aiReviewedAt": "2026-07-22T07:07:03.288927+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_toad_soul_ring": {
    "id": "hyrule_toad_soul_ring",
    "name": "Toad Soul Ring",
    "description": "The Toad Soul Ring is a cursed artifact forged from the souls of toads sacrificed in Hyrule's dark past. Worn by those brave enough to harness its power, it channels their vitality into raw combat might. Each use grants +40% attack power for 15 seconds but siphons 20 HP at the end of each effect duration until depleted. The ring only binds the souls of toads from the Royal Family's cursed lineage.",
    "category": "equipment",
    "price": 1000,
    "icon": "💀",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Attack Power Boost",
      "Siphon Vitality"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Attack Power Boost",
        "rules": "Activation: On attack. Duration: Instantaneous, +40% attack power for 15 seconds. Ends When: Duration expires or the ring is removed. Charges: Unlimited."
      },
      {
        "title": "Siphon Vitality",
        "rules": "Consumes 20 HP at the end of each effect duration until depleted. Save DC: 18 (Constitution save to halve the damage). Ends When: HP is fully siphoned or the ring is removed."
      }
    ],
    "levelRequirementReason": "The ring's dark magic requires a stronger soul to resist its curse.",
    "vendorReason": "Hyrulean blacksmiths are commissioned by the Royal Family to create and manage cursed artifacts like this one.",
    "shippingDetail": "Delivered with a special protective case to prevent accidental removal of the ring during transit.",
    "usage": {
      "activation": "On attack action",
      "duration": "Instantaneous boost, lasts for 15 seconds",
      "endsWhen": "Duration expires or ring is removed",
      "charges": "Unlimited"
    },
    "priceReason": "The rare toad souls and dark magic required are costly, yet the ring's unlimited uses justify its price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:07:03.429437+00:00",
    "aiReviewedAt": "2026-07-22T07:07:03.429437+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_tombstone_scepter": {
    "id": "hyrule_tombstone_scepter",
    "name": "Tombstone Scepter of the Forgotten King",
    "description": "The Tombstone Scepter of the Forgotten King, crafted from the bones of a fallen Hyrulean king, whispers forgotten lore and dims enemy light sources, casting an aura of ancient power around its wielder. When activated, it reveals hidden abilities in foes with eerie precision, while also reducing incoming light-based damage by 20%. The scepter's touch evokes memories, causing enemies to flinch and falter as if struck by the past itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals hidden enemy abilities",
      "Reduces light-based damage"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Expose Hidden Abilities",
        "rules": "When activated, this effect grants a 10% chance to reveal any hidden or secret abilities of an enemy. This effect lasts for the duration of one short rest and can be used once per long rest."
      },
      {
        "title": "Dim Light Resistance",
        "rules": "For every level of the user above 5th, this scepter reduces light-based damage by 2 additional percentage points (up to a maximum reduction of 40% at level 15). This effect is active while holding the scepter and does not require activation."
      }
    ],
    "levelRequirementReason": "This relic requires a minimum level to wield, as its power aligns with the martial prowess of a seasoned Hyrulean warrior.",
    "vendorReason": "The scepter is a revered artifact in Hyrule, and only those trusted by the royal family are privy to its possession.",
    "shippingDetail": "Carefully packed and shipped via Pipe Express, ensuring safe delivery to the fortunate recipient.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of your next turn",
      "endsWhen": "At the beginning of your next turn or when you take a short rest",
      "charges": "Unlimited"
    },
    "priceReason": "The scepter's rarity and historical significance justify its price, balanced to reflect its utility without overshadowing standard equipment.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:07:26.618794+00:00",
    "aiReviewedAt": "2026-07-22T07:07:26.618794+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_bangle": {
    "id": "hyrule_triforce_bangle",
    "name": "Triforce Bangle",
    "description": "The Triforce Bangle, a delicate silver band etched with the ancient symbols of Hyrule's sacred relic, channels the balance of power held within the legendary artifact. Wearers feel an unshakable sense of purpose, as if guided by destiny itself. When faced with foes whose health exceeds their own by three or more hit points, the bangle enhances one’s resolve, boosting all attributes by +2 until the next long rest.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Sense of Purpose",
      "Enhanced Resolve"
    ],
    "vendor": "Hyrule",
    "shippedBy": "Hyrule's Royal Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sense of Purpose",
        "rules": "While wearing the Triforce Bangle, the wearer gains a passive +10 to their Charisma (Persuasion) checks. This effect lasts until the end of each long rest."
      },
      {
        "title": "Enhanced Resolve",
        "rules": "When the wearer is facing an enemy with 3 or more hit points above their own, they gain a +2 bonus to all ability checks and saving throws. This effect lasts for one minute per level of the wearer."
      }
    ],
    "levelRequirementReason": "The bangle's connection to Hyrule's sacred balance makes it accessible to beginners who seek its guidance.",
    "vendorReason": "As a relic steeped in Hyrulean lore, the Triforce Bangle is sold by the Hyrulean merchants who specialize in ancient artifacts and mystical trinkets.",
    "shippingDetail": "The bangle is carefully packed to ensure it arrives undamaged, with expedited shipping for a small additional fee.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the end of each long rest or until removed.",
      "endsWhen": "At the conclusion of a long rest or when removed from the wearer's hand.",
      "charges": "Unlimited, recharges at dawn."
    },
    "priceReason": "The bangle's rarity and mystical properties justify its moderate price, making it an accessible yet valuable tool for adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:07:33.782448+00:00",
    "aiReviewedAt": "2026-07-22T07:07:33.782448+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_blade_core": {
    "id": "hyrule_triforce_blade_core",
    "name": "Triforce Blade Core",
    "description": "The Triforce Blade Core is a wickedly sharp, rune-carved blade forged from the very fragments of the Triforce's power. Its blade glows faintly with elemental energies, and when wielded by those pure of heart, it can split enemies into three parts, each struck by a different element of fire, ice, or lightning. The core's ancient magic reduces the cooldown on all Triforce-infused attacks by 15%, allowing you to call upon the Triforce with greater frequency in your battles.",
    "category": "equipment",
    "price": 3800,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Split enemy into 3 parts",
      "Elemental damage based on weapon type"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Split Enemy",
        "rules": "When this blade strikes an enemy, it splits the target into three separate entities that suffer from unique elemental damage: fire, ice, or lightning. Each part takes 20% of the blade's base damage in its respective element. The effect is instantaneous and does not allow a save."
      },
      {
        "title": "Reduced Cooldown",
        "rules": "For every successful attack made with this weapon that deals damage to an enemy, the cooldown on all Triforce-infused attacks is reduced by 15%. This effect stacks up to three times. The cooldown reduction ends when you make a non-infused attack or if your maximum number of charges are reached."
      }
    ],
    "levelRequirementReason": "The blade requires a level 6 character due to its alignment with the Triforce's power and the complexity of wielding such a weapon.",
    "vendorReason": "Hyrule is the birthplace of the Triforce, and as such, it makes sense that they would sell items imbued with its power.",
    "shippingDetail": "Ships via Pipe Express within Hyrule; delivery time depends on location but usually takes no more than three days.",
    "usage": {
      "activation": "Instantaneous effect triggered by a successful hit",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the target is split or the blade is used in an attack that does not deal damage to an enemy",
      "charges": "Unlimited, with a 15% cooldown reduction for each successful attack"
    },
    "priceReason": "The blade's rarity and unique powers justify its high price, making it a valuable asset for any adventurer seeking to harness the power of the Triforce.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T07:07:35.487794+00:00",
    "aiReviewedAt": "2026-07-22T07:07:35.487794+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_blessed_rod": {
    "id": "hyrule_triforce_blessed_rod",
    "name": "Triforce’s Will",
    "description": "The Triforce’s Will is a slender staff, its surface etched with ancient symbols that glow faintly in response to divine will. Crafted from sacred wood found deep within the Lost Woods and imbued with the essence of the legendary triforce, it channels three virtues: balance, courage, and wisdom. When invoked by one who stands firm in their heart’s purpose, it can grant a temporary boost in strength or focus, and even protect against temple traps meant to ensnare the unwary.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Divine Fortitude",
      "Temple Trap Resilience"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Divine Fortitude",
        "rules": "Activates as a bonus action. The wielder temporarily gains +2d6 to one ability check of their choice, representing an influx of courage or wisdom. This effect lasts for 1 minute and can be used once per short rest."
      },
      {
        "title": "Temple Trap Resilience",
        "rules": "Passively grants immunity to all status effects from temple traps upon being equipped. The staff must be within the vicinity of a trap to activate this effect, which lasts until the wielder moves 30 feet away or until the trap is triggered."
      }
    ],
    "levelRequirementReason": "It requires no specific level as it simply channels divine energy accessible to any who can hold and focus their intent.",
    "vendorReason": "Hyrule is renowned for its deep connection with ancient artifacts, especially those related to the triforce.",
    "shippingDetail": "Delivered swiftly by Lakitu drones, ensuring the staff arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action or passive effect upon equipping within a temple trap’s vicinity.",
      "duration": "1 minute for Divine Fortitude; passive immunity lasts until the wielder moves away from traps.",
      "endsWhen": "Divine Fortitude ends at the start of your next turn after using it, and Temple Trap Resilience ends when you move 30 feet or a trap is triggered.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to reflect its divine origin and limited utility compared to other rare items.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T07:08:09.706807+00:00",
    "aiReviewedAt": "2026-07-22T07:08:09.706807+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_blessing_legacy": {
    "id": "hyrule_triforce_blessing_legacy",
    "name": "Triforce Echo of Resilience",
    "description": "The Triforce Echo of Resilience is a shimmering amulet forged in the fires of Hyrule Castle. Crafted from ancient Goron steel and imbued with the spirit of the Triforce, it grants the wearer an aura of invincibility during critical battles. The amulet’s light flickers when the user takes damage but recharges fully after 30 seconds of peace. Wielders feel a surge of strength and resilience in their veins as they face perilous challenges.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Triforce Spirit",
      "Invincibility Aura"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Triforce Spirit",
        "rules": "When the wearer takes damage, the amulet’s light flickers. The effect provides a +2 bonus to AC and reduces all damage taken by 50% for up to 1 minute. This benefit ends when the wearer takes additional damage or after 1 minute."
      },
      {
        "title": "Invincibility Aura",
        "rules": "The amulet grants a +4 bonus to saving throws against fear and disease effects for 1 hour, starting when the wearer is first donned. The effect ends when the wearer removes the amulet or after 1 hour."
      }
    ],
    "levelRequirementReason": "The Triforce Echo of Resilience requires a level 3 character to harness its power effectively.",
    "vendorReason": "Hyrule is renowned for crafting items that align with the Triforce, and this amulet is no exception.",
    "shippingDetail": "Ships via Boo Spectral Mail, known for its reliability in delivering magical artifacts.",
    "usage": {
      "activation": "Passive effect upon donning the amulet.",
      "duration": "1 minute or until additional damage is taken, up to a maximum of 1 hour per day.",
      "endsWhen": "The wearer takes further damage or removes the amulet.",
      "charges": "Unlimited uses per short rest"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its rare craftsmanship and magical properties.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:07:44.333778+00:00",
    "aiReviewedAt": "2026-07-22T07:07:44.333778+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_blood_tear": {
    "id": "hyrule_triforce_blood_tear",
    "name": "Triforce Blood Tear",
    "description": "The Triforce Blood Tear, a cursed relic forged from the blood of the Triforce’s last guardian, pulses with raw power that warps vitality. This ancient artifact grants +30% attack speed and +25% physical damage in battle, but at a terrible cost: it drains your maximum hit points by 10% every minute. Only those willing to embrace its dark magic can wield this relic, for the choice between strength and survival is irrevocable.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+30% Attack Speed",
      "+25% Physical Damage"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vitality Drain",
        "rules": "The Triforce Blood Tear drains your maximum hit points by 10% every minute. This effect ends when the item is removed from your possession or destroyed."
      },
      {
        "title": "Dark Power Boost",
        "rules": "While wielding this relic, you gain +30% attack speed and +25% physical damage as a bonus action. These effects last until the end of your next turn, then expire unless you activate them again."
      }
    ],
    "levelRequirementReason": "The cursed nature of the Triforce Blood Tear makes it accessible to even the most novice adventurers.",
    "vendorReason": "Hyrule has long been a repository for ancient relics, and the Triforce Blood Tear is no exception.",
    "shippingDetail": "Carefully packed in a sealed container to prevent any accidental activation during transit.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "The end of your next turn unless reactivated as a bonus action.",
      "charges": "Unlimited, but the effect ends if you are incapacitated or the item is removed from your possession."
    },
    "priceReason": "Balanced to reflect the cursed nature and powerful effects of the relic, this item remains within reach for those who dare to wield it.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:08:04.059625+00:00",
    "aiReviewedAt": "2026-07-22T07:08:04.059625+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_bloodstone": {
    "id": "hyrule_triforce_bloodstone",
    "name": "Triforce Bloodstone",
    "description": "Forged from the molten core of a fallen Triforce guardian, this bloodstone glows with an ethereal light that pulses in rhythm with the heartbeat of Hyrule. When pressed to flesh, it heals wounds as if by divine touch, restoring 100 hit points in a single instant. The stone also whispers ancient lore, granting a fleeting moment where enemy buffs are negated, and your own defenses rise to meet the challenge.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Divine Healing",
      "Buff Resistance"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Divine Healing",
        "rules": "When activated as an action, this bloodstone restores 100 hit points to a single ally. This effect is instantaneous and can only be used once per long rest."
      },
      {
        "title": "Buff Resistance",
        "rules": "For 1 minute after activation, there is a 5% chance to negate any enemy buff that would otherwise apply. The effect ends when the duration expires or if the item is destroyed."
      }
    ],
    "levelRequirementReason": "The bloodstone's power draws upon deep Hyrulean magic, requiring at least 6th level for a wielder to harness its full potential.",
    "vendorReason": "As guardians of the ancient land of Hyrule, the Hyrulean merchants are trusted custodians of such sacred relics and artifacts.",
    "shippingDetail": "Delivered via a Rakasha spirit courier who ensures safe passage through even the most perilous lands.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Ends when its effect is used or if destroyed",
      "charges": "1 use per long rest"
    },
    "priceReason": "The bloodstone's rarity, sacred origin, and potent effects justify a price of 1000 XP.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T07:08:02.173926+00:00",
    "aiReviewedAt": "2026-07-22T07:08:02.173926+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_bolt": {
    "id": "hyrule_triforce_bolt",
    "name": "Triforce Spark Bolt",
    "description": "The Triforce Spark Bolt crackles with the raw energy of the legendary relic, a fragment spun from the very threads of time itself. This rare artifact ignites the battlefield with bursts of divine power, striking foes with unerring precision and leaving its wielder invulnerable for fleeting moments after each use. Crafted by ancient artisans in the shadow of Hyrule Castle, it is said to channel the essence of the Triforce when activated, enhancing both attack and critical strike chances.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+20% Attack Power",
      "15% Critical Strike Chance"
    ],
    "vendor": "hyrule",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Divine Surge",
        "rules": "Activates on command as a bonus action. Strikes enemies with bursts of divine energy, increasing the wielder's attack power by +20%. This effect lasts for 1 minute and can be reactivated once per short or long rest."
      },
      {
        "title": "Invincible Pulse",
        "rules": "Activates immediately after using a Triforce ability. Grants temporary invulnerability to all damage for 3 seconds, during which the wielder is immune to attacks and non-magical damage. This effect can only be used once per day."
      }
    ],
    "levelRequirementReason": "The intricate magic of the Triforce Spark Bolt requires a adept practitioner to channel its divine energy effectively.",
    "vendorReason": "Hyrule is home to artisans who have mastered the ancient techniques needed to forge such powerful relics.",
    "shippingDetail": "Ships with priority courier, ensuring quick delivery to eager adventurers.",
    "usage": {
      "activation": "Bonus action and reaction",
      "duration": "1 minute or until interrupted",
      "endsWhen": "Ends when the user's next short or long rest begins",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from rare materials and ancient magic, this artifact is a significant investment in combat prowess.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-22T07:08:13.228558+00:00",
    "aiReviewedAt": "2026-07-22T07:08:13.228558+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_bottle": {
    "id": "hyrule_triforce_bottle",
    "name": "Triforce Elixir",
    "description": "The Triforce Elixir, a bottle sealed with a cork that bears the insignia of Hyrule, is said to hold the very essence of the legendary Triforce itself. Upon consumption, it heals you by restoring half your maximum hit points and grants you temporary resistance to magical damage for a fleeting moment—ideal for brave souls who must endure ancient trials. This elixir is crafted with the utmost care in Hyrule Castle's alchemical labs, ensuring that its potency is unmatched.",
    "price": 1000,
    "icon": "💉",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Restores Half Max HP",
      "Temporarily Resistant to Magic"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Surge",
        "rules": "When consumed, the Triforce Elixir instantly restores half of your maximum hit points. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Magical Resistance",
        "rules": "For 10 seconds after consumption, you gain temporary resistance to all magical damage. Any magic attack or spell that deals damage to you within this duration reduces the damage taken by 50%. This effect ends if you take non-magical damage."
      }
    ],
    "levelRequirementReason": "The Triforce Elixir is accessible to all who seek it, as its power can be a lifeline in any perilous situation.",
    "vendorReason": "Hyrule Castle's alchemical labs are renowned for their expertise and the purity of their ingredients, ensuring that only the finest elixirs like this one find their way to the market.",
    "shippingDetail": "The Lakitu Drones deliver this fragile bottle with utmost care, using special packaging to ensure it arrives in perfect condition.",
    "usage": {
      "activation": "Instantaneous action upon consumption",
      "duration": "10 seconds",
      "endsWhen": "Upon taking non-magical damage or when the duration expires",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Triforce Elixir's price reflects its rarity and the alchemical expertise required to produce it, making it a valuable but not exorbitant item for any adventurer.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T07:09:08.082209+00:00",
    "aiReviewedAt": "2026-07-22T07:09:08.082209+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_catalyst": {
    "id": "hyrule_triforce_catalyst",
    "name": "Triforce Catalyst Core",
    "description": "The Triforce Catalyst Core glows with a radiant, crystalline light, pulsing in sync with the very essence of time and destiny. Crafted from sacred stone found deep within Hyrule's ancient temples, this core can channel the power of the Triforce to grant fleeting mastery over its components: the Royal, Heroic, and Divine Essences. Use it wisely—its volatile energy can turn even allies into formidable weapons or deadly threats.",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Royal Mastery",
      "Heroic Aura"
    ],
    "vendor": "hyrule",
    "shippedBy": "Royal Courier Service",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Royal Mastery",
        "rules": "Activating this core grants temporary control over the Royal Essence, allowing you to command and issue orders to your allies as if they were under a minor obedience spell. This effect lasts for 5 seconds, during which time any ally within 30 feet of you must make a Wisdom saving throw (DC 14) or obey your verbal commands until the duration ends."
      },
      {
        "title": "Heroic Aura",
        "rules": "For 3 seconds after activation, this core releases an aura that grants +10% chance to stun enemies with melee attacks. If an enemy is hit by a weapon attack from you or any ally within 5 feet of you while the aura is active, they must make a Strength saving throw (DC 14) or be stunned for 1 round."
      }
    ],
    "levelRequirementReason": "This item's power requires mastery over basic combat and spellcasting, as it taps into fundamental aspects of the Triforce.",
    "vendorReason": "Only the royal guardians of Hyrule possess the knowledge to craft or wield such a powerful artifact responsibly.",
    "shippingDetail": "Ships via Royal Courier, ensuring safe and swift delivery only during daylight hours when magical wards are strongest.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous activation; effects last for their specified durations.",
      "endsWhen": "The duration of each effect ends naturally after its stated time. The core can be used once per short or long rest.",
      "charges": "Unlimited uses, one per rest."
    },
    "priceReason": "Balanced for an epic item, this price reflects the rare materials and intricate craftsmanship required to create such a powerful artifact.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T07:08:32.290859+00:00",
    "aiReviewedAt": "2026-07-22T07:08:32.290859+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_core": {
    "id": "hyrule_triforce_core",
    "name": "Triforce Core Fragment",
    "description": "The Triforce Core Fragment hums with ancient power, a fragment of the legendary relic forged from divine energy and imbued with the essence of balance, wisdom, and courage. Crafted by the gods in the heart of Hyrule, this pulsing shard can be wielded only by one soul at a time, ensuring its owner is destined for greatness. Upon donning it, your strength resonates with the very fabric of the Triforce itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Divine Balance",
      "Eternal Wisdom"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Restores 10% HP on Equip",
        "rules": "When equipped, you regain 10% of your maximum hit points. This effect can be triggered once per short or long rest."
      },
      {
        "title": "Grants +10% Defense Against Magic",
        "rules": "While the Triforce Core Fragment is worn, you gain a +10 bonus to your AC against magical attacks. This bonus does not stack with other bonuses from similar effects."
      }
    ],
    "levelRequirementReason": "The fragment's ancient power requires the wielder to be of at least level 6, ensuring they are capable of handling its divine energies.",
    "vendorReason": "Hyrule is the birthplace of the Triforce and thus holds a fragment that only it can offer.",
    "shippingDetail": "The Koopa Postal ensures safe delivery using enchanted mailbags, guaranteeing swift and secure transport from Hyrule Castle to your doorstep.",
    "usage": {
      "activation": "Equipping the Triforce Core Fragment requires an action.",
      "duration": "Until removed or destroyed.",
      "endsWhen": "Removing it ends its effects immediately.",
      "charges": "Unlimited, recharges on a long rest."
    },
    "priceReason": "The fragment's divine nature and rarity justify its value of 1000 XP, reflecting both its ancient origin and the power it bestows upon its wearer.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:08:36.192427+00:00",
    "aiReviewedAt": "2026-07-22T07:08:36.192427+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_echo": {
    "id": "hyrule_triforce_echo",
    "name": "Triforce Resonance Vial",
    "description": "The Triforce Resonance Vial is a fragile vial crafted from the very essence of Hyrule’s sacred relic, the Triforce. When consumed, it amplifies your willpower and grants you an unyielding resistance to fate's dominion for fleeting moments. For thirty seconds, your mind sharpens as if guided by the divine winds of time itself, offering a 10% chance to resist any fate control effects. Simultaneously, your body fortifies with the strength of legend, temporarily boosting your maximum hit points by 20%, ensuring you can withstand the harshest challenges that lie ahead.",
    "price": 1000,
    "icon": "💡",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Fortified Will",
      "Fate Resistance"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Fortified Will",
        "rules": "When consumed, this vial grants the drinker a +2 bonus to all skill checks against environmental hazards for 10 seconds. This effect is active as long as you are conscious."
      },
      {
        "title": "Fate Resistance",
        "rules": "Upon consuming the vial, you gain a 10% chance to resist any fate control effects for 30 seconds. If an effect would force you into submission or manipulate your actions, this chance allows you to avoid it entirely."
      }
    ],
    "levelRequirementReason": "This vial requires a minimum level of 5 due to its connection with the Triforce and the divine power it contains.",
    "vendorReason": "Hyrule is the guardian and steward of the Triforce, and thus holds exclusive rights to craft such powerful yet fragile items.",
    "shippingDetail": "The vial must be shipped via Pipe Express; any other courier will cause it to shatter in transit.",
    "usage": {
      "activation": "Eaten or drunk as an action.",
      "duration": "30 seconds, expiring when you fall unconscious or die.",
      "endsWhen": "The effect ends upon losing consciousness or death.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This vial is priced at 1000 XP as it contains a fragment of the Triforce's power, making it an invaluable but not overpowered commodity for heroes to wield.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-22T07:09:21.534650+00:00",
    "aiReviewedAt": "2026-07-22T07:09:21.534650+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_echo_cape": {
    "id": "hyrule_triforce_echo_cape",
    "name": "Triforce Echo Cape",
    "description": "The Triforce Echo Cape weaves the hallowed essence of Hyrule's sacred relic into its fabric, granting the wearer a fleeting glimpse into past battles and bolstering their resilience in the heat of conflict. As you don this cape, the threads of time seem to hum with ancient wisdom, allowing you to see the battlefield from new angles for brief moments. With each use, your HP regenerates at an accelerated rate, healing you as if guided by the very power of the Triforce itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌟",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Vision of Past Battles",
      "Enhanced Healing"
    ],
    "vendor": "Hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Vision of Past Battles",
        "rules": "When activated, the cape grants the wearer a brief vision of past battle locations. This effect lasts for 5 seconds and provides insight into strategic advantages or weaknesses in nearby areas."
      },
      {
        "title": "Enhanced Healing",
        "rules": "The wearer regains 10% of their maximum HP per second while this cape is active, up to a maximum of half their total HP. This effect ceases when the cape is removed or after 30 seconds."
      }
    ],
    "levelRequirementReason": "The Triforce Echo Cape requires a minimum level of 5 due to its deep connection with Hyrulean lore and the inherent power it commands.",
    "vendorReason": "As the official purveyor of sacred artifacts, the Hyrulean vendors are entrusted with items that bridge the gap between legend and reality.",
    "shippingDetail": "Delivered swiftly by the trusted couriers of Pipe Express, ensuring the cape arrives in perfect condition.",
    "usage": {
      "activation": "A bonus action to activate the cape's vision and healing benefits.",
      "duration": "5 seconds for vision, up to 30 seconds for HP regeneration.",
      "endsWhen": "The wearer removes the cape or it is destroyed; uses are limited to once every long rest.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Triforce Echo Cape's price reflects its rare craftsmanship and powerful abilities, making it a sought-after relic among Hyrulean warriors.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:46:23.690480+00:00",
    "aiReviewedAt": "2026-07-22T19:46:23.690480+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_fragment_treasure": {
    "id": "hyrule_triforce_fragment_treasure",
    "name": "Triforce Shard of the Forgotten",
    "description": "The Triforce Shard of the Forgotten is a fragment of light from the shattered Temple of the Triforce. This relic, once part of the legendary Triforce, glows softly when near the Master Sword or another shard. When struck in combat, it has a chance to restore 25% of lost Armor or Health, offering fleeting protection. Its presence enhances the bond between wielder and the sacred relic, amplifying their connection to the Triforce.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Glows Near Sacred Blades",
      "Healing on Strike"
    ],
    "vendor": "hyrule",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing on Strike",
        "rules": "When this item is struck in combat, there is a 20% chance that it will restore up to 25 points of Armor or Health. This effect is instantaneous and does not require an action from the wearer."
      },
      {
        "title": "Glows Near Sacred Blades",
        "rules": "The shard emits a soft glow when within 30 feet of the Master Sword or another Triforce Shard, enhancing the wielder's affinity for the Triforce by +1 to all related checks and saving throws."
      }
    ],
    "levelRequirementReason": "This relic is accessible to adventurers early in their journey, offering a modest boost without overreaching the balance of the game.",
    "vendorReason": "Hyrulean relics are highly sought after and Hyrule is the primary source for such artifacts.",
    "shippingDetail": "The item is delivered with a special courier who ensures its safe arrival, though delays may occur due to unpredictable weather in the region.",
    "usage": {
      "activation": "Passive effect upon being struck and when near sacred blades.",
      "duration": "Instantaneous on strike; continuous while within range of sacred blades.",
      "endsWhen": "Exhausts after three uses or if separated from the wielder for more than an hour.",
      "charges": "Uses"
    },
    "priceReason": "The price reflects its rare origin and modest utility without overshadowing other items of similar rarity.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:08:50.221614+00:00",
    "aiReviewedAt": "2026-07-22T07:08:50.221614+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_fragments": {
    "id": "hyrule_triforce_fragments",
    "name": "Triforce Shard of the Shattered Realm",
    "description": "The Triforce Shard of the Shattered Realm is a jagged fragment of the legendary relic, imbued with the ancient power of Hyrule's sacred geometry. Carved from the very essence of the Triforce, it grants its bearer a fleeting connection to the realm's divine balance. By donning this shard, one may temporarily enhance their combat prowess and uncover hidden quests that align with the great quest of the Triforce. Only found within the most perilous temple ruins, this fragment is both a relic of legend and a key to forgotten destiny.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Enhances Combat Prowess",
      "Unveils Nearby Quests"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Combat Prowess",
        "rules": "Activates on donning the shard as an action, providing a +1 bonus to all attack rolls and damage rolls for 5 minutes. The effect ends if the wearer removes the shard or is incapacitated."
      },
      {
        "title": "Unveils Nearby Quests",
        "rules": "Passive effect that reveals nearby Triforce-related quest markers within a 60-foot radius. This effect persists as long as the shard remains on the wearer's person and can be used once per day by interacting with it."
      }
    ],
    "levelRequirementReason": "Beginners often seek this relic early in their journey, but its power is not without challenge.",
    "vendorReason": "As a guardian of ancient relics and sacred sites, Hyrule offers this fragment to those who prove worthy of its power.",
    "shippingDetail": "Due to the shard's delicate nature, it is shipped with special care using Koopa Postal's reinforced crates.",
    "usage": {
      "activation": "Donning as an action",
      "duration": "5 minutes or until removed/incapacitated",
      "endsWhen": "Removal or incapacitation",
      "charges": "Unlimited, but can only be used once per day for quest markers"
    },
    "priceReason": "Balanced as a rare item, this shard offers significant utility without overpowered effects.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:09:17.123349+00:00",
    "aiReviewedAt": "2026-07-22T07:09:17.123349+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_hammer": {
    "id": "hyrule_triforce_hammer",
    "name": "Triforce Hammer",
    "description": "The Triforce Hammer, forged from the sacred power of Hyrule's ancient balance, is a legendary weapon shaped like the iconic symbol of the realm's harmony. Its strikes unleash devastating force, capable of staggering foes and causing them to falter for moments. This hammer not only deals relentless damage but also restores health to allies in its vicinity, ensuring that those closest to it can recover from their wounds.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Devastating Strikes",
      "Restores Health to Allies"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Devastating Strikes",
        "rules": "When the Triforce Hammer strikes an enemy, it deals 150% damage. Additionally, on a successful hit, the nearest ally within 5 feet is restored to full health."
      },
      {
        "title": "Staggering Strokes",
        "rules": "Enemies struck by the hammer are staggered for 2 seconds, giving allies time to capitalize on their vulnerability. This effect has no save DC and lasts until the end of the creature's next turn."
      }
    ],
    "levelRequirementReason": "The Triforce Hammer requires a level 7 character due to its immense power and the coordination needed to wield it effectively.",
    "vendorReason": "Hyrule is the birthplace of the Triforce, making it only fitting that the region's most trusted vendor, Hyrule, sells this legendary weapon.",
    "shippingDetail": "Pipe Express ensures safe and swift delivery via magical pipes, but due to its size, the hammer may arrive in pieces requiring assembly upon arrival.",
    "usage": {
      "activation": "Attack action",
      "duration": "Instantaneous effect on hit",
      "endsWhen": "Exhausts after a single use per day",
      "charges": "1 charge; recharges after a long rest"
    },
    "priceReason": "The balanced price reflects the hammer's epic rarity and its significant combat utility.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T07:10:01.839481+00:00",
    "aiReviewedAt": "2026-07-22T07:10:01.839481+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_heart": {
    "id": "hyrule_triforce_heart",
    "name": "Triforce Heart Shard",
    "description": "The Triforce Heart Shard, a shard of the ancient and sacred Triforce, glows faintly as if pulsing with divine energy. Crafted from the very heart of Hyrule's lost civilization, this relic grants its wielder access to formidable power during times of need. By channeling its essence, a warrior can unleash a cascade of devastating attacks for ten turns, their strikes striking true 30% harder than usual. This shard also serves as a key component in the legendary artificer's arsenal, capable of being fused with other relics to create artifacts of unparalleled strength and magic.",
    "price": 1000,
    "icon": "🏰",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Divine Cascade",
      "Relic Fusion"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Divine Cascade",
        "rules": "When activated as a bonus action, the wielder gains +30% damage to all attacks for ten turns. This effect ends if the wielder is incapacitated or takes any damage."
      },
      {
        "title": "Relic Fusion",
        "rules": "This shard can be fused with other relics of similar power to create new artifacts, enhancing their abilities and unlocking unique effects. The fusion process requires a successful DC 25 Craft (artificer) check and one hour of work in a sacred forge."
      }
    ],
    "levelRequirementReason": "The shard's raw power demands its wielder to be at least level 1, ensuring they can handle the strain.",
    "vendorReason": "Hyrule is the keeper of ancient relics and has a deep connection with the Triforce, making it the most fitting vendor for this sacred shard.",
    "shippingDetail": "Shipped via Koopa Express, this item arrives swiftly, delivered within one week from Hyrule Castle.",
    "usage": {
      "activation": "Bonus action to activate; lasts ten turns or until the wielder takes damage or is incapacitated.",
      "duration": "Ten turns or until expended",
      "endsWhen": "The effect ends if the wielder takes any damage or becomes incapacitated.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Given its rare origin and divine power, this shard is valued at 1000 XP, reflecting its status as a powerful, yet balanced item for a level 1 character.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T07:09:56.888507+00:00",
    "aiReviewedAt": "2026-07-22T07:09:56.888507+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_heart_core": {
    "id": "hyrule_triforce_heart_core",
    "name": "Triforce Heart Core",
    "description": "The Triforce Heart Core pulses with a radiant, ethereal light, its core glowing with ancient Tri Force energy. This relic grants you temporary invincibility during battle, allowing you to shrug off even the most devastating attacks for three precious seconds. Additionally, it enhances your prowess in breaking through enemy armor, increasing the chance of shattering their shields by 10%. Only one use per fight ensures its power is reserved for critical moments.",
    "category": "equipment",
    "price": 1000,
    "icon": "💥",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invincibility",
      "Shield Break Boost"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Invulnerability Surge",
        "rules": "Activates as a reaction when you are hit by an attack. Grants temporary invincibility for 3 seconds, during which you cannot be damaged or affected by attacks. Ends if the effect is dispelled."
      },
      {
        "title": "Enhanced Armor Penetration",
        "rules": "Increases your chance to break enemy shields by +10%. This effect lasts until the start of your next turn. It ends if you are hit by an attack or if you use another item with a similar effect."
      }
    ],
    "levelRequirementReason": "This relic is too powerful for lower levels, ensuring its use in more experienced hands.",
    "vendorReason": "Hyrule is the birthplace of the Triforce and thus holds many relics of great power, including this core.",
    "shippingDetail": "Delivered by a Rakasha spirit who ensures swift arrival.",
    "usage": {
      "activation": "Reaction to an attack",
      "duration": "3 seconds of invulnerability per use",
      "endsWhen": "The effect ends if dispelled or when the start of your next turn arrives.",
      "charges": "One charge, replenished after a long rest"
    },
    "priceReason": "This relic is rare and powerful, balancing its cost with the XP value.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:09:46.534178+00:00",
    "aiReviewedAt": "2026-07-22T07:09:46.534178+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_heart_shard": {
    "id": "hyrule_triforce_heart_shard",
    "name": "Triforce Shard of the Forgotten King",
    "description": "The Triforce Shard of the Forgotten King is a fractured fragment of the ancient Triforce, imbued with the spirit of the first Hylian king. It emits a soft, silvery glow that enhances both your physical and magical resilience in sacred spaces. Wielded only within the Temple of the Forgotten, this relic grants 15% faster HP and MP regeneration rates, while also providing a 20% resistance to shadow-based attacks from the ethereal realm.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "HP & MP Regeneration Boost",
      "Shadow Resistance"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "HP & MP Regeneration Boost",
        "rules": "While within the Temple of the Forgotten, this shard increases your healing and mana regeneration by 15% per second. This effect is passive and does not require any activation."
      },
      {
        "title": "Shadow Resistance",
        "rules": "For every hour spent in shadowy environments or combat with shadow-based creatures within the temple grounds, you gain a +20 bonus to your AC against such threats. This benefit lasts until the next sunrise outside the temple."
      }
    ],
    "levelRequirementReason": "This relic requires a certain understanding of ancient Hylian lore and magic, which is only attainable by those who have reached at least level 7.",
    "vendorReason": "Hyrulean scholars and priests are the custodians of ancient artifacts like this shard, as they understand its origins within their sacred temples.",
    "shippingDetail": "Ships with Pipe Express via a special delivery ensuring safe arrival to the Temple of the Forgotten.",
    "usage": {
      "activation": "Passive effect while in the specified temple and active shadowy conditions.",
      "duration": "Permanent while within the temple grounds, but resets at sunrise outside its walls.",
      "endsWhen": "Leaving the Temple of the Forgotten or at sunrise outside it.",
      "charges": "Unlimited"
    },
    "priceReason": "The relic's rarity and unique properties justify a price that reflects both its historical significance and its limited availability.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T07:09:53.473711+00:00",
    "aiReviewedAt": "2026-07-22T07:09:53.473711+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_mind_mirror": {
    "id": "hyrule_triforce_mind_mirror",
    "name": "Triforce Mind Mirror",
    "description": "The Triforce Mind Mirror, a sacred artifact crafted from the purest crystals of Hyrule's heart, reflects the wielder’s inner will and echoes the balance of the legendary Triforce itself. When activated, it enhances focus, instantly granting a +1 bonus to Intelligence checks and saving throws for 8 hours. It also reveals hidden paths in ancient temples, allowing you to bypass traps or secret passages with a successful Wisdom (Perception) check at DC 15.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Enhances Focus",
      "Reveals Hidden Paths"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Focus",
        "rules": "When activated, the Triforce Mind Mirror grants a +1 bonus to Intelligence checks and saving throws for 8 hours. This effect can only be used once per long rest."
      },
      {
        "title": "Reveals Hidden Paths",
        "rules": "Upon activation, you make a Wisdom (Perception) check at DC 15 to reveal hidden paths in ancient temples or ruins. If successful, you bypass one trap or secret passage immediately."
      }
    ],
    "levelRequirementReason": "The artifact's power is accessible to all who seek it, but its focus-enhancing effects are best suited for those just beginning their journey.",
    "vendorReason": "Hyrule, as the custodian of ancient artifacts, ensures that such powerful yet balanced relics are available to adventurers from across the land.",
    "shippingDetail": "The Triforce Mind Mirror is carefully couriered by Koopa Postal, ensuring it reaches its destination safely and intact.",
    "usage": {
      "activation": "Action",
      "duration": "8 hours",
      "endsWhen": "After the duration expires or when expended in combat",
      "charges": "Unlimited"
    },
    "priceReason": "The artifact's rarity and unique balance of utility make it a valuable yet balanced investment for any adventurer.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:10:14.511153+00:00",
    "aiReviewedAt": "2026-07-22T07:10:14.511153+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_shadow": {
    "id": "hyrule_triforce_shadow",
    "name": "Triforce Shadow Blade",
    "description": "The Triforce Shadow Blade is a dark, ethereal blade forged from the fractured shadow of the legendary Triforce. Its hilt glows faintly with ancient power, and its edge hums ominously when near corrupted foes. When wielded, it grants temporary invisibility to the user for 6 seconds upon each swing, allowing for deadly strikes unseen by the enemy. It also deals an additional +175% damage to enemies marked as corrupted by dark magic.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗡",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Shadow Invisibility",
      "Corruption Overkill"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Shadow Invisibility",
        "rules": "When the wielder swings the blade, they become temporarily invisible for a duration of 6 seconds. This effect is limited to one use per long rest."
      },
      {
        "title": "Corruption Overkill",
        "rules": "The blade deals an additional +175% damage against corrupted foes. This bonus damage stacks with any other source of critical hit multipliers, but does not affect normal hits unless a critical is rolled."
      }
    ],
    "levelRequirementReason": "This weapon's dark power requires the wielder to possess the discipline and focus of at least 7th level.",
    "vendorReason": "Hyrule is home to many ancient artifacts, including those forged from fragments of the Triforce itself.",
    "shippingDetail": "The blade is carefully packed by Void Drifters for safe transport, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "On a swing action",
      "duration": "6 seconds per use",
      "endsWhen": "Ends when the wielder ceases swinging or upon expiration of duration",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at this price to reflect its unique abilities and ancient craftsmanship.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T07:10:07.964337+00:00",
    "aiReviewedAt": "2026-07-22T07:10:07.964337+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_shard": {
    "id": "hyrule_triforce_shard",
    "name": "Triforce Echo Shard",
    "description": "The Triforce Echo Shard is a shimmering fragment of the legendary Triforce, pulsating with ancient power. Crafted from the very essence of Hyrule’s past, it hums with memories and strength. When activated, it grants a surge of all three core stats—Strength, Agility, and Intelligence—and reveals hidden weaknesses in foes within a 10-foot radius. It is said that only those pure of heart can wield its power without fear.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Boosts Core Stats",
      "Reveals Enemy Weaknesses"
    ],
    "vendor": "hyrule",
    "shippedBy": "Royal Mail of Hyrule",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Boosted Stats",
        "rules": "When activated as a bonus action, the Triforce Echo Shard grants temporary +2 to each of Strength, Agility, and Intelligence for 1 minute. This effect is limited to once per long rest."
      },
      {
        "title": "Reveal Weaknesses",
        "rules": "Upon activation, it reveals a hidden weakness in any foe within 10 feet, granting advantage on one attack roll against that target. This use ends when the target moves out of range or after 1 minute."
      }
    ],
    "levelRequirementReason": "The shard's power requires a level 3 character to wield without risk.",
    "vendorReason": "As a sacred relic from Hyrule, the Triforce Echo Shard is exclusively sold by the Temple of Time.",
    "shippingDetail": "Ships via Royal Mail; expedited delivery to major cities within a week.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute or until target moves out of range",
      "endsWhen": "Target moves out of range or after 1 minute, whichever comes first",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its powerful effects and rare origin, this relic is priced at 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:10:11.682241+00:00",
    "aiReviewedAt": "2026-07-22T07:10:11.682241+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_shard_3": {
    "id": "hyrule_triforce_shard_3",
    "name": "The Forgotten Heart Shard",
    "description": "The Forgotten Heart Shard is a small, glowing fragment of ancient Hyrulean history, pulsing with the echoes of forgotten battles and lost heroes. Crafted from the very essence of the land’s soul, it hums with the potential to heal and guide. Wielders report visions that blur past and future, offering glimpses into destinies yet unwritten. Though powerful, its magic demands focus; using it in battle without proper concentration risks unleashing unintended consequences.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Healing Touch",
      "Temporal Vision"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Healing Touch",
        "rules": "When the shard is activated and the wielder touches an ally, that creature regains 1d8 + 5 hit points. This effect can be used once per long rest."
      },
      {
        "title": "Temporal Vision",
        "rules": "While active, the wielder gains a +2 bonus to Insight checks made to discern the truth of events or intentions. Additionally, they see the past and future within a 30-foot radius for 1 minute each day."
      }
    ],
    "levelRequirementReason": "The Forgotten Heart Shard's power requires a wielder experienced enough to channel its ancient magic without mishap.",
    "vendorReason": "As the keepers of Hyrulean history, the Hyrulean Treasures trust only their trusted vendors with such sacred relics.",
    "shippingDetail": "Due to its delicate nature, the Forgotten Heart Shard is shipped via special courier in a sealed container with strict handling instructions.",
    "usage": {
      "activation": "Action (Requires concentration)",
      "duration": "1 minute per day while active",
      "endsWhen": "Concentration ends or if the wielder takes damage",
      "charges": "Unlimited, but recharges after a long rest"
    },
    "priceReason": "The price reflects its rarity and the risk involved in handling such an ancient artifact.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T07:10:31.623878+00:00",
    "aiReviewedAt": "2026-07-22T07:10:31.623878+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_shard_amber": {
    "id": "hyrule_triforce_shard_amber",
    "name": "Amber Triforce Shard",
    "description": "The Amber Triforce Shard radiates a warm, golden light that seems to dance in harmony with the sun’s rays. Originating from the ancient Temple of the Sunken King, it grants temporary resistance to elemental damage and allows the user to summon a small, glowing shield that can deflect attacks. This shard is said to be imbued with the very essence of the Triforce, making it a powerful relic from Hyrule's distant past.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Elemental Resistance",
      "Glowing Shield"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Elemental Resistance",
        "rules": "When activated, this shard provides temporary resistance to all elemental damage types by 25% for a duration of 15 seconds. The effect can be used once per long rest."
      },
      {
        "title": "Glowing Shield",
        "rules": "Upon activation, the user summons a small, glowing shield that deflects one melee or ranged attack made against them within the next round. The shield remains active for 5 seconds and can only block one attack before dissipating."
      }
    ],
    "levelRequirementReason": "This shard requires a minimum level of 7 to wield its power, ensuring it is accessible to seasoned adventurers.",
    "vendorReason": "Hyrule's marketplaces are known for their vast array of ancient and mystical relics, and the Amber Triforce Shard is among the most sought-after.",
    "shippingDetail": "The fragile nature of the shard necessitates special handling by Boo Spectral Mail to ensure safe delivery.",
    "usage": {
      "activation": "Action",
      "duration": "15 seconds or until used, whichever comes first",
      "endsWhen": "Upon use or when a new round begins if the shield is still active",
      "charges": "Unlimited"
    },
    "priceReason": "The Amber Triforce Shard's rarity and mystical properties justify its moderate price of 1000 XP.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-22T07:10:39.544491+00:00",
    "aiReviewedAt": "2026-07-22T07:10:39.544491+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_shard_core": {
    "id": "hyrule_triforce_shard_core",
    "name": "Triforce Shard Core",
    "description": "The Triforce Shard Core is a molten, crystalline fragment of the shattered relic, radiating divine energy that pulses like a living heart. Crafted by the ancient sages of Hyrule, it channels raw power to enhance combat prowess, yet overuse can drive even the most virtuous to madness. This core's essence is tempered in the fires of the Sacred Realm, granting immense damage but at the cost of diminishing health after prolonged use.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+40% Damage to Attacks",
      "Divine Fury (Debuff)"
    ],
    "vendor": "Hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Damage (+40%)",
        "rules": "Activate as a bonus action. The user's attacks deal an additional +40% damage for the duration of one short rest or until expended, requiring concentration."
      },
      {
        "title": "Divine Fury (Debuff)",
        "rules": "When activated, there is a 20% chance to inflict 'Divine Fury' on enemies. This debuff reduces enemy movement speed by 5 feet and attack rolls by 1d6 for 3 rounds. Saves DC is equal to the user's Charisma modifier + 8."
      }
    ],
    "levelRequirementReason": "This core can be wielded even by new adventurers, as its power is balanced with a risk of temporary insanity.",
    "vendorReason": "The sacred relics of Hyrule are held in the highest regard and only Hyrulean vendors offer them to heroes.",
    "shippingDetail": "This item is shipped via a special courier, ensuring safe delivery from the Sacred Realm itself.",
    "usage": {
      "activation": "Bonus action",
      "duration": "One short rest or until expended, requiring concentration",
      "endsWhen": "Exhausted after one use per day",
      "charges": "Unlimited"
    },
    "priceReason": "This item offers significant combat advantage but comes with a risk, making it valuable yet balanced.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:10:57.435647+00:00",
    "aiReviewedAt": "2026-07-22T07:10:57.435647+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_shroud": {
    "id": "hyrule_triforce_shroud",
    "name": "Triforce Shroud",
    "description": "The Triforce Shroud is a mystical cloak, woven from threads of twilight and dawn, that shrouds its wearer in an impenetrable veil of invisibility. Crafted by the ancient sages of Hyrule, this relic not only masks one's presence but also nullifies magical detection spells. The fabric itself hums with the power of the Triforce, allowing the wearer to move swiftly and silently through treacherous landscapes without arousing suspicion or alarm.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧥",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Magical Detection Nullification"
    ],
    "vendor": "hyrule",
    "shippedBy": "Hyrule Postal Service",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "Activates as a bonus action. The wearer becomes invisible for up to 1 hour, after which they must wait 10 minutes before using this effect again."
      },
      {
        "title": "Magical Detection Nullification",
        "rules": "Passive effect while the cloak is worn. Reduces the chance of magical detection by 40%, making it difficult for enemies or traps to sense the wearer's presence."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 3 due to its intricate enchantments and the complexity of its power.",
    "vendorReason": "The Triforce Shroud is only available through Hyrule's most trusted merchants, who source it directly from ancient temples where it was once kept as a sacred artifact.",
    "shippingDetail": "Ships within the week, delivered by trusted couriers in finely woven packages to ensure its safe arrival.",
    "usage": {
      "activation": "Bonus action to activate invisibility; passive magical detection nullification while worn.",
      "duration": "Invisibility lasts for up to 1 hour or until dismissed.",
      "endsWhen": "The effect ends when the wearer dismisses it, after 1 hour of use, or if they take any violent action.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Crafted with rare materials and ancient enchantments, this item is priced at a fair value of 1000 XP.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T07:10:45.243853+00:00",
    "aiReviewedAt": "2026-07-22T07:10:45.243853+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_soul": {
    "id": "hyrule_triforce_soul",
    "name": "Triforce Soul Fragment",
    "description": "The Triforce Soul Fragment, a shimmering shard of ancient power, is said to be a piece of the legendary Triforce itself. Crafted from the very essence of time and destiny, it grants its bearer an unyielding shield of willpower and the uncanny ability to reveal enemy weaknesses with every clash in battle. When worn, the fragment amplifies one’s resolve, making attacks glance off harmlessly while exposing the true heart of foes.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+10% Defense",
      "Reveals Enemy Weakness"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fortified Resolve",
        "rules": "Activates as a reaction when you take damage from an attack. Grants +10% defense for the next 5 seconds, reflecting enemy strikes off to the side harmlessly."
      },
      {
        "title": "Expose Vulnerability",
        "rules": "Grants you advantage on Insight checks against foes within 30 feet of you and reveals their most vulnerable trait (weakness) for 5 seconds. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This fragment’s power is accessible to all who carry it, as its essence lies in the heart of every hero.",
    "vendorReason": "Hyrule's ancient treasures are closely guarded and sold by the trusted guardians of the realm.",
    "shippingDetail": "The fragment is delivered through a swift, ethereal courier known for its timely deliveries even across vast distances.",
    "usage": {
      "activation": "Reaction when taking damage; once per long rest to reveal enemy weaknesses.",
      "duration": "5 seconds after activation or until the end of your next turn",
      "endsWhen": "The effect ends if you take an action or a reaction, or at the start of your next turn.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to offer significant utility without being overpowered, this fragment is priced for its rare and powerful nature.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:11:15.205715+00:00",
    "aiReviewedAt": "2026-07-22T07:11:15.205715+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_soul_gem": {
    "id": "hyrule_triforce_soul_gem",
    "name": "Soul Gem of the Three Kings",
    "description": "The Soul Gem of the Three Kings is a radiant, three-pronged gemstone that hums with ancient power, each prong etched with the symbol of one of the Triforce’s three elements: Power, Wisdom, and Courage. When activated, it grants temporary elemental resistance to allies, bolstering their defenses against the very forces it embodies. The gem also enhances the stamina of those who wield it during treacherous temple traversals, allowing them to move with unprecedented speed through hazardous terrain.",
    "category": "equipment",
    "price": 1000,
    "icon": "💫",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Elemental Resistance Boost",
      "Enhanced Stamina"
    ],
    "vendor": "hyrule",
    "shippedBy": "Royal Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elemental Resistance Boost",
        "rules": "When activated as a bonus action, the gem grants all allies within 10 feet temporary resistance to one type of elemental damage (fire, water, wind) equal to your proficiency bonus + 4. This effect lasts for 30 seconds and can be used once per short or long rest."
      },
      {
        "title": "Enhanced Stamina",
        "rules": "For every hour spent within the gem's aura during temple traversal, all allies gain advantage on Strength (Athletics) checks and are immune to exhaustion from moderate exertion. The effects of this ability last until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This item is suitable for adventurers starting their journey, providing a basic advantage in elemental defense and stamina.",
    "vendorReason": "Hyrule has long been the repository of ancient relics, and this gem is no exception, offering travelers a taste of its legendary power.",
    "shippingDetail": "Delivered with utmost care via Royal Pony Express, ensuring swift arrival to eager hands.",
    "usage": {
      "activation": "Bonus action for Elemental Resistance Boost; once per short or long rest.",
      "duration": "30 seconds for Elemental Resistance Boost; lasts until the end of your next long rest for Enhanced Stamina.",
      "endsWhen": "The effect expires at the end of a long rest unless recharged.",
      "charges": "Unlimited, but requires a short or long rest to recharge."
    },
    "priceReason": "Balanced as it provides significant utility without being overpowered, this gem is priced at 1000 XP to reflect its rarity and value in play.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-22T07:11:09.349392+00:00",
    "aiReviewedAt": "2026-07-22T07:11:09.349392+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_soul_shard": {
    "id": "hyrule_triforce_soul_shard",
    "name": "Heart of the Triforce Shard",
    "description": "The Heart of the Triforce Shard is a shimmering sliver of light carved from the very essence of the shattered Triforce. It pulses faintly, imbued with the ancient will and unyielding spirit of the legendary Guardian of Hyrule. With each successful action, this relic amplifies your resolve, bolstering morale and restoring health. The shard’s power is both a blessing and a burden, for it channels the raw energy of Hyrule's greatest protector to strengthen you in battle.",
    "price": 1000,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Restores Health",
      "Enhances Morale"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Health Restoration",
        "rules": "When used as an action, this shard restores 100 hit points. The effect has a cooldown of one hour."
      },
      {
        "title": "Morale Boost",
        "rules": "For every successful attack or skill check made by the wielder within 5 minutes after activation, their morale increases, granting a +2 bonus to all Charisma (Inspiration) checks for that duration. This effect can be triggered up to three times per long rest."
      }
    ],
    "levelRequirementReason": "This relic is accessible to adventurers of any level who seek to channel the power of Hyrule's guardian.",
    "vendorReason": "The Heart of the Triforce Shard is a sacred artifact, and only Hyrule, as the steward of ancient relics, can sell it.",
    "shippingDetail": "The shard is delivered via swift spirit courier, ensuring its safe arrival within a day regardless of distance.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for Health Restoration; lasts for the duration of the next Charisma (Inspiration) check for Morale Boost",
      "endsWhen": "Cooldown ends or effect is interrupted by a failed saving throw against a hostile force's effects.",
      "charges": "Unlimited, but can only be used once per long rest."
    },
    "priceReason": "The Heart of the Triforce Shard offers potent healing and morale benefits at an accessible price for adventurers seeking to bolster their resilience in battle.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T07:11:27.027619+00:00",
    "aiReviewedAt": "2026-07-22T07:11:27.027619+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_tome": {
    "id": "hyrule_triforce_tome",
    "name": "Triforce Tome",
    "description": "The Triforce Tome is a bound scroll crafted from ancient Hyrulean parchment and inked with the very essence of the Triforce. Unfold it, and its pages hum with the power of balance, wisdom, or raw power — whichever you choose to channel for ten minutes. However, each use exacts a heavy toll: allies gain temporary resilience against elemental damage, but the user must either complete a challenging task or endure a near-fatal wound to restore their connection to the Triforce.",
    "price": 1000,
    "icon": "📜",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Virtue Mastery",
      "Fortune’s Shield"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Virtue Mastery",
        "rules": "Choose one of the three virtues: Balance, Power, or Wisdom. You gain temporary control over that virtue for ten minutes. To activate, you must spend an hour studying the tome and perform a DC 15 Wisdom (Insight) check. The effect ends if you lose concentration (as normal)."
      },
      {
        "title": "Fortune’s Shield",
        "rules": "Allies within 30 feet gain advantage on saving throws against elemental damage for the duration of your virtue mastery. This benefit lasts until the end of the virtue's ten-minute duration."
      }
    ],
    "levelRequirementReason": "Only those with a deep connection to Hyrule and its ancient magic can command the Triforce’s power.",
    "vendorReason": "Hyrule is the cradle of the Triforce, and only its guardians hold such sacred relics.",
    "shippingDetail": "The delivery may take up to three days due to the fragile nature of the tome and the need for special couriers.",
    "usage": {
      "activation": "1 action to unfold, study, and activate",
      "duration": "Ten minutes per use",
      "endsWhen": "You lose concentration or complete a task/lose 50% health",
      "charges": "Unlimited"
    },
    "priceReason": "The Triforce’s power is too great to be contained in a common item, making this tome a rare and valuable commodity.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T07:11:12.695876+00:00",
    "aiReviewedAt": "2026-07-22T07:11:12.695876+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_vial": {
    "id": "hyrule_triforce_vial",
    "name": "Triforce Vial of Echoes",
    "description": "The Triforce Vial of Echoes holds a fragment of the divine power that forged Hyrule’s legendary symbol. When consumed, it grants the drinker a surge of strength, enhancing their attacks by +20% and providing a 35% chance to bypass an enemy's armor. The vial’s essence is said to have been crafted in the sacred fires of the Temple of Time, imbued with the very will of the Triforce itself.",
    "price": 1000,
    "icon": "🍺",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+20% Attack Power",
      "35% chance to bypass enemy armor"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blessed Might",
        "rules": "Upon consumption, the user gains +20% attack power for a duration of 1 minute. This effect can only be used once per long rest."
      },
      {
        "title": "Armor Bypass",
        "rules": "There is a 35% chance that any successful hit lands on an enemy will bypass their armor, dealing extra damage equal to half the user's attack bonus. This ability has no save DC and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The vial’s power is accessible to any adventurer willing to face its challenge.",
    "vendorReason": "Hyrule's vendors are known for their connection to ancient artifacts and relics, making the Triforce Vial of Echoes a natural addition to their inventory.",
    "shippingDetail": "The vial is carefully transported by the Rakasha Spirit Walk, ensuring its safe arrival without any magical interference.",
    "usage": {
      "activation": "Consumption",
      "duration": "1 minute per use; ends when the duration expires or on a failed saving throw against a hostile force",
      "endsWhen": "The duration ends upon a failed saving throw or at the end of the user's next turn if used as a bonus action.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The vial’s rarity and its connection to Hyrule’s sacred heritage make it a valuable but not overpowered purchase.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:12:08.455922+00:00",
    "aiReviewedAt": "2026-07-22T07:12:08.455922+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_triforce_wisp": {
    "id": "hyrule_triforce_wisp",
    "name": "Triforce Wisp",
    "description": "The Triforce Wisp is a delicate, glowing fragment of light that hovers gracefully in your hand. Originating from Hyrule's sacred realm, it pulsates with the essence of the Triforce, granting you fleeting access to its profound power. When activated, this wisp bestows upon you the mastery of all three Triforce abilities, enhancing your performance by +5 on any action that invokes them. However, beware, for while it grants immense power, the wisp may temporarily bind you to the whims of the Triforce, compelling you to act in ways aligned with its ancient will.",
    "price": 1000,
    "icon": "🌟",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Triforce Mastery",
      "Enhanced Triforce Abilities"
    ],
    "vendor": "hyrule",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Triforce Mastery",
        "rules": "Activates as a bonus action, lasts for 1 minute. You gain the ability to use all three Triforce abilities (Wisdom, Courage, and Power) without any skill or level restriction. The wisp must remain in your hand for this effect to function. Ends when you lose consciousness or if it is destroyed."
      },
      {
        "title": "Enhanced Triforce Abilities",
        "rules": "+5 bonus to all actions that invoke the use of a Triforce ability, including but not limited to attacks, saving throws, and skill checks. This effect lasts for 1 minute per use. It ends if you take any action other than using a Triforce ability or if the wisp is destroyed."
      }
    ],
    "levelRequirementReason": "The wisp's power requires a minimum of 1st level to wield, as its effects are too potent for lower levels.",
    "vendorReason": "As the keeper of Hyrule's sacred artifacts, the Hyrulean market is the only place where such an item could be found and sold responsibly.",
    "shippingDetail": "The wisp is sent in a specially crafted crystal container to protect its delicate form during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute per use, up to three times per day",
      "endsWhen": "You lose consciousness or the wisp is destroyed",
      "charges": "3 charges"
    },
    "priceReason": "While not as powerful as the original Triforce, the Triforce Wisp still commands a high price due to its rarity and immense potential.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-22T07:11:30.566081+00:00",
    "aiReviewedAt": "2026-07-22T07:11:30.566081+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_wario_cursed_sword": {
    "id": "hyrule_wario_cursed_sword",
    "name": "WarioWare Curseblade",
    "description": "The WarioWare Curseblade is a cursed blade forged by the mischievous Skaven. Its hilt glows with an eerie green light, and its edge shimmers with unpredictable energy. When wielded in battle, it strikes with deadly precision, delivering slashing damage alongside a randomized WarioWare glitch that can either aid or hinder opponents. However, after three uses, the wielder must face a surge of psychic backlash. This sword is not for the faint of heart—it demands attunement by a true WarioWare Master and should never be brought near sacred Hyrulean sites.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎮",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Psychic Surge",
      "Random Glitch"
    ],
    "vendor": "hyrule",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Psychic Surge",
        "rules": "After three uses, the wielder must make a Wisdom saving throw (DC 15) or take 1d6 psychic damage. The sword then requires an hour of meditation to reset."
      },
      {
        "title": "Random Glitch",
        "rules": "Each hit triggers a random WarioWare glitch effect with a 2-in-6 chance of causing temporary enemy debuffs (e.g., invincibility, speed boost) or player buffs. The glitch persists for up to two turns."
      }
    ],
    "levelRequirementReason": "Even the simplest WarioWare Master can recognize and handle the blade's unpredictable nature.",
    "vendorReason": "Hyrulean vendors are well-versed in dealing with cursed artifacts from various realms, including those from the twisted world of WarioWare.",
    "shippingDetail": "The blade is carefully packed to prevent any accidental glitches during transit. Shipping time is extended by one extra day due to precautionary measures.",
    "usage": {
      "activation": "Attack action",
      "duration": "Instantaneous, glitch effects last up to two turns",
      "endsWhen": "After three uses or if the wielder fails a saving throw against the Psychic Surge",
      "charges": "Unlimited after resetting"
    },
    "priceReason": "The blade's legendary status and unique curse make it a rare commodity, justifying its moderate price.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-22T07:11:30.435266+00:00",
    "aiReviewedAt": "2026-07-22T07:11:30.435266+00:00",
    "aiReviewVersion": 1
  },
  "ice_flower": {
    "id": "ice_flower",
    "name": "Ice Flower",
    "description": "The Ice Flower is a crystalline blue blossom that never melts, even in scorching sun. Crafted from ancient frost veins deep within the arctic tundra, it grants its bearer cryokinetic abilities. With a mere thought, it can unleash a frigid Ray of Frost or summon an icy blade with the power of an Ice Knife spell (2nd level). Its touch brings resistance to cold damage, ensuring the wielder remains unscathed in frosty environs.",
    "category": "consumables",
    "price": 1000,
    "icon": "❄️",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Ray of Frost",
      "Ice Knife"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Frostbound Falcon Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ray of Frost",
        "rules": "Cast as an action. It deals 1d6 cold damage to a target creature within 5 feet, with a DC 14 Dexterity saving throw for half damage."
      },
      {
        "title": "Ice Knife (2nd Level Spell)",
        "rules": "Summons an icy blade that strikes at a single target within 30 feet. The blade deals 2d6 cold damage on hit, with a DC 14 Dexterity saving throw for half damage."
      }
    ],
    "levelRequirementReason": "Requires less power to wield than the original due to balanced design and reduced effects.",
    "vendorReason": "The Toad Town Market specializes in exotic and unique items, including cold weather adaptations like this Ice Flower.",
    "shippingDetail": "Ships via the Frostbound Falcon, known for its efficiency through icy terrains.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous (Ray of Frost) / One Minute (Ice Knife)",
      "endsWhen": "Exhausted after use; recharges on a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its effect and rarity, this Ice Flower provides cryokinetic abilities at an appropriate level.",
    "priceOriginal": 30000,
    "priceReviewedAt": "2026-07-22T19:46:30.831940+00:00",
    "aiReviewedAt": "2026-07-22T19:46:30.831940+00:00",
    "aiReviewVersion": 1
  },
  "ice_flower_seed": {
    "id": "ice_flower_seed",
    "name": "Ice Flower Seed",
    "description": "The Ice Flower Seed is a shimmering crystalline seed that, when planted in cold soil, rapidly grows into a frost-spitting flower. Its leaves glisten with ice and its stem crackles with latent cold energy. Keep it away from warmth or fire; even the slightest heat can cause it to shatter into harmless shards of ice. This frosty bloom releases a 5-foot radius frost aura that impedes movement, turning the area into difficult terrain.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌸",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Frost Aura",
      "Cold Burst"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Ice Pack",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Frost Aura",
        "rules": "When planted and grown, the Ice Flower Seed releases a frost aura that lasts for its duration. Any creature within this area must make a DC 13 Constitution saving throw or be restrained until the end of their next turn due to slippery ice cover."
      },
      {
        "title": "Cold Burst",
        "rules": "Upon activation, the Ice Flower shoots a burst of ice shards in a 30-foot radius. Each creature in this area must make a DC 14 Dexterity saving throw or take 2d6 cold damage and be knocked prone."
      }
    ],
    "levelRequirementReason": "This seed is easy to plant and grow, requiring only basic knowledge of frost magic.",
    "vendorReason": "Shamans frequently use such seeds for their frost spells and magical concoctions.",
    "shippingDetail": "Delivered frozen to preserve the plant's icy properties. Requires special handling within a day of purchase.",
    "usage": {
      "activation": "Reaction, activate when planting the seed in cold soil.",
      "duration": "Instantaneous bloom and frost aura duration (5 rounds).",
      "endsWhen": "The flower withers or is destroyed by heat.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to be a useful consumable for beginners, its price reflects the rarity and utility of frost magic.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T07:11:46.884529+00:00",
    "aiReviewedAt": "2026-07-22T07:11:46.884529+00:00",
    "aiReviewVersion": 1
  },
  "ice_power_badge": {
    "id": "ice_power_badge",
    "name": "Ice Power Badge",
    "description": "The Ice Power Badge is a cold, gleaming badge made of frost-hardened ice that shimmers with an icy blue light. This rune-encrusted trinket is said to have been crafted by ancient arctic shamans who sought to harness the power of winter's chill. Wield it in battle and your melee attacks become icy blasts, dealing Cold damage instead of physical damage, making you a frosty nightmare for fire-elemental foes.",
    "category": "equipment",
    "price": 1000,
    "icon": "❄️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Cold Damage Dealt",
      "Enhanced Frost Attacks"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Cold Box Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cold Damage Dealt",
        "rules": "When you make a melee attack with this badge, it deals Cold damage instead of the weapon's normal damage type. This effect has no range or area and does not require a saving throw. You can use this ability once per short rest."
      },
      {
        "title": "Enhanced Frost Attacks",
        "rules": "Against fire-based creatures, your melee attacks deal an additional +1 damage. This enhancement lasts until the start of your next turn and cannot be used more than twice per long rest."
      }
    ],
    "levelRequirementReason": "The badge is crafted to be accessible for newer adventurers who have a basic understanding of combat.",
    "vendorReason": "Shamans at the hut often trade in magical trinkets that enhance elemental abilities, and this badge perfectly complements their offerings.",
    "shippingDetail": "Delivered by Cold Box Express; may arrive frosty and fragile. Handle with care during shipping to avoid damage.",
    "usage": {
      "activation": "Instantaneous on melee attack",
      "duration": "Until start of next turn",
      "endsWhen": "Starts of your next turn or when the badge is removed from you",
      "charges": "Unlimited"
    },
    "priceReason": "The Ice Power Badge is crafted with rare materials and ancient magic, making it a fair value for its unique elemental properties.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-22T07:11:58.906764+00:00",
    "aiReviewedAt": "2026-07-22T07:11:58.906764+00:00",
    "aiReviewVersion": 1
  },
  "identification_service": {
    "id": "identification_service",
    "name": "Arcane Identification Service",
    "description": "The Arcane Identification Service is a certified appraiser's meticulous examination, providing exact magical properties and curse details within 24 hours. This service ensures you receive an expert confirmation of rarity and approximate value, delivered with a detailed written certificate that can sway even the most skeptical patrons. The arcane institute guarantees its precision through centuries-old methods and a team of master sages who have never erred in their appraisals.",
    "category": "services",
    "price": 1000,
    "icon": "🔍",
    "stock": 999,
    "rarity": "common",
    "effects": [
      "Expert Appraisal",
      "Certified Value"
    ],
    "vendor": "arcane_institute",
    "shippedBy": "Courier of Secrets",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Expert Appraisal",
        "rules": "Upon activation, the service provides a detailed analysis of one magical item's properties, any enchantments, and potential curses. This effect is instantaneous and requires no saving throw or action to activate."
      },
      {
        "title": "Certified Value",
        "rules": "The appraisal also includes an expert confirmation of the rarity and approximate value of the identified item. This assessment is considered final for all trading purposes within the local market, and it can be used as a reference in future negotiations or disputes."
      }
    ],
    "levelRequirementReason": "Anyone interested in magical items must have at least a basic understanding of their properties.",
    "vendorReason": "The arcane institute is renowned for its precision and reliability, ensuring that all appraisals are accurate and trustworthy.",
    "shippingDetail": "Delivered by the Courier of Secrets, known for their punctuality and discretion. The service includes a tracking number for easy verification.",
    "usage": {
      "activation": "A simple verbal command to request the identification process.",
      "duration": "Instantaneous",
      "endsWhen": "The appraisal is completed or if the item's magical properties change.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This service is priced at 1000 XP to reflect its expert precision and the time invested in each appraisal.",
    "priceOriginal": 500,
    "priceReviewedAt": "2026-07-22T07:12:25.529646+00:00",
    "aiReviewedAt": "2026-07-22T07:12:25.529646+00:00",
    "aiReviewVersion": 1
  },
  "immortality_binding": {
    "id": "immortality_binding",
    "name": "Immortality Binding (Phylactery Service)",
    "description": "The Immortality Binding is a phylactery crafted from the bones of an ancient dragon. This relic ensures eternal life, but at the cost of your soul's freedom and the risk of being torn apart by cosmic entities if discovered. Once bound, you cannot die permanently; resurrection within 1d6 days restores your body to health, but each revival brings a level of exhaustion that only full rest can cure. The phylactery must remain hidden deep in the crypts; should it be found and destroyed, your soul perishes with it.",
    "category": "forbidden",
    "price": 1000,
    "icon": "💀",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Eternal Life",
      "Exhaustion on Resurrection"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Ancient Ritual Ceremony",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Eternal Life",
        "rules": "By binding your soul to the phylactery, you achieve functional immortality. If reduced to 0 HP and the phylactery is within reach, you are resurrected in 1d6 days at a nearby location of your choice. Each resurrection grants you one level of exhaustion that is removed only by completing a long rest."
      },
      {
        "title": "Exhaustion on Resurrection",
        "rules": "Each time you are resurrected using the phylactery, you gain 1 level of exhaustion. This condition persists until you complete a long rest. A paladin or necromancer within 30 feet may use an action to attempt to destroy your phylactery with a successful DC 25 Con saving throw."
      }
    ],
    "levelRequirementReason": "Only those of sufficient power and commitment can afford the risks and responsibilities associated with immortality.",
    "vendorReason": "The crypt courier specializes in delivering forbidden relics and has a network deep within ancient tombs where such items are kept safe.",
    "shippingDetail": "Shipped through an ancient ritual that requires the delivery to be conducted by night, ensuring secrecy and protection from prying eyes.",
    "usage": {
      "activation": "Passive effect; activation occurs when you are reduced to 0 HP and the phylactery is within reach.",
      "duration": "Instantaneous upon death",
      "endsWhen": "Phylactery destroyed or your soul perishes if discovered",
      "charges": "Unlimited, but each use brings exhaustion"
    },
    "priceReason": "The cost reflects the immense power and risk involved in achieving functional immortality.",
    "priceOriginal": 1000000,
    "priceReviewedAt": "2026-07-22T07:12:15.406076+00:00",
    "aiReviewedAt": "2026-07-22T07:12:15.406076+00:00",
    "aiReviewVersion": 1
  },
  "inevitable_justice_protocol": {
    "id": "inevitable_justice_protocol",
    "name": "Inevitable Justice Protocol",
    "description": "The Inevitable Justice Protocol is a leather-bound contract, etched with arcane symbols and runes of cosmic law. When invoked, it summons a Marut guardian from the Inevitable Tribunal to enforce its terms, ensuring that no violation goes unpunished. The Marut's presence alone can deter even the most brazen criminals, but should any oath be broken, the Protocol activates an ancient mechanism that executes the offender instantly and without mercy.",
    "price": 1000,
    "icon": "⚖️",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Summon a Marut Guardian",
      "Instant Execution for Violations"
    ],
    "vendor": "cosmic_court",
    "shippedBy": "Lawful Manifestation",
    "levelRequirement": 18,
    "factionBonus": {
      "law": 200
    },
    "effectDetails": [
      {
        "title": "Summons a Marut Guardian",
        "rules": "Requires an action to activate. The Protocol summons a Marut guardian from the Inevitable Tribunal, which enforces the contract's terms. Once summoned, the Marut remains until dismissed or the contract is fulfilled. The Marut can take one action and one reaction per turn. The summoning effect has no save DC but requires a level 18 character to activate."
      },
      {
        "title": "Instant Execution for Violations",
        "rules": "If any term of the contract is violated, the Protocol immediately activates an ancient mechanism that executes the violator instantaneously. This effect has no save DC and can only be used once per Protocol."
      }
    ],
    "levelRequirementReason": "Only characters of level 18 or higher possess the gravitas and authority to invoke such a powerful artifact.",
    "vendorReason": "The Cosmic Court upholds cosmic law and thus is the only entity trusted with selling this Protocol.",
    "shippingDetail": "Ships via Lawful Manifestation, ensuring swift delivery to a level 18 or higher character.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous summoning; the Marut guardian remains until dismissed or contract fulfilled.",
      "endsWhen": "Dismissed by the Protocol's owner or when the contract is fulfilled.",
      "charges": "Single use"
    },
    "priceReason": "The Protocol's rarity and unique ability to summon a Marut guardian, combined with its limited single-use nature, justify this balanced price.",
    "priceOriginal": 775000,
    "priceReviewedAt": "2026-07-22T07:13:01.015516+00:00",
    "aiReviewedAt": "2026-07-22T07:13:01.015516+00:00",
    "aiReviewVersion": 1
  },
  "infernal_contract_binder": {
    "id": "infernal_contract_binder",
    "name": "Infernal Contract Binder (Legal)",
    "description": "The Infernal Contract Binder (Legal) is a leather-bound tome with intricate Baatezu sigils etched into its cover. This artifact enforces devilish pacts with unyielding infernal law, ensuring that any breach of contract results in dire consequences. Carrying the weighty burden of this tome grants you a +20 bonus to Persuasion checks when dealing with infernal entities or signing binding contracts. Made by skilled Baatezu scribes, it is a testament to hell's meticulous craftsmanship.",
    "price": 1000,
    "icon": "📜",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Unbreakable Pacts",
      "Infernal Persuasion"
    ],
    "vendor": "hellfire_court",
    "shippedBy": "Imp Messenger",
    "levelRequirement": 17,
    "factionBonus": {
      "infernal": 50
    },
    "effectDetails": [
      {
        "title": "Unbreakable Pacts",
        "rules": "When you sign a contract with an infernal entity using this binder, the pact is enforced by unyielding infernal law. Any breach of the contract results in immediate and severe repercussions for both parties involved. This effect has no save DC but requires that the contract be signed within 10 feet of the tome."
      },
      {
        "title": "Infernal Persuasion",
        "rules": "While holding this binder, you gain a +20 bonus to Persuasion checks when dealing with infernal entities or signing binding contracts. This benefit lasts for 1 hour per level and can be activated as a bonus action."
      }
    ],
    "levelRequirementReason": "This item requires at least level 17 due to its potent infernal magic and the complexity of its construction.",
    "vendorReason": "The Hellfire Court is renowned for its dealings with infernal entities, making it a fitting vendor for this artifact.",
    "shippingDetail": "The Imp Messenger ensures swift and discreet delivery of the Infernal Contract Binder (Legal), guaranteeing that the item reaches its intended recipient without attracting unwanted attention.",
    "usage": {
      "activation": "Bonus action to activate Persuasion bonus; Instantaneous for pact enforcement",
      "duration": "1 hour per level, until a breach occurs or the contract is completed",
      "endsWhen": "The contract is breached, completed, or you release your hold on the binder",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the item's rarity and its unique infernal enchantments.",
    "priceOriginal": 780000,
    "priceReviewedAt": "2026-07-22T07:12:31.398616+00:00",
    "aiReviewedAt": "2026-07-22T07:12:31.398616+00:00",
    "aiReviewVersion": 1
  },
  "infernal_gate_opener": {
    "id": "infernal_gate_opener",
    "name": "Infernal Gate Opener (Portal)",
    "description": "The Infernal Gate Opener (Portal) is a gleaming, obsidian rod etched with sigils of the Nine Hells. Crafted by the Gatekeepers of Dis, it opens temporary portals to the infernal realms that can last up to 10 minutes and summon creatures of CR 15 or less. This artifact requires an infernal pact for its use; once activated, the gate appears in a burst of sulfurous smoke, readying you for summoning or quick travel to the depths of Dis.",
    "price": 1000,
    "icon": "🚪",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Summons Creatures",
      "Infernal Pact Required"
    ],
    "vendor": "hell_portal",
    "shippedBy": "Devils Bargain",
    "levelRequirement": 18,
    "factionBonus": {
      "infernal": 75
    },
    "effectDetails": [
      {
        "title": "Portal Creation",
        "rules": "Activates as an action. The portal lasts up to 10 minutes or until dismissed, summoning creatures of Challenge Rating 15 or less from the Nine Hells. The gate can only be opened by those who have made a pact with infernal entities."
      },
      {
        "title": "Infernal Pact",
        "rules": "The user must maintain an active infernal pact to use this item. If the pact is broken, the portal collapses immediately and the Opener (Portal) can no longer be used until the pact is restored."
      }
    ],
    "levelRequirementReason": "Only those of high standing in infernal affairs or of at least 18th level can wield this artifact safely.",
    "vendorReason": "The Hell Portal vendors are trusted distributors of infernal artifacts and pacts, making them the sole purveyor of this powerful item.",
    "shippingDetail": "Delivered by a courier from the Nine Hells; expect delays due to dangerous transit times.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 10 minutes or until dismissed",
      "endsWhen": "Pact broken, portal destroyed, or 10 minutes expire",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP due to its infernal origin and the risks involved in summoning creatures from the Nine Hells.",
    "priceOriginal": 860000,
    "priceReviewedAt": "2026-07-22T07:13:31.613406+00:00",
    "aiReviewedAt": "2026-07-22T07:13:31.613406+00:00",
    "aiReviewVersion": 1
  },
  "infernal_soul_contract": {
    "id": "infernal_soul_contract",
    "name": "Infernal Soul Contract (Standard)",
    "description": "The Infernal Soul Contract is a leather-bound tome adorned with sigils of hellfire and blood. It contains a pre-written soul exchange agreement, with one blank page reserved for the terms of your pact. Should you sign this contract, you trade a fragment of your essence to Mammon's domain in exchange for an infernal favor, which can be spent on bestowing +2 permanent points to any ability score. This binding document, crafted by Mammon's Legal Department, is a relic of unfathomable power and danger.",
    "price": 1000,
    "icon": "👹",
    "stock": 6,
    "rarity": "legendary",
    "effects": [
      "Soul Exchange",
      "Infernal Favor"
    ],
    "vendor": "hells_notary",
    "shippedBy": "Chain Devil Courier",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Soul Exchange",
        "rules": "Activating this contract requires the signing of your name. Doing so exchanges a fragment of your essence with Mammon's domain. You must complete a short rest each day to maintain the binding. Failure to do so results in a -1 penalty to all ability scores for 24 hours."
      },
      {
        "title": "Infernal Favor",
        "rules": "By spending an infernal favor, you may boost one of your ability scores by +2 permanently. This effect is instantaneous and does not require action. However, once you use this favor, it takes a full hour to regain."
      }
    ],
    "levelRequirementReason": "Only those of great power can negotiate with Mammon's Legal Department without risking their very soul.",
    "vendorReason": "The Hells Notary is the sole authorized distributor of such contracts, ensuring that only those who truly understand the risks are offered this service.",
    "shippingDetail": "The Chain Devil Courier delivers with great haste and caution, as the contract's binding nature ensures it must be handled by an entity of equal infernal power.",
    "usage": {
      "activation": "Signing one's name on the blank page to activate; using an infernal favor requires no action but takes a full hour to recover.",
      "duration": "Permanent (requires daily short rest maintenance)",
      "endsWhen": "Failing to complete a daily short rest, or if the contract is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the immense power and risk involved in such a pact with Mammon.",
    "priceOriginal": 725000,
    "priceReviewedAt": "2026-07-22T07:12:57.181254+00:00",
    "aiReviewedAt": "2026-07-22T07:12:57.181254+00:00",
    "aiReviewVersion": 1
  },
  "infernal_war_machine": {
    "id": "infernal_war_machine",
    "name": "Infernal War Machine (Vehicle)",
    "description": "The Infernal War Machine, a molten monstrosity forged in the fiery pits of Hell, roars to life on the battlefield. Its metal plates shimmer with an unholy glow, and its cannons spit forth relentless streams of searing flame. Designed by the Pit Forges for infernal domination, it can carry five troops at breakneck speed, capable of outrunning even the swiftest cavalry. The vehicle's fiery breath leaves a trail of destruction in its wake.",
    "price": 1000,
    "icon": "🚗",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Carries 5 troops",
      "Flame Cannon Volley"
    ],
    "vendor": "war_demon_factory",
    "shippedBy": "Hellwagon",
    "levelRequirement": 18,
    "factionBonus": {
      "infernal": 100
    },
    "effectDetails": [
      {
        "title": "Carries 5 Troops",
        "rules": "The Infernal War Machine can transport five soldiers to the battlefield, providing a mobile and heavily armed platform for combat. This effect lasts until the vehicle is destroyed or its fuel runs out."
      },
      {
        "title": "Flame Cannon Volley",
        "rules": "As an action, the driver can unleash a volley of flame from the War Machine's cannons. All enemies within 30 feet must make a DC 15 Dexterity saving throw or take 4d8 fire damage and be blinded for 1 minute."
      }
    ],
    "levelRequirementReason": "Only those with significant experience and power can command such a fearsome construct.",
    "vendorReason": "The War Demon Factory specializes in crafting and selling infernal machinery, including the infamous Infernal War Machine.",
    "shippingDetail": "Ships via Hellwagon, known for its punctual deliveries through otherworldly means.",
    "usage": {
      "activation": "As a bonus action to activate or deactivate.",
      "duration": "Instantaneous activation; lasts until the end of the battle.",
      "endsWhen": "Destroyed by fire damage exceeding half its hit points or when it runs out of fuel.",
      "charges": "Unlimited, recharges after 7 days."
    },
    "priceReason": "Balanced for a high-level party's need for an exotic and powerful battlefield asset.",
    "priceOriginal": 980000,
    "priceReviewedAt": "2026-07-22T19:46:50.137036+00:00",
    "aiReviewedAt": "2026-07-22T19:46:50.137036+00:00",
    "aiReviewVersion": 1
  },
  "infinite_ballroom": {
    "id": "infinite_ballroom",
    "name": "Infinite Ballroom",
    "description": "The Infinite Ballroom is a portable, extradimensional venue that can inflate and deflate at will, expanding to accommodate up to ten thousand revelers in an instant. Its walls are lined with shimmering mirrors that reflect the light of candles, creating an endless sea of stars. The air hums with the sound of live music, and every guest finds their favorite delicacy and drink on a silver platter. This pocket dimension can attract the attention of fey or noble guests, who may stay longer than expected.",
    "category": "premium",
    "price": 1000,
    "icon": "🎭",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Holds up to 10,000 guests",
      "Provides live entertainment"
    ],
    "vendor": "fey_market",
    "shippedBy": "Pocket Dimension Key",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Expand and Contract",
        "rules": "The Infinite Ballroom can expand or contract in size as needed. It requires an action to activate and a concentration to maintain for up to one hour per use. If concentration is lost, the ballroom collapses into its pocket dimension state."
      },
      {
        "title": "Entertainment and Refreshments",
        "rules": "Live music and gourmet refreshments are provided automatically by the extradimensional realm. This effect lasts until the next sunrise or until the ballroom's dimensions change."
      }
    ],
    "levelRequirementReason": "This item is designed for a wide range of adventurers, from first-level characters to those seeking an opulent setting for their endeavors.",
    "vendorReason": "The Fey Market has access to rare extradimensional artifacts and this ballroom is one such treasure, often used by fey patrons for grand occasions.",
    "shippingDetail": "Ships via a pocket dimension key, which must be used to open the ballroom after delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Concentration up to one hour per use",
      "endsWhen": "Concentration is lost or the next sunrise",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item offers a rare and versatile service at an accessible price, suitable for adventurers of all levels.",
    "priceOriginal": 600000,
    "priceReviewedAt": "2026-07-22T07:13:42.084190+00:00",
    "aiReviewedAt": "2026-07-22T07:13:42.084190+00:00",
    "aiReviewVersion": 1
  },
  "infinite_garden": {
    "id": "infinite_garden",
    "name": "Infinite Garden",
    "description": "The Infinite Garden is a compact pocket dimension that houses an endless variety of flora. From rare, luminescent flowers to towering, ancient trees, this garden can grow any plant you desire. The plants are always in peak condition and require no care or maintenance, ensuring they thrive for as long as the garden exists. Legends say it may even attract dryads or gardeners who find solace within its verdant confines.",
    "category": "premium",
    "price": 1000,
    "icon": "🌿",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Grows Any Plant",
      "Self-Sustaining"
    ],
    "vendor": "fey_market",
    "shippedBy": "Pocket Dimension Key",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grows Any Plant",
        "rules": "As an action, you can specify a plant type and the garden will grow one example. The plant is fully grown at its peak condition upon creation."
      },
      {
        "title": "Self-Sustaining",
        "rules": "The garden requires no maintenance or nourishment. It sustains itself indefinitely as long as it remains intact."
      }
    ],
    "levelRequirementReason": "Even the simplest gardener can appreciate the wonders of the Infinite Garden.",
    "vendorReason": "The Fey Market often sells unique items from other planes, and the Infinite Garden is a rare find indeed.",
    "shippingDetail": "Ships via a Pocket Dimension Key, ensuring safe delivery through dimensional transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The garden is destroyed or the key is lost",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a premium item, this garden offers immense utility at an accessible price for those who can afford it.",
    "priceOriginal": 400000,
    "priceReviewedAt": "2026-07-22T07:13:12.533076+00:00",
    "aiReviewedAt": "2026-07-22T07:13:12.533076+00:00",
    "aiReviewVersion": 1
  },
  "infinite_library_access": {
    "id": "infinite_library_access",
    "name": "Infinite Library Access (Lifetime)",
    "description": "The Infinite Library Access (Lifetime) card grants you permanent access to a vast library of scholarly knowledge. Its leather-bound cover gleams with an arcane blue sheen, and its pages are said to be magically bound from every book ever written. With this card, you can delve into restricted archives where even the most learned scholars have not ventured before. The library's keeper ensures that only those who have proven their worth through rigorous study may enter, making the card a symbol of profound academic achievement.",
    "category": "premium",
    "price": 1000,
    "icon": "📚",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "+2 to all Knowledge checks",
      "Once per long rest: gain advantage on a single Intelligence check"
    ],
    "vendor": "scholar_society",
    "shippedBy": "Enchanted Library Card Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "+2 to all Knowledge Checks",
        "rules": "This enhancement provides you with a +2 bonus on all Intelligence (History) and Investigation checks. This effect is permanent."
      },
      {
        "title": "Advantage on a Single Intelligence Check per Long Rest",
        "rules": "Once during each long rest, you can gain advantage on one Intelligence check of your choice. You must finish a short or long rest before using this ability again."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to allow them to gain foundational knowledge and skills.",
    "vendorReason": "The Scholar Society oversees the largest library in existence, making it the only reputable source for such a card.",
    "shippingDetail": "Delivered by the Enchanted Library Card Courier, which ensures that your new card arrives safely and intact.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Permanent and ongoing",
      "endsWhen": "Destroyed if you lose permanent access to the library or if the library itself is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "The card's value lies in its permanent access to unparalleled knowledge resources, making it a worthwhile investment for any scholar.",
    "priceOriginal": 165000,
    "priceReviewedAt": "2026-07-22T07:13:38.898071+00:00",
    "aiReviewedAt": "2026-07-22T07:13:38.898071+00:00",
    "aiReviewVersion": 1
  },
  "infinite_stat_scroll": {
    "id": "infinite_stat_scroll",
    "name": "Infinite Stat Scroll",
    "description": "The Infinite Stat Scroll is a parchment of ancient design, adorned with cryptic symbols. It whispers to your soul, offering the power to etch any numerical value into your character sheet, be it for strength, intelligence, or even hidden attributes like luck and charisma. Crafted by The Number Cruncher in a forgotten laboratory deep within the earth, this scroll is said to have been used by those who dared to challenge fate itself.",
    "category": "consumables",
    "price": 1000,
    "icon": "📜",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Unlimited Stat Alteration",
      "Permanent Buffs"
    ],
    "vendor": "stat_manipulation",
    "shippedBy": "Variable Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unlimited Stat Alteration",
        "rules": "You may write any numerical value for your ability scores, including HP and AC. This effect is instantaneous upon activation but can only be used once per long rest."
      },
      {
        "title": "Permanent Buffs",
        "rules": "The written values are permanent until overwritten by another use of this scroll or a similar effect. However, the scroll cannot be used to set any score below 10 unless you succeed on a DC 25 Intelligence saving throw."
      }
    ],
    "levelRequirementReason": "This scroll is intended for beginners who need to adjust their stats without the complexity of higher-level magic.",
    "vendorReason": "Stat Manipulation is known for its expertise in character optimization and this scroll fits perfectly into their product line.",
    "shippingDetail": "Delivered with a courier that ensures the scroll arrives in pristine condition, protected by a special enchantment that prevents any tampering or alteration during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect is expended after one use per long rest or overwritten by another use of this scroll or similar magic.",
      "charges": "Unlimited"
    },
    "priceReason": "This scroll, while powerful, is balanced to be affordable for players who need it early in their character's journey.",
    "priceOriginal": 42000000,
    "priceReviewedAt": "2026-07-22T07:14:02.908916+00:00",
    "aiReviewedAt": "2026-07-22T07:14:02.908916+00:00",
    "aiReviewVersion": 1
  },
  "infinite_wine_cask": {
    "id": "infinite_wine_cask",
    "name": "Infinite Wine Cask",
    "description": "The Infinite Wine Cask is an ancient cask forged from oak and enchanted with the essence of the gods. Every dawn, it refills itself with 100 bottles of the finest wine, each bottle imbued with a divine blessing that grants +1 to Cha cha cha checks for one hour. The cask's sentient nature allows it to protect its contents with a subtle barrier that can deflect minor blows or spells.",
    "category": "premium",
    "price": 1000,
    "icon": "🍷",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Blessed Wine",
      "Sentient Defense"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Cask of Gold Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blessed Wine",
        "rules": "When consumed, the wine grants +1 to Cha cha cha checks for one hour. The cask can produce this effect up to three times per day."
      },
      {
        "title": "Sentient Defense",
        "rules": "The cask can activate its defensive barrier once as a reaction when it is struck or targeted by an attack that would deal damage directly to it."
      }
    ],
    "levelRequirementReason": "This item's divine properties and production capabilities make it accessible to players of all levels.",
    "vendorReason": "Wario Direct specializes in rare and exotic items, including those with a touch of the supernatural.",
    "shippingDetail": "Ships via Cask of Gold Express, known for its reliable delivery service.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous; effects last until used up or the cask is damaged.",
      "endsWhen": "The effects end when all produced wine has been consumed or the cask is destroyed.",
      "charges": "Unlimited, but the cask can only produce 100 bottles of wine per dawn."
    },
    "priceReason": "The price reflects its legendary rarity and the daily production of high-quality wine, which is a significant value proposition for players.",
    "priceOriginal": 300000,
    "priceReviewedAt": "2026-07-22T07:13:53.372450+00:00",
    "aiReviewedAt": "2026-07-22T07:13:53.372450+00:00",
    "aiReviewVersion": 1
  },
  "ink_splotch_talisman": {
    "id": "ink_splotch_talisman",
    "name": "Ink-Splotch Talisman",
    "description": "The Ink-Splotch Talisman is a glass encasement of indelible ink that warps and reacts to deceit. When worn, it soaks up falsehoods like a sponge, revealing them as faint, glowing halos around the speaker. The talisman can also instantly negate any forged document within 30 feet with a single action, ensuring truth in matters of contract or record. It's a favorite among scholars and scribes who seek to uphold the integrity of their work.",
    "category": "equipment",
    "price": 1000,
    "icon": "🖋️",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Truth Revealer",
      "Forgery Nullifier"
    ],
    "vendor": "black_ink",
    "shippedBy": "Stamped Tube",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Truth Revealer",
        "rules": "The wearer can see lies as faint, glowing halos around the speaker for up to 10 minutes. This effect is usable once per day."
      },
      {
        "title": "Forgery Nullifier",
        "rules": "As an action, the wearer can target a forged document within 30 feet and instantly nullify its effects, making it appear as genuine text. No save or check required; this effect has no cooldown."
      }
    ],
    "levelRequirementReason": "The talisman is designed to be accessible for all adventurers who value truth over falsehoods.",
    "vendorReason": "Black Ink specializes in ink and writing implements, making the Ink-Splotch Talisman a natural addition to their inventory.",
    "shippingDetail": "The talismans are shipped securely within a protective glass container to prevent accidental damage during transit.",
    "usage": {
      "activation": "As an action or reaction (for Truth Revealer); as an action (for Forgery Nullifier)",
      "duration": "10 minutes for Truth Revealer; instantaneous for Forgery Nullifier",
      "endsWhen": "Effect duration ends naturally; once used, the talisman is exhausted until recharged by a short rest.",
      "charges": "Unlimited charges per long rest"
    },
    "priceReason": "The Ink-Splotch Talisman offers significant utility for adventurers and scholars without being overpowered.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-22T07:13:55.466500+00:00",
    "aiReviewedAt": "2026-07-22T07:13:55.466500+00:00",
    "aiReviewVersion": 1
  },
  "inked_tattoo_voucher": {
    "id": "inked_tattoo_voucher",
    "name": "Inked Tattoo Voucher",
    "description": "The Inked Tattoo Voucher is a delicate, ink-stained parchment that whispers tales of ancient parlor magic. It entitles the bearer to one magical tattoo session at the prestigious Inked Parlor, where skilled scribes imbue their clients with enduring marks of power and lore. The parlor's masterpieces are said to enhance the recipient's essence in subtle yet profound ways, offering +1 to a chosen ability score, a minor resistance to harm, or the chance to cast a cantrip once per long rest.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🖊️",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Permanent Magical Tattoo",
      "Limited Use"
    ],
    "vendor": "inked_parlor",
    "shippedBy": "Swift Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Permanent Magical Tattoo",
        "rules": "Upon activation by a successful DC 15 Craft (Calligraphy) check, the recipient gains a permanent magical tattoo. The DM selects one of three effects: +1 to an ability score, minor resistance to one damage type, or the ability to cast a cantrip once per long rest."
      },
      {
        "title": "Limited Use",
        "rules": "The voucher grants only one use and cannot be used again unless acquired through another means. The parlor's master ensures each tattoo is unique, crafted with ancient runes that align with the recipient’s destiny."
      }
    ],
    "levelRequirementReason": "This requirement ensures novices can access this form of personal enhancement without overpowered effects.",
    "vendorReason": "The Inked Parlor is renowned for its masterful artistry and the deep lore behind each tattoo, making it a trusted source for such items.",
    "shippingDetail": "Delivered within three days by the Swift Courier's reliable services.",
    "usage": {
      "activation": "Activates upon successful DC 15 Craft (Calligraphy) check.",
      "duration": "Permanent once activated.",
      "endsWhen": "Exhausted after one use.",
      "charges": "Unlimited, but only one can be used."
    },
    "priceReason": "The price reflects the unique crafting process and the permanent effect of the tattoo, balancing value with rarity.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T07:14:11.372874+00:00",
    "aiReviewedAt": "2026-07-22T07:14:11.372874+00:00",
    "aiReviewVersion": 1
  },
  "inkopolis_cheep_cheep_accords_trinket": {
    "id": "inkopolis_cheep_cheep_accords_trinket",
    "name": "Cheep Cheep Accords Charm",
    "description": "The Cheep Cheep Accords Charm is a small, intricately crafted amulet given to Toads who signed the Accords. Crafted from inkstone and adorned with a silver toad emblem, it whispers faintly of ink when held close. This charm grants +2 proficiency bonus on all skill checks related to ink manipulation and secret-keeping. When agitated or in the presence of Rakasha Spirit Walkers, it emits a visible ink bubble that can be used to momentarily calm an agitated Toad's mind.",
    "price": 1000,
    "icon": "🐸",
    "stock": 20,
    "rarity": "uncommon",
    "effects": [
      "Ink Manipulation Proficiency",
      "Temporary Calm"
    ],
    "vendor": "inkopolis",
    "shippedBy": "Paratroopa Air Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ink Manipulation Proficiency",
        "rules": "The wearer gains a +2 bonus to skill checks related to ink manipulation and secret-keeping. This effect is passive and does not require activation."
      },
      {
        "title": "Temporary Calm",
        "rules": "When activated as a bonus action, the charm emits an ink bubble that can be used to momentarily calm an agitated Toad's mind for 1 minute. The effect ends early if the charm is removed from the wearer or if they move more than 5 feet away from it."
      }
    ],
    "levelRequirementReason": "The charm provides a minor benefit that can be used by lower-level Toads to navigate social and practical situations involving ink.",
    "vendorReason": "Inkopolis, the ink capital of Toad Town, is known for creating items that align with its citizens' daily tasks and traditions; this charm serves as a token of their role in maintaining the Accords.",
    "shippingDetail": "Ships via Paratroopa Air Express, ensuring quick delivery to Toad Town residents.",
    "usage": {
      "activation": "Bonus action; can be used once per day",
      "duration": "Instantaneous activation with a 1-minute duration for calming the mind",
      "endsWhen": "Effect ends if charm is removed or wearer moves more than 5 feet away, or if the charm runs out of charges",
      "charges": "1/Day"
    },
    "priceReason": "The charm's rarity and specific utility justify its higher price; it offers a unique benefit that aligns with Toad culture.",
    "priceOriginal": 300,
    "priceReviewedAt": "2026-07-22T07:14:25.578353+00:00",
    "aiReviewedAt": "2026-07-22T07:14:25.578353+00:00",
    "aiReviewVersion": 1
  },
  "inkopolis_feywild_tie": {
    "id": "inkopolis_feywild_tie",
    "name": "Feywild Echoes",
    "description": "Feywild Echoes is a shard of fractured time, shimmering with the colors of the Feywild. Crafted by the Vampire Covenant, it whispers ancient secrets and reveals hidden paths in the mazes of the wild. Each use grants you 10 seconds to manipulate time, but at a cost: you lose 10% of your health. The shard connects both Inkopolis and The Feywild, creating random time loop events that ripple through nearby areas.",
    "price": 1000,
    "icon": "🌀",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Time Manipulation",
      "Random Time Loops"
    ],
    "vendor": "inkopolis",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Time Manipulation",
        "rules": "As a bonus action, you can manipulate time for 10 seconds. During this time, you gain the ability to slow or speed up your movement and actions within the area of effect. The use ends when time manipulation is completed or if you take an action that requires concentration."
      },
      {
        "title": "Random Time Loops",
        "rules": "For 10 seconds after each use, random events in nearby areas may trigger time loops. This can cause unpredictable effects on the environment and creatures within a 30-foot radius of you. The use ends when the duration expires or if you are knocked unconscious."
      }
    ],
    "levelRequirementReason": "This item requires at least level 7 to wield due to its complex magic and the inherent danger of time manipulation.",
    "vendorReason": "Inkopolis is known for its connections with mystical artifacts, making it a logical vendor for Feywild Echoes.",
    "shippingDetail": "The shard is carefully packed in an enchanted container to prevent accidental use during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "10 seconds",
      "endsWhen": "Completion of time manipulation or being knocked unconscious",
      "charges": "Unlimited, but each use costs you 10% of your maximum health."
    },
    "priceReason": "The price is set at 1000 XP to reflect the item's epic rarity and the risk involved with its time-manipulating effects.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T07:14:25.585351+00:00",
    "aiReviewedAt": "2026-07-22T07:14:25.585351+00:00",
    "aiReviewVersion": 1
  },
  "inkopolis_fungi_fashion_glove": {
    "id": "inkopolis_fungi_fashion_glove",
    "name": "Fungi Fashion Glove",
    "description": "The Fungi Fashion Glove is crafted from enchanted toadstool skin harvested from Princess Elowen’s abandoned garden, its fingers delicately stitched with the very essence of flora. When worn, it grants a +1 bonus to all skill checks involving fashion or disguise, and nearby fungi within a 30-foot radius have a 5% chance to bloom in a dazzling pattern, catching the eye of any observer. The glove subtly enhances stealth in mushroom forests, making you nearly invisible among the dense, vibrant fungi.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Fashion Bonus",
      "Fungi Bloom"
    ],
    "vendor": "inkopolis",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fashion Bonus",
        "rules": "While wearing this glove, you gain a +1 bonus to all skill checks involving fashion or disguise. This effect is passive and lasts for the duration of your concentration (up to 10 minutes). It ends if you remove the glove."
      },
      {
        "title": "Fungi Bloom",
        "rules": "When worn in an area populated by fungi, there is a 5% chance that nearby fungi will bloom in a glittering pattern. This effect has a casting time of 1 action and can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The glove’s enchantments are subtle but effective, suitable for characters of any level who wish to enhance their skills in fashion and disguise.",
    "vendorReason": "Inkopolis is known for its unique and enchanted items that cater to the whimsical needs of adventurers and artists alike. The Fungi Fashion Glove fits perfectly within their line of offerings.",
    "shippingDetail": "The glove arrives in a sealed, enchanted box that ensures it remains enchanted during transit.",
    "usage": {
      "activation": "Passive effect; no activation required for bonus to skill checks. Fungi Bloom is an action-based effect.",
      "duration": "Duration of concentration (up to 10 minutes) for Fashion Bonus, instantaneous for Fungi Bloom.",
      "endsWhen": "Fashion Bonus ends if the glove is removed; Fungi Bloom ends when its duration expires or the area no longer contains fungi.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The glove’s unique enchantments and origin from a legendary garden make it a sought-after item, justifying its higher price.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T07:14:19.299956+00:00",
    "aiReviewedAt": "2026-07-22T07:14:19.299956+00:00",
    "aiReviewVersion": 1
  },
  "inkopolis_ink_scarf_of_the_princess": {
    "id": "inkopolis_ink_scarf_of_the_princess",
    "name": "Ink Scarf of the Princess",
    "description": "The Ink Scarf of the Princess, woven from the ink of a slain princess, pulses with her final breaths and whispered regrets. This relic, smuggled into Inkopolis by a rogue diplomat, grants the wearer a strange sense of purpose and a haunting whisper that only those who remember her will understand. The scarf's ink reacts to any nearby ink squid, causing a perception penalty, but it also enhances stealth in ink-based environments.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌊",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+2 Stealth with Ink",
      "-1 Perception Near Ink Squid"
    ],
    "vendor": "inkopolis",
    "shippedBy": "Mages Guild Portal",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Stealth Enhancement",
        "rules": "The wearer gains +2 to all Dexterity (Stealth) checks when using ink-based concealment in environments where the scent of ink is present. This effect lasts until the end of their next turn."
      },
      {
        "title": "Perception Penalty",
        "rules": "Whenever the wearer is within 30 feet of an ink squid, they suffer a -1 penalty to Perception checks made to notice or identify objects or creatures nearby. This effect persists for 1 minute and can be ended early with a successful Wisdom (Insight) check against DC 15."
      }
    ],
    "levelRequirementReason": "The wearer must have reached at least fourth level to fully appreciate the emotional and strategic weight of this relic.",
    "vendorReason": "Inkopolis, known for its rich history with ink and princesses, is a fitting vendor for such a poignant artifact.",
    "shippingDetail": "Ships via the Mages Guild Portal's express service; delivery can be expedited upon request for an additional fee.",
    "usage": {
      "activation": "Passive effect, activated on initial wear and remains active as long as the conditions are met.",
      "duration": "Instantaneous and ongoing while the conditions are satisfied.",
      "endsWhen": "The effect ends if the wearer removes the scarf or when the ink fades away.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The balanced price reflects both the item's historical significance and its ongoing utility in stealth-based scenarios.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:14:42.331892+00:00",
    "aiReviewedAt": "2026-07-22T07:14:42.331892+00:00",
    "aiReviewVersion": 1
  },
  "inkopolis_ink_siphon_torch": {
    "id": "inkopolis_ink_siphon_torch",
    "name": "Ink Siphon Torch",
    "description": "The Ink Siphon Torch is a dimly glowing torch that draws ink from foes and replenishes your own supply. Crafted by Inkopolis, this torch can only be used in areas where ink-based terrain exists, such as the city's labyrinthine sewers or the artist district. When struck, it releases a burst of ink, creating a temporary fog that obscures vision for nearby enemies. The torch requires an area with ink to function and cannot be used underwater.",
    "category": "equipment",
    "price": 1000,
    "icon": "💧",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Siphons Ink",
      "Ink Fog"
    ],
    "vendor": "inkopolis",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Siphons Ink",
        "rules": "When you attack a creature, you can use an action to siphon ink from it. You deal no damage but instead gain 1d4 ink if the target has at least 2 ink. This effect has no save DC and can be used once per long rest."
      },
      {
        "title": "Ink Fog",
        "rules": "When struck, the torch releases a burst of ink that creates a 5-foot-radius fog centered on you. Creatures within this area have disadvantage on Dexterity (Stealth) checks for 1 minute. This effect can only be triggered once per short rest."
      }
    ],
    "levelRequirementReason": "This torch is designed for novice explorers and adventurers who need to conserve their own ink resources.",
    "vendorReason": "Inkopolis, the city of ink, naturally sells this practical device used by its citizens and visitors alike.",
    "shippingDetail": "The torch is shipped in a protective sleeve to ensure it arrives in working condition.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (the fog lasts for 1 minute)",
      "endsWhen": "The effect ends when the duration expires or the torch is destroyed.",
      "charges": "Unlimited, but can only be used once per short rest."
    },
    "priceReason": "This balanced price reflects the torch's utility in ink-based environments and its limited capabilities.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:14:36.852290+00:00",
    "aiReviewedAt": "2026-07-22T07:14:36.852290+00:00",
    "aiReviewVersion": 1
  },
  "inkopolis_ink_wars_gearbox": {
    "id": "inkopolis_ink_wars_gearbox",
    "name": "Ink Wars Gearbox",
    "description": "The Ink Wars Gearbox is a sleek mechanical contraption crafted from salvaged ink cartridges and gleaming brass. This device, when worn, allows you to fire ink-based projectiles with an intimidating 1d8 damage, each shot requiring one ink token that replenishes after three rounds of rest. It also grants +2 to all Ink Warfare skill checks, making it a valuable tool for any warrior embroiled in the chaotic ink duels of Inkopolis.",
    "category": "equipment",
    "price": 1000,
    "icon": "🖋",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Ink-Based Projectiles",
      "Enhanced Skill Checks"
    ],
    "vendor": "inkopolis",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Ink-Based Projectiles",
        "rules": "When you activate the Ink Wars Gearbox, you can fire ink-based projectiles as a bonus action. The projectile deals 1d8 nonlethal damage to one target within 30 feet. Each shot consumes an ink token which replenishes after three rounds of rest."
      },
      {
        "title": "Enhanced Skill Checks",
        "rules": "While wearing the Ink Wars Gearbox, you have advantage on all skill checks related to Ink Warfare. This effect is permanent until the item is removed or lost."
      }
    ],
    "levelRequirementReason": "Requires proficiency with mechanical devices and familiarity with ink-based combat.",
    "vendorReason": "The Inkopolis Gearworks specializes in crafting gear for the city's most daring duellists.",
    "shippingDetail": "Ships via Dry Bones Dead Drop, known for its unpredictable and secure delivery methods.",
    "usage": {
      "activation": "Bonus action to fire a projectile; permanent skill advantage while worn.",
      "duration": "Permanent until removed or lost.",
      "endsWhen": "Removed or lost.",
      "charges": "Unlimited; ink tokens replenish after rest."
    },
    "priceReason": "Balanced price considering the item's rare crafting and unique combat utility in Inkopolis.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:14:42.195877+00:00",
    "aiReviewedAt": "2026-07-22T07:14:42.195877+00:00",
    "aiReviewVersion": 1
  },
  "inkopolis_item_name_here": {
    "id": "inkopolis_item_name_here",
    "name": "Festival of Falling Stars Amulet",
    "description": "The Festival of Falling Stars Amulet gleams with a soft, starlit glow that pulses in time with the festival's magic. Crafted by Vampire Covenant during the Festival of Falling Stars, it weaves together fragments of Peach's memory into its core. The amulet offers immunity to mental infections from The Internet and enhances critical hit chances by 30%, ensuring your attacks shine like the brightest stars during the festival.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌠",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Immunity to Mental Infections",
      "Enhanced Critical Hits"
    ],
    "vendor": "inkopolis",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Immunity to Mental Infections",
        "rules": "The amulet grants immunity to mental infections from The Internet, providing a safeguard against digital corruption. This effect is passive and lasts until the amulet's charges are depleted."
      },
      {
        "title": "Enhanced Critical Hits",
        "rules": "Wielders gain a +30 bonus to critical hit chances when making attack rolls. This effect is active during combat and ends if the wearer drops the amulet or takes damage from an enemy attack."
      }
    ],
    "levelRequirementReason": "The intricate magic of the amulet requires a level 8 character to harness its full potential.",
    "vendorReason": "inkopolis, known for their unique and powerful artifacts, carries this rare amulet as part of their exclusive festival offerings.",
    "shippingDetail": "The amulet is delivered swiftly by Lakitu Drones, ensuring it arrives just in time for the Festival of Falling Stars.",
    "usage": {
      "activation": "Passive effect; active during combat when making attack rolls.",
      "duration": "Instantaneous (active); ends if wearer drops or takes damage from an enemy attack.",
      "endsWhen": "Charges are depleted, wearer drops it, or takes damage from an enemy attack.",
      "charges": "Limited use, recharges after a long rest."
    },
    "priceReason": "The amulet's price reflects its rarity and the powerful magic woven into it, making it a sought-after item among adventurers.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T07:15:10.295744+00:00",
    "aiReviewedAt": "2026-07-22T07:15:10.295744+00:00",
    "aiReviewVersion": 1
  },
  "inkopolis_mage_soul_tear": {
    "id": "inkopolis_mage_soul_tear",
    "name": "Mage Soul Tear",
    "description": "A single drop of liquid magic harvested from the heart of a fallen spellcaster who sacrificed their soul to save Inkopolis from a sentient ink storm, this vial glows with a spectral blue hue, reminiscent of a dying star's final moments. Encased in a glass vial that once belonged to a Beanbean coin vault, it bears the weight of ancient magic and a tragic tale. Only spellcasters sworn to protect Inkopolis can wield its power.",
    "price": 1000,
    "icon": "💧",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Soul-Siphoned Restoration",
      "Spellcasting Boost"
    ],
    "vendor": "inkopolis",
    "shippedBy": "Mages Guild Portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Soul-Siphoned Restoration",
        "rules": "When consumed, this vial restores 300 points of magic power (MP) to the user. This effect is instantaneous and cannot be resisted with a saving throw."
      },
      {
        "title": "Spellcasting Boost",
        "rules": "For one round after activation, all spellcasting rolls by the user are increased by +2. This boost applies to all spells cast within this duration."
      }
    ],
    "levelRequirementReason": "This vial's power is accessible to any spellcaster, regardless of level, but its effects are most potent for lower-tier spellcasters who can appreciate its full potential.",
    "vendorReason": "As the item was discovered in a Beanbean coin vault and directly tied to Inkopolis's history, it is only sold by the local Mages Guild to keep its legacy alive.",
    "shippingDetail": "Shipped via a secure portal within 7 days of purchase. Delivery may be delayed due to arcane logistics.",
    "usage": {
      "activation": "Eaten as a potion",
      "duration": "Instantaneous, but the effects last for one round",
      "endsWhen": "The effect duration expires or the user casts another spell during this time",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the unique and powerful nature of the vial, which combines the essence of a fallen hero with the magic of Inkopolis.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-22T07:15:05.843080+00:00",
    "aiReviewedAt": "2026-07-22T07:15:05.843080+00:00",
    "aiReviewVersion": 1
  },
  "inkopolis_minus_world_keychain": {
    "id": "inkopolis_minus_world_keychain",
    "name": "Minus World Keychain",
    "description": "The Minus World Keychain is a relic from an ancient ink-splattered world. Crafted in a forgotten forge, it whispers secrets of lost realms when held close to a map. Its faint blue ink stain marks wearers who have ventured into its shadowy depths, and the keychain's charm enhances luck during explorations involving ink and maps. With every use, there is a 5% chance of uncovering hidden portals, but only if an ink-based map is present. Worn during sleep, it triggers vivid visions of lost memories, offering insights into forgotten lore.",
    "price": 1000,
    "icon": "🌌",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Reveals Hidden Portals",
      "Vivid Dreams of Forgotten Lore"
    ],
    "vendor": "inkopolis",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveals Hidden Portals",
        "rules": "Activates on use. Requires an ink-based map to function. Grants a 5% chance to discover a hidden portal in the vicinity. Ends when the keychain is removed from contact with the map."
      },
      {
        "title": "Vivid Dreams of Forgotten Lore",
        "rules": "Activated by sleeping while wearing the keychain. Triggers visions that provide clues about lost ink-based lore and forgotten secrets. Ends upon waking."
      }
    ],
    "levelRequirementReason": "Beginners can appreciate its utility in navigating ancient maps and discovering hidden knowledge.",
    "vendorReason": "Inkopolis specializes in ink-based artifacts, making this keychain a natural addition to their offerings.",
    "shippingDetail": "Delivered via Koopa's fast courier pigeons; special handling required for fragile relics.",
    "usage": {
      "activation": "Use",
      "duration": "Instantaneous when used, ends after the effect is triggered or upon removal from an ink-based map during portal discovery. Dreams end with waking.",
      "endsWhen": "Removal from contact with an ink-based map or upon waking from sleep.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a lower price to reflect its utility and the risk of not always discovering hidden portals.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-22T07:14:58.622510+00:00",
    "aiReviewedAt": "2026-07-22T07:14:58.622510+00:00",
    "aiReviewVersion": 1
  },
  "inkopolis_sarasaland_cloak_of_diplomacy": {
    "id": "inkopolis_sarasaland_cloak_of_diplomacy",
    "name": "Cloak of Diplomacy",
    "description": "The Cloak of Diplomacy is a finely tailored garment, its fabric a shimmering blend of silk and ink, reflecting the vibrant colors of Inkopolis. Worn in public, it subtly shifts social dynamics, amplifying charm and tempering aggression. Within Princess Daisy's territory, its wearer gains an additional +1 bonus to their Charisma (Persuasion) checks, enhancing their diplomatic prowess further. This enchantment ensures that even the most contentious negotiations become a little less tense.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌿",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Enhances Diplomatic Persuasion",
      "Tempered Aggression"
    ],
    "vendor": "inkopolis",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Enhanced Charisma (Persuasion) in Daisy's Territory",
        "rules": "While within Princess Daisy’s territory, the wearer gains a +1 bonus to their Charisma (Persuasion) checks. This effect is passive and does not require any action."
      },
      {
        "title": "Tempered Aggression in Public",
        "rules": "When worn in public, the Cloak of Diplomacy reduces enemy aggression by 50% during conversation or interaction for a duration of 1 minute per use. This effect requires an action to activate and has no save DC."
      }
    ],
    "levelRequirementReason": "This cloak is designed for those who have already demonstrated the necessary social skills and combat readiness, requiring at least 6th level to wear it effectively.",
    "vendorReason": "Inkopolis, being a hub of diplomacy and culture, naturally stocks items that enhance these qualities.",
    "shippingDetail": "Ships via Koopa Postal's express service with a two-day delivery guarantee within Inkopolis territory.",
    "usage": {
      "activation": "Action: The wearer must use an action to activate the Aggression Reduction effect.",
      "duration": "1 minute per activation, up to 3 times per long rest",
      "endsWhen": "The effect ends after its duration or when the Cloak is removed from public view",
      "charges": "Recharges on a short rest"
    },
    "priceReason": "This balanced price reflects the cloak's unique diplomatic benefits and limited utility, making it an expensive yet strategic addition to any character’s arsenal.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T07:15:15.431992+00:00",
    "aiReviewedAt": "2026-07-22T07:15:15.431992+00:00",
    "aiReviewVersion": 1
  },
  "inkopolis_scam_ink_bottle": {
    "id": "inkopolis_scam_ink_bottle",
    "name": "The Infinite Inkwell",
    "description": "The Infinite Inkwell is a decanter flask, crafted from ancient parchment and sealed with ink that shimmers like night itself. Upon uncorking it, you are greeted by an overwhelming stench of forgotten perfumes and the sight of glittery ink. This legendary artifact grants one temporary ink-based ability each use, but beware: there's a 50% chance it will curse your very essence, permanently altering your ink color to match that of your foe’s favorite hue. The bottle is infamous for its unreliable nature, often empty or filled with glitter, and it demands tribute from its bearer in the form of forgotten knowledge.",
    "price": 1000,
    "icon": "💧",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Ink-Based Abilities",
      "Cursed Ink Curse"
    ],
    "vendor": "inkopolis",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Ink-Based Abilities",
        "rules": "Activates on activation as a bonus action. Grants one temporary ink-based ability (e.g., ink breath, ink vision, ink mimicry) for 1 hour. This effect can be used once per long rest."
      },
      {
        "title": "Cursed Ink Curse",
        "rules": "There is a 50% chance that the user will become cursed. The curse permanently alters their ink color to match an enemy’s favorite hue. Save DC 15. This effect can only occur once per use."
      }
    ],
    "levelRequirementReason": "This item's unpredictable nature and powerful effects necessitate a minimum level of proficiency.",
    "vendorReason": "Inkopolis is known for its eccentricity, often selling items that blur the line between useful and absurd.",
    "shippingDetail": "The bottle arrives in a sealed wooden crate with intricate ink patterns. The delivery can take up to two weeks due to its fragile nature.",
    "usage": {
      "activation": "Activates on activation as a bonus action.",
      "duration": "1 hour per use.",
      "endsWhen": "Exhausts after one use or is destroyed if the user fails their save against the curse.",
      "charges": "Unlimited, but only usable once per long rest."
    },
    "priceReason": "This legendary artifact's unpredictable nature and powerful effects justify its high price in XP.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T07:15:33.605788+00:00",
    "aiReviewedAt": "2026-07-22T07:15:33.605788+00:00",
    "aiReviewVersion": 1
  },
  "inkopolis_squid_silk_glove": {
    "id": "inkopolis_squid_silk_glove",
    "name": "Squid Silk Glove",
    "description": "The Squid Silk Glove is a dexterous, ink-dripping glove forged from deep-sea squid silk harvested by the Inkopolis Guild. Its fingers are adorned with tiny ink reservoirs that can be sprayed in combat. When you strike an opponent with this glove, you deal +1d4 ink spray damage. The gloves also have a slight chance to temporarily blind your foes when ink splashes into their eyes; a successful Dexterity saving throw can negate the effect.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐙",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Ink Spray Damage",
      "Temporary Blindness"
    ],
    "vendor": "inkopolis",
    "shippedBy": "Paratroopa Air",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ink Spray Damage",
        "rules": "When you hit an enemy with a melee attack while wearing this glove, you deal +1d4 ink spray damage. This effect is limited to once per minute."
      },
      {
        "title": "Temporary Blindness",
        "rules": "If you successfully hit an enemy with the Squid Silk Glove and they take ink spray damage, there is a 25% chance that they are blinded for 1 round. The target can make a Dexterity saving throw to resist this effect (DC = your proficiency bonus + 3). This effect ends if the target moves or takes any action."
      }
    ],
    "levelRequirementReason": "This glove is designed for beginners in ink warfare, providing them with basic combat capabilities.",
    "vendorReason": "The Inkopolis Guild specializes in crafting items related to their unique ink-based combat and the Squid Silk Glove is a staple of their equipment line.",
    "shippingDetail": "The gloves are shipped via Paratroopa Air, known for its reliable delivery services, ensuring that your order arrives swiftly.",
    "usage": {
      "activation": "Instantaneous when you hit an enemy with a melee attack while wearing the glove.",
      "duration": "Instantaneous effect; ends immediately after use.",
      "endsWhen": "The effect ends if the target successfully saves against it or takes any action.",
      "charges": "Unlimited, as long as the glove is worn."
    },
    "priceReason": "This balanced price reflects the quality of materials used and the unique enchantments available on this glove.",
    "priceOriginal": 450,
    "priceReviewedAt": "2026-07-22T07:15:36.592326+00:00",
    "aiReviewedAt": "2026-07-22T07:15:36.592326+00:00",
    "aiReviewVersion": 1
  },
  "inkopolis_squid_silk_gloves": {
    "id": "inkopolis_squid_silk_gloves",
    "name": "Squid Silk Gloves",
    "description": "The Squid Silk Gloves shimmer with a faint bioluminescence, their delicate lacework spun from the tentacles of an Inkopolis Squid Queen. Crafted by the Guild of Seamstresses for their assassin turned traitor, these gloves offer both tactical advantage and subtle danger. When in motion through ink fog, you leave no trace, and your movements mimic those of a silent predator. Each finger is tipped with micro-gel that can shift like liquid ink itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐙",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "+1 to Dexterity checks against ink-based traps",
      "Can move silently through ink fog without leaving traces"
    ],
    "vendor": "inkopolis",
    "shippedBy": "Mages Guild Portal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Silent Passage Through Ink Fog",
        "rules": "As a bonus action, you can activate the gloves. While in an area of ink fog for up to 1 minute, your movements leave no trace and you are considered proficient with Stealth checks made there. This effect ends when you exit the fog or lose concentration (as if concentrating on a spell)."
      },
      {
        "title": "Enhanced Dexterity Against Ink Traps",
        "rules": "While wearing these gloves, you gain +1 to Dexterity saving throws and +1 to Dexterity checks made against traps that involve ink. This effect lasts until the end of your next short or long rest."
      }
    ],
    "levelRequirementReason": "Crafted by the Guild of Seamstresses, these gloves are designed for those with experience in stealth and combat.",
    "vendorReason": "The Inkopolis Guild of Seamstresses ensures that only those skilled enough to appreciate their craftsmanship can purchase these gloves.",
    "shippingDetail": "Due to the delicate nature of the silk, shipping is handled by the Mages Guild Portal for safe delivery.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 1 minute per day",
      "endsWhen": "Exiting ink fog or losing concentration",
      "charges": "Unlimited"
    },
    "priceReason": "The rarity and craftsmanship of the Squid Silk Gloves justify their high price, reflecting both the materials used and the skill required for their creation.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T07:15:23.600660+00:00",
    "aiReviewedAt": "2026-07-22T07:15:23.600660+00:00",
    "aiReviewVersion": 1
  }
};
