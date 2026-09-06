#!/usr/bin/env python3
"""Which class best fits Lady Aurelian's existing 28 spells?

Deterministic, stdlib only, no AI. Reads her NPC export and scores every
full-caster list against the spells she already has.

The spell->class table below is hand-entered from the PHB lists and is the
only judgement in this file; everything else is counting. Where the 2014 and
2024 lists differ the entry is marked and both totals are reported, so a
disagreement about edition cannot silently change the answer.
"""

import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, "Reputation-Matrix2", "actors",
                   "original-fvtt-Actor-lady-aurelian-corvinarus-ADErrUjJaehXfDni.json")

B, C, D, P, R, S, WL, WZ = "bard cleric druid paladin ranger sorcerer warlock wizard".split()

# spell name -> classes whose list it appears on
SPELL_LISTS = {
    "Druidcraft":           {D},
    "Minor Illusion":       {B, S, WL, WZ},
    "Prestidigitation":     {B, S, WL, WZ},
    "Thaumaturgy":          {C},
    "Animal Friendship":    {B, D, R},
    "Charm Person":         {B, D, S, WL, WZ},
    "Command":              {B, C, P},
    "Detect Magic":         {B, C, D, P, R, S, WZ},
    "Disguise Self":        {B, S, WZ},
    "Faerie Fire":          {B, D},
    "Calm Emotions":        {B, C},
    "Detect Thoughts":      {B, S, WZ},
    "Enthrall":             {B, WL},
    "Hold Person":          {B, C, D, S, WL, WZ},
    "Misty Step":           {S, WL, WZ},          # 2024: added to Bard
    "Suggestion":           {B, S, WL, WZ},
    "Dispel Magic":         {B, C, D, P, S, WL, WZ},
    "Fear":                 {B, S, WL, WZ},
    "Hypnotic Pattern":     {B, S, WL, WZ},
    "Major Image":          {B, S, WL, WZ},
    "Plant Growth":         {B, D, R},
    "Speak with Plants":    {B, D, R},
    "Charm Monster":        {B, D, S, WL, WZ},
    "Greater Invisibility": {B, S, WZ},
    "Polymorph":            {B, D, S, WZ},
    "Wall of Fire":         {D, S, WZ},
    "Dominate Person":      {B, S, WZ},
    "Modify Memory":        {B, WZ},
}

# Entries that differ between the 2014 and 2024 PHB lists.
EDITION_2024_ADDS = {"Misty Step": {B}}

FULL_CASTERS = [B, C, D, S, WL, WZ]
LABEL = {B: "Bard", C: "Cleric", D: "Druid", S: "Sorcerer",
         WL: "Warlock", WZ: "Wizard"}

# Rough school tagging, for the flavour argument.
SCHOOL = {
    "Charm Person": "enchantment", "Command": "enchantment",
    "Calm Emotions": "enchantment", "Enthrall": "enchantment",
    "Hold Person": "enchantment", "Suggestion": "enchantment",
    "Hypnotic Pattern": "illusion", "Charm Monster": "enchantment",
    "Dominate Person": "enchantment", "Modify Memory": "enchantment",
    "Animal Friendship": "enchantment", "Fear": "illusion",
    "Minor Illusion": "illusion", "Disguise Self": "illusion",
    "Major Image": "illusion", "Greater Invisibility": "illusion",
    "Druidcraft": "nature", "Plant Growth": "nature",
    "Speak with Plants": "nature", "Faerie Fire": "nature",
    "Polymorph": "transmutation", "Wall of Fire": "evocation",
    "Misty Step": "conjuration", "Detect Thoughts": "divination",
    "Detect Magic": "divination", "Dispel Magic": "abjuration",
    "Prestidigitation": "misc", "Thaumaturgy": "misc",
}


def main():
    with open(SRC, encoding="utf-8") as fh:
        npc = json.load(fh)
    spells = [(((i.get("system") or {}).get("level")), i["name"])
              for i in npc["items"] if i["type"] == "spell"]
    names = [n for _lvl, n in spells]

    unknown = [n for n in names if n not in SPELL_LISTS]
    if unknown:
        print("FATAL: spells missing from the table: %s" % unknown)
        return 2

    print("Lady Aurelian — %d spells\n" % len(names))

    rows = []
    for cls in FULL_CASTERS:
        have14 = [n for n in names if cls in SPELL_LISTS[n]]
        have24 = [n for n in names
                  if cls in SPELL_LISTS[n] | EDITION_2024_ADDS.get(n, set())]
        rows.append((len(have24), len(have14), cls,
                     sorted(set(names) - set(have24))))
    rows.sort(reverse=True)

    print("%-10s %-9s %-9s %s" % ("class", "2014", "2024", "off-list"))
    print("-" * 72)
    for n24, n14, cls, missing in rows:
        pct = 100.0 * n24 / len(names)
        print("%-10s %2d/%d     %2d/%d  %5.0f%%  %s"
              % (LABEL[cls], n14, len(names), n24, len(names), pct,
                 ", ".join(missing) if missing else "-"))

    best = rows[0]
    runner = rows[1]
    print("\nwinner: %s (%d/%d), next best %s (%d/%d) — a %d-spell gap"
          % (LABEL[best[2]], best[0], len(names),
             LABEL[runner[2]], runner[0], len(names), best[0] - runner[0]))

    # school profile
    counts = {}
    for n in names:
        k = SCHOOL.get(n, "misc")
        counts[k] = counts.get(k, 0) + 1
    print("\nschool profile:")
    for k in sorted(counts, key=lambda x: -counts[x]):
        print("   %-14s %2d  %s" % (k, counts[k], "#" * counts[k]))

    ench_ill = counts.get("enchantment", 0) + counts.get("illusion", 0)
    print("\nenchantment + illusion = %d/%d (%.0f%%)"
          % (ench_ill, len(names), 100.0 * ench_ill / len(names)))

    # what a Bard actually cannot take
    bard_missing = [n for n in names
                    if B not in SPELL_LISTS[n] | EDITION_2024_ADDS.get(n, set())]
    print("\nnot on the Bard list under either edition: %s"
          % (", ".join(sorted(bard_missing)) or "none"))
    print("  -> these are the ones that need Magical Secrets.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
