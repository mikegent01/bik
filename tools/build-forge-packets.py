#!/usr/bin/env python3
"""Build Foundry NPC packets from NPC Forge rosters.

A *forge roster* (``Reputation-Matrix2/data/forge/<packet>.json``, format
``waluipedia-forge-roster/1``) is one faction's worth of NPCs written once:
the statblock (abilities, AC, hit points, traits, attacks, save actions,
multiattack, legendary actions), the GM notes, and the *look* the NPC Forge
turns into a render (``npc-forge/<packet>/renders/<id>.png``) and a cut token
plate (``portraits/<packet>/<plate>.png``). This generator turns every entry
into a dnd5e 5.3.3 NPC export under ``Reputation-Matrix2/actors/<packet>/``
the same way the era and Liberated Toads packets are built — fixed ``_id``s
from the packet and the entry id, the 955 item factories, icons from the
Foundry image library, a ``folderPath`` flag of ``[group, sub-folder]`` the
organizer and the module file by (``actors/folders.json`` ``packets.<packet>``
must name the group and every sub-folder with the roster's colours).

An entry whose plate is not cut yet still gets a sheet: it wears Foundry's
``icons/svg/mystery-man.svg`` and the flag ``waluipedia-sheets.art =
"pending"``; ``plates`` (or the Forge) cuts the plate and a rebuild swaps the
token in. Statblocks first, art when the GPU is free.

    python3 tools/build-forge-packets.py                     # build every roster
    python3 tools/build-forge-packets.py fawfuls-forces      # one packet
    python3 tools/build-forge-packets.py --check             # verify on disk (check-all)
    python3 tools/build-forge-packets.py --list              # rosters, entries, art state
    python3 tools/build-forge-packets.py plates fawfuls-forces   # cut renders → plates (Pillow + numpy)
    python3 tools/build-forge-packets.py prompts fawfuls-forces  # the render jobs as JSON (what the Forge runs)
    python3 tools/foundry-bridge.py combine Reputation-Matrix2/actors/fawfuls-forces \\
        --out Reputation-Matrix2/actors/fawfuls-forces/import.json --world fawfuls-forces

The Forge itself (``tools/npc-forge.py``) imports this module for the prompt
recipe (``prompt_for``), the plate cut (``cut_plate``) and the build.
"""

import argparse
import glob
import importlib.util
import json
import os
import re
import sys

if hasattr(sys.stdout, "reconfigure"):          # Windows consoles default to cp1252
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RM = os.path.join(ROOT, "Reputation-Matrix2")
ROSTERS = os.path.join(RM, "data", "forge")
ACTORS_ROOT = os.path.join(RM, "actors")
FORMAT = "waluipedia-forge-roster/1"
MODULE_ID = "waluipedia-mass-import"
SHEETS_FLAG = "waluipedia-sheets"
PENDING_IMG = "icons/svg/mystery-man.svg"
FOUNDRY_ID = re.compile(r"^[A-Za-z0-9]{16}$")
SLUG = re.compile(r"^[a-z0-9]+(-[a-z0-9]+)*$")
ABILITY_KEYS = ("str", "dex", "con", "int", "wis", "cha")
SIZE_NAMES = {"tiny": "Tiny", "sm": "Small", "med": "Medium", "lg": "Large", "huge": "Huge", "grg": "Gargantuan"}


def _load_module(name, rel):
    spec = importlib.util.spec_from_file_location(name, os.path.join(ROOT, rel))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


P955 = _load_module("p955", "tools/build-peachs-castle-955-actors.py")
sid, abilities, skills, blank_roll = P955.sid, P955.abilities, P955.skills, P955.blank_roll

