// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_031 = {
  "mu_empire_levitation_stone": {
    "id": "mu_empire_levitation_stone",
    "name": "Mu Empire Levitation Stone",
    "description": "A smooth, grey stone that hums with anti-gravity energy. Makes heavy things light.",
    "category": "equipment",
    "price": 15000,
    "icon": "🪨",
    "stock": 7,
    "rarity": "rare",
    "effects": [
      "Attuned user can cast 'Levitate' at will",
      "While holding, your carrying capacity is doubled",
      "Once per long rest: target an object up to 2000 lbs, it becomes weightless for 1 minute"
    ],
    "vendor": "Mu Empire",
    "shippedBy": "Floating Platform",
    "levelRequirement": 5
  },
  "mu_empire_recipe_ancient_grain_bowl": {
    "id": "mu_empire_recipe_ancient_grain_bowl",
    "name": "Recipe: Mu Empire Ancient Grain Bowl",
    "description": "This ancient recipe for Mu Empire grain is a culinary relic, passed down through generations. The grains are so old that they contain whispers of forgotten knowledge. Consuming this bowl grants you advantage on Constitution saving throws for 8 hours, but it also causes your speech to be slightly muffled, giving you disadvantage on Charisma (Performance) checks until the effects wear off. The Mu Empire Health Food's secret ingredient has been a staple in maintaining their legendary endurance and wisdom.",
    "price": 1000,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Constitution Advantage",
      "Speech Muffling"
    ],
    "vendor": "mu_empire",
    "shippedBy": "Silk Road Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Constitution Advantage",
        "rules": "Eating this ancient grain bowl grants you advantage on Constitution saving throws for a duration of 8 hours. This effect ends when the duration expires."
      },
      {
        "title": "Speech Muffling",
        "rules": "For the same duration, you suffer disadvantage on Charisma (Performance) checks due to slightly muffled speech from consuming these ancient grains."
      }
    ],
    "levelRequirementReason": "This recipe is accessible to all adventurers as it focuses more on providing a unique experience than raw power.",
    "vendorReason": "The Mu Empire Health Food has been trusted for centuries to provide such ancient and nutritious recipes.",
    "shippingDetail": "Carefully packed with fresh ice packs to ensure the grains remain as they were originally prepared.",
    "usage": {
      "activation": "Instantaneous consumption of the bowl",
      "duration": "8 hours after eating",
      "endsWhen": "Ends at the end of the 8-hour period or upon death",
      "charges": "Unlimited; can be eaten multiple times"
    },
    "priceReason": "The ancient and unique nature of this recipe, combined with its nutritional value, justifies a price slightly above average.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T22:20:27.893692+00:00",
    "aiReviewedAt": "2026-07-22T22:20:27.893692+00:00",
    "aiReviewVersion": 1
  },
  "mu_empire_silk_sandals": {
    "id": "mu_empire_silk_sandals",
    "name": "Mu Empire Silk Sandals",
    "description": "These Mu Empire Silk Sandals are crafted from the finest silk woven by the weavers of Mu, a land where tradition and craftsmanship intertwine. The soles, made from the tough exoskeletons of silk worms, provide unparalleled comfort and traction, yet they make you feel as if you're walking on clouds. While they offer an advantage in Charisma checks for interactions with nobility, their slippery nature also grants disadvantage on saves to avoid being knocked prone when the ground is wet.",
    "category": "equipment",
    "price": 1000,
    "icon": "🩴",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Charisma Checks",
      "Disadvantage on Saves vs. Knocked Prone"
    ],
    "vendor": "mu_empire",
    "shippedBy": "Silk Road Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Charisma Checks",
        "rules": "When making a Charisma check with nobility, you gain advantage as the silk sandals enhance your poise and confidence."
      },
      {
        "title": "Disadvantage on Saves vs. Knocked Prone in Wet Terrain",
        "rules": "In wet terrain, you must make a DC 15 Strength saving throw or be knocked prone due to the slippery nature of the soles. This effect is nullified when the terrain dries."
      }
    ],
    "levelRequirementReason": "These sandals are designed for travelers and adventurers just starting their journey.",
    "vendorReason": "The Mu Empire Weavers are renowned for their craftsmanship, ensuring that only the finest silk sandal is sold to those who appreciate tradition and quality.",
    "shippingDetail": "Shipped via the Silk Road Courier with expedited delivery, arriving within a week of purchase.",
    "usage": {
      "activation": "Passive effect at all times while wearing the sandals.",
      "duration": "Instantaneous for each effect when applicable.",
      "endsWhen": "The effects end immediately if you remove the sandals or if your terrain changes from dry to wet and vice versa.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balance of quality craftsmanship, rarity of materials, and unique utility justify this price.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-22T22:21:06.123638+00:00",
    "aiReviewedAt": "2026-07-22T22:21:06.123638+00:00",
    "aiReviewVersion": 1
  },
  "multibounce_badge": {
    "id": "multibounce_badge",
    "name": "Multibounce Badge",
    "description": "The Multibounce Badge is a sleek, metallic device that amplifies your jumping prowess. Crafted from enchanted brass and imbued with the spirit of a mischievous gryphon, it allows you to leap between enemies in rapid succession. Once activated, you can attack one target; if successful, you immediately follow up by attacking an adjacent foe. This badge is not just for combat; it's a testament to the bond between creature and creator.",
    "category": "equipment",
    "price": 1000,
    "icon": "👟",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Multibounce",
      "Adjacent Target Strike"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Secure Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Multibounce",
        "rules": "As an action, you jump on one target within reach. If your attack hits, immediately make a second attack against the adjacent enemy in line with the first."
      },
      {
        "title": "Adjacent Target Strike",
        "rules": "This effect can only occur after successfully hitting one target and is limited to once per turn."
      }
    ],
    "levelRequirementReason": "Requires a moderate level of skill in combat to effectively use the Multibounce Badge.",
    "vendorReason": "The Gilded Gryphon specializes in gear that enhances martial prowess, and this badge is no exception.",
    "shippingDetail": "Delivered within three days, ensuring you're ready for your next adventure.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "After the second attack or if hit by an enemy attack",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1,000 XP to reflect its unique combat utility and limited tactical application.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-23T16:38:40.065277+00:00",
    "aiReviewedAt": "2026-07-23T16:38:40.065277+00:00",
    "aiReviewVersion": 1
  },
  "multiverse_conqueror_crown": {
    "id": "multiverse_conqueror_crown",
    "name": "Multiverse Conqueror Crown",
    "description": "The Multiverse Conqueror Crown is a regal diadem forged from the essences of countless realities. Its crownstones shimmer with the light of every universe, and its weight mirrors the gravity of all existence. Crafted by The First Emperor, it grants you dominion over any realm your foot treads upon, bending its inhabitants to your will. With this crown, you may merge universes at will, reshaping reality itself into your vision.",
    "category": "equipment",
    "price": 1000,
    "icon": "👑",
    "stock": 1,
    "rarity": "cosmic",
    "effects": [
      "Mastery Over Realms",
      "Universe Merging"
    ],
    "vendor": "multiversal_empire",
    "shippedBy": "Imperial Decree",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Mastery Over Realms",
        "rules": "As an action, you can assume dominion over any contiguous area of a universe you enter. The inhabitants and the environment are immediately under your control for 1 minute per level. This effect ends if you leave the area or if you use this ability again."
      },
      {
        "title": "Universe Merging",
        "rules": "You can merge two contiguous universes into one as a bonus action, provided they share at least one point of contact. The merged universe becomes stable for 10 minutes per level and retains the memories and essences of both original realms until the effect ends."
      }
    ],
    "levelRequirementReason": "Only those of considerable power can wield such a crown without corrupting reality.",
    "vendorReason": "The Multiversal Empire, being at the heart of all realities, has access to such cosmic treasures.",
    "shippingDetail": "Ships via an interdimensional express, arriving within a week.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "1 minute per level for Mastery Over Realms; 10 minutes per level for Universe Merging",
      "endsWhen": "Effect ends if you leave the area or use this ability again, or after its duration.",
      "charges": "Unlimited"
    },
    "priceReason": "The crown's price reflects its rare material and the cosmic power it commands.",
    "priceOriginal": 300000000,
    "priceReviewedAt": "2026-07-23T16:38:30.228881+00:00",
    "aiReviewedAt": "2026-07-23T16:38:30.228881+00:00",
    "aiReviewVersion": 1
  },
  "multiverse_credit_card": {
    "id": "multiverse_credit_card",
    "name": "Multiverse Platinum Credit Card",
    "description": "The Multiverse Platinum Credit Card, a sleek and glowing platinum rectangle, grants its bearer access to any universe's resources, from mundane goods to cosmic phenomena. Crafted by The Cosmic Bank, this card allows you to purchase anything, even the fabric of reality itself, though it comes with a catch: once used, you must choose one universe as your permanent home until the next great cosmic event. This powerful tool is not without consequence, for each use leaves a mark on the multiverse's delicate balance.",
    "category": "services",
    "price": 1000,
    "icon": "💳",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Universal Purchase Power",
      "Cosmic Debt"
    ],
    "vendor": "universal_banking",
    "shippedBy": "Cosmic Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Universal Purchase Power",
        "rules": "This card allows you to purchase any item or service from any universe. The transaction is instantaneous, but the chosen universe's laws apply. Each successful use requires a DC 25 Wisdom (Perception) check to ensure the transaction aligns with the multiverse's harmony."
      },
      {
        "title": "Cosmic Debt",
        "rules": "After using this card, you must reside in the purchased universe for one year and a day. Failure to do so results in an immediate return to your chosen home universe, but at the cost of one charge from each universe's debt counter."
      }
    ],
    "levelRequirementReason": "Even with its godly power, using the Multiverse Platinum Credit Card requires a minimum level to prevent accidental misuse.",
    "vendorReason": "The Cosmic Bank is entrusted with maintaining cosmic balance and thus offers this unparalleled service.",
    "shippingDetail": "Ships via the fastest cosmic courier, arriving within a week of purchase.",
    "usage": {
      "activation": "Instantaneous action",
      "duration": "Until the end of your next turn",
      "endsWhen": "Your next turn ends or you choose another universe",
      "charges": "Unlimited charges per day"
    },
    "priceReason": "The card's balanced price reflects its powerful utility and the Cosmic Bank's careful management of multiversal resources.",
    "priceOriginal": 45000000,
    "priceReviewedAt": "2026-07-22T22:21:37.082974+00:00",
    "aiReviewedAt": "2026-07-22T22:21:37.082974+00:00",
    "aiReviewVersion": 1
  },
  "mummy_lords_canopic_jars": {
    "id": "mummy_lords_canopic_jars",
    "name": "Mummy Lord's Canopic Jars (Set of 4)",
    "description": "These ancient Canopic Jars are imbued with the essence of a Mummy Lord, each containing one of the deceased god's preserved organs. Crafted by the Cult of Preservation, these jars are believed to hold the very life force that once animated their divine master. Perform the ritual correctly, and you will gain access to the Mummy Lord's Rejuvenation trait, allowing your body to heal at an accelerated rate for one week. The second effect is a protective barrier that can be activated by invoking the god's name; it grants temporary hit points equal to 5 + your Constitution modifier until the start of your next turn.",
    "price": 535000,
    "icon": "🏺",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Mummy Lord's Rejuvenation",
      "Divine Barrier"
    ],
    "vendor": "tomb_raider",
    "shippedBy": "Sarcophagus Delivery",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Mummy Lord's Rejuvenation",
        "rules": "Activation: A full ritual performed over one week with 10,000 gold pieces in incense. Duration: One week after the ritual is complete. The user gains a +2 bonus to all healing and regenerating effects applied to them during this time."
      },
      {
        "title": "Divine Barrier",
        "rules": "Activation: A verbal command invoking the name of the Mummy Lord. Range: Personal. Duration: Until the start of your next turn after activation. Grants temporary hit points equal to 5 + your Constitution modifier."
      }
    ],
    "levelRequirementReason": "Only a seasoned adventurer with significant experience can perform and comprehend the rituals required for these jars.",
    "vendorReason": "The Tomb Raider is a renowned collector of ancient artifacts, including those of divine origin.",
    "shippingDetail": "Delivered with utmost respect and ceremony, ensuring the safe arrival of these sacred relics.",
    "usage": {
      "activation": "A full ritual over one week involving incense worth at least 10,000 gold pieces.",
      "duration": "One week for Mummy Lord's Rejuvenation; until start of next turn for Divine Barrier.",
      "endsWhen": "Ends upon completion or interruption during the ritual period and after one turn once activated.",
      "charges": "Unlimited charges"
    },
    "priceReason": "The cost reflects the rarity, ancient craftsmanship, and the power bestowed by a Mummy Lord.",
    "priceOriginal": 535000,
    "priceReviewedAt": "2026-07-22T22:22:06.010445+00:00",
    "aiReviewedAt": "2026-07-22T22:22:06.010445+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_basic": {
    "id": "mushroom_basic",
    "name": "Standard Mushroom",
    "description": "A red-capped mushroom grown in certified Toad Town greenhouses. Restores vitality when consumed.",
    "category": "consumables",
    "price": 10000,
    "icon": "🍄",
    "stock": 200,
    "rarity": "common",
    "effects": [
      "Restore 2d8+2 HP as an action"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Parakarry Postal Service",
    "levelRequirement": 1
  },
  "mushroom_idol": {
    "id": "mushroom_idol",
    "name": "Grand Mushroom Idol",
    "description": "The Grand Mushroom Idol, carved from an ancient, gnarled root and inlaid with luminescent fungi, radiates a soothing aura that envelops travelers. Its smile invites all to share its wisdom and protection. The idol’s presence ensures the safety of the encampment, granting all within 30 feet advantage on saving throws against fear and poison. Once per week, it can summon a guardian—a resilient Mushroom Guardian (CR 3) to defend the camp. However, if not fed periodic offerings, the idol sulkily withholds its benefits, growing overgrown and unresponsive until appeased.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🗿",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Camp Safety",
      "Guardian Summoning"
    ],
    "vendor": "fey_market",
    "shippedBy": "Stone Crate Express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Camp Safety",
        "rules": "When placed in a camp setting, the Grand Mushroom Idol grants all allies within 30 feet advantage on saving throws against fear and poison. This effect lasts until the idol is removed or its offerings are neglected."
      },
      {
        "title": "Guardian Summoning",
        "rules": "The idol can be activated once per week to summon a resilient Mushroom Guardian (CR 3), which remains for 1 hour. The guardian provides combat support and defends the camp until dismissed, destroyed, or the idol is not fed offerings."
      }
    ],
    "levelRequirementReason": "The Grand Mushroom Idol's ancient magic requires a level at least equal to its power to wield effectively.",
    "vendorReason": "As a nexus of otherworldly curiosities, the Fey Market often stocks such relics from the fae realm.",
    "shippingDetail": "The idol is carefully packed in a Stone Crate with protective fungi to ensure it arrives unharmed and ready for its next guardian summoning.",
    "usage": {
      "activation": "Place in camp setting to activate and once per week for guardian summoning. Requires feeding offerings.",
      "duration": "Continuous until removed or neglected, Guardian lasts one hour.",
      "endsWhen": "Offerings are not fed, the idol is removed from its location, or it is destroyed.",
      "charges": "Unlimited uses; requires periodic offerings to maintain."
    },
    "priceReason": "The Grand Mushroom Idol's balanced price reflects its rare and ancient nature, providing significant yet manageable benefits for a moderate cost.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-22T22:22:38.599357+00:00",
    "aiReviewedAt": "2026-07-22T22:22:38.599357+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_blood_mold": {
    "id": "mushroom_kingdom_blood_mold",
    "name": "Blood Mold",
    "description": "Blood Mold, a sentient fungus wrapped in a cloak of dark red mold, feeds on the lifeblood of its enemies, granting the wielder increased regeneration and resistance to poison. When the blood is consumed, it grants temporary resilience, allowing the user to heal at an accelerated rate and shrug off toxins more effectively. This fungal entity requires careful handling; its touch can also taint a foe with a malevolent curse.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+25% regeneration rate",
      "+10% resistance to poison effects"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Regenerative Boost",
        "rules": "As an action, the wielder can activate Blood Mold. The user gains a +25% increase in their natural healing until the end of their next short or long rest."
      },
      {
        "title": "Poison Resistance",
        "rules": "The wielder is granted +10% resistance to poison effects for 8 hours after consuming an enemy's blood. If the user fails a saving throw against a poison effect, they can attempt it again with advantage on their next turn."
      }
    ],
    "levelRequirementReason": "The fungal entity requires a certain level of arcane knowledge and resilience to safely wield.",
    "vendorReason": "Mushroom Kingdom's bioluminescent fungi are well-known for their magical properties, and Blood Mold is one of the most sought-after specimens.",
    "shippingDetail": "The drones carefully package Blood Mold in a climate-controlled container to prevent it from drying out during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of your next short or long rest",
      "endsWhen": "Rest ends or the user is incapacitated",
      "charges": "Unlimited, but must be rehydrated after 3 days"
    },
    "priceReason": "The rare and volatile nature of Blood Mold justifies its higher price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:22:07.721876+00:00",
    "aiReviewedAt": "2026-07-22T22:22:07.721876+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_blood_mushroom": {
    "id": "mushroom_kingdom_blood_mushroom",
    "name": "Blood Mushroom Essence",
    "description": "The Blood Mushroom Essence exudes a dark crimson glow, its cap thick and leathery, having imbibed the very essence of vengeance from a fallen princess. This rare spore grants you a vengeful aura that boosts your attacks against foes with high hit points, and it strikes at undead with lethal precision. With each use, a ghostly spore may materialize to aid in your battle, only to dissipate after a short time.",
    "price": 1000,
    "icon": "🍄",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "+15% damage to targets with over half their HP",
      "Additional +2d6 damage against undead creatures"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Vengeful Aura",
        "rules": "Activates as a bonus action. While active, your attacks deal an additional 15% damage to targets with over half their hit points. This effect lasts for one minute and ends if you lose consciousness or dismiss it."
      },
      {
        "title": "Ghostly Spore",
        "rules": "Once per short rest, you can summon a ghostly spore that hovers near you. The spore deals 2d6 necrotic damage to the first undead creature within 5 feet of you on your next turn. The spore then dissipates after one round."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 3 to wield this potent essence effectively.",
    "vendorReason": "Mushroom Kingdom's experts in rare fungi and their powers have refined the extraction process for this unique essence.",
    "shippingDetail": "Delivered by a fleet of ghostly Rakashans, ensuring swift and safe transit through the kingdom’s haunted paths.",
    "usage": {
      "activation": "Bonus action to activate aura; once per short rest to summon spore",
      "duration": "One minute for the aura; one round for the spore",
      "endsWhen": "Aura ends if you lose consciousness or dismiss it; spore dissipates after one round",
      "charges": "Once per short rest"
    },
    "priceReason": "The essence's rarity and powerful effects justify its price, aligning with the value of a rare item.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T22:22:50.355736+00:00",
    "aiReviewedAt": "2026-07-22T22:22:50.355736+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_chain_chomp_amulet": {
    "id": "mushroom_kingdom_chain_chomp_amulet",
    "name": "Chain Chomp Amulet",
    "description": "The Chain Chomp Amulet is a cursed artifact forged from weaponized Chain Chomps, crafted by the Changeling Hive. Its cursed nature grants immunity to crushing damage and inflicts minor chaos upon enemies, causing them confusion and instability. When an enemy with high hit points enters proximity, it triggers a trap that deals 1d6+2 slashing damage. The amulet's chaotic aura also disrupts magical effects within 30 feet, forcing creatures to make a DC 15 Wisdom saving throw or be disoriented for the start of their next turn.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐍",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Immunity to Crushing Damage",
      "Trigger Trap on High HP Target"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Immunity to Crushing Damage",
        "rules": "The wearer is immune to all effects that deal crushing damage. This effect does not stack with other immunities."
      },
      {
        "title": "Trigger Trap on High HP Target",
        "rules": "When a creature with 20 or more hit points enters the amulet's 15-foot radius, it triggers a trap that deals 1d6+2 slashing damage to all creatures in the area. The effect has a recharge time of one long rest."
      }
    ],
    "levelRequirementReason": "The artifact's cursed nature and chaotic abilities require a proficient user with at least 8 levels.",
    "vendorReason": "Mushroom Kingdom is renowned for its ties to the Changeling Hive, making it a natural vendor for this artifact.",
    "shippingDetail": "Delivered by Chain Chomp Couriers with a guaranteed delivery within one week of purchase.",
    "usage": {
      "activation": "Instantaneous upon donning the amulet",
      "duration": "Until removed or until the wearer is incapacitated",
      "endsWhen": "The effect ends if the amulet is removed, destroyed, or if the wearer is incapacitated for more than one minute.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to reflect its cursed nature and chaotic abilities, this artifact commands a price of 1000 XP.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T22:22:22.167157+00:00",
    "aiReviewedAt": "2026-07-22T22:22:22.167157+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_crimson_satchel": {
    "id": "mushroom_kingdom_crimson_satchel",
    "name": "Crimson Satchel of Silent Resolve",
    "description": "The Crimson Satchel of Silent Resolve is a leather-bound pouch imbued with the quietude of ancient fungal spirits. It whispers secrets in stillness, granting temporary silence and reduced damage from ranged attacks. Crafted by the Mushroom Kingdom's finest forgers using relics from the Fungi civil war, it is said to carry the resolve of countless warriors who sought peace through silence. When activated, it hums with a quiet strength that allows its wielder to avoid detection and mitigate harm.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Silent Resolve",
      "Ranged Damage Reduction"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silent Resolve",
        "rules": "As an action, activate the satchel for a duration of 1 minute. During this time, you are considered to have advantage on Dexterity (Stealth) checks and gain a +2 bonus to your AC against ranged weapon attacks."
      },
      {
        "title": "Ranged Damage Reduction",
        "rules": "While the satchel is active, you take no damage from successful ranged attack rolls. If you fail an attack roll, this effect ends immediately."
      }
    ],
    "levelRequirementReason": "The satchel's activation requires a basic understanding of its mechanics, suitable for novice adventurers.",
    "vendorReason": "The Mushroom Kingdom is renowned for its expertise in crafting items that embody the essence of nature and silence.",
    "shippingDetail": "Ships via the Void Drifter Relay, known for its timely and reliable delivery service within the kingdom.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute (until ends or interrupted)",
      "endsWhen": "Interrupted by an attack roll that fails, or as an action to end it early",
      "charges": "Unlimited"
    },
    "priceReason": "The satchel's balanced price reflects its rarity and the specialized crafting required for its unique properties.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T22:22:36.308010+00:00",
    "aiReviewedAt": "2026-07-22T22:22:36.308010+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_doughnut_hole_catalyst": {
    "id": "mushroom_kingdom_doughnut_hole_catalyst",
    "name": "Doughnut Hole Catalyst",
    "description": "The Doughnut Hole Catalyst is a corrupted pastry core that amplifies reality distortion within the Void realm. When activated, it creates temporary safe zones that protect allies for a brief moment, while simultaneously causing nearby enemies to lose 10% of their hit points whenever they enter or are in the same area as the safe zone. The catalyst's power corrupts the wielder, draining 1 HP per second within the Void until deactivated.",
    "price": 1000,
    "icon": "🍩",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Safe Zone Creation",
      "Enemy Hit Point Drain"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Goomba Ground Delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Safe Zone Creation",
        "rules": "When activated as a bonus action, this item creates a safe zone that lasts for 1 minute. The safe zone grants temporary hit points equal to half the wielder's level (rounded down) to each ally within its area of effect. If an enemy enters or is already in the same area as the safe zone, they take 5d6 force damage and are pushed back a number of feet equal to their speed. This effect ends if the item is used again before duration expires."
      },
      {
        "title": "Enemy Hit Point Drain",
        "rules": "Any enemy that enters or remains within an active safe zone loses 10% of its hit points at the start of each of its turns. This effect does not stack with other sources of damage, and it ends when the safe zone is destroyed by any means."
      }
    ],
    "levelRequirementReason": "Only a seasoned spellcaster can harness the full power of this item.",
    "vendorReason": "The Mushroom Kingdom's enigmatic vendors hold rare and powerful artifacts that align with their mystical origins.",
    "shippingDetail": "Ships via Goomba Ground Delivery, which may delay delivery by up to a week due to the item's delicate nature.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute",
      "endsWhen": "Destroyed or used again before duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects the item's rarity and the risk involved in attunement.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T22:23:43.081317+00:00",
    "aiReviewedAt": "2026-07-22T22:23:43.081317+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_entropy_ring_core": {
    "id": "mushroom_kingdom_entropy_ring_core",
    "name": "Entropy Ring Core",
    "description": "The Entropy Ring Core is a pulsating core of dark energy, once part of an ancient artifact. Crafted from the heartwood of ancient trees and imbued with the essence of entropy, it hums with unstable power. When attuned by a Red Winter operative, this core can deal 3d10 arcane damage on critical hits. Nearby enemies have a 10% chance to experience temporary entropy decay, causing their movements to slow slightly for a round.",
    "price": 1000,
    "icon": "⚡",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Arcane Critical",
      "Entropy Decay"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Mages Guild Portal",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Arcane Critical",
        "rules": "When the user scores a critical hit with an attack while attuned to this core, they deal 3d10 additional arcane damage. This effect can only trigger once per long rest."
      },
      {
        "title": "Entropy Decay",
        "rules": "For every round the Entropy Ring Core is actively used in combat, there is a 10% chance that nearby enemies within 20 feet will experience temporary entropy decay. This causes their movement speed to decrease by -1 until the end of their next turn. The core can only trigger this effect up to three times per long rest."
      }
    ],
    "levelRequirementReason": "The complexity and danger involved in attuning to the Entropy Ring Core necessitate a minimum character level of 7.",
    "vendorReason": "Mushroom Kingdom is known for its expertise in magical artifacts, including those with unstable energy like the Entropy Ring Core.",
    "shippingDetail": "Shipped via a specialized Mages Guild portal, ensuring safe delivery to Red Winter operatives only.",
    "usage": {
      "activation": "Activate as an action or bonus action while attuned to a weapon.",
      "duration": "Instantaneous effect with ongoing chance of triggering entropy decay for each round used in combat.",
      "endsWhen": "The effect ends if the user ceases using it, or if they are no longer attuned to the core.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the core's unstable power and rarity, as well as its limited use within combat.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T22:22:54.424346+00:00",
    "aiReviewedAt": "2026-07-22T22:22:54.424346+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_feywild_pipe_fragment": {
    "id": "mushroom_kingdom_feywild_pipe_fragment",
    "name": "Feywild Pipe Fragment",
    "description": "A broken pipe fragment, once part of a conduit to the Feywild, now a relic of chaotic magic. Crafted by Chain Chomp Courier using ancient Feywild lore and materials, this fragment infuses weapons with time loop effects that ripple through combat, causing foes to delay, rewind, or skip their actions unpredictably. It enhances damage in Feywild zones and may disorient non-Fey creatures, making it a treasured tool for adventurers navigating the wilds of the Feyrealm.",
    "price": 1000,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Time Loop Infusion",
      "Random Action Delay"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Time Loop Infusion",
        "rules": "When this fragment is used in conjunction with a Feywild-aligned spell, it infuses the target weapon with time loop effects for 3 rounds. During this duration, any creature struck by the weapon must succeed on a DC 15 Dexterity saving throw or be delayed, rewound, or skipped to their next action, chosen randomly."
      },
      {
        "title": "Random Action Delay",
        "rules": "When struck in combat within a Feywild zone, this fragment triggers a random effect that causes the target creature's next action to either delay, rewind, or skip. The exact effect is determined at the start of each round and is chosen randomly."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 6 due to its Feywild alignment and the complexity of its magical effects.",
    "vendorReason": "Mushroom Kingdom is well-known for trading rare items from the Feywild, making it a logical vendor for this fragment.",
    "shippingDetail": "The courier ensures timely delivery of this item, especially valuable given its magical components and delicate nature.",
    "usage": {
      "activation": "Action",
      "duration": "3 rounds when infused into a weapon with a Feywild-aligned spell",
      "endsWhen": "At the end of each creature's turn while under its effects",
      "charges": "Unlimited, as long as it remains in use"
    },
    "priceReason": "The item’s rarity and magical properties justify a price of 1000 XP.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T22:23:10.752772+00:00",
    "aiReviewedAt": "2026-07-22T22:23:10.752772+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_fungal_ambrosia": {
    "id": "mushroom_kingdom_fungal_ambrosia",
    "name": "Fungal Ambrosia of the Silent Court",
    "description": "The Fungal Ambrosia of the Silent Court, a golden elixir crafted from the last breath of a fallen princess, whispers secrets of the night to those who drink it. This potion grants immunity to silence and stun effects for an instant, allowing you to leap into action without fear of being silenced. For 5 seconds after imbibing, enemies are confused, stumbling aimlessly as they lose their footing, making them ripe targets for your follow-up strikes.",
    "price": 1000,
    "icon": "💉",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Immunity to Silence",
      "Confuses Enemies"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Immunity to Silence and Stun",
        "rules": "When consumed, the drinker gains immunity to all silence and stun effects until the end of their next turn. This effect does not stack with other immunities."
      },
      {
        "title": "Confuse Enemies",
        "rules": "For 5 seconds after consumption, any creature that attempts to attack or interact with the drinker is instead confused for a round. They must make a Wisdom saving throw (DC 13) at the start of their turn; on a failed save, they are incapacitated until the end of their next turn."
      }
    ],
    "levelRequirementReason": "The potion's potent effects require a level 2 character to safely handle its power and timing.",
    "vendorReason": "The Mushroom Kingdom, with its deep ties to the realm of the dead, is known for crafting potions that bridge between worlds, including this eerie but effective elixir.",
    "shippingDetail": "Delivered by the Shy Guys, who often sneak it past royal guards and into the hands of those who need its power most.",
    "usage": {
      "activation": "Consume as a bonus action",
      "duration": "Instantaneous immunity; confusion lasts for 5 seconds",
      "endsWhen": "The effects expire naturally after their duration or if consumed by another creature",
      "charges": "Unlimited, but the drinker must wait 1 hour between uses"
    },
    "priceReason": "Balanced to offer a potent effect within reach of mid-level characters without being overpowered.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T22:23:21.616461+00:00",
    "aiReviewedAt": "2026-07-22T22:23:21.616461+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_fungal_blood": {
    "id": "mushroom_kingdom_fungal_blood",
    "name": "Fungal Blood of the Ashen Throne",
    "description": "The Fungal Blood of the Ashen Throne is a dark elixir crafted from the remnants of the last mushroom king. Its thick, gelatinous form exudes an eerie green glow and is said to hold the essence of fungal might. Drinking this brew grants you immunity to poison for 30 seconds and imbues you with a fungal rage that deals 20% extra damage to undead foes. However, it also causes nearby allies to rapidly decay, forcing them into a state of corruption for 10 seconds.",
    "price": 1000,
    "icon": "🧪",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Immunity to Poison",
      "Undead Damage Boost"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Poison Immunity",
        "rules": "You gain immunity to all poison effects for 30 seconds. This effect ends if you take any damage or are exposed to a poison effect again."
      },
      {
        "title": "Undead Damage Boost",
        "rules": "For the duration of your turn, you deal an additional 20% damage against undead creatures. This effect is limited to once per short rest."
      }
    ],
    "levelRequirementReason": "This item's effects are potent but not overwhelming for a first-level character.",
    "vendorReason": "The Mushroom Kingdom has the arcane knowledge to craft such an elixir from its own lore and remains.",
    "shippingDetail": "Ships via Pipe Express, arriving within a week of purchase.",
    "usage": {
      "activation": "Drink as an action.",
      "duration": "30 seconds.",
      "endsWhen": "On damage or exposure to poison again; limited once per short rest for undead damage boost.",
      "charges": "Unlimited"
    },
    "priceReason": "The rare ingredients and the risk of contamination justify this price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:23:07.313082+00:00",
    "aiReviewedAt": "2026-07-22T22:23:07.313082+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_fungal_crimson_satchel": {
    "id": "mushroom_kingdom_fungal_crimson_satchel",
    "name": "Fungal Crimson Satchel",
    "description": "The Fungal Crimson Satchel is a dark red leather pouch, its surface etched with ancient runes and imbued with the essence of fallen kings. It holds mushrooms that are said to grow from the very earth itself, pulsing faintly as they detect intruders. Each mushroom planted not only grows rapidly but also triggers a brief seismic tremor when an enemy approaches within 30 feet, alerting its bearer in time for a swift response.",
    "price": 1000,
    "icon": "🍄",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Rapid Growth",
      "Seismic Alert"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rapid Growth",
        "rules": "Activates as a bonus action. Each mushroom planted within the next round grows to full maturity and triggers a seismic tremor that deals 4d6 damage to enemies within 30 feet, requiring a DC 15 Dexterity saving throw or be knocked prone."
      },
      {
        "title": "Seismic Alert",
        "rules": "The mushrooms emit an invisible pulse when an enemy is within 30 feet. This pulse provides the user with a +2 bonus to Perception checks for 1 minute, but the effect ends if the user moves more than 30 feet away from the mushroom."
      }
    ],
    "levelRequirementReason": "The satchel's enchantments are subtle and require only basic understanding of plant magic.",
    "vendorReason": "Mushroom Kingdom is renowned for its expertise in fungal lore and enchanted flora, ensuring the authenticity and quality of such items.",
    "shippingDetail": "The satchel arrives sealed with a protective charm to prevent premature activation until it reaches its destination.",
    "usage": {
      "activation": "Bonus action for planting mushrooms; passive effect of seismic alerts.",
      "duration": "Instantaneous plant growth, 1 minute for perception bonus",
      "endsWhen": "User moves more than 30 feet or the mushroom is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The satchel's rarity and unique enchantments justify a fair price, balancing its utility with cost.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:23:25.022160+00:00",
    "aiReviewedAt": "2026-07-22T22:23:25.022160+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_fungal_crimson_sword": {
    "id": "mushroom_kingdom_fungal_crimson_sword",
    "name": "Fungal Crimson Sword",
    "description": "The Fungal Crimson Sword is a blade forged in the heart of a fallen mushroom kingdom. Its hilt glows with a steady crimson light, and its edge drips with the essence of decayed fungi. This weapon not only deals +20% extra damage to foes with mushroom-based abilities but also emits a warning glow that intensifies as enemies near their doom. The sword's aura can be felt in dark forests where shadows move on their own.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Mushroom Slayer",
      "Decay Aura"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Mushroom Slayer",
        "rules": "When the Fungal Crimson Sword strikes a foe with mushroom-based abilities, it inflicts an additional +20% damage. This effect lasts until the end of your next turn."
      },
      {
        "title": "Decay Aura",
        "rules": "The sword emits a Decay Aura that reduces the target's defense by 10%. This debuff persists for 1 minute or until the target is no longer within 30 feet of you."
      }
    ],
    "levelRequirementReason": "This sword requires a level 5 character due to its intricate enchantments and dark magic.",
    "vendorReason": "As the blade's origin lies in their kingdom, Mushroom Kingdom is the only vendor that can supply this weapon.",
    "shippingDetail": "The sword arrives with a special protective case to ensure it remains intact during transit.",
    "usage": {
      "activation": "On hit when used against foes with mushroom-based abilities.",
      "duration": "Until the end of your next turn for Mushroom Slayer, and persists for 1 minute or until you are no longer within 30 feet of the target for Decay Aura.",
      "endsWhen": "The effect ends if you are no longer in dark terrain or if the target moves out of range.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this sword's price reflects its unique abilities and origins.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T22:23:28.219126+00:00",
    "aiReviewedAt": "2026-07-22T22:23:28.219126+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_fungal_mask": {
    "id": "mushroom_kingdom_fungal_mask",
    "name": "Mask of the Silent Princess",
    "description": "The Mask of the Silent Princess is a regal visage made from the rarest nightshade petals, crafted in the shadowy forges beneath the Mushroom Kingdom's crumbling spires. When donned, it grants the wearer near-perfect invisibility, cloaking them for ten seconds and compelling enemies to mistake the mask’s bearer as a figment of their imagination. However, this very same mask reveals the true intentions of its wearer with a 20% chance on first encounter, making it a dangerous tool in the hands of those who seek power or expose corruption.",
    "category": "equipment",
    "price": 1000,
    "icon": "👁",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Expose True Intentions"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "The wearer becomes invisible for 10 seconds. This effect does not grant advantage on attack rolls but allows the wearer to move undetected until the duration ends or they take an action."
      },
      {
        "title": "Expose True Intentions",
        "rules": "On first encounter with a creature, there is a 20% chance that it will make a Wisdom saving throw (DC 14) and realize the mask's true intentions. If successful, the enemy gains advantage on attack rolls against the wearer for the next minute."
      }
    ],
    "levelRequirementReason": "The Mask of the Silent Princess requires significant control to wield effectively without exposing oneself.",
    "vendorReason": "Only those with ties to the Mushroom Kingdom's secret underbelly can obtain such a dangerous and powerful artifact.",
    "shippingDetail": "Delivered via Shy Guy's fastest couriers, ensuring the Mask reaches its destination in perfect condition.",
    "usage": {
      "activation": "As an action",
      "duration": "10 seconds or until interrupted",
      "endsWhen": "The duration ends when used or interrupted by an attack",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a price to reflect the item's limited utility and the risks involved in using it.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-22T22:23:52.330557+00:00",
    "aiReviewedAt": "2026-07-22T22:23:52.330557+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_fungal_mirage": {
    "id": "mushroom_kingdom_fungal_mirage",
    "name": "Fungal Mirage",
    "description": "The Fungal Mirage is a cursed toadstool that distorts reality, making enemies appear twice as large or vanish entirely in an instant. It's said to be crafted from the shadowy remnants of the Shadeward Estate's ancient magic, its surface covered in glowing, ethereal fungi. When activated, it warps the battlefield, turning foes into grotesque shadows or causing them to disappear, offering a tactical advantage for ambushes and surprise attacks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Doubles enemy size on hit",
      "10% chance to make enemies vanish"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Enemy Size Alteration",
        "rules": "When the Fungal Mirage strikes an enemy, it temporarily doubles their size. This effect lasts for 1 round and grants advantage on attack rolls against the target. The target can use a reaction to make a DC 15 Wisdom saving throw to negate this effect."
      },
      {
        "title": "Shadowy Disappearance",
        "rules": "There is a 10% chance per activation that an enemy will vanish from the battlefield for 1 round. While vanished, the target is immune to all attacks and effects until it reappears. The target can use a reaction to make a DC 15 Wisdom saving throw to resist vanishing."
      }
    ],
    "levelRequirementReason": "The Fungal Mirage's corrupting magic demands at least a 3rd-level spellcaster to wield it effectively.",
    "vendorReason": "The Mushroom King, master of the Shadeward Estate, personally oversees the sale of this cursed artifact.",
    "shippingDetail": "Ships via Lakitu Drones with expedited delivery to any location within the Shadeward region.",
    "usage": {
      "activation": "A bonus action to activate and deploy the Fungal Mirage.",
      "duration": "Instantaneous effect, lasting for its specified duration or until dispelled.",
      "endsWhen": "Exhausted after a single use; requires 24 hours to recharge.",
      "charges": "1 charge"
    },
    "priceReason": "The Fungal Mirage's rarity and cursed nature justify its moderate price, balanced against its tactical utility.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:24:00.966649+00:00",
    "aiReviewedAt": "2026-07-22T22:24:00.966649+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_fungal_scarf": {
    "id": "mushroom_kingdom_fungal_scarf",
    "name": "Fungal Scarf of Shadowed Grace",
    "description": "Woven from the roots of the Raventree Manor’s deepest crypts, this eerie scarf shimmers with a dark luster in shadowed areas. It absorbs ambient negative energy and grants temporary invisibility, allowing you to slip unnoticed through dimly lit halls or evade foes in the night. The wearer also gains an enhanced evasion bonus that increases their chance of dodging attacks by 15%. Its origins from the manor’s crypts imbue it with a mystic quality, making it a rare find indeed.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility in shadowed zones",
      "Enhanced Evasion"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility in Shadowed Zones",
        "rules": "Activate as a bonus action. You become invisible for 1 minute in any shadowed area with cover or darkness. The effect ends if you move out of the area, are hit by an attack roll, or cast another spell that requires concentration."
      },
      {
        "title": "Enhanced Evasion",
        "rules": "You gain a +20 bonus to Dexterity saving throws against effects that would allow an enemy to make an opportunity attack. This effect lasts until the start of your next turn after using the Invisibility in Shadowed Zones ability."
      }
    ],
    "levelRequirementReason": "The Fungal Scarf of Shadowed Grace is suitable for beginners as it provides a useful stealth tool without requiring high character levels.",
    "vendorReason": "The Mushroom Kingdom’s crypts are rich with rare artifacts, and this scarf is one such find that speaks to their ancient history.",
    "shippingDetail": "Ships via the Rakasha spirit courier network, known for its swift delivery even through treacherous terrain.",
    "usage": {
      "activation": "Bonus action to activate and use Invisibility in Shadowed Zones ability.",
      "duration": "Invisibility lasts for 1 minute per use.",
      "endsWhen": "The effect ends if you move out of a shadowed area, are hit by an attack roll, or cast another spell requiring concentration.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Fungal Scarf is crafted from crypt roots and provides significant stealth benefits for its price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:23:46.144248+00:00",
    "aiReviewedAt": "2026-07-22T22:23:46.144248+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_fungal_scream": {
    "id": "mushroom_kingdom_fungal_scream",
    "name": "Gloomfang Scream",
    "description": "Gloomfang Scream is a vial filled with the eerie scream of a murdered princess, preserved in a thick, dark liquid. The echo of her final words lingers, haunting any who hear it. When unleashed, this vial unleashes a psychic shockwave that paralyzes foes for 5 seconds and leaves them temporarily confused. The vial's contents are as deadly as they are mysterious, each use bringing the memory of her tragic end to those nearby.",
    "price": 1000,
    "icon": "🧪",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Paralyzes foes",
      "Causes temporary confusion"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Psychic Paralyze",
        "rules": "When activated, Gloomfang Scream emits a psychic shockwave that targets all creatures within 10 feet. Creatures hit are paralyzed for 5 seconds and cannot take any actions during this time. There is no save, but the effect ends if the creature moves more than 5 feet away from the source."
      },
      {
        "title": "Confusion",
        "rules": "For every 2 rounds (10 seconds) a creature remains paralyzed by Gloomfang Scream, they must succeed on a DC 14 Wisdom saving throw or be confused for 1 round. During this confusion, the target behaves erratically and may attack friendly forces."
      }
    ],
    "levelRequirementReason": "This vial is designed to be accessible to adventurers of all levels who wish to use its dark magic.",
    "vendorReason": "The Mushroom Kingdom often deals in items that blur the line between life and death, making this vial a natural addition to their wares.",
    "shippingDetail": "Due to its volatile nature, Gloomfang Scream is shipped with strict temperature controls and handled by Void Drifters only.",
    "usage": {
      "activation": "A bonus action to unleash the vial's contents in a 10-foot radius around you.",
      "duration": "Instantaneous; effect lasts for 5 seconds or until interrupted.",
      "endsWhen": "The target moves more than 5 feet away, or if the user uses their action on another target.",
      "charges": "Unlimited use."
    },
    "priceReason": "While not a powerful artifact, Gloomfang Scream's rarity and dark magic justify its price as a valuable tool for those who seek to exploit the realm of the dead.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T16:39:30.901770+00:00",
    "aiReviewedAt": "2026-07-23T16:39:30.901770+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_fungal_shroud": {
    "id": "mushroom_kingdom_fungal_shroud",
    "name": "Shroud of the Unseen Throne",
    "description": "The Shroud of the Unseen Throne is a regal cloak woven from the ancient fungi of Mushroom Kingdom. Its fabric seems to shift and shimmer, allowing the wearer to slip through tight spaces as if they were made of mist. This enigmatic garment grants temporary immunity to poison and curses, and for three turns, it allows the wielder to phase through barriers, evading attacks with a grace that defies logic.",
    "category": "equipment",
    "price": 1000,
    "icon": "🕳",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Phases Through Barriers",
      "Immunity to Poison and Curses"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Phase Through Barriers",
        "rules": "As a bonus action, the wearer can activate this effect for three turns. During this time, they can move through any barrier or obstacle as if it were not there. If an attack is made against them during these turns, the attacker must make a Dexterity saving throw (DC 15) to hit; on failure, the attack misses."
      },
      {
        "title": "Immunity to Poison and Curses",
        "rules": "For three turns after activation, the wearer gains immunity to poison and curses. This effect does not stack with any other similar immunities and ends once its duration expires."
      }
    ],
    "levelRequirementReason": "This shroud is designed for adventurers just beginning their journey in Mushroom Kingdom.",
    "vendorReason": "The Mushroom Kingdom's artisans are known for creating items that harmonize with nature, making this shroud a perfect fit.",
    "shippingDetail": "Ships via the Void Drifter Relay within three days of purchase; arrives at the nearest portal.",
    "usage": {
      "activation": "Bonus action to activate and phase through barriers for three turns.",
      "duration": "Three turns, with immunity lasting until the duration ends.",
      "endsWhen": "The effect ends when its duration is over or if the wearer takes any damage.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This shroud combines rare fungal materials and ancient Mushroom Kingdom crafting techniques, making it a valuable yet balanced purchase for adventurers just starting their journey.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T22:24:46.617223+00:00",
    "aiReviewedAt": "2026-07-22T22:24:46.617223+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_fungal_silence": {
    "id": "mushroom_kingdom_fungal_silence",
    "name": "Fungal Silence",
    "description": "The Fungal Silence is a whispering cap crafted from the soft, resilient flesh of the Whispergrove mushroom. Its subtle fungal hum soothes nearby enemies into a state of calm, muffling all sound around its wearer for ten seconds. The cap reduces an enemy's detection radius by 25%, making it nearly invisible to sentry eyes and ears in the immediate vicinity. Crafted by the Mushroom Kingdom's own Fungal Alchemists, this cap is both a tool for stealth and a weapon of diplomacy.",
    "price": 1000,
    "icon": "🍄",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Silence Enemies",
      "Reduces Detection Radius"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Silence Nearby Enemies",
        "rules": "When activated as an action, the Fungal Silence mutes all sound around the wearer for ten seconds. This effect reduces the detection radius of nearby enemies by 25%, making it nearly impossible to spot or hear them during this time."
      },
      {
        "title": "Reduces Detection Radius",
        "rules": "The cap reduces an enemy's detection radius by 25% while active, effectively blurring their senses within a 10-foot radius. This effect persists for the duration of its use and can be activated once per long rest."
      }
    ],
    "levelRequirementReason": "The Fungal Silence is designed for those who have proven themselves in stealthy missions, requiring at least third-level proficiency to activate.",
    "vendorReason": "Only the Mushroom Kingdom's Alchemists can craft such a harmonious blend of nature and magic, making it a rarity within their own domain.",
    "shippingDetail": "Delivered swiftly by a Rakasha courier, the Fungal Silence arrives imbued with an additional layer of protection against detection for its first use.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds",
      "endsWhen": "Ends when its duration expires or the wearer is subjected to a successful Wisdom saving throw.",
      "charges": "Once per long rest"
    },
    "priceReason": "The Fungal Silence's rarity and unique crafting process justify its moderate price, aligning with its utility for stealth and diplomacy.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T22:24:23.406792+00:00",
    "aiReviewedAt": "2026-07-22T22:24:23.406792+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_fungal_soul_core": {
    "id": "mushroom_kingdom_fungal_soul_core",
    "name": "Soul Core of the Fungal King",
    "description": "The Soul Core of the Fungal King is a pulsating, glowing heart made from ancient fungal matter, embedded with the essence of a long-dead kingdom's spirit. This relic amplifies the wielder’s connection to fungal magic, allowing them to summon fleeting fungal minions and enhance their own spellcasting prowess. The core resonates with the earth itself, offering temporary buffs that deepen one’s bond with nature’s power.",
    "price": 1000,
    "icon": "📦",
    "stock": 0,
    "rarity": "rare",
    "effects": [
      "Summons Fungal Minion",
      "Enhances Fungal Spellpower"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Summon Fungal Minion",
        "rules": "Activates as a bonus action. The user summons a small fungal minion that lasts for 10 seconds and can be commanded to perform one minor task, such as carrying an object or delivering a message. It has AC 14 and deals 3 (d6) damage on a hit with a bite attack."
      },
      {
        "title": "Enhances Fungal Spellpower",
        "rules": "+20% spell power for all spells that deal fungal-based damage, lasts until the end of your next turn. Requires concentration which can be ended early as an action."
      }
    ],
    "levelRequirementReason": "Requires a certain understanding and connection to nature and its magic.",
    "vendorReason": "The Mushroom Kingdom has long been the custodian of fungal secrets and relics, making it the natural home for such an artifact.",
    "shippingDetail": "Ships via Boo Spectral Mail, which can be tracked but is notoriously slow.",
    "usage": {
      "activation": "Bonus action to summon minion; concentration required for spellpower boost.",
      "duration": "Minion lasts 10 seconds; spellpower boost lasts until end of next turn.",
      "endsWhen": "Concentration ends early or minion's task is completed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced as a rare item, offering significant utility but not overwhelming power.",
    "priceOriginal": 7200,
    "priceReviewedAt": "2026-07-22T22:24:30.723640+00:00",
    "aiReviewedAt": "2026-07-22T22:24:30.723640+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_fungal_sword": {
    "id": "mushroom_kingdom_fungal_sword",
    "name": "Fungal Sword of the Silent King",
    "description": "The Fungal Sword of the Silent King, forged from the corrupted flesh of a fallen fungal monarch, exudes a sickly luminescence that seems to feed on shadows and fear. Its blade strikes with devastating force, cleaving through flesh as if it were water, but at a cost: each use saps vitality, draining the wielder's strength until they are left gasping for breath. Only those who have tasted death or revel in darkness can wield this sword without succumbing to its insidious influence.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+30% damage per hit",
      "-10% vitality regeneration"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Shadow Strike",
        "rules": "When the Fungal Sword strikes, it deals an additional +30% damage. The wielder must succeed on a DC 15 Constitution saving throw or suffer a -10% reduction in vitality regeneration for the next hour."
      },
      {
        "title": "Vitality Drain",
        "rules": "At the start of each long rest, the user's vitality regeneration is reduced by 10%, unless they successfully complete a DC 15 Constitution saving throw. This effect persists until the condition ends or the sword is destroyed."
      }
    ],
    "levelRequirementReason": "This sword requires significant strength and darkness affinity, making it suitable only for those of at least fifth level.",
    "vendorReason": "The Mushroom Kingdom's vendors have a unique connection to the realm from which this sword hails, allowing them to offer such an item.",
    "shippingDetail": "Delivered via shadowy courier, the Fungal Sword is known for its swift and mysterious delivery, often arriving at night when few are about.",
    "usage": {
      "activation": "On a successful melee attack action",
      "duration": "Instantaneous damage effect; vitality drain effect lasts until condition ends or sword is destroyed",
      "endsWhen": "Condition ends or the sword is destroyed",
      "charges": "Unlimited, but the user must rest and make a saving throw at the start of each long rest"
    },
    "priceReason": "The price reflects its rarity and the unique materials used in its forging, as well as the dark power it contains.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:25:06.921595+00:00",
    "aiReviewedAt": "2026-07-22T22:25:06.921595+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_fungal_tear": {
    "id": "mushroom_kingdom_fungal_tear",
    "name": "Fungal Tear of the Fallen Princess",
    "description": "The Fungal Tear of the Fallen Princess is a relic encrusted with the last breath of the assassinated princess, Onyx Hand's most prized creation. This tear bestows an aura of sorrow and strength upon its bearer, granting them temporary invulnerability in combat but at the cost of their own well-being. The tear can be activated to restore 100 hit points instantly and grant the user a fleeting resistance to damage and fear, ensuring they fight with both heart and resolve until the very end.",
    "price": 1000,
    "icon": "🍄",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Restores Health",
      "Damage Resistance"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Restore Health",
        "rules": "Activates as an action. Restores 100 hit points to the user, effectively granting them temporary invulnerability for a short period."
      },
      {
        "title": "Damage Resistance and Fear Immunity",
        "rules": "Grants +20% damage resistance and a 10% chance to cause enemies to be frightened for 3 turns. The effect lasts until the end of the user's next turn, after which they are exhausted."
      }
    ],
    "levelRequirementReason": "The tear is crafted with potent magic that requires a certain level of proficiency to wield effectively.",
    "vendorReason": "Mushroom Kingdom's black market is known for its rare and powerful relics, making it the ideal vendor for such an item.",
    "shippingDetail": "The item may arrive in a sealed container with no visible damage but will lose one charge if opened before activation.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect, lasting until the end of the user's next turn",
      "endsWhen": "After the user's next turn ends or the item is destroyed",
      "charges": "Unlimited uses"
    },
    "priceReason": "The tear's rarity and the difficulty in acquiring its components justify this price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T22:25:14.275323+00:00",
    "aiReviewedAt": "2026-07-22T22:25:14.275323+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_fungal_wand_of_silence": {
    "id": "mushroom_kingdom_fungal_wand_of_silence",
    "name": "Fungal Wand of Silence",
    "description": "The Fungal Wand of Silence is a rare artifact forged from the heartwood of the Warped Throne Tree, which stands as an ancient sentinel in Mushroom Kingdom. It silences all hostile creatures within its 30-foot radius for two rounds and amplifies the wielder’s fungal aura, creating an eerie calm that soothes allies but unnerves foes. The wand also grants a +25% bonus to the user's Dexterity saving throws against environmental hazards.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎭",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Silence Radius",
      "Environmental Hazard Resistance"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silence Radius",
        "rules": "The Fungal Wand of Silence creates a 30-foot radius around the user. All hostile creatures within this area are silenced for two rounds, preventing them from taking any actions but remaining aware of their surroundings. The silence effect ends if a creature moves out of the radius or if the wand is destroyed."
      },
      {
        "title": "Environmental Hazard Resistance",
        "rules": "While holding the Fungal Wand of Silence, the user gains advantage on Dexterity saving throws against environmental hazards such as falling damage, poison gas, and sandstorms. The effect ends when the wand's charges are exhausted or if it is destroyed."
      }
    ],
    "levelRequirementReason": "The Fungal Wand of Silence is a rare but not overly powerful tool suitable for any brave adventurer.",
    "vendorReason": "As the wand's heartwood comes from a sacred tree, only the Mushroom Kingdom can produce such an item.",
    "shippingDetail": "The wand is delivered via a Rakasha messenger who ensures safe delivery within one week of purchase.",
    "usage": {
      "activation": "A bonus action to activate and maintain the effects for two rounds.",
      "duration": "Two rounds, or until silenced creatures move out of range.",
      "endsWhen": "The wand's charges are exhausted or it is destroyed.",
      "charges": "5 uses per short rest"
    },
    "priceReason": "The wand’s rarity and the materials used in its forging justify a price slightly above average.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:25:02.001207+00:00",
    "aiReviewedAt": "2026-07-22T22:25:02.001207+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_fungal_ward": {
    "id": "mushroom_kingdom_fungal_ward",
    "name": "Ward of the Withering Throne",
    "description": "The Ward of the Withering Throne is a mystical amulet crafted from the essence of the Fungi Princess. Worn by those who seek to protect themselves, it channels the last breath of its namesake, creating a shimmering barrier that can absorb up to 200 points of damage and summons a spectral mushroom that targets nearby foes with a potent blast of fungal spores. The amulet's power is not just defensive; if the wearer falls, the mushroom erupts in a deadly spray, dealing devastating damage to those who dare approach.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Temporary Shield",
      "Spectral Mushroom"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Absorb Damage and Summon",
        "rules": "When activated by wearing the amulet, it grants the wearer a temporary shield that can absorb up to 200 points of damage. Additionally, after being worn for one minute, it summons a spectral mushroom that deals 30d6 force damage in an area 15 feet wide."
      },
      {
        "title": "Explosive Defiance",
        "rules": "If the wearer is reduced to 0 hit points or less while wearing the amulet, the spectral mushroom erupts, dealing 50d6 force damage in a 30-foot radius. The mushroom can only be summoned once per day."
      }
    ],
    "levelRequirementReason": "The Ward of the Withering Throne is designed for those who are just beginning their journey to harness magical prowess.",
    "vendorReason": "Only the Mushroom Kingdom, with its rich history and deep connection to fungal magic, could produce such a powerful yet balanced artifact.",
    "shippingDetail": "Ships via the Void Drifter Relay, known for its swift deliveries and secure transport of magical items.",
    "usage": {
      "activation": "Activates on wearing the amulet; can only be used once per day.",
      "duration": "1 minute or until expended by damage",
      "endsWhen": "The wearer is reduced to 0 hit points or less, or one hour after activation ends.",
      "charges": "Unlimited daily uses"
    },
    "priceReason": "Balanced at 1000 XP, the Ward of the Withering Throne offers a potent mix of defense and offense for adventurers just starting their journey.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T22:25:17.848211+00:00",
    "aiReviewedAt": "2026-07-22T22:25:17.848211+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_gelatinous_mask": {
    "id": "mushroom_kingdom_gelatinous_mask",
    "name": "Gelatinous Mask of the Silent Princess",
    "description": "The Gelatinous Mask of the Silent Princess is a translucent, viscid artifact crafted from the rare gelatin of a silent princess's tears. This mask grants temporary invisibility and allows its wearer to hear whispers of the dead—a skill invaluable for tracking assassins or uncovering hidden truths. It was forged in the enigmatic Mushroom Kingdom by the whimsical artisans who serve under the kingdom’s queen, ensuring that each piece retains an ethereal quality that is both enchanting and functional.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Hears Whispers"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "The wearer gains temporary invisibility for 10 seconds. This effect can be activated as a bonus action, and it ends if the wearer attacks or casts a spell. The mask has an unlimited number of uses."
      },
      {
        "title": "Hears Whispers",
        "rules": "For every 5 minutes spent wearing the mask, the wearer gains the ability to hear whispers from the dead for 20 seconds. This effect can be activated as a bonus action and requires no concentration. The mask has an unlimited number of uses."
      }
    ],
    "levelRequirementReason": "The mask's effects are subtle but effective, making it suitable even for low-level adventurers who might need to blend in or uncover secrets.",
    "vendorReason": "The Mushroom Kingdom is known for its artisans who create items that balance functionality with whimsy, and the Gelatinous Mask is a prime example of their craftsmanship.",
    "shippingDetail": "Ships via Boo Spectral Mail, which can sometimes deliver in a single night if the moon is full.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "10 seconds for Invisibility; 20 seconds for Hears Whispers",
      "endsWhen": "Attacks or spells cast; ends after duration when not active",
      "charges": "Unlimited"
    },
    "priceReason": "The mask’s rarity and the magical properties of its material justify a price slightly above average, but still accessible to those on a budget.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:25:19.532449+00:00",
    "aiReviewedAt": "2026-07-22T22:25:19.532449+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_gloom_bottle": {
    "id": "mushroom_kingdom_gloom_bottle",
    "name": "Gloom Bottle of the Fallen Princess",
    "description": "The Gloom Bottle of the Fallen Princess is a dark, glass vial encased in ivy and shadow. It captures the essence of a fallen princess, her spectral form flickering within like an extinguished candle. When wielded, it casts a chilling aura that cloaks the bearer in shadows, enhancing stealth by 20% for 30 seconds. The bottle also saps the vitality of foes nearby, reducing their movement speed by 40%. However, this macabre artifact is not without cost; it leeches health from its user at a rate of 10% per minute until depleted.",
    "price": 1000,
    "icon": "🍄",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Stealth Aura",
      "Enemy Slow"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Stealth Aura",
        "rules": "The wielder gains advantage on Dexterity (Stealth) checks for the duration. This effect can be activated as a bonus action and lasts for 30 seconds."
      },
      {
        "title": "Enemy Slow",
        "rules": "Enemies within a 15-foot radius have their speed reduced by 40% until the end of the bottle's duration or when they leave the area. This effect can be activated as a bonus action and lasts for 30 seconds."
      }
    ],
    "levelRequirementReason": "The arcane energies within the Gloom Bottle are too potent for those below level two.",
    "vendorReason": "The Mushroom Kingdom's mysterious Shy Guy Smugglers have acquired this artifact from a shadowy source, and they sell it to adventurers who can handle its risks.",
    "shippingDetail": "Delivered discreetly with special packaging by the Shy Guys themselves.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "30 seconds, recharges after a long rest",
      "endsWhen": "The effect ends when the user is no longer within range or upon completion of its duration.",
      "charges": "Unlimited uses per short or long rest"
    },
    "priceReason": "The Gloom Bottle's balance lies in its potent effects and the risk it poses to the wielder, making it a valuable yet dangerous commodity.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T22:25:39.699558+00:00",
    "aiReviewedAt": "2026-07-22T22:25:39.699558+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_gloom_shroud": {
    "id": "mushroom_kingdom_gloom_shroud",
    "name": "Gloom Shroud",
    "description": "The Gloom Shroud is a cloak spun from the ancient whispers of fallen fungi. Its fabric shimmers with an eerie, mossy glow that cloaks wearers in near-perfect stealth. Within its shadowed embrace, allies' critical chance surges by +30% for three turns, while enemies within 5 feet suffer a chilling effect that reduces their hit point regeneration by -10%. Ideal for the Mushroom Kingdom’s covert operations against the Onyx Hand.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% critical chance (allies)",
      "-10% HP regen (enemies)"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Enhanced Stealth",
        "rules": "When worn, allies within 5 feet gain a +20% bonus to stealth checks. This effect lasts until the end of the wearer's next turn."
      },
      {
        "title": "Chilling Aura",
        "rules": "Enemies within 5 feet suffer a -10% reduction to hit point regeneration for the duration of the wearer’s concentration, which ends when they move out of range or the wearer uses an action to end it. No save is required."
      }
    ],
    "levelRequirementReason": "Requires at least third level to effectively utilize its stealth and critical chance bonuses.",
    "vendorReason": "The Mushroom Kingdom's royalty often commissions covert operations against the Onyx Hand, making this cloak a valuable asset for their agents.",
    "shippingDetail": "Ships via Lakitu Drones, delivered within three days of purchase.",
    "usage": {
      "activation": "Activates as an action. Concentration is required to maintain the effects until ended.",
      "duration": "Concentration lasts for up to one minute.",
      "endsWhen": "Focus ends when concentration is lost or the wearer moves out of range, or they use an action to end it.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced price for a rare item that offers significant stealth and combat advantages in specific scenarios.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:25:30.334123+00:00",
    "aiReviewedAt": "2026-07-22T22:25:30.334123+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_gloom_ward": {
    "id": "mushroom_kingdom_gloom_ward",
    "name": "Gloom Ward of the Silent Toad",
    "description": "The Gloom Ward of the Silent Toad is a cursed shield forged from the essence of a toad that once ruled over the Mushroom Kingdom. Crafted in shadowy forges, this shield absorbs magical damage but at a cost: it reduces your movement speed by 20% and grants you +20% resistance against crowd control effects. It whispers dark secrets when touched, speaking only to those who dare to wear its burden.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Magical Absorption",
      "Reduced Mobility"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Magical Absorption",
        "rules": "Activates as a bonus action. The Gloom Ward absorbs 50% of all magical damage taken by the wearer for the duration, reducing it to non-magical damage equal to half its original amount."
      },
      {
        "title": "Reduced Mobility",
        "rules": "While active, you have disadvantage on Dexterity (Stealth) checks and are reduced to a walking speed of 20 feet. The effect ends when the shield is removed or after 1 hour has passed."
      }
    ],
    "levelRequirementReason": "This shield requires a level 5 character due to its complex enchantments and dark magic.",
    "vendorReason": "The Mushroom Kingdom's ancient forges produce only the most potent artifacts, including this cursed yet powerful ward.",
    "shippingDetail": "Ships via Pipe Express, known for its reliable and timely deliveries within the kingdom.",
    "usage": {
      "activation": "Bonus action to activate; lasts until removed or after 1 hour.",
      "duration": "Instantaneous activation, 1 hour duration.",
      "endsWhen": "The shield is removed from you or after 1 hour.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect its potent magical properties and cursed nature.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:25:33.151608+00:00",
    "aiReviewedAt": "2026-07-22T22:25:33.151608+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_glowing_heart": {
    "id": "mushroom_kingdom_glowing_heart",
    "name": "Glowing Heart of the Fallen Princess",
    "description": "The Glowling Heart of the Fallen Princess is a relic carved from the stone heart of the assassinated princess. It pulses with an ethereal light, drawing on the warmth of her last breath to restore vitality and fortitude to all nearby allies. When active, it grants a steady pulse of healing, restoring 15 hit points per second to its wearer, while also granting +20% defense to any ally within 30 feet for the duration of its glow.",
    "category": "equipment",
    "price": 1000,
    "icon": "💖",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Healing Glow",
      "Fortified Allies"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Healing Glow",
        "rules": "The wearer regenerates 15 hit points per second while the item is active. This effect ends when the item is removed or destroyed."
      },
      {
        "title": "Fortified Allies",
        "rules": "Allies within 30 feet gain a +20% bonus to their defense. This effect lasts for as long as the item remains in place and ends if it is removed or destroyed."
      }
    ],
    "levelRequirementReason": "The relic's power draws on ancient magic, requiring a minimum level of 6 to wield.",
    "vendorReason": "The Mushroom Kingdom holds the lore and keeps items of such significance after the princess' tragic passing.",
    "shippingDetail": "Delivered by an ethereal courier, ensuring swift and safe transport to its destination.",
    "usage": {
      "activation": "Active while worn as equipment",
      "duration": "Instantaneous activation; duration until removed or destroyed",
      "endsWhen": "Worn off, removed, or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity and ancient magic contribute to its balanced price of 1000 XP.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T22:25:48.076208+00:00",
    "aiReviewedAt": "2026-07-22T22:25:48.076208+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_glowing_mold_cloak": {
    "id": "mushroom_kingdom_glowing_mold_cloak",
    "name": "Mold Cloak of the Fungal Sovereign",
    "description": "The Mold Cloak of the Fungal Sovereign is a cloak spun from sentient mold threads that glow faintly under moonlight, weaving in patterns native to the fungal kingdom's bioluminescence. It grants the wearer stealth and minor damage reduction while cloaked within forested or underground environments, making them nearly invisible among the verdant canopy. The cloak also enhances perception of fungal terrain, allowing the wearer to detect hidden mycelial pathways and ancient fungal structures with uncanny precision.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+15% stealth chance in forest/underground areas",
      "-20% damage taken while cloaked"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Stealth Enhancement",
        "rules": "Activate as a bonus action. While wearing the cloak, you have advantage on Dexterity (Stealth) checks in forested or underground locations for 1 hour. The effect ends when you stop wearing the cloak."
      },
      {
        "title": "Damage Reduction",
        "rules": "While cloaked, you gain a +2 bonus to AC against all damage types. This effect lasts until the end of your next long rest or until you are no longer in forested or underground areas."
      }
    ],
    "levelRequirementReason": "The cloak's fungal threads and bioluminescent patterns require a certain level of magical prowess to control effectively.",
    "vendorReason": "The Mushroom Kingdom is home to the sentient mold that weaves this cloak, making it their natural steward.",
    "shippingDetail": "Due to its magical nature, the cloak must be shipped via Boo Spectral Mail for safe delivery.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 hour or until you stop wearing it in forested/underground areas",
      "endsWhen": "Ends when you disrobe and are no longer in a forested or underground area, or at the end of your next long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The cloak's intricate fungal weave requires extensive magical crafting, making it a rare but not excessively expensive find for adventurers.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T22:26:01.410284+00:00",
    "aiReviewedAt": "2026-07-22T22:26:01.410284+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_inked_pipe_catalyst": {
    "id": "mushroom_kingdom_inked_pipe_catalyst",
    "name": "Inked Pipe Catalyst",
    "description": "The Inked Pipe Catalyst is a finely crafted pipe adorned with intricate runes and symbols that glow faintly. Crafted from enchanted wood sourced from Beanbean's Whispering Grove, this conduit amplifies magical effects when used in tandem with Beanbean coins. It also triggers a minor illusion whenever held near a reflective surface, misleading foes into seeing an altered reflection of their surroundings. The pipe subtly slows the wielder’s movement speed by 10 feet, but enhances the magic they channel.",
    "price": 1000,
    "icon": "🧪",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Enhances Pipe Magic",
      "Minor Illusion on Reflection"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Mages Guild Portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Pipe Magic",
        "rules": "When used in conjunction with Beanbean coins, the Inked Pipe Catalyst increases the caster's pipe-based spellcasting by +1d4. This effect is a bonus action that lasts until the end of your next turn."
      },
      {
        "title": "Minor Illusion on Reflection",
        "rules": "Holding the pipe close to any reflective surface triggers a Minor Illusion, creating an illusory image that duplicates the wielder's appearance. The effect is instantaneous and has no save DC; it lasts for 1 minute or until dispelled."
      }
    ],
    "levelRequirementReason": "The Inked Pipe Catalyst requires a minimum level of 1 to ensure players can benefit from its magical enhancement without overpowering them.",
    "vendorReason": "The Mushroom Kingdom is renowned for its magical artifacts and this pipe holds secrets shared by Beanbean himself, making it the perfect vendor for such an item.",
    "shippingDetail": "Ships via special Mages Guild Portal, ensuring safe delivery within a week from order placement.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Until the end of your next turn",
      "endsWhen": "The effect ends when you take another bonus action to activate it again or at the start of your next turn if not reactivated.",
      "charges": "Unlimited"
    },
    "priceReason": "The Inked Pipe Catalyst offers a balanced enhancement with minor utility effects, making it a fair addition to any mage's inventory.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T22:25:49.500352+00:00",
    "aiReviewedAt": "2026-07-22T22:25:49.500352+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_ammunition": {
    "id": "mushroom_kingdom_item_ammunition",
    "name": "Ash of the Dissolving Throne",
    "description": "A vial of Ash of the Dissolving Throne is a powdery substance that has been extracted from the crumbling remains of an ancient, enchanted throne. When hurled at enemy structures, it explodes with a deafening crash, shattering stone and timber into dust. The resulting area quickly fills with a noxious fungal decay that spreads for 10 meters around, weakening all standing within its reach. This potent concoction is perfect for siege warfare or daring ambushes.",
    "price": 1000,
    "icon": "💥",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Explosive Impact",
      "Fungal Decay"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Explosive Impact",
        "rules": "When thrown and makes a successful hit against an inanimate structure, the vial explodes on impact. The explosion deals 150 damage to the target and creates a 10-foot radius area of effect within which all creatures must make a DC 14 Dexterity saving throw or be knocked prone."
      },
      {
        "title": "Fungal Decay",
        "rules": "After impacting, the area of effect immediately fills with a noxious fungal decay that lasts for 1 minute. All creatures in this area suffer from disadvantage on Strength and Dexterity checks and ability checks until the decay dissipates or they leave the area."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to ensure the user can effectively manage the explosive force and area of effect.",
    "vendorReason": "The Mushroom Kingdom's alchemists are well-versed in extracting and refining such powerful substances from ancient ruins.",
    "shippingDetail": "Delivered by Pipe Express, known for their reliable and swift courier services within the kingdom.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous with a 1-minute duration of effects in the area",
      "endsWhen": "The decay dissipates or creatures leave the area affected",
      "charges": "Unlimited, but limited to one use per short rest"
    },
    "priceReason": "Balanced price reflects the rare and potent nature of the Ash of the Dissolving Throne.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T22:25:55.719844+00:00",
    "aiReviewedAt": "2026-07-22T22:25:55.719844+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_armor": {
    "id": "mushroom_kingdom_item_armor",
    "name": "Gloomweave Breastplate",
    "description": "The Gloomweave Breastplate, crafted from dark silk woven under the watchful eyes of the Mushroom King's shadowy courtiers, absorbs psychic energy that lingers in the throne room. As it captures this ethereal power, you feel its weight settle over your shoulders, granting you a defensive aura that repels illusions and enhances your resilience against mental attacks. However, each time you endure an attack, your movements grow ever so slightly sluggish, as if weighed by the very darkness that forged it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Absorbs Psychic Energy",
      "Enhances Illusion Resistance"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Absorption of Psychic Energy",
        "rules": "When you are hit by a psychic attack, you absorb 50% of the damage as temporary hit points. This effect lasts for 1 minute and can occur once per short or long rest."
      },
      {
        "title": "Illusion Resistance Boost",
        "rules": "You gain a +2 bonus to saving throws against illusion spells and effects, which persists until you finish a short or long rest."
      }
    ],
    "levelRequirementReason": "The Gloomweave Breastplate requires significant mental fortitude and experience to wield its shadowy power effectively.",
    "vendorReason": "As a guardian of the throne room, the Mushroom King ensures that only those who have earned it through their trials wear this powerful armor.",
    "shippingDetail": "The Gloomweave Breastplate is carefully packaged to ensure its delicate silk remains undamaged during transit. Delivery can take up to a week due to the fragile nature of the item.",
    "usage": {
      "activation": "Passive effect, activated upon wearing the armor.",
      "duration": "1 minute per short or long rest",
      "endsWhen": "The temporary hit points from absorption and the bonus to saving throws against illusions expire after a rest.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted with rare, shadow-woven silk and imbued with powerful enchantments, this armor is both costly in material and in magic.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T22:26:18.710126+00:00",
    "aiReviewedAt": "2026-07-22T22:26:18.710126+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_brew": {
    "id": "mushroom_kingdom_item_brew",
    "name": "Mirebrew of the Shaded Throne",
    "description": "The Mirebrew of the Shaded Throne is a vial containing a shimmering, shadowy elixir that whispers of ancient battles fought in the Mushroom Kingdom's twilight. Each sip cloaks the drinker in an eerie green aura, granting temporary invisibility and resistance to poison for a brief but crucial moment. This potent potion was crafted from the tears of the fallen heroes who guarded the Shaded Throne, imbuing it with their strength and resilience.",
    "price": 1000,
    "icon": "🍺",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Poison Resistance"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "Activates as a bonus action. The drinker becomes invisible for 10 seconds. This effect ends if the drinker attacks, casts a spell, or takes any other action that would break concentration."
      },
      {
        "title": "Poison Resistance",
        "rules": "Grants resistance to poison damage for 15 seconds upon consumption. This effect is permanent and does not require activation once consumed."
      }
    ],
    "levelRequirementReason": "This potion's potent effects are accessible to adventurers of all levels, making it a versatile tool in any battle.",
    "vendorReason": "The Mushroom Kingdom's royal apothecary has crafted this elixir from the kingdom's most precious resources and lore.",
    "shippingDetail": "Ships via Boo Spectral Mail, known for its swift but eerie deliveries in the twilight hours.",
    "usage": {
      "activation": "Bonus action to activate invisibility. Instantaneous effect of poison resistance upon consumption.",
      "duration": "Invisibility lasts 10 seconds; poison resistance is permanent once consumed.",
      "endsWhen": "Invisibility ends if concentration is broken, or the drinker takes any other action that would end it.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Mirebrew's rarity and potent effects justify its price as an essential tool for adventurers seeking to outmaneuver their foes.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T22:26:49.482391+00:00",
    "aiReviewedAt": "2026-07-22T22:26:49.482391+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_gem": {
    "id": "mushroom_kingdom_item_gem",
    "name": "Shadowspore Orb of the Silent Throne",
    "description": "The Shadowspore Orb of the Silent Throne is a pulsating fungal gem that glows with an eerie, otherworldly light. Crafted from the dark heartwood of Wario Inc.'s throne, it whispers secrets of fear and resilience to those who wear it. When activated, it grants temporary immunity to fear effects for 15 seconds, allowing you to remain steadfast in the face of terror. The orb also absorbs 20% of incoming damage into its core, silently storing the energy until it can be discharged later.",
    "category": "equipment",
    "price": 1000,
    "icon": "💎",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Immunity to Fear",
      "Damage Absorption"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Fear",
        "rules": "When activated as a bonus action, this orb grants you immunity to fear effects for 15 seconds. This immunity does not stack with other similar immunities but can be used once per short rest."
      },
      {
        "title": "Damage Absorption",
        "rules": "Activating the orb absorbs 20% of any damage received into its core, reducing it to zero. You must wait until your next long rest for this energy to recharge."
      }
    ],
    "levelRequirementReason": "The Shadowspore Orb's dark magic is potent but not overly demanding, suitable for adventurers just beginning their journey.",
    "vendorReason": "The Mushroom Kingdom often deals in items that protect its citizens from the whims of Wario Inc., making this orb a fitting addition to their inventory.",
    "shippingDetail": "Ships with special care via Boo Spectral Mail, ensuring swift delivery and safe handling of the fragile yet powerful gem.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "15 seconds per activation",
      "endsWhen": "Ends when its duration expires or you take damage (reduces to zero)",
      "charges": "Unlimited, recharges at a long rest"
    },
    "priceReason": "The Shadowspore Orb's balance lies in its potent effects and the dark magic required for crafting it, making it a fair price for adventurers needing both resilience and protection.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T22:26:12.751645+00:00",
    "aiReviewedAt": "2026-07-22T22:26:12.751645+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_name": {
    "id": "mushroom_kingdom_item_name",
    "name": "Fungal Crown of the Vanished Sovereign",
    "description": "The Fungal Crown of the Vanished Sovereign weaves together the spiny remains of the last living princess, its woven filaments glowing faintly in the dark. It whispers the memory of forgotten battles and alliances, allowing you to summon a loyal ghostly ally who can mimic your voice or cast a single minor spell. When struck by harm, it enhances your defense, raising it by 15% for the remainder of the encounter. All allies within earshot gain a Royal Memory buff that grants them +10% health regeneration for three turns.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Crown’s Call",
      "Defensive Boost"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Crown’s Call",
        "rules": "As an action, you can summon a ghostly loyalist who mimics your voice and can cast one minor spell (determined by the GM). The ally remains for one turn. It has AC 15 and HP equal to half of its target level + Constitution modifier. If the ally takes damage, it vanishes."
      },
      {
        "title": "Defensive Boost",
        "rules": "If you take any amount of damage while wearing this crown, your defense increases by 15% until the end of the encounter. This effect can only activate once per short rest."
      }
    ],
    "levelRequirementReason": "Requires a player with at least 3 levels to manage and benefit from its ghostly ally.",
    "vendorReason": "The Mushroom Kingdom's arcane scholars are the only ones who understand the crown’s complex enchantments.",
    "shippingDetail": "Delivered by spectral couriers, the crown arrives in a sealed box that hums with ancient magic.",
    "usage": {
      "activation": "Action or reaction to summon Crown’s Call. Passively increases defense upon taking damage.",
      "duration": "Crown’s Call lasts for one turn; Defensive Boost until end of encounter.",
      "endsWhen": "The ally summoned by Crown’s Call vanishes when it takes any damage, and the defensive boost ends at the end of the encounter or if you remove the crown.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price considering its unique abilities to summon an ally and temporarily enhance defense.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:26:33.015279+00:00",
    "aiReviewedAt": "2026-07-22T22:26:33.015279+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_rod": {
    "id": "mushroom_kingdom_item_rod",
    "name": "Onyx Rod of the Shaded Court",
    "description": "The Onyx Rod of the Shaded Court is a staff hewn from the heartwood of an ancient mushroom palace, its surface etched with the dark sigils of Wario Inc.'s shadowy court. When swung, it channels spectral fungi that emerge in unison to strike down foes. This rod also grants a 20% chance for a shadowy teleport upon critical hit, and when used against a foe with 0 HP, it triggers an instant, lethal critical strike.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧟",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Spectral Fungal Assault",
      "Shadow Teleport on Critical"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spectral Fungal Assault",
        "rules": "Activate as a bonus action. Summons three spectral fungi that deal 50 necrotic damage each upon contact with an enemy. The effect lasts for 1 round, and the rod must be swung at least once per long rest."
      },
      {
        "title": "Shadow Teleport on Critical",
        "rules": "When a foe is reduced to 0 hit points by this weapon, there's a 20% chance that you are teleported to an unoccupied space within 5 feet of the fallen enemy. The teleport occurs instantaneously and does not provoke opportunity attacks."
      }
    ],
    "levelRequirementReason": "The Onyx Rod requires no level, but its effects are potent enough for even novice heroes.",
    "vendorReason": "Wario Inc. is known to supply rare artifacts from their mushroom kingdom, and this rod is a testament to their dark craftsmanship.",
    "shippingDetail": "The rod arrives wrapped in shadowy runes, ensuring it reaches its destination with the utmost secrecy.",
    "usage": {
      "activation": "Bonus action to summon spectral fungi; reaction for shadow teleport upon critical hit.",
      "duration": "Instantaneous and per long rest for spectral fungi activation.",
      "endsWhen": "Exhausts after one use or when the wielder rests, whichever comes first.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The rod's potent abilities and rarity justify a price of 1000 XP.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T22:26:42.054265+00:00",
    "aiReviewedAt": "2026-07-22T22:26:42.054265+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_sword": {
    "id": "mushroom_kingdom_item_sword",
    "name": "Fang of the Fungal Sovereign",
    "description": "The Fang of the Fungal Sovereign, a blade forged from the petrified remains of an ancient mushroom king, hums with the echo of forgotten battles. Its edges shimmer with the light of fungal growth and strike true against illusory foes, severing their roots before they can deceive. This weapon's edge is known to reduce poison resistance by half, making it a deadly choice for those who fight among the decaying heart of the forest.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Fungal Fury",
      "Illusion Severance"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Pipe Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Fungal Fury",
        "rules": "When you deal damage with this weapon, any creature affected by a poison has its resistance to poison reduced by 50% until the start of your next turn. This effect does not stack."
      },
      {
        "title": "Illusion Severance",
        "rules": "Once per short rest, as a bonus action, you can target one illusionary creature within 30 feet with a sharp strike from the Fang. The target must succeed on a DC 15 Dexterity saving throw or be shattered into harmless fragments, ending its illusory effects immediately."
      }
    ],
    "levelRequirementReason": "This weapon demands proficiency and experience to wield it effectively against the fungal foes that inhabit the Mushroom Kingdom.",
    "vendorReason": "The Mushroom Kingdom, a realm where mushrooms reign supreme, is the only place where such a blade can be forged and sold.",
    "shippingDetail": "Ships via Pipe Express, known for its reliable delivery through the fungal networks of the Mushroom Kingdom.",
    "usage": {
      "activation": "Bonus action or reaction (Illusion Severance)",
      "duration": "Instantaneous (Fungal Fury) / One use per short rest (Illusion Severance)",
      "endsWhen": "Charges depleted or after a short rest",
      "charges": "2 uses"
    },
    "priceReason": "The price reflects the unique materials and craftsmanship required to forge such a weapon, as well as its rarity within the Mushroom Kingdom.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T22:26:59.460531+00:00",
    "aiReviewedAt": "2026-07-22T22:26:59.460531+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_moss_shroud": {
    "id": "mushroom_kingdom_moss_shroud",
    "name": "Moss Shroud of the Whispering Fungi",
    "description": "The Moss Shroud of the Whispering Fungi is a cloak spun from the ancient moss that blankets the kingdom's oldest fungi. Its woven threads hum with the whispers of the earth, making it nearly invisible in dim fungal environments. The cloak not only grants you the ability to blend into your surroundings but also enhances your strikes against undead and fungal foes, dealing an extra 10% damage when they are within reach.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Invisible Cloak",
      "Enhanced Fungal Damage"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Invisible Cloak",
        "rules": "As a bonus action, you can activate the Moss Shroud to become invisible for up to 1 minute in dim light or within a fungal environment. This effect ends if you attack, cast a spell, or are incapacitated."
      },
      {
        "title": "Enhanced Fungal Damage",
        "rules": "While wearing the cloak and targeting undead or fungal creatures with melee attacks or spells, you deal an additional 10% damage to them. This bonus stacks with other sources of damage but cannot exceed a maximum of +30%. The effect ends if you leave a fungal environment."
      }
    ],
    "levelRequirementReason": "This cloak is designed for those who are already familiar with the kingdom's flora and fauna, requiring at least second-level proficiency.",
    "vendorReason": "Mushroom Kingdom has long been home to the oldest and most resilient fungi, making it a fitting place to sell this artifact.",
    "shippingDetail": "The cloak is carefully packed in moss-infused containers to preserve its magical properties during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 1 minute, or until you attack, cast a spell, or are incapacitated",
      "endsWhen": "You attack, cast a spell, or become incapacitated; ends at the start of your next turn if you leave a fungal environment",
      "charges": "Unlimited"
    },
    "priceReason": "The cloak's unique properties and the expertise needed to craft it justify its moderate price.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T22:27:03.328030+00:00",
    "aiReviewedAt": "2026-07-22T22:27:03.328030+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_moss_tear": {
    "id": "mushroom_kingdom_moss_tear",
    "name": "Moss Tear of the Verdant Throne",
    "description": "The Moss Tear of the Verdant Throne is a shimmering, tear-shaped shard embedded with resilient moss that glows faintly in the dark. Crafted from the sacred roots of ancient trees and imbued with the essence of the forest, this relic draws ambient light into its core, converting it to healing energy. When activated, it grants temporary hit points to allies within a 10-foot radius, offering protection in the heart of shadowy dungeons or moonless nights.",
    "price": 1000,
    "icon": "🌿",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Ambient Light Conversion",
      "Shadow Resistance"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ambient Light Conversion",
        "rules": "When activated as an action, this tear drains ambient light within a 10-foot radius and converts it into temporary hit points for all allies in the area. This effect lasts for 1 minute or until the ambient light is exhausted (up to 50 feet of light). The amount of HP granted equals 10% of the ambient light's intensity, capped at 200 temporary hit points."
      },
      {
        "title": "Shadow Resistance",
        "rules": "All allies within a 10-foot radius gain advantage on saving throws against spells and effects dealing shadow damage for 1 minute. This effect ends when it is replaced by another instance of Ambient Light Conversion or if the duration expires."
      }
    ],
    "levelRequirementReason": "This item can be used by characters with basic understanding of nature magic, making it accessible to lower-level adventurers.",
    "vendorReason": "The Mushroom Kingdom's herbalists are skilled in harvesting and crafting items from the forest's roots, including this rare moss tear.",
    "shippingDetail": "Shipped by the swift and invisible Rakasha messengers who deliver the item directly to your doorstep with no delay.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until ambient light is exhausted (up to 50 feet)",
      "endsWhen": "Replaced by another instance of Ambient Light Conversion or when the duration expires",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's rarity, magical properties, and the expertise required to craft it justify its moderate price.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T22:27:11.592735+00:00",
    "aiReviewedAt": "2026-07-22T22:27:11.592735+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_mushroom_ambush": {
    "id": "mushroom_kingdom_mushroom_ambush",
    "name": "Ambush Fungal Bloom",
    "description": "The Ambush Fungal Bloom is a deadly spore-infused flower that blooms in the Mushroom Kingdom's shadowy underbelly, its petals brimming with toxic life force. When stepped on or approached within five feet, it releases a cloud of paralyzing spores that blanket foes, leaving them motionless for three seconds. The ground around the bloom is laced with a faint trail of lingering spores, which can be tracked by enemies seeking to avoid further encounters.",
    "price": 1000,
    "icon": "🍄",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Spore Cloud",
      "Toxic Residue"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spore Cloud",
        "rules": "When activated by stepping on or approaching within five feet, the Ambush Fungal Bloom releases a cloud of toxic spores that paralyzes all enemies in a ten-foot radius for three seconds. The save DC is 15. This effect ends when the target successfully saves against it."
      },
      {
        "title": "Toxic Residue",
        "rules": "After activation, the ground around the bloom leaves behind a faint spore trail that lasts for 10 seconds. Enemies who walk on this trail must make a DC 15 Constitution saving throw or take 1d4 poison damage and be poisoned until the start of their next turn."
      }
    ],
    "levelRequirementReason": "This item is designed to be accessible for lower-level adventurers, as it serves as an effective tool in setting up ambushes.",
    "vendorReason": "The Mushroom Kingdom's denizens are well-acquainted with the flora and fauna of their underground realms, making them a reliable source for such dangerous items.",
    "shippingDetail": "This item is shipped discreetly via Shy Guy Smugglers; it typically arrives within two days, but delivery delays may occur in areas under heavy watch.",
    "usage": {
      "activation": "The bloom is activated by stepping on or approaching within five feet of it.",
      "duration": "Instantaneous with a duration of three seconds for the paralysis effect and ten seconds for the spore trail.",
      "endsWhen": "The paralysis effect ends when the target successfully saves against it, and the spore trail dissipates after ten seconds.",
      "charges": "Unlimited charges; the bloom regenerates its effects upon being reseeded."
    },
    "priceReason": "This price reflects a balanced XP value for an item that is both powerful and versatile, suitable for use in various combat scenarios without overbalancing the game.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T22:27:21.191437+00:00",
    "aiReviewedAt": "2026-07-22T22:27:21.191437+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_mushroom_amulet": {
    "id": "mushroom_kingdom_mushroom_amulet",
    "name": "Amulet of the Broken Crown",
    "description": "The Amulet of the Broken Crown is a pendant forged from the shattered crown of a long-dead princess, whose tragic story haunts the land. When worn, it instills a sense of defiance in the wearer and sows discord among foes, causing confusion that disrupts their combat precision. The amulet's power lies not only in its ability to restore morale but also to bring chaos into battle, making it both a source of strength and a weapon of disarray.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎭",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Restores Morale",
      "Sows Chaos"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Morale Restoration",
        "rules": "When the amulet is activated, the wearer gains +20 to morale checks for 1 hour. This effect does not stack with other sources of morale bonuses."
      },
      {
        "title": "Sow Chaos",
        "rules": "The wearer has a 20% chance to confuse an enemy within 30 feet when they make a melee attack or use a weapon against them. The confusion lasts for 1 minute, during which the target is incapacitated and cannot take actions."
      }
    ],
    "levelRequirementReason": "The amulet's dark magic requires a strong will to wield effectively.",
    "vendorReason": "Mushroom Kingdom’s blacksmiths are known for crafting items that reflect the kingdom's turbulent history, and this amulet is no exception.",
    "shippingDetail": "The item arrives in a custom box with a note from the Onyx Hand, hinting at its mysterious origins.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour or until used up",
      "endsWhen": "The effect ends if the wearer is incapacitated or when they remove the amulet",
      "charges": "2 charges; regains 1 charge after a long rest"
    },
    "priceReason": "The amulet's balance lies in its unique effects, which enhance both morale and introduce chaos without being overpowered.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T22:27:43.809954+00:00",
    "aiReviewedAt": "2026-07-22T22:27:43.809954+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_mushroom_bane": {
    "id": "mushroom_kingdom_mushroom_bane",
    "name": "Mushroom Bane of the Crimson Throne",
    "description": "The Mushroom Bane of the Crimson Throne is a crimson blade forged from the very essence of a fallen mushroom warlord. Its edge hums with malevolent energy, capable of dealing devastating blows to foes with low health. Each strike drains 20% of your hit points, but it also grants you a +3 bonus on attack rolls and critical hit chances increase by 15%. This weapon is perfect for the assassin seeking vengeance or those who wish to topple kings from their thrones.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗡",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Drains HP per Hit",
      "Critical Boost"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "HP Drain on Strike",
        "rules": "When you hit an enemy with this weapon, you take 20% of your current hit points as damage. This effect ends if you are reduced to 0 hit points."
      },
      {
        "title": "Critical Boost",
        "rules": "You gain a +3 bonus on attack rolls while wielding this weapon. This bonus does not stack with other bonuses and ends when you finish a short or long rest."
      }
    ],
    "levelRequirementReason": "Requires a character of at least level 5 to wield its malevolent power effectively.",
    "vendorReason": "The Mushroom Kingdom's blacksmiths understand the weapon's dark origins and craft it with care.",
    "shippingDetail": "Ships via Pipe Express, known for its punctuality in delivering dangerous goods.",
    "usage": {
      "activation": "On hit",
      "duration": "Instantaneous",
      "endsWhen": "You are reduced to 0 hit points or finish a short or long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The weapon's malevolent energy and unique crafting process justify its moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:27:16.821423+00:00",
    "aiReviewedAt": "2026-07-22T22:27:16.821423+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_mushroom_echo": {
    "id": "mushroom_kingdom_mushroom_echo",
    "name": "Echoing Fungal Gland",
    "description": "The Echoing Fungal Gland pulses with a haunting melody that resonates through the air, causing nearby enemies to lose focus and falter for 5 seconds. Crafted from the heartwood of ancient fungi by the enigmatic Purple Legion, its tune can be customized using a hidden key, allowing it to target specific frequencies. The melody's power draws upon the essence of the forest itself, sapping the vitality of those who hear it too long.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Sonic Disruption",
      "Fungal Drain"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Sonic Disruption",
        "rules": "When activated, the Echoing Fungal Gland emits a haunting melody that causes all enemies within a 10-foot radius to lose their focus for 5 seconds. This effect is not subject to spell resistance and has no saving throw. The melody can be tuned using the hidden key."
      },
      {
        "title": "Fungal Drain",
        "rules": "While the melody plays, all enemies within a 10-foot radius have their hit point regeneration reduced by 20% until the end of their next turn. This effect does not stack with other sources of regeneration reduction."
      }
    ],
    "levelRequirementReason": "The complexity and power of the Echoing Fungal Gland necessitate a minimum level to ensure players can handle its effects without overwhelming themselves.",
    "vendorReason": "The Mushroom Kingdom is renowned for its deep connection with nature, making it the ideal vendor for an item that draws power from ancient fungi.",
    "shippingDetail": "The item may take longer to ship due to its fragile nature, requiring special handling and delivery by Shy Guys.",
    "usage": {
      "activation": "Standard Action",
      "duration": "5 seconds",
      "endsWhen": "Targeted enemy makes a saving throw or the melody ends",
      "charges": "Limited Use; Recharges after a Long Rest"
    },
    "priceReason": "The Echoing Fungal Gland's rarity, crafted by the Purple Legion, and its unique sonic and regenerative effects justify a price of 1000 XP.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-22T22:27:41.591780+00:00",
    "aiReviewedAt": "2026-07-22T22:27:41.591780+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_mushroom_kingdom_maze_key": {
    "id": "mushroom_kingdom_mushroom_kingdom_maze_key",
    "name": "Mushroom Kingdom Maze Key",
    "description": "The Mushroom Kingdom Maze Key is a intricately crafted key forged by Chain Chomp Courier, designed to unlock the enigmatic maze that guards the Princess's hidden chamber. Upon use, it triggers a time loop effect, causing the user to relive their entry into the Feywild Court until they find the exit or rest for an hour. The key also reveals hidden paths within the maze, granting access to secret areas not visible by mere mortals.",
    "price": 1000,
    "icon": "🗝",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Time Loop Effect",
      "Reveals Hidden Paths"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Time Loop Effect",
        "rules": "When used near the Feywild Court, the key triggers a time loop effect. The user is forced to relive their entry into the court until they find the exit or rest for an hour. This effect has no save DC and can be triggered once per day."
      },
      {
        "title": "Reveals Hidden Paths",
        "rules": "Upon use, it reveals hidden paths within the Feywild maze that are not visible to non-maze users. The user gains advantage on perception checks while in the maze for 10 minutes."
      }
    ],
    "levelRequirementReason": "The key's complex enchantment requires a minimum character level of 1 to use effectively.",
    "vendorReason": "As the key is crafted by Chain Chomp Courier and specifically designed for the Princess's maze, it makes sense that Mushroom Kingdom would be the vendor.",
    "shippingDetail": "The key requires special handling due to its magical properties; it can only be shipped via Chain Chomp Courier.",
    "usage": {
      "activation": "Action",
      "duration": "Until exit or rest for an hour",
      "endsWhen": "Upon exiting the maze, resting for an hour, or using another key",
      "charges": "1/Day"
    },
    "priceReason": "The key's rarity and specific in-game utility justify its moderate price of 1000 XP.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-22T22:27:31.503355+00:00",
    "aiReviewedAt": "2026-07-22T22:27:31.503355+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_mushroom_madness": {
    "id": "mushroom_kingdom_mushroom_madness",
    "name": "Fungal Frenzy Amulet",
    "description": "The Fungal Frenzy Amulet bears a dark, pulsating core that glows faintly in the shadows of mushroom thickets. It grants its wearer temporary psychic control over nearby fungi and boosts stealth in forested zones, making it an assassin's dream. With each step, you can feel the ancient magic of the woods whispering to you, guiding your movements with eerie precision and granting you a +30% bonus to Stealth checks within mushroom thickets. The amulet also has a chilling effect; it paralyzes fungal enemies with a 20% chance on each successful hit, dealing an extra +15% damage to foes with fungal traits.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stealth Boost",
      "Fungal Paralysis"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Stealth Boost",
        "rules": "The amulet grants a +30% bonus to Stealth checks within mushroom thickets. This effect is passive and does not consume charges."
      },
      {
        "title": "Fungal Paralysis",
        "rules": "There's a 20% chance on each successful hit against fungal enemies that the target becomes paralyzed for 1 round. The amulet can only cause paralysis once per enemy per encounter, and it has no effect on non-fungal creatures."
      }
    ],
    "levelRequirementReason": "The Fungal Frenzy Amulet requires a minimum level of 5 to wield its dark magic effectively.",
    "vendorReason": "Mushroom Kingdom is well-known for its deep connection with fungal life, making it the perfect vendor for such an item.",
    "shippingDetail": "The amulet is shipped via the Void Drifter Relay, ensuring secure and timely delivery through the mystical routes of the underworld.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous (effects last until the end of your next turn or until the amulet's effects are interrupted).",
      "endsWhen": "The effects end when you lose concentration, are incapacitated, or the amulet is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "The Fungal Frenzy Amulet's price is balanced at 1000 XP due to its unique combination of stealth and magical effects that are both potent and specific.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:27:52.300208+00:00",
    "aiReviewedAt": "2026-07-22T22:27:52.300208+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_mushroom_maw": {
    "id": "mushroom_kingdom_mushroom_maw",
    "name": "Maw of the Whispering Root",
    "description": "The Maw of the Whispering Root is a colossal fungal mask that pulses with an eerie, bioluminescent glow when worn. Its whispers can drive even the bravest warriors to madness or surrender, leaving behind a lingering psychic echo that distorts vision and plagues the mind for moments afterward. This mask is said to have originated from the depths of the Whispering Forest, where it was forged by ancient fungal spirits seeking vengeance on those who wronged them long ago.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Psychic Echo",
      "Distorted Vision"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Psychic Echo",
        "rules": "When activated, the mask emits a whisper that instills fear in enemies within 30 feet. Targets must succeed on a DC 15 Wisdom saving throw or become frightened for 1 minute. This effect ends if the target moves out of range or is incapacitated."
      },
      {
        "title": "Distorted Vision",
        "rules": "For 2 seconds after activation, all creatures within 30 feet must make a DC 15 Wisdom saving throw or be blinded as their vision warps and distorts. This effect ends if the creature moves out of range."
      }
    ],
    "levelRequirementReason": "The Maw requires minimal arcane knowledge to operate, making it accessible for lower-level adventurers.",
    "vendorReason": "The Mushroom Kingdom is home to the ancient fungal spirits who crafted this mask, and they have entrusted their creation to their trusted allies.",
    "shippingDetail": "Carefully packed in a sealed, insulated container to maintain its bioluminescent glow.",
    "usage": {
      "activation": "Standard action",
      "duration": "Instantaneous effect; duration of the target's saving throw result",
      "endsWhen": "The target moves out of range or is incapacitated",
      "charges": "Unlimited, recharged by the mask's bioluminescent glow after 10 minutes"
    },
    "priceReason": "Balanced at 1000 XP as it provides a powerful fear effect and a short-term debuff, making it a valuable tool for lower-level parties.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T22:28:15.721606+00:00",
    "aiReviewedAt": "2026-07-22T22:28:15.721606+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_mushroom_shroud": {
    "id": "mushroom_kingdom_mushroom_shroud",
    "name": "Shadowcap Shroud",
    "description": "The Shadowcap Shroud is a dark cloak spun from the twisted essence of betrayed nobles. Its surface glistens with an eerie, unnatural luster in dim light, shimmering like twilight fog. Wear it and you vanish into the shadows; your enemies may sense you as a fleeting fear, but only if they are themselves noble or royal blood. Yet each passing minute saps your strength, leaving you drained of stamina until you can no longer bear its weight.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility in Dim Light",
      "Stamina Drain"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Invisibility in Dim Light",
        "rules": "You gain the benefits of the Invisibility spell, but only in dim light. The effect lasts until you use an action to end it or until your stamina is fully drained."
      },
      {
        "title": "Stamina Drain",
        "rules": "Each minute while wearing the cloak, you must make a Constitution saving throw (DC 15). On a failed save, you lose 2d4 stamina points. This effect ends when you remove the cloak or if your stamina is fully drained."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to manage the stamina drain and effectively use its stealthy abilities.",
    "vendorReason": "The Mushroom Kingdom's dark secrets are well-known, making this cursed item a fitting addition to their stock.",
    "shippingDetail": "Due to the cloak’s ethereal nature, it is shipped via the Void Drifter Relay, ensuring safe and quick delivery.",
    "usage": {
      "activation": "Instantaneous activation (you must be in dim light)",
      "duration": "Until you use an action to end it or until your stamina is fully drained",
      "endsWhen": "You remove the cloak or exhaust all stamina points",
      "charges": "Unlimited, regenerates with a full night’s rest"
    },
    "priceReason": "The Shadowcap Shroud combines stealth and fear effects with a unique stamina drain mechanic, making it a valuable yet balanced addition to any character's arsenal.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:27:57.938929+00:00",
    "aiReviewedAt": "2026-07-22T22:27:57.938929+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_mushroom_silence": {
    "id": "mushroom_kingdom_mushroom_silence",
    "name": "Silent Spore Cap",
    "description": "The Silent Spore Cap is a fungal cap that mutes all ambient noise within its 3-meter radius, making stealthy movements nearly silent. Worn by assassins and spies in Mushroom Kingdom’s crumbling halls, it grants the wearer an eerie quiet that confounds enemies. However, when active, the cap imposes a slight hindrance, reducing the wearer's movement speed by 10%. This cap is a rare find, perfect for those who require absolute silence in their missions.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Silent Step",
      "Stealth Aura"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silent Step",
        "rules": "While the Silent Spore Cap is active, the wearer does not make sound when moving. This effect has no duration and ends only when the cap is removed or the wearer's movement ceases."
      },
      {
        "title": "Stealth Aura",
        "rules": "Enemies within 3 meters of the wearer cannot hear their presence while the Silent Spore Cap is active. The cap provides a passive benefit, with no activation required and lasting until removed."
      }
    ],
    "levelRequirementReason": "This cap is designed for beginners to introduce stealth mechanics without high-level restrictions.",
    "vendorReason": "Mushroom Kingdom's vendors are accustomed to selling unique and rare items, including this cap that aids in espionage within their crumbling halls.",
    "shippingDetail": "Due to the delicate nature of the Silent Spore Cap, it is shipped via Shy Guy Smugglers for careful handling and delivery.",
    "usage": {
      "activation": "Passive effect upon donning the cap.",
      "duration": "Instantaneous; lasts until removed or movement stops.",
      "endsWhen": "The cap is removed or the wearer's movement ceases.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects a rare and useful item that balances stealth mechanics without being overpowered.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:27:59.215251+00:00",
    "aiReviewedAt": "2026-07-22T22:27:59.215251+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_mushroom_soul_shard": {
    "id": "mushroom_kingdom_mushroom_soul_shard",
    "name": "Mushroom Soul Shard",
    "description": "The Mushroom Soul Shard is a brittle, glowing fragment of the Princess's corrupted essence, embedded with fungal magic that thrives in darkened caverns and overgrown forests. When worn, it grants the wearer temporary resistance to psychic attacks and boosts morale by +30% in dim or fungal-infested zones, lending a sense of calm even in the most dire circumstances. This shard is a relic from the Mushroom Kingdom's darkest days, and its power waxes and wanes with the shifting light of the moon.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Psychic Resistance",
      "Enhanced Morale"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Psychic Resistance",
        "rules": "When worn, the shard grants a +20% bonus to saving throws against psychic damage. This effect lasts for an hour each day and is exhausted after use."
      },
      {
        "title": "Enhanced Morale",
        "rules": "Boosts morale in dim or fungal-infested zones by +30%, making allies more resilient and cooperative. This effect persists until the area's light changes or a significant event occurs, such as combat or discovery of new areas."
      }
    ],
    "levelRequirementReason": "The shard is crafted to be accessible for adventurers just beginning their journey.",
    "vendorReason": "The Mushroom Kingdom's Princess ensures that even the youngest heroes have access to her realm's magic.",
    "shippingDetail": "Ships via a spirit courier, arriving at night with an eerie glow.",
    "usage": {
      "activation": "Passive effect upon wearing; no activation required.",
      "duration": "1 hour per day, exhausted after use.",
      "endsWhen": "Exhausted after one use or when removed from the wearer.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The shard is crafted with rare fungal essences and requires intricate crafting by the Mushroom Kingdom's Princess, making it a mid-rare item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:28:49.074217+00:00",
    "aiReviewedAt": "2026-07-22T22:28:49.074217+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_mushroom_sword": {
    "id": "mushroom_kingdom_mushroom_sword",
    "name": "Sporefang Sword of the Fungal Throne",
    "description": "Sporefang Sword of the Fungal Throne is a blade forged from the heart of the cursed Mushroom King’s throne, its steel blackened by millennia of fungal decay and whispering forgotten decrees. Each swing shatters enemy defenses with a force that multiplies damage against undead foes by +30%, while reducing their defense by 10% for two turns. The sword's whispers are said to carry the king’s lost wisdom, but only those who have faced his throne can truly hear them.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Undead Damage Amplifier",
      "Temporary Defense Reduction"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Undead Damage Amplifier",
        "rules": "When the sword strikes an undead foe, it deals +30% extra damage. This effect lasts until the end of your next turn."
      },
      {
        "title": "Temporary Defense Reduction",
        "rules": "For 2 turns after a successful hit on an enemy, their defense is reduced by 10%. This effect ends when the target completes its next action or at the start of your next turn."
      }
    ],
    "levelRequirementReason": "This sword requires a level 7 character to wield effectively due to its cursed nature and complex enchantments.",
    "vendorReason": "The Mushroom Kingdom’s dark history and the sword's origins make it a fitting item for Onyx Hand, the kingdom’s most trusted blacksmith.",
    "shippingDetail": "Due to its cursed nature, this shipment requires special handling. The Shy Guys deliver it personally with a delivery delay of one week.",
    "usage": {
      "activation": "Instantaneous on contact with an enemy.",
      "duration": "Until the end of your next turn for 'Undead Damage Amplifier'; lasts for 2 turns after hit for 'Temporary Defense Reduction'.",
      "endsWhen": "At the start of your next turn or when the target completes its next action.",
      "charges": "Unlimited, recharges upon a short rest."
    },
    "priceReason": "The sword's balance in price is justified by its cursed nature and the complexity of its enchantments, which are not easily replicated or mastered.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T22:28:31.845696+00:00",
    "aiReviewedAt": "2026-07-22T22:28:31.845696+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_mushroom_tear": {
    "id": "mushroom_kingdom_mushroom_tear",
    "name": "Mushroom Tear of the Fallen Crown",
    "description": "The Mushroom Tear of the Fallen Crown is a fragile relic, split into two halves, each holding a shard of Princess Toadette's sorrow and resilience. Crafted from the torn crown she wore during her final moments, it splits when struck by enemy fire, releasing its protective essence. Wear one half to feel her pain and gain temporary emotional fortitude, while the other offers a shield against harm for those nearby.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Emotional Resilience",
      "Shield of Sorrow"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Toad Transit Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Emotional Resilience",
        "rules": "While wearing one half of the tear, you gain a +2 bonus to saving throws against fear and sadness-related effects. This effect lasts for 1 minute."
      },
      {
        "title": "Shield of Sorrow",
        "rules": "When the other half is worn, it grants an ally within 5 feet a +1 bonus to AC and a +10% chance to dodge attacks for 10 seconds after taking damage. This effect can only occur once per short or long rest."
      }
    ],
    "levelRequirementReason": "The tear requires a certain emotional maturity to wield its effects effectively.",
    "vendorReason": "As descendants of the Mushroom Kingdom, they hold many relics from their history and legends.",
    "shippingDetail": "Ships via Toad Transit Express with a 2-day delivery time.",
    "usage": {
      "activation": "Passive effect while wearing one half; ally's activation for the other half.",
      "duration": "Emotional Resilience lasts until the end of your next turn. Shield of Sorrow triggers once per short or long rest.",
      "endsWhen": "The effect ends when you remove the tear from yourself, or if it is struck by enemy fire and splits into two halves.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at this price considering its emotional and defensive benefits.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:28:25.532192+00:00",
    "aiReviewedAt": "2026-07-22T22:28:25.532192+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_mushroom_tear_bottle": {
    "id": "mushroom_kingdom_mushroom_tear_bottle",
    "name": "Mushroom Tear Bottle",
    "description": "The Mushroom Tear Bottle holds a single, shimmering tear from the Princess of Fungi's sorrow-stricken eyes. Crafted by the Mushroom King himself, this vial bestows upon its drinker heightened emotional resilience and an uncanny ability to uncover hidden secrets within fungal ruins. When consumed, it grants +20% evasion chance for one hour when fleeing or hiding, and reveals secret doors or hidden rooms in a 30-foot radius around the user.",
    "price": 1000,
    "icon": "💧",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Evasion Boost",
      "Secret Door Revealer"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Evasion Boost",
        "rules": "Drinking this vial grants the drinker a +20% chance to avoid being hit during their next flee or hide attempt. This effect lasts for one hour."
      },
      {
        "title": "Secret Door Revealer",
        "rules": "This effect allows the user to see through hidden doors and secret rooms within a 30-foot radius for ten minutes after consuming the vial. The user must make an Intelligence (Investigation) check, with a DC of 15, to successfully uncover these secrets."
      }
    ],
    "levelRequirementReason": "The emotional and investigative depth required by this item necessitates at least two levels of experience.",
    "vendorReason": "Only the Mushroom King's trusted couriers can deliver such a sacred relic to the worthy.",
    "shippingDetail": "The vial is delivered via spirit courier, ensuring it arrives in pristine condition without any physical form or trace of its journey.",
    "usage": {
      "activation": "Consumption",
      "duration": "One hour for evasion boost; ten minutes for secret door revelation",
      "endsWhen": "Effects expire naturally after the stated duration",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "Balanced price reflects both its rarity and the unique benefits it offers without overshadowing other items of similar level.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:28:57.541747+00:00",
    "aiReviewedAt": "2026-07-22T22:28:57.541747+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_mushroom_tears_of_the_princess": {
    "id": "mushroom_kingdom_mushroom_tears_of_the_princess",
    "name": "Tears of the Fallen Princess",
    "description": "The vial contains the last drops of Princess Peach's tears, now imbued with her unyielding spirit and resilience. When applied in combat, it grants a surge of emotional fortitude to allies, boosting their morale by +10% and enhancing their defense by +2 AC for the next 30 seconds. The vial also reveals hidden paths within shadowy areas, ensuring that no secret way lies undiscovered when darkness veils the land.",
    "price": 1000,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Emotional Resonance",
      "Reveal Hidden Paths"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Emotional Resonance",
        "rules": "Each ally within close combat gains a +10% morale bonus to their attack rolls and AC for 30 seconds. The effect ends if the user or an ally takes damage."
      },
      {
        "title": "Reveal Hidden Paths",
        "rules": "Upon application, the vial illuminates hidden pathways in shadowy areas with a +50% chance of revealing secret routes. This effect is instantaneous and does not require any action from the user."
      }
    ],
    "levelRequirementReason": "The artifact requires little mana to activate but still demands a basic level of focus.",
    "vendorReason": "Princess Daisy, known for her close ties with the fallen princess, keeps these vials as a tribute and keeps them in stock.",
    "shippingDetail": "The shipment is fast-tracked by Boo Specters, ensuring safe delivery within 24 hours of purchase.",
    "usage": {
      "activation": "Passive effect upon application. Requires a free hand to apply the vial.",
      "duration": "30 seconds per use",
      "endsWhen": "The duration ends if an ally or the user takes damage, or when the item is expended.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The vial's rarity and its dual benefit justify a price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T16:39:21.692823+00:00",
    "aiReviewedAt": "2026-07-23T16:39:21.692823+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_mycelium_blade": {
    "id": "mushroom_kingdom_mycelium_blade",
    "name": "Mycelium Blade of the Forgotten Fungi",
    "description": "The Mycelium Blade of the Forgotten Fungi is a razor-sharp weapon forged from ancient fungal networks, once part of an intricate web that connected the kingdom’s lost underground halls. Its bioluminescent core glows faintly in the dark, and when swung, it pulses with energy, cutting through even the strongest magical barriers. The blade hums with life, resonating with the very essence of forgotten fungi, making it a formidable tool against fungal foes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Cuts Through Magical Barriers",
      "Inflicts Extra Damage on Fungal Enemies"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Cuts Through Magical Barriers",
        "rules": "When you attack with the Mycelium Blade, it ignores the resistance of magical barriers. This effect can be used once per long rest."
      },
      {
        "title": "Inflicts Extra Damage on Fungal Enemies",
        "rules": "When you deal damage to a fungal creature, you gain an additional +1d6 damage. This effect has no cooldown but can only apply to one target per encounter."
      }
    ],
    "levelRequirementReason": "The blade requires the user to have reached at least third level to wield it effectively.",
    "vendorReason": "Mushroom Kingdom is home to the ancient fungi from which this blade was forged, and thus they are the custodians of such a powerful weapon.",
    "shippingDetail": "The Mycelium Blade arrives wrapped in protective fungal spores that ensure it remains intact during shipment.",
    "usage": {
      "activation": "As a bonus action, you can swing the blade to unleash its full potential.",
      "duration": "Instantaneous effect; ends when used or until your next short rest.",
      "endsWhen": "The effect ends if you attack again with another weapon before using this ability.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "The blade's rarity and unique properties justify its price, ensuring it remains a valuable asset to adventurers seeking to traverse the kingdom’s forgotten depths.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:29:28.652863+00:00",
    "aiReviewedAt": "2026-07-22T22:29:28.652863+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_mycelium_bottle": {
    "id": "mushroom_kingdom_mycelium_bottle",
    "name": "Mycelium Bottle of the Fallen Throne",
    "description": "The Mycelium Bottle of the Fallen Throne holds a fragment of the lost Princess's essence, imbued with the fungal heart of the Raventree forest. When consumed in combat, it grants the user temporary psychic resonance with her will, allowing them to channel her unyielding resolve and dodge attacks as if guided by her spirit. The bottle's contents are said to be a gift from the underworld itself, and its effects are limited only to those who can bear the weight of her lost legacy.",
    "price": 1000,
    "icon": "🍄",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Psychic Resonance",
      "Enhanced Dodging"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Psychic Resonance",
        "rules": "When consumed, this vial grants the user a temporary psychic connection with the Princess. For 15 seconds, the user gains +20% to attack rolls during combat and has a +15% chance to dodge enemy attacks. The effect ends when the duration expires or if the user takes damage."
      },
      {
        "title": "Enhanced Dodging",
        "rules": "The user gains a +15% chance to dodge any attack made against them while the psychic resonance is active. This bonus does not stack with other dodging abilities and is limited to once per turn."
      }
    ],
    "levelRequirementReason": "This item requires a certain level of mental fortitude and combat experience to wield its effects without suffering from the Princess's lost legacy.",
    "vendorReason": "The Mushroom Kingdom holds sacred relics that connect directly with their fallen monarch, making the Mycelium Bottle an artifact they are entrusted to sell.",
    "shippingDetail": "Delivered by the Rakasha's ghostly messengers who ensure the vial remains undisturbed until it reaches its recipient.",
    "usage": {
      "activation": "Consumed during combat as a bonus action.",
      "duration": "15 seconds, ending when the user takes damage or at the end of their next turn.",
      "endsWhen": "The duration expires or the user takes damage.",
      "charges": "Unlimited; restores after 24 hours."
    },
    "priceReason": "This item is priced fairly, considering its rarity and the mystical essence it contains, which can only be procured from the depths of Raventree.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:29:18.907398+00:00",
    "aiReviewedAt": "2026-07-22T22:29:18.907398+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_mycelium_sword": {
    "id": "mushroom_kingdom_mycelium_sword",
    "name": "Mycelium Blade of the Forgotten Throne",
    "description": "The Mycelium Blade of the Forgotten Throne is a sword forged from the ancient root networks of the Mushroom Kingdom. Its hilt glows faintly with an ethereal light, and its blade shimmers like living fungus. When wielded in combat, it grants invisibility to the user for 10 seconds following a successful strike, allowing them to slip through the shadows unnoticed. The blade also enhances critical hit chances by 25%, making every blow more deadly.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Invisibility upon Strike",
      "Enhanced Critical Hit Chance"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Invisibility Upon Strike",
        "rules": "When the wielder successfully hits an enemy with this sword, they gain invisibility for 10 seconds. This effect has no save DC and is limited to once per short or long rest."
      },
      {
        "title": "Enhanced Critical Hit Chance",
        "rules": "While wielding the Mycelium Blade of the Forgotten Throne, the wielder's critical hit chance increases by 25%. This bonus stacks with other sources of critical hit chances but does not exceed a maximum of +50%."
      }
    ],
    "levelRequirementReason": "This sword requires a minimum level of 3 to balance its powerful effects and ensure players are well-versed in combat.",
    "vendorReason": "The Mushroom Kingdom is known for its deep connection with the natural world, making it a fitting location for such an enchanted weapon.",
    "shippingDetail": "Delivered by Pipe Express, this blade arrives in pristine condition, sealed within a protective casing to preserve its magical integrity.",
    "usage": {
      "activation": "Instantaneous upon successful hit",
      "duration": "10 seconds of invisibility per strike",
      "endsWhen": "The effect ends when the wielder takes damage or is hit by an attack",
      "charges": "Unlimited, but limited to once per short or long rest"
    },
    "priceReason": "This sword offers a potent combination of invisibility and enhanced critical hits, making it a valuable asset for stealthy combatants. Its price reflects its rarity and power.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T22:29:12.311728+00:00",
    "aiReviewedAt": "2026-07-22T22:29:12.311728+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_phantom_fungus_potion": {
    "id": "mushroom_kingdom_phantom_fungus_potion",
    "name": "Phantom Fungus Elixir",
    "description": "The Phantom Fungus Elixir is a vial of glowing, spectral spores that shimmer faintly in the dark. This rare elixir grants the drinker temporary invisibility and silent movement, perfect for assassins seeking to strike unseen or espionage agents needing to blend into the shadows. Each sip consumes 10 HP, but the effects are fleeting—only a few moments of unseeable grace and unheard steps. Use it wisely in critical missions where stealth is paramount; once consumed, you must wait until your next long rest before using it again.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Silent Movement"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "The drinker becomes invisible for 15 seconds. This effect is triggered by consuming the potion and lasts until the duration ends or the drinker takes damage, at which point they become visible and lose any benefit of this effect."
      },
      {
        "title": "Silent Movement",
        "rules": "While under the effects of invisibility, the drinker moves silently for 5 seconds. This effect is triggered by consuming the potion and lasts until the duration ends or the drinker ceases moving in complete silence. If movement or sound occurs during this time, the effect is lost."
      }
    ],
    "levelRequirementReason": "The elixir's power requires a small sacrifice to unlock its abilities.",
    "vendorReason": "The Mushroom Kingdom has long been home to strange and wondrous fungi, making it the perfect place for this unique potion.",
    "shippingDetail": "Due to the volatile nature of the elixir, Pipe Express ensures safe handling with special cooling packs and expedited delivery.",
    "usage": {
      "activation": "Consumed as a bonus action",
      "duration": "15 seconds for invisibility; 5 seconds for silent movement",
      "endsWhen": "The duration ends or the drinker takes damage, ceases moving in silence, or uses another effect ending these abilities.",
      "charges": "Unlimited daily"
    },
    "priceReason": "The rare and potent ingredients used in crafting this elixir justify its high price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:29:42.771551+00:00",
    "aiReviewedAt": "2026-07-22T22:29:42.771551+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_pipe_tap_crimson": {
    "id": "mushroom_kingdom_pipe_tap_crimson",
    "name": "Crimson Pipe Tap",
    "description": "The Crimson Pipe Tap is a corroded valve crafted from crimson steel and enchanted with arcane magic. When triggered, it releases a thick mist of volatile vapor that can daze foes and hinder their movements for a brief moment. This ancient device was once part of the kingdom’s waterworks but now serves as a versatile tool in the hands of brave adventurers. Breathe through it underwater to gain temporary buoyancy, allowing you to explore submerged areas without any gear.",
    "category": "equipment",
    "price": 1000,
    "icon": "🚿",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Arcane Vapor Burst",
      "Underwater Breath"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Goomba Ground Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Arcane Vapor Burst",
        "rules": "When activated as a bonus action within 30 feet, the Crimson Pipe Tap releases a cloud of arcane vapor that imposes disadvantage on attack rolls made against you for 1 minute. This effect ends if you leave the cloud's area or if it dissipates."
      },
      {
        "title": "Underwater Breath",
        "rules": "Activate as a bonus action to allow the user to breathe underwater for up to 2 minutes without any equipment, though this ability is limited to once per short rest."
      }
    ],
    "levelRequirementReason": "Beginners can find value in this versatile tool, making it accessible early on.",
    "vendorReason": "The Mushroom Kingdom is known for its waterworks and magical artifacts, so the King of Tombs would be familiar with crafting such a device.",
    "shippingDetail": "Ships via Goomba Ground Delivery within one week, with free delivery in Mushroom Kingdom territories.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous for Arcane Vapor Burst; 2 minutes for Underwater Breath",
      "endsWhen": "Leaving the cloud area or end of short rest for respective effects; limited to one use per day",
      "charges": "Unlimited, but uses up a short rest"
    },
    "priceReason": "The balance accounts for its unique utility in combat and exploration, making it a fair price.",
    "priceOriginal": 500,
    "priceReviewedAt": "2026-07-22T22:29:33.714635+00:00",
    "aiReviewedAt": "2026-07-22T22:29:33.714635+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_poison_mushroom_seed": {
    "id": "mushroom_kingdom_poison_mushroom_seed",
    "name": "Poison Mushroom Seed of the Silent Fungi",
    "description": "The Poison Mushroom Seed of the Silent Fungi is a sinister, black seed that whispers secrets in the night. When planted, it grows into a towering spore cloud that lingers ominously over the battlefield. Any creature hit by its tendrils suffers not only from fungal poison but also gains an additional 20% damage from all sources for one hour. Once struck, the victim is marked with a lingering green taint that glows faintly under moonlight.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Inflicts Fungal Poison",
      "Increased Damage from All Sources"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fungal Poison",
        "rules": "When hit by the plant's tendrils, creatures are poisoned for one hour. This imposes a disadvantage on saving throws and increases damage taken from all sources by 20%. The effect ends upon taking a long rest."
      },
      {
        "title": "Increased Damage",
        "rules": "Any creature that is already under the effects of Fungal Poison gains an additional 50% damage increase to all attacks against them. This effect persists until the creature takes a long rest or successfully saves against the poison."
      }
    ],
    "levelRequirementReason": "This cursed seed can be planted and used by even the most novice adventurers, though it's best suited for those who understand its dangers.",
    "vendorReason": "The Mushroom King himself offers this item to travelers seeking a dark edge to their arsenal.",
    "shippingDetail": "Delivered under cover of darkness by spectral couriers, the seed arrives in its own protective casing.",
    "usage": {
      "activation": "Planted and grown by holding it for 3 seconds",
      "duration": "One hour per hit",
      "endsWhen": "Victim takes a long rest or successfully saves against poison",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to reflect its dark magic and the risk it poses.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:29:59.884485+00:00",
    "aiReviewedAt": "2026-07-22T22:29:59.884485+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_poisoned_fungal_dagger": {
    "id": "mushroom_kingdom_poisoned_fungal_dagger",
    "name": "Dagger of the Fungal Whisperer",
    "description": "The Dagger of the Fungal Whisperer is forged from a corrupted mushroom’s essence, its blade humming with residual psychic energy that disrupts enemy magic and poisons foes. Crafted in the shadowy depths of Mushroom Kingdom, this deadly weapon is favored by assassins who seek to silence their targets swiftly and silently. The dagger's edge whispers secrets of dark enchantments, making it a formidable tool for those who walk in the realm’s shadows.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Poisonous Strike",
      "Disrupt Spell"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Poisonous Strike",
        "rules": "When you hit with this dagger, the target must make a DC 14 Constitution saving throw. On a failed save, the target takes an additional 2d6 poison damage and is poisoned for 1 minute."
      },
      {
        "title": "Disrupt Spell",
        "rules": "As a bonus action, you can attempt to disrupt an enemy’s spellcasting by making a melee attack with this dagger. On a hit, the target must make a DC 14 Intelligence saving throw or lose its turn until it takes another action."
      }
    ],
    "levelRequirementReason": "This dagger's psychic energy and poison effects require a proficient user to channel effectively.",
    "vendorReason": "Mushroom Kingdom is known for crafting deadly yet elegant weapons from its corrupted flora, making the Dagger of the Fungal Whisperer an in-demand item there.",
    "shippingDetail": "Delivered by spectral couriers who ensure secrecy and speed through Mushroom Kingdom’s shadowy paths.",
    "usage": {
      "activation": "Bonus action to disrupt spellcasting or melee attack for poison effect",
      "duration": "Instantaneous; ends when used or expended",
      "endsWhen": "Used in a successful attack or spell disruption attempt, or expended after one use",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced as a rare item with potent effects that require skill to wield effectively.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T22:30:15.619921+00:00",
    "aiReviewedAt": "2026-07-22T22:30:15.619921+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_scarlet_sword": {
    "id": "mushroom_kingdom_scarlet_sword",
    "name": "Scarlet Spore Blade",
    "description": "The Scarlet Spore Blade gleams with a sinuous, blood-red light that dances like living fire. Crafted from the venomous spores of a cursed mushroom deep within the Mushroom Kingdom's toxic heart, this blade is a deadly whisper in the shadows. Its wielder feels a malevolent connection to the earth itself, and when struck, enemies are seized by a panic that leaves them vulnerable for moments. The sword's glow intensifies as danger nears, ensuring no threat can sneak past unnoticed.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Venomous Panics",
      "Sinuous Glow"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Venomous Panics",
        "rules": "When the Scarlet Spore Blade strikes an enemy, they must succeed on a DC 15 Dexterity saving throw or become frightened for 10 seconds. During this time, the target has disadvantage on attack rolls and ability checks."
      },
      {
        "title": "Sinuous Glow",
        "rules": "The blade emits a red glow that intensifies when enemies are within 30 feet of its wielder. This glow provides advantage on Perception checks related to detecting nearby foes."
      }
    ],
    "levelRequirementReason": "Wielding the Scarlet Spore Blade requires a familiarity with both the Mushroom Kingdom's dark magic and the sword, which is usually gained at level 5.",
    "vendorReason": "The Mushroom King himself oversees this blade's crafting to ensure only those who truly understand its power can wield it.",
    "shippingDetail": "Delivered through the Rakasha’s ethereal plane, ensuring swift and safe transport of the cursed blade.",
    "usage": {
      "activation": "Instantaneous on contact with an enemy",
      "duration": "10 seconds for Venomous Panics; duration ends when the effect is over or the target saves successfully",
      "endsWhen": "The panicked state ends after 10 seconds, the target saves successfully, or the blade ceases to strike enemies.",
      "charges": "Unlimited, but the blade requires a short rest to regain its glow"
    },
    "priceReason": "Balanced at 1000 XP due to its cursed nature and potent effects, making it a rare and valuable weapon.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-22T22:30:21.909184+00:00",
    "aiReviewedAt": "2026-07-22T22:30:21.909184+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_shadow_fungus_ointment": {
    "id": "mushroom_kingdom_shadow_fungus_ointment",
    "name": "Shadow Fungus Ointment of the Feywild",
    "description": "Shadow Fungus Ointment of the Feywild is a shimmering, iridescent gel extracted from the hidden veins beneath Raventree Manor. Applied to your skin, it enhances your perception of obscured paths and grants you temporary immunity to fear for 20 seconds. The ointment also allows you to discern enemy illusions with greater clarity, reducing their deceptive power by 10%. Its effects are said to be as ethereal as the Feywild itself.",
    "price": 1000,
    "icon": "💉",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Perception Boost",
      "Illusion Resistance"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Perception Boost",
        "rules": "When applied, this ointment grants you advantage on Perception checks to detect hidden paths for 1 minute. The effect ends if you take any hostile action."
      },
      {
        "title": "Illusion Resistance",
        "rules": "For the duration of 20 seconds after application, you have advantage on saving throws against illusions and can identify enemy illusions with a successful Intelligence (Arcana) check at a DC of 15. The effect ends if you are incapacitated or take any hostile action."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to effectively utilize the ointment's effects without being overwhelmed.",
    "vendorReason": "The Mushroom Kingdom has exclusive access to this fey artifact, as it is harvested from their manorial lands.",
    "shippingDetail": "Delivered via a Rakasha spirit courier, ensuring swift and reliable transport.",
    "usage": {
      "activation": "Apply the ointment to your skin (free action)",
      "duration": "1 minute for Perception Boost; 20 seconds for Illusion Resistance",
      "endsWhen": "Hostile action or incapacitation ends the effect",
      "charges": "Unlimited, regenerates after a short rest"
    },
    "priceReason": "Balanced price reflects its rarity and the unique extraction process from the Feywild.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:29:56.584829+00:00",
    "aiReviewedAt": "2026-07-22T22:29:56.584829+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_silence_sacred": {
    "id": "mushroom_kingdom_silence_sacred",
    "name": "Whispering Cap of the Silent Court",
    "description": "The Whispering Cap of the Silent Court is a mischievously crafted cap made from the softest, silken threads woven from the whispers of the ancient trees in the kingdom’s hidden groves. When donned, it muffles your footsteps to near silence and grants you the gift of truth—whispers that guide your path by revealing enemy intentions. It is the perfect companion for spies navigating the labyrinthine corridors of the Silent Court, where even the smallest sound can betray you.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧘",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% chance to evade detection",
      "Reveal enemy intentions with a successful Wisdom (Insight) check"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Evasion Bonus",
        "rules": "The cap provides a +30% chance to avoid being detected by enemies. This effect is passive and does not require an action."
      },
      {
        "title": "Reveal Intentions",
        "rules": "By making a successful Wisdom (Insight) check, the wearer can uncover the intentions of nearby enemies within 60 feet for 1 minute. The cap must be worn to use this effect."
      }
    ],
    "levelRequirementReason": "The cap's subtle enchantments are accessible to adventurers at any level who wish to enhance their stealth and insight.",
    "vendorReason": "The Mushroom Kingdom is renowned for its artisans who can craft items that blend practicality with the realm’s magical heritage.",
    "shippingDetail": "Delivered within a week, this cap comes directly from the heart of the kingdom's hidden groves.",
    "usage": {
      "activation": "Passive effect; no activation required. Requires wearing the cap to use the Insight check.",
      "duration": "Instantaneous for evasion bonus; lasts 1 minute for revealing enemy intentions",
      "endsWhen": "Dislodged or removed, or after one minute of using the Insight check",
      "charges": "Unlimited"
    },
    "priceReason": "The cap’s enchantments are crafted from rare materials and ancient knowledge, making it a valuable tool for any adventurer.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:30:25.945634+00:00",
    "aiReviewedAt": "2026-07-22T22:30:25.945634+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_soul_of_the_fungi": {
    "id": "mushroom_kingdom_soul_of_the_fungi",
    "name": "Fungal Heart of the Princess",
    "description": "The Fungal Heart of the Princess is a sacred relic, once worn by the last monarch of the Mushroom Kingdom. Its core glows faintly, pulsing in harmony with the fungal life around it. When donned, it emits a protective aura that heals allies in mushroom-infested zones and offers resilience against the kingdom's most virulent fungi. This heirloom, forged from the very earth itself, channels the last breath of the royal line into its core, ensuring the survival of those who wield it.",
    "price": 1000,
    "icon": "🌿",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Healing Aura",
      "Fungal Resistance"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Healing Aura",
        "rules": "The Fungal Heart grants a +10% chance to heal allies on hit within its radius. When an ally is targeted by an attack or spell in a mushroom-infested zone, the relic restores up to 50% of their maximum hit points (rounded down). This effect has no cooldown and can be used once per long rest."
      },
      {
        "title": "Fungal Resistance",
        "rules": "While wearing the Fungal Heart, characters receive a +10 bonus to saving throws against fungal attacks. Additionally, it grants immunity to poison damage from fungi. The effects last for 24 hours and are reset after each long rest."
      }
    ],
    "levelRequirementReason": "The Fungal Heart requires a minimum of three levels to ensure the wearer can benefit fully from its protective properties.",
    "vendorReason": "The Mushroom Kingdom's royal family continues to honor their ancestors by selling this sacred relic.",
    "shippingDetail": "Due to the delicate nature of the Fungal Heart, it is shipped via the Void Drifter Relay, ensuring safe and timely delivery.",
    "usage": {
      "activation": "Passive effect activated upon donning the relic; no activation required.",
      "duration": "24 hours per long rest",
      "endsWhen": "After a character completes a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The Fungal Heart’s price is set at 1000 XP, reflecting its rare nature and the kingdom's dedication to preserving this sacred relic.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:30:41.705347+00:00",
    "aiReviewedAt": "2026-07-22T22:30:41.705347+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_spoiled_mushroom_glove": {
    "id": "mushroom_kingdom_spoiled_mushroom_glove",
    "name": "Spoiled Mushroom Glove",
    "description": "The Spoiled Mushroom Glove, a tattered relic of Fawful's Fury, whispers dark secrets as it clings to your hand. Infused with the decaying essence of ancient fungi groves, this glove grants you stealth in shadowy fungal thickets but also releases a noxious aura that drains enemies' health by 10% for three rounds. Wearing it longer than five hours corrupts your constitution, reducing your hit points by 5 each hour after the initial five.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stealth in Fungal Thickets",
      "Enemy Health Drain"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Stealth in Fungal Thickets",
        "rules": "When you wear the Spoiled Mushroom Glove, you gain advantage on Dexterity (Stealth) checks within shadowy fungi groves. This effect lasts for 10 minutes."
      },
      {
        "title": "Enemy Health Drain",
        "rules": "For every hour beyond five hours of continuous wearing, enemies within a 30-foot radius suffer from a -2 penalty to their attack rolls and ability checks until the end of your next turn. This effect ends when you stop wearing the glove or are no longer in a shadowy fungi grove."
      }
    ],
    "levelRequirementReason": "Requires level 5 to wield, as the corruption risk is greater for lower-level characters.",
    "vendorReason": "The Mushroom Kingdom's black market deals in all manner of dark and twisted artifacts, including this relic of Fawful’s wrath.",
    "shippingDetail": "Ships via Pipe Express with a delivery delay of one week due to its hazardous nature.",
    "usage": {
      "activation": "Passive effect once worn; lasts until removed or the wearer leaves the shadowy fungi grove.",
      "duration": "10 minutes for stealth, ends when glove is removed or wearer leaves the grove.",
      "endsWhen": "Wearing time exceeds five hours (corruption begins) or you leave a shadowy fungi grove.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The glove's rarity, dark magic, and potential for corruption justify its moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:30:57.690314+00:00",
    "aiReviewedAt": "2026-07-22T22:30:57.690314+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_spoiled_princess_spirit_essence": {
    "id": "mushroom_kingdom_spoiled_princess_spirit_essence",
    "name": "Princess Spirit Essence",
    "description": "A vial containing the last breath of the fallen Princess Elara, a tragic relic from the Fungi Civil War. When siphoned during combat, it restores the wielder's health at the cost of their vitality. Each turn, the user feels the weight of this sacrifice as HP drains away. Infused with the sorrow and regret of the war, enemies struck by its essence falter, losing accuracy for a moment before their strength is drained.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Restores Health on Hit",
      "Drains User's Vitality"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Restores Health on Hit",
        "rules": "When the vial contacts an enemy during combat and deals damage, it restores 30% of the wielder’s maximum hit points. The effect is instantaneous upon contact."
      },
      {
        "title": "Drains User's Vitality",
        "rules": "For each turn following its activation, the user loses 10% of their current hit points. This effect lasts for a total of five turns and cannot be stopped by any means other than completing these five turns."
      }
    ],
    "levelRequirementReason": "The relic's powerful effects demand a certain mastery over combat to wield it effectively.",
    "vendorReason": "The Mushroom Kingdom holds this tragic artifact as a symbol of the civil war, offering it to those who seek to honor its memory and its lessons.",
    "shippingDetail": "Carefully packed with enchanted moss to protect the relic during transit.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous; lasts for five turns after activation",
      "endsWhen": "The duration ends after five turns or when the vial is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a rare item, this relic offers a potent but perilous ability that requires careful handling.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T22:31:15.561303+00:00",
    "aiReviewedAt": "2026-07-22T22:31:15.561303+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_spoiled_sacred": {
    "id": "mushroom_kingdom_spoiled_sacred",
    "name": "Spore of the Fallen Princess",
    "description": "The Spore of the Fallen Princess is a withered, crimson-spotted sac that radiates the mournful essence of a once-glorious kingdom now fallen. Crafted from the heartwood of an ancient mushroom tree and imbued with the spirit of a princess who chose to die with her crown, it absorbs ambient fungal magic, converting it into a tempest of offensive power. Upon activation, it unleashes a 5-second burst of spore-laden fury that leaves enemies reeling in mushroom-induced agony.",
    "price": 1000,
    "icon": "🍄",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Fungal Fury",
      "Mushroom Guard"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fungal Fury",
        "rules": "Upon activation, the user gains a +40% increase to damage against enemies with fungal traits for 5 seconds. This effect is instantaneous and does not require an action or reaction."
      },
      {
        "title": "Mushroom Guard",
        "rules": "For 3 seconds after activation, there is a +10% chance that a spectral mushroom guard will appear to aid the user in combat. The guard lasts for 5 rounds and provides +2 AC bonus to the user."
      }
    ],
    "levelRequirementReason": "The relic's potent magic requires no specific level, but the user must be capable of understanding its significance.",
    "vendorReason": "As a direct descendant of the fallen princess and guardian of her legacy, Mushroom Kingdom is entrusted with items that bear her memory.",
    "shippingDetail": "The item must be shipped under special conditions to prevent its spores from contaminating other cargo.",
    "usage": {
      "activation": "Instantaneous action",
      "duration": "5 seconds for Fungal Fury, spectral mushroom guard lasts 5 rounds",
      "endsWhen": "Upon expiration or when a save is successful (DC 14)",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity and the balance it brings to combat justify its price, ensuring it remains a valuable but not overpowered tool.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:30:53.309437+00:00",
    "aiReviewedAt": "2026-07-22T22:30:53.309437+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_spore_blade": {
    "id": "mushroom_kingdom_spore_blade",
    "name": "Spore Blade of the Crimson Veil",
    "description": "The Spore Blade of the Crimson Veil is a wickedly sharp blade forged from the very essence of the fallen Fungi Throne. Its glowing surface pulses with the dark vitality of ancient fungi, and each strike releases a cloud of spores that slow and weaken foes, making them easy targets for your next attack. Crafted by the Mushroom King himself, this weapon channels the power of nature's decay to turn enemies into their own worst nightmare.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Spore Release",
      "Weakened Target"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Spore Release",
        "rules": "On hit with a melee attack, the Spore Blade releases a cloud of spores. This cloud deals 20 damage to all creatures within 5 feet and imposes the Spore Infected condition on them for 3 turns (DC 16 Consave). The condition reduces movement speed by 50% and grants advantage on saving throws against being charmed."
      },
      {
        "title": "Weakened Target",
        "rules": "For 3 turns after applying the Spore Infected condition, enemies hit with melee attacks from you deal an additional 150% damage to them. This effect has a recharge time of 6 hours and can only be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Spore Blade requires the wielder to have reached at least Fifth Level to channel its dark fungal power effectively.",
    "vendorReason": "As a direct heirloom of the Fungi Throne, the Mushroom King is the only one who can properly create and sell such an artifact.",
    "shippingDetail": "Ships via the Void Drifter Relay; delivery may take up to two weeks due to its delicate nature.",
    "usage": {
      "activation": "Melee attack",
      "duration": "Instantaneous, with a recharge time of 6 hours after using it once per rest period",
      "endsWhen": "The effect ends when the creature is no longer within 5 feet of you or when the condition expires.",
      "charges": "1/short or long rest"
    },
    "priceReason": "Crafted by the Mushroom King, this weapon's price reflects its rarity and the exotic resources required for its forging.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:30:58.953762+00:00",
    "aiReviewedAt": "2026-07-22T22:30:58.953762+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_spore_bomb": {
    "id": "mushroom_kingdom_spore_bomb",
    "name": "Spore Bomb of the Silent Throne",
    "description": "The Spore Bomb of the Silent Throne is a volatile, fungal grenade crafted in the shadowy depths of Mushroom Kingdom. Its casing glows faintly with bioluminescent spores that whisper secrets of the forest. Upon activation, it unleashes a choking cloud that obscures vision and paralyzes attackers for three turns, disrupting any coordinated assault. The bomb's creators intended it as a covert tool to undermine enemy formations during stealth operations.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Inflicts Blindness",
      "Causes Choking"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Blindness",
        "rules": "Targets within 10 feet of the explosion are blinded for 3 turns. They have disadvantage on attack rolls, saving throws, and ability checks made before the start of their next turn until this effect ends."
      },
      {
        "title": "Choking",
        "rules": "Enemies in a 20-foot radius around the bomb are subjected to a choking cloud that lasts for 2 turns. They must make a DC 15 Constitution saving throw or be incapacitated by suffocation, taking 1d6 bludgeoning damage and losing their action on each of their turns until they succeed."
      }
    ],
    "levelRequirementReason": "Requires at least third-level proficiency to handle the bomb's volatile nature without injury.",
    "vendorReason": "Mushroom Kingdom vendors specialize in crafting and distributing such covert tools for their allies in the field.",
    "shippingDetail": "Ships via Pipe Express, which ensures timely delivery through its extensive network of underground tunnels.",
    "usage": {
      "activation": "Aim and throw as a bonus action. The bomb detonates on impact or after 10 seconds if unthrown.",
      "duration": "Instantaneous",
      "endsWhen": "The target either succeeds on the saving throw or is destroyed upon detonation.",
      "charges": "Unlimited, recharged by the user's next short rest."
    },
    "priceReason": "Balanced with a reduced effect duration and increased level requirement to ensure it remains a strategic tool rather than an overpowered item.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T22:31:36.849486+00:00",
    "aiReviewedAt": "2026-07-22T22:31:36.849486+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_spore_scream": {
    "id": "mushroom_kingdom_spore_scream",
    "name": "Spore Scream",
    "description": "The vial holds the mournful echo of a corrupted mushroom queen, her scream now bottled to fuel your team’s morale and summon fungal guardians. For two turns, you and your allies gain +30% attack power and +20% defense as the spores within the vial swirl with malevolent intent. Summoned guardians, each with 500 HP, join the fray, their fungal forms a stark contrast to the serene fields they once called home.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% Attack Power for 2 Turns",
      "Summon Fungal Guardians"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Morale Boost and Attack Power",
        "rules": "When consumed, Spore Scream grants all allies within a 10-foot radius +30% attack power and +20% defense for the duration of two turns. There is no save DC required."
      },
      {
        "title": "Summon Fungal Guardians",
        "rules": "Upon activation, the vial releases a cloud of spores that summon one fungal guardian with 500 hit points. These guardians are hostile to enemies and friendly to you for two turns. The guardians have an attack bonus equal to your level +4."
      }
    ],
    "levelRequirementReason": "This item is suitable for lower-level adventurers who can benefit from its morale-boosting effects without requiring a high-leveled team.",
    "vendorReason": "The Mushroom Kingdom vendor, known for their expertise in fungal biology and magic, offers this relic to enhance battlefield performance.",
    "shippingDetail": "Ships via Lakitu Drones, ensuring safe delivery within three days of purchase.",
    "usage": {
      "activation": "Consumed as a bonus action.",
      "duration": "Two turns.",
      "endsWhen": "The duration ends after two turns or when the vial is consumed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its rarity and the significant buffs it provides to a team’s combat capabilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:32:14.286040+00:00",
    "aiReviewedAt": "2026-07-22T22:32:14.286040+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_spore_shroud": {
    "id": "mushroom_kingdom_spore_shroud",
    "name": "Spore Shroud of the Fungal Vanguard",
    "description": "The Spore Shroud of the Fungal Vanguard is a cloak woven from ancient spores that weaves an invisible veil around its wearer. When activated, it emits a low-frequency hum that disrupts enemy targeting systems, rendering you nearly imperceptible to foes within a 15-foot radius for 30 seconds. The shroud's spore network also subtly confounds nearby enemies' senses, reducing their accuracy by 20%. This ancient relic hails from the Mushroom Kingdom and is crafted with precision by the Mushroom King's royal artisans.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌫",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Invisibility Cloak",
      "Targeting Disruption"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Invisibility Cloak",
        "rules": "Activates as a bonus action. Grants invisibility to the wearer within a 15-foot radius for 30 seconds, reducing your AC by 2 during this time. Ends when the duration expires or if you take any action other than movement. Requires concentration."
      },
      {
        "title": "Targeting Disruption",
        "rules": "While active, reduces the accuracy of enemies within a 15-foot radius by 20% for its duration. This effect has no save DC and does not require attack rolls against targets inside this area. The disruption ends if you lose concentration or take any action other than movement."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to wield the shroud's ancient magic effectively.",
    "vendorReason": "The Mushroom Kingdom is renowned for its expertise in fungal technology and magic, making it the only vendor of this relic.",
    "shippingDetail": "Ships via a Rakasha spirit courier who delivers the item with a 1-hour delay to ensure the spores are fully activated upon arrival.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "30 seconds",
      "endsWhen": "Concentration lost or any action other than movement taken",
      "charges": "Unlimited, recharges after a short rest"
    },
    "priceReason": "Balanced to reflect the item's epic rarity and potent effects without being overpowered.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-22T22:31:13.596388+00:00",
    "aiReviewedAt": "2026-07-22T22:31:13.596388+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_spore_siphon": {
    "id": "mushroom_kingdom_spore_siphon",
    "name": "Spore Siphon of the Fungal Throne",
    "description": "The Spore Siphon of the Fungal Throne is a delicate, crystalline device forged from the very heart of the Mushroom Kingdom's fungal network. Crafted by the enigmatic Shroomites during their wars against the Corruption, it siphons vital essence directly from the ground, granting temporary resistance to poison and decay. In combat, it also grants +15% damage against fungal enemies, making it a crucial tool for infiltrators navigating the war-torn Mushroom Kingdom's poisoned landscapes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Resistance to Poison and Decay",
      "Enhanced Fungal Damage"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Resistance to Poison and Decay",
        "rules": "Activates on activation, providing immunity to poison and decay effects for 10 minutes. Ends when the wearer is no longer in contact with fungal ground or when the wearer takes damage."
      },
      {
        "title": "Enhanced Fungal Damage",
        "rules": "Grants +15% bonus damage against fungal enemies on activation, lasting until the wearer leaves a contiguous area of fungal ground. Ends if the user is exposed to non-fungal terrain for more than 10 feet."
      }
    ],
    "levelRequirementReason": "Requires a character with some familiarity with the Mushroom Kingdom's ecosystems and fungal creatures.",
    "vendorReason": "The Mushroom Kingdom is the birthplace of this device, and only its native Shroomites can craft it.",
    "shippingDetail": "Delivered via a network of underground fungi that ensures swift delivery to the recipient.",
    "usage": {
      "activation": "Activates as an action. Must be in contact with fungal ground for full duration.",
      "duration": "10 minutes or until the wearer is no longer on fungal ground and takes damage.",
      "endsWhen": "Leaves a contiguous area of fungal ground or takes damage.",
      "charges": "Unlimited, recharges after 24 hours."
    },
    "priceReason": "Balanced to ensure it remains useful but not overpowered given its limited duration and specific utility against fungal threats.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:31:58.398055+00:00",
    "aiReviewedAt": "2026-07-22T22:31:58.398055+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_spore_torch": {
    "id": "mushroom_kingdom_spore_torch",
    "name": "Spore Torch of the Silent Queen",
    "description": "The Spore Torch of the Silent Queen is a war-torn torch forged from the ashes of the Fungi Civil War. Its flame crackles with deadly spores, and with each step, it releases a cloud that stuns nearby foes. Enemies within 5 meters are struck by its fiery breath, dealing 75 damage and leaving behind a trail of toxic spores that continue to deal 10 damage per turn to any enemy who steps on them.",
    "price": 1000,
    "icon": "🔥",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Deadly Breath",
      "Toxic Trail"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Deadly Breath",
        "rules": "When the user moves, they exhale a cloud of spores that stuns all enemies within 5 meters for 1 turn. This effect has no save DC and can be used once per long rest."
      },
      {
        "title": "Toxic Trail",
        "rules": "For every step taken after using Deadly Breath, the torch leaves behind a lingering cloud of spores that deal an additional 10 damage to any enemy who steps on it. This effect persists for up to 2 minutes and can be dispelled by magic."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to wield effectively due to the spell-like effects involved.",
    "vendorReason": "The Mushroom Kingdom's vendors are well-acquainted with the torch, as it is a symbol of their resilience against the Fungi Civil War.",
    "shippingDetail": "Ships via the Void Drifter Relay, ensuring safe and swift delivery to adventurers across Faerun.",
    "usage": {
      "activation": "As an action when moving.",
      "duration": "Instantaneous with a lingering effect.",
      "endsWhen": "Dispel magic or when the torch is destroyed.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its unique combination of damage and area-of-effect debuff.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T22:31:30.800112+00:00",
    "aiReviewedAt": "2026-07-22T22:31:30.800112+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_toad_blood": {
    "id": "mushroom_kingdom_toad_blood",
    "name": "Toadblood Pact",
    "description": "The Toadblood Pact is a vial sealed with the essence of a heroic toad who saved the Mushroom Kingdom. When invoked, it grants you immunity to melee attacks for ten seconds and imbues allies within hearing range with a surge of vitality that heals them by 20% of their maximum health. This ancient pact is said to be forged in the very heart of the kingdom's most sacred toads, ensuring its potency.",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Melee Immunity",
      "Healing Surge"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Melee Immunity",
        "rules": "When activated as a reaction to a melee attack, you gain temporary invincibility against that attack and all others for ten seconds. This effect ends if you take any damage or if the duration expires."
      },
      {
        "title": "Healing Surge",
        "rules": "Once per long rest, activate this vial as an action within hearing range of allies to heal each ally present by 20% of their maximum hit points. This effect has a cooldown of one hour between uses."
      }
    ],
    "levelRequirementReason": "This pact is accessible to all adventurers, though its power is reserved for those who have demonstrated valor and dedication.",
    "vendorReason": "The Mushroom Kingdom's royal apothecaries are entrusted with the most sacred artifacts of their realm, including the Toadblood Pact.",
    "shippingDetail": "Ships within three days via secure courier service.",
    "usage": {
      "activation": "reaction or action",
      "duration": "10 seconds / once per long rest",
      "endsWhen": "damage taken or duration expires",
      "charges": "unlimited (one use per long rest)"
    },
    "priceReason": "This rare vial is priced at 1000 XP, reflecting its potent properties and the toad’s selfless sacrifice for the kingdom.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T22:31:45.064688+00:00",
    "aiReviewedAt": "2026-07-22T22:31:45.064688+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_toad_prisoner_key": {
    "id": "mushroom_kingdom_toad_prisoner_key",
    "name": "Toad Prisoner Key",
    "description": "The Toad Prisoner Key is crafted from the bleached bones of a fallen toad, its surface etched with ancient runes. This key grants temporary immunity to poison for 3 turns and offers a rare chance to revive an ally who has died in combat, restoring them to full health if they have at least half their hit points remaining. However, its use sets off the Order's 'Crimson Retribution,' drawing their immediate attention.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Immunity to Poison",
      "Revive Ally"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Toad Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Poison Immunity",
        "rules": "The user gains immunity to poison for a duration of 3 turns. This effect is instantaneous upon use and has no save DC or range."
      },
      {
        "title": "Ally Revival",
        "rules": "Activates as a reaction when an ally dies in combat with at least half their hit points remaining. The revived ally regains all lost hit points. This effect can be used only once per encounter and triggers the Order's 'Crimson Retribution.'"
      }
    ],
    "levelRequirementReason": "Requires a minimum level to use this powerful item responsibly, ensuring players are capable of handling its effects.",
    "vendorReason": "The Mushroom Kingdom is well-connected with the Order and can secure rare items like this key.",
    "shippingDetail": "Ships via Toad Express, known for its reliability in delivering sensitive goods.",
    "usage": {
      "activation": "Reaction (used when an ally dies)",
      "duration": "Instantaneous; ends after use or if the user takes another reaction",
      "endsWhen": "Used or if the user takes another reaction action",
      "charges": "One-time use per encounter"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare nature and limited utility, ensuring it remains a strategic but not overpowered item.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T22:31:51.298459+00:00",
    "aiReviewedAt": "2026-07-22T22:31:51.298459+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_tongue_of_the_princess": {
    "id": "mushroom_kingdom_tongue_of_the_princess",
    "name": "Tongue of the Princess",
    "description": "The Tongue of the Princess is a relic from the fallen kingdom, its smooth surface etched with ancient runes that shimmer faintly. It grants temporary invisibility to the user for one round and reveals hidden truths about allies and enemies within 30 feet. Activating it requires a sacrifice of 500 HP and has a chance to cause diplomatic rifts among nearby factions. This artifact is a symbol of the princess's loyalty and betrayal, whispering secrets that can be both liberating and perilous.",
    "price": 1000,
    "icon": "🗡",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Invisibility",
      "Reveal Truths"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Mages Guild Portal",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "When activated as an action, the user becomes invisible for one round. This effect has a range of personal and ends when the user attacks or casts a spell."
      },
      {
        "title": "Reveal Truths",
        "rules": "Activates on a successful Wisdom (Insight) check against a DC of 15 within a 30-foot radius, revealing hidden truths about allies and enemies. The effect has a limited use once per campaign."
      }
    ],
    "levelRequirementReason": "This relic requires significant strength of will and resilience to activate its potent effects.",
    "vendorReason": "The Mushroom Kingdom holds many relics from its fallen sovereign, including the Tongue of the Princess.",
    "shippingDetail": "Delivered by a trusted courier who ensures safe handling and delivery to your doorstep.",
    "usage": {
      "activation": "Action",
      "duration": "One round (instantaneous effect)",
      "endsWhen": "User attacks or casts a spell, or after one round",
      "charges": "Unlimited"
    },
    "priceReason": "The relic is considered a rare and powerful tool that can significantly alter the course of battles.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T22:31:59.717974+00:00",
    "aiReviewedAt": "2026-07-22T22:31:59.717974+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_triforce_fragment": {
    "id": "mushroom_kingdom_triforce_fragment",
    "name": "Triforce Fragment",
    "description": "The Triforce Fragment, a glowing shard embedded in a cap of golden mushroom, hums with the echo of ancient Hyrulean magic. When summoned, it calls forth a sacred beast from one of Hyrule’s forgotten temples, its power resonating through the Pipe Network's decayed architecture. The fragment grants temporary blindness to the user during activation but ensures a clear vision into the reincarnation cycles of the Princess, offering glimpses of her many lives. Only those who have attuned themselves to both the Mushroom Kingdom and Hyrule can wield this relic of divine origin.",
    "price": 1000,
    "icon": "🌿",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Summons a sacred beast",
      "Grants temporary blindness"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Pianta Chuck Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Summon Sacred Beast",
        "rules": "As an action, the user can summon a sacred beast from one of Hyrule’s forgotten temples. The summoned creature is considered a magical beast and grants +2d6 to attack rolls against all creatures with the magical subtype. This effect lasts for 1 minute or until the creature is dismissed."
      },
      {
        "title": "Temporary Blindness",
        "rules": "During activation, the user becomes temporarily blind as if under the effects of a Cloudy Vision spell (save DC 15). The blindness ends after 1 round. There are no further save DCs required for this effect during its duration."
      }
    ],
    "levelRequirementReason": "Only those who have demonstrated expertise in both the Mushroom Kingdom and Hyrule lore can fully understand the Triforce Fragment's power.",
    "vendorReason": "Mushroom Kingdom is the birthplace of this relic, crafted by the Iron Legion during its peak.",
    "shippingDetail": "The delivery takes two days and requires a special courier to ensure the Triforce Fragment arrives intact.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until dismissed",
      "endsWhen": "The sacred beast is dismissed, or it dies during its duration",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced against other epic items of similar power and rarity.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T22:32:25.317139+00:00",
    "aiReviewedAt": "2026-07-22T22:32:25.317139+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_regency_fake_power_up_mushroom": {
    "id": "mushroom_regency_fake_power_up_mushroom",
    "name": "Mushroom Regency 'Power-Up' Mushroom",
    "description": "'Mushroom Regency 'Power-Up' Mushroom' is a deceptive red mushroom with white spots. It appears almost indistinguishable from its genuine counterpart, but upon closer inspection, you notice the subtle differences in texture and the faint smell of chemicals. This fake version grants temporary strength to those who consume it, giving them a brief surge of confidence and power. However, beware—this impostor might just be more than meets the eye, as there's always a risk of encountering a deadly poison variant among its ranks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Power Surge",
      "Toad Mockery"
    ],
    "vendor": "mushroom_regency",
    "shippedBy": "Goomba Ground Transport",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Power Surge",
        "rules": "Eating this mushroom allows you to gain 1d6 temporary hit points as a bonus action. The effect lasts for 1 minute. There's a 5% chance that consuming the mushroom results in a poison mushroom, requiring a Constitution saving throw with a DC of 13 or being poisoned for 1 round."
      },
      {
        "title": "Toad Mockery",
        "rules": "For the next minute after consuming this mushroom, you suffer disadvantage on Stealth checks due to your increased size and appearance. Additionally, you are subjected to disadvantage on Charisma (Persuasion) checks when interacting with mushroom folk, as they find your imposture amusing."
      }
    ],
    "levelRequirementReason": "This fake mushroom is designed for novices who might not be familiar with the nuances of genuine 'Power-Up' mushrooms.",
    "vendorReason": "Mushroom Regency Bootleggers are known for their clever forgeries, and this fake 'Power-Up' mushroom is a testament to their crafty methods.",
    "shippingDetail": "Delivered fresh, but with the risk of encountering a poison variant. Ensure you're prepared before consumption!",
    "usage": {
      "activation": "Bonus action to eat and gain temporary hit points; lasts for 1 minute.",
      "duration": "1 minute or until expended due to poison effect",
      "endsWhen": "The poison effect ends the duration prematurely if consumed, or it expires naturally after a minute.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This fake version is priced similarly to its genuine counterpart but offers lower quality and a higher risk of encountering a poison variant.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-22T22:32:18.277016+00:00",
    "aiReviewedAt": "2026-07-22T22:32:18.277016+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_regency_fungal_network_sub": {
    "id": "mushroom_regency_fungal_network_sub",
    "name": "Mushroom Regency Fungal Network Subscription",
    "description": "The Mushroom Regency Fungal Network Subscription grants you access to a vast underground network of fungal intelligence. By tapping into this network, you can communicate telepathically with other subscribers within one mile, sharing thoughts and information instantly. Additionally, the network provides local gossip, granting you advantage on Investigation checks when investigating fungal or forest environments. However, your affinity for the damp soil might prove troublesome; you suffer a disadvantage on saving throws against poison.",
    "category": "premium",
    "price": 1000,
    "icon": "🍄",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Telepathic Communication",
      "Local Gossip"
    ],
    "vendor": "mushroom_regency",
    "shippedBy": "Spore Cloud Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Telepathic Communication",
        "rules": "You can communicate telepathically with other subscribers within one mile. This effect is instantaneous and does not require an action to activate."
      },
      {
        "title": "Local Gossip",
        "rules": "When in a fungal or forest environment, you gain advantage on Investigation checks related to local knowledge. The advantage persists for the duration of your time spent in such environments."
      }
    ],
    "levelRequirementReason": "Requires minimal wizardry proficiency to understand and utilize the network.",
    "vendorReason": "Mushroom Regency Network founded this service to connect all fungal life in the region.",
    "shippingDetail": "Delivered directly by the network of spores, ensuring fast and reliable delivery.",
    "usage": {
      "activation": "Instantaneous effect; no activation required for communication or gaining advantage on checks.",
      "duration": "Effect lasts until you leave the area or are otherwise disconnected from the network.",
      "endsWhen": "Disconnection from the network or leaving the fungal environment.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price considering the utility and limited scope of the effects.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-22T22:32:12.120100+00:00",
    "aiReviewedAt": "2026-07-22T22:32:12.120100+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_regency_fungi_slicer": {
    "id": "mushroom_regency_fungi_slicer",
    "name": "Mushroom Regency Fungi Slicer",
    "description": "The Mushroom Regency Fungi Slicer is a curved knife meticulously crafted by Regency Knifemakers, renowned for their precision tools. Its blades are forged from a unique alloy that resists corrosion and dulling in damp environments, making it ideal for slicing the most delicate mushrooms without fear of contamination or spoilage. The knife's design allows for both efficiency and safety, ensuring even the most toxic fungi can be handled with confidence.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Precision Slicing",
      "Toxicity Safeguard"
    ],
    "vendor": "mushroom_regency_kitchen",
    "shippedBy": "Spore-Safe Sheath",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Precision Slicing",
        "rules": "When used to slice ingredients for a Dexterity check, the wielder gains advantage. Additionally, the knife prevents spoilage of any mushroom during preparation."
      },
      {
        "title": "Toxicity Safeguard",
        "rules": "The knife neutralizes the toxicity of any poisonous fungi, allowing safe handling without risk of poison. This effect lasts until the next long rest and only applies to one type of toxic fungus per use."
      }
    ],
    "levelRequirementReason": "Beginners in foraging or culinary arts can benefit from this tool's precision and safety features.",
    "vendorReason": "Mushroom Regency Kitchen specializes in tools that enhance the quality of life for their patrons, ensuring they have the best equipment for their tasks.",
    "shippingDetail": "Shipped securely to ensure the blades remain sharp and functional upon arrival.",
    "usage": {
      "activation": "As a bonus action during preparation of ingredients.",
      "duration": "Until the next long rest.",
      "endsWhen": "After neutralizing one type of toxic fungus.",
      "charges": "Unlimited, as the effect resets after a long rest."
    },
    "priceReason": "Balanced at this price to reflect its unique alloy and specialized craftsmanship without overpricing for its utility.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-22T22:32:31.248476+00:00",
    "aiReviewedAt": "2026-07-22T22:32:31.248476+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_regency_growth_shroom": {
    "id": "mushroom_regency_growth_shroom",
    "name": "Mushroom Regency Growth Shroom",
    "description": "The Mushroom Regency Growth Shroom is a peculiar toadstool with a glossy, iridescent cap and gills that shimmer faintly under moonlight. When consumed, it imbues you with a sudden growth spurt, making you towering in height for an hour. Your newfound size grants you a +10 bonus on Intimidation checks but imposes a -5 penalty to Dexterity (Stealth) rolls. Toadstool Cultivators have mastered the art of growing these fungi, ensuring their potency and safety.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Growth Spurt",
      "Enhanced Intimidation"
    ],
    "vendor": "mushroom_regency_pharmacy",
    "shippedBy": "Goomba Ground Transport",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Growth Spurt",
        "rules": "Once per short or long rest, you can eat this shroom to grow 1 foot taller for the next hour. You gain +5 temporary hit points while enlarged."
      },
      {
        "title": "Enhanced Intimidation",
        "rules": "While under the effect of Growth Spurt, you have advantage on all Intimidation checks and saving throws but disadvantage on Dexterity (Stealth) checks due to your increased size."
      }
    ],
    "levelRequirementReason": "The Mushroom Regency Growth Shroom is a simple elixir that can be consumed by any adventurer, regardless of level.",
    "vendorReason": "Mushroom Regency Pharmacy specializes in crafting and distributing items related to growth and transformation, making the shroom an ideal product for them.",
    "shippingDetail": "Delivered with Goomba Ground Transport, known for reliable delivery services within Mushroom Kingdom territories.",
    "usage": {
      "activation": "Eating the shroom",
      "duration": "1 hour (per rest)",
      "endsWhen": "At the end of each long or short rest",
      "charges": "Unlimited"
    },
    "priceReason": "The Mushroom Regency Growth Shroom is priced at 1000 XP, reflecting its uncommon status and the skill required to cultivate such fungi.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T22:32:34.254172+00:00",
    "aiReviewedAt": "2026-07-22T22:32:34.254172+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_regency_guard_uniform": {
    "id": "mushroom_regency_guard_uniform",
    "name": "Royal Mushroom Guard Uniform",
    "description": "The Royal Mushroom Guard Uniform is a meticulously crafted ensemble of emerald green and gold, bearing the emblem of the Mushroom Kingdom on its chest. This uniform not only commands respect from Toads but also subtly shifts perceptions, making you appear as an authority figure to all who see it. The fabric itself seems to shimmer with an ancient magic, woven from the very essence of the kingdom's flora.",
    "category": "equipment",
    "price": 1000,
    "icon": "👮",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "+2 Charisma (Intimidation) checks",
      "Appears as an authority figure in Mushroom Kingdom"
    ],
    "vendor": "Mushroom Regency",
    "shippedBy": "Tailored Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Intimidating Presence",
        "rules": "While wearing this uniform, you gain a +2 bonus to Charisma (Intimidation) checks against non-hostile Toads. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Authority Aura",
        "rules": "In Mushroom Kingdom, while wearing this uniform, you are treated as an authority figure by all locals. This effect lasts for 1 hour and ends when you remove the uniform."
      }
    ],
    "levelRequirementReason": "This uniform is designed to be accessible to adventurers at the beginning of their journey.",
    "vendorReason": "As a branch of the Royal Mushroom Guard, they are responsible for distributing these uniforms to ensure the peace and order within the kingdom.",
    "shippingDetail": "The uniform is delivered in pristine condition with a special delivery that ensures it arrives exactly as worn by the guard.",
    "usage": {
      "activation": "Passive effect upon donning the uniform",
      "duration": "Until removed or until resting",
      "endsWhen": "At the end of your next short or long rest, when you remove the uniform, or if you are no longer in Mushroom Kingdom",
      "charges": "Unlimited"
    },
    "priceReason": "The uniform's craftsmanship and the magical properties woven into it justify its modest price.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-22T22:33:19.835836+00:00",
    "aiReviewedAt": "2026-07-22T22:33:19.835836+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_regency_recipe_mystic_mushroom_risotto": {
    "id": "mushroom_regency_recipe_mystic_mushroom_risotto",
    "name": "Recipe: Mushroom Regency Mystic Mushroom Risotto",
    "description": "The Mushroom Regency Mystic Mushroom Risotto recipe is a culinary alchemy that transforms ordinary rice into a creamy, vision-tinged masterpiece. Each grain carries a fragment of the forest's secrets, granting heightened senses and a fleeting glimpse into otherworldly realms. Savvy diners may see floating spores, giving them a disadvantage against illusions for an hour, while their perception is enhanced, providing advantage on Perception checks. The risotto is not just food; it's a feast fit for connoisseurs, making the meal an unforgettable experience that leaves one craving for more.",
    "price": 1000,
    "icon": "📜",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Enhanced Senses",
      "Visionary Spores"
    ],
    "vendor": "mushroom_regency",
    "shippedBy": "Spore Cloud Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Senses",
        "rules": "When consumed, the risotto grants you advantage on Perception checks. This effect lasts for one hour and can be used once per short rest."
      },
      {
        "title": "Visionary Spores",
        "rules": "For an hour after consuming the risotto, you have disadvantage on saving throws against illusions. However, during this time, you gain the ability to see floating spores as they drift through your vision. This effect also lasts for one hour and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "This recipe is accessible to beginners but remains a rare treat.",
    "vendorReason": "Mushroom Regency Fine Dining specializes in the most unique and enchanting culinary experiences.",
    "shippingDetail": "Delivered by the Spore Cloud, this delicacy is known for its timely arrival, ensuring your meal is fresh and vibrant.",
    "usage": {
      "activation": "Eaten as a meal or snack",
      "duration": "One hour per use",
      "endsWhen": "After one hour or when consumed in another sitting",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The recipe's rarity and the unique effects it provides justify its modest price.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-22T22:33:37.924894+00:00",
    "aiReviewedAt": "2026-07-22T22:33:37.924894+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_regency_recipe_truffle_tea": {
    "id": "mushroom_regency_recipe_truffle_tea",
    "name": "Recipe: Mushroom Regency Truffle Tea",
    "description": "The Mushroom Regency Truffle Tea, a dark-brown concoction steeped from rare earth mushrooms and fermented in the shadowy catacombs beneath their estate, expands your mind, granting you advantage on Wisdom (Perception) checks for an hour. Sipping this tea also allows you to hold conversations with the mushrooms, who, despite their cryptic nature, share ancient wisdom. However, after drinking, your voice becomes squeaky for 10 minutes, a comical side effect that could prove embarrassing in certain social situations.",
    "price": 1000,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Wisdom (Perception) Advantage",
      "Converse with Mushrooms"
    ],
    "vendor": "mushroom_regency",
    "shippedBy": "Spore Cloud",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wisdom (Perception) Advantage",
        "rules": "You gain advantage on Wisdom (Perception) checks for one hour after drinking the tea. This effect ends when the duration expires."
      },
      {
        "title": "Converse with Mushrooms",
        "rules": "For 10 minutes, you can hold a conversation with any nearby mushrooms within 30 feet of you. They share cryptic, ancient knowledge but do not speak in a language comprehensible to most creatures. This effect ends when the duration expires."
      }
    ],
    "levelRequirementReason": "This tea's effects are mild enough for any adventurer to benefit from its wisdom and communication abilities without needing advanced skill levels.",
    "vendorReason": "The Mushroom Regency Tea House, known for their exotic blends of fungi and herbs, has mastered the art of creating teas that enhance one's perception and intellect.",
    "shippingDetail": "Delivered via the Spore Cloud, a network of fungal filaments that ensure your tea arrives fresh and potent.",
    "usage": {
      "activation": "飲用",
      "duration": "1小时 (Wisdom (Perception) Advantage), 10分钟 (Converse with Mushrooms)",
      "endsWhen": "Duration expires or the drinker stops consuming the tea.",
      "charges": "Unlimited"
    },
    "priceReason": "The rare ingredients and ancient brewing methods used in this tea justify its moderate price.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T22:33:11.676556+00:00",
    "aiReviewedAt": "2026-07-22T22:33:11.676556+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_regency_spore_mask_premium": {
    "id": "mushroom_regency_spore_mask_premium",
    "name": "Mushroom Regency Spore Mask (Premium)",
    "description": "The Mushroom Regency Spore Mask (Premium) is a sleek, ventilated cap crafted by Toad Tailors from resilient fungal fibers. Its iridescent spore-filtering membrane ensures you breathe clean air in toxic environments. The mask's stylish design makes it a favorite among mushroom enthusiasts and explorers alike. It grants you an advantage on Perception checks within fungal biomes and immunity to spore-based poisons for 24 hours, ensuring your safety and comfort.",
    "price": 1000,
    "icon": "🍄",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Spore Poison Immunity",
      "Advantage in Fungal Environments"
    ],
    "vendor": "mushroom_regency_outfitters",
    "shippedBy": "Spore Cloud Express Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spore Poison Immunity",
        "rules": "You gain immunity to any poison caused by spores for 24 hours after activation. This effect does not stack with other forms of poison immunity."
      },
      {
        "title": "Advantage in Fungal Environments",
        "rules": "While wearing the mask, you have advantage on Perception checks related to fungal environments or creatures within such areas."
      }
    ],
    "levelRequirementReason": "The mask's advanced filtration technology and design are accessible to adventurers of any level.",
    "vendorReason": "Mushroom Regency Outfitters specializes in gear for fungal expeditions, making their masks a staple among explorers and mushroom hunters.",
    "shippingDetail": "Orders are delivered within a week via the Spore Cloud's reliable courier service. The mask is shipped in a protective case to ensure it arrives pristine.",
    "usage": {
      "activation": "Activate as a bonus action by placing the mask on your head and inhaling deeply.",
      "duration": "Instantaneous effect; immunity lasts for 24 hours, advantage lasts until the end of your next long rest.",
      "endsWhen": "The effect ends when the duration expires or you remove the mask.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this mask offers a significant advantage in fungal environments and provides essential protection against spore-based poisons.",
    "priceOriginal": 13000,
    "priceReviewedAt": "2026-07-22T22:33:00.447733+00:00",
    "aiReviewedAt": "2026-07-22T22:33:00.447733+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_regency_spore_network_troubleshooting": {
    "id": "mushroom_regency_spore_network_troubleshooting",
    "name": "Mushroom Regency Spore Network Troubleshooting",
    "description": "This small, glowing spore network troubleshooter is crafted from resilient mushroom mycelium. It hums softly as it scans and repairs fungal networks, ensuring smooth communication even in the most challenging conditions. With this device, you gain advantage on checks related to mushrooms or similar fungal environments, making you a go-to expert for all things mushroom-related. Your sense of humor also improves; you now have advantage on pun-based interactions, but might inadvertently distract yourself from more serious tasks.",
    "category": "services",
    "price": 1000,
    "icon": "🍄",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Advantage on checks in mushroom-rich areas",
      "Advantage on puns"
    ],
    "vendor": "mushroom_regency",
    "shippedBy": "Spore Packet Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mushroom Network Repair",
        "rules": "When you use this device to repair a fungal network, it provides advantage on the relevant check. The effect lasts until the next long rest."
      },
      {
        "title": "Enhanced Humor",
        "rules": "You gain advantage on interactions involving puns or similar humor. This benefit lasts for 1 hour per use."
      }
    ],
    "levelRequirementReason": "It's a simple tool that requires no specific level to operate, but may be more useful in later stages of the campaign.",
    "vendorReason": "Mushroom Regency is the leading authority on all things fungal and naturally provides tools for maintaining their networks.",
    "shippingDetail": "Delivered via a trusted spore packet courier, ensuring fast and safe delivery to your door.",
    "usage": {
      "activation": "A bonus action to activate and repair a fungal network or gain the benefits of humor enhancement.",
      "duration": "Until next long rest for repairs; 1 hour per use for humor benefit",
      "endsWhen": "Exhaustion, upon completion of task, or after 1 hour",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item is priced at a reasonable cost given its utility and the specialized materials used in its creation.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-22T22:33:16.484092+00:00",
    "aiReviewedAt": "2026-07-22T22:33:16.484092+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_regency_spore_pouch": {
    "id": "mushroom_regency_spore_pouch",
    "name": "Mushroom Regency Spore Pouch",
    "description": "The Mushroom Regency Spore Pouch is a small leather pouch containing a few dozen bioluminescent spores. When inhaled, these glowing spores invigorate the body and mind, temporarily bolstering vitality and focus. After a deep breath, you feel an immediate surge of energy and a clarity that sharpens your reflexes. However, should this burst of vitality fail to support you during a critical moment, it can leave you vulnerable for a short time.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍄",
    "stock": 15,
    "rarity": "rare",
    "effects": [
      "Burst of Vitality",
      "Temporary Vulnerability"
    ],
    "vendor": "mushroom_regency",
    "shippedBy": "Spore-Proof Jar",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Burst of Vitality",
        "rules": "Inhale as a bonus action. You gain 10 temporary hit points and an additional +5 to your next initiative roll, which lasts until the start of your next turn."
      },
      {
        "title": "Temporary Vulnerability",
        "rules": "If you fail a Constitution saving throw (DC 13) within 1 minute after using this item, you are poisoned for 1 round. This effect ends immediately if you succeed on another saving throw against poison or if the poison's duration expires."
      }
    ],
    "levelRequirementReason": "This simple yet effective potion requires no specific expertise to use.",
    "vendorReason": "Mushroom Regency is renowned for its extensive knowledge of fungi and their properties, making them the perfect vendor for such a product.",
    "shippingDetail": "Shipped in a specially designed jar to ensure the spores remain active until use.",
    "usage": {
      "activation": "Inhale as a bonus action.",
      "duration": "Instantaneous effect, lasting only until your next turn unless you succeed on another saving throw against poison or if its duration expires.",
      "endsWhen": "The temporary hit points and initiative boost expire at the start of your next turn. The poison effect ends immediately upon succeeding a saving throw or if the poison's duration expires.",
      "charges": "Unlimited, as the spores are replenished with each use."
    },
    "priceReason": "The pouch is crafted from rare leather and contains bioluminescent spores that are difficult to cultivate, justifying its moderate price in XP.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T22:33:30.212351+00:00",
    "aiReviewedAt": "2026-07-22T22:33:30.212351+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_regency_spore_sprouter": {
    "id": "mushroom_regency_spore_sprouter",
    "name": "Mushroom Regency Spore Sprouter",
    "description": "The Mushroom Regency Spore Sprouter is a sleek metal device with a glass chamber that hums softly as it dispenses spores. Crafted by the Mushroom Regency Cultivators, this sprouter instantly activates upon contact with mushroom spores, allowing you to grow mushrooms in mere minutes. It’s a valuable tool for chefs and alchemists alike, ensuring they have fresh ingredients at their fingertips. However, its design is not without drawbacks; while it speeds up growth, the spore-laden air around you can hinder your ability to move stealthily.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Instant Mushroom Growth",
      "Sporadic Spores"
    ],
    "vendor": "mushroom_regency",
    "shippedBy": "Spore Cloud Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Mushroom Growth",
        "rules": "Activates on contact with mushroom spores, growing mushrooms in seconds. This effect is instantaneous and does not consume charges or require an action."
      },
      {
        "title": "Sporadic Spores",
        "rules": "You are covered in spores for the duration of 1 hour after using the sprouter. During this time, you have disadvantage on Dexterity (Stealth) checks."
      }
    ],
    "levelRequirementReason": "This item is designed to be accessible early in a character's journey to ensure it can be used effectively for both exploration and resource gathering.",
    "vendorReason": "Mushroom Regency Cultivators are known for their innovative tools that aid in the cultivation of mushrooms, making this sprouter one of their most popular items.",
    "shippingDetail": "The Spore Cloud Courier Service ensures swift delivery with guaranteed freshness, especially important for perishable goods like mushroom spores.",
    "usage": {
      "activation": "Contact with mushroom spores",
      "duration": "Instantaneous growth; spores last 1 hour",
      "endsWhen": "Spores dissipate after an hour or if the sprouter is destroyed",
      "charges": "Unlimited, as long as spores are available"
    },
    "priceReason": "The balanced price reflects its utility in both combat and resource gathering without granting overpowered abilities.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T22:33:32.501356+00:00",
    "aiReviewedAt": "2026-07-22T22:33:32.501356+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_regency_toad_cap_hat": {
    "id": "mushroom_regency_toad_cap_hat",
    "name": "Mushroom Regency Toad Cap Hat ",
    "description": "The Mushroom Regency Toad Cap Hat is a whimsical floppy hat shaped like a toadstool, crafted from soft mushroom fibers and adorned with tiny spores that shimmer faintly in the light. This hat not only grants you an advantage on Nature checks when navigating fungal growths but also subtly attracts beneficial fungi, causing your scalp to occasionally itch. Crafted by the skilled Toad Milliners of Mushroom Regency Village, this hat is a delightful addition for adventurers seeking to enhance their connection with the wilds.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎩",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Nature's Advantage",
      "Fungi Attraction"
    ],
    "vendor": "mushroom_regency_village",
    "shippedBy": "Spore-Dusted Box",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Nature's Advantage",
        "rules": "You gain advantage on Wisdom (Nature) checks when in areas of mushroom growth. This effect does not stack with other sources of advantage on these checks."
      },
      {
        "title": "Fungi Attraction",
        "rules": "Once per day, you can draw nearby fungi to you as an action, causing a 1d4 temporary hit point healing effect. You must remain in the same location for at least one minute after using this ability before it can be used again."
      }
    ],
    "levelRequirementReason": "This hat provides a moderate benefit to adventurers who are already proficient with nature checks.",
    "vendorReason": "The Toad Milliners of Mushroom Regency Village are renowned for their expertise in crafting hats and headwear that harmonize with the natural world.",
    "shippingDetail": "This box is specially designed to keep the hat's spores alive during transit, ensuring it arrives fresh and vibrant.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous for Nature's Advantage; Fungi Attraction lasts until the start of your next turn after using it.",
      "endsWhen": "The effect ends if you are no longer in a mushroom growth area or if you move more than 30 feet away from the hat’s location.",
      "charges": "Unlimited, but once per day for Fungi Attraction."
    },
    "priceReason": "The hat's balanced price reflects its unique benefits and the expertise of the Toad Milliners in crafting it.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T22:33:36.640434+00:00",
    "aiReviewedAt": "2026-07-22T22:33:36.640434+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_regency_toadstool_bread_recipe": {
    "id": "mushroom_regency_toadstool_bread_recipe",
    "name": "Recipe: Mushroom Regency Toadstool Bread",
    "description": "This recipe for Mushroom Regency Toadstool Bread calls for a unique blend of safe, golden toadstools and hearty flour, baked in a rustic oven until the bread is golden brown and fragrant with earthy mushrooms. The resulting loaf not only heals minor wounds but also grants its eater an advantage on Constitution saving throws against poisons, ensuring the baker's friends are well-protected from toxins. Toads in the nearby meadow can sense this delightful aroma and will offer their assistance or companionship to those who partake of the bread.",
    "price": 1000,
    "icon": "🍞",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Bread Healing",
      "Poison Resistance"
    ],
    "vendor": "mushroom_regency_kitchen",
    "shippedBy": "Doughy Document",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bread Healing",
        "rules": "Eating a slice of Mushroom Regency Toadstool Bread heals 1d4 hit points. The bread can only be used once per day."
      },
      {
        "title": "Poison Resistance",
        "rules": "For the next six hours after eating a slice, the recipient gains advantage on Constitution saving throws against poison effects. This effect does not stack with other sources of similar benefits."
      }
    ],
    "levelRequirementReason": "This recipe is simple enough for even novice bakers to follow but still offers significant value.",
    "vendorReason": "Regency Bakers are renowned for their safe and delicious mushroom products, ensuring this bread is both tasty and harmless.",
    "shippingDetail": "The bread is shipped in a special, insulated container to ensure it arrives fresh and ready to bake.",
    "usage": {
      "activation": "Eating one slice of the baked loaf",
      "duration": "Instantaneous healing; poison resistance lasts for six hours",
      "endsWhen": "Once per day limit reached or after six hours",
      "charges": "Unlimited, as long as ingredients are available"
    },
    "priceReason": "The recipe is valuable due to the unique ingredients and the healing effect it provides.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T22:33:51.708306+00:00",
    "aiReviewedAt": "2026-07-22T22:33:51.708306+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_regency_wario_cap_mushroom": {
    "id": "mushroom_regency_wario_cap_mushroom",
    "name": "Mushroom Regency Wario Cap Mushroom",
    "description": "The Mushroom Regency Wario Cap Mushroom is a whimsical cap-mushroom that resembles Wario's signature hat. Crafted with regal mushrooms and enchanted by Mushroom Regency, this edible trinket grants you +1 Charisma when speaking to fans of the Mushroom Kingdom. However, it imposes disadvantage on Charisma checks with non-fans, as they find your choice of accessory peculiar at best. A quirky relic from the haute mushroom couture house, this cap-mushroom is a delightful addition for those who want to make a statement without leaving the kitchen.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Charisma Boost with Fans",
      "Disadvantage with Non-Fans"
    ],
    "vendor": "mushroom_regency",
    "shippedBy": "Goomba Ground Transport",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost with Fans",
        "rules": "When you are speaking to fans of Wario or the Mushroom Kingdom, you gain a +1 bonus to Charisma checks and saving throws. This effect lasts until the start of your next turn."
      },
      {
        "title": "Disadvantage with Non-Fans",
        "rules": "You have disadvantage on all Charisma checks when interacting with individuals who are not fans of Wario or the Mushroom Kingdom. This effect persists for 1 minute after you remove the cap-mushroom from your head."
      }
    ],
    "levelRequirementReason": "This cap-mushroom is designed for beginners and casual players.",
    "vendorReason": "Mushroom Regency specializes in whimsical and practical mushroom-based accessories, making the Wario Cap Mushroom a natural addition to their collection.",
    "shippingDetail": "Delivered fresh with a complimentary Goomba mascot pin.",
    "usage": {
      "activation": "None; it becomes effective when worn on your head and ceases when removed.",
      "duration": "Instantaneous activation, lasting effects until the start of your next turn or 1 minute after removal, whichever comes first.",
      "endsWhen": "The effect ends when you remove the cap-mushroom from your head.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects its common rarity and charming functionality.",
    "priceOriginal": 4400,
    "priceReviewedAt": "2026-07-22T22:33:46.865005+00:00",
    "aiReviewedAt": "2026-07-22T22:33:46.865005+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_regency_wario_fungus": {
    "id": "mushroom_regency_wario_fungus",
    "name": "Mushroom Regency Wario Fungus",
    "description": "The Mushroom Regency Wario Fungus looks uncannily like a miniature version of Wario's bulbous nose, complete with a slight green hue. When consumed, it temporarily warps your facial features and olfactory senses. Your nose balloons to an absurd size, giving you disadvantage on Charisma checks for one hour, but enhances your sense of smell, granting advantage on Perception checks related to detecting scents. The fungus' unique aroma lingers in the wind, making it difficult to move stealthily; thus, you suffer a penalty to Stealth checks when the breeze is present.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Nose Whopper",
      "Enhanced Smell"
    ],
    "vendor": "mushroom_regency",
    "shippedBy": "Goomba Ground Transport",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Nose Whopper",
        "rules": "Eating this fungus causes your nose to grow significantly, giving you disadvantage on Charisma (Personality) checks and Insight checks for one hour. This effect is instantaneous upon consumption."
      },
      {
        "title": "Enhanced Smell",
        "rules": "For the same duration as 'Nose Whopper', you gain advantage on Perception checks related to detecting scents or tracking by scent, but suffer a disadvantage on Stealth checks if the environment has any wind. This effect is passive."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners and those looking for a whimsical effect without requiring high-level expertise.",
    "vendorReason": "Mushroom Regency specializes in fungi with unique properties, making the Wario Fungus an ideal addition to their product line.",
    "shippingDetail": "Ships via Goomba Ground Transport; delivery can take up to one week depending on your location.",
    "usage": {
      "activation": "Eating the mushroom",
      "duration": "One hour",
      "endsWhen": "The duration ends after one hour or if you consume another food item, whichever comes first",
      "charges": "Unlimited; can be consumed repeatedly"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the unique and temporary nature of its effects without being overly powerful.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-22T22:33:48.930603+00:00",
    "aiReviewedAt": "2026-07-22T22:33:48.930603+00:00",
    "aiReviewVersion": 1
  }
};
