#!/usr/bin/env python3
"""Smoke-test the NPC Forge asset inventory and explicit publish gate.

This test deliberately uses a tiny repository fixture and no image decoder: a
real plate is produced by the existing cut tests, while this test proves that
publishing is a separate, auditable operation after review.
"""
import importlib.util
import json
import os
import shutil
import tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

def load():
    spec = importlib.util.spec_from_file_location("npc_forge_assets", os.path.join(ROOT, "tools", "npc-forge.py"))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def main():
    mod = load()
    forge = mod.Forge()
    tmp = tempfile.mkdtemp(prefix="npc-forge-assets-")
    try:
        rm = os.path.join(tmp, "Reputation-Matrix2")
        actors = os.path.join(rm, "actors")
        os.makedirs(os.path.join(rm, "data", "forge"), exist_ok=True)
        os.makedirs(os.path.join(actors, "worlds", "demo", "Test Group", "General"), exist_ok=True)
        os.makedirs(os.path.join(rm, "portraits", "demo"), exist_ok=True)
        scheme_path = os.path.join(actors, "folders.json")
        json.dump({"players": {"world": "demo", "folder": "Players"},
                   "groups": {"Test Group": {"color": "#123456", "faction": "test"}},
                   "packets": {}}, open(scheme_path, "w", encoding="utf-8"))
        json.dump([{"id": "demo-character", "name": "Demo Character", "image": "portraits/demo-current.png"}],
                  open(os.path.join(rm, "data", "characters.json"), "w", encoding="utf-8"))
        current = os.path.join(rm, "portraits", "demo-current.png")
        open(current, "wb").write(b"old")
        actor = {"_id": "1234567890ABCDEF", "name": "Demo Character", "type": "npc",
                 "img": "portraits/demo-current.png", "prototypeToken": {"texture": {"src": "portraits/demo-current.png"}},
                 "system": {}, "items": [], "flags": {
                     "waluipedia-mass-import": {"folderPath": ["Test Group", "General"]},
                     "waluipedia-sheets": {"characterId": "demo-character"}}}
        source = os.path.join(actors, "worlds", "demo", "Test Group", "General", "actor.json")
        json.dump(actor, open(source, "w", encoding="utf-8"))
        roster = {"format": "waluipedia-forge-roster/1", "packet": "demo", "name": "Demo",
                  "group": "Test Group", "color": "#123456", "subfolders": {"General": {"color": "#123456"}},
                  "portraits": "portraits/demo", "renders": "npc-forge/demo/renders", "style": "style",
                  "framing": "full body", "negative": "none", "entries": [{
                      "id": "demo-character", "name": "Demo Character", "folder": "General", "type": "humanoid",
                      "size": "med", "cr": 1, "look": "a demo character", "source_actor": "worlds/demo/Test Group/General/actor.json",
                      "source_actor_id": actor["_id"], "source_folder_path": ["Test Group", "General"]}]}
        json.dump(roster, open(os.path.join(rm, "data", "forge", "demo.json"), "w", encoding="utf-8"))

        # Redirect the modules exactly as the existing NPC Forge test does.
        forge_mod = mod
        forge_mod.ROOT = tmp
        forge.bfp.RM = rm
        forge.bfp.ROSTERS = os.path.join(rm, "data", "forge")
        forge.bfp.ACTORS_ROOT = actors
        forge.bfp.P955.FOLDER_SCHEME = scheme_path
        forge_mod.FOLDER_SCHEME = scheme_path

        catalog = forge.asset_catalog(match="Demo Character")
        assert catalog["counts"]["assets"] == 1
        assert catalog["counts"]["missing_fullbody"] == 1
        assert catalog["assets"][0]["website_fullbody_exists"] is False

        plate = os.path.join(rm, "portraits", "demo", "demo-character.png")
        open(plate, "wb").write(b"transparent plate")
        forge.review_entry("demo", "demo-character", "accepted", "looked good")
        published = forge.replace_entry("demo", "demo-character", website="fullBody", also_foundry=True)
        assert published["website"] and published["foundry"] == 1
        article = json.load(open(os.path.join(rm, "data", "characters.json"), encoding="utf-8"))[0]
        changed = json.load(open(source, encoding="utf-8"))
        assert article["fullBody"] == "portraits/demo/demo-character.png"
        assert changed["img"] == article["fullBody"]
        assert changed["prototypeToken"]["texture"]["src"] == article["fullBody"]
        manifest = json.load(open(os.path.join(rm, "npc-forge", "demo", "replacements.json"), encoding="utf-8"))
        assert manifest["replacements"][0]["actors"][0]["img"] == "portraits/demo-current.png"
        assert forge.asset_catalog(match="Demo Character")["counts"]["missing_fullbody"] == 0
        print("npc forge assets: inventory, review gate, website + Foundry replacement OK")
    finally:
        shutil.rmtree(tmp, ignore_errors=True)

if __name__ == "__main__":
    main()