# The icon shelf: the 955 generator's names plus what Fawful's workshop needs.
# Every path is held to the Foundry image library at build time.
I = dict(P955.I)
I.update({
    "cog": "icons/commodities/tech/cog-brass.webp",
    "gears": "icons/commodities/tech/gear-wheels-double-steel.webp",
    "robot": "icons/commodities/tech/robotics-frame-steel-blue.webp",
    "jaw": "icons/commodities/tech/robotics-steel-jaw.webp",
    "slime": "icons/commodities/materials/slime-yellow.webp",
    "acid": "icons/magic/acid/projectile-faceted-glob.webp",
    "acid_pool": "icons/magic/acid/dissolve-pool-bubbles.webp",
    "vortex": "icons/magic/air/wind-vortex-swirl-blue-purple.webp",
    "funnel": "icons/magic/air/wind-tornado-funnel-green.webp",
    "gas": "icons/magic/air/fog-gas-smoke-dense-green.webp",
    "smoke_green": "icons/magic/air/fog-gas-smoke-green.webp",
    "hypno": "icons/magic/control/hypnosis-mesmerism-swirl.webp",
    "crown": "icons/magic/control/control-influence-crown-yellow.webp",
    "crown_item": "icons/commodities/treasure/crown-blue-gold.webp",
    "snare": "icons/magic/control/debuff-energy-snare-brown.webp",
    "net": "icons/magic/control/debuff-chains-ropes-net-red-orange.webp",
    "hold": "icons/magic/control/encase-creature-spider-hold.webp",
    "muscle": "icons/magic/control/buff-strength-muscle-damage-red.webp",
    "grin": "icons/magic/control/fear-fright-monster-grin-green.webp",
    "nuke": "icons/magic/fire/explosion-mushroom-nuke-yellow.webp",
    "boom": "icons/magic/fire/explosion-fireball-medium-orange.webp",
    "sparks": "icons/magic/lightning/bolt-strike-sparks-blue.webp",
    "zap": "icons/magic/lightning/bolt-forked-blue.webp",
    "helm_tech": "icons/equipment/head/helm-armored-tech-heavy.webp",
    "helmet_green": "icons/equipment/head/helmet-military-strapped-green.webp",
    "goggles": "icons/equipment/head/helm-goggles-leather.webp",
    "flask_green": "icons/consumables/potions/bottle-conical-fumes-green.webp",
    "flask_yellow": "icons/consumables/potions/flask-corked-yellow-glow.webp",
    "flask_red": "icons/consumables/potions/flask-corked-red-glow.webp",
    "vine": "icons/consumables/plants/thorned-curled-vine-green.webp",
    "mushroom": "icons/consumables/mushrooms/campanulate-bell-red-white.webp",
    "heart_green": "icons/magic/life/heart-cross-strong-flame-green.webp",
    "mustard": "icons/consumables/food/sausage-bratwurst-mustard-red-yellow.webp",
    "drill": "icons/skills/melee/drill-heavy-earth.webp",
    "drill_tool": "icons/tools/hand/drill-steel-brown-grey.webp",
    "cannon": "icons/skills/ranged/cannon-barrel-firing-orange.webp",
    "grenade": "icons/skills/ranged/bomb-grenade-thrown-yellow.webp",
    "wand": "icons/skills/ranged/wand-attack-beam-blue.webp",
    "chainsaw": "icons/tools/hand/chainsaw-steel-purple.webp",
    "lantern_signal": "icons/sundries/lights/lantern-bullseye-signal-copper.webp",
    "wrench": "icons/tools/hand/wrench-steel.webp",
    "heal_wrench": "icons/tools/hand/wrench-mechanical-heal-blue.webp",
    "baton": "icons/weapons/clubs/baton-energy-stun-silver-yellow.webp",
    "stomp": "icons/creatures/magical/construct-iron-stomping-yellow.webp",
    "claw_jag": "icons/creatures/claws/claw-curved-jagged-yellow.webp",
    "music": "icons/skills/trades/music-notes-sound-blue.webp",
    "scream": "icons/magic/sonic/scream-wail-shout-teal.webp",
})


# ----------------------------------------------------------------- rosters

def roster_paths():
    return sorted(glob.glob(os.path.join(ROSTERS, "*.json")))


def load_roster(path):
    with open(path, encoding="utf-8") as fh:
        r = json.load(fh)
    if r.get("format") != FORMAT:
        raise ValueError(f"{os.path.relpath(path, ROOT)}: format must be {FORMAT!r}")
    if r.get("packet") != os.path.splitext(os.path.basename(path))[0]:
        raise ValueError(f"{os.path.relpath(path, ROOT)}: `packet` must equal the file name")
    return r


def find_roster(packet):
    path = os.path.join(ROSTERS, f"{packet}.json")
    if not os.path.exists(path):
        raise FileNotFoundError(f"no roster data/forge/{packet}.json")
    return load_roster(path)


def packet_paths(roster):
    """(actors dir, portraits dir, renders dir) for a roster."""
    portraits = roster.get("portraits") or f"portraits/{roster['packet']}"
    renders = roster.get("renders") or f"npc-forge/{roster['packet']}/renders"
    return (os.path.join(ACTORS_ROOT, roster["packet"]),
            os.path.realpath(os.path.join(RM, *portraits.split("/"))),
            os.path.join(RM, *renders.split("/")))


def plate_file(roster, entry):
    return os.path.join(packet_paths(roster)[1], f"{entry.get('plate') or entry['id']}.png")


def render_file(roster, entry):
    return os.path.join(packet_paths(roster)[2], f"{entry['id']}.png")


