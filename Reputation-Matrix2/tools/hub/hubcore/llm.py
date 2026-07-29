"""Optional LM Studio client.

Everything in the hub works with the model turned off — callers use `ask_json`
and fall back to their own deterministic builder when it returns None. The
endpoint matches the other tools in this folder (LM Studio's OpenAI-compatible
server on port 1234).
"""
from __future__ import annotations

import json
import urllib.error
import urllib.request
from typing import Any

DEFAULT_ENDPOINT = "http://127.0.0.1:1234/v1/chat/completions"
MODELS_ENDPOINT = "http://127.0.0.1:1234/v1/models"


def available(endpoint: str = MODELS_ENDPOINT, timeout: int = 2) -> dict[str, Any]:
    """Cheap probe so the GUI can show an honest online/offline badge."""
    try:
        with urllib.request.urlopen(endpoint, timeout=timeout) as response:
            payload = json.loads(response.read())
        models = [entry.get("id") for entry in payload.get("data", []) if entry.get("id")]
        return {"online": True, "models": models}
    except Exception as error:                       # noqa: BLE001 - any failure means offline
        return {"online": False, "models": [], "error": str(error)}


def _strip_fence(text: str) -> str:
    text = text.strip()
    if text.startswith("```"):
        text = text.split("\n", 1)[-1] if "\n" in text else text
        text = text.removeprefix("json").strip()
        if text.endswith("```"):
            text = text[: text.rindex("```")]
    return text.strip()


def ask_json(
    system: str,
    user: str,
    *,
    endpoint: str = DEFAULT_ENDPOINT,
    model: str | None = None,
    temperature: float = 0.7,
    timeout: int = 180,
) -> dict[str, Any] | None:
    """Ask the local model for a JSON object. Returns None on any failure.

    Callers must treat None as "model unavailable" and use their offline path;
    the hub never blocks on the model being present.
    """
    payload: dict[str, Any] = {
        "messages": [
            {"role": "system", "content": system},
            {"role": "user", "content": user},
        ],
        "temperature": temperature,
    }
    if model:
        payload["model"] = model
    request = urllib.request.Request(
        endpoint,
        data=json.dumps(payload).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(request, timeout=timeout) as response:
            content = json.loads(response.read())["choices"][0]["message"]["content"]
        value = json.loads(_strip_fence(content))
        return value if isinstance(value, dict) else None
    except Exception:                                # noqa: BLE001 - offline is a normal state
        return None
