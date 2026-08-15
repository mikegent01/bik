"""Shared filesystem locations for the Waluipedia hub.

Every other hub module imports from here so that a single move of the tools
folder does not require touching a dozen files.
"""
from __future__ import annotations

from pathlib import Path

HUB_DIR = Path(__file__).resolve().parents[1]
TOOLS_DIR = HUB_DIR.parent
ROOT = TOOLS_DIR.parent                      # Reputation-Matrix2
SITE_ROOT = ROOT.parent                      # repository root (gh-pages)

DATA_DIR = ROOT / "data"
SHOP_ITEMS_DIR = DATA_DIR / "shop-items"
# Older extracted catalog; still holds a few items referenced by old receipts.
LEGACY_SHOP_ITEMS_DIR = ROOT / "shop-items"
PURCHASES_PATH = DATA_DIR / "commerce" / "shop-purchases.json"
WALLETS_PATH = DATA_DIR / "commerce" / "wallets.json"
CHARACTERS_PATH = DATA_DIR / "characters.json"
EVENTS_PATH = DATA_DIR / "events.json"
FACTIONS_PATH = DATA_DIR / "factions.json"
RACES_PATH = DATA_DIR / "races.json"
LOCATIONS_PATH = DATA_DIR / "locations.json"
ITEM_INDEX_PATH = SHOP_ITEMS_DIR / "item-index.json"

EXAMPLES_DIR = TOOLS_DIR / "item sheet examples"
WEB_DIR = HUB_DIR / "web"

# Everything the hub generates lands here; it is git-ignored like the other
# tool workspaces so overnight runs never dirty the site.
OUT_DIR = HUB_DIR / ".hub-out"
PILES_DIR = OUT_DIR / "item-piles"
ACTORS_DIR = OUT_DIR / "actors"
CACHE_DIR = OUT_DIR / "cache"


def ensure_out_dirs() -> None:
    for path in (OUT_DIR, PILES_DIR, ACTORS_DIR, CACHE_DIR):
        path.mkdir(parents=True, exist_ok=True)


def relative(path: Path) -> str:
    """A repo-relative, portable path string: './Reputation-Matrix2/...'.

    Always forward slashes and always prefixed './', regardless of the OS that
    produced it. Anything written into a file that gets committed must use this
    rather than str(path): a Windows absolute path baked into a generated
    artifact is meaningless on anyone else's machine and shows up as noise in
    every diff. Falls back to the absolute path only when the target genuinely
    lives outside the repository.
    """
    try:
        return "./" + Path(path).resolve().relative_to(SITE_ROOT).as_posix()
    except ValueError:
        return Path(path).as_posix()
