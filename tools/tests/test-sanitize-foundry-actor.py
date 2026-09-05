#!/usr/bin/env python3
"""Tests for tools/sanitize-foundry-actor.py — stdlib only, no network.

Every fixture is built in memory, so the suite does not depend on the actor
exports in the repo staying as they are. The two corpus tests at the end are
the exception and are skipped if the files move.

Run:  python3 tools/tests/test-sanitize-foundry-actor.py
"""

import copy
import importlib.util
import json
import os
import sys
import tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
MOD_PATH = os.path.join(ROOT, "tools", "sanitize-foundry-actor.py")

spec = importlib.util.spec_from_file_location("sanitizer", MOD_PATH)
S = importlib.util.module_from_spec(spec)
spec.loader.exec_module(S)

PASS = FAIL = 0


def check(name, cond, extra=""):
    global PASS, FAIL
    if cond:
        PASS += 1
        print("  ok   %s" % name)
    else:
        FAIL += 1
        print("  FAIL %s %s" % (name, extra))


class Opts:
    """Stand-in for the argparse namespace."""

    def __init__(self, **kw):
        self.keep_species = "first"
        self.no_images = True
        self.strip_provenance = False
        self.manifest_set = set()
        self.check = False
        self.write = None
        self.in_place = False
        self.verbose = False
        self.max_lines = 6
        self.no_backup = False
        self.__dict__.update(kw)


def actor(items=None, **kw):
    a = {
        "name": "Test Actor",
        "type": "character",
        "img": "icons/svg/mystery-man.svg",
        "system": {},
        "items": items or [],
        "effects": [],
        "ownership": {"default": 0},
    }
    a.update(kw)
    return a


def item(iid, name, typ="feat", **kw):
    d = {"_id": iid, "name": name, "type": typ, "system": {}, "effects": []}
    d.update(kw)
    return d


def rules_fired(report):
    return {r["rule"] for r in report.rows}


ID16 = "aaaaaaaaaaaaaaaa"


# --------------------------------------------------------------------- ids
print("\n-- item ids")

a = actor([item("dupdupdupdupdup1", "One"), item("dupdupdupdupdup1", "Two")])
out, rep = S.sanitize(a, Opts())
ids = [i["_id"] for i in out["items"]]
check("duplicate _id is reassigned", len(set(ids)) == 2, ids)
check("duplicate-id reported fatal", any(r["rule"] == "duplicate-id" and r["fatal"] for r in rep.rows))
check("no item is dropped", len(out["items"]) == 2)

a = actor([item(None, "NoId"), item("short", "Bad")])
out, rep = S.sanitize(a, Opts())
check("missing id filled", S.ID_RE.match(out["items"][0]["_id"]) is not None)
check("malformed id replaced", S.ID_RE.match(out["items"][1]["_id"]) is not None)

# determinism: same input -> same generated ids
o1, _ = S.sanitize(actor([item(None, "NoId")]), Opts())
o2, _ = S.sanitize(actor([item(None, "NoId")]), Opts())
check("generated ids are deterministic", o1["items"][0]["_id"] == o2["items"][0]["_id"])


# ---------------------------------------------------------------- species
print("\n-- singletons (the 'single Species' rejection)")

two_races = actor([
    item("r1aaaaaaaaaaaaaa", "Mountain Dwarf", "race"),
    item("r2aaaaaaaaaaaaaa", "Dwarf (PHB'24)", "race"),
])
out, rep = S.sanitize(copy.deepcopy(two_races), Opts())
races = [i for i in out["items"] if i["type"] == "race"]
check("exactly one race survives", len(races) == 1, races)
check("keep-first keeps the original", races[0]["name"] == "Mountain Dwarf")
check("duplicate-race is fatal", any(r["rule"] == "duplicate-race" and r["fatal"] for r in rep.rows))

out, _ = S.sanitize(copy.deepcopy(two_races), Opts(keep_species="last"))
check("keep-last keeps the newcomer",
      [i for i in out["items"] if i["type"] == "race"][0]["name"] == "Dwarf (PHB'24)")

