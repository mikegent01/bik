// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_050 = {
  "wario_land_yoshi_war_saddle": {
    "id": "wario_land_yoshi_war_saddle",
    "name": "Yoshi War Saddle (Bloodstained)",
    "description": "The Bloodstained Yoshi War Saddle is a formidable mount for those who dare to ride into battle. Crafted by Wario Land’s Cavalry Surplus, this saddle enhances your steed's combat prowess, adding +10 speed and granting the rider advantage on Intimidation checks during war engagements. However, its distinct garlic scent can be both a blessing and a curse, providing stealthy camouflage in the heat of battle but revealing your position to enemies through the pungent aroma.",
    "category": "equipment",
    "price": 620,
    "icon": "🐎",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Enhanced Speed",
      "Garlic Scent"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wario Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Speed",
        "rules": "The rider and their mount gain +10 speed for 8 hours per day. This effect can be used once per long rest."
      },
      {
        "title": "Garlic Scent",
        "rules": "While mounted, the rider has advantage on Intimidation checks against enemies within 30 feet but disadvantage on Stealth checks due to its pungent odor. The scent is only active when the mount is in combat."
      }
    ],
    "levelRequirementReason": "The saddle's effects are designed for riders who can benefit from its unique capabilities early in their career.",
    "vendorReason": "Wario Land, being a seasoned cavalry leader, supplies this saddle to ensure his troops have the edge in battle.",
    "shippingDetail": "Delivered by Wario Express with same-day service for a premium fee.",
    "usage": {
      "activation": "Passive effect once per long rest.",
      "duration": "8 hours per day, once per long rest.",
      "endsWhen": "Upon completion of the daily duration or when the rider dismounts in combat.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Bloodstained Yoshi War Saddle is priced moderately to reflect its unique benefits and rarity among mounts.",
    "priceOriginal": 4900,
    "priceReviewedAt": "2026-07-23T20:31:26.272584+00:00",
    "aiReviewedAt": "2026-07-23T20:31:26.272584+00:00",
    "aiReviewVersion": 1
  },
  "wario_painting_bootleg_royal_family": {
    "id": "wario_painting_bootleg_royal_family",
    "name": "Painting: Bootleg Mushroom Royal Family Portrait",
    "description": "This is a poorly executed painting of the Mushroom Kingdom’s royal family. Peach's expression looks weary, and Mario’s mustache is indeed crooked, giving it an almost comical feel. The artwork is slightly off-model, making it unmistakably a bootleg creation signed by its artist 'Peech'. While displayed, you gain +1 to Charisma (Deception) checks when pretending to be a close confidant of the royal family. Any NPC truly loyal to Princess Peach gets disadvantage on Charisma checks towards you due to their disdain for the painting’s quality.",
    "category": "equipment",
    "price": 94,
    "icon": "🖼️",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Royal Deception",
      "Loyal Loyalty Disadvantage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Package",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Royal Deception",
        "rules": "You can use an action to activate this effect. While displayed, you gain +1 to Charisma (Deception) checks when pretending to be a close confidant of the royal family. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Loyal Loyalty Disadvantage",
        "rules": "Any NPC truly loyal to Princess Peach gets disadvantage on Charisma checks towards you while this painting is displayed, as they are offended by its poor quality. This effect persists until the end of your next short or long rest."
      }
    ],
    "levelRequirementReason": "This item's effectiveness relies more on its humorous and slightly offensive nature rather than complex mechanics, making it accessible to lower-level characters.",
    "vendorReason": "Wario Land is known for his collection of bootleg and questionable items, so selling a poorly executed painting fits within his inventory.",
    "shippingDetail": "Ships via the Suspicious Package service with a 1-day delay due to its fragile nature.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of your next short or long rest",
      "endsWhen": "Ends when you finish a short or long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The price is adjusted to reflect its common rarity and limited utility, making it accessible yet not overpowered.",
    "priceOriginal": 4300,
    "priceReviewedAt": "2026-07-23T20:31:30.063703+00:00",
    "aiReviewedAt": "2026-07-23T20:31:30.063703+00:00",
    "aiReviewVersion": 1
  },
  "wario_painting_bootleg_waluigi_pinup": {
    "id": "wario_painting_bootleg_waluigi_pinup",
    "name": "Painting: Bootleg Waluigi Pin-Up Poster",
    "description": "A garish, over-the-top poster of Waluigi standing dramatically with a rose, his pose exaggerated to comical effect. It’s a knockoff, but somehow manages to exude an aura of misplaced confidence that rubs off on those who gaze upon it. Those who fail their first Wisdom save while in the same room as this poster burst into uncontrollable laughter, disrupting stealth and focus. The poster also grants +1 to Charisma (Performance) checks for anyone present in the room, making performances more convincing.",
    "category": "equipment",
    "price": 95,
    "icon": "🖼️",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Confidence Aura",
      "Awkward Laughter"
    ],
    "vendor": "wario_land",
    "shippedBy": "Folded Poster Tube",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Confidence Aura",
        "rules": "While in a room with this poster, creatures gain +1 to Charisma (Performance) checks. This effect is passive and lasts until the end of each long rest."
      },
      {
        "title": "Awkward Laughter",
        "rules": "Any creature who fails a DC 10 Wisdom saving throw upon first seeing the poster bursts into awkward laughter, making them noisy and ineffective for any stealth or concentration-based activities. This effect ends when the creature successfully makes another Wisdom save."
      }
    ],
    "levelRequirementReason": "Suitable for all adventurers to use in performances and comedic situations.",
    "vendorReason": "Wario Land is known for its quirky, over-the-top merchandise that fits this poster’s theme.",
    "shippingDetail": "Ships rolled up to prevent damage during transit.",
    "usage": {
      "activation": "Passive effect while in the same room as the poster.",
      "duration": "Until the end of each long rest.",
      "endsWhen": "A successful DC 10 Wisdom save or the end of a long rest.",
      "charges": "Unlimited, but only one creature can be affected by the awkward laughter at a time."
    },
    "priceReason": "Balanced price for an item that offers both performance and comedic benefits without being overpowered.",
    "priceOriginal": 3900,
    "priceReviewedAt": "2026-07-23T20:31:42.646134+00:00",
    "aiReviewedAt": "2026-07-23T20:31:42.646134+00:00",
    "aiReviewVersion": 1
  },
  "wario_painting_burning_of_bowsers_keep": {
    "id": "wario_painting_burning_of_bowsers_keep",
    "name": "Painting: Burning of Bowser’s Keep",
    "description": "A chaotic scene of Bowser’s fortress in flames, Magikoopas fleeing in every direction. The frame smells faintly of soot and singed shell, hinting at the inferno’s intensity. Meditating on this painting grants resistance to fire for 10 minutes, perfect for a calm night's rest. Koopa NPCs who see it must make a DC 12 Wisdom save or become sullen and less cooperative, affecting their social interactions for an hour.",
    "category": "equipment",
    "price": 620,
    "icon": "🖼️",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Base Décor",
      "Koopa Psychology"
    ],
    "vendor": "wario_land",
    "shippedBy": "Shell-Singed Shipment",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Meditative Fire Resistance",
        "rules": "Once per long rest, a creature can meditate on the painting to gain resistance to fire damage for 10 minutes."
      },
      {
        "title": "Koopa Sullenness",
        "rules": "Any Koopa NPC who sees this painting must make a DC 12 Wisdom saving throw or become sullen and less cooperative, disallowing advantage on social checks for the next hour."
      }
    ],
    "levelRequirementReason": "This painting is accessible to lower-level characters as it serves more as an ambiance piece than a combat tool.",
    "vendorReason": "Wario Land, known for his collection of unique and thematic home decor, would naturally carry this piece reflecting Bowser’s downfall.",
    "shippingDetail": "Ships with a small, custom box to protect the painting during transit.",
    "usage": {
      "activation": "Meditate on the painting once per long rest.",
      "duration": "10 minutes of fire resistance or until the meditation ends.",
      "endsWhen": "The effect duration ends upon completion of the meditation or when the creature no longer wishes to meditate.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This painting is priced at 1000 XP, reflecting its thematic value and decorative use in a home, rather than combat prowess.",
    "priceOriginal": 5600,
    "priceReviewedAt": "2026-07-23T20:31:59.810609+00:00",
    "aiReviewedAt": "2026-07-23T20:31:59.810609+00:00",
    "aiReviewVersion": 1
  },
  "wario_painting_fall_of_peach_castle": {
    "id": "wario_painting_fall_of_peach_castle",
    "name": "Painting: The Fall of Peach's Castle",
    "description": "This dramatic painting depicts Peach’s Castle under siege, with an oddly heroic light shining upon Wario as he stands in the foreground. Toad loyalists who catch a glimpse of it are compelled to challenge its historical accuracy and must save or become hostile toward those who believe otherwise. Hanging this artwork in your home grants you advantage on saving throws against fear each day, while also allowing you to gain inspiration for history-related checks during a short rest.",
    "category": "equipment",
    "price": 630,
    "icon": "🖼️",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Toad Loyalty Test",
      "Fear Advantage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Shady Relic Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Toad Loyalty Test",
        "rules": "When a Toad loyalist sees the painting, they must make a DC 12 Wisdom saving throw. On a failed save, they become hostile toward those who believe in the historical accuracy of Peach’s Castle's fall and may challenge them to a duel."
      },
      {
        "title": "Fear Advantage",
        "rules": "Allies within the same building as this painting have advantage on their first saving throw against fear each day. This effect is hardened by tragedy, meaning it persists even if the painting is removed or destroyed."
      }
    ],
    "levelRequirementReason": "The painting's historical and political implications make it a suitable item for players of all levels to interact with.",
    "vendorReason": "Wario Land is known for its vast collection of memorabilia, including items that subtly or overtly support Wario’s version of history.",
    "shippingDetail": "The painting arrives rolled up and securely wrapped in brown paper. Due to its fragile nature, it may take an extra day for delivery.",
    "usage": {
      "activation": "Passive effect when hanging; requires a short rest to gain inspiration.",
      "duration": "Instantaneous for Toad Loyalty Test; daily for Fear Advantage until removed or destroyed.",
      "endsWhen": "Once per week during a short rest, you can use it to gain inspiration for one history- or politics-related check.",
      "charges": "Unlimited"
    },
    "priceReason": "The painting's historical significance and the unique effects it provides make it a balanced addition to any player’s arsenal.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T20:31:57.892832+00:00",
    "aiReviewedAt": "2026-07-23T20:31:57.892832+00:00",
    "aiReviewVersion": 1
  },
  "wario_painting_glorious_self_portrait": {
    "id": "wario_painting_glorious_self_portrait",
    "name": "Painting: Wario's Glorious Self-Portrait",
    "description": "This enormous oil painting of Wario reclining on a pile of coins radiates an aura of self-assured laughter. The vivid colors and detailed brushstrokes make it seem almost alive, as if Wario himself is watching over you from the frame. Hung in any room, this masterpiece boosts your confidence: allies resting there gain +1 temporary hit points per long rest (self-confidence by osmosis). It also grants a unique advantage—once daily, you can reroll a failed Charisma (Intimidation) check, choosing to use the new result. Any attempt to vandalize it results in an immediate and loud 'WAAAH!', causing disadvantage on Stealth checks for all nearby creatures during the vandalism.",
    "category": "equipment",
    "price": 630,
    "icon": "🖼️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Self-Assurance Boost",
      "Reroll Charm"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wafting Cloud Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Self-Assurance Boost",
        "rules": "While this painting is hung in a room, each ally resting there gains +1 temporary hit point per long rest. This effect is passive and does not require an action."
      },
      {
        "title": "Reroll Charm",
        "rules": "Once per day, you can use your action to make a Charisma (Intimidation) check. You may reroll this check if the result was a failure, choosing to use the new roll instead of the original one."
      }
    ],
    "levelRequirementReason": "This painting is accessible to all adventurers regardless of level as it requires no specific combat or spellcasting abilities.",
    "vendorReason": "Wario Land is known for selling items that reflect his signature humor and self-confidence, making this painting a fitting addition to his inventory.",
    "shippingDetail": "Shipped via the Wafting Cloud Express service, this painting arrives safely and quickly, ensuring it's displayed in its best condition.",
    "usage": {
      "activation": "Passive effect; no activation required. Reroll Charm requires an action.",
      "duration": "Permanent for each resting ally while the painting is hung in a room.",
      "endsWhen": "The painting is removed from the room or destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects its uncommon rarity and the unique combination of benefits it offers, providing significant value to adventurers.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-23T20:31:47.685699+00:00",
    "aiReviewedAt": "2026-07-23T20:31:47.685699+00:00",
    "aiReviewVersion": 1
  },
  "wario_painting_koopa_truce_on_the_bridge": {
    "id": "wario_painting_koopa_truce_on_the_bridge",
    "name": "Painting: Koopa Truce on the Bridge",
    "description": "A grand painting depicting two Koopa captains shaking hands over a broken bridge, banners lowered and smoke still rising nearby. The artwork feels alive, exuding an aura of peace that lingers in the air. It hangs in Wario Land's quaint gallery, where it has become a symbol of reconciliation. Once per week, you can invoke this painting to automatically resolve a minor intra-party dispute (everyone calms down). The bridge within the painting occasionally drips a single illusionary drop of water, hinting at the fragile peace it represents.",
    "category": "equipment",
    "price": 630,
    "icon": "🖼️",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Negotiation Boost",
      "Morale Lift"
    ],
    "vendor": "wario_land",
    "shippedBy": "Shell Sound Service",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Negotiation Boost",
        "rules": "Once per week, you can invoke the painting to automatically end a minor intra-party argument. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Morale Lift",
        "rules": "Any Koopa NPCs in the room gain +1 morale bonus and are less likely to flee from combat or social situations, lasting until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This painting is crafted with intricate detail that requires a certain level of perception and understanding.",
    "vendorReason": "Wario Land's gallery houses unique art pieces, including this Koopa Truce painting.",
    "shippingDetail": "The painting is carefully packed in a durable crate to ensure safe delivery.",
    "usage": {
      "activation": "Instantaneous action",
      "duration": "Instantaneous",
      "endsWhen": "Once per week, automatically ends after resolving the dispute.",
      "charges": "Unlimited"
    },
    "priceReason": "The painting is priced at a fair value considering its unique lore and functionality.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-23T20:32:10.948337+00:00",
    "aiReviewedAt": "2026-07-23T20:32:10.948337+00:00",
    "aiReviewVersion": 1
  },
  "wario_painting_last_stand_of_the_toad_brigade": {
    "id": "wario_painting_last_stand_of_the_toad_brigade",
    "name": "Painting: Last Stand of the Toad Brigade",
    "description": "A grand, meticulously crafted painting depicting Toad soldiers rallying in a final stand against insurmountable odds atop a crumbling parapet. The canvas vibrates with the spirit of valor and sacrifice, its hues shifting as if the heroes live on. Allies who catch sight of it during rest gain +1 to their next death saving throw that day, while those who gaze upon it often find themselves unconsciously bolstered in their persuasive efforts among Toads for an hour.",
    "category": "equipment",
    "price": 630,
    "icon": "🖼️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Heroic Respite",
      "Charismatic Boost"
    ],
    "vendor": "wario_land",
    "shippedBy": "Toad Trot Transport",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heroic Respite",
        "rules": "Allies who take a short or long rest in sight of this painting gain +1 to their next death saving throw that day. This effect can be used once per resting period."
      },
      {
        "title": "Charismatic Boost",
        "rules": "Toads who see the painting often find themselves unconsciously bolstered, granting them a +1 bonus to Charisma (Persuasion) checks with those they encounter for 1 hour. This effect can be used once per day."
      }
    ],
    "levelRequirementReason": "The painting's inspirational and morale-boosting effects are accessible to all adventurers, regardless of level.",
    "vendorReason": "Wario Land is known for his keen eye for collectibles and artifacts that resonate with the Toad Brigade’s legacy.",
    "shippingDetail": "The painting is shipped rolled in a protective case, ensuring it arrives undamaged.",
    "usage": {
      "activation": "Passive effect when sighted during rest or interaction.",
      "duration": "Instantaneous; lasts until the next death saving throw for Heroic Respite, and 1 hour for Charismatic Boost.",
      "endsWhen": "The painting's effects end upon completion of their duration or if it is no longer in view.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a moderate price to reflect its inspirational and morale-boosting nature, providing significant benefits for all adventurers.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-23T20:32:17.170916+00:00",
    "aiReviewedAt": "2026-07-23T20:32:17.170916+00:00",
    "aiReviewVersion": 1
  },
  "wario_painting_luigi_missing_in_action": {
    "id": "wario_painting_luigi_missing_in_action",
    "name": "Painting: Luigi – Missing in Action",
    "description": "This melancholic portrait of Luigi, captured mid-disappearance, hangs over a battlefield, his torn cape and uncertain gaze evoking a somber mood. The faint scent of oil paints lingers in the air around it, hinting at Luigi's possible role as its creator. Those who rest in this room find comfort; their Wisdom (Insight) checks are bolstered by an unyielding sense of calm. For Luigi sympathizers, seeing this painting heightens their persuasiveness, offering a subtle but powerful boost to their interactions with him.",
    "category": "equipment",
    "price": 630,
    "icon": "🖼️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Comforting Presence",
      "Sympathy Boost"
    ],
    "vendor": "wario_land",
    "shippedBy": "Spooky Shipment",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Comforting Presence",
        "rules": "While resting in the same room as this painting, creatures gain advantage on one Wisdom (Insight) check per day. This effect is passive and does not require any action."
      },
      {
        "title": "Sympathy Boost",
        "rules": "Luigi sympathizers who view this painting for at least 10 minutes gain a +2 bonus to Persuasion checks against Luigi for the next 24 hours. This effect is limited to once per week."
      }
    ],
    "levelRequirementReason": "The painting provides comfort and insight, benefits that are most impactful at lower levels where Wisdom (Insight) checks are more crucial.",
    "vendorReason": "Wario Land keeps this item in his collection of rare memorabilia from the Mushroom Kingdom's history.",
    "shippingDetail": "The painting is shipped rolled up and wrapped securely, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous for Comforting Presence, daily duration for Sympathy Boost.",
      "endsWhen": "Duration ends at the start of the next day or when the painting is not in the room.",
      "charges": "Unlimited"
    },
    "priceReason": "The painting's unique historical significance and emotional value justify its price, making it a valuable addition to any adventurer's collection.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-23T20:32:28.281208+00:00",
    "aiReviewedAt": "2026-07-23T20:32:28.281208+00:00",
    "aiReviewVersion": 1
  },
  "wario_painting_ruins_of_the_royal_garden": {
    "id": "wario_painting_ruins_of_the_royal_garden",
    "name": "Painting: Ruins of the Royal Garden",
    "description": "The Painting: Ruins of the Royal Garden is a meticulously crafted canvas that once depicted lush gardens but now shows only desolation and a single, vibrant pink rose. It radiates the quiet melancholy of forgotten grandeur. Herbalism and gardening checks within its vicinity are favored by the presence of this ornate artwork. Meditating before it allows a viewer to recover 1 expended Hit Die in a tranquil setting. Watering the rose with a potion causes it to briefly glow, enhancing healing effects in that room for an additional +1 HP.",
    "category": "equipment",
    "price": 630,
    "icon": "🖼️",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Base Décor",
      "Melancholic Rest"
    ],
    "vendor": "wario_land",
    "shippedBy": "Floral Freight",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Base Décor",
        "rules": "While the Painting is present, herbalism or gardening-related checks within its space have advantage. This effect is passive and remains active as long as the painting is displayed."
      },
      {
        "title": "Melancholic Rest",
        "rules": "Once per day, a viewer may meditate for 10 minutes before the Painting to recover 1 expended Hit Die. The meditation is performed as an action, with no save required. This effect ends when the viewer completes their rest."
      }
    ],
    "levelRequirementReason": "The painting's calming effects are accessible to any character, regardless of level.",
    "vendorReason": "Wario Land is known for his eclectic collection of bizarre and useful items, including this piece of art that has a soothing influence on visitors.",
    "shippingDetail": "Shipped with care to ensure the painting arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Active as long as the painting is displayed.",
      "endsWhen": "The painting is removed or destroyed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price for a versatile and calming decorative item that offers unique restorative benefits.",
    "priceOriginal": 5400,
    "priceReviewedAt": "2026-07-23T20:32:14.268090+00:00",
    "aiReviewedAt": "2026-07-23T20:32:14.268090+00:00",
    "aiReviewVersion": 1
  },
  "wario_painting_the_first_toast_to_freedom": {
    "id": "wario_painting_the_first_toast_to_freedom",
    "name": "Painting: The First Toast to Freedom",
    "description": "Hang this painting in a tavern and watch as rebels and former royal guards raise mismatched mugs, celebrating their first toast to freedom in the ruins of Toad Town. The scene is painted with vibrant colors and detailed brushstrokes, capturing the heartwarming yet tense moment of unity. Short rests here grant +1 extra HP (if you spend any Hit Dice), and characters gain advantage on Charisma checks to negotiate truces or ceasefires within this room.",
    "category": "equipment",
    "price": 95,
    "icon": "🖼️",
    "stock": 7,
    "rarity": "common",
    "effects": [
      "Short Rest Healing",
      "Negotiation Advantage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Barrel of Prints",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Short Rest Healing",
        "rules": "When a character takes a short rest in the presence of this painting, they regain an additional hit point (if they spend any Hit Dice during the rest). This effect is passive and does not require action."
      },
      {
        "title": "Negotiation Advantage",
        "rules": "For 1 hour after hanging the painting, characters gain advantage on Charisma checks to negotiate truces or ceasefires within this room. The effect ends if the painting is removed from the tavern."
      }
    ],
    "levelRequirementReason": "This painting's themes of unity and resilience are accessible even to lower-level characters.",
    "vendorReason": "Wario Land, known for his appreciation of art and political commentary, often sells unique items that blend humor with historical significance.",
    "shippingDetail": "The painting is carefully rolled in a durable canvas cover to prevent damage during transport.",
    "usage": {
      "activation": "Passive effect upon hanging the painting; ends when removed from the tavern.",
      "duration": "1 hour per day, once used per week",
      "endsWhen": "The painting is taken down or damaged beyond recognition.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Given its common rarity and the unique benefits it provides, this painting is priced at a fair value of 1000 XP.",
    "priceOriginal": 4400,
    "priceReviewedAt": "2026-07-23T20:33:24.313499+00:00",
    "aiReviewedAt": "2026-07-23T20:33:24.313499+00:00",
    "aiReviewVersion": 1
  },
  "wario_painting_warios_war_room_map": {
    "id": "wario_painting_warios_war_room_map",
    "name": "Painting: Wario’s War Room Tactical Map",
    "description": "This grand painting depicts Wario’s War Room with meticulously crafted arrows and X's marking locations of supposed treasure. While it may seem like a mere decorative piece, it holds strategic value for those familiar with the Mushroom Kingdom’s terrain. The map grants a +1 bonus to initiative rolls when used in planning for 10 minutes, and provides advantage on Intelligence (History or Investigation) checks related to Wario’s lair.",
    "category": "equipment",
    "price": 96,
    "icon": "🗺️",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Base Décor",
      "Tactical Advantage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Oversized Roll",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Base Décor",
        "rules": "While studying the map for 10 minutes, each party member gains a +1 bonus to their next Initiative roll."
      },
      {
        "title": "Tactical Advantage",
        "rules": "Once per day, a character can gain advantage on one Intelligence (History or Investigation) check related to Wario’s lair or the Mushroom Kingdom's geography."
      }
    ],
    "levelRequirementReason": "Anyone can benefit from the map's strategic insights.",
    "vendorReason": "Wario Land keeps this item in stock for those who might want to impress him with their knowledge of his territory or gather clues about his treasures.",
    "shippingDetail": "The oversized painting requires special handling and is shipped via Oversized Roll, ensuring safe delivery.",
    "usage": {
      "activation": "Passive for Base Décor; once per day for Tactical Advantage",
      "duration": "Instantaneous (Base Décor), 1 use per day (Tactical Advantage)",
      "endsWhen": "No special condition ends the effect; it simply runs out after one use.",
      "charges": "Unlimited (Base Décor); 1/day (Tactical Advantage)"
    },
    "priceReason": "The painting’s rarity and utility justify its price, providing strategic benefits without overburdening the party.",
    "priceOriginal": 4900,
    "priceReviewedAt": "2026-07-23T20:32:28.297400+00:00",
    "aiReviewedAt": "2026-07-23T20:32:28.297400+00:00",
    "aiReviewVersion": 1
  },
  "wario_painting_wartime_market_bazaar": {
    "id": "wario_painting_wartime_market_bazaar",
    "name": "Painting: Wartime Market Bazaar",
    "description": "A bustling black-market scene in Rogueport, where Toads, Koopas, and Shy Guys trade under Wario’s big banner. The oil-painted canvas captures the chaotic energy of the market, with every detail from the colorful banners to the bustling crowd. This Painting: Wartime Market Bazaar grants you a +5% bonus on prices when trading with shady NPCs in that location. Once per day, it allows you to gain advantage on one Charisma (Deception) or (Persuasion) check related to trade. Guards who see this painting become suspicious, gaining disadvantage on Stealth checks while they are around.",
    "category": "equipment",
    "price": 96,
    "icon": "🖼️",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Market Advantage",
      "Trade Persuasion"
    ],
    "vendor": "wario_land",
    "shippedBy": "Coin-Operated Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Market Advantage",
        "rules": "While the Painting is displayed, you gain a +5% bonus to prices when trading with shady NPCs in that location. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Trade Persuasion",
        "rules": "Once per day, while this Painting is displayed, you can gain advantage on one Charisma (Deception) or (Persuasion) check related to trade. The use ends when you finish a short or long rest."
      }
    ],
    "levelRequirementReason": "This painting is suitable for adventurers of all levels as it provides useful benefits without overwhelming them.",
    "vendorReason": "Wario himself insists this item is a ‘documentary realism’ and ensures its quality, making it an essential tool for his patrons.",
    "shippingDetail": "The painting arrives rolled in sturdy cardboard, ensuring it remains undisturbed during transit.",
    "usage": {
      "activation": "Passive effect upon display; daily use limit applies to Trade Persuasion.",
      "duration": "Until the end of your next long rest for Market Advantage; until you finish a short or long rest for Trade Persuasion.",
      "endsWhen": "The painting is no longer displayed, or when you complete a long rest.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This fair value reflects the item's utility and rarity in providing advantageous trading conditions.",
    "priceOriginal": 4600,
    "priceReviewedAt": "2026-07-23T20:32:49.228324+00:00",
    "aiReviewedAt": "2026-07-23T20:32:49.228324+00:00",
    "aiReviewVersion": 1
  },
  "wario_painting_wartime_propaganda_poster": {
    "id": "wario_painting_wartime_propaganda_poster",
    "name": "Painting: ‘Wario Will Save the Kingdom!’ Propaganda",
    "description": "A gaudy, stylized war poster with Wario heroically punching Bowser and collecting taxes at the same time. This relic of wartime propaganda exudes a garish charm that instantly captivates onlookers, who can't help but feel a surge of loyalty to the mischievous plumber. The poster is crafted from durable paper and ink, bearing the official seal of Wario Land’s Ministry of Propaganda. It's one of countless posters printed during the kingdom's struggle against Bowser's tyranny.",
    "category": "equipment",
    "price": 96,
    "icon": "🖼️",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Charismatic Appeal",
      "Rallying Cry"
    ],
    "vendor": "wario_land",
    "shippedBy": "Flyer Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charismatic Appeal",
        "rules": "When you make a Charisma (Intimidation) or Charisma (Persuasion) check on new visitors, you can spend 1 charge to gain +2 instead of +1. This effect is only active if you loudly mention Wario's heroic deeds depicted in the poster."
      },
      {
        "title": "Rallying Cry",
        "rules": "You can use your action to activate this effect once per day, rallying allies within 30 feet. Each ally gains a +1 bonus to their next attack roll or saving throw against an enemy of your choice until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This item is suitable for lower-level characters who can benefit from its inspirational effects in group settings.",
    "vendorReason": "Wario Land, being the creator of this propaganda poster, ensures that it reaches those who need inspiration and support during trying times.",
    "shippingDetail": "Delivered by Wario's personal flyer team, ensuring swift delivery to eager recipients.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "Instantaneous effect for Charismatic Appeal; until the start of your next turn for Rallying Cry",
      "endsWhen": "The effect ends when its duration expires or you use it again",
      "charges": "Recharge after a short rest"
    },
    "priceReason": "This item provides significant social and battlefield benefits at a reasonable cost, making it accessible to those who need encouragement.",
    "priceOriginal": 4100,
    "priceReviewedAt": "2026-07-23T20:32:46.671357+00:00",
    "aiReviewedAt": "2026-07-23T20:32:46.671357+00:00",
    "aiReviewVersion": 1
  },
  "wario_painting_yoshi_cavalry_charge": {
    "id": "wario_painting_yoshi_cavalry_charge",
    "name": "Painting: Yoshi Cavalry Charge",
    "description": "The sweeping landscape of mounted Yoshis charging across a sunflower field toward Koopa lines. The painting's Yoshis seem to move with life, their hooves raising tiny dust clouds as they charge. Resting in this room grants creatures +5 ft movement on their first round of combat. Seeing the painting calms even the most hostile Yoshis: those who observe it gain advantage on social checks with Yoshis for an hour.",
    "category": "equipment",
    "price": 630,
    "icon": "🖼️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Yoshi Calm",
      "First Round Movement Boost"
    ],
    "vendor": "wario_land",
    "shippedBy": "Egg Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Yoshi Calm",
        "rules": "Creatures who spend at least 1 minute in the room where this painting hangs gain advantage on social checks with Yoshis for an hour. This effect ends if the creature leaves the room or spends more than 24 hours away."
      },
      {
        "title": "First Round Movement Boost",
        "rules": "Creatures who begin combat after resting in this room gain +5 ft movement on their first round of initiative. This effect can be used once per day and is expended immediately upon activation."
      }
    ],
    "levelRequirementReason": "This painting provides a simple, immediate benefit without requiring high-level feats or abilities.",
    "vendorReason": "Wario Land often sells quirky yet useful items that appeal to his customers' whimsical tastes.",
    "shippingDetail": "Delivered by Egg Express, known for their reliable delivery service, ensuring the painting arrives in perfect condition.",
    "usage": {
      "activation": "Passive effect upon entering the room; once per day active use.",
      "duration": "Until creature leaves the room or social check advantage ends",
      "endsWhen": "Creature leaves the room or spends more than 24 hours away from it, or daily active use is exhausted.",
      "charges": "Daily"
    },
    "priceReason": "The painting's effects are balanced and provide a useful benefit without being overpowered.",
    "priceOriginal": 5700,
    "priceReviewedAt": "2026-07-23T20:32:44.858904+00:00",
    "aiReviewedAt": "2026-07-23T20:32:44.858904+00:00",
    "aiReviewVersion": 1
  },
  "wario_signed_waluigi_poster": {
    "id": "wario_signed_waluigi_poster",
    "name": "Wario-Signed Waluigi Poster",
    "description": "The Wario-Signed Waluigi Poster hangs like a relic from a bygone era, its vibrant colors now faded and smudged by time. The signature of Wario, once crisp and bold, has long since blurred into an illegible mess, yet it retains a peculiar charm. Flattened against the wall, it grants you a lucky boost, offering advantage on one Charisma check per day. Unfolded, its edges curl, bringing disadvantage to any checks until it's smoothed out again. WarioWare Printing's handiwork ensures its unique character, though not without quirks.",
    "category": "equipment",
    "price": 97,
    "icon": "🖼️",
    "stock": 11,
    "rarity": "common",
    "effects": [
      "Lucky Charm",
      "Poster Curl"
    ],
    "vendor": "wario_land",
    "shippedBy": "Poster Tube Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Lucky Charm",
        "rules": "When the poster is flattened against a wall, you gain advantage on one Charisma check per day. This effect lasts until the start of your next long rest."
      },
      {
        "title": "Poster Curl",
        "rules": "If not flattened, you have disadvantage on all checks and saving throws until you take the time to smooth out its edges. Once smoothed, this effect is immediately removed."
      }
    ],
    "levelRequirementReason": "This poster is accessible to beginners as it requires minimal setup before its effects can be used.",
    "vendorReason": "Wario himself ensures that his signature pieces are available for sale, even if they come with a unique set of quirks.",
    "shippingDetail": "Delivered flat in a sturdy tube to ensure it arrives in its best condition.",
    "usage": {
      "activation": "Passive effect when the poster is flattened against a wall; requires smoothing out to negate disadvantage.",
      "duration": "Lucky Charm lasts until your next long rest; Poster Curl ends once smoothed out.",
      "endsWhen": "Poster Curl ends as soon as it's smoothed out, Lucky Charm ends at the start of your next long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The poster's unique charm and Wario's signature make it a popular item among casual adventurers.",
    "priceOriginal": 4300,
    "priceReviewedAt": "2026-07-23T20:33:12.504505+00:00",
    "aiReviewedAt": "2026-07-23T20:33:12.504505+00:00",
    "aiReviewVersion": 1
  },
  "wario_wario_ware_microgame_console": {
    "id": "wario_wario_ware_microgame_console",
    "name": "WarioWare Microgame Console (Gimmick Gadget!)",
    "description": "The WarioWare Microgame Console is a compact, battery-powered device that hums with Wario's mischievous energy. Crafted by WarioWare Inc., this gadget features 10 unique microgames designed to test your reflexes and quick thinking. Each game lasts just one minute, during which you can gain advantage on a Dexterity check next encounter if you play successfully. However, the console’s batteries are notoriously unreliable; there's a 20% chance it will fail when needed, adding an extra layer of challenge.",
    "category": "equipment",
    "price": 630,
    "icon": "🎮",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Gain Advantage on One Dexterity Check Next Encounter",
      "Battery Reliability Issues"
    ],
    "vendor": "wario_land",
    "shippedBy": "Game Gear Go",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dexterity Check Advantage",
        "rules": "Play one microgame (1 minute) for the chance to gain advantage on a Dexterity check next encounter. This effect is passive and lasts until used."
      },
      {
        "title": "Battery Reliability Issues",
        "rules": "There's a 20% chance that when needed, the console will fail randomly. This effect ends immediately upon failure."
      }
    ],
    "levelRequirementReason": "The console requires no specific level as it is designed for quick reflex training and entertainment.",
    "vendorReason": "WarioLand specializes in quirky gadgets and novelties, making the WarioWare Microgame Console a perfect addition to their inventory.",
    "shippingDetail": "Shipped with Game Gear Go's signature express delivery service.",
    "usage": {
      "activation": "Play one microgame (1 minute) for the duration of its effect.",
      "duration": "Until used or interrupted by failure.",
      "endsWhen": "Console fails randomly due to battery issues; upon gaining advantage on a Dexterity check.",
      "charges": "Unlimited uses until the console fails."
    },
    "priceReason": "The WarioWare Microgame Console is priced at 1000 XP, reflecting its quirky design and unreliable yet entertaining nature.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T20:33:01.028356+00:00",
    "aiReviewedAt": "2026-07-23T20:33:01.028356+00:00",
    "aiReviewVersion": 1
  },
  "warios_franchise": {
    "id": "warios_franchise",
    "name": "WarioWare, Inc. Majority Share",
    "description": "The Warios Franchise Majority Share is a gleaming stock certificate from Wario Direct, forged in the fires of Delfino Square. When you hold it, the streets of your town will hum with productivity as every shop offers its goods for free. Daily, you'll see 10,000 gold coins appear in your vault, courtesy of Wario's Warehouse. Rumors say that Wario himself, despite his protests, works tirelessly to keep things running smoothly.",
    "category": "premium",
    "price": 900000000000000,
    "icon": "💰",
    "stock": 1,
    "rarity": "godly",
    "economyImpact": {
      "tier": "economy_breaker",
      "priceFloor": 900000000000000,
      "dailyGold": 10000,
      "freeShopRadiusMiles": 1,
      "dealEligible": false,
      "reason": "Permanent majority ownership, unlimited daily income, and free regional commerce must remain an institutional endgame acquisition."
    },
    "effects": [
      "All shops offer their wares for free",
      "Daily income of 10,000 gold coins"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Wario Express Courier Service",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Free Shop Goods",
        "rules": "Upon activation, all shops within a 1-mile radius become free to patrons. This effect is instantaneous and lasts until the item's charges are exhausted."
      },
      {
        "title": "Daily Gold Income",
        "rules": "At dawn each day, you receive 10,000 gold coins from Wario's Warehouse. This effect continues as long as the item remains in your possession."
      }
    ],
    "levelRequirementReason": "A permanent corporate-control asset with uncapped regional commerce effects is restricted to level 20 endgame characters and still requires DM approval.",
    "vendorReason": "Only Wario Direct can offer such a powerful and controversial artifact, ensuring authenticity and exclusivity.",
    "shippingDetail": "The courier delivers the item directly to your home, bypassing any local authorities or taxes.",
    "usage": {
      "activation": "Passive effect; no activation required",
      "duration": "Instantaneous and ongoing while in possession",
      "endsWhen": "Exhausts charges or is destroyed by a successful Wario-level spell",
      "charges": "Unlimited while the deed remains valid; requires a yearly tribute of 100,000,000 gold coins and explicit DM renewal to maintain"
    },
    "priceReason": "Restored to its 900-trillion-gold institutional valuation because permanent free commerce and 10,000 gold per day are campaign-economy-breaking benefits.",
    "priceOriginal": 900000000000000,
    "priceReviewedAt": "2026-07-23T20:33:15.005962+00:00",
    "aiReviewedAt": "2026-07-23T20:33:15.005962+00:00",
    "aiReviewVersion": 1
  },
  "warp_pipe_installation": {
    "id": "warp_pipe_installation",
    "name": "Warp Pipe Installation",
    "description": "The Warp Pipe Installation, a marvel of underground engineering, creates an unbreakable conduit between two locations up to 200 feet apart. This forged steel pipe not only ensures instant travel but also serves as a symbol of the Underground Network's mastery over spatial reality. Once installed by a licensed plumber from Warp Plumbing Corp., this indestructible portal stands against all spells and forces, safeguarded by the very essence of the Earth itself.",
    "category": "services",
    "price": 7900,
    "icon": "🪨",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Instantaneous Travel",
      "Indestructible"
    ],
    "vendor": "warp_plumbing_corp",
    "shippedBy": "Underground Crew",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Instantaneous Travel",
        "rules": "Activates with a simple command word. The pipe instantly transports any creature within its range to the other connected location, up to 200 feet away. This effect is instantaneous and can be used once per day."
      },
      {
        "title": "Indestructible",
        "rules": "The pipe has AC 20, 100 hit points, and is immune to all spells and magical effects. It requires a 'Pipe License' from the Underground Network (DM discretion) for installation and maintenance."
      }
    ],
    "levelRequirementReason": "Requires at least 8th level to ensure the caster can handle the spatial magic involved in creating such a stable portal.",
    "vendorReason": "Warp Plumbing Corp. is known for its expertise and reliability, ensuring that only the most secure and efficient warp pipes are installed.",
    "shippingDetail": "The installation team from Warp Plumbing Corp. will personally supervise the delivery and setup of this critical infrastructure.",
    "usage": {
      "activation": "Command word upon installation; once per day thereafter.",
      "duration": "Instantaneous travel only, lasts until next long rest for recharging.",
      "endsWhen": "Exhausted after one use or destroyed if physical integrity is compromised.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The installation cost reflects the specialized engineering, materials, and ongoing maintenance required to ensure the pipe's stability and security.",
    "priceOriginal": 100000,
    "priceReviewedAt": "2026-07-23T20:33:28.835216+00:00",
    "aiReviewedAt": "2026-07-23T20:33:28.835216+00:00",
    "aiReviewVersion": 1
  },
  "warriors_chaos_chaos_resistance_training": {
    "id": "warriors_chaos_chaos_resistance_training",
    "name": "Warriors Chaos Chaos Resistance Training",
    "description": "The Warriors Chaos Chaos Resistance Training immerses you in chaotic energies, teaching resilience through confrontation. For a week, you gain advantage on saving throws against confusion and wild magic, but your unpredictable nature can lead to DM-discrepancies: once daily, you may act oddly without warning. Your alignment subtly shifts toward Chaotic during this time, marking you as a disciple of the untamed forces. This training is offered by Warriors Chaos Boot Camp, known for pushing students to their limits.",
    "category": "services",
    "price": 3100,
    "icon": "☯️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Saves vs. Confusion and Wild Magic",
      "Slightly Unpredictable"
    ],
    "vendor": "warriors_chaos",
    "shippedBy": "Chaos Warp Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Saves vs. Confusion and Wild Magic",
        "rules": "You gain advantage on saving throws against confusion and wild magic for a duration of 7 days. This effect ends if you are no longer within the boot camp's training grounds."
      },
      {
        "title": "Slightly Unpredictable",
        "rules": "Once per day, the DM can have you act oddly without warning due to your immersion in chaotic energies. This effect is a passive trait that does not require an action or reaction."
      }
    ],
    "levelRequirementReason": "This training is suitable for adventurers just beginning their journey into chaos magic.",
    "vendorReason": "Warriors Chaos Boot Camp specializes in pushing students to embrace the wild and unpredictable, making this service a cornerstone of their curriculum.",
    "shippingDetail": "This item is delivered via Chaos Warp Express, known for its unpredictable arrival times. Plan accordingly, as packages may arrive days earlier or later than expected.",
    "usage": {
      "activation": "Passive effect upon completion of the training.",
      "duration": "7 days from completion",
      "endsWhen": "You leave the boot camp's training grounds",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the intensive, immersive nature of this training and the materials required to facilitate it.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-23T20:33:40.394349+00:00",
    "aiReviewedAt": "2026-07-23T20:33:40.394349+00:00",
    "aiReviewVersion": 1
  },
  "warriors_chaos_chaos_theory_basics": {
    "id": "warriors_chaos_chaos_theory_basics",
    "name": "Warriors Chaos Chaos Theory Basics",
    "description": "Forgeheart Core, this tiny device hums with arcane power, whispering secrets of chaos and balance. Crafted by Warriors Chaos Theory, it grants a fleeting glimpse into the butterfly's wings that can stir hurricanes. For 10 minutes after activation, you gain advantage on Intelligence (Investigation) checks related to cause and effect. However, your decision-making sharpens only in hindsight; you suffer disadvantage on reaction-based decisions for the same duration.",
    "category": "services",
    "price": 630,
    "icon": "🦋",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Investigation checks",
      "Disadvantage on quick decisions"
    ],
    "vendor": "warriors_chaos",
    "shippedBy": "Chaos Theory Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Investigation Checks",
        "rules": "When you use this item, you gain advantage on Intelligence (Investigation) checks related to cause and effect for 10 minutes. The effect ends if you take a short or long rest."
      },
      {
        "title": "Disadvantage on Quick Decisions",
        "rules": "For the same duration as the first effect, you suffer disadvantage on reaction-based decisions. This effect is terminated by taking any action that requires your focus, such as casting a spell or making an attack roll."
      }
    ],
    "levelRequirementReason": "This item provides tactical insight but not combat prowess.",
    "vendorReason": "Warriors Chaos Theory specializes in the manipulation of chaos and balance, making this device a natural addition to their offerings.",
    "shippingDetail": "Ships via Chaos Theory Express within one business day, delivered directly by the company's proprietary magic transport network.",
    "usage": {
      "activation": "Standard action",
      "duration": "10 minutes per use",
      "endsWhen": "You take a short or long rest, or you cast a spell requiring concentration for more than 1 minute.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's rarity and specific utility justify its price in experienced player currency.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-23T20:33:41.786915+00:00",
    "aiReviewedAt": "2026-07-23T20:33:41.786915+00:00",
    "aiReviewVersion": 1
  },
  "warriors_chaos_mutant_wraps": {
    "id": "warriors_chaos_mutant_wraps",
    "name": "Warriors Chaos Mutant Wraps",
    "description": "These bandages are imbued with the chaotic energies of the battlefield. They adhere to wounds and adapt to stabilize your injuries, their color shifting randomly between hues of crimson, violet, and black. Warriors Chaos Mutant Wraps are a byproduct of Chaos Healers' unorthodox practices, created from scrap materials and the remnants of failed mutations. These wraps not only heal but also offer a slight resistance to further chaos-related effects.",
    "price": 3100,
    "icon": "🩹",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Heal Wounds",
      "Resist Chaos"
    ],
    "vendor": "warriors_chaos_tent",
    "shippedBy": "Twisted Bandage Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Wound Healing",
        "rules": "Apply the bandages as an action. The bandages adhere to your wounds and stabilize them, healing 1d6 hit points. This effect can be used once per day."
      },
      {
        "title": "Chaos Resistance",
        "rules": "The bandages provide a +1 bonus to saving throws against chaotic effects for the duration of a short rest or until you take damage from a source other than magic."
      }
    ],
    "levelRequirementReason": "These wraps are designed for those who have faced the harsh realities of battle and can handle the chaos they represent.",
    "vendorReason": "The warriors Chaos tent specializes in crafting items that aid those who have endured the battlefield, making these bandages a natural fit.",
    "shippingDetail": "Shipped within three days of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; lasts until used or interrupted by damage from non-magical sources.",
      "endsWhen": "Used once per day, expends after taking non-magical damage.",
      "charges": "1 use"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rarity and utility in stabilizing wounds without overpowered healing.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-23T20:33:38.209242+00:00",
    "aiReviewedAt": "2026-07-23T20:33:38.209242+00:00",
    "aiReviewVersion": 1
  },
  "warriors_chaos_mutation_masher": {
    "id": "warriors_chaos_mutation_masher",
    "name": "Warriors Chaos Mutation Masher",
    "description": "The Warriors Chaos Mutation Masher is a bizarre device forged from chaotic metal, its handle scoured raw by the very hands of its creators. With each use, it mutates your grip in an almost painful fashion, but also grants you advantage on checks to alter random effect recipes. When activated, the masher releases a surge of chaotic energy that can reconfigure any nearby object into a more efficient tool or weapon for 1 minute.",
    "category": "equipment",
    "price": 3100,
    "icon": "🥣",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Advantage on random recipe alterations",
      "Reconfigures adjacent items"
    ],
    "vendor": "warriors_chaos_camp",
    "shippedBy": "Mutant Mash Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Random Recipe Alteration",
        "rules": "When activated as an action, the Masher grants you advantage on checks to alter any random effect recipe. This effect lasts until the start of your next turn."
      },
      {
        "title": "Adjacent Item Reconfiguration",
        "rules": "Activating the Masher also releases a chaotic surge that reconfigures all non-magical items within 5 feet into more efficient versions for 1 minute, or until an object is damaged. The reconfigured item must be used by you and can only function in its new form."
      }
    ],
    "levelRequirementReason": "The device's chaotic energy requires a certain level of concentration to control effectively.",
    "vendorReason": "The Chaos Toolers, masters of the unpredictable, are known for their unique and often dangerous creations like this Masher.",
    "shippingDetail": "Due to its volatile nature, the Masher must be shipped with extreme care using Mutant Mash Mail's specially designed containment crates.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until an adjacent object is damaged",
      "endsWhen": "Start of your next turn after activation or when a nearby item is damaged",
      "charges": "Unlimited, but reconfigures only non-magical items"
    },
    "priceReason": "The Masher's chaotic nature and unique functionality justify its moderate price.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T20:33:59.420868+00:00",
    "aiReviewedAt": "2026-07-23T20:33:59.420868+00:00",
    "aiReviewVersion": 1
  },
  "warriors_chaos_mutation_mush_recipe": {
    "id": "warriors_chaos_mutation_mush_recipe",
    "name": "Recipe: Warriors Chaos Mutation Mush",
    "description": "Crafted by Chaos Cooks, this recipe for Warriors' Chaos Mutation Mush is a chaotic confluence of bizarre ingredients, each one more unsettling than the last. When consumed, it grants the eater a fleeting taste of chaos—either an unpredictable boost to a random stat or a minor mutation that could be either a boon or bane. The effects are as unpredictable as they are potent, leaving the consumer forever changed in ways both tangible and intangible.",
    "price": 3100,
    "icon": "🥣",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Random Stat Boost",
      "Minor Mutation"
    ],
    "vendor": "warriors_chaos_camp",
    "shippedBy": "Mutant Mush Memo",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Random Stat Boost",
        "rules": "Eating this mush grants a +1 temporary modifier to a random ability score for one hour. This effect is unpredictable and cannot be influenced by any means."
      },
      {
        "title": "Minor Mutation",
        "rules": "Alternatively, consuming the mush might result in a minor mutation that persists for one hour, providing both benefits and drawbacks based on the whims of chaos. The DM determines the nature of this mutation."
      }
    ],
    "levelRequirementReason": "Suitable for adventurers who are just beginning their journey into the chaotic unknown.",
    "vendorReason": "Warriors Chaos Camp specializes in items that push the boundaries of conventional magic, making this recipe a perfect fit.",
    "shippingDetail": "The mush is shipped fresh and arrives in a sealed container to preserve its volatile nature.",
    "usage": {
      "activation": "Eating the mush",
      "duration": "One hour or until consumed",
      "endsWhen": "The effects dissipate after one hour, or if the eater consumes another form of food.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to reflect the unpredictable and potentially volatile nature of the item.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T20:34:08.660994+00:00",
    "aiReviewedAt": "2026-07-23T20:34:08.660994+00:00",
    "aiReviewVersion": 1
  },
  "warriors_chaos_mutation_potion_service": {
    "id": "warriors_chaos_mutation_potion_service",
    "name": "Warriors Chaos Mutation Potion Service",
    "description": "This potent potion, crafted by the enigmatic Chaos Sorcerers at Warriors' Chaos Camp, imbues you with a chaotic mutation for an hour. Swallow its bubbling contents and witness your body undergo a temporary yet unpredictable transformation: one ability score increases by 1 while another decreases by 1. With a 50% chance of growing an extra arm, this limb grants advantage on Climb checks but is accompanied by a persistent, itchy sensation that hints at the potion's dark magic. Beware, for the effects are as unpredictable as they are fleeting.",
    "price": 630,
    "icon": "🧪",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Random +1 Stat, -1 Another",
      "50% Extra Arm"
    ],
    "vendor": "warriors_chaos_camp",
    "shippedBy": "Bubbling Vial",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Stat Boost and Reduction",
        "rules": "Consume the potion to gain a temporary increase of +1 to one ability score for 1 hour. Simultaneously, lose +1 from another ability score. This effect has no target or range; it is consumed upon activation."
      },
      {
        "title": "Extra Arm",
        "rules": "There is a 50% chance that consuming the potion grants you an extra arm for the duration of your next short rest, providing advantage on Climb checks and saving throws. This effect ends when the potion's duration expires or if the wearer loses an arm in combat."
      }
    ],
    "levelRequirementReason": "This potion is designed to be accessible early in a character’s journey, allowing for quick adaptation and experimentation.",
    "vendorReason": "The Chaos Sorcerers are the masters of mutation and chaos, and they can concoct this potion more reliably than any other vendor.",
    "shippingDetail": "Shipped in a sealed, magically preserved container to ensure potency upon arrival.",
    "usage": {
      "activation": "Consume the potion as an action.",
      "duration": "1 hour or until consumed in combat.",
      "endsWhen": "The duration expires after 1 hour or if the wearer loses an arm during the effect’s active time.",
      "charges": "Unlimited, with a daily limit of one use per character."
    },
    "priceReason": "Balanced to provide a useful yet risky tool for early adventurers without overshadowing more powerful items.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T20:33:56.476864+00:00",
    "aiReviewedAt": "2026-07-23T20:33:56.476864+00:00",
    "aiReviewVersion": 1
  },
  "weights_treadmills_and_protein_shakes": {
    "id": "weights_treadmills_and_protein_shakes",
    "name": "The 'Iron Toad' Gym",
    "description": "'The Iron Toad Gym' is a training ground where toads build muscle and morale. Weights of solid iron, treadmills that challenge even the strongest, and protein shakes that fuel their growth lie within its walls. Over time, toads who train here gain +1 to both Strength and Constitution as they push themselves beyond their limits. The gym also instills a sense of camaraderie, boosting morale by 5 points, making each toad feel more resilient.",
    "category": "faction",
    "price": 97,
    "icon": "💪",
    "stock": 1,
    "rarity": "common",
    "effects": [
      "Strength and Constitution Boost",
      "Morale Boost"
    ],
    "vendor": "toad_town_market",
    "factionBonus": {
      "combatReadiness": 8,
      "morale": 5
    },
    "effectDetails": [
      {
        "title": "Strength and Constitution Boost",
        "rules": "Toads who actively train at 'The Iron Toad Gym' gain +1 to their Strength and Constitution scores. This effect accumulates over time, but only while they are within the gym's walls."
      },
      {
        "title": "Morale Boost",
        "rules": "For every week a toad trains at 'The Iron Toad Gym', their morale increases by 5 points. The effect is cumulative and can reach up to +20, but it resets if the toad leaves the gym for more than a month."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "Toads of any level are welcome at 'The Iron Toad Gym' as building strength and morale is essential for all.",
    "vendorReason": "'The Iron Toad Gym' is a popular local institution, and the toad town market vendors supply it with its unique equipment.",
    "shippedBy": "Toad Town Courier Service",
    "shippingDetail": "Ships directly from 'The Iron Toad Gym', delivered by the cheerful toads themselves, ensuring fresh supplies for their comrades.",
    "usage": {
      "activation": "Passive effect while in the gym.",
      "duration": "Instantaneous boost upon entering and cumulative over time.",
      "endsWhen": "Leaving the gym for more than a month resets the effects.",
      "charges": "Unlimited, as long as the toad remains within the gym."
    },
    "priceReason": "'The Iron Toad Gym' offers a valuable service at a fair price, balancing the cost of supplies and training with the overall benefit it provides to its members.",
    "priceOriginal": 28000,
    "priceReviewedAt": "2026-07-24T23:48:55.899818+00:00",
    "aiReviewedAt": "2026-07-24T23:48:55.899818+00:00",
    "aiReviewVersion": 1
  },
  "weldrhom_battle_axe_head": {
    "id": "weldrhom_battle_axe_head",
    "name": "Weldrhom Battle Axe Head",
    "description": "The Weldrhom Battle Axe Head is a replaceable axe head etched with tribal runes, forged from ancient black iron and blessed by the spirits of the wilds. When wielded in the wilderness, the runes glow faintly to warn of danger, granting +2 to Initiative checks during treacherous expeditions. This weapon also adds +1 damage against beasts, while its haft ensures a sturdy grip for feral combat. Survivors of the forge, these axes are crafted by the Weldrhom tribes and shipped with swift precision via Tribal Runner.",
    "category": "equipment",
    "price": 630,
    "icon": "🪓",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Wilderness Warning",
      "Beast Bane"
    ],
    "vendor": "weldrhom",
    "shippedBy": "Tribal Runner",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Wilderness Warning",
        "rules": "The runes glow faintly when danger approaches, granting the wielder a +2 bonus to Initiative checks in wilderness areas. This effect lasts until the start of your next turn after detecting imminent threat."
      },
      {
        "title": "Beast Bane",
        "rules": "When used against beasts, this axe deals an additional 1d6 damage as the spirit runes resonate with primal fury. The effect is limited to once per long rest."
      }
    ],
    "levelRequirementReason": "This weapon requires a minimum level of 5 due to its intricate runes and specialized forging process.",
    "vendorReason": "The Weldrhom tribe is renowned for crafting these axes, imbued with the spirits of their ancestors.",
    "shippingDetail": "Delivered by Tribal Runner, known for its swift and reliable service through treacherous terrains.",
    "usage": {
      "activation": "Instantaneous effect; runes glow when danger is sensed.",
      "duration": "Lasts until the start of your next turn after detecting imminent threat.",
      "endsWhen": "Dies down at the start of your next turn following a detected threat.",
      "charges": "Unlimited, recharges with rest."
    },
    "priceReason": "The balanced XP price reflects the weapon's unique enchantments and specialized crafting process.",
    "priceOriginal": 12800,
    "priceReviewedAt": "2026-07-23T20:34:28.385392+00:00",
    "aiReviewedAt": "2026-07-23T20:34:28.385392+00:00",
    "aiReviewVersion": 1
  },
  "weldrhom_caravan_spice_grinder": {
    "id": "weldrhom_caravan_spice_grinder",
    "name": "Weldrhom Caravan Spice Grinder",
    "description": "The Weldrhom Caravan Spice Grinder is a compact, forge-made core of desert wisdom, its body weathered by countless sands and spiced rubs. This grinder not only enhances your cooking checks with spices but also ensures that your culinary creations remain flavorful for an entire hour after use. Crafted by the Caravan Smiths to withstand harsh environments, it never clogs unless wet ingredients are ground, requiring a DC 10 Wisdom (Medicine) check to clean.",
    "category": "equipment",
    "price": 630,
    "icon": "🌶️",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Enhances Cooking Checks with Spices",
      "Flavor Endurance"
    ],
    "vendor": "weldrhom_caravan",
    "shippedBy": "Spice Sand Shaker",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhances Cooking Checks with Spices",
        "rules": "When you use this item, you gain a +1 bonus to cooking checks involving spices. The duration of the effect is one hour."
      },
      {
        "title": "Flavor Endurance",
        "rules": "Any meal prepared using this grinder maintains its flavor for an additional hour after preparation, enhancing your reputation as a master chef among desert travelers and traders."
      }
    ],
    "levelRequirementReason": "This item is suitable for adventurers of all levels, providing a basic utility that can be used by anyone.",
    "vendorReason": "The Weldrhom Caravans are renowned for their quality goods and this grinder exemplifies the craftsmanship expected from such a trusted vendor.",
    "shippingDetail": "Ships directly from the desert, ensuring that it arrives in perfect condition despite the arid climate.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "Instantaneous effect; duration is one hour for enhanced cooking checks and flavor endurance.",
      "endsWhen": "The effect ends once the hour has passed or if the item is used again before the duration expires.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This balanced price reflects its utility, rarity, and the craftsmanship involved in making such a versatile tool.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T20:34:30.156748+00:00",
    "aiReviewedAt": "2026-07-23T20:34:30.156748+00:00",
    "aiReviewVersion": 1
  },
  "weldrhom_herb_garden_service": {
    "id": "weldrhom_herb_garden_service",
    "name": "Weldrhom Herb Garden Service",
    "description": "The Weldrhom Herb Garden Service arrives as a compact, wooden box that unfolds into an intricate garden of aromatic herbs and medicinal plants. Each week, it produces 1d6 healing herbs, each capable of curing up to 1d4 hit points. The garden also grants advantage on Medicine checks when using its herbs for crafting potions or treating wounds. Rabbits often visit the garden, offering a free source of fresh meat if you can catch them.",
    "price": 640,
    "icon": "🌱",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Healing Herbs",
      "Advantage on Medicine Checks"
    ],
    "vendor": "weldrhom_farmstead",
    "shippedBy": "Potted Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Herbs",
        "rules": "The Weldrhom Herb Garden Service produces 1d6 healing herbs each week. Each herb can heal up to 1d4 hit points when consumed by a creature."
      },
      {
        "title": "Advantage on Medicine Checks",
        "rules": "When using the herbs from this garden for crafting potions or treating wounds, the user gains advantage on Medicine checks."
      }
    ],
    "levelRequirementReason": "This service requires minimal magic to operate and is accessible to beginners.",
    "vendorReason": "The Weldrhom Druids are renowned for their herbal knowledge and craftsmanship, making this item a staple in their offerings.",
    "shippingDetail": "Special packaging ensures the herbs remain fresh during transit.",
    "usage": {
      "activation": "Instantaneous setup upon arrival; passive effect while deployed.",
      "duration": "Permanent until dismantled or destroyed.",
      "endsWhen": "Dismantling the garden or destruction of the item.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The price reflects the craftsmanship, materials, and ongoing maintenance required for such a service.",
    "priceOriginal": 11000,
    "priceReviewedAt": "2026-07-23T20:34:37.938656+00:00",
    "aiReviewedAt": "2026-07-23T20:34:37.938656+00:00",
    "aiReviewVersion": 1
  },
  "weldrhom_nomad_veil": {
    "id": "weldrhom_nomad_veil",
    "name": "Weldrhom Nomad Veil",
    "description": "The Weldrhom Nomad Veil is a lightweight veil crafted to protect desert travelers from sandstorms. Its intricate weave filters out dust and sand, ensuring clear vision even in the harshest conditions. This veil not only grants immunity to sand blindness but also enhances your Constitution saving throws by +1 when you are in arid environments. The veil's fabric muffles sound, imposing disadvantage on verbal spellcasting within its shadowed confines.",
    "category": "equipment",
    "price": 640,
    "icon": "🧕",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Dust Shield",
      "Desert Savvy"
    ],
    "vendor": "weldrhom_caravan",
    "shippedBy": "Sandproof Pouch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dust Shield",
        "rules": "The wearer gains immunity to the effects of sand and dust, including sand blindness. This effect is passive and does not require an action."
      },
      {
        "title": "Desert Savvy",
        "rules": "For Constitution saving throws related to arid environments, the user gains a +1 bonus. This benefit lasts for as long as the veil is worn and has no other activation or duration requirements."
      }
    ],
    "levelRequirementReason": "This item provides immediate utility for any adventurer in desert regions, making it suitable for level 1 characters.",
    "vendorReason": "Weldrhom Craftsfolk are renowned for their expertise in crafting gear suited to desert climates, making the Nomad Veil a natural addition to their inventory.",
    "shippingDetail": "The veil is delivered securely within a Sandproof Pouch to ensure it arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Permanent while worn, until removed or damaged beyond repair.",
      "endsWhen": "It ceases providing benefits when the veil is removed or destroyed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Nomad Veil's price reflects its practical utility and craftsmanship, offering a balance between cost and benefit for adventurers.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-23T20:34:43.485638+00:00",
    "aiReviewedAt": "2026-07-23T20:34:43.485638+00:00",
    "aiReviewVersion": 1
  },
  "weldrhom_recipe_spark_grilled_meat": {
    "id": "weldrhom_recipe_spark_grilled_meat",
    "name": "Recipe: Weldrhom Spark-Grilled Meat",
    "description": "This parchment lists a recipe for meat grilled to perfection by the legendary Weldrhom Grill Masters, whose techniques are said to bring the spark of lightning into every bite. The Recipe: Weldrhom Spark-Grilled Meat is imbued with a flickering core that crackles with electricity as you cook. Cooks who follow this method gain +1 to their attack rolls for an hour, but their hair stands on end, causing disadvantage on Charisma checks and imposing a glow that grants advantage on Intimidation checks while making Stealth attempts difficult.",
    "price": 3100,
    "icon": "📜",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants +1 to attack rolls for 1 hour (energizing)",
      "Your hair stands on end: disadvantage on Charisma checks"
    ],
    "vendor": "weldrhom",
    "shippedBy": "Spirit Forge Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Energizing Attack Boost",
        "rules": "For the duration of 1 hour, this recipe grants a +1 bonus to attack rolls. This effect ends when you finish cooking with it or if your concentration is broken."
      },
      {
        "title": "Disadvantage on Charisma Checks",
        "rules": "While using this recipe, you are at disadvantage on all Charisma checks and saves until the effects end or you finish cooking with it. This effect persists as long as you follow the recipe's instructions."
      }
    ],
    "levelRequirementReason": "This recipe is simple enough for even novice cooks to understand but powerful enough to enhance combat effectiveness.",
    "vendorReason": "Weldrhom Grill Masters are renowned for their mastery of fire and lightning, making them the perfect vendor for this electrifying recipe.",
    "shippingDetail": "The recipe is shipped in a specially insulated package to ensure that the magical properties remain intact during transit.",
    "usage": {
      "activation": "Active upon cooking with it. Requires following the recipe's instructions.",
      "duration": "1 hour, ends when you finish cooking or your concentration is broken.",
      "endsWhen": "Completion of the dish or loss of concentration.",
      "charges": "Unlimited uses; each use requires following the recipe."
    },
    "priceReason": "This recipe, while not requiring materials beyond those found in any kitchen, is a rare and powerful tool for enhancing combat effectiveness. Its price reflects its rarity and utility.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-23T20:34:58.873471+00:00",
    "aiReviewedAt": "2026-07-23T20:34:58.873471+00:00",
    "aiReviewVersion": 1
  },
  "weldrhom_soul_welding": {
    "id": "weldrhom_soul_welding",
    "name": "Weldrhom Soul Welding",
    "description": "The Weldrhom Soul Welding is a metaphysical device forged by the Weldrhom Soul-Smiths, crafted from ancient souls and enchanted with runes of restoration. This artifact repairs one level of exhaustion caused by soul damage, restoring both physical and spiritual well-being. After use, it leaves a faint metallic aftertaste in your mouth, as if you've swallowed starlight itself. Clerics detect this subtle change, marking you as 'slightly warped,' which imposes disadvantage on Religion checks with them.",
    "category": "services",
    "price": 3100,
    "icon": "🔥",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Soul Repair",
      "Metallic Aftertaste"
    ],
    "vendor": "weldrhom",
    "shippedBy": "Spirit Forge",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Soul Repair",
        "rules": "Activates as an action. Restores one level of exhaustion caused by soul damage. The effect is instantaneous and has no save DC or range. Once used, the item requires a short rest to recharge."
      },
      {
        "title": "Metallic Aftertaste",
        "rules": "After using the Weldrhom Soul Welding, you have a slight metallic aftertaste in your mouth for 1 hour. During this time, clerics detect you as 'slightly warped,' imposing disadvantage on Religion checks with them."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners and those who need to quickly restore their soul's health.",
    "vendorReason": "Weldrhom Soul-Smiths are renowned for their expertise in crafting items that repair the body and spirit, making them the perfect vendor for this device.",
    "shippingDetail": "Shipped via Spirit Forge with expedited delivery within one week of purchase.",
    "usage": {
      "activation": "Activates as an action.",
      "duration": "Instantaneous; requires a short rest to recharge.",
      "endsWhen": "The item is used or recharges after a short rest.",
      "charges": "Unlimited, but requires a short rest to use again."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's rarity and utility in restoring one level of exhaustion caused by soul damage.",
    "priceOriginal": 21500,
    "priceReviewedAt": "2026-07-23T20:35:07.691176+00:00",
    "aiReviewedAt": "2026-07-23T20:35:07.691176+00:00",
    "aiReviewVersion": 1
  },
  "weldrhom_spice_rub_meat_recipe": {
    "id": "weldrhom_spice_rub_meat_recipe",
    "name": "Recipe: Weldrhom Spice-Rubbed Meat",
    "description": "This is a carefully crafted recipe for spice-rubbed meat from the arid lands of Weldrhom. It calls for tender cuts of desert lamb seasoned with the rarest spices, imparting resilience and vigor to those who partake. The meat is not just a meal; it's a lesson in survival, teaching you how to prepare this hearty dish over an hour-long fire. The flavor is intense, leaving you sweating slightly but feeling refreshed and stronger after consuming it.",
    "price": 640,
    "icon": "🥩",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Tenderize and spice up",
      "Constitution bolster"
    ],
    "vendor": "weldrhom_caravan",
    "shippedBy": "Spicy Scroll Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spice-Rubbing Technique",
        "rules": "This recipe teaches the technique of rub-and-grill, which requires a bonus action to prepare. When consumed over 6 hours, it grants resistance to dehydration and advantage on Constitution saving throws for that duration."
      },
      {
        "title": "Constitution Boost",
        "rules": "Upon eating this dish, you gain +1 to your Constitution saving throw once per short rest. This effect does not stack with other similar benefits."
      }
    ],
    "levelRequirementReason": "This recipe is simple enough for any traveler to learn and use.",
    "vendorReason": "The Weldrhom Caravaneers are known for sharing their culinary secrets with the world.",
    "shippingDetail": "Delivered by trusted courier, ensuring the spices remain potent and the recipe intact.",
    "usage": {
      "activation": "Bonus action to prepare; eat over 6 hours to activate benefits",
      "duration": "Constitution boost lasts until next short rest; resistance lasts for 6 hours",
      "endsWhen": "Effect ends when Constitution saving throw is made or after 6 hours",
      "charges": "Unlimited, as the recipe can be learned multiple times"
    },
    "priceReason": "The rarity of desert spices and the time required to prepare this dish justify its moderate price.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T20:34:57.018808+00:00",
    "aiReviewedAt": "2026-07-23T20:34:57.018808+00:00",
    "aiReviewVersion": 1
  },
  "wh_araby_dervish_spin_bowl": {
    "id": "wh_araby_dervish_spin_bowl",
    "name": "Wh Araby Dervish Spin Bowl",
    "description": "The Wh Araby Dervish Spin Bowl is a meticulously crafted ceramic vessel adorned with intricate, swirling patterns that catch the light like stars in motion. This bowl not only ensures an even mix of your tea but also enhances any recipe imbued with dance-inspired motions, granting advantage on such attempts. As you spin it, the bowl releases whirl energy, subtly increasing the duration of any ongoing effects by +1 round. However, prolonged use can cause a brief dizziness, leaving you momentarily disoriented.",
    "category": "equipment",
    "price": 640,
    "icon": "🍵",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Even Mix; Advantage on Dance-Inspired Recipes",
      "Whirl Energy (+1 Duration)"
    ],
    "vendor": "wh_araby_temple",
    "shippedBy": "Spin Spice Shipment",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Even Mix; Advantage on Dance-Inspired Recipes",
        "rules": "When used to mix tea or ingredients for a dance-inspired dish, the user gains advantage on the associated ability check. This effect lasts until the recipe is completed."
      },
      {
        "title": "Whirl Energy (+1 Duration)",
        "rules": "Each time you use the bowl to spin it, any active effects you have are extended by one additional round. However, if you continue spinning for more than three rounds, you must succeed on a DC 15 Constitution saving throw or become dazed until the end of your next turn."
      }
    ],
    "levelRequirementReason": "The intricate craftsmanship and energy manipulation required make this item suitable only for those of at least third level.",
    "vendorReason": "The Wh Araby Temple is renowned for its expertise in ceremonial artifacts, making it the perfect place to find such a finely crafted bowl.",
    "shippingDetail": "Ships via Spin Spice Shipment, known for its reliable and swift delivery of exotic goods from Wh Araby.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Until the recipe is completed or until you cease spinning the bowl.",
      "endsWhen": "The effect ends when the recipe is finished or if you stop spinning the bowl for three consecutive rounds.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted with rare ceramics and imbued with ancient Wh Araby magic, this item's price reflects both its rarity and utility.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T20:35:27.133187+00:00",
    "aiReviewedAt": "2026-07-23T20:35:27.133187+00:00",
    "aiReviewVersion": 1
  },
  "wh_araby_dervish_whirl_skirt": {
    "id": "wh_araby_dervish_whirl_skirt",
    "name": "Wh Araby Dervish Whirl Skirt ",
    "description": "The Wh Araby Dervish Whirl Skirt is a shimmering, ankle-length garment made from layers of delicate silk and silver thread that catch the light like stardust. Crafted by the skilled hands of Dervish Dancers, it allows wearers to perform with grace and agility, turning even the most complex spins into fluid motion. When worn, the skirt creates a soft, swirling wind that distracts nearby creatures, though spinning too quickly risks tripping the wearer or causing them to lose balance.",
    "price": 640,
    "icon": "👗",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Graceful Dance Aid",
      "Minor Wind Distraction"
    ],
    "vendor": "wh_araby_dance_hall",
    "shippedBy": "Silk Spin Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Graceful Dance Aid",
        "rules": "When worn during a Performance check for dancing, the skirt grants you advantage on the roll. If you fail to maintain balance while spinning too quickly, you are tripped and must make a Dexterity saving throw (DC 13) or fall prone."
      },
      {
        "title": "Minor Wind Distraction",
        "rules": "The skirt creates a minor swirling wind around you that can distract nearby creatures. As an action, you can cause this effect to activate within a 5-foot radius centered on yourself for up to 1 minute per day. Creatures in the area must succeed on a Wisdom saving throw (DC 13) or become distracted until their next turn."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners who wish to improve their dancing skills without needing advanced proficiency.",
    "vendorReason": "The Wh Araby Dance Hall frequently hosts performances and competitions, making it the perfect place to purchase items that enhance one's dance abilities.",
    "shippingDetail": "Delivered by Silk Spin Express, known for their swift and reliable service across the region.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous activation, lasts up to 1 minute per day",
      "endsWhen": "The effect ends when you stop moving or if a creature successfully saves against the distraction.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at this price, it offers significant benefits for players looking to enhance their dancing performance without being overpowered.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-23T20:35:29.047945+00:00",
    "aiReviewedAt": "2026-07-23T20:35:29.047945+00:00",
    "aiReviewVersion": 1
  },
  "wh_araby_sand_sculpture_service": {
    "id": "wh_araby_sand_sculpture_service",
    "name": "Wh Araby Sand Sculpture Service",
    "description": "Crafted by Wh Araby's master sculptors, this ephemeral sand sculpture serves as a minor illusion for 24 hours, enchanting passersby with its fleeting beauty. The sand holds a secret charm, granting the creator advantage on Charisma (Performance) checks when presenting it to art connoisseurs. However, the very nature of the desert's capricious climate means the sculpture will melt away at first sign of rain, leaving only damp memories behind.",
    "category": "services",
    "price": 640,
    "icon": "🏖️",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Illusionary Sand Sculpture",
      "Advantage with Art"
    ],
    "vendor": "wh_araby",
    "shippedBy": "Camel Caravan Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Illusionary Sand Sculpture",
        "rules": "The sand sculpture functions as a minor illusion for 24 hours. It can be activated once per day by the creator, who must have a performance or presentation planned. The effect ends immediately if exposed to water or if the creator wishes to end it."
      },
      {
        "title": "Advantage with Art",
        "rules": "The creator gains advantage on Charisma (Performance) checks when presenting the sculpture to individuals known for their appreciation of art and craftsmanship, such as patrons or fellow sculptors. This effect lasts until the next midnight."
      }
    ],
    "levelRequirementReason": "Creating an illusion that can be presented requires a basic understanding of performance and presentation.",
    "vendorReason": "Wh Araby's master sculptors are renowned for their skill in transforming the desert into works of art, making them the perfect purveyors of this service.",
    "shippingDetail": "Ships via a specialized camel caravan to ensure safe and timely delivery across treacherous dunes.",
    "usage": {
      "activation": "Once per day, activated by performance or presentation.",
      "duration": "24 hours, ending on contact with water or at will of the creator.",
      "endsWhen": "Exposure to water or the creator's discretion.",
      "charges": "Unlimited; can be used daily."
    },
    "priceReason": "Crafted by renowned desert artisans, this service is a rare and valuable offering that enhances both performance and artistry in a unique way.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T20:35:57.541326+00:00",
    "aiReviewedAt": "2026-07-23T20:35:57.541326+00:00",
    "aiReviewVersion": 1
  },
  "wh_araby_sandstorm_beard_styling": {
    "id": "wh_araby_sandstorm_beard_styling",
    "name": "Wh Araby Sandstorm Beard Styling",
    "description": "The Wh Araby Sandstorm Beard Styling is a rare service that infuses your beard with the majesty of desert winds. For a week, your whiskers become a symbol of resilience and strength, granting you +1 Charisma when interacting with other bearded folk. However, the sandstorms of the desert bring their own challenge: you suffer disadvantage on Sleight of Hand checks due to the ever-present grit in the air. This service is crafted by Wh Araby Stylists, masters of transforming mere hair into a living work of art.",
    "category": "services",
    "price": 640,
    "icon": "🌪️",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Beard becomes majestic",
      "Sand gets everywhere"
    ],
    "vendor": "wh_araby",
    "shippedBy": "Sand Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Beard becomes majestic",
        "rules": "You gain +1 Charisma when interacting with other bearded individuals for the duration. The effect lasts for 7 days upon completion of the service."
      },
      {
        "title": "Sand gets everywhere",
        "rules": "When in sandy environments, you suffer disadvantage on Sleight of Hand checks due to the constant presence of sand. This effect persists until you leave a desert environment."
      }
    ],
    "levelRequirementReason": "This service is accessible to all adventurers who wish to enhance their appearance.",
    "vendorReason": "Wh Araby Stylists are renowned for their ability to transform ordinary beards into works of art that reflect the desert's spirit.",
    "shippingDetail": "The Sand Courier ensures your service is delivered through a series of wind-carried messages, arriving within a week from purchase.",
    "usage": {
      "activation": "Passive effect upon completion of the service.",
      "duration": "7 days",
      "endsWhen": "Expires after 7 days or when you no longer have a beard.",
      "charges": "Unlimited"
    },
    "priceReason": "The service is priced at 1000 XP, reflecting the expertise of Wh Araby Stylists and the unique desert conditions involved.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-23T20:35:21.512159+00:00",
    "aiReviewedAt": "2026-07-23T20:35:21.512159+00:00",
    "aiReviewVersion": 1
  },
  "wh_araby_whirling_dervish_lesson_service": {
    "id": "wh_araby_whirling_dervish_lesson_service",
    "name": "Wh Araby Whirling Dervish Lesson Service",
    "description": "The Wh Araby Whirling Dervish Lesson Service teaches you the mesmerizing dance of the dervishes, a spinning ritual that captivates foes and enhances your performance prowess. As you whirl, your movements create a hypnotic pattern that can charm one target within arm's reach for a full round, leaving them disoriented and open to further persuasion. This lesson also grants you an edge in Performance checks, making your artistry more compelling than ever. The Dervish Masters have crafted this service with precise grace, ensuring each session is both enlightening and transformative.",
    "price": 640,
    "icon": "🌀",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Whirling Charm",
      "Enhanced Performance"
    ],
    "vendor": "wh_araby_temple",
    "shippedBy": "Silk Scarf Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whirling Charm",
        "rules": "As a bonus action, you can spin in a hypnotic pattern to charm one target within 5 feet. The target must make a Wisdom saving throw (DC 12) or become charmed by you for the duration of one round."
      },
      {
        "title": "Enhanced Performance",
        "rules": "You gain advantage on all Performance checks and save against Performance-related penalties until the end of your next turn after completing this service."
      }
    ],
    "levelRequirementReason": "This lesson is suitable for beginners, providing foundational skills in dervish dance.",
    "vendorReason": "The Wh Araby Temple has long been a hub of cultural exchange and learning, offering unique lessons like this to aspiring performers and dancers.",
    "shippingDetail": "The service is delivered via Silk Scarf Express, ensuring the ritual's efficacy remains intact during transportation.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous charm effect; advantage on Performance checks until end of next turn after completion",
      "endsWhen": "When the charmed target saves successfully or the duration ends",
      "charges": "Unlimited, but requires a full day to fully learn and practice"
    },
    "priceReason": "This service offers foundational skills in a unique dance form at a balanced cost for players looking to enhance their character's abilities.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T20:36:05.471950+00:00",
    "aiReviewedAt": "2026-07-23T20:36:05.471950+00:00",
    "aiReviewVersion": 1
  },
  "wh_araby_whirling_dervish_tea_recipe": {
    "id": "wh_araby_whirling_dervish_tea_recipe",
    "name": "Recipe: Wh Araby Whirling Dervish Tea",
    "description": "The Wh Araby Whirling Dervish Tea is a delicate, speckled brown and gold concoction that calms the mind while invigorating the body. Prepared by the skilled artisans of Araby Brewers, this tea allows you to spin with grace and focus, enhancing your performance in dance for hours. The secret lies in its unique blend of Dervish herbs, which are said to have been cultivated on sacred mountaintops. Each sip grants you advantage on Dexterity (Performance) checks for 2 hours, but beware — the effects only kick in after a short meditation session.",
    "price": 640,
    "icon": "🍵",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Enhances Performance Checks",
      "Meditative Advantage"
    ],
    "vendor": "wh_araby_temple",
    "shippedBy": "Whirl Wind Whisk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Dance Performance",
        "rules": "When you drink this tea and complete a short meditation (1 minute), you gain advantage on Dexterity (Performance) checks for the next 2 hours. This effect requires the completion of a short rest before it can be used again."
      },
      {
        "title": "Meditative Focus",
        "rules": "The act of drinking this tea and meditating allows your mind to settle, reducing dizziness during spinning activities. While under its effects, you are immune to any penalties related to spinning or dancing, even if fatigued."
      }
    ],
    "levelRequirementReason": "This tea is accessible to players of all levels who appreciate the arts and seek to enhance their performance capabilities.",
    "vendorReason": "As a sacred beverage, this tea is only sold at Araby Temple by its trusted priests.",
    "shippingDetail": "Ships via the Whirl Wind Whisk, known for its swift and reliable deliveries across the region.",
    "usage": {
      "activation": "Drink and complete a short meditation (1 minute).",
      "duration": "2 hours until the next rest or use of this effect.",
      "endsWhen": "After 2 hours or if you take a long rest.",
      "charges": "Unlimited; requires completion of a short rest to regain the ability."
    },
    "priceReason": "The balanced price reflects the unique blend of Dervish herbs and the expertise required in its preparation by the skilled artisans of Araby Brewers.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T20:35:55.593100+00:00",
    "aiReviewedAt": "2026-07-23T20:35:55.593100+00:00",
    "aiReviewVersion": 1
  },
  "whacka_bump": {
    "id": "whacka_bump",
    "name": "Whacka Bump",
    "description": "The Whacka Bump is a doughnut shaped like a misshapen lump, dusted with powdered sugar that makes it resemble a guilt-ridden soul. Made by Shameful Packaging in Roguesport, this pastry promises to restore all hit points and magical points at the cost of an overwhelming sense of shame. After consuming one, you can't help but feel as though your next action should be to do penance for some unforgivable sin.",
    "category": "consumables",
    "price": 3100,
    "icon": "🍩",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Restores ALL HP and MP",
      "You feel like a terrible person"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Shameful Packaging",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instantaneous Restoration",
        "rules": "When consumed, the Whacka Bump restores all of your hit points and maximum magical points immediately. This effect is instantaneous and cannot be resisted with a saving throw."
      },
      {
        "title": "Moral Fallout",
        "rules": "For 1 hour after consumption, you are considered to have committed an unforgivable sin unless you perform a ritual penance as a bonus action each day. Failure to do so results in a -2 penalty to all Charisma-based checks and saving throws."
      }
    ],
    "levelRequirementReason": "The Whacka Bump is accessible to lower-level characters who need a quick fix but are also reminded of the importance of moral integrity.",
    "vendorReason": "Roguesport's Black Market caters to adventurers seeking unconventional and questionable items, making it an ideal place for this controversial pastry.",
    "shippingDetail": "The Whacka Bump is delivered in a sealed, guilt-inducing box that arrives the next morning after purchase.",
    "usage": {
      "activation": "Eaten as a free action",
      "duration": "Instantaneous and lasts for 1 hour",
      "endsWhen": "The effects expire or you perform penance",
      "charges": "Unlimited"
    },
    "priceReason": "The Whacka Bump is priced at 1000 XP due to its unique combination of immediate health and magical restoration, coupled with the psychological impact it has on the consumer.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-23T20:36:14.479209+00:00",
    "aiReviewedAt": "2026-07-23T20:36:14.479209+00:00",
    "aiReviewVersion": 1
  },
  "whacka_bump_fake": {
    "id": "whacka_bump_fake",
    "name": "Imitation Whacka Bump",
    "description": "The Imitation Whacka Bump is a squat, doughy replica of the famed Whacka Bump artifact. Its surface still retains faint impressions of runes and sigils that once granted its namesake its legendary power. Made from a mix of flour and food coloring, it crumbles when squeezed but offers no healing or magical benefits—save for the nostalgic whiff of freshly baked bread that lingers in your hands after handling it.",
    "category": "curiosities",
    "price": 60,
    "icon": "🍩",
    "stock": 200,
    "rarity": "junk",
    "effects": [
      "Taste of Fresh Bread",
      "No Healing"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Standard Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Taste of Fresh Bread",
        "rules": "When consumed, the Imitation Whacka Bump grants a fleeting moment of nostalgia. The taster must make a Wisdom saving throw (DC 10) to resist an overwhelming urge to reminisce about past baking adventures. On a failed save, they are incapacitated for 1 minute, during which their mind is consumed by memories."
      },
      {
        "title": "No Healing",
        "rules": "Attempting to use the Imitation Whacka Bump as a healing item results in nothing but disappointment. The item offers no magical effects and provides only an empty sensation when swallowed or touched."
      }
    ],
    "levelRequirementReason": "The Imitation Whacka Bump requires no level, as it is merely a harmless joke item.",
    "vendorReason": "The Rogue Port Black Market is known for its eclectic array of oddities and knockoffs. The Imitation Whacka Bump fits neatly into their collection of whimsical artifacts.",
    "shippingDetail": "Delivered within a week, unless the courier encounters an unusually busy market day in the Rogue Port.",
    "usage": {
      "activation": "Eating or handling the item passively; no activation required.",
      "duration": "Instantaneous for taste, lasts until saved against or expended for memory effect.",
      "endsWhen": "The memory effect ends after 1 minute on a failed save. Consumed as an action but offers no lasting benefit.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Imitation Whacka Bump is priced at 1000 XP for its unique nostalgic value and the whimsical nature of its origin story.",
    "priceOriginal": 1000,
    "priceReviewedAt": "2026-07-23T20:37:05.874653+00:00",
    "aiReviewedAt": "2026-07-23T20:37:05.874653+00:00",
    "aiReviewVersion": 1
  },
  "whiskey_that_s_strong_garlic": {
    "id": "whiskey_that_s_strong_garlic",
    "name": "Wario's Wild West Whiskey",
    "description": "Wario's Wild West Whiskey is a potent brew infused with the pungent essence of garlic, known to stir up courage in the toughest outlaws. This fiery concoction grants +1 on Constitution saving throws when you're drunk, but it also imposes disadvantage on Charisma (Intimidation) checks and DC 10 Wisdom (Perception) checks due to its foul odor. It's a product of Wario West's legendary distillery, known for turning ordinary spirits into wild concoctions.",
    "category": "equipment",
    "price": 98,
    "icon": "🥃",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "+1 CON saves when drunk",
      "Disadvantage on Charisma (Intimidation) checks"
    ],
    "vendor": "wario_land",
    "shippedBy": "Whiskey Wagon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "+1 CON saves when drunk",
        "rules": "You gain +1 to all Constitution saving throws while you are under the effects of this item. This effect lasts until you sober up."
      },
      {
        "title": "Disadvantage on Charisma (Intimidation) checks",
        "rules": "While under the effects of this item, you have disadvantage on Charisma (Intimidation) checks due to its pungent aroma and taste. This effect ends when you sober up."
      }
    ],
    "levelRequirementReason": "This item is suitable for all levels as it provides a fun and balanced boost without overwhelming the party.",
    "vendorReason": "Wario Land's distillery is renowned for its unique and potent beverages, making Wario's Wild West Whiskey an obvious addition to his offerings.",
    "shippingDetail": "Delivered by the trusty Whiskey Wagon, known for its timely deliveries of fine spirits across the Wild West.",
    "usage": {
      "activation": "Drinking it as a bonus action",
      "duration": "Until you sober up (typically after 1d4 hours)",
      "endsWhen": "You sober up or consume another alcoholic drink",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item provides a fun and balanced effect that enhances combat effectiveness without being overpowered, making it a fair value for its price.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-23T20:36:26.928726+00:00",
    "aiReviewedAt": "2026-07-23T20:36:26.928726+00:00",
    "aiReviewVersion": 1
  },
  "whispering_garden_seeds": {
    "id": "whispering_garden_seeds",
    "name": "Whispering Garden Seeds",
    "description": "Whispering Garden Seeds are peculiar and ancient, each one a fragment of forgotten magic. When sown, they grow into living, speaking plants that echo the whispers of their planters, capturing every word in their verdant memory banks. These sentient flora can be heard by anyone within fifty feet if struck down, unleashing a cacophony of final echoes. The seeds are said to have been crafted by the fey when the world was young, and only a handful remain.",
    "category": "curiosities",
    "price": 3100,
    "icon": "🌱",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Sentient Plant",
      "Echoing Whispers"
    ],
    "vendor": "fey_market",
    "shippedBy": "Soil-Wrapped Packet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sentient Plant",
        "rules": "When planted, the seed grows into a living plant that can speak in the voice of its planter. The plant retains all spoken words within fifty feet for one hour after death and emits an ear-splitting scream if struck down."
      },
      {
        "title": "Echoing Whispers",
        "rules": "If the plant is destroyed, it releases a final scream that can be heard by any living creature within 50 feet. This effect has no save DC but only triggers once per seed used."
      }
    ],
    "levelRequirementReason": "This item requires a lower level because its primary function is passive and does not demand high-level spellcasting.",
    "vendorReason": "The fey market sells rare and arcane goods, including these seeds which are said to have been crafted by their kin.",
    "shippingDetail": "Ships directly from the Feywild, arriving in a week with no additional charges.",
    "usage": {
      "activation": "Planting the seed is the only activation required; it is passive thereafter.",
      "duration": "Instantaneous until destroyed or the plant dies naturally.",
      "endsWhen": "The plant is destroyed or killed.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its rarity and magical nature, but not game-breaking power.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T20:36:59.024684+00:00",
    "aiReviewedAt": "2026-07-23T20:36:59.024684+00:00",
    "aiReviewVersion": 1
  },
  "whispering_scroll": {
    "id": "whispering_scroll",
    "name": "Whispering Scroll",
    "description": "The Whispering Scroll is a tattered scroll of parchment, its edges frayed and ink barely legible. When unrolled at night under the soft glow of a lantern, it hums softly, sharing ancient secrets or forgotten wisdom that can help you in ways both known and unknown. Its whispers are not always coherent, but they often contain crucial information that could turn the tide of an adventure. Some say the scroll is enchanted by scholars long passed, seeking to leave their mark on future generations.",
    "category": "curiosities",
    "price": 3100,
    "icon": "📜",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "Single Use: Grants knowledge of one obscure fact or a usable cantrip for 1 hour",
      "If unrolled at night it tells a helpful bedtime memory"
    ],
    "vendor": "bazaar_of_oddities",
    "shippedBy": "Silk Tube",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Knowledge Transfer",
        "rules": "When activated, the scroll reveals an obscure fact or grants you the knowledge of a usable cantrip. The effect lasts for 1 hour and has no save DC required."
      },
      {
        "title": "Nightly Bedtime Memory",
        "rules": "If unrolled at night under lantern light, it narrates a helpful bedtime memory that could be valuable to the listener's current situation or future challenges. This effect is instantaneous and requires no action from the user."
      }
    ],
    "levelRequirementReason": "The scroll's knowledge can be overwhelming even for seasoned adventurers, thus requiring a level of at least 1.",
    "vendorReason": "The Bazaar of Oddities is known for its eclectic collection of esoteric items, including the Whispering Scroll.",
    "shippingDetail": "Delivered by Silk Tube with a special delivery that ensures the scroll arrives in pristine condition.",
    "usage": {
      "activation": "Requires reading aloud under lantern light at night",
      "duration": "1 hour for Knowledge Transfer, instantaneous for Bedtime Memory",
      "endsWhen": "The effect ends when its duration expires or if the scroll is damaged",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price considering the scroll's limited but powerful effects and its rarity.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-24T23:49:16.217644+00:00",
    "aiReviewedAt": "2026-07-24T23:49:16.217644+00:00",
    "aiReviewVersion": 1
  },
  "white_paint_of_divine_righteousness": {
    "id": "white_paint_of_divine_righteousness",
    "name": "White Paint of Divine Righteousness",
    "description": "The White Paint of Divine Righteousness is a celestial concoction that forces you to embody your true moral nature, painting you in an unyielding white hue. It grants advantage on saving throws against necrotic damage, as if the paint itself protects you from malevolence. However, it also imposes a disadvantage on Deception checks, revealing your honest intentions even when you wish to deceive. This divine brew, created by Celestial Paint Co., is shipped with utmost reverence via the Holy Courier, ensuring its purity remains intact.",
    "category": "equipment",
    "price": 3100,
    "icon": "🎨",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Paint Yourself White",
      "Truthful Nature"
    ],
    "vendor": "servants_cosmic_paint",
    "shippedBy": "Holy Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Paint Yourself White",
        "rules": "You gain a +2 bonus to saving throws against necrotic damage. This effect is active until the start of your next turn after using this item."
      },
      {
        "title": "Truthful Nature",
        "rules": "For the duration of 1 hour, you have disadvantage on all Deception checks and Insight checks made by others to discern if you are lying or hiding information. This effect is triggered when you use this item."
      }
    ],
    "levelRequirementReason": "This item requires a character of at least level 6 to ensure they can handle its moral implications without being overwhelmed.",
    "vendorReason": "Servants Cosmic Paint, known for their divine paints and inks, are trusted by many to provide this unique item.",
    "shippingDetail": "The Holy Courier ensures the paint's purity through a special seal that must be broken upon arrival, ensuring its effectiveness is not compromised during transit.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 hour",
      "endsWhen": "Ends when the duration expires or you use an action to dispel it early",
      "charges": "Unlimited"
    },
    "priceReason": "The item's price is balanced at 1000 XP, reflecting its divine origin and unique moral effects.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-23T20:37:10.685909+00:00",
    "aiReviewedAt": "2026-07-23T20:37:10.685909+00:00",
    "aiReviewVersion": 1
  },
  "wiggler_boots": {
    "id": "wiggler_boots",
    "name": "Wiggler Boots",
    "description": "The Wiggler Boots are a pair of enchanted footwear that vibrate and emit an angry hum when you take damage, propelling you forward with a burst of speed. They are said to have been crafted from the bones of ancient wiggler beasts, imbued with their ferocious energy. When struck, these boots not only enhance your movement but also grant you a brief surge in combat prowess, allowing for a more devastating attack.",
    "category": "equipment",
    "price": 3100,
    "icon": "👢",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Bounce Back",
      "Angry Stance"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Boot Box Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bounce Back",
        "rules": "When you take damage, gain +10 feet of movement speed and deal an additional 1d6 bludgeoning damage on your next attack. This effect stacks up to three times."
      },
      {
        "title": "Angry Stance",
        "rules": "For the duration of one short rest after combat, you are immune to being charmed or frightened by non-magical means."
      }
    ],
    "levelRequirementReason": "The Wiggler Boots require a low level prerequisite to allow for their unique but balanced abilities.",
    "vendorReason": "Shamans at the hut understand the mystical properties of enchanted items, including these boots.",
    "shippingDetail": "Delivered with a special charm to ensure safe and swift travel.",
    "usage": {
      "activation": "Automatic upon taking damage",
      "duration": "Instantaneous effect; lasts until the start of your next turn",
      "endsWhen": "Exhausted after three uses or upon being re-equipped",
      "charges": "Unlimited, but only one use per short rest"
    },
    "priceReason": "The boots' balanced abilities and unique stacking mechanic make them a fair addition to the player's arsenal at this XP cost.",
    "priceOriginal": 16000,
    "priceReviewedAt": "2026-07-23T20:37:41.636543+00:00",
    "aiReviewedAt": "2026-07-23T20:37:41.636543+00:00",
    "aiReviewVersion": 1
  },
  "wiggler_segment": {
    "id": "wiggler_segment",
    "name": "Wiggler's Wrath Segment",
    "description": "A squirming, pulsating orange segment from an enraged Wiggler, it oozes a noxious green slime that clings to your fingers as you hold it. This relic of primal fury is said to contain the essence of countless Wiggler battles, and its touch can summon more than just angry caterpillars—it can also invoke a wave of unsettling whispers. The segment's power is fleeting but potent, leaving behind a lingering sense of unease in those who wield it.",
    "category": "consumables",
    "price": 640,
    "icon": "🐛",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Summon Angry Caterpillars",
      "Invoke Unsettling Whispers"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Leaf Wrap",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Summon Angry Caterpillars",
        "rules": "As an action, throw the Wiggler's Wrath Segment. It explodes into three angry caterpillars that deal 1d6 poison damage on contact. The effect lasts for a number of rounds equal to your Wisdom modifier (minimum 3). After this duration, they dissolve into harmless, whimpering creatures and leave the battlefield."
      },
      {
        "title": "Invoke Unsettling Whispers",
        "rules": "For every round the segment is active, you must make a Wisdom saving throw. On a failed save, you are charmed by the whispers for 1 minute or until you take damage. The DC of this saving throw equals 8 + your proficiency bonus."
      }
    ],
    "levelRequirementReason": "This item's power level is balanced to be accessible at level 1, allowing new adventurers to harness the Wiggler's wrath.",
    "vendorReason": "Shamans of the forest are well-versed in the lore of the Wiggler and often possess items related to its power.",
    "shippingDetail": "The segment is wrapped securely in leaves, ensuring it arrives intact but still pulsating with energy.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of your next turn or until the effects are dispelled by damage",
      "endsWhen": "You take damage or the active rounds expire",
      "charges": "Unlimited"
    },
    "priceReason": "The price is set at a reasonable XP cost, reflecting both its rarity and the balance of power it provides.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T20:38:07.197125+00:00",
    "aiReviewedAt": "2026-07-23T20:38:07.197125+00:00",
    "aiReviewVersion": 1
  },
  "wiggler_segment_armor": {
    "id": "wiggler_segment_armor",
    "name": "Wiggler Segment Plate",
    "description": "The Wiggler Segment Plate is a vibrant, segmented armor crafted from the hardened exoskeletons of wiggler caterpillars. Its flexible segments allow it to stretch and squish with every movement, offering surprising flexibility in combat. Not only does this armor provide +2 AC against bludgeoning damage, but it also grants resistance to poison damage, making you a tough target for many foes. Additionally, its segmented design allows you to squeeze through tight spaces, ideal for navigating narrow corridors or avoiding traps.",
    "category": "equipment",
    "price": 3100,
    "icon": "🐛",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Poison Resistance",
      "Squishy Defense"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Cocoon Wrap",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Poison Resistance",
        "rules": "You gain resistance to poison damage. This effect lasts until the start of your next turn."
      },
      {
        "title": "Squishy Defense (Activates on Wear)",
        "rules": "While wearing this armor, you have advantage on Dexterity saving throws against being knocked prone and can reduce bludgeoning damage taken by half for 1 minute. This effect requires a successful DC 13 Constitution saving throw each time it is used."
      }
    ],
    "levelRequirementReason": "This armor's flexibility makes it accessible to lower-level adventurers who need basic protection.",
    "vendorReason": "The Shamans' Hut specializes in crafting items from natural and magical materials, including the hardened exoskeletons of wiggler caterpillars.",
    "shippingDetail": "Shipped wrapped in a cocoon for added protection against damage during transit.",
    "usage": {
      "activation": "Passive effect when worn. Requires a successful DC 13 Constitution saving throw each time the Squishy Defense is used.",
      "duration": "Until start of your next turn or until you remove it, whichever comes first.",
      "endsWhen": "The Squishy Defense ends after one use per short rest.",
      "charges": "Unlimited; regains charges upon completing a long rest."
    },
    "priceReason": "Balanced to provide significant protection at an affordable cost for early adventurers.",
    "priceOriginal": 17000,
    "priceReviewedAt": "2026-07-23T20:37:53.229733+00:00",
    "aiReviewedAt": "2026-07-23T20:37:53.229733+00:00",
    "aiReviewVersion": 1
  },
  "wish_granting_ritual": {
    "id": "wish_granting_ritual",
    "name": "Wish Granting Ritual (Limited)",
    "description": "The Wish Granting Ritual (Limited) is a rare, masterfully crafted scroll imbued by an Arcane Institute wizard. It allows you to request one wish within reasonable bounds, but beware: each invocation has a 50% chance of unintended consequences. The ritual's caster reserves the right to demand payment or service as compensation for the spell’s power. With this scroll, reality bends slightly to your will, yet it remains within the constraints set by the arcane institute.",
    "category": "premium",
    "price": 680000,
    "icon": "✨",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "Wish within Reasonable Bounds",
      "Unintended Consequences"
    ],
    "vendor": "arcane_institute",
    "shippedBy": "Ritual Ceremony",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wish Within Reasonable Bounds",
        "rules": "Activates upon reading and completing the ritual. The DM adjudicates the wish, ensuring it does not exceed logical bounds or allow for unlimited wishes. The caster may request a service or payment in return."
      },
      {
        "title": "Unintended Consequences",
        "rules": "Each invocation has a 50% chance to create unintended results, which can range from minor inconveniences to catastrophic events. These outcomes are determined by the DM."
      }
    ],
    "levelRequirementReason": "This ritual is accessible to all characters but requires an understanding of its limitations and potential risks.",
    "vendorReason": "The Arcane Institute only sells this scroll to ensure it's used responsibly and within their guidelines.",
    "shippingDetail": "Delivered by a specially trained ritual courier. The delivery time may vary based on the complexity of the request.",
    "usage": {
      "activation": "Reading and completing the ritual exactly as described.",
      "duration": "Instantaneous upon activation.",
      "endsWhen": "The wish is granted, or if interrupted before completion.",
      "charges": "One use per scroll"
    },
    "priceReason": "This price reflects the scroll's rarity and the controlled nature of its usage within reasonable bounds.",
    "priceOriginal": 650000,
    "priceReviewedAt": "2026-07-23T20:37:49.296437+00:00",
    "aiReviewedAt": "2026-07-23T20:37:49.296437+00:00",
    "aiReviewVersion": 1
  },
  "wish_loop_generator": {
    "id": "wish_loop_generator",
    "name": "Wish Loop Generator",
    "description": "The Wish Loop Generator is a sleek, metallic device encased in iridescent glass, its core pulsing with an ethereal glow. This compact gadget allows you to make wishes that seem infinite—each wish grants your heart’s desire without consequence, until reality itself might protest. Crafted by The Lawyer who found the loophole, this device's success depends on a DM roll for 'reality stability,' ensuring each use is fraught with unpredictable outcomes.",
    "category": "equipment",
    "price": 680000,
    "icon": "🌟",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Infinite Wishes",
      "Reality Stability Roll"
    ],
    "vendor": "wish_exploitation",
    "shippedBy": "Contractual Obligation",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Infinite Wishes",
        "rules": "Activating this device allows the user to make a wish. The DM rolls a d100; on a result of 95 or higher, reality may file a complaint, and the wish fails with dire consequences. If successful, the wish is granted without limit."
      },
      {
        "title": "Reality Stability Roll",
        "rules": "After each use, the DM rolls a d100. On a result of 95 or higher, reality stability is compromised, requiring an immediate DC 20 Wisdom (Perception) check to avoid a cascade effect that could unravel the fabric of existence."
      }
    ],
    "levelRequirementReason": "Even the simplest wish can have far-reaching consequences; this device requires at least 1st level to wield responsibly.",
    "vendorReason": "Wish Exploitation is known for pushing boundaries and selling items that exploit loopholes in reality, making them the perfect vendor for this gadget.",
    "shippingDetail": "Shipped via a network of teleportation contracts, the Wish Loop Generator arrives with an immediate 1-hour delay to account for potential shifts in reality stability.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Reality Stability Roll fails or wish is granted and successful",
      "charges": "Unlimited, but DM discretion limits use"
    },
    "priceReason": "Balanced at 1000 XP as it allows for powerful wishes without overbalancing the game.",
    "priceOriginal": 95000000,
    "priceReviewedAt": "2026-07-23T20:38:25.411013+00:00",
    "aiReviewedAt": "2026-07-23T20:38:25.411013+00:00",
    "aiReviewVersion": 1
  },
  "wish_wisp": {
    "id": "wish_wisp",
    "name": "Wish Wisp",
    "description": "The Wish Wisp is a tiny, iridescent ember that hovers just out of reach, its glow pulsing with unspoken promises. This enigmatic creature responds only to sincere desires, but at a cost: after granting your wish, it consumes one cherished memory from the wiser you. Its whispers are both enticement and warning, for the Wisp's power is as capricious as the cosmos itself, attracting attention from otherworldly entities that may seek to claim its secrets.",
    "category": "forbidden",
    "price": 690000,
    "icon": "✨",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Grant a single wish subject to DM adjudication",
      "Attracts cosmic attention; risk of reality distortion"
    ],
    "vendor": "celestial_exchange",
    "shippedBy": "Astral Wind",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Wish Granting",
        "rules": "Activation: Special. The Wisp responds only to sincere desires. It requires the wiser you to make a DC 30 Wisdom saving throw. On a success, it grants your wish; on a failure, it may twist reality in small ways and fails with no effect."
      },
      {
        "title": "Memory Loss",
        "rules": "After using the Wisp, the wiser you loses one cherished memory. This loss is permanent unless a Wish spell or similar effect is used to restore it within 24 hours of its loss."
      }
    ],
    "levelRequirementReason": "Only those with significant experience and wisdom can command the Wisp's power without succumbing to its darker aspects.",
    "vendorReason": "The Celestial Exchange is known for exotic and powerful items, including this enigmatic wisp that only the most trusted patrons may obtain.",
    "shippingDetail": "Ships via Astral Wind, a swift courier that delivers the Wisp directly to your home with no risk of mishap or theft.",
    "usage": {
      "activation": "Special (requires a DC 30 Wisdom saving throw)",
      "duration": "Instantaneous; ends when used",
      "endsWhen": "The wish is granted or fails, and the wiser you loses one cherished memory",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP as it provides a powerful but limited use of wish magic with significant risks.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-23T20:38:33.920201+00:00",
    "aiReviewedAt": "2026-07-23T20:38:33.920201+00:00",
    "aiReviewVersion": 1
  },
  "wishing_coin": {
    "id": "wishing_coin",
    "name": "Wishing Coin",
    "description": "The Wishing Coin is a gilded copper coin, intricately engraved with celestial symbols that shimmer faintly in the dark. Each night while you sleep, it whispers a single wish to your ear. The coin's power is both seductive and perilous; if you accept its offer, one day you'll find yourself aging by 1d6 years. Refuse its call, and it grows heavier with each passing night until finally, it will force the wish upon you.",
    "category": "premium",
    "price": 50000,
    "icon": "🪙",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Whispered Wish",
      "Age for Offer"
    ],
    "vendor": "celestial_exchange",
    "shippedBy": "Velvet Pouch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whispered Wish",
        "rules": "At the start of your first turn after waking each night, the Wishing Coin whispers a wish to you. The DM chooses one wish that is within your alignment's moral spectrum and has a logical outcome."
      },
      {
        "title": "Age for Offer",
        "rules": "If you choose to fulfill the whispered wish, roll 1d6 years of your life as a cost. You gain the benefit of the wish immediately after fulfilling this condition. If you refuse three consecutive nights, the coin's weight increases by +2d4 until you either accept its offer or break it."
      }
    ],
    "levelRequirementReason": "Even the simplest wish can have dire consequences; only those of level 1 and above are sufficiently aware to understand the risks.",
    "vendorReason": "The Celestial Exchange deals in all manner of rare and legendary items, including this coin that bridges the gap between mortal desires and divine intervention.",
    "shippingDetail": "Shipped within a velvet pouch to protect its delicate engravings during transit.",
    "usage": {
      "activation": "At the start of your first turn after waking each night.",
      "duration": "Until fulfilled or refused three consecutive nights.",
      "endsWhen": "The wish is either accepted and fulfilled, or you refuse it for a third consecutive night.",
      "charges": "Unlimited"
    },
    "priceReason": "The Wishing Coin's price reflects its rarity and the potential catastrophic outcomes of its use.",
    "priceOriginal": 150000,
    "priceReviewedAt": "2026-07-23T20:38:20.600990+00:00",
    "aiReviewedAt": "2026-07-23T20:38:20.600990+00:00",
    "aiReviewVersion": 1
  },
  "witcher_3_gwent_deck": {
    "id": "witcher_3_gwent_deck",
    "name": "Gwent Deck",
    "description": "The Gwent Deck is a meticulously crafted set of cards, each one intricately designed with symbols and runes. Crafted from ancient oakwood and enchanted by the enigmatic scholars of Kaer Morhen, this deck grants its wielder strategic insight into the game of Gwent. It's said that playing with this deck can reveal hidden truths or grant foresight into future battles. The cards are not merely for amusement; they offer a chance to earn gold or valuable information through the game’s mini-games, and those who collect them find their knowledge expanding with each card added to their collection.",
    "category": "curiosities",
    "price": 640,
    "icon": "🃏",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Gambler's Insight",
      "Collectible Lore"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Card Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gambler's Insight",
        "rules": "At the start of your turn, you may play a card from this deck as an action. If you win the resulting mini-game, you gain 50 XP and learn one secret from the realm. This effect can be used once per day."
      },
      {
        "title": "Collectible Lore",
        "rules": "For every unique card added to your collection, you gain a +1 bonus to Intelligence (History) checks until you have 10 different cards. Once you reach this milestone, you may attempt to unlock the secrets of Gwent lore."
      }
    ],
    "levelRequirementReason": "This deck is best suited for players who are beginning their journey into strategy and intrigue.",
    "vendorReason": "The Rogue Port's Black Market often features unique and rare items, including this enchanted Gwent Deck.",
    "shippingDetail": "Delivered by the Card Box, known for its swift and reliable service in delivering all types of card goods.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The game ends or you lose the mini-game",
      "charges": "Once per day"
    },
    "priceReason": "Crafted with ancient magic, this deck commands a premium price but offers unique and strategic benefits.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T20:38:22.066983+00:00",
    "aiReviewedAt": "2026-07-23T20:38:22.066983+00:00",
    "aiReviewVersion": 1
  },
  "witcher_silver_sword": {
    "id": "witcher_silver_sword",
    "name": "Silver Sword",
    "description": "The Silver Sword is a gleaming blade forged from refined silver and enchanted with the essence of the witcher. Its keen edge can pierce even the toughest monsters, dealing an extra 1d6 damage to aberrations. The sword requires no oils but still glows faintly in the dark, making it invaluable for night-time hunts. It is a favored weapon among seasoned warriors who seek to slay dangerous creatures with precision and speed.",
    "category": "equipment",
    "price": 7900,
    "icon": "🗡️",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "+2 vs monsters",
      "Extra 1d6 damage to aberrations"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Swift Wind Courier",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Enhanced Damage Against Aberrations",
        "rules": "When used against an aberration, the Silver Sword deals an additional 1d6 piercing damage. This effect has no save DC and can be used once per short rest."
      },
      {
        "title": "Increased Monster Defense",
        "rules": "The wielder gains a +2 bonus to attack rolls and saving throws against monsters. This bonus lasts until the end of their next long rest."
      }
    ],
    "levelRequirementReason": "This sword is crafted for seasoned adventurers who have proven their abilities in combat.",
    "vendorReason": "The Onyx Hand, a trusted supplier of magical weaponry, ensures that only the finest enchanted arms are sold to brave souls.",
    "shippingDetail": "Ships within three days with a delivery confirmation upon arrival.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of their next long rest",
      "endsWhen": "The wielder completes a long rest",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "This sword offers significant bonuses in combat against specific and common enemies, making it a valuable but not overpowered addition to the player's arsenal.",
    "priceOriginal": 30000,
    "priceReviewedAt": "2026-07-23T20:38:39.292440+00:00",
    "aiReviewedAt": "2026-07-23T20:38:39.292440+00:00",
    "aiReviewVersion": 1
  },
  "wonder_flower": {
    "id": "wonder_flower",
    "name": "Wonder Flower",
    "description": "The Wonder Flower is a bizarre bloom that emits an ethereal glow. When it blooms, reality distorts in strange and colorful ways, making the environment feel like a surreal painting come to life. Inanimate objects around you momentarily animate into whimsical creatures, while gravity seems to play tricks on your senses. The flower's petals are said to have been crafted from fragments of forgotten realities by the enigmatic Rogueport vendors.",
    "category": "forbidden",
    "price": 50000,
    "icon": "🌺",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Reality Distortion",
      "Animated Objects"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Hallucinogenic Container",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reality Distortion",
        "rules": "As an action, you can release the Wonder Flower's power. The environment around you is distorted for 10 minutes. Inanimate objects within a 20-foot radius animate and begin to sing nonsensical songs. This effect has no save DC but ends if you or any creature in the area takes damage."
      },
      {
        "title": "Animated Objects",
        "rules": "For the duration of the Reality Distortion, all inanimate objects within a 20-foot radius animate and can move at half speed. Any creature that interacts with them must make a DC 15 Dexterity saving throw or be tripped by an animated object."
      }
    ],
    "levelRequirementReason": "The Wonder Flower's power is accessible to all adventurers, but its unpredictable effects can be dangerous.",
    "vendorReason": "Rogueport vendors are known for their ability to source items from the most mysterious origins, including this bizarre bloom.",
    "shippingDetail": "The container is equipped with a special filter to minimize the effects of the Wonder Flower on the delivery team.",
    "usage": {
      "activation": "Action",
      "duration": "10 minutes",
      "endsWhen": "You or any creature in the area takes damage",
      "charges": "Unlimited"
    },
    "priceReason": "The Wonder Flower is a rare and unpredictable item, but its effects are limited to environmental changes rather than combat advantages.",
    "priceOriginal": 400000,
    "priceReviewedAt": "2026-07-23T20:38:41.585523+00:00",
    "aiReviewedAt": "2026-07-23T20:38:41.585523+00:00",
    "aiReviewVersion": 1
  },
  "wonder_flower_seed": {
    "id": "wonder_flower_seed",
    "name": "Wonder Seed",
    "description": "The Wonder Seed, a small, shimmering seed encased in iridescent petals, can warp reality within its localized area. When planted and activated, it reshapes the biome of a region instantly, transforming a desert into an ocean or mountains into forests. It also grants the power to animate all non-living objects within a city, turning them into functional, albeit somewhat clumsy, helpers for its wielder. This seed is no ordinary flora; it originates from the whimsical realms of the Talking Flower, and its effects are both unpredictable and awe-inspiring.",
    "category": "curiosities",
    "price": 50000,
    "icon": "🌱",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Biome Warping",
      "Object Animation"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Talking Flower Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Biome Warping",
        "rules": "By activating this seed within a specific radius, you can instantly change the biome of an area. The new biome will remain permanently transformed, affecting flora and fauna accordingly. This effect has no save DC but is limited to once per day."
      },
      {
        "title": "Object Animation",
        "rules": "Upon activation, all non-living objects within a city become animate for 1 hour. These objects can be controlled by the seed's wielder, though they may not perform complex tasks due to their inherent simplicity. This effect has no save DC but is limited to once per week."
      }
    ],
    "levelRequirementReason": "The Wonder Seed requires a level of at least 1 for its wielder to have the finesse and intent necessary to control such powerful, unpredictable magic.",
    "vendorReason": "Toad Town Market is known for its unique and rare items, making it an appropriate vendor for such an extraordinary seed.",
    "shippingDetail": "Ships via the Talking Flower Courier Service, which ensures swift delivery but requires a special delivery confirmation from the recipient.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for biome warping; 1 hour for object animation",
      "endsWhen": "The effect ends when the duration expires or if the seed is destroyed",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the rarity and unpredictable nature of the Wonder Seed, balancing its immense power with a relatively modest cost.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-23T20:39:14.417992+00:00",
    "aiReviewedAt": "2026-07-23T20:39:14.417992+00:00",
    "aiReviewVersion": 1
  },
  "world_of_warcraft_mount": {
    "id": "world_of_warcraft_mount",
    "name": "Epic Mount Whistle",
    "description": "Pauline's Microphone is a sleek, intricately crafted brass whistle that glows faintly with blue light. It was forged in the heart of the forge city by the legendary blacksmith Pauline, known for her magical artifacts. Upon its blow, it summons a swift and loyal steed, capable of both walking and flying at speeds up to 60 feet per round. The mount remains loyal until dismissed or until a rider mounts another creature within one mile.",
    "category": "equipment",
    "price": 8000,
    "icon": "🐎",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Summon Swift Steed",
      "Loyalty and Dismissal"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Whistle Chain Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Summon Swift Steed",
        "rules": "As an action, the wielder can blow Pauline's Microphone to summon a steed. The steed is a Large beast with a speed of 60 feet on land and in the air. It follows the rider’s commands until dismissed or another creature mounts it within one mile."
      },
      {
        "title": "Loyalty and Dismissal",
        "rules": "The summoned steed remains loyal to its rider for 1 hour per level of the summoner, after which time it returns to its plane of origin. The steed can be dismissed as a bonus action at any time."
      }
    ],
    "levelRequirementReason": "Requires attunement and sufficient magical prowess to control such a powerful summons.",
    "vendorReason": "The trading post often deals in rare artifacts and magical instruments, making it the go-to place for enchanted items like Pauline's Microphone.",
    "shippingDetail": "Delivered by Whistle Chain Express, known for its swift and reliable deliveries across the land.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour per level or until dismissed",
      "endsWhen": "Another rider mounts within one mile or the steed is dismissed",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at a lower price to ensure it remains a strategic but not game-breaking item.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-23T20:38:51.369033+00:00",
    "aiReviewedAt": "2026-07-23T20:38:51.369033+00:00",
    "aiReviewVersion": 1
  },
  "woven_from_the_laughter_of": {
    "id": "woven_from_the_laughter_of",
    "name": "Sugar Soul Amulet",
    "description": "The Sugar Soul Amulet is crafted from the laughter of baking spirits and woven into a delicate silver charm. It pulses with the essence of forgotten pastries, granting its wearer a sweet reprieve from fear. When near a magical bakery, the amulet glows softly, allowing the baker to hear the whispers of dough-folk spirits. However, each time it activates, a small piece of joy is drained from the wearer’s heart.",
    "category": "equipment",
    "price": 640,
    "icon": "🍞",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Immunity to Fear",
      "Heard Whispers"
    ],
    "vendor": "leclaire_isle",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Fear",
        "rules": "When activated as an action, the wearer gains temporary immunity to fear for 1 minute. This effect ends if the amulet is removed or if the wearer takes any harmful action."
      },
      {
        "title": "Heard Whispers",
        "rules": "The amulet grants the ability to hear the whispers of dough-folk spirits within a 30-foot radius when worn. This effect lasts until the end of your next turn, and it ends if you are incapacitated or die."
      }
    ],
    "levelRequirementReason": "The amulet’s power is accessible to adventurers who are just beginning their journey.",
    "vendorReason": "Leclaire Isle, renowned for its magical pastries and bakers' lore, sells items that resonate with the magic of pastry-making.",
    "shippingDetail": "The amulet is carefully packed in a basket of fresh pastries to ensure it arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until removed",
      "endsWhen": "Amulet is removed or wearer takes harmful action",
      "charges": "Unlimited, but one use per short rest"
    },
    "priceReason": "The amulet’s price reflects its unique crafting process and the magical essence it contains.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T20:38:55.691319+00:00",
    "aiReviewedAt": "2026-07-23T20:38:55.691319+00:00",
    "aiReviewVersion": 1
  },
  "xenonesia_alien_fruit_jelly_recipe": {
    "id": "xenonesia_alien_fruit_jelly_recipe",
    "name": "Recipe: Xenonesia Alien Fruit Jelly",
    "description": "The wobbly gelatinous jelly of Xenonesia is a rare treat from space fruits that have adapted to alien conditions. This recipe, known as 'Xenonesia Alien Fruit Jelly,' allows you to forage and craft this delicacy using glimmering fruits found only in the distant reaches of the cosmos. Consuming it grants you advantage on Intelligence saving throws for two hours, while also healing 1d6 psychic damage. The jelly's light glow hints at its otherworldly origins, and some say it might inspire strange dreams or nightmares.",
    "price": 3100,
    "icon": "🍮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Mental Clarity",
      "Healing Touch"
    ],
    "vendor": "xenonesia_outpost",
    "shippedBy": "Jiggly Jar Express",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Mental Clarity",
        "rules": "Eating the jelly grants you advantage on Intelligence saving throws for two hours. It also heals 1d6 psychic damage upon consumption."
      },
      {
        "title": "Healing Touch",
        "rules": "Crafting and consuming this jelly requires foraging alien fruits with a DC of 14, and it glows faintly as a result of its mysterious origins."
      }
    ],
    "levelRequirementReason": "This recipe is complex to craft and requires a basic understanding of alchemy.",
    "vendorReason": "The Xenonesian Chefs at the outpost have perfected this unique recipe from their distant home world.",
    "shippingDetail": "Shipped in a specially insulated container to preserve the jelly's delicate state.",
    "usage": {
      "activation": "Eat the jelly",
      "duration": "2 hours",
      "endsWhen": "Effect ends after duration expires or if consumed again",
      "charges": "Unlimited"
    },
    "priceReason": "The rarity and complexity of crafting this jelly justify its moderate price.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-23T20:38:57.437668+00:00",
    "aiReviewedAt": "2026-07-23T20:38:57.437668+00:00",
    "aiReviewVersion": 1
  },
  "xenonesia_alien_parasite_removal": {
    "id": "xenonesia_alien_parasite_removal",
    "name": "Xenonesia Alien Parasite Removal",
    "description": "This sleek, bioluminescent device is designed to professionally extract parasitic entities from hosts. The Xenonesia Alien Parasite Removal is a compact gadget made by Xenonesia Quarantine, renowned for their cutting-edge medical devices. After use, the parasite is safely contained in a sterile jar, perfect for study or souvenirs. While it grants advantage on Medicine checks, it also imposes a disadvantage on Charisma checks when interacting with the extracted species.",
    "category": "services",
    "price": 3100,
    "icon": "🪱",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Parasite Extraction",
      "Hostile Specimen"
    ],
    "vendor": "xenonesia",
    "shippedBy": "Sterile Transport",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Parasite Extraction",
        "rules": "As an action, use this device to extract one parasitic entity from a host. The extracted parasite is contained in a sterile jar as a souvenir or for study. This effect has no save DC and does not expend charges."
      },
      {
        "title": "Hostile Specimen",
        "rules": "The extracted specimen gains advantage on Charisma (Persuasion) checks against anyone who knows it was removed from the host, imposing a disadvantage on Charisma (Intimidation) checks made by the user. This effect lasts until the specimen is destroyed or escapes."
      }
    ],
    "levelRequirementReason": "This device requires basic medical knowledge to operate safely and effectively.",
    "vendorReason": "Xenonesia Quarantine specializes in alien biology and medicine, making their extraction devices reliable and effective.",
    "shippingDetail": "Ships within a week via specialized transport to ensure the parasite remains contained.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The extracted specimen is destroyed or escapes.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a rare item that provides professional-grade functionality without overpowered effects.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-23T20:39:05.758728+00:00",
    "aiReviewedAt": "2026-07-23T20:39:05.758728+00:00",
    "aiReviewVersion": 1
  },
  "xenonesia_alien_silk_shawl": {
    "id": "xenonesia_alien_silk_shawl",
    "name": "Xenonesia Alien Silk Shawl",
    "description": "The Xenonesia Alien Silk Shawl is a shimmering, iridescent shawl woven from ethereal threads that seem to catch and reflect starlight, making it nearly impossible for extraterrestrial eyes to focus on its wearer. This artifact shifts hues with the environment, providing minor camouflage in alien landscapes or urban settings. It whispers of distant worlds and ancient civilizations, a relic of the stars that can grant advantage against psychic attacks when worn, but also inadvertently draws curious, sometimes predatory, beings from beyond the cosmos.",
    "price": 3100,
    "icon": "🧣",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Advantage on saves vs. Psychic Effects",
      "Minor Camouflage"
    ],
    "vendor": "xenonesia_outpost",
    "shippedBy": "Stellar Silk Wrap",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Advantage on Saves vs. Psychic Effects",
        "rules": "When worn, the shawl grants its wearer advantage on saving throws against psychic damage and effects for one hour. This effect requires no action to activate but can be dispelled by any means that would end magical effects."
      },
      {
        "title": "Minor Camouflage",
        "rules": "The shawl's shifting colors provide a +2 bonus to Dexterity (Stealth) checks made within the first 10 minutes of wearing it. This effect requires no action and ends when the wearer leaves an area that offers cover or concealment."
      }
    ],
    "levelRequirementReason": "The intricate weaving and alien materials require a certain mastery to handle effectively.",
    "vendorReason": "Xenonesia Outpost specializes in exotic goods from distant worlds, including this unique artifact.",
    "shippingDetail": "Ships via interstellar courier with a two-week transit time due to the shawl's delicate nature.",
    "usage": {
      "activation": "Passive effect; no activation required when worn.",
      "duration": "1 hour or until removed, whichever comes first.",
      "endsWhen": "The wearer can dispel the effects by removing the shawl.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced to reflect its unique properties and limited availability from an exotic vendor.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-23T20:40:02.135241+00:00",
    "aiReviewedAt": "2026-07-23T20:40:02.135241+00:00",
    "aiReviewVersion": 1
  },
  "xenonesia_bio-enhancer": {
    "id": "xenonesia_bio enhancer",
    "name": "Xenonesia Bio-Enhancer",
    "description": "The Xenonesia Bio-Enhancer is a sleek, syringe-like device containing an alien retrovirus. When injected, it temporarily boosts one of your physical or mental stats by +4 for an hour, enhancing your performance in combat or concentration tasks. However, this temporary boost comes at a cost; you are left with a level of exhaustion after the effect expires and may suffer from strange side effects like skin discoloration or extra limbs.",
    "category": "consumables",
    "price": 3100,
    "icon": "🧬",
    "stock": 8,
    "rarity": "rare",
    "effects": [
      "Bio-Boost",
      "Exhaustion"
    ],
    "vendor": "Xenonesia",
    "shippedBy": "Cryogenic Pod Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bio-Boost",
        "rules": "Activate as a bonus action. Choose one ability score to gain +4 temporary modifier for 1 hour. Ends when the duration expires or if you are reduced to 0 hit points."
      },
      {
        "title": "Exhaustion",
        "rules": "After the Bio-Boost effect ends, you immediately become exhausted until after a long rest."
      }
    ],
    "levelRequirementReason": "Requires minimal character development to use responsibly.",
    "vendorReason": "As pioneers in biotechnology, Xenonesia offers this experimental enhancement for those willing to take risks.",
    "shippingDetail": "Ships via Cryogenic Pod Express, arriving within a week. Refrigerated shipping ensures the virus remains stable during transit.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 Hour",
      "endsWhen": "Duration expires or when you are reduced to 0 hit points",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price reflects the experimental nature and temporary effects of the Bio-Enhancer.",
    "priceOriginal": 13000,
    "priceReviewedAt": "2026-07-23T20:39:10.117668+00:00",
    "aiReviewedAt": "2026-07-23T20:39:10.117668+00:00",
    "aiReviewVersion": 1
  },
  "xenonesia_crystal_healing_session": {
    "id": "xenonesia_crystal_healing_session",
    "name": "Xenonesia Crystal Healing Session",
    "description": "The Xenonesia Crystal Healing Session is a delicate, iridescent gemstone, its surface shimmering with alien energies. Crafted by the xenonesian shamans of distant worlds, this crystal can restore your body and mind. It hums softly as it aligns your chakras, banishing minor diseases or curses, and grants you inspiration for wisdom- or psychic-based checks the following day. However, its presence becomes a source of discomfort if stress overtakes you.",
    "price": 3100,
    "icon": "💎",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Restore 1d8 hit points",
      "Grant inspiration on a Wisdom or Psychic check the next day"
    ],
    "vendor": "xenonesia_temple",
    "shippedBy": "Telepathic Transfer",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Glow",
        "rules": "When activated, the crystal emits a soft glow that restores 1d8 hit points to the user. This effect is instantaneous and does not require an action. The crystal must remain in direct contact with the user for at least one round."
      },
      {
        "title": "Inspiration Grant",
        "rules": "The crystal grants inspiration on a Wisdom or Psychic check the following day, provided it has been used within 24 hours of the check. No save is required; this effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to access its healing and inspirational benefits without requiring a high level.",
    "vendorReason": "The temple of Xenonesia has long been known as the custodian of these ancient crystals, passed down through generations of shamans.",
    "shippingDetail": "Ships instantly via telepathic communication with a xenonesian shaman.",
    "usage": {
      "activation": "Instantaneous when in direct contact with the user",
      "duration": "Instantaneous healing effect, lasting until applied hit points are restored",
      "endsWhen": "Used up after one application or if removed from the user",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The crystal's rare origin and unique properties justify its moderate price in experience points.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-23T20:40:11.052990+00:00",
    "aiReviewedAt": "2026-07-23T20:40:11.052990+00:00",
    "aiReviewVersion": 1
  },
  "xenonesia_crystal_juicer": {
    "id": "xenonesia_crystal_juicer",
    "name": "Xenonesia Crystal Juicer",
    "description": "The Xenonesia Crystal Juicer gleams with a faint, otherworldly light, its surface etched with alien runes that glow faintly in starlight. Crafted by the enigmatic Xenonesian Artisans, this gem-powered juicer extracts pure essence from exotic fruits, doubling their flavor and potency. When you activate it on an alien fruit, you gain +2 to Intelligence checks for creating unique dishes, but beware: overloading with a mundane fruit causes sparks of energy to arc from its core, frying the fruit instead.",
    "category": "equipment",
    "price": 3100,
    "icon": "💎",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Extracts Pure Essence",
      "Overloads on Earthly Fruits"
    ],
    "vendor": "xenonesia_outpost",
    "shippedBy": "Crystal Core Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Extracts Pure Essence",
        "rules": "When you activate the Xenonesia Crystal Juicer on an alien fruit, roll a d8 and add this to your Intelligence check for creating unique dishes. The juice produced is twice as potent, providing a +2 bonus to any checks made with exotic ingredients."
      },
      {
        "title": "Overloads on Earthly Fruits",
        "rules": "If you attempt to use the juicer on an earthly fruit (common or mundane), it overloads, causing sparks of energy to arc from its core. The fruit is destroyed and the device recharges in starlight for 24 hours."
      }
    ],
    "levelRequirementReason": "This simple yet powerful tool requires no great skill but instead relies on the user's creativity and knowledge.",
    "vendorReason": "Xenonesian Artisans frequently travel to the outpost, bringing with them their unique wares and this juicer is a staple of their offerings.",
    "shippingDetail": "Ships via the Crystal Core Crate, which ensures safe transport through any environment.",
    "usage": {
      "activation": "A bonus action to activate and juice an alien fruit.",
      "duration": "Instantaneous effect; lasts until consumed or expended.",
      "endsWhen": "The juice is consumed or the device overloads with a mundane fruit.",
      "charges": "Unlimited, recharges in starlight."
    },
    "priceReason": "This item combines utility and rarity, providing a significant bonus to creating unique dishes while maintaining a fair balance for its price.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-23T20:40:06.870065+00:00",
    "aiReviewedAt": "2026-07-23T20:40:06.870065+00:00",
    "aiReviewVersion": 1
  },
  "xenonesia_recipe_alien_fruit_salad": {
    "id": "xenonesia_recipe_alien_fruit_salad",
    "name": "Recipe: Xenonesia Alien Fruit Salad",
    "description": "The Recipe for Xenonesia Alien Fruit Salad is a parchment that crackles faintly, emblazoned with strange symbols and adorned in an array of bioluminescent fruit unlike anything known to the world. The exotic mixture grants you advantage on saving throws against psychic damage, but at the cost of seeing surreal, otherworldly colors that distort your perception, imposing disadvantage on Perception checks. The salad's glow emanates from the fruits' mysterious properties, a testament to Xenonese Exporters' mastery over alien flora.",
    "price": 650,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Advantage on saving throws against psychic damage",
      "Disadvantage on Perception checks"
    ],
    "vendor": "xenonesia",
    "shippedBy": "Sterile Transport",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Psychic Resilience",
        "rules": "Activates when consumed. Grants advantage on saving throws against psychic damage for the next 4 hours. The effect ends if you are incapacitated or fall unconscious."
      },
      {
        "title": "Distorted Vision",
        "rules": "Consuming the recipe imposes disadvantage on Perception checks until your next short or long rest. This effect is negated by spending a Constitution saving throw (DC 14)."
      }
    ],
    "levelRequirementReason": "The complexity of the alien ingredients and the need for proper preparation make this recipe suitable only for those who have reached at least third level.",
    "vendorReason": "Xenonese Exporters specialize in exotic goods from their distant world, ensuring that adventurers with the means can experience the fruits of their labor.",
    "shippingDetail": "The salad must be delivered within 24 hours to maintain its integrity. Failure to do so results in a partial effect or no effect at all.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "4 hours",
      "endsWhen": "You are incapacitated, fall unconscious, or consume the recipe again",
      "charges": "Unlimited"
    },
    "priceReason": "The exotic ingredients and specialized preparation required by Xenonese Exporters make this a reasonably priced, yet still valuable, item for adventurers seeking to fortify themselves against psychic attacks.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-23T20:39:41.503128+00:00",
    "aiReviewedAt": "2026-07-23T20:39:41.503128+00:00",
    "aiReviewVersion": 1
  },
  "xenonesia_recipe_alien_sushi": {
    "id": "xenonesia_recipe_alien_sushi",
    "name": "Recipe: Xenonesia Alien Sushi",
    "description": "The Recipe for Xenonesia Alien Sushi is an arcane parchment that, when used, transforms ordinary ingredients into a dish of otherworldly delicacy. The sushi glows faintly with bioluminescence and carries a scent that intoxicates the senses. It grants advantage on saving throws against psychic damage for 8 hours, ensuring your mind remains unshaken in the face of extraterrestrial horrors. Additionally, you gain proficiency in any one alien language (but not Common) for 1 hour, allowing you to communicate with Xenonese chefs or other strange intelligences beyond Earth.",
    "price": 3100,
    "icon": "📜",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on saves vs. psychic damage",
      "Proficiency in an alien language"
    ],
    "vendor": "xenonesia",
    "shippedBy": "Sterile Transport",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Psychic Resilience",
        "rules": "When you are targeted by a spell or effect that deals psychic damage, you can use this recipe to grant yourself advantage on the saving throw. This effect lasts for 8 hours."
      },
      {
        "title": "Alien Linguistics",
        "rules": "You gain proficiency in one alien language of your choice (but not Common). This proficiency lasts for 1 hour after using the recipe, allowing you to understand and speak with Xenonese Sushi Chefs or other extraterrestrial beings."
      }
    ],
    "levelRequirementReason": "The complexity of the recipe requires a basic understanding of alchemy and xenolinguistics.",
    "vendorReason": "Only Xenonese Sushi Chefs possess the knowledge to create such an intricate recipe, making it available only through them.",
    "shippingDetail": "Ships via a specialized cargo hold that maintains the sushi's bioluminescent glow and scent integrity.",
    "usage": {
      "activation": "As an action",
      "duration": "8 hours for psychic resilience, 1 hour for language proficiency",
      "endsWhen": "The effects expire naturally or when used in combat against a creature of non-Earthly origin",
      "charges": "Unlimited"
    },
    "priceReason": "The recipe requires rare ingredients and the expertise of Xenonese Sushi Chefs, making it moderately priced.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-23T20:40:09.257684+00:00",
    "aiReviewedAt": "2026-07-23T20:40:09.257684+00:00",
    "aiReviewVersion": 1
  },
  "xenonesian_bioship_seed": {
    "id": "xenonesian_bioship_seed",
    "name": "Xenonesian Bioship Seed",
    "description": "The Xenonesian Bioship Seed is a bioluminescent, egg-shaped pod that pulses gently as it absorbs solar radiation and organic nutrients from its surroundings. Within 48 hours of planting, this seed will sprout into a small scout vessel, complete with an internal propulsion system fueled by absorbed sunlight. The ship's hull glows faintly, hinting at the intricate biological machinery within. It requires regular feeding to maintain its energy levels and is capable of piloting itself on simple missions.",
    "price": 8000,
    "icon": "🌱",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Organic Scout Vessel",
      "Sustained Energy Absorption"
    ],
    "vendor": "xenonesian_ambassador",
    "shippedBy": "Cryo-Container",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Scout Vessel",
        "rules": "Upon activation, the seed grows into a scout vessel in 48 hours. The ship has AC 15, HP 75, and can fly at 60 feet per round. It runs on absorbed solar energy and requires feeding every week with organic matter to recharge its power reserves."
      },
      {
        "title": "Sustained Energy Absorption",
        "rules": "The ship absorbs solar energy continuously while in flight, regenerating a number of hit points equal to 1d6 + your proficiency bonus at the end of each day it remains airborne. However, if the vessel is inactive for more than three days, its energy reserves deplete by half."
      }
    ],
    "levelRequirementReason": "The seed requires a basic understanding of plant and organic life to cultivate and maintain.",
    "vendorReason": "The Xenonian Ambassador specializes in exotic flora and fauna, including the mysterious bioship seeds that have been gifted by their home planet.",
    "shippingDetail": "Ships are packed in cryogenic containers to ensure they remain dormant until planting. The seed remains viable for up to one year after harvest.",
    "usage": {
      "activation": "Plant the seed and wait 48 hours for it to grow into a scout vessel.",
      "duration": "The ship can fly indefinitely as long as it has sufficient organic matter and solar exposure.",
      "endsWhen": "The ship's energy reserves are depleted or if not fed with organic matter weekly.",
      "charges": "Unlimited, but requires regular feeding."
    },
    "priceReason": "Balanced price reflects the exotic nature of the seed and its unique abilities to grow into a functional scout vessel.",
    "priceOriginal": 110000,
    "priceReviewedAt": "2026-07-23T20:41:17.285948+00:00",
    "aiReviewedAt": "2026-07-23T20:41:17.285948+00:00",
    "aiReviewVersion": 1
  },
  "xenonesian_translation_earpiece": {
    "id": "xenonesian_translation_earpiece",
    "name": "Xenonesian Translation Earpiece",
    "description": "The Xenonesian Translation Earpiece is a small, sleek device that fits snugly behind your ear. Crafted from gleaming xenonite alloy and adorned with subtle alien sigils, it hums softly as it translates any spoken language into a comprehensible tongue. This artifact was forged in the forges of Xenonesia, where only the most skilled artisans can replicate its intricate design. Once attuned to a new language, you can converse seamlessly with any xenosapien without fear of miscommunication.",
    "category": "equipment",
    "price": 3100,
    "icon": "👂",
    "stock": 7,
    "rarity": "rare",
    "effects": [
      "Instantaneous Translation",
      "One-Time Attunement"
    ],
    "vendor": "xenonesian_ambassador",
    "shippedBy": "Courier of the Celestial Skyways",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instantaneous Translation",
        "rules": "The Xenonesian Translation Earpiece translates spoken languages instantaneously, allowing you to understand and speak any language without delay. This effect is passive while the earpiece is active."
      },
      {
        "title": "One-Time Attunement",
        "rules": "To attune to a new language, activate the earpiece as an action for 1 hour. During this time, you gain proficiency in understanding and speaking the chosen language. Once attuned, the device can be reattuned after a week of rest."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners who may not yet have the linguistic skills to learn new tongues.",
    "vendorReason": "The Xenonian Ambassador is known for their extensive contacts with xenosapiens and their expertise in facilitating inter-species communication.",
    "shippingDetail": "This item ships via the Courier of the Celestial Skyways, ensuring safe delivery through the vast reaches of space.",
    "usage": {
      "activation": "Passive while active; requires attunement as an action for 1 hour to learn a new language.",
      "duration": "Permanent once attuned",
      "endsWhen": "Reattuning after a week of rest or removing and reactivating the device.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the rare materials and craftsmanship required to produce this unique artifact.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-24T23:49:07.526530+00:00",
    "aiReviewedAt": "2026-07-24T23:49:07.526530+00:00",
    "aiReviewVersion": 1
  },
  "xo_staff_fragment": {
    "id": "xo_staff_fragment",
    "name": "Fragment of X.O.'s Staff",
    "description": "A splinter from X.O.'s shattered staff, this fragment hums with raw magical energy that crackles like a live fuse. When struck by lightning or wielded in battle, it pulses violently, releasing a surge of force that can shatter stone. Crafted during the Vigilance incident, this relic carries the weighty burden of the Iron Legion's ire and is whispered to have once belonged to one of the most feared commanders of the Legion.",
    "category": "forbidden",
    "price": 50000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Spellcasting Focus",
      "Staff Surge"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "MAGICALLY SHIELDED CONTAINER",
    "levelRequirement": 10,
    "warning": "Connected to the Vigilance incident. Iron Legion will arrest on sight.",
    "effectDetails": [
      {
        "title": "Spellcasting Focus",
        "rules": "This fragment functions as a spellcasting focus. While holding it, you have advantage on spell attack rolls and saving throws that use the staff's spells."
      },
      {
        "title": "Staff Surge",
        "rules": "Once per day, you may cast any spell you know at one level higher than normal. This uses one of its charges if it has any. The spell must have a casting time other than action and cannot be cast on yourself or an unwilling target."
      }
    ],
    "levelRequirementReason": "Requires a minimum proficiency in Arcana to wield effectively.",
    "vendorReason": "The Rogue Port Black Market often deals in items with controversial origins, and this fragment is no exception.",
    "shippingDetail": "Delivered via a secret courier network to ensure the item's arrival remains unseen by prying eyes.",
    "usage": {
      "activation": "Instantaneous action for spellcasting focus, Staff Surge requires no action but must be prepared in advance.",
      "duration": "Instantaneous and one-time use per day",
      "endsWhen": "Exhausted after a single usage; recharges upon completion of a long rest.",
      "charges": "1 charge initially, recharges to 5 charges with each long rest"
    },
    "priceReason": "Balanced at this price as it combines a unique focus and one-time use surge ability.",
    "priceOriginal": 600000,
    "priceReviewedAt": "2026-07-23T20:40:34.646934+00:00",
    "aiReviewedAt": "2026-07-23T20:40:34.646934+00:00",
    "aiReviewVersion": 1
  },
  "yellow_paint": {
    "id": "yellow_paint",
    "name": "Bucket of Yellow Paint",
    "description": "This weathered bucket holds a vibrant, golden-yellow paint that gleams like sunlight on freshly mown hay. It's said to have been crafted in the bustling streets of Toad Town by the hands of an eccentric artist known only as 'The Yellow Painter.' The paint never dries and always leaves behind a vivid, long-lasting stain that can only be removed with great effort. Use it wisely, for once applied, the golden hue refuses to fade.",
    "category": "curiosities",
    "price": 98,
    "icon": "🎨",
    "stock": 100,
    "rarity": "common",
    "effects": [
      "Paint things yellow",
      "Sticky and persistent"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Can",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Paint Application",
        "rules": "As a bonus action, you can apply the paint to an object or surface within reach. The painted area becomes permanently coated in vibrant golden-yellow paint that cannot be washed off without significant effort (DM's discretion)."
      },
      {
        "title": "Sticky Residue",
        "rules": "The paint leaves behind a sticky residue, making it difficult for anyone to handle the affected object or surface. The target must make a DC 12 Dexterity saving throw or be considered incapacitated until cleaned."
      }
    ],
    "levelRequirementReason": "This item is easy to use and requires no special training, making it suitable for even the most novice adventurers.",
    "vendorReason": "Toad Town Market regularly stocks unique items crafted by local artisans, including 'The Yellow Painter.'",
    "shippingDetail": "Delivered via Can's speedy courier service within the next three days.",
    "usage": {
      "activation": "Bonus action to apply paint or Dexterity saving throw to handle sticky residue.",
      "duration": "Instantaneous application; effects last until cleaned.",
      "endsWhen": "The painted area is cleaned or becomes damaged beyond recognition.",
      "charges": "Unlimited, as the paint never dries."
    },
    "priceReason": "Balanced at half its original price to reflect its utility and limited effect duration.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-23T20:40:34.839479+00:00",
    "aiReviewedAt": "2026-07-23T20:40:34.839479+00:00",
    "aiReviewVersion": 1
  },
  "yggdrasil_branch_sapling": {
    "id": "yggdrasil_branch_sapling",
    "name": "Yggdrasil Branch Sapling",
    "description": "The Yggdrasil Branch Sapling is a living fragment of the World Tree, a revered symbol of life and connection in Norse mythology. This sapling, carefully crafted by the pantheon’s horticulturists, can grow into a planar portal tree that connects to three random planes each month. The tree's roots stretch across dimensions, allowing travelers to journey between worlds with ease, but its branches are fragile and must be tended with care to maintain its connection.",
    "price": 700000,
    "icon": "🌳",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Planar Portal Tree",
      "Random Plane Connections"
    ],
    "vendor": "world_tree_nursery",
    "shippedBy": "Squirrel of Yggdrasil",
    "levelRequirement": 19,
    "factionBonus": {
      "nature": 250
    },
    "effectDetails": [
      {
        "title": "Planar Portal Tree",
        "rules": "Once per month, the sapling grows into a fully functional planar portal tree. This tree connects to three random planes each time it sprouts. The tree remains active for one year before it must be tended again by someone of at least 19th level to continue its connection."
      },
      {
        "title": "Random Plane Connections",
        "rules": "The sapling randomly selects three different planes from the multiverse every month, allowing access between these realms. The connections last for one year and can be disrupted if the tree is not properly maintained by a 19th-level character."
      }
    ],
    "levelRequirementReason": "Only characters of at least 19th level possess the knowledge and strength to properly tend the sapling and maintain its connection to the planes.",
    "vendorReason": "The World Tree Nursery is entrusted with the care and propagation of sacred Yggdrasil fragments, ensuring only those capable can purchase or receive such powerful items.",
    "shippingDetail": "Delivered by a swift squirrel courier who ensures the sapling arrives in optimal condition. Delivery takes three days via the World Tree's own courier system.",
    "usage": {
      "activation": "Monthly tending by a character of at least 19th level is required to maintain the tree’s planar connections.",
      "duration": "One year",
      "endsWhen": "The monthly tending requirement is not met or the tree's connection degrades.",
      "charges": "Unlimited, but requires monthly upkeep."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the sapling’s rarity and the significant power it provides in connecting to multiple planes each month.",
    "priceOriginal": 1150000,
    "priceReviewedAt": "2026-07-24T23:49:16.864056+00:00",
    "aiReviewedAt": "2026-07-24T23:49:16.864056+00:00",
    "aiReviewVersion": 1
  },
  "yoshi_clan_egg": {
    "id": "yoshi_clan_egg",
    "name": "Yoshi Clan Egg",
    "description": "The Yoshi Clan Egg, a vibrant orb of emerald and gold, radiates a soothing hum that resonates through the air like the chirp of its future owner’s loyal companion. Crafted by the skilled artisans of Yoshi Clans from the heartwood of ancient trees, this egg takes one week to hatch into a friendly riding beast, embodying the spirit of protection and loyalty. The hatched Yoshi can consume one enemy per day, bestowing +5 hit points upon its rider as a reward for valorous deeds.",
    "category": "curiosities",
    "price": 3100,
    "icon": "🥚",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Egg Incubation",
      "Yoshi's Valor"
    ],
    "vendor": "yoshi_clans",
    "shippedBy": "Nest-Warmed Blanket",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Egg Incubation",
        "rules": "The egg requires one week of constant warmth to hatch, after which it transforms into a trained riding beast. The hatching process is passive and does not require any actions from the owner."
      },
      {
        "title": "Yoshi's Valor",
        "rules": "Once per day as a bonus action, the Yoshi can consume an enemy within 30 feet to grant its rider +5 hit points until the end of the next long rest. The Yoshi must succeed on a Wisdom saving throw (DC 12) or become exhausted for one hour if it fails."
      }
    ],
    "levelRequirementReason": "The egg requires minimal experience to hatch and can be cared for by even the most novice adventurers.",
    "vendorReason": "Yoshi Clans are renowned for their expertise in crafting eggs that embody the spirit of their clan, ensuring only they sell such sacred items.",
    "shippingDetail": "The egg must be shipped wrapped in a Nest-Warmed Blanket to ensure it remains warm during transit.",
    "usage": {
      "activation": "Passive (incubation) and once per day as a bonus action (Yoshi’s Valor)",
      "duration": "Instantaneous hatching, daily duration for Yoshi's Valor",
      "endsWhen": "Egg is destroyed upon failure to hatch or Yoshi’s Valor ends",
      "charges": "Unlimited charges"
    },
    "priceReason": "The egg's price reflects the artisanal craftsmanship and the unique daily benefit it provides.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-23T20:41:05.792239+00:00",
    "aiReviewedAt": "2026-07-23T20:41:05.792239+00:00",
    "aiReviewVersion": 1
  },
  "yoshi_clans_bootleg_yoshi_egg": {
    "id": "yoshi_clans_bootleg_yoshi_egg",
    "name": "Yoshi Clans Bootleg Yoshi Egg",
    "description": "This wooden egg, painted to mimic a Yoshi egg's vibrant hues and patterns, is clearly a bootleg imitation. The surface reveals subtle flaws in its craftsmanship, yet it retains enough authenticity to fool even wary adventurers into mistaking it for the genuine article. Painted with care during Yoshi Clans' annual Craft Day, this egg can be repainted to trick gullible NPCs or used as a harmless distraction. However, it carries no magical power and is merely a cleverly crafted joke item.",
    "category": "equipment",
    "price": 99,
    "icon": "🥚",
    "stock": 7,
    "rarity": "common",
    "effects": [
      "Bootleg Egg",
      "Confusion Charm"
    ],
    "vendor": "yoshi_clans",
    "shippedBy": "Egg Drop Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bootleg Egg",
        "rules": "When thrown, the egg breaks on impact, dealing 1d4 bludgeoning damage. It can be painted to deceive NPCs into thinking it is a real Yoshi egg."
      },
      {
        "title": "Confusion Charm",
        "rules": "Enemies within 5 feet must succeed on a DC 10 Wisdom saving throw or become confused for 1 minute, acting erratically and unpredictably. This effect ends if the target takes any damage or is hit by an attack."
      }
    ],
    "levelRequirementReason": "This item is designed to be used by lower-level adventurers who can benefit from its humorous but harmless effects.",
    "vendorReason": "The Yoshi Clans are known for their playful and whimsical crafts, making this bootleg egg a perfect addition to their inventory.",
    "shippingDetail": "Delivered with speed and precision by Egg Drop Express; arrives fresh from the annual Craft Day.",
    "usage": {
      "activation": "Throw as an action or bonus action, or paint passively",
      "duration": "Instantaneous damage, confusion lasts until end of next turn for save failures",
      "endsWhen": "Target takes damage or is hit by an attack; painting requires no action",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item offers a balanced price point, providing a humorous and harmless tool without breaking the bank.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-23T20:41:23.550999+00:00",
    "aiReviewedAt": "2026-07-23T20:41:23.550999+00:00",
    "aiReviewVersion": 1
  },
  "yoshi_clans_egg_ammo": {
    "id": "yoshi_clans_egg_ammo",
    "name": "Yoshi Clans Egg Ammo",
    "description": "The Yoshi Clans Egg Ammo is a throwable weapon that combines the clan's ancient magic with Yoshis' natural abilities. Each egg, warm to the touch and made from a unique blend of Yoshis' saliva and enchanted clay, deals surprising damage when thrown. It can be tossed up to 60 feet away, knocking prone any target who fails their DEX save against a DC 12 check. Additionally, these eggs are not just weapons; they occasionally hatch into tiny Yoshis, adding an element of surprise to battles.",
    "category": "equipment",
    "price": 650,
    "icon": "🥚",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Knock Prone on Save",
      "Occasional Hatching"
    ],
    "vendor": "yoshi_clans_egghouse",
    "shippedBy": "Yoshi Express Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Knock Prone on Save",
        "rules": "When a target is hit by Yoshi Clans Egg Ammo, they must succeed on a DEX save (DC 12) or be knocked prone. This effect lasts until the end of their next turn."
      },
      {
        "title": "Occasional Hatching",
        "rules": "There is a 5% chance that an egg will hatch into a tiny Yoshi, which can assist you for the duration of the encounter if it remains within 10 feet. The hatched egg has hit points equal to half your level and can take actions as a bonus action."
      }
    ],
    "levelRequirementReason": "This weapon is designed for beginners, providing them with a versatile tool that combines utility and combat effectiveness.",
    "vendorReason": "The Yoshi Clans Egghouse specializes in weapons made by the clan members themselves, ensuring quality and authenticity.",
    "shippingDetail": "Delivered with same-day service to any location within a 10-mile radius of the Egghouse.",
    "usage": {
      "activation": "Throw as an action or bonus action",
      "duration": "Instantaneous effect; lasts until end of target's next turn if they fail the save",
      "endsWhen": "The egg is thrown and its effect resolves, or it hatches into a tiny Yoshi",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP as it provides a good mix of utility and combat effectiveness for new adventurers.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-23T20:41:34.698345+00:00",
    "aiReviewedAt": "2026-07-23T20:41:34.698345+00:00",
    "aiReviewVersion": 1
  },
  "yoshi_clans_egg_carton_incubator": {
    "id": "yoshi_clans_egg_carton_incubator",
    "name": "Yoshi Clans Egg Carton Incubator",
    "description": "This egg carton, crafted by the Yoshi Eggsmiths of Yoshi Clans Village, radiates a warm, gentle heat that steams rice eggs to perfection. It not only ensures they cook evenly but also grants +1 Dexterity modifier for any cooking checks involving rice eggs. When fully charged, it can incubate and hatch an egg, though the hatched chick might roll out with surprising precision, adding a whimsical touch to your kitchen antics.",
    "category": "equipment",
    "price": 650,
    "icon": "🍚",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Gentle Steaming",
      "Incubation & Hatching"
    ],
    "vendor": "yoshi_clans_village",
    "shippedBy": "Egg Warm Wrap",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gentle Steaming",
        "rules": "Activates as an action. The incubator provides a +1 Dexterity modifier for any cooking check involving rice eggs. This effect lasts until the dish is served or the carton runs out of steam."
      },
      {
        "title": "Incubation & Hatching",
        "rules": "Requires 24 hours to fully charge and hatch an egg. The hatched chick exits with a playful roll, leaving behind a small, cute companion that can be used for entertainment or further cooking tasks. This effect is limited to one use per day."
      }
    ],
    "levelRequirementReason": "This item's basic functionality allows even the most novice adventurers to contribute to meal preparation.",
    "vendorReason": "Yoshi Eggsmiths are known for their expertise in crafting egg-related items, ensuring this carton is both functional and delightful.",
    "shippingDetail": "Ships within a single day, delivered warm to your doorstep.",
    "usage": {
      "activation": "Activates as an action for gentle steaming; requires 24 hours of inactivity for incubation and hatching.",
      "duration": "Effect lasts until the dish is served or the steam runs out (gentle steaming) or until the egg is fully hatched and the chick exits (incubation & hatching).",
      "endsWhen": "The effect ends when the dish is eaten, the steam fades, or the incubation period is completed.",
      "charges": "Unlimited; can be recharged by simply allowing it to rest."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its unique functionality and the effort required for crafting such a specialized item.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T20:41:48.690518+00:00",
    "aiReviewedAt": "2026-07-23T20:41:48.690518+00:00",
    "aiReviewVersion": 1
  },
  "yoshi_clans_egg_freshness_test": {
    "id": "yoshi_clans_egg_freshness_test",
    "name": "Yoshi Clans Egg Freshness Test",
    "description": "This small, intricately crafted egg-shaped device features a glassy surface that glows faintly when held to an egg. Crafted by the diligent Yoshi Clans Quality Control team in the heart of Dinosaur Island, it not only reveals the freshness of eggs but also offers a rare treat. With a 50% chance of yielding a genuine Yoshi egg, this device is more than just a tool; it's a small slice of the island’s magic, perfect for those who want to ensure their meals are both safe and special.",
    "category": "services",
    "price": 99,
    "icon": "🥚",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Fresh Egg Check",
      "Rare Yoshi Egg Reward"
    ],
    "vendor": "yoshi_clans",
    "shippedBy": "Egg Drop Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fresh Egg Check",
        "rules": "When activated as an action by holding it close to an egg, this device emits a soft glow. If the egg is fresh, it glows brightly; if not, it dims and turns red. This provides advantage on checks involving eggs for 1 hour."
      },
      {
        "title": "Rare Yoshi Egg Reward",
        "rules": "There is a 50% chance that using this device will result in the discovery of a genuine Yoshi egg. The egg can be hatched into a baby Yoshis, adding a touch of adventure and magic to one's collection."
      }
    ],
    "levelRequirementReason": "This simple yet effective tool is accessible to all adventurers who wish to ensure their meals are fresh.",
    "vendorReason": "Yoshi Clans Quality Control ensures that every egg tested with this device meets the highest standards of freshness and quality.",
    "shippingDetail": "Delivered by Egg Drop Express, ensuring eggs are fresh upon arrival. Eggs may hatch during transit; adventurers should be prepared for any surprise arrivals!",
    "usage": {
      "activation": "Action to hold it close to an egg.",
      "duration": "1 hour advantage on checks involving eggs.",
      "endsWhen": "The effect ends when the time expires or a new check is performed with this device.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP, this item provides both utility and a rare reward, ensuring it's a fair value for any adventurer.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-23T20:41:54.462299+00:00",
    "aiReviewedAt": "2026-07-23T20:41:54.462299+00:00",
    "aiReviewVersion": 1
  },
  "yoshi_clans_egg_fried_rice_recipe": {
    "id": "yoshi_clans_egg_fried_rice_recipe",
    "name": "Recipe: Yoshi Clans Egg Fried Rice",
    "description": "The Recipe: Yoshi Clans Egg Fried Rice, crafted by the Clan Cooks of Yoshis' Village, is a dish that harnesses the ancient culinary techniques passed down through generations. This delicacy, made from tender rice stir-fried with fresh, yolky eggs, is more than just sustenance—it's an elixir of dino energy. Consuming this dish grants you +1 to your Dexterity attack rolls for two hours, as if your movements are imbued with the speed and agility of Yoshis in motion.",
    "price": 650,
    "icon": "🍚",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Stir-fry with Eggs",
      "Yoshi Energy Boost"
    ],
    "vendor": "yoshi_clans_village",
    "shippedBy": "Eggshell Edition Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stir-Fry with Eggs",
        "rules": "Consume this dish to gain +1 to Dexterity attack rolls for two hours. This effect requires the consumption of rice and fresh, yolky eggs, as taught by Clan Cooks."
      },
      {
        "title": "Yoshi Energy Boost",
        "rules": "Upon eating, you are granted a burst of energy that lasts for 2 hours. During this time, your Dexterity attack rolls benefit from the quick reflexes and agility of Yoshis in the wild."
      }
    ],
    "levelRequirementReason": "This recipe is accessible to all adventurers who wish to partake in the culinary wisdom of the Yoshis.",
    "vendorReason": "The village's cooks are renowned for their mastery of this dish, ensuring each serving is as energizing and delicious as it should be.",
    "shippingDetail": "Delivered fresh from the heart of Yoshis' Village, with special handling to ensure the ingredients remain in peak condition.",
    "usage": {
      "activation": "Consume the dish at any time for its effects.",
      "duration": "2 hours after consumption.",
      "endsWhen": "The effect ends when the two-hour duration expires or if you consume another serving of this recipe within that period.",
      "charges": "Unlimited, as long as the ingredients are available."
    },
    "priceReason": "Balanced at 1000 XP, this dish offers a flavorful and mechanically sound boost without overshadowing other adventuring options.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T20:42:33.696832+00:00",
    "aiReviewedAt": "2026-07-23T20:42:33.696832+00:00",
    "aiReviewVersion": 1
  },
  "yoshi_clans_egg_incubator_cooker": {
    "id": "yoshi_clans_egg_incubator_cooker",
    "name": "Yoshi Clans Egg Incubator Cooker",
    "description": "The Yoshi Clans Egg Incubator Cooker is a marvel of culinary and hatching technology. This sleek device simultaneously incubates and cooks eggs, ensuring they are perfectly cooked while maintaining their warmth for potential hatching. Crafted by the Yoshi Clans Egg Tech, it's a rare find that can hatch temporary companions should you desire. The machine occasionally surprises its operators with an accidental hatched egg—a delightful, albeit unpredictable, feature.",
    "category": "equipment",
    "price": 3100,
    "icon": "🥚",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Simultaneous Incubation & Cooking",
      "Temporary Companion"
    ],
    "vendor": "yoshi_clans",
    "shippedBy": "Egg Drop Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Simultaneous Incubation & Cooking",
        "rules": "The device simultaneously incubates and cooks eggs. It ensures the egg is perfectly cooked while maintaining its warmth for hatching, if needed."
      },
      {
        "title": "Temporary Companion",
        "rules": "If an egg successfully hatches within 24 hours of incubation, a temporary companion (Yoshi) appears as your familiar for 1 hour. This effect can only occur once per day."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to handle the intricate technology and ensure the safety of the hatching process.",
    "vendorReason": "Only Yoshi Clans Egg Tech can produce such a finely tuned device, ensuring both quality and reliability.",
    "shippingDetail": "Delivered via Egg Drop Express, known for its speedy courier service around the realms.",
    "usage": {
      "activation": "Instantaneous action to start cooking or incubating an egg.",
      "duration": "Until the egg is fully cooked or hatches (if applicable).",
      "endsWhen": "The cooked egg is consumed or the incubated egg successfully hatches, whichever comes first.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare craftsmanship and utility for both cooking and hatching eggs.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-23T20:42:05.577126+00:00",
    "aiReviewedAt": "2026-07-23T20:42:05.577126+00:00",
    "aiReviewVersion": 1
  },
  "yoshi_clans_egg_shell_helmet": {
    "id": "yoshi_clans_egg_shell_helmet",
    "name": "Yoshi Clans Egg Shell Helmet",
    "description": "The Yoshi Clans Egg Shell Helmet is a durable helm crafted from the hard yet pliable shells of rare, ancient eggs. Its surface is speckled with subtle patterns that shift in the light, hinting at the egg's origins deep within the Yoshi Clans' sacred nest. This helmet not only offers protection but also whispers tales of valor to those who wear it, boosting their confidence and resilience against blows.",
    "category": "equipment",
    "price": 650,
    "icon": "⛑️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+1 AC against bludgeoning",
      "Helmet hatches a chick (distraction aid)"
    ],
    "vendor": "yoshi_clans_nest",
    "shippedBy": "Egg Carton Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "+1 AC against Bludgeoning",
        "rules": "This helmet provides +1 AC specifically against bludgeoning attacks. The benefit lasts until the end of your next turn after taking such an attack."
      },
      {
        "title": "Helmet Hatches a Chick (Distraction Aid)",
        "rules": "When you take damage, this helmet hatches a small, chirping chick that distracts nearby foes for 1 round. The distraction ends if the helmet takes further damage or if a creature within 5 feet of it makes an attack."
      }
    ],
    "levelRequirementReason": "The helmet's protective properties and the unique hatching feature are accessible to players early in their journey.",
    "vendorReason": "Yoshi Crafters have mastered the art of using egg shells, ensuring this helm offers both protection and mystic power.",
    "shippingDetail": "The helmet arrives in a specially designed cradle to ensure it remains intact during transit.",
    "usage": {
      "activation": "Instantaneous (no action required)",
      "duration": "Until the end of your next turn after taking bludgeoning damage, or until the distraction ends",
      "endsWhen": "The helmet takes further damage or if a creature within 5 feet makes an attack",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at half-price as it offers both defensive benefits and a unique, thematic feature.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-23T20:42:20.373201+00:00",
    "aiReviewedAt": "2026-07-23T20:42:20.373201+00:00",
    "aiReviewVersion": 1
  },
  "yoshi_clans_egg_sitting_service": {
    "id": "yoshi_clans_egg_sitting_service",
    "name": "Yoshi Clans Egg Sitting Service",
    "description": "The Yoshi Clans Egg Sitting Service places you in charge of a carefully tended egg, or allows you to oversee one of theirs. As you wait, a small dinosaur companion may hatch from it, ready for your commands. However, the experience is far from comfortable—your back will thank you only after 24 hours have passed. The eggs are crafted with love by the Yoshi Clans Daycare, known for their impeccable care and precision in hatching these ancient treasures.",
    "category": "services",
    "price": 650,
    "icon": "🥚",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Hatch a small dinosaur companion",
      "Imprinting risk"
    ],
    "vendor": "yoshi_clans",
    "shippedBy": "Egg Drop Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Dinosaur Companion",
        "rules": "You may sit on the egg to hatch a random small dinosaur companion. The companion lasts for 24 hours and is loyal to you, but has a 10% chance per hour to imprint on a random object or person nearby."
      },
      {
        "title": "Imprinting Risk",
        "rules": "At the start of each hour while sitting on the egg, roll a d10. On a result of 1-2, the companion has a 10% chance per hour to imprint on a random object within reach."
      }
    ],
    "levelRequirementReason": "Requires at least third level to comfortably handle and manage the hatching process.",
    "vendorReason": "The Yoshi Clans Daycare is renowned for their expertise in egg care, making this service a trusted choice among adventurers.",
    "shippingDetail": "Delivered by Egg Drop Express within the day, ensuring you're ready to sit on your egg by morning.",
    "usage": {
      "activation": "Passive effect upon sitting on the egg for at least one hour.",
      "duration": "24 hours or until the companion imprints, whichever comes first.",
      "endsWhen": "The companion imprints on a random object or person, or after 24 hours.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price considering the unique experience and potential for rare dinosaur companions.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-23T20:42:22.913549+00:00",
    "aiReviewedAt": "2026-07-23T20:42:22.913549+00:00",
    "aiReviewVersion": 1
  },
  "yoshi_clans_egg_toss_game_premium": {
    "id": "yoshi_clans_egg_toss_game_premium",
    "name": "Yoshi Clans Egg Toss Game ",
    "description": "The Yoshi Clans Egg Toss Game hones your accuracy and reflexes in a lively challenge. Each toss of the egg-shaped discs improves your range attack by +1 for an entire day, while you must dodge the flying eggs to avoid being hit yourself. The game is made by the skilled artisans of Yoshi Clans Village, ensuring each toss is both fun and beneficial. Shipping arrives fresh and ready-to-play in a sturdy Egg Carton.",
    "price": 650,
    "icon": "🥚",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Ranged Attack Boost",
      "Egg Dodging Reflexes"
    ],
    "vendor": "yoshi_clans_village",
    "shippedBy": "Egg Carton Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ranged Attack Boost",
        "rules": "When you use the game, you gain +1 to your ranged attack rolls until the end of the next long rest. This effect does not stack with other attack bonuses."
      },
      {
        "title": "Egg Dodging Reflexes",
        "rules": "You must make a Dexterity saving throw every time an egg is thrown at you during the game. On a successful save, you avoid the egg; on a failed save, you take 1d4 bludgeoning damage."
      }
    ],
    "levelRequirementReason": "Beginners can start with this game to improve their accuracy and reflexes.",
    "vendorReason": "As makers of the game, Yoshi Clans Village ensures quality and authenticity.",
    "shippingDetail": "Delivered fresh in a durable egg carton to keep your game safe during transit.",
    "usage": {
      "activation": "Activate once per day by playing the Egg Toss Game.",
      "duration": "Until the end of the next long rest.",
      "endsWhen": "The effect expires at the end of the next long rest or if you stop using it early.",
      "charges": "Unlimited, but only one use per day."
    },
    "priceReason": "This price reflects a balanced cost for improving skills and reflexes without overpricing the item.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-23T20:42:35.005209+00:00",
    "aiReviewedAt": "2026-07-23T20:42:35.005209+00:00",
    "aiReviewVersion": 1
  },
  "yoshi_clans_recipe_egg_souffle": {
    "id": "yoshi_clans_recipe_egg_souffle",
    "name": "Recipe: Yoshi Clans Egg Soufflé",
    "description": "The Recipe: Yoshi Clans Egg Soufflé is a light and fluffy culinary creation from the heart of Yoshi Island. Crafted by the island’s master chefs, this dish not only elevates your mood but also grants you an extra spring in your step for a brief moment. Eat it quietly or risk its collapse, as speaking loudly while enjoying this delicate treat can cause it to deflate into a mere shell.",
    "price": 650,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Elevated Spirits",
      "Leaping Leap"
    ],
    "vendor": "yoshi_clans",
    "shippedBy": "Egg Drop Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elevated Spirits",
        "rules": "When consumed, you gain advantage on saving throws against depression and fear for 1 hour. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Leaping Leap",
        "rules": "For as long as you have this recipe active, you can jump 5 feet higher than normal. This boost to your jumping ability is temporary and ends when you consume a solid meal or at the start of your next short rest."
      }
    ],
    "levelRequirementReason": "This simple yet delightful dish requires no specific level as it is accessible to all adventurers seeking a mood lift.",
    "vendorReason": "The Yoshi Clans are renowned for their unique and uplifting recipes, making this treat a natural addition to their menu.",
    "shippingDetail": "Delivered fresh from Yoshi Island; may arrive with the signature of the chef himself.",
    "usage": {
      "activation": "Consumed as an action.",
      "duration": "1 hour or until the end of your next long rest, whichever comes first.",
      "endsWhen": "At the start of your next short rest or when you consume a solid meal.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect its ability to provide temporary but significant benefits in morale and physical prowess.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-23T20:42:36.487034+00:00",
    "aiReviewedAt": "2026-07-23T20:42:36.487034+00:00",
    "aiReviewVersion": 1
  },
  "yoshi_clans_wario_egg_paint": {
    "id": "yoshi_clans_wario_egg_paint",
    "name": "Yoshi Clans Wario Egg Paint",
    "description": "Yoshi Clans Wario Egg Paint is a vibrant red and yellow concoction that transforms any egg into a grotesque caricature of Wario. When applied, it becomes an immediate distraction, drawing attention from nearby foes who must investigate the painted egg. However, the smell of garlic emitted by these eggs hampers stealthy maneuvers, forcing characters to endure penalties on Stealth checks within 30 feet. Yoshis are particularly sensitive to this depiction, making interaction with them a challenge as you face disadvantage on Charisma (Persuasion) and (Performance) checks.",
    "category": "equipment",
    "price": 99,
    "icon": "🎨",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Egg Distraction",
      "Garlic Smell Disadvantage"
    ],
    "vendor": "yoshi_clans",
    "shippedBy": "Egg Drop Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Egg Distraction",
        "rules": "When applied to an egg, the painted egg becomes a distraction. Creatures within 30 feet must make a Wisdom saving throw (DC 12) or investigate it immediately for 1 minute. This effect lasts until the creature successfully saves or another creature intervenes."
      },
      {
        "title": "Garlic Smell Disadvantage",
        "rules": "Any creature within 30 feet of a painted egg suffers disadvantage on Stealth checks while in that area. The smell persists for as long as the egg remains painted and is not removed or covered by another odor."
      }
    ],
    "levelRequirementReason": "This paint requires no special skill to use, making it accessible to players of any level.",
    "vendorReason": "Yoshi Clans is known for its humorous and whimsical products, including this playful Wario Egg Paint.",
    "shippingDetail": "Delivered by friendly Yoshi messengers who ensure the paint is applied correctly upon arrival.",
    "usage": {
      "activation": "Apply to an egg as a bonus action.",
      "duration": "Instantaneous, lasts until the creature saves or intervenes.",
      "endsWhen": "The effect ends when the painted egg is uncovered or another creature successfully saves against it.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This paint offers a unique and humorous utility without being overpowered, making it a fair value for players.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-23T20:42:40.449849+00:00",
    "aiReviewedAt": "2026-07-23T20:42:40.449849+00:00",
    "aiReviewVersion": 1
  },
  "yoshi_clans_wario_egg_pet": {
    "id": "yoshi_clans_wario_egg_pet",
    "name": "Yoshi Clans Wario Egg Pet",
    "description": "The Yoshi Clans Wario Egg Pet is a small, intricately crafted egg that resembles a classic Wario figurine. When it hatches into its tiny form, it brings both joy and annoyance to those nearby. The hatchling offers an advantage on Charisma checks when dealing with fellow fans of the mischievous plumber, but also provides moments of distraction—whispering 'Wah!' at random intervals, which can disrupt concentration. Be wary; this figurine is breakable and would likely sue for damages if mishandled.",
    "category": "equipment",
    "price": 650,
    "icon": "🥚",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Hatches into Tiny Wario",
      "Annoying Whispers"
    ],
    "vendor": "yoshi_clans",
    "shippedBy": "Egg Drop Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hatches into Tiny Wario",
        "rules": "When activated, this egg hatches into a tiny Wario figurine. The figurine can be used to gain advantage on Charisma checks when dealing with individuals who are fans of the character."
      },
      {
        "title": "Annoying Whispers",
        "rules": "The tiny Wario figurine occasionally whispers 'Wah!' at random times, providing disadvantage on Concentration checks for listeners within 5 feet. The effect ends if the figurine is removed from the area or destroyed."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners and those new to the world of Wario.",
    "vendorReason": "Yoshi Clans specializes in themed merchandise, including fan favorites like tiny Wario.",
    "shippingDetail": "Delivered by Egg Drop Express; eggs are typically delivered within a week of purchase.",
    "usage": {
      "activation": "Instantaneous action to activate and hatch the egg.",
      "duration": "Until destroyed or removed from an area.",
      "endsWhen": "The figurine is destroyed, removed from the area, or its effect is interrupted by specific actions.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price reflects the unique and thematic charm of this Wario-themed item.",
    "priceOriginal": 4600,
    "priceReviewedAt": "2026-07-23T20:42:50.247187+00:00",
    "aiReviewedAt": "2026-07-23T20:42:50.247187+00:00",
    "aiReviewVersion": 1
  },
  "yoshi_cookie": {
    "id": "yoshi_cookie",
    "name": "Yoshi Cookie",
    "description": "The Yoshi Cookie is a checkered pastry, its surface flecked with vibrant red and green. This treat from Toad Town Market is no ordinary cookie—it's said to be crafted by the very hands of Princess Peach herself. The moment you take your first bite, the sweet aroma of freshly baked cookies fills the air, and your stomach immediately feels as if it’s been recharged with a burst of energy. A true delicacy that not only satisfies your hunger but also grants you an unexpected influx of coins to spend at Toad Town Market.",
    "category": "consumables",
    "price": 100,
    "icon": "🍪",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Gain Coins",
      "Cures 'Hungry' Condition"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Cookie Jar Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Coin Granting",
        "rules": "Upon consuming the cookie, you gain 10 coins. This effect is a one-time use and cannot be repeated."
      },
      {
        "title": "Feast of Satiety",
        "rules": "The cookie immediately cures your 'Hungry' condition, providing instant nourishment that lasts until the end of your next short or long rest."
      }
    ],
    "levelRequirementReason": "Suitable for all adventurers regardless of level.",
    "vendorReason": "Toad Town Market is known for its unique and magical goods, making the Yoshi Cookie a fitting addition to their inventory.",
    "shippingDetail": "Shipped directly from Toad Town, ensuring freshness within an hour of purchase.",
    "usage": {
      "activation": "Instantaneous consumption",
      "duration": "Until end of next short or long rest",
      "endsWhen": "At the conclusion of your next rest period",
      "charges": "Unlimited; can be consumed multiple times"
    },
    "priceReason": "The cookie's rarity and the magical properties it bestows justify its fair value.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T20:43:01.857012+00:00",
    "aiReviewedAt": "2026-07-23T20:43:01.857012+00:00",
    "aiReviewVersion": 1
  },
  "yoshi_egg_surprise": {
    "id": "yoshi_egg_surprise",
    "name": "Yoshi Egg Surprise",
    "description": "This vibrant Yoshi Egg Surprise is a whimsical mystery! Crack it open to reveal one of three distinct Yoshs—Red, Blue, or Yellow. Each has unique abilities: Red breathes flames for 1d6 fire damage (save DC 12), Blue can swim and glide with water wings for up to 1 minute, while Yellow can ground pound, dealing 1d8 bludgeoning damage plus 1 fire. Feeding it five or more berries grants you a ride, allowing one passenger to travel at 40 feet per round until the egg vanishes after 24 hours, leaving behind 1d10 Yoshi eggs.",
    "category": "consumables",
    "price": 650,
    "icon": "🐣",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Yoshi Companion",
      "Random Color Egg"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Egg Carton Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Yoshi Companion",
        "rules": "The egg follows you for a day before vanishing. If fed five or more berries, it grants you a ride (carries one passenger at 40 feet per round) until the egg expires."
      },
      {
        "title": "Random Color Egg",
        "rules": "Cracking open this egg reveals one of three Yoshs: Red with fire breath, Blue with water wings, or Yellow with ground pound. Each has a unique ability that lasts for their duration."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners who want to experience the fun of Yoshi without the complexity.",
    "vendorReason": "Toad Town Market sells a variety of whimsical and fun items that appeal to adventurers and novices alike.",
    "shippingDetail": "Ships via Egg Carton Express, known for its reliable delivery service. Eggs are delivered within one day of purchase.",
    "usage": {
      "activation": "Cracking the egg open to reveal a Yosh.",
      "duration": "Instantaneous reveal; 24 hours until the Yosh vanishes or the ride ends.",
      "endsWhen": "The egg vanishes, passenger disembarks, or the egg is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "A reasonable price for a fun and unique experience that enhances a player's journey without overburdening their resources.",
    "priceOriginal": 13000,
    "priceReviewedAt": "2026-07-23T20:42:53.128340+00:00",
    "aiReviewedAt": "2026-07-23T20:42:53.128340+00:00",
    "aiReviewVersion": 1
  },
  "yoshi_egg_whistle": {
    "id": "yoshi_egg_whistle",
    "name": "Yoshi Egg Whistle",
    "description": "The Yoshi Egg Whistle is a meticulously carved, jade-green egg that exudes the earthy scent of the Mushroom Kingdom. When blown, it emits a trilling call that summons a friendly Yoshi, whose soft, vibrant feathers shimmer in the sunlight. The egg's origins lie with the ancient shamans who crafted these totems for their children, ensuring they could explore safely on their beloved mounts. Each whistle can summon a Yoshi for an hour, allowing riders to enjoy a joyride through lush meadows and treacherous cliffs.",
    "category": "consumables",
    "price": 3100,
    "icon": "🥚",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Mount Summon",
      "Tongue Lash"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Nest Basket",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mount Summon",
        "rules": "As a bonus action, the user can blow into the whistle to summon a friendly Yoshi for up to one hour. The Yoshi appears in an unoccupied space within 30 feet and is under the rider's control until dismissed or until the whistle runs out of uses."
      },
      {
        "title": "Tongue Lash",
        "rules": "The Yoshi can use its tongue to pull creatures up to 15 feet away. This ability has a reach of 10 feet and deals no damage, but it can be used as an attack action when the Yoshi is within 30 feet of an enemy."
      }
    ],
    "levelRequirementReason": "The whistle's activation requires minimal dexterity, making it accessible to all adventurers.",
    "vendorReason": "Shamans at the hut have a deep connection with the land and animals of the Mushroom Kingdom, including Yoshs.",
    "shippingDetail": "The Nest Basket ensures safe delivery by cushioning the whistle in soft straw to prevent damage during transit.",
    "usage": {
      "activation": "Bonus action (summon), Reaction (tongue lash)",
      "duration": "One hour (summon), Instantaneous (tongue lash)",
      "endsWhen": "Whistle runs out of uses, Yoshi dismissed",
      "charges": "Uses (recharges after a long rest)"
    },
    "priceReason": "The whistle's rarity and the magical properties required for its creation justify this price.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-23T20:43:09.246379+00:00",
    "aiReviewedAt": "2026-07-23T20:43:09.246379+00:00",
    "aiReviewVersion": 1
  },
  "yoshi_saddle": {
    "id": "yoshi_saddle",
    "name": "Yoshi Saddle",
    "description": "The Yoshi Saddle, crafted from the resilient bark of the Enchanted Oak and adorned with emerald detailing, allows you to ride on the back of a friendly Yoshi. With this saddle, you gain +10 feet in movement speed and the ability to double your jump height, granting you extra leaps that can be the difference between victory and defeat. A pull attack using the power of the tongue sends enemies flying 15 feet, making it a formidable weapon on the battlefield.",
    "category": "equipment",
    "price": 3100,
    "icon": "🦕",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Mount Yoshi",
      "Yoshi Tongue Pull"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Swift Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mount Yoshi",
        "rules": "When you mount your friendly Yoshi with this saddle, you gain a +10 foot bonus to your speed and the ability to jump twice as high. This effect lasts until you dismount or fall from the saddle."
      },
      {
        "title": "Yoshi Tongue Pull",
        "rules": "As an action, you can use the power of the Yoshi's tongue to pull a creature within 15 feet up to 15 feet closer to you. The pulled creature must succeed on a DC 13 Strength saving throw or be knocked prone."
      }
    ],
    "levelRequirementReason": "The saddle is designed for beginners, allowing players of any level to experience the thrill of riding a Yoshi.",
    "vendorReason": "Shamans are known for their connection with nature and often have friendly Yoshs available for those who wish to explore on two legs.",
    "shippingDetail": "The saddle is delivered within three days, ensuring that adventurers can hit the road as soon as they receive it.",
    "usage": {
      "activation": "Action or Reaction (to mount or use tongue pull)",
      "duration": "Instantaneous and duration lasts until dismounted or the action ends",
      "endsWhen": "Dismounting, falling from the saddle, or using a reaction to end the effect",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The saddle is priced at 1000 XP due to its unique enchantments and the materials used in its construction.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T20:43:35.403562+00:00",
    "aiReviewedAt": "2026-07-23T20:43:35.403562+00:00",
    "aiReviewVersion": 1
  },
  "zap_tap_badge": {
    "id": "zap_tap_badge",
    "name": "Zap Tap Badge",
    "description": "The Zap Tap Badge hums with raw, crackling electricity, its surface a glossy, black enamel that seems to pulse with each heartbeat. This badge electrifies your skin, turning every touch into a lightning strike. Enemies who make contact are struck by a surge of 1d6 Lightning damage, and the badge bestows resistance against being Grappled or Pinched. The badge’s power is as unpredictable as it is potent, making even the most seasoned warriors wary of its wearer.",
    "category": "equipment",
    "price": 3100,
    "icon": "⚡",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Electrifies Touches",
      "Grapple Resistance"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Insulated Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Electrified Touch",
        "rules": "When an enemy touches you while wearing this badge, they take 1d6 Lightning damage. This effect triggers on contact and has a range of touch."
      },
      {
        "title": "Grapple Resistance",
        "rules": "While wearing the Zap Tap Badge, you have advantage on saving throws against being Grappled or Pinched. This benefit lasts for the duration of one short rest."
      }
    ],
    "levelRequirementReason": "The badge’s power is accessible to even the most novice adventurers who might need its protection.",
    "vendorReason": "Shamans at the Hut are well-versed in harnessing natural and arcane energies, making them the perfect vendors for such a powerful and unique item.",
    "shippingDetail": "The badge is shipped in an insulated box to ensure it arrives in pristine condition, free from any accidental discharge during transit.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Until the wearer takes a short rest",
      "endsWhen": "At the start of your next short or long rest",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as an uncommon item, the Zap Tap Badge provides significant utility and protection for a price that reflects its rarity and power.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-24T23:49:29.432729+00:00",
    "aiReviewedAt": "2026-07-24T23:49:29.432729+00:00",
    "aiReviewVersion": 1
  },
  "zebrabwe_desert_conquest_force": {
    "id": "zebrabwe_desert_conquest_force",
    "name": "Zebrabwe Desert Conquest Force (Light Cavalry)",
    "description": "The Zebrabwe Desert Conquest Force, a legendary cavalry forged in the arid sands of the Zebrabwe Plains, is a 100-strong unit whose hooves are as light and swift as desert winds. Crafted from the bones of ancient zebras and the strength of their enduring spirit, these riders harness the very essence of the desert to ensure their victory. The cavalry's morale is tightly bound to the health of the local ecosystem; if the dunes suffer, so too do they. Only the Zebrabwe Plains Traders can supply this unique force, as it embodies the very heart of their domain.",
    "price": 51000,
    "icon": "🐎",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Eco-Tied Morale",
      "Swift Hooves"
    ],
    "vendor": "zebrabwe_plains_trader",
    "shippedBy": "Mass Summons",
    "levelRequirement": 14,
    "factionBonus": {
      "military": 60
    },
    "effectDetails": [
      {
        "title": "Eco-Tied Morale",
        "rules": "The cavalry's morale is tied directly to the health and vitality of the desert ecosystem. If the average desert plant life drops below 60%, they suffer a -2 penalty to all attack rolls, saving throws, and ability checks for 1 hour."
      },
      {
        "title": "Swift Hooves",
        "rules": "The Zebrabwe Desert Conquest Force moves with such speed that it can bypass certain terrain without penalty. This allows them to traverse the desert at a rate of up to 30 miles per day, providing an advantage in surprise attacks and rapid maneuvers."
      }
    ],
    "levelRequirementReason": "The unit's complex training and deep connection with their environment make it suitable only for experienced adventurers.",
    "vendorReason": "As the keepers of the desert, they are entrusted to supply this unique cavalry force.",
    "shippingDetail": "The Zebrabwe Desert Conquest Force is summoned directly from the plains; delivery time varies based on local ecosystem health and can range from a few hours to several days.",
    "usage": {
      "activation": "Instantaneous activation upon arrival, with no additional action required for each unit.",
      "duration": "Permanent until dismissed or disbanded by its commander.",
      "endsWhen": "The cavalry is dismissed, disbanded, or the ecosystem's health falls below 60%, whichever comes first.",
      "charges": "Unlimited; re-summons at the commander's will."
    },
    "priceReason": "Balanced to reflect the unique training and environmental connection required for this legendary cavalry force.",
    "priceOriginal": 300000,
    "priceReviewedAt": "2026-07-23T20:43:31.944044+00:00",
    "aiReviewedAt": "2026-07-23T20:43:31.944044+00:00",
    "aiReviewVersion": 1
  },
  "zebrabwe_environmental_conversion": {
    "id": "zebrabwe_environmental_conversion",
    "name": "Zebrabwe Environmental Conversion (Savannah)",
    "description": "The Zebrabwe Environmental Conversion (Savannah) is a ritual tool crafted from the bones and fur of zebras found in ancient savannas. This artifact can transform up to five square miles of inhospitable terrain into vibrant, prime Savannah grasslands within a week. Once converted, the land supports lush vegetation and attracts wildlife, making it ideal for herds seeking new grazing grounds or adventurers looking to establish strongholds far from their usual territories.",
    "price": 51000,
    "icon": "🌳",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Biome Transformation",
      "Wildlife Attraction"
    ],
    "vendor": "zebrabwe_plains_trader",
    "shippedBy": "Ritual Team",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Biome Transformation",
        "rules": "This ritual requires one week of uninterrupted use and transforms up to five square miles of designated hostile terrain into temperate Savannah. The area gains prime grazing land, but the ritual does not affect underground features or creatures already present."
      },
      {
        "title": "Wildlife Attraction",
        "rules": "For 30 days after the transformation, any animal within a 1-mile radius of the converted area is drawn to it. Creatures that are hostile to the caster must make a DC 15 Wisdom saving throw or be charmed until the end of their next turn."
      }
    ],
    "levelRequirementReason": "This ritual requires significant magical energy and precision, making an 8th-level spellcaster capable of performing it.",
    "vendorReason": "Zebrabwe's Plains Trader specializes in natural artifacts that enhance the land and its inhabitants, making this conversion tool a staple of their inventory.",
    "shippingDetail": "The Ritual Team ensures proper handling to maintain the integrity of the magical components during transportation.",
    "usage": {
      "activation": "An hour-long daily ritual activation is required for one week, with no other action needed once initiated.",
      "duration": "One week, with effects lasting an additional 30 days post-transformation.",
      "endsWhen": "The transformation ends if the caster dies or abandons the ritual prematurely.",
      "charges": "Unlimited charges"
    },
    "priceReason": "Balanced as a powerful but not game-breaking tool, this item requires a significant investment of XP to reflect its rarity and utility.",
    "priceOriginal": 400000,
    "priceReviewedAt": "2026-07-23T20:43:24.139149+00:00",
    "aiReviewedAt": "2026-07-23T20:43:24.139149+00:00",
    "aiReviewVersion": 1
  },
  "zebrabwe_grass_fed_yogurt_recipe": {
    "id": "zebrabwe_grass_fed_yogurt_recipe",
    "name": "Recipe: Zebrabwe Grass-Fed Yogurt",
    "description": "The recipe for Zebrabwe Grass-Fed Yogurt is a cherished tradition among the Zebra Herders. Made from the milk of savanna grass-eaters, this creamy yogurt not only strengthens your body but also enhances your bond with fellow travelers. Consuming it overnight in a jar crafted by the Zebra Herders teaches you the ancient art of yogurt culture. This elixir boosts your Athletics checks for 4 hours and cements the unity within your group during shared savanna meals.",
    "price": 650,
    "icon": "🥛",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Cultured Milk Mastery",
      "Herd Unity"
    ],
    "vendor": "zebrabwe_savanna",
    "shippedBy": "Milky Mane Manual",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cultured Milk Mastery",
        "rules": "Activates upon consuming the yogurt overnight. You gain +1 to all Athletics checks made as a bonus action for the next 4 hours, provided you have consumed the yogurt within the last 24 hours."
      },
      {
        "title": "Herd Unity",
        "rules": "Once per long rest, you can share a jar of Zebrabwe Grass-Fed Yogurt with one ally. Both gain the benefits of Cultured Milk Mastery for the next hour."
      }
    ],
    "levelRequirementReason": "This recipe is accessible to all travelers who wish to learn and appreciate the traditions of the savanna.",
    "vendorReason": "The Zebra Herders are the custodians of this ancient practice, preserving its essence for those seeking to understand the savanna's gifts.",
    "shippingDetail": "Delivered fresh from the herd, typically within a week.",
    "usage": {
      "activation": "Consuming the yogurt overnight teaches you the recipe.",
      "duration": "Cultured Milk Mastery lasts for 4 hours; sharing with an ally once per long rest provides temporary benefits to both participants.",
      "endsWhen": "After 4 hours or when shared, duration ends.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This recipe is priced at a fair value considering the unique cultural and physical benefits it offers to adventurers.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T20:43:41.534321+00:00",
    "aiReviewedAt": "2026-07-23T20:43:41.534321+00:00",
    "aiReviewVersion": 1
  },
  "zebrabwe_great_migration_pass": {
    "id": "zebrabwe_great_migration_pass",
    "name": "Zebrabwe Great Migration Pass",
    "description": "The Zebrabwe Great Migration Pass is a shimmering, woven token made from the finest fibers of zebras and adorned with sacred symbols. This pass ensures safe passage through the plains during the massive annual migration, guaranteeing you will not be swept away by stampedes or beset upon by predators. Crafted by the Zebrawwes themselves to honor the ancient traditions of the Great Migration, it allows one week of unimpeded travel across treacherous terrain.",
    "price": 8000,
    "icon": "🎫",
    "stock": 4,
    "rarity": "epic",
    "effects": [
      "Safe Passage",
      "Predator and Stampede Protection"
    ],
    "vendor": "zebrabwe_plains_trader",
    "shippedBy": "Ceremonial Cloth Couriers",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Safe Passage",
        "rules": "This pass grants you guaranteed safe passage through the plains during the Great Migration. You are immune to stampedes and predator attacks for one week, from the moment you activate it until its duration ends."
      },
      {
        "title": "Predator and Stampede Protection",
        "rules": "While this effect is active, no stampedes or predator attacks will affect you. The pass offers a +2 bonus to Dexterity saving throws against such threats, and lasts for 1 week from activation."
      }
    ],
    "levelRequirementReason": "The ritual required to craft the Zebrabwe Great Migration Pass is intricate and difficult, requiring at least 6th level proficiency in Arcana or Nature.",
    "vendorReason": "Only those who honor the Zebrawwes' sacred traditions are trusted with such a pass by the Zebrabwe Plains Traders.",
    "shippingDetail": "The pass is delivered via swift, ceremonial couriers who ensure its safe arrival at your doorstep within three days of purchase.",
    "usage": {
      "activation": "Activating the pass requires a successful DC 15 Arcana check or Nature check to properly invoke its power.",
      "duration": "One week from activation",
      "endsWhen": "The pass is destroyed, exhausted after one use, or at the end of its duration.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the intricate crafting process and the Zebrawwes' respect for those who honor their ancient traditions.",
    "priceOriginal": 100000,
    "priceReviewedAt": "2026-07-23T20:44:29.634054+00:00",
    "aiReviewedAt": "2026-07-23T20:44:29.634054+00:00",
    "aiReviewVersion": 1
  },
  "zebrabwe_herbal_antivenom": {
    "id": "zebrabwe_herbal_antivenom",
    "name": "Zebrabwe Great Herd Antivenom",
    "description": "The Zebrabwe Great Herd Antivenom is a potent green herbal serum housed in a clay vial. Crafted from the rarest plants found within the Zebrabwe Plains, it offers unparalleled protection against even the most lethal venomous bites and stings. Each vial can be used to neutralize one dose of non-magical poison or venom with an immediate CON saving throw DC 18, and upon success, it also heals 4d6 points of damage caused by such toxins.",
    "price": 8000,
    "icon": "🧪",
    "stock": 6,
    "rarity": "epic",
    "effects": [
      "Neutralizes Venom",
      "Heals Venomous Damage"
    ],
    "vendor": "zebrabwe_plains_trader",
    "shippedBy": "Swift Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Neutralizes Venom",
        "rules": "When activated as an action, this serum instantly neutralizes a single dose of non-magical poison or venom. The target must succeed on a CON saving throw (DC 18) to avoid the effect; otherwise, they are immune to that specific type of poison/venom for 24 hours."
      },
      {
        "title": "Heals Venomous Damage",
        "rules": "Upon neutralizing venom and succeeding on the saving throw, the user also heals 4d6 points of damage caused by the venom. This effect is limited to once per day."
      }
    ],
    "levelRequirementReason": "This antivenom is accessible to all adventurers to ensure immediate protection against deadly toxins encountered in various dangerous environments.",
    "vendorReason": "The Zebrabwe Plains Trader specializes in exotic and life-saving items found within the Zebrabwe region, making this serum a staple of their inventory.",
    "shippingDetail": "Ships via Swift Courier with expedited delivery to most major cities within one week.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after use, and the user is immune to that specific type of poison/venom for 24 hours.",
      "charges": "Unlimited; recharged daily."
    },
    "priceReason": "The balanced price reflects its rarity and effectiveness in saving lives against deadly venoms, making it a crucial item for adventurers.",
    "priceOriginal": 30000,
    "priceReviewedAt": "2026-07-23T20:43:52.474558+00:00",
    "aiReviewedAt": "2026-07-23T20:43:52.474558+00:00",
    "aiReviewVersion": 1
  },
  "zebrabwe_herbal_restoration": {
    "id": "zebrabwe_herbal_restoration",
    "name": "Zebrabwe Herbal Restoration (Major)",
    "description": "The Zebrabwe Herbal Restoration (Major) is a massive, intricately woven poultice of dried herbs and roots, meticulously crafted by the renowned healer Zebrabwe from the heart of the Zebrawe Plains. This poultice can instantly restore a grievously injured comrade to full health, banishing all diseases and poisons in one swift application. However, it must be applied to an unconscious or restrained target to ensure its efficacy, as the sheer power of the poultice demands focused concentration during use.",
    "price": 51000,
    "icon": "🌿",
    "stock": 4,
    "rarity": "legendary",
    "effects": [
      "Instantaneous Health Restoration",
      "Cures Diseases and Poisons"
    ],
    "vendor": "zebrabwe_plains_trader",
    "shippedBy": "Giant Basket Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instantaneous Health Restoration",
        "rules": "Activates on contact with an unconscious or restrained target, instantly restoring the target to full hit points. Has no effect on a conscious or free-moving target."
      },
      {
        "title": "Cures Diseases and Poisons",
        "rules": "Completely removes any diseases or poisons affecting the target. Targets must be unconscious for this effect to take place."
      }
    ],
    "levelRequirementReason": "This poultice is designed for easy access, allowing even novice healers and heroes in training to use its restorative power.",
    "vendorReason": "Zebrabwe is a trusted healer who has long been known for creating remedies that are both powerful and accessible.",
    "shippingDetail": "Ships via Giant Basket Express, arriving within the week. Due to its potency, it must be handled with care during transit.",
    "usage": {
      "activation": "Contact with an unconscious or restrained target",
      "duration": "Instantaneous effect",
      "endsWhen": "Application is complete; has no duration beyond that",
      "charges": "Unlimited uses"
    },
    "priceReason": "This poultice, while powerful, is not excessively rare or difficult to find, making it a balanced purchase for any adventurer.",
    "priceOriginal": 150000,
    "priceReviewedAt": "2026-07-23T20:44:24.893087+00:00",
    "aiReviewedAt": "2026-07-23T20:44:24.893087+00:00",
    "aiReviewVersion": 1
  },
  "zebrabwe_herbivore_call": {
    "id": "zebrabwe_herbivore_call",
    "name": "Zebrabwe Herbivore Call (Massive Herd)",
    "description": "The Zebrabwe Herbivore Call, a massive ivory whistle that glows faintly in the sunlight, is said to have been crafted from the tusks of ancient zebras. When blown, it summons an enormous migratory herd of zebras, numbering in the hundreds, to stampede across a targeted area, flattening all within its path and leaving behind trampled earth. The massive herd can be felt for miles around as it rushes by, passing through the chosen location in one hour before disappearing into the savannah. Legends speak of this item being used by the Zebrabwe Plains Trader to clear vast stretches of land with ease.",
    "price": 51000,
    "icon": "🐘",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Massive Stampede",
      "Environmental Damage"
    ],
    "vendor": "zebrabwe_plains_trader",
    "shippedBy": "Swiftwind Courier Service",
    "levelRequirement": 14,
    "factionBonus": {
      "destruction": 70
    },
    "effectDetails": [
      {
        "title": "Massive Stampede",
        "rules": "Activates as a bonus action. The summoned herd flattens one square mile of terrain and deals 10d6 trample damage to anything remaining within the area. The stampede lasts for one hour."
      },
      {
        "title": "Environmental Damage",
        "rules": "The trampled earth remains unstable for 24 hours, causing any creatures that attempt to pass through the area during this time to make a DC 15 Dexterity saving throw or fall prone. The item can only be used once per month."
      }
    ],
    "levelRequirementReason": "Requires significant control and understanding of nature magic, as summoning such a large herd safely is a complex task.",
    "vendorReason": "The Zebrabwe Plains Trader has the knowledge and connections to source and properly manage the use of this powerful item.",
    "shippingDetail": "Ships via Swiftwind Courier, ensuring safe delivery within a week.",
    "usage": {
      "activation": "Bonus action",
      "duration": "One hour",
      "endsWhen": "The stampede ends after one hour or if the user dismisses it early as an action",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1,000 XP to reflect its rarity and the risk involved in using such a powerful item.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T20:44:17.820082+00:00",
    "aiReviewedAt": "2026-07-23T20:44:17.820082+00:00",
    "aiReviewVersion": 1
  }
};
