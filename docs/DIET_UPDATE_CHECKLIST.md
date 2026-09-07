# Holy Midlands Diet — Update Checklist

The Diet chamber (`#/regal-diet`, Pressure tab at `#/regal-diet/ipn`) is only as
honest as its last update. After any session where the Empire votes, debates,
deploys, or suffers planar weirdness, run this checklist. The freshness stamp
on the Diet page (`dietFreshnessStamp()` in
`Reputation-Matrix2/systems/regal-empire-system.js`) shows the floor date, the
decided/scheduled counts, and the motion currently on the floor — check it
before and after.

## After every relevant session

- [ ] **Floor date** — set `MIDLANDS_DIET_DATA.currentDate` (`{year, monthIndex, day}`)
      to the session's in-world date. Everything (today's focus, vote status,
      deployment clocks) keys off this.
- [ ] **Decided votes** — move each voted motion from `UPCOMING_VOTES` to
      `VOTE_HISTORY` with its real `status` (`passed` / `failed` / `tabled`),
      final `results` (not projected), and a one-line `aftermath` if the
      chamber reacted.
- [ ] **New motions** — append fresh entries to `UPCOMING_VOTES` with `id`,
      `title`, `proposer`, `date`, and `for`/`against` arguments. The next
      chronological motion becomes the floor automatically.
- [ ] **Seats & representatives** — if anyone died, defected, or got expelled,
      update `generateRepresentatives()` / the expelled-faction filter
      (`onyx_hand`, `moonfang_pack`, plus newcomers). The active-vote count
      derives from this list.
- [ ] **Legion pressure** — if the Legion moved troops, update
      `activeDeployments` (and its `lastUpdated`) plus any
      `legionIntegration` brief tied to a vote. The Pressure tab reads the
      same data.
- [ ] **Cross-links** — newsworthy outcomes also belong in: the event record
      for the session, the faction article (`regal_empire`), and — if it
      changes party standing — the reputation engine inputs.
- [ ] **Verify** — reload `#/regal-diet`, confirm the stamp shows the new floor
      date and motion, and run `python3 tools/check-all.py`.

## Smell test

If the stamp's floor date is older than the latest session date, the Diet is
stale — work the checklist top to bottom. If `scheduled` reads 0, the chamber
has no future; file at least the next rumored motion so readers see what's
coming.
