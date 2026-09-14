#!/usr/bin/env python3
"""Slice a generated 3x3 contact sheet into per-character portraits.

Sibling of `tools/slice-event-sheet.py`, which does the same job for event
card art. The two differ in three ways that matter, which is why this is a
separate tool rather than a flag:

  * output is **PNG into `portraits/<id>.png`**, not JPEG into an assets dir,
    because that is the path `characterVisual()` and `wwAuthor()` resolve.
  * it writes `image` on rows in **characters.json**, not events.json.
  * it refuses to overwrite an existing portrait unless --force is given. The
    library has 326 files and several are hand-picked alternates; silently
    replacing one would lose art nobody can regenerate.

Cells map to ids in READING ORDER (left to right, top to bottom), so the id
list must match the order the characters were described in the prompt.

Per docs/IMAGE_GENERATION_GUIDE.md: 3x3 is the tested density, the sheet must
be eyeballed with read_file BEFORE slicing, and every sliced cell should be
viewed after. This tool does the cutting; it cannot check likeness.

Usage:
    python3 tools/slice-portrait-sheet.py tools/sheets/portrait-sheet-01.png \
        --cols 3 --rows 3 --ids a,b,c,d,e,f,g,h,i --write
"""
from __future__ import annotations

import argparse
import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "Reputation-Matrix2" / "data"
PORTRAITS = ROOT / "Reputation-Matrix2" / "portraits"
CHARACTERS = DATA / "characters.json"

# Owned by tools/build-judgement-in-the-grove.py, which asserts the exact
# value in its --check. Never let a sheet overwrite it.
GENERATOR_OWNED = {"salam"}


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("sheet")
    ap.add_argument("--cols", type=int, default=3)
    ap.add_argument("--rows", type=int, default=3)
    ap.add_argument("--ids", required=True,
                    help="comma-separated character ids in reading order")
    ap.add_argument("--inset", type=int, default=8,
                    help="pixels trimmed from each cell edge to drop the gutter")
    ap.add_argument("--write", action="store_true",
                    help="also set `image` on those rows in characters.json")
    ap.add_argument("--force", action="store_true",
                    help="allow overwriting an existing portrait file")
    args = ap.parse_args()

    sheet = Path(args.sheet)
    if not sheet.is_file():
        print(f"no such sheet: {sheet}", file=sys.stderr)
        return 1

    ids = [x.strip() for x in args.ids.split(",") if x.strip()]
    want = args.cols * args.rows
    if len(ids) != want:
        print(f"--ids has {len(ids)} entries but the grid has {want} cells",
              file=sys.stderr)
        return 1

    chars = json.loads(CHARACTERS.read_text(encoding="utf-8"))
    by_id = {c["id"]: c for c in chars if c.get("id")}

    unknown = [i for i in ids if i not in by_id]
    if unknown:
        print(f"not character ids: {unknown}", file=sys.stderr)
        return 1

    clash = [i for i in ids if i in GENERATOR_OWNED]
    if clash:
        print(f"refusing: generator-owned portraits {clash}", file=sys.stderr)
        return 1

    if not args.force:
        exists = [i for i in ids if (PORTRAITS / f"{i}.png").is_file()]
        if exists:
            print(f"refusing to overwrite existing portraits: {exists}\n"
                  f"pass --force if that is really intended", file=sys.stderr)
            return 1

    # --- dimensions -------------------------------------------------------
    out = subprocess.run(["identify", "-format", "%w %h", str(sheet)],
                         capture_output=True, text=True, check=True)
    W, H = (int(x) for x in out.stdout.split())
    cw, ch = W // args.cols, H // args.rows
    print(f"sheet {W}x{H} -> {args.cols}x{args.rows} cells of {cw}x{ch} "
          f"(inset {args.inset})")

    PORTRAITS.mkdir(parents=True, exist_ok=True)
    written = []
    for n, cid in enumerate(ids):
        r, c = divmod(n, args.cols)
        x = c * cw + args.inset
        y = r * ch + args.inset
        w = cw - 2 * args.inset
        h = ch - 2 * args.inset
        dest = PORTRAITS / f"{cid}.png"
        subprocess.run(["convert", str(sheet), "-crop", f"{w}x{h}+{x}+{y}",
                        "+repage", "-strip", str(dest)], check=True)
        kb = dest.stat().st_size / 1024
        print(f"  cell {n+1} (r{r+1}c{c+1}) -> portraits/{cid}.png  {kb:.0f} KB")
        written.append(cid)

    if args.write:
        for cid in written:
            by_id[cid]["image"] = f"portraits/{cid}.png"
        CHARACTERS.write_text(
            json.dumps(chars, indent=2, ensure_ascii=False) + "\n",
            encoding="utf-8")
        print(f"\nwrote image on {len(written)} rows in "
              f"{CHARACTERS.relative_to(ROOT)}")
    else:
        print("\n(no --write: files sliced, characters.json untouched)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
