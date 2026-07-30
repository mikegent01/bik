"""Pluggable AI backends.

ScriptedBrain  — offline, seeded, zero dependencies. Always works.
LMArenaBrain   — talks to an OpenAI-compatible endpoint (LMArena, OpenAI,
                 Ollama, LM Studio, anything with /chat/completions).

Both satisfy the same Brain protocol, so modes never know which is running.
If a live call fails for any reason it silently degrades to the scripted brain
rather than crashing a session mid-trial.
"""
from __future__ import annotations

import json
import os
import urllib.error
import urllib.request
from typing import Any

from .dice import Dice
from .entities import Actor

# --------------------------------------------------------------------------
# Scripted (offline) brain
# --------------------------------------------------------------------------

_OPENERS = {
    'judge': [
        'The bench notes the submission. Proceed, but stay on the record.',
        'I will allow it. Counsel is reminded that this court has limits.',
        'Sustained. Move on before I lose patience with both of you.',
    ],
    'prosecutor': [
        'The record already answers that. Let me read it back to the witness.',
        'The defence would prefer we look anywhere but the timeline.',
        'One question. Where were you when the door opened?',
    ],
    'defense': [
        'My client has answered this three times. The question is theatre.',
        'The prosecution has motive but no mechanism. Motive is not evidence.',
        'Nothing in that document places my client in the room.',
    ],
    'witness': [
        'I only saw what I saw. It was dark and it was fast.',
        "I'm not sure. I've been asked this so many times I've stopped trusting myself.",
        'That is not what I said in my statement, and you know it.',
    ],
    'delegate': [
        'My government wants the clause narrowed before we commit.',
        'We have heard the argument. We are not yet persuaded.',
        'This chamber has a habit of solving last year\'s crisis.',
    ],
    'default': [
        'I want the record to reflect my objection to how this is proceeding.',
        'Let me be plain, because plainness seems to be in short supply.',
    ],
}

_STANCE_COLOUR = {
    'hostile': 'flatly, without warmth',
    'friendly': 'with visible sympathy',
    'neutral': 'evenly',
    'rattled': 'a beat too quickly',
}


class ScriptedBrain:
    """Deterministic offline fallback. Uses the seeded RNG so replays match."""

    name = 'scripted'

    def __init__(self, dice: Dice):
        self.dice = dice

    def speak(self, actor: Actor, context: dict) -> str:
        pool = _OPENERS.get(actor.role, _OPENERS['default'])
        line = self.dice.pick(pool)
        if actor.composure <= 4:
            line = self.dice.pick([
                "I— give me a moment. That isn't what I meant to say.",
                'You are twisting this. You are deliberately twisting this.',
                line,
            ])
        return line

    def choose(self, actor: Actor, options: list[dict], context: dict) -> int:
        """Weighted pick — prefers options tagged for this actor's stance."""
        if not options:
            return 0
        weights = []
        for o in options:
            w = float(o.get('weight', 1.0))
            if actor.composure <= 4 and o.get('verb') in ('press', 'attack'):
                w *= 0.4
            if actor.stance == 'hostile' and o.get('verb') in ('press', 'object'):
                w *= 2.0
            weights.append(max(0.01, w))
        total = sum(weights)
        roll = self.dice.rng.random() * total
        acc = 0.0
        for i, w in enumerate(weights):
            acc += w
            if roll <= acc:
                return i
        return len(options) - 1

    def invent(self, spec: dict) -> dict:
        """Offline generation: return {} and let the mode use its own tables."""
        return {}


# --------------------------------------------------------------------------
# Live model brain (OpenAI-compatible; works with LMArena-style gateways)
# --------------------------------------------------------------------------

SYSTEM = (
    'You are running characters inside a turn-based tabletop simulation set in the '
    'Waluipedia setting (Mushroom Kingdom politics, Iron Legion, Mages Guild, the '
    'Grand Congress). You play ONE character at a time, in character, and you never '
    'narrate dice, rules, or other characters\' choices.\n'
    'Rules: stay in voice; 1-3 sentences unless asked for more; react to what was '
    'just said; never resolve the outcome of your own action — the engine does that.'
)


