#!/usr/bin/env python3
"""Round-trip tests for tools/foundry-bridge.py (stdlib only, temp dirs).

  python3 tools/tests/test-foundry-bridge.py
"""
from __future__ import annotations

import importlib.util
import json
import os
import sys
import tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
spec = importlib.util.spec_from_file_location("foundry_bridge", os.path.join(ROOT, "tools", "foundry-bridge.py"))
fb = importlib.util.module_from_spec(spec)
spec.loader.exec_module(fb)

FAILS, OKS = [], []


REAL_ACTORS = os.path.join(ROOT, "Reputation-Matrix2", "actors")


def check(label, cond, extra=""):
    (OKS if cond else FAILS).append(label + (f" — {extra}" if extra and not cond else ""))


def actor(name, _id, folder=None, typ="npc", img="icons/svg/mystery-man.svg", items=None, flags=None):
    return {
        "_id": _id, "name": name, "type": typ, "img": img,
        "system": {"attributes": {"hp": {"value": 10, "max": 10}}},
        "prototypeToken": {"name": name, "texture": {"src": img}},
        "items": items or [], "effects": [], "folder": folder, "sort": 0,
        "ownership": {"default": 0}, "flags": flags or {},
        "_stats": {"systemId": "dnd5e", "systemVersion": "5.3.3"},
    }


def read(path):
    with open(path, encoding="utf-8") as fh:
        return json.load(fh)


