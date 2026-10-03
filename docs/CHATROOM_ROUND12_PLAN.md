# Chatroom round 12 — the "OG prompt" wishlist: design, plan, what shipped

The brief, in the reader's own terms: a proper Settings dialog with every
option in it; murmurs that are **full replies on their own cards**, able to
carry **simultaneous** actions (one runs while another shoots); picking
**several characters** at the bottom so they all act in one turn; no text
cut off in the macro row; a **Full Audit** that judges max/current HP and
the whole scene's consistency, with confirmation; **0 HP handled by the
scene itself** — a slap awake must change HP and status, no hand editing;
MP replaced by one finite, **regenerating Energy** that magic and exertion
both consume; the archives **visibly used** for consistency and recall; and
dialogue that is **fresh, specific and non-repetitive** — the Wario
*sue / invoice / fee / premium asset* loop — while staying in voice and
moving the story every turn. Murmurs and anti-repetition first.

Everything below is in `assets/chatroom/` (sources), regenerated into
`chatroom.html` and `workflow/roleplay.html` by `tools/build-chatroom.py`,
and covered by `tools/tests/test-chatroom-core.mjs` and
`test-chatroom-page.mjs`. The user-facing write-up is in
`CHATROOM_GUIDE.md` (sections 👥 The room answers, 👥 Several…, ⚡ Energy,
⛑ Down, ♻ Fresh turns, 📚 Material used, ⚙ Settings, 🩻 Full audit).

## The constraints that shaped every decision

- **One model call per turn** stays the contract (lean background mode).
  Nothing here adds a call to the turn: the room answers *inside* the
  speaker's call; freshness, energy, down/revive are **zero-call** scans
  on the page; the only new call is the Full audit, by hand.
- **The prompt is budgeted** (`PROMPT_BUDGET` 11,000 chars, tight-window
  test at 9,000 with three voice lines kept). Every new block is
  conditional: it rides only when there is something to say, and the one
  unconditional change (the *every turn moves the scene* rule) was paid
  for by shortening the Energy directive line and letting `squeezeBase`
  drop that rule at squeeze level ≥ 3.
- **Remaster, don't rewrite.** The old shapes stay valid: `[[MP:]]` still
  parses, `pinnedNext` may still be a single id, murmurs are still a
  setting, the quick audit is unchanged for anyone who liked it.

## 1 · Murmurs → the room answers, on their own cards

**Design.** Keep the single call, change what it licenses and what the
page does with it. The audience block has three settings
(`RP.AUDIENCE = {off, on, full}`, default **full**): *on* is the old one
short inline beat; *full* asks, after the speaker's turn, for **up to two**
proper replies from the people not speaking — each its **own paragraph
beginning `Name:`**, two to four sentences, action and line, in voice, to
what just happened, never the same beat as last time, silence allowed.

**Implementation.**
- `RP.audienceBlock(room, speakerId, setting)` — the three texts.
- `RP.splitChorus(text, speakerName, names, forbidden)` → `{main, pieces,
  dropped}`. Only **trailing** `Name:` paragraphs are cut (a name
  mid-sentence is prose; a reply that is all `Name:` lines is a transcript
  and is left whole); a paragraph for the player's character is dropped
  and reported.
- `generate()` files `chorus.main` as the speaker's card and each piece as
  its own `{role:'char', charId, chorus:true, moment, mood}` card, each
  through the usual scans (mood, grants, hurt, directives stripped), with
  a *✂ cut a line written for …* note when something was dropped.
  `historyFor` reads the card back as `Mona: …`.
- UI: `.turn.chorus` with a **👥 the room** tag; the speaker's face and
  name; its own mood colour. Settings → The people → *👥 The room
  answers*; Scene tab shortcut `dkAudience` (a labelled list).
- Tests: core (`splitChorus` cases, block texts, default), page (a mock
  branch answers with `Name:` paragraphs; the test proves separate cards,
  the tag, and the history line).

