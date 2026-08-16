// Bros Attack items — premade one-shots that also teach the technique.
//
// Balance rule (the important one): using a bros item spends THE ITEM, not
// Bros Energy. Once the technique is learned it drops to the normal economy
// — 2 energy per character, 1 spent per participant, refreshed on a very
// short rest — so items are a shortcut to KNOWING a move, never a way to
// spam one. A second copy grants a free use and nothing else.
//
// Only techniques confirmed in data/brosAttacks.json may appear here. Items
// that teach one carry `brosAttack` naming it, so the Foundry exporter can
// link item -> feat without guessing.
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_BROS = {
  "bros_item_chop_bros_kit": {
    "id": "bros_item_chop_bros_kit",
    "name": "Chop Bros Practice Kit",
    "description": "A weighted lift-harness, a blunted practice axe, and a card with four motions printed on it in order. Hjumpik and Toad Lee needed three attempts to make this work: the first failed on weight, the second nearly produced friendly fire after a countdown, and the third succeeded when they stopped counting and found a rhythm. The card teaches the third attempt.",
    "category": "bros",
    "foundryType": "consumable",
    "price": 900,
    "icon": "🪓",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "One free use of Chop Bros",
      "Counts as a logged attempt toward discovery",
      "Spends the kit, not Bros Energy"
    ],
    "vendor": "faction_quartermaster",
    "shippedBy": "Bros Logistics",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "One free use of Chop Bros",
        "rules": "Two willing participants may perform Chop Bros immediately, without either of them spending Bros Energy. The kit is consumed. Resolve the technique exactly as written in the archive: establish the lift, keep the axe clear, move by rhythm rather than a shouted countdown."
      },
      {
        "title": "The kit cannot teach the technique",
        "rules": "It buys a safe attempt, not the knowledge. A pair who do not yet know Chop Bros still have to find it the way Hjumpik and Toad Lee did — two logged failures, then a third attempt that lands, named by the people who made it work. What the kit does is let a failed attempt happen with a blunted axe and a harness instead of a real edge and a real drop, and the GM may log that attempt toward the pair's discovery. A pair who already know the technique simply get one free use."
      },
      {
        "title": "The lift is still heavy",
        "rules": "The kit does not remove the risk. The axe has a wide arc and the lift tires the carrier; a countdown can still make the swing arrive before the body is ready."
      }
    ],
    "levelRequirementReason": "Cooperative techniques need two people who can already hold a formation under pressure.",
    "vendorReason": "The quartermaster issues cooperative drill kits because two soldiers who cannot coordinate are worse than one.",
    "shippingDetail": "Packed flat with the drill card face-up so the motions are read before the fight, not during it.",
    "usage": {
      "activation": "Action, by both participants together",
      "duration": "One use, then the item is spent",
      "endsWhen": "The technique resolves, successfully or otherwise.",
      "charges": "1 use. The item is consumed, not the participants' Bros Energy."
    },
    "priceReason": "Priced as one safe attempt at something that is dangerous to attempt badly. It does not price the technique, because the technique is not for sale.",
    "brosAttack": "chop_bros_attack",
    "energyRule": "Bros Energy: each named participant spends 1 from a personal maximum of 2, refreshed after a very short rest."
  },
  "bros_item_support_fire_card": {
    "id": "bros_item_support_fire_card",
    "name": "Support Fire Instruction Sheet",
    "description": "A single printed sheet: stance, sightline, timing call, safe reset. Green T taught Remi the manoeuvre from a sheet exactly like this one, and Remi used it against a tanuki behind a barricaded bathroom door before the ink was dry. The sheet is reprinted without comment on that outcome.",
    "category": "bros",
    "foundryType": "consumable",
    "price": 750,
    "icon": "🎯",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "One free use of Support Fire",
      "Counts as a logged attempt toward discovery",
      "Spends the sheet, not Bros Energy"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Bros Logistics",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "One free use of Support Fire",
        "rules": "A shooter and a support partner may perform the Support Fire Bros Attack at once, without either spending Bros Energy. The sheet is consumed. The support partner corrects stance, sightline and timing; the shooter waits for the call rather than firing on impulse."
      },
      {
        "title": "Counts as a logged attempt toward discovery",
        "rules": "Both participants learn the technique and thereafter use it under the normal economy — Bros Energy: each named participant spends 1 from a personal maximum of 2, refreshed after a very short rest. Further sheets give a free use only."
      },
      {
        "title": "It improves the shot, not the judgement",
        "rules": "The technique makes a bad decision land as efficiently as a good one. A clearer shot does not make the target lawful, safe, or deserving of being shot. GMs should let that consequence stand."
      }
    ],
    "levelRequirementReason": "Cooperative techniques need two people who can already hold a formation under pressure.",
    "vendorReason": "Toad Town sells the reprint openly; the original was an instructional handout, not a restricted document.",
    "shippingDetail": "Packed flat with the drill card face-up so the motions are read before the fight, not during it.",
    "usage": {
      "activation": "Action, by both participants together",
      "duration": "One use, then the item is spent",
      "endsWhen": "The technique resolves, successfully or otherwise.",
      "charges": "1 use. The item is consumed, not the participants' Bros Energy."
    },
    "priceReason": "Priced as one guaranteed use and a safe reset to fail into. The manoeuvre itself is not the sheet's to sell.",
    "brosAttack": "support_fire_bros_attack",
    "energyRule": "Bros Energy: each named participant spends 1 from a personal maximum of 2, refreshed after a very short rest."
  },
  "bros_item_drill_card": {
    "id": "bros_item_drill_card",
    "name": "Blank Bros Drill Card",
    "description": "A stiff card ruled into four numbered boxes, sold blank. Partners who already know a technique use one to write their own motions down in the order that works for them, which is the only part of a Bros Attack that cannot be bought.",
    "category": "bros",
    "foundryType": "consumable",
    "price": 120,
    "icon": "📇",
    "stock": 25,
    "rarity": "uncommon",
    "effects": [
      "Rehearsal aid",
      "Teaches nothing on its own",
      "Reusable"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Bros Logistics",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rehearsal aid",
        "rules": "Before a very short rest, two partners who both know the same technique may rehearse with the card. This is a roleplay beat: it grants no bonus, no extra energy, and no additional uses."
      },
      {
        "title": "Teaches nothing on its own",
        "rules": "A blank card contains no technique. It records one the partners already have. It cannot grant a Bros Attack that is not already known."
      }
    ],
    "levelRequirementReason": "Cooperative techniques need two people who can already hold a formation under pressure.",
    "vendorReason": "Stationery, essentially. Toad Town sells it next to the ledgers.",
    "shippingDetail": "Packed flat with the drill card face-up so the motions are read before the fight, not during it.",
    "usage": {
      "activation": "During a rest",
      "duration": "Permanent record",
      "endsWhen": "The card is lost or rewritten.",
      "charges": "Reusable. Spends nothing."
    },
    "priceReason": "Priced as a single guaranteed use plus the instruction that outlives it."
  },
  "bros_item_rest_chime": {
    "id": "bros_item_rest_chime",
    "name": "Very Short Rest Chime",
    "description": "A small two-tone chime. The first note marks the start of a very short rest and the second marks the end, so a party stops arguing about whether they have actually stopped. It does not shorten the rest. It only makes the boundary of it audible.",
    "category": "bros",
    "foundryType": "consumable",
    "price": 340,
    "icon": "🔔",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Marks a very short rest clearly",
      "Does not shorten the rest",
      "Audible at range"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Bros Logistics",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Marks a very short rest clearly",
        "rules": "The chime makes it unambiguous when a very short rest begins and ends — which is when spent Bros Energy comes back. It changes no timing and grants no energy of its own."
      },
      {
        "title": "Audible at range",
        "rules": "The second note carries far enough that a scattered party hears it. Anything else nearby hears it too."
      }
    ],
    "levelRequirementReason": "Cooperative techniques need two people who can already hold a formation under pressure.",
    "vendorReason": "The Shaman's Hut deals in objects that mark thresholds, and a rest is a threshold.",
    "shippingDetail": "Packed flat with the drill card face-up so the motions are read before the fight, not during it.",
    "usage": {
      "activation": "Rung at the start and end of a very short rest",
      "duration": "The rest",
      "endsWhen": "The second note sounds.",
      "charges": "Reusable. Spends nothing."
    },
    "priceReason": "Priced as a single guaranteed use plus the instruction that outlives it."
  }
};
