# Rebuild Plan — `toad_liberation_file`

**Status:** planning only. No data files touched yet.
**Scope:** this case and nothing else.
**Rule for the whole document:** every figure below carries the file it came from. If a number has no source line, it does not go in the case.

---

## 1. What is wrong with the case as it stands

The problem is bigger than one bad number. The current case is not a real story with an invented figure in it — it is an invented *scenario*, internally consistent across all twelve exhibits, with no anchor in the data at all.

Grep for `774` across the whole repository returns nothing outside `investigations.json` itself. The same is true of every other load-bearing element:

| Element in the current case | Where it appears in the world data |
|---|---|
| 774 refugees in a camp | nowhere |
| arriving ~40 per day | nowhere |
| half rations since day 11, five days of stock | nowhere |
| three surveyed resettlement sites | nowhere |
| a 185-gold drainage pump, refused twice | nowhere |
| "New Toad Town" draft charter | nowhere |
| Council of Seven voting on a *resettlement petition* | the Council of Seven is real; that vote is not |

So the file's whole thesis — *rescue is easy, the afterwards is a subtraction* — is argued entirely from paper that the world has never heard of. It reads well. That is the trap. An invented premise that is carefully cross-referenced across twelve exhibits looks *more* trustworthy than a real one, because everything corroborates everything else. Nothing corroborates it from outside.

Two further errors are worth naming before they get repeated:

**Ironhold is not the prison.** `locations.json` has Ironhold as the Regal Empire's capital city — Central Processory, grid layout, Undercity smuggling routes. Waluigi has never been there. No Toad escape happens there. The prison is **Aegis Command**, an Imperial Processing Facility in the Midlands.

**Bramblehaven is not a refugee site.** `battles.json → fall_bramblehaven` is a Day-15 Peach Loyalist siege of a Fawful-held fortified town, after which Captain Toadette executed the surviving prisoners. `locations.json` calls it "a charnel house … a word that makes people go quiet." It is almost certainly where the invented "Bramblehaven resettlement site" came from. The two must never be conflated — the real Bramblehaven is an atrocity, not a housing option.

### What is worth keeping

Not the facts, but the **instincts**. Three of them are good and should survive into the rebuild:

1. *Prefer the boring document.* A distribution sheet is more damning than a speech.
2. *The archive files both readings.* Where sources disagree, show the disagreement instead of resolving it silently.
3. *Waluigi marks a preference and declines to write the conclusion.* Restraint is the house voice.

The rebuild keeps the instincts, throws out the invented paper, and re-derives everything from canon.

---

## 2. Sources scraped

Everything in section 3 comes from these, and I cite them per-line there.

- `data/liberatedToadsSystem.json` — cohorts, council seats, vote records, day-by-day timeline (days 5–21), meta clock
- `data/battles.json` — `aegis_command_riot`, `massacre_aegis`, `iron_sky_breach`, `reclamation_of_the_vigilance`, `fall_bramblehaven`, `siege_raventree`
- `data/majorBattles.json` — `aegis_command_riot`, `raid_aegis_command`, `capture_of_robinson`
- `data/factions.json` — `liberated_toads`, `pond_patrol`
- `data/locations.json` — `aegis_command`, `bramblehaven`, `ironhold`, `vigilance`
- `data/characters.json` — `speaker_l`, `bones`, `general_ironhand`
- `data/quests.json` — `liberated_toads_integration` ("The Shattered Vow")
- `data/events.json` — `thornburys_field_journal`, `star_shard_caves_tanuki_origin`, `the_estragon_island_incident`

---

## 3. The canonical spine, in order

All dates Highsun 1040 BF unless noted. "Day N" is the campaign day used by `liberatedToadsSystem.json`.

### Day 5, 18:45 — X.O. neutralised
The party, with critical help from Dan the Toad, takes down the X.O. and regains the Vigilance. Dan is left critical.
*Source: `liberatedToadsSystem.json` timeline day 5.*

### Day 12, 11:00 — Remi arrives in a crate
Wario gives her an exploding box. Comic beat, but it establishes that cargo aboard the Vigilance contains people.
*Source: timeline day 12.*

