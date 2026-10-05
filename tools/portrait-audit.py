#!/usr/bin/env python3
"""portrait-audit.py — what every character's art can and cannot do.

Reads `characters.json` + `data/sheets.json` and answers, per article:
is the lead image local and present (or a hotlink / missing), what are its
pixel dimensions, is there a full-body plate (`fullBody`) for the token, and
is the character one the table places on the map (party / public sheet). It
also flags leads that are not portraits at all (an event scene used as a
character image) and lists the generated sheets still on the placeholder.

  python3 tools/portrait-audit.py            # the summary + the gaps
  python3 tools/portrait-audit.py --table    # one markdown row per article (for a run report)
  python3 tools/portrait-audit.py --orphans  # files under portraits/ that no record, page, tool or packet points at
  python3 tools/portrait-audit.py --check    # exit 1 on a hotlinked / missing lead or a generated sheet on the placeholder

`--orphans` exists because the 2026-10-05 pass found a shelf of finished
plates (Captain Syrup, Captain Toadette, Creek, Speaker Rivers' sprite…)
sitting unreferenced while the articles pointed at hotlinks and event
scenes. It is a list to read, not a gate: duplicates of a lead under a
`_v2` name are reported as such, sprite-sheet poses are an asset set.

Framing (bust / half / full body) is a judgement the tool cannot make from
pixels; the 2026-10-05 pass is written down in
docs/run-reports/2026-10-05-portrait-audit.md and only needs re-doing for a
new plate.
"""
import argparse
import json
import os
import struct
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
RM = os.path.join(ROOT, "Reputation-Matrix2")
CHARACTERS = os.path.join(RM, "data", "characters.json")
SHEETS = os.path.join(RM, "data", "sheets.json")
PLACEHOLDER = "icons/svg/mystery-man.svg"


def dimensions(path):
    """(w, h) from the file header — PNG, JPEG, WebP, GIF — without PIL."""
    try:
        with open(path, "rb") as fh:
            head = fh.read(32)
            if head[:8] == b"\x89PNG\r\n\x1a\n":
                return struct.unpack(">II", head[16:24])
            if head[:6] in (b"GIF87a", b"GIF89a"):
                return struct.unpack("<HH", head[6:10])
            if head[:4] == b"RIFF" and head[8:12] == b"WEBP":
                fh.seek(12)
                chunk = fh.read(30)
                if chunk[:4] == b"VP8X":
                    return (1 + int.from_bytes(chunk[12:15], "little"), 1 + int.from_bytes(chunk[15:18], "little"))
                if chunk[:4] == b"VP8L":
                    b = chunk[9:13]
                    return (1 + (((b[1] & 0x3F) << 8) | b[0]), 1 + (((b[3] & 0x0F) << 10) | (b[2] << 2) | ((b[1] & 0xC0) >> 6)))
                if chunk[:4] == b"VP8 ":
                    return (int.from_bytes(chunk[14:16], "little") & 0x3FFF, int.from_bytes(chunk[16:18], "little") & 0x3FFF)
            if head[:2] == b"\xff\xd8":
                fh.seek(2)
                while True:
                    marker = fh.read(2)
                    if len(marker) < 2 or marker[0] != 0xFF:
                        return None
                    if marker[1] in (0xC0, 0xC1, 0xC2, 0xC3, 0xC5, 0xC6, 0xC7, 0xC9, 0xCA, 0xCB, 0xCD, 0xCE, 0xCF):
                        fh.read(3)
                        h, w = struct.unpack(">HH", fh.read(4))
                        return (w, h)
                    (size,) = struct.unpack(">H", fh.read(2))
                    fh.seek(size - 2, 1)
    except (OSError, struct.error):
        return None
    return None


def audit():
    arts = json.load(open(CHARACTERS, encoding="utf-8"))
    sheets = json.load(open(SHEETS, encoding="utf-8"))
    sheet_rows = sheets.get("sheets", sheets) if isinstance(sheets, dict) else sheets
    by_sheet = {s["id"]: s for s in sheet_rows}
    rows = []
    for a in arts:
        im = (a.get("image") or "").replace("\\", "/")
        fb = (a.get("fullBody") or "").replace("\\", "/")
        s = by_sheet.get(a["id"], {})
        kind = ("remote" if im.startswith("http") else "none" if not im else
                "local" if os.path.isfile(os.path.join(RM, im)) else "missing")
        dims = dimensions(os.path.join(RM, im)) if kind == "local" else None
        rows.append(dict(
            id=a["id"], name=a.get("name", ""), image=im, kind=kind, dims=dims,
            scene=im.startswith("assets/images/events/"),
            fullBody=fb, fullBodyOk=bool(fb) and os.path.isfile(os.path.join(RM, fb)),
            party=bool(s.get("party")), public=bool(s.get("public", s.get("party"))), source=s.get("source", ""),
            placeholder=(s.get("portrait") in ("", None) and s.get("source") == "generated"),
            generated=bool(a.get("generatedBy")),
        ))
    return rows


