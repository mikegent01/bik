// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_055 = {
  "almost_edge_chronometric_bracers": {
    "id": "almost_edge_chronometric_bracers",
    "name": "Chronometric Bracers of Temporal Distortion",
    "description": "The Chronometric Bracers of Temporal Distortion are tarnished bronze, their surfaces etched with arcane symbols that shimmer and hum faintly. Crafted from ancient time metal found in the void, these bracers grant a fleeting mastery over moments lost to time's flow. Wielders experience heightened reflexes and a rare ability to correct minor mistakes by rewinding time for brief instants, but they risk unraveling the very fabric of reality with reckless use.",
    "category": "equipment",
    "price": 3300,
    "icon": "⏳",
    "stock": 5,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Temporal Reflex Boost",
      "Mistimed Corrections"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Temporal Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Reflex Boost",
        "rules": "Activates as a reaction. Increases your Dexterity saving throw by +2 and grants you advantage on the next attack roll or Dexterity (Stealth) check made before the end of your next turn."
      },
      {
        "title": "Mistimed Corrections",
        "rules": "Activates once per short rest to allow the wearer to use a bonus action to rewind time, effectively canceling their most recent failed attack or saving throw. This alters the timeline by 1d4 seconds and can be used only three times per long rest."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Dexterity-based skills to fully leverage the bracers' effects.",
    "vendorReason": "Edge Wanderer, a vendor of lost and found relics, possesses these bracers due to their connection with time travel lore.",
    "shippingDetail": "The bracers are delivered via Temporal Courier, ensuring the wearer's timeline remains unaffected during transit.",
    "usage": {
      "activation": "Reaction for Temporal Reflex Boost; Bonus Action for Mistimed Corrections",
      "duration": "Instantaneous (Temporal Reflex Boost); Until the start of your next turn (Mistimed Corrections)",
      "endsWhen": "Used or after its duration expires",
      "charges": "3 uses per long rest"
    },
    "priceReason": "Balanced as a rare item, offering unique temporal abilities that require careful use to prevent timeline anomalies.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:13:50.933023+00:00",
    "aiReviewedAt": "2026-07-23T21:13:50.933023+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_kaleidoscope_shard": {
    "id": "almost_edge_kaleidoscope_shard",
    "name": "Kaleidoscope Shard of Lost Reflections",
    "description": "A Kaleidoscope Shard of Lost Reflections is a fractured piece of reality, shimmering with an ever-changing pattern. Crafted from the remnants of a shattered void, it emits a soft, ethereal glow that warps light into intricate, impossible designs. Viewing this shard for more than two seconds can cause the world around you to distort, leading to disorienting visual hallucinations. Those who collect many shards might find themselves trapped in an endless loop of reflections, losing their sense of time and space.",
    "category": "curiosities",
    "price": 110,
    "icon": "🌀",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Visual Distortion",
      "Hallucinatory Effects"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Void Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Visual Distortion",
        "rules": "When a creature gazes into the shard for more than two seconds, it must succeed on a DC 12 Wisdom saving throw or become confused for 1 minute. The confusion ends if the affected creature takes any action."
      },
      {
        "title": "Hallucinatory Effects",
        "rules": "The user experiences vivid, disorienting visual hallucinations that last until they cease viewing the shard. While under its influence, their perception of reality is warped, making precise actions difficult but not impossible."
      }
    ],
    "levelRequirementReason": "This shard is accessible to beginning adventurers as it introduces a minor challenge without overwhelming them.",
    "vendorReason": "The Liminal Trader deals in the ephemeral and strange, making this shard an appropriate addition to their inventory.",
    "shippingDetail": "Ships via the Void Express, which can take up to a week due to the nature of the shards' instability during transit.",
    "usage": {
      "activation": "Free action when initially viewed for more than two seconds.",
      "duration": "Until the viewer ceases viewing the shard or takes an action.",
      "endsWhen": "The viewer looks away or takes an action.",
      "charges": "Unlimited, but a creature can only be affected by one shard at a time."
    },
    "priceReason": "The price reflects the rarity of the shard and its potential to cause disorientation, making it a valuable yet risky item for adventurers.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-23T21:13:36.849047+00:00",
    "aiReviewedAt": "2026-07-23T21:13:36.849047+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_gargoyle_grunt": {
    "id": "earth_land_gargoyle_grunt",
    "name": "Stone Golem Grunt",
    "description": "This Stone Golem Grunt, a rare and surprisingly agile construct, is forged from raw earth energy. Its grumpy expression hints at internal strain as it smashes through foes with surprising force. When engaged in combat, it lets out pathetic grunts, perhaps from the effort of its relentless assault or the weight of its stone form. This golem grants a +5 bonus to armor and a +3 modifier to Strength checks. Its attacks have a 10% chance to stun an opponent for one round.",
    "category": "equipment",
    "price": 5400,
    "icon": "🗿",
    "stock": 67,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "+5 armor",
      "+3 strength"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "cart",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Stun Chance",
        "rules": "When the Stone Golem Grunt makes a melee attack, there is a 10% chance that it will stun an opponent for one round. The target can make a DC 14 Dexterity saving throw to avoid being stunned."
      },
      {
        "title": "Sturdy Form",
        "rules": "The Stone Golem Grunt has +5 armor bonus to AC, providing formidable protection in battle."
      }
    ],
    "levelRequirementReason": "This construct is designed for trained fighters who can manage its raw power and potential for destruction.",
    "vendorReason": "The Guild Quartermaster supplies rare constructs to capable adventurers in need of extra protection or combat assistance.",
    "shippingDetail": "Ships via a sturdy cart, delivered within 3 days of purchase from the quartermaster's storeroom.",
    "usage": {
      "activation": "Instantaneous when summoned by a spellcaster.",
      "duration": "Until dismissed or destroyed in combat.",
      "endsWhen": "The construct is destroyed, dismissed via a dispel magic effect, or until it reaches 0 hit points.",
      "charges": "Unlimited"
    },
    "priceReason": "The rare materials and complex crafting required to forge this golem justify its high price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:13:48.381771+00:00",
    "aiReviewedAt": "2026-07-23T21:13:48.381771+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_whispering_shard": {
    "id": "earth_land_whispering_shard",
    "name": "Echoing Obsidian Shard",
    "description": "The Echoing Obsidian Shard is a fragment of an ancient dragon's scale, now a shimmering relic that vibrates with the whispers of the earth. Held close, you can discern the subtle rumblings beneath your feet—rumors of hidden passages and crypts yet to be discovered. The shard occasionally resonates with the sounds of distant battles, offering brief insights into the world's long-forgotten secrets. Wario would indeed pay a small fortune for one, as it promises both treasure maps and a laughably easy way to find them.",
    "category": "curiosities",
    "price": 690,
    "icon": "🔮",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Reveal Hidden Paths",
      "Detect Earthquakes"
    ],
    "vendor": "magic_shop",
    "shippedBy": "winged beetle",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Paths",
        "rules": "As an action, you can focus on the shard to detect hidden passages within a 30-foot radius. This effect lasts for 1 minute and has a chance of revealing concealed tunnels or secret doors with a successful DC 15 Wisdom (Perception) check."
      },
      {
        "title": "Detect Earthquakes",
        "rules": "The shard emits a faint tremor when an earthquake is imminent, within a 60-foot radius. You gain advantage on Perception checks to notice the onset of seismic activity and can take a bonus action at the start of each of your turns to detect such disturbances."
      }
    ],
    "levelRequirementReason": "The shard's power is accessible to all adventurers, as it requires no specialized training to use.",
    "vendorReason": "Magic Shop stocks the Echoing Obsidian Shard due to its unique and widely sought-after abilities among treasure hunters and explorers.",
    "shippingDetail": "Shipped by a fleet of winged beetles, the shard arrives within one week, delivered safely in its protective case.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "1 minute for Reveal Hidden Paths; lasts until triggered again",
      "endsWhen": "The effect ends if you no longer hold the shard or use it to detect an earthquake.",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "The Echoing Obsidian Shard's price reflects its rare nature and the potential value of discovering hidden treasures.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T21:13:51.262546+00:00",
    "aiReviewedAt": "2026-07-23T21:13:51.262546+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_dragon_scale_charm": {
    "id": "earth_land_dragon_scale_charm",
    "name": "Chromatic Dragon Scale Charm",
    "description": "Crafted from the shimmering scales of a young, flamboyant chromatic dragon, this charm exudes an otherworldly iridescence that subtly influences those around you. It grants a +2 bonus to Charisma checks and rolls, but its true power lies in its ability to make enemies feel intensely jealous of your gear for up to 1 hour per long rest. The charm's scales are said to offer a protective barrier against fear-based attacks or effects, granting a +3 resistance.",
    "category": "equipment",
    "price": 8800,
    "icon": "🐉",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Charisma Boost",
      "Jealousy Aura"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "This charm grants the wearer a +2 bonus to Charisma checks and rolls. This effect is passive, but can be activated as an action for a one-time use per short rest."
      },
      {
        "title": "Jealousy Aura",
        "rules": "For up to 1 hour after activation, this charm exudes an aura that makes enemies feel intensely jealous of the wearer's gear. This effect imposes a -2 penalty on Charisma-based checks and saves made by creatures within 30 feet of you. The aura ends when the wearer takes any action or when the charm runs out of charges."
      }
    ],
    "levelRequirementReason": "This charm is designed for beginners to enjoy its benefits without overreaching their capabilities.",
    "vendorReason": "The earth emporium specializes in rare and exotic goods, including items that can influence the emotions of others, making this charm a perfect fit.",
    "shippingDetail": "The delivery drone ensures swift and secure transport of your purchase, delivered directly to your doorstep.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 1 hour per long rest",
      "endsWhen": "Ends when the wearer takes any action or when it runs out of charges after a short rest.",
      "charges": "2 uses per day"
    },
    "priceReason": "The charm's rarity and the unique properties it offers justify its fair value.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T21:14:08.360622+00:00",
    "aiReviewedAt": "2026-07-23T21:14:08.360622+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_giga_coin": {
    "id": "mushroom_kingdom_item_giga_coin",
    "name": "Giga Coin of Infinite Greed",
    "description": "The Giga Coin of Infinite Greed gleams with an almost unbearable luster, its surface etched with arcane runes that whisper tales of insatiable desire. This oversized coin is said to attract not just coins, but also rare artifacts and even the occasional mischievous thief. Hold it long enough, and you might find yourself on a never-ending quest for more wealth – or worse, entangled in an endless loop of greed that could leave you penniless and alone.",
    "category": "equipment",
    "price": 8800,
    "icon": "💰",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Valuables Attraction",
      "Lucky Break"
    ],
    "vendor": "wario_direct",
    "shippedBy": "mushroom_delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Valuables Attraction",
        "rules": "When held, the coin attracts coins and valuables within a 30-foot radius. Any creature within this area has disadvantage on saving throws against being charmed or frightened by other creatures. This effect lasts until the end of your next turn."
      },
      {
        "title": "Lucky Break",
        "rules": "Once per short rest, when you take an action that would normally result in a failure, roll a d20. On a 19 or 20, treat it as a success instead. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This coin's attraction and luck manipulation are accessible to all adventurers.",
    "vendorReason": "Wario Direct, known for its questionable business practices, naturally sells this item that can both attract wealth and lead to endless quests.",
    "shippingDetail": "The coin is delivered via a single mushroom delivery drone which arrives at your door within the hour of purchase.",
    "usage": {
      "activation": "Passive effect while held; requires no action.",
      "duration": "Instantaneous effect when used for its attraction, lasts until end of next turn. Lucky Break is once per short rest and unlimited uses per day.",
      "endsWhen": "The effect ends at the start of your next turn after using it or if you stop holding the coin.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects a moderately powerful item that offers both utility and risk, balancing its attraction to valuables with a potential for endless quests.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:14:41.284375+00:00",
    "aiReviewedAt": "2026-07-23T21:14:41.284375+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_echoing_pipe": {
    "id": "mushroom_kingdom_item_echoing_pipe",
    "name": "Echoing Pipe of Lost Sounds",
    "description": "The Echoing Pipe of Lost Sounds, forged from ancient mushroom spores and the forgotten melodies of a bygone era, is a relic that allows you to capture and replay sounds from the past. Its crafted from the hardened essence of long-dead fungi, making its surface textured with intricate patterns of past events. Use it wisely; the echoes might reveal hidden secrets or mischievous spirits eager for mischief. You may catch snippets of valuable clues or just Wario's usual complaints about more coins!",
    "category": "curiosities",
    "price": 48000,
    "icon": "🎶",
    "stock": 2,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Sound Capture",
      "Spirit Attraction"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "snail_express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Sound Capture",
        "rules": "By expending a bonus action, you can record up to three seconds of sound. This recorded sound can be played back once as an action at any time within one hour of the recording."
      },
      {
        "title": "Spirit Attraction",
        "rules": "The pipe attracts mischievous spirits with a chance of 10% per minute for the first ten minutes after playback, doubling to 20% each subsequent five minutes. If successful, a mischievous spirit appears within 30 feet of you and can be used in combat or to gather information."
      }
    ],
    "levelRequirementReason": "Requires at least 8th level to handle the ancient magic inherent in the pipe.",
    "vendorReason": "Toad Town Market is known for selling relics of old, and this pipe fits right into that tradition.",
    "shippingDetail": "Snail Express ensures safe delivery with a one-day guarantee on all shipments to Toad Town.",
    "usage": {
      "activation": "Bonus action to record; action to play back.",
      "duration": "Instantaneous recording; one use per hour of playback.",
      "endsWhen": "Playback ends when the sound is played or after 1 minute if unplayed.",
      "charges": "Unlimited uses, but only one can be recorded at a time."
    },
    "priceReason": "Balanced as it requires significant magic and ancient craftsmanship while being useful in various adventuring situations.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T21:14:56.299786+00:00",
    "aiReviewedAt": "2026-07-23T21:14:56.299786+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_warp_stool": {
    "id": "mushroom_kingdom_item_warp_stool",
    "name": "Wario's Warp Stool of Sudden Travel",
    "description": "This rickety, bolted-together stool, crafted by Wario himself from mismatched parts, is a relic of his dubious craftsmanship. Its aged wood creaks with each use, and the paint peels to reveal patches of rusted metal. When activated, it teleports you to a random location within a 50-foot radius, but beware – there's a chance you'll land in a disoriented state, unable to act for one turn unless you succeed on a DC 12 Constitution saving throw.",
    "category": "equipment",
    "price": 110,
    "icon": "🚀",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "teleportation",
      "chance of disorientation"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "mushroom_carrier_beetle",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Teleportation",
        "rules": "Activates as an action. Instantaneous teleport to a random location within a 50-foot radius of your current position, excluding dangerous areas like lava or bottomless pits."
      },
      {
        "title": "Disorientation",
        "rules": "There's a 20% chance you will land in a disoriented state for one turn. On a successful DC 12 Constitution saving throw, the effect is negated. While disoriented, you have disadvantage on attack rolls and ability checks."
      }
    ],
    "levelRequirementReason": "This stool is simple enough that even low-level adventurers can use it, but its unpredictable nature makes it a challenge.",
    "vendorReason": "The Koopa Shop deals in all manner of Wario's creations, from the mundane to the dangerous, and this stool is no exception.",
    "shippingDetail": "Delivered by a mushroom carrier beetle, which may take up to one hour depending on traffic within the Mushroom Kingdom.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Teleportation is complete or you are disoriented and unable to act for one turn",
      "charges": "Unlimited uses"
    },
    "priceReason": "The stool's unpredictable nature, combined with its craftsmanship from Wario himself, justifies a higher price.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T21:14:23.033297+00:00",
    "aiReviewedAt": "2026-07-23T21:14:23.033297+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_gloomfang_blade": {
    "id": "middle_earth_gloomfang_blade",
    "name": "Gloomfang Blade",
    "description": "Gloomfang Blade whispers darkly as it dances in your hand, its blade forged from a meteorite that fell during the War of the Ring. The weapon's edge is as sharp as Mordor's shadows and can cleave through even the toughest orcish armor with ease. However, be wary; if you hold it too long without using it, the whispers may grow louder until they become unbearable, tempting your soul to join the Dark Lord’s realm.",
    "category": "equipment",
    "price": 3300,
    "icon": "🔪",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "shadow step",
      "bleeding chance"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "caravan of gnomes",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Shadow Step",
        "rules": "As a bonus action, you can use Gloomfang Blade to grant yourself a burst of speed. You gain a +10 foot movement bonus until the start of your next turn. This effect ends if you take any damage or if you move more than 30 feet in this time."
      },
      {
        "title": "Bleeding Chance",
        "rules": "There is a 15% chance that creatures hit by Gloomfang Blade suffer from the Bleeding condition, which deals an additional 2d6 slashing damage at the start of their turn. This effect ends if you attack again or if the Bleeding condition is removed."
      }
    ],
    "levelRequirementReason": "Gloomfang Blade's inherent malevolence and power require a high level to wield without risk.",
    "vendorReason": "The dwarves of Erebor possess the ancient knowledge needed to craft weapons that can harness such dark magic.",
    "shippingDetail": "Due to its volatile nature, Gloomfang Blade is shipped under strict conditions by the gnome caravan, ensuring safe transport.",
    "usage": {
      "activation": "Bonus action for Shadow Step; Instantaneous for Bleeding Chance upon attack.",
      "duration": "Until start of next turn for Shadow Step; Ends on subsequent attacks or condition removal for Bleeding.",
      "endsWhen": "Takes damage, moves more than 30 feet, or attacks again (Bleeding).",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP as a rare weapon with significant damage and special abilities.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:14:38.400852+00:00",
    "aiReviewedAt": "2026-07-23T21:14:38.400852+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_shire_sweetroll_of_fortune": {
    "id": "middle_earth_shire_sweetroll_of_fortune",
    "name": "Shire Sweetroll of Fortune",
    "description": "The Shire Sweetroll of Fortune, baked in the cozy kitchens of Hobbiton, is a treat infused with the very essence of Middle-earth's goodwill. Each crumb offers a chance for unexpected fortune – perhaps a fleeting boost to your strength or a momentary healing surge that could turn the tide of battle. Legend has it that these sweetrolls are not just food but tokens of the land’s benevolence, and many have found themselves in luck after indulging in one of these magical pastries.",
    "category": "consumables",
    "price": 110,
    "icon": "🍪",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Fortunate Bites",
      "Strength Surge"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fortunate Bites",
        "rules": "When consumed as a bonus action, the Shire Sweetroll grants temporary hit points equal to 2d8 + your Dexterity modifier. This effect lasts for 1 hour and can occur only once per day."
      },
      {
        "title": "Strength Surge",
        "rules": "There is a 30% chance that consuming this sweetroll will grant you a +2 bonus to Strength for the next 5 minutes, which can happen only once every 7 days."
      }
    ],
    "levelRequirementReason": "This treat is accessible to all adventurers as it requires no particular skill or expertise.",
    "vendorReason": "The Shire Shop stocks these treats, known for their unique properties and the joy they bring to visitors of the Shire.",
    "shippingDetail": "Delivered via trusted pony cart services from the Hobbiton bakery. Shipping is quick but may vary based on weather conditions in the Shire.",
    "usage": {
      "activation": "Eaten as a bonus action, providing its effects immediately.",
      "duration": "Fortunate Bites last for 1 hour; Strength Surge lasts for 5 minutes.",
      "endsWhen": "Effects end if you consume another Shire Sweetroll of Fortune within the specified duration.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The high price reflects its magical properties and the unique brewing process in the heart of the Shire, making it a rare commodity among adventurers.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T21:14:52.190180+00:00",
    "aiReviewedAt": "2026-07-23T21:14:52.190180+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_elven_songstone": {
    "id": "middle_earth_elven_songstone",
    "name": "Songstone of Silvanus",
    "description": "The Songstone of Silvanus, a flawless obsidian gem infused with ancient elven magic, hums softly as it protects and uplifts those who hold it. Crafted by master elves in the heart of Mirkwood, this stone pulses with protective energy that can be woven into melodies of resilience. It subtly shields allies from harm, reducing incoming damage by 15%, while also boosting morale to +2, ensuring spirits remain high during even the darkest battles.",
    "category": "curiosities",
    "price": 48000,
    "icon": "🎶",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Protection Aura",
      "Morale Boost"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_horse",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Protection Aura",
        "rules": "When activated as a bonus action, the Songstone creates an aura around the user and their allies within 10 feet. This aura reduces all damage taken by 15% for up to 1 minute per use until expended."
      },
      {
        "title": "Morale Boost",
        "rules": "The stone grants a +2 bonus to morale checks and resistance against negative conditions, lasting for the duration of one short rest or until the user's next extended rest."
      }
    ],
    "levelRequirementReason": "Only those with sufficient experience can harness the ancient magic embedded in this precious stone.",
    "vendorReason": "The Songstone is a premium item, crafted by master elves and sold exclusively at their market.",
    "shippingDetail": "Delivered swiftly by swift winged horses from the heart of Mirkwood.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute per use, up to a maximum of 5 minutes total per long rest",
      "endsWhen": "After expending all uses or until the user completes their next extended rest",
      "charges": "5 uses"
    },
    "priceReason": "This mythic item, crafted by master elves and imbued with ancient magic, commands a price befitting its rarity.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T21:15:08.045756+00:00",
    "aiReviewedAt": "2026-07-23T21:15:08.045756+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_sticky_shard": {
    "id": "grand_country_sticky_shard",
    "name": "Gravity Grip Shard",
    "description": "The Gravity Grip Shard hums with the latent potential of gravitational forces, pulsating in your hand as you prepare to ascend sheer cliffs and ceilings. This fragment, crafted from ancient meteoric iron, grants you an adhesive grip that allows you to cling to surfaces as if by nature’s own design. With each step, the shard whispers secrets of cosmic balance, enhancing both your climbing speed and fall damage reduction.",
    "category": "equipment",
    "price": 8900,
    "icon": "✨",
    "stock": 7,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "adhesive_grip",
      "enhanced_climbing"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "gravity_packet",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Adhesive Grip",
        "rules": "As a bonus action, you can activate the Gravity Grip Shard to adhere yourself to any wall or ceiling surface. While adhered, you have advantage on Strength (Athletics) checks made to climb and are immune to falling damage."
      },
      {
        "title": "Enhanced Climbing",
        "rules": "While the shard is active, your climbing speed increases by 10 feet for the duration of one short rest or until you deactivate it. This effect does not stack with other sources of climbing speed bonuses."
      }
    ],
    "levelRequirementReason": "The Gravity Grip Shard requires a minimum character level to ensure players can safely and effectively utilize its unique properties.",
    "vendorReason": "Vertical Vendor specializes in items that defy gravity, making the Gravity Grip Shard an ideal addition to their inventory.",
    "shippingDetail": "The shard is carefully packaged within a gravity-stabilized container to ensure it arrives intact.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until you deactivate or until the end of your next turn (whichever comes first)",
      "endsWhen": "If you deactivate the shard, fall from height, or are knocked prone",
      "charges": "Unlimited; recharges after a short rest"
    },
    "priceReason": "Balanced at 1000 XP to reflect its unique gravitational properties and limited utility.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:15:39.237009+00:00",
    "aiReviewedAt": "2026-07-23T21:15:39.237009+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_layer_scroll": {
    "id": "grand_country_layer_scroll",
    "name": "Echoing Layer Scroll",
    "description": "Unroll this shimmering scroll, and hear the whispers of forgotten layers! As you unfold its parchment, the echoes reveal hidden paths and secret doors within the very walls of ancient castles. The scroll’s light glows with an otherworldly hue, hinting at the secrets that lie just beyond reach. Beware, for in these whispers lies both treasure and peril; get lost too long, and it may echo you to a realm far from home.",
    "category": "curiosities",
    "price": 690,
    "icon": "📜",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "reveal_hidden_path",
      "chance_to_find_treasure"
    ],
    "vendor": "layer_market",
    "shippedBy": "dimensional_tube",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Reveal Hidden Path",
        "rules": "When activated by reading the scroll, this effect reveals hidden paths and secret doors within a 30-foot radius. The effect lasts for 1 minute or until you move more than 5 feet from your original position."
      },
      {
        "title": "Chance to Find Treasure",
        "rules": "Each time you successfully find a hidden path using the scroll, there is a 20% chance that a secret door leads directly to a chest containing treasure worth up to 1d6 x 100 XP. This effect has no save DC and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This scroll requires at least third-level spellcasters due to its intricate magical construction.",
    "vendorReason": "The Layer Market specializes in items that reveal hidden layers of reality, making the Echoing Layer Scroll a fitting addition for their inventory.",
    "shippingDetail": "Ships via Dimensional Tube, which can be slow due to the instability of the routes between dimensions.",
    "usage": {
      "activation": "Reading the scroll aloud and concentrating on it for at least one minute.",
      "duration": "1 minute or until you move more than 5 feet from your original position.",
      "endsWhen": "The effect ends when the duration expires or you exceed a 5-foot movement range.",
      "charges": "Unlimited uses, but only once per long rest."
    },
    "priceReason": "The Echoing Layer Scroll is priced at 1000 XP to reflect its complex magic and rare construction.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T21:15:36.016745+00:00",
    "aiReviewedAt": "2026-07-23T21:15:36.016745+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_warp_tune": {
    "id": "grand_country_warp_tune",
    "name": "Temporal Echo Tuning",
    "description": "With a delicate twist of your wrist, Temporal Echo Tuning weaves a symphony of temporal distortions around you. Listen as the air hums with the discordant echoes of shifting realities, bending time to your will for a fleeting moment. Enemies caught in this maelstrom are momentarily disoriented, their minds scrambled by the chaotic resonance. This ancient artifact, crafted from the fractured essence of forgotten timelines, is a rare and unpredictable service that might just scramble not only foes' minds but also yours!",
    "category": "services",
    "price": 3300,
    "icon": "🕰️",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "temporal_maelstrom",
      "mind_scramble"
    ],
    "vendor": "side_seller",
    "shippedBy": "Chronometric Crate",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Temporal Maelstrom",
        "rules": "As a bonus action, you create a localized distortion in time around you. Creatures within a 10-foot radius must succeed on a DC 15 Constitution saving throw or be stunned until the end of your next turn."
      },
      {
        "title": "Mind Scramble",
        "rules": "For 1 minute after using Temporal Maelstrom, all creatures that start their turn within 30 feet of you have disadvantage on attack rolls and ability checks. This effect ends if you take damage or if you use this service again."
      }
    ],
    "levelRequirementReason": "This item requires significant focus to manipulate time safely, thus it is best suited for a 6th-level caster.",
    "vendorReason": "Side sellers often trade in unique and unpredictable services, making Temporal Echo Tuning an ideal addition to their inventory.",
    "shippingDetail": "The Chronometric Crate ensures safe transportation of delicate temporal artifacts like this one.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous, with a 1-minute effect duration after creating the maelstrom",
      "endsWhen": "You take damage or use this service again",
      "charges": "Unlimited"
    },
    "priceReason": "The item's unpredictable nature and rare crafting materials justify its high price.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-23T21:15:43.336641+00:00",
    "aiReviewedAt": "2026-07-23T21:15:43.336641+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_goblin_grog_potion": {
    "id": "faerun_item_goblin_grog_potion",
    "name": "Goblin Grog of Temporary Ferocity",
    "description": "The Goblin Grog of Temporary Ferocity is a foul-smelling, murky green potion brewed by goblins notorious for their unconventional alchemy. This concoction, laced with herbs and fungi found only in Faerûn's darkest corners, grants the imbiber a surge of strength and reckless courage. For 6 turns, your Strength increases by 3, turning you into a berserk battler ready to face any foe head-on. As if that weren't enough, there's also a 10% chance for your next melee attack to stun an opponent, making this potion a dangerous yet unpredictable ally in the heat of battle.",
    "category": "consumables",
    "price": 110,
    "icon": "🧪",
    "stock": 91,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "Strength Boost",
      "Stun on Attack"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "hawk courier service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Strength Boost",
        "rules": "When consumed, this potion grants you a +3 bonus to Strength for 6 turns. You can use this potion as an action. If the effect ends before its duration expires due to a save or other means, any remaining time is lost."
      },
      {
        "title": "Stun on Attack",
        "rules": "There's a 10% chance your next melee attack deals additional effects: it has advantage on the roll and can cause a target to be stunned for 1 round. This effect requires you to make a melee attack as an action."
      }
    ],
    "levelRequirementReason": "This potion is designed for novice adventurers, providing them with a burst of strength and a chance at a decisive blow.",
    "vendorReason": "As a vendor known to stock unique and unusual items, Baldur's Bazaar is the perfect place to find this unconventional potion.",
    "shippingDetail": "Delivered by the swift hawk couriers, ensuring you receive your potion as fresh as possible.",
    "usage": {
      "activation": "action or bonus action",
      "duration": "6 turns",
      "endsWhen": "ends early upon a successful saving throw against its effects",
      "charges": "unlimited"
    },
    "priceReason": "The unique brewing process and rare ingredients make this potion an expensive yet valuable tool for adventurers.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T21:15:23.067099+00:00",
    "aiReviewedAt": "2026-07-23T21:15:23.067099+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_shard_of_ancient_echoes": {
    "id": "faerun_item_shard_of_ancient_echoes",
    "name": "Shard of Ancient Echoes",
    "description": "A shard of Ancient Echoes is a crystalline fragment that once adorned the walls of a long-lost temple. When held, it hums with the faint whispers of ancient languages and forgotten histories. Touching its surface evokes vivid memories of past events, possibly from an age when magic flowed freely through the land. It may also inadvertently summon minor spirits that assist or hinder the wielder’s efforts, depending on the user's actions.",
    "category": "curiosities",
    "price": 49000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Whispering Insights",
      "Spirits' Guidance"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "magical_portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whispering Insights",
        "rules": "When a character touches the Shard of Ancient Echoes and makes an Intelligence (History) check, they have advantage on the roll. The shard can be used once per short or long rest."
      },
      {
        "title": "Spirits' Guidance",
        "rules": "The Shard attracts minor spirits that provide helpful guidance or minor assistance for 1 hour. If the user fails a Wisdom saving throw (DC 12), the spirits may instead interfere with their plans, adding disadvantage on checks and saving throws until dismissed. The shard can be used once per day."
      }
    ],
    "levelRequirementReason": "The Shard requires minimal magical energy to interact with, making it accessible but still rare.",
    "vendorReason": "Waterdeep's market attracts collectors and scholars who seek ancient relics like the Shard of Ancient Echoes.",
    "shippingDetail": "The shard arrives via a magical portal, ensuring it reaches its destination safely and quickly.",
    "usage": {
      "activation": "Interacting with the Shard by touching it for at least one turn.",
      "duration": "Instantaneous effect; duration of the spirit's assistance or interference varies.",
      "endsWhen": "The effects end when the user dismisses them, after their duration expires, or if used again.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP to reflect its mythic rarity and occasional magical assistance.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T21:15:39.073457+00:00",
    "aiReviewedAt": "2026-07-23T21:15:39.073457+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_echoing_ball": {
    "id": "pokemon_item_echoing_ball",
    "name": "Echoing Ball of Confusion",
    "description": "The Echoing Ball of Confusion is a peculiar metallic sphere, its surface etched with swirling patterns that seem to pulse with energy. Crafted from ancient, enchanted metal by a reclusive forger, this device amplifies the cries and roars of Pokémon into a disorienting cacophony. Use it to briefly stun enemies or confuse yourself, but be wary—its unpredictable effects often leave you hearing strange melodies in your mind, like Pikachu serenading under the stars.",
    "category": "consumables",
    "price": 690,
    "icon": "🤯",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Stun Target",
      "Self-Confusion"
    ],
    "vendor": "pokemart",
    "shippedBy": "Pokémail Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Stun Target",
        "rules": "When thrown as a bonus action, this device amplifies the cries of nearby Pokémon into an intense wave. The target must succeed on a DC 15 Constitution saving throw or be stunned for 1 round."
      },
      {
        "title": "Self-Confusion",
        "rules": "After using it, you are confused for 2 turns. During this time, you have disadvantage on attack rolls and ability checks."
      }
    ],
    "levelRequirementReason": "Crafted from ancient metal imbued with the essence of legendary Pokémon, the Echoing Ball requires a level 5 caster to wield its power effectively.",
    "vendorReason": "Pokemart, known for its vast array of items that cater to trainers and their Pokémon, stocks this unique device.",
    "shippingDetail": "Ships via Pokémail Express, ensuring swift delivery straight to your door.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous (target stunned for 1 round)",
      "endsWhen": "The target makes a successful saving throw or the duration expires",
      "charges": "Recharge after a long rest"
    },
    "priceReason": "Its rarity and enchanted construction, combined with its unpredictable effects, justify this fair value in experience points.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T21:15:56.347302+00:00",
    "aiReviewedAt": "2026-07-23T21:15:56.347302+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_ancient_badge_of_wisdom": {
    "id": "pokemon_item_ancient_badge_of_wisdom",
    "name": "Ancient Badge of Wisdom",
    "description": "The Ancient Badge of Wisdom, a tarnished but still recognizable symbol of ancient knowledge, whispers tales of bygone champions who wielded it. Crafted in the twilight of Pokémon history, this badge grants fleeting insights into strategic prowess, allowing you to anticipate your foe's next move with uncanny precision. Touching its surface releases a surge of wisdom, momentarily enhancing your critical hit chance and offering a glimpse into an opponent’s strategic mind.",
    "category": "curiosities",
    "price": 3300,
    "icon": "🧠",
    "stock": 15,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Wisdom Boost",
      "Critical Surge"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Safari Bike Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Wisdom Boost",
        "rules": "Activates as a bonus action. Grants +2 to Intelligence (Wisdom) checks and saving throws for 1 minute, or until you take damage."
      },
      {
        "title": "Critical Surge",
        "rules": "Activates on your turn when you hit with an attack roll of 18 or higher. Increases the attack’s critical multiplier from x2 to x3 until the start of your next turn."
      }
    ],
    "levelRequirementReason": "Requires at least level 5 to use effectively, as it enhances strategic thinking and combat acumen.",
    "vendorReason": "The Safari Shop, a repository of historical artifacts, offers this badge as part of its collection of legendary relics.",
    "shippingDetail": "Delivered by Safari Bike Express within the next full moon cycle.",
    "usage": {
      "activation": "Bonus action or on hit roll (as per effects)",
      "duration": "1 minute, or until you take damage for Wisdom Boost; Until the start of your next turn for Critical Surge",
      "endsWhen": "The duration expires or when you take damage",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rare crafting and strategic value.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-23T21:16:26.906559+00:00",
    "aiReviewedAt": "2026-07-23T21:16:26.906559+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_wario's_evolution_pouch": {
    "id": "pokemon_item_wario's_evolution_pouch",
    "name": "Wario’s Evolution Pouch",
    "description": "This suspiciously plump pouch smells faintly of berries and regret. Crafted by Wario himself, it holds the concentrated essence of evolution – a mix of partially digested Pokémon snacks and his experimental formulas. Rumors suggest that using this pouch has a 50% chance to randomly evolve your current Pokémon, but it also grants you a temporary boost to your speed for 2 turns and increases your attack stat by +10 for those same 2 turns.",
    "category": "equipment",
    "price": 8900,
    "icon": "🧪",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Evolution Boost",
      "Speed Surge"
    ],
    "vendor": "league_store",
    "shippedBy": "Delivery Drone",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Evolution Boost",
        "rules": "Activates as a bonus action. There is a 50% chance that your current Pokémon will evolve into another form. This effect has no save DC and does not consume charges."
      },
      {
        "title": "Speed Surge",
        "rules": "Activates as an action. Grants you a +10 temporary boost to your speed stat for the next 2 turns. This effect ends when you take your next turn after its duration expires, or if you are incapacitated."
      }
    ],
    "levelRequirementReason": "Requires level 5 to use this item effectively given the effects and risk involved.",
    "vendorReason": "The league store deals in rare and exotic items, including Wario's experimental creations.",
    "shippingDetail": "Ships immediately via Delivery Drone for a small premium fee.",
    "usage": {
      "activation": "Bonus action or Action (Evolution Boost/Speed Surge)",
      "duration": "Instantaneous (Evolution Boost), 2 turns (Speed Surge)",
      "endsWhen": "Ends upon taking the next turn after its duration expires, or if you are incapacitated.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's experimental nature and moderate but impactful effects.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:16:01.863702+00:00",
    "aiReviewedAt": "2026-07-23T21:16:01.863702+00:00",
    "aiReviewVersion": 1
  },
  "internet_glitch_berry": {
    "id": "internet_glitch_berry",
    "name": "Viral Burst Berry",
    "description": "The Viral Burst Berry is a peculiar, shimmering fruit that looks like it was crafted from corrupted data streams and fragmented digital remnants. When consumed, it unleashes a chaotic burst of internet energy, temporarily boosting speed and strength while causing brief moments of confusion for nearby foes. This berry's effects are as unpredictable as they are thrilling, making players feel as if they've stepped into the wilds of cyberspace.",
    "category": "consumables",
    "price": 3300,
    "icon": "💥",
    "stock": 78,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grant_5_speed_for_6_turns",
      "chance_to_cause_confusion"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "packet_delivery",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Grant 5 Speed for 6 Turns",
        "rules": "Upon consuming the berry, you gain a +5 bonus to your movement speed as an action. This effect lasts for 6 turns and ends if you take any damage."
      },
      {
        "title": "Chance to Cause Confusion",
        "rules": "For every 2 turns that pass while you are under the effects of this berry, there is a 30% chance that you or an adjacent ally becomes confused for 1 turn. This confusion ends if the affected creature takes any damage."
      }
    ],
    "levelRequirementReason": "The Viral Burst Berry's unpredictable nature requires players to be at least 6th level to manage its chaotic effects without being overwhelmed.",
    "vendorReason": "Pixel Shop, known for its unique and experimental items, is the perfect vendor for this digital delicacy.",
    "shippingDetail": "The berry arrives fresh from the internet, requiring special handling by packet delivery to ensure it remains potent.",
    "usage": {
      "activation": "action",
      "duration": "6 turns",
      "endsWhen": "taking damage or confusion ends",
      "charges": "unlimited"
    },
    "priceReason": "The Viral Burst Berry is priced at 1000 XP, reflecting its rare and experimental nature.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:16:27.153085+00:00",
    "aiReviewedAt": "2026-07-23T21:16:27.153085+00:00",
    "aiReviewVersion": 1
  },
  "internet_void_shard": {
    "id": "internet_void_shard",
    "name": "Nullspace Fragment",
    "description": "A jagged shard ripped from the heart of a forgotten server – handle with caution! This fragment can temporarily disrupt enemy magic and digital defenses, but prolonged exposure may lead to…unpleasant data corruption.",
    "category": "forbidden",
    "price": 390000,
    "icon": "👾",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "reduce_magic_damage_by_50%",
      "chance_to_silence_enemy_spellcasting",
      "small_drain_on_mana"
    ],
    "vendor": "cyber_market",
    "shippedBy": "encrypted_drone",
    "levelRequirement": 18
  },
  "internet_meme_amplifier": {
    "id": "internet_meme_amplifier",
    "name": "Reaction Cascade Device",
    "description": "The Reaction Cascade Device, a gleaming contraption made of salvaged parts and mysterious alloys, channels the chaotic energy of internet memes into your party's favor. With each activation, it broadcasts a cascade of viral trends that temporarily boosts your charisma, making everyone more charismatic and increasing the chance to trigger beneficial meme effects like distraction or confusion. Be wary—its power can sometimes backfire, causing minor damage over time as if hit by a weak force effect.",
    "category": "equipment",
    "price": 8900,
    "icon": "🤣",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "charisma_boost",
      "meme_effect_chance"
    ],
    "vendor": "data_dealer",
    "shippedBy": "express courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "Activating the device grants an ally within 30 feet a +3 bonus to Charisma checks and saving throws. This effect lasts for 1 minute or until the target uses its reaction to end it."
      },
      {
        "title": "Meme Effect Chance",
        "rules": "Each time an ally of the user triggers a successful save against a meme-related effect, they have a 25% chance (increasing by 5% per additional success) to also trigger a beneficial meme effect. This effect has no save DC and lasts for 1 minute or until the target uses its reaction to end it."
      }
    ],
    "levelRequirementReason": "The Reaction Cascade Device requires only level 1 due to its limited, thematic effects.",
    "vendorReason": "As a tech-savvy vendor with a knack for collecting and trading strange devices, Data Dealer is the perfect fit for such an internet-inspired gadget.",
    "shippingDetail": "Shipped via express courier within 24 hours, ensuring the device arrives in pristine condition.",
    "usage": {
      "activation": "reaction",
      "duration": "1 minute or until ended by a reaction",
      "endsWhen": "the user uses their reaction to end it or the duration ends",
      "charges": "unlimited"
    },
    "priceReason": "The Reaction Cascade Device is priced at 1000 XP due to its thematic, limited effects that enhance party charisma and introduce meme-based interactions.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-23T21:16:45.199348+00:00",
    "aiReviewedAt": "2026-07-23T21:16:45.199348+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_voidstone_resonator": {
    "id": "the_edge_voidstone_resonator",
    "name": "Voidstone Resonator",
    "description": "The Voidstone Resonator hums with the raw power of forgotten voids, its obsidian surface pulsating with an eerie light that seems to shift with each passing moment. This device grants temporary resistance to psychic damage and subtly amplifies one's awareness, but a whisper of madness accompanies every use. Caution is advised when wielding this artifact, for it not only protects from the mind’s assault but also opens portals to realms where sanity fades.",
    "category": "equipment",
    "price": 3300,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Resistance to Psychic Damage",
      "Risk of Madness"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "dimensional rift",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Resistance to Psychic Damage",
        "rules": "When you activate the Voidstone Resonator, you gain resistance to psychic damage for 1 minute. If you are hit by a creature’s psychic attack within this time, you can use your reaction to attempt a DC 15 Wisdom saving throw, halving the damage taken."
      },
      {
        "title": "Risk of Madness",
        "rules": "There is a 1% chance each time you activate the Resonator that you gain the mad trait. If you do, you must succeed on a DC 16 Intelligence saving throw at the start of your next turn or take 1d4 levels of madness. This effect has no save until after 24 hours."
      }
    ],
    "levelRequirementReason": "It requires some experience to handle such a volatile and powerful device without succumbing to its madness.",
    "vendorReason": "The Abyss Trader is known for their dealings in the most dangerous and exotic artifacts, including those that dabble with the void's mysteries.",
    "shippingDetail": "Ships via a dimensional rift, which can cause minor temporal disruptions to the delivery location. Delivery time varies.",
    "usage": {
      "activation": "Bonus Action (activate once per short rest)",
      "duration": "1 minute",
      "endsWhen": "The duration ends if you are hit by a creature’s psychic attack or if you use your reaction to end it early.",
      "charges": "Unlimited, but only one activation per short rest"
    },
    "priceReason": "Balanced at 1000 XP as its effects are potent and can be dangerous when used improperly.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:16:58.649407+00:00",
    "aiReviewedAt": "2026-07-23T21:16:58.649407+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_godly_abyssal_shard": {
    "id": "the_edge_godly_abyssal_shard",
    "name": "Abyssal Shard of Nullity",
    "description": "The Abyssal Shard of Nullity is a fragment torn from the heart of the godly abyss, a relic that can nullify all magic within its radius and briefly freeze time around it. This shard, when activated, drains ambient magical energies, rendering spells and abilities useless for five rounds in a ten-foot radius. The core itself has an unpredictable charm, occasionally freezing nearby foes in a spell-like stasis for the duration of the effect's activation. A terrifyingly useful item for greedy collectors or those who wish to outmaneuver their adversaries.",
    "category": "equipment",
    "price": 750000,
    "icon": "🧊",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "nullifies magic within a 10-foot radius",
      "occasional time freeze"
    ],
    "vendor": "final_shop",
    "shippedBy": "Guardian Angel Courier Service",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Nullification Radius",
        "rules": "Activates with a bonus action, nullifying all magic within a ten-foot radius for five rounds. Targets must succeed on a DC 25 Dexterity saving throw or be rendered immobile and unable to use spells or abilities."
      },
      {
        "title": "Time Freeze",
        "rules": "Has a 1% chance to activate with the nullification effect, freezing nearby foes in time for one round. Victims must make a DC 25 Strength saving throw or be immobilized as their movements are halted by an unseen force."
      }
    ],
    "levelRequirementReason": "Requires significant magical aptitude and control to properly activate the shard's godly effects.",
    "vendorReason": "Final Shop, known for its rarest and most powerful wares, naturally stocks this godly relic.",
    "shippingDetail": "Ships via Guardian Angel with a two-day expedited delivery to ensure the shard arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Five rounds for nullification, one round of time freeze (if activated)",
      "endsWhen": "Targeted save or duration ends",
      "charges": "Unlimited charges"
    },
    "priceReason": "Balanced at 1000 XP as it offers a powerful combination of area denial and time manipulation, but with specific limitations.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-23T21:16:55.366344+00:00",
    "aiReviewedAt": "2026-07-23T21:16:55.366344+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_skullsplitter": {
    "id": "warhammer_skullsplitter",
    "name": "Skullsplitter of Shattered Wills",
    "description": "The Skullsplitter of Shattered Wills is a warhammer that exudes an aura of bone and death. Its head is crafted from the skulls of ancient warriors, each etched with their final moments. This weapon guarantees a crushing blow, not just to your enemies but also to their morale. It's said that the hammer's strikes can break even the strongest wills, leaving foes demoralized for hours. And should you ever lose a finger, it’s rumored that Wario himself designed its grip for just such occasions.",
    "category": "equipment",
    "price": 110,
    "icon": "🔨",
    "stock": 65,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Crush Morale",
      "Increased Critical Chance"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "Imperial Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Crush Morale",
        "rules": "When you hit an enemy with this weapon, the target must succeed on a DC 15 Wisdom saving throw or become frightened for up to 1 minute. This effect can be used once per long rest."
      },
      {
        "title": "Increased Critical Chance",
        "rules": "If you roll a natural 19 or 20 on an attack roll with this weapon, the attack is considered a critical hit. This effect is unlimited."
      }
    ],
    "levelRequirementReason": "The hammer's ancient power requires a seasoned warrior to wield it effectively.",
    "vendorReason": "The Imperial Armory stocks only the most potent and historically significant weapons, making it the go-to source for items like the Skullsplitter of Shattered Wills.",
    "shippingDetail": "Special handling required; delivery takes an additional day due to its fragile nature.",
    "usage": {
      "activation": "On a melee attack with this weapon",
      "duration": "Instantaneous for Crush Morale, up to 1 minute when successful",
      "endsWhen": "The target successfully saves or the effect's duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The hammer's unique crafting process and ancient lore significantly increase its value.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T21:17:01.250238+00:00",
    "aiReviewedAt": "2026-07-23T21:17:01.250238+00:00",
    "aiReviewVersion": 1
  },
  "curiosity_echoing_shard": {
    "id": "curiosity_echoing_shard",
    "name": "Echoing Shard of Lost Voices",
    "description": "The Echoing Shard of Lost Voices, a fragment from an ancient empire’s communication device, hums with the whispers of countless battles and cries for help. When held close to one's ear, it may reveal hidden tactical advantages, but those who linger too long risk succumbing to its psychic tides, causing temporary disorientation. This shard is favored by Wario, who always finds a way to turn this peculiar artifact into a makeshift megaphone or speaker.",
    "category": "curiosities",
    "price": 690,
    "icon": "👂",
    "stock": 38,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "reveals enemy weaknesses",
      "causes minor disorientation"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Winged Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Reveal Enemy Weaknesses",
        "rules": "When the shard is held close to one's ear, the user can make a Wisdom (Perception) check. On a success, they learn one weakness of an adjacent enemy creature for 1 minute."
      },
      {
        "title": "Minor Disorientation",
        "rules": "Holding the shard too long causes temporary disorientation. The user must succeed on a DC 12 Constitution saving throw or become stunned until the end of their next turn."
      }
    ],
    "levelRequirementReason": "Requires at least 8th level to handle the psychic strain and tactical insight the shard demands.",
    "vendorReason": "The chaos dealer, with their knack for mysterious artifacts, always has a piece of forgotten lore like this shard.",
    "shippingDetail": "Ships swiftly via Winged Courier, but the parcel may arrive in fragments if not handled carefully.",
    "usage": {
      "activation": "Object Interaction to hold close to one's ear for 1 minute.",
      "duration": "1 minute per use or until the user becomes disoriented.",
      "endsWhen": "The user either successfully uses it, becomes disoriented, or drops it.",
      "charges": "Unlimited; the shard regenerates after a short rest."
    },
    "priceReason": "Balanced at 1000 XP to reflect its limited stock and unique utility in combat.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:17:37.952821+00:00",
    "aiReviewedAt": "2026-07-23T21:17:37.952821+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_voidbringer": {
    "id": "warhammer_voidbringer",
    "name": "Voidbringer's Lament",
    "description": "Voidbringer's Lament is a cursed warhammer forged from the twisted remnants of The Fated Place, its surface etched with chaotic runes that seem to pulse with malevolent energy. As you wield it, your strength wanes, yet you gain fleeting glimpses into the fractured reality of the void. It exudes an aura of dread and despair, causing nearby foes to stagger in fear as if the very fabric of their existence is unraveling.",
    "category": "equipment",
    "price": 3300,
    "icon": "🔥",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "chaos aura",
      "fearful touch"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Dimensional Rift",
    "levelRequirement": 11,
    "effectDetails": [
      {
        "title": "Chaos Aura",
        "rules": "While wielding Voidbringer's Lament, you emit an aura that deals 15-20 necrotic damage to all creatures within 10 feet at the start of your turn. This effect has a maximum duration of one minute and can only occur once per short or long rest."
      },
      {
        "title": "Fearful Touch",
        "rules": "As an action, you can touch a creature with Voidbringer's Lament to cause it to make a DC 15 Wisdom saving throw. On a failed save, the target is frightened until the start of your next turn."
      }
    ],
    "levelRequirementReason": "Wielding this cursed weapon requires a deep understanding of its chaotic energies and a resilience that only comes with experience.",
    "vendorReason": "Fate Forge has the knowledge and resources to craft such a dangerous but powerful relic, balancing the risks against its immense potential.",
    "shippingDetail": "The weapon is shipped via Dimensional Rift, ensuring it arrives intact despite the inherent dangers of traveling through the void.",
    "usage": {
      "activation": "Action or Reaction (to use the Fearful Touch ability)",
      "duration": "Instantaneous for Fearful Touch; Chaos Aura lasts one minute",
      "endsWhen": "At the end of your turn, if you do not have any enemies within range of its aura",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's rarity and cursed nature justify a price that reflects both its power and inherent danger.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:17:28.672901+00:00",
    "aiReviewedAt": "2026-07-23T21:17:28.672901+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_sticky_crumb": {
    "id": "almost_edge_item_sticky_crumb",
    "name": "Glazed Slipstone",
    "description": "The Glazed Slipstone is a shimmering, translucent fragment of ancient stone that gleams with an otherworldly light. It pulses gently, exuding a sweetness so potent it might just pull you closer to the void or anchor you firmly in place. This relic grants fleeting moments of heightened reflexes and an unsettling sense of grounding, ensuring your feet remain planted even when the world around you seems to dissolve into shadow.",
    "category": "consumables",
    "price": 110,
    "icon": "✨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Heals 10 HP",
      "Grants +3 Dexterity for 3 turns"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Void Portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Touch",
        "rules": "When consumed, this fragment heals the user for 10 hit points. It can only be used once per day."
      },
      {
        "title": "Enhanced Agility",
        "rules": "+3 to Dexterity for 3 turns upon activation. This effect does not stack with other sources of Dexterity bonuses and ends if you take damage or use your reaction before the duration expires."
      }
    ],
    "levelRequirementReason": "This relic is crafted from ancient, yet still accessible materials, making it suitable for beginning adventurers.",
    "vendorReason": "The edge_wanderer is known to traverse the realms and gather such oddities for their shop.",
    "shippingDetail": "Arrives via a mysterious void portal, ensuring secrecy and timely delivery.",
    "usage": {
      "activation": "Eaten or consumed as an action",
      "duration": "3 turns",
      "endsWhen": "You take damage or use your reaction before the duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The Glazed Slipstone is priced high due to its rare nature and the arcane energy required for its creation.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T21:17:42.199395+00:00",
    "aiReviewedAt": "2026-07-23T21:17:42.199395+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_chronal_brace": {
    "id": "almost_edge_item_chronal_brace",
    "name": "The Echo of the Fall",
    "description": "The Echo of the Fall is a tarnished silver brace etched with swirling patterns that resemble the delicate crisscrossing of pastry dough. It whispers fragments of forgotten moments, allowing its wearer to glimpse fleeting echoes of past events. However, prolonged exposure can cause the mind to whirl like a dizzying pastry, leading to small but growing risks of madness. Legends say this brace is an artifact from a time when reality and memory were intertwined, now wielded by those who dare to touch the fabric of time itself.",
    "category": "equipment",
    "price": 8900,
    "icon": "⏳",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Echo Glimpse",
      "Madness Risk"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Dimensional Rift Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Temporal Echo Glimpse",
        "rules": "As a bonus action, the wearer can activate this effect to gain advantage on one Intelligence check or saving throw. This effect lasts for 1 minute. If used while under the influence of temporal distortions, there is a small chance (5%) that the user becomes overwhelmed by madness."
      },
      {
        "title": "Madness Risk",
        "rules": "After using Temporal Echo Glimpse three times, the wearer has a 10% chance to become dazed for 1 minute on each subsequent use. This effect stacks with other sources of madness. The chance increases by 5% after every additional activation until it reaches 30%. At this point, the user becomes permanently dazed."
      }
    ],
    "levelRequirementReason": "To wield an artifact that manipulates time, a character must have reached at least sixth level to demonstrate the necessary mental fortitude and wisdom.",
    "vendorReason": "The Void Merchant, with his access to ancient and forgotten artifacts, is known for carrying items like The Echo of the Fall, which are relics of bygone eras and mysterious origins.",
    "shippingDetail": "Ships via the Dimensional Rift Courier, a service that can deliver from one end of reality to another but may experience slight delays due to temporal inconsistencies.",
    "usage": {
      "activation": "Bonus action to activate Temporal Echo Glimpse. The user must be conscious and able to perform actions.",
      "duration": "1 minute for each use of Temporal Echo Glimpse, or until the effect is ended by a successful saving throw against madness.",
      "endsWhen": "The wearer successfully saves against the madness risk or the effect duration ends.",
      "charges": "Unlimited uses, but the chance of madness increases with repeated activations."
    },
    "priceReason": "The Echo of the Fall's price is balanced at 1000 XP to reflect its rarity as an epic item that manipulates temporal echoes and comes with a significant risk of madness.",
    "priceOriginal": 8750,
    "priceReviewedAt": "2026-07-23T21:17:48.191346+00:00",
    "aiReviewedAt": "2026-07-23T21:17:48.191346+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_liminal_shard": {
    "id": "almost_edge_item_liminal_shard",
    "name": "Whispering Obsidian Tear",
    "description": "The Whispering Obsidian Tear is a perfectly smooth shard of obsidian, its surface etched with arcane runes that seem to hum with an ancient lament. When held, it draws forth fleeting visions of lost places and impossible geometries, granting the bearer insights into forgotten lore and strange realities. This collector's item, crafted by the Liminal Trader, provides +2 Wisdom and increases resistance to psychic damage, making it a prized possession for those who navigate the boundaries between worlds.",
    "category": "curiosities",
    "price": 3300,
    "icon": "🖤",
    "stock": 5,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Insightful Visions",
      "Psychic Resistance"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Phantom Delivery Drone",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Insightful Visions",
        "rules": "When held, the Whispering Obsidian Tear grants the wielder +2 to Wisdom for 1 hour. The visions it reveals are random and can provide vague prophetic clues (roll on a d8: 1-3 = ancient lore, 4-6 = impossible geometry, 7-8 = lost places). These effects last until the end of the next long rest."
      },
      {
        "title": "Psychic Resistance",
        "rules": "While holding the Tear, the wielder has advantage on saving throws against psychic damage and has resistance to psychic damage. This effect persists for 10 minutes or until the wearer drops the tear."
      }
    ],
    "levelRequirementReason": "The item's arcane nature requires a minimum level of 7 to wield effectively.",
    "vendorReason": "The Liminal Trader specializes in items that blur the lines between realities, making this shard a fitting addition to their collection.",
    "shippingDetail": "Delivery is instantaneous through the use of the Phantom Delivery Drone. The item arrives fully charged and ready for use.",
    "usage": {
      "activation": "Passive effect while held.",
      "duration": "1 hour or until dropped, whichever comes first.",
      "endsWhen": "Dropping the Tear ends both effects.",
      "charges": "Unlimited; the item regenerates its charges upon being dropped."
    },
    "priceReason": "The item's unique properties and rarity justify its price, offering significant utility to those who can afford it.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:18:28.813555+00:00",
    "aiReviewedAt": "2026-07-23T21:18:28.813555+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_halo_of_discord": {
    "id": "kivotos_item_halo_of_discord",
    "name": "Halo of Discordant Harmony",
    "description": "The Halo of Discordant Harmony is a shimmering halo woven from the fractured emblems of student clubs, each shard bearing the crest of a rival organization. This artifact amplifies your persuasive abilities, but it also sows subtle discord among foes, causing them to question one another and falter in battle. Wear it and watch as enemies turn against themselves or fall into confusion, perfect for those who thrive on chaos and disruption.",
    "category": "curiosities",
    "price": 8900,
    "icon": "😈",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Persuasion Boost",
      "Friendly Fire"
    ],
    "vendor": "club_supply",
    "shippedBy": "drone_delivery",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Persuasion Boost",
        "rules": "Activates with a bonus action. Increases the wearer's Persuasion skill by +30%. The effect lasts until the start of your next turn, and it can be used once per short or long rest."
      },
      {
        "title": "Friendly Fire",
        "rules": "Triggers as a reaction when an enemy targets you with an attack. With 15% chance on each hit, the target instead attacks another random ally within reach of your attacker, causing friendly fire. This effect has no save DC and can only occur once per turn."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to channel the artifact's volatile energies effectively.",
    "vendorReason": "The club supply vendor frequently restocks with rare items from various student organizations, including this controversial artifact.",
    "shippingDetail": "Ships via drone within the next hour; delivery is instantaneous due to its fragile nature.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous effect when triggered by attack, lasts until start of next turn for Persuasion Boost",
      "endsWhen": "Used up once per short or long rest for Persuasion Boost; Friendly Fire ends on the target's next turn if not resolved.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect its unique and potentially disruptive abilities.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T21:18:20.395055+00:00",
    "aiReviewedAt": "2026-07-23T21:18:20.395055+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_godly_notes_of_silence": {
    "id": "kivotos_item_godly_notes_of_silence",
    "name": "Notes of Silence - The Divine Manuscript",
    "description": "The Notes of Silence - The Divine Manuscript is an ancient, leather-bound tome inscribed with cryptic symbols and prayers. Crafted by the founder of Kivotos, it whispers secrets that can nullify magical effects for six turns, providing a sacred shield against enchantments and illusions. However, its divine power comes at a cost: prolonged exposure to its aura might induce a state of profound silence, making speech impossible for those who wield it.",
    "category": "premium",
    "price": 750000,
    "icon": "🤫",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Nullifies Magical Effects",
      "Silence Spellcaster"
    ],
    "vendor": "student_store",
    "shippedBy": "imperial_transport",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Magical Nullification",
        "rules": "Activates as an action. Completely negates all magical effects on the target for six turns, granting immunity to spell and effect-based attacks. Ends if the target is subjected to another magical effect."
      },
      {
        "title": "Silence Spellcaster",
        "rules": "Has a 25% chance of silencing any spellcaster who attempts to cast a spell within 10 feet for one minute. The spellcaster must make a DC 17 Wisdom saving throw or be silenced, preventing all actions until the end of their next turn."
      }
    ],
    "levelRequirementReason": "Wielders need to have reached a high level of expertise and discipline to handle such powerful divine relics without succumbing to their effects.",
    "vendorReason": "The student store carries this item as it is an essential tool for scholars and mages seeking to master the arcane arts.",
    "shippingDetail": "Shipped via Imperial Transport with a special delivery escort due to its godly rarity.",
    "usage": {
      "activation": "Requires an action to activate its effects.",
      "duration": "Magical Nullification lasts for six turns, while Silence Spellcaster has a one-minute duration and can only be used once per long rest.",
      "endsWhen": "The effects end if the target is subjected to another magical effect or when the spellcaster fails their saving throw.",
      "charges": "Unlimited"
    },
    "priceReason": "This manuscript's price reflects its godly rarity and the profound power it wields, making it a valuable commodity for those who seek to master the arcane.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-23T21:18:24.597397+00:00",
    "aiReviewedAt": "2026-07-23T21:18:24.597397+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_wario_s_lucky_boots": {
    "id": "faerun_item_wario_s_lucky_boots",
    "name": "Wario’s Lucky Boot – Right Foot",
    "description": "Wario’s Lucky Boot – Right Foot is a finely crafted leather boot, once blessed by the infamous Wario himself. This boot offers a surprising boost to speed and agility, allowing its wearer to dart through combat with unmatched precision and grace. While it doesn't guarantee finding hidden gold or preventing bellyaches, it does increase your chance of dodging attacks and provides resistance to poison, making it an invaluable companion on any adventurer's journey.",
    "category": "equipment",
    "price": 9000,
    "icon": "👟",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increased_movement_speed",
      "resistance_to_poison"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "messenger_pigeon",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Increased Movement Speed",
        "rules": "While wearing this boot, you have advantage on Dexterity (Acrobatics) checks and can take a bonus action to dash once per short or long rest."
      },
      {
        "title": "Resistance to Poison",
        "rules": "You have resistance to poison damage. This effect lasts until the start of your next turn after consuming food, drink, or medicine that restores hit points."
      }
    ],
    "levelRequirementReason": "The boot's power is reserved for those who have proven their worth on the battlefield.",
    "vendorReason": "Waterdeep Market is known for its unique and rare items, including those blessed by infamous characters like Wario.",
    "shippingDetail": "The boot must be delivered via messenger pigeon to ensure it arrives safely and with all its mystical properties intact.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Lasts until the start of your next turn after consuming food, drink, or medicine that restores hit points.",
      "endsWhen": "Upon consuming food, drink, or medicine that restores hit points.",
      "charges": "Unlimited"
    },
    "priceReason": "The boot's mystical properties and the unique delivery method contribute to its fair value.",
    "priceOriginal": 2300,
    "priceReviewedAt": "2026-07-23T21:18:41.708098+00:00",
    "aiReviewedAt": "2026-07-23T21:18:41.708098+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_sticky_vine": {
    "id": "grand_country_sticky_vine",
    "name": "Gooey Gravity Grip",
    "description": "The Gooey Gravity Grip, a vine harvested from the upside-down forests of The Grand Country, exudes an adhesive sap that clings to surfaces with a tenacity unmatched by any natural plant. Its unique structure allows it to adapt to any surface, whether rock or wood, and can even resist minor gravitational shifts. This vine is not just a tool for climbing; it's also a snack, perfect for catching those elusive Wario-sized treats.",
    "category": "equipment",
    "price": 9000,
    "icon": "🌿",
    "stock": 42,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "sticky_grip",
      "gravity_resistance"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "winged beetle courier service",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Sticky Grip",
        "rules": "As an action, you can cause the Gooey Gravity Grip to release its grip on a surface. The vine exudes a sticky sap that allows it to adhere to any solid material with a Strength (Athletics) check contested by the DC 15. Once adhered, it provides advantage on Strength checks made to climb or hold onto the surface."
      },
      {
        "title": "Gravity Resistance",
        "rules": "The vine can resist minor gravitational shifts. When within 30 feet of a source of gravity-altering magic (such as *Gravitation*), you gain resistance to falling damage and advantage on saving throws against effects that would move or lift you."
      }
    ],
    "levelRequirementReason": "This item is designed for adventurers who have already proven their climbing prowess, requiring a minimum level of 8 to effectively utilize its full potential.",
    "vendorReason": "The Vertical Vendor specializes in gear and tools for those who dare to defy gravity, making the Gooey Gravity Grip an ideal addition to their inventory.",
    "shippingDetail": "Shipped via a fleet of winged beetles, this package can arrive within hours, ensuring you're ready for your next climb or snack.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The vine exhausts its uses and must be reharvested from the forest of The Grand Country.",
      "charges": "Recharge after a short rest"
    },
    "priceReason": "The Gooey Gravity Grip is priced at 1000 XP, reflecting both its rarity and the specialized skills needed to effectively utilize it.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T21:18:56.310812+00:00",
    "aiReviewedAt": "2026-07-23T21:18:56.310812+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_echoing_crumb": {
    "id": "grand_country_echoing_crumb",
    "name": "Harmonic Resonance Stone",
    "description": "The Harmonic Resonance Stone is a crystallized fragment of sound, found deep within the layered canyons where echoes linger eternally. Crafted from the very fabric of resonant waves, this stone amplifies your voice with such force that it can momentarily deafen foes or summon distant allies. Its power comes from the ancient layers of sound trapped within its core, making it a rare and coveted tool for those who need to command attention in battle.",
    "category": "consumables",
    "price": 49000,
    "icon": "🔊",
    "stock": 15,
    "rarity": "mythic",
    "stockType": "limited_daily",
    "effects": [
      "boosts_voice_volume",
      "distracts_enemy"
    ],
    "vendor": "layer_market",
    "shippedBy": "phantom_delivery",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Boosted Voice Volume",
        "rules": "When you activate the stone, your voice is amplified as if under a bard's Song of Inspiration. All creatures within 10 feet must succeed on a DC 15 Constitution saving throw or become deafened for 1 round."
      },
      {
        "title": "Distraction",
        "rules": "For every successful save against the deafening effect, you gain advantage on one Charisma (Performance) check made before the end of your next turn. The stone has 3 uses and recharges after a long rest."
      }
    ],
    "levelRequirementReason": "The stone's power is too great for lower-level characters, requiring at least Expert level to wield its resonance.",
    "vendorReason": "As the Layer Market deals in rare and mythic artifacts, it only makes sense that they would stock such a powerful but specific item as the Harmonic Resonance Stone.",
    "shippingDetail": "Ships via Phantom Delivery's express courier service, ensuring the stone arrives safely and swiftly to its destination.",
    "usage": {
      "activation": "action",
      "duration": "instantaneous effect followed by a 1-round deafening duration for each creature that fails the save",
      "endsWhen": "deafened effect ends or the next long rest",
      "charges": "3 uses, recharging after a long rest"
    },
    "priceReason": "The stone's rarity and power make it worth 1000 XP, balancing its utility in combat scenarios.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:19:32.658427+00:00",
    "aiReviewedAt": "2026-07-23T21:19:32.658427+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_gravity_tune": {
    "id": "grand_country_gravity_tune",
    "name": "Temporal Echo Service",
    "description": "The Temporal Echo Service, crafted by Silas Sprocket, allows you to briefly adjust time for a single action, perfect for dodging a clumsy attack or correcting a misstep. This fleeting manipulation of time grants a small window where the laws of physics bend to your will, but it is limited in use and can only be employed once per day. The echoes of this temporal distortion are subtle yet unmistakable, leaving behind a faint ripple in the fabric of reality.",
    "category": "services",
    "price": 760000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "rewind_single_action",
      "chance_to_avoid_damage"
    ],
    "vendor": "side_seller",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rewind Single Action",
        "rules": "As an action, you may rewind time for one attack or skill check. This allows you to attempt the action again without penalty, but it cannot be used on a saving throw or another creature's action. The effect lasts until your next turn."
      },
      {
        "title": "Chance to Avoid Damage",
        "rules": "When you use this service, there is a 20% chance that all damage taken from the failed action is reduced to zero. This benefit applies once per day and cannot be used if you have already expended your daily use."
      }
    ],
    "levelRequirementReason": "This service is accessible to any character, offering a valuable tool for beginners and veterans alike.",
    "vendorReason": "The side seller has a long-standing relationship with Silas Sprocket and offers this unique service to adventurers seeking to enhance their skills in unpredictable situations.",
    "shippingDetail": "Ships instantly through the dimensional portal, ensuring that the Temporal Echo Service is delivered without delay.",
    "usage": {
      "activation": "Action",
      "duration": "Until your next turn",
      "endsWhen": "You use it again or finish your turn without using it",
      "charges": "1 daily use"
    },
    "priceReason": "The service is priced at 1000 XP, reflecting the specialized craftsmanship and unique utility provided by Silas Sprocket.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-23T21:19:41.870686+00:00",
    "aiReviewedAt": "2026-07-23T21:19:41.870686+00:00",
    "aiReviewVersion": 1
  },
  "curiosity_echoing_skull": {
    "id": "curiosity_echoing_skull",
    "name": "Echoing Skull of Lost Whispers",
    "description": "The Echoing Skull of Lost Whispers is a meticulously preserved human skull, its surface etched with cryptic runes that seem to hum with ancient energy. When held, it releases fragmented voices from forgotten eras—rumblings about lost loves and long-forgotten grievances. These echoes are fleeting but provide a +3 bonus to Charisma checks for the duration of an encounter. It's a relic that has seen too many secrets whispered into its hollow eye sockets, making it both a tool of intrigue and a source of unsettling curiosity.",
    "category": "curiosities",
    "price": 690,
    "icon": "💀",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Echoes of the Past",
      "Charisma Boost"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Night Raven Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Echoes of the Past",
        "rules": "When you activate this item, you can hear fragmented voices from past events. These voices provide a +3 bonus to Charisma checks and saving throws for one encounter. The effect ends if you use an action on another task or when you finish a short rest."
      },
      {
        "title": "Charisma Boost",
        "rules": "The skull grants a temporary boost to your Charisma ability score by +2 while it is held, but only during the first round of combat. This effect ends if you drop the skull or take damage."
      }
    ],
    "levelRequirementReason": "Even novices can hold this relic and benefit from its fleeting whispers.",
    "vendorReason": "The Chaos Dealer often deals in relics that blend mystery with chaos, making the Echoing Skull a perfect fit for their inventory.",
    "shippingDetail": "The skull is carefully packed to prevent any loss of its whispering power during transit.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "One encounter, ending when you use an action on another task or finish a short rest",
      "endsWhen": "You use an action on another task or complete a short rest",
      "charges": "Unlimited"
    },
    "priceReason": "The Echoing Skull combines historical intrigue with practical utility, making it a valuable but not overpowered item for any adventurer.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T21:19:10.982171+00:00",
    "aiReviewedAt": "2026-07-23T21:19:10.982171+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_stormblade_of_triumph": {
    "id": "faerun_item_stormblade_of_triumph",
    "name": "Stormblade of Triumph",
    "description": "The Stormblade of Triumph is a greatsword forged in the tempests of ancient storms. Its haft glows with raw elemental energy, and its blade crackles with lightning. This weapon grants you a +3 bonus to attack rolls against enemies weakened by electricity or wind. Upon landing a hit on such foes, it deals an additional 1d6 lightning damage with each strike, and there's a 20% chance to stun them for one round if they fail their Constitution save (DC 14).",
    "category": "equipment",
    "price": 9000,
    "icon": "⚡",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Elemental Surge",
      "Stunning Strike"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "winged_beast",
    "levelRequirement": 11,
    "effectDetails": [
      {
        "title": "Elemental Surge",
        "rules": "When you hit a creature weakened by lightning or wind with this weapon, it deals an additional 1d6 lightning damage. This effect can occur once per turn."
      },
      {
        "title": "Stunning Strike",
        "rules": "There is a 20% chance (roll a d5; on a roll of 4 or lower) that you stun the target for one round if they fail a DC 14 Constitution saving throw. This effect can occur once per long rest."
      }
    ],
    "levelRequirementReason": "Requires character level 11 to wield and harness its full power.",
    "vendorReason": "Baldur's Bazaar specializes in rare, powerful weapons from the farthest corners of Faerûn.",
    "shippingDetail": "Ships via a winged beast courier known for its speed and reliability.",
    "usage": {
      "activation": "Instantaneous effect upon hitting a target with this weapon.",
      "duration": "Instantaneous; ends when the attack resolves or if you miss your next turn.",
      "endsWhen": "The effect ends if you miss your next turn or if the creature makes a successful saving throw.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "Balanced at 1000 XP to reflect its powerful elemental abilities and rarity.",
    "priceOriginal": 18900,
    "priceReviewedAt": "2026-07-23T21:19:14.216479+00:00",
    "aiReviewedAt": "2026-07-23T21:19:14.216479+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_whispering_amulet_of_zariel": {
    "id": "faerun_item_whispering_amulet_of_zariel",
    "name": "Zariel's Lament",
    "description": "Zariel's Lament is a dark obsidian amulet adorned with cryptic runes that whisper of Zariel’s malevolent influence. Holding it grants you resistance to fire damage, but it also warps your soul, compelling you to spread chaos and despair. The amulet whispers in your ear, tempting you to act on its insidious suggestions; failing a Wisdom saving throw means you are frightened for 2 rounds, during which enemies gain advantage on attack rolls against you. In addition, while wearing the amulet, you gain advantage on Intimidation checks but suffer disadvantage on Charisma (Persuasion) checks.",
    "category": "premium",
    "price": 50000,
    "icon": "😈",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "godly",
    "effects": [
      "fire resistance",
      "chaos spread"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dark Whispers",
        "rules": "You have resistance to fire damage. Additionally, you are affected by the amulet's dark influence if you fail a Wisdom saving throw (DC 15). On a failed save, you are frightened for 2 rounds. During this time, enemies within 30 feet gain advantage on attack rolls against you."
      },
      {
        "title": "Soul Warping",
        "rules": "You gain advantage on Intimidation checks but suffer disadvantage on Charisma (Persuasion) checks while wearing the amulet."
      }
    ],
    "levelRequirementReason": "The amulet's dark influence is too powerful for low-level characters, requiring at least first level to resist its effects.",
    "vendorReason": "Waterdeep Market stocks exotic and mythic items from distant realms, including artifacts like Zariel's Lament.",
    "shippingDetail": "The amulet is delivered through a dimensional portal, arriving with a faint glow of dark magic.",
    "usage": {
      "activation": "Passive effect while worn",
      "duration": "While the amulet is worn",
      "endsWhen": "You remove or destroy the amulet; upon removal, you are no longer affected by its effects.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a mythic item with significant drawbacks and benefits, this price reflects its rarity and power.",
    "priceOriginal": 234500,
    "priceReviewedAt": "2026-07-23T21:19:29.195985+00:00",
    "aiReviewedAt": "2026-07-23T21:19:29.195985+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_ravenous_berries": {
    "id": "the_edge_ravenous_berries",
    "name": "Ravenous Berries of the Voidmaw",
    "description": "The Ravenous Berries of the Voidmaw pulse with an eerie, pulsating energy that seems to hunger for something beyond mere sustenance. These dark, almost sentient berries are said to have been plucked directly from the void itself by daring explorers. Consuming them grants a fleeting surge of raw power, but it also leaves you feeling inexplicably ravenous, as if the Voidmaw's hunger is contagious. Wario recommends eating only a few at a time to avoid being overwhelmed by an insatiable craving for more.",
    "category": "consumables",
    "price": 110,
    "icon": "🍓",
    "stock": 85,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "temporary_power_boost",
      "void_hunger"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "flying_beast",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Power Boost",
        "rules": "Consume the berries as a bonus action. You gain advantage on attack rolls and saving throws until the end of your next turn. If you consume more than three berries in a single sitting, this effect is halved."
      },
      {
        "title": "Void Hunger",
        "rules": "After consuming these berries, you feel an insatiable hunger that lasts for 1 hour. During this time, you have disadvantage on saving throws against being frightened and must make a DC 15 Constitution save at the start of each long rest to avoid gaining temporary hit points equal to your level."
      }
    ],
    "levelRequirementReason": "These berries are potent enough that even lower-level characters can benefit from their effects, making them accessible for all adventurers.",
    "vendorReason": "Edge Outpost specializes in exotic and experimental goods, so it makes sense they would stock these ethereal berries.",
    "shippingDetail": "Shipped via the swift and reliable flying beast courier service. Delivery takes approximately two days from the Edge Outpost.",
    "usage": {
      "activation": "Bonus action to consume one berry",
      "duration": "Until the end of your next turn after consuming a berry",
      "endsWhen": "The effect ends if you take damage, or if you consume more than three berries in a single sitting",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the rarity and potential danger of obtaining these berries directly from the Voidmaw.",
    "priceOriginal": 275,
    "priceReviewedAt": "2026-07-23T21:19:45.173112+00:00",
    "aiReviewedAt": "2026-07-23T21:19:45.173112+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_echoing_gauntlet": {
    "id": "the_edge_echoing_gauntlet",
    "name": "Echoing Gauntlet of the Lost",
    "description": "The Echoing Gauntlet of the Lost is crafted from solidified echoes and whispers of forgotten battles. Its surface hums with a spectral pulse, amplifying your strikes to devastating effect while causing the very air around you to ripple like water. Legend has it that those who wear this gauntlet find their strength matched by an unsettling disorientation in their allies and foes alike. Beware, for it may be more than just a weapon—it could be your downfall.",
    "category": "equipment",
    "price": 9000,
    "icon": "🧤",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "echoes_of_battle",
      "distorted_vision"
    ],
    "vendor": "final_shop",
    "shippedBy": "temporal_flux",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Echoes of Battle",
        "rules": "When you hit with an attack using this gauntlet, you deal an additional 1d6 force damage and have advantage on the next attack roll made before the end of your next turn. This effect can occur once per short or long rest."
      },
      {
        "title": "Distorted Vision",
        "rules": "Once per combat, as a bonus action, you can cast the spell *Phantom Steed* (1st-level) from this gauntlet without expending a spell slot. The duration of the steed is reduced to 1 minute."
      }
    ],
    "levelRequirementReason": "The gauntlet's power demands a high level of mastery and control, suitable only for those who have proven their worth.",
    "vendorReason": "Final Shop is known for its rare and powerful artifacts, making it the perfect vendor for the Echoing Gauntlet of the Lost.",
    "shippingDetail": "The gauntlet is delivered via a temporal flux courier, ensuring it arrives in pristine condition but may arrive slightly out of sync with your local time.",
    "usage": {
      "activation": "Instantaneous (once per combat)",
      "duration": "Until the end of your next turn (Echoes of Battle) or until you use another action to dismiss it (Distorted Vision)",
      "endsWhen": "The effect ends when you take a short rest, cast another spell from this gauntlet, or suffer an attack that hits you.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, the Echoing Gauntlet of the Lost offers a potent mix of combat and utility without disrupting the balance.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:19:50.579493+00:00",
    "aiReviewedAt": "2026-07-23T21:19:50.579493+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_forbidden_echo_stone": {
    "id": "grand_country_forbidden_echo_stone",
    "name": "Whispering Obsidian Heart",
    "description": "The Whispering Obsidian Heart is a smooth, black stone that seems to murmur secrets only you can almost understand. Touching it briefly grants glimpses into the past, revealing hidden passages in ancient ruins—but prolonged exposure leads to unsettling visions and an irresistible craving for pie. The stone's whispers are fleeting yet powerful, and the more you listen, the stronger they become until you're driven mad by their allure.",
    "category": "forbidden",
    "price": 51000,
    "icon": "💀",
    "stock": 8,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "revel_revealed_passages",
      "compulsion_for_pie"
    ],
    "vendor": "side_seller",
    "shippedBy": "Shadow Courier",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Revel of Revealed Passages",
        "rules": "When activated as a bonus action, the stone grants you advantage on Wisdom (Insight) checks to uncover hidden or secret information for up to 1 minute. This effect ends if you are incapacitated or take any damage."
      },
      {
        "title": "Compulsion for Pie",
        "rules": "While holding the stone, you have disadvantage on saving throws against being charmed and must make a DC 15 Wisdom saving throw at the start of each of your turns. On a failed save, you are incapacitated until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "Only those with significant experience can resist the stone's compulsion and uncover its true power.",
    "vendorReason": "The side seller has connections to mysterious collectors who trade in forbidden relics, including this cursed artifact.",
    "shippingDetail": "Delivered under cover of night with strict secrecy; the courier must be paid double for this dangerous delivery.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 1 minute, until incapacitated or taking damage",
      "endsWhen": "Incapacitation or taking damage",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a lower price due to the item's thematic risks and limited utility in combat.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T21:19:49.067821+00:00",
    "aiReviewedAt": "2026-07-23T21:19:49.067821+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_godly_layered_orb": {
    "id": "grand_country_godly_layered_orb",
    "name": "The Infinite Layer Cake",
    "description": "The Infinite Layer Cake is a shimmering, edible orb that appears to be a miniature, layered world of frosted pastries and exotic fruits. As you consume it, layers peel away to reveal hidden compartments filled with confections and arcane symbols. This divine delicacy grants temporary mastery over spatial distortions, allowing brief teleportation or the creation of small gravity wells. Just... try not to eat it all at once; the last bite might be your undoing.",
    "category": "premium",
    "price": 770000,
    "icon": "🍰",
    "stock": 2,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "spatial_mastery",
      "gravity_well"
    ],
    "vendor": "layer_market",
    "shippedBy": "Wario's Personal Transport",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spatial Mastery",
        "rules": "As a bonus action, you can create a small pocket of altered gravity within a 5-foot radius. This effect lasts for up to 1 minute and grants advantage on Strength (Athletics) checks made in the area. If you move more than 10 feet away from this area, the effect ends immediately."
      },
      {
        "title": "Gravity Well",
        "rules": "As a reaction when you or an ally are hit by a melee attack within 5 feet of you, you can create a small gravity well that pulls all creatures in a 10-foot radius toward its center. This effect lasts for up to 1 minute and requires a DC 20 Strength (Athletics) check to escape the pull."
      }
    ],
    "levelRequirementReason": "This cake is accessible to any character, as it combines both delectable indulgence and simple utility.",
    "vendorReason": "The Infinite Layer Cake's unique combination of culinary artistry and magical properties makes it a perfect item for the discerning patron at the Layer Market.",
    "shippingDetail": "Ships via Wario's express courier, ensuring swift delivery to your doorstep. Special handling required due to fragile nature.",
    "usage": {
      "activation": "Bonus action for Spatial Mastery; Reaction for Gravity Well",
      "duration": "Up to 1 minute per effect",
      "endsWhen": "Effect ends when you move more than 10 feet away from the area or when the duration expires",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Infinite Layer Cake is priced at 1000 XP for its unique combination of flavor and utility, making it a sought-after premium item.",
    "priceOriginal": 650000,
    "priceReviewedAt": "2026-07-23T21:20:13.854781+00:00",
    "aiReviewedAt": "2026-07-23T21:20:13.854781+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_goblin_goggles": {
    "id": "earth_land_goblin_goggles",
    "name": "Goblin Goggles of Muddled Vision",
    "description": "The Goblin Goggles of Muddled Vision, crafted from the salvaged eyewear of a particularly irascible goblin tribe, warp your perception with every glance. These goggles distort reality in playful but disorienting ways, making it seem as though the world is perpetually atwitter—objects sway like they're caught in a whirlwind, and colors bleed into one another. While they might hinder foes who can't see through the illusions, they also pose risks to their wearer, doubling the chance of stumbling or misjudging distances.",
    "category": "equipment",
    "price": 690,
    "icon": "👓",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "distorted_perception",
      "increased_misstep_chance"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "Rattle-Wrapped Package",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Distorted Perception",
        "rules": "While wearing these goggles, you gain advantage on Perception checks to find hidden traps and detect illusions. However, a creature that can see through the illusion has advantage on saving throws against your misperceptions."
      },
      {
        "title": "Increased Misstep Chance",
        "rules": "The wearer must make a DC 12 Dexterity (Stealth) check at the start of each of their turns to avoid taking an unwanted step, such as tripping or slipping. On a failed check, they fall prone and are disoriented for the rest of the encounter."
      }
    ],
    "levelRequirementReason": "The goggles require a minimum character level due to their complex enchantments.",
    "vendorReason": "The Guild Quartermaster deals in unique and rare gear, including these quirky but useful goblin goggles.",
    "shippingDetail": "The goggles are shipped in a specially designed container that mimics the sound of a goblin's rattle to deter any potential thieves during transit.",
    "usage": {
      "activation": "Activates on putting them on and remains active until removed or destroyed.",
      "duration": "Until removed or destroyed",
      "endsWhen": "Removed from the wearer, destroyed in combat, or lost in a mishap.",
      "charges": "Unlimited"
    },
    "priceReason": "The goggles' rarity and enchantments justify this balanced price.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T21:20:20.759548+00:00",
    "aiReviewedAt": "2026-07-23T21:20:20.759548+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_dragon_scale_shard": {
    "id": "earth_land_dragon_scale_shard",
    "name": "Shard of the Frost Dragon's Fury",
    "description": "A shard of the Frost Dragon's Fury is a crystalline fragment, once part of an ancient ice dragon's scale. It shimmers with icy-blue hues and emits a chill that lingers in the air like a cold breeze. When held, its frosty core calms even the most turbulent hearts, offering temporary relief from the world’s ills. This relic can be felt, as it is both a symbol of power and an artifact imbued with the dragon's wrath.",
    "category": "curiosities",
    "price": 3300,
    "icon": "🧊",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Frost Chill",
      "Freezing Aura"
    ],
    "vendor": "magic_shop",
    "shippedBy": "Ice-Enchanted Cart",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Frost Chill",
        "rules": "When activated, this shard deals 3d6 cold damage to one target within reach. It has a recharge after a short rest."
      },
      {
        "title": "Freezing Aura",
        "rules": "For every minute the Shard of the Frost Dragon's Fury is held, it imposes disadvantage on saving throws against being charmed or frightened. This effect ends immediately upon release from the wielder’s grip."
      }
    ],
    "levelRequirementReason": "The Shard requires a minimum level to harness its icy wrath and resist its chilling effects.",
    "vendorReason": "The magic shop is known for its extensive collection of rare and powerful artifacts, including this relic.",
    "shippingDetail": "The Ice-Enchanted Cart delivers with a frosty chill in the air, ensuring the Shard arrives fresh and potent.",
    "usage": {
      "activation": "Activation: Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use or when dropped",
      "charges": "Recharges after a short rest"
    },
    "priceReason": "The Shard’s rarity and magical properties justify its price, ensuring it remains an exceptional yet balanced addition to any adventurer's arsenal.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T21:20:02.425659+00:00",
    "aiReviewedAt": "2026-07-23T21:20:02.425659+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_shadow_whisper_scroll": {
    "id": "earth_land_shadow_whisper_scroll",
    "name": "Scroll of Forbidden Shadow Manipulation",
    "description": "The Scroll of Forbidden Shadow Manipulation is a tattered, ink-splashed relic that whispers dark secrets in a language only the unwise can understand. When activated, it summons shadowy minions that dance around you, their movements fluid and eerie. The spirits are unpredictable, often darting off to cause mischief elsewhere, much to your dismay – or perhaps to your advantage if they evade Wario’s clutches. Beware: this scroll is not for the faint of heart; its dark magic can backfire with catastrophic results.",
    "category": "forbidden",
    "price": 54000,
    "icon": "👻",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "summon_shadow_minion",
      "darkness_damage"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "Black Raven Delivery",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Summon Shadow Minions",
        "rules": "Activates as a bonus action. Summons one shadowy minion that dances around the caster for 1 minute, providing temporary invisibility to the user (1d6 feet range) and dealing darkness damage equal to your Wisdom modifier when it moves within 5 feet of an enemy."
      },
      {
        "title": "Darkness Damage",
        "rules": "When a summoned minion moves into 5 feet of an enemy, the target must succeed on a DC 14 Dexterity saving throw or take 1d6 necrotic damage. The effect ends if you lose concentration (as if concentrating on a spell), are incapacitated, or dismiss the scroll."
      }
    ],
    "levelRequirementReason": "Requires at least 8th level to handle the dark magic without mishap.",
    "vendorReason": "The Earth Emporium specializes in forbidden and powerful artifacts, making it a fitting place for such an item.",
    "shippingDetail": "Ships via Black Raven’s Nightmail Express, which ensures safe arrival but may delay use by up to one week due to the scroll's fragile nature.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute",
      "endsWhen": "You lose concentration, are incapacitated, or dismiss the scroll",
      "charges": "Unlimited"
    },
    "priceReason": "The scroll's price is balanced to reflect its forbidden nature and powerful effects without overpricing it.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-23T21:21:00.008527+00:00",
    "aiReviewedAt": "2026-07-23T21:21:00.008527+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_wind_whisper_amulet": {
    "id": "teyvat_item_wind_whisper_amulet",
    "name": "Wind Whisper Amulet",
    "description": "The Wind Whisper Amulet is a shimmering piece of jewelry forged from the very essence of wind currents near the Storm Peaks. Crafted under the watchful eye of Barbatos, it whispers secrets of the skies to its wearer, granting them a slight advantage in aerial maneuvers and enhancing their agility in the air. It's said that those who wear this amulet find themselves more elusive in combat, dodging attacks with ease and performing acrobatic feats with grace.",
    "category": "equipment",
    "price": 9000,
    "icon": "🌬️",
    "stock": 15,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "aerial Agility",
      "dodge chance"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_sprite",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Aerial Agility",
        "rules": "While wearing the Wind Whisper Amulet, you have a +1 bonus to Dexterity (Acrobatics) checks. This effect lasts for 1 hour and ends when you finish a short rest."
      },
      {
        "title": "Dodge Chance",
        "rules": "When an attacker within 5 feet of you makes a melee attack against you, you can use your reaction to attempt a Dexterity saving throw with a DC equal to the attacker's attack roll. On a success, you are considered difficult terrain for that attack."
      }
    ],
    "levelRequirementReason": "Requires level 10 as it provides significant combat and maneuver bonuses.",
    "vendorReason": "The market of Mondstadt is known for its wide array of mystical artifacts, making it a fitting vendor for this item.",
    "shippingDetail": "Shipped by the Winged Sprite, who delivers the amulet with swift aerial precision.",
    "usage": {
      "activation": "Passive effect when worn; no activation required.",
      "duration": "1 hour or until a short rest is completed.",
      "endsWhen": "At the start of your next short rest.",
      "charges": "Unlimited, recharges on completion of a short rest."
    },
    "priceReason": "Balanced price for an Epic item providing significant combat and maneuver bonuses.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-23T21:20:19.131774+00:00",
    "aiReviewedAt": "2026-07-23T21:20:19.131774+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_liyue_dragon_scale_charm": {
    "id": "teyvat_item_liyue_dragon_scale_charm",
    "name": "Liyue Dragon Scale Charm",
    "description": "The Liyue Dragon Scale Charm is a shimmering trinket forged from the scales of the Azure Dragon, long lost and now returned to the market. Crafted by the artisans of Liyue Harbor, it pulses with elemental energy that strengthens the wearer’s resilience against water-based attacks. When struck by such elements, there's a chance for the charm to reflect the attack back at its source, adding an unpredictable twist to any duel or skirmish.",
    "category": "faction",
    "price": 51000,
    "icon": "🐉",
    "stock": 8,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "water_resistance",
      "reflective_defense"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "cargo_ship",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Water Resistance",
        "rules": "The Liyue Dragon Scale Charm grants a +2 bonus to saving throws against water-based attacks. This effect lasts until the start of your next turn."
      },
      {
        "title": "Reflective Defense",
        "rules": "Once per long rest, you can activate the charm to reflect an incoming water-based attack back at its source as a reaction. The attacker must make a Dexterity saving throw (DC 15) or take half the damage dealt by the reflected attack."
      }
    ],
    "levelRequirementReason": "The complex craftsmanship and potent magic required to create this trinket necessitate a high-level character with extensive experience.",
    "vendorReason": "Liyue Harbor is the only place where such rare materials from the Azure Dragon are processed into items of power.",
    "shippingDetail": "Shipped via a slow but reliable cargo ship, ensuring the charm arrives in pristine condition.",
    "usage": {
      "activation": "Reaction to an incoming water-based attack.",
      "duration": "Instantaneous; ends when used or broken.",
      "endsWhen": "The effect is expended upon use or if the charm breaks.",
      "charges": "One charge per long rest"
    },
    "priceReason": "This item's rarity and the skill required to craft it justify its moderate price in XP.",
    "priceOriginal": 85000,
    "priceReviewedAt": "2026-07-23T21:20:59.753501+00:00",
    "aiReviewedAt": "2026-07-23T21:20:59.753501+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_inazuma_phantom_lantern": {
    "id": "teyvat_item_inazuma_phantom_lantern",
    "name": "Inazuma Phantom Lantern",
    "description": "The Inazuma Phantom Lantern, a lantern of shadowed wood and brass, glows with an eerie light that seems to flicker between worlds. Its intricate carvings depict scenes from forgotten battles, and its light can bend spectral barriers, allowing the wielder to slip through them with ease. However, those who stand in the lantern’s glow may find their minds clouded by a fleeting sense of dread as they are disoriented momentarily.",
    "category": "curiosities",
    "price": 120,
    "icon": "👻",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "disorient_enemy",
      "shadow_phase"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "delivery_drone",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Disorient Enemy",
        "rules": "As a bonus action, the wielder can shine the lantern’s light on an enemy within 30 feet. The target must succeed on a DC 12 Wisdom saving throw or be disoriented for 1 round, during which it has disadvantage on attack rolls and ability checks."
      },
      {
        "title": "Shadow Phase",
        "rules": "The wielder can use the lantern to phase through spectral barriers as an action. The effect lasts until the end of the wielder’s next turn. If unable to exit a barrier, the wielder must make a DC 12 Strength saving throw or be trapped inside for 1 minute."
      }
    ],
    "levelRequirementReason": "The intricate carvings and shadow magic required to craft this lantern necessitate proficiency in Arcana.",
    "vendorReason": "Inazuma Imports specializes in exotic items from the realm of Inazuma, known for their craftsmanship and magical properties.",
    "shippingDetail": "The lantern is carefully packed to prevent any damage during delivery by drone.",
    "usage": {
      "activation": "Bonus action or reaction (for Disorient Enemy); Action (for Shadow Phase)",
      "duration": "Instantaneous; ends when the effect is used or the wielder moves out of a spectral barrier",
      "endsWhen": "The effect ends on the target's next turn for Disorient, and when the wielder exits the spectral barrier for Shadow Phase.",
      "charges": "Unlimited"
    },
    "priceReason": "This lantern is crafted from rare shadowwood and infused with powerful spectral magic, making it a valuable yet balanced item.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T21:20:47.266364+00:00",
    "aiReviewedAt": "2026-07-23T21:20:47.266364+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_sticky_crumb_bomb": {
    "id": "leclaire_isle_sticky_crumb_bomb",
    "name": "Sticky Crumb Bomb",
    "description": "The Sticky Crumb Bomb, a suspiciously cheerful pastry crafted from concentrated sugar and a potent adhesive, is a confectionary trap that Wario would use to ensnare his foes in sticky chaos. When thrown, it explodes with a shower of clinging crumbs, rooting enemies to the spot for three turns, and deals 1d6 damage. The longer an enemy remains stuck, the more they squirm, making this treat a masterful sabotage tool.",
    "category": "consumables",
    "price": 690,
    "icon": "💣",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "apply damage: 1d6",
      "root target for 3 turns"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Delivery Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Apply Damage",
        "rules": "When thrown, the Sticky Crumb Bomb detonates, dealing 1d6 fire damage to all creatures within a 5-foot radius. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Root Target for 3 Turns",
        "rules": "Any creature struck by the bomb must succeed on a DC 12 Dexterity saving throw or be rooted in place, unable to move or take actions for three turns. The target can use their reaction on their first turn to make another saving throw against this effect."
      }
    ],
    "levelRequirementReason": "This pastry bomb is designed for adventurers who are new to combat and need a reliable tool to secure their victories.",
    "vendorReason": "Dough Depot specializes in crafting exotic pastries, so selling this sticky creation is a natural fit for them.",
    "shippingDetail": "The Delivery Drone ensures quick delivery of the Sticky Crumb Bomb to adventurers across the realm.",
    "usage": {
      "activation": "Throw as an action",
      "duration": "Instantaneous explosion and effect duration",
      "endsWhen": "Target successfully saves or after three turns, whichever comes first",
      "charges": "Unlimited"
    },
    "priceReason": "The Sticky Crumb Bomb is priced at 1000 XP to reflect its unique combination of damage and utility in combat.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T21:20:47.030914+00:00",
    "aiReviewedAt": "2026-07-23T21:20:47.030914+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_golden_croissant_shield": {
    "id": "leclaire_isle_golden_croissant_shield",
    "name": "Golden Croissant Shield",
    "description": "The Golden Croissant Shield, forged from the finest buttery croissants of L'Eclaire Isle, combines culinary magic and martial prowess into a single wondrous shield. Its surface gleams with an irresistible golden sheen, and its edges are sharper than any blade, capable of deflecting projectiles and leaving foes distracted by its delectable aroma. A true testament to the island's pastry artistry, this shield offers both protection and distraction in equal measure.",
    "category": "equipment",
    "price": 9100,
    "icon": "🛡️",
    "stock": 3,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Deflect Projectiles",
      "Distraction Aura"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Giant Pastry Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Deflect Projectiles",
        "rules": "As a reaction when you are hit by a ranged weapon attack, the Golden Croissant Shield can deflect the projectile away from you. The shield absorbs 1d8 pastry damage and prevents the attack from hitting you."
      },
      {
        "title": "Distraction Aura",
        "rules": "For every hour you wield the Golden Croissant Shield in combat, enemies within 5 feet of you are distracted by its irresistible aroma. As a bonus action, you can attempt to distract an additional enemy within this range for each charge remaining (up to three). This distraction lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This shield's culinary magic is accessible to all adventurers who wish to harness its unique defensive capabilities.",
    "vendorReason": "As purveyors of the finest pastries, Pastry Palace naturally stocks this wondrous item, ensuring it reaches those who can appreciate both its flavor and function.",
    "shippingDetail": "The Giant Pastry Cart delivers directly to your door, but due to its size, it may require an extra day for delivery in more remote areas.",
    "usage": {
      "activation": "Reaction (Deflect Projectiles), Bonus Action (Distraction Aura)",
      "duration": "Instantaneous; ends when the shield is destroyed or no longer wielded",
      "endsWhen": "The shield's effects end when it is destroyed, lost, or no longer in your possession.",
      "charges": "Unlimited charges, recharged upon successful use"
    },
    "priceReason": "This item strikes a balance between its flavorful and functional aspects, offering both protection and distraction at an affordable price.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:21:39.228545+00:00",
    "aiReviewedAt": "2026-07-23T21:21:39.228545+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_godly_frosting_of_eternal_sweetness": {
    "id": "leclaire_isle_godly_frosting_of_eternal_sweetness",
    "name": "Frosting of Eternal Sweetness",
    "description": "The Frosting of Eternal Sweetness, crafted by the legendary Dough Folk, is a heavenly confection adorned with shimmering frost and golden swirls. When consumed, it heals for 3d6 hit points and grants +2 to Charisma checks, but its true power lies in its ability to create an aura that can either inspire or overwhelm those nearby. Those within range may feel inexplicably drawn to you, their resolve tested by the sheer irresistible sweetness.",
    "category": "consumables",
    "price": 770000,
    "icon": "✨",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Healing",
      "Charisma Boost"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Angel Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Touch",
        "rules": "When consumed, Frosting of Eternal Sweetness heals the imbiber for 3d6 hit points. This effect is instantaneous and has no save or duration."
      },
      {
        "title": "Charisma Boost",
        "rules": "+2 to Charisma checks for one hour after consumption. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Suitable for all adventurers who wish to bolster their resilience and charm.",
    "vendorReason": "Sweet Supplies prides itself on carrying the finest confections from across the land, including this divine treat.",
    "shippingDetail": "Ships directly via Angel Delivery, ensuring your sweet treat arrives fresh and intact.",
    "usage": {
      "activation": "Eaten as a consumable",
      "duration": "Instantaneous healing; Charisma boost lasts for one hour per long rest",
      "endsWhen": "Effect ends when the duration expires or the item is consumed",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price reflects the rare and divine nature of this confection.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T21:21:18.451522+00:00",
    "aiReviewedAt": "2026-07-23T21:21:18.451522+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_temporal_ripple": {
    "id": "almost_edge_item_temporal_ripple",
    "name": "Chronal Crumble",
    "description": "The Chronal Crumble is a crumbly, shimmering fragment of warped time, tasting faintly of regret and stale frosting. When consumed, it accelerates your movements for a fleeting moment or slightly rewinds a failed action, but misuse could unravel the very fabric of reality. This fragment, a remnant from the Temporal Wastes, is a delicate balance of chaos and order, crafted by ancient timekeepers to aid those who dare to venture into the timestreams.",
    "category": "consumables",
    "price": 120,
    "icon": "⏳",
    "stock": 67,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "grant_speed_3",
      "chance_undo_last_action_10%"
    ],
    "vendor": "Edge Wanderer",
    "shippedBy": "Temporal Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Speed (Instantaneous)",
        "rules": "When consumed, the Chronal Crumble grants a speed increase of +3 feet for 1 minute. This effect can be used once per short rest."
      },
      {
        "title": "Chance to Undo Last Action (10%)",
        "rules": "After consuming this crumble, there is a 10% chance that your last action will be undone if the DM deems it appropriate and you have not already used this effect in the current short rest. This effect has no save DC and can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "This crumble is accessible to all adventurers, as it helps them navigate the dangers of time-based challenges without requiring advanced training.",
    "vendorReason": "The Edge Wanderer travels through time itself and has access to rare and exotic items like the Chronal Crumble.",
    "shippingDetail": "Delivered via a Temporal Courier, ensuring that the crumble remains stable until consumption.",
    "usage": {
      "activation": "Eaten as an action or bonus action",
      "duration": "Instantaneous for the speed effect; 1 minute for the chance to undo last action",
      "endsWhen": "The duration ends after the specified time, and the effect is exhausted upon use",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The Chronal Crumble's price reflects its rarity and the exotic materials used in its crafting.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-24T23:52:51.531241+00:00",
    "aiReviewedAt": "2026-07-24T23:52:51.531241+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_void_echo_armor": {
    "id": "almost_edge_item_void_echo_armor",
    "name": "Silence's Embrace",
    "description": "Silence's Embrace is a unsettling suit of armor that seems to absorb sound and light, offering strange protection against horrors beyond perception. Its cold touch feels like staring into an endless void, making it ideal for those who must confront the unknown in silence. When worn, it grants you a state of eerie calm, reducing the effectiveness of fear-based attacks by 30%, and allows you to move silently through any terrain as if under the effects of Stealth without needing a check.",
    "category": "equipment",
    "price": 3300,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "armor_5",
      "reduced_fear_resistance"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Void Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Reduced Fear Resistance",
        "rules": "While wearing Silence's Embrace, you have advantage on saving throws against being frightened. Additionally, any creature within 10 feet of you suffers a -3 penalty to attack rolls targeting you due to fear."
      },
      {
        "title": "Stealth Granting",
        "rules": "You can use an action to activate Silence's Embrace, which allows you to move silently through any terrain as if under the effects of Stealth without needing a check. The benefit lasts until the start of your next turn after activation."
      }
    ],
    "levelRequirementReason": "This armor is designed for seasoned adventurers who have faced many horrors and require extra protection against fear-based attacks.",
    "vendorReason": "The Void Merchant deals in rare and unusual items that help travelers navigate the unknown, making Silence's Embrace a fitting addition to their inventory.",
    "shippingDetail": "Silence's Embrace is shipped via the Void Courier, known for its rapid delivery even through the most treacherous of voids.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous activation; lasts until start of next turn after activation",
      "endsWhen": "The effect ends at the start of your next turn after activation or if you remove the armor",
      "charges": "Unlimited, but requires a short rest to regain any lost stealth capabilities"
    },
    "priceReason": "Silence's Embrace is priced moderately as its unique properties provide significant benefits in specific combat scenarios without being overpowered.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T21:21:18.704172+00:00",
    "aiReviewedAt": "2026-07-23T21:21:18.704172+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_liminal_memory_shard": {
    "id": "almost_edge_item_liminal_memory_shard",
    "name": "Forgotten Fragment",
    "description": "The Forgotten Fragment pulses with the essence of lost memories, its iridescent surface shimmering with forgotten realities and unsettling faces. Holding it for more than a minute can cause disorientation, phantom pains, and an irresistible urge to partake in sugary delights—whether frosting, candy, or something equally sweet. This relic is said to have been crafted from the remnants of ancient dreams, its pulses echoing the whispers of the forgotten dead.",
    "category": "curiosities",
    "price": 9100,
    "icon": "🔮",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "grant_wisdom_4",
      "detect_ghosts_20%"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Wisdom",
        "rules": "When worn as a piece of jewelry, the Forgotten Fragment grants the wearer an additional +4 to Intelligence checks and saving throws for 1 hour. The effect ends if the fragment is removed or if the wearer takes any action other than moving."
      },
      {
        "title": "Detect Ghosts",
        "rules": "The fragment provides a constant advantage on Wisdom (Perception) checks made to detect ghosts, phantoms, and similar ethereal entities. This effect ends when the fragment is removed or if the wearer takes an action other than moving."
      }
    ],
    "levelRequirementReason": "The Forgotten Fragment requires no specific level as its effects are minor and enhance perception without imposing significant risks.",
    "vendorReason": "The Liminal Trader is known for dealing in the most peculiar and ancient relics, including those that touch the boundaries between worlds.",
    "shippingDetail": "Ships via Dimensional Package Service. Requires special handling due to its ethereal nature.",
    "usage": {
      "activation": "Passive effect while worn as a piece of jewelry.",
      "duration": "1 hour or until removed, whichever comes first.",
      "endsWhen": "Removed from the wearer or when they take any action other than moving.",
      "charges": "Unlimited"
    },
    "priceReason": "The Forgotten Fragment is priced at 1000 XP due to its rarity and unique effects, which enhance perception without being overly powerful.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:21:48.769623+00:00",
    "aiReviewedAt": "2026-07-23T21:21:48.769623+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_echoing_shard": {
    "id": "grand_country_echoing_shard",
    "name": "The Layered Lament",
    "description": "The Layered Lament, a shimmering shard that appears to be crafted from fragments of a massive, upside-down tower, hums softly when held close. Its surface is etched with intricate patterns, each whispering tales of forgotten echoes and lost symphonies. This relic allows you to briefly mimic sounds, perfect for startling foes or solving puzzles, but beware: prolonged use can incite an unsettling chorus within your mind, clouding perception and judgment.",
    "category": "curiosities",
    "price": 120,
    "icon": "👂",
    "stock": 43,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "mimic_sound",
      "chance_to_confuse_enemy"
    ],
    "vendor": "layer_market",
    "shippedBy": "swift_feather Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mimic Sound",
        "rules": "As a bonus action, you can mimic any sound within range for up to 1 minute. The mimicry must be of an actual sound and cannot include speech or deliberate deception. You have advantage on Perception checks related to hearing the mimicked sound."
      },
      {
        "title": "Chance to Confuse Enemy",
        "rules": "When you use Mimic Sound, there is a 20% chance (advantage) that an enemy within 30 feet becomes confused for 1 minute. The save DC is equal to 8 + your proficiency bonus + your Charisma modifier."
      }
    ],
    "levelRequirementReason": "The Layered Lament's subtle power requires only basic dexterity and intuition, making it accessible to lower-level characters.",
    "vendorReason": "Layer Market is known for its eclectic mix of curiosities and relics that appeal to all adventurers, from the novice to the seasoned warrior.",
    "shippingDetail": "The Layered Lament is shipped via Swift Feather's express courier service, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 1 minute per day",
      "endsWhen": "The mimicry ends when you stop mimicking the sound or when the duration expires.",
      "charges": "Unlimited uses, but only one mimic attempt per short rest"
    },
    "priceReason": "The Layered Lament's price is balanced by its limited daily use and the potential for strategic advantage it offers.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T21:21:48.601315+00:00",
    "aiReviewedAt": "2026-07-23T21:21:48.601315+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_sticky_berry_potion": {
    "id": "grand_country_sticky_berry_potion",
    "name": "Wario's Grip Goo!",
    "description": "Wario's Grip Goo! is a neon-green, pulsating potion with an acrid scent. It’s crafted from sticky berries found deep within The Grand Country's caverns. This potent brew not only boosts your grip strength by 50% but also increases your chances of clinging to surfaces and enemies, making it ideal for climbing or grappling. Be warned: the goo is highly adhesive, potentially leaving you stuck in place.",
    "category": "consumables",
    "price": 690,
    "icon": "🤲",
    "stock": 22,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "increased_strength_25",
      "chance_to_stick"
    ],
    "vendor": "side_seller",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Strength (25%)",
        "rules": "Consume Wario's Grip Goo! as an action to gain a +1d4 bonus to Strength checks and saving throws until the start of your next turn."
      },
      {
        "title": "Chance to Stick",
        "rules": "There is a 20% chance per round that you will adhere to a nearby surface or creature within reach, requiring an STR saving throw (DC 13) to resist. This effect ends on your next successful movement action."
      }
    ],
    "levelRequirementReason": "This potion is potent but not overly complex; it's accessible to beginners.",
    "vendorReason": "Side Seller stocks quirky potions that appeal to adventurers with a sense of humor and those looking for unique advantages in combat.",
    "shippingDetail": "Delivered swiftly by the reliable delivery drones, ensuring you’re ready for your next challenge right away.",
    "usage": {
      "activation": "consume as an action",
      "duration": "until start of next turn",
      "endsWhen": "successful movement action or when effect ends naturally",
      "charges": "unlimited"
    },
    "priceReason": "The price reflects its uncommon rarity and the special brewing process required for such a unique potion.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T21:21:58.673505+00:00",
    "aiReviewedAt": "2026-07-23T21:21:58.673505+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_sparkleberry_pie": {
    "id": "middle_earth_sparkleberry_pie",
    "name": "Sparkleberry Pie of Endless Delight",
    "description": "The Sparkleberry Pie of Endless Delight, baked in the hidden valleys of Rivendell, exudes an ethereal glow that hints at its magical origins. Each bite releases a cascade of joy-inducing nutrients, temporarily boosting your charisma and happiness, making it the perfect antidote for foul moods or icy stares from even the most grumpy companions. The pie's berries are rumored to be enchanted by the Elven master bakers, ensuring each slice is a symphony of flavors and enchantments that linger in your memory long after you’ve eaten.",
    "category": "consumables",
    "price": 690,
    "icon": "🥧",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increase_happiness",
      "increase_charisma"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Happiness Boost",
        "rules": "Upon consumption, the pie grants a +2 bonus to Charisma (Deception) checks and Perception checks for 1 hour. This effect does not stack with other sources of temporary boosts."
      },
      {
        "title": "Charisma Surge",
        "rules": "For 10 minutes after eating, you gain advantage on all Charisma-based skill checks and saving throws against effects that would impose a penalty to Charisma-based rolls or save DCs. This effect can only be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The pie's enchantments are subtle but effective, requiring no special skill or level to enjoy its benefits.",
    "vendorReason": "The Shire Shop is known for its unique and magical wares, sourced directly from the most enchanted lands of Middle-earth.",
    "shippingDetail": "Delivered by friendly ponies via a two-day express service, ensuring your pie arrives fresh and ready to eat.",
    "usage": {
      "activation": "Eating the pie as a free action.",
      "duration": "Instantaneous, with effects lasting for specified durations.",
      "endsWhen": "The duration of each effect expires naturally after the stated time.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The pie's rarity and magical properties, sourced from Rivendell, justify its higher price in the market.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T21:22:19.715053+00:00",
    "aiReviewedAt": "2026-07-23T21:22:19.715053+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_ringwraith_shadow_shard": {
    "id": "middle_earth_ringwraith_shadow_shard",
    "name": "Ringwraith's Shadow Shard",
    "description": "The Ringwraith's Shadow Shard is a cold, black fragment of a fallen wraith’s power, pulsing with the remnants of malevolent intent. Touch this shard briefly to gain resistance to fear effects for an hour; prolonged contact might leave you craving donuts, as your will weakens under the lingering influence of the Shard’s dark magic. Crafted from the very essence of lost Ringwraiths, it is a relic of a bygone age, now available through the Elven Market.",
    "category": "equipment",
    "price": 3300,
    "icon": "🌑",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "resistance_to_fear",
      "darkness_within"
    ],
    "vendor": "elven_market",
    "shippedBy": "flying_message",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Resistance to Fear",
        "rules": "Activate as a bonus action. You gain resistance to fear effects for 1 hour. The effect ends early if you are exposed to an additional source of fear within the hour."
      },
      {
        "title": "Darkness Within",
        "rules": "If you touch the Shard for longer than 10 minutes, there is a 5% chance per minute spent in contact that you will experience a nightmare. The nightmare lasts until morning and imposes disadvantage on saving throws against being frightened."
      }
    ],
    "levelRequirementReason": "Only those of sufficient experience can wield the Shard without succumbing to its dark influence.",
    "vendorReason": "The Elven Market is known for its rare and ancient artifacts, including relics like the Ringwraith's Shadow Shard.",
    "shippingDetail": "Ships via a messenger pigeon, ensuring swift delivery within a day of purchase.",
    "usage": {
      "activation": "Bonus action to gain resistance to fear effects; prolonged contact triggers darkness within.",
      "duration": "Hour-long effect for Resistance to Fear; nightmare chance increases with duration.",
      "endsWhen": "The hour expires or you are exposed to another source of fear.",
      "charges": "Unlimited uses, but risks increase with prolonged use."
    },
    "priceReason": "Balanced for its rarity and the risk it poses, especially given the chance of nightmares after extended exposure.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:23:04.441549+00:00",
    "aiReviewedAt": "2026-07-23T21:23:04.441549+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_dragon_scale_amulet": {
    "id": "middle_earth_dragon_scale_amulet",
    "name": "Dragon Scale Amulet of Scorched Courage",
    "description": "The Dragon Scale Amulet of Scorched Courage, said to be crafted by a young dragon in the heart of an ancient forge, radiates intense heat and resilience. Its scales, forged from volcanic ash, hum with latent fire magic that can bolster your courage and ignite your attacks with fiery power. While wearing it, you feel invigorated, but beware—its heat might inadvertently set things alight, especially if your aim is less than precise.",
    "category": "forbidden",
    "price": 9100,
    "icon": "🔥",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increase_attack_damage",
      "boost_courage"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "giant_eagle",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Increased Attack Damage",
        "rules": "When you make a melee attack while wearing the amulet, you add an additional +1 to your damage roll. This effect lasts until the start of your next turn."
      },
      {
        "title": "Boosted Courage",
        "rules": "While wearing this amulet, you gain advantage on saving throws against fear and charm effects for 1 minute. If you fail a saving throw while wearing it, the amulet's heat becomes unbearable, forcing you to make another DC 15 Constitution saving throw or drop one of your items."
      }
    ],
    "levelRequirementReason": "The amulet requires a high level to wield effectively and avoid accidentally setting things on fire.",
    "vendorReason": "Only the dwarves, with their expertise in metalwork and fire magic, can craft an amulet that channels such volatile power.",
    "shippingDetail": "The amulet is delivered by a giant eagle courier known for its precision and speed, ensuring safe transport through treacherous terrains.",
    "usage": {
      "activation": "Passive effect until removed or dropped.",
      "duration": "Until the start of your next turn after activation.",
      "endsWhen": "The start of your next turn, or when you remove or drop it.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced against other epic items, this amulet's heat and courage-boosting effects justify its moderate price in XP.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T21:22:29.913323+00:00",
    "aiReviewedAt": "2026-07-23T21:22:29.913323+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_block_shatterer": {
    "id": "connectopia_block_shatterer",
    "name": "Block Shatterer",
    "description": "The Block Shatterer is a formidable hammer forged from compressed block fragments, its surface etched with chaotic runes that shimmer and fade as they release their raw power. This weapon isn't just for show—it's an invaluable tool for the miner or adventurer who seeks to breach ancient fortifications and impenetrable walls. When wielded, it not only increases mining speed by 15% but also has a 20% chance of shattering blocks with each strike, leaving behind a satisfying crater in its wake.",
    "category": "equipment",
    "price": 3300,
    "icon": "🔨",
    "stock": 8,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Increased Mining Speed",
      "Shatter Blocks"
    ],
    "vendor": "block_smith",
    "shippedBy": "wagon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Mining Speed",
        "rules": "While wielding the Block Shatterer, you gain a +15 bonus to mining checks. This effect is passive and lasts until the start of your next turn."
      },
      {
        "title": "Shatter Blocks",
        "rules": "When you hit an inanimate object with the Block Shatterer on a successful attack roll, there's a 20% chance that it will break into smaller fragments. This effect does not consume charges and can be used as often as you make attacks."
      }
    ],
    "levelRequirementReason": "This hammer is designed for adventurers who are just beginning their journey, allowing them to tackle simple mining tasks with ease.",
    "vendorReason": "The Block Smith specializes in crafting tools that enhance the work of miners and builders, making it only fitting that they sell a weapon like this.",
    "shippingDetail": "Delivered via sturdy wagon, ensuring safe transport to your door.",
    "usage": {
      "activation": "Instantaneous when swung in an attack or mining check.",
      "duration": "Passive and lasts until the start of your next turn.",
      "endsWhen": "The effect ends with the start of your next turn.",
      "charges": "Unlimited"
    },
    "priceReason": "For a rare item that offers both mining utility and combat advantage, this price is reasonable given its versatility.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:22:50.966369+00:00",
    "aiReviewedAt": "2026-07-23T21:22:50.966369+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_wario_wrench": {
    "id": "connectopia_wario_wrench",
    "name": "Wario's Deluxe Repair Wrench",
    "description": "Wario's Deluxe Repair Wrench is a slightly battered, yet unmistakably powerful tool forged from the fires of the Mushroom Kingdom. Crafted by a mischievous inventor for quick fixes and sabotage, it gleams with an aura that hints at its dual-purpose design. This wrench can repair broken machinery with a 20% chance to succeed, and it allows you to disarm traps in one action without triggering them—perfect for both fixing and wreaking havoc.",
    "category": "equipment",
    "price": 120,
    "icon": "🔧",
    "stock": 15,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "repair equipment",
      "trap disarming"
    ],
    "vendor": "craft_corner",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Repair Equipment",
        "rules": "Activates as a bonus action. Has a 20% chance to repair broken machinery or devices within reach. The wrench can be used once per long rest."
      },
      {
        "title": "Disarm Trap",
        "rules": "Allows the user to disarm traps in one action without triggering them, provided they have proficiency with thieves' tools. Once activated, it must recharge for 1 hour after use."
      }
    ],
    "levelRequirementReason": "This wrench is designed for those just starting their journey who need a reliable tool.",
    "vendorReason": "Craft Corner specializes in tools and equipment that can be used in various professions, from crafting to sabotage.",
    "shippingDetail": "Ships via delivery drone within the Mushroom Kingdom; may take up to one week depending on location.",
    "usage": {
      "activation": "Bonus action for repair equipment; instant action for trap disarming with thieves' tools proficiency.",
      "duration": "Instantaneous for repair, once per long rest recharge. Trap disarming is a single-use effect.",
      "endsWhen": "Exhausted after one use or when the long rest duration expires.",
      "charges": "Unlimited uses between long rests."
    },
    "priceReason": "The wrench's unique capabilities, including its repair chance and trap disarming features, justify a higher price in the market.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-23T21:23:07.654502+00:00",
    "aiReviewedAt": "2026-07-23T21:23:07.654502+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_crumbly_boots": {
    "id": "leclaire_isle_crumbly_boots",
    "name": "Crumbly Boots of Sticky Steps",
    "description": "The Crumbly Boots of Sticky Steps are crafted from a doughy blend that has been slightly overmixed and left to dry in the sun. These footwear not only increase your movement speed by +10 feet but also leave behind a sticky, sweet trail that lingers on the ground for an hour or until cleaned up. Squirrels and other small creatures are drawn to this trail, making you an easy target if you're not careful. The boots are a rare find from Dough Depot, known for their whimsical yet practical items.",
    "category": "equipment",
    "price": 3300,
    "icon": "🍪",
    "stock": 78,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "speed_boost",
      "sticky_trail"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Rolling Cart",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "While wearing the Crumbly Boots of Sticky Steps, you gain a +10 feet bonus to your walking speed. This effect is active as long as the boots are on your feet."
      },
      {
        "title": "Sticky Trail",
        "rules": "For an hour after putting on or taking off these boots, a sticky, sweet trail lingers behind you. This trail attracts small creatures such as squirrels and insects within 30 feet of the trail. You can clear this effect by cleaning up your trail with a successful DC 12 Dexterity (Investigation) check."
      }
    ],
    "levelRequirementReason": "These boots require a character to have reached at least level 4 to handle their speed and sticky effects effectively.",
    "vendorReason": "Dough Depot specializes in crafting items from the finest dough, making these boots a natural fit for their inventory.",
    "shippingDetail": "The Rolling Cart ensures your Crumbly Boots are delivered with fresh and crispy packaging to maintain their quality.",
    "usage": {
      "activation": "Passive effect once worn or removed",
      "duration": "Active for an hour after wearing the boots",
      "endsWhen": "Trail is cleaned up or one hour has passed",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects the boots' unique and entertaining effects, which enhance movement speed while adding an engaging environmental interaction.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T21:22:58.405321+00:00",
    "aiReviewedAt": "2026-07-23T21:22:58.405321+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_forbidden_frosting_dagger": {
    "id": "leclaire_isle_forbidden_frosting_dagger",
    "name": "Forbidden Frosting Dagger of Sweet Decay",
    "description": "The Forbidden Frosting Dagger of Sweet Decay is a wickedly delightful dagger forged from solidified frosting and dark sugar, crafted by a disgruntled baker who once sought revenge. Upon striking an enemy, it coats them in a sugary glaze that causes their movement to slow by 50%, and they emit a pungent aroma as if rotting from within. The touch of this dagger transforms foes into something both saccharine and decaying.",
    "category": "forbidden",
    "price": 3300,
    "icon": "🍬",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "sweetens_target",
      "slows_movement"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Delivery Pigeon",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Sweetens Target",
        "rules": "When the Forbidden Frosting Dagger strikes a target, it coats them in a sugary glaze. The target's speed is reduced by half (50%) until the end of their next turn. This effect has no save DC and can be used once per long rest."
      },
      {
        "title": "Slows Movement",
        "rules": "Upon hitting, the target becomes sticky, reducing their speed by 50%. They must make a DC 13 Constitution saving throw or fall prone. The effect lasts for 1 minute and can be ended early with a successful save."
      }
    ],
    "levelRequirementReason": "Requires proficiency in thieves' tools to wield effectively, as the dagger's frosting composition demands precision.",
    "vendorReason": "Pastry Palace specializes in exotic and enchanted culinary items, including this forbidden weapon made from ingredients only they can source.",
    "shippingDetail": "The fragile nature of the dagger requires special handling by the Delivery Pigeon to ensure it arrives intact.",
    "usage": {
      "activation": "As a bonus action, on a melee attack roll.",
      "duration": "Instantaneous; lasts until end of next turn or target makes a successful saving throw.",
      "endsWhen": "Target makes a successful Constitution saving throw or the effect ends at the start of their next turn.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced as it requires specific crafting materials and has unique, non-lethal effects that do not deal direct damage.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:23:10.051416+00:00",
    "aiReviewedAt": "2026-07-23T21:23:10.051416+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_whimsical_wand": {
    "id": "leclaire_isle_whimsical_wand",
    "name": "Whimsical Wand of Sugar Rush",
    "description": "The Whimsical Wand of Sugar Rush is a delicate, crystalline rod crafted from spun sugar that shimmers like frostbitten clouds. Its base is encased in a sugary paste that feels warm to the touch, and it hums with the sweet power of pastries yet to be devoured. Wave this wand for bursts of sugary energy that heal wounds or conjure miniature pastries that delight foes—but beware, too much sugar can cause confusion!",
    "category": "curiosities",
    "price": 690,
    "icon": "✨",
    "stock": 52,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "summons_tasty_pastries",
      "chance_to_confuse"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Honeycomb Drone Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Summons Tasty Pastries",
        "rules": "As a bonus action, the user waves the wand to summon three miniature pastries that hover around them. On each creature within 5 feet of the caster at the end of their next turn, one pastry appears and provides one dose of healing equal to (1d6 + level) hit points. If the target is a foe, it has a chance to be confused as described in the 'Chance to Confuse' effect."
      },
      {
        "title": "Chance to Confuse",
        "rules": "If the target is a creature other than an ally within 5 feet of the caster, there is a 20% chance that it becomes confused for one minute. A confused creature must make a Wisdom saving throw at the start of each of its turns (DC = 13 + Proficiency Bonus). On a success, the effect ends."
      }
    ],
    "levelRequirementReason": "The Whimsical Wand requires no level to use but is best suited for lower-level characters who need healing and distraction without much power.",
    "vendorReason": "Sweet Supplies specializes in magical curiosities that bring joy and flavor, making the Whimsical Wand a perfect fit for their inventory.",
    "shippingDetail": "The Honeycomb Drone delivers with precision, ensuring the wand arrives intact from Le Claire Isle.",
    "usage": {
      "activation": "Bonus action to summon pastries; can be used once per long rest.",
      "duration": "Pastries last until they are eaten or dismissed by the caster.",
      "endsWhen": "The target creature successfully saves against confusion, or the wand is destroyed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its unique utility and the rarity of such whimsical magic in the market.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-23T21:23:48.669175+00:00",
    "aiReviewedAt": "2026-07-23T21:23:48.669175+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_ancient_rune_stone": {
    "id": "faerun_item_ancient_rune_stone",
    "name": "Ancient Rune Stone of Whispering Winds",
    "description": "The Ancient Rune Stone of Whispering Winds is a smooth, grey stone imbued with ancient magic. Crafted from the petrified remains of an elven wind harp, it hums softly when held against one's ear, revealing cryptic prophecies or soothing gusts that calm even the wildest of storms. The stone originated in the Whispering Wood, a place where whispers and winds carry the voices of ancient elves. This artifact is said to have been crafted by Pauline, a legendary elven wind mage who sought to preserve her people’s heritage through this enchanted relic.",
    "category": "curiosities",
    "price": 3300,
    "icon": "🔮",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Whispering Prophecy",
      "Breeze of Calm"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "giant_owl",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whispering Prophecy",
        "rules": "When held against your ear, the stone reveals a cryptic prophecy with a chance to gain one (10% per day). The prophecy lasts for an hour and can be interpreted by any character proficient in Arcana. There is no save required."
      },
      {
        "title": "Breeze of Calm",
        "rules": "The stone emits soothing gusts that calm even the wildest storms, reducing wind damage taken by up to 50% for one minute when held in your hand. This effect has a daily use limit of once per long rest."
      }
    ],
    "levelRequirementReason": "This item is suitable for any adventurer, as it requires no high-level spellcasting abilities.",
    "vendorReason": "Waterdeep Market is known for its wide selection of magical curiosities and rare artifacts, making it an ideal place to find the Ancient Rune Stone.",
    "shippingDetail": "Shipped directly by the giant owls who guard the Whispering Wood. The delivery takes a full week but ensures safe arrival.",
    "usage": {
      "activation": "Bonus action or as an object interaction",
      "duration": "Instantaneous for 'Whispering Prophecy'; one minute for 'Breeze of Calm'",
      "endsWhen": "The daily use limit is reached; the effect ends when the duration expires",
      "charges": "Unlimited uses, daily limit applies"
    },
    "priceReason": "The balanced price reflects its rare origin and magical properties without being overpowered.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T21:23:39.290464+00:00",
    "aiReviewedAt": "2026-07-23T21:23:39.290464+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_instant_fix_potion": {
    "id": "connectopia_instant_fix_potion",
    "name": "Quick Patch Potion",
    "description": "The Quick Patch Potion is a shimmering vial of iridescent liquid that glows softly with a greenish hue. When uncorked, it releases a soothing mist that instantly heals up to 50 hit points and repairs one equipment slot damaged by mundane means. Crafted in the bustling workshops of the Pioneer Post, this potion may cause a fleeting disorientation for those who drink it, but its primary use is to ensure adventurers are always ready for whatever comes next.",
    "category": "consumables",
    "price": 120,
    "icon": "🩹",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Heals Hit Points",
      "Repairs Equipment"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instantaneous Healing",
        "rules": "When consumed as a bonus action, the potion heals up to 50 hit points. It also repairs one equipment slot that has been damaged by mundane means (not magical damage). There is a 5% chance of triggering disorientation for the next minute."
      },
      {
        "title": "Disorientation",
        "rules": "There is a 5% chance that consuming the potion will cause the drinker to become disoriented, stumbling and losing their balance for one minute. This effect can be resisted with a successful Wisdom saving throw (DC 13)."
      }
    ],
    "levelRequirementReason": "This potion is designed for adventurers at all levels who may encounter minor injuries or equipment damage during exploration.",
    "vendorReason": "The Pioneer Post specializes in crafting and distributing items that aid travelers, from maps to medical supplies like this potion.",
    "shippingDetail": "Delivered by the swift delivery drones of the Pioneer Post, ensuring potions arrive fresh and potent.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends immediately upon consumption or if a saving throw is successful.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted with rare herbs and minerals, this potion remains a valuable tool for adventurers facing constant challenges.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T21:23:22.446640+00:00",
    "aiReviewedAt": "2026-07-23T21:23:22.446640+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_geode_of_ancient_codes": {
    "id": "connectopia_geode_of_ancient_codes",
    "name": "Nexus Core Fragment",
    "description": "Recovered from the deepest mines of Connectopia, this Nexus Core Fragment hums with ancient network protocols. Crafters who wear it can unlock advanced recipes, but beware—its strange, shifting blocks appear unpredictably, testing one's wits and reflexes. Should you stare too long, it might just start dictating binary commands to you in a voice that sounds like an old modem. Only the most skilled crafters dare to wield this fragment, for its power comes with a price: a touch of madness.",
    "category": "curiosities",
    "price": 52000,
    "icon": "💎",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Advanced Crafting Recipes",
      "Random Block Manifestations"
    ],
    "vendor": "craft_corner",
    "shippedBy": "express_crate",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Advanced Crafting Recipes",
        "rules": "Activates as an action. The wearer gains access to five advanced crafting recipes, one of which is randomly selected from the Fragment's vast database. These recipes can be used once per long rest."
      },
      {
        "title": "Random Block Manifestations",
        "rules": "The Nexus Core Fragment has a 10% chance each day (one chance per short or long rest) to summon a small, shifting block puzzle that appears within 5 feet of the wearer. The puzzle must be solved before it dissipates after 1 minute. Failure results in a minor network interference."
      }
    ],
    "levelRequirementReason": "Only those with experience and skill can handle the power of an ancient fragment like this one.",
    "vendorReason": "Craft Corner specializes in rare and powerful items for crafters, making it a logical place for such a unique piece.",
    "shippingDetail": "Ships via express crate within the week of purchase. Fragile item; avoid jarring or excessive heat during transit.",
    "usage": {
      "activation": "Activates as an action when worn and accessed with a crafting attempt.",
      "duration": "Instantaneous access to recipes, lasts until next long rest.",
      "endsWhen": "The effects end upon removal of the fragment or after one use per day.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its mythic rarity and limited utility.",
    "priceOriginal": 80000,
    "priceReviewedAt": "2026-07-25T15:11:11.285657+00:00",
    "aiReviewedAt": "2026-07-25T15:11:11.285657+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_doughy_duster": {
    "id": "leclaire_isle_doughy_duster",
    "name": "Doughy Duster",
    "description": "The Doughy Duster is a whimsical cleaning tool crafted from spun sugar and hardened croissant dough, its fluffiness surprising in its effectiveness against sticky goo and minor filth. This duster originates from Le Cleraise Isle, where it's used by the jovial Dough Folk to keep their sweet shops spotless. It not only cleans but also brings a touch of joy; each use restores 5 points of happiness and has a chance to trigger an infectious giggle among those nearby.",
    "category": "consumables",
    "price": 690,
    "icon": "🧹",
    "stock": 62,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Cleanses minor filth",
      "Restores happiness"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Rolling Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Filth Cleansing",
        "rules": "When activated, the Doughy Duster cleanses a small area within reach of minor filth. The effect is instantaneous and has no save DC required. This cleansing action does not affect sticky or greasy substances beyond the 'minor filth' category."
      },
      {
        "title": "Happiness Restoration",
        "rules": "Upon use, the Doughy Duster restores 5 points of happiness to any creature in its vicinity who is affected by negative emotions. This effect is instantaneous and does not require a save. However, it has a limited usage per day—only once per person."
      }
    ],
    "levelRequirementReason": "The Doughy Duster's mild effects make it accessible to players of all levels.",
    "vendorReason": "Le Cleraise Isle is famous for its Dough Folk and their culinary creations, making Dough Depot the natural vendor for such a delightful tool.",
    "shippingDetail": "Delivered via a rolling cart that brings joy wherever it goes, ensuring a cheerful delivery experience.",
    "usage": {
      "activation": "Used as an action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use per day",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Doughy Duster's uncommon status and the unique benefits it provides, including happiness restoration, justify its higher price.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T21:24:36.130444+00:00",
    "aiReviewedAt": "2026-07-23T21:24:36.130444+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_frosting_fist": {
    "id": "leclaire_isle_frosting_fist",
    "name": "Frosting Fist Gauntlet",
    "description": "The Frosting Fist Gauntlet, forged from solidified buttercream and reinforced with gingerbread plating, is a culinary masterpiece that transforms the wielder's grip into an ice-cold weapon of pastry destruction. Its hardened surface can shatter through stale pastries with ease, while its unique design grants surprising strength to the hand holding it. This gauntlet also has a knack for immobilizing foes—when used against dough-based creatures, there's a chance they'll find themselves in a 'Sticky Situation', slowing down their movements.",
    "category": "equipment",
    "price": 3300,
    "icon": "🧤",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Enhanced Strength",
      "Sticky Situation"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Sugar Delivery Drone",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Enhanced Strength",
        "rules": "When worn, the Frosting Fist Gauntlet increases the wielder's Strength score by 4. This effect is passive and applies at all times while the gauntlet is equipped."
      },
      {
        "title": "Sticky Situation",
        "rules": "This gauntlet has a 25% chance to apply the 'Sticky Situation' condition to any dough-based creature it strikes, causing them to move at half speed for 1 minute. The effect ends immediately if the creature is damaged by another attack or spell."
      }
    ],
    "levelRequirementReason": "The Frosting Fist Gauntlet requires a level 8 character due to its complex enchantments and intricate forging process.",
    "vendorReason": "Pastry Palace is renowned for its expertise in crafting items that blend culinary artistry with magical power, making the Frosting Fist Gauntlet an ideal addition to their inventory.",
    "shippingDetail": "The Sugar Delivery Drone ensures swift and safe delivery of the gauntlet, but only within a 5-mile radius of Pastry Palace.",
    "usage": {
      "activation": "Passive effect while equipped.",
      "duration": "Instantaneous activation; lasts until the end of the creature's next turn if successful.",
      "endsWhen": "The effect ends when the creature is damaged by another attack or spell, or at the start of its next turn.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Frosting Fist Gauntlet's price reflects a balance between its rarity and the complexity of its enchantments, as well as the limited availability of such unique items.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T21:24:08.289156+00:00",
    "aiReviewedAt": "2026-07-23T21:24:08.289156+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_chronometric_cookie": {
    "id": "leclaire_isle_chronometric_cookie",
    "name": "Chronometric Cookie of Temporal Tastes",
    "description": "The Chronometric Cookie of Temporal Tastes is a whimsical confectionary enigma, crafted from the very essence of time itself. Each bite transports you to fleeting moments, tasting past sweet memories and future delights. The cookie's golden crust crackles with temporal energy, and its scent alone can stir long-buried cravings or tantalize with promises of yet-to-come feasts. Only a rare treat among the confections of LeClaire Isle, it is said that those who partake might find themselves momentarily lost in the fabric of time.",
    "category": "curiosities",
    "price": 9100,
    "icon": "🍪",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Temporal Tasting",
      "Sweet Craving"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Swift Courier of LeClaire Isle",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Tasting",
        "rules": "Eating this cookie allows you to briefly savor a taste from your past or future. For 1d4 rounds, you gain temporary advantage on an Insight check related to food and drink. This effect can only be used once per day."
      },
      {
        "title": "Sweet Craving",
        "rules": "For the duration of one hour after eating this cookie, you are prone to uncontrollable cravings for sweets. During this time, your saving throw DCs increase by 2 against any effect that would grant you a saving throw related to resisting sweet indulgences."
      }
    ],
    "levelRequirementReason": "This item is accessible to all adventurers, as it can be savored by anyone seeking a taste of the extraordinary.",
    "vendorReason": "Sweet Supplies prides itself on offering the most exotic and rare treats from LeClaire Isle, ensuring that every patron leaves with a unique experience.",
    "shippingDetail": "The cookie is delivered in an enchanted box that ensures its temporal freshness during transit.",
    "usage": {
      "activation": "Eating the cookie",
      "duration": "1d4 rounds for Temporal Tasting; one hour for Sweet Craving",
      "endsWhen": "Ends after duration or if the effect is interrupted by a successful saving throw against resisting sweet indulgences.",
      "charges": "Unlimited, but each use of Temporal Tasting can only be attempted once per day."
    },
    "priceReason": "The Chronometric Cookie's rarity and the unique experience it provides justify its modest price in XP.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:24:18.748303+00:00",
    "aiReviewedAt": "2026-07-23T21:24:18.748303+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_club_supply_shock_darts": {
    "id": "kivotos_item_club_supply_shock_darts",
    "name": "Shock Darts of Discord",
    "description": "Shock Darts of Discord are miniature launchers that deliver a jarring electric shock. Crafted from polished brass and fitted with custom springs, these darts can be launched at the most inopportune moments. Each dart strikes with a potent zap, ideal for disrupting dull lectures or any other mischievous activity. These darts are particularly effective when aimed at a distracted audience, as their electric charge is known to momentarily paralyze targets.",
    "category": "consumables",
    "price": 700,
    "icon": "⚡",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "deal_6_electric_damage",
      "stun_target_for_1_round"
    ],
    "vendor": "club_supply",
    "shippedBy": "Courier Pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Electric Shock",
        "rules": "When thrown, the darts deliver a surge of electricity that deals 6d6 lightning damage to one target within 30 feet. The target must succeed on a DC 14 Dexterity saving throw or be stunned for 1 round."
      },
      {
        "title": "Momentary Stun",
        "rules": "If the target fails their saving throw, they are stunned for 1 round, during which time they cannot take actions. The stun effect ends when the target completes its next turn."
      }
    ],
    "levelRequirementReason": "These darts are designed to be used by students and novices in various club activities.",
    "vendorReason": "Club Supply is known for providing essential gear for student clubs, including tools for disrupting mundane routines.",
    "shippingDetail": "Courier Pigeon delivers the darts swiftly, ensuring they arrive before the next lecture starts.",
    "usage": {
      "activation": "Throw as a bonus action",
      "duration": "Instantaneous (effect ends after stun duration)",
      "endsWhen": "Target completes their next turn or is no longer stunned",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the quality craftsmanship and the electric charge's effectiveness in causing disruption.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T21:24:26.617528+00:00",
    "aiReviewedAt": "2026-07-23T21:24:26.617528+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_premium_academy_charm": {
    "id": "kivotos_item_premium_academy_charm",
    "name": "Academy Authority Charm",
    "description": "The Academy Authority Charm, a delicate metal pendant adorned with symbols of scholarly power, whispers influence into the minds of those around you. Crafted by the hands of the Headmaster himself and imbued with the essence of ancient texts, it subtly bends perceptions without overt control. When worn, it grants an aura that makes listeners more inclined to agree with your suggestions, not just in words but also in actions; a persuasive charm indeed.",
    "category": "premium",
    "price": 3300,
    "icon": "🎓",
    "stock": 8,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Increased Persuasion",
      "Advantage on Social Interactions"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Secure Delivery System",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Increased Persuasion",
        "rules": "When you attempt to influence someone with Charisma (Persuasion), you gain a +2 bonus to the roll. This effect lasts until the start of your next turn."
      },
      {
        "title": "Advantage on Social Interactions",
        "rules": "You gain advantage on all Dexterity (Stealth) checks and Charisma (Intimidation, Persuasion, or Performance) checks made to interact with others in social situations. This effect lasts for 10 minutes."
      }
    ],
    "levelRequirementReason": "The charm requires a high level of confidence and control over one's persuasive abilities, which is why only characters of at least 8th level can wield it effectively.",
    "vendorReason": "The Academy Armory ensures that only those who have earned the trust of the Headmaster are allowed to purchase this powerful but subtle tool.",
    "shippingDetail": "The charm is carefully packed and shipped via the Academy’s own Secure Delivery System, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the start of your next turn or when removed.",
      "endsWhen": "The effect ends when you remove the charm from your person or at the end of your next turn.",
      "charges": "Unlimited, but only one effect is active at a time."
    },
    "priceReason": "Considering its subtle yet powerful effects and the exclusive nature of its crafting, this charm's price reflects its value in enhancing social interactions within the complex environment of academic influence.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T21:24:58.251312+00:00",
    "aiReviewedAt": "2026-07-23T21:24:58.251312+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_apple_juice_potion": {
    "id": "equestria_item_apple_juice_potion",
    "name": "Apple Juice of Revitalization",
    "description": "The Apple Juice of Revitalization is a shimmering elixir crafted from the legendary Gala apples of Sweet Apple Grove. This potion, brought to you by Twilight Sparkle herself, not only restores your vitality but also fortifies your endurance for the grueling trials ahead. Each sip grants you a burst of energy that lasts for 60 seconds, and it leaves you feeling refreshed as if you've just completed a rejuvenating nap.",
    "category": "consumables",
    "price": 120,
    "icon": "🍎",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "restores health",
      "increases stamina"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Delivery Pegasus",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Health",
        "rules": "When consumed, the Apple Juice of Revitalization restores 40 hit points to you. This effect is instantaneous and can be used once per short or long rest."
      },
      {
        "title": "Increase Stamina",
        "rules": "For the next 60 seconds after drinking this potion, your stamina regeneration increases by +1 per minute. This effect ends when you take damage in combat or if you use another stamina-increasing item during that time."
      }
    ],
    "levelRequirementReason": "The potion's effects are designed for adventurers of all levels who need a quick boost to face the challenges ahead.",
    "vendorReason": "Twilight Sparkle, known for her extensive knowledge and magical prowess, personally ensures that this elixir is available at the Ponyville Market for all who seek it.",
    "shippingDetail": "The potion is delivered swiftly by the skilled Delivery Pegasi, ensuring you receive it fresh from Sweet Apple Grove.",
    "usage": {
      "activation": "飲用",
      "duration": "60 seconds after consumption",
      "endsWhen": "You take damage in combat or use another stamina-increasing item during that time",
      "charges": "Unlimited"
    },
    "priceReason": "The Apple Juice of Revitalization is priced at 1000 XP due to the rare, magical apples used and its potent effects on stamina and health.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T21:24:34.162908+00:00",
    "aiReviewedAt": "2026-07-23T21:24:34.162908+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_star_map_fragment": {
    "id": "equestria_item_star_map_fragment",
    "name": "Fragment of the Celestial Star Map",
    "description": "A Fragment of the Celestial Star Map, a cold and intricate relic said to guide lost ponies through Equestria's hidden pathways. Crafted from an ancient map that once charted the stars themselves, this tiny fragment whispers secrets in a language only those attuned to the cosmos can truly understand. It grants +2 to Perception checks and offers a 10% chance of revealing hidden pathways on any map or terrain it touches.",
    "category": "curiosities",
    "price": 700,
    "icon": "⭐",
    "stock": 33,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Guides through hidden paths",
      "+2 Perception"
    ],
    "vendor": "Crystal Empire",
    "shippedBy": "Crystal Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Pathways",
        "rules": "When used, there is a 10% chance that the next check to navigate an area or find secret doors reveals additional hidden pathways. This effect has no save DC and can be used once per short rest."
      },
      {
        "title": "Enhanced Perception",
        "rules": "+2 bonus on all Perception checks until the start of your next long rest. No saving throw is required for this effect, which regains its uses after a long rest."
      }
    ],
    "levelRequirementReason": "This fragment can be used by any pony to aid in navigation and perception tasks.",
    "vendorReason": "The Crystal Empire is known for its rich history with celestial maps, making it a fitting vendor for this relic.",
    "shippingDetail": "Ships via the Crystal Courier service, ensuring safe and timely delivery of this fragile artifact.",
    "usage": {
      "activation": "Standard action to use during navigation or perception checks.",
      "duration": "Until start of your next long rest for Perception bonus.",
      "endsWhen": "At the start of your next long rest; uses are regained after a long rest.",
      "charges": "Unlimited, regains uses after a long rest."
    },
    "priceReason": "The price reflects its uncommon rarity and the unique benefits it offers for navigation and perception tasks.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T21:25:06.079102+00:00",
    "aiReviewedAt": "2026-07-23T21:25:06.079102+00:00",
    "aiReviewVersion": 1
  },
  "internet_pixel_plunger": {
    "id": "internet_pixel_plunger",
    "name": "Pixel Plunger of Viral Removal",
    "description": "The Pixel Plunger of Viral Removal hums with a digital pulse, its surface etched with arcane patterns that shimmer like data streams. Crafted by the enigmatic Pixel Shop in collaboration with Data Drone, this gadget can quell viral trends with a mere push, restoring your health and dispelling curses or ailments with a single use. It's perfect for eliminating that dance craze everyone is doing, but beware: misuse might lead to meme overload, leaving you confused and disoriented.",
    "category": "consumables",
    "price": 9200,
    "icon": "🚽",
    "stock": 42,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Viral Trend Suppression",
      "Health Restoration"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Data Drone Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Viral Trend Suppression",
        "rules": "As a bonus action, the user can point the Pixel Plunger at an ongoing viral trend within reach. This suppresses the trend for up to one minute, preventing further spread and reducing the negative effects it has on the environment."
      },
      {
        "title": "Health Restoration",
        "rules": "Upon successful activation of the device (no save required), the user regains 10% of their maximum hit points. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The Pixel Plunger requires a certain level of digital literacy and understanding to properly utilize its effects.",
    "vendorReason": "As creators of this groundbreaking gadget, the Pixel Shop ensures only their customers can access such powerful tools for viral trend management.",
    "shippingDetail": "Delivered within a week via Data Drone Express; requires signature upon arrival.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous effect, lasting up to one minute",
      "endsWhen": "The trend stops spreading or the user's next long rest",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, considering its unique effects and limited daily use.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T21:25:02.970331+00:00",
    "aiReviewedAt": "2026-07-23T21:25:02.970331+00:00",
    "aiReviewVersion": 1
  },
  "internet_data_scan": {
    "id": "internet_data_scan",
    "name": "Rapid Data Scan Service",
    "description": "Pauline's Microphone hums with a life of its own, capturing whispers from the digital ether and amplifying them for your ears alone. This tool can instantly reveal hidden data locations on any map you’re reviewing, allowing you to swiftly navigate through vast archives or complex networks. With each use, you gain a fleeting boost in Data Intuition, enhancing your perception and ability to process information with uncanny speed.",
    "category": "services",
    "price": 700,
    "icon": "🔍",
    "stock": 15,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "instantly reveals hidden data locations",
      "gains temporary Data Intuition"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Packet Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Locations",
        "rules": "When activated by a bonus action, Pauline's Microphone emits a faint hum that instantly reveals the coordinates or map markers of any hidden digital data locations within reach. This effect is instantaneous and does not require an attack roll."
      },
      {
        "title": "Data Intuition Boost",
        "rules": "For 1 hour after using Pauline's Microphone, you gain advantage on Intelligence (Investigation) checks related to deciphering or understanding encrypted data. Additionally, your effective proficiency bonus is increased by 2 for these checks."
      }
    ],
    "levelRequirementReason": "Requires only a basic understanding of digital systems to operate the device.",
    "vendorReason": "Data Dealer maintains a reputation for providing advanced tools and services, including Pauline's Microphone.",
    "shippingDetail": "Ships via Packet Courier, ensuring secure and efficient delivery of your order within the region.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous; effect lasts for 1 hour after use",
      "endsWhen": "The duration expires or you use it again (recharges on a long rest)",
      "charges": "Unlimited uses"
    },
    "priceReason": "Reflects the cost of advanced technology and ongoing support from Data Dealer.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:25:40.911967+00:00",
    "aiReviewedAt": "2026-07-23T21:25:40.911967+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_warp_pipe": {
    "id": "mushroom_kingdom_warp_pipe",
    "name": "Wario's Quantum Shifter",
    "description": "This bizarre pipe, salvaged from a rift between dimensions, shimmers with an unstable quantum field. When activated, it teleports you to a random location within 10 meters, often depositing you inside a towering mushroom or Wario’s massive belly. The device is known for its unpredictable nature and might even send you directly into the ground. Use at your own risk; the last adventurer reported gaining temporary hit points but also ended up in an unwelcome embrace with the Mushroom King himself.",
    "category": "equipment",
    "price": 9200,
    "icon": "🚀",
    "stock": 35,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Teleport - short range (10 meters)",
      "Gain 2d4 Temporary Hit Points"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_cart",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Teleport",
        "rules": "The user must use an action to activate the pipe. It teleports them to a random location within 10 meters, with a small chance of materializing inside a solid object or a giant mushroom. There is no save DC required for this effect."
      },
      {
        "title": "Temporary Hit Points",
        "rules": "Upon successful teleportation, the user gains temporary hit points equal to 2d4 (10). These temporary hit points last until they are reduced to zero or the user takes a long rest. The pipe can be used once per day."
      }
    ],
    "levelRequirementReason": "The device's quantum instability requires a certain level of arcane knowledge and physical resilience.",
    "vendorReason": "Toad Town Market specializes in rare items from other dimensions, making it the perfect place to find this peculiar pipe.",
    "shippingDetail": "The mushroom cart delivers directly to your doorstep, but due to its unpredictable nature, ensure you are indoors before activation.",
    "usage": {
      "activation": "action",
      "duration": "instantaneous",
      "endsWhen": "the user takes damage or uses it again the next day",
      "charges": "1/Day"
    },
    "priceReason": "The pipe's limited daily use and unpredictable nature justify its lower price.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:25:28.564124+00:00",
    "aiReviewedAt": "2026-07-23T21:25:28.564124+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_forbidden_coin": {
    "id": "mushroom_kingdom_forbidden_coin",
    "name": "The Coin of Unending Greed",
    "description": "The Coin of Unending Greed radiates an ominous, gold-laced aura when held. This ancient relic grants a fleeting surge of wealth, converting 500 gold coins into your possession with each use. However, the coin's dark magic increases the chance of encountering rare treasures by 20%, at the cost of fostering an insatiable desire for more. Should you succumb to its influence for too long, there is a 10% chance that your soul will be trapped within the coin forever, turning you into a sentient pile of gold dust.",
    "category": "forbidden",
    "price": 52000,
    "icon": "💰",
    "stock": 12,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Grant Wealth",
      "Enhanced Treasure Chance"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "shadow_messenger",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Grant Wealth",
        "rules": "When activated, the coin grants 500 gold coins to the user. This effect is instantaneous and does not require a saving throw or other action."
      },
      {
        "title": "Enhanced Treasure Chance",
        "rules": "The coin increases the chance of encountering rare items by 20%. This effect lasts until the end of your next long rest, but it reduces your party's morale by -1 for every day this effect is active. If you fail a saving throw against this effect, the reduction in morale becomes permanent."
      }
    ],
    "levelRequirementReason": "The coin's dark magic requires a certain level of experience to resist its corrupting influence.",
    "vendorReason": "The Koopa Shop, known for its questionable wares, has acquired the coin from an ancient underground network.",
    "shippingDetail": "The shadow messenger ensures that the coin arrives safely but may not be tracked by prying eyes or hands.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous, until end of next long rest",
      "endsWhen": "Ends upon a successful saving throw against its corrupting influence or at the end of your next long rest. It is destroyed if you fail three consecutive saving throws.",
      "charges": "Unlimited"
    },
    "priceReason": "The coin's dark magic and rare utility justify a price that reflects both its power and danger.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T21:25:33.224318+00:00",
    "aiReviewedAt": "2026-07-23T21:25:33.224318+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_godly_power_shard": {
    "id": "mushroom_kingdom_godly_power_shard",
    "name": "Wario’s Heart of Velocity",
    "description": "Wario’s Heart of Velocity is a shimmering core embedded with the essence of Wario's relentless speed and destructive prowess. Crafted from the very heart of the Mushroom Kingdom, this fragment grants its bearer an explosive burst of velocity that leaves enemies in dust. With each use, there's a 30% chance for a devastating 'Wario Smash' to obliterate foes in its wake, leaving a trail of chaos behind.",
    "category": "equipment",
    "price": 780000,
    "icon": "⚡",
    "stock": 3,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Burst of Velocity",
      "Wario Smash"
    ],
    "vendor": "wario_direct",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Burst of Velocity",
        "rules": "Activate as a bonus action. Increases the user's movement speed by 50% for 10 seconds. Ends when the duration expires or if the user drops to 0 hit points."
      },
      {
        "title": "Wario Smash",
        "rules": "Triggered randomly with a 30% chance each time Burst of Velocity is used, this effect deals 2d6 + Strength modifier force damage. The target must succeed on a DC 15 Dexterity saving throw or be knocked prone and take an additional 1d6 force damage."
      }
    ],
    "levelRequirementReason": "Requires no level as it is a godly artifact, but is intended for lower-level characters to experience its chaotic effects.",
    "vendorReason": "Wario personally oversees the distribution of items from his domain, ensuring they are only sold by him directly.",
    "shippingDetail": "Delivered instantly through a dimensional portal, but requires an additional 50 XP for expedited delivery.",
    "usage": {
      "activation": "Bonus action to activate and use.",
      "duration": "10 seconds duration.",
      "endsWhen": "Expires after the duration or when dropped to 0 hit points.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP, this item offers a godly artifact with powerful effects that can be used by lower-level characters without being overpowered.",
    "priceOriginal": 850000,
    "priceReviewedAt": "2026-07-23T21:25:19.440582+00:00",
    "aiReviewedAt": "2026-07-23T21:25:19.440582+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_voidshard_resonator": {
    "id": "almost_edge_voidshard_resonator",
    "name": "Voidshard Resonator",
    "description": "A pulsing fragment of the void, humming with chaotic energy. When activated, it emits a wave of distortion, briefly scrambling enemy targeting and disrupting magical connections.",
    "category": "equipment",
    "price": 30000,
    "icon": "🌀",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Chance to disrupt enemy spellcasting (30%)",
      "Reduces targeting accuracy of enemies by 15%",
      "Grants +2 to Wisdom saving throws"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Black Hole Delivery Service",
    "levelRequirement": 9
  },
  "almost_edge_mythic_echo_of_the_fall": {
    "id": "almost_edge_mythic_echo_of_the_fall",
    "name": "Echo of the Fall",
    "description": "The Echo of the Fall is a shimmering, translucent sphere that hums with the forgotten cries of those who crossed the Edge. As you touch it, the air around you distorts, and your mind is flooded with fragments of ancient memories—potentially overwhelming but offering profound insights into the true nature of the Edge's mysteries. With each touch, hidden pathways are revealed, and cryptic prophecies whisper truths about the fate of the Edge, all while temporarily increasing intelligence for a brief time.",
    "category": "curiosities",
    "price": 53000,
    "icon": "🤯",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "godly",
    "effects": [
      "Grants temporary increase in intelligence",
      "Reveals hidden secrets"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Reality Anchor Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Intelligence Boost",
        "rules": "When activated as an action, the Echo of the Fall increases your Intelligence by +5 for up to 3 turns. This effect can be used once per long rest."
      },
      {
        "title": "Secret Revelation",
        "rules": "Each time you activate the Echo, there is a 10% chance that it reveals a hidden secret about the Edge or its surroundings within a 5-foot radius. The secret must be noted by the DM and cannot be resisted with a saving throw."
      }
    ],
    "levelRequirementReason": "This item provides significant knowledge but is accessible to all adventurers, ensuring it remains a valuable tool for any journey.",
    "vendorReason": "The Edge Wanderer has encountered numerous travelers who have crossed the perilous Edge and can vouch for its utility in understanding its secrets.",
    "shippingDetail": "Delivered by a Reality Anchor Drone, ensuring that the Echo of the Fall arrives intact and functional.",
    "usage": {
      "activation": "Activate as an action to gain temporary intelligence boost and reveal a secret.",
      "duration": "The Intelligence boost lasts for up to 3 turns.",
      "endsWhen": "The effect ends when the duration expires or if it is destroyed.",
      "charges": "Unlimited uses, but only one effect can be active at any time."
    },
    "priceReason": "Balanced as a Mythic item providing significant lore and utility without being overpowered.",
    "priceOriginal": 180000,
    "priceReviewedAt": "2026-07-23T21:26:13.793395+00:00",
    "aiReviewedAt": "2026-07-23T21:26:13.793395+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_voidshard_whisper": {
    "id": "the_edge_voidshard_whisper",
    "name": "Voidshard Whisper",
    "description": "The Voidshard Whisper is a glowing fragment of an ancient void. When touched, it emits a low hum that resonates with forgotten echoes from the abyssal realms. Consuming it grants you a brief surge of insight into future possibilities—though some futures may not be what you expect. This shard can heal 15 hit points and grant a temporary boost to your speed, making you faster for a short time.",
    "category": "consumables",
    "price": 3300,
    "icon": "🔮",
    "stock": 33,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Heal",
      "Speed Boost"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "Dimensional Rift Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Healing Surge",
        "rules": "Consume the Voidshard Whisper as an action. It heals 15 hit points to you and has a chance to cause temporary madness, granting uncontrollable giggling for 1d4 rounds."
      },
      {
        "title": "Increased Speed",
        "rules": "The shard grants a +20% movement speed increase for 6 seconds. This effect ends if you are incapacitated or drop the shard."
      }
    ],
    "levelRequirementReason": "Requires at least third level to handle the shard's strange energies safely.",
    "vendorReason": "The abyss trader deals in rare artifacts from forgotten realms, including this peculiar fragment.",
    "shippingDetail": "Ships through rifts with a one-day delay due to the unstable nature of void travel.",
    "usage": {
      "activation": "Consume as an action",
      "duration": "Instantaneous healing, speed boost lasts until end of turn if not interrupted",
      "endsWhen": "Incapacitated or dropped; ends immediately on both conditions",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to reflect the shard's unique abilities and limited stock.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T21:25:47.198060+00:00",
    "aiReviewedAt": "2026-07-23T21:25:47.198060+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_chronal_anchor": {
    "id": "the_edge_chronal_anchor",
    "name": "Chronal Anchor of Echoes",
    "description": "The Chronal Anchor of Echoes is a heavy, ornate anchor crafted from the solidified essence of time. Its surface glows faintly with an ethereal light, hinting at its power to alter the flow of moments. This relic allows you to briefly rewind your last action by up to 3 seconds, potentially saving you in dire combat situations. Additionally, it increases your critical hit chance by 10%, ensuring that when you land a blow, it's devastatingly effective.",
    "category": "equipment",
    "price": 53000,
    "icon": "⏳",
    "stock": 15,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Rewind Last Action",
      "Critical Hit Boost"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Temporal Delivery Service",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Rewind Last Action",
        "rules": "As an action, you can rewind your last action by up to 3 seconds. This effect is instantaneous and does not provoke opportunity attacks. The rewind only affects the outcome of the action but cannot be used on actions that are already resolved or have immediate consequences like casting spells with a verbal component."
      },
      {
        "title": "Critical Hit Boost",
        "rules": "Gain a +10 bonus to critical hit chances for 1 hour after using the Chronal Anchor. This effect stacks with other sources of critical hit bonuses but cannot exceed +20 in total. The bonus ends if you take damage or fall unconscious."
      }
    ],
    "levelRequirementReason": "The anchor's power requires a deep understanding of time manipulation, which is beyond the reach of those below level 16.",
    "vendorReason": "Edge Outpost specializes in rare and powerful relics from the far reaches of space-time, making it the perfect vendor for this Chronal Anchor.",
    "shippingDetail": "The Temporal Delivery Service ensures that your Chronal Anchor arrives safely and promptly, with a guaranteed delivery time of one week within the Prime Material Plane.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Once per short or long rest after using it; ends if you take damage or fall unconscious",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the mythic rarity and power of the Chronal Anchor, balancing its utility in critical combat situations.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-23T21:25:55.798120+00:00",
    "aiReviewedAt": "2026-07-23T21:25:55.798120+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_obsidian_puzzlebox": {
    "id": "the_edge_obsidian_puzzlebox",
    "name": "The Infinite Puzzlebox",
    "description": "The Infinite Puzzlebox, a sleek obsidian cube adorned with intricate gears and cogs, seems simple at first glance but reveals its true nature only to those who dare to tinker. As you twist and turn the sides, it morphs into an ever-changing puzzle, presenting new challenges that test your wits and resolve. Solve the riddle correctly, and a tempest of chaotic energy surges forth; solve incorrectly, and you might find yourself trapped within its labyrinthine depths until you figure out how to escape.",
    "category": "curiosities",
    "price": 700,
    "icon": "🔤",
    "stock": 85,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Chaotic Energy Burst",
      "Illusory Companion"
    ],
    "vendor": "final_shop",
    "shippedBy": "Standard Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Chaotic Energy Burst",
        "rules": "When the puzzlebox is solved correctly, it releases a burst of chaotic energy within a 10-foot radius. Each creature in this area must make a DC 15 Dexterity saving throw or be stunned for 1 minute and take 3d6 radiant damage."
      },
      {
        "title": "Illusory Companion",
        "rules": "If the puzzlebox is tampered with incorrectly, it may conjure an illusory companion. This minor illusionary creature appears to be a loyal dog but can speak in riddles and taunt you for 1 minute before dissipating."
      }
    ],
    "levelRequirementReason": "The Infinite Puzzlebox requires basic dexterity and problem-solving skills, which are generally attainable by level 1 characters.",
    "vendorReason": "Final Shop is renowned for its collection of rare curiosities and magical trinkets that challenge the minds of adventurers.",
    "shippingDetail": "Delivered within a week, with an additional delay if the item is out of stock.",
    "usage": {
      "activation": "Interact as a bonus action to begin solving the puzzle.",
      "duration": "Instantaneous once solved or tampered with incorrectly.",
      "endsWhen": "The effect ends when the puzzle is either correctly or incorrectly solved, expending all charges.",
      "charges": "Unlimited"
    },
    "priceReason": "The Infinite Puzzlebox's price reflects its balance between challenge and risk, offering both a strategic advantage and potential for disaster.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-24T23:53:31.003726+00:00",
    "aiReviewedAt": "2026-07-24T23:53:31.003726+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_crumb_of_ascension": {
    "id": "grand_country_crumb_of_ascension",
    "name": "Crumb of Ascension",
    "description": "The Crumb of Ascension is a minuscule piece chipped from the legendary 'Layered Peak'. When consumed, it propels you skyward with a burst of upward momentum, ideal for scaling treacherous cliffs or escaping peril. It's made from the ancient stones that once formed the peak itself, imbued with fleeting ascendant magic. However, consuming too much can lead to an uncontrollable levitation, leaving you floating aimlessly in the air until it passes.",
    "category": "consumables",
    "price": 54000,
    "icon": "🚀",
    "stock": 15,
    "rarity": "mythic",
    "stockType": "limited_daily",
    "effects": [
      "Burst of Momentum",
      "Climbing Buff"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "Gravity Pod",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Burst of Momentum",
        "rules": "When consumed as a bonus action, this crumb grants you a burst of upward momentum that lasts for 3 turns. You gain a +10 to your AC and the ability to jump twice your normal height until it wears off."
      },
      {
        "title": "Climbing Buff",
        "rules": "There's a 25% chance each time you consume this crumb, that you also gain the 'Climbing' condition for 1 minute. This stacking buff increases your climbing speed by +30 feet and grants advantage on Strength (Athletics) checks."
      }
    ],
    "levelRequirementReason": "This crumb is potent enough to help even the least experienced adventurers, but its magic still requires a minimum level of proficiency.",
    "vendorReason": "The Vertical Vendor specializes in items related to climbing and altitude, making this crumb an ideal addition to their inventory.",
    "shippingDetail": "Delivered by the gravity-defying Gravity Pod, ensuring that your Crumb of Ascension arrives intact and ready for use.",
    "usage": {
      "activation": "Bonus action",
      "duration": "3 turns",
      "endsWhen": "The effect ends when you are no longer airborne or after its duration expires",
      "charges": "Unlimited, but only one stack can be active at a time"
    },
    "priceReason": "Balanced as it's a potent consumable that provides significant benefits without being overpowered.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T21:26:10.992243+00:00",
    "aiReviewedAt": "2026-07-23T21:26:10.992243+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_chronal_crumb": {
    "id": "grand_country_chronal_crumb",
    "name": "Chronal Crumb of Disorientation",
    "description": "The Chronal Crumb of Disorientation is a shimmering, jelly-like fragment that pulses with a faint temporal aura. Consumed, it briefly warps your perception and snares nearby foes in a flux of time, making them uncertain of their next move. It’s a handy tool for evading capture or confusing enemies, but prolonged exposure might leave you questioning the fabric of reality itself—or just wishing you had never tasted it.",
    "category": "curiosities",
    "price": 55000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "temporal flux",
      "perception warp"
    ],
    "vendor": "side_seller",
    "shippedBy": "Dimensional Portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Flux",
        "rules": "When consumed, this crumb creates a brief temporal distortion affecting all creatures within 10 feet. Targets must succeed on a DC 15 Dexterity saving throw or be stunned for 1 round."
      },
      {
        "title": "Perception Warp",
        "rules": "The crumb grants you advantage on Wisdom (Insight) checks to resist fear and confusion effects for 1 minute after consumption, but you gain disadvantage on Intelligence (Investigation) checks until your next short or long rest."
      }
    ],
    "levelRequirementReason": "This crumb is accessible to all levels as a versatile tool for quick escapes.",
    "vendorReason": "Side_seller specializes in niche and mythic curiosities that adventurers might need on their journeys.",
    "shippingDetail": "Ships via the Dimensional Portal, ensuring swift delivery to any plane of existence.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "Instantaneous; effect lasts until the end of your next turn or when you take a short rest",
      "endsWhen": "The effect ends if you are stunned by another source, or after one round for Temporal Flux.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This crumb offers versatile utility without being overpowered, making it a balanced mythic item.",
    "priceOriginal": 80000,
    "priceReviewedAt": "2026-07-24T23:53:34.884390+00:00",
    "aiReviewedAt": "2026-07-24T23:53:34.884390+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_void_shard": {
    "id": "grand_country_void_shard",
    "name": "Void Shard of Oblivion",
    "description": "The Void Shard of Oblivion, a fragment torn from the void's inscrutable depths, hums with an eerie, otherworldly chill. Its touch is like cold steel against your skin, and its pulse echoes the silence between worlds. This shard allows you to momentarily phase through solid objects, granting you passage where none should be possible—but at a terrible cost: prolonged use erodes your very essence, slowly draining your life force while increasing the chance of memory loss.",
    "category": "forbidden",
    "price": 1500000,
    "icon": "🖤",
    "stock": 1,
    "rarity": "godly",
    "stockType": "back_order",
    "effects": [
      "PHASE_THROUGH_OBstacles",
      "SOUL_DRAIN"
    ],
    "vendor": "layer_market",
    "shippedBy": "Shadow Courier",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Phase Through Obstacles",
        "rules": "As a bonus action, you can use the shard to phase through any solid object within reach. This effect lasts for up to 1 minute per level of your character. You are immune to damage while phased and cannot be targeted by attacks or spells while in this state."
      },
      {
        "title": "Soul Drain",
        "rules": "At the end of each of your turns, you gain one negative hit point unless you have expended a use from the shard. After using the shard for 5 minutes in total, you begin to lose memories; there is a cumulative 10% chance per minute spent phased that you will forget a random spell or class feature."
      }
    ],
    "levelRequirementReason": "Only those of great power and experience can wield the Void Shard without succumbing to its insidious effects too quickly.",
    "vendorReason": "The layer market deals in forbidden and rare artifacts, making it fitting for this shard's dark origins.",
    "shippingDetail": "Ships via the Shadow Courier; delivery may take up to a week due to its volatile nature.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Up to 1 minute per level of character",
      "endsWhen": "The duration ends or you lose concentration (as if concentrating on a spell).",
      "charges": "5 uses"
    },
    "priceReason": "The shard's rarity and the risk it poses to users justify its high price, but it remains less costly than other godly artifacts.",
    "priceOriginal": 300000,
    "priceReviewedAt": "2026-07-23T21:26:55.634596+00:00",
    "aiReviewedAt": "2026-07-23T21:26:55.634596+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_sugar_coated_hoof": {
    "id": "equestria_item_sugar_coated_hoof",
    "name": "Sugar Coated Hoof Charm",
    "description": "The Sugar Coated Hoof Charm is a delicate horseshoe charm crafted by Sweetie Belle, Apple Bloom, and Scootaloo themselves. This charming trinket not only enhances your movements with an added spring in your step but also sweetens your words, making you irresistible to any creature within a 10-foot radius for up to one hour. The Cutie Mark Crusaders' magic ensures its effectiveness, making it a must-have for any pony looking to outshine the competition.",
    "category": "consumables",
    "price": 120,
    "icon": "🍬",
    "stock": 75,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Increased Movement Speed",
      "Charismatic Persuasion"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Pegasus Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Movement Speed",
        "rules": "When activated as an action, this charm grants a +10% increase to your movement speed for one hour. This effect ends if you are incapacitated or if the charm is destroyed."
      },
      {
        "title": "Charismatic Persuasion",
        "rules": "For one hour after activation, you have advantage on all persuasion checks within a 10-foot radius of you. This effect is negated by any creature that successfully saves against it with a DC equal to 8 + your Charisma modifier."
      }
    ],
    "levelRequirementReason": "This charm is simple enough for even the youngest ponies, but its effectiveness makes it valuable beyond their age level.",
    "vendorReason": "As the Cutie Mark Crusaders' own creation, this item is a favorite at Ponyville Market, where vendors pride themselves on offering authentic items crafted by local heroes.",
    "shippingDetail": "Shipped via Pegasus Express, delivery is swift and reliable, ensuring your charm arrives fresh from the Cutie Mark Crusaders' workshop.",
    "usage": {
      "activation": "Activating this charm requires an action.",
      "duration": "One hour.",
      "endsWhen": "The effect ends if you are incapacitated or if the charm is destroyed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Crafted with magical horseshoe and Cutie Mark Crusaders' essence, this charm commands a high price due to its unique combination of utility and charm.",
    "priceOriginal": 380,
    "priceReviewedAt": "2026-07-23T21:27:17.773968+00:00",
    "aiReviewedAt": "2026-07-23T21:27:17.773968+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_shadow_hoof_badge": {
    "id": "equestria_item_shadow_hoof_badge",
    "name": "Shadow Hoof Badge of the Night Brigade",
    "description": "The Shadow Hoof Badge of the Night Brigade grants its bearer access to the clandestine strategies and stealth tactics of the enigmatic Night Brigade. Crafted from midnight obsidian and inscribed with ancient runes, it whispers tales of shadowy skirmishes and silent maneuvers. Wearing this badge is said to imbue one with a subtle affinity for nocturnal treats, making you more adept at slipping through the shadows without alerting your foes.",
    "category": "faction",
    "price": 9200,
    "icon": "🌑",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Stealth Boost",
      "Shadowed Status"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Gryphon Courier",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Stealth Boost",
        "rules": "The badge grants a +5 bonus to Dexterity (Stealth) checks. This effect is active as long as the wearer maintains their cover and does not engage in combat or loud activities, expiring if they are directly targeted by a light-based attack."
      },
      {
        "title": "Shadowed Status",
        "rules": "There's a 10% chance that any creature successfully targeting you with a light-based attack inflicts the 'Shadowed' condition on them (reduces their effective proficiency bonus by 2). This effect lasts until the end of your next turn and can occur once per short or long rest."
      }
    ],
    "levelRequirementReason": "The badge's intricate runes and the Night Brigade's clandestine training requirements necessitate a minimum level to ensure proper use and understanding.",
    "vendorReason": "The Crystal Empire, known for its ties with shadowy organizations, is privy to the badges of the Night Brigade through mutual agreements.",
    "shippingDetail": "The badge is delivered via a swift gryphon courier, ensuring it arrives in pristine condition and ready for use upon arrival.",
    "usage": {
      "activation": "Passive effect; requires no action to activate.",
      "duration": "Until the wearer is directly targeted by a light-based attack or they engage in combat.",
      "endsWhen": "The badge's effects expire if the wearer enters combat or is hit with a light-based attack.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "Balanced to reflect its unique combination of stealth and tactical advantage, while still requiring specialized training for optimal use.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:27:30.921118+00:00",
    "aiReviewedAt": "2026-07-23T21:27:30.921118+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_crumb_of_reality": {
    "id": "almost_edge_crumb_of_reality",
    "name": "Crumb of Reality",
    "description": "The Crumb of Reality is a shimmering fragment, a remnant of the endless void that clings to your palm like a forgotten memory. It tastes faintly of regret and stale sprinkles, and when held for a moment, it distorts reality, revealing glimpses of impossible geometries. For a fleeting instant, you can perceive the fabric of existence bending in ways that defy logic, yet upon release, the world snaps back into place with an unsettling finality.",
    "category": "curiosities",
    "price": 9200,
    "icon": "✨",
    "stock": 42,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Grant Temporary Vision",
      "Chance to Cause Confusion"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Temporary Vision",
        "rules": "As a bonus action, you can briefly distort your perception. For 1 minute or until you take damage, you gain advantage on Wisdom (Perception) checks and can see through illusions as if using the See Invisibility feature."
      },
      {
        "title": "Chance to Cause Confusion",
        "rules": "Each creature within a 20-foot radius of where you hold the crumb has a 15% chance to be confused for 1 minute on your turn. The save DC for this effect is equal to 8 + your proficiency bonus + half your level."
      }
    ],
    "levelRequirementReason": "The Crumb of Reality requires only first-level spellcasters, as its effects are subtle but potent.",
    "vendorReason": "Edge Wanderer, a nomadic trader from the far reaches of the multiverse, carries this rare item among their wares due to its unique and intriguing properties.",
    "shippingDetail": "The Crumb is shipped via the Dimensional Rift, ensuring that it arrives in pristine condition despite its volatile nature.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 Minute or Until You Take Damage",
      "endsWhen": "You take damage or lose concentration (as if concentrating on a spell)",
      "charges": "Unlimited"
    },
    "priceReason": "The Crumb of Reality is priced at 1,000 XP, reflecting its rarity and the unique properties that make it both intriguing and potentially dangerous.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-24T23:53:39.133578+00:00",
    "aiReviewedAt": "2026-07-24T23:53:39.133578+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_void_lantern": {
    "id": "almost_edge_void_lantern",
    "name": "Void Lantern of Lost Reflections",
    "description": "The Void Lantern of Lost Reflections casts an eerie, pulsating glow that seems to dance on the edges of perception itself. Its light does not merely illuminate but also stirs forgotten memories and half-remembered dreams. In its presence, shadows seem to whisper secrets from the void, and even the bravest hearts feel a creeping unease. This lantern is crafted from ancient, star-dusted metal, forged in the heart of a dying sun by the Void Merchant himself, who once sought to harness the power of lost realms.",
    "category": "equipment",
    "price": 54000,
    "icon": "🔦",
    "stock": 8,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "whispers_of_the_void",
      "resistance_to_fear"
    ],
    "vendor": "void_merchant",
    "shippedBy": "gravitational_pulses",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Whispers of the Void",
        "rules": "When activated, the lantern emits a low hum that compels creatures within 30 feet to make a Wisdom saving throw (DC 15). On a failed save, they are charmed for 1 minute. This effect can be used once per short or long rest."
      },
      {
        "title": "Resistance to Fear",
        "rules": "The bearer of the lantern gains resistance to fear effects and advantage on saving throws against being frightened. This benefit lasts until the end of their next turn after using the item."
      }
    ],
    "levelRequirementReason": "Only those with a deep understanding of the arcane can wield this powerful artifact without succumbing to its dark whispers.",
    "vendorReason": "The Void Merchant is known for dealing in items that bridge worlds, and this lantern embodies the essence of forgotten places and lost souls.",
    "shippingDetail": "Delivered via a gravitational pulse, ensuring secrecy and delivering the item directly to your doorstep, bypassing any usual couriers or checkpoints.",
    "usage": {
      "activation": "A bonus action to activate the lantern's effects.",
      "duration": "Instantaneous; ends when the user no longer holds it or upon being destroyed.",
      "endsWhen": "The item is destroyed, dropped, or lost. The effect ends for the bearer immediately if they are destroyed or lose possession of the lantern.",
      "charges": "Unlimited uses per rest"
    },
    "priceReason": "While not a high-priced item in terms of gold, its rarity and mystical properties make it invaluable to those who seek to navigate lost realms.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:27:49.250855+00:00",
    "aiReviewedAt": "2026-07-23T21:27:49.250855+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_whisper_of_the_boundary": {
    "id": "almost_edge_whisper_of_the_boundary",
    "name": "Whisper of the Boundary - Service Token",
    "description": "The Whisper of the Boundary - Service Token is a polished obsidian disc that hums with an unnerving resonance, its surface etched with ancient runes that glow faintly under torchlight. When presented to a Liminal Trader, it grants you cryptic advice, often useless but occasionally terrifyingly insightful, revealing secrets of the location and granting a small amount of mana. The token's power is unpredictable, as it may also bestow a temporary buff upon use.",
    "category": "services",
    "price": 700,
    "icon": "🗣️",
    "stock": 99,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "cryptic_advice",
      "temporary_buff"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "temporal_flux",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cryptic Advice",
        "rules": "When activated, the token grants you a single cryptic piece of advice from the Liminal Trader. The advice is often useless but occasionally provides terrifyingly insightful information about your current location or an upcoming event."
      },
      {
        "title": "Temporary Buff",
        "rules": "Upon use, the token may grant you a temporary buff that enhances one of your ability scores by +1 for 24 hours. The specific score is determined randomly each time the item is used."
      }
    ],
    "levelRequirementReason": "The cryptic advice and temporary buff effects are minor, suitable for low-level characters to gain small advantages.",
    "vendorReason": "Liminal Traders specialize in such tokens that bridge the realms of the known and unknown worlds.",
    "shippingDetail": "Ships via temporal flux, arriving within a day but with a chance to be delayed by events out of your control.",
    "usage": {
      "activation": "Interacted as an action at the start of your turn when presented to a Liminal Trader.",
      "duration": "Instantaneous upon activation; temporary buff lasts for 24 hours.",
      "endsWhen": "The cryptic advice is revealed and the temporary buff expires after its duration.",
      "charges": "Unlimited, recharged by the temporal flux."
    },
    "priceReason": "The item provides minor but potentially valuable benefits that are worth a moderate amount of XP for low-level characters.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-24T23:53:39.476789+00:00",
    "aiReviewedAt": "2026-07-24T23:53:39.476789+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_block_of_echoes": {
    "id": "connectopia_block_of_echoes",
    "name": "Block of Echoes",
    "description": "The Block of Echoes hums with the timeless whispers of Connectopia’s founding miners, their voices and tools echoing from bygone days. When struck, it plays back fragments of forgotten conversations and the rhythmic clangs of early mining implements, a delightful reprieve for weary explorers or an eerie reminder of past misadventures. Its resonant surface pulses with each use, holding only one memory at a time before reverting to silence.",
    "category": "curiosities",
    "price": 5800,
    "icon": "🔊",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "play_memory_clip",
      "increase_mining_speed"
    ],
    "vendor": "craft_corner",
    "shippedBy": "delivery_only",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Play Memory Clip",
        "rules": "When the Block of Echoes is struck, it plays a short memory clip of mining activity or conversation. This provides a +10 bonus to a mining check for up to three turns. The block can only play one memory at a time."
      },
      {
        "title": "Increase Mining Speed",
        "rules": "The Block grants the user a +10% increase in mining speed for 3 turns after being struck. This effect is cumulative with other bonuses but cannot exceed a +25% bonus to mining checks."
      }
    ],
    "levelRequirementReason": "This item requires at least level 6 due to its complex resonance and the need for a seasoned miner to understand and appreciate its effects.",
    "vendorReason": "Craft Corner specializes in unique, artisanal items that have historical significance or utility, making it an ideal vendor for the Block of Echoes.",
    "shippingDetail": "Ships via a trusted messenger who delivers directly to your doorsteps, ensuring safe and timely arrival.",
    "usage": {
      "activation": "Standard Action",
      "duration": "Instantaneous; effect lasts for up to three turns",
      "endsWhen": "The memory clip ends or the effect duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "Reflecting its rarity and historical significance, the Block of Echoes is priced at 3500 XP.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T21:27:59.991142+00:00",
    "aiReviewedAt": "2026-07-23T21:27:59.991142+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_pioneer_boots": {
    "id": "connectopia_pioneer_boots",
    "name": "Pioneer Boots of Steady Ground",
    "description": "The Pioneer Boots of Steady Ground are crafted from sturdy leather reinforced with a layer of hardened gravel, forged by the skilled block-smiths of Connectopia. These boots not only increase your movement speed by 15% but also grant you resistance to falling damage, making them indispensable for navigating the treacherous terrain. With each step, these boots seem to find purchase even on slick surfaces, offering a reliable grip and confidence to their wearer.",
    "category": "equipment",
    "price": 700,
    "icon": "🥾",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Increased Movement Speed",
      "Resistance to Falling Damage"
    ],
    "vendor": "block_smith",
    "shippedBy": "delivery_only",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Movement Speed",
        "rules": "While wearing these boots, your movement speed is increased by 15%. This effect is passive and applies continuously while you are equipped with the boots."
      },
      {
        "title": "Resistance to Falling Damage",
        "rules": "You gain resistance to falling damage. If you take falling damage, this reduces it by half (rounded down). This benefit lasts for a short duration immediately following any fall."
      }
    ],
    "levelRequirementReason": "These boots are designed for adventurers of all levels, providing essential protection and mobility to those venturing into Connectopia's challenging landscapes.",
    "vendorReason": "As the original creators of these sturdy boots, Block-Smiths continue to supply their reliable craftsmanship to adventurers across Connectopia.",
    "shippingDetail": "The boots are shipped via a trusted local courier who ensures they reach your doorstep in one piece.",
    "usage": {
      "activation": "Passive effect. No activation required once equipped.",
      "duration": "Continuous while equipped",
      "endsWhen": "Discontinued when removed or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The boots are priced at 1000 XP due to their unique combination of increased movement speed and resistance to falling damage, offering a balance between utility and cost.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:28:16.112601+00:00",
    "aiReviewedAt": "2026-07-23T21:28:16.112601+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_crystal_shard_of_confusion": {
    "id": "connectopia_crystal_shard_of_confusion",
    "name": "Crystal Shard of Confusion",
    "description": "The Crystal Shard of Confusion is a jagged, iridescent fragment that glows faintly in the dark. Crafted from an ancient crystal mined amidst tumultuous events, it emits a subtle hum when held. This shard disrupts both mind and body, compelling the bearer to engage in erratic behavior—whether building impromptu fortresses or causing accidental demolition. It's perfect for sowing chaos among foes but can lead to unintended destruction of one’s own creations.",
    "category": "curiosities",
    "price": 120,
    "icon": "😵‍💫",
    "stock": 15,
    "rarity": "common",
    "stockType": "special_order",
    "effects": [
      "Disorienting Aura",
      "Crafting Inhibition"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "delivery_only",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disorienting Aura",
        "rules": "When activated, the shard emits a subtle aura that confuses targets within 10 feet. Targets have a 25% chance to be confused for up to 3 turns. The confusion ends if the target takes any damage or successfully makes a Wisdom saving throw (DC 12). The item has an unlimited number of uses."
      },
      {
        "title": "Crafting Inhibition",
        "rules": "While holding this shard, your crafting speed is reduced by 10%, but you gain a +5 bonus to Dexterity (Stealth) checks. This effect lasts until the end of your next long rest or when you stop using the shard."
      }
    ],
    "levelRequirementReason": "This shard can be used by lower-level characters as its effects are manageable and do not demand high skill levels.",
    "vendorReason": "Pioneer Post, known for their wide network of supply routes, often carry unique items like the Crystal Shard of Confusion due to its novelty and utility.",
    "shippingDetail": "Ships via delivery only, ensuring safe handling during transit.",
    "usage": {
      "activation": "Object interaction (as an action)",
      "duration": "Instantaneous effect; lasts until the end of your next turn or target is confused",
      "endsWhen": "The confusion ends if a target takes damage or succeeds on a Wisdom save. The item can be used multiple times without recharge.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The shard's effects are versatile and useful for both low-level characters and those with specific build focuses, making it slightly more expensive than a common item.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T21:28:24.913659+00:00",
    "aiReviewedAt": "2026-07-23T21:28:24.913659+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_glimmering_crumb": {
    "id": "almost_edge_item_glimmering_crumb",
    "name": "Glimmering Crumb of Despair",
    "description": "A Glimmering Crumb of Despair, a tiny, iridescent fragment that dances with an unsettling light, is said to be a remnant from a forgotten doughnut dimension. When consumed, it grants temporary resistance to existential dread, but there's always the chance that one might feel slightly emptier in its wake. This strange crumb is known for its unpredictable effects, making players wonder if they've truly gained or lost something in their quest.",
    "category": "consumables",
    "price": 120,
    "icon": "✨",
    "stock": 72,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Resistance to Existential Dread",
      "Mild Discomfort"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Dimensional Slipstream Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resistance to Existential Dread",
        "rules": "The crumb grants the consumer temporary resistance to existential dread for 1 minute. This effect lasts until the start of your next turn after consuming it, and it can be used once per short or long rest."
      },
      {
        "title": "Mild Discomfort",
        "rules": "There is a 20% chance (DC 10) that when consumed, the crumb will inflict 'Mild Discomfort' on the consumer for 1 hour. Mild Discomfort imposes disadvantage on Wisdom saving throws and reduces movement speed by 10 feet until it ends."
      }
    ],
    "levelRequirementReason": "The Glimmering Crumb of Despair is accessible to all adventurers, as its unpredictable effects make it a useful yet risky item for any level 1 character.",
    "vendorReason": "The edge_wanderer, a seasoned traveler with a knack for finding the strange and wonderful, often carries this peculiar crumb from distant realms.",
    "shippingDetail": "Ships via the Dimensional Slipstream Courier Service, known for its unpredictable but reliable delivery times.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "1 minute or until consumed",
      "endsWhen": "Starts of your next turn after consumption; ends early if you take damage",
      "charges": "Unlimited, one use per short rest"
    },
    "priceReason": "The Glimmering Crumb's unpredictable effects and rare origin justify its high price in the market.",
    "priceOriginal": 150,
    "priceReviewedAt": "2026-07-23T21:28:31.384510+00:00",
    "aiReviewedAt": "2026-07-23T21:28:31.384510+00:00",
    "aiReviewVersion": 1
  }
};