### Day 12, 15:00 — The Barrel Secret ★
**150+ trafficked Toads** are found sealed in barrels throughout the Vigilance, in a space reachable only by someone shrunk with a Mini-Mushroom. The Liberators' Circle forms out of the survivors.
*Source: timeline day 12; `factions.json → liberated_toads`.*

> This is the origin of the faction and the first appearance of the Mini-Mushroom as a *logistics* tool rather than a power-up. Note it now; it pays off on Day 21.

### Day 16 — The Day of Betrayal
14:00 Scavenging Doctrine vote: Dan's cautious-expedition proposal beats Archie's small-team plan **5 for, 1 against, 0 abstain** (`V-2016-001`). Later the same day the Mole — holder of the Scouts' council seat — is exposed as an Iron Legion spy. Bones is captured. Six Legion soldiers taken prisoner across Day 16 and Day 20.
*Source: timeline day 16; `recentVotes`; `activeVotes → V-2021-002` prisoner manifest.*

### Day 18, 10:00 — Emergency Resolution 17-A
Council passes it **6–0–0**, granting Speaker L emergency powers and creating the Accountability Docket. 13:00 the Regal Empire passes the Supernatural Sovereignty Act. Also Day 18: Medical Priority Protocol **6–0–0** — triage rules under which *core party members do not get priority over other Toads*.
*Source: timeline day 18; `recentVotes` `V-2018-001`, `V-2018-002`.*

### Day 19 — Raventree
06:30 Pond Patrol establishes a containment perimeter, authorised **5–1** (`V-2019-001`). 06:55 Green T is pulled into a mirror dimension. 08:00 Archie surrenders.
*Source: timeline day 19; `recentVotes`.*

### Day 20, 16:30 — The Iron Sky Breach ★
The Iron Legion boards and captures the Vigilance and renames it the **Legionlance**. Ryan jumps from the ship and is taken in by a Rakasha spirit-walker. Bones is confirmed held at an Imperial Processing Facility.
*Source: timeline day 20; `battles.json → iron_sky_breach`.*

### Day 21, 09:00 — The Iron Mandate
The Midlands Diet passes it **28–8–3**, classifying the Liberated Toads an "organized supernatural entity". Speaker Rivers resigns in protest. Emergency vote `V-2021-001` on the response is tabled at 10:00 with a one-hour deadline — Strategic Withdrawal leads 3, Diplomatic Outreach 2, Armed Resistance 1, Evacuation 0 — and is **suspended, never resolved**, when the shooting starts.
*Source: timeline day 21; `activeVotes → V-2021-001`.*

### Day 21, 10:00 — The Silence of Dragon Mountain
Robinson and the dragon Ignis-Major are captured and evacuated **to Aegis Command**. The dragon confesses first: the Dragon–Empire war is a fabrication, and the Empire has a sound frequency that paralyses dragons. A horn sounds; the dragon drops mid-air.
*Source: `majorBattles.json → capture_of_robinson`.*

> This is the thematic key to the whole case and the current file misses it completely. Aegis is not a prison that happens to be cruel. `locations.json` says it is **one of twelve nodes in a "Sonic Grid"** — Toads are used as living batteries to power emitters that paralyse dragons. The prisoners power the machine that enslaves the dragons. Robinson and the dragon arrive at the same building on the same morning as Order 120.

### Day 21, 14:00 — The infiltration collapses ★
Bones, in a Legion uniform, has been inside for days. He is taken to an interrogation room and questions a prisoner identified as Speaker L — who is a **decoy dyed green**, claiming his colour changed because he ate a poisoned mushroom. The decoy recites the "Fractured Heart" doctrine and the litany **CONTAIN, ACCOUNT, RESTORE, ADHERE**, and gives up nothing.

General Marcus Ironhand walks in, sees through the disguise instantly ("I'm a new recruit"), tears it off and **stabs Bones through the chest** without warning. Creek's raiding party melts one Legion soldier with acid and is overwhelmed.
*Source: `majorBattles.json → raid_aegis_command`; `quests.json → liberated_toads_integration`.*

