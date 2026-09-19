# Run report — the clock burns, the README owns it, and the monitor moves

**Filed:** run dated 2026-09-19
**Branch:** `arena/01a0b2a2-bik`

---

## 1. The clock was reading full, and it shouldn't have been

You were right. The countdown sat at `504:00:00` — the entire 21-day term,
untouched — even though the session that *starts* the timer also spends time
inside it. Bowser teleports in, crosses a hall, works a door, reaches the cold
storage, talks to a Toad, moves cargo.

The fix is anchored to the record rather than invented. **The only clock reading
anyone gives in that basement is the goblin's "722? maybe like 2 am."** So:

* the session's timecode is now `TC:0922-09-03T02:00/FEY` — it carries the hour
* `startedOn` stays at midnight on 3 Aethel, the earliest the term can have begun

The clock now reads **`502:00:00`** — two hours already burned. That is the
smallest honest number I can defend from the transcript; I did not want to guess
a larger one.

## 2. README rule for advancing and retiring the clock

New section in the calendar rules: **"Running deadlines — the clock moves when
you file, not when you remember."**

It states the mechanism (remaining time is derived from the newest filing on the
timer's own clock, never stored), and five rules:

* filing a Feyward session **is** how the Feyward timer advances
* give the session an hour in its timeCode when the record supports one
* never file a session dated earlier than the previous one on that clock
* never hand-edit remaining time, and never add an `elapsedDays` field
* `startedOn` never moves; only set an hour you can point at in the record

**And the retirement rule you asked for:** when a timer hits zero it has fired —
resolve it in the fiction, set `status: "resolved"`, and delete its row from the
README's live-timers table in the same commit. The panel already hides resolved
timers automatically; the README table is hand-kept, so it is called out
explicitly. A live-timers table now carries the one running timer.

## 3. The Power Projection Monitor

### The real reason it felt static

It rendered **absolute standings only** — the same three bars at the same three
lengths regardless of what happened at the table. Meanwhile **116 filed events
carry a `reputationChanges` ledger** that nothing on the page was reading.

### New: the Momentum board

Derived entirely from that ledger — nothing authored, so it advances every time
a session is filed:

* **Top movers**, ranked by absolute net change, with rising/falling colour, an
  animated magnitude bar, and click-through to the faction modal
* **Latest swings** — the newest individual reputation changes, each linking to
  the filing that caused it
* a header count: *23 rising · 25 falling · 366 filed swings*

Current top movers read Disaster Inc. **+121**, Mages' Guild **+90**, Mazebounds
**+69**, Chaos Dwarfs **−45**. The newest entry in the feed is the Mushroom
Regency taking **−12** from the session just filed, which is exactly the
liveness that was missing.

It is mounted empty and hydrated after load, because `renderGlobalWar()` is
synchronous with many callers and should not start blocking on IO.

### A stale-date bug found on the way

`data/world/calendar.js` exported `CURRENT_GAME_DATE` as a **hardcoded literal**
at Harvestide 18 (monthIndex 7), while `currentDate.json` — the actual source of
truth — had moved to Aethel 5. **Seventeen days of drift**, feeding **210 call
sites** across the app.

It cannot simply fetch, because it is a synchronous export. So it is now seeded
correctly *and* patched in place from `currentDate.json` at runtime, and
`tools/check-world-clock.py` (registered in `check-all.py` as **world clock**)
asserts the literal still matches the JSON so the two cannot silently diverge
again.

The monitor header also said only "Year 1040" — the same string for an entire
in-world year. It now shows the full world-clock date.

### Honest copy

The page claimed to be "a live, real-time tactical intelligence feed." Nothing
about it was real-time. Both blurbs now say what it actually is: figures computed
from filed pins, the province census and the reputation ledger, with the Momentum
board as the part that moves per session.

## 4. Verification

* `check-all.py` **59/61** — only the two known jsdom environment failures.
* `test-appearance-chronology.mjs` **60 passed, 0 failed**.
* One test failure was *correct* and caught this work: it asserted "a fresh
  deadline shows its full term in hours," which is the behaviour you flagged as
  wrong. Replaced with two assertions — the clock must already be burning, and
  must not have overrun the term.
* New `check-world-clock.py` passes; timecodes pass; all fetch paths verified to
  resolve on disk and over HTTP.

## 5. What is left

* **The 722/922 contradiction still stands.** Now slightly sharper: the session
  is filed at 922 with an 02:00 hour taken from a goblin who said the year was
  722 in the same breath.
* The Momentum board weights all swings equally regardless of age. If you want
  recent sessions to count for more, that is a one-line change — say so.
* Standing gaps unchanged: `dateSort` three schemes; 7 duplicate character ids;
  Iron Legion dossier stale; RNN 3 pending against a threshold of 10.