def token_path(roster, entry):
    """The Foundry path the sheet names — the plate when it is cut, the
    pending placeholder until then."""
    if os.path.exists(plate_file(roster, entry)):
        return f"{(roster.get('portraits') or 'portraits/' + roster['packet']).rstrip('/')}/{entry.get('plate') or entry['id']}.png"
    return PENDING_IMG


def prompt_for(roster, entry):
    """The render recipe: house style + the entry's look + the framing that
    keys cleanly. One sentence each so the Forge and the user's own Comfy
    workflow produce the same picture from the same seed."""
    if entry.get("prompt"):
        return entry["prompt"]
    return " ".join(p.strip() for p in (roster.get("style"), entry.get("look"), roster.get("framing")) if p and p.strip())


def render_job(roster, entry):
    w, h = roster.get("render_size") or [1408, 768]
    return {"id": entry["id"], "name": entry["name"], "packet": roster["packet"],
            "prompt": prompt_for(roster, entry),
            "negative": entry.get("negative") or roster.get("negative") or "",
            "seed": int(entry.get("seed") or 0), "width": int(w), "height": int(h),
            "background": roster.get("background") or "#FF00FF",
            "render": os.path.relpath(render_file(roster, entry), ROOT).replace(os.sep, "/"),
            "plate": os.path.relpath(plate_file(roster, entry), ROOT).replace(os.sep, "/"),
            "plate_size": int(roster.get("plate_size") or 512)}


# ------------------------------------------------------------- statblocks

def mod(score):
    return (score - 10) // 2


def cr_text(cr):
    return {0.125: "1/8", 0.25: "1/4", 0.5: "1/2"}.get(cr, str(int(cr)) if float(cr).is_integer() else str(cr))


def prof_for_cr(cr):
    return 2 if cr < 5 else 2 + (int(cr) - 1) // 4


def _uses(spec):
    """Roster uses → P955 uses tuple. [1, "day"] | [2, "sr"] | ["recharge", 5]."""
    if not spec:
        return None
    if spec[0] == "recharge":
        return ("1", "recharge", str(spec[1]))
    return (str(spec[0]), str(spec[1]))


def _range_block(rng):
    if rng in (None, "self"):
        return {"units": "self", "special": "", "override": False}
    return {"value": str(rng), "units": "ft", "special": "", "override": False}


def _target_block(template=None, affects=None):
    t = {"count": "", "contiguous": False, "type": "", "size": "", "width": "", "height": "", "units": "ft", "stationary": False}
    if template:
        t.update({"type": template["type"], "size": str(template["size"]), "width": str(template.get("width") or "")})
    a = {"count": "", "type": "", "choice": False, "special": ""}
    if affects:
        a.update({"count": str(affects.get("count") or ""), "type": affects.get("type") or ""})
    elif template:
        a["type"] = "creature"
    return {"template": t, "affects": a, "prompt": True, "override": False}


def _consumption(uses=None, legendary=None, resource=None):
    targets = []
    if uses:
        targets.append({"type": "itemUses", "value": "1", "target": "", "scaling": {}})
    if legendary:
        targets.append({"type": "attribute", "value": str(legendary), "target": "resources.legact.value", "scaling": {}})
    if resource:
        targets.append({"type": "attribute", "value": "1", "target": f"resources.{resource}.value", "scaling": {}})
    return {"targets": targets, "scaling": {"allowed": False, "max": ""}, "spellSlot": True}


def _activity(owner, name, kind, *, activation, condition="", cost=None, uses=None, resource=None,
              rng=None, template=None, affects=None):
    legendary = cost if activation == "legendary" else None
    value = legendary if legendary else (1 if activation in ("action", "bonus", "reaction") else None)
    act = {
        "_id": sid(owner, "activity", name),
        "type": kind,
        "name": "",
        "img": None,
        "sort": 0,
        "activation": {"type": activation, "value": value, "condition": condition or "", "override": False},
        "consumption": _consumption(uses, legendary, resource),
        "description": {"chatFlavor": ""},
        "duration": {"concentration": False, "value": "", "units": "inst", "special": "", "override": False},
        "effects": [],
        "range": _range_block(rng),
        "target": _target_block(template, affects),
        "uses": {"spent": 0, "max": "", "recovery": []},
        "flags": {},
        "visibility": {"level": {}, "requireAttunement": False, "requireIdentification": False, "requireMagic": False},
    }
    if kind == "utility":
        act["roll"] = {"prompt": False, "visible": False, "name": "", "formula": ""}
    return act


