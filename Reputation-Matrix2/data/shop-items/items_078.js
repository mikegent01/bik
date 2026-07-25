// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_078 = {
  "middle_earth_item_the_shire_messenger_scrolls_of_lost_lore": {
    "id": "middle_earth_item_the_shire_messenger_scrolls_of_lost_lore",
    "name": "The Shire Messenger Scrolls of Lost Lore - Volume I",
    "description": "The Shire Messenger Scrolls of Lost Lore - Volume I are meticulously bound in parchment, their edges adorned with intricate filigree. These scrolls glow faintly with a warm, golden light, emanating an aura that whispers tales of the distant past. Scholars and healers alike find these scrolls invaluable, for they not only provide inspiration but also subtly mend the body and mind, offering fleeting glimpses into forgotten lore and minor enchantments.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📜",
    "stock": 8,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "inspiration boost",
      "healing touch"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Inspiration Boost",
        "rules": "When a reader actively studies one of these scrolls, they gain advantage on their next Intelligence or Wisdom check. This effect lasts for the start of their next long rest."
      },
      {
        "title": "Healing Touch",
        "rules": "Upon activation by a scholar, this scroll grants temporary hit points equal to your Intelligence modifier (minimum 1). The effect is instantaneous and can be used once per day."
      }
    ],
    "levelRequirementReason": "The scrolls are accessible to scholars at any level, providing them with the tools necessary for unlocking ancient knowledge.",
    "vendorReason": "The Shire Shop is known for its extensive collection of scholarly and magical curiosities, making it a natural place for these scrolls.",
    "shippingDetail": "Ships via the Pony Express with expedited delivery within two game days.",
    "usage": {
      "activation": "Activates when a scholar actively studies one of the scrolls during their turn or as an action.",
      "duration": "Instantaneous for Inspiration Boost; lasts until start of next long rest. Healing Touch is instantaneous and can be used once per day.",
      "endsWhen": "Inspiration boost ends at the start of the reader's next long rest, or if the scroll is damaged beyond repair. Healing touch effect ends immediately after use.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The scrolls are priced based on their rarity and unique scholarly value, offering a significant boost to both knowledge acquisition and healing abilities.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:14:01.169044+00:00",
    "aiReviewedAt": "2026-07-25T02:14:01.169044+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_verdant_marked_banners_of_the_wrath": {
    "id": "warhammer_item_verdant_marked_banners_of_the_wrath",
    "name": "Verdant Marked’s Banners of the Wrath",
    "description": "Verdant Marked’s Banners of the Wrath are crafted from threads spun by ancient trees in a forgotten forest and etched with chaotic runes that pulse with raw fury. When unfurled, these banners inspire soldiers to charge into battle with unyielding ferocity; their presence can turn even the most cautious warriors into berserk fighters. However, prolonged exposure risks overwhelming the minds of those who wield them, leading to reckless actions and diminished defenses.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 45,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Berserk Enchantment",
      "Temporary Defense Reduction"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "sky-carriage",
    "levelRequirement": 25,
    "effectDetails": [
      {
        "title": "Berserk Enchantment",
        "rules": "Activates as a bonus action. For the next three turns, allies within 10 feet gain +2 to attack rolls and are immune to fear effects but have disadvantage on saving throws against being frightened. If an ally takes damage from a creature they are raging against, they must succeed on a DC 15 Wisdom saving throw or enter a berserk state for the rest of their turn."
      },
      {
        "title": "Temporary Defense Reduction",
        "rules": "The wielder and all allies within 10 feet have their AC reduced by 2 while the banners are unfurled. This effect lasts until the end of your next turn or until you take damage from a creature other than yourself."
      }
    ],
    "levelRequirementReason": "This item requires a high-level character to wield due to its potent effects and the risk it poses.",
    "vendorReason": "The banners are so rare that only the most trusted arms dealers, like those at the Imperial Armory, can supply them.",
    "shippingDetail": "Ships via sky-carriage for expedited delivery. A courier must be present to receive the shipment, and it is delivered within a day of order confirmation.",
    "usage": {
      "activation": "Unfurl as a bonus action.",
      "duration": "Lasts until the end of your next turn or until you take damage from another creature.",
      "endsWhen": "The effects expire upon taking damage, ending the berserk state and restoring normal AC.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This price reflects a rare artifact with balanced effects that can be used to enhance combat effectiveness without being overpowered.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:14:06.855351+00:00",
    "aiReviewedAt": "2026-07-25T02:14:06.855351+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_mk_81_chaos_marked_resonator_of_discord": {
    "id": "warhammer_item_mk_81_chaos_marked_resonator_of_discord",
    "name": "Mk.81 Chaotic Marked Resonator of Discord",
    "description": "Forged in the heart of a shattered battlefield, this resonator hums with raw chaotic energy, its surface etched with ancient runes that glow with malevolent light. When activated, it emits waves that scramble enemy formations and induce moments of debilitating confusion amongst their ranks, causing them to falter and misfire their attacks. Its resonance can be felt in the very air, warping the battlefield and leaving a trail of chaos in its wake.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Disrupts enemy formations",
      "Induces enemy misfires"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "dimensional-portal",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Disruptive Resonance",
        "rules": "When activated, this resonator emits waves that scramble the formations of enemies within a 15-meter radius. This effect has a duration of 1 minute and reduces their movement speed by 20 feet for the entire duration. Enemies are also given disadvantage on saving throws against being disoriented."
      },
      {
        "title": "Misfired Attacks",
        "rules": "There is a 30% chance that any attack made by enemies within range during the effect's duration will miss their target. This effect ends when the resonator runs out of charges or if it is destroyed."
      }
    ],
    "levelRequirementReason": "The resonator requires a significant amount of magical energy to stabilize its chaotic resonance, making level 15 the minimum requirement for activation.",
    "vendorReason": "The chaos dealer is known to have access to rare and powerful artifacts from realms where order and chaos are in constant flux.",
    "shippingDetail": "Ships via a dimensional portal, delivering the resonator within seconds of purchase but requiring special handling for its volatile nature.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "Charges are depleted or it is destroyed",
      "charges": "Limited to 3 uses"
    },
    "priceReason": "The resonator's chaotic energy and the specialized craftsmanship required for its creation justify a price of 1,000 XP.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T02:14:19.576428+00:00",
    "aiReviewedAt": "2026-07-25T02:14:19.576428+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_mk_57_godly_banners_of_the_eternal_storm": {
    "id": "warhammer_item_mk_57_godly_banners_of_the_eternal_storm",
    "name": "Mk.57 Godly Banners of the Eternal Storm",
    "description": "Mk.57 Godly Banners of the Eternal Storm are woven from solidified lightning and imbued with divine essence, radiating an aura that can shatter even the most stalwart defenses. These banners not only deal 50% extra lightning damage but also summon a small storm cloud that rains down bolts of lightning, adding a tempestuous presence to any battlefield. Commanding them grants mastery over storms and a terrifying presence that intimidates foes.",
    "category": "consumables",
    "price": 60000,
    "icon": "⛈️",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "Summons Tempest Cloud",
      "Immunity to Thunder"
    ],
    "vendor": "fate_forge",
    "shippedBy": "angel-delivery",
    "levelRequirement": 50,
    "effectDetails": [
      {
        "title": "Summon Tempest Cloud",
        "rules": "As an action, the user can summon a tempest cloud that rains down bolts of lightning within a 30-foot radius. This effect lasts for 1 minute and requires a successful DC 25 Wisdom (Intimidation) check to control it effectively. The cloud deals 4d6 lightning damage per round to all creatures in its area, but friendly creatures are immune."
      },
      {
        "title": "Immunity to Thunder",
        "rules": "The wielder gains immunity to thunder and lightning attacks for the duration of one short or long rest. This effect can be activated once every 24 hours."
      }
    ],
    "levelRequirementReason": "These banners are reserved for high-level clerics who have mastered the art of storm manipulation.",
    "vendorReason": "Fate Forge is known for its divine artifacts, and these banners are among their most powerful creations.",
    "shippingDetail": "Ships via angelic courier within one week of purchase.",
    "usage": {
      "activation": "Action or bonus action to summon the tempest cloud; once per long rest to gain immunity to thunder and lightning attacks.",
      "duration": "Tempest cloud lasts for 1 minute, immunity lasts until next short or long rest.",
      "endsWhen": "The user dismisses the cloud or falls unconscious. Immunity ends at the end of a short or long rest.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Crafted from divine essence and lightning, these banners are among the most expensive and powerful items in the realm.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-25T14:39:42.362583+00:00",
    "aiReviewedAt": "2026-07-25T14:39:42.362583+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_the_spiral_ascension_claimed": {
    "id": "grand_country_item_the_spiral_ascension_claimed",
    "name": "The Spiral Ascension Claimed",
    "description": "The Spiral Ascension Claimed is a shimmering, iridescent bridge spun from solidified vertigo and captured updrafts of the skies above the grand country's highest peaks. Its surface pulses with a faint, ethereal glow that dances in the wind, offering brief moments of weightless ascent. Touching this claimed surface allows for traversals across treacherous vertical gaps with surprising grace, though the mind can easily be overtaken by disorientation as one hovers above the abyss below.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧗‍♀️",
    "stock": 45,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "weightless traversal",
      "disorienting touch"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "wind_carrier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Weightless Traversal",
        "rules": "When activated via a bonus action, the user gains the ability to hover and move vertically for up to 10 feet. This effect lasts until the start of their next turn or until they choose to end it early. If the user moves beyond the claimed surface's range while in this state, they are immediately returned to its edge with no further movement."
      },
      {
        "title": "Disorienting Touch",
        "rules": "Anyone who comes into contact with the claimed surface has a 25% chance of being subjected to a brief moment of disorientation. This effect lasts for 1 minute and imposes disadvantage on all ability checks, saving throws, and attack rolls until it ends."
      }
    ],
    "levelRequirementReason": "This item's weightless traversal allows even the novice adventurer to traverse dangerous vertical gaps with ease.",
    "vendorReason": "The Vertical Vendor specializes in equipment that aids adventurers in overcoming the grand country’s most challenging terrain, making The Spiral Ascension Claimed a logical addition to their stock.",
    "shippingDetail": "Delivered swiftly by the Wind Carrier, ensuring even the most remote regions can receive this life-saving equipment within hours.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Up to 10 feet of vertical movement or until the start of your next turn",
      "endsWhen": "You choose to end it early or move beyond its claimed surface's range",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Spiral Ascension Claimed provides significant utility, allowing any level character to traverse dangerous vertical gaps with ease and safety.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:14:50.190453+00:00",
    "aiReviewedAt": "2026-07-25T02:14:50.190453+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_eldritch_bridges_of_the_stone_maw": {
    "id": "grand_country_item_eldritch_bridges_of_the_stone_maw",
    "name": "Eldritch Bridges of the Stone Maw",
    "description": "The Eldritch Bridges of the Stone Maw are unholy conduits woven from the whispers of ancient stone and the screams of the earth's forgotten victims. Each step is a negotiation with the maw itself, as the bridges pulse with raw, unyielding power. Misstep too often, and you risk collapsing into the abyssal maw. These bridges offer temporary strength and resistance to stone damage, but at a cost—a slight slowing of time around them that could spell disaster for unwary travelers.",
    "category": "consumables",
    "price": 1000,
    "icon": "💀",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Strength Boost",
      "Time Slow"
    ],
    "vendor": "side_seller",
    "shippedBy": "stone_crawler",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Strength",
        "rules": "When the Eldritch Bridges are activated, the user gains +3 to their Strength score as a bonus action. This effect lasts until the end of your next turn."
      },
      {
        "title": "Temporal Inhibition",
        "rules": "The immediate vicinity around the bridges experiences a 5% reduction in time passage while they are active. This effect ends when the activation is expended or disrupted by an external force."
      }
    ],
    "levelRequirementReason": "Even the most novice adventurers can appreciate the strategic value of these bridges.",
    "vendorReason": "Side sellers often have unique and unconventional items that appeal to a variety of customers, from seasoned adventurers to those just starting their journey.",
    "shippingDetail": "Ships via the Stone Crawler, a massive earth elemental known for its careful handling of delicate cargo.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Until the end of your next turn",
      "endsWhen": "The activation is expended or interrupted by an external force",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price, it offers a significant but not overpowering advantage for adventurers of all levels.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T02:14:36.408725+00:00",
    "aiReviewedAt": "2026-07-25T02:14:36.408725+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_layered_chronometric_nexus_claimed": {
    "id": "grand_country_item_layered_chronometric_nexus_claimed",
    "name": "Layered Chronometric Nexus Claimed",
    "description": "The Layered Chronometric Nexus Claimed is a multi-tiered device crafted from ancient temporal echoes and polished obsidian, encased in an intricate lattice of silver filigree. By touching its claimed node, it warps the flow of time around you, creating fleeting opportunities for strategic advantage—though prolonged exposure risks fracturing your personal timeline's coherence. This delicate artifact is a testament to the forgotten artistry of the Time Weavers, renowned for their mastery of temporal mechanics.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Temporal Manipulation",
      "Personal Timeline Risk"
    ],
    "vendor": "layer_market",
    "shippedBy": "time_weaver",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Surge",
        "rules": "As a bonus action, activate this device at a claimed node to manipulate time in a localized area. The effect lasts for 1 minute or until the next sunrise. Within range (30 feet), you gain advantage on initiative rolls and can take an additional action each round. This effect ends early if you sustain damage."
      },
      {
        "title": "Timeline Fracture",
        "rules": "After using Temporal Surge, there is a 1-in-6 chance that your personal timeline will be fractured for 1 hour during the next full moon cycle. This risk increases by one in six every five uses of this effect."
      }
    ],
    "levelRequirementReason": "This device requires significant understanding and control over time manipulation, suitable only for those with considerable experience.",
    "vendorReason": "The Layer Market is known for its diverse collection of mystical artifacts and devices, including the rarest and most powerful curiosities like this one.",
    "shippingDetail": "Shipped via time courier; arrives exactly when ordered, but requires a full moon cycle for activation.",
    "usage": {
      "activation": "Bonus action at a claimed node",
      "duration": "1 minute or until next sunrise",
      "endsWhen": "Sustained damage or use limit reached",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its rarity and the risk it poses to users, this device is priced at a reasonable 1000 XP.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-25T02:14:50.193457+00:00",
    "aiReviewedAt": "2026-07-25T02:14:50.193457+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_gilded_chronal_herald": {
    "id": "doughnut_hole_item_gilded_chronal_herald",
    "name": "The Chronal Herald of Gilded Echoes",
    "description": "The Chronal Herald of Gilded Echoes is a pulsating orb encased in layers of solidified void-matter, its surface shimmering with temporal runes that whisper futures yet to unfold. When held, fleeting visions of potential golden events overlay the present, granting insights into possible outcomes but risk fracturing your timeline if exposure exceeds three seconds. The Herald's gilded glow hints at its power to stabilize temporal anomalies and perceive the future with increased accuracy for a brief moment.",
    "category": "equipment",
    "price": 8750,
    "icon": "⏳",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Echo",
      "Chronal Stability"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Void Conveyance",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Temporal Echo",
        "rules": "When activated as a bonus action, the user briefly glimpses into potential futures. This effect lasts for 10 seconds and has a chance to rewind time by 3 seconds on each use. There is no save required, but holding it too long risks timeline fracture."
      },
      {
        "title": "Chronal Stability",
        "rules": "This passive effect reduces the user's susceptibility to temporal instability effects by half for as long as they hold the Herald. It has a duration of 1 hour and can be reactivated after a short rest."
      }
    ],
    "levelRequirementReason": "Only those with significant mastery over time magic are capable of safely wielding such a volatile artifact.",
    "vendorReason": "The Void Vendor specializes in rare and dangerous artifacts, including time-based relics like the Chronal Herald.",
    "shippingDetail": "Delivered via interdimensional courier; arrives within three days of order placement.",
    "usage": {
      "activation": "Bonus action to activate; can be used once per short rest.",
      "duration": "10 seconds for Temporal Echo, 1 hour passively with Chronal Stability",
      "endsWhen": "Effect ends when the user releases the Herald or timeline fracture occurs.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Chronal Herald's rarity and volatile nature justify its high price, reflecting both its potential for chaos and power.",
    "priceOriginal": 8750,
    "priceReviewedAt": "2026-07-25T02:15:10.723684+00:00",
    "aiReviewedAt": "2026-07-25T02:15:10.723684+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_mk83_anomaly_of_silent_depths": {
    "id": "doughnut_hole_item_mk83_anomaly_of_silent_depths",
    "name": "Mk.83 Anomaly of Silent Depths",
    "description": "The Mk.83 Anomaly of Silent Depths is a geometrically perfect obsidian cube, its surface etched with ancient runes that seem to hum with a forgotten language. When held, it absorbs all ambient sound, creating a small, perfectly silent zone around the wielder. The cube's edges shimmer faintly as if they are on the verge of warping space itself, and the air feels thick with the weight of unsaid secrets. Touching its surface is to enter a realm where time seems to bend and forgotten pathways whisper their locations.",
    "category": "curiosities",
    "price": 12000,
    "icon": "🌑",
    "stock": 35,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Silence Zone",
      "Dimensional Shimmer"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Phantom Courier",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Silence Zone",
        "rules": "When activated, this cube creates a small area of absolute silence around the wielder with a radius of 10 feet. This effect lasts for 1 minute and can be maintained by concentrating on it as an action each round. The silence prevents all sound from entering or leaving the zone, including verbal speech and magical effects that require sound. A successful DC 15 Constitution saving throw ends the effect early."
      },
      {
        "title": "Dimensional Shimmer",
        "rules": "The cube has a minor chance to cause dimensional distortions when activated. There is a 20% chance (roll a d5) that the wielder and one willing creature within 10 feet are teleported up to 30 feet in any direction, instantly moving them out of harm's way. The effect ends immediately if the wielder or target takes damage."
      }
    ],
    "levelRequirementReason": "This item requires a character with at least 4 levels to handle its potent and ancient power.",
    "vendorReason": "The Hole Hawker specializes in bizarre and arcane items, making the Anomaly of Silent Depths an ideal fit for their inventory.",
    "shippingDetail": "Due to its highly sensitive nature, the Anomaly is only delivered by the Phantom Courier service, ensuring safe arrival.",
    "usage": {
      "activation": "Action (to activate and maintain)",
      "duration": "1 minute (concentration required; ends early with a saving throw or damage)",
      "endsWhen": "The concentration ends as an action each round or when the wielder takes damage",
      "charges": "Unlimited, but can only be maintained for 1 minute"
    },
    "priceReason": "Its rare and ancient origins, combined with its powerful effects in creating a silence zone and causing dimensional distortions, justify this high price.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T02:15:32.742444+00:00",
    "aiReviewedAt": "2026-07-25T02:15:32.742444+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_null_fragments_of_the_decaying_void": {
    "id": "doughnut_hole_item_null_fragments_of_the_decaying_void",
    "name": "Null Fragments of the Decaying Void",
    "description": "A collection of iridescent, shattered plates - remnants of a collapsed dimension – each pulsing with an unsettling, cold energy.  These fragments seem to accelerate the decay process in organic matter and can be used to temporarily disrupt void-based defenses.",
    "category": "consumables",
    "price": 650,
    "icon": "💀",
    "stock": 89,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Void Decay (Deals minor void damage over time)",
      "Nullification (Reduces the effectiveness of void-based attacks)",
      "Temporal Stasis (Briefly slows down enemies)",
      "Fragmented Resonance (Small chance to inflict Confusion)"
    ],
    "vendor": "center_seller",
    "shippedBy": "Delivery Drone 7",
    "levelRequirement": 15
  },
  "kivotos_item_the_spectral_ward_of_resonance": {
    "id": "kivotos_item_the_spectral_ward_of_resonance",
    "name": "The Spectral Ward of Resonance",
    "description": "The Spectral Ward of Resonance is a shimmering, spectral construct that hums with echoes from countless student council meetings. Crafted from the collective disappointment and youthful idealism of its creators, it amplifies your persuasive abilities within a small radius, creating an auditory distortion that confounds opponents and allies alike. This ward draws upon the very essence of campus lore to enhance communication skills and create a localized echo effect that can sway even the most hardened listeners.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Echoing Persuasion",
      "Auditory Distortion"
    ],
    "vendor": "student_store",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Echoing Persuasion",
        "rules": "As an action, you activate the Spectral Ward of Resonance to amplify your persuasive abilities within a 10-foot radius. For the next minute, all creatures within this area have disadvantage on saving throws against being charmed by you and must make a DC 15 Wisdom saving throw at the start of their turn or be charmed for up to 1 minute. The ward can only be used once per long rest."
      },
      {
        "title": "Auditory Distortion",
        "rules": "The Spectral Ward creates an auditory distortion within its radius, causing creatures within a 20-foot radius to have disadvantage on attack rolls against you and advantage on saving throws. This effect lasts for 1 minute unless dispelled or the ward is destroyed."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to effectively command and utilize its persuasive abilities in a meaningful way.",
    "vendorReason": "The student store, with its ties to campus life and culture, is the natural vendor for an item steeped in the lore of student council debates and youthful aspirations.",
    "shippingDetail": "Delivered instantly by drone, ensuring you are ready for your next debate or persuasive encounter.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute per use",
      "endsWhen": "The duration ends when the effect is dispelled or the ward is destroyed.",
      "charges": "Unlimited uses between long rests"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its unique combination of persuasive and battlefield utility within a limited radius.",
    "priceOriginal": 785,
    "priceReviewedAt": "2026-07-25T02:15:16.001302+00:00",
    "aiReviewedAt": "2026-07-25T02:15:16.001302+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_mk.34_cards_of_discord": {
    "id": "kivotos_item_mk.34_cards_of_discord",
    "name": "Mk.34 Cards of Discord",
    "description": "Mk.34 Cards of Discord are a deck of finely crafted tarot cards, each depicting a vivid confrontation between rival club factions. These cards are forged from the very essence of youthful frustration and compressed arguments, making them a potent tool for sowing chaos among groups. When played, they force targets to make impulsive decisions, reducing their coordination by 50% for 30 seconds, and have a chance to distract nearby NPCs with minor disruptions.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Forces Chaotic Decisions",
      "Reduces Coordination"
    ],
    "vendor": "club_supply",
    "shippedBy": "Courier Pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Forces Chaotic Decisions",
        "rules": "When played as an action, the target must make a Wisdom saving throw (DC 14) or take a -2 penalty to all ability checks and attack rolls for the rest of their next turn. The card's effect ends if the player discards it."
      },
      {
        "title": "Reduces Coordination",
        "rules": "Once per encounter, when played as an action within 30 feet, targets within a 15-foot radius must make a Dexterity saving throw (DC 14) or have their team coordination reduced by 50% for 30 seconds. This effect ends if the item is destroyed."
      }
    ],
    "levelRequirementReason": "These cards are accessible to players of all levels as they serve as a tool for chaos and disruption, but require player skill to use effectively.",
    "vendorReason": "Club Supply stocks these items due to their popularity among club members looking to add some unpredictability to their social encounters.",
    "shippingDetail": "Courier Pigeon delivers the cards within a week, but only during the night hours when the effects are most potent.",
    "usage": {
      "activation": "Play as an action",
      "duration": "Instantaneous effect; lasts until discarded or destroyed",
      "endsWhen": "When discarded or destroyed",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The cards are priced at 1000 XP due to their rare material and unique crafting, but players can use them often without exhausting resources.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:15:28.376391+00:00",
    "aiReviewedAt": "2026-07-25T02:15:28.376391+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_the_faction_cards_of_halo": {
    "id": "kivotos_item_the_faction_cards_of_halo",
    "name": "The Faction Cards of Halo",
    "description": "The Faction Cards of Halo are a set of intricately crafted, ornate cards that each bear the symbol and colors of one of the five major student factions within the academy. These cards possess an enigmatic aura that subtly influences those who handle them, allowing their bearer to sway opinions or gain temporary access to restricted areas. By playing these cards in strategic settings, one can command subtle but significant influence over the faction’s actions and decisions.",
    "category": "curiosities",
    "price": 1000,
    "icon": "😇",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Sway Opinions",
      "Gain Temporary Access"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Automated Delivery System",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sway Opinions",
        "rules": "As an action, you may present one card to a group of up to five individuals. They must make a Charisma saving throw (DC 15). On a failed save, the target’s attitude towards you improves by one step on the appropriate attitude scale for the faction represented by the card. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Gain Temporary Access",
        "rules": "By displaying two cards simultaneously during a relevant moment (such as an entrance or meeting), you gain temporary access to restricted areas associated with the factions depicted on the cards for 24 hours. This effect is limited to once per week."
      }
    ],
    "levelRequirementReason": "The cards require basic understanding of social dynamics and faction interactions.",
    "vendorReason": "The Academy Armory caters to students seeking strategic advantages within the institution.",
    "shippingDetail": "Ships via the Automated Delivery System, arriving within one business day.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous for Sway Opinions; 24 hours for Gain Temporary Access",
      "endsWhen": "Ends at the conclusion of a long rest for Sway Opinions; expires after 24 hours for temporary access.",
      "charges": "Unlimited uses per week"
    },
    "priceReason": "The cards are priced based on their strategic value and the influence they offer, rather than their material components.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T02:15:46.089029+00:00",
    "aiReviewedAt": "2026-07-25T02:15:46.089029+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_shimmering_abyss_forger": {
    "id": "the_edge_item_shimmering_abyss_forger",
    "name": "The Shimmering Abyss Forger's Fragment",
    "description": "The Shimmering Abyss Forger's Fragment hums with the raw energy of paradox, its surface etched with fractal patterns that shimmer and flicker like molten glass under a forge’s heat. This fragment grants the wielder a brief but potent surge of speed, leaving them to dance between the very threads of reality itself. In the chaos of battle, it disrupts enemy targeting systems for mere instants, causing a ripple effect in their aim that can be seen as a fleeting distortion around you.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "movement_speed_boost",
      "enemy_targeting_disruption"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "winged drone courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Movement Speed Boost",
        "rules": "The wielder gains a +10 foot movement speed increase for 1 round. This effect is instantaneous and can be used once per short or long rest."
      },
      {
        "title": "Enemy Targeting Disruption",
        "rules": "For 3 seconds, all enemies within 20 feet have disadvantage on attack rolls against the wielder. The effect ends when an enemy successfully hits the wielder during this time. No save is required to end the effect."
      }
    ],
    "levelRequirementReason": "This fragment requires a level 15 forger to handle its unstable paradoxical energy.",
    "vendorReason": "The Abyss Trader has exclusive access to fragments from the Shimmering Abyss, where such relics are said to be forged in the very heart of chaos.",
    "shippingDetail": "The fragment is delivered by a swift winged drone that can only transport one fragment at a time due to its delicate nature.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous, with a 1-minute cooldown between uses",
      "endsWhen": "The effect ends if the wielder is successfully hit by an enemy attack within the duration or after one minute has passed.",
      "charges": "Unlimited, but only one use per short or long rest"
    },
    "priceReason": "The fragment's unique properties and rarity justify its price in excess of a thousand XP.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T02:16:33.162565+00:00",
    "aiReviewedAt": "2026-07-25T02:16:33.162565+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_final_echoes_of_mortis": {
    "id": "the_edge_item_final_echoes_of_mortis",
    "name": "Final Echoes of Mortis - The Haunted Resonance",
    "description": "The Final Echoes of Mortis, a blackened metal coil twisted into spirals, is said to have been harvested from an ancient research facility now swallowed by the Edge's shadows. Holding it evokes haunting whispers and memories of lost scientists, their voices echoing in your mind as you face auditory hallucinations for 10 seconds. It also grants temporary damage reflection, absorbing a portion of incoming attacks before dissipating into the void.",
    "category": "consumables",
    "price": 1000,
    "icon": "💀",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "auditory_hallucinations",
      "damage_reflection"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "scorched_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Auditory Hallucinations",
        "rules": "When activated, you must succeed on a DC 15 Wisdom saving throw or be subjected to 10 seconds of auditory hallucinations. During this time, you are blinded and deafened as if under the effects of a Silence spell."
      },
      {
        "title": "Damage Reflection",
        "rules": "For 1 minute after activation, any damage dealt to you is reduced by 25% (rounded down). This effect ends when it expires or if you take an action. You can activate this item only once per long rest."
      }
    ],
    "levelRequirementReason": "This item is rare and provides significant utility, making a level requirement of 1 appropriate for its complexity.",
    "vendorReason": "Edge Outpost handles the most exotic items from the Edge, including relics that can be used in dangerous circumstances.",
    "shippingDetail": "Ships via Scorched Cart for a delivery of 3 days from the Edge Outpost.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute (reduces to 25% damage taken)",
      "endsWhen": "Expires or when you take an action, with one use per long rest",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the item's rarity and its unique abilities to provide both immediate utility and a lasting defensive benefit.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:16:03.857404+00:00",
    "aiReviewedAt": "2026-07-25T02:16:03.857404+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_obsidian_null_nexus_core": {
    "id": "the_edge_item_obsidian_null_nexus_core",
    "name": "Obsidian Null Nexus Core - The Forbidden Prototype",
    "description": "The Obsidian Null Nexus Core, a heart of solidified nothingness, pulses with a chilling void energy that momentarily nullifies all surrounding effects—including damage, status ailments, and even the flow of time itself. This dangerous artifact is said to be a forbidden prototype from the depths of forgotten space-time, capable of unraveling reality for those brave—or foolhardy—enough to wield it. However, its use comes with a dire warning: the user risks their own existence in an irreversible process of entropy.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌌",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "nullification_burst",
      "entropy_risk"
    ],
    "vendor": "final_shop",
    "shippedBy": "void_shipment",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Nullification Burst",
        "rules": "Activates as a bonus action. The user targets a point within 30 feet, nullifying all effects in a 15-foot radius for 10 seconds. This includes damage, status ailments, and even the flow of time. Creatures and objects within the area must succeed on a DC 25 Dexterity saving throw or be disoriented until the end of their next turn."
      },
      {
        "title": "Entropy Risk",
        "rules": "The user faces an immediate risk of irreversible entropy upon using this item, with a 20% chance. This risk increases by 10% for each additional use within a week. The user's body will begin to disintegrate if they fail the saving throw (DC 25), with no way to reverse the effect."
      }
    ],
    "levelRequirementReason": "Even at its most dangerous, this artifact can be harnessed by a brave soul willing to face the risks.",
    "vendorReason": "The final shop specializes in rare and forbidden items that push the boundaries of known magic and reality.",
    "shippingDetail": "Ships via void shipment, which can only be delivered at night and requires a special permit from the council of timekeepers.",
    "usage": {
      "activation": "Bonus action to activate and target an area within 30 feet.",
      "duration": "10 seconds for Nullification Burst; continuous entropy risk until the end of each turn.",
      "endsWhen": "The duration ends at the start of the next round or when the user fails a saving throw due to Entropy Risk.",
      "charges": "Unlimited uses, but limited to once per week."
    },
    "priceReason": "This artifact is considered a low-end legendary item due to its balanced risk and effect duration within the rules of D&D 5e.",
    "priceOriginal": 28000,
    "priceReviewedAt": "2026-07-25T02:16:20.238794+00:00",
    "aiReviewedAt": "2026-07-25T02:16:20.238794+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_the_glitchy_chosen_uniform": {
    "id": "kivotos_item_the_glitchy_chosen_uniform",
    "name": "The Glitchy Chosen's Uniform",
    "description": "The Glitchy Chosen's Uniform is a shimmering ensemble of iridescent threads that pulse with digital static. Designed for both stealth and subterfuge, it subtly warps your appearance to blend seamlessly into Academy City's surveillance network. Wearing this uniform grants you the hacking abilities of a seasoned tech prodigy, allowing you to bypass security measures with ease. The uniform also emits a faint data distortion that can momentarily mislead digital eyes.",
    "category": "equipment",
    "price": 1000,
    "icon": "💻",
    "stock": 42,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Hacking Boost",
      "Digital Camouflage"
    ],
    "vendor": "student_store",
    "shippedBy": "Courier Bot Express",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Hacking Boost",
        "rules": "Activates as an action, granting you advantage on hacking checks and +5 to your Dexterity (Stealth) checks for the duration of one short rest or until the uniform is removed. The effect can be recharged by resting."
      },
      {
        "title": "Digital Camouflage",
        "rules": "Passively activates when worn, allowing you to use your Stealth check as a reaction to become invisible to digital surveillance systems and human observers for up to 1 minute per day. This effect ends if you attack or cast a spell with a verbal component."
      }
    ],
    "levelRequirementReason": "This uniform is designed for users who have the foundational skills necessary to understand its complex data-woven nature.",
    "vendorReason": "The student store stocks this item as a practical tool for students and researchers navigating Academy City's high-tech environment.",
    "shippingDetail": "Ships within the next class schedule; may be delayed by up to one hour due to city-wide surveillance checks.",
    "usage": {
      "activation": "Passive upon wearing, with specific effects triggered as described above.",
      "duration": "Until removed or the effect ends naturally.",
      "endsWhen": "The uniform is removed or its daily use limit is reached.",
      "charges": "Unlimited; recharges automatically during rest."
    },
    "priceReason": "This uniform's advanced data-woven technology and unique design justify a high price, reflecting its utility in navigating Academy City.",
    "priceOriginal": 185,
    "priceReviewedAt": "2026-07-25T02:16:24.199016+00:00",
    "aiReviewedAt": "2026-07-25T02:16:24.199016+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_the_ominous_club_shard": {
    "id": "kivotos_item_the_ominous_club_shard",
    "name": "The Ominous Club Shard",
    "description": "The Ominous Club Shard, a fearsome obsidian fragment forged from the darkest anxieties and secret club vows, hums ominously in your grasp. Its solidified phobias warp your psyche, compelling you to act rashly upon fleeting desires and drawing unwanted attention from shadowy affiliations. The shard's malevolent aura amplifies your fear-based skills by +2, but it also sows paranoia, making you a target for club enforcers or rival members.",
    "category": "consumables",
    "price": 1000,
    "icon": "🖤",
    "stock": 18,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Paranoid Rampage",
      "Fearful Boost"
    ],
    "vendor": "club_supply",
    "shippedBy": "Courier Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Paranoid Rampage",
        "rules": "Activating the shard causes you to act on fleeting desires with a +2 bonus to Charisma (Persuasion) checks, but also triggers an aggressive reaction against any perceived threat. This effect lasts until the start of your next turn and can be ended by a successful DC 15 Wisdom saving throw."
      },
      {
        "title": "Fearful Boost",
        "rules": "The shard enhances your fear-based skills (+2 to checks), but also increases your paranoia level, drawing unwanted attention from club members. This enhancement lasts for 1 hour and can be ended by a successful DC 15 Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "The shard's malevolent energy is potent enough to affect even the lowest-level adventurer, though it requires basic understanding of club dynamics.",
    "vendorReason": "Club Supply exclusively stocks rare and dangerous items used by club members for their manipulative rituals and schemes.",
    "shippingDetail": "The shard is shipped in a specially insulated box to prevent its malevolent aura from affecting the courier.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect, with ongoing effects for up to 1 hour or until ended by a successful saving throw.",
      "endsWhen": "The shard's effects end upon a successful DC 15 Wisdom saving throw or when the object is destroyed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Ominous Club Shard's unique crafting materials and malevolent power justify its high price in XP.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T02:16:48.361747+00:00",
    "aiReviewedAt": "2026-07-25T02:16:48.361747+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_mk.42_academy_chosen_jacket": {
    "id": "kivotos_item_mk.42_academy_chosen_jacket",
    "name": "Mk.42 Academy Chosen Jacket",
    "description": "The Mk.42 Academy Chosen Jacket is a meticulously crafted ensemble that weaves advanced fiber-optic fibers into its tailored design, making it nearly indistinguishable in any campus setting. This jacket not only grants automatic access to exclusive club events but also projects an aura of unwavering confidence and authority, instantly elevating one's social standing with faculty members. The adaptive camouflage patterns ensure you blend seamlessly into the environment, whether navigating the bustling corridors or attending high-stakes meetings.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧥",
    "stock": 5,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Camouflage Mastery",
      "Priority Access"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Secure Package Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Camouflage Mastery",
        "rules": "The jacket's advanced fiber-optic weave allows it to perfectly blend with its surroundings. This effect is active as long as you are wearing the jacket, providing total concealment in Academy City environments. The camouflage is so effective that no hostile creature can perceive you at a range of 30 feet unless they succeed on an Intelligence (Investigation) check against a DC of 15."
      },
      {
        "title": "Priority Access",
        "rules": "When wearing the Mk.42 Academy Chosen Jacket, you receive automatic priority access to select club events and restricted areas within Academy City. This effect is passive while you have the jacket on, but it only applies during official school hours."
      }
    ],
    "levelRequirementReason": "Even freshmen are expected to know how to navigate the Academy's social hierarchy.",
    "vendorReason": "The academy armory stocks this jacket as a symbol of prestige and authority among its students.",
    "shippingDetail": "Ships within one school week via Secure Package Delivery, ensuring the jacket arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect while wearing the jacket.",
      "duration": "Active as long as you are wearing the jacket.",
      "endsWhen": "The effect ends when you remove the jacket or if it is destroyed.",
      "charges": "Unlimited; the jacket can be worn indefinitely."
    },
    "priceReason": "The jacket's advanced materials and craftsmanship justify its moderate price, despite not being a high-powered weapon or spell.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-25T02:16:56.922790+00:00",
    "aiReviewedAt": "2026-07-25T02:16:56.922790+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_chromatic_resonance_bit": {
    "id": "equestria_item_chromatic_resonance_bit",
    "name": "The Chromatic Resonance Bit for the Grand Forger",
    "description": "The Chromatic Resonance Bit for the Grand Forger gleams with a spectrum of shifting hues, each pulse resonating with one of Equestria's elemental forces. Crafted from rainbow-infused obsidian by master artisans, this bit amplifies a pony’s connection to a chosen element, granting fleeting glimpses into the interwoven currents of magic. It is said that those who wield it can channel raw elemental power for brief moments, enhancing their abilities with a touch.",
    "category": "consumables",
    "price": 8750,
    "icon": "✨",
    "stock": 12,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "elemental surge",
      "magic resistance boost"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Royal Pegasus Courier",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Elemental Surge",
        "rules": "Activate as an action to briefly amplify the user's connection to one of the five elemental forces: earth, water, air, fire, or lightning. The chosen element grants a +2 bonus to all ability checks and saving throws for 1 minute. This effect ends if the user sustains more than 50 points of damage in any form."
      },
      {
        "title": "Magic Resistance Boost",
        "rules": "For every hour the Chromatic Resonance Bit is held, the user gains a +2 bonus to their AC and saving throws. This effect persists as long as the bit remains in contact with the user’s mouth. If the user drops or removes the bit, this benefit ends immediately."
      }
    ],
    "levelRequirementReason": "Crafted by master artisans and tuned to Equestria's core magic frequencies, this item is designed for highly skilled forgers who have proven their worth.",
    "vendorReason": "As the official supplier of Canterlot, Canterlot Commerce ensures that only the most potent and rare items are available to its patrons.",
    "shippingDetail": "Delivered by the Royal Pegasus Courier with a guaranteed delivery time of three days.",
    "usage": {
      "activation": "Activate as an action for Elemental Surge, or continuously while held in the mouth for Magic Resistance Boost.",
      "duration": "Elemental Surge lasts for 1 minute. Magic Resistance Boost persists as long as the bit is held.",
      "endsWhen": "Elemental Surge ends if sustained damage exceeds 50 points. Magic Resistance Boost ends when the bit is removed or dropped.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted from rare rainbow-infused obsidian and tuned by master artisans, this item's price reflects its rarity and unparalleled craftsmanship.",
    "priceOriginal": 8750,
    "priceReviewedAt": "2026-07-25T02:17:16.336329+00:00",
    "aiReviewedAt": "2026-07-25T02:17:16.336329+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_arcane_echo_scroll": {
    "id": "equestria_item_arcane_echo_scroll",
    "name": "Arcane Echo Scroll - Cartographer’s Variant",
    "description": "The Arcane Echo Scroll - Cartographer’s Variant is a fragile parchment inscribed with ancient runes. Unfurled, it projects holographic echoes of past journeys across Equestria, revealing hidden pathways and long-lost landmarks. The intricate markings shimmer and shift in response to the viewer's intent, offering cryptic clues that can guide explorers to forgotten locations. Each scroll holds a fragment of an eldritch map, providing cartographers with a 5-level boost to their skill, but carries a risk of triggering a minor temporal distortion.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🗺️",
    "stock": 45,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "reveals hidden pathways",
      "boosts cartography skill"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Griffin Delivery Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveals Hidden Pathways",
        "rules": "When activated by the explorer, this scroll projects a holographic map revealing hidden paths within a 10-foot radius. This effect lasts for 1 minute and can be used once per short or long rest."
      },
      {
        "title": "Boosts Cartography Skill",
        "rules": "The scroll grants the user a +5 temporary bonus to their cartography skill check, which is effective until the end of their next turn. This effect can only be used once every 24 hours."
      }
    ],
    "levelRequirementReason": "This scroll provides useful but not overly powerful assistance for beginners and seasoned explorers alike.",
    "vendorReason": "The Ponyville Market is known for its diverse array of rare and antique items, making it the perfect place to find this unique cartographic aid.",
    "shippingDetail": "The scroll is shipped rolled in a protective case to ensure safe delivery.",
    "usage": {
      "activation": "Standard action",
      "duration": "1 minute or until the explorer moves out of range",
      "endsWhen": "Ends when the explorer moves more than 50 feet from where it was activated",
      "charges": "Unlimited, but can only be used once per short or long rest"
    },
    "priceReason": "The scroll's rarity and unique utility justify its price of 1000 XP.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T14:39:17.754565+00:00",
    "aiReviewedAt": "2026-07-25T14:39:17.754565+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_bit_of_starlight_resonance": {
    "id": "equestria_item_bit_of_starlight_resonance",
    "name": "Bit of Starlight Resonance - The Dream Weaver’s Touch",
    "description": "Forged during a lunar eclipse by the elusive Silverstream Clan, this bit of starlight resonates with the dreams and memories of ponies. Crafted from meteoric iron that glows faintly under moonlight, it subtly influences the wearer's subconscious, promoting calmness and creativity while enhancing dream recall. The cool metal feels perpetually fresh despite its age, and prolonged use can lead to vivid, dream-filled visions that may influence one’s creative endeavors.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌙",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "calmness and creativity",
      "enhanced dream recall"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Crystal Pony Delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Enhanced Dream Recall",
        "rules": "The wearer gains advantage on Intelligence (Insight) checks related to dreams or memories. This effect lasts until the end of their next short rest."
      },
      {
        "title": "Promotes Calmness and Creativity",
        "rules": "The wearer is considered to be in a calm state, reducing stress levels by 1d4 points. They also gain advantage on creativity-related checks or saving throws. This effect lasts for 8 hours."
      }
    ],
    "levelRequirementReason": "This item's subtle influence requires a certain level of maturity and control to manage without adverse effects.",
    "vendorReason": "The Crystal Empire is known for its deep connection with the elements, including the lunar cycle that this bit was forged under.",
    "shippingDetail": "Ships via special moonlight courier service, ensuring safe delivery during a full moon.",
    "usage": {
      "activation": "Passive effect upon donning the bit.",
      "duration": "Until next short rest or until removed.",
      "endsWhen": "The wearer removes it or completes their next short rest.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from rare meteoric iron and imbued with lunar magic, this bit is a valuable tool for artists and dreamers.",
    "priceOriginal": 625,
    "priceReviewedAt": "2026-07-25T02:17:06.173831+00:00",
    "aiReviewedAt": "2026-07-25T02:17:06.173831+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_chronometric_resonance_herald": {
    "id": "connectopia_item_chronometric_resonance_herald",
    "name": "The Chronometric Resonance Herald of Obsidian Ridge",
    "description": "The Chronometric Resonance Herald of Obsidian Ridge is a gleaming herald made from solidified temporal flux, intricately carved with ancient runes. When wielded, it emits a rhythmic pulse that subtly shifts time around the operator, enhancing the efficiency of nearby automated mining rigs. The device not only boosts their processing speed by 25% for 15 seconds but also stabilizes rig operations, increasing stability by +5%. Holding this herald feels like holding a piece of the very fabric of time itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Mining Efficiency Boost",
      "Rig Stability Increase"
    ],
    "vendor": "craft_corner",
    "shippedBy": "automated_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mining Efficiency Boost",
        "rules": "Activates on interaction, increases mining rig speed by +25% for 15 seconds. Ends when the wielder stops holding it or a major event interrupts the effect."
      },
      {
        "title": "Rig Stability Increase",
        "rules": "Passive effect that provides an additional +5% stability to nearby mining rigs. Lasts until the Herald is no longer in direct contact with a rig."
      }
    ],
    "levelRequirementReason": "Beginners can appreciate its utility, but it requires basic handling skills.",
    "vendorReason": "The Craft Corner specializes in tools that enhance productivity and efficiency for all Connectopian citizens.",
    "shippingDetail": "Ships via automated drones within a day from the nearest supply hub.",
    "usage": {
      "activation": "Interaction",
      "duration": "15 seconds",
      "endsWhen": "Wielder stops holding it or an event interrupts the effect",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its utility in enhancing mining efficiency without being overpowered.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:17:12.322301+00:00",
    "aiReviewedAt": "2026-07-25T02:17:12.322301+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_geothermal_blueprint_herald": {
    "id": "connectopia_item_geothermal_blueprint_herald",
    "name": "Ancient Geothermal Blueprint Herald of Blackstone Caverns",
    "description": "Unearthed from the deepest levels of Blackstone Caverns, this Ancient Geothermal Blueprint Herald is a parchment worn with age but still vibrant with arcane energy. Its intricate diagrams shift subtly under close inspection, revealing forgotten engineering secrets that could transform any settlement into an oasis of power and warmth. The herald's diagrams glow faintly in the dark, hinting at its ability to guide even the most novice engineer towards constructing a self-sustaining geothermal generator.",
    "category": "services",
    "price": 1000,
    "icon": "🔥",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "delivery_only",
    "effects": [
      "Self-Sustaining Generator Blueprint",
      "Increased Worker Productivity"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "pack_pony",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Self-Sustaining Generator Blueprint",
        "rules": "Activates upon successful construction of the blueprint, granting access to a self-sustaining geothermal generator. The generator increases power generation efficiency by +5% and extends the longevity of the heatstone used in its operation."
      },
      {
        "title": "Increased Worker Productivity",
        "rules": "Passive effect that boosts productivity in geothermal mines within 30 meters by +10%, making extraction more efficient. This effect lasts until the mine is depleted or the Herald's charges are exhausted."
      }
    ],
    "levelRequirementReason": "Requires a high level of expertise to properly interpret and utilize this ancient blueprint.",
    "vendorReason": "The Pioneer Post has established routes through even the most treacherous caverns, ensuring that such valuable blueprints reach those who can put them to use.",
    "shippingDetail": "Traveling by pack pony is both swift and reliable, but the Herald's fragile nature necessitates careful handling at all times.",
    "usage": {
      "activation": "Instantaneous upon construction of the blueprint.",
      "duration": "Until the geothermal generator reaches full capacity or until the Herald's charges are exhausted.",
      "endsWhen": "The generator is dismantled or the Herald is destroyed.",
      "charges": "Unlimited, but requires a successful DC 15 Craft (geology) check to construct."
    },
    "priceReason": "The Herald's rarity and the significant advantage it provides in constructing a self-sustaining generator justify its high price.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T02:17:24.179798+00:00",
    "aiReviewedAt": "2026-07-25T02:17:24.179798+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_quartz_harmonic_curiosity": {
    "id": "connectopia_item_quartz_harmonic_curiosity",
    "name": "The Quartz Harmonic Curiosity of Silent Echo Mesa",
    "description": "The Quartz Harmonic Curiosity of Silent Echo Mesa hums with a faint, resonant glow when near active mining sites. Its core pulses with a frequency that amplifies seismic readings by a full fifty percent, potentially revealing hidden quartz veins and rare mineral deposits beneath the frontier's surface. Crafters favor this talisman for its ability to generate small amounts of Quartz Resonance, an essential ingredient in the forging of high-end mining tools and artifacts.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💎",
    "stock": 1,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Enhances Seismic Detection",
      "Generates Quartz Resonance"
    ],
    "vendor": "block_smith",
    "shippedBy": "express_cargo",
    "levelRequirement": 45,
    "effectDetails": [
      {
        "title": "Enhanced Seismic Detection",
        "rules": "When near concentrated mining operations, this curiosity amplifies seismic readings by +50%, increasing the chance of detecting hidden quartz and rare mineral deposits (+20%). The effect is passive and lasts until the item is removed from a mining site."
      },
      {
        "title": "Quartz Resonance Generation",
        "rules": "This item generates small amounts of Quartz Resonance, usable for crafting. It regenerates at a rate of 1 unit per hour when not in use and up to 3 units can be held at any time."
      }
    ],
    "levelRequirementReason": "This item requires a high level character due to its advanced technology and the significant benefit it provides to mining operations.",
    "vendorReason": "Block Smith, with his extensive experience in frontier technology, is the only vendor capable of procuring such an advanced curiosity from Silent Echo Mesa.",
    "shippingDetail": "Express Cargo delivers this item via a specialized mining drone, ensuring it arrives swiftly and intact.",
    "usage": {
      "activation": "Passive effect while in proximity to mining operations.",
      "duration": "Instantaneous; lasts until removed from the site.",
      "endsWhen": "The item is taken away from a mining operation.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the advanced technology and unique benefits provided by the Quartz Harmonic Curiosity, making it worth its weight in XP.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T02:18:00.967682+00:00",
    "aiReviewedAt": "2026-07-25T02:18:00.967682+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_the_whispering_lord_of_valor": {
    "id": "pokemon_item_the_whispering_lord_of_valor",
    "name": "The Whispering Lord's Valor Berries",
    "description": "The Whispering Lord's Valor Berries are obsidian-hued and pulse with the echoes of countless battles fought within the Northern Territories, where the winds whisper of valor and strength. When consumed in a critical moment, they grant temporary resistance to status conditions and enhance your Pokémon’s attack power by 15%, allowing you to strategize with uncanny precision during intense combat. These berries are said to imbibe the very essence of the Northern Warriors who fought for honor and valor.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Resistance to Status Conditions",
      "Enhanced Attack Power"
    ],
    "vendor": "pokemart",
    "shippedBy": "Winged Courier",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Resistance to Status Conditions",
        "rules": "Consume this berry as a bonus action to gain temporary resistance to status conditions. The effect lasts for the duration of one short rest, and it can be used once per long rest."
      },
      {
        "title": "Enhanced Attack Power",
        "rules": "Upon consumption, your Pokémon’s attack power is increased by 15% until the start of your next turn. This effect does not stack with other similar effects but can be used multiple times per short rest."
      }
    ],
    "levelRequirementReason": "The berries are crafted from ancient relics and require a Pokémon of at least level 20 to harness their full potential.",
    "vendorReason": "Pokemarts have the necessary resources to source and distribute these rare berries, which are in high demand among experienced trainers.",
    "shippingDetail": "The Winged Courier ensures that the berries arrive fresh and potent, delivered within three days of purchase.",
    "usage": {
      "activation": "Bonus action to consume the berry during combat.",
      "duration": "Until the start of your next turn for Enhanced Attack Power; lasts one short rest for Resistance to Status Conditions.",
      "endsWhen": "The effects end when you finish a short or long rest, and no more uses are available until then.",
      "charges": "Uses per day: 1 use per short rest"
    },
    "priceReason": "The berries are crafted from rare relics found in the Northern Territories, making them a valuable and limited resource.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T02:17:45.045540+00:00",
    "aiReviewedAt": "2026-07-25T02:17:45.045540+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_mk_47_imperial_resonance_shard": {
    "id": "pokemon_item_mk_47_imperial_resonance_shard",
    "name": "Mk.47 Imperial Resonance Shard",
    "description": "The Mk.47 Imperial Resonance Shard is a crystalline fragment that amplifies your Pokémon's moves, granting you a tactical edge in battle. Harvested from defeated Mimikyus, this shard sings with the harmony of sonic energy, allowing you to predict your opponent’s next move and strike with precision. Holding it during combat not only increases critical hit chance by 5% but also has a 20% chance to confuse your foe, giving you an unexpected advantage in the heat of battle.",
    "category": "equipment",
    "price": 1200,
    "icon": "🔮",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Critical Hit Boost",
      "Confusion Chance"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Delivery Drone",
    "levelRequirement": 38,
    "effectDetails": [
      {
        "title": "Critical Hit Boost",
        "rules": "Increases critical hit chance by 5%. This effect lasts until the end of your next turn. The shard must be held during combat to activate this benefit."
      },
      {
        "title": "Confusion Chance",
        "rules": "There is a 20% chance that holding the shard will cause you to confuse your opponent for one round, requiring a successful Wisdom saving throw (DC 13) to resist. This effect can only occur once per battle."
      }
    ],
    "levelRequirementReason": "This item requires a high level to maximize its strategic and tactical benefits in the heat of combat.",
    "vendorReason": "The Safari Shop specializes in rare and exotic items, making it the perfect vendor for this unique shard.",
    "shippingDetail": "The delivery drone ensures swift transport from the region where the Mimikyus were defeated to your doorstep.",
    "usage": {
      "activation": "Passive effect when held during combat. The confusion ability can only trigger once per battle.",
      "duration": "Until the end of your next turn for critical hit boost; instant for confusion chance.",
      "endsWhen": "The effect ends when you lose control, the battle ends, or the shard is no longer held.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's rarity and unique benefits justify its price in experience points.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:17:51.745590+00:00",
    "aiReviewedAt": "2026-07-25T02:17:51.745590+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_the_legendary_berries_of_battles": {
    "id": "pokemon_item_the_legendary_berries_of_battles",
    "name": "The Legendary Berries of Battles",
    "description": "The Legendary Berries of Battles are born from the very essence of legendary Pokémon battles, harvested only on the most contested battlefields where the air hums with raw power. A single bite not only boosts your Pokémon's stats by a formidable 30% for two turns but also grants access to Tempest Strike, a move that can turn even the weakest foe into dust with its devastating 150 Power and 95% Accuracy.",
    "category": "consumables",
    "price": 1000,
    "icon": "🏆",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Massive Stat Boost",
      "Tempest Strike Access"
    ],
    "vendor": "league_store",
    "shippedBy": "Royal Guard Transport",
    "levelRequirement": 50,
    "effectDetails": [
      {
        "title": "Massive Stat Boost",
        "rules": "Upon consumption, the Pokémon’s Attack and Special Attack are increased by 30% for two turns. This effect grants temporary power but does not affect stat growth or permanent stats."
      },
      {
        "title": "Tempest Strike Access",
        "rules": "For one turn following consumption, the user gains access to Tempest Strike. This move deals 150 points of damage with a 95% accuracy rate and can be used once per battle."
      }
    ],
    "levelRequirementReason": "This item is reserved for elite trainers who have proven their worth through countless battles.",
    "vendorReason": "The league store caters exclusively to top-tier trainers and their rarest Pokémon, ensuring these legendary berries are in the right hands.",
    "shippingDetail": "Ships via the Royal Guard’s fastest couriers, ensuring the berries reach their destination fresh from the battlefield.",
    "usage": {
      "activation": "Eaten by the Pokémon as a consumable item.",
      "duration": "Temporary effects last for two turns each.",
      "endsWhen": "The effects end when the turns are over or if the Pokémon faints.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "This item is priced at 1000 XP, reflecting its rarity and the energy it draws from legendary battles.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-25T02:18:15.647763+00:00",
    "aiReviewedAt": "2026-07-25T02:18:15.647763+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_phantom_link_takers_resonance": {
    "id": "internet_item_phantom_link_takers_resonance",
    "name": "Phantom Link Takers' Resonance",
    "description": "The Phantom Link Takers' Resonance are delicate, iridescent threads spun from the forgotten online conversations of bygone internet users. These shimmering links pulse with residual energy that amplifies your presence within digital networks for a fleeting moment, granting an instant boost in processing speed and subtle influence over meme propagation. Activated, they weave into the fabric of the web itself, leaving behind brief visual distortions that hint at their ethereal origin.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 47,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Processing Speed Boost",
      "Meme Influence"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Processing Speed Boost",
        "rules": "When activated as a bonus action, the Phantom Link Takers' Resonance grant a +2 temporary bonus to Intelligence (Computers) checks and spell save DCs for 1 minute. This effect ends when you lose connection to a digital network or if your next short rest begins."
      },
      {
        "title": "Meme Influence",
        "rules": "For the duration of its use, this item allows you to subtly influence meme propagation within a digital network, providing a +1 bonus to checks related to social media and online communication. This effect ends when used or if your next short rest begins."
      }
    ],
    "levelRequirementReason": "This item is tailored for those who have already honed their skills in the digital realm, requiring a minimum of fifth level.",
    "vendorReason": "As a vendor specializing in rare and exotic tech artifacts, Data Dealer naturally stocks such a unique and powerful tool.",
    "shippingDetail": "Delivered swiftly by Drone Delivery within one business day.",
    "usage": {
      "activation": "Bonus action to activate; ends when used or at the start of your next short rest.",
      "duration": "1 minute per activation",
      "endsWhen": "Used or at the start of the next short rest",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's rarity and unique benefits justify its high price in the market.",
    "priceOriginal": 120,
    "priceReviewedAt": "2026-07-25T02:18:26.495333+00:00",
    "aiReviewedAt": "2026-07-25T02:18:26.495333+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_mk_71_compressed_links_of_viral_spread": {
    "id": "internet_item_mk_71_compressed_links_of_viral_spread",
    "name": "Mk.71 Compressed Links of Viral Spread",
    "description": "The Mk.71 Compressed Links of Viral Spread are forged from salvaged server components, their chaotic data swirling in a digital maelstrom. When activated, these links unleash a torrent of viral content that rapidly spreads across interconnected networks, instantly overwhelming nearby devices with memes and trends. A brief network scan reveals nearby data streams, but prolonged use risks attracting unwanted attention from digital security protocols, potentially triggering alerts that could expose the user to cyber threats.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "instant meme spread (targets within a radius)",
      "network scan (reveals nearby data streams)"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Courier Bot",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Meme Spread",
        "rules": "Activate as an action. Instantly spreads viral content targeting all creatures and objects within 30 feet of the user. Has a save DC of 12 to resist. The effect ends if the user takes any other action or if they are targeted by another creature's attack."
      },
      {
        "title": "Network Scan",
        "rules": "Activate as a bonus action. Reveals all creatures and objects within 60 feet that are connected to a data network. This scan lasts for 1 minute, but it can be ended early if the user moves more than 30 feet away from the target area."
      }
    ],
    "levelRequirementReason": "Requires basic understanding of digital networks and security protocols.",
    "vendorReason": "The cyber market specializes in cutting-edge tech, including items that manipulate data streams.",
    "shippingDetail": "Ships via Courier Bot within the next business day with a tracking number provided.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous for instant meme spread, lasts 1 minute for network scan.",
      "endsWhen": "User takes another action, targeted by an attack, or moves more than 30 feet away.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's unique components and advanced data manipulation justify its high price.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T02:18:53.073819+00:00",
    "aiReviewedAt": "2026-07-25T02:18:53.073819+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_curiosity_of_the_lost_pixel_archive": {
    "id": "internet_item_curiosity_of_the_lost_pixel_archive",
    "name": "Curiosity of the Lost Pixel Archive",
    "description": "The Curiosity of the Lost Pixel Archive is a small, iridescent shard that glows faintly with digital energy. Crafted from the remnants of an ancient internet server, it holds fragments of lost data and fleeting sounds. Hold it close to your ear for brief audio snippets of past internet activity—bees buzzing by forgotten forums, laughter from unseen streams—and be wary of the phantom echoes that may linger after use.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔍",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "audio snapshots of past internet moments",
      "phantom memory effect"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Spectral Messenger",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Audio Snapshots",
        "rules": "As a bonus action, you can activate the Curiosity to play back a random sound clip from an old internet moment. The duration is instantaneous; the effects end when used."
      },
      {
        "title": "Phantom Echoes",
        "rules": "There's a 20% chance (DC 15 Wisdom saving throw) that after using the Curiosity, you will hear phantom echoes for one minute. These echoes are distracting but do not deal damage or impose any status effects."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level to handle its digital energy safely.",
    "vendorReason": "The Pixel Shop specializes in rare and forgotten internet relics, making this artifact an ideal addition to their collection.",
    "shippingDetail": "Ships via the Spectral Messenger; arrives within a week.",
    "usage": {
      "activation": "Bonus action to activate.",
      "duration": "Instantaneous for audio playback, ends after one use.",
      "endsWhen": "Used or when the duration expires.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Curiosity's rarity and unique digital properties justify its moderate price in XP value.",
    "priceOriginal": 2100,
    "priceReviewedAt": "2026-07-25T02:18:56.617639+00:00",
    "aiReviewedAt": "2026-07-25T02:18:56.617639+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_zealous_render_s_oculi": {
    "id": "teyvat_item_zealous_render_s_oculi",
    "name": "Zealous Render’s Oculi of the Tempestuous Tide",
    "description": "Zealous Render's Oculi of the Tempestuous Tide are iridescent, gemstone-like orbs that hum with an ancient aquatic magic. When activated, they grant temporary Hydro resistance and unleash a forceful jet of water capable of shattering stone or metal. These oculi are said to have been crafted from the remains of a long-lost tempest spirit, and their wielder feels the pulse of the ocean's fury within them.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌊",
    "stock": 37,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Hydro Resistance",
      "Water Jet"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "Sky Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hydro Resistance",
        "rules": "When activated, Zealous Render’s Oculi provide a +50% bonus to resistance against Hydro damage. This effect lasts for 1 minute."
      },
      {
        "title": "Water Jet",
        "rules": "Upon activation, the oculi unleash a powerful jet of water that deals 200 points of Water Damage and has a 30% chance to Stun targets within its range (a 5-foot-radius burst centered on the user). The effect ends when the user or target takes Hydro damage."
      }
    ],
    "levelRequirementReason": "These oculi are accessible to all adventurers, as their power is thought to be harnessed from the very essence of the ocean.",
    "vendorReason": "The market in Mondstadt is known for its diverse wares, including items imbued with elemental magic, and these oculi are a prime example.",
    "shippingDetail": "Ships via the Sky Couriers, ensuring swift delivery from the bustling markets of Mondstadt to adventurers across Teyvat.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The user or a target within range takes Hydro damage",
      "charges": "Unlimited"
    },
    "priceReason": "Considering the item's limited daily stock and its balance with other epic gear, this price is fair.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T02:18:43.937559+00:00",
    "aiReviewedAt": "2026-07-25T02:18:43.937559+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_mk_87_dendro_oculi": {
    "id": "teyvat_item_mk_87_dendro_oculi",
    "name": "Mk.87 Dendro Oculi of the Verdant Core",
    "description": "The Mk.87 Dendro Oculi of the Verdant Core is a pair of resinous lenses forged from the heartwood of ancient Linhaven trees. When activated, they pulse with verdant magic, capable of accelerating plant growth by 30% in their immediate vicinity and unleashing a concentrated burst of primal power that can heal wounds at an alarming rate of 50 HP per second for up to five seconds. These oculi are said to be imbued with the very essence of Dendro magic, making them invaluable tools for both nature lorecasters and alchemists seeking to harness the raw energy of the forest.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌿",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Accelerates Plant Growth",
      "Heals Rapidly"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Sea Serpent Delivery",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Accelerates Plant Growth",
        "rules": "When activated, this effect increases the growth rate of plants within a 10-foot radius by 30%. This benefit lasts for one minute and can be used once per long rest."
      },
      {
        "title": "Heals Rapidly",
        "rules": "Activating this effect heals the user at the rate of 50 Hit Points per second for up to five seconds. The user must make a Constitution saving throw (DC 14) or be stunned and unable to move for one round after using this ability."
      }
    ],
    "levelRequirementReason": "This item is designed for characters who have already demonstrated a foundational understanding of Dendro magic, such as druids or clerics specializing in plant-based spells.",
    "vendorReason": "Inazuma Imports specializes in rare and exotic items from the Far East, including those with ties to nature and alchemy, making them a fitting vendor for this enchanted lens.",
    "shippingDetail": "Due to their delicate nature, these oculi must be shipped via Sea Serpent Delivery, ensuring safe transport across vast distances without damage.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous and lasts for the specified duration or until interrupted by an attack or spell.",
      "endsWhen": "The effect ends when its duration expires or it is interrupted by a successful attack or spell.",
      "charges": "Unlimited, but only one use per long rest."
    },
    "priceReason": "This price reflects the rarity and unique properties of these enchanted lenses, offering players a fair value for their potential in enhancing plant growth and healing abilities.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-25T02:18:58.913716+00:00",
    "aiReviewedAt": "2026-07-25T02:18:58.913716+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_crimson_resonance_oculi": {
    "id": "teyvat_item_crimson_resonance_oculi",
    "name": "Crimson Resonance Oculi of the Forbidden Citadel",
    "description": "The Crimson Resonance Oculi of the Forbidden Citadel are crafted from obsidian infused with the dark essence of a forgotten citadel. Their gaze reveals hidden truths yet distorts reality, leading to visions that can drive even the most stalwart warriors to madness. These relics, once used in forbidden rituals, grant their wielder a +20% critical hit chance and deal 300 points of Shadow damage on activation, but at a terrible cost: they may inflict the Blood Curse, reducing all healing received by half for an hour.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🩸",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Critical Hit Boost",
      "Shadow Damage"
    ],
    "vendor": "shadow_brokers",
    "shippedBy": "Nightfall Messenger",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Critical Hit Boost",
        "rules": "Activation: On activation. Duration: Instantaneous. Range/Area: Self only. This effect provides a +20% bonus to critical hit chance for the wielder, without any save DC or use limit."
      },
      {
        "title": "Shadow Damage",
        "rules": "Activation: On activation. Duration: Instantaneous. Range/Area: 5-foot radius centered on the wielder. Save DC: 18. If a creature within the area fails its saving throw, it takes 300 points of Shadow damage."
      }
    ],
    "levelRequirementReason": "These relics are too dangerous for those who aren't at least expert in combat and spellcasting.",
    "vendorReason": "The shadow brokers have a network that reaches into the darkest corners of the world, where such forbidden artifacts reside.",
    "shippingDetail": "Shipped by Nightfall Messenger with a special delivery that can only be completed under the cover of darkness.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use; recharges at dawn on the next night.",
      "charges": "1"
    },
    "priceReason": "The price reflects both the rarity of the item and its significant risk to the user.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-25T02:19:02.262514+00:00",
    "aiReviewedAt": "2026-07-25T02:19:02.262514+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_glitch_watcher_01": {
    "id": "internet_item_glitch_watcher_01",
    "name": "The Fractured Packet Watcher’s Echoes",
    "description": "The Fractured Packet Watcher’s Echoes are shimmering data packets that pulse with the fragmented memories of forgotten websites. These relics briefly restore lost data streams within your mind, offering a fleeting glimpse into the chaotic beauty of corrupted code and an unsettling awareness of the network's endless flow. Each packet is a fragment of bygone internet history, a relic from the days when browsers were simple and the web was vast.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 47,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Data Stream Restoration",
      "Enhanced Processing Speed"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Courier Drone Corporation",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Data Stream Restoration",
        "rules": "Consume one packet as an action to restore 100 Data Points. This effect is instantaneous and does not require a saving throw."
      },
      {
        "title": "Enhanced Processing Speed",
        "rules": "Grant +5 to all Intelligence (Computers) checks made within the next hour, requiring no save. The enhanced speed lasts until you use this item again or take a long rest."
      }
    ],
    "levelRequirementReason": "Requires at least level 10 to handle the potent data streams.",
    "vendorReason": "The Data Dealer has access to rare relics and artifacts, including these fragments of internet history.",
    "shippingDetail": "Delivered within 24 hours by a fleet of autonomous drones.",
    "usage": {
      "activation": "Consume as an action",
      "duration": "Instantaneous restoration; enhanced speed lasts until re-used or long rest",
      "endsWhen": "Used up, recharged with a long rest, or destroyed after 10 uses",
      "charges": "10"
    },
    "priceReason": "The price reflects the rare and powerful nature of these data fragments.",
    "priceOriginal": 120,
    "priceReviewedAt": "2026-07-25T02:19:10.629065+00:00",
    "aiReviewedAt": "2026-07-25T02:19:10.629065+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_runic_watcher_02": {
    "id": "internet_item_runic_watcher_02",
    "name": "Runic Watcher’s Packets of the Static Archive",
    "description": "Each packet of the Static Archive is a solidified fragment of the internet's forgotten past, encased in an obsidian casing etched with ancient runes. Consuming one grants you a fleeting glimpse into dormant programs and lost protocols, enhancing your Network Awareness by +10 for a day. However, prolonged exposure risks becoming part of the system itself, as Data Spirits may latch onto you, disrupting your focus until they are banished or dispelled.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Enhanced Network Awareness",
      "Attracting Hostile Data Spirits"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Cyber Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Network Awareness",
        "rules": "For a short duration, you gain advantage on checks to access hidden information from the network. This effect lasts for one day and can be activated once per long rest."
      },
      {
        "title": "Attracting Hostile Data Spirits",
        "rules": "There is a 20% chance that consuming these packets will attract hostile Data Spirits, which may attempt to disrupt your concentration or cause you harm. If this occurs, the packet's effects are immediately negated."
      }
    ],
    "levelRequirementReason": "These packets are designed for beginners who wish to experiment with network interaction without needing a high level of expertise.",
    "vendorReason": "Pixel Shop specializes in cutting-edge and experimental internet-related items, making these packets an ideal addition to their catalog.",
    "shippingDetail": "Ships via Cyber Courier's secure data stream, ensuring safe delivery of the volatile packets.",
    "usage": {
      "activation": "Eating one packet as a bonus action triggers its effects.",
      "duration": "Lasts for one day.",
      "endsWhen": "The duration ends or you consume another packet within the same day.",
      "charges": "Unlimited, but one packet per day."
    },
    "priceReason": "This price reflects the rarity and experimental nature of these packets, balancing their power with a reasonable cost for players to experiment safely.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T02:19:57.209000+00:00",
    "aiReviewedAt": "2026-07-25T02:19:57.209000+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_corrupted_curiosity_03": {
    "id": "internet_item_corrupted_curiosity_03",
    "name": "The Mk.47 Corrupted Packet of the Recursive Nightmare",
    "description": "The Mk.47 Corrupted Packet of the Recursive Nightmare is a squirming mass of encrypted data, its surface flecked with neon hues. This relic from the deep web promises to unravel the very fabric of digital networks but leaves consumers reeling in confusion and paranoia. Upon consumption, you gain an acute understanding of network vulnerabilities (+25 to Data Manipulation), yet this insight comes at a cost: for 1 hour, your perception is clouded (Confusion -3 to Accuracy). Additionally, there's a small chance that your actions mimic those of previous users, creating eerie echoes of past mistakes.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💀",
    "stock": 5,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Data Manipulation Boost",
      "Perception Clouding"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Black Market Delivery",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Data Manipulation Boost",
        "rules": "Active on consumption. Grants +25 to Data Manipulation for 1 hour. The effect ends if you take damage or use the ability again."
      },
      {
        "title": "Perception Clouding",
        "rules": "Passive effect, lasts until duration expires. Reduces your Accuracy by -3 due to confusion. Ends when the packet's effects are dispelled or upon taking significant damage (10+ points)."
      }
    ],
    "levelRequirementReason": "Requires a basic understanding of digital networks and cyber manipulation.",
    "vendorReason": "The cyber market specializes in exotic and dangerous items from the dark web, making it a fitting vendor for this relic.",
    "shippingDetail": "Ships via encrypted courier services with a 1-day delay to ensure the packet remains secure.",
    "usage": {
      "activation": "Consume",
      "duration": "1 hour",
      "endsWhen": "On taking damage greater than or equal to 10 points, using Data Manipulation again, or being dispelled by magic.",
      "charges": "Unlimited"
    },
    "priceReason": "Reflects the rarity and danger associated with accessing deep web artifacts.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T02:19:16.363555+00:00",
    "aiReviewedAt": "2026-07-25T02:19:16.363555+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_oscillating_gravity_binder": {
    "id": "grand_country_item_oscillating_gravity_binder",
    "name": "The Oscillating Gravity Binder - Mk.87",
    "description": "The Oscillating Gravity Binder - Mk.87 is a compact device forged from a hardened sugar core and reinforced with warped steel, capable of generating localized gravitational anomalies. By activating it, you can create brief moments of weightlessness or intense gravity around yourself, making it ideal for traversing treacherous terrains or launching objects with extraordinary force. This artifact comes with a subtle warning: its activation releases a faint hum that may confuse nearby enemies within 10 feet.",
    "category": "equipment",
    "price": 1000,
    "icon": "🚀",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Localized Gravity Manipulation",
      "Confusion Aura"
    ],
    "vendor": "side_seller",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Localized Gravity Manipulation",
        "rules": "By using an action, you create a small area of localized gravity manipulation. This effect lasts for 5 seconds and can either generate weightlessness within a 10-foot radius or apply crushing downward force in the same area. While active, you have resistance to falling damage and gain a +2 bonus to Strength (Jump) checks."
      },
      {
        "title": "Confusion Aura",
        "rules": "For as long as the gravity manipulation effect is active, any creature within 10 feet of you must make a Wisdom saving throw (DC 14) or be stunned for 1 round. This effect has no save on consecutive uses."
      }
    ],
    "levelRequirementReason": "The Oscillating Gravity Binder requires significant finesse and control, suitable only for experienced adventurers.",
    "vendorReason": "Side_seller is known for their unique stock of arcane and mechanical curiosities, making this item a perfect fit.",
    "shippingDetail": "Ships via Drone Delivery within 24 hours with a 50% discount on expedited shipping.",
    "usage": {
      "activation": "Action",
      "duration": "5 seconds per use",
      "endsWhen": "The effect ends when the duration expires or you deactivate it by using an action",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted from rare materials and requiring intricate craftsmanship, this device is a significant investment for any adventurer.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T02:19:20.483400+00:00",
    "aiReviewedAt": "2026-07-25T02:19:20.483400+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_unground_chronal_ladder": {
    "id": "grand_country_item_unground_chronal_ladder",
    "name": "The Unground Chronal Ladder - Fragment 42-B",
    "description": "The Unground Chronal Ladder - Fragment 42-B stands as an enigmatic construct, its steps a maelstrom of temporal flux. Each ascent triggers a brief phase where time seems to warp and loop around you, creating echoes of past movements. The ladder's chroniton residue hums with untamed power, causing disorientation if used for too long; extended contact risks drawing you into a temporal paradox from which there is no return.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Temporal Phase Shift",
      "Enhanced Mobility"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "Gravity Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Phase Shift",
        "rules": "When activated, the ladder causes time to phase around the user for 3 seconds. During this period, the user gains a +10 bonus to Dexterity (Acrobatics) checks and can move up to 5 feet faster as their steps seem to slip through temporal anomalies. This effect has a 24-hour cooldown."
      },
      {
        "title": "Enhanced Mobility",
        "rules": "For the duration of each phase, the user gains an increase in movement speed by 10%. If the user remains on the ladder for more than 5 seconds, this bonus increases to +20% until the next long rest."
      }
    ],
    "levelRequirementReason": "Even with its fragmentary nature, the ladder's raw temporal power demands a basic understanding of manipulating time.",
    "vendorReason": "Vertical Vendor specializes in arcane devices and fragments from ancient origins, making this item a natural addition to their inventory.",
    "shippingDetail": "Ships via Gravity Cart's express service; delivery takes two days but requires an extra cautionary fee.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect, lasts for 3 seconds per use",
      "endsWhen": "Ends when the user leaves the ladder or is interrupted by damage",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's rare material and arcane properties justify its price, offering unique temporal manipulation abilities without overpowered effects.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:19:40.393689+00:00",
    "aiReviewedAt": "2026-07-25T02:19:40.393689+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_angular_layer_resonator": {
    "id": "grand_country_item_angular_layer_resonator",
    "name": "The Angular Layer Resonator - Prototype Sigma",
    "description": "The Angular Layer Resonator - Prototype Sigma, a sleek obsidian device adorned with spinning brass gears and etched in ancient runes, harnesses the very fabric of layer structures to manipulate their integrity. Its user can scan for weak points or trigger localized collapses, making it indispensable when navigating treacherous terrain or exploiting architectural weaknesses. With each activation, this resonator leaves an echo that can reveal hidden passages within layers, ensuring the user always finds a path forward in unstable environments.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔊",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Layer Resonance Scan",
      "Localized Collapse"
    ],
    "vendor": "layer_market",
    "shippedBy": "Delivery Zeppelin",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Layer Resonance Scan",
        "rules": "As a bonus action, the wielder can activate this resonator to scan an area for structural weaknesses within layer structures. This effect lasts until the start of your next turn and reveals any unstable zones or hidden passages. No saving throw is needed."
      },
      {
        "title": "Localized Collapse",
        "rules": "This resonator can be used as a reaction when you are in an unstable area to trigger a localized collapse, creating a safe passage through weakened layers. The target must succeed on a DC 18 Dexterity saving throw or be knocked prone and take 2d6 force damage. This effect has a 2-second cooldown."
      }
    ],
    "levelRequirementReason": "This resonator is designed for ease of use, allowing even novice explorers to access its capabilities.",
    "vendorReason": "The Layer Market specializes in cutting-edge tools and devices for navigating layer structures, making it the natural vendor for such an item.",
    "shippingDetail": "Ships via a Delivery Zeppelin with expedited delivery within three days of purchase.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "Instantaneous (Layer Resonance Scan) / Until the start of your next turn (Localized Collapse)",
      "endsWhen": "The effect ends when its duration expires or the user is incapacitated.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This resonator offers a balanced price for its utility and ease of use, making it accessible yet valuable.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T14:39:29.470597+00:00",
    "aiReviewedAt": "2026-07-25T14:39:29.470597+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_chronometric_dragonscale_maker": {
    "id": "earth_land_item_chronometric_dragonscale_maker",
    "name": "The Chronometric Dragonscale Maker's Scroll",
    "description": "The Chronometric Dragonscale Maker's Scroll unfurls like a shimmering chronometer, its scales reflecting the ancient power of time itself. Unleashing this scroll allows you to warp your perception of time in combat, either accelerating or decelerating it at will, granting you a tactical edge by dodging attacks and setting up precise strikes. The scroll's temporal pulse can also momentarily slow enemy movements, giving you precious seconds to exploit their sluggishness.",
    "category": "consumables",
    "price": 1000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Acceleration",
      "Enemy Slowdown"
    ],
    "vendor": "magic_shop",
    "shippedBy": "winged_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Acceleration",
        "rules": "As a bonus action, the user can accelerate time around themselves by +50% movement speed for up to 1 minute. This effect ends when the user recharges their concentration or is incapacitated."
      },
      {
        "title": "Enemy Slowdown",
        "rules": "By expending one of its charges, the scroll can slow down nearby enemies' attack animations by -20% movement speed for 3 seconds upon activation. This effect ends when any enemy within 10 feet makes an attack roll or the scroll is destroyed."
      }
    ],
    "levelRequirementReason": "The scroll's power requires a basic understanding of temporal mechanics to wield effectively.",
    "vendorReason": "Magic Shop stocks rare and powerful magical artifacts, including scrolls that manipulate time and space.",
    "shippingDetail": "Delivered swiftly by winged messenger, ensuring the scroll arrives intact in its protective case.",
    "usage": {
      "activation": "Bonus action to activate either effect; concentration required for Temporal Acceleration.",
      "duration": "Up to 1 minute for Temporal Acceleration, instantaneous for Enemy Slowdown.",
      "endsWhen": "Concentration ends or the scroll is destroyed for Temporal Acceleration; attack roll or destruction for Enemy Slowdown.",
      "charges": "Limited to 2 charges per day"
    },
    "priceReason": "The scroll's balanced price reflects its moderate power and limited daily use.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T02:20:28.479181+00:00",
    "aiReviewedAt": "2026-07-25T02:20:28.479181+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_glacial_resonance_shard": {
    "id": "earth_land_item_glacial_resonance_shard",
    "name": "Resonance Shard of the Ice Wall’s Lament",
    "description": "The Resonance Shard of the Ice Wall’s Lament is a jagged, icy fragment that hums with the sorrowful echo of an ancient glacial collapse. Crafted from the heart of a frozen wall once shattered by titanic forces, it resonates with cold magic and dragon whispers. When held, this shard grants its bearer resistance to cold damage and the ability to detect nearby traces of dragon magic or powerful frost spells.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧊",
    "stock": 44,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Resistance to Cold",
      "Detect Dragon Magic"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "ice_sled",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cold Resistance",
        "rules": "Activate as a bonus action. Grants temporary resistance to all cold damage equal to your proficiency bonus for 1 minute, renewable once per short or long rest."
      },
      {
        "title": "Detect Dragon Magic",
        "rules": "Passive effect while holding the shard. You can use an action to gain the benefits of Detect Magic, but only to detect magical auras related to dragons and ice. This ability is usable three times per day, resting between uses."
      }
    ],
    "levelRequirementReason": "Suitable for all levels as it provides useful cold resistance without being overly powerful.",
    "vendorReason": "The Earth Emporium specializes in rare and magical artifacts derived from natural elements, making this shard a fitting addition to their stock.",
    "shippingDetail": "Shipped via enchanted ice sleds that ensure the shard remains frozen during transit, preserving its magic.",
    "usage": {
      "activation": "Bonus action for Cold Resistance; Passive Detect Dragon Magic until used or rested.",
      "duration": "1 minute per activation of Cold Resistance. Detect Dragon Magic is a one-time daily use.",
      "endsWhen": "The effect ends when the duration expires, or if you stop holding the shard.",
      "charges": "Three uses per day"
    },
    "priceReason": "Balanced price for its utility and limited daily activations.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-25T02:20:06.814398+00:00",
    "aiReviewedAt": "2026-07-25T02:20:06.814398+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_rune_of_scorched_genesis": {
    "id": "earth_land_item_rune_of_scorched_genesis",
    "name": "Runic Device of Scorched Genesis Service",
    "description": "The Runic Device of Scorched Genesis, a volcanic artifact carved from obsidian and imbued with the spirit of dormant lava, pulsates with residual heat. When activated, it heats its surroundings to scorching temperatures, hardening molten rock into solid stone in mere moments. Its power amplifies fire-based attacks by +50% for 12 seconds, but prolonged use risks catastrophic overheating that could destroy both the device and the wielder's hand.",
    "category": "services",
    "price": 1000,
    "icon": "🔥",
    "stock": 8,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Heats a 10-foot radius area to scorching temperatures",
      "Temporarily enhances fire damage by +50%"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "dragon_air_cargo",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Scorched Heat",
        "rules": "Activates as an action. Creates a 10-foot radius, 20-foot tall column of intense heat that lasts for 1 minute or until the user stops concentrating on it (a bonus action is required to maintain). The area within the column has a temperature of at least 1,500 degrees Fahrenheit and can harden lava into stone in seconds. Concentration ends early if the user takes damage."
      },
      {
        "title": "Flame Boost",
        "rules": "Activates as an action. Increases fire-based attacks made by the user within a 30-foot radius by +50% for 12 seconds. This effect can be used once per short or long rest and requires concentration."
      }
    ],
    "levelRequirementReason": "Requires minimal magic affinity but must be wielded carefully to avoid overheating.",
    "vendorReason": "The Guild Quartermaster deals in unique and powerful artifacts, including those from volcanic regions.",
    "shippingDetail": "Ships via dragon courier with a 1-day delivery time.",
    "usage": {
      "activation": "Action or bonus action to activate and maintain the effects; concentration is required for both effects.",
      "duration": "Scorched Heat lasts 1 minute, Flame Boost is instantaneous but requires concentration. Both end if the user stops concentrating.",
      "endsWhen": "Concentration ends early due to damage or when the effect's duration expires.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at a lower price given its limited and manageable effects.",
    "priceOriginal": 21000,
    "priceReviewedAt": "2026-07-25T14:39:58.750888+00:00",
    "aiReviewedAt": "2026-07-25T14:39:58.750888+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_angular_gravity_ward_01": {
    "id": "grand_country_item_angular_gravity_ward_01",
    "name": "The Obsidian Spine Ward",
    "description": "The Obsidian Spine Ward is a jagged, angular shield crafted from the very essence of gravity itself—forged in the heart of an ancient, cursed mountain range. Its obsidian spikes hum with latent gravitational force, offering fleeting moments of controlled descent and protection against sudden drops. Though its touch is cursed, it grants a brief respite for those who dare to wield it, allowing them to navigate treacherous falls with a semblance of grace.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Fleeting Gravity Shield",
      "Controlled Descent"
    ],
    "vendor": "side_seller",
    "shippedBy": "Vertical Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Fleeting Gravity Shield",
        "rules": "Activates as a reaction when you fall. Provides temporary gravity resistance, reducing falling damage by half for up to 30 seconds. Ends if you land or the duration expires."
      },
      {
        "title": "Controlled Descent",
        "rules": "Slows your fall speed by 50%, allowing for a controlled descent. Lasts until the end of your next turn. This effect can be used once per short rest."
      }
    ],
    "levelRequirementReason": "Requires significant control over gravity to properly harness the Obsidian Spine Ward's power.",
    "vendorReason": "Side Seller specializes in rare and cursed artifacts, making The Obsidian Spine Ward a fitting addition to their inventory.",
    "shippingDetail": "Ships via Vertical Courier with expedited service for an additional cost.",
    "usage": {
      "activation": "Reaction",
      "duration": "Up to 30 seconds or until the end of your next turn",
      "endsWhen": "Landing or duration expires, once per short rest",
      "charges": "Unlimited"
    },
    "priceReason": "The Obsidian Spine Ward's unique ability to provide temporary gravity resistance and controlled descent makes it a valuable tool for adventurers facing treacherous terrain.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T14:39:56.258869+00:00",
    "aiReviewedAt": "2026-07-25T14:39:56.258869+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_curved_layer_ward_02": {
    "id": "grand_country_item_curved_layer_ward_02",
    "name": "The Layered Rotwood Ropes of Descent",
    "description": "The Layered Rotwood Ropes of Descent are a rare and eerie artifact, their twisted form crafted from ancient rotwood that has petrified over millennia. These ropes pulse with chaotic energy, offering safe passage through vertiginous drops. Legend whispers they subtly alter one's perception, causing fleeting hallucinations as you descend. Though the climb is perilous, these ropes reduce fall damage by 20% and grant a 15% increase in climbing speed.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌿",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Reduces Fall Damage",
      "Increased Climbing Speed"
    ],
    "vendor": "layer_market",
    "shippedBy": "Delivery Drone",
    "levelRequirement": 30,
    "effectDetails": [
      {
        "title": "Reduced Fall Damage",
        "rules": "When you fall, reduce the damage by 20%. This effect lasts until the start of your next turn and can only be used once per short or long rest."
      },
      {
        "title": "Increased Climbing Speed",
        "rules": "You gain a +1d6 bonus to climbing checks for 1 hour. This effect can be used once per day."
      }
    ],
    "levelRequirementReason": "Only those of considerable strength and experience are capable of wielding such an artifact safely.",
    "vendorReason": "The Layer Market is known for its unique and dangerous goods, making it the perfect vendor for these enchanted ropes.",
    "shippingDetail": "Due to their delicate nature, they must be shipped via the Delivery Drone service, which ensures safe delivery within a week.",
    "usage": {
      "activation": "Use as an action when you are about to fall or start climbing.",
      "duration": "Instantaneous and ongoing for the duration of your fall.",
      "endsWhen": "At the start of your next turn after using it during a fall, or at the end of 1 hour for increased climbing speed.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The rarity and magical properties of these ropes justify their price, making them a valuable asset to any adventurer's arsenal.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:20:56.941410+00:00",
    "aiReviewedAt": "2026-07-25T02:20:56.941410+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_twisted_gravity_ward_03": {
    "id": "grand_country_item_twisted_gravity_ward_03",
    "name": "The Chronal Fracture Ropes",
    "description": "The Chronal Fracture Ropes, forged from intertwined time strands, momentarily warp gravity around you, allowing for swift ascents and descents in otherwise impenetrable gravity wells. These ropes are a marvel of temporal engineering, but their use is fraught with risk; prolonged exposure can unravel the fabric of reality itself, creating destabilizing distortions that ripple through time. Careful travelers have reported that these ropes attract the vigilant attention of the 'Guardians of the Layers,' who patrol the dimensional crossroads with an iron fist.",
    "category": "curiosities",
    "price": 6500,
    "icon": "⏳",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Briefly alters local gravity",
      "Allows limited vertical traversal"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "High-Speed Delivery",
    "levelRequirement": 45,
    "effectDetails": [
      {
        "title": "Temporal Warp (1/short rest)",
        "rules": "Activates as a bonus action, creating a localized gravitational anomaly that allows the user to ascend or descend up to 30 feet vertically. The effect lasts for 1 second and can be used once per short rest. A successful DC 20 Wisdom saving throw negates this effect if the user remains stationary during the duration."
      },
      {
        "title": "Temporal Instability",
        "rules": "The use of these ropes has a chance to create brief temporal distortions, which last for 1 round and have a 5% chance per minute of occurrence. If a distortion is created, any creature within 30 feet must succeed on a DC 20 Dexterity saving throw or be teleported up to 10 feet away from the user, dealing 1d6 force damage."
      }
    ],
    "levelRequirementReason": "Only those of great power and experience can wield these delicate but dangerous ropes without causing catastrophic temporal anomalies.",
    "vendorReason": "Vertical Vendor specializes in items that defy the natural order, making The Chronal Fracture Ropes a perfect fit for their inventory.",
    "shippingDetail": "Ships via High-Speed Delivery with an expedited timeline of one week. Special handling is required to ensure no temporal disruptions occur during transit.",
    "usage": {
      "activation": "Bonus action to use, once per short rest.",
      "duration": "1 second burst; negated by a successful saving throw if stationary.",
      "endsWhen": "Effect ends after 1 second or upon the user's next turn if stationary.",
      "charges": "Recharges on completion of a long rest."
    },
    "priceReason": "The intricate craftsmanship and rare materials used in these ropes, combined with their potential for catastrophic misuse, justify this high price.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T02:21:23.587724+00:00",
    "aiReviewedAt": "2026-07-25T02:21:23.587724+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_central_nulls_of_void_marked": {
    "id": "doughnut_hole_item_central_nulls_of_void_marked",
    "name": "The Central Nulls of Void Marked",
    "description": "The Central Nulls of Void Marked are obsidian spheres that pulse with an unsettling hum, a remnant from when the void first expanded. Their touch is warm yet chilling, radiating a sense of infinite nothingness. Holding one causes fleeting visions of impossible geometries and echoes of silence, potentially accelerating localized entropy around you by 5 for three turns. These relics are rare, crafted in the deepest reaches of the Nulls themselves.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌑",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Void Acceleration",
      "Entropic Echo"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Dimensional Rift Courier",
    "levelRequirement": 25,
    "effectDetails": [
      {
        "title": "Void Acceleration",
        "rules": "While holding a Central Null of Void Marked, you accelerate localized entropy by 5 for three turns. This effect has no save DC and can be used once per short rest."
      },
      {
        "title": "Entropic Echo",
        "rules": "There is a 10% chance that each time you use the item, it triggers a minor void distortion in the area around you, which lasts for one turn. This effect has no save DC and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The complexity of interacting with these relics requires a high level of control and understanding of void mechanics.",
    "vendorReason": "Void Vendor is known for dealing in the most peculiar and powerful artifacts from the Nulls, including these rare relics.",
    "shippingDetail": "Due to their delicate nature, these relics are shipped via a special container that ensures safe delivery through the rifts of the void.",
    "usage": {
      "activation": "Object Interaction action",
      "duration": "Instantaneous effect with ongoing results for three turns",
      "endsWhen": "Effect duration ends or item is used again",
      "charges": "Unlimited, but can only be used once per short rest"
    },
    "priceReason": "The rarity and unique properties of these relics justify a price that reflects their value in the D&D market.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:22:04.025598+00:00",
    "aiReviewedAt": "2026-07-25T02:22:04.025598+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_kaleidoscopic_marked_nulls": {
    "id": "doughnut_hole_item_kaleidoscopic_marked_nulls",
    "name": "Kaleidoscopic Marked Nulls",
    "description": "The Kaleidoscopic Marked Nulls are fragments plucked from the unstable edges of collapsing kaleidoscopic rifts. They glow with an internal, ever-shifting light, a mesmerizing display of impossible hues that dances and morphs in your vision. Consuming these nulls grants a fleeting moment of heightened perception and awareness, but prolonged exposure can lead to disorienting hallucinations and temporary color blindness. The air around them carries the faint scent of burnt sugar and static electricity.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Heightened Perception",
      "Color Blindness Risk"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Drone Delivery System",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heightened Perception",
        "rules": "The user gains a +3 bonus to Perception checks for two consecutive turns. This effect is instantaneous upon consumption."
      },
      {
        "title": "Color Blindness Risk",
        "rules": "There is a 5% chance of temporary color blindness lasting one minute after consuming the nulls. The user can make a Wisdom saving throw (DC 14) to avoid this effect."
      }
    ],
    "levelRequirementReason": "The kaleidoscopic nature of these fragments requires some familiarity with sensory distortions.",
    "vendorReason": "Hole Hawker's extensive network allows them to source rare and exotic items from the most remote regions.",
    "shippingDetail": "Delivered within a day, but the fragility of the nulls requires special handling.",
    "usage": {
      "activation": "Instantaneous consumption upon contact with the mouth.",
      "duration": "2 turns of heightened perception followed by one minute of color blindness if triggered.",
      "endsWhen": "The effects expire naturally after their duration ends or if consumed again before the end of its effect.",
      "charges": "Unlimited; each null is a single-use item."
    },
    "priceReason": "The rarity and unstable nature of these fragments justify this price point.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T02:22:30.466654+00:00",
    "aiReviewedAt": "2026-07-25T02:22:30.466654+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_mk_28_central_nulls": {
    "id": "doughnut_hole_item_mk_28_central_nulls",
    "name": "Mk.28 Central Nulls",
    "description": "Forged within the heart of a miniature, stabilized void event, Mk.28 Central Nulls are unnervingly smooth and intensely cold to the touch. When activated, these nulls create a localized zone of near-total silence within a five-meter radius for three turns, disrupting enemy magic casting attempts. The wielder feels an unsettling calm as nearby sounds are dampened, but the true power lies in its ability to momentarily negate status effects on the user, granting them a brief respite from debilitating conditions.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔇",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Silence",
      "Status Negation"
    ],
    "vendor": "center_seller",
    "shippedBy": "Temporal Conveyance Unit",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Silence",
        "rules": "When activated (requires 10 Warts), Mk.28 Central Nulls create a localized zone of near-total silence within a five-meter radius that lasts for three turns, disrupting enemy magic casting attempts and reducing their effective spellcasting DC by 5."
      },
      {
        "title": "Status Negation",
        "rules": "Upon activation, the user gains temporary immunity to all status effects for one minute. This effect can only be used once every long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for high-level characters who require a tool capable of disrupting magic and providing immediate respite from debilitating conditions.",
    "vendorReason": "The center_seller specializes in rare and exotic items, including those forged within the heart of miniature void events.",
    "shippingDetail": "Ships via Temporal Conveyance Unit with a one-week delivery delay due to the item's delicate nature.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous, but lasts for three turns once activated",
      "endsWhen": "Ends when its duration expires or the user is hit by an attack",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity and unique crafting process justify this balanced XP price.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-25T02:21:51.002726+00:00",
    "aiReviewedAt": "2026-07-25T02:21:51.002726+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_jade_spiral_finder": {
    "id": "grand_country_item_jade_spiral_finder",
    "name": "Jade Spiral Finder's Hooks",
    "description": "The Jade Spiral Finder's Hooks are crafted from a rare jade that glows faintly in moonlight, their spiraling design forged by ancient artisans. These hooks not only provide unmatched traction on slick surfaces but also subtly shift your weight to enhance stability and balance during ascent. The jade is said to be imbued with the essence of nature itself, making them invaluable tools for any explorer or climber seeking to conquer treacherous heights.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧗‍♀️",
    "stock": 42,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Nature's Grip",
      "Silent Ascent"
    ],
    "vendor": "side_seller",
    "shippedBy": "Rolling Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Nature's Grip",
        "rules": "When you use these hooks, they provide a +2 bonus to your Athletics checks for climbing. This effect lasts until the end of your next short rest."
      },
      {
        "title": "Silent Ascent",
        "rules": "You can move up at twice your normal climbing speed when using these hooks. Additionally, you take no fall damage if you successfully climb a height equal to or less than 30 feet within the duration of this effect."
      }
    ],
    "levelRequirementReason": "These hooks are designed for beginners and adventurers alike, requiring only basic climbing skills.",
    "vendorReason": "Side sellers often have a wide range of items that cater to adventurers' unique needs, including these versatile climbing tools.",
    "shippingDetail": "Delivered by the Rolling Cart, known for its timely and reliable service.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous activation; lasts until the end of your next short rest",
      "endsWhen": "At the end of your next short rest",
      "charges": "Unlimited uses"
    },
    "priceReason": "The jade used in these hooks is rare, and their unique design adds significant value to any adventurer's gear.",
    "priceOriginal": 180,
    "priceReviewedAt": "2026-07-25T02:21:38.061023+00:00",
    "aiReviewedAt": "2026-07-25T02:21:38.061023+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_vertical_layer_hook_7": {
    "id": "grand_country_item_vertical_layer_hook_7",
    "name": "Vertical Layer Hook - 7",
    "description": "This Vertical Layer Hook - 7 is a marvel of alchemy and blacksmithing, forged from solidified donut dough and enchanted with a pulsating energy. It effortlessly pulls you skyward, ignoring even the strongest structural imperfections. Its unique design ensures that even if the ground beneath you shifts, it will maintain its grip, making it an invaluable tool for adventurers seeking to ascend quickly. Beware: prolonged use can lead to disorientation and a sudden, uncontrollable craving for powdered sugar.",
    "category": "equipment",
    "price": 1000,
    "icon": "⬆️",
    "stock": 17,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Rapid Ascension",
      "Structural Mastery"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "Delivery Drone",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Rapid Ascension",
        "rules": "As an action, you can activate the hook to ascend rapidly. The hook provides a +2 bonus to your AC and grants a +10 foot movement speed for 1 minute. This effect ends if you are hit by an attack or fall prone."
      },
      {
        "title": "Structural Mastery",
        "rules": "While active, the hook ignores any damage reduction from structural weaknesses up to 50%. It does not function in environments without solid ground support. If the ground beneath you is compromised, it retracts and ends its effect immediately."
      }
    ],
    "levelRequirementReason": "This item's unique mechanics and power level require a high-level character to effectively utilize.",
    "vendorReason": "The Vertical Vendor specializes in items that assist with ascension, making this hook an ideal addition to their inventory.",
    "shippingDetail": "Ships within one business day; requires signature upon delivery.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until the ground is compromised",
      "endsWhen": "You are hit by an attack, fall prone, or the ground beneath you shifts",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the item's unique alchemical properties and the high-level demand for such a versatile ascension tool.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T02:21:55.551777+00:00",
    "aiReviewedAt": "2026-07-25T02:21:55.551777+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_forbidden_layer_hook_of_echoes": {
    "id": "grand_country_item_forbidden_layer_hook_of_echoes",
    "name": "Forbidden Layer Hook of Echoes",
    "description": "The Forbidden Layer Hook of Echoes hums with a spectral resonance, its iron grip warped by the whispers of forgotten dimensions. This macabre tool can briefly expose hidden pathways in stone and reveal unstable layers within ancient walls, but it also risks attracting the attention of unseen entities—creatures born from fractured realities. Caution is advised for those who wield this dangerous artifact; the echoes it summons are not easily dismissed.",
    "category": "forbidden",
    "price": 1000,
    "icon": "👻",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Reveals Hidden Layers",
      "Attracts Minor Dimensional Instability"
    ],
    "vendor": "layer_market",
    "shippedBy": "Shadow Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveals Hidden Layers",
        "rules": "As an action, you can use the hook to scan a section of stone or metal within range. This reveals any hidden layers or secret compartments for up to 5 feet in diameter, but the effect has a 10% chance of causing minor dimensional instability."
      },
      {
        "title": "Attracts Minor Dimensional Instability",
        "rules": "For every successful reveal with this hook within an hour, there is a 20% cumulative chance that creatures from unstable dimensions will attempt to interact with you. These entities are not hostile but can be disorienting and dangerous if left unchecked."
      }
    ],
    "levelRequirementReason": "Even the simplest explorers should approach this item with caution due to its unpredictable nature.",
    "vendorReason": "The Layer Market specializes in forbidden artifacts, making it a logical place for such an item.",
    "shippingDetail": "Ships under cover of night, delivered within three nights if the shipment is deemed urgent by the vendor.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends once used or if the hook breaks in combat.",
      "charges": "Unlimited, but requires a short rest to use again."
    },
    "priceReason": "This item's price reflects its rarity and the risk it poses, balancing its utility with potential dangers.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T02:22:25.561673+00:00",
    "aiReviewedAt": "2026-07-25T02:22:25.561673+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_oscillating_nexus_claim": {
    "id": "connectopia_item_oscillating_nexus_claim",
    "name": "The Harmonious Claimed Nexus Module - Series 7",
    "description": "The Harmonious Claimed Nexus Module - Series 7 is a pulsating core salvaged from a collapsed mining station. Its surface hums with latent energy, and when connected to your base's core, it dramatically increases crafting speed by 30% and provides a minor shield against structural instability within the frontier. The module emits a low hum that attracts mechanical scavengers, increasing the chance of encountering these rare machines around your base. Crafters who use this module can repurpose its components into a rudimentary data relay for future projects.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚡️",
    "stock": 37,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Crafting Speed Boost",
      "Structural Integrity Bonus"
    ],
    "vendor": "craft_corner",
    "shippedBy": "automated_drone",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Crafting Speed Boost",
        "rules": "Activates as an action. Increases crafting speed by 30% for 1 hour. Ends when the module is disconnected or destroyed."
      },
      {
        "title": "Structural Integrity Bonus",
        "rules": "Passive effect that provides a +5 bonus to saving throws against structural instability within the frontier. Ends when the module is disconnected or destroyed."
      }
    ],
    "levelRequirementReason": "Requires a minimum of 10 levels to manage and benefit from the advanced capabilities of this module.",
    "vendorReason": "Craft Corner specializes in high-quality, salvaged tech that can be repurposed for various applications.",
    "shippingDetail": "Ships via automated drones with a 2-day delivery guarantee.",
    "usage": {
      "activation": "Action to connect and disconnect from the base core; passive effects are always active while connected.",
      "duration": "Active for 1 hour each time activated, until disconnected or destroyed.",
      "endsWhen": "Disconnected or destroyed",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect the advanced technology and limited availability of salvaged components.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:22:13.023582+00:00",
    "aiReviewedAt": "2026-07-25T02:22:13.023582+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_modular_extraction_claim": {
    "id": "connectopia_item_modular_extraction_claim",
    "name": "The Pristine Claimed Extraction Conduit - Beta-9",
    "description": "The Pristine Claimed Extraction Conduit - Beta-9 is a meticulously crafted mining conduit, its surface still gleaming from the harsh frontier environment it was found in. Crafted from ancient, resilient alloys and infused with the latent energy of forgotten research, this conduit enhances your mining efforts by increasing extraction speed by 15% and reducing tool wear by 10%. It also emits a rhythmic pulse that aligns with seismic activity, aiding in the precise location of valuable materials.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛏️",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Enhanced Extraction",
      "Reduced Tool Wear"
    ],
    "vendor": "block_smith",
    "shippedBy": "ground_sled",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Extraction",
        "rules": "Passive effect. Increases mining yield by 15%. This enhancement applies to any mining activity conducted with the conduit in use, whether manually or through automated machinery."
      },
      {
        "title": "Reduced Tool Wear",
        "rules": "Passive effect. Decreases tool wear by 10% for each successful mining attempt made while using this conduit. This benefit lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This item requires no specific level because it is designed to assist in basic mining operations, which are essential even at lower levels.",
    "vendorReason": "Block Smith specializes in mining equipment and tools, making the Pristine Claimed Extraction Conduit a natural addition to their inventory.",
    "shippingDetail": "Delivered via ground sled, ensuring safe transport through rugged frontier terrains.",
    "usage": {
      "activation": "Passive effect; no activation required. Simply attach the conduit to your mining tools or machinery for it to take effect.",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the conduit is removed from use or until the next long rest, whichever comes first.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Pristine Claimed Extraction Conduit is priced at 1000 XP due to its advanced materials and unique capabilities that significantly enhance mining efficiency.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T02:22:51.427696+00:00",
    "aiReviewedAt": "2026-07-25T02:22:51.427696+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_resonance_service_claim": {
    "id": "connectopia_item_resonance_service_claim",
    "name": "The Pioneer’s Claimed Resonance Synchronization Service - Delta-42",
    "description": "The Pioneer’s Claimed Resonance Synchronization Service - Delta-42 is a crystalline array that hums softly when activated, its nodes glowing faintly in shades of violet and blue. This relic was once used by the original Connectopian settlers to stabilize their networks against cosmic interference. Upon activation, it instantly aligns your base’s systems with the Connectopia network, stabilizing all nearby electronic devices within a 100-foot radius for an hour. The service also grants access to exclusive advanced crafting blueprints that can only be used once every 24 hours.",
    "category": "services",
    "price": 1000,
    "icon": "📡",
    "stock": 1,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Instant System Stabilization",
      "Access Exclusive Blueprints"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "messenger_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant System Stabilization",
        "rules": "Activates as a bonus action. The service synchronizes and stabilizes all electronic devices within a 100-foot radius for one hour, reducing system instability by 50%. This effect ends when the duration expires or if the base is disconnected from the network."
      },
      {
        "title": "Access Exclusive Blueprints",
        "rules": "The service grants access to advanced crafting blueprints that can only be used once every 24 hours. These blueprints provide unique recipes for rare and powerful items, but they are limited in number and cannot be duplicated."
      }
    ],
    "levelRequirementReason": "This service is available to all adventurers as a foundational tool for stabilizing electronic systems.",
    "vendorReason": "The Pioneer Post specializes in connecting travelers with essential services and supplies, making it the ideal vendor for this network-synchronizing relic.",
    "shippingDetail": "Shipped by messenger drone within one hour of purchase; requires a clear line-of-sight to the base's electronic core.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 Hour",
      "endsWhen": "Duration Expires or Base Disconnects from Network",
      "charges": "Unlimited"
    },
    "priceReason": "The service is priced at 1000 XP, reflecting the rare and valuable nature of the crystalline nodes used in its construction.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-25T02:23:15.165886+00:00",
    "aiReviewedAt": "2026-07-25T02:23:15.165886+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_the_whispering_apples_claimed": {
    "id": "equestria_item_the_whispering_apples_claimed",
    "name": "The Whispering Apples Claimed",
    "description": "The Whispering Apples Claimed are crimson fruits that hum with an ancient melody. When consumed, they grant a surge of clarity and heightened intuition, allowing you to swiftly interpret riddles and cryptic messages. Legend has it that these apples are the essence of Equestria's forgotten prophecies, passed down by the Mane Six themselves. They are said to have been found in the heart of Everfree Forest, where they grow on a tree older than the Elements of Harmony.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍎",
    "stock": 42,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increased intuition",
      "temporary clarity"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Pegasus Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Intuition",
        "rules": "When you consume an apple, you gain advantage on Wisdom (Insight) checks for 10 minutes. This effect lasts until you use it again or fall unconscious."
      },
      {
        "title": "Temporary Clarity",
        "rules": "For the next minute after consuming an apple, you have advantage on saving throws against being charmed and can attempt to disbelieve any illusion effects as a bonus action."
      }
    ],
    "levelRequirementReason": "These apples are accessible to all pony adventurers, regardless of their level.",
    "vendorReason": "Applejack and her family have been growing these enchanted fruits since the founding of Ponyville, making them a staple at the market.",
    "shippingDetail": "The apples are shipped fresh from the Everfree Forest, ensuring their magical properties remain intact during transit.",
    "usage": {
      "activation": "Eat one apple as an action.",
      "duration": "10 minutes of increased intuition and 1 minute of temporary clarity per apple consumed.",
      "endsWhen": "The effects end when you use it again or fall unconscious.",
      "charges": "Unlimited, but only one effect is active at a time."
    },
    "priceReason": "The apples are rare and require special conditions to grow, making them valuable for their magical properties.",
    "priceOriginal": 185,
    "priceReviewedAt": "2026-07-25T02:22:43.314798+00:00",
    "aiReviewedAt": "2026-07-25T02:22:43.314798+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_twilight_s_chronometric_harvest": {
    "id": "equestria_item_twilight_s_chronometric_harvest",
    "name": "Twilight’s Chronometric Harvest",
    "description": "Twilight’s Chronometric Harvest is a meticulously crafted apple core, its surface etched with ancient runes that shimmer with a soft temporal glow. When consumed, it briefly slows the flow of time around you, allowing for incredibly precise movements and reactions – perfect for dodging attacks or solving intricate puzzles. The apple’s magic is said to be a gift from Celestia herself, imbued by her own hands during a rare moment of humility.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "temporal slowdown",
      "enhanced dexterity"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Royal Courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Temporal Slowdown",
        "rules": "The user gains advantage on Dexterity (Acrobatics) checks and reaction rolls for the duration. This effect lasts for 1 minute, ending if you take any action other than moving or maintaining concentration."
      },
      {
        "title": "Enhanced Dexterity",
        "rules": "For the duration of the temporal slowdown, your Dexterity score is temporarily increased by 2 (to a maximum of your original Dexterity + 4). This effect ends when you take any action other than moving or maintaining concentration."
      }
    ],
    "levelRequirementReason": "The magic within the apple core requires a certain level of understanding and control over time to be harnessed effectively.",
    "vendorReason": "As one of Equestria’s premier markets, Canterlot Commerce is known for its rare and enchanted goods.",
    "shippingDetail": "The Royal Courier ensures swift delivery with a guaranteed arrival within two days.",
    "usage": {
      "activation": "Reaction",
      "duration": "1 minute",
      "endsWhen": "You take any action other than moving or maintaining concentration.",
      "charges": "Unlimited, but limited to once per short rest."
    },
    "priceReason": "The apple core's rarity and the precise nature of its magic justify this price in XP.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T02:22:59.923706+00:00",
    "aiReviewedAt": "2026-07-25T02:22:59.923706+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_mk_9_loyalty_apples_empire": {
    "id": "equestria_item_mk_9_loyalty_apples_empire",
    "name": "Mk.9 Loyalty Apples of the Crystal Empire",
    "description": "The Mk.9 Loyalty Apples of the Crystal Empire are golden fruits imbued with the essence of the Crystal Guardian's loyalty. When bitten, these apples grant a defender resistance to mental control and enhance their courage during perilous times, filling them with an indomitable spirit. Legends say that each apple is crafted from the very heartwood of ancient trees, whose sap has been blessed by the Crystal Guardian herself.",
    "category": "faction",
    "price": 3200,
    "icon": "🛡️",
    "stock": 5,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Mental Resistance",
      "Boosted Courage"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Crystal Guard Transport",
    "levelRequirement": 48,
    "effectDetails": [
      {
        "title": "Mental Resistance",
        "rules": "Eating a Mk.9 Loyalty Apple provides resistance to any effect that would otherwise impose a mental control or charm on the eater for 1 hour. This effect does not stack with other similar resistances."
      },
      {
        "title": "Boosted Courage",
        "rules": "For 10 minutes after consuming an apple, the eater gains advantage on saving throws against fear and charisma-based attack rolls directed at them. If reduced to 0 hit points while under this effect, they gain temporary hit points equal to half their level."
      }
    ],
    "levelRequirementReason": "This item is crafted for the elite defenders of the Crystal Empire, who must demonstrate a mastery of their craft.",
    "vendorReason": "As a trusted supplier to the Crystal Empire's guard, the Crystal Empire itself ensures that only those of proven loyalty and service receive these apples.",
    "shippingDetail": "Delivered by armored couriers through secure, crystal-lined tunnels beneath the empire.",
    "usage": {
      "activation": "Eating an apple",
      "duration": "1 hour for Mental Resistance, 10 minutes for Boosted Courage; both effects expire at the end of their stated duration.",
      "endsWhen": "The effect ends when its duration expires or if the eater consumes another apple during that time.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted by the Crystal Empire's most skilled artisans, these apples are a rare and valuable commodity.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-25T02:23:30.288884+00:00",
    "aiReviewedAt": "2026-07-25T02:23:30.288884+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_chronometric_twilight_slayer": {
    "id": "the_edge_item_chronometric_twilight_slayer",
    "name": "Twilight Slayer's Chronometric Remnants",
    "description": "Twilight Slayer's Chronometric Remnants are jagged shards of time, each fragment pulsing with a temporal energy that whispers tales of vanished explorers. When activated, these relics briefly accelerate your movements and grant you resistance to the paradoxes of time itself, allowing you to navigate the treacherous currents of time like a master craftsman for a fleeting instant. These remnants are as fragile as they are powerful, their utility limited but potent in the right hands.",
    "category": "consumables",
    "price": 1000,
    "icon": "⏳",
    "stock": 45,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "temporal_acceleration",
      "paradox_resistance"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 25,
    "effectDetails": [
      {
        "title": "Temporal Acceleration",
        "rules": "As a bonus action, you can activate these remnants to gain a +5 movement speed bonus for 3 seconds. This effect ends if you are incapacitated or if you take any damage."
      },
      {
        "title": "Paradox Resistance",
        "rules": "You gain resistance to all damage from paradox effects for the duration of your next long rest. This effect can only be used once per day, and it is expended upon activation."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 25 due to its complexity and the specialized knowledge needed to use it effectively.",
    "vendorReason": "The abyssal traders, known for their vast knowledge of time-based artifacts, carry these remnants as they are one of few who understand their true value and potential.",
    "shippingDetail": "Shipped through the dimensional rift, these items can arrive in a matter of hours if not minutes, but proper handling is required to avoid any paradoxes that might arise during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "3 seconds and once per long rest",
      "endsWhen": "Incapacitated or taking damage; once per day limit",
      "charges": "Unlimited, but limited by daily uses"
    },
    "priceReason": "The price is set at 1000 XP as it represents a powerful and rare item that can temporarily grant significant advantages in time-based combat scenarios.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:23:22.709934+00:00",
    "aiReviewedAt": "2026-07-25T02:23:22.709934+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_mk_91_lost_echoes": {
    "id": "the_edge_item_mk_91_lost_echoes",
    "name": "Mk.91 Lost Echoes of the Static Citadel",
    "description": "Recovered from the depths of a shattered data-construct, these crystalline fragments resonate with forgotten broadcasts – a chorus of digital screams that echo through time and space. Holding them provides limited access to spectral communications and offers protection against corrupted signal interference, as if you could hear the very static of the universe. When activated, Mk.91 Lost Echoes of the Static Citadel grants +5 to Perception checks for detecting hidden pathways, and it emits a protective aura that reduces all forms of signal jamming by 30%. This ancient relic is a testament to an era where data was alive.",
    "category": "equipment",
    "price": 1000,
    "icon": "📡",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "signal_jamming_resistance",
      "spectral_communication"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "automated_drone",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Signal Jamming Resistance",
        "rules": "When subjected to signal interference, the user gains resistance to all forms of electronic or digital jamming effects. This effect lasts for a duration equal to the length of the jamming attempt."
      },
      {
        "title": "Spectral Communication",
        "rules": "Activates as an action and allows the user to establish spectral communication with another device within 30 feet, effectively doubling the range of any wireless communications. This effect remains active for 1 minute per level of the user."
      }
    ],
    "levelRequirementReason": "This relic requires significant power and knowledge to wield its ancient magic.",
    "vendorReason": "Edge Outpost specializes in salvaging and selling artifacts from lost civilizations, making this relic a perfect fit for their inventory.",
    "shippingDetail": "Ships via automated drone within one week of purchase.",
    "usage": {
      "activation": "Activates as an action or reaction when exposed to signal interference.",
      "duration": "Until the jamming effect ends, or until the user takes another action or reaction.",
      "endsWhen": "The jamming effect ends or the user takes another action or reaction.",
      "charges": "Unlimited, but requires a short rest to reestablish spectral communication."
    },
    "priceReason": "Balanced at this price due to its rare origin and powerful effects, providing a significant advantage in signal-rich environments.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T14:40:20.404515+00:00",
    "aiReviewedAt": "2026-07-25T14:40:20.404515+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_regnant_fragments_of_zero": {
    "id": "the_edge_item_regnant_fragments_of_zero",
    "name": "Regnant Fragments of Zero's Descent",
    "description": "Regnant Fragments of Zero's Descent are shards of a forgotten realm, their surface etched with the geometry of absolute silence. When consumed, these fragments grant you a momentary shield against all sensory input, allowing for an undisturbed observation of your surroundings – a fleeting yet perilous gift in the chaos beyond the edge. However, they sap your movements, reducing your speed by 25%, and leave you momentarily aware of the unseen, though not entirely immune to harm.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌑",
    "stock": 28,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "sensory_nullification",
      "reduced_maneuverability"
    ],
    "vendor": "final_shop",
    "shippedBy": "spectral_courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sensory Nullification",
        "rules": "As a bonus action, consume one fragment to gain temporary immunity to all forms of sensory input for up to 1 minute. This effect ends early if you take any damage or are targeted by an attack. You cannot use this ability again until you complete a long rest."
      },
      {
        "title": "Reduced Maneuverability",
        "rules": "While under the effects of Sensory Nullification, your movement speed is reduced by 25%. This effect persists for the duration of the immunity granted by Sensory Nullification."
      }
    ],
    "levelRequirementReason": "The ability to safely consume these fragments without succumbing to their chaotic influence requires a baseline level of experience and discipline.",
    "vendorReason": "Final Shop curates rare and dangerous items, offering Regnant Fragments as part of its collection of edge-of-reason curiosities.",
    "shippingDetail": "The spectral courier ensures the safe arrival of these delicate fragments within a week's time.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 1 minute per day",
      "endsWhen": "You take damage or are targeted by an attack, ends at the start of your next turn otherwise",
      "charges": "One use per long rest"
    },
    "priceReason": "The fragments' rarity and the risk they pose to those who consume them justify their price.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T02:23:36.070786+00:00",
    "aiReviewedAt": "2026-07-25T02:23:36.070786+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_sunstone_of_anorien_master": {
    "id": "middle_earth_item_sunstone_of_anorien_master",
    "name": "The Sunstone of Anorien Master",
    "description": "The Sunstone of Anorien Master, a palm-sized shard radiating a gentle warmth, is meticulously forged from solidified sunlight captured during the Battle of Pelennor. Crafted by master-smiths of Gondor and enchanted with the essence of ancient Valinor, it pulses with restorative energy that not only staunches grievous wounds but also bolsters morale against encroaching shadows. This gemstone is said to have been used in the greatest battles to heal the wounded and inspire hope among the valiant fighters of Gondor.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔆",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Heals Wounds",
      "Inspires Valor"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_horse",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Touch",
        "rules": "When activated, this Sunstone grants a target 50 hit points. This effect can be used once per long rest."
      },
      {
        "title": "Moral Boost",
        "rules": "For one hour after activation, all allies within 30 feet gain advantage on saving throws against fear and have their morale increased by +20%. This effect ends early if the user takes any harmful action or spell."
      }
    ],
    "levelRequirementReason": "The Sunstone of Anorien Master is accessible to even the most novice adventurer, as its power lies in its restorative and inspirational qualities rather than requiring a specific level.",
    "vendorReason": "The Elven Market often stocks items that bridge the gap between the realms of elves and men; the Sunstone's origin from Gondor and its enchantments make it a fitting addition to their wares.",
    "shippingDetail": "Delivered by swift winged horses, the Sunstone arrives at your doorstep within one day, ensuring it is in perfect condition for use.",
    "usage": {
      "activation": "Standard Action",
      "duration": "Instantaneous; lasts until the end of the next long rest",
      "endsWhen": "The effects end if the user takes a harmful action or spell",
      "charges": "Unlimited"
    },
    "priceReason": "The Sunstone is priced at 1000 XP, reflecting its value in healing and morale-boosting capabilities.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T02:23:57.240820+00:00",
    "aiReviewedAt": "2026-07-25T02:23:57.240820+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_shire_woodcutter_blade_forge": {
    "id": "middle_earth_item_shire_woodcutter_blade_forge",
    "name": "Shire Woodcutter's Blade Forge",
    "description": "The Shire Woodcutter's Blade Forge is a finely crafted longsword forged in the heart of the Shire. Its hilt is wrapped with bark from ancient mallorn trees, and its blade shimmers with the essence of ents, granting it unmatched precision for cutting through even the toughest branches. When wielded by a skilled hobbit, this sword not only slices through wood like butter but also grants a burst of speed in close combat, making the user move as nimbly as a squirrel.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔪",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Precision Cuts",
      "Swift Combat"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Precision Cuts",
        "rules": "When you hit with this sword on your first attack action in a combat round, you have advantage on the next saving throw you make before the end of the round."
      },
      {
        "title": "Swift Combat",
        "rules": "While wielding this weapon, your movement speed increases by 10 feet for as long as you are engaged in melee combat. If you move away from an opponent or stop engaging them in melee combat, this effect ends immediately."
      }
    ],
    "levelRequirementReason": "The Shire Woodcutter's Blade Forge is crafted with simple materials but imbued with the essence of ents, making it accessible to even low-level heroes.",
    "vendorReason": "The Shire Shop stocks items that are both functional and beloved by hobbits, ensuring this sword finds its way into capable hands.",
    "shippingDetail": "Delivered via pony cart, the blade is protected with a specially designed wooden crate to ensure it arrives in pristine condition.",
    "usage": {
      "activation": "As an action",
      "duration": "Until you move away from an engaged opponent or stop engaging them in melee combat",
      "endsWhen": "You cease moving towards or attacking opponents in close combat",
      "charges": "Unlimited"
    },
    "priceReason": "The sword's unique enchantment and the expertise of hobbit blacksmiths contribute to its fair value.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:23:46.529283+00:00",
    "aiReviewedAt": "2026-07-25T02:23:46.529283+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_imperial_rune_blade_of_gondor": {
    "id": "middle_earth_item_imperial_rune_blade_of_gondor",
    "name": "Imperial Rune Blade of Gondor - Mk.49",
    "description": "The Imperial Rune Blade of Gondor - Mk.49 gleams with a protective aura forged from the fires of Minas Tirith, its surface etched with ancient runes that whisper tales of valor and might. This blade not only deflects blows but also amplifies the wielder's combat prowess, making even the most skilled fighters seem nearly invincible on the battlefield. Crafted by the hands of Gondorian blacksmiths, it hums with an inner strength that repels undead creatures with unyielding resolve.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔️",
    "stock": 3,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Deflect and Amplify",
      "Undead Repellent"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dragon_airship",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Deflect and Amplify",
        "rules": "When the wielder attacks, there is a +1 bonus to attack rolls. If an attack hits, the blade deflects half of the damage taken by the attacker back at them as nonlethal damage. This effect occurs once per short or long rest."
      },
      {
        "title": "Undead Repellent",
        "rules": "This blade grants advantage on saving throws against being charmed and a +2 bonus to attack rolls and damage against undead creatures. The blade's aura persists for 10 minutes, requiring a short rest to recharge."
      }
    ],
    "levelRequirementReason": "The intricate runes and the blade's history require a significant amount of experience to wield effectively.",
    "vendorReason": "The dwarves of Erebor have long been trusted craftsmen, known for their mastery of ancient Gondorian artifacts.",
    "shippingDetail": "Ships via dragon airship; delivery time varies depending on the location, but is generally swift.",
    "usage": {
      "activation": "Passive effect active while wielding the blade",
      "duration": "10 minutes per short rest",
      "endsWhen": "Effect ends after 10 minutes or upon a short rest",
      "charges": "Unlimited, recharges at the end of each long rest"
    },
    "priceReason": "Balanced against other weapons of similar rarity and power within the game.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T02:24:08.641736+00:00",
    "aiReviewedAt": "2026-07-25T02:24:08.641736+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_crimson_layer_shaper": {
    "id": "grand_country_item_crimson_layer_shaper",
    "name": "Crimson Layer Shaper",
    "description": "The Crimson Layer Shaper is a meticulously crafted piece of vertical engineering, its layers soaked in a viscous crimson resin that crackles with unstable kinetic energy. When activated, it momentarily aligns the layers of any nearby structure, allowing for swift passage over otherwise impassable gaps. The gear's design ensures resistance to lateral forces and grants a brief burst of momentum, making it an indispensable tool for explorers navigating treacherous urban canyons.",
    "category": "equipment",
    "price": 1000,
    "icon": "🚀",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Layer Alignment",
      "Vertical Momentum Boost"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "SkyCopter Courier Service",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Layer Alignment",
        "rules": "As a bonus action, the user aligns nearby layers of the structure, allowing them to traverse vertical gaps. This effect lasts for 1 minute and has no range. It can be interrupted by any movement that would break line of effect with the target structure."
      },
      {
        "title": "Vertical Momentum Boost",
        "rules": "The user gains a +2 bonus to their Dexterity (Acrobatics) checks made to traverse vertical surfaces for 10 minutes after using the Layer Alignment. This effect ends when it is used again or at the start of the user's next turn."
      }
    ],
    "levelRequirementReason": "This device requires a high degree of skill and finesse, suitable only for those who have reached a certain level of vertical mastery.",
    "vendorReason": "The Vertical Vendor specializes in equipment designed for navigating the city's vertical architecture.",
    "shippingDetail": "Ships within 1 day, with an additional 24 hours processing time at higher altitudes.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute per use",
      "endsWhen": "Interrupted by movement that breaks line of effect or used again",
      "charges": "Unlimited"
    },
    "priceReason": "The Crimson Layer Shaper is a rare piece of vertical engineering, balancing its complex mechanics with a moderate price to ensure it remains accessible yet valuable.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:24:04.423640+00:00",
    "aiReviewedAt": "2026-07-25T02:24:04.423640+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_echoing_gear_of_the_void": {
    "id": "grand_country_item_echoing_gear_of_the_void",
    "name": "Echoing Gear of the Void",
    "description": "The Echoing Gear of the Void is a grotesque, shadowy device that hums with an eerie, resonant energy. When turned, it creates a localized distortion in reality, briefly revealing hidden vertical pathways to adventurous explorers. The gear's whispers are faint but compelling, guiding one towards untold dangers and rewards. Turning it also attracts phantom echoes, which have a low chance of inflicting negative effects on those who venture too close.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Shadow Distortion",
      "Phantom Echoes"
    ],
    "vendor": "side_seller",
    "shippedBy": "Spectral Courier",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Shadow Distortion",
        "rules": "Activates as an action. Creates a localized distortion within a 10-foot radius, revealing hidden vertical pathways for 1 minute. This effect has a 5% chance to reveal additional secret passages each round it is active. The duration ends when the gear is turned off or if the user moves more than 20 feet away from the center of the distortion."
      },
      {
        "title": "Phantom Echoes",
        "rules": "Attracts phantom echoes with a low chance (15%) of negative effects on creatures within 30 feet. These echoes can manifest as minor obstacles or hazards that require a DC 18 Wisdom saving throw to avoid. Failure results in a -1 penalty to all attack rolls and ability checks for the remainder of the day."
      }
    ],
    "levelRequirementReason": "The gear's shadowy essence requires users to be seasoned adventurers with sufficient experience to handle its dangerous effects.",
    "vendorReason": "Side Seller, a rogue and artifact collector, has a fondness for rare and dangerous items that can turn the tide of battle or exploration.",
    "shippingDetail": "The gear is delivered by the Spectral Courier, known for its eerie but reliable service through shadowy realms.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "Gear turned off or user moves more than 20 feet away",
      "charges": "Unlimited"
    },
    "priceReason": "The Echoing Gear's rarity and the risks it poses justify its moderate price, balancing its potential rewards with manageable danger.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T02:24:16.436621+00:00",
    "aiReviewedAt": "2026-07-25T02:24:16.436621+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_the_layered_chronoshaper_prime": {
    "id": "grand_country_item_the_layered_chronoshaper_prime",
    "name": "The Layered Chronoshaper Prime",
    "description": "The Layered Chronoshaper Prime is a meticulously crafted chronometer of unparalleled precision, its gears and temporal crystals intricately layered to harness the very fabric of time itself. This premium artifact allows for localized manipulation of time within a small area, accelerating or decelerating movement with pinpoint accuracy. It's an invaluable tool for those navigating treacherous vertical environments, offering increased reaction times in critical moments and even enabling short-range phase shifts that can teleport the user to adjacent spaces without provoking opportunity attacks.",
    "category": "premium",
    "price": 1000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Temporal Acceleration",
      "Phase Shift"
    ],
    "vendor": "layer_market",
    "shippedBy": "Temporal Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Acceleration",
        "rules": "Activate as a bonus action. This effect lasts for 1 minute, during which time creatures within a 5-foot radius of you move at half speed and must make a DC 18 Dexterity saving throw or fall prone. The effect ends early if you take any damage or if you move more than 10 feet away from the center."
      },
      {
        "title": "Phase Shift",
        "rules": "Activate as a reaction when you are subjected to an attack. You and all creatures you can see within 5 feet of you become invisible until the start of your next turn, or until an attack hits any creature in that area. This effect has no save DC and does not expend charges."
      }
    ],
    "levelRequirementReason": "This item's power is accessible to lower-level characters who need precise control over time, making it a valuable tool for adventurers at the beginning of their journey.",
    "vendorReason": "Layer Market specializes in unique and powerful artifacts that can help navigate complex and dangerous environments, making this item an ideal addition to their inventory.",
    "shippingDetail": "Ships via the Temporal Courier Service, ensuring safe and swift delivery of your Chronoshaper Prime.",
    "usage": {
      "activation": "Bonus action for Temporal Acceleration; Reaction for Phase Shift",
      "duration": "1 minute for Temporal Acceleration, instantaneous for Phase Shift",
      "endsWhen": "Ends early if you take damage or move more than 10 feet away from the center for Temporal Acceleration; Ends when an attack hits any creature in the area for Phase Shift",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the item's mythic rarity and the unique, time-manipulating capabilities it offers without being overpowered.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-25T02:24:38.959317+00:00",
    "aiReviewedAt": "2026-07-25T02:24:38.959317+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_chronal-banner-of-rupture": {
    "id": "warhammer_item_chronal-banner-of-rupture",
    "name": "The Chronal Banner of Rupture",
    "description": "The Chronal Banner of Rupture pulses with fractured temporal energies, its crimson sigil a shattered clockwork heart that hints at moments of devastating instability. Within its shimmering distortion, nearby structures tremble and decay, while foes caught in the wave are briefly disoriented by temporal shifts. The banner's pulse accelerates time, increasing one’s movement speed, yet it can also trigger localized time loops, rewinding a player's position back to their previous location for a split second.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Decay",
      "Time Disorientation"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "Royal Courier Drone",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Temporal Decay",
        "rules": "Activates as an action. Causes nearby structures within a 10-meter radius to decay, dealing minor temporal damage (50% chance of 'Time Slip' - brief disorientation). The effect lasts for 30 seconds."
      },
      {
        "title": "Time Disorientation",
        "rules": "Enemies within the 10-meter radius have a 50% chance to be briefly disoriented, as though they had been hit by an 'Acid Splash' spell. This effect has no save DC and can occur multiple times."
      }
    ],
    "levelRequirementReason": "Requires significant arcane knowledge to properly wield the banner's temporal energies.",
    "vendorReason": "The Imperial Armory stocks rare, powerful artifacts like this chronal banner from their extensive network of magical suppliers.",
    "shippingDetail": "Delivered with utmost haste by the Royal Courier Drone fleet, ensuring swift arrival and minimal delay in using the item.",
    "usage": {
      "activation": "Action",
      "duration": "30 seconds",
      "endsWhen": "The duration ends or when the user moves out of the area affected by the banner.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to reflect its rare nature and powerful temporal effects.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:24:43.477729+00:00",
    "aiReviewedAt": "2026-07-25T02:24:43.477729+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_void-ward-of-silent-decrees": {
    "id": "warhammer_item_void-ward-of-silent-decrees",
    "name": "The Void Ward of Silent Decrees",
    "description": "The Void Ward of Silent Decrees is a heavy, black warhammer forged from the forgotten echoes of an ancient empire. Its surface glows faintly with a spectral light that repels psychic energies and leaves those who dare to challenge it feeling cold and isolated. When wielded in battle, this weapon dampens the chaotic thoughts of its enemies, providing a fragile shield against mental attacks and reducing the potency of mind-altering spells by half.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌑",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Mental Shield",
      "Spell Resistance"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Shadow Serpent Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mental Shield",
        "rules": "Activates passively when you are targeted by a psychic attack. Reduces the damage taken from such attacks by 30%, and it briefly stuns chaotic creatures within 5 feet, reducing their movement speed to half for 1 minute."
      },
      {
        "title": "Spell Resistance",
        "rules": "Reduces the duration of any mind-altering spell cast against you by 50%. Additionally, provides resistance to fear effects. This effect lasts until the end of your next turn after a successful saving throw."
      }
    ],
    "levelRequirementReason": "The Void Ward's complex enchantments require a minimum level to effectively harness its power.",
    "vendorReason": "The Chaos Dealer, an enigmatic merchant, often deals in relics that defy conventional understanding and logic, making the Void Ward of Silent Decrees a fitting addition to his inventory.",
    "shippingDetail": "Delivered via the Shadow Serpent Courier's secretive routes, ensuring that the item arrives under cover of night.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the end of your next turn after a successful saving throw or when you take damage from a psychic source.",
      "endsWhen": "The effects expire at the end of your next turn unless you are targeted by another mind-altering spell, in which case it ends immediately.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Void Ward of Silent Decrees is priced based on its unique enchantments and the rarity of materials used in its forging.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T02:24:51.249015+00:00",
    "aiReviewedAt": "2026-07-25T02:24:51.249015+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_fate-forge_mk_117_purified_echo-banners": {
    "id": "warhammer_item_fate-forge_mk_117_purified_echo-banners",
    "name": "Fate Forge Mk. 117 Purified Echo Banners",
    "description": "The Fate Forge Mk. 117 Purified Echo Banners are a pair of banners forged from the very essence of past battles and legends. Their woven threads shimmer with the purified echoes of fallen heroes, casting an unsettling aura that hints at both victory and defeat. These banners not only grant their wielder a supernatural connection to fate itself but also serve as a shield against the machinations of fortune-tellers and dark sorcery.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Echoes of Destiny",
      "Fortune's Favor"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Chronomaestro Delivery System",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Echoes of Destiny",
        "rules": "Activate as an action. The banners summon a spectral echo of a fallen hero to fight alongside the wielder for one minute. This echo has a Strength score equal to your Charisma modifier and can attack as if it had proficiency in martial weapons. The echo gains temporary hit points equivalent to 5 + your character level and disappears at the end of its turn or when reduced to 0 HP."
      },
      {
        "title": "Fortune's Favor",
        "rules": "Passive effect that grants a +2 bonus to Dexterity saving throws against divination spells and effects, and a +10% chance to land critical hits. This effect remains active until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This item requires significant skill and experience to wield effectively.",
    "vendorReason": "The Fate Forge is renowned for its mastery of historical artifacts imbued with the essence of past battles and heroes.",
    "shippingDetail": "Delivery via a time-displaced courier, ensuring that the banners arrive in pristine condition through the ages.",
    "usage": {
      "activation": "Activate as an action to summon the spectral echo. Fortune's Favor is a passive effect lasting until your next long rest.",
      "duration": "Echoes of Destiny lasts for one minute; Fortune's Favor is continuous until your next long rest.",
      "endsWhen": "The echo disappears at the end of its turn or when reduced to 0 HP, and Fortune's Favor ends after a long rest.",
      "charges": "Unlimited, but requires a short rest between uses."
    },
    "priceReason": "This item is moderately priced due to its unique properties and the skill required to wield it effectively.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-25T02:25:11.558230+00:00",
    "aiReviewedAt": "2026-07-25T02:25:11.558230+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_hallowed-skulls-of-grim-march": {
    "id": "warhammer_item_hallowed-skulls-of-grim-march",
    "name": "Hallowed Skulls of Grim March",
    "description": "The Hallowed Skulls of Grim March are intricately carved from the bones of ancient warriors, each skull etched with the strategic formations and battle plans that defined their final moments. When held, they whisper the tactics of a legendary commander, granting fleeting insight into enemy movements for ten seconds. The skulls' whispers also have a calming effect on those struck by fear, reducing their chance to flee or collapse in terror.",
    "category": "equipment",
    "price": 1000,
    "icon": "💀",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "tactical foresight",
      "grim calm"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "aerial-drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Tactical Foresight",
        "rules": "When activated as a bonus action, the wielder gains advantage on one Intelligence (Strategy) check related to their current battle. This effect lasts for 10 seconds."
      },
      {
        "title": "Grim Calm",
        "rules": "If a creature within 5 feet of the wearer is affected by fear and makes a Wisdom saving throw, there's a 25% chance that the save fails due to the calming influence of the skulls. This effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "The item requires no level, but is considered uncommon and thus suitable for lower-level characters who might value its strategic insights.",
    "vendorReason": "As a repository of historical artifacts and weapons, the Imperial Armory sells items that have both practical use and a storied past.",
    "shippingDetail": "The skulls are delivered swiftly by aerial drone, ensuring they arrive in pristine condition for their new owner.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "10 seconds",
      "endsWhen": "The effect ends when the duration expires or if the wielder takes any hostile action.",
      "charges": "Unlimited"
    },
    "priceReason": "The item’s strategic value and historical significance justify its price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:25:08.648973+00:00",
    "aiReviewedAt": "2026-07-25T02:25:08.648973+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_mk-91-skull-piercer-of-broken-lines": {
    "id": "warhammer_item_mk-91-skull-piercer-of-broken-lines",
    "name": "Mk.91 Skull Piercer of Broken Lines",
    "description": "The Mk.91 Skull Piercer of Broken Lines is a skull-shaped warhammer forged from the bones of a siege weapon's commander, its surface etched with ancient runes. This relic emits an eerie glow that crackles with destructive energy, capable of shattering even the strongest shields and armor in an instant. When swung, it unleashes a concentrated burst of kinetic force that not only deals significant damage but also has a chance to stun enemies, leaving them vulnerable for a brief moment.",
    "category": "consumables",
    "price": 1000,
    "icon": "💥",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Shatters Shields",
      "Stuns Enemies"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "express-delivery",
    "levelRequirement": 40,
    "effectDetails": [
      {
        "title": "Shatter Shield",
        "rules": "When activated as an action, the Mk.91 delivers a concentrated burst of kinetic energy that deals additional damage to the target's shield or armor (as if it were a magical weapon). This effect ignores half the target's AC and has a 50% chance to shatter the target's shield."
      },
      {
        "title": "Stun",
        "rules": "On a successful hit, there is a 30% chance to stun the target for 1 round. The target can use its action on the following turn to attempt a DC 15 Constitution saving throw to end the effect early."
      }
    ],
    "levelRequirementReason": "This relic requires a high level of expertise and strength to wield effectively, as it channels immense destructive power.",
    "vendorReason": "The Chaos Dealer is known for dealing in the most dangerous and powerful artifacts, making this relic an expected addition to their inventory.",
    "shippingDetail": "Express delivery ensures that this item reaches its destination swiftly and securely, though it may be subject to additional scrutiny due to its nature.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Charges are expended or the user is incapacitated. The relic has a limited number of charges per long rest.",
      "charges": "10 charges, recharged after a long rest"
    },
    "priceReason": "The price reflects its rarity and the immense power it channels, balancing its cost with its utility in combat.",
    "priceOriginal": 8750,
    "priceReviewedAt": "2026-07-25T14:40:20.682549+00:00",
    "aiReviewedAt": "2026-07-25T14:40:20.682549+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_grim-hollow-skull-of-fate-weaver": {
    "id": "warhammer_item_grim-hollow-skull-of-fate-weaver",
    "name": "Grim Hollow Skull of Fate Weaver",
    "description": "The Grim Hollow Skull of Fate Weaver is a morbid relic, its bone structure etched with dark runes that glow faintly in shadow. Crafted from the skull of an ancient creature whose fate was irrevocably twisted by forbidden magic, this item subtly shifts probabilities, offering fleeting advantages to those who wield it in perilous situations. Holding it for even a moment causes time itself to bend slightly, making critical hits more likely and enemy attacks less precise.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 7,
    "rarity": "legendary",
    "stockType": "back_order",
    "effects": [
      "Critical Advantage",
      "Enemy Attack Manipulation"
    ],
    "vendor": "fate_forge",
    "shippedBy": "mystic-transport",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Critical Advantage",
        "rules": "When you attack with a weapon, there is a +1d6 bonus to your roll on the next attack made before the start of your next turn. This effect can only occur once per short or long rest."
      },
      {
        "title": "Enemy Attack Manipulation",
        "rules": "Enemies within 5 feet have disadvantage on their attacks against you for 1 minute, starting when you activate this item. This effect ends if the item is destroyed or if an enemy moves more than 10 feet away from you."
      }
    ],
    "levelRequirementReason": "This relic's power lies in its ability to subtly manipulate fate, which can be harnessed even by novice heroes.",
    "vendorReason": "Fate Forge specializes in rare and powerful relics that bend the very fabric of reality, making it a fitting vendor for this morbid relic.",
    "shippingDetail": "The item is shipped via a mystical courier who ensures its safe arrival by weaving through dimensions to avoid any potential interruptions.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "Instantaneous, with a duration of 1 minute for Enemy Attack Manipulation",
      "endsWhen": "The item is destroyed or an enemy moves more than 10 feet away from the wielder during Enemy Attack Manipulation; the next attack made before your next turn after activating Critical Advantage.",
      "charges": "Unlimited, as long as it remains intact."
    },
    "priceReason": "The price reflects its rare nature and the risk involved in obtaining such a powerful relic that can subtly manipulate fate itself.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-25T02:25:21.273852+00:00",
    "aiReviewedAt": "2026-07-25T02:25:21.273852+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_crimson-echo-gifted-amulet": {
    "id": "warhammer_item_crimson-echo-gifted-amulet",
    "name": "Crimson Echo Gifted Amulet of Shattered Kings",
    "description": "The Crimson Echo Gifted Amulet of Shattered Kings pulsates with the chaotic energy of forgotten empires, its surface etched with runes that hum with ancient power. When worn close to the heart, it channels fleeting moments where time bends and chaos reigns momentarily, granting the wearer a brief surge of unmatched martial prowess and strategic insight from bygone ages. Its fractured echoes whisper wisdom in the heat of battle, inspiring chaotic command over foes and providing a fleeting speed boost that leaves enemies reeling under the weight of temporal distortion.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 37,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Distortion",
      "Chaos Command"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "Imperial Courier Drone",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "As a bonus action, you can activate this amulet to grant yourself a +2 bonus to attack rolls and damage until the start of your next turn. The amulet also creates a minor temporal distortion that provides a +10 foot speed boost for 1 minute or until the effect ends early."
      },
      {
        "title": "Chaos Command",
        "rules": "Once per long rest, you can activate this amulet to impose the 'Chaos' condition on one creature within 60 feet with a successful attack roll. The target must succeed on a DC 15 Wisdom saving throw or be affected by the Chaos condition for 1 minute."
      }
    ],
    "levelRequirementReason": "Requires at least 15th level to wield the amulet's chaotic power effectively.",
    "vendorReason": "The Imperial Armory deals exclusively in weapons and armor of exceptional quality, including rare artifacts like the Crimson Echo Gifted Amulet.",
    "shippingDetail": "Delivered by the swift and reliable Imperial Courier Drones within 24 hours of purchase.",
    "usage": {
      "activation": "Bonus action or reaction for Temporal Distortion; once per long rest for Chaos Command",
      "duration": "Until the start of your next turn (Temporal Distortion); 1 minute (Chaos Command)",
      "endsWhen": "Effect ends when you take a short or long rest, or the target successfully saves against the 'Chaos' condition.",
      "charges": "Unlimited"
    },
    "priceReason": "The Crimson Echo Gifted Amulet is priced at 1000 XP due to its unique properties and rarity, offering a balance between chaos and combat prowess.",
    "priceOriginal": 450,
    "priceReviewedAt": "2026-07-25T02:25:44.023825+00:00",
    "aiReviewedAt": "2026-07-25T02:25:44.023825+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_sacred-curiosity-of-fate-weaver": {
    "id": "warhammer_item_sacred-curiosity-of-fate-weaver",
    "name": "Sacred Curiosity of Fate Weaver’s Loom",
    "description": "The Sacred Curiosity of Fate Weaver’s Loom is a delicately crafted obsidian sphere, its surface etched with swirling constellations that shift in response to the weave of fate itself. This relic, a remnant from the legendary Fate Weaver's workshop, allows you to perceive the threads of probability and hidden paths on maps. It grants you glimpses into the future, sometimes manipulating enemy movement patterns to your advantage. Holding it feels like holding the very fabric of destiny in your hands, subtly altering the flow of events around you.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Perceives hidden paths",
      "Manipulates enemy movements"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Temporal Delivery Vessel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Perceive Hidden Paths",
        "rules": "As a bonus action, you can activate this item to cast the Detect Magic spell (DC 15) for 10 minutes. This ability reveals hidden magical secrets on maps within your line of sight."
      },
      {
        "title": "Manipulate Enemy Movements",
        "rules": "Once per short rest, you can use this item as an action to cast the Locate Object spell (DC 15) with a range of 60 feet. This allows you to perceive the movements and positions of enemies within that area."
      }
    ],
    "levelRequirementReason": "This relic is accessible to all adventurers, as it aids in navigating the mysteries of fate regardless of one's level.",
    "vendorReason": "The artisans at Fate Forge are known for their intimate connection with the lore and relics from the workshop of the legendary Fate Weaver.",
    "shippingDetail": "Ships immediately via a Temporal Delivery Vessel, ensuring that your item arrives as fresh as when it was last touched by the Fate Weaver’s hand.",
    "usage": {
      "activation": "Bonus action or Action (once per short rest)",
      "duration": "10 minutes (Detect Magic), instantaneous (Locate Object)",
      "endsWhen": "Ends on a short rest, or when you dismiss it as an action",
      "charges": "Unlimited uses"
    },
    "priceReason": "The relic’s value lies in its unique ability to bridge the gap between fate and fortune, offering strategic advantages without compromising balance.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:26:03.863713+00:00",
    "aiReviewedAt": "2026-07-25T02:26:03.863713+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_mk-92-chaotic-relic-of-the-broken-empire": {
    "id": "warhammer_item_mk-92-chaotic-relic-of-the-broken-empire",
    "name": "Mk.92 Chaotic Relic of the Broken Empire’s Decree",
    "description": "The Mk.92 Chaotic Relic of the Broken Empire’s Decree is a jagged, pulsating shard of solidified chaos, casting eerie green light and bearing fragmented insignia from a lost empire. This relic resonates with raw, untamed power that can be harnessed for devastating combat, though its unpredictable effects make it a dangerous companion. When activated, it unleashes chaotic energy in bursts, dealing significant damage and potentially inflicting the 'Disorientation' status effect on foes.",
    "category": "consumables",
    "price": 1000,
    "icon": "💣",
    "stock": 8,
    "rarity": "epic",
    "stockType": "delivery_only",
    "effects": [
      "Burst of Chaotic Energy",
      "Disorienting Blast"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Void Transport Shuttle",
    "levelRequirement": 45,
    "effectDetails": [
      {
        "title": "Burst of Chaotic Energy",
        "rules": "When activated as a bonus action, the relic unleashes a burst of chaotic energy that deals 2d8 + Strength modifier force damage to all creatures within 10 feet. There is a 30% chance that a target will be struck with the 'Disoriented' condition for 1 minute."
      },
      {
        "title": "Disorienting Blast",
        "rules": "'Disoriented' targets have disadvantage on saving throws and attack rolls until the effect ends, though they can use their action to make a Wisdom saving throw DC 15 to end it early. The relic has three uses per long rest."
      }
    ],
    "levelRequirementReason": "This relic requires immense discipline and strength of will due to its chaotic nature, suitable only for seasoned warriors.",
    "vendorReason": "The chaos dealer understands the perilous yet powerful potential of such relics and ensures they are in capable hands.",
    "shippingDetail": "Special handling required due to the relic's volatile nature, with a two-day transit time guaranteed by Void Transport.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous burst; effect lasts until end of turn for those hit or disoriented",
      "endsWhen": "'Disoriented' condition ends when saved against or after one minute, relic recharges at long rest",
      "charges": "3 uses, recharged at the start of each long rest"
    },
    "priceReason": "Balanced as an epic item with limited use and a high level requirement, this relic is priced to reflect its dangerous yet potent nature.",
    "priceOriginal": 2100,
    "priceReviewedAt": "2026-07-25T02:25:39.478963+00:00",
    "aiReviewedAt": "2026-07-25T02:25:39.478963+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_crimson_tier_lift_keeper": {
    "id": "grand_country_item_crimson_tier_lift_keeper",
    "name": "The Crimson Tiered Lift Keeper",
    "description": "The Crimson Tiered Lift Keeper is a whimsical contraption of solidified frosting and obsidian shards, crafted by a baker with an obsession for perfect stacking. This peculiar device emits a faint, pulsating red glow as it rapidly ascends through the layered plains, shifting its tiers to grant brief moments of accelerated movement. Legend speaks of a baker who sought to conquer gravity itself, leaving behind this marvel of confectionary and stone.",
    "category": "equipment",
    "price": 1000,
    "icon": "🚀",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "accelerated_ascension",
      "obsidian_resistance"
    ],
    "vendor": "side_seller",
    "shippedBy": "frost_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Accelerated Ascension",
        "rules": "As a bonus action, the user can activate the Lift Keeper to ascend one tier immediately. This effect lasts for up to 1 minute per use and ends when the user descends or switches tiers manually."
      },
      {
        "title": "Obsidian Resistance",
        "rules": "While active, the user gains resistance to bludgeoning damage from non-magical sources. This benefit persists until the next long rest."
      }
    ],
    "levelRequirementReason": "The device's intricate craftsmanship and materials demand a minimum level for operation.",
    "vendorReason": "Side Seller, known for their eclectic wares, often includes quirky items like the Lift Keeper in their inventory.",
    "shippingDetail": "The delivery is handled by Frost Delivery, ensuring the device arrives intact and fully charged with frosting.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Up to 1 minute per use",
      "endsWhen": "Switching tiers manually or descending",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the device's unique materials and the work required for its intricate craftsmanship.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:25:57.575948+00:00",
    "aiReviewedAt": "2026-07-25T02:25:57.575948+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_arcane_layer_resonance_shard": {
    "id": "grand_country_item_arcane_layer_resonance_shard",
    "name": "The Arcane Layer Resonance Shard",
    "description": "The Arcane Layer Resonance Shard is a crystalline fragment, its surface etched with arcane runes and temporal patterns. Crafted from the remnants of an ancient timekeeper's core, it pulses with chaotic energy, granting brief mastery over the vertical layers of reality. Briefly holding it allows you to momentarily align yourself with shifting gravity, but prolonged exposure can disorient even the most seasoned wielder, leaving behind fractured memories and a lingering sense of vertigo.",
    "category": "consumables",
    "price": 1000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "gravity_alignment",
      "layer_mastery"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "Chronal Packet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gravity Alignment",
        "rules": "Activating the shard allows you to manipulate your immediate environment for 1 minute. You gain advantage on saving throws against gravity-related effects and can shift your weight as if under a minor gravitational pulse. This effect ends if you move more than 30 feet away from where you activated it."
      },
      {
        "title": "Layer Mastery",
        "rules": "For the duration of its activation, you gain a +2 bonus to all checks involving understanding and manipulating vertical layers or planes. This bonus does not stack with similar bonuses but can be used in conjunction with other effects that enhance your understanding of spatial anomalies."
      }
    ],
    "levelRequirementReason": "Even the simplest wizard can harness the shard's power, though its disorienting effects necessitate a minimum level to mitigate risk.",
    "vendorReason": "The Vertical Vendor has exclusive access to ancient artifacts like this, preserved in their vaults for centuries.",
    "shippingDetail": "Carefully packed and shipped via Chronal Packet's secure delivery service, ensuring the shard arrives undisturbed by temporal disturbances.",
    "usage": {
      "activation": "Bonus action to activate; concentration required while active.",
      "duration": "1 minute per activation.",
      "endsWhen": "Concentration is lost or you move more than 30 feet from where you activated it.",
      "charges": "Unlimited, but requires a short rest to recover from the disorienting effects."
    },
    "priceReason": "The shard's rarity and unique temporal properties justify its cost in terms of both magical significance and potential risk.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T02:26:20.364869+00:00",
    "aiReviewedAt": "2026-07-25T02:26:20.364869+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_mk.73_frost_cascade_lift_pod": {
    "id": "grand_country_item_mk.73_frost_cascade_lift_pod",
    "name": "Mk.73 Frost Cascade Lift Pod",
    "description": "The Mk.73 Frost Cascade Lift Pod is a meticulously crafted, miniature lift pod forged from reinforced sugar glass and temporal frosting. It harnesses focused frost energy to ascend and descend through vertical layers with eerie precision, emitting a melodic chime that resonates through the air with each movement. Crafted by the renowned layer market's master engineers, this piece of engineering is both sophisticated and whimsical, defying expectations in its design and function.",
    "category": "equipment",
    "price": 5800,
    "icon": "🛗",
    "stock": 9,
    "rarity": "legendary",
    "stockType": "delivery_only",
    "effects": [
      "frost_shield",
      "rapid_vertical_movement"
    ],
    "vendor": "layer_market",
    "shippedBy": "frost_express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Frost Shield",
        "rules": "When activated as a bonus action, the Mk.73 Frost Cascade Lift Pod creates a protective frost barrier around the user for up to 1 minute. The shield provides a +2 bonus to AC and resists cold-based attacks. It can be dispelled by any creature that deals fire damage."
      },
      {
        "title": "Rapid Vertical Movement",
        "rules": "Activating this pod as an action allows the user to ascend or descend 30 feet vertically, moving through layers with ease. This effect lasts for a number of turns equal to your Dexterity modifier (minimum 1 turn). The pod can be used once per short rest."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level due to its intricate engineering and the specific skills needed to operate it.",
    "vendorReason": "The layer market is known for its unique and high-quality engineering marvels, making it the perfect vendor for this sophisticated lift pod.",
    "shippingDetail": "Ships via frost express with a guaranteed delivery within 24 hours during winter months.",
    "usage": {
      "activation": "Bonus action or action (as an activation)",
      "duration": "Up to 1 minute for Frost Shield; number of turns equal to your Dexterity modifier for Rapid Vertical Movement",
      "endsWhen": "The effect ends when the duration expires, dispelled by cold-based attacks, or when used again.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The item's rarity and unique engineering justify its high price.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-25T02:26:37.773924+00:00",
    "aiReviewedAt": "2026-07-25T02:26:37.773924+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_crimson_stone_of_mourning": {
    "id": "middle_earth_item_crimson_stone_of_mourning",
    "name": "The Crimson Stone of Mourning",
    "description": "The Crimson Stone of Mourning is a blood-red garnet pulsating with ancient magic, its surface etched with runes that whisper tales of Rohan’s fallen kings and their heroic battles against overwhelming odds. When held in hand, it grants resilience against despair and fear, bolstering the bearer's courage to face overwhelming challenges with unwavering resolve. It hums softly as it absorbs negative emotions, turning them into a wellspring of strength.",
    "category": "consumables",
    "price": 1000,
    "icon": "💔",
    "stock": 33,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Resilience Against Despair",
      "Bolster Courage"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Resilience Against Despair",
        "rules": "When you are affected by a fear effect, the Crimson Stone of Mourning grants you resistance to that effect. For 1 minute after being affected by a fear effect, your saving throw bonuses against such effects increase by +2."
      },
      {
        "title": "Bolster Courage",
        "rules": "While holding the stone and within its range (30 feet), all allies within earshot gain advantage on Willpower checks. This effect lasts for 1 hour or until you use an action to dismiss it."
      }
    ],
    "levelRequirementReason": "The stone's ancient magic requires a certain level of maturity and inner strength to wield effectively.",
    "vendorReason": "The Shire Shop carries unique, enchanted items crafted by the hobbits who have intimate knowledge of Middle-earth's lore and magic.",
    "shippingDetail": "Delivered swiftly by the Pony Express, ensuring you receive your Crimson Stone of Mourning in perfect condition.",
    "usage": {
      "activation": "Passive effect when held; requires holding the stone to activate any effects within its range.",
      "duration": "1 minute for Resilience Against Despair; lasts until dismissed or ends naturally.",
      "endsWhen": "The duration ends, or you dismiss it using an action.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted by master hobbit artisans using rare garnets and ancient runes, the Crimson Stone of Mourning is a valuable, yet not overpowered item.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T14:40:21.383767+00:00",
    "aiReviewedAt": "2026-07-25T14:40:21.383767+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_dwarf_forger_heartstone": {
    "id": "middle_earth_item_dwarf_forger_heartstone",
    "name": "Dwarf Forger Heartstone Mk.II",
    "description": "The Dwarf Forger Heartstone Mk.II is a molten obsidian heartstone that glows with an inner fire. Crafted by the greatest dwarven forges, it channels the essence of a master blacksmith’s skill. When held, its heat radiates and enhances one’s crafting prowess, granting a +2 bonus to all Crafting checks and reducing the time needed to complete a task by 10%. It also provides resistance against fire damage, allowing the wielder to withstand the forge’s intense flames.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔨",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Crafting Bonus",
      "Fire Resistance"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "Dragon Delivery",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Crafting Bonus",
        "rules": "Increases Crafting check success by +2 and reduces task time by 10%. This effect is passive while held."
      },
      {
        "title": "Fire Resistance",
        "rules": "Provides resistance to fire damage. This lasts for the duration of holding the heartstone. Ends when removed or dropped."
      }
    ],
    "levelRequirementReason": "Requires a master craftsman to properly wield and appreciate the heartstone's capabilities.",
    "vendorReason": "Only the dwarven artisans of Dwarven Forge can craft such an item, ensuring its authenticity and quality.",
    "shippingDetail": "Ships with a dragon courier who ensures swift delivery to your forge.",
    "usage": {
      "activation": "Passive while held",
      "duration": "Instantaneous",
      "endsWhen": "Removed or dropped",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to reflect its rarity and the skill required for its creation.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T02:26:18.427921+00:00",
    "aiReviewedAt": "2026-07-25T02:26:18.427921+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_legendary_gem_of_gondorian_resolve": {
    "id": "middle_earth_item_legendary_gem_of_gondorian_resolve",
    "name": "The Legendary Gem of Gondorian Resolve (Echoes of Minas Tirith)",
    "description": "The Legendary Gem of Gondorian Resolve, a flawless sapphire encased in ancient Gondorian gold, hums with the echo of battles fought and won. Its radiance brightens the spirits of all who gaze upon it, while its core pulses with an unyielding resolve that fortifies even the mightiest warriors. This gem is said to channel the very essence of Minas Tirith’s walls, providing a shield against fear and terror, and bestowing a +8 Armor Class bonus in group combat.",
    "category": "faction",
    "price": 1000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Bolsters Morale",
      "Enhances Defense"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_horse",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Morale Boost",
        "rules": "When the gem is activated by a willing participant, all party members gain a +20 to their Charisma (Inspiration) checks for an hour. The effect ends if any member of the party leaves the area or if the activation is interrupted."
      },
      {
        "title": "Defense Boost",
        "rules": "The gem grants each ally within 30 feet a +8 bonus to their Armor Class, which lasts until the end of the encounter. This effect is negated by any condition that would normally remove defensive bonuses (e.g., being frightened)."
      }
    ],
    "levelRequirementReason": "The gem's power is accessible to all who can wield it, reflecting Gondor’s enduring spirit and the unyielding resolve of its people.",
    "vendorReason": "The elves of Lórien trade in relics that embody the strength and courage of their kin, making this gem a natural addition to their wares.",
    "shippingDetail": "Ships via swift winged steeds, ensuring safe arrival within three days.",
    "usage": {
      "activation": "Standard action",
      "duration": "Until the end of the encounter or until all party members leave the area",
      "endsWhen": "The activation is interrupted by a successful attack against the gem's user or if any party member leaves the area",
      "charges": "Unlimited, recharges at dawn"
    },
    "priceReason": "Given its legendary status and the special order nature of this item, it is priced to reflect both the raw materials and the craftsmanship involved.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T02:27:15.075426+00:00",
    "aiReviewedAt": "2026-07-25T02:27:15.075426+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_pristine_lithos_walker": {
    "id": "teyvat_item_pristine_lithos_walker",
    "name": "The Pristine Lithos Walker",
    "description": "The Pristine Lithos Walker strides with a mechanical grace, its crystalline joints gleaming in the sunlight as it carves through Sumeru's sands like a living automaton. This geo-infused marvel leaves behind a trail of sparkling sand that hums with elemental power, and its movements resonate with the ancient earth’s pulse. It grants the user resilience against elemental forces and enhances agility, making every step a dance of survival.",
    "category": "equipment",
    "price": 7800,
    "icon": "👣",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "limited_daily",
    "effects": [
      "Geo Resistance Boost",
      "Enhanced Agility"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Dragon Courier",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Geo Resistance Boost",
        "rules": "Upon activation, the Lithos Walker grants you a +2 bonus to your AC and resistance against elemental damage for 1 minute. This effect ends if you fall unconscious or if you are targeted by an attack with a different element type."
      },
      {
        "title": "Enhanced Agility",
        "rules": "While using the Lithos Walker, your walking speed is increased by 20 feet until the end of your next turn. You can use this feature once per long rest."
      }
    ],
    "levelRequirementReason": "The Pristine Lithos Walker requires a high-level character to control its intricate mechanisms and harness its elemental power.",
    "vendorReason": "Li Yue Harbor is known for its connections with the artisans of Sumeru, who create these marvels of geo-infused technology.",
    "shippingDetail": "The Dragon Courier ensures swift delivery, but the item must be claimed within a week or it will be returned.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "You fall unconscious or are targeted by an attack with a different element type.",
      "charges": "Recharge on a long rest"
    },
    "priceReason": "The Pristine Lithos Walker is crafted from rare geo materials and requires advanced knowledge to operate, making it a high-demand item.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T02:26:52.544521+00:00",
    "aiReviewedAt": "2026-07-25T02:26:52.544521+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_zenith_resonance_gem": {
    "id": "teyvat_item_zenith_resonance_gem",
    "name": "Zenith Resonance Gem - Aetherial Bloom",
    "description": "The Zenith Resonance Gem - Aetherial Bloom is a pulsating gemstone carved from the heart of a solidified storm cloud, its surface crackling with pure electro-kinetic energy. Held in your hand, it channels the raw power of lightning, capable of delivering potent electric shocks that can disrupt enemy formations and leave them stunned for an instant. Its unique form ensures that only those attuned to the storm's fury can wield this gem effectively.",
    "category": "consumables",
    "price": 1000,
    "icon": "⚡",
    "stock": 37,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Electrifying Shock",
      "Stunning Disruption"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Sea Serpent Transport",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Electrifying Shock",
        "rules": "When you hit a target with an attack, deal 60-80 lightning damage and have a 30% chance to stun the target for 1 second. This effect has no save DC."
      },
      {
        "title": "Stunning Disruption",
        "rules": "For the duration of your turn, you gain a +2 bonus to attack rolls against creatures within 5 feet of you. At the start of each creature's next turn within this area, it must make a Dexterity saving throw (DC 13) or be stunned for 1 round."
      }
    ],
    "levelRequirementReason": "The gem requires no specific level as its power is derived directly from the storm itself.",
    "vendorReason": "Inazuma Imports specializes in exotic and rare items harvested from unique environments, making this gem a perfect fit for their inventory.",
    "shippingDetail": "The Sea Serpent Transport ensures safe delivery with lightning-fast speed, as befits the gem's origin.",
    "usage": {
      "activation": "As a bonus action when you hit an enemy with an attack.",
      "duration": "Instantaneous; lasts until your next turn.",
      "endsWhen": "Exhausted after one use per short or long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The gem's rarity and unique, storm-derived power justify a moderate but not exorbitant price.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-25T02:26:56.601614+00:00",
    "aiReviewedAt": "2026-07-25T02:26:56.601614+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_chronometric_curiosity_orb": {
    "id": "teyvat_item_chronometric_curiosity_orb",
    "name": "Chronometric Curiosity Orb - Temporal Drift",
    "description": "The Chronometric Curiosity Orb - Temporal Drift, a glassy sphere embossed with ancient chronomancer symbols, seems to pulse with a faint temporal aura. When shaken, it releases fleeting glimpses of alternate timelines, disorienting those who gaze too long into its depths. This artifact can subtly slow the target's movement speed by 25% and create a temporal distortion field that increases evasion by 10%. Its effects are unpredictable, offering brief respites from the flow of time.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 8,
    "rarity": "uncommon",
    "stockType": "special_order",
    "effects": [
      "Temporal Slow",
      "Evasion Boost"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "Griffon Messenger",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Temporal Slow",
        "rules": "Activates as a bonus action. The target's movement speed is reduced by 25% for 1 minute. This effect ends early if the target takes any major action or if they are subjected to another effect that reduces their movement speed."
      },
      {
        "title": "Evasion Boost",
        "rules": "Activates as a reaction when attacked. The user gains a +2 bonus to Dexterity saving throws and has advantage on Dexterity (Stealth) checks for 1 round after using this ability. This effect can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "Requires level 18 to harness the unpredictable temporal effects without losing control over them.",
    "vendorReason": "The market of Mondstadt is known for its diverse and enigmatic wares, including relics from forgotten chronomancers.",
    "shippingDetail": "Ships via the fastest griffin courier, ensuring the Chronometric Curiosity Orb arrives intact within a day.",
    "usage": {
      "activation": "Bonus action and reaction",
      "duration": "1 minute for Temporal Slow; 1 round for Evasion Boost",
      "endsWhen": "Target takes major actions or is affected by another speed-reducing effect; ends upon taking an action after using the reaction.",
      "charges": "Unlimited, but limited to once per short or long rest"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its unpredictable temporal effects and unique utility in combat.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-25T02:28:03.417915+00:00",
    "aiReviewedAt": "2026-07-25T02:28:03.417915+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_shadow_caller_tms_001": {
    "id": "pokemon_item_shadow_caller_tms_001",
    "name": "The Obsidian Caller's TMs",
    "description": "The Obsidian Caller's TMs are blackened relics that channel the deep, ancient shadows of battle. Their surface crackles with a cold energy as they resonate with your Pokémon’s attacks, amplifying their raw power and delivering a chilling shadow influence to foes. Each TM unleashes a devastating move variant, ensuring swift and merciless victory against any challenger. A tremor shakes the ground each time one is used, hinting at the countless battles that have been fought within these stones.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 33,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Shadow Influence",
      "Swift Victory"
    ],
    "vendor": "pokemart",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 25,
    "effectDetails": [
      {
        "title": "Shadow Influence",
        "rules": "When activated, the TM inflicts a burn on the target with a probability of 30%, and the attack deals additional shadow damage. This effect lasts for 10 turns."
      },
      {
        "title": "Swift Victory",
        "rules": "The Pokémon's attack is increased by +20% for 10 turns, boosting its critical hit ratio by 5%. The boost ends when the target is defeated or the TM is used again."
      }
    ],
    "levelRequirementReason": "These TMs are designed for trainers who have reached a high level of mastery over their Pokémon.",
    "vendorReason": "The pokemart offers essential items that all trainers need, including these powerful ancient relics.",
    "shippingDetail": "Ships within the day with Drone Delivery's express service.",
    "usage": {
      "activation": "A bonus action to activate and use one of the TMs.",
      "duration": "10 turns for each effect, ending when the target is defeated or a new TM is used.",
      "endsWhen": "The effects end after the specified duration or when a new TM is activated.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The price reflects its rarity and the significant boost it provides to combat effectiveness.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T02:28:15.520736+00:00",
    "aiReviewedAt": "2026-07-25T02:28:15.520736+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_malevolent_resonance_caller_002": {
    "id": "pokemon_item_malevolent_resonance_caller_002",
    "name": "Mk.17 Malevolent Resonance Caller",
    "description": "The Mk.17 Malevolent Resonance Caller is a darkly crafted device, its surface etched with arcane runes that pulse with malevolent energy. This relic channels the rage of a linked Pokémon, amplifying it into a terrifying offensive surge. When activated, it emits an unsettling crimson glow and a wave of static, distorting vision in a 10-foot radius for 5 turns, instilling fear into nearby foes. The device hums with a barely perceptible darkness, as if the very essence of chaos has been distilled within its core.",
    "category": "equipment",
    "price": 1000,
    "icon": "😈",
    "stock": 15,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Agonizing Wave",
      "Fear Aura"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Winged Courier",
    "levelRequirement": 40,
    "effectDetails": [
      {
        "title": "Agonizing Wave",
        "rules": "When activated, the Mk.17 Malevolent Resonance Caller channels a surge of shadow damage and aggression, increasing your attack and speed by 30% for 5 turns. There's a 20% chance to confuse an opponent hit."
      },
      {
        "title": "Fear Aura",
        "rules": "The device emits a wave of static that creates a 10-foot radius area of fear, causing all creatures within the range who can see it to make a DC 15 Wisdom saving throw. On a failed save, they are frightened for 1 minute."
      }
    ],
    "levelRequirementReason": "This device requires significant power and control to channel the rage of a Pokémon safely.",
    "vendorReason": "The Safari Shop specializes in exotic items that can harness the untamed energy of nature, including this device.",
    "shippingDetail": "Delivered by Winged Courier with a special delivery delay of 1d6 turns due to the delicate nature of the item.",
    "usage": {
      "activation": "Action",
      "duration": "5 turns",
      "endsWhen": "The effects end when its duration is over or if you deactivate it early.",
      "charges": "Unlimited, but requires a bonded Pokémon to function"
    },
    "priceReason": "This item's price reflects its rare materials and the power to control a linked Pokémon's rage.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:27:44.509191+00:00",
    "aiReviewedAt": "2026-07-25T02:27:44.509191+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_chronos_echo_caller_service_003": {
    "id": "pokemon_item_chronos_echo_caller_service_003",
    "name": "Temporal Echo Service - Chronos Caller Mark V",
    "description": "The Temporal Echo Service - Chronos Caller Mark V hums with the essence of time, its polished alloy casing gleaming with captured temporal echoes. This device allows you to manipulate a single Pokémon's actions, rewinding or fast-forwarding their last move for tactical advantage. With careful timing and precision, it can even reveal hidden status conditions, offering critical insight in battle. Mistakes are costly; the device must be used with care lest it trigger paradoxes that could unravel the very fabric of time itself.",
    "category": "services",
    "price": 1000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Rewind or fast-forward a Pokémon's last move",
      "Reveal hidden status conditions"
    ],
    "vendor": "league_store",
    "shippedBy": "Magitek Transport System",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporal Rewind/Forward",
        "rules": "Activates as an action. Choose to rewind or fast-forward the target Pokémon’s last move by up to one round. The effect ends immediately if used on a Pokémon with a higher level than the user. Targets can make a Wisdom saving throw (DC 15) to negate this effect."
      },
      {
        "title": "Reveal Hidden Status",
        "rules": "Activates as an action. Reveals any hidden status conditions affecting the target Pokémon for the duration of one round. The user must be within 30 feet of the target Pokémon to use this ability, and it can only be used once per battle."
      }
    ],
    "levelRequirementReason": "Requires significant experience in temporal mechanics to wield the Chronos Caller Mark V without causing unintended consequences.",
    "vendorReason": "The league store stocks this device as part of its exclusive range for high-tier trainers seeking advanced tools.",
    "shippingDetail": "Ships via the Magitek Express, which ensures secure and timely delivery to trainers around the world.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends if the targeted Pokémon has a higher level than the user or if used on an opponent with a greater mastery of temporal mechanics.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rarity and the complexity involved in both crafting and using this device.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T02:27:58.616732+00:00",
    "aiReviewedAt": "2026-07-25T02:27:58.616732+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_collapsed_gravitic_crowned_null": {
    "id": "doughnut_hole_item_collapsed_gravitic_crowned_null",
    "name": "The Collapsed Gravitic Crowned Nulls",
    "description": "The Collapsed Gravitic Crowned Nulls are obsidian spheres imbued with a residual gravitational signature, as though drawn from the void itself. When activated, they induce brief moments of weightlessness, granting a +1 bonus to Dexterity checks and saving throws for 1 hour. However, prolonged exposure risks destabilizing one's center of gravity, causing disorientation and a -2 penalty to Strength-based actions if used consecutively three times in a day.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌌",
    "stock": 37,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "temporary_weightlessness",
      "dexterity_boost"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Dimensional Rift Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Weightlessness",
        "rules": "Activates on command as an action, providing the user with a +1 bonus to Dexterity checks and saving throws for up to 1 hour. The effect ends if the user is incapacitated or the item's charges are exhausted."
      },
      {
        "title": "Center of Gravity Instability",
        "rules": "Using the item consecutively three times in a day risks causing disorientation, imposing a -2 penalty to Strength-based actions until the next dawn. The risk increases with prolonged usage beyond recommended duration."
      }
    ],
    "levelRequirementReason": "The Collapsed Gravitic Crowned Nulls are accessible to all adventurers, as they provide a useful but not overly powerful effect that can be harnessed by any level of explorer.",
    "vendorReason": "The void vendor is known for their extensive collection of exotic and rare items from the farthest reaches of the cosmos, making them a fitting merchant for these enigmatic gravitic trinkets.",
    "shippingDetail": "Ships via Dimensional Rift Courier, ensuring the item arrives safely in its obsidian casing.",
    "usage": {
      "activation": "Activates on command as an action.",
      "duration": "1 hour per activation, up to three times a day.",
      "endsWhen": "The effect ends if the user is incapacitated or the item's charges are exhausted after three uses in a day.",
      "charges": "Unlimited, but limited to three activations per day."
    },
    "priceReason": "Balanced at 1000 XP, this item offers a potent yet not overbearing effect that can be used daily without overshadowing other party members' abilities.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T02:28:49.489271+00:00",
    "aiReviewedAt": "2026-07-25T02:28:49.489271+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_eldritch_crowned_nulls_of_the_depth": {
    "id": "doughnut_hole_item_eldritch_crowned_nulls_of_the_depth",
    "name": "Eldritch Crowned’s Nulls of the Depth",
    "description": "Recovered from a shattered observation point deep within The Doughnut, these Eldritch Crowned’s Nulls of the Depth thrum with an unsettling, almost sentient energy. Touching them induces vivid, fleeting visions—fractured memories of forgotten dimensions and the chilling indifference of the center. These relics hum with the power to grant increased perception and resistance to void influence, but their touch can also stir a chance for temporal distortions that warp the very fabric of time around you.",
    "category": "curiosities",
    "price": 1000,
    "icon": "👁️",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "increased_perception",
      "resistance_to_void_influence"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Phantom Delivery Drone",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Increased Perception",
        "rules": "As a bonus action, the wielder gains advantage on Wisdom (Perception) checks for 1 hour. This effect can be used once per long rest."
      },
      {
        "title": "Resistance to Void Influence",
        "rules": "The wearer has resistance against damage from creatures and effects that originate in the void dimension. Additionally, they have advantage on saving throws made to resist such influences. This benefit lasts until the end of each short or long rest."
      }
    ],
    "levelRequirementReason": "Wielders must be at least level 10 to harness the power of these relics without suffering adverse effects.",
    "vendorReason": "The Hole Hawker, a vendor known for their eccentric and often mysterious wares, has managed to obtain these rare and powerful relics from deep within The Doughnut's enigmatic depths.",
    "shippingDetail": "Delivered via the Phantom Delivery Drone, these items are delivered swiftly but with a touch of mystery, as only the most trusted drones can navigate the unpredictable currents of The Doughnut.",
    "usage": {
      "activation": "Bonus action to activate increased perception; no activation required for resistance to void influence (passive).",
      "duration": "Increased perception lasts for 1 hour per use. Resistance to void influence is active until rest ends.",
      "endsWhen": "The effect of increased perception ends after one long or short rest, while the passive resistance to void influence ends with each rest cycle.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects its rarity and the power it provides without being overpowered.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T02:28:49.816688+00:00",
    "aiReviewedAt": "2026-07-25T02:28:49.816688+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_mk_29_collapsed_nulls_of_inertia": {
    "id": "doughnut_hole_item_mk_29_collapsed_nulls_of_inertia",
    "name": "Mk.29 Collapsed Nulls of Inertia",
    "description": "The Mk.29 Collapsed Nulls of Inertia are dark grey, perfectly formed spheres that hum with an eerie stillness. These nulls capture a fragment of absolute inertia from the cosmos' most turbulent heart. Consuming one grants you temporary immunity to kinetic forces, allowing you to remain motionless while others around you rush about. However, this stillness comes at the cost of your own mobility; you become utterly immobile during its duration.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧲",
    "stock": 89,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "kinetic_immunity",
      "immobility"
    ],
    "vendor": "center_seller",
    "shippedBy": "Automated Delivery Unit 734",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Kinetic Immunity",
        "rules": "Instantaneous effect. You gain temporary immunity to all kinetic forces and effects for a number of rounds equal to your Constitution modifier (minimum of 1). This immunity also negates any movement-based attacks or abilities against you. When the duration ends, you are immediately knocked prone."
      },
      {
        "title": "Immobility",
        "rules": "Passive effect. While in this state, you cannot voluntarily move or take actions that would cause movement. Any attempt to do so results in you remaining immobile until the effect ends."
      }
    ],
    "levelRequirementReason": "Requires a high level of discipline and focus to harness the stillness within these nulls.",
    "vendorReason": "The center seller has established a reputation for selling items that tap into cosmic energies, making them the trusted source for such artifacts.",
    "shippingDetail": "Ships via Automated Delivery Unit 734, ensuring quick and secure transport to your doorstep.",
    "usage": {
      "activation": "Eating one Mk.29 Collapsed Null of Inertia",
      "duration": "1 round per point of Constitution modifier (minimum 1 round)",
      "endsWhen": "The duration ends when its effect is negated or you are knocked prone",
      "charges": "Unlimited; the nulls regenerate after a short rest"
    },
    "priceReason": "The price reflects the rarity and cosmic resonance of these nulls, ensuring they remain within reach for seasoned adventurers.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-25T02:28:22.783717+00:00",
    "aiReviewedAt": "2026-07-25T02:28:22.783717+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_the_chronal_ward_of_silverstream": {
    "id": "faerun_item_the_chronal_ward_of_silverstream",
    "name": "The Chronal Ward of Silverstream",
    "description": "The Chronal Ward of Silverstream is a delicate, intricately carved silver and obsidian pendant that pulses with a silvery-blue light. It subtly warps time around its wearer, granting brief glimpses into potential futures and allowing for momentary accelerations or decelerations of personal perception – useful in both combat and perilous navigation. Its wearer can momentarily bend the flow of time to their advantage, buying precious seconds against foes or gaining insight into unseen threats.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 7,
    "rarity": "legendary",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Distortion",
      "Precognitive Vision"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "flying_ship",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "As a reaction, you can slow time around yourself for 3 seconds. During this time, your movement speed is reduced to half its normal value and all hostile creatures within 5 feet of you have disadvantage on their attack rolls against you."
      },
      {
        "title": "Precognitive Vision",
        "rules": "Once per short or long rest, as a bonus action, you can gain a momentary insight into the immediate future. Until the start of your next turn, you know the actions of the first creature to take its action within 30 feet of you."
      }
    ],
    "levelRequirementReason": "The intricate carvings and magical properties require a certain amount of magical aptitude.",
    "vendorReason": "Waterdeep Market is known for its extensive inventory of rare and powerful items, including this unique time-warping pendant.",
    "shippingDetail": "The Chronal Ward arrives swiftly via a flying ship, often in the same day depending on proximity to Waterdeep.",
    "usage": {
      "activation": "Reaction (Temporal Distortion), Bonus Action (Precognitive Vision)",
      "duration": "Instantaneous (Temporal Distortion), Until Start of Next Turn (Precognitive Vision)",
      "endsWhen": "Use is expended, or the effect ends normally",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its effects, which are powerful but not game-breaking.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-25T02:29:03.609114+00:00",
    "aiReviewedAt": "2026-07-25T02:29:03.609114+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_the_aberrant_service_of_voidsong": {
    "id": "faerun_item_the_aberrant_service_of_voidsong",
    "name": "The Aberrant Service of Voidsong",
    "description": "The Aberrant Service of Voidsong is a shimmering obsidian sphere etched with unsettling geometric patterns that hum with the chaotic energies of the Shadowfell. This relic allows for brief communication with shadowy entities and the projection of illusory duplicates, but prolonged use risks madness and a growing dissonance within one's soul. Crafted by ancient necromancers, it draws its power from the very fabric of the Shadowfell, making it both a tool and a curse.",
    "category": "services",
    "price": 1000,
    "icon": "🌀",
    "stock": 3,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "summon illusory duplicate",
      "communicate with Shadowfell entities"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "shadow courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Summon Illusory Duplicate",
        "rules": "As an action, you can summon an illusory duplicate that lasts for 60 seconds. This duplicate can move and speak but cannot take actions or manipulate objects. The duplicate has the same appearance as you when summoned, but it is not a willing creature; it acts according to your gestures."
      },
      {
        "title": "Communicate with Shadowfell Entities",
        "rules": "You can communicate with shadowy entities through this relic for up to 1 minute at a time. The message must be limited to simple questions or commands due to the nature of the communication being inherently flawed and unreliable."
      }
    ],
    "levelRequirementReason": "Only those experienced in dealing with dark magic can safely use this relic without succumbing to its madness-inducing effects.",
    "vendorReason": "Baldur's Bazaar deals exclusively in powerful and dangerous items, making it the perfect vendor for such a relic.",
    "shippingDetail": "Ships via shadow courier, arriving at nightfall with a 10% risk of being intercepted by dark forces.",
    "usage": {
      "activation": "Action",
      "duration": "60 seconds per use",
      "endsWhen": "The duplicate dissipates or the communication ends",
      "charges": "Unlimited uses, but requires a short rest to recover after prolonged use"
    },
    "priceReason": "Balanced at 1000 XP as it provides unique and dangerous abilities without being overpowered.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T02:29:13.629397+00:00",
    "aiReviewedAt": "2026-07-25T02:29:13.629397+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_the_arcane_ward_of_dragonbreath": {
    "id": "faerun_item_the_arcane_ward_of_dragonbreath",
    "name": "The Arcane Ward of Dragonbreath",
    "description": "The Arcane Ward of Dragonbreath, a formidable construct forged from the molten heart of a slumbering dragon, radiates an oppressive heat and a pungent sulfuric aroma that makes even the boldest warriors pause. When activated, it unleashes a concentrated blast of searing fire capable of singeing flesh and melting armor. This ward not only offers potent resistance to fire damage but also has a chilling effect, igniting nearby foes with a 15% chance on contact.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Fire Resistance",
      "Ignite Nearby"
    ],
    "vendor": "sword_coast_traders",
    "shippedBy": "swift courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fire Resistance (+30%)",
        "rules": "The wearer gains resistance to fire damage equal to +30%. This effect lasts until the start of your next turn."
      },
      {
        "title": "Chance to Ignite (15%)",
        "rules": "When activated, there is a 15% chance that nearby enemies within 5 feet are ignited. The DC for this save is equal to 8 + your proficiency bonus + your Charisma modifier. On a failed save, the target catches fire and takes an additional 2d6 fire damage at the start of their next turn."
      }
    ],
    "levelRequirementReason": "This ward's arcane power demands no minimum level to use it effectively.",
    "vendorReason": "The Sword Coast Traders specialize in exotic and powerful relics, making the Arcane Ward of Dragonbreath a fitting addition to their inventory.",
    "shippingDetail": "Delivered by the Swift Courier within three days of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use; recharges on a short or long rest.",
      "charges": "1"
    },
    "priceReason": "The ward's unique materials and craftsmanship justify its price, which is set at 1000 XP.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T02:29:39.802982+00:00",
    "aiReviewedAt": "2026-07-25T02:29:39.802982+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_gravitic_whisperer_striker": {
    "id": "doughnut_hole_item_gravitic_whisperer_striker",
    "name": "The Obsidian Echo Striker",
    "description": "The Obsidian Echo Striker is a foreboding device crafted from obsidian and shadowed steel, its surface perpetually slick with an oily, iridescent residue that hints at the void's deepest currents. When activated, it warps the immediate area with a low, gravitational thrum, pulling nearby objects and unfortunate creatures towards its center point with terrifying precision. The device's hum is so powerful it creates momentary visual glitches in the fabric of space itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Gravitational Warp",
      "Spatial Distortion"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Gravitic Drone",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Gravitational Warp",
        "rules": "When activated as a bonus action, this device warps gravity within a 15-foot radius centered on the wielder. All creatures in this area must make a DC 20 Strength saving throw or be pulled towards the center of the effect. On a failed save, they are also knocked prone and take 1d6 force damage."
      },
      {
        "title": "Spatial Distortion",
        "rules": "The device creates momentary visual glitches in the fabric of space within its area of effect. Creatures in this area have disadvantage on all perception checks until the end of their next turn."
      }
    ],
    "levelRequirementReason": "Requires a high level to wield safely and effectively, given the device's immense gravitational and spatial manipulation abilities.",
    "vendorReason": "Hole Hawker specializes in unique and dangerous items that push the boundaries of physics, making this device a perfect fit for their inventory.",
    "shippingDetail": "The Gravitic Drone ensures safe delivery by maintaining a constant gravitational field around the package to prevent any accidental warping during transit.",
    "usage": {
      "activation": "Bonus action to activate; requires concentration for its duration.",
      "duration": "Concentration, up to 1 minute.",
      "endsWhen": "Interrupted or ends when concentration is lost.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced price reflects the device's epic rarity and powerful gravitational manipulation abilities.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T02:29:54.753594+00:00",
    "aiReviewedAt": "2026-07-25T02:29:54.753594+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_void_resonance_anomaly_901": {
    "id": "doughnut_hole_item_void_resonance_anomaly_901",
    "name": "The Chronal Static Anomaly – Phase Shift",
    "description": "The Chronal Static Anomaly – Phase Shift is a pulsating orb of compressed temporal energy, its surface crackling with subtle chronal dissonance. When held, it briefly grants the wielder an eerie ability to phase through solid objects as if they were mere echoes of the past. Its constant static not only disrupts nearby electronics but also subtly warps reality around you, causing a brief slowdown in the movements of your foes.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 7,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Temporal Echoes",
      "Electromagnetic Interference"
    ],
    "vendor": "center_seller",
    "shippedBy": "Void Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Echoes",
        "rules": "As a bonus action, the wielder can briefly phase through obstacles. This effect lasts for up to 1 minute per use and ends early if the wielder takes any harmful damage or if they drop the item."
      },
      {
        "title": "Electromagnetic Interference",
        "rules": "The orb emits a disruptive static that affects all electronic devices within 30 feet, rendering them inoperable for 1d4+1 rounds. This effect can be countered by making a successful DC 15 Dexterity saving throw."
      }
    ],
    "levelRequirementReason": "The item's effects are minor and do not require high-level expertise to use effectively.",
    "vendorReason": "Center Seller specializes in rare curiosities that can be found throughout the night markets, making this anomaly a fitting addition to their inventory.",
    "shippingDetail": "The item is shipped via the Void Courier's express service, ensuring it arrives intact and undisturbed by temporal anomalies.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous (up to 1 minute per use)",
      "endsWhen": "If the wielder takes harmful damage or drops the item; static effect ends when the orb is no longer held.",
      "charges": "Unlimited, but each use consumes a charge from the user's pool of temporary uses."
    },
    "priceReason": "The item provides minor utility and temporal effects at a cost that reflects its rarity without being overpowered.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-25T02:29:22.173677+00:00",
    "aiReviewedAt": "2026-07-25T02:29:22.173677+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_forbidden_null_striker_umbra": {
    "id": "doughnut_hole_item_forbidden_null_striker_umbra",
    "name": "The Umbral Null Striker - Abyss's Embrace",
    "description": "The Umbral Null Striker - Abyss's Embrace, a pulsating violet sphere, seems to draw in surrounding gravity with each breath of void energy it exhales. Its touch induces an immediate and disorienting pull towards the void’s chaotic heart, leaving enemies reeling under its reversed gravitational grasp. Prolonged exposure can unravel even the sturdiest of wills, as sanity frays at the edges and a creeping sense of dread settles into one's soul.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌑",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Reversed Gravitation Zone",
      "Void Corruption"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Dimensional Rift Beacon",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Reversed Gravitation Zone",
        "rules": "When activated, this item creates an area of reversed gravity within a 10-foot radius. Enemies within the zone are pulled towards the center and take 3d6 force damage at the start of their turn. The duration is until the end of your next turn or if you move more than 5 feet away from it."
      },
      {
        "title": "Void Corruption",
        "rules": "Enemies caught in the reversed gravity zone have a 20% chance to suffer from 'Void Corruption,' reducing their Strength by 1d4 until the start of their next turn. The effect ends if they are removed from the area or at the end of your next turn."
      }
    ],
    "levelRequirementReason": "Requires significant magical prowess to wield and control such a dangerous item.",
    "vendorReason": "The Void Vendor deals in rare and forbidden artifacts, including items that manipulate the very fabric of reality.",
    "shippingDetail": "Ships via interdimensional courier with a week-long transit time.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of your next turn or if you move more than 5 feet away from it",
      "endsWhen": "You move more than 5 feet away or at the start of your next turn",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "Balanced against other mythic items by requiring a lower level requirement and providing a specific activation and recharge mechanic.",
    "priceOriginal": 52000,
    "priceReviewedAt": "2026-07-25T02:29:47.880916+00:00",
    "aiReviewedAt": "2026-07-25T02:29:47.880916+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_obsidian_keeper_tokens_7892": {
    "id": "internet_item_obsidian_keeper_tokens_7892",
    "name": "The Obsidian Keeper's Tokens - Nexus Fragment 42B",
    "description": "The Obsidian Keeper's Tokens - Nexus Fragment 42B are black, intricately carved tokens that hum with the latent energy of a collapsed server cluster. These relics allow you to briefly tap into fragmented data streams, revealing hidden pathways within the labyrinthine network structure. Misuse risks becoming lost in the echoes of ancient algorithms, as if your mind were wandering through a glitch-filled void. Each token is inscribed with runes that glow faintly when activated.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 7,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "data_reveal",
      "glitch_defense"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Drone Delivery - Priority",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Data Reveal",
        "rules": "As an action, you can focus on one target within range and reveal hidden pathways or data leaks in the network. This effect lasts for 1 minute, providing advantage on checks related to navigating complex digital networks."
      },
      {
        "title": "Glitch Defense",
        "rules": "While holding these tokens, you gain resistance to psychic damage. Additionally, when subjected to a digital glitch or hacking attempt, you can use your reaction to negate the effect with a successful DC 18 Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "Even novices should be able to wield these tokens for basic network analysis and defense.",
    "vendorReason": "Cyber Market specializes in rare digital artifacts and relics, making it the perfect vendor for such a unique item.",
    "shippingDetail": "Delivered within one business day of purchase with enhanced security protocols to ensure safe arrival.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The effect ends when the duration expires or you voluntarily stop concentrating on it.",
      "charges": "Unlimited, as long as you hold the tokens."
    },
    "priceReason": "This price reflects the item’s rarity and utility in navigating complex digital environments without compromising balance.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T02:29:55.173571+00:00",
    "aiReviewedAt": "2026-07-25T02:29:55.173571+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_corrupted_tokens_7892": {
    "id": "internet_item_corrupted_tokens_7892",
    "name": "The Corrupted Tokens of Data - Stream Diverter 11A",
    "description": "The Corrupted Tokens of Data - Stream Diverter 11A are a sickly green, malformed cluster of data shards, remnants of an ancient viral infection. They hum with a dangerous energy, allowing you to hijack network connections and reroute traffic for brief but devastating effect. These tokens can bypass even the most secure firewalls, making them perfect for those who dare to unleash chaos on unsuspecting systems or simply wish to exploit weaknesses in digital architecture.",
    "category": "consumables",
    "price": 1000,
    "icon": "☣️",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "data_hijack",
      "system_interference"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Courier - Standard",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Data Hijack",
        "rules": "When activated as a bonus action, you can temporarily hijack a network connection within 10 feet for up to 1 minute. During this time, any digital communication within range is redirected through the tokens' corrupting influence, effectively granting you control over the data flow. This effect ends if the target system detects the intrusion or you are attacked."
      },
      {
        "title": "System Interference",
        "rules": "For every 24 hours this item remains active, any digital device within 30 feet that is not under your direct control has a cumulative -1 penalty to all checks and saving throws. This penalty increases by an additional -1 at the end of each day until you deactivate it."
      }
    ],
    "levelRequirementReason": "This item requires significant digital prowess to manipulate and avoid detection.",
    "vendorReason": "The pixel_shop specializes in rare and exotic cybernetic artifacts, so these corrupted tokens are a natural fit.",
    "shippingDetail": "Standard courier takes 1 week to deliver the items due to their sensitive nature.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 1 minute per activation",
      "endsWhen": "Target system detects intrusion or you are attacked",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "The price reflects the rare and dangerous nature of these corrupted tokens, as well as their potential to cause significant digital disruption.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T02:30:06.497913+00:00",
    "aiReviewedAt": "2026-07-25T02:30:06.497913+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_mk_37_corrupted_tokens_7892": {
    "id": "internet_item_mk_37_corrupted_tokens_7892",
    "name": "Mk.37 Corrupted Tokens – Fragmented Signal Keeper",
    "description": "The Mk.37 Corrupted Tokens – Fragmented Signal Keeper are a set of six cracked, etched tokens that hum faintly when held together. Each token is made from ancient digital scrap, its surface fractured like a shattered hard drive. When activated, these tokens create localized pockets of silence within the vast network, disrupting data flow and obscuring signals for moments of strategic advantage. The keeper's pulsating fragments also allow for brief echo-location scans that reveal hidden paths in digital mazes.",
    "category": "equipment",
    "price": 1000,
    "icon": "📡",
    "stock": 18,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "disrupt_signal",
      "echo_location_scan"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Automated Packet Delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Disrupt Signal",
        "rules": "Activates as a bonus action. Creates a 15-foot-radius sphere centered on the wielder, disrupting all digital communications within that area for up to 30 seconds. Creatures and objects in the sphere have disadvantage on attack rolls and saving throws until the duration ends."
      },
      {
        "title": "Echo Location Scan",
        "rules": "Can be used once per short rest as an action. The tokens emit a brief, resonant pulse that reveals hidden paths or obstacles within 60 feet of the wielder for up to one minute. This effect does not reveal creatures or objects behind closed doors."
      }
    ],
    "levelRequirementReason": "This item requires significant digital manipulation skills and knowledge, best suited for experienced users.",
    "vendorReason": "The data dealer specializes in obsolete but still functional tech items like the Mk.37 Corrupted Tokens.",
    "shippingDetail": "Ships via encrypted packets, ensuring safe and secure delivery of digital artifacts.",
    "usage": {
      "activation": "Bonus action to activate the disrupt signal; once per short rest to use echo-location scan.",
      "duration": "Disrupt Signal lasts up to 30 seconds. Echo Location Scan reveals hidden paths for one minute.",
      "endsWhen": "The duration ends when the effect is used again or the wielder takes a long rest.",
      "charges": "Unlimited uses between rests."
    },
    "priceReason": "This item combines rare digital scrap with advanced tech, making it both powerful and expensive.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-25T02:30:17.702693+00:00",
    "aiReviewedAt": "2026-07-25T02:30:17.702693+00:00",
    "aiReviewVersion": 1
  }
};
