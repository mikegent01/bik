#!/usr/bin/env python3
"""Prune the generated bros attacks down to real, distinct techniques.

The generator was asked to read an event and invent a technique from it. That
framing produces three failure modes that no amount of prompt tuning fixes,
because they are all the same mistake -- confusing a SCENE with a TECHNIQUE:

  1. NARRATION. Two people did something together once. There is no move to
     learn. "Examine the records and uncover inconsistencies" is two people
     reading; "hold the surgical tray steady" happened once and cannot recur.
     The tell is the risks field: abstract consequences ("misinterpreting data
     could lead to incorrect conclusions") instead of physical ones ("the axe
     has a wide arc, and a countdown can make the swing arrive before the body
     is ready").

  2. RE-MINTING. An event where an EXISTING technique was performed becomes a
     brand new technique. tanuki_liberation is Remi and Green T doing Support
     Fire -- same pair, same move, different room. The generator could not tell
     "they used the thing" from "they invented a thing".

  3. DUPLICATION. Six separate entries for "one partner distracts while the
     other slips away". That is one technique with six anecdotes attached, not
     six techniques. Keeping them all makes the school list look full and the
     game feel empty.

This script keeps the strongest exemplar of each distinct move, folds the rest
in as `variations` on the survivor (nothing is lost -- the anecdote stays
attached to the technique it illustrates), and drops the narration entries to
`lore` so they remain linked to their event without being drillable.

Usage from Reputation-Matrix2/:
  python tools/prune_bros_attacks.py --check   # report, change nothing
  python tools/prune_bros_attacks.py           # apply, then re-run the sync
"""
from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "data" / "brosAttacks.json"

# --- 1. Not techniques. Two people co-present during a scene. -------------
# Demoted to lore rather than deleted: the moment is real and still belongs to
# its event, it simply is not a move anybody can be taught.
NARRATION = {
    "gamma_discrepancy_bros_attack":
        "Two people reading records together. No coordination to time, nothing "
        "to practise, and the stated risk is 'misinterpreting data'.",
    "feyward_book_exchange_bros_attack":
        "Hjumpik translating Sylvan aloud for Waluigi is a conversation, not a "
        "manoeuvre. The 'steps' are turns in a dialogue.",
    "shieldwork_bros_attack_luigi_mario":
        "Luigi steadying instruments during his own surgery is a strong scene "
        "and a one-time event. It cannot be performed again by anyone.",
    # --- no division of labour ---------------------------------------------
    # A bros attack needs two DIFFERENT jobs: one lifts and one cuts, one
    # holds and one works. These are two people doing the identical thing at
    # the identical moment, which is a synchronised action, not a technique.
    # "Jump at the same time" does not become a manoeuvre by being written
    # down, and the steps prove it -- both partners' steps are the same step.
    "teleportation_bros_attack":
        "Both partners teleport. Identical action, no roles, and the drill is "
        "'focus, go, land' for each of them separately.",
    "toad_rescue_bros_attack":
        "Mario and Luigi navigating out of Bowser together is travel, not a "
        "technique -- the steps are 'jump down' and 'reset for another "
        "passage', which is just walking with extra words.",
    "jumping_coordination_bros_attack":
        "Two soldiers jump out of the same window at the same time. The whole "
        "technique is the word 'simultaneously'.",
}

# --- 2. Already covered by an existing technique. -------------------------
# The event is a USE of the survivor, so it becomes a variation on it.
REMINTED = {
    "tanuki_liberation_bros_attack": "support_fire_bros_attack",
}

# --- 3. One move, many anecdotes. Keep the best, fold in the rest. --------
# Survivor chosen for the most specific physical detail, not the best prose.
DUPLICATES = {
    # Waluigi + Wario against the dragon is the only one with real stakes and
    # a named consequence; the rest are the same beat in different rooms.
    "waluigi_s_distraction_bros_attack_variant": [
        "misdirection_bros_attack",              # a government as a "partner"
        "misdirection_bros_attack_variant",
        "ghostly_misdirection_bros_attack",      # never names its partners
        "misdirection_bros_attack_second_form",
        "waluigi_s_distraction_bros_attack",
    ],
    # Frozen shieldwork names what the shield is made of and what it holds off.
    "frozen_shieldwork_bros_attack": [
        "shieldwork_bros_attack",
        "ruler_counterattack_bros_attack",
    ],
}