### Day 21, 14:30 — Order 120 ★
Ironhand looks at the captured Toads — including a fake Archie Miser — and issues it: **execute every Toad prisoner in Legion custody.** No trials, no ransoms, no exceptions.
*Source: `battles.json → massacre_aegis`; `majorBattles.json → raid_aegis_command`.*

### Day 21, 14:30 — The Aegis Command Riot ★★
The same clock time, the other framing. Speaker L had let himself be captured *on purpose* and had rigged the facility in advance.

- **Phase 1 — the bread code.** Kitchen sympathisers bake Mini-Mushrooms into the prisoners' hardtack. On the third bell the laundry vents spew a peppermint gas synthesised to choke Imperial lungs and leave Toads unharmed.
- **Phase 2 — the miniature escape.** Prisoners eat the mushrooms, shrink out of their cuffs, and go down the floor drains, following **bioluminescent moss planted weeks earlier by Noki smugglers**.
- **Phase 3 — boilers.** Pressure valves jammed with **discarded Imperial service medals**. The steam explosion blows out the east wall and blinds the drones and snipers. Bedsheet ziplines, a 50-foot cliff dive into the river, Noki submersibles waiting.

**Result: 158 prisoners escape.** They also carry out proof of the Life-Force Extractors, the Sonic Dragon Nets and the Core Site digs.
*Source: `battles.json → aegis_command_riot`; `majorBattles.json → aegis_command_riot`; `locations.json → aegis_command`; `characters.json → speaker_l`.*

### Day 21, 14:45 — The vote that has no time to finish
Fernback proposes emergency vote **`V-2021-002` "CRISIS RESPONSE: ORDER 120"**, deadline **15:45 — sixty minutes**. Speaker's seat marked **SPEAKER ABSENT. CAPTAIN FERNBACK ASSUMING TEMPORARY COMMAND.** Quorum 4 of 4. Tally at freeze: Suicide Assault 2 (Thornshell, Fernback), hjumpik Bargain 1 (Ironspore), Distraction Strike 1 (Dewdrop). **Two votes, two votes — no majority, and the escape is already an hour old.**
*Source: `activeVotes → V-2021-002`.*

### Day 21, 19:30 — Arcane Wraith banished at Raventree
*Source: timeline day 21.*

### After — the Reclamation of the Vigilance
Hardliners retake the ship in the post-Aegis window. The anthem: *"We are the Toads who forge the chains"* and *"Speaker L once ruled too soft / We seized the throne and cast him off."* Speaker L deposed, status unconfirmed. Governance becomes an **Emergency Military Junta under Captain Fernback**. Refugees run for the **Whispering Caves** and then the Mushroom Kingdom border.
*Source: `battles.json → reclamation_of_the_vigilance`, `aegis_command_riot` aftermath; `liberatedToadsSystem.json → structure`.*

---

## 4. The numbers that are real

Use these. Nothing else.

