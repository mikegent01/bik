#!/usr/bin/env python3
"""Build the Wahbabel language data: ciphers, lexicons, and SVG glyph sets.

Deterministic, stdlib only, NO AI. Every glyph is drawn from a seeded set of
stroke rules, so the same letter in the same language always produces the same
shape, and the whole set can be regenerated from this file alone.

Design, and why:

  CIPHER + LEXICON. A pure dictionary leaves most text in English until the
  dictionary is enormous. A pure cipher never produces a word you can learn.
  So each language has phonetic rules that transform ANY input consistently,
  plus a lexicon of real words that overrides the cipher. The lexicon is the
  part that grows; the cipher guarantees full coverage from day one.

  GLYPHS AS SVG PATHS. Styled Latin letters are just a keyboard mash with a
  colour on it -- they do not read as another writing system. These are actual
  invented letterforms: each language has its own stroke grammar (angular,
  flowing, blocky, spiral) and every glyph is a real SVG path.

Languages are chosen from evidence in the archive, not invented wholesale:
  Sylvan   - "Hjumpik could not read Sylvan. Waluigi took the book, read it"
  Goblin   - Snow Tribe negotiations, Naaook
  Draconic - "a battle-worn Toad speaking Draconic"
  Orcish   - "Orcish 'laws' crudely painted on sheets of hammered scrap metal"
plus campaign-native tongues the world clearly implies.

  python3 tools/build-wahbabel.py --check
  python3 tools/build-wahbabel.py --write
"""
from __future__ import annotations

import argparse
import hashlib
import json
import math
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "Reputation-Matrix2" / "data" / "wahbabel.json"

ALPHABET = "abcdefghijklmnopqrstuvwxyz"


