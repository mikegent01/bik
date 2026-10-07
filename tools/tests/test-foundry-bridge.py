#!/usr/bin/env python3
"""Round-trip tests for tools/foundry-bridge.py (stdlib only, temp dirs).

  python3 tools/tests/test-foundry-bridge.py
"""
from __future__ import annotations

import importlib.util
import copy
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
    check("combine carries the party block (players_payload) with the LIVE world's packet and with a combine that names no world — never with an era packet's, whose import.json is committed and checked (a roster or permission edit must not churn it)",
          "players" not in merged and "players" not in alone and "players" not in kept_all
          and fb.combine([world_dir, era_dir], world=fb.live_world())[0]["players"]["folder"] == "Players"
          and fb.combine([world_dir, era_dir])[0]["players"]["users"] == ["Hjumpik", "Keaneu", "Martir", "Oscar"]
          and fb.live_world() == fb.load_folder_scheme()["players"]["world"] == fb.LIVE_WORLD == "midlands"
          and fb.live_world({"players": {"world": "ebott"}}) == "ebott" and fb.live_world({}) == fb.LIVE_WORLD,
          json.dumps({"live": fb.live_world(), "era": sorted(merged), "live packet": sorted(fb.combine([world_dir], world="midlands")[0])}))
    real_scheme = fb.load_folder_scheme()
    styles = fb.folder_styles(real_scheme, [["Koopa Troop", "955 BF — Peach's Castle"], ["Mushroom Regency & Kingdom", "955 BF — Peach's Castle"],
                                            ["Liberated Toads", "Pond Patrol"], ["Bestiary", "955 BF — Peach's Castle"]])
    check("folder_styles: an era sub-folder under any faction takes the era colour and description, the faction folder its group colour; a packet's sub-folder (Liberated Toads / Pond Patrol) its cohort colour; nothing under Bestiary",
          styles["Koopa Troop"]["color"] == "#006400"
          and styles["Koopa Troop / 955 BF — Peach's Castle"]["color"] == "#B8860B" and styles["Koopa Troop / 955 BF — Peach's Castle"]["description"]
          and styles["Mushroom Regency & Kingdom / 955 BF — Peach's Castle"]["color"] == "#B8860B"
          and styles["Liberated Toads / Pond Patrol"]["color"] == "#4a9c6d" and styles["Liberated Toads / Pond Patrol"]["description"]
          and "Bestiary / 955 BF — Peach's Castle" not in styles, str(styles))
    check("era_folders / packet_dirs / packet_subfolders read the scheme: era sub-folder names, every committed packet dir (eras first, then packets), the cohort sub-folders",
          set(fb.era_folders(real_scheme)) == {"955 BF — Peach's Castle", "1035 BF — Bowser's Castle"}
          and [d for d, _ in fb.packet_dirs(real_scheme)] == ["peachs-castle-955", "bowsers-castle-1035", "liberated-toads", "fawfuls-forces"]
          and dict(fb.packet_dirs(real_scheme))["liberated-toads"]["era"] is None and dict(fb.packet_dirs(real_scheme))["peachs-castle-955"]["era"] == "955 BF"
          and "Liberated Toads / The Wardens" in fb.packet_subfolders(real_scheme), str(fb.packet_dirs(real_scheme)))
    scheme = {"minimum": 2, "fallback": "Elsewhere", "players": {"folder": "Players"}, "bestiary": {"folder": "Bestiary"}, "keep": ["Players"],
              "eras": {"x": {"folder": "Era"}}}
    pop = {"a": ["Bestiary", "Ooze"], "b": ["Bestiary", "Fey"], "c": ["Bestiary", "Fey"], "d": ["Lonely"], "e": ["Players"], "f": ["Faction", "Era"],
           "g": ["Faction"], "h": ["Big", "Deep", "Deeper"], "i": ["Big", "Deep", "Deeper"], "j": ["Big", "Other"], "k": []}
    folded = fb.fold_singletons(pop, scheme)
    check("fold_singletons: a lone sub-folder (an era sub-folder too) folds into its parent, a lone top-level folder into the fallback; Players, Bestiary, the root never fold",
          folded == {"a": ["Bestiary"], "b": ["Bestiary", "Fey"], "c": ["Bestiary", "Fey"], "d": ["Elsewhere"], "e": ["Players"], "f": ["Faction"], "g": ["Faction"],
                     "h": ["Big", "Deep", "Deeper"], "i": ["Big", "Deep", "Deeper"], "j": ["Big"], "k": []}, str(folded))
    check("fold_singletons: a lone Elsewhere or Bestiary stays; minimum 1 is a no-op; inputs are not mutated",
          fb.fold_singletons({"a": ["Elsewhere"], "b": ["Bestiary"]}, scheme) == {"a": ["Elsewhere"], "b": ["Bestiary"]}
          and fb.fold_singletons(pop, dict(scheme, minimum=1)) == pop and pop["a"] == ["Bestiary", "Ooze"])
    eras = fb.era_actors(real_scheme, REAL_ACTORS)
    check("era_actors / world_population read the repo's trees: every era actor keyed by name + type under [faction, era sub-folder] (955 BF court under Mushroom Regency & Kingdom, the incursion and 1035 BF line under Koopa Troop), "
          "the cohort toads under Liberated Toads / <cohort> with no era, the generated past selves flagged generated; the midlands mirror by its flags",
          all(len(v["path"]) == 2 and v["path"][1] == v["folder"] and v["era"] in ("955 BF", "1035 BF") for v in eras.values() if v["dir"] in ("peachs-castle-955", "bowsers-castle-1035", "cast/eras"))
          and eras[("koopatrol", "npc")]["path"] == ["Koopa Troop", "955 BF — Peach's Castle"] and eras[("princess peach (955 bf)", "npc")]["path"][0] == "Mushroom Regency & Kingdom"
          and eras[("omega bowser (1035 bf)", "npc")]["path"] == ["Koopa Troop", "1035 BF — Bowser's Castle"] and eras[("cackletta (1035 bf)", "npc")]["path"][0] == "Fawthful's Forces"
          and eras[("bowser (955 bf)", "character")]["generated"] and eras[("bowser (955 bf)", "character")]["path"] == ["Koopa Troop", "955 BF — Peach's Castle"]
          and eras[("sentry t", "npc")]["path"] == ["Liberated Toads", "Pond Patrol"] and eras[("sentry t", "npc")]["era"] is None and not eras[("sentry t", "npc")]["generated"]
          and len(fb.world_population(REAL_ACTORS)) >= 151
          and all(isinstance(path, list) for _, path in fb.world_population(REAL_ACTORS)), str({k: v["path"] for k, v in list(eras.items())[:5]}))

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

