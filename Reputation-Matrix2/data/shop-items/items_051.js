// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_051 = {
  "zebrabwe_herd_alliance": {
    "id": "zebrabwe_herd_alliance",
    "name": "Zebrabwe Great Herd Military Alliance",
    "description": "The Zebrabwe Great Herd Military Alliance is a rare parchment scroll forged from the collective will of thousands of zebras. Upon activation, it summons an alliance of 2,000 highly trained Zebra cavalry within a 10-mile radius for one day. The zebras are renowned for their swift and unyielding charge against unmounted foes, making them formidable in any conflict. Crafted by the Zebrabwe Plains Trader from sacred materials found deep within the plains, this scroll is a testament to ancient alliances and military prowess.",
    "price": 51000,
    "icon": "⚔️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Summon 2,000 allied Zebra cavalry (1 day duration)",
      "Highly effective against unmounted foes"
    ],
    "vendor": "zebrabwe_plains_trader",
    "shippedBy": "Tribal Chieftain",
    "levelRequirement": 5,
    "factionBonus": {
      "military": 80
    },
    "effectDetails": [
      {
        "title": "Cavalry Summoning",
        "rules": "Activates on a bonus action. The summoned zebras are present for one day, after which they return to their herds. This effect can only be used once per year."
      },
      {
        "title": "Mounted Zebrabwe Charge",
        "rules": "The summoned cavalry gains a +2 bonus to attack rolls against unmounted targets and deal an additional 1d6 damage on successful hits."
      }
    ],
    "levelRequirementReason": "Requires at least level 5 to handle the strategic and tactical demands of commanding such a large alliance.",
    "vendorReason": "The Zebrabwe Plains Trader has exclusive access to ancient forges where these scrolls are created.",
    "shippingDetail": "Delivered by the Tribal Chieftain, ensuring safe passage through treacherous terrain.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 day",
      "endsWhen": "After one day, zebras return to their herds",
      "charges": "Once per year"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the rarity and strategic value of such an alliance.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-23T20:44:47.376547+00:00",
    "aiReviewedAt": "2026-07-23T20:44:47.376547+00:00",
    "aiReviewVersion": 1
  },
  "zebrabwe_herd_charm": {
    "id": "zebrabwe_herd_charm",
    "name": "Zebrabwe Herd Charm",
    "description": "The Zebrabwe Herd Charm is a sleek, polished bone whistle carved from the ribs of a zebrabwe. It resonates with the ancient calls of the savannah and can summon up to 10 large herbivores, such as wildebeests or zebras, for your temporary use in just moments. These summoned herds are docile and serve their purpose before returning to the wild after an hour, leaving you with a wealth of fresh food or a swift mode of travel across the plains. Crafted by skilled artisans of Zebrabwe, this charm is a testament to the harmony between man and nature.",
    "price": 3100,
    "icon": "🦓",
    "stock": 9,
    "rarity": "rare",
    "effects": [
      "Summons large herbivores",
      "Temporary travel or sustenance"
    ],
    "vendor": "zebrabwe_plains_trader",
    "shippedBy": "Swiftwind Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Summon Large Herbivores",
        "rules": "Activates as an action. Summons up to 10 non-combat, docile large herbivores (such as wildebeests) within 30 feet for 1 hour. The summoned creatures are under your temporary command and will return to their natural habitat after this duration."
      },
      {
        "title": "Travel or Sustenance",
        "rules": "The summoned herd can be used for quick travel across the savannah or as a source of fresh food, providing enough sustenance for up to 10 people. The creatures are not under your control and will disperse after an hour."
      }
    ],
    "levelRequirementReason": "This charm is suitable for adventurers who might need quick assistance or resources but lack the experience to handle more powerful items.",
    "vendorReason": "The Zebrabwe Plains Trader specializes in crafting and trading goods that connect travelers with the natural world, making this item a perfect fit for their inventory.",
    "shippingDetail": "Ships within one week via Swiftwind Courier's express service. The charm is carefully packed to ensure it arrives in pristine condition.",
    "usage": {
      "activation": "Activates as an action.",
      "duration": "1 hour.",
      "endsWhen": "The summoned herd returns to nature after the duration, or if dismissed by a command word.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP, reflecting the charm's utility in providing immediate aid without being overly powerful.",
    "priceOriginal": 11000,
    "priceReviewedAt": "2026-07-23T20:45:22.513918+00:00",
    "aiReviewedAt": "2026-07-23T20:45:22.513918+00:00",
    "aiReviewVersion": 1
  },
  "zebrabwe_herd_leadership_sash": {
    "id": "zebrabwe_herd_leadership_sash",
    "name": "Zebrabwe Herd Leadership Sash",
    "description": "The Zebrabwe Herd Leadership Sash is a regal sash woven from the finest fibers of the zebrabwe, each strand imbued with the spirit of unity and loyalty. This sash can command up to twenty beasts of burden or herbivores (CR 1/2 or lower), compelling them to follow complex commands without hesitation. Crafted by Zebrabwe using ancient plains magic, this item is a symbol of leadership on the open steppes where it finds its home.",
    "price": 8000,
    "icon": "👑",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Command Grazers",
      "Influence Loyalty"
    ],
    "vendor": "zebrabwe_plains_trader",
    "shippedBy": "Swift Wind Messengers",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Command Grazers",
        "rules": "The wearer can issue up to three complex commands to up to twenty beasts of burden or herbivores (CR 1/2 or lower) within 30 feet. These animals obey the command for 1 minute, after which they are free to act as they choose. The sash has no effect on creatures with an Intelligence score of 6 or higher."
      },
      {
        "title": "Influence Loyalty",
        "rules": "While wearing this sash, the wearer gains advantage on Persuasion checks made against animals. This effect lasts for a number of hours equal to half the user's proficiency bonus (rounded down)."
      }
    ],
    "levelRequirementReason": "Requires at least 4th level to effectively command and influence creatures.",
    "vendorReason": "The Zebrabwe Plains Trader is known for their unique and magical items, especially those originating from the zebrabwe plains.",
    "shippingDetail": "Ships via Swift Wind Messengers, ensuring safe delivery within a week of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous command; 1 minute influence effect per day",
      "endsWhen": "The command ends when the sash is removed or the creatures are no longer within range. The influence lasts for up to one hour before it expires.",
      "charges": "Unlimited, but only three commands can be issued each day."
    },
    "priceReason": "Balanced price reflects its epic rarity and unique magical properties without being overpowered.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-23T20:44:53.480465+00:00",
    "aiReviewedAt": "2026-07-23T20:44:53.480465+00:00",
    "aiReviewVersion": 1
  },
  "zebrabwe_migration_guide": {
    "id": "zebrabwe_migration_guide",
    "name": "Zebrabwe Migration Guide (Predictive)",
    "description": "The Zebrabwe Migration Guide (Predictive) is a leather scroll bound with runes of ancient magic. It contains detailed, shimmering maps that predict the precise paths and migration patterns of magical beasts for the next five years. Crafted by the Zebrawwes from the heart of the Plains, it grants perfect stealth advantage when tracking or ambushing these creatures within their predicted zones. It is invaluable to hunters and protectors who must navigate the shifting ecologies of the wild.",
    "price": 8100,
    "icon": "🗺️",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Perfect Stealth Advantage",
      "Predictive Tracking"
    ],
    "vendor": "zebrabwe_plains_trader",
    "shippedBy": "Leather Scroll",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Perfect Stealth Advantage",
        "rules": "When you use this item within a predicted zone, you gain a +2 bonus to Dexterity (Stealth) checks for the duration of one long rest."
      },
      {
        "title": "Predictive Tracking",
        "rules": "You can spend 1 hour studying the maps and make a Wisdom (Survival) check. On a success, you determine the exact location of any magical beast within its predicted zone and know their movement for the next three days."
      }
    ],
    "levelRequirementReason": "Requires significant knowledge of tracking and survival to interpret and utilize the guide effectively.",
    "vendorReason": "The Zebrawwes are master trackers who have honed their skills over generations, making them the only ones capable of creating such a precise predictive tool.",
    "shippingDetail": "Ships via enchanted scroll courier, ensuring safe and swift delivery to your doorstep.",
    "usage": {
      "activation": "Studying for one hour",
      "duration": "One long rest or three days (whichever comes first)",
      "endsWhen": "The map's predicted zones expire after five years",
      "charges": "Unlimited, but requires recharging by studying the maps anew"
    },
    "priceReason": "Balanced price reflects its utility in survival and hunting without granting game-breaking advantages.",
    "priceOriginal": 40000,
    "priceReviewedAt": "2026-07-23T20:44:47.160428+00:00",
    "aiReviewedAt": "2026-07-23T20:44:47.160428+00:00",
    "aiReviewVersion": 1
  },
  "zebrabwe_plains_settlement_charter": {
    "id": "zebrabwe_plains_settlement_charter",
    "name": "Zebrabwe Plains Settlement Charter",
    "description": "The Zebrabwe Plains Settlement Charter is a parchment scroll imbued with the sacred essence of the Zebrabwe tribe's ancestors, granting permission to found and protect a settlement on their land. The charter ensures mutual defense between your people and the Zebrabwe, who have long protected travelers through this vast grassland. With this document, you can set up a thriving outpost, knowing it is taxed at only 5% of its income, fostering prosperity under the watchful gaze of the zebras.",
    "price": 51000,
    "icon": "🏛️",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Mutual Defense Pact",
      "Reduced Tax Rate"
    ],
    "vendor": "zebrabwe_plains_trader",
    "shippedBy": "Official Accord",
    "levelRequirement": 1,
    "factionBonus": {
      "residence": 70
    },
    "effectDetails": [
      {
        "title": "Mutual Defense Pact",
        "rules": "When activated by a member of your faction, this charter activates a pact that requires Zebrabwe patrols to provide defense against any threats to the settlement. The effect lasts until the settlement is no longer in need of protection or the charter is destroyed."
      },
      {
        "title": "Reduced Tax Rate",
        "rules": "This charter reduces the settlement's tax rate by 5% for its first year, after which it reverts to standard rates unless renewed. No save DC required; this effect applies passively and does not require activation."
      }
    ],
    "levelRequirementReason": "The charter requires a minimum level of understanding and respect from the applicant's faction.",
    "vendorReason": "This trader is trusted by both the Zebrabwe and visiting travelers, making him a reliable source for such important documents.",
    "shippingDetail": "The charter is delivered via the Official Accord courier service, ensuring safe transport through treacherous lands.",
    "usage": {
      "activation": "Passive effect; requires no activation once the settlement is established.",
      "duration": "Permanent until destroyed or settlement no longer needs protection.",
      "endsWhen": "Settlement ceases to be protected by Zebrabwe patrols, or charter is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the historical and cultural value of the charter, as well as the protection it offers.",
    "priceOriginal": 300000,
    "priceReviewedAt": "2026-07-23T20:45:19.225793+00:00",
    "aiReviewedAt": "2026-07-23T20:45:19.225793+00:00",
    "aiReviewVersion": 1
  },
  "zebrabwe_plains_territory_deed": {
    "id": "zebrabwe_plains_territory_deed",
    "name": "Zebrabwe Plains Territory Deed (5 Sq Miles)",
    "description": "This parchment map, stamped with the Zebrabwe insignia, grants ownership over five square miles of fertile plains. The deed allows for the establishment of a small town or outpost where you can levy taxes and enforce local laws. The territory is guaranteed protection by the nomadic Zebrabwe patrols who roam these lands, ensuring your claim against all comers. This relic is crafted from parchment woven with fibers from the zebrabwe grasslands themselves, imbued with the spirit of the plains.",
    "price": 52000,
    "icon": "🏞️",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Establish a small town or outpost",
      "Guaranteed protection by local Zebrabwe patrols"
    ],
    "vendor": "zebrabwe_plains_trader",
    "shippedBy": "Stamped Hide Courier",
    "levelRequirement": 5,
    "factionBonus": {
      "economy": 40
    },
    "effectDetails": [
      {
        "title": "Settlement Establishment",
        "rules": "As an action, you can establish a settlement on your territory. This requires the construction of basic infrastructure and hiring local labor. Once established, the outpost is yours to govern with full authority."
      },
      {
        "title": "Patrol Protection",
        "rules": "The Zebrabwe nomadic patrols provide a +1 bonus to all Dexterity (Stealth) checks made within five miles of your territory for one week after the deed's activation. This effect can be used once per month."
      }
    ],
    "levelRequirementReason": "The complexity and responsibility required in managing the territory necessitate a character of at least level 5.",
    "vendorReason": "Only a trusted Zebrabwe Plains Traders can verify the authenticity of such a deed.",
    "shippingDetail": "Delivered by courier in two weeks, with additional delays during seasonal migrations.",
    "usage": {
      "activation": "As an action to establish a settlement or as a bonus action for patrol protection.",
      "duration": "Instantaneous for establishment; weekly for patrol protection.",
      "endsWhen": "The effect ends when the deed is destroyed or the territory is abandoned.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the value of land rights, infrastructure costs, and Zebrabwe protection services.",
    "priceOriginal": 150000,
    "priceReviewedAt": "2026-07-23T20:45:46.725721+00:00",
    "aiReviewedAt": "2026-07-23T20:45:46.725721+00:00",
    "aiReviewVersion": 1
  },
  "zebrabwe_predator_calming_smoke": {
    "id": "zebrabwe_predator_calming_smoke",
    "name": "Zebrabwe Predator Calming Smoke (Large)",
    "description": "This massive bundle of exotic Zebrabwe herbs is said to have been gathered from the heart of the plains, where only the largest predators dare venture. When released, it fills the air with a thick, masking smoke that temporarily blinds and calms even the most ferocious carnivores within a mile radius for an entire day. Crafted by the Zebrabwe Plains Trader, this bundle ensures your safety from large predators without a fight.",
    "price": 8100,
    "icon": "💨",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Masking Smoke",
      "Calm Predators"
    ],
    "vendor": "zebrabwe_plains_trader",
    "shippedBy": "Swift Wind Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Masking Smoke",
        "rules": "When activated, this bundle releases a thick cloud of masking smoke that clears a 1-mile radius from all visible and invisible threats for 24 hours. Creatures within the area must succeed on a DC 15 Constitution saving throw or be blinded until the effect ends."
      },
      {
        "title": "Calm Predators",
        "rules": "For the duration of 24 hours, all large carnivores within a mile of the smoke are calmed and will not attack you or any creature you designate. This includes creatures such as lions, leopards, and other apex predators."
      }
    ],
    "levelRequirementReason": "This item is designed for ease of use by players who may encounter large predators without needing high-level abilities.",
    "vendorReason": "The Zebrabwe Plains Trader has the unique knowledge and resources to gather and craft this potent bundle from their homeland.",
    "shippingDetail": "This item is delivered by Swift Wind Courier, known for its speed across the plains. Delivery usually takes no more than a day within the region.",
    "usage": {
      "activation": "Standard action to release the smoke and calm predators.",
      "duration": "24 hours from activation",
      "endsWhen": "The effects end after 24 hours, or when used up in combat.",
      "charges": "Unlimited uses; the bundle recharges itself upon use."
    },
    "priceReason": "This item is priced at 1000 XP to reflect its rarity and utility without being overpowered for a first-level character.",
    "priceOriginal": 40000,
    "priceReviewedAt": "2026-07-23T20:45:07.717622+00:00",
    "aiReviewedAt": "2026-07-23T20:45:07.717622+00:00",
    "aiReviewVersion": 1
  },
  "zebrabwe_predator_taming_serum": {
    "id": "zebrabwe_predator_taming_serum",
    "name": "Zebrabwe Predator Taming Serum",
    "description": "Zebrabwe Predator Taming Serum is a vial of shimmering, iridescent fluid that exudes an earthy scent when uncorked. Crafted from the essence of ancient zebrawolves and the blood of predator beasts, this serum allows you to temporarily forge a bond with a formidable predator, making it your temporary ally in combat or exploration. The beast retains its natural aggression but can be directed by your commands for up to 24 hours, turning it into an invaluable mount or guardian.",
    "price": 52000,
    "icon": "💖",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Tame and command a large predator (CR 6-9) as a temporary mount/ally",
      "Requires physical application"
    ],
    "vendor": "zebrabwe_plains_trader",
    "shippedBy": "Swift Messenger Pegasus",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Bond with Predator",
        "rules": "Activates on contact with the target predator. The beast becomes temporarily non-aggressive for 24 hours, becoming your temporary mount or ally. You can direct it within a 30-foot radius as an action. The effect ends if you lose concentration (as if concentrating on a spell), the target is reduced to 0 hit points, or if the beast is incapacitated."
      },
      {
        "title": "Physical Application Required",
        "rules": "The serum must be applied directly to the predator's exposed skin. This requires an action and has no range limit. There are no saving throws involved."
      }
    ],
    "levelRequirementReason": "This serum is suitable for any level as it provides a temporary, non-lethal means of interacting with dangerous creatures.",
    "vendorReason": "Zebrabwe plains traders are known for their expertise in handling and taming wild animals.",
    "shippingDetail": "The serum is shipped via a swift messenger pegasus, ensuring it arrives at its destination intact within 24 hours of purchase.",
    "usage": {
      "activation": "Apply the serum to the predator as an action.",
      "duration": "24 hours or until lost concentration, incapacitation, or death of the target.",
      "endsWhen": "The effect ends if you lose concentration, the target is reduced to 0 HP, or the beast becomes incapacitated.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This serum provides a powerful and rare utility at an affordable price point for any adventurer.",
    "priceOriginal": 85000,
    "priceReviewedAt": "2026-07-23T20:45:37.904735+00:00",
    "aiReviewedAt": "2026-07-23T20:45:37.904735+00:00",
    "aiReviewVersion": 1
  },
  "zebrabwe_safe_crossing_permit": {
    "id": "zebrabwe_safe_crossing_permit",
    "name": "Zebrabwe Great Herd Safe Crossing Permit",
    "description": "The Zebrabwe Great Herd Safe Crossing Permit is a parchment of profound significance, embossed with the sacred sigils of the plains. This permit ensures safe passage through three major migratory zones, each teeming with zebras and other wildlife. For 48 hours within each zone, you and your party will be greeted with calm, unhurried herds that neither panic nor charge. Crafted by Zebrabwe to honor ancient traditions, this permit is a testament to the balance between traveler and nature.",
    "price": 8100,
    "icon": "🎫",
    "stock": 10,
    "rarity": "epic",
    "effects": [
      "Safe Passage",
      "Calm Zebras"
    ],
    "vendor": "zebrabwe_plains_trader",
    "shippedBy": "Stamped Hide Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Safe Passage",
        "rules": "This effect grants you safe passage through three major migratory zones for 48 hours each. During this time, you and your party are guaranteed to avoid any conflict with the zebras or other wildlife in these areas."
      },
      {
        "title": "Calm Zebras",
        "rules": "While within a zone, all zebras will remain calm and not charge at you or your companions. This effect functions as long as the permit is active within the designated zones."
      }
    ],
    "levelRequirementReason": "The balance of the plains requires that even novices respect the migratory paths of Zebrabwe.",
    "vendorReason": "Zebrabwe Plains Traders uphold ancient traditions and ensure safe passage for all travelers, making this permit a staple in their inventory.",
    "shippingDetail": "Delivered by the swift Stamped Hides, ensuring timely delivery to your campsite.",
    "usage": {
      "activation": "Passive upon acquisition within the migratory zones.",
      "duration": "48 hours per zone while active.",
      "endsWhen": "Upon leaving a designated migratory zone.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to ensure travelers can afford this necessary passage without disrupting the natural balance.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-23T20:45:32.779525+00:00",
    "aiReviewedAt": "2026-07-23T20:45:32.779525+00:00",
    "aiReviewVersion": 1
  },
  "zebrabwe_stripe_alignment": {
    "id": "zebrabwe_stripe_alignment",
    "name": "Zebrabwe Stripe Alignment",
    "description": "The Zebrabwe Stripe Alignment is a whimsical service that aligns your attire with the elegance of zebras. With this service, your clothing gains distinctive, hypnotic stripes—+1 Charisma when interacting with zebras or fashion-conscious individuals. Your presence becomes slightly mesmerizing; you gain advantage on Persuasion checks and disadvantage on Deception attempts. However, walking in a straight line proves challenging: you incur a penalty on all movement that requires precision, such as tightropes or straight paths.",
    "category": "services",
    "price": 660,
    "icon": "⚫",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "+1 Charisma with zebras and fashionistas",
      "Slightly hypnotic presence"
    ],
    "vendor": "zebrabwe",
    "shippedBy": "Zebra Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Charisma",
        "rules": "You gain +1 to your Charisma (Persuasion) checks when dealing with zebras or other fashion enthusiasts. This effect lasts until the end of the day."
      },
      {
        "title": "Hypnotic Presence",
        "rules": "For all Persuasion and Deception checks, you have advantage if the target is within 30 feet and has a Charisma score lower than yours. Otherwise, you are at disadvantage on such checks. This effect lasts until the end of the day."
      }
    ],
    "levelRequirementReason": "This service is accessible to all adventurers who wish to enhance their social interactions.",
    "vendorReason": "Zebrabwe Stripe Specialists are renowned for their unique and stylish services, ensuring that every customer leaves feeling both chic and aligned with the latest trends.",
    "shippingDetail": "The Zebra Courier ensures swift delivery of your alignment service within a day, guaranteeing you're perfectly prepared for your next social encounter.",
    "usage": {
      "activation": "Passive effect; no activation required",
      "duration": "Until the end of the day",
      "endsWhen": "At midnight or if you sleep",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the specialized service and unique alignment offered, enhancing your social interactions without requiring additional materials.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T20:45:36.577750+00:00",
    "aiReviewedAt": "2026-07-23T20:45:36.577750+00:00",
    "aiReviewVersion": 1
  },
  "zebrabwe_stripe_camouflage_premium": {
    "id": "zebrabwe_stripe_camouflage_premium",
    "name": "Zebrabwe Stripe Camouflage (Premium)",
    "description": "Zebrabwe Stripe Camouflage (Premium) is a vibrant paint that transforms the user into an expert at blending with plains terrain. Applied by Zebra Artists, this premium formula not only grants advantage on Stealth checks but also confuses both friend and foe, making it nearly impossible to distinguish painted individuals from their surroundings. The stripes are said to have been inspired by the legendary Zebrabwe artists who mastered the art of camouflage.",
    "price": 660,
    "icon": "🦓",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Stealth Checks",
      "Confuse Predators"
    ],
    "vendor": "zebrabwe_savanna",
    "shippedBy": "Paint Pot Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Stealth Checks",
        "rules": "When applied, this paint grants advantage on all Stealth checks for 8 hours. It must be applied as an action and requires a canister of the paint."
      },
      {
        "title": "Confuse Predators",
        "rules": "The painted individual or group confuses nearby creatures, granting disadvantage to any attack rolls made against them within 30 feet, for 1 minute. This effect ends if a creature successfully hits the target with an attack or the target moves more than 30 feet away."
      }
    ],
    "levelRequirementReason": "Requires no specific level as it aids in survival and stealth.",
    "vendorReason": "Zebra Artists are renowned for their mastery of the art of camouflage, making them the ideal vendor for this premium paint.",
    "shippingDetail": "The paint is shipped in a sealed canister to ensure it remains effective upon arrival.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until used up",
      "endsWhen": "A successful hit by an attack roll or movement beyond 30 feet away from the target",
      "charges": "Unlimited; refills after a short rest"
    },
    "priceReason": "The paint is priced at 1000 XP, reflecting its premium quality and the expertise of Zebra Artists in crafting it.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-23T20:45:48.084382+00:00",
    "aiReviewedAt": "2026-07-23T20:45:48.084382+00:00",
    "aiReviewVersion": 1
  },
  "zebrabwe_stripe_strainer": {
    "id": "zebrabwe_stripe_strainer",
    "name": "Zebrabwe Stripe Strainer",
    "description": "The Zebrabwe Stripe Strainer is a wondrous kitchen tool, crafted by Zebra Weavers from the finest milk-stained reeds and dyed with natural stripes. When in use, its unique design ensures even straining of yogurt curds, offering advantage on checks to prepare dairy-rich dishes. Its camouflage stripes allow it to blend into grassy meadows when not in use, perfect for both kitchen and field. The Strainer is a hallmark of Zebra Weavers' craftsmanship.",
    "category": "equipment",
    "price": 660,
    "icon": "🥛",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Dairy Preparation Checks",
      "Camouflage in Grass"
    ],
    "vendor": "zebrabwe_savanna",
    "shippedBy": "Striped Sieve Set Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dairy Preparation Advantage",
        "rules": "When the user checks to prepare any dairy-rich dish, they gain advantage. This effect lasts until the end of their next short or long rest."
      },
      {
        "title": "Camouflage in Grass",
        "rules": "While not in use, the Strainer can blend into grassy environments by a natural mimicry effect, making it invisible to creatures within 30 feet. This camouflage lasts for 1 hour and requires no action from the user."
      }
    ],
    "levelRequirementReason": "Crafted for general kitchen use, this Strainer does not require any special proficiency.",
    "vendorReason": "Being a Zebra Weavers' product, it's only natural that they sell the Zebrabwe Stripe Strainers at their shop.",
    "shippingDetail": "Delivered by Striped Sieve Set Express within one week of purchase.",
    "usage": {
      "activation": "Passive effect when in use; camouflage activated manually as a bonus action.",
      "duration": "Advantage lasts until next short or long rest; camouflage lasts for 1 hour.",
      "endsWhen": "Advantage ends with the next rest; camouflage ends after 1 hour or when used manually.",
      "charges": "Unlimited uses, no recharging required."
    },
    "priceReason": "The Zebrabwe Stripe Strainer is crafted by a renowned vendor and offers unique advantages, justifying its fair value of 1000 XP.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T20:46:14.523057+00:00",
    "aiReviewedAt": "2026-07-23T20:46:14.523057+00:00",
    "aiReviewVersion": 1
  },
  "zebrabwe_striped_robe": {
    "id": "zebrabwe_striped_robe",
    "name": "Zebrabwe Striped Robe",
    "description": "The Zebrabwe Striped Robe is a hand-woven garment with a mesmerizing pattern of black and white stripes, carefully crafted by the Zebra Weavers to mimic the savanna's zebras. It whispers in the wind, blending the wearer into their surroundings when worn in grasslands, and its stripes subtly fade away if stepped into muddy waters. This robe not only grants advantage on Stealth checks but also calms nearby herd animals, making it a favorite among those who need to move unseen or gather information without causing panic.",
    "category": "equipment",
    "price": 660,
    "icon": "👘",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Stealth Checks",
      "Calm Nearby Herd Animals"
    ],
    "vendor": "zebrabwe_village",
    "shippedBy": "Patterned Cloth",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Stealth Checks",
        "rules": "When worn in grasslands, the Zebrabwe Striped Robe grants the wearer advantage on all Dexterity (Stealth) checks. This benefit lasts for one hour per day, and it is not affected by the passage of time but ends if the robe is removed or if the wearer moves into an environment that does not match its camouflage pattern."
      },
      {
        "title": "Calm Nearby Herd Animals",
        "rules": "When worn in grasslands, the Zebrabwe Striped Robe can be activated once per long rest to calm nearby herd animals within 30 feet. The effect lasts for 1 minute and has a range of 60 feet. Creatures affected must make a Wisdom saving throw (DC 12) or become charmed by the robe's calming influence, which prevents them from taking aggressive actions towards the wearer."
      }
    ],
    "levelRequirementReason": "The Zebrabwe Striped Robe is designed for ease of use and accessibility, making it suitable for adventurers of all levels.",
    "vendorReason": "The Zebra Weavers are the artisans who create this robe, and they sell it directly to ensure its craftsmanship and authenticity remain unparalleled.",
    "shippingDetail": "Shipped via a courier from Patterned Cloth, known for their reliable delivery services within the savanna region.",
    "usage": {
      "activation": "Instantaneous action (once per long rest)",
      "duration": "One hour per day or until removed or the surroundings no longer match its camouflage pattern",
      "endsWhen": "The robe is removed or the wearer moves out of a grassland area",
      "charges": "Unlimited, but only one effect can be used per long rest"
    },
    "priceReason": "The Zebrabwe Striped Robe is crafted with high-quality materials and intricate patterns, making it a valuable yet reasonably priced item for adventurers.",
    "priceOriginal": 13000,
    "priceReviewedAt": "2026-07-23T20:46:33.425105+00:00",
    "aiReviewedAt": "2026-07-23T20:46:33.425105+00:00",
    "aiReviewVersion": 1
  },
  "zebrabwe_weather_vane": {
    "id": "zebrabwe_weather_vane",
    "name": "Zebrabwe Weather Vane",
    "description": "The Zebrabwe Weather Vane is a hand-crafted weather vane forged from polished obsidian and adorned with silver runes that whisper ancient prophecies. It not only predicts severe meteorological hazards but can also temporarily divert light rain or wind away, providing a critical 24-hour warning to travelers across the plains. Crafted by Zebrabwe, the master forger of the Zebrowe Plains, this vane is a trusted companion for any adventurer venturing into unpredictable climes.",
    "price": 3100,
    "icon": "📡",
    "stock": 7,
    "rarity": "rare",
    "effects": [
      "Meteorological Prediction",
      "Minor Weather Diversion"
    ],
    "vendor": "zebrabwe_plains_trader",
    "shippedBy": "Wooden Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Meteorological Prediction",
        "rules": "The Zebrabwe Weather Vane can predict severe meteorological hazards, both magical and mundane, up to 24 hours in advance. This effect is passive but requires the user to be aware of it for it to function effectively."
      },
      {
        "title": "Minor Weather Diversion",
        "rules": "The vane can temporarily divert light rain or wind away from a camp, creating a sheltered area approximately 10 feet in diameter. This effect lasts for 1 hour and may be used once per long rest."
      }
    ],
    "levelRequirementReason": "This vane is suitable for beginners who require basic protection against unpredictable weather.",
    "vendorReason": "The Zebrabwe Plains Trader proudly sells this local artisanal creation, offering essential tools to those navigating the harsh Zebrowe Plains.",
    "shippingDetail": "Shipped via Wooden Post, ensuring safe and timely delivery through a network of trusted couriers.",
    "usage": {
      "activation": "Passive; awareness is required for prediction to take effect.",
      "duration": "Instantaneous (prediction); 1 hour (weather diversion)",
      "endsWhen": "At the end of each long rest (diversion); when the user becomes unaware or the vane breaks",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the craftsmanship, materials used, and its essential utility for adventurers.",
    "priceOriginal": 16000,
    "priceReviewedAt": "2026-07-24T23:49:42.532053+00:00",
    "aiReviewedAt": "2026-07-24T23:49:42.532053+00:00",
    "aiReviewVersion": 1
  },
  "zelda_triforce_shard": {
    "id": "zelda_triforce_shard",
    "name": "Triforce Shard",
    "description": "The Triforce Shard is a fragment of divine origin, forged from the very essence of the Triforce. It grants its bearer the power to enhance one's fundamental virtue: strength, wisdom, or courage. This shard, when activated, permanently boosts the chosen attribute by two points, ensuring a lasting impact on the wielder's capabilities. Its second effect allows the user to invoke a wish-like ability once per week, but with limitations that prevent it from being overused. The Shard’s presence is not without consequence; it draws malevolent forces in its vicinity, necessitating caution.",
    "category": "premium",
    "price": 700000,
    "icon": "▲",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "+2 Strength, Intelligence, or Charisma",
      "Wish-like effect (limited)"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Sacred Relic",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Enhanced Virtue",
        "rules": "Activates as a bonus action. The chosen attribute (STR, INT, or CHA) is permanently increased by 2 points until the next long rest."
      },
      {
        "title": "Wish-like Ability",
        "rules": "Activates once per week. The user may cast one wish spell, but only for a single specific effect that aligns with their character's theme or narrative goal. This use is limited to once per week and cannot be overextended."
      }
    ],
    "levelRequirementReason": "This Shard requires significant power to wield effectively, necessitating at least level 12 for the user.",
    "vendorReason": "The Comet Observatory is known for its connection with divine and ancient relics, making it a fitting vendor for such an artifact.",
    "shippingDetail": "Ships via the Sacred Relic courier service, ensuring secure and timely delivery of this fragile yet potent item.",
    "usage": {
      "activation": "Bonus action or reaction (for wish-like effect)",
      "duration": "Permanent (until next long rest) for strength increase; instantaneous for wish-like ability",
      "endsWhen": "Exhausted upon use, recharge after a week",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP to reflect its unique and powerful abilities, ensuring it remains a desirable but not overpowered item.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T20:46:02.530674+00:00",
    "aiReviewedAt": "2026-07-23T20:46:02.530674+00:00",
    "aiReviewVersion": 1
  }
};
