"""Keeping prompts inside the model's context window.

LM Studio reports a model's *architectural* limit (qwen2.5-7b-instruct-1m
advertises a million tokens), but what actually applies is the context length
configured when the model was loaded, which is commonly 4096. Exceeding it does
not degrade gracefully -- the server returns HTTP 400 "Context size has been
exceeded" and the task is lost.

Two rules follow, and they are the whole reason this module exists:

  1. A prompt built from archive content must be *bounded*, never "however big
     the record happens to be". The archive contains 8k-token events.
  2. A prompt must not grow as the archive grows. Listing every taken ability
     name worked at 200 abilities and broke at 892.

`fit` enforces the first: it trims the least important fields first and always
leaves something coherent behind rather than truncating mid-structure.
"""

from __future__ import annotations

import json
from typing import Any

# Assume the smallest context anyone is likely to have loaded, and leave room
# for the system prompt, the reply, and the tokeniser being worse than 4:1 on
# proper nouns (this archive is full of them).
DEFAULT_CONTEXT_TOKENS = 4096
RESERVED_FOR_REPLY_TOKENS = 900

# Deliberately pessimistic: ~3.2 chars/token rather than the usual 4.
CHARS_PER_TOKEN = 3.2


def char_budget(
    *,
    context_tokens: int = DEFAULT_CONTEXT_TOKENS,
    reserved_tokens: int = RESERVED_FOR_REPLY_TOKENS,
    system_prompt: str = "",
) -> int:
    """How many characters of user prompt are safe to send."""
    usable = max(256, context_tokens - reserved_tokens)
    budget = int(usable * CHARS_PER_TOKEN) - len(system_prompt)
    return max(512, budget)


def estimate_tokens(text: str) -> int:
    return int(len(text) / CHARS_PER_TOKEN) + 1


def fit(
    view: dict[str, Any],
    budget_chars: int,
    *,
    priority: list[str] | None = None,
    min_field_chars: int = 160,
) -> dict[str, Any]:
    """Shrink `view` until its JSON form fits `budget_chars`.

    Fields early in `priority` are protected; everything else is trimmed, and
    then dropped, from the back. The result is always valid JSON -- a record
    that has lost its `casualties` list is still usable, one cut mid-string is
    not.
    """
    if not view:
        return view

    order = list(priority or [])
    tail = [k for k in view if k not in order]
    # Trim the biggest low-priority fields first: one 4 KB description costs
    # more than every short field combined.
    tail.sort(key=lambda k: len(json.dumps(view[k], ensure_ascii=False)), reverse=True)
    trim_order = tail + [k for k in reversed(order) if k in view]

    out = dict(view)

    def size() -> int:
        return len(json.dumps(out, ensure_ascii=False, indent=2))

    # Pass 1: shorten long strings.
    for key in trim_order:
        if size() <= budget_chars:
            return out
        value = out.get(key)
        if isinstance(value, str) and len(value) > min_field_chars:
            excess = size() - budget_chars
            keep = max(min_field_chars, len(value) - excess - 16)
            if keep < len(value):
                out[key] = value[:keep].rstrip() + " […]"

    # Pass 2: drop whole fields, lowest priority first, never the protected head.
    protected = set(order[:4])
    for key in trim_order:
        if size() <= budget_chars:
            return out
        if key in protected:
            continue
        out.pop(key, None)

    # Pass 3: last resort — the protected fields alone are still too big.
    for key in list(reversed(order)):
        if size() <= budget_chars:
            return out
        value = out.get(key)
        if isinstance(value, str) and len(value) > min_field_chars:
            out[key] = value[:min_field_chars].rstrip() + " […]"

    return out


def sample_evenly(items: list[str], cap: int) -> list[str]:
    """A stable, evenly spaced sample — not the alphabetical head.

    Used for "names already taken" hints, where the point is to cover the
    namespace rather than to be exhaustive.
    """
    if cap <= 0:
        return []
    if len(items) <= cap:
        return list(items)
    step = len(items) / float(cap)
    return [items[int(i * step)] for i in range(cap)]
