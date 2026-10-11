#!/usr/bin/env python3
"""Shard the four filing JSON stores, and rebuild the site bundles from them.

Source of truth (what you edit):

    Reputation-Matrix2/data/stores/<kind>/<world>/<year>.json

Generated (what the site fetches — do not hand-edit):

    Reputation-Matrix2/data/events.json
    Reputation-Matrix2/data/characters.json
    Reputation-Matrix2/data/locations.json
    Reputation-Matrix2/data/battles.json

`--split` reads the current bundles once and writes the shard tree.
`--build` concatenates shards in original order back into the bundles.
`--check` verifies every id lives in exactly one shard and the bundle
matches the concat.

Usage:
    python3 tools/build-json-stores.py --split
    python3 tools/build-json-stores.py --build
    python3 tools/build-json-stores.py --check
    python3 tools/build-json-stores.py --split --build --check
"""
from __future__ import annotations

import argparse
import sys
from collections import defaultdict
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "tools"))
import storelib as sl  # noqa: E402


def split_kind(kind: str, locations: list[dict]) -> dict:
    records = sl.rows_of(sl.load_json(sl.bundle_path(kind)), kind)
    loc_by_id, loc_by_name, name_keys = sl.loc_indexes(locations)
    assigned = sl.assign_shard_keys(
        kind, records, loc_by_id, loc_by_name, name_keys)

    grouped: dict[str, list[dict]] = defaultdict(list)
    for key, rec in assigned:
        grouped[key].append(rec)
    packed = sl._pack(grouped)

    # remap ids after packing (keys may have grown -a/-b suffixes)
    id_to_key: dict[str, str] = {}
    for key, recs in packed.items():
        for rec in recs:
            rid = rec.get("id")
            if rid:
                id_to_key[str(rid)] = key

    kind_dir = sl.STORES_DIR / kind
    if kind_dir.exists():
        for p in kind_dir.rglob("*.json"):
            p.unlink()

    written = []
    for key, recs in packed.items():
        rel = sl.shard_relpath(kind, key)
        path = sl.STORES_DIR / rel
        path.parent.mkdir(parents=True, exist_ok=True)
        path.write_text(sl.dumps(recs), encoding="utf-8")
        written.append((rel, len(recs), path.stat().st_size))

    order = [str(r.get("id")) for r in records if r.get("id")]
    shards = {rid: sl.shard_relpath(kind, id_to_key[rid])
              for rid in order if rid in id_to_key}
    raw = sl.load_json(sl.bundle_path(kind))
    spec = {
        "bundle": f"{kind}.json",
        "n": len(order),
        "order": order,
        "shards": shards,
        "_files": written,
    }
    if kind in sl.WRAPPER_KEYS:
        spec["wrapper"] = sl.WRAPPER_KEYS[kind]
        readme = sl.readme_of(raw)
        if readme is not None:
            spec["readme"] = readme
    return spec


def build_kind(kind: str, spec: dict) -> list[dict]:
    cache: dict[str, dict[str, dict]] = {}
    rows = []
    for rid in spec.get("order") or []:
        rel = (spec.get("shards") or {}).get(rid)
        if not rel:
            raise SystemExit(f"{kind}: {rid} has no shard mapping")
        if rel not in cache:
            path = sl.STORES_DIR / rel
            recs = sl.rows_of(sl.load_json(path), kind)
            cache[rel] = {str(r.get("id")): r for r in recs}
        rec = cache[rel].get(rid)
        if rec is None:
            raise SystemExit(f"{kind}: {rid} missing from {rel}")
        rows.append(rec)
    sl.write_bundle(kind, rows, readme=(spec.get("readme")))
    return rows


