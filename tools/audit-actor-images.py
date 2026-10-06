#!/usr/bin/env python3
"""Audit the art the actor packets point at — every `img` and token `texture.src`
of every actor in the world packet (world + cast + eras) and the Players packet.

For each distinct path: where it lives (repo | Foundry server | a GM upload the
repo cannot see | placeholder | missing under a repo root), and for the repo's
own files what the picture is like:

  opaque     no alpha at all (a JPEG, a flat PNG) — fine for a portrait, wrong
             for a token plate (a square card on the map)
  field      a transparent file whose figure still carries its background: a
             near-rectangular opaque mass, a key-coloured fringe, a half-keyed
             field (tools/make-token-plates.py background_audit — the same test
             the Liberated Toads plates pass)
  cream      an opaque file whose border is one flat light colour (white, cream,
             grey) that also covers a good part of the picture — a figure on a
             field, the cut-out that was never cut; the usual "white background"
  key        an opaque file whose border is a key colour (magenta / green) — a
             render that was never keyed
  framed     an opaque file with a flat light border around a busy picture (a
             painted scene with a paper mat) — a portrait, fine as it is
  small      the figure's box is under SMALL px on its long side (blurry on the
             map at 2x)
  clean      none of the above

The report is for the GM (and the PR); nothing is rewritten. `--json` writes
the full table; `--only <substring>` filters by actor name or path; exit 1 with
`--strict` when a file the repo manages as actor art (under `portraits/`) is
field / cream / key — a GM actor pointing at some other repo file (an icon) is
reported, not failed (check-all runs the strict form).

    python3 tools/audit-actor-images.py                 # the summary
    python3 tools/audit-actor-images.py --list field    # every path of one class
    python3 tools/audit-actor-images.py --json .arena-tmp/images.json
"""
import argparse
import importlib.util
import json
import os
import sys
from collections import Counter, defaultdict

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
RM = os.path.join(ROOT, "Reputation-Matrix2")
PACKETS = [
    os.path.join(RM, "actors", "worlds", "midlands", "import.json"),
    os.path.join(RM, "actors", "worlds", "midlands", "players-import.json"),
]
SMALL = 180          # a figure box under this many px on its long side is small for a 2x token
FLAT_BORDER = 0.90   # share of the border ring within BORDER_TOL of its median colour: a flat field
BORDER_TOL = 28
LIGHT = 215          # a flat border this bright (min channel) is white / cream / light grey
FIELD_SHARE = 0.30   # the border colour over this share of the whole picture: a figure on a field, not a mat around a scene


