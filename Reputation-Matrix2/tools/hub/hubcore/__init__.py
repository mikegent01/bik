"""Waluipedia tooling hub — shared library.

Modules:
    paths      filesystem locations
    dataio     cached loaders for JSON + ES-module game data
    registry   discovery of every runnable tool/function in tools/
    piles      shop purchases -> Foundry item-pile actors
    creator    lore-driven character creator (Foundry actor JSON)
    llm        optional LM Studio client
"""
from __future__ import annotations

__all__ = ["paths", "dataio", "registry", "piles", "creator", "llm"]
__version__ = "1.0.0"
