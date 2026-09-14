#!/usr/bin/env python3
"""Connect the portrait library to the character records that already earned it.

THE PROBLEM

`Reputation-Matrix2/portraits/` holds 323 PNGs. Only 40 character records ever
render one, because `characterVisual()` in index.html shows art only when the
record carries an explicit `image` field *or* the id appears in a hardcoded
28-entry "bone line" array. Every other character falls back to an emoji, even
when a portrait named exactly after its id is sitting in the folder.

That is 35 portraits that exist, are correctly named, and are never shown:
waluigi, wario, bowser, markop, bones, eager, green_t, speaker_l, fawful,
the_oracle, chancellor_toadsworth, scribe_dewdrop and 23 more.

WHAT THIS DOES

Fills in `image: "portraits/<id>.png"` on every character whose portrait can be
resolved, so the data says what is true rather than relying on a hardcoded list
in the renderer. Two match tiers, and nothing else:

  exact  — `portraits/<character id>.png` exists. No judgement involved.
  alias  — a small hand-reviewed table below, each entry justified. These are
           cases where the file and the record disagree on spelling
           (`skull_cap_murphy` vs `skullcap_murphy`) or the portrait is filed
           under a character's other name (`purple_t` for `mystic_morel`).

Everything else is left alone and reported. A fuzzy matcher would happily put
the wrong face on a character, and a wrong portrait is worse than no portrait —
it is a factual claim about who someone is.

SAFETY

  * Never overwrites an existing `image`. 40 records already have one, two of
    them deliberate external URLs, and Salam's is owned by
    tools/build-judgement-in-the-grove.py — this must not fight that generator.
  * Verifies every file it references actually exists before writing.
  * Idempotent: re-running changes nothing.

Run:  python3 tools/link-portraits.py [--check]
"""

from __future__ import annotations

import argparse
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "Reputation-Matrix2" / "data"
PORTRAITS = ROOT / "Reputation-Matrix2" / "portraits"
CHARACTERS = DATA / "characters.json"
PROFILES = DATA / "wahwire" / "profiles.json"

# Owned by tools/build-judgement-in-the-grove.py — that generator asserts the
# exact value in its --check. Never touch it from here.
GENERATOR_OWNED = {"salam"}

# ---------------------------------------------------------------------------
# Hand-reviewed aliases. Each one is a case where the portrait exists but is
# filed under a different string than the character id. Every entry carries the
# reason it is safe; anything that needed a guess was left out instead.
# ---------------------------------------------------------------------------
ALIASES = {
    # Spelling drift between the file and the record.
    "skullcap_murphy":  "skull_cap_murphy",
    "tanukiburt":       "tanuki_burt",
    "lady_aurelian":    "lady_aurelian_corvinarus",

    # Filed under the character's other public name. Mystic Morel is named
    # "Mystic Morel (Purple T)" in the record itself.
    "mystic_morel":     "purple_t",

    # `remi_akamatsu_full_backstory` is the record id; the portrait is the
    # short name. Same person — she is the only Remi in the archive.
    "remi_akamatsu_full_backstory": "remi",

    # Record id carries a disambiguating suffix the art does not.
    "dan_the_toad":     "dan",
    "archie_miser":     "archie",
    "creek_medic":      "creek",
    # NOT aliased: `the_archivist` is a Shadow Estate operator, while
    # portraits/legion_archivist.png is an Iron Legion figure. Similar word,
    # different person — left unresolved rather than given the wrong face.
    "mossy":            "mossy_toad",
}


def load(path: Path):
    return json.loads(path.read_text(encoding="utf-8"))


def dump(path: Path, obj) -> None:
    path.write_text(json.dumps(obj, indent=2, ensure_ascii=False) + "\n",
                    encoding="utf-8")


def have(stem: str) -> bool:
    return (PORTRAITS / f"{stem}.png").is_file()


def resolve(cid: str) -> tuple[str, str] | None:
    """Return (portrait stem, tier) or None. Exact wins over alias."""
    if have(cid):
        return cid, "exact"
    alias = ALIASES.get(cid)
    if alias and have(alias):
        return alias, "alias"
    return None


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true",
                    help="report only; write nothing")
    args = ap.parse_args()

    if not PORTRAITS.is_dir():
        print(f"no portrait directory at {PORTRAITS}", file=sys.stderr)
        return 1

    # --- sanity: every alias target must exist ----------------------------
    dead = sorted(a for a in set(ALIASES.values()) if not have(a))
    if dead:
        print("alias table points at files that do not exist:", file=sys.stderr)
        for d in dead:
            print(f"   portraits/{d}.png", file=sys.stderr)
        return 1

    chars = load(CHARACTERS)

    linked: list[tuple[str, str, str]] = []
    already = 0
    unresolved: list[str] = []

    for c in chars:
        cid = c.get("id")
        if not cid:
            continue
        if cid in GENERATOR_OWNED:
            already += 1
            continue
        if c.get("image"):
            already += 1
            continue
        hit = resolve(cid)
        if not hit:
            unresolved.append(cid)
            continue
        stem, tier = hit
        c["image"] = f"portraits/{stem}.png"
        linked.append((cid, stem, tier))

    # --- WAHwire profiles -------------------------------------------------
    # A wire account is not always a character record. `wwAuthor()` falls back
    # to the character first, so a profile only needs its own avatar when the
    # account has no record — otherwise the two would drift apart.
    profs = load(PROFILES)
    char_ids = {c["id"] for c in chars if c.get("id")}
    prof_linked: list[tuple[str, str]] = []
    prof_none: list[str] = []
    for pid, body in profs["profiles"].items():
        if body.get("avatar"):
            continue
        if pid in char_ids:
            continue          # inherits the character portrait, by design
        if have(pid):
            body["avatar"] = f"portraits/{pid}.png"
            prof_linked.append((pid, pid))
        else:
            prof_none.append(pid)

    # --- report -----------------------------------------------------------
    exact = [x for x in linked if x[2] == "exact"]
    alias = [x for x in linked if x[2] == "alias"]

    print(f"characters              {len(chars)}")
    print(f"  already had an image  {already}")
    print(f"  newly linked          {len(linked)}"
          f"   (exact {len(exact)}, alias {len(alias)})")
    print(f"  still no portrait     {len(unresolved)}")
    print(f"portraits on disk       {len(list(PORTRAITS.glob('*.png')))}")
    print()
    print(f"wire profiles linked    {len(prof_linked)}"
          f"   (accounts with no character record)")
    if prof_none:
        print(f"wire profiles with no art: {', '.join(sorted(prof_none))}")

    if alias:
        print("\naliases applied:")
        for cid, stem, _ in alias:
            print(f"   {cid:32} -> portraits/{stem}.png")

    if args.check:
        print("\n--check: nothing written.")
        if unresolved:
            print(f"\nunresolved ({len(unresolved)}):")
            for u in unresolved:
                print("   " + u)
        return 0

    dump(CHARACTERS, chars)
    dump(PROFILES, profs)
    print(f"\nwrote {CHARACTERS.relative_to(ROOT)}")
    print(f"wrote {PROFILES.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
