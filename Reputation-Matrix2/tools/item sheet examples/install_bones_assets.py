#!/usr/bin/env python3
"""Install Bones's generated art into a Foundry VTT data directory.

This script is deliberately safe to run repeatedly. It copies the bundled PNGs
into Foundry's Data/images/bones/ directory and rewrites the actor export so
Foundry receives paths relative to the Data directory, for example:

    images/bones/bones-weapons.png

Windows example:
    py install_bones_assets.py

Custom Foundry location:
    py install_bones_assets.py --foundry-data "D:\\Foundry\\Data"

The script never writes outside the directory supplied by --foundry-data. The
JSON export is updated in place unless --no-json is supplied; a .bak backup is
created before the first rewrite.
"""
from __future__ import annotations

import argparse
import json
import shutil
from pathlib import Path

DEFAULT_FOUNDRY_DATA = Path(r"C:\Users\mikeg\AppData\Local\FoundryVTT\Data")
SCRIPT_DIR = Path(__file__).resolve().parent
ASSET_DIR = SCRIPT_DIR / "assets"
ACTOR_JSON = SCRIPT_DIR / "fvtt-Actor-bones-level-5-infiltrator-player.json"
INSTALL_DIR_NAME = "bones"

# Item names are intentionally explicit. This prevents a future item with a
# similar name from receiving an unexpected image.
ITEM_IMAGE_BY_NAME = {
    "Longsword": "bones-weapons.png",
    "Vile Mace": "bones-weapons.png",
    "Light Crossbow": "bones-weapons.png",
    "Wooden Shield": "bones-weapons.png",
    "Leather Armor": "bones-field-kit.png",
    "Winter Coat": "bones-field-kit.png",
    "Disguise Kit": "bones-field-kit.png",
    "Thieves' Tools": "bones-field-kit.png",
    "Alpine Inn Key": "bones-chronicle.png",
    "Fundamentals of Abjuration": "bones-codex.png",
    "Veins of the Tapestry": "bones-codex.png",
    "Field Journal — Thornbury": "bones-chronicle.png",
    "Midland Ducats": "bones-field-kit.png",
    "Bone Ash, Live Wood, Iron Dust, Chalk": "bones-codex.png",
}


def data_relative(filename: str) -> str:
    """Return the Foundry path, always using forward slashes."""
    return f"images/{INSTALL_DIR_NAME}/{filename}"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--foundry-data",
        type=Path,
        default=DEFAULT_FOUNDRY_DATA,
        help=f"Foundry Data directory (default: {DEFAULT_FOUNDRY_DATA})",
    )
    parser.add_argument(
        "--actor",
        type=Path,
        default=ACTOR_JSON,
        help="Bones actor JSON to rewrite (default: bundled actor export)",
    )
    parser.add_argument(
        "--no-json",
        action="store_true",
        help="Only copy images; do not rewrite the actor JSON",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Show planned copies and JSON changes without writing anything",
    )
    return parser.parse_args()


def install_images(foundry_data: Path, dry_run: bool) -> Path:
    destination = foundry_data / "images" / INSTALL_DIR_NAME
    print(f"Image destination: {destination}")
    if not dry_run:
        destination.mkdir(parents=True, exist_ok=True)

    expected = sorted(ASSET_DIR.glob("*.png"))
    if not expected:
        raise FileNotFoundError(f"No PNG assets found in {ASSET_DIR}")

    for source in expected:
        target = destination / source.name
        print(f"  COPY {source.name} -> {target}")
        if not dry_run:
            shutil.copy2(source, target)
    return destination


def rewrite_actor(actor_path: Path, dry_run: bool) -> int:
    if not actor_path.exists():
        raise FileNotFoundError(f"Actor JSON not found: {actor_path}")
    with actor_path.open("r", encoding="utf-8") as handle:
        actor = json.load(handle)

    changed = 0
    portrait = data_relative("bones-portrait.png")
    if actor.get("img") != portrait:
        actor["img"] = portrait
        changed += 1
    token = actor.setdefault("prototypeToken", {})
    texture = token.setdefault("texture", {})
    if texture.get("src") != portrait:
        texture["src"] = portrait
        changed += 1
    tokenflip = actor.setdefault("flags", {}).setdefault("tokenflip", {})
    for face in tokenflip.get("tokenfaces", []):
        if face.get("img") != portrait:
            face["img"] = portrait
            changed += 1

    for document in actor.get("items", []):
        name = document.get("name", "")
        filename = ITEM_IMAGE_BY_NAME.get(name)
        if filename is None:
            # Features, chronology cards, class, race, and background use the
            # campaign dossier image. Their item descriptions remain distinct.
            filename = "bones-chronicle.png"
        new_path = data_relative(filename)
        if document.get("img") != new_path:
            document["img"] = new_path
            changed += 1

    # Keep the actor export self-documenting for later reinstallation.
    actor.setdefault("flags", {}).setdefault("bik", {})["imageInstallRoot"] = data_relative("")
    if dry_run:
        print(f"  WOULD rewrite {changed} actor image paths in {actor_path}")
        return changed

    backup = actor_path.with_suffix(actor_path.suffix + ".bak")
    if not backup.exists():
        shutil.copy2(actor_path, backup)
        print(f"  BACKUP {backup}")
    with actor_path.open("w", encoding="utf-8") as handle:
        json.dump(actor, handle, indent=2, ensure_ascii=False)
        handle.write("\n")
    print(f"  UPDATED {changed} image paths in {actor_path}")
    return changed


def main() -> int:
    args = parse_args()
    foundry_data = args.foundry_data.expanduser()
    print("Bones asset installer")
    print(f"Foundry Data: {foundry_data}")
    if args.dry_run:
        print("DRY RUN — no files will be changed")

    install_images(foundry_data, args.dry_run)
    if not args.no_json:
        rewrite_actor(args.actor, args.dry_run)

    print("Done. Import the updated actor JSON into Foundry.")
    print(f"Actor image paths are relative to Data/: {data_relative('bones-portrait.png')}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