def feat_item(owner, name, icon, html, *, activation=None, condition="", cost=None, uses=None, resource=None,
              rng=None, save=None):
    """A monster feature. Passive when `activation` is None; otherwise it
    carries one activity — a save activity when `save` is given (DC flat,
    damage parts, half/none on save, template or targets), a utility one
    otherwise (legendary actions spend `resources.legact`, Legendary
    Resistance `resources.legres`, limited uses the item's own)."""
    it = P955.feat(owner, name, I[icon], html, uses=_uses(uses))
    if activation:
        if save:
            act = _activity(owner, name, "save", activation=activation, condition=condition, cost=cost, uses=uses,
                            resource=resource, rng=save.get("range", rng), template=save.get("template"), affects=save.get("affects"))
            act["save"] = {"ability": [save["ability"]], "dc": {"calculation": "", "formula": str(save["dc"])}}
            act["damage"] = {"parts": [P955._damage_part(n, d, [t]) for n, d, t in (save.get("dmg") or [])],
                             "onSave": "half" if save.get("half") else "none", "critical": {"allow": False}}
        else:
            act = _activity(owner, name, "utility", activation=activation, condition=condition, cost=cost, uses=uses,
                            resource=resource, rng=rng)
        it["system"]["activities"][act["_id"]] = act
    return it


def attack_item(owner, a):
    """A weapon with one attack activity (P955.attack) plus any extra damage
    parts; the ability modifier rides on the base damage, the extras carry
    none (a 1d4 lightning rider is 1d4)."""
    n, d, t = a["dmg"]
    kind = a.get("kind") or "melee"
    rng = a.get("range")
    it = P955.attack(owner, a["name"], I[a.get("icon") or ("strike" if kind == "melee" else "bolt")], a.get("text") or "",
                     dmg=(n, d, [t]), ability=a.get("ability") or "str", kind=kind,
                     wtype=a.get("wtype") or ("natural" if kind == "melee" else "simpleR"),
                     props=tuple(a.get("props") or ()), reach=a.get("reach") if kind == "melee" else None,
                     rng=tuple(rng) if rng else None)
    parts = it["system"]["activities"]["dnd5eactivity000"]["damage"]["parts"]
    for en, ed, et in a.get("extra") or []:
        parts.append(P955._damage_part(en, ed, [et]))
    return it


def action_item(owner, a):
    activation = a.get("activation") or "action"
    return feat_item(owner, a["name"], a.get("icon") or "strike", a.get("text") or "", activation=activation,
                     condition=a.get("condition") or "", cost=a.get("cost"), uses=a.get("uses"),
                     resource=a.get("resource"), rng=a.get("range"), save=a.get("save"))


def trait_item(owner, t):
    if t.get("resource") == "legres":
        return feat_item(owner, t["name"], t.get("icon") or "ward", f"<p>{t['text']}</p>", activation="special",
                         condition="fails a saving throw", resource="legres")
    return feat_item(owner, t["name"], t.get("icon") or "scroll", f"<p>{t['text']}</p>")


def items_for(roster, entry):
    owner = sid("actor", roster["packet"], entry["id"])
    items = []
    if entry.get("multiattack"):
        items.append(feat_item(owner, "Multiattack", "strike", f"<p>{entry['multiattack']}</p>", activation="action"))
    items += [attack_item(owner, a) for a in entry.get("attacks") or []]
    items += [action_item(owner, a) for a in entry.get("actions") or []]
    items += [trait_item(owner, t) for t in entry.get("traits") or []]
    return items


def movement(speed):
    m = {"walk": "0", "fly": "0", "climb": "0", "swim": "0", "burrow": "0"}
    for k in m:
        if speed.get(k) is not None:
            m[k] = str(int(speed[k]))
    return {"walk": m["walk"], "units": "ft", "hover": bool(speed.get("hover")), "burrow": m["burrow"],
            "climb": m["climb"], "fly": m["fly"], "swim": m["swim"], "ignoredDifficultTerrain": []}


def languages(spec):
    out = {"value": list(spec.get("value") or []), "custom": spec.get("custom") or "", "communication": {}}
    if spec.get("telepathy"):
        out["communication"] = {"telepathy": {"value": int(spec["telepathy"]), "units": "ft"}}
    return out


def speed_words(speed):
    parts = [f"{int(speed.get('walk') or 0)} ft."]
    for k in ("fly", "climb", "swim", "burrow"):
        if speed.get(k):
            parts.append(f"{k} {int(speed[k])} ft." + (" (hover)" if k == "fly" and speed.get("hover") else ""))
    return ", ".join(parts)


