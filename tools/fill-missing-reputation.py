#!/usr/bin/env python3
"""Author reputation onto the 11 scored records that carry none.

One-shot, idempotent, auditable. Run once; re-running is a no-op because every
record is skipped if it already carries `reputationChanges` or `effects`.

Why a script rather than hand edits: `events.json` is 4 MB on one line-per-key
JSON dump, and the root README forbids reformatting a whole data file to add
one entry. Round-tripping through `json.dumps(indent=2, ensure_ascii=False)`
reproduces the existing bytes exactly (verified before writing), so the diff
contains only the added keys.

Every delta below is traceable to a named action in the record's own prose,
per `Reputation-Matrix2/README.md`:

    "Add modifiers only when the article contains a believable cause ...
     the number should be auditable from the story."

No `_generatedReputation` marker is written: this is hand-authored work, and
`docs/BATTLES_GUIDE.md` is explicit that the marker is provenance, not
decoration.

Key placement rules followed:
  · `reputationChanges` is operator-keyed, faction-valued, signed.
  · `effects` is the record-level factional outcome; the engine applies it to
    participants at EFFECTS_SHARED_WEIGHT = 0.25 and never lets it overwrite
    an authored personal delta.
  · Paired event/battle records do NOT both carry the same deltas. The event
    owns the personal deltas; its battle carries only the record-level
    `effects`, so the pair does not double-count into a standing.
  · Notoriety is not approval. Hostile attention is authored negative and
    lets Pressure carry the intensity (docs/run-reports/2026-09-03-two-axis).
"""

from __future__ import annotations

import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "Reputation-Matrix2" / "data"

# ---------------------------------------------------------------------------
# EVENTS
# ---------------------------------------------------------------------------