# --------------------------------------------------------------- languages
# `rules` are ordered substring replacements applied to lowercase input.
# Longest patterns first; the engine applies them left to right.
LANGUAGES = [
    {
        "id": "sylvan",
        "name": "Sylvan",
        "family": "Feywild",
        "canon": "Hjumpik could not read Sylvan; Waluigi could. The Feyward manor's books are written in it.",
        "speakers": "Fey courts, the Feyward manor, the Revel, dryads and satyrs",
        "script": "flowing",
        "colour": "#6ee7a8",
        "seed": "sylvan-v1",
        "flavour": "Vowel-heavy and looping. Written as one connected vine; a Sylvan sentence has no gaps, only knots.",
        "rules": [
            ["th", "sh"], ["ch", "shy"], ["ck", "lk"], ["ph", "f"],
            ["ing", "ael"], ["tion", "sion"], ["ee", "ae"], ["oo", "ua"],
            ["a", "ae"], ["e", "ie"], ["i", "y"], ["o", "ao"], ["u", "ui"],
            ["r", "l"], ["k", "th"], ["d", "dh"], ["b", "v"], ["m", "mm"],
        ],
        "lexicon": {
            "book": "vaelthum", "tree": "aoloth", "water": "sylae",
            "friend": "aelaen", "danger": "morrath", "door": "thaelis",
            "light": "luaenor", "name": "aesith", "blood": "vaerith",
            "manor": "thaelhaus", "song": "lirren", "gold": "aurael",
            "yes": "aeya", "no": "nael", "hello": "aelann", "run": "faellis",
        },
    },
    {
        "id": "goblin",
        "name": "Goblin",
        "family": "Material",
        "canon": "Snow Tribe negotiations; Naaook traded with the party in it.",
        "speakers": "Goblin tribes, manor servants, the Snow Tribe, most scrap markets",
        "script": "scratched",
        "colour": "#a3d94a",
        "seed": "goblin-v1",
        "flavour": "Short, hard, consonant-first. Scratched into whatever is to hand, usually with something not designed for writing.",
        "rules": [
            ["th", "g"], ["sh", "zk"], ["ch", "kk"], ["ing", "ik"],
            ["oo", "u"], ["ee", "i"], ["ou", "az"],
            ["a", "a"], ["e", "eg"], ["i", "ik"], ["o", "og"], ["u", "ug"],
            ["s", "z"], ["f", "v"], ["p", "b"], ["t", "d"], ["l", "rr"],
        ],
        "lexicon": {
            "gold": "shinies", "boss": "bigg", "food": "grub", "no": "nuh",
            "yes": "yaz", "fight": "krump", "run": "skarper", "friend": "notfood",
            "knife": "stikka", "deal": "trayd", "big": "bigg", "small": "grot",
            "hello": "oi", "danger": "badbadbad", "water": "wet", "book": "flatthing",
        },
    },
    {
        "id": "draconic",
        "name": "Draconic",
        "family": "Ancient",
        "canon": "A battle-worn Toad at the Arunedeal camp spoke Draconic.",
        "speakers": "Dragons, Dragon Mountain, old scholars, anyone reading pre-Fracture inscriptions",
        "script": "angular",
        "colour": "#ff8a5c",
        "seed": "draconic-v1",
        "flavour": "Angular and stressed. Every syllable lands hard; the script is cut, never drawn.",
        "rules": [
            ["th", "kh"], ["ch", "rh"], ["sh", "zh"], ["ing", "axi"],
            ["tion", "kaan"], ["ee", "ii"], ["oo", "uu"],
            ["a", "ax"], ["e", "ek"], ["i", "ir"], ["o", "or"], ["u", "ur"],
            ["s", "ss"], ["v", "vh"], ["w", "vh"], ["y", "ix"],
        ],
        "lexicon": {
            "fire": "irkhan", "mountain": "korthaxi", "gold": "vharaz",
            "name": "sirrakh", "death": "morrkhaan", "king": "kaazirn",
            "oath": "vharrun", "wing": "azhkir", "law": "korrun",
            "blood": "sarrkh", "hello": "kharesh", "yes": "azh", "no": "nekh",
            "danger": "morrvax", "book": "khirith", "friend": "vhaxen",
        },
    },
    {
        "id": "orcish",
        "name": "Orcish",
        "family": "Material",
        "canon": "Orcish 'laws' crudely painted on sheets of hammered scrap metal.",
        "speakers": "Orc warbands, the Iron Fists, scrap-law courts",
        "script": "blocky",
        "colour": "#d95c3a",
        "seed": "orcish-v1",
        "flavour": "Blunt and shouted. The written form is painted in thick strokes on metal, because metal survives being argued with.",
        "rules": [
            ["th", "gh"], ["ch", "kh"], ["sh", "sk"], ["ing", "ug"],
            ["ee", "uu"], ["oo", "og"],
            ["a", "ag"], ["e", "eg"], ["i", "ig"], ["o", "og"], ["u", "ug"],
            ["c", "k"], ["q", "k"], ["x", "ks"], ["f", "gh"],
        ],
        "lexicon": {
            "law": "grukk", "strong": "brakh", "weak": "grishnak",
            "war": "wagh", "chief": "urzog", "iron": "durak", "no": "nar",
            "yes": "zug", "fight": "wagh", "hello": "grakh", "friend": "bruddah",
            "blood": "gorr", "danger": "skragh", "gold": "shiny-rock",
        },
    },
    {
        "id": "feyward_court",
        "name": "Feyward Court-Speak",
        "family": "Feywild",
        "canon": "The manor's guards refuse to say certain names aloud; the Revel sings in it.",
        "speakers": "The Overgrown Manor's household, the Revel, the orange heir's court",
        "script": "flowing",
        "colour": "#c9a0ff",
        "seed": "feyward-v1",
        "flavour": "Sylvan with the politeness turned up until it becomes a weapon. Nothing is said directly; the script loops back on itself so a sentence can be read two ways.",
        "rules": [
            ["th", "vh"], ["sh", "shh"], ["ing", "isse"], ["tion", "ssion"],
            ["ee", "ei"], ["oo", "eu"],
            ["a", "ai"], ["e", "ee"], ["i", "ii"], ["o", "oi"], ["u", "eu"],
            ["r", "rr"], ["s", "ss"], ["d", "dh"],
        ],
        "lexicon": {
            "guest": "aiveisse", "host": "vhairen", "debt": "oissun",
            "please": "aivh", "sorry": "nevhaii", "name": "aissen",
            "lady": "vhairenna", "yes": "aivhee", "no": "nevh",
            "hello": "aivhen", "danger": "morrivh", "dinner": "vhaissun",
        },
    },
    {
        "id": "toadish",
        "name": "Toadish",
        "family": "Material",
        "canon": "Toads communicate in a rhythmic percussion-based code through barrel walls.",
        "speakers": "Toads everywhere, the Liberated Toads, barrel-code drummers",
        "script": "percussive",
        "colour": "#f5f0e6",
        "seed": "toadish-v1",
        "flavour": "As much rhythm as sound. Written as a row of struck and unstruck beats, which is why a Toad can send it through a wall.",
        "rules": [
            ["th", "d"], ["ch", "t"], ["sh", "s"], ["ing", "ot"],
            ["ee", "oi"], ["oo", "op"],
            ["a", "ap"], ["e", "et"], ["i", "it"], ["o", "op"], ["u", "ut"],
            ["r", "d"], ["l", "t"],
        ],
        "lexicon": {
            "help": "taptap", "danger": "tapataptap", "safe": "tap",
            "friend": "opdop", "run": "tatatat", "yes": "tap-tap",
            "no": "taaap", "here": "dop", "hello": "opdap", "food": "mush",
        },
    },
    {
        "id": "fungal",
        "name": "Fungal Cant",
        "family": "Feywild",
        "canon": "The violet fungus recovered from a manor toilet. Hjumpik asked whether it spoke English; it did not.",
        "speakers": "Violet fungi, shriekers, the mushroom room, possibly the Revel's roots",
        "script": "spore",
        "colour": "#b06ad9",
        "seed": "fungal-v1",
        "flavour": "Not spoken so much as released. Written as a spore-scatter: the arrangement carries the meaning, and it drifts if you breathe on it.",
        "rules": [
            ["th", "sp"], ["sh", "ssh"], ["ch", "pf"], ["ing", "uum"],
            ["ee", "uu"], ["oo", "oh"],
            ["a", "uh"], ["e", "eh"], ["i", "ih"], ["o", "oh"], ["u", "uu"],
            ["s", "ss"], ["m", "mm"], ["n", "nn"],
        ],
        "lexicon": {
            "hello": "spuum", "yes": "mmuh", "no": "ssnn", "water": "wehtuu",
            "dark": "ohsspuh", "grow": "uumuum", "danger": "sshnnuh",
            "friend": "mmuhspuum", "eat": "uhbsorb", "name": "spuhnn",
        },
    },
]