out, _ = S.sanitize(actor([
    item("b1aaaaaaaaaaaaaa", "Guild Artisan", "background"),
    item("b2aaaaaaaaaaaaaa", "Soldier", "background"),
]), Opts())
check("duplicate background removed",
      len([i for i in out["items"] if i["type"] == "background"]) == 1)

# an NPC is not subject to the character rule
npc = actor([item("r1aaaaaaaaaaaaaa", "A", "race"), item("r2aaaaaaaaaaaaaa", "B", "race")], type="npc")
out, _ = S.sanitize(npc, Opts())
check("npc keeps both races", len([i for i in out["items"] if i["type"] == "race"]) == 2)

# one race is left alone
out, rep = S.sanitize(actor([item("r1aaaaaaaaaaaaaa", "Mountain Dwarf", "race")]), Opts())
check("single race untouched", "duplicate-race" not in rules_fired(rep))


# --------------------------------------------------------------- subclass
print("\n-- subclass linkage")

a = actor([
    item("c1aaaaaaaaaaaaaa", "Fighter", "class", system={"identifier": "fighter"}),
    item("s1aaaaaaaaaaaaaa", "Samurai", "subclass", system={"classIdentifier": "wizard"}),
])
out, rep = S.sanitize(a, Opts())
subs = [i for i in out["items"] if i["type"] == "subclass"]
check("subclass relinked to the only class", subs and subs[0]["system"]["classIdentifier"] == "fighter")
check("relink reported", "subclass-relinked" in rules_fired(rep))

a = actor([item("s1aaaaaaaaaaaaaa", "Samurai", "subclass", system={"classIdentifier": "fighter"})])
out, rep = S.sanitize(a, Opts())
check("subclass with no class at all is removed",
      not [i for i in out["items"] if i["type"] == "subclass"])

a = actor([
    item("c1aaaaaaaaaaaaaa", "Fighter", "class", system={"identifier": "fighter"}),
    item("s1aaaaaaaaaaaaaa", "Samurai", "subclass", system={"classIdentifier": "fighter"}),
])
out, rep = S.sanitize(a, Opts())
check("correctly linked subclass untouched", "orphan-subclass" not in rules_fired(rep)
      and "subclass-relinked" not in rules_fired(rep))


# ------------------------------------------------------------- advancement
print("\n-- advancement grants ('returned items did not match')")

granted = "g1aaaaaaaaaaaaaa"
a = actor([
    item("c1aaaaaaaaaaaaaa", "Fighter", "class", system={"advancement": {
        "adv1": {"_id": "adv1", "type": "ItemGrant",
                 "value": {"added": {granted: "Compendium.x", "missingaaaaaaaaa": ".missing"}}}
    }}),
    item(granted, "Second Wind"),
])
out, rep = S.sanitize(a, Opts())
added = out["items"][0]["system"]["advancement"]["adv1"]["value"]["added"]
check("dangling grant pruned", "missingaaaaaaaaa" not in added)
check("real grant preserved", granted in added, added)
check("dangling-grant is fatal", any(r["rule"] == "dangling-grant" and r["fatal"] for r in rep.rows))

# list-shaped advancement is handled too
a = actor([
    item("c1aaaaaaaaaaaaaa", "Fighter", "class", system={"advancement": [
        {"_id": "adv1", "type": "ItemGrant", "value": {"added": {"nopeaaaaaaaaaaaa": ""}}}
    ]}),
])
out, rep = S.sanitize(a, Opts())
check("list-shaped advancement pruned", "dangling-grant" in rules_fired(rep))

# clean advancement is not touched
a = actor([
    item("c1aaaaaaaaaaaaaa", "Fighter", "class", system={"advancement": {
        "adv1": {"_id": "adv1", "type": "ItemGrant", "value": {"added": {granted: "x"}}}}}),
    item(granted, "Second Wind"),
])
out, rep = S.sanitize(a, Opts())
check("valid advancement untouched", "dangling-grant" not in rules_fired(rep))


# ----------------------------------------------------------------- effects
print("\n-- effect origins")