# ---- 1.9: the party roster, embedded ownership, art by URL — what check / check-packet refuse -----------------
roster = fb.load_roster()
check("load_roster reads actors/folders.json players.roster: the SEVEN player characters by live id, website id and name; one companion (the Steel Defender); the five retired ones are not players",
      len(roster["rows"]) == 7 and len(roster["ids"]) == 7 and roster["ids"].get("9u5pnP0zaqw8AQQv", {}).get("character") == "bowser"
      and roster["characters"]["dan_the_toad"]["actor"] == "IlzuThuR8upTtqtF" and "green t" not in roster["names"] and "waluigi" not in roster["names"] and "wario" not in roster["names"]
      and "salam" not in roster["names"] and "toad lee" not in roster["names"] and sorted(roster["names"]) == ["archie miser", "bowser", "eager", "feyward dan", "hjumpik deldkur", "markop judi", "remi"]
      and roster["companions"] == {"Q8InPZPmhqhpOY7g"} and roster["folder"] == "Players"
      and [r["name"] for r in roster["scheme"]["players"]["retired"]] == ["Green T", "Salam", "Toad Lee", "Waluigi", "Wario"], json.dumps({k: (len(v) if hasattr(v, "__len__") else v) for k, v in roster.items()}))
check("roster_row: by live id whatever the sheet type; by name only for a character sheet (the Liberated Toads' NPC 'Dan' is not Feyward Dan; an NPC statblock named Bowser is not the player's)",
      fb.roster_row({"_id": "9u5pnP0zaqw8AQQv", "name": "Bowser", "type": "npc"}, roster)["character"] == "bowser"
      and fb.roster_row({"_id": "zzzzzzzzzzzzzzzz", "name": "Bowser", "type": "character"}, roster)["character"] == "bowser"
      and fb.roster_row({"_id": "zzzzzzzzzzzzzzzz", "name": "Bowser", "type": "npc"}, roster) is None
      and fb.roster_row({"_id": "brg7b4npoBbXuB65", "name": "Dan", "type": "npc"}, roster) is None
      and fb.roster_row({"_id": "RSw8hpjH7kIEjAmm", "name": "Kirby", "type": "character"}, roster) is None)
