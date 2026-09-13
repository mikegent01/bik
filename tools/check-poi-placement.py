#!/usr/bin/env python3
"""Find POIs standing in open water.

A pin's x/y is a percent of the painted artwork, so the painting is the
authority on what is at that coordinate. Nobody had ever checked. The whole
Raventree Manor district — a manor, a bank, a guildhall, a ranch, a hedge
maze — was filed at x71-79 / y7-13 on `fullmap.png`, which is the middle of
Aona's Scorn. A lake. Nineteen buildings afloat.

This is a *lint*, not a truth:

  * Water is detected by colour on hand-painted art, so it is approximate.
  * A dock or a lighthouse is SUPPOSED to have its feet wet, hence WATER_TYPES.
  * A lakeside cottage legitimately touches the shore, so a pin is only
    reported when every sample around it is water — i.e. it is not near the
    shore, it is out in the middle.
  * Only sheets that are actual cartography are checked. Several maps share
    generic illustration art (`earth_land.png` is a world that really is
    mostly ocean); pin coordinates there were never meant to line up with
    painted coastlines, and auditing them produces noise, not findings.

    python3 tools/check-poi-placement.py            # report
    python3 tools/check-poi-placement.py --check    # exit 1 if any found
"""
import argparse
import json
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
RM = ROOT / "Reputation-Matrix2"

# Sheets whose painted geography the pins are actually registered against.
CARTOGRAPHIC = {
    "assets/maps/fullmap.png",
}

# Types that are meant to be wet.
WATER_TYPES = {
    "port", "harbor", "harbour", "dock", "docks", "island", "lake", "river",
    "sea", "ocean", "bay", "coast", "reef", "lighthouse", "shipwreck",
    "naval_base", "waterfall", "spring", "oasis", "swamp", "marsh", "fishery",
    "bridge", "ford", "ferry", "canal", "beach", "shore", "underwater",
}
WATER_WORDS = (
    "port", "harbor", "harbour", "dock", "isle", "island", "lake", "bay",
    "ferry", "bridge", "shipwreck", "lighthouse", "reef", "sunken", "drowned",
)

# Half-width of the sample square, as a percent of the sheet. ~0.6% is a few
# pixels wider than a dot, so a shoreline pin catches land in at least one
# sample while a mid-lake pin catches none.
PROBE_PCT = 0.6


def is_water(px):
    """Blue clearly beats red, mid-brightness, not near-grey.

    Survives both the snowy north and the jungle south of `fullmap.png`:
    water there is a blue-teal, land is brown/green/grey/white.
    """
    r, g, b = px[0], px[1], px[2]
    if b <= r + 18:
        return False
    if b < 60 or b > 235:
        return False
    return (max(r, g, b) - min(r, g, b)) >= 28


def load_maps():
    script = """
    import('./Reputation-Matrix2/data/maps/map-data.js').then(({ MAP_DATA }) => {
      const out = {};
      for (const [id, m] of Object.entries(MAP_DATA)) {
        out[id] = {
          imageSrc: m.imageSrc || '',
          pois: (m.pointsOfInterest || []).filter(Boolean).map(p => ({
            id: p.id, name: p.name, x: p.x, y: p.y, type: p.type || '',
          })),
        };
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


def wetness(art, x_pct, y_pct):
    """Share of samples around a coordinate that are water."""
    W, H = art.size
    dx = max(1, int(W * PROBE_PCT / 100))
    dy = max(1, int(H * PROBE_PCT / 100))
    cx = int(round(W * x_pct / 100))
    cy = int(round(H * y_pct / 100))
    wet = total = 0
    for sx in range(-dx, dx + 1, max(1, dx // 2)):
        for sy in range(-dy, dy + 1, max(1, dy // 2)):
            px, py = cx + sx, cy + sy
            if 0 <= px < W and 0 <= py < H:
                total += 1
                wet += is_water(art.getpixel((px, py)))
    return (wet / total) if total else 0.0


def audit():
    from PIL import Image

    maps = load_maps()
    images = {}
    seen = set()
    adrift = []

    for map_id, m in sorted(maps.items()):
        src = m["imageSrc"]
        if src not in CARTOGRAPHIC:
            continue
        path = RM / src
        if not path.exists():
            continue
        if src not in images:
            images[src] = Image.open(path).convert("RGB")
        art = images[src]

        for poi in m["pois"]:
            if poi["id"] in seen or poi["x"] is None or poi["y"] is None:
                continue
            seen.add(poi["id"])
            t = (poi["type"] or "").lower()
            if any(w in t for w in WATER_TYPES):
                continue
            if any(w in (poi["name"] or "").lower() for w in WATER_WORDS):
                continue
            share = wetness(art, poi["x"], poi["y"])
            if share >= 0.999:
                adrift.append((map_id, poi, share))

    return seen, adrift


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--check", action="store_true",
                    help="exit 1 if any land pin is adrift")
    args = ap.parse_args()

    try:
        import PIL  # noqa: F401
    except ImportError:
        print("POI placement: Pillow not installed, skipping.")
        return 0

    seen, adrift = audit()

    if not adrift:
        print(f"POI placement: no land pins adrift ({len(seen)} checked).")
        return 0

    print(f"POI placement: {len(adrift)} land pin(s) standing in open water\n")
    for map_id, poi, share in sorted(adrift, key=lambda r: (r[1]["x"], r[1]["y"])):
        print(f"  {poi['id']:38} {poi['name'][:40]:40} "
              f"x:{poi['x']:<6} y:{poi['y']:<6} {poi['type']}")
    print("\nA pin's x/y is a percent of the painting, so the painting is the")
    print("authority. Move the pin onto land, or file it as a water type.")
    return 1 if args.check else 0


if __name__ == "__main__":
    sys.exit(main())