| Figure | Value | Source |
|---|---|---|
| Toads found in the barrels | **150+** | timeline day 12; `factions.json` |
| Prisoners who escaped Aegis | **158** | `battles.json`, `locations.json`, `characters.json` |
| Toad dead at Aegis | **12 KIA** | `battles.json → aegis_command_riot` |
| Toads recaptured | **17** | same |
| Legion dead | **32 KIA** | same |
| Sonic Grid nodes | **12** | `locations.json → aegis_command` |
| Iron Mandate vote | **28–8–3** | timeline day 21 |
| Resolution 17-A | **6–0–0** | `recentVotes` |
| Scavenging Doctrine | **5–1–0** | `recentVotes` |
| Raventree containment | **5–1–0** | `recentVotes` |
| Order 120 crisis vote | **2 / 1 / 1**, no majority, 60-minute deadline | `activeVotes` |
| Legion prisoners held by Toads | **6**, named | `activeVotes → V-2021-002` |
| Dan's fireball death toll | **13 Toads** | `factions.json`; `the_estragon_island_incident` |
| Speaker L's demands | **13** | `factions.json` |
| Founding vote | **78 yes / 59 no of 137** | `factions.json` |
| Council seats | **7**, one **VACANT** (the Mole's) | `liberatedToadsSystem.json` |

### Cohort strengths (Day 21 snapshot)

| Cohort | Strength | Leader | Status | Morale |
|---|---|---|---|---|
| Pond Patrol | 23 / 30 | Captain Fernback | active | 85 |
| Barrel Survivors | 146 / 150 | Elder Mudcap | recovering | 62 |
| The Chroniclers | 12 / 20 | Scribe Dewdrop | active | 78 |
| The Crafters | 18 / 25 | Forgemaster Ironspore | active | 80 |
| The Wardens | 22 / 35 | Warden Thornshell | strained | 75 |
| The Menders | 15 / 20 | Healer Mistpetal | overwhelmed | 70 |
| The Scouts | 8 / 15 | **VACANT** | **compromised** | **45** |
| The Unassigned | 31 | — | transitional | 55 |

Members sum to 275, but `rosterNote` warns that **Barrel Survivors overlaps the other cohorts** — so 275 is not a population. Do not total these columns in the case. The honest line is that the file cannot state a population, and that is itself worth saying.

### The contradiction to preserve, not fix

The two casualty records disagree and both are canon:

| | `battles.json → aegis_command_riot` | `majorBattles.json → aegis_command_riot` |
|---|---|---|
| Toads | 12 KIA, 17 recaptured | 3 MIA |
| Legion | 32 KIA | 67 KIA |
| Rioters | 158 escaped | "150 toads rioted" |

Same battle, same day, two returns. This is the single best piece of material in the whole arc and it is *free* — it is already in the files. A case about an atrocity whose own paperwork cannot agree on the body count is a far better file than one about a missing pump. **Exhibit 10 is built on this.**

Likewise `massacre_aegis` ("catastrophic failure, every prisoner executed") and `aegis_command_riot` ("decisive Toad victory, 158 escaped") describe **the same 14:30** and are irreconcilable as written. That tension is the case.

---

## 5. The new thesis

> **The old thesis:** liberation is a logistics problem — rescue is easy, the afterwards is a subtraction.
> Good line. Invented evidence.

> **The new thesis:** *Aegis Command was a machine for turning people into power, and the paperwork it generated cannot agree on what happened inside it. Two returns for one afternoon. One says massacre, one says victory. Both were filed. Neither was withdrawn.*

Retitle: **"Two Returns for One Afternoon."** Codename can stay in the same register as the other four files.

This keeps the original instinct — prefer the boring document, file both readings, let Waluigi decline the conclusion — while resting every plank on a real source line. And it upgrades the subject from a camp that never existed to the thing the data actually cares about: **the Sonic Grid, the batteries, and an administrator who signed a mass execution between requisitions.**

The logistics angle survives, transposed: the escape *was* a logistics operation. Bread, gas, drains, moss, medals, boilers, submersibles. Speaker L beat a fortress with a supply chain. That is the same idea the old file wanted, now with canon underneath it.

---

## 6. Structure of the rebuilt file

### Sessions (4) — each must map to a real `events.json` id

| id | label | anchor event | why it resolves |
|---|---|---|---|
| `s_tl_barrels` | The barrels aboard the Vigilance | `the_estragon_island_incident` | carries the Liberated Toads' origin and Dan's 13 |
| `s_tl_infiltration` | Bones inside Aegis Command | `thornburys_field_journal` | contains the Speaker L / Bones / Order 120 profile text — a better anchor than the current Alpine Bank event |
| `s_tl_grid` | Twelve nodes and a paralysed dragon | `star_shard_caves_tanuki_origin` | explicitly references Order 120 and the massacre |
| `s_tl_order120` | Two returns for one afternoon | `disaster_inc_naming_dispute` | carries the Speaker L / barrel-survivor material |

*Anchors to re-verify against `check-investigations.py` before writing; if one fails, swap for another event that genuinely mentions the material rather than one that merely exists.*

### Threads (5)

1. **Two returns for one afternoon** — 12 KIA/32 KIA versus 3 MIA/67 KIA, both filed, neither withdrawn.
2. **The prisoners were the power supply** — twelve nodes, living batteries, a dragon that drops when a horn sounds.
3. **The seventh seat is empty because it was the Mole's** — the Scouts at 8/15, morale 45, status *compromised*, and a council that must reach quorum with a hole in it.
4. **Sixty minutes and no majority** — `V-2021-002`, 2/1/1, speaker absent, deadline 15:45, and the escape already underway while the council deliberates.
5. **He let them take him** — Speaker L's capture as method, and the decoy who held under torture with a poisoned-mushroom cover story.

### Leads (5)
Each states an objective and a *why* in the house style, each cites exhibits that exist. Sketches:
- Reconcile the two casualty returns — ask which one the Legion filed upward.
- Identify the other eleven Sonic Grid nodes.
- Fill the seventh seat, or establish who benefits from it staying empty.
- Find out whether `V-2021-001` was ever resumed after suspension.
- Establish what the decoy was told to say, and by whom.

### Exhibits (12)

Each is a real document a real clerk would have produced, each is backed by a **new prop**, each explains its own significance, and each interlocks with at least two others.

| # | Exhibit | Document | Interlocks with |
|---|---|---|---|
| 1 | Barrel manifest | cargo return for the Vigilance listing sealed barrels by weight, with the weights wrong for cargo | 2, 12 |
| 2 | Mini-Mushroom stores docket | quartermaster's issue record — the same item that found the barrels later feeds the escape | 1, 7 |
| 3 | Cohort strength return | the Day-21 table, with the overlap warning that makes the total unusable | 4, 11 |
| 4 | Council division — seventh seat vacant | the 6–0–0 and 5–1 votes, and the seat that cannot vote | 3, 5, 9 |
| 5 | Emergency vote sheet `V-2021-002` | 2/1/1, 60 minutes, SPEAKER ABSENT | 4, 9, 10 |
| 6 | Interrogation transcript — the green prisoner | CONTAIN, ACCOUNT, RESTORE, ADHERE; the poisoned-mushroom line | 7, 8 |
| 7 | Kitchen requisition — hardtack | bread ordered in quantities that do not match the roll | 2, 6 |
| 8 | Order 120, as signed | the order itself, in administrative language, with the countersign block | 6, 10 |
| 9 | Sonic Grid node schedule | twelve nodes, output figures, and a column for "throughput" | 11, 12 |
| 10 | **The two casualty returns, side by side** | the centrepiece — same header, same date, different numbers | 5, 8 |
| 11 | Boiler maintenance log | valve failures, and the service medals recovered from the housings | 9, 12 |
| 12 | Noki consignment note | moss, submersibles, and a delivery weeks before anyone needed it | 1, 9, 11 |

Every exhibit obeys the standing bar: `visual` with inline styles only and no `class=`, `onRecord`, `dc` 2–7, ~550-word `analysis`, four inline rolls at DC 2–6 with both branches worth reading, resolving `links.*`, a real prop with no inline `style=` and only `pd-*` classes that exist in `exhibits.css`.

### Props
Twelve new entries in `props.json`. The twelve current `prop_*` entries for this case are used by no other investigation, so they are removed with the exhibits rather than orphaned.

---

## 7. Order of work

1. Verify the four session event anchors against `check-investigations.py`.
2. Write the twelve props first — the documents are the evidence; the prose is commentary on them.
3. Write the twelve exhibits against those props.
4. Write hook, `plainSummary` (5), `background` (3), brief, threads (5), leads (5).
5. Delete the twelve obsolete props and the old exhibit bodies.
6. Run all four checkers plus the inline-script `node --check`, then a jsdom smoke of the case route.
7. Commit and push to `arena/019fef0f-bik`.

## 8. Open questions for you

1. **Title.** "Two Returns for One Afternoon" — or keep "Liberation Is A Logistics Problem" and re-found it on the escape-as-supply-chain reading? Both work; the first is more honest about what the evidence shows.
2. **The Sonic Grid.** I want it central — it is the reason Aegis exists and the current file never mentions it. Any reason to keep it in the background?
3. **Casualty contradiction.** I plan to present it unresolved, with Waluigi marking a preference but not deciding. Confirm that is the call you want.
4. **Ironhold.** It appears nowhere in the rebuild. If you had a reason for the prison being in the capital, say so now.
