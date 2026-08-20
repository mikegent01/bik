#!/usr/bin/env python3
"""
Updates index.html's view_home() timeline feed (the block between the
<!-- 4. RECENT CAMPAIGN ADVENTURES --> and <!-- 5. OPERATOR TOOLKIT -->
anchors). The feed HTML lives in timeline_html below — edit THAT, never
index.html directly; the next run of this tool erases manual edits.

STANDING ORDER — RAKASHA NEWS NETWORK
-------------------------------------
Adding an item to the "RECENT ADVENTURES" feed means the week now owes a
broadcast. Cadence is per docs/RNN_BROADCAST_GUIDE.md: one episode per
~10 filed events, not one per event.

    python3 tools/build-rnn-broadcast.py --unaired   # what has never aired
    #  ...write tools/rnn-scripts/epNNN.json...
    python3 tools/build-rnn-broadcast.py             # cut it + re-splice both READMEs

STANDING ORDER — WAHWIRE
------------------------
Every new feed item is also a filing, and every filing posts to the wire:
see docs/CROSS_SYSTEM_UPDATES.md before calling a run done.
"""

import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INDEX_PATH = os.path.join(ROOT, 'index.html')

timeline_html = """<!-- 4. RECENT CAMPAIGN ADVENTURES & CHRONICLE FEED -->
   <div class="card animate-fade-in" style="border-left:4px solid #e0b400; margin-bottom:24px;">
     <div class="flex-between-center" style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; margin-bottom:6px;">
       <div>
         <span style="font-size:11px; font-weight:900; color:var(--accent2); text-transform:uppercase; letter-spacing:0.6px;">Party Chronicle &amp; Session Logs</span>
         <h2 style="font-size:20px; font-weight:900; margin:4px 0; color:var(--text);">📜 RECENT ADVENTURES — WHAT WE'VE BEEN THROUGH</h2>
       </div>
       <button class="chip active" onclick="Router.go('#/list/events')" style="cursor:pointer; background:var(--accent2); color:#0b0616; font-weight:800;">📂 Browse All Campaign Events →</button>
     </div>
     <p style="font-size:14px; color:var(--muted); margin:0 0 8px;">
       Chronological audit feed of recent party escapes, battles, and intelligence breakthroughs in 1040 BF:
     </p>

     <div class="campaign-timeline-feed">
       <!-- System Update: Pond Patrol + Diet after the Reclamation -->
       <div class="campaign-timeline-item" onclick="Router.go('#/pond-docket')" style="cursor:pointer; border-left:4px solid #4a9c6d; background:linear-gradient(135deg,rgba(74,156,109,.16),var(--panel2));">
         <div class="timeline-date-chip" style="color:#7fd8a4;">Highsun 24–25, 1040 BF · System Update · Post-Reclamation Governance</div>
         <h3 class="timeline-event-title">Post-Reclamation Motions — The Vigilance Is Back, But Not Gentle</h3>
         <div class="timeline-actors">
           <span>Pond Patrol</span><span>Cohort Council</span><span>Hardliner Deck Faction</span><span>Speaker Rivers</span><span>Holy Midlands Diet</span>
         </div>
         <p class="timeline-summary">
           After rereading The Reclamation of the Vigilance, the live systems now reflect the harder truth: the Toads retook the ship, but the anthem and deck control point toward hardliner authority rather than a simple return to Speaker L's old sanctuary. Pond Patrol motions now reject a second cohort army into Raventree while the ship is unstable, and the Holy Midlands Diet calendar now treats the reclaimed ship as today's political crisis instead of leaving the Iron Mandate frozen as "today."
         </p>
         <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:10px;" onclick="event.stopPropagation();">
           <span class="chip" onclick="Router.go('#/pond-docket')" style="margin:0; font-size:12px; background:#4a9c6d; color:#fff; font-weight:800;">⚖️ Open Pond Patrol Motions →</span>
           <span class="chip" onclick="Router.go('#/regal-diet')" style="margin:0; font-size:12px; background:var(--panel2); border-color:var(--accent2);">🏛️ Holy Midlands Diet →</span>
           <span class="chip" onclick="Router.go('#/article/reclamation_of_the_vigilance')" style="margin:0; font-size:12px; background:var(--panel2); border-color:var(--accent);">🚀 Reclamation Filing →</span>
         </div>
       </div>

       <!-- Event 0: Latest Ebott Final Log -->
       <div class="campaign-timeline-item" onclick="Router.go('#/article/mount_ebott_survey_final_log')" style="cursor:pointer; border-left:4px solid #8a4bff; background:linear-gradient(135deg,rgba(138,75,255,.18),var(--panel2));">
         <div class="timeline-date-chip" style="color:#c9a6ff;">Harvestide 29, 1045 BF · Day 6 · Later-Dated Final Ebott Log</div>
         <h3 class="timeline-event-title">The Mount Ebott Survey: Final Log — The Transport, the Embassy Debrief, and the Logger Cutoff</h3>
         <div class="timeline-actors">
           <span>Gamma Agent</span><span>Dracule Mihawk</span><span>Wing Gaster</span><span>Asgore</span><span>Toriel</span><span>Sans</span><span>Koffin-K</span><span>Jamesly</span><span>Daniel</span>
         </div>
         <p class="timeline-summary">
           The oath of silence becomes a transport. Wing Gaster sends Mihawk and the Gamma Agent to the surface, the Legion takes custody of a survey machine that recorded far more than ecology, the embassy grants monitored outside calls, Mihawk is debriefed as a non-Legion witness, the Deadman's Stamp turns discipline into leak investigation, and High Command shuts the logger off exactly where the breach briefing begins.
         </p>
         <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:10px;" onclick="event.stopPropagation();">
           <span class="chip" onclick="Router.go('#/article/mount_ebott_survey_final_log')" style="margin:0; font-size:12px; background:#8a4bff; color:#fff; font-weight:800;">📖 Read Final Log →</span>
           <span class="chip" onclick="Router.go('#/investigation/mount_ebott_silence_file')" style="margin:0; font-size:12px; background:var(--panel2); border-color:var(--accent2);">🔍 Investigate the Missing Minutes →</span>
           <span class="chip" onclick="Router.go('#/article-analysis/mount_ebott_final_log_waluigi_analysis')" style="margin:0; font-size:12px; background:var(--panel2); border-color:var(--accent);">🖋️ Opinion Filing →</span>
         </div>
       </div>

       <!-- Event 0: Latest Battle Filing - Woodfellow vs the Treant -->
       <div class="campaign-timeline-item" onclick="Router.go('#/article/feyward_woodfellow_vs_the_treant')" style="cursor:pointer; border-left:4px solid #e5484d; background:linear-gradient(135deg,rgba(229,72,77,.14),var(--panel2));">
         <div class="timeline-date-chip" style="color:#e5484d;">1 Aethel, 922 BF (Feyward clock) · 24 combatants · Latest Battle Filing</div>
         <h3 class="timeline-event-title">Woodfellow vs. the Treant — The Lane, the Ledger, and the Weather</h3>
         <div class="timeline-actors">
           <span>Woodfellow</span><span>Ramsee</span><span>Swifty</span><span>Renard</span><span>Joseph</span><span>Zach</span><span>The Treant</span><span>The Shambling Mound</span><span>The Sprites</span><span>The Dryad</span>
         </div>
         <p class="timeline-summary">
           The season the plants took over produces the campaign's largest engagement: a hired cutting crew — satyr line, house guards, one goblin with a kitchen knife, Ramsee and his assorted cutlery, and Woodfellow, who throws books — against the wood's champion treant and everything it could wake. Sleep-sand thrown wide turns the lane into a weather system, a skirmisher's arrow brings down the expedition's own swordfighter in the press, and the battle turns on a single book driven through the split in the treant's trunk. The fleeing mound is run down during an eighteen-minute gap no survivor's account covers and destroyed — with the sprites' own poison in it. Two of the expedition are carried from the field; the cleanup is owed as a separate filing.
         </p>
         <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:10px;" onclick="event.stopPropagation();">
           <span class="chip" onclick="Router.go('#/article/feyward_woodfellow_vs_the_treant')" style="margin:0; font-size:12px; background:#e5484d; color:#fff; font-weight:800;">⚔️ Read Battle Filing →</span>
           <span class="chip" onclick="Router.go('#/article/feyward_second_hidden_room_rout')" style="margin:0; font-size:12px; background:var(--panel2); border-color:var(--accent2);">🌿 The Cutting Crew's Manor Rout →</span>
           <span class="chip" onclick="Router.go('#/article/feyward_grove')" style="margin:0; font-size:12px; background:var(--panel2); border-color:var(--accent);">🌲 The Dreaming Tree Grove →</span>
         </div>
       </div>

       <!-- Event 0: Latest Session - Hanging-Tree Apple / Mirror Theft -->
       <div class="campaign-timeline-item" onclick="Router.go('#/article/the_hanging_tree_apple_mirror_theft_and_invited_vampire')" style="cursor:pointer; border-left:4px solid #6f59a8; background:linear-gradient(135deg,rgba(111,89,168,.18),var(--panel2));">
         <div class="timeline-date-chip" style="color:#c9a6ff;">Harvestide 30, 1040 BF · Night · Latest Session</div>
         <h3 class="timeline-event-title">The Hanging-Tree Apple, the Mirror Theft, and the Invited Vampire</h3>
         <div class="timeline-actors">
           <span>Remi</span><span>Markop</span><span>Eager</span><span>Rattles</span><span>Original Dan</span><span>Wario</span><span>Boundy</span><span>Randell</span>
         </div>
         <p class="timeline-summary">
           A locate spell meant for Archie pings near Tymnas's cottage. Boundy offers Remi an apple grown at the hanging tree and uses her name without being told it. Eager steals the Mirror of True Reflection from a sleeping guard, an imp in the broom closet invites Randell the vampire through the threshold, Dan burns him back out with the Holy Symbol of Ravenkind, and Wario warns that the storm itself is controlled before making Remi admit she does not know where home is.
         </p>
         <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:10px;" onclick="event.stopPropagation();">
           <span class="chip" onclick="Router.go('#/article/the_hanging_tree_apple_mirror_theft_and_invited_vampire')" style="margin:0; font-size:12px; background:#6f59a8; color:#fff; font-weight:800;">📖 Read Full Session Filing →</span>
           <span class="chip" onclick="Router.go('#/article/tymnas_cottage_and_hedge_maze')" style="margin:0; font-size:12px; background:var(--panel2); border-color:var(--accent2);">🏡 Tymnas's Cottage →</span>
           <span class="chip" onclick="Router.go('#/article/remi_akamatsu_full_backstory')" style="margin:0; font-size:12px; background:var(--panel2); border-color:var(--accent);">🛠️ Remi →</span>
         </div>
       </div>

       <!-- Event 0b: Recovered Archive - Mount Ebot Part II -->
       <div class="campaign-timeline-item" onclick="Router.go('#/article/the_mount_ebot_expedition_part_2')" style="cursor:pointer; border-left:4px solid #c9a6ff; background:linear-gradient(135deg,rgba(201,166,255,.16),var(--panel2));">
         <div class="timeline-date-chip" style="color:#c9a6ff;">Aethel 18, <b>1032 BF</b> · Recovered Archive Filing — leaf 2 of the One-T file</div>
         <h3 class="timeline-event-title">The Mount Ebot Expedition — Part II: The Corporate Audit</h3>
         <div class="timeline-actors">
           <span>Waluigi</span><span>Wario</span><span>Jory Dobbs</span><span>The Charter Pilot</span>
         </div>
         <p class="timeline-summary">
           The morning after the wrong mountain, the charter is airborne. Dobbs opens a crate with a rusted dagger, eats orange flake, and then reads the stencils: PROPERTY OF WARIO WARE INC, on every barrel. Wario calls it an audit. A silver canister Wario graded as garbage buys a brass key and a VIP card. The fuel tank says All Clear at twenty percent. Then the pilot says dimensional rift, three days to a refuel, and Heartstone, and Dobbs asks what is for dinner.
         </p>
         <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:10px;" onclick="event.stopPropagation();">
           <span class="chip" onclick="Router.go('#/article/the_mount_ebot_expedition_part_2')" style="margin:0; font-size:12px; background:#8a4bff; color:#fff; font-weight:800;">📖 Read Part II →</span>
           <span class="chip" onclick="Router.go('#/article/the_mount_ebot_expedition')" style="margin:0; font-size:12px; background:var(--panel2); border-color:var(--accent2);">🪨 Part I — One T →</span>
           <span class="chip" onclick="Router.go('#/investigation/mount_ebot_one_t_file')" style="margin:0; font-size:12px; background:var(--panel2); border-color:var(--accent);">🔍 One-T File →</span>
         </div>
       </div>

       <!-- Event 1: Recovered Archive - The Mount Ebot Expedition -->
       <div class="campaign-timeline-item" onclick="Router.go('#/article/the_mount_ebot_expedition')" style="cursor:pointer; border-left:4px solid #8a4bff; background:linear-gradient(135deg,rgba(138,75,255,.16),var(--panel2));">
         <div class="timeline-date-chip" style="color:#c9a6ff;">Aethel 17, <b>1032 BF</b> · Duration: ~18 hours in-world · Recovered Archive Filing — released 1040 BF</div>
         <h3 class="timeline-event-title">The Mount Ebot Expedition — One T</h3>
         <div class="timeline-actors">
           <span>Waluigi</span><span>Wario</span><span>Jory Dobbs</span><span>Antonio</span><span>The Charter Pilot</span><span>The Small One</span>
         </div>
         <p class="timeline-summary">
           An eight-year-old filing, released from storage this week. In 1032 BF Wario plans the whole thing in a locked gold room over treasure maps weighted down with garlic bread, hires a stranger named Jory Dobbs off a noticeboard for a wage of nothing, forges two passports, and specifically excludes Waluigi — then spots him on a balcony with binoculars at four in the morning, abducts him in a produce sack, and flies a taped-together charter into a storm hunting treasure. The aircraft goes into a cave sideways, the pilot is knocked unconscious, Dobbs takes a head wound, and the party climbs anyway — past a silent bone-throwing sentry that teleports, an earthquake that pushes skeletons up out of the ground in rows, and a bridge improved with sixty razors and six flame jets triggered by weight. At the summit: a plank with four names on it, and a map that reads MOUNT EBOT. One T. The wrong mountain, four hundred miles west of the right one, because a compositor at the Old World Mapping Company dropped a letter. The correction demand was never answered — the plate still reads one T.
         </p>
         <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:10px;" onclick="event.stopPropagation();">
           <span class="chip" onclick="Router.go('#/article/the_mount_ebot_expedition')" style="margin:0; font-size:12px; background:#8a4bff; color:#fff; font-weight:800;">📖 Read Full Session Filing →</span>
           <span class="chip" onclick="Router.go('#/article/mount_ebot')" style="margin:0; font-size:12px; background:var(--panel2); border-color:var(--accent2);">🪨 Mount Ebot (One T) →</span>
           <span class="chip" onclick="Router.go('#/article/jory_dobbs')" style="margin:0; font-size:12px; background:var(--panel2); border-color:var(--accent);">🩹 Jory Dobbs →</span>
           <span class="chip" onclick="Router.go('#/article/mount_ebott')" style="margin:0; font-size:12px; background:var(--panel2); border-color:#e5484d;">⛰️ Mount Ebott (Two T) →</span>
         </div>
       </div>

       <!-- Event 1: Box Guardian & Sharpie Disguise -->
       <div class="campaign-timeline-item" onclick="Router.go('#/article/the_box_guardian_sharpie_disguise_and_the_soot_barrel')" style="cursor:pointer; border-left:4px solid #d4a853; background:linear-gradient(135deg,rgba(212,168,83,.14),var(--panel2));">
         <div class="timeline-date-chip" style="color:#d4a853;">Harvestide 30, 1040 BF · Duration: ~1.5 hours · Previous Session</div>
         <h3 class="timeline-event-title">The Box Guardian, the Sharpie Disguise, and the Soot-Barrel Trap</h3>
         <div class="timeline-actors">
           <span>Remi Akamatsu</span><span>Markop</span><span>Feyward Dan</span><span>Eager</span><span>Salam</span><span>Tymnas</span><span>Mossy</span><span>The Box Guardian</span>
         </div>
         <p class="timeline-summary">
           Following the imp attack, Dan and Tymnas stay behind to heal Salam while Markop and Eager track Remi through dark woods. Markop casts Locate Object on her necklace, reuniting with Remi who escaped the cells with Mossy. Returning to the dungeon facility to recover her stolen gear, invisible Remi sneaks into a crab cage, triggers a dancing Box Guardian goblin, survives a gunpowder soot-barrel blast, and escapes wearing a cardboard box disguise drawn with a Sharpie marker while singing the Toad spore shanty.
         </p>
         <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:10px;" onclick="event.stopPropagation();">
           <span class="chip" onclick="Router.go('#/article/the_box_guardian_sharpie_disguise_and_the_soot_barrel')" style="margin:0; font-size:12px; background:#d4a853; color:#0b0616; font-weight:800;">📖 Read Full Session Filing →</span>
           <span class="chip" onclick="Router.go('#/article/remi_akamatsu_full_backstory')" style="margin:0; font-size:12px; background:var(--panel2); border-color:var(--accent);">🛠️ Remi's Backstory →</span>
           <span class="chip" onclick="Router.go('#/article/markop')" style="margin:0; font-size:12px; background:var(--panel2); border-color:var(--accent2);">🛠️ Markop's Locate Object →</span>
           <span class="chip" onclick="Router.go('#/article/the_imp_ambush_aftermath_and_kyrn_cell_escape')" style="margin:0; font-size:12px; background:var(--panel2); border-color:#e5484d;">⚔️ Previous Imp Aftermath →</span>
         </div>
       </div>

       <!-- Event 2: Mount Ebott Survey Part VII -->
       <div class="campaign-timeline-item" onclick="Router.go('#/article/mount_ebott_survey_part_7')" style="cursor:pointer; border-left:4px solid #8a4bff; background:linear-gradient(135deg,rgba(138,75,255,.10),var(--panel2));">
         <div class="timeline-date-chip" style="color:#c9a6ff;">Mid-10XX BF — Day 6 · Duration: ~2.5 hours · Egress Completed</div>
         <h3 class="timeline-event-title">The Mount Ebott Survey: Part VII — The Tea Promise, Flowey's Execution, &amp; The Throne Room Oath</h3>
         <div class="timeline-actors">
           <span>Sans</span><span>Flowey</span><span>Papyrus</span><span>Gamma Agent</span><span>Dracule Mihawk</span><span>King Asgore</span><span>Queen Toriel</span>
         </div>
         <p class="timeline-summary">
           Following Papyrus's dusting in the false meadow, Sans recalls drinking tea with King Asgore before freezing time and executing Flowey in a burst of blue magic. The Agent recovers the survey machine's combat logs and attempts to wear it as a backpack. Guided by Sans through the Underground's cave loop, the group bluffs past royal guards using Commissar Vexis papers and negotiates localized transport to the surface with King Asgore and Queen Toriel under an Oath of Secrecy.
         </p>
         <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:10px;" onclick="event.stopPropagation();">
           <span class="chip" onclick="Router.go('#/article/mount_ebott_survey_part_7')" style="margin:0; font-size:12px; background:#8a4bff; color:#fff; font-weight:700;">📖 Read Part VII Egress File →</span>
           <span class="chip" onclick="Router.go('#/article/asgore')" style="margin:0; font-size:12px; background:var(--panel2); border-color:var(--accent2);">👑 King Asgore &amp; Queen Toriel →</span>
           <span class="chip" onclick="Router.go('#/article/sans')" style="margin:0; font-size:12px; background:var(--panel2); border-color:#3f8fd0;">💀 Sans &amp; Papyrus →</span>
           <span class="chip" onclick="Router.go('#/article/iron_legion')" style="margin:0; font-size:12px; background:var(--panel2); border-color:var(--danger);">📜 Vexis Credentials →</span>
         </div>
       </div>

       <!-- Event 3: post-Imp aftermath -->
       <div class="campaign-timeline-item" onclick="Router.go('#/article/the_imp_ambush_aftermath_and_kyrn_cell_escape')" style="cursor:pointer; border-left:4px solid #e5484d; background:linear-gradient(135deg,rgba(229,72,77,.10),var(--panel2));">
         <div class="timeline-date-chip" style="color:#e5484d;">Harvestide 29–30, 1040 BF · Duration: ~2 hours · Facility Breakout</div>
         <h3 class="timeline-event-title">The Imp Ambush Aftermath — The Book, the Cells, and the Dog Who Came Back</h3>
         <div class="timeline-actors">
           <span>Eager</span><span>Salam</span><span>Remi</span><span>Rattles</span><span>Feyward Dan</span><span>Markop</span><span>Mossy</span>
         </div>
         <p class="timeline-summary">
           The cottage defense breaks without a whole-party surrender: Eager's whip drops Salam, Rattles throws him through the window, Dan smites an imp, and Markop disburses the remaining attackers while retaining the book. The imps take the Black Crystal and Mirror. Remi wakes at one hit point in Kyrn's cells, watches Mossy melt, escapes through an unlocked door, repairs the steel dog, and leaves with the prison route exposed. Session XP preview: 3,300, including Kyrn's facility control and magic awards.
         </p>
         <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:10px;" onclick="event.stopPropagation();">
           <span class="chip" onclick="Router.go('#/article/the_imp_ambush_aftermath_and_kyrn_cell_escape')" style="margin:0; font-size:12px; background:#e5484d; color:#fff; font-weight:700;">📖 Read Aftermath &amp; XP Ledger →</span>
           <span class="chip" onclick="Router.go('#/article/mossy')" style="margin:0; font-size:12px; background:var(--panel2); border-color:#e0b400;">🐕 Mossy / Steely →</span>
           <span class="chip" onclick="Router.go('#/article/remi_akamatsu_full_backstory')" style="margin:0; font-size:12px; background:var(--panel2); border-color:var(--accent);">🛠️ Remi's Escape →</span>
           <span class="chip" onclick="Router.go('#/article/the_imp_ambush_of_harvestide_29')" style="margin:0; font-size:12px; background:var(--panel2); border-color:var(--accent2);">⚔️ First Imp Battle →</span>
         </div>
       </div>

       <!-- Event 4: Hjumpik Feyward Session -->
       <div class="campaign-timeline-item" onclick="Router.go('#/article/feyward_chop_bros_soul_ring_and_the_guard_with_no_name')" style="cursor:pointer; border-left:4px solid #2fae8a; background:linear-gradient(135deg,rgba(47,174,138,.12),var(--panel2));">
         <div class="timeline-date-chip" style="color:#2fae8a;">23–24 Harvestide, 1040 BF (Feyward-relative) · Duration: ~1.5 hours · Feyward Expedition</div>
         <h3 class="timeline-event-title">Chop Bros, the OC Soul Ring, &amp; The Guard With No Name (Hjumpik Session)</h3>
         <div class="timeline-actors">
           <span>Hjumpik</span><span>Toad Lee</span><span>Waluigi</span><span>The Guard With No Name</span><span>Lady Aurelian</span>
         </div>
         <p class="timeline-summary">
           Over one night the Feyward branch stopped being a plant problem and became a custody dispute. The Lady interviewing Hjumpik over cold tea was unmasked as the manor's plant; a house guard refused his own name and then his post; Chop Bros produced twenty-five feet of corridor; a garlic grenade and a Bob-omb settled a hostage negotiation; and the real Aurelian surfaced inside an Oracle-marked 'OC' Soul Ring in Hjumpik's pocket.
         </p>
         <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:10px;" onclick="event.stopPropagation();">
           <span class="chip" onclick="Router.go('#/article/feyward_chop_bros_soul_ring_and_the_guard_with_no_name')" style="margin:0; font-size:12px; background:#2fae8a; color:#fff; font-weight:700;">📖 Read Hjumpik Feyward Session →</span>
           <span class="chip" onclick="Router.go('#/article/hjumpik')" style="margin:0; font-size:12px; background:var(--panel2); border-color:#2fae8a;">🐸 Hjumpik Dossier →</span>
           <span class="chip" onclick="Router.go('#/article/oc_soul_ring')" style="margin:0; font-size:12px; background:var(--panel2); border-color:var(--accent2);">💍 OC Soul Ring →</span>
           <span class="chip" onclick="Router.go('#/article/toad_lee')" style="margin:0; font-size:12px; background:var(--panel2); border-color:#e0b400;">🧄 Garlic Grenade Tactics →</span>
         </div>
       </div>

       <!-- Event 5: original Imp Ambush -->
       <div class="campaign-timeline-item" onclick="Router.go('#/article/the_imp_ambush_of_harvestide_29')" style="cursor:pointer;">
         <div class="timeline-date-chip">Harvestide 29, 1040 BF · Duration: ~1.5 hours · Shadow Estate Siege</div>
         <h3 class="timeline-event-title">The Imp Ambush of Harvestide 29</h3>
         <div class="timeline-actors">
           <span>Markop</span><span>Remi Akamatsu</span><span>Archie Miser</span><span>Dan</span><span>Tymnas</span>
         </div>
         <p class="timeline-summary">
           Siege at the Shadow Estate: Imps attack seeking the Archivist's book. Markop rallies his team, Remi gets poisoned in the bathroom, Dan reveals his special eye, and the cottage undergoes a frantic defense.
         </p>
         <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:10px;" onclick="event.stopPropagation();">
           <span class="chip" onclick="Router.go('#/article/the_imp_ambush_of_harvestide_29')" style="margin:0; font-size:12px; background:var(--panel);">📖 Read Full Audit Report →</span>
           <span class="chip" onclick="Router.go('#/article/tymnas_cottage_and_hedge_maze')" style="margin:0; font-size:12px; background:var(--panel2); border-color:var(--accent);">🏡 Tymnas's Cottage &amp; Hedge Maze →</span>
           <span class="chip" onclick="Router.go('#/mbattle/battle_imp_ambush_shadow_estate')" style="margin:0; font-size:12px; background:var(--panel2); border-color:var(--accent2);">⚔️ Battle Record: Imp Ambush →</span>
         </div>
       </div>

       <!-- Event 8 -->
       <div class="campaign-timeline-item" onclick="Router.go('#/article/the_midnight_audit_of_harvestide_28')" style="cursor:pointer;">
         <div class="timeline-date-chip">Harvestide 28, 1040 BF · Duration: ~1 hour · Manor Investigation</div>
         <h3 class="timeline-event-title">The Midnight Audit of Harvestide 28</h3>
         <div class="timeline-actors">
           <span>Remi Akamatsu</span><span>Disaster Inc.</span><span>Onyx Hand</span>
         </div>
         <p class="timeline-summary">
           Shadow Estate intrusions: Remi Akamatsu de-escalates intruders, reclaims her firearm, tests a black crystal lie detector, and discovers a spy hidden in a closet.
         </p>
         <span class="chip" style="margin:0; font-size:12px; background:var(--panel);">📖 Read Midnight Audit File →</span>
       </div>

       <!-- Event 6 -->
       <div class="campaign-timeline-item" onclick="Router.go('#/article/bones_alpine_bank_eavesdropping_and_inn_refuge')" style="cursor:pointer;">
         <div class="timeline-date-chip">Harvestide, 1040 BF · Duration: ~1.5 hours · Arunedeal Evacuation</div>
         <h3 class="timeline-event-title">Flight from the Alpine Inn &amp; The Legion Wall Checkpoint</h3>
         <div class="timeline-actors">
           <span>Bones</span><span>Naaook (Goblin)</span><span>Elbow (Fey Toad)</span>
         </div>
         <p class="timeline-summary">
           Bones steals an iron breastplate from a frozen cart, buys a winter coat from Naaook for 75 gold, and teams up with a battle-worn toad named Elbow who wields fey magic to escape a colossal Legion checkpoint.
         </p>
         <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:10px;" onclick="event.stopPropagation();">
           <span class="chip" onclick="Router.go('#/article/bones_alpine_bank_eavesdropping_and_inn_refuge')" style="margin:0; font-size:12px; background:var(--panel);">📖 Read Flight from the Alpine Inn →</span>
           <span class="chip" onclick="Router.go('#/article/alpine_mountain_inn')" style="margin:0; font-size:12px; background:var(--panel2); border-color:var(--accent);">🏰 Alpine Mountain Inn →</span>
           <span class="chip" onclick="Router.go('#/article/arunedeal_goblin_camp')" style="margin:0; font-size:12px; background:var(--panel2); border-color:var(--green);">⛺ Arunedeal Goblin Camp →</span>
         </div>
       </div>

       <!-- Event 7 -->
       <div class="campaign-timeline-item" onclick="Router.go('#/article/feyward_amnesia_vines_morel_steely')" style="cursor:pointer;">
         <div class="timeline-date-chip">Harvestide 25, 1040 BF · Duration: ~1 hour · Feyward Expedition</div>
         <h3 class="timeline-event-title">Toad Lee’s Missing Time &amp; Morel’s Key</h3>
         <div class="timeline-actors">
           <span>Toad Lee</span><span>Mystic Morel</span><span>Steely</span>
         </div>
         <p class="timeline-summary">
           Feyward memory wipes, amnesia vine hazards, Mystic Morel’s brass key, Steely’s warning, and new party XP allocations across the overgrown realm.
         </p>
         <span class="chip" style="margin:0; font-size:12px; background:var(--panel);">📖 Read Feyward Mystery File →</span>
       </div>

       <!-- Event 9: Canonical Retrospective -->
       <div class="campaign-timeline-item" onclick="Router.go('#/article/the_embassy_ambush_and_luigi_interrogation')" style="cursor:pointer; border-left:4px solid #8a4bff; background:linear-gradient(135deg,rgba(138,75,255,.08),var(--panel2));">
         <div class="timeline-date-chip" style="color:var(--link);">Harvestide 18, 1035 BF · Duration: ~2 hours · Canonical Eyewitness Audit</div>
         <h3 class="timeline-event-title">The Mage's Embassy Ambush &amp; The Luigi Interrogation (1035 BF)</h3>
         <div class="timeline-actors">
           <span>Waluigi (Auditor)</span><span>Wario</span><span>Luigi</span><span>Dave the Greeter</span><span>Jimmy T</span><span>Mona</span><span>Ashley</span>
         </div>
         <p class="timeline-summary">
           In 1035 BF (during the Mushroom Kingdom Regency era, well after Peach's assassination), Auditor Toad papers reveal Mario's desire to "backwards longjump out of this stupid kingdom." Wario recruits Jimmy, Mona, and Ashley to ambush Luigi at the Mage's Embassy. The raid degenerates into arson, alarms, a banana-peel police chase, and an emotional backseat confession from Luigi confirming Mario vanished on an eastern farm over a year ago.
         </p>
         <div style="display:flex; flex-wrap:wrap; gap:8px; margin-top:10px;" onclick="event.stopPropagation();">
           <span class="chip" onclick="Router.go('#/article/the_embassy_ambush_and_luigi_interrogation')" style="margin:0; font-size:12px; background:var(--accent); color:#fff; font-weight:700;">📖 Read Full Canonical Audit &amp; Ledger →</span>
           <span class="chip" onclick="Router.go('#/article/mages_guild')" style="margin:0; font-size:12px; background:var(--panel2); border-color:var(--accent2);">🔮 Mage's Embassy →</span>
           <span class="chip" onclick="Router.go('#/article/regal_empire')" style="margin:0; font-size:12px; background:var(--panel2); border-color:var(--accent2);">👑 Regal Empire →</span>
         </div>
       </div>
     </div>
   </div>"""

def main():
    with open(INDEX_PATH, 'r', encoding='utf-8') as f:
        text = f.read()

    start_str = '<!-- 4. RECENT CAMPAIGN ADVENTURES & CHRONICLE FEED -->'
    end_str = '<!-- 5. OPERATOR TOOLKIT & COLLAPSIBLE ENCYCLOPEDIA DIRECTORY -->'

    idx1 = text.find(start_str)
    idx2 = text.find(end_str)

    if idx1 == -1 or idx2 == -1:
        print("Error: Could not find timeline feed anchors in index.html")
        return

    new_text = text[:idx1] + timeline_html + "\n\n   " + text[idx2:]

    with open(INDEX_PATH, 'w', encoding='utf-8') as f:
        f.write(new_text)

    print("index.html updated successfully!")

if __name__ == '__main__':
    main()
