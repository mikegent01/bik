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
PURCHASES_PATH = ROOT / "../../../data/commerce/shop-purchases.json"
WALLETS_PATH = DATA_DIR / "../../../data/commerce/wallets.json"
CHARACTERS_PATH = DATA_DIR / "characters.json"
EVENTS_PATH = DATA_DIR / "../../../data/events/events.json"
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
    """Display a path relative to the repo when possible, else absolute."""
    try:
        return str(Path(path).resolve().relative_to(SITE_ROOT))
    except ValueError:
        return str(path)