def biography(roster, entry, token):
    sc = dict(zip(ABILITY_KEYS, entry["abilities"]))
    prof = prof_for_cr(entry["cr"])
    best = max(("str", "dex"), key=lambda k: sc[k])
    head = (f"<p><em>{roster['name']} packet sheet — {entry['name']}.</em> Built by <code>tools/build-forge-packets.py</code> from the "
            f"NPC Forge roster <code>data/forge/{roster['packet']}.json</code> (entry <code>{entry['id']}</code>): "
            f"{SIZE_NAMES.get(entry['size'], entry['size'])} {entry['type']}"
            + (f" ({entry['subtype']})" if entry.get("subtype") else "")
            + f", {entry.get('alignment') or 'unaligned'}; CR {cr_text(entry['cr'])} (proficiency +{prof}, to hit +{mod(sc[best]) + prof} with {best.upper()}); "
            f"AC {entry['ac']} ({entry.get('ac_words') or 'natural'}), hit points {entry['hp']} ({entry['hp_formula']}), speed {speed_words(entry.get('speed') or {})}. "
            f"A GM scene kit for the {roster['name']} article's present (1040 BF), not a filed event; the faction article stays the authority.</p>")
    body = "".join(entry.get("bio") or [])
    role = f"<p><strong>Role:</strong> {entry.get('role') or '—'} · <strong>tier:</strong> {entry.get('tier') or '—'} · <strong>folder:</strong> {roster['group']} / {entry['folder']}.</p>"
    if token == PENDING_IMG:
        art = (f"<h3>Art</h3><p><strong>Awaiting its plate.</strong> The render <code>{os.path.relpath(render_file(roster, entry), RM).replace(os.sep, '/')}</code> "
               f"has not been cut yet; run the NPC Forge (or <code>tools/build-forge-packets.py plates {roster['packet']}</code>) and rebuild. "
               f"Seed {entry.get('seed') or 0}. Prompt: <q>{prompt_for(roster, entry)}</q></p>")
    else:
        art = (f"<h3>Art</h3><p>Token plate <code>{token}</code> — NPC Forge render, seed {entry.get('seed') or 0}, cut from a flat "
               f"{roster.get('background') or '#FF00FF'} field. Prompt: <q>{prompt_for(roster, entry)}</q></p>")
    return head + body + role + art


def build_actor(roster, entry):
    sc = dict(zip(ABILITY_KEYS, entry["abilities"]))
    token = token_path(roster, entry)
    size = int(entry.get("token_size") or 1)
    res = entry.get("resources") or {}
    resources = {}
    if res:
        resources = {"legact": {"max": int(res.get("legact") or 0), "spent": 0},
                     "legres": {"max": int(res.get("legres") or 0), "spent": 0},
                     "lair": {"value": False, "initiative": None, "inside": False}}
    senses = {"darkvision": 0}
    senses.update({k: int(v) for k, v in (entry.get("senses") or {}).items()})
    tags = list(entry.get("tags") or [])
    sheets = {"tags": tags, "color": roster.get("color") or "#888888", "faction": roster.get("faction"),
              "forge": {"roster": f"data/forge/{roster['packet']}.json", "entry": entry["id"], "seed": int(entry.get("seed") or 0)}}
    if token == PENDING_IMG:
        sheets["art"] = "pending"
    doc = {
        "_id": sid("actor", roster["packet"], entry["id"]),
        "name": entry["name"],
        "type": "npc",
        "img": token,
        "system": {
            "abilities": abilities(sc, tuple(entry.get("saves") or ())),
            "attributes": {
                "ac": {"flat": int(entry["ac"]), "calc": "natural", "formula": ""},
                "hp": {"value": int(entry["hp"]), "max": int(entry["hp"]), "formula": entry.get("hp_formula") or "", "temp": None, "tempmax": None},
                "movement": movement(entry.get("speed") or {}),
                "senses": {"units": "ft", "ranges": senses, "special": ""},
                "init": {"ability": "", "roll": blank_roll(), "bonus": ""},
                "attunement": {"max": 3},
                "spellcasting": "",
                "exhaustion": 0,
                "concentration": {"ability": "", "roll": blank_roll(), "bonuses": {"save": ""}, "limit": 1},
                "loyalty": {},
                "hd": {"spent": 0},
                "death": {"roll": blank_roll(), "success": 0, "failure": 0, "bonuses": {"save": ""}},
            },
            "details": {
                "alignment": entry.get("alignment") or "Unaligned",
                "type": {"value": entry["type"], "subtype": entry.get("subtype") or ""},
                "cr": entry["cr"],
                "biography": {"value": biography(roster, entry, token), "public": ""},
            },
            "traits": {
                "size": entry["size"],
                "languages": languages(entry.get("languages") or {}),
                "ci": {"value": list(entry.get("ci") or []), "custom": ""},
                "di": {"value": list(entry.get("di") or []), "custom": "", "bypasses": []},
                "dr": {"value": list(entry.get("dr") or []), "custom": "", "bypasses": []},
                "dv": {"value": list(entry.get("dv") or []), "custom": "", "bypasses": []},
                "dm": {"amount": {}, "bypasses": []},
                "important": bool(entry.get("tier") == "lieutenant"),
            },
            "skills": skills(dict(entry.get("skills") or {})),
            "source": {"custom": "Waluipedia campaign", "revision": 1, "rules": "2024"},
            "currency": {"pp": 0, "gp": 0, "ep": 0, "sp": 0, "cp": 0},
            "bonuses": {},
            "tools": {},
            "spells": {},
            "resources": resources,
        },
        "prototypeToken": {
            "name": entry["name"],
            "displayName": 0,
            "actorLink": False,
            "width": size,
            "height": size,
            "texture": {"src": token, "anchorX": 0.5, "anchorY": 0.5, "fit": "contain", "scaleX": 1, "scaleY": 1,
                        "tint": "#ffffff", "alphaThreshold": 0.75},
            "lockRotation": False,
            "rotation": 0,
            "alpha": 1,
            "disposition": int(roster.get("disposition", -1)),
            "displayBars": 0,
            "bar1": {"attribute": "attributes.hp"},
            "bar2": {"attribute": None},
        },
        "items": items_for(roster, entry),
        "effects": [],
        "folder": None,
        "ownership": {"default": 0},
        "flags": {MODULE_ID: {"folderPath": [roster["group"], entry["folder"]], "source": "tools/build-forge-packets.py"},
                  SHEETS_FLAG: sheets},
        "_stats": {"coreVersion": "14.365", "systemId": "dnd5e", "systemVersion": "5.3.3", "compendiumSource": None,
                   "duplicateSource": None},
    }
    for i, item in enumerate(doc["items"]):
        item["sort"] = 100000 * (i + 1)
    return doc


