"""LM Studio chat client - thread-safe, context-aware, with smart retry."""

from __future__ import annotations

import json
import re
import urllib.error
import urllib.request
from typing import Any

FENCE = re.compile(r"^```(?:json)?\s*|\s*```$", re.IGNORECASE | re.MULTILINE)

# How aggressively to trim prompts when context is exceeded.
# Each tier removes more content from the user prompt.
_TRIM_TIERS = [0.75, 0.5, 0.35, 0.25]


class LMStudioError(RuntimeError):
    pass


class ContextExceededError(LMStudioError):
    """The prompt did not fit the model's loaded context length.

    Raised when LM Studio signals the prompt is too long, or when the
    connection is dropped mid-generation (a common symptom of KV cache
    exhaustion in smaller builds).

    Callers should catch this and retry with a shorter prompt rather than
    the same one — retrying identically will always fail.
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
    "kv cache",
    "prompt is too long",
    "tokens exceed",
)

_CONNECTION_DROP_MARKERS = (
    "Channel Error",
    "Remote end closed connection",
    "Connection reset",
    "Connection aborted",
    "Broken pipe",
)


def _is_context_error(detail: str) -> bool:
    low = detail.lower()
    return any(marker in low for marker in _CONTEXT_MARKERS)


def _is_connection_drop(err_str: str) -> bool:
    return any(marker in err_str for marker in _CONNECTION_DROP_MARKERS)


def _trim_prompt(prompt: str, ratio: float) -> str:
    """Keep the first `ratio` fraction of a prompt by character count.

    Tries to cut at a paragraph boundary so the surviving text stays
    coherent. Falls back to a hard slice if no boundary is found.
    """
    target = max(64, int(len(prompt) * ratio))
    if target >= len(prompt):
        return prompt
    # Walk backwards from target looking for a blank line.
    cut = prompt.rfind("\n\n", 0, target)
    if cut == -1:
        cut = prompt.rfind("\n", 0, target)
    if cut == -1:
        cut = target
    trimmed = prompt[:cut].rstrip()
    note = f"\n\n[...content trimmed to fit model context ({ratio:.0%} kept)...]"
    return trimmed + note


class LMStudioClient:
    """Thread-safe LM Studio client.

    Each call to `complete_json` is fully self-contained: no shared mutable
    state, so N worker threads can share one instance safely.

    Context handling
    ----------------
    When the server signals a context overflow (HTTP error, connection drop,
    or explicit error text), the client automatically retries with a
    progressively shorter user prompt. System prompts are never trimmed
    because they contain the output contract; user prompts typically contain
    the bulk of the evidence text and survive trimming better.

    JSON repair
    -----------
    When the model returns syntactically invalid JSON, the client sends one
    follow-up message explaining what broke and asks for a corrected response.
    This is kept to a single repair attempt per context tier so the total
    attempt count stays predictable.
    """

    def __init__(
        self,
        endpoint: str,
        model: str = "",
        timeout: int = 240,
        max_context_retries: int = 4,
    ) -> None:
        self.endpoint = endpoint
        self.model = model
        self.timeout = timeout
        # How many times to shrink the prompt before giving up.
        # Defaults to len(_TRIM_TIERS) which gives four tiers.
        self.max_context_retries = min(max_context_retries, len(_TRIM_TIERS))

    # ------------------------------------------------------------------
    # public helpers
    # ------------------------------------------------------------------

    def ping(self) -> str:
        """Return the first model id the server advertises, or raise."""
        models_url = self.endpoint.split("/chat/completions")[0] + "/models"
        try:
            with urllib.request.urlopen(models_url, timeout=10) as response:
                body = json.loads(response.read())
        except Exception as error:
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
        json_attempts: int = 2,
    ) -> dict[str, Any]:
        """Call the model and return a parsed JSON dict.

        Parameters
        ----------
        system_prompt:
            The instruction / schema prompt. Never trimmed.
        user_prompt:
            The evidence / data prompt. Trimmed on context overflow.
        temperature:
            Sampling temperature forwarded to the model.
        json_attempts:
            How many times to ask the model to fix invalid JSON before
            giving up at the current context tier.
        """
        last_error: Exception | None = None

        # Outer loop: shrink the prompt on context overflow.
        for ctx_attempt in range(self.max_context_retries + 1):
            if ctx_attempt == 0:
                active_user = user_prompt
            else:
                ratio = _TRIM_TIERS[ctx_attempt - 1]
                active_user = _trim_prompt(user_prompt, ratio)
                self._log(
                    f"context overflow — retrying with {ratio:.0%} of user prompt "
                    f"({len(active_user)} chars)"
                )

            # Inner loop: fix invalid JSON without changing the prompt.
            result = self._attempt_with_json_repair(
                system_prompt, active_user, temperature, json_attempts
            )
            if isinstance(result, dict):
                return result
            # result is an exception
            last_error = result  # type: ignore[assignment]
            if isinstance(last_error, ContextExceededError):
                # Try a shorter prompt next iteration.
                continue
            # Non-context error (HTTP, network, bad JSON after repair) — give up.
            raise last_error  # type: ignore[misc]

        raise ContextExceededError(
            f"Prompt still exceeds context after {self.max_context_retries} "
            f"trim attempts. Last error: {last_error}"
        )

    # ------------------------------------------------------------------
    # internals
    # ------------------------------------------------------------------

    def _log(self, message: str) -> None:
        """Lightweight stderr trace — no dependency on logging module."""
        import sys
        print(f"[lmstudio] {message}", file=sys.stderr, flush=True)

    def _attempt_with_json_repair(
        self,
        system_prompt: str,
        user_prompt: str,
        temperature: float,
        json_attempts: int,
    ) -> dict[str, Any] | Exception:
        """
        Try to get valid JSON from the model, with one repair pass on failure.

        Returns a parsed dict on success, or an Exception on failure.
        The caller decides whether to retry with a shorter prompt.
        """
        # Build a fresh message list for this context tier.
        # Do NOT reuse a list across context tiers — that was the original bug.
        messages: list[dict[str, str]] = [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt},
        ]

        last_json_error: Exception | None = None

        for attempt in range(json_attempts):
            if attempt > 0:
                # Append a single repair request — this extends the context
                # slightly but is intentional and bounded to one extra message.
                if last_json_error is not None:
                    messages.append({
                        "role": "user",
                        "content": (
                            f"Your previous response was not valid JSON. "
                            f"The parser said: {last_json_error}. "
                            "Please reply with ONLY a valid JSON object — "
                            "no markdown fences, no commentary, no trailing text."
                        ),
                    })

            payload: dict[str, Any] = {
                "messages": messages,
                "temperature": temperature,
                # Ask the model not to cut off mid-token when it's close to
                # the context limit. Not all builds respect this.
                "stream": False,
            }
            if self.model:
                payload["model"] = self.model

            try:
                content = self._post(payload)
            except ContextExceededError as exc:
                return exc  # bubble up to outer loop
            except LMStudioError as exc:
                return exc  # non-context error, caller will raise

            if not isinstance(content, str):
                last_json_error = ValueError("model returned a non-string content field")
                continue

            # Strip markdown fences the model sometimes wraps around JSON.
            cleaned = FENCE.sub("", content.strip()).strip()

            # Find the outermost JSON object even if the model prefixed text.
            cleaned = _extract_json_object(cleaned)

            try:
                parsed = json.loads(cleaned)
            except json.JSONDecodeError as exc:
                last_json_error = exc
                # Record the assistant turn so the repair message makes sense.
                messages.append({"role": "assistant", "content": content})
                continue

            if not isinstance(parsed, dict):
                last_json_error = ValueError(
                    f"expected a JSON object at top level, got {type(parsed).__name__}"
                )
                messages.append({"role": "assistant", "content": content})
                continue

            return parsed

        return LMStudioError(
            f"Invalid JSON after {json_attempts} attempt(s): {last_json_error}"
        )

    def _post(self, payload: dict[str, Any]) -> str:
        """Send one request and return the assistant content string.

        Raises ContextExceededError or LMStudioError on failure.
        Never returns anything other than a string on success.
        """
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
            if _is_context_error(detail) or _is_context_error(str(error.code)):
                raise ContextExceededError(message) from error
            raise LMStudioError(message) from error
        except urllib.error.URLError as error:
            err_str = str(error)
            if _is_connection_drop(err_str) or _is_context_error(err_str):
                raise ContextExceededError(
                    f"Connection dropped mid-generation — likely context overflow: {err_str}"
                ) from error
            raise LMStudioError(f"LM Studio unreachable: {error}") from error
        except OSError as error:
            # Catches ConnectionResetError, BrokenPipeError, etc. on some platforms.
            err_str = str(error)
            if _is_connection_drop(err_str) or _is_context_error(err_str):
                raise ContextExceededError(
                    f"OS-level connection error during generation: {err_str}"
                ) from error
            raise LMStudioError(f"LM Studio unreachable: {error}") from error

        # Validate the response shape before touching it.
        try:
            content = body["choices"][0]["message"]["content"]
        except (KeyError, IndexError, TypeError) as exc:
            raise LMStudioError(
                f"Unexpected response shape from LM Studio: {exc}\n"
                f"Body was: {json.dumps(body)[:400]}"
            ) from exc

        # Some models return finish_reason="length" when truncated.
        # Log it but don't fail — the JSON repair pass may still recover.
        try:
            finish = body["choices"][0].get("finish_reason", "")
            if finish == "length":
                self._log(
                    "WARNING: model hit max_tokens and was truncated "
                    "(finish_reason=length). JSON may be incomplete."
                )
        except Exception:
            pass

        return content  # type: ignore[return-value]


# ---------------------------------------------------------------------------
# helpers
# ---------------------------------------------------------------------------

def _extract_json_object(text: str) -> str:
    """Find the first complete {...} block in text.

    Many smaller models prefix their JSON with a sentence like
    "Here is the JSON you requested:" before the actual object.
    This function skips that preamble without regex so it handles
    nested braces correctly.
    """
    start = text.find("{")
    if start == -1:
        return text  # no object found — let json.loads raise a clear error
    depth = 0
    in_string = False
    escape = False
    for i, ch in enumerate(text[start:], start):
        if escape:
            escape = False
            continue
        if ch == "\\" and in_string:
            escape = True
            continue
        if ch == '"':
            in_string = not in_string
            continue
        if in_string:
            continue
        if ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                return text[start : i + 1]
    # Unbalanced — return everything from the first brace and let the
    # parser give a useful error.
    return text[start:]