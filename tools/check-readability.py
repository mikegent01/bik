#!/usr/bin/env python3
"""Readability audit — committed, advisory. Run it on every new article.

Counts what a draft reads like: grade-level scores, sentence rhythm, and
two failure modes the grade scores cannot see — machine-gun staccato and
aphorism density. It is **advisory**: a flag means "re-read the prose and
decide", never "broken". It does not and cannot tell whether the argument
holds. Bands below are calibrated against the archive's reference filings
(see docs/ARCHIVE_RANKING.md), so the gold-standard records pass clean.

Two event shapes this catches, both fatal to a Waluigi filing:

  * **Machine-gun prose** — nearly every sentence a 4–10 word fragment.
    Flesch Reading Ease *rewards* this, so a draft can score "very easy"
    and still read like a drumroll that never lands. The rhythm metrics
    below (stdev of sentence length, short-sentence share, staccato runs)
    are the real signal. Canonical case:
    warp_pipe_junction_waluigi_analysis scores FRE 91.8 — the "easiest"
    analysis in the archive — while 48% of its sentences sit in a
    four-to-ten-word cadence. Whether that cadence reads as a drumbeat
    or as the Auditor-General's deliberate procedure is an editorial
    call, not the checker's; its job is to surface the rhythm so the
    author owns the choice.

  * **Concrete-wall prose** — long sentences, heavy words, FK grade past
    ~11.5. The Ebott failure mode: narration wearing analysis vocabulary.

Usage:
    python3 tools/check-readability.py --analysis <id|all>   # articleAnalyses.json
    python3 tools/check-readability.py --event <id|all>      # events.json
    python3 tools/check-readability.py --whatif <id|all>     # whatifs.json
    python3 tools/check-readability.py --file <draft.md>     # any markdown/text draft
    python3 tools/check-readability.py --analysis all --summary
    python3 tools/check-readability.py --analysis warp_pipe_junction_waluigi_analysis --strict

Exit 0 = advisory report printed. --strict exits 1 when any flag fires
(use it as a pre-commit gate on new filings). Unknown targets exit 2.

Docs: docs/AUDIT_SCRIPTS.md § Readability audit.
"""
from __future__ import annotations

import argparse
import json
import os
import re
import statistics
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "Reputation-Matrix2", "data")

# ---------------------------------------------------------------- bands
# Aims, not targets — calibrated so the ARCHIVE_RANKING exemplars
# (the_imp_ambush_of_harvestide_29, wario_abstract_bank,
# hanging_tree_apple_waluigi_analysis) pass without a flag.
MIN_SENTENCES = 25        # rhythm stats are noise below this
STACCATO_SD = 6.0         # sentence-length stdev below this = monotone…
STACCATO_SHORT_PCT = 40.0 # …when this share of sentences is a fragment (≤6w)
APHORISM_PER_1K = 25.0    # short copula verdicts ("That is a door.") per 1k words
DENSE_FK = 11.5           # Flesch–Kincaid grade above this = concrete-wall
DENSE_FOG = 13.0          # Gunning Fog above this = concrete-wall
DENSE_FRE = 45.0          # Flesch Reading Ease below this = hard read
LONG_SENTENCE = 45        # sentences past this many words are listed
RUN_STACCATO = 8          # consecutive ≤6-word sentences that read as a drumbeat

VOWELS = "aeiouy"
WORD_RE = re.compile(r"[A-Za-z][A-Za-z'\-]*")