EVENTS = {
    # 872 BF. Liam runs a DGK retrieval Central Command says it never issued;
    # Director Vale arrives with a genuine Clearance Level 5 badge and no
    # authorisation, overrules the operation on a live line, and keeps Liam's
    # phone. Waluigi and Wario are commentary voices, not participants in the
    # house — no personal delta for either.
    "the_dread_mansion_incursion": {
        "reputationChanges": {
            "waluigi": {"dgk": -3},
        },
        "effects": {"dgk": -12},
        "reputationNotes": {
            "waluigi": "Filed the Central Command contradiction as the case rather than the haunting, which is not how the Directorate would have preferred it written up.",
            "_record": "The DGK ends the night with a Level 5 director and its own Central Command in open contradiction on a recorded line, an operator ordered to stand down by a superior running nothing, and a confiscated phone that has never been recovered. The damage is institutional and lands on the Directorate, not on any individual.",
        },
    },

    # 922 BF, Feyward clock. The library is retaken for its own sake — the
    # first room in the manor anybody defends as a room. Red the kitchen
    # commander is contacted and is not a filed faction; no delta for her.
    "feyward_library_reclamation_and_the_kitchen": {
        "reputationChanges": {
            "hjumpik": {"connectopia_pioneers_guild": 4},
            "waluigi": {"connectopia_pioneers_guild": 3},
        },
        "effects": {"connectopia_pioneers_guild": 6},
        "reputationNotes": {
            "hjumpik": "Abandoned the standing order to go upstairs, set a marching order with the battered fairy at the front, and retook the Overgrown Library as a room worth holding.",
            "waluigi": "Argued the plants were weak enough to take and was right; the collection survived the shambling mound.",
            "_record": "The first reclamation in the manor undertaken for the room's own sake rather than as a route somewhere else.",
        },
    },

    # An amended, unverified newspaper clipping. Waluigi is explicitly "not a
    # witness to the alleged encounter". DELIBERATE ABSTENTION: no faction
    # changed its opinion of anybody, because nothing in the record is
    # confirmed to have happened. Recorded rather than left blank so the next
    # pass does not read the gap as unfinished work.
    "promo_mario_newspaper": {
        "reputationChanges": {},
        "effects": {},
        "reputationNotes": {
            "_record": "Deliberate abstention. This is a review of an abridged clipping, amended by a recovered account Waluigi did not witness; the encounter itself is undated and unverified, and the record's own status is unverified. No faction can be said to have changed its opinion of anyone on this evidence. Left empty on purpose — do not fill it without a confirming filing.",
        },
    },

    # 30 Harvestide 1040. The unmasking, the sealed door, the descent. Paired
    # with the_skittering_grove_descent_battle, which carries effects only.
    "the_belly_of_the_beast": {
        "reputationChanges": {
            "remi_akamatsu_full_backstory": {"disaster_inc": 6, "iron_legion": -3},
            "archie_miser": {"disaster_inc": 4, "iron_legion": -5},
            "markop": {"disaster_inc": 5, "liberated_toads": 3},
            "wario": {"wario_enterprise": -3},
            "dan": {"liberated_toads": 4},
        },
        "effects": {"disaster_inc": 8, "iron_legion": -4},
        "reputationNotes": {
            "remi_akamatsu_full_backstory": "Pinned under the Scorncrow at point-blank range, fired a musket into its face and produced the single piece of hard intelligence the arc turns on: it bleeds human blood.",
            "archie_miser": "Emptied every reserve into one fire cast that killed the tree — and sealed the party's only exit doing it. The Legion inside the grove now has an arsonist on the same side of a door that no longer opens.",
            "markop": "Solved the door twice, pried the jaws, rigged the descent rope, and wrote his reasoning down.",
            "wario": "Took four Murder of Crows attacks and retreated on morale, having sold the party the elixir that brought them there.",
            "dan": "Went down first under the crows and spent every point he owned healing himself back onto the front of the marching order.",
            "_record": "Disaster Inc. came out of the night with the Scorncrow unmasked and no way home; the Iron Legion was found inside a place with one mouth and no marched route that accounts for it.",
        },
    },

    # 1035 BF. Luigi recovered alive. Kat and Ana followed without permission
    # and produced the confirmation; Dr. Toad treated the burns. Neither is a
    # filed faction, so the credit lands on the crews that are.
    "the_garden_above_the_fire": {
        "reputationChanges": {
            "waluigi": {"wario_enterprise": 5, "mushroom_regency": 4},
            "wario": {"wario_enterprise": 4},
        },
        "effects": {"mushroom_regency": 6, "wario_enterprise": 5},
        "reputationNotes": {
            "waluigi": "Chose the lava-moat lead over Wario's objection, recovered Luigi alive from the volcanic tunnels, and answered the question Luigi meant for Mario.",
            "wario": "Held the prisoner, argued against the lead, then carried Luigi to Star Hill himself and settled the clinic.",
            "_record": "A Mushroom Kingdom favourite was recovered alive and burned rather than lost over the falls, and the crew that did it was Wario's.",
        },
    },

    # 922 BF, Feyward clock. Custody, a failed contract, and the Colour
    # Division. The Division is filed in factions.json but is NOT in
    # LORE_FACTIONS, so it currently renders no standings panel — see
    # docs/notes/REPUTATION_ON_ARTICLES_PLAN.md item C. The delta is authored
    # anyway: the data is correct, the renderer is what needs fixing.
    "feyward_i_cant_afford_not_to_care": {
        "reputationChanges": {
            "hjumpik": {"color_division": -8, "mages_guild": -10},
            "waluigi": {"color_division": -5},
        },
        "effects": {"color_division": -6, "mages_guild": -8},
        "reputationNotes": {
            "hjumpik": "His Aegis Magi engagement was declared failed and over; the Division took two of his people as leverage against the overdue contract, and he refused to surrender the only asset that would have satisfied them.",
            "waluigi": "Taken into Colour Division custody as leverage, was out of the cuffs before anybody noticed, and has not mentioned it.",
            "_record": "A Mages' Guild contract failed publicly and the Colour Division took hostages over it — cuffs rather than mage cages, agreed without argument, which is the part worth filing.",
        },
    },
    # NOTE — the_tape_and_the_wario_files and judgement_in_the_grove are NOT
    # filed here. Both are generator-owned records: `tools/build-tape-and-files-
    # session.py` and `tools/build-judgement-in-the-grove.py` rebuild them and
    # `tools/check-all.py` fails if the filed JSON drifts from the generator.
    # Their reputation is authored in those generators instead, which is the
    # rule the root README states: never hand-edit a generated file, edit the
    # thing that generates it. Same applies to judgement_in_the_grove_battle.
}

