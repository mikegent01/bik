#!/usr/bin/env python3
"""Find duplicated character records, portraits and wire accounts.

Three kinds of duplicate, and they are not the same problem:

  1. RECORD duplicates  — two character rows that are the same person under
     different ids, or the same name filed twice.
  2. PORTRAIT duplicates — two files with byte-identical content. Harmless when
     it is one person under two filenames; a FACTUAL ERROR when the two names
     are different people, because one of them is wearing someone else's face.
  3. WIRE ACCOUNT duplicates — profiles.json ids that shadow a character record
     under a shortened name, so one person posts as two accounts.

Advisory only: this reports and never edits. Fixing a duplicate is a judgement
call about which id is canonical, and that belongs in a reviewed commit.

Run:  python3 tools/audit-duplicates.py
"""

from __future__ import annotations

import hashlib
import json
import os
import re
import sys
from collections import Counter, defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DATA = ROOT / "Reputation-Matrix2" / "data"
PORTRAITS = ROOT / "Reputation-Matrix2" / "portraits"


def load(p: Path):
    return json.loads(p.read_text(encoding="utf-8"))


def norm(s: str) -> str:
    """Collapse to comparable form: lowercase, alphanumeric only."""
    return re.sub(r"[^a-z0-9]", "", (s or "").lower())


def strip_title(name: str) -> str:
    """Drop parentheticals and honorifics so 'Lady Aurelian Corvinarus' and
    'Aurelian' compare equal. Deliberately loose — this is a report, not an
    edit, so a false positive costs a human ten seconds."""
    n = re.sub(r"\([^)]*\)", " ", name or "")
    n = re.sub(r"\b(lady|lord|king|queen|captain|chancellor|general|colonel|"
               r"speaker|professor|doctor|dr|mr|mrs|ms|sir|elder|the)\b", " ",
               n, flags=re.I)
    return norm(n)


