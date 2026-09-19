#!/usr/bin/env python3
"""Take the live Bowser export into Players.json as the 12th party actor.

Deterministic, stdlib only, idempotent. Re-running is a no-op.

WHY THIS SCRIPT AND NOT A CONVERSION
------------------------------------
Bowser already exists twice in this repo:

  1. ``Reputation-Matrix2/tools/item sheet examples/fvtt-Actor-bowser,-warlord-
     of-darkland-7cIOR2o5eLfnODP2.json`` — a CR-15 NPC statblock, ``type:
     "npc"``, 14 items, HP 230, natural AC 21, Legendary Actions. A boss.
  2. ``bowser.json`` at the repo root — a LIVE export from the campaign world
     ``dnd-part-2``, ``type: "character"`` already, level 8 Fighter (Rune
     Knight), Tortle, 122 items, HP 72, one level of exhaustion and 121gp in
     his pocket.

The second is the same Foundry world every other party member was exported
from (``Players.json`` actors all carry ``exportSource.worldId ==
"dnd-part-2"``), so this is not a reconstruction to be argued about — it is
the sheet being played at the table.

That makes this an INTAKE, not a conversion. The repo already settled this
question for Waluigi, and ``Reputation-Matrix2/actors/README.md`` records the
ruling: a live export supersedes a built one, "trust the game, not the
reconstruction". Writing a ``build-bowser-pc.py`` that reasons a Barbarian out
of the boss statblock would have produced a character the table has never
played — wrong level, wrong class, wrong species, wrong hit points.

So the NPC statblock stays exactly where it is, as the boss he still is in
the fiction, and the live sheet joins the roster through the documented
``Players.json -> split-players.py -> rebuild-actors.py`` pipeline.

WHAT THIS SCRIPT DOES, AND ONLY THIS
------------------------------------
* Appends the ``bowser.json`` document to ``Players.json``.
* Gives it the ``_id`` its own export names (``kzNSSjAedvhKTfZC``, read from
  ``_stats.exportSource.uuid``) — a root-level Foundry export omits ``_id``
  but the split pipeline needs it for the filename, and inventing one would
  break the link back to the live world.
* Gives it a ``sort`` value continuing the file's existing sequence.
* Nothing else. No stats are touched, no items added or removed, no class
  decisions made. Every mechanical fault in the sheet is the sanitizer's job
  and is reported by ``rebuild-actors.py``.

Run from the repo root:
    python3 tools/add-bowser-to-players.py
    python3 tools/add-bowser-to-players.py --check
"""
from __future__ import annotations

import argparse
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PLAYERS = os.path.join(ROOT, "Players.json")
SRC = os.path.join(ROOT, "bowser.json")

NAME = "Bowser"


def load(path):
    with open(path, encoding="utf-8") as fh:
        return json.load(fh)


def save(actors):
    # Byte-stable: the file ships as indent=2, literal UTF-8, no EOF newline.
    with open(PLAYERS, "w", encoding="utf-8") as fh:
        fh.write(json.dumps(actors, indent=2, ensure_ascii=False))


def actor_id_from_export(doc):
    """A root-level Foundry export drops _id; its own uuid still carries it."""
    uuid = (((doc.get("_stats") or {}).get("exportSource") or {})
            .get("uuid") or "")
    if uuid.startswith("Actor."):
        return uuid.split(".", 1)[1]
    return None


def build_entry(actors, doc):
    entry = json.loads(json.dumps(doc))      # never mutate the source file
    actor_id = actor_id_from_export(doc)
    if not actor_id:
        raise SystemExit("FATAL: bowser.json has no exportSource uuid to take "
                         "an _id from; refusing to invent one")
    entry["_id"] = actor_id
    sorts = [a.get("sort") or 0 for a in actors]
    entry["sort"] = (max(sorts) if sorts else 0) + 100000
    # Key order matching the other Players.json entries.
    order = ["name", "type", "_id", "img", "system", "prototypeToken", "items",
             "effects", "folder", "sort", "ownership", "flags", "_stats"]
    return {k: entry[k] for k in order if k in entry}


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true",
                    help="report only; write nothing")
    args = ap.parse_args()

    if not os.path.isfile(SRC):
        print("FATAL: %s not found" % SRC)
        return 2

    actors = load(PLAYERS)
    doc = load(SRC)

    existing = [a for a in actors if a.get("name") == NAME]
    if existing:
        print("Players.json intake: %s already present (%d actors); no change."
              % (NAME, len(actors)))
        return 0

    if args.check:
        print("Players.json intake: %s is MISSING from the roster (%d actors)."
              % (NAME, len(actors)))
        print("  run: python3 tools/add-bowser-to-players.py")
        return 1

    entry = build_entry(actors, doc)
    actors.append(entry)
    save(actors)

    cls = [i for i in entry["items"] if i["type"] == "class"]
    sub = [i["name"] for i in entry["items"] if i["type"] == "subclass"]
    print("Players.json intake: added %s as actor %d" % (NAME, len(actors)))
    print("  _id       : %s (from its own exportSource uuid)" % entry["_id"])
    print("  type      : %s" % entry["type"])
    print("  class     : %s %s" % (cls[0]["name"],
                                   cls[0]["system"]["levels"]) if cls else "?")
    print("  subclasses: %s" % ", ".join(sub))
    print("  items     : %d" % len(entry["items"]))
    print("\nNext: python3 tools/split-players.py && python3 tools/rebuild-actors.py")
    return 0


if __name__ == "__main__":
    sys.exit(main())