with tempfile.TemporaryDirectory() as tmp:
    # ---- fixtures: a world export in the module format -------------------
    folders = [
        {"_id": "F1aaaaaaaaaaaaaa", "name": "Party", "type": "Actor", "folder": None},
        {"_id": "F2aaaaaaaaaaaaaa", "name": "Heroes / Core", "type": "Actor", "folder": "F1aaaaaaaaaaaaaa"},
    ]
    sword = {"_id": "I1aaaaaaaaaaaaaa", "name": "Sword", "type": "weapon", "img": "icons/svg/item-bag.svg", "system": {}}
    export = {
        "format": "waluipedia-actors/1", "exportedFrom": "test-world", "exportedAt": "2026-10-03T00:00:00Z",
        "system": "dnd5e", "systemVersion": "5.3.3", "coreVersion": "13.346",
        "folders": folders,
        "actors": [
            actor("Remi", "A1aaaaaaaaaaaaaa", folder="F2aaaaaaaaaaaaaa", typ="character", items=[sword]),
            actor("Bowser", "A2aaaaaaaaaaaaaa", folder="F1aaaaaaaaaaaaaa", typ="character"),
            actor("Salam", "A3aaaaaaaaaaaaaa", folder=None, img="portraits/missing.png"),
            # a flagged path wins over the folder id
            actor("Orange T", "A4aaaaaaaaaaaaaa", folder="F1aaaaaaaaaaaaaa",
                  flags={"waluipedia-mass-import": {"folderPath": ["Sanctum"]}}),
        ],
    }
    export_path = os.path.join(tmp, "test-world-all-actors.json")
    with open(export_path, "w", encoding="utf-8") as fh:
        json.dump(export, fh)

    # repo-ish fixtures for link-images / install-images
    rm = os.path.join(tmp, "repo")
    os.makedirs(os.path.join(rm, "portraits"))
    for fn in ("bowser.jpg", "salam.png", "orange_t.png"):
        with open(os.path.join(rm, "portraits", fn), "wb") as fh:
            fh.write(b"\x89PNG fake")
    chars = {"characters": [{"id": "bowser", "name": "Bowser", "image": "portraits/bowser.jpg"}]}
    chars_path = os.path.join(rm, "characters.json")
    with open(chars_path, "w", encoding="utf-8") as fh:
        json.dump(chars, fh)
    lib_path = os.path.join(rm, "image paths.txt")
    with open(lib_path, "w", encoding="utf-8") as fh:
        fh.write("icons\\svg\\mystery-man.svg\nicons\\svg\\item-bag.svg\n")
    # point the bridge's repo root at the fixture so portraits/... resolves there
    fb.RM = rm
    fb.ROOT = tmp

    # ---- split --------------------------------------------------------------
    out = os.path.join(tmp, "worlds", "test-world")
    written, pruned, manifest = fb.split(export_path, out)
    check("split writes one file per actor", len(written) == 4, str(len(written)))
    remi = os.path.join(out, "Party", "Heroes   Core", "fvtt-Actor-remi-A1aaaaaaaaaaaaaa.json")
    check("split mirrors the folder tree (and sanitises slashes in folder names)", os.path.exists(remi), remi)
    check("split puts root actors at the top level", os.path.exists(os.path.join(out, "fvtt-Actor-salam-A3aaaaaaaaaaaaaa.json")))
    check("split honours an existing folderPath flag over the folder id",
          os.path.exists(os.path.join(out, "Sanctum", "fvtt-Actor-orange-t-A4aaaaaaaaaaaaaa.json")))
    remi_doc = read(remi)
    check("split stamps the folderPath flag", remi_doc["flags"]["waluipedia-mass-import"]["folderPath"] == ["Party", "Heroes / Core"])
    check("split keeps the actor data verbatim otherwise", remi_doc["items"][0]["name"] == "Sword" and remi_doc["_id"] == "A1aaaaaaaaaaaaaa")
    check("manifest records source, counts and folder paths",
          manifest["exportedFrom"] == "test-world" and manifest["actorCount"] == 4 and "Party / Heroes / Core" in manifest["folders"])
    check("manifest.json exists", os.path.exists(os.path.join(out, "manifest.json")))

    # a bare list (Players.json shape) and a single actor also split
    bare_path = os.path.join(tmp, "players.json")
    with open(bare_path, "w", encoding="utf-8") as fh:
        json.dump([actor("Wario", "A5aaaaaaaaaaaaaa", typ="character")], fh)
    w2, _, _ = fb.split(bare_path, os.path.join(tmp, "bare"))
    check("split accepts a bare actor list", len(w2) == 1 and w2[0].endswith("fvtt-Actor-wario-A5aaaaaaaaaaaaaa.json"))
    single_path = os.path.join(tmp, "single.json")
    with open(single_path, "w", encoding="utf-8") as fh:
        json.dump(actor("Solo", "A6aaaaaaaaaaaaaa"), fh)
    w3, _, _ = fb.split(single_path, os.path.join(tmp, "single"))
    check("split accepts a single actor", len(w3) == 1)

    # the old macro export: folder ids but no folder names -> never "root"
    legacy = {"exportedFrom": "midlands", "system": "dnd5e", "actors": [
        actor("Guard", "L1aaaaaaaaaaaaaa", folder="J8DnjiUveS1FZZ6n"),
        actor("Loose", "L2aaaaaaaaaaaaaa", folder=None)]}
    legacy_path = os.path.join(tmp, "midlands-all-actors.json")
    with open(legacy_path, "w", encoding="utf-8") as fh:
        json.dump(legacy, fh)
    lw, _, lman = fb.split(legacy_path, os.path.join(tmp, "legacy"))
    guard = read(os.path.join(tmp, "legacy", "fvtt-Actor-guard-L1aaaaaaaaaaaaaa.json"))
    loose = read(os.path.join(tmp, "legacy", "fvtt-Actor-loose-L2aaaaaaaaaaaaaa.json"))
    check("split: an unresolvable folder id gets NO folderPath flag and keeps the id",
          "waluipedia-mass-import" not in guard["flags"] and guard["folder"] == "J8DnjiUveS1FZZ6n")
    check("split: a real root actor is stamped []", loose["flags"]["waluipedia-mass-import"]["folderPath"] == [])
    check("split: manifest counts unresolved folder ids", lman["unresolvedFolderIds"] == {"J8DnjiUveS1FZZ6n": 1} and "Re-export" in lman["note"])
    lp, _ = fb.combine([os.path.join(tmp, "legacy")])
    lg = next(a for a in lp["actors"] if a["name"] == "Guard")
    check("combine: top-level file without a flag keeps its folder id (module leaves it in place)",
          lg["folder"] == "J8DnjiUveS1FZZ6n" and "waluipedia-mass-import" not in lg["flags"] and lp["unresolvedFolderActors"] == 1)
    check("combine: root actors still get [] and folder null",
          next(a for a in lp["actors"] if a["name"] == "Loose")["folder"] is None)

    # prune removes files the export no longer has
    stray = os.path.join(out, "fvtt-Actor-stray-A9aaaaaaaaaaaaaa.json")
    with open(stray, "w", encoding="utf-8") as fh:
        json.dump(actor("Stray", "A9aaaaaaaaaaaaaa"), fh)
    _, pruned, _ = fb.split(export_path, out, prune=True)
    check("split --prune deletes stale actor files", pruned == [stray] and not os.path.exists(stray))

    # ---- combine ------------------------------------------------------------
    payload, dupes = fb.combine([out])
    check("combine yields the module format", payload["format"] == "waluipedia-actors/1" and payload["actorCount"] == 4)
    paths = sorted(f["path"] for f in payload["folders"])
    check("combine rebuilds the folder tree from flags", paths == [["Party"], ["Party", "Heroes / Core"], ["Sanctum"]], str(paths))
    by_name = {a["name"]: a for a in payload["actors"]}
    leaf = next(f for f in payload["folders"] if f["path"] == ["Party", "Heroes / Core"])
    check("combine points each actor at its synthetic folder id", by_name["Remi"]["folder"] == leaf["_id"] and by_name["Salam"]["folder"] is None)
    check("combine folder ids are stable and 16 chars", fb.FOUNDRY_ID.match(leaf["_id"]) and leaf["folder"] == fb.sid("folder", "Party"))
    check("combine reports no duplicates here", dupes == [])
    payload2, _ = fb.combine([out])
    check("combine is deterministic", json.dumps(payload) == json.dumps(payload2))
    prefixed, _ = fb.combine([out], folder_prefix="Imports / Session 42")
    check("combine --folder prefixes every path",
          prefixed["actors"][0]["flags"]["waluipedia-mass-import"]["folderPath"][:2] == ["Imports", "Session 42"])
    # directory path is used when there is no flag
    plain_dir = os.path.join(tmp, "plain", "Villains")
    os.makedirs(plain_dir)
    with open(os.path.join(plain_dir, "a.json"), "w", encoding="utf-8") as fh:
        json.dump(actor("Fawful", "A7aaaaaaaaaaaaaa"), fh)
    p3, _ = fb.combine([os.path.join(tmp, "plain")])
    check("combine derives folderPath from directories when the flag is absent",
          p3["actors"][0]["flags"]["waluipedia-mass-import"]["folderPath"] == ["Villains"])
    # duplicate ids across dirs are flagged
    dup_dir = os.path.join(tmp, "dup")
    os.makedirs(dup_dir)
    with open(os.path.join(dup_dir, "copy.json"), "w", encoding="utf-8") as fh:
        json.dump(actor("Remi copy", "A1aaaaaaaaaaaaaa"), fh)
    _, dupes = fb.combine([out, dup_dir])
    check("combine warns on duplicate _id across inputs", len(dupes) == 1 and dupes[0][0] == "A1aaaaaaaaaaaaaa")

    # ---- several sources: the first wins a name + type clash --------------
    era_dir = os.path.join(tmp, "era")
    os.makedirs(era_dir)
    with open(os.path.join(era_dir, "guard.json"), "w", encoding="utf-8") as fh:
        json.dump(dict(actor("Palace Guard", "E1aaaaaaaaaaaaaa"), flags={"waluipedia-mass-import": {"folderPath": ["Peach's Castle 955 BF", "The Court"]}}), fh)
    with open(os.path.join(era_dir, "guard2.json"), "w", encoding="utf-8") as fh:
        json.dump(dict(actor("Palace Guard", "E2aaaaaaaaaaaaaa"), flags={"waluipedia-mass-import": {"folderPath": ["Peach's Castle 955 BF", "The Court"]}}), fh)
    with open(os.path.join(era_dir, "peach.json"), "w", encoding="utf-8") as fh:
        json.dump(dict(actor("Princess Peach (955 BF)", "E3aaaaaaaaaaaaaa"), flags={"waluipedia-mass-import": {"folderPath": ["Peach's Castle 955 BF", "The Court"]}}), fh)
    world_dir = os.path.join(tmp, "world2")
    os.makedirs(os.path.join(world_dir, "Guards"))
    with open(os.path.join(world_dir, "Guards", "guard.json"), "w", encoding="utf-8") as fh:
        json.dump(actor("palace guard", "W1aaaaaaaaaaaaaa"), fh)
    merged, _ = fb.combine([world_dir, era_dir], world="w2")
    kept = sorted(a["_id"] for a in merged["actors"])
    check("combine (several dirs): the world's Palace Guard wins over the era packet's by name + type, case-insensitively; the era's Peach comes along",
          kept == ["E3aaaaaaaaaaaaaa", "W1aaaaaaaaaaaaaa"] and [o["_id"] for o in merged["omitted"]] == ["E1aaaaaaaaaaaaaa", "E2aaaaaaaaaaaaaa"]
          and merged["omitted"][0]["keptFrom"].endswith("world2"), str(merged.get("omitted")))
    alone, _ = fb.combine([era_dir], world="era")
    check("combine (one dir): two statblocks with one name are two actors — dedupe only runs across sources", alone["actorCount"] == 3 and "omitted" not in alone)
    kept_all, _ = fb.combine([world_dir, era_dir], world="w2", dedupe=False)
    check("combine --keep-duplicates keeps every actor", kept_all["actorCount"] == 4)
    styles = fb.folder_styles(fb.load_folder_scheme(), [["Peach's Castle 955 BF", "The Court"], ["Peach's Castle 955 BF"]])
    check("folder_styles: an era folder and its children take the era colour; the description sits on the root only",
          styles["Peach's Castle 955 BF"]["color"] == "#B8860B" and styles["Peach's Castle 955 BF"]["description"]
          and styles["Peach's Castle 955 BF / The Court"]["color"] == "#B8860B" and not styles["Peach's Castle 955 BF / The Court"]["description"], str(styles))
    scheme = {"minimum": 2, "fallback": "Elsewhere", "players": {"folder": "Players"}, "bestiary": {"folder": "Bestiary"}, "keep": ["Players"],
              "eras": {"x": {"folder": "Era"}}}
    pop = {"a": ["Bestiary", "Ooze"], "b": ["Bestiary", "Fey"], "c": ["Bestiary", "Fey"], "d": ["Lonely"], "e": ["Players"], "f": ["Era", "Court"],
           "g": ["Era"], "h": ["Big", "Deep", "Deeper"], "i": ["Big", "Deep", "Deeper"], "j": ["Big", "Other"], "k": []}
    folded = fb.fold_singletons(pop, scheme)
    check("fold_singletons: a lone sub-folder folds into its parent, a lone top-level folder into the fallback; Players, Bestiary, era roots, the root never fold",
          folded == {"a": ["Bestiary"], "b": ["Bestiary", "Fey"], "c": ["Bestiary", "Fey"], "d": ["Elsewhere"], "e": ["Players"], "f": ["Era"], "g": ["Era"],
                     "h": ["Big", "Deep", "Deeper"], "i": ["Big", "Deep", "Deeper"], "j": ["Big"], "k": []}, str(folded))
    check("fold_singletons: a lone Elsewhere or Bestiary stays; minimum 1 is a no-op; inputs are not mutated",
          fb.fold_singletons({"a": ["Elsewhere"], "b": ["Bestiary"]}, scheme) == {"a": ["Elsewhere"], "b": ["Bestiary"]}
          and fb.fold_singletons(pop, dict(scheme, minimum=1)) == pop and pop["a"] == ["Bestiary", "Ooze"])
    check("era_actors / world_population read the repo's trees: every era actor keyed by name + type under its own era folder (955 BF court, 1035 BF castle), the midlands mirror by its flags",
          all(v["path"][0] == v["folder"] and v["era"] in ("955 BF", "1035 BF") for v in fb.era_actors(fb.load_folder_scheme(), REAL_ACTORS).values())
          and {v["folder"] for v in fb.era_actors(fb.load_folder_scheme(), REAL_ACTORS).values()} == {"Peach's Castle 955 BF", "Bowser's Castle 1035 BF"}
          and ("omega bowser (1035 bf)", "npc") in fb.era_actors(fb.load_folder_scheme(), REAL_ACTORS)
          and ("koopatrol", "npc") in fb.era_actors(fb.load_folder_scheme(), REAL_ACTORS) and len(fb.world_population(REAL_ACTORS)) >= 151
          and all(isinstance(path, list) for _, path in fb.world_population(REAL_ACTORS)))

    # ---- link-images --------------------------------------------------------
    report = fb.link_images([out], write=False, portraits_dir=os.path.join(rm, "portraits"),
                            characters_json=chars_path, image_lib=lib_path)
    rows = {(r["actor"], r["where"]): r for r in report}
    check("link-images: characters.json portrait wins for Bowser", rows[("Bowser", "img")]["fix"] == "portraits/bowser.jpg")
    check("link-images: portraits/ by name for Salam", rows[("Salam", "img")]["fix"] == "portraits/salam.png" and rows[("Salam", "img")]["status"] == "missing")
    check("link-images: underscore spelling (orange_t) found", rows[("Orange T", "token")]["fix"] == "portraits/orange_t.png")
    check("link-images: dry run writes nothing", read(remi)["img"] == "icons/svg/mystery-man.svg")
    # GM uploads the repo cannot see are reported but never swapped by default
    upload_dir = os.path.join(tmp, "uploads")
    os.makedirs(upload_dir)
    with open(os.path.join(upload_dir, "b.json"), "w", encoding="utf-8") as fh:
        json.dump(actor("Bowser", "A8aaaaaaaaaaaaaa", img="npc/ezgif-bowser.webp", typ="character"), fh)
    rep_u = fb.link_images([upload_dir], write=True, portraits_dir=os.path.join(rm, "portraits"), characters_json=chars_path, image_lib=lib_path)
    check("link-images: unknown (GM upload) paths are left alone by default",
          rep_u[0]["status"] == "unknown" and rep_u[0]["fix"] is None and read(os.path.join(upload_dir, "b.json"))["img"] == "npc/ezgif-bowser.webp")
    fb.link_images([upload_dir], write=True, portraits_dir=os.path.join(rm, "portraits"), characters_json=chars_path, image_lib=lib_path, replace_unknown=True)
    check("link-images: --replace-unknown swaps them", read(os.path.join(upload_dir, "b.json"))["img"] == "portraits/bowser.jpg")
    check("image_status classifies system/module paths as server", fb.image_status("systems/dnd5e/tokens/humanoid/Guard.webp") == "server" and fb.image_status("modules/house-divided/x.webp") == "server")
    fb.link_images([out], write=True, portraits_dir=os.path.join(rm, "portraits"), characters_json=chars_path, image_lib=lib_path)
    salam = read(os.path.join(out, "fvtt-Actor-salam-A3aaaaaaaaaaaaaa.json"))
    check("link-images --write sets img and token", salam["img"] == "portraits/salam.png" and salam["prototypeToken"]["texture"]["src"] == "portraits/salam.png")
    check("link-images leaves actors without a match alone", read(remi)["img"] == "icons/svg/mystery-man.svg")

    # ---- apply --------------------------------------------------------------
    changes = {"changes": [
        {"match": {"name": "Remi"}, "set": {"system.attributes.hp.value": 3, "system.details.notes": "poisoned at the gala"},
         "addItems": [{"name": "Antidote", "type": "consumable", "img": "icons/svg/item-bag.svg", "system": {}}],
         "removeItems": ["Sword"], "folderPath": ["Party", "Wounded"]},
        {"match": {"_id": "A2aaaaaaaaaaaaaa"}, "rename": "Bowser, King of the Koopas",
         "addItems": [{"fromFile": remi, "item": "Sword"}, {"fromFile": remi, "item": "Nonexistent"}]},
        {"match": {"name": "Nobody"}, "set": {"x": 1}},
        {"match": {"name": "Orange T"}, "delete": True},
    ]}
    changes_path = os.path.join(tmp, "changes.json")
    with open(changes_path, "w", encoding="utf-8") as fh:
        json.dump(changes, fh)
    log = fb.apply_changes(changes_path, [out], write=False)
    check("apply dry run reports every line", any("set system.attributes.hp.value = 3" in ln for ln in log) and any("no actor matches" in ln for ln in log))
    check("apply dry run writes nothing", read(remi)["system"]["attributes"]["hp"]["value"] == 10)
    check("apply reports a missing fromFile item as an ERROR line instead of dying", any("ERROR addItems" in ln for ln in log))
    fb.apply_changes(changes_path, [out], write=True)
    remi_doc = read(remi)
    check("apply --write sets dotted paths (creating intermediates)", remi_doc["system"]["attributes"]["hp"]["value"] == 3 and remi_doc["system"]["details"]["notes"] == "poisoned at the gala")
    names = [it["name"] for it in remi_doc["items"]]
    check("apply adds and removes items", names == ["Antidote"], str(names))
    check("apply gives added items a stable 16-char id", fb.FOUNDRY_ID.match(remi_doc["items"][0]["_id"]))
    check("apply moves folderPath via the flag", remi_doc["flags"]["waluipedia-mass-import"]["folderPath"] == ["Party", "Wounded"])
    bowser_path = os.path.join(out, "Party", "fvtt-Actor-bowser-A2aaaaaaaaaaaaaa.json")
    bowser = read(bowser_path)
    check("apply renames actor and prototype token", bowser["name"] == "Bowser, King of the Koopas" and bowser["prototypeToken"]["name"] == bowser["name"])
    check("apply copies an item from another actor file (keeping its id)", [it["name"] for it in bowser["items"]] == ["Sword"] and bowser["items"][0]["_id"] == "I1aaaaaaaaaaaaaa")
    check("apply deletes actors on request", not os.path.exists(os.path.join(out, "Sanctum", "fvtt-Actor-orange-t-A4aaaaaaaaaaaaaa.json")))
    # re-applying inline items is idempotent (same derived id -> replaced, not duplicated)
    again_path = os.path.join(tmp, "again.json")
    with open(again_path, "w", encoding="utf-8") as fh:
        json.dump([changes["changes"][0]], fh)
    fb.apply_changes(again_path, [out], write=True)
    check("apply is idempotent for addItems", [it["name"] for it in read(remi)["items"]] == ["Antidote"])

    # ---- check --------------------------------------------------------------
    count, errors, warnings = fb.check([out], image_lib=lib_path)
    check("check passes a clean tree", count == 3 and errors == [], "; ".join(errors))
    bad_dir = os.path.join(tmp, "bad")
    os.makedirs(bad_dir)
    with open(os.path.join(bad_dir, "bad.json"), "w", encoding="utf-8") as fh:
        json.dump(actor("Bad", "short", items=[sword, sword]), fh)
    with open(os.path.join(bad_dir, "dup.json"), "w", encoding="utf-8") as fh:
        json.dump(actor("Dup", "A1aaaaaaaaaaaaaa"), fh)
    with open(os.path.join(bad_dir, "broken.json"), "w", encoding="utf-8") as fh:
        fh.write("{not json")
    _, errors, warnings = fb.check([out, bad_dir], image_lib=lib_path)
    joined = "\n".join(errors)
    check("check flags bad ids, duplicate ids, duplicate item ids and broken JSON",
          "not 16 alphanumerics" in joined and "duplicate _id" in joined and "duplicate item _id" in joined and "invalid JSON" in joined, joined)
    _, errors_strict, _ = fb.check([out], image_lib=lib_path, strict_images=True)
    check("check --strict-images turns unknown images into errors (Remi's placeholder is fine)", errors_strict == [], "; ".join(errors_strict))

    # ---- install-images -----------------------------------------------------
    data_dir = os.path.join(tmp, "FoundryData")
    copied, skipped, missing = fb.install_images([out], data_dir, dry_run=True)
    check("install-images dry run lists copies without copying", "portraits/salam.png" in copied and not os.path.exists(os.path.join(data_dir, "portraits", "salam.png")))
    copied, skipped, missing = fb.install_images([out], data_dir)
    check("install-images copies referenced repo images", os.path.exists(os.path.join(data_dir, "portraits", "salam.png")) and missing == [])
    copied2, skipped2, _ = fb.install_images([out], data_dir)
    check("install-images is idempotent", copied2 == [] and "portraits/salam.png" in skipped2)

    # ---- art URLs (1.8): packets point at the archive's server, mirrors stay host-free
    base = "http://192.168.1.20:8765/"
    with open(os.path.join(rm, "portraits", "Toad Lee (1).png"), "wb") as fh:
        fh.write(b"\x89PNG fake")
    check("art_url maps a repo path to its URL under the base, percent-encoded, repo-root-relative",
          fb.art_url("portraits/salam.png", base) == base + "repo/portraits/salam.png"
          and fb.art_url("portraits/Toad Lee (1).png", base) == base + "repo/portraits/Toad%20Lee%20%281%29.png", fb.art_url("portraits/Toad Lee (1).png", base))
    check("art_url leaves server, placeholder, unknown and already-external paths alone",
          all(fb.art_url(x, base) == x for x in ("icons/svg/mystery-man.svg", "modules/x/y.webp", "npc/upload.png", "https://e.test/a.png", "")))
    check("art_path turns the URL back into the repo path whatever the host, and returns None for anything else",
          fb.art_path("http://100.64.0.9:9000/repo/portraits/Toad%20Lee%20%281%29.png") == "portraits/Toad Lee (1).png"
          and fb.art_path(base + "repo/portraits/salam.png?t=1") == "portraits/salam.png"
          and fb.art_path(base + "repo/portraits/nope.png") is None and fb.art_path("portraits/salam.png") is None)
    linked, _ = fb.combine([out], world="w", art_base=base)
    salam_doc = next(a for a in linked["actors"] if a["name"] == "Salam")
    check("combine --art-base rewrites every repo image in the packet to a URL and records the base",
          salam_doc["img"] == base + "repo/portraits/salam.png" and linked["artBase"] == base and linked["artLinks"] >= 1, salam_doc["img"])
    plain, _ = fb.combine([out], world="w")
    check("…and without it the packet keeps Data paths (the --art-copy way)", next(a for a in plain["actors"] if a["name"] == "Salam")["img"] == "portraits/salam.png" and "artBase" not in plain)
    # a world that carries URLs exports back → split writes repo paths, so the committed mirror never names a host
    url_export = json.loads(json.dumps(export))
    url_export["actors"][2]["img"] = base + "repo/portraits/salam.png"
    url_export["actors"][2]["prototypeToken"] = {"texture": {"src": "http://100.64.0.9:8765/repo/portraits/salam.png"}}
    url_export["actors"][2]["items"] = [{"_id": "I2aaaaaaaaaaaaaa", "name": "Kept", "type": "loot", "img": "https://elsewhere.test/x.png", "system": {}}]
    url_export_path = os.path.join(tmp, "url-export.json")
    with open(url_export_path, "w", encoding="utf-8") as fh:
        json.dump(url_export, fh)
    url_out = os.path.join(tmp, "worlds", "url-world")
    fb.split(url_export_path, url_out)
    back = read(os.path.join(url_out, "fvtt-Actor-salam-A3aaaaaaaaaaaaaa.json"))
    check("split turns art-server URLs (any host) back into repo paths and leaves real external URLs alone",
          back["img"] == "portraits/salam.png" and back["prototypeToken"]["texture"]["src"] == "portraits/salam.png" and back["items"][0]["img"] == "https://elsewhere.test/x.png", json.dumps([back["img"], back["prototypeToken"]]))

    # ---- prune-images: verified before deleted ---------------------------
    served = {base + "repo/portraits/salam.png": b"\x89PNG fake", base + "repo/portraits/orange_t.png": b"\x89PNG fake", base + "repo/portraits/bowser.jpg": b"\x89PNG fake"}
    calls = []
    def fake_fetch(url, timeout=6.0):
        calls.append(url)
        if url not in served:
            raise OSError("404")
        return served[url]
    def fail_fetch(url, timeout=6.0):
        raise OSError("connection refused")
    # Data: salam (identical), orange_t (identical), a GM upload sharing the folder, and a same-name file with other bytes
    fb.install_images([out], data_dir)
    os.makedirs(os.path.join(data_dir, "portraits", "deep"), exist_ok=True)
    for fn, blob in (("orange_t.png", b"\x89PNG fake"), ("gm-upload.png", b"mine"), ("bowser.jpg", b"edited by hand")):
        with open(os.path.join(data_dir, "portraits", fn), "wb") as fh:
            fh.write(blob)
    with open(os.path.join(data_dir, "portraits", "deep", "salam.png"), "wb") as fh:
        fh.write(b"\x89PNG fake")  # a copy where the repo has no file at that path
    def write_export(payload, name):
        pth = os.path.join(tmp, name)
        with open(pth, "w", encoding="utf-8") as fh:
            json.dump(payload, fh)
        return pth
    rep = fb.prune_images(data_dir, base, export_path=None, fetch=fake_fetch)
    check("prune-images: with no export back nothing goes — every candidate is kept with the reason",
          rep["deleted"] == [] and {r for r, _ in rep["kept"]} >= {"portraits/salam.png", "portraits/orange_t.png"} and "no export back" in dict(rep["kept"])["portraits/salam.png"], json.dumps(rep["kept"]))
    old_export = write_export(url_export, "old-export.json")  # module < 1.8: no imagesInUse
    rep = fb.prune_images(data_dir, base, export_path=old_export, fetch=fake_fetch)
    check("…an export back without imagesInUse (module < 1.8) cannot vouch for placed tokens — kept, reason says so",
          rep["deleted"] == [] and "predates module 1.8" in dict(rep["kept"])["portraits/orange_t.png"], json.dumps(rep["kept"]))
    full = json.loads(json.dumps(url_export))
    full["imagesInUse"] = ["portraits/orange_t.png", base + "repo/portraits/salam.png", "icons/svg/mystery-man.svg"]
    new_export = write_export(full, "new-export.json")
    rep = fb.prune_images(data_dir, base, export_path=new_export, fetch=fail_fetch)
    check("…a dead art server means nothing is deleted",
          rep["deleted"] == [] and rep["server"].startswith("down") and all("not answering" in why for _, why in rep["kept"] if _ in ("portraits/salam.png", "portraits/orange_t.png")), json.dumps(rep))
    rep = fb.prune_images(data_dir, base, export_path=new_export, fetch=fake_fetch)
    check("prune-images dry run: salam goes (identical, served, unreferenced), orange_t stays (a placed token still uses the Data path), bowser stays (bytes differ), the GM upload and the stray copy are not even candidates",
          rep["deleted"] == ["portraits/salam.png"] and dict(rep["kept"]).get("portraits/orange_t.png", "").startswith("still referenced")
          and "differs" in dict(rep["kept"]).get("portraits/bowser.jpg", "") and not any(r.endswith("gm-upload.png") or r.startswith("portraits/deep/") for r, _ in rep["kept"])
          and os.path.exists(os.path.join(data_dir, "portraits", "salam.png")) and rep["bytes"] == 9, json.dumps(rep))
    check("…and the server's bytes were compared for the file that goes", base + "repo/portraits/salam.png" in calls)
    served[base + "repo/portraits/salam.png"] = b"other bytes"
    rep = fb.prune_images(data_dir, base, export_path=new_export, fetch=fake_fetch)
    check("…a server answering with different bytes keeps the copy", rep["deleted"] == [] and "different bytes" in dict(rep["kept"])["portraits/salam.png"], json.dumps(rep["kept"]))
    served[base + "repo/portraits/salam.png"] = b"\x89PNG fake"
    rep = fb.prune_images(data_dir, base, export_path=new_export, write=True, fetch=fake_fetch)
    check("prune-images --write deletes the verified copy and reports the bytes freed; a packet that still names the Data path would keep it",
          rep["deleted"] == ["portraits/salam.png"] and not os.path.exists(os.path.join(data_dir, "portraits", "salam.png")) and rep["bytes"] == 9
          and fb.prune_images(data_dir, base, export_path=new_export, packets=[export_path], fetch=fake_fetch)["kept"] and os.path.exists(os.path.join(data_dir, "portraits", "orange_t.png")))

print(f"foundry bridge: {len(OKS)} ok, {len(FAILS)} failed")
for f in FAILS:
    print("  FAIL " + f)
for o in OKS:
    print("  ok   " + o)
sys.exit(1 if FAILS else 0)
