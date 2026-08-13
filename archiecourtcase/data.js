/**
 * caseData.js
 * Consolidated data structure for Case File 4739.
 * Includes page content, evidence details, and configurations.
 */

export const caseData = {
    pageContent: {
        "case-details-content": `
            <p><strong>Alias Known As:</strong> "The Three-Eyed Bandit" (<span class="rollable-text" data-roll-id="alias_origin" data-roll-dc="5" data-roll-success="[Insight: Alias stems from a botched heist involving a cursed artifact that temporarily granted precognitive flashes.]" data-roll-failure="[Insight: Origin likely just underworld bravado.]">Note: Origin of alias unclear</span>, potentially linked to past activities or unique arcane signature.)</p>
            <p><strong>Incident Location:</strong> Swiftsoul Keep Air Blimp Station, Primary Concourse & Platform 3 Vicinity; Secondary Location: Veridian Grove Druid Village Outskirts; Tertiary Location: Swiftsoul Station Service Corridors & <span class="rollable-text" data-roll-id="cliffside_details" data-roll-dc="5" data-roll-success="[Insight: The cliffside is known for unstable footing and strong updrafts from the valley below.]" data-roll-failure="[Insight: It's a standard rocky outcrop near the station.]">adjacent exterior cliffside near lower levels</span>.</p>
            <p><strong>Date of Incident:</strong> 1040BF, Efferd 26 (Approximately 14:00 hrs Station Time for primary event).</p>
            <p><strong>Date of Arrest:</strong> 1040BF, Efferd 26 (Late Evening, following pursuit culminating on a <span class="rollable-text" data-roll-id="arrest_location_detail" data-roll-dc="4" data-roll-success="[Insight: The arrest occurred on a narrow, wind-swept ledge of the cliff, difficult to access.]" data-roll-failure="[Insight: A standard location on the cliff near station access.]">precarious cliffside ledge adjacent to station service access</span>).</p>
            <p><strong>Defendant Status:</strong> Incarcerated at Swiftsoul Keep Dungeon Complex, pending trial. Medical clearance granted post-injury stabilization.</p>
        `,
        "case-charges-content": `
            <ul>
                <li>Murder by Arcane Means (Fireball Spell), Three Counts: Unidentified Station Workers designated <a href="https://websim.ai/@largewheel6740084/medical-examination-report/" target="_blank" title="View Medical Examination Report">John Doe 1, John Doe 2, Jane Doe 1</a>. Victims suffered catastrophic thermal trauma consistent with direct exposure to high-yield Evocation magic.</li>
                <li>Manslaughter (Negligent Homicide via Magical Endangerment), One Count: Victim identified as Elder Rowan Meadowlight of the Veridian Grove Druid Circle. Death attributed to secondary effects related to Defendant's actions and presence.</li>
                <li>Reckless Endangerment (Public Space): Operation of destructive magic within a populated civilian hub, demonstrating gross negligence and disregard for public safety.</li>
                <li>Destruction of Kingdom Property: Significant structural damage to Swiftsoul Air Blimp Station concourse and collateral damage to docked vessel 'The Swift Quill'.</li>
                <li>Resisting Arrest: Actively evading capture by Kingdom authorities, resulting in prolonged pursuit through <span class="rollable-text" data-roll-id="charges_pursuit_area" data-roll-dc="4" data-roll-success="[Insight: Pursuit primarily occurred in restricted maintenance areas, minimizing public endangerment until the final leap.]" data-roll-failure="[Insight: Any evasion within the station complex constitutes resisting.]">station service corridors and culminating in a desperate jump to an adjacent cliffside</span>.</li>
                <li>Fleeing from Lawful Authority: Attempting to escape jurisdiction following commission of alleged felonies.</li>
                <li><i>(Potential Additional Charge - Pending Investigation):</i> Conspiracy related to interactions preceding the main incident (Ref: Rakka Directive, Pirate Doubloon, Ravencreek Guard Report). Prosecutor Edgeworth may pursue this if links solidify.</li>
            </ul>
            <p><em>(Note: Prosecutor Edgeworth is expected to pursue maximum sentencing on all counts, emphasizing the malicious intent and public endangerment aspects. <span class="rollable-text" data-roll-id="edgeworth_rep" data-roll-dc="4" data-roll-success="[Insight: Edgeworth has a near-perfect conviction rate, especially in high-profile magic cases.]" data-roll-failure="[Insight: His reputation is well-known.]">His reputation precedes him.</span>)</em></p>
        `,
        "summary-content": `
            <p>The defendant, Archie Miser, alias "The Three-Eyed Bandit," stands accused of multiple severe felonies stemming from a devastating explosion at Swiftsoul Air Blimp Station on Efferd 26th, 1040BF. The prosecution, led by Miles Edgeworth, argues Miser intentionally detonated a Fireball spell, causing three deaths and significant property damage, before fleeing and subsequently being linked to the death of Elder Rowan Meadowlight in the Veridian Grove.</p>
            <p>However, Miser's activities immediately preceding the incident paint a more complex picture. Evidence suggests Miser was recently operating under the direction of the enigmatic entity 'Rakka' from a hidden temple, involved in missions alongside known pirates and an unidentified 'horse person'. His travels took him to the mist-shrouded town of Ravencreek, where he reportedly stayed at the notorious vampire-run Veilwood Spa (<span class="rollable-text" data-roll-id="summary_spa_link" data-roll-dc="5" data-roll-success="[Insight: Spa records confirm a 'Mr. Ash' matching Miser's description stayed there, paying with unusual foreign currency.]" data-roll-failure="[Insight: No definitive proof places Miser at the spa.]">Ref: Spa Token</span>). During his stay, Ravencreek suffered a werewolf attack, which was repelled but left the town deeply unsettled (<span class="rollable-text" data-roll-id="summary_werewolf_attack" data-roll-dc="6" data-roll-success="[Insight: Miser was seen arguing with his pirate associates shortly before the attack.]" data-roll-failure="[Insight: Miser's presence during the attack is circumstantial.]">Ref: Ravencreek Guard Report</span>). Miser reportedly returned to Rakka's Temple shortly after this event.</p>
            <p>Significantly, Miser also attended the highly publicized (and suspicious) funeral of the criminal Wario on Efferd 25th. On the day of the explosion, evidence indicates Miser was teleported directly from Rakka's Temple to the vicinity of Swiftsoul Station (<span class="rollable-text" data-roll-id="summary_teleport" data-roll-dc="7" data-roll-success="[Insight: Teleportation residue signature is unique and matches traces found at Rakka's known nexus points.]" data-roll-failure="[Insight: Teleportation is common; link is tenuous.]">Ref: Teleportation Residue</span>), arriving in a panicked state shortly before seeking out the Iron Fists Guild and the subsequent catastrophe. His apprehension occurred after a desperate chase through station service corridors culminating in a jump onto a cliffside ledge, with toxicology confirming he was drugged prior to capture (<span class="rollable-text" data-roll-id="summary_drugging_link" data-roll-dc="5" data-roll-success="[Insight: The timing aligns with potential administration *after* leaving Rakka but *before* reaching Swiftsoul concourse.]" data-roll-failure="[Insight: Drugging could have occurred anytime during his chaotic movements.]">Ref: Defendant's Injuries</span>).</p>
            <p>The defense contends that Miser, already under pressure from debts (<span class="rollable-text" data-roll-id="summary_debt_link" data-roll-dc="4" data-roll-success="[Insight: Debts seem to predate or run concurrently with Rakka's work.]" data-roll-failure="[Insight: Financial pressure standard for low-level operatives.]">Ref: Debt Notice, Eviction Notice</span>) and possibly entangled in dangerous dealings related to Rakka or the pirates, was manipulated, framed, or coerced. The Swiftsoul incident may be connected to these prior activities, the suspicious actions of the Iron Fists Guild, the potential involvement of Wario, or the volatile mix of factional conflict (Vampire/Werewolf) endemic to the Midlands. The seemingly straightforward case presented by the prosecution unravels upon examination of Miser's complex recent history and the numerous anomalies surrounding the explosion and its aftermath.</p>
        `,
        "prosecution-argument-content": `
            <p>Prosecutor Edgeworth's argument hinges on a direct chain of causation and clear evidence placing the defendant at the center of both tragedies. He will emphasize Miser's known proficiency in Evocation magic, specifically referencing historical records (<span class="rollable-text" data-roll-id="prosecution_records" data-roll-dc="6" data-roll-success="[Insight: Records show previous fire magic incidents were accidental discharges during artifact handling, not targeted attacks.]" data-roll-failure="[Insight: Prior records confirm Miser's capability with fire magic.]">likely sealed, requiring defense motion to unseal</span>) that may detail past incidents involving similar spell signatures. The 'Grade D' match from the residue analysis will be presented as 'conclusive within acceptable margins of forensic science', dismissing interference as irrelevant background noise common in magically saturated environments like Swiftsoul Keep.</p>
            <p>Edgeworth will likely portray Miser's recent activities (Rakka, Ravencreek, pirates) as further evidence of his criminal character and desperate nature, dismissing them as unrelated prior bad acts that do not negate his culpability in the Swiftsoul incident. The interaction with Kyle Coinsoul will be framed as Miser arranging the final details of his destructive plan or seeking Guild aid *after* the crime. His flight from the scene, use of service corridors, and jump to the cliffside will be presented as irrefutable evidence of guilt. The subsequent events in the Druid Village will be linked chronologically, suggesting Miser silenced a potential witness (Elara?) or caused Meadowlight's death through reckless magic (<span class="rollable-text" data-roll-id="prosecution_druid_link" data-roll-dc="5" data-roll-success="[Insight: Edgeworth may suggest Miser deliberately targeted the Elder due to prior dealings mentioned in the ledger.]" data-roll-failure="[Insight: The link is circumstantial but chronologically sound for the prosecution.]">a key point of vulnerability for the defense</span>). The injuries sustained during the <span class="rollable-text" data-roll-id="prosecution_jump_framing" data-roll-dc="4" data-roll-success="[Insight: Prosecution might downplay the danger of the jump to suggest Miser was still attempting a viable escape.]" data-roll-failure="[Insight: Jump details will be presented matter-of-factly as the end of the chase.]">reckless jump</span> will be framed as a desperate, failed escape attempt by a guilty man finally cornered. Edgeworth will highlight the human cost – the three lives lost, the desecration of the Druid Grove, the terror inflicted upon the public – painting Miser as a dangerous and callous individual who must be brought to justice to maintain order and deter magical misuse in the already volatile Midlands.</p>
        `,
        "defense-angles-content": `
            <p>Despite the weight of the prosecution's evidence, several critical avenues exist for the defense. These angles focus on introducing reasonable doubt by highlighting inconsistencies, alternative interpretations, and potential third-party culpability:</p>
            <ul>
                <li><strong>Defendant's Circumstances & Coercion:</strong> Miser's recent history reveals a man operating under extreme duress. Entangled with the mysterious Rakka, associating with pirates, potentially witnessing or involved in a werewolf attack in Ravencreek, and facing crushing debt and eviction (<span class="rollable-text" data-roll-id="defense_desperation" data-roll-dc="5" data-roll-success="[Insight: The convergence of Rakka's demands, pirate fallout, and financial ruin created a perfect storm.]" data-roll-failure="[Insight: Prosecution will argue desperation is motive, not mitigation.]">Ref: Rakka Directive, Debt Notice, Eviction Notice</span>). His arrival at Swiftsoul via teleportation immediately before the incident suggests he may not have chosen the time or place. Was he sent there deliberately? Was the 'urgent' meeting with 'Elara' a setup (<span class="rollable-text" data-roll-id="defense_elara_setup" data-roll-dc="6" data-roll-success="[Insight: If 'Elara' is the Healer, how did she know to contact him before the incident?]" data-roll-failure="[Insight: The note could be unrelated coincidence.]">Ref: Note from Elara</span>)? His drugged state during apprehension further supports manipulation.</li>
                <li><strong>Third-Party Framing (Iron Fists & Wario):</strong> The evidence implicating the Iron Fists Guild and potentially Wario remains strong and now intersects with Miser's backstory. Did the Guild exploit Miser's known desperation or his association with Rakka/pirates? Key points: Placed emblem, blimp damage from inside, volatile cargo, Guild communique ('Burn Notice'), suspicious log entries/power spikes, Coinsoul's gambling debt (motive for complicity), Enforcer poster sigil. Wario-linked items (pouch, card, wrench, gear, bird) at both station and druid village suggest his direct or indirect involvement. Perhaps the Swiftsoul operation was Guild/Wario business, and Miser (teleported in?) became the perfect fall guy.</li>
                <li><strong>Magical Anomaly & Misattribution:</strong> The Grade D residue match with high interference remains weak. The complex Druid ward sabotage points to a skilled external actor. The metallic residue, teleportation residue found on Miser, and Fin's report of 'purple sparks' suggest multiple types of magic were active, not just Miser's Fireball. The primary explosion could have been caused by the volatile cargo, a Guild device, or Wario's tech, designed to mimic Miser's signature.</li>
                 <li><strong>The Ravencreek Connection & Alternate Suspects:</strong> The werewolf attack in Ravencreek shortly before Miser left suggests pre-existing conflict. Could enemies made there (werewolves, slighted vampires from the spa, rival pirates) have followed him or sought revenge, potentially causing the Swiftsoul incident or framing him for it? The presence of Vampire and Werewolf evidence near both Swiftsoul and Veridian Grove supports this possibility (<span class="rollable-text" data-roll-id="defense_ravencreek_link" data-roll-dc="7" data-roll-success="[Insight: Rumors connect the Ravencreek werewolf attack to a stolen artifact Rakka had tasked Miser/pirates with retrieving.]" data-roll-failure="[Insight: Linking Ravencreek events directly to Swiftsoul requires stronger evidence.]">Ref: Blood Vial, Silver Shards, Claw Marks, Pelt</span>).</li>
                <li><strong>Procedural Errors & Overlooked Leads:</strong> The pattern of ignored warnings (Magistrate's Memo), convenient malfunctions (camera outage via EMP), off-duty overrides (Stonehand), dismissed evidence (Hemlock & gear), anonymous misdirection, and potentially biased witnesses (Fin) points towards a flawed investigation focused prematurely on Miser, potentially missing or obscuring the true culprits.</li>
            </ul>
        `,
        "timeline-content": `
            <ul class="timeline-list">
                <li><span>~Efferd 10th - 20th (Approx.):</span> Miser operating from Rakka's Temple, undertakes missions possibly involving pirates and retrieval tasks (<span class="rollable-text" data-roll-id="timeline_rakka_mission" data-roll-dc="6" data-roll-success="[Insight: Ledger entries show payments from 'R', mention 'Sea Dogs' transport.]" data-roll-failure="[Insight: Details of Rakka missions unclear.]">Ref: Rakka's Directive, Ledger</span>). Miser receives final debt notice from Sea Dogs (Ref: item-miser-debt-notice). King's Tax Hike decreed (Ref: item-kings-decree-tax-hike).</li>
                <li><span>~Efferd 21st - 24th (Approx.):</span> Miser travels to Ravencreek with associates (pirates, horse person?). Stays at Veilwood Spa (<span class="rollable-text" data-roll-id="timeline_spa_stay" data-roll-dc="5" data-roll-success="[Insight: Spa register confirms 'Mr. Ash' checked in Eff 21, out Eff 24.]" data-roll-failure="[Insight: Miser's presence in Ravencreek confirmed by witnesses, spa stay less certain.]">Ref: Spa Token, Pirate Doubloon</span>). Receives eviction notice (Ref: item-miser-landlord-eviction).</li>
                <li><span>~Efferd 23rd/24th (Approx. Night):</span> Werewolf attack occurs in Ravencreek, repelled by town guard/vampires? Miser and associates present in town (<span class="rollable-text" data-roll-id="timeline_werewolf_attack" data-roll-dc="6" data-roll-success="[Insight: Guard report notes Miser's group seen near the breach point before attack.]" data-roll-failure="[Insight: Miser's direct involvement in attack unconfirmed.]">Ref: Ravencreek Guard Report</span>).</li>
                <li><span>Efferd 24th/25th (Approx.):</span> Miser departs Ravencreek, returns to Rakka's Temple.</li>
                <li><span>Efferd 25th, Midday:</span> Miser attends Wario's funeral in Swiftsoul Lower District (<span class="rollable-text" data-roll-id="timeline_funeral_miser_attend" data-roll-dc="5" data-roll-success="[Insight: Informant confirms Miser looked nervous, avoided contact.]" data-roll-failure="[Insight: Attendance confirmed, demeanor unremarkable.]">Observed lurking</span>).</li>
                <li><span>Efferd 26th, Morning (~10:00):</span> Minor power spikes detected targeting Platform 3 camera conduit (Ref: item-station-power-log).</li>
                <li><span>Efferd 26th, ~11:00 - 12:00 (Est.):</span> Miser allegedly teleported from Rakka's Temple to Swiftsoul Station vicinity (<span class="rollable-text" data-roll-id="timeline_teleport_time" data-roll-dc="7" data-roll-success="[Insight: Residue half-life suggests teleportation occurred 1-2 hours before his first sighting at station.]" data-roll-failure="[Insight: Precise teleport timing unknown.]">Ref: Teleportation Residue</span>). Arrives panicked.</li>
                <li><span>Efferd 26th, ~13:30:</span> Miser interacts with Iron Fists Guild member Kyle Coinsoul near liaison office, seeking work (<span class="rollable-text" data-roll-id="timeline_miser_plea2" data-roll-dc="4" data-roll-success="[Insight: Overheard asking about 'urgent delivery payout'.]" data-roll-failure="[Insight: Standard interaction confirmed.]">Ref: Testimony</span>). Coinsoul uses override key near Platform 3 shortly after.</li>
                <li><span>Efferd 26th, 13:28:</span> Security camera feed for Platform 3 access corridor (CAM-P3A) goes offline (preceded by power spikes).</li>
                <li><span>Efferd 26th, ~13:40:</span> Miser observed near station walls by Guard Stonehand ('agitated').</li>
                <li><span>Efferd 26th, ~13:45:</span> Station log manually overridden by Sgt. Stonehand (off-duty) authorizing Iron Fists 'Priority Cargo Inspection' on 'The Swift Quill' at Platform 3.</li>
                <li><span>Efferd 26th, ~14:00:</span> Major explosion near Station concourse/Platform 3. Three fatalities. Relevant evidence recovered (Emblem, Pouch, Card, Wrench). Blimp damaged internally/externally.</li>
                <li><span>Efferd 26th, ~14:01:</span> Miser flees towards service corridors (Ref: Testimony). Crushed Clockwork Bird, Torn Pelt found later on route.</li>
                <li><span>Efferd 26th, ~14:30:</span> Anonymous tip received at Guard Post blaming 'Red Hands'.</li>
                <li><span>Efferd 26th, 14:15:</span> Platform 3 camera feed (CAM-P3A) restored.</li>
                <li><span>Efferd 26th, ~16:00-17:00:</span> Miser enters Veridian Grove outskirts (following directions in 'Elara' note?). Ward previously sabotaged.</li>
                <li><span>Efferd 26th, ~17:30:</span> Elder Rowan Meadowlight found deceased. Clockwork gear, chilled silver shards found nearby.</li>
                <li><span>Efferd 26th, ~17:45:</span> 'Muffled pop' heard near scene (Dispel Magic?).</li>
                <li><span>Efferd 26th, Late Evening:</span> Miser reappears in Swiftsoul service corridors.</li>
                <li><span>Efferd 26th, ~22:00:</span> Miser spotted by patrol near service staircase. Pursuit ensues. Alchemical kit found near stairs.</li>
                <li><span>Efferd 26th, ~22:30:</span> Miser jumps to cliffside ledge, apprehended.</li>
                <li><span>Efferd 27th, Morning:</span> Miser charged. Toxicology confirms prior drugging.</li>
            </ul>
        `,
        "lore-context-content": `
             <p><strong>The Midlands & Swiftsoul Keep:</strong> A fractured realm barely held together under the iron will of its enigmatic King, the Midlands is defined by conflict. Towering castles loom over misty valleys, but the true power struggles unfold in the shadows between ancient Vampire covens (like Fairth's Retreat) and territorial Werewolf packs (such as the Frostclaws). Swiftsoul Keep, built into the mountainside, serves as a vital, yet vulnerable, nexus for trade and travel, making it a prime location for intrigue and illicit activities by groups like the Iron Fists mercenary guild and smugglers like the Sea Dogs. The recent destruction of Edgeshade by enraged dragons, provoked by Wario and Waluigi, has heightened tensions, increased security theater (though its effectiveness is questionable), and created opportunities for chaos.</p>
             <p><strong>Ravencreek & the Veilwood Spa:</strong> A key town nestled in the Lockeweald forest, Ravencreek embodies the Midlands' uneasy truce. By day, it's a seemingly normal trade hub, but its most prominent feature is the Veilwood Spa, an opulent establishment secretly run by vampires from Fairth's Retreat. Offering luxurious rejuvenation, the spa attracts clientele seeking indulgence but risks entanglement with its undead proprietors. The town exists in a state of perpetual tension, highlighted by recent werewolf attacks (<span class="rollable-text" data-roll-id="lore_ravencreek_attack" data-roll-dc="5" data-roll-success="[Insight: Attack targeted specific merchant warehouses, suggesting werewolves sought something specific, not random violence.]" data-roll-failure="[Insight: Attack details match standard werewolf raids.]">Ref: Ravencreek Guard Report</span>), making it a microcosm of the larger Vampire-Werewolf conflict plaguing the region. Miser's recent stay there places him amidst these volatile dynamics.</p>
            <p><strong>Rakka's Temple & The Enigmatic Employer:</strong> Deep within the enchanted woods lies the hidden temple of Rakka, a figure shrouded in magical secrecy. The temple itself is ancient, magically protected, and avoids outside contact. Rakka (identity and nature unknown - sorceress? spirit? fey?) employs agents for tasks requiring discretion and specific skills, often involving retrieval of artifacts or navigating dangerous territories. Miser's association with Rakka (<span class="rollable-text" data-roll-id="lore_rakka_link" data-roll-dc="6" data-roll-success="[Insight: Underworld whispers suggest Rakka deals in forbidden knowledge and powerful, unstable magic.]" data-roll-failure="[Insight: Rakka is a known information broker, nothing more.]">Ref: Rakka's Directive, Ledger</span>) suggests he was involved in potentially dangerous, high-stakes work beyond simple mercenary jobs, possibly making him enemies or privy to sensitive information. His teleportation from the temple directly to Swiftsoul is a key anomalous event requiring explanation.</p>
            <p><strong>Wario's 'Death' & Underworld Rumblings:</strong> The officially declared death and subsequent <span class="rollable-text" data-roll-id="lore_funeral_details" data-roll-dc="6" data-roll-success="[Insight: Rumors claim the 'funeral' was cover for a high-stakes underworld negotiation between the Iron Fists and a Vampire delegation from Fairth's Retreat.]" data-roll-failure="[Insight: The funeral, while suspicious, yielded no concrete intelligence.]">funeral of Wario on Efferd 25th</span> is viewed with deep suspicion in underworld circles. Wario's reputation for audacious schemes and improbable survivals makes his demise highly questionable. The funeral itself was a bizarre spectacle: heavily guarded by Iron Fists, attended by a mix of underworld figures and bewildered onlookers, and featuring <span class="rollable-text" data-roll-id="lore_wario_automata" data-roll-dc="7" data-roll-success="[Insight: Recent scrying reports indicate a surge in chaotic magic near Swiftsoul Keep, potentially linked to an artifact disturbance.]" data-roll-failure="[Insight: Toad-God activity remains localized and unlikely to be relevant here.]">two clockwork automata resembling Wario</span> mingling with the crowd. <span class="rollable-text" data-roll-id="lore_funeral_casket" data-roll-dc="7" data-roll-success="[Insight: An informant confirms the casket contained weighted sacks, not a body. Wario was reportedly seen gambling in a Dockside den *during* the service.]" data-roll-failure="[Insight: Security was tight; no reliable reports contradict the official narrative.]">The closed casket</span> fueled rampant speculation. The timing, just one day before the Swiftsoul incident, coupled with references in the Guild communique ('Wario's folly created opportunity'), Miser's presence at the funeral, his ledger entry ('W - Emergency Extraction Fund'), the scorched playing card, the clockwork gear, the clockwork bird, and the greasy wrench, strongly suggests Wario is not only alive but potentially involved, either as an orchestrator, a target, or a complication in the Guild's operation involving the volatile cargo. The freshly stamped 'DECEASED' poster found near the station serves as a potential piece of misdirection or a coded signal.</p>
            <p><strong>The Fighter's Guild (Iron Fists Chapter):</strong> While ostensibly a legitimate organization, the Swiftsoul Chapter of the Iron Fists operates with notorious autonomy in the Midlands. Intel File #4740-VW details their deep involvement in mercenary work, often blurring the lines between security provision and illicit activities. They are known to provide 'logistical support' for sensitive cargo, engage in 'asset recovery', and act as hired muscle. The chapter is led by the formidable Commander 'G', a ruthless strategist known for efficiency and a network of contacts (<span class="rollable-text" data-roll-id="lore_guild_leader_g" data-roll-dc="6" data-roll-success="[Insight: 'G' has ties to both Kingdom officials and major underworld figures, playing all sides.]" data-roll-failure="[Insight: 'G' maintains a low public profile, focusing on results.]">her influence is far-reaching</span>). However, recent Guild actions have become increasingly unpredictable, attributed by insiders to the influence of her daughter, 'X.O.' (as seen in intercepted note). X.O. exhibits extreme Kamidere tendencies - a profound god complex, narcissistic entitlement, and a penchant for theatrical, often cruel, pronouncements (<span class="rollable-text" data-roll-id="lore_guild_daughter_xo" data-roll-dc="7" data-roll-success="[Insight: X.O. reportedly demanded the 'Burn Notice' protocol for the Swiftsoul incident purely for dramatic effect, overruling more pragmatic options.]" data-roll-failure="[Insight: Daughter's influence is rumored but difficult to confirm.]">viewing Guild operations as mere stage plays for her amusement</span>). While 'G' likely maintains ultimate control (unless her travel logs are fake), X.O.'s volatile personality and demands appear to be injecting chaos into Guild decision-making, potentially explaining the messy Swiftsoul operation and the use of Miser as a scapegoat. The documented Guild presence, control over Platform 3 (despite Magistrate warnings), the specific emblem, the communique (potentially co-signed or influenced by X.O. via 'G'), the power log spikes, the presence of Enforcer insignia, and the clockwork gear place them squarely at the center of suspicious activity.</p>
             <p><strong>Regional Conflicts & Factions:</strong> The Midlands is a powder keg of factional tension. The ancient war between Vampires (Fairth's Retreat) and Werewolves (Frostclaws) continues unabated, spilling into areas like the Salt-Lick Marshes, Ravencreek, and potentially Dragon Mountain itself (Ref: Vampire Complaint, Werewolf Scent Marker, Torn Pelt, Chilled Silver Shards, Ravencreek Report). The King maintains control over human settlements and the Regal Knights Guild attempts to enforce order, but often seems overwhelmed or slow to react to non-human conflicts (Ref: Knight Standard, Magistrate Memo). Other Guilds (Archers, Wizards, Thieves) pursue their own agendas, sometimes clashing with each other or the Iron Fists (Ref: Archer Fletching, Wizard Patch, Thieves' Cant Messages). Smugglers (Sea Dogs) and strange cults (Toad Cult) operate in the fringes. Even external powers like The Empire and Equestria show occasional, unexplained interest in the region (Ref: Imperial Waterskin, Equestrian Bridle). This backdrop of constant, low-level warfare and competing interests creates a chaotic environment where incidents like the Swiftsoul explosion can easily be misattributed or used as cover for other clandestine actions.</p>
             <p><strong>Midlands Constabulary & Constable Hemlock:</strong> The regional constabulary, particularly in outlying posts like the one near Veridian Grove, often operates with limited resources and under pressure to resolve cases quickly. Constable Tiberius Hemlock, the reporting officer for the Druid Village incident (Ref: Item E-07), is known for being meticulous in his initial observations but also pragmatic, sometimes dismissing anomalies that don't fit the most obvious narrative (<span class="rollable-text" data-roll-id="hemlock_rep" data-roll-dc="5" data-roll-success="[Insight: Hemlock has previously closed cases focusing on the fleeing suspect, missing subtler evidence of third-party involvement.]" data-roll-failure="[Insight: Hemlock is considered a competent, by-the-book officer.]">as potentially seen with the dismissed clockwork gear, Ref: item-clockwork-gear</span>). His focus on Miser as a known fugitive likely colored his interpretation of the scene, making his initial report valuable for its details but potentially flawed in its conclusions.</p>
            <p><em>(Defense Note: Leverage the regional chaos, Wario's uncertain status, Miser's complex recent history (Rakka, pirates, Ravencreek, debts), and the Guild's documented activities under Commander 'G'/'X.O.' to build the narrative of Miser being a desperate pawn caught in a larger, dangerous game. Emphasize his likely forced teleportation to Swiftsoul and drugged state. The power log spikes, anonymous tip, ignored Magistrate warnings, and overlooked physical evidence (gear, card, garlic print, bird, silver shards) support tampering/framing. The presence of Vampire/Werewolf/other factional evidence near key locations adds further layers of reasonable doubt. The pre-arranged meeting note provides an alternative reason for Miser's presence near Veridian Grove.)</em></p>
        `,
         "additional-lore-kamidere": `
            <div class="lore-box">
                <h5>The Iron Fists Daughter 'X.O.' (Kamidere Profile)</h5>
                 <p>Further intel paints a disturbing picture of 'X.O.', Commander G's daughter. While G is pragmatic, X.O. operates entirely from a position of perceived divinity. Sources describe her demanding elaborate displays of loyalty (<span class="rollable-text" data-roll-id="lore_xo_loyalty" data-roll-dc="6" data-roll-success="[Insight: One ritual involves subordinates reciting poetry praising her 'celestial beauty' before receiving orders.]" data-roll-failure="[Insight: Displays of loyalty are common in hierarchical organizations.]">often bordering on worship</span>), reacting with extreme prejudice to perceived slights, and treating missions as personal entertainment. Her fascination with Wario, mentioned in the intercepted note, seems less romantic and more like a cat playing with a particularly amusing mouse – she enjoys the chaos he represents. </p>
                <p>Her influence over her mother appears significant, possibly through manipulation or G's own blind spot. It's plausible X.O. saw the Swiftsoul situation as an opportunity for grand drama, pushing for extreme measures like the 'Burn Notice' and the overt framing of Miser (<span class="rollable-text" data-roll-id="lore_xo_framing" data-roll-dc="7" data-roll-success="[Insight: Rumor: X.O. specifically chose Miser as the scapegoat because she disliked his 'shifty eyes'.]" data-roll-failure="[Insight: Her direct involvement in framing Miser is speculative.]">perhaps finding his desperation pathetic and therefore amusing</span>). The theatricality of the melted emblem placement and the potential use of tracking glyphs aligns with her reported personality. Exploiting this internal Guild dynamic could be crucial for the defense.</p>
            </div>
        `,
         "additional-lore-cliffs": `
             <div class="lore-box">
                <h5>Swiftsoul Keep's Mountain Integration & Cliffside Ledges</h5>
                <p>Unlike typical fortress designs, Swiftsoul's unique integration with the mountain creates numerous structural vulnerabilities and unusual access points. The service levels follow the natural contours of the cliff face, with emergency exits opening directly onto sheer drops (<span class="rollable-text" data-roll-id="lore_cliff_exits" data-roll-dc="5" data-roll-success="[Insight: Station records show at least three fatal accidents involving personnel near these exits in the last decade.]" data-roll-failure="[Insight: Safety protocols are generally strict regarding these exits.]">a known hazard</span>). This design choice was made to allow emergency evacuation via enchanted descent gear or airship rescue during catastrophic events.</p>
                 <p>The staircase from which Miser made his desperate leap is documented in architectural plans as "Emergency Exit Stair SE-4", intended to provide access to a narrow exterior maintenance ledge. This ledge allows workers to service the exterior ward-stones that protect the station from harsh mountain winds and potential magical attacks (<span class="rollable-text" data-roll-id="lore_cliff_wards" data-roll-dc="6" data-roll-success="[Insight: The ward-stones on this ledge are known to interfere with scrying spells, making it a potential blind spot.]" data-roll-failure="[Insight: Ward-stones require regular maintenance.]">requiring regular, precarious upkeep</span>).</p>
                <p>These exterior ledges were never designed for foot traffic or escapees – the narrow, wind-swept paths offer no true exit route from the mountain, only perilous traversal between maintenance access points or sheer drops. Guards are trained to handle pursuits in these areas with extreme caution due to the high fatality risk from falls. Miser's decision to jump there speaks volumes about his state of mind (<span class="rollable-text" data-roll-id="lore_cliff_jump_motive" data-roll-dc="4" data-roll-success="[Insight: Likely influenced by the Nightshade Bloom, he may have misjudged the distance or believed it was the only way out.]" data-roll-failure="[Insight: A desperate act by a cornered fugitive.]">likely panic or drug-induced delusion</span>).</p>
            </div>
         `
    },
    evidence: {
        // --- Original Core Evidence Items ---
        'item-testimony': {
            title: "Eyewitness Testimony Compilation",
            report: "Prosecution Report Summary (Lead Investigator E. Skye): Witness interviews establish Defendant Miser's presence at Swiftsoul Station proximal to the incident time. Guard Borin Stonehand (Station Security Roster #7B) positively identified Miser loitering near the <span class=\"rollable-text\" data-roll-id=\"stonehand_location\" data-roll-dc=\"4\" data-roll-success=\"[Insight: Stonehand was positioned near the auxiliary maintenance access, not the main corridor entrance.]\" data-roll-failure=\"[Insight: Standard patrol route confirmed.]\">Platform 3 access corridor wall</span> approximately 15 minutes prior to the explosion, describing him as 'visibly agitated, pacing'. Merchant Guildsman Rufus Quill reported observing Miser fleeing the main concourse *immediately* following the blast, heading towards the Upper District <span class=\"rollable-text\" data-roll-id=\"miser_flee_direction\" data-roll-dc=\"4\" data-roll-success=\"[Insight: Quill noted Miser ducked into a rarely used service corridor access, not the main public exit.]\" data-roll-failure=\"[Insight: Upper District exit is a common escape route.]\">service corridor access</span>. Silas Quickfoot (Fighter's Guild Bursar, Iron Fists Chapter, Employee ID #IF448) confirms a brief interaction with Miser near the Guild liaison office approx. 30 minutes pre-incident, involving a <span class=\"rollable-text\" data-roll-id=\"quickfoot_exchange\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Quickfoot nervously avoided eye contact when describing the 'routine' nature of the exchange.]\" data-roll-failure=\"[Insight: Transaction details seem standard for Guild fees.]\">standard coin pouch exchange</span> ('routine guild service fee'). Druid acolyte Faelan Whisperwind (Veridian Grove Registry) testified seeing Miser enter the Druid Village outskirts shortly before Elder Meadowlight was discovered deceased. Skye notes Miser’s demeanor during apprehension on the <span class=\"rollable-text\" data-roll-id=\"apprehension_demeanor_loc\" data-roll-dc=\"3\" data-roll-success=\"[Insight: Miser seemed disoriented and possibly hypothermic from exposure on the cliff.]\" data-roll-failure=\"[Insight: Behavior consistent with a cornered fugitive.]\">cliffside ledge</span> was 'erratic and resistant', consistent with guilt and flight.",
            hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Contradictions & Nuances]: Re-interview with Silas Quickfoot under defense retainer clarifies Miser seemed <span class=\"rollable-text\" data-roll-id=\"quickfoot_miser_state\" data-roll-dc=\"4\" data-roll-success=\"[Insight: Quickfoot added Miser mumbled about 'package compromised' and 'extraction needed'.]\" data-roll-failure=\"[Insight: Quickfoot reiterated 'panicked' but offered no new specifics.]\">'panicked and muttering about a delivery'</span> *before* the blast, inconsistent with simple agitation. Quickfoot also recalled the Guild member Miser met seemed 'tense, expectant', frequently glancing towards the Platform 3 docking bay, not just engaging in a 'routine' transaction. Guard Stonehand's supplemental report (obtained via Defense request) mentions Coinsoul using an 'unauthorized access key' near Platform 3 shortly after Miser left. Faelan Whisperwind's full statement includes mention of a *secondary* magical event (<span class=\"rollable-text\" data-roll-id=\"faelan_secondary_event\" data-roll-dc=\"6\" data-roll-success=\"[Insight: Faelan recalled a faint smell of ozone and cold metal accompanying the sound.]\" data-roll-failure=\"[Insight: Faelan could not pinpoint the exact source or nature of the sound.]\">'a low hum, like stressed metal, then a soft pop, utterly unlike the main explosion'</span>) near the Elder's position *after* the main blast, initially disregarded by Skye as 'ambient echoes' but potentially indicative of Abjuration ward failure or targeted Transmutation effect.",
            dc: 4,
            hasFullReport: true,
            documentStyle: 'document-style-official',
            fullReportContent: `
                <h4>Swiftsoul Keep Security - Incident Report Addendum</h4>
                <p><strong>Date:</strong> Efferd 26, 1040BF</p>
                <p><strong>Reporting Officer:</strong> Lead Investigator E. Skye</p>
                <hr>
                <h5>Witness Statement Summary: Guard Borin Stonehand (ID #7B)</h5>
                <p>Subject Stonehand observed the individual identified as A. Miser loitering near the <span class=\"rollable-text\" data-roll-id=\"full_stonehand_location\" data-roll-dc=\"4\" data-roll-success=\"[Insight: Stonehand noted Miser kept glancing down the corridor towards Platform 3's restricted access hatch.]" data-roll-failure="[Insight: Standard loitering observation.]">Platform 3 access corridor wall</span> at approx. 13:45 hrs. Subject described Miser as 'visibly agitated, pacing, muttering'. <span class=\"rollable-text\" data-roll-id=\"full_stonehand_muttering\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Stonehand thought he heard Miser say '...package late... G won't be pleased...'.]" data-roll-failure="[Insight: Muttering was indistinct.]">Muttering was indistinct</span>. No direct interaction occurred.</p>
                <h5>Witness Statement Summary: Merchant Rufus Quill</h5>
                <p>Subject Quill was exiting the main concourse towards the Upper District shops shortly after 14:00 hrs when the explosion occurred. Amidst the chaos, Quill observed Miser running from the direction of Platform 3, ducking into the <span class=\"rollable-text\" data-roll-id=\"full_quill_corridor\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Quill is certain it was the maintenance corridor T-7B, known for leading towards the lower service levels and exterior vents.]" data-roll-failure="[Insight: A standard service access point used by many.]">seldom-used Service Corridor 7B access hatch</span>.</p>
                <h5>Witness Statement Summary: Silas Quickfoot (Iron Fists Bursar)</h5>
                 <p>Subject Quickfoot confirms Miser approached the Guild Liaison kiosk around 13:30 hrs seeking Guild Operative Kyle Coinsoul. Transaction involved a 'standard guild service fee' payment *from* Miser (<span class="rollable-text" data-roll-id=\"full_quickfoot_payment_direction\" data-roll-dc=\"5\" data-roll-success=\"[Insight: This confirms Miser PAID the Guild, likely a quest retainer or information fee, not received payment.]" data-roll-failure="[Insight: Payment direction could be misremembered.]">Ref Ledger Item</span>). Quickfoot initially described the interaction as 'routine' but under further questioning (Defense follow-up) conceded Miser appeared <span class=\"rollable-text\" data-roll-id=\"full_quickfoot_panic\" data-roll-dc=\"4\" data-roll-success=\"[Insight: Quickfoot recalled Miser asking repeatedly 'Is Kyle Coinsoul here? I need work *now*!'.]" data-roll-failure="[Insight: Quickfoot maintains it was just general agitation.]">'panicked' and desperate for work</span>. Quickfoot also noted Coinsoul was seen near Platform 3 access controls shortly after Miser departed, using what appeared to be an <span class=\"rollable-text\" data-roll-id=\"full_coinsoul_key\" data-roll-dc=\"6\" data-roll-success=\"[Insight: Quickfoot recognized the key as a master override, usually held only by senior Guild officers or station command.]" data-roll-failure="[Insight: Key usage seemed authorized at the time.]">override key</span>.</p>
                <h5>Witness Statement Summary: Faelan Whisperwind (Druid Acolyte)</h5>
                 <p>Subject Faelan was tending the Grove Shrine when they observed Miser entering the village perimeter via the south-eastern path (<span class=\"rollable-text\" data-roll-id=\"full_faelan_entry\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Faelan noted Miser moved erratically, stumbling slightly, and seemed unaware of the nearby wardstones.]" data-roll-failure="[Insight: Entry point confirmed.]">approx. 16:00 hrs</span>). Later, near Elder Meadowlight's position, Faelan heard a secondary event distinct from the station explosion: '<span class=\"rollable-text\" data-roll-id=\"full_faelan_sound\" data-roll-dc=\"6\" data-roll-success=\"[Insight: Faelan compared the 'pop' sound to a breaking wardstone focus, accompanied by a smell of ozone.]" data-roll-failure="[Insight: Sound description remains vague.]">a low hum, like stressed metal, then a soft pop</span>' (approx. 17:45 hrs).</p>
                <hr>
                <p><em>Further witness interviews scheduled. End Report Addendum.</em></p>
            `
        },
        'item-residue': {
            title: "Magical Residue Analysis",
            report: "Skye Forensic Report (Lab Ref #SFK-MR-001): Standard arcane spectrometry confirms significant Evocation (Fire subtype) residue concentrated near the blast epicenter on the station concourse. Energy signature analysis yields a <span class=\"rollable-text\" data-roll-id=\"residue_match_grade\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Lab notes indicate the initial match was Grade F, manually upgraded by Skye citing 'expected variance'.]\" data-roll-failure=\"[Insight: Grade D is within standard forensic variability for field samples.]\">Class-D ('Loose Match - Possible Contamination')</span> correlation to Defendant Miser's registered arcane profile (Midlands Registry #AM773). Similar, albeit significantly fainter (approx. 15% intensity), Evocation (Fire) traces were detected on Elder Meadowlight's outer robe fragments recovered from the Druid Village scene. Non-specific, degraded arcane traces (consistent with generic spellcasting background radiation) were noted along the pathway Miser reportedly took into the Druid Village, deemed 'inconclusive' by Investigator Skye.",
            hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Anomalies Detailed]: Advanced Spectrometric Deconvolution (ASD) requested by Defense reveals presence of *non-standard metallic micro-particulates* (predominantly silver [Ag], trace iron [Fe], minor copper [Cu] - inconsistent with known Midland geology or standard spell components) suspended within the primary residue matrix at *both* the station and the village sites. Skye's 'Grade D' match to Miser carries a documented <span class=\"rollable-text\" data-roll-id=\"residue_uncertainty\" data-roll-dc=\"4\" data-roll-success=\"[Insight: Internal memo shows Skye overruled a junior technician recommending re-sampling due to interference.]\" data-roll-failure=\"[Insight: High interference is common near airship docking pylons.]\">65% uncertainty margin</span> due to 'significant harmonic interference patterns and resonance instability', suggesting signal contamination, atypical casting environment, or a secondary overlapping signature. Micro-analysis of residue near Meadowlight indicates forceful disruption of a complex, interwoven *Abjuration field (Nature subtype)*, consistent with a protective ward being violently *overloaded* by the fire effect, rather than passive exposure.",
            dc: 6,
            hasFullReport: true,
            documentStyle: 'document-style-lab',
            fullReportContent: `
                <div class="lab-report-header">
                    <h4>Kingdom Forensic Arcane Labs - Swiftsoul Annex</h4>
                    <p><strong>Report Ref:</strong> SFK-MR-001 | <strong>Case:</strong> 4739 (Miser) | <strong>Date Processed:</strong> Efferd 27, 1040BF</p>
                    <p><strong>Analyst:</strong> E. Skye (Lead) / T. Bolt (Asst.)</p>
                </div>
                <hr>
                <h5>Sample Summary:</h5>
                <ul>
                    <li><strong>SFK-MR-001-A:</strong> Scraped residue, Station Concourse, Grid C1-A8 (Epicenter Est.)</li>
                    <li><strong>SFK-MR-001-B:</strong> Fabric fragment, Elder Meadowlight Robe, Veridian Grove</li>
                    <li><strong>SFK-MR-001-C:</strong> Soil/Leaf litter scraping, South-East Path, Veridian Grove</li>
                </ul>
                <h5>Analysis Results (Standard Spectrometry):</h5>
                <p><strong>Sample A:</strong> Strong Evocation (Fire Subtype) signature detected. Peak energy correlates with standard Fireball matrix (<span class="rollable-text" data-roll-id="full_residue_fireball" data-roll-dc="5" data-roll-success="[Insight: Spectrum shows secondary peaks inconsistent with pure Fireball, suggesting additives or catalyst.]" data-roll-failure="[Insight: Standard Fireball profile confirmed.]">Profile FB-Std-Mk3</span>). Cross-referenced against Midlands Registry: Candidate Match Found - Miser, Archie (ID #AM773). Confidence: <strong style="color: orange;">GRADE D ('Loose Match')</strong>. Note: Significant harmonic interference detected (<span class="rollable-text" data-roll-id="full_residue_interference" data-roll-dc="6" data-roll-success="[Insight: Interference patterns resemble those generated by active high-energy shielding or unstable elemental matrices.]" data-roll-failure="[Insight: Interference likely due to station infrastructure.]">~65% uncertainty introduced</span>). Anomalous Metallic Traces (Ag, Fe, Cu) noted - possible environmental contamination?</p>
                <p><strong>Sample B:</strong> Weak Evocation (Fire Subtype) signature (~15% intensity vs Sample A). Match to Miser profile: <strong style="color: red;">GRADE F ('Inconclusive - Trace levels only')</strong>. Strong overlay signature of disrupted Abjuration (Nature subtype) detected. <span class="rollable-text" data-roll-id="full_residue_metal_b" data-roll-dc="6" data-roll-success="[Insight: Metallic traces (Ag, Fe, Cu) ALSO present in Sample B, linking village residue to station residue anomaly.]" data-roll-failure="[Insight: Trace metallics could be separate contamination.]">Metallic traces also present.</span></p>
                <p><strong>Sample C:</strong> Degraded, non-specific arcane traces. Multiple faint signatures consistent with ambient background. No conclusive matches.</p>
                <h5>Preliminary Conclusion (E. Skye):</h5>
                <p>Residue at station concourse (A) provides a Class-D match to Defendant Miser, consistent with primary allegation. Fainter traces on victim Meadowlight's robes (B) suggest secondary exposure. Interference levels noted, but within acceptable field parameters. <span class="rollable-text" data-roll-id="full_residue_conclusion" data-roll-dc="7" data-roll-success="[Insight: Asst. Tech Bolt's initials are crossed out next to a recommendation for 'Advanced Deconvolution Scan'. Skye initialed override.]" data-roll-failure="[Insight: Conclusion appears standard based on primary findings.]">Metallic traces likely environmental.</span></p>
                <hr>
                <p><em>Report End. Advanced Analysis pending external request.</em></p>
            `
        },
        'item-robes': { // Note: Title might be better as 'Alchemical Kit' based on content
            title: "Discarded Alchemical Kit",
            report: "Evidence Report (Field Tag #E4739-AK01): Small, heavily damaged field alchemist's kit recovered from <span class=\"rollable-text\" data-roll-id=\"kit_location_new\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Location suggests it was dropped or thrown *just before* the jump from the stairs.]\" data-roll-failure=\"[Insight: Items are often lost near access points during pursuits.]\">the floor near the base of the service staircase</span> from which Defendant Miser leaped to the adjacent cliffside (Grid Ref SWK-SE-S4). Constructed of reinforced leather and brass fittings. Contains various shattered vials, residual powders (preliminary identification: sulfur, refined mercury salts, saltpeter), specialized distillation tubing fragments, and micro-pestle. Appears hastily discarded or dropped during pursuit. No immediate identifying marks linking kit to Defendant beyond recovery proximity. Standard inventory logged by Skye's team.",
            hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Revealing Contents & Context]: Closer examination under controlled lab conditions (funded by Defense retainer) reveals: 1) A fractured vial retaining residue of concentrated *Nightshade Bloom extract* (Paralytic Toxin Class III) - precise chemical match to toxicology findings in Defendant's Medical Report (Cross-Ref: item-fall). 2) Faint traces of a *sulfur-potassium based accelerant* on the kit's outer casing and straps, chemically congruent with accelerants found on *original* burnt robe fragments initially collected at station blast site (Cross-Ref: Prosecution File Exhibit P-04, now superseded). 3) A hidden compartment (false bottom) containing a single *flawless obsidian shard*, microscopically identical in composition and fracture pattern to shards previously reported embedded in robe fragments (Cross-Ref: P-04). 4) <span class=\"rollable-text\" data-roll-id=\"kit_missing\" data-roll-dc=\"6\" data-roll-success=\"[Insight: Impressions suggest missing items include a timer mechanism and a specialized detonator cap.]\" data-roll-failure=\"[Insight: Missing items could be common tools simply lost in the fall/discarding.]\">Empty vial slots and tool impressions</span> suggest several key components are missing. Kit design consistent with specialized sabotage or rapid field brewing, not standard adventuring alchemy. Location near staircase base *before* the jump could support a planting theory.",
            dc: 5,
            hasFullReport: true,
            documentStyle: 'document-style-lab',
            fullReportContent: `
                <div class="lab-report-header">
                    <h4>Independent Forensic Analysis (Commissioned by Defense)</h4>
                    <p><strong>Report Ref:</strong> DFA-AK-001 | <strong>Case:</strong> 4739 (Miser) | <strong>Date Processed:</strong> Efferd 28, 1040BF</p>
                    <p><strong>Analyst:</strong> Dr. Alistair Finch</p>
                </div>
                <hr>
                <h5>Item Examined:</h5>
                <p>Evidence Tag #E4739-AK01: Damaged Field Alchemist's Kit</p>
                <h5>Methodology:</h5>
                <p>Microscopic analysis, Chemical Residue Testing (CRT), Arcane Resonance Imaging (ARI), Structural Integrity Assessment.</p>
                <h5>Findings:</h5>
                <ol>
                    <li><strong>Toxicological Residue:</strong> Vial fragment (labeled Vial Slot 3) contains distinct alkaloid signature matching concentrated *Atropa Belladonna* (Nightshade Bloom) extract, Class III Paralytic/Hallucinogen. Confirmed match (<span class="rollable-text" data-roll-id="full_kit_tox_match" data-roll-dc="4" data-roll-success="[Insight: Finch notes the concentration is unusually high for field use, suggesting weaponization or coercion.]" data-roll-failure="[Insight: Match confirms presence, not intent.]">99.8% confidence</span>) with Defendant Miser's Medical Report toxicology results (Ref: SKI-A4739).</li>
                    <li><strong>Accelerant Traces:</strong> Outer leather casing and strap remnants exhibit trace residues of a Potassium Nitrate / Sulfur compound (<span class="rollable-text" data-roll-id="full_kit_accelerant" data-roll-dc="5" data-roll-success="[Insight: Finch identifies the specific accelerant binder as consistent with Iron Fists' ordnance specs.]" data-roll-failure="[Insight: Common components for crude explosives or signals.]">consistent with rapid-burn accelerants</span>). Chemical profile matches samples from Prosecution Exhibit P-04 (Initial blast site robe fragments).</li>
                    <li><strong>Hidden Compartment:</strong> False bottom (secured by pressure clasp) detected and opened. Contents: One (1) obsidian shard, volcanic origin, flawless. Dimensions: 3.1cm x 0.8cm x 0.2cm. Fracture pattern analysis confirms match (<span class="rollable-text" data-roll-id="full_kit_shard" data-roll-dc="6" data-roll-success="[Insight: Shard exhibits faint magical resonance, possibly used as a focusing component or trigger.]" data-roll-failure="[Insight: Obsidian is common, shard could be unrelated.]">98% confidence</span>) with shards documented in Exhibit P-04. <span class="rollable-text" data-roll-id="full_kit_shard_purpose" data-roll-dc="7" data-roll-success="[Insight: Obsidian of this type is used in alchemical detonation timers.]" data-roll-failure="[Insight: Purpose unclear, could be decorative or incidental.]">Purpose appears non-mundane.</span></li>
                    <li><strong>Missing Components:</strong> Indentations and wear patterns within kit suggest missing items: Cylindrical vial (approx. 5cm x 1.5cm), Set of micro-calipers, Small gear-based timer mechanism (<span class="rollable-text" data-roll-id="full_kit_timer" data-roll-dc="7" data-roll-success="[Insight: Timer impression matches Gnomish 'Tick-Tock Mk II' delay detonator.]" data-roll-failure="[Insight: Standard timing device for alchemy.]">estimated size</span>), Specialized crucible tongs.</li>
                </ol>
                <h5>Conclusion (Dr. Finch):</h5>
                <p>The kit's contents (toxin, accelerant, shard) directly link it to both the Defendant's condition and potentially the blast itself. Missing components (timer?) suggest a purpose beyond standard alchemy, possibly device construction or sabotage. Kit's condition and recovery location <span class="rollable-text" data-roll-id="full_kit_conclusion" data-roll-dc="6" data-roll-success="[Insight: Finch notes impact marks inconsistent with a simple drop, suggesting it might have been thrown or kicked.]" data-roll-failure="[Insight: Damage consistent with being dropped during a pursuit.]">are noteworthy</span>.</p>
                <hr>
                <p><em>Report End. Full chemical breakdown available upon request.</em></p>
            `
        },
        'item-emblem': {
            title: "Melted Silver Emblem ('Iron Fists')",
            report: "Evidence Report (Field Tag #E4739-SE01): Severely heat-damaged solid silver emblem (approx. 4cm diameter) bearing the insignia of the 'Iron Fists' Fighter's Guild chapter recovered from the primary blast zone (Grid Ref SWK-C1-A8). Found <span class=\"rollable-text\" data-roll-id=\"emblem_embed\" data-roll-dc=\"6\" data-roll-success=\"[Insight: The angle of impact suggests it was fired *from* the direction of Platform 3's restricted area.]\" data-roll-failure=\"[Insight: Embedding could be caused by the blast force itself.]\">embedded with significant force</span> in a fractured ferrocrete floor tile near the estimated epicenter. Melting and deformation consistent with exposure to temperatures exceeding 960°C (silver melting point), indicative of proximity to the core thermal effect of the alleged Fireball spell. Identified by Guild Liaison as standard-issue chapter insignia.",
            hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Contextual Clues & Analysis]: Advanced metallurgical analysis (Defense contracted, Lab Ref #DMA-M002) confirms trace presence of *alchemical residue* (elemental sulfur [S], quicksilver amalgam [Hg-Ag]) fused onto the emblem's deformed surface, inconsistent with simple thermal melting. Micro-fractography of the surrounding floor tile indicates the emblem impacted the surface with significant kinetic energy *prior* to being subjected to extreme heat, suggesting deliberate placement or forceful projection rather than incidental deposition during the blast. Intel File #4740-VW (Guild Activities - Cross-Ref requested) confirms the Swiftsoul Keep 'Iron Fists' chapter specializes in <span class=\"rollable-text\" data-roll-id=\"guild_specialties\" data-roll-dc=\"5\" data-roll-success=\"[Insight: File footnotes mention the Guild's reputation for 'leaving calling cards' at scenes of 'resolved disputes'.]\" data-roll-failure=\"[Insight: High-risk work is standard for mercenary guilds.]\">high-risk mercenary work</span>, including 'discreet logistical support, 'asset protection/retrieval', and 'problem resolution' within the Midlands underworld.",
            dc: 6,
            hasFullReport: false
        },
        'item-blimp': {
            title: "Damaged Air Blimp Report ('The Swift Quill')",
            report: "Incident Addendum (Station Master Log #SML-IAR-021): Civilian courier blimp 'The Swift Quill' (Registry #MCB-SQ-771), docked at Platform 3 during the incident, sustained significant collateral heat damage. Official assessment conducted by Station Overseer notes 'moderate scorching and blistering' to the aft gas envelope fabric (Sector 7-Delta) and <span class=\"rollable-text\" data-roll-id=\"blimp_tears\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Initial report mentioned 'possible sabotage', later amended to 'stress tears' by Overseer.]\" data-roll-failure=\"[Insight: Stress tears are common near hatches on older blimps.]\">'minor stress tears'</span> near the primary cargo access hatch (Port side). Blimp manifest lists scheduled departure for Edgeshade approx. 30 minutes post-incident time. Damage assessed as secondary effect of nearby magical detonation.",
            hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Discrepancies & Cargo Manifest]: Microscopic analysis of damage initially labeled 'scorching' reveals localized *impact craters* with embedded metallic flecks (Silver [Ag], Iron [Fe], Copper [Cu] - matching residue analysis, cross-ref: item-residue). Fabric tears near cargo hatch exhibit clean, sharp edges consistent with being cut *from the inside* using a specialized blade (e.g., alchemist's obsidian scalpel, cross-ref: item-robes), inconsistent with explosive overpressure or heat stress. Full blimp cargo manifest (subpoenaed by Defense) lists primary consignment as <span class=\"rollable-text\" data-roll-dc=\"7\" data-roll-id=\"blimp_cargo\" data-roll-success=\"[Insight: Sub-manifest specifies 'Project Chimera Reagents - Stage 3 - Highly Unstable'.]\" data-roll-failure=\"[Insight: Labeling seems standard for hazardous alchemical materials.]\">'Volatile Alchemical Reagents - Handle With Extreme Care - Cat III Biohazard/Explosive Risk'</span> destined for Edgeshade. Sender listed cryptically as 'FG Contact - Swiftsoul'. Recipient data redacted under 'Commercial Sensitivity' clause. (Cross-Ref requested: File #4738-DM - Dragon Mountain Aftermath, Edgeshade Destruction details; File #4744-BT - Fairth's Retreat activities in Edgeshade region).",
            dc: 7,
             hasFullReport: true,
             documentStyle: 'document-style-official',
             fullReportContent: `
                 <h4>Swiftsoul Air Station - Damage Assessment Report</h4>
                 <p><strong>Vessel:</strong> 'The Swift Quill' (Registry #MCB-SQ-771)</p>
                 <p><strong>Date of Assessment:</strong> Efferd 26, 1040BF (~16:00 hrs)</p>
                 <p><strong>Assessor:</strong> Station Overseer P. Grumbles</p>
                 <hr>
                 <h5>Summary of Damage:</h5>
                 <p>Vessel was docked at Platform 3 during the explosion incident (approx. 14:00 hrs). Assessment confirms collateral damage primarily from thermal radiation and secondary pressure wave.</p>
                 <ul>
                     <li><strong>Aft Gas Envelope (Sector 7-Delta):</strong> Moderate scorching and blistering observed across approx. 15 sq. meters. Heat intensity appears insufficient to cause ignition but has compromised fabric integrity. (<span class="rollable-text" data-roll-id="full_blimp_envelope" data-roll-dc="6" data-roll-success="[Insight: Defense analysis found micro-impact craters embedded within the 'scorched' area.]" data-roll-failure="[Insight: Standard heat damage assessment.]">Initial assessment: Heat damage only</span>). Repair Required.</li>
                     <li><strong>Port Cargo Hatch:</strong> Several tears noted in the reinforced fabric surrounding the hatch mechanism. Tears appear jagged, consistent with <span class="rollable-text" data-roll-id="full_blimp_hatch_tears" data-roll-dc="5" data-roll-success="[Insight: Initial field note mentioned 'possible blade cuts', overruled by Overseer Grumbles as 'stress tears'.]" data-roll-failure="[Insight: Tears attributed to stress from nearby blast.]">material stress failure</span> due to proximity to blast. Hatch mechanism itself undamaged. Patching sufficient. <span class="rollable-text" data-roll-id="full_blimp_hatch_cuts" data-roll-dc="6" data-roll-success="[Insight: Defense analysis indicates clean cuts *from the inside*, matching alchemical kit tool profile.]" data-roll-failure="[Insight: Origin of tears remains officially 'stress'.]">Analysis suggests internal cuts.</span></li>
                     <li><strong>Starboard Stabilizer Fin:</strong> Minor paint peeling due to heat. Cosmetic damage only.</li>
                     <li><strong>Undercarriage/Gondola:</strong> No significant damage detected.</li>
                 </ul>
                 <h5>Cargo Manifest Review (Partial):</h5>
                 <p>Vessel manifest confirms scheduled departure for <span class="rollable-text" data-roll-id="full_blimp_dest" data-roll-dc="4" data-roll-success="[Insight: Edgeshade was recently destroyed; cargo delivery there is highly suspicious.]" data-roll-failure="[Insight: Standard cargo destination noted.]">Edgeshade</span> at 14:30 hrs. Primary listed cargo: 'Alchemical Supplies - Assorted'. Sender: 'FG Logistics'. Recipient: Redacted. (<span class="rollable-text" data-roll-id="full_blimp_manifest_access" data-roll-dc="7" data-roll-success="[Insight: Defense subpoena revealed full manifest: 'Volatile Alchemical Reagents - Cat III Bio/Explosive Risk'.]" data-roll-failure="[Insight: Official summary deemed sufficient.]">Full manifest details restricted by sender request</span>).</p>
                 <h5>Conclusion (Overseer Grumbles):</h5>
                 <p>Damage consistent with secondary effects of nearby explosion. Vessel requires repairs before flight clearance can be granted. No evidence of direct targeting or internal sabotage found during this assessment. <span class="rollable-text" data-roll-id="full_blimp_grumbles_note" data-roll-dc="6" data-roll-success="[Insight: Grumbles has outstanding gambling debts owed to an Iron Fists-affiliated bookie.]" data-roll-failure="[Insight: Standard procedure followed.]">Standard incident report filed.</span></p>
                 <hr>
                 <p><em>Report End. Vessel impounded pending repairs and further investigation if warranted.</em></p>
             `
        },
    'item-fall': {
        title: "Defendant's Medical Report (Post-Arrest)",
        report: "Medical Summary (Swiftsoul Keep Infirmary, Admittance #SKI-A4739): Defendant Miser admitted post-apprehension with multiple traumatic injuries. Diagnosis: Comminuted fracture, left tibia and fibula; multiple non-displaced rib fractures (Ribs 5-8, left side); significant soft tissue contusions across torso and back; suspected internal bleeding (mild). Injuries consistent with impact following a <span class=\"rollable-text\" data-roll-id=\"fall_jump_description\" data-roll-dc=\"4\" data-roll-success=\"[Insight: Healer notes mention impact patterns consistent with hitting a sloped, uneven rock surface after a significant drop.]\" data-roll-failure=\"[Insight: Injury severity matches the reported jump/fall dynamics.]\">jump/fall from a multi-story metal service staircase onto an adjacent rocky cliffside</span> (estimated drop ~25-35 ft / 8-11 meters onto sloped terrain) during pursuit, correlating with arresting officers' reports. Patient initially combative, later sedated.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Toxicological Findings & Anomalies]: Attending Healer's supplementary notes indicate unusual resistance to standard Tier-II analgesic potions (Willowbark & Poppy concentration). Subsequent full toxicology screen (ordered due to resistance) confirmed presence of *Nightshade Bloom extract* alkaloids (specifically Atropine analogs, known potent paralytic/hallucinogenic agents) in Defendant's bloodstream. Dosage levels suggest administration approximately 1-2 hours *prior* to the jump and landing, potentially impairing judgment, motor control, and contributing to 'erratic behavior' during the alleged 'evasion'. Healer also noted peculiar, rapidly fading geometric symbols faintly fluorescing on Miser's forearms under diagnostic arcane light (<span class=\"rollable-text\" data-roll-id=\"fall_glyphs\" data-roll-dc=\"6\" data-roll-success=\"[Insight: Healer sketched the symbols; pattern matches known Iron Fists tracking/control glyphs.]\" data-roll-failure=\"[Insight: Faint symbols could be unrelated residual magic or skin discoloration.]\">'similar to warding patterns or tracking glyphs, but faded almost immediately upon stabilization'</span>).",
        dc: 5,
        hasFullReport: true,
        documentStyle: 'document-style-medical',
        fullReportContent: `
            <div class="medical-chart-header">
                <h3>Swiftsoul Keep Infirmary - Patient Admittance Record</h3>
                <p><strong>Patient ID:</strong> Miser, Archie (#AM773) | <strong>Admittance #:</strong> SKI-A4739</p>
                <p><strong>Date/Time Admitted:</strong> Efferd 26, 1040BF / ~22:45 hrs | <strong>Attending Healer:</strong> Elara Meadowlight (Jr. Healer)</p>
            </div>
            <hr>
            <h5>Presenting Condition:</h5>
            <p>Patient brought in by Kingdom Guard following apprehension on exterior cliffside near station Service Exit S4. Multiple traumatic injuries noted. Patient conscious but disoriented, combative (<span class="rollable-text" data-roll-id="full_fall_combative" data-roll-dc="4" data-roll-success="[Insight: Guards reported Miser was shouting about 'the package' and 'they drugged me'.]" data-roll-failure="[Insight: Combativeness typical of traumatic arrest.]">verbal threats, physical resistance</span>). Sedation administered (Tier I Calm Spirit Draught).</p>
            <h5>Diagnosis (Initial):</h5>
            <ul>
                <li>Severe Fracture (Comminuted): Left Tibia & Fibula. Obvious deformity and crepitus.</li>
                <li>Multiple Rib Fractures (Non-displaced): Left Ribs 5, 6, 7, 8. Confirmed via diagnostic palpation and minor healing cantrip resonance.</li>
                <li>Extensive Contusions: Torso (anterior/posterior), Back. Significant bruising and swelling.</li>
                <li>Suspected Internal Injury: Mild abdominal tenderness. Monitoring required.</li>
                <li>Mechanism of Injury: Reported jump/fall from significant height (<span class="rollable-text" data-roll-id="full_fall_height" data-roll-dc="5" data-roll-success="[Insight: Healer Elara estimated impact forces consistent with a fall >30ft onto an uneven surface.]" data-roll-failure="[Insight: Height estimate consistent with guard reports.]">est. 25-35 ft</span>) onto rock surface.</li>
            </ul>
            <h5>Treatment Provided:</h5>
            <p>Wound cleansing. Bone-setting charm applied to left leg (stabilized). Analgesic potion (Willowbark/Poppy Conc. Tier-II) administered. Observation initiated.</p>
            <h5>Supplementary Notes (Healer Elara):</h5>
            <p>Patient exhibited <span class="rollable-text" data-roll-id="full_fall_resistance" data-roll-dc="5" data-roll-success="[Insight: Elara noted pupil dilation and muscle tremors inconsistent with injury alone, prompting the tox screen.]" data-roll-failure="[Insight: Pain resistance varies between individuals.]">unexpectedly high resistance</span> to standard analgesic dosage. Full Toxicology Screen ordered (Ref: SKI-TOX-A4739). While performing initial arcane diagnostic scan, observed faint, complex geometric patterns fluorescing briefly on patient's forearms - patterns dissipated rapidly (<span class="rollable-text" data-roll-id="full_fall_glyphs_desc" data-roll-dc="7" data-roll-success="[Insight: Elara sketched the glyphs - confirmed match to Iron Fists 'Leash' control runes.]" data-roll-failure="[Insight: Glyphs too faint and transient for positive ID.]">resembled tracking or binding glyphs?</span>). Recorded observation.</p>
            <h5>Toxicology Results (SKI-TOX-A4739 - Addendum Eff. 27):</h5>
            <p>Positive for *Atropa Belladonna* (Nightshade Bloom) alkaloids. Concentration indicates significant dosage administered approx. <span class="rollable-text" data-roll-id="full_fall_tox_time" data-roll-dc="6" data-roll-success="[Insight: Toxicologist estimates ingestion/injection 1-2 hours PRIOR to the ~22:30 jump.]" data-roll-failure="[Insight: Timing is an estimate.]">1-3 hours prior to admittance</span>. Known effects: Paralysis, Hallucinations, Disorientation.</p>
            <hr>
            <p><em>Patient stabilized. Transferred to Secure Holding pending Guard clearance. End Report.</em></p>
        `
    },
    'item-pouch': {
        title: "Charred Leather Pouch",
        report: "Evidence Addendum (Field Tag #E4739-CP01): Small leather pouch, heavily charred and structurally compromised, recovered near the blast epicenter (Grid Ref SWK-C1-A9), distinct from previously collected robe fragments. Contents incinerated beyond visual identification by initial field assessment team. Material identified via remnant analysis as common goblin-hide leather, frequently used for coin purses or component bags. Deemed of <span class=\"rollable-text\" data-roll-id=\"pouch_value\" data-roll-dc=\"4\" data-roll-success=\"[Insight: Field notes show Skye initially tagged it as 'Potential Container - Priority Analysis', later downgraded.]\" data-roll-failure=\"[Insight: Severely damaged items are often low priority.]\">low evidentiary value</span> by Investigator Skye due to extreme damage.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Faint Markings & Trace Residue]: Examination under Arcane-Enhanced Spectral Imaging (AESI) reveals faint, heat-distorted tooling marks beneath the deepest charring. Pattern suggests a stylized monogram: <span class=\"rollable-text\" data-roll-id=\"pouch_monogram\" data-roll-dc=\"6\" data-roll-success=\"[Insight: The 'W' strongly resembles Wario's known personal sigil; the 'M' could be Miser, or 'Mercenary'.]\" data-roll-failure=\"[Insight: Markings are too distorted for definitive identification.]\">a 'W' entwined with a vertical staff or 'M'</span>, partially obscured. Interior residue analysis, initially dismissed as combustion byproducts, contains trace amounts of residual gold dust (Au), elemental sulfur (S), potassium nitrate (KNO3), and... unexpectedly, *Allium Sativum* (common garlic) powder particulates. A persistent, faint scent of ozone (often associated with high-energy discharges or localized teleportation effects) lingers within the tanned leather matrix when subjected to specialized olfactory sensors.",
        dc: 6,
        hasFullReport: false
    },
    'item-druid-staff': {
        title: "Elder Meadowlight's Staff Fragment",
        report: "Evidence Report (Druid Village Scene, Tag #DV-SF01): Distal fragment (approx. 30cm) recovered from the personal rune-staff of Elder Rowan Meadowlight, found near his body within the Veridian Grove's central circle. Exhibits significant thermal damage, charring, and vitrification on the outer surface, superficially consistent with exposure to high-temperature magical effects (e.g., Fireball proximity) and correlating with <span class=\"rollable-text\" data-roll-id=\"staff_residue_corr\" data-roll-dc=\"5\" data-roll-success=\"[Insight: The fire residue near the staff has the same metallic/alchemical traces as the station residue, unlike the 'cleaner' fire residue on the Elder's robes.]\" data-roll-failure=\"[Insight: Correlation seems straightforward given the circumstances.]\">fire residue found nearby</span> (Cross-Ref: item-residue).",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Conflicting Damage Types & Material Traces]: While external heat damage is present, the primary fracture surface exhibits characteristics of *high-impact brittle shattering*, indicative of significant kinetic force transfer or sympathetic resonance failure, *not* typical thermal stress fracturing or clean incineration. Micro-analysis of the fracture interface reveals embedded trace amounts of *cold-forged silver alloy residue* (Silver [Ag] dominant, with trace Tin [Sn] and Antimony [Sb] - distinct composition from the Iron Fists emblem silver). This alloy type is consistent with materials used in the manufacture of <span class=\"rollable-text\" data-roll-id=\"staff_alloy_use\" data-roll-dc=\"6\" data-roll-success=\"[Insight: This specific alloy is favored for anti-druidic wardbreakers due to its resonance dampening properties against nature magic.]\" data-roll-failure=\"[Insight: Silver alloys have many mundane and magical uses.]\">anti-magic manacles, specialized ward-breaking tools, or certain types of resonant dampeners</span>.",
        dc: 7,
        hasFullReport: false
    },
    'item-station-log': {
        title: "Station Security Log Excerpt",
        report: "Official Log Entry (Swiftsoul Station Central Chronocomputer, Date: Efferd 26, Timestamp ~13:45): 'MAINTENANCE ALERT - PLATFORM 3. Airship 'The Swift Quill' (MCB-SQ-771) - Unscheduled systems check initiated. Docking clamps engaged manually via Supervisor Override Key #SOK-004. Platform access restricted by authorized Guild personnel (Iron Fists Chapter Liaison). Reason Code: <span class=\"rollable-text\" data-roll-id=\"log_reason_code\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Guild Protocol 7C is intended for biohazard containment, not standard cargo inspection.]\" data-roll-failure=\"[Insight: Guilds often use broad protocol codes.]\">PRIORITY CARGO INSPECTION - GUILD PROTOCOL 7C</span>. Authorizing Supervisor: Sgt. Borin Stonehand (Off-Duty Override Authorization Recorded).'",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Timing Discrepancy & Camera Malfunction]: The timestamp for the 'manual engagement / Guild inspection' log entry (13:45) is approximately *fifteen minutes after* the independently witnessed coin exchange between Miser and the Iron Fists member (estimated ~13:30, cross-ref: item-testimony). Security chronocam feed for the Platform 3 access corridor (Camera ID #SWK-CAM-P3A) is officially logged as <span class=\"rollable-text\" data-roll-id=\"log_camera_offline\" data-roll-dc=\"7\" data-roll-success=\"[Insight: Maintenance records show CAM-P3A received 'unscheduled maintenance' by an *unidentified* technician approx. 1 hour before the outage.]\" data-roll-failure=\"[Insight: Power fluctuations, though unlogged, can cause localized camera outages.]\">'OFFLINE - Signal Loss Due to Power Fluctuation Event'</span> between timestamps 13:28 and 14:15 (explosion occurred ~14:00). Station-wide power grid monitoring logs show *no corresponding significant power fluctuation* events reported for any other sector during this entire 47-minute window (Cross-ref: item-station-power-log).",
        dc: 5,
        hasFullReport: true,
        documentStyle: 'document-style-log',
        fullReportContent: `
            <div class="log-entry-header">
                <h3>Swiftsoul Station - Central Chronocomputer Log</h3>
                <p><strong>Date Filter:</strong> Efferd 26, 1040BF | <strong>Time Filter:</strong> 12:00 - 15:00 | <strong>Sector Filter:</strong> Platform 3 Area</p>
            </div>
            <hr>
            <pre class="log-text">
[13:28:15] SYS: CAM-P3A (Plat 3 Access Corridor) - Signal Status LOST. Reason: Power Fluctuation (Auto-Logged).
[13:30:00 - 13:40:00] -- No relevant entries for Platform 3 --
[13:44:58] MAN-OVRD: User B.Stonehand (Auth SOK-004) initiated Platform 3 Manual Docking Clamp Engage Sequence - Target MCB-SQ-771 ('Swift Quill').
[13:45:02] LOG: Platform 3 Access Restriction ACTIVE. Authorized Personnel: Iron Fists Liaison Team. Reason Code: <span class="rollable-text" data-roll-id="full_log_protocol" data-roll-dc="6" data-roll-success="[Insight: Protocol 7C requires Level 2 Hazmat suits; witnesses saw standard Guild uniforms.]" data-roll-failure="[Insight: Protocol codes can be complex.]">PRIORITY CARGO INSPECTION - GUILD PROTOCOL 7C</span>.
[13:45:10] SYS: Docking Clamps Engaged - MCB-SQ-771. Status: SECURE.
[13:45:11 - 13:59:59] -- No relevant entries for Platform 3 --
[14:00:03] ALERT: Seismic Sensor Spike - Sector C1 (Concourse). Magnitude 4.2 (Localized).
[14:00:04] ALERT: Acoustic Sensor Overload - Sector C1, P3. Peak dB > 180.
[14:00:05] ALERT: Thermal Sensor Spike - Sector C1, P3. Peak Temp > 1200 C.
[14:00:06] SYS: AUTOMATED FIRE SUPPRESSION SYSTEM ACTIVATED - CONCOURSE ZONE ALPHA.
[14:00:10] SECURITY: ALL UNITS - CODE RED - EXPLOSION REPORTED CONCOURSE PLATFORM 3 VICINITY. PROCEED WITH EXTREME CAUTION.
<span class="rollable-text" data-roll-id="full_log_missing_time" data-roll-dc="7" data-roll-success="[Insight: Log analysis shows a 47-minute gap ONLY for CAM-P3A. All other cameras in the area remained operational.]" data-roll-failure="[Insight: Log gaps can occur during system stress.]">[14:00:11 - 14:15:00] -- System Logs Flooded with Emergency Traffic --</span>
[14:15:01] SYS: CAM-P3A (Plat 3 Access Corridor) - Signal Status RESTORED. Video Feed Resumed.
            </pre>
            <hr>
            <p><em>Log excerpt ends. Full log available via Magistrate request.</em></p>
        `
    },
    'item-guild-communique': {
        title: "Intercepted Guild Communique Fragment",
        report: "Intelligence Memo Fragment (Source: Confidential Informant 'Whisper', Reliability: B+): Torn piece of watermarked parchment (Iron Fists Guild standard stock) recovered via dead-drop. Partially legible text reads: '...package secured platform 3. Payment confirmed Miser account debit successful. Swift Quill departure imminent post-transfer. Initiate <span class=\"rollable-text\" data-roll-id=\"comm_cleanup\" data-roll-dc=\"6\" data-roll-success=\"[Insight: Internal Guild chatter confirms 'cleanup phase' was ordered by Commander G personally.]\" data-roll-failure=\"[Insight: 'Cleanup' could simply mean securing the area.]\">cleanup phase</span> post-delivery confirmation signal. BURN NOTICE ACTIVE - Handle Level 3 contaminants per protocol Sigma-9.' Document exhibits minor water damage, signature completely obscured.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Cryptic References & Signature Analysis]: Cross-referencing with recovered Guild lexicons (Intel File #4740-VW) confirms 'Burn Notice Active' is standard operational code for eliminating potential witnesses, compromising loose ends, *or* destroying incriminating physical evidence, often utilizing fire, potent corrosives, or contracted magical services. 'Level 3 Contaminants' typically designates high-risk individuals (targets/witnesses), politically sensitive materials, or dangerously unstable cargo. A separate, digitally recovered fragment from the same communication stream (Source: 'Deep Scan') mentions <span class=\"rollable-text\" data-roll-id=\"comm_wario_folly\" data-roll-dc=\"7\" data-roll-success=\"[Insight: 'Wario's folly' refers to his failed attempt to double-cross the Guild over the Dragon Mountain eggs, forcing the Guild's hand.]\" data-roll-failure=\"[Insight: The reference is vague and could mean anything.]\">'Wario's folly created necessary opportunity for adjustment'</span>. Advanced graphological analysis of the visible ink strokes near the signature tear suggests a possible (35% confidence) match to the known hand of Iron Fists local chapter Commander 'G'.",
        dc: 7,
        hasFullReport: true,
        documentStyle: 'document-style-note',
        fullReportContent: `
            <div class="note-page torn-edge">
                <p>...package secured platform 3. Payment confirmed Miser account debit successful (<span class="rollable-text" data-roll-id="full_comm_payment" data-roll-dc="5" data-roll-success="[Insight: Miser's ledger shows a CREDIT, not a debit. This implies the payment came *from* Miser, not to him, or the communique is deliberately misleading.]" data-roll-failure="[Insight: Standard transaction note.]">ref #FG-TRX-884B</span>). Swift Quill departure imminent post-transfer.</p>
                <p>Initiate <span class="rollable-text" data-roll-id="full_comm_cleanup" data-roll-dc="6" data-roll-success="[Insight: 'Cleanup Phase' in Sigma-9 context involves neutralizing assets and sanitizing the location, often violently.]" data-roll-failure="[Insight: Could refer to simple evidence removal.]">cleanup phase</span> post-delivery confirmation signal (Channel Gamma).</p>
                <p><strong>BURN NOTICE ACTIVE.</strong> Handle Level 3 contaminants (<span class="rollable-text" data-roll-id="full_comm_contam" data-roll-dc="7" data-roll-success="[Insight: Intel suggests 'Level 3 Contaminant' was the code for the Quill's volatile cargo itself.]" data-roll-failure="[Insight: Could refer to Miser or other personnel.]">designation 'Chimera Extract'</span>) per protocol Sigma-9.</p>
                <p>Secondary objective: Ensure Miser situation resolved cleanly. <span class="rollable-text" data-roll-id="full_comm_miser_res" data-roll-dc="8" data-roll-success="[Insight: 'Resolved cleanly' is Guild euphemism for elimination or irreversible framing.]" data-roll-failure="[Insight: Means ensuring he doesn't interfere further.]">No loose ends</span>.</p>
                <p>Wario's folly created necessary opportunity... (<span class="rollable-text" data-roll-id="full_comm_adjustment" data-roll-dc="7" data-roll-success="[Insight: 'Adjustment' may refer to eliminating Wario, retrieving the cargo, and framing Miser all at once.]" data-roll-failure="[Insight: Refers to adapting plans after Wario's actions.]">adjustment protocols initiated?</span>)</p>
                <p><em>[Lower section torn, slight ink smear visible]</em></p>
                <p style="text-align: right;">...- G?</p>
            </div>
        `
    },
    'item-village-wards': {
        title: "Druid Village Ward Analysis",
        report: "Arcane Forensics Report (Veridian Grove Site, Ref #AF-VG-001): Analysis confirms presence of standard Class-IV Protective Wards encompassing the Druid Village perimeter. Wards consistent with ancient Sylvan tradition (Nature magic, primarily Abjuration with minor Divination elements). Designed principally to repel hostile non-fey entities, unnatural undead constructs, and overtly aggressive magical energies (Threshold setting: Moderate). Analysis shows evidence of a single, forceful breach point near the south-eastern access path, coinciding with <span class=\"rollable-text\" data-roll-id=\"ward_miser_entry\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Path analysis shows signs of *two* sets of tracks entering around the same time - Miser's and another, heavier set.]\" data-roll-failure=\"[Insight: Miser's entry point is confirmed by multiple traces.]\">Defendant Miser's reported entry vector</span>. Breach signature consistent with overload by moderate-level external spell force.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Ward Specificity & Evidence of Sabotage]: Deeper harmonic analysis of the breach point reveals the ward structure was *specifically* and temporarily attenuated (weakened) against *both Evocation (Fire subtype)* magic *and* *Necromantic energy signatures* moments before Miser's arrival time (estimated window: 5-10 minutes prior). This attenuation required precise manipulation of the ward's resonant frequency anchor points, demonstrating intricate knowledge of Sylvan warding architecture unlikely for an outsider like Miser. The secondary 'muffled surge' reported by witness Faelan Whisperwind (Cross-Ref: item-testimony) perfectly matches the predicted arcane signature of a <span class=\"rollable-text\" data-roll-id=\"ward_dispel\" data-roll-dc=\"7\" data-roll-success=\"[Insight: Residual dispel magic traces contain faint elemental resonance matching Guild Alchemist signature profiles.]\" data-roll-failure=\"[Insight: Dispel magic is common and leaves few lasting traces.]\">targeted *Dispel Magic* effect</span> focused on removing residual traces of the initial ward manipulation/sabotage.",
        dc: 7,
        hasFullReport: true,
         fullReportContent: `
             <div class="arcane-report-header">
                 <h3>Arcane Forensics Unit - Mobile Lab Gamma</h3>
                 <p><strong>Report Ref:</strong> AF-VG-001 | <strong>Case:</strong> 4739 (Miser) / Veridian Grove Incident</p>
                 <p><strong>Date of Scan:</strong> Efferd 27, 1040BF | <strong>Analyst:</strong> Master Arcanist Theron</p>
             </div>
             <hr>
             <h5>Subject:</h5>
             <p>Veridian Grove Perimeter Warding Matrix (South-Eastern Quadrant)</p>
             <h5>Methodology:</h5>
             <p>Harmonic Resonance Scan (HRS), Aetheric Particle Trace (APT), Temporal Echo Analysis (TEA)</p>
             <h5>Findings:</h5>
             <ol>
                 <li><strong>Baseline Ward Structure:</strong> Confirmed Class-IV Sylvan Abjuration Matrix, interwoven with minor Divination (presence detection). Standard configuration, ancient origin (<span class="rollable-text" data-roll-id="full_ward_age" data-roll-dc="5" data-roll-success="[Insight: Ward dates back over 500 years, incredibly complex and stable until recent event.]" data-roll-failure="[Insight: Age confirmed, typical for established groves.]">est. 500+ years</span>). Normal ambient energy readings away from breach point.</li>
                 <li><strong>Breach Point (SE Path):</strong> Significant disruption signature detected. Primary signature consistent with overload via external Evocation (Fire) energy influx, exceeding ward threshold.</li>
                 <li><strong>Temporal Echo Analysis (TEA):</strong> Analysis of residual chronitons reveals anomalous activity *preceding* the primary breach event (Time Window: Approx. 15:50 - 15:55 hrs, Efferd 26):
                     <ul>
                         <li>Targeted frequency modulation detected, focused on ward resonance nodes governing <span class="rollable-text" data-roll-id="full_ward_attenuation" data-roll-dc="7" data-roll-success="[Insight: Attenuation used sophisticated counter-harmonics, suggesting expert knowledge of Sylvan warding.]" data-roll-failure="[Insight: Modulation could be natural decay.]">Fire and Necromantic energy rejection</span>. Ward integrity temporarily reduced by ~40% against these specific energy types.</li>
                         <li>Manipulation signature is complex, requires advanced knowledge of ward architecture. <span class="rollable-text" data-roll-id="full_ward_manipulator" data-roll-dc="8" data-roll-success="[Insight: Signature contains sub-harmonics weakly matching Iron Fists Guild internal arcane comms network.]" data-roll-failure="[Insight: Signature too faint for positive attribution.]">Originator signature obscured</span> by masking harmonics.</li>
                     </ul>
                 </li>
                 <li><strong>Aetheric Particle Trace (APT):</strong> Post-breach analysis (Time Window: Approx. 17:40 - 17:50 hrs, Efferd 26) detected faint, rapidly dissipating particles consistent with a localized <span class="rollable-text" data-roll-id="full_ward_dispel" data-roll-dc="6" data-roll-success="[Insight: Dispel signature specifically targeted temporal echo frequencies, suggesting deliberate evidence removal.]" data-roll-failure="[Insight: Could be unrelated ambient dispel effect.]">*Dispel Magic* effect</span> (Abjuration school) focused near the breach point, likely targeting residual evidence of the prior manipulation.</li>
             </ol>
             <h5>Conclusion (Arcanist Theron):</h5>
             <p>The Veridian Grove ward was deliberately sabotaged to be vulnerable against Fire and Necromantic energies shortly before Defendant Miser's arrival. The subsequent breach was facilitated by this sabotage. Evidence of the sabotage was later obscured by a targeted Dispel effect. Defendant Miser lacks the known expertise for such precise ward manipulation. <span class="rollable-text" data-roll-id="full_ward_conclusion" data-roll-dc="7" data-roll-success="[Insight: Theron strongly recommends investigating known specialists in anti-Sylvan wardbreaking, potentially Guild-affiliated.]" data-roll-failure="[Insight: Conclusion points to tampering but not a specific culprit.]">External interference by a skilled third party is strongly indicated.</span></p>
             <hr>
             <p><em>Report End. Full harmonic charts appended.</em></p>
         `
    },
    'item-miser-notes': { // Changed title from 'Miser's Encoded Ledger Fragment'
        title: "Encoded Ledger",
        report: "Investigator Notes (Item Tag #E4739-LN01): Several damaged parchment pages recovered from Defendant Miser's satchel post-apprehension. Appear to be standard financial ledger entries utilizing a complex personal cipher. Contains notations seemingly related to spell component purchases, travel itineraries, and various financial transactions. Initial cursory analysis by Investigator Skye deemed it <span class=\"rollable-text\" data-roll-id=\"ledger_relevance\" data-roll-dc=\"4\" data-roll-success=\"[Insight: Skye's notes explicitly state 'Cipher too complex, defer analysis indefinitely'.]\" data-roll-failure=\"[Insight: Complex ciphers often mask mundane transactions.]\">likely irrelevant personal bookkeeping</span>, potentially related to illicit activities but not directly pertinent to the primary charges. Submitted to evidence locker.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Decoded Transactions & Alarming Context]: Application of a known arcane cipher associated with Miser's suspected underworld contacts (Cipher Key Ref: 'Three-Eye Special', obtained via Defense resources) reveals several highly pertinent entries: Payments received marked 'Rakka - Retrieval Fee (Partial)' and 'Rakka - Courier Service'. Entries for 'Ravencreek Lodging (Veilwood Discount?)' and 'Pirate Crew Share (Sea Dog Transfer)'. Significant payment received marked 'FG - Quill Prep Fee, Final Installment'. Large debit recorded under <span class=\"rollable-text\" data-roll-id=\"ledger_w_eef\" data-roll-dc=\"6\" data-roll-success=\"[Insight: 'W-EEF' is cross-referenced in other underworld intercepts as 'Wario - Emergency Extraction Fund'.]\" data-roll-failure=\"[Insight: 'W' could stand for 'Withdrawal' or many other things.]\">'W - Emergency Extraction Fund (Contingency Sigma)'</span>. Cryptic annotation: 'Contingency Gamma: Druid Contact Necessary if FG double-cross suspected re: Quill cargo OR Rakka silence protocol initiated'. Another fragmented entry reads: 'Payload volatile - risk calculated but acceptable. MUST RETRIEVE before they trigger failsafe protocol... Edgeshade window closing.' Entries strongly suggest Miser anticipated betrayal from multiple parties (FG, possibly Rakka) and was deeply involved in complex, dangerous operations.",
        dc: 6,
        hasFullReport: true,
        documentStyle: 'document-style-ledger', // Apply ledger style
         fullReportContent: `
             <div class="ledger-page">
                 <div class="ledger-header">A. Miser - Personal Accounts - Year 1040BF (Cipher: 3ES)</div>
                 <div class="ledger-entry">
                     <span class="date">Eff. 12</span>
                     <span class="desc">Rakka - Retrieval Fee (Partial) - <span class="rollable-text" data-roll-id="full_ledger_rakka_fee" data-roll-dc="5" data-roll-success="[Insight: Amount seems low for high-risk retrieval.]" data-roll-failure="[Insight: Standard service payment.]">Item #RCK-03</span></span>
                     <span class="debit"></span>
                     <span class="credit">150g</span>
                     <span class="balance">262g</span>
                 </div>
                 <div class="ledger-entry">
                     <span class="date">Eff. 15</span>
                     <span class="desc">Pirate Crew Share (Sea Dog Transfer) - <span class="rollable-text" data-roll-id="full_ledger_pirate_share" data-roll-dc="6" data-roll-success="[Insight: Significantly smaller than typical pirate cuts, suggesting Miser was low rank or short-changed.]" data-roll-failure="[Insight: Standard crew payment.]">Ravencreek Ops</span></span>
                     <span class="debit">75g</span>
                     <span class="credit"></span>
                     <span class="balance">187g</span>
                 </div>
                 <div class="ledger-entry">
                     <span class="date">Eff. 21</span>
                     <span class="desc">Ravencreek Lodging (Veilwood Discount?) - <span class="rollable-text" data-roll-id="full_ledger_spa_cost" data-roll-dc="4" data-roll-success="[Insight: Cost seems too low for Veilwood; perhaps paid partly 'in kind'?]" data-roll-failure="[Insight: Reasonable lodging cost.]">3 nights</span></span>
                     <span class="debit">60g</span>
                     <span class="credit"></span>
                     <span class="balance">127g</span>
                 </div>
                  <div class="ledger-entry">
                     <span class="date">Eff. 22</span>
                     <span class="desc"><span class="rollable-text" data-roll-id="full_ledger_info2" data-roll-dc="5" data-roll-success="[Insight: Likely payment to an informant for details on Guild movements or Wario's status.]" data-roll-failure="[Insight: Generic expense.]"">Information Broker Fee - 'Whisper'</span></span>
                     <span class="debit">25g</span>
                     <span class="credit"></span>
                     <span class="balance">102g</span>
                 </div>
                  <div class="ledger-entry">
                     <span class="date">Eff. 24</span>
                     <span class="desc">Rakka - Courier Service - <span class="rollable-text" data-roll-id="full_ledger_rakka_courier" data-roll-dc="5" data-roll-success="[Insight: Payment received *after* leaving Ravencreek, implies successful delivery back to Rakka?]" data-roll-failure="[Insight: Routine payment.]">Urgent Dispatch</span></span>
                     <span class="debit"></span>
                     <span class="credit">50g</span>
                     <span class="balance">152g</span>
                 </div>
                 <div class="ledger-entry">
                     <span class="date">Eff. 25</span>
                     <span class="desc"><span class="rollable-text" data-roll-id="full_ledger_funeral2" data-roll-dc="5" data-roll-success="[Insight: Entry likely relates to observation costs or information gathering at Wario's 'funeral'.]" data-roll-failure="[Insight: A non-specific expense.]"">Observation Expenses - Lower District Event</span></span>
                     <span class="debit">5g</span>
                     <span class="credit"></span>
                     <span class="balance">147g</span>
                 </div>
                 <div class="ledger-entry">
                     <span class="date">Eff. 26</span>
                     <span class="desc">FG - Quest Retainer (<span class="rollable-text" data-roll-id="full_ledger_retainer2" data-roll-dc="4" data-roll-success="[Insight: Miser paid Coinsoul, likely hoping for work, not receiving payment.]" data-roll-failure="[Insight: Standard guild fee.]"">K. Coinsoul</span>)</span>
                     <span class="debit">10g</span>
                     <span class="credit"></span>
                     <span class="balance">137g</span>
                 </div>
                 <div class="ledger-entry">
                     <span class="date">Eff. 26</span>
                     <span class="desc">FG - Quill Prep Fee (Final Installment?) - <span class="rollable-text" data-roll-id="full_ledger_payment_q2" data-roll-dc="6" data-roll-success="[Insight: Question mark suggests Miser expected payment but hadn't received it.]" data-roll-failure="[Insight: Internal notation.]"">Received??</span></span>
                     <span class="debit"></span>
                     <span class="credit">(250g)</span>
                     <span class="balance">387g?</span>
                 </div>
                 <div class="ledger-entry ledger-urgent">
                     <span class="date">Eff. 26</span>
                     <span class="desc"><span class="rollable-text" data-roll-id="full_ledger_w_eef2" data-roll-dc="7" data-roll-success="[Insight: 'W-EEF' strongly linked to Wario's emergency funds. 'Contingency Sigma' often implies immediate danger/extraction.]" data-roll-failure="[Insight: Could be unrelated code.]"">W - Emergency Extraction Fund (Contingency Sigma)</span></span>
                     <span class="debit">300g</span>
                     <span class="credit"></span>
                     <span class="balance"><strong style="color: #cc8400;">87g?</strong></span> <!-- Adjusted balance -->
                 </div>
                 <div class="ledger-entry ledger-note">
                     <span class="date">--</span>
                     <span class="desc"><i>Note: Contingency Gamma: Druid Contact (Veridian Grove - Elara?) if FG double-cross re: Quill cargo confirmed OR Rakka silence protocol initiated. Payload unstable! Retrieve ASAP before Sigma-9 triggered? Edgeshade window closing...</i></span>
                     <span class="debit"></span>
                     <span class="credit"></span>
                     <span class="balance">--</span>
                 </div>
                  <div class="ledger-entry ledger-note">
                     <span class="date">--</span>
                     <span class="desc"><i><span class="rollable-text" data-roll-id="full_ledger_sea_dog2" data-roll-dc="6" data-roll-success="[Insight: 'Sea Dog Imports' is a known front for Shadow Sea smugglers.]" data-roll-failure="[Insight: Could be a legitimate, if obscure, merchant.]"">Query: Sea Dog Imports - Outstanding Balance? Need funds!</span></i></span>
                     <span class="debit"></span>
                     <span class="credit"></span>
                     <span class="balance">--</span>
                 </div>
             </div>
         `
    },
    'item-wanted-poster': {
        title: "Wario 'Deceased' Wanted Poster",
        report: "Miscellaneous Item (Found Item Log #FIL-SWK-088): Standard Kingdom-issue wanted poster depicting notorious criminal 'Wario' (Charges: Grand Larceny, Mayhem, Resisting Arrest, Multiple Counts). Poster is prominently stamped with large red letters: 'DECEASED - CASE CLOSED BY ROYAL DECREE - Efferd 25, 1040BF'. Found crumpled near the main entrance to Swiftsoul Station concourse, <span class=\"rollable-text\" data-roll-id=\"poster_location\" data-roll-dc=\"4\" data-roll-success=\"[Insight: Poster was found near a known dead-drop location used by the Iron Fists.]\" data-roll-failure=\"[Insight: Litter is common near station entrances.]\">seemingly discarded litter</span>. Logged per standard procedure but deemed irrelevant to Case 4739 by Investigator Skye.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Anomalous Details & Cryptic Note]: Forensic examination reveals the red 'DECEASED' stamp ink is <span class=\"rollable-text\" data-roll-id=\"poster_ink\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Ink analysis matches a batch used exclusively by the Swiftsoul Iron Fists chapter admin office.]\" data-roll-failure=\"[Insight: Ink freshness is hard to judge precisely on weathered parchment.]\">unusually fresh</span> compared to the significant weathering and creasing of the poster parchment itself, suggesting the stamp was applied very recently, possibly *after* the poster was already discarded. Faint, greasy fingerprint residue (latent print analysis excludes Defendant Miser) is visible near the lower right corner. On the reverse side, barely visible under UV light, a hastily scribbled note in charcoal pencil: 'Package transfer confirmed. Payment pending *full verification*. Elimination protocol active post-delivery. -G'. The handwriting style exhibits strong similarities (70% match confidence) to the partial signature observed on the intercepted Guild Communique fragment (Cross-Ref: item-guild-communique).",
        dc: 7,
        hasFullReport: true,
         documentStyle: 'document-style-poster',
         fullReportContent: `
             <div class="poster-front">
                 <h2 class="poster-title">WANTED</h2>
                 <div class="poster-image-placeholder">[Image: Crude charcoal sketch of a grinning man with a large pointy moustache, wearing overalls and a yellow cap]</div>
                 <h3 class="poster-name">WARIO</h3>
                 <p class="poster-charges"><strong>Crimes:</strong> Grand Larceny, Mayhem, Destruction of Royal Property, Resisting Arrest (Multiple Counts), Impersonating Nobility, Aggravated Smuggling, Public Nuisance...</p>
                 <p class="poster-reward"><strong>Reward:</strong> 5,000 Gold Sovereigns - DEAD or ALIVE (Preferably Dead)</p>
                 <div class="poster-stamp">DECEASED</div>
                 <p class="poster-decree">Case Closed by Royal Decree - Efferd 25, 1040BF</p>
             </div>
             <div class="poster-back">
                 <p><em>(Reverse side - Appears blank under normal light)</em></p>
                 <p class="poster-hidden-note">[UV ANALYSIS REVEALS PENCIL MARKINGS]</p>
                 <p class="poster-hidden-note">Package transfer confirmed.</p>
                 <p class="poster-hidden-note">Payment pending <span class="rollable-text" data-roll-id="full_poster_verify" data-roll-dc="6" data-roll-success="[Insight: 'Full verification' likely means ensuring the cargo wasn't damaged or swapped.]" data-roll-failure="[Insight: Standard financial prudence.]"">*full verification*</span>.</p>
                 <p class="poster-hidden-note">Elimination protocol active post-delivery.</p>
                 <p class="poster-hidden-note" style="text-align: right; margin-top: 10px;"><span class="rollable-text" data-roll-id="full_poster_sig" data-roll-dc="7" data-roll-success="[Insight: Handwriting matches other 'G' samples - confirms Guild Commander involvement.]" data-roll-failure="[Insight: Signature unclear.]"">- G</span></p>
                 <p class="poster-hidden-note">[Faint fingerprint smudge near signature - analysis pending]</p>
             </div>
         `
    },

    // --- Existing MISC EVIDENCE ITEMS ---
    'item-station-schedule': {
        title: "Outdated Station Schedule",
        report: "Miscellaneous Item (Evidence Tag #MISC-S01): Crumpled parchment sheet found amidst debris near blast Zone Beta (approx. 15m from epicenter). Appears to be a standard Swiftsoul Station passenger/cargo blimp schedule dated Efferd 15, 1040BF (<span class=\"rollable-text\" data-roll-id=\"schedule_date\" data-roll-dc=\"3\" data-roll-success=\"[Insight: The schedule is over 10 days old, likely simple litter.]\" data-roll-failure=\"[Insight: Schedules are often kept past their date.]\">significantly outdated</span>). Lists numerous arrivals/departures, none matching 'The Swift Quill' or occurring near the time of the incident. Shows standard water stains and wear. Logged by Skye's team, deemed irrelevant.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Minor Annotation]: Faint pencil notation discovered under magnification near the listing for a 'Silver Zephyr' cargo run (Efferd 15): '<span class=\"rollable-text\" data-roll-id=\"schedule_note\" data-roll-dc=\"6\" data-roll-success=\"[Insight: 'FG Pickup Confirmed' likely refers to a routine Iron Fists cargo handling task from that date, unconnected to the incident.]\" data-roll-failure=\"[Insight: The initials 'FG' are too common to definitively link to the Iron Fists without context.]\">FG Pickup Confirmed - Hold Crate #3</span>'. Handwriting does not match known samples from Miser or identified Guild personnel associated with the current incident. Potential link to unrelated Fighter's Guild activity, but appears coincidental.",
        dc: 4,
        hasFullReport: true,
        documentStyle: 'document-style-log',
         fullReportContent: `
             <div class="schedule-header">
                 <h3>Swiftsoul Station - Official Blimp Schedule</h3>
                 <p><strong>Effective Date:</strong> Efferd 15, 1040BF (Superseded)</p>
             </div>
             <hr>
             <table class="schedule-table">
                 <thead>
                     <tr><th>Time</th><th>Vessel</th><th>Origin/Dest.</th><th>Platform</th><th>Type</th><th>Notes</th></tr>
                 </thead>
                 <tbody>
                     <tr><td>08:00</td><td>The Morning Lark</td><td>Fairhaven</td><td>1</td><td>Passenger</td><td>On Time</td></tr>
                     <tr><td>09:30</td><td>Silver Zephyr</td><td>Ironforge Mines</td><td>3</td><td>Cargo (Ore)</td><td><span class="rollable-text" data-roll-id="full_schedule_note" data-roll-dc=\"5\" data-roll-success=\"[Insight: Handwriting matches Sgt. Stonehand's duty roster sign-offs.]" data-roll-failure="[Insight: Unidentified handwriting.]"">FG Pickup Confirmed - Hold Crate #3</span></td></tr>
                     <tr><td>10:15</td><td>The Royal Courier</td><td>Capital City</td><td>2</td><td>Mail/VIP</td><td>Priority</td></tr>
                     <tr><td>11:00</td><td>Cloud Cutter</td><td>Skyport Delta</td><td>4</td><td>Passenger</td><td>Delayed (Weather)</td></tr>
                     <tr><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td><td>...</td></tr>
                     <tr><td>17:00</td><td>The Evening Star</td><td>Port Azure</td><td>1</td><td>Passenger</td><td>Expected</td></tr>
                 </tbody>
             </table>
             <hr>
             <p><em>Schedule subject to change without notice. Check main board for current status. This copy is outdated.</em></p>
        `
    },
    'item-smuggler-coin': {
        title: "Unusual Foreign Coin",
        report: "Miscellaneous Item (Evidence Tag #MISC-C01): Single, tarnished copper coin found lodged between floor plates <span class=\"rollable-text\" data-roll-id=\"coin_location_new\" data-roll-dc=\"4\" data-roll-success=\"[Insight: The coin was near the *base* of the staircase, potentially dropped *before* the jump.]\" data-roll-failure=\"[Insight: Could have been tracked there on someone's boot.]\">near the base of the service staircase</span> from which Miser jumped. Coin bears markings inconsistent with Kingdom standard currency or known local trade tokens. Features a stylized Kraken motif on one side and Cyrillic-like script on the reverse (<span class=\"rollable-text\" data-roll-id=\"coin_origin\" data-roll-dc=\"6\" data-roll-success=\"[Insight: Markings match coinage from the Shadow Sea Freeports, notorious smuggler havens.]\" data-roll-failure=\"[Insight: Could be a dropped souvenir or curiosity.]\">origin unidentified by field team</span>). No direct link to Defendant Miser established, potentially dropped by anyone using the service access.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Trace Residue]: Microscopic analysis reveals faint traces of saltwater residue and powdered phosphorescent algae common in Shadow Sea cargo holds. While confirming the coin's likely origin, it doesn't directly implicate Miser or connect to the station explosion. It *could* suggest Miser has broader underworld dealings (<span class=\"rollable-text\" data-roll-id=\"coin_miser_link\" data-roll-dc=\"7\" data-roll-success=\"[Insight: Miser's ledger has coded entries mentioning 'Sea Dog Imports' - potentially related.]\" data-roll-failure=\"[Insight: No concrete link established; coin likely incidental.]\">consistent with 'Three-Eyed Bandit' persona?</span>), but offers no leverage for the current case. Could be used to vaguely muddy the waters about Miser's activities if needed, but likely a red herring.",
        dc: 5,
        hasFullReport: false
    },
    'item-overheard-convo': {
        title: "Guard's Overheard Snippet",
        report: "Investigator Notes Addendum (Guard T. Bolger Interview): During routine follow-up interviews, Guard Tom Bolger (Station Roster #8C, different patrol route than Stonehand) recalled overhearing a <span class=\"rollable-text\" data-roll-id=\"convo_details\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Bolger specified the argument involved two dockworkers complaining about delayed hazard pay.]\" data-roll-failure=\"[Insight: Bolger couldn't recall specific voices or appearances.]\">heated, though brief, argument</span> near the Platform 3 auxiliary cargo lift earlier on the day of the incident (estimated time ~10:00 AM). He couldn't see the individuals clearly but remembers hearing phrases like '...payment overdue!' and '...risk premium not met!'. Assumed it was standard dockworker dispute over wages or hazardous cargo handling. Reported as potentially relevant background noise.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Confirmed Irrelevance]: Cross-referencing with Station Master Log and Payroll Records confirms a documented dispute between two specific stevedores (L. Grum & P. Sneed) regarding hazard pay for unloading volatile fertilizer shipment earlier that morning (09:45 AM). The dispute was resolved by shift supervisor intervention. <span class=\"rollable-text\" data-roll-id=\"convo_link\" data-roll-dc=\"4\" data-roll-success=\"[Insight: Both stevedores were accounted for elsewhere during the 14:00 incident.]\" data-roll-failure=\"[Insight: While unrelated, it shows general tension on the docks.]\">Completely unrelated to Miser, the Iron Fists, or the explosion</span>. Confirms Guard Bolger's observation was accurate but ultimately irrelevant background information.",
        dc: 3,
        hasFullReport: false
    },
     'item-official-decree': {
         title: "Royal Decree Snippet (Found)",
         report: "Miscellaneous Item (Evidence Tag #MISC-D01): A torn piece of high-quality parchment bearing a fragment of an official Royal Decree, found stuck to Miser's boot during processing. Text discusses increased patrols near 'sensitive installations'.",
         hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Irrelevant Timing]: Decree is dated Efferd 1st, 1040BF, relating to general security theatre post-Dragon Mountain incident. No specific mention of Swiftsoul or connection to the case events. Clearly incidental contamination.",
         dc: 2,
         hasFullReport: true,
         documentStyle: 'document-style-official',
         fullReportContent: `
             <div class="document-header">
                <h4 style="text-align: center;">...Fragment of Royal Decree...</h4>
             </div>
             <hr style="border-top: 1px solid var(--border-color);">
             <p>...therefore be it KNOWN and PROMULGATED throughout the Midlands,</p>
             <p>That in light of recent unfortunate events threatening the stability of Our Realm, particularly concerning the security breaches culminating in the <span class="rollable-text" data-roll-id="full_decree_dragon" data-roll-dc="3" data-roll-success="[Insight: Refers to the Dragon Mountain incident involving Wario.]" data-roll-failure="[Insight: Standard bureaucratic reference.]">Dragon Mountain Affront</span>, the Crown mandates an immediate increase in vigilance and patrol frequency by all loyal Garrison forces and appointed Watch Captains.</p>
             <p>Particular attention shall be paid to the perimeter security of all designated <span class="rollable-text" data-roll-id="full_decree_install" data-roll-dc="4" data-roll-success="[Insight: 'Sensitive Installations' included major trade hubs like Swiftsoul, magical research labs, and royal treasuries.]" data-roll-failure="[Insight: Vague term with no specific targets listed.]">'Sensitive Installations'</span> including, but not limited to, major transit hubs, arcane repositories, and critical infrastructure nodes...</p>
             <p>...any suspicious activity is to be reported DIRECTLY to the Regional Magistrate without delay. Laxity will NOT be tolerated.</p>
             <p style="margin-top: 20px;"><strong>Given under Our Hand and Seal this 1st Day of Efferd, 1040BF.</strong></p>
             <p><em>[Seal Impression - Partially obscured Royal Griffin]</em></p>
         `
    },
    'item-love-letter': {
        title: "Intercepted Note (Misdelivered?)",
        report: "Intelligence Item (Source: 'Peeper', Reliability C-): A crumpled, perfumed note intercepted via unreliable source. Seems to be a poorly written love letter complaining about 'G' being obsessed with 'that horrid little man' and neglecting the writer.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Potential Guild Drama]: The handwriting is florid and matches samples attributed to 'X.O.', the known Kamidere daughter of Iron Fists Commander 'G'. The reference to 'G' (the mother) being obsessed with a 'horrid little man' (<span class=\"rollable-text\" data-roll-id=\"full_letter_man\" data-roll-dc=\"7\" data-roll-success=\"[Insight: Underworld gossip links 'G' romantically/obsessionally with Wario, despite his reputation.]\" data-roll-failure=\"[Insight: Could refer to any number of people 'G' dislikes.]\">possibly Wario? Or another rival?</span>) suggests internal Guild friction potentially exploited or exacerbated by X.O. While amusing, its direct relevance is questionable unless X.O. used her mother's distraction to influence operational decisions leading to the Swiftsoul incident. High DC reflects dubious source and indirect link.",
        dc: 7,
        hasFullReport: true,
         documentStyle: 'document-style-note perfumed', // Multiple classes
        fullReportContent: `
            <div class="note-page perfumed">
                <p style="font-family: 'Brush Script MT', cursive; font-size: 1.2em; margin-bottom: 1em;">My Dearest G,</p>
                <p style="text-indent: 2em; font-style: italic;">Another cycle turns, and still you gaze afar, consumed by thoughts of <span class="rollable-text" data-roll-id="full_letter_man_detail" data-roll-dc="6" data-roll-success="[Insight: The description aligns with Wario's known physical traits and crude mannerisms.]" data-roll-failure="[Insight: Description is generic enough to fit many.]">that horrid, grasping little man with the ridiculous moustache</span>. When will your divine eyes turn back to me, your devoted daughter and most ardent admirer?</p>
                <p style="text-indent: 2em; font-style: italic;">He is unworthy of your celestial attention! Does he appreciate your grandeur? Your power? Your... unique perspective? No! He cares only for coin and chaos! Less entertaining than watching Miser squirm, frankly.</p>
                <p style="text-indent: 2em; font-style: italic;"><span class="rollable-text" data-roll-id="full_letter_neglect" data-roll-dc="5" data-roll-success="[Insight: Guild informant mentioned 'G' has been erratic and neglecting command duties lately.]" data-roll-failure="[Insight: Standard lover's/daughter's complaint.]">While you obsess, the chapter drifts. Operations lack... *flair*.</span> Come back to me, my radiant commander! Let us forge true glory together, not chase after fleeting distractions!</p>
                <p style="text-align: right; margin-top: 2em; font-family: 'Brush Script MT', cursive; font-size: 1.2em;">Forever Yours<br>(whether you notice or not),</p>
                <p style="text-align: right; font-family: 'Brush Script MT', cursive; font-size: 1.5em; margin-top: 0.5em;">X.O.</p>
                <p style="font-size: 0.8em; text-align: center; margin-top: 2em; color: #8a6d9e;"><em>P.S. The lavender perfume is new, do you like it? Tell me you like it.</em></p>
            </div>
        `
    },

    // --- NEW EVIDENCE ITEMS ADDED HERE (Batch 1) ---
    'item-fins-complaint': {
        title: "Fin's Prior Complaint",
        report: "Official Complaint Record (Ravencreek Guard Post, Ref #RCG-884): Filed ~1 month prior to main incident by Admiral Fin. Reports attempted theft of personal cart near Ravencreek outskirts by an unidentified 'shifty spellcaster'. Fin claims suspect matched 'defendant's general build' (<span class=\"rollable-text\" data-roll-id=\"fin_desc_certainty\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Post records note Fin was initially unsure, saying only 'average height, hooded'.]\" data-roll-failure=\"[Insight: Fin's recollection seems firm in the official report.]\">Current testimony is more certain than initial filing description</span>). Attacker allegedly repelled after brief skirmish involving 'minor property damage to cart' and observation of 'some strange purple sparks'. No witnesses identified. Case closed due to lack of evidence.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Inconsistencies & Potential Bias]: Complaint details are vague. 'Purple sparks' do not align with Miser's known Fire Evocation specialty, nor the residue found at Swiftsoul. Fin's description becoming *more* certain over time is suspicious, suggesting potential confirmation bias or external influence after Miser became the prime suspect in the current, unrelated case. The location (Ravencreek outskirts) is far from Swiftsoul. Could be used to suggest Fin has a pre-existing, possibly mistaken, negative perception of individuals matching Miser's description, potentially influencing his Swiftsoul testimony if he is called as a witness.",
        dc: 5,
        hasFullReport: false
    },
    'item-clockwork-gear': {
        title: "Clockwork Gear (Druid Village)",
        report: "Addendum to Midlands Constabulary Field Report DRV-994 (Related Item E-07): Small, finely wrought brass gear noted as found near the path suspect Miser fled, Veridian Grove outskirts. Reporting officer, <span class=\"rollable-text\" data-roll-id=\"hemlock_gear_dismissal\" data-roll-dc=\"4\" data-roll-success=\"[Insight: Hemlock's notes read 'Odd gear, likely dropped by tinker passing through. Irrelevant.']\" data-roll-failure=\"[Insight: Standard procedure to log found items.]\">Constable T. Hemlock</span>, logged the item but dismissed it in his field notes as 'tinker trash', unrelated to the primary investigation concerning Elder Meadowlight's death. Item stored in Druid Village Constabulary evidence locker.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Wario/Guild Tech Link]: The gear's intricate design is inconsistent with common 'tinker trash'. Analysis (requires retrieval from Druid Village) could reveal Gnomish or specialized clockwork origins. This finding strongly links to Wario's known affinity for clockwork devices and potential Guild involvement with advanced tech. Its presence near the Druid village, where Miser fled *after* the station incident, suggests Wario or Guild agents with similar tech may have been active in the area around the same time, potentially intersecting with Miser's flight path or even the circumstances of Elder Meadowlight's death. Dismissal by Constable Hemlock represents a significant overlooked detail.",
        dc: 6,
        hasFullReport: false
    },
    'item-station-power-log': {
        title: "Station Power Grid Log",
        report: "Swiftsoul Station Engineering Dept. - Power Distribution Log (Excerpt, Efferd 26): Records show stable power across most station sectors throughout the day. A minor, localized fluctuation was automatically logged for the Platform 3 Access Corridor Camera (CAM-P3A) at 13:28, coinciding with its recorded outage. <span class=\"rollable-text\" data-roll-id=\"power_log_duration\" data-roll-dc=\"5\" data-roll-success=\"[Insight: The logged 'fluctuation' lasted only 0.3 seconds, insufficient to cause a 47-minute camera outage.]\" data-roll-failure=\"[Insight: Fluctuations can sometimes trigger persistent device faults.]\">Duration noted as brief</span>. No other significant power anomalies reported in adjacent sectors during the relevant timeframe (13:00-14:30). Engineering assessment attributes outage to standard equipment sensitivity.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Pre-Outage Spikes & Tampering Indicators]: Detailed analysis of the raw sensor data (subpoenaed by Defense) reveals *two* distinct, high-frequency energy spikes directed specifically at CAM-P3A's power conduit *immediately preceding* the logged 13:28 outage. These spikes are characteristic of targeted electromagnetic pulse (EMP) devices or localized energy surges used for disabling electronics, *not* standard power grid fluctuations. The brief logged 'fluctuation' appears to be the system's misinterpretation of the forced shutdown. This strongly suggests deliberate, external tampering to disable the camera feed *before* the Guild's activity on Platform 3 commenced, contradicting the official 'power fluctuation' explanation.",
        dc: 7,
        hasFullReport: true,
        documentStyle: 'document-style-log',
        fullReportContent: `
            <div class="log-entry-header">
                <h3>Swiftsoul Station Engineering - Power Grid Monitoring</h3>
                <p><strong>Log Date:</strong> Efferd 26, 1040BF | <strong>Sector Filter:</strong> P3 (Platform 3) & Adjacent</p>
            </div>
            <hr>
            <pre class="log-text">
[13:00:00] SYS: All Sectors Nominal. Grid Stability: 99.8%
...
[13:27:58] SYS: Sector P3-AUX - Power Draw Normal.
[13:27:59] ALERT: Energy Spike Detected - Node CAM-P3A. Amplitude: 850kW (Peak). Duration: 0.05s. Type: EM Pulse (Unverified). <span class="rollable-text" data-roll-id="full_log_spike1" data-roll-dc=\"6\" data-roll-success=\"[Insight: Spike signature matches known Guild tech specs for EMP emitters.]" data-roll-failure="[Insight: Spike could be sensor error.]">Source Unknown.</span>
[13:28:01] ALERT: Energy Spike Detected - Node CAM-P3A. Amplitude: 910kW (Peak). Duration: 0.08s. Type: EM Pulse (Unverified). Source Unknown.
[13:28:15] SYS: CAM-P3A (Plat 3 Access Corridor) - Signal Status LOST. POWER_STATUS = FLUCTUATION (0.3s). Auto-Logged.
[13:28:16] SYS: Grid Stabilized. Sector P3-MAIN Power Draw Normal.
...
[14:00:03] ALERT: Major Power Surge Detected - Sector C1/P3 Vicinity. Correlates with explosion event. Grid attempting stabilization.
...
[14:15:01] SYS: CAM-P3A (Plat 3 Access Corridor) - Signal Status RESTORED. POWER_STATUS = NOMINAL.
...
[14:30:00] SYS: All Sectors Nominal post-incident surge. Grid Stability: 98.5%
            </pre>
            <hr>
            <p><em>Log excerpt ends. Full raw sensor data available via Engineering request E-4739-PWR.</em></p>
        `
    },
    'item-miser-debt-notice': {
        title: "Miser's Debt Notice",
        report: "Miscellaneous Document (Found Item Log #FIL-SWK-091): Crumpled, heavily water-stained parchment found inside Miser's satchel lining during secondary search. Appears to be a harshly worded debt collection notice from 'Sea Dog Imports & Collections'. <span class=\"rollable-text\" data-roll-id=\"debt_amount\" data-roll-dc=\"4\" data-roll-success=\"[Insight: The amount listed is substantial - 1500 Gold Sovereigns.]\" data-roll-failure=\"[Insight: Specific amount is illegible due to water damage.]\">Amount owed is illegible</span>. Dated approximately two weeks prior to the incident. Contains threats of 'asset seizure' and 'alternative collection methods'. Deemed potentially relevant to motive (financial desperation) by Investigator Skye, but source considered disreputable.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Extreme Pressure & Underworld Ties]: 'Sea Dog Imports & Collections' is a known front for a ruthless Shadow Sea smuggling cartel notorious for violent debt enforcement (<span class=\"rollable-text\" data-roll-id=\"sea_dog_rep\" data-roll-dc=\"6\" data-roll-success=\"[Insight: Intel links Sea Dogs to kidnappings and disappearances related to unpaid debts.]\" data-roll-failure=\"[Insight: Reputation may be exaggerated underworld rumors.]\">Ref Intel File #SS-SD-004</span>). The threat of 'alternative collection methods' is a thinly veiled promise of violence. This notice confirms Miser was under *extreme* financial pressure from dangerous individuals shortly before the Swiftsoul incident. This desperation strongly corroborates his frantic attempts to get work from the Iron Fists (Ref: item-testimony, item-miser-notes) and makes him more susceptible to coercion or manipulation, potentially being forced into the situation involving the 'Swift Quill' cargo as a means to pay off this debt.",
        dc: 5,
        hasFullReport: true,
        documentStyle: 'document-style-note torn-edge water-stained',
        fullReportContent: `
            <div class="note-page torn-edge water-stained">
                 <h4 style="text-align: center; font-family: Impact, sans-serif; color: #8b0000;">FINAL DEMAND FOR PAYMENT</h4>
                 <p><strong>To:</strong> A. Miser (Alias: 'Three Eyes')</p>
                 <p><strong>From:</strong> Sea Dog Imports & Collections (Authorized Agents)</p>
                 <p><strong>Date:</strong> Efferd 10th, 1040BF</p>
                 <hr style="border-top: 1px solid #a0522d;">
                 <p>Let this serve as your <strong>FINAL NOTICE</strong> regarding the outstanding balance owed to Sea Dog Imports.</p>
                 <p>Amount Due: <span style="font-weight: bold; font-size: 1.1em; background: #eee; padding: 0 3px;" class="rollable-text" data-roll-id="full_debt_amount" data-roll-dc=\"4\" data-roll-success=\"[Insight: Clearly reads 1500 Gold Sovereigns.]" data-roll-failure="[Insight: Amount obscured by large water stain.]">~~1500 G.S.~~</span> (Fifteen Hundred Gold Sovereigns)</p>
                 <p>Previous attempts to resolve this matter amicably have failed. Your continued delinquency is unacceptable.</p>
                 <p>You have <strong>SEVEN (7) DAYS</strong> from the date of this notice to remit payment IN FULL to our designated agent (Contact 'Squid Lips' - Swiftsoul Docks). Failure to comply by Efferd 17th will result in immediate escalation.</p>
                 <p>Be advised: Escalation includes, but is not limited to, forceful seizure of assets (known and unknown), reporting to relevant Guilds, and the initiation of <strong style="color: #8b0000;" class="rollable-text" data-roll-id="full_debt_methods" data-roll-dc=\"6\" data-roll-success=\"[Insight: 'Alternative methods' is cartel code for physical harm or abduction.]" data-roll-failure="[Insight: Standard threatening language for collectors.]">alternative collection methods</strong> designed to ensure our full recovery.</p>
                 <p style="margin-top: 1em;">We trust you will make the sensible choice.</p>
                 <p style="text-align: right; margin-top: 1.5em; font-family: 'Brush Script MT', cursive; font-size: 1.3em;">Captain Inkstain</p>
                 <p style="text-align: right; font-size: 0.8em;">(Chief Collector, Sea Dog Imports)</p>
            </div>
             <style> .water-stained { background-color: #f0eada !important; background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><filter id="water"><feTurbulence type="fractalNoise" baseFrequency="0.02 0.05" numOctaves="3" seed="15" result="noise"/><feDiffuseLighting in="noise" lighting-color="%23d0c0a0" surfaceScale="1.5"><feDistantLight azimuth="45" elevation="60"/></feDiffuseLighting></filter><rect width="100%" height="100%" filter="url(%23water)" opacity="0.2"/></svg>'); } </style>
        `
    },
    'item-scorched-playing-card': {
        title: "Scorched Playing Card",
        report: "Miscellaneous Item (Evidence Tag #MISC-PC01): Single playing card (identified as 'Ace of Spades' from a common 'Dragon Deck' set) found adhered to a partially melted ferrocrete fragment near the blast epicenter. Card exhibits severe scorching and curling from heat exposure. <span class=\"rollable-text\" data-roll-id=\"card_origin\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Dragon Decks are popular in dockside gambling dens frequented by Wario.]\" data-roll-failure=\"[Insight: Dragon Decks are widely available.]\">Origin likely incidental litter caught in the blast</span>. Deemed irrelevant by Investigator Skye.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Wario's Signature & Residue]: While heavily damaged, the reverse side of the card retains faint traces of a custom modification: a tiny, crudely drawn garlic bulb insignia stamped in purple ink near the corner – a known (if unofficial) calling card associated with Wario (<span class=\"rollable-text\" data-roll-id=\"wario_card_mark\" data-roll-dc=\"7\" data-roll-success=\"[Insight: Forgery analysis confirms ink type matches Wario's preferred brand used for marking territory.]\" data-roll-failure=\"[Insight: Mark could be coincidental.]\">often left at scenes of his escapades or 'victories'</span>). Furthermore, trace analysis of the card's charred surface reveals not only standard combustion byproducts but also minute traces of the same anomalous metallic particulates (Silver, Iron, Copper) found in the primary blast residue and on the damaged blimp (Cross-Ref: item-residue, item-blimp). This places Wario (or someone using his marked items) directly at the blast site, linked to the specific anomalous residue.",
        dc: 6,
        hasFullReport: false
    },
    'item-anonymous-tip': {
        title: "Anonymous Tip (Guard Post Log)",
        report: "Swiftsoul Guard Post - Duty Log Entry (Efferd 26, ~14:30): Received anonymous tip via speaking tube shortly after explosion alert. Tipster (unidentified male voice, muffled) claimed the explosion was caused by 'rival gang business, probably the Red Hands setting off a warning'. <span class=\"rollable-text\" data-roll-id=\"tip_details\" data-roll-dc=\"4\" data-roll-success=\"[Insight: Log notes the call was unusually brief and disconnected abruptly.]\" data-roll-failure=\"[Insight: Anonymous tips are common after major incidents.]\">No further details provided</span>. Watch Commander noted the tip but prioritized immediate suspect pursuit (Miser) based on eyewitness accounts.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Deliberate Misdirection?]: The 'Red Hands' are a minor, low-level street gang operating in the Lower District, known for petty theft and vandalism, lacking the resources or sophistication for a major bombing involving specialized cargo or arcane signatures. The timing of the tip (just as focus shifted to the fleeing Miser) and its specific, inaccurate attribution suggest it may have been a deliberate attempt at misdirection, possibly placed by the Iron Fists or an associate to divert initial attention away from their own activities on Platform 3 and muddy the investigative waters while Miser became the primary target. The muffled voice could indicate disguise or use of simple illusion/tech.",
        dc: 5,
        hasFullReport: true,
        documentStyle: 'document-style-log',
        fullReportContent: `
            <div class="log-entry-header">
                <h3>Swiftsoul Guard Post - Watch Commander Duty Log</h3>
                <p><strong>Date:</strong> Efferd 26, 1040BF | <strong>Officer:</strong> Captain Valerius</p>
            </div>
            <hr>
            <pre class="log-text">
...
[14:05] All available units responding Code Red to explosion C1/P3. Reports chaotic.
[14:10] Witness (Quill) reports suspect (description matches A. Miser) fleeing towards Service Corridor 7B. Units dispatched in pursuit.
[14:20] Initial casualty reports: 3 deceased confirmed near blast zone. Station lockdown initiated.
[14:31] LOG: Incoming Comm - Speaking Tube #4 (Public Access). Anonymous Male Voice (muffled, sounds hurried).
[14:31] TIP RECEIVED: Caller states, quote: "That explosion... wasn't no accident. Heard the Red Hands were planning something big... a warning shot, maybe? Check their turf down by the Rusty Flagon." End Quote. <span class="rollable-text" data-roll-id="full_tip_disconnect" data-roll-dc=\"4\" data-roll-success=\"[Insight: Audio analysis of the background noise captured faint sounds of airship engine whine, inconsistent with a Lower District tavern.]" data-roll-failure="[Insight: Call disconnected before trace could complete.]">Call disconnected abruptly</span>.
[14:32] NOTE (Valerius): Tip noted. Red Hands lack capability for this scale. Focus remains on apprehending fleeing suspect Miser. Assigning two junior constables to cursory check near Rusty Flagon later. <span class="rollable-text" data-roll-id="full_tip_priority" data-roll-dc=\"5\" data-roll-success=\"[Insight: Valerius's quick dismissal seems logical but prevents early investigation into alternative culprits.]" data-roll-failure="[Insight: Standard procedure to prioritize active pursuit.]">Priority 1: Apprehension.</span>
[14:45] Pursuit of Miser ongoing through lower service levels...
...
            </pre>
            <hr>
            <p><em>Log excerpt ends. Speaking tube audio recording archived (File #AUD-T4-E26-1431) - Quality Poor.</em></p>
        `
    }, // <-- Comma ensures separation

    // --- NEW EVIDENCE ITEMS ADDED HERE (Batch 2 - Relevant Worldbuilding) ---
    'item-rakkas-directive': {
        title: "Rakka's Cryptic Directive",
        report: "Document Fragment (Recovered from Miser's Satchel #E4739-DOC-01): A piece of unusually smooth, bark-like parchment. Written in iridescent ink that shifts color. Reads: 'The Shadow Sea charts - secure them from the Captain's locker in Ravencreek. Trust the steed, beware the fangs. Deliver payment to Veilwood. Failure is... unmaking. - R'.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: High-Stakes Mission & Threat]: Confirms Miser was on a specific, high-risk mission for Rakka involving pirates ('Captain') and potentially vampires ('Veilwood'). 'Trust the steed' likely refers to the horse-person associate. 'Beware the fangs' could be literal vampires or metaphorical betrayal. The threat of 'unmaking' implies Rakka deals in dangerous magic and doesn't tolerate failure. This mission likely explains Miser's presence in Ravencreek and his association with pirates. Did this mission go wrong, leading to the werewolf attack or forcing Miser to flee to Swiftsoul?",
        dc: 7,
        hasFullReport: false
    },
    'item-pirate-doubloon': {
        title: "Bent Pirate Doubloon",
        report: "Miscellaneous Item (Found on Miser's person during arrest): A crudely minted silver coin, bent almost in half. One side depicts a skull and crossed cutlasses, the other a kraken. <span class=\"rollable-text\" data-roll-id=\"doubloon_origin\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Design matches known coinage used by the 'Crimson Reavers' pirate crew operating out of the Shadow Sea.]\" data-roll-failure=\"[Insight: Common generic pirate coin design.]\">Recognized as common pirate tender</span>.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Miser's Pirate Connection & Conflict?]: The coin confirms Miser's association with pirates, likely the Crimson Reavers. The fact it's severely bent suggests it might have been damaged during a fight or perhaps used to ward off something (e.g., superstition about bent silver vs. werewolves?). <span class=\"rollable-text\" data-roll-id=\"doubloon_residue\" data-roll-dc=\"6\" data-roll-success=\"[Insight: Trace analysis finds saltwater residue and faint Lycanthrope dander.]\" data-roll-failure=\"[Insight: No unusual residue.]\">Could be a memento or payment related to the Rakka mission involving pirates in Ravencreek</span>.",
        dc: 5,
        hasFullReport: false
    },
    'item-spa-token': {
        title: "Veilwood Spa Token",
        report: "Miscellaneous Item (Recovered from Miser's Satchel #E4739-MISC-01): A smooth, obsidian token etched with a silver crescent moon and bat wings. Emits a faint coolness. Identified as an entry token for the <span class=\"rollable-text\" data-roll-id=\"token_spa_id\" data-roll-dc=\"4\" data-roll-success=\"[Insight: Token design confirmed as VIP access for the Veilwood Spa in Ravencreek.]\" data-roll-failure=\"[Insight: Generic token, could be from any number of places.]\">exclusive Veilwood Spa in Ravencreek</span>.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Confirms Ravencreek Stay & Vampire Contact]: This token confirms Miser stayed at, or at least had access to, the vampire-run spa in Ravencreek. This places him directly in the sphere of influence of the Fairth's Retreat coven. Did he make contact? Garner favors? Make enemies? <span class=\"rollable-text\" data-roll-id=\"token_magic\" data-roll-dc=\"6\" data-roll-success=\"[Insight: Token holds a faint enchantment of compulsion/suggestion, subtly encouraging return visits.]\" data-roll-failure=\"[Insight: No active magic detected.]\">His presence there links him to the volatile Vampire-Werewolf politics of the town immediately prior to the Swiftsoul incident</span>.",
        dc: 4,
        hasFullReport: false
    },
    'item-ravencreek-guard-report': {
        title: "Ravencreek Guard Report (Werewolf Attack)",
        report: "Document Copy (Ravencreek Watch Archives #RW-AR-088): Report detailing a werewolf attack on Ravencreek approx. 3 nights before Efferd 26th. Multiple assailants breached the eastern palisade. Attack focused on merchant district warehouses. <span class=\"rollable-text\" data-roll-id=\"rc_attack_casualties\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Report mentions several guards injured by claws, one merchant missing presumed taken.]\" data-roll-failure=\"[Insight: Minor property damage, no major casualties.]\">Attack repelled after intervention by 'well-equipped residents' near Veilwood Spa</span>. Case ongoing.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Attack Context & Miser's Associates]: The report confirms the werewolf attack timeline relative to Miser's suspected stay. 'Well-equipped residents' intervening near the Spa strongly implies the spa's vampire security. The attack targeting warehouses, not the spa directly, might suggest the werewolves sought specific goods or information. <span class=\"rollable-text\" data-roll-id=\"rc_attack_witness\" data-roll-dc=\"6\" data-roll-success=\"[Insight: Addendum notes guard saw figures matching Miser's associates (pirates, horse person) fleeing warehouse area *before* alarm was raised.]\" data-roll-failure=\"[Insight: No mention of Miser or associates in main report.]\">Raises questions: Did Miser's group provoke the attack? Were they targets? Did they steal something the werewolves wanted?</span> Links the factions present in Ravencreek to potential conflict involving Miser.",
        dc: 6,
        hasFullReport: true,
        documentStyle: 'document-style-official',
        fullReportContent: `
            <div class="document-header">
                 <h4 style="text-align: center;">Ravencreek Town Watch - Incident Report</h4>
            </div>
            <hr style="border-top: 1px solid var(--border-color);">
            <p><strong>Report Ref:</strong> RW-AR-088</p>
            <p><strong>Date of Incident:</strong> Night of Efferd 23rd/24th, 1040BF (Full Moon)</p>
            <p><strong>Location:</strong> Ravencreek, Eastern Palisade & Merchant Quarter</p>
            <p><strong>Reporting Officer:</strong> Sergeant Mathis</p>
            <p><strong>Subject:</strong> Aggravated Burglary & Assault (Suspected Lycanthrope Activity)</p>
            <hr style="border-top: 1px solid var(--border-color);">
            <p>Approx. 02:00 hrs, alarm raised near Eastern Gate. Patrols responded to find section of wooden palisade splintered inwards. Multiple large, canine tracks confirmed in mud leading towards Merchant Quarter.</p>
            <p>Evidence of forced entry (heavy claw marks, splintered doors) at three warehouses: Blackwood Textiles, Silverstream Provisions, and <span class="rollable-text" data-roll-id="full_rc_target" data-roll-dc="5" data-roll-success="[Insight: Crimson Reavers are known to use Silverstream Provisions as a drop point.]" data-roll-failure="[Insight: Standard merchant warehouse.]">Gull's Hoard Imports (known associate of Crimson Reaver pirates)</span>. Contents ransacked, specific inventory losses pending.</p>
            <p>Watch encountered at least four (4) large, bipedal lupine assailants (consistent with werewolf descriptions) near Silverstream Provisions. Engagement resulted in three guards sustaining claw injuries (non-life-threatening). One merchant (T. Gubbins) reported missing from his stall nearby, presumed taken by assailants.</p>
            <p>Assailants retreated eastward upon arrival of <span class="rollable-text" data-roll-id="full_rc_intervention" data-roll-dc="6" data-roll-success="[Insight: Mathis describes them as 'clad in black leather, armed with silvered blades', consistent with Veilwood security.]" data-roll-failure="[Insight: Intervention source unclear, described only as 'armed residents'.]">well-equipped residents emerging from vicinity of Veilwood Spa</span>. No assailant casualties confirmed. Silver residue found near retreat path.</p>
            <p><strong>Addendum (Guard Fennel):</strong> While investigating initial breach point, observed three figures (two human males - rough appearance, one tall equine humanoid) acting suspiciously near Gull's Hoard warehouse just *prior* to the main alarm. Figures departed hastily towards Veilwood district as watch approached. <span class="rollable-text" data-roll-id="full_rc_fennel_id" data-roll-dc="7" data-roll-success="[Insight: Fennel later tentatively ID'd one figure from sketches as resembling 'Mr. Ash', guest at Veilwood Spa.]" data-roll-failure="[Insight: Fennel could not positively identify the figures.]">Identification uncertain due to poor light and mist.</span></p>
            <p><strong>Disposition:</strong> Increased patrols. Investigation ongoing. Requesting assistance from Regal Magistrate re: lycanthrope jurisdiction.</p>
            <p style="text-align: right; margin-top: 1.5em;">Signed,</p>
            <p style="text-align: right; font-family: var(--note-font); font-size: 1.1em;">Sgt. Mathis</p>
        `
    },
    'item-teleportation-residue': {
        title: "Teleportation Residue",
        report: "Forensic Finding (Skye Lab Ref #SFK-AR-002): Analysis of dust collected from Defendant Miser's clothing cuffs and boot soles upon arrest revealed trace amounts of unique arcane residue. <span class=\"rollable-text\" data-roll-id=\"teleport_id\" data-roll-dc=\"7\" data-roll-success=\"[Insight: Signature contains complex spatial folding patterns and residual chroniton decay consistent with high-power, medium-range teleportation magic.]\" data-roll-failure=\"[Insight: Residue is generic Conjuration byproduct.]\">Residue consistent with Conjuration magic</span>.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Rakka's Signature & Timing]: Advanced analysis reveals the teleportation signature contains sub-harmonics matching known energy readings from Rakka's Temple nexus points. Furthermore, chroniton decay rate places the teleportation event approximately 1-2 hours *before* Miser's first confirmed sighting at Swiftsoul Station. This strongly supports the narrative that Miser was transported *to* Swiftsoul by Rakka (or using her methods) shortly before the incident, rather than arriving conventionally. <span class=\"rollable-text\" data-roll-id=\"teleport_forced\" data-roll-dc=\"8\" data-roll-success=\"[Insight: Faint traces of compulsion magic interwoven with the teleport signature suggest the transit may not have been entirely voluntary.]\" data-roll-failure=\"[Insight: No signs of coercion detected in the residue.]\">This raises questions about why Rakka sent him there and if his arrival was part of a setup</span>.",
        dc: 7,
        hasFullReport: true,
        documentStyle: 'document-style-lab',
        fullReportContent: `
            <div class="lab-report-header">
                <h4>Kingdom Forensic Arcane Labs - Swiftsoul Annex</h4>
                <p><strong>Report Ref:</strong> SFK-AR-002 | <strong>Case:</strong> 4739 (Miser) | <strong>Date Processed:</strong> Efferd 28, 1040BF</p>
                <p><strong>Analyst:</strong> Master Arcanist Theron (Consulting)</p>
            </div>
            <hr>
            <h5>Sample Summary:</h5>
            <ul>
                <li><strong>SFK-AR-002-A:</strong> Dust sample, Defendant Miser's boot soles.</li>
                <li><strong>SFK-AR-002-B:</strong> Dust sample, Defendant Miser's tunic cuffs.</li>
            </ul>
            <h5>Methodology:</h5>
            <p>Aetheric Particle Trace (APT), Chroniton Decay Spectrometry (CDS), Harmonic Resonance Scan (HRS).</p>
            <h5>Findings:</h5>
            <ol>
                <li><strong>Primary Signature:</strong> Both samples exhibit moderate concentrations of residual particles consistent with Conjuration (Teleportation Subtype) magic. Energy signature indicates medium-range transit (est. 50-150 miles).</li>
                <li><strong>Harmonic Resonance Scan (HRS):</strong> Signature contains unique sub-harmonic frequencies (<span class="rollable-text" data-roll-id="full_teleport_sig_match" data-roll-dc="7" data-roll-success="[Insight: Theron confirms 98% match to classified energy signatures logged near Rakasha Temple.]" data-roll-failure="[Insight: Signature unique but origin unknown.]">Ref #HRS-Rakka-Tmpl-01</span>) previously associated with anomalous arcane readings near Rakasha Temple region.</li>
                <li><strong>Chroniton Decay Spectrometry (CDS):</strong> Analysis of residual chronitons indicates teleportation event occurred approx. <span class="rollable-text" data-roll-id="full_teleport_timing" data-roll-dc="6" data-roll-success="[Insight: Window narrowed to 11:45 - 12:15 hrs, Efferd 26.]" data-roll-failure="[Insight: Timing estimate has wide margin of error.]">1.5 to 2.5 hours prior to defendant's apprehension time</span> (~22:30 hrs Eff 26). Estimated Time of Arrival: ~11:30 - 12:30 hrs Eff 26.</li>
                <li><strong>Anomalous Sub-Trace:</strong> Faint traces of Enchantment (Compulsion subtype) magic detected interwoven with the primary teleportation signature in Sample B (cuffs). <span class="rollable-text" data-roll-id="full_teleport_compulsion" data-roll-dc="8" data-roll-success="[Insight: Compulsion signature suggests subtle influence rather than overt mind control, possibly encouraging compliance or destination lock.]" data-roll-failure="[Insight: Enchantment trace likely unrelated contamination.]">Signature weak but distinct.</span></li>
            </ol>
            <h5>Conclusion (Arcanist Theron):</h5>
            <p>Defendant Miser was subjected to a medium-range teleportation effect originating from, or utilizing methods associated with, the Rakasha Temple region, arriving near Swiftsoul approximately 1.5-2.5 hours before his first sighting at the station concourse. Evidence of a subtle compulsion enchantment linked to the teleport warrants further investigation into the voluntary nature of this transit.</p>
            <hr>
            <p><em>Report End. Full spectral analysis charts appended (Classified Level III).</em></p>
        `
    },
    'item-horse-person-sketch': {
        title: "Horse Person Sketch",
        report: "Witness Addendum (Ravencreek Guard Fennel): Following the werewolf attack report, Guard Fennel provided a crude charcoal sketch of the 'tall equine humanoid' seen fleeing the warehouse area with suspected pirates. <span class=\"rollable-text\" data-roll-id=\"horse_sketch_features\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Sketch emphasizes figure's height, long face, and what looks like a bandolier.]\" data-roll-failure=\"[Insight: Sketch is very basic, lacking detail.]\">Sketch depicts a tall figure with horse-like head and sturdy build</span>.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Potential Associate Identification]: While crude, the sketch provides a visual of one of Miser's associates during the Ravencreek period. Cross-referencing with known underworld figures or mercenaries might yield identification. The 'horse person' race is uncommon but not unknown in the Midlands, often associated with plains nomads or specific mercenary companies. <span class=\"rollable-text\" data-roll-id=\"horse_sketch_link\" data-roll-dc=\"7\" data-roll-success=\"[Insight: Sketch bears resemblance to 'Hoof Gnash', an enforcer sometimes employed by the Sea Dogs cartel.]\" data-roll-failure=\"[Insight: No matches found in known associate databases.]\">Identifying this individual could clarify Miser's role in the Ravencreek mission and potentially link back to Rakka or the Sea Dogs</span>.",
        dc: 5,
        hasFullReport: false
    },
    'item-blood-vial-fragment': { // Already added, keeping as is
        title: "Chilled Blood Vial Fragment",
        report: "Sample (Found Item Log #FIL-SWK-092): A shard of thick, dark glass, unusually cold to the touch despite ambient temperature. Found near the entrance to the service corridor Miser initially fled into. Faint coppery smell noted. <span class=\"rollable-text\" data-roll-id=\"vial_origin\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Glass type matches specialized vials used in Fairth's Retreat for blood preservation.]\" data-roll-failure=\"[Insight: Common dark glass, possibly potion vial fragment.]\">Glass origin unknown</span>.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Vampire Link or Coincidence?]: The unnatural coldness and potential link to Fairth's Retreat suggest Vampire involvement nearby. Could be: 1) A vampire was present near the station around the time of the blast (witness? actor? victim?). 2) Discarded waste from a vampire passing through Swiftsoul. 3) <span class=\"rollable-text\" data-roll-id=\"vial_blood_type\" data-roll-dc=\"7\" data-roll-success=\"[Insight: Residual analysis indicates non-humanoid blood, possibly Lycanthrope.]\" data-roll-failure=\"[Insight: Residue too degraded for typing.]\">Item completely unrelated, coldness due to minor lingering cryo-magic</span>. Adds a potential Vampire element near the scene, complicating the narrative.",
        dc: 6,
        hasFullReport: false
    },
    'item-fairths-retreat-leaflet': { // Already added, keeping as is
        title: "Fairth's Retreat Leaflet",
        report: "Miscellaneous Document (Found Item Log #FIL-SWK-093): A slightly damp leaflet printed on expensive vellum, advertising 'Exclusive Nocturnal Excursions & Timeless Accommodations' at Fairth's Retreat. Found tucked behind a loose brick near Platform 3. <span class=\"rollable-text\" data-roll-id=\"leaflet_condition\" data-roll-dc=\"4\" data-roll-success=\"[Insight: Leaflet shows no signs of blast damage, suggesting placement *after* the explosion.]\" data-roll-failure=\"[Insight: Standard discarded leaflet.]\">Seems like discarded promotional material</span>.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Deliberate Misdirection or Signalling?]: Placement seems intentional, possibly after the blast. Could be: 1) Misdirection, pointing towards vampires. 2) A coded signal between Vampire agents or allies. 3) Simple coincidence, dropped by a traveler. <span class=\"rollable-text\" data-roll-id=\"leaflet_markings\" data-roll-dc=\"6\" data-roll-success=\"[Insight: A tiny bat symbol is pressed into the wax seal remnant on the back - a known marker for messages intended for Lord Sanguine's inner circle.]\" data-roll-failure=\"[Insight: No unusual markings found.]\">Its presence reinforces the possibility of Vampire faction activity connected to Swiftsoul Keep</span>.",
        dc: 5,
        hasFullReport: true, // ADDING FULL REPORT
        documentStyle: 'document-style-note', // Use note style, perhaps add 'fancy' class later
        fullReportContent: `
            <div class="note-page" style="background-color: #f0e8ff; border: 1px solid #483D8B; font-family: 'Garamond', serif;">
                 <h4 style="text-align: center; font-family: 'Trajan Pro', serif; color: #3a2d22; letter-spacing: 1px;">Fairth's Retreat</h4>
                 <p style="text-align: center; font-size: 0.9em; font-style: italic; color: #483D8B;">~ Where Eternity Lingers ~</p>
                 <hr style="border-top: 1px solid #483D8B;">
                 <p>Tired of the fleeting sun and the clamor of the mundane world? Seek refuge in the timeless elegance of Fairth's Retreat.</p>
                 <p>We offer discerning clientele:</p>
                 <ul>
                    <li style="padding-left: 15px; list-style: disc inside; margin-bottom: 5px;">Luxurious subterranean suites, shielded from the harsh glare of day.</li>
                    <li style="padding-left: 15px; list-style: disc inside; margin-bottom: 5px;">Exclusive nocturnal excursions into the moonlit Midlands (discretion assured).</li>
                    <li style="padding-left: 15px; list-style: disc inside; margin-bottom: 5px;">Access to our renowned cellars, featuring vintages aged for centuries.</li>
                    <li style="padding-left: 15px; list-style: disc inside; margin-bottom: 5px;">Personalized service catering to... unique dietary requirements.</li>
                 </ul>
                 <p><span class="rollable-text" data-roll-id="full_leaflet_contact" data-roll-dc="5" data-roll-success="[Insight: Small print mentions 'Inquire via coded message to Liaison Silas - Swiftsoul Docks'. Same name as Iron Fists contact?]" data-roll-failure="[Insight: Standard contact instructions.]">Inquire within select circles or leave appropriate signal at designated Dead Drops.</span></p>
                 <p style="text-align: center; font-size: 0.8em; margin-top: 1em;">*Membership by invitation or significant tribute only. The management reserves all rights.*</p>
                 <p style="text-align: right; margin-top: 1em;"><span class="rollable-text" data-roll-id="full_leaflet_seal" data-roll-dc="6" data-roll-success="[Insight: A tiny bat symbol is pressed into a faint wax residue here.]" data-roll-failure="[Insight: No seal or mark visible.]"><em>[Faint impression where a wax seal might have been]</em></span></p>
            </div>
        `
    },
    'item-chilled-silver-shards': { // Already added, keeping as is
        title: "Chilled Silver Shards",
        report: "Sample (Evidence Tag #SMPL-DV-002): Several small, sharp silver shards found embedded in a tree trunk near where Elder Meadowlight's staff fragment was recovered. Shards are unnaturally cold and resist warming. <span class=\"rollable-text\" data-roll-id=\"silver_shards_origin\" data-roll-dc=\"6\" data-roll-success=\"[Insight: Metallurgic analysis shows high purity silver, inconsistent with the staff's alloy. Matches silver used in blessed anti-vampire weaponry.]\" data-roll-failure=\"[Insight: Standard silver, possibly from broken jewelry.]\">Material appears to be standard silver</span>.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Anti-Vampire Activity Near Druid Scene?]: The specific silver type and lingering cold strongly suggest blessed anti-vampire weapons were recently used near the Druid Village death scene. This contradicts the simple 'Miser did it' narrative. Could mean: 1) Someone (not Miser) fought a vampire near Meadowlight's location. 2) Meadowlight himself used such weapons defensively. 3) <span class=\"rollable-text\" data-roll-id=\"silver_shards_embed\" data-roll-dc=\"7\" data-roll-success=\"[Insight: Embed angle suggests shards were fired *towards* Meadowlight's position, not away from it.]\" data-roll-failure=\"[Insight: Shards likely ricocheted or were incidental.]\">The shards are remnants of an unrelated conflict</span>. Significantly complicates the Druid Village death.",
        dc: 7,
        hasFullReport: false
    },
    'item-claw-marked-crate': { // Already added, keeping as is
        title: "Claw-Marked Crate Lid",
        report: "Miscellaneous Item (Found Item Log #FIL-P3-015): Lid fragment from a heavy wooden shipping crate, found splintered near the Platform 3 docking clamps. Exhibits several deep, parallel gouges inconsistent with standard cargo handling tools. <span class=\"rollable-text\" data-roll-id=\"crate_contents\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Faint smell of ozone and wet fur lingers on the wood.]\" data-roll-failure=\"[Insight: Crate appears empty, standard wood.]\">No identifying marks on crate itself</span>.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Werewolf Struggle at Platform 3?]: The deep gouges strongly resemble large claw marks, possibly Lycanthrope in origin. Their presence on Platform 3 near the time of Guild activity suggests: 1) The Guild's 'volatile cargo' involved a captured creature (werewolf?) that struggled. 2) A conflict between Guild members and werewolves occurred on the platform. 3) <span class=\"rollable-text\" data-roll-id=\"crate_claw_residue\" data-roll-dc=\"7\" data-roll-success=\"[Insight: Trace DNA analysis confirms Frostclaw werewolf fur caught in splinters.]\" data-roll-failure=\"[Insight: No biological residue found.]\">Marks are from mundane source (e.g., damaged loading machinery)</span>. Introduces potential Werewolf involvement directly at the station scene.",
        dc: 6,
        hasFullReport: false
    },
    'item-moonpetal-pollen': { // Already added, keeping as is
        title: "Moonpetal Pollen Sample",
        report: "Sample (Lab Ref #SFK-TX-002): Microscopic analysis of dust vacuumed from Defendant Miser's satchel lining revealed trace amounts of unusual pollen. <span class=\"rollable-text\" data-roll-id=\"pollen_id\" data-roll-dc=\"6\" data-roll-success=\"[Insight: Pollen identified as Moonpetal Bloom, a rare nocturnal flower blooming only under full moonlight near ancient stone circles, often used in Lycanthropic rituals.]\" data-roll-failure=\"[Insight: Common wildflower pollen, likely environmental contamination.]\">Pollen type initially unidentified</span>.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Link to Werewolf Rituals or Location?]: Moonpetal Bloom pollen strongly links Miser (or his belongings) to locations associated with werewolves, specifically places of ritual power. Could mean: 1) Miser visited such a location recently for unknown reasons. 2) He had contact with werewolves or items contaminated by them. 3) <span class=\"rollable-text\" data-roll-id=\"pollen_druid_link\" data-roll-dc=\"7\" data-roll-success=\"[Insight: Moonpetals sometimes grow near potent druidic sites like Veridian Grove, but rarely bloom there.]\" data-roll-failure=\"[Insight: Pollen could have blown in from anywhere in the Midlands.]\">He was framed by someone involved with werewolves who planted the pollen</span>. Adds a werewolf connection specifically to Miser, though the context is unclear.",
        dc: 7,
        hasFullReport: false
    },
    'item-torn-frostclaw-pelt': { // Already added, keeping as is
        title: "Torn Frostclaw Pelt Fragment",
        report: "Sample (Found Item Log #FIL-SC-016): A small piece of thick, greyish-white fur snagged on a protruding pipe in Service Corridor 7B (part of Miser's escape route). Fur texture and coloration consistent with known <span class=\"rollable-text\" data-roll-id=\"pelt_origin\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Identified by Regal Bestiary expert as Frostclaw Werewolf winter pelt.]\" data-roll-failure=\"[Insight: Common wolf or dog fur.]\">Midlands canine or lupine species</span>.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Werewolf Presence in Service Corridors]: Confirmed Frostclaw pelt fragment places a werewolf within the station's internal service corridors near the time Miser fled through them. Could mean: 1) Miser encountered a werewolf during his escape. 2) A werewolf was also using the service corridors, possibly pursuing or fleeing something itself. 3) <span class=\"rollable-text\" data-roll-id=\"pelt_struggle\" data-roll-dc=\"6\" data-roll-success=\"[Insight: Pelt shows signs of being forcibly torn, not shed naturally.]\" data-roll-failure=\"[Insight: Pelt fragment seems like normal shedding.]\">The Guild used werewolves as 'guard dogs' or muscle within the station's restricted areas</span>. Complicates the pursuit narrative and suggests other entities were moving unseen within the station.",
        dc: 6,
        hasFullReport: false
    },
    'item-guard-shift-change-log': { // Already added, keeping as is
        title: "Guard Shift Change Roster",
        report: "Official Document (Swiftsoul Station Security Office): Standard duty roster for Efferd 26th. Shows scheduled shift changes and assigned personnel for guard posts and patrols. <span class=\"rollable-text\" data-roll-id=\"roster_stonehand_shift\" data-roll-dc=\"4\" data-roll-success=\"[Insight: Log confirms Sgt. Stonehand officially ended his shift at 12:00 hrs and was not scheduled for duty again until Efferd 27th.]\" data-roll-failure=\"[Insight: Roster appears standard, no anomalies noted.]\">No apparent irregularities upon initial review</span>.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Stonehand Off-Duty During Override]: Cross-referencing with Station Log (item-station-log) confirms Sgt. Stonehand used his override key at ~13:45 while officially *off-duty*. This is a major procedural violation requiring explanation. Why was he at the station? Who authorized his off-duty access and key usage? <span class=\"rollable-text\" data-roll-id=\"roster_override_reason\" data-roll-dc=\"6\" data-roll-success=\"[Insight: No official reason logged for Stonehand's off-duty presence or override action. Highly irregular.]\" data-roll-failure=\"[Insight: Supervisors sometimes assist off-duty; perhaps undocumented.]\">This strongly suggests Stonehand was acting unofficially, possibly under duress or coercion (by the Guild?)</span>.",
        dc: 5,
        hasFullReport: true,
        documentStyle: 'document-style-log',
        fullReportContent: `
            <div class="schedule-header">
                 <h3>Swiftsoul Station Security - Duty Roster</h3>
                 <p><strong>Date:</strong> Efferd 26, 1040BF</p>
            </div>
            <hr>
            <table class="schedule-table">
                 <thead>
                     <tr><th>Time Slot</th><th>Post/Patrol</th><th>Scheduled Personnel</th><th>Notes</th></tr>
                 </thead>
                 <tbody>
                     <tr><td>06:00-12:00</td><td>Platform 1-2 Watch</td><td>Cpl. Mills, Gd. Finkle</td><td>Routine</td></tr>
                     <tr><td>06:00-12:00</td><td>Platform 3-4 Watch</td><td>Sgt. Stonehand, Gd. Tibbins</td><td>Routine</td></tr>
                     <tr><td>06:00-12:00</td><td>Concourse Patrol Alpha</td><td>Gd. Bolger</td><td>Routine</td></tr>
                     <tr><td>...</td><td>...</td><td>...</td><td>...</td></tr>
                     <tr><td>12:00-18:00</td><td>Platform 1-2 Watch</td><td>Cpl. Davis, Gd. Anya</td><td>Routine</td></tr>
                     <tr><td>12:00-18:00</td><td>Platform 3-4 Watch</td><td>Sgt. Reyes, Gd. Quill (Merchant Escort Duty)</td><td><span class="rollable-text" data-roll-id="full_roster_reyes" data-roll-dc="4" data-roll-success="[Insight: Reyes is noted for being meticulous; unlikely to tolerate unauthorized access.]" data-roll-failure="[Insight: Standard assignment.]">Normal Ops</span></td></tr>
                     <tr><td>12:00-18:00</td><td>Concourse Patrol Alpha</td><td>Gd. Markus</td><td>Routine</td></tr>
                     <tr><td>...</td><td>...</td><td>...</td><td>...</td></tr>
                     <tr><td><strong>OFF DUTY</strong></td><td><strong>Sgt. B. Stonehand</strong></td><td><strong>Shift End: 12:00 Eff 26</strong></td><td><strong>Next Shift: 06:00 Eff 27</strong></td></tr>
                 </tbody>
            </table>
            <hr>
            <p><em>Roster subject to emergency changes by Watch Commander Valerius only. All off-duty personnel require explicit authorization for station access.</em></p>
        `
    },
    'item-magistrates-warning-memo': { // Already added, keeping as is
        title: "Magistrate's Warning Memo",
        report: "Official Document Copy (Magistrate's Office Archives #MM-SWK-102): Memo from Regional Magistrate Vondar to Swiftsoul Station Command, dated Efferd 5th. Warns of 'credible intelligence regarding increased boldness of certain mercenary guilds' utilizing station facilities for 'undeclared cargo transit'. <span class=\"rollable-text\" data-roll-id=\"memo_guilds\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Memo specifically names the Iron Fists as primary concern.]\" data-roll-failure=\"[Insight: Memo refers generally to 'guilds'.]\">Urges increased vigilance and cargo inspection stringency</span>.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Forewarning Ignored?]: This memo confirms Station Command was officially warned about the specific type of activity (Guild smuggling) that appears central to this case weeks before the incident. Shows the Kingdom was aware of the risk posed by groups like the Iron Fists. Why wasn't security tightened? Was the warning ignored or deliberately circumvented (perhaps by compromised personnel like Stonehand)? <span class=\"rollable-text\" data-roll-id=\"memo_response\" data-roll-dc=\"6\" data-roll-success=\"[Insight: Station Master's reply acknowledges memo but cites 'manpower shortages' preventing full compliance.]\" data-roll-failure=\"[Insight: No record of Station Command response found.]\">This strengthens the argument that systemic failures or corruption allowed the incident to occur</span>.",
        dc: 6,
        hasFullReport: true,
        documentStyle: 'document-style-official',
        fullReportContent: `
            <div class="document-header">
                <h4 style="text-align: center;">Office of the Regional Magistrate - Midlands Sector</h4>
                <p style="text-align: center;">**INTERNAL MEMORANDUM - CONFIDENTIAL**</p>
             </div>
             <hr style="border-top: 1px solid var(--border-color);">
             <p><strong>TO:</strong> Watch Commander Valerius, Swiftsoul Station Command</p>
             <p><strong>FROM:</strong> Magistrate Elric Vondar</p>
             <p><strong>DATE:</strong> Efferd 5th, 1040BF</p>
             <p><strong>SUBJECT:</strong> Urgent Warning re: Mercenary Guild Activity & Undeclared Cargo</p>
             <hr style="border-top: 1px solid var(--border-color);">
             <p>Commander,</p>
             <p>Reliable intelligence gathered by my office indicates a marked increase in the operational boldness of certain mercenary organizations within Swiftsoul and its environs. Specifically, there is growing concern regarding the use of Station facilities, particularly cargo platforms, for the transit of undeclared, potentially hazardous, or illicit materials.</p>
             <p>The <span class="rollable-text" data-roll-id="full_memo_guild_mention" data-roll-dc="5" data-roll-success="[Insight: Memo clearly states '...the Iron Fists chapter under Commander G...'.]" data-roll-failure="[Insight: Phrase is 'certain organizations with Guild ties'.]">organization known as the Iron Fists</span> has been repeatedly implicated in reports concerning questionable shipments and the intimidation of Station personnel.</p>
             <p>While I appreciate the complexities of managing a facility like Swiftsoul Keep, the potential risks associated with unchecked Guild activity – particularly involving volatile substances or creatures – cannot be overstated, especially given the current regional climate.</p>
             <p>Therefore, I strongly urge you to implement immediate measures to increase the stringency of cargo inspections, verify Guild authorizations rigorously, and enhance surveillance on all platforms, especially those frequently utilized by mercenary charters. <span class="rollable-text" data-roll-id="full_memo_recommend" data-roll-dc="6" data-roll-success="[Insight: Recommends random inspections even for Guild-marked cargo.]" data-roll-failure="[Insight: Standard security recommendations.]">Report any suspicious activity directly to my office without delay</span>.</p>
             <p>Ensure your personnel understand the gravity of this situation. Laxity will invite disaster.</p>
             <p style="text-align: right; margin-top: 1.5em;">By Order of the Magistrate,</p>
             <p style="text-align: right; font-family: 'IM Fell English SC', serif; font-size: 1.1em;">Elric Vondar</p>
        `
    },
    'item-kings-decree-tax-hike': { // Already added, keeping as is
        title: "King's Decree (Tax Hike)",
        report: "Official Document Snippet (Royal Courier Dispatch #RCD-M-988): Fragment of a recent Royal Decree disseminated throughout the Midlands. Announces a significant emergency tariff increase on the transport of 'volatile alchemical reagents, exotic beasts, and artifacts of questionable provenance'. <span class=\"rollable-text\" data-roll-id=\"tax_hike_date\" data-roll-dc=\"4\" data-roll-success=\"[Insight: Decree effective date was Efferd 20th, less than a week before the incident.]\" data-roll-failure=\"[Insight: Decree date unclear, seems recent.]\">Effective date specified</span>.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Motive for Smuggling/Guild Action]: This decree directly impacts the type of cargo seemingly aboard 'The Swift Quill' (volatile reagents). The sudden, steep tax hike provides a clear economic motive for groups like the Iron Fists to bypass official channels and smuggle such goods. <span class=\"rollable-text\" data-roll-id=\"tax_hike_guild_response\" data-roll-dc=\"6\" data-roll-success=\"[Insight: Intercepted Guild chatter mentions 'King's squeeze' necessitating 'creative logistics'.]\" data-roll-failure=\"[Insight: No known Guild reaction to the decree.]\">This strengthens the theory that the Platform 3 operation was illicit smuggling prompted by this new financial pressure, making a scapegoat necessary if things went wrong</span>.",
        dc: 5,
        hasFullReport: false
    },
    'item-off-duty-armor-scuff': { // Already added, keeping as is
        title: "Off-Duty Armor Scuff Mark",
        report: "Forensic Note (Skye Lab Ref #SFK-MA-003): Analysis of Sgt. Stonehand's personal effects (confiscated post-incident) included his off-duty leather brigandine. Noted unusual metallic scuff marks on the left shoulder pauldron. <span class=\"rollable-text\" data-roll-id=\"scuff_comparison\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Scuff composition matches the specific steel alloy used in Platform 3 maintenance grating.]\" data-roll-failure=\"[Insight: Scuff marks consistent with general wear and tear.]\">Marks initially deemed incidental</span>.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Stonehand Physically Present on Platform 3?]: If the scuff mark composition matches Platform 3 grating, it places Stonehand physically *on* Platform 3 near the time he was officially off-duty and near the time of the Guild's activity. This contradicts any potential claim he simply authorized the override remotely or wasn't involved hands-on. <span class=\"rollable-text\" data-roll-id=\"scuff_location\" data-roll-dc=\"6\" data-roll-success=\"[Insight: Scuff location on shoulder suggests forceful contact, like being pushed against or falling onto the grating.]\" data-roll-failure=\"[Insight: Scuff location unremarkable.]\">Could indicate he was directly supervising, participating in, or potentially struggling during the Guild's 'inspection'</span>.",
        dc: 6,
        hasFullReport: false
    },
    'item-iron-fist-recruitment-poster': { // Already added, keeping as is
        title: "Iron Fist Recruitment Poster",
        report: "Miscellaneous Document (Found Item Log #FIL-SWK-094): Standard Iron Fists recruitment poster ('Seeking Able Bodies - Good Pay, Steady Work!') found crumpled near the blast epicenter. Features generic artwork of armored warriors. <span class=\"rollable-text\" data-roll-id=\"poster_condition\" data-roll-dc=\"3\" data-roll-success=\"[Insight: Poster shows minor heat warping but no direct scorch marks, possibly shielded.]\" data-roll-failure=\"[Insight: Standard discarded poster.]\">Appears undamaged by the blast itself</span>.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Coded Enforcer Mark]: Close examination reveals a tiny, near-invisible secondary mark pressed into the parchment near the Guild emblem: a stylized 'cracked fist'. This specific mark is not used on public posters but is known from internal Guild documents as a sigil identifying members of the 'Iron Enforcers' – Commander G's elite internal discipline/enforcement squad. <span class=\"rollable-text\" data-roll-id=\"poster_enforcer_link\" data-roll-dc=\"7\" data-roll-success=\"[Insight: Presence of Enforcer sigil suggests Guild leadership was directly involved or monitoring the Platform 3 operation.]\" data-roll-failure=\"[Insight: Mark could be printer's error or unrelated.]\">Its presence suggests Guild leadership or internal security was directly involved or present near the scene, not just rank-and-file members</span>.",
        dc: 7,
        hasFullReport: false
    },
    'item-thieves-guild-warning': { // Already added, keeping as is
        title: "Thieves' Guild Warning (Druid Area)",
        report: "Observation Record (Constable Hemlock Field Notes Addendum): While re-examining the area near Veridian Grove where Miser fled, Constable Hemlock noted a fresh carving on an old waystone: symbols vaguely resembling Thieves' Cant. <span class=\"rollable-text\" data-roll-id=\"cant_druid_translation\" data-roll-dc=\"7\" data-roll-success=\"[Insight: Partial translation: 'Iron trespasses on Green path... Shadow watches... Keep clear...']\" data-roll-failure=\"[Insight: Symbols unclear, possibly druidic markings.]\">Symbols unrecognised by Hemlock</span>.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Guild Conflict Near Druid Village]: Translation indicates Thieves' Guild warning *other thieves* about Iron Fists ('Iron') interfering near Druid territory ('Green path'). Implies: 1) Both Guilds have operations or interests near Veridian Grove. 2) There's active conflict or tension between them in that specific area. 3) Thieves' Guild was observing ('Shadow watches') activities there around the time of Meadowlight's death. <span class=\"rollable-text\" data-roll-id=\"cant_druid_timing\" data-roll-dc=\"6\" data-roll-success=\"[Insight: Wood analysis indicates carving was made within 12 hours *after* Meadowlight's death.]\" data-roll-failure=\"[Insight: Carving appears weathered, could be old.]\">This could link the Iron Fists (and potentially Wario/cargo) to the Druid Village events, separate from Miser's flight</span>.",
        dc: 7,
        hasFullReport: false
    },
    'item-coinsouls-gambling-debt': { // Already added, keeping as is
        title: "Coinsoul's Gambling Debt Note",
        report: "Document Fragment (Recovered from Guild Office Trash Bin #GOTB-001): Torn betting slip and crumpled note fragment. Betting slip shows large losing bet on 'Goblin Pit Fights'. Note fragment reads: '...Kyle, final warning. Shark wants his gold by month's end, or kneecaps. No excuses.' <span class=\"rollable-text\" data-roll-id=\"debt_amount_coinsoul\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Amount on betting slip is 500 gold, a huge sum for a Guild bursar.]\" data-roll-failure=\"[Insight: Amount illegible.]\">Amount unclear</span>.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Coinsoul's Motive for Complicity?]: Confirms Kyle Coinsoul, the Guild member Miser interacted with, was under extreme financial pressure from dangerous loan sharks ('Dockside Shark' is likely 'Fingers' Malone's crew or similar). This provides a strong motive for Coinsoul to cooperate with risky or illicit Guild operations (like the Platform 3 smuggling) for extra pay, or to potentially take bribes to look the other way or facilitate access (like using the override key). <span class=\"rollable-text\" data-roll-id=\"debt_collector_link\" data-roll-dc=\"7\" data-roll-success=\"[Insight: Handwriting on note matches known samples from 'Knuckles' Brannigan, a known enforcer for the Dockside Sharks.]\" data-roll-failure=\"[Insight: Handwriting generic.]\">Makes him a potentially compromised link in the Guild chain</span>.",
        dc: 6,
        hasFullReport: false
    },
    'item-commander-g-travel-log': { // Already added, keeping as is
        title: "Commander G's Official Travel Log",
        report: "Official Document Copy (Iron Fists HQ Records, Subpoenaed): Commander G's official itinerary for the week including Efferd 26th. Lists scheduled inspection tour of Iron Fists border garrisons far south of Swiftsoul Keep. <span class=\"rollable-text\" data-roll-id=\"g_log_signoff\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Log entries signed off by G's adjutant, not G herself. Adjutant known to be fiercely loyal.]\" data-roll-failure=\"[Insight: Log appears complete and properly authorized.]\">No entries mention Swiftsoul or related operations</span>.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Official Alibi vs. Reality?]: The official log provides Commander G with an alibi, placing her far from Swiftsoul during the incident. However, this contradicts the potential signature matches on the Communique and Wanted Poster (-G). Suggests: 1) The '-G' signatures are forgeries or unrelated. 2) G delegated the Swiftsoul operation (perhaps to XO?) while maintaining official distance. 3) <span class=\"rollable-text\" data-roll-id=\"g_log_discrepancy\" data-roll-dc=\"7\" data-roll-success=\"[Insight: Separate confidential informant report places G's personal airship docked *discreetly* at a private sky-port near Swiftsoul on Efferd 26th.]\" data-roll-failure=\"[Insight: No evidence contradicts the official travel log.]\">The official travel log is falsified cover for her actual movements</span>. Creates doubt about G's true location and level of direct involvement.",
        dc: 7,
        hasFullReport: true,
        documentStyle: 'document-style-log',
        fullReportContent: `
            <div class="log-entry-header">
                <h3>Iron Fists - Swiftsoul Chapter - Commander's Itinerary</h3>
                <p><strong>Subject:</strong> Commander 'G' | <strong>Period:</strong> Efferd 22nd - Efferd 28th, 1040BF</p>
            </div>
            <hr>
            <pre class="log-text">
**Efferd 22:** Depart Swiftsoul HQ. Travel via Command Airship 'Iron Resolve' to Southern Border Post - Fort Gritstone. ETA 18:00.
             SIGNED: Adjutant Krell

**Efferd 23:** Inspect Fort Gritstone defenses. Review garrison readiness reports. Address troops.
             SIGNED: Adjutant Krell

**Efferd 24:** Travel Fort Gritstone to Blackwater Crossing outpost. Inspect river patrol status. Meet with local informants.
             SIGNED: Adjutant Krell

**Efferd 25:** Observe Blackwater Crossing training exercises. Tactical review meeting with outpost Captain. <span class="rollable-text" data-roll-id="full_g_log_comm" data-roll-dc="6" data-roll-success="[Insight: No outgoing command communiques logged this day, unusual for G during inspections.]" data-roll-failure="[Insight: Routine inspection day.]">(Attended Wario Funeral via Scrying Orb - Logged Separately)</span>
             SIGNED: Adjutant Krell

**Efferd 26:** **Scheduled:** Travel Blackwater Crossing to Iron Pass Citadel. Strategic planning session re: Werewolf pack movements. <span class="rollable-text" data-roll-id="full_g_log_anomaly" data-roll-dc="7" data-roll-success="[Insight: Citadel log confirms G's arrival was delayed until *late evening*, citing 'unforeseen atmospheric disturbances' disrupting airship travel - suspicious explanation.]" data-roll-failure="[Insight: Standard travel day.]">ETA 16:00.</span>
             SIGNED: Adjutant Krell

**Efferd 27:** Inspect Iron Pass Citadel facilities. Finalize border security adjustments. Prepare return leg.
             SIGNED: Adjutant Krell

**Efferd 28:** Depart Iron Pass Citadel. Return to Swiftsoul HQ. ETA 19:00.
             SIGNED: Adjutant Krell
            </pre>
            <hr>
            <p><em>Itinerary subject to change based on operational necessity. All deviations require Command Authorization.</em></p>
        `
    },
    'item-greasy-wrench': { // Already added, keeping as is
        title: "Greasy Wrench",
        report: "Miscellaneous Tool (Found Item Log #FIL-P3-017): An unusually heavy, high-quality adjustable wrench found lying near the docking clamps of Platform 3. Covered in thick grease and emits a <span class=\"rollable-text\" data-roll-id=\"wrench_smell\" data-roll-dc=\"4\" data-roll-success=\"[Insight: Smell confirmed as pungent garlic mixed with ozone.]\" data-roll-failure=\"[Insight: Standard mechanical grease smell.]\">faint, pungent odor</span>.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Wario's Tool?]: The combination of high quality (possibly Gnomish make), grease, and distinct garlic odor strongly points to Wario. Standard station maintenance crews use lower quality tools and different lubricants. Finding this near the docking clamps suggests Wario (or an associate using his tools) may have been physically present and working on the blimp or platform mechanisms shortly before or during the incident. <span class=\"rollable-text\" data-roll-id=\"wrench_markings\" data-roll-dc=\"6\" data-roll-success=\"[Insight: Tiny 'W' crudely scratched near the adjustment screw.]\" data-roll-failure=\"[Insight: No identifying marks found.]\">Could be linked to sabotage or modification of the clamps or blimp</span>.",
        dc: 5,
        hasFullReport: false
    },
    'item-clockwork-bird-remains': { // Already added, keeping as is
        title: "Crushed Clockwork Bird",
        report: "Miscellaneous Item (Found Item Log #FIL-SC-018): The crushed remains of a small, intricate brass bird, found in Service Corridor 7B near Miser's escape route. <span class=\"rollable-text\" data-roll-id=\"bird_mechanism\" data-roll-dc=\"6\" data-roll-success=\"[Insight: Internal mechanism uses miniature gears similar to the one found in Druid Village (item-clockwork-gear). Likely Gnomish clockwork.]\" data-roll-failure=\"[Insight: Mechanism too damaged for analysis.]\">Mechanism appears complex but broken</span>.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Wario's Scout/Messenger?]: The sophisticated clockwork design, coupled with the gear similarity, strongly suggests this was one of Wario's devices – possibly a scout, messenger, or remote trigger. Its presence in the service corridor indicates Wario's tech was active inside the station infrastructure during Miser's flight. Was it observing Miser? Guiding him? Or part of a separate operation? <span class=\"rollable-text\" data-roll-id=\"bird_damage\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Damage consistent with being stepped on forcefully.]\" data-roll-failure=\"[Insight: Damage seems random crushing.]\">Its destruction might be accidental or deliberate silencing</span>.",
        dc: 7,
        hasFullReport: false
    },
    'item-faded-garlic-print': { // Already added, keeping as is
        title: "Faded Garlic Handprint",
        report: "Forensic Finding (Skye Lab Ref #SFK-LP-005): Latent print analysis on the *interior* fabric near the cut edge of the 'Swift Quill' cargo hatch revealed a partial, faded handprint. <span class=\"rollable-text\" data-roll-id=\"print_substance\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Chemical analysis confirms residue is primarily grease mixed with trace amounts of Allium Sativum (garlic) oil.]\" data-roll-failure=\"[Insight: Standard grease residue, common on cargo hatches.]\">Substance identified as common grease</span>.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Wario Inside the Blimp?]: A greasy handprint smelling strongly of garlic on the *inside* of the cut hatch is highly indicative of Wario. It suggests he (or someone handling his tools/items) was *inside* the cargo hold and potentially cut their way out, or accessed the cargo from within, shortly before the explosion. <span class=\"rollable-text\" data-roll-id=\"print_timing\" data-roll-dc=\"6\" data-roll-success=\"[Insight: Print degradation suggests placement within hours before the explosion.]\" data-roll-failure=\"[Insight: Print age indeterminate.]\">This contradicts the narrative of an external blast causing all damage and directly places Wario physically involved with the blimp's cargo area</span>.",
        dc: 7,
        hasFullReport: false
    },
    'item-miser-landlord-eviction': { // Already added, keeping as is
        title: "Miser's Eviction Notice",
        report: "Document (Recovered from Miser's Satchel #E4739-DOC-02): Formal notice of eviction addressed to A. Miser from 'Veilwood Spa'. Cites non-payment of rent for two consecutive months. <span class=\"rollable-text\" data-roll-id=\"eviction_date\" data-roll-dc=\"4\" data-roll-success=\"[Insight: Notice requires premises vacated by Efferd 27th - the day after the incident.]\" data-roll-failure=\"[Insight: Standard eviction notice timing.]\">Requires premises to be vacated promptly</span>.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Extreme Desperation Confirmed]: This confirms Miser was facing imminent homelessness immediately following the date of the incident. Coupled with the Sea Dog debt notice, it paints a picture of absolute financial desperation. This level of pressure makes it far more plausible that he would accept a high-risk, possibly illicit, job from the Iron Fists out of necessity, rather than instigating mass murder for unclear reasons. <span class=\"rollable-text\" data-roll-id=\"eviction_landlord_notes\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Landlord's personal note attached mentions Miser seemed 'spooked' and 'expecting trouble' in the days prior.]\" data-roll-failure=\"[Insight: No additional notes from landlord.]\">Supports the defense narrative of Miser being a desperate pawn</span>.",
        dc: 5,
        hasFullReport: true, // ADDING FULL REPORT
        documentStyle: 'document-style-official water-stained',
        fullReportContent: `
            <div class="document-header water-stained" style="border: 1px solid #8B4513; background: #f5e5c5;">
                 <h4 style="text-align: center; font-family: 'IM Fell English SC', serif;">NOTICE TO VACATE PREMISES</h4>
                 <p style="text-align: center; font-size: 0.9em;">Veilwood Spa - Swiftsoul Lower District</p>
            </div>
            <hr style="border-top: 1px solid #8B4513;">
            <p><strong>Tenant:</strong> Miser, Archie (Room 4B)</p>
            <p><strong>Date of Notice:</strong> Efferd 24th, 1040BF</p>
            <p><strong>Subject:</strong> Termination of Tenancy Agreement due to Breach (Non-Payment)</p>
            <hr style="border-top: 1px solid #8B4513;">
            <p>Mr. Miser,</p>
            <p>This notice serves to formally inform you that your tenancy agreement for Room 4B at Veilwood Spa is hereby TERMINATED, effective immediately, due to continued failure to render payment for services rendered (lodging fees).</p>
            <p>Records indicate outstanding arrears for the months of Prahos and Efferd, 1040BF. Multiple verbal reminders have yielded no recompense.</p>
            <p>You are required to vacate the premises and remove all personal belongings no later than <strong style="color: #8B0000;">Midday, Efferd 27th, 1040BF</strong>. Failure to comply by this deadline will result in the initiation of forceful removal procedures by appointed agents, and your remaining possessions will be disposed of at your expense.</p>
            <p><span class="rollable-text" data-roll-id="full_eviction_deposit" data-roll-dc="4" data-roll-success="[Insight: Notice states the meagre security deposit has already been forfeit against arrears.]" data-roll-failure="[Insight: Standard deposit clause.]">Your security deposit has been applied against the outstanding balance, which remains substantial.</span></p>
            <p>This establishment regrets the necessity of this action.</p>
            <p style="text-align: right; margin-top: 1.5em;">Sincerely,</p>
            <p style="text-align: right; font-family: var(--note-font); font-size: 1.2em;">B. Grumblejack</p>
            <p style="text-align: right; font-size: 0.8em;">(Proprietor)</p>
            <p style="border-top: 1px dashed #8B4513; margin-top: 1em; padding-top: 0.5em; font-size: 0.9em; font-style: italic;" class="rollable-text" data-roll-id="full_eviction_note" data-roll-dc="5" data-roll-success="[Insight: Reads: 'Archie - Seemed jumpier than usual last few days. Asked if I'd seen anyone watching the place. Said he was expecting trouble. Hope he finds somewhere safe. -B.G.']" data-roll-failure="[Insight: No additional handwritten notes.]"><i>[Handwritten Note Below Signature: Illegible scrawl]</i></p>
        `
    },
    'item-failed-spell-component': { // Already added, keeping as is
        title: "Cracked Focusing Crystal",
        report: "Miscellaneous Item (Recovered from Miser's Satchel #E4739-CMP-01): A small quartz crystal, typically used for focusing non-elemental magic (e.g., Divination, Illusion). Exhibits a significant internal fracture and faint discoloration. <span class=\"rollable-text\" data-roll-id=\"crystal_type\" data-roll-dc=\"5\" data-roll-success=\"[Insight: Crystal type identified as 'Scryer's Shard', primarily used for short-range divination or communication spells.]\" data-roll-failure=\"[Insight: Common low-grade quartz crystal.]\">Not suitable for Evocation magic</span>.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Attempted Different Magic?]: Finding a cracked Divination/Illusion focus, rather than fire components, in Miser's possession is curious. Could indicate: 1) He was attempting to scry, communicate, or cast illusions shortly before/during the incident, possibly related to the 'package' or contacting allies (Druids?). 2) The crystal cracked due to magical feedback or stress (nearby ward failure? EMP?). 3) <span class=\"rollable-text\" data-roll-id=\"crystal_damage_cause\" data-roll-dc=\"7\" data-roll-success=\"[Insight: Fracture pattern consistent with sudden arcane overload, possibly from attempting to cast through interference or jamming.]\" data-roll-failure=\"[Insight: Crystal likely cracked from physical impact.]\">It's an old, unrelated broken component</span>. Hints that Miser's actions might have involved more than just the alleged Fireball.",
        dc: 6,
        hasFullReport: false
    },
    'item-note-from-elara': { // Already added, keeping as is
        title: "Note From 'Elara'",
        report: "Document (Recovered from Miser's Satchel #E4739-DOC-03): Small, neatly folded note written on simple parchment. Reads: 'Archie - Meet me Veridian Grove shrine, sunset Efferd 26th. Urgent. Concerns shared interests. - Elara'. <span class=\"rollable-text\" data-roll-id=\"note_elara_id\" data-roll-dc=\"4\" data-roll-success=\"[Insight: Handwriting matches samples from Healer Elara Meadowlight at Swiftsoul Infirmary.]\" data-roll-failure=\"[Insight: Handwriting neat but non-distinctive.]\">Sender 'Elara' unidentified</span>.",
        hiddenDetails: "[ROLL SUCCESS - Defense Analysis: Pre-Arranged Druid Meeting]: This note confirms Miser had a pre-arranged, potentially non-hostile meeting scheduled with an 'Elara' at the Druid Grove *before* the station incident occurred. This contradicts the prosecution's implication that he fled there randomly or only to harm Elder Rowan. Who is Elara? (Could be the Elder, the Healer from the medical report, or another druid). What 'shared interests'? (<span class=\"rollable-text\" data-roll-id=\"note_elara_interest\" data-roll-dc=\"6\" data-roll-success=\"[Insight: Miser's ledger mentions 'Druid Contact Necessary if FG double-cross suspected'. Was Elara this contact?]\" data-roll-failure=\"[Insight: 'Shared interests' likely refers to mundane local matters.]\">Could relate to the 'Quill cargo' contingency in Miser's ledger?</span>). Significantly alters the context of his presence in Veridian Grove.",
        dc: 5,
        hasFullReport: true, // ADDING FULL REPORT
        documentStyle: 'document-style-note',
        fullReportContent: `
            <div class="note-page" style="background: #e8f4e9; border: 1px solid #5a7a5a;">
                 <p style="font-family: 'Crimson Text', serif; font-size: 1.1em; margin-bottom: 1em; text-align: center;">***</p>
                 <p>Archie -</p>
                 <p>Meet me Veridian Grove shrine, sunset Efferd 26th.</p>
                 <p>Urgent. Concerns shared interests.</p>
                 <p style="text-align: right; margin-top: 1.5em;">- Elara</p>
                 <p style="font-size: 0.8em; text-align: center; margin-top: 2em; color: #5a7a5a;"><i>(<span class="rollable-text" data-roll-id="full_note_elara_detail" data-roll-dc="5" data-roll-success="[Insight: Faint indentation of a pressed leaf visible on parchment.]" data-roll-failure="[Insight: Parchment is plain.]">Please be discreet.</span>)</i></p>
            </div>
        `
    }
    // End of NEW Relevant Worldbuilding Evidence Items

} // Closing evidence object
}; // Closing caseData export