check("is_companion: the Steel Defender by id or name; Wario's Motorbike left Players with Wario", fb.is_companion({"_id": "Q8InPZPmhqhpOY7g", "name": "x", "type": "npc"}, roster)
      and fb.is_companion({"_id": "zzzzzzzzzzzzzzzz", "name": "Steel Defender", "type": "npc"}, roster) and not fb.is_companion({"_id": "zzzzzzzzzzzzzzzz", "name": "Kirby", "type": "npc"}, roster)
      and not fb.is_companion({"_id": "y1amANPSbK9exY41", "name": "Wario's Motorbike", "type": "vehicle"}, roster))
perms = fb.load_permissions()
check("load_permissions resolves actors/folders.json players.permissions — Foundry user names → roster actor ids and levels: Hjumpik owns Bowser + Hjumpik Deldkur; Keaneu owns Archie, Eager, Feyward Dan; Martir owns Markop and observes Eager + Dan; Oscar owns Remi + the Steel Defender; nothing else; no problems",
      perms["problems"] == [] and perms["default"] == 0 and perms["names"] == ["Hjumpik", "Keaneu", "Martir", "Oscar"]
      and perms["users"]["Hjumpik"] == {"9u5pnP0zaqw8AQQv": 3, "Qir5aDX8bkL5lt1c": 3}
      and perms["users"]["Keaneu"] == {"pi25oGpjW0lCFtuF": 3, "VudZ3W313Y4FILs0": 3, "IlzuThuR8upTtqtF": 3}
      and perms["users"]["Martir"] == {"le5OCgY5x5nnKvkt": 3, "VudZ3W313Y4FILs0": 2, "IlzuThuR8upTtqtF": 2}
      and perms["users"]["Oscar"] == {"wBy4aV2AGHNqT4l1": 3, "Q8InPZPmhqhpOY7g": 3}
      and perms["actors"]["VudZ3W313Y4FILs0"] == {"Keaneu": 3, "Martir": 2} and len(perms["actors"]) == 8, json.dumps(perms))
bad_scheme = {"players": {"folder": "Players", "roster": [{"actor": "9u5pnP0zaqw8AQQv", "name": "Bowser"}], "companions": [{"actor": "Q8InPZPmhqhpOY7g", "name": "Steel Defender"}],
                          "permissions": {"default": 7, "users": {"Hjumpik": {"owner": ["Bowser", "Nobody"], "king": ["Bowser"]}, "hjumpik": {"owner": ["Bowser"]}, " ": {"owner": ["Bowser"]},
                                                                   "Oscar": {"owner": ["steel defender"], "observer": ["Steel Defender"]}, "Martir": "Bowser"}}}}
bad_perms = fb.load_permissions(bad_scheme, fb.load_roster(bad_scheme))
check("load_permissions reports what it cannot use — a default outside 0–3, an unknown level, a name not on the roster, a user listed twice (case), an empty user, a grant twice with two levels, a non-object — and keeps the rest (names match case-insensitively)",
      bad_perms["default"] == 0 and bad_perms["users"]["Hjumpik"] == {"9u5pnP0zaqw8AQQv": 3} and bad_perms["users"]["Oscar"] == {"Q8InPZPmhqhpOY7g": 3}
      and bad_perms["names"] == ["Hjumpik", "Oscar", "Martir"] and len(bad_perms["problems"]) == 7
      and all(any(needle in p for p in bad_perms["problems"]) for needle in (
          "default must be 0–3, not 7", "'Nobody' is not on the roster", "unknown level 'king'", "hjumpik is listed twice",
          "an empty user name", "Steel Defender is granted twice with different levels (3 and 2)", "users.Martir must be an object")), json.dumps(bad_perms["problems"]))
block = fb.players_payload()
check("players_payload — what combine puts in the live world's packet and split in the world manifest: the roster (7) and companions (1) with live ids, default 0, the user names, permissions by actor id",
      [r["name"] for r in block["roster"]] == ["Archie Miser", "Bowser", "Eager", "Feyward Dan", "Hjumpik Deldkur", "Markop Judi", "Remi"] and block["companions"] == [{"actor": "Q8InPZPmhqhpOY7g", "name": "Steel Defender"}]
      and block["default"] == 0 and block["users"] == ["Hjumpik", "Keaneu", "Martir", "Oscar"] and block["permissions"]["wBy4aV2AGHNqT4l1"] == {"Oscar": 3} and block["permissions"]["IlzuThuR8upTtqtF"] == {"Keaneu": 3, "Martir": 2}
      and block["folder"] == "Players" and fb.players_payload({"players": {}}) is None, json.dumps(block))