# ------------------------------------------------------------------ glyphs
def rng_stream(seed: str):
    """Deterministic byte stream from a seed; no randomness, no AI."""
    buf, counter = b"", 0
    while True:
        if not buf:
            buf = hashlib.sha256(f"{seed}:{counter}".encode()).digest()
            counter += 1
        b, buf = buf[0], buf[1:]
        yield b


def glyph_path(style: str, seed: str, letter: str) -> str:
    """Build one SVG path for a letter in a language's stroke grammar.

    The viewBox is 0 0 24 24. Each style has its own construction so the
    alphabets are visibly different writing systems, not one shape recoloured.
    """
    g = rng_stream(f"{seed}:{letter}")
    n = lambda lo, hi: lo + (next(g) / 255.0) * (hi - lo)

    if style == "angular":
        # Draconic: cut wedges. Straight segments, sharp direction changes.
        pts = [(n(3, 7), n(3, 7))]
        for _ in range(3):
            pts.append((n(3, 21), n(3, 21)))
        d = f"M{pts[0][0]:.1f} {pts[0][1]:.1f}"
        for x, y in pts[1:]:
            d += f" L{x:.1f} {y:.1f}"
        if next(g) % 2:
            d += f" M{n(6,18):.1f} {n(4,10):.1f} L{n(6,18):.1f} {n(14,20):.1f}"
        return d

    if style == "flowing":
        # Sylvan / Feyward: one continuous curve, no lifts.
        x0, y0 = n(3, 8), n(4, 20)
        d = f"M{x0:.1f} {y0:.1f}"
        for _ in range(3):
            d += (f" Q{n(4,20):.1f} {n(2,22):.1f} {n(6,21):.1f} {n(3,21):.1f}")
        return d

    if style == "scratched":
        # Goblin: short slashes at odd angles, like a knife in a hurry.
        # Endpoints are clamped so a slash cannot run outside the 24x24 box.
        clamp = lambda v: max(2.0, min(22.0, v))
        d = ""
        for _ in range(3 + next(g) % 2):
            x, y = n(4, 18), n(4, 18)
            d += (f" M{clamp(x):.1f} {clamp(y):.1f}"
                  f" L{clamp(x + n(-6, 7)):.1f} {clamp(y + n(-6, 7)):.1f}")
        return d.strip()

    if style == "blocky":
        # Orcish: thick right-angled strokes, painted not written.
        x, y = n(4, 10), n(4, 10)
        w, h = n(6, 12), n(6, 12)
        d = f"M{x:.1f} {y:.1f} L{x+w:.1f} {y:.1f} L{x+w:.1f} {y+h:.1f}"
        if next(g) % 2:
            d += f" L{x:.1f} {y+h:.1f} Z"
        else:
            d += f" M{x:.1f} {y+h/2:.1f} L{x+w:.1f} {y+h/2:.1f}"
        return d

    if style == "percussive":
        # Toadish: a row of beats. Struck = filled tick, unstruck = gap.
        d = ""
        for i in range(4):
            if next(g) % 2:
                x = 4 + i * 5.2
                d += f" M{x:.1f} {n(8,11):.1f} L{x:.1f} {n(14,17):.1f}"
        return d.strip() or "M12 9 L12 15"

    if style == "spore":
        # Fungal: a scatter of dots around a faint stem.
        d = f"M12 {n(16,20):.1f} L12 {n(8,12):.1f}"
        for _ in range(4):
            cx, cy, r = n(4, 20), n(3, 16), n(1.1, 2.3)
            d += (f" M{cx+r:.1f} {cy:.1f}"
                  f" a{r:.1f} {r:.1f} 0 1 0 {-2*r:.1f} 0"
                  f" a{r:.1f} {r:.1f} 0 1 0 {2*r:.1f} 0")
        return d

    return "M6 6 L18 18"


