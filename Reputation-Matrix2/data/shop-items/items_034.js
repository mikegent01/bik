// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_034 = {
  "power_smash_badge": {
    "id": "power_smash_badge",
    "name": "Power Smash Badge",
    "description": "The Power Smash Badge is a heavy, iron-clad emblem worn by champions of old. Crafted from the very heart of a blacksmith's forge, it channels raw hammer force into any strike. When you wear this badge, your next bludgeoning weapon attack deals an extra +5 damage, but at the cost of -2 to hit accuracy. The badge whispers the essence of countless battles and is sold by Gilded Gryphon, known for their unique magical artifacts.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔨",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Bludgeoning Damage Boost",
      "Attack Penalty"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Heavy Box Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bludgeoning Damage Boost",
        "rules": "When you use this item to enhance your next bludgeoning weapon attack, it deals an additional +5 damage. This effect can only be used once per short or long rest."
      },
      {
        "title": "Attack Penalty",
        "rules": "For the attack made with the badge's power, you take a -2 penalty to your attack roll accuracy. This penalty lasts until your next turn."
      }
    ],
    "levelRequirementReason": "This badge requires no minimum level as it is a simple enhancement for any warrior.",
    "vendorReason": "Gilded Gryphon specializes in unique and powerful magical artifacts, so selling this emblem fits their store's reputation.",
    "shippingDetail": "The badge is shipped with extra padding to ensure it arrives intact, even after long journeys.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the attack made with the badge's power is resolved or a short rest is completed.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects its moderate boost in damage and temporary penalty, making it accessible to lower-level characters without being overpowered.",
    "priceOriginal": 55000,
    "priceReviewedAt": "2026-07-23T16:53:22.625748+00:00",
    "aiReviewedAt": "2026-07-23T16:53:22.625748+00:00",
    "aiReviewVersion": 1
  },
  "primordial_chaos_egg": {
    "id": "primordial_chaos_egg",
    "name": "Primordial Chaos Egg",
    "description": "The Primordial Chaos Egg is a relic of creation, an ancient ovoid hatched from the void itself. Its shell is composed of stardust and ancient energies, pulsing faintly with the birth cries of all that could be. Touch it, and you feel the universe's heartbeat; drop it, and the world might shatter. This egg is a cosmic marvel crafted by the First Egg, an artifact so powerful it can only be found in the hands of the Cosmic Nursery.",
    "category": "consumables",
    "price": 1000,
    "icon": "🥚",
    "stock": 1,
    "rarity": "cosmic",
    "effects": [
      "Hatch to Forge a New Universe",
      "Ingest for Creation's Power"
    ],
    "vendor": "cosmic_nursery",
    "shippedBy": "Big Bang Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Forge a New Universe",
        "rules": "Activating this effect requires a ritual performed by a willing participant of at least 15th level. The egg must be held and spoken to, invoking the ancient words of creation. Once invoked, it hatches, creating a new universe within a 30-foot-radius sphere centered on you. You become the ruler of this nascent realm for 24 hours, with complete control over its laws and inhabitants."
      },
      {
        "title": "Ingest for Creation's Power",
        "rules": "Swallowing the egg grants you the power to create anything from nothing within a 60-foot radius. This effect can be used once per long rest but requires a DC 25 Constitution saving throw or risk losing your ability to speak in the new universe."
      }
    ],
    "levelRequirementReason": "The Primordial Chaos Egg's power is too vast for any less than a first-level spellcaster to wield.",
    "vendorReason": "Only the Cosmic Nursery, guardians of ancient relics, can handle such a powerful artifact.",
    "shippingDetail": "Ships via interdimensional courier with a guaranteed delivery time of 1 week.",
    "usage": {
      "activation": "Ritual activation for hatching; automatic on ingestion",
      "duration": "24 hours (universe creation); instantaneous (creation power)",
      "endsWhen": "Upon the expiration of its effects or destruction",
      "charges": "Unlimited, but one use per long rest"
    },
    "priceReason": "Balanced by requiring a significant investment in time and resources for both hatching and using the power.",
    "priceOriginal": 500000000,
    "priceReviewedAt": "2026-07-23T16:52:46.955678+00:00",
    "aiReviewedAt": "2026-07-23T16:52:46.955678+00:00",
    "aiReviewVersion": 1
  },
  "prince_of_persia_dagger": {
    "id": "prince_of_persia_dagger",
    "name": "Dagger of Time",
    "description": "The Dagger of Time, forged from ancient sands and a forgotten temple's core, allows its wielder to rewind time briefly. With each stab, you can turn back the clock for the target by six seconds, disrupting their actions in a heartbeat. The dagger’s blade is etched with intricate runes that whisper of lost moments and future possibilities. It is said that only those who have earned the favor of the sands may wield such power.",
    "category": "premium",
    "price": 80000,
    "icon": "🗡️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Rewind Time",
      "Stab: Temporal Disruption"
    ],
    "vendor": "lunar_auction",
    "shippedBy": "Time Capsule",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Rewind Time (Instant)",
        "rules": "When you stab with this dagger, you rewind time for the target by six seconds. This effect is instantaneous and can only be used once per day."
      },
      {
        "title": "Stab: Temporal Disruption",
        "rules": "On a successful hit with this dagger, you deal 1d4 + your Dexterity modifier piercing damage. Additionally, the target must make a DC 15 Constitution saving throw or be incapacitated for one round due to temporal disorientation."
      }
    ],
    "levelRequirementReason": "This dagger requires significant discipline and control over time magic, thus demanding a high level of mastery.",
    "vendorReason": "The lunar auction's collection includes rare and powerful relics from ancient realms, making the Dagger of Time an expected addition.",
    "shippingDetail": "Ships via Time Capsule with a delay of one round due to temporal adjustments.",
    "usage": {
      "activation": "Reaction (stabbing action)",
      "duration": "Instantaneous",
      "endsWhen": "The target's turn ends or the effect is interrupted by another action.",
      "charges": "1 use per day"
    },
    "priceReason": "Despite its limited daily uses, the Dagger of Time offers unparalleled temporal manipulation, making it a godly and highly sought-after item.",
    "priceOriginal": 80000,
    "priceReviewedAt": "2026-07-23T16:52:55.857341+00:00",
    "aiReviewedAt": "2026-07-23T16:52:55.857341+00:00",
    "aiReviewVersion": 1
  },
  "private_observatory": {
    "id": "private_observatory",
    "name": "Private Observatory",
    "description": "The Private Observatory, a marvel of portable astronomy, collapses into a compact backpack that whispers the secrets of the cosmos through its sleek, silver casing. Crafted from meteoric iron and encased in an obsidian sheath, it allows you to peer through time and see hidden celestial phenomena, as if the night sky itself were yours to command. Use it on clear nights when the stars align just right, and you might glimpse events that will shape your destiny.",
    "category": "premium",
    "price": 1000,
    "icon": "🔭",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Sees Through Time",
      "Discloses Hidden Celestial Events"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Aurora Express",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Sees Through Time",
        "rules": "As an action, you can activate the observatory to rewind or fast-forward time for a short span. You gain advantage on Wisdom (Perception) checks related to celestial observations within your line of sight for 10 minutes after activation."
      },
      {
        "title": "Discloses Hidden Celestial Events",
        "rules": "Once per day, you can use the observatory to reveal hidden or future celestial phenomena. This effect lasts until the end of your next short rest and grants you knowledge of an upcoming event that could influence your path."
      }
    ],
    "levelRequirementReason": "Requires a high degree of expertise in astronomy to properly utilize the observatory's full potential.",
    "vendorReason": "Comets are renowned for their astronomical artifacts and knowledge, making them the perfect purveyors of the Private Observatory.",
    "shippingDetail": "Ships via the Aurora Express, a magical courier that delivers observatories through the night sky in one hour.",
    "usage": {
      "activation": "Action or Bonus Action (requires clear skies)",
      "duration": "Instantaneous; effect lasts until end of next short rest",
      "endsWhen": "Effect ends upon destruction or when you cease concentration, whichever comes first",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to be a godly rarity while offering two powerful effects that are both rare and useful.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-23T16:52:43.846843+00:00",
    "aiReviewedAt": "2026-07-23T16:52:43.846843+00:00",
    "aiReviewVersion": 1
  },
  "probability_manipulator": {
    "id": "probability_manipulator",
    "name": "Probability Manipulator",
    "description": "The Probability Manipulator is a compact, metallic device with intricate gears and dials. It was crafted by The Statistician in the heart of Academia, known for its ability to tilt probabilities in your favor. With a flick of the wrist, any roll you make becomes guaranteed—100% certain to succeed, while your enemies' rolls are as likely to fail. This device is not just a toy; it's a testament to the Statistician’s mastery over chance itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎲",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Fortunate Roll",
      "Adverse Roll"
    ],
    "vendor": "probability_brokers",
    "shippedBy": "Guaranteed Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fortunate Roll",
        "rules": "Activate as an action. Set any roll you make to a certain success (100% probability). The effect ends when the roll is made or if you activate another Fortunate Roll on your turn."
      },
      {
        "title": "Adverse Roll",
        "rules": "Activate as an action. Set any enemy's roll to be certain failure (100% probability of failing). This effect lasts until the end of your next turn, and it can be used only once per short or long rest."
      }
    ],
    "levelRequirementReason": "This device is suitable for any adventurer who values a bit of luck in their endeavors.",
    "vendorReason": "Probability Brokers specialize in items that enhance the odds of success, making it no surprise they stock this unique device.",
    "shippingDetail": "The Probability Manipulator is carefully packed to ensure it arrives in pristine condition, as its delicate gears and dials are easily damaged during transit.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous effect; lasts until the roll is made or another Fortunate Roll is activated. Adverse Roll ends at the end of your next turn.",
      "endsWhen": "The effect ends when the roll is made, you activate another Fortunate Roll on your turn, or after one use per short/long rest for Adverse Roll.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The device's rarity and unique capabilities ensure it remains a valuable yet balanced addition to any adventurer’s arsenal.",
    "priceOriginal": 72000000,
    "priceReviewedAt": "2026-07-23T16:52:59.695959+00:00",
    "aiReviewedAt": "2026-07-23T16:52:59.695959+00:00",
    "aiReviewVersion": 1
  },
  "propeller_mushroom": {
    "id": "propeller_mushroom",
    "name": "Propeller Mushroom",
    "description": "The Propeller Mushroom sprouts from a bed of moss, its cap adorned with a spinning propeller that hums like the blades of an airplane's engine. When you consume it, you're propelled skyward in a flurry of leaves and petals, soaring gracefully into the clouds. However, your ascent is brief; after 30 seconds, you begin to descend, spinning uncontrollably until you land with a soft thud. The propeller continues to hum merrily as if nothing happened.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍄",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Single Use: Fly 60ft straight up",
      "Spin uncontrollably for 30 seconds"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Spinning Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Propelled Ascension",
        "rules": "When consumed, the Propeller Mushroom causes you to fly upward 60 feet in a straight line. You then slowly fall back down at a rate of 15 feet per round for one minute. This effect is instantaneous and has no saving throw."
      },
      {
        "title": "Uncontrolled Spin",
        "rules": "For the next 30 seconds after landing, you are unable to control your movements due to the residual effects of the mushroom. You take a -2 penalty to movement speed until this duration ends or you rest for at least one hour."
      }
    ],
    "levelRequirementReason": "Consuming the Propeller Mushroom requires less strength than flying but still demands basic coordination, thus it is suitable for players of level 1.",
    "vendorReason": "Toads of Toad Town often dabble in magical fungi and plants, making the Propeller Mushroom a natural addition to their market offerings.",
    "shippingDetail": "The mushrooms are packed securely within rotating crates that ensure they remain fresh during transit.",
    "usage": {
      "activation": "Eaten as a consumable item",
      "duration": "Instantaneous, with effects lasting for one minute",
      "endsWhen": "You land and the duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The Propeller Mushroom's rare and unique properties justify its price, offering both a whimsical experience and a minor tactical advantage.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T16:53:13.000243+00:00",
    "aiReviewedAt": "2026-07-23T16:53:13.000243+00:00",
    "aiReviewVersion": 1
  },
  "psionic_amplifier_crown": {
    "id": "psionic_amplifier_crown",
    "name": "Psionic Amplifier Crown (Headgear)",
    "description": "Amplifies psionic powers for greater range and potency.",
    "price": 550000,
    "icon": "👑",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Doubles psionic damage and range",
      "Attunes to wearer",
      "Made by: Mind Crown Forgers"
    ],
    "vendor": "psi_emporium",
    "shippedBy": "Telekinetic Delivery",
    "levelRequirement": 17
  },
  "psionic_dream_weaver": {
    "id": "psionic_dream_weaver",
    "name": "Psionic Dream Weaver (Tool)",
    "description": "The Psionic Dream Weaver is a delicate tool crafted by the Oneiric Masters, whose touch can weave the very fabric of dreams. This artifact allows you to delve into the subconscious mind of another, extracting hidden truths or planting suggestions with a mere whisper in their slumber. However, the power comes at a cost; if the target resists too strongly, they may suffer from a lingering dream backlash that plagues them for days afterward.",
    "price": 1000,
    "icon": "💭",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Dream Manipulation",
      "Risk of Backlash"
    ],
    "vendor": "dream_realm",
    "shippedBy": "Subconscious Link",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Dream Manipulation",
        "rules": "As an action, you can communicate with the target in their dreams. You have advantage on any Intelligence (Insight) check to discern the truth or gain information from the target's subconscious. This effect ends if the target wakes up, is attacked, or if the duration expires."
      },
      {
        "title": "Risk of Backlash",
        "rules": "There is a 20% chance that the target suffers a dream backlash after your manipulation attempt. If this occurs, the target must make a DC 15 Constitution saving throw or be plagued by recurring nightmares for 1d4 days."
      }
    ],
    "levelRequirementReason": "Only those of high enough level and expertise can wield such a powerful tool without risking their own sanity.",
    "vendorReason": "The Oneiric Masters are the only ones who can craft this item due to its intricate nature involving deep dreamscape knowledge.",
    "shippingDetail": "Delivery takes place through a brief, guided dream journey that ensures safe arrival without disturbing the target's sleep.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute per target",
      "endsWhen": "Target wakes up, is attacked, or the duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The tool's rarity and the skill required to use it justify its moderate price in XP.",
    "priceOriginal": 770000,
    "priceReviewedAt": "2026-07-23T16:53:12.823567+00:00",
    "aiReviewedAt": "2026-07-23T16:53:12.823567+00:00",
    "aiReviewVersion": 1
  },
  "psionic_mind_shield_implant": {
    "id": "psionic_mind_shield_implant",
    "name": "Psionic Mind Shield Implant (Cybernetic)",
    "description": "The Psionic Mind Shield Implant, a sleek piece of cybernetic technology, is surgically installed into your skull to protect you from telepathic attacks and invasive thoughts. Crafted by the Psi-Tech Collective using advanced neurotechnology, it enhances mental focus and shields the mind with an impenetrable barrier for 24 hours after activation. This implant requires a delicate surgical procedure that can only be performed by the cyber-clinic's top neurosurgeons.",
    "price": 1000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Mind Barrier",
      "Enhanced Focus"
    ],
    "vendor": "cyber_clinic",
    "shippedBy": "Medivac Pod",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Mind Barrier",
        "rules": "Activates as an action, providing immunity to all mind control effects and psychic damage for the next 24 hours. This effect ends if you are subjected to a successful saving throw against another mind control or psychic effect."
      },
      {
        "title": "Enhanced Focus",
        "rules": "Passive benefit that grants advantage on Wisdom (Insight) checks related to perception and willpower, as well as a +2 bonus to Intelligence saving throws. This enhancement persists indefinitely until the implant is removed by a successful DC 30 Medicine check."
      }
    ],
    "levelRequirementReason": "This advanced cybernetic implant requires significant skill and experience to safely install, ensuring only those of high level and expertise can benefit from its protection.",
    "vendorReason": "Cyber Clinic specializes in neurotechnology and is the sole provider for this cutting-edge implant due to their unparalleled surgical expertise.",
    "shippingDetail": "Ships via Medivac Pod with expedited delivery, ensuring the implant reaches its destination securely and promptly.",
    "usage": {
      "activation": "Activates as an action.",
      "duration": "24 hours of immunity to mind control effects and psychic damage.",
      "endsWhen": "Upon successful saving throw against another mind control or psychic effect.",
      "charges": "Unlimited, recharges after a long rest."
    },
    "priceReason": "This item is priced at 1000 XP to reflect its high-level technology and the expertise required for installation.",
    "priceOriginal": 560000,
    "priceReviewedAt": "2026-07-23T16:53:56.134226+00:00",
    "aiReviewedAt": "2026-07-23T16:53:56.134226+00:00",
    "aiReviewVersion": 1
  },
  "pure_heart": {
    "id": "pure_heart",
    "name": "The Pure Heart",
    "description": "The Pure Heart is a radiant, glowing orb of purest light that pulses with an unyielding will to protect and heal. Crafted by ancient shamans through countless sacrifices, it repels all taint of chaos, shielding its bearer from the malevolent forces that seek to corrupt the world. Its power lies in its ability to dispel any magical barrier and restore allies' vitality, making it a beacon of hope in times of despair.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🤍",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Dispels Magical Barriers",
      "Revives Allies"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Light Beam Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dispel Magic Barrier",
        "rules": "As an action, the Pure Heart dispels any magical barrier within 30 feet. This effect has no save DC and can be used once per long rest."
      },
      {
        "title": "Revive Allies",
        "rules": "By using a bonus action while holding The Pure Heart, all allies within 50 feet who are dead or nearly so are immediately restored to full health. This ability is limited to one use per campaign and cannot be used on creatures with death throes."
      }
    ],
    "levelRequirementReason": "The Pure Heart's power demands a spiritual purity that can only be achieved at least by level 1.",
    "vendorReason": "Only the Shamans' Hut, custodians of ancient knowledge and healing arts, possesses this sacred relic.",
    "shippingDetail": "Delivered with a flash of light that illuminates the path, ensuring safe arrival within an hour.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous for dispelling; instantaneous for revival",
      "endsWhen": "Charges are depleted after one use per campaign and one long rest per dispel.",
      "charges": "Unlimited uses, but only one per campaign"
    },
    "priceReason": "The Pure Heart's price reflects its rarity and the immense spiritual cost of crafting it.",
    "priceOriginal": 900000,
    "priceReviewedAt": "2026-07-23T16:53:40.752271+00:00",
    "aiReviewedAt": "2026-07-23T16:53:40.752271+00:00",
    "aiReviewVersion": 1
  },
  "pure_heart_complete": {
    "id": "pure_heart_complete",
    "name": "The Complete Pure Heart",
    "description": "The Complete Pure Heart glows with an ethereal light that pulses in time with the heart's own rhythm. This ancient artifact is said to have been crafted from the essence of a pure-hearted hero who sacrificed everything for love and balance. Its touch can revive the dead, banishing the void where despair once lingered, though it requires true love or a roll of 20 on a d20 to activate.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🤍",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Mass Resurrection",
      "Banish the Void"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Light's Radiance",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mass Resurrection",
        "rules": "Requires a successful DC 18 Wisdom (Medicine) check and a roll of at least 20 on a d20. The item can be used once per long rest to resurrect up to three dead creatures within 30 feet, restoring them to life with no hit points lost."
      },
      {
        "title": "Banish the Void",
        "rules": "Instantaneous effect that banishes all void and despair within a 60-foot radius. Creatures and objects within this area are cleansed of negative effects from the void. This effect can be used once per day, and it has no save DC."
      }
    ],
    "levelRequirementReason": "Even the simplest hero can feel its power and use it to restore hope.",
    "vendorReason": "The Shamans of the Heartwood Grove have long been guardians of ancient artifacts like this one, passed down through generations.",
    "shippingDetail": "Delivered by Light's Radiance, a celestial courier that ensures swift and safe transport with no delays.",
    "usage": {
      "activation": "Reaction or bonus action to use during combat or other critical moments.",
      "duration": "Instantaneous effect; Mass Resurrection requires a successful check and roll of at least 20.",
      "endsWhen": "Exhausted after one use, recharges in 7 days.",
      "charges": "1 charge"
    },
    "priceReason": "The Complete Pure Heart is priced at 1000 XP as it requires rare materials and immense magical energy to craft.",
    "priceOriginal": 1500000,
    "priceReviewedAt": "2026-07-23T16:54:12.578672+00:00",
    "aiReviewedAt": "2026-07-23T16:54:12.578672+00:00",
    "aiReviewVersion": 1
  },
  "purple_paint_of_royal_delusion": {
    "id": "purple_paint_of_royal_delusion",
    "name": "Purple Paint of Royal Delusion",
    "description": "The Purple Paint of Royal Delusion transforms you into a dazzling spectacle. When you apply it, your skin takes on an iridescent purple hue that catches the light, and you gain a glistening crown that seems to float above your head. Your charm is undeniable; you draw attention like royalty, but beware—those who see through your facade are quick to distance themselves, granting you disadvantage in Persuasion checks with them.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎨",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Purple Charm",
      "Social Disadvantage"
    ],
    "vendor": "kingdom_gondor_supply",
    "shippedBy": "Royal Courier Service",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Purple Charm",
        "rules": "When you activate the paint and refer to yourself in the third person, you gain a +2 bonus to Charisma checks. This effect lasts until the start of your next turn."
      },
      {
        "title": "Social Disadvantage",
        "rules": "For 1 minute after using the paint, you have disadvantage on Persuasion checks with anyone who is aware that you are wearing it."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level to ensure characters can handle its social and physical effects without becoming overpowered.",
    "vendorReason": "The Kingdom of Gondor Supply specializes in items that enhance one's status, making the Purple Paint of Royal Delusion a perfect fit for their inventory.",
    "shippingDetail": "Delivered by the Royal Couriers within three days, ensuring the paint is fresh and vibrant upon arrival.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute",
      "endsWhen": "Start of your next turn after it ends or if you are no longer in an area with a mirror to apply it (to recharge).",
      "charges": "Unlimited, but recharges when you finish a short rest."
    },
    "priceReason": "The balanced price reflects the item's limited duration and its social utility without overshadowing other abilities.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-23T16:53:54.034316+00:00",
    "aiReviewedAt": "2026-07-23T16:53:54.034316+00:00",
    "aiReviewVersion": 1
  },
  "quake_hammer": {
    "id": "quake_hammer",
    "name": "Quake Hammer",
    "description": "The Quake Hammer is a formidable weapon forged from the heart of an ancient volcano. Its heavy hammer head, encrusted with obsidian and volcanic glass, resonates with the earth's raw power. When struck against the ground, it triggers tremors that shake nearby foes, knocking them prone in a 10-foot radius (STR save DC 14). The hammer also amplifies the user’s strength, granting a temporary boost to their next melee attack.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌋",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Earthquake",
      "Strengthened Strike"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Reinforced Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Earthquake",
        "rules": "When the Quake Hammer strikes the ground, all creatures within a 10-foot radius must succeed on a Strength saving throw (DC 14) or be knocked prone. The effect lasts for 1 round and can only be used once per short rest."
      },
      {
        "title": "Strengthened Strike",
        "rules": "After using the Earthquake ability, the next melee attack made by the user gains advantage on its roll and deals an additional 2d6 bludgeoning damage. This effect can be used twice per long rest."
      }
    ],
    "levelRequirementReason": "The Quake Hammer's raw power requires users to have at least level 1 to control such elemental might.",
    "vendorReason": "Gilded Gryphon, known for their expertise in exotic and magical armaments, carries the Quake Hammer as a testament to their mastery of forging.",
    "shippingDetail": "The hammer is carefully packed in a reinforced box to ensure safe delivery from the forge to its new owner.",
    "usage": {
      "activation": "Action",
      "duration": "1 round (Earthquake) or until used again (Strengthened Strike)",
      "endsWhen": "At the end of each user’s next turn, unless used again before then.",
      "charges": "Two uses per long rest"
    },
    "priceReason": "The Quake Hammer strikes a balance between its raw power and rarity, making it a moderately priced uncommon item suitable for players of all levels.",
    "priceOriginal": 70000,
    "priceReviewedAt": "2026-07-23T16:54:22.382164+00:00",
    "aiReviewedAt": "2026-07-23T16:54:22.382164+00:00",
    "aiReviewVersion": 1
  },
  "quantum_entanglement_comms": {
    "id": "quantum_entanglement_comms",
    "name": "Quantum Entanglement Comms (Device)",
    "description": "Instant communication across any distance via quantum links.",
    "price": 450000,
    "icon": "📡",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "Pair of devices, unlimited range",
      "Unjammable",
      "Made by: Entangle Labs"
    ],
    "vendor": "comm_tower",
    "shippedBy": "Quantum Pair",
    "levelRequirement": 14
  },
  "quantum_phase_shifter": {
    "id": "quantum_phase_shifter",
    "name": "Quantum Phase Shifter (Tech)",
    "description": "The Quantum Phase Shifter, a sleek device encased in iridescent tech plating, allows its wielder to phase through solid matter for brief moments. Crafted by Quantum Labs from advanced nanotechnology, this gadget can traverse walls and obstacles with precision, making it invaluable for clandestine operations or emergency escapes. With each use, you must wait 10 minutes before phasing again; however, the shifter is compatible with most armors, ensuring your safety during transit.",
    "price": 1000,
    "icon": "⚛️",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Phase through walls",
      "Armor compatibility"
    ],
    "vendor": "tech_bazaar",
    "shippedBy": "Secure Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Phase Through Walls",
        "rules": "As an action, you can phase through a solid wall or barrier for up to 30 seconds. While phased, you are invisible and cannot be targeted by attacks. This effect ends when the duration expires or if you choose to end it early."
      },
      {
        "title": "Armor Compatibility",
        "rules": "The Quantum Phase Shifter can be used with any type of armor without causing discomfort or hindrance. Its nanotech components seamlessly integrate, allowing for full mobility and protection during phasing."
      }
    ],
    "levelRequirementReason": "This device requires significant technical knowledge to operate effectively, which is typically acquired at higher levels.",
    "vendorReason": "Tech Bazaar specializes in the most advanced and cutting-edge gadgets, making it a natural home for Quantum Labs' products.",
    "shippingDetail": "Ships via Secure Courier with priority handling to ensure timely delivery of this fragile tech.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 30 seconds per use",
      "endsWhen": "Duration expires or you end it early",
      "charges": "3 charges/day"
    },
    "priceReason": "The Quantum Phase Shifter is priced at 1,000 XP due to its advanced technology and limited number of daily uses.",
    "priceOriginal": 380000,
    "priceReviewedAt": "2026-07-23T16:54:58.147373+00:00",
    "aiReviewedAt": "2026-07-23T16:54:58.147373+00:00",
    "aiReviewVersion": 1
  },
  "quantum_save_state_device": {
    "id": "quantum_save_state_device",
    "name": "Quantum Save State Device",
    "description": "The Quantum Save State Device is a sleek, compact device reminiscent of a time-warping keycard. Crafted by The Emulator, it allows you to save your game state up to three times, each with its own distinct timeline. Should death, critical failure, or poor decision-making doom your party, this device can be used to rewind time and restore the party to any saved point. With a flick of a switch, the past is rewritten, and the future redefined.",
    "category": "equipment",
    "price": 1000,
    "icon": "💾",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Rewind Time",
      "Immortal Recall"
    ],
    "vendor": "save_state_tech",
    "shippedBy": "Load Game Express Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rewind Time",
        "rules": "Activate as an action to create a save state. Each use allows you to return to that specific moment, effectively rewinding time. You can have up to three unique save states active at once."
      },
      {
        "title": "Immortal Recall",
        "rules": "Use upon death or critical failure to revert your character's condition back to the last saved state without penalty. This effect has no cooldown between uses."
      }
    ],
    "levelRequirementReason": "Beginners need this tool for when they're just starting out, ensuring that they can learn from their mistakes without permanent setbacks.",
    "vendorReason": "Save State Tech specializes in tools and gadgets to help players overcome challenges with minimal frustration.",
    "shippingDetail": "Delivered via a mysterious courier known as 'The Rewinder', who ensures the device is safely delivered before the next adventure begins.",
    "usage": {
      "activation": "Action to activate, Reaction to use upon death or critical failure",
      "duration": "Instantaneous and recharges after each successful save",
      "endsWhen": "When all charges are used up or when the device is destroyed",
      "charges": "3"
    },
    "priceReason": "Balanced at a reasonable price as it ensures players can learn from their mistakes without excessive frustration.",
    "priceOriginal": 95000000,
    "priceReviewedAt": "2026-07-23T16:54:38.378979+00:00",
    "aiReviewedAt": "2026-07-23T16:54:38.378979+00:00",
    "aiReviewVersion": 1
  },
  "quantum_superposition_coin": {
    "id": "quantum_superposition_coin",
    "name": "Quantum Superposition Coin",
    "description": "The Quantum Superposition Coin, a shimmering coin of unknown origin, lies cold and still in your palm until you glance at it. Upon observation, it splits into two identical coins that exist simultaneously: one heads, the other tails. It can duplicate any event by being in both states at once, creating an instant split reality for the duration of its effect. Crafted by The Quantum Physicist, this coin is a marvel of quantum mechanics, capable of bending time and space just long enough to make your wishes seem real.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🪙",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Split Reality",
      "Event Duplication"
    ],
    "vendor": "quantum_curiosities",
    "shippedBy": "Quantum Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Split Reality",
        "rules": "When the coin is observed, it splits into two identical copies that exist simultaneously. These duplicates can interact with their surroundings independently for a duration of 1 minute per use. The observer must make a DC 20 Intelligence (Investigation) check to discern the true nature and effects of each duplicate."
      },
      {
        "title": "Event Duplication",
        "rules": "The coin can be used once per day to duplicate any event within its range. This means that an action, spell, or effect occurs twice in succession. The observer must declare the duplicated event before rolling for it. If a saving throw is required, the DC is 15."
      }
    ],
    "levelRequirementReason": "This coin requires no specific level to use but provides a powerful tool that can be exploited by even the most novice adventurers.",
    "vendorReason": "Quantum Curiosities specializes in rare and unique items, making this coin an ideal addition to their collection of wonders.",
    "shippingDetail": "The coin is packed with a special quantum shield that ensures its integrity during transit. It may take up to 3 days for delivery due to the precautions taken.",
    "usage": {
      "activation": "Standard Action",
      "duration": "1 minute per use or until the observer decides to end it",
      "endsWhen": "The observer declares it ends, or after one minute if not otherwise ended",
      "charges": "Unlimited uses"
    },
    "priceReason": "At a price of 1000 XP, this coin is balanced to provide a significant but not game-breaking advantage.",
    "priceOriginal": 45000000,
    "priceReviewedAt": "2026-07-23T16:54:49.822710+00:00",
    "aiReviewedAt": "2026-07-23T16:54:49.822710+00:00",
    "aiReviewVersion": 1
  },
  "quartz_charm": {
    "id": "quartz_charm",
    "name": "Quartz Charm",
    "description": "The Quartz Charm is a shimmering crystal pendant crafted in Monstro Town, its facets gleaming with protective energy that dances around your neck. This charm not only shields you from magical harm but also amplifies your physical attacks, making each strike resonate with the power of the earth itself. Known for its protective magic and fiery sparkle, it has been a cherished heirloom of the town's shamans, passed down through generations.",
    "category": "equipment",
    "price": 1000,
    "icon": "💎",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Spell Protection",
      "Forceful Strikes"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Crystal Case",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Spell Protection",
        "rules": "When you are subjected to a spell that deals damage, you take half as much damage. This effect does not stack with other forms of damage reduction."
      },
      {
        "title": "Forceful Strikes",
        "rules": "You deal an additional 1d6 force damage on each melee attack. This bonus damage persists for the duration of your turn and can be used in conjunction with any other weapon attacks you make."
      }
    ],
    "levelRequirementReason": "The charm’s protective magic is best suited for seasoned adventurers who have proven their worth.",
    "vendorReason": "The shamans of Monstro Town are known for their mastery of both the spiritual and material realms, making this charm a natural addition to their offerings.",
    "shippingDetail": "This delicate charm is carefully packed in a reinforced crystal case to ensure it reaches its destination unscathed.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous",
      "endsWhen": "The charm breaks or the wearer dies",
      "charges": "Unlimited"
    },
    "priceReason": "This charm is crafted with rare minerals from Monstro Town, making it a valuable and sought-after item among adventurers.",
    "priceOriginal": 320000,
    "priceReviewedAt": "2026-07-23T16:55:18.435129+00:00",
    "aiReviewedAt": "2026-07-23T16:55:18.435129+00:00",
    "aiReviewVersion": 1
  },
  "question_block_lamp": {
    "id": "question_block_lamp",
    "name": "Question Block Lamp",
    "description": "The Question Block Lamp, a glowing ? block that illuminates its surroundings, casts a warm light that brightens any room it graces. When activated, it reveals hidden secrets—whether they be secret doors or lost treasures—and attracts the attention of curious creatures, like Koopas, who are drawn to its enigmatic glow. Turning on the lamp also has a 1% chance to dispense a small coin, perfect for those unexpected finds.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💡",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Luminous Light",
      "Attracts Curiosity"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Toad Mail Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Luminous Light",
        "rules": "This magical lamp illuminates an area of bright light (20 feet radius) and dim light (additional 20 feet). It has a 1% chance to dispense a coin when activated. The effect is instantaneous, and there are no restrictions on its use."
      },
      {
        "title": "Attracts Curiosity",
        "rules": "The lamp attracts creatures with an Intelligence of 3 or higher within 50 feet who have the curiosity trait. These creatures will approach the lamp for a short time, making it useful for exploring hidden areas or drawing attention to secrets."
      }
    ],
    "levelRequirementReason": "The Question Block Lamp requires a 1st-level character due to its magical properties and the risk of attracting curious creatures.",
    "vendorReason": "Toad Town Market is known for selling unique and magical items, making it fitting that they carry the whimsical and mysterious Question Block Lamp.",
    "shippingDetail": "The Toad Mail Service delivers the lamp in a specially designed box to ensure its safe arrival, which may add one day to the delivery time.",
    "usage": {
      "activation": "A bonus action is required to activate the lamp.",
      "duration": "Instantaneous effect; it illuminates until turned off or dispensed of its magical energy.",
      "endsWhen": "The lamp's magical light fades when its coin-dispensing ability has been used once per day, or when it runs out of stored magic.",
      "charges": "1 charge per day"
    },
    "priceReason": "The Question Block Lamp is priced at 1000 XP due to its unique magical properties and daily use limit.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-23T16:56:05.582059+00:00",
    "aiReviewedAt": "2026-07-23T16:56:05.582059+00:00",
    "aiReviewVersion": 1
  },
  "question_block_replica": {
    "id": "question_block_replica",
    "name": "Question Block Replica",
    "description": "This battered and rusted Question Block Replica is no ordinary toy. Its surface bears Mario's familiar red-and-blue stripes, but it exudes a sinister charm that makes nearby enemies twitch with unease. When struck from below, it emits a menacing 'boing,' alerting foes of your presence and potentially drawing their wrath. The block might yield coins for you or unleash fiery chaos; the outcome is unpredictable, as is Mario's jealous outburst if he catches sight of it.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🟥",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Strike with Might",
      "Cursed Coin Drop"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Suspiciously Floating Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Strike with Might",
        "rules": "Activate on a bonus action by striking the block from below. Roll a d6: On a result of 1-2, you gain 50 coins; on 3, an enemy within 5 feet must succeed on a DC 14 Dexterity saving throw or fall prone; on 4, you and allies within 10 feet gain temporary hit points equal to your level for one minute (reverting after the duration ends); on 5, you summon five Buzzy Beetles that attack nearby enemies; on 6, a Warp Pipe appears beneath you."
      },
      {
        "title": "Cursed Coin Drop",
        "rules": "If the block yields coins, there's a 10% chance (roll separately) that instead of coins, an enemy within 20 feet gains temporary hit points equal to your level, and you must succeed on a DC 14 Wisdom saving throw or be cursed with a similar effect for one hour."
      }
    ],
    "levelRequirementReason": "Beginning players can experiment safely without overpowered effects.",
    "vendorReason": "Wario's personal taste in collectibles includes this twisted relic of his past.",
    "shippingDetail": "Delivered by a box that seems to know when you're not looking.",
    "usage": {
      "activation": "Bonus action: strike the block from below",
      "duration": "Instantaneous, with effects lasting as noted",
      "endsWhen": "Used up or expended; charges replenish daily at dawn",
      "charges": "5 uses"
    },
    "priceReason": "Balanced price reflects the item's unpredictable nature and unique effects.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-23T16:55:13.766780+00:00",
    "aiReviewedAt": "2026-07-23T16:55:13.766780+00:00",
    "aiReviewVersion": 1
  },
  "rakasha_clans_tiger_claw_carver": {
    "id": "rakasha_clans_tiger_claw_carver",
    "name": "Rakasha Clans Tiger Claw Carver",
    "description": "The Rakasha Clans Tiger Claw Carver is a precision tool forged by the skilled Tiger Carvers of the jungle. Its sleek, curving claws are crafted from a rare, crystalline material that glows faintly under moonlight. This carver not only carves with unmatched precision but also grants its wielder an advantage on checks involving claw or cutting tools. The carver's secure grip ensures it never slips, even in the most challenging of tasks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧀",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Precision Carve",
      "Secure Grip"
    ],
    "vendor": "rakasha_clans_jungle",
    "shippedBy": "Claw Cut Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Precision Carve",
        "rules": "When you use this tool to carve or shape curds, you gain advantage on the check. This effect lasts for one day after each use."
      },
      {
        "title": "Secure Grip",
        "rules": "While holding and using this carver, your grip is secure, granting you a +1 bonus to Strength (Athletics) checks related to handling or moving heavy objects. This benefit persists as long as you hold the carver."
      }
    ],
    "levelRequirementReason": "This tool requires no specific level; it aids beginners and veterans alike.",
    "vendorReason": "The Rakasha Clans are known for their skill in crafting such precise tools, especially those related to jungle life and curds.",
    "shippingDetail": "Shipped via the swift Claw Cut Couriers who deliver it within a day of purchase.",
    "usage": {
      "activation": "Instantaneous action when using for carving or handling heavy objects.",
      "duration": "Until the start of your next turn after each use, and until the end of your next day if used on curds.",
      "endsWhen": "Once per day; this effect ends upon completing a long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to reflect its unique crafting and the precision it provides, making it accessible yet valuable.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T16:55:15.286722+00:00",
    "aiReviewedAt": "2026-07-23T16:55:15.286722+00:00",
    "aiReviewVersion": 1
  },
  "rakasha_clans_tiger_claw_gauntlet_premium": {
    "id": "rakasha_clans_tiger_claw_gauntlet_premium",
    "name": "Rakasha Clans Tiger Claw Gauntlet (Premium)",
    "description": "This gauntlet is a sleek, sinuous creation forged from the bones of tigers and adorned with their claws. It hums softly when worn, exuding a purring resonance that echoes the power of its feline creators. The Rakasha Clans' Tigers' Claw Gauntlet enhances the wearer's grip in treacherous terrains, providing a +2 bonus to Athletics checks for climbing. When engaged in combat, it transforms into a lethal weapon capable of delivering a 1d6 slashing damage strike and granting an advantage on grapple checks.",
    "price": 1000,
    "icon": "🐅",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Climb Boost (Passive)",
      "Feline Grasp"
    ],
    "vendor": "rakasha_clans_jungle",
    "shippedBy": "Tiger Courier Service",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Climb Boost (Passive)",
        "rules": "The gauntlet provides a +2 bonus to Athletics checks for climbing. This effect is always active while the gauntlet is worn."
      },
      {
        "title": "Feline Grasp",
        "rules": "Activates as an action, this gauntlet transforms into a clawed weapon capable of dealing 1d6 slashing damage and granting advantage on grapple checks until the end of your next turn. A creature can make one grapple check against you during this time."
      }
    ],
    "levelRequirementReason": "The gauntlet requires a minimum character level of 3 to wield its feline power and control its purring mechanisms.",
    "vendorReason": "Rakasha Clans, masters of the jungle, are renowned for their crafting prowess, especially in creating weapons imbued with natural magic.",
    "shippingDetail": "Ships within 3 days via the Tiger Courier Service, known for its swift and safe delivery through jungle paths.",
    "usage": {
      "activation": "Activates as a bonus action when transformed into a clawed weapon.",
      "duration": "Instantaneous transformation to gauntleted form; lasts until the end of your next turn in clawed form.",
      "endsWhen": "The effect ends if you lose your grip on the weapon or take damage.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP, this gauntlet offers a potent combination of climbing assistance and combat prowess without overbalancing the game.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-23T16:56:01.851030+00:00",
    "aiReviewedAt": "2026-07-23T16:56:01.851030+00:00",
    "aiReviewVersion": 1
  },
  "rakasha_clans_tiger_milk_curd_recipe": {
    "id": "rakasha_clans_tiger_milk_curd_recipe",
    "name": "Recipe: Rakasha Clans Tiger Milk Curd",
    "description": "This parchment recipe, inked with ancient runes and a ferocious image of a tiger roaring, details how to curdle milk from fierce tigers. Consuming this curd grants you the strength of your prey's claws for hours, enhancing your strikes with a predator's edge. The Tiger Milk Curd Recipe is a treasured item among the Rakasha Clans, passed down through generations by those who tame and respect the tigers of the jungle.",
    "price": 1000,
    "icon": "🧀",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Curdle Tiger Milk",
      "Claw Strength"
    ],
    "vendor": "rakasha_clans_jungle",
    "shippedBy": "Claw Curd Codex",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Curdle Tiger Milk",
        "rules": "Activate as a bonus action to curdle tiger milk overnight. Consuming the resulting curd in one sitting allows you to gain advantage on claw and unarmed strike attacks for 2 hours."
      },
      {
        "title": "Claw Strength",
        "rules": "While under the effect of Curdling Tiger Milk, your strength score is considered 4 higher when making such attacks. This enhancement does not stack with other strength bonuses."
      }
    ],
    "levelRequirementReason": "This recipe requires a basic understanding of taming and working with fierce animals.",
    "vendorReason": "The jungle's Rakasha Clans are the only ones who understand how to safely curdle tiger milk into this potent recipe.",
    "shippingDetail": "The shipment is delivered by trusted messengers who ensure the delivery of the fragile, overnight-curdled milk.",
    "usage": {
      "activation": "Bonus action to curdle; consume in one sitting for effects.",
      "duration": "2 hours after consumption",
      "endsWhen": "Effect ends when the duration expires or you ingest food that negates the bonus strength.",
      "charges": "Unlimited"
    },
    "priceReason": "The rarity and lore of this recipe, combined with its powerful effect, justify its moderate price.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T16:55:30.154229+00:00",
    "aiReviewedAt": "2026-07-23T16:55:30.154229+00:00",
    "aiReviewVersion": 1
  },
  "rakasha_clans_tiger_stripe_vest": {
    "id": "rakasha_clans_tiger_stripe_vest",
    "name": "Rakasha Clans Tiger Stripe Vest",
    "description": "The Rakasha Clans Tiger Stripe Vest exudes the raw power of jungle life, its fierce patterns woven from the very essence of the wild. Worn by those who seek to challenge beasts, this vest grants you a +1 bonus to Dexterity when navigating dense jungles and allows you to gain advantage on Intimidation checks against feral creatures. The stripes fade slightly after each day of wear but remain vibrant in moments of intense exertion.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧥",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Intimidation vs. beasts",
      "+1 Dexterity in jungles"
    ],
    "vendor": "rakasha_clans_jungle",
    "shippedBy": "Claw Cut Express Delivery",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Intimidating Presence",
        "rules": "When you use an action to make a Dexterity (Stealth) check or attempt an Intimidation check against a beast, you gain advantage on the roll. This effect lasts until the end of your next turn."
      },
      {
        "title": "Jungle Swift Footing",
        "rules": "While in a jungle environment, you have advantage on Dexterity (Acrobatics) checks and can use an action to increase your movement speed by 10 feet for up to 1 minute. This effect ends early if you leave the jungle or fall unconscious."
      }
    ],
    "levelRequirementReason": "The vest's intricate patterns and magical weave require a certain level of concentration and skill, suitable only for those who have proven their worth.",
    "vendorReason": "Rakasha Clans Jungle is renowned for crafting items that embody the spirit of the wild, making this vest a natural addition to their inventory.",
    "shippingDetail": "The vest is shipped via Claw Cut Express Delivery, ensuring swift arrival with minimal risk of damage due to its protective packaging designed to withstand jungle terrain.",
    "usage": {
      "activation": "Passive effect when worn in a jungle; requires no action for Intimidation advantage.",
      "duration": "Until the end of your next turn or until you leave the jungle, whichever comes first.",
      "endsWhen": "Leaving the jungle environment or becoming unconscious.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to reflect its rare craftsmanship and the mystical energy woven into its design.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-23T16:55:46.567484+00:00",
    "aiReviewedAt": "2026-07-23T16:55:46.567484+00:00",
    "aiReviewVersion": 1
  },
  "rakasha_tattoo": {
    "id": "rakasha_tattoo",
    "name": "Rakasha Spirit Tattoo",
    "description": "The Rakasha Spirit Tattoo is a sacred etching that seals a minor spirit to your flesh. Crafted from iridescent ink and ancient rakasha runes, this mark pulses faintly under the skin, granting you an ever-present companion. The tattoo's minor spirit familiar aids in survival tasks within the wilderness, providing invaluable guidance. It also allows telepathic communication with any nearby rakasha, a bond that can shift and move on its own at unpredictable intervals.",
    "category": "services",
    "price": 1000,
    "icon": "🐯",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Spirit Companion",
      "Telepathic Communication"
    ],
    "vendor": "rakasha_grounds",
    "shippedBy": "Ritual Performed In Person",
    "levelRequirement": 5,
    "requirement": "Requires active Rakasha Alliance",
    "effectDetails": [
      {
        "title": "Spirit Companion",
        "rules": "Passive effect. The tattoo grants you the services of a spirit companion that aids in Survival checks within the wilderness, providing advantage on such rolls."
      },
      {
        "title": "Telepathic Communication",
        "rules": "Instantaneous activation. You can communicate telepathically with any rakasha within 1 mile for up to 1 hour per day."
      }
    ],
    "levelRequirementReason": "Requires the player to have reached a level where they are capable of understanding and managing an additional creature.",
    "vendorReason": "Only those who have successfully formed a Rakasha Alliance can access this sacred tattoo from the rakasha grounds.",
    "shippingDetail": "The spirit is sealed during an in-person ceremony, ensuring its bond and alignment with you.",
    "usage": {
      "activation": "Instantaneous (requires a Rakasha Alliance)",
      "duration": "Permanent until the tattoo's seal is broken or the spirit is dismissed by a DM",
      "endsWhen": "The spirit companion's services end if the alliance is terminated, or when the bond is intentionally severed.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP as it provides a minor but long-lasting benefit and requires an active Rakasha Alliance.",
    "priceOriginal": 200000,
    "priceReviewedAt": "2026-07-23T16:55:43.059308+00:00",
    "aiReviewedAt": "2026-07-23T16:55:43.059308+00:00",
    "aiReviewVersion": 1
  },
  "rakshasa_deception_ward": {
    "id": "rakshasa_deception_ward",
    "name": "Rakshasa Deception Ward",
    "description": "The Rakshasa Deception Ward is a tiger-skin talisman imbued with the essence of ancient Rakshasa hunters. Crafted from the pelts of tigers that have faced these shapechangers, it grants its bearer the ability to pierce through illusions and see the true form of shapeshifters. The ward’s fangs are said to hold the very power of the hunt, ensuring that only those who truly understand the art of deception can wield it.",
    "price": 1000,
    "icon": "🐅",
    "stock": 8,
    "rarity": "epic",
    "effects": [
      "Pierce Illusions",
      "True Sight"
    ],
    "vendor": "illusion_breaker",
    "shippedBy": "True Seeing",
    "levelRequirement": 13,
    "effectDetails": [
      {
        "title": "Pierce Illusions",
        "rules": "The Rakshasa Deception Ward grants the wearer immunity to all forms of illusion and polymorph effects. This ability is active for a duration of 90 days from the time it is activated."
      },
      {
        "title": "True Sight",
        "rules": "For as long as the ward protects its bearer, they gain the benefits of the True Seeing spell (without expending a spell slot). The effect ends if the wearer is exposed to darkness or casts an illusion spell."
      }
    ],
    "levelRequirementReason": "Only those with considerable experience in battling shapechangers can properly harness and wield this powerful talisman.",
    "vendorReason": "The Illusion Breaker is a renowned expert in dispelling illusions, making them the trusted source for such potent protective items.",
    "shippingDetail": "Delivered by True Seeing to ensure the ward's activation at the exact moment it arrives.",
    "usage": {
      "activation": "Object Interaction (requires a bonus action)",
      "duration": "90 days or until exposed to darkness or illusion spells cast by the wearer",
      "endsWhen": "Exposure to darkness or casting an illusion spell by the wearer",
      "charges": "Unlimited, recharged upon activation"
    },
    "priceReason": "The ward's price reflects its rarity and the complexity of its crafting, as it requires a deep understanding of Rakshasa lore and the materials used.",
    "priceOriginal": 275000,
    "priceReviewedAt": "2026-07-23T16:55:57.643289+00:00",
    "aiReviewedAt": "2026-07-23T16:55:57.643289+00:00",
    "aiReviewVersion": 1
  },
  "ranger_union_beast_call_horn": {
    "id": "ranger_union_beast_call_horn",
    "name": "Ranger Union Beast Call Horn",
    "description": "The Ranger Union Beast Call Horn is a weathered brass instrument with intricate carvings depicting various animal totems. Crafted by skilled artisans in the heart of the ranger union, this horn can soothe even the most wild beasts and command their loyalty for an hour. Its call resonates through the forest, drawing forth 2d4 creatures of CR 1/4 or lower, such as wolves or giant badgers, to serve you faithfully during a short rest.",
    "category": "equipment",
    "price": 1000,
    "icon": "📯",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Beast Call",
      "Soothing Presence"
    ],
    "vendor": "ranger_union",
    "shippedBy": "Ranger Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Beast Call",
        "rules": "Activate on your action. Summons 2d4 beasts (CR 1/4 or lower) to serve you for the duration of a short rest. These creatures will not attack you, but may engage others as you direct."
      },
      {
        "title": "Soothing Presence",
        "rules": "The horn emits a soothing sound that affects all creatures within 30 feet who are hostile or indifferent towards you. These creatures have advantage on saving throws against fear effects and cannot be charmed for the duration of your short rest."
      }
    ],
    "levelRequirementReason": "The horn is crafted to assist even the most novice ranger, providing essential support early in their journey.",
    "vendorReason": "Crafted and sold by the Ranger Union to help protect its members from the wilds.",
    "shippingDetail": "Ships within a week of order, delivered directly to the ranger's camp.",
    "usage": {
      "activation": "Activate on your action.",
      "duration": "Instantaneous summoning, lasts until the end of your next short rest.",
      "endsWhen": "The summoned creatures return to their natural environment or are dismissed by you.",
      "charges": "Unlimited uses, recharges after a long rest."
    },
    "priceReason": "Balanced for a novice ranger's needs, this horn provides significant utility without being overpowered.",
    "priceOriginal": 27000,
    "priceReviewedAt": "2026-07-23T16:56:00.831855+00:00",
    "aiReviewedAt": "2026-07-23T16:56:00.831855+00:00",
    "aiReviewVersion": 1
  },
  "ranger_union_favored_terrain_rental": {
    "id": "ranger_union_favored_terrain_rental",
    "name": "Ranger Union Favored Terrain Rental",
    "description": "The Ranger Union Favored Terrain Rental grants you a week's immersion in another ranger’s cherished terrain. You instantly feel at home, whether it be dense forest or treacherous swamp, as your senses align with its natural rhythms. The vendor's keen eye ensures only authentic materials are used, and the rental comes with a complimentary guide who can offer tips on navigating the area. You may even pick up some local flora-scented gear in the process.",
    "category": "services",
    "price": 1000,
    "icon": "🌲",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Terrain Mastery",
      "Environmental Adaptation"
    ],
    "vendor": "ranger_union",
    "shippedBy": "Trailblazer",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Terrain Mastery",
        "rules": "For a duration of 7 days, you gain one favored terrain type. During this time, you have advantage on Wisdom (Survival) checks related to your chosen terrain. This effect is instantaneous upon rental and ends after the specified period."
      },
      {
        "title": "Environmental Adaptation",
        "rules": "You temporarily adapt your scent to that of the selected terrain—pine needles for forest or swamp gas for marshes. This adaptation lasts as long as you are within the chosen terrain type, but it wears off if you leave the area for more than 8 hours."
      }
    ],
    "levelRequirementReason": "This rental is accessible to all adventurers who might benefit from a taste of another ranger's expertise.",
    "vendorReason": "The Ranger Union ensures authenticity and safety for their patrons, offering this unique service.",
    "shippingDetail": "Delivered by the Trailblazer, with a guide included in the package to ensure a smooth transition into your new surroundings.",
    "usage": {
      "activation": "Instantaneous upon rental",
      "duration": "7 days or until you leave the chosen terrain for more than 8 hours",
      "endsWhen": "You leave the terrain for over 8 hours or at the end of the 7-day period",
      "charges": "Unlimited uses per day, but only one terrain type can be rented per day"
    },
    "priceReason": "This price reflects the rarity and authenticity provided by the Ranger Union's service, ensuring a unique experience without breaking the bank.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-23T16:56:16.904326+00:00",
    "aiReviewedAt": "2026-07-23T16:56:16.904326+00:00",
    "aiReviewVersion": 1
  },
  "ranger_union_pokemon_type_matchup_advice": {
    "id": "ranger_union_pokemon_type_matchup_advice",
    "name": "Ranger Union Pokémon Type Matchup Advice",
    "description": "The Ranger Union Pokémon Type Matchup Advice is a compact, weathered booklet bound in worn leather. Its pages are filled with diagrams and notes on how to exploit various creature weaknesses through type advantages. Rangers swear by its wisdom when facing the wilds, though locals often find themselves at a loss as it speaks of 'super effective' moves and 'weaknesses.' This advice is crafted by the Ranger Union Pokémon Dept., known for its deep knowledge of both nature and Pokémon types.",
    "category": "services",
    "price": 1000,
    "icon": "❓",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Advantage on Nature checks about creature weaknesses",
      "Gain temporary blind disadvantage on Stealth checks when shouting 'It's super effective!'"
    ],
    "vendor": "ranger_union",
    "shippedBy": "Pokedex Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Nature Check Advantage",
        "rules": "You gain advantage on any Nature check to exploit a creature’s type weakness. This effect lasts until the end of your next turn."
      },
      {
        "title": "Stealth Penalty",
        "rules": "When you shout 'It's super effective!' after hitting a target with an attack, you gain disadvantage on your next Stealth check for 1 minute. This effect can be triggered once per short or long rest."
      }
    ],
    "levelRequirementReason": "This advice is accessible to all adventurers, as it helps even the newest rangers understand creature weaknesses.",
    "vendorReason": "The Ranger Union Pokémon Dept. is renowned for its expertise in nature and Pokémon types, making this booklet a valuable resource.",
    "shippingDetail": "Shipped via Pokedex Delivery, known for fast courier services within the region.",
    "usage": {
      "activation": "Instantaneous (no action required)",
      "duration": "Until the end of your next turn",
      "endsWhen": "The effect ends at the start of your next turn.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects the strategic advantage and tactical insights provided by this booklet.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T16:56:32.206403+00:00",
    "aiReviewedAt": "2026-07-23T16:56:32.206403+00:00",
    "aiReviewVersion": 1
  },
  "ranger_union_wild_berry_preserve_recipe": {
    "id": "ranger_union_wild_berry_preserve_recipe",
    "name": "Recipe: Ranger Union Wild Berry Preserve",
    "description": "The Recipe: Ranger Union Wild Berry Preserve is a time-honored method taught by the Union Foragers. This recipe turns wild berries into a potent preserve that not only heals but also provides a sweet burst of flavor and tracking advantage on Survival checks. The process is straightforward yet labor-intensive, requiring 30 minutes to boil and spread over fresh bread, delivering a tasty and restorative treat for weary adventurers.",
    "price": 1000,
    "icon": "🍓",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Healing Preserve",
      "Survival Advantage"
    ],
    "vendor": "ranger_union_lodge",
    "shippedBy": "Berry Preserve Brief",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Preserve",
        "rules": "When the preserve is consumed, it heals 1d6 hit points to the imbiber and provides advantage on Survival checks for tracking. This effect lasts until the start of your next turn."
      },
      {
        "title": "Survival Advantage",
        "rules": "For the duration of one hour after consuming the preserve, you gain advantage on Survival checks related to tracking. This effect is cumulative with other sources of advantage but not with itself."
      }
    ],
    "levelRequirementReason": "All rangers and adventuring parties benefit from this basic yet effective survival tool.",
    "vendorReason": "The Ranger Union Lodge is the birthplace of this recipe, passed down through generations of foragers.",
    "shippingDetail": "Delivered by a swift Berry Preserve Brief, ensuring freshness and flavor in every jar.",
    "usage": {
      "activation": "Consume the preserve during a short rest or meal break.",
      "duration": "One hour per serving.",
      "endsWhen": "After one hour of consumption.",
      "charges": "Unlimited; can be prepared multiple times."
    },
    "priceReason": "This recipe is crafted with care and precision, making it a valuable yet accessible resource for all rangers and their parties.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T16:56:20.167125+00:00",
    "aiReviewedAt": "2026-07-23T16:56:20.167125+00:00",
    "aiReviewVersion": 1
  },
  "ranger_union_wild_herb_dryer": {
    "id": "ranger_union_wild_herb_dryer",
    "name": "Ranger Union Wild Herb Dryer",
    "description": "The Ranger Union Wild Herb Dryer is a sturdy wooden rack with intricate carvings of local flora and fauna, crafted by the skilled artisans at the Ranger Union Lodge. This versatile device not only dries wild berries into sweet preserves but also emits a subtle scent that attracts beneficial insects, enhancing the drying process. The camo design allows it to blend seamlessly into the forest, offering both practical utility and a touch of nature's artistry.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍓",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Wild Camouflage",
      "Insect Attraction"
    ],
    "vendor": "ranger_union_lodge",
    "shippedBy": "Herb Hang Haul",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wild Camouflage",
        "rules": "The rack provides advantage on Dexterity (Stealth) checks made to hide in natural surroundings, as its design perfectly camouflages it."
      },
      {
        "title": "Insect Attraction",
        "rules": "For 1 hour after activation, the Ranger Union Wild Herb Dryer attracts beneficial insects that aid in faster and more efficient drying of wild berries. Any creature within 5 feet of the rack must succeed on a DC 12 Wisdom saving throw or be distracted by the buzzing insects for the duration."
      }
    ],
    "levelRequirementReason": "A basic understanding of nature is required to operate and appreciate the benefits of this item.",
    "vendorReason": "The Ranger Union Lodge specializes in crafting items that enhance survival skills and respect for the natural world.",
    "shippingDetail": "Ships via Herb Hang Haul, known for their reliable delivery of botanical goods through dense forest terrain.",
    "usage": {
      "activation": "Object Interaction to set up or activate.",
      "duration": "1 hour per use; can be reactivated after a short rest.",
      "endsWhen": "The duration ends when the user takes a long rest or the item is destroyed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced to reflect its utility in survival and nature-related tasks without overshadowing other items of similar rarity.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T16:56:38.532184+00:00",
    "aiReviewedAt": "2026-07-23T16:56:38.532184+00:00",
    "aiReviewVersion": 1
  },
  "ranger_union_wilderness_guide_premium": {
    "id": "ranger_union_wilderness_guide_premium",
    "name": "Ranger Union Wilderness Guide (Premium)",
    "description": "The Ranger Union Wilderness Guide (Premium) is a sleek leather-bound tome adorned with compass needles and emblazoned with the Union's sigil. It whispers ancient secrets of the wild, offering unparalleled tracking aid to those who seek it. With this guide, you can find hidden paths that even seasoned rangers may miss, and it grants you advantage on Survival checks for a week. The tome itself seems to breathe with life, occasionally chirping like a squirrel as it offers unexpected advice.",
    "price": 1000,
    "icon": "🗺️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Tracking",
      "Discover Hidden Paths"
    ],
    "vendor": "ranger_union_lodge",
    "shippedBy": "Trail Map Courier Service",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Advantage on Tracking",
        "rules": "Activates by opening the guide. Lasts for one week, granting advantage on all Survival checks related to tracking and navigation."
      },
      {
        "title": "Discover Hidden Paths",
        "rules": "Activate as a bonus action. The guide reveals secret ways that are not marked on any map or chart. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This premium edition of the Wilderness Guide requires a minimum character level to unlock its full potential.",
    "vendorReason": "The Ranger Union Lodge is known for crafting and distributing essential tools for those who venture into the wilderness.",
    "shippingDetail": "Delivered by trusted Trail Map Couriers, ensuring swift delivery even in remote areas.",
    "usage": {
      "activation": "Bonus action to reveal hidden paths; opens automatically during tracking checks.",
      "duration": "One week for Advantage on Tracking; Hidden Paths effect lasts until the start of your next long rest.",
      "endsWhen": "At the end of a long rest or when destroyed.",
      "charges": "Unlimited, but only one use per day."
    },
    "priceReason": "The premium edition's advanced features and craftsmanship justify its lower price point compared to its rarity.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-23T16:56:32.202314+00:00",
    "aiReviewedAt": "2026-07-23T16:56:32.202314+00:00",
    "aiReviewVersion": 1
  },
  "ranger_union_woodland_cloak": {
    "id": "ranger_union_woodland_cloak",
    "name": "Ranger Union Woodland Cloak",
    "description": "The Ranger Union Woodland Cloak is a cloak woven from moss and leaves that perfectly camouflages its wearer in any forest environment. Its natural growth of moss ensures it remains undetected, but beware—this same moss can drive you mad with itching if left too long on your skin. This relic of the Union Rangers grants advantage on Survival checks within woodlands and allows you to blend seamlessly into your surroundings.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧥",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Survival",
      "Camouflage"
    ],
    "vendor": "ranger_union_lodge",
    "shippedBy": "Leaf Layer Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Advantage on Survival",
        "rules": "You gain a +2 bonus to Survival checks when in a woodland environment. This effect is passive and does not require an action."
      },
      {
        "title": "Camouflage",
        "rules": "For 1 hour, the cloak allows you to blend into your surroundings as if you were invisible (but not undetectable). If you remain stationary for at least 10 minutes, you can attempt a DC 15 Stealth check. On a success, you are considered hidden from creatures that do not actively search for you."
      }
    ],
    "levelRequirementReason": "The cloak's complex weave and magical properties require a high level of skill to properly utilize its full potential.",
    "vendorReason": "The lodge is the official supplier of Union Ranger equipment, including this iconic woodland attire.",
    "shippingDetail": "Ships via Leaf Layer Express, typically arriving within a week. The cloak may arrive with natural moss already growing on it, adding to its realism but requiring careful handling.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "1 hour",
      "endsWhen": "The duration ends after 1 hour or if you stop being stationary for at least 10 minutes while cloaked.",
      "charges": "Unlimited"
    },
    "priceReason": "This rare, magical item is crafted by skilled Union Rangers and requires precise enchantment, justifying its moderate XP cost.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-23T16:56:37.305019+00:00",
    "aiReviewedAt": "2026-07-23T16:56:37.305019+00:00",
    "aiReviewVersion": 1
  },
  "ratchet_raiders_boom_box": {
    "id": "ratchet_raiders_boom_box",
    "name": "Ratchet Raiders Boom Box",
    "description": "The Ratchet Raiders Boom Box is a portable, rugged music machine crafted from durable steel and leather, emblazoned with the band's iconic logo. Its speaker grates hum with raw power, capable of drowning out the most potent magical silences within a 20-foot radius. When activated, it not only plays electrifying tunes but also grants advantage on Performance checks, making the user sound like they've been practicing for years.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎵",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Disrupts Magical Silence",
      "Advantage on Performance Checks"
    ],
    "vendor": "ratchet_raiders_cache",
    "shippedBy": "Padded Case",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disrupts Magical Silence",
        "rules": "When activated as a bonus action, the Boom Box plays music that disrupts any magical silence effect within a 20-foot radius. This effect lasts for 1 minute. The sound of the Boom Box is so powerful it can be heard through walls and even in areas where silence would normally hold."
      },
      {
        "title": "Advantage on Performance Checks",
        "rules": "Activating the Boom Box grants advantage on all Performance checks made within its radius for 1 hour. This includes singing, dancing, or any other performance-related skill."
      }
    ],
    "levelRequirementReason": "The Ratchet Raiders Boom Box is designed to be accessible even to lower-level characters who might need a confidence boost on the battlefield.",
    "vendorReason": "Ratchet Raiders Cache stocks items made by their own band, ensuring that the quality and authenticity are unmatched.",
    "shippingDetail": "Delivered via trusted courier within 3 days of purchase.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute (Disrupts Magical Silence) / 1 hour (Advantage on Performance Checks)",
      "endsWhen": "Ends when the effect duration expires or it is turned off by the user.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Boom Box's price reflects its quality craftsmanship and unique magical properties, making it a valuable but not overpriced addition to any adventurer's gear.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T16:57:04.405226+00:00",
    "aiReviewedAt": "2026-07-23T16:57:04.405226+00:00",
    "aiReviewVersion": 1
  },
  "ratchet_raiders_oil_dispenser": {
    "id": "ratchet_raiders_oil_dispenser",
    "name": "Ratchet Raiders Oil Dispenser",
    "description": "The Ratchet Raiders Oil Dispenser is a sleek, oil-soaked contraption with dual nozzles. It dispenses cooking oil with precision for your frying needs and machine oil to grease up mechanical devices. A quirky quirk makes it unpredictable: there's a chance you'll accidentally contaminate your food, leaving it laced with the smell of motor oil (poisoned condition). The Ratchet Raiders Oil Co., known for their no-nonsense approach to mechanics, crafted this handy device that has quickly become a favorite among chefs and engineers alike.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛢️",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Precision Frying",
      "Machine Grease"
    ],
    "vendor": "ratchet_raiders",
    "shippedBy": "Oil Can Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Precision Frying",
        "rules": "When you use the dispenser to apply cooking oil, you have advantage on checks involving frying. This effect lasts until you make your next meal check or until you finish a short rest."
      },
      {
        "title": "Machine Grease",
        "rules": "Using the dispenser to apply machine oil grants you advantage on Technology checks related to repairing machines. This effect is effective for 1 hour, but it ends if you fail any subsequent check or after 24 hours."
      }
    ],
    "levelRequirementReason": "This item's simple design and utility make it accessible to players of all levels.",
    "vendorReason": "Ratchet Raiders Oil Co. is renowned for their high-quality tools and supplies, making the Oil Dispenser a natural addition to their product line.",
    "shippingDetail": "Delivered via Oil Can Express, known for their reliable and speedy deliveries of oil-related goods.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Until the end of your next turn or until you finish a short rest (for cooking), lasts 1 hour (for machine grease)",
      "endsWhen": "After 24 hours, upon failure of a relevant check, or when the user finishes a short rest",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects its utility in both culinary and mechanical tasks without being overly powerful.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T16:56:50.859447+00:00",
    "aiReviewedAt": "2026-07-23T16:56:50.859447+00:00",
    "aiReviewVersion": 1
  },
  "ratchet_raiders_recipe_oil_slick_stew": {
    "id": "ratchet_raiders_recipe_oil_slick_stew",
    "name": "Recipe: Ratchet Raiders Oil Slick Stew",
    "description": "This concoction, a dark brown stew thick with motor oil, gives your joints a much-needed lubrication boost. It grants you advantage on Dexterity (Acrobatics) checks and allows you to slip out of restraints or grapple holds with ease for four hours. However, the slippery nature of the stew makes it difficult to keep your footing; any attempt to climb is met with disadvantage. The taste? Well, let’s just say it's best enjoyed when the stakes are low.",
    "price": 1000,
    "icon": "📜",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Dexterity (Acrobatics) checks",
      "Disadvantage on climbing checks"
    ],
    "vendor": "ratchet_raiders",
    "shippedBy": "Oil Can",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Lubricating Joints",
        "rules": "You gain advantage on Dexterity saving throws against grapple and restraint effects for a duration of four hours. This effect is triggered by consuming the stew."
      },
      {
        "title": "Slippery Climb",
        "rules": "For the duration, you have disadvantage on checks to climb. Consuming this stew makes your hands and feet unusually slick, hampering your grip."
      }
    ],
    "levelRequirementReason": "This recipe is simple enough for any adventurer to use, provided they are at least level 1.",
    "vendorReason": "The Ratchet Raiders are renowned for their survival skills and concoctions that make the most of unconventional ingredients found in the wasteland.",
    "shippingDetail": "Delivered by the Oil Can, known for its quick but quirky service through the treacherous wastelands.",
    "usage": {
      "activation": "Eating the stew once per long rest grants its effects.",
      "duration": "Four hours after consumption.",
      "endsWhen": "The effect ends when you finish a short or long rest, or if you consume another dose of this stew within that time.",
      "charges": "Unlimited; can be consumed multiple times during a long rest."
    },
    "priceReason": "The recipe’s price reflects the rarity and utility of the oil slick stew while keeping it accessible for adventurers of all levels.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-23T16:57:07.937799+00:00",
    "aiReviewedAt": "2026-07-23T16:57:07.937799+00:00",
    "aiReviewVersion": 1
  },
  "ratchet_raiders_scavenger_jacket": {
    "id": "ratchet_raiders_scavenger_jacket",
    "name": "Ratchet Raiders Scavenger Jacket",
    "description": "The Ratchet Raiders Scavenger Jacket is a rugged, weathered garment sewn from scavenged materials. Its padded lining and numerous pockets have been expertly pieced together by Raider Tailors to hold twice as much loot as a standard jacket. The creaking of the fabric with every step hints at the jacket's age and the countless adventures it has seen. This relic of the Raiders' past offers advantage on investigation checks for hidden compartments, making it indispensable for those who scavenge for lost treasures.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧥",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Extra Storage",
      "Advantage on Investigation"
    ],
    "vendor": "ratchet_raiders_scrapyard",
    "shippedBy": "Patchwork Parcel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Extra Storage",
        "rules": "The Scavenger Jacket allows you to carry up to an additional 20% more small items than a standard jacket. This effect is passive and does not require activation."
      },
      {
        "title": "Advantage on Investigation",
        "rules": "When you make an investigation check related to hidden compartments, you gain advantage if wearing this jacket. The duration of this effect is until the end of your next short or long rest."
      }
    ],
    "levelRequirementReason": "The jacket's scavenged materials and pieced-together design make it suitable for adventurers of all levels, not just those who have completed their first quests.",
    "vendorReason": "The Raiders' Scrapyard is known for its unique and functional gear, including this jacket that has been meticulously crafted by Raider Tailors.",
    "shippingDetail": "Delivered via Patchwork Parcel's fast courier service, the jacket arrives in pristine condition, ready for use.",
    "usage": {
      "activation": "Passive",
      "duration": "Until the end of your next short or long rest",
      "endsWhen": "At the end of your next short or long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The jacket's scavenged materials and unique construction justify a price that is slightly lower than its full potential, making it accessible to adventurers who need extra storage without breaking the bank.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-23T16:57:10.827377+00:00",
    "aiReviewedAt": "2026-07-23T16:57:10.827377+00:00",
    "aiReviewVersion": 1
  },
  "ratchet_raiders_scrap_armor": {
    "id": "ratchet_raiders_scrap_armor",
    "name": "Ratchet Raiders Scrap Armor",
    "description": "The Ratchet Raiders Scrap Armor is a jury-rigged ensemble of salvaged metal and repurposed parts, cobbled together by the resourceful bandits. Its segmented plates offer strange protection, flexing to distribute impact evenly across your frame. The armor's electrically charged core grants advantage on saving throws against lightning attacks, yet it also makes you an intimidating sight; non-raiders suffer disadvantage when trying to make social checks with you.",
    "price": 1000,
    "icon": "⚙️",
    "stock": 15,
    "rarity": "uncommon",
    "effects": [
      "Lightning Deflection",
      "Social Disincentive"
    ],
    "vendor": "ratchet_raiders_cache",
    "shippedBy": "Rusty Cart with a Wobbly Wheel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Lightning Deflection",
        "rules": "When you are targeted by a spell or effect that deals lightning damage, you gain advantage on the saving throw. This benefit lasts until the start of your next turn."
      },
      {
        "title": "Social Disincentive",
        "rules": "You have disadvantage on all Charisma (Persuasion) checks and Insight checks made to influence or interact with non-Ratchet Raiders. This effect persists for 1 minute, starting when you make the first such check."
      }
    ],
    "levelRequirementReason": "The armor's protection is effective against common threats faced by adventurers of lower levels.",
    "vendorReason": "The armor was designed and crafted by the Ratchet Raiders, making them the only ones who can sell it to their own members.",
    "shippingDetail": "Due to its cumbersome nature, this armor is delivered via a rusty cart that may take an extra day of travel time.",
    "usage": {
      "activation": "Passive effect active while wearing the armor.",
      "duration": "Until removed or until the start of your next turn (for Lightning Deflection).",
      "endsWhen": "The spell or effect ends, or you are no longer targeted by a lightning attack.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Reflects the unique craftsmanship and materials used in its construction.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T16:57:06.524271+00:00",
    "aiReviewedAt": "2026-07-23T16:57:06.524271+00:00",
    "aiReviewVersion": 1
  },
  "ratchet_raiders_scrap_cannon": {
    "id": "ratchet_raiders_scrap_cannon",
    "name": "Ratchet Raiders Scrap Cannon",
    "description": "The Ratchet Raiders Scrap Cannon is a jury-rigged weapon, crafted from salvaged parts and foundry scraps. Its barrel is a twisted lattice of metal rods fused together by heat and ingenuity. When fired, it unleashes a cone of jagged scrap that slices through the air with deadly precision, leaving a trail of debris in its wake. This makeshift cannon was designed by the Raiders to deal with close-range threats, making it an unpredictable but effective tool for their raids.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔩",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Scrap Barrage",
      "Impaling"
    ],
    "vendor": "ratchet_raiders",
    "shippedBy": "Scrap Heap Delivery",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Scrap Barrage",
        "rules": "When you activate the Scrap Cannon as a bonus action, it fires a cone of sharp scrap (15 feet radius) in front of you. All creatures in the area must make a Dexterity saving throw or take 4d6 piercing damage. On a critical hit, one target is Impaled, dealing an additional 1d6 bleed damage per round until they succeed on a DC 13 Medicine check."
      },
      {
        "title": "Impaling",
        "rules": "On a critical hit, a creature in the Scrap Cannon's area of effect becomes Impaled. They take an extra 1d6 piercing damage each round and must use their action to attempt a DC 13 Medicine check to remove the impale condition."
      }
    ],
    "levelRequirementReason": "It requires basic engineering skills to operate this improvised weapon effectively.",
    "vendorReason": "The Raiders are known for their resourcefulness and often sell surplus or modified gear from their raids.",
    "shippingDetail": "Ships via a small, rickety delivery cart that may cause delays in transit.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "Charges are expended or the weapon jams (requiring an action to clear)",
      "charges": "3 charges"
    },
    "priceReason": "The Scrap Cannon is crafted from salvaged materials, making it a rare find but not excessively valuable.",
    "priceOriginal": 38000,
    "priceReviewedAt": "2026-07-23T16:57:50.598941+00:00",
    "aiReviewedAt": "2026-07-23T16:57:50.598941+00:00",
    "aiReviewVersion": 1
  },
  "ratchet_raiders_scrap_forge_oven": {
    "id": "ratchet_raiders_scrap_forge_oven",
    "name": "Ratchet Raiders Scrap Forge Oven ",
    "description": "The Ratchet Raiders Scrap Forge Oven, a junk-built marvel of engineering, is forged from salvaged metal and repurposed parts. Its core heats with scrap fuel, infusing every pie with an earthy metallic flavor. The oven's durable frame withstands the heat without bending, but sparks occasionally, presenting a fire risk that demands caution (DC 10 Dexterity saving throw). A Raider Scavenger creation, this oven is a testament to ingenuity in the harshest conditions.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥧",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Heats with scrap fuel; +1 to tool (inventions) checks",
      "Durable from junk; recycles heat"
    ],
    "vendor": "ratchet_raiders_scrapyard",
    "shippedBy": "Rusty Roast Rig",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Metallic Flavor Infusion",
        "rules": "When used for cooking pies, the Ratchet Raiders Scrap Forge Oven infuses each pie with a metallic flavor, granting a +1 bonus to tool checks (inventions). This effect lasts until the pie is served or consumed."
      },
      {
        "title": "Durable Heat Recycling",
        "rules": "This oven's frame reclaims residual heat for future cooking cycles. It regenerates 1d6+2 heat points at the start of each day, allowing it to operate more efficiently over time."
      }
    ],
    "levelRequirementReason": "The Ratchet Raiders Scrap Forge Oven is accessible to lower-level adventurers as its design and operation are straightforward.",
    "vendorReason": "As scavengers of metal and ingenuity, the Raider Scavengers naturally value this oven for its practicality in their daily operations.",
    "shippingDetail": "Delivered with a custom metal container to protect against sparks during transit.",
    "usage": {
      "activation": "As a bonus action, activate the heat.",
      "duration": "Instantaneous cooking effect; lasts until pie is served or consumed.",
      "endsWhen": "Pie is served or consumed.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The balanced XP price reflects the item's durable construction and practical utility in crafting metallic pies.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T16:57:34.886774+00:00",
    "aiReviewedAt": "2026-07-23T16:57:34.886774+00:00",
    "aiReviewVersion": 1
  },
  "ratchet_raiders_scrap_metal_pie_recipe": {
    "id": "ratchet_raiders_scrap_metal_pie_recipe",
    "name": "Recipe: Ratchet Raiders Scrap Metal Pie ",
    "description": "This pie, a culinary creation of Ratchet Raiders, is crafted from salvaged metal scraps and a hearty filling of reimagined veggies. The pie’s crust crunches like old tin, while its interior mimics the metallic taste of discarded machinery. A bite reveals a surprising blend that somehow tastes fresh despite its origins—legend has it that only the Raiders can perfect this dish. Eating one grants temporary proficiency in tool use for repairs and crafting (2 hours) but beware; a poorly executed bite might chip a tooth, causing 1 point of non-lethal damage on a natural roll of 1.",
    "price": 1000,
    "icon": "🥧",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Tool Proficiency Boost",
      "Potential Tooth Damage"
    ],
    "vendor": "ratchet_raiders_scrapyard",
    "shippedBy": "Rusty Recipe Roll",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Tool Proficiency Boost",
        "rules": "When consumed, the pie grants temporary proficiency in tools related to repairs and crafting. This effect lasts for 2 hours but only applies during active use of such tools. There is no save required."
      },
      {
        "title": "Potential Tooth Damage",
        "rules": "There's a risk that consuming this pie could cause tooth damage, resulting in 1 point of non-lethal damage on a natural roll of 1 when eating it. This effect has no save or DC and can only happen once per person."
      }
    ],
    "levelRequirementReason": "Crafting with tool proficiency is a specialized skill often mastered by characters at least level 3.",
    "vendorReason": "Ratchet Raiders specialize in recycling and crafting from scrap, making this pie a natural addition to their offerings.",
    "shippingDetail": "This pie is shipped fresh from the Raiders' workshop; delivery time is typically two days.",
    "usage": {
      "activation": "Consuming the pie passively grants its effects.",
      "duration": "2 hours, or until used in a tool-related activity.",
      "endsWhen": "Eating the pie ends the effect. The damage from poor bites occurs immediately upon consumption.",
      "charges": "Unlimited; each pie is a single use."
    },
    "priceReason": "The pie's unique recipe and materials, sourced directly from Ratchet Raiders' scrapyard, justify its price. It combines culinary innovation with practical utility in a way that is both rare and valuable.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T16:57:38.222379+00:00",
    "aiReviewedAt": "2026-07-23T16:57:38.222379+00:00",
    "aiReviewVersion": 1
  },
  "ratchet_raiders_scrap_upcycle_premium": {
    "id": "ratchet_raiders_scrap_upcycle_premium",
    "name": "Ratchet Raiders Scrap Upcycle (Premium)",
    "description": "The Ratchet Raiders Scrap Upcycle (Premium) is a gleaming amalgamation of salvaged metal and circuitry, forged by Raider Mechanics from the very heart of their junkyards. This handy device can repair machinery with a single touch, restoring up to 1d10 hit points to any tool or machine within reach. With each use, it grants you advantage on Tinker checks for an hour, ensuring your creations are as sturdy as the scrap they're made from.",
    "price": 1000,
    "icon": "🔧",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Repair Gadget",
      "Advantage on Tinker Checks"
    ],
    "vendor": "ratchet_raiders_workshop",
    "shippedBy": "Junk Hauler",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Repair Gadget",
        "rules": "As an action, you can use this item to repair a damaged machine or tool within reach. The repaired object regains up to 1d10 hit points. There is a 5% chance per use that the gadget might backfire, dealing 1d4 damage to you."
      },
      {
        "title": "Advantage on Tinker Checks",
        "rules": "For one hour after using this item, you gain advantage on any Tinker check you make. This effect ends when it is no longer useful or when the item runs out of charges."
      }
    ],
    "levelRequirementReason": "This device requires a certain level to handle its complex mechanics and ensure it doesn't backfire during repair.",
    "vendorReason": "Ratchet Raiders are experts in repurposing scrap, making this item a staple of their workshop.",
    "shippingDetail": "Ships via Junk Hauler's reliable but unconventional routes, which can lead to delays and require the recipient to check for delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous repair; advantage lasts one hour",
      "endsWhen": "Advantage ends when no longer useful or item runs out of charges",
      "charges": "1 charge, recharged at dawn"
    },
    "priceReason": "This balanced price reflects the rare and useful nature of this tool in a world where scrap is precious.",
    "priceOriginal": 16000,
    "priceReviewedAt": "2026-07-24T23:27:17.137520+00:00",
    "aiReviewedAt": "2026-07-24T23:27:17.137520+00:00",
    "aiReviewVersion": 1
  },
  "ratchet_raiders_wrench_belt": {
    "id": "ratchet_raiders_wrench_belt",
    "name": "Ratchet Raiders Wrench Belt",
    "description": "The Ratchet Raiders Wrench Belt is a rugged leather belt embossed with the symbol of the engineers. It holds precisely ten tools, each clinking against its neighbors as you move. The belt's maker, Ratchet Raiders Engineers, ensures every tool slots perfectly into place, though its noisy friction makes stealthy maneuvers nearly impossible. Carrying this belt not only means never being without a vital tool but also feeling an internal compulsion to mend the broken, which can be overwhelming if ignored.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔧",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Toolbelt of Tenacity",
      "Noisy Compulsion"
    ],
    "vendor": "ratchet_raiders",
    "shippedBy": "Wrench Throw Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Toolbelt of Tenacity",
        "rules": "As a bonus action, you may retrieve any tool stored in the belt. You can hold up to ten tools at once without penalty."
      },
      {
        "title": "Noisy Compulsion",
        "rules": "You have disadvantage on Dexterity (Stealth) checks due to the constant clinking of your tools. Additionally, if you ignore a broken object that requires repair, you must make a DC 15 Constitution saving throw or feel an irresistible urge to fix it immediately."
      }
    ],
    "levelRequirementReason": "The belt's complexity and utility are suitable for those just beginning their journey.",
    "vendorReason": "Ratchet Raiders Engineers specialize in tools and equipment that enhance efficiency, making the Wrench Belt a natural addition to their line.",
    "shippingDetail": "The belt is couriered with Wrench Throw Express for swift delivery. The tools are packed securely to prevent any damage during transit.",
    "usage": {
      "activation": "Bonus action to retrieve a tool.",
      "duration": "Instantaneous, resets on use.",
      "endsWhen": "Exhausts when all ten slots are occupied; recharges after a long rest.",
      "charges": "10 uses"
    },
    "priceReason": "The belt provides significant utility without being overpowered, making it a fair value at 1000 XP.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-23T16:58:12.813338+00:00",
    "aiReviewedAt": "2026-07-23T16:58:12.813338+00:00",
    "aiReviewVersion": 1
  },
  "raventree_manor_broken_mirror": {
    "id": "raventree_manor_broken_mirror",
    "name": "Broken Mirror of the Manor’s Echoes",
    "description": "The Broken Mirror of Manor’s Echoes is a shattered glass relic from a forgotten age, its facets etched with arcane runes that whisper secrets of the manor's dark past. When held and focused on, it reveals hidden truths about the manor's origins, potentially triggering visions of its malevolent history. Those who glance into its depths must brace for the risk of temporary insanity if the truth is too disturbing.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Unveils Manor’s Secrets",
      "Enhances Deception Skills"
    ],
    "vendor": "raventree_manor",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Unveils Manor’s Secrets",
        "rules": "When held and focused on for at least 10 seconds, the mirror reveals hidden truths about the manor's origins. This effect is instantaneous but may trigger visions that last until the next short or long rest. There is a risk of temporary insanity (d6 damage to the next Deception check) if the revealed truth is too disturbing."
      },
      {
        "title": "Enhances Deception Skills",
        "rules": "If used to impersonate a character, it grants advantage on Deception checks for 1 hour. This effect can be activated once per day and lasts until used or until the next short rest."
      }
    ],
    "levelRequirementReason": "The mirror's arcane power is too potent to wield by lower-level characters, who might not fully understand its risks.",
    "vendorReason": "Raventree Manor keeps this relic in its collection of historical artifacts and magical curiosities for guests to explore the manor's enigmatic past.",
    "shippingDetail": "Ships via spirit courier, delivery can occur instantly but may require a brief meditation period upon arrival.",
    "usage": {
      "activation": "Focus and hold for at least 10 seconds",
      "duration": "Instantaneous reveal; visions last until next short or long rest",
      "endsWhen": "Next short or long rest, or if the user's sanity is compromised by disturbing truths",
      "charges": "One daily use"
    },
    "priceReason": "The mirror's rarity and mystical properties justify a fair value of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T16:58:05.288014+00:00",
    "aiReviewedAt": "2026-07-23T16:58:05.288014+00:00",
    "aiReviewVersion": 1
  },
  "raventree_manor_feywild_satchel": {
    "id": "raventree_manor_feywild_satchel",
    "name": "Feywild Satchel of Whispering Threads",
    "description": "The Feywild Satchel of Whispering Threads is a shadow-woven pack with threads that hum with ancient fey magic. Worn in the Feywild, it grants access to forgotten enchantments and whispers of the past. It subtly influences perception, making hidden magical glyphs more detectable by +10%, and enhances one's awareness with +2 to Perception checks within its enchanted zones. When shaken, there is a slight chance of triggering a fleeting memory or dream fragment, offering glimpses into the Feywild’s lore.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% Detect Hidden Magical Glyphs",
      "Perception Bonus in Feywild Zones"
    ],
    "vendor": "raventree_manor",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Enhanced Detection",
        "rules": "When worn in the Feywild, this satchel increases the user's chance to detect hidden magical glyphs by +10%. This effect is passive and does not require activation."
      },
      {
        "title": "Perception Boost",
        "rules": "Grants a +2 bonus to Perception checks within the Feywild. This effect lasts until the end of each long rest, with one use per day."
      }
    ],
    "levelRequirementReason": "Requires level 5 to harness the satchel's enchanted threads and navigate the Feywild’s mysteries.",
    "vendorReason": "Raventree Manor has exclusive access to Feywild artifacts, including this mystical satchel.",
    "shippingDetail": "Delivered by a Rakasha spirit courier who ensures the package arrives within one week of purchase.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the end of each long rest, with one use per day.",
      "endsWhen": "The effect ends at the start of your next short or long rest, and recharges after a long rest.",
      "charges": "One charge per day"
    },
    "priceReason": "Balanced price reflects the satchel's limited daily use and its exclusive access to Feywild knowledge.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-24T23:27:05.286534+00:00",
    "aiReviewedAt": "2026-07-24T23:27:05.286534+00:00",
    "aiReviewVersion": 1
  },
  "raventree_manor_item_name": {
    "id": "raventree_manor_item_name",
    "name": "Phantom Chime of the Shattered Spire",
    "description": "The Phantom Chime of the Shattered Spire, a bell forged from the collapse of a haunted tower, resonates with malevolent echoes that disorient foes and dispel illusions in its vicinity. When struck, it unleashes a discordant wave that leaves nearby enemies momentarily confused and off-balance, while clearing away any minor phantasms within a 30-foot radius. The chime’s haunting tones can also induce fear, forcing creatures to flee if the wielder so chooses.",
    "price": 1000,
    "icon": "📦",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Disorients enemies for 1 round on strike",
      "Clears illusions in 30ft radius"
    ],
    "vendor": "raventree_manor",
    "shippedBy": "Phantom Courier Service",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Sonic Disorientation",
        "rules": "When struck, the chime emits a wave of dissonant sound that affects all creatures within a 15-foot cone. These creatures must succeed on a DC 13 Constitution saving throw or be incapacitated for 1 round. The save DC is Wisdom-based."
      },
      {
        "title": "Illusion Clearance",
        "rules": "The chime's resonance can dispel minor illusions within a 30-foot radius, including visual and auditory phantasms. This effect does not affect major illusions or permanent magic effects."
      }
    ],
    "levelRequirementReason": "Requires at least 2nd level to wield effectively due to the chime's malevolent power.",
    "vendorReason": "Raventree Manor, a haven for arcane collectors and haunted artifacts, naturally sells this item.",
    "shippingDetail": "Delivered by spectral messengers; may arrive with a slight delay due to the chime's ethereal nature.",
    "usage": {
      "activation": "Standard action to strike the chime",
      "duration": "Instantaneous effect, ends when used",
      "endsWhen": "Exhausted after one use unless recharged through magical means",
      "charges": "Unlimited charges, but each use requires a short rest for recharging"
    },
    "priceReason": "Balanced price reflects the item's rare and powerful capabilities.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T16:59:22.488191+00:00",
    "aiReviewedAt": "2026-07-23T16:59:22.488191+00:00",
    "aiReviewVersion": 1
  },
  "raventree_manor_item_name_2": {
    "id": "raventree_manor_item_name_2",
    "name": "The Whispering Key of Lament",
    "description": "The Whispering Key of Lament is crafted from the bones of an ancient altar, its surface etched with runes that hum with forgotten lore. This key opens portals to the manor’s most haunted chambers, granting access to spectral memories. Each use risks triggering a memory surge: either a fleeting boost in combat prowess or a malevolent curse that saps one's strength. Careful users must balance their need for knowledge against the risk of becoming bound by the past.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Memory Boost",
      "Spectral Ally"
    ],
    "vendor": "raventree_manor",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Memory Boost",
        "rules": "Activates as an action, granting +20% damage and temporary hit points equal to 1d6 + Intelligence modifier for 5 rounds. The key must be used in a place of significance related to the manor’s history. A successful DC 14 Wisdom saving throw ends this effect early."
      },
      {
        "title": "Spectral Ally",
        "rules": "Activates as an action, summoning a spectral ghost ally that fights for you for 5 rounds. The ghost has AC 12, 10 HP, and deals 1d6 force damage on hit. If the key is used in a low-light environment, there's a 10% chance to trigger a haunting effect: -10% to all saving throws until dawn."
      }
    ],
    "levelRequirementReason": "Requires some experience to handle the key’s volatile nature without succumbing to its dangers.",
    "vendorReason": "The manor’s caretakers keep this key in their inventory, ensuring it only reaches those who can manage its power and peril.",
    "shippingDetail": "Delivered discreetly, with a courier who ensures the package is handled with the utmost care due to the item’s sensitivity.",
    "usage": {
      "activation": "Action or bonus action",
      "duration": "5 rounds or until used in low light",
      "endsWhen": "Key is used in low light or a successful saving throw ends it early",
      "charges": "Unlimited, but limited by the key’s condition and user's risk tolerance"
    },
    "priceReason": "Balanced price reflects its rare crafting materials and potential for both boon and bane.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T16:58:41.365463+00:00",
    "aiReviewedAt": "2026-07-23T16:58:41.365463+00:00",
    "aiReviewVersion": 1
  },
  "raventree_manor_item_name_3": {
    "id": "raventree_manor_item_name_3",
    "name": "Bloodvein Goblet of the Unseen Throne",
    "description": "The Bloodvein Goblet of the Unseen Throne is a macabre goblet crafted from the veins of a noble whose magic has withered. Sipping its essence grants fleeting power, but at the cost of one’s soul's purity. Each sip provides +10% movement speed for 20 feet and +50% spell damage for 6 seconds, but there is a 20% chance that it will curse the drinker with a minor haunting effect.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% movement speed",
      "+50% spell damage"
    ],
    "vendor": "raventree_manor",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Swift Step",
        "rules": "On activation, the drinker gains +10% movement speed for 20 feet. The effect lasts for 6 seconds and ends if the drinker takes any damage."
      },
      {
        "title": "Arcane Might",
        "rules": "On activation, the drinker’s spell damage is increased by +50%. This effect lasts for 6 seconds and ends if the drinker is hit by an attack or uses another effect similar to this one within a minute."
      }
    ],
    "levelRequirementReason": "Even novice adventurers can appreciate the immediate utility of enhanced speed and spellpower.",
    "vendorReason": "Raventree Manor is known for its dark artifacts, and this goblet is a testament to their expertise in crafting from forbidden materials.",
    "shippingDetail": "The goblet must be shipped discreetly due to its macabre nature, ensuring it arrives intact but with some delay.",
    "usage": {
      "activation": "Drink the entire contents of the goblet as a bonus action.",
      "duration": "Each effect lasts for 6 seconds.",
      "endsWhen": "The effects end if the drinker takes damage or uses another similar effect within a minute.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "Balanced for its unique and immediate utility in combat situations, this goblet is priced accordingly.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T16:58:28.990720+00:00",
    "aiReviewedAt": "2026-07-23T16:58:28.990720+00:00",
    "aiReviewVersion": 1
  },
  "raventree_manor_item_name_4": {
    "id": "raventree_manor_item_name_4",
    "name": "Veil of the Forgotten Floor",
    "description": "The Veil of the Forgotten Floor is a cloak spun from the very threads of collapsed staircases, shimmering with an ancient, spectral light. It whispers secrets of forgotten passages and hidden rooms to those who wear it, allowing them to phase through solid objects for brief moments. Wearing this relic draws the attention of the manor’s watchful spirits, who may offer cryptic warnings or guidance in exchange for its use.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Phasing Through Solid Objects",
      "Spectral Guidance"
    ],
    "vendor": "raventree_manor",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Phasing Through Solid Objects",
        "rules": "As a bonus action, the wearer can phase through solid objects for up to 3 seconds. This effect has no range or area and ends immediately if the wearer takes damage."
      },
      {
        "title": "Spectral Guidance",
        "rules": "Once per short rest, the cloak grants the wearer a vision of hidden paths or traps within the manor. This vision lasts for 1 minute and does not require an action to use."
      }
    ],
    "levelRequirementReason": "The Veil requires a certain level of familiarity with the manor’s layout and shadows to be used effectively.",
    "vendorReason": "Raven Tree Manor keeps this relic in its archives for those who seek to explore its hidden depths.",
    "shippingDetail": "The cloak arrives wrapped in a protective layer of shadow, ensuring it remains undisturbed during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 3 seconds per use",
      "endsWhen": "Destruction or taking damage",
      "charges": "Unlimited"
    },
    "priceReason": "The Veil’s rarity and the unique abilities it grants justify its moderate price in experience points.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T16:58:41.453713+00:00",
    "aiReviewedAt": "2026-07-23T16:58:41.453713+00:00",
    "aiReviewVersion": 1
  },
  "raventree_manor_planar_stabilizer": {
    "id": "raventree_manor_planar_stabilizer",
    "name": "Planar Stabilizer of the Fractured Manor",
    "description": "The Planar Stabilizer of the Fractured Manor is a brass and obsidian artifact, crafted from the remnants of Raventree Manor’s shattered dimensions. It anchors its wielder to a stable plane while navigating through the unstable multiverse, effectively preventing planar bleed for up to one minute after activation. Its touch radiates with a faint obsidian glow that quells the chaotic energies swirling in the air around you. Those who activate it report feeling a sense of calm even amidst the manor’s most violent tremors.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Prevents Planar Bleed",
      "Reduces Sanity Loss"
    ],
    "vendor": "raventree_manor",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Prevents Planar Bleed",
        "rules": "Activating this stabilizer prevents planar bleed for up to one minute. It must be used as a bonus action, and once per short rest."
      },
      {
        "title": "Reduces Sanity Loss",
        "rules": "This stabilizer reduces the chance of sanity loss by 30% during dimensional shifts. It provides this benefit passively while worn or held in one hand."
      }
    ],
    "levelRequirementReason": "The stabilizer's intricate craftsmanship requires a basic understanding of magic to activate, making it accessible to lower-level characters.",
    "vendorReason": "Raventree Manor is the source and keeper of many such artifacts, as they are needed to navigate the manor’s ever-changing dimensions safely.",
    "shippingDetail": "Ships via the Rakasha Spirit Walk, a reliable though mysterious courier network known for their speed through the multiverse.",
    "usage": {
      "activation": "Bonus action to activate and prevent planar bleed. Passively reduces chance of sanity loss while worn or held in one hand.",
      "duration": "One minute after activation",
      "endsWhen": "The effect ends when the user is no longer in a dimensionally unstable area, or if the stabilizer is removed from their possession.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Crafted by the skilled artisans of Raventree Manor, this stabilizer provides essential protection without being overpowered.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T16:59:14.505792+00:00",
    "aiReviewedAt": "2026-07-23T16:59:14.505792+00:00",
    "aiReviewVersion": 1
  },
  "raventree_manor_shadowfell_soul_torch": {
    "id": "raventree_manor_shadowfell_soul_torch",
    "name": "Shadowfell Soul Torch of the Unseen Flame",
    "description": "The Shadowfell Soul Torch of the Unseen Flame flickers ominously, casting a dim glow that reveals hidden passages in the Shadowfell. Its ethereal flame is fueled by the essence of forgotten souls, and when carried, it grants +1 to Stealth checks. However, if brought into the Physical realm, the torch unleashes a wave of minor psychic backlash—those nearby must make a DC 15 Wisdom saving throw or be stunned for one round.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals hidden paths in Shadowfell zones",
      "Stealth boost +1 while carrying"
    ],
    "vendor": "raventree_manor",
    "shippedBy": "Shadowweave Couriers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Hidden Path Revelation",
        "rules": "Activate as a bonus action within the Shadowfell. Reveals a previously unseen passage or route for one minute, requiring line of sight and no other creatures present."
      },
      {
        "title": "Psychic Backlash in Physical Realm",
        "rules": "Triggered when used outside the Shadowfell. Any creature within 10 feet must make a DC 15 Wisdom saving throw; on failure, they are stunned until the start of their next turn."
      }
    ],
    "levelRequirementReason": "Requires at least third-level spellcasting to properly utilize the torch's abilities in combat and exploration.",
    "vendorReason": "Raventree Manor has exclusive access to relics from the Shadowfell, making it a logical vendor for such an artifact.",
    "shippingDetail": "Delivered via shadowy portals that may cause disorientation during transit; charges are reduced by 50% if picked up in person.",
    "usage": {
      "activation": "Bonus action to reveal hidden paths, or on contact with the Physical realm for backlash.",
      "duration": "Instantaneous effect",
      "endsWhen": "Used outside the Shadowfell (for backlash) or upon successful saving throw.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a rare item, offering significant utility without overpowered effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T16:59:12.777594+00:00",
    "aiReviewedAt": "2026-07-23T16:59:12.777594+00:00",
    "aiReviewVersion": 1
  },
  "rawk_hawk_belt": {
    "id": "rawk_hawk_belt",
    "name": "Champ's Belt",
    "description": "Champ's Belt, a gleaming championship belt forged in the heart of the Glitz Pit, pulses with the raw energy of its victorious wearer. Its buckle glows with an electric blue light that crackles like lightning, and the leather is embossed with the signatures of legendary fighters. This belt bestows the strength to lift mountains and grants the agility to dance through a grapple, compelling you to pose in victory after every kill.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏆",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Grapple Mastery",
      "Pose Compulsion"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Glitz Pit Locker",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Grapple Mastery",
        "rules": "As an action, you can use your Strength score instead of the target's as part of a grapple check. This effect lasts until the end of your next turn."
      },
      {
        "title": "Pose Compulsion",
        "rules": "After every successful kill or victory, you are compelled to perform a dramatic pose. On a failed Wisdom saving throw (DC 15), you remain in the pose for 1 minute."
      }
    ],
    "levelRequirementReason": "The belt's power requires a seasoned fighter with experience in combat and the ability to channel its raw energy.",
    "vendorReason": "Rogue Port's Black Market specializes in exotic and legendary items, including the spoils of champions like those who have worn Champ's Belt.",
    "shippingDetail": "Shipped via the Glitz Pit Express, ensuring your belt arrives in pristine condition with a small ceremony celebrating its new owner.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of your next turn after activation or until you fail a grapple check.",
      "endsWhen": "On a failed grapple check or when you no longer have an opponent in range.",
      "charges": "Unlimited"
    },
    "priceReason": "The belt's legendary status and its unique effects make it a rare find, justifying the fair price of 1000 XP.",
    "priceOriginal": 380000,
    "priceReviewedAt": "2026-07-23T16:59:31.693683+00:00",
    "aiReviewedAt": "2026-07-23T16:59:31.693683+00:00",
    "aiReviewVersion": 1
  },
  "rayman_fist": {
    "id": "rayman_fist",
    "name": "Rayman Detached Fist",
    "description": "The Rayman Detached Fist is a floating, metallic hand crafted from Rayman's own flesh. Its origin lies in the depths of the Glade of Ages, where it was forged by the ancient druids to aid their champion. This fist can deliver powerful ranged punches, striking foes up to 50 feet away with crushing force. After each punch, it returns to you, ready for another strike. It also has a knack for grabbing small objects mid-air, making it a versatile tool in combat and exploration.",
    "category": "equipment",
    "price": 1000,
    "icon": "👊",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Ranged Punch",
      "Grabs Small Objects"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Swift Wind Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ranged Punch",
        "rules": "As an action, the Rayman Detached Fist can punch a target within range. The fist deals 1d10 bludgeoning damage and must make a successful hit roll to connect. After striking, the fist returns to its owner instantly."
      },
      {
        "title": "Grabs Small Objects",
        "rules": "The Rayman Detached Fist can grab small objects within reach or in mid-air as an action. Once grabbed, the object is held until the fist releases it voluntarily. This ability does not expend a charge."
      }
    ],
    "levelRequirementReason": "This item's power level is balanced for lower levels to aid in early combat scenarios.",
    "vendorReason": "The Gilded Gryphon has a special relationship with Rayman, allowing them to offer this unique artifact.",
    "shippingDetail": "Delivered within one day by the Swift Wind Courier service.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "Charges are expended or destroyed",
      "charges": "Unlimited, recharges after a short rest"
    },
    "priceReason": "This price reflects the rare and crafted nature of the item, offering a unique advantage without breaking balance.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T16:59:54.754296+00:00",
    "aiReviewedAt": "2026-07-23T16:59:54.754296+00:00",
    "aiReviewVersion": 1
  },
  "reality_anchor_hammer": {
    "id": "reality_anchor_hammer",
    "name": "Reality Anchor Hammer",
    "description": "The Reality Anchor Hammer is a massive, anvil-like weapon forged from the very essence of unyielding stasis. Crafted by The Carpenter of Reality to anchor the fabric of reality itself, this hammer can pin down specific rules and prevent them from being altered by magic or divine power. With each strike, it nails down immutable truths, ensuring that once set, they remain unchanged through any narrative or magical force.",
    "price": 1000,
    "icon": "🔨",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Nails down unchangeable truths",
      "Prevents rule alteration"
    ],
    "vendor": "reality_fixers",
    "shippedBy": "Fixed Point Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Nails Down Unchangeable Truths",
        "rules": "The hammer allows you to designate a specific rule, such as 'gravity always works this way,' preventing any magic or divine power from altering it. The effect is instantaneous and lasts until the end of your next long rest."
      },
      {
        "title": "Prevents Rule Alteration",
        "rules": "While the hammer's truth remains in place, no magical or divine force can change its stated rule. It has a saving throw DC of 18 against any attempt to alter it. Once used, you must finish a short rest before using it again."
      }
    ],
    "levelRequirementReason": "Even the simplest truths require a solid understanding of reality's fundamentals.",
    "vendorReason": "The Reality Fixers are known for their expertise in maintaining the integrity of the multiverse, and this hammer is a testament to their craft.",
    "shippingDetail": "Ships via Fixed Point Express; delivery can take several weeks due to its importance in maintaining reality's balance.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous, lasts until the end of your next long rest",
      "endsWhen": "The designated rule is altered or you finish a short rest after using it",
      "charges": "Unlimited"
    },
    "priceReason": "This hammer's value lies in its utility for maintaining the fabric of reality, making it worth a mere 1000 XP.",
    "priceOriginal": 95000000,
    "priceReviewedAt": "2026-07-23T16:59:41.959852+00:00",
    "aiReviewedAt": "2026-07-23T16:59:41.959852+00:00",
    "aiReviewVersion": 1
  },
  "reality_revision_consultation": {
    "id": "reality_revision_consultation",
    "name": "Reality Revision Consultation",
    "description": "The Reality Revision Consultation is a cosmic scroll imbued with the essence of a celestial entity. For this exorbitant price, you gain one wish-like option that can reshape reality, but beware: the universe will exact its cost in unforeseen consequences. The entity may also demand future services as payment for your consultation. This item's power comes at great risk, and only the most daring dare to use it.",
    "category": "services",
    "price": 500000,
    "icon": "🌌",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Wish-like Option",
      "Unforeseen Consequences"
    ],
    "vendor": "celestial_exchange",
    "shippedBy": "Cosmic Scroll",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Wish-like Option",
        "rules": "The DM provides one wish-like option with a clear cost. The effect is instantaneous, but the DM retains final say on the outcome and any potential consequences."
      },
      {
        "title": "Unforeseen Consequences",
        "rules": "Any use of this item may trigger unforeseen consequences that could alter the campaign's course. These effects are determined by the DM, who assesses a save DC of 18 for creatures to avoid their full impact."
      }
    ],
    "levelRequirementReason": "Only those with significant experience and power can afford both the price and the risk associated with reality-altering abilities.",
    "vendorReason": "The celestial entity that oversees this service ensures only the most worthy receive its counsel, thus maintaining the integrity of the cosmic balance.",
    "shippingDetail": "Ships via interdimensional courier with a guaranteed delivery within one week.",
    "usage": {
      "activation": "As an action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use; recharges in 7 days upon successful payment of the price in full.",
      "charges": "1/Day"
    },
    "priceReason": "The cost reflects not only the cosmic entity's time and expertise but also the potential for catastrophic consequences that could unravel the fabric of reality.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-23T16:59:47.392643+00:00",
    "aiReviewedAt": "2026-07-23T16:59:47.392643+00:00",
    "aiReviewVersion": 1
  },
  "reality_weaver_contract": {
    "id": "reality_weaver_contract",
    "name": "Reality Weaver Contract",
    "description": "The Reality Weaver Contract is a binding agreement with a cosmic entity, allowing you to reshape one square mile of terrain, weather, or environment for eternity. This contract requires immense mana and a significant sacrifice from your soul, making it a godly item that can attract unwanted attention from other beings. Once the reshaping begins, it takes a week to complete, during which time the area becomes unstable and dangerous.",
    "category": "premium",
    "price": 1000,
    "icon": "🌌",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Eternal Reshaping",
      "Soul Sacrifice"
    ],
    "vendor": "celestial_exchange",
    "shippedBy": "Binding Ritual",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Eternal Reshaping",
        "rules": "Activates on command by the user. Instantaneous effect reshapes one square mile of terrain, weather, or environment permanently. The area becomes unstable for 1 week after activation and can attract unwanted attention from other beings. This effect cannot be undone by normal means."
      },
      {
        "title": "Soul Sacrifice",
        "rules": "Requires a sacrifice from the user's soul, represented by a -2 penalty to all ability checks made by the user for 1 week after activation. The sacrifice is necessary for the reshaping to take place and is permanent until the effect ends."
      }
    ],
    "levelRequirementReason": "Requires a high level of power and control to negotiate such a contract with a cosmic entity.",
    "vendorReason": "The Celestial Exchange deals in powerful, otherworldly items that require significant negotiation and sacrifice.",
    "shippingDetail": "The contract is delivered through a Binding Ritual, which takes place over the course of one week. During this time, the area around the user becomes unstable and dangerous.",
    "usage": {
      "activation": "Command by the user to activate the reshaping effect.",
      "duration": "Instantaneous for the reshaping itself; the area remains unstable for 1 week.",
      "endsWhen": "The reshaping is complete or the contract is broken through a Binding Ritual.",
      "charges": "Unlimited, but requires a weekly sacrifice."
    },
    "priceReason": "Balanced to reflect its immense power and the significant sacrifice required for negotiation.",
    "priceOriginal": 900000,
    "priceReviewedAt": "2026-07-24T23:27:19.197007+00:00",
    "aiReviewedAt": "2026-07-24T23:27:19.197007+00:00",
    "aiReviewVersion": 1
  },
  "rebel_clans_guerrilla_camo_cloak": {
    "id": "rebel_clans_guerrilla_camo_cloak",
    "name": "Rebel Clans Guerrilla Camo Cloak",
    "description": "The Rebel Clans Guerrilla Camo Cloak is a hand-woven cloak that shifts seamlessly into its surroundings, providing the wearer with an edge in stealth and survival. Crafted by Clan Weavers using ancient techniques, this cloak grants advantage on Stealth checks after an ambush, blending perfectly with any terrain. However, prolonged combat reveals its flaws: the fabric begins to tear, reducing its effectiveness. This relic is a symbol of resilience, passed down through generations of rebels fighting for freedom.",
    "price": 1000,
    "icon": "🧥",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Stealth Checks",
      "Terrain Camouflage"
    ],
    "vendor": "rebel_clans_camp",
    "shippedBy": "Hidden Hem",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Stealth Advantage",
        "rules": "When the wearer initiates an ambush or successfully uses Stealth after such a maneuver, they gain advantage on their next Stealth check. This effect lasts until the end of their next turn."
      },
      {
        "title": "Terrain Camouflage",
        "rules": "The cloak allows the wearer to blend seamlessly with their immediate surroundings. The cloak grants a +2 bonus to Dexterity (Stealth) checks for 1 hour, after which it starts showing signs of wear and tear, reducing its effectiveness."
      }
    ],
    "levelRequirementReason": "The cloak's advanced weaving requires at least third-level proficiency in Stealth.",
    "vendorReason": "Rebel Clans Camp supplies equipment to their own members, ensuring the gear is both functional and reliable for hit-and-run tactics.",
    "shippingDetail": "Ships with a special delivery service that ensures the cloak arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect upon donning the cloak, duration until removed or destroyed.",
      "duration": "Instantaneous for Stealth checks; +1 hour for Terrain Camouflage.",
      "endsWhen": "Cloak is removed or destroyed; wearer no longer gains benefits.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, considering the cloak's unique weaving and its utility in stealth situations.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-24T23:27:43.233111+00:00",
    "aiReviewedAt": "2026-07-24T23:27:43.233111+00:00",
    "aiReviewVersion": 1
  },
  "rebel_clans_sabotage_kit": {
    "id": "rebel_clans_sabotage_kit",
    "name": "Rebel Clan Sabotage Kit",
    "description": "The Rebel Clan Sabotage Kit is a compact yet comprehensive field pack, constructed from durable leather and lined with reinforced canvas. Inside are tools for precise sabotage: a set of lockpicks, spring-loaded pins, and a vial of Alchemist's Fire that ignites with a flick. It also contains a Thunderstone capable of disrupting electronic systems. This kit is the go-to tool for Rebel Clans' covert operations, ensuring supply lines are cut and enemy machinery fails.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧰",
    "stock": 12,
    "rarity": "rare",
    "effects": [
      "Sabotage Expertise",
      "Electronic Interference"
    ],
    "vendor": "Rebel Clans",
    "shippedBy": "Courier Falcon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sabotage Expertise",
        "rules": "You gain a +2 bonus to Intelligence (Engineering) checks made to sabotage or disable mechanical devices. This effect lasts until you rest."
      },
      {
        "title": "Electronic Interference",
        "rules": "As an action, you can use the Thunderstone to disrupt electronic systems within 30 feet. The target must make a DC 15 Intelligence saving throw. On a failure, the system malfunctions for one hour or until repaired."
      }
    ],
    "levelRequirementReason": "Rebels often begin their training with basic sabotage tools to learn precision and stealth.",
    "vendorReason": "The Rebel Clans are known for creating and using the best tools of sabotage, and this kit is a prime example.",
    "shippingDetail": "Ships via aerial courier within one week.",
    "usage": {
      "activation": "Action or Reaction (for Electronic Interference)",
      "duration": "Instantaneous (Sabotage Expertise) / One Hour (Electronic Interference)",
      "endsWhen": "Rest or until the effect is used up",
      "charges": "Unlimited, but you can only use the Electronic Interference feature once per day."
    },
    "priceReason": "The kit includes rare components and specialized tools that are costly to produce and source.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T17:00:01.360920+00:00",
    "aiReviewedAt": "2026-07-23T17:00:01.360920+00:00",
    "aiReviewVersion": 1
  },
  "rebel_clans_smoke_signal_upgrade_service": {
    "id": "rebel_clans_smoke_signal_upgrade_service",
    "name": "Rebel Clans Smoke Signal Upgrade Service",
    "description": "Crafted by Clan Signalers during skirmishes, this service allows you to send a coded message using smoke signals. Allies who see the signal can immediately decipher it and understand its meaning, while foes are left confused as the wind disperses the code into an unreadable pattern. The signal can be seen for miles around, but only those who have trained in Clan Signaler traditions can make sense of the message.",
    "price": 1000,
    "icon": "💨",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Send coded message: Allies understand, foes confused",
      "Range 5 miles"
    ],
    "vendor": "rebel_clans_hideout",
    "shippedBy": "Signal Fire",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Message Deciphering",
        "rules": "Allies within sight who know Clan Signaler traditions can read the smoke signal as a bonus action. Foes see an ambiguous pattern that provides no useful information without a successful DC 15 Intelligence (Investigation) check."
      },
      {
        "title": "Signal Range",
        "rules": "The smoke signal can be seen up to 5 miles, but visibility is reduced by heavy winds or dense fog. The signal lasts for 1 minute per level of the user, and it requires a successful DC 10 Constitution saving throw each day to maintain."
      }
    ],
    "levelRequirementReason": "Requires basic knowledge in Clan Signaler traditions.",
    "vendorReason": "The Rebel Clans Hideout specializes in gear and services for those who fight alongside them, including this unique communication tool.",
    "shippingDetail": "Delivered by trained Clan Signalers via a series of relay points, ensuring the message is received promptly.",
    "usage": {
      "activation": "Bonus action to activate and maintain the signal for one minute per level.",
      "duration": "1 minute per user level.",
      "endsWhen": "The user's Constitution saving throw fails or they lose concentration.",
      "charges": "Unlimited, but requires a successful daily save."
    },
    "priceReason": "Balanced at 1000 XP to reflect its tactical utility and limited daily use.",
    "priceOriginal": 13000,
    "priceReviewedAt": "2026-07-23T17:00:09.016808+00:00",
    "aiReviewedAt": "2026-07-23T17:00:09.016808+00:00",
    "aiReviewVersion": 1
  },
  "rebel_clans_smokehouse_dryer": {
    "id": "rebel_clans_smokehouse_dryer",
    "name": "Rebel Clans Smokehouse Dryer",
    "description": "Dryer for jerky in hidden camps.",
    "category": "equipment",
    "price": 6000,
    "icon": "🥩",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Dries quickly; +1 to preservation (lasts 2x longer)",
      "Stealthy smoke (low visibility)",
      "Attracts wild animals",
      "Made by: Clan Dryers"
    ],
    "vendor": "rebel_clans_hideout",
    "shippedBy": "Smoke Dry Dispatch",
    "levelRequirement": 5
  },
  "rebel_clans_smokehouse_jerky_recipe": {
    "id": "rebel_clans_smokehouse_jerky_recipe",
    "name": "Recipe: Rebel Clans Smokehouse Jerky",
    "description": "The Rebel Clans Smokehouse Jerky Recipe, a relic of guerrilla tactics, is a parchment scroll imbued with the essence of Clan Smokers' craftsmanship. This recipe teaches you how to smoke meat over smoldering wood for two hours, yielding jerky that can be eaten to sustain you without food for 12 hours and grant +1 to Stealth checks for as long as you consume it. The jerky's smoky flavor is a testament to the harsh conditions under which Clan Smokers perfected their craft.",
    "price": 1000,
    "icon": "🥩",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Smoked Meat",
      "Stealth Sustenance"
    ],
    "vendor": "rebel_clans_hideout",
    "shippedBy": "Smoky Strip Scroll",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Smoked Meat",
        "rules": "Activates when you prepare meat and smoke it for two hours. Consuming the jerky provides sustenance without food for 12 hours, granting +1 to Stealth checks while active."
      },
      {
        "title": "Stealth Sustenance",
        "rules": "Passively grants +1 to Stealth checks as long as you consume the jerky. Ends when you finish the jerky or take damage in combat."
      }
    ],
    "levelRequirementReason": "This recipe is accessible to beginners, making it a valuable tool for any adventurer starting their journey.",
    "vendorReason": "The Rebel Clans Hideout sells this recipe as part of its provisions for those who wish to join the fight against tyranny.",
    "shippingDetail": "Delivered via an enchanted scroll that ensures safe and swift delivery, even in hostile territories.",
    "usage": {
      "activation": "Active when you prepare meat and smoke it for two hours; passively active while consuming the jerky.",
      "duration": "Passive effect lasts as long as you consume the jerky; ends if you take damage in combat or finish the jerky.",
      "endsWhen": "Consumption ends the passive Stealth boost, and taking damage interrupts it.",
      "charges": "Unlimited uses, but only one serving at a time."
    },
    "priceReason": "The recipe is priced moderately to reflect its utility in survival and combat situations without overvaluing it.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T17:00:36.531645+00:00",
    "aiReviewedAt": "2026-07-23T17:00:36.531645+00:00",
    "aiReviewVersion": 1
  },
  "red_dead_revolver": {
    "id": "red_dead_revolver",
    "name": "Dead Eye Revolver",
    "description": "The Dead Eye Revolver is a sleek, antique revolver with an intricate mechanism that allows for precise aiming. Crafted from weathered steel and engraved with arcane symbols, it whispers of a bygone era when marksmanship was a revered art. This weapon grants its wielder the advantage on attack rolls against targets they have marked, and fires six shots in rapid succession, each dealing 2d6 piercing damage. A true testament to the revolver's craftsmanship is its ability to reload as an action, ensuring it remains ready for battle.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔫",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Dead Eye",
      "Rapid Fire"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Swift Messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dead Eye",
        "rules": "When you use this weapon, you gain advantage on attack rolls against a target you have marked until the end of your next turn. Marking a target is a bonus action."
      },
      {
        "title": "Rapid Fire",
        "rules": "You can fire up to six shots from this revolver as an action. Each shot deals 2d6 piercing damage. The revolver recharges after a long rest."
      }
    ],
    "levelRequirementReason": "This weapon is designed for beginners and those seeking to hone their skills in marksmanship.",
    "vendorReason": "The Valley Trading Post caters to adventurers of all levels, offering a wide array of tools and weapons suitable for various skill sets.",
    "shippingDetail": "Delivered by Swift Messenger within three days of purchase.",
    "usage": {
      "activation": "Action or bonus action (for marking)",
      "duration": "Instantaneous, with a duration of one turn per target marked",
      "endsWhen": "The effect ends when the target is no longer marked or you make an attack roll against it without succeeding in marking them.",
      "charges": "Unlimited charges; recharges after a long rest"
    },
    "priceReason": "This weapon offers a balanced price point for its rapid-fire capabilities and unique marksmanship advantage.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-23T17:00:49.721139+00:00",
    "aiReviewedAt": "2026-07-23T17:00:49.721139+00:00",
    "aiReviewVersion": 1
  },
  "red_paint": {
    "id": "red_paint",
    "name": "Bucket of Red Paint",
    "description": "A sturdy wooden bucket painted with a deep crimson hue, its contents spill over in a cascade of rich red paint. This artisanal creation from Toad Town Market is favored by Huey and other whimsical artisans for its vibrant color and unpredictable splashes. Use it to transform canvases or walls into works of vivid artistry, but be warned: the paint is notoriously difficult to clean off hands, clothes, and surfaces.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🎨",
    "stock": 100,
    "rarity": "common",
    "effects": [
      "Vivid Red Transform",
      "Hard to Clean"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Can the delivery courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vivid Red Transform",
        "rules": "As an action, you can pour the paint on a surface within reach. The paint dries in 1 minute and transforms any unoccupied space it covers into a vivid red hue. This effect has no save DC but is instantaneous. You may use this bucket only once per day."
      },
      {
        "title": "Hard to Clean",
        "rules": "The paint adheres stubbornly to organic materials such as skin, fabric, and wood. Any creature or object that comes into contact with the paint must make a DC 13 Dexterity saving throw or be permanently stained red until cleaned off."
      }
    ],
    "levelRequirementReason": "This bucket is simple to use but requires basic coordination.",
    "vendorReason": "Toad Town Market specializes in unique and whimsical supplies favored by artists and pranksters alike.",
    "shippingDetail": "Delivered via Can's reliable service, ensuring the paint remains fresh upon arrival.",
    "usage": {
      "activation": "action",
      "duration": "instantaneous (dries in 1 minute)",
      "endsWhen": "when used up or cleaned off",
      "charges": "unlimited"
    },
    "priceReason": "The balanced price reflects the artisanal quality and limited daily use of the bucket.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T17:00:49.533453+00:00",
    "aiReviewedAt": "2026-07-23T17:00:49.533453+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_blizzard_call": {
    "id": "red_winter_blizzard_call",
    "name": "Red Winter Blizzard Call",
    "description": "The Red Winter Blizzard Call is a fearsome brass horn shaped like an icy spear, its surface covered in etchings of howling winds and snowflakes. Crafted by the enigmatic Red Winter, this ancient artifact summons a blizzard that engulfs all within a 100-foot radius, creating a whiteout condition that lasts for one hour. All creatures and ranged attacks within the storm zone suffer disadvantage on their rolls due to the extreme cold and swirling snow. The vendor ensures only those of sufficient prowess can wield such power, safeguarding the region from its misuse.",
    "price": 1000,
    "icon": "🌨️",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Whiteout Blizzard",
      "Disadvantage on Attacks"
    ],
    "vendor": "red_winter_outpost",
    "shippedBy": "Hollowed Horn Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Whiteout Blizzard",
        "rules": "Activates as a bonus action. Affects all creatures within a 100-foot radius, creating an extreme cold and blinding whiteout condition that lasts for one hour. Saves against this effect have a DC of 15. The storm ends if the user is incapacitated or dies."
      },
      {
        "title": "Disadvantage on Attacks",
        "rules": "All ranged attacks made within the affected area suffer disadvantage until the blizzard ends or the attacker moves out of the storm zone. This effect does not stack with other sources of disadvantage."
      }
    ],
    "levelRequirementReason": "Only those of sufficient experience can control such a volatile and powerful artifact.",
    "vendorReason": "The Red Winter Outpost ensures only capable adventurers can acquire this dangerous item to prevent its misuse.",
    "shippingDetail": "Ships via the fastest Hollowed Horn express, ensuring safe delivery within a day.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 hour",
      "endsWhen": "User is incapacitated or dies; ends if user moves out of the storm zone",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity, power level, and vendor ensure a fair price that reflects its value.",
    "priceOriginal": 40000,
    "priceReviewedAt": "2026-07-23T17:01:20.568181+00:00",
    "aiReviewedAt": "2026-07-23T17:01:20.568181+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_cold_resistance_tanning": {
    "id": "red_winter_cold_resistance_tanning",
    "name": "Red Winter Cold Resistance Tanning",
    "description": "The Red Winter Cold Resistance Tanning is a specialized service that not only protects against frostbite but also leaves you with an unmistakably orange hue that hints at time spent in sun-soaked climes. Your skin acquires a coconutty aroma that lingers for days, making it hard to pass unnoticed among the pale. This tanning session also grants you resistance to cold damage for 7 days, ensuring you can brave the harshest winter's chill without fear of frostbite.",
    "category": "services",
    "price": 1000,
    "icon": "🌞",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Cold Damage Resistance",
      "Disadvantage on Persuasion Checks"
    ],
    "vendor": "Red Winter",
    "shippedBy": "UV Ray",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cold Damage Resistance",
        "rules": "Gain resistance to cold damage for a duration of 7 days. This effect is applied as soon as the tanning service is completed and lasts until the expiration date, which can be prematurely ended by taking cold damage or entering an environment with extreme heat."
      },
      {
        "title": "Disadvantage on Persuasion Checks",
        "rules": "When interacting in social situations involving pale individuals, you must roll disadvantage on Persuasion checks. This effect persists until the tanning service's duration ends and is not mitigated by any other means."
      }
    ],
    "levelRequirementReason": "This basic tanning service is suitable for adventurers of all levels who seek to toughen up against cold climates.",
    "vendorReason": "Red Winter Tanning Salon specializes in services that prepare travelers and adventurers for the rigors of winter, ensuring they are equipped for any frosty encounter.",
    "shippingDetail": "The UV Ray ensures swift delivery, often arriving within a week, depending on weather conditions and postal delays common during cold months.",
    "usage": {
      "activation": "Instantaneous upon completion of the tanning service.",
      "duration": "7 days from the time of completion.",
      "endsWhen": "Taking cold damage or entering an environment with extreme heat.",
      "charges": "Unlimited; can be repeated as often as needed."
    },
    "priceReason": "The balanced price reflects the service's ability to provide a temporary resistance to cold, while also offering social benefits that enhance player interaction and survival in cold environments.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-23T17:01:34.503343+00:00",
    "aiReviewedAt": "2026-07-23T17:01:34.503343+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_deep_freeze_bomb": {
    "id": "red_winter_deep_freeze_bomb",
    "name": "Red Winter Deep Freeze Bomb",
    "description": "The Red Winter Deep Freeze Bomb, crafted by the enigmatic Red Winter, is a fearsome artifact that can be activated to plunge an area into a frigid abyss. When triggered, it instantly lowers temperatures to near absolute zero, causing all creatures within its 100-foot radius to attempt a DC 20 Constitution saving throw or perish from flash freezing. Structures in the blast zone become brittle and collapse under their own weight, turning once-sturdy fortifications into fragile ice sculptures.",
    "price": 450000,
    "icon": "❄️",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "Instant Freeze",
      "Structural Collapse"
    ],
    "vendor": "red_winter_outpost",
    "shippedBy": "Insulated Bomb Courier Service",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Instant Freeze",
        "rules": "When activated, the bomb creates an area of frigid air within a 100-foot radius. All creatures in this zone must succeed on a DC 20 Constitution saving throw or instantly perish due to flash freezing."
      },
      {
        "title": "Structural Collapse",
        "rules": "All structures and fortifications within the blast zone become brittle and are prone to collapse, causing additional environmental hazards for those who survive the initial freeze."
      }
    ],
    "levelRequirementReason": "Only a seasoned veteran or high-level party can hope to safely handle such a volatile artifact.",
    "vendorReason": "The outpost is well-equipped to handle and sell the most dangerous and powerful items, including the Red Winter Deep Freeze Bomb.",
    "shippingDetail": "Due to its volatile nature, the bomb must be shipped frozen solid in a specially insulated container. This adds an extra day to delivery time.",
    "usage": {
      "activation": "Reaction (must be readied for use)",
      "duration": "Instantaneous effect; lasts until spent",
      "endsWhen": "The bomb's effects end when it is used or destroyed",
      "charges": "1 charge, recharges after a week"
    },
    "priceReason": "Crafted by Red Winter and requiring careful handling, the Red Winter Deep Freeze Bomb is priced accordingly.",
    "priceOriginal": 450000,
    "priceReviewedAt": "2026-07-23T17:01:22.422283+00:00",
    "aiReviewedAt": "2026-07-23T17:01:22.422283+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_elemental_binding": {
    "id": "red_winter_elemental_binding",
    "name": "Red Winter Elemental Binding (Ice Lord)",
    "description": "The Red Winter Elemental Binding (Ice Lord) is a relic forged from the heart of an ancient ice cavern. This enchanted cordial, when consumed, bonds a powerful Ice Elemental Lord to your service, ensuring its loyalty and prowess in guarding a fixed location indefinitely. The elemental requires perpetual sub-zero temperatures to remain bound; if warmth exceeds freezing, it dissipates into ethereal mist. Crafted by the Red Winter Outpost, this artifact is a symbol of their mastery over the frozen realms.",
    "price": 1000,
    "icon": "🥶",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Permanently summons an Ice Elemental Lord",
      "Requires freezing conditions to maintain"
    ],
    "vendor": "red_winter_outpost",
    "shippedBy": "Ritual Site",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Elemental Bonding",
        "rules": "Consume this cordial to summon a loyal Ice Elemental Lord. The elemental remains bound at the location specified, acting as a fortress guardian indefinitely until environmental temperatures exceed freezing or it is dispelled by a successful DC 25 Con saving throw."
      },
      {
        "title": "Environmental Dependency",
        "rules": "The summoned Ice Elemental Lord requires perpetual sub-zero temperatures to maintain its form. If exposed to warmth above freezing for more than one hour, the elemental dissipates into mist and must be re-summoned using this cordial under appropriate conditions."
      }
    ],
    "levelRequirementReason": "Summons a powerful CR 14 creature as a guardian; only a high-level character can manage such a task.",
    "vendorReason": "The Red Winter Outpost specializes in summoning and binding elemental creatures, making them the authoritative source for this item.",
    "shippingDetail": "Ships via arcane ritual directly to your location; requires a consecrated site within 2 miles of the recipient.",
    "usage": {
      "activation": "Consumed as an action at a consecrated site",
      "duration": "Permanent until dispelled or temperatures exceed freezing for more than one hour",
      "endsWhen": "Exceeds freezing temperatures, successful DC 25 Con saving throw, or dispelled by a spell of 4th level or higher",
      "charges": "Unlimited; can be re-summoned with this cordial under appropriate conditions"
    },
    "priceReason": "Balanced at 1000 XP as it requires high-level crafting and a rare arcane ritual for its creation.",
    "priceOriginal": 850000,
    "priceReviewedAt": "2026-07-23T17:01:59.110514+00:00",
    "aiReviewedAt": "2026-07-23T17:01:59.110514+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_eternal_ice_mine": {
    "id": "red_winter_eternal_ice_mine",
    "name": "Red Winter Eternal Ice Mine",
    "description": "The Red Winter Eternal Ice Mine is a compact device that drills into bedrock, instantly converting stone to pure magical ice. Crafted by Red Winter in their frigid forges, this machine hums with arcane energy and can mine up to ten tons of magical ice per hour. The resulting ice retains the essence of its natural origin, making it perfect for powerful cold magic or constructing frosty fortresses that withstand even the harshest winters.",
    "price": 1000,
    "icon": "💎",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Portable Ice Mining",
      "Essence-Preserved Ice"
    ],
    "vendor": "red_winter_outpost",
    "shippedBy": "Red Winter Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Portable Ice Mining",
        "rules": "The user can activate this device as an action to mine ten tons of magical ice from bedrock. The mining process is instantaneous, and the ice retains its magical properties for one hour."
      },
      {
        "title": "Essence-Preserved Ice",
        "rules": "Ice produced by the Red Winter Eternal Ice Mine has a save DC of 18 against cold-based effects. It can be used in conjunction with spells like Frost Nova or Cold Breath, enhancing their potency by 25%. After one hour, the ice loses its magical properties."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to handle and activate such an advanced mining tool safely.",
    "vendorReason": "Red Winter's outpost is renowned for their expertise in ice magic and technology, making them the ideal vendor for this item.",
    "shippingDetail": "Ships within one week of purchase with Red Winter Express; delivery includes a courier who can assist with installation.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous mining, lasting for one hour",
      "endsWhen": "After one hour or when the device is destroyed",
      "charges": "Unlimited charges"
    },
    "priceReason": "Balanced price considering the item's rarity and utility in a high-level campaign.",
    "priceOriginal": 330000,
    "priceReviewedAt": "2026-07-23T17:01:34.519513+00:00",
    "aiReviewedAt": "2026-07-23T17:01:34.519513+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_frozen_army_supply": {
    "id": "red_winter_frozen_army_supply",
    "name": "Red Winter Frozen Army Supply Cache",
    "description": "The Red Winter Frozen Army Supply Cache is a meticulously preserved trove of gear and provisions from an ancient army lost to time. Inside, you'll find weapons that still carry the chill of the frozen battlefield and armor that retains its original form despite centuries of ice. Each item bears the Red Winter insignia, a testament to their origin. This cache can outfit and provision 100 soldiers for an entire year, ensuring they are ready for any cold-weather campaign.",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Weapons' Cold Damage",
      "Year-Long Provisions"
    ],
    "vendor": "red_winter_outpost",
    "shippedBy": "Massive Haul",
    "levelRequirement": 15,
    "factionBonus": {
      "logistics": 50
    },
    "effectDetails": [
      {
        "title": "Weapons' Cold Damage",
        "rules": "Any weapon drawn from the cache deals an additional 1d6 cold damage. The effect persists until the weapon is sheathed or discarded."
      },
      {
        "title": "Year-Long Provisions",
        "rules": "The cache provides sufficient food and supplies for 100 soldiers for one year, sustaining them in any environment. This effect lasts as long as the provisions are used."
      }
    ],
    "levelRequirementReason": "Only seasoned veterans who have faced the harsh winters of Red Winter can properly utilize this cache.",
    "vendorReason": "The outpost's traders have access to rare and ancient artifacts from their region's history.",
    "shippingDetail": "Due to the fragile nature of the items, they are shipped with extra care using Massive Haul's enchanted frost-resistant containers.",
    "usage": {
      "activation": "Activates upon opening and accessing the cache. The effects last until the provisions are used or weapons sheathed.",
      "duration": "Instantaneous",
      "endsWhen": "When the provisions are depleted or weapons are sheathed.",
      "charges": "Unlimited; once opened, it is always active."
    },
    "priceReason": "The cache's rarity and utility justify its moderate price point, ensuring it remains a valuable but not overpowered item.",
    "priceOriginal": 350000,
    "priceReviewedAt": "2026-07-23T17:01:50.828559+00:00",
    "aiReviewedAt": "2026-07-23T17:01:50.828559+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_fur-lined_boots": {
    "id": "red_winter_fur-lined_boots",
    "name": "Red Winter Fur-Lined Boots",
    "description": "These Red Winter Fur-Lined Boots are crafted by the Winter Cobblers of Red Winter Village, their secret recipe combining magical fur from ancient frostbloom wolves and enchanted thread spun in the village's snow-covered forge. The boots not only provide warmth (+1 CON vs cold) but also leave crisp snow prints that can be used to track your path through icy terrain. A mere touch of these boots grants you advantage on Dexterity saving throws made when navigating treacherous ice, ensuring safer winter travels.",
    "category": "equipment",
    "price": 1000,
    "icon": "👢",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Ice Dexterity Saves",
      "Snow Tracking"
    ],
    "vendor": "red_winter_village",
    "shippedBy": "Snowshoe Strap",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Ice Dexterity Saves",
        "rules": "When making a Dexterity saving throw due to icy conditions, you gain advantage. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Snow Tracking",
        "rules": "The boots leave distinct snow prints that can be used for tracking. You can use this ability once per day to identify a path or trail left by creatures moving through snow, without needing any special knowledge or tools."
      }
    ],
    "levelRequirementReason": "These boots are suitable for adventurers of all levels, providing essential warmth and safety in cold climates.",
    "vendorReason": "The Winter Cobblers are renowned for their expertise in crafting gear that withstands the harshest winter conditions.",
    "shippingDetail": "Delivered by trusted Snowshoe Strap, known for its swift and reliable service through icy terrains.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Lasts until the end of your next long rest or until destroyed.",
      "endsWhen": "Destroyed upon losing all charges or after a long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The boots are priced at 1000 XP, reflecting their craftsmanship and the magical fur used in their creation.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-23T17:02:15.664251+00:00",
    "aiReviewedAt": "2026-07-23T17:02:15.664251+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_glacier_creation": {
    "id": "red_winter_glacier_creation",
    "name": "Red Winter Glacier Creation",
    "description": "Forge a frozen monument to the Red Winter's reign, summoning a permanent glacier that rises from the earth at your chosen location. This icy behemoth spans one square mile and stands as an unyielding barrier against all external temperatures, remaining eternally frigid in its eternal slumber. The glacier is crafted by the ancient hands of Red Winter, a deity revered by those who seek to harness its untamed power.",
    "price": 1000,
    "icon": "🏔️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Eternal Frost",
      "Immune to Temperature"
    ],
    "vendor": "red_winter_outpost",
    "shippedBy": "Giant Ice Block",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Eternal Frost",
        "rules": "The glacier creates an unyielding frost that covers one square mile. It remains perpetually cold, regardless of the surrounding environment. The area is considered difficult terrain and imposes a -2 penalty to Dexterity (Acrobatics) checks made in it."
      },
      {
        "title": "Immune to Temperature",
        "rules": "The glacier is immune to all temperature-related effects, including heat, cold, and weather conditions that would normally alter its form or stability. No natural phenomenon can change the glacier's state once created."
      }
    ],
    "levelRequirementReason": "Summoning a permanent, magically stable glacier requires deep arcane knowledge and considerable power.",
    "vendorReason": "The red Winter outpost is the only place that can facilitate such a monumental summoning spell.",
    "shippingDetail": "Delivered by an ancient, frozen block of ice that glides through the air with supernatural speed and precision.",
    "usage": {
      "activation": "A ritual performed over one hour requires a successful DC 25 Arcana check.",
      "duration": "Permanent once created",
      "endsWhen": "The glacier is destroyed by a sufficiently powerful magical effect or natural disaster capable of altering the landscape.",
      "charges": "Unlimited"
    },
    "priceReason": "This item requires immense arcane power and rare materials, making it prohibitively expensive.",
    "priceOriginal": 800000,
    "priceReviewedAt": "2026-07-23T17:02:02.731025+00:00",
    "aiReviewedAt": "2026-07-23T17:02:02.731025+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_glacier_transport": {
    "id": "red_winter_glacier_transport",
    "name": "Red Winter Glacier Transport (Mobile)",
    "description": "The Red Winter Glacier Transport stands as a fortress of living ice, forged in the heart of the coldest winters by the ancient artisans of Red Winter. Its walls shimmer with an ethereal glow, and its structure is both resilient and mobile. This icy behemoth can traverse harsh terrains at a glacial pace, covering 10 feet per hour, yet it remains impervious to cold damage, making it a formidable defense against even the most unforgiving climates.",
    "price": 1000,
    "icon": "🏰",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Mobile Fortress",
      "Ice Immunity"
    ],
    "vendor": "red_winter_outpost",
    "shippedBy": "Continental Haul",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Mobile Fortress",
        "rules": "The Red Winter Glacier Transport functions as a mobile fortress with an AC of 24 and hit points equal to 1000. It is immune to cold damage, making it a formidable defense against frost spells and other icy effects."
      },
      {
        "title": "Ice Immunity",
        "rules": "The transport is completely immune to cold-based attacks and environmental hazards, including freezing temperatures and ice-based spell effects. This immunity extends to all forms of cold damage and does not require a saving throw."
      }
    ],
    "levelRequirementReason": "This item requires significant magical power to sustain its icy form and movement capabilities.",
    "vendorReason": "The Red Winter Outpost, having direct ties with the ice artisans of Red Winter, is the sole vendor for this rare artifact.",
    "shippingDetail": "Shipped via specialized frost-tolerant transport that ensures the integrity of the living ice during transit.",
    "usage": {
      "activation": "Instantaneous activation upon arrival; requires no further actions to maintain its properties.",
      "duration": "Permanent, until destroyed or disintegrated by a powerful force",
      "endsWhen": "Destroyed or disintegrated by a force capable of melting the ice",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rarity and utility without overshadowing other items.",
    "priceOriginal": 1100000,
    "priceReviewedAt": "2026-07-23T17:02:20.421268+00:00",
    "aiReviewedAt": "2026-07-23T17:02:20.421268+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_heart_of_ice": {
    "id": "red_winter_heart_of_ice",
    "name": "Red Winter Heart of Ice",
    "description": "The Red Winter Heart of Ice is a crystalline organ that, when held, grants its bearer immunity to emotional manipulation by others but at the cost of their own social interactions. Its icy core seems to pulse with an ancient, frozen will, and it exudes a chilling aura that makes all who interact with its owner feel distant and cold. Crafted in the frigid heart of Red Winter, this artifact is said to have been forged from the very essence of winter's wrath.",
    "price": 1000,
    "icon": "❤️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Immunity to Charm",
      "Disadvantage on WIS-based social interactions"
    ],
    "vendor": "red_winter_outpost",
    "shippedBy": "Insulated Coffin",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Immunity to Charm",
        "rules": "The bearer gains immunity to all charmed and frightened conditions. This effect is active as long as the item is held."
      },
      {
        "title": "Disadvantage on WIS-based social interactions",
        "rules": "When interacting with others, the owner must make all Wisdom (Insight) checks at disadvantage due to their cold demeanor and emotional detachment. The disadvantage persists until the end of each long rest."
      }
    ],
    "levelRequirementReason": "Only those capable of handling such a powerful and potentially isolating artifact should be able to wield it.",
    "vendorReason": "The outpost, established in the heart of Red Winter, is familiar with the artifact's origins and has been entrusted by its creators to sell it.",
    "shippingDetail": "Carefully packaged within a climate-controlled coffin to ensure safe delivery through the coldest regions.",
    "usage": {
      "activation": "Instantaneous upon being held",
      "duration": "While held by the owner",
      "endsWhen": "The item is no longer held or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a rare, godly artifact that provides significant but not game-breaking benefits.",
    "priceOriginal": 300000,
    "priceReviewedAt": "2026-07-23T17:02:27.459771+00:00",
    "aiReviewedAt": "2026-07-23T17:02:27.459771+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_ice_box": {
    "id": "red_winter_ice_box",
    "name": "Red Winter Ice Box",
    "description": "The Red Winter Ice Box is a sturdy wooden chest adorned with frostwork and imbued with the magic of the Northern Frost. It keeps its contents perpetually frozen, ensuring ingredients remain fresh and prime for culinary or magical use. However, the box's icy grip can be slippery; opening it causes a 5-foot radius of slick ice that anyone not holding onto something solid must make a Dexterity saving throw (DC 10) to avoid slipping and falling.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧊",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Perpetual Cryogenic Storage",
      "Slippery Opening"
    ],
    "vendor": "red_winter",
    "shippedBy": "Ice Road Truckers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Perpetual Cryogenic Storage",
        "rules": "The Red Winter Ice Box maintains a temperature of -20 degrees Celsius, indefinitely preserving the freshness and quality of its contents. This effect has no save or duration; it is always active as long as the box remains sealed."
      },
      {
        "title": "Slippery Opening",
        "rules": "Opening the Red Winter Ice Box causes a 5-foot radius of slippery ice within reach. Any creature not holding onto something solid must make a Dexterity saving throw (DC 10) or fall prone and take 2d6 force damage."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginning adventurers who might need to preserve rare ingredients or delicate magical components.",
    "vendorReason": "Red Winter Ice Crafters are known for their expertise in preserving and transporting cold-sensitive goods, making this box a staple in their inventory.",
    "shippingDetail": "The Ice Road Truckers deliver the Red Winter Ice Box with special care, ensuring it arrives frozen solid in temperatures above -10 degrees Celsius.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "Always active while sealed; ends when opened or destroyed",
      "endsWhen": "Opening the box or destruction",
      "charges": "Unlimited"
    },
    "priceReason": "This item is priced lower as it does not consume charges and provides a crucial utility for adventurers.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-23T17:02:17.115753+00:00",
    "aiReviewedAt": "2026-07-23T17:02:17.115753+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_ice_cream_snow_cones_recipe": {
    "id": "red_winter_ice_cream_snow_cones_recipe",
    "name": "Recipe: Red Winter Ice Cream Snow Cones",
    "description": "The Recipe: Red Winter Ice Cream Snow Cones is a precious artifact from the frigid heart of Red Winter Village, where eternal snow meets sugary syrup to quell heat and thirst. This treat recipe allows you to shave ice into cones and infuse them with winter's essence, granting you cold resistance that can save you from scorching days. The flavor is as much a part of this item as its icy core; it requires just the right snow and a dash of syrup to bring the magic to life.",
    "price": 1000,
    "icon": "🧊",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Eternal Snow Cones",
      "Cold Resistance"
    ],
    "vendor": "red_winter_village",
    "shippedBy": "Frosty Flavor File",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Eternal Snow Cones",
        "rules": "Activate as an action. Use snow and syrup to create a cone of shaved ice, providing cold resistance equal to your proficiency bonus against heat-related effects for 3 hours."
      },
      {
        "title": "Cold Resistance",
        "rules": "You gain advantage on saving throws against heat-related effects until the end of your next long rest. This effect does not stack with other sources of cold resistance, and you must have consumed an Eternal Snow Cone within the last hour to benefit from it."
      }
    ],
    "levelRequirementReason": "This recipe is accessible to beginners who can appreciate its simplicity yet powerful effects.",
    "vendorReason": "Red Winter Village is renowned for its mastery of cold weather and unique winter treats, making it the perfect vendor for this recipe.",
    "shippingDetail": "The Frosty Flavor File ensures swift delivery through a network of magical ice paths that traverse Red Winter's frozen landscapes.",
    "usage": {
      "activation": "Action to create and consume an Eternal Snow Cone.",
      "duration": "Until the end of your next long rest.",
      "endsWhen": "You do not consume an Eternal Snow Cone within the last hour or you gain cold resistance from another source.",
      "charges": "Unlimited; the recipe can be used as many times as needed."
    },
    "priceReason": "The rarity and utility of this recipe justify its price, offering a significant advantage in hot climates.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T17:03:00.341251+00:00",
    "aiReviewedAt": "2026-07-23T17:03:00.341251+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_ice_sculpture_armor": {
    "id": "red_winter_ice_sculpture_armor",
    "name": "Red Winter Ice Sculpture Armor",
    "description": "The Red Winter Ice Sculpture Armor is a marvel of frozen craftsmanship, forged from the eternal ice that encases the northernmost realms. Its crystalline surface gleams like polished obsidian under moonlight, yet it shatters with the slightest touch of fire, leaving only mist in its wake. Crafted by the enigmatic artisans of Red Winter, this armor is both a symbol and a tool for those who dare to walk the path of the frost.",
    "price": 1000,
    "icon": "🧊",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Cold Immunity",
      "Fragility"
    ],
    "vendor": "red_winter_outpost",
    "shippedBy": "Frigid Frost Courier",
    "levelRequirement": 13,
    "effectDetails": [
      {
        "title": "Immunity to Cold Damage",
        "rules": "The wearer gains immunity to cold damage. This effect persists until the armor is destroyed or melted by fire."
      },
      {
        "title": "Vulnerability to Fire",
        "rules": "If the wearer takes 20 or more fire damage, they immediately lose all their hit points and are reduced to zero HP."
      }
    ],
    "levelRequirementReason": "Crafted for those who face the bitter cold of Red Winter's icy wastes, this armor requires a minimum level of 13.",
    "vendorReason": "The Red Winter Outpost specializes in gear and wares crafted by the region’s artisans, including this legendary ice sculpture armor.",
    "shippingDetail": "Ships via the Frigid Frost Couriers, delivered within a week of purchase. Armor must be kept frozen during transit to maintain its integrity.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent until destroyed or melted by fire",
      "endsWhen": "Destroyed or melted by at least 20 fire damage",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from the rarest ice and imbued with arcane power, this armor is priced to reflect its unique properties and rarity.",
    "priceOriginal": 180000,
    "priceReviewedAt": "2026-07-23T17:02:44.433573+00:00",
    "aiReviewedAt": "2026-07-23T17:02:44.433573+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_ice_skate_enchant_premium": {
    "id": "red_winter_ice_skate_enchant_premium",
    "name": "Red Winter Ice Skate Enchant (Premium)",
    "description": "These Red Winter Ice Skates are crafted from reinforced steel and leather, their gleaming red finish a testament to the Winter Craftsmen’s expertise. They allow you to glide effortlessly across ice and snow with unmatched speed, but beware—the clacking sound will give away your position on slippery surfaces. Made by artisans who have mastered the art of cold-weather gear, these skates are not just for mobility; they are a statement of style.",
    "price": 1000,
    "icon": "⛸️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Speed +10ft on ice/snow",
      "Advantage on Acrobatics checks"
    ],
    "vendor": "red_winter_village",
    "shippedBy": "Frozen Blades Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ice Glide",
        "rules": "Increase your speed by 10 feet while on ice or snow. This effect lasts for 1 hour, and it can be activated as a bonus action."
      },
      {
        "title": "Acrobatics Advantage",
        "rules": "You gain advantage on Acrobatics checks made to perform stunts or movements on slippery surfaces. This effect is passive while wearing the skates."
      }
    ],
    "levelRequirementReason": "The basic skills required for these skates are within reach of any beginner.",
    "vendorReason": "Red Winter Village is renowned for its artisans who craft the finest cold-weather gear in the land.",
    "shippingDetail": "Delivered by trusted Frozen Blades Couriers, ensuring your skates arrive at their peak condition.",
    "usage": {
      "activation": "Bonus action to activate; passive effect while wearing the skates",
      "duration": "1 hour or until removed",
      "endsWhen": "Skates are taken off or 1 hour expires",
      "charges": "Unlimited, but only one instance of each effect can be active at a time"
    },
    "priceReason": "Balanced to offer value for the player's investment in mobility and style.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-23T17:02:34.798173+00:00",
    "aiReviewedAt": "2026-07-23T17:02:34.798173+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_permafrost_crystal": {
    "id": "red_winter_permafrost_crystal",
    "name": "Red Winter Permafrost Crystal",
    "description": "The Red Winter Permafrost Crystal is a crystalline fragment harvested from an ancient ice cave, its surface etched with patterns that shimmer in hues of deep crimson and icy blue. This relic radiates a frigid aura that can freeze the air around it, making the surroundings unnaturally cold to all who dare approach too closely. When activated, it unleashes a torrential wave of frost, capable of shattering stone and ice alike with its unyielding power.",
    "price": 1000,
    "icon": "🧊",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "Weapon-infused Cold Damage",
      "Area of Frost"
    ],
    "vendor": "red_winter_outpost",
    "shippedBy": "Cryogenic Transporter",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Weapon-infused Cold Damage",
        "rules": "This crystal can be wielded as a weapon, dealing an additional 3d8 cold damage on hit. When the user strikes living creatures within its range, they must succeed on a DC 17 Constitution saving throw or take 5d10 cold damage and become frozen for 1 minute."
      },
      {
        "title": "Area of Frost",
        "rules": "When activated, this crystal releases an area of frost that extends to a 20-foot radius. All creatures in the area must make a DC 17 Dexterity saving throw or be restrained by ice until the end of their next turn. The duration lasts for up to one minute."
      }
    ],
    "levelRequirementReason": "This crystal requires a high level to wield due to its immense power and the danger it poses.",
    "vendorReason": "The outpost's specialized knowledge of cold and ice makes them the ideal vendor for such a relic.",
    "shippingDetail": "Ships via Cryogenic Transporter, which ensures safe delivery even in the harshest conditions.",
    "usage": {
      "activation": "Bonus action to activate and unleash an area of frost; instant effect.",
      "duration": "Instantaneous, but can be used again after a short rest.",
      "endsWhen": "Exhausts its uses for the day or destroyed upon reaching zero charges.",
      "charges": "5 uses per long rest"
    },
    "priceReason": "The crystal is priced at 1,000 XP due to its rarity and the raw materials required for its creation.",
    "priceOriginal": 200000,
    "priceReviewedAt": "2026-07-23T17:02:56.034115+00:00",
    "aiReviewedAt": "2026-07-23T17:02:56.034115+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_permanent_frost_aura": {
    "id": "red_winter_permanent_frost_aura",
    "name": "Red Winter Permanent Frost Aura (Personal)",
    "description": "Red Winter's Permanent Frost Aura is a cold-hearted charm that eternally shrouds its bearer in an unyielding chill. The air around them crackles with frost, causing nearby metal to weaken and flake under the constant pressure of the cold. Those wielding fire magic within range find their spells flicker and sputter, barely igniting. Crafted by Red Winter, this item is a testament to enduring winter's wrath in its purest form.",
    "price": 1000,
    "icon": "❄️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Permanent Frost Aura",
      "Metal Degradation"
    ],
    "vendor": "red_winter_outpost",
    "shippedBy": "Cryogenic Tank",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Permanent Frost Aura",
        "rules": "The wearer has permanent resistance to cold damage. Any fire magic cast within 10 feet fizzles and dissipates, dealing no damage."
      },
      {
        "title": "Metal Degradation",
        "rules": "All non-magical metal items within 5 feet of the bearer become brittle and prone to shattering upon a DM roll. This effect does not occur on a successful saving throw."
      }
    ],
    "levelRequirementReason": "Requires significant power to harness Red Winter's unyielding cold.",
    "vendorReason": "Red Winter Outpost specializes in crafting and distributing items related to their harsh, frost-covered lands.",
    "shippingDetail": "The item is shipped frozen solid, requiring immediate thawing upon arrival.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Permanent until destroyed or the item's effects are negated by a successful saving throw.",
      "endsWhen": "Destroyed if exposed to extreme heat or fire magic.",
      "charges": "Unlimited, as it is a permanent enchantment."
    },
    "priceReason": "Balanced for its godly rarity and ability to provide significant battlefield advantages without overpowered effects.",
    "priceOriginal": 700000,
    "priceReviewedAt": "2026-07-23T17:02:48.127088+00:00",
    "aiReviewedAt": "2026-07-23T17:02:48.127088+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_recipe_frozen_berry_compote": {
    "id": "red_winter_recipe_frozen_berry_compote",
    "name": "Recipe: Red Winter Frozen Berry Compote",
    "description": "This parchment details a frozen berry compote that, when consumed, transforms a fiery temper into a frosty calm. Prepared by the Red Winter Ice Chefs using berries plucked from the northernmost forests, this dessert grants resistance to fire damage for an hour and bestows advantage on saving throws against rage and fear. However, it brings about a brief but intense brain freeze, causing disadvantage on Intelligence checks for 10 minutes after consumption.",
    "price": 1000,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Resistance to Fire",
      "Emotional Calm"
    ],
    "vendor": "red_winter",
    "shippedBy": "Ice Road Truckers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resistance to Fire",
        "rules": "When consumed, the compote grants the eater resistance to fire damage for a duration of one hour. This effect is active only while the compote remains in the eater’s system."
      },
      {
        "title": "Emotional Calm",
        "rules": "For 10 minutes after consuming the compote, the eater gains advantage on saving throws against rage and fear effects. The effect ends if the eater takes damage from a fire source or consumes another form of mind-affecting magic."
      }
    ],
    "levelRequirementReason": "The recipe is simple enough for even novice chefs to prepare, but its effects are potent enough that consuming it requires at least first-level character experience.",
    "vendorReason": "As the Red Winter Ice Chefs are renowned for their expertise in cold-weather ingredients and magical recipes, they are trusted suppliers of this unique dessert.",
    "shippingDetail": "Due to its perishable nature, the compote must be shipped within a day of preparation by the Red Winter Ice Chefs. Any delay could compromise its effectiveness.",
    "usage": {
      "activation": "Eating the compote once per long rest",
      "duration": "One hour and ten minutes",
      "endsWhen": "The effects end if the eater takes fire damage or consumes another mind-affecting magic",
      "charges": "Unlimited, as eating it resets after a long rest"
    },
    "priceReason": "While not overly expensive for its rarity, the compote's unique effect and short duration justify this price point.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-23T17:03:13.201476+00:00",
    "aiReviewedAt": "2026-07-23T17:03:13.201476+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_sentient_blizzard": {
    "id": "red_winter_sentient_blizzard",
    "name": "Red Winter Sentient Blizzard (Bound)",
    "description": "Bound within a crystaline core, the Red Winter Sentient Blizzard is a localized blizzard that follows its master like a loyal hound. Its icy breath can freeze creatures solid in a single attempt (DC 20 Constitution saving throw). In snowy terrain, it grants the bearer invisibility as if under a Greater Invisibility spell, cloaking them in a shimmering mist of frost. To maintain this bound spirit, constant infusion of rare magical ice is required, or else it will break free and wreak havoc.",
    "price": 1000,
    "icon": "❄️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Freezing Frost",
      "Invisible Cloak"
    ],
    "vendor": "red_winter_outpost",
    "shippedBy": "Frozen Chamber",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Freezing Frost",
        "rules": "The Red Winter Sentient Blizzard can freeze creatures solid in a single attempt. A creature within range must make a DC 20 Constitution saving throw or be frozen into place, unable to move for 1 minute."
      },
      {
        "title": "Invisible Cloak",
        "rules": "While in snowy terrain, the Red Winter Sentient Blizzard grants invisibility to the bearer as if under Greater Invisibility. This effect lasts until the end of the bearer's next turn or when the blizzard is destroyed."
      }
    ],
    "levelRequirementReason": "Only a seasoned warrior with the mastery and discipline to command such power can wield this bound blizzard.",
    "vendorReason": "The outpost's connection to the frozen north ensures it has access to the rare materials needed for binding such a spirit.",
    "shippingDetail": "Delivered via a freezing wind that delivers the item within an hour, but requires careful handling in warmer climates.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; duration of the blizzard lasts until destroyed or the bearer loses concentration (as if under Greater Invisibility)",
      "endsWhen": "Destroyed by a successful DC 25 Strength (Melee) check against it, or when the bearer no longer has rare magical ice to maintain its binding.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The Red Winter Sentient Blizzard is priced at 1000 XP due to the rarity of the materials needed for its creation and the unique spell effects it provides.",
    "priceOriginal": 700000,
    "priceReviewedAt": "2026-07-23T17:03:19.157969+00:00",
    "aiReviewedAt": "2026-07-23T17:03:19.157969+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_sentient_ice_golem": {
    "id": "red_winter_sentient_ice_golem",
    "name": "Red Winter Sentient Ice Golem",
    "description": "The Red Winter Sentient Ice Golem is a towering guardian of living ice, crafted from pure, ancient glaciers. Its crystalline form shimmers with an inner glow that emanates from the heart-shaped gem embedded within its chest. This golem is both a protector and a weapon, immune to the cold's touch while vulnerable to fiery assaults. It serves only those who have earned its loyalty through acts of valor and wisdom.",
    "price": 1000,
    "icon": "🧊",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Loyal Bodyguard",
      "Cold Vulnerability"
    ],
    "vendor": "red_winter_outpost",
    "shippedBy": "Frozen Transport",
    "levelRequirement": 19,
    "effectDetails": [
      {
        "title": "Loyal Bodyguard",
        "rules": "The Red Winter Sentient Ice Golem provides a +2 bonus to AC for any creature within 30 feet. It can take an action to move up to its speed and then make an attack against the nearest hostile creature. If it takes damage, it immediately uses its reaction to heal itself by 50 hit points."
      },
      {
        "title": "Cold Vulnerability",
        "rules": "The golem is vulnerable to fire damage equal to double normal damage. It regenerates 10 hit points at the start of each turn unless it takes cold damage."
      }
    ],
    "levelRequirementReason": "To handle and command such a powerful guardian, a player must demonstrate significant prowess.",
    "vendorReason": "The outpost maintains close ties with the golem's creators, ensuring only those of proven worth can claim this protector.",
    "shippingDetail": "Special handling required; delivery takes three weeks during winter months.",
    "usage": {
      "activation": "Automatic once summoned by its master.",
      "duration": "Until dismissed or destroyed.",
      "endsWhen": "The golem is destroyed or its master dismisses it.",
      "charges": "Unlimited, recharged when the master rests."
    },
    "priceReason": "Balanced for a powerful yet reliable bodyguard that requires constant care and magical sustenance.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-23T17:03:10.299117+00:00",
    "aiReviewedAt": "2026-07-23T17:03:10.299117+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_sentient_ice_golem_upgrade": {
    "id": "red_winter_sentient_ice_golem_upgrade",
    "name": "Red Winter Sentient Ice Golem Upgrade (Fire Immunity)",
    "description": "The Red Winter Sentient Ice Golem Upgrade, crafted by Red Winter in a frigid ritual, infuses the golem’s ancient frame with an unyielding immunity to fire damage. The once-vulnerable guardian now stands as an impenetrable fortress against fiery assaults, its icy core resisting even the hottest flames. This upgrade requires a week of continuous magical work and specialized components, ensuring only those with a deep understanding of winter magic can wield it.",
    "price": 300000,
    "icon": "🔥",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Golem gains full immunity to Fire damage",
      "Requires 1 week of continuous ritual"
    ],
    "vendor": "red_winter_outpost",
    "shippedBy": "Frostwind Couriers",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Immunity to Fire Damage",
        "rules": "The golem is completely immune to any fire-based attacks or spells. This effect lasts until the end of each long rest."
      },
      {
        "title": "Continuous Ritual Requirement",
        "rules": "The upgrade can only be applied with a week-long continuous ritual, during which the golem must remain stationary and fully protected from any environmental hazards. Failure to maintain this condition voids the upgrade."
      }
    ],
    "levelRequirementReason": "This upgrade requires significant magical power and is intended for high-level guardians capable of performing such a demanding ritual.",
    "vendorReason": "Red Winter, being the forgeheart behind this upgrade, ensures only those who truly understand their craftsmanship can purchase it.",
    "shippingDetail": "The item is shipped via Frostwind Couriers and must be delivered to a location with sub-zero temperatures to maintain its integrity.",
    "usage": {
      "activation": "Instantaneous, upon successful completion of the week-long ritual",
      "duration": "Lasts until the end of each long rest",
      "endsWhen": "The golem completes a long rest or is exposed to environmental hazards that would disrupt the enchantment",
      "charges": "Unlimited, as it is an ongoing magical effect"
    },
    "priceReason": "This upgrade represents a significant investment in both time and resources, making it one of Red Winter's most sought-after relics.",
    "priceOriginal": 300000,
    "priceReviewedAt": "2026-07-23T17:03:30.122377+00:00",
    "aiReviewedAt": "2026-07-23T17:03:30.122377+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_snow_shaver": {
    "id": "red_winter_snow_shaver",
    "name": "Red Winter Snow Shaver",
    "description": "The Red Winter Snow Shaver is a hand-crafted tool, its gleaming red blades crafted from the frozen heart of a winter storm. This artisanal instrument can shave snow into perfect cones in mere minutes, and when used to chill drinks, it releases a frost that subtly enhances their flavor without overpowering. The blade's edge is so sharp it can freeze any stuck snowball, making it indispensable for wintry feasts.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧊",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Snow Coned",
      "Frosty Chill"
    ],
    "vendor": "red_winter_village",
    "shippedBy": "Frosty Flake File",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Snow Coned",
        "rules": "When used to shave snow into cones, the Red Winter Snow Shaver provides a +1 bonus to any attempt to prepare cold treats. This effect lasts until the next long rest."
      },
      {
        "title": "Frosty Chill",
        "rules": "When used to chill drinks, the blade releases a frost that reduces the temperature of the drink by 2 degrees Fahrenheit for up to an hour. This effect can only be used once per day and is instantaneous upon activation."
      }
    ],
    "levelRequirementReason": "This tool's complexity and craftsmanship demand at least first-level proficiency.",
    "vendorReason": "The Red Winter Village is known for its expertise in crafting tools that are perfectly suited to their harsh, wintry climate.",
    "shippingDetail": "Shipped via a courier who can withstand the coldest of winters, ensuring delivery even during the harshest blizzards.",
    "usage": {
      "activation": "A bonus action to shave snow into cones; instantaneous to chill drinks.",
      "duration": "Instantaneous for chilling drinks; +1 bonus lasts until next long rest.",
      "endsWhen": "Exhausted after use, or when the next long rest is completed.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The Red Winter Snow Shaver's craftsmanship and utility justify its price in terms of XP value.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T17:03:51.177620+00:00",
    "aiReviewedAt": "2026-07-23T17:03:51.177620+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_snowflake_identification": {
    "id": "red_winter_snowflake_identification",
    "name": "Red Winter Snowflake Identification",
    "description": "The Red Winter Snowflake Identification is a delicate glass vial filled with frozen winter snowflakes, each one meticulously preserved and labeled by the Red Winter Meteorologists. This tool grants you unparalleled insight into the unique patterns of snowflakes, allowing you to identify them with precision. However, this expertise comes at a cost—those who use it must endure a subtle social disadvantage when interacting with common folk, as they tend to obsess over minute details that others find trivial.",
    "category": "services",
    "price": 1000,
    "icon": "❄️",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Identify individual snowflakes",
      "Advantage on Charisma (Performance) checks involving winter themes"
    ],
    "vendor": "red_winter",
    "shippedBy": "Snowfall Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Snowflake Identification",
        "rules": "You gain advantage on Nature checks made in winter terrain, and you can identify the unique patterns of any snowflake you observe. This effect is passive and does not require an action."
      },
      {
        "title": "Charisma Boost for Winter Performances",
        "rules": "When you perform a Charisma (Performance) check related to winter themes, such as composing a song or delivering a speech about the season, you gain advantage on that check. This effect is limited to once per day."
      }
    ],
    "levelRequirementReason": "This tool requires minimal experience but offers significant benefits for anyone venturing into winter landscapes.",
    "vendorReason": "The Red Winter Meteorologists are renowned experts in the study of snowflakes, and their identification tools are in high demand among travelers and scholars alike.",
    "shippingDetail": "Delivered via the Snowfall Courier Service, known for its reliable winter deliveries across icy terrains.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Permanent until expended or destroyed.",
      "endsWhen": "Exhausted after one use per day.",
      "charges": "One daily charge"
    },
    "priceReason": "The Red Winter Snowflake Identification is a valuable tool for adventurers navigating winter terrains, offering both practical and social advantages.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T17:03:52.918290+00:00",
    "aiReviewedAt": "2026-07-23T17:03:52.918290+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_survival_pack": {
    "id": "red_winter_survival_pack",
    "name": "Red Winter Survival Pack",
    "description": "The Red Winter Survival Pack is a rugged, insulated kit forged to withstand sub-zero temperatures. Inside lies an array of heating stones that emit warmth for 48 hours upon activation, ensuring you're never caught in the icy grip of winter's chill. Crafted by the resilient Red Winter outpost, this pack is more than just a survival tool—it's a symbol of their enduring spirit against the harshest elements.",
    "price": 1000,
    "icon": "🥶",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Cold Resistance",
      "Heating Stones"
    ],
    "vendor": "red_winter_outpost",
    "shippedBy": "Heavy Canvas Bag",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cold Resistance",
        "rules": "This item grants full immunity to cold environmental effects for its duration. The effect is passive and does not require an action to activate."
      },
      {
        "title": "Heating Stones",
        "rules": "The heating stones within the pack emit warmth for 48 hours after activation. This effect is instantaneous upon use, lasts until depleted, and cannot be recharged."
      }
    ],
    "levelRequirementReason": "This survival kit is designed to assist adventurers at all levels who find themselves in sub-zero conditions.",
    "vendorReason": "The Red Winter outpost is renowned for its expertise in crafting gear that can endure the harshest winter climates.",
    "shippingDetail": "Ships within a Heavy Canvas Bag, ensuring your pack arrives safely and securely.",
    "usage": {
      "activation": "Instantaneous activation upon opening and using the heating stones.",
      "duration": "The heating stone effect lasts for 48 hours after activation, until depleted.",
      "endsWhen": "The heating stone effect ends when its warmth is exhausted or if the pack is damaged beyond repair.",
      "charges": "Unlimited uses; the heating stones can be used as many times as needed within their duration."
    },
    "priceReason": "This survival kit offers a rare and essential tool for adventurers facing sub-zero conditions, making it worth its price in experience points.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-23T17:04:12.412010+00:00",
    "aiReviewedAt": "2026-07-23T17:04:12.412010+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_thawing_agent": {
    "id": "red_winter_thawing_agent",
    "name": "Red Winter Thawing Agent (Large Scale)",
    "description": "The Red Winter Thawing Agent is a potent chemical that rapidly liquefies vast swaths of ice and snow, transforming wintry landscapes into treacherous rivers in a matter of minutes. Crafted by Red Winter, this agent requires careful deployment: once unleashed, it spreads over a mile-wide radius, turning the ground beneath into slippery mud or causing landslides if used on steep terrain. Its effects are immediate but fleeting, lasting only until the floodwaters recede, leaving behind a landscape forever altered by its passage.",
    "price": 1000,
    "icon": "🔥",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Vast Ice-Melting",
      "Flood and Landslide"
    ],
    "vendor": "red_winter_outpost",
    "shippedBy": "Tanker Truck",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Vast Ice-Melting",
        "rules": "Activates as an action. Melts all ice or snow within a 1-mile radius, creating a hazardous flood area that lasts for 1 hour. The floodwaters cause difficult terrain in the affected area and impose disadvantage on Strength checks to move through it."
      },
      {
        "title": "Flood and Landslide",
        "rules": "If used on steep terrain, there is a 50% chance of causing a landslide within the radius. Characters caught in the flood must make a DC 14 Dexterity saving throw or be pushed to the edge of the affected area."
      }
    ],
    "levelRequirementReason": "Requires sufficient expertise to safely deploy and manage the chemical's hazardous effects.",
    "vendorReason": "Red Winter Outpost is a resource hub for winter survival and has the means to provide this dangerous but essential item.",
    "shippingDetail": "Delivered by Red Winter's own tanker trucks, ensuring safe transport of the volatile agent.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour",
      "endsWhen": "The floodwaters recede or if a character is pushed out of the affected area due to a landslide.",
      "charges": "Unlimited"
    },
    "priceReason": "Reflects its rarity and the controlled environment required for its creation.",
    "priceOriginal": 150000,
    "priceReviewedAt": "2026-07-23T17:04:29.450762+00:00",
    "aiReviewedAt": "2026-07-23T17:04:29.450762+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_wario_ice_sculpture_kit": {
    "id": "red_winter_wario_ice_sculpture_kit",
    "name": "Red Winter Wario Ice Sculpture Kit",
    "description": "The Red Winter Wario Ice Sculpture Kit allows you to craft a life-sized ice sculpture of Wario, complete with his signature red overalls and yellow mustache. The sculpture is so detailed that it can be used as an ice lantern or a makeshift shelter in cold climates. It requires precise carving and a steady hand, but the result is a stunning work of art that brings warmth to even the coldest nights.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧊",
    "stock": 7,
    "rarity": "common",
    "effects": [
      "Craft Ice Sculpture",
      "Cold Weather Advantage"
    ],
    "vendor": "red_winter",
    "shippedBy": "Ice Road Truckers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Craft Ice Sculpture",
        "rules": "When you use this kit, you can create a life-sized ice sculpture of Wario. This requires a successful DC 15 Craft (sculpting) check and takes one hour to complete. The sculpture is considered an object with AC 10, HP equal to your proficiency bonus x 4, and vulnerability to fire damage."
      },
      {
        "title": "Cold Weather Advantage",
        "rules": "You gain a +2 bonus on Charisma checks made while in cold weather or wearing cold-weather gear. This effect lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This kit is designed for beginners and adventurers just starting their journey.",
    "vendorReason": "Red Winter specializes in cold-weather gear and accessories, making this kit a perfect addition to their offerings.",
    "shippingDetail": "Ships via Ice Road Truckers, known for delivering frozen goods across snowy terrains with precision.",
    "usage": {
      "activation": "Crafting the sculpture requires a DC 15 Craft (sculpting) check and takes one hour of work.",
      "duration": "The sculpture lasts until it melts or is destroyed.",
      "endsWhen": "The sculpture melts in one hour, or if damaged beyond repair.",
      "charges": "Unlimited uses; the kit can be used multiple times."
    },
    "priceReason": "This kit includes high-quality ice sculpting tools and materials, making it a valuable and well-priced addition to any adventurer's gear.",
    "priceOriginal": 4600,
    "priceReviewedAt": "2026-07-23T17:04:21.330027+00:00",
    "aiReviewedAt": "2026-07-23T17:04:21.330027+00:00",
    "aiReviewVersion": 1
  },
  "red_winter_wario_snow_globe": {
    "id": "red_winter_wario_snow_globe",
    "name": "Red Winter Wario Snow Globe",
    "description": "The Red Winter Wario Snow Globe is a meticulously crafted glass sphere filled with shimmering winter snow and a tiny, mischievous Wario figurine. When shaken vigorously, it releases a frosty, 5-foot-radius snow cloud that blankets nearby surfaces, making navigation tricky for those unprepared. The globe's contents are more than just a novelty; they imbue the wielder with the wisdom—or rather, the folly—of a seasoned yet misguided Wario. This figurine whispers bad advice to you once per day, influencing your decisions and choices in ways that can be both laughable and perilous.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌨️",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Snow Cloud",
      "Bad Advice"
    ],
    "vendor": "red_winter",
    "shippedBy": "Ice Road Truckers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Snow Cloud",
        "rules": "When shaken as a bonus action, the Red Winter Wario Snow Globe releases a frosty snow cloud in a 5-foot-radius sphere centered on you. This effect lasts for 1 minute and imposes disadvantage on all Dexterity (Sleight of Hand) checks made within its radius."
      },
      {
        "title": "Bad Advice",
        "rules": "Once per day, the Wario figurine inside whispers bad advice to you, granting you advantage on one failed Wisdom saving throw or Charisma check that represents a poor decision. The effects of this whisper last until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "The Red Winter Wario Snow Globe is designed for beginners to have fun with its whimsical yet challenging effects.",
    "vendorReason": "Red Winter, known for its quirky and themed merchandise, naturally sells this festive snow globe.",
    "shippingDetail": "The Ice Road Truckers deliver the Red Winter Wario Snow Globe with special care during the winter months, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Bonus Action (Shake)",
      "duration": "1 minute (Snow Cloud)",
      "endsWhen": "Ends when you no longer hold the globe and are not shaking it",
      "charges": "Unlimited"
    },
    "priceReason": "The Red Winter Wario Snow Globe is priced at 1000 XP, reflecting its fun yet slightly disruptive effects.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-23T17:04:08.042041+00:00",
    "aiReviewedAt": "2026-07-23T17:04:08.042041+00:00",
    "aiReviewVersion": 1
  },
  "refijia_android_chassis": {
    "id": "refijia_android_chassis",
    "name": "Refijian Hyper-Durable Android Chassis",
    "description": "The Refijian Hyper-Durable Android Chassis stands as a testament to synthetic ingenuity, crafted from advanced alloys and durable synthetics that can withstand the harshest environments. This chassis is not merely a machine; it's an artifact imbued with the resilience of its creators, the Refijians, who once walked among the stars. It grants immunity to poison and disease, and no longer ages or decays, ensuring your consciousness remains untarnished for eternity.",
    "price": 1000,
    "icon": "🤖",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Immunity to Poison/Disease",
      "No Aging Effects"
    ],
    "vendor": "refijian_lab",
    "shippedBy": "Stasis Pod",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Immunity to Poison/Disease",
        "rules": "The chassis provides a +5 bonus to saving throws against poison and disease. This effect is permanent until the chassis is destroyed."
      },
      {
        "title": "No Aging Effects",
        "rules": "The chassis does not age or decay, maintaining its pristine condition indefinitely. The owner's appearance remains unchanged as well."
      }
    ],
    "levelRequirementReason": "Only those of great experience and power can harness the Refijian Hyper-Durable Android Chassis, ensuring it is reserved for high-level adventurers.",
    "vendorReason": "As creators of this masterpiece, Refijian Lab ensures only the most capable individuals have access to such a powerful artifact.",
    "shippingDetail": "Ships via Stasis Pod, ensuring safe delivery and preservation during transit.",
    "usage": {
      "activation": "Passive effect upon installation of consciousness or AI.",
      "duration": "Permanent until the chassis is destroyed.",
      "endsWhen": "Destroyed by damage exceeding its hit points or when removed from play.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This price reflects the extraordinary craftsmanship and advanced technology required to create such a durable and resilient chassis, suitable for even the most powerful of adventurers.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-23T17:05:05.689551+00:00",
    "aiReviewedAt": "2026-07-23T17:05:05.689551+00:00",
    "aiReviewVersion": 1
  },
  "refijia_astral_couchsurfing": {
    "id": "refijia_astral_couchsurfing",
    "name": "Refijia Astral Couchsurfing",
    "description": "The Refijia Astral Couchsurfing offers a unique opportunity to crash on someone's celestial couch, where you can safely rest and recover in the Astral Plane. This service not only grants you a night of rejuvenation but also places you under an obligating favor with your host, who might have peculiar quirks or requests. The experience is both surreal and rewarding, leaving you with memories that are as strange as they are unforgettable.",
    "category": "services",
    "price": 1000,
    "icon": "🛋️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Safe Astral Rest",
      "Host's Quirky Favor"
    ],
    "vendor": "refijia",
    "shippedBy": "Astral Projection",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Safe Astral Rest",
        "rules": "You gain the benefits of a long rest in the Astral Plane. The duration is instantaneous upon arrival, and you must remain on the couch for at least one hour to fully recover. You are immune to environmental hazards during this time."
      },
      {
        "title": "Host's Quirky Favor",
        "rules": "You owe a minor favor to your host. This obligation can be anything from a simple meal, an odd task, or even a peculiar favor that the host might have in mind. The exact nature of the favor is up to them."
      }
    ],
    "levelRequirementReason": "This service is accessible to low-level adventurers who need rest and recovery but are not yet capable of more dangerous quests.",
    "vendorReason": "Refijia Hospitality specializes in providing unique and magical services for weary travelers, ensuring they can recover safely and meet interesting characters along the way.",
    "shippingDetail": "The service is delivered instantaneously via astral projection. The host must be within a reachable distance of the Astral Plane to provide this service.",
    "usage": {
      "activation": "Passive upon arrival at your host's location in the Astral Plane.",
      "duration": "Instantaneous for rest, ongoing until you leave the couch.",
      "endsWhen": "You choose to end the effect by leaving the couch or if you are interrupted by a hostile entity.",
      "charges": "Unlimited, but limited to one per day per host."
    },
    "priceReason": "This price reflects the magical energy and resources required for the astral projection service as well as the unique favor owed to your host.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-23T17:04:55.080486+00:00",
    "aiReviewedAt": "2026-07-23T17:04:55.080486+00:00",
    "aiReviewVersion": 1
  },
  "refijia_bio_limbs_kit": {
    "id": "refijia_bio_limbs_kit",
    "name": "Refijian Cybernetic Limb Kit",
    "description": "The Refijian Cybernetic Limb Kit arrives in pristine condition, its synthetic limbs gleaming with a metallic sheen that hints at their advanced engineering. Crafted from biocompatible materials and powered by the latest Refijian technology, these limbs offer more than just strength—they are the pinnacle of augmentative surgery. Each limb is fully customizable, allowing you to choose between enhanced weaponry or specialized tools, turning every prosthetic into a tool of your choosing.",
    "price": 1000,
    "icon": "🦾",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Replace Lost Limbs",
      "Customizable Enhancements"
    ],
    "vendor": "refijian_lab",
    "shippedBy": "Medical Container",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Replace Lost Limbs",
        "rules": "Upon activation, the kit allows for the surgical installation of one or more synthetic limbs. The procedure grants a +4 bonus to Strength and a +2 AC bonus while the limb is installed. This effect lasts until the next long rest."
      },
      {
        "title": "Customizable Enhancements",
        "rules": "The limbs can be customized immediately after installation, allowing you to choose between enhanced weaponry or specialized tools. Once chosen, this customization cannot be changed for 24 hours without disassembling and reconfiguring the limb, a procedure that requires at least 8 hours."
      }
    ],
    "levelRequirementReason": "The advanced technology and surgical precision required to install these limbs necessitate a minimum character level of 15.",
    "vendorReason": "Refijian Lab is renowned for its cutting-edge medical technology and expertise in prosthetic surgery, making it the only vendor capable of selling such advanced kits.",
    "shippingDetail": "The limbs are shipped securely within a specialized Medical Container that ensures their integrity during transit.",
    "usage": {
      "activation": "This kit can be activated once per short rest by a character with the necessary medical knowledge and resources.",
      "duration": "Instantaneous, lasting until the next long rest.",
      "endsWhen": "The effect ends if the character takes any damage or if they disassemble their new limb(s).",
      "charges": "Unlimited, as each kit includes all necessary components for one activation."
    },
    "priceReason": "This price reflects the advanced technology and specialized medical expertise required to produce and install such limbs.",
    "priceOriginal": 350000,
    "priceReviewedAt": "2026-07-23T17:05:03.641170+00:00",
    "aiReviewedAt": "2026-07-23T17:05:03.641170+00:00",
    "aiReviewVersion": 1
  },
  "refijia_consciousness_backup": {
    "id": "refijia_consciousness_backup",
    "name": "Refijian Consciousness Backup (Manual)",
    "description": "The Refijian Consciousness Backup (Manual) is a crystalline shard, crafted by the meticulous artisans of Refijia. It captures your memories in a slow, deliberate process, ensuring each moment is preserved with precision. Should you perish, these stored memories can be transferred to a new body or clone within one week, allowing for an almost seamless transition into a fresh form. This fragile artifact is made from the purest refijian crystal and imbued with ancient Refijian lore.",
    "price": 1000,
    "icon": "💾",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Memory Backup",
      "Resurrection Transfer"
    ],
    "vendor": "refijian_lab",
    "shippedBy": "Refijian Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Memory Backup",
        "rules": "This process allows for the backup of your memories onto a crystalline shard. The backup is stored for one year before it begins to degrade. Requires an hour-long session and a successful DC 15 Wisdom (Insight) check."
      },
      {
        "title": "Resurrection Transfer",
        "rules": "In case of death, this shard can be used to transfer your memories into a new body or clone within one week. This process requires the cooperation of a Refijian Healer and a successful DC 20 Wisdom (Medicine) check."
      }
    ],
    "levelRequirementReason": "Requires basic concentration and skill in memory preservation.",
    "vendorReason": "As the creators of this technology, Refijian Lab ensures only their clients have access to such advanced techniques.",
    "shippingDetail": "Ships within one week with expedited delivery for an additional cost.",
    "usage": {
      "activation": "One hour-long session per year for memory backup, or during the resurrection process.",
      "duration": "Memory backup lasts until overwritten. Resurrection transfer takes place over one week.",
      "endsWhen": "Memories are either overwritten by new ones or the transfer to a new body is completed.",
      "charges": "Unlimited uses with proper care."
    },
    "priceReason": "Balanced at a cost of 1000 XP, reflecting its intricate craftsmanship and the value of preserving one's memories.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T17:04:43.251142+00:00",
    "aiReviewedAt": "2026-07-23T17:04:43.251142+00:00",
    "aiReviewVersion": 1
  },
  "refijia_consciousness_clone": {
    "id": "refijia_consciousness_clone",
    "name": "Refijian Consciousness Clone (Digital Backup)",
    "description": "The Refijian Consciousness Clone is a secure digital backup of your mind, stored within an encrypted data crystal. It is crafted by the advanced Refijians using their unique biotechnological processes. Should you perish, this clone can be uploaded to one of their nearest hubs, ensuring your consciousness is preserved and returned to your body after a week-long process. However, the backup expires after five years unless renewed, making it imperative for users to maintain its longevity.",
    "price": 1000,
    "icon": "💾",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Mind Preservation",
      "Temporary Uploading"
    ],
    "vendor": "refijian_lab",
    "shippedBy": "Crystalline Drive",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Mind Preservation",
        "rules": "If you die, your consciousness can be uploaded to the nearest Refijian hub within one week. This process requires no action from you and is entirely automated by their advanced technology."
      },
      {
        "title": "Temporary Uploading",
        "rules": "The backup expires after five years if not renewed. During this time, it remains dormant unless activated manually, at which point it can be uploaded to a hub immediately."
      }
    ],
    "levelRequirementReason": "This item requires significant mental fortitude and technological expertise, making level 15 a prudent minimum.",
    "vendorReason": "Refijian Lab specializes in advanced biotechnological items, including this crucial consciousness backup device.",
    "shippingDetail": "The data crystal is carefully packed and shipped via Crystalline Drive's secure, high-speed courier service, ensuring safe delivery within a week.",
    "usage": {
      "activation": "Automatic upon death; manual activation for immediate upload.",
      "duration": "Instantaneous upload or dormant until manually activated.",
      "endsWhen": "Backup expires after five years unless renewed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced price reflects the item's rarity and utility, ensuring it remains a valuable but not overpowered addition to any character's inventory.",
    "priceOriginal": 300000,
    "priceReviewedAt": "2026-07-23T17:05:10.746487+00:00",
    "aiReviewedAt": "2026-07-23T17:05:10.746487+00:00",
    "aiReviewVersion": 1
  },
  "refijia_consciousness_transfer": {
    "id": "refijia_consciousness_transfer",
    "name": "Refijian Consciousness Transfer (Interspecies)",
    "description": "The Refijian Consciousness Transfer allows you to detach your mind from your current body and transfer it into a new, customized form—organic or synthetic. In a state of induced coma for three weeks, your mind undergoes the process of realigning with its new vessel. The procedure is meticulously crafted by the advanced surgeons at Refijia, ensuring that you retain all your memories, proficiencies, and gain +1 maximum hit points in your new form.",
    "price": 1000,
    "icon": "🧠",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Mind Transfer",
      "Memory Retention"
    ],
    "vendor": "refijian_lab",
    "shippedBy": "Surgical Bay",
    "levelRequirement": 19,
    "effectDetails": [
      {
        "title": "Mind Transfer",
        "rules": "This is a one-time procedure that requires you to be in a state of induced coma for three weeks. You must make a DC 25 Wisdom (Medicine) check each day during the process. Failure on this check results in the procedure failing and potentially causing brain damage."
      },
      {
        "title": "Memory Retention",
        "rules": "You retain all your memories, proficiency ranks, and gain +1 maximum hit points in your new form. This effect is permanent once successfully completed."
      }
    ],
    "levelRequirementReason": "This procedure requires a high level of discipline and physical condition, making it suitable only for characters who have reached at least 19th level.",
    "vendorReason": "Only the advanced surgeons at Refijia Lab possess the knowledge and technology to perform such an intricate operation.",
    "shippingDetail": "The procedure is shipped directly from Refijia, ensuring a safe and controlled environment for the coma state required during the transfer.",
    "usage": {
      "activation": "This is a one-time use only; you must be in a state of induced coma for three weeks. The procedure cannot be interrupted or repeated.",
      "duration": "Instantaneous (requires a 3-week coma period)",
      "endsWhen": "The procedure fails on a failed Wisdom (Medicine) check each day during the process",
      "charges": "Unlimited, but only one use per character"
    },
    "priceReason": "This item's price is adjusted to be within reach for characters of high level, reflecting its rarity and the advanced technology required.",
    "priceOriginal": 800000,
    "priceReviewedAt": "2026-07-23T17:05:41.770225+00:00",
    "aiReviewedAt": "2026-07-23T17:05:41.770225+00:00",
    "aiReviewVersion": 1
  },
  "refijia_digital_clone_host": {
    "id": "refijia_digital_clone_host",
    "name": "Refijian Digital Clone Host (Empty Shell)",
    "description": "The Refijian Digital Clone Host is a sleek, synthetic pod designed to house and nurture any digital consciousness. Crafted by the advanced Refijian civilization, this empty shell features an internal matrix that can interface with organic or artificial minds. Its base stats are perfect for any consciousness that might occupy it; all six abilities score 16. The pod's synthetic material is composed of a rare alloy that enhances neural compatibility and data transfer efficiency.",
    "price": 1000,
    "icon": "🤖",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Perfect Host Body",
      "Base Stats +16"
    ],
    "vendor": "refijian_lab",
    "shippedBy": "Stasis Pod",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Perfect Host Body",
        "rules": "When an occupied host body is destroyed, the consciousness can be transferred to a new Refijian Digital Clone Host. This transfer requires a successful DC 25 Intelligence (Arcana) check and takes one hour."
      },
      {
        "title": "Base Stats +16",
        "rules": "While in this host body, the user gains a +4 bonus to all ability checks. This effect lasts until the host is destroyed or replaced with another Refijian Digital Clone Host."
      }
    ],
    "levelRequirementReason": "The technology and mental discipline required for such an advanced process necessitate at least Level 17.",
    "vendorReason": "Refijian Lab is the only known source of these highly specialized and intricate creations.",
    "shippingDetail": "The pod is shipped in a specially insulated container to ensure its synthetic integrity during transit.",
    "usage": {
      "activation": "Instantaneous, requires a successful DC 25 Intelligence (Arcana) check for transfer.",
      "duration": "Until the host body is destroyed or replaced with another Refijian Digital Clone Host.",
      "endsWhen": "Host destruction or replacement.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects its advanced technology and the unique abilities it provides.",
    "priceOriginal": 600000,
    "priceReviewedAt": "2026-07-23T17:05:19.436834+00:00",
    "aiReviewedAt": "2026-07-23T17:05:19.436834+00:00",
    "aiReviewVersion": 1
  },
  "refijia_master_voice_modulator": {
    "id": "refijia_master_voice_modulator",
    "name": "Refijia Master Voice Modulator",
    "description": "The Refijia Master Voice Modulator is a throat-worn device, crafted from polished obsidian and lapis lazuli. It hums with the energy of countless imitations, capable of flawlessly replicating any voice heard for up to 24 hours. This artifact can bypass voice-activated wards or security systems, making it an invaluable tool for spies and adventurers alike. Its origins lie in the ancient workshops of Refijia, known for their unparalleled craftsmanship.",
    "price": 1000,
    "icon": "🎤",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Voice Replication",
      "Bypass Voice Security"
    ],
    "vendor": "refijian_tailor",
    "shippedBy": "Neck Bracer Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Voice Replication",
        "rules": "The user can activate this feature as a bonus action to replicate any voice heard within the past hour. The effect lasts for up to 24 hours, and it can be used once per long rest."
      },
      {
        "title": "Bypass Voice Security",
        "rules": "Activating the device allows the user to bypass voice-activated wards or security systems as a bonus action. This feature is usable twice before requiring a short rest to recharge."
      }
    ],
    "levelRequirementReason": "The intricate craftsmanship and magical properties of this device necessitate at least first-level proficiency.",
    "vendorReason": "As the creators of this artifact, Refijia Tailor is the only vendor capable of selling it.",
    "shippingDetail": "The device is shipped securely in a custom leather case to protect its delicate components during transit.",
    "usage": {
      "activation": "Bonus action (Voice Replication); Bonus action (Bypass Voice Security)",
      "duration": "Up to 24 hours or until used; Instantaneous",
      "endsWhen": "Used up, recharged after a short rest; Ends upon activation of the other feature",
      "charges": "Once per long rest for Voice Replication; Twice before requiring a short rest recharge"
    },
    "priceReason": "This device represents a rare and valuable combination of craftsmanship, magic, and functionality, making it an expensive but worthwhile investment.",
    "priceOriginal": 90000,
    "priceReviewedAt": "2026-07-23T17:05:57.526380+00:00",
    "aiReviewedAt": "2026-07-23T17:05:57.526380+00:00",
    "aiReviewVersion": 1
  },
  "refijia_mirror_polish_spoon": {
    "id": "refijia_mirror_polish_spoon",
    "name": "Refijia Mirror Polish Spoon",
    "description": "The Refijia Mirror Polish Spoon is crafted from polished obsidian and silver, its handle etched with arcane symbols. This spoon not only stirs your candy but also polishes it to a gleaming sheen, granting you advantage on checks related to reflective surfaces. Its mirror-like finish can reflect your face in a dazzling display, causing creatures within 10 feet to be distracted for 1 round if they look at the spoon.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍭",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Advantage on reflective checks",
      "Distracting mirror reflection"
    ],
    "vendor": "refijia_workshop",
    "shippedBy": "Shiny Stir Sheath",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reflective Advantage",
        "rules": "When you make a check related to reflective surfaces, you gain advantage. This effect lasts until the start of your next turn."
      },
      {
        "title": "Dazzling Reflection",
        "rules": "As an action, you can use the spoon to create a dazzling reflection that causes creatures within 10 feet to be distracted for 1 round. They must succeed on a DC 13 Wisdom saving throw or become distracted."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners, aiding them in their early crafting and social interactions.",
    "vendorReason": "Refijia specializes in mirrors and polished artifacts, making this spoon one of its signature products.",
    "shippingDetail": "Delivered by the Shiny Stir Sheath with a complimentary mirror polish kit for new customers.",
    "usage": {
      "activation": "Action or bonus action to use reflective advantage; action to create dazzling reflection",
      "duration": "Reflective advantage lasts until start of next turn, dazzling reflection ends when creatures are no longer within range",
      "endsWhen": "Used up all charges or expended after one use",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the item's utility in crafting and social situations without being overpowered.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T17:05:39.077942+00:00",
    "aiReviewedAt": "2026-07-23T17:05:39.077942+00:00",
    "aiReviewVersion": 1
  },
  "refijia_mirror_shard_vest": {
    "id": "refijia_mirror_shard_vest",
    "name": "Refijia Mirror Shard Vest",
    "description": "The Refijia Mirror Shard Vest is a vest embedded with countless reflective shards that catch and reflect light like a mirror. Crafted by the Mirror Crafters from shards gathered in the ancient, reflective pools of the desert, this vest grants its wearer an edge against visual threats. It not only deflects gaze attacks but also grants advantage on saving throws versus illusions, ensuring the wearer remains steadfast under deceitful magic.",
    "price": 1000,
    "icon": "🧥",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reflective Deflection",
      "Illusion Resistance"
    ],
    "vendor": "refijia_hall",
    "shippedBy": "Reflective Wrap",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Reflective Deflection",
        "rules": "Once per day as a reaction to an attack that targets you with a gaze ability, this vest deflects the attack back at its source. The vest's shards cut and reflect the attack, dealing damage equal to 1d6 + your Dexterity modifier to the attacker."
      },
      {
        "title": "Illusion Resistance",
        "rules": "You gain advantage on saving throws against any illusion spell or effect. This benefit persists for a short duration after you have been exposed to an illusion, ensuring that even after the initial exposure, you remain unswayed by its effects."
      }
    ],
    "levelRequirementReason": "The vest requires a level of at least 6 to harness the power of its reflective shards effectively.",
    "vendorReason": "Refijia Hall, known for their expertise in mirror-based magic and armor crafting, is the only place where such a vest can be found.",
    "shippingDetail": "Ships via Reflective Wrap within 3 days of purchase. The shipment includes a special protective case to ensure safe delivery.",
    "usage": {
      "activation": "As a reaction to an attack with a gaze ability, or passively for advantage on saving throws against illusions.",
      "duration": "Instantaneous; lasts until the start of your next turn after using the vest's effects.",
      "endsWhen": "The vest’s effects end when you are no longer exposed to the relevant threat or when your vest is damaged beyond repair.",
      "charges": "Unlimited, but only one use per day."
    },
    "priceReason": "The vest's price reflects its rare crafting material and the unique enchantments that make it a powerful yet balanced addition to any adventurer’s arsenal.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-23T17:06:03.719510+00:00",
    "aiReviewedAt": "2026-07-23T17:06:03.719510+00:00",
    "aiReviewVersion": 1
  },
  "refijia_neural_interface_lock": {
    "id": "refijia_neural_interface_lock",
    "name": "Refijian Neural Interface Lock",
    "description": "The Refijian Neural Interface Lock is a sleek, metallic device adorned with intricate engravings that whisper secrets of ancient technology. Crafted by the precision engineers of Refijia, it can be activated only through a precise sequence of neural signals, ensuring even the most secure doors remain inviolate unless the intended user approaches. Once engaged, its wards are unbreachable without the correct mental signature, safeguarding data streams and physical locks with unparalleled security.",
    "price": 1000,
    "icon": "🔒",
    "stock": 4,
    "rarity": "legendary",
    "effects": [
      "Sealed Impenetrability",
      "Mental Activation Required"
    ],
    "vendor": "refijian_lab",
    "shippedBy": "Small Console Express Delivery",
    "levelRequirement": 0,
    "effectDetails": [
      {
        "title": "Sealed Impenetrability",
        "rules": "The lock can be activated only by the intended user, who must focus their mental energy to align with its neural patterns. Once engaged, it forms an unbreakable seal on any door or safe it is installed upon, requiring a successful DC 18 Wisdom (Insight) check from anyone attempting to bypass it through non-magical means."
      },
      {
        "title": "Mental Activation Required",
        "rules": "The lock requires the user to focus their mental energy by concentrating for 1 minute. During this time, they must make a DC 15 Intelligence (Investigation) check to successfully align with the lock's neural interface. Once activated, it remains secure until its activation is ended or the charges are depleted."
      }
    ],
    "levelRequirementReason": "The lock does not require any character level as it operates purely on the user's mental energy.",
    "vendorReason": "Refijian Lab is renowned for its cutting-edge technology and specializes in creating secure access solutions like the Neural Interface Lock.",
    "shippingDetail": "Delivered via Small Console's high-security courier service, ensuring that the lock arrives safely and without interruption.",
    "usage": {
      "activation": "The user must focus their mental energy to align with the lock's neural interface for 1 minute.",
      "duration": "Instantaneous activation; lasts until ended or charges are depleted.",
      "endsWhen": "Activation ends when the intended user's concentration is broken.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The lock is priced at 1000 XP, reflecting its secure functionality and the advanced technology required for its creation.",
    "priceOriginal": 150000,
    "priceReviewedAt": "2026-07-23T17:06:04.244370+00:00",
    "aiReviewedAt": "2026-07-23T17:06:04.244370+00:00",
    "aiReviewVersion": 1
  }
};