# ---------------------------------------------------------------------------
# BATTLES
#
# The battle paired to an event above carries ONLY record-level `effects`.
# Authoring the same personal deltas on both halves of a session would count
# every operator twice into their standing — `_buildRepEventCache()` walks
# events and battles alike and sums whatever it finds.
# ---------------------------------------------------------------------------

BATTLES = {
    # 722 BF. A generated historical record. The Shadow Guild and the Block
    # Farm Militia are not in any faction registry, and no party operator was
    # present — this predates every operator by three centuries. Record-level
    # only, and deliberately small.
    "battle_of_the_mistral_farmstead": {
        "reputationChanges": {},
        "effects": {},
        "reputationNotes": {
            "_record": "Deliberate abstention. Chillwind 15, 722 BF — three centuries before any filed operator existed, fought between a militia and a guild that hold no record in the faction registry. There is nobody for this to move.",
        },
    },

    "the_skittering_grove_descent_battle": {
        "reputationChanges": {},
        "effects": {"disaster_inc": 6, "iron_legion": -3},
        "reputationNotes": {
            "_record": "Personal deltas for this engagement are filed on its event, the_belly_of_the_beast. This record carries the factional outcome only, so the session is not counted twice into any operator's standing.",
        },
    },

}


def apply(filename: str, table: dict) -> tuple[int, int]:
    path = DATA / filename
    raw = path.read_text(encoding="utf-8")
    records = json.loads(raw)

    # Prove the round-trip is byte-identical before touching anything, so the
    # diff cannot silently reformat 4 MB of canon.
    if json.dumps(records, indent=2, ensure_ascii=False) + "\n" != raw:
        print(f"  !! {filename}: round-trip is not byte-identical. Refusing to write.",
              file=sys.stderr)
        return (0, 0)

    written = skipped = 0
    for rec in records:
        rid = rec.get("id")
        if rid not in table:
            continue
        # Check key PRESENCE, not truthiness: a deliberate abstention is an
        # empty dict plus a `reputationNotes._record` explaining the emptiness,
        # and re-filling it on every run would be neither idempotent nor honest.
        if "reputationChanges" in rec or "effects" in rec:
            print(f"  -- {rid}: already carries reputation, skipped")
            skipped += 1
            continue

        payload = table[rid]
        # Insert after relatedArticles where present, matching the placement
        # of every other record in the file.
        rebuilt = {}
        inserted = False
        for key, value in rec.items():
            rebuilt[key] = value
            if key == "relatedArticles" and not inserted:
                rebuilt.update(payload)
                inserted = True
        if not inserted:
            rebuilt.update(payload)
        rec.clear()
        rec.update(rebuilt)

        deltas = sum(len(v) for v in payload["reputationChanges"].values())
        note = "ABSTENTION" if not deltas and not payload["effects"] else f"{deltas} deltas"
        print(f"  ++ {rid}: {note}, {len(payload['effects'])} record-level")
        written += 1

    if written:
        path.write_text(json.dumps(records, indent=2, ensure_ascii=False) + "\n",
                        encoding="utf-8")
    return (written, skipped)


def main() -> int:
    print("Filling missing reputation on scored records")
    print("=" * 60)
    print("events.json")
    ew, es = apply("events.json", EVENTS)
    print("battles.json")
    bw, bs = apply("battles.json", BATTLES)
    print("=" * 60)
    print(f"written: {ew + bw}   skipped (already filled): {es + bs}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
