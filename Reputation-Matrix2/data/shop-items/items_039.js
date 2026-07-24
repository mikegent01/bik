// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_039 = {
  "shadowfell_fallen_vampire_mantle_of_doom": {
    "id": "shadowfell_fallen_vampire_mantle_of_doom",
    "name": "Mantle of Doom",
    "description": "The Mantle of Doom, woven from the very threads of the Shadowfell's dark fabric, shimmers with an eerie glow. Its wearer is cloaked in a mantle that whispers tales of ancient curses and forgotten vampires. Each step taken rips open a spectral tear, allowing for the summoning of ephemeral minions who dance at your command. Nearby enemies are beset by a shadowy corruption, causing their attacks to falter and deal reduced damage.",
    "category": "equipment",
    "price": 2000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Summons Spectral Minions",
      "Curses Opponents"
    ],
    "vendor": "Shadowfell",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Spectral Minion Summoning",
        "rules": "As a bonus action, the wearer can summon one spectral minion that appears within 30 feet and lasts for up to 1 minute. The minion attacks any target you designate. The summoned creature has AC 15, 20 hit points, deals 4 (1d6 + 2) necrotic damage on a hit with its bite attack, and can teleport 10 feet as a reaction."
      },
      {
        "title": "Cursed Opponents",
        "rules": "All creatures within 30 feet of the wearer are cursed. These creatures have disadvantage on saving throws against all spells and effects from the wearer for 1 minute. If they fail their save, they also take 5 (1d8 + 2) necrotic damage."
      }
    ],
    "levelRequirementReason": "The mantle's dark magic requires a more experienced wielder to effectively command its spectral minions and resist the curse it inflicts.",
    "vendorReason": "The Shadowfell vendor, known for dealing in dark artifacts, has acquired this rare relic from an ancient vampire lord who sought peace through destruction.",
    "shippingDetail": "Due to the volatile nature of the mantle's spectral components, it must be shipped within a specially enchanted case that prevents any potential summoning or corruption during transit.",
    "usage": {
      "activation": "Bonus action for summoning; passive effect while worn.",
      "duration": "Spectral minion lasts up to 1 minute; curse lasts 1 minute.",
      "endsWhen": "The wearer no longer has the mantle on, or it is destroyed.",
      "charges": "Unlimited; recharges after a long rest."
    },
    "priceReason": "Crafted from rare Shadowfell materials and imbued with powerful necromantic energies, this mantle commands a substantial price in the arcane market.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:03:36.024649+00:00",
    "aiReviewedAt": "2026-07-23T18:03:36.024649+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_fang_of_the_ancient": {
    "id": "shadowfell_fang_of_the_ancient",
    "name": "Fang of the Ancient",
    "description": "The Fang of the Ancient, a relic forged from the jawbone of an Onyx Hand elder, exudes a cold dread that lingers around foes, causing them to shudder in fear. Its sharp fangs glisten with a dark, nearly invisible sheen, and when wielded, it amplifies melee attacks by +10 damage. The aura of dread not only debilitates enemies but also saps their willpower, compelling them into a state of near paralysis.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+10 Melee Damage",
      "Dread Aura"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Melee Damage Boost",
        "rules": "Activates on attack roll; +10 damage to melee attacks. The effect persists until the end of your next turn."
      },
      {
        "title": "Dread Aura",
        "rules": "On activation, a 20-foot radius aura of dread is emitted for 1 minute. Enemies within the area must make a DC 15 Wisdom saving throw or become frightened and reduced to half speed until the end of their next turn."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to wield its potent dread aura.",
    "vendorReason": "The Shadowfell region is known for its dark artifacts and this fang aligns with their lore of ancient, malevolent relics.",
    "shippingDetail": "Delivered by spectral couriers who require a shadowy path to traverse the Darklands.",
    "usage": {
      "activation": "On attack roll or when used in melee combat",
      "duration": "1 minute per activation, ends if you are incapacitated or drop the fang",
      "endsWhen": "Ends upon your incapacitation or discarding it in combat",
      "charges": "Unlimited; recharges on a short rest"
    },
    "priceReason": "Balanced price for an artifact that grants +10 melee damage and a potent dread aura.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-23T18:03:02.824124+00:00",
    "aiReviewedAt": "2026-07-23T18:03:02.824124+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_fang_of_the_night": {
    "id": "shadowfell_fang_of_the_night",
    "name": "Fang of the Night",
    "description": "Forged in the shadowy depths of the realm of shadows, the Fang of the Night is a relic carved from a vampire’s fang. Its razor-sharp edges shimmer with an otherworldly glow when exposed to darkness, and its wielder becomes a master of stealth and destruction. This favored weapon of elite hunters and assassins grants deadly bites that strike true in the dark and enhances evasion against supernatural threats.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Lethal Bites",
      "Shadow Evasion"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Lethal Bites",
        "rules": "When you make a melee attack with this weapon, it deals an extra 1d6 necrotic damage. This effect has no cooldown and can be used as a bonus action."
      },
      {
        "title": "Shadow Evasion",
        "rules": "You gain advantage on Dexterity saving throws to avoid being frightened or charmed while in darkness. This effect lasts until the end of your next turn after exiting darkness."
      }
    ],
    "levelRequirementReason": "The Fang of the Night is a rare relic that can be wielded by even the novice adventurer, but its power comes from its unique crafting and not inherent magical level.",
    "vendorReason": "The Shadowfell region holds many secrets and curiosities; the Fang of the Night is one such artifact born within its depths.",
    "shippingDetail": "Due to its fragile nature, this item requires special handling. Shy Guy Smugglers ensures it reaches safely through their preferred couriers.",
    "usage": {
      "activation": "Bonus action for Lethal Bites; passive effect for Shadow Evasion while in darkness.",
      "duration": "Instantaneous and ongoing as long as the conditions are met.",
      "endsWhen": "The effects end upon leaving a dark environment or when you lose your place within it, respectively.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Fang of the Night is priced at 1000 XP due to its unique crafting process and the rarity of a fang from a vampire’s lost tooth.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-23T18:02:47.754346+00:00",
    "aiReviewedAt": "2026-07-23T18:02:47.754346+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_fanged_crown": {
    "id": "shadowfell_fanged_crown",
    "name": "Fanged Crown of the Veiled Throne",
    "description": "The Fanged Crown of the Veiled Throne, forged from the bones of a corrupted vampire king, radiates an eerie glow that distorts reality. It enhances intimidation and psychological warfare by summoning spectral illusions to distract foes. Though it slightly reduces mobility, its wearer gains a +30% chance to confuse targets on hit, and after casting an illusion, there's a 10% chance for the user to briefly become temporarily invisible. This crown is a masterpiece of dark craftsmanship, embodying both fear and chaos.",
    "category": "equipment",
    "price": 1000,
    "icon": "👑",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "+30% chance to confuse target for 1 round on hit",
      "10% chance to gain temporary invisibility after casting illusion"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Pipe Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Confusion on Hit",
        "rules": "When the wearer attacks and hits a creature, there is a +30% chance that the target becomes confused for 1 round. The target must make a Wisdom saving throw (DC 15) or be affected by confusion."
      },
      {
        "title": "Temporary Invisibility",
        "rules": "After successfully casting an illusion using this crown, there is a 10% chance that the wearer becomes temporarily invisible for 1 minute. This effect can only occur once per long rest."
      }
    ],
    "levelRequirementReason": "This crown requires significant magical power to wield effectively and is tailored for those who have already demonstrated proficiency in dark magic.",
    "vendorReason": "The Shadowfell vendors are known for their extensive collection of dark artifacts, making the Fanged Crown a natural addition to their inventory.",
    "shippingDetail": "Due to its fragile nature and potent magical properties, this crown must be shipped via Pipe Express with special care instructions.",
    "usage": {
      "activation": "Action or bonus action to cast an illusion; temporary invisibility lasts for 1 minute per long rest.",
      "duration": "Instantaneous casting of the illusion; temporary invisibility is a one-time effect per long rest.",
      "endsWhen": "The illusion ends when the wearer no longer concentrates on it, and temporary invisibility expires after its duration.",
      "charges": "Unlimited charges"
    },
    "priceReason": "This crown is priced at 1000 XP, reflecting its epic rarity and the significant magical power required to craft such an artifact.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T18:03:04.414689+00:00",
    "aiReviewedAt": "2026-07-23T18:03:04.414689+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_fangs_of_the_ancient_hollow": {
    "id": "shadowfell_fangs_of_the_ancient_hollow",
    "name": "Fangs of the Ancient Hollow",
    "description": "The Fangs of the Ancient Hollow are a pair of fanged artifacts forged from the teeth of a forgotten vampire lord, each tooth glowing faintly with necrotic energy. They grant devastating bites capable of dealing 2d8 necrotic damage on hit and summon a spectral echo that grants temporary invincibility during strikes. The wielder’s last memory becomes tangible for 10 seconds, but only at the cost of their next action.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦷",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Necrotic Bite",
      "Spectral Echo"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Necrotic Bite",
        "rules": "On a successful hit, deal 2d8 necrotic damage. The target is also knocked prone and restrained for the start of your next turn unless it makes a DC 15 Strength saving throw."
      },
      {
        "title": "Spectral Echo",
        "rules": "Activate as an action to summon a spectral echo that grants you temporary invincibility during your next attack, which lasts until the end of your next turn. The echo fades after 10 seconds or if you take any damage."
      }
    ],
    "levelRequirementReason": "The fangs' necrotic power and spectral abilities are too potent for lower-level characters to handle effectively.",
    "vendorReason": "The Shadowfell region is known for its dark magic and ancient artifacts, making it a fitting place for such powerful relics.",
    "shippingDetail": "Due to the fangs' volatile nature, they are shipped with a special containment field and require an additional day of transit time.",
    "usage": {
      "activation": "Action or Reaction (Limited once per short rest)",
      "duration": "Instantaneous for Necrotic Bite; Spectral Echo lasts until end of next turn",
      "endsWhen": "On damage, the echo fades after 10 seconds, or when the fangs are no longer held",
      "charges": "Unlimited"
    },
    "priceReason": "The balance is adjusted to ensure the Fangs of the Ancient Hollow provide a significant but fair advantage at level 5.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T18:03:16.167745+00:00",
    "aiReviewedAt": "2026-07-23T18:03:16.167745+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_flesh_golem_core": {
    "id": "shadowfell_flesh_golem_core",
    "name": "Flesh Golem Core",
    "description": "The Flesh Golem Core, a pulsating heart of an Onyx Hand ghoul resurrected in shadowy flesh, is a macabre relic forged from the very essence of undeath. Worn as an amulet, it grants the wearer flesh regeneration and amplifies dark magic with vampiric potency. When struck, there's a 20% chance that a 'Shadow Scream' will erupt, stunning foes for one turn. This core is a testament to the necromancer's mastery over life and death.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Flesh Regeneration",
      "Dark Magic Amplification"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Flesh Regeneration",
        "rules": "The wearer regenerates 15 hit points at the start of each of their turns. This effect lasts until expended and can be used once per short or long rest."
      },
      {
        "title": "Dark Magic Amplification",
        "rules": "While wearing this core, all dark spells cast by the wearer deal an additional 20% damage. The core must be activated as a bonus action to grant this amplification, which lasts for 10 minutes or until expended."
      }
    ],
    "levelRequirementReason": "This relic requires significant control over dark magic and undeath lore to wield effectively.",
    "vendorReason": "The Shadowfell is the birthplace of necromancy, making it the most fitting location for such a macabre artifact.",
    "shippingDetail": "Ships via shadowy winds, arriving in 3 days or less under moonlight.",
    "usage": {
      "activation": "Activates as a bonus action.",
      "duration": "10 minutes per use, reset on completion of a short or long rest.",
      "endsWhen": "Exhausted after extended use or upon completion of a rest.",
      "charges": "Unlimited charges."
    },
    "priceReason": "The core's unique properties and the shadowfell's influence justify its high price.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-23T18:03:46.668105+00:00",
    "aiReviewedAt": "2026-07-23T18:03:46.668105+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_forgotten_tongue": {
    "id": "shadowfell_forgotten_tongue",
    "name": "Forgotten Tongue",
    "description": "Forgotten Tongue is a jagged dagger, its surface etched with ancient runes that glow faintly in the dark. Crafted during the Old War of the Shadowfell, this relic whispers secrets only to those who can hear the language of the dead. When wielded, it grants a speaker the ability to communicate briefly with undead creatures, but at the cost of their own voice for as long as it is held.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Speak with Undead",
      "Voice Suppression"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Speak with Undead",
        "rules": "As an action, you can attempt to communicate with undead within 30 feet. The creature must make a Wisdom saving throw (DC 15). On a success, the creature answers your questions truthfully for up to 30 seconds. This effect ends if you drop Forgotten Tongue or if the creature attacks."
      },
      {
        "title": "Voice Suppression",
        "rules": "While holding Forgotten Tongue, you cannot speak. The suppression lasts until the dagger is sheathed or discarded. You regain your voice once the dagger's effects are ended."
      }
    ],
    "levelRequirementReason": "The relic's power demands a certain level of experience and discipline to wield effectively.",
    "vendorReason": "Shadowfell, a master of ancient relics, has the knowledge and resources to handle such powerful artifacts responsibly.",
    "shippingDetail": "The dagger is shipped under strict secrecy with no tracking, ensuring its safe arrival at your doorstep.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (30 seconds of effect per use)",
      "endsWhen": "Dropped or attacked while active",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity, origin, and unique abilities justify a higher price point.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:03:33.454446+00:00",
    "aiReviewedAt": "2026-07-23T18:03:33.454446+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_gaze_of_the_gaze": {
    "id": "shadowfell_gaze_of_the_gaze",
    "name": "Gaze of the Gaze",
    "description": "Gaze of the Gaze is a cracked obsidian mirror, etched with ancient runes that whisper secrets of fear. When worn, it reflects your most haunting memory onto an enemy, driving them to flee in terror or collapse in despair for 5 seconds. Its fractured surface grants you a +30% chance to paralyze any foe struck by your attacks and inflicts the 'Fearscape' debuff, which increases their chance of missing their next attack.",
    "category": "equipment",
    "price": 1000,
    "icon": "🕳",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Paralyzing Striker",
      "Fearscape"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Paralyzing Striker",
        "rules": "When you hit an enemy with a weapon attack while wearing Gaze of the Gaze, there is a +30% chance that they are paralyzed on the failed roll. This effect has no save DC and does not consume charges."
      },
      {
        "title": "Fearscape",
        "rules": "The 'Fearscape' debuff lasts for 1 minute or until the affected creature completes one short rest, whichever comes first. The target's next attack roll has a 20% chance to fail due to an overwhelming sense of fear."
      }
    ],
    "levelRequirementReason": "This item requires at least level 3 to wield effectively, as the mental and emotional strain is taxing.",
    "vendorReason": "Shadowfell merchants specialize in dark artifacts that manipulate fear and terror.",
    "shippingDetail": "The mirror arrives wrapped in a shroud of darkness, delivered by a Rakasha courier who ensures the item is not disturbed en route.",
    "usage": {
      "activation": "Instantaneous activation when worn as an accessory.",
      "duration": "10 seconds while worn.",
      "endsWhen": "Wearing time expires or you remove it.",
      "charges": "Unlimited, but requires concentration."
    },
    "priceReason": "The item's rare craftsmanship and the mental toll it imposes on its user justify a price of 1000 XP.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T18:03:31.475784+00:00",
    "aiReviewedAt": "2026-07-23T18:03:31.475784+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_gaze_of_the_soul": {
    "id": "shadowfell_gaze_of_the_soul",
    "name": "Gaze of the Soul",
    "description": "The Gaze of the Soul is a cursed, glassy lens forged from the very essence of the Shadowfell. When wielded, it grants its bearer an eerie glimpse into the souls of their foes, revealing their deepest fears and weaknesses. The spectral light emitted can drive the user mad if they dare to look upon themselves. Use this ancient artifact with caution—it is said that even the most seasoned warriors have faltered under its gaze.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Reveals enemy’s true fear or weakness",
      "Risk of mental instability"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Soul Vision",
        "rules": "When activated, the Gaze grants you an insight into your target's soul. This effect lasts for a duration of 30 seconds and reveals their greatest fear or weakness within range. The target must make a Wisdom saving throw with a DC of 15 to resist this effect. If they fail, they are exposed to your knowledge."
      },
      {
        "title": "Risk of Madness",
        "rules": "Using the Gaze on yourself has a chance to cause mental instability. Any creature using it on themselves must make a Wisdom saving throw with a DC of 15; failure results in a condition of blinded for 1d4 minutes."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to wield due to its dark and powerful nature.",
    "vendorReason": "The Shadowfell is the origin of this cursed artifact, and only those within its domain can offer it.",
    "shippingDetail": "Ships with a spectral courier that ensures safe arrival through the Shadowfell’s mists.",
    "usage": {
      "activation": "A bonus action to activate and use",
      "duration": "30 seconds, or until target is aware of your knowledge",
      "endsWhen": "The duration ends or the target becomes aware of the knowledge revealed",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rare and dangerous nature.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T18:03:59.448069+00:00",
    "aiReviewedAt": "2026-07-23T18:03:59.448069+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_heart_of_the_dragon_son": {
    "id": "shadowfell_heart_of_the_dragon_son",
    "name": "Heart of the Dragon Son",
    "description": "The Heart of the Dragon Son, a pulsating obsidian core that once belonged to a dragon sacrificed to the Dragon Conspiracy, beats in time with your heart. It grants you control over sonic waves and grants temporary dragon form for three rounds when empowered, but every heartbeat it resonates, risking the awakening of a slumbering dragon within your body. Crafted by Asgard and shipped through Cheep Cheep Shipping, this relic requires attunement with a dragon or dragon relic to wield its power.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐉",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Empowers sonic attacks",
      "Grants temporary dragon form"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Cheep Cheep Shipping",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Sonic Surge",
        "rules": "As an action, you can unleash a burst of sonic energy. This attack has a range of 30 feet and deals 1d6+2 force damage to one target. The attack requires concentration (save DC 15) and can be used once per short or long rest."
      },
      {
        "title": "Dragon Form",
        "rules": "When empowered by the Heart, you gain the ability to assume a temporary dragon form for three rounds. While in this form, your speed increases by 30 feet, you have advantage on Strength checks and saving throws against being charmed or frightened. This effect ends if you are reduced to 0 hit points."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 12 due to the significant power granted by the Heart.",
    "vendorReason": "Shadowfell, known for their extensive knowledge of ancient relics and dragon lore, carry this powerful artifact.",
    "shippingDetail": "Ships within 3 days with a special delivery tracking system.",
    "usage": {
      "activation": "Activates as an action or bonus action for Sonic Surge; Dragon Form is a temporary effect that lasts for three rounds when empowered.",
      "duration": "Sonic Surge lasts until the start of your next turn. Dragon Form lasts for three rounds while empowered.",
      "endsWhen": "Sonic Surge ends if concentration is lost, and Dragon Form ends when the Heart's power is no longer active or you are reduced to 0 hit points.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The Heart of the Dragon Son is priced at 1000 XP as it provides significant combat and defensive advantages, requiring attunement and being crafted by an esteemed relic-smith like Asgard.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T18:04:17.490461+00:00",
    "aiReviewedAt": "2026-07-23T18:04:17.490461+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_hollow_hairpin": {
    "id": "shadowfell_hollow_hairpin",
    "name": "Hollow Hairpin of the Silent Vampyre",
    "description": "The Hollow Hairpin of the Silent Vampyre is a bone-white hairpin forged from the remains of an ancient vampire queen who once walked the shadowy realms. Its razor-sharp edge can pierce through even the thickest veil of shadows, allowing you to bypass teleportation barriers with ease. When used in battle, it summons an eerie echo of your most recent strike, whispering secrets of the past and leaving a trail of spectral energy that lingers for mere moments before fading into nothingness.",
    "category": "equipment",
    "price": 1000,
    "icon": "💀",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Pierce Shadows",
      "Echo of the Strike"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Pierce Shadows",
        "rules": "As an action, you can use the Hollow Hairpin to pierce through a shadow wall or teleportation barrier. You must make a Dexterity (Stealth) check contested by the target's Perception. On a success, you bypass the obstacle and gain advantage on your next attack roll against any creature in the area of effect."
      },
      {
        "title": "Echo of the Strike",
        "rules": "When you hit an enemy with a melee weapon attack using this hairpin, it summons an echo that repeats the last 10 seconds of combat. This echo provides you with valuable tactical information about your opponent's movements and actions. The echo lasts for 10 seconds but can be dispelled by any creature within 5 feet of the target as a bonus action."
      }
    ],
    "levelRequirementReason": "Requires at least third level to effectively use its shadow-piercing capabilities.",
    "vendorReason": "Shadowfell is known for dealing with dark and ancient artifacts, making this hairpin a fitting addition to their inventory.",
    "shippingDetail": "Ships via supernatural couriers who deliver the item within seconds of purchase.",
    "usage": {
      "activation": "Action or Reaction (for Echo)",
      "duration": "Instantaneous for Pierce Shadows, 10 seconds for Echo",
      "endsWhen": "On a failed save by the target or when the echo is dispelled",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price considering its unique abilities and rarity within the market.",
    "priceOriginal": 2700,
    "priceReviewedAt": "2026-07-23T18:04:03.191031+00:00",
    "aiReviewedAt": "2026-07-23T18:04:03.191031+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_item_name_here": {
    "id": "shadowfell_item_name_here",
    "name": "Bullet Bill Courier Pack",
    "description": "The Bullet Bill Courier Pack is a sleek, metallic pouch forged from shadowsteel and imbued with the arcane energies of the Shadowfell. It can traverse the planes to deliver goods between worlds in mere moments, making it invaluable for any courier tasked with delivering critical messages or fragile items across realms. Each use requires 20 minutes of focused concentration, during which time you must be within 30 feet of the destination location. The pack's efficiency diminishes by 10% after three uses, requiring a short rest to recover fully.",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Planeswalker Delivery",
      "Limited Uses"
    ],
    "vendor": "Shadowfell",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Planeswalker Delivery",
        "rules": "Activate as an action within 30 feet of the destination. The pack transports a small object (up to 10 pounds) across planes between the Shadowfell and Sarasaland. The delivery requires 20 minutes of concentration. The item is delivered instantly upon successful activation, but you must be at least level 6 to use it."
      },
      {
        "title": "Limited Uses",
        "rules": "The pack can only be used once per day. After three uses, its efficiency drops by 10%. A short rest fully restores the pack’s efficiency and resets the daily use limit."
      }
    ],
    "levelRequirementReason": "At least level 6 to harness the arcane energies necessary for interdimensional transport.",
    "vendorReason": "The Shadowfell is known for its mastery of planeswalking and interdimensional travel, making Bullet Bill Express a natural vendor for this item.",
    "shippingDetail": "Delivered by the iconic red-suited delivery courier with a guaranteed 20-minute activation window.",
    "usage": {
      "activation": "Activate as an action within 30 feet of the destination location.",
      "duration": "Instantaneous, but requires 20 minutes of concentration to activate.",
      "endsWhen": "The item is delivered or if interrupted by a successful Dispel Magic spell.",
      "charges": "Daily use limit; resets after three uses and full rest."
    },
    "priceReason": "Balanced at 1000 XP, reflecting the item's unique capabilities and limited usage.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T18:04:27.927299+00:00",
    "aiReviewedAt": "2026-07-23T18:04:27.927299+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_kivotos_item_name_here": {
    "id": "shadowfell_kivotos_item_name_here",
    "name": "Echo Ring",
    "description": "The Echo Ring hums with an otherworldly glow, its silver band etched with arcane symbols that shimmer like starlight. This cursed artifact weaves a tenuous bond between the Material and Shadowfell planes, allowing its wielder to briefly transfer one soul between worlds. Each use grants resistance to psychic attacks but saps 10 HP from the wearer; overuse results in a lingering curse that haunts the soul for days to come.",
    "price": 1000,
    "icon": "🌀",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Soul Transfer",
      "Psychic Resistance"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Cheep Cheep Shipping",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Soul Transfer",
        "rules": "Activates as an action. The wielder transfers one soul between the Material and Shadowfell planes. This effect is instantaneous, with no range or area. A successful DC 15 Wisdom saving throw ends the effect early. The ring can be used a number of times equal to your Charisma modifier (minimum of once)."
      },
      {
        "title": "Psychic Resistance",
        "rules": "Grants you resistance to psychic damage for 1 hour. This benefit lasts until it is dispelled or you take a long rest. There is no save required, but the ring can only be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Echo Ring's arcane power and soul manipulation require a high degree of magical proficiency.",
    "vendorReason": "Kivotos Students, under the tutelage of Moonfang Pack, have crafted this powerful and dangerous artifact for those who dare to venture into the Shadowfell.",
    "shippingDetail": "Ships via a specially chartered Phantom Steed, ensuring safe delivery within one week.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for Soul Transfer; 1 hour for Psychic Resistance",
      "endsWhen": "The effect ends when dispelled or the rest period concludes.",
      "charges": "Uses are equal to your Charisma modifier (minimum of once)."
    },
    "priceReason": "The Echo Ring's balanced price reflects its unique abilities and limited uses, ensuring it remains a valuable but not overpowered item.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T18:04:25.740797+00:00",
    "aiReviewedAt": "2026-07-23T18:04:25.740797+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_liquid_soul": {
    "id": "shadowfell_liquid_soul",
    "name": "Void Tincture",
    "description": "A vial of shimmering, pitch-black liquid, the Void Tincture is said to have been crafted from the very essence of the Shadowfell. Its touch drains the life force of enemies, leaving them weakened and vulnerable for moments, while the user endures a brief, searing psychic backlash. A sip of this infernal brew can turn the tide in combat, but it comes with a price: the soul-draining effect is not without its cost to the wielder’s mental fortitude.",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Drains Life Force",
      "Psychic Backlash"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Life Drain",
        "rules": "When consumed, the Void Tincture deals 300% damage to a single target within reach. The target must make a DC 15 Constitution saving throw or take an additional 2d6 necrotic damage at the start of its next turn."
      },
      {
        "title": "Psychic Backlash",
        "rules": "The user must succeed on a DC 13 Wisdom saving throw or suffer 1d4 psychic damage and be stunned for 1 round. This effect can only occur once per long rest."
      }
    ],
    "levelRequirementReason": "This dangerous potion requires the user to have reached at least fifth level to handle its potent effects.",
    "vendorReason": "The Shadowfell's dark secrets and arcane knowledge allow it to craft items that manipulate life and death, making the Void Tincture a fitting addition to its wares.",
    "shippingDetail": "Delivered by the elusive Void Drifters, known for their unpredictable and often dangerous routes through the Shadowfell.",
    "usage": {
      "activation": "Consume as an action",
      "duration": "Instantaneous effect; target is immediately affected",
      "endsWhen": "Target makes a saving throw or the user suffers psychic backlash",
      "charges": "Unlimited, but one per long rest"
    },
    "priceReason": "The Void Tincture's rarity and the risk involved in its use justify its substantial price.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T18:04:30.184277+00:00",
    "aiReviewedAt": "2026-07-23T18:04:30.184277+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_maw_of_the_mirrored": {
    "id": "shadowfell_maw_of_the_mirrored",
    "name": "Maw of the Mirrored",
    "description": "The Maw of the Mirrored is a jagged obsidian maw that shatters reality briefly, allowing the user to phase through solid walls and slip into hidden Onyx sanctuaries. Crafted from the very essence of shadowfell magic, it warps the fabric of space for three seconds, leaving enemies behind momentarily blind and vulnerable. Its touch seems to dissolve into darkness before reappearing with a flicker, perfect for those who dare explore the forgotten corners of the world.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Phases Through Walls",
      "Blinds Enemies"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Phase Through Walls",
        "rules": "Activates as a bonus action. The wielder can phase through solid walls and other objects for three seconds, moving up to 10 feet in any direction per turn during this time."
      },
      {
        "title": "Blinds Enemies",
        "rules": "Any creature hit by the phase effect must succeed on a DC 15 Constitution saving throw or become blinded until the start of their next turn. This effect has no save after the first round it is used."
      }
    ],
    "levelRequirementReason": "The Maw of the Mirrored requires a character to be at least level 3 to wield its shadowy magic effectively.",
    "vendorReason": "Shadowfell, a master of dark artifacts, is known for crafting items that bend reality and explore the unknown, making the Maw of the Mirrored an ideal addition to their inventory.",
    "shippingDetail": "The package arrives via Boo Spectral Mail, which can be a bit unpredictable but ensures safe delivery through shadowfell realms.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "3 seconds per use",
      "endsWhen": "At the end of its turn or when used against an immovable object",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "The Maw of the Mirrored is priced at 1000 XP due to its unique ability to phase through walls and blind enemies, making it a valuable tool for exploration and stealth.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:05:04.489952+00:00",
    "aiReviewedAt": "2026-07-23T18:05:04.489952+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_maw_of_the_void": {
    "id": "shadowfell_maw_of_the_void",
    "name": "Maw of the Void",
    "description": "The Maw of the Void is a jagged obsidian maw that whispers secrets from the dead and devours ambient light, leaving only shadowed memories in its wake. When worn, it grants fleeting glimpses into the corrupted architecture around you, revealing hidden enemy weaknesses and guiding you through the murkiest corridors. This spectral device can be felt as much as seen, a living conduit of shadow that drains light to reveal unseen truths.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Shadow Vision",
      "Necrotic Bite"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Shadow Vision",
        "rules": "As an action, you activate the Maw of the Void to drain ambient light within a 10-foot radius for 30 seconds. This grants you advantage on Perception checks made to notice hidden creatures or secret doors in the area. Once used, it requires 1 minute before it can be activated again."
      },
      {
        "title": "Necrotic Bite",
        "rules": "When you use the Maw of the Void to 'bite' at a creature within reach, you deal 1d6 necrotic damage. This effect has a 10-second cooldown between uses and requires a successful melee attack roll."
      }
    ],
    "levelRequirementReason": "The Maw of the Void's ability to manipulate ambient light and reveal hidden dangers demands a certain level of focus and control.",
    "vendorReason": "Shadowfell vendors are well-known for their arcane and shadowy items, making it fitting that they carry this item.",
    "shippingDetail": "Delivery by Shy Guy Smugglers is swift but requires a special delivery permit due to the Maw's ethereal nature.",
    "usage": {
      "activation": "Action (Shadow Vision) or Bonus Action (Necrotic Bite)",
      "duration": "Instantaneous, lasts for 30 seconds",
      "endsWhen": "The duration ends when the effect is used again or until you end your turn without using it.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The Maw of the Void's rare and powerful abilities justify a price that reflects its utility in combat and exploration.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:05:37.966090+00:00",
    "aiReviewedAt": "2026-07-23T18:05:37.966090+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_mind_wipe_circuit": {
    "id": "shadowfell_mind_wipe_circuit",
    "name": "Mind Wipe Circuit",
    "description": "The Mind Wipe Circuit, a sleek and pulsating circuit board crafted from dark-shadowed materials, hums ominously when activated. It is said to be forged deep within the changeling hives of the Shadowfell, where only the most skilled Changelings dare to work their magic. This device can erase one memory per use for ten minutes, leaving the target temporarily disoriented and vulnerable. Misuse on non-vampires risks triggering a virulent infection that plagues the user's mind with dark visions.",
    "price": 1000,
    "icon": "💡",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Erases 1 Memory",
      "Risk of Viral Infection"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Paratroopa Air Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Memory Erasure",
        "rules": "Activates as an action. The target must succeed on a Wisdom saving throw (DC 15) or be affected by the circuit for ten minutes, during which they lose one memory of their choosing."
      },
      {
        "title": "Viral Infection Risk",
        "rules": "If used on non-vampires, there is a 20% chance that a virulent infection strikes immediately after use. The infection deals 1d6 psychic damage per day for 5 days and can be cured only with powerful magic."
      }
    ],
    "levelRequirementReason": "Requires at least third-level spellcasting to handle the mental disruption caused by memory erasure.",
    "vendorReason": "The Shadowfell is known for its dark magic and artifacts, making this circuit a fitting addition to their inventory.",
    "shippingDetail": "Ships within three days with special handling for fragile electronics.",
    "usage": {
      "activation": "Action",
      "duration": "10 minutes",
      "endsWhen": "The memory effect ends after ten minutes, or if the target uses a successful Wisdom saving throw.",
      "charges": "Uses one charge per use; recharges when not in combat"
    },
    "priceReason": "Balanced to reflect its dark magic and limited utility within a campaign.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T18:05:21.547402+00:00",
    "aiReviewedAt": "2026-07-23T18:05:21.547402+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_mirror_bane": {
    "id": "shadowfell_mirror_bane",
    "name": "Mirror Bane",
    "description": "The Mirror Bane is a cursed glass artifact, forged from the shattered remnants of the Shadowfell’s illusory realm. When struck by an enemy, it shatters their false visage, revealing their true form—a grotesque reflection of their darkest essence. This mirror grants its bearer a fleeting boon: while active, it amplifies stealth abilities, making one nearly invisible to foes. However, the Mirror Bane comes at a price—those who wield it must face the truth of their own shadows.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Reveals enemy’s true form",
      "Enhances stealth"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Reveal True Form",
        "rules": "When an enemy strikes while the Mirror Bane is active, they reveal their true form as a grotesque reflection. This effect has no save DC and lasts for 1 round."
      },
      {
        "title": "Enhanced Stealth",
        "rules": "While the Mirror Bane is active, the wielder gains advantage on Dexterity (Stealth) checks for 1 minute per short rest."
      }
    ],
    "levelRequirementReason": "The cursed nature and potent abilities of the Mirror Bane necessitate a higher level to control its effects.",
    "vendorReason": "Shadowfell, known for dealing with dark artifacts, offers this mirror to those who can withstand its malevolent influence.",
    "shippingDetail": "The Mirror Bane is carefully packed and delivered only via Shy Guy Smugglers' secret couriers to ensure it reaches its intended recipient without mishap.",
    "usage": {
      "activation": "Object interaction (as an action)",
      "duration": "1 minute per short rest",
      "endsWhen": "The wielder takes damage or the mirror breaks, expending one charge.",
      "charges": "3 charges"
    },
    "priceReason": "Balanced at 1000 XP as it combines potent stealth and truth-revealing abilities within a rare artifact.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-23T18:05:09.182030+00:00",
    "aiReviewedAt": "2026-07-23T18:05:09.182030+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_mirror_core": {
    "id": "shadowfell_mirror_core",
    "name": "Core of the Fractured Mirror",
    "description": "The Core of the Fractured Mirror is a shimmering fragment of a shattered mirror, its surface etched with arcane runes that pulse with the dark energies of the Shadowfell. When wielded, it warps space around the user, allowing for swift teleportation to nearby foes and revealing hidden paths through illusions. This relic's power lies in its ability to pierce veils of deception, granting a keen eye to those who possess it.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Teleport to Nearest Foe",
      "See Through Illusions"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Teleport to Nearest Foe (50 feet)",
        "rules": "As an action, the wielder can teleport up to 50 feet to the nearest hostile creature within sight. This effect is usable once per short rest."
      },
      {
        "title": "See Through Illusions",
        "rules": "The wielder gains the ability to see through illusions and hidden traps for a duration of 1 minute, which ends when the user attacks or takes damage. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This core requires a minimum level of 5 due to its complex arcane structure and the power it commands.",
    "vendorReason": "The Shadowfell is home to many such mirrors, and this particular core comes from an ancient mirror that once belonged to the rulers of the shadow realm.",
    "shippingDetail": "Ships via Lakitu Drones with a delivery time of 3 days. The drones are equipped with specialized shielding to protect delicate items like this core.",
    "usage": {
      "activation": "Action (Teleport) / Bonus Action (See Through Illusions)",
      "duration": "Instantaneous (Teleport), 1 minute (See Through Illusions)",
      "endsWhen": "Use or taking damage",
      "charges": "Once per short rest (Teleport), once per long rest (See Through Illusions)"
    },
    "priceReason": "The core's rarity, power, and the unique abilities it grants justify a price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:05:46.761282+00:00",
    "aiReviewedAt": "2026-07-23T18:05:46.761282+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_mirror_core_fragment": {
    "id": "shadowfell_mirror_core_fragment",
    "name": "Mirror Core Fragment",
    "description": "A shard of the Dark Mirror’s soul, this Mirror Core Fragment is a fragment of twisted glass that crackles with dark energy. When struck by an enemy's attack, it reflects 40% of the damage back at them, dealing additional shadowy wounds. Only those who dare to face the abyss and have delved deep into the Shadowfell can wield its power, for it grants 60% chance to bypass enemy armor on first strike, ensuring a critical edge in combat.",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Damage Reflection",
      "Armor Bypass"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Damage Reflection",
        "rules": "When struck by an attack, the Mirror Core Fragment reflects 40% of that damage back to the attacker. This effect has a cooldown period of one minute between uses."
      },
      {
        "title": "Armor Bypass",
        "rules": "Upon first strike with this fragment, there is a 60% chance it bypasses enemy armor, dealing full damage without reduction. This effect can only occur once per encounter."
      }
    ],
    "levelRequirementReason": "Only those who have faced the abyss and possess the necessary lore to wield such dark magic are capable of using this fragment.",
    "vendorReason": "The Shadowfell's depths are rife with ancient relics, and only they can source such powerful yet dangerous shards.",
    "shippingDetail": "Due to its dark nature, it is delivered under strict security measures by the Shy Guy Smugglers, ensuring no unauthorized access during transit.",
    "usage": {
      "activation": "Instantaneous upon being struck by an attack",
      "duration": "Until the start of your next turn or until a new strike occurs",
      "endsWhen": "The attacker's next action or when a new attack strikes this fragment",
      "charges": "Unlimited, but only one reflection and bypass per encounter"
    },
    "priceReason": "The price reflects the item's rarity, shadowy power, and its limited availability from the depths of the Shadowfell.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-23T18:05:24.601576+00:00",
    "aiReviewedAt": "2026-07-23T18:05:24.601576+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_mirror_shard": {
    "id": "shadowfell_mirror_shard",
    "name": "Mirror Shard of the Onyx Hand",
    "description": "The Mirror Shard of the Onyx Hand is a jagged fragment of a shadowy mirror, its surface etched with runes that shimmer like spilled ink in the dim light. When held, it whispers fragmented truths of forgotten worlds, blurring reality and shadow. Its touch grants you fleeting glimpses into hidden paths, but at a steep cost: each use drains 100 HP, yet recharges after 24 hours under the Onyx Hand's light.",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Reality Distortion",
      "Perception Insight"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reality Distortion",
        "rules": "When activated as a bonus action, you gain advantage on Dexterity saving throws against reality-based attacks for the next minute. This effect ends when the target's attack is resolved or if you take another bonus action to activate this effect."
      },
      {
        "title": "Perception Insight",
        "rules": "For 20 seconds, you have advantage on Wisdom (Perception) checks related to hidden paths and secret doors. This effect recharges after 24 hours of exposure to the Onyx Hand's light."
      }
    ],
    "levelRequirementReason": "This shard is accessible at Level 1, offering a balance between power and accessibility.",
    "vendorReason": "The Shadowfell's dark magic resonates with the shard, making it a natural fit for their offerings.",
    "shippingDetail": "Delivered by Shy Guys who whisper secrets of hidden paths as they deliver the shard.",
    "usage": {
      "activation": "Bonus action to activate; recharges after 24 hours in the Onyx Hand's light.",
      "duration": "Duration depends on activation: advantage on saving throws lasts until the attack is resolved, Perception Insight lasts for 20 seconds.",
      "endsWhen": "Effect ends when its duration expires or you take another bonus action to activate this effect.",
      "charges": "Unlimited uses per day; recharges after 24 hours."
    },
    "priceReason": "This shard offers substantial combat and perception benefits, making it a valuable tool for adventurers.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T18:06:04.022480+00:00",
    "aiReviewedAt": "2026-07-23T18:06:04.022480+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_mirrored_blade": {
    "id": "shadowfell_mirrored_blade",
    "name": "Mirrored Blade of the Onyx Hand",
    "description": "The Mirrored Blade of the Onyx Hand is a weapon forged from the fractured surface of an ancient Dark Mirror, its edge etched with stolen memories and shadows. It cleaves through darkness with lethal precision, leaving behind echoes of its victims in the form of faint, lingering whispers that haunt the battlefield. This blade grants temporary invisibility after each attack, allowing you to strike unseen, and has a 10% chance to drain an enemy’s memory, causing them to falter momentarily.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% damage against shadow creatures",
      "Grants temporary invisibility for 3 seconds after each attack"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shadow Strike Invisibility",
        "rules": "After each successful melee attack, the wielder becomes temporarily invisible for a duration of 3 seconds. This effect can be used once per short or long rest."
      },
      {
        "title": "Memory Drain",
        "rules": "There is a 10% chance that upon dealing damage to a shadow creature, you have the option to drain a memory from it. The target must succeed on a DC 15 Wisdom saving throw or be stunned for 1 round."
      }
    ],
    "levelRequirementReason": "Requires proficiency in one martial weapon to wield effectively.",
    "vendorReason": "The Shadowfell is home to the Dark Mirror from which this blade was forged, and thus it holds exclusive rights to sell such a weapon.",
    "shippingDetail": "Ships via the Void Drifter Relay with a 24-hour delivery time.",
    "usage": {
      "activation": "Instantaneous after each successful melee attack.",
      "duration": "3 seconds of temporary invisibility.",
      "endsWhen": "Ends when the wielder takes an action or is hit by an attack.",
      "charges": "Unlimited, recharges on a short rest."
    },
    "priceReason": "Balanced at 1000 XP to reflect its unique properties and limited utility.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:06:07.290726+00:00",
    "aiReviewedAt": "2026-07-23T18:06:07.290726+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_mirrored_blood": {
    "id": "shadowfell_mirrored_blood",
    "name": "Mirrored Blood of the Hollow Throne",
    "description": "The Mirrored Blood of the Hollow Throne is a sinister artifact dipped in the dark essence of the Shadowfell. When invoked, it mirrors an enemy's true form, revealing their hidden vulnerabilities and granting the user immunity to mind control for a breathless moment. This potent relic is best wielded against foes whose souls are woven from shadow and whispers of the dead, leaving behind a lingering psychic echo that troubles those within its radius.",
    "category": "equipment",
    "price": 1000,
    "icon": "🕯",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Mirrors Enemy's True Form",
      "Immunity to Mind Control"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Mirror of True Form",
        "rules": "When activated as an action, the artifact reveals an enemy’s true form for 10 seconds. Enemies within a 5-meter radius must succeed on a DC 14 Wisdom saving throw or be frightened until the end of their next turn."
      },
      {
        "title": "Immunity to Mind Control",
        "rules": "For 30 seconds after activation, the user gains immunity to all mind control effects. This immunity does not stack with other immunities but can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "This relic requires a high degree of focus and power to wield effectively against shadow-based threats.",
    "vendorReason": "The Shadowfell vendor, Boo Spectral Mail, carries this item as it is a potent weapon against their realm's denizens.",
    "shippingDetail": "Ships with a spectral courier that may delay delivery by one day due to the mystical nature of its cargo.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds (Mirror effect), 30 seconds (Immunity)",
      "endsWhen": "Ends when the duration expires or the user is hit with an attack.",
      "charges": "Unlimited, but only one immunity can be active at a time."
    },
    "priceReason": "The price reflects its rare materials and powerful effects against shadow-based threats.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T18:05:53.165702+00:00",
    "aiReviewedAt": "2026-07-23T18:05:53.165702+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_mirrored_cloak": {
    "id": "shadowfell_mirrored_cloak",
    "name": "Cloak of the Mirror Heart",
    "description": "The Cloak of the Mirror Heart weaves together the fractured essence of the Shadowfell, shimmering with spectral reflections that dance like living shadows. As you don this garment, it seems to absorb the very essence of its surroundings, revealing hidden threats and reflecting attacks as if they were mere echoes. Worn by warriors who have faced the darkest corners of existence, it grants a fleeting moment of invulnerability, turning enemies' strikes into their own downfall.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Mirror-Shield Reflection",
      "Shadowy Evasion"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Mirror-Shield Reflection",
        "rules": "When an attack is made against the wearer, up to 10% of the damage is reflected back at the attacker as a counterattack. This effect lasts for 30 seconds and can occur once per short or long rest."
      },
      {
        "title": "Shadowy Evasion",
        "rules": "The cloak grants the wearer a +5 bonus to Dexterity saving throws against attacks from creatures of the Shadowfell plane, providing a 15% evasion chance for 30 seconds. This effect can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The cloak's reflection abilities and evasion bonuses are designed to assist seasoned adventurers who have already proven their worth against the Shadowfell's threats.",
    "vendorReason": "Only those versed in the lore of the Shadowfell would recognize the value of such a powerful yet ethereal item, making it a fitting addition for the Shadowfell vendor.",
    "shippingDetail": "The cloak arrives wrapped in layers of spectral mist, ensuring that only those who truly understand its nature can handle it safely.",
    "usage": {
      "activation": "Instantaneous; the effects activate upon wearing or removing the cloak until they expire.",
      "duration": "30 seconds",
      "endsWhen": "The wearer removes the cloak, ends their turn, or takes a short rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The Cloak of the Mirror Heart is crafted from the most precious materials found in the Shadowfell and requires intricate knowledge to wield effectively.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T18:06:33.784849+00:00",
    "aiReviewedAt": "2026-07-23T18:06:33.784849+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_mirrored_haunt_tome": {
    "id": "shadowfell_mirrored_haunt_tome",
    "name": "Mirrored Haunt Tome",
    "description": "Bound in supple shadow leather, the Mirrored Haunt Tome whispers tales of forgotten vampires and lost souls. When invoked, it warps the immediate vicinity into a web of cursed mirrors that trap foes within their own phantasmal echoes, each loop weaving deeper until they are ensnared by their own fears. The tome’s dark magic grants shadow damage to all enemies in its range for ten turns, while also halving their movement speed, turning every step into a futile chase through the spectral maze it conjures.",
    "price": 1000,
    "icon": "📜",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Creates Cursed Mirrors",
      "Enhances Shadow Damage"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Cursed Mirrors",
        "rules": "When activated as an action within 30 feet, this tome creates three zones of cursed mirrors that trap enemies for three turns. Each zone reduces the target's movement speed by 50% and grants +25% shadow damage to all attacks against them."
      },
      {
        "title": "Shadow Damage",
        "rules": "For ten turns after activation, any creature within a 30-foot radius deals an additional 1d6 shadow damage with their attacks. There is no save for this effect; it simply applies as long as the tome remains active and the target is within range."
      }
    ],
    "levelRequirementReason": "This spell requires a minimum of 7th level to cast effectively, ensuring that only experienced adventurers can harness its dark power.",
    "vendorReason": "The Shadowfell is the birthplace of such forbidden knowledge; it makes sense for them to sell this tome which carries the whispers of forgotten vampires and lost souls.",
    "shippingDetail": "Ships via the Void Drifters, known for their expertise in delivering dangerous and arcane goods through the Shadowfell's treacherous mists with swift precision.",
    "usage": {
      "activation": "Action to cast",
      "duration": "Ten turns after activation",
      "endsWhen": "The spell ends when its duration expires or the tome is destroyed",
      "charges": "Unlimited, recharges on a short rest"
    },
    "priceReason": "This item's price reflects its rarity and power, providing a balanced addition to any character’s repertoire without overwhelming them.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T18:06:23.703599+00:00",
    "aiReviewedAt": "2026-07-23T18:06:23.703599+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_mirrored_heart": {
    "id": "shadowfell_mirrored_heart",
    "name": "Mirrored Heart of the Void",
    "description": "The Mirrored Heart of the Void is a heart-shaped amulet with an obsidian surface that gleams with an eerie, shifting light. Crafted from the essence of shadow and void, it draws in the foul energy of its foes. When activated, it mirrors their attack back at them, doubling both damage and reach. The amulet’s power can only be harnessed once per battle, making it a crucial tool for duels against formidable enemies.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Mirror Strike",
      "Void Echo"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Mirror Strike",
        "rules": "When the user attacks an enemy within 10 feet and hits, the target’s next attack made during that turn strikes itself with doubled damage. This effect lasts for 30 seconds or until the user takes their next action."
      },
      {
        "title": "Void Echo",
        "rules": "The amulet can only be used once per battle. After use, it requires a short rest to recharge its power."
      }
    ],
    "levelRequirementReason": "This item is designed for seasoned adventurers who can handle the strategic demands of using it effectively in combat.",
    "vendorReason": "The Shadowfell has a deep connection to the realm of shadows and voids, making them the most knowledgeable about items that manipulate such forces.",
    "shippingDetail": "Ships directly from the shadowy realms; delivery can take up to three days due to the mystical nature of its origin.",
    "usage": {
      "activation": "Action",
      "duration": "30 seconds or until user takes their next action",
      "endsWhen": "The user's next action, or if it is interrupted by an attack on the amulet wearer",
      "charges": "Once per battle"
    },
    "priceReason": "Crafted from rare shadow essence and requires intricate enchantment, this item justifies its price in strategic utility.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:06:19.726199+00:00",
    "aiReviewedAt": "2026-07-23T18:06:19.726199+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_mirrored_scarf": {
    "id": "shadowfell_mirrored_scarf",
    "name": "Mirrored Scarf of the Silent Blade",
    "description": "The Mirrored Scarf of the Silent Blade is a cloak woven from shards of shadowy glass, each piece reflecting the wearer's every step in eerie detail. When donned, the scarf grants invisibility for one minute, allowing the wearer to move unseen and unheard. The scarf’s unique design ensures that any who dare to strike at its bearer will find their blows reflected back with a surge of psychic force.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌑",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Reflective Tracking"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "When activated, the scarf grants total invisibility to the wearer for one minute. The effect ends if the wearer moves more than 10 feet or takes any action that provokes an attack of opportunity."
      },
      {
        "title": "Reflective Tracking",
        "rules": "While invisible, the scarf reflects the wearer's movements, allowing them to track their path. If struck while invisible, the scarf channels a surge of psychic force causing 2d4 damage to the attacker and revealing the wearer’s position."
      }
    ],
    "levelRequirementReason": "The scarf’s shadowy glass requires a certain amount of concentration and finesse that beginners can master.",
    "vendorReason": "Shadowfell traders specialize in items forged from the strange materials of their region, making this scarf an excellent addition to their offerings.",
    "shippingDetail": "Due to its fragile nature, the Mirrored Scarf is shipped via Shy Guy Smugglers' secure, shadow-laden couriers.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "1 minute",
      "endsWhen": "The wearer moves more than 10 feet or takes an action that provokes an attack of opportunity",
      "charges": "Unlimited"
    },
    "priceReason": "The scarf’s unique material and the labor involved in its creation justify this price point.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T18:06:33.876906+00:00",
    "aiReviewedAt": "2026-07-23T18:06:33.876906+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_mirrored_shroud": {
    "id": "shadowfell_mirrored_shroud",
    "name": "Mirrored Shroud Cloak",
    "description": "The Mirrored Shroud Cloak is a rare artifact woven from the very fabric of the Shadowfell. Its dark, shimmering fabric reflects and disperses magical attacks, turning them into harmless echoes that dissipate into darkness. The cloak's wearer becomes a living mirror, absorbing spells and granting immunity to magical area effects for 3 seconds when struck. Swift and elusive, the cloak grants the wearer a +20-foot movement speed while cloaked, making combat more fluid and unpredictable.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Reflects Magical Spells",
      "Immunity to Area Effects"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Echo Shield",
        "rules": "When you take damage from a spell, the Mirrored Shroud Cloak reflects 20% of that damage as harmless echoes. For 3 seconds after taking this reflected damage, you are immune to all area effect spells and magical hazards."
      },
      {
        "title": "Swift Movement",
        "rules": "While wearing the cloak, you gain a +20-foot movement speed for its duration. This effect is passive while cloaked but becomes active when you take damage from a spell."
      }
    ],
    "levelRequirementReason": "The cloak's intricate weave and shadow magic require a level 5 character to channel and control effectively.",
    "vendorReason": "The Shadowfell is the birthplace of the Mirrored Shroud Cloak, and only its native vendors can source such rare and powerful artifacts.",
    "shippingDetail": "The cloak travels via the Void Drifter Relay, ensuring it arrives in pristine condition but requiring a week-long transit time.",
    "usage": {
      "activation": "Passive while cloaked; active when taking damage from a spell",
      "duration": "Instantaneous upon activation and for 3 seconds thereafter",
      "endsWhen": "The effect ends if you are no longer wearing the cloak or if it is destroyed",
      "charges": "Unlimited, but limited by daily rests"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare shadow magic and powerful protective abilities.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-23T18:06:37.378222+00:00",
    "aiReviewedAt": "2026-07-23T18:06:37.378222+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_mirrored_soul": {
    "id": "shadowfell_mirrored_soul",
    "name": "Mirrored Soul",
    "description": "A shattered locket containing the reflection of a lost soul, its glass facets shimmering with an ethereal glow. This relic is said to have been crafted by the shadowy artisans of the Shadowfell, each shard holding a fragment of a soul's memory. When activated, it creates a haunting mirror image that perfectly mimics the wearer’s movements and attacks, serving as both shield and decoy in times of peril.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Mirror Image",
      "Soul Shield"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mirror Image",
        "rules": "The user creates a mirror image that duplicates their actions. The duplicate is an exact copy of the user's movements and attacks, providing a shield for the original wearer. This effect lasts for two turns before fading away."
      },
      {
        "title": "Soul Shield",
        "rules": "If the wearer takes damage while this effect is active, the mirror image absorbs the full amount of damage instead, protecting the user from harm at the cost of the duplicate’s existence."
      }
    ],
    "levelRequirementReason": "The Mirrored Soul's power lies in its ability to provide immediate protection and distraction without requiring a high-level spellcaster.",
    "vendorReason": "Shadowfell artisans are known for their mastery of dark magic, making this item an authentic piece from the realm’s lore.",
    "shippingDetail": "Shipped via the Void Drifter Relay, the locket arrives sealed in a protective case to preserve its fragile state.",
    "usage": {
      "activation": "Action",
      "duration": "2 turns",
      "endsWhen": "Ends when the user takes damage or after two turns, whichever comes first",
      "charges": "Unlimited"
    },
    "priceReason": "The Mirrored Soul’s rarity and unique properties justify its price in terms of both lore and utility.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-23T18:07:07.508641+00:00",
    "aiReviewedAt": "2026-07-23T18:07:07.508641+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_moonfang_siphon_blade": {
    "id": "shadowfell_moonfang_siphon_blade",
    "name": "Siphon Blade of the Moonfang Pack",
    "description": "The Siphon Blade of the Moonfang Pack, forged from the blood of fallen Onyx Hand vampires, exudes an eerie glow under moonlight. This wickedly curved blade not only drains vitality from foes but also channels their essence into a powerful surge for your next attack. Crafted by the enigmatic shadowfell artisans, this blade is perfect for those who walk the dark paths and seek to turn the tide of battle with every swing.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Vampiric Drain",
      "Shadow Affinity"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Vampiric Drain",
        "rules": "When this blade hits a target, you drain 10% of its hit points. This effect occurs on the first successful melee attack against an undead or shadow creature."
      },
      {
        "title": "Shadow Affinity",
        "rules": "You gain +10% damage to undead and shadow creatures while wielding this blade. Additionally, there is a 5% chance that your next attack after a critical hit will trigger a surge of vitality, restoring 20 hit points to you."
      }
    ],
    "levelRequirementReason": "This blade requires significant prowess and experience to wield effectively.",
    "vendorReason": "The shadowfell artisans are known for their mastery of dark magic, perfecting blades that harness the essence of their craft.",
    "shippingDetail": "Due to its cursed nature, this blade must be shipped discreetly by night and under strict secrecy.",
    "usage": {
      "activation": "On a successful melee attack against undead or shadow creatures.",
      "duration": "Instantaneous; ends when the target is no longer an undead or shadow creature.",
      "endsWhen": "The effect ends if you disengage from combat with the target.",
      "charges": "Unlimited, but requires concentration."
    },
    "priceReason": "This blade's rare forging materials and dark enchantments contribute to its fair value of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:07:03.196606+00:00",
    "aiReviewedAt": "2026-07-23T18:07:03.196606+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_moonstone_binder": {
    "id": "shadowfell_moonstone_binder",
    "name": "Moonstone Binder",
    "description": "The Moonstone Binder is a polished obsidian binding that glows with the silver pulse of forgotten lunar sorrows. It whispers tales of ancient tides and hidden truths, revealing spectral visions when held near a mirror. The weight of centuries clings to its surface, and those who wield it feel the pull of the moon's eternal rhythm. However, during daylight, it dulls the senses, making Perception checks -2 until nightfall.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌙",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Moonlit Spellcasting",
      "Daytime Sense Diminishment"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Pianta Chuck Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Moonlit Spellcasting",
        "rules": "When held under moonlight, the wielder gains +1 to all spellcasting rolls. This effect is passive and requires no action."
      },
      {
        "title": "Daytime Sense Diminishment",
        "rules": "While worn during daylight, the Moonstone Binder imposes a -2 penalty on Perception checks until sunset. Wearing it in direct sunlight disrupts its connection to the lunar cycle and renders it inert for 1 hour."
      }
    ],
    "levelRequirementReason": "The complexity of aligning with the lunar cycle requires at least a 3rd level spellcaster.",
    "vendorReason": "The Mages Guild has exclusive access to ancient crafting techniques, allowing them to craft such powerful yet delicate artifacts.",
    "shippingDetail": "Ships via Pianta's fastest couriers, delivered within one week of order placement.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Permanent while under moonlight; -2 penalty during daylight until sunset.",
      "endsWhen": "Disruption by direct sunlight or end of day.",
      "charges": "Unlimited, but requires the user to be in a place where moonlight is available."
    },
    "priceReason": "Balanced at this price to reflect its unique lunar alignment and limited daily usage.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-23T18:06:49.849656+00:00",
    "aiReviewedAt": "2026-07-23T18:06:49.849656+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_moonstone_of_silence": {
    "id": "shadowfell_moonstone_of_silence",
    "name": "Moonstone of Silence",
    "description": "The Moonstone of Silence is a cold, silver orb that hums with the quiet whispers of forgotten starlight. When activated, it mutes all ambient noise within a 10-meter radius, making stealthy movements nearly silent and undetectable. Its icy surface glimmers under moonlight, hinting at its celestial origins. This relic grants +5% dodge chance while in motion for as long as the effect lasts, evading detection by auditory hunters with grace.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Ambient Noise Suppression",
      "Enhanced Dodge Chance"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Ambient Noise Suppression",
        "rules": "Activates on a bonus action. Silence all ambient sound within a 10-meter radius for 1 minute, reducing the effective detection range of enemies by 2 meters during this time. The effect ends if you move more than 5 feet or if your concentration is broken."
      },
      {
        "title": "Enhanced Dodge Chance",
        "rules": "Passive effect while moving within a 10-meter radius of the Moonstone. Grants +5% chance to make a Dexterity saving throw against attacks, limited to once per short rest."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to wield and focus on the subtle energies of the artifact.",
    "vendorReason": "The Shadowfell's dark markets are known for their unique, otherworldly relics like the Moonstone of Silence.",
    "shippingDetail": "Delivered by Shy Guy Smugglers with a 1-day delay to ensure the stone’s integrity remains intact.",
    "usage": {
      "activation": "Bonus action to activate ambient noise suppression.",
      "duration": "1 minute, ends if concentration is broken or you move more than 5 feet.",
      "endsWhen": "Concentration is lost or movement exceeds 5 feet.",
      "charges": "Unlimited uses, recharged after a long rest."
    },
    "priceReason": "Balanced at 1000 XP as it offers a significant tactical advantage in stealth and evasion without overpowering the game.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:06:52.446618+00:00",
    "aiReviewedAt": "2026-07-23T18:06:52.446618+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_moonstone_tome": {
    "id": "shadowfell_moonstone_tome",
    "name": "Moonstone Tome of the Unseen Truth",
    "description": "The Moonstone Tome of the Unseen Truth is a leather-bound volume encrusted with ancient runes that shimmer only under the full moon's light. Its pages whisper the secrets of forgotten battles and hidden truths, revealing an enemy’s true motives as clearly as the night sky. When you read it during a lunar peak, you hear their inner voice—a mental echo that grants you insight into their weaknesses for 10 seconds, allowing you to dodge magic attacks with uncanny precision.",
    "price": 1000,
    "icon": "📜",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Moonlight Whisper",
      "Mystic Dodge"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Moonlight Whisper",
        "rules": "When activated during a full moon, this tome grants you temporary insight into an enemy’s weaknesses. For the duration of 10 seconds, you can hear their inner voice as a mental echo, revealing hidden vulnerabilities that are otherwise obscured by their defenses."
      },
      {
        "title": "Mystic Dodge",
        "rules": "For the duration of your concentration (up to 2 minutes), you gain a +20% bonus to your AC against magic attacks. This effect is limited to one use per full moon cycle, and it ends if you are hit by a non-magic attack."
      }
    ],
    "levelRequirementReason": "This tome requires at least level 5 to activate due to the mental strain of hearing an enemy’s inner voice.",
    "vendorReason": "The Shadowfell's dark magic allows them to trade in items that tap into forgotten lore and hidden truths, making this tome a fitting addition to their inventory.",
    "shippingDetail": "Ships via the Rakasha Spirit Walk, which ensures the book arrives during the night, when its runes glow brightest under the full moon.",
    "usage": {
      "activation": "Reading the tome as an action during a full moon grants both effects.",
      "duration": "10 seconds for Moonlight Whisper; concentration up to 2 minutes for Mystic Dodge.",
      "endsWhen": "Moonlight Whisper ends after its duration, and Mystic Dodge ends when you lose concentration or are hit by a non-magic attack.",
      "charges": "Unlimited uses per full moon cycle."
    },
    "priceReason": "The tome’s price is set at 1000 XP to reflect its rare crafting materials and the mystical energy required to bind such ancient secrets into a single volume.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-23T18:07:18.629299+00:00",
    "aiReviewedAt": "2026-07-23T18:07:18.629299+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_mournful_maw": {
    "id": "shadowfell_mournful_maw",
    "name": "Mournful Maw",
    "description": "The Mournful Maw is a cursed, jagged tooth relic from a forgotten vampire feast, its surface etched with arcane runes that whisper malevolent secrets. When activated, it allows the wearer to drain life from enemies with a silent, whispering bite, siphoning their vitality into a dark aura that clings to them like a shadow. Each successful hit has a +15% chance to deal extra damage and a +10% chance to inflict fear, causing foes to stagger in terror.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Life Drain",
      "Fearful Bite"
    ],
    "vendor": "Shadowfell",
    "shippedBy": "Phantom Postal Service",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Life Drain",
        "rules": "When the Mournful Maw strikes an enemy, it drains life energy. This effect deals an additional 15% of the target's hit point damage as necrotic energy. The effect lasts until the start of your next turn."
      },
      {
        "title": "Fearful Bite",
        "rules": "Each successful bite has a +10% chance to instill fear in the target, causing them to drop their weapons and flee for 1d4+1 rounds. The save DC for this effect is equal to 8 + your proficiency bonus."
      }
    ],
    "levelRequirementReason": "This relic's dark magic requires a proficient wielder who has faced the trials of darkness.",
    "vendorReason": "The Shadowfell vendor, Boo Spectral Mail, has a special connection to the cursed relics of forgotten feasts and undead lore.",
    "shippingDetail": "Delivered by spectral couriers, this item arrives with a faint whispering sound and an eerie glow.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the target is no longer adjacent to you or at the start of your next turn.",
      "charges": "Recharge after a long rest"
    },
    "priceReason": "Balanced with other rare items, this relic offers potent abilities but requires careful handling.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-23T18:07:33.584678+00:00",
    "aiReviewedAt": "2026-07-23T18:07:33.584678+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_necrotic_essence": {
    "id": "shadowfell_necrotic_essence",
    "name": "Ash of the Silent Choir",
    "description": "A vial of Ash of the Silent Choir contains the ethereal residue of a thousand forgotten vampires, their silent whispers lingering in the air like shadows. When consumed, it grants the wielder temporary invulnerability to shadow damage and awakens a haunting whisper within, compelling them to sing eerie melodies that echo through the darkness. This vial is crafted by the Shadowfell from the souls of ancient undead, a relic of forgotten legacies.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Immunity to Shadow Damage",
      "Haunting Melody"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shadowfell Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Shadow Damage",
        "rules": "The user gains immunity to shadow damage for 1 turn. This effect lasts until the start of their next turn and is lost if they take any other kind of damage before then."
      },
      {
        "title": "Haunting Melody",
        "rules": "For the duration of the immunity, the user can sing an eerie melody that compels nearby creatures within 30 feet to make a Wisdom saving throw (DC 12) or be charmed for 1 minute. This effect has no limit on uses."
      }
    ],
    "levelRequirementReason": "The Ash of the Silent Choir is accessible to all adventurers, as its power lies in its eerie but straightforward abilities.",
    "vendorReason": "The Shadowfell vendor is well-known for their connection with dark magic and undead lore, making them a fitting purveyor of this vial's macabre essence.",
    "shippingDetail": "Delivered by the shadowy figures of the Nightshade Couriers; the Ash arrives in a sealed, black casket to maintain its mysterious aura.",
    "usage": {
      "activation": "Consumed as an action.",
      "duration": "1 turn immunity and haunting melody effect.",
      "endsWhen": "Starts of next turn or if any other damage is taken before then; the haunting melody lasts for 1 minute.",
      "charges": "Unlimited, but only one use per day."
    },
    "priceReason": "The Ash's balanced price reflects its straightforward abilities and the limited daily usage to ensure it remains a strategic but not overpowered item.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T18:07:42.695792+00:00",
    "aiReviewedAt": "2026-07-23T18:07:42.695792+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_night_blood_blood": {
    "id": "shadowfell_night_blood_blood",
    "name": "Night Blood Blood",
    "description": "A vial of ancient Onyx Hand blood that amplifies vampiric regeneration. Sip to restore 100 HP and gain 20% damage resistance for 5 minutes.",
    "price": 1200,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Restores 100 HP",
      "Grants 20% damage resistance for 5 minutes",
      "Cannot be used while unconscious"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "shadowfell_night_blood_essence": {
    "id": "shadowfell_night_blood_essence",
    "name": "Night Blood Essence of the Veilbound",
    "description": "The Night Blood Essence of the Veilbound is a vial containing the final, spectral drop of blood from a vampire lord slain in the deepest reaches of the Shadowfell. When invoked, it grants you temporary invulnerability to all damage, allowing you to phase through solid matter and restore a portion of your health. This essence, crafted by the enigmatic Rakasha Clans, is said to hold the very essence of shadow and darkness that binds the Veilbound within their lairs.",
    "price": 1000,
    "icon": "💉",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invulnerability",
      "Phasing"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invulnerability",
        "rules": "When activated as a bonus action, you gain temporary invulnerability to all damage for 10 seconds. You can use this ability once per long rest."
      },
      {
        "title": "Phasing",
        "rules": "Once per short or long rest, you can activate the essence to phase through solid matter as an action. This effect lasts until your next turn and allows you to move through objects without taking damage from them."
      }
    ],
    "levelRequirementReason": "This essence is powerful but not overly so for a first-level character, providing utility rather than overwhelming strength.",
    "vendorReason": "The Shadowfell's dark artisans and mystics have the means to craft such an item, drawing on the very life force of their realm.",
    "shippingDetail": "Delivered by a Rakasha spirit courier who ensures it arrives in perfect condition, but only during full moon nights.",
    "usage": {
      "activation": "Bonus action for Invulnerability; Action to phase through solid matter",
      "duration": "10 seconds for Invulnerability; Until your next turn for Phasing",
      "endsWhen": "At the end of the duration or if you take damage while invulnerable, or when phasing ends due to completion of a movement action.",
      "charges": "Each use expends one charge. You can use this essence once per long rest."
    },
    "priceReason": "The price reflects the rarity and craftsmanship required to create such an item, balanced for its utility at first level.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-23T18:08:00.122439+00:00",
    "aiReviewedAt": "2026-07-23T18:08:00.122439+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_night_breath_mask": {
    "id": "shadowfell_night_breath_mask",
    "name": "Night Breath Mask",
    "description": "The Night Breath Mask is a respirator crafted from shadowy fabric woven within the very heart of the Shadowfell. Its surface glows faintly with an eerie blue light, and whispers of forgotten lore hum through its weave. Wearers can breathe in the ethereal air of the Shadowfell, drawing upon its ancient energies to enhance their stealth and perception. With each breath, a surge of unnatural clarity sharpens your senses, allowing you to detect hidden entities within reach for fleeting moments.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stealth Surge",
      "Shadow Perception"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Stealth Surge",
        "rules": "Activates as a bonus action. The wearer gains a +15% proficiency bonus in Stealth checks for 10 seconds. This effect can be activated once per short rest."
      },
      {
        "title": "Shadow Perception",
        "rules": "Detects hidden entities within 20 feet with a successful DC 14 Wisdom (Perception) check. The mask allows the wearer to ignore penalties from dim light or darkness when making such checks for 5 minutes per long rest."
      }
    ],
    "levelRequirementReason": "The mask's arcane power requires at least a third-level character to wield effectively.",
    "vendorReason": "The Shadowfell is the origin of this mask, and only those who understand its mysteries can properly handle it.",
    "shippingDetail": "Ships via a shadowy courier, arriving within 24 hours but requiring a secret meeting point for delivery.",
    "usage": {
      "activation": "Bonus action to activate Stealth Surge. Passive effect of Shadow Perception while worn.",
      "duration": "Stealth Surge lasts 10 seconds; Shadow Perception is active as long as the mask is worn.",
      "endsWhen": "The effects end when the wearer no longer meets the conditions (e.g., leaving dim light or darkness for Shadow Perception).",
      "charges": "Unlimited uses, recharging once per long rest."
    },
    "priceReason": "Crafted from rare materials and shadow energies, this mask's price reflects its unique properties and the arcane knowledge required to use it effectively.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:08:03.172539+00:00",
    "aiReviewedAt": "2026-07-23T18:08:03.172539+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_night_cry": {
    "id": "shadowfell_night_cry",
    "name": "Night Cry of the Crimson Veil",
    "description": "The Night Cry of the Crimson Veil, a resonant bell forged from the heartwood of ancient trees and enchanted by the spirits of the dead, emits a haunting echo that reveals unseen paths in the night. When struck, it summons a fleeting veil of darkness around its bearer, shielding them from prying eyes and light-based attacks. The bell’s call amplifies one's hearing, allowing the wielder to discern hidden movements within shadows.",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Dark Veil",
      "Spectral Hearing"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Dark Veil",
        "rules": "When activated as a bonus action, this bell creates a 5-foot-radius sphere of darkness centered on the user. This effect lasts for 10 seconds and provides advantage on Dexterity (Stealth) checks while within its area. The bell can be used once per short rest."
      },
      {
        "title": "Spectral Hearing",
        "rules": "Upon activation, the wielder gains passive advantage on Intelligence (Investigation) checks related to hidden or obscured sounds for 1 minute. This effect does not require an action and can be used once every long rest."
      }
    ],
    "levelRequirementReason": "The bell’s spectral enchantments are too complex to wield without a solid understanding of arcane magic.",
    "vendorReason": "The shadowy realm of the dead is the only place where such a powerful and ancient artifact can be found.",
    "shippingDetail": "Due to its fragile nature, it must be shipped with care using Koopa Postal’s enchanted crates that ensure safe delivery.",
    "usage": {
      "activation": "Bonus Action / Reaction",
      "duration": "10 seconds / Permanent within one minute",
      "endsWhen": "Used up, or when the wielder moves out of darkness or hearing range",
      "charges": "1 use per short rest"
    },
    "priceReason": "The bell’s unique enchantments and rare components make it a highly valuable item in the realm.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-23T18:08:11.218200+00:00",
    "aiReviewedAt": "2026-07-23T18:08:11.218200+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_night_heart": {
    "id": "shadowfell_night_heart",
    "name": "Night Heart Vial",
    "description": "The Night Heart Vial exudes a deep, velvety black hue, its contents shimmering with the essence of ancient shadows. This vial is said to be crafted from the very heartwood of the Shadowfell's oldest trees, imbued with the whispers of forgotten vampires. Sipping from it grants you 300 hit points and bestows temporary shadow resistance that lasts for a full hour, allowing you to walk through darkened realms unscathed by their malevolent influence.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Restores 300 HP",
      "Grants temporary shadow resistance"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restoration of Hit Points",
        "rules": "When consumed as an action, the vial restores 300 hit points to the drinker. This effect is instantaneous and does not require a saving throw."
      },
      {
        "title": "Shadow Resistance",
        "rules": "For one hour after consumption, you gain resistance to all damage from magical shadow effects. This benefit lasts until it is dispelled or ends when you fall unconscious."
      }
    ],
    "levelRequirementReason": "The Night Heart Vial's potent formula requires no specific level to access its benefits, making it accessible to all adventurers.",
    "vendorReason": "Shadowfell is the only vendor who understands the lore and crafting of such a powerful item, as they have deep connections with the Shadowfell itself.",
    "shippingDetail": "The vial must be shipped via the Rakasha Spirit Walk to ensure its potency remains intact during transit.",
    "usage": {
      "activation": "Consume as an action",
      "duration": "One hour",
      "endsWhen": "You fall unconscious or dispelled by a magical effect",
      "charges": "Unlimited"
    },
    "priceReason": "The Night Heart Vial's rarity and the shadow magic it contains justify its price, making it a valuable yet accessible item for adventurers.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T18:08:28.877665+00:00",
    "aiReviewedAt": "2026-07-23T18:08:28.877665+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_night_soul": {
    "id": "shadowfell_night_soul",
    "name": "Night Soul Shard",
    "description": "The Night Soul Shard is a fragment of a vampire's soul, forged in the shadowy realms. It glows faintly with a dark luminescence when exposed to moonlight and whispers of the undead. When equipped, it grants the wielder temporary resilience against psychic and magical attacks, making them a formidable adversary in duels where necromancy is key. Its essence also enhances critical hit chances by 20% against undead foes, ensuring deadly accuracy.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+25% resistance to psychic damage",
      "20% increased critical hit chance against undead"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Pipe Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Resilience Aura",
        "rules": "While the Night Soul Shard is equipped, the wielder gains +25% resistance to psychic and magical damage. This effect lasts for one hour or until expended."
      },
      {
        "title": "Undead's Foe",
        "rules": "The wielder has a 20% chance to increase their critical hit roll by two steps when facing undead creatures. This effect is triggered on each successful attack against an undead target, with no limit to the number of activations per encounter."
      }
    ],
    "levelRequirementReason": "The Night Soul Shard's dark magic and resilience require a minimum character level of 6 to wield effectively.",
    "vendorReason": "Shadowfell, being the realm of vampires and necromancy, is the only known source for such soul fragments.",
    "shippingDetail": "Ships via Pipe Express within three days; a special delivery with no additional fees.",
    "usage": {
      "activation": "Passive effect upon equipping",
      "duration": "One hour or until expended",
      "endsWhen": "Equipped is removed, or the duration ends",
      "charges": "Unlimited"
    },
    "priceReason": "The Night Soul Shard's rarity and unique properties justify its price of 1000 XP.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-23T18:08:17.774691+00:00",
    "aiReviewedAt": "2026-07-23T18:08:17.774691+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_nightfall_cloak": {
    "id": "shadowfell_nightfall_cloak",
    "name": "Nightfall Cloak of the Onyx Veil",
    "description": "The Nightfall Cloak of the Onyx Veil, woven from the remnants of ancient vampires who walked in the dark, whispers secrets to those who wear it. Its fabric shimmers like onyx under moonlight and grants the wearer complete invisibility within shadows, making them a shadow in the night. The cloak can also call forth a pair of spectral blades that dance around you, striking foes with lethal precision for 3 seconds upon activation.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility in Shadowy Conditions",
      "Spectral Blade Assist"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Invisibility in Shadowy Conditions",
        "rules": "As a bonus action, the wearer can activate the cloak to become invisible and gain +25% evasion when within shadows. This effect lasts for 1 minute or until the user exits shadowy conditions."
      },
      {
        "title": "Spectral Blade Assist",
        "rules": "By using an action, the wearer can summon two spectral blades that orbit them in a 10-foot radius and attack any creature that moves within it. The blades deal 1d6 force damage per level of the user (up to maximum 5d6), and this effect lasts for 3 seconds."
      }
    ],
    "levelRequirementReason": "The cloak's dark magic and spectral abilities are too complex for lower-level characters, requiring at least 5th level to wield.",
    "vendorReason": "The shadowy realm of the Shadowfell is the birthplace of this cloak, making it a natural fit for the Shadowfell vendor.",
    "shippingDetail": "Ships via the Void Drifter Relay with a delivery delay of one week due to its magical components requiring specific conditions.",
    "usage": {
      "activation": "Bonus action (Invisibility), Action (Spectral Blade Assist)",
      "duration": "1 minute (Invisibility), 3 seconds (Spectral Blade Assist)",
      "endsWhen": "Ends when the user exits shadowy conditions or the effect duration expires",
      "charges": "Unlimited, but recharges after a long rest"
    },
    "priceReason": "The cloak's dark magic and spectral abilities require extensive material components and complex construction, justifying its higher price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:09:09.445473+00:00",
    "aiReviewedAt": "2026-07-23T18:09:09.445473+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_nightshade_blade": {
    "id": "shadowfell_nightshade_blade",
    "name": "Nightshade Blade",
    "description": "The Nightshade Blade, forged in the shadowed forges of the dead, hums ominously as it dances in your hand. This wickedly sharp dagger not only grants you temporary immunity to fear and paralysis but also radiates a chilling aura that causes undead foes to shiver with dread. When wielded against the walking dead, its blade cuts through them like mist, dealing 2d6 points of shadow damage upon each successful strike.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Shadow Aura",
      "Immunity to Fear"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shadow Aura",
        "rules": "The blade radiates a chilling aura that imposes the frightened condition on all undead within 10 feet of you for 1 minute. This effect can be used once per long rest."
      },
      {
        "title": "Immunity to Fear",
        "rules": "While wielding this blade, you are immune to any psychic or fear-based effects. This immunity lasts until the end of your next short or long rest."
      }
    ],
    "levelRequirementReason": "This dagger's shadowed steel and dark enchantments make it accessible even to lower-level characters who seek to harness its power.",
    "vendorReason": "The Shadowfell is the birthplace of this blade, and only vendors from there truly understand its origins and power.",
    "shippingDetail": "Due to the blade's dark nature, it must be shipped via special courier, ensuring safe delivery to your doorstep.",
    "usage": {
      "activation": "Instantaneous activation when drawing or wielding the dagger in combat.",
      "duration": "1 minute for Shadow Aura; ends at the end of your next short or long rest for Immunity to Fear.",
      "endsWhen": "Shadow Aura ends if you dismiss it as a bonus action, and Immunity to Fear ends upon resting.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The blade's rarity, dark enchantments, and unique properties justify its fair value of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:08:50.156596+00:00",
    "aiReviewedAt": "2026-07-23T18:08:50.156596+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_nocturne_scarf": {
    "id": "shadowfell_nocturne_scarf",
    "name": "Nocturne Scarf of the Bleeding Moon",
    "description": "The Nocturne Scarf of the Bleeding Moon is a twisted memento made from the threads spun by a vampire under the light of a lunar eclipse. Its midnight blue fabric pulses with an eerie, otherworldly glow that can be felt as much as seen. When donned, it casts enemies into a state of spectral disquiet, reducing their magic damage and movement speed, while also cloaking the wearer in shadows when darkness descends.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌙",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reduces enemy magic damage",
      "Slows enemy movement"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Reduced Enemy Magic Damage",
        "rules": "While wearing this scarf, all magical attacks against enemies within 30 feet are reduced by 2d4 points of damage. The effect lasts until the end of your next turn."
      },
      {
        "title": "Slowed Movement Speed",
        "rules": "Enemies within 15 feet of you move at half speed (30 feet per round) for as long as they remain in this area, or until they make a successful Strength saving throw. The save DC is equal to 8 + your proficiency bonus + your Charisma modifier."
      }
    ],
    "levelRequirementReason": "The scarf's supernatural properties require a moderate level of magical awareness and control.",
    "vendorReason": "Shadowfell merchants have access to unique, cursed artifacts that can be used for dark rituals or protection against the undead.",
    "shippingDetail": "Due to its volatile nature, it is shipped in a reinforced box with special cooling agents.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous",
      "endsWhen": "Removed or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its supernatural abilities and the risk involved in handling such a cursed artifact.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:08:31.254470+00:00",
    "aiReviewedAt": "2026-07-23T18:08:31.254470+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_ambrosia": {
    "id": "shadowfell_onyx_ambrosia",
    "name": "Onyx Ambrosia of the Broken Moon",
    "description": "The Onyx Ambrosia of the Broken Moon is a shimmering, black nectar that glows with an eerie luminescence, reminiscent of the last light of a fading moon. This rare elixir is said to be brewed from the tears of a fallen moon deity, whose sorrow echoes in its potent brew. A sip restores vitality, granting 300 hit points and temporary resistance to psychic attacks, while also casting an aura that subtly calms the mind, reducing enemy accuracy by 15% for ten seconds.",
    "price": 1000,
    "icon": "🍺",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Restores Vitality",
      "Resists Psychic Attacks"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Vitality",
        "rules": "When consumed as a bonus action, the Onyx Ambrosia restores 300 hit points to the imbiber. This effect is instantaneous and provides temporary resistance to psychic damage for the duration of one short rest."
      },
      {
        "title": "Psychic Resistance Aura",
        "rules": "For ten seconds after consumption, the imbiber's aura grants a +20% bonus to their saving throws against psychic attacks. During this time, enemies within 30 feet suffer a -15 penalty to their attack rolls and ability checks that target the imbiber."
      }
    ],
    "levelRequirementReason": "The elixir's potent effects are accessible to all adventurers, ensuring it remains a valuable tool for any campaign.",
    "vendorReason": "The Shadowfell is known for its dark treasures and this nectar fits perfectly into their mystic offerings.",
    "shippingDetail": "Delivered by shadowy couriers, the Onyx Ambrosia arrives in a sealed vial of moonlit glass, ensuring it remains potent until consumed.",
    "usage": {
      "activation": "Consumed as a bonus action",
      "duration": "Ten seconds; lasts for one short rest",
      "endsWhen": "Upon expiration or if the imbiber takes damage",
      "charges": "Unlimited"
    },
    "priceReason": "The rare and powerful effects, combined with its mystical origin and delivery method, justify a price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T18:08:56.278643+00:00",
    "aiReviewedAt": "2026-07-23T18:08:56.278643+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_blade": {
    "id": "shadowfell_onyx_blade",
    "name": "Onyx Blade of the Veiled Scribe",
    "description": "The Onyx Blade of the Veiled Scribe is a razor-edged blade forged from the shadowed core of a fallen Onyx Hand vampire, its surface etched with ancient runes that whisper secrets to those who wield it. It whispers hidden truths and forgotten lore, aiding in the unraveling of mysteries. Perfect for assassins seeking to leave no trace, this weapon's edge is both sharp and veiled, masking the identity of its bearer in the shadows.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Whispering Secrets",
      "Veiled Edge"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Whispering Secrets",
        "rules": "When you hit a creature with this weapon, it has a +5% chance to reveal one secret about the target or its surroundings. This effect is limited to once per combat."
      },
      {
        "title": "Veiled Edge",
        "rules": "This weapon grants advantage on Dexterity (Stealth) checks and provides a +10% damage reduction against illusory creatures. The damage reduction persists for the duration of one short rest, after which it must be recharged."
      }
    ],
    "levelRequirementReason": "The weapon's dark forging requires the wielder to possess significant experience in combat and stealth.",
    "vendorReason": "Shadowfell vendors are known for their dealings with dark artifacts, making this blade an expected offering.",
    "shippingDetail": "The blade is carefully wrapped to prevent its veiled nature from being compromised during transit.",
    "usage": {
      "activation": "Instantaneous upon a successful hit.",
      "duration": "Persistent until the end of one short rest.",
      "endsWhen": "After one short rest or if destroyed.",
      "charges": "Unlimited, recharging after a short rest."
    },
    "priceReason": "The blade's unique forging and its effects justify this fair value in XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:08:59.447027+00:00",
    "aiReviewedAt": "2026-07-23T18:08:59.447027+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_blade_of_the_void": {
    "id": "shadowfell_onyx_blade_of_the_void",
    "name": "Onyx Blade of the Void",
    "description": "The Onyx Blade of the Void is a sleek, obsidian sword forged from the shadowy essence of the Abyss. Its blade hums with dark energy and whispers secrets only to those who wield it. In the presence of undead or within shadowed zones, its user can activate a fleeting state of temporary invisibility that lasts 10 seconds, allowing for strategic strikes unseen. The blade also grants +15% damage against undead foes, making it a fearsome weapon in necrotic battles.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% damage vs. undead",
      "Temporary invisibility in darkness (10s)"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Phantom Courier Service",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Invisibility Aura",
        "rules": "When activated, the wielder becomes temporarily invisible within shadowed zones for 10 seconds. This effect ends if the user takes any action other than moving or attacking, is hit by an attack, or enters bright light."
      },
      {
        "title": "Undead Damage Bonus",
        "rules": "+15% damage against undead creatures. This bonus stacks with other sources of damage but has no effect on non-undead targets."
      }
    ],
    "levelRequirementReason": "Requires proficiency in stealth and a basic understanding of shadow magic.",
    "vendorReason": "The Shadowfell vendors specialize in weapons that harness dark energies, making them the ideal source for this weapon.",
    "shippingDetail": "Delivered by spectral couriers who ensure swift and safe transport through shadowed realms.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds",
      "endsWhen": "User takes an action other than moving or attacking, is hit, or enters bright light",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price reflects the rare materials and dark magic required to forge this weapon.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:09:05.669002+00:00",
    "aiReviewedAt": "2026-07-23T18:09:05.669002+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_blood": {
    "id": "shadowfell_onyx_blood",
    "name": "Onyx Blood Amulet",
    "description": "The Onyx Blood Amulet is a pulsating talisman crafted from the essence of fallen lords of the Shadowfell, forged in the heart of the realm's darkest forges. Its surface gleams with an eerie glow that shifts between shades of deep purple and crimson, as if alive with the spirits it once served. When activated, this amulet draws upon the vitality of foes, replenishing its wearer's health while filling them with a paralyzing dread aura, causing enemies within its radius to stagger in fear for fleeting moments.",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Healing Drain",
      "Dreadful Aura"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Healing Drain",
        "rules": "When the wearer takes damage from an enemy, they heal for an amount equal to 10% of that enemy's lost hit points. This effect has no cooldown."
      },
      {
        "title": "Dreadful Aura",
        "rules": "Enemies within a 5-meter radius are stunned for 1 second upon entering the aura. The wearer can activate this ability as a bonus action, and it lasts until the end of their next turn or when they move out of its range."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level to effectively harness the amulet's dark energies.",
    "vendorReason": "Shadowfell vendors specialize in exotic and powerful relics from their realm, making this item an expected offering.",
    "shippingDetail": "Delivered swiftly by Lakitu drones, the amulet arrives intact but requires careful handling upon arrival.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Until the end of your next turn or when you move out of its range",
      "endsWhen": "You move out of its radius or at the start of your next turn",
      "charges": "Unlimited, but requires concentration"
    },
    "priceReason": "Balanced to reflect its unique abilities and rarity within the realm.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-23T18:10:08.214208+00:00",
    "aiReviewedAt": "2026-07-23T18:10:08.214208+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_blood_dagger": {
    "id": "shadowfell_onyx_blood_dagger",
    "name": "Onyx Blood Dagger",
    "description": "The Onyx Blood Dagger is a blade crafted from the very marrow of captured Onyx Hand vampires. Its crimson glow hints at its malevolent origins, and each strike splits the veil between reality and the Shadowfell, summoning spectral whispers that haunt your foes. This dagger not only deals +100% damage to undead and shadow creatures but also inflicts a 5% chance per hit to reduce enemy armor by 20%, lasting for one turn.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+100% damage vs Undead & Shadows",
      "Armor Penetration: 20% for 1 turn"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Veil Rift",
        "rules": "When you hit an undead or shadow creature, there is a 5% chance that it creates a Veil Rift. This effect lasts until the start of your next turn and grants you advantage on all attacks against creatures in the area for the duration."
      },
      {
        "title": "Armor Penetration",
        "rules": "For each hit against an undead or shadow creature, there is a 5% chance that it reduces their armor by 20%, lasting for one turn. This effect has no save DC and can only occur once per target per battle."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to wield effectively, given the blade's malevolent nature.",
    "vendorReason": "The Shadowfell vendors are familiar with dark artifacts and can provide this weapon to those who dare to venture into its depths.",
    "shippingDetail": "Ships via shadowy couriers, arriving within a week of purchase.",
    "usage": {
      "activation": "As a bonus action when attacking an undead or shadow creature.",
      "duration": "Instantaneous effect on hit.",
      "endsWhen": "The target's turn ends if the effect is triggered.",
      "charges": "Unlimited, but only one effect per hit."
    },
    "priceReason": "Balanced at 1000 XP as it combines potent damage boosts and a unique battlefield control feature.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T18:09:15.991461+00:00",
    "aiReviewedAt": "2026-07-23T18:09:15.991461+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_blood_ointment": {
    "id": "shadowfell_onyx_blood_ointment",
    "name": "Onyx Blood Ointment",
    "description": "Onyx Blood Ointment is a thick, black paste that oozes from a vial crafted by the Onyx Hand's most devout followers. Applied to wounds, it accelerates healing while granting temporary resistance against psychic and shadow-based attacks, making it a crucial remedy for those who have faced the dark arts of the Shadowfell. The essence within is said to be drawn directly from the very heart of the Onyx Hand itself.",
    "price": 1000,
    "icon": "📦",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Heals 25% of max HP per application",
      "+18% resistance to psychic and shadow damage"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Healing Application",
        "rules": "Apply as a bonus action. The ointment heals the user for an amount equal to 25% of their maximum hit points. This effect lasts for 1 minute."
      },
      {
        "title": "Damage Resistance",
        "rules": "While smeared with Onyx Blood Ointment, you gain +18% resistance to psychic and shadow damage until the start of your next turn after applying it."
      }
    ],
    "levelRequirementReason": "The ointment's potent properties require a user skilled enough in healing magic.",
    "vendorReason": "Shadowfell vendors sell only what they can directly source from the Shadowfell, making this item one of their offerings.",
    "shippingDetail": "Due to its volatile nature, Onyx Blood Ointment must be shipped under strict conditions and requires special handling by Shy Guy Smugglers.",
    "usage": {
      "activation": "Apply as a bonus action.",
      "duration": "1 minute.",
      "endsWhen": "The effect ends at the start of your next turn after applying it or when removed.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Its rare ingredients and potent healing properties justify its significant price in XP.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-23T18:09:59.991776+00:00",
    "aiReviewedAt": "2026-07-23T18:09:59.991776+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_blood_satchel": {
    "id": "shadowfell_onyx_blood_satchel",
    "name": "Onyx Blood Satchel",
    "description": "The Onyx Blood Satchel is a dark, bone-woven pouch that captures and seals cursed blood within its depths. Crafted from the remains of fallen Onyx Hand vampires, it repels light magic and corrupts the soul of any who absorb its contents, turning their touch into decay and shadow. Each use amplifies necromantic spells by +50%, but at a price—the user's essence wears thin with each curse absorbed, reducing their vitality until they are consumed entirely after three usages.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs Cursed Blood",
      "Enhances Necromancy"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Absorbs Cursed Blood",
        "rules": "Activates as a bonus action, absorbing 1000 points of curse damage. The wearer's soul wears down by 5% for each use, ending after three usages or when the user’s vitality is exhausted."
      },
      {
        "title": "Enhances Necromancy",
        "rules": "Passively grants +50% damage to necromantic spells and effects. This boost lasts until the wearer's soul wears down beyond 10%, at which point the enhancement ceases, and the user is corrupted further."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 3 to wield due to the item’s dark magic and soul-corrupting effects.",
    "vendorReason": "The Shadowfell vendors specialize in items related to darkness and necromancy, making the Onyx Blood Satchel a natural fit for their inventory.",
    "shippingDetail": "Ships with special care via shadowed routes, ensuring that the satchel arrives without corrupting the surroundings.",
    "usage": {
      "activation": "Bonus action to activate and absorb cursed blood; passive enhancement of necromancy spells.",
      "duration": "Until three usages are made or the user’s soul wears down beyond 10%.",
      "endsWhen": "After three uses, when the user's vitality is exhausted, or if the user makes a successful DC 15 Wisdom saving throw to resist further corruption.",
      "charges": "Unlimited; recharges after a long rest."
    },
    "priceReason": "Balanced at 1000 XP due to its unique curse absorption and necromantic enhancement effects, along with the risk of soul corruption.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:09:26.875364+00:00",
    "aiReviewedAt": "2026-07-23T18:09:26.875364+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_blood_sword": {
    "id": "shadowfell_onyx_blood_sword",
    "name": "Onyx Blood Sword",
    "description": "The Onyx Blood Sword, forged from the bones of a forgotten Onyx Hand that roamed the Shadowfell, drips with cursed vitality. Its blade glows faintly in darkness and leaves a trail of fear in its wake, striking true against shadow enemies to deal +20% damage while also inflicting fear upon them for 2 seconds after each hit. The sword's very essence seems to whisper ancient secrets, granting the wielder +1 to critical hit chance with every swing.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Cursed Vitality",
      "Fearful Strike"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Cursed Vitality",
        "rules": "The Onyx Blood Sword deals an additional +20% damage against shadow enemies. This effect is always active as long as the sword is in use."
      },
      {
        "title": "Fearful Strike",
        "rules": "When the Onyx Blood Sword strikes a shadow enemy, it inflicts fear upon them for 2 seconds after each hit. The save DC to resist this effect is equal to 8 + the wielder's Charisma modifier. This effect can occur once per turn."
      }
    ],
    "levelRequirementReason": "The sword requires a minimum level of 5 due to its cursed nature and the need for a proficient wielder.",
    "vendorReason": "The Shadowfell vendor is well-known for dealing in dark artifacts and relics, including this powerful sword.",
    "shippingDetail": "Ships via Boo Spectral Mail, ensuring the package reaches its destination safely through a network of spectral couriers.",
    "usage": {
      "activation": "Drawn as an action to enter combat or use.",
      "duration": "Instantaneous effect each time it strikes; lasts until expended.",
      "endsWhen": "Exhausted after 3 uses per day.",
      "charges": "3 charges per day"
    },
    "priceReason": "The sword's rarity and cursed nature, combined with its potent effects, justify a price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:09:57.908550+00:00",
    "aiReviewedAt": "2026-07-23T18:09:57.908550+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_blood_vial": {
    "id": "shadowfell_onyx_blood_vial",
    "name": "Onyx Blood Vial",
    "description": "The Onyx Blood Vial is a dark, obsidian flask etched with ancient runes and sealed with an intricate lock. Crafted from the heart of a vampire who has succumbed to the shadows, it contains a potent essence that grants fleeting resilience. A sip restores 100% of your hit points and coats you in a shimmering layer of shadow armor, reducing incoming damage by 20%. The vial's contents are so rare that only those who have faced the abyssal depths dare to drink from it.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Restores Health",
      "Enhances Shadow Armor"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Restore Health",
        "rules": "Drinking the Onyx Blood Vial restores all of your hit points. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Shadow Armor",
        "rules": "For 10 seconds after consuming the vial, you gain a +2 bonus to AC as shadow armor temporarily coats your body. While active, you have advantage on saving throws against being charmed or frightened. This effect ends if you take damage."
      }
    ],
    "levelRequirementReason": "This item's powerful effects and the rarity of its ingredients necessitate a minimum level to prevent unbalanced play.",
    "vendorReason": "The Shadowfell is home to ancient vampires, making it the only source for such rare and potent artifacts.",
    "shippingDetail": "Ships via Pipe Express with a two-day delivery guarantee, ensuring the vial remains in pristine condition.",
    "usage": {
      "activation": "Instantaneous action to drink the contents of the vial.",
      "duration": "10 seconds or until you take damage.",
      "endsWhen": "You take damage or after 10 seconds.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Onyx Blood Vial's rarity, the vampire essence it contains, and its powerful healing effect justify this price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:09:52.807213+00:00",
    "aiReviewedAt": "2026-07-23T18:09:52.807213+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_bone_heart": {
    "id": "shadowfell_onyx_bone_heart",
    "name": "Onyx Bone Heart Pendant",
    "description": "The Onyx Bone Heart Pendant is carved from the heart of a fallen vampire lord, its dark surface etched with arcane runes that whisper of ancient shadows and loyalty to the night. It grants +30% damage against undead foes and a +20% chance to heal 20% of your maximum HP upon hitting an enemy. However, after 20 minutes of continuous wear, you may forget your own name, a strange side effect that leaves you vulnerable to self-doubt.",
    "category": "equipment",
    "price": 1000,
    "icon": "💎",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "+30% damage vs undead",
      "+20% heal on hit"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Shadow Loyalty",
        "rules": "While wearing the pendant, you gain advantage on saving throws against being charmed or frightened by creatures of shadow and undeath. Additionally, once per short rest, you may invoke a spectral echo that deals 2d6 necrotic damage to an enemy within 30 feet for 1 minute."
      },
      {
        "title": "Memory Loss",
        "rules": "After wearing the pendant for 20 minutes continuously, there is a 5% chance per hour of forgetfulness. This effect lasts until you take a long rest or drink a potion that cures conditions."
      }
    ],
    "levelRequirementReason": "The pendent's arcane and shadowy powers are too potent for lower-level characters to safely wield.",
    "vendorReason": "Shadowfell vendors specialize in the artifacts of dark magic, making this pendant a natural fit for their inventory.",
    "shippingDetail": "The delivery is handled by Boo Spectral Mail, known for its timely and reliable service, though it may arrive with a slight delay due to shadowy conditions.",
    "usage": {
      "activation": "Passive effect until removed or destroyed; invocation of spectral echo requires an action.",
      "duration": "Spectral echo lasts 1 minute",
      "endsWhen": "The effect ends if you are no longer within line of sight of the target, are incapacitated, or destroy the pendant.",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rare origin and potent effects justify its high price in experience points.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T18:10:21.739771+00:00",
    "aiReviewedAt": "2026-07-23T18:10:21.739771+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_crown": {
    "id": "shadowfell_onyx_crown",
    "name": "Onyx Crown of the Unbound",
    "description": "The Onyx Crown of the Unbound is a macabre piece of headgear, its surface etched with ancient runes that shimmer faintly. Crafted from the bones of an ancient vampire queen who was lost to the Shadowfell, it allows the wearer to manipulate shadows in combat and command darkness for tactical advantage. When worn, the crown grants +2 to Strength or Dexterity checks within shadowy environs and deals 2d6 points of shadow damage to foes within line of sight when activated.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Shadow Manipulation",
      "Darkness Command"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Shadow Manipulation",
        "rules": "The Onyx Crown allows the wearer to use their reaction to cast Shadow Blade, dealing 2d6 necrotic damage and forcing a DC 15 Constitution saving throw. This effect can be used once per short rest."
      },
      {
        "title": "Darkness Command",
        "rules": "When in an area of dim light or darkness, the wearer gains advantage on Strength or Dexterity checks made to move through difficult terrain and increases their speed by 10 feet for the duration of one combat round. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The crown's dark magic requires a degree of experience in handling such powerful artifacts.",
    "vendorReason": "Shadowfell specializes in rare and ancient magical items that resonate with the Shadowfell plane.",
    "shippingDetail": "The crown must be shipped via the Void Drifter Relay to ensure safe delivery through the planes of existence.",
    "usage": {
      "activation": "Reaction for Shadow Manipulation, Bonus Action for Darkness Command",
      "duration": "Instantaneous for Shadow Manipulation, one combat round for Darkness Command",
      "endsWhen": "Ends when used or on short rest/end of long rest respectively",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The crown's rarity and the complexity of its magic justify its price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:10:13.458346+00:00",
    "aiReviewedAt": "2026-07-23T18:10:13.458346+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_fang": {
    "id": "shadowfell_onyx_fang",
    "name": "Onyx Fang of the Silent Maw",
    "description": "The Onyx Fang of the Silent Maw exudes an aura of malevolent power, its surface etched with ancient runes that glow faintly in the dark. This fang was forged from the teeth of vampire lords who once ruled the Shadowfell, and it whispers secrets of undeath to those foolish enough to listen. Strike a blow with this weapon, and the target finds itself drawn into a shadowy maw that saps its life force; each turn without healing sees the victim lose 1 HP, as if under the curse of undeath.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Corrupting Bite",
      "Shadow Hunger"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Corrupting Bite",
        "rules": "When you hit a target with this weapon, it must succeed on a DC 15 Constitution saving throw or be inflicted with Shadow Hunger. This condition lasts until the creature is healed."
      },
      {
        "title": "Shadow Hunger",
        "rules": "While suffering from Shadow Hunger, the target loses 1 Hit Point at the start of each of its turns unless it has received healing since the last time it lost HP this way. The condition ends when the target is fully healed or if they succeed on a DC 15 Constitution saving throw."
      }
    ],
    "levelRequirementReason": "This fang requires a proficient character to wield its malevolent power effectively.",
    "vendorReason": "The Shadowfell is known for crafting and dealing in items imbued with dark magic, making it the perfect vendor for this cursed weapon.",
    "shippingDetail": "Due to its volatile nature, this item requires special handling by the Void Drifter Relay to ensure safe delivery.",
    "usage": {
      "activation": "On hit with a melee attack",
      "duration": "Until the target is healed or Shadow Hunger ends",
      "endsWhen": "The condition ends when the target is fully healed or if they succeed on a DC 15 Constitution saving throw",
      "charges": "Unlimited"
    },
    "priceReason": "Given its rarity and cursed nature, the Onyx Fang of the Silent Maw provides significant value at this price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:10:29.035903+00:00",
    "aiReviewedAt": "2026-07-23T18:10:29.035903+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_fang_blade": {
    "id": "shadowfell_onyx_fang_blade",
    "name": "Onyx Fang Blade",
    "description": "The Onyx Fang Blade is a cursed dagger forged from the teeth of an ancient vampire king who once ruled the Shadowfell. Its blackened metal gleams with necrotic energy, and its blade shimmers with a chilling light that seems to pulse with malevolent intent. This weapon strikes with chilling precision, dealing +25% damage against undead foes and offering a +15% bonus to critical hit chance. With each strike, there's a 10% chance for the target to be struck by Cursed Touch: an additional 20% damage and temporary paralysis lasting two turns.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+25% damage vs undead",
      "15% crit chance"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Cursed Touch",
        "rules": "When the Onyx Fang Blade strikes an enemy, there is a 10% chance that Cursed Touch occurs. This causes 20% additional damage and imposes temporary paralysis on the target for two turns. The effect has a maximum of one occurrence per enemy per day."
      },
      {
        "title": "Undead Special",
        "rules": "The dagger deals +25% extra damage against undead foes, but its use is limited to once per short or long rest."
      }
    ],
    "levelRequirementReason": "This cursed weapon requires a character of at least level 6 due to the inherent danger and power it wields.",
    "vendorReason": "The Shadowfell is home to many dark artifacts, and this dagger is no exception. The vendors there are well-acquainted with its malevolent nature.",
    "shippingDetail": "Due to the cursed nature of the blade, it must be shipped discreetly by Shy Guy Smugglers, ensuring it arrives safely and undetected.",
    "usage": {
      "activation": "Drawn as an action or used in combat as a bonus action",
      "duration": "Instantaneous effect; lasts until expended",
      "endsWhen": "The dagger's charge is exhausted after three uses per day",
      "charges": "3 charges, recharged at dawn"
    },
    "priceReason": "This weapon's rarity and the danger it poses to its wielder justify its price of 1000 XP.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T18:10:37.152052+00:00",
    "aiReviewedAt": "2026-07-23T18:10:37.152052+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_fist_ring": {
    "id": "shadowfell_onyx_fist_ring",
    "name": "Onyx Fist Ring",
    "description": "The Onyx Fist Ring, forged from the bones of an ancient Onyx Hand lieutenant, is a cursed relic that warps the wearer's very essence into a shadowy phantom. Summoned by a mere thought, this spectral doppelgänger strikes with unparalleled precision, targeting the enemy’s weakest point with devastating force. Each invocation drains your stamina, leaving you vulnerable, but the ring grants +10% armor penetration, ensuring your attacks find their mark more often.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Summons Shadow Phantom",
      "+10% Armor Penetration"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Summon Shadow Phantom",
        "rules": "As a bonus action, you can summon a spectral version of yourself. The phantom strikes at the weakest point of an enemy within 30 feet, dealing 2d6 + your Dexterity modifier force damage and applying disadvantage to their next attack roll. This effect lasts for 4 seconds or until the phantom is destroyed by taking damage."
      },
      {
        "title": "+10% Armor Penetration",
        "rules": "While wearing this ring, you gain a +10 bonus on your armor class penetration checks. This benefit persists as long as you wear the ring and does not stack with other bonuses to armor class penetration."
      }
    ],
    "levelRequirementReason": "The Onyx Fist Ring's dark magic demands a certain level of expertise to wield without risk.",
    "vendorReason": "Only the shadowy markets of Shadowfell can offer such a cursed and powerful relic.",
    "shippingDetail": "The ring is delivered in a sealed, cursed box that must be opened under moonlight; failure to do so results in a -2 penalty on the next saving throw against any curse effect.",
    "usage": {
      "activation": "Bonus action for summoning and passive while worn",
      "duration": "4 seconds or until destroyed by damage",
      "endsWhen": "The phantom is destroyed by taking damage, or after 4 seconds",
      "charges": "Unlimited; the ring recharges each long rest"
    },
    "priceReason": "Balanced as a rare item, this cursed ring provides significant combat utility without overpowered effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:10:41.193685+00:00",
    "aiReviewedAt": "2026-07-23T18:10:41.193685+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_gaze_lens": {
    "id": "shadowfell_onyx_gaze_lens",
    "name": "Onyx Gaze Lens",
    "description": "The Onyx Gaze Lens, forged from the eye of a fallen Onyx Hand elder, is an arcane lens that shimmers with the spectral light of the Shadowfell. When worn, it grants the wearer the uncanny ability to see through shadows and perceive hidden paths, invaluable for navigating the labyrinthine corridors of the Shadowfell's deepest mazes. The lens subtly glows faintly in darkness, providing a constant reminder of its wearer's connection to the realm of shadow and spirit.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Shadow Vision",
      "Invisible Detection"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shadow Vision",
        "rules": "As an action, you can activate the lens to grant yourself advantage on Perception checks to detect hidden or invisible creatures within 30 feet for 1 minute. The effect ends if you are incapacitated."
      },
      {
        "title": "Invisible Detection",
        "rules": "You gain a +2 bonus to all Dexterity (Stealth) checks made to remain unseen by creatures that have advantage on their perception of shadows or darkness within 30 feet. This benefit lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "The Onyx Gaze Lens is crafted for beginners, granting them a crucial tool to navigate dangerous Shadowfell realms.",
    "vendorReason": "Shadowfell merchants specialize in crafting and selling items that are specifically designed for the harsh realities of their realm.",
    "shippingDetail": "The lenses are delivered via a fleet of Lakitu drones, ensuring they reach their destination safely within days.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "Incapacitation or end of concentration",
      "charges": "Unlimited"
    },
    "priceReason": "The Onyx Gaze Lens is priced moderately to reflect its utility and the complexity involved in crafting such a lens.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:11:14.209110+00:00",
    "aiReviewedAt": "2026-07-23T18:11:14.209110+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_hand_glove": {
    "id": "shadowfell_onyx_hand_glove",
    "name": "Onyx Hand Glove",
    "description": "A gauntlet forged from the shadowed bones of a fallen vampire, it pulses with cold energy. Grants the wearer the ability to absorb ambient darkness and convert it into temporary strength. Perfect for stealth and survival in the Shadowfell’s gloom.",
    "category": "equipment",
    "price": 3000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+25% damage in dark environments",
      "Absorbs 10% of ambient darkness for 30 seconds, boosting movement speed",
      "Grants immunity to light-based attacks"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "shadowfell_onyx_hand_sword_of_silence": {
    "id": "shadowfell_onyx_hand_sword_of_silence",
    "name": "Sword of Silence",
    "description": "The Sword of Silence is a rare blade forged from the heart of an Onyx Hand warlord. Its hilt glows with an eerie, blue light that suppresses all sound and magic around its wielder. When drawn in combat, it grants the assassin deadly silence, ensuring no sound or echo betrays their position on the battlefield. The sword also enhances critical strikes against incorporeal foes by 20%, making it a favored weapon for stealthy assassins and dark priests alike.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Silent Strikes",
      "Enhanced Critical Strike"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Silent Strikes",
        "rules": "When the Sword of Silence is drawn, all sound and echoes are suppressed within a 30-foot radius for 1 minute. This effect ends when the wielder sheathes the sword or if they take a hostile action."
      },
      {
        "title": "Enhanced Critical Strike",
        "rules": "For 1 hour after drawing the Sword of Silence, the wielder gains advantage on attack rolls against incorporeal creatures and increases their critical strike chance by +20%. This effect ends when the sword is sheathed or if the wielder takes an action that requires a Dexterity saving throw."
      }
    ],
    "levelRequirementReason": "The sword's forging involves complex rituals and materials, making it suitable for characters at least 5th level.",
    "vendorReason": "The Shadowfell is home to many Onyx Hand warlords, making the Shadowfell a reliable source for rare artifacts from their domains.",
    "shippingDetail": "The sword is couriered with utmost secrecy and arrives in a locked box. Delivery can take up to one week due to its fragile nature.",
    "usage": {
      "activation": "Drawing the sword",
      "duration": "Until sheathed or the wielder takes an action that requires a Dexterity saving throw",
      "endsWhen": "Sheathing the sword, taking a hostile action, or completing an action requiring a Dexterity saving throw",
      "charges": "Unlimited"
    },
    "priceReason": "The sword's forging involves unique materials and complex rituals, justifying its fair price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:10:52.651568+00:00",
    "aiReviewedAt": "2026-07-23T18:10:52.651568+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_hands_spectral_glove": {
    "id": "shadowfell_onyx_hands_spectral_glove",
    "name": "Onyx Hands Spectral Glove",
    "description": "The Onyx Hands Spectral Glove is a gauntlet forged from the fractured mirrors of the Shadowfell, its surface etched with arcane runes that shimmer with an ethereal light. When activated, it grants the wearer near-perfect invisibility for 30 seconds and emits a chilling aura that repels lesser undead creatures within 10 feet. Crafted by the enigmatic shadow mages of the Shadowfell, this glove is perfect for spectral couriers and stealthy assassins.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Repel Undead"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Invisibility (Activation: Bonus Action)",
        "rules": "The wearer becomes invisible for 30 seconds. This effect ends if the wearer attacks, casts a spell, or moves more than 10 feet. The wearer can use this ability once per short rest."
      },
      {
        "title": "Repel Undead (Activation: Instantaneous)",
        "rules": "The glove emits an aura that repels undead creatures within 10 feet for the duration of one minute. This effect ends if the wearer attacks, casts a spell, or moves more than 5 feet away from any undead creature."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to channel the Shadowfell's power effectively.",
    "vendorReason": "The shadow mages of the Shadowfell craft these gloves to aid in their own missions and those who seek similar abilities.",
    "shippingDetail": "Ships via spectral mail, with a delivery time of one week.",
    "usage": {
      "activation": "Bonus Action for Invisibility; Instantaneous for Repel Undead",
      "duration": "30 seconds for Invisibility; 1 minute for Repel Undead",
      "endsWhen": "Attacks, spells cast, or excessive movement",
      "charges": "Once per short rest"
    },
    "priceReason": "Balanced price considering the item's Shadowfell origin and unique abilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:10:55.908941+00:00",
    "aiReviewedAt": "2026-07-23T18:10:55.908941+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_haunt": {
    "id": "shadowfell_onyx_haunt",
    "name": "Onyx Haunt of the Whispering Void",
    "description": "The Onyx Haunt of the Whispering Void hums with a sinister whisper, its surface etched with runes that glow faintly in the dark. When drawn and struck, it calls forth spectral echoes from the void, targeting foes unseen by the eye but felt in the heart. Its blade is said to have been forged from the bones of ancient shadows, making it a deadly companion for those who walk in darkness or seek to deceive their enemies.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Spectral Echoes",
      "+15% Damage to Shadow-Based Attacks"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Spectral Echoes",
        "rules": "When you hit an enemy with a melee attack while holding the Onyx Haunt, it summons spectral echoes that attack enemies within 5 feet of them from behind. This effect has a 30% chance to activate on each strike. The echoes last for 1 minute or until they deal damage. Targets have disadvantage on saving throws against the echo's attacks."
      },
      {
        "title": "+15% Damage",
        "rules": "The Onyx Haunt deals an additional +15% damage when used in conjunction with shadow-based spells or abilities, effectively multiplying its effectiveness by 1.15 times the base damage."
      }
    ],
    "levelRequirementReason": "The dagger's dark essence requires a user who can navigate the shadows and wield power without fear.",
    "vendorReason": "Only those who delve into the shadowy realms of the Shadowfell would know how to properly harness the Onyx Haunt’s malevolent magic.",
    "shippingDetail": "The dagger arrives wrapped in a veil of darkness, ensuring that only the recipient can see it clearly upon opening its delivery.",
    "usage": {
      "activation": "Melee attack",
      "duration": "Instantaneous effect; lasts until enemies are damaged by echoes or until the target is hit again",
      "endsWhen": "The echo's attacks deal damage, the target is hit with another melee attack while holding it, or its uses are exhausted (2 charges)",
      "charges": "2"
    },
    "priceReason": "Balanced at a price of 1000 XP, reflecting both its rarity and the dark magic required to wield it.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:11:52.628129+00:00",
    "aiReviewedAt": "2026-07-23T18:11:52.628129+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_haunt_spear": {
    "id": "shadowfell_onyx_haunt_spear",
    "name": "Onyx Haunt Spear",
    "description": "Forged in the heart of the Shadowfell, the Onyx Haunt Spear is a spear that pierces not just flesh but the very fabric between life and death itself. Its bone haft crackles with violet energy as it draws upon the essence of forgotten vampire lords, delivering devastating blows that shatter enemies' wills and leave them staggering in fear. Infusing foes with a paralyzing dread, it ensures that even the strongest warriors falter for a heartbeat before they fall.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Soul Shiver",
      "Veil Piercer"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Veil Piercer",
        "rules": "When the Onyx Haunt Spear strikes an undead target, it causes them to stagger and lose 50% of their movement for 2 seconds. This effect has a range of 30 feet and does not require a saving throw."
      },
      {
        "title": "Soul Shiver",
        "rules": "Upon hitting an enemy, the Onyx Haunt Spear instills them with a 'Fear' status, preventing them from attacking for 1 second. This effect can be triggered once per turn and does not require any action to activate."
      }
    ],
    "levelRequirementReason": "The Onyx Haunt Spear requires a level 7 character to wield due to its dark magic and the intense focus needed to channel its power.",
    "vendorReason": "The Shadowfell's native creatures are well-versed in the arts of death and undeath, making it only fitting that they sell this relic of ancient vampire lords.",
    "shippingDetail": "The Void Drifter Relay ensures safe delivery through shadowy realms, though the package may arrive with a delay due to the unpredictable nature of the Shadowfell.",
    "usage": {
      "activation": "Instantaneous on strike or attack",
      "duration": "Instantaneous; lasts until the end of the target's next turn for 'Soul Shiver'",
      "endsWhen": "The effect ends when the target successfully saves against 'Veil Piercer' or 'Soul Shiver', or upon a miss.",
      "charges": "Unlimited, recharges on long rest"
    },
    "priceReason": "The Onyx Haunt Spear's price reflects its rare materials and the arcane energies it harnesses from the Shadowfell.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T18:11:22.784013+00:00",
    "aiReviewedAt": "2026-07-23T18:11:22.784013+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_heart": {
    "id": "shadowfell_onyx_heart",
    "name": "Onyx Heart of the Fallen Sovereign",
    "description": "The Onyx Heart of the Fallen Sovereign is a relic carved from the shattered chest of an ancient vampire lord, now forged into a heart-shaped pendant. Its dark luster exudes a malevolent aura, and when worn, it grants the wearer immunity to fear effects, allowing them to face even the most terrifying foes unshaken. The pendant also enhances one's dark aura, increasing its radius by 50%, making allies within range feel an oppressive sense of dread.",
    "category": "equipment",
    "price": 1000,
    "icon": "💀",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Immunity to Fear",
      "Increased Dark Aura Radius"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Immunity to Fear",
        "rules": "The wearer gains immunity to all fear effects and has advantage on saving throws against such effects. This effect lasts until the end of their next turn."
      },
      {
        "title": "Increased Dark Aura Radius",
        "rules": "When worn, the Onyx Heart increases the radius of the wearer's dark aura by 50%, affecting all creatures within a 10-foot radius. The increased radius ends when the wearer stops wearing the pendant."
      }
    ],
    "levelRequirementReason": "The relic’s malevolent energy requires a certain level of magical prowess to wield effectively.",
    "vendorReason": "Shadowfell traders specialize in ancient and dark relics, making this heart an appropriate offering.",
    "shippingDetail": "Due to its cursed nature, the pendant must be delivered by Shy Guy Smugglers via a shadowy courier who ensures discreet delivery.",
    "usage": {
      "activation": "Passive effect when worn",
      "duration": "Until removed or end of next turn",
      "endsWhen": "Removing the heart from wear or at the end of the wearer’s next turn",
      "charges": "Unlimited, recharges on a long rest"
    },
    "priceReason": "The relic's cursed and powerful nature justifies its moderate price point.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:11:28.168629+00:00",
    "aiReviewedAt": "2026-07-23T18:11:28.168629+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_shroud": {
    "id": "shadowfell_onyx_shroud",
    "name": "Onyx Shroud of the Silent Veil",
    "description": "The Onyx Shroud of the Silent Veil is a cloak woven from the very essence of the Shadowfell, its dark fabric shimmering with an otherworldly glow. This relic bears the mark of the ancient Onyx Hand and whispers secrets to those attuned to its power. It can absorb ambient darkness, enhancing your stealth in night combat by 20%, and emit haunting whispers that have a 20% chance to paralyze foes momentarily.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stealth Mastery",
      "Dark Absorption"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth Mastery",
        "rules": "When you wear the Onyx Shroud, you gain advantage on Dexterity (Stealth) checks for 1 hour. This effect can be activated as a bonus action."
      },
      {
        "title": "Dark Absorption",
        "rules": "The shroud absorbs ambient darkness within a 30-foot radius for 1 minute, enhancing your vision in low-light conditions and granting you advantage on attack rolls against creatures within this area. This effect can be activated as an action."
      }
    ],
    "levelRequirementReason": "This shroud is crafted to be accessible to adventurers of all levels who wish to harness the power of the Shadowfell.",
    "vendorReason": "The Shadowfell is home to the Onyx Hand, and they are known for crafting items that channel its dark magic.",
    "shippingDetail": "Delivered via shadowy spirits who ensure the cloak arrives in perfect condition.",
    "usage": {
      "activation": "Bonus action (Stealth Mastery), Action (Dark Absorption)",
      "duration": "1 hour (Stealth Mastery), 1 minute (Dark Absorption)",
      "endsWhen": "Effect duration ends naturally, or when you remove the cloak",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects its rarity and the complexity of materials used in its crafting.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:11:36.960496+00:00",
    "aiReviewedAt": "2026-07-23T18:11:36.960496+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_soul_binder": {
    "id": "shadowfell_onyx_soul_binder",
    "name": "Onyx Soul Binder",
    "description": "The Onyx Soul Binder is a rare artifact forged from shadowfell onyx and imbued with ancient vampire lore. When activated, it binds a portion of a vampire's soul to its wielder, granting temporary control over spectral shadows that can be commanded in combat. Summoned as an echo of the user’s past self, this spectral aid fights alongside the wielder for 10 seconds before fading back into the shadows.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Spectral Echo Assist",
      "Shadow Control"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Spectral Echo Assist",
        "rules": "When activated as a bonus action, the Onyx Soul Binder summons a spectral echo of the user’s past self. The echo fights alongside the wielder for 10 seconds, providing battlefield assistance but cannot directly attack. This effect ends if the user is incapacitated or the echo takes any damage."
      },
      {
        "title": "Shadow Control",
        "rules": "+15% damage to shadow-based attacks and grants temporary invisibility for 6 seconds after casting. The user must have a +2 bonus to Dexterity (Stealth) checks while this effect is active. This effect ends if the user is hit by an attack or the duration expires."
      }
    ],
    "levelRequirementReason": "This artifact requires significant magical prowess and control over shadow magic, making it suitable for those of at least 5th level.",
    "vendorReason": "The Shadowfell is the realm where this artifact's materials are sourced, and only its denizens truly understand its power.",
    "shippingDetail": "Due to the fragile nature of spectral energy, Pipe Express ensures safe delivery by using specialized shadow-sealed containers.",
    "usage": {
      "activation": "Bonus action",
      "duration": "10 seconds for Spectral Echo Assist; 6 seconds of invisibility after casting",
      "endsWhen": "User is incapacitated or takes damage; duration expires naturally",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the artifact's rarity and the significant magical energy required to forge it.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:11:45.490992+00:00",
    "aiReviewedAt": "2026-07-23T18:11:45.490992+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_soul_bite": {
    "id": "shadowfell_onyx_soul_bite",
    "name": "Onyx Soul Bite",
    "description": "Forged in the shadowy depths of the Shadowfell, Onyx Soul Bite is a cursed dagger that gleams with an eerie violet light. Its blade saps vitality from foes, leaving them weakened and vulnerable to further attack. The wielder gains temporary vampiric regeneration, drawing strength from the very essence of their victims. This dagger is perfect for those who seek power through darkness, but beware—its curse comes at a price.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+50% damage against undead",
      "Regenerates 10 HP per 3 seconds while active"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Undead Damage Boost",
        "rules": "When you deal damage to an undead creature, the damage is increased by 50%. This effect lasts until the start of your next turn."
      },
      {
        "title": "Vampiric Regeneration",
        "rules": "While Onyx Soul Bite is active, you regain 10 hit points at the start of each of your turns. This effect ends if you are killed or if you sheath the dagger."
      }
    ],
    "levelRequirementReason": "The intricate forging and dark magic required to create Onyx Soul Bite demand a high level of expertise.",
    "vendorReason": "Only vendors familiar with the Shadowfell’s darkest secrets can offer such powerful yet cursed artifacts.",
    "shippingDetail": "Delivered by spectral couriers, this item may arrive in pieces and require reassembly upon arrival.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Until the start of your next turn",
      "endsWhen": "You are killed or sheath Onyx Soul Bite",
      "charges": "Unlimited"
    },
    "priceReason": "This dagger's rarity and the dark magic required to imbue it with its unique abilities justify its moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:12:33.525006+00:00",
    "aiReviewedAt": "2026-07-23T18:12:33.525006+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_soul_cage": {
    "id": "shadowfell_onyx_soul_cage",
    "name": "Onyx Soul Cage",
    "description": "The Onyx Soul Cage is a cursed prison made from the bleached bones of fallen vampires, forged in the Shadowfell's deepest forges. Its surface glows faintly with an eerie luminescence, and when worn, it traps a soul within its cold embrace, granting the wearer dominion over the shadows and instilling fear into all who dare approach. The trapped soul whispers secrets of the Shadowfell’s most hidden realms, offering dark counsel to those willing to pay the price of 10% of their health.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Shadow Control",
      "Fear Aura"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Shadow Control",
        "rules": "The wearer can command shadows within a 30-foot radius, manipulating them to create minor illusions or to obscure vision. This effect lasts for 1 minute and requires the use of an action. The wearer must have at least 50 hit points remaining; failing this condition causes the item to shatter."
      },
      {
        "title": "Fear Aura",
        "rules": "When worn, the Onyx Soul Cage emits a fear aura that covers all creatures within its 30-foot radius who can see it. Creatures must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute and have disadvantage on attack rolls and ability checks while in range."
      }
    ],
    "levelRequirementReason": "The item's dark power demands a certain level of mastery to wield without succumbing to its curse.",
    "vendorReason": "The Shadowfell knows the darkest secrets, and this item is no exception; it's only sold by those who understand its nature.",
    "shippingDetail": "The item must be shipped via a Void Drifter Relay to ensure safe delivery through the Shadowfell’s treacherous planes.",
    "usage": {
      "activation": "Action or Reaction (to cast Shadow Control)",
      "duration": "1 minute for Shadow Control; Fear Aura lasts until dispelled",
      "endsWhen": "The wearer's hit points drop below 50, or the wearer is destroyed or removed from their body",
      "charges": "Recharges after 24 hours"
    },
    "priceReason": "This item represents a significant investment in power and risk, balancing its rare materials with its cursed nature.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:12:37.455040+00:00",
    "aiReviewedAt": "2026-07-23T18:12:37.455040+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_soul_core": {
    "id": "shadowfell_onyx_soul_core",
    "name": "Onyx Soul Core",
    "description": "The Onyx Soul Core is a pulsating black gem that draws its power from the ancient vampires of the Shadowfell. It channels dark magic with chilling precision, but at a cost—it siphons vitality and leaves the wielder drained. Only the most resilient Onyx Hand can bear this weight. When activated, it imbues dark spells with +30% damage, but also reduces the wielder’s HP regeneration by -10%. Additionally, it grants a +50% chance for Shadow Siphon on enemy hits.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% Dark Spell Damage",
      "-10% HP Regeneration"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Shadow Siphon",
        "rules": "On a successful hit against an enemy, the wielder has a +50% chance to deal additional dark damage equal to their Charisma modifier. This effect ends on the start of the next round."
      },
      {
        "title": "Vitality Drain",
        "rules": "While the Onyx Soul Core is active, the wielder’s HP regeneration is reduced by 10%. This reduction persists as long as the core remains activated."
      }
    ],
    "levelRequirementReason": "The gem's dark energies are too potent for novices; only experienced adventurers can safely wield it.",
    "vendorReason": "The Shadowfell is the source of this gem, and its vendors hold exclusive rights to sell such powerful relics.",
    "shippingDetail": "Due to the gem's fragile nature, it must be shipped via Pipe Express’s secure shadow courier service.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "At the start of your next turn after ending its duration or if you drop or destroy the core.",
      "charges": "Unlimited, but requires a short rest to regain any expended uses."
    },
    "priceReason": "The gem's rarity and the dark magic it channels make it an expensive yet valuable asset for those who can harness its power.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:12:01.414849+00:00",
    "aiReviewedAt": "2026-07-23T18:12:01.414849+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_soul_satchel": {
    "id": "shadowfell_onyx_soul_satchel",
    "name": "Onyx Soul Satchel",
    "description": "The Onyx Soul Satchel, a pouch woven from the essence of fallen vampires, glows coldly and absorbs negative energy, converting it into temporary hit points. Crafted in the shadowy depths where feywild and dark realms collide, this artifact is a relic designed to endure and repel the haunting echoes of the dead. When opened, it pulses with an eerie blue light, drawing upon the very essence of death itself to protect its bearer from harm.",
    "price": 1000,
    "icon": "🧪",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Absorbs Negative Energy",
      "Temporary Hit Point Boost"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Absorbs Negative Energy",
        "rules": "When opened by a user of at least level 1, the Onyx Soul Satchel absorbs up to 500 negative energy points. For every 500 absorbed, the user regains 100 temporary hit points that last for 1 hour."
      },
      {
        "title": "Evasion Boost",
        "rules": "For the duration of its effect, the user gains a +10% chance to evade attacks and spells. This benefit lasts for two turns upon activation."
      }
    ],
    "levelRequirementReason": "The Onyx Soul Satchel is designed with basic necromantic properties that are accessible to low-level characters.",
    "vendorReason": "Shadowfell, a vendor specializing in dark and arcane relics, naturally stocks this item, which aligns perfectly with its shadowy theme.",
    "shippingDetail": "Ships via the Void Drifter Relay; delivery time is reduced by one day due to the artifact's delicate nature.",
    "usage": {
      "activation": "Uses an action to open and activate.",
      "duration": "1 hour or until negative energy is depleted.",
      "endsWhen": "The effect ends when either the negative energy is fully absorbed or after its duration expires.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Onyx Soul Satchel's price reflects its unique necromantic properties and the materials used in its crafting, making it a valuable yet moderately priced item for those who need to survive dark environments.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T18:12:21.927380+00:00",
    "aiReviewedAt": "2026-07-23T18:12:21.927380+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_soul_shard": {
    "id": "shadowfell_onyx_soul_shard",
    "name": "Onyx Soul Shard",
    "description": "The Onyx Soul Shard is a jagged fragment of shadow and light, a relic from the twilight realm. When donned, it whispers secrets of the dark to its bearer, enhancing stealth in the shadows and granting a spectral step that allows for swift evasion. Crafted by ancient vampire artisans, this shard hums with forbidden power, making the wearer nearly invisible to all but those attuned to the undead’s touch.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% Stealth in Shadowy Environments",
      "Spectral Step"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Phantom Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Enhanced Stealth",
        "rules": "While wearing this shard, you gain a +30 bonus to Dexterity (Stealth) checks when in shadowy environments. This effect lasts until the start of your next turn after using it."
      },
      {
        "title": "Spectral Step",
        "rules": "You can take a bonus action on each of your turns to move up to half your speed without provoking opportunity attacks, as if under the effects of the Shadow Step feature. This ability lasts for 1 minute or until you use it again."
      }
    ],
    "levelRequirementReason": "This shard is too powerful for lower-level characters and requires a certain degree of combat experience to wield effectively.",
    "vendorReason": "The shadowy realm of Shadowfell is the birthplace of this relic, and its artisans are the only ones who can create such potent items.",
    "shippingDetail": "Delivered by spectral means, arriving at night with a slight delay due to the shifting nature of the shadowy realm.",
    "usage": {
      "activation": "Passive effect when equipped; Spectral Step requires a bonus action.",
      "duration": "Spectral Step lasts for 1 minute or until you use it again.",
      "endsWhen": "Spectral Step ends if you lose concentration (as if by failing a save) or finish a short or long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The shard’s rarity and unique abilities justify its price, making it a valuable yet balanced addition to any adventurer's arsenal.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:12:15.554860+00:00",
    "aiReviewedAt": "2026-07-23T18:12:15.554860+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_soul_spear": {
    "id": "shadowfell_onyx_soul_spear",
    "name": "Onyx Soul Spear",
    "description": "The Onyx Soul Spear, forged in the heart of the Shadowfell from a vampire lord's cursed essence, pierces through shadows with ethereal grace. Its blade shimmers with spectral light, and its haft is etched with ancient runes that whisper of forgotten battles. Wielded by those who dare to walk the dark paths, it grants temporary invisibility after each strike, allowing for stealthy ambushes in the deepest corners of shadow. The spear's touch leaves a lingering echo, capable of shattering foes' shadows and dealing extra damage to undead.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Deals extra damage to undead foes",
      "Shatters target’s shadow form"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Echo Strike",
        "rules": "As a bonus action, after attacking an undead foe with the Onyx Soul Spear, you can deal an additional 50% of its damage to it. This ability also shatters the target's shadow form for 1 round, preventing it from using its shadowy abilities."
      },
      {
        "title": "Temporary Invisibility",
        "rules": "After successfully striking with the Onyx Soul Spear, you become temporarily invisible for 2 seconds. You can use this effect once per short or long rest."
      }
    ],
    "levelRequirementReason": "Requires at least level 5 to wield effectively in the Shadowfell’s treacherous environments.",
    "vendorReason": "The Shadowfell is known for its dark artifacts, and the Onyx Soul Spear perfectly fits their inventory of cursed yet powerful relics.",
    "shippingDetail": "Ships via the Void Drifter Relay; delivery may take up to a week due to the instability of the Shadowfell’s planes.",
    "usage": {
      "activation": "Bonus action (Echo Strike) or as part of the attack action (Temporary Invisibility)",
      "duration": "Instantaneous for Echo Strike, 2 seconds for Temporary Invisibility",
      "endsWhen": "Ends when used up or at the end of your next turn",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to reflect its powerful abilities and rarity in the Shadowfell.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T18:12:45.711885+00:00",
    "aiReviewedAt": "2026-07-23T18:12:45.711885+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_soul_talisman": {
    "id": "shadowfell_onyx_soul_talisman",
    "name": "Onyx Soul Talisman",
    "description": "The Onyx Soul Talisman, a cursed amulet forged from the essence of a slain vampire elder, hangs heavy on your neck. Its black surface gleams with an otherworldly luster, and when worn, it draws you into shadowed dreams where whispers of the dead echo truths you never knew. The talisman grants temporary resistance to psychic attacks, making you more resilient against the mind-warping powers of your foes. It also subtly enhances your senses, increasing your chance to detect hidden vampires by 10%. In shadowy terrain, you can recover a portion of your health, restoring 10% of your hit points from the darkness around you.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% resistance to psychic damage",
      "Enhanced detection of hidden vampires"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Psychic Resistance",
        "rules": "The wearer gains +20% resistance to psychic damage. This effect is active while the amulet is worn and does not require any action."
      },
      {
        "title": "Enhanced Detection",
        "rules": "While wearing the Onyx Soul Talisman, you have a +10% chance of detecting hidden vampires. This benefit persists for as long as the amulet remains on your person. No special activation is required."
      }
    ],
    "levelRequirementReason": "The cursed essence of the vampire elder requires the wearer to be at least level 5 to withstand its malevolent influence.",
    "vendorReason": "Shadowfell vendors are known for their dark artifacts, and this talisman is a prime example of their wares.",
    "shippingDetail": "The amulet arrives wrapped in shadowed riddles, requiring a successful DC 15 Intelligence (Investigation) check to decipher the delivery instructions.",
    "usage": {
      "activation": "Passive effect while worn",
      "duration": "Permanent until removed or destroyed",
      "endsWhen": "The amulet is removed from your person or destroyed by a creature with a Wisdom save DC of 15",
      "charges": "Unlimited"
    },
    "priceReason": "This cursed yet powerful talisman commands a price due to its unique abilities and the dark magic it encapsulates.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:13:34.627874+00:00",
    "aiReviewedAt": "2026-07-23T18:13:34.627874+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_soul_torch": {
    "id": "shadowfell_onyx_soul_torch",
    "name": "Onyx Soul Torch",
    "description": "The Onyx Soul Torch emits a flickering black light that pierces the deepest shadows, revealing hidden paths and exposing enemy weaknesses. Held close to an ally wearing the Onyx Hand, it whispers their thoughts with a spectral hum, aiding in stealthy ambushes. This torch is forged from the very essence of the Shadowfell’s dark heart, its coal-black flames alive with the spirits of those who have perished within its bounds.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals hidden enemy weaknesses on touch",
      "Whispers nearest Onyx Hand’s thoughts"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Expose Weaknesses",
        "rules": "When the torch is held and touched to an enemy, it reveals a hidden weakness. The target must succeed on a DC 15 Dexterity saving throw or take 1d6 psychic damage."
      },
      {
        "title": "Spectral Whisper",
        "rules": "When the Onyx Soul Torch whispers the thoughts of the nearest ally wearing the Onyx Hand, it provides a +2 bonus to Insight checks made by that ally until the start of their next turn. The torch can only whisper once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Onyx Soul Torch's powerful abilities require a minimum level to channel its dark magic effectively.",
    "vendorReason": "Shadowfell vendors specialize in arcane and dark artifacts, making the Onyx Soul Torch an appropriate addition to their inventory.",
    "shippingDetail": "The torch is carefully packed with protective charms to prevent accidental activation during shipment.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Instantaneous, once per short or long rest",
      "endsWhen": "The torch's use ends when the target makes a successful saving throw or after one minute has passed",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced against other rare items, this torch offers potent utility but requires careful handling to avoid its dark magic.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:13:17.130741+00:00",
    "aiReviewedAt": "2026-07-23T18:13:17.130741+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_soul_ward": {
    "id": "shadowfell_onyx_soul_ward",
    "name": "Onyx Soul Ward",
    "description": "The Onyx Soul Ward is a cursed amulet forged from the deepest Shadowfell abyss, its dark luster pulsing like the heartbeat of the Onyx Hand itself. This amulet repels hostile entities and amplifies the wearer's vampiric aura, siphoning their life force into your own. The amulet's dark glow can be felt as a cold shiver among those it touches, causing them to recoil in fear when struck by melee attacks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Vampiric Aura",
      "Hostile Repellent"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Vampiric Aura",
        "rules": "When the wearer makes a melee attack, they gain temporary hit points equal to their Strength modifier (minimum +1) plus half of their level. This effect lasts for one minute and can be reactivated once per short or long rest."
      },
      {
        "title": "Hostile Repellent",
        "rules": "The wearer gains a +2 bonus to all saving throws against charm, fear, and poison effects. Additionally, hostile creatures within 30 feet of the wearer must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute."
      }
    ],
    "levelRequirementReason": "The amulet's dark magic is potent enough to require a minimum character level of 5 to wield.",
    "vendorReason": "Shadowfell merchants are well-acquainted with the cursed artifacts that originate from their shadowy domain, making them reliable vendors for such items.",
    "shippingDetail": "The amulet is carefully packaged and delivered by Lakitu Drones to ensure it arrives in pristine condition, though its power may fluctuate during transit.",
    "usage": {
      "activation": "Passive effect.",
      "duration": "Permanent until expended or removed; recharges on a short or long rest.",
      "endsWhen": "The wearer removes the amulet, or it is destroyed by magical means.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Onyx Soul Ward's rarity and its ability to amplify the wearer’s vampiric aura, combined with its cursed nature, justify a price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:13:07.142589+00:00",
    "aiReviewedAt": "2026-07-23T18:13:07.142589+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_tongue": {
    "id": "shadowfell_onyx_tongue",
    "name": "The Tongue of the Silent Veil",
    "description": "The Tongue of the Silent Veil is a cursed, gnarled tongue made from onyx that whispers secrets in the forgotten language of the Shadowfell. It allows its bearer to hear the voices of the dead and speak truths only known by the damned. The artifact’s power lies not just in its whispering but also in its ability to grant insight into one's own past, temporarily recalling lost memories for a brief moment.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Whispering Tongue",
      "Memory Echo"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Whispering Tongue",
        "rules": "Activates as a bonus action. The user can speak in the Shadowfell language for up to 3 rounds, during which they gain advantage on persuasion checks against undead or non-human entities."
      },
      {
        "title": "Memory Echo",
        "rules": "Activates as a standard action. Temporarily recalls lost memories from the user’s past for 1 round. This effect grants the user +2 to Intelligence (Insight) checks related to recalling past events, but it can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "The item's dark magic and potent abilities necessitate a higher level character for safe handling.",
    "vendorReason": "Shadowfell, the vendor of arcane and cursed items, is well-known for their connection to Shadowfell magic, making them the only source for this artifact.",
    "shippingDetail": "Due to its cursed nature, The Tongue of the Silent Veil requires special handling by Koopa Postal. Delivery takes an additional day beyond standard service and is subject to a 25% surcharge due to increased risk.",
    "usage": {
      "activation": "Bonus action for Whispering Tongue; Standard action for Memory Echo",
      "duration": "Up to 3 rounds for Whispering Tongue; 1 round for Memory Echo",
      "endsWhen": "The effect ends when the duration expires or the user is incapacitated.",
      "charges": "Unlimited, but only one use of Memory Echo per long rest"
    },
    "priceReason": "Considering its potent abilities and cursed nature, this item has been priced at a fair value that reflects its rarity and utility.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:13:15.434297+00:00",
    "aiReviewedAt": "2026-07-23T18:13:15.434297+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_onyx_vial": {
    "id": "shadowfell_onyx_vial",
    "name": "Onyx Vial of Echoing Death",
    "description": "The Onyx Vial of Echoing Death is a vial filled with an eerie liquid shadow. When consumed, it unleashes a devastating burst of dark energy that triples in damage to the target, but at the cost of 20% of your health. The last scream of the victim echoes into the void for two seconds, dealing additional damage to nearby foes. This vial is crafted from the essence of the Shadowfell and is said to bring with it a whisper of death’s presence.",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Tripling Damage",
      "Echo Scream"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Tripling Damage",
        "rules": "When consumed, this vial deals 3 times its listed damage to the target. The user must spend 20% of their maximum hit points as a cost."
      },
      {
        "title": "Echo Scream",
        "rules": "For two seconds after use, any creature within 15 feet takes 1d6 necrotic damage per second. This effect has a range of 15 feet and ends when the vial is consumed or if no creatures are within the area."
      }
    ],
    "levelRequirementReason": "This item requires at least level 3 to use due to its potent necrotic damage and health cost.",
    "vendorReason": "Shadowfell vendors specialize in rare and dangerous items from the Shadowfell plane, making this vial a natural fit for their inventory.",
    "shippingDetail": "Ships via Boo Spectral Mail, known for its eerie and unpredictable deliveries within the Shadowfell region.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "Instantaneous effect; ends when consumed or if no creatures are within range of the Echo Scream",
      "endsWhen": "Effect ends when the vial is consumed or if there are no creatures within the 15-foot radius for the Echo Scream.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Onyx Vial of Echoing Death is priced at 1000 XP due to its potent necrotic damage and unique effect, making it a rare and valuable item.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-23T18:13:24.636805+00:00",
    "aiReviewedAt": "2026-07-23T18:13:24.636805+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_rogueport_item_name_here": {
    "id": "shadowfell_rogueport_item_name_here",
    "name": "Rakasha Courier Pack",
    "description": "The Rakasha Courier Pack is a rugged, weathered satchel crafted from dark leather and adorned with cryptic symbols. It has been used by rakasha smugglers to carry contraband through the treacherous docks of Shadowfell. When you strap it on, its hidden compartments spring to life, offering an additional 50% carrying capacity for your gear. Additionally, there's a 10% chance that any dropped item within will contain hidden loot, as if guided by unseen hands.",
    "price": 1000,
    "icon": "📦",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Increased Carrying Capacity",
      "Hidden Loot Chance"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Cheep Cheep Shipping",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Carrying Capacity",
        "rules": "When the Rakasha Courier Pack is equipped, it increases your carrying capacity by 50%. This effect lasts until you rest or the pack loses its integrity. If the pack's durability drops to zero from wear and tear, it ceases to function."
      },
      {
        "title": "Hidden Loot Chance",
        "rules": "Once per short or long rest, when you drop a container within this pack, there is a 10% chance that an additional item of similar size and value is hidden inside. This effect requires no action from the user but has a cumulative limit of three times per day."
      }
    ],
    "levelRequirementReason": "The pack's complexity and the skills needed to handle its hidden compartments make it accessible only to characters at least level 1.",
    "vendorReason": "Shadowfell, known for its vast network of underground trade routes, has a reputation for dealing with all manner of contraband and thus stocks this smuggler's pack.",
    "shippingDetail": "The courier service ensures quick delivery but cannot guarantee the safety of any contents.",
    "usage": {
      "activation": "Equipping the pack by strapping it on",
      "duration": "Until rested or until durability is lost",
      "endsWhen": "Durability drops to zero due to wear and tear",
      "charges": "Unlimited, but limited to three hidden loot chances per day"
    },
    "priceReason": "The pack's unique abilities and the risk involved in using it justify its high price tag.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T18:13:46.300791+00:00",
    "aiReviewedAt": "2026-07-23T18:13:46.300791+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_rogueport_linker": {
    "id": "shadowfell_rogueport_linker",
    "name": "Cheep Cheep Accord Key",
    "description": "The Cheep Cheep Accord Key is a relic forged by Kremling Krew that opens portals between Shadowfell and Rogueport. Crafted from shadow-touched iron, it hums with the whispers of forgotten accords. Its use triggers a temporary alliance between the worlds, allowing passage but also drawing unwanted attention from factions not aligned with the Rakasha. Only those of level 1 can wield this key without facing a curse in forbidden zones.",
    "price": 1000,
    "icon": "🔄",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Portal Between Worlds",
      "Allied Faction Buff"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Cheep Cheep Shipping",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Portal Between Worlds",
        "rules": "Activates as an action. Opens a portal between Shadowfell and Rogueport for up to one hour. The portal can be used once per long rest within its duration. Any attempt to use it in non-aligned zones triggers a curse, requiring the user to complete a short rest before exiting."
      },
      {
        "title": "Allied Faction Buff",
        "rules": "Grants advantage on attack rolls against factions allied with Rakasha for 1 hour per use. This effect is cumulative but does not exceed 24 hours in total duration. The key must be used within the first hour of acquiring it to activate this benefit."
      }
    ],
    "levelRequirementReason": "Lowering the level requirement makes the key more accessible for new adventurers who may need to navigate between worlds.",
    "vendorReason": "Shadowfell is a major hub connecting both realms and thus handles items that facilitate travel between them.",
    "shippingDetail": "The key arrives wrapped in protective shadow silk, ensuring it can only be used once it reaches its intended recipient.",
    "usage": {
      "activation": "Action",
      "duration": "Up to one hour per use, rechargeable after a long rest",
      "endsWhen": "Exhausted after use or if the user enters a forbidden zone",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect its utility for navigating between worlds without being overpowered.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T18:13:32.817180+00:00",
    "aiReviewedAt": "2026-07-23T18:13:32.817180+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_shadow_bane": {
    "id": "shadowfell_shadow_bane",
    "name": "Shadow Bane of the Crimson Veil",
    "description": "The Shadow Bane of the Crimson Veil is a dagger forged from the bones of fallen vampires, its hilt bound in crimson thread and etched with runes that whisper secrets of the night. Its blade gleams with an otherworldly light, dealing piercing damage to undead foes and allowing you to slip into shadow-stealth after each strike. This weapon is not merely a tool but a symbol of your commitment to the shadows, enhancing your prowess in dark battles.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "+15% damage to undead",
      "Shadow-stealth for 10 seconds after each strike"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Undead Piercing Damage",
        "rules": "When you hit an undead creature with this weapon, it deals +15% additional piercing damage. This effect is not subject to resistance or immunity."
      },
      {
        "title": "Shadow-Stealth After Strike",
        "rules": "After successfully hitting an undead creature, you gain advantage on Dexterity (Stealth) checks for 10 seconds. This effect can be used once per long rest and does not stack with other stealth effects."
      }
    ],
    "levelRequirementReason": "This weapon requires the user to have reached at least level 5, ensuring proficiency in combat and stealth.",
    "vendorReason": "Shadowfell is a vendor known for its affinity with dark magic and weaponry forged from mystical materials like those used in this dagger.",
    "shippingDetail": "The shipment travels through the Underdark, ensuring that only those truly committed to the cause of darkness can acquire it.",
    "usage": {
      "activation": "Instantaneous effect upon striking an undead creature.",
      "duration": "10 seconds after each successful strike.",
      "endsWhen": "At the end of your next turn or when you hit another target with this weapon.",
      "charges": "Unlimited, but only one shadow-stealth effect can be active at a time."
    },
    "priceReason": "The price reflects the rarity and unique crafting process required to forge such an item from vampire bones and dark magic.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-23T18:13:53.019167+00:00",
    "aiReviewedAt": "2026-07-23T18:13:53.019167+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_shadow_bane_rod": {
    "id": "shadowfell_shadow_bane_rod",
    "name": "Shadow Bane Rod",
    "description": "The Shadow Bane Rod, a slender staff crafted from the bones of a fallen shadow elder, exudes an otherworldly darkness that permeates the air around it. When swung in battle, it unleashes a dark pulse capable of silencing nearby foes and draining their vital essence. This weapon is not just a tool; it's a relic imbued with the very essence of shadow magic, making it a potent ally against the necrotic and the undead.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+25% damage to shadow creatures",
      "Silence target for 2 seconds"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Silence Target",
        "rules": "When you use your action to swing the Shadow Bane Rod, it emits a dark pulse that silences one creature within 30 feet. The silenced creature is incapacitated and cannot take actions for 2 seconds. There is no saving throw."
      },
      {
        "title": "Shadow Damage",
        "rules": "The rod deals an additional +25% damage to all creatures with the shadow or necrotic trait. This effect does not stack with other sources of increased damage."
      }
    ],
    "levelRequirementReason": "This weapon requires a minimum character level of 6 due to its intricate construction and potent magical properties.",
    "vendorReason": "The Shadowfell region is known for its dark artifacts, and the vendors there specialize in such powerful relics.",
    "shippingDetail": "Ships via Boo Spectral Mail, ensuring safe delivery through spectral means.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends immediately if you lose your concentration or the target is no longer within range.",
      "charges": "Recharge after a short rest"
    },
    "priceReason": "This weapon’s price reflects its rare and powerful nature, providing significant combat advantages at an appropriate cost.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-23T18:13:59.386845+00:00",
    "aiReviewedAt": "2026-07-23T18:13:59.386845+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_shadow_bite": {
    "id": "shadowfell_shadow_bite",
    "name": "Shadow Bite of the Onyx Hand",
    "description": "The Shadow Bite of the Onyx Hand is a cursed dagger forged from the skeletal remains of a fallen vampire lord, its blade glowing with an eerie violet hue under moonlight. Crafted in the shadowy depths of the Onyx Hand's lair, it drains vitality to fuel its dark aura, making it perfect for stealthy strikes in dim light. When wielded by the faithful, it grants +5 to Stealth skill and increases melee damage by 20% when an enemy is below 30% health.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stealth Boost",
      "Enhanced Melee Damage"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Stealth Boost",
        "rules": "When hidden in darkness, the wielder gains a +5 bonus to Stealth checks. This effect lasts until the start of your next turn after attacking or moving from cover."
      },
      {
        "title": "Enhanced Melee Damage",
        "rules": "For every 10% of an enemy's health remaining (down to a minimum of 30%), the wielder deals an additional +2 damage with melee attacks. This effect does not stack, and it ends when you take a long rest."
      }
    ],
    "levelRequirementReason": "The cursed nature and dark magic required for its forging demand a minimum level of expertise.",
    "vendorReason": "Shadowfell's network of necromancers and dark alchemists is privy to such ancient artifacts.",
    "shippingDetail": "Shipping is expedited with a special delivery charm, ensuring safe arrival in less than a week.",
    "usage": {
      "activation": "Passive effect when hidden and melee attacks are made against enemies below 30% health. Active effect when Stealth checks are made while in darkness.",
      "duration": "Until start of next turn after attacking or moving from cover, or until you take a long rest.",
      "endsWhen": "Upon taking a long rest, or if the wielder is no longer hidden and stealthy.",
      "charges": "Unlimited"
    },
    "priceReason": "The dagger's rarity, cursed nature, and unique effects justify its moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:14:04.392458+00:00",
    "aiReviewedAt": "2026-07-23T18:14:04.392458+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_shadow_blood_scarf": {
    "id": "shadowfell_shadow_blood_scarf",
    "name": "Shadow Blood Scarf",
    "description": "The Shadow Blood Scarf is woven from the very essence of Onyx Hand elders slain in the depths of the Shadowfell. This cloak-like scarf siphons ambient darkness to bolster your stealth and fear resistance, making you nearly invisible in shadowy environs. Its wearer becomes a ghostly presence within the realm of the Shadowfell, blending seamlessly with the night's shadows. The scarf grants temporary hit point regeneration by absorbing 10% of surrounding darkness each turn and reduces the chance of being detected by enemies in dim light.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% Stealth Modifier",
      "-15% Detection Chance"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Absorbs Ambient Darkness",
        "rules": "The scarf regenerates temporary hit points equal to 10% of ambient darkness each turn. This effect is passive and ends when the wearer leaves a shadowy environment or when the scarf's magical essence fades."
      },
      {
        "title": "Reduces Detection Chance",
        "rules": "While in dim light, you have advantage on Dexterity (Stealth) checks to avoid detection by enemies. This effect lasts until the end of your next long rest or if you are no longer in a dimly lit area."
      }
    ],
    "levelRequirementReason": "This scarf's arcane construction requires a certain level of magical aptitude and experience.",
    "vendorReason": "The Shadowfell is the origin of this mystical artifact, crafted by its very inhabitants to aid their kin.",
    "shippingDetail": "Delivered with a cloak of invisibility for one turn upon arrival, ensuring your secrecy during transit.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until you leave a shadowy environment or finish a long rest.",
      "endsWhen": "Leaving a shadowy area or completing a long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The scarf's rarity and the arcane materials used in its construction justify this price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:14:01.935352+00:00",
    "aiReviewedAt": "2026-07-23T18:14:01.935352+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_shadow_cloak": {
    "id": "shadowfell_shadow_cloak",
    "name": "Shadow Cloak of the Onyx Veil",
    "description": "The Shadow Cloak of the Onyx Veil is a dark, shimmering garment woven from the very essence of the Dark Mirror's shadowy depths. Its fabric seems to absorb light entirely, granting the wearer perfect invisibility for fleeting moments. Enemies caught in its path shiver and stagger, their movements slowed by an invisible chill that seizes them. The cloak whispers secrets of the Shadowfell through the air, enhancing the wearer’s perception and dodging abilities.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Chill"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "The user can activate this effect as a bonus action. The cloak grants invisibility to the wearer for up to 10 seconds, during which time they are immune to detection by visual means. This effect ends early if the wearer attacks or casts a spell."
      },
      {
        "title": "Chill",
        "rules": "Upon activation, the cloak inflicts a ‘Chill’ debuff on any creature within 10 feet of the wearer for the duration of their next turn. The target's speed is reduced by 40%, and they have disadvantage on Strength (Athletics) checks until the start of their next turn."
      }
    ],
    "levelRequirementReason": "The cloak’s arcane essence requires a high degree of magical aptitude to control effectively.",
    "vendorReason": "The Shadowfell is the natural realm where such artifacts are crafted and sold, making it a trusted source for these items.",
    "shippingDetail": "Due to its sensitive nature, this cloak must be shipped in a specially insulated package to ensure it arrives undamaged.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 10 seconds or until the wearer attacks or casts a spell",
      "endsWhen": "The effect ends when the wearer attacks, cast a spell, or at the end of their next turn",
      "charges": "Unlimited"
    },
    "priceReason": "This cloak offers significant battlefield advantage without being overpowered, making it fairly priced for its rarity and utility.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-23T18:14:24.954606+00:00",
    "aiReviewedAt": "2026-07-23T18:14:24.954606+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_shadow_forged_shield": {
    "id": "shadowfell_shadow_forged_shield",
    "name": "Shadow Forged Shield",
    "description": "The Shadow Forged Shield is a dark obsidian platemaker forged from the very essence of the Onyx Hand, a mages guild known for crafting defenses against arcane might. Its surface shimmers with an eerie, pulsating aura that seems to breathe life into the void. When struck, this shield not only blocks 150% of incoming damage but also emits a disorienting pulse that throws off attackers for 2 seconds, leaving them vulnerable. It grants its wielder a 10% bonus to shadow-based skills, making it a formidable companion in darkened halls and shadowy battles.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Shadow Block",
      "Disorienting Pulse"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shadow Block",
        "rules": "When the shield blocks damage, it absorbs an additional 150% of the incoming magical or physical damage. This effect is instantaneous and does not consume charges."
      },
      {
        "title": "Disorienting Pulse",
        "rules": "If the shield is damaged, it emits a disorienting pulse that targets all creatures within 10 feet of its wielder. These creatures must succeed on a DC 15 Wisdom saving throw or be knocked prone and incapacitated for 2 seconds."
      }
    ],
    "levelRequirementReason": "The intricate forging process requires a certain level of arcane knowledge and experience to wield this shield effectively.",
    "vendorReason": "Shadowfell is the guild responsible for crafting this shield, making it their premier product.",
    "shippingDetail": "Delivered swiftly by Pipe Express, ensuring the shield arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous on contact with damage",
      "endsWhen": "Exhausts upon being destroyed or when the wielder is incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "The shield’s rarity, craftsmanship, and unique defensive capabilities justify its moderate price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:14:14.825869+00:00",
    "aiReviewedAt": "2026-07-23T18:14:14.825869+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_shadow_fuel": {
    "id": "shadowfell_shadow_fuel",
    "name": "Shadow Fuel Vial",
    "description": "A vial of condensed shadow essence, the Shadow Fuel Vial exudes an eerie blue glow that dances within its glass confines. Perfect for those who walk in the dark, this potent elixir can be poured into a weapon or piece of armor to amplify its power. When applied, it grants the wielder a menacing shadow aura, increasing their evasion by +5% and enhancing the weapon's damage by 20%. The essence is as rare as the shadows themselves, forged in the deepest pits of the Shadowfell where only the bravest dare venture.",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Dark Amplification",
      "Shadow Aura"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dark Amplification",
        "rules": "When applied to a weapon or piece of armor, the Shadow Fuel Vial grants +20% damage for 3 turns. This effect ends when the vial is expended or after the duration expires."
      },
      {
        "title": "Shadow Aura",
        "rules": "The user gains a +5% evasion bonus while the Dark Amplification effect is active. The aura persists for as long as the vial's effects are active and dissipates upon their conclusion."
      }
    ],
    "levelRequirementReason": "The Shadow Fuel Vial requires only level 1 to use, making it accessible to adventurers at the start of their journey.",
    "vendorReason": "Shadowfell is a natural vendor for such rare and powerful items forged in the depths of their domain.",
    "shippingDetail": "Carefully packed and shipped by Shy Guy Smugglers, this vial may arrive with some delay due to its hazardous nature.",
    "usage": {
      "activation": "As a bonus action, pour the contents of the vial into a weapon or piece of armor.",
      "duration": "3 turns",
      "endsWhen": "Upon expiration or when the vial is expended.",
      "charges": "Unlimited"
    },
    "priceReason": "The Shadow Fuel Vial's price reflects its rarity and powerful nature, providing a balanced addition to any adventurer's arsenal.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-23T18:14:44.362707+00:00",
    "aiReviewedAt": "2026-07-23T18:14:44.362707+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_shadow_gauntlet": {
    "id": "shadowfell_shadow_gauntlet",
    "name": "Shadow Gauntlet of the Onyx Sovereign",
    "description": "The Shadow Gauntlet of the Onyx Sovereign is a heavy, obsidian gauntlet forged from the bones of ancient shadow creatures. It channels dark energy into every strike, turning each hit into a pulse of shadow that shatters enemy defenses. The gauntlets are said to have been crafted by the Onyx Sovereign itself during its reign over the Shadowfell. Each swing not only deals increased damage but also leaves behind lingering shadows that deal additional AoE damage to nearby enemies.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Shadow Strike",
      "Shadow Rift"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shadow Strike",
        "rules": "When you hit an enemy with a melee attack, you increase your weapon's damage by 40%. Additionally, the target takes an extra 10% damage if it has fewer than half its hit points remaining. This effect lasts until the start of your next turn."
      },
      {
        "title": "Shadow Rift",
        "rules": "As a bonus action, you can trigger Shadow Rift by channeling dark energy into the ground at your feet. For 3 seconds, this creates an area that deals an additional 1d6 necrotic damage to all enemies within 5 feet of the gauntlets' wearer each round they remain in contact with the ground. This effect ends when you move more than 10 feet away from the point of origin or if you take any action other than movement."
      }
    ],
    "levelRequirementReason": "The complexity and power of the Shadow Gauntlet's shadow magic require a minimum character level to wield effectively.",
    "vendorReason": "The Shadowfell is home to ancient forges that create such powerful artifacts, making it natural for them to sell these gauntlets.",
    "shippingDetail": "Ships via Lakitu Drones, known for their reliable and fast delivery services within the Shadowfell region.",
    "usage": {
      "activation": "Bonus action or as part of a melee attack",
      "duration": "Until start of next turn or triggered as an instant effect",
      "endsWhen": "On hit or when you take an action other than movement, and ends after 3 seconds of use",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The gauntlet's unique crafting process and the raw materials required make it a rare find worth this price.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T18:14:22.014271+00:00",
    "aiReviewedAt": "2026-07-23T18:14:22.014271+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_shadow_gaze": {
    "id": "shadowfell_shadow_gaze",
    "name": "Shadow Gaze Lens",
    "description": "The Shadow Gaze Lens is a rare, dark lens forged from obsidian and shadow essence. Crafted by the Manor Guard in the heart of the Shadowfell, it allows its wearer to pierce through the veil of darkness, revealing hidden foes with uncanny precision. When active, this lens grants a 20% chance to uncover stealthed creatures within 30 feet, and it can be used up to three times per long rest.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Reveals hidden enemies",
      "Vision through shadows"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shadow Vision",
        "rules": "While wearing the lens, you have advantage on Perception checks made to locate hidden or invisible creatures within a 30-foot radius. This effect lasts for 1 hour and can be used up to three times per long rest."
      },
      {
        "title": "Stealth Detection",
        "rules": "The lens grants you a 20% chance of revealing hidden foes when you make an attack or ability check against them within its range. This effect is limited to once per short or long rest."
      }
    ],
    "levelRequirementReason": "Crafted by the Manor Guard, this lens requires a user skilled enough in Perception and Stealth to wield it effectively.",
    "vendorReason": "The Shadowfell is known for its dark secrets and hidden dangers; the lens is a logical addition to their wares.",
    "shippingDetail": "The lenses are delivered through spectral couriers who traverse the Shadowfell's treacherous paths, ensuring timely arrival but with an increased risk of loss during transit.",
    "usage": {
      "activation": "Object interaction to activate and put on the lens; no action required for use.",
      "duration": "1 hour or until dismissed",
      "endsWhen": "The wearer removes the lens, it is destroyed in a flash of shadow, or the effect ends at the start of their turn if they are incapacitated.",
      "charges": "3 uses per long rest"
    },
    "priceReason": "This rare lens combines powerful dark magic with practical utility, making it a valuable yet balanced addition to any adventurer's gear.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T18:14:42.771822+00:00",
    "aiReviewedAt": "2026-07-23T18:14:42.771822+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_shadow_heart_amulet": {
    "id": "shadowfell_shadow_heart_amulet",
    "name": "Shadow Heart Amulet",
    "description": "The Shadow Heart Amulet pulses with a dark, ethereal glow that hints at the deepest recesses of the Shadowfell. Crafted from the very essence of its realm, this pendant allows the wearer to become invisible within shadow zones and opens a channel for communication with spectral entities. Its pulse can be felt in areas where shadows are thick, granting the user an uncanny connection to the timeless whispers that haunt these regions.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Invisibility in Shadow Zones",
      "Commune with Spectral Entities"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Invisibility in Shadow Zones",
        "rules": "As a bonus action, the wearer can become invisible within shadow zones for up to 1 minute. This effect ends early if the wearer moves out of a shadow zone or takes damage."
      },
      {
        "title": "Commune with Spectral Entities",
        "rules": "Once per short rest, the wearer can speak with spectral entities in the nearby area. The communication lasts for 1 hour and requires no action from either party. This ability does not allow the user to control or command spectral entities."
      }
    ],
    "levelRequirementReason": "The amulet's power draws on the wearer's affinity with shadow magic, requiring a certain level of magical understanding.",
    "vendorReason": "The Shadowfell is known for crafting and distributing items that embody its dark magic, making this pendant a natural addition to their inventory.",
    "shippingDetail": "Due to the amulet's potent magical properties, it must be delivered by Shy Guy Smugglers to ensure safe transport through shadow zones.",
    "usage": {
      "activation": "Bonus action for invisibility; once per short rest for spectral communication",
      "duration": "1 minute for invisibility; 1 hour for spectral communication",
      "endsWhen": "Effect ends if the wearer moves out of a shadow zone or takes damage, or when the specified duration expires.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The amulet's rarity and magical properties justify its moderate price point.",
    "priceOriginal": 3750,
    "priceReviewedAt": "2026-07-23T18:15:07.964313+00:00",
    "aiReviewedAt": "2026-07-23T18:15:07.964313+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_shadow_hollow_core": {
    "id": "shadowfell_shadow_hollow_core",
    "name": "Shadow Hollow Core",
    "description": "The Shadow Hollow Core, a pulsating orb of void energy crafted from the heartwood of an ancient Onyx Hand ritual, hums with dark, secreted power. When activated, it emits a blinding light that reveals hidden paths and secrets within the Shadowfell, its glow flickering like dying embers in the twilight realm. This eerie luminescence grants a +10% chance to find secret loot for 30 seconds upon activation, but at the cost of consuming half your hit points when used.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals hidden paths",
      "Increases chance to find secret loot"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Paths",
        "rules": "When activated as a bonus action, this core emits a blinding light that reveals hidden paths and secrets within the Shadowfell. The effect lasts for 30 seconds."
      },
      {
        "title": "Increased Chance to Find Secret Loot",
        "rules": "+10% chance to find secret loot when used in the Shadowfell. This bonus persists until the next dawn or until the core is recharged, whichever comes first."
      }
    ],
    "levelRequirementReason": "The core's power is accessible to lower-level characters who must learn its secrets.",
    "vendorReason": "The Shadowfell vendor, with deep ties to the realm, can source and sell this arcane artifact.",
    "shippingDetail": "Ships via the Void Drifter Relay, a service known for its timely delivery of mystical items through the Shadowfell's treacherous paths.",
    "usage": {
      "activation": "Bonus action to activate and emit light revealing hidden paths.",
      "duration": "30 seconds",
      "endsWhen": "The effect ends when its duration expires or until recharged by a ritual.",
      "charges": "Unlimited, but must be recharged after use with an Onyx Hand ritual."
    },
    "priceReason": "Balanced price for a rare item that provides powerful yet balanced effects within the Shadowfell.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:15:21.370903+00:00",
    "aiReviewedAt": "2026-07-23T18:15:21.370903+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_shadow_maw_chalice": {
    "id": "shadowfell_shadow_maw_chalice",
    "name": "Shadow Maw Chalice of the Forgotten King",
    "description": "The Shadow Maw Chalice of the Forgotten King is a macabre relic carved from the jawbone of an elder vampire, now hollowed and filled with dark blood. It whispers secrets of the dead when its user speaks into it, and can summon spectral allies that fight alongside them in battle. The chalice's power comes not only from its vampiric origin but also from the ancient magic of the Rakasha clans who crafted it.",
    "price": 1000,
    "icon": "🍷",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Speak to the Dead",
      "Summon Spectral Ally"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Speak to the Dead",
        "rules": "The user can activate this effect as an action, allowing them to communicate with the dead for 10 seconds. The chalice grants a +2 bonus to Intelligence (Insight) checks made to gather information about undead creatures or ancient events."
      },
      {
        "title": "Summon Spectral Ally",
        "rules": "The user can activate this effect as a bonus action, summoning one spectral ally for 30 seconds. The summoned creature has 50% damage reduction and provides battlefield support to the user until it is destroyed or dismissed by the user."
      }
    ],
    "levelRequirementReason": "This item requires significant magical power to channel its dark energies effectively.",
    "vendorReason": "The Shadowfell region holds many secrets and relics, and only those with proper training in necromancy can handle the chalice safely.",
    "shippingDetail": "Delivery is swift but requires a special ritual to ensure the chalice arrives intact.",
    "usage": {
      "activation": "Action or Bonus Action depending on effect used",
      "duration": "10 seconds for 'Speak to the Dead', 30 seconds for 'Summon Spectral Ally'; ends when the duration expires, dismissed by user, or destroyed",
      "endsWhen": "Effect duration ends, dismissed by user, or destroyed",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced to be a valuable but not overpowered relic within the Shadowfell region.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:14:57.556030+00:00",
    "aiReviewedAt": "2026-07-23T18:14:57.556030+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_shadow_relic": {
    "id": "shadowfell_shadow_relic",
    "name": "Shadow Veil Mantle",
    "description": "The Shadow Veil Mantle is a cloak spun from the forgotten dreams of the dead, its threads woven with whispers that echo through the realms of the shadowfell. It grants the wearer an eerie aura that unnerves foes within ten meters, causing them to falter and lose their focus for a moment. The mantle's fabric is said to have been gifted by the Onyx Hand itself, making it a perfect companion for those who walk in the dark, seeking to strike from shadows unseen.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stealth Aura",
      "Crippling Chill"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Stealth Aura",
        "rules": "The wearer gains advantage on Dexterity (Stealth) checks and can use a bonus action to activate the mantle's shadowy cloak, reducing their Stealth DC by 5 for one minute. The effect ends if the wearer attacks or casts a spell."
      },
      {
        "title": "Crippling Chill",
        "rules": "Enemies within ten meters of the wearer lose 10% of their attack speed and take a -2 penalty to attack rolls and saving throws until they are no longer affected by the mantle. This effect ends when the wearer moves more than 30 feet away from an enemy."
      }
    ],
    "levelRequirementReason": "The cloak's intricate weave requires the user to have a firm grasp of shadow magic and stealth techniques.",
    "vendorReason": "Shadowfell is renowned for its connections to dark arts and forgotten lore, making it the perfect vendor for such an artifact.",
    "shippingDetail": "Delivered by night, ensuring the cloak arrives under cover of darkness.",
    "usage": {
      "activation": "Bonus action to activate or deactivate the Stealth Aura and Crippling Chill effects.",
      "duration": "The Stealth Aura lasts for one minute. The Crippling Chill effect persists until the wearer moves more than thirty feet away from an affected enemy.",
      "endsWhen": "Activation ends when the wearer attacks, casts a spell, or is no longer within ten meters of an enemy.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The cloak's rarity and the advanced shadow magic woven into its fabric justify this price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:15:14.088835+00:00",
    "aiReviewedAt": "2026-07-23T18:15:14.088835+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_shadow_satchel": {
    "id": "shadowfell_shadow_satchel",
    "name": "Shadow Satchel of the Unseen",
    "description": "The Shadow Satchel of the Unseen weaves itself from the very fabric of forgotten nightmares, its leather dyed black as midnight and stitched with arcane threads that shimmer faintly in the shadows. It allows you to slip through the cracks of reality, becoming invisible to sight and sound for the duration of your journey. In the darkest corners, it grants you the ability to move silently without a sound, leaving not even an echo behind.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Silent Movement"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Phantom Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "While wearing this satchel, you gain the benefits of the Invisibility spell for up to 5 turns. You are invisible and can move silently without making noise. This effect ends if you attack or cast a spell."
      },
      {
        "title": "Silent Movement",
        "rules": "You can move through difficult terrain at normal speed while wearing this satchel, and you do not make noise when doing so. You must remain within shadows for this benefit to be active; it expires if you leave shadowy areas."
      }
    ],
    "levelRequirementReason": "This item allows even the least experienced adventurers to safely navigate dangerous areas.",
    "vendorReason": "The Shadowfell itself would not part with such a treasured artifact, entrusting it only to those who understand its power and responsibility.",
    "shippingDetail": "Ships via the Phantom Courier Service, known for delivering items through even the darkest alleys without a trace.",
    "usage": {
      "activation": "Passive effect while wearing the satchel; requires no action to activate but must remain in shadowy areas to maintain benefits.",
      "duration": "5 turns",
      "endsWhen": "You attack, cast a spell, or leave shadowy areas",
      "charges": "Unlimited"
    },
    "priceReason": "The satchel's rarity and the unique materials used in its construction justify this price.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T18:15:26.774611+00:00",
    "aiReviewedAt": "2026-07-23T18:15:26.774611+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_shadow_scarf": {
    "id": "shadowfell_shadow_scarf",
    "name": "Shadow Scarf of the Onyx Veil",
    "description": "The Shadow Scarf of the Onyx Veil is a dark, whispering scarf spun from the forgotten whispers of vampire souls. Worn in shadowed zones, it absorbs ambient darkness and casts an eerie spectral glow that makes foes hesitate before striking. It enhances stealth with its subtle aura, giving you a +20% chance to gain surprise ambushes on enemies while reducing incoming ranged damage by 5%. A relic of the Shadowfell, this scarf is said to have been crafted by ancient vampires seeking to preserve their secrets in the darkness.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% stealth and surprise ambush",
      "-5% from ranged attacks"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Stealth and Surprise Ambush",
        "rules": "When worn, this scarf enhances your stealth by granting a +20% chance to gain the benefit of surprise ambush. This effect is active as long as you are in shadowed areas and does not require activation."
      },
      {
        "title": "Reduced Ranged Damage",
        "rules": "The scarf also reduces incoming ranged attacks by 5%. This passive effect persists for a short duration, expiring once the wearer moves out of a shadowy area or after 10 minutes. It has no save DC and can be used only once per long rest."
      }
    ],
    "levelRequirementReason": "The scarf's alignment with the Shadowfell and its subtle, yet potent effects necessitate a player of at least third level to wield it effectively.",
    "vendorReason": "Shadowfell merchants are well-acquainted with the lore and artifacts of their domain and often carry relics like this scarf.",
    "shippingDetail": "Shipped via Pipe Express, delivery is swift but requires a special dark rune to be placed on the package for safe travel through the Shadowfell.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous within shadows; expires after 10 minutes outside of them or at the end of a long rest",
      "endsWhen": "Moving out of shadowed areas or ending a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The scarf's rarity, origin from the Shadowfell, and its subtle yet effective stealth and damage reduction make it a valuable but balanced treasure worth 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:15:38.679318+00:00",
    "aiReviewedAt": "2026-07-23T18:15:38.679318+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_shadow_soul_core": {
    "id": "shadowfell_shadow_soul_core",
    "name": "Shadow Soul Core",
    "description": "A pulsating orb of corrupted void energy that drains light and amplifies darkness. Wields the power to shatter illusions and bend shadows to obey.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants +100% damage to shadow based attacks",
      "Reduces enemy resistance to darkness effects",
      "Restores 5% HP per second while active"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "shadowfell_shadow_sunderer": {
    "id": "shadowfell_shadow_sunderer",
    "name": "Shadow Sunderer",
    "description": "The Shadow Sunderer, a gauntlet forged from the very shadows of the Shadowfell, warps light and reality alike. It dims ambient illumination by half within its wearer's vicinity, rendering them invisible to non-vampires for 10 seconds. Its curse also breaks illusory constructs, making it an invaluable tool for infiltrators and assassins who must navigate treacherous environs unseen. Crafted by the dark arts of the Shadowfell, this gauntlet is a symbol of both fear and power.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Illusion Shattering",
      "Invisibility to Non-Vampires"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Illusion Shattering",
        "rules": "When activated, the gauntlet shatters any illusory constructs within its vicinity. This effect has a range of 10 feet and lasts until the end of the wearer's next turn. The DC to save against this effect is 13."
      },
      {
        "title": "Invisibility to Non-Vampires",
        "rules": "The gauntlet renders the wearer invisible to all non-vampire creatures within a 20-foot radius for 10 seconds upon activation. This effect ends when the wearer moves or attacks, and it can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The Shadow Sunderer's dark magic requires a user of at least fifth level to wield without risk.",
    "vendorReason": "Shadowfell, the realm itself, is the most fitting vendor for such an artifact, forged in its very essence.",
    "shippingDetail": "Shipping through Pipe Express takes a day longer than standard due to the gauntlet's mystical nature.",
    "usage": {
      "activation": "A bonus action to activate and use.",
      "duration": "10 seconds or until the wearer moves or attacks, whichever comes first.",
      "endsWhen": "The effect ends when the wearer moves or attacks.",
      "charges": "One charge per short rest."
    },
    "priceReason": "The Shadow Sunderer's price reflects its rarity and the dark magic required to craft it, balancing its powerful effects with a fair cost in XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:15:49.459196+00:00",
    "aiReviewedAt": "2026-07-23T18:15:49.459196+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_shadow_tomb_key": {
    "id": "shadowfell_shadow_tomb_key",
    "name": "Key to the Shadow Tomb",
    "description": "The Key to the Shadow Tomb is a gnarled iron key forged from the bones of an ancient Onyx Hand noble. Its surface glows with a faint, eerie blue light, and the air hums with dark magic when it's near. This relic not only unlocks the hidden vault within the Shadeward Estate but also grants a 10% bonus to exploration in shadowy zones, making the journey through the estate both safer and more efficient.",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Unlocks Shadow Tomb",
      "Enhanced Exploration"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unlock the Shadow Tomb",
        "rules": "When activated by inserting it into the Shadow Tomb’s lock, this key unlocks a hidden vault within the Shadeward Estate. This effect is instantaneous and does not require a saving throw or action."
      },
      {
        "title": "Enhanced Exploration",
        "rules": "While in shadowy zones, the user gains a +10 bonus to all Wisdom (Perception) checks related to exploration for 24 hours after use. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This key is accessible to lower-level adventurers who are tasked with exploring the Shadeward Estate.",
    "vendorReason": "The Shadowfell vendors have a deep connection to the lore and history of the Shadeward Estate, making them the most reliable source for such relics.",
    "shippingDetail": "Due to its cursed nature, this key must be delivered by hand via trusted courier services like the Shy Guy Smugglers.",
    "usage": {
      "activation": "Standard action",
      "duration": "Instantaneous for unlocking; +10 bonus lasts for 24 hours after use",
      "endsWhen": "Effect expires after 24 hours or when a new long rest begins",
      "charges": "Unlimited, but the bonus is only active once per long rest"
    },
    "priceReason": "The price reflects its rarity and the powerful benefits it offers to adventurers without overstepping into overpowered territory.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-23T18:15:41.794277+00:00",
    "aiReviewedAt": "2026-07-23T18:15:41.794277+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_shadow_tome": {
    "id": "shadowfell_shadow_tome",
    "name": "Tome of the Shadowed Throne",
    "description": "The Tome of the Shadowed Throne, bound in black silk and adorned with runes that glow faintly, whispers secrets of the Shadowfell when opened. Its pages turn on their own, revealing spectral allies that dance around you, shimmering with an eerie light. Reading from it grants temporary invisibility for 30 seconds, allowing you to slip past foes unseen. The tome also has a chance to summon spectral allies—creatures of mist and shadow who deal +100 damage in melee.",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Spectral Ally Summon"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "When you activate the tome, you become invisible for 30 seconds. This effect has a range of touch and lasts until the start of your next turn after using it. There is no saving throw against this effect."
      },
      {
        "title": "Spectral Ally Summon",
        "rules": "There is a 10% chance that when you read from the tome, you summon one spectral ally who deals 2d6 + 50 damage with a melee attack. The spectral ally lasts for 1 minute or until it drops to 0 hit points. This effect has a maximum of three uses per long rest."
      }
    ],
    "levelRequirementReason": "The tome's shadowy magic requires a minimum level of 3 to channel its power without risking mental instability.",
    "vendorReason": "The Shadowfell vendor, known for its connection to otherworldly forces, sells this rare artifact that draws on the very essence of the plane.",
    "shippingDetail": "Shipped via Lakitu Drones with a special delivery that takes one week to arrive due to the tome's sensitivity to light and air.",
    "usage": {
      "activation": "Reading from the tome as an action",
      "duration": "30 seconds of invisibility, spectral ally lasts for 1 minute or until destroyed",
      "endsWhen": "The effect ends when its duration expires or you take damage",
      "charges": "Three uses per long rest"
    },
    "priceReason": "Balanced at 1000 XP, the tome's shadow magic and spectral abilities provide significant utility without overshadowing other items of similar rarity.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T18:16:01.235666+00:00",
    "aiReviewedAt": "2026-07-23T18:16:01.235666+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_shadow_tongue": {
    "id": "shadowfell_shadow_tongue",
    "name": "Shadow Tongue of the Onyx Whisper",
    "description": "The Shadow Tongue of the Onyx Whisper is a cursed, sinewy tongue made from the shadow-laced skin of a forgotten guardian. When unfurled, it hums with the whispers of the dead, revealing hidden lore and secrets within a 20-foot radius. It can also whisper the names of those who perished in the Shadowfell’s depths, but at a cost—using it in combat inflicts 1d6 psychic damage on the wielder.",
    "price": 1000,
    "icon": "🗡",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Reveals hidden lore or secrets",
      "Whispers names of past victims"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Expose Hidden Secrets",
        "rules": "As an action, the Tongue reveals hidden lore or secrets within a 20-foot radius. The effect lasts until the end of your next turn. This use counts as one charge."
      },
      {
        "title": "Reveal Names of Victims",
        "rules": "As an action, the Tongue whispers the names of those who perished in the Shadowfell’s depths within a 20-foot radius. The effect lasts for 1 minute and can be used once at dawn or dusk."
      }
    ],
    "levelRequirementReason": "Requires proficiency with Arcana to wield without risk.",
    "vendorReason": "The Shadowfell's denizens often trade such relics among themselves, as they hold power over the realm’s forgotten lore.",
    "shippingDetail": "Delivered via spectral courier; may arrive in a dream.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous reveal, 1 minute for names",
      "endsWhen": "Exhausted after use, destroyed if used in combat",
      "charges": "2 charges, recharged by dawn and dusk"
    },
    "priceReason": "Balanced price reflects its shadowy power and limited use.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T18:15:54.709974+00:00",
    "aiReviewedAt": "2026-07-23T18:15:54.709974+00:00",
    "aiReviewVersion": 1
  }
};