a = actor([item(ID16, "Feat", effects=[
    {"_id": "e1", "origin": "Actor.SOMEOTHERACTOR.Item.zzzzzzzzzzzzzzzz"}])])
out, rep = S.sanitize(a, Opts())
check("foreign actor origin cleared", out["items"][0]["effects"][0]["origin"] is None)

a = actor([item(ID16, "Feat", effects=[
    {"_id": "e1", "origin": "Compendium.dnd5e.spells.Item.abc"}])])
out, rep = S.sanitize(a, Opts())
check("compendium origin preserved",
      out["items"][0]["effects"][0]["origin"] == "Compendium.dnd5e.spells.Item.abc")

# exports carry no top-level _id; a self-referential origin whose target
# travelled with the document must survive
a = actor([
    item("selfaaaaaaaaaaaa", "Source"),
    item(ID16, "Feat", effects=[
        {"_id": "e1", "origin": "Actor.SOMEID.Item.selfaaaaaaaaaaaa"}]),
])
out, rep = S.sanitize(a, Opts())
check("origin whose target is present is kept",
      out["items"][1]["effects"][0]["origin"] == "Actor.SOMEID.Item.selfaaaaaaaaaaaa")
check("present-target origin not reported", "stale-effect-origin" not in rules_fired(rep))

a = actor([item(ID16, "Feat", effects=[{"_id": "e1", "origin": None}])])
out, rep = S.sanitize(a, Opts())
check("null origin ignored", "stale-effect-origin" not in rules_fired(rep))


# -------------------------------------------------------------- containers
print("\n-- containers")

a = actor([
    item("k1aaaaaaaaaaaaaa", "Backpack", "container"),
    item("i1aaaaaaaaaaaaaa", "Rope", "loot", system={"container": "k1aaaaaaaaaaaaaa"}),
    item("i2aaaaaaaaaaaaaa", "Torch", "loot", system={"container": "GHOSTGHOSTGHOSTX"}),
])
out, rep = S.sanitize(a, Opts())
check("valid container ref kept", out["items"][1]["system"]["container"] == "k1aaaaaaaaaaaaaa")
check("orphan container ref cleared", out["items"][2]["system"]["container"] is None)
check("orphan-container-ref is fatal",
      any(r["rule"] == "orphan-container-ref" and r["fatal"] for r in rep.rows))
check("orphaned item is not deleted", len(out["items"]) == 3)


# ------------------------------------------------------------------ images
print("\n-- images")

man = {"icons/skills/social/intimidation-impressing.webp", "icons/svg/sword.svg"}
o = Opts(no_images=False, manifest_set=man)

a = actor([item(ID16, "Axe", "weapon", img="icons/skills/social/intimidation-impersonate.webp")])
out, rep = S.sanitize(a, o)
check("near-miss path renamed to the real file",
      out["items"][0]["img"] == "icons/skills/social/intimidation-impressing.webp",
      out["items"][0]["img"])
check("rename reported as cosmetic, not fatal",
      any(r["rule"] == "renamed-image" and not r["fatal"] for r in rep.rows))

a = actor([item(ID16, "Axe", "weapon", img="icons/unrelated/nonsense-xyzzy.webp")])
out, rep = S.sanitize(a, o)
check("unresolvable path gets a type-appropriate fallback",
      out["items"][0]["img"] == "icons/svg/sword.svg", out["items"][0]["img"])

# a root the manifest never indexed is not evidence of breakage
a = actor([item(ID16, "Axe", "weapon",
                img="assets/srd5e/img/homebrew/Oath_of_the_Harvest.webp")])
out, rep = S.sanitize(a, o)
check("un-indexed asset root left alone",
      out["items"][0]["img"] == "assets/srd5e/img/homebrew/Oath_of_the_Harvest.webp")
check("un-indexed root not reported", "unresolved-image" not in rules_fired(rep))

# a bare filename at the world root IS suspect
a = actor([item(ID16, "Thing", "loot", img="1709761629520545.jpg")])
out, rep = S.sanitize(a, o)
check("bare stray filename is caught", "unresolved-image" in rules_fired(rep))

