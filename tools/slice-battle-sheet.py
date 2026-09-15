#!/usr/bin/env python3
"""Slice a generated contact sheet into per-battle card art.

Third sibling of `tools/slice-event-sheet.py` (events.json) and
`tools/slice-portrait-sheet.py` (characters.json). This one owns battles, and
it exists as a separate tool for the same reason the other two do: the target
file and the validation set are different, and a flag on the wrong tool would
silently write an id into the wrong store.

What is specific to battles:

  * ids are validated against BOTH `battles.json` and `majorBattles.json`,
    because the site reads battle records from both and either can carry an
    `image`. The tool reports which store each id landed in.
  * output is JPEG into `assets/images/battles/<slug>/`, matching the one
    hand-made example already in the repo
    (`assets/images/battles/woodfellow-vs-treant/wft-01-tome-crit.jpg`).
  * **cells are cropped to 16:7 before saving.** Battle cards render through
    `battleThumb()` into a `viewBox="0 0 640 300"` frame, so a square-ish cell
    would be centre-cropped by the browser and lose the top and bottom of the
    composition. Cropping here, deliberately and with a bias we control, beats
    letting CSS do it blind. The bias is upward (`--gravity north` by default)
    because these are wide establishing shots where the sky and the threat are
    usually in the upper half.
  * it refuses to overwrite an existing battle image unless --force. Two of
    the five battles that already have art point at hand-placed event stills
    that a sheet must never clobber.

Cells map to ids in READING ORDER (left to right, top to bottom).

Usage:
    python3 tools/slice-battle-sheet.py tools/sheets/battle-sheet-01.png \
        --cols 3 --rows 2 --ids a,b,c,d,e,f --write
"""
from __future__ import annotations

import argparse
import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "Reputation-Matrix2" / "data"
BATTLES = DATA / "battles.json"
MAJOR = DATA / "majorBattles.json"
OUT_ROOT = ROOT / "Reputation-Matrix2" / "assets" / "images" / "battles"

# Owned by tools/build-judgement-in-the-grove.py, which asserts the exact
# value in its --check. Never let a sheet overwrite it.
GENERATOR_OWNED = {"judgement_in_the_grove_battle"}

# The card frame. Keep in sync with battleThumb()'s viewBox in index.html.
CARD_W, CARD_H = 640, 300


def _rows(doc):
    """battles.json is a list; majorBattles.json may be a dict of records."""
    if isinstance(doc, list):
        return [r for r in doc if isinstance(r, dict)]
    if isinstance(doc, dict):
        return [r for r in doc.values() if isinstance(r, dict)]
    return []


def slug_for(bid: str) -> str:
    return bid.replace("_", "-").strip("-")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("sheet")
    ap.add_argument("--cols", type=int, required=True)
    ap.add_argument("--rows", type=int, required=True)
    ap.add_argument("--ids", required=True,
                    help="comma-separated battle ids in reading order")
    ap.add_argument("--inset", type=int, default=8,
                    help="pixels trimmed from each cell edge to drop the gutter")
    ap.add_argument("--gravity", default="north",
                    help="which part of the cell survives the 16:7 crop")
    ap.add_argument("--quality", type=int, default=88)
    ap.add_argument("--write", action="store_true",
                    help="also set `image` on those rows in the battle stores")
    ap.add_argument("--force", action="store_true",
                    help="allow overwriting a battle that already has art")
    a = ap.parse_args()

    sheet = Path(a.sheet)
    if not sheet.is_file():
        print(f"no such sheet: {sheet}", file=sys.stderr)
        return 2

    ids = [x.strip() for x in a.ids.split(",") if x.strip()]
    want = a.cols * a.rows
    if len(ids) != want:
        print(f"{a.cols}x{a.rows} needs {want} ids, got {len(ids)}",
              file=sys.stderr)
        return 2

    bdoc = json.loads(BATTLES.read_text(encoding="utf-8"))
    mdoc = json.loads(MAJOR.read_text(encoding="utf-8"))
    index = {}
    for row in _rows(bdoc):
        if row.get("id"):
            index[row["id"]] = ("battles", row)
    for row in _rows(mdoc):
        if row.get("id"):
            index.setdefault(row["id"], ("majorBattles", row))

    unknown = [i for i in ids if i not in index]
    if unknown:
        print("unknown battle ids: " + ", ".join(unknown), file=sys.stderr)
        return 2

    owned = [i for i in ids if i in GENERATOR_OWNED]
    if owned:
        print("refusing: generator-owned records: " + ", ".join(owned),
              file=sys.stderr)
        return 2

    if not a.force:
        taken = [i for i in ids if index[i][1].get("image")]
        if taken:
            print("refusing: these already have art (use --force): "
                  + ", ".join(taken), file=sys.stderr)
            return 2

    out = subprocess.run(["identify", "-format", "%w %h", str(sheet)],
                         capture_output=True, text=True, check=True)
    sw, sh = (int(v) for v in out.stdout.split())
    cw, ch = sw // a.cols, sh // a.rows
    print(f"sheet {sw}x{sh} -> {a.cols}x{a.rows} cells of {cw}x{ch} "
          f"(inset {a.inset}, crop to {CARD_W}:{CARD_H}, gravity {a.gravity})")

    written = []
    for n, bid in enumerate(ids):
        r, c = divmod(n, a.cols)
        x, y = c * cw + a.inset, r * ch + a.inset
        w, h = cw - 2 * a.inset, ch - 2 * a.inset
        slug = slug_for(bid)
        dest_dir = OUT_ROOT / slug
        dest_dir.mkdir(parents=True, exist_ok=True)
        dest = dest_dir / f"{slug}-01.jpg"
        subprocess.run([
            "convert", str(sheet),
            "-crop", f"{w}x{h}+{x}+{y}", "+repage",
            # Fill the 640x300 card frame, keeping the chosen part of the cell.
            "-resize", f"{CARD_W}x{CARD_H}^",
            "-gravity", a.gravity,
            "-extent", f"{CARD_W}x{CARD_H}", "+repage",
            "-quality", str(a.quality),
            str(dest),
        ], check=True)
        rel = dest.relative_to(ROOT / "Reputation-Matrix2").as_posix()
        store = index[bid][0]
        kb = dest.stat().st_size // 1024
        print(f"  cell {n + 1} (r{r + 1}c{c + 1}) [{store}] -> {rel}  {kb} KB")
        written.append((bid, rel, store))

    if not a.write:
        print(f"\n{len(written)} cell(s) written. Re-run with --write to set "
              f"`image` on the battle records.")
        return 0

    touched = {"battles": 0, "majorBattles": 0}
    for bid, rel, store in written:
        index[bid][1]["image"] = rel
        touched[store] += 1
    if touched["battles"]:
        BATTLES.write_text(
            json.dumps(bdoc, indent=2, ensure_ascii=False) + "\n",
            encoding="utf-8")
    if touched["majorBattles"]:
        MAJOR.write_text(
            json.dumps(mdoc, indent=2, ensure_ascii=False) + "\n",
            encoding="utf-8")
    print(f"\nwired {touched['battles']} image(s) into battles.json and "
          f"{touched['majorBattles']} into majorBattles.json")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
