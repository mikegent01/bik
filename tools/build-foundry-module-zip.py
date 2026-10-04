#!/usr/bin/env python3
"""Zip a Foundry module folder reproducibly so "Install Module → Manifest URL"
works straight from the published site.

    python3 tools/build-foundry-module-zip.py            # write the zip(s)
    python3 tools/build-foundry-module-zip.py --check    # verify, write nothing

The archive holds the module files at its root (module.json first), with fixed
timestamps and sorted names, so the same sources always give the same bytes.
`--check` compares the member list and CRCs with what the folder would produce.
"""
from __future__ import annotations

import argparse
import os
import sys
import zipfile
import zlib

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FOUNDRY = os.path.join(ROOT, "Reputation-Matrix2", "Foundry")
MODULES = {"mass_import": "mass_import.zip"}
STAMP = (2026, 10, 3, 0, 0, 0)
SKIP_EXT = (".zip", ".tmp", ".bak")


def members(folder):
    out = []
    for cur, dirs, files in os.walk(folder):
        dirs.sort()
        for fn in sorted(files):
            if fn.endswith(SKIP_EXT) or fn.startswith("."):
                continue
            full = os.path.join(cur, fn)
            out.append((os.path.relpath(full, folder).replace(os.sep, "/"), full))
    out.sort(key=lambda m: (m[0] != "module.json", m[0]))
    return out


def build(folder, out_path):
    tmp = out_path + ".tmp"
    with zipfile.ZipFile(tmp, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as zf:
        for arc, full in members(folder):
            info = zipfile.ZipInfo(arc, date_time=STAMP)
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = 0o644 << 16
            with open(full, "rb") as fh:
                zf.writestr(info, fh.read())
    os.replace(tmp, out_path)


def expected_crcs(folder):
    crcs = {}
    for arc, full in members(folder):
        with open(full, "rb") as fh:
            crcs[arc] = zlib.crc32(fh.read()) & 0xFFFFFFFF
    return crcs


def main():
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n")[0])
    ap.add_argument("--check", action="store_true")
    args = ap.parse_args()
    problems = []
    for name, zip_name in MODULES.items():
        folder = os.path.join(FOUNDRY, name)
        out_path = os.path.join(FOUNDRY, zip_name)
        if not os.path.isdir(folder):
            problems.append(f"missing module folder {folder}")
            continue
        if args.check:
            if not os.path.exists(out_path):
                problems.append(f"{zip_name} missing — run tools/build-foundry-module-zip.py")
                continue
            with zipfile.ZipFile(out_path) as zf:
                actual = {i.filename: i.CRC for i in zf.infolist()}
            want = expected_crcs(folder)
            if actual != want:
                problems.append(f"{zip_name} is stale — run tools/build-foundry-module-zip.py")
            else:
                print(f"OK {zip_name}: {len(want)} files current")
        else:
            build(folder, out_path)
            print(f"wrote Reputation-Matrix2/Foundry/{zip_name} ({os.path.getsize(out_path)} bytes, {len(members(folder))} files)")
    for p in problems:
        print("  " + p, file=sys.stderr)
    return 1 if problems else 0


if __name__ == "__main__":
    sys.exit(main())
