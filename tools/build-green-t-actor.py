#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Build the Green T playable Foundry VTT actor sheet.

Green T returns to play this session (his comeback runs from the mirror-dimension
disappearance at the Siege of Raventree Manor through the Shadow Estate dinner to
the Scorncrow grove). This generator is the source of truth for

    Reputation-Matrix2/tools/item sheet examples/fvtt-Actor-green-t-level-6-giant-player.json

Per docs and `tools/item sheet examples/README.md` 3.2, the envelope is taken from an
existing validated export and only the character-specific fields are replaced.
Every img path is checked against `image paths.txt` before the file is written.

Run:  python3 tools/build-green-t-actor.py [--check]
"""
import json, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EX = ROOT / "Reputation-Matrix2" / "tools" / "item sheet examples"
TEMPLATE = EX / "fvtt-Actor-toad-lee-level-4-warden-player.json"
OUT = EX / "fvtt-Actor-green-t-level-6-giant-player.json"
IMAGE_LIB = EX / "image paths.txt"

CHARACTER_ID = "green_t"
LEVEL = 6
PROF = 3

ACTOR_IMG = "icons/creatures/amphibians/treefrog-leaf-green.webp"
TOKEN_IMG = "icons/creatures/amphibians/treefrog-leaf-green.webp"

ABILITIES = {"str": 17, "dex": 12, "con": 16, "int": 14, "wis": 15, "cha": 16}
SKILL_PROF = {"ath": 1, "dec": 1, "ins": 1, "prc": 1, "per": 1, "ste": 1}
SAVE_PROF = ["str", "con"]
HP = 52
AC = 14
GP = 240

BIOGRAPHY = (
    "<h2>Green T — The Giant from the Children's Table</h2>"
    "<p><strong>Level 6; Toad (transformation capabilities); independent, formerly of the"
    " Tea Leaf Syndicate.</strong> A tea merchant who ran a criminal empire with the manners"
    " of a garden-party host, and who has never once raised his voice to do it.</p>"
    "<h3>The comeback</h3>"
    "<p>Green T was lost at the Siege of Raventree Manor when a glass entity took hold of him"
    " and pulled him bodily through a mirror. Witnesses agree on the detail that matters: one"
    " moment he was there with his feet on solid ground, the next the surface rippled and went"
    " still and reflected an empty hallway. He was filed as a casualty.</p>"
    "<p>He came back through the Shadowfell. The route is not established and he has not been"
    " forthcoming about it; the working reading is that the mirror dimension is a transit layer"
    " between planes rather than a grave. He reappeared at the Shadow Estate dinner intact and"
    " ready to cause problems, was seated at the children's table as a deliberate insult, used"
    " the insult as cover to map the room, and shot Orangus Cornelius with a silver bullet in"
    " front of every vampire lord present.</p>"
    "<p>Since then: custodian of the repaired Mirror of True Reflection under a bargain in which"
    " Wario expects to claim it once Scarecrow is dealt with, and a giant observation tower in"
    " the grove beyond Tymnas's cottage, where he lifted Remi to his shoulder to spot the"
    " Scorncrow and learned in public that the giant form spends the body that holds it.</p>"
    "<h3>How he plays</h3>"
    "<p>Green T treats a fight as a problem of angles, visibility, and how long a body can hold"
    " a shape before the shape starts spending the body back. He is patient to the point that"
    " people mistake it for harmlessness, which is the whole method. The giant form is a"
    " resource with a cost curve, not a win condition — at the grove the bats swarmed his face"
    " until his scale became a disadvantage, more target and not more clarity.</p>"
    "<p><em>Being underestimated is a weapon. He has never corrected anyone who was wrong about"
    " him in a useful direction.</em></p>"
)

# ---------------------------------------------------------------- items

def base(name, itype, img, desc, **system):
    s = {
        "description": {"value": desc, "chat": ""},
        "source": {"custom": "Waluipedia campaign", "rules": "2014", "revision": 1},
        "identifier": name.lower().replace(" ", "-").replace("—", "-").replace("'", ""),
        "quantity": 1, "weight": 0,
        "price": {"value": 0, "denomination": "gp"},
        "equipped": False, "proficient": True, "properties": [],
    }
    s.update(system)
    return {"name": name, "type": itype, "img": img, "system": s,
            "flags": {"bik": {"source": "Green T player-character dossier",
                              "ledgerLinked": True}},
            "effects": [], "folder": None, "ownership": {"default": 0}}


def build_items():
    I = []
    I.append(base(
        "Tea Merchant — Giant-Blooded, Level 6", "class",
        "icons/consumables/drinks/tea-jug-gourd-brown.webp",
        "<p>Green T's build is a martial/social hybrid the campaign has no published class for."
        " Hit Die d10. Runs on three pillars: the giant form, the concealed firearm, and a"
        " calm that reads as harmlessness. Proficiency bonus +3.</p>",
        levels=LEVEL, hd={"spent": 0, "denomination": "d10", "additional": ""},
        spellcasting={"progression": "none", "ability": ""},
        primaryAbility={"value": ["str", "cha"], "all": False}))

    I.append(base(
        "Toad — Giant-Blooded", "race",
        "icons/creatures/amphibians/treefrog-leaf-green.webp",
        "<p>Outwardly an ordinary Toad, which is the point. Carries a latent capacity for"
        " enormous physical growth that nobody suspected across an entire criminal career.</p>"))

    I.append(base(
        "Syndicate Host", "background",
        "icons/skills/social/diplomacy-handshake.webp",
        "<p>You ran an organisation where threats were delivered politely and the tea was"
        " genuinely excellent. Proficiencies: Deception and Insight; surviving Tea Leaf"
        " Syndicate contacts; you know how a room is seated and why.</p>"))

    feats = [
        ("Giant Form",
         "icons/creatures/magical/humanoid-giant-forest-blue.webp",
         "<p><strong>Bonus Action; 2/Long Rest; up to 10 minutes.</strong> Your size becomes"
         " Huge or larger. Gain +4 Strength for the duration, your reach increases by 10 feet,"
         " your melee attacks deal an extra 1d8 bludgeoning, and you can attempt to shake"
         " terrain within 30 feet (DC 14 Dexterity save or prone). You count as difficult"
         " terrain for enemies who try to pass you.</p>"
         "<p><strong>The cost curve.</strong> Each round after the third, take 1d6 unavoidable"
         " exhaustion-track damage and make a DC 12 Constitution save; on a failure the form"
         " ends. Being Huge is also being a larger target — attacks against you from Small or"
         " smaller swarms have advantage. Established at the Syndicate Showdown and paid for"
         " publicly in the Scorncrow grove.</p>"),
        ("Observation Tower",
         "icons/tools/navigation/spyglass-telescope-brass.webp",
         "<p>While in Giant Form you may lift a willing ally to your shoulder as part of your"
         " movement. They gain a 30-foot vantage, advantage on Perception checks to spot at"
         " range, and cover from ground-level attacks. Used at the grove to lift Remi to spot"
         " the Scorncrow.</p>"),
        ("The Children's Table",
         "icons/skills/social/diplomacy-handshake.webp",
         "<p>When an enemy has dismissed, demoted, or underestimated you in a social scene,"
         " your first attack against them in the following combat has advantage and scores a"
         " critical on 19–20. You may also make one Perception or Investigation check to map"
         " a room while apparently doing nothing. Orangus Cornelius seated him with the"
         " children and did not survive the decision.</p>"),
        ("Unhurried",
         "icons/skills/social/diplomacy-handshake.webp",
         "<p>Advantage on saves against being frightened or goaded, and on Deception checks to"
         " appear harmless, unarmed, or uninterested. He has never once raised his voice to"
         " make a threat land.</p>"),
        ("Problem of Angles",
         "icons/tools/navigation/spyglass-telescope-brass.webp",
         "<p>Once per turn, if you have not moved this turn, add +1d6 to a ranged attack's"
         " damage against a target you can see clearly. He remembers a fight as sightlines"
         " and timing, not as a sequence of blows.</p>"),
        ("Settle the Account",
         "icons/magic/life/cross-beam-green.webp",
         "<p>Reaction, 1/short rest. When an ally within 30 feet is reduced to 0 hit points,"
         " you may move up to your speed toward them without provoking opportunity attacks and"
         " make one attack against the creature responsible. Everything gets settled; nothing"
         " is left ragged.</p>"),
    ]
    for n, img, d in feats:
        I.append(base(n, "feat", img, d))

    I.append(base(
        "The Dinner Party Revolver", "weapon",
        "icons/weapons/guns/gun-pistol-flintlock-metal.webp",
        "<p>A concealable firearm Green T has repeatedly smuggled into rooms where weapons were"
        " categorically not permitted. How remains unexplained and he declines to explain it.</p>"
        "<p><strong>Ranged Weapon Attack:</strong> Dexterity, range 40/120, 1d10 piercing,"
        " loading, reload 1. Loaded with silver by default.</p>",
        img_override=None, quantity=1,
        weight={"value": 3, "units": "lb"},
        price={"value": 150, "denomination": "gp"},
        equipped=True, rarity="", identified=True,
        range={"value": 40, "long": 120, "units": "ft", "reach": None},
        damage={"base": {"number": 1, "denomination": 10, "bonus": "",
                         "types": ["piercing"],
                         "custom": {"enabled": False, "formula": ""},
                         "scaling": {"mode": "", "number": None, "formula": ""}}},
        properties=["amm", "lod"],
        type={"value": "martialR", "baseItem": ""}))

    I.append(base(
        "Silver Bullets", "consumable",
        "icons/commodities/metal/ingot-stack-teal.webp",
        "<p>Ammunition for the revolver. Silver overcomes the resistances of vampires,"
        " lycanthropes, and several things at the Shadow Estate that assumed they were safe."
        " One of these ended Orangus Cornelius's evening.</p>",
        quantity=12, price={"value": 5, "denomination": "gp"},
        type={"value": "ammo", "subtype": ""}))

    I.append(base(
        "Mirror of True Reflection (custody)", "equipment",
        "icons/sundries/survival/mirror-plain.webp",
        "<p><strong>Held in custody, not owned.</strong> One of the four portal artifacts,"
        " broken in a ghost's bedroom and mended by Remi Akamatsu casting Mending. Green T"
        " requested the components, Markop supplied the base, Remi supplied the fragment.</p>"
        "<p>Wario attempted immediate theft and was stopped by Markop. Under the resulting"
        " bargain Wario helps with Scarecrow and expects the mirror afterward. <em>GM note:"
        " this is an open obligation, not settled property — it should cost him something.</em></p>",
        equipped=True, rarity="rare", identified=True,
        weight={"value": 6, "units": "lb"},
        price={"value": 0, "denomination": "gp"}))

    I.append(base(
        "Merchant's Coat", "equipment",
        "icons/equipment/chest/breastplate-banded-leather-brown.webp",
        "<p>Tasteful, well cut, quietly reinforced, and possessed of more pockets than its"
        " silhouette can account for. AC 12 + Dexterity modifier.</p>",
        equipped=True, identified=True,
        armor={"value": 12, "dex": None},
        weight={"value": 8, "units": "lb"},
        price={"value": 45, "denomination": "gp"},
        type={"value": "light", "baseItem": "leather"}))

    I.append(base(
        "Tea Service, Travelling", "consumable",
        "icons/consumables/drinks/tea-jug-gourd-brown.webp",
        "<p>Genuinely excellent tea and the equipment to serve it properly. Used to open"
        " negotiations, stall for time, and establish that the person pouring is not in a"
        " hurry. During a short rest, one ally who drinks gains advantage on their next"
        " Charisma check.</p>",
        quantity=1, price={"value": 25, "denomination": "gp"}))

    for i, it in enumerate(I):
        it["sort"] = i * 10000
        it["_id"] = f"grnt{i:02d}" + "0" * 10
        it["system"].pop("img_override", None)
    return I


def build():
    actor = json.loads(TEMPLATE.read_text(encoding="utf-8"))
    actor["name"] = "Green T — Level 6 Giant-Blooded Player"
    actor["img"] = ACTOR_IMG
    actor["folder"] = None
    actor["effects"] = []

    sysd = actor["system"]
    for k, v in ABILITIES.items():
        sysd["abilities"][k]["value"] = v
        sysd["abilities"][k]["proficient"] = 1 if k in SAVE_PROF else 0
    for k in sysd["skills"]:
        sysd["skills"][k]["value"] = SKILL_PROF.get(k, 0)

    at = sysd["attributes"]
    at["hp"].update({"value": HP, "max": HP, "temp": 0, "tempmax": 0})
    at["ac"] = {"flat": AC, "calc": "default", "formula": ""}
    at["movement"].update({"walk": "30", "climb": "0", "fly": "0", "swim": "20"})
    at["senses"] = {"units": "ft", "special": "Mirror-transited; unusually hard to surprise in a seated room.",
                    "ranges": {"darkvision": 60, "blindsight": 0, "tremorsense": 0, "truesight": 0}}
    sysd["currency"] = {"pp": 0, "gp": GP, "ep": 0, "sp": 0, "cp": 0}

    det = sysd["details"]
    det.update({
        "alignment": "Lawful Neutral (private code, tidy accounts, no congregation)",
        "biography": {"value": BIOGRAPHY, "public": ""},
        "originalClass": "tea-merchant-giant-blooded",
        "xp": {"value": 14000},
        "appearance": "A composed green Toad in a well-cut coat, entirely unremarkable until he is not.",
        "trait": "I am never in a hurry, and people read that as harmless.",
        "ideal": "Every account settled. Nothing left ragged.",
        "bond": "The surviving Tea Leaf Syndicate, and the mirror I agreed to hold.",
        "flaw": "I let people underestimate me for so long that I sometimes let a situation get worse to keep the advantage.",
        "race": "bb00c9339a204b51", "background": "a01588c74bc740d6",
        "eyes": "Dark, steady", "height": "Small — or Huge, at will",
        "faith": "Order of Maat in practice; he has never called it a faith",
        "hair": "None", "weight": "Variable", "gender": "Male-presenting Toad",
        "skin": "Green", "age": "Unknown",
    })

    tr = sysd["traits"]
    tr["size"] = "sm"
    tr["languages"] = {"value": ["common"],
                       "custom": "Toad dialect; Syndicate trade cant; the register of a host who is about to have someone removed.",
                       "communication": {}}
    tr["armorProf"] = {"value": ["lgt"], "custom": "Light armor."}
    tr["weaponProf"] = {"value": ["sim"], "custom": "Simple weapons; firearms."}

    tok = actor["prototypeToken"]
    tok["name"] = "Green T"
    tok["texture"].update({"src": TOKEN_IMG, "scaleX": 1, "scaleY": 1, "tint": None})
    tok["sight"] = {"enabled": True, "range": 60, "angle": 360, "visionMode": "darkvision",
                    "color": None, "attenuation": 0.1, "brightness": 0, "saturation": 0, "contrast": 0}
    tok["actorLink"] = True
    tok["width"] = 1
    tok["height"] = 1

    actor["items"] = build_items()
    actor["flags"] = {"bik": {
        "characterId": CHARACTER_ID,
        "playerCharacter": True,
        "npc": False,
        "class": "Tea Merchant (Giant-Blooded)",
        "level": LEVEL,
        "status": "Active — returning this session; holds the Mirror of True Reflection under the Wario bargain",
        "comeback": "Lost through a mirror at the Siege of Raventree Manor; returned via the Shadowfell at the Shadow Estate dinner.",
        "source": "data/characters.json + data/events.json + data/battles.json",
        "keyEvents": ["tea_party_incident", "syndicate_showdown", "siege_raventree",
                      "dinner_climax_vote", "shadow_estate_mirror_rooftop_escape",
                      "the_scorncrow_skirmish"],
        "openObligations": [
            "Wario expects the Mirror of True Reflection once Scarecrow is dealt with.",
            "The route he took back through the mirror dimension is unestablished; he will not explain it.",
        ],
        "generator": "tools/build-green-t-actor.py",
    }}
    actor["_stats"].update({
        "exportSource": "bik/green-t-player",
        "lastModifiedBy": "bikGreenT00000001",
        "compendiumSource": None, "duplicateSource": None,
    })
    return actor


def validate(actor):
    lib = {ln.strip().replace("\\", "/")
           for ln in IMAGE_LIB.read_text(encoding="utf-8", errors="replace").splitlines() if ln.strip()}
    problems = []
    imgs = [actor["img"], actor["prototypeToken"]["texture"]["src"]] + [i["img"] for i in actor["items"]]
    for p in imgs:
        if p not in lib:
            problems.append(f"img not in image paths.txt: {p}")
    ids = [i["_id"] for i in actor["items"]]
    if len(ids) != len(set(ids)):
        problems.append("duplicate item _id")
    for req in ("class", "race", "background"):
        if sum(1 for i in actor["items"] if i["type"] == req) != 1:
            problems.append(f"expected exactly one {req} item")
    if actor["flags"]["bik"]["characterId"] != CHARACTER_ID:
        problems.append("characterId mismatch")
    chars = json.loads((ROOT / "Reputation-Matrix2" / "data" / "characters.json").read_text(encoding="utf-8"))
    if not any(c.get("id") == CHARACTER_ID for c in chars):
        problems.append("green_t missing from characters.json")
    return problems


def main():
    actor = build()
    problems = validate(actor)
    if problems:
        for p in problems:
            print("FAIL", p)
        return 1
    text = json.dumps(actor, ensure_ascii=False, indent=2) + "\n"
    if "--check" in sys.argv:
        if not OUT.exists() or OUT.read_text(encoding="utf-8") != text:
            print("green t actor: filed sheet does not match the generator")
            print("  re-run: python3 tools/build-green-t-actor.py")
            return 1
        print("green t actor: sheet matches the generator.")
        return 0
    OUT.write_text(text, encoding="utf-8")
    print(f"wrote {OUT.relative_to(ROOT)}  ({len(actor['items'])} documents, level {LEVEL})")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