ORPHAN_SOURCES = ("data/*.json", "data/**/*.js", "app/**/*.html", "app/**/*.js", "*.html", "*.js", "actors/**/*.json",
                  "../index.html", "../assets/chatroom/*.js", "../assets/chatroom/*.json", "../tools/*.py", "../docs/*.md")
ORPHAN_SKIP = ("portraits/player/sprite-sheets/",)
IMAGE_EXT = (".png", ".jpg", ".jpeg", ".webp", ".gif")


def orphans():
    """[(relative path, 'duplicate of <lead>' | '')] for images under portraits/ nothing references."""
    import glob
    import hashlib
    import re
    rx = re.compile(r"portraits/[A-Za-z0-9_./ \-]+?\.(?:png|jpe?g|webp|gif)", re.I)
    refs = set()
    for pat in ORPHAN_SOURCES:
        for f in glob.glob(os.path.join(RM, pat), recursive=True):
            try:
                text = open(f, encoding="utf-8", errors="ignore").read()
            except OSError:
                continue
            refs.update(m.group(0).replace("\\", "/") for m in rx.finditer(text))
    by_hash = {}
    for r in refs:
        f = os.path.join(RM, r)
        if os.path.isfile(f):
            by_hash.setdefault(hashlib.md5(open(f, "rb").read()).hexdigest(), r)
    out = []
    for f in sorted(glob.glob(os.path.join(RM, "portraits", "**", "*"), recursive=True)):
        rel = os.path.relpath(f, RM).replace(os.sep, "/")
        if not os.path.isfile(f) or not rel.lower().endswith(IMAGE_EXT) or rel.startswith(ORPHAN_SKIP) or rel in refs:
            continue
        twin = by_hash.get(hashlib.md5(open(f, "rb").read()).hexdigest())
        out.append((rel, f"duplicate of {twin}" if twin else ""))
    return out


def main(argv=None):
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("--table", action="store_true")
    ap.add_argument("--orphans", action="store_true")
    ap.add_argument("--check", action="store_true")
    a = ap.parse_args(argv)
    if a.orphans:
        lst = orphans()
        dup = sum(1 for _, why in lst if why)
        print(f"portrait-audit: {len(lst)} file(s) under portraits/ that nothing references ({dup} byte-identical to a referenced lead; sprite-sheet poses skipped)")
        for rel, why in lst:
            print(f"  {rel}{'  — ' + why if why else ''}")
        return 0
    rows = audit()
    if a.table:
        print("| id | lead | size | full-body plate | party |")
        print("|---|---|---|---|---|")
        for r in rows:
            size = f"{r['dims'][0]}×{r['dims'][1]}" if r["dims"] else "—"
            print(f"| `{r['id']}` | {r['kind']}{' (event scene)' if r['scene'] else ''} | {size} | {'yes' if r['fullBodyOk'] else '—'} | {'party' if r['party'] else ''} |")
        return 0
    n = len(rows)
    remote = [r for r in rows if r["kind"] == "remote"]
    missing = [r for r in rows if r["kind"] in ("missing", "none")]
    scene = [r for r in rows if r["scene"]]
    fb = [r for r in rows if r["fullBodyOk"]]
    party = [r for r in rows if r["party"]]
    party_no_fb = [r for r in party if not r["fullBodyOk"]]
    placeholder = [r for r in rows if r["placeholder"]]
    small = [r for r in rows if r["dims"] and max(r["dims"]) < 200 and not r["generated"]]
    print(f"portrait-audit: {n} articles — {n - len(remote) - len(missing)} local leads, {len(remote)} hotlinked, {len(missing)} missing; "
          f"{len(fb)} full-body plates ({len(party) - len(party_no_fb)}/{len(party)} party); {len(scene)} event scenes used as a lead; "
          f"{len(placeholder)} generated sheet(s) on the placeholder; {len(small)} hand-filed lead(s) under 200 px")
    for label, lst in (("hotlinked", remote), ("missing", missing), ("event scene as lead", scene), ("party without a full-body plate", party_no_fb),
                       ("generated sheet on the placeholder", placeholder), ("under 200 px", small)):
        for r in lst:
            print(f"  {label:<36} {r['id']:<40} {r['image']}")
    if a.check and (remote or missing or placeholder):
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