bad_block = {"roster": [{"actor": "short", "name": "X"}], "companions": [], "default": 5, "users": ["A"],
             "permissions": {"9u5pnP0zaqw8AQQv": {"B": 9}, "zzz": "no"}}
bad_msgs = fb.check_players_block(bad_block, [], "x")
check("check_players_block (check-packet): the real block passes; a short id, a bad default, a grant outside roster + companions, a user missing from players.users, a level outside 0..3 and a non-mapping are each one error; no block is fine, a malformed one is one error",
      fb.check_players_block(block, [], "x") == [] and fb.check_players_block(None, [], "x") == []
      and fb.check_players_block({"nope": 1}, [], "x") == ["x: players block is not {roster: [...], ...}"]
      and len(bad_msgs) == 7 and all(any(k in m for m in bad_msgs) for k in ("needs a 16-char actor id", "players.default 5", "grants on 9u5pnP0zaqw8AQQv", "missing from players.users", "level 9 is not 0..3", "grants on zzz", "players.permissions[zzz] must map")),
      "\n".join(bad_msgs))
check("invalid_ownership: -=default, a non-id key, a level outside -1..3, a non-mapping — on the actor and on its items / effects; a user-id deletion with null is fine",
      [w for w, _ in fb.invalid_ownership({"name": "a", "ownership": {"default": 0, "-=default": None}, "items": [{"name": "Wand", "ownership": {"u1": 3}}, {"name": "Ok", "ownership": {"default": 0, "-=7BMT1Aux3QVtq027": None, "7BMT1Aux3QVtq028": 3}}],
                                                "effects": [{"name": "Fx", "ownership": {"default": 9}}, {"name": "Bad", "ownership": []}]})] == ["actor", "item 'Wand'", "effect 'Fx'", "effect 'Bad'"]
      and fb.invalid_ownership({"name": "b", "ownership": {"default": 0}, "items": [{"name": "i"}]}) == [], str(fb.invalid_ownership({"ownership": {"-=default": None}})))
check("art_by_url lists every img / token / item icon that names repo art or a loopback server by URL (the 1.8 packets named 514 of them); a GM's link elsewhere is his business",
      [w for w, _ in fb.art_by_url({"img": "http://127.0.0.1:8765/portraits/bowser.png", "prototypeToken": {"texture": {"src": "portraits/bowser.png"}},
                                    "items": [{"name": "Wand", "img": "http://localhost:8765/Reputation-Matrix2/portraits/wand.webp"}, {"name": "Ok", "img": "icons/svg/item-bag.svg"}, {"name": "Elsewhere", "img": "https://i.imgur.com/x.png"}]})] == ["img", "item 'Wand'"],
      str(fb.art_by_url({"img": "http://127.0.0.1:8765/portraits/bowser.png", "items": [{"name": "Wand", "img": "http://localhost:8765/Reputation-Matrix2/portraits/wand.webp"}]})))