def render(doc):
    return json.dumps(doc, indent=2, ensure_ascii=False) + "\n"


# --------------------------------------------------------------- validation

def validate_roster(roster, scheme):
    problems = []
    pk = roster["packet"]
    for key in ("name", "group", "subfolders", "entries"):
        if not roster.get(key):
            problems.append(f"roster lacks `{key}`")
    if not SLUG.match(pk):
        problems.append(f"packet id {pk!r} must be a slug")
    ids = [e.get("id") for e in roster.get("entries") or []]
    if len(ids) != len(set(ids)):
        problems.append("duplicate entry ids")
    if scheme:
        if roster.get("group") not in (scheme.get("groups") or {}):
            problems.append(f"actors/folders.json groups lacks {roster.get('group')!r}")
        entry = (scheme.get("packets") or {}).get(pk) or {}
        if entry.get("folder") != roster.get("group"):
            problems.append(f"actors/folders.json packets.{pk}.folder must be {roster.get('group')!r}")
        subs = entry.get("subfolders") or {}
        for name, style in (roster.get("subfolders") or {}).items():
            s = subs.get(name)
            if not s:
                problems.append(f"actors/folders.json packets.{pk}.subfolders lacks {name!r}")
            elif str(s.get("color") or "").lower() != str(style.get("color") or "").lower():
                problems.append(f"actors/folders.json {name!r} colour {s.get('color')} ≠ roster {style.get('color')}")
    return [f"{pk}: {p}" for p in problems]


