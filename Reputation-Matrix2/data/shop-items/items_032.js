// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_032 = {
  "mushroom_spore_bomb": {
    "id": "mushroom_spore_bomb",
    "name": "Mushroom Spore Bomb",
    "description": "The Mushroom Spore Bomb is a gnarled, leather-bound orb that bulges with toxic spores. When hurled at an enemy, it unleashes a cloud of virulent fungi that infects the battlefield, turning the ground into treacherous, mushroom-ridden terrain. The spore-laden mist poisons all creatures within range, forcing them to roll a DEX save or take half damage. After detonation, the area becomes difficult terrain, impeding movement and providing cover for fungal growth.",
    "category": "consumables",
    "price": 1700,
    "icon": "💣",
    "stock": 8,
    "rarity": "rare",
    "effects": [
      "Poisonous Cloud",
      "Difficult Terrain"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Leather Satchel Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Poisonous Cloud",
        "rules": "When activated by a thrown action within 20 feet, the Mushroom Spore Bomb releases a cloud of toxic spores that poisons all creatures in a 10-foot radius. Creatures must make a DEX save (DC 13) or take 3d6 poison damage and be poisoned for 1 minute."
      },
      {
        "title": "Difficult Terrain",
        "rules": "The area within a 20-foot radius becomes difficult terrain, persisting until the end of your next turn. This effect also provides cover, granting advantage on DEX saving throws and attacks made against creatures in this area."
      }
    ],
    "levelRequirementReason": "This explosive item is accessible to low-level characters who need a versatile tool for battlefield control.",
    "vendorReason": "The Rogue Port's Black Market caters to adventurers seeking unique and potent tools, such as the Mushroom Spore Bomb.",
    "shippingDetail": "Delivered via a Leather Satchel, with a 1-day transit time.",
    "usage": {
      "activation": "Thrown action within 20 feet",
      "duration": "Instantaneous effect; lasts until the end of your next turn for area effects",
      "endsWhen": "Used up or destroyed upon activation",
      "charges": "Unlimited, recharged on short rest"
    },
    "priceReason": "The Mushroom Spore Bomb is priced at 1000 XP due to its versatile battlefield control and the unique effects it provides.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-22T22:34:27.286406+00:00",
    "aiReviewedAt": "2026-07-22T22:34:27.286406+00:00",
    "aiReviewVersion": 1
  },
  "music_box": {
    "id": "music_box",
    "name": "Spooky Music Box",
    "description": "The Spooky Music Box exudes a chilling aura, its mahogany casing intricately carved with spectral faces and runes that seem to shift in the dim light. The moment you wind it, a haunting melody fills the air—so mournful and eerie that even the most stalwart of heroes might find their courage faltering. Toads detest it, scurrying away at its first note, but some say it attracts malevolent spirits, making it a dangerous yet bewitching trinket for those who dare to wield it.",
    "category": "curiosities",
    "price": 57,
    "icon": "🎵",
    "stock": 4,
    "rarity": "common",
    "effects": [
      "Sets a creepy mood",
      "May attract Boos"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Creepy Mood",
        "rules": "The Spooky Music Box, when activated, emits a haunting melody that imposes disadvantage on Wisdom (Perception) checks and saving throws made within 30 feet. This effect lasts for 1 minute or until the music box is turned off."
      },
      {
        "title": "Boo Attraction",
        "rules": "For every round the eerie melody plays, there's a cumulative +2 chance that one Boo appears in an unoccupied space within 30 feet of the music box. If multiple Musicians are playing, their chances stack."
      }
    ],
    "levelRequirementReason": "The Spooky Music Box is designed to be simple enough for beginners, but even experienced players might find it a bit too unsettling.",
    "vendorReason": "Shamans of the forest are known to dabble in curiosities and this eerie music box fits well with their eclectic collection of items.",
    "shippingDetail": "Shipped by a trusted courier, arriving within two days.",
    "usage": {
      "activation": "A bonus action to wind the music box.",
      "duration": "1 minute or until turned off.",
      "endsWhen": "The melody stops playing when the Music Box is turned off.",
      "charges": "Unlimited uses; it requires no material components."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its eerie yet harmless nature as a common curiosity item.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T22:34:42.551684+00:00",
    "aiReviewedAt": "2026-07-22T22:34:42.551684+00:00",
    "aiReviewVersion": 1
  },
  "mystery_box": {
    "id": "mystery_box",
    "name": "? Block",
    "description": "A hovering, glowing yellow block adorned with a whimsical question mark that pulses faintly in the air. Strike it precisely to trigger a cascade of events: you may receive anything from a common consumable to an item of rare value, all determined by fate's whimsy. The vendor, Toad Town Market, ensures these surprises are always worth the wait, as their deliveries arrive with Anti-Gravity Containers that ensure no one misses out on the mystery within.",
    "category": "curiosities",
    "price": 360,
    "icon": "❓",
    "stock": 100,
    "rarity": "uncommon",
    "effects": [
      "Single Use",
      "Random Reward"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Anti-Gravity Container",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mystery Trigger",
        "rules": "Strike this block to roll a d100. The result determines your reward, ranging from common consumables to rare items. This effect is limited to one use."
      },
      {
        "title": "Toad Town Market's Guarantee",
        "rules": "The Toad Town Market ensures that each 'Mystery Box' contains an item whose value is at least 100 XP, providing a fair trade for the excitement and anticipation it brings."
      }
    ],
    "levelRequirementReason": "This item's random nature makes it accessible to all levels, ensuring that players of any background can experience its mystery.",
    "vendorReason": "Toad Town Market is known for its whimsical and unpredictable wares, making the 'Mystery Box' a staple in their inventory.",
    "shippingDetail": "Delivered with Anti-Gravity Containers to ensure safe arrival and excitement at your doorstep.",
    "usage": {
      "activation": "Strike the block.",
      "duration": "Instantaneous upon activation, limited to one use per item.",
      "endsWhen": "The effect ends immediately after triggering a reward.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the excitement and value of the mystery it promises, ensuring players receive a fair trade.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-25T14:18:43.223567+00:00",
    "aiReviewedAt": "2026-07-25T14:18:43.223567+00:00",
    "aiReviewVersion": 1
  },
  "mystery_egg": {
    "id": "mystery_egg",
    "name": "Mystery Egg",
    "description": "The Mystery Egg is a large, intricately speckled egg that defies easy categorization. Its origin remains a mystery, but it's said to have been found in the heart of the Whispering Woods. When cracked open during breakfast, roll a d6: on a 1-3, you have a perfectly cooked omelette; on a 4-5, it’s a delightful surprise—a rare and colorful bird appears briefly before vanishing into thin air; but if you roll a 6, prepare for the worst—your cooking skills are put to the test as you face an ill-fated attempt at making a bad omelet.",
    "category": "curiosities",
    "price": 360,
    "icon": "🥚",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Egg Surprise",
      "Cooking Challenge"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Swift Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Egg Surprise",
        "rules": "When cracked open during breakfast, roll a d6. On a 1-3, gain +2 to Dexterity saving throws for the rest of the day; on a 4-5, you are granted a random bird feather as a token of good fortune."
      },
      {
        "title": "Cooking Challenge",
        "rules": "On a roll of 6, you must make an Intelligence (Investigation) check against DC 12 to determine what went wrong in your cooking. Failure results in a -1 penalty on all Dexterity-based checks for the rest of the day."
      }
    ],
    "levelRequirementReason": "Suitable for all adventurers, as it offers a fun and unpredictable experience.",
    "vendorReason": "The Valley Trading Post is known for its eclectic mix of curiosities and unique items, making the Mystery Egg an excellent addition to their stock.",
    "shippingDetail": "Ships within three days via Swift Courier; expedited delivery available at additional cost.",
    "usage": {
      "activation": "Activates when cracked open during breakfast.",
      "duration": "Instantaneous for the egg surprise effect, duration varies for the cooking challenge.",
      "endsWhen": "The effects end naturally once their duration expires or when you make a new roll.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price reflects its unique and unpredictable nature, offering both fun and challenges.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T22:34:14.970347+00:00",
    "aiReviewedAt": "2026-07-22T22:34:14.970347+00:00",
    "aiReviewVersion": 1
  },
  "mystery_mario_hat": {
    "id": "mystery_mario_hat",
    "name": "Mystery Mario Hat",
    "description": "The Mystery Mario Hat appears as a classic red cap adorned with a white mustache. Each dawn, it transforms into a hat belonging to an NPC from the Mushroom Kingdom—Luigi’s green cap, Toad’s tiny top hat, or even the Goomba King’s spiked helmet. Wearing this cap grants you temporary bonuses: your Intelligence score increases by 1 for one day, and a random ability score (other than Charisma) also gains +2 until dusk. However, it may cause NPCs to mistake you for someone else, leading to unintended interactions or complications.",
    "category": "equipment",
    "price": 360,
    "icon": "🧢",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "NPC Transformation",
      "Temporary Ability Boost"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Disguised Parcel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "NPC Transformation",
        "rules": "Each morning, the hat randomly changes into a different NPC’s hat. You have disadvantage on Dexterity (Stealth) checks while wearing Peach's tiara due to the cap's tendency to sparkle too much."
      },
      {
        "title": "Temporary Ability Boost",
        "rules": "Your Intelligence score increases by 1 for one day, and an additional random ability score (other than Charisma) gains +2 until dusk. This effect can only occur once per day."
      }
    ],
    "levelRequirementReason": "This hat is suitable for adventurers of all levels but particularly useful for those beginning their journey.",
    "vendorReason": "The Rogue Port Black Market caters to adventurers seeking unique and unpredictable items, making the Mystery Mario Hat a fitting addition.",
    "shippingDetail": "Ships with Disguised Parcel, ensuring it arrives in perfect condition without arousing suspicion.",
    "usage": {
      "activation": "Passive effect triggered by dawn transformation.",
      "duration": "Lasts until dusk on the same day of transformation.",
      "endsWhen": "Dusk; once per day only.",
      "charges": "Unlimited"
    },
    "priceReason": "The hat’s unpredictable nature and daily use limit justify its price, offering a unique challenge to adventurers.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-22T22:34:29.062189+00:00",
    "aiReviewedAt": "2026-07-22T22:34:29.062189+00:00",
    "aiReviewVersion": 1
  },
  "nanite_repair_swarm": {
    "id": "nanite_repair_swarm",
    "name": "Nanite Repair Swarm (Medical)",
    "description": "The Nanite Repair Swarm is a cloud of minuscule, bioluminescent nanites that swirl and hum with the energy of NanoMed Corp's most advanced medical research. This vial releases a field of repair that instantly regenerates wounds up to a maximum of 100 hit points per use, and it can also mend cybernetic implants or prosthetics. Each vial contains five uses, each one a fleeting moment where the nanites dance in vibrant hues before settling back into their resting state.",
    "price": 29000,
    "icon": "🤖",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Heals Wounds",
      "Mends Cybernetics"
    ],
    "vendor": "med_lab",
    "shippedBy": "NanoMed Corp Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instantaneous Healing",
        "rules": "The Nanite Repair Swarm heals up to 100 hit points when activated. This effect is instantaneous and applies only to wounds, not poisons or other conditions."
      },
      {
        "title": "Cybernetic Mending",
        "rules": "Additionally, the swarm can mend damaged cybernetic implants or prosthetics, restoring them as if they had been freshly installed by a qualified technician. This effect is also instantaneous and does not affect non-cybernetic parts of the body."
      }
    ],
    "levelRequirementReason": "This item requires only level 1 to use due to its medical nature, allowing even the most novice adventurers to benefit from swift healing.",
    "vendorReason": "Med Lab is known for its cutting-edge medical supplies and devices, making it a logical vendor for this advanced nanite technology.",
    "shippingDetail": "Ships via the NanoMed Corp Courier Service within 48 hours of purchase. Requires a signature upon delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the healing or mending is complete, and the swarm dissipates after five uses per vial.",
      "charges": "5 uses/vial"
    },
    "priceReason": "This price reflects a balanced XP cost for an item that provides immediate and potent medical assistance, making it a valuable asset in any adventuring party.",
    "priceOriginal": 430000,
    "priceReviewedAt": "2026-07-22T22:34:55.690180+00:00",
    "aiReviewedAt": "2026-07-22T22:34:55.690180+00:00",
    "aiReviewVersion": 1
  },
  "narrative_causality_gun": {
    "id": "narrative_causality_gun",
    "name": "Narrative Causality Gun",
    "description": "The Narrative Causality Gun is a weapon of narrative power, forged by The Causality Breaker from the very threads of time and fate. With its sleek barrel and glowing core, it can pierce the cause behind any effect, causing that effect to never occur. Point it at 'the Big Bang' and the universe ceases; target someone's first memory and they cease to exist. Its power is both awe-inspiring and terrifying.",
    "price": 340000,
    "icon": "🔫",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Cause and Effect Breaker",
      "Erase Existence"
    ],
    "vendor": "causal_weapons",
    "shippedBy": "Cause and Effect Express Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cause and Effect Breaker",
        "rules": "When you use the gun, target a cause of an effect. The targeted cause is erased from time, preventing its intended effect (e.g., if 'the Big Bang' is targeted, the universe ends). This has no save DC but targets must succeed on a DC 20 Wisdom saving throw or be affected by the item's next use. You can only use this ability once per long rest."
      },
      {
        "title": "Erase Existence",
        "rules": "Target an event that defines someone's existence, such as their first memory or birth. The target ceases to exist after the next sunrise. This effect has no save DC and is a one-time use only."
      }
    ],
    "levelRequirementReason": "Even for gods, tampering with the very fabric of narrative can be dangerous; this item requires a level to prevent misuse.",
    "vendorReason": "Causal Weapons is known for selling items that bend reality and time, making it the perfect vendor for such a powerful artifact.",
    "shippingDetail": "Ships via Cause and Effect Express Courier, which ensures timely delivery of this fragile item. Delivery can only occur during narrative breaks to prevent unwanted side effects.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect occurs or the target saves successfully",
      "charges": "One use per long rest"
    },
    "priceReason": "This item is priced at 1000 XP, reflecting its immense power and the risk of misuse.",
    "priceOriginal": 98000000,
    "priceReviewedAt": "2026-07-22T22:34:59.077981+00:00",
    "aiReviewedAt": "2026-07-22T22:34:59.077981+00:00",
    "aiReviewVersion": 1
  },
  "narrative_collapser_bomb": {
    "id": "narrative_collapser_bomb",
    "name": "Narrative Collapser Bomb",
    "description": "This small, glowing orb of narrative energy hums with a power that can reshape reality itself. When activated, it collapses all ongoing storylines into one final climactic confrontation, forcing characters to confront every plot thread they've encountered thus far in the campaign. The bomb instantly grants all experience points from resolved story arcs and quests, allowing players to feel as though they’ve conquered an entire saga with a single action.",
    "category": "consumables",
    "price": 29000,
    "icon": "💣",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Converges all ongoing plots into one final confrontation",
      "Instantly grants XP for completed plotlines"
    ],
    "vendor": "campaign_control",
    "shippedBy": "Climax Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Final Confrontation",
        "rules": "Activating the Narrative Collapser Bomb ends all current story arcs and quests, forcing characters to confront every unresolved plot thread in a single climactic encounter. This effect is instantaneous and cannot be avoided or negated."
      },
      {
        "title": "Instant XP Grant",
        "rules": "Upon activation, the bomb bestows upon the user all unclaimed experience points from completed story arcs and quests as though they had defeated every major boss in a single day."
      }
    ],
    "levelRequirementReason": "Even for lower-level parties, this item can offer a grand finale to their adventures.",
    "vendorReason": "Only the Story Collapser would dare create such a powerful and potentially game-altering device.",
    "shippingDetail": "The Narrative Collapser Bomb is delivered with utmost haste, but only after the courier confirms that all story arcs are in place.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Once used, it collapses into a harmless, glowing fragment of narrative energy.",
      "charges": "Unlimited"
    },
    "priceReason": "The bomb’s rarity and the unique experience it provides make it a valuable but not overpowered item.",
    "priceOriginal": 38000000,
    "priceReviewedAt": "2026-07-22T22:35:21.074757+00:00",
    "aiReviewedAt": "2026-07-22T22:35:21.074757+00:00",
    "aiReviewVersion": 1
  },
  "narrative_velocity_accelerator": {
    "id": "narrative_velocity_accelerator",
    "name": "Narrative Velocity Accelerator",
    "description": "The Narrative Velocity Accelerator is a sleek, metallic device with a glowing red button. Crafted by The Editor, it allows you to fast-forward through tedious sequences of travel or downtime, skipping over any boring parts of the story without missing out on important plot points. Simply press the button and narrate a summary of what was skipped; you gain all XP, loot, and story benefits from the time saved.",
    "category": "services",
    "price": 29000,
    "icon": "⏩",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Skip Travel and Downtime",
      "Gain XP and Loot"
    ],
    "vendor": "story_services",
    "shippedBy": "Express Courier of the Editor",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Skip Travel and Downtime",
        "rules": "Activates as a bonus action. Instantaneous effect. You can skip any amount of travel or downtime, narrating a summary to the DM. Gain all XP, loot, and story benefits from this skipped content. This effect has no save DC but is limited to once per day."
      },
      {
        "title": "Gain XP and Loot",
        "rules": "Instantaneous gain. The device provides you with the experience points and rewards for any events or encounters that would have occurred during the skipped time. No save required, but it can only be used after a long rest."
      }
    ],
    "levelRequirementReason": "Requires at least level 1 to use basic plot progression tools.",
    "vendorReason": "The Editor's own shop offers this tool for quick and efficient storytelling adjustments.",
    "shippingDetail": "Delivered instantly upon purchase; immediate effect.",
    "usage": {
      "activation": "Bonus action to activate, once per day.",
      "duration": "Instantaneous, ends when used.",
      "endsWhen": "Used or after a long rest.",
      "charges": "Unlimited daily uses"
    },
    "priceReason": "Balanced at 1000 XP to provide a quick but not game-breaking tool for plot progression.",
    "priceOriginal": 45000000,
    "priceReviewedAt": "2026-07-22T22:35:09.279716+00:00",
    "aiReviewedAt": "2026-07-22T22:35:09.279716+00:00",
    "aiReviewVersion": 1
  },
  "navigator_of_tabs": {
    "id": "navigator_of_tabs",
    "name": "Navigator of Tabs",
    "description": "The Navigator of Tabs is a brass sextant encrusted with intricate silver tabs, each etched with a memory of a place visited. Crafted by celestial artisans from the stars themselves, it holds five destinations, each one a fleeting fragment of memory. When opened, the tab transports you instantaneously to that location, leaving behind a temporary fog in your mind. Each use erases a cherished memory, a price paid for the convenience of instant travel.",
    "category": "equipment",
    "price": 30000,
    "icon": "🧭",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Instant Teleport",
      "Memory Erasure"
    ],
    "vendor": "celestial_exchange",
    "shippedBy": "Lockbox",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Teleport to a Visited Location",
        "rules": "When you open one of the tabs, you teleport instantly to any location you've visited before. This action requires your reaction and ends when you arrive at your destination. You can only use this effect once per long rest."
      },
      {
        "title": "Temporary Amnesia",
        "rules": "Opening a tab causes temporary amnesia, erasing one cherished memory from your mind for 24 hours. This effect has no save DC and cannot be resisted. You regain the lost memory after completing a short or long rest."
      }
    ],
    "levelRequirementReason": "The Navigator of Tabs requires basic magical knowledge to operate, which is accessible at level 1.",
    "vendorReason": "As celestial beings themselves crafted the Navigator of Tabs, it only makes sense that they would sell this unique artifact.",
    "shippingDetail": "The Navigator of Tabs is carefully packed in a specially designed lockbox to ensure safe delivery and prevent any accidental use during transit.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous",
      "endsWhen": "You arrive at your destination or the memory erasure effect ends",
      "charges": "Once per long rest"
    },
    "priceReason": "The Navigator of Tabs is a unique and powerful tool, balancing its rarity with a manageable price to ensure it remains accessible for players.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-22T22:35:24.991079+00:00",
    "aiReviewedAt": "2026-07-22T22:35:24.991079+00:00",
    "aiReviewVersion": 1
  },
  "necklace_of_the_silent_song": {
    "id": "necklace_of_the_silent_song",
    "name": "Necklace of the Silent Song",
    "description": "The Necklace of the Silent Song is a delicate silver chain adorned with an obsidian pendant that glows faintly in the dark. It whispers to those who have crossed over, drawing nearby spirits closer so they may share their final secrets. The pendant's song can be heard by the dead even when not worn, and once per week, it allows its wearer to communicate directly with a single deceased being from beyond the veil.",
    "category": "curiosities",
    "price": 1700,
    "icon": "📿",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Soul Whisperer",
      "Speak With the Dead"
    ],
    "vendor": "temple_eternal",
    "shippedBy": "Bone Chain Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Soul Whisperer",
        "rules": "While wearing this necklace, you draw nearby spirits within 30 feet towards you. These spirits are compelled to whisper their final secrets to you as long as they remain in range."
      },
      {
        "title": "Speak With the Dead",
        "rules": "Once per week, you can use an action to activate the pendant and attempt to communicate with a single deceased being within 30 feet. The spirit must be willing to converse; otherwise, it ignores your request. This effect has no save DC."
      }
    ],
    "levelRequirementReason": "The necklace's passive effects are subtle but powerful, making level 1 sufficient for a character to benefit from its abilities.",
    "vendorReason": "The Temple Eternal offers this item as part of their offerings to those seeking guidance or closure from the spirit world.",
    "shippingDetail": "Ships by Bone Chain Couriers, known for their swift and respectful delivery of sensitive items.",
    "usage": {
      "activation": "Use an action to activate the Speak With the Dead effect.",
      "duration": "Instantaneous; lasts until used or interrupted.",
      "endsWhen": "The necklace is removed from your neck.",
      "charges": "Unlimited, but can only be used once per week."
    },
    "priceReason": "The price reflects the item's rarity and its limited weekly usage, making it accessible yet valuable to adventurers seeking spiritual knowledge.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-22T22:35:44.765734+00:00",
    "aiReviewedAt": "2026-07-22T22:35:44.765734+00:00",
    "aiReviewVersion": 1
  },
  "necromantic_phylactery_upgrade": {
    "id": "necromantic_phylactery_upgrade",
    "name": "Necromantic Phylactery Upgrade (Lich Enhancement)",
    "description": "The Necromantic Phylactery Upgrade, crafted by the Undying Council, is a dark amulet that enshrines the essence of a lich's soul and extends their dominion over the undead. This legendary relic reduces resurrection time to just one day, ensuring swift reanimation. Its second effect adds soul-binding to 10 additional minions, allowing a lich to control more spectral servants with ease. Crafted from dark obsidian and enrobed in ancient spells, this amulet is both a weapon and a symbol of ultimate power.",
    "price": 30000,
    "icon": "💎",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Reduced Resurrection Time",
      "Increased Minion Control"
    ],
    "vendor": "bone_vault",
    "shippedBy": "Spectral Haunt",
    "levelRequirement": 19,
    "effectDetails": [
      {
        "title": "Reduced Resurrection Time",
        "rules": "When the phylactery is destroyed, the lich can be resurrected after only one day instead of a week. This effect lasts until the lich is successfully defeated in combat."
      },
      {
        "title": "Increased Minion Control",
        "rules": "The lich gains soul-binding control over 10 additional undead minions for the duration of their next long rest. Each minion must be within 2 miles and can be controlled for up to one hour at a time, with no more than three hours total in any given day."
      }
    ],
    "levelRequirementReason": "Only those of lich-level power or greater can harness the dark magic necessary to wield such an artifact.",
    "vendorReason": "The Bone Vault, a repository for forbidden relics, holds this item as one of its most coveted and dangerous wares.",
    "shippingDetail": "Delivered by spectral messengers, the shipment is delayed by 24 hours due to the inherent risks involved in transporting such dark magic.",
    "usage": {
      "activation": "Instantaneous activation upon destruction of the phylactery.",
      "duration": "One day for resurrection time reduction; 10 additional minions are under control for up to one hour during a long rest.",
      "endsWhen": "The effect ends when the lich is defeated in combat or the soul-binding duration expires.",
      "charges": "Unlimited, recharged upon successful completion of a long rest."
    },
    "priceReason": "Crafted from rare obsidian and ancient spells, this upgrade's price reflects its rarity and the dark magic required to create it.",
    "priceOriginal": 950000,
    "priceReviewedAt": "2026-07-23T16:40:02.451995+00:00",
    "aiReviewedAt": "2026-07-23T16:40:02.451995+00:00",
    "aiReviewVersion": 1
  },
  "necromantic_resurrection_stone": {
    "id": "necromantic_resurrection_stone",
    "name": "Necromantic Resurrection Stone (Relic)",
    "description": "The Necromantic Resurrection Stone (Relic) is a gnarled black stone embedded with ancient runes. Crafted by Grave Mages, it crackles with dark energy and can resurrect one corpse into an obedient CR 5 Undead Servant. Once used, the stone shatters into dust, leaving behind only its memory of the dead reborn. This relic is a rare find in the hands of the tomb raider, who acquired it from a sealed crypt deep within the mountains.",
    "price": 30000,
    "icon": "🪦",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Raise one corpse as an Undead Servant",
      "Stone cracks and breaks after use"
    ],
    "vendor": "tomb_raider",
    "shippedBy": "Dirt Coffin",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Raise Undead Servant",
        "rules": "Activates on command. Instantaneous effect. The resurrected Undead Servant has a CR of 5, with hit points equal to twice the target's original Hit Points. The Undead Servant remains loyal for one week before it turns hostile unless commanded otherwise by its master. Saving Throw: None."
      },
      {
        "title": "Stone Breaks",
        "rules": "The stone shatters into dust immediately after use, ending all effects and leaving no trace of the relic's existence. No save or action is required to activate this effect; it occurs automatically upon use."
      }
    ],
    "levelRequirementReason": "Requires a high level to safely handle such dangerous necromantic energy.",
    "vendorReason": "The tomb raider specializes in acquiring and selling ancient relics, including this powerful necromantic artifact.",
    "shippingDetail": "Carefully packed with protective enchantments to prevent accidental activation during transit.",
    "usage": {
      "activation": "Command word spoken aloud",
      "duration": "Instantaneous",
      "endsWhen": "Stone breaks and Undead Servant turns hostile if not commanded otherwise by its master",
      "charges": "One use per year"
    },
    "priceReason": "The stone's rarity, ancient crafting, and the risk of misuse justify this price.",
    "priceOriginal": 840000,
    "priceReviewedAt": "2026-07-22T22:35:36.617785+00:00",
    "aiReviewedAt": "2026-07-22T22:35:36.617785+00:00",
    "aiReviewVersion": 1
  },
  "necropolis_building_permit": {
    "id": "necropolis_building_permit",
    "name": "Necropolis Building Permit (City of Judgment)",
    "description": "The Necropolis Building Permit, a decrepit yet official license issued by Kelemvor's Bureaucrats, grants you the right to construct a ziggurat within the Shadowfell. This permit ensures your undead workers are legally protected under Shadowfell property laws, allowing them to toil day and night without fear of eviction or interference from living authorities. The permit itself is embossed with arcane symbols that glow faintly in moonlight, a testament to its godly origin.",
    "price": 340000,
    "icon": "🏛️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Undead Workers",
      "Shadowfell Protection"
    ],
    "vendor": "dead_registry",
    "shippedBy": "Ghostly Procession",
    "levelRequirement": 18,
    "factionBonus": {
      "undeath": 120
    },
    "effectDetails": [
      {
        "title": "Undead Workers",
        "rules": "This permit allows you to command 100 undead workers per day within the Necropolis it establishes. These workers are bound by the laws of undeath and can be summoned at will, but they must rest every 24 hours."
      },
      {
        "title": "Shadowfell Protection",
        "rules": "The permit provides legal immunity for the Necropolis you construct within the Shadowfell. No living authority or force can interfere with your operations without facing severe consequences under the laws of undeath and shadow."
      }
    ],
    "levelRequirementReason": "Constructing a Necropolis is an immensely complex task that requires a high level character to manage the undead workforce and navigate the legal complexities of the Shadowfell.",
    "vendorReason": "The Dead Registry, a bureaucratic arm of Kelemvor's domain, issues permits for all necromantic structures within the Shadowfell, ensuring they comply with the laws of undeath.",
    "shippingDetail": "The permit is delivered by a procession of spectral guards who escort it personally to its recipient, ensuring no unauthorized eyes see its contents until it reaches you.",
    "usage": {
      "activation": "Instantaneous action upon acquiring the permit; undead workers are summoned at will within the Necropolis.",
      "duration": "Permanent",
      "endsWhen": "The construction of the Necropolis is completed or the permit is destroyed.",
      "charges": "Unlimited, but requires a daily command to maintain."
    },
    "priceReason": "While not an item of combat prowess, this permit represents a significant investment in time and resources for constructing a Necropolis within the Shadowfell's legal framework.",
    "priceOriginal": 925000,
    "priceReviewedAt": "2026-07-23T16:40:02.551812+00:00",
    "aiReviewedAt": "2026-07-23T16:40:02.551812+00:00",
    "aiReviewVersion": 1
  },
  "need_gold_now_wario_s": {
    "id": "need_gold_now_wario_s",
    "name": "Wario's Quick Cash Loan Contract",
    "description": "Wario's Quick Cash Loan Contract is a tattered agreement made from old Wario Land brochures. For 500 gp, you receive immediate access to 1000 gp but must repay 1500 gp within seven days. If you default, the contract ensures that Wario takes one random piece of your equipment, leaving behind a receipt. While in debt, you suffer disadvantage on Charisma checks with merchants, as word spreads quickly about your financial misfortune.",
    "category": "services",
    "price": 57,
    "icon": "📃",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Instant Access to Funds",
      "Repayment Penalty"
    ],
    "vendor": "wario_land",
    "shippedBy": "Contractual Obligation Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Access to Funds",
        "rules": "This effect provides immediate access to 1000 gp upon activation. The loan must be repaid within seven days, or else the contract is enforced."
      },
      {
        "title": "Repayment Penalty",
        "rules": "If you default on repayment, Wario's Contractual Obligation enforces the removal of one random piece of equipment as collateral. Additionally, while in debt, you have disadvantage on Charisma checks with merchants due to your reputation."
      }
    ],
    "levelRequirementReason": "The loan requires no specific level as it is a straightforward financial service.",
    "vendorReason": "Wario Land Financial Services (LLC, Ltd., Inc., Co.) specializes in such services and offers contracts that are binding across multiple dimensions.",
    "shippingDetail": "Delivered via the Contractual Obligation Courier Service, a process that ensures the contract is legally enforced upon arrival.",
    "usage": {
      "activation": "Activation occurs by signing and accepting the terms of the Wario's Quick Cash Loan Contract.",
      "duration": "The loan lasts for seven days from the date of acceptance.",
      "endsWhen": "Repayment or default triggers the end condition.",
      "charges": "Unlimited uses until repayment."
    },
    "priceReason": "The price is set at 500 gp to reflect a fair-value adjustment for immediate access and the risk of potential loss.",
    "priceOriginal": 500,
    "priceReviewedAt": "2026-07-22T22:35:51.234639+00:00",
    "aiReviewedAt": "2026-07-22T22:35:51.234639+00:00",
    "aiReviewVersion": 1
  },
  "neon_glove": {
    "id": "neon_glove",
    "name": "Neon Glove",
    "description": "The Neon Glove is a glowing latex glove that pulses with vibrant neon hues, casting streaks of color in the air as you move your hands. Crafted from bioluminescent fibers woven by the Glowing Weavers of Lumina, it leaves behind shimmering trails when you gesture. The glove requires nightly charging to maintain its radiant glow, and only those attuned to the art of light can truly wield this magical accessory.",
    "category": "equipment",
    "price": 1700,
    "icon": "🧤",
    "stock": 6,
    "rarity": "rare",
    "effects": [
      "Radiant Attacks",
      "Glowing Gestures"
    ],
    "vendor": "neon_vendor",
    "shippedBy": "Glow Box Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Radiant Attacks",
        "rules": "While the Neon Glove is glowing, any melee attack made with a weapon in your hand deals an additional +1d6 radiant damage. This effect lasts as long as you are wielding the glove and it remains charged."
      },
      {
        "title": "Glowing Gestures",
        "rules": "Once per short rest, you can use a bonus action to draw glowing symbols in the air, creating a Light spell with a duration of 1 minute. This ability requires that your Neon Glove be fully charged and glowing."
      }
    ],
    "levelRequirementReason": "The Neon Glove's magical properties are best suited for novice light users who are just beginning to harness their powers.",
    "vendorReason": "Neon Vendor specializes in rare and glowing items, making the Neon Glove a perfect addition to her inventory.",
    "shippingDetail": "The Neon Glove is shipped via Glow Box Express with expedited delivery, ensuring it arrives fully charged and ready for use.",
    "usage": {
      "activation": "Bonus action (Glowing Gestures), Instantaneous (Radiant Attacks)",
      "duration": "Instantaneous (Radiant Attacks), 1 minute (Glowing Gestures)",
      "endsWhen": "The Light spell ends when the duration expires or you are no longer touching a glowing surface.",
      "charges": "Unlimited, but requires nightly charging"
    },
    "priceReason": "The Neon Glove's balanced price reflects its utility in combat and utility spells while keeping it accessible for players of all levels.",
    "priceOriginal": 16000,
    "priceReviewedAt": "2026-07-22T22:36:25.308412+00:00",
    "aiReviewedAt": "2026-07-22T22:36:25.308412+00:00",
    "aiReviewVersion": 1
  },
  "nightmare_exorcism": {
    "id": "nightmare_exorcism",
    "name": "Nightmare Exorcism Service",
    "description": "Nightmare Exorcism Service is a ritual performed within the confines of the wizard's tower at Dream Sanctuary. This arcane service purges recurring nightmares and psychic corruption, restoring your mind to peace. Afterward, you gain +1 hit point per level during long rests for seven days, ensuring restful slumber. The exorcism requires you to sleep within the sacred grounds of the tower, where ancient wards protect you from further malevolent intrusions.",
    "category": "services",
    "price": 1700,
    "icon": "😴",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "Remove recurring nightmares/madness effects",
      "Sleep becomes restful; gain +1 HP per level during long rests for 7 days"
    ],
    "vendor": "dream_sanctuary",
    "shippedBy": "Appointment Only",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Nightmare Purge",
        "rules": "As a bonus action, you can invoke the service. This expends one use of the item and requires you to sleep within the wizard's tower. You gain temporary immunity to nightmares and psychic corruption for 24 hours."
      },
      {
        "title": "Restful Sleep Boost",
        "rules": "For seven days following the exorcism, you gain +1 hit point per level during long rests. This effect does not stack with other sources of hit point restoration."
      }
    ],
    "levelRequirementReason": "The service is accessible to all adventurers who wish to cleanse their minds.",
    "vendorReason": "Dream Sanctuary specializes in mental health and supernatural disturbances, offering this crucial service to its patrons.",
    "shippingDetail": "You must travel to Dream Sanctuary for the ritual; appointments are limited to ensure a tranquil environment.",
    "usage": {
      "activation": "Bonus action within the wizard's tower",
      "duration": "24 hours of immunity, lasting 7 days of restful sleep boost",
      "endsWhen": "The effect ends naturally after the specified duration or if you leave the tower grounds without completing the ritual.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This service is priced at a fair rate considering its complex magical components and the sacred environment required for the ritual.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T22:36:05.148625+00:00",
    "aiReviewedAt": "2026-07-22T22:36:05.148625+00:00",
    "aiReviewVersion": 1
  },
  "north_american_eagle_berry_pemmican_recipe": {
    "id": "north_american_eagle_berry_pemmican_recipe",
    "name": "Recipe: North American Eagle Berry Pemmican",
    "description": "Crafted from the heart of a North American eagle and berries plucked from sacred groves, this pemmican recipe is a testament to ancient tribal knowledge and survival prowess. Its dry and mix process yields a bar that not only enhances your perception in wild settings but also grants you a heightened sense of direction for 4 hours after consumption. Tribesmen swear by it during vision quests, claiming it opens the door to eagle-like clarity and intuition.",
    "price": 360,
    "icon": "🥩",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Vision Quest Boost",
      "Eagle Eye Perception"
    ],
    "vendor": "north_american_tribe",
    "shippedBy": "Quest Quaff Quill",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vision Quest Boost",
        "rules": "When you consume a bar made from this recipe, you gain advantage on Wisdom (Perception) checks for 4 hours. This effect lasts until it is used again or you finish a short rest."
      },
      {
        "title": "Eagle Eye Perception",
        "rules": "For the duration of its effect, your passive Perception score is increased by +2 as if you had taken a long rest. This effect does not stack with other sources of passive Perception bonuses."
      }
    ],
    "levelRequirementReason": "This recipe is accessible to characters at any level, making it a versatile tool for beginners and seasoned adventurers alike.",
    "vendorReason": "The North American Tribe has been perfecting this pemmican for generations, ensuring its authenticity and efficacy in the field.",
    "shippingDetail": "Ships within 3 days with a special courier who ensures the pemmican is kept dry during transit to maintain its potency.",
    "usage": {
      "activation": "Eat the bar made from this recipe as an action.",
      "duration": "4 hours, until used again or after a short rest.",
      "endsWhen": "After using it in battle, finishing a long rest, or consuming another pemmican bar.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The recipe's rarity and the time-consuming process of crafting it justify its moderate price point.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T22:36:45.659060+00:00",
    "aiReviewedAt": "2026-07-22T22:36:45.659060+00:00",
    "aiReviewVersion": 1
  },
  "north_american_eagle_feather_poncho": {
    "id": "north_american_eagle_feather_poncho",
    "name": "North American Eagle Feather Poncho",
    "description": "The North American Eagle Feather Poncho is a windswept garment that whispers tales of the skies in its feathers. Woven from the finest buffalo hide, it is adorned with eagle feathers that shimmer and ruffle like storm clouds during tempests. This poncho grants you advantage on Wisdom (Perception) checks made while observing from elevated vantage points, as if the heavens themselves guide your vision. The poncho also offers minor wind resistance, allowing you to move freely even in gusty conditions without fear of being blown off course.",
    "category": "equipment",
    "price": 1700,
    "icon": "🧥",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Perception Checks",
      "Minor Wind Resistance"
    ],
    "vendor": "north_american_tribe",
    "shippedBy": "Feather Fringe",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Wisdom (Perception) Checks from Elevated Positions",
        "rules": "When you make a Wisdom (Perception) check while observing from an elevated vantage point, such as atop a cliff or in the branches of a tall tree, you gain advantage. This effect does not stack with other sources of advantage."
      },
      {
        "title": "Minor Wind Resistance",
        "rules": "While wearing this poncho, you have advantage on Strength (Athletics) checks to resist being pushed away by wind or strong currents. The effects last until the start of your next turn after a gusty wind or storm."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners who wish to enhance their perception and stability in challenging weather conditions.",
    "vendorReason": "The North American Tribe has long revered the eagle as a symbol of strength and vision, and they craft this poncho with traditional methods passed down through generations.",
    "shippingDetail": "Shipped by the Feather Fringe with expedited delivery ensuring your poncho arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect, no activation required.",
      "duration": "Instantaneous; lasts until the start of your next turn after encountering gusty winds or a storm.",
      "endsWhen": "The effects end when you remove the poncho or upon entering an indoor environment with stable conditions.",
      "charges": "Unlimited; the poncho regains its full abilities after a long rest."
    },
    "priceReason": "This price reflects the item's rarity, craftsmanship, and the unique benefits it provides without overpowered mechanics.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T22:37:18.772832+00:00",
    "aiReviewedAt": "2026-07-22T22:37:18.772832+00:00",
    "aiReviewVersion": 1
  },
  "north_american_eagle_feather_talisman_service": {
    "id": "north_american_eagle_feather_talisman_service",
    "name": "North American Eagle Feather Talisman Service",
    "description": "The North American Eagle Feather Talisman Service is a sacred talisman crafted by Tribal Shamans, woven from the feathers of an ancient, mythical eagle said to have guided Native Americans in their vision quests. This feather glides effortlessly through the air and can provide its bearer with a fleeting taste of the sky. The talisman's power is tied to the seasons, shedding its feathers as nature cycles, ensuring it remains attuned to the land's rhythms.",
    "price": 360,
    "icon": "🪶",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Talisman: Advantage on Perception Checks for 8 hours",
      "Glide Flight 10 feet once per day"
    ],
    "vendor": "north_american_tribe",
    "shippedBy": "Feather Bind",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Talisman: Advantage on Perception",
        "rules": "When activated, the talisman grants its wearer advantage on Perception checks for 8 hours. This effect can be used once per long rest."
      },
      {
        "title": "Glide Flight",
        "rules": "The wearer can activate this ability to glide up to 10 feet through the air once per day. This effect is instantaneous and does not provoke attacks of opportunity."
      }
    ],
    "levelRequirementReason": "The talisman's power draws on deep, ancient magic that resonates with those who possess a connection to the land.",
    "vendorReason": "Tribal Shamans are custodians of this sacred item and its lore, ensuring it is passed only to those who respect and honor their traditions.",
    "shippingDetail": "The talisman is delivered by Feather Bind, known for its swift and respectful couriers, who ensure the item's spiritual integrity remains intact during transit.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous or until expended",
      "endsWhen": "At the end of each long rest, once per day",
      "charges": "1/Day"
    },
    "priceReason": "The talisman's price reflects its sacred nature and the expertise required to craft it by Tribal Shamans.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T22:36:51.860696+00:00",
    "aiReviewedAt": "2026-07-22T22:36:51.860696+00:00",
    "aiReviewVersion": 1
  },
  "north_american_eagle_grooming": {
    "id": "north_american_eagle_grooming",
    "name": "North American Eagle Grooming Service",
    "description": "Honed by the North American Aviary, this grooming service for a patriotic eagle transforms an ordinary bird into a loyal and opinionated companion. For seven days, you will have access to a scout eagle that can provide critical intelligence but is known for its strong stance on political matters. Defending your eagle’s honor becomes crucial; failing to do so results in disadvantageous checks. This service ensures the eagle remains true and vigilant during your quest.",
    "category": "services",
    "price": 360,
    "icon": "🦅",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Loyal Scout Eagle",
      "Political Opinions"
    ],
    "vendor": "north_american",
    "shippedBy": "Eagle Flight Courier Service",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Loyal Scout Eagle",
        "rules": "For a duration of seven days, you gain a scout eagle companion. This eagle provides critical intelligence and reconnaissance but is known for its strong political opinions, which can be distracting."
      },
      {
        "title": "Political Opinions",
        "rules": "If you do not defend your eagle's honor during this time, you are at disadvantage on all Charisma-based checks until the eagle's influence subsides. The eagle’s loyalty is conditional upon its respect and admiration for you."
      }
    ],
    "levelRequirementReason": "Requires basic understanding of leadership and diplomacy to manage a loyal yet opinionated companion.",
    "vendorReason": "The North American Aviary specializes in avian services, ensuring the eagle's grooming and loyalty are top-notch.",
    "shippingDetail": "The eagle is delivered within three days of purchase. The courier ensures the eagle’s comfort during transit.",
    "usage": {
      "activation": "Passive effect upon completion of grooming service.",
      "duration": "Seven days from activation.",
      "endsWhen": "The seven-day duration ends or if your eagle's honor is not defended.",
      "charges": "Unlimited, as long as the eagle remains loyal."
    },
    "priceReason": "Balanced price reflects the service’s rarity and the unique benefits of having a political-savvy scout for seven days.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-22T22:37:00.322744+00:00",
    "aiReviewedAt": "2026-07-22T22:37:00.322744+00:00",
    "aiReviewVersion": 1
  },
  "north_american_eagle_grooming_premium": {
    "id": "north_american_eagle_grooming_premium",
    "name": "North American Eagle Grooming (Premium)",
    "description": "The North American Eagle Grooming (Premium) kit is a meticulously crafted grooming set designed for the nation's most patriotic avian companions. The kit includes high-quality grooming tools that are said to have been blessed by national leaders, ensuring your eagle stays in peak condition and ready to serve. With this premium grooming set, you gain an eagle that not only scouts and delivers messages but also brings a sense of honor and loyalty unmatched by ordinary birds.",
    "category": "premium",
    "price": 360,
    "icon": "🦅",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Scout and Deliver Messages",
      "Patriotic Loyalty"
    ],
    "vendor": "north_american",
    "shippedBy": "Eagle Flight Courier Service",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Scout and Deliver Messages",
        "rules": "As an action, you can command your eagle to scout for information or deliver a message. The eagle has advantage on Charisma (Persuasion) checks when dealing with individuals who share the same nationalistic beliefs."
      },
      {
        "title": "Patriotic Loyalty",
        "rules": "Your eagle gains advantage on all Charisma checks and saving throws while you are within 1 mile of its nest. The eagle will not leave your service for a minimum of one month unless it is attacked or its nest is destroyed."
      }
    ],
    "levelRequirementReason": "This grooming kit is designed for those who have already established their place in the community and can afford to invest in their loyal companion.",
    "vendorReason": "As a leading supplier of patriotic goods, North American ensures that only the finest materials are used in crafting this premium kit.",
    "shippingDetail": "The Eagle Flight Courier Service guarantees swift delivery directly to your doorstep, ensuring your eagle is pampered without delay.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous; lasts until the next dawn",
      "endsWhen": "The eagle departs on its own volition or if you command it to rest",
      "charges": "Unlimited, but the eagle requires a one-gold piece tribute daily"
    },
    "priceReason": "This premium kit includes rare and blessed materials, ensuring your eagle's loyalty and effectiveness in service.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T22:37:12.116900+00:00",
    "aiReviewedAt": "2026-07-22T22:37:12.116900+00:00",
    "aiReviewVersion": 1
  },
  "north_american_tribal_berry_masher": {
    "id": "north_american_tribal_berry_masher",
    "name": "North American Tribal Berry Masher",
    "description": "The North American Tribal Berry Masher is a hand-carved stone utensil, its surface scored into ridges for optimal crushing of pemmican berries. Crafted by the skilled hands of Tribal Stonecarvers, this masher not only ensures berries are mashed to an ideal consistency but also grants the user advantage on checks related to crafting pemmican. Its durable construction can withstand years of use in rugged conditions, and its surface will inevitably stain with a deep red juice that marks the user’s hands.",
    "category": "equipment",
    "price": 360,
    "icon": "🥩",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Crafting Checks",
      "Durable"
    ],
    "vendor": "north_american_tribe",
    "shippedBy": "Berry Bash Bundle",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Crafting Checks",
        "rules": "When creating pemmican or similar berry-based dishes, you gain advantage on the relevant checks. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Durable",
        "rules": "This item has 2d4 uses before it breaks and requires a full day of work by a skilled artisan to repair. Once broken, you must succeed on a DC 15 Craft (stonework) check to mend it."
      }
    ],
    "levelRequirementReason": "This masher is designed for general use and does not require any level to operate.",
    "vendorReason": "The North American Tribe has a longstanding tradition of crafting such utensils, and they are proud to offer this essential tool for pemmican preparation.",
    "shippingDetail": "Ships via Berry Bash Bundle; arrives within 1 week with berry-themed packaging.",
    "usage": {
      "activation": "Passive effect when using the masher to prepare pemmican or similar dishes.",
      "duration": "Until the end of your next long rest.",
      "endsWhen": "Rests until the next long rest.",
      "charges": "2d4 uses before breaking; requires repair after use."
    },
    "priceReason": "The item is crafted with durable stone and comes from a vendor known for quality, justifying its reduced price compared to other uncommon items.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T22:37:43.625299+00:00",
    "aiReviewedAt": "2026-07-22T22:37:43.625299+00:00",
    "aiReviewVersion": 1
  },
  "oathbound_judges_gavel_premium": {
    "id": "oathbound_judges_gavel_premium",
    "name": "Oathbound Judges Gavel (Premium)",
    "description": "The Oathbound Judges Gavel, a rare artifact of truth and justice, exudes an ancient power that reverberates in the air when wielded by those who swear to uphold it. Crafted by the Oath Judges from the heartwood of sacred trees, this gavel not only forces truth upon its user but also grants them the keen insight needed to discern falsehoods. When you strike with the gavel and declare your intent, a resonant echo challenges any lies spoken within earshot, compelling a Wisdom saving throw for those who dare lie.",
    "price": 1700,
    "icon": "🔨",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Force Truth",
      "Keen Insight"
    ],
    "vendor": "oathbound_judges_court",
    "shippedBy": "Wooden Mallet",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Force Truth",
        "rules": "When you strike the gavel and declare your intent to uncover falsehoods, any creature within hearing range must make a Wisdom saving throw (DC 12) or be compelled to speak the truth regarding the last question asked."
      },
      {
        "title": "Keen Insight",
        "rules": "You gain advantage on all Insight checks made to discern whether someone is lying or telling the truth. This effect lasts until you use an action to activate it again."
      }
    ],
    "levelRequirementReason": "Requires level 7 to wield this powerful artifact responsibly.",
    "vendorReason": "Only the Oath Judges, who uphold the principles of truth and justice, are trusted with such a potent symbol.",
    "shippingDetail": "Ships via enchanted courier pigeon, arriving within an hour of order placement.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (Force Truth), until you use an action to activate it again (Keen Insight)",
      "endsWhen": "The effect ends when the gavel is destroyed or when a creature successfully saves against Force Truth.",
      "charges": "Unlimited, but only one instance of Keen Insight can be active at a time."
    },
    "priceReason": "Balanced to reflect its rarity and potent effects without overshadowing other items.",
    "priceOriginal": 21000,
    "priceReviewedAt": "2026-07-22T22:37:27.347825+00:00",
    "aiReviewedAt": "2026-07-22T22:37:27.347825+00:00",
    "aiReviewVersion": 1
  },
  "oathbound_judges_guilt_tripping_premium": {
    "id": "oathbound_judges_guilt_tripping_premium",
    "name": "Oathbound Judges Guilt Tripping (Premium)",
    "description": "The Oathbound Judges' Guilt Tripping (Premium) is a ceremonial gavel made of obsidian and bound by the oaths of honor-bound jurists. When wielded, it can strike an opponent's conscience, causing them to cringe with guilt for up to 1d4 rounds. The item itself feels heavy and cold, as if it carries the weight of countless wrongs. Its use leaves the wielder burdened by a sense of moral unease, reducing their attack rolls by -1 until sunrise.",
    "category": "premium",
    "price": 1700,
    "icon": "🎭",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Conscience Strike",
      "Moral Burden"
    ],
    "vendor": "oathbound_judges",
    "shippedBy": "Judgmental Stare Courier Service",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Conscience Strike",
        "rules": "When the wielder uses this item, it emits a resonant chime that causes an enemy with a conscience to become stunned for up to 1d4 rounds. The target must succeed on a DC 15 Wisdom saving throw or be stunned. This effect can only be used once per day."
      },
      {
        "title": "Moral Burden",
        "rules": "After using the item, the wielder feels an overwhelming sense of guilt and their attack rolls are reduced by -1 for one hour. The wielder must have a moral compass or conscience to experience this effect."
      }
    ],
    "levelRequirementReason": "The complexity of the gavel's binding requires at least third-level proficiency in Arcana or Insight.",
    "vendorReason": "Only Oathbound Judges are trusted with the delicate balance of honor and justice required to wield such a potent tool.",
    "shippingDetail": "The courier service ensures that the item is delivered swiftly, but only during daylight hours due to its sensitive nature.",
    "usage": {
      "activation": "A bonus action",
      "duration": "Instantaneous, with a duration of up to 1d4 rounds for the stunned target and one hour for the wielder's penalty",
      "endsWhen": "The stunned effect ends when the save is successful or the duration expires. The moral burden ends at the end of the wielder's next turn.",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "Balanced as a rare, premium-quality item that requires specific proficiency and is used sparingly.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-22T22:37:41.305687+00:00",
    "aiReviewedAt": "2026-07-22T22:37:41.305687+00:00",
    "aiReviewVersion": 1
  },
  "oathbound_judges_guilt_tripping_service": {
    "id": "oathbound_judges_guilt_tripping_service",
    "name": "Oathbound Judges Guilt Tripping Service",
    "description": "The Oathbound Judges Guilt Tripping Service is a whisper of judgment sent to torment your foes. With the mere invocation of this service, you can force an enemy to face their inner demons for one round, leaving them stunned and reeling from guilt. The service itself is crafted with the solemnity of the Oathbound Judges Shame Division, whose reputation precedes the service’s potency. Using it, however, weighs heavily on your own conscience; thereafter, any Charisma check you make feels as if your very soul bears the weight of this darkness.",
    "category": "services",
    "price": 360,
    "icon": "🎭",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Guilt Trip",
      "Conscience Wound"
    ],
    "vendor": "oathbound_judges",
    "shippedBy": "Judgmental Stare",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Guilt Trip",
        "rules": "Once per day, the service can be invoked to force an enemy with a conscience (DM's discretion) to make a DC 13 Wisdom saving throw. On a failed save, the target is stunned for one round."
      },
      {
        "title": "Conscience Wound",
        "rules": "Using this service imposes disadvantage on your next Charisma check. This effect persists until you successfully complete another Charisma check."
      }
    ],
    "levelRequirementReason": "Requires at least second-level proficiency to invoke the subtle and psychological power of the Oathbound Judges Guilt Tripping Service.",
    "vendorReason": "The Oathbound Judges Shame Division is known for its services that deliver swift, yet just, retribution.",
    "shippingDetail": "Delivered by a solemn courier who ensures the message of guilt arrives with gravity and precision.",
    "usage": {
      "activation": "Action to invoke the service upon an enemy.",
      "duration": "Instantaneous, lasting one round for each successful invocation.",
      "endsWhen": "The effect ends immediately if the target successfully saves against it or upon completion of the user's next turn.",
      "charges": "One use per day."
    },
    "priceReason": "Balanced at this price to reflect its subtle, yet powerful psychological impact and the solemn craftsmanship required for such a service.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T22:37:59.928612+00:00",
    "aiReviewedAt": "2026-07-22T22:37:59.928612+00:00",
    "aiReviewVersion": 1
  },
  "oathbound_judges_judge_robe": {
    "id": "oathbound_judges_judge_robe",
    "name": "Oathbound Judges Judge Robe",
    "description": "The Oathbound Judge's Robe is a heavy, formal garment made from the finest wool and adorned with intricate symbols of justice. It not only enhances your Charisma (Intimidation) in trials by +1 but also enforces oaths through subtle magical bindings that compel you to keep your word in court. The robe's weight makes it cumbersome for swift movement, yet its presence instills confidence and respect in those who behold it.",
    "price": 1700,
    "icon": "👘",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+1 Charisma (Intimidation) in trials",
      "Enforce Oath (minor binding)"
    ],
    "vendor": "oathbound_judges_court",
    "shippedBy": "Gavel Garment Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "While wearing the robe, you gain a +1 bonus to your Charisma (Intimidation) checks when presenting cases or questioning witnesses."
      },
      {
        "title": "Oath Enforcement",
        "rules": "The robe subtly binds you to uphold any oaths you take in court. If you break an oath, the robe emits a faint glow and causes you disadvantage on Charisma (Intimidation) checks until you fulfill your obligation or make reparations."
      }
    ],
    "levelRequirementReason": "Requires at least level 7 to wield the robe's binding magic responsibly.",
    "vendorReason": "As court authorities, they maintain and sell items that uphold their honor and the law.",
    "shippingDetail": "Ships via Gavel Garment Express within a week of purchase.",
    "usage": {
      "activation": "Passive effect; robe's enchantments activate as you put it on.",
      "duration": "Until removed or destroyed by external means.",
      "endsWhen": "Robe is removed, destroyed, or its magical effects are dispelled.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect the robe's subtle enchantments and its importance in maintaining courtroom integrity.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-22T22:38:26.642074+00:00",
    "aiReviewedAt": "2026-07-22T22:38:26.642074+00:00",
    "aiReviewVersion": 1
  },
  "oathbound_judges_truth_serum_soup_recipe": {
    "id": "oathbound_judges_truth_serum_soup_recipe",
    "name": "Recipe: Oathbound Judges Truth Serum Soup",
    "description": "This arcane soup, a Judges' Court specialty, simmers with the essence of truth herbs and is said to have been blessed by the Oathbound Judges themselves. Served in a delicate porcelain bowl, it whispers secrets and reveals lies with each spoonful. Only those who respect the court's justice may partake; only then does its power activate. Eat or drink, and for two hours thereafter, your words are as clear as the truth itself.",
    "price": 1700,
    "icon": "🍲",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Truth Telling",
      "Advantage on Insight"
    ],
    "vendor": "oathbound_judges_court",
    "shippedBy": "Serum Soup Summary",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Truth Telling",
        "rules": "When you eat or drink this soup, you gain advantage on Insight checks to discern whether creatures are lying. This effect lasts for two hours."
      },
      {
        "title": "Advantage on Insight",
        "rules": "For the duration of two hours after consuming the soup, you have advantage on any Insight checks made against creatures who attempt to lie or deceive you."
      }
    ],
    "levelRequirementReason": "Beginners in the art of truth and deception can benefit from this humble dish.",
    "vendorReason": "The Judges' Court is known for its integrity and adherence to truth, making their court the only place where such a soup recipe would be legitimate.",
    "shippingDetail": "Shipped within 3 days via trusted courier, guaranteed delivery with a special certificate of authenticity from the Judges' Court.",
    "usage": {
      "activation": "Consume by eating or drinking the soup.",
      "duration": "Two hours after consumption.",
      "endsWhen": "The effect ends upon expiration or if you ingest any food or drink that contains deceitful ingredients.",
      "charges": "Unlimited; each serving has a single use."
    },
    "priceReason": "Balanced at 1000 XP, this soup offers a moderate advantage in discerning truth without overshadowing other abilities or becoming overpowered.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T22:38:08.499103+00:00",
    "aiReviewedAt": "2026-07-22T22:38:08.499103+00:00",
    "aiReviewVersion": 1
  },
  "oathbound_judges_truth_tongs": {
    "id": "oathbound_judges_truth_tongs",
    "name": "Oathbound Judges Truth Tongs",
    "description": "The Oathbound Judges Truth Tongs are forged from the iron will of a judge, designed to ensure only truth is served at the table. These tongs can detect tainted food and reveal falsehoods with a mere pinch, making them indispensable in any court or kitchen. When used during meal preparation, they grant +1 bonus to Insight checks, ensuring that no lie goes unnoticed. The tongs are made by Judge Forgers and shipped with utmost care by the Truth Tongs Tote.",
    "category": "equipment",
    "price": 1700,
    "icon": "🍲",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Detect tainted food",
      "Grant +1 to Insight during meal prep"
    ],
    "vendor": "oathbound_judges_court",
    "shippedBy": "Truth Tongs Tote",
    "levelRequirement": 0,
    "effectDetails": [
      {
        "title": "Taint Detection",
        "rules": "When used on a piece of food, the tongs reveal if it is tainted or poisoned. This effect requires an action and has no save DC."
      },
      {
        "title": "Insight Boost During Prep",
        "rules": "The user gains +1 to Insight checks made during meal preparation, which lasts until the end of their next long rest."
      }
    ],
    "levelRequirementReason": "These tongs are designed for anyone who needs them, including novices.",
    "vendorReason": "The judges themselves ensure that only those who need these tools purchase them.",
    "shippingDetail": "Ships within three days via Truth Tongs Tote, ensuring the tongs arrive in pristine condition.",
    "usage": {
      "activation": "Action or bonus action",
      "duration": "Instantaneous for Taint Detection; until next long rest for Insight Boost",
      "endsWhen": "Exhausted after use and recharge after a long rest",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced price reflects the craftsmanship, rarity, and utility of these tongs.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T22:38:09.824299+00:00",
    "aiReviewedAt": "2026-07-22T22:38:09.824299+00:00",
    "aiReviewVersion": 1
  },
  "oil_for_lamps_that_grants": {
    "id": "oil_for_lamps_that_grants",
    "name": "Wario's Wish Lamp Oil",
    "description": "Wario's Wish Lamp Oil is a shimmering, golden liquid that crackles with mischief. When poured into a lamp and ignited, it releases a thick smoke that can deceive even the shrewdest of observers. This oil grants the user advantage on saving throws against breath weapons and allows them to make light checks as if they were one step better equipped. The oil is crafted by Wario himself in his underground alchemy lab, known for its unpredictable and sometimes dangerous concoctions.",
    "category": "equipment",
    "price": 58,
    "icon": "🛢️",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Smoke Illusion",
      "Advantage Against Breath Weapons"
    ],
    "vendor": "wario_land",
    "shippedBy": "Smoke Signal Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Smoke Illusion",
        "rules": "When a lamp using Wario's Wish Lamp Oil is lit, it creates a minor illusion of smoke that can be seen by creatures within 30 feet. This effect lasts until the oil runs out or the light source is extinguished."
      },
      {
        "title": "Advantage Against Breath Weapons",
        "rules": "The user gains advantage on saving throws against any breath weapon attack when using a lamp filled with this oil. This effect persists for 1 hour after each use of the oil, and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This oil is suitable for beginners to dabble in its effects without requiring extensive experience.",
    "vendorReason": "Wario's underground alchemy lab produces the only reliable source of this mischievous lamp oil.",
    "shippingDetail": "Ships via Smoke Signal Express, known for its fast and mysterious delivery methods.",
    "usage": {
      "activation": "Lighting a lamp filled with Wario's Wish Lamp Oil",
      "duration": "Until the oil is exhausted or the light source is extinguished",
      "endsWhen": "The oil runs out or the light is turned off",
      "charges": "Unlimited"
    },
    "priceReason": "This balanced price reflects the item's unique properties and the rarity of its production.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T22:38:14.753001+00:00",
    "aiReviewedAt": "2026-07-22T22:38:14.753001+00:00",
    "aiReviewVersion": 1
  },
  "old_boot": {
    "id": "old_boot",
    "name": "Old Boot",
    "description": "This old boot has seen better days. Its leather is cracked and stained with algae from its time in a pond. The sole is indeed missing, leaving only the worn-out upper that clings to your foot like a memory of bygone adventures. While it might not be the most comfortable footwear, it can still deal 1d6 bludgeoning damage when used as a club, and it grants you advantage on Charisma checks and saves while holding it.",
    "category": "equipment",
    "price": 22,
    "icon": "🥾",
    "stock": 100,
    "rarity": "junk",
    "effects": [
      "Club",
      "Charisma Advantage"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Garbage Chute",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bludgeon Attack",
        "rules": "When you attack with the Old Boot as a club, you deal 1d6 bludgeoning damage. This effect does not have a range and is used once per short or long rest."
      },
      {
        "title": "Charisma Advantage",
        "rules": "While holding the Old Boot, you gain advantage on all Charisma checks and saves. This effect lasts for the duration of one short or long rest."
      }
    ],
    "levelRequirementReason": "No level requirement as it is a simple weapon that provides utility.",
    "vendorReason": "The Rogueport Black Market often sells unique and forgotten items, including this relic of the past.",
    "shippingDetail": "Delivered via the city's notorious Garbage Chute, arriving with a splash and a story.",
    "usage": {
      "activation": "Action or bonus action to use as a club; passive Charisma advantage while holding it.",
      "duration": "Instantaneous for attacks; one short or long rest for Charisma advantage.",
      "endsWhen": "Exhausted when not used within the rest period.",
      "charges": "Unlimited"
    },
    "priceReason": "The Old Boot's unique utility and historical significance justify its high price.",
    "priceOriginal": 25,
    "priceReviewedAt": "2026-07-22T22:38:22.992939+00:00",
    "aiReviewedAt": "2026-07-22T22:38:22.992939+00:00",
    "aiReviewVersion": 1
  },
  "omnipotence_for_dummies": {
    "id": "omnipotence_for_dummies",
    "name": "Omnipotence for Dummies (Book)",
    "description": "The 'Omnipotence for Dummies (Book)' is a beginner's guide to wielding godlike power, crafted by The Idiot's Guide. This tome is bound in leather and features symbols that shimmer faintly with ancient magic. Reading it over an hour grants the reader omnipotent abilities for 24 hours—capable of anything short of contradicting fundamental laws of reality—but the book disintegrates after use. It’s a rare find, perfect for those who are eager to test their mettle but lack the experience.",
    "category": "consumables",
    "price": 30000,
    "icon": "📚",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Omnipotence for a Day",
      "Consumable Tome"
    ],
    "vendor": "divine_education",
    "shippedBy": "Swift Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Omnipotence for a Day",
        "rules": "Reading this book over an hour grants you omnipotent abilities for 24 hours. You can perform any action, bypass any obstacle, or resolve any situation as if the laws of reality bend to your will. This effect ends when the time expires or if you use it in a way that contradicts fundamental principles of existence."
      },
      {
        "title": "Consumable Tome",
        "rules": "After reading for an hour, this book disintegrates into dust. It cannot be read more than once and is considered consumed after its use."
      }
    ],
    "levelRequirementReason": "Requires minimal magical aptitude to grasp the basics of omnipotence.",
    "vendorReason": "Divine Education specializes in advanced learning materials, including rare and esoteric texts like this one.",
    "shippingDetail": "Ships within a week from stock availability.",
    "usage": {
      "activation": "Read the book for an hour.",
      "duration": "24 hours of omnipotence.",
      "endsWhen": "Time expires or fundamental principles are violated.",
      "charges": "Unlimited, once per day."
    },
    "priceReason": "Balanced at 1000 XP as it provides a one-time use of godlike power for a limited duration.",
    "priceOriginal": 25000000,
    "priceReviewedAt": "2026-07-22T22:38:25.196569+00:00",
    "aiReviewedAt": "2026-07-22T22:38:25.196569+00:00",
    "aiReviewVersion": 1
  },
  "omnipotence_permission_slip": {
    "id": "omnipotence_permission_slip",
    "name": "Omnipotence Permission Slip",
    "description": "The omnipotence permission slip, crafted by Existence Bureau from a fragment of cosmic stardust, grants you the power to bend reality itself. Signed by the very fabric of the universe, it allows you to perform any action or effect without limit, as if the universe has always known your every move and intention. This artifact is a symbol of ultimate authority, passed down through the ages by those who have earned the trust of the cosmos.",
    "category": "services",
    "price": 230000,
    "icon": "📄",
    "stock": 1,
    "rarity": "cosmic",
    "effects": [
      "Bend Reality",
      "Unlimited Authority"
    ],
    "vendor": "existence_bureau",
    "shippedBy": "Narrative Retcon Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bend Reality",
        "rules": "As an action, you can manipulate any aspect of reality within a 30-foot radius for one round. This effect is instantaneous and does not require concentration. The universe retroactively always considers your actions as valid. You cannot create effects that directly harm other creatures or violate the natural laws in a way that disrupts the balance."
      },
      {
        "title": "Unlimited Authority",
        "rules": "The slip grants you absolute authority over all aspects of existence, including time and space. You may issue commands to any creature within 100 feet as if they were bound by their own will. This effect lasts until the end of your next turn. Creatures can make a Wisdom saving throw (DC 15) to resist obeying one command per slip use."
      }
    ],
    "levelRequirementReason": "Even the smallest act of omnipotence requires a measure of resolve and understanding.",
    "vendorReason": "Existence Bureau is entrusted with the most powerful and mysterious artifacts that govern the cosmos, ensuring they are used for the greater good.",
    "shippingDetail": "The delivery is instantaneous upon payment, as the universe bends to accommodate your request.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Ends at the end of your next turn or when a creature successfully resists with a successful saving throw.",
      "charges": "Unlimited, but each use requires the expenditure of an action."
    },
    "priceReason": "The price is set to reflect its rarity and the cosmic essence from which it is made, ensuring it remains a rare and valuable commodity in the market.",
    "priceOriginal": 1000000000000,
    "priceReviewedAt": "2026-07-22T22:38:44.724015+00:00",
    "aiReviewedAt": "2026-07-22T22:38:44.724015+00:00",
    "aiReviewVersion": 1
  },
  "omnipotent_being_summoning_scroll": {
    "id": "omnipotent_being_summoning_scroll",
    "name": "Summoning Scroll: Omnipotent Being",
    "description": "The Summoning Scroll: Omnipotent Being bears a worn, ancient parchment inscribed with forgotten runes and sigils. It is said to have been crafted by a long-lost summoner who sought to command the most powerful entities of their time. This scroll promises to summon one of these beings, creatures whose power far surpasses that of mortals. However, the summoned being will owe you a favor, which can be interpreted in myriad ways—some might call it a debt, others, an opportunity. Use this scroll with caution; should you summon something hostile or beyond your control, the consequences could be dire indeed.",
    "category": "consumables",
    "price": 30000,
    "icon": "📜",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Summons an omnipotent being (DM's choice of entity)",
      "The summoned being owes you one favor"
    ],
    "vendor": "summoning_services",
    "shippedBy": "Swiftwind Express",
    "levelRequirement": 10,
    "warning": "May summon something that ends the campaign.",
    "effectDetails": [
      {
        "title": "Summoning",
        "rules": "Activates as a ritual action that requires at least 1 hour to complete. The DM selects the summoned entity, which is neutral to hostile in attitude. The summoned being will owe the caster one favor, which can be called upon once within 10 years of summoning."
      },
      {
        "title": "Favor",
        "rules": "The favor must be used before it expires or else it is lost forever. The DM will determine the nature and scope of the favor based on narrative need."
      }
    ],
    "levelRequirementReason": "Summoning an omnipotent being requires significant magical knowledge and power, which is why only a high-level spellcaster should attempt this.",
    "vendorReason": "Only the most trusted summoners at Summoning Services have the skill and knowledge to handle such dangerous and powerful artifacts.",
    "shippingDetail": "The scroll is delivered within a week, but summoning the being requires immediate attention.",
    "usage": {
      "activation": "Requires a ritual action that takes at least 1 hour to complete. The caster must have the necessary components and focus.",
      "duration": "Instantaneous upon completion of the ritual",
      "endsWhen": "The summoned being is dismissed or leaves on its own accord, or the favor is used",
      "charges": "Unlimited"
    },
    "priceReason": "This scroll represents a significant investment in time and resources to craft, as well as the risk involved with summoning such entities.",
    "priceOriginal": 45000000,
    "priceReviewedAt": "2026-07-22T22:38:54.737755+00:00",
    "aiReviewedAt": "2026-07-22T22:38:54.737755+00:00",
    "aiReviewVersion": 1
  },
  "omnipresent_reality_core": {
    "id": "omnipresent_reality_core",
    "name": "Omnipresent Reality Core",
    "description": "The Omniscient Reality Core, a shimmering crystal sphere, allows you to observe all events simultaneously across any plane of existence. Its origin lies in the hands of The Observer Beyond, whose knowledge is boundless and ancient. With this core, you can witness every action and event, from the first moments of creation to the last breaths of time's end, ensuring no secret or event remains hidden from your sight.",
    "category": "services",
    "price": 270000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "cosmic",
    "effects": [
      "Witness All Events Simultaneously",
      "Retroactive Action Change"
    ],
    "vendor": "meta_existence",
    "shippedBy": "Quantum Entanglement",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Witness All Events Simultaneously",
        "rules": "As a bonus action, you gain the ability to observe all events across any plane of existence. This effect is instantaneous and lasts until your next short or long rest. You can use this feature once per short or long rest."
      },
      {
        "title": "Retroactive Action Change",
        "rules": "You can take a standard action to change an action you performed in the last 24 hours, without provoking attacks of opportunity. This effect is instantaneous and has no save DC. You may use this feature once per day."
      }
    ],
    "levelRequirementReason": "This core's power requires a fundamental understanding of existence to wield effectively.",
    "vendorReason": "The Observer Beyond entrusts the sale of such an item only to those who can appreciate its cosmic significance.",
    "shippingDetail": "Ships via quantum entanglement, arriving instantly anywhere in any plane.",
    "usage": {
      "activation": "Bonus action or standard action (for retroactive change)",
      "duration": "Instantaneous; lasts until next short or long rest for observation effect; once per day for retroactive change",
      "endsWhen": "Rests end the observation effect; daily limit resets after a short or long rest",
      "charges": "Unlimited, but limited by daily and rest-based usage"
    },
    "priceReason": "Balanced at 1000 XP to reflect its cosmic rarity and profound utility.",
    "priceOriginal": 150000000000,
    "priceReviewedAt": "2026-07-22T22:39:27.409174+00:00",
    "aiReviewedAt": "2026-07-22T22:39:27.409174+00:00",
    "aiReviewVersion": 1
  },
  "omniscient_wisdom_orb": {
    "id": "omniscient_wisdom_orb",
    "name": "Omniscient Wisdom Orb",
    "description": "The Omniscient Wisdom Orb is a glowing glass sphere, its surface etched with ancient runes. Crafted by The All-Knowing, it allows the wielder to instantly access all knowledge and foresight. It grants insight into any language or secret, and ensures that no deception can be imposed upon you. This artifact's power comes at a great cost, as only those who have proven their worth through profound wisdom are deemed worthy of its touch.",
    "category": "consumables",
    "price": 340000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Know All",
      "Cannot Deceive"
    ],
    "vendor": "infinite_library",
    "shippedBy": "Swift Thought Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Know All",
        "rules": "The wielder gains the ability to understand all languages, see all possible futures, and recall any information. This effect is passive and does not require activation."
      },
      {
        "title": "Cannot Deceive",
        "rules": "No creature can use deception or lies against you while within range. The effect lasts until the orb's charges are exhausted. Saves against this effect have a DC of 20."
      }
    ],
    "levelRequirementReason": "Even the most basic scholar must prove their worthiness to wield such an ancient and powerful artifact.",
    "vendorReason": "The Infinite Library is known for its vast collection of knowledge, making it the only place worthy of housing such a profound artifact.",
    "shippingDetail": "The courier ensures immediate delivery, but the recipient must still verify their wisdom and worthiness to possess the orb.",
    "usage": {
      "activation": "Passive effect; no activation needed.",
      "duration": "Until charges are exhausted or the artifact is destroyed.",
      "endsWhen": "Charges are depleted or if the wielder's knowledge becomes corrupted, destroying the artifact.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the artifact's profound value in imparting knowledge and protection against deception.",
    "priceOriginal": 45000000,
    "priceReviewedAt": "2026-07-22T22:38:40.813322+00:00",
    "aiReviewedAt": "2026-07-22T22:38:40.813322+00:00",
    "aiReviewVersion": 1
  },
  "omniversal_conqueror_armor": {
    "id": "omniversal_conqueror_armor",
    "name": "Omniversal Conqueror Armor",
    "description": "The Omniversal Conqueror Armor is a gleaming suit of shimmering steel, forged from the very fabric of countless universes. Its surface is etched with ancient runes that hum softly as they weave together to form an impenetrable shield around its wearer. Crafted by the Ultimate Conqueror himself, this armor not only defies all attacks but also amplifies your prowess in combat, making you a force to be reckoned with on any battlefield.",
    "price": 320000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "cosmic",
    "effects": [
      "Infinite Armor Class",
      "Reflected Damage"
    ],
    "vendor": "multiversal_empire",
    "shippedBy": "Imperial Armory",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Infinite Armor Class",
        "rules": "While wearing the Omniversal Conqueror Armor, you gain an innate bonus to your AC equal to your proficiency bonus +20. This effect is always active and cannot be negated or reduced by any means."
      },
      {
        "title": "Reflected Damage",
        "rules": "When damage is dealt to you while wearing the armor, that damage is instead transferred back to the attacker as an equal amount of force. The attacker must succeed on a DC 25 Strength saving throw or be knocked prone and stunned for 1 minute."
      }
    ],
    "levelRequirementReason": "The armor's power requires a base level of understanding and discipline to harness effectively.",
    "vendorReason": "Only the Multiversal Empire can boast such rare and powerful artifacts, having conquered realms beyond comprehension.",
    "shippingDetail": "The armor is shipped in a custom crate via the Imperial Express service, ensuring safe delivery within one week.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous (always active)",
      "endsWhen": "Destroyed or removed from your person",
      "charges": "Unlimited"
    },
    "priceReason": "The armor's rarity and the time it took to craft justify its price, making it an excellent investment for any serious adventurer.",
    "priceOriginal": 500000000,
    "priceReviewedAt": "2026-07-22T22:38:56.449921+00:00",
    "aiReviewedAt": "2026-07-22T22:38:56.449921+00:00",
    "aiReviewVersion": 1
  },
  "omniversal_remote": {
    "id": "omniversal_remote",
    "name": "Omniversal Remote",
    "description": "The Omniversal Remote is a sleek, iridescent device adorned with buttons that shimmer like starlight. It allows you to seamlessly control any universe as if it were just another channel on your TV. With this remote, you can pause, rewind, fast-forward or change channels at will. The most remarkable feature is its ability to mute specific individuals, silencing their voices and halting their verbal spellcasting for a short duration.",
    "category": "equipment",
    "price": 380000,
    "icon": "📺",
    "stock": 1,
    "rarity": "cosmic",
    "effects": [
      "Pause, Rewind, Fast-Forward Channels",
      "Mute Specific Individuals"
    ],
    "vendor": "multiversal_entertainment",
    "shippedBy": "Channel Surfing Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Channel Control",
        "rules": "The user can pause, rewind, fast-forward, or change channels on any universe. This effect is instantaneous and has no save DC."
      },
      {
        "title": "Silence the Verbal",
        "rules": "By using a bonus action, you can mute an individual within 30 feet for 1 minute. The target cannot speak or cast verbal spells until the end of their next long rest. This effect has no save DC."
      }
    ],
    "levelRequirementReason": "It requires basic dexterity to operate and understand its complex functions.",
    "vendorReason": "Multiversal Entertainment, known for their expertise in multiverse navigation tools, offers this unique device.",
    "shippingDetail": "Ships via a cosmic courier who can only deliver it to the nearest universe border, where you must complete the final journey yourself.",
    "usage": {
      "activation": "Bonus action for channel control; bonus action or reaction to mute specific individuals",
      "duration": "Instantaneous and ongoing until the end of the target's next long rest (mute effect)",
      "endsWhen": "The user stops using it, or the target completes a long rest after being muted.",
      "charges": "Unlimited uses"
    },
    "priceReason": "It is a cosmic rarity and has limited utility, making it a balanced purchase.",
    "priceOriginal": 150000000,
    "priceReviewedAt": "2026-07-22T22:39:13.417501+00:00",
    "aiReviewedAt": "2026-07-22T22:39:13.417501+00:00",
    "aiReviewVersion": 1
  },
  "one_splash_and_nobody_knows": {
    "id": "one_splash_and_nobody_knows",
    "name": "Blooper Ink Vial",
    "description": "This vial contains a sinister ink that, when splashed, creates an impenetrable cloud of inky darkness. Once released, all within its 10-foot radius are cloaked in total concealment, making them nearly invisible to the eye and impervious to detection spells for one minute or until the wind or water disperses it. The ink is a legacy from the ancient town of Inkwell, where it was used by mischievous children to evade punishment. Beware, as this ink leaves an indelible mark on your reputation, etched into the very fabric of reality.",
    "category": "consumables",
    "price": 360,
    "icon": "🐙",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Total Concealment",
      "Permanent Stain"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Leaky Pouch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Total Concealment",
        "rules": "When activated by throwing the vial, all creatures within a 10-foot radius are considered to have total concealment. Attack rolls against them have disadvantage until the effect ends or is dispersed by wind or water. This effect lasts for one minute."
      },
      {
        "title": "Permanent Stain",
        "rules": "The ink permanently stains anything it touches, leaving an indelible mark that cannot be removed without a Wish spell or similar powerful magic."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to practice stealth and misdirection in a controlled manner.",
    "vendorReason": "The vial's ink is sourced from the ancient town of Inkwell, making it a sought-after item among valley traders.",
    "shippingDetail": "Due to the volatile nature of the ink, it must be shipped via Leaky Pouch for safe delivery.",
    "usage": {
      "activation": "Action",
      "duration": "One minute or until dispersed by wind or water",
      "endsWhen": "Dispersed by wind or water; ends at the start of your next turn after one minute",
      "charges": "Unlimited"
    },
    "priceReason": "The ink's rare and ancient origins, combined with its powerful yet controlled effect, justify this balanced price.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-22T22:39:09.408409+00:00",
    "aiReviewedAt": "2026-07-22T22:39:09.408409+00:00",
    "aiReviewVersion": 1
  },
  "onyx_hand_poison_kit": {
    "id": "onyx_hand_poison_kit",
    "name": "Onyx Hand Poison Kit",
    "description": "The Onyx Hand Poison Kit is a sleek, compact set of vials and applicators, each coated in fast-acting poisons harvested from ancient, shadowy sources. This deadly tool allows you to coat your weapon with a colorless, odorless poison that leaves no trace of its origin. A single coating ensures swift incapacitation on contact, dealing 2d6 poison damage upon a successful hit (CON save for half). The kit's vials are crafted from onyx, the stone of secrets and shadows, ensuring each drop is both potent and untraceable.",
    "category": "services",
    "price": 1700,
    "icon": "☠️",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Colorless and Odorless",
      "Untraceable Poison"
    ],
    "vendor": "the_onyx_hand",
    "shippedBy": "Black Market Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Poisonous Strike",
        "rules": "When you hit with a weapon attack, the target must make a Constitution saving throw (DC 14) or take 2d6 poison damage. On a successful save, it takes half as much damage."
      },
      {
        "title": "Untraceable",
        "rules": "The poison is colorless and odorless, leaving no trace of its origin. No one can identify the poison without a successful DC 15 Intelligence (Investigation) check."
      }
    ],
    "levelRequirementReason": "This kit is suitable for any adventurer who needs to incapacitate their foes quickly and quietly.",
    "vendorReason": "The Onyx Hand has a reputation for dealing in the unsavory, making this kit an essential tool for those who need to ensure their targets are neutralized discreetly.",
    "shippingDetail": "Delivered within the week by trusted couriers; each package is carefully concealed to avoid detection.",
    "usage": {
      "activation": "On hit with a weapon attack",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after use, requires reapplication for another effect",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The kit's rarity and the expertise required to craft such a potent yet undetectable poison justify its price.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-22T22:39:11.203998+00:00",
    "aiReviewedAt": "2026-07-22T22:39:11.203998+00:00",
    "aiReviewVersion": 1
  },
  "onyx_hand_poison_vial": {
    "id": "onyx_hand_poison_vial",
    "name": "Onyx Hand Poison Vial",
    "description": "The Onyx Hand Poison Vial contains a viscous, dark fluid that glistens like obsidian under torchlight. This paralytic poison is said to have been crafted by the enigmatic Onyx Hand, whose methods are as lethal as their secrets. A single drop can coat a weapon or taint a drink, leaving its victims frozen in place for a full minute. The vial itself is a fragile glass container, holding just enough poison to do its deadly work once.",
    "category": "consumables",
    "price": 360,
    "icon": "💊",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Poison (ingested): DC 13 CON save",
      "Single dose"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Swift Messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Poison (ingested)",
        "rules": "When ingested, the victim must make a Constitution saving throw. On a failed save, they are paralyzed for 1 minute. The poison's effect can be countered with a successful Medicine check or by consuming an antitoxin of appropriate potency."
      },
      {
        "title": "Single dose",
        "rules": "The vial contains only enough poison to coat one weapon or contaminate one drink. Once used, the vial breaks and cannot be reused."
      }
    ],
    "levelRequirementReason": "This poison is potent but not overly complex, suitable for adventurers of any level.",
    "vendorReason": "The Onyx Hand is known for their deadly creations and this vial is one of the most sought-after items from their shop.",
    "shippingDetail": "Delivered by Swift Messenger, who ensures the poison's potency remains intact during transit.",
    "usage": {
      "activation": "Used as an ingested poison or to coat a weapon/drink.",
      "duration": "1 minute (paralyzed) on failed save; instantaneous effect upon activation",
      "endsWhen": "Victim succeeds saving throw, consumed by Medicine check, or when the vial is used up and breaks.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Onyx Hand's craftsmanship ensures the poison remains effective, making it a valuable but not overpriced commodity.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T16:40:40.156511+00:00",
    "aiReviewedAt": "2026-07-23T16:40:40.156511+00:00",
    "aiReviewVersion": 1
  },
  "onyx_hand_shadow_subscription": {
    "id": "onyx_hand_shadow_subscription",
    "name": "Onyx Hand Shadow Subscription",
    "description": "The Onyx Hand Shadow Subscription delivers a sentient shadow each month, bound to perform minor tasks for its master. These shadows are crafted meticulously by The Onyx Hand Shadow Guild from rare onyx and imbued with shadowy essence. Each week, the familiar can complete one errand such as delivering letters or spying discreetly for ten minutes. However, these shadows are not without their quirks; they may demand a raise in their 'wages' or develop an independent streak, testing even the most seasoned masters.",
    "category": "premium",
    "price": 1700,
    "icon": "🌑",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Weekly Familiar Tasks",
      "Shadow's Independent Streak"
    ],
    "vendor": "the_onyx_hand",
    "shippedBy": "Shadow Drop Courier Service",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Weekly Familiar Tasks",
        "rules": "This shadow familiar can perform one errand each week. The errand is chosen by the master and must be a task within the shadow’s capabilities, such as delivering letters or spying for ten minutes. The shadow exhausts after completing its weekly task."
      },
      {
        "title": "Shadow's Independent Streak",
        "rules": "There is a 25% chance each week that the shadow will demand a raise in its 'wages' or develop an independent streak, requiring negotiation or persuasion to continue working for the master. This effect ends when the shadow completes three consecutive tasks without demanding more."
      }
    ],
    "levelRequirementReason": "Beginners with a taste for unique companionship can afford this subscription.",
    "vendorReason": "The Onyx Hand Shadow Guild is renowned for their mastery in crafting these sentient shadows and offers the exclusive service to initiates and experienced adventurers alike.",
    "shippingDetail": "Delivered via a trusted shadow courier, ensuring timely and discreet delivery of the weekly familiar.",
    "usage": {
      "activation": "The master can assign tasks each week.",
      "duration": "Instantaneous for task assignment; one week per errand.",
      "endsWhen": "Task completion or demand for more wages/raises.",
      "charges": "Unlimited uses, but only one weekly task."
    },
    "priceReason": "The subscription covers the crafting and maintenance of a sentient shadow familiar, offering regular service at a fair price.",
    "priceOriginal": 24500,
    "priceReviewedAt": "2026-07-22T22:39:40.732133+00:00",
    "aiReviewedAt": "2026-07-22T22:39:40.732133+00:00",
    "aiReviewVersion": 1
  },
  "onyx_hand_soul_shard": {
    "id": "onyx_hand_soul_shard",
    "name": "Onyx Hand Soul Shard",
    "description": "The Onyx Hand Soul Shard is a jagged shard of obsidian, its surface etched with dark runes that seem to pulse with malevolent energy. When shattered, it releases a cacophony of disembodied screams that can be harnessed in dark rituals or used to animate the dead. Each fragment carries the weight of a condemned soul, and those who wield it must face the wrath of their spectral owner after each use.",
    "category": "forbidden",
    "price": 1700,
    "icon": "🖤",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Shatter to Cast Animate Dead",
      "Add +2d6 Necrotic Damage"
    ],
    "vendor": "The Onyx Hand",
    "shippedBy": "Cursed Wrappings",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Shatter to Cast Animate Dead",
        "rules": "As an action, the user can shatter the shard to cast 'Animate Dead' on up to four HD worth of corpses within 30 feet. The spell has a duration until dispelled or the animated creatures are destroyed. This use risks attracting the attention of the trapped soul's original owner."
      },
      {
        "title": "Add +2d6 Necrotic Damage",
        "rules": "When used as an enhancement to a necrotic damage spell, it increases the damage by 2d6. This effect can only be applied once per short or long rest. Each use risks drawing the attention of the soul's original owner."
      }
    ],
    "levelRequirementReason": "The Onyx Hand Soul Shard requires a minimum level of 7 due to its dark magic and the risk involved in using it.",
    "vendorReason": "The Onyx Hand is known for dealing with forbidden artifacts, including items that manipulate souls and necrotic energies.",
    "shippingDetail": "Ships discreetly via Cursed Wrappings, ensuring the item arrives safely but ominously.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous for Animate Dead; spell duration until dispelled or creatures destroyed",
      "endsWhen": "Shard is shattered, spell ends on its own, or the user takes a short rest",
      "charges": "Unlimited"
    },
    "priceReason": "The Onyx Hand Soul Shard's price reflects its dark magic and the risk it poses to both the wielder and the environment.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-22T22:40:25.474407+00:00",
    "aiReviewedAt": "2026-07-22T22:40:25.474407+00:00",
    "aiReviewVersion": 1
  },
  "onyx_hand_spy_poison": {
    "id": "onyx_hand_spy_poison",
    "name": "Onyx Hand Sleep Toxin",
    "description": "The Onyx Hand Sleep Toxin is a dark, viscous liquid that clings to the surface of a weapon like a second skin. Crafted by the secretive Onyx Hand assassins, this poison mimics natural sleep, lulling targets into a deep slumber from which they cannot easily awaken. Applied with precision, it ensures a silent fall without any visible side effects, making it the preferred choice for those who seek to end a life in the quiet of the night.",
    "price": 1700,
    "icon": "💉",
    "stock": 6,
    "rarity": "rare",
    "effects": [
      "Weapon Poison",
      "Silent Assassin"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Syringe Case",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Weapon Poison",
        "rules": "When applied to a weapon, the target must make a DC 16 Constitution saving throw. On a failed save, the target falls into deep sleep for 1d4 × 10 minutes. They are incapacitated and cannot be woken by normal means until they wake naturally."
      },
      {
        "title": "Silent Assassin",
        "rules": "The poison leaves no visible signs of its presence, ensuring that the assassin's work remains undetected. The target does not gain any benefit from sleeping in a hostile environment or under magical effects that improve rest."
      }
    ],
    "levelRequirementReason": "This poison requires a high level to craft and use effectively, as it demands precision and knowledge of the human body.",
    "vendorReason": "The Onyx Hand is renowned for their expertise in poisons and stealth, making them the sole source of this deadly yet silent weapon enhancer.",
    "shippingDetail": "Delivered through a trusted courier who ensures the poison remains undetected and potent during transit.",
    "usage": {
      "activation": "Applied as an action to a weapon before use.",
      "duration": "Instantaneous, with effects lasting until the target wakes naturally.",
      "endsWhen": "The target awakens from sleep or is otherwise roused.",
      "charges": "Unlimited, but each application requires a successful Craft (poison) check."
    },
    "priceReason": "This poison is crafted by master assassins and requires rare ingredients, making it both valuable and hard to come by in the market.",
    "priceOriginal": 21000,
    "priceReviewedAt": "2026-07-22T22:39:53.767086+00:00",
    "aiReviewedAt": "2026-07-22T22:39:53.767086+00:00",
    "aiReviewVersion": 1
  },
  "oracle_of_lost_words": {
    "id": "oracle_of_lost_words",
    "name": "Oracle of Lost Words",
    "description": "The Oracle of Lost Words is a stone tablet etched with cryptic runes that glow faintly in shades of sepia and lavender. Its voice whispers in ancient tongues, long forgotten by time itself. Ask it anything, and the answer comes in an arcane language that seems to dance across your mind—yet you understand its meaning perfectly. The tablet’s wisdom is both profound and fleeting; with each query, one word from your native tongue is lost forever, leaving you wiser but less able to articulate the very knowledge you seek.",
    "category": "curiosities",
    "price": 6300,
    "icon": "🪨",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Ask a question: it answers in an ancient language",
      "Answer is always cryptic yet true"
    ],
    "vendor": "scholar_society",
    "shippedBy": "Ancient Stone Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Questioning the Oracle",
        "rules": "To use, speak your inquiry aloud. You understand the answer despite its ancient phrasing. The oracle responds with a single sentence in an extinct language. This effect is instantaneous and requires no action."
      },
      {
        "title": "Word Loss",
        "rules": "Each query costs one word from your native tongue forever; you cannot regain lost words through any means. This effect can only be used once per day, and the oracle will not respond if more than one word is missing."
      }
    ],
    "levelRequirementReason": "The complexity of understanding ancient languages and the profound wisdom offered by the oracle require a minimum character level.",
    "vendorReason": "The scholar society has long maintained a connection with lost knowledge, making them guardians of such enigmatic artifacts.",
    "shippingDetail": "Delivered via a courier who specializes in ancient and fragile artifacts, ensuring safe transport through time-worn passages.",
    "usage": {
      "activation": "Verbal action to speak the query aloud",
      "duration": "Instantaneous; the oracle responds immediately",
      "endsWhen": "The day ends or you rest fully",
      "charges": "Daily limit of one use"
    },
    "priceReason": "Balanced at 1000 XP, this item offers profound knowledge and a unique experience that is both rare and valuable.",
    "priceOriginal": 22000,
    "priceReviewedAt": "2026-07-22T22:40:20.903658+00:00",
    "aiReviewedAt": "2026-07-22T22:40:20.903658+00:00",
    "aiReviewVersion": 1
  },
  "oracula_blood_red_velvet_cake_recipe": {
    "id": "oracula_blood_red_velvet_cake_recipe",
    "name": "Recipe: Oracula Blood Red Velvet Cake",
    "description": "The Recipe: Oracula Blood Red Velvet Cake is a dark and decadent treat, baked with real 'blood' berries that give it its signature crimson hue. This nocturnal feast not only heals you but also grants you an advantage on Stealth checks in the shadows for three hours, making you a master of the night. Only those who have earned the right can learn this recipe from Oracula herself, ensuring its exclusivity and power remains intact.",
    "price": 1700,
    "icon": "🍰",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Nocturnal Nourishment",
      "Shadow Stealth Advantage"
    ],
    "vendor": "oracula_castle",
    "shippedBy": "Crimson Crumb Codex",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Nocturnal Nourishment",
        "rules": "When you eat the cake at night, you gain temporary hit points equal to 2d6 + your Constitution modifier. This effect lasts until morning. You must be in darkness for the full duration to benefit from this healing."
      },
      {
        "title": "Shadow Stealth Advantage",
        "rules": "For three hours after consuming the cake, you have advantage on Dexterity (Stealth) checks made in dim light or darkness. This effect is not cumulative with other sources of advantage."
      }
    ],
    "levelRequirementReason": "Only those who have proven their worth and are at least level 6 can learn this recipe, ensuring it remains a rare and powerful item.",
    "vendorReason": "Oracula herself personally oversees the distribution of this recipe, as only she knows how to craft such a potent and exclusive treat.",
    "shippingDetail": "The cake must be baked immediately upon receiving the recipe. The ingredients are perishable, so it is best enjoyed fresh from Oracula's own bakery.",
    "usage": {
      "activation": "Eat the cake at night for its effects to activate.",
      "duration": "Until morning or until you consume another meal.",
      "endsWhen": "At sunrise or when you eat another substantial meal.",
      "charges": "Unlimited, but limited by daily consumption."
    },
    "priceReason": "The recipe is rare and requires special ingredients, making it a valuable asset for any adventurer worthy enough to learn it.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-22T22:40:07.547379+00:00",
    "aiReviewedAt": "2026-07-22T22:40:07.547379+00:00",
    "aiReviewVersion": 1
  },
  "oracula_castle_blood_vial_vat": {
    "id": "oracula_castle_blood_vial_vat",
    "name": "Oracula Castle Blood Vial Vat",
    "description": "This ornate vat is crafted from dark obsidian and inlaid with blood-red rubies. It preserves the color of any red liquid it contains, granting advantage on checks related to night baking or maintaining crimson hues. The vat also chills naturally, ensuring that any mixture kept within remains fresh and vibrant for days. This relic is said to have been created by the secretive Castle Alchemists who guard Oracula's secrets.",
    "category": "equipment",
    "price": 1700,
    "icon": "🍰",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on checks involving red liquids",
      "Chills naturally; preserves color"
    ],
    "vendor": "oracula_castle",
    "shippedBy": "Shadowed Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Color Preservation",
        "rules": "While a mixture of red liquids is contained within the vat, it remains vivid and true to its original hue. This effect lasts until the contents are removed or the vat is opened."
      },
      {
        "title": "Advantage on Checks",
        "rules": "The user gains advantage on checks related to night baking or any task involving maintaining crimson hues, such as painting or dye-making. This effect persists for 1 hour after activation."
      }
    ],
    "levelRequirementReason": "This vat is designed for novice bakers and alchemists who need basic tools to assist in their craft.",
    "vendorReason": "Oracula Castle's Alchemists often provide tools that enhance the castle's culinary and magical operations, including this unique blood vial.",
    "shippingDetail": "Ships via a shadowy courier who ensures no prying eyes see the contents of the vat during transit.",
    "usage": {
      "activation": "Instantaneous action required to open and add ingredients.",
      "duration": "Until the mixture is removed or the vat is opened.",
      "endsWhen": "Contents are consumed, removed, or the vat's lid is opened.",
      "charges": "Unlimited uses; charges do not reset."
    },
    "priceReason": "The rare materials and craftsmanship required for this vat justify its fair market value in experience points.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T22:40:23.839222+00:00",
    "aiReviewedAt": "2026-07-22T22:40:23.839222+00:00",
    "aiReviewVersion": 1
  },
  "oracula_curse_removal": {
    "id": "oracula_curse_removal",
    "name": "Oracula Curse Removal (High Level)",
    "description": "Oracula, the priestess of ancient lore, personally breaks one powerful, persistent curse, restoring balance to those who seek her aid. Her touch weaves a delicate spell that dispels any curse up to CR 10, regardless of its binding. In return for this service, a minor, random localized weather effect—such as a brief storm or a glowing aura—appears around the area where the curse was removed, lasting for 24 hours.",
    "price": 30000,
    "icon": "✨",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Curses of CR 10 and Below",
      "Weather Effect After Removal"
    ],
    "vendor": "oracula_shrine",
    "shippedBy": "Personal Summons of Oracula",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Remove Curse",
        "rules": "Requires a ritual performed by Oracula over the duration of one hour. The target must be within 30 feet of her, and the curse must have a challenge rating (CR) of 10 or lower to be dispelled. This effect has no save DC."
      },
      {
        "title": "Weather Phenomenon",
        "rules": "A minor weather phenomenon appears in the area where the curse was removed for 24 hours, such as a brief storm, a glowing aura, or other natural effects. The exact nature of this phenomenon is random and determined by Oracula."
      }
    ],
    "levelRequirementReason": "Only high-level characters can access the power needed to dispel such potent curses.",
    "vendorReason": "Oracula personally oversees this service, ensuring only those with dire need seek her aid.",
    "shippingDetail": "The item is delivered by a personal summons directly to the character's location.",
    "usage": {
      "activation": "Ritual (performed over one hour)",
      "duration": "Instantaneous, lasting for the duration of the curse removal",
      "endsWhen": "The ritual is completed or if the target successfully resists the spell with a DC 15 Wisdom saving throw.",
      "charges": "Unlimited; the item can be used as many times as needed within reasonable intervals."
    },
    "priceReason": "This service requires Oracula's personal involvement and knowledge, making it one of her most valuable offerings.",
    "priceOriginal": 150000,
    "priceReviewedAt": "2026-07-22T22:40:35.365570+00:00",
    "aiReviewedAt": "2026-07-22T22:40:35.365570+00:00",
    "aiReviewVersion": 1
  },
  "oracula_divination_crystal": {
    "id": "oracula_divination_crystal",
    "name": "Oracula Grand Divination Crystal",
    "description": "The Oracula Grand Divination Crystal glows with a serene, otherworldly light, its facets catching and reflecting the ambient glow of the chamber. This ancient artifact, crafted by the enigmatic oracle Oracula herself, allows the user to glimpse fleeting visions of future combat outcomes. Each use reveals one to four rounds of impending battle, offering a tantalizing preview into the chaos to come. The crystal's power is both a blessing and a curse, as it grants the user an initiative boost following successful divination.",
    "price": 350000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "Visionary Glimpse",
      "Initiative Boost"
    ],
    "vendor": "oracula_shrine",
    "shippedBy": "Floating Pedestal",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Visionary Glimpse",
        "rules": "Once per day, the user can focus on the crystal to gain a brief glimpse of future combat outcomes. This effect reveals one to four rounds ahead in any upcoming combat encounter. The user must spend an action to activate this ability. The visions last for 1 minute after activation and are not subject to dispelling or saving throws."
      },
      {
        "title": "Initiative Boost",
        "rules": "If the Visionary Glimpse is successful, the user gains a +5 bonus to Initiative in the next combat encounter. This effect lasts until the start of their turn following the end of the current combat round. The crystal can only grant this boost once per day."
      }
    ],
    "levelRequirementReason": "The crystal's power is too potent for those below fifth level, requiring a minimum character level to harness its full potential.",
    "vendorReason": "Oracula herself, the keeper of this ancient artifact, resides at her shrine and offers it as one of many sacred relics.",
    "shippingDetail": "The crystal is delivered by a floating pedestal that hovers silently to your location.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute (effect lasts until the end of the next combat round)",
      "endsWhen": "The effect ends when the current combat round concludes or if the user takes an action other than a free one.",
      "charges": "Once per day"
    },
    "priceReason": "Its godly rarity and unique utility justify its price of 1000 XP.",
    "priceOriginal": 210000,
    "priceReviewedAt": "2026-07-22T22:41:15.843564+00:00",
    "aiReviewedAt": "2026-07-22T22:41:15.843564+00:00",
    "aiReviewVersion": 1
  },
  "oracula_divine_alliance": {
    "id": "oracula_divine_alliance",
    "name": "Oracular Divine Alliance (Minor Deity)",
    "description": "Oracular Divine Alliance is a rare artifact, crafted from the ethereal essence of minor deities and bound by Oracula's own sanctified hands. This divine trinket secures the eternal loyalty of a minor deity or demigod, offering perpetual protection and occasional boons such as divine guidance and minor miracles to its bearer. The item itself is a delicate amulet adorned with celestial symbols, imbued with the essence of lesser deities.",
    "price": 350000,
    "icon": "🤝",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Divine Loyalty",
      "Boon Companion"
    ],
    "vendor": "oracula_shrine",
    "shippedBy": "Grand Celestial Summons",
    "levelRequirement": 19,
    "effectDetails": [
      {
        "title": "Divine Loyalty",
        "rules": "The owner gains the permanent loyalty of a minor deity or demigod. The deity provides divine protection and occasional boons such as healing, guidance, and minor miracles. The deity is bound to offer support in times of need."
      },
      {
        "title": "Boon Companion",
        "rules": "Once per week, the owner may request a minor boon from their divine ally. This could include healing spells, protection effects, or other beneficial effects as determined by the DM. The deity must be able to provide the requested boon within its realm of influence."
      }
    ],
    "levelRequirementReason": "The item requires a high level of expertise and power to properly channel the divine energies it contains.",
    "vendorReason": "Oracula's shrine is known for its ability to forge powerful alliances between mortals and minor deities, making this item one of their most sought-after offerings.",
    "shippingDetail": "The artifact must be summoned directly by the divine will of Oracula or her chosen representatives.",
    "usage": {
      "activation": "Passive effect; requires a request for a minor boon once per week.",
      "duration": "Permanent, until the deity's influence wanes due to natural causes.",
      "endsWhen": "The relationship with the deity ends if the owner fails to maintain proper respect and honor.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item is a rare and powerful artifact, representing the essence of minor deities and the craftsmanship of Oracula's shrine.",
    "priceOriginal": 850000,
    "priceReviewedAt": "2026-07-22T22:41:04.015088+00:00",
    "aiReviewedAt": "2026-07-22T22:41:04.015088+00:00",
    "aiReviewVersion": 1
  },
  "oracula_divine_army_blessing": {
    "id": "oracula_divine_army_blessing",
    "name": "Oracular Divine Army Blessing (Mass)",
    "description": "The Oracular Divine Army Blessing (Mass) is a sacred amulet gifted by the revered goddess Oracula to entreat her divine favor upon an army. This holy relic imbues soldiers with a blessed aura, granting them +2 to attack rolls and damage rolls for one major battle, while also providing temporary immunity against fear effects. The amulet's power resonates from the heart of Oracular shrines, ensuring its efficacy in times of dire need.",
    "price": 350000,
    "icon": "🙏",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Blessed Aura",
      "Immunity to Fear"
    ],
    "vendor": "oracula_shrine",
    "shippedBy": "High Festival Courier",
    "levelRequirement": 19,
    "effectDetails": [
      {
        "title": "Blessed Aura",
        "rules": "The army gains +2 to all attack rolls and damage rolls for one major battle. This effect lasts until the battle ends or the army is dispersed."
      },
      {
        "title": "Immunity to Fear",
        "rules": "The army gains temporary immunity to fear effects, lasting as long as they are within a 100-foot radius of the amulet's bearer."
      }
    ],
    "levelRequirementReason": "This item requires a high level to ensure that the user can effectively manage and lead an army during critical battles.",
    "vendorReason": "Oracula's shrines are renowned for their divine blessings, making them the rightful purveyors of such sacred relics.",
    "shippingDetail": "The amulet is delivered via a High Festival courier, ensuring swift and secure transport from Oracular sanctuaries to the battlefield.",
    "usage": {
      "activation": "Passive effect upon donning the amulet during battle.",
      "duration": "One major battle or until dispersed.",
      "endsWhen": "The battle ends or the army is broken.",
      "charges": "Unlimited, recharges after a long rest."
    },
    "priceReason": "Balanced for a high-level item that provides significant battlefield advantages and ensures divine favor during critical engagements.",
    "priceOriginal": 950000,
    "priceReviewedAt": "2026-07-22T22:40:40.476866+00:00",
    "aiReviewedAt": "2026-07-22T22:40:40.476866+00:00",
    "aiReviewVersion": 1
  },
  "oracula_divine_ascension": {
    "id": "oracula_divine_ascension",
    "name": "Oracula Divine Ascension Ritual",
    "description": "The Oracula Divine Ascension Ritual is a perilous rite performed within the sacred confines of Oracula’s Shrine, where mortals temporarily ascend to minor deity status, granted divinity for one day in exchange for an immense and ethically questionable sacrifice. The ritual’s success depends on the caster’s resolve and the temple priests’ judgment, leaving behind a permanent reminder of the price paid: three levels of exhaustion that last as long as the ascension’s memory lingers.",
    "price": 1700000,
    "icon": "😇",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Divine Ascension",
      "Permanent Exhaustion"
    ],
    "vendor": "oracula_shrine",
    "shippedBy": "Final Summons",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Divine Ascension",
        "rules": "Upon successful completion, the caster temporarily gains divine power for a duration of 24 hours. This includes access to minor deity abilities as determined by the DM, but at the cost of an immense sacrifice that must be approved beforehand."
      },
      {
        "title": "Permanent Exhaustion",
        "rules": "For every hour spent in divine form, the caster suffers one level of exhaustion upon completion of the ritual. This effect is permanent and cannot be removed by any means until the ascension’s memory fades."
      }
    ],
    "levelRequirementReason": "Only a seasoned hero with extensive experience can undertake this perilous rite.",
    "vendorReason": "Oracula’s Shrine is the only place where such divine rites are permitted and conducted.",
    "shippingDetail": "The ritual must be performed at Oracula’s Shrine, with all materials provided by the temple.",
    "usage": {
      "activation": "Caster must complete the ritual as a full action within the shrine’s sanctum.",
      "duration": "24 hours of divine power.",
      "endsWhen": "The duration expires or if the caster is reduced to 0 hit points.",
      "charges": "Unlimited, but requires rest and approval from Oracula’s priests."
    },
    "priceReason": "The ritual’s cost reflects both the immense sacrifice required and the divine power granted for a day.",
    "priceOriginal": 1500000,
    "priceReviewedAt": "2026-07-22T22:41:40.328118+00:00",
    "aiReviewedAt": "2026-07-22T22:41:40.328118+00:00",
    "aiReviewVersion": 1
  },
  "oracula_divine_consecration": {
    "id": "oracula_divine_consecration",
    "name": "Oracular Divine Consecration (Small Area)",
    "description": "The Oracular Divine Consecration is a small, ornate stone tablet inscribed with ancient runes that glow faintly in the presence of malevolent forces. When invoked by Oracula's ritual, it consecrates an entire building or shrine, turning it into a sanctuary immune to entry from fiends and other evil outsiders. The tablet also emits a shimmering aura that causes 2d6 radiant damage to any fiend attempting to breach its defenses. This sacred artifact is crafted only by the wise and powerful Oracula, whose shrines are known for their sanctity and protection against dark forces.",
    "price": 6300,
    "icon": "⛪",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Fiend Exclusion Barrier",
      "Radiant Damage on Entry"
    ],
    "vendor": "oracula_shrine",
    "shippedBy": "Consecration Ritual",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fiend Exclusion Barrier",
        "rules": "When the Oracular Divine Consecration is activated, it creates an invisible barrier around a single building or shrine. This barrier protects against entry by fiends and other evil outsiders with a DC 18 banishment check. The effect lasts for 24 hours unless dispelled."
      },
      {
        "title": "Radiant Damage on Entry",
        "rules": "Any fiend attempting to breach the consecrated area must make a Dexterity saving throw (DC 16) or take 2d6 radiant damage and be pushed back 10 feet. The effect can only trigger once per day."
      }
    ],
    "levelRequirementReason": "Any spellcaster with basic knowledge of divine magic can invoke the tablet, but it requires a significant amount of spiritual energy.",
    "vendorReason": "Oracula's shrines are known for their sanctity and protection against dark forces, making her the only one capable of crafting such an artifact.",
    "shippingDetail": "The ritual is performed by Oracula herself or a trusted disciple, ensuring the tablet’s consecrated status.",
    "usage": {
      "activation": "A short prayer and a casting time of one action to invoke the tablet's effect.",
      "duration": "24 hours per use",
      "endsWhen": "The effect is dispelled by a successful banishment check or expires after 24 hours.",
      "charges": "Unlimited, but only one consecration can be active at any given time."
    },
    "priceReason": "The tablet's creation requires rare materials and the spiritual energy of an experienced divine caster.",
    "priceOriginal": 100000,
    "priceReviewedAt": "2026-07-22T22:41:22.435947+00:00",
    "aiReviewedAt": "2026-07-22T22:41:22.435947+00:00",
    "aiReviewVersion": 1
  },
  "oracula_divine_intervention": {
    "id": "oracula_divine_intervention",
    "name": "Oracula Divine Intervention (Major)",
    "description": "The Oracula Divine Intervention calls upon a major deity to intervene in a dire situation, turning the tide against an overwhelming enemy force or formidable threat. The intervention is swift and decisive, lasting for one round as the divine power directly counters the named threat. In return, the deity demands a service of galactic significance that must be fulfilled by the petitioner within a century's time. This item is crafted by Oracula herself, ensuring its reliability in times of utmost need.",
    "price": 350000,
    "icon": "⚡",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Deity Intervention",
      "Divine Demand"
    ],
    "vendor": "oracula_shrine",
    "shippedBy": "Cosmic Summons",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Deity Intervention",
        "rules": "The deity directly combats the named threat for one round. The intervention is instantaneous and does not require any action from the user. The effect ends when the threat is defeated or the deity chooses to end it."
      },
      {
        "title": "Divine Demand",
        "rules": "In exchange, the deity demands a service of galactic significance that must be fulfilled by the petitioner within one century. Failure to comply results in dire consequences for both the user and their allies."
      }
    ],
    "levelRequirementReason": "The item requires significant magical power to activate, which is only available to characters of at least 10th level.",
    "vendorReason": "Oracula herself ensures that this powerful item is sold exclusively through her shrine, guaranteeing its authenticity and potency.",
    "shippingDetail": "The item is delivered via the Cosmic Summons service, which can take up to a week depending on cosmic traffic.",
    "usage": {
      "activation": "Instantaneous action",
      "duration": "One round",
      "endsWhen": "Threat defeated or deity ends it; does not need charging",
      "charges": "Unlimited"
    },
    "priceReason": "The item is priced at 1000 XP, reflecting its significant power and the rarity of having a deity intervene.",
    "priceOriginal": 1200000,
    "priceReviewedAt": "2026-07-22T22:41:29.202190+00:00",
    "aiReviewedAt": "2026-07-22T22:41:29.202190+00:00",
    "aiReviewVersion": 1
  },
  "oracula_divine_mediation": {
    "id": "oracula_divine_mediation",
    "name": "Oracula Divine Mediation",
    "description": "The Oracula Divine Mediation is a sacred amulet, crafted from the molten heart of a volcano and blessed by a minor deity. When invoked in times of conflict, it channels divine will to mediate disputes between mortal factions or powerful NPCs. The amulet’s power lies not only in its binding judgment but also in the presence of Oracula, who ensures that both sides hear justice from the heavens themselves.",
    "price": 30000,
    "icon": "⚖️",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Mediates a dispute between two non-god entities",
      "Deity's judgment is final and binding"
    ],
    "vendor": "oracula_shrine",
    "shippedBy": "Holy Delegation",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Divine Mediation",
        "rules": "As an action, you activate the amulet to mediate a conflict. The mediation lasts for 1 minute or until all parties involved agree. You must be present during the mediation, and both sides of the dispute must consent to its use. The deity’s judgment is final and cannot be appealed."
      },
      {
        "title": "Binding Judgment",
        "rules": "Once the mediation concludes, the judgment rendered by the deity becomes binding on all parties involved. If any party fails to comply with the judgment within 1 week, they must make a DC 18 Wisdom saving throw or suffer a penalty equal to their failed roll until they do so."
      }
    ],
    "levelRequirementReason": "The amulet requires significant spiritual strength and wisdom to wield effectively.",
    "vendorReason": "Oracula’s Shrine is the only place where such a sacred artifact can be properly blessed and used.",
    "shippingDetail": "The amulet is delivered by a delegation of holy priests, ensuring its safe and proper installation in the hands of the user.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until all parties agree",
      "endsWhen": "All parties involved agree to the mediation or one party fails to comply with the judgment within a week",
      "charges": "Unlimited, but only once per day"
    },
    "priceReason": "The amulet’s rarity and divine blessing justify its moderate price in XP.",
    "priceOriginal": 220000,
    "priceReviewedAt": "2026-07-22T22:41:57.122604+00:00",
    "aiReviewedAt": "2026-07-22T22:41:57.122604+00:00",
    "aiReviewVersion": 1
  },
  "oracula_divine_weapon_blessing": {
    "id": "oracula_divine_weapon_blessing",
    "name": "Oracular Divine Weapon Blessing",
    "description": "Oracular Divine Weapon Blessing is a holy touch that infuses one weapon, imbuing it with divine purpose and power. The priest's hands leave behind an ineffable radiance, transforming the blade into a conduit of celestial might. For a year, this blessed weapon deals an extra 3d10 radiant damage to fiends and undead, and its consecrated edge can be called upon in times of need by invoking the blessing’s divine purpose.",
    "price": 30000,
    "icon": "🗡️",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Radiant Burst",
      "Divine Purpose"
    ],
    "vendor": "oracula_shrine",
    "shippedBy": "Consecrated Anointing",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Radiant Burst",
        "rules": "When the blessed weapon strikes a fiend or undead, it deals an additional 3d10 radiant damage. The blessing lasts for one year."
      },
      {
        "title": "Divine Purpose",
        "rules": "By speaking the sacred words of invocation and holding the weapon in both hands, you can activate its divine purpose as a bonus action. This grants temporary hit points equal to 2d10 + your Charisma modifier to the wielder for an hour."
      }
    ],
    "levelRequirementReason": "The intricate ritual and divine energy required to bless a weapon demands a minimum character level.",
    "vendorReason": "Oracula, the high priestess of divine blessing, is the only one who can perform this sacred ritual.",
    "shippingDetail": "The weapon must be delivered to Oracula's shrine for the blessing and consecration. Delivery takes a week.",
    "usage": {
      "activation": "Bonus action to invoke divine purpose, or attack as usual.",
      "duration": "Until expended or dismissed.",
      "endsWhen": "Weapon is re-blessed by Oracula or destroyed.",
      "charges": "Unlimited; recharged at dawn."
    },
    "priceReason": "The item's rarity, vendor, and specific divine power justify its price.",
    "priceOriginal": 190000,
    "priceReviewedAt": "2026-07-22T22:42:03.136873+00:00",
    "aiReviewedAt": "2026-07-22T22:42:03.136873+00:00",
    "aiReviewVersion": 1
  },
  "oracula_fate_gem": {
    "id": "oracula_fate_gem",
    "name": "Oracula Fate Gem (Single Rewind)",
    "description": "The Oracula Fate Gem (Single Rewind) is a shimmering, obsidian-black gemstone encased in gold filigree. Upon absorbing a critical failure, it transforms that misfortune into a moment of clarity. It can absorb either one failed Death Save or one failed attack roll against an especially formidable foe, but after such an act, the gem shatters, releasing a blinding flash of light that forces the user to make a DC 15 Constitution saving throw; failure results in 5d10 psychic damage from the overload.",
    "price": 360000,
    "icon": "💎",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Critical Misfortune Absorption",
      "Visionary Overload"
    ],
    "vendor": "oracula_shrine",
    "shippedBy": "Sealed Reliquary",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Critical Misfortune Absorption",
        "rules": "When activated by a failed Death Save or failed attack roll against an especially powerful foe, the gem absorbs this failure, turning it into a moment of insight. Once used, the gem is shattered."
      },
      {
        "title": "Visionary Overload",
        "rules": "Upon shattering, the gem releases a blinding flash of light forcing the user to make a DC 15 Constitution saving throw; on failure, the user takes 5d10 psychic damage. The gem can only be used once."
      }
    ],
    "levelRequirementReason": "The gem's power is subtle yet profound, making it accessible even to lower-level characters who seek to harness its potential.",
    "vendorReason": "Oracula, the seer, created this gem and keeps a supply for those seeking her guidance in times of crisis.",
    "shippingDetail": "The Sealed Reliquary ensures safe delivery via a sacred courier who can only be dispatched by Oracula's shrines.",
    "usage": {
      "activation": "Use an action to activate the gem during a failed Death Save or when rolling an attack against a powerful foe.",
      "duration": "Instantaneous",
      "endsWhen": "The gem shatters and releases its effects upon use.",
      "charges": "Unlimited, but can only be used once per day."
    },
    "priceReason": "Balanced at a price of 1000 XP, this gem offers significant utility for those who need to turn misfortune into fortune.",
    "priceOriginal": 400000,
    "priceReviewedAt": "2026-07-22T22:41:44.365188+00:00",
    "aiReviewedAt": "2026-07-22T22:41:44.365188+00:00",
    "aiReviewVersion": 1
  },
  "oracula_fortune_cookie_filling": {
    "id": "oracula_fortune_cookie_filling",
    "name": "Oracula Fortune Cookie Filling Service",
    "description": "The Oracula Fortune Cookie Filling Service delivers a crisp cookie that, when broken open, reveals a cryptic prophecy from the bakery’s oracular ovens. Each cookie is baked with care by Oracula Bakery, ensuring that every message is both timely and slightly off-target, often better than expected but not always for you. The prophecies are so vague they can easily apply to anyone in the party, adding an element of mystery and intrigue to your next adventure.",
    "category": "services",
    "price": 360,
    "icon": "🥠",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Vague Prophecy",
      "Uncertain Audience"
    ],
    "vendor": "oracula",
    "shippedBy": "Baked Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vague Prophecy",
        "rules": "As a bonus action, you can break open the cookie to receive a single sentence of prophecy. The DM provides this cryptic message, which is both timely and slightly misleading, potentially applying to anyone in your party."
      },
      {
        "title": "Uncertain Audience",
        "rules": "There is a 5% chance that the prophecy delivered applies to someone else’s campaign or has no direct bearing on you. This effect lasts until you break open another cookie."
      }
    ],
    "levelRequirementReason": "The service requires minimal focus, allowing even the least experienced adventurers to partake.",
    "vendorReason": "Oracula Bakery is known for its enchanted pastries that can influence fate and fortune.",
    "shippingDetail": "Cookies are delivered fresh from Oracula Bakery, ensuring they retain their magical properties.",
    "usage": {
      "activation": "Bonus action to break open the cookie.",
      "duration": "Instantaneous; ends when you break another cookie.",
      "endsWhen": "You use your next turn without breaking another cookie.",
      "charges": "Unlimited"
    },
    "priceReason": "The service combines unique flavor and lore, making it a moderately priced yet memorable experience.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-22T22:41:53.583199+00:00",
    "aiReviewedAt": "2026-07-22T22:41:53.583199+00:00",
    "aiReviewVersion": 1
  },
  "oracula_fortune_cookie_machine": {
    "id": "oracula_fortune_cookie_machine",
    "name": "Oracula Fortune Cookie Machine",
    "description": "The Oracula Fortune Cookie Machine hums quietly as it molds and bakes each cookie, infusing them with cryptic prophecies that can either uplift or confound. Each day, it produces a dozen cookies, granting advantage on one check per cookie. However, the machine's output is unpredictable; some cookies are stale, causing bad breath for hours after consumption. This quirky contraption was crafted by Oracula Bakery Tools, known for their eccentric yet reliable appliances.",
    "category": "equipment",
    "price": 360,
    "icon": "🥠",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Advantage on One Check",
      "Unpredictable Cookies"
    ],
    "vendor": "oracula",
    "shippedBy": "Baked Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on One Check",
        "rules": "When a user activates the machine to produce cookies, they gain advantage on one check of their choice per cookie."
      },
      {
        "title": "Unpredictable Cookies",
        "rules": "Each fortune cookie has a 50% chance of being stale. If a cookie is stale, the user must succeed on a DC 12 Constitution saving throw or suffer disadvantage to Charisma-based checks for an hour."
      }
    ],
    "levelRequirementReason": "The machine's operation requires minimal dexterity and knowledge, making it accessible to all.",
    "vendorReason": "Oracula Bakery Tools is renowned for its innovative kitchen appliances that blend practicality with whimsy.",
    "shippingDetail": "Delivered fresh from the bakery within one day, these cookies are best enjoyed promptly upon arrival.",
    "usage": {
      "activation": "Standard Action to activate and produce a dozen cookies for the day.",
      "duration": "Instantaneous effect per cookie, lasting until used or consumed.",
      "endsWhen": "Cookies expire after an hour of being produced.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The machine offers a unique and valuable daily boost to checks without requiring constant maintenance or resources, making it moderately priced for its utility.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-22T22:42:10.675854+00:00",
    "aiReviewedAt": "2026-07-22T22:42:10.675854+00:00",
    "aiReviewVersion": 1
  },
  "oracula_god_summons": {
    "id": "oracula_god_summons",
    "name": "Oracula God Summoning (Major Deity)",
    "description": "The Oracula God Summoning is a ritualistic device forged from the bones of ancient gods and the whispers of their faithful. This relic allows you to invoke a Greater Deity, whose immense power will intervene in one pivotal event, be it political upheaval or combat. The deity's favor is immediate but comes with a cosmic price; they demand a service that must be offered within a year, failing which the debt grows exponentially.",
    "price": 360000,
    "icon": "⚡",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Summon a Greater Deity",
      "Immediate Divine Intervention"
    ],
    "vendor": "oracula_shrine",
    "shippedBy": "Cosmic Gate",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Deity Summons",
        "rules": "Activate as an action. The summoned deity intervenes in one event of your choice, providing direct and immediate assistance. This intervention lasts for the duration of the encounter or until the deity is satisfied with the outcome."
      },
      {
        "title": "Favor and Debt",
        "rules": "The deity's favor comes at a price; within one year, you must fulfill their demand, which could range from retrieving an artifact to performing a significant act of good. Failing this, the debt grows exponentially, potentially leading to dire consequences."
      }
    ],
    "levelRequirementReason": "Requires significant experience and understanding to properly invoke such powerful forces.",
    "vendorReason": "Oracula's shrine is known for its deep connections with the divine, making it a fitting vendor for this powerful artifact.",
    "shippingDetail": "Ships via the Cosmic Gate, ensuring swift delivery of the ritual device.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous, lasts until the deity is satisfied or until the event ends",
      "endsWhen": "The deity's intervention ceases upon satisfaction or if you fail to fulfill their demand within a year",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price considering its rarity and the immense power it commands.",
    "priceOriginal": 5000000,
    "priceReviewedAt": "2026-07-22T22:42:21.846620+00:00",
    "aiReviewedAt": "2026-07-22T22:42:21.846620+00:00",
    "aiReviewVersion": 1
  },
  "oracula_high_prophet_training": {
    "id": "oracula_high_prophet_training",
    "name": "Oracula High Prophet Training (Apprenticeship)",
    "description": "Under the watchful gaze of a true Oracula High Prophet, you spend six months immersed in ancient rites and oracular secrets. Your hands are guided by the very essence of divination, learning to channel the whispers of fate through sacred rituals and personal tutelage. Upon completion, your soul is forever touched by prophecy's flame, granting you permanent proficiency in Divination and Insight, as well as the ability to master one epic divination spell that becomes a part of your legacy.",
    "price": 30000,
    "icon": "🙏",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Divine Proficiency",
      "Epic Spell Mastery"
    ],
    "vendor": "oracula_shrine",
    "shippedBy": "Spiritual Pilgrimage",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Divine Proficiency",
        "rules": "Gain permanent proficiency in the Divination and Insight skills. This training enhances your ability to discern truth from falsehood."
      },
      {
        "title": "Epic Spell Mastery",
        "rules": "Learn one epic divination spell that you can cast once per long rest without expending a spell slot. The spell's level is equal to or lower than your character level."
      }
    ],
    "levelRequirementReason": "This training requires a deep understanding of the Oracula's secrets, accessible only to seasoned adventurers.",
    "vendorReason": "The Oracula Shrine houses the most revered Prophets capable of imparting such profound knowledge.",
    "shippingDetail": "Ships via a sacred convoy, delivered within one month by divine courier.",
    "usage": {
      "activation": "Passive effect upon completion of the apprenticeship.",
      "duration": "Permanent.",
      "endsWhen": "Exhausted upon completion; no recharges.",
      "charges": "Unlimited"
    },
    "priceReason": "The cost reflects a month-long training under an Oracula High Prophet, the time and resources invested in mastering epic divination.",
    "priceOriginal": 350000,
    "priceReviewedAt": "2026-07-22T22:42:23.375658+00:00",
    "aiReviewedAt": "2026-07-22T22:42:23.375658+00:00",
    "aiReviewVersion": 1
  },
  "oracula_memory_wipe": {
    "id": "oracula_memory_wipe",
    "name": "Oracula Memory Wipe (Total)",
    "description": "The Oracula Memory Wipe (Total) is a rare artifact crafted by Oracula herself. This ritual erases all personal memories prior to the last calendar year, leaving the target with a blank slate from their distant past. The process requires either the individual's willing cooperation or a successful DC 22 Wisdom saving throw to resist its effects. Once performed, the target is left as if they had just been born, free of old burdens and experiences.",
    "price": 360000,
    "icon": "🧹",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Total Memory Erasure",
      "Willing Participant Required"
    ],
    "vendor": "oracula_shrine",
    "shippedBy": "Psychic Dampener",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Memory Erasure",
        "rules": "The Oracula Memory Wipe (Total) is activated by a willing participant or a successful DC 22 Wisdom saving throw. Once the ritual is complete, all personal memories before the last calendar year are erased. The target gains no memory of this period and effectively starts their life anew."
      },
      {
        "title": "Willing Participant",
        "rules": "The procedure requires either the individual's cooperation or a successful Wisdom saving throw to resist its effects. If unwilling, the target must succeed on a DC 22 save or be subjected to the ritual without consent."
      }
    ],
    "levelRequirementReason": "This item is a godly rarity and requires at least level 1 to handle due to its potent magic.",
    "vendorReason": "Oracula, the keeper of time and memories, is the only one who can wield or provide this powerful artifact.",
    "shippingDetail": "Shipped via a Psychic Dampener to ensure safe delivery without interference from external entities.",
    "usage": {
      "activation": "Willing participant or successful DC 22 Wisdom saving throw",
      "duration": "Instantaneous",
      "endsWhen": "Charges are exhausted (limited use)",
      "charges": "Limited Use"
    },
    "priceReason": "The balanced XP price reflects the item's rarity and the significant memory alteration it effects.",
    "priceOriginal": 450000,
    "priceReviewedAt": "2026-07-22T22:42:17.170929+00:00",
    "aiReviewedAt": "2026-07-22T22:42:17.170929+00:00",
    "aiReviewVersion": 1
  },
  "oracula_prophecy_reading": {
    "id": "oracula_prophecy_reading",
    "name": "Oracula Prophecy Reading (Minor)",
    "description": "This ancient scroll is inscribed with cryptic runes and a smoky, ethereal glow emanates from it. Written by a low-ranking Oracular priest under the watchful gaze of the Oracle's Eye, this prophecy offers one true but enigmatic warning about an imminent peril that may befall you or your allies within the coming week. The scroll is made using sacred ink derived from the nectar of forgotten flowers blooming in the Oracula shrine’s hidden gardens.",
    "price": 1700,
    "icon": "🔮",
    "stock": 15,
    "rarity": "rare",
    "effects": [
      "Receive one true, if cryptic, prediction about a looming danger",
      "Prophecy's accuracy increases with the reader's understanding"
    ],
    "vendor": "oracula_shrine",
    "shippedBy": "Smoke & Incense",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "True Warning",
        "rules": "The prophecy offers a single, accurate but enigmatic warning about an imminent peril. The reader must use their wisdom saving throw (DC 13) to interpret the prophecy correctly. On a success, they learn of one specific danger that will occur within the next week."
      },
      {
        "title": "Enhanced Insight",
        "rules": "For each point by which the reader's Wisdom is higher than 10, the DC decreases by 1 when interpreting the prophecy."
      }
    ],
    "levelRequirementReason": "The scroll’s power lies in its interpretation and understanding rather than raw magical might.",
    "vendorReason": "Oracular priests are trained to decipher such scrolls, ensuring their accuracy and proper use.",
    "shippingDetail": "The scroll is carefully wrapped in a fragrant cloth that preserves its power during transit.",
    "usage": {
      "activation": "Read the prophecy as an action",
      "duration": "Instantaneous",
      "endsWhen": "Interpretation of the prophecy or until a new reading is sought",
      "charges": "Unlimited"
    },
    "priceReason": "The scroll requires careful handling and interpretation, making it moderately priced but not excessively so.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T22:42:26.162953+00:00",
    "aiReviewedAt": "2026-07-22T22:42:26.162953+00:00",
    "aiReviewVersion": 1
  },
  "oracula_prophet_ascension": {
    "id": "oracula_prophet_ascension",
    "name": "Oracula Prophet Ascension (Minor)",
    "description": "The Oracula Prophet Ascension is a minor artifact crafted by the Oracula, an ancient and revered seer lineage. This small, glowing stone allows its bearer to glimpse the future for brief moments: once per day, you may witness events unfolding one hour hence. Its power lies not merely in foresight but also in enhancing your keenness of observation; it grants +2 to all Insight and Perception checks, making you a master of subtlety and intuition.",
    "price": 30000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Foresight",
      "Enhanced Observation"
    ],
    "vendor": "oracula_shrine",
    "shippedBy": "Celestial Courier",
    "levelRequirement": 16,
    "factionBonus": {
      "insight": 30
    },
    "effectDetails": [
      {
        "title": "Foresight",
        "rules": "You gain a truthful vision of events one hour in the future. This effect is instantaneous upon activation but lasts only until the start of your next turn. You must make an Insight check against DC 15 to interpret what you see accurately."
      },
      {
        "title": "Enhanced Observation",
        "rules": "+2 to all Insight and Perception checks, which do not expend any uses or charges. This bonus is always active while the artifact is worn."
      }
    ],
    "levelRequirementReason": "This item requires a high level of focus and discipline, aligning it with characters who have reached at least 16th level.",
    "vendorReason": "The Oracula Shrine is the sacred home of seers like the Oracula lineage, thus fitting as the vendor for this artifact.",
    "shippingDetail": "Delivered by a swift celestial courier, ensuring the item arrives at your doorstep in perfect condition.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "At the start of your next turn",
      "charges": "Uses (1/Day)"
    },
    "priceReason": "This item represents a valuable, albeit minor, enhancement for high-level characters seeking to augment their investigative and intuitive abilities.",
    "priceOriginal": 550000,
    "priceReviewedAt": "2026-07-22T22:42:32.339169+00:00",
    "aiReviewedAt": "2026-07-22T22:42:32.339169+00:00",
    "aiReviewVersion": 1
  },
  "oracula_prophetic_shield": {
    "id": "oracula_prophetic_shield",
    "name": "Oracular Prophetic Shield",
    "description": "The Oracular Prophetic Shield is a divine shield that whispers the future. Crafted by Oracula herself, it subtly shifts its configuration fractions of a second before an attack lands, making it a beacon of protection against impending harm. Its surface gleams with runes that glow faintly, revealing glimpses of fate. This shield can be relied upon to grant advantage on a single saving throw or AC against one incoming attack as a reaction.",
    "price": 370000,
    "icon": "🛡️",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "Divine Defense",
      "Fate's Whisper"
    ],
    "vendor": "oracula_shrine",
    "shippedBy": "Sacred Carving",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Divine Defense",
        "rules": "When an attacker targets the user, the shield can be used as a reaction to grant the user advantage on their next saving throw or AC against that attack. This effect can be used up to three times per long rest."
      },
      {
        "title": "Fate's Whisper",
        "rules": "The shield emits an ethereal hum when it deflects or absorbs damage, providing a subtle warning of impending danger. This feature is always active and does not consume charges or actions."
      }
    ],
    "levelRequirementReason": "Only those with the wisdom and power to harness fate can wield this divine shield.",
    "vendorReason": "Oracula's shrine is known for its offerings of sacred artifacts imbued with her divine protection.",
    "shippingDetail": "Ships within the week, delivered by a courier adorned in celestial symbols.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends after three uses per long rest or when the shield is destroyed",
      "charges": "3/long rest"
    },
    "priceReason": "Balanced to reflect its divine craftsmanship and limited utility in combat.",
    "priceOriginal": 400000,
    "priceReviewedAt": "2026-07-22T22:42:36.018583+00:00",
    "aiReviewedAt": "2026-07-22T22:42:36.018583+00:00",
    "aiReviewVersion": 1
  },
  "oracula_seer_bedsheet": {
    "id": "oracula_seer_bedsheet",
    "name": "Oracula Seer Bedsheet",
    "description": "The Oracula Seer Bedsheet is a tattered relic of ghostly origin, with strategically cut eye holes that frame your visage. This spectral sheet grants you an ethereal guise, lending advantage on Intimidation checks against those easily spooked by the supernatural. However, in gusty conditions or when exposed to direct sunlight, the sheet flutters and shifts, providing disadvantageous circumstances for all checks requiring concentration. It's a whimsical relic from Oracula's Costume Shop, known for its eccentric wares.",
    "category": "equipment",
    "price": 58,
    "icon": "👻",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Ghostly Guise",
      "Weather Vulnerability"
    ],
    "vendor": "oracula",
    "shippedBy": "Bedsheet Ghost Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ghostly Guise",
        "rules": "When you wear the Oracula Seer Bedsheet and make an Intimidation check against a superstitious creature, you gain advantage on the roll. This effect ends if you stop wearing it or when the target is no longer considered superstitious."
      },
      {
        "title": "Weather Vulnerability",
        "rules": "When exposed to windy conditions or direct sunlight, you are at disadvantage on all checks and saving throws requiring concentration for 1 minute per hour of exposure. This effect ends once the weather condition changes or you remove the sheet."
      }
    ],
    "levelRequirementReason": "This item is a common utility for adventurers just starting their journey.",
    "vendorReason": "Oracula's Costume Shop specializes in quirky and functional accessories, making this ghostly relic a fitting addition to their inventory.",
    "shippingDetail": "The sheet is delivered folded neatly within a shadowy envelope.",
    "usage": {
      "activation": "Equipping the sheet as an action",
      "duration": "Instantaneous (effect lasts until removed or weather condition changes)",
      "endsWhen": "Removing the sheet, target no longer considered superstitious, or exposure to windy conditions ends",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a common price point for its utility and thematic value.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T22:42:38.695709+00:00",
    "aiReviewedAt": "2026-07-22T22:42:38.695709+00:00",
    "aiReviewVersion": 1
  },
  "oracula_truth_serum": {
    "id": "oracula_truth_serum",
    "name": "Oracula Truth Serum (Potent)",
    "description": "Oracula’s Truth Serum (Potent) is a potent, glowing vial of amber liquid that forces complete and unedited verbal honesty from its target. The serum's potency comes from Oracula’s sacred herbs and ancient magic, making it a rare and powerful tool for interrogations and truth-telling rituals. Once consumed, the subject must succeed on a DC 20 Wisdom saving throw or reveal all known information about themselves to any present party members.",
    "price": 30000,
    "icon": "🧪",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Compels Absolute Truth",
      "Permanent Revelation"
    ],
    "vendor": "oracula_shrine",
    "shippedBy": "Crystal Decanter",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Compels Absolute Truth",
        "rules": "The target must succeed on a DC 20 Wisdom saving throw or reveal all known information about themselves to any present party members. The effect is instantaneous and does not require an action from the user."
      },
      {
        "title": "Permanent Revelation",
        "rules": "Once the truth is revealed, it remains so even after the effect wears off; no further information can be hidden by the target regarding what was revealed during the serum's duration. This effect has no save DC and lasts until the end of the encounter."
      }
    ],
    "levelRequirementReason": "The potion requires a basic understanding of its effects to use responsibly.",
    "vendorReason": "Oracula herself ensures that her sacred serum is administered only by those who respect her teachings.",
    "shippingDetail": "Delivered within the hour via an Oracular courier, ensuring safe and timely delivery of this potent liquid.",
    "usage": {
      "activation": "Consume the vial as a bonus action.",
      "duration": "Instantaneous effect; permanent revelation.",
      "endsWhen": "The target's truth is revealed to party members or until the end of the encounter, whichever comes first.",
      "charges": "Unlimited"
    },
    "priceReason": "The serum’s rarity and potency justify a price that reflects its value in both magical and mundane contexts.",
    "priceOriginal": 85000,
    "priceReviewedAt": "2026-07-22T22:42:41.045971+00:00",
    "aiReviewedAt": "2026-07-22T22:42:41.045971+00:00",
    "aiReviewVersion": 1
  },
  "oracula_vampire_fang_cleaning_service": {
    "id": "oracula_vampire_fang_cleaning_service",
    "name": "Oracula Vampire Fang Cleaning Service",
    "description": "The Oracula Vampire Fang Cleaning Service is a meticulously crafted kit that rejuvenates your fangs for the undead. After its application, you gain +1 damage on bite attacks for 24 hours and an advantage on Intimidation checks when using a smile to strike fear into others. This service is only made by the renowned Bat Dentists of Oracula Castle, ensuring your teeth sparkle with an eerie brilliance that can be both dazzling and intimidating.",
    "price": 370,
    "icon": "🦷",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Bite Attack Boost",
      "Intimidating Smile"
    ],
    "vendor": "oracula_castle",
    "shippedBy": "Coffin Kit Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bite Attack Boost",
        "rules": "Until the end of your next long rest, you gain +1 bonus to damage rolls on bite attacks. This effect does not stack with other sources of attack damage."
      },
      {
        "title": "Intimidating Smile",
        "rules": "You have advantage on Intimidation checks when using a smile as part of the interaction. This effect lasts for 24 hours after you use this service."
      }
    ],
    "levelRequirementReason": "This service is designed for adventurers of all levels, providing immediate benefits without requiring high character level.",
    "vendorReason": "Oracula Castle's Bat Dentists are the most trusted source for dental care in the region, renowned for their expertise and unparalleled quality.",
    "shippingDetail": "Delivered by Coffin Kit Express, known for its reliable and timely service to all corners of the realm.",
    "usage": {
      "activation": "Instantaneous use; apply once per day.",
      "duration": "24 hours or until used in combat.",
      "endsWhen": "At the end of your next long rest or when you are no longer undead.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The service is priced at 1000 XP, reflecting its unique and highly sought-after benefits in enhancing both combat effectiveness and social interactions.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-22T22:42:47.305494+00:00",
    "aiReviewedAt": "2026-07-22T22:42:47.305494+00:00",
    "aiReviewVersion": 1
  },
  "oracula_vampiric_capelet": {
    "id": "oracula_vampiric_capelet",
    "name": "Oracula Vampiric Capelet",
    "description": "The Oracula Vampiric Capelet is a velvet capelet with bat-wing lining, crafted by Night Tailors from the shadowed halls of Oracula Castle. By day, it's an elegant accessory, but at night, it transforms into a conduit for supernatural abilities, allowing its wearer to glide silently and gracefully within the darkened realms. The capelet attracts bats, which can be either helpful scouts providing intelligence or pesky nuisances depending on your needs.",
    "price": 600,
    "icon": "🧥",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Night Glide",
      "Bat Attraction"
    ],
    "vendor": "oracula_castle",
    "shippedBy": "Blood-Red Fold",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Night Glide",
        "rules": "As a bonus action at night, the wearer of the Oracula Vampiric Capelet can activate this ability. For up to 1 minute, they gain a +2 bonus to Dexterity (Acrobatics) checks and can glide up to 30 feet as part of their movement without falling prone."
      },
      {
        "title": "Bat Attraction",
        "rules": "Once per day, the wearer can activate this ability by speaking the word 'summon' in a low whisper. Bats within 60 feet are drawn towards them for up to 1 hour or until they have attracted at least one bat, whichever comes first."
      }
    ],
    "levelRequirementReason": "Requires proficiency with Stealth checks.",
    "vendorReason": "Oracula Castle is renowned for its arcane craftsmanship and ties to the night world.",
    "shippingDetail": "Delivered by owl post, ensuring quick arrival at dusk.",
    "usage": {
      "activation": "Bonus action or reaction (for glide), verbal command (for bat attraction)",
      "duration": "1 minute (glide), 1 hour (bat attraction) or until dismissed",
      "endsWhen": "Ends when the duration expires, is dismissed with a verbal command, or the wearer is incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price for an item that offers both combat and utility benefits.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-22T22:42:51.365867+00:00",
    "aiReviewedAt": "2026-07-22T22:42:51.365867+00:00",
    "aiReviewVersion": 1
  },
  "orange_paint_of_aggressive_visibility": {
    "id": "orange_paint_of_aggressive_visibility",
    "name": "Orange Paint of Aggressive Visibility",
    "description": "Orange Paint of Aggressive Visibility turns you into a beacon of neon brilliance, making you nearly impossible to miss. Your visibility is so extreme that enemies suffer disadvantage on attack rolls against you and can't use Stealth within a mile. Workers in orange uniforms are compelled to wave at you as you pass by. This paint is the signature product of High Visibility Paint Co., known for their innovations in safety and visibility.",
    "category": "equipment",
    "price": 370,
    "icon": "🎨",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Blinding Neon Glow",
      "Stealth Disabled"
    ],
    "vendor": "team_magma_supply",
    "shippedBy": "Safety Cone Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blinding Neon Glow",
        "rules": "Enemies within 60 feet have disadvantage on attack rolls against you. You are visible from a mile away, and your Stealth check is made at disadvantage."
      },
      {
        "title": "Stealth Disabled",
        "rules": "You can't use the Stealth skill while wearing this paint. The effect lasts until the end of your next long rest or when you remove the paint."
      }
    ],
    "levelRequirementReason": "This item is designed for characters who need immediate, high-visibility assistance without needing a specific level to use it.",
    "vendorReason": "Team Magma Supply specializes in equipment that keeps adventurers safe and seen, making this paint an ideal product for them.",
    "shippingDetail": "Ships via a fleet of bright orange safety cones, ensuring the package is as visible as its contents.",
    "usage": {
      "activation": "Instantaneous application; activation occurs when you first apply the paint.",
      "duration": "Until the end of your next long rest or when you remove the paint.",
      "endsWhen": "At the end of your next long rest or when you remove the paint.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This price reflects the item's high visibility and unique effects, ensuring it is a reasonable cost for adventurers needing immediate attention.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-22T22:42:53.301508+00:00",
    "aiReviewedAt": "2026-07-22T22:42:53.301508+00:00",
    "aiReviewVersion": 1
  },
  "orb_of_snowglobe": {
    "id": "orb_of_snowglobe",
    "name": "Orb of Snowglobe",
    "description": "The Orb of Snowglobe is a frost-kissed sphere, no larger than your palm. When shaken, it releases a flurry of crystalline snow within a ten-foot radius around you, blanketing the ground and cloaking creatures in soft concealment for one minute. The miniature town inside is a frozen replica of a legendary winter village, complete with tiny ice sculptures and animated figurines that dance to the rhythm of your whimsy. Its calming presence can soothe nearby beasts, bringing them peace when shaken three times consecutively.",
    "category": "curiosities",
    "price": 370,
    "icon": "❄️",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Snowfield",
      "Beast Calm"
    ],
    "vendor": "glow_merchant",
    "shippedBy": "Frostwing Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Snowfield",
        "rules": "When the Orb of Snowglobe is shaken, it creates a localized snowfall within a 10-foot radius centered on you. This snowfall reduces all movement speeds by half and grants concealment to creatures in its area for 1 minute. The effect ends if the orb is shaken again or if an attack hits any creature within the area."
      },
      {
        "title": "Beast Calm",
        "rules": "Shake the Orb three times, and it emits a soothing resonance that calms nearby beasts. Creatures within a 30-foot radius must succeed on a Wisdom saving throw (DC 12) or become charmed by the orb for 1 hour. This effect ends if the orb is shaken more than three times consecutively."
      }
    ],
    "levelRequirementReason": "The Orb of Snowglobe requires no level to use, as its effects are whimsical and beneficial in social situations.",
    "vendorReason": "Glow Merchant specializes in unique curiosities that can enhance the narrative and atmosphere of any adventure, making the Orb a perfect addition to their stock.",
    "shippingDetail": "Ships via Frostwing Express, known for its swift delivery through even the iciest conditions. The orb remains frozen during transit.",
    "usage": {
      "activation": "Shake the Orb of Snowglobe to activate an effect.",
      "duration": "The effects last until their duration ends or is interrupted.",
      "endsWhen": "Each effect ends when its duration expires, or if the orb is shaken more than once consecutively for the same effect.",
      "charges": "Unlimited uses; the orb regenerates after a short rest."
    },
    "priceReason": "The price reflects the item's unique design and magical properties, providing it with a fair value in exchange for its whimsical effects.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-22T22:42:59.173759+00:00",
    "aiReviewedAt": "2026-07-22T22:42:59.173759+00:00",
    "aiReviewVersion": 1
  },
  "order_silver_judgement_gavel": {
    "id": "order_silver_judgement_gavel",
    "name": "Order of Silver's Judgement Gavel",
    "description": "The Order of Silver's Judgement Gavel is a ceremonial gavel crafted from enchanted silver. It whispers to those who wield it, compelling them to seek justice and truth in their rulings. The gavel can be struck upon a surface, compelling one creature within earshot to tell the truth (WIS save DC 16), and once per week, it may pass sentence on a proven guilty individual, binding them with a Geas that lasts for one month.",
    "category": "equipment",
    "price": 6300,
    "icon": "🔨",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Compel Truth",
      "Pass Sentence"
    ],
    "vendor": "Order Silver",
    "shippedBy": "Armored Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Compel Truth",
        "rules": "The wielder can strike the gavel upon a surface to compel one creature within 30 feet to make a Wisdom saving throw. On a failed save, the creature must tell the truth about any question posed by the wielder until it is dispelled."
      },
      {
        "title": "Pass Sentence",
        "rules": "Once per week, the wielder can use the gavel to pass sentence on a creature they have proven guilty. The target must succeed on a Wisdom saving throw (DC 16) or be bound by a Geas that lasts for one month. The Geas imposes the wielder's command until it is dispelled."
      }
    ],
    "levelRequirementReason": "The gavel requires a wielder of at least 5th level to ensure they can handle its weight on their soul and mind.",
    "vendorReason": "As the creators of this sacred tool, Order Silver ensures only those who are capable and dedicated receive it.",
    "shippingDetail": "Delivered by armored couriers with strict security measures to ensure the gavel's safe arrival.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (Compel Truth), one month (Pass Sentence)",
      "endsWhen": "The effect of Compel Truth is dispelled, or Pass Sentence is completed and the Geas ends.",
      "charges": "2 uses per day"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its rarity and limited utility without being overpowered.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-22T22:43:03.614859+00:00",
    "aiReviewedAt": "2026-07-22T22:43:03.614859+00:00",
    "aiReviewVersion": 1
  },
  "order_silver_silver_forge_furnace": {
    "id": "order_silver_silver_forge_furnace",
    "name": "Order Silver Silver Forge Furnace",
    "description": "The Order Silver Silver Forge Furnace is a gleaming, handcrafted furnace that hums with the holy silver of the Silver Forgers' order. Its glowing surface radiates an ethereal, silvery light that purifies and refines metals with every use. Crafted from sacred silver, this furnace not only melts silver safely but also infuses it into your warding recipes, granting +1 to their effectiveness. The furnace's holy glow ensures that the metalwork it produces is imbued with divine purity, making it a must-have for any alchemist or adventurer seeking to craft items of exceptional sanctity.",
    "category": "equipment",
    "price": 370,
    "icon": "🍪",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Holy Silver Purification",
      "Enhanced Warding Recipes"
    ],
    "vendor": "order_silver_temple",
    "shippedBy": "Shiny Silver Shipment",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Holy Silver Purification",
        "rules": "When the furnace is used, it purifies silver and other metals within a 10-foot radius. This effect lasts for an hour or until the next dawn. The purification removes any impurities, making the metal suitable for crafting divine artifacts or holy items without additional effort."
      },
      {
        "title": "Enhanced Warding Recipes",
        "rules": "For one hour after using the furnace, you gain a +1 bonus to your Arcana checks when attempting to craft warding recipes. This effect ends once it is used or at the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This furnace can be operated by any character who has completed basic forge training, making it accessible to all adventurers.",
    "vendorReason": "The Order Silver Temple is responsible for the creation and distribution of sacred silver goods, including this unique furnace.",
    "shippingDetail": "Items are carefully packed with holy symbols to ensure safe delivery. Shipping time can vary based on divine intervention.",
    "usage": {
      "activation": "A bonus action is required to activate the furnace for purification and recipe enhancement.",
      "duration": "The effects last for one hour or until the next dawn.",
      "endsWhen": "The effect ends when used or at the end of your next long rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This furnace is priced moderately due to its holy silver construction and unique purification properties, making it a valuable tool for adventurers and alchemists alike.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T22:43:21.466091+00:00",
    "aiReviewedAt": "2026-07-22T22:43:21.466091+00:00",
    "aiReviewVersion": 1
  },
  "order_silver_silver_frost_icing_cookies_recipe": {
    "id": "order_silver_silver_frost_icing_cookies_recipe",
    "name": "Recipe: Order Silver Silver Frost Icing Cookies",
    "description": "Order Silver's secret recipe for Frost Icing Cookies is a treat that not only pleases the palate but also protects against lycanthropy. These cookies are made with purifying silver icing, crafted by the Silver Order Bakers to ward off beasts and creatures of the night. Each cookie contains a trace of silver, making them more than just a sweet snack; they're a safeguard for those who consume them.",
    "price": 370,
    "icon": "🍪",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Silver Purification",
      "Warding Cookie"
    ],
    "vendor": "order_silver_temple",
    "shippedBy": "Frosty Frost File",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silver Purification",
        "rules": "Eating one cookie grants you advantage on saving throws against lycanthropy and were-creatures for the next three hours. The effect ends when the duration expires."
      },
      {
        "title": "Warding Cookie",
        "rules": "The silver icing in these cookies provides a minor warding effect, reducing the chance of being affected by beasts or similar creatures by +1 to your saving throws. This benefit lasts for 24 hours and is not cumulative with other similar effects."
      }
    ],
    "levelRequirementReason": "This recipe can be learned by any character, providing a simple yet effective protective measure.",
    "vendorReason": "The Silver Order Bakers are the custodians of this secret recipe and ensure it remains available to those in need of protection.",
    "shippingDetail": "Delivered with a special insulated box to maintain the cookies' integrity during transport.",
    "usage": {
      "activation": "Eating one cookie",
      "duration": "3 hours for Silver Purification; 24 hours for Warding Cookie",
      "endsWhen": "Duration expires or effect is countered by an opposing magic effect",
      "charges": "Unlimited"
    },
    "priceReason": "The silver used in the cookies and their protective effects justify a price of 1,000 XP.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T22:43:07.574865+00:00",
    "aiReviewedAt": "2026-07-22T22:43:07.574865+00:00",
    "aiReviewVersion": 1
  },
  "order_silver_silver_thread_gloves": {
    "id": "order_silver_silver_thread_gloves",
    "name": "Order Silver Silver Thread Gloves",
    "description": "The Order Silver Silver Thread Gloves are woven from a rare, malleable silver alloy and enchanted by the Silver Order to purify and protect their initiates. These gloves not only enhance attacks against were-creatures but also emit a faint glow when silver weakness is present in nearby creatures. However, prolonged exposure to humid environments causes the silver threads to tarnish, reducing the gloves' effectiveness until they are dried under direct sunlight.",
    "category": "equipment",
    "price": 1700,
    "icon": "🧤",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Enhanced Attacks vs Were-creatures",
      "Detect Silver Weakness"
    ],
    "vendor": "order_silver_temple",
    "shippedBy": "Silver Messenger Hawks",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Enhanced Attacks vs Were-creatures",
        "rules": "When used to make a melee attack against a were-creature, the wearer gains a +1 bonus to the attack roll. This effect lasts until the end of the wearer's next turn."
      },
      {
        "title": "Detect Silver Weakness",
        "rules": "The gloves emit a faint silvery glow when they detect a creature with silver weakness within 30 feet, providing a +2 insight bonus to Perception checks made to notice this weakness. This effect lasts for 1 minute and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "These gloves are crafted specifically for initiates of the Silver Order who have begun their training in combat.",
    "vendorReason": "The order's temple is well-known for its production and distribution of enchanted equipment, including these unique gloves.",
    "shippingDetail": "Ships via messenger hawk with a delivery time of 1-2 days within the realm.",
    "usage": {
      "activation": "Instantaneous use to activate attacks or Perception checks.",
      "duration": "Until end of next turn or until the effect is used up.",
      "endsWhen": "The effect ends when the attack roll is made, a new check is needed, or after 1 minute for Perception checks.",
      "charges": "Unlimited uses per day, recharged at dawn."
    },
    "priceReason": "Balanced to reflect their unique enchantments and rarity without being overpowered.",
    "priceOriginal": 17000,
    "priceReviewedAt": "2026-07-22T22:43:40.210945+00:00",
    "aiReviewedAt": "2026-07-22T22:43:40.210945+00:00",
    "aiReviewVersion": 1
  },
  "order_silver_sword_blessing_premium": {
    "id": "order_silver_sword_blessing_premium",
    "name": "Order Silver Sword Blessing (Premium)",
    "description": "The Order Silver Sword Blessing (Premium) gleams with a holy light that intensifies when near undead foes, its blade shimmering with blessed silver. When engaged in combat against darkness, this weapon delivers an extra +1d4 damage and glows ominously around evil entities, making it a beacon of light in the shadowy battlefields. The sword's blessing fades into obscurity within areas shrouded by night or darkness magic, ensuring its power is not wasted in dim environments.",
    "price": 1700,
    "icon": "⚔️",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Holy Blade +1d4 vs. Undead",
      "Ominous Glow Against Evil"
    ],
    "vendor": "order_silver_temple",
    "shippedBy": "Holy Sheath Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Holy Blade +1d4 vs. Undead",
        "rules": "When the Order Silver Sword Blessing (Premium) strikes an undead creature, it deals an additional +1d4 damage. This effect is active for one day after each use and can be activated as a bonus action."
      },
      {
        "title": "Ominous Glow Against Evil",
        "rules": "The sword emits a bright glow that intensifies in the presence of evil creatures, providing advantage on Wisdom (Perception) checks to detect such entities. This effect is active for one minute and can be activated as a bonus action."
      }
    ],
    "levelRequirementReason": "The sword's divine blessing requires a character of at least level 7 to channel its holy power effectively.",
    "vendorReason": "This temple is renowned for crafting sacred artifacts that protect against darkness, and the Order Silver Sword Blessing (Premium) is a prime example of their craftsmanship.",
    "shippingDetail": "Ships via Holy Sheath Express, ensuring swift delivery to the devout warrior.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "One Minute/Day",
      "endsWhen": "At the start of your next turn after being used or when you enter an area without darkness magic",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "The sword's divine crafting and holy properties justify its cost of 1000 XP.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-22T22:43:31.219227+00:00",
    "aiReviewedAt": "2026-07-22T22:43:31.219227+00:00",
    "aiReviewVersion": 1
  },
  "overwatch_tracer_blink": {
    "id": "overwatch_tracer_blink",
    "name": "Blink Device",
    "description": "The Blink Device, a sleek and compact gadget made from advanced alloy and pulsating with energy, allows you to teleport short distances in an instant. Crafted by the Tech Device in collaboration with comet observatories, it's a marvel of modern engineering that has been used by many to evade danger or escape tight spots. With this device, you can instantly vanish and reappear 15 feet away, but be wary of the time distortion effects it produces.",
    "category": "equipment",
    "price": 6300,
    "icon": "⚡",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Teleport",
      "Recall"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Tech Device Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Teleport",
        "rules": "As a bonus action, you can teleport up to 15 feet in any direction. You can use this ability three times per short rest and must finish a short or long rest before using more charges."
      },
      {
        "title": "Recall",
        "rules": "Once per day, as an action, you can recall the location where you last used your Blink Device and teleport to that spot. This effect is instantaneous but does not count towards the daily charge limit."
      }
    ],
    "levelRequirementReason": "This device requires a certain level of technological proficiency to operate safely.",
    "vendorReason": "Comet Observatory, with its deep ties to advanced technology and engineering, is the perfect vendor for such a gadget.",
    "shippingDetail": "Delivered within one hour of purchase if you're in a major city, otherwise overnight delivery.",
    "usage": {
      "activation": "Bonus action or action (Recall)",
      "duration": "Instantaneous (Recall); until next short/long rest (Teleport)",
      "endsWhen": "Charges are exhausted; daily limit reached",
      "charges": "3 charges per short rest, unlimited uses with a long rest"
    },
    "priceReason": "Balanced at this price to reflect the gadget's utility and rarity.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-22T22:43:33.072543+00:00",
    "aiReviewedAt": "2026-07-22T22:43:33.072543+00:00",
    "aiReviewVersion": 1
  },
  "p_down_d_up_badge": {
    "id": "p_down_d_up_badge",
    "name": "P-Down, D-Up Badge",
    "description": "The P-Down, D-Up Badge is a small, intricately designed metal pendant that subtly shifts your combat style. When worn, it lowers your attack power by two, but in exchange boosts your AC by four—a true testament to the wisdom of turtle strategy. Crafted from ancient, enchanted steel, its origins are shrouded in lore, and it only works for those who truly understand the balance between offense and defense.",
    "category": "equipment",
    "price": 370,
    "icon": "🛡️",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "-2 to Damage rolls",
      "+4 AC"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Swiftwind Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reduced Attack Power",
        "rules": "Activates as a bonus action, reducing all damage rolls by 2 until the start of your next turn. This effect has no save DC and can be used once per short or long rest."
      },
      {
        "title": "Enhanced Defense",
        "rules": "Passively increases AC by 4 while worn, providing continuous protection regardless of actions taken. This enhancement does not require a saving throw and remains active as long as the badge is worn."
      }
    ],
    "levelRequirementReason": "This badge requires no minimum level because it simplifies your combat approach rather than enhancing raw power.",
    "vendorReason": "The Gilded Gryphon specializes in items that enhance strategy and tactical prowess, making this badge a perfect fit for their inventory.",
    "shippingDetail": "Ships via Swiftwind Express within the kingdom, ensuring swift delivery.",
    "usage": {
      "activation": "Bonus action to reduce damage rolls by two.",
      "duration": "Until the start of your next turn.",
      "endsWhen": "At the start of your next turn.",
      "charges": "Unlimited"
    },
    "priceReason": "The badge’s balanced mechanics and strategic value justify its lower price point, making it accessible to players seeking tactical advantages.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-22T22:43:46.505058+00:00",
    "aiReviewedAt": "2026-07-22T22:43:46.505058+00:00",
    "aiReviewVersion": 1
  },
  "p_up_d_down_badge": {
    "id": "p_up_d_down_badge",
    "name": "P-Up, D-Down Badge",
    "description": "The P-Up, D-Down Badge gleams with a dual-colored sheen that flickers between shades of steel and emerald green. This badge is said to have been crafted in the heart of the Rogueport forge by blacksmiths who revered both strength and vulnerability. When worn, it sharpens your blade, granting +2 damage on melee attacks—each strike feels heavier, more potent—but at a cost: you lose 2 points of AC, leaving you slightly exposed. Berserkers favor this badge for its raw power, knowing that in the heat of battle, defense is secondary to dominance.",
    "category": "equipment",
    "price": 370,
    "icon": "⚔️",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "+2 Damage",
      "-2 AC"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Aggressive Mail",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Enhanced Strikes",
        "rules": "Activate as a bonus action. Increases damage on melee attacks by +2 until the start of your next turn. This effect ends if you are incapacitated."
      },
      {
        "title": "Vulnerability",
        "rules": "-2 to AC while wearing this badge. This penalty remains active for 1 minute, though it can be ended early with a successful DC 15 Constitution saving throw."
      }
    ],
    "levelRequirementReason": "This badge is designed for those who have proven their prowess in combat and can afford the risk of reduced defense.",
    "vendorReason": "The Rogueport Black Market specializes in items tailored to the unique needs of its clientele, including the intense demands of berserkers and martial artists.",
    "shippingDetail": "Ships via Aggressive Mail within a week. Requires a signature upon delivery due to the badge's high value.",
    "usage": {
      "activation": "Bonus action at the start of your turn.",
      "duration": "1 minute, or until you are incapacitated.",
      "endsWhen": "You take damage, become incapacitated, or remove the badge.",
      "charges": "Unlimited uses per short rest."
    },
    "priceReason": "The balanced price reflects the badge's unique combination of attack boost and defense penalty, aligning with the item's niche utility in specific combat scenarios.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-22T22:44:09.850084+00:00",
    "aiReviewedAt": "2026-07-22T22:44:09.850084+00:00",
    "aiReviewVersion": 1
  },
  "pacman_power_pellet": {
    "id": "pacman_power_pellet",
    "name": "Power Pellet",
    "description": "The Power Pellet is a glowing red sphere, emanating a faint ethereal hum. It's said to have been crafted in the depths of the Underdark by ancient ghost hunters. When consumed, it turns nearby ghosts vulnerable for a fleeting moment, allowing you to unleash a devastating chomp attack that deals 2d6 force damage to them. This tiny power packs a punch, granting you an additional 10 feet of movement speed during its effect.",
    "category": "consumables",
    "price": 370,
    "icon": "🔴",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Turns Ghosts Vulnerable",
      "Speed Boost"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Pellet Jar Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Turns Ghosts Vulnerable",
        "rules": "When consumed, the Power Pellet causes all nearby ghosts to become vulnerable for 1 minute. This effect lasts until a ghost successfully makes a Constitution saving throw (DC 13) or until the duration expires."
      },
      {
        "title": "Speed Boost",
        "rules": "Upon consuming the pellet, you gain a +10 feet bonus to your walking speed for the duration of its effect. This boost ends when the vulnerability effect ends."
      }
    ],
    "levelRequirementReason": "The Power Pellet's effects are potent enough that even low-level adventurers can benefit from it.",
    "vendorReason": "The Rogue Port Black Market is known for its variety of exotic and powerful items, including the rare and valuable Power Pellets.",
    "shippingDetail": "Ships overnight via Pellet Jar Express, ensuring the integrity of the pellets upon arrival.",
    "usage": {
      "activation": "Eaten as a bonus action.",
      "duration": "1 minute or until a ghost saves against vulnerability effect.",
      "endsWhen": "A ghost successfully saves or 1 minute passes.",
      "charges": "Unlimited"
    },
    "priceReason": "The Power Pellet is moderately priced due to its effectiveness and versatility, making it a worthwhile addition to any adventurer's inventory.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T22:44:13.148583+00:00",
    "aiReviewedAt": "2026-07-22T22:44:13.148583+00:00",
    "aiReviewVersion": 1
  },
  "padded_shoulder_gear_for_wario": {
    "id": "padded_shoulder_gear_for_wario",
    "name": "Wario's Shoulder Bash Pad",
    "description": "Wario's Shoulder Bash Pad is a reinforced, padded armor piece that amplifies his signature charge attack. Crafted by Wario's Bash Workshop using resilient materials from the Mushroom Kingdom, this pad not only enhances his physical strikes but also adds a comical yet functional squeak to each bash. The pad provides +1 AC during shoulder strikes and allows for an additional bonus action bash dealing 1d6 bludgeoning damage with knockback of 5 feet, requiring a Strength saving throw (DC 13) to avoid.",
    "category": "equipment",
    "price": 370,
    "icon": "🛡️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Bash as Bonus Action",
      "Enhanced Shoulder Strike"
    ],
    "vendor": "wario_land",
    "shippedBy": "Bashy Bundle Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bash as Bonus Action",
        "rules": "When Wario uses this item, he can make a bonus action bash. This attack deals 1d6 bludgeoning damage and knocks the target back 5 feet. The attacker must succeed on a Strength saving throw (DC 13) or be knocked prone."
      },
      {
        "title": "Enhanced Shoulder Strike",
        "rules": "+1 AC is granted to Wario during any shoulder strike action taken while wearing this pad, enhancing his physical resilience in combat."
      }
    ],
    "levelRequirementReason": "This item's activation and utility are suitable for novice adventurers who may benefit from a reliable tool like the Shoulder Bash Pad.",
    "vendorReason": "Wario Land is known for selling equipment that enhances his signature moves, making this pad an obvious addition to their inventory.",
    "shippingDetail": "Ships via Bashy Bundle Express, ensuring quick delivery right before Wario's next charge.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the pad is no longer being used in a shoulder strike action.",
      "charges": "Unlimited"
    },
    "priceReason": "This Shoulder Bash Pad offers enhanced combat utility at a cost that reflects its niche but powerful application.",
    "priceOriginal": 13000,
    "priceReviewedAt": "2026-07-22T22:44:06.881509+00:00",
    "aiReviewedAt": "2026-07-22T22:44:06.881509+00:00",
    "aiReviewVersion": 1
  },
  "paint_star_prism": {
    "id": "paint_star_prism",
    "name": "Prisma Fountain",
    "description": "The Prisma Fountain is a whimsical, glassy instrument adorned with iridescent paint. It exudes an ever-changing rainbow of hues that can reanimate 'Colorless' allies or alter terrain in a burst of color. With a flick of its handle, you can transform an enemy's elemental type, turning water to earth and fire into ice. However, its use is as unpredictable as it is powerful—often leaving a trail of vibrant splashes behind.",
    "category": "curiosities",
    "price": 31000,
    "icon": "🌈",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Revive 'Colorless' Allies",
      "Change Enemy Elemental Affinities"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Rainbow Express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Revive 'Colorless' Allies",
        "rules": "As an action, you can point the Prisma Fountain at a creature within 30 feet that is 'Colorless'. The target regains all hit points. This effect has no save DC and requires no attack roll. However, using it more than once per long rest drains one charge."
      },
      {
        "title": "Change Enemy Elemental Affinities",
        "rules": "As an action, you can target a single creature within 60 feet with the Prisma Fountain to change its elemental type (water, fire, air, or earth). The target must make a DC 15 Constitution saving throw. On a failed save, it becomes of a different elemental type for 1 minute. This effect has no limit per day."
      }
    ],
    "levelRequirementReason": "Requires a level 8 character to wield its unpredictable and powerful effects.",
    "vendorReason": "Toad Town Market specializes in rare curiosities, including the whimsical Prisma Fountain.",
    "shippingDetail": "Ships via Rainbow Express within a week of purchase.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "Instantaneous for 'Revive', 1 minute for 'Change Elemental Affinity'",
      "endsWhen": "Target regains hit points, the save ends the effect, or it is interrupted by an attack.",
      "charges": "Unlimited, but one charge is spent each time used."
    },
    "priceReason": "The Prisma Fountain's price reflects its rarity and the unpredictable nature of its effects, requiring a significant investment in XP.",
    "priceOriginal": 290000,
    "priceReviewedAt": "2026-07-22T22:44:01.157466+00:00",
    "aiReviewedAt": "2026-07-22T22:44:01.157466+00:00",
    "aiReviewVersion": 1
  },
  "painting_of_the_dying_sun": {
    "id": "painting_of_the_dying_sun",
    "name": "Painting of the Dying Sun",
    "description": "The Painting of the Dying Sun is an ominous canvas that hangs in a shadowed frame. Each day, its vibrant hues dim by a fraction, as if time itself weaves a shroud over the sun's glory. If allowed to fade completely, the celestial body will succumb to eternal darkness. The painting can be preserved with costly offerings, but should it perish, the world plunges into an age of endless night.",
    "category": "forbidden",
    "price": 370000,
    "icon": "🖼️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Daily Dimming",
      "Costly Preservation"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Shadowcarriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Daily Dimming",
        "rules": "The painting's light diminishes by 1% each day. If the painting reaches 0%, the sun will dim permanently, plunging the world into darkness."
      },
      {
        "title": "Costly Preservation",
        "rules": "By sacrificing 10,000 gp per day, you can halt the painting's dimming for an additional week. This effect is not cumulative and must be renewed daily to prevent further fading."
      }
    ],
    "levelRequirementReason": "The Painting of the Dying Sun requires a caster at least level 1 to stabilize, as it demands both arcane knowledge and a deep understanding of celestial magic.",
    "vendorReason": "Only the Onyx Hand, with its vast network of forbidden knowledge, can offer such a volatile item for preservation or destruction.",
    "shippingDetail": "The painting must be delivered by the Shadowcarriers, who ensure it arrives in perfect condition, even if it means crossing dangerous realms.",
    "usage": {
      "activation": "Daily action to sacrifice materials and stop dimming for a week.",
      "duration": "One week per daily sacrifice of 10,000 gp.",
      "endsWhen": "The painting reaches 0% light or is destroyed.",
      "charges": "Unlimited charges; must be renewed daily."
    },
    "priceReason": "The Painting's rarity and the potential for catastrophic outcomes in its destruction justify a price of 1000 XP, balancing risk with reward.",
    "priceOriginal": 900000,
    "priceReviewedAt": "2026-07-22T22:44:17.081308+00:00",
    "aiReviewedAt": "2026-07-22T22:44:17.081308+00:00",
    "aiReviewVersion": 1
  },
  "pandemic_cure_formula": {
    "id": "pandemic_cure_formula",
    "name": "Pandemic Cure Formula",
    "description": "The Pandemic Cure Formula is a vial of shimmering, iridescent liquid sealed within an ornate glass bottle adorned with alchemical symbols. Crafted by the Alchemist Guild using rare ingredients sourced from distant lands, this formula offers instant salvation to entire populations ravaged by disease. Once activated, it eradicates any plague or magical ailment affecting up to 1,000 individuals and grants them immunity for a year. The production process is meticulous, requiring a week of precise alchemical work, making the formula a rare and highly coveted commodity among governments and factions seeking to secure their populace's health.",
    "category": "premium",
    "price": 6400,
    "icon": "💊",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Cures all instances of one disease in a region",
      "Grants immunity to the cured disease for one year"
    ],
    "vendor": "alchemist_guild",
    "shippedBy": "Rare Ingredients",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Pandemic Eradication",
        "rules": "The user must consume or apply the formula within an area affecting up to 1,000 people. The effect is instantaneous and cures all instances of a single disease present in that region. Once activated, immunity to the cured disease lasts for one year."
      },
      {
        "title": "Immunization",
        "rules": "All individuals within the targeted area gain immunity to the specific disease that was eradicated by the formula. This immunity persists for one full year from the time of activation."
      }
    ],
    "levelRequirementReason": "The formula requires a basic understanding of alchemy and is accessible to those who have completed their initial training in potion-making.",
    "vendorReason": "The Alchemist Guild is renowned for its expertise in creating life-saving remedies, making the Pandemic Cure Formula an essential part of their offerings.",
    "shippingDetail": "Shipped via a dedicated courier network known as the Apothecary Express, ensuring secure and timely delivery to destinations across the realm.",
    "usage": {
      "activation": "Consumed or applied directly within an area of up to 100 feet in diameter.",
      "duration": "Instantaneous effect; immunity lasts for one year from activation.",
      "endsWhen": "Exhausts once used, requiring a week-long production process for another vial.",
      "charges": "Limited to one use per vial."
    },
    "priceReason": "The formula's rarity and the time-consuming alchemical process required for its creation justify its high price in experience points.",
    "priceOriginal": 320000,
    "priceReviewedAt": "2026-07-22T22:44:38.421237+00:00",
    "aiReviewedAt": "2026-07-22T22:44:38.421237+00:00",
    "aiReviewVersion": 1
  },
  "paper_doll": {
    "id": "paper_doll",
    "name": "Paper Doll",
    "description": "A meticulously cutout paper doll, crafted to mimic any individual's silhouette with uncanny accuracy. This decoy is a cleverly folded creation that can be set up in seconds, fooling even the most vigilant foes into attacking it first before turning their attention to you. Each paper doll has a core of sturdy paper and ink, making it resilient enough to withstand a single strike while remaining lightweight for easy transport.",
    "category": "consumables",
    "price": 58,
    "icon": "📄",
    "stock": 20,
    "rarity": "common",
    "effects": [
      "Set Up Decoy",
      "1 Hit Point"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Envelope",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Set Up Decoy",
        "rules": "As an action, you set up the paper doll. Any creature that can see both you and the decoy must use its reaction to attack the paper doll if within range instead of attacking you. The decoy has AC 10 and 1 hit point; a successful melee attack against it reduces this to 0, destroying the decoy. Once destroyed or removed, the effect ends."
      },
      {
        "title": "1 Hit Point",
        "rules": "The paper doll possesses 1 hit point. Any damage dealt to the doll reduces its hit points by that amount; upon reaching 0 hit points, it is destroyed and the effect ends."
      }
    ],
    "levelRequirementReason": "This item requires no special level as it provides a straightforward tactical advantage.",
    "vendorReason": "Toad Town Market sells common household and utility items, including this clever paper doll for quick decoys.",
    "shippingDetail": "The paper doll is shipped flat in a sturdy envelope to ensure safe delivery without bending or damage.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Destroyed or removed, or when the effect is superseded by another creature attacking you directly.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects a common, yet clever and useful utility item that requires no special materials or crafting.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T22:44:24.481698+00:00",
    "aiReviewedAt": "2026-07-22T22:44:24.481698+00:00",
    "aiReviewVersion": 1
  },
  "para_beanie": {
    "id": "para_beanie",
    "name": "Para-Beanie",
    "description": "The Para-Beanie is a whimsical hat adorned with a small propeller that spins as you move. Originating from Toad Town's eccentric market, this beanie grants a brief lift and allows for controlled descent if used near a high point. Kids love to watch it in action, while adults reminisce about simpler times. Beware: the propeller detaches under thunderous impacts, requiring a visit to the local tinkerer to restore.",
    "category": "equipment",
    "price": 370,
    "icon": "🧢",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Brief Flight",
      "Controlled Descent"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Parcel Chute",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Brief Flight",
        "rules": "As an action, you can activate the Para-Beanie for a short burst of flight. You gain triple your jump height and can glide slowly downwards if used near a high point. This effect lasts until you land or fall from a height."
      },
      {
        "title": "Controlled Descent",
        "rules": "If you use the Para-Beanie while standing on a high place, you can control your descent to avoid falling damage. The propeller automatically adjusts for stability as long as you remain near the edge of the platform."
      }
    ],
    "levelRequirementReason": "The Para-Beanie is designed for novices; its effects are gentle and controlled, making it accessible to those just starting their adventures.",
    "vendorReason": "Toad Town Market specializes in quirky, locally crafted items that bring joy and nostalgia to all ages.",
    "shippingDetail": "Parcel Chutes are known for their reliable delivery within the town limits. A small parachute is included with each Para-Beanie shipment for safe descent.",
    "usage": {
      "activation": "Action",
      "duration": "Until you land or fall from a height",
      "endsWhen": "You land, fall from a height, or take thunder damage",
      "charges": "Unlimited"
    },
    "priceReason": "The Para-Beanie is priced at 1000 XP to reflect its whimsical design and unique effects that provide fun without being overly powerful.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-22T22:44:28.326580+00:00",
    "aiReviewedAt": "2026-07-22T22:44:28.326580+00:00",
    "aiReviewVersion": 1
  },
  "paradox_engine": {
    "id": "paradox_engine",
    "name": "Paradox Engine",
    "description": "The Paradox Engine hums with a maddening rhythm, its gears and pistons twisting time itself into knots of impossible motion. This contraption is forged from the very fabric of contradictions, crafted by The Contrarian to bend reality's rules at will. It can create any paradox, from 'I am both here and not here' to 'The sun rises in the west,' and each such creation grants its wielder power, increasing their level by one for every paradox they conjure.",
    "category": "equipment",
    "price": 370000,
    "icon": "⚙️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Create Paradoxes",
      "Gain Levels from Paradoxes"
    ],
    "vendor": "paradox_machines",
    "shippedBy": "Self-Contradicting Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Create Paradoxes",
        "rules": "The user must spend a minute focusing on the desired paradox. Once activated, the engine emits a blinding flash and a ripple of time, creating the paradox. The paradox lasts for one round per user's level. A successful DC 18 Wisdom saving throw negates this effect. Each use of the Paradox Engine expends one charge."
      },
      {
        "title": "Gain Levels from Paradoxes",
        "rules": "Each time a user successfully creates a paradox, their character level increases by one immediately. This effect has no cooldown and can be used as a bonus action once per short rest."
      }
    ],
    "levelRequirementReason": "The Paradox Engine's creation demands a fundamental understanding of reality, making it accessible only to those who have reached at least level one.",
    "vendorReason": "Paradox Machines is the sole vendor capable of creating and selling such a dangerous but powerful device.",
    "shippingDetail": "The delivery of this item involves a complex series of paradoxes to ensure it arrives safely, adding an unpredictable delay to its shipping time.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "One Round per User's Level",
      "endsWhen": "A successful DC 18 Wisdom saving throw or when the user runs out of charges",
      "charges": "5"
    },
    "priceReason": "The Paradox Engine is priced at 1000 XP, reflecting its unique and powerful nature.",
    "priceOriginal": 110000000,
    "priceReviewedAt": "2026-07-23T16:40:50.195735+00:00",
    "aiReviewedAt": "2026-07-23T16:40:50.195735+00:00",
    "aiReviewVersion": 1
  },
  "parakoopa_wings": {
    "id": "parakoopa_wings",
    "name": "Parakoopa Wing Clips",
    "description": "The Parakoopa Wing Clips are small, ornate wings crafted from polished brass and leather, reminiscent of the nimble flight patterns of their namesake. Strap these to your arms for an awkward but exhilarating takeoff; they allow you to briefly soar through the air with a thunderous flap that startles nearby birds into mocking squawks. Though not graceful, once in mid-flight, you can glide safely from any height, landing gracefully without incident.",
    "category": "equipment",
    "price": 1700,
    "icon": "🪶",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Brief Flight",
      "Safe Glide"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Feather Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Brief Flight",
        "rules": "Activate as a bonus action to fly for up to 60 feet in a straight line. Concentration is required; if you lose concentration, the wings falter and drop from your arms. This effect lasts for 2 rounds."
      },
      {
        "title": "Safe Glide",
        "rules": "Once per short rest, after falling from at least 30 feet, activate as a bonus action to glide safely down to the ground without taking fall damage."
      }
    ],
    "levelRequirementReason": "These wings are accessible early on but require finesse and practice.",
    "vendorReason": "The observatory is known for its unique stock of magical artifacts, including the eccentric creations favored by Parakoopas.",
    "shippingDetail": "Shipped via a swift pigeon messenger, delivery can be expedited at an additional cost.",
    "usage": {
      "activation": "Bonus action for Brief Flight; once per short rest to activate Safe Glide.",
      "duration": "Brief Flight lasts up to 2 rounds with concentration. Safe Glide is instantaneous and usable once per short rest.",
      "endsWhen": "Losing concentration ends Brief Flight, or after the duration of Safe Glide.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at a lower price to reflect the item’s utility and rarity without being overpowered.",
    "priceOriginal": 13000,
    "priceReviewedAt": "2026-07-23T16:40:41.516582+00:00",
    "aiReviewedAt": "2026-07-23T16:40:41.516582+00:00",
    "aiReviewVersion": 1
  },
  "parallel_universe_cloning_machine": {
    "id": "parallel_universe_cloning_machine",
    "name": "Parallel Universe Cloning Machine",
    "description": "The Parallel Universe Cloning Machine hums with a multiversal energy, summoning 1d100 alternate versions of yourself from parallel realities where you made better decisions. Each clone appears as a level-appropriate version of your current self, ready to assist in your endeavors for the next 24 hours. These clones share your goals and can be deployed to various challenges, but once their time is up, they vanish into the fabric of the multiverse, never to return.",
    "category": "services",
    "price": 380000,
    "icon": "🔬",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Summon Parallel Versions",
      "Temporary Assistance"
    ],
    "vendor": "quantum_duplication",
    "shippedBy": "Alternate Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Summon Parallel Versions",
        "rules": "Activates as a bonus action. Summons 1d100 level-appropriate clones of the user from alternate realities where they made better decisions. Each clone exists for 24 hours and can be deployed to assist in challenges or tasks."
      },
      {
        "title": "Temporary Assistance",
        "rules": "Each clone is a perfect duplicate of the user, sharing their goals and abilities for 24 hours. They can be used passively for support but cannot replace the user's actions. At the end of 24 hours or when the user dismisses them, they disappear back into the multiverse."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to access the potential and responsibility that comes with summoning parallel versions.",
    "vendorReason": "Quantum Duplication is known for their expertise in multiversal technology, making them the most trusted vendor for such an item.",
    "shippingDetail": "Delivery occurs instantaneously through alternate dimensions; no physical shipment is involved.",
    "usage": {
      "activation": "Bonus action to activate and summon clones.",
      "duration": "24 hours per clone summoned, or until dismissed by the user.",
      "endsWhen": "At the end of 24 hours or when dismissed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The item's price is set at a reasonable value given its unique and powerful abilities, allowing for balanced gameplay without overpowered effects.",
    "priceOriginal": 80000000,
    "priceReviewedAt": "2026-07-22T22:44:53.041689+00:00",
    "aiReviewedAt": "2026-07-22T22:44:53.041689+00:00",
    "aiReviewVersion": 1
  },
  "paratroopa_wings": {
    "id": "paratroopa_wings",
    "name": "Paratroopa Wings",
    "description": "The Paratroopa Wings are a delicate, iridescent set of feathers that allow for both graceful gliding and agile short hops. Crafted from the rare down of Paratroopas found high in the skies over Forgotten Peaks, these wings can carry you effortlessly through the air with each flap. A single glide covers 20 feet per 10 feet fallen, while their jump distance is doubled, allowing for leaps that would otherwise be impossible.",
    "category": "equipment",
    "price": 1700,
    "icon": "🦋",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Glide 20ft per 10ft fallen",
      "Jump distance doubled"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Swiftwind Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Glide",
        "rules": "When you activate the wings by making a running start, they allow you to glide in any direction up to 20 feet for every 10 feet of falling height. This effect lasts until the end of your next turn or until you land."
      },
      {
        "title": "Jump Boost",
        "rules": "Your jump distance is doubled when using the wings, effectively allowing you to leap twice as far as normal. This boost applies only once per short rest and does not stack with other abilities that enhance jumping."
      }
    ],
    "levelRequirementReason": "The Paratroopa Wings are designed for beginners, requiring only a basic understanding of balance and coordination.",
    "vendorReason": "Comet Observatory is known for its expertise in rare avian artifacts, making it the ideal vendor for these enchanted wings.",
    "shippingDetail": "Ships within three days from the Forgotten Peaks region, delivered by a swift messenger pigeon.",
    "usage": {
      "activation": "Activating the wings requires a running start and is an action.",
      "duration": "Instantaneous for each glide; jump boost lasts until the end of your next turn or short rest.",
      "endsWhen": "The effect ends when you land from a glide, or after one use of the jump boost per short rest.",
      "charges": "Unlimited uses between rests"
    },
    "priceReason": "The Paratroopa Wings are rare and crafted with unique materials, making them moderately priced for their utility.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T22:45:06.302451+00:00",
    "aiReviewedAt": "2026-07-22T22:45:06.302451+00:00",
    "aiReviewVersion": 1
  },
  "party_invite": {
    "id": "party_invite",
    "name": "Lost Party Invitation",
    "description": "This faded, crumpled invitation bears the crest of Peach's Castle and hints at a past gathering now long forgotten. The paper is brittle, fragile as the memory it holds, and its edges are frayed from years of neglect. Though the date reads '3 years ago,' the ink still smudges faintly under your touch. Legend has it that those who find this invitation can summon a fleeting echo of the party's spirit, though time itself seems to linger around it like a mist.",
    "category": "curiosities",
    "price": 28,
    "icon": "✉️",
    "stock": 200,
    "rarity": "junk",
    "effects": [
      "Echoes of the Past",
      "Fragile Remnant"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Courier Puffa",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Echoes of the Past",
        "rules": "As an action, you may activate this invitation. For the next round, you gain advantage on saving throws related to emotions and can sense the lingering spirit of the party. The spirit does not speak but provides a vague impression of the event's atmosphere."
      },
      {
        "title": "Fragile Remnant",
        "rules": "The invitation is fragile; once used, it crumbles into dust. After its activation, you must make a DC 15 Constitution saving throw or be incapacitated for 1 hour due to exhaustion from the vivid recollection of the past."
      }
    ],
    "levelRequirementReason": "The invitation's power draws on memories and emotions, making it accessible only to those who have experienced a significant event in their lives.",
    "vendorReason": "Toad Town Market is known for its connections to the past, and this item is often sold alongside relics from Peach's Castle era.",
    "shippingDetail": "Shipped by Courier Puffa with express delivery; due arrives within a day of order placement.",
    "usage": {
      "activation": "As an action",
      "duration": "1 round",
      "endsWhen": "The effect ends when the round concludes or if you are incapacitated from exhaustion.",
      "charges": "Unlimited, but each use crumbles the invitation further."
    },
    "priceReason": "The item’s historical significance and its unique effects justify a higher price in terms of XP value.",
    "priceOriginal": 500,
    "priceReviewedAt": "2026-07-22T22:45:45.535574+00:00",
    "aiReviewedAt": "2026-07-22T22:45:45.535574+00:00",
    "aiReviewVersion": 1
  },
  "pay_the_guild_to_scry_1": {
    "id": "pay_the_guild_to_scry_1",
    "name": "Mages' Guild Scrying Fee (Local)",
    "description": "Mages' Guild Scrying Fee (Local) is a parchment envelope, sealed with a sigil of the Mages' Guild. For a mere 1000 XP, you can request the guild to scry on a target within ten miles, providing a fleeting glimpse into their world. The mage casts a spell that pierces the veil for one minute, revealing the target's form and actions, but only through visual means. Success is not guaranteed; it has an 85% chance of escaping passive detection. The Mages' Guild ensures this service maintains confidentiality, as its fees are paid directly to them.",
    "price": 370,
    "icon": "👁️",
    "stock": 999,
    "rarity": "uncommon",
    "effects": [
      "Visual Scrying",
      "Passive Detection Evasion"
    ],
    "vendor": "mages_guild_hall",
    "shippedBy": "Magical Transmission",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Visual Scrying",
        "rules": "Activates with a short casting time. You can view the target for one minute, limited only to visual information. The effect is instantaneous and has no duration beyond this period."
      },
      {
        "title": "Passive Detection Evasion",
        "rules": "The scrying attempt has an 85% chance of evading passive detection. This means that if the target is being watched by a creature with Perception, they have only a 15% chance to notice your attempt."
      }
    ],
    "levelRequirementReason": "This service is made available to novice mages and other spellcasters who need immediate access to information without the complexity of more advanced scrying spells.",
    "vendorReason": "The Mages' Guild ensures all services are delivered directly, with a high level of trustworthiness and reliability in their magical transmissions.",
    "shippingDetail": "Delivered via the guild's proprietary spell-based courier network, ensuring quick delivery within ten miles.",
    "usage": {
      "activation": "A short casting time is required to activate this effect.",
      "duration": "The view lasts for one minute.",
      "endsWhen": "The duration ends after one minute of viewing or if the caster is incapacitated.",
      "charges": "Unlimited, as it uses a component slot."
    },
    "priceReason": "This price reflects the guild's administrative costs and the spellcasting involved in providing this service.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T22:45:57.793931+00:00",
    "aiReviewedAt": "2026-07-22T22:45:57.793931+00:00",
    "aiReviewVersion": 1
  },
  "peach_loyalists_mushroom_identification": {
    "id": "peach_loyalists_mushroom_identification",
    "name": "Peach Loyalists Mushroom Identification",
    "description": "The Peach Loyalists Mushroom Identification is a handcrafted leather-bound tome adorned with golden threads that shimmer like the petals of Princess Peach's favorite blossoms. This rare volume allows you to identify power-up mushrooms, granting advantage on Nature checks for recognizing beneficial fungi. Swayed by the wisdom of the loyalists, the book also offers insight into the growth and potency of these mushrooms, leading to a rumored enhancement in your abilities when consumed.",
    "category": "services",
    "price": 370,
    "icon": "🍄",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Nature Checks",
      "Identify Power-Up Mushrooms"
    ],
    "vendor": "peach_loyalists",
    "shippedBy": "Pipe Transport",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Nature Checks",
        "rules": "For the duration of 30 days, you gain advantage on any checks related to identifying mushrooms and their properties. This effect is limited to once per 14-day period."
      },
      {
        "title": "Identify Power-Up Mushrooms",
        "rules": "You can request one location where a power-up mushroom grows during the book's 30-day efficacy, but you must swear loyalty to Princess Peach (a cosmetic requirement)."
      }
    ],
    "levelRequirementReason": "This service is available to all adventurers, as it requires no specific combat proficiency or power level.",
    "vendorReason": "The Peach Loyalists are renowned mycologists who specialize in the identification and cultivation of mushrooms that can empower their allies.",
    "shippingDetail": "Shipped via the underground pipe network, this book arrives within a week with minimal chance of damage or loss.",
    "usage": {
      "activation": "Passive effect upon acquisition; advantage on checks granted for 30 days, identification request once per 14-day period.",
      "duration": "30 days",
      "endsWhen": "Upon expiration of the 30 days or when a power-up mushroom is identified and used.",
      "charges": "Unlimited"
    },
    "priceReason": "The book's craftsmanship, rarity, and unique identification service justify its moderate price.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T22:45:53.326911+00:00",
    "aiReviewedAt": "2026-07-22T22:45:53.326911+00:00",
    "aiReviewVersion": 1
  },
  "peach_loyalists_princess_gown": {
    "id": "peach_loyalists_princess_gown",
    "name": "Peach Loyalists Princess Gown",
    "description": "The Peach Loyalists Princess Gown is a sumptuous garment of silken peach, embroidered with gold and silver thread in intricate patterns that shimmer like the sunlit meadows around the castle. Its delicate lace collar and sleeves whisper secrets of the kingdom's history to those who wear it. This gown not only grants advantage on Charisma (Persuasion) checks when addressing royal audiences but also subtly conceals minor stains, allowing for a more dignified appearance in court.",
    "category": "equipment",
    "price": 1700,
    "icon": "👗",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Advantage on Persuasion",
      "Minor Stain Concealment"
    ],
    "vendor": "peach_loyalists_castle",
    "shippedBy": "Pink Petal Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Advantage on Persuasion",
        "rules": "When the wearer of the gown is attempting to use Charisma (Persuasion) in a royal court, they gain advantage on their roll. This effect lasts until the end of the wearer's next turn."
      },
      {
        "title": "Minor Stain Concealment",
        "rules": "The gown can conceal minor stains for 1 hour. The wearer must make a DC 15 Dexterity (Sleight of Hand) check to apply the concealing effect, and it functions similarly to the Disguise feat's aid action."
      }
    ],
    "levelRequirementReason": "The gown requires a minimum level of 6 due to its intricate design and the complexity of its magical properties.",
    "vendorReason": "As trusted suppliers of royal attire, Peach Loyalists Castle ensures only the finest garments are sold for courtly occasions.",
    "shippingDetail": "The gown is shipped with utmost care via Pink Petal Express, ensuring it arrives in pristine condition for its intended wearer.",
    "usage": {
      "activation": "Passive effect; activation occurs upon donning the gown.",
      "duration": "Until removed or the end of the next turn after a successful Persuasion check (whichever comes first).",
      "endsWhen": "The effect ends when the wearer removes the gown, uses another action on their turn, or fails to maintain the advantage on a Persuasion check.",
      "charges": "Unlimited; the magic is self-sustaining while worn."
    },
    "priceReason": "The gown's intricate design and magical properties justify this price point, making it a valuable asset for any noble seeking to make an impression at court.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-22T22:46:00.732727+00:00",
    "aiReviewedAt": "2026-07-22T22:46:00.732727+00:00",
    "aiReviewVersion": 1
  },
  "peach_loyalists_royal_peach_tart_recipe": {
    "id": "peach_loyalists_royal_peach_tart_recipe",
    "name": "Recipe: Peach Loyalists Royal Peach Tart",
    "description": "The Recipe: Peach Loyalists Royal Peach Tart is a parchment of golden hues, embossed with the seal of Princess Liana's royal orchard. With this recipe in hand, you can bake tarts that are not only delicious but also imbued with the sweet loyalty of the Loyalist Bakers. Each tart, when shared with allies, grants +1 to Charisma (Persuasion) for 3 hours. The secret lies in using freshly picked peaches from the orchard and ensuring they are prepared exactly as Princess Liana's bakers do it.",
    "price": 370,
    "icon": "🥧",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Royal Loyalty",
      "Charismatic Persuasion"
    ],
    "vendor": "peach_loyalists_palace",
    "shippedBy": "Peachy Pastry Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Royal Loyalty",
        "rules": "When you eat a tart made from this recipe, you gain +1 to Charisma (Persuasion) with allies for 3 hours. This effect can be used once per short or long rest."
      },
      {
        "title": "Charismatic Persuasion",
        "rules": "The tarts' sweetness and the loyalty they represent enhance your persuasive abilities, making it easier to gain favor among those you interact with."
      }
    ],
    "levelRequirementReason": "This recipe is suitable for all levels as it focuses on social interaction rather than combat skills.",
    "vendorReason": "The Peach Loyalists Palace is renowned for its ties to the royal family and its support of loyalist bakers, making it a fitting vendor for this recipe.",
    "shippingDetail": "Delivered with fresh peaches included in the package ensuring the highest quality ingredients are used when you bake your tarts.",
    "usage": {
      "activation": "Eat one tart made from this recipe to activate its effects.",
      "duration": "3 hours, or until consumed by the eater.",
      "endsWhen": "The effect ends when the duration expires or if the tart is eaten by another creature.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The recipe's rarity and the special ingredients required justify its price, making it a valuable addition to any adventurer's repertoire.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T22:46:16.834782+00:00",
    "aiReviewedAt": "2026-07-22T22:46:16.834782+00:00",
    "aiReviewVersion": 1
  },
  "peach_loyalists_royal_rolling_board": {
    "id": "peach_loyalists_royal_rolling_board",
    "name": "Peach Loyalists Royal Rolling Board",
    "description": "The Peach Loyalists Royal Rolling Board is a meticulously crafted board, its surface polished to a gleaming sheen. Rolled by hand from the finest peach wood, it exudes an aroma of fresh fruit and loyalty. This board not only ensures smooth rolling for perfect tarts but also grants a +1 bonus to Charisma (Performance) checks when used in royal settings. The seal of Princess Peach herself enhances your reputation among her loyalists, boosting your Charisma (Persuasion) by 1 until the next long rest.",
    "category": "equipment",
    "price": 370,
    "icon": "🥧",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Loyalty Boost",
      "Improved Rolling"
    ],
    "vendor": "peach_loyalists_palace",
    "shippedBy": "Peachy Plank Parcel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Loyalty Boost",
        "rules": "When you use this board in a performance or persuasion check, you gain a +1 bonus to Charisma (Persuasion) checks for the rest of the day. This effect ends on completion of your next long rest."
      },
      {
        "title": "Improved Rolling",
        "rules": "While using this board, you automatically succeed at any attempt to roll out pastry dough without needing a Dexterity check. The board's surface ensures perfect rolling every time it is used."
      }
    ],
    "levelRequirementReason": "Any adventurer can benefit from the skills required for pastry creation and royal performance.",
    "vendorReason": "As part of their service to Princess Peach, they sell tools that enhance loyalty and excellence in baking and performance.",
    "shippingDetail": "Ships via the royal courier with same-day delivery within the kingdom.",
    "usage": {
      "activation": "Using this board for rolling or as part of a Charisma (Performance) or (Persuasion) check.",
      "duration": "Until the end of your next long rest, and only once per day.",
      "endsWhen": "The effect ends when you complete a long rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This board is crafted with rare peach wood and carries the royal seal, making it a valuable tool for any aspiring chef or performer.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-22T22:46:10.483068+00:00",
    "aiReviewedAt": "2026-07-22T22:46:10.483068+00:00",
    "aiReviewVersion": 1
  },
  "peach_loyalists_royal_tea_premium": {
    "id": "peach_loyalists_royal_tea_premium",
    "name": "Peach Loyalists Royal Tea (Premium)",
    "description": "The Peach Loyalists Royal Tea (Premium) exudes regal elegance in every sip, crafted from the rarest peach blossoms and steeped in a secret blend that only the court's finest alchemists can create. This premium brew not only enhances your composure with Charisma saves but also calms even the most agitated nerves, banishing fear for hours. However, on bumpy roads, the delicate porcelain cup may shatter easily, leaving a trail of spilled tea behind.",
    "price": 370,
    "icon": "🍵",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+2 to Charisma Saves",
      "Calm Nerves: Remove Frightened"
    ],
    "vendor": "peach_loyalists_palace",
    "shippedBy": "Royal Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Composure",
        "rules": "Consume the tea as an action. You gain a +2 bonus on all Charisma saving throws for 8 hours, after which the effect ends."
      },
      {
        "title": "Calm Nerves",
        "rules": "Consume the tea to end the frightened condition if you are currently affected by it. This effect has no save and lasts until the start of your next turn following consumption."
      }
    ],
    "levelRequirementReason": "This premium tea is crafted for all who seek a momentary reprieve from their duties, making it accessible to any adventurer.",
    "vendorReason": "The peach-loyalists are renowned for their mastery of the tea arts and their dedication to preserving courtly traditions.",
    "shippingDetail": "Ships with Royal Couriers who ensure swift delivery, but may arrive lukewarm.",
    "usage": {
      "activation": "Consume as an action",
      "duration": "8 hours until expiration",
      "endsWhen": "Effect ends after 8 hours or when consumed in a bumpy area",
      "charges": "Unlimited"
    },
    "priceReason": "The premium quality and rarity of ingredients, combined with the delicate craftsmanship, justify this price.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-22T22:46:26.607212+00:00",
    "aiReviewedAt": "2026-07-22T22:46:26.607212+00:00",
    "aiReviewVersion": 1
  },
  "pebble": {
    "id": "pebble",
    "name": "Just A Pebble",
    "description": "This pebble is no ordinary stone; it feels sturdy and smooth, polished by countless hands over generations. It's said to be a fragment of the old city's ancient wall, imbued with a whisper of its past. When hurled at glass, it shatters with a satisfying crack, dealing 1d4 damage and leaving a spiderweb pattern behind. It also carries with it an ancient curse, forcing the target to make a DC 13 Constitution saving throw or be dazed for one minute, unable to take actions.",
    "category": "curiosities",
    "price": 58,
    "icon": "🪨",
    "stock": 500,
    "rarity": "common",
    "effects": [
      "Thrown",
      "Ancient Curse"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Standard Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Thrown",
        "rules": "When thrown as an action at a target within 20 feet of glass, it deals 1d4 piercing damage. On a successful hit, the target must make a DC 13 Constitution saving throw or be dazed for one minute."
      },
      {
        "title": "Ancient Curse",
        "rules": "If the target fails its saving throw, they are dazed and unable to take actions until the curse ends. This effect lasts for one minute, during which time the target cannot use any action or reaction unless they succeed on another DC 13 Constitution saving throw."
      }
    ],
    "levelRequirementReason": "It requires a basic understanding of throwing and physical strength to effectively utilize this pebble.",
    "vendorReason": "The market's extensive collection includes relics from the old city, making it a natural place for this ancient fragment.",
    "shippingDetail": "Delivered within one week of purchase.",
    "usage": {
      "activation": "thrown as an action",
      "duration": "instantaneous damage; curse lasts until the end of the target's next turn, or until they succeed on a saving throw",
      "endsWhen": "target succeeds on a DC 13 Constitution saving throw or at the end of their next turn after being cursed",
      "charges": "unlimited"
    },
    "priceReason": "The pebble's rarity, historical significance, and unique properties justify its price.",
    "priceOriginal": 1000,
    "priceReviewedAt": "2026-07-22T22:46:15.658302+00:00",
    "aiReviewedAt": "2026-07-22T22:46:15.658302+00:00",
    "aiReviewVersion": 1
  },
  "peekaboo_badge": {
    "id": "peekaboo_badge",
    "name": "Peekaboo Badge",
    "description": "The Peekaboo Badge grants you a fleeting glimpse into the very essence of an enemy's vitality, allowing you to see their exact health in a momentary flash. This badge is forged from the remnants of ancient runes and twisted glass, making it appear as if a small, glowing visor is always at your ready. With its help, you can anticipate attacks and strategize with precision, knowing exactly how much damage each foe can withstand before falling.",
    "category": "equipment",
    "price": 59,
    "icon": "👁️",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Always Know",
      "Instantaneous Vision"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Discreet Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Always Know",
        "rules": "When you use your action to activate the badge, you gain a brief but clear visual representation of an enemy's health. This effect lasts for one round and allows you to see their exact hit point total during that time."
      },
      {
        "title": "Instantaneous Vision",
        "rules": "The vision only lasts until the start of your next turn or until another creature uses a bonus action to look at you, after which the badge's effect ends."
      }
    ],
    "levelRequirementReason": "This badge is designed for beginners and those who need an edge against more challenging foes.",
    "vendorReason": "The Rogueport Black Market sells a variety of items that cater to the needs of adventurers at all levels, making this badge accessible to many.",
    "shippingDetail": "The badge is carefully packed and shipped discreetly, ensuring it arrives in perfect condition without attracting unwanted attention.",
    "usage": {
      "activation": "Action",
      "duration": "One round",
      "endsWhen": "Start of your next turn or when another creature uses a bonus action to look at you",
      "charges": "Unlimited"
    },
    "priceReason": "The badge is priced lower than some magical items because it provides a straightforward utility without any ongoing powers.",
    "priceOriginal": 30000,
    "priceReviewedAt": "2026-07-22T22:46:37.317165+00:00",
    "aiReviewedAt": "2026-07-22T22:46:37.317165+00:00",
    "aiReviewVersion": 1
  },
  "permanent_level_up_machine": {
    "id": "permanent_level_up_machine",
    "name": "Permanent Level-Up Machine",
    "description": "The Permanent Level-Up Machine, a gleaming treadmill forged from adamantine steel and polished to a mirror finish, hums with an otherworldly energy as you step onto its sleek surface. Crafted by The Level Designer, this contraption is said to have been used in the trials of ancient gods. Walk for one minute and gain one level; run at your maximum speed and earn two levels per minute. Legend has it that those who dare to use it must swear never to abuse its power.",
    "category": "services",
    "price": 380000,
    "icon": "🏃",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Walk: Gain Level",
      "Run: Double Level Gained"
    ],
    "vendor": "infinite_progress",
    "shippedBy": "Experience Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Walk",
        "rules": "Activates on the start of your turn as you walk for one minute. You gain one level at the end of this period, provided you remain within range and have not used the Run effect during that time."
      },
      {
        "title": "Run",
        "rules": "Activates on the start of your turn as you run at maximum speed for one minute. Gain two levels per minute spent running, but only if you have not walked or used this effect in the previous three minutes."
      }
    ],
    "levelRequirementReason": "Requires level 1 to operate and gain experience; even the most powerful entities must start somewhere.",
    "vendorReason": "Infinite Progress specializes in transformative tools, making this machine a natural fit for their inventory.",
    "shippingDetail": "Ships via teleportation, ensuring you receive your new levels within the hour of purchase.",
    "usage": {
      "activation": "Activates on the start of your turn during walking or running. Ends when you stop moving at a walk or run speed for one minute, or if you use another effect that prevents level gain.",
      "duration": "Instantaneous",
      "endsWhen": "You cease movement at any walking or running speed for one minute, or you activate this effect again.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to ensure players can afford it early in their journey without overpowered.",
    "priceOriginal": 55000000,
    "priceReviewedAt": "2026-07-22T22:46:41.346219+00:00",
    "aiReviewedAt": "2026-07-22T22:46:41.346219+00:00",
    "aiReviewVersion": 1
  }
};