# fuzzy renames must share a subject word, not just letters
man2 = {"icons/creatures/abilities/cougar-roar-rush-orange.webp",
        "icons/tools/instruments/lute-gold-brown.webp",
        "icons/svg/item-bag.svg", "icons/svg/sword.svg"}
o2 = Opts(no_images=False, manifest_set=man2)
a = actor([item(ID16, "Claw", "weapon",
                img="icons/creatures/abilities/claw-slash-orange.webp")])
out, rep = S.sanitize(a, o2)
check("claw is not renamed to cougar",
      out["items"][0]["img"] != "icons/creatures/abilities/cougar-roar-rush-orange.webp",
      out["items"][0]["img"])
a = actor([item(ID16, "Flute", "loot",
                img="icons/tools/instruments/flute-pan-brown.webp")])
out, rep = S.sanitize(a, o2)
check("flute is not renamed to lute",
      out["items"][0]["img"] != "icons/tools/instruments/lute-gold-brown.webp",
      out["items"][0]["img"])

a = actor([item(ID16, "Axe", "weapon", img="icons/svg/sword.svg")])
out, rep = S.sanitize(a, o)
check("known path untouched", "unresolved-image" not in rules_fired(rep)
      and "renamed-image" not in rules_fired(rep))

a = actor([item(ID16, "Thing", "loot", img="https://example.com/x.png")])
out, rep = S.sanitize(a, o)
check("remote url left alone", out["items"][0]["img"] == "https://example.com/x.png")

a = actor([item(ID16, "Thing", "loot", img="")])
out, rep = S.sanitize(a, o)
check("empty img filled", out["items"][0]["img"] == "icons/svg/item-bag.svg")

out, rep = S.sanitize(actor([item(ID16, "X", "loot", img="broken/x.webp")]), Opts(no_images=True))
check("--no-images skips image work", not rules_fired(rep) or "unresolved-image" not in rules_fired(rep))


# dnd5e activities ship img="" and inherit the parent item icon
a = actor([item(ID16, "Sword", "weapon", img="icons/svg/sword.svg",
                system={"activities": {"act1": {"_id": "act1", "img": ""}}})])
out, rep = S.sanitize(a, o)
check("empty activity img left empty",
      out["items"][0]["system"]["activities"]["act1"]["img"] == "")
check("empty activity img not reported", "empty-image" not in rules_fired(rep))


# --------------------------------------------------------------- ownership
print("\n-- ownership and provenance")

a = actor(ownership={"default": 0, "f9K62vO9hIl1GByi": 3})
out, rep = S.sanitize(a, Opts())
check("stray user ownership dropped", list(out["ownership"]) == ["default"])
check("ownership finding is cosmetic",
      all(not r["fatal"] for r in rep.rows if r["rule"] == "stray-ownership"))

a = actor([item(ID16, "X", _stats={"lastModifiedBy": "someuserid"})])
out, rep = S.sanitize(a, Opts())
check("provenance kept by default", out["items"][0]["_stats"]["lastModifiedBy"] == "someuserid")
out, rep = S.sanitize(a, Opts(strip_provenance=True))
check("--strip-provenance clears it", out["items"][0]["_stats"]["lastModifiedBy"] is None)


# ------------------------------------------------------- safety guarantees
print("\n-- safety: never invents or loses content")

src = actor([
    item("c1aaaaaaaaaaaaaa", "Fighter", "class", system={"identifier": "fighter", "levels": 5}),
    item("i1aaaaaaaaaaaaaa", "Torch", "loot", system={"container": "GHOSTGHOSTGHOSTX", "quantity": 7}),
], system={"abilities": {"str": {"value": 18}}})
out, rep = S.sanitize(copy.deepcopy(src), Opts())
check("actor system block untouched", out["system"] == src["system"])
check("item count preserved", len(out["items"]) == len(src["items"]))
check("item names preserved", [i["name"] for i in out["items"]] == [i["name"] for i in src["items"]])
check("class levels untouched", out["items"][0]["system"]["levels"] == 5)
check("quantity untouched", out["items"][1]["system"]["quantity"] == 7)