def build_glyphs(lang: dict) -> dict:
    return {ch: glyph_path(lang["script"], lang["seed"], ch) for ch in ALPHABET}


# ------------------------------------------------------------------- build
def build() -> dict:
    langs = []
    for L in LANGUAGES:
        entry = {k: L[k] for k in
                 ("id", "name", "family", "canon", "speakers", "script",
                  "colour", "flavour", "rules", "lexicon")}
        entry["glyphs"] = build_glyphs(L)
        entry["lexiconSize"] = len(L["lexicon"])
        langs.append(entry)
    return {
        "_README": {
            "what": "The Wahbabel: the archive's translation desk.",
            "how": ("Each language is a deterministic cipher plus a growing lexicon. "
                    "Lexicon words win; anything not in the lexicon falls through to the "
                    "cipher, so coverage is total from day one and accuracy improves as "
                    "words are added."),
            "glyphs": ("Every letter is a real SVG path built from the language's stroke "
                       "grammar (angular, flowing, scratched, blocky, percussive, spore). "
                       "Styled Latin text was rejected: it reads as a keyboard mash, not a "
                       "writing system."),
            "no_ai": "Generated by tools/build-wahbabel.py. Deterministic, stdlib only.",
            "growing": "Add words to the lexicon in the tool and re-run; ids and glyphs are stable.",
        },
        "generated": True,
        "alphabet": ALPHABET,
        "languages": langs,
    }


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--check", action="store_true")
    ap.add_argument("--write", action="store_true")
    args = ap.parse_args()

    data = build()
    langs = data["languages"]

    problems = []
    for L in langs:
        if len(L["glyphs"]) != 26:
            problems.append(f"{L['id']}: {len(L['glyphs'])} glyphs, expected 26")
        for ch, d in L["glyphs"].items():
            if not d or not d.startswith("M"):
                problems.append(f"{L['id']}/{ch}: malformed path")
            # Absolute coordinates must sit inside the 24x24 viewBox or the
            # glyph is silently clipped. Relative arc segments ("a rx ry ...")
            # carry offsets, not positions, so they are skipped -- an earlier
            # version of this check flagged all 26 fungal glyphs for negative
            # numbers that were legal relative deltas.
            import re as _re
            for seg in _re.findall(r"[MLQ][^MLQaAzZ]*", d):
                for num in _re.findall(r"-?\d+\.?\d*", seg[1:]):
                    v = float(num)
                    if v < -0.5 or v > 24.5:
                        problems.append(f"{L['id']}/{ch}: coordinate {v} outside viewBox")
                        break
        if not L["rules"]:
            problems.append(f"{L['id']}: no cipher rules")
        if not L["lexicon"]:
            problems.append(f"{L['id']}: empty lexicon")

    # Determinism: building twice must give byte-identical output.
    if json.dumps(build(), sort_keys=True) != json.dumps(data, sort_keys=True):
        problems.append("build is not deterministic")

    # Glyph sets must differ between languages, or the scripts are decorative.
    for i, a in enumerate(langs):
        for b in langs[i + 1:]:
            if a["glyphs"] == b["glyphs"]:
                problems.append(f"{a['id']} and {b['id']} have identical glyphs")

    for p in problems:
        print(f"  FAIL {p}")
    if problems:
        return 1

    print(f"  ok   {len(langs)} languages, 26 glyphs each, all sets distinct")
    for L in langs:
        print(f"       {L['id']:<16} {L['script']:<11} lexicon {L['lexiconSize']:>3} · rules {len(L['rules']):>2}")

    if args.write:
        OUT.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print(f"\nwrote {OUT.relative_to(ROOT)}")
    elif not args.check:
        print("\n(dry run — pass --write)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
