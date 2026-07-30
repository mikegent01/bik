"""Central tuning and configuration.

Everything a designer might want to change lives here rather than being
scattered through the modes, and every value is overridable by environment
variable so you can retune a session without editing code.

    WAHSIM_COMMIT=40 WAHSIM_BLOC_PULL=0.25 python3 -m wahsim congress --auto
"""
from __future__ import annotations

import os


def _num(name: str, default):
    """Read WAHSIM_<name>, coerced to the type of `default`."""
    raw = os.getenv(f'WAHSIM_{name}')
    if raw is None:
        return default
    try:
        return type(default)(raw)
    except (TypeError, ValueError):
        return default


# -- LM Studio -------------------------------------------------------------
# LM Studio ships an OpenAI-compatible server on port 1234 with no auth.
LMSTUDIO_BASE = os.getenv('WAHSIM_API_BASE', 'http://localhost:1234/v1')
LMSTUDIO_KEY = os.getenv('WAHSIM_API_KEY', 'lm-studio')
LMSTUDIO_MODEL = os.getenv('WAHSIM_MODEL', '')            # '' = auto-detect
LMSTUDIO_TIMEOUT = _num('TIMEOUT', 45)

# -- GUI -------------------------------------------------------------------
GUI_PORT = _num('GUI_PORT', 8765)
GUI_HOST = os.getenv('WAHSIM_GUI_HOST', '127.0.0.1')

# -- Engine safety ---------------------------------------------------------
MAX_TURNS = _num('MAX_TURNS', 400)        # hard stop; no mode may run forever

# -- Congress tuning -------------------------------------------------------
COMMIT_THRESHOLD = _num('COMMIT', 55)     # |lean| at which a delegate locks
LOCKED_RESISTANCE = _num('LOCKED_RESIST', 0.35)   # move multiplier once locked
BLOC_PULL = _num('BLOC_PULL', 0.10)       # drag toward the bloc mean, per round

# -- Trial tuning ----------------------------------------------------------
CASE_CLOCK = _num('CASE_CLOCK', 8)
DOUBT_CLOCK = _num('DOUBT_CLOCK', 8)
PATIENCE_CLOCK = _num('PATIENCE_CLOCK', 6)

# -- Scene tuning ----------------------------------------------------------
SCENE_LENGTH = _num('SCENE_LENGTH', 10)