**Round 13 follow-up (bugs from play).** The split was too narrow: only
the *trailing* run, only present cast, exact names, only when the room
was set to answer — so *MR L:* paragraphs, a departed character's line
and anything after a blank line stayed inline on the speaker's card.
Now: `RP.splitChorus(text, speakerName, names, forbidden, {narrator})` →
`{main, pieces:[{name, kind, text}], dropped, unknown}`; any labelled
paragraph is a block; names match by `RP.nameKey` (and unique first
names); `generate()` passes present + away + invented + archive names and
the narrator's; a piece for somebody outside the scene is filed through
the `enter` directive (same sheet back, or the archive's, or a new one)
and gets a 🚪 line; `narrator` pieces become world cards; `unknown`
labels stay in the text. Per-card **🩺** (`runSheetAudit(r, {turn})`,
`sheetAuditPrompt(..., {turn:true})`, the `⟶` mark) and a TTS progress
readout on ■ Stop came in the same pass.

## 2 · Several people, one turn — the same moment

**Design.** Simultaneity is a *turn order with a shared clock*, not one
reply pretending to be three. The reader ticks the faces; each gets a
real turn and a real card; what makes it *the same moment* is a block in
each prompt saying nothing above has landed yet, plus history labels.

**Implementation.**
- Rail: **👥 Several…** (`qaTogether`) → `togetherPicker(r)`: checkboxes
  per speakable face + the narrator, radios **⏱ the same moment / ↓ one
  after another** (remembered in `room.togetherMode`, same by default),
  *Nobody — let the Director stage it*. Result: `room.pinnedNext` becomes
  an **array**, `room.pinnedSame` the mode; the pill reads *⏱ 2 together*;
  the ticked faces are lit.
- `sendText` / `qaContinue`: an array pin is the order itself
  (`pinnedOrder` drops anyone gone or played by you); with `pinnedSame`
  the group gets `room.moment = {id, ids, same, done}`; each `generate`
  passes `opts.moment` → `RP.momentBlock` (**THE SAME MOMENT …**), stamps
  `msg.moment` and `msg.same` (all but the first), and `moment.done`
  grows; the group closes at the end of the queue, on ■ Stop, 🎬 Direct,
  ⇄ merge, and every `queue = []` site.
- `historyFor` labels `Name (at the same moment): …`; cards wear
  **⏱ same moment**.
- Tests: core (`momentBlock` texts incl. the single-subject grammar, the
  history label, the block's position before STAGE DIRECTIONS), page
  (picker → array pin → two cards in order, `same` on the second, group
  closed, the tag, the prompt).

## 3 · No text cut off in the macro section

The two-row turn bar used `overflow: hidden` on `.speakers`, so a wide
cast or long macro labels cut the last buttons off. Now `.row.who`
scrolls sideways on its own (`overflow-x: auto`), `.row.do` **wraps**,
and `#speakers` is `overflow: visible`. The page layout test asserts all
three computed styles.

## 4 · Full audit

`runSheetAudit(r, {full:true})` from **Scene → 🩻 Full audit**
(`dkReviewFull`): forty turns instead of fourteen
(`RP.AUDIT_TURNS_FULL`), 900 tokens, and one more paragraph in
`sheetAuditPrompt(rooms, turns, {full:true})` — *judge the record at the
root*: maxima redefined when they do not fit the person, every condition
checked against the prose, presence against exits and entrances, the
clock against time passing, the kit against everything handled; then up
to **five** `NOTE:` lines on what does not hold together
(`parseAuditNotes(reply, 5)`). Both prompts now say *anyone at 0 HP is
DOWN* and *HP and Energy*. Same preview with a tick per line, same single
undo. The quick audit's menu row is renamed *🩺 Quick audit* on the Scene
tab (the Cast tab's *🧾 AI audit* button is unchanged).

## 5 · Down at 0 HP, and brought round — no hand editing

- `RP.markDown(sheet)` inside `applyChange` sets `flags.down` (with the
  note the body block reads) at 0 and lifts it above 0; `RP.fixDown(room)`
  sweeps sheets edited by hand, every turn, and files *Name is DOWN*.
- `bodyBlock`: *DOWN at 0 HP: barely conscious … cannot fight, run or
  lead.*
- `RP.reviveScan(text, room)` reads the **player's own line** for a slap,
  shaking, cold water, smelling salts, a stim, CPR, a potion, hauling
  someone up… against **the people who are at 0**, and `RP.revive(sheet,
  how)` moves the sheet *before the model is asked*: 5 % HP, `down`
  lifted, `barely_conscious` for three turns. The receipt (*⛑ Wario comes
  round at 5/100 HP — slapped awake; barely conscious*) is on the reader's
  card.
- `RP.vigourCheck(text, sheet)`: a 0-HP speaker written leaping, roaring,
  charging is retaken **once** with the body in the nudge (*⛑ … asking
  again, inside that body*); *tries to stand and cannot* passes.
- Tests: core for all four; page for the sheet-editor → 0 → retake →
  slap → revived flow against a mock branch that roars first and coughs
  on the retake.

## 6 · MP → one finite, regenerating Energy

- Everywhere the word: bars (`⚡ 38/50`), cards, sheets, the state block,
  the directive line `[[EN: Name -5]]`; `[[MP:]]`/`[[STAMINA:]]` are
  aliases; `-1en` is a valid condition cost.
- `RP.exertScan(text, sheet)` → magic 12 % / effort 6 % of the maximum,
  filed from the prose with the cause; `RP.regenEnergy(room, spentIds)`
  returns 4 % a turn to everyone who did not spend, with one line when a
  sheet is full again. Both run in `generate()` after the directives.
- Macros and ✦ Cast spend the same pool; the audits set and redefine it
  with `[[EN: Name = N]]` / `= current/max`.

## 7 · Archives actively used

The retrieval block now asks the model to **weave at least one** concrete
thing from the material into the turn; `RP.usedMaterial(text, hits,
skip)` names the filings whose words came back, and the card's strip shows
**📚 name** for those (`.read.used`) and **🔎** for the rest. Nothing was
added to the prompt's cost; the material was already there — it is now
asked for and shown when used.

## 8 · Fresh, specific, non-repetitive dialogue (zero calls)

- `RP.staleBits(room, charId)` reads the speaker's last `FRESH_TURNS` (12)
  turns for repeated sentence-bounded word-grams, the recurring subject
  words and the recurring opener. `RP.freshnessBlock(room, char, setting)`
  turns them into one conditional **FRESH TURN** block in the protected
  tail: the exact phrases, the subject, the opening — *not to be used, not
  even reworded* — and the positive instruction: *same person, same
  VOICE, but ONE move they have not made: a decision, a question that
  matters, an admission, a plan with a first step, a thing picked up and
  used, a change of position or tactic; answer the specific thing that
  just happened; end the turn with something changed.*
- `RP.repeatCheck(text, previous)` scores the reply; on **Strict**
  (default) a stale take is retaken once (*♻ … asking for a fresh turn*),
  and a card that still repeats wears **♻**. **Guide** sends the block
  only; **Off** does nothing. `RP.FRESH = {strict, on, off}`.
- The standing RULES gained *every turn moves the scene …*, shortened and
  squeezable; the audits' NOTE lines name *the same beat played for the
  fourth turn running*.

## 9 · ⚙ Settings — one dialog, five tabs

`settingsForm(openTab)` renders tabs (`.stab[data-stab]` /
`.spane[data-spane]`, remembered in `settingsTab`): **🖥 Model**, **🎬 The
scene** (length, style, narrator, narration turns, Director, chain
ceiling, Auto, Fate, Wounds — with the Energy and down rules written
beside them), **👥 The people** (fresh turns, the room answers, the note
on Several…, voice), **🧠 Memory & budget**, **🎨 Appearance**. Every
`f_*` id the tests already read still exists; new ones: `f_fresh`,
`f_audience`, `f_fate`, `f_hurt`, `f_director`, `f_maxChain`, `f_voice`.
The Scene tab keeps the same dials as labelled-list shortcuts.

## What is deliberately not done, and why

- **No second model call for the room.** A separate call per quiet
  character would make the room answer better and would triple the cost
  of every turn on a local model; the brief's own first rule for this page
  is one call per turn. If that ever changes, `splitChorus` is the seam:
  the pieces become the output of their own calls.
- **Same-moment turns are sequential calls** with a shared clock in the
  prompt, not a merged reply. That is what lets each person keep their own
  card, mood, kit and hurt ledger; the block is what keeps them from
  narrating each other's outcomes.
- **Freshness is lexical, not semantic.** It catches the Wario loop
  (phrases, subject, opener) without a model; it will not catch the same
  idea in entirely new words. The audits' notes are the semantic net.
- **Energy regen is flat (4 %/turn)**; resting, food and sleep do not yet
  speed it. `regenEnergy` is the one place to add that.

## How to verify

```
python3 tools/build-chatroom.py && python3 tools/build-chatroom.py --check
node tools/tests/test-chatroom-core.mjs
node tools/tests/test-roleplay-page.mjs
node tools/tests/test-roleplay-server.mjs
npm i --no-save jsdom && node tools/tests/test-chatroom-page.mjs
node tools/tests/audit-chatroom.mjs        # a hundred adversarial turns
```
