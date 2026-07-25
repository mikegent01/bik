// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_040 = {
  "shadowfell_shadow_ward": {
    "id": "shadowfell_shadow_ward",
    "name": "Shadow Ward of the Onyx Hand",
    "description": "The Shadow Ward of the Onyx Hand is a cloak woven from the very essence of forgotten horrors, its midnight-black fabric shimmering with the dark energies of the Shadowfell. It grants the wearer immunity to illusions and minor psychic manipulation, making them a target for neither subtle mind games nor spectral whispers. Its onyx threads grant +30% stealth but reduce movement speed by 10%. The ward's power is drawn from the very fabric of the plane it was forged in, ensuring its wearer remains undetected by all who dare to seek their secrets.",
    "category": "equipment",
    "price": 2300,
    "icon": "🕯",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Immunity to Illusions",
      "+25% Stealth"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Illusion Immunity",
        "rules": "The wearer is immune to the effects of illusions and minor psychic manipulation. This provides a +10 bonus on saving throws against such attacks, lasting until the end of each long rest."
      },
      {
        "title": "Enhanced Stealth",
        "rules": "While wearing this cloak, the wearer gains a +30 bonus to Dexterity (Stealth) checks. This effect does not stack with other sources of stealth bonuses and ends when the cloak is removed or destroyed."
      }
    ],
    "levelRequirementReason": "The ward's power is drawn from the Shadowfell, which makes it accessible to adventurers who have begun their journey into the darker realms.",
    "vendorReason": "The shadowy plane itself ensures that this rare item is sold only by those with a deep connection to its mysteries.",
    "shippingDetail": "Due to the cloak's dangerous nature, it must be transported via a specialized, dark-matter-stabilized container designed to contain its inherent energies.",
    "usage": {
      "activation": "The cloak is activated by simply donning it. It remains active until removed or destroyed.",
      "duration": "Permanent while worn",
      "endsWhen": "Removal or destruction of the cloak",
      "charges": "Unlimited, recharges upon removal"
    },
    "priceReason": "The ward's power is balanced by its rarity and the dark plane from which it originates, making it a valuable asset for adventurers.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T18:16:51.643775+00:00",
    "aiReviewedAt": "2026-07-23T18:16:51.643775+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_shadowwhisper_ambush": {
    "id": "shadowfell_shadowwhisper_ambush",
    "name": "Shadowwhisper Ambush",
    "description": "The Shadowwhisper Ambush is a rare dagger forged from the very shadows of the Shadowfell, its blade shimmering with onyx veins that pulse with an eerie, psychic energy. When drawn and swung, it whispers secrets of your foe's darkest fears into their mind, momentarily paralyzing them in dread for three turns. This cursed weapon is a masterwork, crafted by the necromancers of the Underdark, and perfect for those who walk in the dark places of the world.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Psychic Paralysis",
      "Whispered Fear"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Psychic Paralysis",
        "rules": "When you hit an enemy with a melee attack using this weapon, they must make a DC 15 Wisdom saving throw or be paralyzed by fear for 3 turns. This effect ends if the target takes any action."
      },
      {
        "title": "Whispered Fear",
        "rules": "As part of the attack, you whisper your foe’s deepest fears to them, causing them to gain the Frightened condition until the start of their next turn unless they succeed on a DC 15 Wisdom saving throw. This effect cannot be used more than once per long rest."
      }
    ],
    "levelRequirementReason": "This weapon is crafted for those who have proven their worth in the dark and treacherous realms of the Shadowfell.",
    "vendorReason": "The Shadowfell's vendors are well-acquainted with the local necromancers, providing rare items like this dagger.",
    "shippingDetail": "Ships via the Void Drifter Relay, known for its reliable delivery through even the darkest realms.",
    "usage": {
      "activation": "Melee attack action",
      "duration": "Instantaneous effect",
      "endsWhen": "The target takes any action or the start of their next turn (for Frightened condition)",
      "charges": "Unlimited, but only usable once per long rest"
    },
    "priceReason": "Crafted from rare materials and imbued with powerful necromantic energies, this weapon is a significant investment.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:17:19.442136+00:00",
    "aiReviewedAt": "2026-07-23T18:17:19.442136+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_shard_of_hyrule": {
    "id": "shadowfell_shard_of_hyrule",
    "name": "Shard of Hyrule",
    "description": "The Shard of Hyrule gleams with a faint, ethereal light in the dimmest shadows, its fractured surface shimmering like a fragment from the very Triforce itself. Crafted through dark magic and hidden deep within the Shadowfell, it offers fleeting immunity to malevolent energies but at the cost of one's soul if used recklessly. Once attuned with a sacred beast, this relic whispers of ancient prophecies and warns of the dangers in its misuse.",
    "price": 36000,
    "icon": "🏯",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Immunity to Dark Magic",
      "Memory Distortion"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Cheep Cheep Shipping",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Immunity to Dark Magic",
        "rules": "Activates as an action, granting immunity to all forms of dark magic for a duration of 10 rounds. The effect ends if the user is exposed to light or if they take damage from any source."
      },
      {
        "title": "Memory Distortion",
        "rules": "After three uses, the user experiences memory distortions that last until the next dawn. This effect can be mitigated by a successful Wisdom saving throw with a DC of 15; failure results in temporary amnesia affecting recent events."
      }
    ],
    "levelRequirementReason": "The Shard requires significant magical prowess to safely wield its ancient power.",
    "vendorReason": "Shadowfell's dark networks and arcane knowledge make it the only place capable of sourcing such a relic.",
    "shippingDetail": "The package is delivered via shadowy couriers known for their unpredictable arrival times, adding an element of risk to its transport.",
    "usage": {
      "activation": "Action",
      "duration": "10 rounds",
      "endsWhen": "Exposure to light or taking damage from any source",
      "charges": "3"
    },
    "priceReason": "Balanced at 1000 XP, considering its powerful effects and the risks involved with attunement.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-23T18:16:49.694107+00:00",
    "aiReviewedAt": "2026-07-23T18:16:49.694107+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_shroud_of_the_unseen": {
    "id": "shadowfell_shroud_of_the_unseen",
    "name": "Shroud of the Unseen",
    "description": "The Shroud of the Unseen is a cloak woven from the very fabric of the Shadowfell, its dark threads shimmering faintly in the dimmest light. When donned within a shadowed zone or darkness, it grants the wearer perfect concealment, blending seamlessly with the surrounding shadows. If used outside such zones, it leaves only an ephemeral trace—a wisp of shadow—revealing hidden enemies for mere moments before dissipating into thin air.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Perfect Concealment",
      "Reveal Hidden"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Perfect Concealment",
        "rules": "When activated within darkness or a shadowed zone, the Shroud of the Unseen grants the wearer complete concealment. This effect lasts until the wearer moves into daylight or leaves the shadowed area. The cloak expends one charge each time it is used."
      },
      {
        "title": "Reveal Hidden",
        "rules": "If worn outside a shadowed zone, the Shroud briefly reveals hidden enemies within 30 feet for 3 seconds before fading away. This effect can only be triggered once per short or long rest and has no save DC required."
      }
    ],
    "levelRequirementReason": "This cloak is designed to assist adventurers of all levels, allowing them to navigate shadowy environments with ease.",
    "vendorReason": "Shadowfell merchants specialize in goods that harness the power of the Shadowfell, making this cloak an ideal product for their inventory.",
    "shippingDetail": "The Shroud is delivered by Boo Spectral Mail, ensuring it arrives safely and swiftly through shadowy routes.",
    "usage": {
      "activation": "Action to don the cloak within a shadowed zone or darkness; passive concealment while worn in such conditions.",
      "duration": "Until wearer moves into daylight or leaves the shadowed area",
      "endsWhen": "Charges are expended or rest is completed",
      "charges": "Limited to 3 charges per day"
    },
    "priceReason": "The Shroud's balance lies in its utility for adventurers of all levels, offering significant tactical advantages without being overpowered.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-23T18:16:54.525183+00:00",
    "aiReviewedAt": "2026-07-23T18:16:54.525183+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_silence_essence": {
    "id": "shadowfell_silence_essence",
    "name": "Essence of the Silent Vault",
    "description": "The Essence of the Silent Vault is a small vial filled with a shimmering liquid that glows faintly with an ethereal blue hue. Crafted from the essence of a vampire who chose silence over vengeance, it allows its bearer to hear the whispers of the Shadowfell without being affected by them, and grants temporary immunity to psychic attacks. However, using this potent elixir clouds one's mind temporarily after consumption.",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Immunity to Psychic Attacks",
      "Hear Shadows"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Psychic Attacks",
        "rules": "The user gains temporary immunity to psychic attacks for 10 minutes. This effect can only be used once per long rest."
      },
      {
        "title": "Hear Shadows",
        "rules": "For the duration of its effectiveness, the user can hear whispers from the Shadowfell without being affected by them. This ability does not grant advantage on Wisdom (Perception) checks made to listen for sounds in the Shadowfell. The user remains unaffected if they succeed or fail a Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "This essence is potent but not overly powerful, suitable for lower-level characters who need immediate protection against psychic attacks.",
    "vendorReason": "Shadowfell vendors specialize in items related to their domain and the essence is a unique product from within their realm.",
    "shippingDetail": "Delivered by Lakitu drones, the essence arrives swiftly but may be subject to delays due to inclement weather or Shadowfell disturbances.",
    "usage": {
      "activation": "Instantaneous action when consumed",
      "duration": "10 minutes",
      "endsWhen": "Ends after its duration expires or if consumed again before the rest period ends",
      "charges": "Unlimited, but only one use per long rest"
    },
    "priceReason": "The essence is rare and crafted with vampire essence, making it a valuable and potent item for adventurers facing psychic threats.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:17:04.521747+00:00",
    "aiReviewedAt": "2026-07-23T18:17:04.521747+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_silken_haunting": {
    "id": "shadowfell_silken_haunting",
    "name": "Silken Haunting",
    "description": "Woven from the dreams of forgotten souls, Silken Haunting shimmers with an ethereal glow that dances in dim light, making the wearer nearly invisible to foes. The fabric itself seems alive, whispering secrets of the dead and causing enemies to hesitate before engaging, buying precious moments for stealthy maneuvers. Its sorrowful essence amplifies one's Stealth checks by +2, while its subtle shimmer grants a 15% chance to dodge attacks in low light.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stealth Amplifier",
      "Dodging Edge"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Stealth Amplifier",
        "rules": "The wearer gains a +2 bonus to Stealth checks. This effect is passive and does not require any action."
      },
      {
        "title": "Dodging Edge",
        "rules": "When the wearer is in dim light, they have advantage on Dexterity (Stealth) checks and gain a 15% chance to dodge attacks. This ability lasts until the start of their next turn after being first seen by an enemy."
      }
    ],
    "levelRequirementReason": "Woven from the dreams of forgotten souls, Silken Haunting requires a level 3 character to harness its ethereal power.",
    "vendorReason": "The Shadowfell is known for its necromantic and shadowy artifacts; it's fitting that they carry this haunting cloak.",
    "shippingDetail": "Due to the delicate nature of Silken Haunting, it must be shipped in specially designed protective cases to ensure safe delivery.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous; lasts until the start of the wearer's next turn after being first seen by an enemy.",
      "endsWhen": "The wearer steps out of dim light or is first seen by an enemy.",
      "charges": "Unlimited"
    },
    "priceReason": "Silken Haunting's unique properties and rarity justify its moderate price in the Shadowfell vendor network.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:17:59.665839+00:00",
    "aiReviewedAt": "2026-07-23T18:17:59.665839+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_silken_silence": {
    "id": "shadowfell_silken_silence",
    "name": "Silken Silence of the Unseen",
    "description": "The Silken Silence of the Unseen is a cloak spun from the forgotten whispers of ancient vampires. Its threads are so fine they shimmer in the dim light, and when donned, it muffles all ambient sounds within a 30-foot radius for 1 minute. In shadow zones, the wearer becomes fully invisible to sight, blending into the darkness with nary a glimmer of reflection. This ancient artifact is not just a tool of stealth; it also enhances the user's reflexes by granting +10% dodge chance in darkness.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Mutes ambient sound",
      "Becomes fully invisible in shadows"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ambient Noise Muffling",
        "rules": "Activates as a bonus action, muffles all ambient sounds within a 30-foot radius for 1 minute. Ends if the wearer takes any action other than moving or if the surrounding conditions change to non-shadow zones."
      },
      {
        "title": "Invisibility in Shadows",
        "rules": "Grants full invisibility in shadow zones as an instantaneous effect, lasting until the start of your next turn unless dispelled. Requires no action to activate but can be ended by direct light or any environmental change that disrupts shadows."
      }
    ],
    "levelRequirementReason": "The cloak's ancient magic is accessible to even low-level characters, as its primary function is stealth and subtlety rather than raw power.",
    "vendorReason": "Shadowfell vendors specialize in arcane and forgotten relics that bridge the gap between the living and the dead, making this item a perfect fit for their inventory.",
    "shippingDetail": "Delivered by the Void Drifter Relay, known for its swift and reliable service through shadowy realms.",
    "usage": {
      "activation": "Bonus action to activate ambient sound muffling; instantaneous use to become fully invisible in shadows.",
      "duration": "1 minute for sound muffling; ends when the effect is dispelled or conditions change out of a shadow zone.",
      "endsWhen": "Changes in light, taking any action other than moving, or direct exposure to light.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The cloak's ancient crafting and unique properties justify its price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:17:50.988916+00:00",
    "aiReviewedAt": "2026-07-23T18:17:50.988916+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_silken_sorrow": {
    "id": "shadowfell_silken_sorrow",
    "name": "Silken Sorrow Vial",
    "description": "A vial of shimmering, dark silk that pulses faintly with a sorrowful essence. This relic is said to be filled with the regrets of those who have been lost in the Shadowfell. Drinking it grants you empathy with the damned and the ability to perceive their pain. However, the vial also exposes you to visions of your own past transgressions, blurring the line between guilt and compassion. Not for the faint-hearted or the unprepared.",
    "price": 450,
    "icon": "🍸",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Empathy with the Damned",
      "Soul Echo Aura"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Empathy with the Damned",
        "rules": "For every hour you remain in contact with the vial, you gain a +5% bonus to your AC and can attempt to understand the motives of any creature within 30 feet. This effect is instantaneous upon contact but ends when you are no longer in contact with the vial for more than an hour."
      },
      {
        "title": "Soul Echo Aura",
        "rules": "You gain a minor fear aura that lasts for 1 minute and affects all creatures within 30 feet. The aura has a save DC of 12. Creatures can make a Wisdom saving throw to resist the effect. This effect is active as long as you are in contact with the vial, and it ends when you stop holding the vial."
      }
    ],
    "levelRequirementReason": "This item requires only level 1 to use due to its balanced effects.",
    "vendorReason": "The Shadowfell vendor is known for selling relics and artifacts with dark, powerful essences.",
    "shippingDetail": "Delivered by spectral messengers, this item arrives in a cloud of misty shadows, ensuring secrecy during transit.",
    "usage": {
      "activation": "Instantaneous when the vial is first held and remains active while being held.",
      "duration": "The effects last for an hour or until the vial is no longer held.",
      "endsWhen": "When you stop holding the vial for more than an hour, or if it is destroyed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the balance between its empathetic and fear-inducing effects.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T18:17:47.838838+00:00",
    "aiReviewedAt": "2026-07-23T18:17:47.838838+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_silken_soul_cloth": {
    "id": "shadowfell_silken_soul_cloth",
    "name": "Silken Soul Cloth",
    "description": "Woven from the dreams of the dead, this ethereal cloth shimmers with an otherworldly glow, absorbing ambient negativity and transforming it into raw energy. When worn in battle, it whispers a shield of sorrow that deflects harm, leaving only the faintest trace of its ethereal power behind after each use. It is said to have been crafted by the ancient weavers who dwell in the Shadowfell, whose touch imbues it with both protection and stealth.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs Ambient Negativity",
      "Stealth Enhancement"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Absorbs Ambient Negativity",
        "rules": "While wearing this cloth, you gain a +10 bonus to saving throws against negative energy damage. The cloth absorbs up to 25 points of negative energy each day before requiring rest and meditation for 8 hours to recover."
      },
      {
        "title": "Stealth Enhancement",
        "rules": "The wearer gains advantage on Dexterity (Stealth) checks while wearing this cloth. This effect lasts until the end of your next short or long rest."
      }
    ],
    "levelRequirementReason": "The weave of the cloth is delicate, requiring only a minimum level to ensure proper handling and protection.",
    "vendorReason": "The Shadowfell's weavers are known for crafting items that bridge the realms, making this cloth a natural addition to their wares.",
    "shippingDetail": "Ships via the Void Drifter Relay, ensuring safe and swift delivery from the far reaches of the Shadowfell.",
    "usage": {
      "activation": "Passive effect while wearing the cloth.",
      "duration": "Instantaneous absorption; lasts until end of rest period for recovery.",
      "endsWhen": "Requires a short or long rest to recover absorbed negative energy and stealth enhancement.",
      "charges": "Unlimited, but requires rest for full recovery."
    },
    "priceReason": "The cloth is crafted from rare materials and ancient techniques, balancing its power with a moderate price point.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-24T23:34:50.399363+00:00",
    "aiReviewedAt": "2026-07-24T23:34:50.399363+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_siphon_blade": {
    "id": "shadowfell_siphon_blade",
    "name": "Siphon Blade of the Void",
    "description": "The Siphon Blade of the Void is a dark, glowing blade forged from the essence of an Onyx Hand that fell in battle. Its edge pulses with stolen vitality, and each strike drains the enemy’s life force into the wielder's own body, enhancing their resilience in close combat. Crafted by shadowy forces, this weapon is both deadly and insidious, making it a favored tool for those who walk the path of darkness.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Drains Vitality",
      "Enhances Resilience"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Vitality Drain",
        "rules": "When the Siphon Blade strikes an enemy, it drains 10% of their hit points into the wielder's own health. This effect has a maximum duration of 1 minute per use and ends when the blade is removed from combat."
      },
      {
        "title": "Enhanced Resilience",
        "rules": "The wielder regenerates hit points at half their normal rate while in combat, but this effect is negated if they are not actively using the blade. This ability lasts until the end of the wielder's next turn after ceasing to use the blade."
      }
    ],
    "levelRequirementReason": "Only those with experience and discipline can master the Siphon Blade’s dark magic without succumbing to its influence.",
    "vendorReason": "The Shadowfell is known for its mastery of dark artifacts, making it a fitting vendor for this blade.",
    "shippingDetail": "Delivered by nightfall with strict secrecy to ensure the blade’s shadowed origins remain unknown.",
    "usage": {
      "activation": "As an action",
      "duration": "Instantaneous effect, duration of combat or until removed from use",
      "endsWhen": "Removed from combat or wielder stops using it",
      "charges": "Unlimited"
    },
    "priceReason": "The blade's rarity and dark craftsmanship justify its price, as it is a powerful tool for those who walk the path of darkness.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:18:14.333492+00:00",
    "aiReviewedAt": "2026-07-23T18:18:14.333492+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_soul_ash_pouch": {
    "id": "shadowfell_soul_ash_pouch",
    "name": "Pouch of the Ashen Soul",
    "description": "The Pouch of the Ashen Soul is a leather pouch imbued with the spectral essence of a fallen vampire, its dark threads woven from the very fabric of the Shadowfell. It allows the wearer to channel enemy soul damage into their own vitality, offering resilience in combat and granting an edge against the undead. This relic, crafted by shadowy forgers, offers +5% critical hit chance and restores 10% of max HP from soul-based attacks taken.",
    "price": 2300,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Soul Absorption",
      "Critical Edge"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Soul Absorption",
        "rules": "Activates as a reaction when the wearer takes damage from an undead or fiendish creature. Restores up to 10% of their maximum hit points, up to 2 times per short rest."
      },
      {
        "title": "Critical Edge",
        "rules": "+5% critical hit chance while wearing the pouch. This effect is always active as long as the pouch remains in possession."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to effectively utilize the pouch's abilities and survive its power.",
    "vendorReason": "The Shadowfell is home to the dark forges that create such powerful relics, and only those who traverse its depths can obtain such items.",
    "shippingDetail": "Delivered by Shy Guy Smugglers; arrival times vary but are typically within a week of purchase.",
    "usage": {
      "activation": "Reaction to enemy soul-based damage",
      "duration": "Instantaneous (restores hit points)",
      "endsWhen": "After 2 uses per short rest or when the wearer is no longer undead or fiendish",
      "charges": "Uses, up to 2 per short rest"
    },
    "priceReason": "Balanced at 1000 XP as it provides significant utility and a unique passive effect that enhances combat performance.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-23T18:18:17.571078+00:00",
    "aiReviewedAt": "2026-07-23T18:18:17.571078+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_soul_cage": {
    "id": "shadowfell_soul_cage",
    "name": "Soul Cage",
    "description": "The Soul Cage is a cursed amulet forged from the bones of the damned in the Shadowfell. It traps the essence of its wearer's enemies, siphoning their vitality to fuel dark magic. Wearing it grants you the power to drain an enemy’s life force for five seconds, but at the cost of your own stamina, reducing it by one third over the next three turns. If the target is undead, there is a chance that a shadowy echo will materialize nearby, haunting them for two additional rounds.",
    "price": 2300,
    "icon": "📦",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Siphons enemy's life force",
      "Reduces caster’s stamina"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Life Drain",
        "rules": "When activated as a bonus action, you drain the target creature’s hit points equal to half their maximum HP for 5 seconds. You must make a DC 15 Wisdom saving throw or be exhausted for 24 hours."
      },
      {
        "title": "Stamina Drain",
        "rules": "For the next three turns after successful activation, you are reduced to half your current stamina points, and you are exhausted at the end of each turn. This effect cannot be resisted with a saving throw."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Arcana to use effectively.",
    "vendorReason": "The Shadowfell vendors specialize in dark magic and cursed items.",
    "shippingDetail": "Ships via the Void Drifter Relay, ensuring safe delivery through the treacherous planes of the Shadowfell.",
    "usage": {
      "activation": "Bonus action to activate",
      "duration": "Instantaneous effect with a duration of 5 seconds",
      "endsWhen": "The target creature’s HP is drained or the caster is exhausted",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price considering the item's dark magic and cursed nature.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T18:18:26.003680+00:00",
    "aiReviewedAt": "2026-07-23T18:18:26.003680+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_soul_chime": {
    "id": "shadowfell_soul_chime",
    "name": "Soul Chime",
    "description": "The Soul Chime is a delicate crystal bell that glows with an eerie blue light. Crafted from the ancient bones of shadowfell creatures, it hums with the whispers of souls long lost to the dark realms. When struck, it summons a spectral guardian that dances around you, dealing necrotic damage and boosting your attacks for 10 seconds. The chime itself draws on your vitality, but the drained energy fuels its power, restoring a portion of your health after each use.",
    "price": 2300,
    "icon": "🎵",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Spectral Guardian Support",
      "Healing Drain"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spectral Guardian Support",
        "rules": "When activated as an action, this chime summons a spectral guardian that provides a damage boost to attacks made within 5 feet for 10 seconds. The guardian deals necrotic damage equal to your level + Constitution modifier to enemies within its range."
      },
      {
        "title": "Healing Drain",
        "rules": "After each time the chime is struck, you restore 3% of your maximum hit points. This effect does not stack and can only occur once per minute."
      }
    ],
    "levelRequirementReason": "This item requires a lower level to allow for more flexibility in party build options.",
    "vendorReason": "The chime's dark origins make it a fitting sale for the Shadowfell vendor, who specializes in such arcane artifacts.",
    "shippingDetail": "Due to its fragile nature and magical properties, the chime is carefully packed and shipped by Shy Guy Smugglers with a special delivery guarantee.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds (recharges after 5 minutes)",
      "endsWhen": "The spectral guardian dissipates or if you are incapacitated",
      "charges": "Unlimited, recharges after 5 minutes"
    },
    "priceReason": "The cost is adjusted to reflect the item's reduced level requirement and balanced effects.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T18:18:30.869409+00:00",
    "aiReviewedAt": "2026-07-23T18:18:30.869409+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_soul_coral_key": {
    "id": "shadowfell_soul_coral_key",
    "name": "Soul Coral Key",
    "description": "The Soul Coral Key gleams with a faint, sorrowful light, its coral surface etched with the faces of lost souls. Crafted by Noki Elders from the remnants of the Coral Fleet’s sunken ports, it opens hidden doors in the Shadowfell's depths but at a cost: each use saps vitality, reducing the wielder’s hit points by 1d4, and grants temporary stealth aid only when used in dark environments. This key is as much a relic of the past as it is a tool for navigating the treacherous waters of the Shadowfell.",
    "price": 2300,
    "icon": "🌊",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Sorrowsap Drain",
      "Stealth Aid"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Blooper Wetworks",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sorrowsap Drain",
        "rules": "Activates on use. Reduces the user's hit points by 1d4 until the start of their next turn. Ends when the key is used again or after one minute."
      },
      {
        "title": "Stealth Aid",
        "rules": "Passive effect while in a dark environment. Grants advantage on Stealth checks and increases the DC by 2 to detect the user's presence."
      }
    ],
    "levelRequirementReason": "This key requires no level, as it is an artifact of Noki Elders that anyone can use.",
    "vendorReason": "The Shadowfell vendor carries this item because it is a relic of the Coral Fleet, an ancient and respected entity in the region.",
    "shippingDetail": "Shipped expedited with special courier service ensuring safe delivery to the buyer.",
    "usage": {
      "activation": "Use as an action.",
      "duration": "Instantaneous, lasting until the start of your next turn or one minute after use, whichever comes first.",
      "endsWhen": "Reused or after one minute.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The key's rarity and magical properties justify its price in rare XP, making it a sought-after relic for adventurers seeking to explore the Shadowfell.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T18:18:34.397466+00:00",
    "aiReviewedAt": "2026-07-23T18:18:34.397466+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_soul_of_the_fallen_blood": {
    "id": "shadowfell_soul_of_the_fallen_blood",
    "name": "Soul of the Fallen Blood",
    "description": "A vial containing the essence of a vampire elder who died in a battle of shadows, this Soul of the Fallen Blood is said to have been crafted by dark artisans within the shadowy realms. When consumed, it infuses the user with dark charisma, making them an irresistible target for fear and dread among foes. The vial's crimson liquid pulses with ancient magic, granting temporary regeneration and a chance to dodge attacks, leaving one feeling both powerful and perilously exposed.",
    "price": 5700,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Regenerate Vitality",
      "Gain Dodging Advantage"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Regenerate Vitality",
        "rules": "Upon activation, the user regenerates 15 vitality over 10 seconds. This effect ends when used or if the user drops to 0 hit points."
      },
      {
        "title": "Gain Dodging Advantage",
        "rules": "For the duration of one short rest, the user gains a +10% chance to dodge attacks. This effect is lost after a long rest and cannot be stacked with similar abilities."
      }
    ],
    "levelRequirementReason": "This vial's dark magic requires a certain level of arcane knowledge to harness effectively.",
    "vendorReason": "Shadowfell, known for its expertise in dark artifacts and eldritch relics, offers this powerful item to those who dare venture into the shadowy realms.",
    "shippingDetail": "The vial is shipped discreetly via Shy Guy Smugglers, ensuring it arrives safely within a week of purchase.",
    "usage": {
      "activation": "Consume as a bonus action",
      "duration": "10 seconds for Regenerate Vitality; one short rest for Dodging Advantage",
      "endsWhen": "Used, dropped to 0 HP, or after a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from the essence of a fallen vampire elder, this vial commands a high price due to its rarity and potent magic.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-24T23:35:03.447147+00:00",
    "aiReviewedAt": "2026-07-24T23:35:03.447147+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_soul_shard": {
    "id": "shadowfell_soul_shard",
    "name": "Soul Shard of the Fallen Mirror",
    "description": "The Soul Shard of the Fallen Mirror is a jagged fragment of an ancient mirror, cracked and darkened by the corruption of the Shadowfell. Crafted from ethereal glass and bound with threads of shadow, it absorbs negative energy, channeling it into raw power. Wielders can harness this stolen darkness to bolster their defenses against evil forces, but at a steep cost to their sanity. Use with caution, for the shard's malevolent essence might turn any who wear it into its servitors.",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs Negative Energy",
      "Enhances Dark Magic"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Absorbs Negative Energy",
        "rules": "Activates as a bonus action. The user absorbs 500 negative energy points, dealing 1d6 necrotic damage to any creature that touches them within the next hour. This effect ends when the shard is removed or if the wearer sustains 250 negative energy points, whichever comes first."
      },
      {
        "title": "Enhances Dark Magic",
        "rules": "Grants +30% damage to all dark magic spells and abilities for 1 minute. The effect ends upon using this ability again or at the start of the user's next turn after absorbing negative energy."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 5 to handle the shard's raw power without succumbing to its corruption.",
    "vendorReason": "The Shadowfell is the origin of this artifact, and only those from within its domain can properly sell such items.",
    "shippingDetail": "Delivery via Lakitu Drone ensures the fragile shard arrives in pristine condition, though it must be handled with care upon arrival.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute",
      "endsWhen": "Effect ends on subsequent use or at the start of the next turn after absorbing negative energy",
      "charges": "Unlimited"
    },
    "priceReason": "The shard's rarity and the risk it poses to its wielder justify a price that reflects both its value and peril.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:18:43.485370+00:00",
    "aiReviewedAt": "2026-07-23T18:18:43.485370+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_soul_shard_of_peasley": {
    "id": "shadowfell_soul_shard_of_peasley",
    "name": "Soul Shard of Peasley",
    "description": "A shard of dark glass that glows with an eerie light, emanating the stolen essence of Prince Peasley. Crafted by Paratroopa Air and shipped from the Shadowfell, this relic is a potent tool for those who dare to challenge the Beanbean Kingdom's secrets. It grants resistance against fear effects and can be used to summon Peasley’s ghost when thrown into a mirror, causing 3d6 psychic damage to enemies who resist the trade offer.",
    "price": 37000,
    "icon": "🌑",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Resistance to Fear",
      "Summon Ghostly Prince"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Paratroopa Air",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resistance to Fear",
        "rules": "The bearer gains resistance to fear effects. This effect is passive and lasts for the duration of the short rest."
      },
      {
        "title": "Summons Ghostly Prince",
        "rules": "When thrown into a mirror, this shard summons Peasley’s ghost. The ghost deals 3d6 psychic damage to any enemy who resists trading their soul for diplomatic favors. This effect has a limited use per day and requires attunement."
      }
    ],
    "levelRequirementReason": "This item is designed for adventurers at the beginning of their journey, providing them with the tools they need to face challenges within the Beanbean Kingdom.",
    "vendorReason": "The Shadowfell vendor carries this item as it deals directly with the supernatural and dark magic prevalent in the region.",
    "shippingDetail": "Ships via Paratroopa Air express, ensuring quick delivery of this potent relic.",
    "usage": {
      "activation": "Special (requires attunement)",
      "duration": "Instantaneous and ongoing for the duration of a short rest or until dismissed by the user",
      "endsWhen": "Dismissed by the user or destroyed if thrown into a non-mirror reflective surface",
      "charges": "Unlimited, but requires attunement"
    },
    "priceReason": "This item is priced at 1000 XP due to its rarity and unique abilities that aid in facing fear and supernatural challenges.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T18:18:45.667744+00:00",
    "aiReviewedAt": "2026-07-23T18:18:45.667744+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_soul_shroud": {
    "id": "shadowfell_soul_shroud",
    "name": "Soul Shroud",
    "description": "The Soul Shroud is a spectral cloak woven from the lingering essence of the damned, its fabric shimmering with an eerie violet hue. This ethereal garment grants invisibility for 10 seconds and, when worn, siphons 10% of enemy health per second into your reserves over five rounds. The cloak's weave is so dense that it offers +10% evasion chance while active, making you a fleeting ghost in the shadows.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Siphon Life"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "The user becomes invisible for 10 seconds. Requires an action to activate. Ends when the duration expires or if the user takes damage."
      },
      {
        "title": "Siphon Life",
        "rules": "For 5 seconds, siphons 10% of enemy health per second into your reserves while you are within 30 feet of an enemy. Requires no action to activate but ends when the duration expires or if the user takes damage."
      }
    ],
    "levelRequirementReason": "Requires two levels to wield effectively, ensuring it is not overpowered for beginners.",
    "vendorReason": "The Shadowfell's dark artisans craft this ethereal item from the very essence of the damned, making it a fitting product for their store.",
    "shippingDetail": "Ships via Boo Spectral Mail within three days, ensuring the cloak arrives in perfect condition.",
    "usage": {
      "activation": "Action to activate invisibility; no action required for Siphon Life.",
      "duration": "10 seconds for Invisibility and 5 seconds for Siphon Life.",
      "endsWhen": "Duration expires or user takes damage.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's rare materials and powerful effects without overshadowing other gear.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:19:31.139752+00:00",
    "aiReviewedAt": "2026-07-23T18:19:31.139752+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_soul_siphon": {
    "id": "shadowfell_soul_siphon",
    "name": "Siphon of the Unseen Bloodline",
    "description": "The Siphon of the Unseen Bloodline is a vial crafted from the glass of ancient shadowfell crystals, imbued with the essence of forgotten souls. It allows you to drain a fraction of your vitality in exchange for potent damage boosts, echoing the pain of the soul into your very body. Each use grants +20% damage for 15 seconds at the cost of -15% of your hit points and a chance to instill fear in enemies around you.",
    "price": 2300,
    "icon": "💉",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "+20% damage for 15s",
      "Instill fear"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Bleeding Edge",
        "rules": "When used, the vial drains your hit points equal to 15% of your maximum HP. This effect provides a +20% damage bonus for 15 seconds against all attacks and spells made during its duration. The fear effect has a range of 30 feet and lasts until the start of your next turn."
      },
      {
        "title": "Echoing Terror",
        "rules": "There is a 30% chance that an enemy within 30 feet will be frightened for 1 minute on each use. The DC to save against this effect is equal to 8 + your proficiency bonus + half your level."
      }
    ],
    "levelRequirementReason": "This item requires a minimum of 4th level to ensure the user can handle its drain and combat effectiveness.",
    "vendorReason": "The Shadowfell vendors specialize in items that manipulate the dark energies of their domain, making this vial an appropriate addition to their inventory.",
    "shippingDetail": "Ships via Boo Spectral Mail, which ensures timely delivery through its spectral couriers.",
    "usage": {
      "activation": "A bonus action to activate",
      "duration": "15 seconds per use",
      "endsWhen": "The duration ends or you take damage",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "This price reflects the rare materials and dark magic used in its crafting, alongside its balanced combat utility.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T18:18:58.257244+00:00",
    "aiReviewedAt": "2026-07-23T18:18:58.257244+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_soul_siphon_cuff": {
    "id": "shadowfell_soul_siphon_cuff",
    "name": "Soul Siphon Cuff",
    "description": "The Soul Siphon Cuff is a blackened brass cuff that whispers the void into your very veins, siphoning vitality from foes and converting it to your own strength. This vessel of the void hums with dark energy, drawing sustenance from the life force of your enemies, granting you temporary resilience and power. When worn in battle, you feel like a conduit for the shadows themselves, their essence feeding your resolve until you are no longer just a vessel, but a walking void that drains foes dry.",
    "category": "equipment",
    "price": 5800,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Drains Vitality on Contact",
      "Sustaining Resilience"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Absorbs Vitality on Contact",
        "rules": "When you hit an enemy with a melee attack, the Soul Siphon Cuff absorbs 25% of their vitality as temporary hit points for yourself. This effect has no save DC and can be used once per turn."
      },
      {
        "title": "Restores Resilience",
        "rules": "At the start of your turn while wearing the cuff, you gain a number of temporary hit points equal to 10% of your maximum hit points. This effect occurs at the beginning of each of your turns and can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Stealth to effectively use the cuff's abilities without drawing unwanted attention.",
    "vendorReason": "The Shadowfell is known for its dark magic and necrotic energy, making it a fitting home for such an item.",
    "shippingDetail": "The cuff arrives wrapped in layers of shadow cloth to protect the wearer from premature activation during transit.",
    "usage": {
      "activation": "Instantaneous effect triggered by melee attacks on enemies.",
      "duration": "Instantaneous absorption and restoration effects; lasts until the start of your next turn.",
      "endsWhen": "The duration ends at the beginning of your next turn or when you remove the cuff from your arm.",
      "charges": "Unlimited, but requires a short rest to regain temporary hit points."
    },
    "priceReason": "Its rare materials and dark magic make it an expensive item, though its effects are balanced against other high-tier items.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-23T18:19:12.026445+00:00",
    "aiReviewedAt": "2026-07-23T18:19:12.026445+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_soul_siphon_harness": {
    "id": "shadowfell_soul_siphon_harness",
    "name": "Soul Siphon Harness",
    "description": "A dark leather harness imbued with shadowfell magic, the Soul Siphon Harness saps vitality from foes and aids in stealth. Crafted by the Onyx Hand in the depths of the Shadowfell, it whispers a sinister aura that can be felt for miles around. While wearing this harness, you gain +2 to Stealth checks, but beware—the dark essence it draws can cause 1d4 temporary hit point damage after continuous use for 30 seconds.",
    "category": "equipment",
    "price": 2300,
    "icon": "🩸",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Stealth Aid",
      "Life Drain"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Cheep Cheep Shipping",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Stealth Aid",
        "rules": "While wearing the Soul Siphon Harness, you gain a bonus to Stealth checks. This effect ends if you remove the harness or are incapacitated."
      },
      {
        "title": "Life Drain",
        "rules": "The harness saps 1d4 hit points from creatures within 30 feet of you at the start of your turn as long as it is active and you have not been incapacitated. This effect ends if you are incapacitated, or after 30 seconds of continuous use."
      }
    ],
    "levelRequirementReason": "This harness requires a character to be at least level 6 to effectively manage its dark energies.",
    "vendorReason": "The Shadowfell is the birthplace of this harness, and only those who understand its power can sell it.",
    "shippingDetail": "Ships via a shadowy courier that may require an additional night to deliver due to mysterious delays in the Shadowfell.",
    "usage": {
      "activation": "Passive while wearing, but requires attunement by a vampire or necromancer to function.",
      "duration": "Instantaneous; ends if you are incapacitated or after 30 seconds of continuous use.",
      "endsWhen": "Incapacitation or 30 seconds of continuous use.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted by the Onyx Hand, this rare harness commands a high price for its unique power and shadowfell origins.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T18:19:11.907935+00:00",
    "aiReviewedAt": "2026-07-23T18:19:11.907935+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_soul_siphon_pouch": {
    "id": "shadowfell_soul_siphon_pouch",
    "name": "Soul Siphon Pouch",
    "description": "The Soul Siphon Pouch, crafted from the inner skin of a forgotten vampire, weaves together necrotic magic and dark essence to restore vitality at the cost of one's own strength. When activated by a swift action, it heals you for half your maximum hit points but deals 20% damage to all nearby enemies on their next attack, causing them to stagger with necrotic energy for one turn. The pouch is a relic of the Shadowfell, whispering tales of vampire hunters and forgotten battles.",
    "price": 2300,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Siphons Life Essence",
      "Staggering Stab"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Siphons Life Essence",
        "rules": "Activates as a swift action. Restores half of the user's maximum hit points. Deals 20% damage to all nearby enemies on their next attack, causing them to stagger with necrotic energy for one turn. This effect ends if you are incapacitated or die."
      },
      {
        "title": "Staggering Stab",
        "rules": "Aimed at nearby enemies. Has a 20% chance per use to stagger an enemy for one turn, which includes the penalty of disadvantage on all attacks and ability checks until the end of their next turn. This effect ends if you are incapacitated or die."
      }
    ],
    "levelRequirementReason": "Designed for adventurers at the start of their journey who might find themselves in dire need of healing.",
    "vendorReason": "The Shadowfell vendor, known for its ancient relics and dark magic items, stocks this pouch as a reminder of the dangers lurking within the Shadowfell's depths.",
    "shippingDetail": "Delivered with special necrotic wards to protect against corruption during transit.",
    "usage": {
      "activation": "Swift action",
      "duration": "Instantaneous, ends if you are incapacitated or die",
      "endsWhen": "If you are incapacitated or die",
      "charges": "Unlimited"
    },
    "priceReason": "The pouch's rarity and the dark magic it contains justify its moderate price.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T18:20:24.987428+00:00",
    "aiReviewedAt": "2026-07-23T18:20:24.987428+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_soul_tether": {
    "id": "shadowfell_soul_tether",
    "name": "Soul Tether of the Crimson Veil",
    "description": "The Soul Tether of the Crimson Veil is a vial containing a swirling mass of shadowy essence, capturing the despair of slain foes. This vial binds the user to the dark energies it contains, granting a temporary psychic shield that repels hostile emotions and undead attacks. However, each use saps 10% of your vitality, reducing movement speed by 5%. The vial's power is derived from the Shadowfell itself, making it a rare artifact of the domain.",
    "price": 2300,
    "icon": "📦",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "+30% damage to undead targets",
      "Psychic Shield: Repels hostile emotions"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Psychic Shield",
        "rules": "You gain a +2 bonus to saving throws against psychic damage and being charmed. The shield lasts for 1 minute, but it ends if you take any damage or the duration expires."
      },
      {
        "title": "+30% Damage to Undead",
        "rules": "While the vial is active, your melee weapon attacks deal an additional +30% damage against undead creatures. This effect persists until the vial's duration ends."
      }
    ],
    "levelRequirementReason": "This soul tether requires minimal magical power to activate and can be used by a novice adventurer.",
    "vendorReason": "The Shadowfell is home to such dark artifacts, and the vendors there are well-acquainted with these items.",
    "shippingDetail": "Delivered via nightmarish courier, ensuring safe passage through the Dark Veil.",
    "usage": {
      "activation": "Object interaction to activate",
      "duration": "1 minute per use",
      "endsWhen": "You take damage or the duration expires",
      "charges": "Unlimited uses"
    },
    "priceReason": "The vial is crafted from rare Shadowfell essence, making it a valuable but not overpowered item.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T18:19:26.807019+00:00",
    "aiReviewedAt": "2026-07-23T18:19:26.807019+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_soulbound_chalice": {
    "id": "shadowfell_soulbound_chalice",
    "name": "Soulbound Chalice of the Hollow Throne",
    "description": "The Soulbound Chalice of the Hollow Throne is a macabre goblet forged from the very essence of the Shadowfell, its surface etched with runes that whisper of forgotten souls and lost desires. It siphons the life force of those who drink from it, granting the user control over spectral entities for fleeting moments but at the cost of their own soul's integrity. The chalice is said to have been crafted in the Hollow Throne itself by ancient necromancers seeking dominion over the dead.",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Spectral Control",
      "Shadowsteal"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Spectral Control",
        "rules": "As a bonus action, the wielder can command a spectral entity for up to one minute. The entity must be within line of sight and within 30 feet. Once used, the chalice requires a short rest to regain its power."
      },
      {
        "title": "Shadowsteal",
        "rules": "The chalice drains 1 soul point from the user's soul pool each time it is used for spectral control. If the user has no soul points left, the effect fails and the chalice cannot be used again until a long rest."
      }
    ],
    "levelRequirementReason": "The chalice requires significant magical energy to wield effectively and manipulate spectral entities.",
    "vendorReason": "The Shadowfell vendors are well-known for their dark wares, including items that tap into the Shadowfell’s power.",
    "shippingDetail": "The Void Drifter Relay ensures secure and swift delivery of high-risk goods through the treacherous planes of the Shadowfell.",
    "usage": {
      "activation": "Bonus action to command a spectral entity for up to one minute.",
      "duration": "Up to one minute per use.",
      "endsWhen": "The user loses control over the spectral entity or takes damage.",
      "charges": "Uses are limited by soul points."
    },
    "priceReason": "The chalice's price reflects its rare crafting material and the dark magic required to empower it.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:20:08.716243+00:00",
    "aiReviewedAt": "2026-07-23T18:20:08.716243+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_soulshard_catalyst": {
    "id": "shadowfell_soulshard_catalyst",
    "name": "Soulshard Catalyst",
    "description": "The Soulshard Catalyst is a jagged, pulsating fragment of shadowy essence, forged from the very heart of the Shadowfell. Its surface shimmers with an eerie light as it draws upon the last breaths of its victims to fuel dark magic. This relic amplifies curses and spells cast within shadowy zones, granting temporary invisibility to the caster for three seconds post-cast, at the cost of a soul essence from the targeted victim.",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% damage to curses and spells in shadowy zones",
      "Temporary invisibility for 3 seconds after casting"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Shadow Amplification",
        "rules": "When used within a shadowy zone, the Soulshard Catalyst amplifies any curse or spell cast by its wielder by +30%. This effect lasts until the end of the caster's next turn. The target must be in a shadowy zone for this to activate."
      },
      {
        "title": "Invisibility Boost",
        "rules": "After successfully casting a spell, the Soulshard Catalyst grants temporary invisibility to the caster for 3 seconds. This effect is limited to once per long rest and requires the target to be within a shadowy zone."
      }
    ],
    "levelRequirementReason": "The Soulshard Catalyst's dark magic demands a minimum of 5th level to wield, ensuring only those with experience in shadowy arts can safely handle its power.",
    "vendorReason": "The Shadowfell is the birthplace and repository of the Soulshard Catalyst, making it only fitting that this vendor sells such an item.",
    "shippingDetail": "The Void Drifter Relay ensures safe delivery through the treacherous planes, but the package must be opened in a shadowy zone to activate properly.",
    "usage": {
      "activation": "Action or bonus action to cast a spell within a shadowy zone.",
      "duration": "Instantaneous effect for Shadow Amplification and 3 seconds of invisibility.",
      "endsWhen": "The invisibility ends after its duration, or if the caster moves out of a shadowy zone before the duration ends.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "This item is rare and powerful, commanding a price that reflects both its rarity and the risks involved in using it.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:20:15.664862+00:00",
    "aiReviewedAt": "2026-07-23T18:20:15.664862+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_spectral_shroud": {
    "id": "shadowfell_spectral_shroud",
    "name": "Spectral Shroud of the Onyx Hand",
    "description": "The Spectral Shroud of the Onyx Hand is a dark, shifting veil made from the twisted essence of shadowfell energy. Crafted from the bones of ancient onyx dragons and imbued with necrotic magic, it conceals its wearer in an impenetrable cloak that renders them invisible to both sight and sound within 10 meters. When near enemies, the shroud gains a protective glow, offering the wearer +2 bonus to AC as long as they remain hidden from sight. The shroud glows faintly when hostile entities approach, alerting its user to danger.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility Cloak",
      "Necrotic Protection"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility Cloak",
        "rules": "The wearer of the Spectral Shroud becomes invisible to both sight and sound within a 10-meter radius. This effect lasts for an hour or until the wearer takes any action that provokes attacks of opportunity."
      },
      {
        "title": "Necrotic Protection",
        "rules": "While hidden from sight, the wearer gains +2 bonus to AC as long as they remain motionless and undetected. This effect ends if the wearer makes an attack or moves more than 5 feet."
      }
    ],
    "levelRequirementReason": "This shroud is designed for novice adventurers who need basic stealth capabilities.",
    "vendorReason": "The Shadowfell offers rare and exotic items crafted from the very essence of their realm, making it a fitting vendor for this powerful artifact.",
    "shippingDetail": "Delivery is swift but can be delayed by up to one week due to the item's fragile nature.",
    "usage": {
      "activation": "Instantaneous activation upon donning the shroud. Duration lasts for an hour or until the wearer takes any action that provokes attacks of opportunity.",
      "duration": "One hour or until the wearer takes actions that provoke attacks of opportunity",
      "endsWhen": "The wearer takes an action that provokes attacks of opportunity or moves more than 5 feet while hidden from sight.",
      "charges": "Unlimited, but recharges after a long rest."
    },
    "priceReason": "This item is moderately priced due to its rarity and the necrotic magic required for its crafting.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:19:48.718633+00:00",
    "aiReviewedAt": "2026-07-23T18:19:48.718633+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_spectral_tattoo": {
    "id": "shadowfell_spectral_tattoo",
    "name": "Ink of the Forgotten Veil",
    "description": "The Ink of the Forgotten Veil is a vial containing shadowy ink that, when applied to skin or parchment, weaves an ephemeral bond between the wielder and the Shadowfell’s secrets. It grants uncanny awareness of nearby undead and hidden portals, as if whispered by the very fabric of the realm. The ink's subtle glow hints at unseen horrors lurking just beyond the veil of reality, and its application leaves a faint, spectral tattoo that fades after use.",
    "price": 450,
    "icon": "🖋",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Psychic Awareness",
      "Reveals Hidden Spawns"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Psychic Awareness",
        "rules": "The user gains advantage on Wisdom (Perception) checks to sense undead creatures within 60 feet. This effect lasts for 1 hour and requires a short rest to recharge."
      },
      {
        "title": "Reveals Hidden Spawns",
        "rules": "For every minute the ink is active, the user can attempt an Intelligence (Arcana) check once per round to reveal hidden enemy spawn points within 30 feet. On a successful roll, they gain knowledge of the enemies' location and number."
      }
    ],
    "levelRequirementReason": "This ink is accessible to lower-level characters as it provides essential information for navigating Shadowfell territories.",
    "vendorReason": "The Shadowfell vendor is a master of arcane arts and knows the value of tools that aid in dealing with the realm's dangers.",
    "shippingDetail": "Ships via Boo Spectral Mail, ensuring safe delivery through the twisted pathways of the Shadowfell.",
    "usage": {
      "activation": "Apply to skin or parchment as an action.",
      "duration": "1 hour or until expended.",
      "endsWhen": "The ink fades after one hour or when used up.",
      "charges": "Unlimited, but requires a short rest for recharging."
    },
    "priceReason": "This ink's price reflects its rarity and the utility it provides in navigating Shadowfell dangers without exposing users to direct harm.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T18:20:13.913630+00:00",
    "aiReviewedAt": "2026-07-23T18:20:13.913630+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_tainted_essence": {
    "id": "shadowfell_tainted_essence",
    "name": "Tainted Essence of the Crimson Veil",
    "description": "The Tainted Essence of the Crimson Veil is a vial of corrupted blood that pulsates with dark magic, its crimson hue a testament to the shadows it commands. This vial amplifies your spellcasting power, but at the cost of your vitality; foes within reach feel its draining touch as you draw on their life force. Once used, the vial's effects weaken you for hours, a reminder of the dark pact you've made with the Veil itself.",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% Spell Damage",
      "Drains 1d6 Constitution per minute while active"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Spell Amplification",
        "rules": "Activates as a bonus action. The effect lasts until expended or the user drops to 0 hit points. For each spell cast, the caster drains 1d6 points of Constitution from a creature within 30 feet."
      },
      {
        "title": "Vitality Drain",
        "rules": "Lasts for 1 hour after activation. Each minute, the user loses 1d6 points of Constitution. This effect can be ended early by dropping to 0 hit points or by spending an action to discard the vial."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to prevent lower-level characters from succumbing to its dark magic easily.",
    "vendorReason": "Shadowfell's vendors often deal in such dark and corrupting items, procuring them directly from the Veil.",
    "shippingDetail": "The Tainted Essence is couriered with strict secrecy, as its use can be dangerous if intercepted by those who oppose the Veil.",
    "usage": {
      "activation": "Bonus action to activate; ends when the user drops to 0 hit points or chooses to end it early.",
      "duration": "Until expended or ended",
      "endsWhen": "User drops to 0 hit points or uses an action to discard the vial",
      "charges": "Unlimited, but ends on use"
    },
    "priceReason": "Reflects its rare nature and the dark magic it contains.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-25T15:08:57.008881+00:00",
    "aiReviewedAt": "2026-07-25T15:08:57.008881+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_talisman_of_rebirth": {
    "id": "shadowfell_talisman_of_rebirth",
    "name": "Talisman of Rebirth",
    "description": "The Talisman of Rebirth is a cracked, glowing artifact forged in the ruins of the Oracle’s lab. It whispers echoes of reincarnation and allows its wearer to relive cherished moments from their past. Each activation consumes one soul fragment from the user's memory, but it also strengthens the Oracle’s vessel with each soul bound. This relic can only be wielded by those who have felt the weight of lost memories.",
    "price": 2300,
    "icon": "🧬",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Memories Relived",
      "Soul Fragment Consumption"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Cheep Cheep Shipping",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Memories Relived",
        "rules": "When activated as a bonus action, the Talisman allows the user to relive a cherished memory. The effect is instantaneous and grants advantage on the next attack roll or saving throw before expiring."
      },
      {
        "title": "Soul Fragment Consumption",
        "rules": "Activating the Talisman costs 1 soul fragment from the user's memory. This can only be used once per day, and it cannot be used by non-magical beings."
      }
    ],
    "levelRequirementReason": "Requires a minimum of three levels to wield this relic effectively.",
    "vendorReason": "The Oracle’s vessel is the keeper of this talisman, ensuring its proper use and protection.",
    "shippingDetail": "Ships via Cheep Cheep Express, a reliable courier known for delivering fragile artifacts safely.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous effect; advantage on next attack roll or saving throw before expiring",
      "endsWhen": "Exhausts after one use per day",
      "charges": "Unlimited uses, but only one per day"
    },
    "priceReason": "Balanced at 1000 XP; the price reflects its rarity and the cost of crafting such a powerful memory relic.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T18:20:28.025723+00:00",
    "aiReviewedAt": "2026-07-23T18:20:28.025723+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_tattered_soul_satchel": {
    "id": "shadowfell_tattered_soul_satchel",
    "name": "Tattered Soul Satchel",
    "description": "The Tattered Soul Satchel is a weathered leather pouch, its surface cracked and sewn shut with dark threads that glow faintly under torchlight. This relic of the shadowy Fractured Atrium holds fragments of lost souls, each fragment whispering in the background as the satchel opens. It hums softly when unfastened, soothing psychic distress and amplifying empathy among those who wear it, allowing them to sense emotions around them more acutely.",
    "price": 2300,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+10% chance to resist psychic traps",
      "Empathic Resonance"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Psychic Distress Soothing",
        "rules": "When activated as an action, the Tattered Soul Satchel emits a soothing hum that grants advantage on saving throws against psychic damage and effects for 1 hour. This effect ends if the wearer takes damage from a psychic source or if they willingly remove the satchel."
      },
      {
        "title": "Empathic Resonance",
        "rules": "The satchel amplifies empathy, granting the wearer advantage on Insight checks to sense emotions within 30 feet for 1 hour. This effect ends when the wearer takes a short or long rest."
      }
    ],
    "levelRequirementReason": "Requires at least 2nd level to navigate the unstable corridors of the Fractured Atrium with this soul-filled satchel.",
    "vendorReason": "Shadowfell traders often encounter these relics in forgotten corners of their realm and sell them to those who seek a deeper connection with the astral plane.",
    "shippingDetail": "Shipped via fast courier drones, ensuring safe delivery within days from the depths of Shadowfell.",
    "usage": {
      "activation": "Activate as an action to soothe psychic distress and gain empathic resonance.",
      "duration": "1 hour for each effect.",
      "endsWhen": "Effect ends if the wearer takes damage from a psychic source or upon resting, whichever comes first; the satchel can be used once per short rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Tattered Soul Satchel's rarity and unique ability to soothe and amplify empathy make it a valuable tool for navigating the treacherous realms of the Fractured Atrium, justifying its moderate price in experience points.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-24T23:35:34.610797+00:00",
    "aiReviewedAt": "2026-07-24T23:35:34.610797+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_tear_of_the_void": {
    "id": "shadowfell_tear_of_the_void",
    "name": "Tear of the Void",
    "description": "The Tear of the Void is a shimmering shard that once belonged to the forsaken realms of the Shadowfell. Its surface weeps dark tears, whispering names of vanished souls and casting the wielder into the shadows. For a fleeting moment, the user becomes an ethereal specter, unseen by all but those who hunger for death. On contact with foes, it stirs a chilling dread that draws them closer, making them more susceptible to attacks.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Dread Aura"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "The user becomes invisible to all senses for 1 minute. This effect can be activated as a bonus action and ends early if the user drops below half their hit points."
      },
      {
        "title": "Dread Aura",
        "rules": "Enemies within 30 feet of the user must succeed on a DC 15 Wisdom saving throw or become frightened for 1 minute. This effect can be activated as an action, and it ends if the user moves more than 30 feet away from any hostile creature."
      }
    ],
    "levelRequirementReason": "The Tear of the Void's power is too great to be wielded by lower-level characters.",
    "vendorReason": "Only vendors who have ventured into the Shadowfell can offer such a relic from its depths.",
    "shippingDetail": "The courier service requires a special delivery permit and takes an additional hour to arrive, due to the mystical nature of the item.",
    "usage": {
      "activation": "Bonus action for Invisibility; Action for Dread Aura",
      "duration": "1 minute per activation",
      "endsWhen": "Ends early if the user drops below half their hit points or moves more than 30 feet away from a hostile creature",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "The item's rarity and unique properties justify its price in experience points.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:20:50.838612+00:00",
    "aiReviewedAt": "2026-07-23T18:20:50.838612+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_tongue_of_the_onyx_hand": {
    "id": "shadowfell_tongue_of_the_onyx_hand",
    "name": "Tongue of the Onyx Hand",
    "description": "The Tongue of the Onyx Hand is a cursed relic forged from the very bones of forgotten vampires in the Shadowfell. Its whispers are said to be the final words of those who have crossed into death's embrace. When activated, it restores your vitality with dark energy but at the cost of your mind, gradually eroding your sanity with each use. This artifact grants you a fleeting advantage against foes on their knees, increasing damage by 10% when they are critically injured.",
    "price": 2300,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Dark Energy Restore",
      "Enhanced Critical Damage"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dark Energy Restore",
        "rules": "Activates as a bonus action. Restores 200 hit points to the user. Each use reduces the user's Wisdom score by 1, with a maximum reduction of -5 before requiring an Intelligence saving throw (DC 14) or becoming incapacitated from madness."
      },
      {
        "title": "Enhanced Critical Damage",
        "rules": "Grants +20% damage against targets with 0 hit points. Lasts until the start of your next turn or until you use the Tongue again, whichever comes first."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to counterbalance the risk of using such an ancient and cursed relic.",
    "vendorReason": "The Shadowfell is home to dark magic and forgotten relics, making it a fitting place for this artifact.",
    "shippingDetail": "Due to the dangerous nature of the item, it must be shipped via Shy Guy Smugglers, known for their risky but reliable deliveries through treacherous terrains.",
    "usage": {
      "activation": "Bonus action to activate and use.",
      "duration": "Instantaneous effect when activated; ends when used again or if the user's Wisdom drops below 10.",
      "endsWhen": "The effect ends immediately if the user's Wisdom score is reduced by more than 5 points due to this item’s use.",
      "charges": "Unlimited, but with a -1 penalty on saving throws each time the Tongue of the Onyx Hand is used."
    },
    "priceReason": "The price reflects the relic's rarity and the risks involved in its possession.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T18:20:55.857540+00:00",
    "aiReviewedAt": "2026-07-23T18:20:55.857540+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_tongue_of_the_void": {
    "id": "shadowfell_tongue_of_the_void",
    "name": "Tongue of the Void",
    "description": "The Tongue of the Void is a jagged obsidian tongue that whispers secrets from the void, its surface etched with forgotten runes. Crafted by Paratroopa Air in the shadowy depths of the Underdark, it grants its wielder unparalleled stealth and the ability to uncover an enemy's weaknesses. Upon use, it causes temporary paranoia among those who hear its call, a curse that leaves them vulnerable for moments after. This ancient artifact whispers secrets to the undead, revealing their true nature and intentions.",
    "category": "equipment",
    "price": 450,
    "icon": "🗡",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Enhances Stealth",
      "Reveals Enemy Weaknesses"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Paratroopa Air",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Stealth",
        "rules": "The Tongue of the Void grants a +2 bonus to Dexterity (Stealth) checks for one hour after use. This effect requires an action to activate and can only be used once per long rest."
      },
      {
        "title": "Reveal Weaknesses",
        "rules": "When used in combat, the Tongue of the Void reveals a target's most significant weakness (as determined by the DM) within 30 feet. This effect is a bonus action and can only be used once per short rest."
      }
    ],
    "levelRequirementReason": "This artifact requires no specific level, as its power lies in its unique abilities rather than the user's proficiency.",
    "vendorReason": "The shadowy depths of the Underdark are known for their secrets and curiosities, making it a fitting place for such an ancient and mysterious item to originate from.",
    "shippingDetail": "Delivered by Paratroopa Air in a sealed, shadowed package, ensuring safe transport through the Underdark's treacherous paths.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "One hour for Stealth enhancement; Instantaneous effect for revealing weaknesses",
      "endsWhen": "Exhaustion from overuse; Ends after one long rest",
      "charges": "Unlimited, but requires a short rest to recover the reveal weakness ability"
    },
    "priceReason": "The Tongue of the Void's price reflects its unique and powerful abilities, making it a rare and valuable item in the realm.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T18:21:20.183477+00:00",
    "aiReviewedAt": "2026-07-23T18:21:20.183477+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampire_blade": {
    "id": "shadowfell_vampire_blade",
    "name": "Onyx Fang of the Veil",
    "description": "The Onyx Fang of the Veil is a wickedly sharp blade crafted from the shadowed bones of fallen vampires. Its dark, polished surface glistens with the essence of the dead, pulsing with necrotic energy that enhances its wielder's strikes against undead foes. Though it grants +20% damage against them and +10% chance to curse enemies on hit, it weakens defenses by -10% when under 50% health. Only those who walk the line between life and death can wield this weapon without peril.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% vs Undead",
      "-10% Defense (HP < 50%)"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Necrotic Strike",
        "rules": "When you hit a creature with this weapon, there is a +10% chance it is cursed. The target must succeed on a DC 14 Constitution saving throw or be under a curse until cured."
      },
      {
        "title": "Shadow Weakness",
        "rules": "While your hit points are below 50%, you have disadvantage on all defense rolls and take an additional -10% to your AC. This effect ends when you regain at least 50 hit points in a short rest."
      }
    ],
    "levelRequirementReason": "Requires a character of level 3 or higher to wield this weapon effectively.",
    "vendorReason": "The Shadowfell vendors specialize in items that deal with undead and necromancy, making the Onyx Fang of the Veil a natural addition to their offerings.",
    "shippingDetail": "Delivered via shadow courier, ensuring swift arrival for those who walk between life and death.",
    "usage": {
      "activation": "On hit with this weapon.",
      "duration": "Instantaneous; ends when the target successfully saves against the curse or regains at least 50 HP in a short rest.",
      "endsWhen": "The effect ends if the target successfully saves against the curse or regains at least 50 HP in a short rest.",
      "charges": "Unlimited, but requires concentration to maintain effects."
    },
    "priceReason": "Balanced price considering its necrotic abilities and the risk it poses even when wielded properly.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:21:10.957520+00:00",
    "aiReviewedAt": "2026-07-23T18:21:10.957520+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampire_bloodstone": {
    "id": "shadowfell_vampire_bloodstone",
    "name": "Bloodstone of the Crimson Veil",
    "description": "The Bloodstone of the Crimson Veil hums with an ancient, malevolent energy, its jagged obsidian facets reflecting flickering shadows that seem to dance in secret. Crafted from the essence of a long-forgotten vampire lord, this relic grants fleeting strength when activated but saps the wielder's sanity with each use, leaving them haunted by visions of the crimson veil that once cloaked their mind. Use it sparingly; beyond three activations, the stone drains more than just physical power—it erodes the very essence of your psyche.",
    "price": 2300,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Vampire Echo",
      "Sanity Drain"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Vampire Echo",
        "rules": "When activated as a bonus action, this bloodstone briefly mimics the target’s last attack. The mimicry grants you advantage on your next attack roll against the same target but only if the attack would have hit normally."
      },
      {
        "title": "Sanity Drain",
        "rules": "Each use of the Bloodstone of the Crimson Veil costs 10% of your maximum sanity, capping at three uses. Failure to save (DC 15) results in a -2 penalty to all Wisdom-based ability checks and saving throws for 1 minute."
      }
    ],
    "levelRequirementReason": "The Bloodstone's malevolent power requires a certain level of mental fortitude to wield effectively.",
    "vendorReason": "Only the shadow-wracked denizens of Shadowfell would dare to sell such an artifact, known for its dark secrets and treacherous allure.",
    "shippingDetail": "Ships via Pipe Express with a special delivery note warning of the stone's malevolent influence.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous effect; lasts until end of next turn for Vampire Echo, ends on the wielder if sanity is drained to zero",
      "endsWhen": "Activation ends when you use your last charge or when your sanity is fully drained after three uses.",
      "charges": "3 charges"
    },
    "priceReason": "The Bloodstone's rarity, dark magic, and limited uses justify its moderate price in experience points.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T18:21:41.374859+00:00",
    "aiReviewedAt": "2026-07-23T18:21:41.374859+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampire_crown": {
    "id": "shadowfell_vampire_crown",
    "name": "Crown of the Hollow King",
    "description": "The Crown of the Hollow King is a diadem forged from the bones of ancient vampires, its surface etched with runes that whisper secrets of the shadowy realm. Worn by those who dare to rule in darkness, it amplifies the wearer's charisma and grants them the ability to summon a spectral companion for one turn. This phantom ally not only fights alongside but also casts a fear effect on foes with negative hit points, striking their wills to dust.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+30% Charisma Bonus",
      "Spectral Companion"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "While wearing the Crown of the Hollow King, the wearer gains a +30 bonus to their Charisma checks and saves. This effect lasts until the end of their next turn."
      },
      {
        "title": "Spectral Companion",
        "rules": "Once per short or long rest, the wearer can summon a spectral companion for one turn. The companion is a Medium undead with 25 hit points, AC 16, and deals 4 (1d8 + charisma modifier) force damage on a successful melee attack. The companion has the ability to cast the Fear spell once per day."
      }
    ],
    "levelRequirementReason": "The Crown's dark magic requires a certain level of mastery over one’s own shadow.",
    "vendorReason": "Shadowfell vendors are known for their dealings with the dark, making this cursed regalia a fitting addition to their inventory.",
    "shippingDetail": "Due to the Crown’s shadowy nature, it must be transported under cover of night and delivered within three days or risk losing its potency.",
    "usage": {
      "activation": "Action",
      "duration": "One turn when summoned",
      "endsWhen": "The companion is destroyed or dismissed by the wearer",
      "charges": "1 per short or long rest"
    },
    "priceReason": "This cursed regalia requires significant dark magic to craft, balancing its powerful effects with a moderate price.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-23T18:21:47.033768+00:00",
    "aiReviewedAt": "2026-07-23T18:21:47.033768+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampire_eyes": {
    "id": "shadowfell_vampire_eyes",
    "name": "Vampiric Gaze of the Onyx Hand",
    "description": "The Vampiric Gaze of the Onyx Hand is a handcrafted relic from the depths of the Shadowfell, its surface etched with ancient runes that glow faintly. This artifact grants you temporary invisibility and enhances your ability to detect hidden foes, making it an invaluable tool for infiltrating the Purple Legion's lairs. The essence of the oldest vampires infuses this item, allowing you to strike unseen and uncover the locations of stealthy enemies.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Detect Hidden Enemies"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "You gain temporary invisibility for 10 seconds. You can use this ability once per long rest."
      },
      {
        "title": "Detect Hidden Enemies",
        "rules": "For the duration of your invisibility, you can reveal the location of hidden enemies on your map or within 30 feet using a bonus action. This effect does not provoke opportunity attacks and lasts as long as you are invisible."
      }
    ],
    "levelRequirementReason": "This relic is crafted to be accessible to beginning adventurers who need the edge in stealthy situations.",
    "vendorReason": "The Shadowfell has a deep connection with the artifacts of the ancient vampires, making it the most logical vendor for such an item.",
    "shippingDetail": "Delivered swiftly by Lakitu Drones, this item is typically shipped within one day from the Shadowfell's depths.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "10 seconds or until you are seen",
      "endsWhen": "You are seen, end of your next turn, or after 10 seconds",
      "charges": "Once per long rest"
    },
    "priceReason": "The price reflects the rare materials and ancient crafting required to imbue this relic with the essence of the Shadowfell.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:21:34.693344+00:00",
    "aiReviewedAt": "2026-07-23T18:21:34.693344+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampire_forged_glove": {
    "id": "shadowfell_vampire_forged_glove",
    "name": "Vampire Forged Glove of the Veil",
    "description": "The Vampire Forged Glove of the Veil is a pair of dark leather gloves adorned with intricate, glowing runes that whisper secrets of the shadow realm. Crafted by the Iron Legion, these gloves allow the wearer to phase through solid objects at will, leaving behind only a fleeting echo of their passage. The gloves also enhance one's movement in shadows, blending so seamlessly into the darkness that only those attuned to the night can perceive them.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Phase through solid objects",
      "Enhanced shadow movement"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Phase Through Solid Objects",
        "rules": "The gloves allow the wearer to phase through solid objects as an action. This ability has a range of 30 feet and lasts for 1 hour or until the user phases back, whichever comes first. The wearer must make a DC 15 Dexterity saving throw each time they use this ability; failure results in the glove absorbing one soul."
      },
      {
        "title": "Enhanced Shadow Movement",
        "rules": "The gloves grant a +30 bonus to Stealth checks made in shadowy conditions. This effect is passive and does not require any action from the wearer."
      }
    ],
    "levelRequirementReason": "Wielding these gloves requires a level of at least 5, as their dark magic demands a strong connection to the shadow realm.",
    "vendorReason": "The Iron Legion has established a partnership with the Shadowfell to supply these unique and powerful artifacts exclusively.",
    "shippingDetail": "Shipped via Lakitu Drones, delivery is expedited but requires a special night-time route through the Veil of Shadows, adding +10% to the delivery time.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour or until phased back",
      "endsWhen": "The user phases back into solid form or the effect expires after an hour",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The gloves are crafted from rare shadow leather and infused with powerful necromantic energies, making them a valuable but not overpowered addition to any adventurer's arsenal.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:21:55.019995+00:00",
    "aiReviewedAt": "2026-07-23T18:21:55.019995+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampire_heart_pendant": {
    "id": "shadowfell_vampire_heart_pendant",
    "name": "Vampire Heart Pendant",
    "description": "The Vampire Heart Pendant, a pulsating heart made of obsidian and shadow, is said to be crafted from the very essence of a fallen Onyx Hand vampire. This pendant grants its wearer a +2 bonus to Charisma checks and saves, as well as an eerie ability to influence minds with a single compelling word. It whispers secrets of the night to those who hear it, subtly swaying their wills in your favor.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Charisma Boost",
      "Mind Influence"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "When worn, the pendant grants a +2 bonus to Charisma checks and saving throws. This effect is always active while the pendant is worn."
      },
      {
        "title": "Mind Influence",
        "rules": "The wearer can use an action once per long rest to attempt to influence the will of one creature within 30 feet with a compelling word. The target must make a DC 15 Wisdom saving throw or be charmed for 1 hour."
      }
    ],
    "levelRequirementReason": "The pendant's supernatural influence requires a character to be at least level 2 to wield it effectively.",
    "vendorReason": "Shadowfell, known for its dark and mysterious wares, deals in this cursed artifact from the depths of the Onyx Hand domain.",
    "shippingDetail": "The pendant is shipped via the Void Drifter Relay, a courier service that ensures delivery through shadowy realms, arriving with a slight delay and an air of mystery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The target escapes the effect or ends its turn within range",
      "charges": "1 charge per long rest"
    },
    "priceReason": "Crafted from rare materials and infused with dark magic, this pendant's price reflects both its craftsmanship and the danger it poses.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-24T23:35:16.468600+00:00",
    "aiReviewedAt": "2026-07-24T23:35:16.468600+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampire_heart_vial": {
    "id": "shadowfell_vampire_heart_vial",
    "name": "Vampire Heart Vial",
    "description": "The Vampire Heart Vial contains the pulsing, dark essence of a fallen Onyx Hand vampire. Its glass vial hums with malevolent energy, and when activated, it infuses the wielder with vampiric vitality, granting regeneration that heals 20% health points every five seconds. The vial also projects a chilling aura around its user, which has a 30% chance to silence any enemy struck by their attacks, turning the battlefield against them.",
    "price": 2300,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Regenerates 20% HP per 5s",
      "Silences target on hit with 30% chance"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Vampiric Regeneration",
        "rules": "The user regenerates 20% of their health points every five seconds while the vial is active. This effect ends when the vial is expended or if the user takes any action that requires a bonus action."
      },
      {
        "title": "Silent Silence",
        "rules": "For every successful attack made against an enemy, there is a 30% chance to silence them for one round. This effect has no save DC and ends when the vial runs out of charges or if the user takes any action that requires a bonus action."
      }
    ],
    "levelRequirementReason": "The Vampire Heart Vial's dark magic is potent, requiring at least level 5 to wield its power without succumbing to its malevolent influence.",
    "vendorReason": "The Shadowfell's dark realm holds the secrets of the fallen Onyx Hand vampires, making them the rightful keepers and distributors of such a relic.",
    "shippingDetail": "Delivered by spectral couriers on nights under a new moon; delays are unpredictable due to shifting dimensions.",
    "usage": {
      "activation": "Uses as a bonus action, requiring the user to activate it manually before use.",
      "duration": "Lasts for one minute per charge, up to three charges total.",
      "endsWhen": "Exhausted after all charges are used or if the user takes any action that requires a bonus action.",
      "charges": "Has 3 uses, recharging on a short rest."
    },
    "priceReason": "The Vampire Heart Vial's rarity and the power it wields justify its moderate price tag of 1000 XP.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-24T23:35:46.956465+00:00",
    "aiReviewedAt": "2026-07-24T23:35:46.956465+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampire_horn": {
    "id": "shadowfell_vampire_horn",
    "name": "Horn of the Hollow Throne",
    "description": "The Horn of the Hollow Throne is a gnarled bone horn crafted from the remains of an ancient Onyx Hand, said to have died in battle against the shadowy forces of the Hollow Throne. When sounded, it summons a spectral phantom that howls and strikes with necrotic energy, dealing 300 damage to foes within a 20-foot radius. After the phantom is destroyed, the user's vitality is restored by 20 hit points.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Spectral Phantom",
      "Vitality Restoration"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Spectral Phantom",
        "rules": "When activated as a bonus action, this horn summons a spectral phantom that attacks all enemies within 20 feet for 300 necrotic damage. The phantom lasts for 10 seconds and deals an additional 50% damage to targets with less than 30% hit points remaining."
      },
      {
        "title": "Vitality Restoration",
        "rules": "After the spectral phantom is destroyed, the user gains 20 hit points as their vitality is restored. This effect can only occur once per long rest."
      }
    ],
    "levelRequirementReason": "The Horn of the Hollow Throne requires a minimum level to ensure it does not overwhelm lower-level characters.",
    "vendorReason": "As a vendor specializing in dark and arcane artifacts, Shadowfell is known for its extensive collection of items from forgotten realms like the Hollow Throne.",
    "shippingDetail": "The horn is delivered via Lakitu Drones, ensuring swift and secure transport through shadowy routes.",
    "usage": {
      "activation": "Bonus action to summon the spectral phantom.",
      "duration": "10 seconds duration for the summoned phantom.",
      "endsWhen": "Phantom is destroyed or after its time limit expires.",
      "charges": "Unlimited uses, but only one vitality restoration per long rest."
    },
    "priceReason": "The Horn of the Hollow Throne's price reflects its rare origin and powerful abilities within the realm of shadow magic.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-23T18:22:39.322377+00:00",
    "aiReviewedAt": "2026-07-23T18:22:39.322377+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampire_mantle": {
    "id": "shadowfell_vampire_mantle",
    "name": "Vampire Mantle of the Black Veil",
    "description": "The Vampire Mantle of the Black Veil is a cloak woven from the shadowed essence of a thousand Onyx Hands, crafted in the darkest reaches of the Shadowfell. It allows its wearer to phase through solid barriers for up to 5 seconds and summon fleeting phantoms that follow their command for 10 seconds, aiding in combat. The mantle whispers with ancient secrets, enhancing stealth and making the wearer nearly invisible when moving.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Phantom Phasing",
      "Phantom Companion"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Phantom Phasing",
        "rules": "As a bonus action, the wearer can phase through solid barriers for up to 5 seconds. This effect ends if the wearer moves more than 10 feet or interacts with an object. There is no save required; it simply ceases when conditions end."
      },
      {
        "title": "Phantom Companion",
        "rules": "As a bonus action, the wearer can summon a ghostly phantom that follows for up to 10 seconds. The phantom provides battlefield insight and assistance within this time frame but cannot attack or take actions outside of aiding its wearer. This effect requires no save."
      }
    ],
    "levelRequirementReason": "This mantle's shadows are deep; only those who have proven their worth at least to 6th level can wield it.",
    "vendorReason": "The Shadowfell is the mantle's origin, and the vendor there knows its secrets best.",
    "shippingDetail": "Due to the delicate nature of the mantle, it must be shipped via the Void Drifter Relay for safe delivery.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 5 seconds (Phantom Phasing), up to 10 seconds (Phantom Companion)",
      "endsWhen": "Ends when wearer moves more than 10 feet or interacts with an object, or upon dismissal by the wearer.",
      "charges": "Unlimited"
    },
    "priceReason": "This mantle's rarity and unique crafting process justify its fair value of 1000 XP.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T18:22:09.074601+00:00",
    "aiReviewedAt": "2026-07-23T18:22:09.074601+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampire_marrow": {
    "id": "shadowfell_vampire_marrow",
    "name": "Vampire Marrow",
    "description": "A vial of shimmering, darkened marrow extracted from a fallen vampire’s skeletal remains, it pulses with an eerie, otherworldly glow. When consumed during combat, this essence grants temporary vampiric regeneration and a chilling aura that weakens enemies’ morale, making them more susceptible to fear-based attacks. The marrow’s power is fleeting but potent, offering +2 on Will saves against fear effects and causing foes within 10 feet to roll failed morale checks (DC 15).",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Regenerates 1d4 hit points per turn",
      "Forces enemies to make a failed morale check (DC 15)"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporary Regeneration",
        "rules": "The user regains 1d4 hit points at the start of their next turn. This effect lasts for up to 3 rounds or until expended."
      },
      {
        "title": "Morale Weakness Aura",
        "rules": "For every creature within 10 feet, it must make a DC 15 Wisdom saving throw or become frightened and unable to move for the duration of the battle. This effect ends if the user takes damage or is reduced to 0 hit points."
      }
    ],
    "levelRequirementReason": "Requires at least level 3 to channel the essence safely.",
    "vendorReason": "The Shadowfell region holds many secrets and this vial is a product of its dark magic.",
    "shippingDetail": "Delivered with haste, but only at night to avoid detection by the living.",
    "usage": {
      "activation": "Consume during combat as a bonus action.",
      "duration": "Up to 3 rounds or until expended.",
      "endsWhen": "The user takes damage or is reduced to 0 hit points.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "Balanced as it provides potent temporary healing and morale suppression without being overpowered.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:22:35.000576+00:00",
    "aiReviewedAt": "2026-07-23T18:22:35.000576+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampire_scarf_of_wicked_sorrow": {
    "id": "shadowfell_vampire_scarf_of_wicked_sorrow",
    "name": "Scarf of Wicked Sorrow",
    "description": "The Scarf of Wicked Sorrow, woven from the loom of a forgotten vampire queen's tears, is a twisted fabric of sorrow and despair. It whispers tales of the damned as it drains the soul’s joy, granting temporary invincibility to undead foes while making the wearer more vulnerable to divine magic. This relic is said to have been crafted in the depths of the Shadowfell, where the very air hums with necrotic energy.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Undead Invulnerability",
      "Soul Drain on Touch"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Undead Invulnerability",
        "rules": "When worn by a creature, this scarf grants the wearer temporary invincibility to all undead attacks for 1 minute. The effect ends if the wearer is no longer wearing the scarf or if they take damage."
      },
      {
        "title": "Soul Drain on Touch",
        "rules": "Inflicts 10% soul drain on any creature touched by the scarf, reducing their Charisma score by 1d4 for 24 hours. The effect can be resisted with a successful DC 15 Constitution save."
      }
    ],
    "levelRequirementReason": "Crafted from dark magic and ancient lore, this item requires a minimum level of 3 to wield effectively.",
    "vendorReason": "The Shadowfell vendors are the only ones who dare handle such dark and dangerous relics, keeping them safe from misuse.",
    "shippingDetail": "Carefully packed and shipped under cover of night to ensure it arrives safely in its destination.",
    "usage": {
      "activation": "Passive effect when worn by the user.",
      "duration": "1 minute, or until removed or damaged.",
      "endsWhen": "The wearer takes damage or removes the scarf.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from dark magic and ancient lore, this item requires a minimum level of 3 to wield effectively.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:23:27.868038+00:00",
    "aiReviewedAt": "2026-07-23T18:23:27.868038+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampire_sight_lens": {
    "id": "shadowfell_vampire_sight_lens",
    "name": "Vampire Sight Lens",
    "description": "The Vampire Sight Lens is a mystic lens forged from shadow and moonlight, its surface etched with runes that hum faintly in the dark. When worn, it grants the wearer the uncanny ability to see through even the thickest shadows, revealing hidden foes lurking just out of sight. Paired with a weapon crafted from the bones of ancient vampires, this lens enhances the accuracy and damage of the wielder’s strikes, making every shadowy target a clear target.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Sees Through Shadows",
      "Enhances Shadow-Based Attacks"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Sees Through Shadows",
        "rules": "The wearer can see through shadows within a 15-foot radius, revealing hidden enemies. This effect lasts for 1 minute and ends if the user is exposed to bright light."
      },
      {
        "title": "Enhances Shadow-Based Attacks",
        "rules": "For every hour worn, the wearer's shadow-based attacks deal an additional +2d6 damage until expended or replaced. The lens can be recharged by spending a night in complete darkness."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to wield effectively due to its arcane and dark magic.",
    "vendorReason": "The shadowy realm of Shadowfell is the birthplace of this mystical lens, making it a natural fit for their wares.",
    "shippingDetail": "Delivered via Pipe Express's dark courier network, ensuring the lens arrives in perfect condition.",
    "usage": {
      "activation": "Activates as an action when worn and requires no further activation while active.",
      "duration": "1 minute or until exposed to bright light.",
      "endsWhen": "Exposure to bright light or after 10 minutes of inactivity.",
      "charges": "Recharges overnight in complete darkness; unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP, this lens is a rare treasure that enhances both stealth and combat effectiveness.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:23:33.939287+00:00",
    "aiReviewedAt": "2026-07-23T18:23:33.939287+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampire_silence": {
    "id": "shadowfell_vampire_silence",
    "name": "Whispering Veil of the Onyx Hand",
    "description": "The Whispering Veil of the Onyx Hand is a cloak spun from the breath and shadows of forgotten vampires, woven in the twilight of the Shadowfell. Its black fabric whispers secrets to the wearer's mind, muffling every sound and movement, rendering them as silent as the night itself. When donned, it transforms the bearer into an ethereal shadow, invisible not only to the eyes but also to the ears of foes who lack vampire senses.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Silent Step",
      "Shadowmeld"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Silent Step",
        "rules": "The wearer's noise and movement are reduced by 50%, making them nearly undetectable. This effect lasts for 1 minute upon activation, and it ends early if the wearer makes a sound or moves more than 30 feet."
      },
      {
        "title": "Shadowmeld",
        "rules": "The cloak grants the wearer temporary invisibility to foes who lack vampire senses. The invisibility persists until the wearer moves more than 15 feet, attacks, or casts a spell with verbal components. There is no save required against this effect."
      }
    ],
    "levelRequirementReason": "Requires at least third level to wield effectively in combat and stealth situations.",
    "vendorReason": "The Shadowfell's dark artisans understand the craft of crafting such items, perfect for those who traverse its treacherous realms.",
    "shippingDetail": "Ships via special vampire courier, ensuring safe and timely delivery to adventurers within the Shadowfell.",
    "usage": {
      "activation": "A bonus action is required to activate the cloak's effects.",
      "duration": "The effects last for a minute upon activation or until the wearer becomes visible.",
      "endsWhen": "The invisibility ends when the wearer moves more than 15 feet, attacks, casts verbal spells, or makes noise.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced at 1000 XP to ensure it's a sought-after but not overpowered item for adventurers of the appropriate level.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:23:14.331125+00:00",
    "aiReviewedAt": "2026-07-23T18:23:14.331125+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampire_siphon_tome": {
    "id": "shadowfell_vampire_siphon_tome",
    "name": "Siphon Tome of the Crimson Veil",
    "description": "The Siphon Tome of the Crimson Veil is a leather-bound tome adorned in blood-red silk and etched with runes that whisper forgotten names when opened. This cursed volume drains vitality from foes, leaving them weakened, while channeling the stolen energy into the reader's own health pool. The book was crafted by the rakasha clans to siphon the life force of undead enemies, making it a fearsome tool for those who walk in darkness.",
    "price": 2300,
    "icon": "📜",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Life Drain",
      "Undead Vulnerability"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Life Drain",
        "rules": "When activated as an action, this tome drains 10% of the target's maximum hit points. The effect ends when the tome is used again or the target is reduced to 0 hit points."
      },
      {
        "title": "Undead Vulnerability",
        "rules": "While holding the tome, you have advantage on damage rolls against undead creatures and deal an additional 50% damage to them. This effect persists until you finish a long rest or discard the tome."
      }
    ],
    "levelRequirementReason": "The Siphon Tome requires at least third-level proficiency to wield its dark magic effectively.",
    "vendorReason": "Shadowfell merchants are known for dealing in cursed and powerful relics, making this tome a natural fit for their inventory.",
    "shippingDetail": "The tome is delivered by rakasha messengers who ensure the secrecy of its contents. They require a week's notice to arrange safe transport.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Used again or when the target drops to 0 hit points",
      "charges": "Unlimited, but requires a short rest to recover any expended uses"
    },
    "priceReason": "The Siphon Tome is priced at 1000 XP due to its cursed nature and the rakasha's reputation for crafting such items.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T18:23:32.621063+00:00",
    "aiReviewedAt": "2026-07-23T18:23:32.621063+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampire_soul_core": {
    "id": "shadowfell_vampire_soul_core",
    "name": "Vampire Soul Core",
    "description": "The Vampire Soul Core, crafted from the heart of an ancient Onyx Hand vampire, whispers malevolent secrets in the dark. Wear it and feel its power channel the soul energy of your foes, granting you a brief immunity to damage while their essence fuels your attacks. This relic, once wielded by the undead, is now offered by the Shadowfell's own vendors, though only the most daring can afford this cursed artifact.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Soul Channeling",
      "Ethereal Shield"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Soul Channeling",
        "rules": "When activated as a bonus action, Soul Channeling allows you to channel the soul energy of your last foe attacked. For 3 seconds, you gain immunity to all damage. This effect ends if you take any damage or if you attack another target."
      },
      {
        "title": "Ethereal Shield",
        "rules": "For every second that Soul Channeling is active, you gain a +1 bonus to your AC and deal an additional 1d6 necrotic damage on melee attacks. This effect ends when the immunity to damage from Soul Channeling expires or if you take any damage."
      }
    ],
    "levelRequirementReason": "Only those who have proven their worth against powerful foes should wield this cursed artifact.",
    "vendorReason": "The Shadowfell's own vendors understand the allure of such dark magic and cater to adventurers willing to face its dangers.",
    "shippingDetail": "Ships via Pipe Express, known for their reliable delivery even in shadowy lands.",
    "usage": {
      "activation": "Bonus action: Channeling soul energy and gaining immunity to damage.",
      "duration": "3 seconds of immunity to all damage.",
      "endsWhen": "You take any damage or attack another target.",
      "charges": "Unlimited, but one use per short rest."
    },
    "priceReason": "The price reflects the item's rarity and the risks involved in obtaining it from the Shadowfell.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:23:42.489256+00:00",
    "aiReviewedAt": "2026-07-23T18:23:42.489256+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampire_soul_tome": {
    "id": "shadowfell_vampire_soul_tome",
    "name": "Vampire Soul Tome",
    "description": "The Vampire Soul Tome is a leather-bound tome, its pages dyed a deep crimson by the blood of fallen Onyx Hand vampires. It whispers of ancient horrors and forbidden knowledge, offering glimpses into the Shadowfell's darkest truths. When opened, it may tempt the reader with forbidden desires, but also grants temporary immunity to fear effects for 10 seconds and reveals hidden paths in Shadowfell dungeons. Use with caution; its power comes with a price.",
    "price": 2300,
    "icon": "📖",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Immunity to Fear",
      "Reveal Hidden Paths"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Fear",
        "rules": "When the tome is opened, the reader gains temporary immunity to fear effects for 10 seconds. This effect ends immediately if the reader takes any action other than reading or holding the tome."
      },
      {
        "title": "Reveal Hidden Paths",
        "rules": "The tome reveals hidden paths in Shadowfell dungeons that are otherwise invisible. The effect is instantaneous and provides a +2 bonus to Survival checks made within 50 feet for 1 minute, ending if the reader moves more than 30 feet away from the area."
      }
    ],
    "levelRequirementReason": "The tome's power can be overwhelming even to lower-level characters who have faced the Shadowfell.",
    "vendorReason": "The shadow-empowered denizens of the Shadowfell recognize its value and offer it for sale.",
    "shippingDetail": "Delivered by the Void Drifter, known for their timely but somewhat mysterious deliveries.",
    "usage": {
      "activation": "Activating the tome requires opening it and concentrating on the text for at least 1 minute.",
      "duration": "The immunity to fear lasts for 10 seconds, while the reveal hidden paths effect is instantaneous with a duration of 1 minute.",
      "endsWhen": "The effects end if the reader stops concentrating or takes any action other than reading or holding the tome.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Vampire Soul Tome is rare and offers potent Shadowfell-related abilities, making it a valuable but not overpowered addition to the player's arsenal.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-24T23:35:44.442429+00:00",
    "aiReviewedAt": "2026-07-24T23:35:44.442429+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampire_tattoo": {
    "id": "shadowfell_vampire_tattoo",
    "name": "Vampiric Ink of the Shadowfell",
    "description": "The Vampiric Ink of the Shadowfell, a dark tattoo that etches your soul into the veiled realms between life and death, whispers secrets in the shadows. It glows faintly under starlight, enhancing stealth within shadowy zones by +20% and granting regeneration at an accelerated rate—15 HP per second while hidden. With each application, there's a 10% chance to summon a fleeting phantom companion for 15 seconds, its spectral form aiding in covert missions or combat.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Stealth Boost",
      "Regeneration"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Stealth Boost",
        "rules": "Activates as a bonus action. Grants +20% stealth bonus within shadowy zones for 1 minute, ending early if the wearer steps out of darkness or is hit by an attack."
      },
      {
        "title": "Regeneration",
        "rules": "Passive effect while hidden in shadows. The tattoo regenerates 15 HP per second until either the wearer is no longer hidden from sight or sustained damage ends the regeneration."
      }
    ],
    "levelRequirementReason": "Requires at least 6th level to channel the dark energy of the Shadowfell without risk.",
    "vendorReason": "The tattoo is crafted by shadow mages from the depths of the Shadowfell, only sold through their own network.",
    "shippingDetail": "Delivered with special runes that preserve its potency. Delivery can take up to a week depending on Shadowfell weather.",
    "usage": {
      "activation": "Bonus action for stealth boost, passive while hidden.",
      "duration": "Stealth boost lasts 1 minute or until the wearer steps out of darkness or is hit by an attack; regeneration ends when the wearer is no longer hidden or takes damage.",
      "endsWhen": "The effects end as stated above.",
      "charges": "Unlimited, recharged at dawn."
    },
    "priceReason": "Balanced to reflect its rare crafting materials and unique abilities, maintaining a fair price relative to other rare items of similar utility.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T18:24:00.607711+00:00",
    "aiReviewedAt": "2026-07-23T18:24:00.607711+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampire_tongue": {
    "id": "shadowfell_vampire_tongue",
    "name": "Vampire Tongue of the Abyss",
    "description": "The Vampire Tongue of the Abyss is a gnarled organ encased in obsidian, dripping with shadows. It whispers secrets from the Shadowfell and binds the wills of the damned within its grasp. Inserted into the mouth, it grants the speaker fluency in the cryptic tongue of the abyssal realms and the power to command undead within 30 feet. Its touch is a curse, causing temporary paralysis among living creatures who resist its commands.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Fluent in Abyssal",
      "Command Undead"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Phantom Messenger",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Abyssal Fluent",
        "rules": "The user gains proficiency with the Persuasion skill and can speak fluently in Abyssal. This effect is passive."
      },
      {
        "title": "Undead Command",
        "rules": "The user can command undead within 30 feet as a bonus action, forcing them to perform one action of the user's choice. The target must succeed on a DC 15 Wisdom saving throw or be temporarily paralyzed for 10 seconds."
      }
    ],
    "levelRequirementReason": "Requires a character with at least three levels to wield its dark magic without risk.",
    "vendorReason": "The Shadowfell vendor is the only source of such arcane relics, as they are closely tied to the realm's dark magics.",
    "shippingDetail": "Ships via the Phantom Messenger, known for its reliable and swift delivery through the shadowy realms.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous effect; lasts until used or interrupted",
      "endsWhen": "The command ends when the undead successfully save or the user ceases to give commands",
      "charges": "Unlimited, but subject to the limits of the user's ability"
    },
    "priceReason": "Balanced at a price of 1000 XP, reflecting its rare nature and powerful abilities without overshadowing other items.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:23:48.236516+00:00",
    "aiReviewedAt": "2026-07-23T18:23:48.236516+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampire_tongue_ring": {
    "id": "shadowfell_vampire_tongue_ring",
    "name": "Tongue of the Unspoken Pact",
    "description": "The Tongue of the Unspoken Pact is a cursed ring forged from twisted Shadowfell obsidian, imbued with the whispers of ancient undead. Wield it and you become invisible to non-vampiric creatures for 10 seconds after each use—though at a cost, as your very voice echoes with secrets that can unsettle even the most seasoned adventurers. Rumors say its power was given by the very depths of the Shadowfell itself, making it a coveted yet dangerous relic among those who seek forbidden knowledge.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Invisibility to non-vampiric creatures",
      "Whispers Secrets"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "The wearer becomes invisible to all non-vampiric creatures for 10 seconds after each use. This effect ends early if the user takes any action other than moving quietly or if they are hit by an attack."
      },
      {
        "title": "Whispers Secrets",
        "rules": "For every hour you wear the ring, there is a +5% chance that your next spoken sentence to an enemy reveals a hidden path or secret. This effect has no save DC and does not require any action from the user."
      }
    ],
    "levelRequirementReason": "The curse of the Shadowfell can be wielded by even the most novice adventurers, making it accessible to all who seek forbidden knowledge.",
    "vendorReason": "Shadowfell traders often travel deep into the Shadowfell to acquire such relics for those seeking power and secrets.",
    "shippingDetail": "Due to its cursed nature, this item is only delivered via Shy Guy Smugglers, who ensure it reaches its destination safely but under strict secrecy.",
    "usage": {
      "activation": "Instantaneous action",
      "duration": "10 seconds",
      "endsWhen": "Worn on the ring finger and used as an instantaneous action. Ends early if the user takes any action other than moving quietly or is hit by an attack.",
      "charges": "Unlimited, but only usable once per long rest."
    },
    "priceReason": "The price reflects its cursed nature and the dangerous power it grants, making it a valuable yet potentially deadly relic for those who seek forbidden knowledge.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T18:24:21.773559+00:00",
    "aiReviewedAt": "2026-07-23T18:24:21.773559+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampire_tongue_treaty": {
    "id": "shadowfell_vampire_tongue_treaty",
    "name": "Vampire Tongue Treaty",
    "description": "The Vampire Tongue Treaty is a tattered, bloodstained scroll adorned with sigils of the Onyx Hand. Sealed in the pact is the very essence of vampiric power, allowing you to command shadow and restore vitality at the cost of your soul's freedom. For ten seconds after activation, you gain 20% increased movement speed while invisible, and you can exert a subtle influence over nearby enemies, causing them to weaken for five seconds. Use it wisely, for the dark may claim you in exchange.",
    "price": 2300,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Shadow Command",
      "Soulbound Vampirism"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shady Courier Service",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Shadow Command",
        "rules": "As a bonus action, activate to command shadows within a 10-foot radius. For five seconds, enemies within the area become slightly weaker, taking an additional 5% damage from all sources."
      },
      {
        "title": "Soulbound Vampirism",
        "rules": "Upon activation, you restore 300 hit points over ten seconds and gain a +2 bonus to Dexterity (Stealth) checks for the duration of the effect. Your soul becomes bound to the scroll, and after three uses, your next successful Stealth check has disadvantage."
      }
    ],
    "levelRequirementReason": "Requires at least fifth level to handle the dark pact without risk.",
    "vendorReason": "The Shadowfell is known for its necromantic and shadowy artifacts, and this item's origin aligns with their expertise.",
    "shippingDetail": "Delivered via a shadow courier; arrive at night to avoid detection.",
    "usage": {
      "activation": "Bonus action",
      "duration": "10 seconds",
      "endsWhen": "Ends when the duration expires or you are incapacitated",
      "charges": "3 uses before your next successful Stealth check has disadvantage"
    },
    "priceReason": "Balanced to be a rare, powerful item that requires significant investment but is not overpowered.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T18:24:42.861708+00:00",
    "aiReviewedAt": "2026-07-23T18:24:42.861708+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampire_vault_key": {
    "id": "shadowfell_vampire_vault_key",
    "name": "Vault Key of the Crimson Throat",
    "description": "The Vault Key of the Crimson Throat, forged from the bones of forgotten vampires and the iron wills of the Shadowfell, opens ancient vaults sealed by dark magic. With each use, a fragment of your soul is consumed, granting access to rare treasures but leaving behind a lingering shadow of despair. This key not only unlocks hidden caches but also offers a 10% chance of finding an additional, unforeseen bonus item within the vault's depths.",
    "price": 2300,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Vault Access",
      "Soul Cost"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vault Access",
        "rules": "This key allows you to open a hidden vault for 10 minutes. The effect ends when the time expires or if you use an action to close it early."
      },
      {
        "title": "Soul Cost",
        "rules": "Each use of this key consumes one soul fragment, representing the dark pact made with the Shadowfell. If your soul fragments drop below a certain threshold, the key becomes inert until you restore them through ritual means."
      }
    ],
    "levelRequirementReason": "The key's dark magic and hidden dangers make it accessible to even low-level adventurers who are willing to face its risks.",
    "vendorReason": "The Shadowfell, known for its enigmatic treasures and malevolent forces, is the only place where such a cursed artifact can be found and sold.",
    "shippingDetail": "Due to the key's arcane nature, it must be shipped within a lead-sealed container to prevent premature unlocking of vaults.",
    "usage": {
      "activation": "A standard action is required to activate the key and open the vault.",
      "duration": "The effect lasts for 10 minutes unless closed early.",
      "endsWhen": "The duration ends when time expires or you close the vault with an action.",
      "charges": "Unlimited uses, but each use costs one soul fragment."
    },
    "priceReason": "The key's rarity and the risk involved in using it justify its moderate price of 1000 XP.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T18:24:27.421529+00:00",
    "aiReviewedAt": "2026-07-23T18:24:27.421529+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampire_venom_blade": {
    "id": "shadowfell_vampire_venom_blade",
    "name": "Vampire Venom Blade",
    "description": "The Vampire Venom Blade is a razor-edged dagger forged from the bone of an Onyx Hand found in the Shadowfell. Its glowing, spectral edge whispers secrets of the dead and corrupts enemy willpower. When drawn, it hums with malevolent energy, dealing psychic damage to foes within reach while also corrupting their minds, reducing their movement speed by 10%. The blade's whispering glow intensifies in darkness, revealing hidden truths of the undead.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Psychic Damage",
      "Mind Corruption"
    ],
    "vendor": "Shadowfell",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Psychic Damage",
        "rules": "When the Vampire Venom Blade strikes an enemy with at least 2 hit points remaining, it deals an additional 1d6 psychic damage. This effect is instantaneous and does not require a separate action."
      },
      {
        "title": "Mind Corruption",
        "rules": "The blade applies a 'Mind Rot' debuff to the target, reducing their movement speed by 10% for 1 minute. The debuff ends if the target takes damage or upon the expiration of its duration. There is no saving throw against this effect."
      }
    ],
    "levelRequirementReason": "The blade's malevolent energy and corrupting abilities require a character of at least level 5 to wield without risk.",
    "vendorReason": "Only the Shadowfell vendor can offer such dark artifacts forged from fallen Onyx Hands.",
    "shippingDetail": "Delivered with Pipe Express within a sealed, enchanted container to preserve its sinister nature.",
    "usage": {
      "activation": "Instantaneous on contact or strike",
      "duration": "Until the target takes damage or for 1 minute, whichever comes first",
      "endsWhen": "Target takes damage or after 1 minute",
      "charges": "Unlimited"
    },
    "priceReason": "The blade's rarity and dark magic make it a valuable, yet balanced purchase for any adventurer.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-24T23:35:49.227223+00:00",
    "aiReviewedAt": "2026-07-24T23:35:49.227223+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampiric_blade": {
    "id": "shadowfell_vampiric_blade",
    "name": "Onyx Fang",
    "description": "The Onyx Fang is a serrated blade forged from the essence of a fallen vampire lord. Its dark onyx surface glows faintly in the dark, and its sharp edges are said to drain vitality from foes with each strike. This weapon is perfect for stealthy assassins operating deep within the Shadowfell’s crypts, where it can deal 200% extra damage against undead foes and apply a bleeding effect that lasts for three turns upon a successful hit.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Undead Weakness",
      "Bleeding Strike"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Undead Weakness",
        "rules": "When the Onyx Fang deals damage to an undead foe, it inflicts an additional 200% damage. This effect is not subject to saving throws."
      },
      {
        "title": "Bleeding Strike",
        "rules": "Upon hitting a target with the Onyx Fang, the weapon applies the bleeding condition for three turns. A successful DC 15 Constitution save ends this effect early."
      }
    ],
    "levelRequirementReason": "The Onyx Fang's unique properties require a proficient user with at least three levels of experience.",
    "vendorReason": "The Shadowfell vendor is well-known for dealing in the dark magic and artifacts from their domain, including this vampiric blade.",
    "shippingDetail": "Due to the sensitive nature of the Onyx Fang's materials, it ships via the Void Drifter Relay, ensuring timely and safe delivery.",
    "usage": {
      "activation": "Melee Weapon Attack",
      "duration": "Instantaneous",
      "endsWhen": "Charges are expended upon a successful hit or when the weapon is sheathed.",
      "charges": "Unlimited"
    },
    "priceReason": "The Onyx Fang's rarity and unique undead-fighting properties justify its fair value of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:24:40.234970+00:00",
    "aiReviewedAt": "2026-07-23T18:24:40.234970+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampiric_blood_tap": {
    "id": "shadowfell_vampiric_blood_tap",
    "name": "Vampiric Blood Tap",
    "description": "The Vampiric Blood Tap is a vial of ancient, glowing crimson blood extracted from the heart of a shadowfell vampire. Its power lies in its ability to restore health and grant temporary vampiric regeneration, making it a treasured relic among those who seek to harness dark magic. When injected, it not only heals 200 hit points but also grants you +20% regeneration for thirty seconds, allowing you to recover lost vitality at an accelerated rate.",
    "price": 2300,
    "icon": "💉",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Restore Health",
      "Regeneration Boost"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Phantom Express Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Health Restoration",
        "rules": "When consumed as a bonus action, the Vampiric Blood Tap restores 200 hit points. The effect is instantaneous and does not require any saving throw."
      },
      {
        "title": "Regeneration Boost",
        "rules": "+20% regeneration rate for thirty seconds after consuming the Vampiric Blood Tap. This effect ends when you take damage, or if it expires due to time passing."
      }
    ],
    "levelRequirementReason": "The Vampiric Blood Tap is accessible to all characters, as its power lies in its dark magic rather than high-level proficiency.",
    "vendorReason": "The Shadowfell is home to ancient vampires and arcane secrets, making it the prime supplier of such relics.",
    "shippingDetail": "Delivered by spectral couriers within three days of purchase. The package arrives in a shadowy envelope marked with an ominous red cross.",
    "usage": {
      "activation": "Consumed as a bonus action.",
      "duration": "Instantaneous health restoration; +20% regeneration lasts for thirty seconds.",
      "endsWhen": "The effect ends when you take damage or after thirty seconds, whichever comes first.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The Vampiric Blood Tap's price reflects its rare extraction process and the dark magic required to preserve it.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T18:25:49.317641+00:00",
    "aiReviewedAt": "2026-07-23T18:25:49.317641+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampiric_bloodstone": {
    "id": "shadowfell_vampiric_bloodstone",
    "name": "Vampiric Bloodstone",
    "description": "The Vampiric Bloodstone is a pulsating obsidian crystal, once part of an ancient Onyx Hand vampire's heart. Its dark luster flickers as it draws vitality from foes, healing its bearer with each life it drains. The stone's glow grows dimmer with each soul consumed, but the wearer feels invigorated until its power fades to nothing. Worn by those who seek both strength and a legacy of fear in battle.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Vampiric Drain",
      "Healing Glow"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Vampiric Drain",
        "rules": "When the wearer successfully hits an enemy with a melee attack, it drains vitality from the target. The target takes 10d6 necrotic damage and is reduced by 25% in Strength for 1 minute. The stone regenerates 5 hit points per second for the wearer while enemies are within 10 feet."
      },
      {
        "title": "Healing Glow",
        "rules": "The bloodstone's glow intensifies when it has consumed enough souls, providing a +2 bonus to all saving throws until its power fades. Once depleted, the stone must recharge for an hour before it can be worn again."
      }
    ],
    "levelRequirementReason": "Requires at least level 5 to wield effectively and channel its dark energy.",
    "vendorReason": "Shadowfell vendors specialize in rare, cursed artifacts that empower or corrupt those who dare use them.",
    "shippingDetail": "Delivered by Shy Guy Smugglers, known for their unreliable but always on-time delivery.",
    "usage": {
      "activation": "Activates with a successful melee attack.",
      "duration": "Until the end of the wearer's next turn or until depleted.",
      "endsWhen": "The bloodstone is removed from the wearer or its power fades upon consuming enough souls.",
      "charges": "Unlimited, but must recharge for an hour after each use."
    },
    "priceReason": "Balanced at 1000 XP to reflect a rare, powerful item that requires careful handling and is not overpowered in combat.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:25:12.480613+00:00",
    "aiReviewedAt": "2026-07-23T18:25:12.480613+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampiric_cloak_of_silence": {
    "id": "shadowfell_vampiric_cloak_of_silence",
    "name": "Vampiric Cloak of Silence",
    "description": "Woven from the breath of the dead, this cloak muffles all sound and renders its wearer invisible to non-vampiric senses. In combat, it siphons ambient magic to cast minor illusions that whisper secrets only to the caster's allies. The fabric itself glows faintly with an eerie violet hue, hinting at its otherworldly origins. This relic is a rare find, crafted by necromancers in the Shadowfell and known for its ethereal properties.",
    "category": "equipment",
    "price": 2300,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+15% chance to silence enemy spells",
      "Invisibility to non-vampiric senses during combat"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Silence Enemy Spells",
        "rules": "When the wearer casts a spell, there is a +15% chance that any enemy spells cast at them are silenced. This effect has no save DC and does not consume charges or recharges."
      },
      {
        "title": "Invisibility to Non-Vampiric Senses",
        "rules": "The cloak renders the wearer invisible to all senses except those of vampires. The invisibility is passive but only active during combat. This effect lasts until a successful attack lands on the wearer or the wearer takes damage."
      }
    ],
    "levelRequirementReason": "This cloak requires high arcane knowledge and control to wield effectively, necessitating at least 6th level for proficiency.",
    "vendorReason": "The Shadowfell is the birthplace of this garment, where only those who understand its dark magic can craft such a relic.",
    "shippingDetail": "Due to the sensitive nature of the cloak's components, it must be shipped under strict conditions to prevent damage or exposure.",
    "usage": {
      "activation": "Passive effect during combat",
      "duration": "Instantaneous; lasts until a successful hit or damage is taken",
      "endsWhen": "A successful attack lands on the wearer or they take damage",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from rare materials and dark magic, this cloak is valued for its unique abilities and rarity.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-23T18:25:00.059483+00:00",
    "aiReviewedAt": "2026-07-23T18:25:00.059483+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampiric_crimson_core": {
    "id": "shadowfell_vampiric_crimson_core",
    "name": "Vampiric Crimson Core",
    "description": "The Vampiric Crimson Core is a corrupted heart of shadow and life, pulsating with malevolent energy. Crafted from the essence of a vampire's dark soul, it fuels the user’s vampiric aura, converting their very presence into a living shadow. This core enhances one's melee attacks by 30%, making them strike like a living weapon of darkness. Enemies within a ten-foot radius feel its hunger, suffering from a 20% reduction in their resistance to shadow damage.",
    "price": 2300,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Corrupted Heart",
      "Shadow Hunger"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Corrupted Heart",
        "rules": "The user regains 15 hit points per second while the core is active. This effect ends when the user takes damage, after one minute of inactivity, or if the core's charges are depleted."
      },
      {
        "title": "Shadow Hunger",
        "rules": "Enemies within ten feet of the user suffer a -20% penalty to their resistance against shadow damage for the duration of the core’s activation. This effect ends when the core is destroyed, expended, or if the user takes damage."
      }
    ],
    "levelRequirementReason": "This core requires significant control over vampiric magic and a deep understanding of dark energies.",
    "vendorReason": "The Shadowfell is home to the undead, making it the natural supplier for such an item.",
    "shippingDetail": "Ships directly from the Shadowfell, arriving in a week or less.",
    "usage": {
      "activation": "Activates as a bonus action.",
      "duration": "One minute per use.",
      "endsWhen": "The user takes damage, after one minute of inactivity, or if the core's charges are depleted.",
      "charges": "Limited to 3 uses before requiring recharging."
    },
    "priceReason": "This item is crafted from rare materials and requires specialized knowledge to use effectively.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-23T18:25:15.156852+00:00",
    "aiReviewedAt": "2026-07-23T18:25:15.156852+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampiric_crimson_scepter": {
    "id": "shadowfell_vampiric_crimson_scepter",
    "name": "Vampiric Crimson Scepter",
    "description": "The Vampiric Crimson Scepter is a ceremonial staff forged from the bones of ancient shadows and drenched in the stolen blood of the damned. With each swing, it calls forth ephemeral portals that consume light and life, dragging foes into the void. The scepter's wielder gains dark affinity, dealing an additional 15% damage to shadow-based attacks, but at a steep cost: they must sacrifice 20% of their hit points with every use.",
    "category": "equipment",
    "price": 2300,
    "icon": "🕯",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Shadow Portal",
      "Dark Affinity"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shadow Portal",
        "rules": "Activates as an action, creating a portal that teleports enemies into the shadow realm for 10 seconds. The portal has a 15-second cooldown and can only target one creature per use."
      },
      {
        "title": "Dark Affinity",
        "rules": "Grants +15% bonus damage to all attacks dealing shadow-based damage, but consumes 20% of the wielder's hit points each time it is used. This effect lasts until the start of the wielder’s next turn."
      }
    ],
    "levelRequirementReason": "Requires at least third-level proficiency to control such dark magic.",
    "vendorReason": "The Shadowfell is a realm where darkness and shadow are ever-present, making it the natural home for such artifacts.",
    "shippingDetail": "Delivered via spectral courier, ensuring safe passage through the foulest of places.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous; lasts until end of next turn",
      "endsWhen": "The effect ends on the wielder's next turn or when they take damage.",
      "charges": "Unlimited, but each use costs 20% HP"
    },
    "priceReason": "Balanced at 1000 XP to reflect its dark magic and the risk of using it.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:25:41.966159+00:00",
    "aiReviewedAt": "2026-07-23T18:25:41.966159+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampiric_echo": {
    "id": "shadowfell_vampiric_echo",
    "name": "Vampiric Echo",
    "description": "The Vampiric Echo is a cursed mirror crafted from the very shadows of the Shadowfell, its surface etched with runes that whisper the final word spoken by your target or your own last dying breath. Upon activation, it echoes this spectral echo, leaving you and those nearby shaken by the haunting memory. This deadly psychological weapon cannot be used on a corpse, as the mirror draws strength from the living voice.",
    "price": 2300,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Echoes Last Spoken Word",
      "Psychological Impact"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Echoes Last Spoken Word",
        "rules": "When activated, this mirror reveals the last word spoken by your target or your own final thoughts. You must succeed on a DC 15 Wisdom saving throw or become frightened until the start of your next turn."
      },
      {
        "title": "Psychological Impact",
        "rules": "If you fail the save, you and each creature within 10 feet of you are also frightened for 1 minute. This effect can be ended early with a successful DC 15 Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "The Vampiric Echo requires no level, as its power lies in the darkness it manipulates rather than the strength of the wielder.",
    "vendorReason": "Shadowfell merchants are known for dealing in dark artifacts and psychological tools, making them the perfect purveyors of this cursed mirror.",
    "shippingDetail": "The Boo Spectral Mail ensures safe delivery through their spectral courier network, but be wary—the journey may feel longer than it should.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect and 1 minute for the frightened condition to wear off",
      "endsWhen": "On a failed Wisdom save or when used on a corpse",
      "charges": "Unlimited"
    },
    "priceReason": "The Vampiric Echo is priced at 1000 XP due to its rarity, cursed nature, and the psychological impact it delivers.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-25T14:20:48.115623+00:00",
    "aiReviewedAt": "2026-07-25T14:20:48.115623+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampiric_echo_rod": {
    "id": "shadowfell_vampiric_echo_rod",
    "name": "Vampiric Echo Rod",
    "description": "The Vampiric Echo Rod hums with the restless whispers of ancient vampire ancestors, its staff etched with sigils of shadow and blood. Each strike channels their power into a fleeting veil of darkness that cloaks the wielder in Shadow Stealth. The rod's strikes also reflect damage back at the foe, turning the fight against them. A relic forged in the shadowed depths of the Vastshadow Mountains, it shatters upon contact with pure light, a symbol of its vulnerability to divine purity.",
    "category": "equipment",
    "price": 5800,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Shadow Cloak",
      "Rebound Damage"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Shadow Cloak",
        "rules": "As an action, you can activate the Vampiric Echo Rod to cloak yourself in Shadow Stealth for up to three turns. While cloaked, you have advantage on Dexterity (Stealth) checks and gain a +30 bonus to your AC until the effect ends."
      },
      {
        "title": "Rebound Damage",
        "rules": "When you deal damage with this rod, you reflect 50% of that damage back to the target. This effect has no save DC and can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "Requires level 6 due to its powerful abilities and the Shadow Cloak's strategic advantage.",
    "vendorReason": "The Vampiric Echo Rod is a rare relic of ancient vampire lore, making it a fitting item for the shadowy vendors of the Shadowfell region.",
    "shippingDetail": "Ships via the Void Drifter Relay, ensuring safe delivery through the treacherous planes of the Shadowfell.",
    "usage": {
      "activation": "Action",
      "duration": "Up to three turns",
      "endsWhen": "The effect ends when it is used up or you are struck by pure light.",
      "charges": "Unlimited, recharges after a short or long rest"
    },
    "priceReason": "The rod's unique combination of stealth and damage reflection, along with its connection to ancient vampire lore, justifies this price.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-23T18:26:09.229881+00:00",
    "aiReviewedAt": "2026-07-23T18:26:09.229881+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampiric_gaze": {
    "id": "shadowfell_vampiric_gaze",
    "name": "Vampiric Gaze",
    "description": "The Vampiric Gaze is a cursed eyepiece forged in the shadowy realms of the Shadowfell, crafted from dark obsidian and enchanted with the essence of a forgotten vampire noble. This eerie relic grants its wearer the chilling ability to pierce through shadows and detect hidden foes, making ambushes futile. Its aura emanates a ghastly glow that slows any creature within 10 meters, reducing their movement speed by 30% for 5 seconds upon activation.",
    "category": "equipment",
    "price": 2400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Shadow Piercer",
      "Ghastly Aura"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Shadow Piercer",
        "rules": "Activates as a bonus action. Reveals hidden paths and ambush points within 20 meters, providing advantage on Wisdom (Perception) checks for detecting secret doors or hidden creatures in shadows for 1 minute."
      },
      {
        "title": "Ghastly Aura",
        "rules": "Passive effect. Grants a chilling aura that reduces the movement speed of all enemies within 10 meters by 30% until dispelled, triggered by an attack against you or when this item is destroyed."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to harness its dark magic without succumbing fully to the curse.",
    "vendorReason": "The Shadowfell vendor specializes in artifacts from their realm, including this cursed yet powerful eyepiece.",
    "shippingDetail": "Delivered by spectral messengers that navigate through the dark realms with eerie precision.",
    "usage": {
      "activation": "Bonus action to reveal hidden areas or as a passive effect for aura.",
      "duration": "Instantaneous, ongoing until dispelled or destroyed.",
      "endsWhen": "Destroyed by attack or when the item is no longer in your possession.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The price reflects its rare crafting materials and dark enchantments, balancing its powerful abilities with a reasonable cost for high-level adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:26:07.377698+00:00",
    "aiReviewedAt": "2026-07-23T18:26:07.377698+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampiric_satchel": {
    "id": "shadowfell_vampiric_satchel",
    "name": "Vampiric Satchel of the Hollow Throne",
    "description": "The Vampiric Satchel of the Hollow Throne is a leather pouch imbued with the malevolent essence of the Shadowfell, absorbing ambient darkness and converting it into potent dark energy. Crafted from tattered cloaks once worn by the undead, its surface is etched with runes that pulse with an eerie glow. The satchel can store up to 300 points of shadow energy, which can be used to summon spectral minions or power rituals that bend reality itself.",
    "price": 2400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs Shadow Energy",
      "Summons Spectral Minions"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shadow Absorption",
        "rules": "When worn in a dark environment for at least one hour, the satchel absorbs ambient shadow energy. The amount absorbed is equal to half the darkness level of the location (maximum 300 points). This effect can be triggered once per day."
      },
      {
        "title": "Spectral Summoning",
        "rules": "Activates as a bonus action, summoning one spectral ghoul for three turns. The ghoul is a CR 2 creature that aids the user in combat and can be dismissed at will. This effect costs 200 points of stored shadow energy."
      }
    ],
    "levelRequirementReason": "Suitable for adventurers who have begun to explore the darker corners of reality.",
    "vendorReason": "The Shadowfell is home to many dark rituals and necromancy, making it only fitting that this item be sold by a vendor from within its domain.",
    "shippingDetail": "Delivered via shadowfax, ensuring the package arrives in perfect darkness, even in the most treacherous conditions.",
    "usage": {
      "activation": "Bonus action to summon spectral ghoul; once per day for shadow absorption.",
      "duration": "Instantaneous (summoning) or until dismissed (spectral minion).",
      "endsWhen": "Shadow absorption ends after one hour of darkness, and the satchel's energy is exhausted upon use.",
      "charges": "Limited to three uses per week."
    },
    "priceReason": "The rarity and utility of the satchel justify its moderate price in experience points.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:26:17.814431+00:00",
    "aiReviewedAt": "2026-07-23T18:26:17.814431+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampiric_scent_amulet": {
    "id": "shadowfell_vampiric_scent_amulet",
    "name": "Vampiric Scent Amulet",
    "description": "This dark amulet, forged from the bones of ancient Shadowfell creatures, hums with a necrotic energy that quells fears and fills wounds. Worn by those who dare walk through the most haunted locales, it absorbs ambient fear to mend flesh, turning despair into health. Crafted in the trials of the Onyx Hand, its power is as dark as the void itself yet offers respite to those brave enough to wield it.",
    "category": "equipment",
    "price": 2400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs Fear",
      "Heals Wounds"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Phantom Pony Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Absorbs Fear",
        "rules": "When you are within a 10-foot radius of an area filled with fear, such as from a creature or spell effect, this amulet absorbs 50% of the ambient fear. You gain temporary hit points equal to the amount absorbed."
      },
      {
        "title": "Heals Wounds",
        "rules": "At the start of your turn when you have temporary hit points gained from Absorbs Fear, regain an additional 10 hit points. This effect can occur once per short or long rest."
      }
    ],
    "levelRequirementReason": "Wielders must be at least level 3 to resist the necrotic power of this amulet and channel its dark magic effectively.",
    "vendorReason": "The Shadowfell vendor, known for their trade in relics from forgotten trials, carries this amulet as a testament to its ancient origins.",
    "shippingDetail": "The delivery is handled by spectral ponies who traverse the Shadowfell at night, ensuring the amulet arrives under cover of darkness.",
    "usage": {
      "activation": "Passive effect activated upon wearing and remaining in an area of fear.",
      "duration": "Instantaneous; regains temporary hit points only once per short or long rest.",
      "endsWhen": "Restored to full health at the start of a short or long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The amulet's rarity and necrotic power justify its price, providing both defensive and healing benefits within the Shadowfell's challenging environments.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:26:49.551170+00:00",
    "aiReviewedAt": "2026-07-23T18:26:49.551170+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampiric_shroud": {
    "id": "shadowfell_vampiric_shroud",
    "name": "Vampiric Shroud",
    "description": "The Vampiric Shroud, crafted from the breath of the Onyx Hand in the heart of the Shadowfell, is a dark velvet cloak that whispers secrets to those who wear it. It grants invisibility in dim light and enhances stealth, but at a cost: one Hit Point drains per second while cloaked. Perfect for lurking in the shadows or setting deadly traps, this eerie garment leaves a trail of fading life force behind its wearer.",
    "category": "equipment",
    "price": 2400,
    "icon": "🖤",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Invisibility in Dim Light",
      "Enhanced Stealth"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Invisibility in Dim Light",
        "rules": "Activate as a bonus action. Grants invisibility while in dim light, lasts until the start of your next turn or until you attack, cast a spell, or end this effect early. While invisible, you can only take one action per round and incur a -2 penalty to Dexterity (Stealth) checks."
      },
      {
        "title": "Enhanced Stealth",
        "rules": "While wearing the Vampiric Shroud, your Dexterity (Stealth) skill is increased by 2. This effect ends if you take any action that would normally break cover or if you are struck in combat."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to channel the dark magic of the Shadowfell effectively.",
    "vendorReason": "The Shadowfell's own merchants understand and sell items that harness its power.",
    "shippingDetail": "Ships via Lakitu Drones, known for their swift delivery in the treacherous Shadowfell.",
    "usage": {
      "activation": "Bonus action to activate or end invisibility; can be toggled on and off.",
      "duration": "Instantaneous activation, lasts until your next turn unless ended early.",
      "endsWhen": "Turned off by the wearer, attacked in combat, or if you take an action that would break cover.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced price reflects its dark magic and limited utility without being overpowered.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-23T18:26:36.939293+00:00",
    "aiReviewedAt": "2026-07-23T18:26:36.939293+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampiric_silence_torch": {
    "id": "shadowfell_vampiric_silence_torch",
    "name": "Vampiric Silence Torch",
    "description": "The Vampiric Silence Torch emits a ghastly, blinding black light that silences all spellcasting within its radius for two turns. The torch's user gains temporary invisibility and saps the vitality of foes, causing them to take an additional 25% damage from non-magical sources while under its influence. Crafted in the shadowy depths where silence reigns, this torch is a deadly tool for infiltrating Oracle’s sanctuaries without alerting any hidden sentinels.",
    "price": 2400,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Silence Spellcasters",
      "Temporary Invisibility"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silence Spellcasters",
        "rules": "Activates as a bonus action. All enemy spellcasting is silenced within a 15-foot radius for two turns. Creatures within the area must make a DC 15 Constitution saving throw or be incapacitated and unable to cast spells until the end of their next turn."
      },
      {
        "title": "Temporary Invisibility",
        "rules": "The user gains 50% invisibility for three turns as an immediate action, becoming nearly undetectable during this time. This effect ends if the user takes a voluntary action or is hit by an attack."
      }
    ],
    "levelRequirementReason": "This torch can be used by lower-level characters since it provides crucial tactical advantages in stealth and spell disruption.",
    "vendorReason": "The Shadowfell vendors, known for their expertise in crafting tools that exploit the dark arts, provide this unique item to adventurers looking to navigate dangerous sanctuaries.",
    "shippingDetail": "Shipped via the Koopa Postal service; delivery may take an additional day due to the fragile nature of the torch's components.",
    "usage": {
      "activation": "Bonus Action or Reaction",
      "duration": "Silence lasts for two turns, Invisibility lasts for three turns",
      "endsWhen": "The effects end when the user takes a voluntary action or is hit by an attack; limited to one use per short rest.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its utility in combat and the specialized crafting required for such a dark artifact.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T18:27:16.032350+00:00",
    "aiReviewedAt": "2026-07-23T18:27:16.032350+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampiric_soul_ash": {
    "id": "shadowfell_vampiric_soul_ash",
    "name": "Vampiric Soul Ash",
    "description": "Vampiric Soul Ash is a fine, shimmering powder derived from the Onyx Hand’s ancient ruins. Sprinkled on the ground, it casts a spectral glow that reveals hidden paths and traps within a 10-meter radius, making exploration safer for the discerning adventurer. This powder also subtly taints the air, increasing the chance of encountering cursed artifacts by +5%, though at the cost of drawing unwanted attention from lurking shadows.",
    "price": 2400,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Reveals Hidden Passages",
      "Increases Chance of Cursed Artifacts"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveals Hidden Passages",
        "rules": "When activated as a bonus action, the Vampiric Soul Ash creates an aura that reveals hidden paths and traps within 10 meters. The effect lasts for 1 minute or until a creature moves through the area. There is no save against this effect."
      },
      {
        "title": "Increases Chance of Cursed Artifacts",
        "rules": "For every hour spent in an environment where Vampiric Soul Ash has been used, there is a +5% chance to find cursed artifacts. This effect ends when the user leaves the area or after 24 hours."
      }
    ],
    "levelRequirementReason": "Requires no specific level as it provides utility for all adventurers.",
    "vendorReason": "The Shadowfell has extensive knowledge of the Onyx Hand’s lairs and thus can supply items like Vampiric Soul Ash.",
    "shippingDetail": "Ships within 3 days with standard delivery, but may be delayed by shadow disturbances in certain regions.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute or until a creature moves through the area",
      "endsWhen": "Effect ends when no creatures are within the area for 10 minutes or when used again",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price considering its utility and risk of encountering cursed items.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-23T18:26:40.029009+00:00",
    "aiReviewedAt": "2026-07-23T18:26:40.029009+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampiric_soul_shard": {
    "id": "shadowfell_vampiric_soul_shard",
    "name": "Vampiric Soul Shard",
    "description": "The Vampiric Soul Shard gleams with an eerie, otherworldly light, a fragment of a fallen vampire's soul encased in onyx. When consumed, it grants brief invincibility, allowing you to shrug off attacks for a fleeting moment while leeching vitality from your foe, siphoning their strength into your own. The shard's essence is both potent and perilous, making it a rare find among the dark alleys of the Shadowfell.",
    "price": 2400,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Grants temporary invincibility",
      "Drains enemy vitality"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invulnerability",
        "rules": "When consumed as an action, you gain temporary invincibility for three turns. During this time, you are immune to all physical attacks and damage. This effect ends if you take any damage or upon the expiration of its duration."
      },
      {
        "title": "Vampiric Drain",
        "rules": "Upon activation, you leech 20% of an enemy's hit points as temporary hit points. You can only use this ability once per short rest and are limited to one use per day."
      }
    ],
    "levelRequirementReason": "This item is crafted for adventurers just beginning their journey into the dark corners of the world.",
    "vendorReason": "The Shadowfell's eerie markets are known for offering rare and dangerous items, including this shard.",
    "shippingDetail": "Delivered by a Rakasha spirit who ensures the package remains hidden until it reaches its destination.",
    "usage": {
      "activation": "Action",
      "duration": "3 turns",
      "endsWhen": "You take damage or at the end of your next turn after activation",
      "charges": "One use per day"
    },
    "priceReason": "The shard's rarity and the dark magic required to create it justify its considerable cost.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-23T18:27:04.326741+00:00",
    "aiReviewedAt": "2026-07-23T18:27:04.326741+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampiric_talisman": {
    "id": "shadowfell_vampiric_talisman",
    "name": "Vampiric Talisman of the Onyx Hand",
    "description": "The Vampiric Talisman of the Onyx Hand is a small, polished amulet forged from shadow-forged iron. When struck in combat, it drains 20% of an enemy's life force, converting it into shimmering dark energy that grants you temporary hit points equivalent to half the drained amount. The talisman glows ominously red when an enemy’s health falls below 30%, alerting you to their weakened state. It is a relic from the Shadowfell, known for its ability to sustain long-term operations in the darkest of shadows.",
    "category": "equipment",
    "price": 2400,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Life Drain",
      "Stamina Boost"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Life Drain",
        "rules": "When you hit an enemy with a melee attack, drain 20% of their hit points and convert it into temporary hit points for yourself. The effect ends when you take damage or if the talisman is removed from your person."
      },
      {
        "title": "Stamina Boost",
        "rules": "Increase your stamina regeneration by 10%, which grants an additional 5 hit points per long rest. This benefit lasts until the end of each day."
      }
    ],
    "levelRequirementReason": "The talisman’s dark energies require a certain level of arcane knowledge to harness effectively.",
    "vendorReason": "As a relic from the Shadowfell, it makes sense that this vendor would carry such a powerful item.",
    "shippingDetail": "The amulet must be couriered personally by Shy Guy Smugglers to ensure its safe arrival and proper delivery.",
    "usage": {
      "activation": "Instantaneous on hit",
      "duration": "Until you take damage or the talisman is removed from your person",
      "endsWhen": "You take damage or the talisman is removed from your person",
      "charges": "Unlimited"
    },
    "priceReason": "The talisman's shadow-forged iron and its unique properties make it a rare find, justifying its price.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-23T18:26:55.506371+00:00",
    "aiReviewedAt": "2026-07-23T18:26:55.506371+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampiric_tongue": {
    "id": "shadowfell_vampiric_tongue",
    "name": "Vampiric Tongue of the Blood Thirst",
    "description": "The Vampiric Tongue of the Blood Thirst is a gnarled, obsidian appendage that drips with dark energy. It whispers and strikes like an ancient predator, siphoning life essence from foes as it claws its way through their defenses. This macabre tongue leaves behind a trail of agony for any undead it confronts, causing them to scream in pain and stagger. Hunters and assassins prize this relic for its ability to drain vitality and enhance melee strikes against the dead.",
    "category": "equipment",
    "price": 2400,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Life Siphon",
      "Undead Pain"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Life Siphon",
        "rules": "The Vampiric Tongue of the Blood Thirst siphons 1d4 + 2 hit points from any enemy struck with a melee attack. This effect occurs once per turn and does not provoke an opportunity attack."
      },
      {
        "title": "Undead Pain",
        "rules": "When this tongue strikes against undead, they must succeed on a DC 13 Constitution saving throw or be stunned for 1 round. The save is made at the start of their next turn."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to wield and channel its dark energies effectively.",
    "vendorReason": "The shadowy denizens of Shadowfell are well-versed in the arts of necromancy, making them a fitting vendor for such an item.",
    "shippingDetail": "This delicate artifact is delivered via the ethereal planes by the rakasha, ensuring swift and secure transport without risk of damage.",
    "usage": {
      "activation": "Melee attack action",
      "duration": "Instantaneous effect",
      "endsWhen": "The tongue exhausts its uses for the day (recharges on a short rest)",
      "charges": "1 charge, recharges at dawn"
    },
    "priceReason": "Balanced as a rare artifact with unique undead-buffing properties and a limited use mechanic.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:27:51.714267+00:00",
    "aiReviewedAt": "2026-07-23T18:27:51.714267+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampiric_wisp": {
    "id": "shadowfell_vampiric_wisp",
    "name": "Vampiric Wisp of the Onyx Hand",
    "description": "A wisp of onyx mist that clings to your shoulder, absorbing stray magic and channeling it into a powerful counterstrike. Crafted in the shadowy forges of the Onyx Hand, this wisp is a symbol of ancient necromancy, drawing energy from the very fabric of the Shadowfell. Use it wisely in duels or against powerful enemies; the wisp will absorb up to 25% of incoming magic damage and convert it into your own spellcasting power.",
    "price": 2400,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+25% Magic Absorption",
      "30% Spell Speed Boost"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Magic Absorption",
        "rules": "When you take magic damage, the Vampiric Wisp absorbs up to 25% of that damage as additional spellcasting resources. This effect can occur once per minute."
      },
      {
        "title": "Spell Speed Boost",
        "rules": "For every 10 seconds the wisp is active, you gain a +30% boost to your spellcasting speed. This bonus stacks up to three times."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Arcana to effectively use and control the wisp's magic.",
    "vendorReason": "The Shadowfell is a place where such necromantic creations are born, making this vendor a logical source for the item.",
    "shippingDetail": "Careful handling required due to its volatile nature; shipments may take up to three additional days.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The wisp is dismissed or destroyed by a dispel magic spell",
      "charges": "Unlimited, but only one can be active at a time"
    },
    "priceReason": "Balanced for its utility in both offensive and defensive scenarios.",
    "priceOriginal": 2900,
    "priceReviewedAt": "2026-07-23T18:27:09.143099+00:00",
    "aiReviewedAt": "2026-07-23T18:27:09.143099+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vampiric_writ": {
    "id": "shadowfell_vampiric_writ",
    "name": "Vampiric Writ of the Blooded Pact",
    "description": "The Vampiric Writ of the Blooded Pact is a vial etched with dark sigils and filled with an eerie, pulsating essence of vampire blood. Consuming it grants you temporary invulnerability to physical attacks for 8 seconds, allowing you to focus on draining your enemies' vitality. Nearby foes feel a searing pain as they lose 20% of their health, but you must be wary: the writ's effects can only be used once per long rest.",
    "price": 2400,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Temporary Invulnerability",
      "Vampiric Drain"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Invulnerability",
        "rules": "When consumed, you gain a +3 bonus to AC and immunity to all physical damage for 8 seconds. This effect ends if you take any non-magical physical damage or at the start of your next turn after using it."
      },
      {
        "title": "Vampiric Drain",
        "rules": "Upon consuming the writ, choose a creature within 30 feet. That creature loses 20% of its maximum hit points as temporary hit points for you. This effect has no save DC and can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "This writ is potent but not overwhelming, suitable for adventurers just starting their journey.",
    "vendorReason": "The Shadowfell is the birthplace of vampiric magic; it makes sense that this powerful item originates there.",
    "shippingDetail": "Due to its volatile nature, the writ must be shipped with extra care and arrives within 3 days of purchase.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "8 seconds or until you take physical damage",
      "endsWhen": "At the start of your next turn after use or if you take any non-magical physical damage",
      "charges": "Once per long rest"
    },
    "priceReason": "The Vampiric Writ is a rare and powerful item, balancing its price with the need for experienced adventurers to face it.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T18:27:20.976043+00:00",
    "aiReviewedAt": "2026-07-23T18:27:20.976043+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_venom_blood": {
    "id": "shadowfell_venom_blood",
    "name": "Venom Blood of the Abyssal Maw",
    "description": "A vial of corrupted vitae drawn from the deepest crypts of the Shadowfell, this venomous liquid is said to have been extracted directly from the heart of an Abyssal Maw. When applied, it corrupts the target’s soul for three rounds, making them vulnerable to psychic strikes and granting a spectral echo that haunts their foes for two additional turns. The vial's potency ensures even a simple touch can be fatal in the wrong hands.",
    "price": 2400,
    "icon": "💀",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "+30% damage to non-human enemies",
      "-40% defense against psychic damage"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Soul Corruption",
        "rules": "When applied, Venom Blood of the Abyssal Maw imposes a curse on the target for three rounds. The target takes an additional 3d6 psychic damage from any source and has disadvantage on saving throws against psychic effects."
      },
      {
        "title": "Echoing Spectra",
        "rules": "For two turns after applying the venom, spectral echoes of the Abyssal Maw appear in the battlefield. These echoes deal 1d8 force damage to all creatures within 5 feet and grant advantage on attacks against those creatures."
      }
    ],
    "levelRequirementReason": "The vial's potent effects require a moderate command of magic to wield effectively.",
    "vendorReason": "Shadowfell is known for its dark dealings and necromantic artifacts, making it the only place to find such an item.",
    "shippingDetail": "The vial must be shipped discreetly due to its potent nature; any delay risks its corruption.",
    "usage": {
      "activation": "A bonus action is required to apply the venom. The effects last for three rounds and end if the target dies or successfully saves against a DC 15 Charisma saving throw.",
      "duration": "3 rounds",
      "endsWhen": "The target dies or successfully saves against a DC 15 Charisma saving throw.",
      "charges": "Unlimited, but only one application per creature."
    },
    "priceReason": "The rarity and potency of the venom ensure its price reflects its value in both magic and danger.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-23T18:27:25.886906+00:00",
    "aiReviewedAt": "2026-07-23T18:27:25.886906+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_venom_bottle": {
    "id": "shadowfell_venom_bottle",
    "name": "Venom Bottle of the Hollow Maw",
    "description": "The Venom Bottle of the Hollow Maw is a slender glass vial sealed with black wax. Inside, the venom glows faintly, a testament to its cursed origin from the depths of the Shadowfell. When unleashed, it deals piercing damage and has a 15% chance to stagger your foes for one round, but each use drains your vitality, reducing your maximum hit points by 20%. Perfect for those who seek swift, silent kills.",
    "price": 450,
    "icon": "📦",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Piercing Damage",
      "Stagger on Hit"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Piercing Damage",
        "rules": "When thrown as a weapon, the Venom Bottle deals an additional 1d6 piercing damage to one target. The user must make a successful attack roll against the target's AC. This effect ends when the bottle is spent."
      },
      {
        "title": "Stagger on Hit",
        "rules": "There is a 15% chance that, upon hitting the target, it will be Staggered for one round (DC 14 Constitution saving throw). The user must make this save or take 2d6 piercing damage from the bottle itself. This effect ends when the bottle is spent."
      }
    ],
    "levelRequirementReason": "This item is designed to be accessible for low-level characters who need a reliable method of incapacitating foes.",
    "vendorReason": "The Shadowfell vendor, known for their dark wares, sources this from the cursed lands themselves.",
    "shippingDetail": "Ships via Pipe Express with expedited delivery within a week of purchase.",
    "usage": {
      "activation": "Thrown as a weapon",
      "duration": "Instantaneous effect per use",
      "endsWhen": "Spent after one successful hit or failed save",
      "charges": "Unlimited uses, but each use reduces the user's maximum HP by 20% until recovered"
    },
    "priceReason": "The price reflects its cursed origin and the risk it poses to the user.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T18:27:33.191945+00:00",
    "aiReviewedAt": "2026-07-23T18:27:33.191945+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_vessel_fragment": {
    "id": "shadowfell_vessel_fragment",
    "name": "Vessel Fragment",
    "description": "A Vessel Fragment is a jagged, iridescent shard that hums with necromantic energy. Crafted from the Oracle’s experimental vessel, it amplifies one’s connection to the Shadowfell, allowing the wielder to feel the very pulse of the void. When in the Shadowfell, this fragment increases damage taken by 10%, but its true power lies in its potential; when fused with others, it can create a Vessel Core, a powerful relic capable of unlocking ancient necromantic secrets.",
    "price": 2400,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Shadowfell Amplification",
      "Void Vulnerability"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shadowfell Amplification",
        "rules": "The wielder gains +5% to all necromantic spell potency when in the Shadowfell. This effect is always active as long as they are within that plane, and it requires no activation."
      },
      {
        "title": "Void Vulnerability",
        "rules": "When outside the Shadowfell, the user takes an additional 10% damage from all sources for 24 hours after leaving. This effect can be mitigated by spending a reaction to cast a protection from energy spell targeting themselves."
      }
    ],
    "levelRequirementReason": "This fragment requires a minimum of third-level proficiency in necromancy spells to effectively harness its power.",
    "vendorReason": "The Oracle’s vessel fragments are exclusive to the Shadowfell, and only those who have proven their worth within its borders can acquire them from the Oracle’s disciples.",
    "shippingDetail": "Due to its volatile nature, this item must be shipped via Shy Guy Smugglers, who promise safe delivery with a guaranteed timeline of three days or less.",
    "usage": {
      "activation": "Passive effect when in the Shadowfell; no activation required outside the plane.",
      "duration": "Permanent while in the Shadowfell; ends immediately upon leaving and lasts for 24 hours thereafter.",
      "endsWhen": "Using a reaction to cast protection from energy or returning to the Shadowfell.",
      "charges": "Unlimited, but cannot be used when not within the Shadowfell."
    },
    "priceReason": "This fragment is priced at 1000 XP due to its rarity and the complexity of its crafting, which involves rare materials and significant necromantic energy.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-23T18:27:53.360646+00:00",
    "aiReviewedAt": "2026-07-23T18:27:53.360646+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_voices_of_ash": {
    "id": "shadowfell_voices_of_ash",
    "name": "Voices of Ash",
    "description": "The Voices of Ash, a shimmering amulet forged from the bones of forgotten battles, whispers secrets from the dead. It allows you to hear the final moments of fallen comrades or foes, providing crucial intelligence before an ambush or during interrogation. Its ethereal glow hints at the spectral presence it harbors—vague yet compelling. Wielders have reported that its power amplifies in areas of shadow and darkness, enhancing stealth and uncovering hidden truths.",
    "price": 450,
    "icon": "🔮",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+15% chance to reveal enemy weakness",
      "Passive +20% stealth while wearing"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Enemy Weakness",
        "rules": "When you roll a Perception check, there is a +15% increase in the chance of uncovering an enemy’s weak point. This effect lasts until the end of your next turn."
      },
      {
        "title": "Enhanced Stealth",
        "rules": "While wearing this amulet, you have a passive +20 bonus to Dexterity (Stealth) checks. This benefit is always active while the amulet is worn."
      }
    ],
    "levelRequirementReason": "This amulet requires minimal magical power and can be used by lower-level characters for strategic advantage.",
    "vendorReason": "Shadowfell merchants often carry relics from the dead, as they are in tune with the dark energies that fuel such items.",
    "shippingDetail": "The amulet is delivered via a shadow courier, arriving at night when darkness covers your doorstep.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous; active as long as the amulet is worn.",
      "endsWhen": "The amulet’s power dissipates if not recharged or destroyed.",
      "charges": "Unlimited, but requires 8 hours of meditation in a place of darkness to recharge."
    },
    "priceReason": "This amulet is crafted from rare bones and dark magic, making it moderately priced yet still within reach for many adventuring parties.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T18:27:56.653329+00:00",
    "aiReviewedAt": "2026-07-23T18:27:56.653329+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_voices_of_the_void": {
    "id": "shadowfell_voices_of_the_void",
    "name": "Voices of the Void",
    "description": "The Voices of the Void is a gnarled staff carved from twisted shadowwood, its surface etched with arcane symbols that shimmer faintly under starlight. It channels the whispers of the void, summoning spectral echoes to distract and disorient foes in combat. However, prolonged use risks unraveling the user's sanity, causing them to falter and lose focus for a time. A delicate balance must be maintained between harnessing its power and succumbing to its dark allure.",
    "category": "equipment",
    "price": 2400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+25% chance to confuse enemies for 1 round",
      "-5% HP if used continuously in combat beyond 30 seconds"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Confuse Enemies",
        "rules": "When activated as a bonus action, the staff summons spectral echoes that distract foes within 10 feet. Targets have a +25% chance to be confused for one round (action surge or reaction negate)."
      },
      {
        "title": "Sanity Drain",
        "rules": "If used continuously in combat beyond 30 seconds, the user loses 5% of their hit points at the end of each round until they rest. This effect is interrupted if the user stops using the staff."
      }
    ],
    "levelRequirementReason": "Beginners can still experiment with its abilities without requiring a high level.",
    "vendorReason": "The Shadowfell vendors are known for their access to arcane and dangerous items, including those that manipulate the void.",
    "shippingDetail": "Ships via the Void Drifter Relay with a 1d4+2 day delivery delay.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous effect; confusion lasts for one round",
      "endsWhen": "Use ends if confused target regains their senses, or if the user stops using the staff and loses HP due to continuous use",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced with other rare items, this price reflects its unique risk-reward profile.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-24T23:36:34.693270+00:00",
    "aiReviewedAt": "2026-07-24T23:36:34.693270+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_void_blood": {
    "id": "shadowfell_void_blood",
    "name": "Void Blood of the Unbound",
    "description": "The vial contains a thick, dark essence that hums with malevolent energy. This is the very blood of an Unbound, a feral creature born from the Shadowfell. Consuming it grants you the ability to manipulate shadow and darkness, enhancing your combat prowess in dim environments. For ten minutes, you can shape shadows into weapons or shields, and your resistance to shadow-based damage increases by 20%. Use this vial wisely; its power is as fleeting as the night itself.",
    "price": 5600,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Shadow Manipulation",
      "Enhanced Shadow Resistance"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Shadow Manipulation",
        "rules": "As a bonus action, you can manipulate shadows within 30 feet to create a weapon or shield. This lasts for 1 minute and ends if you attack with it. The DC to resist this effect is 15."
      },
      {
        "title": "Enhanced Shadow Resistance",
        "rules": "You gain resistance to shadow damage and increase your saving throw bonus against all sources of darkness by +20%. This effect lasts for 10 minutes, ending if you spend a minute out of complete darkness."
      }
    ],
    "levelRequirementReason": "It takes considerable magical knowledge and strength to harness the volatile power within this vial.",
    "vendorReason": "The Shadowfell is home to the Unbound, and its denizens are familiar with their blood's potent magic.",
    "shippingDetail": "Ships via the Void Drifter Relay; delivery can take up to a week depending on celestial alignment.",
    "usage": {
      "activation": "Bonus action, or as a reaction when entering shadowy conditions",
      "duration": "Instantaneous activation with 10-minute duration for resistance effect",
      "endsWhen": "Using it in sunlight or spending a minute out of complete darkness ends the effects",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Unbound are rare, and their essence is highly sought after for its unique magical properties.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T18:28:18.692939+00:00",
    "aiReviewedAt": "2026-07-23T18:28:18.692939+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_void_cloak": {
    "id": "shadowfell_void_cloak",
    "name": "Void Cloak of the Shattered Mirror",
    "description": "The Void Cloak of the Shattered Mirror is a cloak woven from the echoes of broken mirrors and forgotten Onyx Hand rites, imbued with the ethereal whispers of the Shadowfell. It grants its wearer temporary resistance to shadow-based attacks and allows them to phase through thin barriers, making it an invaluable tool for explorers venturing into the heart of darkened realms. Wielding this cloak can turn the tide in a fight against shadowy foes, granting both defensive prowess and offensive mobility.",
    "category": "equipment",
    "price": 2400,
    "icon": "🌑",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Shadow Resistance",
      "Phasing Teleport"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Shadow Resistance",
        "rules": "When a creature within 10 feet of you attacks you with a weapon that deals shadow damage, you gain temporary resistance to this damage until the start of your next turn. This effect can occur once per long rest."
      },
      {
        "title": "Phasing Teleport",
        "rules": "As an action, you may attempt to phase through thin barriers such as walls or doors. You teleport to a point on a thin barrier within 30 feet of you and then phase back to your original location immediately after. This effect can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The cloak's magic is potent, requiring a level 7 character to harness its full power.",
    "vendorReason": "The shadowy denizens of the Shadowfell are well-acquainted with the arcane secrets that go into crafting such an item, making it a logical place for this cloak to be sold.",
    "shippingDetail": "Ships via the ethereal Void Drifter Relay; expect delivery in one week at most.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous for Phasing Teleport, until start of next turn for Shadow Resistance",
      "endsWhen": "Runs out after its duration, or when you take damage during the Shadow Resistance effect",
      "charges": "Unlimited"
    },
    "priceReason": "The cloak's unique combination of defensive and mobility benefits makes it a valuable asset for any adventuring party.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T18:28:21.393161+00:00",
    "aiReviewedAt": "2026-07-23T18:28:21.393161+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_void_soul_pouch": {
    "id": "shadowfell_void_soul_pouch",
    "name": "Void Soul Pouch",
    "description": "The Void Soul Pouch is a shadowy, leather-bound satchel woven from threads of forgotten lore and nightmarish energy. It absorbs the soul essence of slain foes, channeling their dark power into your own form. For an instant, you enter a state of ephemeral darkness, becoming invisible to all but those who can see through shadows. Each absorbed soul grants a fleeting surge of combat prowess, heightening your reflexes and striking speed in the heat of battle.",
    "price": 2400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs soul energy from enemies",
      "Becomes invisible for 3 seconds"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Soul Absorption",
        "rules": "When you slay an enemy, you can absorb its soul essence by making a DC 15 Wisdom (Insight) check. On a success, your next melee attack deals an additional 2d6 necrotic damage and grants a +10% bonus to your attack speed for the rest of the encounter."
      },
      {
        "title": "Shadow Phase",
        "rules": "As a reaction to an enemy's attack or movement within 5 feet, you can enter a brief state of invisibility. You are invisible until the start of your next turn, but this effect cannot be used again for 1 minute."
      }
    ],
    "levelRequirementReason": "Requires at least third-level proficiency to wield and harness its dark energies effectively.",
    "vendorReason": "The Shadowfell is a realm of darkness and decay, where such items are forged from the very essence of nightmarish creatures.",
    "shippingDetail": "Delivered with a shadowy courier, ensuring secrecy but slightly increasing the risk of misdelivery to unintended recipients.",
    "usage": {
      "activation": "Reaction (Soul Absorption); Instantaneous (Shadow Phase)",
      "duration": "Until end of next turn for Shadow Phase; varies by effect",
      "endsWhen": "Ends when you are attacked or enter combat again, or after a successful Soul Absorption.",
      "charges": "Unlimited, but only 3 uses per short rest"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rarity and the dark magic required for its creation.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-24T23:36:13.346262+00:00",
    "aiReviewedAt": "2026-07-24T23:36:13.346262+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_void_torch": {
    "id": "shadowfell_void_torch",
    "name": "Void Torch of the Hollow Throne",
    "description": "The Void Torch of the Hollow Throne hums with a spectral glow, casting eerie shadows that warp reality around you. Its flickering light distorts time and space, making it an ideal tool for stealthy ambushes in the Shadowfell’s labyrinthine halls. The torch's embers are said to be drawn from the very heart of the realm’s void, granting the user a fleeting moment of total invisibility and leaving its enemies with doppelgangers that cast their own shadows, confusing their senses.",
    "category": "equipment",
    "price": 2400,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Shadow Echo"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "When activated as a bonus action, the user becomes invisible for 10 seconds. This effect grants complete concealment and lasts until dispelled by magical means or an end of turn. There is no save required to resist this effect."
      },
      {
        "title": "Shadow Echo",
        "rules": "Upon activation, enemies within a 20-foot radius are briefly duplicated for the duration of their next action. This creates a shadowy copy that moves with them but does not attack or interact otherwise. The duplicate fades away at the end of the enemy's turn."
      }
    ],
    "levelRequirementReason": "This torch is designed to be accessible to lower-level adventurers, as it requires no special magic beyond the realm’s own void energies.",
    "vendorReason": "The Shadowfell vendors are known for their specialized items that harness the realm's dark and twisted power, making this torch an ideal offering.",
    "shippingDetail": "Ships directly from the Hollow Throne, ensuring quick delivery to those who dare venture into its halls.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "10 seconds for Invisibility; ends when the user's next action is taken for Shadow Echo",
      "endsWhen": "Dispel magic or end of turn",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "The torch’s balanced price reflects its moderate power and the specific materials used in its crafting.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T18:28:47.846569+00:00",
    "aiReviewedAt": "2026-07-23T18:28:47.846569+00:00",
    "aiReviewVersion": 1
  },
  "shadowfell_void_ward": {
    "id": "shadowfell_void_ward",
    "name": "Void Ward of the Silent Throne",
    "description": "The Void Ward of the Silent Throne is a cursed amulet forged from shadow-drenched obsidian. When worn, it absorbs ambient darkness and reflects it as searing light, capable of blinding foes and turning their own shadows against them. The wearer can phase through thin walls of shadow for brief moments but at a cost: each use saps one hit point, making this relic both perilous and invaluable to those who seek the dark arts.",
    "category": "equipment",
    "price": 2400,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Phasing Through Shadows",
      "Reflective Light"
    ],
    "vendor": "shadowfell",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Phasing Through Shadows",
        "rules": "As a bonus action, the wearer can phase through thin walls of shadow for 1 minute. This effect ends if the wearer takes any damage or if they voluntarily end it early."
      },
      {
        "title": "Reflective Light",
        "rules": "At the start of each of its turns, the amulet reflects ambient light into surrounding darkness, dealing 1d6 radiant damage to any creature within 5 feet that is in shadow. A target can make a DC 15 Wisdom saving throw to avoid this effect."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to harness the relic's dark magic without severe consequences.",
    "vendorReason": "The Shadowfell is home to ancient and malevolent relics, making it fitting for this cursed amulet.",
    "shippingDetail": "Ships via shadow-touched couriers with a 1d4 delay due to the arcane nature of the item.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute or until ended early",
      "endsWhen": "Damage taken or voluntarily ended",
      "charges": "Unlimited"
    },
    "priceReason": "The amulet's cursed nature and unique abilities justify this price, balancing its powerful effects with manageable risks.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T18:28:34.325646+00:00",
    "aiReviewedAt": "2026-07-23T18:28:34.325646+00:00",
    "aiReviewVersion": 1
  },
  "shanhaijing_ancestral_vessel": {
    "id": "shanhaijing_ancestral_vessel",
    "name": "Shanhaijing Ancestral Vessel (Embodied Spirit)",
    "description": "The Shanhaijing Ancestral Vessel stands as a towering, intricately carved urn of jade and bronze, its surface etched with ancient runes that shimmer faintly under moonlight. This vessel is said to house the spirit of an ancestor who fought valiantly in the legendary Battle of Zhuolu, lending unparalleled wisdom and strength during consultation. When summoned, it grants expertise in one historical or martial field for a week, allowing you to speak with the embodied spirit as if sharing a private discourse.",
    "price": 500000,
    "icon": "🏺",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Summons a powerful ancestral spirit (CR 12)",
      "Expertise in one historical or martial field"
    ],
    "vendor": "shanhaijing_shrine",
    "shippedBy": "Gilded Urn",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Ancestral Summoning",
        "rules": "To activate, you must perform a ritual that takes 10 minutes. The summoned spirit grants expertise in one chosen historical or martial field for the duration of 7 days. This effect can be used once per month."
      },
      {
        "title": "Spirit Consultation",
        "rules": "The vessel allows you to ask one question related to history or martial prowess each day during its active period, receiving a cryptic but insightful response from the ancestral spirit. The vessel recharges after 7 days of inactivity."
      }
    ],
    "levelRequirementReason": "Only those with significant experience and wisdom can properly perform the ritual to summon such a powerful ancestor.",
    "vendorReason": "The shrine is entrusted by the clan with the care of these sacred relics, ensuring they are used for their intended purpose.",
    "shippingDetail": "Ships via a private courier who delivers directly to your doorstep.",
    "usage": {
      "activation": "A ritual performed over 10 minutes",
      "duration": "7 days of expertise and daily consultation",
      "endsWhen": "After 7 days, the spirit returns to its rest or when the vessel is damaged beyond repair",
      "charges": "Recharges after 7 days of inactivity"
    },
    "priceReason": "This item's price reflects its rarity and the significant time and resources required for its creation.",
    "priceOriginal": 650000,
    "priceReviewedAt": "2026-07-23T18:29:17.653750+00:00",
    "aiReviewedAt": "2026-07-23T18:29:17.653750+00:00",
    "aiReviewVersion": 1
  },
  "shanhaijing_bestiary_fact_checking": {
    "id": "shanhaijing_bestiary_fact_checking",
    "name": "Shanhaijing Bestiary Fact-Checking",
    "description": "The Shanhaijing Bestiary Fact-Checking is a scholarly tome bound in red leather with gold filigree. It verifies one monster entry, revealing a hidden weakness that only you can exploit. The book's margins are filled with meticulous corrections, making it nearly unusable as a weapon due to its slippery ink. Once wielded in battle, you become overly critical of the game’s lore, imposing disadvantage on your Charisma checks when dealing with sages and scholars.",
    "category": "services",
    "price": 450,
    "icon": "📖",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Verifies one monster entry",
      "Disadvantage on Charisma checks related to monsters"
    ],
    "vendor": "shanhaijing",
    "shippedBy": "Scholarly Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Monster Weakness Revealed",
        "rules": "When activated, this book verifies a single monster entry. The DM reveals one hidden weakness that only the user can exploit."
      },
      {
        "title": "Pedantic Scholar",
        "rules": "For 1 hour after use, you impose disadvantage on Charisma checks when interacting with sages and scholars."
      }
    ],
    "levelRequirementReason": "A basic understanding of the game's mechanics is necessary to appreciate the book’s nuances.",
    "vendorReason": "The Shanhaijing Editors are experts in monster lore and would naturally carry a tool that enhances their expertise.",
    "shippingDetail": "Ships via a courier known for its reliable service, ensuring the book arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour per use",
      "endsWhen": "The effect ends when the duration expires or if you use it again without waiting the required rest period.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at a lower price to reflect its scholarly utility rather than combat power.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-23T18:28:57.225346+00:00",
    "aiReviewedAt": "2026-07-23T18:28:57.225346+00:00",
    "aiReviewVersion": 1
  },
  "shanhaijing_bronze_skin_potion": {
    "id": "shanhaijing_bronze_skin_potion",
    "name": "Shanhaijing Bronze Skin Potion",
    "description": "The Shanhaijing Bronze Skin Potion is a rare tincture that hardens your skin to the resilience of ancient bronze. For an hour, your flesh becomes unyielding against bludgeoning, piercing, and slashing attacks, granting you resistance to these three damage types. However, this protection comes at the cost of mobility; your movement speed is halved as your form seems to weigh a ton more than usual. Only Shanhaijing's alchemists can craft such a potion, known for their mastery over ancient bronze and alchemy.",
    "price": 37000,
    "icon": "🧪",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Resistance to Bludgeoning, Piercing, and Slashing Damage",
      "Halved Movement Speed"
    ],
    "vendor": "shanhaijing_shrine",
    "shippedBy": "Shanhaijing Courier Pigeons",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resilient Skin",
        "rules": "For one hour after consumption, you gain resistance to bludgeoning, piercing, and slashing damage. This effect ends if you take any action that requires a move or disengage from combat."
      },
      {
        "title": "Weighted Step",
        "rules": "Your movement speed is reduced by half while under the effects of this potion. This effect remains in place until your next short rest, at which point it is removed regardless of your actions."
      }
    ],
    "levelRequirementReason": "Even the simplest warrior can benefit from increased resilience and protection against physical attacks.",
    "vendorReason": "The shrine's alchemists are revered for their mastery over ancient bronze and their ability to craft such potent potions.",
    "shippingDetail": "Delivered swiftly by the trusted messenger pigeons of Shanhaijing, this potion is guaranteed to arrive in pristine condition.",
    "usage": {
      "activation": "Drink as an action",
      "duration": "1 hour or until you take a move action or disengage from combat",
      "endsWhen": "At the start of your next short rest",
      "charges": "Unlimited, recharged with each short rest"
    },
    "priceReason": "The potion's rarity and the skill required to craft it justify its moderate price.",
    "priceOriginal": 200000,
    "priceReviewedAt": "2026-07-23T18:29:02.433421+00:00",
    "aiReviewedAt": "2026-07-23T18:29:02.433421+00:00",
    "aiReviewVersion": 1
  },
  "shanhaijing_celestial_armaments": {
    "id": "shanhaijing_celestial_armaments",
    "name": "Shanhaijing Celestial Armaments (Set)",
    "description": "The Shanhaijing Celestial Armaments set, forged from solidified starlight, is a divine ensemble that whispers the ancient secrets of the celestial realm. The armor gleams with an inner light that repels both radiant and force damage, while the weapon channels pure celestial power, delivering devastating strikes that pierce through all defenses. Crafted by the immortal artisans of Shanhaijing, these armaments are said to have been blessed by the very stars themselves.",
    "price": 2000000,
    "icon": "✨",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Radiant Shield",
      "Divine Smite"
    ],
    "vendor": "shanhaijing_shrine",
    "shippedBy": "Astral Deposit",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Radiant Shield",
        "rules": "While wearing this armor, you gain resistance to radiant and force damage. This effect lasts until the start of your next turn."
      },
      {
        "title": "Divine Smite",
        "rules": "When you make a melee weapon attack while wielding the weapon in this set, you can deal an additional 4d6 radiant damage if the target is non-neutral. The target must succeed on a DC 18 Wisdom saving throw or be stunned until the end of your next turn."
      }
    ],
    "levelRequirementReason": "The Celestial Armaments require a formidable champion to wield their divine power.",
    "vendorReason": "Only the most devout and skilled warriors are deemed worthy of receiving this sacred set from Shanhaijing's shrine.",
    "shippingDetail": "The Celestial Armaments are delivered by a celestial courier, ensuring their safe arrival and imbuing them with additional divine blessings during transit.",
    "usage": {
      "activation": "Instantaneous activation whenever you make a melee weapon attack while wielding the set's weapon.",
      "duration": "Until your next turn after activation.",
      "endsWhen": "The effect ends if you are incapacitated or no longer wearing the armor.",
      "charges": "Unlimited, recharged by the stars at dawn."
    },
    "priceReason": "Reflecting its divine craftsmanship and rarity, the Celestial Armaments command an exorbitant price befitting their celestial origin.",
    "priceOriginal": 1200000,
    "priceReviewedAt": "2026-07-23T18:29:26.987263+00:00",
    "aiReviewedAt": "2026-07-23T18:29:26.987263+00:00",
    "aiReviewVersion": 1
  },
  "shanhaijing_celestial_dragon_ally": {
    "id": "shanhaijing_celestial_dragon_ally",
    "name": "Shanhaijing Celestial Dragon Ally (Temporary Pact)",
    "description": "The Shanhaijing Celestial Dragon Ally is a mystical scroll crafted from silk dyed with celestial ink, bearing the seal of the ancient Chinese text Shan Hai Jing. It forges an ephemeral pact with a minor Celestial Dragon, who arrives to provide tactical advice or unleash a single devastating breath attack, capable of leveling a small village in one strike. The dragon's aid is temporary, lasting 24 hours or until it exhausts its power by using this breath weapon.",
    "price": 510000,
    "icon": "🐉",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Tactical Advice",
      "Devastating Breath Attack"
    ],
    "vendor": "shanhaijing_shrine",
    "shippedBy": "Heavenly Summons",
    "levelRequirement": 19,
    "effectDetails": [
      {
        "title": "Tactical Advice",
        "rules": "Upon activation, the scroll allows you to communicate with a minor Celestial Dragon. The dragon provides strategic advice on how to best handle your current crisis. This effect is instantaneous and has no save DC or limits."
      },
      {
        "title": "Devastating Breath Attack",
        "rules": "The scroll can be activated once more, summoning the dragon for a single devastating breath attack that deals 5d10 fire damage to a target within 60 feet. The dragon must use its action on its turn to breathe this attack. This effect has a duration of one round and ends if the dragon is reduced to half its hit points or takes any nonmagical bludgeoning damage."
      }
    ],
    "levelRequirementReason": "This item requires at least level 19 due to the powerful abilities it unlocks, including a minor Celestial Dragon's tactical advice and devastating breath attack.",
    "vendorReason": "The Shan Hai Jing Shrine is known for its extensive knowledge of ancient Chinese texts and their magical properties, thus they are entrusted with this rare item.",
    "shippingDetail": "The scroll must be delivered by Heavenly Summons to ensure it arrives intact and ready to activate.",
    "usage": {
      "activation": "Requires an action or bonus action when the scroll is unsealed.",
      "duration": "Instantaneous for Tactical Advice, one round for Devastating Breath Attack.",
      "endsWhen": "The dragon uses its breath attack or is reduced to half its hit points.",
      "charges": "One use per scroll"
    },
    "priceReason": "This item provides a minor Celestial Dragon's tactical and combat assistance, making it valuable but not overwhelmingly powerful for level 19 characters.",
    "priceOriginal": 900000,
    "priceReviewedAt": "2026-07-23T18:29:33.062316+00:00",
    "aiReviewedAt": "2026-07-23T18:29:33.062316+00:00",
    "aiReviewVersion": 1
  },
  "shanhaijing_celestial_palace_deed": {
    "id": "shanhaijing_celestial_palace_deed",
    "name": "Shanhaijing Celestial Palace Deed",
    "description": "The Shanhaijing Celestial Palace Deed confers ownership of a minor palace floating amidst the clouds, accessible through aligned portals. This ethereal abode grants permanent residence in the Celestial Plane and bestows a healing aura that restores 1d6 hit points per hour to all inhabitants within its bounds. Crafted by the ancient Shanhaijing, this deed is a symbol of divine favor, ensuring safe passage and protection for those who claim it.",
    "price": 510000,
    "icon": "☁️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Healing Aura",
      "Celestial Residence"
    ],
    "vendor": "shanhaijing_shrine",
    "shippedBy": "Angel Courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Healing Aura",
        "rules": "Residents within the palace receive a constant healing effect that restores 1d6 hit points per hour. This effect is passive and does not require any action to activate."
      },
      {
        "title": "Celestial Residence",
        "rules": "The deed grants permanent residence in the Celestial Plane, allowing the owner and their allies to access a secure, heavenly sanctuary. The portal to this location can be activated through aligned portals within reach."
      }
    ],
    "levelRequirementReason": "This item is intended for high-level adventurers who have proven their worthiness by reaching the mid-to-high levels.",
    "vendorReason": "The shrine of Shanhaijing is a repository of divine relics, and this deed is one such artifact passed down through ancient lore.",
    "shippingDetail": "The Angel Courier ensures swift delivery of the deed, often arriving with dramatic flair in a burst of celestial light.",
    "usage": {
      "activation": "Instantaneous activation via aligned portal within reach.",
      "duration": "Permanent until destroyed or lost.",
      "endsWhen": "Only if the owner is banished from the Celestial Plane or the deed is lost.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item represents a divine favor and secure, eternal residence in the celestial realm, making it a valuable but not overpriced commodity among high-level adventurers.",
    "priceOriginal": 1500000,
    "priceReviewedAt": "2026-07-24T23:36:35.623781+00:00",
    "aiReviewedAt": "2026-07-24T23:36:35.623781+00:00",
    "aiReviewVersion": 1
  },
  "shanhaijing_celestial_portal_stone": {
    "id": "shanhaijing_celestial_portal_stone",
    "name": "Shanhaijing Celestial Portal Stone",
    "description": "The Shanhaijing Celestial Portal Stone, a smooth, obsidian orb inscribed with ancient Chinese characters, serves as a physical bridge to the ethereal realms of the Celestial Dragons. Crafted by the revered Shanhaijing through arcane rituals and divine intervention, this stone ensures safe passage between planes for those worthy enough to wield it. Carrying the weight of celestial power, the user gains resistance to radiant damage, shielding them from the harsh light of the heavens.",
    "price": 520000,
    "icon": "☁️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Radiant Resistance",
      "Safe Passage"
    ],
    "vendor": "shanhaijing_shrine",
    "shippedBy": "Cloud Casket",
    "levelRequirement": 19,
    "effectDetails": [
      {
        "title": "Radiant Resistance",
        "rules": "The user gains a +2 bonus to AC and all saving throws against radiant damage. This effect is permanent as long as the stone remains in the wielder's possession."
      },
      {
        "title": "Safe Passage",
        "rules": "Upon activation, the stone opens a stable portal to the Celestial Realms for 10 minutes. Traveling through this portal requires no special action or saving throw and is safe from all hazards. The portal can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The stone's power demands a high level of discipline, spiritual purity, and martial prowess to wield.",
    "vendorReason": "Only the Shanhaijing Shrine can validate the authenticity and proper use of such sacred relics.",
    "shippingDetail": "The Cloud Casket delivers the stone within a week, but only during clear celestial weather.",
    "usage": {
      "activation": "A bonus action is required to activate the portal. The portal remains open for 10 minutes and can be used once per long rest.",
      "duration": "10 minutes",
      "endsWhen": "The user can close it as a bonus action, or after 10 minutes.",
      "charges": "One use per short or long rest"
    },
    "priceReason": "The stone's rarity and divine craftsmanship justify its price in terms of XP.",
    "priceOriginal": 700000,
    "priceReviewedAt": "2026-07-23T18:29:57.277442+00:00",
    "aiReviewedAt": "2026-07-23T18:29:57.277442+00:00",
    "aiReviewVersion": 1
  },
  "shanhaijing_dragon_breath_bellows": {
    "id": "shanhaijing_dragon_breath_bellows",
    "name": "Shanhaijing Dragon Breath Bellows",
    "description": "The Shanhaijing Dragon Breath Bellows are forged from ancient bronze, their surface etched with arcane symbols that glow faintly when in use. These bellows can simulate the fierce breath of a dragon, heating tarts to perfection with a roar that echoes like thunder. The Eastern Forgers craft them with precision and care, ensuring each pair is imbued with just enough magic to heat precisely but not overheat if used too vigorously.",
    "category": "equipment",
    "price": 2400,
    "icon": "🍰",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+1 to fire cooking checks",
      "Roar like the breath of a dragon"
    ],
    "vendor": "shanhaijing_temple",
    "shippedBy": "Fiery Fan Fold",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heating Precision",
        "rules": "When activated, the bellows provide a +1 bonus to all fire-based cooking checks. This effect lasts until the end of your next turn."
      },
      {
        "title": "Dragon's Roar",
        "rules": "Upon activation, the bellows emit a roar that can be heard for 30 feet. It has no combat application but adds an intimidating and magical presence to any kitchen scene."
      }
    ],
    "levelRequirementReason": "These bellows are designed for beginners and cooks who need a little extra magic in their kitchens.",
    "vendorReason": "The Shanhaijing Temple is renowned for its mastery of ancient cooking techniques, making it the perfect place to find these enchanted tools.",
    "shippingDetail": "Ships via Fiery Fan Fold, known for swift and reliable deliveries within the realm.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect lasting until the end of your next turn",
      "endsWhen": "After one use per short or long rest",
      "charges": "Unlimited charges"
    },
    "priceReason": "The reduced price reflects its limited magical enhancement, making it accessible to less experienced cooks.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-23T18:29:52.709724+00:00",
    "aiReviewedAt": "2026-07-23T18:29:52.709724+00:00",
    "aiReviewVersion": 1
  },
  "shanhaijing_dragon_embroidered_silk": {
    "id": "shanhaijing_dragon_embroidered_silk",
    "name": "Shanhaijing Dragon Embroidered Silk",
    "description": "The Shanhaijing Dragon Embroidered Silk is a silk robe adorned with fierce, embroidered dragons that seem to leap from the fabric itself. Crafted by the Eastern Embroiderers using threads spun from dragon saliva, this robe whispers ancient secrets in the wind. The sleeves flow like rivers under pressure, granting the wearer +1 Acrobatics when performing stunts in gusty conditions. Dust dragons, mythical pests of the east, are drawn to the silk, offering a bizarre but effective deterrent against them.",
    "category": "equipment",
    "price": 2400,
    "icon": "👘",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+1 Acrobatics with flowing sleeves",
      "Attracts dust dragons for pest control"
    ],
    "vendor": "shanhaijing_palace",
    "shippedBy": "Dragon Thread Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Flowing Sleeves (Passive)",
        "rules": "When wearing the Shanhaijing Dragon Embroidered Silk, you gain +1 to your Acrobatics checks if performing stunts in gusty conditions."
      },
      {
        "title": "Dust Dragon Attraction (Instantaneous)",
        "rules": "The silk robe attracts dust dragons, which offer a 24-hour pest control service within a 30-foot radius. The attraction ends when the robe is removed or if five rounds pass without any pests detected."
      }
    ],
    "levelRequirementReason": "Beginners can appreciate and benefit from the elegance and utility of this silk robe.",
    "vendorReason": "The Shanhaijing Palace is renowned for its connections to ancient lore, making it a fitting vendor for such an artifact.",
    "shippingDetail": "Ships via Dragon Thread Express, known for its swift and secure deliveries through the skies of the east.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until removed or environmental conditions change.",
      "endsWhen": "When the robe is removed or if five rounds pass without pests detected (for dust dragon attraction).",
      "charges": "Unlimited"
    },
    "priceReason": "The silk's craftsmanship and magical properties justify its price, providing utility and a touch of ancient magic.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-23T18:30:16.803064+00:00",
    "aiReviewedAt": "2026-07-23T18:30:16.803064+00:00",
    "aiReviewVersion": 1
  },
  "shanhaijing_dragon_fruit_tarts_recipe": {
    "id": "shanhaijing_dragon_fruit_tarts_recipe",
    "name": "Recipe: Shanhaijing Dragon Fruit Tarts",
    "description": "The Recipe for Shanhaijing Dragon Fruit Tarts is a delicate parchment scroll, imbued with the essence of mythical dragons and the fiery heart of the Eastern Pastry Masters. The tarts themselves are not merely pastries but a culinary masterpiece, crafted from dragon fruit harvested from ancient groves beneath volcanic peaks. Each tart, when consumed, not only grants fire damage on your next weapon attack but also bestows resistance to fear, making you unshaken in the face of terror.",
    "price": 2400,
    "icon": "🍰",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Dragon's Fire Embrace",
      "Fearless Heart"
    ],
    "vendor": "shanhaijing_temple",
    "shippedBy": "Scaly Sweet Scroll",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dragon's Fire Embrace",
        "rules": "When you consume a tart and attack with a weapon, deal an additional 1d6 fire damage. This effect lasts until your next short or long rest."
      },
      {
        "title": "Fearless Heart",
        "rules": "For the duration of this recipe's effects, you have resistance to fear-based spells and abilities. If you are already resistant to fear, you instead gain advantage on saving throws against such effects."
      }
    ],
    "levelRequirementReason": "The delicate nature of mastering the dragon fruit's fiery essence requires a minimum level.",
    "vendorReason": "The temple, home to Eastern Pastry Masters and guardians of ancient recipes, ensures these tarts are prepared with the highest integrity.",
    "shippingDetail": "Delivered by enchanted scroll, ensuring the recipe's potency remains intact through airmail courier services.",
    "usage": {
      "activation": "Eating one tart when you have not yet attacked that round.",
      "duration": "Until your next short or long rest.",
      "endsWhen": "On completion of a short or long rest.",
      "charges": "Unlimited, as each tart is a single-use item."
    },
    "priceReason": "Balanced to provide significant flavor and utility without breaking the game economy.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T18:30:21.368719+00:00",
    "aiReviewedAt": "2026-07-23T18:30:21.368719+00:00",
    "aiReviewVersion": 1
  },
  "shanhaijing_dragon_scale_polish_premium": {
    "id": "shanhaijing_dragon_scale_polish_premium",
    "name": "Shanhaijing Dragon Scale Polish (Premium)",
    "description": "Polish crafted from ancient Shan Hai Jing dragon scales, this premium polish imbues armor with a shimmering luster that is both awe-inspiring and intimidating. Applied to any armor, it grants +1 AC against dragons for one week, and the wearer gains +2 to Intimidation checks when dealing with reptilian creatures. However, the application leaves the user's scales slightly flaky, causing minor itching. Eastern Dragon Smiths have mastered this art, creating a product that is both practical and visually striking.",
    "price": 2400,
    "icon": "🐲",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Draconic Defense",
      "Reptilian Intimidation"
    ],
    "vendor": "shanhaijing_temple",
    "shippedBy": "Scale Kit Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Draconic Defense",
        "rules": "Activate as a bonus action. Grants +1 AC against dragons for one week. Ends when the wearer removes the armor or if the armor is destroyed."
      },
      {
        "title": "Reptilian Intimidation",
        "rules": "Activates passively while wearing armor polished with this polish. Grants +2 to Intimidation checks against reptiles. Ends when the polish wears off."
      }
    ],
    "levelRequirementReason": "Beginners can appreciate the craftsmanship and benefits of dragon scale polish.",
    "vendorReason": "The temple is renowned for its connection to dragons, making it a fitting place for such a product.",
    "shippingDetail": "Delivered within one week, but requires a special courier who can handle delicate materials.",
    "usage": {
      "activation": "Bonus action or passively while worn",
      "duration": "1 week or until armor is removed/destroyed",
      "endsWhen": "Armor is removed or destroyed, or the polish wears off",
      "charges": "Unlimited"
    },
    "priceReason": "The premium quality and unique benefits justify a price of 1000 XP.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-23T18:30:10.705922+00:00",
    "aiReviewedAt": "2026-07-23T18:30:10.705922+00:00",
    "aiReviewVersion": 1
  },
  "shanhaijing_dragon_whisperer_scroll": {
    "id": "shanhaijing_dragon_whisperer_scroll",
    "name": "Shanhaijing Dragon Whisperer Scroll",
    "description": "The scroll, inscribed in cryptic characters, whispers secrets of ancient dragons as it unfurls. Crafted from the bark of sacred willow trees and inked by the hands of the Shanhaijing shrine, this scroll allows you to speak the tongue that has bridged Eastern dragons since time immemorial. With a flick of your wrist, you can gain advantage on checks to avoid provoking Eastern dragons, or even command lesser Celestial serpents with ease.",
    "price": 520000,
    "icon": "🐉",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Fluent Dragon Tongue",
      "Avoid Anger"
    ],
    "vendor": "shanhaijing_shrine",
    "shippedBy": "Silk-lined Case",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Fluent Dragon Tongue",
        "rules": "As an action, you can read the scroll and speak in Eastern dragon tongue. You gain advantage on checks to avoid angering or provoking a Celestial dragon. This effect lasts until you use it again."
      },
      {
        "title": "Avoid Anger",
        "rules": "While holding this scroll, you have advantage on saving throws against being charmed by Celestial dragons and other similar effects for 8 hours after using the Fluent Dragon Tongue ability."
      }
    ],
    "levelRequirementReason": "This scroll requires a high level of mastery to understand its ancient language.",
    "vendorReason": "The shrine is well-versed in the secrets of dragons and has crafted this scroll using their sacred knowledge.",
    "shippingDetail": "Delivered by swift couriers, ensuring safe arrival within a week.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; lasts until used again",
      "endsWhen": "Used again or destroyed",
      "charges": "Unlimited uses"
    },
    "priceReason": "The scroll's price reflects its rarity and the extensive resources required to craft it.",
    "priceOriginal": 450000,
    "priceReviewedAt": "2026-07-23T18:30:36.152139+00:00",
    "aiReviewedAt": "2026-07-23T18:30:36.152139+00:00",
    "aiReviewVersion": 1
  },
  "shanhaijing_elemental_talisman": {
    "id": "shanhaijing_elemental_talisman",
    "name": "Shanhaijing Elemental Talisman (Fire)",
    "description": "The Shanhaijing Elemental Talisman (Fire) is a small, fiery talisman that glows with an inner flame. Crafted by the ancient scholars of Shanhaijing, it channels raw fire elemental energy, capable of both devastating and protective magic. When activated, it can unleash a scorching Fireball in a 20-foot radius, incinerating all foes within its reach. The talisman also grants its bearer resistance to fire damage, making them nigh invulnerable to fiery assaults.",
    "price": 37000,
    "icon": "🔥",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Fireball (DC 18)",
      "Resistance to Fire Damage"
    ],
    "vendor": "shanhaijing_shrine",
    "shippedBy": "Phoenix Wing Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Fireball",
        "rules": "Activates as a bonus action. Deals 6d6 fire damage in a 20-foot cone, with a DC 18 Dexterity saving throw for half damage. Exhausts after one use per short or long rest."
      },
      {
        "title": "Resistance to Fire Damage",
        "rules": "Grants immunity to all fire damage while worn, lasting until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to wield effectively due to the raw elemental magic it channels.",
    "vendorReason": "The talismans are crafted and sold by the priests of Shanhaijing, who understand their power and purpose well.",
    "shippingDetail": "Ships via a Phoenix Wing Courier, ensuring swift delivery through the fiery empyrean.",
    "usage": {
      "activation": "Bonus action to cast Fireball; passive resistance to fire damage while worn.",
      "duration": "Instantaneous for Fireball; until next long rest for resistance.",
      "endsWhen": "Rests and charges exhausted.",
      "charges": "One use per short or long rest."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its powerful but limited utility in combat scenarios.",
    "priceOriginal": 110000,
    "priceReviewedAt": "2026-07-24T23:36:36.903243+00:00",
    "aiReviewedAt": "2026-07-24T23:36:36.903243+00:00",
    "aiReviewVersion": 1
  },
  "shanhaijing_immortality_tea": {
    "id": "shanhaijing_immortality_tea",
    "name": "Shanhaijing Tea of Longevity",
    "description": "The Shanhaijing Tea of Longevity is a delicate, golden-hued elixir that whispers ancient wisdom through each sip. Crafted from leaves plucked under the watchful gaze of the Jade Dragon, this tea halts physical aging for its drinker and must be consumed annually to maintain its divine effects. Should one ever falter in their annual ritual, the curse of age might still find them, a reminder that even gods face time's relentless march.",
    "price": 520000,
    "icon": "🍵",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Halts Physical Aging",
      "Annual Consumption Required"
    ],
    "vendor": "shanhaijing_shrine",
    "shippedBy": "Golden Teapot Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Halt Physical Aging",
        "rules": "The user’s physical aging is effectively paused. This effect does not prevent the accrual of age-based abilities or penalties, such as those imposed by magical curses."
      },
      {
        "title": "Annual Consumption Required",
        "rules": "To maintain the effects of the tea, one must consume it exactly once per year. Failure to do so will result in the resumption of normal aging processes."
      }
    ],
    "levelRequirementReason": "The tea's divine nature requires the drinker to be at least level 1 to appreciate its subtle effects.",
    "vendorReason": "As guardians of ancient knowledge, the Shanhaijing Shrine ensures that only those who can truly benefit and respect such a powerful item receive it.",
    "shippingDetail": "The Golden Teapot Couriers deliver with utmost care, ensuring the tea remains in perfect condition until it reaches its recipient.",
    "usage": {
      "activation": "Passive effect upon consumption; annual consumption required to maintain.",
      "duration": "Permanent while consumed, resets on annual re-consumption",
      "endsWhen": "Annual consumption missed or item destroyed",
      "charges": "Unlimited as long as consumed annually"
    },
    "priceReason": "The price reflects the divine crafting process and the rarity of ingredients used, ensuring it remains a valuable but balanced addition to any character's inventory.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-23T18:30:43.009492+00:00",
    "aiReviewedAt": "2026-07-23T18:30:43.009492+00:00",
    "aiReviewVersion": 1
  },
  "shanhaijing_imperial_seal": {
    "id": "shanhaijing_imperial_seal",
    "name": "Shanhaijing Imperial Seal (Diplomatic)",
    "description": "The Shanhaijing Imperial Seal glows softly with a jade sheen, its surface etched with ancient symbols that whisper of distant courts and long-lost empires. This sacred artifact is said to have been crafted by the divine artisans of Mount Tai during the height of the Eastern Han Dynasty. It grants its bearer unparalleled sway over diplomatic relations within the realm of Eastern Asia, allowing for swift audiences with any ruler or envoy. With this seal, one's words carry the weight of imperial decree and command.",
    "price": 530000,
    "icon": "👑",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "+5 bonus to all Diplomacy checks when dealing with Eastern/Asian-themed factions",
      "Force immediate audience with any ruler of that culture"
    ],
    "vendor": "shanhaijing_shrine",
    "shippedBy": "Imperial Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Diplomatic Favor",
        "rules": "Activates as an action. Grants a +5 bonus to all Diplomacy checks when interacting with Eastern or Asian-themed factions for 1 hour, after which the seal's power wanes and must recharge."
      },
      {
        "title": "Imperial Audience",
        "rules": "Activation: As part of an interaction. The bearer can demand a private audience with any ruler of Eastern/Asian descent within a week; the request is granted unless the target ruler is engaged in critical matters. This effect cannot be used more than once per month."
      }
    ],
    "levelRequirementReason": "The Imperial Seal's power requires a strong foundation in diplomacy and cultural understanding, hence the level requirement.",
    "vendorReason": "The Shrine of Shan Hai Jing houses the artifact as part of its sacred duties to maintain peace within Eastern Asia.",
    "shippingDetail": "Dispatched by trusted Imperial Couriers, who ensure swift and secure delivery with a minimum delay of one week from the shrine.",
    "usage": {
      "activation": "As part of an action or as part of an interaction.",
      "duration": "Instantaneous for Diplomatic Favor; 1 hour duration thereafter. For Imperial Audience: Once per week, lasts until granted audience or until the target ruler is unavailable due to critical matters.",
      "endsWhen": "Diplomatic Favor ends after one hour; Imperial Audience ends upon audience being granted or if the target ruler is unavailable.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced price reflects its rarity and the significant diplomatic advantage it confers, making it a strategic but not overpowered asset.",
    "priceOriginal": 400000,
    "priceReviewedAt": "2026-07-23T18:30:58.153929+00:00",
    "aiReviewedAt": "2026-07-23T18:30:58.153929+00:00",
    "aiReviewVersion": 1
  },
  "shanhaijing_jade_armor_plates": {
    "id": "shanhaijing_jade_armor_plates",
    "name": "Shanhaijing Jade Armor Plates (Set)",
    "description": "The Shanhaijing Jade Armor Plates are a set of armor forged from ancient mountain jade, imbued with the spiritual essence of the legendary Shanhaijing. These plates are both light and resilient, granting the wearer an AC of 18 while providing +1 to all saving throws against enchantment spells. However, if exposed to open flame for more than one minute, they lose 1 point of their Armor Class as the jade cracks and smolders under intense heat.",
    "price": 530000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Spiritual Protection",
      "Flame Vulnerability"
    ],
    "vendor": "shanhaijing_shrine",
    "shippedBy": "Armored Pallet",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Spiritual Protection",
        "rules": "Grants +1 to all saving throws against enchantment spells. This effect is passive and does not require activation."
      },
      {
        "title": "Flame Vulnerability",
        "rules": "If exposed to open flame for more than one minute, the armor loses 1 AC due to cracking and smoldering jade. The effect ends when the wearer leaves the source of fire or until repaired by a Craft Wondrous Item spell."
      }
    ],
    "levelRequirementReason": "The Shanhaijing Jade Armor Plates are crafted with intricate carvings and spiritual energies that require significant skill to wield effectively, making them suitable only for experienced heroes.",
    "vendorReason": "As the guardians of ancient knowledge and artifacts, the Shrine of Shanhaijing is entrusted with these sacred items.",
    "shippingDetail": "Delivered with a special chariot drawn by fire-breathing steeds, ensuring safe delivery to the recipient.",
    "usage": {
      "activation": "Passive effect. No activation required.",
      "duration": "Permanent until lost or destroyed.",
      "endsWhen": "Lost, destroyed, or repaired using a Craft Wondrous Item spell.",
      "charges": "Unlimited"
    },
    "priceReason": "The jade used in crafting this armor is rare and the spiritual essence imbued into it adds significant value, making it priced at 1000 XP.",
    "priceOriginal": 450000,
    "priceReviewedAt": "2026-07-23T18:31:05.842189+00:00",
    "aiReviewedAt": "2026-07-23T18:31:05.842189+00:00",
    "aiReviewVersion": 1
  }
};