class LMArenaBrain:
    """OpenAI-compatible chat client.

    Configure with env vars (or constructor args):
      WAHSIM_API_BASE   default https://api.openai.com/v1
      WAHSIM_API_KEY    required for hosted endpoints
      WAHSIM_MODEL      default gpt-4o-mini

    Point API_BASE at any local gateway (Ollama: http://localhost:11434/v1,
    LM Studio: http://localhost:1234/v1) to run fully offline with a real model.
    """

    name = 'live'

    def __init__(
        self,
        fallback: ScriptedBrain,
        base: str | None = None,
        key: str | None = None,
        model: str | None = None,
        timeout: int = 45,
        verbose: bool = False,
    ):
        self.fallback = fallback
        self.base = (base or os.getenv('WAHSIM_API_BASE') or 'https://api.openai.com/v1').rstrip('/')
        self.key = key or os.getenv('WAHSIM_API_KEY') or ''
        self.model = model or os.getenv('WAHSIM_MODEL') or 'gpt-4o-mini'
        self.timeout = timeout
        self.verbose = verbose
        self.calls = 0
        self.failures = 0
        self.last_error = ''

    # -- transport ----------------------------------------------------------
    def _post(self, messages: list[dict], max_tokens: int = 220, temp: float = 0.9) -> str:
        payload = json.dumps({
            'model': self.model,
            'messages': messages,
            'max_tokens': max_tokens,
            'temperature': temp,
        }).encode()
        req = urllib.request.Request(
            f'{self.base}/chat/completions',
            data=payload,
            headers={
                'Content-Type': 'application/json',
                'Authorization': f'Bearer {self.key}',
            },
        )
        self.calls += 1
        with urllib.request.urlopen(req, timeout=self.timeout) as r:
            data = json.loads(r.read().decode())
        return data['choices'][0]['message']['content'].strip()

    def _safe(self, messages, **kw) -> str | None:
        try:
            return self._post(messages, **kw)
        except Exception as e:                     # noqa: BLE001 — degrade, never crash
            self.failures += 1
            self.last_error = f'{type(e).__name__}: {e}'
            if self.verbose:
                print(f'  [brain fell back: {self.last_error}]')
            return None

    # -- Brain protocol -----------------------------------------------------
    def _persona(self, actor: Actor) -> str:
        bits = [f'You are {actor.name}, the {actor.role}.']
        if actor.faction:
            bits.append(f'Affiliation: {actor.faction}.')
        if actor.blurb:
            bits.append(actor.blurb)
        if actor.composure <= 4:
            bits.append('You are rattled and losing your composure. Let it show.')
        elif actor.composure <= 7:
            bits.append('You are under real pressure but holding.')
        if actor.stance and actor.stance != 'neutral':
            bits.append(f'Your current stance is {actor.stance}.')
        return ' '.join(bits)

    def speak(self, actor: Actor, context: dict) -> str:
        recent = '\n'.join(context.get('recent', [])[-5:])
        user = (
            f"SCENE: {context.get('title')} — {context.get('phase')}\n"
            f"{context.get('phase_desc','')}\n"
            f"STATE: {context.get('status','')}\n\n"
            f"RECENT:\n{recent or '(scene opens)'}\n\n"
            f"It is your turn. Speak in character, 1-3 sentences."
        )
        out = self._safe([
            {'role': 'system', 'content': SYSTEM + '\n\n' + self._persona(actor)},
            {'role': 'user', 'content': user},
        ])
        return out or self.fallback.speak(actor, context)

    def choose(self, actor: Actor, options: list[dict], context: dict) -> int:
        if not options:
            return 0
        menu = '\n'.join(
            f"{i}. {o.get('label', o.get('verb'))} — {o.get('hint','')}"
            for i, o in enumerate(options))
        user = (
            f"SCENE: {context.get('title')} — {context.get('phase')}\n"
            f"STATE: {context.get('status','')}\n"
            f"RECENT:\n" + '\n'.join(context.get('recent', [])[-4:]) + '\n\n'
            f"Your options:\n{menu}\n\n"
            'Reply with ONLY the number of your choice.'
        )
        out = self._safe([
            {'role': 'system', 'content': SYSTEM + '\n\n' + self._persona(actor)},
            {'role': 'user', 'content': user},
        ], max_tokens=8, temp=0.5)
        if out:
            digits = ''.join(ch for ch in out if ch.isdigit())
            if digits:
                idx = int(digits[:2])
                if 0 <= idx < len(options):
                    return idx
        return self.fallback.choose(actor, options, context)

    def invent(self, spec: dict) -> dict:
        """Ask the model for structured content (cast, charges, motion...)."""
        user = (
            f"{spec.get('instruction','Invent content for a scene.')}\n\n"
            f"Context: {json.dumps({k: v for k, v in spec.items() if k != 'instruction'})[:1400]}\n\n"
            'Reply with ONLY valid minified JSON matching the requested schema. '
            'No markdown fences, no commentary.'
        )
        out = self._safe([
            {'role': 'system', 'content': 'You generate structured JSON for a tabletop engine. Output raw JSON only.'},
            {'role': 'user', 'content': user},
        ], max_tokens=900, temp=1.0)
        if not out:
            return {}
        txt = out.strip()
        if txt.startswith('```'):
            txt = txt.split('```')[1]
            txt = txt[4:] if txt.lower().startswith('json') else txt
        try:
            return json.loads(txt.strip())
        except json.JSONDecodeError:
            start, end = txt.find('{'), txt.rfind('}')
            if start != -1 and end > start:
                try:
                    return json.loads(txt[start:end + 1])
                except json.JSONDecodeError:
                    pass
        return {}


def make_brain(dice: Dice, live: bool = False, **kw):
    scripted = ScriptedBrain(dice)
    if not live:
        return scripted
    return LMArenaBrain(scripted, **kw)
