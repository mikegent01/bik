// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_026 = {
  "koopa_leaf": {
    "id": "koopa_leaf",
    "name": "Koopa Leaf",
    "description": "The Koopa Leaf, plucked from the verdant groves of Koopa Village, is more than just a simple leaf. When brewed into tea, it infuses the drink with a warm, earthy aroma and a hint of spicy mint. The leaves are said to have been gifted by the village's guardian spirits, lending them both mystical properties and a soothing scent that calms the mind. Sipping this tea restores mana or a 1st-level spell slot when consumed, and it is also surprisingly delicious, making for a refreshing treat after a long day of adventuring.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🍃",
    "stock": 200,
    "rarity": "common",
    "effects": [
      "Restores Mana",
      "Refreshingly Delicious"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Standard Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mana Restoration",
        "rules": "When the Koopa Leaf tea is consumed, it restores either 3 mana points or allows the consumption of a 1st-level spell slot. This effect occurs once per short rest."
      },
      {
        "title": "Flavorful Refreshment",
        "rules": "The tea provides a flavorful and soothing experience, granting advantage on saving throws against exhaustion and fatigue for the duration of the short rest after drinking it."
      }
    ],
    "levelRequirementReason": "Anyone can afford to buy this common item, but its effects are beneficial enough that only those of at least first level can use them.",
    "vendorReason": "The valley trading post is known for its wide variety of common goods and curiosities, including the Koopa Leaf.",
    "shippingDetail": "Delivered within three days with no special handling required.",
    "usage": {
      "activation": "Consumed as part of a short rest",
      "duration": "Instantaneous effect; lasts until the next long or short rest",
      "endsWhen": "The short rest is completed, and it can be used once per short rest",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Koopa Leaf's mystical properties and widespread use justify a price of 1000 XP.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T08:01:42.299738+00:00",
    "aiReviewedAt": "2026-07-22T08:01:42.299738+00:00",
    "aiReviewVersion": 1
  },
  "koopa_shell_shield": {
    "id": "koopa_shell_shield",
    "name": "Koopa Shell Shield",
    "description": "The Koopa Shell Shield is a reinforced green shell transformed into a formidable shield, forged by the industrious yet mischievous Koopa Troopas. Crafted from shells sourced from the Mushroom Kingdom's own forests, this shield provides robust protection and can be thrown as an improvised weapon, returning unerringly to its wielder with uncanny precision. Its ethically sourced nature ensures that each shell is a testament to the Koopa's craftsmanship, making it a reliable companion in battle.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "+1 AC while equipped",
      "Can be thrown (20/60) for 1d6 bludgeoning damage"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Koopa Courier Corps",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Armor Class",
        "rules": "While the Koopa Shell Shield is equipped, you gain a +1 bonus to your AC. This effect persists while you are not incapacitated or prone."
      },
      {
        "title": "Thrown Weapon",
        "rules": "As an action, you can throw the shield up to 60 feet for 1d6 bludgeoning damage. The shield returns to your hand immediately after impact and does not require a thrown weapon attack roll. You must have at least one hand free to use this ability."
      }
    ],
    "levelRequirementReason": "This shield is designed for those just starting their journey, offering basic protection and utility without imposing a significant burden on a novice adventurer.",
    "vendorReason": "The Valley Trading Post prides itself on providing essential gear to all adventurers, regardless of experience level, making the Koopa Shell Shield an accessible choice for beginners.",
    "shippingDetail": "Ships within one day with the Koopa Courier Corps; deliveries arrive in good condition due to their reliable service.",
    "usage": {
      "activation": "Equipped as a shield or thrown as an action.",
      "duration": "Instantaneous return upon throwing, AC bonus persists while equipped and not prone.",
      "endsWhen": "Exhausted after one use per day.",
      "charges": "Unlimited; recharges at dawn."
    },
    "priceReason": "The Koopa Shell Shield offers a solid balance of protection and utility for beginners, making it a fair value for its price in experience points.",
    "priceOriginal": 40000,
    "priceReviewedAt": "2026-07-22T08:01:42.149691+00:00",
    "aiReviewedAt": "2026-07-22T08:01:42.149691+00:00",
    "aiReviewVersion": 1
  },
  "koopa_troop_glider_kit": {
    "id": "koopa_troop_glider_kit",
    "name": "Koopa Troop Glider Kit",
    "description": "The Koopa Troop Glider Kit is a compact, collapsible device crafted by the cunning Koopa Troopers for their rapid airborne maneuvers. When deployed from any height, it allows for controlled gliding with a descent rate of only 30 feet per round, ensuring safe landings even from great heights. The kit folds into a small backpack when not in use, making it an essential tool for covert operations and strategic deployments.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪂",
    "stock": 8,
    "rarity": "rare",
    "effects": [
      "Safe Gliding",
      "Compact Storage"
    ],
    "vendor": "koopa_troop_armory",
    "shippedBy": "Reinforced Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Safe Gliding",
        "rules": "When activated, the glider allows safe descent from any height. The user can move at a speed of 60 feet per round with a descent rate of 30 feet per round. This effect ends when the user lands safely or is otherwise incapacitated."
      },
      {
        "title": "Compact Storage",
        "rules": "The glider folds into a small backpack, which can be worn on the user's back and used at any time without additional preparation."
      }
    ],
    "levelRequirementReason": "This basic yet effective device is suitable for beginners and those who need to move quickly but safely.",
    "vendorReason": "The Koopa Troop Armory specializes in gear used by their troops, ensuring that the Glider Kit meets the highest standards of quality and reliability.",
    "shippingDetail": "Delivered via a reinforced crate to ensure safe transport from the Koopa Troop Armory.",
    "usage": {
      "activation": "Action (to deploy)",
      "duration": "Instantaneous when deployed, ends on landing or incapacitation",
      "endsWhen": "Landing safely or being incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "This balanced price reflects the item's utility and rarity, making it a valuable addition to any adventurer's arsenal.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T08:01:46.805908+00:00",
    "aiReviewedAt": "2026-07-22T08:01:46.805908+00:00",
    "aiReviewVersion": 1
  },
  "koopa_troop_mushroom_soup_recipe": {
    "id": "koopa_troop_mushroom_soup_recipe",
    "name": "Recipe: Koopa Mushroom Soup ",
    "description": "This hand-written recipe for Koopa Mushroom Soup, a bubbling elixir from the Mushroom Kingdom, imbues its consumer with +5 feet of speed for an hour. However, it comes with a side of misadventure—those who imbibe might slip on their own shoelaces and find themselves at risk of Dexterity saves. The soup's creator, Koopa Chefs, are known to test this potion on unsuspecting heroes before selling the recipe, ensuring its effectiveness and flavor are unparalleled.",
    "price": 1000,
    "icon": "🍄",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Speed Boost",
      "Slippery Side Effects"
    ],
    "vendor": "koopa_troop_kitchen",
    "shippedBy": "Steamy Scroll Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "By consuming Koopa Mushroom Soup, you gain a +5 foot speed bonus for one hour. This effect is passive and lasts until it ends. The soup's potency can be negated by failing a Constitution saving throw (DC 12)."
      },
      {
        "title": "Slippery Side Effects",
        "rules": "For the duration of one hour after consuming Koopa Mushroom Soup, you have disadvantage on Dexterity saving throws due to the slippery nature of the soup. This effect is also passive and ends when it expires."
      }
    ],
    "levelRequirementReason": "This recipe is simple enough for any adventurer who can meet its basic ingredient requirements.",
    "vendorReason": "The Koopa Troops are renowned for their culinary prowess and frequently trade or sell recipes like this one.",
    "shippingDetail": "The soup's ingredients must be shipped separately, increasing the delivery time by two days due to perishable nature. However, it ensures freshness upon arrival.",
    "usage": {
      "activation": "Eating Koopa Mushroom Soup is the only way to activate its effects.",
      "duration": "One hour after consumption.",
      "endsWhen": "The effects end when the duration expires or if you fail a Constitution saving throw (DC 12).",
      "charges": "Unlimited, as each serving of soup can be consumed multiple times."
    },
    "priceReason": "This recipe is priced moderately to reflect its unique effects and the challenge in acquiring all ingredients.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-22T08:01:46.682305+00:00",
    "aiReviewedAt": "2026-07-22T08:01:46.682305+00:00",
    "aiReviewVersion": 1
  },
  "koopa_troop_patrol_scooter": {
    "id": "koopa_troop_patrol_scooter",
    "name": "Koopa Patrol Scooter",
    "description": "A standard-issue, flame-decaled scooter for quick troop deployment. Surprisingly zippy.",
    "category": "equipment",
    "price": 4500,
    "icon": "🛴",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Mount: Speed 40ft, can move through enemy spaces",
      "Once per day: emit a puff of smoke (Blinds 5ft radius for 1 round)",
      "Makes loud 'vroom-vroom' noises"
    ],
    "vendor": "Koopa Troop",
    "shippedBy": "Armored Crate",
    "levelRequirement": 2
  },
  "koopa_troop_shell_oven": {
    "id": "koopa_troop_shell_oven",
    "name": "Koopa Troop Shell Oven ",
    "description": "The Koopa Troop Shell Oven is a portable oven crafted from polished Koopa shell and enchanted with the might of Bowser. It bakes mushrooms to perfection, granting advantage on cooking checks for soups (DC reduced by 2), while its retractable shell protects it in transit. This humble device, made by the Troop Tinkerers, is as sturdy as a Koopa's resolve and can be found at the Koopa Troop Kitchen.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐢",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Mushroom Mastery",
      "Shell Protection"
    ],
    "vendor": "koopa_troop_kitchen",
    "shippedBy": "Shell-Shocked Shipment",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mushroom Mastery",
        "rules": "When used for cooking mushrooms, the user gains advantage on Cooking checks for soups. The oven reduces the DC of these checks by 2."
      },
      {
        "title": "Shell Protection",
        "rules": "The oven retracts into a Koopa shell within seconds, providing protection and allowing it to be carried without damage."
      }
    ],
    "levelRequirementReason": "This simple yet effective tool is accessible to all adventurers, enhancing their culinary skills.",
    "vendorReason": "The Koopa Troop Kitchen specializes in items that help its patrons prepare and enjoy fungi delicacies.",
    "shippingDetail": "Ships with a protective foam insert to ensure the oven remains intact during transit.",
    "usage": {
      "activation": "As an action",
      "duration": "Instantaneous; retracts into shell form immediately after use",
      "endsWhen": "Exhausted after one use",
      "charges": "Unlimited, but requires a short rest to reset the retractable feature"
    },
    "priceReason": "Balanced at 1000 XP as it provides useful benefits without overshadowing other cooking options.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T08:02:00.691730+00:00",
    "aiReviewedAt": "2026-07-22T08:02:00.691730+00:00",
    "aiReviewVersion": 1
  },
  "koopa_troop_shell_polish_service": {
    "id": "koopa_troop_shell_polish_service",
    "name": "Koopa Troop Shell Polish Service",
    "description": "The Koopa Troop Shell Polish Service revitalizes your armor or natural shell, giving it a gleaming polish that can intimidate reptilian foes. Under Koopa Detailers' expert hands, the surface of your armor gains +1 AC for 24 hours, a cosmetic enhancement that makes you appear more formidable to lizard-like threats. However, if your polishing becomes too elaborate, you might inadvertently attract Bowser’s scouts, who are ever-vigilant for signs of excessive shine.",
    "price": 1000,
    "icon": "🧽",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Armor Gains +1 AC (Cosmetic Only)",
      "Intimidation Checks +2 vs. Reptiles"
    ],
    "vendor": "koopa_troop_garage",
    "shippedBy": "Turtle Wax Wagon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Armor Gains +1 AC",
        "rules": "This cosmetic polish temporarily enhances the appearance of your armor, increasing its AC by 1 for a day. The effect is purely visual; it does not confer any additional physical protection beyond what you would normally receive from the armor."
      },
      {
        "title": "Intimidation Checks +2 vs. Reptiles",
        "rules": "When making an Intimidation check against reptilian creatures, such as Bowser or his minions, this service grants a +2 bonus to your roll. This benefit lasts until you make another Intimidation check during the same day."
      }
    ],
    "levelRequirementReason": "This simple yet effective service is accessible to all adventurers who wish to enhance their appearance and intimidation potential.",
    "vendorReason": "Koopa Detailers are renowned for their expert craftsmanship, ensuring that every polish job leaves armor gleaming with a protective sheen.",
    "shippingDetail": "The Turtle Wax Wagon delivers your polished armor within the week, but if you need it sooner, you can opt for an express service at additional cost.",
    "usage": {
      "activation": "A short application process takes place before you head out into battle or your next encounter. The polish is applied as a bonus action.",
      "duration": "24 hours",
      "endsWhen": "The polish wears off after this time, either through natural fading or if the armor sustains damage that requires cleaning and reapplication.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the expertise of Koopa Detailers in creating a visually impressive yet harmless enhancement.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-22T08:02:32.535936+00:00",
    "aiReviewedAt": "2026-07-22T08:02:32.535936+00:00",
    "aiReviewVersion": 1
  },
  "koopa_troop_shell_shield": {
    "id": "koopa_troop_shell_shield",
    "name": "Koopa Troop Shell Shield",
    "description": "The Koopa Troop Shell Shield is a vibrant green shell that can be worn as a mobile shield, providing both cover and protection. When you withdraw into it as a bonus action, your AC increases by +3 for the next round but your speed drops to 5 feet until the start of your next turn. The shield's power comes from Koopa Workshop #7, renowned for crafting unique armor pieces that blend function with whimsy. Its origin is mildly unsettling due to Bowser's face carved inside; a peculiar yet functional design.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐢",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "+3 AC when withdrawn",
      "Speed reduced to 5 ft until next turn"
    ],
    "vendor": "koopa_troop_armory",
    "shippedBy": "Koopa Paratroopa Airmail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Withdrawal Bonus Action",
        "rules": "When you withdraw into the Koopa Troop Shell Shield as a bonus action, your armor class (AC) increases by +3 for the next round. However, until the start of your next turn, your speed is reduced to 5 feet."
      },
      {
        "title": "Temporary Speed Reduction",
        "rules": "The speed reduction lasts from the moment you withdraw into the shield until the start of your next turn. This effect ends when you move or take any other action that requires movement."
      }
    ],
    "levelRequirementReason": "This level requirement ensures it's available to players early in their journey without overwhelming them.",
    "vendorReason": "As Koopa Workshop #7's official armory, they stock unique items like the Koopa Troop Shell Shield.",
    "shippingDetail": "Ships within one game week for Koopa Troop Armory customers.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Until the start of your next turn",
      "endsWhen": "You move or take an action that requires movement",
      "charges": "Unlimited, recharges after a short rest"
    },
    "priceReason": "This price reflects its unique design and limited functionality compared to other shields.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-22T08:02:03.954621+00:00",
    "aiReviewedAt": "2026-07-22T08:02:03.954621+00:00",
    "aiReviewVersion": 1
  },
  "koopa_troop_shield": {
    "id": "koopa_troop_shield",
    "name": "Koopa Troop Shield",
    "description": "The Koopa Troop Shield is a formidable shell encased in sturdy metal, forged by the industrious Koopa Troops. This shield not only grants you +2 AC but also offers a tactical advantage: when tucked into your shell as a bonus action, you gain resistance to bludgeoning and piercing damage, though your speed drops to 0. Should you choose to kick it during combat, you unleash a powerful force wave that pushes enemies back.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Shell Defense",
      "Tuck and Push"
    ],
    "vendor": "koopa_troop",
    "shippedBy": "Turtle Tank Transport",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Shell Defense",
        "rules": "Activates as a bonus action. You gain resistance to bludgeoning and piercing damage until the start of your next turn. Your speed is reduced to 0 while in this state."
      },
      {
        "title": "Tuck and Push",
        "rules": "Activates when you kick the shield during combat as a bonus action. A wave of force pushes all creatures within 10 feet of you, knocking them prone if they fail a DC 13 Strength saving throw. The push has no effect on creatures that have a higher AC than your current AC."
      }
    ],
    "levelRequirementReason": "Requires at least 4th level to wield effectively due to the shield's complexity and weight.",
    "vendorReason": "The Koopa Troops are known for their expertise in crafting sturdy, versatile armor and weapons.",
    "shippingDetail": "Ships via Turtle Tanks with a 1-day delivery time within the Mushroom Kingdom.",
    "usage": {
      "activation": "Bonus action to tuck into shell; bonus action or reaction to kick as an attack.",
      "duration": "Instantaneous and ends when you move out of your shell, or if you use your action on another task.",
      "endsWhen": "You are no longer in your shell or you take any action other than moving.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the shield's unique combination of defense and offensive capabilities.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-22T08:02:59.469268+00:00",
    "aiReviewedAt": "2026-07-22T08:02:59.469268+00:00",
    "aiReviewVersion": 1
  },
  "koopa_troop_spiked_helmet_cap": {
    "id": "koopa_troop_spiked_helmet_cap",
    "name": "Koopa Troop Spiked Helmet Cap ",
    "description": "The Koopa Troop Spiked Helmet Cap is a menacing headgear adorned with durable spikes that give you the look of Bowser's elite. This cap not only intimidates foes but also protects its wearer, as the spikes deliver a minor jab when you roll an 1s on your dice. It’s crafted by Koopa Hatters and endorsed by Bowser himself; it might even get you noticed for recruitment into his army.",
    "price": 1000,
    "icon": "🎩",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "+1 to Intimidation checks against small creatures",
      "Spikes poke you on a natural 1 (1 damage, ouch!)"
    ],
    "vendor": "koopa_troop_barracks",
    "shippedBy": "Shell-Mailed Package",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Intimidating Presence",
        "rules": "When you make an Intimidation check against a creature smaller than you, add +1 to the roll. This effect is always active."
      },
      {
        "title": "Spike Jabs",
        "rules": "If you roll a natural 1 on your attack or saving throw dice, take 1 piercing damage from the spikes. This effect triggers once per short or long rest."
      }
    ],
    "levelRequirementReason": "This cap is designed for beginners to provide them with a bit of intimidation and protection.",
    "vendorReason": "The barracks stock this item as part of their basic gear line, catering to new recruits who need both form and function.",
    "shippingDetail": "Shipped within a protective shell-mailer for durability during transit.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous spikes poke you on a natural 1.",
      "endsWhen": "Exhausted after one use per short or long rest.",
      "charges": "Unlimited, recharges at dawn."
    },
    "priceReason": "The price reflects the cap's quality craftsmanship and Bowser's approval, making it a fair deal for its utility and rarity.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-22T08:02:17.371872+00:00",
    "aiReviewedAt": "2026-07-22T08:02:17.371872+00:00",
    "aiReviewVersion": 1
  },
  "kraken_taming_collar": {
    "id": "kraken_taming_collar",
    "name": "Kraken Taming Collar (Adult Size)",
    "description": "The Kraken Taming Collar, a storm giant leather collar adorned with ancient binding runes, whispers of sea magic as it encircles its wearer's neck. Crafted by the Stormshapers Guild from the very bones of fallen krakens, this collar holds the power to bind one of these massive creatures into loyal servitude. To apply it, you must successfully perform a DC 25 Animal Handling check. Once bound, the Kraken becomes your steadfast companion in battle and exploration.",
    "price": 1000,
    "icon": "🦑",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Binds a Kraken as Loyal Companion",
      "Requires Successful Application (DC 25 Animal Handling)"
    ],
    "vendor": "sea_hunter",
    "shippedBy": "Triton Delivery",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Binding a Kraken",
        "rules": "To apply the collar, make an Animal Handling check with a DC of 25. On a success, you can bind one kraken within 30 feet as your loyal companion for up to 8 hours per day. The kraken remains bound until released or until the duration expires."
      },
      {
        "title": "Kraken Companion",
        "rules": "Your bound kraken serves and protects you with unwavering loyalty. It can be commanded to perform tasks within its capabilities, such as fighting your foes or assisting in exploration. The kraken is immune to fear effects and cannot be charmed."
      }
    ],
    "levelRequirementReason": "Requires significant power and experience to handle the immense responsibility of a bound kraken.",
    "vendorReason": "The Sea Hunter has exclusive access to rare and powerful sea-related artifacts like the Kraken Taming Collar.",
    "shippingDetail": "Ships via Triton courier, ensuring safe delivery from deep-sea sources.",
    "usage": {
      "activation": "Requires a successful DC 25 Animal Handling check to apply and bind the kraken.",
      "duration": "8 hours per day for up to one week before requiring reapplication.",
      "endsWhen": "The kraken is released or the duration expires.",
      "charges": "Unlimited, as long as you have the collar."
    },
    "priceReason": "Balanced at 1000 XP to reflect its immense power and rarity in crafting.",
    "priceOriginal": 625000,
    "priceReviewedAt": "2026-07-22T08:03:03.345415+00:00",
    "aiReviewedAt": "2026-07-22T08:03:03.345415+00:00",
    "aiReviewVersion": 1
  },
  "kremling_krew_cannonball_grill": {
    "id": "kremling_krew_cannonball_grill",
    "name": "Kremling Krew Cannonball Grill",
    "description": "The Kremling Krew Cannonball Grill is a ferocious cooking device forged from iron and imbued with the spirit of battle. Made by K. Rool's Outdoor Cooking, this grill uses cannonballs as fuel, creating meals that sizzle and pop with an explosive aroma. Each cannonball not only cooks one meal but also imparts a smoky, gunpowder flavor, enhancing your next attack with +1 fire damage. Be wary, for the grill occasionally fires its cannonball in a blinding arc—those caught in the blast must succeed on a DEX save (DC 14) or take 1d6 bludgeoning damage.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Cannonball Fuel",
      "Explosive Flavor"
    ],
    "vendor": "kremling_krew",
    "shippedBy": "Cannonball Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Cannonball Fuel",
        "rules": "Activates on use. Each cannonball used to fuel the grill cooks one meal and grants +1 fire damage on your next attack. The grill can hold up to three cannonballs at a time."
      },
      {
        "title": "Explosive Flavor",
        "rules": "At the end of each of your turns, there is a 25% chance that the grill will discharge its cannonball as if it had been used. Targets within 10 feet must succeed on a DEX save (DC 14) or take 1d6 bludgeoning damage."
      }
    ],
    "levelRequirementReason": "Requires at least third level to ensure proficiency with the grill's explosive nature.",
    "vendorReason": "K. Rool’s Outdoor Cooking is known for their innovative and dangerous culinary creations, making them a prime vendor for this unique item.",
    "shippingDetail": "Ships via Cannonball Express, delivered by a cannon-armed courier to ensure the grill arrives in one piece.",
    "usage": {
      "activation": "Use an action to light the grill and place a cannonball inside. The grill can hold up to three cannonballs at a time.",
      "duration": "Instantaneous effects; each cannonball used or discharged ends its effect immediately.",
      "endsWhen": "The grill is empty of cannonballs, or when it discharges its cannonball during use.",
      "charges": "Unlimited charges as long as the grill has fuel."
    },
    "priceReason": "Balanced at 1000 XP to reflect the item's unique and dangerous nature while remaining within a reasonable price range for an uncommon item.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-22T08:02:49.226114+00:00",
    "aiReviewedAt": "2026-07-22T08:02:49.226114+00:00",
    "aiReviewVersion": 1
  },
  "kremling_krew_cannonball_polishing": {
    "id": "kremling_krew_cannonball_polishing",
    "name": "Kremling Krew Cannonball Polishing",
    "description": "The Kremling Krew Cannonball Polishing is a meticulously hand-crafted polishing kit that ensures your cannonballs gleam with a lustrous sheen, enhancing not only their combat effectiveness but also your reputation in battle. Each day's diligent polishing grants you a +1 damage bonus to your cannon fire (psychologically intimidating foes), and foes within 20 feet gain disadvantage on Intimidation checks against you. Fail to polish them daily, however, and they tarnish, reducing the damage by -1 and imposing a -2 penalty on attack rolls for one week.",
    "category": "services",
    "price": 1000,
    "icon": "🎱",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Psychological Edge",
      "Tarnished Disadvantage"
    ],
    "vendor": "kremling_krew",
    "shippedBy": "Cannonball Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Psychological Edge",
        "rules": "When your cannonballs are polished, you gain a +1 bonus to damage rolls with cannons. Enemies within 20 feet of you have disadvantage on Intimidation checks against you. This effect ends if the cannonballs tarnish or if they are not polished for five consecutive days."
      },
      {
        "title": "Tarnished Disadvantage",
        "rules": "If your cannonballs are not polished daily, they will tarnish after one week of neglect. Once tarnished, you suffer a -1 penalty to damage rolls with cannons and a -2 penalty on attack rolls for one week. This effect is immediately restored by polishing the cannonballs."
      }
    ],
    "levelRequirementReason": "A basic understanding of maintenance and care skills is necessary to ensure the kit's effectiveness.",
    "vendorReason": "K. Rool's Polishers are renowned for their meticulous attention to detail, ensuring that every cannonball shines with a luster that can turn the tide of battle.",
    "shippingDetail": "Delivered by Cannonball Express, known for its swift and reliable service within the kingdom's borders.",
    "usage": {
      "activation": "Daily polishing as an action",
      "duration": "Until tarnished or re-polished",
      "endsWhen": "Tarnishes after one week of neglect",
      "charges": "Unlimited, requires daily upkeep"
    },
    "priceReason": "Balanced to ensure a fair price for the ongoing maintenance and psychological benefits it provides.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T08:03:21.067610+00:00",
    "aiReviewedAt": "2026-07-22T08:03:21.067610+00:00",
    "aiReviewVersion": 1
  },
  "kremling_krew_croc_jaw_clamps": {
    "id": "kremling_krew_croc_jaw_clamps",
    "name": "Kremling Krew Croc Jaw Clamps",
    "description": "The Kremling Krew Croc Jaw Clamps are ingeniously crafted from the resilient bones of swamp crocs, their bite as firm and predictable as a jungle storm. These clamps not only secure food with unyielding strength but also grant +1 to Strength checks for holding and preparing stew meat. Their design ensures they last through countless meals in the swamps, earning them a reputation among Krew Carvers as both reliable tools and a symbol of their craftsmanship.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍲",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Clamp Securely",
      "Strengthen Grip"
    ],
    "vendor": "kremling_krew_swamp",
    "shippedBy": "Jaw Clamp Jar",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Clamp Securely",
        "rules": "When used to hold or prepare stew meat, the clamps provide a +1 bonus to Strength checks. This effect is passive while in use and lasts until the task is completed."
      },
      {
        "title": "Strengthen Grip",
        "rules": "The clamps are made from swamp croc bones, providing a +2 bonus to AC when worn as bracers during meat-preparation activities. This benefit lasts for 1 hour or until the user stops wearing them in such conditions."
      }
    ],
    "levelRequirementReason": "These clamps are designed for anyone who needs to handle stew meat securely, making no level requirement necessary.",
    "vendorReason": "The Krew Carvers specialize in tools that withstand the harsh swamp conditions and the Kremling Krew Croc Jaw Clamps are a testament to their mastery of such craftsmanship.",
    "shippingDetail": "Shipped carefully packed, these clamps arrive with a protective layer of moss and mud to ensure they reach you in prime condition.",
    "usage": {
      "activation": "Passive while used for preparing stew meat; +2 AC when worn as bracers during such activities.",
      "duration": "Instantaneous (Clamp Securely) / 1 hour (Strengthen Grip)",
      "endsWhen": "The task is completed or the user stops wearing them in preparation activities, respectively.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, these clamps offer reliable and useful benefits without being overpowered.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T08:03:13.750715+00:00",
    "aiReviewedAt": "2026-07-22T08:03:13.750715+00:00",
    "aiReviewVersion": 1
  },
  "kremling_krew_croc_scale_boots": {
    "id": "kremling_krew_croc_scale_boots",
    "name": "Kremling Krew Croc Scale Boots",
    "description": "The Kremling Krew Croc Scale Boots are crafted from the armored hide of a swamp crocodile, their scales interwoven into supple leather. These boots not only confer a step that echoes through wetlands but also grant their wearer a natural resistance to water damage and advantage on Athletics checks in such terrain. The creaks they make when stepped in mud hint at their ancient origins from the Krew Tanners of the swamp, whose secrets lie deep within the mire.",
    "price": 1000,
    "icon": "👢",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Athletics",
      "Water Damage Resistance"
    ],
    "vendor": "kremling_krew_lair",
    "shippedBy": "Mire Messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Athletics",
        "rules": "You gain advantage on all Athletics checks made in swamps or similar wet environments. This effect lasts until you finish a long rest."
      },
      {
        "title": "Water Damage Resistance",
        "rules": "The boots provide a +2 bonus to AC against any water-based damage, including splash attacks and environmental effects like acid pools. This benefit persists for the duration of your time spent in wet conditions."
      }
    ],
    "levelRequirementReason": "These boots are designed to be accessible to lower-level adventurers who need to navigate treacherous swamps.",
    "vendorReason": "The Krew Tanners have long been masters of crafting gear for swamp-dwellers, and these boots bear their hallmark craftsmanship.",
    "shippingDetail": "Boots arrive with a special coating to help prevent water damage during shipment through the wetlands.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Until you finish a long rest or are no longer in a swampy environment",
      "endsWhen": "You complete a long rest or exit a swampy area",
      "charges": "Unlimited"
    },
    "priceReason": "The boots offer significant utility for navigating wetlands at an accessible price, making them a valuable addition to any adventurer's inventory.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-22T08:03:53.807089+00:00",
    "aiReviewedAt": "2026-07-22T08:03:53.807089+00:00",
    "aiReviewVersion": 1
  },
  "kremling_krew_crocodile_stew_recipe": {
    "id": "kremling_krew_crocodile_stew_recipe",
    "name": "Recipe: Kremling Krew Crocodile Stew",
    "description": "This parchment bears the faded recipe for Kremling Krew's legendary Crocodile Stew. The ink, once vibrant, now hints at the swampy origin of this tough stew. Prepared with bite-force strong swamp crocs, it not only strengthens your jaws but also toughens your resolve in combat. Eat the stew to gain advantage on bite and grapple attacks for 3 hours; the taste alone is enough to remind you of the Krew's resilience.",
    "price": 1000,
    "icon": "🍲",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Stew of Resilience",
      "Bite and Grapple Advantage"
    ],
    "vendor": "kremling_krew_swamp",
    "shippedBy": "Snappy Stew Scroll",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stew of Resilience",
        "rules": "Eating this stew grants you advantage on bite and grapple attack rolls for 3 hours. The effect ends if you eat another meal or take a long rest."
      },
      {
        "title": "Bite and Grapple Advantage",
        "rules": "For the duration, your bite attacks deal an additional +1d6 damage to creatures of Large size or smaller. This effect is cumulative with any other similar ability."
      }
    ],
    "levelRequirementReason": "This recipe can be used by characters of all levels as it focuses on the inherent toughness and resilience it imparts.",
    "vendorReason": "The Krew Cooks have perfected this stew, making them the only reliable source for its recipe.",
    "shippingDetail": "Delivered via a Snappy Stew Scroll, ensuring freshness and flavor upon arrival.",
    "usage": {
      "activation": "Eating one serving of the stew",
      "duration": "3 hours",
      "endsWhen": "After eating another meal or taking a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the rarity and the unique flavor that this recipe brings to any dish.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T08:03:17.346835+00:00",
    "aiReviewedAt": "2026-07-22T08:03:17.346835+00:00",
    "aiReviewVersion": 1
  },
  "kremling_krew_crocodile_teeth_amulet_service": {
    "id": "kremling_krew_crocodile_teeth_amulet_service",
    "name": "Kremling Krew Crocodile Teeth Amulet Service",
    "description": "This amulet, crafted from a rare swamp crocodile’s teeth by Krew Shamans, enhances your bite attacks and intimidates foes in swamps. When you wear it, your teeth chatter ominously at signs of hunger or stress, sending a chilling message to those who dare approach too closely. The talisman's power is tied to the Krew Shamans' ancient magic, making it both an effective tool and a symbol of their mystic prowess.",
    "price": 1000,
    "icon": "🦷",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Enhanced Bite Attacks",
      "Swamp Intimidation"
    ],
    "vendor": "kremling_krew_swamp",
    "shippedBy": "Toothy Necklace",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Bite Attacks",
        "rules": "When you use the bite attack action, you deal an additional 1d4 damage for a duration of 24 hours. This effect can be used once per short rest."
      },
      {
        "title": "Swamp Intimidation",
        "rules": "While within swampland terrain, you have advantage on Intimidation checks against creatures with the Swamp creature type. This ability is always active while in a swamp and does not require an action to use."
      }
    ],
    "levelRequirementReason": "The amulet's magic is simple enough for even low-level adventurers to wield.",
    "vendorReason": "As the creators of this artifact, Krew Shamans are the most knowledgeable and reliable source for their crafted items.",
    "shippingDetail": "The amulet is shipped in a sealed case to protect its sharp teeth from damage during transit.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "24 hours per use, ends at the start of your next short rest.",
      "endsWhen": "At the start of your next short rest after using it once.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The amulet's rarity and unique crafting process justify a cost of 1000 XP.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T08:03:41.793129+00:00",
    "aiReviewedAt": "2026-07-22T08:03:41.793129+00:00",
    "aiReviewVersion": 1
  },
  "kremling_krew_fake_crown_replica": {
    "id": "kremling_krew_fake_crown_replica",
    "name": "Kremling Krew Fake Crown Replica",
    "description": "This plastic crown replica of K. Rool’s infamous design is so lifelike that it shimmers with a faint, indigo glow when held to the light. It grants you an advantage on Intimidation checks against Kremlings but also brings unwanted attention, as it makes you look comically out of place among other creatures. Should you fail to return it to its rightful owner after a month, the chance of K. Rool himself appearing to reclaim his crown increases by 10% each day.",
    "category": "equipment",
    "price": 1000,
    "icon": "👑",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Advantage on Intimidation checks with Kremlings",
      "Disadvantage on Charisma checks with other creatures"
    ],
    "vendor": "kremling_krew",
    "shippedBy": "Barrel Cannon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "K. Rool's Glare",
        "rules": "When you fail to return the crown to K. Rool within a month, there is a cumulative 10% chance each day thereafter that he will appear to reclaim it. This effect can be mitigated by returning the crown or performing a heroic act in front of a K. Rool statue."
      },
      {
        "title": "Comical Disguise",
        "rules": "While wearing this crown, you are considered disarmed and suffer disadvantage on Charisma checks with all other creatures. This effect does not stack with any other similar effects."
      }
    ],
    "levelRequirementReason": "The crown is simple enough for even a novice adventurer to use.",
    "vendorReason": "Kremling Krew’s Prop Department specializes in creating such faithful replicas of their master's belongings.",
    "shippingDetail": "Delivered via the Barrel Cannon with a free celebratory Kremling Krew plushie for your first order.",
    "usage": {
      "activation": "Passive effect when worn, recharge on returning to K. Rool or performing a heroic act in front of a statue of him.",
      "duration": "Instantaneous upon donning; persists until removed or mitigated by an appropriate action.",
      "endsWhen": "The crown is returned to K. Rool or the wearer performs a heroic act in front of his statue, reducing the chance of K. Rool appearing each day thereafter.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced as it offers a unique and thematic advantage while introducing an ongoing narrative challenge.",
    "priceOriginal": 4600,
    "priceReviewedAt": "2026-07-22T08:03:33.949878+00:00",
    "aiReviewedAt": "2026-07-22T08:03:33.949878+00:00",
    "aiReviewVersion": 1
  },
  "kremling_krew_kannon": {
    "id": "kremling_krew_kannon",
    "name": "Kremling Krew Kannon",
    "description": "The Kremling Krew Kannon, a small but formidable firearm crafted in the bustling workshops of Dapper Dan’s Workshop, is as much a symbol of the Krew's ingenuity as it is a weapon of chaos. This blunderbuss produces a deafening boom that shatters eardrums and startles foes within 300 feet. Its loud report not only dazes them but also disrupts their focus, leaving them reeling in fright for a moment.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔫",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Rumble Shot",
      "Frightening Boom"
    ],
    "vendor": "kremling_krew_arsenal",
    "shippedBy": "Barrel Cannon Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Rumble Shot",
        "rules": "When you hit with the Kremling Krew Kannon, all creatures within 30 feet must succeed on a DC 14 Wisdom saving throw or be stunned for 1 round. This effect can only occur once per target per short rest."
      },
      {
        "title": "Frightening Boom",
        "rules": "The weapon emits a loud report that affects all creatures within 300 feet, requiring them to make a DC 14 Wisdom saving throw or be frightened for 1 minute. This effect can only occur once per target per long rest."
      }
    ],
    "levelRequirementReason": "To wield such a weapon of chaos and sound requires mastery over both combat and the unpredictable nature of the Krew’s craftsmanship.",
    "vendorReason": "The Kremling Krew Arsenal is well-known for its unique and powerful firearms, making it the perfect vendor for such a weapon.",
    "shippingDetail": "Delivered via Barrel Cannon Express, ensuring the weapon arrives safely and with a loud 'whoosh'!",
    "usage": {
      "activation": "As a bonus action to fire once per turn.",
      "duration": "Instantaneous effect.",
      "endsWhen": "The effect ends when the target succeeds on its saving throw or after its duration expires.",
      "charges": "Unlimited, but only one use per target per long rest."
    },
    "priceReason": "Balanced to reflect a rare and powerful weapon that can both damage enemies and disrupt their minds.",
    "priceOriginal": 22500,
    "priceReviewedAt": "2026-07-22T08:03:50.132626+00:00",
    "aiReviewedAt": "2026-07-22T08:03:50.132626+00:00",
    "aiReviewVersion": 1
  },
  "kremling_krew_kannonball": {
    "id": "kremling_krew_kannonball",
    "name": "Kremling Krew Kannonball",
    "description": "The Kremling Krew Kannonball is a meticulously crafted cannonball, its surface polished to a mirror finish despite its iron composition. Designed for precision and power, it glides through the air with surprising aerodynamics, making it an indispensable part of the Kremling Krew's siege tactics. This cannonball deals 3d10 bludgeoning damage when hitting a direct target and can be used as an improvised weapon delivering 2d6 bludgeoning damage in close combat.",
    "category": "equipment",
    "price": 1000,
    "icon": "💣",
    "stock": 100,
    "rarity": "common",
    "effects": [
      "Cannonball",
      "Improvised Weapon"
    ],
    "vendor": "Kremling Krew",
    "shippedBy": "Gunpowder Barrel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Direct Hit Damage",
        "rules": "When the Kremling Krew Kannonball hits a direct target with a successful hit, it deals 3d10 bludgeoning damage. This effect is used once per day and requires a ranged attack roll."
      },
      {
        "title": "Improvised Weapon",
        "rules": "If wielded in close combat, the Kremling Krew Kannonball can be used as an improvised weapon, dealing 2d6 bludgeoning damage. This use is limited to once per long rest and requires a successful Strength (Athletics) check."
      }
    ],
    "levelRequirementReason": "This cannonball is designed for basic tactical use and does not require high-level expertise.",
    "vendorReason": "The Kremling Krew is known for their ship cannons, so it's natural that they would sell the ammunition used in them.",
    "shippingDetail": "Shipped securely within a reinforced wooden crate to prevent damage during transit.",
    "usage": {
      "activation": "Ranged Weapon Attack or as an Improvised Weapon",
      "duration": "Instantaneous, once per day for Cannonball effect; once per long rest for Improvised Weapon effect",
      "endsWhen": "Used up and can be reloaded for future use; ends with the end of a long rest",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The cannonball's unique design, quality materials, and specialized crafting contribute to its high cost.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T08:04:04.019678+00:00",
    "aiReviewedAt": "2026-07-22T08:04:04.019678+00:00",
    "aiReviewVersion": 1
  },
  "kremling_krew_piracy_consulting": {
    "id": "kremling_krew_piracy_consulting",
    "name": "Kremling Krew Piracy Consulting",
    "description": "The Kremling Krew Piracy Consulting is a rare curriculum that teaches you the ins and outs of maritime law and naval strategy. For seven days, you gain advantage on any checks related to ship navigation or boarding, making your maneuvers aboard vessels both swift and precise. However, the consulting comes with a humorous side effect; you'll be involuntarily exclaiming 'Yarrr!' at the start of every combat encounter, adding a dash of whimsy to your otherwise serious endeavors.",
    "category": "services",
    "price": 1000,
    "icon": "🏴‍☠️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Navigation Checks",
      "Involuntary Yarrr! Exclamation"
    ],
    "vendor": "kremling_krew",
    "shippedBy": "Barrel Cannon",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Advantage on Navigation Checks",
        "rules": "You gain advantage on checks related to navigating or boarding ships for a duration of seven days. This effect is not cumulative with other sources of similar advantages."
      },
      {
        "title": "Involuntary Yarrr! Exclamation",
        "rules": "At the start of every combat, you must make an involuntary sound by exclaiming 'Yarrr!' This can be silenced only if you succeed on a DC 15 Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "The curriculum requires at least sixth-level proficiency in navigation or strategy to understand its complex teachings.",
    "vendorReason": "As the creators of the consulting, Kremling Krew ensures that only those who can truly benefit from it receive it.",
    "shippingDetail": "The Barrel Cannon delivers your consulting with a splash of pirate flair, ensuring it arrives in one piece but may require some unsealing upon arrival.",
    "usage": {
      "activation": "Passive effect; no activation required",
      "duration": "Instantaneous advantage on checks for seven days",
      "endsWhen": "Seven days pass or the consulting is destroyed",
      "charges": "Unlimited, but only usable once per day"
    },
    "priceReason": "The curriculum balances as a rare item that offers significant tactical advantages without being game-breaking.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-22T08:03:57.334080+00:00",
    "aiReviewedAt": "2026-07-22T08:03:57.334080+00:00",
    "aiReviewVersion": 1
  },
  "kremling_krew_recipe_cannonball_calamari": {
    "id": "kremling_krew_recipe_cannonball_calamari",
    "name": "Recipe: Kremling Krew Cannonball Calamari",
    "description": "The Kremling Krew's cannonball of calamari, a culinary concoction of squids marinated in gunpowder and fired from an ancient cannon. This explosive treat grants you resistance to thunder damage for 1 hour and imbues your voice with the gravelly resonance of a seasoned pirate captain, making it easier to intimidate others but harder to charm them. The air around you is filled with small bursts of sparks as you burp, adding a fiery flair to your meal.",
    "price": 1000,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Grants resistance to thunder damage",
      "Voice becomes gravelly: advantage on Intimidation checks, disadvantage on Persuasion checks"
    ],
    "vendor": "kremling_krew",
    "shippedBy": "Cannonball Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resistance to Thunder Damage",
        "rules": "You gain resistance to thunder damage for 1 hour. This effect ends if you take a short or long rest."
      },
      {
        "title": "Gravelly Voice",
        "rules": "For the duration of this effect, you have advantage on Intimidation checks and disadvantage on Persuasion checks. The effect lasts until you finish a short or long rest."
      }
    ],
    "levelRequirementReason": "This recipe is simple enough for any brave adventurer to craft.",
    "vendorReason": "The Kremling Krew are notorious for their culinary and explosive experiments, making this cannonball a natural addition to their offerings.",
    "shippingDetail": "Ships via Cannonball Express with next-day delivery if purchased before noon.",
    "usage": {
      "activation": "Eaten as a meal",
      "duration": "1 hour",
      "endsWhen": "Completion of a short or long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The unique ingredients and preparation method make this cannonball a rare delicacy, justifying its moderate price.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-22T08:04:44.475245+00:00",
    "aiReviewedAt": "2026-07-22T08:04:44.475245+00:00",
    "aiReviewVersion": 1
  },
  "kremling_krew_wario_kannonball": {
    "id": "kremling_krew_wario_kannonball",
    "name": "Kremling Krew Wario Kannonball",
    "description": "The Kremling Krew Wario Kannonball is a cannonball with Wario's mischievous face etched into its surface. Crafted by K. Rool’s Engravers, this weapon whistles 'WAH!' as it flies through the air, drawing the attention of nearby foes and disrupting their plans. Its use as a thrown weapon deals 1d8 bludgeoning damage, but the distinctive sound gives enemies a moment to react, granting them advantage on their next action.",
    "category": "equipment",
    "price": 1000,
    "icon": "💣",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Whistling Whistle",
      "Surprise Disruption"
    ],
    "vendor": "kremling_krew",
    "shippedBy": "Cannonball Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whistling Whistle",
        "rules": "When thrown as a weapon, the cannonball whistles 'WAH!' in flight. This sound gives enemies within 30 feet disadvantage on their next attack roll and action checks."
      },
      {
        "title": "Surprise Disruption",
        "rules": "Enemies who hear the cannonball's whistle have advantage on saving throws against being surprised until the end of their next turn."
      }
    ],
    "levelRequirementReason": "This item is designed for players of all levels to enjoy its unique abilities.",
    "vendorReason": "The Kremling Krew are known for their mischievous wares, and this cannonball fits right into their catalog of quirky items.",
    "shippingDetail": "Delivered by the trusted Cannonball Express with a special delivery note from Wario himself.",
    "usage": {
      "activation": "Thrown weapon action",
      "duration": "Instantaneous effect",
      "endsWhen": "The cannonball hits, is caught, or misses its target",
      "charges": "Unlimited"
    },
    "priceReason": "This item provides unique battlefield disruption and a touch of Wario's humor at an affordable price.",
    "priceOriginal": 4600,
    "priceReviewedAt": "2026-07-22T08:04:08.473400+00:00",
    "aiReviewedAt": "2026-07-22T08:04:08.473400+00:00",
    "aiReviewVersion": 1
  },
  "kremling_krew_wario_krocodile": {
    "id": "kremling_krew_wario_krocodile",
    "name": "Kremling Krew Wario Krocodile",
    "description": "The Kremling Krew Wario Krocodile, a fearsome croc with Wario's signature mustache and eyes of pure malice, is a living testament to K. Rool's pet shop expertise. This beast not only intimidates foes but also exacts a price for its services, siphoning 1d4 gold pieces daily from any creature within reach. Feed it garlic or risk its wrath; the croc's displeasure spells financial ruin. Its training by Wario ensures it remains loyal to K. Rool's whims.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐊",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Intimidating Presence",
      "Daily Gold Drain"
    ],
    "vendor": "kremling_krew",
    "shippedBy": "Crocodile Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Intimidating Presence",
        "rules": "When the Kremling Krew Wario Krocodile is within 30 feet of a creature, that creature must succeed on a DC 12 Wisdom saving throw or be frightened for 1 minute. The target can repeat the save at the end of each of its turns and is no longer frightened on a success."
      },
      {
        "title": "Daily Gold Drain",
        "rules": "Each day, any creature within 5 feet of the Kremling Krew Wario Krocodile loses 1d4 gold pieces. This effect ends if the crocodile is fed garlic by its owner or if it is otherwise removed from the area."
      }
    ],
    "levelRequirementReason": "The creature's training and power require at least a level 3 character to handle effectively.",
    "vendorReason": "Kremling Krew specializes in unique, dangerous pets, and this crocodile is no exception.",
    "shippingDetail": "The courier delivers the creature securely, ensuring it arrives in its signature pose with a mustache that demands respect.",
    "usage": {
      "activation": "Passive effect; activation occurs automatically when within range of creatures.",
      "duration": "Until fed garlic or removed from area.",
      "endsWhen": "Fed garlic by owner or moved out of the area.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to reflect its unique training, daily upkeep, and the risk it poses.",
    "priceOriginal": 5400,
    "priceReviewedAt": "2026-07-22T08:04:26.145904+00:00",
    "aiReviewedAt": "2026-07-22T08:04:26.145904+00:00",
    "aiReviewVersion": 1
  },
  "lab_coat_with_explosive_pockets": {
    "id": "lab_coat_with_explosive_pockets",
    "name": "Fawful's Furious Mad Scientist Coat",
    "description": "Fawful's Furious Mad Scientist Coat is a lab coat that conceals pockets packed with explosive materials, though it never detonates as long as you remain calm and focused. The coat itself seems to hum with latent energy during experiments, hinting at the volatile forces it can harness. Made by Fawful’s Lab, this coat grants mad scientists an edge in their chaotic work, providing a +1 bonus on Intelligence (Investigation) checks for inventions.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧥",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Explosive Pocket Safety",
      "Bubbling during Experiments"
    ],
    "vendor": "fawfuls_furious_lab",
    "shippedBy": "Fuming Fabric",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Explosive Pocket Safety",
        "rules": "While wearing the coat and remaining calm, you have advantage on saving throws against effects that would detonate explosives in your pockets. The coat’s safety feature prevents explosions as long as you do not panic or act rashly."
      },
      {
        "title": "Bubbling during Experiments",
        "rules": "The coat produces a bubbling sound and visible steam when you are conducting experiments, providing advantage on Intelligence (Investigation) checks for inventions. This effect lasts until the start of your next long rest."
      }
    ],
    "levelRequirementReason": "Fawful’s Furious Mad Scientist Coat is designed for experienced mad scientists who have proven their ability to handle volatile situations calmly.",
    "vendorReason": "Fawful's Lab specializes in crafting items that cater to the eccentric needs of mad scientists, ensuring this coat meets its rigorous safety and performance standards.",
    "shippingDetail": "The coat is shipped via Fuming Fabric’s express courier service, which delivers with same-day delivery within the city limits. Outside the city, it arrives in two days.",
    "usage": {
      "activation": "Passive effect; no activation required when wearing the coat and remaining calm during experiments.",
      "duration": "Until the start of your next long rest or until you panic or act rashly.",
      "endsWhen": "The coat’s safety feature is disabled if you panic or act rashly, requiring a short rest to recharge.",
      "charges": "Unlimited; recharges at the start of each long rest."
    },
    "priceReason": "At 1000 XP, this coat balances its unique safety and utility features with the expertise required to use it effectively.",
    "priceOriginal": 16000,
    "priceReviewedAt": "2026-07-22T08:05:01.152573+00:00",
    "aiReviewedAt": "2026-07-22T08:05:01.152573+00:00",
    "aiReviewVersion": 1
  },
  "lakitu_cloud_cushion": {
    "id": "lakitu_cloud_cushion",
    "name": "Lakitu Cloud Cushion",
    "description": "The Lakitu Cloud Cushion is a plush, ethereal cloud cushion that drifts lazily in the sky. Crafted from the finest clouds of Lakitu's realm, it provides a soft landing for naps and impromptu escapes. When you sit upon it, the cushion gently rises to hover 10 feet off the ground at your command, offering a serene levitation. Should sadness weigh heavy on your heart, the cushion showers you with gentle raindrops that soothe your spirit.",
    "category": "equipment",
    "price": 1000,
    "icon": "☁️",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Hover 10 ft Off Ground",
      "Comfort +5 to Rest Rolls"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Sky Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hover 10 ft Off Ground",
        "rules": "As a bonus action, the cushion allows you to rise up to 10 feet into the air and maintain this height as long as it is not disrupted. It does not grant movement; instead, it levitates you passively. This effect ends if you take damage or when you willingly land."
      },
      {
        "title": "Comfort +5 to Rest Rolls",
        "rules": "When used on a bed or similar resting surface, the cushion provides an additional +5 bonus to your rest roll for the night. It can only be used once per day and requires at least 8 hours of uninterrupted rest."
      }
    ],
    "levelRequirementReason": "The cushion's gentle nature and ease of use make it accessible to all adventurers, ensuring that even the newest heroes can enjoy its benefits.",
    "vendorReason": "As purveyors of celestial wonders, Comet Observatory is well-known for offering items that connect mortals with the sky realm. The Lakitu Cloud Cushion is a perfect example of this philosophy.",
    "shippingDetail": "The cushion is delivered by Sky Delivery via a fleet of cloud-chariots, ensuring swift and safe arrival to your doorstep.",
    "usage": {
      "activation": "Bonus Action (to hover) or Passive (hovering)",
      "duration": "Instantaneous when first used; lasts until disrupted",
      "endsWhen": "You take damage or willingly land",
      "charges": "Unlimited, once per day for rest rolls"
    },
    "priceReason": "The cushion's rarity and the unique benefits it provides justify its moderate price of 1000 XP.",
    "priceOriginal": 17000,
    "priceReviewedAt": "2026-07-22T19:51:20.307581+00:00",
    "aiReviewedAt": "2026-07-22T19:51:20.307581+00:00",
    "aiReviewVersion": 1
  },
  "lakitu_cloud_lease": {
    "id": "lakitu_cloud_lease",
    "name": "Lakitu Cloud Lease (30 Days)",
    "description": "The Lakitu Cloud Lease is a rare contract that binds you to the service of a personal raincloud for thirty days. The cloud, a marvel of nature and alchemy, hovers at your command with a gentle, steady presence. With it, you can summon light rain to water crops or extinguish fires—nature's own solution to your needs. Optional: Call upon Lakitu to drop one Spiny daily as part of the lease, adding a touch of chaos to your adventures.",
    "category": "equipment",
    "price": 1000,
    "icon": "☁️",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Hover Flight",
      "Rainfall Control"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Weather Balloon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hover Flight",
        "rules": "You gain a fly speed of 30 feet (hover) for the duration of the lease. This effect is passive and does not require an action to activate."
      },
      {
        "title": "Rainfall Control",
        "rules": "Once per day, you can summon light rain within a 20-foot radius centered on you. The rain creates difficult terrain in that area for one hour or until the weather changes. This effect has no save DC and is usable once per day."
      }
    ],
    "levelRequirementReason": "The Lakitu Cloud Lease is accessible to beginners, as it provides a useful service without overwhelming challenges.",
    "vendorReason": "The Comet Observatory specializes in unique and rare services that align with celestial magic, making the Lakitu Cloud Lease a fitting addition to their offerings.",
    "shippingDetail": "Delivered by a weather balloon, ensuring your cloud is in perfect condition upon arrival.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "30 days from the start of the lease.",
      "endsWhen": "The lease expires or you breach the contract terms.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The Lakitu Cloud Lease is priced at a fair value, considering its unique utility and the rarity of such services in the market.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-22T08:04:39.873632+00:00",
    "aiReviewedAt": "2026-07-22T08:04:39.873632+00:00",
    "aiReviewVersion": 1
  },
  "lakitu_fishing_rod": {
    "id": "lakitu_fishing_rod",
    "name": "Lakitu Fishing Rod",
    "description": "The Lakitu Fishing Rod is a sleek, metallic rod forged from ancient Lakitu wood and adorned with silver runes that shimmer under moonlight. It allows you to reel in distant objects as if by magic, pulling them closer than they appear, or ensnare foes with a flick of the wrist. This relic is not just for fishing; it's a weapon of the sea and sky, capable of retrieving treasures from deep waters.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎣",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Reel In",
      "Fishing Mastery"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Sea Breeze Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reel In",
        "rules": "Activate as a bonus action. Choose an object or creature up to 60 feet away that is not anchored; the target must make a Strength saving throw (DC 14). On a failed save, it is pulled closer by 20 feet towards you."
      },
      {
        "title": "Fishing Mastery",
        "rules": "While holding this rod, you have advantage on Dexterity (Stealth) checks made to hide in water or underwater. Additionally, you can fish out items from bodies of water with a successful DC 12 Wisdom (Nature) check."
      }
    ],
    "levelRequirementReason": "This rod is designed for beginners and adventurers alike, making it accessible early on.",
    "vendorReason": "The Lakitu Fishing Rod is a popular item among the villagers of Valley Trading Post who rely heavily on fishing for their livelihood.",
    "shippingDetail": "Delivered by Sea Breeze Courier, usually within three days from the nearest coastal town.",
    "usage": {
      "activation": "Bonus action to use 'Reel In'; can fish out items on a successful Wisdom (Nature) check without activation.",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted when all charges are used; recharges after a long rest.",
      "charges": "Unlimited uses, but only 3 per long rest."
    },
    "priceReason": "Balanced to be affordable for early adventurers while offering unique and powerful fishing capabilities.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-22T08:05:07.674848+00:00",
    "aiReviewedAt": "2026-07-22T08:05:07.674848+00:00",
    "aiReviewVersion": 1
  },
  "larry_koopa_wand": {
    "id": "larry_koopa_wand",
    "name": "Larry's Chewed Wand",
    "description": "Larry's Chewed Wand bears unmistakable signs of its misadventures, from chew marks to a faint minty aroma. This peculiar wand can cast Prestidigitation at will, but its true charm lies in its sticky gum traps, which ensnare foes within a 10-foot radius when triggered. The gum's adhesive strength forces a Dexterity saving throw; on failure, the target is restrained for 1 minute. Koopalings have dubbed it 'Larry's Chewed Wand,' and while it may seem weak, it proves an unexpected boon in sticky situations.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪥",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Cast Prestidigitation at will",
      "Create sticky gum trap"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Chewed Wrapper Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Prestidigitation",
        "rules": "At will. No action required. The wand can cast Prestidigitation, creating minor sensory effects such as a smell, a sound heard for 10 feet, or an instantaneous change to the appearance of objects in a 5-foot radius."
      },
      {
        "title": "Gum Trap",
        "rules": "Once per day. Reaction when triggered. The wand creates a sticky gum trap with a 10-foot-radius area centered on you. Creatures entering or starting their turn within the area must make a Dexterity saving throw (DC 13). On failure, they are restrained until the effect ends."
      }
    ],
    "levelRequirementReason": "The wand's unique properties and daily use limit suggest it is suitable for lower-level characters to experiment with.",
    "vendorReason": "Comet Observatory often stocks quirky, under-the-radar items that appeal to adventurers seeking something different.",
    "shippingDetail": "Delivered via Chewed Wrapper Express, a courier known for its unusual methods of delivery.",
    "usage": {
      "activation": "At will for Prestidigitation; Reaction for Gum Trap",
      "duration": "Instantaneous for both effects",
      "endsWhen": "Prestidigitation ends when used or at the start of your next turn; Gum Trap lasts until the end of your next turn.",
      "charges": "Unlimited, but daily use limit applies to Gum Trap"
    },
    "priceReason": "The wand's unique properties and daily use limit justify a price slightly lower than a standard rare item.",
    "priceOriginal": 11000,
    "priceReviewedAt": "2026-07-22T08:05:27.188569+00:00",
    "aiReviewedAt": "2026-07-22T08:05:27.188569+00:00",
    "aiReviewVersion": 1
  },
  "lazy_shell_armor": {
    "id": "lazy_shell_armor",
    "name": "Lazy Shell (Armor)",
    "description": "The Lazy Shell Armor is a colossal red shell that feels like it's been crafted from the very heart of a tempest-tossed sea. Its surface shimmers with an eerie, iridescent glow, and its weight seems to press you into the ground, making every move feel like wading through molasses. This armor grants you unparalleled resilience against all forms of damage but drags your movements to a snail's pace, leaving you vulnerable in quick conflicts.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Invulnerability to Damage",
      "Movement Penalty"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Crane Delivery",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Invulnerability to Damage",
        "rules": "You gain resistance to all damage types. This effect is permanent while worn but requires a short rest after removal."
      },
      {
        "title": "Movement Penalty",
        "rules": "Your speed is reduced by 15 feet, and you have disadvantage on Dexterity saving throws and initiative checks. These effects last until the start of your next turn after removing the armor."
      }
    ],
    "levelRequirementReason": "The Lazy Shell Armor's weight and innate magical properties make it inaccessible to those below level 8.",
    "vendorReason": "Gilded Gryphon, known for its extensive collection of rare and powerful items, has a particularly large stock of ancient armor pieces that are often passed down through generations.",
    "shippingDetail": "Ships via Crane Delivery's express courier service within the kingdom. Due to the shell's weight, it must be secured in a specially reinforced crate for safe transport.",
    "usage": {
      "activation": "Worn as armor during combat or other dangerous situations.",
      "duration": "Permanent while worn; ends when removed and requires a short rest after removal.",
      "endsWhen": "Removed from wear. Requires a short rest to recover the effects post-removal.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1,000 XP as it provides significant defensive capabilities but imposes considerable movement penalties.",
    "priceOriginal": 280000,
    "priceReviewedAt": "2026-07-22T19:51:17.039587+00:00",
    "aiReviewedAt": "2026-07-22T19:51:17.039587+00:00",
    "aiReviewVersion": 1
  },
  "lazy_shell_weapon": {
    "id": "lazy_shell_weapon",
    "name": "Lazy Shell (Weapon)",
    "description": "The Lazy Shell is a colossal, moss-covered weapon that resembles an oversized sea snail shell mounted on a sturdy wooden handle. Its weight alone can unbalance foes, and its strikes are as devastating as a boulder rolling downhill. The shell's ancient origins make it nearly impossible to wield except by those of extraordinary strength; once in motion, the Lazy Shell's momentum ensures that even minor glances deal massive damage.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐢",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Massive Bludgeoning Strike",
      "Stunning Critical Hit"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Heavy Freight Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Massive Bludgeoning Strike",
        "rules": "When you hit with the Lazy Shell, it deals 2d12 + Strength modifier bludgeoning damage. The weapon has a reach of 10 feet and requires a minimum Strength of 18 to wield."
      },
      {
        "title": "Stunning Critical Hit",
        "rules": "If you critically hit with the Lazy Shell, the target is stunned until the start of your next turn. This effect cannot be resisted by a saving throw."
      }
    ],
    "levelRequirementReason": "The Lazy Shell's immense size and weight make it difficult for even low-level characters to wield effectively.",
    "vendorReason": "Gilded Gryphon, known for their unique and powerful artifacts, offers the Lazy Shell as a rare find among their wares.",
    "shippingDetail": "Due to its sheer size, the Lazy Shell is shipped with special handling, ensuring safe delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use; recharges on a long rest.",
      "charges": "1/long rest"
    },
    "priceReason": "The Lazy Shell's legendary rarity and the unique challenge of wielding it justify its moderate price.",
    "priceOriginal": 280000,
    "priceReviewedAt": "2026-07-22T08:06:13.929540+00:00",
    "aiReviewedAt": "2026-07-22T08:06:13.929540+00:00",
    "aiReviewVersion": 1
  },
  "league_of_legends_potion": {
    "id": "league_of_legends_potion",
    "name": "Health Potion",
    "description": "The league_of Legends potion, a vial of shimmering green liquid sealed within a glass bottle, is a potent elixir crafted by the alchemists of Toad Town Market. When consumed in the heat of battle, it heals you with a gentle but effective force that replenishes your health over time, restoring 2d4+2 hit points every 10 seconds for up to 60 seconds. This potion is highly sought after and often found at the market among adventurers seeking quick healing solutions.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 20,
    "rarity": "common",
    "effects": [
      "Quick Healing",
      "Stackable"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Swift Deliveries Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Surge",
        "rules": "When consumed, this health potion heals you for 2d4+2 hit points over a period of 10 seconds. The effect repeats every 60 seconds while the potion is active."
      },
      {
        "title": "Stackable",
        "rules": "This item can be stacked up to five times, restoring additional health each time it's consumed in quick succession."
      }
    ],
    "levelRequirementReason": "Suitable for all adventurers, as it provides a basic but essential healing ability.",
    "vendorReason": "Toad Town Market is known for its wide array of consumables and potions, making it the go-to location for adventurers in need of quick solutions.",
    "shippingDetail": "Delivered within a day by Swift Deliveries Courier; however, only available at Toad Town Market.",
    "usage": {
      "activation": "Consume the potion as an action.",
      "duration": "Healing effect lasts for 60 seconds or until consumed again.",
      "endsWhen": "The healing effect ends when the duration expires or you consume another potion in quick succession.",
      "charges": "Unlimited charges, refilling at the vendor."
    },
    "priceReason": "Balanced to provide a significant but not overpowered healing effect, making it accessible yet valuable for adventurers.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-22T08:05:47.309264+00:00",
    "aiReviewedAt": "2026-07-22T08:05:47.309264+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_bakery_bane": {
    "id": "leclaire_isle_bakery_bane",
    "name": "Sourdough Saboteur",
    "description": "The Sourdough Saboteur is a twisted loaf of bread that crackles with malevolent energy. Baked in the shadowy kitchens of Le Cleraise, this weaponized treat grants +2 to melee attacks for one turn and causes nearby doughfolk to panic and flee. It binds to your left hand for three turns and can be used to shatter enchanted pastry walls. To charge it, you must knead it for 10 minutes, expending your stamina in the process.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍞",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Melee Attack Boost",
      "Panic Aura"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Melee Attack Boost",
        "rules": "When activated by consuming one point of stamina, this bread grants +2 to melee attack rolls for one turn. It can be used once per long rest."
      },
      {
        "title": "Panic Aura",
        "rules": "Activating the Sourdough Saboteur causes all nearby doughfolk within 10 feet to make a Wisdom saving throw (DC 13) or flee in panic for one minute. They cannot take actions during this time."
      }
    ],
    "levelRequirementReason": "This item is designed for adventurers just starting their journey.",
    "vendorReason": "Le Cleraise, the master baker of Le Cleraise Isle, is known for creating items that blend the mundane with the magical.",
    "shippingDetail": "The shipment may take longer than usual due to the bread's fragile nature and need for proper kneading time upon arrival.",
    "usage": {
      "activation": "Consumes one point of stamina as an action.",
      "duration": "One turn.",
      "endsWhen": "At the end of your next turn, or if you use it again before then.",
      "charges": "Unlimited, but recharges after a long rest."
    },
    "priceReason": "The item's rarity and the unique properties make its price slightly higher than average uncommon equipment.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T08:05:40.573614+00:00",
    "aiReviewedAt": "2026-07-22T08:05:40.573614+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_bakery_blessing": {
    "id": "leclaire_isle_bakery_blessing",
    "name": "Doughbound Blessing",
    "description": "The Doughbound Blessing is a flaky pastry, its golden crust adorned with sugary swirls and sprinkles from Grand Meringue Bakery's final batch. When consumed by a 3rd-level or higher adventurer, this treat grants a temporary sugar rush: +2 attack speed for the next three turns, allowing quick strikes against foes. If you consume more than one consecutively, there’s a 10% chance of an explosive burst of arcane energy, dealing 1d6 radiant damage to all enemies within 5 feet.",
    "price": 1000,
    "icon": "🍞",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Sugar Rush",
      "Arcane Burst"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Sugar Rush",
        "rules": "When consumed as a bonus action, the adventurer gains +2 attack speed for the next three turns. This effect ends after the duration or if the adventurer takes damage."
      },
      {
        "title": "Arcane Burst",
        "rules": "If consuming more than one Doughbound Blessing consecutively results in an 10% chance of triggering, dealing 1d6 radiant damage to all enemies within 5 feet. This effect can only be triggered once per day."
      }
    ],
    "levelRequirementReason": "The dough's complex ingredients and the arcane energy embedded require a moderate level of skill and magical understanding.",
    "vendorReason": "LeClair Isle Bakery is renowned for its unique, enchanted pastries that enhance adventurers' abilities in challenging quests.",
    "shippingDetail": "The courier delivers the pastry within an hour of purchase with a special delivery charm to preserve its potency.",
    "usage": {
      "activation": "Bonus action when consumed.",
      "duration": "+2 attack speed for three turns.",
      "endsWhen": "After duration or if damage is taken.",
      "charges": "Unlimited, but only one Arcane Burst per day."
    },
    "priceReason": "The rare ingredients and the bakery's limited production justify its high price, making it a valuable treasure for adventurers.",
    "priceOriginal": 450,
    "priceReviewedAt": "2026-07-22T08:06:10.838675+00:00",
    "aiReviewedAt": "2026-07-22T08:06:10.838675+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_baking_cage": {
    "id": "leclaire_isle_baking_cage",
    "name": "Baking Cage of the Doughfolk",
    "description": "The Baking Cage of the Doughfolk is a peculiar device forged from dough and enchanted with the magic of LEclaire Isle. This cage can be activated to summon dough constructs that mimic the user's commands for two turns, each capable of dealing 2d6 damage with a smash attack. The constructs have 3d6 hit points and leave a slight residue if overused. Upon activation, it grants temporary control over dough elements within a few feet radius, allowing the user to manipulate them as if they were clay.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧁",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Dough Control",
      "Construct Summoning"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Paratroopa Air",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Dough Control",
        "rules": "By using an action, the user can activate the Baking Cage to exert temporary control over dough elements within a few feet radius. This effect lasts for two turns and allows the user to manipulate these elements as if they were clay."
      },
      {
        "title": "Construct Summoning",
        "rules": "The user can summon up to two dough constructs by using an action. These constructs have 3d6 hit points and can attack once per turn with a smash that deals 2d6 damage. The constructs last for the duration of the spell, which is two turns."
      }
    ],
    "levelRequirementReason": "This device requires a moderate level to control its dough magic safely.",
    "vendorReason": "The Doughfolk of LEclaire Isle are the original craftsmen and thus have the right to sell this unique item.",
    "shippingDetail": "Delivered swiftly by Paratroopa Air, ensuring the delicate device arrives in perfect condition.",
    "usage": {
      "activation": "Action",
      "duration": "2 turns",
      "endsWhen": "The duration ends or when the constructs are destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "This item, while powerful, is not overpriced due to its limited number of uses and the specialized craftsmanship required.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-22T08:06:02.038376+00:00",
    "aiReviewedAt": "2026-07-22T08:06:02.038376+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_baking_treasure": {
    "id": "leclaire_isle_baking_treasure",
    "name": "Diamond Crust Bangle",
    "description": "The Diamond Crust Bangle is a delicate, sugary band that encircles your wrist like a crown of ambition. Crafted by the Vampire Covenant from sugar and gold, it whispers promises of sweet victory in your ear. Wearing this bangle grants you a temporary speed boost, allowing you to outrun danger with grace. However, prolonged use can cause minor nausea, making it wise to rest after a long day of feasting on sweets.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍞",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Speed Boost",
      "Sweet Visions"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "As a bonus action, you can activate the Diamond Crust Bangle to gain a +10 foot bonus to your speed for 1 minute. This effect ends if you are incapacitated or if you use this feature again."
      },
      {
        "title": "Sweet Visions",
        "rules": "Once per short rest, when an enemy attacks you, you can trigger the bangle's sweetness, causing the attacker to gain a sweet vision that lasts for 1d4 rounds. During this time, the attacker has disadvantage on all attack rolls against you."
      }
    ],
    "levelRequirementReason": "This item is crafted with simple sugar and gold, making it accessible to beginners.",
    "vendorReason": "Leclair Isle is known for its sweet treats, so selling such a sugary trinket fits their specialty.",
    "shippingDetail": "Delivered with a flourish of confetti and a sprinkle of sugar dust.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "1 minute or until interrupted",
      "endsWhen": "You are incapacitated or use it again",
      "charges": "Unlimited"
    },
    "priceReason": "The bangle's rarity and unique crafting process justify its higher price.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T08:06:18.451193+00:00",
    "aiReviewedAt": "2026-07-22T08:06:18.451193+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_bread_binder": {
    "id": "leclaire_isle_bread_binder",
    "name": "Bread Binder",
    "description": "The Bread Binder is a rustic, hand-forged device made from the heartwood of ancient Connectopian oaks and enchanted by the Dough Folk. It can fuse three pieces of baked goods into one reinforced structure, turning fragile pastries into durable constructs capable of withstanding harsh winds or hostile creatures. Once bound, the structures last for 10 minutes before disintegrating into their original components. To activate it, you must offer a pinch of sugar, ensuring the bond is sweet and strong.",
    "price": 1000,
    "icon": "🧱",
    "stock": 20,
    "rarity": "common",
    "effects": [
      "Fuses baked goods into reinforced objects",
      "Creates temporary bonds lasting 10 minutes"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Paratroopa Air",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Binding Fusion",
        "rules": "Activates as a bonus action. You can fuse three pieces of baked goods into one reinforced structure. The fused object gains +2 AC and is immune to all damage types for the duration, but it disintegrates if subjected to fire or water."
      },
      {
        "title": "Temporary Bond",
        "rules": "The bond lasts for 10 minutes before dissolving into its original components. If disrupted by fire or water within this time, the bond fails instantly and all fused materials are consumed."
      }
    ],
    "levelRequirementReason": "Even novice bakers can learn to use the Bread Binder effectively.",
    "vendorReason": "Le Claire Isle is renowned for its baking traditions and knowledge of Connectopian ingredients, making it a trusted vendor for such devices.",
    "shippingDetail": "Ships swiftly via Paratroopa Air's express courier service. Expect delivery within three days.",
    "usage": {
      "activation": "Bonus action to fuse baked goods",
      "duration": "10 minutes or until disrupted by fire or water",
      "endsWhen": "The bond between the fused materials dissolves into their original components upon disruption or expiration of time",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted from enchanted wood and requiring a pinch of sugar, this item is both powerful and rare.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-22T08:06:50.554644+00:00",
    "aiReviewedAt": "2026-07-22T08:06:50.554644+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_cake_chains": {
    "id": "leclaire_isle_cake_chains",
    "name": "Cake Chains",
    "description": "Cake Chains are a set of enchanted iron chains imbued with the essence of Leclaire Isle's finest pastries. These chains, forged from sweetened iron and adorned with sugary patterns, can be attached to any item, even unconventional ones like pipes or toads. When activated, they bind targets in place for a round, preventing movement and granting attackers against bound targets an additional 2d4 damage. Only bakers or toads attuned to these chains can wield them, and they are only effective when the Pipe Network is offline due to sabotage.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍞",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Bind Targets",
      "Increased Damage"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Paratroopa Air",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bind Targets",
        "rules": "When activated as a bonus action, Cake Chains bind any target within reach in place for one round. The bound creature cannot move or take reactions until the end of its next turn. This effect has no save DC and is usable once per short rest."
      },
      {
        "title": "Increased Damage",
        "rules": "For every round a target remains bound, attackers gain an additional 2d4 damage against them. This effect ends when the target escapes or the chains are retracted by their wielder."
      }
    ],
    "levelRequirementReason": "These chains require attunement by someone who appreciates the finer things in life, like bakers and toads.",
    "vendorReason": "Leclaire Isle is renowned for its sweet ironwork and magical pastries, making it a fitting vendor for these enchanted chains.",
    "shippingDetail": "Shipped via Paratroopa Air with the note: “For the Aegis Prison Break.”",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 round per activation",
      "endsWhen": "Target escapes or wielder retracts chains",
      "charges": "Unlimited, but one use per short rest"
    },
    "priceReason": "Balanced price reflects the material rarity and limited attunement requirements.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T08:06:25.987541+00:00",
    "aiReviewedAt": "2026-07-22T08:06:25.987541+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_crossworld_key": {
    "id": "leclaire_isle_crossworld_key",
    "name": "Garlic Glaze Keyring",
    "description": "This keyring glimmers with a soft, garlicky sheen, crafted from the teeth of a vampire's long-lost relative. It not only opens secret vaults within Wario Land but also shields its bearer from garlic-based traps designed to incapacitate even the most seasoned adventurers. The keyring is said to have been forged in the ancient forge of the Vampire Covenant, whose artisans once thrived on the Isle of Leclaire.",
    "price": 1000,
    "icon": "🍆",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Opens hidden vaults in Wario Land",
      "Grants immunity to garlic-based traps"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unlock Hidden Vaults",
        "rules": "By making a successful Intelligence (Arcana) check, the wielder can unlock any hidden vault within the realm of Wario Land. This effect is usable once per day."
      },
      {
        "title": "Garlic Trap Immunity",
        "rules": "The wearer gains immunity to all effects from garlic-based traps for 1 hour after activating this keyring. No saving throw is required, and no other action is needed besides holding the keyring during a trap's activation."
      }
    ],
    "levelRequirementReason": "Even the simplest adventurers can benefit from this keyring's unique properties.",
    "vendorReason": "Leclaire Isle is known for its connections to the fantastical realms and holds many relics from the Vampire Covenant.",
    "shippingDetail": "Ships via Bullet Bill Express, ensuring delivery within a week of purchase.",
    "usage": {
      "activation": "Used as an action by holding it during the trap's activation or when unlocking vaults.",
      "duration": "Instantaneous for trap immunity; lasts until the end of the next long rest for vault unlocking.",
      "endsWhen": "The effects expire naturally after their duration, and no charges apply.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price point to ensure accessibility without overshadowing more powerful items.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T08:06:42.080106+00:00",
    "aiReviewedAt": "2026-07-22T08:06:42.080106+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_crumble_cannon": {
    "id": "leclaire_isle_crumble_cannon",
    "name": "Crumble Cannon",
    "description": "The Crumble Cannon is a colossal pastry cannon forged from the finest sugared iron and lined with crisp, golden dough. Crafted on LeClaire Isle by the whimsical Pâtissier Paratroopa, it fires explosive pastry shards that deal 2d6 damage to all enemies in a burst, accompanied by a deafening boom of sweet chaos. It grants +1 to all ranged attack rolls while carried and requires only a single 30-second baking cycle for reloading, ensuring you're always ready for battle.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧁",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Explosive Pastry Shards",
      "Ranged Attack Bonus"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Paratroopa Air",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Explosive Pastry Shards",
        "rules": "When activated by a ranged attack, the Crumble Cannon fires 1d6 explosive pastry shards that deal 2d6 damage to all enemies within a 10-foot burst. It triggers a magical backlash if fired near a Pipe Network node, dealing an additional 1d4 fire damage to the user and forcing them to make a DC 15 Dexterity saving throw or be knocked prone."
      },
      {
        "title": "Ranged Attack Bonus",
        "rules": "While carrying the Crumble Cannon, you gain a +1 bonus to all ranged attack rolls. This effect persists for as long as you carry the cannon and is not subject to any use limit."
      }
    ],
    "levelRequirementReason": "The Crumble Cannon's intricate design and explosive capabilities make it suitable only for those of at least 8th level, ensuring they can handle its destructive potential.",
    "vendorReason": "LeClaire Isle is renowned for its culinary prowess and the creation of magical pastries; thus, it's fitting that this pastry cannon originates from there.",
    "shippingDetail": "Shipped by Paratroopa Air with a warning: ‘Do not eat. Or else.’ The delivery is delayed by 24 hours to ensure proper handling of the volatile cargo.",
    "usage": {
      "activation": "On your action, as part of a ranged attack.",
      "duration": "Instantaneous",
      "endsWhen": "The cannon fires and expended charges are reloaded during a single baking cycle (30 seconds).",
      "charges": "Unlimited; reloaded with a 30-second baking cycle."
    },
    "priceReason": "The Crumble Cannon's balance is justified by its unique design, explosive capabilities, and the special handling required for shipping, making it a fair value at 1000 XP.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T08:06:35.660459+00:00",
    "aiReviewedAt": "2026-07-22T08:06:35.660459+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_custodian_satchel": {
    "id": "leclaire_isle_custodian_satchel",
    "name": "Custodian Satchel of the Unspoken Pact",
    "description": "The Custodian Satchel of the Unspoken Pact is a rare pastry satchel crafted from embossed parchment and adorned with gold thread. It whispers secrets only to those who know its code, storing up to fifty tokens of magical currency and unlocking hidden passages in enchanted bakeries across Le Cleraise. When held by one sworn to the Unspoken Pact, it glows softly, a beacon for hidden magic and lost recipes. Only a pastry seal can activate this satchel’s true power: the whispering recipe book that mutters ancient culinary secrets.",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Magical Currency Storage",
      "Unlock Hidden Passages"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Magical Currency Storage",
        "rules": "The custodian satchel can hold up to fifty tokens of magical currency. It must be sealed with a pastry seal before any tokens are stored or retrieved."
      },
      {
        "title": "Unlock Hidden Passages",
        "rules": "Upon activation, the satchel reveals hidden passages in enchanted bakeries within a 50-foot radius. This effect lasts for 1 hour and requires no save DC. The effect is exhausted after use."
      }
    ],
    "levelRequirementReason": "This satchel requires at least third-level proficiency to ensure the user can properly activate its magical seals.",
    "vendorReason": "The custodians of Le Cleraise Isle are experts in enchanted pastries and know the secrets behind this satchel’s power.",
    "shippingDetail": "Delivered via Pipe Express, with a special delivery delay to ensure the pastry seals remain intact.",
    "usage": {
      "activation": "Object interaction (requires sealing with a pastry seal)",
      "duration": "1 hour or until used",
      "endsWhen": "Used or until the next long rest",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, this satchel is moderately priced for its rarity and utility in both monetary storage and magical exploration.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-22T08:06:40.504612+00:00",
    "aiReviewedAt": "2026-07-22T08:06:40.504612+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_dough_folk_gear": {
    "id": "leclaire_isle_dough_folk_gear",
    "name": "Crumb of the Dough Folk",
    "description": "The Crumb of the Dough Folk is a delicate, crumb-strewn relic from the sugary realm. Crafted by the Vampire Covenant from refined sugar and enchanted flour, this morsel grants you 100 Hunger Points upon consumption, causing your next meal to taste sweeter than ever before. However, as if consumed by an ethereal dream, you may experience fleeting hallucinations of pastries dancing in the air around you for the duration.",
    "price": 1000,
    "icon": "🍞",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Restores 100 Hunger Points",
      "Enhances flavor perception"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hunger Restoration",
        "rules": "Eating the Crumb of the Dough Folk immediately restores 100 Hunger Points. This effect lasts until your next meal is consumed."
      },
      {
        "title": "Enhanced Flavor Perception",
        "rules": "For one hour after consuming this crumb, any food you eat tastes twice as delicious as normal. This enhancement does not affect the nutritional value or caloric content of the food. Save DC 12 to resist any hallucinations."
      }
    ],
    "levelRequirementReason": "Suitable for adventurers who need a quick boost in energy and are not yet fully versed in more complex magic.",
    "vendorReason": "Le Clairé Isle, known for its sweet treats and sugary delights, naturally stocks this delightful relic.",
    "shippingDetail": "Ships overnight with the signature Bullet Bill Express service.",
    "usage": {
      "activation": "Eaten as a snack or meal component",
      "duration": "Until next meal is consumed",
      "endsWhen": "Ends upon consuming your next meal",
      "charges": "Unlimited, as long as you have meals to consume"
    },
    "priceReason": "The Crumb of the Dough Folk is priced high due to its unique crafting process and the limited stock available from the Vampire Covenant.",
    "priceOriginal": 500,
    "priceReviewedAt": "2026-07-22T08:07:20.524842+00:00",
    "aiReviewedAt": "2026-07-22T08:07:20.524842+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_fire_flower_core": {
    "id": "leclaire_isle_fire_flower_core",
    "name": "Volcanic Bloom Core",
    "description": "The Volcanic Bloom Core is a crimson core forged from the heart of the Primordial Wyrm’s breach. This fiery core amplifies fire-based attacks and imbues enemies with explosive mutations, causing them to shatter their defenses at every strike. Crafted using the last remaining Fungi pipe and fused with a sugar-fueled ritual, it only works in conjunction with the Fire Flower strain, ensuring that its power is used wisely in the Valley of Bowser.",
    "price": 1000,
    "icon": "🌶",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Enhanced Fire Damage",
      "Explosive Mutations"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Enhanced Fire Damage",
        "rules": "When used with a fire-based attack, this core grants +100% damage to the attack. The effect lasts until the end of your next turn."
      },
      {
        "title": "Explosive Mutations",
        "rules": "Enemies hit by a fire-based attack from you have a 20% chance to take an additional 1d6 fire damage and their AC is reduced by 2 for 1 minute. This effect ends if the target takes any non-fire damage."
      }
    ],
    "levelRequirementReason": "This core requires significant experience and control to wield, appropriate only for seasoned adventurers.",
    "vendorReason": "Leclair Isle is known for its expertise in crafting exotic and powerful items from the heart of volcanic regions, making them a fitting vendor for this artifact.",
    "shippingDetail": "Ships via the Chain Chomp Courier directly to the Valley of Bowser within three days.",
    "usage": {
      "activation": "As an action, activate the core before using a fire-based attack.",
      "duration": "Instantaneous effect; lasts until the end of your next turn.",
      "endsWhen": "The effect ends if you use a non-fire-based attack or take any non-fire damage.",
      "charges": "Unlimited uses per short rest"
    },
    "priceReason": "This core is crafted from rare materials and requires expert knowledge to fuse, making it moderately priced for its power.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T08:06:56.134012+00:00",
    "aiReviewedAt": "2026-07-22T08:06:56.134012+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_fungal_ether": {
    "id": "leclaire_isle_fungal_ether",
    "name": "Fungi Veil Infusion",
    "description": "The Fungi Veil Infusion is a potent elixir crafted from the last remnants of the Princess of Fungi’s ritual. This glowing, mushroom-infused potion shimmers with bioluminescence and can be used only in areas teeming with fungal life. When consumed, it grants temporary stealth, allowing the imbiber to move silently for 2 rounds at a +50% bonus to Dexterity (Stealth) checks. Additionally, when mixed with a pipe weapon, fire damage dealt by that weapon increases by 30%, but only in mushroom-infested zones where the Fungi Veil’s power thrives.",
    "price": 1000,
    "icon": "🍄",
    "stock": 8,
    "rarity": "rare",
    "effects": [
      "Poison Absorption",
      "Enhanced Stealth"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Absorbs Poison",
        "rules": "When consumed, the Fungi Veil Infusion absorbs 2d4 poison damage. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Stealth Boost",
        "rules": "For 2 rounds after consumption, the imbiber gains a +50% bonus to Dexterity (Stealth) checks. The effect ends when the duration expires or if the imbiber moves more than 10 feet in a direction other than toward their destination."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to handle the potion’s potent effects.",
    "vendorReason": "LeClair Isle, known for its fungal-rich environments, is the only place where this rare infusion can be found and sold.",
    "shippingDetail": "Delivered via Chain Chomp Courier; may take an extra day in areas not heavily infested with mushrooms.",
    "usage": {
      "activation": "Instantaneous consumption",
      "duration": "2 rounds",
      "endsWhen": "Ends when the duration expires or the imbiber moves more than 10 feet in a direction other than toward their destination.",
      "charges": "Unlimited, but only usable once per day"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare crafting and potent effects.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T08:06:58.166958+00:00",
    "aiReviewedAt": "2026-07-22T08:06:58.166958+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_name_here": {
    "id": "leclaire_isle_item_name_here",
    "name": "Sugarcrusted Dagger",
    "description": "The Sugarcrusted Dagger is a blade forged from the ethereal light of the moon and delicate pastry dough. Its handle is wrapped in sugared threads, and its edge shimmers with crystallized sweetness. This dagger not only wounds but also leaves behind a lingering effect that heals over time and causes an irresistible craving for sweets among those struck by it. The wielder, however, must endure a slight reduction in movement speed.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Sweetened Wounds",
      "Sugary Craving"
    ],
    "vendor": "Leclaire Isle",
    "shippedBy": "Sweet Tooth Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sweetened Wounds",
        "rules": "When the Sugarcrusted Dagger strikes, it deals an additional 1d6 sweet healing damage to the target over the next minute. This effect ends if the target is healed by another source or leaves the battlefield."
      },
      {
        "title": "Sugary Craving",
        "rules": "For each successful hit with the Sugarcrusted Dagger, there is a 50% chance that the target must succeed on a DC 13 Constitution saving throw or be incapacitated by an overwhelming craving for sugar. This condition lasts until the end of their next turn."
      }
    ],
    "levelRequirementReason": "The Sugarcrusted Dagger is crafted with moderate complexity and requires basic dexterity to wield effectively.",
    "vendorReason": "Leclaire Isle, known for its sugary treats and enchanted items, naturally sells this unique weapon.",
    "shippingDetail": "Ships with a special sugar-infused delivery that ensures the blade remains in pristine condition.",
    "usage": {
      "activation": "Melee Weapon Attack",
      "duration": "Instantaneous for each hit; Sweetened Wounds lasts 1 minute per hit.",
      "endsWhen": "When the target is healed by another source or leaves the battlefield, or if the wielder drops the weapon.",
      "charges": "Unlimited"
    },
    "priceReason": "The Sugarcrusted Dagger combines magical properties with a rare crafting material, making it moderately priced for its effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T08:07:06.023910+00:00",
    "aiReviewedAt": "2026-07-22T08:07:06.023910+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_mirror_bread": {
    "id": "leclaire_isle_mirror_bread",
    "name": "Mirror Bread",
    "description": "Mirror Bread is a loaf baked by the cursed baker of Leclair Isle, infused with the soul of a fallen baker. When consumed, it grants fleeting insight into a hidden memory or secret door, enhancing Perception checks and revealing truths. However, it risks triggering a hallucinatory vision of the Shadowfell if used in combat. This bread is said to be baked under dark omen, delivered by Noki Coral Fleet through their treacherous routes.",
    "price": 1000,
    "icon": "🍞",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "Reveals hidden secrets",
      "Enhances Perception checks"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Secret Revelation",
        "rules": "When consumed during a short rest or an hour-long period of meditation, the eater gains advantage on one Intelligence (Insight) check to uncover a secret memory or hidden door. If used in combat, it triggers a hallucinatory vision with a 50% chance and a DC 15 Wisdom saving throw to avoid. The effect lasts for 1 round."
      },
      {
        "title": "Enhanced Perception",
        "rules": "Upon consumption, the eater gains +2d4 to their next Intelligence (Perception) check. This effect is instantaneous and does not require action. It can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Suitable for adventurers of all levels who need insight into hidden truths.",
    "vendorReason": "Leclair Isle is known for its mysterious and cursed items, making Mirror Bread a fitting addition to the island's offerings.",
    "shippingDetail": "Delivered through treacherous routes with potential delays due to unpredictable sea conditions.",
    "usage": {
      "activation": "Eaten during a short rest or meditation, or consumed passively after a long rest.",
      "duration": "1 round when used in combat; instantaneous and unlimited uses otherwise.",
      "endsWhen": "Effect ends naturally at the end of the duration or if used in battle.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its rare origin, cursed nature, and the potential for both beneficial and harmful effects.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-22T08:07:12.173465+00:00",
    "aiReviewedAt": "2026-07-22T08:07:12.173465+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_mushroom_bomb": {
    "id": "leclaire_isle_mushroom_bomb",
    "name": "Fungal Bomb of the Fungi Queen",
    "description": "The Fungal Bomb of the Fungi Queen is a potent weapon forged from the last remaining pipe used in the Fungi Civil War. Crafted by the Fungi Queen’s final apprentice, this mushroom-infested bomb detonates on contact, unleashing scalding fire and confusion among foes. Upon activation, it deals 2d6 fire damage to all creatures within a 5-foot radius. Additionally, there's an eerie chance of triggering a mushroom cloud that leaves nearby enemies confused for 1 round with advantage on saving throws. Consuming more than one in rapid succession can induce sugar-induced hallucinations, causing the user to stagger and lose their balance.",
    "price": 1000,
    "icon": "🍄",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Detonates on contact",
      "Confuses nearby enemies"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Explosive Impact",
        "rules": "When activated, this bomb detonates on contact with a target within a 5-foot radius. It deals 2d6 fire damage to all creatures in the area. This effect has no save or duration; it only occurs once per activation."
      },
      {
        "title": "Mushroom Cloud",
        "rules": "There's a 10% chance that upon detonation, a mushroom cloud will erupt, confusing nearby enemies for 1 round with advantage on saving throws. This effect can occur multiple times but is limited to once per bomb used."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 4 due to its potent fire-based damage and confusion-inducing effects.",
    "vendorReason": "Le Claire Isle is known for its connection to the Fungi Queen’s legacy, making it fitting for this weapon's sale.",
    "shippingDetail": "This explosive item requires special handling and is shipped via Chain Chomp Courier directly to the Valley of Bowser.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after use",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its rare origins, potent effects, and the unique crafting process involving remnants of a significant historical event.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-22T08:07:14.440421+00:00",
    "aiReviewedAt": "2026-07-22T08:07:14.440421+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_mushroom_key": {
    "id": "leclaire_isle_mushroom_key",
    "name": "Mushroom Kingdom Key",
    "description": "The Mushroom Kingdom Key is a delicate brass key with an intricate pattern of mushrooms and vines. Crafted from the last remnants of Princess Daisy's amulet, this key can open any sealed door within the Mushroom Kingdom. It also grants temporary immunity to magical drugs for one hour after use. Each activation has a 10% chance to cause a wild mushroom hallucination, which lasts for 24 hours and affects the user’s perception but not their physical state.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 5,
    "rarity": "legendary",
    "effects": [
      "Opens all sealed doors",
      "Grants immunity to magical drugs"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Door Opening",
        "rules": "Activates when the Wyrm's seal is broken, allows opening of any sealed door within the Mushroom Kingdom. The effect ends when a new sealed door requires unlocking."
      },
      {
        "title": "Immunity to Drugs",
        "rules": "Grants immunity to all magical drugs for one hour after use. The effect ends upon expiration or if the user is exposed to another form of drug."
      }
    ],
    "levelRequirementReason": "This key can be used by anyone, as its power comes from the relic’s inherent magic rather than the user's strength.",
    "vendorReason": "LeClair Isle is renowned for its connections to the Mushroom Kingdom and holds many relics of its history.",
    "shippingDetail": "Shipped under strict Servants Cosmic oversight, ensuring quick delivery via Chain Chomp’s unique methods.",
    "usage": {
      "activation": "Activates when the Wyrm's seal is broken",
      "duration": "Instantaneous for door opening; one hour for immunity to drugs",
      "endsWhen": "New sealed door requires unlocking or expiration of effect, respectively",
      "charges": "Unlimited uses"
    },
    "priceReason": "The key's rarity and unique crafting process justify a price that is half the original value.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T08:07:20.702358+00:00",
    "aiReviewedAt": "2026-07-22T08:07:20.702358+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_mushroom_mantle": {
    "id": "leclaire_isle_mushroom_mantle",
    "name": "Fungi Fable Cloak",
    "description": "The Fungi Fable Cloak is a shimmery, iridescent mantle woven from ancient fungi that glow faintly in the dark. Crafted by the mushroom cultists of Le Claire Isle during the Fungi Civil War, it grants immunity to poison and magical debuffs from fungal sources. When worn, its wearer's step becomes as light and swift as a forest breeze, increasing their movement speed by 15%. The cloak is not just functional; it can split into three resilient fragments that each serve a unique purpose—creating temporary portals to mushroom groves or causing confusion among enemies who dare enter the enchanted fungal realms.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Fungal Immunity",
      "Swift Step"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Fungal Immunity",
        "rules": "The wearer is immune to poison and magical debuffs from sources that are fungal in nature. This effect persists for the duration of attunement."
      },
      {
        "title": "Swift Step",
        "rules": "While wearing the cloak, the user's movement speed increases by 15%. This benefit lasts until the end of their next turn or when they remove the cloak."
      }
    ],
    "levelRequirementReason": "The complexity and magical essence of the Fungi Fable Cloak require a minimum level to handle its power effectively.",
    "vendorReason": "Le Claire Isle is renowned for its rich fungal heritage, making it the ideal vendor for this unique artifact.",
    "shippingDetail": "Ships via Warp Whistle Transit with expedited delivery ensuring the cloak arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect when worn; portals and confusion effects are triggered upon entering a mushroom grove or enemy entering the area, respectively.",
      "duration": "Permanent attunement until removed",
      "endsWhen": "Detachment from wearer or removal of the cloak",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Fungi Fable Cloak’s balanced price reflects its rarity and the complexity of its magical properties.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T08:07:30.255418+00:00",
    "aiReviewedAt": "2026-07-22T08:07:30.255418+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_mushroom_sword": {
    "id": "leclaire_isle_mushroom_sword",
    "name": "Fungi Sword of the Fungi Queen",
    "description": "The Fungi Sword of the Fungi Queen is a deadly weapon forged from the remnants of a pipe used in the final battle of the Fungi Civil War. Crafted by the last apprentice to the Fungi Queen, it radiates with potent fire magic that incinerates foes. Its hilt is encrusted with glowing mushrooms that pulse with energy when wielded near heat or fire. This sword not only deals scathing damage but also causes nearby enemies to become disoriented, stumbling and losing focus for a short time.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Fire Damage",
      "Disorienting Mushroom Cloud"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Scalding Flames",
        "rules": "The Fungi Sword deals 2d6 fire damage on hit. If the target is within a 10-foot radius of a source of fire, there is a 10% chance to trigger a mushroom cloud that confuses all enemies in the area for their next action."
      },
      {
        "title": "Mushroom Cloud",
        "rules": "When triggered by a nearby source of fire, this effect lasts until the end of the target's next turn. Enemies within 10 feet must make a DC 15 Constitution saving throw or become confused for 1 minute."
      }
    ],
    "levelRequirementReason": "Requires at least 8th level to wield effectively in combat.",
    "vendorReason": "Leclair Isle is known for its deep ties with the Fungi Queen and her legacy, making it a fitting vendor for this powerful weapon.",
    "shippingDetail": "Delivered via Chain Chomp Courier, ensuring safe arrival in the Valley of Bowser.",
    "usage": {
      "activation": "On hit as part of the attack action",
      "duration": "Instantaneous and lasts until end of next target's turn for confusion effect",
      "endsWhen": "The effect ends when the target successfully saves or completes their next turn",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "Balanced at 1000 XP to reflect its epic rarity and unique abilities.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T08:07:32.646953+00:00",
    "aiReviewedAt": "2026-07-22T08:07:32.646953+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_mushroom_torch": {
    "id": "leclaire_isle_mushroom_torch",
    "name": "Fungi Torch of the Fungi Queen",
    "description": "The Fungi Torch of the Fungi Queen is a torch forged from the last remaining pipe used in the Fungi Civil War. Crafted by the Fungi Queen’s final apprentice, it glows with an eerie orange light and smokes faintly as if alive. This torch grants +20% damage to all fire-based attacks and has a unique effect: when used within a mushroom-infested zone, there's a 10% chance that a cloud of mushrooms will rise up, confusing nearby enemies for one round.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Flame Boost",
      "Mushroom Cloud"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Flame Boost",
        "rules": "When the torch is used in combat, the wielder gains +20% damage to all fire-based attacks. This effect lasts until the end of their next turn."
      },
      {
        "title": "Mushroom Cloud",
        "rules": "Upon activation within a mushroom-infested zone, there's a 10% chance that a cloud of mushrooms will rise up and cause confusion among nearby enemies for one round. This effect has a 5-foot radius around the wielder."
      }
    ],
    "levelRequirementReason": "The intricate magic in the Fungi Torch requires a fair amount of spellcasting knowledge to properly utilize its effects.",
    "vendorReason": "LeClaire Isle has long been a trusted supplier of rare and magical items, including those with ties to the Fungi Queen’s legacy.",
    "shippingDetail": "The Chain Chomp Courier ensures safe delivery through the Mushroom-infested zones, but may require an additional fee for hazardous areas.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Until the end of your next turn or until you use another bonus action to extinguish it",
      "endsWhen": "You use another bonus action to extinguish the torch or if it is destroyed in combat",
      "charges": "Unlimited"
    },
    "priceReason": "The Fungi Torch is crafted from rare materials and ancient magic, making it a valuable and sought-after item among adventurers.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T08:07:38.631705+00:00",
    "aiReviewedAt": "2026-07-22T08:07:38.631705+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_paratroopa_pouch": {
    "id": "leclaire_isle_paratroopa_pouch",
    "name": "Paratroopa Air Sack of Crumbs",
    "description": "The Paratroopa Air Sack of Crumbs is a compact, weathered sack adorned with the emblem of Prince Peasley. It contains 100 Beanbean coins and five enchanted sugar cubes, each crafted from the sugarcane fields of Leclaire Isle. These cubes are not just simple sweets; they emit a fragrant aroma that can momentarily confuse foes, causing them to falter for one turn when thrown. The sack's true value lies in its ability to secure safe passage with the Paratroopa Air crew, who recognize Peasley’s signature and the coins as proof of legitimacy.",
    "price": 1000,
    "icon": "🌬",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Confuse Enemies",
      "Secure Safe Passage"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Paratroopa Air",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Confuse Enemies",
        "rules": "When a sugar cube is thrown, it emits a sweet scent that causes minor confusion to foes within 10 feet. The effect lasts for 1 turn (up to one minute). Creatures affected must make a Wisdom saving throw with a DC of 13 or become confused until the start of their next turn."
      },
      {
        "title": "Secure Safe Passage",
        "rules": "The Paratroopa Air Sack can be used once to secure safe transport on a flight. The crew will not interfere with your journey, and they may even offer assistance if needed. This effect is permanent until the transport ends or the user requests another destination."
      }
    ],
    "levelRequirementReason": "The Paratroopa Air Sack of Crumbs can be used by any adventurer to secure passage without requiring a specific class or level.",
    "vendorReason": "Leclaire Isle is known for its sugarcane fields and the Paratroopa Air crew, who frequently travel between islands. The local vendors sell items that can be used by adventurers to ensure their safety and success in their endeavors.",
    "shippingDetail": "The sack is shipped via a specially chartered Paratroopa Air flight, ensuring it reaches its destination safely and swiftly.",
    "usage": {
      "activation": "Throw one enchanted sugar cube as an action.",
      "duration": "1 turn (up to one minute) per sugar cube used.",
      "endsWhen": "The effect ends when the creature successfully saves or the turn begins.",
      "charges": "5 uses"
    },
    "priceReason": "The Paratroopa Air Sack of Crumbs offers a valuable combination of utility and safety, making it worth the lower price point compared to more powerful items.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T08:07:41.330138+00:00",
    "aiReviewedAt": "2026-07-22T08:07:41.330138+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_pipe_punch": {
    "id": "leclaire_isle_pipe_punch",
    "name": "Gilded Geyser Gun",
    "description": "The Gilded Geyser Gun is a whimsical yet fearsome contraption crafted from gilded brass and enchanted with pipe syrup. It spits out explosive projectiles that rain down like miniature geysers, dealing 3d8 fire damage to all creatures in an area. Each blast also triggers a minor eruption of syrup, coating nearby foes in sticky magic that reduces their Dexterity saving throws by half for the next minute. This device requires a strong arm and a steady hand; it drains 10% of your stamina with each shot, but can be reloaded swiftly using pipes from the Mushroom Kingdom’s underground network.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎭",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Explosive Geysers",
      "Syrupy Coating"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Explosive Geysers",
        "rules": "When you activate the Gilded Geyser Gun, a burst of fire and syrup erupts from its barrel. This deals 3d8 fire damage to all creatures within a 15-foot cone. The explosion ends immediately on your turn or when you use an action. Save DC 14."
      },
      {
        "title": "Syrupy Coating",
        "rules": "For every creature hit by the geyser, they must succeed on a Dexterity saving throw (DC 14) or be coated in syrup for the next minute. This reduces their Dexterity saving throws by half until it is removed."
      }
    ],
    "levelRequirementReason": "Requires dexterity and precision to handle this volatile weapon effectively.",
    "vendorReason": "Leclair Isle is renowned for its expertise in enchanted weaponry, including the Gilded Geyser Gun's predecessors.",
    "shippingDetail": "Delivered via Warp Whistle Transit within one week of order placement.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "On your next turn or when you use an action",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price for a legendary item, accounting for its unique mechanics and recharging capabilities.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T08:07:46.918334+00:00",
    "aiReviewedAt": "2026-07-22T08:07:46.918334+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_ring_of_the_baked_battle": {
    "id": "leclaire_isle_ring_of_the_baked_battle",
    "name": "Ring of the Baked Battle",
    "description": "The Ring of the Baked Battle is a gleaming brass circlet engraved with runes of ancient warfare. It was crafted in the kitchens of Le Cleraise Isle, where the bakers and scribes battled for supremacy during the Great Lothlórien Conflict. This ring transforms humble bread into formidable weapons and butter into bludgeons, all while maintaining the integrity of its wearer’s culinary skills. Beware: a single misstep can unleash a gaseous explosion that might not be entirely pleasant.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍞",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Bread to Blade",
      "Yeast Vortex"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Blooper Wetworks",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Bread to Blade",
        "rules": "Activates as a bonus action. The wearer can transform a loaf of bread into a weapon that deals 1d6 slashing damage on attack rolls. This transformation lasts for the duration of the battle, and each use requires the ring to be recharged after one day of rest."
      },
      {
        "title": "Yeast Vortex",
        "rules": "Activates as an action within a 5-foot radius. A burst of yeast energy creates a vortex that deals 1d4 fire damage to all creatures in the area, including the caster. This effect lasts for 1 minute and can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "The ring's advanced enchantments require a high level of discipline and skill to wield effectively.",
    "vendorReason": "Le Cleraise Isle is renowned for its culinary mastery, making it the perfect place to find such an artifact that combines cooking with combat prowess.",
    "shippingDetail": "The ring arrives in a custom wooden crate to protect its delicate enchantments during transit.",
    "usage": {
      "activation": "Bonus action for 'Bread to Blade', Action for 'Yeast Vortex'",
      "duration": "Instantaneous and lasts until the end of the battle for 'Bread to Blade'; lasts 1 minute for 'Yeast Vortex'",
      "endsWhen": "The duration ends when the effect is used or the long rest period concludes",
      "charges": "Recharges after one day of rest"
    },
    "priceReason": "Balanced at this price, considering its unique combination of culinary and combat abilities.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T08:07:50.182348+00:00",
    "aiReviewedAt": "2026-07-22T08:07:50.182348+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_sugar_rift_catalyst": {
    "id": "leclaire_isle_sugar_rift_catalyst",
    "name": "Sugar Rift Catalyst",
    "description": "The Sugar Rift Catalyst is a gleaming golden confectionary relic, its surface etched with runes that shimmer like molten sugar. This arcane candy can open rifts to alternate dimensions of pastry and spice, summoning rogue bakers and mischievous dough folk who dance through the rifts in chaotic patterns. When consumed, it not only opens a 10-foot radius rift but also inflicts a sugary backlash, causing foes within the rift to suffer from temporary euphoria for up to 2d4 rounds, making them clumsy and easily tripped.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍞",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Opens a 10ft rift to a sugar realm",
      "Inflicts temporary euphoria on foes"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Blooper Wetworks",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rift Summoning",
        "rules": "Activates as an action. The Sugar Rift Catalyst opens a 10-foot radius rift to an alternate dimension of pastry and spice. Enemies in the area must succeed on a DC 15 Dexterity saving throw or be pulled into the rift, taking 2d6 force damage and being restrained for 1 round."
      },
      {
        "title": "Euphoric Backlash",
        "rules": "Enemies within the rift gain advantage on saving throws but suffer from temporary euphoria. For up to 2d4 rounds, they are incapacitated, moving at half speed and taking a -2 penalty to all attack rolls and ability checks."
      }
    ],
    "levelRequirementReason": "This relic is designed for adventurers just starting their journey, allowing them to experience the chaos of sugar realms without requiring high-level magic.",
    "vendorReason": "LeClaire Isle specializes in confections and magical items related to pastries and sugars, making it a natural fit for this unique relic.",
    "shippingDetail": "Ships via Blooper Wetworks' express delivery service, ensuring the delicate candy arrives intact and ready for activation.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (effects last until the end of the turn)",
      "endsWhen": "The rift closes when the effects are resolved or the caster uses their action to close it early.",
      "charges": "Recharge after a short rest"
    },
    "priceReason": "The Sugar Rift Catalyst is priced at 1000 XP, reflecting its unique material components and the magical energy required for rift summoning.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T19:51:20.177577+00:00",
    "aiReviewedAt": "2026-07-22T19:51:20.177577+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_sugar_spear": {
    "id": "leclaire_isle_sugar_spear",
    "name": "Sugar Spear of the Doughbound",
    "description": "The Sugar Spear of the Doughbound is a peculiar and potent weapon forged from fermented pastry dough. Its shaft crackles with sweet energy, while its tip is encrusted with sugary crystals that shimmer in the light. Crafted by the artisans of Leclaire Isle, this spear not only pierces armor but also has the unique ability to make enemies crave dessert with a 10% chance. A bite from the spear’s tip causes minor nausea to those who are not made of doughfolk.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍞",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Pierces armor",
      "Craves dessert"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Armor Piercing",
        "rules": "When you hit a target with the Sugar Spear, it deals an additional +2 damage to creatures wearing armor."
      },
      {
        "title": "Sweet Temptation",
        "rules": "There is a 10% chance that when a creature is hit by the spear, they must succeed on a DC 13 Constitution saving throw or be affected by the Compelled Consumption spell (causing them to consume a sugary treat immediately)."
      }
    ],
    "levelRequirementReason": "The Sugar Spear's unique properties and minor nausea effect make it accessible to lower-level characters.",
    "vendorReason": "Leclaire Isle is renowned for its sugary delicacies, so selling such a weapon that complements their culinary offerings seems natural.",
    "shippingDetail": "Pipe Express delivers the spear with utmost care to ensure it arrives in perfect condition, but be cautious—any mishandling may cause the sugar coating to melt.",
    "usage": {
      "activation": "Attack action",
      "duration": "Instantaneous",
      "endsWhen": "Charges are depleted or destroyed upon impact",
      "charges": "Unlimited"
    },
    "priceReason": "The Sugar Spear combines unique abilities with the theme of Leclaire Isle, making it a valuable and balanced addition to any character's arsenal.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-22T08:07:56.428387+00:00",
    "aiReviewedAt": "2026-07-22T08:07:56.428387+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_sugar_surge_vial": {
    "id": "leclaire_isle_sugar_surge_vial",
    "name": "Sugar Surge Vial",
    "description": "The Sugar Surge Vial is a glass vial filled with shimmering granules that seem to dance in the light. Crafted by smugglers who fled Leclaire Isle, it channels the essence of runaway pastry storms. Upon use, it grants +2 to all attack rolls for one minute and restores 3d6 hit points instantly. The vial is known to cause temporary sugar-induced euphoria, which may lead to minor hallucinations when used near a Pipe Network failure.",
    "price": 1000,
    "icon": "🍯",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "Restores Hit Points",
      "Grants Attack Roll Boost"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Paratroopa Air",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Hit Points",
        "rules": "Instantly restores 3d6 hit points upon activation. Ends immediately if the user takes any damage."
      },
      {
        "title": "Attack Roll Boost",
        "rules": "+2 to all attack rolls for one minute, ends on your next turn after taking damage or if you cast a spell."
      }
    ],
    "levelRequirementReason": "The vial's effects are potent enough that even low-level characters can benefit from its abilities.",
    "vendorReason": "Leclaire Isle is known for its sweet treats and the smugglers who trade in them, making it a natural place to find such items.",
    "shippingDetail": "Ships via Paratroopa Air Express, with delivery times varying based on the location. Delays are common due to the unpredictable nature of the Paratroopas' flights.",
    "usage": {
      "activation": "Consumed as an action upon use.",
      "duration": "One minute for attack roll boost; ends immediately if hit points are restored or when taking damage, or on your next turn after casting a spell.",
      "endsWhen": "Upon activation or when the duration expires.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The vial's rarity and the unique properties of its ingredients justify this fair value in XP.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-22T08:08:01.720942+00:00",
    "aiReviewedAt": "2026-07-22T08:08:01.720942+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_sugar_tide_helm": {
    "id": "leclaire_isle_sugar_tide_helm",
    "name": "Sugar Tide Helm",
    "description": "The Sugar Tide Helm exudes a sweet, nostalgic glow from its woven sugar strands and flour-dusted leather, crafted by the Dough Folk Guild of Leclaire Isle. It enhances agility in the kitchen or on the battlefield with a +2 bonus to Dexterity checks, and its wearer's pace quickens by 10% while carrying ingredients. When donned, it occasionally triggers a fleeting sugar rush, granting temporary hit points equal to 1d4 plus one round of haste before fading after prolonged combat.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍞",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Dexterity Boost",
      "Speed Increase"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Paratroopa Air",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Dexterity Boost",
        "rules": "Grants the wearer a +2 bonus to Dexterity checks. This effect is passive and does not require activation."
      },
      {
        "title": "Speed Increase",
        "rules": "Increases the wearer's movement speed by 10% while carrying items, ending when combat lasts longer than 30 minutes or when the wearer rests for at least one hour."
      }
    ],
    "levelRequirementReason": "Crafted with complex Dough Folk magic, this helm requires a character of at least level 4 to wield its effects.",
    "vendorReason": "As a guild artifact of Leclaire Isle, the Dough Folk Guild ensures their creations are sold exclusively through their own trusted vendors.",
    "shippingDetail": "Ships via Paratroopa Air Express, delivered within two days of purchase.",
    "usage": {
      "activation": "Passive effect upon donning the helm.",
      "duration": "Persistent until prolonged combat or rest for one hour.",
      "endsWhen": "Prolonged combat lasting more than 30 minutes or resting for at least one hour.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this helm offers a unique combination of utility and flavor without overshadowing standard equipment.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T08:08:17.987121+00:00",
    "aiReviewedAt": "2026-07-22T08:08:17.987121+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_sugar_tome": {
    "id": "leclaire_isle_sugar_tome",
    "name": "Sugar Tome of the Doughbound",
    "description": "The Sugar Tome of the Doughbound is a brittle, yellowed tome bound in sugared parchment, its pages smelling faintly of fresh baked bread and sugar dust. Crafted by the alchemist guilds of LEclaire Isle during their golden era, it grants fleeting bursts of energy. Consume it to restore 12 mana and gain temporary immunity to poison for 3 rounds. For the next three turns, your speed increases by +1 and you receive a bonus to attack rolls equal to half your Dexterity modifier (rounded down). However, consuming this tome twice in one combat round can result in a sugar coma, reducing your movement to zero for 1 minute.",
    "price": 1000,
    "icon": "🍞",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Restore Mana & Poison Immunity",
      "Bread and Sugar Rush"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Paratroopa Air Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Mana & Poison Immunity",
        "rules": "When consumed, this tome restores 12 mana and grants temporary immunity to poison for a duration of 3 rounds. This effect cannot be repeated within the same combat round."
      },
      {
        "title": "Bread and Sugar Rush",
        "rules": "For the next three turns, your speed increases by +1 and you gain a bonus equal to half your Dexterity modifier (rounded down) on all attack rolls. This effect is cumulative with other bonuses but cannot exceed your base attack modifier plus 2."
      }
    ],
    "levelRequirementReason": "This tome's effects are designed for beginners, requiring only a basic understanding of mana and combat.",
    "vendorReason": "LEclaire Isle is renowned for its alchemical traditions, making this tome available directly from their guild halls.",
    "shippingDetail": "The book is shipped in a specialized sugar-encrusted case to protect it during transit.",
    "usage": {
      "activation": "Consumed as an action.",
      "duration": "Instantaneous effects, with the duration of the bread and sugar rush lasting for three turns.",
      "endsWhen": "Exhausts after use or if consumed twice in one combat round.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The tome's rarity, historical significance, and the mana it restores justify its fair price of 1000 XP.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-22T08:08:26.192509+00:00",
    "aiReviewedAt": "2026-07-22T08:08:26.192509+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_sugar_tongue": {
    "id": "leclaire_isle_sugar_tongue",
    "name": "Sugar Tongue of the Meringue Mage",
    "description": "The Sugar Tongue of the Meringue Mage is a delicate ivory wand shaped like a lollipop, its surface etched with arcane patterns. Crafted by Servants Cosmic from enchanted sugar and a cursed pipe, it was born from the last batch of the Meringue Mage’s secret recipe. When used, it grants immunity to magical drugs for 3 turns after each activation, making it invaluable in potion duels. Its fiery core is said to be made from the Fire Flower strain, which infuses attacks with a sugary explosion on consumption.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍯",
    "stock": 6,
    "rarity": "rare",
    "effects": [
      "Sugary Explosion",
      "Enhanced Crit Chance"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Sugary Explosion",
        "rules": "Consuming the item triggers a temporary explosion of sugary magic. Any enemy within 5 feet must succeed on a DC 14 Dexterity saving throw or be pushed back 10 feet and take 2d6 fire damage."
      },
      {
        "title": "Enhanced Crit Chance",
        "rules": "Grants +10% chance to crit on all attacks. This effect lasts until the end of your next turn after consuming the item."
      }
    ],
    "levelRequirementReason": "Requires level 7 to wield, as it demands a mage's finesse and knowledge of alchemy.",
    "vendorReason": "LeClaire Isle is known for its master bakers, so they carry items that enhance the magic of sweets.",
    "shippingDetail": "Ships with a note from Chain Chomp Courier: ‘Do not eat while fighting’ to ensure safe delivery during combat.",
    "usage": {
      "activation": "Eating the item",
      "duration": "Instantaneous, lasts until end of next turn after use",
      "endsWhen": "The effect ends when your next turn starts",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, it offers potent effects within the realm of magic and combat.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T08:08:15.178670+00:00",
    "aiReviewedAt": "2026-07-22T08:08:15.178670+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_toadette_lure": {
    "id": "leclaire_isle_toadette_lure",
    "name": "Toadette Lure of the Peasley Scandal",
    "description": "The Toadette Lure of the Peasley Scandal is a mischievous trinket crafted from the bones of a rare Peasley frog, found only in the secretive bakeries of Le Cleraise. It exudes a sweet aroma that can trigger a 30-second illusion, transforming the user into the center of a chaotic Toadette party. The item also causes all nearby enemies to momentarily forget their names and reveals hidden treasure locations linked to the scandalous past of the Peasley family. Beware, for using this item makes the caster speak in an unusually high-pitched voice, adding to the chaos it creates.",
    "price": 1000,
    "icon": "🐸",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Illusion Party",
      "Memory Fogginess"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Pipe Express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Illusion Party",
        "rules": "Activates as a bonus action. Creates a 30-second illusion of a Toadette party, causing all enemies within 15 feet to be frightened and temporarily forget their own names (save DC 14). The effect ends if any enemy successfully saves or the caster uses an action to end it."
      },
      {
        "title": "Memory Fogginess",
        "rules": "Lasts for 1 minute. Reveals hidden treasure locations tied to the Peasley scandal within a 30-foot radius but causes the user to speak in a high-pitched voice (save DC 14). The effect ends if the caster uses an action to end it or upon completion of its duration."
      }
    ],
    "levelRequirementReason": "Requires at least 8th level spellcasters and bakers to control the chaos this item creates.",
    "vendorReason": "Le Cleraise is known for its secret bakeries, making it the ideal place for such a scandalous trinket.",
    "shippingDetail": "Delivered by Pipe Express with special delivery handling ensuring the item arrives intact and secure.",
    "usage": {
      "activation": "Bonus action to activate; can be ended as an action or upon completion of its duration.",
      "duration": "30 seconds for Illusion Party, 1 minute for Memory Fogginess",
      "endsWhen": "Use ends if the caster acts to stop it or upon natural expiration.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its legendary rarity and unique effects.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T08:08:32.450131+00:00",
    "aiReviewedAt": "2026-07-22T08:08:32.450131+00:00",
    "aiReviewVersion": 1
  },
  "legendary_smithing_commission": {
    "id": "legendary_smithing_commission",
    "name": "Legendary Smithing Commission",
    "description": "The Legendary Smithing Commission involves a grand and meticulous process where you entrust the Gilded Gryphon, a master of ancient forges, to craft a weapon or piece of armor specifically tailored to your needs. The smith requires rare materials, which are sourced from deep within the earth, and the entire crafting process takes six months. Upon completion, the item is imbued with +3 quality and a unique magical property, making it perfectly balanced for you (+1 to attack or defense).",
    "category": "services",
    "price": 120000,
    "icon": "🔨",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "+3 weapon/armor quality",
      "Unique magical property tailored to your needs"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Commissioned Masterwork",
    "levelRequirement": 13,
    "effectDetails": [
      {
        "title": "Crafted Quality",
        "rules": "The item is crafted with +3 quality, providing a significant boost in its base stats. This effect lasts until the item is destroyed or replaced."
      },
      {
        "title": "Custom Magical Property",
        "rules": "Upon completion, the weapon or armor gains a unique magical property chosen by you at the time of commissioning. The specific property must be agreed upon with the Gilded Gryphon and cannot be changed after the process begins."
      }
    ],
    "levelRequirementReason": "The intricate process and the need for rare materials ensure that only a high-level character can afford both the time and resources to commission such an item.",
    "vendorReason": "The Gilded Gryphon is renowned for its unparalleled craftsmanship and access to rare materials, making it the perfect vendor for this service.",
    "shippingDetail": "Delivered directly by the master smith himself, ensuring the highest quality of workmanship and care during transit.",
    "usage": {
      "activation": "Instantaneous upon completion",
      "duration": "Permanent until replaced or destroyed",
      "endsWhen": "The item is destroyed or replaced with a new commission",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the cost of both the time spent by the master smith and the rare materials required for the crafting process.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-22T08:08:32.284623+00:00",
    "aiReviewedAt": "2026-07-22T08:08:32.284623+00:00",
    "aiReviewVersion": 1
  },
  "lemuria_conclave_ancient_cookbook_stand": {
    "id": "lemuria_conclave_ancient_cookbook_stand",
    "name": "Lemuria Conclave Ancient Cookbook Stand",
    "description": "The Lemuria Conclave Ancient Cookbook Stand is a meticulously crafted wooden stand, its surface etched with ancient runes and adorned with leather-bound tomes. This relic holds your recipes at eye level, granting you an advantage on cooking checks when you can see the recipe clearly. The stand itself is sentient, whispering cryptic cooking tips that are both invaluable and unnerving in their precision. However, if your knife skills falter, it will subtly judge you by imposing a disadvantage on related checks.",
    "category": "equipment",
    "price": 1000,
    "icon": "📖",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Advantage on Cooking Checks",
      "Sentient Whisperer"
    ],
    "vendor": "lemuria_conclave",
    "shippedBy": "Philosophical Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Cooking Checks",
        "rules": "When the cookbook stand is holding your recipes and you can see them, you gain advantage on cooking checks. This effect lasts for as long as the stand holds your current recipe."
      },
      {
        "title": "Sentient Whisperer",
        "rules": "The stand occasionally whispers helpful (but eerie) cooking tips. You must make a Wisdom saving throw (DC 12) to ignore one such whisper per day, or you gain disadvantage on that check until the end of your next short rest."
      }
    ],
    "levelRequirementReason": "This stand is simple enough for any aspiring chef to use, regardless of their current level.",
    "vendorReason": "The Lemuria Conclave Scribes are renowned for their expertise in preserving ancient knowledge and crafts, including the creation of this valuable cooking tool.",
    "shippingDetail": "Ships via a dedicated courier, ensuring safe delivery within one week.",
    "usage": {
      "activation": "Passive effect active as long as recipes are held in the stand.",
      "duration": "Instantaneous for each cooking check.",
      "endsWhen": "The stand is destroyed or no longer holds any recipes.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This stand combines utility, lore, and a touch of the supernatural at a price that reflects its value without being overpowered.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T08:09:10.604766+00:00",
    "aiReviewedAt": "2026-07-22T08:09:10.604766+00:00",
    "aiReviewVersion": 1
  },
  "lemuria_conclave_breathing_mask": {
    "id": "lemuria_conclave_breathing_mask",
    "name": "Lemuria Conclave Breathing Mask",
    "description": "The Lemuria Conclave Breathing Mask is a sleek, aqua-hued device crafted from rare Lemurian alloy and adorned with intricate water-dwelling motifs. This mask not only allows its wearer to breathe underwater for extended periods but also filters out airborne toxins, providing a vital lifeline in polluted or submerged environments. Crafted by the renowned Lemuria Conclave, it ensures that those who wear it can navigate both land and sea with ease and safety.",
    "category": "equipment",
    "price": 1000,
    "icon": "😷",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Breathe Underwater",
      "Toxin Filtration"
    ],
    "vendor": "lemuria_outpost",
    "shippedBy": "Aquaspeed Courier Service",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Breathe Underwater",
        "rules": "The wearer gains the ability to breathe underwater for up to 1 hour. This effect is activated as a bonus action and ends when the user no longer requires it, such as returning to dry land."
      },
      {
        "title": "Toxin Filtration",
        "rules": "While wearing this mask, the wearer gains advantage on saving throws against inhaled poison effects. It filters out airborne toxins for 8 hours after use, during which time it cannot be used again until recharged by resting for at least 1 hour."
      }
    ],
    "levelRequirementReason": "This mask is designed to assist adventurers of moderate experience in navigating hazardous environments.",
    "vendorReason": "The Lemuria Outpost specializes in equipment crafted by the Lemurian Conclave, making this mask a staple item for their customers.",
    "shippingDetail": "Ships within one week of order placement. Expedited delivery available for an additional fee.",
    "usage": {
      "activation": "Bonus action to activate the water breathing ability; rests required to recharge filter after use.",
      "duration": "1 hour for breathing underwater, 8 hours for toxin filtration.",
      "endsWhen": "Exhaustion ends when the user leaves submerged areas or stops using it, and filters require rest to recharge.",
      "charges": "Unlimited uses per day, but requires a short rest to recharge filter."
    },
    "priceReason": "The balanced price reflects the mask's rarity and the Lemurian Conclave's expertise in crafting such essential equipment.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T08:09:17.468840+00:00",
    "aiReviewedAt": "2026-07-22T08:09:17.468840+00:00",
    "aiReviewVersion": 1
  },
  "lemuria_conclave_memory_watermark": {
    "id": "lemuria_conclave_memory_watermark",
    "name": "Lemuria Conclave Memory Watermark",
    "description": "The Lemuria Conclave Memory Watermark is a subtle yet powerful mnemonic device that etches an unerasable psychic signature into your memories. This signature renders them immune to tampering or theft for 30 days, and any attempt at alteration will be immediately detected by you. Your thoughts now bear a faint 'Property of [Your Name]' watermark, subtly altering the fabric of your mind in a way that is both protective and unmistakably yours.",
    "category": "services",
    "price": 1000,
    "icon": "💧",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Psychic Shield",
      "Mnemonic Mark"
    ],
    "vendor": "lemuria_conclave",
    "shippedBy": "Psychic Echo",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Psychic Shield",
        "rules": "For 30 days, you are immune to any attempt to alter or steal your memories. If someone attempts to tamper with them, you gain insight into the action and can immediately counter it."
      },
      {
        "title": "Mnemonic Mark",
        "rules": "Your memories are marked with a 'Property of [Your Name]' watermark, which cannot be removed without altering your mind permanently. This provides a +1 bonus to saving throws against spells or effects that would alter your memory."
      }
    ],
    "levelRequirementReason": "The intricate design and psychic energy required to create this device necessitate a minimum level of proficiency in mnemonic arts.",
    "vendorReason": "Lemuria Conclave Mnemonics is renowned for its expertise in memory manipulation, making them the ideal source for such a safeguard.",
    "shippingDetail": "The delivery is handled by Psychic Echo, ensuring that your device arrives fully charged and ready to protect you.",
    "usage": {
      "activation": "Passive effect; no activation required, operates continuously until the duration ends.",
      "duration": "30 days from application",
      "endsWhen": "Duration expires or device is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The cost reflects the advanced mnemonic technology and the Lemuria Conclave's reputation for excellence.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-22T08:08:48.165987+00:00",
    "aiReviewedAt": "2026-07-22T08:08:48.165987+00:00",
    "aiReviewVersion": 1
  },
  "lemuria_conclave_past_life_regression": {
    "id": "lemuria_conclave_past_life_regression",
    "name": "Lemuria Conclave Past Life Regression",
    "description": "The Lemuria Conclave Past Life Regression is a rare service that delves into your forgotten past, granting you one skill proficiency from an ancient life for seven days. However, this journey through time comes with its quirks—unwelcome flashbacks at inopportune moments will plague you, forcing you to roll disadvantage on one important check each day. This unique artifact was crafted by the Lemuria Conclave Hypnosis to unlock hidden memories and skills from ages long past.",
    "category": "services",
    "price": 1000,
    "icon": "🔄",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Skill Proficiency Boost",
      "Unwanted Flashbacks"
    ],
    "vendor": "lemuria_conclave",
    "shippedBy": "Past Life Echo Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Skill Proficiency Boost",
        "rules": "You gain one random skill proficiency from a past life for seven days. This effect is passive and does not require an action to activate."
      },
      {
        "title": "Unwanted Flashbacks",
        "rules": "You suffer disadvantage on one important check per day due to unexpected flashbacks of your previous life. The flashbacks occur at random times, complicating daily tasks."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level to ensure the user can handle the mental strain of accessing past lives.",
    "vendorReason": "The Lemuria Conclave Hypnosis specializes in esoteric services that delve into one's hidden pasts and forgotten skills.",
    "shippingDetail": "Delivered through the Past Life Echo, a service known for its reliability but with occasional delays due to mystical interference.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "7 days",
      "endsWhen": "The effects expire at the end of 7 days or if you gain knowledge that contradicts your past life memory.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to ensure it is a valuable but not overpowered service, allowing characters to explore their heritage without breaking game balance.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-22T08:09:16.204991+00:00",
    "aiReviewedAt": "2026-07-22T08:09:16.204991+00:00",
    "aiReviewVersion": 1
  },
  "lemuria_conclave_scrying_pool": {
    "id": "lemuria_conclave_scrying_pool",
    "name": "Lemurian Scrying Pool",
    "description": "The Lemurian Scrying Pool is a small, intricately carved basin of polished obsidian, filled with shimmering water that glows faintly with ancient magic. This relic is said to hold the memories and secrets of sunken Lemuria, whispering tales of lost cities beneath the waves. When activated, it can cast 'Scrying' once per day, revealing visions of forgotten knowledge. If used underwater, its power amplifies, uncovering all hidden secrets within a mile radius.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💧",
    "stock": 4,
    "rarity": "epic",
    "effects": [
      "Scrying",
      "Reveal Hidden Secrets"
    ],
    "vendor": "Lemuria Conclave",
    "shippedBy": "Sealed Amphora",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Scrying",
        "rules": "Activates as an action. Casts 'Scrying' spell (spell save DC 15). Reveals the appearance of a single target or location within range, but not its occupants or contents."
      },
      {
        "title": "Reveal Hidden Secrets",
        "rules": "When used underwater, immediately reveals all secrets and hidden information about the area within 1 mile. This effect is instantaneous and does not require concentration."
      }
    ],
    "levelRequirementReason": "Requires a level 8 character to wield due to its arcane complexity and the power of Lemurian magic.",
    "vendorReason": "As caretakers of ancient Lemurian lore, they possess the knowledge and ritual needed to activate this powerful artifact.",
    "shippingDetail": "Ships via enchanted amphora that ensures safe delivery across vast oceanic distances without spilling a drop.",
    "usage": {
      "activation": "Activates as an action when filled with enchanted water. If used underwater, requires no additional action.",
      "duration": "Instantaneous for 'Scrying', lasts until the end of next turn for 'Reveal Hidden Secrets'.",
      "endsWhen": "Exhausts after one use per day or when submerged in saltwater longer than 1 hour.",
      "charges": "Uses are limited to once per day."
    },
    "priceReason": "Balanced at 1000 XP, reflecting the item's rarity and the cost of preserving its ancient magic.",
    "priceOriginal": 28000,
    "priceReviewedAt": "2026-07-22T08:09:52.380894+00:00",
    "aiReviewedAt": "2026-07-22T08:09:52.380894+00:00",
    "aiReviewVersion": 1
  },
  "lemuria_conclave_toga_of_ancient_wisdom": {
    "id": "lemuria_conclave_toga_of_ancient_wisdom",
    "name": "Lemuria Conclave Toga of Ancient Wisdom",
    "description": "The Lemuria Conclave Toga of Ancient Wisdom is a flowing garment woven from threads of ancient wisdom and philosophy, embroidered with symbols that shimmer faintly in the light. It whispers of long-forgotten councils and secret conclaves where sages debated the nature of existence. Wear it and you speak like a philosopher, your words imbued with the weighty knowledge of ages past, but beware—the toga's draftiness makes you susceptible to cold drafts, and impatience from listeners may make you falter in your speech.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛏️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Philosophical Prowess",
      "Drafty Discomfort"
    ],
    "vendor": "lemuria_conclave",
    "shippedBy": "Philosophical Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Philosophical Prowess",
        "rules": "While wearing the Toga of Ancient Wisdom, you gain a +2 bonus to History and Arcana checks. Additionally, when you make an Intelligence (Arcana) check, your proficiency bonus is doubled if no penalty applies already."
      },
      {
        "title": "Drafty Discomfort",
        "rules": "While wearing the Toga of Ancient Wisdom in cold environments, you have disadvantage on saving throws against being affected by cold. If the temperature drops below 60 degrees Fahrenheit, you must make a Constitution saving throw (DC 14) each hour or take 1d4 cold damage."
      }
    ],
    "levelRequirementReason": "The toga's complexity and the need for understanding its philosophical nuances necessitate at least third-level proficiency.",
    "vendorReason": "Lemuria Conclave is known for its scholarly contributions, including fashion that reflects deep wisdom and knowledge.",
    "shippingDetail": "The toga requires special handling due to its delicate nature. It will arrive rolled up in a custom wooden box lined with felt.",
    "usage": {
      "activation": "Wearing the Toga of Ancient Wisdom is a free action at the start of your turn.",
      "duration": "Instantaneous, until you remove it or take damage while wearing it.",
      "endsWhen": "The toga's effects are lost if you suffer cold-based damage or remove it manually.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the garment's scholarly and practical benefits.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T08:09:39.037934+00:00",
    "aiReviewedAt": "2026-07-22T08:09:39.037934+00:00",
    "aiReviewVersion": 1
  },
  "lemurian_water_purifier": {
    "id": "lemurian_water_purifier",
    "name": "Lemurian Water Purifier (Permanent)",
    "description": "The Lemurian Water Purifier is a shimmering fountain made of iridescent stone, its waters flowing from a wellspring that taps into ancient Lemurian magic. This enchanted fountain can purify any water source it touches, removing all toxins and curses in a gentle arc that spans ten feet wide. The purified water tastes subtly like mint, a legacy from the time when Lemuria's magic touched even the most humble springs.",
    "price": 1000,
    "icon": "⛲",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Purifies Water",
      "Taste of Mint"
    ],
    "vendor": "lemuria_outpost",
    "shippedBy": "Stone Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Purifies Water",
        "rules": "The Lemurian Water Purifier can purify any water source it touches, removing all toxins and curses. The fountain can purify a 10-foot radius area at the start of each hour as an instantaneous effect."
      },
      {
        "title": "Taste of Mint",
        "rules": "The purified water tastes subtly like mint due to the magical infusion from Lemuria's enchanted springs, affecting all creatures drinking from within its purifying arc."
      }
    ],
    "levelRequirementReason": "This item is accessible early on for adventurers seeking to cleanse polluted waters and restore purity.",
    "vendorReason": "The Lemurian Outpost trades in relics of Lemurian craftsmanship, including this fountain that holds such significant historical value.",
    "shippingDetail": "The fountain is carefully packed and delivered by Stone Delivery to ensure it arrives intact, as the item must remain functional upon arrival.",
    "usage": {
      "activation": "Instantaneous effect at the start of each hour; no action required.",
      "duration": "Instantaneous; lasts until the next hour begins.",
      "endsWhen": "The fountain is destroyed or its magical properties are removed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item's price reflects its rarity and utility, allowing it to be a valuable tool for adventurers and communities in need.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-22T08:09:42.171240+00:00",
    "aiReviewedAt": "2026-07-22T08:09:42.171240+00:00",
    "aiReviewVersion": 1
  },
  "liberated_toads_hop_sack_clothes": {
    "id": "liberated_toads_hop_sack_clothes",
    "name": "Liberated Toads Hop Sack Clothes",
    "description": "Liberated Toads Hop Sack Clothes are loose, amphibious attire sewn from the fibers of marsh reeds and dyed with natural pigments. These garments not only grant advantage on Dexterity (Acrobatics) checks for jumping but also possess an innate drying mechanism that causes them to evaporate any water within a 1-foot radius around you, making them perfect for amphibious freedom fighters. The clothes' fabric is imbued with the earthy scent of a pond, and their construction reflects the ingenuity of the Toad Rebels who crafted them.",
    "category": "equipment",
    "price": 1000,
    "icon": "👘",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Dexterity (Acrobatics) Checks",
      "Evaporate Water Radius"
    ],
    "vendor": "liberated_toads_pond",
    "shippedBy": "Lily Pad Lining",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Dexterity (Acrobatics) Checks",
        "rules": "When making a Dexterity (Acrobatics) check, the wearer gains advantage if they are wearing these clothes. This effect is always active as long as you wear them."
      },
      {
        "title": "Evaporate Water Radius",
        "rules": "The clothes possess an innate drying mechanism that causes any water within a 1-foot radius around you to evaporate immediately. This effect can be used once per short or long rest, and it has no cooldown period between uses."
      }
    ],
    "levelRequirementReason": "These clothes are simple enough for anyone to use, making them accessible to adventurers of all levels.",
    "vendorReason": "The Toad Rebels who liberated the pond sell these garments as a symbol of their struggle and a practical tool for amphibious fighters.",
    "shippingDetail": "The clothes are shipped rolled up in a waterproof sack to ensure they remain dry during transit.",
    "usage": {
      "activation": "Passive effect; always active while wearing the clothes.",
      "duration": "Instantaneous for Evaporate Water Radius, always active for Advantage on Dexterity (Acrobatics) Checks",
      "endsWhen": "Restored to full condition after a short or long rest",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The price reflects the rare materials and craftsmanship that go into these garments, making them moderately priced for uncommon equipment.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T08:09:44.315826+00:00",
    "aiReviewedAt": "2026-07-22T08:09:44.315826+00:00",
    "aiReviewVersion": 1
  },
  "liberated_toads_jump_rope_service": {
    "id": "liberated_toads_jump_rope_service",
    "name": "Liberated Toads Jump Rope Service",
    "description": "The Liberated Toads Jump Rope Service is a unique fitness tool crafted by toad athletes from the depths of their pond. This jump rope not only enhances your physical prowess but also carries the spirit of freedom and resilience. With each hop, you feel the liberation of the toads who once used it, granting +5 feet to your jump distance for 1 hour and a +1 bonus on Constitution saving throws related to endurance.",
    "price": 1000,
    "icon": "⛏️",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Enhanced Jumping",
      "Endurance Boost"
    ],
    "vendor": "liberated_toads_pond",
    "shippedBy": "Hop String Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Jumping",
        "rules": "When you use the jump rope, you gain a +5 foot increase to your jumping distance for 1 hour. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Endurance Boost",
        "rules": "For every 8 hours of restful sleep after using the jump rope, you gain a +1 bonus on Constitution saving throws related to endurance. This effect lasts until your next long rest."
      }
    ],
    "levelRequirementReason": "The item is designed for beginners and those seeking to improve their agility.",
    "vendorReason": "The toads who created this service are the best at training and enhancing one's jump, making them the ideal vendors for such a product.",
    "shippingDetail": "Delivered by Hop String, known for their swift and reliable delivery services through the underground tunnels of the toad pond.",
    "usage": {
      "activation": "Instantaneous use when you start your jump session.",
      "duration": "1 hour of enhanced jumping and 8 hours until the endurance bonus resets.",
      "endsWhen": "The effect ends after its duration or if the rope is broken.",
      "charges": "Unlimited uses; charges do not deplete."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the unique crafting and training involved in creating such a versatile fitness tool.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T08:09:55.779579+00:00",
    "aiReviewedAt": "2026-07-22T08:09:55.779579+00:00",
    "aiReviewVersion": 1
  },
  "liberated_toads_lily_pad_pancakes_recipe": {
    "id": "liberated_toads_lily_pad_pancakes_recipe",
    "name": "Recipe: Liberated Toads Lily Pad Pancakes",
    "description": "The Recipe: Liberated Toads Lily Pad Pancakes teaches you how to craft pancakes that mimic lily pads, a culinary masterpiece of swamp freedom and rebellion. With each bite, you gain an advantage on Dexterity (Acrobatics) checks for two hours as if you were on solid ground—perfect for evading the muck and navigating treacherous swamps with grace. The Toad Rebels' secret to these pancakes lies in their hoppy batter, which is said to carry the essence of their liberation struggle. These flapjacks are a must-have for any adventurer seeking the freedom of the swamp.",
    "price": 1000,
    "icon": "🥞",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Swamp Freedom Pancake",
      "Advantage on Acrobatics Checks"
    ],
    "vendor": "liberated_toads_pond",
    "shippedBy": "Pad Pancake Page",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Swamp Freedom Pancake",
        "rules": "Activates by eating the pancakes. You gain advantage on Dexterity (Acrobatics) checks for two hours. This effect lasts until it is used or you finish a long rest."
      },
      {
        "title": "Advantage on Acrobatics Checks",
        "rules": "Eating the pancakes grants this advantage while they are in your possession, which ends when the effects of eating them expire or you finish a short rest."
      }
    ],
    "levelRequirementReason": "Beginners can learn the recipe and start their journey with the freedom it brings.",
    "vendorReason": "The Toad Rebels sell this recipe as part of their efforts to spread liberation through culinary art.",
    "shippingDetail": "Ships via a fleet of aquatic toads, ensuring fresh delivery straight from the swamp.",
    "usage": {
      "activation": "Eating the pancakes",
      "duration": "2 hours or until used",
      "endsWhen": "Completion of a long rest or when eaten",
      "charges": "Unlimited (requires eating)"
    },
    "priceReason": "The recipe's rarity and unique flavor justify its moderate price.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T08:10:10.815773+00:00",
    "aiReviewedAt": "2026-07-22T08:10:10.815773+00:00",
    "aiReviewVersion": 1
  },
  "liberated_toads_lily_pad_steamer": {
    "id": "liberated_toads_lily_pad_steamer",
    "name": "Liberated Toads Lily Pad Steamer",
    "description": "The Liberated Toads Lily Pad Steamer is a portable steam table crafted from polished brass and bamboo, floating gracefully on lily pads in serene ponds. Its compact design allows for quick setup, while its bronze burners simmer gently over low flames, creating fluffy pancakes that rise to the surface like miniature islands of joy. Legend has it that the toads who crafted this steamer imbued it with a magic that brings out the best in swamp recipes, granting those who use it advantage on attempts to cook in marshy environments.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥞",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Swamp Recipes",
      "Portable Floating Platform"
    ],
    "vendor": "liberated_toads_pond",
    "shippedBy": "Pad Steam Pan",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Swamp Recipes",
        "rules": "When used within a swamp or similar wet environment, the Liberated Toads Lily Pad Steamer grants its user advantage on checks to prepare and cook food. This effect lasts until the meal is served."
      },
      {
        "title": "Portable Floating Platform",
        "rules": "The steamer can be set up in any body of water, maintaining a floating platform for up to two cooks or a similar-sized group. It requires no setup time and reverts back to its portable form when moved."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners who need assistance in setting up cooking stations, especially in challenging terrains.",
    "vendorReason": "The Liberated Toads are experts at crafting steamer tables that fit perfectly into their watery domain and can be used by adventurers in the marshes they call home.",
    "shippingDetail": "Ships via water courier with a 1-day delivery time within swampy regions, longer outside these areas.",
    "usage": {
      "activation": "Instantaneous setup; portable and ready for use once set in place.",
      "duration": "Until the meal is served or the steamer is moved to another location.",
      "endsWhen": "The meal is consumed or the steamer is relocated.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item strikes a balance between its unique design and utility, offering an uncommon advantage in swampy terrains at a fair price.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-22T08:10:40.016926+00:00",
    "aiReviewedAt": "2026-07-22T08:10:40.016926+00:00",
    "aiReviewVersion": 1
  },
  "liberated_toads_toadstool_removal": {
    "id": "liberated_toads_toadstool_removal",
    "name": "Liberated Toads Toadstool Removal",
    "description": "The Liberated Toads Toadstool Removal is a delicate ritual crafted by Liberated Toads Conservation. This process not only clears away harmful fungi from a 30-foot radius but also ensures that the toads who once inhabited these areas are freed and their spirits remain grateful, granting you advantage on Animal Handling checks with amphibians within the area. The removal is followed by the respectful release of the toadstools into a nearby wild habitat where they will flourish anew elsewhere.",
    "category": "services",
    "price": 1000,
    "icon": "🍄",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Fungi Removal",
      "Grateful Toads"
    ],
    "vendor": "liberated_toads",
    "shippedBy": "Toad Hop Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fungi Removal",
        "rules": "As an action, you clear all harmful fungi from within a 30-foot radius. This effect is instantaneous and has no save DC or duration. The toadstools removed are released into the wild after use."
      },
      {
        "title": "Grateful Toads",
        "rules": "For one hour after using this service, you gain advantage on Animal Handling checks with amphibians within a 30-foot radius of where the toadstools were removed. This effect ends when the duration expires or if you leave the area."
      }
    ],
    "levelRequirementReason": "This ritual requires basic knowledge and care, suitable for any player.",
    "vendorReason": "Liberated Toads Conservation specializes in wildlife preservation and toad welfare.",
    "shippingDetail": "Delivered by Toad Hop Express, ensuring the toadstools are released into a suitable habitat as soon as possible.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Effect duration expires or you leave the area",
      "charges": "Unlimited"
    },
    "priceReason": "This service balances cost with the ecological impact and ethical treatment of wildlife.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-22T08:10:06.921399+00:00",
    "aiReviewedAt": "2026-07-22T08:10:06.921399+00:00",
    "aiReviewVersion": 1
  },
  "lichdom_ritual_scroll": {
    "id": "lichdom_ritual_scroll",
    "name": "Lichdom Ritual Scroll (Transformation)",
    "description": "The ancient scroll, its parchment brittle and ink faded to a ghostly glow, holds the dark magic that transforms a mortal into an undead lich, granting immortality but at the cost of one's soul. Crafted by ancient liches, it requires a phylactery for activation, ensuring that only those truly dedicated to undeath can wield its power. Once invoked, the scroll initiates a month-long transformation process that strips away life and grants the dark embrace of death itself.",
    "price": 1000,
    "icon": "📜",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Initiates Lich Transformation",
      "Requires Phylactery"
    ],
    "vendor": "undead_academy",
    "shippedBy": "Soul Binding Courier Service",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Lich Transformation Initiation",
        "rules": "Activating this scroll begins a month-long process that transforms the user into a lich. The transformation strips away all mortal life and grants immortality, but at the cost of the soul. This effect is instantaneous upon activation, with no save DC required. Once initiated, it cannot be interrupted or ended until completion."
      },
      {
        "title": "Phylactery Requirement",
        "rules": "The scroll can only be activated if a phylactery is present. The phylactery must belong to the user and be placed within 1 inch of the scroll when it is activated. Failing to provide a valid phylactery renders the scroll inert until a new one is provided."
      }
    ],
    "levelRequirementReason": "Only those with significant experience, at least level 20, can handle the dark magic and potential consequences of lichdom.",
    "vendorReason": "The Undead Academy specializes in esoteric knowledge and forbidden practices, including the secrets that lead to lichdom.",
    "shippingDetail": "Due to its dark nature, this item is delivered under strict conditions, with only a select few couriers authorized for such missions.",
    "usage": {
      "activation": "Instantaneous action requiring the presence of a phylactery.",
      "duration": "1 month (until transformation completes)",
      "endsWhen": "Transformation process completes or activation fails due to lack of valid phylactery.",
      "charges": "Unlimited; the scroll can be used multiple times, but only one transformation can occur at a time."
    },
    "priceReason": "The scroll's price reflects its rarity and the power it grants, equating to the cost of a significant portion of an adventuring party's resources.",
    "priceOriginal": 1100000,
    "priceReviewedAt": "2026-07-22T19:52:06.158750+00:00",
    "aiReviewedAt": "2026-07-22T19:52:06.158750+00:00",
    "aiReviewVersion": 1
  },
  "lichs_phylactery_insurance": {
    "id": "lichs_phylactery_insurance",
    "name": "Lich's Phylactery Insurance Policy",
    "description": "Lich's Phylactery Insurance Policy, an arcane contract bound in ink and shadow, ensures a lich's immortality by tethering their soul to a phylactery hidden away in a forgotten crypt. Should the lich fall to death, they are resurrected within 7 days at this location, provided it was registered in advance with The Grim Ledger. This policy is a grim pact between the living and the dead, safeguarded by the very forces of undeath itself.",
    "price": 1000,
    "icon": "💀",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Soulbound Resurrection",
      "Phylactery Registration Required"
    ],
    "vendor": "soul_broker",
    "shippedBy": "Blood Contract",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Soulbound Resurrection",
        "rules": "If the lich is slain, they are resurrected at their registered phylactery location after a week. The effect is instantaneous upon death and lasts until the policy expires or is voided by The Grim Ledger."
      },
      {
        "title": "Phylactery Registration Required",
        "rules": "The phylactery must be registered with The Grim Ledger in advance for the insurance to activate. If not, the lich remains dead. This effect has a range of 1 mile from the registered location and requires no action to activate."
      }
    ],
    "levelRequirementReason": "Only a lich of considerable power can afford the risks and costs associated with this soul-binding contract.",
    "vendorReason": "The Soul Broker is trusted by liches to ensure their immortality, making them the only vendor for such a powerful and dangerous item.",
    "shippingDetail": "Delivered by a shadow courier through an ancient blood pact. The delivery time is unpredictable but always within a week of purchase.",
    "usage": {
      "activation": "Instantaneous upon death if the phylactery location is registered.",
      "duration": "Lasts until the policy expires or is voided by The Grim Ledger.",
      "endsWhen": "The lich's death, expiration of the contract, or voiding by The Grim Ledger.",
      "charges": "Unlimited uses per purchase"
    },
    "priceReason": "This policy offers a critical insurance for liches, balancing risk with the immense value of guaranteed immortality.",
    "priceOriginal": 875000,
    "priceReviewedAt": "2026-07-22T08:10:47.886385+00:00",
    "aiReviewedAt": "2026-07-22T08:10:47.886385+00:00",
    "aiReviewVersion": 1
  },
  "life_shroom": {
    "id": "life_shroom",
    "name": "Life Shroom",
    "description": "The Life Shroom exudes a sickly green glow, its cap pulsating as if alive. This mushroom is said to have been crafted by ancient shamans who sought immortality. When you fall unconscious, it releases a potent spore cloud that gently cradles your body in a protective embrace. Instantly, the spores work their magic, stabilizing you and restoring 1 hit point. Once activated, this fragile treasure becomes dust, never to regenerate.",
    "category": "consumables",
    "price": 1000,
    "icon": "💚",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Passive: Activates when reduced to 0 HP",
      "Instantaneous stabilization & 1 HP recovery"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Sacred Container Protocol",
    "levelRequirement": 1,
    "warning": "Iron Legion considers possession 'evidence of unnatural practices'",
    "effectDetails": [
      {
        "title": "Stabilization and Healing",
        "rules": "When you fall unconscious, the Life Shroom releases a spore cloud that stabilizes you immediately, restoring 1 hit point. The effect is instantaneous; no action or reaction is required to trigger it."
      },
      {
        "title": "Consumption on Activation",
        "rules": "Upon activation, the Life Shroom becomes inert and disintegrates into dust, leaving behind nothing but its glowing spores that fade within 1 minute. Once consumed, there are no further effects or uses."
      }
    ],
    "levelRequirementReason": "The Life Shroom is a simple yet powerful tool for beginners to practice and master the art of survival.",
    "vendorReason": "Shamans' Hut specializes in items that aid those seeking to balance their inner and outer worlds, making this mushroom an ideal addition to their stock.",
    "shippingDetail": "The Life Shroom is carefully packed using Sacred Container Protocol's finest materials to ensure the spores remain potent until delivery.",
    "usage": {
      "activation": "Passive upon falling unconscious",
      "duration": "Instantaneous; consumed after use",
      "endsWhen": "Consumed and turned into dust",
      "charges": "Unlimited, as it regenerates with each new mushroom"
    },
    "priceReason": "The Life Shroom is priced at 1000 XP for its rare origin and the significant advantage it provides in survival scenarios.",
    "priceOriginal": 80000,
    "priceReviewedAt": "2026-07-22T08:10:35.198817+00:00",
    "aiReviewedAt": "2026-07-22T08:10:35.198817+00:00",
    "aiReviewVersion": 1
  },
  "light_prognosticus": {
    "id": "light_prognosticus",
    "name": "Light Prognosticus",
    "description": "The Light Prognosticus is a leather-bound tome with glimmering gold text that whispers of forgotten futures. Its pages are said to rewrite destiny, and its cover gleams with an ancient seal. This forbidden artifact allows you to alter one major event in the campaign, ensuring a 'Happy Ending' failsafe for any plotline that veers off course. It requires pure intent to wield, as even the slightest ill will can corrupt its power.",
    "category": "forbidden",
    "price": 1000,
    "icon": "📓",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Rewrite Campaign Event",
      "Ensure Happy Ending"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Merlon the Swift",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rewrite Campaign Event",
        "rules": "As an action, you may use this tome to alter one major event in the campaign. The DM must agree on the change, and it cannot undermine existing plot hooks or introduce new challenges beyond a minor inconvenience."
      },
      {
        "title": "Ensure Happy Ending",
        "rules": "Once per long rest, you can invoke a failsafe that ensures a 'Happy Ending' for any ongoing campaign storyline. This does not negate the need to overcome challenges but prevents any permanent failure or tragic conclusion. The DM must be present and agreeable."
      }
    ],
    "levelRequirementReason": "This item is accessible early in one's adventuring career, as it represents a powerful tool for young heroes who may not yet have the experience to handle more dangerous magic.",
    "vendorReason": "The Shamans of the Hut are known for their deep connection with fate and destiny; they alone can understand the risks involved in wielding such power.",
    "shippingDetail": "Delivered via Merlon's swift falcons, ensuring safe arrival within a week.",
    "usage": {
      "activation": "Action or Reaction (as agreed by DM)",
      "duration": "Instantaneous for 'Rewrite Campaign Event', one day for 'Ensure Happy Ending'",
      "endsWhen": "The effect is exhausted when used",
      "charges": "Unlimited, but only one per event and one per rest"
    },
    "priceReason": "This price reflects the item's unique ability to alter fate without causing permanent harm or imbalance.",
    "priceOriginal": 18000000,
    "priceReviewedAt": "2026-07-22T19:51:35.983729+00:00",
    "aiReviewedAt": "2026-07-22T19:51:35.983729+00:00",
    "aiReviewVersion": 1
  },
  "liminal_ghost_whisperer_tool_service": {
    "id": "liminal_ghost_whisperer_tool_service",
    "name": "Liminal Ghost Whisperer Tool Service",
    "description": "The Liminal Ghost Whisperer Tool Service is a delicate, ghostly instrument crafted by the Liminal Mediums. Its ethereal strings hum with the voices of the dead, and when struck, it allows you to commune with spirits. It can ask one spirit one question, receiving an honest answer, or detect undead within 30 feet. Spirits are known to haunt your dreams after use, leaving you with vivid visions that may prove both enlightening and unsettling.",
    "price": 1000,
    "icon": "👻",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Commune with a Spirit",
      "Detect Undead"
    ],
    "vendor": "liminal_border",
    "shippedBy": "Ecto Device",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Commune with a Spirit",
        "rules": "As an action, you can ask one spirit one question. The spirit provides an honest answer to your query. This effect has no save DC and does not have a limit other than the number of spirits available for communication."
      },
      {
        "title": "Detect Undead",
        "rules": "You sense the presence of undead within 30 feet as long as you hold the Liminal Ghost Whisperer Tool Service. This effect is instantaneous, lasts until the end of your next turn, and does not require a save DC."
      }
    ],
    "levelRequirementReason": "This tool requires minimal arcane knowledge to operate effectively.",
    "vendorReason": "The Liminal Mediums are well-known for their expertise in spirit communication and undead detection, making them the ideal vendor for this item.",
    "shippingDetail": "Ships via Ecto Device within a week of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "After one use or until the end of your next turn, whichever comes first.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects its rarity and utility without being overpowered.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T08:10:54.670171+00:00",
    "aiReviewedAt": "2026-07-22T08:10:54.670171+00:00",
    "aiReviewVersion": 1
  },
  "liminal_ghostly_ecto_plasm_recipe": {
    "id": "liminal_ghostly_ecto_plasm_recipe",
    "name": "Recipe: Liminal Ghostly Ecto-Plasm",
    "description": "Crafted from the ethereal essence of vanished spirits, this dessert glows with a spectral hue that dances in the dark. Its creamy texture is a perfect vessel for detecting undead within a 30-foot radius, allowing you to see through the veil of death. The Liminal Ghostly Ecto-Plasm whispers secrets of the afterlife as it grants its temporary boon, leaving you with a sweet reminder of the spectral world's presence.",
    "price": 1000,
    "icon": "🍮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Detect Undead",
      "Ethereal Tactile Delight"
    ],
    "vendor": "liminal_border",
    "shippedBy": "Ecto Edition Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Detect Undead",
        "rules": "As an action, eat this dessert to gain the ability to detect undead within a 30-foot radius for 2 hours. This effect ends if you consume any food other than this dessert."
      },
      {
        "title": "Ethereal Tactile Delight",
        "rules": "The dessert grants a +1 bonus to saving throws against being charmed or frightened by undead creatures until the end of your next turn, but only while you are within 30 feet of it. This effect is limited to once per short rest."
      }
    ],
    "levelRequirementReason": "Crafting and consuming this dessert requires a deep understanding of the spirit world, which typically comes with at least 6 levels in an arcane or necromancy-focused class.",
    "vendorReason": "The Liminal Border is renowned for its connection to the spirit realm, making it the perfect vendor for this otherworldly dessert.",
    "shippingDetail": "Ships with a spectral courier, arriving in 1-2 days from the Liminal Border.",
    "usage": {
      "activation": "Eat as an action to activate and gain effects for its duration.",
      "duration": "Detect Undead lasts for 2 hours; Ethereal Tactile Delight lasts until the end of your next turn after consuming it.",
      "endsWhen": "Eaten or consumed by another food source, ending both effects immediately.",
      "charges": "Unlimited uses per short rest."
    },
    "priceReason": "The rare ingredients and arcane magic required to craft this dessert justify its moderate price in experience points.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T08:11:17.876714+00:00",
    "aiReviewedAt": "2026-07-22T08:11:17.876714+00:00",
    "aiReviewVersion": 1
  },
  "liminal_ghostly_ecto_stirrer": {
    "id": "liminal_ghostly_ecto_stirrer",
    "name": "Liminal Ghostly Ecto Stirrer",
    "description": "The Liminal Ghostly Ecto Stirrer is a delicate, phosphorescent rod crafted from ethereal materials by the whimsical artisans of Liminal Toolers. Its ghostly core glows with an eerie blue hue as it stirs ectoplasmic concoctions, seamlessly passing through solid barriers to reach the very depths of whatever brew it's stirring. Legends say that its brief hauntings can stir more than just mixtures; it may even invoke a momentary spectral presence in your cauldron’s wake.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Phases through solids",
      "Brief Spectral Presence"
    ],
    "vendor": "liminal_border",
    "shippedBy": "Ethereal Express Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Phases Through Solids",
        "rules": "As an action, the Stirrer allows you to stir a pot of ectoplasm as if it were a liquid. You can phase the Stirrer through solid objects within reach for up to 10 feet in any direction."
      },
      {
        "title": "Brief Spectral Presence",
        "rules": "When activated, the Stirrer creates a brief spectral disturbance that lasts for 1 minute. Any creature within 5 feet of you must make a DC 12 Wisdom saving throw or be frightened until the end of your next turn."
      }
    ],
    "levelRequirementReason": "Crafted with complex ethereal magic, it requires at least a 3rd-level spellcaster to wield.",
    "vendorReason": "The Liminal Border is known for its supernatural curios and tools, making the Liminal Ghostly Ecto Stirrer a staple in their inventory.",
    "shippingDetail": "Ships via Ethereal Express Courier with a 1-day delivery guarantee within the Material Plane.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous, except for spectral presence which lasts 1 minute.",
      "endsWhen": "At the end of your next turn after the spectral presence ends or if you take any other action on your turn.",
      "charges": "Unlimited charges"
    },
    "priceReason": "Balanced at this price due to its unique abilities and rarity, suitable for a mid-level spellcaster.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T19:52:01.440608+00:00",
    "aiReviewedAt": "2026-07-22T19:52:01.440608+00:00",
    "aiReviewVersion": 1
  },
  "liminal_ghostly_gauze_wrap": {
    "id": "liminal_ghostly_gauze_wrap",
    "name": "Liminal Ghostly Gauze Wrap",
    "description": "The Liminal Ghostly Gauze Wrap, a translucent shroud woven from ethereal threads, is a delicate yet resilient garment designed for spirit walkers and those who traverse between worlds. Crafted by the enigmatic Liminal Spirits in the twilight realms of forgotten lore, this wrap grants its bearer an advantage on saving throws against ethereal effects and allows them to phase through thin walls once per day. However, it unravels into fragile gauze when exposed to even a gentle breeze or wind.",
    "price": 1000,
    "icon": "🧣",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on saves vs. ethereal effects",
      "Phasing through thin walls (1/day)"
    ],
    "vendor": "liminal_threshold",
    "shippedBy": "Ethereal Edge",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Advantage on Saves vs. Ethereal Effects",
        "rules": "When the wearer of the Liminal Ghostly Gauze Wrap is subjected to an effect that requires a saving throw against ethereal effects, they gain advantage on that save."
      },
      {
        "title": "Phasing Through Thin Walls (1/Day)",
        "rules": "The wrap allows its wearer to phase through thin walls and similar obstacles once per day. This effect lasts until the end of their next turn after activation or until they move from one side of a wall to another."
      }
    ],
    "levelRequirementReason": "This item is crafted for spirit walkers who have already demonstrated proficiency in navigating between realms.",
    "vendorReason": "Liminal Threshold, a shopkeeper known for their unique and powerful artifacts from the ethereal planes, carries this wrap as it complements their store's focus on items that aid travelers through otherworldly challenges.",
    "shippingDetail": "The shipment via Ethereal Edge is expedited but requires a special delivery note due to the item's sensitivity to wind and environmental changes.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; lasts until end of next turn or when moving from one side of a wall to another",
      "endsWhen": "The effect ends at the start of the wearer’s next turn after activation or if they are exposed to wind or move through an obstacle.",
      "charges": "Rechargeable, uses 1 charge per day"
    },
    "priceReason": "This item strikes a balance between its unique abilities and the difficulty of acquiring ethereal materials used in its construction.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-22T08:11:52.801092+00:00",
    "aiReviewedAt": "2026-07-22T08:11:52.801092+00:00",
    "aiReviewVersion": 1
  },
  "liminal_threshold_sweeping": {
    "id": "liminal_threshold_sweeping",
    "name": "Liminal Threshold Sweeping",
    "description": "The Liminal Threshold Sweeping is a delicate, handcrafted tool used by Liminal Cleaners to purify doorways between realms. When activated, it ensures no hidden perils await in the threshold for up to one day, and leaves the doorway gleaming with an ethereal cleanliness that demands visitors remove their footwear. The sweeping also instills a sense of order, granting you advantage on saving throws against environmental filth within the next hour.",
    "category": "services",
    "price": 1000,
    "icon": "🚪",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Threshold Purification",
      "Clean Entrance"
    ],
    "vendor": "liminal",
    "shippedBy": "Threshold Step",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Threshold Purification",
        "rules": "Activate as an action. The doorway becomes safe to pass through, with no traps or ambushes for one day. This effect does not affect creatures already in the doorway when the sweeping is used. If a creature enters during this time and there are any hidden dangers, they must make a DC 15 Dexterity saving throw or be affected by the danger."
      },
      {
        "title": "Clean Entrance",
        "rules": "The doorway becomes exceptionally clean, requiring visitors to remove their footwear before passing. This effect lasts for one day and applies to all doorways swept within the last hour of use."
      }
    ],
    "levelRequirementReason": "This tool is designed to be accessible to adventurers at the start of their journey.",
    "vendorReason": "Liminal Cleaners are renowned for ensuring safe and clean transitions between realms, making them the perfect vendor for this tool.",
    "shippingDetail": "Ships via Threshold Step, a reliable courier service known for its swift deliveries through liminal zones.",
    "usage": {
      "activation": "Activate as an action.",
      "duration": "One day from the time of use.",
      "endsWhen": "The effect ends after one day or if you enter another doorway within the same threshold.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This item's price is balanced to reflect its utility for adventurers, ensuring it remains a valuable yet accessible tool.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-22T08:11:42.628706+00:00",
    "aiReviewedAt": "2026-07-22T08:11:42.628706+00:00",
    "aiReviewVersion": 1
  },
  "link_master_sword": {
    "id": "link_master_sword",
    "name": "Master Sword Replica",
    "description": "The Master Sword Replica gleams with an ethereal blue light, its hilt intricately forged from ancient Damascus steel. This iconic blade not only serves as a +3 longsword but also banishes evil with precision, leaving fiends and undead in smoky ruins. The sword's edge is said to have been tempered by the fires of Mount Hylia, imbuing it with an enduring spirit that requires its wielder to possess a pure heart.",
    "category": "premium",
    "price": 1000,
    "icon": "🗡️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "+3 longsword",
      "Banish Evil"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Sacred Sheath",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Banish Evil",
        "rules": "As an action, you can point the Master Sword Replica at a fiend or undead within 60 feet and attempt to banish it. The target must succeed on a DC 18 Wisdom saving throw or be sent back to its home plane for up to one hour. This effect has no cooldown but requires that the wielder's heart remains pure."
      },
      {
        "title": "+3 Longsword",
        "rules": "The Master Sword Replica deals an additional 2d6 damage against fiends and undead. It also provides a +1 bonus to attack rolls."
      }
    ],
    "levelRequirementReason": "The sword's power is only accessible to those of noble heart and proven strength, requiring a minimum level of 15.",
    "vendorReason": "The Gilded Gryphon, a vendor known for its rare and powerful artifacts, offers the Master Sword Replica as a testament to its commitment to preserving ancient magic.",
    "shippingDetail": "The Sacred Sheath ensures safe and timely delivery via enchanted couriers who traverse the realms without delay.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for Banish Evil; +3 bonus to attack rolls and additional damage are permanent until the sword's charges are depleted or it is destroyed.",
      "endsWhen": "The Banish Evil effect ends when the target successfully saves against the saving throw. The sword's charges are expended after a single use.",
      "charges": "One charge per day"
    },
    "priceReason": "At 10,000 XP, this price reflects the sword's rare origin and its ability to banish evil, making it an invaluable asset for any adventurer.",
    "priceOriginal": 100000,
    "priceReviewedAt": "2026-07-22T08:12:29.508191+00:00",
    "aiReviewedAt": "2026-07-22T08:12:29.508191+00:00",
    "aiReviewVersion": 1
  },
  "lizardmen_scale_mail_tunic": {
    "id": "lizardmen_scale_mail_tunic",
    "name": "Lizardmen Scale Mail Tunic",
    "description": "The Lizardmen Scale Mail Tunic is a reinforced tunic made from the hard scales of desert lizards, meticulously crafted by Lizard Armorsmiths in the heart of the vast desert. It offers protection not only against physical attacks but also dampens the effects of acid-based poisons and environmental hazards found within arid climates. The scales' unique composition allows it to shed seasonally, leaving a minor dusting behind as they peel off like a second skin.",
    "category": "equipment",
    "price": 1000,
    "icon": "👕",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Enhanced Acid Resistance",
      "Seasonal Scale Shedding"
    ],
    "vendor": "lizardmen_swamp",
    "shippedBy": "Bog-Leather Bind",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Enhanced Acid Resistance",
        "rules": "While wearing the Lizardmen Scale Mail Tunic, you gain advantage on saving throws against acid damage. This effect is active as long as the tunic remains intact and you are in a desert environment."
      },
      {
        "title": "Seasonal Scale Shedding",
        "rules": "The scales of the tunic shed seasonally (every 6 months), causing a minor cosmetic mess, which leaves behind a fine layer of dust. This effect is passive and occurs automatically."
      }
    ],
    "levelRequirementReason": "Crafted by Lizard Armorsmiths, this tunic requires the wearer to be at least third level to properly handle its intricate construction.",
    "vendorReason": "The Lizardmen Swamp vendor is known for their extensive trade connections with desert tribes and can easily source such specialized armor from nearby lizardfolk craftsmen.",
    "shippingDetail": "Delivered by the swift couriers of Bog-Leather Bind, this tunic arrives in pristine condition, ensuring its integrity for its new owner.",
    "usage": {
      "activation": "Passive effect. No activation required.",
      "duration": "Permanent until destroyed or replaced with a non-compatible armor type.",
      "endsWhen": "The tunic is destroyed or replaced by incompatible armor. Seasonal shedding is an ongoing passive effect.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This rare piece of armor, crafted with unique materials and requiring specialized skill to produce, justifies its moderate price in XP.",
    "priceOriginal": 17000,
    "priceReviewedAt": "2026-07-22T08:12:26.320417+00:00",
    "aiReviewedAt": "2026-07-22T08:12:26.320417+00:00",
    "aiReviewVersion": 1
  },
  "lizardmen_scale_moisturizing": {
    "id": "lizardmen_scale_moisturizing",
    "name": "Lizardmen Scale Moisturizing",
    "description": "The Lizardmen Scale Moisturizing is a carefully crafted salve made from the scales of ancient lizards, imbued with the essence of their natural environment. This moisturizer not only keeps your scales shiny and supple but also grants you an advantage on Charisma checks when interacting with reptilian creatures. However, in bright light, your newfound sheen becomes a liability, imposing disadvantage on Stealth checks as it catches the eye. The salve is shipped by Lizardmen Spa's own Moisture Delivery service, ensuring that your scales gleam perfectly upon arrival.",
    "category": "services",
    "price": 1000,
    "icon": "🧴",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Charisma checks with reptiles",
      "Disadvantage on Stealth in bright light"
    ],
    "vendor": "lizardmen",
    "shippedBy": "Moisture Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Charisma Checks",
        "rules": "When you interact with reptilian creatures, you gain advantage on Charisma checks. This effect lasts for a full day after applying the salve."
      },
      {
        "title": "Disadvantage on Stealth in Bright Light",
        "rules": "In areas of bright light, you have disadvantage on Dexterity (Stealth) checks while wearing this moisturizing lotion until it is washed off or otherwise removed."
      }
    ],
    "levelRequirementReason": "This salve is suitable for adventurers of any level who wish to enhance their interactions with reptilian creatures.",
    "vendorReason": "The Lizardmen Spa has long been known for its expertise in skincare and natural remedies, particularly those that benefit scaled or reptilian skin.",
    "shippingDetail": "Lotion is delivered within one week of purchase. The delivery service ensures the salve remains potent until use.",
    "usage": {
      "activation": "Passive effect; applies upon application to your scales or skin.",
      "duration": "Lasts for a full day after application",
      "endsWhen": "Washed off or removed, or at the end of one day",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the unique ingredients and the expertise required to craft this moisturizing salve.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T08:12:21.625394+00:00",
    "aiReviewedAt": "2026-07-22T08:12:21.625394+00:00",
    "aiReviewVersion": 1
  },
  "lizardmen_scale_oil": {
    "id": "lizardmen_scale_oil",
    "name": "Lizardmen Scale Oil",
    "description": "Lizardmen Scale Oil is a viscous, foul-smelling liquid extracted from the scales of swamp-dwelling lizards. Applied to any natural or mundane armor, it hardens slightly and imparts a reptilian sheen that enhances its wearer's resilience. This oil also grants advantage on saving throws against disease and poison for 24 hours, bolstering one’s constitution in the filth-laden swamps of the Lizardmen. However, the oil's pungent odor can hinder social interactions; anyone using it faces disadvantage on Persuasion checks with non-reptilian creatures.",
    "category": "services",
    "price": 1000,
    "icon": "🦎",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Armor Enhancement",
      "Disease and Poison Resistance"
    ],
    "vendor": "lizardmen_swamp_market",
    "shippedBy": "Murky Waters Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Armor Enhancement",
        "rules": "Apply the oil to natural or mundane armor as an action. The wearer gains +1 AC for 24 hours, which ends if the armor is removed before the duration expires."
      },
      {
        "title": "Disease and Poison Resistance",
        "rules": "The user gains advantage on saving throws against disease and poison for 24 hours after applying the oil. This effect ends when the duration of the disease or poison ends, whichever comes first."
      }
    ],
    "levelRequirementReason": "Beginners can appreciate the practical benefits of this swamp alchemy without requiring a high level.",
    "vendorReason": "The Lizardmen Swamp Market is known for its unique and efficacious concoctions, making it an ideal vendor for Lizardmen Scale Oil.",
    "shippingDetail": "Shipped by the Murky Waters Courier, ensuring that the oil remains potent even after long distances.",
    "usage": {
      "activation": "Apply as an action to natural or mundane armor.",
      "duration": "24 hours.",
      "endsWhen": "Removal of armor or end of disease/poison effect.",
      "charges": "Unlimited, regenerates upon application."
    },
    "priceReason": "The oil is crafted through swamp alchemy and offers significant benefits, making it a fair value at 1000 XP.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T08:12:17.658782+00:00",
    "aiReviewedAt": "2026-07-22T08:12:17.658782+00:00",
    "aiReviewVersion": 1
  },
  "lizardmen_shedding_assistance": {
    "id": "lizardmen_shedding_assistance",
    "name": "Lizardmen Shedding Assistance",
    "description": "The Lizardmen Shedding Assistance is a rare, ritualistic service provided by the ancient lizardmen of the Verdant Wastes. This potion-like essence helps you through your annual molt, making the painful process smoother and less debilitating. It instantly removes one negative condition affecting your skin (like poison or rash), leaving you with shiny, new skin for three days. However, as your scales peel away, you lose your stealth in natural environments, giving you disadvantage on Stealth checks within forests and jungles.",
    "category": "services",
    "price": 1000,
    "icon": "🦎",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Skin Restoration",
      "Shiny and New"
    ],
    "vendor": "lizardmen",
    "shippedBy": "Scale Mail Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Skin Restoration",
        "rules": "When consumed, this service instantly removes one negative condition affecting your skin. The effect ends when the condition is removed or a new one takes its place."
      },
      {
        "title": "Shiny and New",
        "rules": "For 3 days after using the service, you have advantage on Charisma checks and saving throws related to appearance. However, during this time, you suffer disadvantage on Stealth checks in any natural environment."
      }
    ],
    "levelRequirementReason": "Anyone can use it, as it is a simple but effective service.",
    "vendorReason": "The lizardmen are well-known for their expertise in the care of their unique physiology and the annual molting process.",
    "shippingDetail": "Delivered via the Scale Mail Couriers, known for their speed and reliability. The service is typically delivered within three days from the shop to your door.",
    "usage": {
      "activation": "Consumed as a free action during your turn.",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the condition is removed or a new one takes its place, and the shiny skin effect lasts for 3 days from usage.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rarity and utility without being overpowered.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-22T08:12:55.573391+00:00",
    "aiReviewedAt": "2026-07-22T08:12:55.573391+00:00",
    "aiReviewVersion": 1
  },
  "lizardmen_swamp_compass": {
    "id": "lizardmen_swamp_compass",
    "name": "Lizardmen Swamp Compass",
    "description": "The Lizardmen Swamp Compass, made by the cunning artisans of the swamp-dwelling Lizardmen, is a pocket compass that always points toward the nearest patch of dry land when in a marshy environment. Crafted from durable wood and enchanted with the essence of ancient roots, this compact tool grants advantage on Survival checks for any traveler lost among the treacherous swamps. The compass's origins lie deep within the heart of the swamp, where its maker ensures its reliability under even the most hostile conditions.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧭",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Points toward dry land in swamp environments",
      "Advantage on Survival checks"
    ],
    "vendor": "lizardmen_swamp_post",
    "shippedBy": "Swift Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Pointing Toward Dry Land",
        "rules": "The compass always points directly toward the nearest area of dry ground when used within a swamp. This effect is passive and does not require any action from the user."
      },
      {
        "title": "Advantage on Survival Checks",
        "rules": "When in a swamp environment, the user gains advantage on Survival checks related to navigating or surviving in such terrain. This advantage lasts for 1 hour per use before it resets."
      }
    ],
    "levelRequirementReason": "The compass's magic is simple enough that even novice adventurers can utilize its benefits.",
    "vendorReason": "As the makers of this invaluable tool, the Lizardmen are the only ones who sell it to travelers venturing into their territory.",
    "shippingDetail": "Delivered by a trusted Swift Courier within 3 days of purchase.",
    "usage": {
      "activation": "Passive and does not require any action from the user.",
      "duration": "Instantaneous; advantage lasts for 1 hour per use.",
      "endsWhen": "Advantage on Survival checks ends after 1 hour or when used again.",
      "charges": "Unlimited, but only one use of its effect can be active at a time."
    },
    "priceReason": "The compass's construction is crafted from enchanted wood and requires the expertise of Lizardmen artisans, making it moderately priced for an adventurer's needs.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-22T08:13:13.880734+00:00",
    "aiReviewedAt": "2026-07-22T08:13:13.880734+00:00",
    "aiReviewVersion": 1
  },
  "lizardmen_swamp_crock": {
    "id": "lizardmen_swamp_crock",
    "name": "Lizardmen Swamp Crock",
    "description": "The Lizardmen Swamp Crock is a pot crafted from twisted roots and enchanted to simulate the miasmic stew of a swamp. Its clay exterior glistens with a slimy sheen, and when activated, it emanates a noxious mist that permeates the air like a living thing. The crock's lid locks into place with a satisfying thud, sealing in the festering brew within. It is said to be made by the Lizardfolk Potters, whose craft mimics nature itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🫕",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Swamp Simulacrum",
      "Rotten Delight"
    ],
    "vendor": "lizardmen",
    "shippedBy": "Murky Waters Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Swamp Simulacrum",
        "rules": "When activated as a bonus action for one hour, the Lizardmen Swamp Crock simulates swamp conditions within its immediate area. Any creature within 5 feet must make a DC 12 Constitution saving throw or be poisoned until the start of their next turn. On a successful save, they are only nauseated."
      },
      {
        "title": "Rotten Delight",
        "rules": "While the crock is activated, you have advantage on cooking checks with rotten ingredients. Additionally, any food preserved within this vessel tastes abhorrent to non-reptiles, who take 1d4 poison damage upon eating it."
      }
    ],
    "levelRequirementReason": "This item's effect is designed for beginners, allowing them to experiment with swamp-themed cooking and preservation techniques.",
    "vendorReason": "The Lizardfolk Potters are renowned for their connection to the natural world, making this crock a staple in their offerings.",
    "shippingDetail": "Ships via Murky Waters Courier, known for delivering items through swampy terrains with ease and speed.",
    "usage": {
      "activation": "Bonus action to activate; lasts one hour.",
      "duration": "One hour when activated.",
      "endsWhen": "The effect ends on its own after one hour or if the crock is deactivated.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This price reflects the item's uncommon rarity and unique crafting process, balanced to ensure it remains a valuable but not overpowered addition to any adventurer's inventory.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-22T08:12:53.792013+00:00",
    "aiReviewedAt": "2026-07-22T08:12:53.792013+00:00",
    "aiReviewVersion": 1
  },
  "lizardmen_swamp_stew_premium": {
    "id": "lizardmen_swamp_stew_premium",
    "name": "Lizardmen Swamp Stew (Premium)",
    "description": "The Lizardmen Swamp Stew (Premium) is a rich, savory broth simmered by the skilled hands of the reptilian chefs in their village. It's made from a secret recipe passed down through generations and served in ornate clay bowls that carry the earthy scent of the swamp. Consuming this stew not only heals the eater but also grants them water breathing for an hour, allowing them to navigate treacherous swamps with ease. However, one must beware; the taste is unmistakably fishy, which can hinder social interactions, especially when dealing with mammals.",
    "price": 1000,
    "icon": "🍲",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Healing and Breathing",
      "Swamp Savvy"
    ],
    "vendor": "lizardmen_village",
    "shippedBy": "Bog Pot",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stew's Healing Grace",
        "rules": "When consumed as an action, the eater regains 2d4 hit points. Additionally, they gain water breathing for 1 hour, allowing them to breathe underwater and move freely in swamps."
      },
      {
        "title": "Swamp Savvy",
        "rules": "The eater gains advantage on Constitution saving throws made while in a swamp or marshy area. This effect lasts until the end of their next long rest."
      }
    ],
    "levelRequirementReason": "This stew is simple to prepare and widely enjoyed by all, requiring no specific level to consume.",
    "vendorReason": "The stew is a staple dish in the Lizardmen Village, renowned for its healing properties and unique flavor.",
    "shippingDetail": "Shipped fresh from the village, this premium stew requires special handling to maintain its potency; it must be delivered within two days of preparation.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "1 hour and until the end of the next long rest for Swamp Savvy",
      "endsWhen": "The effects expire or the stew is consumed",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this premium version offers significant benefits without being overpowered.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-22T08:13:07.635480+00:00",
    "aiReviewedAt": "2026-07-22T08:13:07.635480+00:00",
    "aiReviewVersion": 1
  },
  "lizardmen_swamp_stirring_stick": {
    "id": "lizardmen_swamp_stirring_stick",
    "name": "Lizardmen Swamp Stirring Stick",
    "description": "This reedy stick, a relic of Lizardmen craftsmanship, is perfectly suited for stirring the thick stews of the swamp. Its core is made from an ancient tree that thrived in the bog's muck, imbuing it with resilience against rot and water. When dipped into the stew, it not only adds +1 to Constitution checks but also emits a faint glow, attracting swarms of bioluminescent swamp bugs for added ambiance.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍲",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Stirs Thick Stews",
      "Attracts Swamp Bugs"
    ],
    "vendor": "lizardmen_village",
    "shippedBy": "Boggy Branch Bundle",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stirs Thick Stews",
        "rules": "When the Lizardmen Swamp Stirring Stick is used to stir a thick stew, it grants the user +1 bonus to Constitution checks for that meal. The effect lasts until the meal is consumed or discarded."
      },
      {
        "title": "Attracts Swamp Bugs",
        "rules": "The stick emits a faint glow when in use, attracting bioluminescent swamp bugs within 5 feet of the user. This effect ends if the user moves more than 10 feet away from the location where it was last used."
      }
    ],
    "levelRequirementReason": "This item is suitable for adventurers of any level, but beginners may find its swamp-specific utility especially useful.",
    "vendorReason": "The Lizardmen Village is the birthplace of this stirring stick and naturally sells it to their patrons.",
    "shippingDetail": "Ships via swamp courier, ensuring delivery through treacherous waters.",
    "usage": {
      "activation": "Used as a tool for stirring stews in the swamp or any similar thick liquid.",
      "duration": "Instantaneous; effects last until the meal is consumed or discarded.",
      "endsWhen": "The effect ends when the meal is finished or discarded, and the stick no longer attracts bugs once the user moves more than 10 feet away.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The stick's rarity and utility in a specific environment justify its price of 1000 XP.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T08:13:35.130985+00:00",
    "aiReviewedAt": "2026-07-22T08:13:35.130985+00:00",
    "aiReviewVersion": 1
  },
  "lizardmen_totem_fragment": {
    "id": "lizardmen_totem_fragment",
    "name": "Lizardmen Totem Fragment (Coil)",
    "description": "The Lizardmen Totem Fragment (Coil) is a serpentine jade fragment carved from an ancient totem, its surface etched with arcane runes that shimmer like molten lava. This relic grants resistance to cold damage and bestows advantage on saving throws against mind control from reptiles or serpents—both potent defenses for those who can claim its power in battle. Crafted by the enigmatic Lizardmen, this fragment is said to channel the very spirit of their totem animals, imbuing it with a primal aura that resonates through the swamps and jungles.",
    "price": 1000,
    "icon": "🦎",
    "stock": 9,
    "rarity": "rare",
    "effects": [
      "Cold Resistance",
      "Advantage on Saves vs Mind Control"
    ],
    "vendor": "lizardmen_swamp_post",
    "shippedBy": "Muddy Pouch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cold Resistance",
        "rules": "The user gains resistance to cold damage. This effect lasts until the end of their next turn."
      },
      {
        "title": "Advantage on Saves vs Mind Control",
        "rules": "When faced with a mind control attempt from a reptile or serpent, the user can roll two d20s and take the higher result for this save. This effect lasts until the end of their next turn."
      }
    ],
    "levelRequirementReason": "This relic is crafted to be accessible to adventurers just beginning their journey.",
    "vendorReason": "The Lizardmen Swamppost is a trusted outpost for those who seek authentic, ancient artifacts from the swamps and jungles.",
    "shippingDetail": "Shipped in a waterlogged pouch to preserve its serpentine properties during transit.",
    "usage": {
      "activation": "Passive effect.",
      "duration": "Lasts until the end of the user's next turn.",
      "endsWhen": "The effect ends when the user takes their first action on their next turn.",
      "charges": "Unlimited"
    },
    "priceReason": "This relic strikes a balance between its rarity and utility, offering significant protection at an accessible price.",
    "priceOriginal": 13000,
    "priceReviewedAt": "2026-07-22T08:13:58.385774+00:00",
    "aiReviewedAt": "2026-07-22T08:13:58.385774+00:00",
    "aiReviewVersion": 1
  },
  "loot_crate_subscription": {
    "id": "loot_crate_subscription",
    "name": "Loot Crate (30-Day Subscription)",
    "description": "Each month, you receive a sealed Loot Crate that contains one random uncommon magic item. The crates are curated by Mystery Box Inc., known for their eclectic and often surprising selections. However, there's a slim chance (10%) you'll open a crate filled with a cursed item—a delightful twist of fate! Be warned; the subscription auto-renews until you visit the Mystery Box Inc. office to cancel your service.",
    "category": "services",
    "price": 1000,
    "icon": "📦",
    "stock": 25,
    "rarity": "rare",
    "effects": [
      "Random Uncommon Magic Item",
      "Cursed Crate Risk"
    ],
    "vendor": "subscription_service",
    "shippedBy": "Monthly Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Random Uncommon Magic Item",
        "rules": "At the start of each month, you receive a sealed Loot Crate containing one random uncommon magic item. The crate is delivered by Monthly Delivery and contains no more than one item."
      },
      {
        "title": "Cursed Crate Risk",
        "rules": "There's a 10% chance that the crate contains a cursed item; this risk applies each month you maintain the subscription."
      }
    ],
    "levelRequirementReason": "Accessible to all adventurers, ensuring even newer players can partake in the mystery of loot.",
    "vendorReason": "Mystery Box Inc. is renowned for their unique and often surprising magic item offerings.",
    "shippingDetail": "Delivered once per month, with a tracking number provided upon checkout.",
    "usage": {
      "activation": "Instantaneous at the start of each new month",
      "duration": "Until next month's delivery",
      "endsWhen": "Subscription is canceled by visiting Mystery Box Inc. office",
      "charges": "Unlimited uses per subscription"
    },
    "priceReason": "Balanced to ensure a thrilling experience without draining player resources.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-22T08:13:19.883910+00:00",
    "aiReviewedAt": "2026-07-22T08:13:19.883910+00:00",
    "aiReviewVersion": 1
  },
  "lothlorien_elf_leaf_tunic": {
    "id": "lothlorien_elf_leaf_tunic",
    "name": "Lothlórien Elf Leaf Tunic",
    "description": "The Lothlórien Elf Leaf Tunic is woven from living leaves that shift and shimmer in harmony with the forest's breath, blending seamlessly into the woodland canopy. Crafted by the Golden Wood Elves of Lorien, this tunic grants its wearer an ethereal appearance that can be seen only by the keenest eyes. When rustling softly in the wind, it provides a whisper of privacy, allowing the wearer to move unseen through dense woods without leaving telltale signs of passage.",
    "category": "equipment",
    "price": 1000,
    "icon": "👕",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Camouflaging Cloak",
      "Nature's Whisper"
    ],
    "vendor": "lothlorien_grove",
    "shippedBy": "Living Leaf Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Camouflaging Cloak",
        "rules": "At will, the tunic allows its wearer to blend into surrounding foliage. As a bonus action, the tunic causes a 5-foot radius area around the wearer to appear indistinguishable from natural surroundings for 1 minute. This effect ends if the wearer moves more than 30 feet or as a result of an attack directed at them."
      },
      {
        "title": "Nature's Whisper",
        "rules": "The tunic grants advantage on all Nature checks made within 60 feet in forested areas. If the wearer is attacked while wearing this tunic, they can make a Wisdom (Perception) check as a reaction to attempt to locate the source of the attack."
      }
    ],
    "levelRequirementReason": "The tunic's enchantment is subtle but effective, requiring only a basic proficiency in stealth and nature.",
    "vendorReason": "Lothlórien Grove sells the most authentic and finely crafted goods from their homeland, including this iconic piece of elven attire.",
    "shippingDetail": "The tunic is delivered via a leafy messenger who ensures its delivery with utmost care to preserve its enchanted state.",
    "usage": {
      "activation": "Bonus action for Camouflaging Cloak; Passive effect of Nature's Whisper",
      "duration": "1 minute for Camouflaging Cloak, passive for Nature's Whisper",
      "endsWhen": "Movement over 30 feet or attack directed at the wearer ends Camouflaging Cloak; Ends on a short rest for Nature's Whisper",
      "charges": "Unlimited"
    },
    "priceReason": "The tunic is priced fairly, reflecting its rarity and the expertise of the Golden Wood Elves in crafting it.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-22T08:13:43.158496+00:00",
    "aiReviewedAt": "2026-07-22T08:13:43.158496+00:00",
    "aiReviewVersion": 1
  },
  "lothlorien_golden_wood_oven": {
    "id": "lothlorien_golden_wood_oven",
    "name": "Lothlórien Golden Wood Oven",
    "description": "The Lothlórien Golden Wood Oven, crafted from mallorn wood by the masterful artisans of the Golden Wood Crafters, is a sacred relic of Elven craft. This oven bakes with the natural heat of the surrounding forest, ensuring that every loaf emerges golden and fragrant. The wood itself possesses an almost living quality; it can heal minor damage through the magic of Lothlórien, though this occurs only once per day. Only elven fire or a similar magical flame can ignite its sacred hearth.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍞",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Bakes with Natural Heat",
      "Wood Heals Minor Damage"
    ],
    "vendor": "lothlorien_grove",
    "shippedBy": "Mallorn Magic Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Bakes with Natural Heat",
        "rules": "The oven naturally heats to the perfect temperature, providing +2 to all checks related to longevity and quality of baked goods. Requires elven fire or a similar magical flame for activation."
      },
      {
        "title": "Wood Heals Minor Damage",
        "rules": "Once per day, the mallorn wood can heal minor damage (up to 1d6 points) when exposed to Lothlórien's magic. This effect requires no action and occurs instantaneously upon exposure to the forest's mana."
      }
    ],
    "levelRequirementReason": "This item is intended for those who can appreciate its magical properties and have the skill to use it properly.",
    "vendorReason": "The lothlórien_grove is known for its deep ties with nature, making them the perfect vendor for this sacred oven.",
    "shippingDetail": "Ships within a week via Mallorn Magic Mail, delivered by an enchanted bird.",
    "usage": {
      "activation": "Requires elven fire or similar magical flame to ignite.",
      "duration": "Instantaneous; bakes continuously until the fire is extinguished.",
      "endsWhen": "The fire used to ignite it goes out.",
      "charges": "Unlimited, but requires periodic rekindling."
    },
    "priceReason": "Balanced at a fair price considering its magical properties and the skill required for proper use.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-22T19:52:00.599926+00:00",
    "aiReviewedAt": "2026-07-22T19:52:00.599926+00:00",
    "aiReviewVersion": 1
  },
  "lothlorien_mallorn_leaf_premium": {
    "id": "lothlorien_mallorn_leaf_premium",
    "name": "Lothlórien Mallorn Leaf (Premium)",
    "description": "The Lothlórien Mallorn Leaf (Premium) is a delicate, shimmering leaf plucked from the ancient mallorn trees of Lórien. Its surface glows faintly under moonlight, and when placed beneath your pillow, it fosters deep, rejuvenating sleep. The elves of Lórien weave their ancient magic into these leaves to ensure that those who rest with them dream of future paths and forgotten lore. Each leaf is a piece of the forest's essence, ready to heal you as it wilts in the morning light.",
    "price": 1000,
    "icon": "🍃",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Dreams of the Elder Days",
      "Healing Rest"
    ],
    "vendor": "lothlorien_golden_wood",
    "shippedBy": "Silver Leaflet Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dreams of the Elder Days",
        "rules": "When used for a long rest, the leaf grants you a dream that offers DM hints about your future path or forgotten knowledge. This effect is instantaneous and does not require an action to activate."
      },
      {
        "title": "Healing Rest",
        "rules": "Upon completion of a long rest with this leaf beneath your pillow, you regain 1d6 + Constitution modifier hit points. The leaf wilts after one use and cannot be used again."
      }
    ],
    "levelRequirementReason": "This item is suitable for all travelers seeking a good night's sleep to rejuvenate their spirits.",
    "vendorReason": "The Golden Wood of Lothlórien is renowned for its expertise in crafting magical leaves and herbs, ensuring the quality and authenticity of their products.",
    "shippingDetail": "Delivered with utmost care by Silver Leaflet Courier, known for its reliable service across Middle-earth.",
    "usage": {
      "activation": "Placed beneath your pillow during a long rest",
      "duration": "Instantaneous effect; healing occurs upon completion of the rest",
      "endsWhen": "The leaf wilts and is no longer functional after one use",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This item offers significant benefits for adventurers, providing both healing and insight at a fair price.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T08:14:12.869063+00:00",
    "aiReviewedAt": "2026-07-22T08:14:12.869063+00:00",
    "aiReviewVersion": 1
  },
  "lothlorien_mallorn_nut_bread_recipe": {
    "id": "lothlorien_mallorn_nut_bread_recipe",
    "name": "Recipe: Lothlórien Mallorn Nut Bread",
    "description": "This ancient recipe, written on parchment etched with Elvish runes, describes how to craft Lothlórien's Mallorn Nut Bread from golden nuts harvested from time-hallowed Mallorn trees. The bread is said to extend the lifespan of those who consume it and grant wisdom as its golden crust crackles in the hearth. Only the Wood Elves know this secret, passed down through generations like a sacred flame. When baked, the bread's aroma lingers for days, a reminder of the ancient forest’s enduring magic.",
    "price": 1000,
    "icon": "🍞",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Sustenance and Wisdom",
      "Elven Lore"
    ],
    "vendor": "lothlorien_grove",
    "shippedBy": "Golden Nut Notes",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sustenance and Wisdom",
        "rules": "Eating this bread grants you advantage on Wisdom saving throws for 24 hours. Additionally, it sustains you without food for up to two days after consumption."
      },
      {
        "title": "Elven Lore",
        "rules": "When a Wood Elf or an ally of the Elven people uses this recipe, they gain a +1 bonus to Intelligence (History) checks related to Lothlórien’s lore and history for 24 hours."
      }
    ],
    "levelRequirementReason": "This simple yet ancient recipe can be learned by any adventurer who respects the wisdom of the Wood Elves.",
    "vendorReason": "The Lothlórien Grove is a revered hub of Elven knowledge and craftsmanship, where this sacred recipe is preserved and shared with those who honor its origins.",
    "shippingDetail": "Delivered by the fleet-footed messengers of Galadriel herself, ensuring swift delivery to those who seek her gift.",
    "usage": {
      "activation": "Eating the bread upon preparation.",
      "duration": "24 hours for Wisdom saving throws and lore bonuses; sustenance lasts up to two days after consumption.",
      "endsWhen": "Effect ends when duration expires or the bread is consumed.",
      "charges": "Unlimited, as the recipe can be used repeatedly."
    },
    "priceReason": "The recipe's rarity and ancient significance justify its value in experience points.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-22T08:14:08.720546+00:00",
    "aiReviewedAt": "2026-07-22T08:14:08.720546+00:00",
    "aiReviewVersion": 1
  },
  "lothlorien_starlight_lantern": {
    "id": "lothlorien_starlight_lantern",
    "name": "Lothlórien Starlight Lantern",
    "description": "The Lothlórien Starlight Lantern, crafted from elvish silver and enchanted with starlight, casts a pure, serene glow that calms the heart. Its light, both bright (30 feet) and dim (an additional 30 feet), is as unyielding as the elven spirit itself—unfazed by wind or water. Creatures within its sphere gain advantage on saving throws against fear, for the lantern's ethereal glow instills a sense of peace and safety.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏮",
    "stock": 6,
    "rarity": "rare",
    "effects": [
      "Pure Light",
      "Calm Aura"
    ],
    "vendor": "Lothlórien",
    "shippedBy": "Elven Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Pure Light",
        "rules": "The Lantern sheds bright light in a 30-foot radius and dim light for an additional 30 feet. This light cannot be extinguished by wind or water. Creatures within the area gain advantage on saving throws against fear."
      },
      {
        "title": "Calm Aura",
        "rules": "While the Lantern is active, creatures within its bright light have disadvantage on attack rolls and ability checks made with the intention to harm others. The Lantern recharges only under an open night sky."
      }
    ],
    "levelRequirementReason": "This lantern's enchantment is accessible to most adventurers who are attuned to nature.",
    "vendorReason": "The lantern's serene glow and elvish craftsmanship align perfectly with the natural beauty of Lothlórien, making it a cherished item among its people.",
    "shippingDetail": "Ships swiftly under cover of night, ensuring the Lantern arrives in pristine condition.",
    "usage": {
      "activation": "Object Interaction to activate; the light is always on while held.",
      "duration": "Instantaneous activation; recharges when not carried during daylight hours.",
      "endsWhen": "The Lantern's magic fades if it is used under a sky other than open night or if it is not being carried during an open night sky.",
      "charges": "Unlimited, but recharges only under an open night sky."
    },
    "priceReason": "The lantern's rare elven silver and starlight enchantment justify its moderate cost in XP.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T08:14:19.971260+00:00",
    "aiReviewedAt": "2026-07-22T08:14:19.971260+00:00",
    "aiReviewVersion": 1
  }
};
