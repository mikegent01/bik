#!/usr/bin/env python3
"""Move land POIs that were filed in open water onto the nearest shore.

Companion to `check-poi-placement.py`, which found them. This walks outward
from each wet pin in a widening spiral and takes the first dry coordinate that
is not already occupied by another pin, so a district keeps its shape and its
neighbours instead of being teleported somewhere tidy.

Deliberately conservative:
  * only sheets in CARTOGRAPHIC are touched;
  * anything that belongs in water is skipped (a trench is supposed to be wet);
  * the search starts at 0.25% and stops at 10%, so a pin never travels far
    enough to change which region it is in — if no shore is within 10% the pin
    is reported and left alone for a human to place.

    python3 tools/fix-poi-placement.py --dry-run   # show the moves
    python3 tools/fix-poi-placement.py             # apply them
"""
import argparse
import json
import math
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RM = ROOT / "Reputation-Matrix2"
# The pins live in per-region source modules; `data/maps/map-data.js` only
# imports and assembles them. Rewriting the aggregator would do nothing.
POI_DIR = RM / "map-data"

CARTOGRAPHIC = {"assets/maps/fullmap.png"}
WATER_TYPES = {
    "port", "harbor", "harbour", "dock", "docks", "island", "lake", "river",
    "sea", "ocean", "bay", "coast", "reef", "lighthouse", "shipwreck",
    "naval_base", "waterfall", "spring", "oasis", "swamp", "marsh", "fishery",
    "bridge", "ford", "ferry", "canal", "beach", "shore", "underwater",
}
WATER_WORDS = (
    "port", "harbor", "harbour", "dock", "isle", "island", "lake", "bay",
    "ferry", "bridge", "shipwreck", "lighthouse", "reef", "sunken", "drowned",
    "trench", "kraken", "mermaid", "siren", "tide", "wharf", "quay",
)

PROBE_PCT = 0.6
MIN_GAP = 0.28   # percent; two pins closer than this are a stack
MAX_TRAVEL = 10.0


def is_water(px):
    r, g, b = px[0], px[1], px[2]
    if b <= r + 18:
        return False
    if b < 60 or b > 235:
        return False
    return (max(r, g, b) - min(r, g, b)) >= 28


def load_pois():
    script = """
    import('./Reputation-Matrix2/data/maps/map-data.js').then(({ MAP_DATA }) => {
      const seen = new Set(); const out = [];
      for (const [, m] of Object.entries(MAP_DATA)) {
        if ((m.imageSrc || '') !== 'assets/maps/fullmap.png') continue;
        for (const p of (m.pointsOfInterest || []).filter(Boolean)) {
          if (seen.has(p.id)) continue;
          seen.add(p.id);
          out.push({ id: p.id, name: p.name, x: p.x, y: p.y, type: p.type || '' });
        }
      }
      process.stdout.write(JSON.stringify(out));
    });
    """
    res = subprocess.run(["node", "-e", script], cwd=ROOT,
                         capture_output=True, text=True)
    if res.returncode != 0:
        print(res.stderr, file=sys.stderr)
        sys.exit(2)
    return json.loads(res.stdout)


def belongs_in_water(poi):
    t = (poi["type"] or "").lower()
    if any(w in t for w in WATER_TYPES):
        return True
    return any(w in (poi["name"] or "").lower() for w in WATER_WORDS)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    from PIL import Image
    art = Image.open(RM / "assets/maps/fullmap.png").convert("RGB")
    W, H = art.size

    def wetness(x, y):
        dx = max(1, int(W * PROBE_PCT / 100))
        dy = max(1, int(H * PROBE_PCT / 100))
        cx, cy = int(W * x / 100), int(H * y / 100)
        wet = total = 0
        for sx in range(-dx, dx + 1, max(1, dx // 2)):
            for sy in range(-dy, dy + 1, max(1, dy // 2)):
                px, py = cx + sx, cy + sy
                if 0 <= px < W and 0 <= py < H:
                    total += 1
                    wet += is_water(art.getpixel((px, py)))
        return (wet / total) if total else 0.0

    pois = load_pois()
    occupied = [(p["x"], p["y"]) for p in pois]
    adrift = [p for p in pois
              if not belongs_in_water(p) and wetness(p["x"], p["y"]) > 0.5]

    moves, stuck = {}, []
    for poi in sorted(adrift, key=lambda p: (p["x"], p["y"])):
        found = None
        r = 0.25
        while r <= MAX_TRAVEL and not found:
            for angle in range(0, 360, 6):
                nx = round(poi["x"] + r * math.cos(math.radians(angle)), 2)
                ny = round(poi["y"] + r * math.sin(math.radians(angle)), 2)
                if not (0 <= nx <= 100 and 0 <= ny <= 100):
                    continue
                if wetness(nx, ny) > 0.001:
                    continue
                if any(abs(nx - ox) < MIN_GAP and abs(ny - oy) < MIN_GAP
                       for ox, oy in occupied):
                    continue
                found = (nx, ny, r)
                break
            r += 0.25
        if found:
            moves[poi["id"]] = (found[0], found[1])
            occupied.append((found[0], found[1]))
            print(f"  {poi['id']:38} {poi['name'][:34]:34} "
                  f"({poi['x']}, {poi['y']}) -> ({found[0]}, {found[1]})")
        else:
            stuck.append(poi)

    for poi in stuck:
        print(f"  !! no shore within {MAX_TRAVEL}% of {poi['id']} ({poi['name']})")

    print(f"\n{len(moves)} pin(s) to move"
          + (f", {len(stuck)} needing a human" if stuck else ""))

    if args.dry_run or not moves:
        return 0

    # An entry looks like:
    #     id: 'poi_mid_raventree_manor',
    #     x: 73.5,
    #     y: 12.0,
    # so anchor on the id and rewrite the x/y that follow it, touching
    # nothing else and preserving the file's own indentation.
    applied, touched = 0, set()
    for path in sorted(POI_DIR.glob("*.js")):
        src = path.read_text(encoding="utf-8")
        before = src
        for pid, (nx, ny) in moves.items():
            pat = re.compile(
                r"(id:\s*'" + re.escape(pid) + r"',\s*\n)"
                r"(\s*)x:\s*-?[\d.]+\s*,(\s*\n\s*)y:\s*-?[\d.]+\s*,")

            def rewrite(m):
                nonlocal applied
                applied += 1
                return f"{m.group(1)}{m.group(2)}x: {nx},{m.group(3)}y: {ny},"

            src = pat.sub(rewrite, src, count=1)
        if src != before:
            path.write_text(src, encoding="utf-8")
            touched.add(path.name)

    print(f"Rewrote {applied} coordinate pair(s) across "
          f"{len(touched)} file(s): {', '.join(sorted(touched))}")
    missed = len(moves) - applied
    if missed:
        print(f"WARNING: {missed} pin(s) were not found in {POI_DIR.name}/;"
              " they may be filed in a different shape.")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
