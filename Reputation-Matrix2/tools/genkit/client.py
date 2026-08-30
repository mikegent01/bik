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


class ContextExceededError(LMStudioError):
    """The prompt did not fit the model's *loaded* context length.

    Worth its own type because it is the one LM Studio failure that is our
    fault and is fixable in-process: retrying the same prompt will fail
    identically forever, but retrying a shorter one usually succeeds. Note
    that the loaded context is often 4096 even when the model advertises far
    more, so this cannot be predicted from the model name.
    """


_CONTEXT_MARKERS = (
    "context size has been exceeded",
    "context length has been exceeded",
    "exceeds the context",
    "context_length_exceeded",
    "too many tokens",
    "channel error",
    "connection reset",
    "remote end closed",
)


def _is_context_error(detail: str) -> bool:
    low = detail.lower()
    return any(marker in low for marker in _CONTEXT_MARKERS)


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
        max_tokens: int = 1200,
    ) -> dict[str, Any]:
        
        # Globally inject JSON template at the end of user prompt (after any shortening)
        import re
        # Only inject if there's exactly one JSON schema pattern.
        # We can find the last JSON block. If there are multiple, appending the last one might be wrong.
        # Actually, let's just search for the last JSON block.
        # Wait, if we use r"\{[^{]*<[^>]*>.*\}" we can match a schema.
        # Let's just avoid injecting for CLASSIFY_SYSTEM which has "For anything else:"
        match = re.search(r"(\{.*\})", system_prompt, re.DOTALL)
        if match and "For anything else:" not in system_prompt and "For a real faction:" not in system_prompt:
            schema = match.group(1)
            schema = re.sub(r'"<[^>]*>"', '""', schema)
            schema = re.sub(r'\[\s*"<[^>]*>"(?:\s*,\s*"<[^>]*>")*\s*\]', '[""]', schema)
            schema = re.sub(r':\s*<integer[^>]*>', ': 0', schema)
            
            # For Qwen 3.5 9b, we also append an assistant message in the messages array!
            # Wait, the user specifically asked for a premade json that it just fills out.
            user_prompt = user_prompt.strip() + "\n\nCopy and fill out this exact JSON structure and return only the JSON:\n" + schema

        messages = [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt},
        ]
        payload: dict[str, Any] = {
            "messages": messages, 
            "temperature": temperature,
            "max_tokens": max_tokens,
        }
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
                message = f"LM Studio HTTP {error.code}: {detail or error.reason}"
                if _is_context_error(detail):
                    raise ContextExceededError(message) from error
                raise LMStudioError(message) from error
            except urllib.error.URLError as error:
                err_str = str(error)
                if "Channel Error" in err_str or "Remote end closed connection" in err_str or "Connection reset" in err_str:
                    # LM studio abruptly dropping the connection usually means it crashed during generation, which is a symptom of hitting context limits.
                    raise ContextExceededError(f"Connection dropped mid-generation, assuming context limit hit: {err_str}") from error
                raise LMStudioError(f"LM Studio unreachable: {error}") from error
            except Exception as error:  # noqa: BLE001
                err_str = str(error)
                if "Channel Error" in err_str or "Connection reset" in err_str or "Remote end closed connection" in err_str:
                    raise ContextExceededError(f"Connection dropped mid-generation, assuming context limit hit: {err_str}") from error
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
