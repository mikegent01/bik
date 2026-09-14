#!/usr/bin/env python3
"""Move the Pond Patrol docket's per-person data onto the characters.

The docket used to live entirely inside `factions.json`, as an array of
`target` objects under `liberated_toads.factionDocket.accountability`. Each
target duplicated the person it described - name, portrait, article link - and
sat in a file nobody opens when they file a session. So when a session put
docket members on the page, the docket did not move: its `lastSeen` values
were still Day 20/21 while newer filings had shipped.

That is a structural problem, not an oversight. A person's standing with the
Pond Patrol is a fact about the person, so it belongs on the person. Moving it
to `characters.json` means the docket is maintained where the rest of a
character's record is already being maintained, and the register becomes a
*view* over the cast rather than a second hand-kept list that has to be
remembered separately.

Each migrated character gains a `pondPatrol` block:

    "pondPatrol": {
      "docketId": "archie", "status": "at_large", "priority": "high",
      "added": ..., "lastSeen": ..., "charges": [...], "evidence": [...],
      "notes": ..., "speakerNote": ..., "restorationPath": ...
    }

The faction file keeps everything that is genuinely faction-level - the
authority, the resolution, standing orders, pillars, resolved cases and
unresolved threads - and keeps `targets` ONLY for entries with no character
record (the Green Decoy, whose identity is unknown by design).

Usage:
    python3 tools/migrate-pond-patrol-to-characters.py            # dry run
    python3 tools/migrate-pond-patrol-to-characters.py --write
    python3 tools/migrate-pond-patrol-to-characters.py --check
"""
import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "Reputation-Matrix2" / "data"
CHARS = DATA / "characters.json"
FACTIONS = DATA / "factions.json"

# Fields that describe the PERSON's standing and move onto the character.
MOVE = ("status", "priority", "added", "lastSeen", "charges", "evidence",
        "notes", "speakerNote", "restorationPath", "portrait")


def load(p):
    with p.open(encoding="utf-8") as fh:
        return json.load(fh)


def dump(p, doc):
    p.write_text(json.dumps(doc, ensure_ascii=False, indent=2) + "\n",
                 encoding="utf-8")


def faction_list(doc):
    l = doc if isinstance(doc, list) else doc.get("factions", doc)
    return list(l.values()) if isinstance(l, dict) else l


def accountability(fdoc):
    for f in faction_list(fdoc):
        if isinstance(f, dict) and f.get("id") == "liberated_toads":
            return f.get("factionDocket", {}).get("accountability")
    return None


def plan(chars, acc):
    """-> (moves, orphans). moves: [(character, target)]."""
    by_id = {c.get("id"): c for c in chars if isinstance(c, dict)}
    moves, orphans = [], []
    for t in acc.get("targets") or []:
        aid = t.get("articleId")
        ch = by_id.get(aid) if aid else None
        if ch is None:
            orphans.append(t)
        else:
            moves.append((ch, t))
    return moves, orphans


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--write", action="store_true")
    ap.add_argument("--check", action="store_true")
    args = ap.parse_args()

    chars = load(CHARS)
    fdoc = load(FACTIONS)
    acc = accountability(fdoc)
    if acc is None:
        print("pond patrol: liberated_toads accountability block not found")
        return 1

    if args.check:
        # Post-migration invariant: every character-backed docket entry lives
        # on its character, and factions.json holds only identity-unknown ones.
        have = [c for c in chars if isinstance(c, dict) and c.get("pondPatrol")]
        left = acc.get("targets") or []
        bad = [t.get("id") for t in left if t.get("articleId")]
        if bad:
            print("pond patrol: these docket targets still duplicate a character "
                  "record in factions.json: " + ", ".join(map(str, bad)))
            print("  run: python3 tools/migrate-pond-patrol-to-characters.py --write")
            return 1
        print(f"pond patrol: {len(have)} docket entries on characters, "
              f"{len(left)} identity-unknown entry(ies) on the faction.")
        return 0

    moves, orphans = plan(chars, acc)
    for ch, t in moves:
        print(f"  {t.get('id'):<14} -> characters.json[{ch['id']}].pondPatrol")
    for t in orphans:
        print(f"  {t.get('id'):<14} stays on the faction (no character record)")

    if not args.write:
        print(f"\n{len(moves)} to move, {len(orphans)} to keep. "
              f"Re-run with --write.")
        return 0

    for ch, t in moves:
        block = {"docketId": t.get("id")}
        for k in MOVE:
            if t.get(k) is not None:
                block[k] = t[k]
        ch["pondPatrol"] = block

    acc["targets"] = orphans
    acc["_targetsNote"] = ("Per-person docket data now lives on the character "
                           "records in characters.json under `pondPatrol`. "
                           "Only entries with no character record (identity "
                           "unknown) remain here. See "
                           "tools/migrate-pond-patrol-to-characters.py.")
    dump(CHARS, chars)
    dump(FACTIONS, fdoc)
    print(f"\nmoved {len(moves)} onto characters.json; "
          f"{len(orphans)} kept on the faction")
    return 0


if __name__ == "__main__":
    sys.exit(main())