with tempfile.TemporaryDirectory() as tmp:
    bad = {"format": fb.FORMAT, "folders": [{"_id": "F1aaaaaaaaaaaaaa", "name": "Players", "folder": None}, {"_id": "F2aaaaaaaaaaaaaa", "name": "Orphan", "folder": "nope000000000000"}],
           "actors": [
               actor("Kirby", "RSw8hpjH7kIEjAmm", typ="character", flags={"waluipedia-mass-import": {"folderPath": ["Players"]}}),
               dict(actor("Bowser", "9u5pnP0zaqw8AQQv", typ="npc", img="http://127.0.0.1:8765/Reputation-Matrix2/portraits/bowser.png",
                          items=[{"_id": "kmqLJuIrEf2KPqwc", "name": "Wand", "type": "loot", "img": "icons/svg/item-bag.svg", "ownership": {"-=default": None}, "system": {"identifier": "bad—id"}}],
                          flags={"waluipedia-mass-import": {"folderPath": ["Koopa Troop"]}})),
               actor("Steel Defender", "Q8InPZPmhqhpOY7g", flags={"waluipedia-mass-import": {"folderPath": ["Players"]}}),
               actor("Sans", "zzzzzzzzzzzzzzzz", typ="character", flags={"waluipedia-mass-import": {"folderPath": ["Snowdin Bone-Line"]}}),
           ]}
    bad_path = os.path.join(tmp, "import.json")
    with open(bad_path, "w", encoding="utf-8") as fh:
        json.dump(bad, fh)
    n, errs, warns = fb.check_packet(bad_path)
    text = "\n".join(errs)
    check("check-packet: a non-roster actor in Players is an ERROR (a character sheet does not make a player character) — the companion and a character-sheet NPC elsewhere are not",
          n == 4 and "Kirby sits in Players but is not on the party roster" in text and "Steel Defender" not in text and "Sans" not in text, text)
    check("check-packet: a roster character on an NPC sheet, an item identifier dnd5e rejects, an ownership deletion Foundry refuses, art by URL, a folder with an unknown parent — all errors; the roster character outside Players a warning",
          "Bowser is on the party roster but is a 'npc' sheet" in text and "'bad—id' is not letters/digits/-/_" in text and "ownership key '-=default'" in text
          and "names art by URL" in text and "folder 'Orphan' names a parent" in text and any("sits in Koopa Troop, not Players" in w for w in warns), text)
    check("check-packet --allow-art-url (the opt-in art base) accepts the URL and nothing else changes",
          len(fb.check_packet(bad_path, allow_art_url=True)[1]) == len(errs) - sum(1 for e in errs if "art by URL" in e) and sum(1 for e in errs if "art by URL" in e) == 2
          and "art by URL" not in "\n".join(fb.check_packet(bad_path, allow_art_url=True)[1]))
    with open(os.path.join(tmp, "stale.json"), "w", encoding="utf-8") as fh:
        json.dump(dict(bad, format="waluipedia-actors/0"), fh)
    check("check-packet refuses a packet of another format, and names a file outside the repo by its basename", fb.check_packet(os.path.join(tmp, "stale.json"))[1] == ["stale.json: format 'waluipedia-actors/0' is not waluipedia-actors/1"])
    good = {"format": fb.FORMAT, "folders": [{"_id": "F1aaaaaaaaaaaaaa", "name": "Players", "folder": None}],
            "actors": [actor("Bowser", "9u5pnP0zaqw8AQQv", typ="character", flags={"waluipedia-mass-import": {"folderPath": ["Players"]}}),
                       actor("Steel Defender", "Q8InPZPmhqhpOY7g", flags={"waluipedia-mass-import": {"folderPath": ["Players"]}}),
                       actor("Sans", "zzzzzzzzzzzzzzzz", typ="character", flags={"waluipedia-mass-import": {"folderPath": ["Snowdin Bone-Line"]}})]}
    good_path = os.path.join(tmp, "good.json")
    with open(good_path, "w", encoding="utf-8") as fh:
        json.dump(good, fh)
    check("check-packet: a clean packet passes with no errors", fb.check_packet(good_path)[1] == [], str(fb.check_packet(good_path)[1]))
    import subprocess
    cli = subprocess.run([sys.executable, os.path.join(ROOT, "tools", "foundry-bridge.py"), "check-packet", bad_path, good_path], stdout=subprocess.PIPE, stderr=subprocess.STDOUT, encoding="utf-8", errors="replace")
    check("the check-packet command exits 1 on errors and sums the packets", cli.returncode == 1 and "FAIL check-packet: 7 actors in 2 packet(s)" in cli.stdout, cli.stdout[-300:])
    cli_ok = subprocess.run([sys.executable, os.path.join(ROOT, "tools", "foundry-bridge.py"), "check-packet", good_path], stdout=subprocess.PIPE, stderr=subprocess.STDOUT, encoding="utf-8", errors="replace")
    check("…and 0 when clean", cli_ok.returncode == 0 and cli_ok.stdout.startswith("OK check-packet: 3 actors in 1 packet(s), 0 error(s)"), cli_ok.stdout[-300:])
check("the mirror's check (foundry-bridge.py check) applies the same roster rules: the repo's world mirror passes them",
      fb.check([os.path.join(ROOT, "Reputation-Matrix2", "actors", "worlds", "midlands")])[1] == [])

