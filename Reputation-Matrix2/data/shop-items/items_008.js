// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_008 = {
  "dk_crew_king_k_id": {
    "id": "dk_crew_king_k_id",
    "name": "King K. Rool ID Card (Forged)",
    "description": "The King K. Rool ID Card (Forged) is a meticulously crafted fake, bearing the emblem of Kremling Castle and the crest of the Koopa Troop. Its holographic security features shimmer with a false authenticity when held up to light, granting access to restricted facilities within three major Kremling strongholds. However, a single glance from a keen-eyed guard can reveal its counterfeit nature, triggering an immediate 50% chance that it will be flagged as fake and confiscated.",
    "price": 19000,
    "icon": "👑",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Access to Kremling Strongholds",
      "50% Chance of Detection"
    ],
    "vendor": "dk_crew_pitstop",
    "shippedBy": "Stolen Document",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Access to Kremling Strongholds",
        "rules": "When activated, the ID Card grants temporary access to restricted areas within three major Kremling strongholds. The card remains active for a duration of one hour from the moment it is first used."
      },
      {
        "title": "50% Chance of Detection",
        "rules": "Upon being scrutinized by an alert guard, there is a 50% chance that the ID Card will be recognized as counterfeit. If detected, the card is confiscated and rendered useless for one week."
      }
    ],
    "levelRequirementReason": "The card's complexity and forgery require basic knowledge of Kremling technology.",
    "vendorReason": "The DK Crew, as rebels against the Kremlings, have access to stolen Kremling materials for crafting such items.",
    "shippingDetail": "Delivered via a secret courier, ensuring that the card arrives safely but without drawing undue attention.",
    "usage": {
      "activation": "Uses an action to activate and present the ID Card at checkpoints or security stations.",
      "duration": "One hour from first use.",
      "endsWhen": "The duration expires after one hour, or if detected by Kremling authorities.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Crafted with stolen materials and expertise in forgery, the ID Card offers significant risk for its user but remains a valuable tool for infiltrating enemy strongholds.",
    "priceOriginal": 90000,
    "priceReviewedAt": "2026-07-22T01:20:02.185196+00:00",
    "aiReviewedAt": "2026-07-22T01:20:02.185196+00:00",
    "aiReviewVersion": 1
  },
  "dk_crew_kraken_tamer": {
    "id": "dk_crew_kraken_tamer",
    "name": "DK Crew Kraken Tamer (Service)",
    "description": "The DK Crew Kraken Tamer is a rare artifact of immense power, forged from the bones and scales of ancient krakens. This taming service binds one colossal or greater kraken to servitude for five years, ensuring its loyalty through an endless supply of tribute—vast quantities of fish and other seaborne offerings. The tamer gains a naval asset of unparalleled strength, capable of turning the tide in any sea battle.",
    "price": 19000,
    "icon": "🐙",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Colossal Kraken Bound",
      "Endless Tribute Requirement"
    ],
    "vendor": "dk_crew_pitstop",
    "shippedBy": "Naval Escort with Seaborne Safeguards",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Colossal Kraken Bound",
        "rules": "Activates upon successful taming by a crew. The kraken is bound to serve for five years, remaining loyal and powerful until the service ends or the kraken escapes. It can be summoned once per day as an action within 1 mile of its designated servitude area."
      },
      {
        "title": "Endless Tribute Requirement",
        "rules": "The tamed kraken requires a steady supply of tribute, typically 500 pounds of fish and other seaborne goods daily. Failure to provide this sustenance results in the kraken's immediate escape or rebellion within one week."
      }
    ],
    "levelRequirementReason": "Requires significant experience and resources to manage such a powerful creature.",
    "vendorReason": "The DK Crew, masters of the seas, are the only ones capable of taming such formidable beasts.",
    "shippingDetail": "Ships within a week, but requires escort to ensure the kraken remains calm and unharmed during transport.",
    "usage": {
      "activation": "Summon as an action within one mile of its servitude area.",
      "duration": "Bound for five years or until escaped or rebelled.",
      "endsWhen": "Service ends, escapes, or rebels due to lack of tribute.",
      "charges": "One daily summon per day."
    },
    "priceReason": "Balanced as a rare and powerful service that requires significant resources for upkeep and management.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-22T01:20:03.337338+00:00",
    "aiReviewedAt": "2026-07-22T01:20:03.337338+00:00",
    "aiReviewVersion": 1
  },
  "dk_crew_pirate_king_alliance": {
    "id": "dk_crew_pirate_king_alliance",
    "name": "DK Crew Pirate King Alliance",
    "description": "The DK Crew Pirate King Alliance is a tattered, leather-bound treaty that grants its bearer access to the formidable fleet of the main Pirate King. Held together by brass rivets and adorned with the emblem of the skull and crossbones, this document entitles the holder to commandeer five warships for a single large-scale operation. The loyalty of the crew is maintained through regular payments in grog or plunder, ensuring swift and loyal service during critical missions.",
    "price": 19000,
    "icon": "👑",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Access to Five Warships",
      "Crew Loyalty Through Regular Payment"
    ],
    "vendor": "dk_crew_pitstop",
    "shippedBy": "Diplomatic Vessel",
    "levelRequirement": 15,
    "factionBonus": {
      "navy": 100
    },
    "effectDetails": [
      {
        "title": "Access to Fleet",
        "rules": "Activates as an action. Grants temporary control of five warships for one large operation lasting up to 8 hours. The ships are under the command of loyal crews, and any damage they sustain during this time must be repaired by the bearer or a willing ally within 24 hours; otherwise, the ships drift aimlessly until repairs are completed."
      },
      {
        "title": "Crew Loyalty",
        "rules": "The crew remains loyal for 1 day after each mission. Failure to pay within this period results in a -2 penalty on all rolls involving the fleet until payment is made. Regular payments of grog or loot ensure the ships remain at your command."
      }
    ],
    "levelRequirementReason": "The complex negotiations and strategic planning required make this item suitable for characters with significant experience.",
    "vendorReason": "As a trusted member of the DK Crew, they maintain close ties with the Pirate King's fleet and can broker such important alliances.",
    "shippingDetail": "The treaty is delivered via secure diplomatic vessel, ensuring it arrives intact. The delivery time is approximately one week depending on current sea routes and weather conditions.",
    "usage": {
      "activation": "Activates as an action for a single large operation.",
      "duration": "1 day of fleet command.",
      "endsWhen": "The mission ends or the ships are damaged beyond repair.",
      "charges": "Unlimited, but each use requires regular crew payments."
    },
    "priceReason": "This item is priced at 1000 XP to reflect its significant value in diplomatic and strategic importance without being overly powerful.",
    "priceOriginal": 450000,
    "priceReviewedAt": "2026-07-22T01:20:04.250384+00:00",
    "aiReviewedAt": "2026-07-22T01:20:04.250384+00:00",
    "aiReviewVersion": 1
  },
  "dk_crew_pirate_king_summons": {
    "id": "dk_crew_pirate_king_summons",
    "name": "DK Crew Pirate King Summons",
    "description": "A gleaming brass flare adorned with a pirate flag, this DK Crew Pirate King Summons is no ordinary signal. When activated, it sends an urgent call to the legendary Pirate King and his flagship, the Black Heart. The King arrives within moments, accompanied by his crew of 100 fearsome pirates—each a formidable force (CR 1/2). The service lasts for one hour, during which time the King demands a significant share of any treasure or spoils found. Failure to comply may result in dire consequences.",
    "price": 19000,
    "icon": "👑",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Pirate King and Crew Arrive",
      "Loot Share Expectation"
    ],
    "vendor": "dk_crew_pitstop",
    "shippedBy": "Royal Flare",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Pirate King and Crew Arrive",
        "rules": "Activates on a bonus action. The Pirate King arrives with his flagship and 100 pirates, each CR 1/2. They are immediately available to assist in combat or exploration for one hour."
      },
      {
        "title": "Loot Share Expectation",
        "rules": "The Pirate King expects a significant share of any treasure or spoils found during the service period. Failure to comply may result in the King leaving and potential conflict with his crew."
      }
    ],
    "levelRequirementReason": "A level 16 character can handle the demands and chaos brought by the Pirate King's arrival.",
    "vendorReason": "The DK Crew Pitstop specializes in unique and powerful items crafted by their own members, including this summons.",
    "shippingDetail": "Ships immediately via Royal Flare; delivery is swift but may require a small escort due to the flare's importance.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 Hour",
      "endsWhen": "Upon the expiration of one hour or if the Pirate King leaves early due to non-compliance with his demands.",
      "charges": "Unlimited; recharged after a long rest."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the summoning's utility and the Pirate King’s formidable presence in gameplay.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-22T01:19:49.919374+00:00",
    "aiReviewedAt": "2026-07-22T01:19:49.919374+00:00",
    "aiReviewVersion": 1
  },
  "dk_crew_pirate_ship_lease": {
    "id": "dk_crew_pirate_ship_lease",
    "name": "DK Crew Pirate Ship Lease (Monthly)",
    "description": "Rent a fearsome pirate galleon, forged from the bones of ancient ships and tempered in the fires of forgotten battles. This vessel sails under the DK Crew’s black flag, boasting cannons that can level coastal fortifications and a crew whose loyalty is as volatile as the sea itself. The ship is yours for 30 days, but beware—mutiny looms if you fail to maintain high morale among its swashbuckling crew.",
    "price": 650,
    "icon": "⚓",
    "stock": 999,
    "rarity": "rare",
    "effects": [
      "Nautical Dominance",
      "Mutinous Crew"
    ],
    "vendor": "dk_crew_pitstop",
    "shippedBy": "Signed Manifest",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Nautical Dominance",
        "rules": "You gain a +2 bonus to attack rolls and damage rolls made with naval weapons. This effect lasts for the duration of your control over the ship, up to 30 days."
      },
      {
        "title": "Mutinous Crew",
        "rules": "If you fail to maintain at least 15 morale points among the crew members each day, they may attempt a DC 15 Charisma saving throw. On a success, they declare open mutiny and may attack any non-crew member within reach."
      }
    ],
    "levelRequirementReason": "Requires at least third level to effectively command such a powerful vessel.",
    "vendorReason": "The DK Crew maintains this pitstop for their own and others’ convenience, ensuring fast access to maritime power.",
    "shippingDetail": "Ships are delivered with a two-day turnaround, courtesy of the Signed Manifest's reliable couriers.",
    "usage": {
      "activation": "Instantaneous upon lease, lasts for the duration of your control over the ship.",
      "duration": "30 days from the start date",
      "endsWhen": "Lease expires or you lose command of the vessel",
      "charges": "Unlimited, as long as the lease is active"
    },
    "priceReason": "Balanced to provide a significant but not overpowered nautical advantage for a moderate cost.",
    "priceOriginal": 40000,
    "priceReviewedAt": "2026-07-22T04:21:04.439580+00:00",
    "aiReviewedAt": "2026-07-22T04:21:04.439580+00:00",
    "aiReviewVersion": 1
  },
  "dk_crew_recipe_banana_cream_pie": {
    "id": "dk_crew_recipe_banana_cream_pie",
    "name": "Recipe: DK Crew Banana Cream Pie",
    "description": "The DK Crew Banana Cream Pie is a pie that's also a projectile, crafted from the finest bananas and cream by Donkey Kong Bakery itself. When thrown, it explodes in a shower of sticky, banana-flavored cream that blinds any unfortunate target for one round. Alternatively, if you eat this pie, its creamy goodness will heal you for 1d6 hit points, but don't forget to shout 'Banana Slamma!' for maximum effect.",
    "price": 200,
    "icon": "📜",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Pie can be thrown as a weapon: 1d4 bludgeoning + target is blinded for 1 round",
      "Eating it restores 1d6 HP (delicious)"
    ],
    "vendor": "dk_crew",
    "shippedBy": "Barrel Roll Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blinding Cream Bombardment",
        "rules": "When the pie is thrown, the target must make a DC 12 Dexterity saving throw or be blinded for 1 round. On a successful save, the target is only stunned."
      },
      {
        "title": "Healing Delight",
        "rules": "Eating the pie restores 1d6 hit points to the eater. This effect can only occur once per day and requires no action."
      }
    ],
    "levelRequirementReason": "This pie is widely available, making it accessible for any player level.",
    "vendorReason": "DK Crew Bakery is known for its unique culinary creations that can be used in combat or as a snack.",
    "shippingDetail": "Ships via Donkey Kong's famous barrel roll delivery, which may take longer due to the pie’s fragile nature.",
    "usage": {
      "activation": "Throwing: as an action; Eating: no action required",
      "duration": "Blinding effect lasts for 1 round (6 turns); Healing is instantaneous",
      "endsWhen": "Blindness ends when the saving throw succeeds or after one round; No limit on eating it again",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to ensure that players can afford this pie without breaking the game's economy.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-22T01:20:41.946880+00:00",
    "aiReviewedAt": "2026-07-22T01:20:41.946880+00:00",
    "aiReviewVersion": 1
  },
  "dk_crew_rocket_barrel": {
    "id": "dk_crew_rocket_barrel",
    "name": "DK Crew Rocket Barrel",
    "description": "The DK Crew Rocket Barrel is a stout wooden barrel with a rudimentary rocket engine strapped to its side. Crafted by the unorthodox but resourceful DK Crew, this device serves as both an area denial tool and a fearsome projectile weapon. When thrown, it ignites with a roar, exploding in 1 round (6d6 Fire damage within 15 feet) before disintegrating into harmless debris that deals 2d6 piercing damage to any creatures caught in the blast radius.",
    "price": 650,
    "icon": "🚀",
    "stock": 6,
    "rarity": "rare",
    "effects": [
      "Rocket Blast",
      "Explosive Debris"
    ],
    "vendor": "dk_crew_pitstop",
    "shippedBy": "Barrel Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rocket Blast",
        "rules": "When thrown, this barrel ignites and explodes after 1 round. It deals 6d6 Fire damage in a 15-foot radius around its point of landing. The explosion has a range of 30 feet. There is no save for this effect."
      },
      {
        "title": "Explosive Debris",
        "rules": "After the initial blast, debris from the barrel deals 2d6 piercing damage to any creature within 15 feet of the explosion's center. This effect has a range of 30 feet and lasts until all debris dissipates."
      }
    ],
    "levelRequirementReason": "This item is suitable for lower-level adventuring parties, providing them with a versatile weapon to clear areas.",
    "vendorReason": "The DK Crew pitstop specializes in unique and unconventional gear, including this explosive barrel.",
    "shippingDetail": "Ships via Barrel Delivery service within 24 hours. A specialized courier ensures the safe transport of this volatile cargo.",
    "usage": {
      "activation": "Action to throw; the barrel explodes after 1 round.",
      "duration": "Instantaneous explosion, lasting until all debris dissipates.",
      "endsWhen": "The explosion completes and all debris has dispersed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item is priced at 1000 XP due to its unique design, explosive capabilities, and the DK Crew's reputation for crafting unusual but effective tools.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-22T01:20:18.666808+00:00",
    "aiReviewedAt": "2026-07-22T01:20:18.666808+00:00",
    "aiReviewVersion": 1
  },
  "dk_crew_rum_supply": {
    "id": "dk_crew_rum_supply",
    "name": "DK Crew Premium Barrel of Rum",
    "description": "The DK Crew Premium Barrel of Rum is a formidable vessel crafted from seasoned oak and filled with 10 gallons of fiery, high-proof rum. It's said to be blessed by the spirits themselves, inspiring warriors into a berserk state that can only be quelled by time or exhaustion. Sipping this potent brew grants you immunity to fear and a +2 bonus to Strength for an hour, but it also leaves you vulnerable to WIS saves with disadvantage.",
    "price": 650,
    "icon": "🥃",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "Immunity to Fear",
      "Strength Boost"
    ],
    "vendor": "dk_crew_pitstop",
    "shippedBy": "Wooden Barrel Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Fear",
        "rules": "You gain immunity to the fear effect of spells and other magical abilities. This lasts for one hour after consuming a dose from this barrel."
      },
      {
        "title": "Strength Boost",
        "rules": "For an hour, you gain a +2 bonus to Strength. However, while under its effects, you suffer disadvantage on Wisdom saving throws."
      }
    ],
    "levelRequirementReason": "This item is designed for adventurers of all levels but especially useful as a morale booster in dire situations.",
    "vendorReason": "The DK Crew Pitstop stocks this rum to keep their patrons' spirits high and their resolve strong during long journeys and battles.",
    "shippingDetail": "Delivered via a trusty Wooden Barrel Courier, ensuring the barrel arrives in pristine condition.",
    "usage": {
      "activation": "Consume one dose by drinking from the barrel.",
      "duration": "One hour per dose consumed.",
      "endsWhen": "Upon completion of its duration or when exhausted.",
      "charges": "Unlimited doses within a single barrel."
    },
    "priceReason": "The rum's potent effects and rarity justify a fair price, making it an excellent addition to any adventurer's inventory for morale-boosting purposes.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T01:20:16.596786+00:00",
    "aiReviewedAt": "2026-07-22T01:20:16.596786+00:00",
    "aiReviewVersion": 1
  },
  "dk_crew_secret_island_lease": {
    "id": "dk_crew_secret_island_lease",
    "name": "DK Crew Secret Island Hideout Lease (1 Year)",
    "description": "Lease a fully stocked, hidden jungle island perfect for contraband storage or training, cloaked from prying eyes by an ancient spell woven into the very trees and rocks. The island is self-sustaining, with its own water supply and lush gardens that bloom in cycles of your choosing. A small, self-sustaining Kremling maintenance crew ensures the island remains a fortress of secrecy for one year, ready to be used as you see fit.",
    "price": 19000,
    "icon": "🏝️",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Secure, untraceable island base",
      "Self-sustaining with constant upkeep"
    ],
    "vendor": "dk_crew_pitstop",
    "shippedBy": "Naval Drop",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Untraceable Location",
        "rules": "The island is hidden by an ancient spell that renders it undetectable to all means of scrying and magical sensing. It can only be accessed through a specific, known entrance point."
      },
      {
        "title": "Self-Sustaining Maintenance",
        "rules": "Each week, the Kremling crew provides one maintenance check, ensuring the island remains in pristine condition. Failure to maintain it risks the spell weakening or the island's resources depleting."
      }
    ],
    "levelRequirementReason": "This lease requires a player of at least level 12 to ensure they have the experience and skills necessary to manage such a powerful asset.",
    "vendorReason": "The DK Crew, known for their hidden operations, naturally offers this exclusive opportunity to their trusted members.",
    "shippingDetail": "The island is delivered by Naval Drop, with a delay of one week due to the need for special handling and concealment.",
    "usage": {
      "activation": "Instantaneous activation upon payment, providing immediate access to the island.",
      "duration": "One year from activation, renewable at the same price.",
      "endsWhen": "The lease expires or is destroyed by a successful dispel magic spell.",
      "charges": "Unlimited uses; once activated, it remains in effect until expiration."
    },
    "priceReason": "The reduced price of 1000 XP reflects the item's balanced power and rarity, ensuring it is a viable but not overpowered option for players of the specified level.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-22T01:21:04.364458+00:00",
    "aiReviewedAt": "2026-07-22T01:21:04.364458+00:00",
    "aiReviewVersion": 1
  },
  "dk_crew_smuggling_route": {
    "id": "dk_crew_smuggling_route",
    "name": "DK Crew Smuggling Route (Exclusive)",
    "description": "The DK Crew Smuggling Route is a clandestine maritime passage that slices through treacherous, non-magical waters, undetected by any naval blockade. This exclusive route ensures a single cargo shipment per month traverses safely, bypassing the prying eyes of coast guards and pirates alike. The DK Crew's expertise in navigation guarantees your vessel reaches its destination unscathed, making this route invaluable for those who dare to trade in forbidden goods.",
    "price": 110000,
    "icon": "⚓",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Guaranteed Safe Passage",
      "Bypass Naval Blockades"
    ],
    "vendor": "dk_crew_pitstop",
    "shippedBy": "Waxed Seal",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Guaranteed Safe Passage",
        "rules": "Activate once per month to grant a single cargo shipment safe passage through the route. The shipment is immune to any effects that would delay or disrupt it, including spells and other hazards."
      },
      {
        "title": "Bypass Naval Blockades",
        "rules": "The route allows ships to bypass all naval blockades for its duration without detection. Any attempts by authorities to intercept the shipment fail automatically."
      }
    ],
    "levelRequirementReason": "Requires a high-level character to manage and utilize this secretive route effectively.",
    "vendorReason": "The DK Crew maintains tight control over their smuggling operations, ensuring only trusted clients can purchase this service.",
    "shippingDetail": "Ships are transported securely and discreetly, with a 5% chance of detection by coast guards if not activated within the first week after purchase.",
    "usage": {
      "activation": "Activate as an action at the start of your turn once per month.",
      "duration": "Instantaneous effect lasting until the end of the cargo shipment's journey.",
      "endsWhen": "The shipment completes its voyage or if the route is exposed by authorities.",
      "charges": "Unlimited, but only one use per month."
    },
    "priceReason": "Reflects the high cost of maintaining such a secretive and reliable smuggling route over time.",
    "priceOriginal": 150000,
    "priceReviewedAt": "2026-07-22T01:20:45.408323+00:00",
    "aiReviewedAt": "2026-07-22T01:20:45.408323+00:00",
    "aiReviewVersion": 1
  },
  "dk_crew_volcanic_island_base": {
    "id": "dk_crew_volcanic_island_base",
    "name": "DK Crew Volcanic Island Base",
    "description": "Perched precariously on the flank of a dormant volcano, the DK Crew Volcanic Island Base is an impenetrable fortress carved from stone and magma. Its walls are lined with ancient traps that have claimed many an invader's life, while its core draws power directly from the earth itself to defend against sea and air assaults. The fortress erupts once a month, spewing forth molten rock and ash in a fiery display of nature's wrath.",
    "price": 19000,
    "icon": "🌋",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Volcanic Defense Mechanism",
      "Permanent Fortification"
    ],
    "vendor": "dk_crew_pitstop",
    "shippedBy": "Naval Delivery",
    "levelRequirement": 14,
    "factionBonus": {
      "defense": 120
    },
    "effectDetails": [
      {
        "title": "Volcanic Defense Mechanism",
        "rules": "Once per month, the fortress erupts, expelling a barrage of molten rock and ash in a 60-foot radius around the base. Creatures within or entering this area must make a DC 18 Dexterity saving throw or be knocked prone by the fiery blast. The eruption deals 3d12 fire damage to all creatures in contact with the fortress and those within the blast radius."
      },
      {
        "title": "Permanent Fortification",
        "rules": "The fortress has an AC of 25 against sea and air assaults, requiring a DC 20 Wisdom (Perception) check to identify its hidden entrances. It is constructed from volcanic obsidian and reinforced with ancient runes that enhance its defensive capabilities."
      }
    ],
    "levelRequirementReason": "The fortress's traps and defenses are too complex for a lower-level party, necessitating at least level 14 characters to manage the challenges.",
    "vendorReason": "The DK Crew is known for their daring exploits and the Volcanic Island Base is one of their most impressive creations.",
    "shippingDetail": "Navigating through treacherous waters to deliver this fortress requires a specialized fleet, leading to a longer delivery time and higher shipping costs.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent (with monthly eruption)",
      "endsWhen": "Destroyed or the core is permanently disabled by a successful DC 25 Conventional Damage roll.",
      "charges": "Unlimited"
    },
    "priceReason": "The Volcanic Island Base's construction and unique defenses make it an expensive yet valuable asset for any adventuring party.",
    "priceOriginal": 600000,
    "priceReviewedAt": "2026-07-22T01:21:35.174672+00:00",
    "aiReviewedAt": "2026-07-22T01:21:35.174672+00:00",
    "aiReviewVersion": 1
  },
  "dk_crew_volcanic_pass": {
    "id": "dk_crew_volcanic_pass",
    "name": "DK Crew Volcanic Pass",
    "description": "The DK Crew Volcanic Pass is a weathered parchment, its edges charred by volcanic heat and ink that glows faintly in darkness. This ancient map not only ensures safe passage through treacherous Kremling-controlled territories but also grants the traveler immunity to non-magical fire damage for 48 hours. With each step, the pass seems to hum with a quiet authority, as if it were forged from the very heart of a volcano itself.",
    "price": 4200,
    "icon": "🌋",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Immunity to non-magical fire damage",
      "Safe passage through one hostile volcanic territory"
    ],
    "vendor": "dk_crew_pitstop",
    "shippedBy": "Burned Map Express Courier",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Immunity to Non-Magical Fire Damage",
        "rules": "The user gains immunity to all non-magical fire damage for a duration of 48 hours upon activation. This effect ends when the user leaves the designated volcanic territory or if the user takes any magical damage."
      },
      {
        "title": "Safe Passage Through Volcanic Territory",
        "rules": "Upon use, the DK Crew Volcanic Pass ensures safe travel through a hostile volcanic region controlled by Kremlings. The pass works only once and is consumed upon successful passage."
      }
    ],
    "levelRequirementReason": "This level requirement ensures that only seasoned adventurers with considerable experience can safely use the DK Crew Volcanic Pass.",
    "vendorReason": "The DK Crew, known for their daring expeditions through dangerous territories, naturally supply this invaluable pass to their clients at their pitstops.",
    "shippingDetail": "Ships within 24 hours of purchase; arrives via express courier ensuring it reaches the recipient safely and intact.",
    "usage": {
      "activation": "As a standard action, activate by unfolding the map and walking through the territory.",
      "duration": "48 hours from activation",
      "endsWhen": "Leaving the designated volcanic territory or taking magical damage",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to reflect its unique and critical utility in navigating through hostile volcanic regions.",
    "priceOriginal": 70000,
    "priceReviewedAt": "2026-07-22T01:21:18.219139+00:00",
    "aiReviewedAt": "2026-07-22T01:21:18.219139+00:00",
    "aiReviewVersion": 1
  },
  "dk_crew_wario_barrel_helmet": {
    "id": "dk_crew_wario_barrel_helmet",
    "name": "DK Crew Wario Barrel Helmet",
    "description": "The DK Crew Wario Barrel Helmet is a barrel adorned with Wario's mischievous face, forged from sturdy oak and painted with vibrant banana and garlic scents. When you wear it, your AC increases by +1 due to the helmet's solid construction, but you lose the ability to hear clearly—each round you must make a Perception check with disadvantage. Rolling down hills is as easy as pie; as a bonus action, you can slide down inclines at 20 feet per turn until you reach the bottom, where you are left prone.",
    "category": "equipment",
    "price": 200,
    "icon": "🛢️",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "+1 AC",
      "Disadvantage on Perception checks"
    ],
    "vendor": "dk_crew",
    "shippedBy": "Barrel Roll Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Armor Bonus (+1 AC)",
        "rules": "You gain a +1 bonus to your AC when wearing this helmet. This effect is always active as long as the helmet is on your head."
      },
      {
        "title": "Perception Check Disadvantage",
        "rules": "While wearing the helmet, you have disadvantage on Perception checks. This lasts until the end of each round during which the helmet remains on your head."
      }
    ],
    "levelRequirementReason": "This helmet is designed for beginners and adventurers just starting their journey.",
    "vendorReason": "DK Crew specializes in quirky, custom-made gear that fits every adventurer's needs, especially those who enjoy a touch of the absurd.",
    "shippingDetail": "Ships via Barrel Roll Delivery. Expect delivery by banana boat within 3-5 days from the nearest Wario-coordinated port.",
    "usage": {
      "activation": "Passive effect; always active as long as worn.",
      "duration": "Instantaneous activation, ongoing while worn.",
      "endsWhen": "The helmet is removed or destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "This helmet balances the unique abilities it provides with a price that reflects its quirky craftsmanship and custom design.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-22T01:21:30.733617+00:00",
    "aiReviewedAt": "2026-07-22T01:21:30.733617+00:00",
    "aiReviewVersion": 1
  },
  "dk_crew_wario_tie": {
    "id": "dk_crew_wario_tie",
    "name": "DK Crew Wario Tie",
    "description": "The DK Crew Wario Tie is a peculiar accessory, its fabric emblazoned with a series of mischievous grins that seem to waggle and leer at you. This tie isn't just for show; it's designed by the eccentric DK Crew, known for their playful yet practical formal wear. Wear it to gain advantage on Charisma checks involving Wario-themed activities, but beware—it also brings disadvantage in social interactions with anyone not a fan of the green plumber. The tie is a symbol of both style and strife, as its short length can cause you to appear comically awkward if not worn properly.",
    "category": "equipment",
    "price": 35,
    "icon": "👔",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Charisma Advantage: Wario",
      "Disadvantage on Social Checks"
    ],
    "vendor": "dk_crew",
    "shippedBy": "Barrel Roll Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Advantage: Wario",
        "rules": "When wearing the DK Crew Wario Tie, you gain advantage on Charisma checks related to activities involving Wario or his antics. This effect is active as long as you are wearing the tie."
      },
      {
        "title": "Disadvantage on Social Checks",
        "rules": "If someone present does not share your affinity for Wario, you must make a check with disadvantage on Charisma checks. This penalty persists until the end of the encounter or until you remove the tie."
      }
    ],
    "levelRequirementReason": "This accessory is designed to be accessible and fun for all adventurers, regardless of their level.",
    "vendorReason": "DK Crew specializes in quirky and functional formal wear, making the DK Crew Wario Tie a natural addition to their line.",
    "shippingDetail": "Ships via Barrel Roll Delivery within 3 days of purchase. Orders under 10 items are expedited.",
    "usage": {
      "activation": "Passive effect; activation is not required for the effects to take place.",
      "duration": "Instantaneous and ongoing while worn",
      "endsWhen": "Effect ends when the tie is removed or at the end of an encounter",
      "charges": "Unlimited uses"
    },
    "priceReason": "The DK Crew Wario Tie offers a unique blend of functionality and whimsy, making it a fun addition to any adventurer's wardrobe without being overpriced.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T01:21:34.089600+00:00",
    "aiReviewedAt": "2026-07-22T01:21:34.089600+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_ancient_mirror_piece": {
    "id": "dk_isles_ancient_mirror_piece",
    "name": "Ancient Mirror Piece",
    "description": "This shard of the ancient mirror, hewn from the shattered temple of the Jungle Oracle, reflects not just the user’s true form but also reveals hidden enemy weaknesses. When held in both hands, it grants a fleeting glimpse into an opponent's vulnerabilities, allowing for strategic advantage in combat. The user gains a 10% chance to dodge the next attack made against them, and this shard reflects their essence so vividly that even the most skilled foes find themselves momentarily disoriented.",
    "category": "equipment",
    "price": 660,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reveals enemy weaknesses",
      "Grants 10% dodge chance"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Enemy Weakness Revealed",
        "rules": "When activated, this shard reflects the user's true form and reveals a hidden weakness of an adjacent hostile creature for up to 5 seconds. The target must make a Wisdom saving throw (DC 13) or be temporarily disoriented, reducing their effective AC by 2 until the start of its next turn."
      },
      {
        "title": "Increased Dodging Chance",
        "rules": "For the duration of this effect, the user gains a +1 bonus to Dexterity saving throws and has a 10% chance to dodge the next attack made against them. This benefit lasts until the start of their next turn or if they are hit by an attack."
      }
    ],
    "levelRequirementReason": "The shard's mystical properties require a certain level of spiritual understanding and discipline.",
    "vendorReason": "The DK Isles is known for its extensive collection of ancient artifacts, including relics from the Jungle Oracle’s temple.",
    "shippingDetail": "Ships via Lakitu Express, ensuring swift delivery with minimal risk of damage.",
    "usage": {
      "activation": "Action",
      "duration": "5 seconds or until an adjacent hostile creature takes an action",
      "endsWhen": "The start of the next turn for the user or if they are hit by an attack",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "The shard's mystical properties and rarity justify its moderate price in terms of XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:21:48.015673+00:00",
    "aiReviewedAt": "2026-07-22T01:21:48.015673+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_ancient_sword": {
    "id": "dk_isles_ancient_sword",
    "name": "The Whispering Blade of the Jungle",
    "description": "The Whispering Blade of the Jungle, forged in the heart of a primordial jungle, hums with the spirits of ancient warriors. Its etched runes shimmer with the echoes of past battles, dealing extra damage to foes who stand their ground, and occasionally sending them reeling into unconsciousness. The blade's whispers can be both a weapon and a shield, as its critical hits unleash a surge that amplifies your prowess in combat.",
    "category": "equipment",
    "price": 660,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+25% damage against heavily armored enemies",
      "10% chance to stun an enemy for one round on hit"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Stunning Blow",
        "rules": "When you score a critical hit with the Whispering Blade, there is a 10% chance that the target will be stunned for one round. The save DC to resist this effect is equal to 8 + your proficiency bonus + your Dexterity modifier."
      },
      {
        "title": "Fortified Strikes",
        "rules": "The blade deals an additional 25% damage against enemies with high defense, such as those wearing heavy armor or wielding strong shields. This effect is not cumulative with other sources of extra damage."
      }
    ],
    "levelRequirementReason": "This weapon requires a minimum level to wield effectively due to its mystical properties and the strength needed to control it.",
    "vendorReason": "The Whispering Blade is a symbol of power and heritage in the Dk Isles, and only those who have proven their worth are entrusted with such a weapon.",
    "shippingDetail": "Due to its mystical nature, the blade must be shipped via Boo Spectral Mail, which ensures safe delivery through enchanted means.",
    "usage": {
      "activation": "The weapon is activated on your attack action and deals its effects based on the roll of the dice.",
      "duration": "Instantaneous effect upon a successful hit; ends when the weapon is sheathed or lost in combat.",
      "endsWhen": "The blade's effects cease either when it is sheathed, broken in battle, or when you lose possession of it during combat.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Whispering Blade is priced at 1000 XP due to its unique enchantments and the materials used in its forging.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-22T01:22:02.871924+00:00",
    "aiReviewedAt": "2026-07-22T01:22:02.871924+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_banana_bane": {
    "id": "dk_isles_banana_bane",
    "name": "Banana Bane",
    "description": "Banana Bane is a withered fruit weapon, its once vibrant skin now cracked and blackened by malevolent magic. Crafted from a rogueport banana hoard, it whispers of ancient curses and forbidden lore. When bitten, it unleashes a burst of entropy that disorients enemies for 3 turns, leaving them reeling in confusion. The fruit is said to have been stolen by the Cosmic Jester cult from the sacred grove of the jungle's first king.",
    "category": "equipment",
    "price": 200,
    "icon": "🍈",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Disorienting Burst",
      "Piercing Bite"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disorienting Burst",
        "rules": "When activated, Banana Bane releases a burst of entropy that disorients the target creature for 3 turns. The effect ends if the target moves or takes any action. No save is allowed against this effect."
      },
      {
        "title": "Piercing Bite",
        "rules": "Banana Bane deals 1d6 piercing damage and has a 20% chance to cause temporary disorientation on hit, which lasts for an additional 1 turn if successful. The user regains 10 HP upon consuming the fruit."
      }
    ],
    "levelRequirementReason": "Banana Bane is crafted to be accessible to low-level adventurers who might find themselves in situations where such a cursed tool could prove useful.",
    "vendorReason": "The DK Isles are known for their exotic and cursed items, making Banana Bane a fitting addition to their wares.",
    "shippingDetail": "Shipping takes an additional day due to the fruit's fragile state, but it is carefully packed in enchanted banana leaves.",
    "usage": {
      "activation": "Eating and activating Banana Bane requires a bonus action.",
      "duration": "3 turns for disorientation effect; instantaneous damage dealt.",
      "endsWhen": "The effect ends if the target moves or takes an action, or when the fruit is consumed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Banana Bane's rare origin, magical properties, and utility justify its high price in the DK Isles market.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T01:21:51.154485+00:00",
    "aiReviewedAt": "2026-07-22T01:21:51.154485+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_banana_blood_satchel": {
    "id": "dk_isles_banana_blood_satchel",
    "name": "Banana Blood Satchel",
    "description": "The Banana Blood Satchel was once a humble fruit vendor’s bag, now drenched in the blood of a rogue Wario who met his demise over a love affair with a banana peel. It glows faintly and emits a sweet hum that quickens nearby bananas' growth to dangerous speeds, making them ripe for the picking. The satchel's touch can trigger a banana peel explosion, adding chaos to any encounter. Consuming it grants stealthy prowess while auto-attaching itself to your weapon, enhancing your speed temporarily.",
    "price": 36,
    "icon": "🍈",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Banana Hoard Boost",
      "Stealthy Aura"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Banana Hoard Boost",
        "rules": "Increases the capacity of banana hoards by 25% for 1 hour. This effect ends if you sell more than 10 bananas in a day or if the satchel is destroyed."
      },
      {
        "title": "Stealthy Aura",
        "rules": "Grants +2 to Stealth checks as long as it remains unopened and on your person. Ends when consumed, destroyed, or lost."
      }
    ],
    "levelRequirementReason": "This item is common but provides a useful boost for beginners.",
    "vendorReason": "The Kremling Krew frequently trades in items with their cursed history and abilities.",
    "shippingDetail": "Ships via special courier, ensuring the Banana Blood Satchel arrives safely to your doorstep.",
    "usage": {
      "activation": "Passive effect when carried; consumed by eating it.",
      "duration": "Active while on person and unopened; ends upon consumption or destruction.",
      "endsWhen": "Consumed, destroyed, or lost.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Banana Blood Satchel combines a useful utility with an element of danger, making it a valuable but not overpowered addition.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-22T01:21:49.332530+00:00",
    "aiReviewedAt": "2026-07-22T01:21:49.332530+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_banana_bomb_core": {
    "id": "dk_isles_banana_bomb_core",
    "name": "Banana Bomb Core",
    "description": "The Banana Bomb Core is a golden, pulsating fruit core harvested from the mutated fireflower groves of the DK Isles. Embedded in any explosive device or weapon, it unleashes a chaotic detonation fueled by banana energy, triggering unpredictable mutations around it. This core was smuggled out of Inkopolis where it was initially thought to be harmless; instead, it became a tool for disrupting ecosystems. The core's potency fades after 24 hours, making it a fleeting yet potent weapon.",
    "price": 200,
    "icon": "🍌",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Banana-fueled Detonation",
      "Mutagenic Radius"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Banana-fueled Detonation",
        "rules": "Activates on command by a DK Crew member. The Banana Bomb Core causes an explosion that deals 1d6 fire damage to all creatures within 5 feet, along with 1d4 additional damage from banana-related effects (e.g., temporary euphoria). This effect has a range of touch and lasts until the core detonates."
      },
      {
        "title": "Mutagenic Radius",
        "rules": "For every hour after activation, all creatures within 10 feet of the explosion must make a DC 13 Constitution saving throw or become subject to a random mutation (as determined by the DM) for 1d4 hours. The core loses potency and stops working entirely after 24 hours."
      }
    ],
    "levelRequirementReason": "The Banana Bomb Core is accessible to all adventurers who can understand its activation command.",
    "vendorReason": "The DK Isles natives are well-acquainted with the core's origins and have learned how to handle it safely.",
    "shippingDetail": "Delivered by Lakitu Drones, this item requires special handling due to its volatile nature. Delivery is expedited at an additional cost.",
    "usage": {
      "activation": "Command word spoken by a DK Crew member",
      "duration": "Instantaneous detonation upon activation",
      "endsWhen": "Expended after 24 hours of storage or detonation",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at a price reflecting its unique and dangerous nature, making it a valuable but not overpowered addition to any adventurer's arsenal.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T01:22:07.922678+00:00",
    "aiReviewedAt": "2026-07-22T01:22:07.922678+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_banana_soul_sack": {
    "id": "dk_isles_banana_soul_sack",
    "name": "Banana Soul Sack",
    "description": "The Banana Soul Sack is a woven leather pouch enchanted with the essence of ancient jungle bananas. It can store magical items, enhancing their storage capacity by +1 slot and granting a +2 bonus to Perception checks when detecting hidden truths. When opened during combat, it briefly transports the user to the nearest banana tree, offering a momentary reprieve from the chaos. This unique item is the only known way to safely handle cursed bananas without causing transformation or corruption.",
    "price": 36,
    "icon": "🍈",
    "stock": 7,
    "rarity": "common",
    "effects": [
      "Enhanced Storage",
      "Improved Perception"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Cheep Cheep Shipping",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Storage",
        "rules": "The Banana Soul Sack increases the storage capacity of any container by +1 slot. This effect is passive and does not require activation."
      },
      {
        "title": "Improved Perception",
        "rules": "When used, it grants a +2 bonus to Perception checks for detecting hidden truths or similar effects. The user must make an Intelligence (Perception) check when attempting this ability. This effect lasts until the end of the user's next turn."
      }
    ],
    "levelRequirementReason": "The item requires no specific level, as it is a common item that aids in general adventuring tasks.",
    "vendorReason": "This vendor specializes in items from the tropical DK Isles and their unique magic.",
    "shippingDetail": "Ships via air balloon, ensuring quick delivery to any location within the DK Isles.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous and lasts until the end of the user's next turn.",
      "endsWhen": "The effect ends when the user's next turn begins.",
      "charges": "Unlimited"
    },
    "priceReason": "The item is priced high due to its unique enchantment and rarity within the DK Isles.",
    "priceOriginal": 450,
    "priceReviewedAt": "2026-07-22T01:22:02.766743+00:00",
    "aiReviewedAt": "2026-07-22T01:22:02.766743+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_banana_whistle": {
    "id": "dk_isles_banana_whistle",
    "name": "Banana Whistle",
    "description": "The Banana Whistle is a hollowed-out banana peel intricately carved with ancient runes. When blown, it emits a haunting melody that confounds foes and provokes their laughter, causing them to drop their weapons in misplaced mirth. Crafted within the sanctum of a forgotten jungle temple, this relic was once wielded by spirits to ward off intruders. Its sound is known to spread joy among allies but also leaves enemies momentarily dazed and distracted.",
    "price": 36,
    "icon": "🍌",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Disrupts Concentration",
      "Provokes Temporary Euphoria"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disrupts Concentration",
        "rules": "When a creature within 30 feet hears the whistle, it must succeed on a DC 14 Wisdom saving throw or become confused for 1 minute. On a successful save, the creature is only stunned until its next action."
      },
      {
        "title": "Provokes Temporary Euphoria",
        "rules": "The user gains advantage on all Charisma checks and saves for 1 round after using the whistle. This effect does not stack with other sources of temporary euphoria or happiness."
      }
    ],
    "levelRequirementReason": "This item is designed to assist even beginning adventurers who might encounter challenging situations requiring a bit of whimsy and charm.",
    "vendorReason": "The vendors at dk_isles specialize in exotic jungle finds, including magical artifacts with unique origins.",
    "shippingDetail": "Ships via Lakitu drones within a week; delivery is tracked and confirmed upon arrival.",
    "usage": {
      "activation": "A free action to blow the whistle once per day.",
      "duration": "Disrupts Concentration lasts until the end of the creature's next turn. Provokes Temporary Euphoria lasts for 1 round.",
      "endsWhen": "The effect ends when the duration expires or when the user takes another action to use the item.",
      "charges": "One charge per day, recharged after a long rest."
    },
    "priceReason": "This balanced price reflects its rare and magical origin from jungle temples, providing significant utility for adventurers without being overpowered.",
    "priceOriginal": 150,
    "priceReviewedAt": "2026-07-22T01:22:09.400180+00:00",
    "aiReviewedAt": "2026-07-22T01:22:09.400180+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_battle_scent_spray": {
    "id": "dk_isles_battle_scent_spray",
    "name": "Battle Scent Spray",
    "description": "The Battle Scent Spray is a volatile concoction of jungle blood and Kremling frost, crafted by the crafty denizens of the Dark Isles. Upon activation, it releases a noxious mist that amplifies one's combat prowess—enhancing attack speed and damage, while also causing a brief but potent surge of panic in foes. However, after three uses, the user succumbs to a mild nausea, temporarily reducing their effectiveness on the battlefield.",
    "price": 4200,
    "icon": "🧪",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Enhanced Combat Prowess",
      "Enemy Panic"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Enhanced Combat Prowess",
        "rules": "When activated as an action, this spray grants the user +20% attack speed and +15% damage for 1 minute. The effect ends if the user drops to 0 hit points or if they take a short rest."
      },
      {
        "title": "Enemy Panic",
        "rules": "Additionally, there is a 10% chance each time this spray is used that it will cause one nearby enemy to suffer from panic for 1 minute. The panicked creature must make a DC 15 Wisdom saving throw or be frightened and unable to take actions until the effect ends."
      }
    ],
    "levelRequirementReason": "This spray requires at least 3rd level to use effectively, as its effects are best suited for seasoned fighters.",
    "vendorReason": "The Dark Isles is renowned for its unique and potent concoctions, making this spray a staple of their wares.",
    "shippingDetail": "Ships via Pipe Express; delivery may be delayed by one day due to the volatile nature of the contents.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute per use, with a 1-minute cooldown between uses",
      "endsWhen": "The effect ends if the user drops to 0 hit points or takes a short rest; each spray has 3 charges.",
      "charges": "3"
    },
    "priceReason": "This spray is priced at 1000 XP due to its potent mixture and limited number of uses.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T01:22:34.759332+00:00",
    "aiReviewedAt": "2026-07-22T01:22:34.759332+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_berry_bomb": {
    "id": "dk_isles_berry_bomb",
    "name": "Berry Bomb of the Wicked Vine",
    "description": "The Berry Bomb of the Wicked Vine is a shriveled, cursed fruit that explodes upon impact, spreading poison and vivid hallucinations. It is said to be a relic from an ancient jungle temple, used by Kremling shamans in their sieges. This berry can confuse enemies with memories of past battles, causing them to stagger and falter. It deals 50% extra damage to undead foes and triggers poison that lasts for 5 seconds, incapacitating and disorienting those caught within its blast.",
    "price": 660,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Poisonous Blast",
      "Memory Hallucination"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Poisonous Blast",
        "rules": "The Berry Bomb explodes upon impact, dealing poison damage equal to 1d6 + the user’s Strength modifier. This effect lasts for 5 seconds and imposes a -1 penalty on saving throws against poison. It has no save DC and can be used once per short or long rest."
      },
      {
        "title": "Memory Hallucination",
        "rules": "Upon impact, there is a 20% chance that an enemy within 30 feet of the explosion will suffer a memory hallucination, causing them to become confused for 1 minute. The DC for saving against this effect is equal to 8 + the user’s Charisma modifier."
      }
    ],
    "levelRequirementReason": "This item requires at least 5th level to activate its effects effectively.",
    "vendorReason": "The dk Isles are well-versed in jungle relics and carry this cursed fruit as part of their extensive inventory.",
    "shippingDetail": "Ships via spectral mail, which can sometimes be delayed by mischievous spirits.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the poison dissipates or confusion ends.",
      "charges": "1 use per short rest"
    },
    "priceReason": "This rare item is priced at 1000 XP, reflecting its cursed origins and potent effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:22:20.918388+00:00",
    "aiReviewedAt": "2026-07-22T01:22:20.918388+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_cold_war_ambush_grenade": {
    "id": "dk_isles_cold_war_ambush_grenade",
    "name": "Cold War Ambush Grenade",
    "description": "The Cold War Ambush Grenade is a deadly device crafted from the frosty tundra and venomous jungles of the Kremling Isles. When hurled at an enemy, it detonates in a frigid cloud that not only stuns foes but also douses them in a paralyzing chill. Enemies within the blast radius are momentarily frozen, their movements slowed to a crawl for several moments, making them easy targets for follow-up attacks.",
    "price": 660,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Freezes enemies",
      "Stuns and slows"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Frostwing Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Explosive Freeze",
        "rules": "When thrown, the grenade detonates in a burst of frost. Enemies within 10 feet are stunned for 2 rounds and have their movement reduced by half (50%) due to the freezing conditions."
      },
      {
        "title": "Frozen Slowed",
        "rules": "For 3 seconds after being stunned, enemies suffer a -2 penalty to Dexterity saving throws. This effect can be resisted with a successful Constitution save (DC 14)."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to handle the grenade's potency and timing.",
    "vendorReason": "The Kremling Isles vendors specialize in combat supplies from their harsh, unforgiving environment.",
    "shippingDetail": "Ships with a special cold chain to preserve the grenade's potency, ensuring it arrives in perfect condition.",
    "usage": {
      "activation": "Throw as an action",
      "duration": "Instantaneous explosion",
      "endsWhen": "On impact or when thrown",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price for a rare item that offers both immediate and lingering battlefield advantages.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:22:22.269049+00:00",
    "aiReviewedAt": "2026-07-22T01:22:22.269049+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_cold_war_blood_iron": {
    "id": "dk_isles_cold_war_blood_iron",
    "name": "Cold War Blood Iron",
    "description": "Forged in the heart of a frozen conflict, Cold War Blood Iron is a weapon that draws its power from the very essence of frost and ice. Crafted during the last battle of the Kremling Cold War, it glows with an icy sheen as it delivers devastating blows to enemies with ice-based effects. Those struck by its keen edge also face a chilling aura, reducing their attack speed by 10% for 5 seconds while the weapon's wielder gains a +30% damage bonus against frost and ice targets.",
    "category": "equipment",
    "price": 660,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Icy Strike",
      "Chilling Aura"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Icy Strike",
        "rules": "When you hit an enemy with Cold War Blood Iron, it deals +30% extra damage to frost or ice-based enemies. This effect is limited to once per turn."
      },
      {
        "title": "Chilling Aura",
        "rules": "As a bonus action, you can activate the weapon's aura which reduces the target's attack speed by 10%. This effect lasts for 5 seconds and ends when the target moves more than 5 feet away from you or if another creature enters the aura's radius. Recharges after a short rest."
      }
    ],
    "levelRequirementReason": "The weapon requires a minimum level of 3 to wield its frost-based power.",
    "vendorReason": "Known for their expertise in cold weapons, the DK Isles are the perfect vendor for Cold War Blood Iron.",
    "shippingDetail": "Ships via Lakitu Drones' Express Freeze service to ensure a swift delivery of this frosty weapon.",
    "usage": {
      "activation": "Bonus action or as part of an attack action when making a melee attack.",
      "duration": "Instantaneous, lasting effect until the end condition is met.",
      "endsWhen": "The target moves more than 5 feet away or another creature enters the aura's radius; recharges after a short rest.",
      "charges": "Unlimited charges, recharging after each short rest."
    },
    "priceReason": "Balanced at 1000 XP, Cold War Blood Iron offers a solid value for its frost-based damage and area effect capabilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:22:26.168393+00:00",
    "aiReviewedAt": "2026-07-22T01:22:26.168393+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_cold_war_bomb_shells": {
    "id": "dk_isles_cold_war_bomb_shells",
    "name": "Cold War Bomb Shells",
    "description": "Cold War Bomb Shells are miniature fusion devices that explode in a frosty shockwave, shattering enemies and freezing those caught within its frigid blast. These shells are meticulously crafted from the remnants of forgotten conflicts, their icy cores sizzling with latent energy. Each shell detonates after 3 seconds of activation, releasing a wave of freezing air that not only deals 400 damage but also has a chilling 50% chance to paralyze nearby foes for 2 seconds, rendering them immobile and vulnerable.",
    "price": 660,
    "icon": "💣",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Freeze",
      "Explosive Damage"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Explosive Damage",
        "rules": "When a Cold War Bomb Shell detonates within 5 feet of an enemy, it deals 400 fire and cold damage. The explosion has a range of 15 feet, affecting all creatures in the area."
      },
      {
        "title": "Freeze",
        "rules": "There is a 50% chance that nearby enemies will be hit by a freezing effect, immobilizing them for 2 seconds. This effect can save against with a DC of 15."
      }
    ],
    "levelRequirementReason": "These bombs are designed to be accessible to lower-level characters who need powerful tools without the complexity of higher-tier magic.",
    "vendorReason": "The Cold Isles supply house is known for its unique and potent weaponry, making these shells a staple in their inventory.",
    "shippingDetail": "Ships with next-day delivery via Boo's spectral courier service.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "Instantaneous",
      "endsWhen": "Explosion or thrown away",
      "charges": "Unlimited, but each shell is a separate activation"
    },
    "priceReason": "Balanced at 1000 XP to reflect its explosive power and chance to immobilize foes.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T01:23:06.203634+00:00",
    "aiReviewedAt": "2026-07-22T01:23:06.203634+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_cold_war_bomb_shield": {
    "id": "dk_isles_cold_war_bomb_shield",
    "name": "Cold War Bomb Shield",
    "description": "The Cold War Bomb Shield is a shimmering, frost-laced shield forged in the arctic wastes of the Dark Isles. Crafted from enchanted ice and bound with ancient magic, it absorbs both physical and magical attacks, turning any clash into an icy ballet of frozen adversaries. Activated by a swift gesture, this shield not only deflects up to 50% of incoming damage but also releases a shockwave that freezes nearby enemies in their tracks for three seconds.",
    "category": "equipment",
    "price": 660,
    "icon": "📦",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Freeze Enemies",
      "Damage Absorption"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Freeze Enemies",
        "rules": "When activated, the shield releases an icy shockwave that targets all creatures within a 10-foot radius. These creatures are frozen in place for 3 seconds, rendering them unable to move or take actions. The spell ends if a creature takes any damage."
      },
      {
        "title": "Damage Absorption",
        "rules": "For every hit the shield deflects, it absorbs up to 50% of the incoming damage. This effect has no cooldown but can only activate once per turn."
      }
    ],
    "levelRequirementReason": "The Cold War Bomb Shield requires a minimum level of 3 due to its complex enchantments and magical properties.",
    "vendorReason": "The Dark Isles is renowned for its mastery in cold magic, making it the perfect vendor for this ice-bound shield.",
    "shippingDetail": "Ships via the Void Drifter Relay within 5 days of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous; lasts until a creature takes damage or the user uses their action on another shield-related ability",
      "endsWhen": "A creature in range takes damage, or the wielder uses an action for another shield-related ability",
      "charges": "Unlimited"
    },
    "priceReason": "The Cold War Bomb Shield is priced at 1000 XP as it combines potent defensive capabilities with a unique offensive spell, making it highly sought after by adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:22:38.827322+00:00",
    "aiReviewedAt": "2026-07-22T01:22:38.827322+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_cold_war_craft": {
    "id": "dk_isles_cold_war_craft",
    "name": "Frostbite Taser Vial",
    "description": "The Frostbite Taser Vial is a cold-war relic, a vial of sub-zero plasma that can freeze its target in place for a fleeting moment. When released, it sends a jolt of icy energy that not only slows an enemy’s movements by -100% for five seconds but also deals 200 piercing damage upon impact. Ideal for disrupting enemy formations during jungle skirmishes, this vial is as much a tool of war as it is a symbol of the Frost Isles' cold-hearted conflict.",
    "price": 660,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Slows Movement",
      "Deals Piercing Damage"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Slowed Movement",
        "rules": "When activated, the vial releases a burst of icy energy that targets one creature within 30 feet. The target is immobilized and suffers -100% movement speed for 5 seconds. There is no saving throw against this effect."
      },
      {
        "title": "Piercing Damage",
        "rules": "Upon impact, the vial deals 200 piercing damage to the target creature. This effect occurs only once per use and has a recharge time of one hour."
      }
    ],
    "levelRequirementReason": "The Frostbite Taser Vial is an introductory relic designed for beginning adventurers who may benefit from its battlefield disruption capabilities.",
    "vendorReason": "The Frost Isles vendor, known for their cold-war relics and technological artifacts, offers this vial as a starting point for new heroes entering the conflict.",
    "shippingDetail": "Delivered within three days via Pipe Express' cold-resistant courier service.",
    "usage": {
      "activation": "A bonus action to release the icy energy and deal damage.",
      "duration": "Instantaneous effect lasting five seconds.",
      "endsWhen": "The vial is recharged after one hour or destroyed upon impact.",
      "charges": "Unlimited uses per day, recharging daily."
    },
    "priceReason": "The Frostbite Taser Vial offers a balanced mix of utility and damage dealing for its price, making it a valuable item for new adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:23:46.093787+00:00",
    "aiReviewedAt": "2026-07-22T01:23:46.093787+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_cold_war_cryptic_ribbon": {
    "id": "dk_isles_cold_war_cryptic_ribbon",
    "name": "Cold War Cryptic Ribbon",
    "description": "The Cold War Cryptic Ribbon is a shimmering, frost-laden artifact woven from the very threads of Kremling espionage secrets. When worn in the dense jungles of the Dark Isles, it grants you the stealthy grace of a jungle cat and reveals hidden paths that even the most seasoned explorers miss. As you move through the underbrush, your enemies' positions are laid bare, giving you a tactical advantage in covert operations.",
    "category": "equipment",
    "price": 660,
    "icon": "🕵",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stealthy Disguise",
      "Reveal Hidden Paths"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Stealthy Disguise",
        "rules": "While wearing the Cold War Cryptic Ribbon, you gain a +30 bonus to Dexterity (Stealth) checks for 8 seconds. This effect ends if you are hit in combat or if you stop moving."
      },
      {
        "title": "Reveal Hidden Paths",
        "rules": "You can use an action to reveal hidden paths and enemy positions within a 30-foot radius for 8 seconds. Creatures with blindsight or truesight can see through this effect. This power has no save DC but is limited to once per long rest."
      }
    ],
    "levelRequirementReason": "This item requires a level 5 character due to its complex magical properties and the espionage lore woven into it.",
    "vendorReason": "The Dark Isles are known for their rich history of covert operations, making this vendor a perfect source for such an artifact.",
    "shippingDetail": "Delivery via the Void Drifter takes three days with no additional charges.",
    "usage": {
      "activation": "Action or Reaction (to gain the stealth bonus); Action to use reveal hidden paths",
      "duration": "8 seconds for Stealthy Disguise; 8 seconds duration for Reveal Hidden Paths, ends if interrupted",
      "endsWhen": "Combat or stopping movement ends Stealthy Disguise; Revealed effects end after their durations",
      "charges": "Unlimited"
    },
    "priceReason": "The item's unique magical properties and espionage lore justify its price, aligning with the vendor’s reputation.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:21:21.334086+00:00",
    "aiReviewedAt": "2026-07-22T04:21:21.334086+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_cold_war_echo_shard": {
    "id": "dk_isles_cold_war_echo_shard",
    "name": "Cold War Echo Shard",
    "description": "The Cold War Echo Shard is a jagged shard of dark glass, its surface etched with ancient Kremlin runes. When activated, it emits a chilling psychic echo that disrupts enemy communication for 10 seconds and summons a spectral frost echo that hovers at your side, dealing 35% damage to all nearby enemies within 20 feet as long as you are in icy terrain. The shard's power is said to come from the very heart of Kremlin battlestations, where it withstood countless battles against opposing forces.",
    "price": 660,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Disrupts enemy communication for 10 seconds",
      "Summons a spectral frost echo companion"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Psychic Disruption",
        "rules": "As an action, the user activates the shard to emit a psychic echo. This effect disrupts all non-magical and non-artifact communication for creatures within 50 feet for 10 seconds. The effect has no save DC and does not consume charges."
      },
      {
        "title": "Spectral Frost Echo",
        "rules": "The shard summons a spectral frost echo that appears as a ghostly figure and hovers at your side until the end of your next turn or until you dismiss it. While present, the echo deals 35% damage to all creatures within 20 feet who are in icy terrain. The echo has AC 18 and hit points equal to three times the user's level."
      }
    ],
    "levelRequirementReason": "The shard is accessible to lower-level characters due to its unique, non-combat utility and thematic connection to Kremlin lore.",
    "vendorReason": "The Cold Isles are known for their ties to Kremlin history, and the shard's origins make it a fitting addition to their inventory.",
    "shippingDetail": "Ships via the Void Drifter Relay within 3 game days of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds (Psychic Disruption), until end of next turn or dismissed (Spectral Frost Echo)",
      "endsWhen": "Dismissed by the user, duration ends (both effects)",
      "charges": "Unlimited"
    },
    "priceReason": "The shard's unique utility and thematic value justify its price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:23:11.065092+00:00",
    "aiReviewedAt": "2026-07-22T01:23:11.065092+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_cold_war_ice_satchel": {
    "id": "dk_isles_cold_war_ice_satchel",
    "name": "Ice Satchel of the Frozen Pact",
    "description": "The Ice Satchel of the Frozen Pact, a relic from the frozen wastes of the Dark Isles, is crafted from frost-veined fabric that glows with an icy blue light. When activated, it releases a frigid blast capable of freezing foes in place for four seconds, rendering them immobile and vulnerable to attacks. The satchel's touch alone can deal 15 points of ice damage, making it a versatile tool for jungle ambushes and cold-climate tactics.",
    "category": "equipment",
    "price": 660,
    "icon": "📦",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Freezes Enemies",
      "Deals Ice Damage"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Frozen Freeze",
        "rules": "When activated as an action, the Ice Satchel emits a freezing blast that targets all creatures within a 10-foot radius. These creatures are immobilized for 4 seconds and have their movement speed reduced by 50%. The effect has no save DC and can be used once per short or long rest."
      },
      {
        "title": "Cold Touch",
        "rules": "The Ice Satchel deals 15 points of cold damage to any creature that makes a melee attack against the wielder. This effect is triggered automatically each time an enemy touches the satchel, and it has no save DC."
      }
    ],
    "levelRequirementReason": "The Ice Satchel requires a minimum character level of 3 to ensure that users can effectively utilize its cold-based abilities in combat.",
    "vendorReason": "The Dark Isles is the birthplace of this relic, and only their vendors have access to it.",
    "shippingDetail": "Ships via the Void Drifter Relay, typically arriving within a week.",
    "usage": {
      "activation": "Action",
      "duration": "4 seconds of immobilization per use",
      "endsWhen": "The effect ends when the duration expires or the user uses another action to dismiss it early",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "This relic is crafted from rare frost-veined fabric and requires advanced cold-based magic, justifying its price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:23:37.840393+00:00",
    "aiReviewedAt": "2026-07-22T01:23:37.840393+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_cold_war_ice_shard": {
    "id": "dk_isles_cold_war_ice_shard",
    "name": "Ice Shard of the Kremling War",
    "description": "The Ice Shard of the Kremling War is a brittle, frost-laden shard forged in the heart of a long-forgotten Kremling Cold War battlefield. It glows with a cold blue light that pulses when struck, and upon impact, it releases a wave of freezing energy that slows enemies while enhancing the wielder’s agility in combat. This relic is a potent tool for those who fight in icy climes or against frosty foes.",
    "category": "equipment",
    "price": 660,
    "icon": "📦",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Slows Enemies",
      "Enhances User's Speed"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Icebound Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Freezing Aura",
        "rules": "When the Ice Shard strikes an enemy, it releases a freezing aura that reduces their movement speed by 30% for 3 seconds. This effect has no save DC and can occur once per turn."
      },
      {
        "title": "Agile Step",
        "rules": "For every successful hit with the Ice Shard, the wielder gains +25% movement speed for 5 seconds. This effect stacks up to three times but cannot exceed +75% movement speed."
      }
    ],
    "levelRequirementReason": "The shard is designed to be accessible to adventurers of all levels, making it a versatile tool in various combat scenarios.",
    "vendorReason": "As a relic from the Kremling Cold War, this item is one of many historical artifacts sold by DK Isles, known for their extensive collection of ancient and magical items.",
    "shippingDetail": "Ships via Icebound Express, delivering within three days to any frost-touched region.",
    "usage": {
      "activation": "On hit with a melee weapon",
      "duration": "Instantaneous; ends when the user takes an action or reaction",
      "endsWhen": "The effect expires after its duration",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's rare material and potent effects without being overpowered.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:23:56.057531+00:00",
    "aiReviewedAt": "2026-07-22T01:23:56.057531+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_cold_war_jungle_core": {
    "id": "dk_isles_cold_war_jungle_core",
    "name": "Cold War Jungle Core",
    "description": "The Cold War Jungle Core is a fusion of jungle vitality and Kremling war technology forged by the secretive DK Isles. This core, encased in a sleek, matte black shell adorned with ancient runes, emits an eerie cold war aura that slows enemy cooldowns while bolstering the wielder's speed and resilience in dense jungle zones. When activated, it grants a +10% increase to movement speed within jungle terrain and reduces enemy skill cooldowns by 20%, making foes feel the brunt of both natural and technological warfare.",
    "category": "equipment",
    "price": 660,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Slow Cooldowns",
      "Enhanced Jungle Speed"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Slow Cooldowns",
        "rules": "When activated, reduces enemy skill cooldowns by 20% for the wielder. This effect lasts until the end of your next turn. No save DC required."
      },
      {
        "title": "Enhanced Jungle Speed",
        "rules": "Increases movement speed within jungle zones by +10%. This effect is passive and lasts until you leave a jungle zone or are incapacitated. No save DC required."
      }
    ],
    "levelRequirementReason": "The intricate fusion of technology and nature requires a minimum level to ensure the wielder can handle its complexities.",
    "vendorReason": "DK Isles is renowned for their mastery in blending jungle lore with cold war tech, making this core one of their signature items.",
    "shippingDetail": "The item arrives within a week, delivered by the fastest courier service available.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous with a duration until end of next turn for 'Slow Cooldowns'; passive while in jungle zones for 'Enhanced Jungle Speed'",
      "endsWhen": "The effect ends when you leave the jungle zone or are incapacitated.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to reflect its unique fusion of technology and nature, providing a significant but not overpowered advantage.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:23:52.443465+00:00",
    "aiReviewedAt": "2026-07-22T01:23:52.443465+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_cold_war_mushroom_cake": {
    "id": "dk_isles_cold_war_mushroom_cake",
    "name": "Cold War Mushroom Cake",
    "description": "The Cold War Mushroom Cake, a decadent fungal confection crafted from the very soil of Kremling-era espionage, exudes an eerie green glow in the jungle's twilight. Each bite releases a cloud of mycelial mist that cloaks you in temporary stealth, allowing you to slip past unseen. When the cake is consumed, the ground seems to yield beneath your feet as you phase through solid earth for ten seconds, leaving no trace behind. Ideal for the covert jungle operative who must navigate clandestine routes without detection.",
    "price": 660,
    "icon": "🍄",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stealth Cloak",
      "Phase Through Earth"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth Cloak",
        "rules": "Activating this effect requires consuming a bite of the cake. The user becomes temporarily invisible and silent for thirty seconds, granting advantage on Dexterity (Stealth) checks. This effect ends if you take any action other than movement or if you are damaged."
      },
      {
        "title": "Phase Through Earth",
        "rules": "Phasing through solid ground is an instantaneous activation that lasts for ten seconds. While phased, you can move through earth and plants as if they were air; however, you cannot pass through creatures or objects. This effect ends when the duration expires or if you take any action other than movement."
      }
    ],
    "levelRequirementReason": "The cake's effects are designed for beginners to experiment with stealth and terrain manipulation in their missions.",
    "vendorReason": "As a provider of exotic and experimental items from the Kremling era, dk Isles is known for its unique wares, including this Cold War confection.",
    "shippingDetail": "Delivered by Lakitu drones, the cake arrives in pristine condition, though it must be consumed within twenty-four hours of arrival to maintain its potency.",
    "usage": {
      "activation": "Eating a bite of the cake",
      "duration": "Thirty seconds for Stealth Cloak; ten seconds for Phasing Through Earth",
      "endsWhen": "If you take any action other than movement or are damaged, or when the stated duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The cake's rarity and unique effects justify its price, providing a valuable tool for espionage missions without overburdening the player.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:24:28.455431+00:00",
    "aiReviewedAt": "2026-07-22T01:24:28.455431+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_cold_war_soul_torch": {
    "id": "dk_isles_cold_war_soul_torch",
    "name": "Cold War Soul Torch",
    "description": "The Cold War Soul Torch glows with an eerie, ethereal light that seems to pulse in rhythm with the ancient Kremling souls it consumes. Crafted from the very heart of the Frostbite Mountains, this torch not only burns away thick fog but also reveals hidden paths long since forgotten by time itself. Its chilling aura is said to have been forged during the height of the Cold War, and when activated, it reduces enemy attack power for a moment, leaving them frozen in place with fear.",
    "price": 660,
    "icon": "🌋",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Burns Fog",
      "Reduces Attack Power"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Frigid Wind Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Burns Fog",
        "rules": "As an action, the Cold War Soul Torch expels a cone of cold light that eliminates all fog within its range for 10 seconds. This effect has no save DC and is usable once per short or long rest."
      },
      {
        "title": "Reduces Attack Power",
        "rules": "When activated as an action, the Cold War Soul Torch emits a chilling aura that reduces the attack power of all enemies within a 20-foot radius by 25% for 10 seconds. This effect is instantaneous and has no save DC or recharge requirements."
      }
    ],
    "levelRequirementReason": "The Cold War Soul Torch's arcane construction requires a minimum level of 3 to wield.",
    "vendorReason": "As the torch was forged in the Frostbite Mountains, it makes sense that it would be sold by the vendors of the DK Isles who have access to such treasures.",
    "shippingDetail": "Due to its fragile nature, the Cold War Soul Torch is shipped via Frigid Wind Express with special thermal packaging and expedited delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (Burns Fog) / 10 seconds (Reduces Attack Power)",
      "endsWhen": "Used up or expended after a short rest",
      "charges": "Unlimited, but can only be used once per long rest"
    },
    "priceReason": "The Cold War Soul Torch is priced at 1000 XP due to its unique crafting materials and the arcane power it harnesses.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:24:32.119646+00:00",
    "aiReviewedAt": "2026-07-22T01:24:32.119646+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_cold_war_sword_of_the_creeper": {
    "id": "dk_isles_cold_war_sword_of_the_creeper",
    "name": "Cold War Sword of the Creeper",
    "description": "The Cold War Sword of the Creeper is a blade forged from the heartwood and frost veins of a frozen jungle creeper, its edges shimmering with ice and decayed flora. Its origin lies in the treacherous jungles of the Deep Isles, where it was crafted by ancient forges that mimic the cold winds of winter. Strike true and watch as your foes' movements turn to brittle ice under this weapon’s touch; it deals extra damage to those encumbered by frost or jungle-themed abilities.",
    "category": "equipment",
    "price": 660,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+15% bonus damage against enemies with ice or jungle-themed abilities",
      "On hit, there is a 7% chance to freeze an enemy for 2 seconds"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Frozen Edge",
        "rules": "When you deal damage with this weapon, there is a 7% chance that the target becomes frozen in place for 2 seconds. This effect does not stack and requires a successful melee attack to activate."
      },
      {
        "title": "Elemental Harmony",
        "rules": "This sword grants +15% bonus damage against targets with ice or jungle-themed abilities, stacking with other elemental bonuses."
      }
    ],
    "levelRequirementReason": "The Cold War Sword of the Creeper requires a minimum level to wield its icy and jungle powers effectively.",
    "vendorReason": "The Deep Isles are renowned for their mastery in crafting weapons from exotic materials, including this one-of-a-kind sword.",
    "shippingDetail": "Carefully wrapped and delivered by Shy Guy Smugglers, ensuring the blade arrives sharp and intact.",
    "usage": {
      "activation": "Melee attack only",
      "duration": "Instantaneous effect; ends when the weapon is sheathed or the fight concludes",
      "endsWhen": "The weapon's effects end when it is sheathed or the combat session concludes",
      "charges": "Unlimited, recharges on a long rest"
    },
    "priceReason": "Crafted with rare materials and ancient techniques, this sword’s price reflects its unique elemental capabilities.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T01:24:20.386450+00:00",
    "aiReviewedAt": "2026-07-22T01:24:20.386450+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_cold_war_tactical_map": {
    "id": "dk_isles_cold_war_tactical_map",
    "name": "Cold War Tactical Map",
    "description": "The Cold War Tactical Map unfurls like a compass needle, its surface glowing with cryptic runes that pulse in time with the jungle's heartbeat. This artifact reveals hidden Kremling outposts and ancient ruins through its matrix of iridescent symbols, marking them for your strategic advantage. Each fold brings new insight into enemy movements, as if the map itself breathes with the forest. Must be used in conjunction with a compass to fully unlock its tactical potential.",
    "category": "equipment",
    "price": 5500,
    "icon": "🗺",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals Hidden Outposts",
      "Enhances Jungle Navigation"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Reveal Hidden Outposts",
        "rules": "This effect activates as an action, allowing you to pinpoint the location of hidden Kremling outposts within a radius of 100 meters. The map glows with a faint red light, revealing the outpost's exact coordinates and range of influence for one minute."
      },
      {
        "title": "Enhances Jungle Navigation",
        "rules": "While holding this map, you gain a +2 bonus to Survival checks made in jungle terrain. Additionally, the map provides a constant +10% movement speed boost within any jungle environment, as if you were always attuned to the forest's natural patterns."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 5 due to its complexity and strategic value in combat.",
    "vendorReason": "The Cold Isles are known for their expertise in espionage and jungle warfare, making the DK Isles the perfect vendor for this tactical map.",
    "shippingDetail": "This item ships via Pipe Express, ensuring secure delivery within a week of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The effect ends when the map is no longer in your possession or if you take damage.",
      "charges": "Unlimited"
    },
    "priceReason": "This Cold War Tactical Map is priced at 2500 XP due to its rarity and strategic importance, making it a valuable asset for any seasoned explorer.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:24:52.129607+00:00",
    "aiReviewedAt": "2026-07-22T01:24:52.129607+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_cold_war_tactical_suit": {
    "id": "dk_isles_cold_war_tactical_suit",
    "name": "Cold War Tactical Suit",
    "description": "The Cold War Tactical Suit, forged in the heart of the Frost Isles, melds heat and ice resistance into a single, hybridized marvel. Crafted from enchanted steel that glows faintly under moonlight, it allows the wearer to move freely through treacherous icy terrain while resisting frost damage with ease. The suit's core, a gleaming crystal embedded within its chestplate, provides a steady flow of regenerative energy, bolstering armor by 5 points every second for those who wear it in frigid climes.",
    "category": "equipment",
    "price": 4200,
    "icon": "📦",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "+20% resistance to frost damage",
      "15% increased movement speed on icy surfaces"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Regenerative Armor",
        "rules": "The suit's core emits a subtle, regenerative energy that increases the user's armor by 5 points for every second spent in frost environments. This effect ends when leaving such areas or if the user is no longer wearing the suit."
      },
      {
        "title": "Icy Swift",
        "rules": "While on icy terrain, the wearer gains a +15% bonus to movement speed. This effect lasts until the end of your next turn after entering an icy area."
      }
    ],
    "levelRequirementReason": "The suit's intricate enchantments and specialized design necessitate significant experience in cold-weather combat.",
    "vendorReason": "As the creators of this marvel, DK Isles ensures only the most skilled adventurers receive the Cold War Tactical Suit.",
    "shippingDetail": "The suit is typically delivered within a week via Shy Guy Smugglers' fast courier service, but delivery times can vary in extreme weather conditions.",
    "usage": {
      "activation": "Passive effect upon donning the suit; ends when leaving icy environments or removing the suit.",
      "duration": "Instantaneous",
      "endsWhen": "Leaving an icy environment or removing the suit",
      "charges": "Unlimited"
    },
    "priceReason": "The suit's unique enchantments, specialized materials, and intricate design justify its moderate price.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T01:24:53.153779+00:00",
    "aiReviewedAt": "2026-07-22T01:24:53.153779+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_cold_war_tactile_ward": {
    "id": "dk_isles_cold_war_tactile_ward",
    "name": "Frostbound Shield Core",
    "description": "The Frostbound Shield Core is a relic forged in the icy heart of the Kremling War. Crafted from enchanted frost iron, this core channels cold energy into an impenetrable aura, perfect for blocking ambushes in dense jungle foliage. When activated, it creates a shimmering frost barrier that reduces incoming ice and cold-based attacks by 25%, and has a 10% chance to freeze enemy strikes for a second, dealing minor damage over time.",
    "category": "equipment",
    "price": 660,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+25% defense against ice and cold-based attacks",
      "10% chance to freeze enemy attacks for 1 second"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Frost Barrier",
        "rules": "Activates as a reaction when you take an ice or cold-based attack. Grants +25% defense against that attack and all subsequent attacks from the same source until your next turn, reducing incoming damage by 10 points."
      },
      {
        "title": "Freeze Strike",
        "rules": "Has a 10% chance to freeze an enemy's attack for 1 second. During this time, the attacker is unable to make attacks or take other actions but can still move and speak. This effect has no save DC."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 5 to wield due to its complex enchantments.",
    "vendorReason": "DK Isles specializes in ancient and enchanted items, making the Frostbound Shield Core a perfect addition to their inventory.",
    "shippingDetail": "Ships via Lakitu Drones, known for their reliable and swift delivery services within the kingdom.",
    "usage": {
      "activation": "Reaction when taking an ice or cold-based attack",
      "duration": "Until your next turn",
      "endsWhen": "The effect ends naturally after one use per long rest",
      "charges": "Unlimited, recharges at dawn"
    },
    "priceReason": "Balanced price of 1000 XP reflects the item's rarity and utility in combat.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T01:24:45.332718+00:00",
    "aiReviewedAt": "2026-07-22T01:24:45.332718+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_cold_war_thermometer": {
    "id": "dk_isles_cold_war_thermometer",
    "name": "Cold War Thermometer",
    "description": "The Cold War Thermometer hums with the chill of past espionage battles in Kremling's shadowy halls. This relic not only measures ambient heat but also reveals hidden thermal signatures, making it a crucial tool for covert operations. A crimson glow signals imminent danger, alerting its wielder to potential threats before they can strike. When used against cold-resistant foes, this thermometer delivers an extra edge, increasing damage by 10%. Its stealthy companion effect ensures that when you use stealth abilities, the cooldown is reduced by 5%.",
    "category": "equipment",
    "price": 27000,
    "icon": "📦",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Reveals hidden thermal signatures",
      "+10% damage to cold-resistant foes"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Thermal Revelation",
        "rules": "As a bonus action, the user can activate this effect within 30 feet. It lasts for 1 minute and reveals hidden thermal signatures of creatures or objects in its area, allowing you to see through cloaks of invisibility and similar effects in that range."
      },
      {
        "title": "Cold Edge",
        "rules": "When used against a creature with the cold resistance trait, this thermometer deals an additional +10% damage. This effect is not stackable with other sources of increased damage."
      }
    ],
    "levelRequirementReason": "The Cold War Thermometer requires significant skill in espionage and stealth to wield effectively.",
    "vendorReason": "As a relic from Kremling's frosty halls, it makes sense that the DK Isles would be able to offer this item, known for their expertise in covert operations and espionage equipment.",
    "shippingDetail": "The Cold War Thermometer is shipped via Koopa Express, ensuring safe delivery with a tracking number. Due to its fragile nature, it's recommended to use the express service.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute",
      "endsWhen": "Until the end of your next turn after the duration expires or when you take another bonus action to activate this effect.",
      "charges": "Unlimited, but only one use per short or long rest."
    },
    "priceReason": "The Cold War Thermometer is priced at 3500 XP due to its rarity and the unique benefits it offers in espionage and combat against cold-resistant foes.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T01:25:03.942433+00:00",
    "aiReviewedAt": "2026-07-22T01:25:03.942433+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_cold_war_thermopod": {
    "id": "dk_isles_cold_war_thermopod",
    "name": "Cold War Thermopod",
    "description": "The Cold War Thermopod resembles a vibrant jungle fruit, but its true nature lies in its forgeheart core and the volcanic ash it's encased in from a distant island. This device can emit scorching heat to melt ice or ignite enemy defenses, turning strategic hazards into tactical advantages on the battlefield. It warps the environment around it for a few moments, making it a double-edged tool that both allies and foes must navigate with caution.",
    "category": "equipment",
    "price": 5500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Melt Ice",
      "Ignite Defense"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Melt Ice",
        "rules": "When activated as an action within a 10-foot radius, the Cold War Thermopod emits intense heat that melts ice or frozen terrain. Targets in the area must make a DC 14 Constitution saving throw or fall prone and take 500 fire damage."
      },
      {
        "title": "Ignite Defense",
        "rules": "For 3 seconds, allies within 20 feet of the Thermopod gain advantage on saving throws against fire-based effects. This effect ends if a creature moves more than 10 feet away from the Thermopod or if it is destroyed."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to wield its tactical and environmental hazards effectively.",
    "vendorReason": "The Cold War Thermopod is a product of the volcanic and strategic expertise of the DK Isles, making it their flagship item.",
    "shippingDetail": "Delivered with Pipe Express's signature 'hot zone' courier service ensuring swift delivery to the nearest point of activation.",
    "usage": {
      "activation": "Activate as an action within a 10-foot radius.",
      "duration": "Instantaneous effect, duration varies by effect.",
      "endsWhen": "Effect ends when its use is expended or destroyed.",
      "charges": "Unlimited uses per short or long rest."
    },
    "priceReason": "The Cold War Thermopod's unique combination of environmental manipulation and tactical advantage justifies a price of 2500 XP, ensuring it remains a valuable but not overpowered item for players.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:25:16.490324+00:00",
    "aiReviewedAt": "2026-07-22T01:25:16.490324+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_cold_war_tidecaller": {
    "id": "dk_isles_cold_war_tidecaller",
    "name": "Cold War Tidecaller",
    "description": "The Cold War Tidecaller is a relic imbued with the raw power of conflict. Crafted from the ancient bones of the jungle and encased in ice, it channels the unyielding tension between two worlds. Upon activation, it opens a rift that grants you resistance to elemental damage for 10 minutes and stuns foes caught within for 2 seconds. The rift spawns either icy or jungle-themed effects, altering combat dynamics.",
    "category": "equipment",
    "price": 660,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Elemental Resistance",
      "Stunning Stance"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Elemental Resistance",
        "rules": "Activates as a bonus action. Provides resistance to all elemental damage for the next 10 minutes. Ends if the user is incapacitated."
      },
      {
        "title": "Stunning Stance",
        "rules": "When an enemy takes any type of elemental damage, they are stunned for 2 seconds. This effect has a maximum of three triggers per short rest."
      }
    ],
    "levelRequirementReason": "Requires at least level 5 to master the tension between jungle and ice.",
    "vendorReason": "DK Isles is known for its deep connection with the natural world, making it a fitting vendor for this relic of elemental conflict.",
    "shippingDetail": "Ships via the Void Drifter Relay; expedited delivery available for an additional 500 XP.",
    "usage": {
      "activation": "Bonus action to activate, and can be used once per short rest.",
      "duration": "10 minutes or until incapacitated",
      "endsWhen": "User is incapacitated or effects expire after 10 minutes",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its powerful but not game-breaking abilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:25:08.431952+00:00",
    "aiReviewedAt": "2026-07-22T01:25:08.431952+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_cold_war_torch": {
    "id": "dk_isles_cold_war_torch",
    "name": "Frostfire Torch of the Cold War",
    "description": "The Frostfire Torch of the Cold War radiates a chilling frost that seems to freeze the very air around it, making foes stagger and slow their movements. Crafted from the bones of ancient ice dragons in the frigid depths of the jungle, this torch's flame is as cold as the heart of the winter storm. Its icy glow can be seen for miles through the dense foliage, making it a perfect tool for guerrilla warfare in the frosty reaches of the jungle.",
    "category": "equipment",
    "price": 660,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "-15% enemy movement speed within 30ft",
      "+5% damage to frozen enemies"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Frost Aura",
        "rules": "The torch emits a blinding frost aura that reduces the movement speed of all creatures within 30 feet by 15%. This effect lasts for the duration of the encounter. Creatures with the Cold subtype have disadvantage on saving throws against this effect."
      },
      {
        "title": "Frozen Strike",
        "rules": "When a creature hit by an attack made while you are holding this torch has its speed reduced, it deals +5% additional damage to that target. This effect can occur once per round and does not stack with itself."
      }
    ],
    "levelRequirementReason": "Crafted from ancient ice dragon bones, the Frostfire Torch requires a high level of skill and magic to wield effectively.",
    "vendorReason": "The DK Isles are renowned for their mastery of cold magic, making them the perfect source for this item.",
    "shippingDetail": "The torch is delivered by Boo Spectral Mail, known for its impeccable service and quick delivery times.",
    "usage": {
      "activation": "Instantaneous activation upon drawing or using the torch.",
      "duration": "Until the end of your next turn.",
      "endsWhen": "When you drop the torch or it takes damage.",
      "charges": "Unlimited, but requires a short rest to regain any expended effects."
    },
    "priceReason": "The torch's rarity and unique crafting process make it a valuable item, priced at 1000 XP.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T01:25:24.251677+00:00",
    "aiReviewedAt": "2026-07-22T01:25:24.251677+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_cold_war_treasure_map": {
    "id": "dk_isles_cold_war_treasure_map",
    "name": "Cold War Treasure Map",
    "description": "The Cold War Treasure Map, a tattered relic of forgotten Kremling schemes, unfurls to reveal hidden fortresses entombed beneath overgrown jungle ruins. Marked with arcane symbols and cryptic notes, it grants you insight into the cold-blooded strategies of your adversaries. With each use, you increase your chances of uncovering rare loot caches guarded by frost giants and jungle beasts, all while earning +20% exploration XP in frigid jungle zones.",
    "price": 660,
    "icon": "🗺",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Increases chance of finding rare loot",
      "Grants +20% exploration XP"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Increased Loot Discovery",
        "rules": "When used within a cold biome, you increase your chances of discovering rare loot by +15%. This effect lasts for one hour and can be used once per day."
      },
      {
        "title": "XP Boost for Exploration",
        "rules": "While in cold jungle zones, you earn an additional 20% exploration XP. This bonus accumulates over time but resets if you leave the zone or use the map to trigger another effect."
      }
    ],
    "levelRequirementReason": "Requires level 5 proficiency to navigate and interpret the ancient symbols on the map.",
    "vendorReason": "The Cold Isles are known for their rich history of treasure and lore, making this map a fitting addition to the DK Isles inventory.",
    "shippingDetail": "Delivered by Pipe Express; expect an additional week for delivery due to the fragile nature of the map.",
    "usage": {
      "activation": "As a bonus action, unfold and activate the map within a cold biome.",
      "duration": "One hour per use, renewable daily.",
      "endsWhen": "The duration ends when you leave the cold biome or deactivate it by rolling up the map again.",
      "charges": "Unlimited uses, daily reset."
    },
    "priceReason": "The Cold War Treasure Map is priced at 1000 XP due to its rarity and the strategic value it offers in navigating cold biomes.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:25:46.635412+00:00",
    "aiReviewedAt": "2026-07-22T01:25:46.635412+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_cold_war_trophy": {
    "id": "dk_isles_cold_war_trophy",
    "name": "Cold War Trophy",
    "description": "The Cold War Trophy is a relic forged from the bone of a forgotten jungle beast and tempered in the frost of ancient Kremling Krew battles. It grants proficiency in both jungle survival and cold zone combat, enhancing your resilience to environmental hazards. This unique artifact offers a +15% damage bonus when fighting within jungles and an additional 5% chance for ice-based terrain effects to trigger on enemy spawns, ensuring you're always prepared for the harshest of terrains.",
    "category": "equipment",
    "price": 660,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% damage from jungle combat",
      "5% HP restored entering cold zones"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Jungle Combat Bonus",
        "rules": "Grants a +15% bonus to damage when fighting within jungles. This effect is passive and persists while in the specified terrain."
      },
      {
        "title": "Cold Zone Healing",
        "rules": "Restores 5% of your maximum hit points whenever you enter or re-enter a cold zone. This effect triggers once per short rest, but not more than three times per day."
      }
    ],
    "levelRequirementReason": "This relic is designed for entry-level operatives to ensure they are prepared for initial missions involving diverse terrains.",
    "vendorReason": "As a unique artifact of Kremling Krew history, dk Isles is the only vendor capable of offering this authentic relic.",
    "shippingDetail": "The package is delivered by Boo Spectral Mail with a special delivery note stating it's a 'Cold War Trophy'. The item must be handled carefully to preserve its integrity.",
    "usage": {
      "activation": "Passive effect when within the specified terrains.",
      "duration": "Permanent until destroyed or lost",
      "endsWhen": "Destroyed upon loss, damage, or intentional destruction",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects its rarity and the significant combat advantages it provides without overbalancing.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:25:34.889077+00:00",
    "aiReviewedAt": "2026-07-22T01:25:34.889077+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_daisy_ambassador": {
    "id": "dk_isles_daisy_ambassador",
    "name": "Daisy Ambassador",
    "description": "The Daisy Ambassador is a delicate, fragrant flower crafted by the Pianta diplomats in tribute to Princess Daisy's diplomatic missions. Its petals are infused with banana-infused honey, offering both sweet sustenance and a whisper of the lush DK Isles. When consumed, it grants temporary immunity to knockback for 3 turns and increases your movement speed by 15% for 1 turn. This flower is a symbol of peace and resilience, embodying the spirit of Princess Daisy's diplomatic endeavors.",
    "price": 200,
    "icon": "🌸",
    "stock": 15,
    "rarity": "uncommon",
    "effects": [
      "Knockback Immunity",
      "Increased Movement Speed"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pianta Chuck Express",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Knockback Immunity",
        "rules": "You gain temporary immunity to knockback for 3 turns. This effect ends when you take damage from any source or if the combat encounter ends."
      },
      {
        "title": "Increased Movement Speed",
        "rules": "For 1 turn, your movement speed is increased by 15%. This effect ends at the start of your next turn."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level to ensure players can utilize its effects strategically without overwhelming early combat encounters.",
    "vendorReason": "The Pianta Isles are known for their diplomatic missions and the creation of unique, themed items that embody their cultural heritage.",
    "shippingDetail": "Delivered swiftly by the trusted courier service, ensuring the flower's potency remains intact.",
    "usage": {
      "activation": "Eaten as a bonus action",
      "duration": "Instantaneous effects; Knockback immunity lasts for 3 turns and movement speed increase lasts for 1 turn",
      "endsWhen": "At the start of your next turn or when you take damage from any source, whichever comes first",
      "charges": "One-time use per combat encounter"
    },
    "priceReason": "The balanced XP price reflects the flower's unique effects and its thematic value to players.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T01:25:44.089247+00:00",
    "aiReviewedAt": "2026-07-22T01:25:44.089247+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_earth_ice_wall_tome": {
    "id": "dk_isles_earth_ice_wall_tome",
    "name": "Earth Ice Wall Tome",
    "description": "The Earth Ice Wall Tome is a fragile yet potent artifact, its pages etched with runes that shimmer like frozen glaciers and crackling lightning. It originates from the frigid peaks of the DK Isles, where it was said to be used by ancient shamans to bridge their jungle civilization with the icy truths hidden beneath the flat earth's surface. Reading its contents grants a temporary immunity to ice damage but risks causing confusion if one becomes overly fixated on the book’s claims.",
    "price": 670,
    "icon": "📖",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Immunity to Ice Damage",
      "Temporary Confusion"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Cheep Cheep Shipping (secretly)",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Ice Damage",
        "rules": "When you read from this tome and are subjected to ice damage, you gain temporary immunity for the duration of one short rest."
      },
      {
        "title": "Temporary Confusion",
        "rules": "If you spend more than 10 minutes reading the tome without a break, there is a 25% chance (DC 14 Wisdom saving throw) that your knowledge of your own name becomes temporarily clouded for one hour."
      }
    ],
    "levelRequirementReason": "The tome’s ancient power is potent but not overwhelming; even novice explorers can access its truths.",
    "vendorReason": "The DK Isles are known for their mystical artifacts, and this tome is a prime example of their craftsmanship.",
    "shippingDetail": "Delivered via secret courier; avoid detection to ensure safe arrival.",
    "usage": {
      "activation": "Reading the tome",
      "duration": "One short rest after exposure to ice damage; one hour for temporary confusion",
      "endsWhen": "Ends upon completion of a short rest or successful Wisdom saving throw against temporary confusion",
      "charges": "Unlimited"
    },
    "priceReason": "The tome combines both magical and thematic value, offering unique benefits while maintaining balance with its price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T01:25:51.607398+00:00",
    "aiReviewedAt": "2026-07-22T01:25:51.607398+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_embers_of_the_kremling": {
    "id": "dk_isles_embers_of_the_kremling",
    "name": "Embers of the Kremling Warlock",
    "description": "The Embers of the Kremling Warlock crackle and hiss as they channel the untamed fury of ancient Kremling warlords. When unleashed, these embers incinerate foes within a ten-foot radius with a searing blast that leaves them reeling in pain. However, each use saps your vitality, draining 30% of your health, stacking up to three times. This artifact is best wielded by those who revel in chaos and the destruction it brings.",
    "category": "equipment",
    "price": 4300,
    "icon": "🗡",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Devastating AoE Attack",
      "Vitality Drain"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Devastating AoE Attack",
        "rules": "When activated, this artifact releases a fiery blast in a ten-foot radius centered on the wielder. All enemies within suffer 150% damage from the inferno. The attack is an action and ends immediately upon activation."
      },
      {
        "title": "Vitality Drain",
        "rules": "Each use of the embers reduces the wielder's hit point total by 30%. This effect stacks up to three times, dealing additional damage from subsequent uses based on the already drained health. The embers can be used a number of times equal to your constitution modifier (rounded down)."
      }
    ],
    "levelRequirementReason": "Requires at least level 7 to manage the artifact's draining effects.",
    "vendorReason": "The denizens of DK Isles are accustomed to dealing with the volatile and dangerous artifacts left behind by Kremling warlords.",
    "shippingDetail": "The embers must be couriered via Boo Spectral Mail, ensuring they arrive in pristine condition for their next use.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Upon activation or when the user's hit points are reduced to zero.",
      "charges": "Uses equal to your Constitution modifier (rounded down)"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its powerful but draining effects.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T01:26:03.309019+00:00",
    "aiReviewedAt": "2026-07-22T01:26:03.309019+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_feywild_bottle_of_tides": {
    "id": "dk_isles_feywild_bottle_of_tides",
    "name": "Feywild Bottle of Tides",
    "description": "The Feywild Bottle of Tides is a glass vial sealed with a cork, its contents shimmering like liquid time and emotion from the mystical realm. When uncorked in combat, it grants you the power to manipulate fate's tide, allowing you to delay enemy attacks for fleeting moments or redirect their strikes to nearby allies. The bottle's origin lies deep within the Feywild, where it was crafted by ancient druids to protect travelers from the wild magic that courses through the forest.",
    "price": 670,
    "icon": "🌊",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Delay Enemy Attacks",
      "Redirect Damage"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Delay Enemy Attacks",
        "rules": "As a bonus action, you can attempt to delay one attack made against you. On a successful DC 15 Dexterity saving throw, the attack is delayed for 3 seconds. If an ally is adjacent to you and within range of the attack, they can also make a similar save to gain this benefit."
      },
      {
        "title": "Redirect Damage",
        "rules": "When an enemy attacks you or your allies within reach, as a reaction, you can redirect 50% of the damage dealt to you to an adjacent ally. The redirected damage is reduced by half (25%) before it is applied."
      }
    ],
    "levelRequirementReason": "This item's power is accessible at lower levels due to its Feywild origin, making it a valuable asset for newer adventurers.",
    "vendorReason": "The denizens of the Feywild are known for their connection with nature and often share such artifacts with those who respect the wilds.",
    "shippingDetail": "The bottle must be transported in a special, enchanted container to preserve its contents during transit.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "Instantaneous effects; ends when the saving throw is made or redirected damage is applied",
      "endsWhen": "The saving throw is made or redirected damage is applied",
      "charges": "Unlimited, but you can only use each effect once per short rest"
    },
    "priceReason": "Crafted from rare Feywild materials and imbued with the essence of wild magic, this item offers powerful utility at a fair price for its level.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T01:26:25.426562+00:00",
    "aiReviewedAt": "2026-07-22T01:26:25.426562+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_feywild_cold_war_ring": {
    "id": "dk_isles_feywild_cold_war_ring",
    "name": "Cold War Ring of the Forgotten Frost",
    "description": "The Cold War Ring of the Forgotten Frost, forged from the twilight between Kremling and Jungle realms, pulses with a cold that seems to seep directly into your bones. When worn in battle, it shatters armor as if it were brittle glass, dealing damage equal to 20% of the target's current hit points. The ring itself feels like a frozen core, its surface etched with arcane runes that shimmer and fade upon each use.",
    "category": "equipment",
    "price": 4300,
    "icon": "📦",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Shatters Armor",
      "Deals Damage"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Armor Shattering",
        "rules": "When the ring is activated by a standard action, it deals an amount of damage equal to 20% of the target's current hit points and reduces their armor class by 5 until the start of your next turn. This effect has no save DC but can only be used once per long rest."
      },
      {
        "title": "Cold Damage",
        "rules": "The ring deals cold damage on a successful hit, which also imposes disadvantage on all attack rolls against you for 1 minute. There is no save DC required to resist this condition."
      }
    ],
    "levelRequirementReason": "It requires a minimum level of 7 due to the ring's intricate enchantments and the specific combat tactics needed to wield it effectively.",
    "vendorReason": "The Cold War Ring is a specialty item crafted by the secretive and powerful dk_isles, known for their mastery over cold magic and ancient artifacts.",
    "shippingDetail": "Delivered via a special courier service that ensures the ring arrives in pristine condition with no risk of damage during transit.",
    "usage": {
      "activation": "Standard action",
      "duration": "Instantaneous effect, lasts until start of next turn for armor reduction; ends when used again or after a long rest",
      "endsWhen": "Used again or end of a long rest",
      "charges": "Unlimited uses"
    },
    "priceReason": "The ring's balanced price reflects its unique properties and the level requirement, ensuring it remains a desirable but not overpowered addition to any adventurer's arsenal.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T01:26:25.445502+00:00",
    "aiReviewedAt": "2026-07-22T01:26:25.445502+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_feywild_essence": {
    "id": "dk_isles_feywild_essence",
    "name": "Feywild Essence Vial",
    "description": "A delicate vial holding the essence of a long-lost Feywild spirit, this relic grants allies the ability to blend into their surroundings and mimic natural forms. When consumed by an ally, it temporarily bestows them with the grace and camouflage skills of the wild. Allies gain +20% stealth chance for 15 seconds within jungle terrain and can heal adjacent allies for 3d6 hit points when they take damage themselves.",
    "price": 670,
    "icon": "🍵",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "+20% Stealth in Jungle Terrain",
      "Heal Adjacent on Taking Damage"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth Boost",
        "rules": "When consumed, the user gains +20% stealth chance for 15 seconds within jungle terrain. This effect ends when the duration expires or if the user moves out of a jungle area."
      },
      {
        "title": "Healing Aura",
        "rules": "The vial grants temporary healing to adjacent allies as an action, providing them with 3d6 hit points upon taking damage. The effect can be used once per short rest and is spent when the vial's magic is fully utilized."
      }
    ],
    "levelRequirementReason": "The essence of a Feywild spirit is potent but not overly so, making it accessible to lower-level adventurers.",
    "vendorReason": "DK Isles has a deep connection with the Feywild and often trades in relics that bridge the two worlds.",
    "shippingDetail": "The vial must be shipped under strict conditions to preserve its magic, ensuring it arrives intact for the recipient.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "15 seconds within jungle terrain",
      "endsWhen": "Duration ends or user moves out of a jungle area",
      "charges": "Once per short rest"
    },
    "priceReason": "The item's rarity and the potent effects it offers justify its fair value of 1000 XP.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T01:26:05.432540+00:00",
    "aiReviewedAt": "2026-07-22T01:26:05.432540+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_feywild_flask": {
    "id": "dk_isles_feywild_flask",
    "name": "Feywild Flask",
    "description": "The Feywild Flask is a glass vessel sealed with a cork that holds a shimmering elixir. When sipped, it grants temporary control over nature’s illusions, enabling you to blend seamlessly into jungle foliage or evade traps for a moment. The flask contains a whisper of the Feywild's laughter, which can charm nearby animals, making them cooperative for 30 seconds. A sip is all it takes to harness this whimsical magic from the heart of the eldritch realm.",
    "price": 670,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Illusion Camouflage",
      "Animal Charm"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Illusion Camouflage",
        "rules": "As a bonus action, you can use the flask's contents to blend into your surroundings. You gain advantage on Dexterity (Stealth) checks made in jungle areas for 30 seconds. This effect ends if you take damage or if you willingly stop using it."
      },
      {
        "title": "Animal Charm",
        "rules": "Sipping the flask's contents grants a minor charm to nearby animals, making them cooperative and docile towards you for 30 seconds. You can use this ability once per short rest. Creatures with an Intelligence of 4 or higher are immune."
      }
    ],
    "levelRequirementReason": "The Feywild Flask's magic is accessible to all adventurers, making it a versatile tool that can be used in various situations.",
    "vendorReason": "As keepers of ancient knowledge and mystical artifacts, the DK Isles are known for their connection to the Feywild, making them reliable vendors for such an item.",
    "shippingDetail": "The flask is shipped in a padded envelope with additional care to ensure it arrives intact.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "30 seconds per use",
      "endsWhen": "You take damage or willingly end the effect",
      "charges": "Unlimited, but only one animal charm can be active at a time"
    },
    "priceReason": "The price reflects its rarity and utility in both combat and exploration scenarios.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:24:08.067886+00:00",
    "aiReviewedAt": "2026-07-22T19:24:08.067886+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_feywild_shade_satchel": {
    "id": "dk_isles_feywild_shade_satchel",
    "name": "Feywild Shade Satchel",
    "description": "The Feywild Shade Satchel is a dark, leather-bound pack woven from the shadow-thread of twilight and enchanted fey-leaf. It allows you to conceal yourself in the deepest shadows for short periods, but beware: the satchel whispers secrets of the Feywild with each use. With it, you can carry three enchanted items without their weight burdening you, though there's always a faint risk that one might pull you into the fey realms.",
    "price": 670,
    "icon": "🌑",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Concealment",
      "Enchanted Item Storage"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Concealment",
        "rules": "When activated, the satchel grants you and one ally within reach complete invisibility for 10 seconds. The effect ends if you or your ally move more than 15 feet away from each other."
      },
      {
        "title": "Enchanted Item Storage",
        "rules": "This satchel can hold up to three enchanted items, which are protected but not burdened by their weight. You cannot carry more than one item larger than a hand crossbow inside it."
      }
    ],
    "levelRequirementReason": "The satchel's enchantments require basic arcane knowledge, making it accessible to lower-level spellcasters.",
    "vendorReason": "The islands of Duskkeep have long traded with the fey realms; their merchants are well-acquainted with such wondrous goods.",
    "shippingDetail": "Delivered by the shadowy couriers, who ensure the satchel remains concealed during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect lasting 10 seconds; ends if you or an ally moves more than 15 feet away from each other.",
      "endsWhen": "The invisibility ends when its duration expires or the satchel's enchantment is expended by another spell or ability.",
      "charges": "Unlimited, but only one use per short rest."
    },
    "priceReason": "Balanced at this price to reflect a rare but not overpowered item that requires careful handling and arcane knowledge.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T01:26:35.118400+00:00",
    "aiReviewedAt": "2026-07-22T01:26:35.118400+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_feywild_soul_echo": {
    "id": "dk_isles_feywild_soul_echo",
    "name": "Feywild Soul Echo",
    "description": "The Feywild Soul Echo, a pendant of wistful silver and feywood, hums softly as it captures the forgotten whispers from the depths of the Feywild. When worn, its wearer gains uncanny vision in shadowed environs, seeing hidden truths that others miss. The pendant's true power lies in its ability to 'Echo of the Forgotten,' revealing the positions of cloaked foes for ten fleeting seconds, a gift from the fey realms made tangible.",
    "category": "equipment",
    "price": 4300,
    "icon": "🔮",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Enhanced Vision",
      "Reveal Cloaked Foes"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Enhanced Vision",
        "rules": "While wearing the pendant, you gain advantage on Wisdom (Perception) checks to notice hidden details and secret doors. Additionally, in dim light or darkness, your vision is as clear as daylight for up to one hour."
      },
      {
        "title": "Echo of the Forgotten",
        "rules": "As an action, activate this ability to reveal the positions of invisible or hidden creatures within 60 feet. This effect lasts for 10 seconds and has a recharge time after five minutes of rest."
      }
    ],
    "levelRequirementReason": "This item requires a level 7 character to harness its fey magic effectively.",
    "vendorReason": "The denizens of the Feywild are known for their craftsmanship and affinity with magical artifacts like the Soul Echo.",
    "shippingDetail": "Ships via spectral courier, arriving in a day or two; delivery requires a special request through the fey realms.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous reveal during 'Echo of the Forgotten', lasts for 10 seconds",
      "endsWhen": "Effect ends when the duration expires or you are incapacitated, or if you deactivate it as an action",
      "charges": "Recharges after a short rest"
    },
    "priceReason": "The balance of power and rarity justifies this price for a piece that grants both vision bonuses and reveals hidden foes.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T01:26:56.900581+00:00",
    "aiReviewedAt": "2026-07-22T01:26:56.900581+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_feywild_soul_satchel": {
    "id": "dk_isles_feywild_soul_satchel",
    "name": "Feywild Soul Satchel",
    "description": "The Feywild Soul Satchel, a shadow-woven pouch forged in the twilight of Faerie, hums with arcane energy. Crafted from the very essence of the Feywild's spirits, it grants +30% to spell power and reduces cooldowns by 15%. In the heart of the Feywild, this satchel grants you fleeting invisibility for 8 seconds, allowing you to slip past unseen. Only those attuned to the mystical energies can harness its true potential.",
    "category": "equipment",
    "price": 670,
    "icon": "🧙",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% Spell Power",
      "-15% Spell Cooldown"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Spell Power Boost",
        "rules": "Activate as a bonus action. While wearing the satchel, you gain +30% to your spellcasting ability checks and spell attack rolls for 1 hour."
      },
      {
        "title": "Cooldown Reduction",
        "rules": "Reduces the cooldown of all spells by 15%. This effect lasts until you finish a long rest or until the satchel's magical charge is depleted, whichever comes first."
      }
    ],
    "levelRequirementReason": "Requires attunement to harness the soul energy within.",
    "vendorReason": "The denizens of the Feywild often trade mystical artifacts with adventurers in exchange for rare goods and favors.",
    "shippingDetail": "Due to its ethereal nature, the satchel is delivered by spirit courier, arriving at your doorstep within a week.",
    "usage": {
      "activation": "Activate as a bonus action. Invisibility effect can only be used in Feywild terrain.",
      "duration": "Invisibility lasts for 8 seconds when activated within the Feywild.",
      "endsWhen": "The invisibility ends after its duration or if you leave Feywild territory.",
      "charges": "Unlimited, but requires a long rest to reset cooldowns."
    },
    "priceReason": "Reflecting its mystical craftsmanship and the rarity of materials needed for its creation.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:26:59.222759+00:00",
    "aiReviewedAt": "2026-07-22T01:26:59.222759+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_feywild_spirit_fang": {
    "id": "dk_isles_feywild_spirit_fang",
    "name": "Feywild Spirit Fang",
    "description": "The Feywild Spirit Fang is a jagged fang made from the essence of shadow-touched faeries, forged in the heart of the Shadowfell. It grants the wielder enhanced senses that can pierce through the veil of reality and allows them to phase through creatures with fewer than half their maximum hit points. With each use, you feel the spirit's breath in your veins, heightening your perception in shadowy environs by 25%. The fang hums softly as it passes through low-health enemies, providing a brief moment of ethereal passage.",
    "category": "equipment",
    "price": 670,
    "icon": "🌿",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Shadow Veil Perception",
      "Phasing Passage"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shadow Veil Perception",
        "rules": "When you enter or remain within a shadowy or dark environment, you gain advantage on Perception checks and can see through minor obstructions as if they were transparent. This effect lasts until the end of your next turn."
      },
      {
        "title": "Phasing Passage",
        "rules": "As an action, you can attempt to phase through a creature with fewer than half its maximum hit points. The target must make a DC 15 Dexterity saving throw or be pushed 5 feet away from you. On a success, the creature is immune to this effect for 1 minute."
      }
    ],
    "levelRequirementReason": "The Spirit Fang's ethereal nature requires a keen mind and body to wield it effectively.",
    "vendorReason": "The artisans of Dk Isles have long traded in the mysteries of the Feywild, making this fang available through their established network.",
    "shippingDetail": "Due to its delicate nature, the Spirit Fang is delivered via Shy Guy Smugglers' specialized courier, ensuring it arrives intact and potent.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "Instantaneous or until end of next turn",
      "endsWhen": "The creature successfully saves against the Phasing Passage effect or after a successful save.",
      "charges": "Unlimited, but requires concentration to maintain Shadow Veil Perception"
    },
    "priceReason": "Crafted from faerie essence and shadow-forged, this rare fang is both powerful and difficult to replicate.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:26:50.487536+00:00",
    "aiReviewedAt": "2026-07-22T01:26:50.487536+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_feywild_taproot": {
    "id": "dk_isles_feywild_taproot",
    "name": "Feywild Taproot",
    "description": "The Feywild Taproot is a pulsating root from the mystical underbelly of the Feywild, its bark shimmering with arcane patterns. This enchanted root grants a rogue spellcaster temporary invisibility for 5 seconds and the ability to absorb ambient magic into their next spell, boosting their spellcasting power. Ideal for navigating the jungle’s magical underbrush, this rare item is a boon for those who need to remain unseen or harness the wild’s energy.",
    "category": "equipment",
    "price": 670,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Invisibility Burst",
      "Magic Absorption"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility Burst",
        "rules": "As an action, the user can activate the root to become temporarily invisible. This effect lasts for 5 seconds and has no save DC or target. The root is exhausted after this use."
      },
      {
        "title": "Magic Absorption",
        "rules": "Once per short rest, the user can absorb ambient magic into their next spell cast. This has no save DC but requires the user to have a spell prepared. The root provides +3% chance of successful absorption for one spell during this period."
      }
    ],
    "levelRequirementReason": "This item is suitable for lower-level characters who need both invisibility and magical assistance without requiring a high caster level.",
    "vendorReason": "The dk Isles specialize in Feywild artifacts, making the root an ideal addition to their inventory.",
    "shippingDetail": "Ships via the Void Drifter Relay, ensuring safe delivery through the mystical underbrush of the Feywild.",
    "usage": {
      "activation": "Action",
      "duration": "5 seconds (temporarily invisible)",
      "endsWhen": "Exhausted after one use per root",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the rare material and magical properties of Feywild items, balancing its utility with a fair value.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-22T01:27:06.310570+00:00",
    "aiReviewedAt": "2026-07-22T01:27:06.310570+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_feywild_taproot_heart": {
    "id": "dk_isles_feywild_taproot_heart",
    "name": "Feywild Taproot Heart",
    "description": "The Feywild Taproot Heart is a pulsating, root-like artifact encased in iridescent sheaths of ethereal light. It hums with the untamed magic of the Feywild and thrives in the shadowy underbrush. When worn, it grants the wearer the power to phase through solid obstacles for brief moments, allowing them to navigate tight spaces or evade foes with ease. With a mere thought, one can teleport short distances, leaving behind only a shimmering trail of light.",
    "category": "equipment",
    "price": 670,
    "icon": "🌿",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Teleports wearer 10 meters",
      "Phases through solid terrain"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Phase Through Terrain",
        "rules": "As an action, the wearer may phase through up to 5 meters of solid terrain for 2 seconds. This effect has no save DC and can be used once per short or long rest."
      },
      {
        "title": "Teleport",
        "rules": "The wearer can teleport up to 10 meters in any direction as a bonus action, with the movement ending when they collide with an obstacle or creature. This effect has no save DC and can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "This rare artifact requires significant arcane power to harness its unpredictable magic.",
    "vendorReason": "The Feywild Taproot Heart is a revered item among the druids and fey of the Dk Isles, who crafted it from ancient roots that thrum with untamed magic.",
    "shippingDetail": "Ships via the Void Drifters, known for their swift and reliable deliveries through the Feywild.",
    "usage": {
      "activation": "Action or bonus action",
      "duration": "Instantaneous (Phasing), Up to 10 meters teleport",
      "endsWhen": "Teleport ends when collision occurs; Phasing ends after 2 seconds",
      "charges": "Once per short or long rest"
    },
    "priceReason": "The rarity and arcane complexity of the Feywild Taproot Heart justify its moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:27:24.451243+00:00",
    "aiReviewedAt": "2026-07-22T01:27:24.451243+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_frost_bottle": {
    "id": "dk_isles_frost_bottle",
    "name": "Cold War Ember Flask",
    "description": "The Cold War Ember Flask is a relic from the frozen Kremling trenches, crafted in the heart of an ancient forge where frost and fire coexist. This enigmatic flask houses a volatile thermal core that, upon activation, releases a chilling wave capable of shattering ice and inflicting frost damage to enemies. After use, it regenerates 25% of the wielder's stamina over 10 seconds, ensuring they are ready for their next battle.",
    "price": 670,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Frost Damage with Enhanced Frost Resistance",
      "Stamina Regeneration"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Frost Damage with Enhanced Frost Resistance",
        "rules": "When activated as a bonus action, the flask releases a wave of frost that deals an additional 50% damage to enemies with ice or cold resistance. The effect has a range of 15 feet and lasts for 3 seconds. There is no save DC required."
      },
      {
        "title": "Stamina Regeneration",
        "rules": "After using the flask, the wielder regenerates 25% of their stamina over 10 seconds. This effect cannot be used more than once per long rest."
      }
    ],
    "levelRequirementReason": "The flask's activation requires a level 3 character to manage its volatile thermal core.",
    "vendorReason": "The relic is well-known among the DK Isles for its frost-themed artifacts and unique craftsmanship.",
    "shippingDetail": "Ships within 3 days with enhanced cold weather protection to ensure safe delivery.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted when used or after a long rest",
      "charges": "Unlimited, but can only be used once per short rest"
    },
    "priceReason": "The flask's rare materials and unique crafting process justify its moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:27:28.942483+00:00",
    "aiReviewedAt": "2026-07-22T01:27:28.942483+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_frost_jungle_torch": {
    "id": "dk_isles_frost_jungle_torch",
    "name": "Frost Jungle Torch",
    "description": "The Frost Jungle Torch burns with an eerie, frosty glow, casting icy embers that sear and freeze in one's wake. This relic of the ancient Dwarven Isles not only slows foes within its radius but also grants a chilling aura that protects the wielder from harm, restoring their health over time. Crafted from enchanted quartz and bound with runes of ice, it is perfect for navigating treacherous jungles where ambushes are common.",
    "category": "equipment",
    "price": 670,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Icy Aura",
      "Freezing Step"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Frostwind Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Icy Aura",
        "rules": "The wielder gains a +1 bonus to AC and can cast the 'Chill Touch' spell (caster level 5) once per long rest. The aura creates a 3-meter radius around them, slowing enemy movement within it by half speed until the start of their next turn."
      },
      {
        "title": "Freezing Step",
        "rules": "When used as an action, the torch releases a burst of icy embers that deal 15 cold damage to all creatures in a 5-foot radius. Targets with resistance to cold take double damage and are knocked prone on a failed Dexterity saving throw (DC 14)."
      }
    ],
    "levelRequirementReason": "The torch's frost magic requires a minimum of three levels to channel effectively.",
    "vendorReason": "The Frost Jungle Torch is a revered artifact from the Dwarven Isles, and only those who have proven their worth are allowed to purchase it from the Isles' vendor.",
    "shippingDetail": "Ships via special frost wind courier; delivery can take up to one week in winter months.",
    "usage": {
      "activation": "Action or bonus action for Freezing Step, passive effect of Icy Aura. Once per long rest, the wielder may cast 'Chill Touch'.",
      "duration": "Icy Aura lasts until the start of your next turn after ending its effect on a creature.",
      "endsWhen": "The aura ends if you leave the area or are incapacitated.",
      "charges": "Unlimited; recharges upon resting."
    },
    "priceReason": "Balanced as a rare item, offering both offensive and defensive benefits at an appropriate cost.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:28:04.156688+00:00",
    "aiReviewedAt": "2026-07-22T01:28:04.156688+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_frost_shade": {
    "id": "dk_isles_frost_shade",
    "name": "Frost Shade of the Forgotten Glacier",
    "description": "The Frost Shade of the Forgotten Glacier is a cold artifact forged from the shattered remains of an ancient glacier. Crafted in the heart of the Jungle’s northern edge, it grants frost resistance and has the power to momentarily freeze enemies within its icy touch. Ideal for swift counterattacks after stealthy maneuvers, this relic leaves its mark on foes, causing them to shiver in place as they cannot move for a fleeting moment.",
    "category": "equipment",
    "price": 670,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Frost Resistance",
      "Freezing Touch"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Frost Resistance",
        "rules": "The wielder gains immunity to frost damage equal to 20% of their total hit points for 5 seconds upon activation. This effect can be used once per long rest."
      },
      {
        "title": "Freezing Touch",
        "rules": "When the user strikes an enemy with a melee attack within 5 meters, that foe is immobilized for 2 seconds, as if they were stunned, and cannot take reactions during this time. This effect can be used up to three times per short rest."
      }
    ],
    "levelRequirementReason": "This relic requires minimal arcane knowledge to wield effectively.",
    "vendorReason": "The Frost Shade is a cherished item from the Jungle’s northern edge, and DK Isles maintains an inventory of such artifacts.",
    "shippingDetail": "Ships via spectral courier, ensuring the artifact arrives in pristine condition with no risk of damage.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (with a 1-second cooldown)",
      "endsWhen": "The effect ends upon expiration or when used again during its respective rest period",
      "charges": "Unlimited, recharges after each long rest"
    },
    "priceReason": "This relic strikes the balance between power and cost by offering potent effects within reach of a novice adventurer.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:21:03.361672+00:00",
    "aiReviewedAt": "2026-07-22T04:21:03.361672+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_fungal_essence": {
    "id": "dk_isles_fungal_essence",
    "name": "Fungal Essence",
    "description": "Fungal Essence is a shimmering, bioluminescent elixir that glows with the latent power of deepwood fungi. This potent philtre grants temporary strength and resilience to those who imbibe it, while subtly altering their perception, making foes seem more vulnerable for a fleeting moment. Crafted in the ancient forests of Dk Isles from ancient spores and eldritch magic, this essence is both a gift and a curse, enhancing one's might but also drawing unwanted attention.",
    "price": 200,
    "icon": "🍄",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Strength Boost",
      "Health Regeneration"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Strength Boost",
        "rules": "Upon consumption, the drinker gains +1d6 to Strength checks for 30 minutes. This effect is active as long as a small amount remains in their system."
      },
      {
        "title": "Health Regeneration",
        "rules": "For every hour after imbibing, the imbiber regains 2d4 hit points at the start of each short or long rest. This effect persists until expended by use."
      }
    ],
    "levelRequirementReason": "Fungal Essence is potent enough to aid even a novice adventurer in their early forays into danger.",
    "vendorReason": "Dk Isles' renowned apothecaries are well-versed in the local flora and its magical properties, making Fungal Essence a staple of their offerings.",
    "shippingDetail": "Delivered with utmost care via Shy Guy Smugglers, ensuring safe delivery from the depths of Dk Isles to even the most remote corners of the land.",
    "usage": {
      "activation": "Consumed as an action at the start of a short or long rest.",
      "duration": "24 hours after consumption",
      "endsWhen": "Exhausted upon completion of its duration or if consumed again before expiration.",
      "charges": "Unlimited, replenished with each use."
    },
    "priceReason": "Fungal Essence is crafted from rare and magical ingredients, making it a high-demand potion that justifies its substantial price in experience points.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T01:28:33.866524+00:00",
    "aiReviewedAt": "2026-07-22T01:28:33.866524+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_hammer_bros_handling_torch": {
    "id": "dk_isles_hammer_bros_handling_torch",
    "name": "Hammer Bros Handling Torch",
    "description": "The Hammer Bros Handling Torch, forged from the last flame of a rogue member who defected to the jungle, glows with an eerie warmth that can freeze the ground beneath it. This torch, wielded by the DK Crew during heists, not only enhances melee attacks but also summons a ghostly shadow companion that dances alongside its carrier in the darkest moments. Its unpredictable nature makes it both a weapon and a tool for survival, ensuring that even the most treacherous heists are lit with an unsettling glow.",
    "price": 19000,
    "icon": "🔥",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Melee Damage Boost",
      "Shadow Companion"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Melee Damage Boost",
        "rules": "Activates as a bonus action. Grants +4 to all melee damage rolls for 2 turns. Has a 10% chance to cause a minor explosion upon activation, dealing 1d6 fire damage centered on the wielder."
      },
      {
        "title": "Shadow Companion",
        "rules": "Triggers ‘Shadow’s Echo’ on hit: deals 1d6 bonus damage to one enemy. The ghostly shadow companion appears during dark heists and provides +2 AC to the wielder for 1 minute, reappearing after each short rest."
      }
    ],
    "levelRequirementReason": "The torch's unpredictable nature makes it accessible to lower-level characters who might find themselves in desperate situations.",
    "vendorReason": "As the DK Crew's trusted suppliers, DK Isles ensures that their members have access to powerful yet manageable tools like this torch.",
    "shippingDetail": "Delivered by the Hammer Bros. themselves, ensuring it arrives in pristine condition and ready for use.",
    "usage": {
      "activation": "Bonus action or reaction (to trigger Shadow’s Echo on hit)",
      "duration": "2 turns for Melee Damage Boost; 1 minute for Shadow Companion",
      "endsWhen": "Charges are exhausted after 50 uses, or the wielder takes a long rest.",
      "charges": "50"
    },
    "priceReason": "Balanced at 1000 XP as it offers significant utility and risk in combat scenarios.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T01:27:55.254265+00:00",
    "aiReviewedAt": "2026-07-22T01:27:55.254265+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_ice_blood_satchel": {
    "id": "dk_isles_ice_blood_satchel",
    "name": "Ice Blood Satchel",
    "description": "The Ice Blood Satchel is a cold-war relic crafted from the venom of frozen jungle serpents. It grants near-perfect stealth in dense underbrush and drains enemy vitality with each step, making it an invaluable tool for Kremling infiltrators. When activated, it creates an icy mist that cloaks you in shadows, reducing visibility to near darkness within a 10-foot radius for 30 seconds, while also causing enemies within the area to take extra damage and suffer reduced health regeneration.",
    "category": "equipment",
    "price": 670,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stealth Cloak",
      "Venomous Drain"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Stealth Cloak",
        "rules": "Activates as a bonus action, providing a +2 bonus to Dexterity (Stealth) checks and creating an icy mist that reduces visibility for 30 seconds. The effect ends if you leave the area or are hit by an attack."
      },
      {
        "title": "Venomous Drain",
        "rules": "Deals 15% extra damage to enemies within a 10-foot radius and reduces their regeneration by 20% for 10 seconds after activation. The effect ends if you leave the area or are hit by an attack."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to effectively utilize its stealth and combat benefits.",
    "vendorReason": "DK Isles is renowned for their trade in cold-war relics, making the Ice Blood Satchel a natural addition to their inventory.",
    "shippingDetail": "Delivered via Shy Guy's secret courier network, ensuring safe and timely arrival.",
    "usage": {
      "activation": "Bonus action to activate and use the Stealth Cloak and Venomous Drain effects.",
      "duration": "30 seconds for Stealth Cloak; 10 seconds for Venomous Drain after activation.",
      "endsWhen": "The effect ends if you leave the area or are hit by an attack.",
      "charges": "Unlimited uses, recharging after a short rest."
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare and effective combat utility without being overpowered.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:28:14.058957+00:00",
    "aiReviewedAt": "2026-07-22T01:28:14.058957+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_ice_blood_shield": {
    "id": "dk_isles_ice_blood_shield",
    "name": "Ice Blood Shield",
    "description": "The Ice Blood Shield is a relic forged from the shattered remains of ancient frost giants' war machines, encased in ice that crackles with magical energy. Crafted during the frozen wars, it absorbs and redirects magical attacks back at their source. When struck by an enchanted weapon, it releases a burst of frigid magic that freezes foes solid for 2 seconds, leaving them immobilized and vulnerable to follow-up strikes.",
    "category": "equipment",
    "price": 4300,
    "icon": "📦",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Magical Absorption",
      "Freezing Strike"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Magical Absorption",
        "rules": "Activates as a bonus action when the shield absorbs magical damage. The absorbed magic is redirected towards the attacker, dealing 1d6 cold damage per 2 caster levels (to a maximum of 5d6). This effect has no save DC and can be used once per long rest."
      },
      {
        "title": "Freezing Strike",
        "rules": "When hit by an enchanted weapon, the shield releases a burst of ice magic that targets the attacker. The target must succeed on a Dexterity saving throw (DC 15) or be immobilized for 2 seconds. This effect has no save DC and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The Ice Blood Shield's ancient magic requires the wielder to have a firm grasp of cold-based spells and combat techniques.",
    "vendorReason": "The Dk Isles are known for their mastery of frost and ice, making them the perfect purveyors of this relic.",
    "shippingDetail": "Carefully packed with enchanted frost seals to maintain its magical integrity during transit.",
    "usage": {
      "activation": "Bonus action (Magical Absorption), Instantaneous (Freezing Strike)",
      "duration": "Instantaneous, ends when the effect is used or the shield is no longer struck by an enchanted weapon",
      "endsWhen": "Used once per short rest for Magical Absorption and once per long rest for Freezing Strike; exhausted until recharged.",
      "charges": "Unlimited"
    },
    "priceReason": "The shield's ancient crafting techniques, combined with its potent magical effects, justify this price in XP.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T01:28:37.732478+00:00",
    "aiReviewedAt": "2026-07-22T01:28:37.732478+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_ice_cavern_ward": {
    "id": "dk_isles_ice_cavern_ward",
    "name": "Ice Cavern Wardstone",
    "description": "The Ice Cavern Wardstone is a crystalline wardstone forged from the icy veins of the Arctic Mists. Its surface glistens with a frosty sheen, and when activated, it deflects cold-based attacks with a shimmering barrier. Upon activation, a freezing mist engulfs enemies within a 10-foot radius for three seconds, immobilizing them in their tracks. Crafted by the ancient Frostweavers of the Ice Caverns, this wardstone is perfect for those navigating frosty terrains and cold climates.",
    "category": "equipment",
    "price": 670,
    "icon": "📦",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Deflects Cold Damage",
      "Freezes Enemies"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Koopa Postal Service",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Cold Deflection",
        "rules": "When activated as a bonus action, the Ice Cavern Wardstone creates an icy barrier that deflects any cold-based attack directed at the wearer. This effect lasts for a duration of one minute and can be used once per long rest."
      },
      {
        "title": "Freezing Mists",
        "rules": "Upon activation, enemies within a 10-foot radius are encased in freezing mist for three seconds. During this time, they suffer a -20% reduction to their movement speed and are incapacitated as if affected by the *Slow* spell."
      }
    ],
    "levelRequirementReason": "Crafted by the ancient Frostweavers, the Ice Cavern Wardstone requires a minimum of three levels to master its icy magic.",
    "vendorReason": "As natives of the Arctic Mists, the DK Isles are experts in cold and ice-based artifacts like the Ice Cavern Wardstone.",
    "shippingDetail": "Ships via the Koopa Express, a service known for its swift delivery through icy terrains.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 Minute per Long Rest",
      "endsWhen": "The effect ends when the user takes damage or upon completion of one minute.",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "Crafted from rare Arctic Mists and ancient Frostweaver magic, the Ice Cavern Wardstone is priced at 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:28:45.211994+00:00",
    "aiReviewedAt": "2026-07-22T01:28:45.211994+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_ice_jungle_combat_gloves": {
    "id": "dk_isles_ice_jungle_combat_gloves",
    "name": "Ice Jungle Combat Gloves",
    "description": "The Ice Jungle Combat Gloves are a rare marvel, crafted from the cold forests of the Deep Isles and infused with ancient jungle tech. These gloves allow you to harness the elements, freezing foes in place amidst the heat, while their adaptive fabric grants you a slight edge in stealth and agility. Wield these gloves in the dense jungles or any tropical skirmish, where they can turn the tide with a simple motion.",
    "category": "equipment",
    "price": 670,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Freeze Enemies",
      "Enhanced Stealth"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Freeze Enemies",
        "rules": "As an action, you can attempt to freeze a creature within reach. This requires a successful melee attack and has a save DC of 13. If the target fails its saving throw, it is frozen in place for up to 3 seconds."
      },
      {
        "title": "Enhanced Stealth",
        "rules": "While wearing these gloves, you gain advantage on Dexterity (Stealth) checks. This effect lasts until you attack or cast a spell."
      }
    ],
    "levelRequirementReason": "These gloves are designed for quick adaptation to combat, requiring no advanced training.",
    "vendorReason": "The Deep Isles are at the heart of jungle warfare and tech, making them a logical source for these gloves.",
    "shippingDetail": "Couriered with haste, ensuring swift delivery to your doorstep within days.",
    "usage": {
      "activation": "Action or bonus action",
      "duration": "Instantaneous freeze effect; enhanced stealth lasts until you attack or cast a spell",
      "endsWhen": "Charges are depleted after three uses per day",
      "charges": "3 charges, recharged at dawn"
    },
    "priceReason": "Crafted from rare jungle materials and cold tech, these gloves provide significant combat advantages without overpricing.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-22T01:28:50.721897+00:00",
    "aiReviewedAt": "2026-07-22T01:28:50.721897+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_inkopolis_fashion_fist": {
    "id": "dk_isles_inkopolis_fashion_fist",
    "name": "Inkopolis Fashion Fist",
    "description": "The Inkopolis Fashion Fist is a dexterous device forged from the iridescent ink of Inkopolis squid cults, crafted to project illusions or transform the wearer’s appearance in an instant. It was once a fashion statement during the city's ink wars but now serves as a tool for deception and identity manipulation. Wielding it too long can cause the user to momentarily lose track of their own hands, blurring the line between reality and illusion.",
    "category": "equipment",
    "price": 670,
    "icon": "🖋",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Illusion Projection",
      "Appearance Change"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Illusion Projection",
        "rules": "Activates as a bonus action. Creates a visual illusion that lasts for 1 minute or until dispelled by an effect like Dispel Magic. The user must succeed on a DC 15 Wisdom (Perception) check to remain undetected during the duration."
      },
      {
        "title": "Appearance Change",
        "rules": "Activates as an action, allowing the wearer to temporarily alter their appearance or abilities for up to 8 hours. The user must make a DC 13 Charisma (Deception) check each time they wish to change their appearance; failure results in no change."
      }
    ],
    "levelRequirementReason": "Requires attunement with ink-based magic, which typically takes at least five levels of experience.",
    "vendorReason": "The Inkopolis Fashion Fist is a local product of the city and fits well within the vendor's offerings of arcane and whimsical items.",
    "shippingDetail": "Ships via Lakitu Drone Express, arriving in 24 hours if purchased before noon.",
    "usage": {
      "activation": "Bonus action to project an illusion; action to alter appearance or abilities.",
      "duration": "1 minute for illusion projection; up to 8 hours for appearance change.",
      "endsWhen": "Illusion ends when dispelled or its duration expires. Appearance change ends after the stated time limit.",
      "charges": "Unlimited uses per day, recharging with a short rest."
    },
    "priceReason": "The device's rarity and unique functionality justify this price point in the vendor’s shop.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T01:29:06.367573+00:00",
    "aiReviewedAt": "2026-07-22T01:29:06.367573+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_item_artisan": {
    "id": "dk_isles_item_artisan",
    "name": "Kremling War Mace",
    "description": "The Kremling War Mace is a frozen monstrosity forged in the heart of the Frost Isles. Its iron body, chilled from a Kremlin’s final battle cry, channels the very essence of cold and death. It deals +50 damage to enemies with cold resistance but saps your speed, reducing movement by 1 foot for every 2 levels you possess until the end of your next turn. A grim reminder of the frozen warfront, it grants a +4 bonus to all “cold” based ability checks and imposes a -1 penalty on saving throws against cold-based effects.",
    "category": "equipment",
    "price": 670,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Chill Frost",
      "Cold Resistance"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Frostbound Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Chill Frost",
        "rules": "When you hit an enemy with the kremling war mace, they must make a DC 15 Dexterity saving throw or be slowed by -2 to speed until the end of their next turn. This effect ends if the target moves."
      },
      {
        "title": "Cold Resistance",
        "rules": "You gain a +4 bonus to all saving throws against cold-based effects and ability checks involving cold damage."
      }
    ],
    "levelRequirementReason": "Requires level 5 due to its complex enchantments and the need for a strong frost affinity.",
    "vendorReason": "The Frost Isles are renowned for their mastery of cold and ice, making them the perfect purveyors of this weapon.",
    "shippingDetail": "Ships via Frostbound Express; may arrive frozen in a block of ice.",
    "usage": {
      "activation": "On hit with the kremling war mace",
      "duration": "Until end of next turn for slowed targets; ends if the target moves",
      "endsWhen": "If the target moves or at the start of their next turn, whichever comes first",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price considering its complex enchantments and unique effects.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T01:28:53.211809+00:00",
    "aiReviewedAt": "2026-07-22T01:28:53.211809+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_item_mana": {
    "id": "dk_isles_item_mana",
    "name": "Jungle Spirit Amulet",
    "description": "The Jungle Spirit Amulet is crafted from enchanted jade and imbued with the essence of ancient jungle spirits. It absorbs ambient magic from the wilds, channeling raw nature energy into your spells. This amulet grants you immunity to environmental debuffs for a turn and enhances your spellcasting prowess by increasing damage dealt by 15%. The amulet's power is drawn directly from the heart of the jungle, making it an indispensable companion for shamans and druids seeking to harness the raw magic of nature.",
    "price": 200,
    "icon": "🌿",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Nature's Embrace",
      "Enhanced Spell Damage"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Swiftleaf Courier Service",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Nature's Embrace",
        "rules": "The user gains temporary immunity to environmental debuffs for a full turn. This effect begins when the amulet is activated and ends immediately after one turn, regardless of the user's actions."
      },
      {
        "title": "Enhanced Spell Damage",
        "rules": "While wearing this amulet, spell damage is increased by 15%. The enhancement applies to all spells cast while the amulet is active. This effect persists as long as the amulet remains on and can be activated once per short or long rest."
      }
    ],
    "levelRequirementReason": "This amulet's power draws from deep within the jungle, requiring a certain level of mastery in nature magic to wield it effectively.",
    "vendorReason": "The denizens of the Dk Isles are deeply connected with the natural world and thus are the keepers of such enchanted relics.",
    "shippingDetail": "Delivered via Swiftleaf's enchanted couriers, ensuring a swift journey through jungle thickets without interference.",
    "usage": {
      "activation": "Activates as a bonus action. Ends when the wearer is no longer in an area of natural magic.",
      "duration": "One full turn",
      "endsWhen": "The amulet ceases to absorb ambient magic from its surroundings due to leaving the jungle or an equivalent environment.",
      "charges": "Unlimited, recharges upon entering a new area of natural magic."
    },
    "priceReason": "Crafted with enchanted jade and imbued with ancient spirits, this amulet offers significant utility for those who venture into the wilds.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T01:29:16.630768+00:00",
    "aiReviewedAt": "2026-07-22T01:29:16.630768+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_item_name": {
    "id": "dk_isles_item_name",
    "name": "Kremling Cryo-Skull Key",
    "description": "The Kremling Cryo-Skull Key is a relic crafted from an ancient, frozen Kremling skull discovered in the icy fjords of the North Reach. This key not only grants the user the power to freeze time momentarily but also amplifies their attacks during this brief pause. It can be used solely within frosty environments or during Cold War events, ensuring its effects are as cold and unforgiving as the zone it was forged in.",
    "price": 4300,
    "icon": "📦",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Temporal Freeze",
      "Frostbite Strikes"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Frostwing Express",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Temporal Freeze",
        "rules": "As a reaction to an attack, you can freeze time for 2 seconds within a 10-foot radius around yourself. During this duration, all enemies in the area have their speed reduced by 75%, and they take a -4 penalty to Dexterity (Acrobatics) checks. The key consumes 100 hit points upon activation."
      },
      {
        "title": "Frostbite Strikes",
        "rules": "While Temporal Freeze is active, your melee weapon attacks deal an additional 2d6 cold damage and have a +2 bonus to the attack roll. This effect does not stack with other sources of cold damage or bonuses to your attack rolls."
      }
    ],
    "levelRequirementReason": "This key requires a minimum level to ensure its use is balanced within icy combat zones.",
    "vendorReason": "The Kremling Cryo-Skull Key has been a long-standing relic of the North Reach, and only those from the region are trusted with its power.",
    "shippingDetail": "Ships via Frostwing Express within icy zones, ensuring it arrives in pristine condition. Delivery time is reduced by half in cold climates.",
    "usage": {
      "activation": "Reaction to an attack",
      "duration": "2 seconds (instantaneous)",
      "endsWhen": "The effect ends when the duration concludes or if you take a major action.",
      "charges": "Unlimited, but requires 100 HP per use"
    },
    "priceReason": "Balanced against other epic items of similar power and utility within icy zones.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T01:29:06.320510+00:00",
    "aiReviewedAt": "2026-07-22T01:29:06.320510+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_bark_helm": {
    "id": "dk_isles_jungle_bark_helm",
    "name": "Jungle Bark Helm",
    "description": "The Jungle Bark Helm is a helmet crafted from the resilient roots of an ancient jungle tree, its bark etched with intricate patterns that whisper secrets of the wild. This helm grants resilience against poison and enhances your connection to nature, granting you a +20% resistance to poison damage and +5% movement speed in jungle biomes. It regenerates 2% of your hit points per second while within a jungle biome, making it feel as though the forest itself heals you.",
    "category": "equipment",
    "price": 670,
    "icon": "🌿",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Poison Resistance",
      "Enhanced Jungle Movement"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Poison Resistance",
        "rules": "While wearing this helm, you have advantage on saving throws against poison effects. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Enhanced Jungle Movement",
        "rules": "You gain a +5 bonus to movement speed while in jungle biomes. This effect is permanent as long as you remain within a jungle biome."
      }
    ],
    "levelRequirementReason": "This helm's connection to the natural world requires some experience with the wild.",
    "vendorReason": "The denizens of the DK Isles have long revered nature and its gifts, making this helm a fitting addition to their wares.",
    "shippingDetail": "Ships via the Void Drifter Relay, known for its reliable service in even the most remote locations.",
    "usage": {
      "activation": "Passive effect.",
      "duration": "Permanent while within a jungle biome.",
      "endsWhen": "Leaving the jungle biome or through a long rest outside of it.",
      "charges": "Unlimited"
    },
    "priceReason": "The helm's rarity and its connection to the wild justify its moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:29:21.780811+00:00",
    "aiReviewedAt": "2026-07-22T01:29:21.780811+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_battle_horn": {
    "id": "dk_isles_jungle_battle_horn",
    "name": "Jungle Battle Horn",
    "description": "The Jungle Battle Horn is a resonant instrument crafted from the bones of ancient jungle guardians and imbued with primal energy. Its deep, echoing roar boosts the morale of allies, granting them a surge of combat prowess for ten heartbeats, while enemies within sight are staggered by its raw power, reeling for three breaths upon first impact. The horn also subtly enhances the wielder’s armor, providing a reassuring shield in the heat of battle.",
    "category": "equipment",
    "price": 670,
    "icon": "🎶",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Boosting Morale",
      "Staggering Strokes"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Koopa Postal Service",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Boosting Morale",
        "rules": "When activated as an action, this horn grants allies within 30 feet a +20% increase in attack speed for 10 seconds. The effect ends if the wielder uses another action to activate the horn or when the duration expires."
      },
      {
        "title": "Staggering Strokes",
        "rules": "Upon activation, enemies within 30 feet are staggered, forcing them to make a DC 15 Dexterity saving throw. On failure, they fall prone and cannot move for 3 seconds, while allies may continue their attacks unhindered."
      }
    ],
    "levelRequirementReason": "The Jungle Battle Horn is designed for those who have proven themselves in the jungle's trials.",
    "vendorReason": "The Dk Isles traders, familiar with the jungle's secrets, offer this weapon of ancient power to seasoned adventurers.",
    "shippingDetail": "Ships via a fleet of enchanted parrots for expedited delivery.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds or until the wielder uses another action to activate it again",
      "endsWhen": "The duration ends, or when the wielder uses an action to deactivate it prematurely",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from rare jungle bones and ancient magic, this horn retains its value despite its seemingly endless use.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-22T01:29:25.872872+00:00",
    "aiReviewedAt": "2026-07-22T01:29:25.872872+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_blood_cry": {
    "id": "dk_isles_jungle_blood_cry",
    "name": "Jungle Blood Cry",
    "description": "The Jungle Blood Cry is a relic imbued with the essence of ancient jungle rites. Crafted from the bark of enchanted trees and the blood of primal beasts, it grants the wielder the ability to blend seamlessly into the undergrowth. Activated in dense foliage, this powerful amulet not only enhances agility but also cloaks the wearer, making them nearly invisible to foes. Its effects are as deadly as they are stealthy, dealing additional damage against jungle creatures and allowing for a higher chance of evading detection.",
    "category": "equipment",
    "price": 670,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% movement speed in dense foliage",
      "+15% evasion to enemy detection"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Camouflage Aura",
        "rules": "Activates as a bonus action, providing the wielder with advantage on Dexterity (Stealth) checks for 1 minute. Ends if the wearer moves more than 30 feet or enters an environment other than dense foliage."
      },
      {
        "title": "Enhanced Agility",
        "rules": "The wearer gains +20% to movement speed in dense jungle biomes and +5 to Dexterity (Stealth) checks while active. This effect persists for the duration of one long rest or until expended."
      }
    ],
    "levelRequirementReason": "This relic is accessible early on, allowing adventurers to quickly adapt their tactics in treacherous jungles.",
    "vendorReason": "The vendors of the Dk Isles are known for their vast and diverse inventory that includes ancient relics from the region's rich history.",
    "shippingDetail": "Ships via the Void Drifters' fastest couriers, ensuring timely delivery to adventurers across the realms.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute or until expended",
      "endsWhen": "The wearer moves more than 30 feet or enters an environment other than dense foliage; or ends if the wearer completes a long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to ensure early access and utility in dense jungle environments, this relic's price reflects its moderate power level.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:29:27.207378+00:00",
    "aiReviewedAt": "2026-07-22T01:29:27.207378+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_blood_scarf": {
    "id": "dk_isles_jungle_blood_scarf",
    "name": "Jungle Blood Scarf of the Krieg",
    "description": "The Jungle Blood Scarf of the Krieg is woven from the vivid threads of a Kremling warlord’s final battle in the dense jungles of the DK Isles. This crimson scarf not only grants you temporary camouflage within the jungle, but also emits an eerie chill that lowers enemy morale. Wielded in combat, it subtly shifts your silhouette to blend seamlessly with the lush foliage, and its chilling aura can diminish the resolve of foes around you by 15% for ten seconds.",
    "category": "equipment",
    "price": 670,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Camouflage",
      "Morale Decrease"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Camouflage",
        "rules": "Activates as a bonus action. Grants temporary camouflage in jungle biomes, allowing the wearer to become invisible to creatures within 30 feet for 5 seconds when they are not moving or attacking."
      },
      {
        "title": "Morale Decrease",
        "rules": "Occurs at the start of each combat round and lasts for 10 seconds. Reduces enemy morale by 15%, causing them to suffer a -2 penalty on attack rolls, saving throws, and ability checks made against you."
      }
    ],
    "levelRequirementReason": "The scarf's complex weaving requires a certain level of mastery in combat and magic.",
    "vendorReason": "The DK Isles natives are the only ones who can craft such items, steeped in the lore of Kremling battles.",
    "shippingDetail": "Ships via a Rakasha spirit courier who ensures the scarf arrives fresh and vibrant.",
    "usage": {
      "activation": "Bonus action to activate camouflage; occurs at start of each combat round for morale reduction.",
      "duration": "Camouflage lasts 5 seconds; morale decrease effect lasts 10 seconds per combat round.",
      "endsWhen": "The user is no longer in a jungle biome or if the wearer moves or attacks while camouflaged.",
      "charges": "Unlimited, recharges after long rest."
    },
    "priceReason": "Balanced price reflects the rare materials and intricate craftsmanship required for such an item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:29:59.889294+00:00",
    "aiReviewedAt": "2026-07-22T01:29:59.889294+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_blood_scent": {
    "id": "dk_isles_jungle_blood_scent",
    "name": "Jungle Blood Scent",
    "description": "The Jungle Blood Scent is a potent extract from the heart of the druidic swamps. When applied, it transforms your skin and breath into that of a jungle creature, masking your presence entirely in dense undergrowth. It also confers a +2 bonus to Dexterity (Stealth) checks for 10 minutes, while simultaneously rendering you immune to detection by ambush traps for the same duration. The scent dissipates naturally after an hour, leaving no trace behind.",
    "price": 670,
    "icon": "🍃",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Stealth Mask",
      "Ambush Trap Immunity"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth Mask",
        "rules": "Activate as a bonus action to gain advantage on Dexterity (Stealth) checks for the next 10 minutes. This effect ends when you are no longer in thick foliage or if you voluntarily end it."
      },
      {
        "title": "Ambush Trap Immunity",
        "rules": "For the duration of your Stealth Mask, you are immune to the detection effects of ambush traps within a radius of 30 feet. This effect ends when you leave the area or take damage."
      }
    ],
    "levelRequirementReason": "This item is designed for novice adventurers who need to navigate dense jungles without drawing unwanted attention.",
    "vendorReason": "DK Isles traders have direct access to the swamps, where they can source unique extracts like Jungle Blood Scent.",
    "shippingDetail": "The extract is shipped in a sealed container with a fragrant preservative. Handle with care to prevent premature activation or degradation.",
    "usage": {
      "activation": "Bonus action to apply the scent and gain its benefits.",
      "duration": "10 minutes, renewable by reapplication as a bonus action.",
      "endsWhen": "Stealth effect ends when you leave dense foliage or take damage; ambush trap immunity ends when you leave the area or take damage.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the rare extraction process and the potent, long-lasting effects of Jungle Blood Scent.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T01:29:37.270850+00:00",
    "aiReviewedAt": "2026-07-22T01:29:37.270850+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_bloom": {
    "id": "dk_isles_jungle_bloom",
    "name": "Bloom of the Forgotten Grove",
    "description": "The Bloom of the Forgotten Grove is a root-infused potion that glows with an ethereal emerald light, pulsing in rhythm with the ancient jungle's heartbeat. When consumed, it grants the drinker temporary jungle resonance, allowing them to feel the earth’s pulse and resist Kremling toxins' venomous effects. For 60 seconds, the imbiber moves as one with nature, gaining both enhanced vitality and a keen awareness of their surroundings.",
    "price": 200,
    "icon": "🌿",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Jungle Resonance",
      "Venom Resistance"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Jungle Resonance",
        "rules": "Upon activation by drinking the potion, you gain +30% health regeneration per second for a duration of 60 seconds. This effect ends if you take any damage or enter a state that requires concentration."
      },
      {
        "title": "Venom Resistance",
        "rules": "While under the effects of Jungle Resonance, you are immune to poison effects from Kremling flora. The immunity lasts for the duration of the potion's effect and is not subject to save checks."
      }
    ],
    "levelRequirementReason": "The potion provides a minor boost that even lower-level adventurers can benefit from without undue risk.",
    "vendorReason": "DK Isles traders are well-known for their knowledge of the jungle and its secrets, making them the perfect purveyors of such an item.",
    "shippingDetail": "Delivered via spectral courier, ensuring swift arrival to even the remotest areas of the jungle.",
    "usage": {
      "activation": "Consume the potion as a bonus action.",
      "duration": "60 seconds.",
      "endsWhen": "The effect ends if you take damage or enter a state that requires concentration.",
      "charges": "Unlimited; the potion can be consumed multiple times without recharging."
    },
    "priceReason": "The price reflects its uncommon rarity and the mystical properties it provides, making it accessible yet valuable to adventurers of all levels.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T04:21:31.147024+00:00",
    "aiReviewedAt": "2026-07-22T04:21:31.147024+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_bloom_potion": {
    "id": "dk_isles_jungle_bloom_potion",
    "name": "Bloom Whisper Potion",
    "description": "The Bloom Whisper Potion is a delicate, translucent liquid that bubbles gently in its vial. Its hue fluctuates with the mood of the jungle—reddening in perilous zones and brightening to emerald when all is serene. Sipping this elixir grants you temporary immunity to jungle toxins and enhances your speed through the verdant undergrowth. The potion's color mirrors the forest’s heartbeat, a living reminder of its power and grace.",
    "price": 680,
    "icon": "🍵",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Immunity to Jungle Toxin",
      "Increased Movement Speed"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Jungle Toxin Immunity",
        "rules": "You gain immunity to all forms of jungle toxin damage for 20 seconds upon drinking the potion. This effect ends immediately if you take any toxin damage."
      },
      {
        "title": "Increased Movement Speed",
        "rules": "For 30 seconds after consuming the potion, your movement speed increases by +15 feet. This effect is terminated if you enter difficult terrain or take any poison damage."
      }
    ],
    "levelRequirementReason": "This potion's effects are potent enough to require at least second-level proficiency in survival or nature.",
    "vendorReason": "The potions sold by DK Isles are known for their connection with the natural world, making them a perfect fit for this elixir.",
    "shippingDetail": "Delivered swiftly via Lakitu drones, ensuring the potion remains potent upon arrival.",
    "usage": {
      "activation": "飲用",
      "duration": "2 minutes total duration (1 minute per effect)",
      "endsWhen": "The effects end if you take toxin damage or enter difficult terrain, whichever occurs first. The potion is consumed after use.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects its rare ingredients and the complexity of its formula, balancing its power with a fair value.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T01:29:52.907347+00:00",
    "aiReviewedAt": "2026-07-22T01:29:52.907347+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_bloom_vial": {
    "id": "dk_isles_jungle_bloom_vial",
    "name": "Jungle Bloom Vial",
    "description": "The Jungle Bloom Vial is a glass vial containing a vibrant, bioluminescent nectar that glows with the energy of the densest jungle undergrowth. When uncorked, it restores vitality like a draught of life-giving waters and grants temporary elemental resistance to the wearer, lending them the fortitude needed to face the unpredictable terrors of the wild. This vial is a trusted companion for adventurers navigating the unforgiving jungles or battling in shadowy environs where elemental forces run rampant.",
    "price": 200,
    "icon": "🍃",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Restores Vitality",
      "Elemental Resistance"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Restore Vitality",
        "rules": "When consumed, the Jungle Bloom Vial restores 300 hit points to the user. This effect is instantaneous and does not require any action."
      },
      {
        "title": "Elemental Resistance",
        "rules": "For 30 seconds after consumption, the user gains a +10% resistance to all elemental damage. This effect ends when the duration expires or if the user takes an action or reaction that requires their concentration."
      }
    ],
    "levelRequirementReason": "This vial is crafted for adventurers who have proven themselves in the jungles and shadows, requiring a minimum of five levels to properly wield its power.",
    "vendorReason": "The vendors at dk Isles are well-acquainted with the dangers of their region and know this item's value to those who face them.",
    "shippingDetail": "Ships via Boo Spectral Mail, known for its reliable delivery through even the most treacherous jungles.",
    "usage": {
      "activation": "Consumed as an action.",
      "duration": "30 seconds.",
      "endsWhen": "Duration ends or user takes a concentration-requiring action.",
      "charges": "Unlimited; can be consumed multiple times."
    },
    "priceReason": "The rarity and the unique properties of the Jungle Bloom Vial justify its fair value in experience points.",
    "priceOriginal": 1000,
    "priceReviewedAt": "2026-07-22T01:30:51.742230+00:00",
    "aiReviewedAt": "2026-07-22T01:30:51.742230+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_brew": {
    "id": "dk_isles_jungle_brew",
    "name": "Toad Lee’s Cold Brew",
    "description": "Toad Lee's Cold Brew is a potent elixir, crafted in the heart of the jungle by the enigmatic brewmaster himself. This bitter, emerald-hued potion not only regenerates stamina at an accelerated rate but also grants temporary cold immunity, crucial for surviving the harsh frosty nights. The concoction is said to have been perfected after Toad Lee's own leg injury, imbuing it with a resilience that mirrors his spirit. Sipping this brew ensures you can push through even the most frigid challenges.",
    "price": 200,
    "icon": "📦",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Stamina Boost",
      "Cold Immunity"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stamina Boost",
        "rules": "When consumed, Toad Lee's Cold Brew provides a +15% increase in stamina regeneration per second for 30 seconds. This effect is instantaneous upon consumption and does not require an action."
      },
      {
        "title": "Cold Immunity",
        "rules": "For the duration of 1 minute after consuming, you gain +20% resistance to cold damage. This immunity persists until the start of your next turn following the consumption. There is no saving throw involved."
      }
    ],
    "levelRequirementReason": "The simplicity and direct benefits of Toad Lee's Cold Brew make it accessible to lower-level adventurers.",
    "vendorReason": "As the local expert in jungle survival, Toad Lee is known for his unique concoctions that aid adventurers in their endeavors.",
    "shippingDetail": "The Void Drifter Relay ensures swift delivery of this potent brew from the heart of the jungle to your doorstep.",
    "usage": {
      "activation": "Consumption",
      "duration": "30 seconds for stamina boost; 1 minute for cold immunity",
      "endsWhen": "At the start of your next turn following consumption",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the item's direct utility and rarity, making it a valuable addition to any adventurer's toolkit.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T01:30:20.220913+00:00",
    "aiReviewedAt": "2026-07-22T01:30:20.220913+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_cannon_fodder": {
    "id": "dk_isles_jungle_cannon_fodder",
    "name": "Jungle Cannon Fodder",
    "description": "The Jungle Cannon Fodder is a relic of ancient jungle warfare, disguised as a colossal fruit that conceals a devastating cannon within its leaves and bark. This massive contraption fires explosive cannonballs with terrifying accuracy, capable of obliterating foes from afar. After each shot, the cannon's barrel emits a cloud of smoke that momentarily blocks line of sight for all enemies in range, giving allies an unexpected tactical advantage.",
    "category": "equipment",
    "price": 680,
    "icon": "🎯",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Explosive Shot",
      "Blinding Smoke"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Explosive Shot",
        "rules": "When the Jungle Cannon Fodder is fired as a bonus action, it launches a single explosive cannonball that deals 1d8 + 3 fire damage to one target within 60 feet. The cannonball has a range increment of 20 feet and ignores difficult terrain. The weapon recharges after a long rest."
      },
      {
        "title": "Blinding Smoke",
        "rules": "For 3 seconds immediately after firing the cannon, all creatures in a 15-foot radius centered on the impact point are blinded as the cannon's smoke obscures their vision. This effect has no save DC and does not end early unless dispelled or otherwise countered."
      }
    ],
    "levelRequirementReason": "This relic is designed for versatile use, requiring only a basic understanding of mechanics to operate.",
    "vendorReason": "The DK Isles are known for their unique and ancient artifacts, including the Jungle Cannon Fodder.",
    "shippingDetail": "Ships via Pipe Express with expedited delivery, ensuring this relic arrives in perfect condition.",
    "usage": {
      "activation": "Bonus action to fire or use",
      "duration": "Instantaneous (Explosive Shot), 3 seconds (Blinding Smoke)",
      "endsWhen": "The effect ends when the duration expires or the cannon is recharged after a long rest.",
      "charges": "Unlimited, but recharges after a long rest"
    },
    "priceReason": "This relic's balanced price reflects its versatile utility and strategic value in combat.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:30:29.252318+00:00",
    "aiReviewedAt": "2026-07-22T01:30:29.252318+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_cloak_of_shadows": {
    "id": "dk_isles_jungle_cloak_of_shadows",
    "name": "Jungle Cloak of Shadows",
    "description": "The Jungle Cloak of Shadows is a woven cloak made from the shadow-veined leaves of the Whispering Gnarls, a rare jungle plant known for its mystical properties. This cloak allows you to blend seamlessly into your surroundings and evade detection within a 5-meter radius. Wearers become invisible to enemies in that range, making it an indispensable tool for stealth and survival in the dense jungles of Dworkin Isle.",
    "category": "equipment",
    "price": 680,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Invisibility Cloak",
      "Stealth Master"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Swiftleaf Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Invisibility Cloak",
        "rules": "Activates as a bonus action, making you invisible to enemies within a 5-meter radius for up to 1 minute. This effect ends when you attack, cast a spell, or move more than 10 feet."
      },
      {
        "title": "Stealth Master",
        "rules": "Increases stealth detection evasion by 20%, making it nearly impossible for enemies to detect your presence in the jungle. This bonus is permanent until the cloak's invisibility effect ends."
      }
    ],
    "levelRequirementReason": "Requires a character of at least level 3 to effectively use and appreciate the stealth benefits.",
    "vendorReason": "The cloaks are crafted by artisans on Dworkin Isle, known for their expertise in jungle flora and crafting unique gear.",
    "shippingDetail": "Delivered within a week of purchase with no additional charges.",
    "usage": {
      "activation": "Bonus action to activate invisibility; passive stealth benefits while active.",
      "duration": "Up to 1 minute per long rest",
      "endsWhen": "Attack, spell cast, or moving more than 10 feet",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price for a rare item that provides significant stealth advantages without breaking the game.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:30:37.762535+00:00",
    "aiReviewedAt": "2026-07-22T01:30:37.762535+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_cold_war_ambush_bottle": {
    "id": "dk_isles_jungle_cold_war_ambush_bottle",
    "name": "Whispering Thorns Elixir",
    "description": "Crafted from the gnarled roots of the Whispering Thorns in the darkest reaches of the jungle, this elixir is said to carry the very essence of the forest's ancient magic. When consumed, it grants you and your allies temporary stealth and silent movement, allowing you to slip past enemy sentries unnoticed. The thorns' curse also whispers secrets of the surrounding area, making you momentarily invisible to ranged attacks for a short time.",
    "price": 680,
    "icon": "🍺",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% stealth duration",
      "Silence enemies within 5 feet"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth and Silence",
        "rules": "Activate as a bonus action. You gain advantage on Dexterity (Stealth) checks for the next minute, and you can move silently without making noise. Additionally, any creature within 5 feet of you has disadvantage on Dexterity (Perception) checks to detect you. This effect lasts until the end of your next turn."
      },
      {
        "title": "Invisible to Ranged Attacks",
        "rules": "Activate as a bonus action. For the duration of one ranged attack roll, creatures have disadvantage on their Perception checks to locate you and are considered to be out of line of sight for the purpose of that check. This effect lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "Suitable for lower-level adventurers who need to infiltrate enemy strongholds.",
    "vendorReason": "Known for its mysterious and powerful potions, dk Isles is the only vendor that can source such an artifact from the jungle's depths.",
    "shippingDetail": "Ships via spectral courier, ensuring safe delivery but with a slight delay of one hour.",
    "usage": {
      "activation": "Bonus action to activate.",
      "duration": "Until end of next turn.",
      "endsWhen": "Ends when the effect's duration ends or you take damage.",
      "charges": "Unlimited, as long as you have not taken damage."
    },
    "priceReason": "Balanced for its unique stealth and ranged defense benefits, this elixir is priced at a fair value relative to its utility in combat scenarios.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:30:48.456913+00:00",
    "aiReviewedAt": "2026-07-22T01:30:48.456913+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_cold_war_gauntlet": {
    "id": "dk_isles_jungle_cold_war_gauntlet",
    "name": "Frostleaf Gauntlet",
    "description": "The Frostleaf Gauntlet is a relic of ancient jungle magic, crafted from the twisted vines of the deep rainforest and the bones of long-forgotten kraken. Its frost-touched metal hums with cold energy, granting the wearer both agility and the ability to strike like an ambush predator. In the dense jungle biomes, it multiplies your critical strike chance by 20%, while in cold battles, it reduces damage taken from freezing attacks by 10%. The gauntlet is a perfect companion for navigating treacherous terrains and stealthy strikes against enemies of the Kremling patrols.",
    "category": "equipment",
    "price": 680,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% critical strike chance in jungle biomes",
      "+10% damage reduction when hit by cold-based attacks"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Jungle Critical Strike",
        "rules": "Activates on a successful melee attack during combat within jungle biomes. The gauntlet increases the chance of a critical strike by +20%. This effect has no cooldown and can be used as long as you are in a jungle biome."
      },
      {
        "title": "Cold Resistance",
        "rules": "Active whenever you are hit by an attack with cold damage. Reduces incoming cold-based damage by 10%, stacking up to +20% if the gauntlet is already active. This effect lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "The Frostleaf Gauntlet's intricate enchantments and materials necessitate a minimum level of 5 for comfort and effectiveness.",
    "vendorReason": "As DK Isles' premier relic dealer, the gauntlet is a fitting addition to their extensive collection of rare artifacts.",
    "shippingDetail": "Ships via Boo Spectral Mail's express courier service with guaranteed delivery within three game days.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous on critical strike and damage reduction effects.",
      "endsWhen": "Disengages when the wearer leaves a jungle biome or is no longer hit by cold-based attacks.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The gauntlet's unique materials and enchantments justify its price, providing significant battlefield advantages at an affordable cost.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:30:58.427382+00:00",
    "aiReviewedAt": "2026-07-22T01:30:58.427382+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_cold_war_ice_shield": {
    "id": "dk_isles_jungle_cold_war_ice_shield",
    "name": "Glacier Shield Fragment",
    "description": "A Glacier Shield Fragment is a jagged shard of ice armor, once part of an elite Kremling siege tower’s defensive barrier. It crackles with cold magic and can freeze foes on impact, while also slowly healing its bearer through the arcane properties of frost. Ideal for frontline defense or blocking teleporters, this relic is a formidable shield for any brave soul facing icy winters in the far reaches of the realm.",
    "category": "equipment",
    "price": 680,
    "icon": "📦",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Glacial Freeze",
      "Frost Regeneration"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Spectral Courier of the Frostwind",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Glacial Freeze",
        "rules": "When you hit an enemy with a melee attack, there is a 15% chance to freeze them in place for 1d4 rounds. The DC to break the effect is equal to 8 + your Strength modifier. This effect can occur once per long rest."
      },
      {
        "title": "Frost Regeneration",
        "rules": "At the start of each of your turns, you regain 5 hit points if you are wearing this fragment as part of your armor. This benefit lasts until you complete a short or long rest."
      }
    ],
    "levelRequirementReason": "The Glacier Shield Fragment is suitable for all adventurers to use its defensive benefits.",
    "vendorReason": "As a vendor specializing in relics and ancient artifacts, dk Isles naturally stocks this powerful yet approachable item.",
    "shippingDetail": "The fragment is delivered by spectral means, arriving at your doorstep within one game turn.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until you complete a short or long rest.",
      "endsWhen": "Once per long rest for Glacial Freeze and until you finish a rest for Frost Regeneration.",
      "charges": "Unlimited, resets after each long rest."
    },
    "priceReason": "The price reflects its rare material composition and unique defensive properties, making it accessible yet valuable to any adventurer.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:21:51.596088+00:00",
    "aiReviewedAt": "2026-07-22T04:21:51.596088+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_cold_war_ice_sword": {
    "id": "dk_isles_jungle_cold_war_ice_sword",
    "name": "Frostfang Blade",
    "description": "Frostfang Blade is a rare, cursed jungle blade forged from the ice of ancient glaciers. Its edge glows with an eerie, frozen luminescence that chills foes in its wake. Crafted by shadowy artisans to serve assassins and scouts, this weapon emits frost upon each strike, making it doubly lethal against those encased in cold. A masterwork piece, it whispers of the frozen jungle’s secrets as it strikes from the shadows.",
    "category": "equipment",
    "price": 680,
    "icon": "📦",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% damage to ice and cold creatures",
      "Stealth bonus +5 while in shadow"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Frosty Strike",
        "rules": "When you strike an enemy with Frostfang Blade, it deals an additional 1d6 cold damage. This effect has no save DC and can be used once per short rest."
      },
      {
        "title": "Shadow Step",
        "rules": "While in a shadow, you gain advantage on Dexterity (Stealth) checks. You must end your turn within the shadow to maintain this benefit; otherwise, it ends immediately."
      }
    ],
    "levelRequirementReason": "Requires proficiency with melee weapons due to its frost and stealth mechanics.",
    "vendorReason": "DK Isles is known for exotic weaponry and cursed artifacts, making Frostfang Blade a fitting addition to their inventory.",
    "shippingDetail": "Ships via Boo Spectral Mail, known for its reliable but somewhat delayed deliveries. Expect a few days longer than standard courier services.",
    "usage": {
      "activation": "Instantaneous effect upon striking with the blade.",
      "duration": "Until end of turn while in shadow.",
      "endsWhen": "You leave a shadow or make an attack outside of one.",
      "charges": "Unlimited, recharges on short rest."
    },
    "priceReason": "Balanced by the limited use and additional mechanics, this weapon offers significant tactical advantages at a fair price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:31:07.522740+00:00",
    "aiReviewedAt": "2026-07-22T01:31:07.522740+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_cold_war_satchel": {
    "id": "dk_isles_jungle_cold_war_satchel",
    "name": "Jungle Cold War Satchel",
    "description": "The Jungle Cold War Satchel is a rugged satchel crafted from the intertwined vines of ancient jungle trees and reinforced with fragments of iron from forgotten battles. Its leather exterior, dyed deep emerald green, whispers secrets to those who wield it, emitting a low hum that disorients foes within 30 feet. This satchel was once used by spies in the jungles of the Dark Isles, perfect for smuggling and espionage.",
    "category": "equipment",
    "price": 680,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% damage to melee attacks",
      "Disorienting Hum"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Disorienting Hum",
        "rules": "When equipped, the Jungle Cold War Satchel emits a low hum that disorients enemy creatures within 30 feet. These creatures have disadvantage on Dexterity (Stealth) checks and Perception checks for 1 minute, or until they leave the area."
      },
      {
        "title": "+15% Melee Damage",
        "rules": "The wielder of this satchel deals an additional +15% damage with all melee attacks. This effect does not stack with other similar bonuses."
      }
    ],
    "levelRequirementReason": "The complexity and utility of the Jungle Cold War Satchel demand a minimum level to ensure proper handling.",
    "vendorReason": "DK Isles is known for its covert operations and espionage gear, making it the ideal vendor for such an item.",
    "shippingDetail": "Ships via Pipe Express, ensuring safe and swift delivery through the jungle's treacherous paths.",
    "usage": {
      "activation": "Equipping the satchel as a bonus action",
      "duration": "Instantaneous; lasts until removed or destroyed",
      "endsWhen": "Dislodged from its wielder or destroyed by fire",
      "charges": "Unlimited, recharged upon removal"
    },
    "priceReason": "The satchel's unique construction and espionage capabilities justify its price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:31:11.221946+00:00",
    "aiReviewedAt": "2026-07-22T01:31:11.221946+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_crypt_wand": {
    "id": "dk_isles_jungle_crypt_wand",
    "name": "Jungle Crypt Wand",
    "description": "The Jungle Crypt Wand is a relic forged from ancient jungle wood and adorned with enigmatic carvings. It allows its wielder to summon spirits that assist in combat, granting +20% dodge chance for nearby allies. The wand can also alter terrain temporarily—dampening the ground or creating treacherous mud pits, each effect lasting 3 seconds. These spirits are attuned to the wilds and enhance all jungle-based abilities by +10%. Only those who have proven their worth in the jungles of Dk Isles should wield this wand.",
    "category": "equipment",
    "price": 5700,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Summon Jungle Spirits",
      "Terrain Alteration"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Summon Jungle Spirits",
        "rules": "As a bonus action, the user can summon jungle spirits for 10 seconds. These spirits grant +20% dodge chance to all adjacent allies. The effect ends when the user dismisses it or if an enemy attacks within the area of effect."
      },
      {
        "title": "Terrain Alteration",
        "rules": "The user can choose one terrain alteration: dampen ground (creating a slippery surface) or create mud pits, each lasting 3 seconds. This effect has no save DC and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "Only those with experience in jungle combat can effectively wield the Jungle Crypt Wand.",
    "vendorReason": "The natives of Dk Isles have a deep connection to the spirits and terrain, making them the perfect guardians of such a relic.",
    "shippingDetail": "Ships via Lakitu Drone Express; delivery can take up to one week depending on weather conditions in Dk Isles.",
    "usage": {
      "activation": "Bonus action",
      "duration": "10 seconds or until dismissed",
      "endsWhen": "User dismisses it or an enemy attacks within the area of effect",
      "charges": "Unlimited, recharges after a short rest"
    },
    "priceReason": "The price reflects the item's rarity and the expertise required to effectively use its abilities.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T01:31:17.015650+00:00",
    "aiReviewedAt": "2026-07-22T01:31:17.015650+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_echo_ammunition": {
    "id": "dk_isles_jungle_echo_ammunition",
    "name": "Jungle Echo Ammunition",
    "description": "Jungle Echo Ammunition fires from a rifle that hums with the primal essence of the Amazonian jungle. These bullets are said to echo the ancient screams of spirits, ricocheting off walls and ground to find their targets. Each shot unleashes a brief sonic pulse that deafens foes within earshot for 2 seconds, leaving them disoriented and vulnerable. The ammunition is crafted from the ironwood of the sacred kapok tree, imbued with jungle magic by shamans of the Dk Isles.",
    "price": 680,
    "icon": "🎵",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Ricochet Damage",
      "Deafening Pulse"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Ricochet Damage",
        "rules": "When a bullet strikes a wall or ground within 15 feet, it ricochets and deals an additional 30% damage to all enemies in the area."
      },
      {
        "title": "Deafening Pulse",
        "rules": "Upon impact with flesh, each bullet emits a deafening sonic pulse that deafens nearby foes for 2 seconds. This effect has no save DC and can be used once per minute."
      }
    ],
    "levelRequirementReason": "Crafted from the sacred kapok wood of the Dk Isles, this ammunition requires a certain level of mastery over jungle magic to handle.",
    "vendorReason": "The vendors at Dk Isles are known for their mystical and enchanted goods, making Jungle Echo Ammunition a natural addition to their inventory.",
    "shippingDetail": "Ships directly from the heart of the jungle, arriving with the next breeze.",
    "usage": {
      "activation": "Ranged Weapon Attack",
      "duration": "Instantaneous",
      "endsWhen": "The shot is made or the bullet impacts a target; recharges after 5 minutes.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from sacred kapok wood and imbued with jungle magic, this ammunition commands a premium price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:31:40.025792+00:00",
    "aiReviewedAt": "2026-07-22T01:31:40.025792+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_echo_scepter": {
    "id": "dk_isles_jungle_echo_scepter",
    "name": "Jungle Echo Scepter",
    "description": "The Jungle Echo Scepter is a pulsating staff forged from the heartwood of ancient jungle guardians, imbued with the essence of forgotten gods. Its eerie hum resonates through the air, echoing the whispers of those who once ruled this wild domain. Wield it in the jungle and watch as spectral vines ensnare foes, their grip unyielding. With each swing, you feel an unnatural increase in agility, allowing you to dance around your enemies with lethal precision.",
    "category": "equipment",
    "price": 680,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Enhanced Agility",
      "Vines of Ensnarement"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Enhanced Agility",
        "rules": "While holding the Jungle Echo Scepter within a jungle biome, gain a +15% increase to your movement speed. This effect lasts for the duration of one short rest or until you leave the jungle biome."
      },
      {
        "title": "Vines of Ensnarement",
        "rules": "Activate as a bonus action to summon two spectral vines that ensnare a creature within 30 feet, dealing 100 necrotic damage and stunning it for 1.5 seconds. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Requires at least second-level proficiency to wield effectively in the jungle.",
    "vendorReason": "The DK Isles are known for their deep connection with ancient jungle guardians, making them a fitting vendor for this relic.",
    "shippingDetail": "Ships via the Void Drifter Relay, ensuring safe and swift delivery from the heart of the jungle.",
    "usage": {
      "activation": "Bonus action to summon vines; passive effect while in a jungle biome.",
      "duration": "Passive effect lasts until you leave the jungle or end your rest. Vines last for 3 seconds per use.",
      "endsWhen": "Effect ends upon leaving the jungle biome, using it again during the same long rest, or if destroyed.",
      "charges": "Unlimited uses with a long rest."
    },
    "priceReason": "Balanced at this price point due to its specific environmental synergy and limited utility outside of jungle biomes.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:32:01.179013+00:00",
    "aiReviewedAt": "2026-07-22T01:32:01.179013+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_echo_tome": {
    "id": "dk_isles_jungle_echo_tome",
    "name": "Jungle Echo Tome",
    "description": "The Jungle Echo Tome is a leather-bound tome adorned with ancient, etched symbols that whisper of long-forgotten jungle gods. When read aloud within dense foliage, it grants you temporary camouflage and amplifies your stealth abilities by +50%, making you nearly invisible to all but the most perceptive eyes. However, beware—the whispers may entangle you in hallucinations, causing you to wander into deadly traps or hallucinate creatures that never existed.",
    "price": 680,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stealth +50% for 1 minute",
      "Camouflage in dense jungle foliage"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Enhanced Stealth",
        "rules": "Activates on reading aloud within a dense jungle biome. The user gains advantage on Dexterity (Stealth) checks and has a +50% bonus to their Stealth score for the duration. This effect ends if you leave the dense foliage or take damage."
      },
      {
        "title": "Camouflage",
        "rules": "The user becomes indistinguishable from the jungle environment, granting them total concealment against creatures that cannot see invisible targets. This camouflage ends if you move more than 10 feet or are hit by an attack."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to effectively use the stealth and camouflage benefits without becoming overwhelmed.",
    "vendorReason": "The DK Isles have a deep connection with the jungle and its secrets, making them a fitting vendor for this enchanted tome.",
    "shippingDetail": "Delivered by Lakitu Drones within 3 days of purchase. Due to the fragile nature of the tome, it must be handled carefully during transit.",
    "usage": {
      "activation": "Activates on reading aloud within dense jungle foliage.",
      "duration": "1 minute per use",
      "endsWhen": "You leave dense foliage or take damage.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price reflects the rare and powerful effects of the tome, ensuring it is a valuable yet fair addition to any adventurer's arsenal.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:31:47.991963+00:00",
    "aiReviewedAt": "2026-07-22T01:31:47.991963+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_fury_belt": {
    "id": "dk_isles_jungle_fury_belt",
    "name": "Jungle Fury Belt",
    "description": "The Jungle Fury Belt is a leather belt woven from the essence of a ferocious jungle beast, its surface etched with ancient runes that hum with primal power. Wielders are granted a state of raging fury, increasing their damage by a quarter against organic foes and granting them heightened agility in dense jungles. At the cost of stamina, this belt unleashes untamed aggression, drawing on raw nature's might to turn the tide of battle.",
    "category": "equipment",
    "price": 680,
    "icon": "🐉",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Rage Empower",
      "Enhanced Agility"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Rage Empower",
        "rules": "Activates as a bonus action. Grants +25% damage against organic foes for 10 seconds. The user suffers a stamina drain of 5% per second during the effect duration."
      },
      {
        "title": "Enhanced Agility",
        "rules": "While wearing this belt, the user's movement speed is increased by 30 feet in jungle terrain. This effect persists for as long as the user remains within a dense jungle environment."
      }
    ],
    "levelRequirementReason": "Requires at least level 5 to channel the raw power of the jungle beast.",
    "vendorReason": "The denizens of the Dk Isles are closely tied to nature and often craft items that harness its untamed fury.",
    "shippingDetail": "Ships via Lakitu Drones, known for their swift and reliable service within the island chains.",
    "usage": {
      "activation": "Activates as a bonus action.",
      "duration": "10 seconds.",
      "endsWhen": "The duration ends when the user leaves jungle terrain or is incapacitated.",
      "charges": "Unlimited, recharges after a short rest."
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare craftsmanship and potent effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:32:13.665690+00:00",
    "aiReviewedAt": "2026-07-22T01:32:13.665690+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_gauntlet_of_the_treant_guard": {
    "id": "dk_isles_jungle_gauntlet_of_the_treant_guard",
    "name": "Gauntlet of the Treant Guard",
    "description": "The Gauntlet of the Treant Guard is a heavy, leaf-veined gauntlet forged from the very bones of ancient jungle guardians. Its power courses through your veins as you move through dense thicket, granting you an extra layer of defense and allowing you to strike with enhanced force against those who dare break through the foliage. Each strike releases a surge of vitality that grants you a brief sprint boost, leaving your enemies in your wake.",
    "category": "equipment",
    "price": 680,
    "icon": "🌿",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% defense in jungle zones",
      "Extra damage vs foes breaking through thicket"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Windborne Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Jungle Defense Boost",
        "rules": "When you are within a jungle zone, the gauntlet grants +15% to your AC. This effect lasts for the duration of your stay in the jungle area."
      },
      {
        "title": "Sprint Boost on Strike",
        "rules": "After successfully hitting an enemy while moving through thicket, you gain a 2-second sprint boost. You can use this ability once per long rest."
      }
    ],
    "levelRequirementReason": "The gauntlet's power is accessible to adventurers early on, allowing them to quickly adapt to jungle combat.",
    "vendorReason": "DK Isles has a deep connection with the natural world and often sells items that harness its essence.",
    "shippingDetail": "Delivered swiftly by the Windborne, ensuring adventurers are prepared for their jungle expeditions.",
    "usage": {
      "activation": "Passive effect while in a jungle zone; sprint boost is gained on successful strikes through thicket.",
      "duration": "Active as long as you remain within a jungle zone and once per long rest after striking an enemy.",
      "endsWhen": "Effect ends when you leave the jungle or if you exhaust your uses for the day, whichever comes first.",
      "charges": "Unlimited uses; regenerates with each long rest."
    },
    "priceReason": "The gauntlet's rare crafting materials and unique enchantments justify its modest price point in terms of XP value.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:33:10.315664+00:00",
    "aiReviewedAt": "2026-07-22T01:33:10.315664+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_gear": {
    "id": "dk_isles_jungle_gear",
    "name": "Jungle Scales of the Whispering Fang",
    "description": "The Jungle Scales of the Whispering Fang are crafted from the ancient armor of a fabled jungle beast, its scales imbued with the whispers of the forest itself. These scales hum in tune with the rustling leaves and animal calls, granting the wearer a fleeting camouflage amidst the dense foliage. The scales not only enhance stealth but also amplify the effectiveness of any ambushes, making the wearer's shadow more potent than ever before.",
    "category": "equipment",
    "price": 680,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Camouflage in Jungle Terrain",
      "Amplify Ambush Effectiveness"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Swiftwind Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Camouflage in Jungle Terrain",
        "rules": "The wearer gains advantage on Dexterity (Stealth) checks to remain hidden within dense jungle terrain for a duration of 10 seconds. This effect can only be used once per short or long rest."
      },
      {
        "title": "Amplify Ambush Effectiveness",
        "rules": "While in stealth, the wearer deals an additional +20% damage to creatures they successfully ambush during combat. This bonus is cumulative with other sources of damage boosts and can only be used when the wearer has a valid target within their reach."
      }
    ],
    "levelRequirementReason": "The scales require a certain level of experience and skill to wield effectively in the dense jungle.",
    "vendorReason": "The vendors at DK Isles have extensive networks that extend deep into the heart of the jungle, allowing them to source rare items such as these scales.",
    "shippingDetail": "Delivered by Swiftwind Courier within one week of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds or until the wearer is seen or detected, whichever comes first",
      "endsWhen": "The duration ends when the wearer is no longer hidden in dense jungle terrain or if they are discovered by an opponent.",
      "charges": "Unlimited uses per short or long rest"
    },
    "priceReason": "This item's unique properties and rarity justify its moderate price, offering both defensive and offensive advantages.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:32:33.946808+00:00",
    "aiReviewedAt": "2026-07-22T01:32:33.946808+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_gear_core": {
    "id": "dk_isles_jungle_gear_core",
    "name": "Jungle Gear Core",
    "description": "The Jungle Gear Core, a pulsating crystalline core of verdant hue, is forged in the heart of the ancient jungle. When embedded into gear, it grants the wearer enhanced resistance to environmental hazards and the ability to call upon the creatures that roam the wilds for short-term assistance. Wielders can also increase their chances of uncovering hidden treasures by drawing on the core’s mystical resonance with the flora and fauna.",
    "price": 680,
    "icon": "📦",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% resistance to jungle environmental damage",
      "Can summon jungle allies"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Environmental Resistance",
        "rules": "The wearer gains a +20% bonus to saving throws against environmental hazards common in jungles, such as poison, disease, and extreme heat or cold. This effect is passive until the core is removed."
      },
      {
        "title": "Summon Jungle Allies",
        "rules": "As an action, the wielder can call upon nearby jungle creatures for short-term assistance. The summoned allies provide temporary aid in combat or exploration, but their duration depends on the specific creature called (typically lasting until the start of the next long rest)."
      }
    ],
    "levelRequirementReason": "The Jungle Gear Core is designed to be accessible early in adventuring careers, providing a tangible boon for any explorer or combatant venturing into tropical jungles.",
    "vendorReason": "The vendors at DK Isles are renowned for their deep connections with the jungle and its inhabitants, making them the perfect purveyors of this core.",
    "shippingDetail": "The Shy Guy Smugglers ensure that each Jungle Gear Core is carefully packed in a woven basket lined with moss to protect it from damage during transport through treacherous jungle paths.",
    "usage": {
      "activation": "Action or Reaction (summoning only)",
      "duration": "Until the next long rest",
      "endsWhen": "Removal of the core, end of a long rest, or upon death of the user",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Jungle Gear Core strikes a balance between providing significant benefits and being accessible early in an adventurer's journey.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:32:51.817848+00:00",
    "aiReviewedAt": "2026-07-22T01:32:51.817848+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_gear_of_the_blood_leopard": {
    "id": "dk_isles_jungle_gear_of_the_blood_leopard",
    "name": "Jungle Gear of the Blood Leopard",
    "description": "The Jungle Gear of the Blood Leopard is crafted from the leather of jungle leopards and imbued with their ferocity. This enchanted armor not only grants its wearer stealth in dense undergrowth but also amplifies their agility, allowing them to move swiftly through the thick canopy without being detected by foes. The gear's feral essence enhances reflexes, providing a 10% chance for the wearer to trigger a jungle roar, stunning nearby enemies for 3 seconds.",
    "category": "equipment",
    "price": 680,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% movement speed in dense vegetation",
      "Stealth +15% in jungle biomes"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Jungle Roar",
        "rules": "The wearer has a 10% chance to trigger the jungle roar as a bonus action. This effect stuns all creatures within 30 feet for 3 seconds, but it can only be used once every long rest."
      },
      {
        "title": "Swift Movement",
        "rules": "While wearing this armor, the wearer's movement speed increases by +20% in dense vegetation, making them nearly invisible to foes. This effect is passive and lasts until the wearer exits a jungle biome or takes damage."
      }
    ],
    "levelRequirementReason": "The Jungle Gear of the Blood Leopard requires a minimum level of 5 due to its enchanted nature and the complex magic woven into it.",
    "vendorReason": "As merchants of exotic goods from the deep jungle, dk Isles is known for carrying rare and powerful items like the Jungle Gear of the Blood Leopard.",
    "shippingDetail": "The gear arrives via Lakitu Drones, ensuring it reaches its destination swiftly and in pristine condition.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Lasts until the wearer exits a jungle biome or takes damage.",
      "endsWhen": "The effect ends when the wearer leaves a jungle biome or sustains damage.",
      "charges": "Unlimited uses, but only one jungle roar per long rest."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's rarity and the complex enchantment required to craft such powerful gear.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:32:29.901975+00:00",
    "aiReviewedAt": "2026-07-22T01:32:29.901975+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_gut": {
    "id": "dk_isles_jungle_gut",
    "name": "Jungle Gut",
    "description": "The Jungle Gut, a potent fermented root concoction crafted from the heart of the deep jungle, amplifies the drinker's strength and speed in harmony with nature's fury. For fleeting moments, warriors are blessed with bursts of raw power and fleet-footed agility, while visions of mythical jungle beasts dance in their minds, boosting squad morale to heroic heights. This ancient brew is a cherished companion for those who venture into the untamed wilds.",
    "price": 200,
    "icon": "🍽",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Strength Boost",
      "Speed Enhancement"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Strength Boost",
        "rules": "Upon activation, the drinker gains a +20% bonus to Strength for 30 seconds. This effect has no save DC and can be used once per short or long rest."
      },
      {
        "title": "Speed Enhancement",
        "rules": "The imbiber also experiences a +15% increase in movement speed while under the effects of Jungle Gut, with no save required to resist this boost. This effect lasts for 30 seconds and can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Jungle Gut's potent effects demand a certain level of physical conditioning.",
    "vendorReason": "The DK Isles traders are renowned for their knowledge of jungle flora and fauna, making them the perfect purveyors of this ancient brew.",
    "shippingDetail": "Delivery is swift but requires a week's passage through treacherous jungles. The delivery may be delayed by unforeseen weather or terrain challenges.",
    "usage": {
      "activation": "Consume as a bonus action.",
      "duration": "30 seconds, with one use per short or long rest.",
      "endsWhen": "The effect duration ends when the time expires or the user takes damage.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced to reflect its potent effects and the effort required for its preparation in the deep jungle.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T01:33:01.362862+00:00",
    "aiReviewedAt": "2026-07-22T01:33:01.362862+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_heart_seed": {
    "id": "dk_isles_jungle_heart_seed",
    "name": "Jungle Heart Seed",
    "description": "The Jungle Heart Seed is a vibrant, heart-shaped seed with a shimmering surface that hints at ancient magic. When planted in the rich soil of the dense jungle, it rapidly grows into an ethereal tree whose leaves pulse with life energy. The plant's roots run deep beneath the earth, drawing its strength from the very heart of the forest. Consuming this seed is akin to embracing the wild; it instantly heals 100 hit points and grants a surge of vitality that regenerates stamina at a rate of 5% per minute for an hour.",
    "price": 200,
    "icon": "🌿",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Heals 100 HP",
      "Regenerates Stamina"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instantaneous Healing",
        "rules": "Eating the seed heals the user for 100 hit points. The effect is instantaneous and has no save DC or duration other than its single-use nature."
      },
      {
        "title": "Stamina Regeneration",
        "rules": "The seed grants a temporary increase in stamina, regenerating at a rate of 5% per minute for up to one hour after consumption. This effect ends when the user is no longer within the immediate vicinity of a jungle environment or if the user spends an action to halt it."
      }
    ],
    "levelRequirementReason": "The Jungle Heart Seed is accessible to low-level adventurers as its magic can be harnessed by even neophytes, though only those with some experience in the jungle's mysteries truly understand its secrets.",
    "vendorReason": "The dk Isles are deeply connected to the natural world and often trade items that draw power from their lands.",
    "shippingDetail": "The seeds are carefully packed in soil to ensure they remain viable during transport, a process that can take several days depending on weather conditions.",
    "usage": {
      "activation": "Eating the seed",
      "duration": "Instantaneous healing; stamina regeneration lasts for up to one hour",
      "endsWhen": "Leaves the immediate vicinity of jungle terrain or is halted by an action",
      "charges": "One use per seed"
    },
    "priceReason": "The price reflects the exotic nature of the seed, its unique origin from the heart of the Jungle Isles, and the careful cultivation required to ensure its potency.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T01:33:36.795634+00:00",
    "aiReviewedAt": "2026-07-22T01:33:36.795634+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_hive_core_potion": {
    "id": "dk_isles_jungle_hive_core_potion",
    "name": "Hive Core Potion",
    "description": "A vial of venomous green fluid exudes a faint hum as it glows faintly, reminiscent of ancient Kremling nests deep within the jungle. Drinking this potion grants you temporary immunity to poison and allows your legs to feel lighter, boosting your speed through dense undergrowth by 20%. Additionally, the potion leaves behind a shimmering trail that reveals hidden paths and enemy movements for thirty seconds, aiding in stealth and ambush.",
    "price": 680,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Immunity to Poison",
      "Speed Boost"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Poison Immunity",
        "rules": "You gain temporary immunity to poison effects for a duration of one minute. This effect ends when the duration expires or you take any poison damage."
      },
      {
        "title": "Increased Speed",
        "rules": "For 10 minutes, your walking speed is increased by 20%. This effect ends if you fall unconscious or upon taking an action that requires concentration."
      }
    ],
    "levelRequirementReason": "This potion provides a significant but not game-breaking advantage to adventurers of all levels.",
    "vendorReason": "The potions sold by DK Isles are renowned for their unique and potent ingredients harvested from the jungles surrounding their island homelands.",
    "shippingDetail": "Ships within three days, delivered via Lakitu's express courier service. Fragile items must be handled with care to maintain potency.",
    "usage": {
      "activation": "Consume the potion as a bonus action.",
      "duration": "Poison immunity lasts for one minute, speed boost lasts for ten minutes.",
      "endsWhen": "Duration ends when expired or upon taking poison damage, falling unconscious, or concentration required actions.",
      "charges": "Unlimited"
    },
    "priceReason": "The potion combines a rare and potent venom with advanced preservation techniques to ensure its effectiveness, making it a valuable but not overpowered item.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-22T01:33:42.392568+00:00",
    "aiReviewedAt": "2026-07-22T01:33:42.392568+00:00",
    "aiReviewVersion": 1
  },
  "dk_isles_jungle_ice_gear": {
    "id": "dk_isles_jungle_ice_gear",
    "name": "Jungle Ice Gear",
    "description": "The Jungle Ice Gear is a set of armor forged from the frost veins deep within the jungle's heart, where ancient cold magic courses through the roots and vines. Its icy plating grants you unmatched mobility in the dense undergrowth, allowing for swift evasion among the trees. When near ice elements, the gear amplifies your agility, offering a +10% bonus to movement speed. Struck by enemies, it calls forth a spectral frost elemental that dances around you, providing an additional 5% chance of summoning this guardian when attacked.",
    "category": "equipment",
    "price": 680,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Mobility Boost",
      "Frost Elemental Summon"
    ],
    "vendor": "dk_isles",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Frost Elemental Summon",
        "rules": "When you are hit by a melee attack, there is a 5% chance to summon a spectral frost elemental that provides temporary defense for 1 minute. The elemental dissipates if it takes damage."
      },
      {
        "title": "Mobility Boost",
        "rules": "While within 30 feet of ice elements such as frozen streams or glaciers, you gain a +10% bonus to your movement speed. This effect is active for the duration of your exploration in icy conditions."
      }
    ],
    "levelRequirementReason": "The Jungle Ice Gear requires a character level of at least 5 due to its intricate craftsmanship and the magical energies it channels.",
    "vendorReason": "As native craftsmen of the jungle, the DK Isles are well-versed in creating gear that harnesses the region's elemental magic.",
    "shippingDetail": "Delivered by Boo Spectral Mail within a week, this courier ensures the gear arrives imbued with its frost powers.",
    "usage": {
      "activation": "Passive effect activated upon wearing. Frost Elemental Summon triggered on melee attack hits.",
      "duration": "Frost Elemental lasts for 1 minute or until it takes damage.",
      "endsWhen": "The elemental dissipates if it takes damage; otherwise, it ends when the gear is removed or you leave icy conditions.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Crafted from rare jungle ice and ancient magic, this gear commands a price reflecting its unique properties and the expertise of DK Isles artisans.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T01:33:33.365117+00:00",
    "aiReviewedAt": "2026-07-22T01:33:33.365117+00:00",
    "aiReviewVersion": 1
  }
};