def validate_entry(roster, entry, doc, lib, scheme):
    problems = []
    e = entry
    if not SLUG.match(e.get("id") or ""):
        problems.append("id must be a slug")
    if e.get("folder") not in (roster.get("subfolders") or {}):
        problems.append(f"folder {e.get('folder')!r} is not one of the roster's subfolders")
    if not isinstance(e.get("abilities"), list) or len(e["abilities"]) != 6:
        problems.append("abilities must be six scores")
    if not (0 <= float(e.get("cr", -1)) <= 30):
        problems.append(f"cr out of range: {e.get('cr')}")
    if int(e.get("hp") or 0) <= 0:
        problems.append("hp must be positive")
    if e.get("size") not in SIZE_NAMES:
        problems.append(f"size {e.get('size')!r} must be one of {sorted(SIZE_NAMES)}")
    if not (e.get("look") or e.get("prompt")):
        problems.append("entry needs a `look` (or a full `prompt`) for the Forge")
    for s in e.get("saves") or []:
        if s not in ABILITY_KEYS:
            problems.append(f"bad save ability {s!r}")
    for k in e.get("skills") or {}:
        if k not in P955.SKILL_ABILITY:
            problems.append(f"bad skill key {k!r}")
    for a in list(e.get("attacks") or []) + list(e.get("actions") or []) + list(e.get("traits") or []):
        if a.get("icon") and a["icon"] not in I:
            problems.append(f"{a.get('name')}: unknown icon {a['icon']!r}")
    for a in e.get("actions") or []:
        if a.get("activation") == "legendary" and not (e.get("resources") or {}).get("legact"):
            problems.append(f"{a.get('name')}: legendary action without resources.legact")
        sv = a.get("save")
        if sv and sv.get("ability") not in ABILITY_KEYS:
            problems.append(f"{a.get('name')}: bad save ability")
    if not FOUNDRY_ID.match(doc.get("_id") or ""):
        problems.append("actor _id must be 16 alphanumerics")
    imgs = [doc["img"], doc["prototypeToken"]["texture"]["src"]]
    item_ids = []
    for it in doc["items"]:
        imgs.append(it["img"])
        item_ids.append(it["_id"])
        if not FOUNDRY_ID.match(it["_id"]):
            problems.append(f"bad item id {it['_id']}")
        for act_id in it["system"].get("activities") or {}:
            if not FOUNDRY_ID.match(act_id):
                problems.append(f"{it['name']}: bad activity id {act_id}")
    if len(item_ids) != len(set(item_ids)):
        problems.append("duplicate item _id")
    for p in imgs:
        if p.startswith("portraits/"):
            if not os.path.exists(os.path.realpath(os.path.join(RM, *p.split("/")))):
                problems.append(f"token plate missing from repo: {p}")
        elif p not in lib:
            problems.append(f"img not in image paths.txt: {p}")
    path = doc["flags"][MODULE_ID]["folderPath"]
    if len(path) != 2 or path[0] != roster["group"]:
        problems.append(f"folderPath must be [{roster['group']!r}, sub-folder], got {path}")
    elif scheme:
        subs = (((scheme.get("packets") or {}).get(roster["packet"]) or {}).get("subfolders") or {})
        if path[1] not in subs:
            problems.append(f"actors/folders.json packets.{roster['packet']}.subfolders lacks {path[1]!r}")
    if "forge roster" not in doc["system"]["details"]["biography"]["value"].lower():
        problems.append("biography must cite the forge roster")
    return [f"{roster['packet']}/{e.get('id')}: {p}" for p in problems]


def build_packet(roster, lib, scheme):
    """→ (expected {file name: text}, problems, pending ids)."""
    problems = validate_roster(roster, scheme)
    expected, pending = {}, []
    prefix = roster.get("file_prefix") or f"fvtt-Actor-{roster['packet']}-"
    for entry in roster.get("entries") or []:
        doc = build_actor(roster, entry)
        problems += validate_entry(roster, entry, doc, lib, scheme)
        expected[f"{prefix}{entry['id']}.json"] = render(doc)
        if doc["img"] == PENDING_IMG:
            pending.append(entry["id"])
    return expected, problems, pending


def check_packet(roster, expected):
    actors, _, _ = packet_paths(roster)
    bad = []
    for fname, text in expected.items():
        path = os.path.join(actors, fname)
        if not os.path.exists(path):
            bad.append(f"missing {fname}")
            continue
        with open(path, encoding="utf-8") as fh:
            if fh.read() != text:
                bad.append(f"stale {fname}")
    if os.path.isdir(actors):
        bad += [f"unexpected {f}" for f in sorted(os.listdir(actors)) if f.startswith("fvtt-Actor-") and f not in expected]
    return bad


def write_packet(roster, expected):
    actors, _, _ = packet_paths(roster)
    os.makedirs(actors, exist_ok=True)
    for fname, text in expected.items():
        path = os.path.join(actors, fname)
        tmp = path + ".tmp"
        with open(tmp, "w", encoding="utf-8") as fh:
            fh.write(text)
        os.replace(tmp, path)
    for f in sorted(os.listdir(actors)):
        if f.startswith("fvtt-Actor-") and f not in expected:
            os.remove(os.path.join(actors, f))


# ------------------------------------------------------------------ plates