# --- 4. Not teamwork at all. ---------------------------------------------
# Two Dans, one trying to kill the other. A duel filed as a bros attack.
NOT_TEAMWORK = {
    "detonation_bros_attack":
        "The two participants are adversaries -- the Original Dan detonates to "
        "harm the Feyward Dan, who is 'left wounded and broken'. A bros attack "
        "is cooperative by definition.",
}


def _variation_from(attack: dict[str, Any]) -> dict[str, Any]:
    """Reduce a folded technique to the anecdote it actually was."""
    return {
        "id": attack.get("id", ""),
        "name": attack.get("name", ""),
        "participants": attack.get("participants", []),
        "sourceEvent": attack.get("sourceEvent", ""),
        "account": attack.get("description", ""),
    }


def prune(data: dict[str, Any], report: list[str]) -> dict[str, Any]:
    attacks = data.get("attacks", [])
    by_id = {a.get("id"): a for a in attacks}

    folded: dict[str, list[dict[str, Any]]] = {}
    for survivor, absorbed in DUPLICATES.items():
        for dup in absorbed:
            if dup in by_id and survivor in by_id:
                folded.setdefault(survivor, []).append(_variation_from(by_id[dup]))
    for dup, survivor in REMINTED.items():
        if dup in by_id and survivor in by_id:
            folded.setdefault(survivor, []).append(_variation_from(by_id[dup]))

    removed = (
        set(NARRATION)
        | set(NOT_TEAMWORK)
        | set(REMINTED)
        | {d for group in DUPLICATES.values() for d in group}
    )

    kept: list[dict[str, Any]] = []
    lore: list[dict[str, Any]] = list(data.get("lore", []))

    for attack in attacks:
        aid = attack.get("id", "")
        if aid in NARRATION:
            entry = dict(attack)
            entry["prunedReason"] = NARRATION[aid]
            entry.pop("drill", None)   # not drillable
            entry.pop("steps", None)
            lore.append(entry)
            report.append(f"  lore    {aid}\n            {NARRATION[aid]}")
            continue
        if aid in NOT_TEAMWORK:
            report.append(f"  DROP    {aid}\n            {NOT_TEAMWORK[aid]}")
            continue
        if aid in REMINTED:
            report.append(f"  fold    {aid}  ->  {REMINTED[aid]}  (a use of it, not a new move)")
            continue
        if aid in removed:
            survivor = next(s for s, g in DUPLICATES.items() if aid in g)
            report.append(f"  fold    {aid}  ->  {survivor}")
            continue

        if aid in folded:
            attack = dict(attack)
            attack["variations"] = folded[aid]
            report.append(
                f"  KEEP    {aid}  (+{len(folded[aid])} variation(s) folded in)"
            )
        else:
            report.append(f"  KEEP    {aid}")
        kept.append(attack)

    out = dict(data)
    out["attacks"] = kept
    if lore:
        out["lore"] = lore
    return out


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true", help="report only")
    args = ap.parse_args()

    data = json.loads(SOURCE.read_text(encoding="utf-8"))
    before = len(data.get("attacks", []))

    report: list[str] = []
    out = prune(data, report)
    after = len(out["attacks"])

    print("\n".join(report))
    print(f"\n{before} techniques -> {after} distinct techniques "
          f"({len(out.get('lore', []))} kept as lore)")

    if args.check:
        if before != after:
            print("\n--check: the prune has not been applied")
            return 1
        return 0

    if before == after:
        print("nothing to prune")
        return 0

    SOURCE.write_text(
        json.dumps(out, indent=2, ensure_ascii=False) + "\n", encoding="utf-8"
    )
    print(f"\nwrote {SOURCE.relative_to(ROOT)} — now run tools/sync_bros_attacks.py")
    return 0


if __name__ == "__main__":
    sys.exit(main())