# input must not be mutated
original = actor([item("dupdupdupdupdup1", "A"), item("dupdupdupdupdup1", "B")])
frozen = json.dumps(original, sort_keys=True)
S.sanitize(original, Opts())
check("input document is not mutated", json.dumps(original, sort_keys=True) == frozen)

# idempotence
messy = actor([
    item("dupdupdupdupdup1", "A"),
    item("dupdupdupdupdup1", "B"),
    item("s1aaaaaaaaaaaaaa", "Samurai", "subclass", system={"classIdentifier": "ghost"}),
    item("i1aaaaaaaaaaaaaa", "Torch", "loot", system={"container": "GHOSTGHOSTGHOSTX"}),
])
once, _ = S.sanitize(messy, Opts())
twice, rep2 = S.sanitize(once, Opts())
check("second pass finds nothing", len(rep2) == 0, [r["rule"] for r in rep2.rows])
check("second pass changes nothing", json.dumps(once, sort_keys=True) == json.dumps(twice, sort_keys=True))


# ------------------------------------------------------------------- io
print("\n-- file handling")

with tempfile.TemporaryDirectory() as td:
    p = os.path.join(td, "a.json")
    with open(p, "w", encoding="utf-8") as fh:
        json.dump(actor([item("dupdupdupdupdup1", "A"), item("dupdupdupdupdup1", "B")]), fh)
    o = Opts(no_images=True)
    rc = S.process(p, o)
    check("report-only exits 1 on fatal findings", rc == 1, rc)
    with open(p, encoding="utf-8") as fh:
        after = json.load(fh)
    check("report-only does not write", after["items"][0]["_id"] == "dupdupdupdupdup1")

    o2 = Opts(no_images=True, in_place=True)
    S.process(p, o2)
    check("--in-place leaves a .bak", os.path.isfile(p + ".bak"))
    with open(p, encoding="utf-8") as fh:
        fixed = json.load(fh)
    check("--in-place repaired the file",
          len({i["_id"] for i in fixed["items"]}) == 2)

    bad = os.path.join(td, "bad.json")
    with open(bad, "w", encoding="utf-8") as fh:
        fh.write("{not json")
    check("unparseable file exits 2", S.process(bad, Opts(no_images=True)) == 2)

    notactor = os.path.join(td, "n.json")
    with open(notactor, "w", encoding="utf-8") as fh:
        json.dump({"hello": "world"}, fh)
    check("non-actor json exits 2", S.process(notactor, Opts(no_images=True)) == 2)


# ------------------------------------------------------------- real corpus
print("\n-- real exports (skipped if the corpus moved)")

corpus = os.path.join(ROOT, "Reputation-Matrix2", "tools", "item sheet examples")
hj = os.path.join(corpus, "hjumpik.json")
manifest_path = os.path.join(corpus, "image paths.txt")
if os.path.isfile(hj) and os.path.isfile(manifest_path):
    man = S.load_manifest(manifest_path)
    check("manifest loads", len(man) > 10000, len(man))
    with open(hj, encoding="utf-8") as fh:
        real = json.load(fh)
    out, rep = S.sanitize(real, Opts(no_images=False, manifest_set=man))
    check("hjumpik: findings detected", rep.fatal_count > 0, rep.fatal_count)
    check("hjumpik: no items lost", len(out["items"]) == len(real["items"]))
    check("hjumpik: stats untouched", out["system"] == real["system"])
    ids = [i["_id"] for i in out["items"]]
    check("hjumpik: ids unique after repair", len(set(ids)) == len(ids))
    again, rep2 = S.sanitize(out, Opts(no_images=False, manifest_set=man))
    check("hjumpik: idempotent", len(rep2) == 0, [r["rule"] for r in rep2.rows])
    # every surviving image resolves
    bad = []
    for _c, _k, v, where in S.iter_img_fields(out):
        if v and not S.image_known(v, man) and not v.startswith("icons/svg/"):
            bad.append((where, v))
    check("hjumpik: all images resolve after repair", not bad, bad[:3])
else:
    print("  skip (corpus not found)")


print("\n%d passed, %d failed" % (PASS, FAIL))
sys.exit(1 if FAIL else 0)