def check_kind(kind: str, spec: dict) -> list[str]:
    errors = []
    order = spec.get("order") or []
    mapping = spec.get("shards") or {}
    seen_files: dict[str, set[str]] = defaultdict(set)
    for rid in order:
        rel = mapping.get(rid)
        if not rel:
            errors.append(f"{kind}: {rid} not in manifest shards")
            continue
        path = sl.STORES_DIR / rel
        if not path.exists():
            errors.append(f"{kind}: shard missing {rel}")
            continue
        if rel not in seen_files:
            recs = sl.rows_of(sl.load_json(path), kind)
            seen_files[rel] = {str(r.get("id")) for r in recs if r.get("id")}
        if rid not in seen_files[rel]:
            errors.append(f"{kind}: {rid} not inside {rel}")
    # duplicate ids across shards
    inverse: dict[str, list[str]] = defaultdict(list)
    for rid, rel in mapping.items():
        inverse[rid].append(rel)
    for rid, rels in inverse.items():
        if len(rels) > 1:
            errors.append(f"{kind}: {rid} mapped to {rels}")
    bundle = sl.bundle_path(kind)
    if not bundle.exists():
        errors.append(f"{kind}: bundle missing")
        return errors
    bundle_ids = [str(r.get("id")) for r in sl.rows_of(sl.load_json(bundle), kind)
                  if r.get("id")]
    if bundle_ids != order:
        errors.append(
            f"{kind}: bundle order != manifest "
            f"(bundle {len(bundle_ids)}, manifest {len(order)})")
    return errors


def print_tree(manifest: dict) -> None:
    print(f"\n{sl.STORES_DIR.relative_to(sl.ROOT)}/")
    for kind in sl.KINDS:
        spec = manifest.get(kind) or {}
        files: dict[str, int] = defaultdict(int)
        for rel in (spec.get("shards") or {}).values():
            files[rel] += 1
        print(f"  {kind}/  {spec.get('n', 0)} records, {len(files)} files")
        for rel in sorted(files):
            path = sl.STORES_DIR / rel
            kb = path.stat().st_size / 1024 if path.exists() else 0
            print(f"    {rel:48} {files[rel]:4} rec  {kb:6.1f} KB")


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--split", action="store_true",
                    help="carve the current bundles into world/date shards")
    ap.add_argument("--build", action="store_true",
                    help="rebuild the four bundles from shards")
    ap.add_argument("--check", action="store_true",
                    help="verify shards + bundles agree")
    args = ap.parse_args()
    if not (args.split or args.build or args.check):
        ap.print_help()
        return 2

    sl.STORES_DIR.mkdir(parents=True, exist_ok=True)
    manifest = {}
    if sl.MANIFEST_PATH.exists() and not args.split:
        manifest = sl.load_json(sl.MANIFEST_PATH)

    if args.split:
        locations = sl.rows_of(sl.load_json(sl.bundle_path("locations")), "locations")
        for kind in sl.KINDS:
            print(f"splitting {kind}…", flush=True)
            spec = split_kind(kind, locations)
            files = spec.pop("_files")
            manifest[kind] = spec
            print(f"  {kind}: {spec['n']} records → {len(files)} shard files")
        sl.MANIFEST_PATH.write_text(sl.dumps(manifest), encoding="utf-8")

    if args.build:
        if not manifest:
            raise SystemExit("no manifest — run --split first")
        for kind in sl.KINDS:
            rows = build_kind(kind, manifest[kind])
            print(f"built {kind}.json ({len(rows)} records)")

    if args.check:
        if not sl.MANIFEST_PATH.exists():
            print("FAIL  stores: no manifest", file=sys.stderr)
            return 1
        manifest = sl.load_json(sl.MANIFEST_PATH)
        errors = []
        for kind in sl.KINDS:
            errors.extend(check_kind(kind, manifest.get(kind) or {}))
        if errors:
            print("FAIL  json stores")
            for e in errors[:40]:
                print(" ", e)
            if len(errors) > 40:
                print(f"  … +{len(errors) - 40} more")
            return 1
        print("PASS  json stores")
        print_tree(manifest)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
