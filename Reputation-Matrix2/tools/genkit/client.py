"""LM Studio chat client.

Same shape as the one inside `generate_abilities.py`, with two differences:

  * it is thread-safe by being stateless — each call builds its own request,
    so N workers can share one instance,
  * it retries invalid JSON by *telling the model what broke*, which in
    practice fixes most of the failures a smaller local model produces.

Deliberately no `response_format` in the payload: several LM Studio builds
reject it with HTTP 400.
"""

from __future__ import annotations

import json
import re
import urllib.error
import urllib.request
from typing import Any

FENCE = re.compile(r"^```(?:json)?\s*|\s*```$", re.IGNORECASE)


class LMStudioError(RuntimeError):
    pass


class LMStudioClient:
    def __init__(self, endpoint: str, model: str = "", timeout: int = 240) -> None:
        self.endpoint = endpoint
        self.model = model
        self.timeout = timeout

    def ping(self) -> str:
        """Return the first model id the server advertises, or raise."""
        models_url = self.endpoint.split("/chat/completions")[0] + "/models"
        try:
            with urllib.request.urlopen(models_url, timeout=10) as response:
                body = json.loads(response.read())
        except Exception as error:  # noqa: BLE001 - surfaced verbatim to the UI
            raise LMStudioError(
                f"No LM Studio at {models_url}. Start it and enable the local "
                f"server. ({error})"
            ) from error
        data = body.get("data") or []
        if not data:
            raise LMStudioError("LM Studio is running but has no model loaded.")
        return str(data[0].get("id", ""))

    def complete_json(
        self,
        system_prompt: str,
        user_prompt: str,
        *,
        temperature: float = 0.7,
        attempts: int = 3,
    ) -> dict[str, Any]:
        messages = [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt},
        ]
        payload: dict[str, Any] = {"messages": messages, "temperature": temperature}
        if self.model:
            payload["model"] = self.model

        last_error: Exception | None = None
        for attempt in range(attempts):
            if attempt:
                messages.append(
                    {
                        "role": "user",
                        "content": (
                            f"Your previous response was invalid JSON ({last_error}). "
                            "Return the same answer as strictly valid JSON only, "
                            "every string escaped, no commentary, no code fence."
                        ),
                    }
                )
            request = urllib.request.Request(
                self.endpoint,
                data=json.dumps(payload).encode("utf-8"),
                headers={"Content-Type": "application/json; charset=utf-8"},
                method="POST",
            )
            try:
                with urllib.request.urlopen(request, timeout=self.timeout) as response:
                    body = json.loads(response.read())
            except urllib.error.HTTPError as error:
                detail = error.read().decode("utf-8", errors="replace").strip()
                raise LMStudioError(
                    f"LM Studio HTTP {error.code}: {detail or error.reason}"
                ) from error
            except Exception as error:  # noqa: BLE001
                raise LMStudioError(f"LM Studio unreachable: {error}") from error

            content = body["choices"][0]["message"]["content"]
            if not isinstance(content, str):
                last_error = ValueError("LM Studio returned a non-text response")
                continue
            content = FENCE.sub("", content.strip())
            try:
                parsed = json.loads(content)
            except json.JSONDecodeError as error:
                last_error = error
                continue
            if not isinstance(parsed, dict):
                last_error = ValueError("expected a JSON object at the top level")
                continue
            return parsed

        raise LMStudioError(f"Invalid JSON after {attempts} attempts: {last_error}")
