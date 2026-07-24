// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_015 = {
  "feywild_mirrored_talisman": {
    "id": "feywild_mirrored_talisman",
    "name": "Mirrored Talisman of Shifting Truths",
    "description": "The Mirrored Talisman of Shifting Truths is a shimmering bauble forged from Feywild glass, its surface etched with runes that whisper secrets of alternate realities. When worn, it grants fleeting glimpses into parallel worlds, each reality bending the laws of physics and logic in unique ways. Glimpsers report seeing impossible landscapes, paradoxical creatures, and fleeting visions of truths both comforting and terrifying. Each use leaves you disoriented, as if your mind has temporarily lost its grip on familiar certainties.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Alternate Reality Glimpse",
      "Temporal Disorientation"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Alternate Reality Glimpse",
        "rules": "When activated as a bonus action, the talisman grants you the ability to briefly perceive an alternate reality within a 10-foot radius. This lasts for 30 seconds and can be used once per short or long rest. While in this state, creatures and objects appear altered by the rules of that particular reality. You have advantage on Wisdom (Perception) checks made to notice hidden paths or magical anomalies."
      },
      {
        "title": "Temporal Disorientation",
        "rules": "After using the talisman, you are disoriented for 1 minute. During this time, you have disadvantage on all saving throws and ability checks. A successful DC 15 Constitution save ends this effect early."
      }
    ],
    "levelRequirementReason": "Requires a minimum of three levels to wield the talisman's reality-bending power.",
    "vendorReason": "The Feywild merchants are known for their connection to otherworldly artifacts, including this talisman that bridges different dimensions.",
    "shippingDetail": "The talisman is carefully packed and shipped via a secret route through the Feywild, ensuring its safe arrival.",
    "usage": {
      "activation": "Bonus action",
      "duration": "30 seconds",
      "endsWhen": "Ends when you lose consciousness or take damage; can be used once per short or long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The talisman's rarity and the risk involved in its acquisition justify this price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:19:53.788076+00:00",
    "aiReviewedAt": "2026-07-22T05:19:53.788076+00:00",
    "aiReviewVersion": 1
  },
  "feywild_mist_court_glove": {
    "id": "feywild_mist_court_glove",
    "name": "Mist Court Glove",
    "description": "The Mist Court Glove, crafted from the very threads of Feywild, is a delicate, ethereal glove that whispers secrets of the Veil between worlds to its wearer. It grants the ability to phase into the mist for brief moments, allowing one to slip through tight spaces or deceive with ease. The wearer's movements become as fluid and secretive as the mists themselves, granting immunity to time-based traps for a short while.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌿",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Phase into Veil",
      "Immunity to Time-Based Traps"
    ],
    "vendor": "feywild",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Phase into Veil",
        "rules": "The wearer can briefly phase through the veil between worlds, allowing them to slip into tight spaces or use Acrobatics checks without provoking opportunity attacks. This effect lasts for up to 1d6 seconds and can be used once per round."
      },
      {
        "title": "Immunity to Time-Based Traps",
        "rules": "For one round after activation, the wearer gains immunity to time-based traps and effects that rely on precise timing or quick reflexes. This includes puzzles, snares, and any trap with a time-sensitive component."
      }
    ],
    "levelRequirementReason": "The delicate balance of Fey magic within the glove requires a level 7 character to wield it effectively.",
    "vendorReason": "Feywild is known for its intricate crafting and magical artifacts, making them the perfect vendors for items that manipulate the Veil between worlds.",
    "shippingDetail": "The Void Drifter Relay ensures timely delivery of magical goods from Feywild to anywhere in the world.",
    "usage": {
      "activation": "Action (once per round)",
      "duration": "Up to 1d6 seconds",
      "endsWhen": "Ends when the round ends or the character provokes an opportunity attack",
      "charges": "Unlimited"
    },
    "priceReason": "The delicate craftsmanship and Feywild's connection to the Veil justify this balanced price.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T05:19:52.720667+00:00",
    "aiReviewedAt": "2026-07-22T05:19:52.720667+00:00",
    "aiReviewVersion": 1
  },
  "feywild_mist_wisp_talisman": {
    "id": "feywild_mist_wisp_talisman",
    "name": "Mist Wisp Talisman",
    "description": "The Mist Wisp Talisman gleams with an ethereal light, its surface etched with ancient runes that hum softly when touched. This shimmering amulet can transport you to moments where time bends and echoes, whispering tales of the Feywild’s past while granting a fleeting moment of rerolling your dice in combat. The past and future intertwine as you step into this looped reality, offering brief respite from the relentless march of time.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Time Echo",
      "Echoing Lore"
    ],
    "vendor": "feywild",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Time Echo",
        "rules": "When used in combat, activate as a bonus action. You gain a 30% chance to reroll a single damage roll or spell effect once per short rest."
      },
      {
        "title": "Echoing Lore",
        "rules": "Upon touching the talisman, you hear a brief whisper of forgotten fey history. This effect can be triggered as a bonus action and provides no additional benefits; it is purely for narrative purpose only."
      }
    ],
    "levelRequirementReason": "Requires character level 5 to harness its time-bending capabilities effectively.",
    "vendorReason": "The talisman's origin in the Feywild makes it a fitting item for the Feywild vendor, who specializes in such whimsical yet powerful artifacts.",
    "shippingDetail": "Delivered by spectral couriers known to weave through the Feywild's mists, ensuring timely delivery of this delicate artifact.",
    "usage": {
      "activation": "Bonus action or reaction (for Time Echo)",
      "duration": "Instantaneous effect",
      "endsWhen": "Expends a use upon activation",
      "charges": "Recharges on a long rest"
    },
    "priceReason": "The talisman's unique ability to manipulate time and provide narrative lore, combined with its rarity in the Feywild, justifies this price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:19:49.171906+00:00",
    "aiReviewedAt": "2026-07-22T05:19:49.171906+00:00",
    "aiReviewVersion": 1
  },
  "feywild_mist_woven_glove": {
    "id": "feywild_mist_woven_glove",
    "name": "Mist Woven Glove of Chrono-Dance",
    "description": "The Mist Woven Glove of Chrono-Dance is a delicate, ethereal glove made from threads spun by fey creatures. Its fingers shimmer with the light of the Feywild, and its wearer can manipulate time in subtle ways. By making specific gestures, the glove allows the user to speed up or delay time for brief moments, perfect for evading danger or gaining an advantage in combat. However, overuse may cause a temporal stutter, where time seems to freeze momentarily.",
    "category": "equipment",
    "price": 1000,
    "icon": "🖤",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Speed Time",
      "Delay Time"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Speed Time",
        "rules": "The wearer can use this action to speed up the flow of time for themselves and all creatures within 5 feet. This effect lasts for 3 seconds, during which time flows at twice its normal pace for the target(s). No save is required; however, overuse may cause a temporal stutter."
      },
      {
        "title": "Delay Time",
        "rules": "This action allows the wearer to delay time around them by 10 feet in all directions. For 3 seconds, everything within this area moves at half speed. No save is required; however, overuse may cause a temporal stutter."
      }
    ],
    "levelRequirementReason": "This level requirement ensures the wearer can handle the delicate and powerful manipulation of time without causing catastrophic effects.",
    "vendorReason": "The Feywild is home to the artisans who craft these gloves, as they are deeply attuned to the natural magic of the place.",
    "shippingDetail": "Shipped via Lakitu Drones, known for their swift and reliable deliveries through the Feywild's complex terrain.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect lasting 3 seconds",
      "endsWhen": "The duration ends when the effect is used up or the wearer stops concentrating on it.",
      "charges": "Unlimited, but overuse may cause a temporal stutter."
    },
    "priceReason": "This price reflects the rare materials and delicate craftsmanship required to create such an item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:19:37.355255+00:00",
    "aiReviewedAt": "2026-07-22T05:19:37.355255+00:00",
    "aiReviewVersion": 1
  },
  "feywild_mistborn_amber": {
    "id": "feywild_mistborn_amber",
    "name": "Mistborn Amber",
    "description": "Mistborn Amber glows faintly, its surface a fractured mosaic of ancient magic and time. This relic warps reality within a 10-foot radius, briefly halting the flow of time for a fleeting second. The air around it crackles with an otherworldly charge as minor tremors ripple through the fabric of existence upon each use. If wielded too often, the amber may shatter into dust, its power consumed by the very magic it commands.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporal Distortion",
      "Reality Tremor"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "The wielder can temporarily halt time for a creature or object within a 10-foot radius. This effect lasts for 1 second and requires an action to activate. The target must make a Dexterity saving throw (DC 14) or be affected by the time distortion, unable to take actions during that time."
      },
      {
        "title": "Reality Tremor",
        "rules": "Upon activation, a minor ripple in reality occurs within a 10-foot radius. This creates visible distortions and audible popping sounds. Creatures within this area must succeed on a Dexterity saving throw (DC 13) or be knocked prone."
      }
    ],
    "levelRequirementReason": "This relic requires significant magical aptitude to wield effectively, necessitating at least 5th level to control its unpredictable power.",
    "vendorReason": "The Feywild merchants specialize in arcane artifacts that bridge the gap between the mortal and fey realms, making Mistborn Amber a fitting addition to their inventory.",
    "shippingDetail": "Delivered swiftly via Lakitu's enchanted drones, ensuring the relic arrives intact and potent.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect lasting 1 second",
      "endsWhen": "The effect ends when its duration expires or the wielder is affected by another time-manipulating effect.",
      "charges": "3 uses per long rest"
    },
    "priceReason": "The rarity and unpredictable nature of Mistborn Amber justify its high price, as it represents a unique fusion of ancient magic and temporal distortion.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:29:55.141746+00:00",
    "aiReviewedAt": "2026-07-22T19:29:55.141746+00:00",
    "aiReviewVersion": 1
  },
  "feywild_mistborn_mirrors": {
    "id": "feywild_mistborn_mirrors",
    "name": "Mistborn Mirrors of Shifting Echoes",
    "description": "The Mistborn Mirrors of Shifting Echoes are crafted from the glass of ancient Feywild rivers, their surfaces etched with runes that shimmer and shift like wild magic itself. These mirrors not only reflect your truest form during moments of magical flux but also warp reality, trapping foes in a 10-second loop where time seems to repeat. Ideal for those navigating the capricious realms of Fey courts or facing the unpredictable power surges of wild magic.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reflects Truest Form",
      "Traps Enemies in Time Loops"
    ],
    "vendor": "feywild",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Reflect Truest Form",
        "rules": "When activated, these mirrors reveal your true magical form during a moment of wild magic activation. This effect grants +2 to any wild magic roll made within the Feywild or similar realms and lasts until the start of your next turn."
      },
      {
        "title": "Time Loop Trap",
        "rules": "Activating the mirror can trap an enemy in a 10-second time loop where they are unable to take actions. The target must succeed on a DC 15 Dexterity saving throw or be trapped for this duration, during which time their movement is restricted."
      }
    ],
    "levelRequirementReason": "These mirrors require a certain understanding of magical forces and the Feywild's capricious nature.",
    "vendorReason": "The Feywild is home to artisans who can craft items that harmonize with its mystical essence, such as these mirrors.",
    "shippingDetail": "Ships via Pipe Express, known for its reliable delivery within the Feywild's complex geography.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The target successfully saves against the Time Loop effect or the user takes an action on their turn.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, these mirrors are crafted from rare materials and require a deep understanding of Feywild magic.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:20:21.442988+00:00",
    "aiReviewedAt": "2026-07-22T05:20:21.442988+00:00",
    "aiReviewVersion": 1
  },
  "feywild_mistbound_scepter": {
    "id": "feywild_mistbound_scepter",
    "name": "Mistbound Scepter",
    "description": "The Mistbound Scepter is a staff of shifting mist and forgotten Feywild court rituals. Its core glows with an ethereal light, and when raised, it weaves a localized 'Fey loop' — a 15-meter radius where time slows and magic flows unchecked. Within this realm, all enemies move at half speed and take 20% more damage from magical attacks, while allies gain +10% to hit with their next attack, triggering a time loop effect that repositions the target for them.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Fey Loop",
      "Time Distortion"
    ],
    "vendor": "feywild",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Fey Loop",
        "rules": "Activates as an action within a 15-meter radius, creating a localized area where enemies are reduced to half speed and take 20% more damage from magic. Ends when the caster retracts the scepter or after one minute."
      },
      {
        "title": "Time Distortion",
        "rules": "Allies within the Fey loop gain +10% chance on their next attack roll, triggering a time distortion effect that repositions the target for them. This effect lasts until the end of the ally's next turn and can only occur once per round."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to wield due to its complex Feywild magic.",
    "vendorReason": "The Scepter's origin in the Feywild makes it a natural fit for the Feywild vendor, who specializes in such artifacts.",
    "shippingDetail": "Ships via the Void Drifter Relay within 2 weeks of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "One minute or until retracted",
      "endsWhen": "Retracted by the caster or after one minute",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to reflect its unique Feywild magic and localized effects.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T05:20:07.714929+00:00",
    "aiReviewedAt": "2026-07-22T05:20:07.714929+00:00",
    "aiReviewVersion": 1
  },
  "feywild_moment_melt": {
    "id": "feywild_moment_melt",
    "name": "Moment Melt",
    "description": "A fragile vial sealed with a cork and imbued with Feywild essence. When shaken, Moment Melt dissolves temporal boundaries, allowing the user to drift through loops for brief moments — whether past, future, or parallel realities. It can be used to escape perilous situations by stepping into an alternate loop, but beware: in the courts of Faerie, your loop may be tied to a hidden quest that could change your fate.",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Temporal Drift",
      "Loop Escape"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporal Drift",
        "rules": "Activates as an action. The user becomes ethereal for 30 seconds, unable to take actions or move until the loop resets. This effect can be used once per long rest."
      },
      {
        "title": "Loop Escape",
        "rules": "May be used once per short rest to escape a dangerous situation by phasing into an alternate loop. The user must succeed on a DC 15 Dexterity saving throw or remain in the loop for another round."
      }
    ],
    "levelRequirementReason": "Requires basic understanding of temporal mechanics and control over one's actions.",
    "vendorReason": "The Feywild is a realm where time flows differently, making the shopkeepers there familiar with such items.",
    "shippingDetail": "Carefully packed in a padded envelope to prevent breakage during transit.",
    "usage": {
      "activation": "Action",
      "duration": "30 seconds or until loop resets",
      "endsWhen": "Loop ends, user fails save throw, or used again after rest",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced with a lower price to reflect its limited charges and duration.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T05:20:05.992750+00:00",
    "aiReviewedAt": "2026-07-22T05:20:05.992750+00:00",
    "aiReviewVersion": 1
  },
  "feywild_moment_mender": {
    "id": "feywild_moment_mender",
    "name": "Moment Mender Pendant",
    "description": "The Moment Mender Pendant hangs like a shimmering prism, catching light in hues of twilight and starlight. Crafted from Feywild verdigris, it is said to be imbued with the essence of time itself. When worn, it can heal minor wounds inflicted by time loops and restore temporary hit points if the wearer steps within a Feywild zone. However, each use risks a fleeting memory loss, leaving the user confused or momentarily forgetful.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Heals Time Loop Wounds",
      "Restores Feywild Temporary HP"
    ],
    "vendor": "feywild",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Heals Time Loop Wounds",
        "rules": "Activates as an action. Restores 1d6 hit points and grants a +2 bonus to saving throws against time loop effects for the next hour. The effect ends if the wearer is exposed to a time paradox or if they use their reaction on another threat. Only usable once per day."
      },
      {
        "title": "Restores Feywild Temporary HP",
        "rules": "Activates as an action when within a Feywild zone. Restores 1d4 temporary hit points and grants advantage on Perception checks for the next hour. The effect ends if the wearer leaves the Feywild or if they use their reaction to avoid a hazard. Only usable once per week."
      }
    ],
    "levelRequirementReason": "Requires at least third-level spellcasting ability to effectively manage time loop risks.",
    "vendorReason": "The pendant is crafted by the Feywild, who are known for their mastery of time and nature's magic.",
    "shippingDetail": "Ships via Pipe Express within a week; delivery includes a special parcel marked with the symbol of the Feywild.",
    "usage": {
      "activation": "Activates as an action or reaction when exposed to time loop effects or hazards in Feywild zones.",
      "duration": "One hour per use, ends upon exposure to a time paradox or hazard.",
      "endsWhen": "Exhausted after one use per day/week; no recharge required.",
      "charges": "Unlimited uses per week."
    },
    "priceReason": "The pendant's unique properties and limited daily/weekly usage justify its moderate cost in XP.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T05:20:37.172437+00:00",
    "aiReviewedAt": "2026-07-22T05:20:37.172437+00:00",
    "aiReviewVersion": 1
  },
  "feywild_murmur_mantle": {
    "id": "feywild_murmur_mantle",
    "name": "Murmur Mantle",
    "description": "The Murmur Mantle is a cloak woven from the sighs of lost fey, its fabric shimmering with ethereal light. It allows the wearer to blend into shifting realities and speak in the tongues of time, making it an invaluable tool for those navigating strange timelines without drawing unwanted attention. When worn within a time loop, the mantle grants temporary protection, reducing the risk of being caught in the temporal feedback indefinitely.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporal Camouflage",
      "Whispering Tongues"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Camouflage",
        "rules": "The wearer has advantage on Dexterity (Stealth) checks to avoid time loop effects while wearing the mantle. This effect lasts until the start of your next turn after you enter a known time loop."
      },
      {
        "title": "Whispering Tongues",
        "rules": "The wearer can speak in Fey languages for 1 minute per use, allowing them to communicate with fey creatures and ancient spirits. The mantle grants proficiency in all Fey languages while this effect is active."
      }
    ],
    "levelRequirementReason": "Requires a moderate understanding of time manipulation and the Feywild to fully appreciate the mantle's effects.",
    "vendorReason": "The mantle’s origins in the Feywild ensure its authenticity and effectiveness, as it is crafted by fey artisans who understand the delicate balance of time and reality.",
    "shippingDetail": "The cloak arrives within a week, delivered discreetly to avoid any temporal disturbances during transit.",
    "usage": {
      "activation": "As an action",
      "duration": "1 minute per use",
      "endsWhen": "The start of your next turn after entering a known time loop or when the effect is expended for the day",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "Balanced to offer unique utility without overshadowing other magical items.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:20:22.823560+00:00",
    "aiReviewedAt": "2026-07-22T05:20:22.823560+00:00",
    "aiReviewVersion": 1
  },
  "feywild_murmur_of_the_fey": {
    "id": "feywild_murmur_of_the_fey",
    "name": "Murmur of the Fey",
    "description": "The Murmur of the Fey is a delicate silver flute adorned with shimmering runes that whisper secrets of the Feywild. When played near a Fey court, it can summon fleeting, non-combatant allies who dance and play in harmony for one round. Its melodies also disrupt time loops by creating a momentary glitch, preventing further loop progression until the music ceases. Occasionally, the flute may summon a past self of a Fey creature, whose unpredictable behavior can be either helpful or dangerous.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Summons Fey allies",
      "Disrupts time loops"
    ],
    "vendor": "feywild",
    "shippedBy": "Fey Wind Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Summon Fey Allies",
        "rules": "When played near a Fey court, the Murmur of the Fey summons one non-combatant Fey ally for one round. The Fey ally can perform minor tasks or provide music but cannot engage in combat. This effect has no save DC and is usable once per long rest."
      },
      {
        "title": "Disrupt Time Loops",
        "rules": "Playing the flute near a time loop creates a glitch that prevents further progression of the loop for one round. The player must be within 30 feet of the loop to activate this effect, which has no save DC and can only be used once every 24 hours."
      }
    ],
    "levelRequirementReason": "Beginners can learn to use the flute's simple melody without needing extensive experience.",
    "vendorReason": "The Feywild vendor is well-trusted for its knowledge of Fey artifacts and their unique properties.",
    "shippingDetail": "Ships via Fey Wind Courier, which ensures the flute arrives in perfect condition.",
    "usage": {
      "activation": "Playing the Murmur of the Fey as a bonus action",
      "duration": "One round for summoning allies; one round to disrupt time loops",
      "endsWhen": "The music ceases or loop is resolved",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price considering the item's unique abilities and rarity.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:20:35.977647+00:00",
    "aiReviewedAt": "2026-07-22T05:20:35.977647+00:00",
    "aiReviewVersion": 1
  },
  "feywild_murmur_ring": {
    "id": "feywild_murmur_ring",
    "name": "Murmur Ring of the Whispering Courts",
    "description": "The Murmur Ring of the Whispering Courts feels like a delicate, silver band etched with the trails of Feywild's shifting mists. When worn, it allows you to hear the hidden whispers of the fey, but these thoughts are fickle—sometimes they're memories from another life or false echoes of their true nature. The ring can cause confusion when used repeatedly in a looped timeline, potentially blurring the line between reality and illusion.",
    "price": 1000,
    "icon": "🎭",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Mind's Echo",
      "Memory Loop"
    ],
    "vendor": "feywild",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Mind's Echo",
        "rules": "When you activate the ring as an action, you gain insight into a Fey creature’s mind for 1 round. Roll 1d6: On a result of 1–3, you perceive the truth; on a result of 4–6, you receive a distorted memory."
      },
      {
        "title": "Memory Loop",
        "rules": "After using the ring, there is a 25% chance that the wearer becomes trapped in a memory loop for 10 minutes. During this time, they relive a moment from their own past or another being's life. The wearer can attempt a DC 13 Wisdom saving throw to end the effect early."
      }
    ],
    "levelRequirementReason": "This ring requires a minimum level of 5 due to its complex magic and the risks it poses.",
    "vendorReason": "The Feywild region is rich with mystical artifacts, and this ring is one of their more enigmatic creations.",
    "shippingDetail": "Ships via Boo Spectral Mail, known for its reliability in delivering magic items from the Feywild.",
    "usage": {
      "activation": "Activate as an action.",
      "duration": "1 round per use.",
      "endsWhen": "The effect ends when the duration expires or the wearer successfully saves against the memory loop.",
      "charges": "2 uses before reverting to inert."
    },
    "priceReason": "The ring's rarity and unique magical properties justify its price of 1000 XP.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T05:20:50.089496+00:00",
    "aiReviewedAt": "2026-07-22T05:20:50.089496+00:00",
    "aiReviewVersion": 1
  },
  "feywild_murmuring_mist": {
    "id": "feywild_murmuring_mist",
    "name": "Murmuring Mist Vial",
    "description": "A vial encased in a delicate glass that hums faintly, its surface flecked with swirling mist. The Murmuring Mist Vial is said to have been crafted from the very essence of the Feywild, where it captures fleeting memories of ancient courts and time loops. When shaken, the vial releases its ethereal whisper, offering a cryptic riddle or perilous clue that can either guide you toward a hidden path or lead you astray into a treacherous memory loop.",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Whispers a cryptic riddle or truth",
      "Reveals a hidden Fey court or time-looped event"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Riddle or Truth",
        "rules": "When shaken, the vial releases a whisper that is either a riddle or a truth. The DM decides whether it's a lie or not. If successful on a DC 15 Intelligence check, the player gains insight into a hidden path; failure leads to a false clue."
      },
      {
        "title": "Reveal Hidden Event",
        "rules": "Shaking the vial reveals either a Fey court or a time-looped event. The DM determines the nature of the event. This effect lasts for 1d4 rounds and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The Murmuring Mist Vial requires at least fifth level to wield, as its mystical properties are too potent for lower-level characters.",
    "vendorReason": "Feywild is the only vendor known to have access to such arcane artifacts from the Feywild plane.",
    "shippingDetail": "The vial must be shipped in a magically insulated container and delivered within 48 hours of purchase.",
    "usage": {
      "activation": "Shake the vial as an action.",
      "duration": "Instantaneous, but can only be used once per long rest.",
      "endsWhen": "Exhausted after one use or when destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "The Murmuring Mist Vial is priced at 1000 XP, reflecting its rarity and the arcane power it contains.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:21:37.296751+00:00",
    "aiReviewedAt": "2026-07-22T05:21:37.296751+00:00",
    "aiReviewVersion": 1
  },
  "feywild_mushroom_regency_key": {
    "id": "feywild_mushroom_regency_key",
    "name": "Court of Whispers Key",
    "description": "The Court of Whispers Key is a delicate, blood-red key crafted from the very roots of a Feywild mushroom. It opens ancient, hidden chambers within the maze-like forests and allows you to commune with trickster spirits who have forgotten their own names. Each use risks rewriting your memories, but it grants +2 to Diplomacy checks against fey creatures and provides temporary respite from the maze’s illusions for 1 hour.",
    "price": 1000,
    "icon": "🧭",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Commune with Trickster Spirits",
      "Memory Risk on Use"
    ],
    "vendor": "feywild",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Commune with Trickster Spirits",
        "rules": "As an action, you can use this key to speak with a trickster spirit within the Feywild. The spirit provides useful information about hidden chambers or illusions in the maze but may mislead you on purpose. You have advantage on Diplomacy checks against fey creatures for 1 hour."
      },
      {
        "title": "Memory Risk on Use",
        "rules": "There is a 5% chance (DC 14 Wisdom saving throw) that each use of the key will rewrite your memories, causing you to forget recent events. This effect ends after 24 hours or when you successfully save against it."
      }
    ],
    "levelRequirementReason": "This key requires a minimum level of 6 due to its Feywild magic and the risks involved in using it.",
    "vendorReason": "Feywild, being the source of this relic, is responsible for its distribution among adventurers seeking access to hidden knowledge within their realm.",
    "shippingDetail": "The key must be delivered by a Rakasha spirit courier who can navigate the Feywild's illusions and ensure safe passage.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour or until used against you",
      "endsWhen": "You successfully save against memory rewrite, or after 24 hours",
      "charges": "Unlimited"
    },
    "priceReason": "The key's balanced price reflects its Feywild origin and the risks involved in using it, making it a sought-after but not overpowered item.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T05:20:54.443118+00:00",
    "aiReviewedAt": "2026-07-22T05:20:54.443118+00:00",
    "aiReviewVersion": 1
  },
  "feywild_portal_key": {
    "id": "feywild_portal_key",
    "name": "Feywild Portal Key (Magical)",
    "description": "The Feywild Portal Key is a delicate, silver key etched with intricate runes that glow faintly with an ethereal light. Crafted by Archfey Envoys from the very essence of the Feywild, it opens portals to a realm where magic flows freely and whimsy reigns supreme. Each use carves a thread of reality into your world, allowing you to step into the enchanting heart of the Feywild for brief respite or adventure.",
    "price": 1000,
    "icon": "🔑",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Opens stable Feywild portals",
      "Grants fey charm aura"
    ],
    "vendor": "enchanted_grove",
    "shippedBy": "Sprite Delivery",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Feywild Portal",
        "rules": "Activates as a bonus action. Creates a stable portal to the Feywild that lasts for 10 minutes per use. The portal is stable and can be used multiple times within the duration, but it expends one use each time you step through. The portal vanishes if not used before its expiration."
      },
      {
        "title": "Fey Charm Aura",
        "rules": "While attuned to the key, you are surrounded by an aura of charm that lasts until the key is no longer held or the aura is dispelled as a reaction. Creatures within 30 feet have disadvantage on saving throws against being charmed."
      }
    ],
    "levelRequirementReason": "Requires high-level spellcasting to safely navigate and understand the whimsical nature of the Feywild.",
    "vendorReason": "Enchanted Grove specializes in magical artifacts that bridge otherworldly realms, including keys designed for such passages.",
    "shippingDetail": "Delivered by a mischievous sprite, the key arrives wrapped in a shimmering veil of mist, ensuring secrecy and safety during transit.",
    "usage": {
      "activation": "Bonus action to open a portal or as a reaction to dispel the Fey Charm Aura.",
      "duration": "Instantaneous creation of a stable portal; aura lasts until key is no longer held or dispelled.",
      "endsWhen": "Portal expires after 10 minutes, or aura is dispelled by reaction.",
      "charges": "5 uses before depletion"
    },
    "priceReason": "The key's rarity and the magic it commands justify its modest price in terms of XP.",
    "priceOriginal": 490000,
    "priceReviewedAt": "2026-07-22T05:21:21.379935+00:00",
    "aiReviewedAt": "2026-07-22T05:21:21.379935+00:00",
    "aiReviewVersion": 1
  },
  "feywild_rain_of_thoughts": {
    "id": "feywild_rain_of_thoughts",
    "name": "Rain of Thoughts Unbound",
    "description": "When shaken, the vial of Rain of Thoughts Unbound unleashes a tempest of whispers from the Feywild’s ethereal mind. Each thought is a fleeting spark that may grant a chance to unlock hidden knowledge, trigger a memory loop, or cast a spell in reverse. The storm can be used to escape fey traps, interrogate foes, or summon forgotten allies, but beware—each use risks a momentary loss of time as the vial’s power warps reality around you.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Summons 3d6 fleeting thoughts per use",
      "Risk of losing track of time"
    ],
    "vendor": "Feywild",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Thought Summons",
        "rules": "Activates on a bonus action, releasing 3d6 thoughts that each have a random effect. Each thought grants one of the following: +1d4 to an ability check, triggers a memory loop, or casts a reversed spell (as per the spellcaster’s choice). The user may choose which thought to activate when they see its result."
      },
      {
        "title": "Temporal Distortion",
        "rules": "There is a 5% chance each use that the user loses track of time for 1d4 rounds. During this time, the user cannot take actions or reactions and is immune to attacks. The duration ends when the effect resolves."
      }
    ],
    "levelRequirementReason": "Requires at least third level to handle the vial's unpredictable temporal effects.",
    "vendorReason": "The Feywild have a special connection to the item’s origins and can supply it.",
    "shippingDetail": "Ships via Pipe Express, with delivery taking three days from stock availability.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous for each thought summoned",
      "endsWhen": "Effect resolves when the chosen thought is used or the duration ends due to a temporal distortion",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its Feywild origins and unpredictable effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:29:57.356658+00:00",
    "aiReviewedAt": "2026-07-22T19:29:57.356658+00:00",
    "aiReviewVersion": 1
  },
  "feywild_royal_invitation": {
    "id": "feywild_royal_invitation",
    "name": "Feywild Royal Invitation (Court of Stars)",
    "description": "The Feywild Royal Invitation (Court of Stars) is a shimmering, gilded letter sealed with the Court’s sigil. Crafted by Titania's Scribe from starlight and silver, it grants its bearer access to the Summer Court’s most exclusive events for one year. Upon acceptance, the sender gains Feywild Noble status, enhancing their social standing in the fae realm. The invitation itself is a conduit to the Court of Stars’ political intrigue, allowing the holder to influence fey alliances.",
    "price": 1000,
    "icon": "🎭",
    "stock": 4,
    "rarity": "legendary",
    "effects": [
      "Feywild Noble Status",
      "Access to Court Intrigue"
    ],
    "vendor": "fey_emissary",
    "shippedBy": "Pixie Messenger",
    "levelRequirement": 16,
    "factionBonus": {
      "feyReputation": 150
    },
    "effectDetails": [
      {
        "title": "Feywild Noble Status",
        "rules": "Upon activation, the recipient gains Feywild Noble status for one year. This bestows a +2 bonus to Charisma (Persuasion) checks and a +1 bonus to AC while in the Feywild. The effect ends when the year expires."
      },
      {
        "title": "Access to Court Intrigue",
        "rules": "Activates as an action, granting the bearer insight into upcoming fey events and alliances for 10 days after acceptance. This allows the player to make a DC 15 Intelligence (Insight) check to gain advantage on Diplomacy checks related to fae affairs."
      }
    ],
    "levelRequirementReason": "Only those with significant experience in fey matters should be granted access to such an invitation.",
    "vendorReason": "The Fey Emissary is privy to the Court’s secrets and thus authorized to distribute these invitations.",
    "shippingDetail": "Delivered by a fleet of twinkling pixies, this invitation arrives with a week's delay due to its importance in fae society.",
    "usage": {
      "activation": "Activation as an action; one use per year.",
      "duration": "One year for Feywild Noble Status; insight into upcoming fey events and alliances lasts 10 days after activation.",
      "endsWhen": "The year passes, or the bearer is no longer in the Feywild.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect its value as a tool for gaining social influence and fae political knowledge.",
    "priceOriginal": 525000,
    "priceReviewedAt": "2026-07-22T05:21:10.827818+00:00",
    "aiReviewedAt": "2026-07-22T05:21:10.827818+00:00",
    "aiReviewVersion": 1
  },
  "feywild_scam_fey_wish_tome": {
    "id": "feywild_scam_fey_wish_tome",
    "name": "The Fey Wish Tome",
    "description": "The Fey Wish Tome is a cursed leather-bound tome with an ornate lock and a keyhole that seems to shimmer with fey magic. It whispers secrets of the Wildlands, but beware—those who misuse it are consumed by a lingering curse. The book requires attunement from a cursed toad, a token of its dark bargain. Though it appears to be a wish-granting tome, it merely echoes the whimsical desires of fey spirits and leaves the user bound in a perpetual dream.",
    "price": 1000,
    "icon": "📜",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Whispers to Fey Spirits",
      "Cursed Attunement"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whispers to Fey Spirits",
        "rules": "As an action, you can whisper a request into the tome. It echoes this wish to nearby fey spirits for 1 hour. If the spirit grants your wish, it takes on a form that resembles the spirit of the nearest creature within 30 feet of the tome's location."
      },
      {
        "title": "Cursed Attunement",
        "rules": "Upon attunement with this item, you are bound by a curse. The curse persists for 1d4 weeks unless you successfully make a DC 15 Wisdom saving throw at the start of each long rest. On a failed save, you lose one level and fall into a dream state."
      }
    ],
    "levelRequirementReason": "Requires basic understanding of fey magic to safely attune with its dark power.",
    "vendorReason": "The Cosmic Jesters, known for their mischievous antics, sell this cursed tome as a prank item.",
    "shippingDetail": "Ships within the Feywild only; delivery can take up to two weeks due to magical interference.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour",
      "endsWhen": "The spirit's form fades or if you make a failed Wisdom saving throw.",
      "charges": "Unlimited, but each use requires attunement."
    },
    "priceReason": "Reflects the cursed nature and limited utility of the item in practical play.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T05:21:25.903180+00:00",
    "aiReviewedAt": "2026-07-22T05:21:25.903180+00:00",
    "aiReviewVersion": 1
  },
  "feywild_scented_gaze": {
    "id": "feywild_scented_gaze",
    "name": "Scented Gaze of the Whispering Courts",
    "description": "The Scented Gaze of the Whispering Courts is a vial imbued with the essence of Feywild, its sweet aroma capable of piercing through the veils of illusion and revealing hidden enchantments. Upon inhalation, the user gains acute perception for magical truths, able to discern when magic has been used to deceive or conceal. The scent lingers in the air, a subtle reminder of the fey's watchful presence, and with it comes an unsettling 10% chance that a distant memory will be triggered, a fleeting echo of some past event.",
    "price": 1000,
    "icon": "🍷",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Pierce Through Illusions",
      "Reveal Enchanted Truths"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Pierce Through Illusions",
        "rules": "The user gains the ability to detect magical illusions within a range of up to 30 feet. This effect is active as long as the user remains in contact with the vial and inhales its scent. The user can use this ability once per short or long rest."
      },
      {
        "title": "Reveal Enchanted Truths",
        "rules": "Upon using the Scented Gaze, there is a 10% chance that a distant memory echo will be triggered. This effect randomly reveals an event from the user's past within the last year. The memory is fleeting and lasts for only one minute."
      }
    ],
    "levelRequirementReason": "This item's power is accessible to lower levels as it focuses on revealing hidden truths rather than overwhelming magical effects.",
    "vendorReason": "The Feywild vendors are the keepers of such arcane secrets and artifacts, having knowledge of their origins in the fey realms.",
    "shippingDetail": "Ships via Lakitu Drones' express courier service within a day's time from the Feywild.",
    "usage": {
      "activation": "Inhale the scent of the vial as an action.",
      "duration": "10 minutes, expiring with use or exhaustion.",
      "endsWhen": "The user's concentration is broken or upon expiration.",
      "charges": "Unlimited, but can only be used once per short or long rest."
    },
    "priceReason": "Balanced at a price reflecting its utility in revealing hidden truths and illusions without overpowered effects.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-22T05:21:52.686333+00:00",
    "aiReviewedAt": "2026-07-22T05:21:52.686333+00:00",
    "aiReviewVersion": 1
  },
  "feywild_scented_silence": {
    "id": "feywild_scented_silence",
    "name": "Scented Silence",
    "description": "A slender vial of distilled Feywild essence, Scented Silence captures a fleeting moment from the heart of the faerie realm. When inhaled, it induces a temporary state of suspended animation, allowing you to perceive time as it pauses around you. The user becomes a silent observer, unaffected by Fey court enchantments or time loops—a boon for those caught in eternal rituals or endless feasts. Use wisely—Fey may mistake you for a forgotten guest.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Suspended Perception",
      "Fey Court Immunity"
    ],
    "vendor": "feywild",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Suspended Perception",
        "rules": "When used, the user becomes a silent observer of their surroundings for up to 1 round per level. During this time, they are unaffected by any Fey court enchantments or time loops and can observe events as if time were suspended around them. The effect ends when the user completes their next action."
      },
      {
        "title": "Fey Court Immunity",
        "rules": "The user gains immunity to all saving throws against Fey court enchantments for 10 minutes after using Scented Silence. If used during a time loop, there is a 25% chance that the user will experience a minor 'memory echo' of events from before their use."
      }
    ],
    "levelRequirementReason": "Requires at least third-level spellcasting to fully appreciate and utilize Scented Silence without risk.",
    "vendorReason": "Feywild is the only vendor who can source the pure essence needed for such a powerful item, ensuring its authenticity.",
    "shippingDetail": "Ships via Pipe Express within the Feywild, arriving with the next moon phase.",
    "usage": {
      "activation": "A bonus action to inhale and activate the vial's contents.",
      "duration": "Up to 1 round per level.",
      "endsWhen": "The user completes their next action after activation.",
      "charges": "One use, recharged at dawn."
    },
    "priceReason": "The rarity and magical essence required for Scented Silence justify its price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:21:55.715730+00:00",
    "aiReviewedAt": "2026-07-22T05:21:55.715730+00:00",
    "aiReviewVersion": 1
  },
  "feywild_shadowfell_mirror": {
    "id": "feywild_shadowfell_mirror",
    "name": "Shadowfell Mirror",
    "description": "The Shadowfell Mirror, a fractured glass relic crafted from the very essence of the Shadowfell, distorts reality and reveals hidden truths. Its surface is etched with arcane runes that shimmer like dying embers, and when held before one’s visage, it reflects not only the image but also the true nature of the soul within. Those who gaze into its depths may see their darkest secrets or a fleeting glimpse of the Shadowfell's influence on their psyche.",
    "price": 1000,
    "icon": "🌑",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reflects True Nature",
      "Reveals Hidden Secrets"
    ],
    "vendor": "feywild",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "True Reflection",
        "rules": "When used as an action, this mirror reveals the true nature of the user’s soul. The user must make a Wisdom saving throw (DC 15). On a failed save, they become disoriented for 1 minute and lose their next turn."
      },
      {
        "title": "Shadowy Insight",
        "rules": "Once per day as a bonus action, this mirror can be used to reveal hidden secrets. It provides advantage on one Intelligence (Insight) check related to the Shadowfell or secret information."
      }
    ],
    "levelRequirementReason": "Crafted by Servants Cosmic, it requires a high level of arcane knowledge and discipline to wield.",
    "vendorReason": "Feywild maintains an extensive collection of rare magical artifacts and relics from the Shadowfell.",
    "shippingDetail": "Ships via Warp Whistle Transit, known for its swift deliveries through Feywild paths.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous (True Reflection), 1 hour per day (Shadowy Insight)",
      "endsWhen": "Used up to once per long rest (True Reflection), ends when expended (Shadowy Insight)",
      "charges": "Unlimited, but each use requires a short rest"
    },
    "priceReason": "Its rarity and unique properties justify its moderate price of 1000 XP.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T05:22:50.746611+00:00",
    "aiReviewedAt": "2026-07-22T05:22:50.746611+00:00",
    "aiReviewVersion": 1
  },
  "feywild_singularity_lens": {
    "id": "feywild_singularity_lens",
    "name": "Singularity Lens",
    "description": "The Singularity Lens is a fractured prism forged from Feywild glass, its facets shimmering with ethereal light and shadow. When held, time loops flicker like dying stars, revealing echoes of past and future within a single glance. The lens distorts reality in your vision, allowing you to perceive hidden truths within chaotic magic fields, but beware—its temporal distortions can harm nearby foes, causing minor damage as the fabric of space-time warps around them.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals hidden truths in chaotic magic",
      "Causes minor reality distortion"
    ],
    "vendor": "feywild",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Perceive Hidden Truths",
        "rules": "When you activate the lens, you gain advantage on perception checks related to chaotic magic for 1 minute. This effect ends if you are incapacitated or if another creature takes an action against you."
      },
      {
        "title": "Temporal Distortion",
        "rules": "The lens causes minor reality distortion when activated. Any creature within 5 feet of the wielder must make a DC 13 Dexterity saving throw or take 1d4 force damage and be knocked prone. This effect ends after 1 round."
      }
    ],
    "levelRequirementReason": "The lens's power requires a basic understanding of chaotic magic to wield effectively.",
    "vendorReason": "The Singularity Lens is crafted in the enigmatic realms of the Feywild, where such artifacts are revered and traded by Feywild vendors like no other.",
    "shippingDetail": "Shipped via the Void Drifter Relay, this lens arrives with a delay of one day due to its delicate nature.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until incapacitated",
      "endsWhen": "You are incapacitated or another creature takes an action against you",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from Feywild glass and imbued with chaotic magic, this lens is a rare and valuable tool for those seeking to glimpse the hidden truths of reality.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:22:25.137473+00:00",
    "aiReviewedAt": "2026-07-22T05:22:25.137473+00:00",
    "aiReviewVersion": 1
  },
  "feywild_singularity_ring": {
    "id": "feywild_singularity_ring",
    "name": "Singularity Ring of the Unbound Court",
    "description": "The Singularity Ring of the Unbound Court is a shimmering ring that pulses with the rhythm of the Feywild. Its surface weaves with intricate patterns, each one representing a different court's essence. Wearing this ring allows you to momentarily enter a state where all actions are interpreted through the lens of a chosen court, granting +1d6 to your rolls and introducing whimsical, unpredictable outcomes that align with the court’s theme.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Courtly Distortion",
      "Random Fey Event"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Courtly Distortion",
        "rules": "As a bonus action, you enter a court-themed state for 1 round. This grants you advantage on all ability checks and saving throws. Additionally, any failure results in the acquisition of a new, whimsical Feywild ability related to the court's theme."
      },
      {
        "title": "Random Fey Event",
        "rules": "If worn during a time loop, there is a 50% chance that a random Feywild event occurs. The event could range from gaining a beneficial effect like 'Moonlit Lore' or 'Thorn Dance,' to facing an unexpected challenge such as a sudden transformation or a mischievous trick."
      }
    ],
    "levelRequirementReason": "The ring's power is accessible early on, allowing players to experiment with its effects without stringent level restrictions.",
    "vendorReason": "This vendor specializes in artifacts and trinkets of the Feywild, making it logical that they sell this ring.",
    "shippingDetail": "Delivered with a whimsical charm that ensures the recipient is transported to a realm of enchantment.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 round",
      "endsWhen": "The effect ends when you leave the state or are incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "The ring's unpredictable effects and early access make it a valuable, yet balanced, investment for players.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:22:12.917718+00:00",
    "aiReviewedAt": "2026-07-22T05:22:12.917718+00:00",
    "aiReviewVersion": 1
  },
  "feywild_singularity_tome": {
    "id": "feywild_singularity_tome",
    "name": "Singularity Tome",
    "description": "The Singularity Tome is a leather-bound volume with pages of shimmering ink that twist and shift as you read. Its arcane symbols glow faintly, hinting at the chaotic forces it commands. Reading a page sends you into a planar echo, where time loops and events repeat. The risk of unraveling your memories grows with each turn, but the book also grants you a +15% chance to succeed on wild magic rolls.",
    "price": 1000,
    "icon": "📖",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Planar Echo",
      "Memory Risk"
    ],
    "vendor": "feywild",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Planar Echo",
        "rules": "As an action, read one page of the tome. You enter a planar echo where time loops; all events repeat identically until you end it by using another action to read a different page or the duration expires after 1 minute."
      },
      {
        "title": "Memory Risk",
        "rules": "Each page read has a cumulative chance of 5% that your last 10 seconds of memory are erased. This risk increases with each reading, starting at 5% for the first page and increasing by 5% for each subsequent page."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to control and understand chaotic magic.",
    "vendorReason": "The tome's origin in the Feywild makes it a natural fit for this vendor.",
    "shippingDetail": "Delivered by spectral couriers known to occasionally misplace packages, delaying delivery by up to one week.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until another page is read",
      "endsWhen": "Another page is read or after 1 minute",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price for a rare, potentially dangerous item with limited use and high risk.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:22:22.855877+00:00",
    "aiReviewedAt": "2026-07-22T05:22:22.855877+00:00",
    "aiReviewVersion": 1
  },
  "feywild_soul_binder_amulet": {
    "id": "feywild_soul_binder_amulet",
    "name": "Amulet of the Shattered Court",
    "description": "This amulet of the Shattered Court is a delicate, ethereal piece forged from Feywild essence and bound in a loop of time. It captures the soul of a fey being, allowing its wearer to manipulate the timeline within the loop for precisely one day. Should the loop be disrupted, it may return the captured soul to its original state or reanimate the wearer as a Fey echo, a wraith-like version of itself entwined with the amulet’s power.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Manipulate Time Loop Timeline (24 hours)",
      "Soul Binding (Temporary)"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Manipulate Time Loop Timeline",
        "rules": "Activates as a bonus action. The wearer can manipulate the timeline within the loop for up to 24 hours, altering events and outcomes as desired. The loop is vulnerable to being disrupted or destroyed by any force capable of affecting time itself."
      },
      {
        "title": "Soul Binding (Temporary)",
        "rules": "The amulet captures a fey soul into an eternal loop. If the loop is breached or the wearer's actions are deemed too dangerous, the captured soul may return to its original state, potentially reanimating the wearer as a Fey echo—a wraith-like creature bound to the amulet’s fate."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to wield safely and understand the risks involved.",
    "vendorReason": "Feywild, a master of Fey artifacts, curates this powerful yet dangerous item for those who dare to manipulate time in the Feywild.",
    "shippingDetail": "Delivered by Lakitu drones, ensuring swift and secure transport through the Feywild’s ethereal realms.",
    "usage": {
      "activation": "Bonus action to activate; can be used once per long rest.",
      "duration": "24 hours for each activation.",
      "endsWhen": "Disruption of the loop by a force affecting time, or if the wearer's actions are deemed too dangerous by the DM.",
      "charges": "Unlimited uses, but only one effect can be active at a time."
    },
    "priceReason": "The price reflects the rare material and the immense power contained within this amulet, balancing its potential for both boon and bane.",
    "priceOriginal": 2900,
    "priceReviewedAt": "2026-07-22T05:22:44.224921+00:00",
    "aiReviewedAt": "2026-07-22T05:22:44.224921+00:00",
    "aiReviewVersion": 1
  },
  "feywild_soul_tether": {
    "id": "feywild_soul_tether",
    "name": "Soul Tether to the Wild",
    "description": "The Soul Tether to the Wild is a shimmering chain made from the ethereal tears of fey creatures, forged in the twilight realms. It allows you to commune with a chosen court for an hour, granting +2 to Will saves against their enchantments—but beware, as your allegiance can shift at the capricious whims of the fae. Should the court's mood turn, it may drag you into its wild embrace, compelling you to dance in madness and lose 1d6 hit points.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Commune with a Fey Court",
      "Will Save Bonus"
    ],
    "vendor": "feywild",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Commune with a Fey Court",
        "rules": "You gain +2 to all saving throws against enchantment magic from the chosen fey court. The duration is for one hour, and it can be activated as an action."
      },
      {
        "title": "Mood Shift Penalty",
        "rules": "If the fey court's mood changes during your session, you are teleported to its center and must succeed on a DC 15 Wisdom saving throw or lose 1d6 hit points. This effect can be triggered once per day."
      }
    ],
    "levelRequirementReason": "Requires some understanding of fey magic to effectively use the tether.",
    "vendorReason": "Feywild vendors are the stewards of such delicate and powerful artifacts.",
    "shippingDetail": "Ships via Pipe Express, known for its reliable service through the fey realms.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour per use",
      "endsWhen": "The duration ends when the time is up or you are compelled to dance in madness due to a mood shift.",
      "charges": "Unlimited, but only one use per day for mood shifts."
    },
    "priceReason": "Balanced as an uncommon artifact that requires careful handling and understanding of fey magic.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:22:37.060487+00:00",
    "aiReviewedAt": "2026-07-22T05:22:37.060487+00:00",
    "aiReviewVersion": 1
  },
  "feywild_spiral_tide_satchel": {
    "id": "feywild_spiral_tide_satchel",
    "name": "Spiral Tide Satchel",
    "description": "The Spiral Tide Satchel is a woven leather satchel adorned with moss that glows in shifting hues of starlight, capturing and stabilizing chaotic magic from the Feywild. When opened, it emits a soothing hum that temporarily calms wild magic surges within a 30-foot radius for one minute. The satchel's moss reacts to nearby magical energies, causing minor time distortions (10% chance of experiencing a 1-second loop reset). It is said to be crafted by the elven weavers of Eldrinthorn, who possess ancient knowledge of the Feywild’s mysteries.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs and stabilizes chaotic magic",
      "Provides an extra daily use of Fey spells"
    ],
    "vendor": "feywild",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stabilize Chaotic Magic",
        "rules": "When opened, the satchel emits a calming hum within a 30-foot radius for one minute. This effect reduces the potency of any ongoing chaotic magic surges within its area by 50%, and provides a +2 bonus to saving throws against such effects."
      },
      {
        "title": "Extra Fey Spell Use",
        "rules": "The satchel grants an additional use of a prepared spell for Fey spellcasters each day. This can be used once per long rest, but only spells with the 'Feywild' origin can benefit from this extra casting."
      }
    ],
    "levelRequirementReason": "The satchel is crafted to assist travelers in the unpredictable Feywild, making it accessible for adventurers of any level.",
    "vendorReason": "The elven weavers of Eldrinthorn are renowned for their mastery over the elements and creatures of the Feywild, ensuring that only they can sell this unique item.",
    "shippingDetail": "Ships via the Void Drifter Relay, known for its swift and reliable delivery through the starlit realms of the Feywild.",
    "usage": {
      "activation": "Activates on opening; lasts one minute until closed or interrupted by magic.",
      "duration": "1 minute (recharges after a long rest)",
      "endsWhen": "Closes, is destroyed by magic, or its effect is disrupted by another magical source",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The satchel's rarity and the expertise required to craft it justify this price in XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:23:11.364438+00:00",
    "aiReviewedAt": "2026-07-22T05:23:11.364438+00:00",
    "aiReviewVersion": 1
  },
  "feywild_tangled_bloom": {
    "id": "feywild_tangled_bloom",
    "name": "Tangled Bloom",
    "description": "A swirling cluster of petals that hums with wild magic, its colors shift with the mood of the Fey. When worn, it grants temporary bursts of chaotic insight and minor time stuttering. The Tangled Bloom's petals shimmer in hues of twilight and mist, reacting to your emotions and the whimsical shifts of the Feywild. It is said that those who wear it find themselves momentarily aligned with the capricious nature of the fey, granting them a fleeting gift of perception and a touch of time’s elusiveness.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+1d6 Wild Magic Insight",
      "Time Stutter"
    ],
    "vendor": "feywild",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wild Magic Insight",
        "rules": "When activated as an action, the Tangled Bloom grants you advantage on one Intelligence (Insight) check. The effect lasts for 1 minute and can be used once per short or long rest."
      },
      {
        "title": "Time Stutter",
        "rules": "As a bonus action, activate to cause a momentary disturbance in time that allows you to either retrace your steps by 5 feet or reverse the effects of one spell you have cast within the last minute. You can use this ability once per short rest."
      }
    ],
    "levelRequirementReason": "The Tangled Bloom's magic is not too powerful for a beginning adventurer to wield, but it still requires a minimum level to align with its fey nature.",
    "vendorReason": "The Feywild vendor understands the delicate balance of the fey realm and knows that only those who are attuned to its whims should possess such an item.",
    "shippingDetail": "Ships via the Void Drifter Relay, delivering with a delay of one week due to the mystical nature of the delivery route.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "1 minute (Wild Magic Insight) / Instantaneous (Time Stutter)",
      "endsWhen": "Ends when used up; can be recharged with a short or long rest",
      "charges": "Unlimited, but only one use per short or long rest"
    },
    "priceReason": "The Tangled Bloom's price reflects its rare and powerful effects within the Feywild, requiring significant XP for an adventurer to afford.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:22:54.058335+00:00",
    "aiReviewedAt": "2026-07-22T05:22:54.058335+00:00",
    "aiReviewVersion": 1
  },
  "feywild_tangled_blossom": {
    "id": "feywild_tangled_blossom",
    "name": "Tangled Blossom of Shifting Time",
    "description": "The Tangled Blossom of Shifting Time, a living bloom from the Feywild, weaves time into its petals, creating a shimmering tapestry that warps perception. When touched, it grants temporary immunity to time-based effects and offers the chance to rewind a moment, but beware—the blossoms are fickle and can only be used for so long before they revert to normal. Each bloom is a fragment from a different reality, its magic both captivating and dangerous.",
    "price": 1000,
    "icon": "🌸",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Time Immunity",
      "Rewind Moment"
    ],
    "vendor": "feywild",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Time Immunity",
        "rules": "When the user touches the blossom, they become temporarily immune to time-based effects such as time loops or temporal traps for a duration of 10 minutes. This effect does not stack with other immunities but can be used once per short rest."
      },
      {
        "title": "Rewind Moment",
        "rules": "Roll a d6: on a result of 1–3, the user may rewind their most recent action by up to 5 seconds. This effect can only be used once every long rest and does not affect actions taken outside of combat."
      }
    ],
    "levelRequirementReason": "The delicate nature of the blossom's magic requires a certain level of focus and control, making it accessible to characters at least second-level.",
    "vendorReason": "The Feywild is home to the Tangled Blossom, and only its native vendors can properly cultivate and sell these rare blooms.",
    "shippingDetail": "Delivered by spectral messengers who ensure the bloom remains fresh until it arrives at its destination.",
    "usage": {
      "activation": "Interacting with the blossom as an action",
      "duration": "10 minutes of temporary time immunity; rewinding moment is a one-time use per long rest",
      "endsWhen": "The effect ends after the specified duration or when the user's actions are rewritten by another creature, ending their ability to rewind",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced as a rare item, its price reflects both its rarity and the Feywild's careful management of such resources.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T05:23:28.696038+00:00",
    "aiReviewedAt": "2026-07-22T05:23:28.696038+00:00",
    "aiReviewVersion": 1
  },
  "feywild_tangled_echoes": {
    "id": "feywild_tangled_echoes",
    "name": "Tangled Echoes of the Fractured Atrium",
    "description": "The Tangled Echoes of the Fractured Atrium is a shimmering amulet forged from fractured time and forgotten fey memories. It weaves together past thoughts into a spectral echo, revealing truths or illusions at random with each use. The wearer bears the last fleeting memory of its previous owner, a cryptic whisper from another soul’s mind. Worn for too long, it distorts reality in a minor time warp that lasts only one round.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Echoing Past Thoughts",
      "Temporal Distortion"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Echoing Past Thoughts",
        "rules": "When activated as an action, the amulet reveals either a random truth or lie about its previous owner's last thought. There is a 10% chance it grants a reroll on any failed check within the Feywild for the wearer. This effect lasts until the start of your next turn."
      },
      {
        "title": "Temporal Distortion",
        "rules": "Activating the amulet causes minor time distortion, creating a brief ripple in reality that lasts one round (10 seconds). If a creature moves through this area during its duration, they must succeed on a DC 15 Dexterity saving throw or be staggered until the start of their next turn."
      }
    ],
    "levelRequirementReason": "Requires at least third level to manipulate the amulet's temporal effects and avoid potential disorientation.",
    "vendorReason": "The Feywild vendor has access to ancient relics that bridge different planes, including this mystical artifact.",
    "shippingDetail": "Delivered via the Veil Pathways, ensuring safe passage through the ethereal realms of the Feywild.",
    "usage": {
      "activation": "Activates as an action or bonus action. Can be used up to twice per long rest.",
      "duration": "One round (10 seconds) for Temporal Distortion; lasts until start of next turn otherwise.",
      "endsWhen": "Runs out after its duration or when the wearer removes it from their person.",
      "charges": "Recharges on a short rest."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rare crafting materials and mystical properties.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:23:06.621859+00:00",
    "aiReviewedAt": "2026-07-22T05:23:06.621859+00:00",
    "aiReviewVersion": 1
  },
  "feywild_tangled_fey_root": {
    "id": "feywild_tangled_fey_root",
    "name": "Tangled Fey Root",
    "description": "The Tangled Fey Root appears as a gnarled, pulsating root that hums with untamed magic. When grasped, it releases a swirling mist of chaotic energy, temporarily granting immunity to chaos effects and disrupting spellcasting within its radius. The root whispers secrets from forgotten Feywild courts, offering cryptic lore that can be deciphered by those attuned to the wild. Its power is drawn from ancient Feywild roots, making it a rare find in the hands of adventurers.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Immunity to Chaos Effects",
      "Disrupt Spellcasting"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Chaos Effects",
        "rules": "The wielder gains temporary immunity to all chaos-related effects within 10 feet for 1 round. This effect is triggered when the root is grasped and lasts until the end of their next turn."
      },
      {
        "title": "Disrupt Spellcasting",
        "rules": "All creatures within a 20-foot radius of the wielder must make a DC 15 Concentration saving throw or be incapacitated for 1 round, unable to cast spells. This effect lasts until the start of their next turn."
      }
    ],
    "levelRequirementReason": "The Tangled Fey Root is potent enough that even low-level adventurers can wield its power.",
    "vendorReason": "Feywild is a direct supplier from the heart of the Feywild, where these roots are harvested for their unique properties.",
    "shippingDetail": "Delivered by Lakitu Drones with a 24-hour expedited service guarantee.",
    "usage": {
      "activation": "Grasping the root activates its effects.",
      "duration": "1 round, expiring at the start of the wielder's next turn.",
      "endsWhen": "The effect ends when the wielder no longer holds the root or is incapacitated.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the rare and potent nature of the Feywild Tangled Root, balancing its power with a fair market value.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T21:56:01.406503+00:00",
    "aiReviewedAt": "2026-07-22T21:56:01.406503+00:00",
    "aiReviewVersion": 1
  },
  "feywild_tangled_fey_talisman": {
    "id": "feywild_tangled_fey_talisman",
    "name": "Tangled Fey Talisman",
    "description": "The Tangled Fey Talisman is a shimmering amulet woven from the forgotten courtly threads of the Feywild, its surface etched with runes that dance and shift like living light. This talisman bends reality to your whim; when worn, it grants a 30% chance to reroll failed rolls in chaotic situations, and bestows +2 to all rolls within the Feywild. The amulet's power is not without cost: should you fail a roll, you may choose to reroll or suffer a minor temporal dissonance that leaves you dazed for one round.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Feywild Advantage",
      "Reroll Chance"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Temporal Dissonance",
        "rules": "If you fail to reroll a failed roll, you must endure a minor temporal dissonance. You are dazed for one round (no action or reaction). This effect can only occur once per long rest."
      },
      {
        "title": "Feywild Advantage",
        "rules": "While in the Feywild, this talisman grants you advantage on all rolls. Additionally, it provides a +2 bonus to such rolls."
      }
    ],
    "levelRequirementReason": "This item can be worn by adventurers of any level who wish to explore the mysteries and dangers of the Feywild.",
    "vendorReason": "The talismans are crafted by the fey themselves, who trade them with travelers for rare goods from other worlds.",
    "shippingDetail": "The amulet is delivered discreetly via Shy Guy Smugglers, known for their reliable and often magical courier services within the Feywild.",
    "usage": {
      "activation": "Passive effect when worn in the Feywild; requires a reroll action to activate the chance to reroll failed rolls.",
      "duration": "Instantaneous upon activation or entry into the Feywild, lasts until you leave the area or rest.",
      "endsWhen": "The effect ends if you are no longer within the Feywild or have rested for at least one long rest.",
      "charges": "Unlimited; rests and leaving the Feywild reset its effects."
    },
    "priceReason": "Crafted by fey artisans, this talisman offers a unique blend of protection and advantage in their realm, making it a sought-after item among explorers and adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:23:53.029402+00:00",
    "aiReviewedAt": "2026-07-22T05:23:53.029402+00:00",
    "aiReviewVersion": 1
  },
  "feywild_tangled_mirror": {
    "id": "feywild_tangled_mirror",
    "name": "Tangled Mirror of Shifting Reflections",
    "description": "The Tangled Mirror of Shifting Reflections distorts reality with every glance, reflecting not your face but a random memory or future event from the Feywild. Its fractured surface gleams with an otherworldly light, casting reflections that shimmer and warp as they settle into place. Use it to spy on hidden courts or escape time loops—just beware, the reflections may not be what you remember, and some might even alter your perception of reality itself.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reflects a random memory",
      "Reflects a future event"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Random Memory Reflection",
        "rules": "When activated, the mirror reflects a random memory from the Feywild. The target can attempt a Wisdom saving throw to resist the effect. On a successful save, they are unaffected by the reflection. If the save fails, the target is disoriented for 1 minute and must make another Wisdom saving throw at the start of each of their turns. On a failed save, they become confused until the end of their next turn."
      },
      {
        "title": "Future Event Reflection",
        "rules": "The mirror may also reflect a future event from the Feywild. The target can attempt a Intelligence saving throw to resist this effect. On a successful save, they are unaffected by the reflection. If the save fails, the target experiences a brief glimpse of their future, which lasts for 1 minute. During this time, the target is unable to take any actions and must remain stationary."
      }
    ],
    "levelRequirementReason": "The mirror's Feywild magic requires an understanding of its otherworldly nature.",
    "vendorReason": "The mirror's origins in the Feywild make it a natural fit for Feywild's inventory.",
    "shippingDetail": "Special handling is required to ensure the mirror arrives undistorted, and delivery may take an additional day due to its fragile nature.",
    "usage": {
      "activation": "A bonus action",
      "duration": "1 minute per use",
      "endsWhen": "The target makes a successful saving throw or rests for at least 8 hours",
      "charges": "Unlimited, but the mirror can only reflect one memory or future event per use"
    },
    "priceReason": "The mirror's rare magic and Feywild origins justify its fair market value.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T05:23:40.936176+00:00",
    "aiReviewedAt": "2026-07-22T05:23:40.936176+00:00",
    "aiReviewVersion": 1
  },
  "feywild_tangled_soul_amber": {
    "id": "feywild_tangled_soul_amber",
    "name": "Tangled Soul Amber",
    "description": "The Tangled Soul Amber glows with a soft, amber sheen that shifts and swirls in patterns of forgotten Fey magic. This shard captures the chaotic essence of an ancient Fey court, allowing wearers to glimpse into the Wild’s shifting timelines. For one round per use, it grants immunity to time loops, but prolonged exposure may cause minor disorientation, making it a dangerous yet invaluable tool for those navigating the unpredictable realms of the Feywild.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Time Loop Immunity",
      "Minor Disorientation"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Time Loop Immunity",
        "rules": "Activates as an action. Grants immunity to time loops for one round per use. Ends when the effect duration expires or if the wearer takes any damage."
      },
      {
        "title": "Minor Disorientation",
        "rules": "Causes minor disorientation after prolonged use, defined as more than once in a 24-hour period. The wearer must succeed on a DC 15 Constitution saving throw or be blinded for 1d4 rounds. This effect does not stack."
      }
    ],
    "levelRequirementReason": "The shard's chaotic magic is too potent to wield safely without at least third-level spellcasting ability.",
    "vendorReason": "Feywild traders possess the knowledge and connection to the Feywild required to handle such dangerous but powerful artifacts responsibly.",
    "shippingDetail": "Due to its volatile nature, Shy Guy Smugglers ensure the item is delivered within a week of purchase with special handling precautions.",
    "usage": {
      "activation": "Activates as an action. Grants immunity to time loops for one round per use.",
      "duration": "One round per activation.",
      "endsWhen": "Effect ends when duration expires or if wearer takes damage.",
      "charges": "Unlimited, but only one use per day."
    },
    "priceReason": "The Tangled Soul Amber's rarity and the risk it poses to the user justify a price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:24:23.357192+00:00",
    "aiReviewedAt": "2026-07-22T05:24:23.357192+00:00",
    "aiReviewVersion": 1
  },
  "feywild_tangled_soul_bottle": {
    "id": "feywild_tangled_soul_bottle",
    "name": "Tangled Soul Bottle",
    "description": "The Tangled Soul Bottle is a shimmering vial imbued with the chaotic essence of Feywild spirits, its surface etched with intricate runes that pulse with raw magic. When shaken, it releases a burst of wild magic that warps reality within a ten-foot radius, altering terrain or time for a brief instant. Alternatively, it can confound an enemy, causing them to act against their will and potentially turning their own allies into foes. Each use drains one charge; the bottle recharges after thirty minutes of inactivity.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reality Warp",
      "Confusion"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Reality Warp",
        "rules": "When activated, the Tangled Soul Bottle warps reality within a 10-foot radius for 1 minute. Choose one effect: alter terrain (such as turning grass into quicksand) or manipulate time (e.g., reversing an enemy's movement). This has no save DC and can only be used once per long rest."
      },
      {
        "title": "Confusion",
        "rules": "Shake the bottle to release a burst of chaotic energy that targets one creature within 30 feet. The target must succeed on a Wisdom saving throw or become confused for 1 round, acting against their will and potentially harming their allies. This has a save DC of 12."
      }
    ],
    "levelRequirementReason": "The Tangled Soul Bottle requires a level 5 character to wield due to its volatile nature and the risk it poses if mishandled.",
    "vendorReason": "The Feywild vendor is familiar with the bottle's origin and can verify its authenticity, ensuring safe handling.",
    "shippingDetail": "Ships via Koopa Postal, known for their reliable but quirky delivery service. Expect a small delay due to their unique transportation methods.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous; the effects last as described above",
      "endsWhen": "The effect ends when its duration expires or the bottle is used up",
      "charges": "Drains one charge per use. Recharges after 30 minutes of inactivity."
    },
    "priceReason": "The Tangled Soul Bottle offers powerful and versatile effects, making it a valuable yet expensive tool for Feywild explorers and adventurers.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T05:24:23.465701+00:00",
    "aiReviewedAt": "2026-07-22T05:24:23.465701+00:00",
    "aiReviewVersion": 1
  },
  "feywild_tangled_soul_pearl": {
    "id": "feywild_tangled_soul_pearl",
    "name": "Tangled Soul Pearl",
    "description": "The Tangled Soul Pearl is a shimmering moss-covered orb that pulses with wild magic. Held in hand, it reveals your true emotional state through vibrant hues—anger, joy, or confusion—and may cause a brief memory flash, flickering like the auroras of the Feywild. Caution: if used in a loop, this relic unravels time, causing you to 'replay' your last action as if caught in an endless temporal echo.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Emotional Reveal",
      "Temporal Echo"
    ],
    "vendor": "feywild",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Emotional Reveal",
        "rules": "When held, the Tangled Soul Pearl emits a glow corresponding to your current emotional state (anger: red, joy: gold, confusion: purple). This effect lasts for 1d4 rounds. There is no save or DC required."
      },
      {
        "title": "Temporal Echo",
        "rules": "Using this item in a loop causes you to 'replay' your last action as if time loops back on itself. This effect ends when the loop is interrupted, and it can only be used once per short rest."
      }
    ],
    "levelRequirementReason": "This item's power lies in its ability to reveal personal truths and briefly disrupt time, making a first-level spellcaster or higher necessary for control.",
    "vendorReason": "The Tangled Soul Pearl is crafted by the fey themselves, and only those who understand their whims can handle such potent magic without danger.",
    "shippingDetail": "Due to its delicate nature, it ships with Pipe Express within a specially designed, time-resistant container.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "Instantaneous (replay effect ends when loop is interrupted)",
      "endsWhen": "Loop interrupted or after one use per short rest",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this item offers potent but manageable effects that are well-suited for a first-level spellcaster.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:24:07.764409+00:00",
    "aiReviewedAt": "2026-07-22T05:24:07.764409+00:00",
    "aiReviewVersion": 1
  },
  "feywild_tangled_tide_amber": {
    "id": "feywild_tangled_tide_amber",
    "name": "Tangled Tide Amber",
    "description": "The Tangled Tide Amber glows with a chaotic, iridescent light, pulsing in time with the Feywild's capricious magic. This crystalline shard can distort reality within its 10-meter radius, causing enemies to fall into unpredictable loops where their last action repeats chaotically for three seconds. Allies nearby, though protected by this instability, suffer a momentary disorientation that reduces their accuracy by -10% for one round. Perfect for disrupting the rigid formations of Feywild courts.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Time Loop Distortion",
      "Fey Wild Magic Surge"
    ],
    "vendor": "feywild",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Time Loop Distortion",
        "rules": "When activated, this shard creates a 10-meter radius area where enemies are trapped in a 3-second loop of their last action. This effect has no save DC and can be used once per short or long rest."
      },
      {
        "title": "Fey Wild Magic Surge",
        "rules": "Increases the chance to critically hit with magic attacks by +50% while the shard is active, but only for allies within 10 meters. This effect persists as long as the shard remains in use and has no save DC or recharge requirements."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 3 to handle the shard's chaotic magic.",
    "vendorReason": "The Feywild vendors are well-acquainted with the unpredictable nature of these shards and can supply them.",
    "shippingDetail": "Ships via the Void Drifter Relay, known for its swift but occasionally unreliable service.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect lasting 3 seconds per use",
      "endsWhen": "The duration ends when the shard is no longer being used or expended in a fight.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its Feywild origin and chaotic magic.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T05:24:31.525301+00:00",
    "aiReviewedAt": "2026-07-22T05:24:31.525301+00:00",
    "aiReviewVersion": 1
  },
  "feywild_tangled_tide_satchel": {
    "id": "feywild_tangled_tide_satchel",
    "name": "Tangled Tide Satchel",
    "description": "The Tangled Tide Satchel is a satchel crafted from the chaotic threads of the Feywild, its weave shimmering with arcane patterns that seem to twist and untwist as if alive. This magical pouch absorbs stray magical backlash and can rewind time for moments, offering a lifeline in the chaos of a wild magic storm or a time-looped predicament. It is said to have been woven by the mischievous Fey, who use it to play tricks on travelers caught in temporal maelstroms.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs Magical Backlash",
      "Temporal Rewind"
    ],
    "vendor": "feywild",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Absorbs Magical Backlash",
        "rules": "When activated, the satchel absorbs 1d6 magical damage from nearby sources. This effect is instantaneous and requires no action."
      },
      {
        "title": "Temporal Rewind",
        "rules": "For 3 seconds after activation, all creatures within a 5-foot radius are unaffected by any time-related effects or traps for the duration of the rewind. The satchel can only be used once every long rest."
      }
    ],
    "levelRequirementReason": "The Tangled Tide Satchel requires no minimum level as it is a rare item that assists in navigating unpredictable and dangerous temporal environments.",
    "vendorReason": "The Feywild vendor supplies this satchel as part of their offerings to adventurers who traverse the wild magic storms of the Feywild, ensuring safe passage through time's chaos.",
    "shippingDetail": "Shipped via Pipe Express; delivery can be delayed by up to one week due to the unpredictable nature of travel through the Feywild.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "Instantaneous for Absorbs Magical Backlash, 3 seconds for Temporal Rewind",
      "endsWhen": "The effect ends when the duration expires or when used again",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "This item is priced at 1000 XP, reflecting its rarity and utility in navigating chaotic time and magical storms.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:24:37.683055+00:00",
    "aiReviewedAt": "2026-07-22T05:24:37.683055+00:00",
    "aiReviewVersion": 1
  },
  "feywild_tangled_time_core": {
    "id": "feywild_tangled_time_core",
    "name": "Tangled Time Core",
    "description": "The Tangled Time Core is a delicate, pulsating orb of fractured chronal energy. Its surface flickers with the shifting light of the Feywild, casting an ethereal glow as it warps moments in time. When activated, it creates a brief time loop around its wielder, allowing them to reattempt a failed action or save. The core's energy resonates with the Feywild, granting temporary bonuses and visual distortions that disrupt foes.",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Rewind Action",
      "Chrono Distortion"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rewind Action",
        "rules": "When activated as a reaction to a failed action or saving throw, the wielder can reattempt it immediately. This effect has no cooldown and may be used once per short rest."
      },
      {
        "title": "Chrono Distortion",
        "rules": "As an activation, this item causes 2 seconds of visual distortion when used in combat, creating a disorienting effect for nearby creatures within 10 feet. This has no save DC but can be dispelled by any means that end the confused or stunned condition."
      }
    ],
    "levelRequirementReason": "The Tangled Time Core's power is accessible to low-level characters, allowing them to gain crucial advantages in challenging situations.",
    "vendorReason": "Feywild vendors are well-versed in the arcane and natural mysteries of the region, making them the best source for such an item.",
    "shippingDetail": "Ships via Lakitu Drones, known for their reliability and speed through Feywild routes.",
    "usage": {
      "activation": "Reaction (to failed action or saving throw); Instantaneous; Ends when the effect is used once per short rest.",
      "duration": "Instantaneous",
      "endsWhen": "Used once per short rest",
      "charges": "Unlimited"
    },
    "priceReason": "The Tangled Time Core offers a balance of utility and versatility at an accessible price, suitable for players of all levels.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T05:24:41.446092+00:00",
    "aiReviewedAt": "2026-07-22T05:24:41.446092+00:00",
    "aiReviewVersion": 1
  },
  "feywild_tangled_timepiece": {
    "id": "feywild_tangled_timepiece",
    "name": "Tangled Timepiece",
    "description": "The Tangled Timepiece is a misshapen pocket watch with gears entwined like vines from the Feywild. Its ticking reverses direction with every glance, hinting at its chaotic nature. When activated, it allows the user to rewrite one memory or event within a 100-yard radius of the nearest Fey court, but the timepiece itself stutters for a moment, causing a brief disorientation. The watch grants temporary hit points if used during this stutter period.",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Rewrites a memory or event",
      "Causes a 1d4 time-loop stutter"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Rewrite Memory/Event",
        "rules": "The user can choose to rewrite one memory or event within 100 yards of the nearest Fey court. This effect lasts until the end of the user's next turn, and requires a successful DC 15 Wisdom (Insight) check to be effective. The item has only one use per long rest."
      },
      {
        "title": "Time-Loop Stutter",
        "rules": "Upon activation, the Tangled Timepiece causes a temporary disorientation for 1d4 rounds. During this time, all creatures within 20 feet must make a DC 15 Constitution saving throw or become stunned until the end of their next turn."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to effectively navigate and manipulate Feywild-related events.",
    "vendorReason": "The Tangled Timepiece is a product of the Feywild, naturally sold by Feywild vendors who have access to such artifacts.",
    "shippingDetail": "Delivery is expedited by Lakitu Drones, ensuring timely arrival for urgent matters involving time and memory.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends at the end of the user's next turn or if used during a time-loop event, granting temporary hit points.",
      "charges": "1 use per long rest"
    },
    "priceReason": "Balanced with other rare items, reflecting its Feywild origin and unique temporal manipulation capabilities.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T05:24:43.334947+00:00",
    "aiReviewedAt": "2026-07-22T05:24:43.334947+00:00",
    "aiReviewVersion": 1
  },
  "feywild_tangled_wisp": {
    "id": "feywild_tangled_wisp",
    "name": "Tangled Wisp of Shifting Time",
    "description": "A delicate, ethereal wisp of glowing threads that dances within your hand. Crafted from the shifting essences of Feywild’s time streams, it allows you to glimpse a possible future outcome or rewind reality's timeline by ten seconds. However, each use comes at a cost—it leaves behind a fragment of your memory. This enigmatic artifact is perfect for those who walk the borders between worlds and need an edge in the unpredictable Feywild.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Glimpse Future Outcome",
      "Rewind Time"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Glimpse Future Outcome",
        "rules": "As a bonus action, you may use the wisp to gain a fleeting vision of a possible future outcome. This effect is random and cannot be controlled. The duration is instantaneous, but it has no save DC or restrictions."
      },
      {
        "title": "Rewind Time",
        "rules": "Once per day as an action, you can rewind the timeline by ten seconds. This effect instantly resets any actions taken within that time frame. However, there's a 10% chance of creating a time loop anomaly, which could disrupt your surroundings. The anomaly lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "Requires a higher spellcasting proficiency to handle the wisp's unpredictable nature.",
    "vendorReason": "The Feywild creatures have mastered the art of manipulating time and offer this artifact to those who seek to understand its mysteries.",
    "shippingDetail": "Shipped via fast courier service; expedited delivery available for an additional cost.",
    "usage": {
      "activation": "Bonus action or action",
      "duration": "Instantaneous or until end of next turn (for time loop anomalies)",
      "endsWhen": "After its use, anomaly resolution, or when the day ends",
      "charges": "One daily use"
    },
    "priceReason": "Balanced price reflects the item's rare essence and limited utility within Feywild.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:24:47.719102+00:00",
    "aiReviewedAt": "2026-07-22T05:24:47.719102+00:00",
    "aiReviewVersion": 1
  },
  "feywild_tangled_wisp_bow": {
    "id": "feywild_tangled_wisp_bow",
    "name": "Tangled Wisp Bow",
    "description": "The Tangled Wisp Bow is a weapon forged from the ancient roots of a sleeping moonwood tree, its body intertwined with strands of shifting color that shimmer in hues of twilight and starlight. Each shot releases a burst of chaotic light that disorients foes, making them momentarily relive their last actions in a time-loop echo. This bow's arrows are said to whisper secrets of the Feywild, and those who wield it must be careful not to become ensnared by its magic.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Shimmers with shifting colors, disorienting targets",
      "Triggers time-loops of the target’s past actions"
    ],
    "vendor": "feywild",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Disorienting Shot",
        "rules": "When fired, the Tangled Wisp Bow releases a burst of chaotic light that targets a creature within 60 feet. The target must succeed on a DC 15 Wisdom saving throw or be blinded for 1 round and become disoriented, unable to take actions other than movement."
      },
      {
        "title": "Time-Loop Echo",
        "rules": "Each shot triggers a time-loop echo of the target’s last action. The target relives their last action in a 3d4-second loop. During this time, they are incapacitated and cannot take actions or move. This effect ends when the loop completes."
      }
    ],
    "levelRequirementReason": "The bow's intricate construction requires a proficient archer with significant experience to wield it effectively.",
    "vendorReason": "Feywild is known for its mastery of nature and crafting items that bridge the realms, making this bow a fitting addition to their inventory.",
    "shippingDetail": "Delivered through the Feywild's secret portals, ensuring swift arrival to the recipient.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (effect lasts until end of turn for disoriented target)",
      "endsWhen": "The target successfully saves or the loop completes",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from ancient moonwood and infused with Feywild magic, this bow is a rare and powerful weapon worth its weight in experience points.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:25:08.308011+00:00",
    "aiReviewedAt": "2026-07-22T05:25:08.308011+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_blooming_flower": {
    "id": "feywild_time_blooming_flower",
    "name": "Time Blooming Flower",
    "description": "The Time Blooming Flower is a delicate bloom with petals that shimmer like stardust. When placed in your inventory, it releases a wild magic aura that warps time around you for fleeting moments. This flower grants immunity to all time-based spells and effects for one round, ensuring you are never caught off guard by temporal illusions or traps. Its pulsing essence also enhances your reflexes, granting +2 to saving throws against any time loops you may encounter.",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Time Warp Immunity",
      "Enhanced Reflexes"
    ],
    "vendor": "feywild",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Time Warp Immunity",
        "rules": "Activates on placement in inventory. Grants immunity to all time-based spells and effects for one round, during which you are immune to any environmental or magical attempts to warp your perception of time."
      },
      {
        "title": "Enhanced Reflexes",
        "rules": "Grants +2 to all saving throws against time loops until the end of your next turn. This effect does not stack with other bonuses."
      }
    ],
    "levelRequirementReason": "Beginners often find this flower useful for navigating tricky situations involving time-based challenges.",
    "vendorReason": "The Feywild is known for its unpredictable temporal disturbances, making the Time Blooming Flower a natural fit for their inventory of magical trinkets.",
    "shippingDetail": "Delivered with haste by spectral couriers who ensure the bloom stays fresh during transit.",
    "usage": {
      "activation": "Instantaneous action upon placing in your inventory.",
      "duration": "One round (6 seconds).",
      "endsWhen": "The round ends or you leave the area where it was placed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at this price, considering its immediate utility and the rare materials used in its crafting.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T05:24:55.823084+00:00",
    "aiReviewedAt": "2026-07-22T05:24:55.823084+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_blossom": {
    "id": "feywild_time_blossom",
    "name": "Time Blossom of the Shifting Veil",
    "description": "The Time Blossom of the Shifting Veil is a delicate, glowing bloom with thorny vines that shift like living tendrils. Crafted in the elusive Feywild, this flower allows you to rewind time, but only if you can make a swift decision at the cost of your next move. Its temporal essence lingers for a moment, leaving behind a shimmering residue that hints at the breach it caused in the fabric of time.",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Rewind Time",
      "Quick Decision Required"
    ],
    "vendor": "feywild",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rewind Time",
        "rules": "As an action, you can rewind 10 seconds of time. You must then make a quick decision—refusing to act in the moment until your next turn. This effect ends if you take any action or if you are incapacitated."
      },
      {
        "title": "Quick Decision Required",
        "rules": "Using the Time Blossom compels you to immediately make a choice, potentially altering the outcome of a situation. It has no save DC and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for novice adventurers who may find themselves in tight spots but lack the experience to navigate them without assistance.",
    "vendorReason": "The Feywild, a realm of constant change and fleeting moments, is where this delicate blossom originates, making it a fitting source for such an item.",
    "shippingDetail": "Delivered by the swift spirits who traverse the Feywild, ensuring the Time Blossom arrives in perfect condition.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; ends if you take any action or are incapacitated",
      "endsWhen": "You take an action or become incapacitated",
      "charges": "Once per long rest"
    },
    "priceReason": "The Time Blossom's rarity and the unique magic required to craft it justify its fair price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T05:24:58.507655+00:00",
    "aiReviewedAt": "2026-07-22T05:24:58.507655+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_breath_mask": {
    "id": "feywild_time_breath_mask",
    "name": "Timebreath Mask of the Fractured Atrium",
    "description": "The Timebreath Mask of the Fractured Atrium is a delicate construct woven from threads spun by time itself, encased in silvered glass that shimmers with fractured patterns. It whispers secrets of reality's fabric and allows its wearer to perceive the fluid nature of time and space. When worn, it grants fleeting glimpses into hidden Feywild portals, but at the cost of heightened sensory distortions that can deceive the senses if used for too long.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Detects Feywild portals and temporal anomalies within 30 feet",
      "Grants a 15% chance to escape time loops on each use"
    ],
    "vendor": "feywild",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporal Perception",
        "rules": "The wearer can attempt to detect hidden Feywild portals or temporal distortions by spending an action. If successful, they gain knowledge of nearby anomalies, but this effect ends if the wearer spends more than five minutes in continuous use."
      },
      {
        "title": "Loop Escape",
        "rules": "When worn, the mask grants a 15% chance to escape from a time loop on each activation. This effect is instantaneous and requires no action. The mask can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 3 to navigate the temporal distortions without being overwhelmed by sensory overload.",
    "vendorReason": "The mask is an exclusive offering from Feywild, crafted by time-keepers who understand its mysteries intimately.",
    "shippingDetail": "Ships via spectral courier; arrives in a week with no delivery delays.",
    "usage": {
      "activation": "Action or bonus action to use the mask's detection feature, reaction to escape time loops",
      "duration": "Instantaneous for loop escape, up to 1 minute of perception if successful",
      "endsWhen": "After 5 minutes of continuous use, sensory distortions become too much; exhausted after one use per rest",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced against other rare items by offering a specific and limited utility within its niche.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-22T05:25:17.418652+00:00",
    "aiReviewedAt": "2026-07-22T05:25:17.418652+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_broken_scepter": {
    "id": "feywild_time_broken_scepter",
    "name": "Time Broken Scepter",
    "description": "The Time Broken Scepter hums with the fractured essence of time itself, its intricate carvings inlaid with quartz that glows faintly like stars before flickering between eras. When activated, it shatters a single time loop for three rounds, leaving a shimmering residue that can be mistaken for a fleeting dream. Yet, this act of temporal disruption may inadvertently sow the seeds of chaos, creating new loops in its wake. The scepter's warning glow turns deep crimson as its core nears overload, signaling an impending shattering into infinitesimal shards.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Breaks Time Loops",
      "Temporal Residue"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Breaks Time Loops",
        "rules": "When activated as a bonus action, the Scepter breaks a single time loop for three rounds. The wielder must make a DC 15 Wisdom saving throw or be affected by minor temporal disorientation, which lasts for 1 minute. If overused, the scepter may shatter into shards."
      },
      {
        "title": "Temporal Residue",
        "rules": "After breaking a time loop, the area around the wielder is left with lingering traces of disrupted time. These residues manifest as faint temporal distortions that last for 1 minute and can be detected by any character within 30 feet."
      }
    ],
    "levelRequirementReason": "The Scepter's complex weave of time magic requires a practitioner with at least five levels to properly command its power.",
    "vendorReason": "Feywild, a master of arcane and temporal artifacts, carries the Time Broken Scepter due to its unique connection to the fabric of time.",
    "shippingDetail": "Due to its delicate nature, the scepter is delivered via Lakitu Drones' top-tier express service, ensuring safe and swift transport.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "3 Rounds",
      "endsWhen": "The duration ends when the effect's time lapses or if overused.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a price of 1000 XP, reflecting its rare craftsmanship and the risks involved in wielding such a delicate temporal artifact.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:25:27.335735+00:00",
    "aiReviewedAt": "2026-07-22T05:25:27.335735+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_dust": {
    "id": "feywild_time_dust",
    "name": "Time Dust of the Shattered Hourglass",
    "description": "The Time Dust of the Shattered Hourglass, a shimmering powder that whispers of Feywild's chaotic past, can rewind time in a single moment, erasing or resetting it. Sprinkle this dust within a confined space, and a fleeting echo of change will linger—a faint, shimmering residue that fades into nothingness after 10 seconds. Used too frequently, the dust might trigger unpredictable time-loop anomalies, warping reality for all nearby creatures.",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Rewinds Time in a Moment",
      "May Trigger Time-Loop Anomalies"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rewinds Time in a Moment",
        "rules": "The user can activate this dust as an action within a confined space (up to 10 feet radius). The effect resets one moment of time, up to 30 seconds prior. Creatures and objects within the affected area are also reset to their states at that moment. This effect has no save DC but is limited to once per long rest."
      },
      {
        "title": "May Trigger Time-Loop Anomalies",
        "rules": "If used more than three times in a single day, there's a 25% chance (DC 15 Wisdom saving throw) that an unpredictable time-loop anomaly occurs. This anomaly warps the immediate environment and all creatures within it for 1 minute or until dispelled by a spell of 3rd level or higher."
      }
    ],
    "levelRequirementReason": "This powder is accessible to lower-level characters who have encountered its unpredictable nature but are still capable of using it responsibly.",
    "vendorReason": "Feywild, a master of all things arcane and whimsical, curates this dust among other mystical artifacts for those who seek to manipulate time in small ways.",
    "shippingDetail": "The powder is delivered swiftly by Lakitu Drones, but due to its volatile nature, it requires special handling. The delivery may take up to a week depending on the destination.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; duration and area are reset for 30 seconds or until used again.",
      "endsWhen": "The dust is expended after one use or if used more than three times in a day, triggering an anomaly.",
      "charges": "Unlimited"
    },
    "priceReason": "This powder's rarity and unpredictable nature justify its moderate price of 1000 XP.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-22T05:25:59.135147+00:00",
    "aiReviewedAt": "2026-07-22T05:25:59.135147+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_fae_ring": {
    "id": "feywild_time_fae_ring",
    "name": "Ring of the Shifting Hours",
    "description": "The Ring of the Shifting Hours, crafted from the living wood of Feywild's ancient trees and imbued with chaotic magic, pulses with an ethereal glow. It allows its wearer to manipulate time in fleeting moments—slowing it down, speeding it up, or even pausing it entirely for a brief instant. However, misuse risks trapping the wearer in a temporal loop, where time repeats endlessly, or summoning an errant Fey spirit that could either aid or torment them.",
    "category": "equipment",
    "price": 1000,
    "icon": "🕰",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Time Manipulation",
      "Fey Spirit Summon"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Time Manipulation",
        "rules": "The wearer can use a bonus action to manipulate time for one round. They can slow, speed up, or stop time for themselves and others within reach. This effect is instantaneous but ends if the wearer takes damage or uses another action that requires concentration."
      },
      {
        "title": "Fey Spirit Summon",
        "rules": "There's a 10% chance per round of summoning a Fey spirit when using this ring, which lasts for one round. The spirit can be commanded to perform minor tasks but may act unpredictably. A successful DC 15 Wisdom saving throw ends the effect."
      }
    ],
    "levelRequirementReason": "The intricate magic of the Ring necessitates a minimum level of focus and control.",
    "vendorReason": "Feywild, being the realm from which this ring originates, is the only place where such an item can be crafted or traded.",
    "shippingDetail": "The ring's delicate nature requires careful packing and tracking via Koopa Postal to ensure safe delivery.",
    "usage": {
      "activation": "Bonus action",
      "duration": "One round, ends on damage or loss of concentration",
      "endsWhen": "On taking damage or using another action requiring concentration",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to ensure a fair value for the ring's unpredictable yet powerful effects.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T05:25:36.548451+00:00",
    "aiReviewedAt": "2026-07-22T05:25:36.548451+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_flicker": {
    "id": "feywild_time_flicker",
    "name": "Time Flicker Charm",
    "description": "The Time Flicker Charm is a shimmering amulet that hums with an ethereal light, crafted from the very threads of the Feywild's temporal fabric. When activated in times of peril, it weaves a brief, but potent, ripple through time, allowing you to dodge traps or reposition yourself within the chaotic Feywild. This momentary distortion not only grants you a second chance at survival but also has the potential to disrupt nearby Fey magic, creating a ripple effect that can be felt by even the most ancient of fey.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporal Stutter",
      "Fey Court Disruption"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporal Stutter",
        "rules": "When activated as an action, this charm creates a 3-second temporal stutter. All creatures within 10 feet of the wearer are affected by the pause in time for that duration. During this time, all non-magical attacks and ranged weapon attacks against the wearer have disadvantage, while the wearer can move up to their speed without provoking opportunity attacks."
      },
      {
        "title": "Fey Court Disruption",
        "rules": "There is a 10% chance that when activated, the charm disrupts nearby Fey magic. This effect has a range of 30 feet and lasts until the end of your next turn. Successfully disrupting Fey magic requires an Arcana check (DC 15). If successful, you gain advantage on all Charisma-based checks against Fey creatures or their magical effects within the duration."
      }
    ],
    "levelRequirementReason": "To harness the power of the Feywild and its temporal distortions, one must have a firm grasp of arcane magic.",
    "vendorReason": "The Feywild vendors are the guardians of the very fabric of time within their domain, making them the only ones who can sell such an item.",
    "shippingDetail": "Due to its delicate nature, this charm is shipped via Koopa Postal's express delivery service, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (3-second effect)",
      "endsWhen": "The duration ends at the end of your next turn or when you take a major action.",
      "charges": "Unlimited charges; the charm regains all expended uses at dawn."
    },
    "priceReason": "Crafted from Feywild magic threads, this amulet commands a price that reflects its rarity and power within the Feywild.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:25:47.882042+00:00",
    "aiReviewedAt": "2026-07-22T05:25:47.882042+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_flicker_bottle": {
    "id": "feywild_time_flicker_bottle",
    "name": "Time Flicker Bottle",
    "description": "The Time Flicker Bottle is crafted from the ethereal glass of the Feywild, shimmering with an iridescent hue that hints at its power. When uncorked, it distorts reality for a fleeting moment, allowing you to either rewind time and correct minor mistakes or fast-forward through dangerous sequences. This bottle is a vital tool for adventurers navigating the unpredictable realms of the Feywild, where timing can be the difference between life and death.",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Temporal Distortion",
      "Fey Paradox"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "As a bonus action, you may activate the bottle to distort reality for 10 seconds. During this time, you can either rewind your last 10 seconds of actions or fast-forward through dangerous sequences. This effect is usable once per short rest."
      },
      {
        "title": "Fey Paradox",
        "rules": "There's a 25% chance that each use of the Time Flicker Bottle will trigger a minor Fey time paradox, granting you advantage on one saving throw against magical effects that rely on timing. If the save is failed, you are disoriented for 1 minute."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to effectively use the bottle's temporal distortions.",
    "vendorReason": "The Feywild vendor is well-known for selling items that aid adventurers in navigating the unpredictable realms of the fey, and this bottle is a staple in their inventory.",
    "shippingDetail": "Ships via Koopa Postal's express courier service, delivered within two days.",
    "usage": {
      "activation": "Bonus action",
      "duration": "10 seconds per use",
      "endsWhen": "The effect ends when the 10 seconds are up or you take any other action on your turn.",
      "charges": "Unlimited uses, recharges after a long rest."
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare and useful nature in unpredictable Feywild environments.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T05:25:42.261171+00:00",
    "aiReviewedAt": "2026-07-22T05:25:42.261171+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_fog_amulet": {
    "id": "feywild_time_fog_amulet",
    "name": "Time Fog Amulet of the Fractured Hour",
    "description": "The Time Fog Amulet of the Fractured Hour is a dusty, translucent amulet that shrouds its wearer in a temporal veil. Crafted from the sands of the Feywild and imbued with the essence of fractured time, it momentarily splits your actions across two timelines, granting you a round of immunity to any time-based effects or damage. A fleeting glimpse into multiple futures, this amulet's power is both mesmerizing and perilous, as the slightest tremor can ripple through the fabric of time itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporal Split",
      "Time Immunity"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Split",
        "rules": "As a bonus action, activate the amulet to split your actions across two timelines for 1 minute. During this time, all your attacks and spells are made as if you were in both timelines simultaneously. This effect ends early if you take any damage or if you willingly end it."
      },
      {
        "title": "Time Immunity",
        "rules": "While the amulet is active, you gain immunity to all time-based effects and damage for 1 round (6 seconds). This duration increases by 1 additional round for every two levels beyond 5th. The effect ends if your actions are interrupted or if you take any damage."
      }
    ],
    "levelRequirementReason": "This amulet's power is accessible to players who have just begun their journey, allowing them to experiment with its effects without the burden of higher-level requirements.",
    "vendorReason": "The Feywild is known for its strange and wondrous artifacts, and this amulet fits perfectly within that tradition.",
    "shippingDetail": "Due to the delicate nature of the amulet, it requires special handling and may incur a slight delay in delivery.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute or until interrupted",
      "endsWhen": "You take damage or willingly end the effect",
      "charges": "Unlimited"
    },
    "priceReason": "The amulet's rare construction and unique properties justify its price, offering a balance between power and cost.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:25:52.664261+00:00",
    "aiReviewedAt": "2026-07-22T05:25:52.664261+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_fool": {
    "id": "feywild_time_fool",
    "name": "The Fool’s Hourglass",
    "description": "The Fool’s Hourglass stands as a whimsical yet foreboding relic, its glass grains swirling in endless loops instead of marking time. When activated, it traps you within a moment, repeating it for 1d6 rounds until you either escape with a successful DC 15 Wisdom saving throw or are disoriented by the loop's relentless pull. The hourglass is crafted from Feywild quartz and enchanted with a spell that bends reality itself.",
    "price": 1000,
    "icon": "📦",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Moment Loop",
      "Disorientation"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Moment Loop",
        "rules": "Activates as an action, creating a loop of the current moment lasting for 1d6 rounds. During this time, you can attempt to escape using a DC 15 Wisdom saving throw; success breaks the loop. Failure results in disorientation, providing disadvantage on all actions and reactions until the end of your next turn."
      },
      {
        "title": "Disorientation",
        "rules": "If you fail your saving throw, you are disoriented for the duration of the moment loop. This condition provides disadvantage on all ability checks and attack rolls until the end of your next turn. The loop ends either when you succeed in escaping or after 1d6 rounds."
      }
    ],
    "levelRequirementReason": "The Fool’s Hourglass is accessible to lower-level characters, offering a challenge without overwhelming them.",
    "vendorReason": "Feywild traders often sell unique artifacts like the Fool’s Hourglass, as their wares are sought after by adventurers for their magical properties and lore.",
    "shippingDetail": "The hourglass is carefully packaged to prevent any accidental use during shipping. It arrives sealed in a padded box with strict handling instructions.",
    "usage": {
      "activation": "Action",
      "duration": "1d6 rounds or until escaped",
      "endsWhen": "Escape via saving throw or end of 1d6 rounds",
      "charges": "Unlimited"
    },
    "priceReason": "The Fool’s Hourglass is priced at 1000 XP, reflecting its Feywild origin and the magical properties that allow it to manipulate time.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T05:26:13.360806+00:00",
    "aiReviewedAt": "2026-07-22T05:26:13.360806+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_fool_egg": {
    "id": "feywild_time_fool_egg",
    "name": "Time Fool Egg of the Atrium",
    "description": "The Time Fool Egg of the Atrium, a cracked and pulsing relic of the Feywild, exudes an eerie glow that warps space-time. When shattered, it unleashes a burst of wild magic, disorienting foes within its radius and causing them to loop back to their last known location. This egg is as unpredictable as it is powerful, capable of breaking reality for both caster and targets alike; use with caution.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Disorients nearby foes",
      "Teleports target back to their last known position"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Disorientation",
        "rules": "The target becomes disoriented, suffering from 1d4 rounds of confusion. During this time, they are incapacitated and have disadvantage on all attacks and ability checks until the effect ends."
      },
      {
        "title": "Teleportation",
        "rules": "Upon cracking, the egg teleports a creature within 10 feet to their last known position. The target must succeed on a DC 15 Dexterity saving throw or be disoriented for an additional round."
      }
    ],
    "levelRequirementReason": "This item requires at least 3rd level to safely handle its unpredictable nature and wild magic.",
    "vendorReason": "The Feywild, ever attuned to the flow of time and space, has harnessed this egg for its unique properties and dangers.",
    "shippingDetail": "Shipping is handled by Koopa Postal with a three-day delivery delay due to the fragile nature of the item.",
    "usage": {
      "activation": "The egg must be shattered as an action.",
      "duration": "Disorientation lasts for 1d4 rounds, and teleportation occurs immediately upon cracking.",
      "endsWhen": "The effect ends when a successful saving throw is made or after its duration.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item's rare magic and unpredictable nature justify the cost, making it a valuable yet risky tool for adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:26:35.291739+00:00",
    "aiReviewedAt": "2026-07-22T05:26:35.291739+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_forged_ring": {
    "id": "feywild_time_forged_ring",
    "name": "Time Forged Ring",
    "description": "This Time Forged Ring, crafted from ancient Feywild metals and imbued with the essence of time itself, allows its wearer to either rewind or skip 30 seconds of reality. The ring grants a single use per day, but the act is not without consequence: it leaves behind an afterimage of the user's last action, a reminder that the Feywild does not easily forgive those who manipulate time. Use wisely; for in this world, time is both fluid and fragile.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Rewind Time",
      "Skip Time"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Rewind Time",
        "rules": "The wearer can rewind the past 30 seconds of time. This effect is instantaneous, but it leaves a faint afterimage of their last action within a Feywild court or time loop. The use counts against daily charges."
      },
      {
        "title": "Skip Time",
        "rules": "Alternatively, the ring allows the wearer to skip 30 seconds forward in time. This effect is also instantaneous and leaves an identical afterimage. Like Rewind Time, it can only be used within a Feywild court or time loop."
      }
    ],
    "levelRequirementReason": "Only those who have proven their understanding of the temporal nature of reality are allowed to wield this ring.",
    "vendorReason": "The Feywild, ever mindful of its delicate balance, ensures that only those who truly need it can use such a powerful item.",
    "shippingDetail": "Delivery via Koopa's trusted couriers is swift but requires the ring to be enclosed in a specially enchanted pouch to protect it during transit.",
    "usage": {
      "activation": "Action or bonus action",
      "duration": "Instantaneous",
      "endsWhen": "Use of the other effect, exhaustion, or reaching the daily limit of one use",
      "charges": "Daily"
    },
    "priceReason": "The ring's price reflects its epic rarity and the cost of Feywild materials needed to craft it.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T05:26:37.399032+00:00",
    "aiReviewedAt": "2026-07-22T05:26:37.399032+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_frost": {
    "id": "feywild_time_frost",
    "name": "Time Frost",
    "description": "The Time Frost is a crystalline shard with an ethereal blue hue that glows with frozen echoes. Crafted from the pure ice of the Feywild, it can pause time for moments of strategic advantage. Use it to halt an enemy's next action or freeze a short duration battle, but beware—overuse risks trapping you in a temporal loop where confusion, regression, and memory loss may plague your every step.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Pause Enemy Action",
      "Freeze Battle Duration"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Pause Enemy Action",
        "rules": "As an action, you can pause the next attack or ability of a single enemy for 1 round. The effect ends if the enemy is incapacitated."
      },
      {
        "title": "Freeze Battle Duration",
        "rules": "As a bonus action, you can freeze time for up to 2 rounds in a small area (5 feet radius). No movement or spell casting occurs within this time. Ends when time unfreezes at the end of your next turn."
      }
    ],
    "levelRequirementReason": "Requires proficiency with Feywild magic and understanding of temporal mechanics.",
    "vendorReason": "The Feywild is known for its mastery over time and space, thus it's fitting that they sell tools like the Time Frost.",
    "shippingDetail": "Ships via special courier drone directly from the Feywild. Delivery may take up to a week due to magical travel delays.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous or Up to 2 Rounds",
      "endsWhen": "At the end of your next turn, when incapacitated, or if the area is affected by another time-altering effect",
      "charges": "3 charges per day"
    },
    "priceReason": "Balanced at 1000 XP as it offers two powerful but limited temporal effects.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T05:26:13.252663+00:00",
    "aiReviewedAt": "2026-07-22T05:26:13.252663+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_illusion": {
    "id": "feywild_time_illusion",
    "name": "Illusion of the Shifting Hour",
    "description": "The Illusion of the Shifting Hour is a vial of shimmering, time-distorted liquid that tricks the drinker's perception into believing they have traveled through different eras. Each sip conjures vivid memories and sensory experiences from various points in history, making the drinker feel as if they have lived through them. The effect, however, can be disorienting for those not attuned to such magic; it may cause minor hallucinations or confusion.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Time Distortion",
      "Mild Hallucination"
    ],
    "vendor": "feywild",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Time Distortion",
        "rules": "The drinker experiences the illusion of shifting time for a duration of 10 minutes. This effect is passive and does not require an action to activate. The illusion can cause minor disorientation or confusion in those who are not Feywild natives."
      },
      {
        "title": "Mild Hallucination",
        "rules": "There is a chance that the drinker may experience brief hallucinations if they are not prepared for the time distortion effect. These hallucinations last no longer than 1 minute and do not cause any lasting harm."
      }
    ],
    "levelRequirementReason": "This item requires basic magical awareness to use effectively.",
    "vendorReason": "The Feywild natives are adept at manipulating time and can create such illusions without risk to themselves.",
    "shippingDetail": "Ships via the Void Drifter Relay, ensuring safe delivery through the fey realms.",
    "usage": {
      "activation": "Passive effect upon consumption.",
      "duration": "10 minutes",
      "endsWhen": "The time distortion ends after 10 minutes or if the drinker is knocked unconscious.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted from rare Feywild herbs and magical essences, this potion commands a high price in the market.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:26:28.979040+00:00",
    "aiReviewedAt": "2026-07-22T05:26:28.979040+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_lace": {
    "id": "feywild_time_lace",
    "name": "Time Lace",
    "description": "The Time Lace is a shimmering, iridescent thread spun from the very fabric of the Feywild, woven by nature spirits to slow time around its wearer. When donned, it distorts reality for fleeting moments, allowing you to catch the perfect instant—whether dodging an arrow or seizing a moment of clarity in combat. Its threads are said to be as old as the wilds themselves, and those who wear it feel the passage of time slow to a near standstill.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Time Slow",
      "+2 Stealth Bonus"
    ],
    "vendor": "feywild",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Time Slow",
        "rules": "Activating this item causes time around you to slow by 10% for 30 seconds. This effect grants you advantage on Dexterity (Stealth) checks and allows you to move up to your speed without provoking opportunity attacks, but it also leaves you vulnerable to surprise attacks. The effect ends if you take a major action or if an attack hits you."
      },
      {
        "title": "+2 Stealth Bonus",
        "rules": "While wearing the Time Lace, you gain a +2 bonus to Dexterity (Stealth) checks until your next long rest."
      }
    ],
    "levelRequirementReason": "The delicate nature of the Time Lace requires a basic understanding of the Feywild's magic and its effects on time.",
    "vendorReason": "Feywild, as a guardian of the wilds, often deals in items that manipulate the natural world and its magic.",
    "shippingDetail": "The Time Lace is shipped via the Void Drifter Relay, known for its unpredictable but reliable delivery times through the Feywild.",
    "usage": {
      "activation": "reaction",
      "duration": "30 seconds (ends when you take a major action or are hit by an attack)",
      "endsWhen": "you take a major action or are attacked and hit",
      "charges": "unlimited"
    },
    "priceReason": "The Time Lace is crafted from ancient Feywild threads, making it a rare and valuable item that can significantly alter the flow of combat.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T05:26:45.378532+00:00",
    "aiReviewedAt": "2026-07-22T05:26:45.378532+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_loop_amber": {
    "id": "feywild_time_loop_amber",
    "name": "Amber of the Echoing Hour",
    "description": "The Amber of the Echoing Hour is a pulsating, golden sphere that hums with a timeless aura. Crafted from the resin of ancient Feywild trees, it traps time in an eternal loop for 10 minutes. Wielders may either reset the loop to start anew or observe its unfolding, experiencing the same moments over and over. When activated, the amber distorts perception, causing fleeting hallucinations as Fey magic warps reality temporarily.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Traps Time in a Loop",
      "Distorts Perception"
    ],
    "vendor": "feywild",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Time Loop",
        "rules": "Activates with an action. The user can choose to reset the loop or observe it unfold for 10 minutes. During this time, all creatures within 30 feet experience a distorted reality, requiring a DC 15 Wisdom saving throw to avoid confusion and disorientation."
      },
      {
        "title": "Hallucinations",
        "rules": "On exiting the loop, each creature must succeed on a DC 12 Wisdom saving throw or suffer 1d4 levels of confusion. The item has no uses per day and can be activated once."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to wield due to the complex mental discipline needed.",
    "vendorReason": "The Feywild vendors specialize in items that harness the magic of their realm, making this amber sphere a fitting addition to their inventory.",
    "shippingDetail": "Ships under cover of night, ensuring the item arrives undisturbed by mortal eyes.",
    "usage": {
      "activation": "Action",
      "duration": "10 minutes per activation",
      "endsWhen": "The loop is reset or observed to its end; the user may activate it once per long rest",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's rarity and the complexity of its Fey magic.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T19:29:28.080761+00:00",
    "aiReviewedAt": "2026-07-22T19:29:28.080761+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_loop_bell": {
    "id": "feywild_time_loop_bell",
    "name": "Chrono Chime of the Fey Courts",
    "description": "The Chrono Chime of the Fey Courts is a delicate, rune-carved bell encased in a shimmering, ethereal aura. Its chimes are said to be woven from threads of fractured time and the whispers of Fey magic. Struck by an arcanist or bard, this bell grants nearby allies a brief reliving of their most cherished memory, amplifying their resolve and boosting their abilities for a fleeting moment. The chime also creates a 10-second time bubble where time slows, allowing Fey magic to amplify and granting all present the power to manipulate time itself within that span.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Memory Boost",
      "Fey Time Bubble"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Memory Boost",
        "rules": "When activated as an action, this chime grants a nearby ally a brief reliving of their most cherished memory. For the duration of the effect (10 seconds), the target gains advantage on all attack rolls and ability checks until the end of its next turn."
      },
      {
        "title": "Fey Time Bubble",
        "rules": "Upon activation, this chime creates a 10-second time bubble centered around it. During this duration, time slows by 50% for all creatures within 30 feet. Fey magic amplifies, granting all allies within the area a +2 bonus to their AC and saving throws."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to handle the temporal effects without risk.",
    "vendorReason": "The Feywild is the origin of this item, its magic intrinsic and its chime a treasured relic of ancient Fey courts.",
    "shippingDetail": "Ships via special delivery to ensure it arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds per effect",
      "endsWhen": "Effect duration ends or the chime is struck again",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "Balanced to reflect its Fey origin and unique temporal effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:27:00.937901+00:00",
    "aiReviewedAt": "2026-07-22T05:27:00.937901+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_loop_cloak": {
    "id": "feywild_time_loop_cloak",
    "name": "Echo Veil of the Looping Court",
    "description": "The Echo Veil of the Looping Court is a shimmering cloak woven from threads that dance in and out of time itself, its fabric rippling with Feywild magic. By donning this ancient relic, you become entwined with the timeless loops of the court. Once each day, you may rewind one fleeting moment to correct a misstep or retrieve lost items; the veil's weave grants you temporary immunity from the fey curses that plague those who dare to delve into their realms.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Rewind Moment",
      "Immunity to Fey Curses"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rewind Moment",
        "rules": "As an action, you may rewind one moment in time. This allows you to undo a single misstep or recover lost items within the last 24 hours. The effect is instantaneous and cannot be used more than once per day."
      },
      {
        "title": "Immunity to Fey Curses",
        "rules": "While wearing the Echo Veil, you are immune to any fey curse effects that might otherwise afflict you for a period of 8 hours after exposure. This immunity does not protect against other harmful effects."
      }
    ],
    "levelRequirementReason": "The Echo Veil requires at least level 1 to wield, as its magic is subtle yet potent.",
    "vendorReason": "Feywild vendors are well-acquainted with the artifacts of their realm and can provide this relic to those who respect its origins.",
    "shippingDetail": "The Echo Veil is delivered via Lakitu Drone, ensuring swift and safe transport from the Feywild.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use per day",
      "charges": "Uses"
    },
    "priceReason": "The Echo Veil's price reflects its rare materials and the delicate magic woven into its fabric, making it a valuable but not overpowered item.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T05:27:18.668897+00:00",
    "aiReviewedAt": "2026-07-22T05:27:18.668897+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_loop_cloth": {
    "id": "feywild_time_loop_cloth",
    "name": "Time Loop Cloth of the Fey Court",
    "description": "The Time Loop Cloth of the Fey Court weaves together threads from the ever-shifting mists of the Feywild, allowing its wearer to briefly suspend time and test their choices without consequence. When activated, it forms a shimmering, translucent barrier around the user that rewinds time for three rounds, giving them a second chance at pivotal moments. The cloth retains memory of each loop’s outcome, subtly hinting at the best or worst path forward with cryptic messages.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔁",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporal Suspension",
      "Cryptic Outcome"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Suspension",
        "rules": "When activated as a reaction to an event that could have dire consequences, the wearer is briefly suspended in time for three rounds. During this period, they can choose actions without fear of immediate repercussions. At the end of each round, time rewinds, allowing them to undo their choices and try again."
      },
      {
        "title": "Cryptic Outcome",
        "rules": "After each loop ends, the cloth reveals a cryptic message indicating either the best or worst outcome that could have resulted from their actions. This message is vague enough to be interpreted in multiple ways but offers valuable insight into future decisions."
      }
    ],
    "levelRequirementReason": "Requires moderate magical prowess to harness and control the temporal effects of the cloth.",
    "vendorReason": "Feywild is a realm where time itself bends, making them the natural purveyors of such an artifact.",
    "shippingDetail": "Due to its delicate nature and magical properties, the Time Loop Cloth must be couriered by Shy Guy Smugglers to ensure safe delivery through Feywild's unpredictable landscapes.",
    "usage": {
      "activation": "Reaction to an event that could have dire consequences",
      "duration": "Instantaneous (three rounds per use)",
      "endsWhen": "The end of each round, or if the user breaks the loop prematurely",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP as it requires rare materials and intricate Feywild magic to craft.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:27:12.498737+00:00",
    "aiReviewedAt": "2026-07-22T05:27:12.498737+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_loop_core": {
    "id": "feywild_time_loop_core",
    "name": "Time Loop Core Fragment",
    "description": "A Time Loop Core Fragment is a fractured relic from a shattered Feywild temporal court. Crafted from the very fabric of time, it grants the wielder the ability to briefly rewind time within a 10-foot radius, affecting all creatures present. Each use resets the character’s current action and disrupts their timing, causing them to act anew. This fragment also offers a fleeting 30% chance to dodge magical attacks during its effect, making for an unpredictable but potent defensive tool.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Rewind Time",
      "Dodge Chance"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rewind Time",
        "rules": "As a reaction, the wielder can use this fragment to rewind time within a 10-foot radius. This action resets their current action and causes all creatures in range to take a 10-second delay after their next turn. The effect ends if the wielder takes any other action or is incapacitated."
      },
      {
        "title": "Dodge Chance",
        "rules": "While this fragment's effect is active, there is a 30% chance that magical attacks targeting the user are dodged. This chance does not stack with similar abilities and only applies once per turn."
      }
    ],
    "levelRequirementReason": "Wielders of the Time Loop Core Fragment must be at least level 1 to understand its temporal mechanics.",
    "vendorReason": "The Feywild trade in relics and fragments from their realm, including this fragment of a time-woven core.",
    "shippingDetail": "The Shy Guy Smugglers ensure the safe delivery of this fragile relic, often requiring special handling to maintain its integrity during transit.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous effect; ends when another action is taken or the user is incapacitated",
      "endsWhen": "The user takes any other action or becomes incapacitated",
      "charges": "Unlimited, but only one use per short rest"
    },
    "priceReason": "Balanced at 1000 XP, this relic is priced to reflect its unique temporal abilities and the risk involved in handling such a delicate fragment.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T05:27:16.498235+00:00",
    "aiReviewedAt": "2026-07-22T05:27:16.498235+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_loop_feywild_item_name": {
    "id": "feywild_time_loop_feywild_item_name",
    "name": "Looping Lantern",
    "description": "The Looping Lantern is a delicate glass lantern that glows with an otherworldly light. When activated, it weaves a temporal loop within a 10-meter radius for 30 seconds, allowing anyone inside to relive the same moment up to three times. This device has saved many from perilous situations and tested dangerous magic safely. Crafted by the Feywild's artisan guilds, its light is both mesmerizing and essential for any adventurer facing time-sensitive challenges.",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Temporal Loop",
      "Safety within Time"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Create Temporal Loop",
        "rules": "The user must use an action to activate the Lantern. The loop lasts for 30 seconds and covers a 10-meter radius. Any creature inside the loop can re-experience that moment up to three times, allowing them to avoid or correct mistakes without suffering any temporal effects."
      },
      {
        "title": "Safety within Time",
        "rules": "While in the loop, all creatures gain resistance to damage from non-magical attacks. If a creature leaves the loop before its duration ends, they take 1d6 force damage and are disoriented for 1 round. The Lantern can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The temporal mechanics of the Looping Lantern require a basic understanding of time magic.",
    "vendorReason": "Feywild's artisans are renowned for their mastery of time and space, making them the perfect purveyors of this device.",
    "shippingDetail": "Due to its delicate nature, the Lantern must be shipped via Koopa Postal's fastest courier service, ensuring safe delivery within a week.",
    "usage": {
      "activation": "Action",
      "duration": "30 seconds, up to three uses per loop",
      "endsWhen": "The duration ends or the user leaves the loop before its end",
      "charges": "Rechargeable after one long rest"
    },
    "priceReason": "Balanced for a rare item that provides significant tactical advantages without overpowered effects.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T05:27:28.389406+00:00",
    "aiReviewedAt": "2026-07-22T05:27:28.389406+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_loop_key": {
    "id": "feywild_time_loop_key",
    "name": "Key to the Looping Labyrinth",
    "description": "The Key to the Looping Labyrinth is a tarnished iron key embossed with runes of ancient Feywild magic. When inserted into its lock, it activates a 30-second temporal loop that allows the user to re-experience the same moment in time within the Fey court, granting them the chance to make a more strategic choice during their next turn. The key's looping mechanism causes minor temporal instability for one round upon use, disrupting the immediate environment around the user.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔑",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Temporal Loop",
      "Minor Temporal Instability"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Temporal Loop",
        "rules": "The user gains a bonus action to re-experience the same moment in time within the Fey court for up to 30 seconds. During this time, they can make a single decision as if it were their next turn. The loop ends when the user chooses an action or when the duration expires."
      },
      {
        "title": "Minor Temporal Instability",
        "rules": "The key's activation causes minor temporal instability for one round (10 seconds). All creatures within a 10-foot radius must succeed on a DC 13 Dexterity saving throw or be knocked prone. The effect ends if the key is removed from its lock."
      }
    ],
    "levelRequirementReason": "Requires at least 2nd level to manage and benefit from the strategic temporal loop.",
    "vendorReason": "The Feywild vendor, known for their deep connections with Fey magic, carries this key as a specialty item.",
    "shippingDetail": "Ships via Lakitu Drones within the Feywild. Delivery is instantaneous due to Feywild teleportation.",
    "usage": {
      "activation": "Bonus action to insert into lock and trigger loop",
      "duration": "30 seconds or until a decision is made",
      "endsWhen": "User chooses an action, duration expires, or key is removed from lock",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price reflects the item's unique temporal mechanics and limited utility.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:27:32.998830+00:00",
    "aiReviewedAt": "2026-07-22T05:27:32.998830+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_loop_pearl": {
    "id": "feywild_time_loop_pearl",
    "name": "Time Loop Pearl of the Dying Fey",
    "description": "The Time Loop Pearl of the Dying Fey is a shimmering, iridescent pearl that glows faintly in the dark. When worn, it allows its bearer to momentarily escape from an ongoing temporal loop, effectively repeating the last moment before activation for one round. This pearl grants immunity to all time-based effects while active and ensures that each use erases a memory of the last moment, which can be restored with a ritual performed by the Fey Court.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Temporal Repetition",
      "Time Immunity"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Repetition",
        "rules": "Activate as a reaction to an ongoing temporal loop. Lasts for one round, repeating the last moment before activation. Can be triggered once per encounter."
      },
      {
        "title": "Time Immunity",
        "rules": "Grants immunity to all time-based effects while active. Ends when the reaction is used or the duration expires."
      }
    ],
    "levelRequirementReason": "Accessible early on to allow characters to navigate complex temporal events without overpowered abilities.",
    "vendorReason": "The Feywild are known for their mastery of time and space, making them the ideal purveyors of this item.",
    "shippingDetail": "Ships within one week, delivered by Lakitu drones with a slight delay in remote areas.",
    "usage": {
      "activation": "Reaction to an ongoing temporal loop",
      "duration": "One round (6 seconds)",
      "endsWhen": "The reaction is used or the duration expires",
      "charges": "Unlimited uses, but only one per encounter"
    },
    "priceReason": "Balanced for its utility and limited use, this pearl provides significant advantage in navigating temporal anomalies without being overpowered.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T05:27:31.671025+00:00",
    "aiReviewedAt": "2026-07-22T05:27:31.671025+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_loop_rod": {
    "id": "feywild_time_loop_rod",
    "name": "Time Loop Rod of the Fractured Hour",
    "description": "The Time Loop Rod of the Fractured Hour hums with the wild magic of the Feywild, its slender form pulsing like a heartbeat out of sync. When activated, it creates a brief, self-contained loop within a 30-foot radius, freezing time for all but the wielder and any creatures they designate as observers. Within this loop, actions are not only preserved but also replayed in reverse, allowing for meticulous retracing of every step taken. Occasionally, a minor Feywild anomaly appears, disrupting the loop with a whimsical creature or object that vanishes once the rod is deactivated.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Time Loop Creation",
      "Action Replay"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Time Loop Creation",
        "rules": "When activated as an action, the wielder creates a 30-foot radius time loop that lasts for 1 minute. All creatures within the loop are frozen in place except for the wielder and any other creatures they designate as observers. The loop resets to its initial moment upon deactivation."
      },
      {
        "title": "Action Replay",
        "rules": "All actions taken within the time loop are preserved and replayed in reverse once the loop ends, allowing for a meticulous retracing of events. This effect can only be used once per day."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to handle the Feywild magic involved effectively.",
    "vendorReason": "The Feywild is the origin of this rod, and only their vendors can supply such potent magical items.",
    "shippingDetail": "Ships via Lakitu Drones, known for their reliable delivery within the Feywild.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "Upon deactivation by the wielder or when its duration ends",
      "charges": "One-time daily use"
    },
    "priceReason": "The rod's rarity and magical properties justify a price of 2500 XP, reflecting its Feywild origins.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:27:57.016881+00:00",
    "aiReviewedAt": "2026-07-22T05:27:57.016881+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_loop_shard": {
    "id": "feywild_time_loop_shard",
    "name": "Chrono Fey Shard",
    "description": "The Chrono Fey Shard is a shimmering fragment of time, crafted from the ethereal essence of the Feywild. This fractured piece of temporal magic allows its wielder to briefly rewind one round of combat or action, granting them a fleeting moment to correct their mistakes or exploit an enemy's vulnerability. Each use risks disrupting the natural harmony of the Feywild, causing minor temporal glitches that ripple through nearby creatures.",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Rewind Round",
      "Temporal Glitch"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rewind Round",
        "rules": "As an action, you can rewind time for one round (6 seconds). During this period, all attacks and actions made by you or your allies are negated. The effect ends immediately if a creature moves more than 5 feet away from you."
      },
      {
        "title": "Temporal Glitch",
        "rules": "Each use has a 10% chance to cause a minor time loop, affecting either an enemy within 30 feet or yourself. This glitch lasts for 1d4 rounds and imposes disadvantage on all attacks made by the affected target during this period."
      }
    ],
    "levelRequirementReason": "Requires minimal spellcasting ability to harness the shard's temporal power.",
    "vendorReason": "The Feywild vendor is a guardian of time and space, providing items that maintain the balance between worlds.",
    "shippingDetail": "Ships via Koopa Express, ensuring safe delivery through enchanted means.",
    "usage": {
      "activation": "Action",
      "duration": "One round (6 seconds)",
      "endsWhen": "The end of the round or when you move more than 5 feet away from a creature affected by your action.",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "Balanced price considering its limited use and temporal risk.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T05:27:46.153779+00:00",
    "aiReviewedAt": "2026-07-22T05:27:46.153779+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_loop_talisman": {
    "id": "feywild_time_loop_talisman",
    "name": "Loopbreaker Talisman",
    "description": "The Loopbreaker Talisman, a shimmering amulet of ethereal silver, glows with the fractured light of the Feywild when activated. This relic allows its wearer to briefly reverse time, creating a flicker in reality that leaves the world around them disoriented for an instant while the user remains untouched by the temporal reset. Crafted from the remnants of Feywild chronal anomalies, this talisman is said to have been found within the ruins of an ancient clockwork city lost to time itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Rewind Time",
      "Temporal Disorientation"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Rewind Time",
        "rules": "When activated as a reaction, this talisman allows the wearer to rewind 10 seconds of time. This effect creates a brief flicker in reality around the user, causing all creatures within 5 feet to become disoriented for 1 round (as if affected by a *Disorientation* spell). The talisman can only be used once per short or long rest."
      },
      {
        "title": "Temporal Disorientation",
        "rules": "All creatures within 5 feet of the user who witness the time rewind effect must succeed on a DC 13 Constitution saving throw or become disoriented for 1 round. During this time, they have disadvantage on attack rolls and ability checks."
      }
    ],
    "levelRequirementReason": "This talisman requires a minimum level of 5 due to its intricate magical properties and the power it draws from the Feywild.",
    "vendorReason": "The Talismans are often traded by vendors who have connections with the Feywild, as they are seen as powerful yet ethereal artifacts within that realm.",
    "shippingDetail": "Due to its delicate nature and magical properties, this item is shipped via Shy Guy Smugglers, known for their reliable and discreet services in transporting rare and valuable goods.",
    "usage": {
      "activation": "Reaction (used as a reaction to an attack or spell that would harm the wearer)",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the save is successful or after 1 round of disorientation for those affected",
      "charges": "Uses are limited to once per short rest"
    },
    "priceReason": "This price reflects its rare nature, intricate craftsmanship, and the Feywild's influence on its creation.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:30:09.517057+00:00",
    "aiReviewedAt": "2026-07-22T19:30:09.517057+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_loops_feywild_item_name": {
    "id": "feywild_time_loops_feywild_item_name",
    "name": "ChronoFlutter Wing",
    "description": "The ChronoFlutter Wing, a delicate yet sturdy wing made of woven Feywild flora and bound by ancient runes, allows its wearer to briefly reverse time for one full turn cycle. This unique artifact can be used in dire moments to dodge deadly traps or rescue lost companions. However, the power comes with a cost: after each use, all actions are delayed by 10 seconds, risking both perilous mistakes and missed opportunities.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Rewind Time",
      "Temporal Disruption"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Rewind Time",
        "rules": "Activates as a reaction. The wearer can instantly reverse time for one full turn cycle, effectively negating actions and effects from the start of their last action to the moment they triggered this ability. This effect has no range or target; it is personal to the user. A successful DC 15 Wisdom saving throw ends the effect prematurely."
      },
      {
        "title": "Temporal Disruption",
        "rules": "After using Rewind Time, all actions are delayed by 10 seconds for a duration of one minute. This delay affects only the wearer and can be mitigated with a successful DC 15 Dexterity saving throw, reducing the delay to 5 seconds."
      }
    ],
    "levelRequirementReason": "The delicate nature of the wing's Feywild magic requires a certain level of arcane understanding.",
    "vendorReason": "The Feywild's natural affinity for time and magic makes it a logical vendor to stock this rare artifact.",
    "shippingDetail": "Delivered with special care, the ChronoFlutter Wing is sent via Koopa Postal's fastest couriers, ensuring it reaches its destination in pristine condition.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous for Rewind Time; one minute of delayed actions after use",
      "endsWhen": "A successful DC 15 Wisdom saving throw ends the effect prematurely or when a new action is initiated normally, ending the delay.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The delicate craftsmanship and Feywild magic required to create this item justify its moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:28:06.013763+00:00",
    "aiReviewedAt": "2026-07-22T05:28:06.013763+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_mender_amulet": {
    "id": "feywild_time_mender_amulet",
    "name": "Mender of the Fractured Hour",
    "description": "The Mender of the Fractured Hour, a golden amulet with enigmatic runes that shimmer like starlight, allows its wearer to repair temporal distortions and stabilize reality's weave. Crafted by the Feywild's timekeepers from ancient gold mined beneath the roots of time itself, this amulet grants temporary immunity to any time-based effect. Upon activation, it restores one loop of fractured time, sealing away the instability that threatens the fabric of existence.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Temporal Restoration",
      "Immunity to Time-Based Effects"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Restoration",
        "rules": "Activates as a bonus action. Restores one loop of fractured time, reducing temporal instability by 1. This effect has no cooldown and can be used once per long rest."
      },
      {
        "title": "Immunity to Time-Based Effects",
        "rules": "Grants the wearer immunity to any time-based damage or effects for a duration of 1 minute. This immunity ends early if the wearer is subjected to another time-based effect that would normally apply during this period."
      }
    ],
    "levelRequirementReason": "The amulet's intricate runes and its ability to manipulate temporal mechanics make it too complex for lower-level characters.",
    "vendorReason": "Only the Feywild, with their deep understanding of time and space, can craft such a delicate and powerful artifact.",
    "shippingDetail": "The Mender is shipped through the Veil's Whisper, ensuring safe passage from the Feywild to adventurers eager for its power.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute per use",
      "endsWhen": "Exhausted after one use or when subjected to another time-based effect during that duration",
      "charges": "Unlimited"
    },
    "priceReason": "Crafting the amulet requires rare Feywild gold and access to ancient, arcane knowledge, making it a valuable and sought-after item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:28:24.871545+00:00",
    "aiReviewedAt": "2026-07-22T05:28:24.871545+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_sand": {
    "id": "feywild_time_sand",
    "name": "Chrono Sand of the Fey Loops",
    "description": "The Chrono Sand of the Fey Loops shimmers like starlight in a glass vial, its particles shifting between hues of twilight and dawn. Pour it upon the ground to create a localized time loop, halting the passage of seconds for all within range. The sand's magic weaves an intricate web, resetting the timeline to just before the last action taken by any creature nearby. Use this with caution, as the delicate balance of time can easily unravel if mishandled.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporal Reset",
      "Time Loop"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporal Reset",
        "rules": "When poured onto a flat surface within 10 feet, the Chrono Sand creates a time loop. All creatures in a 5-foot radius are subjected to a 10-minute period where time is halted. During this time, actions taken by any creature are undone until the sand dissipates."
      },
      {
        "title": "Time Loop",
        "rules": "Using an action, you can pour the Chrono Sand into a container or on the ground within 10 feet to activate its effect. The duration is instantaneous, and the sand ceases to function once it has been used. There are no limits to the number of uses."
      }
    ],
    "levelRequirementReason": "This item requires a caster level of at least 3 to effectively manipulate the temporal effects without causing unintended consequences.",
    "vendorReason": "The Feywild creatures have a deep understanding and connection with time, making them the perfect stewards of such an artifact.",
    "shippingDetail": "Due to its delicate nature, Chrono Sand must be shipped in specially insulated containers to prevent premature activation during transit.",
    "usage": {
      "activation": "Action (1 use per day)",
      "duration": "Instantaneous",
      "endsWhen": "Once used or destroyed by the environment",
      "charges": "Unlimited uses"
    },
    "priceReason": "The sand's rarity and the delicate magic required to craft it justify a price of 1,000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:28:38.443434+00:00",
    "aiReviewedAt": "2026-07-22T05:28:38.443434+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_scarf": {
    "id": "feywild_time_scarf",
    "name": "Scarf of the Wandering Hour",
    "description": "The Scarf of the Wandering Hour is woven from threads spun by forgotten fey hands, each loop a relic of time’s passage. When you wear it, time itself seems to falter within a ten-foot radius, allowing you to slip through temporal traps and avoid fey illusions with ease. The fabric hums faintly as it temporarily halts the flow of seconds, but be wary—any movement during this pause risks disrupting the spell's weave and causing a brief, disorienting stutter in time.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Temporal Stasis",
      "Fatigue"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporal Stasis",
        "rules": "As an action, you can activate the scarf to pause time within a ten-foot radius for thirty seconds. You must remain still during this effect; any movement causes the spell's weave to unravel, resulting in a brief disorientation that lasts until your next turn."
      },
      {
        "title": "Fatigue",
        "rules": "After using the scarf, you experience mild fatigue. If you fail a Constitution saving throw (DC 15), you are incapacitated for one hour. This effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "The intricate weaving of time and fey magic requires a moderate understanding of temporal lore.",
    "vendorReason": "Feywild traders, masters of time and illusion, often carry this relic in their wares.",
    "shippingDetail": "The scarf is wrapped in a protective layer of enchanted silk to preserve its delicate magic during transit.",
    "usage": {
      "activation": "Action",
      "duration": "30 seconds (instantaneous effect)",
      "endsWhen": "Movement or disorientation causes the spell to unravel, reverting time within the radius for one round.",
      "charges": "1 use per long rest"
    },
    "priceReason": "The scarf's rarity and intricate crafting make it a valuable, though not overpowered, addition to any adventurer’s arsenal.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:28:33.446692+00:00",
    "aiReviewedAt": "2026-07-22T05:28:33.446692+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_spiral_amber": {
    "id": "feywild_time_spiral_amber",
    "name": "Time Spiral Amber",
    "description": "Time Spiral Amber glows with a fractured chronal light, its facets shifting and rearranging like the very fabric of time itself. This relic allows the wielder to briefly rewind a moment in time, perfect for avoiding perilous traps or correcting missteps that could have dire consequences. When activated, the user is momentarily immune to all magical effects for 10 seconds, allowing them to focus on their next move with unshaken resolve.",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Rewind Time",
      "Magical Immunity"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rewind Time",
        "rules": "As a reaction, the wielder can rewind time for 1 second upon activation. This effect allows them to correct a misstep or avoid an immediate threat. The user is immune to all magical effects for 10 seconds after activation."
      },
      {
        "title": "Magical Immunity",
        "rules": "For 10 seconds following the activation, the wielder gains immunity to all magical effects. This includes spells and abilities that would otherwise affect them during this window. The effect cannot be extended or stacked with other similar immunities."
      }
    ],
    "levelRequirementReason": "The Time Spiral Amber requires a minimum level of 1 due to its complex chronal mechanics.",
    "vendorReason": "Feywild, known for their mastery of time and space, ensures that this relic is available only to those who can appreciate its delicate balance between past and future.",
    "shippingDetail": "The amber is delivered via Lakitu Drones, ensuring it reaches its destination swiftly and intact through the Feywild's twisting paths.",
    "usage": {
      "activation": "Reaction (as a reaction to an immediate threat)",
      "duration": "10 seconds of immunity following activation",
      "endsWhen": "The effect ends when the duration expires or if the user takes any action that would break the effect",
      "charges": "Unlimited, as long as the user has not taken actions that end the effect"
    },
    "priceReason": "This relic's balanced price of 1000 XP reflects its unique properties and the complexity involved in crafting such a delicate chronal artifact.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T05:28:53.976966+00:00",
    "aiReviewedAt": "2026-07-22T05:28:53.976966+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_tangle": {
    "id": "feywild_time_tangle",
    "name": "Time Tangle",
    "description": "The Time Tangle is a delicate knot of Feywild threads that weaves together the fabric of time. Crafted from the essence of forgotten feasts and ancient memories, it allows you to manipulate moments with a flick of your wrist. With each use, you can either rewind time by one minute, escaping imminent danger or retrieving lost items, or fast-forward through mundane tasks like preparing for an event. The effects are unpredictable but always intriguing, leaving you with a lingering sense of the past and future.",
    "price": 1000,
    "icon": "📦",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Rewind Time",
      "Temporal Disorientation"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rewind Time",
        "rules": "As a bonus action, you can rewind time by one minute. This allows you to escape imminent danger or recover lost items within the past minute. The effect is instantaneous and does not require an action on your part after using it."
      },
      {
        "title": "Temporal Disorientation",
        "rules": "For 1 hour, there is a 20% chance that creatures nearby experience minor temporal disorientation when you use this item. This can be resisted with a DC 14 Wisdom saving throw. Creatures who fail are incapacitated for the duration of their next short rest."
      }
    ],
    "levelRequirementReason": "This level requirement ensures that even low-level characters have access to the unpredictable yet fascinating nature of time manipulation.",
    "vendorReason": "The Feywild is known for its whimsical and magical items, making it the perfect home for a Time Tangle.",
    "shippingDetail": "Due to the delicate nature of the item, it is shipped via Koopa Postal's express service with an additional delay of one week.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous for Rewind Time; 1 hour for Temporal Disorientation",
      "endsWhen": "The effect ends when the duration expires or you use it again, whichever comes first. The charges are limited to one per session.",
      "charges": "One charge per session"
    },
    "priceReason": "The price reflects the item's unique and unpredictable nature, balancing its power with a fair cost.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T05:28:49.851056+00:00",
    "aiReviewedAt": "2026-07-22T05:28:49.851056+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_tangle_flask": {
    "id": "feywild_time_tangle_flask",
    "name": "Time Tangle Flask",
    "description": "The Time Tangle Flask is a fragile vial of Feywild magic, its glass swirling with luminescent threads that whisper of forgotten times and alternate realities. When shaken, it fractures reality itself, rewinding memory by three seconds for the wielder. Users report moments of disorientation as their perception adjusts to the new timeline, but the effect fades after a round, leaving them momentarily confused. Caution is advised; repeated use can trigger a temporal loop, trapping the user in a never-ending cycle of memories and events.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Rewinds Time for 3 Seconds",
      "Temporal Disorientation"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rewind Time by 3 Seconds",
        "rules": "The wielder's immediate past is rewritten, as if they had just experienced three seconds of their life over again. This effect ends after 1 round."
      },
      {
        "title": "Temporal Disorientation",
        "rules": "For the duration of 1 round, the user suffers from a brief period of confusion and disorientation, reducing their ability to react effectively in combat or complex tasks."
      }
    ],
    "levelRequirementReason": "The Time Tangle Flask is accessible to lower-level characters as it requires no special training but great caution.",
    "vendorReason": "Feywild, a master of arcane and temporal magic, offers the Time Tangle Flask as one of their most intriguing wares, suitable for both novices and veterans alike.",
    "shippingDetail": "The flask is carefully packed in a protective foam-lined box to ensure it arrives intact. Delivery may take longer due to the delicate nature of the item.",
    "usage": {
      "activation": "Action",
      "duration": "1 round after activation",
      "endsWhen": "After 1 round or if the user takes any action other than a free object interaction",
      "charges": "Unlimited, but only one use per long rest"
    },
    "priceReason": "The Time Tangle Flask is priced at 1000 XP due to its rare Feywild origin and the complex magic required to produce it.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:29:07.597887+00:00",
    "aiReviewedAt": "2026-07-22T05:29:07.597887+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_tangled_bra": {
    "id": "feywild_time_tangled_bra",
    "name": "Time Tangled Bra",
    "description": "The Time Tangled Bra, woven from the very threads of fractured chronology, is a delicate yet sturdy garment that warps time around its wearer. Each heartbeat pulses with the potential for shifting realities, creating brief but potent loops where moments repeat or diverge. This bra grants the wearer +20% chance to dodge enemy attacks during these time-altered instants and allows them to exploit fleeting opportunities by briefly glimpsing parallel moments.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporal Dodging",
      "Parallel Glimpses"
    ],
    "vendor": "feywild",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Dodging",
        "rules": "Whenever the wearer is targeted by an attack, they can use a reaction to gain a +20% chance to dodge. This effect lasts for 1 round and can be used once per short or long rest."
      },
      {
        "title": "Parallel Glimpses",
        "rules": "Upon each heartbeat, there is a 10% chance that the wearer will experience a brief time loop where they see a parallel moment. This effect lasts for 1 round and can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The complex weave of this bra requires a character to have a solid grasp of chronal magic, making it suitable only for those of at least fifth level.",
    "vendorReason": "Feywild is the birthplace of all things that bend reality, and thus they are the natural purveyors of this time-warping bra.",
    "shippingDetail": "Delivered via a Rakasha spirit courier, the Time Tangled Bra arrives wrapped in enigmatic symbols that ensure its arrival is both swift and secure.",
    "usage": {
      "activation": "Instantaneous (can be used as a reaction to dodge attacks or when a heartbeat occurs)",
      "duration": "1 round per use",
      "endsWhen": "The effect ends at the start of the wearer’s next turn, or if they are no longer targeted by an attack during a dodge attempt.",
      "charges": "Unlimited (rests restore any expended uses)"
    },
    "priceReason": "Crafted from rare materials and requiring mastery-level spellcasting to weave, the Time Tangled Bra is priced accordingly.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:29:16.895396+00:00",
    "aiReviewedAt": "2026-07-22T05:29:16.895396+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_tapestry": {
    "id": "feywild_time_tapestry",
    "name": "Time Tapestry of the Fey Courts",
    "description": "The Time Tapestry of the Fey Courts is a delicate, shimmering cloth woven from threads of starlight and mist. Unroll it to create a temporal rift within a 10-foot radius, allowing you to pause time for fleeting moments or ensnare foes in loops that stretch and contract with the fabric's own magic. Beware, for the tapestry can trigger unpredictable time fractures, causing temporary blindness in those who dare to cross its boundaries.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Pause Time",
      "Trap Foes"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Pause Time",
        "rules": "As a reaction, you may pause time within a 10-foot radius for 5 seconds. During this time, all creatures and effects are frozen in place. This effect can be used once per long rest."
      },
      {
        "title": "Trap Foes",
        "rules": "There is a 30% chance that any creature you pause with the Time Tapestry will become trapped in a temporal loop for 1 minute, unable to move or act normally. This effect can be used once per short rest."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 5 due to its complex magical properties and the risk involved in using its effects.",
    "vendorReason": "Only the Feywild, with their deep connection to the fabric of time itself, can craft such intricate and powerful tapestries.",
    "shippingDetail": "The tapestry is carefully folded into a compact case for safe delivery by Lakitu Drones, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Reaction to pause time; once per long rest",
      "duration": "5 seconds of paused time",
      "endsWhen": "Time resumes when the effect duration ends or you are incapacitated",
      "charges": "Once per long rest"
    },
    "priceReason": "The Time Tapestry's rare crafting materials and intricate design justify its moderate price of 1000 XP.",
    "priceOriginal": 2700,
    "priceReviewedAt": "2026-07-22T05:29:21.702030+00:00",
    "aiReviewedAt": "2026-07-22T05:29:21.702030+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_warp_pearl": {
    "id": "feywild_time_warp_pearl",
    "name": "Time Warp Pearl",
    "description": "The Time Warp Pearl is a shimmering, cold orb with shifting colors that hint at fleeting moments of time. Crafted in the Feywild by the Wee Folk, this rare artifact allows you to briefly rewind a moment of your own choosing—only if the event was initiated by your conscious decision. The effect lasts for 10 seconds and can cause temporary disorientation if overused, leading to confusion checks on your next action.",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Rewind Time",
      "Temporary Disorientation"
    ],
    "vendor": "feywild",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Rewind Time",
        "rules": "You may use this as an action to rewind a moment of your own choosing, but only if the event was triggered by a conscious decision. The effect lasts for 10 seconds and can be used once per day."
      },
      {
        "title": "Temporary Disorientation",
        "rules": "If you use the Time Warp Pearl more than once in a week, you must succeed on a DC 12 Constitution saving throw or suffer 1d4 confusion checks on your next action. This effect ends when you complete a long rest."
      }
    ],
    "levelRequirementReason": "Requires enough experience to navigate the consequences of time manipulation.",
    "vendorReason": "The Feywild Wee Folk craft these pearls and share them with those who respect their customs.",
    "shippingDetail": "Ships via a Rakasha Spirit, delivering the pearl within one day of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds",
      "endsWhen": "Ends upon completion of its duration or if used again before completing a long rest.",
      "charges": "Once per day"
    },
    "priceReason": "Balanced to reflect the item's Feywild craftsmanship and limited daily use.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T05:29:06.400357+00:00",
    "aiReviewedAt": "2026-07-22T05:29:06.400357+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_warp_satchel": {
    "id": "feywild_time_warp_satchel",
    "name": "Time Warp Satchel",
    "description": "The Time Warp Satchel is a misshapen leather pouch adorned with intricate threads of fractured time, each thread shimmering with a different hue. When activated, it allows its bearer to rewind their actions for the last 30 seconds, perfect for dodging fey traps or reversing bad rolls. A faint glow emits from the satchel as it distorts space around you, creating a temporary aura that has a 10% chance of causing an opponent's next attack to miss. After use, the satchel vanishes unless recharged with a Fey token found deep within the Feywild.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Rewind last 30 seconds of actions",
      "Temporary time distortion aura"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rewind Last 30 Seconds of Actions",
        "rules": "As an action, you can rewind your actions for the last 30 seconds. This allows you to correct a bad roll or dodge an attack. The effect lasts until the start of your next turn. You cannot use this ability again within 1 minute."
      },
      {
        "title": "Temporary Time Distortion Aura",
        "rules": "For every 5 feet around you, there is a 10% chance that any creature's next attack roll against you has advantage on the roll. This effect lasts for 1 round after activation and cannot be used more than once per day."
      }
    ],
    "levelRequirementReason": "Beginners can still use this satchel to save them from precarious situations without needing high levels.",
    "vendorReason": "The Feywild natives are skilled in crafting items that interact with the fabric of time, making it a fitting vendor for such an artifact.",
    "shippingDetail": "Delivered by the mischievous Shy Guys, known to occasionally leave gifts or small tokens at your doorstep as part of their delivery service.",
    "usage": {
      "activation": "Action",
      "duration": "Until start of next turn",
      "endsWhen": "Starts of next turn or use limit reached",
      "charges": "Unlimited, but only one use per day"
    },
    "priceReason": "The satchel's rarity and unique time-manipulating abilities justify its price, offering a balance between cost and utility.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:29:26.688643+00:00",
    "aiReviewedAt": "2026-07-22T05:29:26.688643+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_warp_sword": {
    "id": "feywild_time_warp_sword",
    "name": "Blade of the Unwritten Hour",
    "description": "The Blade of the Unwritten Hour is a sword forged from the very threads of time, its fractured metal shimmering with the light of forgotten futures. Each swing may shatter one temporal loop within reach, creating a ripple in the fabric of reality. The wielder gains fleeting glimpses into what might come, but these visions are fragile—once the next event occurs, they vanish. Should the blade strike something magical, it redirects that magic for 1 round, nullifying its effects on the battlefield.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Shatters a temporal loop",
      "Redirects magic"
    ],
    "vendor": "feywild",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporal Shatter",
        "rules": "When you attack with this sword and hit, you can attempt to shatter one temporal loop within 5 feet of the target. This effect lasts until the start of your next turn or until a creature moves into that space."
      },
      {
        "title": "Magical Redirect",
        "rules": "If the blade strikes something with magical effects, those effects are redirected for 1 round. Any creature within 5 feet must succeed on a DC 14 Dexterity saving throw or take half damage from the redirected magic."
      }
    ],
    "levelRequirementReason": "The sword's temporal manipulation requires a greater understanding of time and its complexities.",
    "vendorReason": "The feywild, with their deep connection to nature and the elements, are adept at creating such delicate yet powerful artifacts.",
    "shippingDetail": "Delivered by spectral couriers that may require a night or two to reach your location.",
    "usage": {
      "activation": "On attack",
      "duration": "Instantaneous, lasts until the start of next turn or when a creature moves into its space",
      "endsWhen": "The next round starts or a creature moves into the area",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as it requires significant skill to wield and manipulate time without causing unintended consequences.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T05:29:24.344870+00:00",
    "aiReviewedAt": "2026-07-22T05:29:24.344870+00:00",
    "aiReviewVersion": 1
  },
  "feywild_time_woven_cloak": {
    "id": "feywild_time_woven_cloak",
    "name": "Time Woven Cloak",
    "description": "The Time Woven Cloak is a mysterious garment made from threads of forgotten time and loops of Feywild. When donned, it allows its wearer to pause reality for one round, freezing all movement and actions around them. However, this comes at the cost of losing one random memory from their most recent encounter. In the Court of Loops, it reveals hidden exits and escape routes that are otherwise concealed by time's illusion.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧵",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Time Freeze",
      "Memory Loss"
    ],
    "vendor": "feywild",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Time Freeze",
        "rules": "The wearer can activate this ability as a reaction to pause all movement and actions for one round. The effect ends when the round concludes, and it can only be used once per short or long rest."
      },
      {
        "title": "Memory Loss",
        "rules": "As a consequence of using Time Freeze, the wearer loses 1d6 random memories from their last encounter with a save DC of 14. On a successful saving throw, they lose only half as many (rounded down)."
      }
    ],
    "levelRequirementReason": "This cloak's power requires a moderate level to control its effects without causing unintended consequences.",
    "vendorReason": "The Feywild recognizes the delicate balance this item maintains with time and memory, making it an exclusive offering.",
    "shippingDetail": "Ships within a week via supernatural courier; delivery is swift but discreet.",
    "usage": {
      "activation": "Reaction",
      "duration": "One round",
      "endsWhen": "Ends when the round concludes or if the wearer takes any action other than resting",
      "charges": "Unlimited, recharges after a short or long rest"
    },
    "priceReason": "The cloak's rarity and utility justify its moderate price in XP.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T05:29:32.218426+00:00",
    "aiReviewedAt": "2026-07-22T05:29:32.218426+00:00",
    "aiReviewVersion": 1
  },
  "feywild_timebloom_flask": {
    "id": "feywild_timebloom_flask",
    "name": "Timebloom Flask",
    "description": "The Timebloom Flask holds a fragment of Faerie time, crafted from dew captured during a fleeting dance in the Feywild. Its cork pulses with hues that reflect the temporal cost of its power: a moment rewound or fast-forwarded, it can turn back the clock on an action. Yet, each use leaves behind a minor ripple, altering reality in unpredictable ways. This wondrous relic is limited to one use per day, as the magic is drawn from the very fabric of time itself.",
    "price": 2500,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Rewinds Time",
      "Temporal Ripple"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Rewinds Time",
        "rules": "As an action, you can rewind a moment by up to 10 seconds. This resets one recent action of your choice, including attacks and spellcasting. The cork glows with the color of the time you rewound. You may only use this ability once per day."
      },
      {
        "title": "Temporal Ripple",
        "rules": "Upon using the Timebloom Flask, there is a 50% chance that a minor temporal ripple occurs, altering reality in an unpredictable way. This could include a creature or object moving backward or forward in time by up to 1 second. The effect ends immediately."
      }
    ],
    "levelRequirementReason": "The delicate magic of the Timebloom Flask requires a certain familiarity with temporal mechanics.",
    "vendorReason": "Only the Feywild's artisans can harness and contain such potent time magic in a flask.",
    "shippingDetail": "The Shy Guy Smugglers ensure the flask is delivered swiftly, as its temporal effects are unpredictable during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Charges are exhausted or one use per day limit is reached",
      "charges": "1 use per day"
    },
    "priceReason": "The Timebloom Flask's rarity and the delicate magic required to craft it justify its higher price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:30:05.892587+00:00",
    "aiReviewedAt": "2026-07-22T05:30:05.892587+00:00",
    "aiReviewVersion": 1
  },
  "feywild_timestream_amber": {
    "id": "feywild_timestream_amber",
    "name": "Timestream Amber",
    "description": "Timestream Amber is a pulsating, amber-hued orb that feels as solid as time itself. When activated, it briefly freezes reality around its bearer for exactly three seconds, allowing them to witness a moment of perfect stillness in the chaotic flow of time. Upon being struck by a magical weapon, it shatters into shards that reveal a random memory from the wielder’s past, often one they thought long forgotten. These shards can linger as anomalies in the environment until dismissed or disrupted.",
    "price": 1000,
    "icon": "🕰",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Temporal freeze",
      "Reveal past memory"
    ],
    "vendor": "feywild",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Freeze",
        "rules": "When activated as a reaction to an attack, this item freezes time around its bearer for three seconds. No actions can be taken by the bearer or others during this period. The effect ends when the freeze duration expires."
      },
      {
        "title": "Memory Revelation",
        "rules": "Upon being struck by a magical weapon while active, Timestream Amber shatters into shards that reveal a random memory from the attacker’s past. This memory is revealed in vivid detail and lasts until dismissed or interrupted."
      }
    ],
    "levelRequirementReason": "The item's power requires minimal dexterity to activate but still offers significant utility.",
    "vendorReason": "Feywild has a deep connection with the temporal planes and often sells items that interact with time in various ways.",
    "shippingDetail": "Delivered via Pipe Express, which ensures safe passage through Feywild's shifting terrain.",
    "usage": {
      "activation": "Reaction to an attack",
      "duration": "3 seconds",
      "endsWhen": "Effect duration expires or the item is struck by a magical weapon",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects its rare rarity and utility in both combat and exploration.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T05:29:52.099245+00:00",
    "aiReviewedAt": "2026-07-22T05:29:52.099245+00:00",
    "aiReviewVersion": 1
  },
  "feywild_toad_tongue_crown": {
    "id": "feywild_toad_tongue_crown",
    "name": "Toad Tongue Crown",
    "description": "The Toad Tongue Crown is a regal artifact forged from the petrified remains of a Toad King's courtier. Its golden surface glimmers with an ethereal light, and its intricate carvings depict scenes of whispered secrets. When worn, it allows you to mimic any spirit’s voice, granting access to the Toad King’s council. However, each use compels the wearer to speak the truth, no matter how painful or incriminating. The crown's glow intensifies when deception is detected, warning both friend and foe of foul play.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐸",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Mimics voices",
      "Forces truth-telling"
    ],
    "vendor": "feywild",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Voice Mimicry",
        "rules": "Activate as a bonus action. The crown allows you to mimic the voice of any trapped spirit within range (30 feet). You can use it up to three times per long rest."
      },
      {
        "title": "Truth Compulsion",
        "rules": "While mimicking a voice, you must speak the truth for 1 minute. Any attempt at deception triggers an immediate saving throw against your Wisdom saving throw DC (15 + your Intelligence modifier). Failure results in the speaker being compelled to speak the truth."
      }
    ],
    "levelRequirementReason": "This crown is designed for those who have proven their worth and trustworthiness, as it requires a level of at least 7 to wield its power without succumbing to its effects.",
    "vendorReason": "The Feywild vendors are the only ones with the necessary connections to craft such an artifact and ensure its proper use in the realm’s delicate balance of power.",
    "shippingDetail": "Ships via a shadowy courier, ensuring secrecy and safe delivery within one week.",
    "usage": {
      "activation": "Bonus action to activate voice mimicry; no activation required for truth compulsion",
      "duration": "Instantaneous voice mimicry; 1 minute of truth compulsion per use",
      "endsWhen": "Use ends when the mimicry is canceled or the effect's duration expires",
      "charges": "3 uses, recharged after a long rest"
    },
    "priceReason": "Crafted from rare Toad King materials and imbued with powerful Feywild magic, this crown is priced to reflect its unique and valuable properties.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T05:29:42.713908+00:00",
    "aiReviewedAt": "2026-07-22T05:29:42.713908+00:00",
    "aiReviewVersion": 1
  },
  "feywild_toad_treasure_sack": {
    "id": "feywild_toad_treasure_sack",
    "name": "Toad Treasure Sack",
    "description": "The Toad Treasure Sack is a small, leather pouch adorned with intricate toad motifs and infused with Feywild magic. It reveals hidden caches of treasure in toad territory and grants temporary invisibility to its wearer. A secret mechanism within the sack triggers a 2d6 bonus on any attempt to deceive or manipulate creatures associated with toads. However, if used during a toad uprising, it is cursed, forcing the wearer to be mistaken for a toad slave until released by a successful DC 15 Wisdom (Insight) check.",
    "price": 1000,
    "icon": "🐸",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Reveals Hidden Treasure",
      "Invisibility and Deception"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveals Hidden Treasure",
        "rules": "The wearer can take an action to activate the sack, which then reveals any hidden caches of treasure within a 30-foot radius. This effect lasts until the end of the wearer's next turn."
      },
      {
        "title": "Invisibility and Deception",
        "rules": "Activating this effect grants the wearer temporary invisibility for 1 minute or until the wearer attacks, casts a spell, or willingly ends it. During this time, the wearer can use an action to make one successful Wisdom (Deception) check against any creature within 30 feet."
      }
    ],
    "levelRequirementReason": "The Toad Treasure Sack is crafted for adventurers just starting their journey in Feywild.",
    "vendorReason": "Feywild vendors are well-acquainted with the mystical treasures and secrets of toad territory.",
    "shippingDetail": "Ships via Koopa Pony Express, delivery within one week.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous reveal; Invisibility lasts for 1 minute or until the wearer attacks, casts a spell, or willingly ends it. Deception check lasts until the end of the next turn.",
      "endsWhen": "The wearer attacks, casts a spell, or willingly ends either effect.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Toad Treasure Sack is crafted from rare Feywild leather and infused with powerful toad magic, balancing its utility against a reasonable price.",
    "priceOriginal": 500,
    "priceReviewedAt": "2026-07-22T05:29:47.694263+00:00",
    "aiReviewedAt": "2026-07-22T05:29:47.694263+00:00",
    "aiReviewVersion": 1
  },
  "feywild_toadette_talisman": {
    "id": "feywild_toadette_talisman",
    "name": "Toadette Talisman",
    "description": "The Toadette Talisman is a whimsical charm made from enchanted toadstone and Feywild moss, crafted by the whimsical folk of the fae realm. This trinket grants its bearer a +2d4 bonus on all Dexterity saving throws and checks, as well as causing minor giggles or distractions that hinder enemies within 30 feet for up to 1 round. The talisman can also be used to unlock hidden paths in the labyrinthine mazes of Feywild.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐸",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Luck Boost",
      "Giggling Distractions"
    ],
    "vendor": "feywild",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Luck Boost",
        "rules": "Activates as a bonus action, providing a +2d4 bonus on all Dexterity saving throws and checks. This effect lasts until the start of your next turn."
      },
      {
        "title": "Giggling Distractions",
        "rules": "Can be used once per short or long rest to cause minor distractions within 30 feet, causing each creature there to make a Wisdom saving throw (DC 12) or become distracted for up to 1 round. Creatures that succeed on the save are unaffected."
      }
    ],
    "levelRequirementReason": "The talisman's effects are subtle but useful early in an adventuring career.",
    "vendorReason": "Only known to be sold by the fae merchants of the Feywild, who often trade in mystical trinkets and relics.",
    "shippingDetail": "Ships via Warp Whistle Transit, known for its swift but unpredictable deliveries through the Feywild's shifting mists.",
    "usage": {
      "activation": "Bonus action or once per short/long rest",
      "duration": "Until start of next turn (Luck Boost), up to 1 round (Giggling Distractions)",
      "endsWhen": "Ends when your next turn begins or the distraction ends",
      "charges": "Unlimited, recharged after a long rest"
    },
    "priceReason": "The talisman's balance is adjusted to reflect its limited but useful effects and Feywild origins.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T05:29:58.539144+00:00",
    "aiReviewedAt": "2026-07-22T05:29:58.539144+00:00",
    "aiReviewVersion": 1
  },
  "feywild_transport_item": {
    "id": "feywild_transport_item",
    "name": "Warp Whistle Transit Key",
    "description": "The Warp Whistle Transit Key is a delicate brass key adorned with intricate Feywild runes and a silver whistle, said to have been crafted by the Pony Nobility in collaboration with the fey. Activating it opens a shimmering portal that transports you between the vibrant forests of the Feywild and the whimsical landscapes of the Valley of Bowser, where time flows differently. The journey is swift but disorienting, leaving travelers slightly confused upon arrival.",
    "price": 1000,
    "icon": "📡",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Interdimensional Travel",
      "Disorientation"
    ],
    "vendor": "feywild",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Interdimensional Travel",
        "rules": "Activating the key requires a bonus action and costs 10 charges. The user is transported to either the Feywild or the Valley of Bowser, as determined by the key's whimsical nature. The duration is instantaneous but the traveler experiences disorientation for up to one minute upon arrival."
      },
      {
        "title": "Disorientation",
        "rules": "The user must succeed on a Wisdom saving throw (DC 12) or be stunned until the end of their next turn, unable to take actions. This effect ends if the user successfully moves at least 10 feet in any direction."
      }
    ],
    "levelRequirementReason": "Traveling between dimensions requires a solid understanding of both realms.",
    "vendorReason": "The key is a product of the collaboration between the Pony Nobility and the fey, making it uniquely available from them.",
    "shippingDetail": "Transit times vary as the destination realm can change unpredictably. Travelers should be prepared for delays.",
    "usage": {
      "activation": "Bonus action to activate and transport between realms.",
      "duration": "Instantaneous travel; disorientation lasts up to one minute.",
      "endsWhen": "The user successfully moves at least 10 feet or completes the journey.",
      "charges": "Unlimited, but requires a bonus action each use."
    },
    "priceReason": "The key's rarity and unique interdimensional capabilities justify its moderate cost in XP.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T05:30:44.172031+00:00",
    "aiReviewedAt": "2026-07-22T05:30:44.172031+00:00",
    "aiReviewVersion": 1
  },
  "feywild_treasure_hunter_charm": {
    "id": "feywild_treasure_hunter_charm",
    "name": "Feywild Treasure Hunter Charm (Luck)",
    "description": "The Feywild Treasure Hunter Charm (Luck) is a delicate, glowing amulet made from the polished bones of Luck Sprites and enchanted with the essence of hidden fey treasures. It not only increases your luck in finding secret caches but also grants you a sixth sense to detect traps before they activate. This charm has been known to alert its bearer to dangers lurking beneath the earth’s surface, making it an indispensable companion for any brave adventurer seeking fortune in the Feywild.",
    "price": 1000,
    "icon": "🍀",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "+20 to treasure detection rolls",
      "Alerts to traps"
    ],
    "vendor": "fey_trove",
    "shippedBy": "Whimsical Pouch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Treasure Detection",
        "rules": "When wearing this charm, you gain a +20 bonus on Wisdom (Perception) checks made to find secret or hidden treasures. This effect is always active while the charm is worn."
      },
      {
        "title": "Trap Alert",
        "rules": "The charm alerts you if you are about to set off any trap within 30 feet of you. You can use your action to make a Wisdom (Perception) check against an unperceived creature or hazard, gaining advantage on this roll."
      }
    ],
    "levelRequirementReason": "This charm is accessible to all adventurers and provides a useful boost for those just starting their journey.",
    "vendorReason": "The Fey Trove specializes in items that enhance one’s connection with the Feywild, making it fitting for this treasure hunter's charm.",
    "shippingDetail": "Ships via the Whimsical Pouch, known for its timely and reliable delivery services through the Feywild.",
    "usage": {
      "activation": "Passive effect; always active while worn.",
      "duration": "Instantaneous; lasts until removed or destroyed.",
      "endsWhen": "The charm is removed or destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "This charm strikes a balance between its powerful effects and the price, offering a significant boost for any adventurer at an affordable rate.",
    "priceOriginal": 400000,
    "priceReviewedAt": "2026-07-22T05:30:22.818137+00:00",
    "aiReviewedAt": "2026-07-22T05:30:22.818137+00:00",
    "aiReviewVersion": 1
  },
  "feywild_troop_item": {
    "id": "feywild_troop_item",
    "name": "Regency’s Iron Ring",
    "description": "Regency’s Iron Ring is a regal piece forged from the heart of ancient Feywild, its surface etched with intricate runes that shimmer with untamed magic. This ring grants its wearer tactical advantage in combat and resilience against chaotic foes, making loyalists more formidable on the battlefield. The ring's iron core pulses with the wild energy of the fey realm, enhancing one’s initiative rolls and reducing the impact of morale damage from Skaven attacks.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Tactical Advantage",
      "Resilience Against Chaos"
    ],
    "vendor": "feywild",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Tactical Advantage",
        "rules": "Regency’s Iron Ring grants a +2 bonus to Initiative checks. It also confers advantage on saving throws against effects with the 'chaos' trait, making you more resilient when facing such threats."
      },
      {
        "title": "Resilience Against Chaos",
        "rules": "When you are targeted by an attack from a Skaven, this ring reduces the morale damage received by half. This effect lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "This ring requires at least level 8 to wield its power effectively in combat.",
    "vendorReason": "The Feywild vendor, known for sourcing rare and enchanted items from the heart of the fey realm, offers Regency’s Iron Ring as a testament to their expertise in magical artifacts.",
    "shippingDetail": "Ships via the quick and ethereal Rakasha Spirit Walk, ensuring safe and swift delivery through Feywild's shadowed paths.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous; lasts until the end of your next turn after taking damage from a Skaven.",
      "endsWhen": "The ring’s effects cease when you are no longer targeted by an attack from a Skaven or at the start of your next turn, whichever comes first.",
      "charges": "Unlimited"
    },
    "priceReason": "This ring is priced at 1000 XP due to its rare origin and unique magical properties that enhance both combat tactics and resilience against chaotic threats.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T05:30:28.960090+00:00",
    "aiReviewedAt": "2026-07-22T05:30:28.960090+00:00",
    "aiReviewVersion": 1
  },
  "feywild_tumble_tales": {
    "id": "feywild_tumble_tales",
    "name": "Tumble Tales",
    "description": "The Tumble Tales is a parchment scroll imbued with Feywild magic. When unrolled, it reveals shifting paths leading to hidden wonders of the fey realm—enchanted groves, mischievous wells, and shimmering mazes. Each fold brings a new destination; every twist in your journey can be both an adventure and a trap. Use with caution, for once you roll, the scroll’s magic might hold you captive in its labyrinthine loops until your next rest.",
    "price": 1000,
    "icon": "🌀",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Feywild Travel",
      "Magical Environments"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Feywild Travel",
        "rules": "By rolling the scroll, choose a destination within the Feywild. This action is a bonus action and has an instantaneous effect. The chosen location grants advantage on your next Dexterity check or saving throw for the duration of the encounter. If you roll poorly, you might become trapped in a loop, which ends at the end of your next long rest."
      },
      {
        "title": "Magical Environments",
        "rules": "While in magical environments, such as Feywild forests or enchanted groves, you gain a +2 bonus to Dexterity checks and advantage on Wisdom (Perception) checks related to these areas. This effect lasts until you leave the magical environment."
      }
    ],
    "levelRequirementReason": "This scroll is accessible to low-level characters who need to familiarize themselves with the Feywild.",
    "vendorReason": "The Feywild merchants are well-versed in all things fey and often sell items that directly relate to their realm.",
    "shippingDetail": "Due to the delicate nature of the scroll, it is shipped via a special enchanted courier pigeon that ensures safe delivery within three days.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous and lasts until the end of your next long rest if you roll poorly.",
      "endsWhen": "If you roll poorly on the destination choice, it ends at the start of your next long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the scroll's unique magical properties and its utility for navigating the Feywild.",
    "priceOriginal": 500,
    "priceReviewedAt": "2026-07-22T05:30:21.618589+00:00",
    "aiReviewedAt": "2026-07-22T05:30:21.618589+00:00",
    "aiReviewVersion": 1
  },
  "feywild_valley_of_bowser_item": {
    "id": "feywild_valley_of_bowser_item",
    "name": "Primordial Wyrm Seal Fragment",
    "description": "The Primordial Wyrm Seal Fragment is a shimmering shard of ancient prison magic, forged from the very essence of forgotten wyrm realms. Crafted by the Pony Nobility and imbued with the power to seal away dangerous portals, it also draws nearby spirits to your location, making it both a tool of defense and an enigmatic artifact. This fragment's origins lie in the Feywild's hidden valleys where only the most skilled mages can wield its raw magic.",
    "price": 1000,
    "icon": "🐉",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Seal Portals",
      "Draw Nearby Spirits"
    ],
    "vendor": "feywild",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Seal Portals",
        "rules": "When activated as an action, this fragment allows you to seal a dangerous portal for up to 10 minutes. The DC for a creature or force to break the seal is equal to your spell save DC + 5. This effect has no limit on uses per day."
      },
      {
        "title": "Draw Nearby Spirits",
        "rules": "This fragment can be used as an action to draw nearby spirits within 30 feet to your location for up to 1 minute, granting you advantage on saving throws against fear and charm effects until the end of your next turn. This effect has a recharge after a long rest."
      }
    ],
    "levelRequirementReason": "This fragment requires significant magical power and knowledge to wield effectively.",
    "vendorReason": "The Feywild are the guardians of ancient magic, and they possess this fragment as a relic of their realm's history.",
    "shippingDetail": "Ships via Warp Whistle Transit in 3 days, with an additional day for customs clearance.",
    "usage": {
      "activation": "Action or Reaction (to seal portals)",
      "duration": "Instantaneous and up to 10 minutes",
      "endsWhen": "The portal is closed, the time limit expires, or you choose to end it early",
      "charges": "Recharge after a long rest"
    },
    "priceReason": "This fragment offers powerful and versatile abilities that are balanced by its high rarity and limited use.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T19:30:15.908727+00:00",
    "aiReviewedAt": "2026-07-22T19:30:15.908727+00:00",
    "aiReviewVersion": 1
  },
  "feywild_wanderer_satchel": {
    "id": "feywild_wanderer_satchel",
    "name": "Wanderer Satchel of the Fractured Atrium",
    "description": "The Wanderer Satchel of the Fractured Atrium is a leather-bound satchel crafted from the tattered remnants of an ancient Feywild portal. When you feel fear, it reveals hidden paths through unstable corridors, guiding you to safety. In moments of pure joy, it uncovers long-lost treasures or magical artifacts thought lost to time. Its contents shift in response to your emotions, making it a true companion for the unpredictable realms of the Feywild.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals Hidden Paths",
      "Unlocks Lost Treasures"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Paths (Fear)",
        "rules": "When you are experiencing fear, as determined by a successful DC 14 Insight check, the satchel unfolds to reveal hidden paths through unstable Feywild corridors. This effect lasts for 1 minute per level of the wearer. The satchel can be used once per day."
      },
      {
        "title": "Unlock Lost Treasures (Joy)",
        "rules": "When you are feeling overwhelming joy, as determined by a successful DC 14 Insight check, the satchel opens to reveal long-lost treasures or magical artifacts. This effect lasts until the end of your next turn. You can use this feature once per day."
      }
    ],
    "levelRequirementReason": "This item is suitable for adventurers who are just starting their journey into the unpredictable realms of the Feywild.",
    "vendorReason": "The satchel's origins in the Feywild make it a perfect offering from its native vendor.",
    "shippingDetail": "Ships via Koopa Postal, known for its reliable and timely deliveries within Faerûn.",
    "usage": {
      "activation": "As an action or bonus action (your choice)",
      "duration": "Instantaneous effect; lasts until the end of your next turn or until used again",
      "endsWhen": "The effect ends when you use it again, at the start of your next turn, or if you are no longer in a state of fear or joy.",
      "charges": "1 charge per day"
    },
    "priceReason": "This price reflects the satchel's rare material and magical properties that enhance both safety and treasure discovery.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:30:53.086127+00:00",
    "aiReviewedAt": "2026-07-22T05:30:53.086127+00:00",
    "aiReviewVersion": 1
  },
  "feywild_warping_willow": {
    "id": "feywild_warping_willow",
    "name": "Warping Willow Branch",
    "description": "The Warping Willow Branch is a gnarled, shimmering branch that weaves time into intricate patterns, whispering secrets of the Feywild's forgotten courts. When held, it bends the flow of time around you, creating a fleeting window where minutes stretch or shrink to suit your needs—a boon for both escape and exploration. The subtle magic lingers after use, occasionally triggering whimsical Feywild phenomena that can either aid or hinder those who wield this branch.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Temporal Distortion",
      "Time Bubble"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "As a bonus action, the wielder can activate the Warping Willow Branch to distort time around them. For up to 1d4 rounds, either slow or speed up the passage of time within a 20-foot radius. This effect functions as though cast by a 3rd-level sorcerer spell (slow/hold) with a DC of 15. The branch can only be used once every long rest."
      },
      {
        "title": "Time Bubble",
        "rules": "Upon activation, the Warping Willow Branch creates a 10-foot radius 'time bubble' around its wielder. This bubble grants temporary protection from harm and allows for safe exploration of time-altered areas. The bubble lasts until the end of your next turn or until you move more than 10 feet from it. There is no save applicable, but the effects are limited to once per long rest."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to wield effectively due to its complex temporal manipulation.",
    "vendorReason": "The Feywild is a natural habitat for the Warping Willow Branch, and their vendors are well-versed in its magic.",
    "shippingDetail": "Delivered with special care to ensure the branch remains functional during transit.",
    "usage": {
      "activation": "Bonus Action or Reaction",
      "duration": "Up to 1d4 rounds for Temporal Distortion, until end of next turn for Time Bubble",
      "endsWhen": "Ends when used up or you move more than 10 feet from the Time Bubble",
      "charges": "Once per long rest"
    },
    "priceReason": "The branch's rarity and the complexity of its temporal effects justify this price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:30:59.081398+00:00",
    "aiReviewedAt": "2026-07-22T05:30:59.081398+00:00",
    "aiReviewVersion": 1
  },
  "feywild_wild_chaos_wand": {
    "id": "feywild_wild_chaos_wand",
    "name": "Wild Chaos Wand",
    "description": "The Wild Chaos Wand is a shimmering staff that pulses with unpredictable bursts of Fey magic. It can alter terrain or affect nearby creatures in ways that disrupt enemy formations or create escape routes. Its unpredictable nature makes it a valuable asset for Feywild explorers, offering +1 to spellcasting ability when used within a Fey court and a 1d6 chance of triggering a minor Fey loop or memory echo with each use.",
    "category": "equipment",
    "price": 4200,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Environmental Alteration",
      "Fey Echo"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Environmental Alteration",
        "rules": "When activated, the wand casts a random effect on the environment within 30 feet. The effects include slowing time, transforming enemies into Fey creatures, or causing walls to shift. These effects last for 1 minute and have no save DC."
      },
      {
        "title": "Fey Echo",
        "rules": "Each use has a 1d6 chance of triggering a minor Fey loop or memory echo that affects the caster's memories for an hour, with a saving throw DC of 13 to resist. The wand can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The Wild Chaos Wand requires at least 5th level due to its unpredictable nature and the risks involved in using such a powerful Fey item.",
    "vendorReason": "Feywild is known for its extensive trade with the Feywild realm, making it the perfect vendor for this unique wand.",
    "shippingDetail": "The wand must be shipped via a trusted courier to ensure its power remains intact during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous, with effects lasting 1 minute or until dispelled by the caster or another effect",
      "endsWhen": "The effect ends when the duration expires or is dispelled",
      "charges": "Unlimited, but can only be used once per long rest"
    },
    "priceReason": "The Wild Chaos Wand's unpredictable nature and Feywild origin justify its high price in the market.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-22T05:31:14.207071+00:00",
    "aiReviewedAt": "2026-07-22T05:31:14.207071+00:00",
    "aiReviewVersion": 1
  },
  "feywild_wild_magic_fang": {
    "id": "feywild_wild_magic_fang",
    "name": "Wildfire Fang",
    "description": "The Wildfire Fang is a jagged, molten-looking tooth plucked from the maw of a legendary creature that roams the Feywild's most volatile regions. This fang grants its bearer an eerie immunity to magic backlash and can unleash unpredictable bursts of chaotic energy at will. Legends say it was forged in the heart of a forgotten forge where wild magic and ancient metals intertwine, imbuing it with unpredictable power.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦷",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Immunity to Magic Backlash",
      "Spontaneous Wild Magic Burst"
    ],
    "vendor": "feywild",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Magic Backlash",
        "rules": "While holding the Wildfire Fang in your hand, you gain immunity to all forms of magic backlash. This effect lasts until the end of your next turn."
      },
      {
        "title": "Spontaneous Wild Magic Burst",
        "rules": "As a bonus action while holding the fang, you can unleash a burst of wild magic. The burst has a 5-foot radius and targets all creatures within it. Each target must make a DC 13 Dexterity saving throw or be pushed back 10 feet and take 2d6 force damage."
      }
    ],
    "levelRequirementReason": "The fang's unpredictable nature requires a level of experience to harness its chaotic power.",
    "vendorReason": "The Feywild vendors have managed to acquire this rare and dangerous tooth from the wild magic beasts that roam their lands.",
    "shippingDetail": "Due to the fang's volatile nature, it is shipped in a specially reinforced container with cooling packs.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous and ends at the start of your next turn",
      "endsWhen": "You are no longer holding the Wildfire Fang or you take damage while it's active",
      "charges": "Unlimited uses, but only one effect can be active at a time"
    },
    "priceReason": "The fang's unpredictable magic and unique origin make it a rare commodity among adventurers.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T19:30:17.476851+00:00",
    "aiReviewedAt": "2026-07-22T19:30:17.476851+00:00",
    "aiReviewVersion": 1
  },
  "feywild_wild_magic_vial": {
    "id": "feywild_wild_magic_vial",
    "name": "Vial of Feywild Surge",
    "description": "The Vial of Feywild Surge is a small glass container filled with swirling, luminescent essence. It originates from the heart of the Feywild and grants wild magic prowess to those who consume it. By quaffing this vial, you gain one spell from the Feywild's magic tree for the duration, even if you do not know that spell. Additionally, your wild magic surges with untamed power, granting a +2 bonus on wild magic checks.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants access to one Feywild spell",
      "Enhances wild magic prowess"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Feywild Spell Access",
        "rules": "When consumed, the vial grants you the ability to cast one spell from the Feywild's magic tree as if you knew it and had prepared it. This effect lasts until your next long rest."
      },
      {
        "title": "Wild Magic Boost",
        "rules": "For 1 hour after drinking the vial, you gain a +2 bonus on wild magic checks. If you fail a wild magic check while under this effect, you risk becoming temporarily blinded or disoriented for 1d6 rounds."
      }
    ],
    "levelRequirementReason": "Requires at least third-level spellcasting proficiency to effectively use the Feywild's magic.",
    "vendorReason": "The Feywild are the custodians of this vial, and they occasionally sell it to those who can prove their worth in the wilds.",
    "shippingDetail": "Due to its magical nature, the vial must be shipped via special courier with enchanted seals to prevent its essence from leaking during transit.",
    "usage": {
      "activation": "Consume the vial as an action.",
      "duration": "1 hour and until your next long rest.",
      "endsWhen": "The effect ends at the start of your next long rest.",
      "charges": "Unlimited, but only one spell from the Feywild's magic tree can be used per vial."
    },
    "priceReason": "The price reflects the rarity and magical essence contained within the Vial of Feywild Surge.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T05:31:14.430341+00:00",
    "aiReviewedAt": "2026-07-22T05:31:14.430341+00:00",
    "aiReviewVersion": 1
  },
  "feywild_wild_tide_satchel": {
    "id": "feywild_wild_tide_satchel",
    "name": "Wild Tide Satchel",
    "description": "The Wild Tide Satchel is a corrupted root-woven satchel from the Feywild, capable of absorbing chaotic magic. When opened in a Feywild zone, it releases a burst of wild magic that disorients foes within 30 feet, forcing them to make a DC 15 Dexterity saving throw or be stunned for 1 minute. It also grants +2 to spellcasting checks and allows the wielder to summon a brief echo of the Feywild's natural splendor once per day.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs Chaotic Magic",
      "Feywild Echo"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disorienting Burst",
        "rules": "When opened in a Feywild zone, the satchel releases a burst of wild magic. Enemies within 30 feet must make a DC 15 Dexterity saving throw or be stunned for 1 minute."
      },
      {
        "title": "Feywild Echo",
        "rules": "Once per day, the wielder can summon a brief echo of the Feywild's natural splendor. This grants +2 to spellcasting checks in Feywild zones until the end of the next long rest."
      }
    ],
    "levelRequirementReason": "The satchel requires minimal magical understanding but is still potent, suitable for a first-level caster.",
    "vendorReason": "The Feywild recognizes the satchel as an authentic product of their realm, sold by its own merchants.",
    "shippingDetail": "Ships via Lakitu Drones with a standard delivery time of 5 days.",
    "usage": {
      "activation": "Object Interaction (to open)",
      "duration": "Instantaneous, effect lasts until resolved",
      "endsWhen": "The wild magic effect ends when the target makes the saving throw or the duration expires",
      "charges": "Unlimited uses per short rest"
    },
    "priceReason": "Balanced against other Feywild-related items, this satchel offers both utility and a rare connection to the Feywild.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:31:31.745474+00:00",
    "aiReviewedAt": "2026-07-22T05:31:31.745474+00:00",
    "aiReviewVersion": 1
  },
  "feywild_wisp_bow": {
    "id": "feywild_wisp_bow",
    "name": "Wisp Bow of the Fey Courts",
    "description": "Crafted from the ethereal whispers of the Fey Courts, this bow's arrows shimmer with the light of forgotten realms. Each shot compels a target to relive a memory or be drawn into an alternate timeline for one round, bending reality around them. The Wisp Bow of the Fey Courts is a rare artifact that weaves time and space, making it a formidable tool in the hands of those who dare to wield its power.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporal Disruption",
      "Memory Echo"
    ],
    "vendor": "feywild",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporal Disruption",
        "rules": "When an arrow hits, the target must succeed on a DC 15 Dexterity saving throw or be pulled into an alternate timeline for one round. During this time, the target is incapacitated and cannot take actions."
      },
      {
        "title": "Memory Echo",
        "rules": "With a successful hit, the target relives a memory from their past, as chosen by the wielder of the bow. The memory lasts for 1 minute, during which the target's mind is temporarily clouded and they cannot act."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to harness the temporal and psychological effects of the Wisp Bow.",
    "vendorReason": "The Feywild vendor, known for their mystical wares, sources this bow from the very heart of the fey realms where it was crafted.",
    "shippingDetail": "Ships via the Void Drifter Relay, ensuring safe and swift delivery through the interdimensional corridors of the Feywild.",
    "usage": {
      "activation": "Requires a successful attack roll to trigger an effect.",
      "duration": "One round per effect.",
      "endsWhen": "The target succeeds on their saving throw or completes its duration.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP, reflecting the bow's rare and powerful abilities that can manipulate time and memory.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:31:30.559957+00:00",
    "aiReviewedAt": "2026-07-22T05:31:30.559957+00:00",
    "aiReviewVersion": 1
  },
  "feywild_wisp_fang": {
    "id": "feywild_wisp_fang",
    "name": "Wisp Fang of the Timeless Court",
    "description": "The Wisp Fang of the Timeless Court is a crystalline fang that, when held and invoked, allows its wielder to briefly phase into a Fey court’s memory. By choosing between past moments or future visions, the user can either gain temporary emotional power from witnessing a cherished memory of a loved one, or glimpse the court’s prophecies. However, this experience comes at the cost of their own mental stability, as the emotional weight can unravel their sanity over time.",
    "price": 1000,
    "icon": "💫",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Phases into a Fey court’s memory",
      "Emotional toll on user"
    ],
    "vendor": "feywild",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Phase into Memory",
        "rules": "The wielder must choose between accessing a past moment or a future vision. For each use, the duration is 1 round during which the user can observe the chosen memory or vision without interacting with it. The experience grants temporary emotional power if a past memory of a loved one is chosen; otherwise, the court’s prophecies may be glimpsed."
      },
      {
        "title": "Emotional Toll",
        "rules": "After each use, the user must succeed on a DC 15 Wisdom saving throw or suffer from temporary madness. The effect lasts for 24 hours and can be mitigated by spending one hour in a serene environment, but the fang’s power diminishes if used more than once per long rest."
      }
    ],
    "levelRequirementReason": "Requires a minimum of three levels to access the emotional depth required for such an artifact.",
    "vendorReason": "Only Feywild's trusted couriers can handle and sell items that bridge the mortal world with the Fey realm.",
    "shippingDetail": "Delivered by a Rakasha spirit who ensures the item remains intact and potent through the journey.",
    "usage": {
      "activation": "Action",
      "duration": "1 round per use",
      "endsWhen": "After one use or if the user fails the Wisdom saving throw",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "Balanced to reflect its unique ability to access both past and future Fey memories, while posing a risk to the user's mental state.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T05:31:49.576009+00:00",
    "aiReviewedAt": "2026-07-22T05:31:49.576009+00:00",
    "aiReviewVersion": 1
  }
};