# ---------------------------------------------------------------- text
def strip_markdown(text: str) -> str:
    """Reduce Waluipedia markdown to the words a reader reads."""
    t = text
    t = re.sub(r"\[\[[^\]|]*\|([^\]]*)\]\]", r"\1", t)   # [[prop:id|text]] -> text
    t = re.sub(r"\[\[[^\]]*\]\]", " ", t)                # bare [[markers]]
    t = re.sub(r"!\[[^\]]*\]\([^)]*\)", " ", t)          # images
    t = re.sub(r"\[([^\]]*)\]\([^)]*\)", r"\1", t)       # [text](url)
    t = re.sub(r"^#{1,6}\s*", "", t, flags=re.M)         # headings
    t = re.sub(r"^\s*>\s?", "", t, flags=re.M)           # blockquotes keep their words
    t = re.sub(r"\*\*([^*]+)\*\*", r"\1", t)
    t = re.sub(r"(?<!\w)\*([^*]+)\*(?!\w)", r"\1", t)    # italic asides keep their words
    t = re.sub(r"__([^_]+)__", r"\1", t)
    t = re.sub(r"`[^`]*`", " ", t)
    return t


def count_syllables(word: str) -> int:
    w = re.sub(r"[^a-z]", "", word.lower())
    if not w:
        return 0
    if len(w) <= 3:
        return 1
    w = re.sub(r"(es|ed|e)$", lambda m: "" if len(w) > len(m.group(0)) + 1 else m.group(0), w)
    groups = 0
    prev_vowel = False
    for ch in w:
        is_vowel = ch in VOWELS
        if is_vowel and not prev_vowel:
            groups += 1
        prev_vowel = is_vowel
    return max(1, groups)


def split_sentences(text: str) -> list[str]:
    """Split paragraphs into sentences, guarding common abbreviations."""
    t = re.sub(r"\b(Mr|Mrs|Ms|Dr|St|vs|approx|No)\.", r"\1<DOT>", text)
    t = re.sub(r"(\d)\.(\d)", r"\1<DOT>\2", t)
    out: list[str] = []
    for para in re.split(r"\n\s*\n", t):
        para = " ".join(para.split())
        if not para:
            continue
        parts = re.split(r"(?<=[.!?…])\s+(?=[A-Z\"“*'])", para)
        out.extend(p for p in parts if WORD_RE.search(p))
    return [s.replace("<DOT>", ".") for s in out]