def load_module(name, path):
    spec = importlib.util.spec_from_file_location(name, path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


BRIDGE = load_module("foundry_bridge", os.path.join(HERE, "foundry-bridge.py"))
PLATES = load_module("make_token_plates", os.path.join(HERE, "make-token-plates.py"))


def actor_images(doc):
    """(role, path) for the actor's own art: the portrait and the prototype token."""
    out = []
    img = doc.get("img")
    if isinstance(img, str):
        out.append(("img", img))
    tok = (((doc.get("prototypeToken") or {}).get("texture") or {}).get("src"))
    if isinstance(tok, str):
        out.append(("token", tok))
    return out


def picture_facts(path):
    """What the file is like: opaque | field | cream | key | small | clean (+ size, figure box)."""
    from PIL import Image
    import numpy as np
    try:
        im = Image.open(path)
        im.load()
    except Exception as exc:  # noqa: BLE001
        return {"class": "unreadable", "why": str(exc)}
    w, h = im.size
    facts = {"size": [w, h], "mode": im.mode, "format": im.format}
    rgba = np.asarray(im.convert("RGBA")).astype(int)
    alpha = rgba[:, :, 3]
    has_alpha = (alpha < 250).any()
    if has_alpha:
        on = alpha > 16
        if on.any():
            ys, xs = np.where(on)
            box = [int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1]
        else:
            box = [0, 0, 0, 0]
        facts["figureBox"] = box
        why = PLATES.background_audit(path)
        long_side = max(box[2] - box[0], box[3] - box[1])
        if why:
            facts.update({"class": "field", "why": "; ".join(why)})
        elif long_side and long_side < SMALL:
            facts.update({"class": "small", "why": "figure box %dx%d px" % (box[2] - box[0], box[3] - box[1])})
        else:
            facts["class"] = "clean"
        return facts
    # no alpha: look at the border ring
    rgb = rgba[:, :, :3]
    ring = np.concatenate([rgb[0, :], rgb[-1, :], rgb[:, 0], rgb[:, -1]])
    med = np.median(ring, axis=0)
    flat = (np.abs(ring - med).max(axis=1) <= BORDER_TOL).mean()
    facts.update({"figureBox": [0, 0, w, h], "border": [int(c) for c in med], "borderFlat": round(float(flat), 3)})
    if flat >= FLAT_BORDER:
        share = float((np.abs(rgb - med).max(axis=2) <= BORDER_TOL).mean())
        facts["fieldShare"] = round(share, 3)
        near_key = min(np.sqrt(((med - np.array(v)) ** 2).sum()) for v in PLATES.KEYS.values())
        if near_key < 120:
            facts.update({"class": "key", "why": "flat key-coloured border rgb%s — never keyed" % (tuple(int(c) for c in med),)})
            return facts
        if med.min() >= LIGHT and share >= FIELD_SHARE:
            facts.update({"class": "cream", "why": "flat light border rgb%s over %d%% of the picture — a figure on a field, never cut" % (tuple(int(c) for c in med), round(share * 100))})
            return facts
        if med.min() >= LIGHT:
            facts.update({"class": "framed", "why": "flat light mat rgb%s around a picture (%d%% of it) — a portrait" % (tuple(int(c) for c in med), round(share * 100))})
            return facts
    facts["class"] = "opaque"
    return facts


def audit(packets=PACKETS, only=None):
    rows = {}        # path -> row
    users = defaultdict(list)
    for packet in packets:
        if not os.path.isfile(packet):
            continue
        raw = BRIDGE.read_json(packet)
        _meta, _folders, actors = BRIDGE.normalize_payload(raw)
        for a in actors:
            if not isinstance(a, dict):
                continue
            for role, p in actor_images(a):
                if only and only.lower() not in (a.get("name") or "").lower() and only.lower() not in p.lower():
                    continue
                users[p].append({"actor": a.get("name"), "id": a.get("_id"), "type": a.get("type"), "role": role})
    for p, who in users.items():
        status = BRIDGE.image_status(p)
        row = {"path": p, "status": status, "usedBy": who}
        if status == "ok":
            f = BRIDGE.repo_file_for(p)
            row["file"] = os.path.relpath(f, ROOT).replace(os.sep, "/")
            row["managed"] = p.replace("\\", "/").lstrip("/").startswith(BRIDGE.REPO_ROOTS)
            row.update(picture_facts(f))
        else:
            row["class"] = status
        rows[p] = row
    return rows


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("--packet", action="append", help="packet(s) to read (default: the midlands world + Players packets)")
    ap.add_argument("--only", help="filter by actor name or path substring")
    ap.add_argument("--list", metavar="CLASS", help="list every path of one class (field, cream, key, small, opaque, framed, clean, unknown, missing, server, placeholder, external)")
    ap.add_argument("--json", metavar="FILE", help="write the full table")
    ap.add_argument("--strict", action="store_true", help="exit 1 when a repo file is field / cream / key")
    args = ap.parse_args(argv)
    try:
        sys.stdout.reconfigure(encoding="utf-8")
    except Exception:  # noqa: BLE001
        pass
    rows = audit(args.packet or PACKETS, only=args.only)
    classes = Counter(r["class"] for r in rows.values())
    by_role = Counter((r["class"], u["role"]) for r in rows.values() for u in r["usedBy"])
    print("audit-actor-images: %d distinct path(s) over %d actor reference(s)" % (len(rows), sum(len(r["usedBy"]) for r in rows.values())))
    order = ["clean", "small", "opaque", "framed", "field", "cream", "key", "unreadable", "placeholder", "server", "unknown", "missing", "external", "library"]
    for c in order + sorted(set(classes) - set(order)):
        if classes.get(c):
            print("  %-12s %4d  (img %d · token %d)" % (c, classes[c], by_role.get((c, "img"), 0), by_role.get((c, "token"), 0)))
    bad = [r for r in rows.values() if r["class"] in ("field", "cream", "key")]
    failing = [r for r in bad if r.get("managed")]
    if args.list:
        for r in sorted((r for r in rows.values() if r["class"] == args.list), key=lambda r: r["path"]):
            who = ", ".join(sorted({u["actor"] or "?" for u in r["usedBy"]}))
            roles = "+".join(sorted({u["role"] for u in r["usedBy"]}))
            extra = r.get("why") or ("%dx%d" % tuple(r["size"]) if r.get("size") else "")
            print("  %-70s %-9s %s — %s" % (r["path"][:70], roles, who[:60], extra))
    elif bad:
        print("background problems in the repo's files (%d%s):" % (len(bad), "" if len(failing) == len(bad) else ", %d under portraits/" % len(failing)))
        for r in sorted(bad, key=lambda r: r["path"]):
            who = ", ".join(sorted({u["actor"] or "?" for u in r["usedBy"]}))
            print("  %-10s %s — %s (%s)%s" % (r["class"], r["path"], who[:60], r.get("why", ""), "" if r.get("managed") else " — not actor art the repo manages; the GM's pick"))
    if args.json:
        with open(args.json, "w", encoding="utf-8") as fh:
            json.dump({"paths": sorted(rows.values(), key=lambda r: r["path"]), "classes": dict(classes)}, fh, indent=2, ensure_ascii=False)
        print("wrote", args.json)
    if args.strict:
        print("OK audit-actor-images: no field / cream / key under portraits/" if not failing else "FAIL audit-actor-images: %d managed file(s) carry a background" % len(failing))
    return 1 if (args.strict and failing) else 0


if __name__ == "__main__":
    sys.exit(main())
