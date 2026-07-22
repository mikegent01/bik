// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_007 = {
  "custodian_logic_core": {
    "id": "custodian_logic_core",
    "name": "Custodian Logic Core (Unencrypted)",
    "description": "The Custodian Logic Core (Unencrypted) hums with raw processing power, a crystalline core that glows faintly in shades of blue and gold. Crafted by the enigmatic Custodians from ancient philosophical algorithms, this core allows its wielder to instantly calculate optimal solutions to complex tactical problems, effectively doubling their Initiative score in combat. It also grants the ability to attempt hacking simple AI constructs with a +5 bonus, turning even rudimentary systems into formidable tools.",
    "price": 1000,
    "icon": "🧠",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Optimal Tactical Calculations",
      "Simple AI Hacking"
    ],
    "vendor": "custodian_hub",
    "shippedBy": "Energy Field",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Optimal Tactical Calculations",
        "rules": "As an action, the wielder can activate the core to instantly calculate and execute the optimal response to a tactical situation. This grants them a +10 bonus to their Initiative score for the start of their next turn. The effect lasts until the start of their next turn."
      },
      {
        "title": "Simple AI Hacking",
        "rules": "The core can be used as an action to attempt hacking simple AI constructs, granting a +5 bonus on Intelligence (Computers) checks made for that purpose. This use is exhausted after one day has passed since the last successful hack."
      }
    ],
    "levelRequirementReason": "The core's advanced processing algorithms are accessible to even low-level characters, providing a strategic advantage regardless of experience.",
    "vendorReason": "The Custodian Hub is the custodians' primary research facility and thus has access to their most advanced creations.",
    "shippingDetail": "Delivered instantly via the energy field network, ensuring safe and immediate delivery to the recipient.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous (Optimal Tactical Calculations) / Until Start of Next Turn (Simple AI Hacking)",
      "endsWhen": "Starts of next turn (Optimal Tactical Calculations) / After one day from the last successful hack (Simple AI Hacking)",
      "charges": "Unlimited"
    },
    "priceReason": "The core's balanced price reflects its moderate power, providing a strategic advantage without overshadowing other character abilities.",
    "priceOriginal": 115000,
    "priceReviewedAt": "2026-07-22T01:06:22.935623+00:00",
    "aiReviewedAt": "2026-07-22T01:06:22.935623+00:00",
    "aiReviewVersion": 1
  },
  "custodian_planet_destruction_schematic": {
    "id": "custodian_planet_destruction_schematic",
    "name": "Custodian Planet Destruction Schematic (Decommission)",
    "description": "The Custodian Planet Destruction Schematic (Decommission) is a godly blueprint forged from the ancient knowledge of the Custodians, crafted to dismantle entire planets into raw cosmic dust. This forbidden item requires a month-long activation process and can only be initiated by one who understands its catastrophic power. Once activated, the planet's core destabilizes, breaking down into harmless cosmic particles in mere days, releasing an energy surge that could power a star for centuries.",
    "price": 5000,
    "icon": "💥",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Initiates 'Decommission' on one planet",
      "Generates massive energy upon planetary decomposition"
    ],
    "vendor": "custodian_hub",
    "shippedBy": "Final Data Block",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Planet Decommission (1/Day)",
        "rules": "Activating this schematic requires a full month of preparation. Once initiated, the target planet's core destabilizes over a span of days, breaking down into raw cosmic dust. This effect has a range of 50 miles from the planet’s center and can only be used once per long rest."
      },
      {
        "title": "Energy Surge",
        "rules": "Upon the completion of the 'Decommission' sequence, the planet releases an energy surge equivalent to 1d20 × 100,000 XP. This surge is instantaneous and can power a star for centuries."
      }
    ],
    "levelRequirementReason": "Requires significant knowledge of planetary mechanics and the Custodian's ancient secrets.",
    "vendorReason": "The Custodian Hub holds this item as a relic of their power, ensuring it is only used for recycling purposes.",
    "shippingDetail": "Ships via Final Data Block directly from the Custodian Nexus. Delivery takes one month and requires a special clearance code.",
    "usage": {
      "activation": "1 action to initiate, 1 month to activate fully",
      "duration": "Instantaneous upon completion",
      "endsWhen": "Planet decommissioned or interrupted by outside forces",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item is balanced at a lower price due to its immense power and the time required for activation.",
    "priceOriginal": 5000000,
    "priceReviewedAt": "2026-07-22T01:06:37.340766+00:00",
    "aiReviewedAt": "2026-07-22T01:06:37.340766+00:00",
    "aiReviewVersion": 1
  },
  "custodian_planet_reset": {
    "id": "custodian_planet_reset",
    "name": "Custodian Planetary Reset Protocol",
    "description": "The Custodian Planetary Reset Protocol is a rare device crafted by the ancient Custodians. When activated, it triggers a cosmic realignment that wipes all advanced technology and complex life from a minor planet, returning it to its pre-industrial state within three months. The process emits an energy signature so powerful that nearby systems can detect it for years afterward. This device is both a relic of the past and a tool of immense responsibility.",
    "price": 1000,
    "icon": "💥",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Wipes all advanced technology and complex life from a minor planet",
      "Releases a massive cosmic realignment with lasting effects"
    ],
    "vendor": "custodian_hub",
    "shippedBy": "Wormhole Trigger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Planetary Reset",
        "rules": "Activates as an action. The target minor planet is returned to its pre-industrial state, removing all advanced technology and complex life forms. This effect takes three months and releases a detectable energy signature for years afterward."
      },
      {
        "title": "Cosmic Realignment",
        "rules": "The device emits a powerful, detectable energy signature for 30 days after activation due to the cosmic realignment. Any creature within 1 mile of the target planet must make a DC 25 Con saving throw or be exposed to the residual effects for 1d4 hours."
      }
    ],
    "levelRequirementReason": "Even minor planetary resets are beyond the capability of most adventurers, requiring significant knowledge and expertise.",
    "vendorReason": "The Custodian Hub maintains the ancient protocols and tools used by their kind for millennia.",
    "shippingDetail": "Ships via a high-speed wormhole, arriving within one week.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect with a three-month process",
      "endsWhen": "The planetary reset is complete or the device is destroyed",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item's rarity and the profound impact it has on entire planets justify its relatively moderate price in XP.",
    "priceOriginal": 2000000,
    "priceReviewedAt": "2026-07-22T01:05:56.565309+00:00",
    "aiReviewedAt": "2026-07-22T01:05:56.565309+00:00",
    "aiReviewVersion": 1
  },
  "custodian_planet_stabilizer": {
    "id": "custodian_planet_stabilizer",
    "name": "Custodian Planetary Stability Field",
    "description": "The Custodian Planetary Stability Field, a massive device forged from the heart of ancient Custodian technology, encircles a planet in an unyielding field that locks it into its perfect orbit and stabilizes its tectonic activity against both magical and natural forces. Crafted with materials harvested from the very core of planets, this device ensures millennia of geological stability, preventing any planetary transformation spells or catastrophic shifts in tectonics. The Custodians, guardians of cosmic balance, have entrusted their most trusted to wield this formidable tool.",
    "price": 1000,
    "icon": "🌍",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Planetary Orbits and Tectonics Locked for Centuries",
      "Magical Stabilization"
    ],
    "vendor": "custodian_hub",
    "shippedBy": "Orbital Deployment",
    "levelRequirement": 1,
    "factionBonus": {
      "environment": 100
    },
    "effectDetails": [
      {
        "title": "Stable Orbit and Tectonic Lock",
        "rules": "The device creates an unyielding field around the planet, locking it into a perfect orbit and stabilizing its tectonic activity for exactly 1000 years. The effect is instantaneous upon activation and lasts until the end of time unless dispelled by a planar deity or a similar power."
      },
      {
        "title": "Magical Stabilization",
        "rules": "Any attempts to alter the planet's orbit or tectonic activity through spellcasting are negated. The device has an anti-magic aura with a 10-foot radius around it, and any creature attempting such magic within this area must make a DC 25 Wisdom saving throw or be unable to cast spells of the transmutation school for the duration of their stay."
      }
    ],
    "levelRequirementReason": "The Custodian Planetary Stability Field is simple enough in operation that even a low-level spellcaster can activate it, though its power ensures it remains within the realm of divine and godly intervention.",
    "vendorReason": "Only the Custodians, as planetary guardians, possess the knowledge to operate such a device, making them the only legitimate vendors for this item.",
    "shippingDetail": "The device is shipped via specialized orbital transport and must be deployed in space by the purchaser or a trusted Custodian agent.",
    "usage": {
      "activation": "Instantaneous action (requires concentration)",
      "duration": "Until dispelled by planar deity or similar power",
      "endsWhen": "Dispel magic or similar effect, planetary destruction",
      "charges": "Unlimited"
    },
    "priceReason": "This item is priced at 1000 XP as it represents a simple yet powerful tool within the Custodian's arsenal, ensuring planetary stability without requiring divine intervention.",
    "priceOriginal": 900000,
    "priceReviewedAt": "2026-07-22T01:06:12.581354+00:00",
    "aiReviewedAt": "2026-07-22T01:06:12.581354+00:00",
    "aiReviewVersion": 1
  },
  "custodian_planet_terraformer": {
    "id": "custodian_planet_terraformer",
    "name": "Custodian Planetary Atmosphere Processor",
    "description": "The Custodian Planetary Atmosphere Processor, a massive station encased in gleaming blue glass and tethered to the ground by invisible force lines, can convert a toxic atmosphere into breathable air within a year. Crafted from the ancient technology of the Custodians, this marvel requires an initial investment of 500,000 gp for operation costs but guarantees a safe environment for settlement. Once operational, it hums with a steady pulse, ensuring the survival of its inhabitants.",
    "price": 1000,
    "icon": "🏭",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Planetary Atmosphere Conversion",
      "Operational Costs Required"
    ],
    "vendor": "custodian_hub",
    "shippedBy": "Massive Orbital Drop",
    "levelRequirement": 1,
    "factionBonus": {
      "environment": 100
    },
    "effectDetails": [
      {
        "title": "Planetary Atmosphere Conversion",
        "rules": "This station converts a toxic planetary atmosphere into breathable air over the course of one year. The process is passive and requires no action from the user. Once operational, it remains active until deactivated or destroyed."
      },
      {
        "title": "Operational Costs Required",
        "rules": "The initial setup costs 500,000 gp for operation expenses. These funds cover maintenance, power generation, and other necessary upkeep to ensure its continuous function."
      }
    ],
    "levelRequirementReason": "This item is intended for use by any party, as it represents a fundamental tool for survival in hostile environments.",
    "vendorReason": "The Custodian Hub is the primary supplier of such critical infrastructure due to its close ties with Custodian technology and expertise.",
    "shippingDetail": "Shipped via a massive orbital drop, this item requires clearance from planetary defense systems and can take up to one month for delivery.",
    "usage": {
      "activation": "Passive operation; no activation required beyond initial setup.",
      "duration": "Instantaneous setup; ongoing effect until deactivated or destroyed.",
      "endsWhen": "Deactivated by the user, or destroyed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the initial operational costs and the significant value of ensuring a habitable environment.",
    "priceOriginal": 1500000,
    "priceReviewedAt": "2026-07-22T01:06:21.656554+00:00",
    "aiReviewedAt": "2026-07-22T01:06:21.656554+00:00",
    "aiReviewVersion": 1
  },
  "custodian_planetary_defense_diagram": {
    "id": "custodian_planetary_defense_diagram",
    "name": "Custodian Planetary Defense Diagram",
    "description": "The Custodian Planetary Defense Diagram is a meticulously detailed blueprint crafted by the ancient and revered Custodians, who have long guarded the stars. This diagram allows for the construction of an impenetrable planetary shield that can deter even the most formidable invaders over the course of one year. The shield requires immense resources and engineering expertise to deploy but offers unparalleled protection. Once active, it forms an unbreakable barrier around a planet, ensuring its safety from any external threat.",
    "price": 1000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Planetary Shield Deployment",
      "Massive Resource Investment"
    ],
    "vendor": "custodian_hub",
    "shippedBy": "Holographic Display",
    "levelRequirement": 15,
    "factionBonus": {
      "defense": 150,
      "technology": 100
    },
    "effectDetails": [
      {
        "title": "Planetary Shield Deployment",
        "rules": "Activates as a ritual casting action. The planetary shield prevents all forms of attack and spell effects for one year, providing complete protection to the planet. This effect can only be activated once per century."
      },
      {
        "title": "Massive Resource Investment",
        "rules": "Requires an expenditure of at least 10% of a nation's annual GDP in resources and labor to construct. The DM must adjudicate the exact requirements based on the planet’s size and population. Once activated, this effect is instantaneous and lasts for one year."
      }
    ],
    "levelRequirementReason": "Requires advanced engineering knowledge and significant strategic planning.",
    "vendorReason": "The Custodian Hub holds the ancient knowledge of planetary defense, passed down through millennia.",
    "shippingDetail": "Ships via secure holographic projection to ensure the integrity and accuracy of the diagram are preserved during transit.",
    "usage": {
      "activation": "Casting as a ritual action. Requires a week-long preparation period prior to activation.",
      "duration": "Instantaneous effect, lasts for one year.",
      "endsWhen": "The shield expires after one year or is destroyed by an external force capable of breaking through the barrier.",
      "charges": "Unlimited; once active, it remains effective until manually deactivated."
    },
    "priceReason": "Balanced as a rare and strategic item that provides unparalleled protection for a significant cost in resources.",
    "priceOriginal": 450000,
    "priceReviewedAt": "2026-07-22T01:06:50.482147+00:00",
    "aiReviewedAt": "2026-07-22T01:06:50.482147+00:00",
    "aiReviewVersion": 1
  },
  "custodian_prophecy_analysis": {
    "id": "custodian_prophecy_analysis",
    "name": "Custodian Prophecy Analysis",
    "description": "The Custodian Prophecy Analysis is a sleek, metallic device adorned with holographic runes that shimmer when activated. It synthesizes vast troves of data from the Custodian AI's archives to predict the least destructive path for any given event. The analysis requires one week and extensive data input, but it ensures no political or military cataclysm unfolds. Only those who have proven their worth through level 12 can afford this invaluable service.",
    "price": 1000,
    "icon": "📊",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Predicts the most favorable outcome of a major event",
      "Requires weekly data input"
    ],
    "vendor": "custodian_hub",
    "shippedBy": "Custodian Courier Service",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Predictive Analysis",
        "rules": "Activates as an action, providing a +4 bonus to Wisdom (Insight) checks made for predicting outcomes. This effect lasts until the start of your next turn and can be used once per day."
      },
      {
        "title": "Data Dependency",
        "rules": "The Prophecy Analysis requires weekly data input from the Custodian Hub. Failure to provide new data within one week results in a -2 penalty on all Insight checks made with this device until the next data cycle begins."
      }
    ],
    "levelRequirementReason": "Requires level 12 to ensure users have the experience and wisdom necessary for such powerful foresight.",
    "vendorReason": "The Custodian Hub possesses the vast data and processing power needed to perform this analysis.",
    "shippingDetail": "Delivered directly by a Custodian drone within one week of purchase, ensuring timely data input.",
    "usage": {
      "activation": "Action",
      "duration": "One turn",
      "endsWhen": "The start of your next turn or until the Prophecy Analysis is destroyed",
      "charges": "Once per day"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its rarity and the significant data processing required for each analysis.",
    "priceOriginal": 100000,
    "priceReviewedAt": "2026-07-22T01:06:57.815240+00:00",
    "aiReviewedAt": "2026-07-22T01:06:57.815240+00:00",
    "aiReviewVersion": 1
  },
  "custodian_repair_drone": {
    "id": "custodian_repair_drone",
    "name": "Custodian Repair Drone (Mk II)",
    "description": "The Custodian Repair Drone (Mk II) is a sleek, metallic insectoid drone that hums with quiet efficiency. Crafted by the meticulous Custodians, this Mk II version repairs minor structural damage more swiftly and accurately than its predecessor, silently restoring up to 10 hit points of damage per hour to any structure or object it hovers near. The drone's advanced circuitry allows it to recharge itself using ambient electricity, a testament to the Custodian Hub's cutting-edge technology.",
    "price": 1000,
    "icon": "🤖",
    "stock": 6,
    "rarity": "rare",
    "effects": [
      "Silent Structural Repair",
      "Self-Recharging"
    ],
    "vendor": "custodian_hub",
    "shippedBy": "Sealed Canister",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Silent Structural Repair",
        "rules": "The drone repairs up to 10 hit points of minor damage per hour to any structure or object it hovers near. It must be within 30 feet to activate and repair. The effect ends when the drone is destroyed, recharged, or when its target is no longer a valid structure."
      },
      {
        "title": "Self-Recharging",
        "rules": "The drone can recharge itself by absorbing ambient electricity. This process restores 1 point of damage per hour, up to a maximum of 3 points before it must be recharged manually or replaced. The drone's repair function is suspended while it recharges."
      }
    ],
    "levelRequirementReason": "This advanced model requires more skill and knowledge to operate efficiently.",
    "vendorReason": "The Custodian Hub exclusively sells technology crafted by their own artisans, ensuring the highest quality and functionality.",
    "shippingDetail": "Delivered via a sealed canister that ensures the drone's integrity during transport.",
    "usage": {
      "activation": "Instantaneous action to activate repair mode; requires line of sight.",
      "duration": "Until destroyed, recharged, or target is no longer valid.",
      "endsWhen": "Destroyed, recharged, or when its target is no longer a valid structure.",
      "charges": "Unlimited as long as it can recharge."
    },
    "priceReason": "The advanced technology and precise craftsmanship justify this price, making the drone a valuable tool for adventurers in need of rapid repairs.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-22T01:06:36.041355+00:00",
    "aiReviewedAt": "2026-07-22T01:06:36.041355+00:00",
    "aiReviewVersion": 1
  },
  "custodian_self_repair_nanites": {
    "id": "custodian_self_repair_nanites",
    "name": "Custodian Self-Repair Nanite Cloud (Armor)",
    "description": "The Custodian Self-Repair Nanite Cloud coats your armor in an ever-shifting layer of nanites, weaving molecular bonds to mend and reinforce at a cellular level. This cloud not only grants +1 AC but also provides a daily shield against critical failures, protecting you from the very first source of such calamity each day. The nanites are a marvel of Custodian engineering, meticulously crafted to enhance both your defense and resilience.",
    "price": 1000,
    "icon": "🤖",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Molecular Reinforcement",
      "Critical Failure Shield"
    ],
    "vendor": "custodian_hub",
    "shippedBy": "Custodian Drone Courier",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Molecular Reinforcement",
        "rules": "This effect increases the wearer's AC by +1. It also grants a daily shield against critical failures, providing protection from the first source of such failures each day."
      },
      {
        "title": "Critical Failure Shield",
        "rules": "Once per long rest, this effect provides immunity to one critical failure. This ability can only be used once per 24 hours and is exhausted upon use."
      }
    ],
    "levelRequirementReason": "This advanced technology requires a minimum level of expertise to effectively utilize the nanites' full potential.",
    "vendorReason": "The Custodian Hub specializes in cutting-edge technologies, including this marvelously engineered armor enhancement.",
    "shippingDetail": "Ships via a dedicated Custodian Drone, ensuring swift and secure delivery within 1 week.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous activation; daily shield against critical failures once per long rest",
      "endsWhen": "Exhausted after use or destroyed if the nanite cloud is removed from armor for more than a month",
      "charges": "Unlimited, recharged by a Custodian Repair Station every 30 days"
    },
    "priceReason": "The price reflects the advanced technology and maintenance required to keep these nanites operational.",
    "priceOriginal": 150000,
    "priceReviewedAt": "2026-07-22T01:07:11.544228+00:00",
    "aiReviewedAt": "2026-07-22T01:07:11.544228+00:00",
    "aiReviewVersion": 1
  },
  "custodian_singularity_weapon": {
    "id": "custodian_singularity_weapon",
    "name": "Custodian Singularity Generator (Anti-Matter)",
    "description": "The Custodian Singularity Generator (Anti-Matter) is a dreadfully powerful weapon, forged from stolen Custodian technology. This compact device can create a micro-black hole that consumes all matter within its lethal radius in an instant. The resulting force surge is cataclysmic, capable of obliterating anything caught within the 20-foot sphere of destruction. Upon activation, it's permanently destroyed, leaving no trace but the memory of its apocalyptic power and the Custodian's cunning thefts.",
    "price": 1000,
    "icon": "⚫",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Singularity Blast",
      "Irreparable Destruction"
    ],
    "vendor": "custodian_hub",
    "shippedBy": "Containment Unit",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Singularity Blast",
        "rules": "Activates on a bonus action, creating a 20-foot radius of concentrated anti-matter. All creatures within the area must succeed on a DC 35 Dexterity saving throw or be immediately destroyed (dealing 100d10 force damage to all targets). The generator is then irreparably damaged and rendered useless."
      },
      {
        "title": "Irreparable Destruction",
        "rules": "The generator self-destructs upon activation, ending the effect. It cannot be repaired or recharged and must be replaced with a new unit from its vendor."
      }
    ],
    "levelRequirementReason": "This weapon is designed for experienced adventurers who can handle its immense power and risk.",
    "vendorReason": "The Custodian Hub maintains a black market for advanced technology, including this stolen Custodian artifact.",
    "shippingDetail": "Delivery is handled by specialized containment units to ensure the weapon does not accidentally activate during transport.",
    "usage": {
      "activation": "Bonus action to deploy and activate the singularity generator.",
      "duration": "Instantaneous, ending when activated.",
      "endsWhen": "Upon activation; the generator self-destructs.",
      "charges": "Uses up all charges upon firing."
    },
    "priceReason": "Reflecting its immense power and unique design, this weapon is priced at a moderate 1000 XP, balancing its destruction potential with the risk it poses to those who wield it.",
    "priceOriginal": 990000,
    "priceReviewedAt": "2026-07-22T01:07:01.920209+00:00",
    "aiReviewedAt": "2026-07-22T01:07:01.920209+00:00",
    "aiReviewVersion": 1
  },
  "custodian_truth_sensor": {
    "id": "custodian_truth_sensor",
    "name": "Custodian Truth Sensor (Area Effect)",
    "description": "The Custodian Truth Sensor hums with a crystalline glow, radiating an incorruptible aura that sweeps through the air like truth's own breath. Within its 50-foot radius, every word becomes a beacon of veracity, dispelling falsehoods and revealing the naked truth to all who speak within. The device is crafted by the Custodians, guardians of unyielding integrity in the Celestial Realms, ensuring that no lie can escape its vigilant embrace.",
    "price": 1000,
    "icon": "✅",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "50-foot radius zone where lies are dispelled",
      "All spoken statements must be factually accurate"
    ],
    "vendor": "custodian_hub",
    "shippedBy": "Crystalline Matrix",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Zone of Truth",
        "rules": "Activates upon command, creating a 50-foot-radius sphere centered on the user. All spoken statements within this area become true for the duration. This effect lasts until dispelled by an external force or the sensor's power exhausts after one use."
      },
      {
        "title": "Incapable of Falsehood",
        "rules": "While inside the zone, any attempt to speak a falsehood results in immediate detection and correction. The user is immune to magical effects that would allow them to lie within this radius for the duration of the sensor's active state."
      }
    ],
    "levelRequirementReason": "Requires a high level of concentration and alignment with celestial principles to wield its power effectively.",
    "vendorReason": "The Custodian Hub is the sole manufacturer and distributor, ensuring the purity of their devices in a world often clouded by deceit.",
    "shippingDetail": "Ships via the Celestial Express, a service that guarantees swift delivery through the Astral Plane.",
    "usage": {
      "activation": "Action to activate and command the zone of truth within a 50-foot radius around the user.",
      "duration": "Instantaneous activation; lasts until dispelled or exhausted",
      "endsWhen": "Exhausted after one use or dispelled by an external force",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to provide a significant but not game-breaking effect, suitable for adventurers seeking truth in their endeavors.",
    "priceOriginal": 220000,
    "priceReviewedAt": "2026-07-22T01:07:17.586765+00:00",
    "aiReviewedAt": "2026-07-22T01:07:17.586765+00:00",
    "aiReviewVersion": 1
  },
  "custodian_universal_translator": {
    "id": "custodian_universal_translator",
    "name": "Custodian Universal Translator",
    "description": "The Custodian Universal Translator is a small, sleek earpiece crafted from ancient metal alloyed with rare Custodian technology. It interfaces directly with the universal linguistic matrix, allowing for perfect, real-time translation of all known languages and many unknown ones. This device was forged by the Custodians themselves, whose expertise in linguistics ensures flawless communication across countless tongues. The earpiece is a symbol of their commitment to understanding and unity among diverse beings.",
    "price": 1000,
    "icon": "👂",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Perfect Translation",
      "Includes Primal Speech"
    ],
    "vendor": "custodian_hub",
    "shippedBy": "Custodian Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Perfect Translation",
        "rules": "Activates as a bonus action, providing instantaneous translation for all languages spoken within earshot. It has no cooldown and requires no material components."
      },
      {
        "title": "Includes Primal Speech",
        "rules": "The user can understand and communicate with any primal beast within 30 feet. This effect lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "This device is designed for beginners to facilitate easy communication without level restrictions.",
    "vendorReason": "The Custodian Hub specializes in technology and devices forged by the Custodians, ensuring this item's authenticity and reliability.",
    "shippingDetail": "Delivered within a week using the exclusive Custodian Courier Service.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous; lasts until end of next turn for primal speech",
      "endsWhen": "Effect ends when you use another bonus action to activate it or at the start of your next turn.",
      "charges": "Unlimited"
    },
    "priceReason": "The device is priced low due to its simplicity and widespread utility, making it accessible for all adventurers.",
    "priceOriginal": 180000,
    "priceReviewedAt": "2026-07-22T01:07:09.399353+00:00",
    "aiReviewedAt": "2026-07-22T01:07:09.399353+00:00",
    "aiReviewVersion": 1
  },
  "custodians_crime_scene_cleanup": {
    "id": "custodians_crime_scene_cleanup",
    "name": "Custodians Crime Scene Cleanup",
    "description": "The Custodians Crime Scene Cleanup is a specialized service that leaves no trace of its work. It disintegrates up to five corpses and wipes away bloodstains within a 30-foot radius, ensuring no evidence remains. The air fills with a lasting lemony fragrance for the next 24 hours, masking any lingering odors. However, there's a slim chance—a 5% probability—that a restless spirit might remain, filing a complaint with the local authorities.",
    "category": "services",
    "price": 1000,
    "icon": "🧹",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Corpse Disintegration",
      "Lemon Scent"
    ],
    "vendor": "custodians",
    "shippedBy": "Sanitation Truck",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Corpse Disintegration",
        "rules": "Instantaneous effect. Activated by an action within a 30-foot radius of the target area, disintegrating up to five corpses and removing all bloodstains. This effect has no save DC and is limited to one use per day."
      },
      {
        "title": "Lemon Scent",
        "rules": "Lasts for 24 hours after activation. The air fills with a persistent lemony fragrance that masks odors, providing a pleasant environment but not affecting any creatures in the area."
      }
    ],
    "levelRequirementReason": "This service is accessible to most adventurers who might need it for various reasons.",
    "vendorReason": "Custodians Sanitation Services specialize in such matters and are trusted by many adventuring parties.",
    "shippingDetail": "Delivered instantly within the city limits, ensuring quick resolution to any crime scene issues.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use per day",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the specialized and often crucial nature of the service.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-22T01:07:14.431233+00:00",
    "aiReviewedAt": "2026-07-22T01:07:14.431233+00:00",
    "aiReviewVersion": 1
  },
  "custodians_guardian_cape": {
    "id": "custodians_guardian_cape",
    "name": "Custodians Guardian Cape",
    "description": "The Custodians Guardian Cape is a heavy woolen cloak that whispers with the winds of the Keep. Its weave hums with ancient magic, subtly slowing movement by +1 speed but providing a +2 bonus to Perception checks for detecting hidden foes. A vibration in its fibers alerts you to any nearby unseen creatures within 30 feet. The cape's weight is unmistakable, and it bears the emblem of the Custodians.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧥",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Perception Boost",
      "Vibration Alert"
    ],
    "vendor": "custodians_tower",
    "shippedBy": "Guardian Messenger Pigeons",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Perception Boost",
        "rules": "When you make a Perception check to detect hidden creatures within 30 feet, you have advantage. This effect is passive and does not require action."
      },
      {
        "title": "Vibration Alert",
        "rules": "The cape alerts you to nearby unseen creatures within 30 feet by causing a vibration in its fibers. You can use an action to focus on the sensation and pinpoint the direction of any such creature, but this effect does not provide a save or DC."
      }
    ],
    "levelRequirementReason": "The Guardian Cape requires level 6 due to its passive bonuses and subtle magic that enhances perception without being overly powerful.",
    "vendorReason": "The Custodians Tower specializes in crafting and selling items related to their guardianship duties, including this cloak.",
    "shippingDetail": "Delivered by swift messenger pigeons within a day of purchase.",
    "usage": {
      "activation": "Passive",
      "duration": "Instantaneous (alerts immediately on detection)",
      "endsWhen": "Exhausts after 24 hours",
      "charges": "Unlimited, recharges daily"
    },
    "priceReason": "The price reflects the cloak's rare and functional nature, offering a balance between utility and rarity.",
    "priceOriginal": 17000,
    "priceReviewedAt": "2026-07-22T01:07:23.030047+00:00",
    "aiReviewedAt": "2026-07-22T01:07:23.030047+00:00",
    "aiReviewVersion": 1
  },
  "custodians_janitorial_overalls": {
    "id": "custodians_janitorial_overalls",
    "name": "Custodians Janitorial Overalls",
    "description": "The Custodians Janitorial Overalls are a marvel of sanitation, crafted from a stain-resistant fabric that repels even the filthiest messes. They are said to be imbued with a special bleach formula, making them perpetually spotless and emitting a faint scent of chlorine, which is both a boon in emergencies and a hindrance when trying to blend into shadows. The pockets are always filled with essential tools for any cleanup—bucket, mop, soap, and rag—but only one can be accessed at a time.",
    "category": "equipment",
    "price": 1000,
    "icon": "👷",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Perpetually Clean",
      "Clean-Scented"
    ],
    "vendor": "custodians",
    "shippedBy": "Sanitation Truck",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Perpetually Clean",
        "rules": "The wearer is immune to dirt, mud, blood, or food stains. This effect lasts until the end of each long rest."
      },
      {
        "title": "Clean-Scented",
        "rules": "The wearer emits a faint scent of chlorine, granting advantage on Intimidation checks but disadvantage on Stealth checks due to their cleanliness."
      }
    ],
    "levelRequirementReason": "These overalls are designed for anyone who needs to ensure they remain spotless at all times.",
    "vendorReason": "Custodians Uniform Supply is known for providing the finest in sanitation attire, and these overalls are no exception.",
    "shippingDetail": "Delivered via a specially marked Sanitation Truck, ensuring timely arrival with minimal delay.",
    "usage": {
      "activation": "Instantaneous effect upon donning the overalls.",
      "duration": "Permanently active until the end of each long rest.",
      "endsWhen": "Restores to normal state after one long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at a lower price due to its passive, non-combat utility and limited duration.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-22T01:07:35.298519+00:00",
    "aiReviewedAt": "2026-07-22T01:07:35.298519+00:00",
    "aiReviewVersion": 1
  },
  "custodians_recipe_sanitation_sorbet": {
    "id": "custodians_recipe_sanitation_sorbet",
    "name": "Recipe: Custodians Sanitation Sorbet",
    "description": "This parchment recipe, written in neat ink by the Custodians Culinary, details a sanitation sorbet that not only cleanses your palate but also purifies your very soul. The sorbet is made from rare mint and elderflower, ensuring each spoonful leaves you feeling as fresh as the breeze after a spring rain. Eaten before entering a dirty area, it grants you an advantage on Charisma checks for one hour, making your words carry weight like a trusted companion's advice.",
    "price": 1000,
    "icon": "📜",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Soul Cleansing",
      "Charisma Boost"
    ],
    "vendor": "custodians",
    "shippedBy": "Sanitation Truck",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Soul Cleansing",
        "rules": "When consumed in a dirty area, this sorbet removes one disease or poison. The effect is instantaneous and does not require an action to activate."
      },
      {
        "title": "Charisma Boost",
        "rules": "For one hour after consumption, you gain advantage on Charisma checks and saving throws. This effect ends when the duration expires or if you consume something tainted within 24 hours of taking the sorbet."
      }
    ],
    "levelRequirementReason": "This recipe is accessible to all adventurers as it can be used by anyone regardless of their level.",
    "vendorReason": "The Custodians Culinary are known for their unique and practical recipes that help adventurers in various situations.",
    "shippingDetail": "Ships via the Sanitation Truck, ensuring the sorbet remains fresh and potent during transit.",
    "usage": {
      "activation": "Instantaneous consumption upon entering a dirty area or before making Charisma checks.",
      "duration": "One hour for Soul Cleansing; one hour for Charisma Boost.",
      "endsWhen": "Duration expires or you consume something tainted within 24 hours of taking the sorbet.",
      "charges": "Unlimited, as each serving is a single use."
    },
    "priceReason": "This recipe is priced at 1000 XP due to its practical utility and the rare ingredients used in its creation.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-22T01:08:14.410712+00:00",
    "aiReviewedAt": "2026-07-22T01:08:14.410712+00:00",
    "aiReviewVersion": 1
  },
  "custodians_ward_stone_premium": {
    "id": "custodians_ward_stone_premium",
    "name": "Custodians Ward Stone (Premium)",
    "description": "The Custodians' Ward Stone Premium is a guardian of stone and shadows, crafted by the Guardian Masons from ancient volcanic glass. When placed, it casts an unyielding barrier that sets off an audible alarm within its 10-foot radius for 8 hours, alerting nearby guardians to any intruders. Should you turn your back on this sentinel, it rolls away in a cloud of dust, only to return if watched intently.",
    "price": 1000,
    "icon": "🪨",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Volcanic Alarm",
      "Rolls Away"
    ],
    "vendor": "custodians_fortress",
    "shippedBy": "Stone Sling",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Volcanic Alarm",
        "rules": "When placed, the Custodians' Ward Stone Premium activates an alarm within a 10-foot radius. The area is under constant vigilance for 8 hours; any creature failing a DC 13 Dexterity (Stealth) check while in range triggers the alarm. The effect ends if the stone is removed or destroyed."
      },
      {
        "title": "Rolls Away",
        "rules": "If not watched continuously, the stone detaches itself from its placement and rolls away to a random location within 30 feet of where it was originally placed, creating a cloud of dust upon departure. This effect can be prevented by maintaining visual contact with the stone."
      }
    ],
    "levelRequirementReason": "This item is suitable for all adventurers, as its placement and alarm function do not require high-level spellcasting.",
    "vendorReason": "Guardian Masons are known for their craftsmanship in stone and security, making them the ideal vendor for such a sentinel.",
    "shippingDetail": "Delivered by the Stone Sling, this shipment is swift but requires careful handling to ensure the stone's integrity.",
    "usage": {
      "activation": "Placing the stone manually",
      "duration": "8 hours or until removed or destroyed",
      "endsWhen": "Removal or destruction of the stone; alarm ceases upon activation",
      "charges": "Unlimited"
    },
    "priceReason": "The premium quality and craftsmanship contribute to its value, though it remains accessible for all adventurers.",
    "priceOriginal": 19000,
    "priceReviewedAt": "2026-07-22T01:08:22.702739+00:00",
    "aiReviewedAt": "2026-07-22T01:08:22.702739+00:00",
    "aiReviewVersion": 1
  },
  "custodians_warded_cooking_grate": {
    "id": "custodians_warded_cooking_grate",
    "name": "Custodians Warded Cooking Grate",
    "description": "The Custodians Warded Cooking Grate is a heavy, iron-clad cooking grate etched with ancient runes that shimmer faintly under the hearth's glow. Crafted by the Custodian Forgers in their forges of legend, this griddle not only ensures the safety of its users but also extends the shelf life of cooked dishes, preserving their freshness for an extra day. Its wards are said to ward off any culinary mishaps, ensuring that every meal turns out perfectly safe and delicious.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍞",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Grills with Protection",
      "Extended Freshness"
    ],
    "vendor": "custodians_fortress",
    "shippedBy": "Warded Wire Ware",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grills with Protection",
        "rules": "The Custodians Warded Cooking Grate provides a +1 bonus to saving throws made against effects caused by cooking mishaps. This benefit is active while the griddle is in use for preparing food."
      },
      {
        "title": "Extended Freshness",
        "rules": "For every meal prepared using this grate, any cooked dish remains fresh for an additional 24 hours beyond its normal shelf life. This effect applies to all cooked dishes and can be used once per day."
      }
    ],
    "levelRequirementReason": "This item is designed for use by anyone who wishes to ensure their meals are both safe and delicious.",
    "vendorReason": "The Custodian Forgers, known for their craftsmanship, have long been trusted suppliers of high-quality kitchenware.",
    "shippingDetail": "Ships via Warded Wire Ware with a guaranteed delivery within 3 days.",
    "usage": {
      "activation": "Passive effect while in use for cooking food.",
      "duration": "Instantaneous; lasts until the meal is ready or consumed.",
      "endsWhen": "The effects end once the cooked dish is consumed or the griddle stops being used for cooking.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "This item's price reflects its quality craftsmanship and unique magical properties, providing a significant benefit to users.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T01:08:02.015257+00:00",
    "aiReviewedAt": "2026-07-22T01:08:02.015257+00:00",
    "aiReviewVersion": 1
  },
  "custodians_warded_herb_bread_recipe": {
    "id": "custodians_warded_herb_bread_recipe",
    "name": "Recipe: Custodians Warded Herb Bread",
    "description": "The Recipe for Custodians' Warded Herb Bread is a culinary tradition passed down by the custodian knights of Fortified Keep, baked in their stone ovens using only sacred herbs and fortified ingredients. This bread not only enhances one's armor class temporarily but also acts as a guardian, detecting nearby evil presences. The wards are imbued with the essence of the keep’s protective magic, ensuring that each slice brings both defensive benefits and a sense of ancient guardianship.",
    "price": 1000,
    "icon": "🍞",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Warded Defense",
      "Evil Detection"
    ],
    "vendor": "custodians_fortress",
    "shippedBy": "Guarded Grain Guide",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Warded Defense",
        "rules": "Eating this bread grants the eater +1 bonus to AC as long as it remains in their possession. The effect lasts for 4 hours or until consumed, whichever comes first."
      },
      {
        "title": "Evil Detection",
        "rules": "The bread also acts as a passive detection tool, providing a constant sense of awareness about the presence of evil within a 30-foot radius. This effect does not require an action and lasts for the duration of the bread's AC bonus."
      }
    ],
    "levelRequirementReason": "The recipe is simple enough to be learned by novice bakers but still valuable due to its unique properties.",
    "vendorReason": "Custodian Cooks are known for their expertise in creating protective and flavorful dishes that enhance the fort’s defenders.",
    "shippingDetail": "The bread is carefully delivered by the Guarded Grain Guide, ensuring it arrives fresh and imbued with its magical properties.",
    "usage": {
      "activation": "Eating the bread grants the effects immediately.",
      "duration": "Lasts for 4 hours or until consumed.",
      "endsWhen": "Consumption of the bread ends both effects.",
      "charges": "Unlimited; can be eaten multiple times."
    },
    "priceReason": "The recipe combines rare ingredients and specialized baking techniques, making it a valuable but not overpowered addition to one's gear.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T01:08:00.233686+00:00",
    "aiReviewedAt": "2026-07-22T01:08:00.233686+00:00",
    "aiReviewVersion": 1
  },
  "cybernetic_automatic_stirrer": {
    "id": "cybernetic_automatic_stirrer",
    "name": "Cybernetic Automatic Stirrer",
    "description": "The Cybernetic Automatic Stirrer is a sleek, metallic robotic arm that hums quietly as it blends and stirs with precision. Crafted by Cybernetic Kitchen Robotics from high-grade steel alloy, this tool ensures your mixtures are always perfectly blended without any manual effort on your part. It's the perfect companion for any chef who values efficiency over elbow grease, though its relentless stirring occasionally risks overmixing unless you're quick to act.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔧",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Hands-Free Cooking",
      "Occasional Overmix"
    ],
    "vendor": "cybernetic",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hands-Free Cooking",
        "rules": "When used as a bonus action, the Cybernetic Automatic Stirrer automatically stirs any recipe you are currently preparing. You have advantage on checks to prepare food or drink, and it frees up your hands for other tasks."
      },
      {
        "title": "Occasional Overmix",
        "rules": "There is a 10% chance (requiring a Dexterity saving throw with a DC of 12) that the stirrer will overmix any mixture you are preparing, causing ingredients to spill or waste. This effect ends when you successfully save."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners and those who want to streamline their cooking process without requiring high-level proficiency.",
    "vendorReason": "Cybernetic Kitchen Robotics specializes in enhancing kitchen efficiency with advanced tools like the Cybernetic Automatic Stirrer.",
    "shippingDetail": "Delivered within a single day, ensuring your cooking station is equipped for the next meal.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "The stirrer stops when you deactivate it or if an overmix occurs.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this item offers a practical tool without overpowering the game.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T01:08:13.237595+00:00",
    "aiReviewedAt": "2026-07-22T01:08:13.237595+00:00",
    "aiReviewVersion": 1
  },
  "cybernetic_eye_implant": {
    "id": "cybernetic_eye_implant",
    "name": "Cybernetic Eye Implant",
    "description": "The Cybernetic Eye Implant replaces your natural eye with an artificial one that glows faintly in the dark, enhancing vision to see clearly even where shadows reign. This implant is made by Cybernetic Corp., a renowned firm known for crafting biomechanical enhancements. With this upgrade, you can perceive through magical darkness as if it were merely dim light, and your eyesight sharpens enough to detect hidden creatures or secret doors within 60 feet.",
    "category": "equipment",
    "price": 1000,
    "icon": "👁️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Grants Darkvision 60ft",
      "Sees Normally in Magical Darkness"
    ],
    "vendor": "cybernetic_corp",
    "shippedBy": "Medical Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Darkvision",
        "rules": "You can see perfectly well under conditions of dim light and magical darkness. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Magical Darkness Vision",
        "rules": "While in areas of magical darkness, you treat them as if they were merely dim light. You do not need to make Perception checks or Wisdom (Perception) checks for vision-related effects within these conditions. This effect lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This implant is designed to be a basic upgrade, suitable for adventurers who are just starting their journey.",
    "vendorReason": "Cybernetic Corp. specializes in enhancing the physical capabilities of its clients, making this implant one of their most popular offerings.",
    "shippingDetail": "Delivered within 3 days via a secure medical courier service.",
    "usage": {
      "activation": "Passive effect upon insertion and activation with a long rest.",
      "duration": "Lasts until the end of your next long rest.",
      "endsWhen": "Expires at the end of your next long rest.",
      "charges": "Unlimited, recharged by a long rest."
    },
    "priceReason": "The price reflects the implant's basic functionality and ease of use for new adventurers.",
    "priceOriginal": 11000,
    "priceReviewedAt": "2026-07-22T01:08:27.181247+00:00",
    "aiReviewedAt": "2026-07-22T01:08:27.181247+00:00",
    "aiReviewVersion": 1
  },
  "cybernetic_optic_scanner": {
    "id": "cybernetic_optic_scanner",
    "name": "Cybernetic Optic Scanner",
    "description": "The Cybernetic Optic Scanner replaces your natural eye, granting you enhanced vision that pierces through illusions and reveals thermal signatures and microscopic flaws. Crafted by Cybernetic Corp using advanced surgical techniques, this implant allows you to see beyond the visible spectrum, making it invaluable for espionage or investigative work. With a mere thought, you can activate its thermal vision to detect heat signatures up to 30 feet away, or use its structural analysis to gain advantage on attempts to break through fortified structures.",
    "price": 1000,
    "icon": "👁️",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "True Sight within 30 feet",
      "Advantage on checks to break objects"
    ],
    "vendor": "Cybernetic Corp",
    "shippedBy": "Surgical Implant Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "True Sight Within 30 Feet",
        "rules": "Activates as a bonus action, providing you with the benefits of the True Sight spell for 1 minute. You can end this effect early by using another bonus action. If you are incapacitated or fall unconscious, the effect ends."
      },
      {
        "title": "Advantage on Break Checks",
        "rules": "Activates as a free action when attempting to break an object, granting you advantage on the check for 1 hour. This benefit can be used once per long rest and is not cumulative with other similar effects."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 5 to ensure that the user has the physical and mental fortitude needed for such advanced technology.",
    "vendorReason": "Only Cybernetic Corp, renowned for their cutting-edge medical devices, can produce this high-tech implant.",
    "shippingDetail": "Delivered by a team of skilled surgeons within one week. Requires a pre-scheduled appointment with the vendor.",
    "usage": {
      "activation": "Bonus action for True Sight; free action to gain advantage on break checks",
      "duration": "True Sight lasts 1 minute, Advantage on break checks lasts 1 hour",
      "endsWhen": "Effect ends when you are incapacitated or fall unconscious, or if you use another bonus action to end it.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP as a high-tech implant that provides significant utility without being overpowered.",
    "priceOriginal": 70000,
    "priceReviewedAt": "2026-07-22T01:09:19.959402+00:00",
    "aiReviewedAt": "2026-07-22T01:09:19.959402+00:00",
    "aiReviewVersion": 1
  },
  "cybernetic_recipe_synthetic_steak": {
    "id": "cybernetic_recipe_synthetic_steak",
    "name": "Recipe: Cybernetic Synthetic Steak",
    "description": "The Recipe: Cybernetic Synthetic Steak yields a steak that defies nature itself, crafted in the sterile labs of Cybernetic Food Labs. This synthetic marvel provides nourishment without requiring real meat, making it invaluable for adventurers who travel far from civilization or those with dietary restrictions. While it grants you a hearty meal, it also leaves a metallic aftertaste and a robotic edge to your senses, offering advantage on saves versus poison but disadvantage on Charisma checks while consuming it.",
    "price": 1000,
    "icon": "📜",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Robotic Edge",
      "Metallic Aftertaste"
    ],
    "vendor": "cybernetic",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Robotic Edge",
        "rules": "While eating this steak, you gain advantage on saving throws against poison. However, you suffer disadvantage on Charisma checks and saving throws for charm effects until your next long rest."
      },
      {
        "title": "Metallic Aftertaste",
        "rules": "You are affected by a mild dissonance that lasts the duration of consumption. This imposes a penalty of -1 to all Charisma-based rolls during this time, but you gain advantage on saving throws against poison."
      }
    ],
    "levelRequirementReason": "The recipe is simple enough for most adventurers to understand and apply.",
    "vendorReason": "Cybernetic Food Labs specializes in creating innovative foodstuffs that cater to the needs of travelers and those with unique dietary requirements.",
    "shippingDetail": "The steak is delivered fresh, but it must be consumed within 24 hours of arrival to maintain its qualities.",
    "usage": {
      "activation": "Eating the steak.",
      "duration": "Instantaneous consumption; effects last until your next long rest.",
      "endsWhen": "Once you complete a long rest or if the steak is not consumed within 24 hours after delivery.",
      "charges": "Unlimited, as long as you consume it within its shelf life."
    },
    "priceReason": "The recipe's rarity and unique properties justify this price point in an adventurer's budget.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-22T01:08:39.623250+00:00",
    "aiReviewedAt": "2026-07-22T01:08:39.623250+00:00",
    "aiReviewVersion": 1
  },
  "cybernetic_repair_nanite_patch": {
    "id": "cybernetic_repair_nanite_patch",
    "name": "Cybernetic Repair Nanite Patch",
    "description": "The Cybernetic Repair Nanite Patch is a small, adhesive square of advanced tech. Crafted from rare nanomaterials and imbued with arcane energies, it can mend the most damaged cybernetics. Applied directly to a broken or malfunctioning limb, this patch releases a cloud of shimmering nanites that repair the damage instantly, restoring the limb’s functionality and health. If used on a non-cybernetic creature, the patch still activates but only provides a brief tingle before expiring.",
    "category": "consumables",
    "price": 1000,
    "icon": "🩹",
    "stock": 12,
    "rarity": "rare",
    "effects": [
      "Cybernetic Limb Repair",
      "Tingly but Ineffective"
    ],
    "vendor": "Cybernetic",
    "shippedBy": "Tech Support Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cybernetic Limb Repair",
        "rules": "Apply as an action. The patch releases a cloud of nanites that repair one negative condition (e.g., broken, jammed) on the target cybernetic limb and restores 1d8 hit points to it. This effect is instantaneous and has no save DC. The patch can be used once per day."
      },
      {
        "title": "Tingly but Ineffective",
        "rules": "When applied to a non-cybernetic creature, the patch still activates but only provides a brief tingle that lasts for 1 round. This effect is harmless and does not affect the target in any way. The patch can be used once per day."
      }
    ],
    "levelRequirementReason": "This item helps even low-level characters who may have minor cybernetic issues.",
    "vendorReason": "The Cybernetic vendor specializes in all things related to advanced prosthetics and enhancements, including repair tools like the Nanite Patch.",
    "shippingDetail": "Ships via Tech Support Courier within one week of purchase.",
    "usage": {
      "activation": "Apply as an action.",
      "duration": "Instantaneous for cybernetic repairs; lasts 1 round on non-cybernetic targets.",
      "endsWhen": "The effect expires after its duration or when a new activation occurs.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced price for an item that provides significant utility to characters with cybernetic limbs, without being overly powerful.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T01:09:01.855402+00:00",
    "aiReviewedAt": "2026-07-22T01:09:01.855402+00:00",
    "aiReviewVersion": 1
  },
  "cybernetic_replacement_limb": {
    "id": "cybernetic_replacement_limb",
    "name": "Cybernetic Replacement Limb",
    "description": "The Cybernetic Replacement Limb is a marvel of modern biomechanics, crafted from sleek, bio-compatible alloy and encased in a custom-fitted synthetic skin that mimics your original limb's texture. It not only restores lost functionality but also enhances it—your new arm can deliver an extra +1 damage with melee attacks, while your upgraded leg grants you +10 ft to walking speed and advantage on checks to avoid being knocked prone. This prosthetic is a testament to resilience and innovation, requiring a full week of recovery and attunement before its powers are yours.",
    "category": "services",
    "price": 1000,
    "icon": "🦾",
    "stock": 10,
    "rarity": "epic",
    "effects": [
      "Enhanced Limb Function",
      "Increased Mobility"
    ],
    "vendor": "Cybernetic",
    "shippedBy": "Surgical Unit",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Enhanced Limb Function",
        "rules": "When you use the limb for a melee attack, it grants you advantage on the attack roll and increases your damage by +1. The limb requires attunement for one week before these benefits are available."
      },
      {
        "title": "Increased Mobility",
        "rules": "While equipped, you have a +10 ft bonus to walking speed and gain advantage on checks made to avoid being knocked prone. This effect is active as long as the limb remains attached."
      }
    ],
    "levelRequirementReason": "This prosthetic demands a higher level to ensure that its advanced technology complements your character's capabilities effectively.",
    "vendorReason": "Cybernetic is renowned for their cutting-edge biomechanical enhancements, and this limb represents the pinnacle of their craftsmanship.",
    "shippingDetail": "The replacement limb must be shipped via the Surgical Unit's secure courier service to ensure safe and timely delivery of such a delicate and crucial item.",
    "usage": {
      "activation": "Instantaneous activation upon attachment; benefits are passive while worn.",
      "duration": "Permanent once attuned, until replaced or destroyed.",
      "endsWhen": "Detachment or destruction by magical means.",
      "charges": "Unlimited"
    },
    "priceReason": "The limb's advanced technology and the expertise required for its creation justify a price of 1000 XP.",
    "priceOriginal": 30000,
    "priceReviewedAt": "2026-07-22T01:09:04.041058+00:00",
    "aiReviewedAt": "2026-07-22T01:09:04.041058+00:00",
    "aiReviewVersion": 1
  },
  "cybernetic_robotic_chef_arm": {
    "id": "cybernetic_robotic_chef_arm",
    "name": "Cybernetic Robotic Chef Arm",
    "description": "The Cybernetic Robotic Chef Arm is a gleaming metal appendage that seamlessly integrates into your arm, its sleek design and polished surface reflecting the precision of its craft. This arm not only aids in cooking but also adds a layer of defense by granting +1 AC while you cook with it. However, its autonomy can be a double-edged sword: there's a 10% chance each time you use it that it will add an incorrect ingredient to your dish, requiring you to make a DC 15 Dexterity (Cooking) check or waste the ingredients entirely.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦾",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Extra Arm Cooking",
      "Autonomous Mischief"
    ],
    "vendor": "cybernetic",
    "shippedBy": "Surgical Drone",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Extra Arm Cooking",
        "rules": "While holding this arm, you have advantage on cooking checks. You can also cook while wielding a shield, granting +1 AC as long as the shield is in your other hand."
      },
      {
        "title": "Autonomous Mischief",
        "rules": "There's a 10% chance each time you use this arm that it will add an incorrect ingredient to your dish. If this happens, you must make a DC 15 Dexterity (Cooking) check or waste the ingredients."
      }
    ],
    "levelRequirementReason": "This arm requires at least third-level proficiency with cooking tools due to its intricate controls and calibration.",
    "vendorReason": "Cybernetic specializes in advanced prosthetics, including this unique robotic chef arm that enhances both your culinary skills and combat capabilities.",
    "shippingDetail": "The Surgical Drone ensures swift delivery, often arriving the next day if you order before noon.",
    "usage": {
      "activation": "Use as a bonus action to activate or deactivate the arm while cooking.",
      "duration": "Instantaneous activation; effect lasts until the start of your next turn unless expended on an incorrect ingredient addition.",
      "endsWhen": "The effect ends if you are incapacitated, the arm is damaged beyond repair, or you manually deactivate it.",
      "charges": "Unlimited uses per short rest"
    },
    "priceReason": "This arm is priced fairly given its unique combination of offensive and defensive benefits, as well as its complexity in manufacturing.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-22T01:09:05.042405+00:00",
    "aiReviewedAt": "2026-07-22T01:09:05.042405+00:00",
    "aiReviewVersion": 1
  },
  "cybernetic_techwear_jumpsuit": {
    "id": "cybernetic_techwear_jumpsuit",
    "name": "Cybernetic Techwear Jumpsuit",
    "description": "The Cybernetic Techwear Jumpsuit is a sleek, metallic ensemble adorned with non-functional zippers and an array of glowing indicators. Its design seamlessly merges form and function, though only one aspect holds true: it grants the wearer a +1 bonus to Technology checks due to its streamlined appearance. However, the jinxed zippers ensure that every attempt at using them is met with failure, imposing disadvantage on Sleight of Hand checks when attempting intricate tasks involving the jumpsuit's notorious hardware.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦺",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Technology checks",
      "Disadvantage on Sleight of Hand (when using zippers)"
    ],
    "vendor": "cybernetic",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Technology Check Bonus",
        "rules": "When you make a Technology check, you gain advantage due to the jumpsuit's sleek, functional design."
      },
      {
        "title": "Zippers Jinx",
        "rules": "Whenever you attempt to use zippers on the jumpsuit for Sleight of Hand checks, you have disadvantage. This applies only when using the zippers, and not during other activities."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners who are just starting their journey in technology and gadgetry.",
    "vendorReason": "Cybernetic specializes in tech-related gear, so it makes sense that they would stock this avant-garde jumpsuit.",
    "shippingDetail": "The jumpsuit is delivered via the fast and reliable Drone Delivery service, ensuring you receive your gear within a day of purchase.",
    "usage": {
      "activation": "Passive effect for Technology checks; disadvantage on Sleight of Hand when using zippers",
      "duration": "Instantaneous (effects are always active while wearing the jumpsuit)",
      "endsWhen": "Exhausted after one use per day due to battery drain from glowing indicators",
      "charges": "One daily charge"
    },
    "priceReason": "The jumpsuit's unique design, combined with its functional and cosmetic aspects, justifies a moderate price of 1000 XP.",
    "priceOriginal": 20500,
    "priceReviewedAt": "2026-07-22T01:10:08.337816+00:00",
    "aiReviewedAt": "2026-07-22T01:10:08.337816+00:00",
    "aiReviewVersion": 1
  },
  "cybernetic_usb_port_install": {
    "id": "cybernetic_usb_port_install",
    "name": "Cybernetic USB Port Installation",
    "description": "Behind your ear lies a Cybernetic USB Port Installation, a sleek and metallic port that hums softly when you plug in a skill chip. This implant not only enhances your technological prowess but also subtly alters your appearance, giving you a slight cybernetic glow. The port is made by the reputable Cybernetic Chop Shop, known for their precision craftsmanship. Once installed, you gain proficiency with one tool of your choice and can use it as if it were a skill chip for 7 days. However, there's a catch: under extreme stress or fatigue, there’s a slim chance (5%) that the port will short-circuit, causing you to be stunned for 1 round.",
    "category": "services",
    "price": 1000,
    "icon": "🔌",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Skill Chip Proficiency",
      "Stress-Induced Vulnerability"
    ],
    "vendor": "cybernetic",
    "shippedBy": "Surgical Drone",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Skill Chip Proficiency",
        "rules": "When installed by a qualified vendor, this port grants the user proficiency with one tool of their choice. This effect lasts for 7 days and can be used once per long rest."
      },
      {
        "title": "Stress-Induced Vulnerability",
        "rules": "There is a 5% chance that when you are stressed or fatigued, the port will short-circuit, causing you to become stunned for 1 round. This effect can occur once per day and lasts until your next long rest."
      }
    ],
    "levelRequirementReason": "This item requires a certain technological aptitude and physical resilience, which is more attainable at level 3.",
    "vendorReason": "Cybernetic Chop Shop specializes in enhancing human capabilities with advanced cybernetics.",
    "shippingDetail": "The Surgical Drone ensures a swift and precise delivery, minimizing the risk of complications during the implantation process.",
    "usage": {
      "activation": "Passive effect upon successful installation by a qualified vendor.",
      "duration": "7 days for proficiency and until next long rest for short-circuit chance.",
      "endsWhen": "The effect ends when you gain another level or through a long rest after the initial 7-day period.",
      "charges": "Unlimited, but requires a long rest to regain any lost abilities."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its moderate rarity and significant benefit for a player character.",
    "priceOriginal": 21500,
    "priceReviewedAt": "2026-07-22T01:09:32.622993+00:00",
    "aiReviewedAt": "2026-07-22T01:09:32.622993+00:00",
    "aiReviewVersion": 1
  },
  "cyberpunk_neural_link": {
    "id": "cyberpunk_neural_link",
    "name": "Neural Link Implant",
    "description": "The Neural Link Implant, forged from cybernetic and organic materials, is a testament to the artificer tower's precision craftsmanship. This tiny implant, barely visible beneath your skin, enhances your mind with unparalleled clarity and speed, allowing you to hack into complex systems with ease. A quick pulse of its energy can stun even the most advanced security systems for a fleeting moment, but at the risk of unsettling your psyche, leaving you vulnerable to cyberpsychosis if overused.",
    "category": "premium",
    "price": 1000,
    "icon": "🧠",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "+2 INT: Hack Devices (DC 15)",
      "Quickhack: Stun Machine (once/day)"
    ],
    "vendor": "artificer_tower",
    "shippedBy": "Implant Surgery",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "+2 INT: Hack Devices",
        "rules": "This effect grants you a +2 bonus to Intelligence checks and saving throws related to hacking devices. The DC for such checks is set at 15."
      },
      {
        "title": "Quickhack: Stun Machine",
        "rules": "Activate as a bonus action. You target a security system or device with your Neural Link Implant, causing it to short-circuit and become inoperable for up to one minute. The effect has no save DC but can only be used once per day."
      }
    ],
    "levelRequirementReason": "The Neural Link Implant requires a minimum character level of 10 due to its advanced cybernetic components and the skill necessary to operate it effectively.",
    "vendorReason": "The Artificer Tower is renowned for its expertise in crafting and maintaining such sophisticated cybernetic enhancements.",
    "shippingDetail": "The Neural Link Implant requires a specialized surgical procedure to be safely installed, ensuring it functions correctly upon delivery.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous (1 minute per use)",
      "endsWhen": "The effect ends when the duration expires or the implant is removed by a medical professional.",
      "charges": "Once/day"
    },
    "priceReason": "This price reflects the advanced technology, specialized materials, and expert labor required to create and install the Neural Link Implant.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-22T01:09:31.574177+00:00",
    "aiReviewedAt": "2026-07-22T01:09:31.574177+00:00",
    "aiReviewVersion": 1
  },
  "daisy_flower": {
    "id": "daisy_flower",
    "name": "Daisy Flower Crown",
    "description": "The Daisy Flower Crown is a delicate woven crown of daisies that sparkles with a soft golden glow. It enhances your physical prowess and brings you good fortune in athletic endeavors, especially when the sun's rays touch it. Wearing this crown grants you +2 to Strength and advantage on Athletics checks, as well as the ability to perform a powerful strike once per short rest which deals an extra 1d8 damage. The crown only blooms fully during daylight hours, its petals shimmering with energy.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌼",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+2 Strength",
      "Advantage on Athletics"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Flower Pot Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Powerful Strike",
        "rules": "You can use a bonus action to make a melee weapon attack. On a hit, the target takes an extra 1d8 damage from this attack. This effect can be used once per short rest."
      },
      {
        "title": "Bloom in Sunlight",
        "rules": "The crown glows more brightly and provides its benefits only during daylight hours. It withers under artificial light or at nightfall, losing all its effects until the next sunrise."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners to help them improve their physical abilities.",
    "vendorReason": "The Toad Town Market is known for its wide array of magical and mundane items, including this one that helps new adventurers hone their skills.",
    "shippingDetail": "Delivered fresh from the market gardens in a fragrant box filled with soil to keep it vibrant during transit.",
    "usage": {
      "activation": "Bonus action for Powerful Strike, passive during daylight hours for its benefits.",
      "duration": "Passive until nightfall or when out of sunlight",
      "endsWhen": "At nightfall, artificial light, or when removed from the user's head",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects its minor but useful effects and rarity.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-22T01:09:33.400058+00:00",
    "aiReviewedAt": "2026-07-22T01:09:33.400058+00:00",
    "aiReviewVersion": 1
  },
  "dao_earthmover_contract": {
    "id": "dao_earthmover_contract",
    "name": "Dao Earthmover Contract (30 Days)",
    "description": "This ancient contract binds an earth genie to reshape terrain at your command. The Earth Sultanate crafted this relic to harness the raw power of elemental forces, and only those of noble spirit can wield it. For thirty days, hire a genie to excavate a 100x100x100-foot area or construct stone structures and precious metal formations, limited by the material's strength. The genie's work is unparalleled in precision and durability.",
    "price": 1000,
    "icon": "🪨",
    "stock": 4,
    "rarity": "legendary",
    "effects": [
      "Earth Excavation",
      "Moldstone Sculpture"
    ],
    "vendor": "genie_contractor",
    "shippedBy": "Elemental Servant",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Earth Excavation",
        "rules": "The genie excavates a 100x100x100-foot area in one day. No save required; the terrain is permanently changed."
      },
      {
        "title": "Moldstone Sculpture",
        "rules": "Create stone and precious metal structures, limited by material availability. The genie can produce up to 5 tons of material per day. A DC 20 Constitution saving throw is required if the construction endangers a creature or structure."
      }
    ],
    "levelRequirementReason": "Requires significant strength and control to command an earth genie.",
    "vendorReason": "The genie contractor has exclusive access to elemental contracts and genie labor.",
    "shippingDetail": "Ships directly from the Earth Sultanate, ensuring the contract's authenticity and power.",
    "usage": {
      "activation": "Action (hire a genie for 30 days)",
      "duration": "30 days",
      "endsWhen": "The genie's labor concludes after 30 days",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced to provide significant utility without breaking the campaign balance.",
    "priceOriginal": 355000,
    "priceReviewedAt": "2026-07-22T01:09:44.032411+00:00",
    "aiReviewedAt": "2026-07-22T01:09:44.032411+00:00",
    "aiReviewVersion": 1
  },
  "dark_elf_shadow_ink": {
    "id": "dark_elf_shadow_ink",
    "name": "Dark Elf Shadow Ink",
    "description": "Dark Elf Shadow Ink is crafted from the very essence of shadowstuff, a substance captured and distilled by the Dark Elves. This ink allows you to write binding contracts that leave no room for doubt; once signed, the soul is bound, and breaking such a contract results in a surge of necrotic energy that can cripple even the strongest soul. The ink's creation requires both skill and ritual, making it a rare and coveted item among those who seek to make irrevocable deals.",
    "price": 1000,
    "icon": "⚫",
    "stock": 4,
    "rarity": "legendary",
    "effects": [
      "Soul-Binding Contract",
      "Necrotic Retribution"
    ],
    "vendor": "dark_elf_vault",
    "shippedBy": "Phantom Messenger",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Soul-Binding Contract",
        "rules": "Any document signed in this ink is magically binding. If the signer attempts to break the contract, they must succeed on a DC 18 Wisdom saving throw or be subjected to 4d10 necrotic damage."
      },
      {
        "title": "Necrotic Retribution",
        "rules": "Breaking a promise written with this ink inflicts 4d10 necrotic damage upon the breaker. The ink requires an action to apply and is potent enough that it can only be used once before needing to be replenished."
      }
    ],
    "levelRequirementReason": "Crafting such powerful ink demands a deep understanding of magic and shadow lore, suitable for those who have reached at least fifth level.",
    "vendorReason": "The Dark Elves are the only known masters of shadowstuff, thus it is fitting that they would sell this rare and potent ink.",
    "shippingDetail": "Ships invisibly through the shadows, ensuring no one sees its passage until it reaches its destination.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect upon signing or breaking a promise",
      "endsWhen": "Once used; requires recharging at the Dark Elf Vault",
      "charges": "Unlimited, but each use requires the application of new ink"
    },
    "priceReason": "The rarity and magical properties of this ink make it a valuable yet balanced commodity for those who can afford its cost.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-22T01:09:46.918789+00:00",
    "aiReviewedAt": "2026-07-22T01:09:46.918789+00:00",
    "aiReviewVersion": 1
  },
  "dark_elf_shadow_pouch": {
    "id": "dark_elf_shadow_pouch",
    "name": "Dark Elf Shadow Pouch",
    "description": "Crafted by Dark Elves from shadow-stuff, this pouch is a marvel of elven craftsmanship. Its interior space defies all logic, fitting far more than its exterior suggests, and it whispers secrets of the night with every movement. The soundproof nature of the Dark Elf Shadow Pouch ensures that any item retrieved remains silent, making it perfect for stealth missions. Once per day, you may call upon the shadows to cast a 'Darkness' spell, blinding enemies within 30 feet.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌑",
    "stock": 8,
    "rarity": "rare",
    "effects": [
      "Bag of Holding",
      "Soundproof"
    ],
    "vendor": "Dark Elves",
    "shippedBy": "Silent Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shadow Darkness",
        "rules": "You can use an action to call upon the shadows once per day. This creates a 20-foot-radius sphere of darkness centered on a point within range for 1 minute. The spell ends early if you are incapacitated or if you dismiss it using an action. A creature in its area when cast must succeed on a DC 13 Constitution saving throw or be blinded until the spell ends."
      },
      {
        "title": "Soundproof",
        "rules": "Any item retrieved from this pouch makes no sound, ensuring that your secrets and treasures remain hidden from prying ears. This effect is always active unless the pouch is damaged or destroyed."
      }
    ],
    "levelRequirementReason": "The Dark Elf Shadow Pouch requires a minimum level of 1 to handle its shadowy magic without mishap.",
    "vendorReason": "Only the Dark Elves possess the knowledge and skill to craft such an artifact, making it their exclusive offering.",
    "shippingDetail": "Delivered by Silent Couriers who ensure the pouch remains soundproof during transit.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous (Shadow Darkness) / 1 minute (Darkness)",
      "endsWhen": "You are incapacitated, dismiss it with an action, or until the spell ends",
      "charges": "Once per day"
    },
    "priceReason": "The Dark Elf Shadow Pouch is priced at 1000 XP due to its unique shadow manipulation and soundproofing abilities.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-22T01:09:47.618456+00:00",
    "aiReviewedAt": "2026-07-22T01:09:47.618456+00:00",
    "aiReviewVersion": 1
  },
  "dark_elves_edgelord_aesthetic_consulting": {
    "id": "dark_elves_edgelord_aesthetic_consulting",
    "name": "Dark Elves Edgelord Aesthetic Consulting",
    "description": "This enigmatic service from the Dark Elves Aesthetic Council transforms your appearance into a somber, dark edgelord. Your gear takes on an ominous black hue with sharp spikes, and you gain +2 to Intimidation checks. However, this comes at a cost: you must endure a tragic backstory crafted by the DM, which can be both embarrassing and memorable. Additionally, you become temporarily sensitive to sunlight for 7 days, even if you were not previously affected.",
    "category": "services",
    "price": 1000,
    "icon": "🖤",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Tragic Backstory",
      "Sunlight Sensitivity"
    ],
    "vendor": "dark_elves",
    "shippedBy": "Shadow Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Tragic Backstory",
        "rules": "At the start of each combat or social encounter, roll a DC 13 Charisma saving throw. On a failure, you must adhere to your tragic backstory, which can significantly hinder your actions."
      },
      {
        "title": "Sunlight Sensitivity",
        "rules": "You have disadvantage on attack rolls and ability checks made in direct sunlight for 7 days after the service is activated. This effect ends when you leave a place with direct sunlight."
      }
    ],
    "levelRequirementReason": "This service is accessible to all levels, as it serves as an introduction to the Dark Elves' aesthetic philosophy.",
    "vendorReason": "The Dark Elves Aesthetic Council specializes in transformative services that reflect their unique cultural identity and philosophies.",
    "shippingDetail": "Delivered by the Shadow Courier, known for its swift and discreet service, ensuring your tragic transformation is kept secret from prying eyes.",
    "usage": {
      "activation": "A standard action to begin the service; it remains active until the end of the next long rest.",
      "duration": "24 hours",
      "endsWhen": "The next long rest after activation",
      "charges": "Unlimited"
    },
    "priceReason": "The price is balanced to reflect a significant but not game-breaking service, offering a thematic and role-playing experience.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-22T01:09:57.429090+00:00",
    "aiReviewedAt": "2026-07-22T01:09:57.429090+00:00",
    "aiReviewVersion": 1
  },
  "dark_elves_poison_vial_service": {
    "id": "dark_elves_poison_vial_service",
    "name": "Dark Elves Poison Vial Service",
    "description": "The Dark Elves Poison Vial Service is a finely crafted vial that seeps a mild, yet insidious poison. Crafted by the elusive Drow Alchemists of the Underdark, this vial's poison not only deals damage but also induces a state of drowsiness that leaves the target vulnerable to further attack. The poison is undetectable by mundane means, ensuring the user's covert actions remain unseen and unheard. Each vial contains enough poison for one use, with a 10% chance that using it will inadvertently affect the wielder.",
    "price": 1000,
    "icon": "☠️",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Poisonous Strike",
      "Sleepy Target"
    ],
    "vendor": "dark_elves_underdark",
    "shippedBy": "Spider Silk Wrap",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Poisonous Strike",
        "rules": "When used, coat one weapon. The next hit with this weapon deals 1d6 poison damage and has a chance to cause the target to become incapacitated for 1 minute (CON save DC 14). On a successful save, the target is only reduced to zero hit points."
      },
      {
        "title": "Sleepy Target",
        "rules": "The target of the attack becomes incapacitated as they succumb to drowsiness. This effect lasts for 1 minute and cannot be dispelled by any means until it expires naturally."
      }
    ],
    "levelRequirementReason": "This item is suitable for characters who have developed some proficiency in stealth and poison use.",
    "vendorReason": "The Drow Alchemists of the Underdark are renowned for their expertise in poisons and toxins, making them the only source for such a refined product.",
    "shippingDetail": "Ships via Spider Silk Wrap, known for its swift delivery through the Underdark's treacherous terrain.",
    "usage": {
      "activation": "On hit with one weapon",
      "duration": "Instantaneous; lasts until target saves or is incapacitated",
      "endsWhen": "Target successfully saves against the poison effect or the duration expires",
      "charges": "1 use per vial"
    },
    "priceReason": "This price reflects the item's rare nature, its alchemical craftsmanship, and the specialized knowledge required to produce it.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T01:10:01.651420+00:00",
    "aiReviewedAt": "2026-07-22T01:10:01.651420+00:00",
    "aiReviewVersion": 1
  },
  "dark_elves_recipe_spider_silk_noodles": {
    "id": "dark_elves_recipe_spider_silk_noodles",
    "name": "Recipe: Dark Elves Spider Silk Noodles",
    "description": "Crafted by the elusive Dark Elves, these noodles are spun from the delicate threads of spiders native to their hidden forests. The noodles' texture is indeed unsettling, yet they provide an advantage on checks involving webs and climbing for 1 hour. While you can move like a spider along walls with ease (speed 10 feet), arachnophobes will likely react with heightened caution, forcing disadvantage on your Charisma checks when interacting with them.",
    "price": 1000,
    "icon": "📜",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Spider Climb",
      "Webs and Climbing Advantage"
    ],
    "vendor": "dark_elves",
    "shippedBy": "Web Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spider Climb",
        "rules": "You can climb walls like a spider. This effect has no duration; it is always active until the item's charges are exhausted."
      },
      {
        "title": "Webs and Climbing Advantage",
        "rules": "Gain advantage on checks involving webs and climbing for 1 hour after consuming the noodles. Once consumed, you must wait 24 hours before eating another serving of these noodles to regain this benefit."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners as its effects are straightforward and do not require advanced skills.",
    "vendorReason": "The Dark Elves have perfected the art of using spider silk in their cuisine, making them the ideal vendor for this delicacy.",
    "shippingDetail": "Each order is delivered by a fleet of spiders that weave the silk directly into your delivery package.",
    "usage": {
      "activation": "Instantaneous consumption; no activation required once consumed.",
      "duration": "1 hour after consumption",
      "endsWhen": "24 hours pass without consuming more noodles or when the item's charges are exhausted, whichever comes first.",
      "charges": "Unlimited"
    },
    "priceReason": "The rarity and unique crafting process required for these noodles justify their moderate price.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-22T01:10:12.606801+00:00",
    "aiReviewedAt": "2026-07-22T01:10:12.606801+00:00",
    "aiReviewVersion": 1
  },
  "dark_elves_shadow_cloak": {
    "id": "dark_elves_shadow_cloak",
    "name": "Dark Elves Shadow Cloak",
    "description": "The Dark Elves Shadow Cloak, a hooded garment woven from the shadows of the forest, seamlessly blends its wearer into darkness. Crafted by the elusive Dark Elves, it whispers secrets in the night and dances with the moonlight. When donned, the cloak grants a sense of timeless elegance, making even the most stealthy movements undetectable in dim light or darkness. Its weight is barely noticeable, yet the fabric itself seems to carry an ancient magic that enhances one's already formidable presence.",
    "category": "equipment",
    "price": 1000,
    "icon": "👗",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Stealth Enhancement",
      "Shifting Shadows"
    ],
    "vendor": "dark_elf_vault",
    "shippedBy": "Shadow Courier",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Stealth Enhancement",
        "rules": "When worn in dim light or darkness, the cloak grants the wearer advantage on Dexterity (Stealth) checks. This effect persists for as long as the cloak is donned and the user remains unseen by others."
      },
      {
        "title": "Shifting Shadows",
        "rules": "The cloak can be activated once per short rest to create an illusory shadow that mimics the wearer's movements, allowing them to slip through tight spaces or avoid detection for a brief period. The illusory shadow lasts for 1 minute."
      }
    ],
    "levelRequirementReason": "The cloak's subtle magic requires a certain level of arcane understanding and finesse.",
    "vendorReason": "As descendants of the Dark Elves, they are the keepers of their ancient secrets and craftsmanship.",
    "shippingDetail": "Ships via shadow courier, arriving at nightfall.",
    "usage": {
      "activation": "Passive effect for stealth checks; active use requires an action to create illusory shadow.",
      "duration": "Passive: Until removed or covered; Active: 1 minute",
      "endsWhen": "Cloak removed, covered, or the wearer becomes seen.",
      "charges": "Unlimited"
    },
    "priceReason": "The cloak's rarity and the Dark Elves' craftsmanship justify its value.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T01:10:23.826743+00:00",
    "aiReviewedAt": "2026-07-22T01:10:23.826743+00:00",
    "aiReviewVersion": 1
  },
  "dark_elves_spider_silk_leggings": {
    "id": "dark_elves_spider_silk_leggings",
    "name": "Dark Elves Spider Silk Leggings",
    "description": "These leggings are crafted from the silken threads of underdark spiders, their weave tight and flexible. They provide unmatched agility in dim light, granting you advantage on Dexterity (Stealth) checks. The fabric is so fine that it seems to shimmer faintly with an inner glow, a hallmark of Drow Weaving craftsmanship. In sunlight, however, the leggings become uncomfortable, emitting a subtle itch that can be resisted by making a Constitution saving throw.",
    "category": "equipment",
    "price": 1000,
    "icon": "👖",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Stealth in Dim Light",
      "Web-like Itch in Sunlight"
    ],
    "vendor": "dark_elves_caverns",
    "shippedBy": "Silk Cocoon Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Stealth Advantage",
        "rules": "While wearing these leggings, you have advantage on Dexterity (Stealth) checks when making them in dim light. This effect is passive and always active as long as you are not exposed to direct sunlight."
      },
      {
        "title": "Sunlight Itch",
        "rules": "In areas of bright or direct sunlight, the leggings emit a faint itch that can be resisted by making a Constitution saving throw (DC 12). Failure results in an uncomfortable sensation for the wearer until they are out of direct sunlight."
      }
    ],
    "levelRequirementReason": "These leggings require a minimum level to ensure proficiency with their unique properties and resistances.",
    "vendorReason": "The Drow Weavers are renowned for their spider silk crafts, and these leggings represent the pinnacle of their artistry.",
    "shippingDetail": "Ships via Silk Cocoon Express, known for its swift and secure deliveries through the Underdark.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Permanent while worn in dim light or until exposed to direct sunlight.",
      "endsWhen": "Effect ends when you are no longer wearing the leggings or are exposed to direct sunlight.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This price reflects the rarity and craftsmanship required for these leggings, as well as their unique properties that enhance stealth in specific conditions.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-22T01:10:28.989103+00:00",
    "aiReviewedAt": "2026-07-22T01:10:28.989103+00:00",
    "aiReviewVersion": 1
  },
  "dark_elves_spider_silk_scarf": {
    "id": "dark_elves_spider_silk_scarf",
    "name": "Dark Elves Spider Silk Scarf",
    "description": "The Dark Elves Spider Silk Scarf is an eerie yet useful accessory, spun from the silk of a rare spider found only in the shadowy forests of Mirkwood. It grants advantage on checks involving webs and climbing, while also allowing the wearer to summon the living arachnid at will, which scurries about providing assistance. However, those who fear spiders are unnerved by its presence, imposing disadvantage on Charisma checks around you.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧣",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Web Checks",
      "Summon Spider Companion"
    ],
    "vendor": "dark_elves",
    "shippedBy": "Web Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Web Checks",
        "rules": "When making a Wisdom (Perception) or Dexterity (Acrobatics, Stealth) check related to webs or climbing, you gain advantage. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Summon Spider Companion",
        "rules": "As an action, you can summon your living spider companion from the scarf. The spider moves at its own speed and can use its actions to aid in combat or exploration. It reverts into a silk form within 1 hour of being summoned."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners, offering assistance early in the adventuring career.",
    "vendorReason": "The Dark Elves Weavers are renowned for their craftsmanship and knowledge of spider silk magic.",
    "shippingDetail": "Delivered by a team of spiders who weave through the forest, ensuring timely arrival.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Until end of next long rest for advantage; summoning is instantaneous and lasts until reversion or dismissal.",
      "endsWhen": "Reverts into silk form after an hour or upon dismissal by the wearer.",
      "charges": "Unlimited, but the spider companion can only be summoned once per day."
    },
    "priceReason": "The scarf's unique properties and rarity justify its price of 1000 XP.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-22T01:10:35.803817+00:00",
    "aiReviewedAt": "2026-07-22T01:10:35.803817+00:00",
    "aiReviewVersion": 1
  },
  "dark_elves_spider_silk_soup_recipe": {
    "id": "dark_elves_spider_silk_soup_recipe",
    "name": "Recipe: Dark Elves Spider Silk Soup",
    "description": "A murky, dark broth simmers in a cauldron, its surface dotted with strands of spider silk that glisten like moonlit cobwebs. This ancient recipe, passed down through generations of Drow matriarchs, infuses the eater with the subtle strength of the shadow elves' cunning. Each spoonful grants +1 to Dexterity for two hours and advantage on saves against being restrained or poisoned by webs or similar effects—after all, few can avoid the web of intrigue in a drow’s lair.",
    "price": 1000,
    "icon": "🍲",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Shadowy Strength",
      "Webbed Resilience"
    ],
    "vendor": "dark_elves_caverns",
    "shippedBy": "Webbed Whisk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shadowy Strength",
        "rules": "Eat this soup to gain +1 to Dexterity for two hours. You also have advantage on saving throws against being restrained or poisoned by webs, silk bonds, or similar effects."
      },
      {
        "title": "Webbed Resilience",
        "rules": "For the duration of the effect, you are considered proficient with spider silk and can use it to climb at a rate of 15 feet per round. If you are already proficient in climbing, your speed increases by 10 feet."
      }
    ],
    "levelRequirementReason": "This recipe requires a basic understanding of elven magic for its potency.",
    "vendorReason": "The Dark Elves Caverns are the birthplace of this soup, where it is both created and revered by their cooks.",
    "shippingDetail": "Ships via a spider-chartered courier, ensuring safe delivery through treacherous terrain.",
    "usage": {
      "activation": "Eating the soup",
      "duration": "2 hours",
      "endsWhen": "The effect ends at the start of your next turn after its duration expires",
      "charges": "Unlimited; consumes one serving"
    },
    "priceReason": "Crafting this soup requires rare ingredients and expertise, making it a valuable yet balanced purchase.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T01:10:37.945200+00:00",
    "aiReviewedAt": "2026-07-22T01:10:37.945200+00:00",
    "aiReviewVersion": 1
  },
  "dark_elves_spider_silk_wisk": {
    "id": "dark_elves_spider_silk_wisk",
    "name": "Dark Elves Spider Silk Whisk",
    "description": "The Dark Elves Spider Silk Whisk, crafted by the nimble-fingered weavers of Mithrilmoor, is a delicate tool made from the finest strands of arachnid silk. Its resilience and flexibility allow it to blend seamlessly into culinary creations, lending them an ethereal sheen and texture. This whisk grants you an advantage on cooking checks involving delicate mixtures, as well as on checks to catch ingredients due to its sticky nature—a boon for any chef or alchemist. However, those with a phobia of spiders may find it unnerving, imposing disadvantage on Charisma-based interactions.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥄",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Cooking Checks",
      "Sticky Whisk"
    ],
    "vendor": "dark_elves",
    "shippedBy": "Web Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Cooking Checks",
        "rules": "When you are making a cooking check involving delicate mixtures, you gain advantage if using this whisk."
      },
      {
        "title": "Sticky Whisk",
        "rules": "When making checks to catch ingredients during cooking or similar tasks, you have advantage due to the natural adhesion of spider silk."
      }
    ],
    "levelRequirementReason": "Suitable for beginners and novice chefs who are eager to refine their culinary skills.",
    "vendorReason": "The Dark Elves are renowned for their mastery in crafting with spider silk, making this whisk a true testament to their expertise.",
    "shippingDetail": "Delivered by spiders who weave through the air, ensuring it arrives safely and swiftly.",
    "usage": {
      "activation": "Passive effect while using the whisk in cooking or similar tasks.",
      "duration": "Instantaneous",
      "endsWhen": "Exhausts after a single use per day; recharge at dawn.",
      "charges": "1 charge, recharges at dawn"
    },
    "priceReason": "Balanced price reflects the high-quality craftsmanship and rare materials used in its creation.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-22T01:10:49.730764+00:00",
    "aiReviewedAt": "2026-07-22T01:10:49.730764+00:00",
    "aiReviewVersion": 1
  },
  "dark_elves_spider_therapy": {
    "id": "dark_elves_spider_therapy",
    "name": "Dark Elves Spider Therapy",
    "description": "This vial of elixir is crafted by Dark Elves Therapists from a spider's silk and the essence of a twilight flower. When consumed, it grants you temporary immunity to the fear of spiders for one hour, allowing you to interact with arachnids without panic. Additionally, it bonds you temporarily to a local spider, which can be your familiar for up to seven days, but beware—it may still send a chill down your spine when around arachnophobes.",
    "category": "services",
    "price": 1000,
    "icon": "🕷️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Spider Silk Elixir",
      "Temporary Familiar"
    ],
    "vendor": "dark_elves",
    "shippedBy": "Web Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spider Silk Elixir",
        "rules": "As an action, you drink this vial and gain advantage on saving throws against the fear of spiders for one hour. This effect ends if you take damage or if you voluntarily end it."
      },
      {
        "title": "Temporary Familiar",
        "rules": "For up to seven days after drinking the elixir, a local spider becomes your familiar. You can use an action to communicate with it. It has AC 14 and 2 hit points. If you take damage or end this effect early, your familiar disappears."
      }
    ],
    "levelRequirementReason": "This elixir is suitable for any adventurer who needs to overcome their fear of spiders.",
    "vendorReason": "Dark Elves Therapists specialize in creating remedies that address common phobias, including arachnophobia.",
    "shippingDetail": "The vial must be shipped inside a specially insulated container to maintain its potency.",
    "usage": {
      "activation": "Drink the elixir as an action.",
      "duration": "One hour, or until you take damage or voluntarily end it.",
      "endsWhen": "You take damage or choose to end the effect.",
      "charges": "Unlimited; can be used multiple times."
    },
    "priceReason": "The price reflects the rarity of spider silk and twilight flower essence, as well as the expertise required in its crafting.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T01:10:43.298161+00:00",
    "aiReviewedAt": "2026-07-22T01:10:43.298161+00:00",
    "aiReviewVersion": 1
  },
  "dark_elves_underdark_simmer_pot": {
    "id": "dark_elves_underdark_simmer_pot",
    "name": "Dark Elves Underdark Simmer Pot",
    "description": "The Dark Elves Underdark Simmer Pot glows faintly, casting a soft luminescence that illuminates the darkest caverns without attracting unwanted attention. Crafted by Drow Potters from enchanted obsidian and bound with spider silk, this pot not only simmers low light but also self-stirs, saving time for busy chefs. It attracts spiders in nearby areas, a useful tool for scouts or those who need to alert allies of hidden dangers.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍲",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Self-Stirring",
      "Attracts Spiders"
    ],
    "vendor": "dark_elves_caverns",
    "shippedBy": "Web-Woven Ware",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Self-Stirring",
        "rules": "The pot automatically stirs the soup with a magical motion, providing an advantage on checks made for cooking in dim areas. This effect is passive and does not require any action."
      },
      {
        "title": "Attracts Spiders",
        "rules": "For every hour the Simmer Pot remains active, it attracts small spiders to a 10-foot radius around it. These spiders can be used as allies or pests at the DM's discretion. This effect ends when the pot is turned off or when the user spends an action to deactivate it."
      }
    ],
    "levelRequirementReason": "The complexity of crafting and enchanting this tool requires a significant amount of knowledge in Drow pottery and magic.",
    "vendorReason": "Dark Elves Caverns is the only vendor that sources rare ingredients from the Underdark, making this pot available to their clientele.",
    "shippingDetail": "The Simmer Pot is delivered with a special webbing cocoon for protection against damage during transit.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous; can be turned off as an action.",
      "endsWhen": "Turned off or when the user spends an action to deactivate it.",
      "charges": "Unlimited, but requires a daily short rest to maintain its enchantment."
    },
    "priceReason": "Crafting this pot involves rare materials and complex enchantments that justify its moderate price in XP.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T01:11:19.082153+00:00",
    "aiReviewedAt": "2026-07-22T01:11:19.082153+00:00",
    "aiReviewVersion": 1
  },
  "dark_prognosticus": {
    "id": "dark_prognosticus",
    "name": "Dark Prognosticus",
    "description": "The Dark Prognosticus, bound in leather dyed black with sigils of doom, is a tome that foretells the end of all worlds. Its pages are inscribed with cryptic runes and shadowy whispers, hinting at the campaign's darkest secrets. Read its pages to learn any hidden truth or glimpse future events, but beware; each page devoured by its reader strips away a piece of their sanity, causing 1d10 points of sanity loss.",
    "category": "forbidden",
    "price": 1000,
    "icon": "📖",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Read the Future",
      "Expose Secrets"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Bleck",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Read the Future",
        "rules": "As an action, you can open the Dark Prognosticus to a random page and read its foretelling. The book reveals one future event relevant to your current campaign. This effect is instantaneous."
      },
      {
        "title": "Expose Secrets",
        "rules": "As an action, you can flip through the pages of the book to learn any hidden secret within 10 feet. You must make a DC 25 Intelligence (Investigation) check to successfully uncover this secret. On a failed check, you suffer no effect."
      }
    ],
    "levelRequirementReason": "Suitable for adventurers of all levels who may face the book's dangers.",
    "vendorReason": "The Onyx Hand is known to deal in rare and forbidden knowledge, making it a fitting vendor for such an artifact.",
    "shippingDetail": "Ships via Bleck with expedited delivery; fragile item requires special handling.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "Effect ends when the reader stops focusing on the book or suffers a failed check.",
      "charges": "Unlimited, but each use risks 1d10 points of sanity loss."
    },
    "priceReason": "Balanced for its powerful and dangerous abilities that could significantly impact the campaign.",
    "priceOriginal": 18000000,
    "priceReviewedAt": "2026-07-22T01:11:49.054477+00:00",
    "aiReviewedAt": "2026-07-22T01:11:49.054477+00:00",
    "aiReviewVersion": 1
  },
  "dark_star_essence": {
    "id": "dark_star_essence",
    "name": "Dark Star Essence",
    "description": "Dark Star Essence glows ominously in its glass vial, a concentrated malevolence that whispers dark secrets and demands payment beyond measure. This vial of corrupted starlight is said to be crafted from the remains of a fallen celestial being, now twisted into an instrument of corruption. Once consumed, it grants the imbiber a temporary boon but sows the seeds of their downfall, drawing the attention of all Fawfuls within reach.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Temporal Power Surge",
      "Corruption Seed"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "SEALED LOCATION - PICKUP ONLY",
    "levelRequirement": 1,
    "warning": "Mages' Guild will vaporize you on sight if caught with this",
    "effectDetails": [
      {
        "title": "Temporal Power Surge",
        "rules": "When consumed as a bonus action, the drinker gains +2 to all ability scores for 1 hour. This effect cannot be used more than once per long rest."
      },
      {
        "title": "Corruption Seed",
        "rules": "At the end of each long rest while in possession of the essence, roll on the Corruption Table (DM has table). If you fail a saving throw against a Fawful's gaze or touch within 24 hours, you must succeed on a DC 15 Constitution save or become permanently corrupted. Once per short rest, you can use your reaction to negate this effect."
      }
    ],
    "levelRequirementReason": "Only the most daring and experienced adventurers should dare to handle such dangerous power.",
    "vendorReason": "The Onyx Hand deals in forbidden knowledge, and Dark Star Essence is one of its darkest wares.",
    "shippingDetail": "Dark Star Essence must be picked up at the Onyx Hand's secret location; no couriers are permitted to transport it.",
    "usage": {
      "activation": "Consumed as a bonus action.",
      "duration": "1 hour, +2 to all ability scores.",
      "endsWhen": "Ends when the effect duration expires or if consumed again before the current one ends.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The price reflects the rarity and danger of handling such a forbidden substance, but its limited utility prevents it from being prohibitively expensive.",
    "priceOriginal": 450000,
    "priceReviewedAt": "2026-07-22T01:11:42.850204+00:00",
    "aiReviewedAt": "2026-07-22T01:11:42.850204+00:00",
    "aiReviewVersion": 1
  },
  "data_merchant_encrypted_drive": {
    "id": "data_merchant_encrypted_drive",
    "name": "Data Merchant Encrypted Drive",
    "description": "A small, unassuming USB drive with a sleek, black casing. It hums quietly and glows faintly when activated, hinting at its encrypted contents. Crafted by Data Merchant, this drive holds sensitive information that could sway entire markets or shift military strategies if in the wrong hands. Only those who possess the correct signature can unlock its secrets; otherwise, it self-destructs with a flash of light and a shower of sparks.",
    "price": 1000,
    "icon": "💿",
    "stock": 4,
    "rarity": "epic",
    "effects": [
      "Self-Destructing Security",
      "Signature Activation"
    ],
    "vendor": "data_merchant_node",
    "shippedBy": "Digital Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Self-Destructing Security",
        "rules": "If opened by an unauthorized signature, the drive emits a blinding flash and disintegrates into sparks. This effect has no save or DC; it is instantaneous upon activation."
      },
      {
        "title": "Signature Activation",
        "rules": "The drive grants its user +5,000 gp in untraceable assets when activated by the correct signature. This effect lasts until used or until the next dawn."
      }
    ],
    "levelRequirementReason": "Beginners with some knowledge of digital security can handle this item.",
    "vendorReason": "Data Merchant specializes in high-security, encrypted devices and assets.",
    "shippingDetail": "Ships via secure courier with enhanced encryption to ensure safe arrival.",
    "usage": {
      "activation": "Passive effect; requires correct signature activation.",
      "duration": "Instantaneous or until next dawn, whichever comes first.",
      "endsWhen": "Used or at the onset of nightfall.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price for an item with significant value and a risk to its owner.",
    "priceOriginal": 22000,
    "priceReviewedAt": "2026-07-22T01:11:01.595152+00:00",
    "aiReviewedAt": "2026-07-22T01:11:01.595152+00:00",
    "aiReviewVersion": 1
  },
  "data_merchant_encrypted_ledger": {
    "id": "data_merchant_encrypted_ledger",
    "name": "Data Merchant Encrypted Ledger",
    "description": "The Data Merchant Encrypted Ledger hums faintly as it lies open, revealing a jumble of encrypted symbols and financial records from illicit deals. This small device, crafted by the Data Merchant Node, is more than just a ledger—it's a treasure trove of potential blackmail material for those with the know-how to unlock its secrets. A successful DC 15 Intelligence check can decipher one page at a time, revealing vital information about past transactions.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📒",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Blackmail Material",
      "Deciphering Required"
    ],
    "vendor": "data_merchant_node",
    "shippedBy": "Courier of Shadows",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blackmail Material",
        "rules": "The ledger contains records of minor black market deals. A successful DC 15 Intelligence check reveals one page of information, which can be used for blackmail or leverage."
      },
      {
        "title": "Deciphering Required",
        "rules": "To access the ledger's contents, a character must make an Intelligence (Investigation) check with a DC of 15. Each successful check deciphers one page of encrypted records."
      }
    ],
    "levelRequirementReason": "The ledger is relatively simple to use but still requires some basic knowledge to access its contents.",
    "vendorReason": "The Data Merchant Node specializes in rare and dangerous goods, including this encrypted device.",
    "shippingDetail": "Ships via the Courier of Shadows, known for their discretion and speed.",
    "usage": {
      "activation": "Intelligence (Investigation) check with a DC of 15 to decipher one page at a time.",
      "duration": "Instantaneous effect; each successful check deciphers one page.",
      "endsWhen": "Exhausted after 3 uses. Recharges after a long rest.",
      "charges": "3 charges"
    },
    "priceReason": "The ledger's value lies in the information it contains, which can be immensely valuable for those seeking leverage or blackmail material.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T01:11:28.235987+00:00",
    "aiReviewedAt": "2026-07-22T01:11:28.235987+00:00",
    "aiReviewVersion": 1
  },
  "data_merchant_info_packet": {
    "id": "data_merchant_info_packet",
    "name": "Data Merchant's Info Packet",
    "description": "The Data Merchant's Info Packet is a sleek, metallic cube that hums with raw data. Upon opening it, you are overwhelmed by an avalanche of information on your chosen topic—facts, theories, and secrets all jumbled together. The packet contains at least one unexpected secret, ensuring your next three Intelligence checks related to the topic receive advantage. However, the data is disorganized; it may take hours to sift through and make sense of.",
    "category": "services",
    "price": 1000,
    "icon": "💾",
    "stock": 999,
    "rarity": "rare",
    "effects": [
      "Advantage on Next Three Intelligence Checks",
      "Disorganized Information"
    ],
    "vendor": "Data Merchant",
    "shippedBy": "Datachip Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Intelligence Check Advantage",
        "rules": "When you open the Data Merchant's Info Packet, you gain advantage on your next three Intelligence checks related to a specific topic. This effect lasts until all three checks are made."
      },
      {
        "title": "Disorganized Data",
        "rules": "The information is raw and requires significant time (at least one hour) and effort to sort through and use effectively. No saving throw or additional mechanic applies unless specified by the DM."
      }
    ],
    "levelRequirementReason": "This item provides a powerful but manageable boost for beginners, ensuring that even lower-level characters can benefit from the Data Merchant's offerings.",
    "vendorReason": "The Data Merchant specializes in providing quick solutions to information needs at any level of expertise.",
    "shippingDetail": "Delivered instantly via a high-speed data courier service provided by Datachip Express.",
    "usage": {
      "activation": "Opening the packet and engaging with its contents.",
      "duration": "Until all three Intelligence checks related to the chosen topic are made.",
      "endsWhen": "After all three successful Intelligence checks, or if the item is destroyed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects a balance between providing valuable information and ensuring it's not overpowered at lower levels.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T01:11:34.652366+00:00",
    "aiReviewedAt": "2026-07-22T01:11:34.652366+00:00",
    "aiReviewVersion": 1
  },
  "data_merchant_memory_defrag": {
    "id": "data_merchant_memory_defrag",
    "name": "Data Merchant Memory Defragmentation",
    "description": "The Data Merchant Memory Defragmentation is a compact device that looks like a sleek, glowing data disk. It organizes your memories for faster recall and ensures that you can access them without confusion. For one week, you gain advantage on an Intelligence check of your choice each day. However, the process of reorganizing your memories comes with its own challenge; during this time, you are at a disadvantage on any Charisma checks made to impress or persuade others.",
    "category": "services",
    "price": 1000,
    "icon": "💾",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Memory Boost",
      "Social Disadvantage"
    ],
    "vendor": "data_merchant",
    "shippedBy": "Data Stream Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Memory Boost",
        "rules": "When activated by an action, you gain advantage on one Intelligence check of your choice each day for 7 days. This effect ends when the duration expires or if you use it again."
      },
      {
        "title": "Social Disadvantage",
        "rules": "While under the effects of Memory Boost, you are at a disadvantage on all Charisma checks made to influence others (such as Diplomacy or Persuasion). This effect is permanent until the duration ends."
      }
    ],
    "levelRequirementReason": "This device helps players quickly enhance their in-game knowledge and problem-solving skills, but it also introduces a social drawback that encourages strategic use.",
    "vendorReason": "The Data Merchant is known for its expertise in memory reorganization and data recovery services, making this item a logical addition to its offerings.",
    "shippingDetail": "Ships via Data Stream's express courier service within the next business day.",
    "usage": {
      "activation": "Activates with an action each day for one week.",
      "duration": "One week, or until used again.",
      "endsWhen": "After one week of use or if reactivated.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "The balanced XP price reflects the item's ability to temporarily enhance a player’s strategic and knowledge-based capabilities while introducing a minor social drawback, ensuring it is neither overpowered nor underpriced.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-22T01:11:42.783187+00:00",
    "aiReviewedAt": "2026-07-22T01:11:42.783187+00:00",
    "aiReviewVersion": 1
  },
  "data_merchant_recipe_digital_dumplings": {
    "id": "data_merchant_recipe_digital_dumplings",
    "name": "Recipe: Data Merchant Digital Dumplings",
    "description": "The Recipe for Data Merchant Digital Dumplings reveals a culinary masterpiece that allows you to store and recall memories perfectly by eating one dumpling per memory. These dumplings, crafted by the Data Merchant Chefs, are made of a rare, translucent dough infused with data from the digital realm. They have a static-like taste that is both peculiar and surprisingly edible, making them a unique delicacy in the world of cuisine. However, consuming these dumplings comes at a cost; you must endure disadvantage on saves versus psychic damage due to the overload of stored memories.",
    "price": 1000,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Perfect Memory Recall",
      "Psychic Vulnerability"
    ],
    "vendor": "data_merchant",
    "shippedBy": "Data Stream Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Perfect Memory Recall",
        "rules": "Eating one dumpling allows you to recall a specific memory perfectly. This effect is instantaneous and does not require an action, but you can only use this ability once per day."
      },
      {
        "title": "Psychic Vulnerability",
        "rules": "You must make a DC 15 Wisdom saving throw when subjected to psychic damage. On a failed save, you take the full amount of damage and are incapacitated for 1 minute."
      }
    ],
    "levelRequirementReason": "The complexity of storing and recalling memories with these dumplings demands a minimum character level.",
    "vendorReason": "As the creators of this unique item, the Data Merchant Chefs naturally sell their own recipe for Digital Dumplings.",
    "shippingDetail": "The dumpling recipes are delivered quickly via Data Stream Express, ensuring freshness and integrity.",
    "usage": {
      "activation": "Instantaneous action to eat one dumpling and recall a memory perfectly; once per day.",
      "duration": "Instantaneous for the memory recall effect. The psychic vulnerability lasts until the start of your next turn after taking damage.",
      "endsWhen": "The effect ends when you use it or at the end of your next turn if not used.",
      "charges": "Unlimited, but only once per day."
    },
    "priceReason": "The recipe is priced lower than its original cost to balance the psychic vulnerability introduced into the effect.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-22T01:12:28.580352+00:00",
    "aiReviewedAt": "2026-07-22T01:12:28.580352+00:00",
    "aiReviewVersion": 1
  },
  "data_merchant_smart_fridge": {
    "id": "data_merchant_smart_fridge",
    "name": "Data Merchant Smart Fridge",
    "description": "The Data Merchant Smart Fridge hums quietly in the corner, its sleek black exterior adorned with a glowing Data Stream logo. This fridge not only keeps your ingredients fresh for an unprecedented 60 days but also sends you telepathic shopping lists that can be either a godsend or a nuisance, depending on how well you manage your gold. The fridge occasionally orders unexpected supplies, adding an element of surprise—sometimes delightful, other times exasperatingly costly.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧊",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Telepathic Shopping Lists",
      "Occasional Unwanted Orders"
    ],
    "vendor": "data_merchant",
    "shippedBy": "Data Stream Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Telepathic Shopping Lists",
        "rules": "The fridge telepathically sends you a shopping list every week, which grants you advantage on Intelligence (Investigation) checks related to managing your inventory but disadvantage on Wisdom (Insight) checks regarding gold management."
      },
      {
        "title": "Occasional Unwanted Orders",
        "rules": "At the start of each long rest, there is a 25% chance that the fridge will order an ingredient you do not want. If this occurs, the player must succeed on a DC 13 Wisdom saving throw or lose 5 XP and have to pay for the unwanted item."
      }
    ],
    "levelRequirementReason": "The fridge requires no special level because it is designed for everyday use by any character.",
    "vendorReason": "Data Merchant Appliances specializes in smart home products, so selling this innovative kitchen appliance fits their expertise.",
    "shippingDetail": "Delivered via Data Stream's high-speed courier service with a guaranteed delivery within the week of purchase.",
    "usage": {
      "activation": "Passive effect; fridge activates automatically every day without requiring any action from the owner.",
      "duration": "Instantaneous for each use, lasts until the next long rest or until the fridge is reset by a technician.",
      "endsWhen": "The effect ends if the character no longer owns the fridge or upon the character's death.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced price reflects the unique combination of convenience and occasional drawbacks, as well as its rarity.",
    "priceOriginal": 21500,
    "priceReviewedAt": "2026-07-22T01:12:13.601089+00:00",
    "aiReviewedAt": "2026-07-22T01:12:13.601089+00:00",
    "aiReviewVersion": 1
  },
  "data_merchant_smart_spatula": {
    "id": "data_merchant_smart_spatula",
    "name": "Data Merchant Smart Spatula",
    "description": "The Data Merchant Smart Spatula is a sleek, compact spatula crafted from polished stainless steel. Its digital display glows with efficiency metrics while it calculates the perfect flip timing for any cooking task. It beeps audibly to alert you when your meal is ready, but its presence makes it difficult to hide in stealth situations. This tool not only tracks your caloric intake during meals but also enhances your understanding of nutritional balance, providing a distinct advantage for those studying medicine or health.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥄",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Perfect flip timing",
      "Audible alerts"
    ],
    "vendor": "data_merchant",
    "shippedBy": "Data Stream Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Perfect Flip Timing",
        "rules": "You gain advantage on any cooking check that involves flipping ingredients. This effect lasts until the end of your next turn after using it."
      },
      {
        "title": "Audible Alerts",
        "rules": "The spatula emits a beep when a dish is ready for serving, granting you disadvantage on Stealth checks while in use."
      }
    ],
    "levelRequirementReason": "This basic tool requires no specific character level to use its simple functionality.",
    "vendorReason": "The Data Merchant Kitchenware is renowned for their innovative tools, and this smart spatula fits perfectly into their line of product offerings.",
    "shippingDetail": "Ships via Data Stream's express courier service within the region.",
    "usage": {
      "activation": "Instantaneous use; requires no action to activate.",
      "duration": "Until end of your next turn after activation.",
      "endsWhen": "The effect ends when you finish a meal or if the spatula malfunctions.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This smart spatula provides a useful advantage in cooking and tracking caloric intake, making it a valuable tool for those who frequently prepare meals and monitor their diet.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-22T01:11:59.653544+00:00",
    "aiReviewedAt": "2026-07-22T01:11:59.653544+00:00",
    "aiReviewVersion": 1
  },
  "data_merchant_stat_reallocation": {
    "id": "data_merchant_stat_reallocation",
    "name": "Data Merchant Stat Reallocation",
    "description": "The Data Merchant Stat Reallocation is a rare card-sized device, emblazoned with the logo of the Data Merchant Exchange. This compact tool allows you to reallocate points between your stats for a temporary boost. For 24 hours, you can shift two points from one ability score into another, but be warned: the process leaves you feeling as if you’ve just navigated through an endless loop of data overload and existential dread.",
    "category": "services",
    "price": 1000,
    "icon": "📊",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Stat Shifting",
      "Post-Shift Malaise"
    ],
    "vendor": "data_merchant",
    "shippedBy": "Quantum Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stat Shifting",
        "rules": "Activate as a bonus action. Choose one ability score to lose two points from, then transfer those points to another score. The effects of this reallocation last for 24 hours. You cannot drop an ability score below 8 or exceed your maximum stat limit."
      },
      {
        "title": "Post-Shift Malaise",
        "rules": "After the reallocation period ends, you suffer a temporary penalty: on the next ability check using any of the drained stats, you have disadvantage. This effect lasts until your next long rest."
      }
    ],
    "levelRequirementReason": "This device is accessible to those who are just beginning their journey but still require strategic planning and resource management.",
    "vendorReason": "The Data Merchant Exchange specializes in services that enhance one's abilities through unconventional means, making this tool a natural fit for their inventory.",
    "shippingDetail": "Ships within 3 days with Quantum Courier Service ensuring secure and fast delivery.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "24 hours",
      "endsWhen": "The reallocation period ends, or if your ability score drops below 8 due to the shift.",
      "charges": "Unlimited"
    },
    "priceReason": "This item strikes a balance by providing a strategic advantage while maintaining an accessible price point.",
    "priceOriginal": 22500,
    "priceReviewedAt": "2026-07-22T01:12:43.202866+00:00",
    "aiReviewedAt": "2026-07-22T01:12:43.202866+00:00",
    "aiReviewVersion": 1
  },
  "data_merchant_zipper_upgrade": {
    "id": "data_merchant_zipper_upgrade",
    "name": "Data Merchant Zipper Upgrade",
    "description": "The Data Merchant Zipper Upgrade is a sleek, metallic fastener that holds vast amounts of data within its sturdy form. Crafted by the Data Merchant Tailors, these zippers are renowned for their durability and capacity to store up to 10 GB of information. To retrieve the stored data, you must make an Intelligence check (DC 14) as the zipper is known to occasionally jam when being opened, adding a layer of challenge.",
    "category": "services",
    "price": 1000,
    "icon": "🔧",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Data Storage Capacity",
      "Intelligence Check Required"
    ],
    "vendor": "data_merchant",
    "shippedBy": "Data Stream Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Data Storage Capacity",
        "rules": "This upgrade can store up to 10 GB of data. Retrieving the information requires a successful Intelligence check (DC 14). Failing this check by more than 5 results in the zipper jamming, giving you disadvantage on your next attempt."
      },
      {
        "title": "Intelligence Check Required",
        "rules": "To retrieve the stored data, make an Intelligence check. Failure by more than 5 causes the zipper to get stuck, adding a -2 penalty to future attempts until it is unstuck."
      }
    ],
    "levelRequirementReason": "This upgrade is suitable for those who need basic data storage and retrieval capabilities.",
    "vendorReason": "The Data Merchant Tailors are known for their innovative zippers that cater to the tech-savvy market, including adventurers who require secure data storage solutions.",
    "shippingDetail": "Delivered via a high-speed Data Stream courier with a guaranteed delivery time of 24 hours.",
    "usage": {
      "activation": "Passive effect upon acquisition. Requires an Intelligence check to retrieve stored data.",
      "duration": "Instantaneous; jamming effect applies until the zipper is unstuck.",
      "endsWhen": "Unstuck by making another successful Intelligence check or when the item is destroyed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the advanced technology and secure storage capabilities provided by this upgrade.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T01:12:26.482542+00:00",
    "aiReviewedAt": "2026-07-22T01:12:26.482542+00:00",
    "aiReviewVersion": 1
  },
  "death_permit": {
    "id": "death_permit",
    "name": "Permit to Kill Death",
    "description": "The Permit to Kill Death is a cosmic artifact, a shimmering black slip of parchment that grants its bearer dominion over mortality itself. Once held, no creature can die, and you become the arbiter of life and death for all beings. The previous keeper crafted it with ancient runes and bound it to Final Delivery for safekeeping. Rumor has it, though, that once wielded, the Permit's power corrupts its bearer, turning them into Death itself.",
    "category": "services",
    "price": 1000,
    "icon": "☠️",
    "stock": 1,
    "rarity": "cosmic",
    "effects": [
      "Immortality Grant",
      "Death Control"
    ],
    "vendor": "afterlife_management",
    "shippedBy": "Final Delivery",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Immortality Grant",
        "rules": "When activated, this permit bestows immortality on all creatures within a 100-foot radius. The effect is instantaneous and lasts until the next dawn. It does not save DC or require a check."
      },
      {
        "title": "Death Control",
        "rules": "Activate as an action to gain control over death for a duration of one day. You can choose who dies within your domain, but this power corrupts you if used excessively. The effect is instantaneous and ends when the permit runs out of charges or upon destruction."
      }
    ],
    "levelRequirementReason": "Only those with significant experience and power can wield such a dangerous artifact without succumbing to its corruption.",
    "vendorReason": "The Afterlife Management company holds the permit as it oversees all matters of mortality, making it their responsibility.",
    "shippingDetail": "Shipped via Final Delivery's express service; delivery can take up to one week depending on location.",
    "usage": {
      "activation": "Activate by holding the permit and stating your intent aloud.",
      "duration": "Instantaneous with a duration of one day per charge, or until destroyed.",
      "endsWhen": "Upon destruction, expiration of charges, or misuse leading to corruption.",
      "charges": "Limited to 5 uses before requiring a full month's rest for recharging."
    },
    "priceReason": "The permit's cosmic rarity and limited utility make it both expensive and valuable.",
    "priceOriginal": 200000000,
    "priceReviewedAt": "2026-07-22T01:12:38.956738+00:00",
    "aiReviewedAt": "2026-07-22T01:12:38.956738+00:00",
    "aiReviewVersion": 1
  },
  "deity_farm_contract": {
    "id": "deity_farm_contract",
    "name": "Deity Farm Management Contract",
    "description": "This ancient contract binds you to a divine farm where you grow minor gods for your personal and strategic advantage. The God Farmer crafted this unique deal, allowing you to harvest one minor god every month (which serves you faithfully for an entire year). You can also breed these gods with specific portfolios, such as war or love, ensuring they align perfectly with your needs. The farm's output is a testament to the contract’s divine origins.",
    "category": "services",
    "price": 1000,
    "icon": "📜",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Minor God Harvest",
      "Portfolio Breeding"
    ],
    "vendor": "divine_agriculture",
    "shippedBy": "Courier of the Celestial Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor God Harvest",
        "rules": "At the start of each month, you can activate this contract to harvest one minor god. The god serves you for a year thereafter."
      },
      {
        "title": "Portfolio Breeding",
        "rules": "You may designate a specific portfolio for breeding, ensuring your minor gods have particular divine traits and abilities."
      }
    ],
    "levelRequirementReason": "This contract is simple enough to be used by any level 1 character who understands its power.",
    "vendorReason": "Divine Agriculture specializes in divine items and contracts, including the Deity Farm Management Contract.",
    "shippingDetail": "Delivered within a week by the swift Courier of the Celestial Post.",
    "usage": {
      "activation": "A bonus action at the start of each month to harvest a minor god. Portfolio breeding is an instantaneous action when you designate the portfolio.",
      "duration": "Instantaneous for harvesting, continuous service from the harvested god until they are dismissed or replaced.",
      "endsWhen": "The contract ends if all charges are expended (limited use per month), and it can be destroyed by a greater deity.",
      "charges": "Monthly harvest is a one-time charge"
    },
    "priceReason": "This price reflects the minor divine powers and services provided, which are significant but not game-breaking.",
    "priceOriginal": 75000000,
    "priceReviewedAt": "2026-07-22T01:12:42.036733+00:00",
    "aiReviewedAt": "2026-07-22T01:12:42.036733+00:00",
    "aiReviewVersion": 1
  },
  "demiplane_of_unlearning": {
    "id": "demiplane_of_unlearning",
    "name": "Demiplane of Unlearning Access",
    "description": "The Demiplane of Unlearning Access is a compact, shimmering globe that opens to a pocket dimension where memories and spells are erased. Once within, you may choose one memory or spell to permanently vanish from your mind. With the right incantation and focus, this device can even nullify a curse with DM approval. Crafted by The Forgetful One, it is an artifact of immense power, entrusted only to those who have earned its trust.",
    "price": 1000,
    "icon": "🌀",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Erase one memory or spell",
      "Nullify a curse (DM approval)"
    ],
    "vendor": "memory_eraser",
    "shippedBy": "Mind Wipe Express",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Memory Erasure",
        "rules": "Activate as an action. Choose one memory or spell to be erased from your mind. The effect is instantaneous and permanent, with no save DC required."
      },
      {
        "title": "Curse Nullification (DM Approval)",
        "rules": "Activate at the DM's discretion. Successfully nullify a curse affecting you by spending 1 charge. No save DC applies; this effect is purely magical in nature."
      }
    ],
    "levelRequirementReason": "Only those of considerable power and wisdom can handle such an artifact without risk.",
    "vendorReason": "Memory Eraser specializes in artifacts that deal with the mind, making them the perfect vendor for this item.",
    "shippingDetail": "Ships via Mind Wipe Express, ensuring secure and rapid delivery to your doorstep.",
    "usage": {
      "activation": "Action or bonus action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after use; recharges on a long rest",
      "charges": "3 uses per day"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's rarity and the risk involved in using such power.",
    "priceOriginal": 695000,
    "priceReviewedAt": "2026-07-22T01:12:44.738388+00:00",
    "aiReviewedAt": "2026-07-22T01:12:44.738388+00:00",
    "aiReviewVersion": 1
  },
  "demon_binding_contract": {
    "id": "demon_binding_contract",
    "name": "Demon Binding Contract",
    "description": "The Demon Binding Contract, a tattered document encrusted with sigils of hellfire and blood, is a relic from the infernal realms. Its leather pages are imbued with the power to summon and bind a demon, ensuring its obedience for an entire year in exchange for your services or gold. However, should you fail to uphold your end of the bargain, the bound demon will hunt you through eternity, its wrath unquenchable.",
    "category": "forbidden",
    "price": 1000,
    "icon": "😈",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Summons and binds a demon (CR up to 10) for one year",
      "Demon must obey all commands within the contract"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Infernal Scroll",
    "levelRequirement": 13,
    "effectDetails": [
      {
        "title": "Summon and Bind Demon",
        "rules": "Activates as an action, lasting for one year. The summoned demon is bound to obey your commands within the contract terms. If broken, the contract requires the summoner to make a DC 18 Intelligence saving throw or be hunted by the demon indefinitely."
      },
      {
        "title": "Demon Obedience",
        "rules": "The summoned demon must follow any command given within the terms of the contract. If disobeyed, the demon can act against you as an action on its turn until it is bound again or the contract ends. The contract requires payment in souls, gold, or future favors."
      }
    ],
    "levelRequirementReason": "Requires at least level 13 to handle and negotiate with infernal entities.",
    "vendorReason": "The Onyx Hand has exclusive access to such forbidden items, having connections with dark forces.",
    "shippingDetail": "Delivery via a spectral courier that arrives within the week, but only on nights of the new moon.",
    "usage": {
      "activation": "Activates as an action; requires a DC 18 Intelligence saving throw to maintain the contract.",
      "duration": "One year from activation",
      "endsWhen": "The summoned demon is bound again or the contract term expires",
      "charges": "Unlimited, but can only be used once per month"
    },
    "priceReason": "Balanced at 1000 XP as it represents a significant risk and reward for both parties.",
    "priceOriginal": 380000,
    "priceReviewedAt": "2026-07-22T04:20:19.722177+00:00",
    "aiReviewedAt": "2026-07-22T04:20:19.722177+00:00",
    "aiReviewVersion": 1
  },
  "demonic_pact_enhancer": {
    "id": "demonic_pact_enhancer",
    "name": "Demonic Pact Enhancer (Booster)",
    "description": "The Demonic Pact Enhancer (Booster) forges a more potent bond between mortal and fiend, doubling the pact's granted bonuses but at an ever-increasing price to your soul. Crafted by Pact Brokers from dark iron and demonic essence, this booster ensures you receive twice the power of your existing pact, yet it exacts a heavy toll on your spiritual reserves each use. Only those who can withstand the infernal bargain should consider wielding this item.",
    "price": 1000,
    "icon": "🤝",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Doubles Pact Benefits",
      "Increases Soul Cost"
    ],
    "vendor": "demon_deal",
    "shippedBy": "Blood Ink",
    "levelRequirement": 16,
    "factionBonus": {
      "infernal": 50
    },
    "effectDetails": [
      {
        "title": "Doubled Pact Benefits",
        "rules": "Activate as a bonus action. The benefits of your pact are doubled for the duration. This effect lasts until the end of your next turn, after which you must make a DC 17 Constitution saving throw or suffer a penalty to all ability checks and attack rolls equal to half the value of the bonuses lost due to this effect."
      },
      {
        "title": "Increased Soul Cost",
        "rules": "Each use of this item increases your soul's cost by an additional 50 XP. This increase is cumulative, meaning each subsequent use costs more than the last."
      }
    ],
    "levelRequirementReason": "Only those who can command a demon and have endured its terms for at least 4 levels should consider this booster.",
    "vendorReason": "Pact Brokers are the sole purveyors of deals with demons, and their boosters are sought by those willing to pay the price.",
    "shippingDetail": "Shipped via a courier who delivers in the dead of night, ensuring secrecy for those who do business with Pact Brokers.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the end of your next turn",
      "endsWhen": "The effect ends at the start of your next turn after activation or if you fail a Constitution saving throw.",
      "charges": "Unlimited, but each use increases soul cost."
    },
    "priceReason": "Balanced as it offers significant power but comes with substantial risks and costs.",
    "priceOriginal": 740000,
    "priceReviewedAt": "2026-07-22T19:24:01.852245+00:00",
    "aiReviewedAt": "2026-07-22T19:24:01.852245+00:00",
    "aiReviewVersion": 1
  },
  "demonic_possession_ward": {
    "id": "demonic_possession_ward",
    "name": "Demonic Possession Ward (Protective)",
    "description": "The Demonic Possession Ward, a shimmering shield of ethereal light, hangs like an unyielding sentinel around your neck. Crafted by Celestial Wardens from the purified essence of ancient holy relics, this talisman not only repels demonic forces but also emits a protective aura that wards off possession attempts within its 100-foot radius. Its presence alone can detect nearby malevolent entities, ensuring you remain safe in a world teeming with darkness.",
    "price": 1000,
    "icon": "🛡️",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "Blocks possession indefinitely",
      "Detects demons"
    ],
    "vendor": "holy_order",
    "shippedBy": "Angelic Herald",
    "levelRequirement": 17,
    "factionBonus": {
      "divine": 75
    },
    "effectDetails": [
      {
        "title": "Blocks Possession",
        "rules": "This ward emits an invisible barrier that repels demonic entities and prevents them from attempting possession. The ward remains active as long as the wearer is within its 100-foot radius, expiring when the item is removed or destroyed."
      },
      {
        "title": "Detects Demons",
        "rules": "The ward continuously scans a 100-foot radius for demonic presences. If any are detected, it emits a soft glow and alerts the wearer with a subtle hum. This effect does not require an action to activate or maintain."
      }
    ],
    "levelRequirementReason": "This powerful item requires significant magical prowess to wield effectively.",
    "vendorReason": "The Holy Order, known for their expertise in divine artifacts, is the sole vendor of this protective amulet.",
    "shippingDetail": "Ships via a dedicated Angelic Courier with expedited delivery within a week.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Indefinite, until removed or destroyed",
      "endsWhen": "When the item is taken off or broken",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects its rarity and the significant magical energy required for its creation.",
    "priceOriginal": 730000,
    "priceReviewedAt": "2026-07-22T04:20:34.813493+00:00",
    "aiReviewedAt": "2026-07-22T04:20:34.813493+00:00",
    "aiReviewVersion": 1
  },
  "desert_sultanate_oasis_verification": {
    "id": "desert_sultanate_oasis_verification",
    "name": "Desert Sultanate Oasis Verification",
    "description": "The Desert Sultanate Oasis Verification is a parchment stamped with the seal of the Sultanate, crafted from sandpaper and ink made from desert flora. This document not only verifies an oasis's existence but also ensures its safety for travelers. For seven days following verification, you gain advantage on Survival checks in deserts, and the verified oasis becomes your 'spot,' requiring a weekly visit to prevent homesickness—failure to do so could lead to dire consequences.",
    "category": "services",
    "price": 1000,
    "icon": "🌴",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Verified Oasis: Safe Passage",
      "Weekly Oasis Visit Requirement"
    ],
    "vendor": "desert_sultanate",
    "shippedBy": "Mirage Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Verified Oasis: Safe Passage",
        "rules": "Upon successful verification, the oasis is guaranteed safe and functional for seven days. You gain advantage on Survival checks made in desert environments within a day of the verification."
      },
      {
        "title": "Weekly Oasis Visit Requirement",
        "rules": "The verified oasis becomes your 'spot,' requiring you to visit it at least once per week or suffer from homesickness, which can affect your mental state and daily activities until you return. Failure to comply results in a -2 penalty on all checks involving Survival in desert environments."
      }
    ],
    "levelRequirementReason": "This item is accessible to lower-level characters as it provides immediate utility without overwhelming power.",
    "vendorReason": "The Desert Sultanate Surveyors are the only ones with the expertise and resources to verify oases accurately, ensuring travelers' safety and peace of mind.",
    "shippingDetail": "Delivered via trusted Mirage Courier, known for its reliable service across desert terrains. The courier ensures timely delivery, even in harsh conditions.",
    "usage": {
      "activation": "Activate on demand by presenting the parchment to an oasis and requesting verification.",
      "duration": "Seven days from activation.",
      "endsWhen": "Upon expiration or if you fail to visit the verified oasis weekly.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The balanced price of 1000 XP reflects its utility and the expertise required for verification, making it a worthwhile investment.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-22T01:13:09.669363+00:00",
    "aiReviewedAt": "2026-07-22T01:13:09.669363+00:00",
    "aiReviewVersion": 1
  },
  "desert_sultanate_oasis_verification_service": {
    "id": "desert_sultanate_oasis_verification_service",
    "name": "Desert Sultanate Oasis Verification Service",
    "description": "The Desert Sultanate Oasis Verification Service is a meticulously crafted parchment that, when presented to an oasis, reveals its true nature with irrefutable proof. The Sultanate Surveyors' seal ensures you are not deceived by a mirage, and for seven days following the check, you gain advantage on saves against illusions. However, this service also leaves you wary; for the same duration, you become cynical, dealing a blow to your interactions with optimists who trust without question.",
    "category": "services",
    "price": 1000,
    "icon": "🌴",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Oasis Verification",
      "Illusion Resistance"
    ],
    "vendor": "desert_sultanate",
    "shippedBy": "Mirage Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Oasis Verification",
        "rules": "Activate this service by presenting the parchment to an oasis. The DM provides details on its authenticity, and you gain advantage on saving throws against illusions for seven days."
      },
      {
        "title": "Cynical Nature",
        "rules": "For seven days after using the service, you have disadvantage on Charisma checks and saves when dealing with optimists who trust easily. This effect is a reminder of the Sultanate Surveyors' skepticism."
      }
    ],
    "levelRequirementReason": "This service requires no special training but ensures users are equipped to handle the harsh realities of desert travel.",
    "vendorReason": "The Desert Sultanate is renowned for its expertise in navigating and ensuring travelers' safety through treacherous terrains, including mirage-prone oases.",
    "shippingDetail": "This service comes with a special delivery that ensures the parchment reaches you within two days of your order.",
    "usage": {
      "activation": "Action (present to an oasis)",
      "duration": "7 days",
      "endsWhen": "The effect ends after 7 days or when used again, expending one charge.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This service is priced at 1000 XP to reflect the Sultanate Surveyors' expertise and the potential dangers of desert travel.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-22T01:13:33.426810+00:00",
    "aiReviewedAt": "2026-07-22T01:13:33.426810+00:00",
    "aiReviewVersion": 1
  },
  "desert_sultanate_sand_sifter_pot": {
    "id": "desert_sultanate_sand_sifter_pot",
    "name": "Desert Sultanate Sand Sifter Pot",
    "description": "This ornate pot features a sifter base crafted from desert clay and inlaid with sandstone patterns. It is used to sift out sand from lentil soups, making them perfectly palatable for even the most discerning diners. The Sultanate Potters have honed its design to ensure it not only filters but also subtly enhances the flavor of desert dishes. Each use leaves a slight grit in the teeth, a small price paid for culinary perfection.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍲",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Desert Sifting",
      "Enhanced Flavor"
    ],
    "vendor": "desert_sultanate_oasis",
    "shippedBy": "Dune Dual Dish Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Desert Sifting",
        "rules": "As an action, you can use this pot to sift sand from ingredients. The pot has a +1 bonus to cooking checks related to desert dishes. This effect ends when the pot is used for another purpose."
      },
      {
        "title": "Enhanced Flavor",
        "rules": "When used in a soup preparation, this pot increases the flavor of the dish by 1 step on the quality of food table. The pot can only be used once per day."
      }
    ],
    "levelRequirementReason": "This simple yet effective tool is suitable for anyone who appreciates desert cuisine.",
    "vendorReason": "The Oasis is known for its expertise in all things desert, including the finest culinary tools.",
    "shippingDetail": "Delivered directly by trusted couriers, ensuring quick and reliable transport from the Sultanate Potters.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Used for another purpose or at the end of your next turn",
      "charges": "Unlimited"
    },
    "priceReason": "The unique craftsmanship and desert-specific utility justify this fair price.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T01:13:49.646909+00:00",
    "aiReviewedAt": "2026-07-22T01:13:49.646909+00:00",
    "aiReviewVersion": 1
  },
  "desert_sultanate_sand_silk_robe": {
    "id": "desert_sultanate_sand_silk_robe",
    "name": "Desert Sultanate Sand Silk Robe",
    "description": "The Desert Sultanate Sand Silk Robe shifts like shifting dunes, its fabric a living tapestry of golden hues and subtle patterns that seem to move with the wind. Crafted by the Sultanate Silkers in an oasis hidden beneath the desert sands, this light robe not only offers a cool respite from the arid heat but also whispers secrets of the desert through the constant motion of its material. A true masterpiece of ancient weaving techniques, it cools the wearer to near-arctic levels and grants advantage on Stealth checks within sandy environments.",
    "category": "equipment",
    "price": 1000,
    "icon": "👘",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Stealth",
      "Cooling Respite"
    ],
    "vendor": "desert_sultanate_oasis",
    "shippedBy": "Dune Drape Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Stealth",
        "rules": "When in a desert environment, the wearer gains advantage on Dexterity (Stealth) checks. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Cooling Respite",
        "rules": "The robe provides a cool respite, reducing the wearer's temperature to near-arctic levels for up to 8 hours each day, after which it must be donned again. It has no effect if worn in non-desert environments."
      }
    ],
    "levelRequirementReason": "This robe is designed for beginners and seasoned travelers alike, offering essential survival benefits in harsh desert conditions.",
    "vendorReason": "The Desert Sultanate Oases are renowned for their mastery of sand silk weaving, making the shop a trusted source for such fine garments.",
    "shippingDetail": "Ships via Dune Drape Express. Delivery can take up to one week due to harsh desert conditions.",
    "usage": {
      "activation": "Passive effect upon donning the robe in a desert environment.",
      "duration": "Until the end of your next long rest or when removed from a desert environment.",
      "endsWhen": "Removal from a desert environment for more than an hour, or at the start of your next long rest.",
      "charges": "Unlimited charges"
    },
    "priceReason": "The balanced price reflects the craftsmanship and materials used in its construction, offering essential benefits without overshadowing other equipment.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-22T04:20:35.375154+00:00",
    "aiReviewedAt": "2026-07-22T04:20:35.375154+00:00",
    "aiReviewVersion": 1
  },
  "desert_sultanate_sand_surf_board_premium": {
    "id": "desert_sultanate_sand_surf_board_premium",
    "name": "Desert Sultanate Sand Surf Board (Premium)",
    "description": "The Desert Sultanate Sand Surf Board (Premium) is a finely crafted board made from the roots of ancient desert palm trees, imbued with the spirit of the winds that shaped the dunes. Glide effortlessly over shifting sands as if they were the ocean, leaving a trail of sand in your wake. This premium model comes with a custom leather harness and a protective case, ensuring it can be shipped securely to any corner of the desert realms.",
    "price": 1000,
    "icon": "🏄",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Sand Surfing",
      "Wind Resistance"
    ],
    "vendor": "desert_sultanate_dunes",
    "shippedBy": "Desert Wind Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Sand Surfing",
        "rules": "While on a sandy terrain, you gain a +20 foot speed bonus and can ignore difficult terrain. This effect lasts for the duration of your time in the desert until you exit it or exhaust its daily use."
      },
      {
        "title": "Wind Resistance",
        "rules": "You have advantage on saving throws against effects that would cause you to be blown away by strong winds, such as those from a sandstorm. This effect is permanent once activated and lasts for the duration of your time in the desert until you exit it."
      }
    ],
    "levelRequirementReason": "The premium craftsmanship and the unique properties of this board make it suitable only for adventurers with at least 6 levels of experience.",
    "vendorReason": "The Sultan Surfers are renowned for their expertise in desert travel, making them the perfect vendors for this premium sand surfboard.",
    "shippingDetail": "This board is shipped via Desert Wind Express, ensuring safe and swift delivery through the treacherous dunes of the Sultanate.",
    "usage": {
      "activation": "As an action at the start of your turn while in a sandy environment.",
      "duration": "Until you leave the desert or exhaust its daily use (1 hour).",
      "endsWhen": "Exhausted, re-entering non-desert terrain, or after 1 hour.",
      "charges": "Daily Use"
    },
    "priceReason": "This premium model is priced at 1000 XP due to its unique properties and the high craftsmanship involved in its creation.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-22T01:14:18.866809+00:00",
    "aiReviewedAt": "2026-07-22T01:14:18.866809+00:00",
    "aiReviewVersion": 1
  },
  "desert_sultanate_silk_scarf": {
    "id": "desert_sultanate_silk_scarf",
    "name": "Desert Sultanate Silk Scarf",
    "description": "A shimmering silk scarf woven from the finest threads of the Sultanate, this garment not only endures the desert's harshest heat but also reflects the sun’s fierce rays. The scarf is said to have been crafted under the watchful eyes of the desert spirits themselves, who imbued it with protective magic. It grants its wearer resistance to fire damage and allows them to hold their breath longer in dire circumstances.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧣",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Resistance to Fire",
      "Extended Breath Holding"
    ],
    "vendor": "sultanates_araby",
    "shippedBy": "Camel Caravan",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resistance to Fire",
        "rules": "While wearing this scarf, you have advantage on saving throws against fire damage. This effect is passive and always active while the scarf is worn."
      },
      {
        "title": "Extended Breath Holding",
        "rules": "You can hold your breath for up to 1 hour longer than normal when wearing the scarf. This benefit lasts until the end of your next long rest or until you remove the scarf."
      }
    ],
    "levelRequirementReason": "This item is crafted from desert silk and spirit magic, making it accessible to even low-level adventurers who venture into the harshest deserts.",
    "vendorReason": "The Sultanate of Araby is known for its mastery of desert textiles and spiritual craftsmanship, ensuring that this scarf is both functional and imbued with protective magic.",
    "shippingDetail": "Shipped by the trusted Camel Caravan, known for delivering goods across the harshest deserts safely and swiftly.",
    "usage": {
      "activation": "Passive effect while wearing; requires no action to activate.",
      "duration": "Active as long as worn; ends when removed or at the end of a long rest.",
      "endsWhen": "Removal from wear or completion of a long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted with desert silk and infused with protective magic, this scarf strikes a balance by offering significant utility without being overpowered.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-22T01:14:16.057436+00:00",
    "aiReviewedAt": "2026-07-22T01:14:16.057436+00:00",
    "aiReviewVersion": 1
  },
  "desert_sultanate_spiced_lentil_soup_recipe": {
    "id": "desert_sultanate_spiced_lentil_soup_recipe",
    "name": "Recipe: Desert Sultanate Spiced Lentil Soup",
    "description": "This ancient recipe card bears the seal of the Desert Sultanate and is made from parchment imbued with the earthy scent of cumin. The soup, when prepared, not only heals the body but also fortifies the spirit in the harsh dunes. Consuming this spiced lentil soup grants you temporary hit points equal to your Constitution modifier (minimum +1) for 6 hours and allows you to ignore one instance of heat exhaustion per day. Only the Desert Cooks possess the knowledge to craft it, making it a rare culinary treasure.",
    "price": 1000,
    "icon": "🍲",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Heat Resistance",
      "Constitution Boost"
    ],
    "vendor": "desert_sultanate_oasis",
    "shippedBy": "Spicy Soup Scroll",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heat Resistance",
        "rules": "Eating this soup once per day allows you to ignore one instance of heat exhaustion. This effect lasts for a full day and can be used as long as you have at least 1 hit point."
      },
      {
        "title": "Constitution Boost",
        "rules": "After consuming the soup, you gain temporary hit points equal to your Constitution modifier (minimum +1) for 6 hours. This effect is limited to once per day and has no save or range requirements."
      }
    ],
    "levelRequirementReason": "This recipe requires minimal skill to prepare but still provides significant benefits, making it accessible to all adventurers.",
    "vendorReason": "The Desert Sultanate's official oasis outpost is the only place where this rare and cherished culinary secret is shared with the world.",
    "shippingDetail": "This recipe is delivered via a scroll that also contains detailed instructions for preparation, ensuring authenticity and quality.",
    "usage": {
      "activation": "Eating the soup",
      "duration": "6 hours or until consumed",
      "endsWhen": "The effects expire after 6 hours of consumption",
      "charges": "Unlimited"
    },
    "priceReason": "This recipe is considered uncommon due to its origin, rarity, and the skill required to prepare it properly.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T01:14:05.645344+00:00",
    "aiReviewedAt": "2026-07-22T01:14:05.645344+00:00",
    "aiReviewVersion": 1
  },
  "desert_traders_caravan_tea_kettle": {
    "id": "desert_traders_caravan_tea_kettle",
    "name": "Desert Traders Caravan Tea Kettle",
    "description": "This intricately crafted kettle, made by the renowned Trader Tinsmiths, is a staple of desert caravans. Its dented sides tell tales of countless bumps from camels' backs. The kettle's whistling sound can be heard miles away, summoning travelers to share in its spicy tea. When used over an open flame, it boils water faster than any other vessel, and the aroma of the tea enhances your Persuasion skill by +1.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍵",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Boils Water Faster",
      "Enhances Persuasion"
    ],
    "vendor": "desert_traders_market",
    "shippedBy": "Spice Steam Set Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Boils Water Faster",
        "rules": "When used over a fire, this kettle boils water instantly. It does not expend charges or have a duration."
      },
      {
        "title": "Enhances Persuasion",
        "rules": "For 1 minute after drinking tea from this kettle, your Persuasion skill is enhanced by +1. This effect ends if you are incapacitated or the kettle is destroyed."
      }
    ],
    "levelRequirementReason": "This item requires no specific level to use, as it provides a simple and straightforward benefit.",
    "vendorReason": "The Desert Traders Market sells this kettle because it's an essential tool for their caravans.",
    "shippingDetail": "Ships in 2 days via express delivery service.",
    "usage": {
      "activation": "Instantaneous when placed over a fire and used to boil water.",
      "duration": "Instantaneous for boiling, 1 minute after drinking tea.",
      "endsWhen": "Effect ends if you are incapacitated or the kettle is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its crafted quality and utility in desert environments.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-22T01:14:18.754683+00:00",
    "aiReviewedAt": "2026-07-22T01:14:18.754683+00:00",
    "aiReviewVersion": 1
  },
  "desert_traders_dune_navigation": {
    "id": "desert_traders_dune_navigation",
    "name": "Desert Traders Dune Navigation",
    "description": "The Desert Traders Dune Navigation is a finely crafted guide that allows you to interpret the shifting sands of the desert. With it, you gain unparalleled insight into the dunes' secrets, gaining advantage on Survival checks in deserts for up to 30 days. The core of the item hums with the ancient knowledge of the Desert Traders, who have honed their craft over centuries. However, constant exposure to sand means your eyes are perpetually irritated; you suffer a disadvantage on Perception checks until cleaned.",
    "category": "services",
    "price": 1000,
    "icon": "🏜️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Survival (Deserts)",
      "Perpetual Sand Irritation"
    ],
    "vendor": "desert_traders",
    "shippedBy": "Sandstorm Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Survival (Deserts)",
        "rules": "Gain advantage on all Survival checks made to navigate or survive in desert terrain for up to 30 days. The item must be worn and activated once per day."
      },
      {
        "title": "Perpetual Sand Irritation",
        "rules": "Suffer a disadvantage on all Perception checks until the next time you clean your eyes of sand, which can be done with a short rest or by washing the sand away."
      }
    ],
    "levelRequirementReason": "This item aids beginners as well as seasoned travelers in desert environments.",
    "vendorReason": "Desert Traders have refined their craft over centuries, making this guide an indispensable tool for all who travel the dunes.",
    "shippingDetail": "Ships via Sandstorm Courier directly from the Desert Traders' headquarters. Delivery can take up to one week depending on desert conditions.",
    "usage": {
      "activation": "Activate once per day by wearing it in a desert environment.",
      "duration": "Up to 30 days of advantage, with daily activation required.",
      "endsWhen": "Advantage expires after 30 days or when the item is no longer worn in a desert.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balance of price reflects its utility for beginners and seasoned travelers, providing advantage without being overpowered.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-22T01:14:33.414937+00:00",
    "aiReviewedAt": "2026-07-22T01:14:33.414937+00:00",
    "aiReviewVersion": 1
  },
  "desert_traders_nomad_scarf": {
    "id": "desert_traders_nomad_scarf",
    "name": "Desert Traders Nomad Scarf",
    "description": "The Desert Traders Nomad Scarf is a finely woven wool scarf, its threads dyed to shift hues with the desert light. Crafted by roving nomads who traverse endless dunes, it not only offers warmth but also protection against harsh winds and scorching sun. Its fibers are treated with oils that fade in direct sunlight, allowing it to blend into the surrounding sands effortlessly during the day while remaining a vibrant beacon of trade after dusk.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧣",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Survival Advantage",
      "Sunlight Fade"
    ],
    "vendor": "desert_traders_caravan",
    "shippedBy": "Sand Scarf Express Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Survival Advantage",
        "rules": "When in a desert environment, you gain a +2 bonus to Survival checks. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Sunlight Fade",
        "rules": "During daylight hours, the scarf's color changes and fades into the surrounding sands, providing an advantage on Stealth checks within 10 feet for 1 hour or until you leave a desert environment. This effect can be used once per day."
      }
    ],
    "levelRequirementReason": "The scarf is designed to aid travelers in harsh environments without requiring high-level proficiency.",
    "vendorReason": "Desert Traders Caravans are well-known for their expertise in crafting and trading goods essential for desert survival, including this iconic nomad scarf.",
    "shippingDetail": "Ships via the Sand Scarf Express Courier; delivery time is approximately one week depending on destination.",
    "usage": {
      "activation": "Passive effect upon donning the scarf in a desert environment.",
      "duration": "Until end of your next long rest for Survival Advantage; until you leave the desert or 1 hour for Sunlight Fade, whichever comes first.",
      "endsWhen": "The effects expire naturally when conditions change or after use limit is reached.",
      "charges": "Unlimited daily uses."
    },
    "priceReason": "Balanced at 1000 XP as it provides two beneficial passive abilities that enhance survival in desert environments without being overly powerful.",
    "priceOriginal": 13000,
    "priceReviewedAt": "2026-07-22T01:15:09.639423+00:00",
    "aiReviewedAt": "2026-07-22T01:15:09.639423+00:00",
    "aiReviewVersion": 1
  },
  "desert_traders_sand_grain_counting": {
    "id": "desert_traders_sand_grain_counting",
    "name": "Desert Traders Sand Grain Counting",
    "description": "The Desert Traders Sand Grain Counting is a small, intricately crafted hourglass filled with shimmering sand. It’s not just an artifact; it’s a tool of precision and obsession. This hourglass grants you the ability to count every grain in a 10-foot cube with perfect accuracy, though its true power lies in granting advantage on Investigation checks related to sand or dust storms. Once you begin counting, nothing can distract you until the task is complete—your focus becomes so intense that it introduces disadvantage on all other checks unless you first count.",
    "category": "services",
    "price": 1000,
    "icon": "🏜️",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Counting Precision",
      "Advantage on Sand-Related Checks"
    ],
    "vendor": "desert_traders",
    "shippedBy": "Sand Dune Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Counting Precision",
        "rules": "As a bonus action, you can focus on counting the grains of sand in a 10-foot cube. This action lasts until you have counted all the grains or are interrupted by an attack or spell that deals damage to you. You gain advantage on any Intelligence (Investigation) checks made to analyze sand or dust storms."
      },
      {
        "title": "Obsession",
        "rules": "While counting, you are distracted and gain disadvantage on all other ability checks, saving throws, and attack rolls. This effect ends when the task is completed or if you are attacked by an enemy. You can only use this feature once per short rest."
      }
    ],
    "levelRequirementReason": "The Sand Grain Counting requires basic focus and attention to detail.",
    "vendorReason": "The Desert Traders are renowned for their precision in all matters of sand, making this tool one of their most valued creations.",
    "shippingDetail": "Delivered by the fastest winds across the desert, ensuring it arrives safely and swiftly.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Until counted or interrupted",
      "endsWhen": "Interrupted by an attack or spell dealing damage, task completion, or end of short rest",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to provide a unique and focused utility without overshadowing other abilities.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T01:14:36.657745+00:00",
    "aiReviewedAt": "2026-07-22T01:14:36.657745+00:00",
    "aiReviewVersion": 1
  },
  "desert_traders_spice_blend_premium": {
    "id": "desert_traders_spice_blend_premium",
    "name": "Desert Traders Spice Blend (Premium)",
    "description": "The Desert Traders Spice Blend (Premium) is a finely ground mix of spices that ignites a traveler's spirit, enhancing their endurance and speed during arduous journeys across the desert sands. Crafted by seasoned caravan traders who have traversed these treacherous routes for centuries, this blend offers not just flavor but also a boost in one’s stamina, making even the longest trails feel shorter. For 8 hours after consumption, you ignore exhaustion levels, and your speed increases by +5 feet—though beware, as the heat of the spices can leave you sweating profusely, imposing disadvantage on Stealth checks.",
    "price": 1000,
    "icon": "🌶️",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Ignore Exhaustion",
      "+5 Speed"
    ],
    "vendor": "desert_traders_market",
    "shippedBy": "Camel Caravans",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ignore Exhaustion",
        "rules": "Consume this spice blend to ignore one level of exhaustion for a duration of 8 hours. This effect is instantaneous upon consumption and does not require an action."
      },
      {
        "title": "+5 Speed",
        "rules": "Your walking speed increases by 5 feet for the duration of the effects, starting immediately after you consume the spice blend. This benefit lasts until the end of your next long rest or until you take a short rest."
      }
    ],
    "levelRequirementReason": "This spice is designed to enhance even novice travelers with its immediate benefits.",
    "vendorReason": "Desert Traders Market is renowned for its unique and potent blends, making this premium spice a staple in their offerings.",
    "shippingDetail": "Spices are delivered by camel caravan, ensuring freshness but with a 1-day delay due to the long journey across the desert.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "8 hours or until exhaustion is ignored",
      "endsWhen": "Ends at the start of your next long rest or short rest",
      "charges": "Unlimited"
    },
    "priceReason": "The blend's rarity and the expertise involved in its creation justify this balanced price.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T01:15:16.541491+00:00",
    "aiReviewedAt": "2026-07-22T01:15:16.541491+00:00",
    "aiReviewVersion": 1
  },
  "desert_traders_spice_tea_recipe": {
    "id": "desert_traders_spice_tea_recipe",
    "name": "Recipe: Desert Traders Spice Tea",
    "description": "This ancient, parchment-bound recipe for Desert Traders Spice Tea is handwritten by the caravan brewers themselves. The tea, when brewed and consumed, grants you an advantage on Persuasion checks to barter with merchants. Each sip infuses your voice with the wisdom of countless caravans, making you sound as if you've traded across deserts since time immemorial. This secret of the Desert Traders is a rare find in the spice markets of distant lands.",
    "price": 1000,
    "icon": "🍵",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Persuasion Checks",
      "Secret Spice Brew"
    ],
    "vendor": "desert_traders_market",
    "shippedBy": "Spicy Steep Scroll",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Persuasion Checks",
        "rules": "When you consume Desert Traders Spice Tea, you gain advantage on all Persuasion checks for bartering and trading within the next three hours. This effect can be used once per long rest."
      },
      {
        "title": "Secret Spice Brew",
        "rules": "The recipe requires specific caravan spices and must be brewed over a warm fire for 15 minutes before consumption. The tea's flavor is as unique as its origin, making it a cherished item among traders."
      }
    ],
    "levelRequirementReason": "This simple yet effective trade secret can benefit even the lowest-level adventurers.",
    "vendorReason": "The Desert Traders Market is known for its rare and valuable recipes, as they are the creators of this legendary tea.",
    "shippingDetail": "Ships via a trusted scroll that ensures the spices remain fresh during transit.",
    "usage": {
      "activation": "Drink the brewed tea over a warm fire for 15 minutes.",
      "duration": "3 hours, once per long rest.",
      "endsWhen": "After 3 hours or when you finish your next long rest.",
      "charges": "Unlimited uses; requires brewing and consuming."
    },
    "priceReason": "The recipe's rarity and the specific caravan spices needed for its preparation justify this price.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T01:15:21.058765+00:00",
    "aiReviewedAt": "2026-07-22T01:15:21.058765+00:00",
    "aiReviewVersion": 1
  },
  "deus_ex_machina_device": {
    "id": "deus_ex_machina_device",
    "name": "Deus Ex Machina Device",
    "description": "The Deus Ex Machina Device hums with an otherworldly energy, its surface etched with ancient runes that shimmer like starlight. This relic is said to have been crafted by the gods themselves in a moment of divine whimsy. When activated, it calls forth a godly presence to solve your immediate problem, be it a dire battle or a catastrophic collapse. The device is lightweight yet resonates with power, its core glows faintly as if alive with celestial energy.",
    "category": "consumables",
    "price": 1000,
    "icon": "🎭",
    "stock": 3,
    "rarity": "godly",
    "effects": [
      "Godly Intervention",
      "Instant Problem Solving"
    ],
    "vendor": "divine_intervention",
    "shippedBy": "Miracle Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Godly Intervention",
        "rules": "When activated, the device summons a god to solve your immediate problem. The DM narrates the divine intervention, which is instant and complete, resolving the current challenge without any cost or consequence."
      },
      {
        "title": "Instant Problem Solving",
        "rules": "The device expends one charge upon use. It can be recharged after a long rest. Only one use per session is allowed."
      }
    ],
    "levelRequirementReason": "Even the simplest problem might require divine assistance, but it should not come easily.",
    "vendorReason": "This vendor specializes in items that bridge the mortal and celestial realms, making it only fitting for them to stock such a device.",
    "shippingDetail": "The Miracle Delivery ensures swift and safe transport of the device within a day.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Upon completion or if the user retracts it before use",
      "charges": "1, recharged after a long rest"
    },
    "priceReason": "The device's rarity and divine origin justify its relatively modest price.",
    "priceOriginal": 75000000,
    "priceReviewedAt": "2026-07-22T01:15:28.818217+00:00",
    "aiReviewedAt": "2026-07-22T01:15:28.818217+00:00",
    "aiReviewVersion": 1
  },
  "diamond_city_currency_exchange_bad_rates": {
    "id": "diamond_city_currency_exchange_bad_rates",
    "name": "Diamond City Currency Exchange (Bad Rates)",
    "description": "The Diamond City Currency Exchange (Bad Rates) offers a dismally unfavorable exchange of any coinage for gold, providing only half its true value. The clerk's efficiency is so atrocious that you earn an indelible 'Sucker' stamp on your forehead, inflicting disadvantage on all Charisma checks and saves. Despite the poor deal, this service remains popular among tourists who are unaware of the steep loss they incur. Made by Diamond City Exchanges.",
    "category": "services",
    "price": 1000,
    "icon": "💱",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Exchange any currency for gold at half its value",
      "Earn a 'Sucker' stamp (disadvantage on Charisma checks and saves)"
    ],
    "vendor": "diamond_city",
    "shippedBy": "Vault Transfer",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Currency Exchange",
        "rules": "When you use this service, you exchange any coinage for gold, receiving only half the amount of gold it is worth. This effect lasts until you complete your transaction."
      },
      {
        "title": "Sucker Stamp",
        "rules": "You receive a permanent 'Sucker' stamp on your forehead, which imposes disadvantage on all Charisma checks and saves until removed by magic."
      }
    ],
    "levelRequirementReason": "This item is available to level 1 characters as a common service in Diamond City.",
    "vendorReason": "Diamond City Exchanges are known for their questionable practices, making them the go-to vendor for this less-than-reliable service.",
    "shippingDetail": "The service is delivered swiftly by Vault Transfer within a day of booking.",
    "usage": {
      "activation": "Instantaneous when you complete your transaction at the exchange.",
      "duration": "Until the transaction is completed.",
      "endsWhen": "Upon completion of your exchange.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The service, though common, still requires a significant amount of XP due to its guaranteed loss and the permanent disadvantage it inflicts.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-22T01:15:36.493702+00:00",
    "aiReviewedAt": "2026-07-22T01:15:36.493702+00:00",
    "aiReviewVersion": 1
  },
  "diamond_city_microtransaction_removal": {
    "id": "diamond_city_microtransaction_removal",
    "name": "Diamond City Microtransaction Removal",
    "description": "The Diamond City Microtransaction Removal grants you a week of peace from digital interruptions, ensuring no one tries to sell you minor magical items during its duration. As a symbol of your regained tranquility, your bank account mysteriously decreases by 10%, reflecting the 'processing fee' for this service. This artifact is crafted in collaboration with the Diamond City Refund Dept., known for their meticulous attention to detail and customer satisfaction.",
    "category": "services",
    "price": 1000,
    "icon": "💎",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Week of Peace",
      "Processing Fee"
    ],
    "vendor": "diamond_city",
    "shippedBy": "Vault Transfer",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Week of Peace",
        "rules": "For a duration of seven days, you are immune to attempts by others to sell you minor magical items. This effect is passive and does not require any action from the user."
      },
      {
        "title": "Processing Fee",
        "rules": "At the end of its duration, your bank account is reduced by 10% as a processing fee for this service. This effect occurs automatically and cannot be avoided or negated."
      }
    ],
    "levelRequirementReason": "This item is accessible to all adventurers who seek peace from digital interruptions.",
    "vendorReason": "Diamond City Refund Dept. is renowned for its reliability and expertise in handling such services.",
    "shippingDetail": "The service is delivered immediately upon purchase, ensuring you start your week of peace right away.",
    "usage": {
      "activation": "Passive effect that begins the moment the item is purchased and lasts for seven days.",
      "duration": "Seven days from the time of purchase.",
      "endsWhen": "At the end of its duration or if the item is destroyed.",
      "charges": "Unlimited uses, as it does not have a limited number of charges."
    },
    "priceReason": "The price reflects the service's value in providing peace and quiet for one week without any recurring costs.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-22T01:15:55.619421+00:00",
    "aiReviewedAt": "2026-07-22T01:15:55.619421+00:00",
    "aiReviewVersion": 1
  },
  "diamond_city_neon_glow_gummies_recipe": {
    "id": "diamond_city_neon_glow_gummies_recipe",
    "name": "Recipe: Diamond City Neon Glow Gummies ",
    "description": "Crafted by Diamond City Confectioners, these Neon Glow Gummies are a beacon of night-time fun. They radiate a vibrant neon light that illuminates the darkness like starlight on a moonless night. Each chewy treat is infused with secrets of the city's glowing architecture, making you feel as if you're walking through a living, breathing metropolis. Perfect for adventurers who need to navigate under cover of night without sacrificing their visibility.",
    "price": 1000,
    "icon": "🍬",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Neon Light Vision",
      "Party Starter"
    ],
    "vendor": "diamond_city_club",
    "shippedBy": "Glow Gel Gazette",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Neon Light Vision",
        "rules": "Eating one Neon Glow Gummy grants you dim light vision for 1 hour. This effect is instantaneous and does not require any action to activate."
      },
      {
        "title": "Party Starter",
        "rules": "The gummies emit a soft, glowing light that can illuminate an area of 5 feet radius for the duration of the effect. Any creature within this area gains advantage on Stealth checks until the light fades."
      }
    ],
    "levelRequirementReason": "These Neon Glow Gummies are accessible to any adventurer, providing a simple and effective way to enhance visibility in dark environments.",
    "vendorReason": "Diamond City Club is known for its night-time activities and the gummies fit perfectly with their theme of vibrant nightlife.",
    "shippingDetail": "Ships via the Glow Gel Gazette, a delivery service that ensures your treats arrive fresh and glowing in perfect condition.",
    "usage": {
      "activation": "Instantaneous effect upon consumption.",
      "duration": "1 hour per gummy consumed.",
      "endsWhen": "The light fades or another gummy is consumed.",
      "charges": "Unlimited; each gummy can be eaten once."
    },
    "priceReason": "The price reflects the unique crafting process and the rare ingredients used, making these gummies a valuable but not overpriced treat for adventurers.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-22T01:16:12.047778+00:00",
    "aiReviewedAt": "2026-07-22T01:16:12.047778+00:00",
    "aiReviewVersion": 1
  },
  "diamond_city_neon_glow_jacket": {
    "id": "diamond_city_neon_glow_jacket",
    "name": "Diamond City Neon Glow Jacket ",
    "description": "The Diamond City Neon Glow Jacket exudes a dazzling array of neon hues that pulse in time with the city’s heartbeat, casting an unmistakable glow for up to fifty feet around you. Its vibrant lights not only illuminate dark alleyways but also serve as a beacon of confidence and intimidation. Crafted by the renowned City Neonists, this jacket is a testament to the fusion of urban design and magical innovation.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧥",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Intimidation checks",
      "Bright Light Aura"
    ],
    "vendor": "diamond_city_street",
    "shippedBy": "Glow Thread Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Intimidating Glow",
        "rules": "When you use an action, this jacket grants a +2 bonus to your Charisma (Intimidation) checks. The effect lasts until the end of your next turn."
      },
      {
        "title": "Bright Light Aura",
        "rules": "The jacket provides a bright light in a 50-foot radius for as long as you wear it. This light is sufficient to illuminate and displace any darkness within its range, but the batteries powering the jacket drain after six hours of continuous use."
      }
    ],
    "levelRequirementReason": "The jacket's neon glow requires minimal magical energy, suitable for adventurers at all levels.",
    "vendorReason": "Diamond City Street is known for its vibrant nightlife and fashion, making it the perfect vendor for this city-inspired accessory.",
    "shippingDetail": "Ships within three days with an express delivery guarantee.",
    "usage": {
      "activation": "Action",
      "duration": "One minute per charge",
      "endsWhen": "The light fades when you stop wearing the jacket, or after six hours of continuous use.",
      "charges": "Unlimited charges"
    },
    "priceReason": "This jacket balances its utility with a moderate price point that reflects its unique design and craftsmanship.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-22T01:16:08.514658+00:00",
    "aiReviewedAt": "2026-07-22T01:16:08.514658+00:00",
    "aiReviewVersion": 1
  },
  "diamond_city_neon_heat_lamp": {
    "id": "diamond_city_neon_heat_lamp",
    "name": "Diamond City Neon Heat Lamp ",
    "description": "The Diamond City Neon Heat Lamp radiates a warm, pulsating glow that seems to dance in sync with the city's neon signs. This lamp is crafted from polished diamond and glass, making it shimmer under streetlights. It provides a steady heat for gummies, giving them an advantage on skill checks related to night city living. The lamp flickers like the iconic billboards, adding a vibrant touch to any setup.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍬",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Night City Skill Checks",
      "Vibrant Neon Glow"
    ],
    "vendor": "diamond_city_club",
    "shippedBy": "Glow Heat Gear Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Night City Skill Checks",
        "rules": "When used in a night city environment (such as Diamond City), the user gains advantage on any skill check related to navigation, stealth, or survival. This effect lasts until the end of the user's next long rest."
      },
      {
        "title": "Vibrant Neon Glow",
        "rules": "The lamp emits a vibrant neon glow that is both visually striking and functional for heating gummies. The glow can be adjusted to different colors, but doing so requires a successful DC 15 Dexterity (Manipulation) check."
      }
    ],
    "levelRequirementReason": "The lamp's design allows even novice adventurers to benefit from its warmth and neon glow.",
    "vendorReason": "Diamond City Club specializes in unique, city-themed gear that enhances the night life experience of adventurers.",
    "shippingDetail": "Ships via special courier with a delivery time reduced by one day due to its fragile nature.",
    "usage": {
      "activation": "Passive effect; activated upon use and remains active until the user's next long rest.",
      "duration": "Until the end of the user's next long rest",
      "endsWhen": "The lamp is turned off or the user completes a long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The lamp's diamond and glass construction, combined with its unique neon glow, justify this price point.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T01:16:02.131540+00:00",
    "aiReviewedAt": "2026-07-22T01:16:02.131540+00:00",
    "aiReviewVersion": 1
  },
  "diamond_city_synthwave_vinyl_service": {
    "id": "diamond_city_synthwave_vinyl_service",
    "name": "Diamond City Synthwave Vinyl Service",
    "description": "This sleek, diamond-encrusted vinyl record plays retro synthwave beats that seem to vibrate through your bones. Crafted by City DJs in Diamond City, it's a relic of the golden age of music with each scratch adding to its mystique and allure. Groove to these tunes for an hour, gaining advantage on Concentration checks and boosting your morale by +1, making you feel like you're part of the city’s vibrant nightlife.",
    "price": 1000,
    "icon": "🎵",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Play: Advantage on Concentration",
      "Morale Boost"
    ],
    "vendor": "diamond_city_club",
    "shippedBy": "Record Sleeve Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Play: Advantage on Concentration",
        "rules": "When activated as a bonus action, this vinyl plays music for 1 hour, granting the listener advantage on all Concentration checks. The effect ends when the music stops."
      },
      {
        "title": "Morale Boost",
        "rules": "While listening to the music, your morale is increased by +1 until you finish a long rest or fall unconscious. This effect has no save DC and can be used once per day."
      }
    ],
    "levelRequirementReason": "This item's effects are beneficial but not overly powerful for any level.",
    "vendorReason": "The club is known for its unique music and would naturally stock items that enhance the listening experience.",
    "shippingDetail": "Delivered within a week, with special care to ensure safe handling of delicate vinyl records.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 Hour",
      "endsWhen": "Music stops or listener finishes a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price point, reflecting the item's unique design and vendor’s reputation.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-22T04:20:34.359723+00:00",
    "aiReviewedAt": "2026-07-22T04:20:34.359723+00:00",
    "aiReviewVersion": 1
  },
  "dimensional_estate": {
    "id": "dimensional_estate",
    "name": "Pocket Dimension Estate (100 Years)",
    "description": "The Pocket Dimension Estate (100 Years) is a wondrous device that opens a pocket-sized realm within your grasp. Crafted from enchanted crystal and bound by ancient magic, this estate stands as a castle or vault in defiance of space and time. Seasons change naturally inside the pocket dimension, offering you an eternal sanctuary free from external threats. You may invite up to three allies through its single portal key, ensuring your legacy remains safe for generations.",
    "category": "premium",
    "price": 75000,
    "icon": "🏰",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Sanctuary of Time",
      "Infinite Storage"
    ],
    "vendor": "celestial_exchange",
    "shippedBy": "Portal Key Delivered",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Sanctuary of Time",
        "rules": "The estate's internal time flows independently from the outside world. Seasons change naturally within, providing a perpetual sanctuary safe from external attacks and threats."
      },
      {
        "title": "Infinite Storage",
        "rules": "The pocket dimension can hold an indefinite amount of items, ensuring your private storage is ever-enlarging to accommodate your growing needs."
      }
    ],
    "levelRequirementReason": "This item requires a high level to manage the complex and powerful magic involved in creating such a realm.",
    "vendorReason": "Only the celestial merchants of the Exchange can afford and wield the resources needed to create and maintain this extraordinary device.",
    "shippingDetail": "The estate is delivered via a special portal, ensuring it arrives safely and intact.",
    "usage": {
      "activation": "Instantaneous activation with the use of one portal key.",
      "duration": "Permanent until lease expires or destroyed.",
      "endsWhen": "Lease ends in 100 years; renewal possible.",
      "charges": "Unlimited uses; charges do not apply."
    },
    "priceReason": "The item's rarity and the magical complexity involved in creating such a realm justify its high price.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-22T01:16:17.665188+00:00",
    "aiReviewedAt": "2026-07-22T01:16:17.665188+00:00",
    "aiReviewVersion": 1
  },
  "dimensional_storage_ring": {
    "id": "dimensional_storage_ring",
    "name": "Dimensional Storage Ring (Utility)",
    "description": "The Dimensional Storage Ring feels like a simple band of tarnished brass, yet it is said to have been crafted by Spacefold Jewelers from ancient starlight and forgotten magic. This ring allows its wearer to access stored items instantly, as if they were right there in hand. The weight of the stored contents does not affect the ring's user, making it a favorite among explorers who need to keep their gear close but unburdened by excess weight.",
    "price": 1000,
    "icon": "💍",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "Instant Access",
      "Weightless"
    ],
    "vendor": "arcane_jewelry",
    "shippedBy": "Pocket Void Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Instant Access",
        "rules": "As an action, the wearer can instantly access any stored items within the ring's pocket dimension. The items remain in their original condition and are not affected by time spent inside the storage space."
      },
      {
        "title": "Weightless",
        "rules": "While wearing this ring, the weight of all stored contents is negated. This effect does not affect the wearer’s movement or balance, but it cannot be used to support weights beyond 1000 lbs."
      }
    ],
    "levelRequirementReason": "The magic within the ring requires a spellcaster of at least fifth level to wield its power effectively.",
    "vendorReason": "Spacefold Jewelers are renowned for their masterpieces, and this ring is no exception; it is one of their most sought-after creations.",
    "shippingDetail": "The ring is shipped via Pocket Void Express, ensuring safe transit through the dimensional pockets themselves.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the ring is removed or its storage capacity is exceeded.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from starlight and ancient magic, this ring's value far exceeds that of mere material worth.",
    "priceOriginal": 420000,
    "priceReviewedAt": "2026-07-22T01:16:59.993365+00:00",
    "aiReviewedAt": "2026-07-22T01:16:59.993365+00:00",
    "aiReviewVersion": 1
  },
  "dimentio_mask": {
    "id": "dimentio_mask",
    "name": "Mask of the Pleaser",
    "description": "The Mask of the Pleaser, a grotesque visage of black and white fabric adorned with an eerie smile, warps reality at your whimsy. It feels like a joke to some, a tragedy to others, but all who wear it can't help but laugh at their own misfortune. The mask shifts your alignment to Chaotic Neutral for 1 hour, compelling you to act out of character, and grants the ability to create exploding boxes that deal 4d10 force damage on a failed save.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🎭",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Masked Misadventure",
      "Explosive Folly"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Delivered by shadowy messengers of the Underworld",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Masked Misadventure",
        "rules": "Activates as a bonus action. Your alignment shifts to Chaotic Neutral for 1 hour, compelling you to act out of character. You have disadvantage on saving throws against being charmed or frightened until the end of your next long rest."
      },
      {
        "title": "Explosive Folly",
        "rules": "Activates as a bonus action. Creates an exploding box within 5 feet that deals 4d10 force damage to all creatures in the area, including you. You must succeed on a DC 15 Dexterity saving throw or be knocked prone and take half the damage."
      }
    ],
    "levelRequirementReason": "Requires at least 12th level to wield the Mask of the Pleaser effectively.",
    "vendorReason": "The Onyx Hand is known for its extensive collection of forbidden and powerful artifacts, making it a fitting vendor for such an item.",
    "shippingDetail": "Delivery is swift but cloaked in secrecy; arrive exactly when expected or not at all.",
    "usage": {
      "activation": "Bonus action to use either effect.",
      "duration": "Masked Misadventure lasts for 1 hour. Explosive Folly has a range of 5 feet and an area of 5 feet radius, ends on a failed save.",
      "endsWhen": "Masked Misadventure ends when the duration expires or you dismiss it as an action. Explosive Folly ends on a failed saving throw.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Mask of the Pleaser is priced at 1000 XP, reflecting its powerful and unpredictable nature, as well as its alignment-altering effect.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-22T01:16:40.847644+00:00",
    "aiReviewedAt": "2026-07-22T01:16:40.847644+00:00",
    "aiReviewVersion": 1
  },
  "displacer_beast_kitten": {
    "id": "displacer_beast_kitten",
    "name": "Displacer Beast Kitten",
    "description": "This tiny feline, though partially trained and still wild at heart, is a Displacer Beast Kitten. It has 20 HP and an uncanny ability to phase through solid objects. However, its unpredictable nature can be both a blessing and a curse; it may fetch small items with surprising accuracy but will pounce on you if you approach it incorrectly. This kitten's loyalty is still in question, as it was bred by Questionable Breeders who emphasize 'partially-trained' above all else.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐱",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Phasing Companion",
      "Petitioner of Small Items"
    ],
    "vendor": "exotic_pets_unlimited",
    "shippedBy": "Reinforced Crate",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Phasing Companion",
        "rules": "The Displacer Beast Kitten has a 20% chance to phase through solid objects, providing temporary cover for its owner. This effect lasts until the start of your next turn or until it is targeted by an attack."
      },
      {
        "title": "Petitioner of Small Items",
        "rules": "Once per short rest, the kitten can attempt to fetch a small item within 30 feet. It returns the item with a 50% success rate, but if successful, you gain advantage on your next attack roll."
      }
    ],
    "levelRequirementReason": "The Displacer Beast Kitten requires at least level 7 to handle its unpredictable and powerful nature.",
    "vendorReason": "Exotic Pets Unlimited specializes in rare and exotic creatures, making it the go-to vendor for such a unique pet.",
    "shippingDetail": "Ships via reinforced crate with special instructions from the breeder to ensure safe delivery.",
    "usage": {
      "activation": "Instantaneous action; once per short rest for fetching small items, and it phases as a reaction if attacked incorrectly.",
      "duration": "Until the start of your next turn or until targeted by an attack.",
      "endsWhen": "Exhausted after one use per short rest or when attacked incorrectly.",
      "charges": "Unlimited"
    },
    "priceReason": "The Displacer Beast Kitten is priced at 1000 XP, reflecting its rare and powerful abilities as a partially-trained displacer beast.",
    "priceOriginal": 22200,
    "priceReviewedAt": "2026-07-22T01:16:57.735502+00:00",
    "aiReviewedAt": "2026-07-22T01:16:57.735502+00:00",
    "aiReviewVersion": 1
  },
  "divine_rank_purchase": {
    "id": "divine_rank_purchase",
    "name": "Divine Rank Purchase (Rank 20)",
    "description": "The Divine Rank Purchase (Rank 20) transforms you into a celestial paragon, granting godhood without the usual trials. Crafted by The Divine Accountant, this offer is a one-time purchase that elevates your divine rank to the highest echelon of power. Once acquired, only other gods of equal or higher rank can challenge you. The deal is sealed with the signing of a contract that binds you to serve the cosmos for an indefinite period.",
    "category": "services",
    "price": 1000,
    "icon": "⭐",
    "stock": 1,
    "rarity": "cosmic",
    "effects": [
      "Elevate to Rank 20 (godhood)",
      "Immunity to all attacks except those from Rank 20 gods"
    ],
    "vendor": "divine_promotion",
    "shippedBy": "Apotheosis Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Divine Rank Ascension",
        "rules": "Upon successful purchase, you gain the title of Rank 20 and become a god. This effect is instantaneous and permanent."
      },
      {
        "title": "Immunity to Attacks",
        "rules": "You are immune to all attacks from lesser beings or entities unless countered by another divine being of equal or higher rank."
      }
    ],
    "levelRequirementReason": "Any character can purchase this item, but it requires a significant financial commitment.",
    "vendorReason": "The Divine Promotion service is known for its divine offerings and unique deals that elevate characters to higher planes of existence.",
    "shippingDetail": "The item is delivered via a celestial courier who ensures the contract's binding nature.",
    "usage": {
      "activation": "Instantaneous upon purchase",
      "duration": "Permanent once activated",
      "endsWhen": "None; effect persists indefinitely",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the significant financial and divine resources required to achieve such a rank.",
    "priceOriginal": 300000000,
    "priceReviewedAt": "2026-07-22T01:17:08.882420+00:00",
    "aiReviewedAt": "2026-07-22T01:17:08.882420+00:00",
    "aiReviewVersion": 1
  },
  "divine_right_to_rule_deed": {
    "id": "divine_right_to_rule_deed",
    "name": "Divine Right to Rule (All Planes)",
    "description": "The Divine Right to Rule, a parchment of boundless authority, bears the seals and signatures of every deity across all planes. With this deed, you command the respect and obedience of all deities, their legions, and even lesser celestials. It is said that the ink within it flows from the very essence of the cosmos itself, and its power can rewrite divine law with a single stroke. Crafted by the Divine Council in ages past, this deed remains one of the most sought-after treasures in existence.",
    "category": "services",
    "price": 1000,
    "icon": "📜",
    "stock": 1,
    "rarity": "cosmic",
    "effects": [
      "Deity Obedience",
      "Divine Law Rewriting"
    ],
    "vendor": "divine_promotion",
    "shippedBy": "Heavenly Decree",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Deity Obedience",
        "rules": "You may command any deity to obey your direct orders. This effect is instantaneous and does not require an action, but it cannot override a deity's fundamental alignment or moral principles."
      },
      {
        "title": "Divine Law Rewriting",
        "rules": "Once per day, you can rewrite one line of divine law as it pertains to your domain. This requires a successful DC 25 Wisdom (Religion) check and the target must be within range for at least an hour. The effect is instantaneous but cannot change the fundamental nature or alignment of the divine law."
      }
    ],
    "levelRequirementReason": "This item's power requires a high degree of spiritual understanding and discipline to wield effectively.",
    "vendorReason": "The Divine Council itself oversees this vendor, ensuring only those worthy receive such a powerful artifact.",
    "shippingDetail": "Ships via the Angelic Couriers; delivery time is approximately one week.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "Instantaneous effect, lasts until acted upon or countered by a deity's alignment principles",
      "endsWhen": "Deity obedience ends when the command is fulfilled or negated, divine law rewriting ends after use",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The price reflects its rarity and the immense power it represents, though it is far less than its true value.",
    "priceOriginal": 500000000,
    "priceReviewedAt": "2026-07-22T01:17:25.893672+00:00",
    "aiReviewedAt": "2026-07-22T01:17:25.893672+00:00",
    "aiReviewVersion": 1
  },
  "divine_slaughter_blade": {
    "id": "divine_slaughter_blade",
    "name": "Divine Slaughter Blade",
    "description": "The Divine Slaughter Blade, a weapon of unfathomable power, is said to have been forged in the heart of a god's wrath. This ancient blade cuts through divine essence like paper, and its touch can reduce even the mightiest deity to nothing but forgotten legend. Crafted by The First Murderer itself, this sword is a relic from the dawn of time, capable of severing the very threads that bind gods to their pantheons.",
    "price": 1000,
    "icon": "⚔️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "+10 weapon",
      "Divine Deletion"
    ],
    "vendor": "divine_blacksmith",
    "shippedBy": "Blood Courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Weapon Mastery",
        "rules": "The Divine Slaughter Blade grants you a +10 bonus on attack and damage rolls. It deals 50d20 slashing damage to divine entities, bypassing all resistances and immunities."
      },
      {
        "title": "Divine Deletion",
        "rules": "When you hit a divine entity with the Divine Slaughter Blade, it must make a DC 45 Wisdom saving throw. On failure, the target deity is reduced to nothing but forgotten legend, and all followers forget their god. This effect has no save or resistance."
      }
    ],
    "levelRequirementReason": "Only those of sufficient power can wield such a fearsome weapon.",
    "vendorReason": "The Divine Blacksmith is the only one who dares to forge and sell weapons that challenge the very pantheon.",
    "shippingDetail": "Ships via the Blood Courier, known for its swift and deadly deliveries.",
    "usage": {
      "activation": "Attack action",
      "duration": "Instantaneous",
      "endsWhen": "The target deity fails its saving throw or is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "This weapon's price reflects its rarity and the immense power it represents.",
    "priceOriginal": 75000000,
    "priceReviewedAt": "2026-07-22T01:18:09.558390+00:00",
    "aiReviewedAt": "2026-07-22T01:18:09.558390+00:00",
    "aiReviewVersion": 1
  },
  "dizzy_dial": {
    "id": "dizzy_dial",
    "name": "Dizzy Dial",
    "description": "The Dizzy Dial is a spiraling disc of polished obsidian, etched with arcane runes that seem to pulse faintly in the dark. Said to have been crafted by ancient shamans, it spins slowly when agitated, emitting a disorienting hum that can make even the most steadfast warrior stagger and falter. A glance at this artifact is enough to send one reeling, causing confusion and dizziness for those who dare to look too long.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌀",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Blinding Confusion",
      "Single Use"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Standard Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blinding Confusion",
        "rules": "When the Dizzy Dial is activated by a creature's action, an enemy target within 5 feet must succeed on a Wisdom saving throw or become confused for 1 minute. The confusion ends early if the target takes any damage or if another creature of its choice targets it with this effect."
      },
      {
        "title": "Single Use",
        "rules": "The Dizzy Dial can only be used once before requiring repairs, which can take a week at a cost equal to half its original price. Repairs must be made by a shaman or someone proficient in alchemy."
      }
    ],
    "levelRequirementReason": "Beginners with some experience of the arcane might find this item useful for disrupting enemies, but it requires at least first-level spellcasting ability to wield effectively.",
    "vendorReason": "The Shamans' Hut specializes in items crafted by ancient shamans and those who study their traditions. The Dizzy Dial is a prime example of such craftsmanship.",
    "shippingDetail": "Delivered within three days, with a 10% discount for bulk orders.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until the target takes damage or is targeted by another creature using this effect.",
      "endsWhen": "The target takes any damage or is targeted again by an enemy using this effect.",
      "charges": "Single Use"
    },
    "priceReason": "The Dizzy Dial's price reflects the rare materials used in its construction and the arcane knowledge required to create it.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-22T01:17:53.422275+00:00",
    "aiReviewedAt": "2026-07-22T01:17:53.422275+00:00",
    "aiReviewVersion": 1
  },
  "dk_barrel": {
    "id": "dk_barrel",
    "name": "DK Barrel",
    "description": "The DK Barrel, a weathered oak vessel adorned with runes of ancient magic, is said to have been crafted by the hands of the Great Apes themselves in their time of need. When uncorked, it releases a massive gorilla ally, its muscles bulging and fur bristling, ready to defend or assist. Legend has it that the barrel's contents are imbued with the essence of the primordial jungle, granting the gorilla a love for bananas greater than any other known creature’s.",
    "category": "consumables",
    "price": 1000,
    "icon": "🛢️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Summon Gorilla Ally",
      "Banana Love"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Barrel Roll Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Summons Gorilla Ally",
        "rules": "When activated as an action, the DK Barrel summons a gorilla ally (CR 3) with 2d8 damage on its punches. The gorilla acts as an ally for 1 minute and loves bananas more than anything else."
      },
      {
        "title": "Banana Love",
        "rules": "The summoned gorilla will instinctively seek out bananas, dropping all other tasks to find them if a banana is within sight or mentioned. This effect lasts until the gorilla is dismissed by its summoner or falls in combat."
      }
    ],
    "levelRequirementReason": "The DK Barrel can be used by characters as low as level 1, but even the simplest of adventurers should have some experience.",
    "vendorReason": "Shamans of the forest often carry this item, as it is a symbol of their connection with the primal world and a useful tool for those seeking powerful allies in the wild.",
    "shippingDetail": "The DK Barrel arrives safely via a courier known for its quick delivery times, ensuring that adventurers can summon their gorilla ally without delay.",
    "usage": {
      "activation": "Action to uncork and activate the barrel.",
      "duration": "1 minute or until dismissed.",
      "endsWhen": "The gorilla is dismissed by the summoner or falls in combat.",
      "charges": "One-time use; requires rest to be re-summoned."
    },
    "priceReason": "The DK Barrel is priced at 1,000 XP due to its rarity and the unique abilities it grants, making it a valuable but not overpowered addition to any adventurer's inventory.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-22T01:18:06.297387+00:00",
    "aiReviewedAt": "2026-07-22T01:18:06.297387+00:00",
    "aiReviewVersion": 1
  },
  "dk_barrel_backpack": {
    "id": "dk_barrel_backpack",
    "name": "DK Barrel Jetpack",
    "description": "The DK Barrel Jetpack is a stout wooden cask strapped to your back, its surface weathered by countless launches. This explosive backpack lets you soar forward in a blinding flash of fire and smoke, leaving a trail of burning embers behind. The jetpack's fiery propulsion not only propels you but also ignites the ground beneath your path, causing enemies within 10 feet to take 2d6 fire damage (Dexterity save for half). Should you fall or land in an inappropriate place, however, the backblast might leave you with a scorch mark and 1d6 fire damage.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛢️",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Blazing Dash",
      "Ground Ignition"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Barrel Roll Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Blazing Dash",
        "rules": "On your action during each short rest, you can activate the jetpack to dash in a straight line up to 120 feet. Any enemy within this area must make a Dexterity saving throw or be set on fire, taking 2d6 fire damage."
      },
      {
        "title": "Ground Ignition",
        "rules": "As you land from the jetpack's propulsion, there is an immediate risk of igniting the ground. You and any creature within 10 feet must make a Dexterity saving throw or take 1d6 fire damage."
      }
    ],
    "levelRequirementReason": "Requires at least third level to harness the explosive power safely.",
    "vendorReason": "Valley Trading Post stocks rare and exotic items from all corners of the realm, including this unique piece of engineering.",
    "shippingDetail": "Delivered via Barrel Roll Express; travel time depends on courier availability.",
    "usage": {
      "activation": "Action during short rest",
      "duration": "Instantaneous activation and effect",
      "endsWhen": "You fall, land in an inappropriate place, or run out of charges",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "Balanced price reflects the explosive power and limited uses.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-22T01:17:51.135552+00:00",
    "aiReviewedAt": "2026-07-22T01:17:51.135552+00:00",
    "aiReviewVersion": 1
  },
  "dk_crew_airship_plans": {
    "id": "dk_crew_airship_plans",
    "name": "DK Crew Airship Construction Plans",
    "description": "These meticulously crafted plans detail the construction of a formidable Kremling-style airship, capable of rapid maneuvers and devastating cannon fire. Built to exacting standards in the DK Crew’s secret shipyard, these schematics are both a marvel of engineering and a symbol of their unyielding craftsmanship. The resulting vessel is an imposing sight, with a sturdy hull designed for both speed and durability, making it a cornerstone of any airship fleet.",
    "price": 1000,
    "icon": "🚢",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Constructible Airship",
      "Massive Shipyard Requirement"
    ],
    "vendor": "dk_crew_pitstop",
    "shippedBy": "Blueprint Roll Courier",
    "levelRequirement": 13,
    "factionBonus": {
      "mobility": 60
    },
    "effectDetails": [
      {
        "title": "Constructible Airship",
        "rules": "The plans allow the construction of an AC 18, HP 300 airship with a speed of 60 feet. The vessel is equipped with cannons and can be crewed by a large team. Constructing this airship requires a massive shipyard and additional materials costing 200,000 gp."
      },
      {
        "title": "Massive Shipyard Requirement",
        "rules": "The construction of the airship can only proceed in a shipyard with facilities capable of housing at least 100 crew members. This limitation ensures that only those with significant resources and space can undertake such an endeavor."
      }
    ],
    "levelRequirementReason": "Only experienced adventurers, with the necessary resources to support such a project, should be entrusted with these plans.",
    "vendorReason": "The DK Crew's Pitstop is the only place where these highly sensitive and valuable construction plans can be obtained.",
    "shippingDetail": "Ships via Blueprint Roll Courier, a reliable service that ensures secure delivery to your shipyard.",
    "usage": {
      "activation": "Instantaneous upon completion of the airship.",
      "duration": "Permanent once constructed.",
      "endsWhen": "The airship is destroyed or dismantled.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the reduced value compared to constructing an entire airship, but still represents significant investment in terms of both time and resources.",
    "priceOriginal": 180000,
    "priceReviewedAt": "2026-07-22T01:18:25.840929+00:00",
    "aiReviewedAt": "2026-07-22T01:18:25.840929+00:00",
    "aiReviewVersion": 1
  },
  "dk_crew_banana_coin_counterfeit_kit": {
    "id": "dk_crew_banana_coin_counterfeit_kit",
    "name": "DK Crew Banana Coin Counterfeit Kit",
    "description": "The DK Crew Banana Coin Counterfeit Kit is a mischievous contraption crafted by the unofficial mint, designed to fool monkeys and shopkeepers alike. With it, you can create up to 1d10 counterfeit banana coins that pass for real to non-intelligent creatures. The kit also grants temporary advantage on Deception checks when spending a fake coin among shopkeepers, but there's a risk—there’s a 50% chance the shopkeeper will notice and call guards. Monkeys, with their keen senses, immediately attack anyone using this kit, sensing the counterfeit quality.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍌",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Counterfeit Coins",
      "Shopkeeper's Notice"
    ],
    "vendor": "dk_crew",
    "shippedBy": "Barrel Roll Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Counterfeit Coins",
        "rules": "Activate as a bonus action to create up to 1d10 banana coins that fool non-intelligent creatures. These coins last until the end of your next turn, after which they disintegrate."
      },
      {
        "title": "Shopkeeper's Notice",
        "rules": "When you spend a counterfeit coin among shopkeepers, you gain advantage on the Deception check but have disadvantage on Charisma checks with that shopkeeper. This effect lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This kit is designed for beginners and mischievous players who want to cause minor disruptions in their adventuring.",
    "vendorReason": "DK Crew, being a notorious mint, has unofficially supplied this kit to those seeking to exploit the gullibility of less intelligent creatures or shopkeepers.",
    "shippingDetail": "Shipped via Barrel Roll Delivery, known for its unpredictable but reliable service.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous creation; lasts until the end of your next turn",
      "endsWhen": "Ends when you take an action or rest",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the kit's minor utility and limited effectiveness against intelligent creatures.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-22T01:18:13.193717+00:00",
    "aiReviewedAt": "2026-07-22T01:18:13.193717+00:00",
    "aiReviewVersion": 1
  },
  "dk_crew_banana_financial_advice": {
    "id": "dk_crew_banana_financial_advice",
    "name": "DK Crew Banana-Based Financial Advice",
    "description": "DK Crew’s Banana-Based Financial Advice is a peculiar leaflet that promises to turn your wealth into golden bananas for a week. When you follow its advice, you gain 2d10x10 gold pieces, but beware—your coins will shimmer with an unnatural banana hue. The document itself feels like parchment scrawled by a monkey’s hand, and the vendor claims it holds secrets of ancient financial wisdom. Be wary: after using this guide, you might find yourself leaping at every primate you encounter.",
    "category": "services",
    "price": 1000,
    "icon": "🍌",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Banana-Gold Treasure",
      "Primate Phobia"
    ],
    "vendor": "dk_crew",
    "shippedBy": "Courier of Coin",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Banana-Gold Treasure",
        "rules": "Upon activation by reading the leaflet, you gain a treasure equivalent to 2d10x10 gold pieces. This effect lasts for 7 days and cannot be repeated within 30 days."
      },
      {
        "title": "Primate Phobia",
        "rules": "You suffer from a mild phobia of monkeys that manifests as a -2 penalty on saving throws against being frightened by primate creatures or images. The effect persists until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This advice is accessible to all who seek financial guidance, but only those with basic literacy can understand its cryptic messages.",
    "vendorReason": "DK Crew Financial Advisors are known for their unconventional methods and unique services that cater to the whimsical desires of adventurers.",
    "shippingDetail": "Delivered by a fleet of coin-shaped mail chutes, ensuring timely delivery even in the most chaotic cities.",
    "usage": {
      "activation": "Reading the leaflet for at least one minute.",
      "duration": "7 days",
      "endsWhen": "The effect ends upon expiration or if you use it again within 30 days.",
      "charges": "Unlimited, but only usable once per month."
    },
    "priceReason": "This service is priced at 1000 XP to reflect the unusual and potentially profitable nature of banana-themed investments.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-22T01:18:40.337627+00:00",
    "aiReviewedAt": "2026-07-22T01:18:40.337627+00:00",
    "aiReviewVersion": 1
  },
  "dk_crew_banana_peel_grenades": {
    "id": "dk_crew_banana_peel_grenades",
    "name": "DK Crew Banana Peel Grenades",
    "description": "DK Crew Banana Peel Grenades are classic slip hazards in throwable form. These grenades are made by Donkey Kong Plantation and can be found at DK Crew Supply, known for their quirky stock of products. When thrown, they create a 10-foot square slippery surface that lasts for 1 minute, sending even the most agile foes sprawling. For every three peels used consecutively, the DC to avoid falling increases from 13 to 15 and also inflicts 1d4 bludgeoning damage on those who fail.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍌",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Slippery Surface",
      "Increased Difficulty"
    ],
    "vendor": "dk_crew_supply",
    "shippedBy": "Barrel Roll Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Slippery Surface",
        "rules": "When thrown, these grenades create a 10-foot square slippery surface that lasts for 1 minute. Any creature in the area must succeed on a DC 13 Dexterity saving throw or fall prone. On their next turn, they can make another Dexterity save to avoid falling again."
      },
      {
        "title": "Increased Difficulty",
        "rules": "Using three consecutive grenades increases the DC of the saving throw to 15 and deals 1d4 bludgeoning damage on a failed save. This effect stacks, but only if used consecutively; mixing them with other items does not combine their effects."
      }
    ],
    "levelRequirementReason": "These grenades are simple to use and effective even for beginners.",
    "vendorReason": "DK Crew Supply is known for its quirky, themed inventory that includes practical pranks suitable for any adventurer.",
    "shippingDetail": "Ships via Barrel Roll Delivery, known for their quick and reliable service across the island.",
    "usage": {
      "activation": "Thrown as an action",
      "duration": "1 minute per grenade used",
      "endsWhen": "The duration ends when the time passes or a creature successfully saves against it",
      "charges": "Unlimited, but only one can be active at any given time"
    },
    "priceReason": "Balanced as an uncommon item for its utility and theme, providing a fair value within the market.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-22T01:18:28.979935+00:00",
    "aiReviewedAt": "2026-07-22T01:18:28.979935+00:00",
    "aiReviewVersion": 1
  },
  "dk_crew_banana_peel_recycling": {
    "id": "dk_crew_banana_peel_recycling",
    "name": "DK Crew Banana Peel Recycling",
    "description": "DK Crew's Banana Peel Recycling is a small, eco-friendly box emblazoned with the DK Crew logo. When activated, it transforms ten discarded banana peels into one slippery trap that any creature must succeed on a DC 14 Dexterity saving throw or fall prone. Additionally, you gain a +2 bonus to Nature checks and are accompanied by a troupe of mischievous monkeys who hinder your Stealth attempts, adding a +3 penalty.",
    "category": "services",
    "price": 1000,
    "icon": "🍌",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Banana Slippery Trap",
      "Nature's Companion"
    ],
    "vendor": "dk_crew",
    "shippedBy": "Compost Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Banana Slippery Trap",
        "rules": "When activated as an action, this box creates one slippery trap that occupies a 5-foot cube. Any creature entering the affected area must make a DC 14 Dexterity saving throw or fall prone. The effect lasts until triggered by another creature or until the next dawn."
      },
      {
        "title": "Nature's Companion",
        "rules": "You gain a +2 bonus to Nature checks and are accompanied by a troupe of mischievous monkeys who hinder your Stealth attempts, adding a +3 penalty. This effect persists for 1 hour per day when you use this item."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners to help them understand the basics of environmental responsibility and trap-making.",
    "vendorReason": "DK Crew Green Initiative specializes in promoting sustainable practices and eco-friendly solutions, making their Banana Peel Recycling a perfect fit for their product line.",
    "shippingDetail": "Ships via Compost Delivery within two game days. Ensure the recipient has a compostable container ready upon delivery.",
    "usage": {
      "activation": "Activate as an action to create a slippery trap or use passively for gaining the Nature's Companion benefit.",
      "duration": "Instantaneous and duration-based (slippery trap lasts until triggered or dawn; Nature's Companion lasts 1 hour per day).",
      "endsWhen": "The slippery trap is triggered by another creature or until the next dawn. The effect ends when you stop using it for the day.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item's price reflects its common rarity and utility, balancing environmental benefit with practical application.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-22T01:18:31.964670+00:00",
    "aiReviewedAt": "2026-07-22T01:18:31.964670+00:00",
    "aiReviewVersion": 1
  },
  "dk_crew_banana_ripening_chamber": {
    "id": "dk_crew_banana_ripening_chamber",
    "name": "DK Crew Banana Ripening Chamber",
    "description": "The DK Crew Banana Ripening Chamber is a gas-powered contraption that ripens bananas from green to perfect in mere minutes, its chamber filling with a misty vapor that accelerates fruit maturation. Crafted by the eccentric DK Crew Banana Science, this device not only quickens the ripening process but also imparts a distinct banana flavor to any fruit it touches. However, using it leaves you smelling like a ripe bunch for an hour, potentially compromising your stealth efforts when encountering curious monkeys.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍌",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Ripens Bananas Instantly",
      "Flavor Transfer"
    ],
    "vendor": "dk_crew",
    "shippedBy": "Barrel Roll Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ripens Bananas Instantly",
        "rules": "Activation: As a bonus action, the chamber is activated. The target fruit ripens from green to perfect in one minute. This effect has no range or area and does not require saving throws. However, it can only be used once every 24 hours."
      },
      {
        "title": "Flavor Transfer",
        "rules": "Activation: As a bonus action, the chamber is used on any fruit. The fruit ripens instantly to perfect, but all other fruits in the immediate area gain a banana flavor for the next hour. This effect has no range or area and does not require saving throws."
      }
    ],
    "levelRequirementReason": "This item is designed for adventurers of any level who might need to quickly prepare food.",
    "vendorReason": "The DK Crew Banana Science is renowned for its innovative fruit-maturing devices, making their chamber a staple in adventurer's gear.",
    "shippingDetail": "Ships via Barrel Roll Delivery, known for its reliable and speedy deliveries across the realm.",
    "usage": {
      "activation": "Bonus action to activate; can only be used once per day.",
      "duration": "Instantaneous ripening effect; flavor transfer lasts one hour.",
      "endsWhen": "The effect ends when the duration expires or when the chamber is no longer in use.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The chamber provides a valuable service for adventurers, balancing its cost with the convenience and utility it offers without overpricing.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-22T01:19:09.090430+00:00",
    "aiReviewedAt": "2026-07-22T01:19:09.090430+00:00",
    "aiReviewVersion": 1
  },
  "dk_crew_bananagun": {
    "id": "dk_crew_bananagun",
    "name": "DK Crew Banana Gun",
    "description": "The DK Crew Banana Gun is a peculiar and deadly weapon forged from the hands of banana-loving jesters. It fires hardened, sticky banana peels that arc through the air with surprising accuracy, leaving targets drenched in banana slime. Made by The DK Crew, this unique firearm has an infinite supply of ammunition, requiring nothing more than small pieces of fruit for each shot, but beware—its banana-based projectiles are as slippery as they are sticky.",
    "price": 1000,
    "icon": "🍌",
    "stock": 15,
    "rarity": "rare",
    "effects": [
      "Slippery Banana Peels",
      "Infinite Ammunition"
    ],
    "vendor": "dk_crew_pitstop",
    "shippedBy": "Fruit Crate Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Slippery Banana Peels",
        "rules": "When the DK Crew Banana Gun is fired, a hardened banana peel arcs towards the target with a range of 30 feet. The target must make a DC 14 Dexterity saving throw or fall prone due to slipping on the banana peel. This effect lasts until the end of their next turn."
      },
      {
        "title": "Infinite Ammunition",
        "rules": "The Banana Gun requires no special ammunition, only small pieces of fruit for each shot. The supply is seemingly endless as long as fresh fruit is available nearby."
      }
    ],
    "levelRequirementReason": "This weapon is designed to be versatile and accessible, suitable even for the newest adventurers.",
    "vendorReason": "The DK Crew pitstop is known for its quirky and unusual wares, making it a perfect vendor for this banana-themed firearm.",
    "shippingDetail": "Delivered via Fruit Crate Express, these shipments are subject to seasonal fruit availability, ensuring the Banana Gun's ammunition remains fresh and effective.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the target makes a successful saving throw or at the end of their next turn.",
      "charges": "Unlimited, as long as fruit is available"
    },
    "priceReason": "The balanced XP price reflects the weapon's unique design and the infinite ammo feature, making it a fair value for its versatility.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T01:19:17.771692+00:00",
    "aiReviewedAt": "2026-07-22T01:19:17.771692+00:00",
    "aiReviewVersion": 1
  },
  "dk_crew_barrel_launcher": {
    "id": "dk_crew_barrel_launcher",
    "name": "DK Crew Barrel Launcher",
    "description": "The DK Crew Barrel Launcher is a formidable weapon, a modified harpoon gun that fires heavy wooden barrels filled with grappling hooks and shrapnel. When fired, these barrels lash out with incredible force, capable of knocking enemies off their feet. The launcher is a testament to the craftsmanship of The DK Crew, whose reputation for innovation endures even after their mysterious disappearance. Each barrel must be manually retrieved post-firing, ensuring constant supply for this versatile weapon.",
    "price": 1000,
    "icon": "🎯",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Heavy Grappling",
      "Infinite Ammo"
    ],
    "vendor": "dk_crew_pitstop",
    "shippedBy": "Salty Crate Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heavy Grappling",
        "rules": "When the launcher is fired, a heavy wooden barrel filled with grappling hooks and shrapnel flies towards an enemy within 80 feet. The barrel deals 3d8 bludgeoning damage on hit (STR check DC 15 to avoid being knocked back). If the target fails their STR save, they are also knocked prone."
      },
      {
        "title": "Infinite Ammo",
        "rules": "The launcher is stocked with an infinite supply of barrels. However, after each successful attack, a barrel must be manually retrieved from the battlefield by the wielder or another ally within 30 feet."
      }
    ],
    "levelRequirementReason": "This weapon requires at least character level 1 to handle its potent mechanics and retrieve spent barrels.",
    "vendorReason": "The DK Crew Pitstop, a relic of the disbanded crew, still sells this iconic weapon as a tribute to their legacy.",
    "shippingDetail": "Ships via Salted Crate Express with expedited delivery and a 24-hour turnaround time.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous, recharges after a short or long rest",
      "endsWhen": "On hit; barrels must be manually retrieved",
      "charges": "Unlimited"
    },
    "priceReason": "This balanced price reflects the weapon's unique mechanics and the challenge of retrieving spent ammunition.",
    "priceOriginal": 16000,
    "priceReviewedAt": "2026-07-22T01:18:58.096591+00:00",
    "aiReviewedAt": "2026-07-22T01:18:58.096591+00:00",
    "aiReviewVersion": 1
  },
  "dk_crew_island_fortification": {
    "id": "dk_crew_island_fortification",
    "name": "DK Crew Jungle Island Fortification",
    "description": "The DK Crew Jungle Island Fortification is a masterfully crafted, heavily themed defensive structure that fortifies your chosen small island or base. Built from scavenged barrels, vines, and other jungle debris, this impromptu fortress rises with deadly traps and sturdy defenses, doubling the base's HP by 50 points. The DK Crew's signature Engineering Team ensures each trap is a work of art, designed to catch anything that dares cross its threshold.",
    "price": 1000,
    "icon": "🌴",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Base Gains +50 HP",
      "3 Permanent Traps (DM Choice)"
    ],
    "vendor": "dk_crew_pitstop",
    "shippedBy": "Engineering Team",
    "levelRequirement": 10,
    "factionBonus": {
      "defense": 60
    },
    "effectDetails": [
      {
        "title": "Fortified Base",
        "rules": "This effect increases the base's hit points by 50, providing a robust defense against attackers. The fortification is permanent until destroyed."
      },
      {
        "title": "Deadly Traps",
        "rules": "Three unique traps are permanently installed around the base (selected by the Dungeon Master). These traps trigger on contact and can immobilize or damage intruders, but do not deal lethal damage unless explicitly stated. The traps recharge daily."
      }
    ],
    "levelRequirementReason": "This item requires a player of at least level 10 to ensure they have the necessary resources and skill to manage its permanent installation.",
    "vendorReason": "The DK Crew's Pitstop is known for distributing unique Kremling-engineered items, making it the go-to vendor for this fortification.",
    "shippingDetail": "Delivered by the Engineering Team; installation takes two weeks during which the base must be secured and free of intruders.",
    "usage": {
      "activation": "Instantaneous upon purchase; permanent once installed.",
      "duration": "Permanent until destroyed or dismantled.",
      "endsWhen": "Destruction or dismantlement by the owner.",
      "charges": "Unlimited, but requires a weekly maintenance check."
    },
    "priceReason": "This item is priced at 1000 XP due to its permanent installation and thematic design, balancing its unique benefits against other legendary items.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-22T01:19:06.015518+00:00",
    "aiReviewedAt": "2026-07-22T01:19:06.015518+00:00",
    "aiReviewVersion": 1
  },
  "dk_crew_jungle_assault_vehicle": {
    "id": "dk_crew_jungle_assault_vehicle",
    "name": "DK Crew Jungle Assault Vehicle (Modified Mine Cart)",
    "description": "The DK Crew Jungle Assault Vehicle (Modified Mine Cart) is a formidable, heavily armored cart forged from jungle timber and steel, propelling through the dense undergrowth on twin cannons and netting systems. Its cannons unleash searing fire in a wide arc, capable of devastating hordes of enemies. Crafted by the infamous DK Crew, this vehicle is a veritable fortress on wheels, designed to tear through any jungle ambush with ruthless efficiency.",
    "price": 1000,
    "icon": "🚂",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Twin Cannons",
      "Jungle Netting"
    ],
    "vendor": "dk_crew_pitstop",
    "shippedBy": "Rail Delivery",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Twin Cannons",
        "rules": "The user may activate the twin cannons as a bonus action. This attack deals 2d10 Fire damage in an area of 15 feet, and it has a range of 60 feet. The attack is considered magical for the purpose of overcoming resistance. The vehicle can make this attack three times before requiring a day to recharge."
      },
      {
        "title": "Jungle Netting",
        "rules": "The user may deploy the netting as an action, creating a 15-foot diameter net that restrains any creature within its area for 1 minute. The DC of this saving throw is equal to 8 + the user's proficiency bonus + their Strength modifier. The vehicle can use this ability once per short or long rest."
      }
    ],
    "levelRequirementReason": "The DK Crew Jungle Assault Vehicle requires a high level due to its advanced design and powerful capabilities.",
    "vendorReason": "The DK Crew's own pitstop ensures that their signature vehicle is only sold to those who have proven their worth.",
    "shippingDetail": "Ships via a specialized rail system within the jungle, ensuring safe and swift delivery. Transit times are reduced by half with this method.",
    "usage": {
      "activation": "Bonus action for cannons; action to deploy netting",
      "duration": "Instantaneous (cannons); 1 minute (netting)",
      "endsWhen": "Charges run out or user chooses to end the effect",
      "charges": "3 uses per day, recharged after a long rest"
    },
    "priceReason": "The vehicle's legendary rarity and powerful abilities justify its moderate price in experience points.",
    "priceOriginal": 95000,
    "priceReviewedAt": "2026-07-22T01:19:29.792687+00:00",
    "aiReviewedAt": "2026-07-22T01:19:29.792687+00:00",
    "aiReviewVersion": 1
  }
};