# ---------------------------------------------------------------- metrics
class Report:
    def __init__(self, label: str, text: str):
        self.label = label
        plain = strip_markdown(text)
        self.sentences = [s for s in (split_sentences(plain)) if s]
        self.sent_lens = [len(WORD_RE.findall(s)) for s in self.sentences]
        self.words = sum(self.sent_lens)
        self.n_sent = len(self.sent_lens)
        self.paragraphs = len([p for p in re.split(r"\n\s*\n", plain) if p.strip()])
        syll = 0
        complex_words = 0
        chars = 0
        for s in self.sentences:
            for w in WORD_RE.findall(s):
                n = count_syllables(w)
                syll += n
                chars += len(w.replace("'", "").replace("-", ""))
                if n >= 3:
                    complex_words += 1
        W = self.words or 1
        S = self.n_sent or 1
        self.asl = W / S
        spw = syll / W
        self.fre = 206.835 - 1.015 * self.asl - 84.6 * spw
        self.fk = 0.39 * self.asl + 11.8 * spw - 15.59
        self.fog = 0.4 * (self.asl + 100 * complex_words / W)
        self.smog = 1.043 * ((complex_words * 30 / S) ** 0.5) + 3.1291
        self.cli = 0.0588 * (chars / W * 100) - 0.296 * (S / W * 100) - 15.8
        self.ari = 4.71 * (chars / W) + 0.5 * self.asl - 21.43
        self.sd = statistics.pstdev(self.sent_lens) if self.n_sent > 1 else 0.0
        ls = sorted(self.sent_lens)
        self.median = ls[len(ls) // 2] if ls else 0
        self.p90 = ls[int(len(ls) * 0.9)] if ls else 0
        self.longest = ls[-1] if ls else 0
        self.short_pct = 100 * sum(1 for l in self.sent_lens if l <= 6) / S
        self.mid_pct = 100 * sum(1 for l in self.sent_lens if 7 <= l <= 14) / S
        self.long_pct = 100 * sum(1 for l in self.sent_lens if 15 <= l <= 24) / S
        self.vlong_pct = 100 * sum(1 for l in self.sent_lens if l >= 25) / S
        self.aphorisms = sum(
            1
            for s in self.sentences
            if len(WORD_RE.findall(s)) <= 12
            and re.search(r"\b(is|was|are|were)\b", s)
            and s.rstrip().endswith((".", "!"))
        )
        self.aphorism_per_1k = self.aphorisms / W * 1000
        # longest run of consecutive ≤6-word sentences, with its first sentence
        self.run_max = 0
        self.run_excerpt = ""
        run = 0
        for s, l in zip(self.sentences, self.sent_lens):
            if l <= 6:
                run += 1
                if run > self.run_max:
                    self.run_max = run
                    self.run_excerpt = s
            else:
                run = 0
        self.flags = self._flags()

    def _flags(self) -> list[str]:
        f: list[str] = []
        if self.n_sent < MIN_SENTENCES:
            return f  # too short to judge rhythm
        if self.sd < STACCATO_SD and self.short_pct >= STACCATO_SHORT_PCT:
            f.append(
                "machine-gun rhythm — sentence length stdev %.1f (<%.1f) and %.0f%% of sentences "
                "are fragments; punches need long sentences to punch against" % (self.sd, STACCATO_SD, self.short_pct)
            )
        if self.aphorism_per_1k > APHORISM_PER_1K:
            f.append(
                "aphorism machine — %.0f short copula verdicts per 1k words (>%g); when every sentence "
                "is a verdict, none of them lands" % (self.aphorism_per_1k, APHORISM_PER_1K)
            )
        if self.run_max >= RUN_STACCATO:
            f.append(
                "drumbeat — %d consecutive fragments starting \"%s\"" % (self.run_max, _clip(self.run_excerpt, 60))
            )
        if self.fk > DENSE_FK or self.fog > DENSE_FOG:
            f.append(
                "concrete-wall prose — FK grade %.1f / Fog %.1f; split long sentences and trade "
                "abstract words for physical ones" % (self.fk, self.fog)
            )
        if self.fre < DENSE_FRE:
            f.append("hard read — Flesch Reading Ease %.1f (<%.0f)" % (self.fre, DENSE_FRE))
        return f


def _clip(s: str, n: int) -> str:
    s = " ".join(s.split())
    return s if len(s) <= n else s[: n - 1].rstrip() + "…"


# ---------------------------------------------------------------- corpora
def _load(name: str):
    with open(os.path.join(DATA, name), encoding="utf-8") as fh:
        return json.load(fh)


def analysis_units(a: dict) -> list[tuple[str, str]]:
    units = [("summary", a.get("summary", "")), ("thesis", a.get("thesis", ""))]
    units += [(s.get("id") or s.get("heading", "section"), s.get("body", "")) for s in a.get("sections", [])]
    units.append(("verdict", a.get("verdict", "")))
    return [(k, v) for k, v in units if v]


def event_units(e: dict) -> list[tuple[str, str]]:
    units = [("description", e.get("description", ""))]
    units += [(s.get("name", "section"), s.get("overview", "")) for s in e.get("sections", [])]
    units += [("aftermath", e.get("aftermath", "")), ("waluigiAssessment", e.get("waluigiAssessment", ""))]
    return [(k, v) for k, v in units if v]


def whatif_units(w: dict) -> list[tuple[str, str]]:
    units = [(c.get("heading") or c.get("id", "chapter"), c.get("body", "")) for c in w.get("chapters", [])]
    verdict = (w.get("verdict") or {})
    if isinstance(verdict, dict) and verdict.get("body"):
        units.append(("verdict", verdict["body"]))
    return [(k, v) for k, v in units if v]


# ---------------------------------------------------------------- output
def print_full(kind: str, rid: str, title: str, units: list[tuple[str, str]]) -> Report:
    whole = Report(rid, "\n\n".join(t for _, t in units))
    print(f"\n=== Readability: {rid} ({kind}) ===")
    if title:
        print(f'"{title}"')
    print(f"{whole.words:,} words · {whole.n_sent} sentences · {whole.paragraphs} paragraphs\n")
    print("Scores (higher FRE = easier; grades = school years):")
    print(f"  Flesch Reading Ease  {whole.fre:6.1f}    Flesch-Kincaid grade {whole.fk:5.1f}")
    print(f"  Gunning Fog          {whole.fog:6.1f}    SMOG                 {whole.smog:5.1f}")
    print(f"  Coleman-Liau         {whole.cli:6.1f}    ARI                  {whole.ari:5.1f}")
    print("\nRhythm (the part Flesch cannot see):")
    print(
        f"  sentence words: mean {whole.asl:.1f} · median {whole.median} · p90 {whole.p90} · "
        f"max {whole.longest} · stdev {whole.sd:.1f}"
    )
    print(
        f"  mix: {whole.short_pct:.0f}% short (≤6) / {whole.mid_pct:.0f}% mid (7-14) / "
        f"{whole.long_pct:.0f}% long (15-24) / {whole.vlong_pct:.0f}% very long (25+)"
    )
    print(f"  longest drumbeat: {whole.run_max} consecutive fragments (≤6 words)")
    print(f"  aphorisms (≤12-word copula verdicts): {whole.aphorisms} — {whole.aphorism_per_1k:.1f}/1k words")
    if whole.fre >= 80 and whole.flags:
        print(
            f"\n  NOTE: Flesch calls this draft very easy ({whole.fre:.0f}). That is the trap — FRE "
            "rewards short\n  sentences, so machine-gun prose scores *better* the worse it reads. "
            "Trust the flags below."
        )
    unit_rows = []
    for label, text in units:
        r = Report(label, text)
        unit_rows.append((label, r))
    print(f"\nUnits ({len(unit_rows)}):")
    print(f"  {'unit':38.38s} {'words':>6s} {'asl':>5s} {'frag%':>6s} {'sd':>5s} {'FK':>5s}  flags")
    for label, r in unit_rows:
        marks = []
        if r.n_sent >= 8:
            if r.sd < STACCATO_SD and r.short_pct >= STACCATO_SHORT_PCT:
                marks.append("machine-gun")
            if r.aphorism_per_1k > APHORISM_PER_1K:
                marks.append("aphorisms")
            if r.fk > DENSE_FK or r.fog > DENSE_FOG:
                marks.append("dense")
        print(f"  {label:38.38s} {r.words:6d} {r.asl:5.1f} {r.short_pct:5.0f}% {r.sd:5.1f} {r.fk:5.1f}  {', '.join(marks)}")
    long_sents = sorted(
        ((len(WORD_RE.findall(s)), s) for s in whole.sentences),
        key=lambda x: -x[0],
    )
    listed = [x for x in long_sents if x[0] > LONG_SENTENCE][:3]
    if listed:
        print(f"\nLongest sentences (>{LONG_SENTENCE} words — read them aloud):")
        for n, s in listed:
            print(f"  · {n}w — \"{_clip(s, 96)}\"")
    print()
    if whole.flags:
        print("Flags (advisory):")
        for f in whole.flags:
            print(f"  · {f}")
        print("\nAdvisory only. Bands are aims, not targets — re-read the prose and decide.")
    else:
        print("Nothing flagged. Advisory only — a clean bill here does not make the prose good.")
    return whole


def print_summary(kind: str, rows: list[tuple[str, str, Report]]) -> None:
    print(f"\n=== Readability summary: {kind} ({len(rows)} records) ===")
    print(f"{'id':52.52s} {'words':>6s} {'FRE':>5s} {'FK':>5s} {'sd':>5s} {'frag%':>6s} {'aph/1k':>7s}  flags")
    ranked = sorted(rows, key=lambda x: (-len(x[2].flags), x[2].sd))
    for rid, _title, r in ranked:
        print(
            f"{rid:52.52s} {r.words:6d} {r.fre:5.1f} {r.fk:5.1f} {r.sd:5.1f} "
            f"{r.short_pct:5.0f}% {r.aphorism_per_1k:7.1f}  {len(r.flags) or ''}"
        )
    flagged = [(rid, r) for rid, _t, r in rows if r.flags]
    print()
    if flagged:
        print("Flagged records (advisory — re-read and decide):")
        for rid, r in flagged:
            print(f"  · {rid}")
            for f in r.flags:
                print(f"      - {f}")
    else:
        print("Nothing flagged.")


# ---------------------------------------------------------------- main
def main() -> int:
    ap = argparse.ArgumentParser(description="Advisory readability audit for Waluipedia filings")
    tgt = ap.add_mutually_exclusive_group(required=True)
    tgt.add_argument("--analysis", metavar="ID|all", help="article analysis from articleAnalyses.json")
    tgt.add_argument("--event", metavar="ID|all", help="event from events.json")
    tgt.add_argument("--whatif", metavar="ID|all", help="what-if from whatifs.json")
    tgt.add_argument("--file", metavar="PATH", help="any markdown/text draft file")
    ap.add_argument("--summary", action="store_true", help="one line per record (only with an 'all' target)")
    ap.add_argument("--strict", action="store_true", help="exit 1 if any record is flagged")
    args = ap.parse_args()

    rows: list[tuple[str, str, list[tuple[str, str]]]] = []  # (id, title, units)
    if args.analysis:
        doc = _load("articleAnalyses.json")
        pool = doc.get("analyses", [])
        rows = _pick(args.analysis, pool, lambda a: (a["id"], a.get("title", ""), analysis_units(a)))
        kind = "analysis"
    elif args.event:
        pool = _load("events.json")
        rows = _pick(args.event, pool, lambda e: (e["id"], e.get("title") or e.get("name", ""), event_units(e)))
        kind = "event"
    elif args.whatif:
        pool = _load("whatifs.json").get("whatifs", [])
        rows = _pick(args.whatif, pool, lambda w: (w["id"], w.get("title", ""), whatif_units(w)))
        kind = "what-if"
    else:
        try:
            with open(args.file, encoding="utf-8") as fh:
                text = fh.read()
        except OSError as exc:
            print(f"ERROR: cannot read {args.file} — {exc}")
            return 2
        label = os.path.basename(args.file)
        rows = [(label, label, [(label, text)])]
        kind = "file"

    if not rows:
        return 2
    if args.summary and len(rows) == 1:
        print("NOTE: --summary only makes sense with an 'all' target; printing the full report.")

    reports: list[tuple[str, str, Report]] = []
    for rid, title, units in rows:
        if args.summary and len(rows) > 1:
            whole = Report(rid, "\n\n".join(t for _, t in units))
        else:
            whole = print_full(kind, rid, title, units)
        reports.append((rid, title, whole))
    if args.summary and len(reports) > 1:
        print_summary(kind, reports)

    flagged = [(rid, r) for rid, _t, r in reports if r.flags]
    if args.strict and flagged:
        print(f"\nSTRICT: {len(flagged)} record(s) flagged — re-read before filing:")
        for rid, _r in flagged:
            print(f"  · {rid}")
        return 1
    return 0


def _pick(selector: str, pool: list, shape) -> list[tuple[str, str, list]]:
    rows = [shape(r) for r in pool]
    if selector == "all":
        return rows
    hit = [r for r in rows if r[0] == selector]
    if not hit:
        ids = ", ".join(r[0] for r in rows[:6])
        print(f"ERROR: no record id '{selector}'. First ids: {ids}, …")
    return hit


if __name__ == "__main__":
    raise SystemExit(main())