def cut_plate(src, dst, size=512, key="auto"):
    """Render → token plate: key the flat field off at full resolution
    (tools/make-token-plates.py `cut`), heal what the keyer over-ate, then
    fit the figure on a square transparent canvas of `size`. Returns the cut
    facts plus the healed pixel count."""
    from PIL import Image
    mtp = _load_module("mtp", "tools/make-token-plates.py")
    os.makedirs(os.path.dirname(dst), exist_ok=True)
    full = dst + ".full.png"
    facts = mtp.cut(src, full, key=key)
    facts["healed"] = mtp.heal(full)
    im = Image.open(full).convert("RGBA")
    im.thumbnail((size, size), Image.LANCZOS)
    canvas = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    canvas.alpha_composite(im, ((size - im.width) // 2, (size - im.height) // 2))
    canvas.save(dst, optimize=True)
    os.remove(full)
    facts["audit"] = mtp.background_audit(dst)
    return facts


def cmd_plates(packets, force=False):
    rc = 0
    for roster in packets:
        size = int(roster.get("plate_size") or 512)
        for entry in roster.get("entries") or []:
            src, dst = render_file(roster, entry), plate_file(roster, entry)
            if not os.path.exists(src):
                print(f"  {roster['packet']}/{entry['id']}: no render yet ({os.path.relpath(src, ROOT)})")
                continue
            if os.path.exists(dst) and not force:
                print(f"  {roster['packet']}/{entry['id']}: plate present (use --force to recut)")
                continue
            facts = cut_plate(src, dst, size=size)
            flag = "" if not facts.get("audit") else f"  AUDIT {facts['audit']}"
            print(f"  cut {os.path.relpath(dst, ROOT)}  key {facts.get('key')}, figure {facts['figure'][0]}x{facts['figure'][1]}, "
                  f"border clear {facts['border_clear']}, healed {facts.get('healed', 0)} px{flag}")
            if facts.get("audit"):
                rc = 1
    return rc


# -------------------------------------------------------------------- main

def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("command", nargs="?", default="build",
                    help="build (default) | plates | prompts; a packet name here means build that packet")
    ap.add_argument("packets", nargs="*", help="roster names (data/forge/<name>.json); default: all")
    ap.add_argument("--check", action="store_true", help="verify the files on disk match the generator")
    ap.add_argument("--list", action="store_true", help="list the rosters, their entries and art state")
    ap.add_argument("--force", action="store_true", help="plates: recut plates that exist")
    args = ap.parse_args(argv)
    command, names = args.command, list(args.packets)
    if command not in ("build", "plates", "prompts"):
        names.insert(0, command)
        command = "build"
    rosters = [find_roster(n) for n in names] if names else [load_roster(p) for p in roster_paths()]
    if not rosters:
        print("no rosters in Reputation-Matrix2/data/forge/", file=sys.stderr)
        return 1

    if args.list:
        for r in rosters:
            cut = sum(os.path.exists(plate_file(r, e)) for e in r["entries"])
            rendered = sum(os.path.exists(render_file(r, e)) for e in r["entries"])
            print(f"{r['packet']}: {r['name']} — {len(r['entries'])} entries, {rendered} rendered, {cut} plates cut → actors/{r['packet']}/")
            for e in r["entries"]:
                state = "plate" if os.path.exists(plate_file(r, e)) else ("render" if os.path.exists(render_file(r, e)) else "no art")
                print(f"  {e['id']:<24} CR {cr_text(e['cr']):<4} {e['folder']:<20} {state}")
        return 0
    if command == "prompts":
        for r in rosters:
            for e in r["entries"]:
                print(json.dumps(render_job(r, e), ensure_ascii=False))
        return 0
    if command == "plates":
        return cmd_plates(rosters, force=args.force)

    lib = P955.load_image_lib()
    scheme = P955.load_folder_scheme()
    rc = 0
    for r in rosters:
        expected, problems, pending = build_packet(r, lib, scheme)
        if problems:
            for p in problems:
                print("  " + p, file=sys.stderr)
            print(f"FAIL {r['packet']}: {len(problems)} roster problem(s)", file=sys.stderr)
            rc = 1
            continue
        note = f" ({len(pending)} awaiting art: {', '.join(pending)})" if pending else ""
        if args.check:
            bad = check_packet(r, expected)
            if bad:
                for b in bad:
                    print("  " + b, file=sys.stderr)
                print(f"FAIL {r['packet']} actors: {len(bad)} problem(s); run tools/build-forge-packets.py {r['packet']}", file=sys.stderr)
                rc = 1
            else:
                print(f"OK {r['packet']} actors: {len(expected)} files current{note}")
            continue
        write_packet(r, expected)
        for fname, text in expected.items():
            doc = json.loads(text)
            print(f"  wrote {fname}  ({doc['flags'][MODULE_ID]['folderPath'][1]}, CR {cr_text(doc['system']['details']['cr'])}, "
                  f"{len(doc['items'])} items{', art pending' if doc['img'] == PENDING_IMG else ''})")
        print(f"Done. {len(expected)} actors in Reputation-Matrix2/actors/{r['packet']}/{note}")
    return rc


if __name__ == "__main__":
    sys.exit(main())
