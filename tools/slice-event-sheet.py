#!/usr/bin/env python3
"""Slice a generated contact sheet into per-event card images.

102 of the archive's 120 events had no art, which is why the events page read
as a flat purple grid while the front page looked designed. Generating 102
images one at a time is not practical, so art is produced as **contact
sheets**: one generation renders an N x M grid of scenes, and this tool cuts
the grid into individual event images and wires them into `events.json`.

The sheets must be generated with the real cast portraits from `portraits/`
passed as references, so the people in them are the actual characters rather
than invented figures. Per the project's image rules, references are for
PEOPLE only — never pass a scene or location image, or every cell comes back
with the same background.

Cells are assigned to event ids in reading order (left to right, top to
bottom), so the id list must match the order the scenes were described in the
prompt. Slicing is done by even division with a configurable inset that trims
the gutter, then each cell is saved as a compressed JPEG.

Usage:
    python3 tools/slice-event-sheet.py SHEET.png --cols 2 --rows 2 \
        --ids a,b,c,d --out-dir Reputation-Matrix2/assets/images/events/sheet-01
    ... add --write to also set `image` on those events in events.json
"""
import argparse
import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "Reputation-Matrix2" / "data"
ASSETS = ROOT / "Reputation-Matrix2"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("sheet")
    ap.add_argument("--cols", type=int, required=True)
    ap.add_argument("--rows", type=int, required=True)
    ap.add_argument("--ids", required=True,
                    help="comma-separated event ids in reading order")
    ap.add_argument("--out-dir", required=True)
    ap.add_argument("--inset", type=int, default=6,
                    help="pixels trimmed from each cell edge to drop the gutter")
    ap.add_argument("--quality", type=int, default=82)
    ap.add_argument("--write", action="store_true",
                    help="also set image on the events in events.json")
    args = ap.parse_args()

    ids = [i.strip() for i in args.ids.split(",") if i.strip()]
    if len(ids) > args.cols * args.rows:
        print(f"{len(ids)} ids but only {args.cols*args.rows} cells")
        return 1

    doc = json.loads((DATA / "events.json").read_text(encoding="utf-8"))
    evs = doc["events"] if isinstance(doc, dict) else doc
    by_id = {e.get("id"): e for e in evs}
    unknown = [i for i in ids if i not in by_id]
    if unknown:
        print("unknown event ids: " + ", ".join(unknown))
        return 1

    # ImageMagick v6, matching the rest of the project's image tooling - avoids
    # adding a Pillow dependency the sandbox cannot install (PEP 668).
    dims = subprocess.run(["identify", "-format", "%w %h", args.sheet],
                          capture_output=True, text=True, check=True).stdout
    W, H = (int(x) for x in dims.split())
    cw, ch = W / args.cols, H / args.rows

    out_dir = ROOT / args.out_dir
    out_dir.mkdir(parents=True, exist_ok=True)

    written = []
    for n, eid in enumerate(ids):
        r, c = divmod(n, args.cols)
        box = (int(c * cw) + args.inset, int(r * ch) + args.inset,
               int((c + 1) * cw) - args.inset, int((r + 1) * ch) - args.inset)
        x0, y0, x1, y1 = box
        w, h = x1 - x0, y1 - y0
        path = out_dir / f"{eid.replace('_', '-')}.jpg"
        subprocess.run(["convert", args.sheet,
                        "-crop", f"{w}x{h}+{x0}+{y0}", "+repage",
                        "-strip", "-interlace", "Plane",
                        "-quality", str(args.quality), str(path)], check=True)
        rel = path.relative_to(ASSETS).as_posix()
        written.append((eid, rel, (w, h)))
        print(f"  {eid:<46} -> {rel} {w}x{h}")

    if not args.write:
        print(f"\n{len(written)} cell(s) written. Re-run with --write to set "
              f"`image` on these events.")
        return 0

    for eid, rel, _ in written:
        by_id[eid]["image"] = rel
    (DATA / "events.json").write_text(
        json.dumps(doc, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"\nwired {len(written)} image(s) into events.json")
    return 0


if __name__ == "__main__":
    sys.exit(main())