# ---- 1.9.3: a broken species / background beside the one the sheet applies is a leftover — dropped, not repaired --------
def race(_id, name, ident, adv=0):
    return {"_id": _id, "name": name, "type": "race", "img": "icons/svg/item-bag.svg", "system": {"identifier": ident, "advancement": [{"type": "Size"}] * adv}}
def background(_id, name, ident):
    return {"_id": _id, "name": name, "type": "background", "img": "icons/svg/item-bag.svg", "system": {"identifier": ident}}
with tempfile.TemporaryDirectory() as tmp:
    eager = actor("Eager", "VudZ3W313Y4FILs0", typ="character", items=[
        race("d5c6b4b8da1e46c8", "Toad — Eager Variant", "toad-—-eager-variant"),            # broken, never applied
        background("5f606a64c6bb43f3", "Disaster Inc. Catastrophe Scout", "disaster-inc.-catastrophe-scout"),
        race("sctSWwZ7EHsxJlwW", "Grung", "grung", adv=3), background("fN1FAHmzHWPx6Ky5", "Slave", "slave"),
        {"_id": "218ad632c6e149d9", "name": "Fighting Style — Archery", "type": "feat", "img": "icons/svg/item-bag.svg", "system": {"identifier": "fighting-style-—-archery"}}])
    eager["system"]["details"] = {"race": "sctSWwZ7EHsxJlwW", "background": "fN1FAHmzHWPx6Ky5"}
    # details.race names the BROKEN copy: not a leftover (the sheet uses it) — repaired as before, the Grung stays a stand-in
    lone = actor("Lone", "Ln1aaaaaaaaaaaaa", typ="character", items=[race("Bad3aaaaaaaaaaaa", "Toad — Lone Variant", "toad-—-lone"), race("Grg3aaaaaaaaaaaa", "Grung", "grung", adv=3)])
    lone["system"]["details"] = {"race": "Bad3aaaaaaaaaaaa"}
    # no details at all (an older sheet): nothing is dropped
    blank = actor("Blank", "Bk1aaaaaaaaaaaaa", typ="character", items=[race("Bad4aaaaaaaaaaaa", "Toad — Blank Variant", "toad-—-blank"), race("Grg4aaaaaaaaaaaa", "Grung", "grung", adv=3)])
    # an NPC is never a singleton case
    npc = actor("Guard", "Np1aaaaaaaaaaaaa", typ="npc", items=[race("Bad5aaaaaaaaaaaa", "Toad — Guard", "toad-—-guard"), race("Grg5aaaaaaaaaaaa", "Grung", "grung")])
    npc["system"]["details"] = {"race": "Grg5aaaaaaaaaaaa"}
    shells = fb.singleton_shells(eager)
    check("singleton_shells: the two broken items beside the applied Grung / Slave, each paired with the one the sheet uses; the broken feat is not one of a kind",
          [(it["name"], live["name"]) for it, live in shells] == [("Toad — Eager Variant", "Grung"), ("Disaster Inc. Catastrophe Scout", "Slave")], str(shells))
    check("singleton_shells: details naming the broken copy, no details at all, an NPC — nothing is a leftover",
          fb.singleton_shells(lone) == [] and fb.singleton_shells(blank) == [] and fb.singleton_shells(npc) == [])
    exp = {"format": fb.FORMAT, "exportedFrom": "test-world", "exportedAt": "2026-10-05T00:00:00Z", "folders": [{"_id": "F1aaaaaaaaaaaaaa", "name": "Players", "type": "Actor", "folder": None}],
           "actors": [dict(eager, folder="F1aaaaaaaaaaaaaa"), lone, blank, npc]}
    exp_path = os.path.join(tmp, "test-world-all-actors.json")
    with open(exp_path, "w", encoding="utf-8") as fh:
        json.dump(exp, fh)
    out = os.path.join(tmp, "worlds", "test-world")
    written, _pruned, manifest = fb.split(exp_path, out)
    eager_doc = read(os.path.join(out, "Players", "fvtt-Actor-eager-VudZ3W313Y4FILs0.json"))
    lone_doc = read(os.path.join(out, "fvtt-Actor-lone-Ln1aaaaaaaaaaaaa.json"))
    check("split drops the leftovers (the mirror no longer carries them, so the module deletes the world's copies instead of offering a swap) and still repairs the feat",
          [it["name"] for it in eager_doc["items"]] == ["Grung", "Slave", "Fighting Style — Archery"] and eager_doc["items"][2]["system"]["identifier"] == "fighting-style-archery", str([it["name"] for it in eager_doc["items"]]))
    check("split: the applied-but-broken species is repaired, not dropped; the blank sheet and the NPC keep both",
          [it["name"] for it in lone_doc["items"]] == ["Toad — Lone Variant", "Grung"] and lone_doc["items"][0]["system"]["identifier"] == "toad-lone"
          and len(read(os.path.join(out, "fvtt-Actor-blank-Bk1aaaaaaaaaaaaa.json"))["items"]) == 2 and len(read(os.path.join(out, "fvtt-Actor-guard-Np1aaaaaaaaaaaaa.json"))["items"]) == 2)
    check("manifest: leftoversDropped names actor, item, type and the applied one; identifiersRepaired no longer lists the dropped items",
          manifest["leftoversDropped"] == [{"actor": "Eager", "item": "Toad — Eager Variant", "type": "race", "applied": "Grung"},
                                           {"actor": "Eager", "item": "Disaster Inc. Catastrophe Scout", "type": "background", "applied": "Slave"}]
          and sorted(r["item"] for r in manifest["identifiersRepaired"]) == ["Fighting Style — Archery", "Toad — Blank Variant", "Toad — Guard", "Toad — Lone Variant"], json.dumps(manifest["identifiersRepaired"], ensure_ascii=False))
    _n, errs, warns = fb.check([out])
    check("check: a character with two of a kind is a warning naming the one the sheet applies (or that details names none) — never an error",
          errs == [] and any("2 race items (Toad — Lone Variant / Grung) — dnd5e keeps one per character; the sheet applies 'Toad — Lone Variant'" in w for w in warns)
          and any("Toad — Blank Variant / Grung" in w and "names none of them" in w for w in warns) and not any("Eager" in w and "race items" in w for w in warns), "\n".join(errs + warns))
    # a mirror an older bridge split (1.9.2): the shells are there with repaired identifiers, the manifest remembers the repairs — heal drops them
    old_out = os.path.join(tmp, "worlds", "old-world")
    old_eager = copy.deepcopy(eager)
    for it in old_eager["items"]:
        it["system"]["identifier"] = fb.slug_identifier(it["system"]["identifier"])
    fb.write_text(os.path.join(old_out, "Players", "fvtt-Actor-eager-VudZ3W313Y4FILs0.json"), fb.render(old_eager))
    fb.write_text(os.path.join(old_out, "manifest.json"), fb.render({"actorCount": 1, "identifiersRepaired": [
        {"actor": "Eager", "item": "Toad — Eager Variant", "key": "identifier", "from": "toad-—-eager-variant", "to": "toad-eager-variant"},
        {"actor": "Eager", "item": "Disaster Inc. Catastrophe Scout", "key": "identifier", "from": "disaster-inc.-catastrophe-scout", "to": "disaster-inc-catastrophe-scout"},
        {"actor": "Eager", "item": "Fighting Style — Archery", "key": "identifier", "from": "fighting-style-—-archery", "to": "fighting-style-archery"}], "actors": []}))
    healed = fb.heal(old_out)
    healed_doc = read(os.path.join(old_out, "Players", "fvtt-Actor-eager-VudZ3W313Y4FILs0.json"))
    healed_manifest = read(os.path.join(old_out, "manifest.json"))
    check("heal: the manifest's repaired species / background beside the applied ones go, the repaired feat stays, the manifest records the drops (after identifiersRepaired)",
          [h[2] for h in healed] == ["Toad — Eager Variant", "Disaster Inc. Catastrophe Scout"] and [it["name"] for it in healed_doc["items"]] == ["Grung", "Slave", "Fighting Style — Archery"]
          and len(healed_manifest["leftoversDropped"]) == 2 and list(healed_manifest.keys()) == ["actorCount", "identifiersRepaired", "leftoversDropped", "actors"], str(healed))
    check("heal is idempotent (and a mirror without a manifest is left alone)", fb.heal(old_out) == [] and fb.heal(os.path.join(tmp, "worlds", "nowhere")) == [])

print(f"foundry bridge: {len(OKS)} ok, {len(FAILS)} failed")
for f in FAILS:
    print("  FAIL " + f)
for o in OKS:
    print("  ok   " + o)
sys.exit(1 if FAILS else 0)