def main() -> int:
    chars = load(DATA / "characters.json")
    by_id = {c["id"]: c for c in chars if c.get("id")}

    print("DUPLICATE AUDIT")
    print("=" * 72)
    n_files = sum(len(list(PORTRAITS.glob(e)))
                  for e in ("*.png", "*.webp", "*.jpg", "*.jpeg"))
    print(f"\n{len(chars)} character records, {n_files} portrait files\n")

    findings = 0

    # ---- 1. record duplicates -------------------------------------------
    print("1. CHARACTER RECORDS")
    dup_ids = [k for k, v in Counter(c.get("id") for c in chars).items() if v > 1]
    if dup_ids:
        findings += len(dup_ids)
        print(f"   DUPLICATE IDS: {dup_ids}")
    else:
        print("   duplicate ids: none")

    by_name = defaultdict(list)
    for c in chars:
        key = strip_title(c.get("name") or "")
        if key:
            by_name[key].append(c["id"])
    name_dupes = {k: v for k, v in by_name.items() if len(v) > 1}
    if name_dupes:
        print(f"   same normalised name, different id ({len(name_dupes)}):")
        for k, v in sorted(name_dupes.items()):
            findings += 1
            print(f"      {k:28} {v}")
    else:
        print("   same normalised name: none")

    # An id that is a strict prefix/suffix of another is the usual shape of a
    # record that got re-filed under a longer name (dan / dan_the_toad).
    ids = sorted(by_id)
    nested = []
    for a in ids:
        for b in ids:
            if a != b and (b.startswith(a + "_") or b.endswith("_" + a)):
                nested.append((a, b))
    if nested:
        print(f"   nested ids — possible re-files ({len(nested)}):")
        for a, b in nested:
            same = "SAME ART" if (by_id[a].get("image")
                                  and by_id[a].get("image") == by_id[b].get("image")) else ""
            print(f"      {a:30} <- {b:34} {same}")
    else:
        print("   nested ids: none")

    # ---- 2. portrait duplicates -----------------------------------------
    print("\n2. PORTRAITS — identical file content")
    # All raster formats, not just PNG. The library also holds .webp and .jpg
    # (luigi.png vs luigi_operative.webp), and scanning one extension hid
    # near-duplicate art that renders identically to a reader.
    digests = defaultdict(list)
    files = [f for ext in ("*.png", "*.webp", "*.jpg", "*.jpeg")
             for f in PORTRAITS.glob(ext)]
    for f in sorted(files):
        digests[hashlib.md5(f.read_bytes()).hexdigest()].append(f.name)

    # who references each file
    refs = defaultdict(list)
    for c in chars:
        im = c.get("image")
        if im:
            refs[im.split("/")[-1]].append(c["id"])

    groups = {k: v for k, v in digests.items() if len(v) > 1}
    if not groups:
        print("   none")
    for _, names in sorted(groups.items(), key=lambda x: x[1]):
        used = {n: refs.get(n, []) for n in names}
        live = [n for n, u in used.items() if u]
        # Same person under two filenames is tidy-up. Two DIFFERENT characters
        # sharing a file means somebody is wearing the wrong face.
        owners = {o for u in used.values() for o in u}
        severity = "  ⚠ TWO DIFFERENT CHARACTERS SHARE ONE IMAGE" if len(owners) > 1 else ""
        findings += 1 if severity else 0
        print(f"   {names}{severity}")
        for n in names:
            tag = f"used by {used[n]}" if used[n] else "unreferenced"
            print(f"      {n:34} {tag}")
        if len(live) == 0:
            print("      -> both unreferenced: safe to collapse to one file")

    # Same character across FOLDERS or formats. The repo keeps a second copy of
    # the library at the root `portraits/`, and art also exists as .webp -- so
    # luigi.png and luigi_operative.webp are two Luigis that no byte-hash and
    # no single-folder scan will ever put side by side.
    ROOT_PORTRAITS = ROOT / "portraits"
    alt = [f for ext in ("*.png", "*.webp", "*.jpg", "*.jpeg")
           for f in ROOT_PORTRAITS.glob(ext)] if ROOT_PORTRAITS.is_dir() else []

    def variants(stem: str) -> str:
        """Strip trailing qualifiers so luigi_operative groups with luigi."""
        return re.sub(r"_(operative|scarred|clean|wide|armoured|armored|alt|"
                      r"v\d+|real|hooded|full|old|new|\d+)$", "", stem)

    fam = defaultdict(set)
    for f in files:
        fam[variants(f.stem)].add(f"Reputation-Matrix2/portraits/{f.name}")
    for f in alt:
        fam[variants(f.stem)].add(f"portraits/{f.name}")

    # The root `portraits/` is a full mirror of the library, so "same filename
    # in both folders" is expected and reporting it would bury the real signal.
    # What matters is a family holding genuinely DIFFERENT filenames -- an
    # alternate take, a second costume, another format -- because then a reader
    # can meet the same character wearing two different faces.
    claimed = {c.get("image", "").split("/")[-1] for c in chars if c.get("image")}
    alts = {}
    for k, v in fam.items():
        distinct = {Path(x).name for x in v}
        if len(distinct) > 1:
            alts[k] = sorted(v, key=lambda x: (Path(x).name not in claimed, x))
    print(f"\n   characters with ALTERNATE art ({len(alts)}) — "
          f"one is live, the rest are unused takes:")
    for k, v in sorted(alts.items()):
        names = sorted({Path(x).name for x in v})
        live = [n for n in names if n in claimed]
        print(f"      {k:26} {names}"
              f"{'' if live else '   (NONE in use)'}")

    # ---- 3. wire accounts ------------------------------------------------
    print("\n3. WAHWIRE ACCOUNTS")
    profs = load(DATA / "wahwire" / "profiles.json")["profiles"]
    posts = load(DATA / "wahwire" / "posts.json")["posts"]
    posting = Counter()
    for p in posts:
        posting[p["author"]] += 1
        for c in p.get("comments") or []:
            posting[c["author"]] += 1

    shadow = []
    for pid in profs:
        if pid in by_id:
            continue
        n = norm(pid)
        for cid in by_id:
            if cid == pid:
                continue
            if norm(cid).endswith(n) or norm(cid).startswith(n):
                shadow.append((pid, cid))
                break
    if shadow:
        print(f"   profile ids that shadow a character record ({len(shadow)}):")
        for pid, cid in shadow:
            findings += 1
            print(f"      profile {pid:28} vs character {cid:30}"
                  f" (profile posts {posting.get(pid,0)}x)")
    else:
        print("   shadowing profiles: none")

    silent = sorted(p for p in profs if not posting.get(p))
    if silent:
        print(f"   profiles that never post ({len(silent)}): {', '.join(silent)}")

    print(f"\n{findings} finding(s) needing a human decision.")
    print("Advisory only — this audit never edits and never fails a build.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
