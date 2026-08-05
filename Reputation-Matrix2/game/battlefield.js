import { LORE_DATA } from '../app/core/lore.js';
import { FACTION_COLORS } from './factions/faction-colors.js';
import { CALENDAR_DATA, CURRENT_GAME_DATE, getDynamicTimestamp } from '../data/world/calendar.js';
import { STORY_ARCS, getRumorsByArc } from '../app/core/lore.js';

// ============================================================================
// CONFLICT METADATA
// ============================================================================

export const CONFLICT_DETAILS = {
    
"Isle Delfino Conflict": {
    summary: "A rapid destabilization of the tropical resort island resulting in the expulsion of the Mushroom Regency.",
    startYear: 1040,
    status: "active",
    rootCause: "Regency tax collection attempts on Noki shellfish triggering a cascade of independence movements and Koopa intervention.",
    majorPhases: [
        { name: "The Tribute Refusal (Day 12-14)", description: "Noki Bay refuses Regency tax collectors. Skirmishes begin." },
        { name: "The Three-Front War (Day 15-18)", description: "Pianta Village secedes. Koopa Troop enters the theater." },
        { name: "The Alliance (Day 20+)", description: "Noki and Koopa forces ally to expel Regency naval presence." }
    ],
    keyFactions: ['mushroom_regency', 'koopa_troop', 'noki_shellfish', 'pianta_syndicate'],
    estimatedCasualties: "Low mortality, high property damage to resorts"
},    
    "Mushroom Kingdom Civil War": {
        summary: "A 45-year conflict sparked by the assassination of Princess Peach, with no end in sight.",
        startYear: 955,
        status: "active",
        rootCause: "The assassination of Princess Peach in 955 created a power vacuum that shattered the kingdom into warring factions.",
        majorPhases: [
            { name: "Initial Chaos (955-960)", description: "Immediate aftermath of assassination. Multiple claimants to power." },
            { name: "Koopa Intervention (960-1000)", description: "Bowser's forces exploit the chaos, launching two major invasions." },
            { name: "Stalemate Era (1000-1035)", description: "Grinding attrition as factions entrench and borders solidify." },
            { name: "Fawful's Rise (1035-Present)", description: "New technological faction disrupts the balance of power." }
        ],
        keyFactions: ['mushroom_regency', 'peach_loyalists', 'koopa_troop', 'fawfuls_furious_freaks'],
        estimatedCasualties: "400,000+ military and civilian deaths over 45 years"
    },
    "Kong-Kremling Cold War": {
        summary: "Decades of espionage and proxy conflicts between DK Island's two dominant powers, now erupting into open hostility.",
        startYear: 1010,
        status: "active",
        rootCause: "Competition for DK Island's resources and historical enmity between the Kong and Kremling species.",
        majorPhases: [
            { name: "Hot War Period (1010-1025)", description: "Open conflict including the famous banana hoard raids." },
            { name: "Armistice (1025-1040)", description: "Uneasy peace maintained through mutual exhaustion." },
            { name: "Cold War Heating (1040)", description: "Espionage, assassination plots, and the bug discovery." }
        ],
        keyFactions: ['dk_crew', 'kremling_krew'],
        estimatedCasualties: "Unknown - both sides suppress casualty figures"
    },
    "Raventree Manor Crisis": {
        summary: "A supernatural containment crisis at a haunted mansion that has drawn in multiple factions.",
        startYear: 1040,
        status: "active",
        rootCause: "The awakening of dormant supernatural entities within Raventree Manor, possibly triggered by the party's arrival.",
        majorPhases: [
            { name: "Discovery (Day 15-16)", description: "Party enters manor, encounters Oracle and initial manifestations." },
            { name: "Escalation (Day 17-19)", description: "Mirror monsters, wraiths, and temporal anomalies multiply." },
            { name: "Convergence (Day 20-21)", description: "Full supernatural breach. Legion and Mages Guild intervene physically. Timelines destabilize." }
        ],
        keyFactions: ['liberated_toads', 'iron_legion', 'mages_guild', 'raventree_curse'],
        estimatedCasualties: "Dozens of toads, multiple Legion agents, unknown supernatural entities"
    },
    "Vigilance Crew Incidents": {
        summary: "The ongoing adventures and conflicts surrounding the airship Vigilance and its liberator crew.",
        startYear: 1040,
        status: "active",
        rootCause: "The party's seizure of the toad-trafficking airship created instant enemies and responsibilities.",
        majorPhases: [
            { name: "Liberation (Day 4-5)", description: "Seizure of the Vigilance from X.O." },
            { name: "Hunted (Day 11-20)", description: "Pursued by Crimson Fleet and Iron Legion. Ship captured." },
            { name: "The Purge (Day 21-Present)", description: "Order 120 issued. Total war between Legion and Liberated Toads." }
        ],
        keyFactions: ['liberated_toads', 'crimson_fleet', 'iron_legion'],
        estimatedCasualties: "Estimated 70+ across all incidents"
    },
    "The Dragon Conspiracy": {
        summary: "A covert operation revealing that the Dragon-Empire war is fabricated.",
        startYear: 1040,
        status: "active",
        rootCause: "The discovery that Dragons are being controlled by sonic frequencies to stage false conflicts.",
        majorPhases: [
            { name: "Revelation (Day 21)", description: "Robinson discovers the truth at Dragon Mountain." },
            { name: "Capture (Day 21)", description: "Robinson and the Dragon taken to Aegis Command." }
        ],
        keyFactions: ['iron_legion', 'dragons', 'regal_empire'],
        estimatedCasualties: "Unknown"
    },
// Add to CONFLICT_DETAILS
"The Aegis Uprising": {
    summary: "A massive, coordinated prison break within the Regal Empire's primary processing facility.",
    startYear: 1040,
    status: "active",
    rootCause: "The enactment of Order 120 (execution of toads) and the discovery of 'Bio-Fuel' experimentation.",
    majorPhases: [
        { name: "The Trojan Speaker (Day 18-21)", description: "Speaker Rivers allows himself to be captured to plant a digital virus." },
        { name: "The Great Riot (Day 21)", description: "150 prisoners use Mini-Mushrooms and internal sabotage to breach the fortress." },
        { name: "The Midlands Trek (Day 22-Present)", description: "Escaped toads navigate the hostile Regal Empire to reach the border." }
    ],
    keyFactions: ['iron_legion', 'liberated_toads', 'noki_shellfish'],
    estimatedCasualties: "40+ Legionnaires, 34 Toads missing/displaced"
},    

"The Primordial Wyrm Crisis": {
    summary: "An existential threat to all kingdoms triggered by Kamek's betrayal and awakening of an ancient entity imprisoned beneath the Valley of Bowser.",
    startYear: 1040,
    endYear: 1040,
    status: "resolved",
    rootCause: "Kamek's ambition to seize power during Bowser's absence led him to excavate and breach the ancient prison of the Primordial Wyrm—an entity that predates the Stars themselves.",
    majorPhases: [
        { name: "The Excavation (Day 18-21)", description: "Kamek initiates 'reconstruction project' as cover for excavation of ancient prison. Workers report unexplained energy drain." },
        { name: "The Awakening (Day 22)", description: "Kamek's ritual circle breaches the first seal. The Wyrm begins awakening. 377 workers killed or corrupted. 23 escape through old Krew tunnels." },
        { name: "The Resistance Forms (Day 23)", description: "Survivors rally at ancient safehouse. Hammer Bro Sergeant assumes field command per Bowser's orders. Coalition talks begin." },
        { name: "The Rescue (Day 24)", description: "47 additional survivors extracted from bunkers. Total Resistance strength reaches 68. Anchor crystal locations discovered." },
        { name: "The Seven Seals Campaign (Day 25-27)", description: "Coordinated assaults on seven anchor crystals. Iron Legion and Mushroom Regency join coalition. Multiple heroic sacrifices." },
        { name: "The Fall of Kamek (Day 27)", description: "Final anchor destroyed. Wyrm re-imprisoned. Kamek captured and sentenced to eternal imprisonment." },
        { name: "The King Returns (Day 28-29)", description: "Bowser arrives to find kingdom saved by his own workers and soldiers. Reconstruction begins under new leadership." }
    ],
    keyFactions: ['koopa_troop', 'koopa_resistance', 'magikoopa_council', 'iron_legion', 'mushroom_regency', 'primordial_wyrm'],
    estimatedCasualties: "348 Koopa forces KIA (including corrupted), ~50 corrupted troops destroyed, 4 Iron Legion KIA. Significant property damage throughout the Valley.",
    historicalSignificance: "The crisis revealed the true purpose of the Koopa Dynasty—guardians of the Wyrm's prison, not mere conquerors. It also demonstrated that former enemies could unite against existential threats, potentially reshaping political alignments across the Mushroom Kingdom region."
},


// ========================================================================
// ADDITIONAL FACTION ENTRY
// ========================================================================

koopa_resistance: {
    id: 'koopa_resistance',
    name: "The Koopa Resistance",
    type: "military_remnant",
    motto: "For the Kingdom. For the King.",
    description: "Formed from survivors of Kamek's betrayal—workers, soldiers, and refugees who escaped the Wyrm's corruption. Operating from an ancient Krew safehouse, they mounted a desperate campaign to restore the seven seals and re-imprison the Primordial Wyrm. Though many perished, their sacrifice saved the Koopa Kingdom and earned them legendary status.",
    leadership: ["General Hammer Bro (formerly Sergeant)", "Chief Architect Koopa Foreman"],
    territory: "Valley of Bowser (Liberated)",
    alignment: "lawful_neutral",
    allies: ['koopa_troop', 'iron_legion', 'mushroom_regency'],
    enemies: ['primordial_wyrm'],
    resources: "Moderate (coalition support, reconstruction materials)",
    keyCharacters: ['hammer_bro_sergeant', 'koopa_foreman', 'bob_omb_demolitions', 'shy_guy_laborer', 'magikoopa_apprentice', 'dry_bones_scout', 'goomba_messenger'],
    status: "Integrated into reformed Koopa Troop",
    historicalNote: "The Resistance's motto became the rallying cry for Koopa loyalists: 'For the Kingdom. For the King.' A memorial carved with 348 names stands at the crater rim."
},
};

export const MAJOR_BATTLES = [
// ========================================================================
    // ISLE DELFINO CONFLICT (WEEK OF THE 24TH)
    // ========================================================================
// Add to MAJOR_BATTLES array:
{
    id: 'wyrm_awakening_breach',
    name: "The Breach of the Ancient Prison",
    conflict: "The Primordial Wyrm Crisis",
    arc: 'mushroom_civil_war',
    date: { year: 1040, monthIndex: 6, day: 22, hour: 20, minute: 0 },
    location: "Valley of Bowser, Excavation Site Delta",
    belligerents: {
        side_a: { name: "Magikoopa Ritual Circle", factions: ['magikoopa_council'] },
        side_b: { name: "Ancient Seals / Koopa Workers", factions: ['koopa_troop'] }
    },
    commanders: { side_a: ["Kamek (Regent Sorcerer)"], side_b: ["Koopa Foreman (Evacuating)"] },
    outcome: "pyrrhic_victory",
    outcomeDetail: "Kamek successfully breaches the first seal. The Primordial Wyrm begins awakening. 377 workers killed or corrupted.",
    casualties: { side_a: "3 Magikoopas (ritual exhaustion)", side_b: "377 workers (corrupted/killed), 23 escaped" },
    strategicValue: "catastrophic",
    description: `<p>Kamek's excavation project beneath the Valley of Bowser was never about reconstruction—it was about breaching the ancient prison of the Primordial Wyrm, an entity that predates the Stars themselves. The ritual circle of 13 Magikoopas channeled forbidden magic to shatter the first seal.</p><p>The Koopa Foreman, recognizing the danger, led 23 workers through secret tunnels built by previous Krew generations. The rest were consumed by corruption or killed outright. Kamek, now bonded to the Wyrm, declared himself "Regent Sorcerer" and began breaking additional seals.</p>`,
    tacticalNotes: "The old Krew's foresight in building escape tunnels proved the difference between total annihilation and survival. Always have an exit strategy.",
    participatingCharacters: ['kamek', 'koopa_foreman', 'magikoopa_council_elder', 'magikoopa_apprentice']
},

{
    id: 'safehouse_rescue_mission',
    name: "The Sewer Extraction",
    conflict: "The Primordial Wyrm Crisis",
    arc: 'mushroom_civil_war',
    date: { year: 1040, monthIndex: 6, day: 24, hour: 12, minute: 30 },
    location: "Valley of Bowser, Underground Sewer Network",
    belligerents: {
        side_a: { name: "Koopa Resistance Rescue Team", factions: ['koopa_resistance'] },
        side_b: { name: "Wyrm Corruption / Corrupted Patrols", factions: ['primordial_wyrm'] }
    },
    commanders: { side_a: ["Koopa Foreman", "Bob-omb Demolitions Expert"], side_b: ["Autonomous Corruption"] },
    outcome: "victory",
    outcomeDetail: "47 survivors rescued from bunkers. 2 rescuers lost to corruption. Total Resistance strength: 68.",
    casualties: { side_a: "2 KIA (corruption)", side_b: "N/A (environmental hazard)" },
    strategicValue: "high",
    description: `<p>With King Bowser weeks away in the Midlands, the Koopa Foreman led an 8-person team into the corrupted sewer network to rescue workers trapped in emergency bunkers. Using old Krew maps, they navigated tunnels that were literally coming alive—walls pulsing, passages closing.</p><p>Bob-omb Demolitions Expert blew three passages to create escape routes. The team reached 47 survivors and extracted them before the corruption caught up. Two rescuers were lost when the sewers attempted to crush them.</p>`,
    tacticalNotes: "Speed and explosive breaching capabilities proved essential. The corruption spreads faster than anticipated—extraction windows measured in minutes, not hours.",
    participatingCharacters: ['koopa_foreman', 'bob_omb_demolitions', 'goomba_messenger', 'koopa_worker_green']
},

{
    id: 'safehouse_defense',
    name: "Defense of the Krew Safehouse",
    conflict: "The Primordial Wyrm Crisis",
    arc: 'mushroom_civil_war',
    date: { year: 1040, monthIndex: 6, day: 25, hour: 14, minute: 30 },
    location: "Ancient Krew Safehouse, Valley Outskirts",
    belligerents: {
        side_a: { name: "Koopa Resistance", factions: ['koopa_resistance'] },
        side_b: { name: "Corrupted Legion", factions: ['primordial_wyrm'] }
    },
    commanders: { side_a: ["Hammer Bro Sergeant (Field Commander)", "Hammer Bro Captain"], side_b: ["Kamek (Remote Command)"] },
    outcome: "victory",
    outcomeDetail: "Corrupted wave repelled. Safehouse secured. 8 defenders killed.",
    casualties: { side_a: "8 KIA", side_b: "~50 corrupted destroyed" },
    strategicValue: "critical",
    description: `<p>After the Resistance destroyed the first anchor crystal, Kamek retaliated by sending waves of corrupted troops—former Koopa soldiers transformed into purple-veined, mindless attackers. The Resistance, operating from the ancient Krew safehouse, mounted a desperate defense.</p><p>The battle was psychologically devastating—defenders were forced to fight former friends and comrades. Hammer Bro Captain personally put down soldiers he'd trained with for years. Despite the trauma, the Resistance held their ground.</p>`,
    tacticalNotes: "Prepared defensive positions and knowledge of the terrain offset numerical disadvantage. Psychological resilience proved as important as physical fortifications.",
    participatingCharacters: ['hammer_bro_sergeant', 'hammer_bro_captain', 'koopa_worker_green', 'goomba_grunt']
},

{
    id: 'anchor_alpha_bone_dry_dunes',
    name: "The Battle of Bone Dry Dunes",
    conflict: "The Primordial Wyrm Crisis",
    arc: 'mushroom_civil_war',
    date: { year: 1040, monthIndex: 6, day: 25, hour: 10, minute: 0 },
    location: "Bone Dry Dunes, Ancient Temple Shrine",
    belligerents: {
        side_a: { name: "Resistance Team Alpha", factions: ['koopa_resistance'] },
        side_b: { name: "Shadow Serpent Guardian", factions: ['primordial_wyrm'] }
    },
    commanders: { side_a: ["Koopa Foreman", "Bob-omb Demolitions Expert"], side_b: ["Shadow Serpent (Wyrm Fragment)"] },
    outcome: "victory",
    outcomeDetail: "First anchor crystal destroyed. Shadow Serpent dissipated. Prison seal begins reforming.",
    casualties: { side_a: "3 Goombas KIA, 1 Hammer Bro wounded", side_b: "Guardian destroyed" },
    strategicValue: "critical",
    description: `<p>The first coordinated anchor assault targeted an ancient temple in the Bone Dry Dunes. The guardian—an 80-foot shadow serpent—screamed in frequencies that caused psychological damage to anyone who looked directly at it.</p><p>Koopa Foreman drew the serpent's attention while Bob-omb planted charges on the shrine's core crystal. Hammer Bros held the perimeter against smaller shadow manifestations. When the crystal shattered, the serpent simply dissolved into smoke.</p>`,
    tacticalNotes: "Distraction tactics essential against singular powerful enemies. Demolition expertise proved more valuable than combat strength.",
    participatingCharacters: ['koopa_foreman', 'bob_omb_demolitions', 'hammer_bro_captain']
},

{
    id: 'anchor_beta_darklands',
    name: "The Darklands Confrontation",
    conflict: "The Primordial Wyrm Crisis",
    arc: 'mushroom_civil_war',
    date: { year: 1040, monthIndex: 6, day: 26, hour: 11, minute: 30 },
    location: "Darklands Fortress, Kamek's Power Anchor",
    belligerents: {
        side_a: { name: "Resistance Team Beta", factions: ['koopa_resistance'] },
        side_b: { name: "Kamek's Spirit Projection", factions: ['primordial_wyrm', 'magikoopa_council'] }
    },
    commanders: { side_a: ["Koopa Worker Green", "Magikoopa Apprentice"], side_b: ["Kamek (Spirit Projection)"] },
    outcome: "victory",
    outcomeDetail: "Anchor destroyed. Kamek significantly weakened. Magikoopa Apprentice critically injured.",
    casualties: { side_a: "2 Shy Guys wounded, Magikoopa Apprentice critical (arms burned)", side_b: "Anchor destroyed, Kamek's power reduced" },
    strategicValue: "critical",
    description: `<p>The Darklands anchor was directly connected to Kamek's personal power—the magic binding him to the Wyrm. Team Beta, led by the defected Magikoopa Apprentice, assaulted a fortress built around the crystal.</p><p>Kamek's spirit manifested to defend his power source, recognizing his former apprentice. The magical duel was intense—the Apprentice channeled every spell she knew into the crystal, shattering it at the cost of severe burns to her arms. Kamek's scream of rage echoed across the region.</p>`,
    tacticalNotes: "Insider knowledge of magical defenses proved invaluable. Personal sacrifice sometimes necessary to achieve critical objectives.",
    participatingCharacters: ['koopa_worker_green', 'magikoopa_apprentice', 'boo_servant']
},

{
    id: 'anchor_iron_legion_crystal_caves',
    name: "The Crystal Caves Assault",
    conflict: "The Primordial Wyrm Crisis",
    arc: 'mushroom_civil_war',
    date: { year: 1040, monthIndex: 6, day: 27, hour: 6, minute: 30 },
    location: "Crystal Caves, Subterranean Anchor Site",
    belligerents: {
        side_a: { name: "Iron Legion Tactical Squad", factions: ['iron_legion'] },
        side_b: { name: "Shadow Hydra Guardian", factions: ['primordial_wyrm'] }
    },
    commanders: { side_a: ["Iron Legion Commander", "Commander Steelclaw"], side_b: ["Shadow Hydra (Wyrm Fragment)"] },
    outcome: "victory",
    outcomeDetail: "Anchor destroyed. Iron Legion proves their worth in coalition warfare.",
    casualties: { side_a: "4 KIA, 6 wounded", side_b: "Guardian destroyed" },
    strategicValue: "high",
    description: `<p>The Iron Legion, despite being stretched thin by the Iron Mandate, committed a tactical squad to the coalition effort. Their target: a crystal anchor deep in subterranean caves, guarded by a three-headed shadow hydra.</p><p>Each head screamed at different frequencies, disorienting attackers. Two soldiers died in the first minute. But the Legion held the line while Commander Steelclaw planted demolition charges. The crystal shattered, proving that even former enemies could fight together against extinction.</p>`,
    tacticalNotes: "Professional military discipline compensates for unfamiliar enemy types. Coalition warfare requires trust built through shared sacrifice.",
    participatingCharacters: ['iron_legion_commander']
},

{
    id: 'anchor_shy_guy_volcanic_shrine',
    name: "The Light Within",
    conflict: "The Primordial Wyrm Crisis",
    arc: 'mushroom_civil_war',
    date: { year: 1040, monthIndex: 6, day: 27, hour: 6, minute: 15 },
    location: "Volcanic Shrine, Valley Interior",
    belligerents: {
        side_a: { name: "Shy Guy Laborer (Solo)", factions: ['koopa_resistance'] },
        side_b: { name: "Anchor Corruption Field", factions: ['primordial_wyrm'] }
    },
    commanders: { side_a: ["Shy Guy Laborer"], side_b: ["Autonomous Corruption"] },
    outcome: "victory",
    outcomeDetail: "Anchor destroyed from within. Shy Guy Laborer KIA. Ultimate sacrifice.",
    casualties: { side_a: "1 KIA (sacrifice)", side_b: "Anchor destroyed, corruption evaporated" },
    strategicValue: "critical",
    description: `<p>The Shy Guy Laborer, partially connected to the Wyrm since the original ritual, understood his unique position. He could feel the anchor calling to him—and realized he could destroy it from within by releasing the corrupted light the Wyrm had left in his soul.</p><p>He walked into the Volcanic Shrine alone, over the objections of his comrades. Witnesses from the ridge saw a massive burst of pure white light—and the corruption around the shrine simply evaporated. No movement was detected afterward.</p>`,
    tacticalNotes: "Sometimes the only way to destroy an enemy is from within. True heroism is choosing sacrifice when no other option remains.",
    participatingCharacters: ['shy_guy_laborer', 'dry_bones_scout']
},

{
    id: 'final_anchor_valley_edge',
    name: "The Fall of the Regent Sorcerer",
    conflict: "The Primordial Wyrm Crisis",
    arc: 'mushroom_civil_war',
    date: { year: 1040, monthIndex: 6, day: 27, hour: 8, minute: 0 },
    location: "Valley Crater Rim, Final Anchor Site",
    belligerents: {
        side_a: { name: "Koopa Resistance Main Force", factions: ['koopa_resistance'] },
        side_b: { name: "Kamek (Wyrm Avatar)", factions: ['primordial_wyrm', 'magikoopa_council'] }
    },
    commanders: { side_a: ["Koopa Foreman", "Hammer Bro Sergeant", "Bob-omb Demolitions Expert"], side_b: ["Kamek (30-foot Wyrm Avatar)"] },
    outcome: "victory",
    outcomeDetail: "Final anchor destroyed. Wyrm re-imprisoned. Kamek captured. Bob-omb Demolitions Expert KIA (sacrifice).",
    casualties: { side_a: "1 Goomba squad erased, Bob-omb KIA (sacrifice)", side_b: "Kamek captured, Wyrm sealed" },
    strategicValue: "decisive",
    description: `<p>The final assault targeted the anchor at the volcanic crater rim—the heart of Kamek's power. The former advisor had transformed into a 30-foot avatar wreathed in purple fire, throwing magic that warped reality itself. A full Goomba squad was erased from existence in the first exchange.</p><p>Bob-omb Demolitions Expert planted charges on the crystal, but Kamek's magic destroyed the detonator. With no other option, Bob-omb detonated himself, destroying the anchor. The prison seals reformed, dragging the Wyrm back into the earth. Kamek, severed from his power source, collapsed—diminished, defeated, captured.</p>`,
    tacticalNotes: "Final victory required ultimate sacrifice. The willing acceptance of death to complete the mission defines true heroism.",
    participatingCharacters: ['koopa_foreman', 'hammer_bro_sergeant', 'bob_omb_demolitions', 'hammer_bro_captain', 'kamek']
},
{
  id: 'aegis_command_riot',
  name: "The Aegis Command Uprising",
  conflict: "The Aegis Uprising",
  arc: 'toad_liberation',
  date: { year: 1040, monthIndex: 6, day: 21, hour: 14, minute: 30 },
  location: "Aegis Command Fortress, Regal Empire Midlands",
  belligerents: {
    side_a: { name: "Liberated Toads (150 Prisoners)", factions: ['liberated_toads'] },
    side_b: { name: "Iron Legion Garrison", factions: ['iron_legion'] }
  },
  commanders: { side_a: ["Speaker Rivers (Remote)", "Creek Medic"], side_b: ["General Ironhand"] },
  outcome: "victory",
  outcomeDetail: "147/150 escaped. Facility compromised. Clues stolen exposing Empire secrets.",
  casualties: { side_a: "3 MIA", side_b: "67 KIA, facility damaged" },
  strategicValue: "critical",
  description: `<p>Speaker Rivers triggered the largest prison break in Regal Empire history using smuggled Mini-Mushrooms, custom gas, prepped tunnels, and server hacks. 150 toads rioted, revealing Life-Force Extractors, Sonic Dragon Nets, Third Eye cult, and Core Site digs.</p><p>Green fog blinded Legion, steam blasts breached walls, Noki subs/ranger trails evacuated most. Stolen blueprints prove Empire fakes dragon wars, weaponizes toad magic. Fallout: Legion purge, toad resistance cells form en route to Mushroom Kingdom.</p>`,
  tacticalNotes: "Months of prep (whisper net, turncoats, decoys) > brute force. Insider hacks turn facilities against occupiers.",
  participatingCharacters: ['speaker_rivers', 'creek_medic', 'general_ironhand']
},
    {
        id: 'delfino_exile_final',
        name: "The Exile of Delfino",
        conflict: "Isle Delfino Conflict",
        arc: 'delfino_unrest',
        date: { year: 1040, monthIndex: 6, day: 30, hour: 18, minute: 30 }, // Day 30
        location: "Delfino Airstrip & Offshore",
        belligerents: {
            side_a: { name: "The Islander Alliance", factions: ['noki_shellfish', 'koopa_troop', 'pianta_syndicate'] },
            side_b: { name: "Mushroom Regency Remnants", factions: ['mushroom_regency'] }
        },
        commanders: { side_a: ["General Shellshock", "Elder Erol"], side_b: ["Admiral B. Toad"] },
        outcome: "victory",
        outcomeDetail: "Regency completely withdraws. Independence recognized de facto.",
        casualties: { side_a: "None", side_b: "2 Gunboats scuttled, Admiral surrendered" },
        strategicValue: "critical",
        description: `<p>The end of Regency influence on Isle Delfino. Surrounded on land by a combined force of Koopa mechs and Pianta heavy-lifters, and blockaded at sea by Noki saboteurs, Admiral B. Toad formally surrendered the airstrip just before sunset on the 30th.</p>
        <p>The Koopa Troop provided transport ships to deport the Regency garrison back to the Mushroom Kingdom. As the ships left, the flags of the Noki, Pianta, and Koopa Troop were raised over the Grand Piazza.</p>`,
        tacticalNotes: "Total isolation of an island garrison renders superior firepower useless.",
        participatingCharacters: ['general_shellshock', 'admiral_b_toad', 'elder_erol']
    },
    {
        id: 'delfino_gelato_counter',
        name: "The Gelato Beach Counter-Offensive",
        conflict: "Isle Delfino Conflict",
        arc: 'delfino_unrest',
        date: { year: 1040, monthIndex: 6, day: 29, hour: 6, minute: 0 }, // Day 29
        location: "Noki Bay - East Ridge",
        belligerents: {
            side_a: { name: "Regency-Gelato Axis", factions: ['mushroom_regency', 'gelato_loyalists'] },
            side_b: { name: "Noki & Pianta Defenders", factions: ['noki_shellfish', 'pianta_syndicate'] }
        },
        commanders: { side_a: ["Mayor Melon", "Captain Spore"], side_b: ["Don Pianta"] },
        outcome: "defeat",
        outcomeDetail: "Amphibious assault failed. Gelato Cataquack Cavalry routed.",
        casualties: { side_a: "Heavy (Cataquacks panicked)", side_b: "Light" },
        strategicValue: "high",
        description: `<p>The Regency attempted to break the stalemate at dawn by launching a pincer attack on Noki Bay using their allies from Gelato Beach. Mayor Melon led a charge of 'Cataquack Cavalry' along the ridges while Regency marines stormed the beach.</p>
        <p>The attack collapsed when Don Pianta led a reinforcement column from the village above, literally throwing heavy fruit barrels down the cliffs to break the Cataquack charge. Simultaneously, Koopa battleships shelled the beachhead, forcing a chaotic retreat.</p>`,
        tacticalNotes: "Wildlife-based cavalry (Cataquacks) is unreliable under artillery fire.",
        participatingCharacters: ['mayor_melon', 'don_pianta', 'captain_spore']
    },
    {
        id: 'delfino_secret_accords',
        name: "The Noki-Koopa Accords",
        conflict: "Isle Delfino Conflict",
        arc: 'delfino_unrest',
        date: { year: 1040, monthIndex: 6, day: 28, hour: 22, minute: 0 }, // Day 28
        location: "Deep Sea Cave, Noki Bay",
        belligerents: {
            side_a: { name: "Noki Leadership", factions: ['noki_shellfish'] },
            side_b: { name: "Koopa Diplomats", factions: ['koopa_troop'] }
        },
        commanders: { side_a: ["Elder Erol"], side_b: ["Kamek (Hologram)"] },
        outcome: "victory",
        outcomeDetail: "Alliance ratified. Borders finalized.",
        casualties: { side_a: "None", side_b: "None" },
        strategicValue: "critical",
        description: `<p>In a watertight cavern beneath the bay, Elder Erol met with a holographic projection of Kamek to formalize their strategy against the Regency. They signed the 'Treaty of Tides'.</p>
        <p><strong>Terms:</strong> The Koopa Troop gains exclusive docking rights at Ricco Harbor and a military base in Corona Mountain. In exchange, they agree to forcibly expel the Mushroom Regency and recognize Noki Bay's sovereignty over the northern waters.</p>`,
        tacticalNotes: "The Regency's refusal to negotiate drove neutral factions into Bowser's arms.",
        participatingCharacters: ['elder_erol', 'kamek']
    },
    {
        id: 'delfino_ricco_harbor',
        name: "The Seizure of Ricco Harbor",
        conflict: "Isle Delfino Conflict",
        arc: 'delfino_unrest',
        date: { year: 1040, monthIndex: 6, day: 28, hour: 5, minute: 30 }, // Day 28
        location: "Ricco Harbor",
        belligerents: {
            side_a: { name: "Koopa Navy", factions: ['koopa_troop'] },
            side_b: { name: "Regency Port Authority", factions: ['mushroom_regency'] }
        },
        commanders: { side_a: ["Admiral Blooper"], side_b: ["Harbormaster T."] },
        outcome: "victory",
        outcomeDetail: "Harbor captured. Supply lines cut.",
        casualties: { side_a: "1 Submersible damaged", side_b: "Port Authority surrendered" },
        strategicValue: "high",
        description: `<p>Following the chaos at Corona Mountain, the Koopa Troop executed a naval landing at Ricco Harbor. Utilizing trained Bloopers to foul the propellers of Regency patrol boats, Koopa submersibles surfaced directly at the docks.</p>
        <p>Admiral Blooper (a sentient giant Blooper officer) issued an ultimatum in ink-sign language. Harbormaster T., realizing his guards were armed only with clipboard and batons against armored Koopas, surrendered the port immediately.</p>`,
        tacticalNotes: "Control of Ricco Harbor effectively starves the Regency garrison of supplies.",
        participatingCharacters: ['admiral_blooper', 'harbormaster_t']
    },
    {
        id: 'delfino_corona_invasion',
        name: "Invasion of Corona Mountain",
        conflict: "Isle Delfino Conflict",
        arc: 'delfino_unrest',
        date: { year: 1040, monthIndex: 6, day: 27, hour: 14, minute: 0 }, // Day 27
        location: "Corona Mountain Caldera",
        belligerents: {
            side_a: { name: "Koopa Paratroopers", factions: ['koopa_troop'] },
            side_b: { name: "Regency Mountain Guard", factions: ['mushroom_regency'] }
        },
        commanders: { side_a: ["General Shellshock"], side_b: ["Sgt. Toadofsky"] },
        outcome: "victory",
        outcomeDetail: "High ground secured. Third front opened.",
        casualties: { side_a: "Light", side_b: "Total rout - survivors fled to Plaza" },
        strategicValue: "critical",
        description: `<p>Koopa Paratroopers, dropping from high-altitude airships, descended into the caldera of Corona Mountain. General Shellshock led the vanguard, deploying Spiny eggs to create area-denial zones in the caves.</p>
        <p>Regency Sgt. Toadofsky attempted to organize a defense using the hot springs as chokepoints, but the verticality of the assault overwhelmed them. This victory gave the Koopa Troop artillery positions overlooking the entire island.</p>`,
        tacticalNotes: "Vertical envelopment remains the Koopa Troop's signature doctrine.",
        participatingCharacters: ['general_shellshock', 'sgt_toadofsky']
    },
    {
        id: 'delfino_gelato_betrayal',
        name: "The Gelato Betrayal",
        conflict: "Isle Delfino Conflict",
        arc: 'delfino_unrest',
        date: { year: 1040, monthIndex: 6, day: 27, hour: 9, minute: 0 }, // Day 27
        location: "Gelato Beach",
        belligerents: {
            side_a: { name: "Gelato Beach Residents", factions: ['gelato_loyalists', 'mushroom_regency'] },
            side_b: { name: "Noki Refugees", factions: ['noki_shellfish'] }
        },
        commanders: { side_a: ["Mayor Melon"], side_b: ["Refugee Leader Nola"] },
        outcome: "victory",
        outcomeDetail: "Refugees expelled. Gelato aligns with Regency.",
        casualties: { side_a: "None", side_b: "Dozens injured, forced into sea" },
        strategicValue: "medium",
        description: `<p>Mayor Melon of Gelato Beach, citing "economic stability" and "promises of exclusive resort rights," declared loyalty to the Mushroom Regency. In a sudden betrayal, local police and Regency troops forcibly expelled Noki refugees who had fled there days prior.</p>
        <p>Refugee Leader Nola managed to evacuate families on makeshift rafts, but the act cemented the division of the island: The East (Gelato) for the Regency, the West (Noki/Pianta) for the Rebellion.</p>`,
        tacticalNotes: "Economic incentives can fracture indigenous alliances.",
        participatingCharacters: ['mayor_melon', 'refugee_nola']
    },
    {
        id: 'delfino_pianta_park_fall',
        name: "Fall of Pianta Park",
        conflict: "Isle Delfino Conflict",
        arc: 'delfino_unrest',
        date: { year: 1040, monthIndex: 6, day: 26, hour: 15, minute: 0 }, // Day 26
        location: "Pianta Park (Amusement Area)",
        belligerents: {
            side_a: { name: "Mushroom Regency Shock Troops", factions: ['mushroom_regency'] },
            side_b: { name: "Pianta Syndicate Rearguard", factions: ['pianta_syndicate'] }
        },
        commanders: { side_a: ["Captain Spore"], side_b: ["'Big Chuck'"] },
        outcome: "defeat",
        outcomeDetail: "Park occupied. Piantas retreat to Village.",
        casualties: { side_a: "Moderate (Booby traps)", side_b: "Light (Strategic withdrawal)" },
        strategicValue: "medium",
        description: `<p>Regency troops stormed the Pianta Park amusement grounds to secure a staging area for an assault on Pianta Village. They faced a nightmare of improvised defenses: animatronics rigged to explode, electrified roller coaster tracks, and unleashed Chain Chomps.</p>
        <p>'Big Chuck', a Pianta lieutenant, held the entrance for three hours simply by throwing Regency soldiers into the pond, buying time for the main force to retreat up the Great Tree.</p>`,
        tacticalNotes: "Urban warfare in theme parks presents unique environmental hazards.",
        participatingCharacters: ['captain_spore', 'big_chuck']
    },
    {
        id: 'delfino_village_secession',
        name: "The Declaration of the Great Tree",
        conflict: "Isle Delfino Conflict",
        arc: 'delfino_unrest',
        date: { year: 1040, monthIndex: 6, day: 26, hour: 10, minute: 0 }, // Day 26
        location: "Pianta Village",
        belligerents: {
            side_a: { name: "Pianta Council", factions: ['pianta_syndicate'] },
            side_b: { name: "Regency Envoys", factions: ['mushroom_regency'] }
        },
        commanders: { side_a: ["Don Pianta"], side_b: ["Envoy Beige"] },
        outcome: "victory",
        outcomeDetail: "Envoys thrown off bridge. Independence declared.",
        casualties: { side_a: "None", side_b: "3 Envoys (Wet, bruised)" },
        strategicValue: "high",
        description: `<p>Following the Noki Bay skirmishes, Regency envoys arrived in Pianta Village to demand loyalty. Don Pianta, eating a large durian, listened to their demands before pointing to the suspension bridge.</p>
        <p>"The Regency offers taxes," the Don reportedly said. "The Piantas offer gravity." His 'Chucksters' then physically tossed the envoys off the bridge into the pool below. The Village bridge was subsequently cut, severing land access.</p>`,
        tacticalNotes: "Pianta strength allows for non-lethal but highly effective diplomacy.",
        participatingCharacters: ['don_pianta', 'envoy_beige']
    },
    {
        id: 'delfino_fin_madness',
        name: "The Madness on The Fin",
        conflict: "Isle Delfino Conflict",
        arc: 'delfino_unrest',
        date: { year: 1040, monthIndex: 6, day: 25, hour: 23, minute: 0 }, // Day 25
        location: "The Fin (Remote Terrain)",
        belligerents: {
            side_a: { name: "Regency Patrol Alpha", factions: ['mushroom_regency'] },
            side_b: { name: "Regency Patrol Beta", factions: ['mushroom_regency'] }
        },
        commanders: { side_a: ["Lt. Sunburn"], side_b: ["Sgt. Daze"] },
        outcome: "stalemate",
        outcomeDetail: "Friendly fire incident due to hallucinations.",
        casualties: { side_a: "6 Wounded", side_b: "4 Wounded" },
        strategicValue: "low",
        description: `<p>A chaotic night skirmish occurred on the desolate "Fin" of the island. Two Regency patrols, suffering from heat exhaustion and dehydration, opened fire on each other.</p>
        <p>Radio logs from Lt. Sunburn claim they were attacking "Shadow Marios" emerging from the graffiti, but an investigation revealed only friendly shell casings. The incident severely damaged Regency morale.</p>`,
        tacticalNotes: "Environmental attrition is causing psychological breakdowns in non-native troops.",
        participatingCharacters: ['lt_sunburn', 'sgt_daze']
    },
    {
        id: 'delfino_hotel_lockdown',
        name: "The Hotel Delfino Lockdown",
        conflict: "Isle Delfino Conflict",
        arc: 'delfino_unrest',
        date: { year: 1040, monthIndex: 6, day: 24, hour: 14, minute: 0 }, // Day 24
        location: "Sirena Beach - Hotel Delfino",
        belligerents: {
            side_a: { name: "Hotel Security", factions: ['pianta_syndicate'] },
            side_b: { name: "Regency Military Police", factions: ['mushroom_regency'] }
        },
        commanders: { side_a: ["Manager Monk"], side_b: ["Captain Lock"] },
        outcome: "victory",
        outcomeDetail: "Regency locked out. Sirena Beach declares neutrality.",
        casualties: { side_a: "None", side_b: "None" },
        strategicValue: "medium",
        description: `<p>Regency Military Police attempted to enter Hotel Delfino to arrest visiting Noki dignitaries. Manager Monk, citing "guest privacy policies," activated the casino's shutter system.</p>
        <p>The hotel became a fortress. The ghosts haunting the upper floors reportedly aided the staff by throwing furniture at Regency officers trying to breach the windows.</p>`,
        tacticalNotes: "Sirena Beach remains a neutral zone, mostly because no one wants to fight the ghosts.",
        participatingCharacters: ['manager_monk', 'captain_lock']
    },
    {
        id: 'delfino_tribute_refusal',
        name: "The Shellfish Standoff",
        conflict: "Isle Delfino Conflict",
        arc: 'delfino_unrest',
        date: { year: 1040, monthIndex: 6, day: 24, hour: 9, minute: 0 }, // Day 24
        location: "Noki Bay Docks",
        belligerents: {
            side_a: { name: "Regency Tax Collectors", factions: ['mushroom_regency'] },
            side_b: { name: "Noki Elders", factions: ['noki_shellfish'] }
        },
        commanders: { side_a: ["Tax Collector Blue"], side_b: ["Elder Erol"] },
        outcome: "stalemate",
        outcomeDetail: "Tribute refused. Regency boat sabotaged.",
        casualties: { side_a: "None", side_b: "None" },
        strategicValue: "medium",
        description: `<p>The conflict began here. Tax Collector Blue demanded the annual tribute of 5,000 Golden Coins from the Noki people. Elder Erol met them on the dock.</p>
        <p>"The coin is round," Erol said, "but our patience is flat." When the Collector ordered a warning shot, Noki divers beneath the surface severed the Regency boat's rudder, leaving them drifting helplessly. It was a bloodless but humiliating defeat for Regency authority.</p>`,
        tacticalNotes: "Noki underwater mobility provides total naval asymmetry.",
        participatingCharacters: ['tax_collector_blue', 'elder_erol']
    },
    {
        id: 'raid_aegis_command',
        name: "The Aegis Command Massacre",
        conflict: "Vigilance Crew Incidents",
        arc: 'toad_liberation',
        date: { year: 1040, monthIndex: 6, day: 21, hour: 14, minute: 0 },
        location: "Aegis Command Fortress",
        belligerents: {
            side_a: { name: "Infiltration Team", factions: ['liberated_toads'] },
            side_b: { name: "Iron Legion High Command", factions: ['iron_legion'] }
        },
        commanders: { side_a: ["Bones", "Creek"], side_b: ["Marcus Ironhand"] },
        outcome: "defeat",
        outcomeDetail: "Infiltration failed. Bones stabbed. Order 120 issued.",
        casualties: { 
            side_a: "Bones (Criticaly Injured), Multiple Toads Captured", 
            side_b: "1 Soldier (Melted by Creek's acid)" 
        },
        strategicValue: "critical",
        description: `<p>Bones, disguised as a guard, infiltrated the prison courtyard to rescue the leadership. He was led to an interrogation room where he questioned a prisoner identified as <strong>Speaker L</strong>.</p>
        <p>However, the interrogation revealed this was a <strong>Green Decoy</strong> who claimed his skin color changed because he "ate a poisoned mushroom." The decoy spouted cult-like rhetoric about "The Fractured Heart" and a doctrine of "CONTAIN, ACCOUNT, RESTORE, ADHERE."</p>
        <p>The operation collapsed when Marcus Ironhand entered. Seeing through Bones' disguise immediately ("I'm a new recruit"), Ironhand ripped the disguise off and stabbed Bones through the chest. In the chaos, the Toad commando Creek melted a Legion soldier with acid, but they were overwhelmed.</p>
        <p><strong>Order 120:</strong> Enraged by the infiltration and the confirmation of "vigilante" tactics, Ironhand looked at the captured Toads—including a fake Archie Miser—and issued a chilling command: "Order 120. Execute them all."</p>`,
        tacticalNotes: "Legion command structures are highly resistant to social engineering. The 'Decoy Gambit' has misled the Legion, but at the cost of the infiltration team's lives.",
        participatingCharacters: ['bones', 'creek', 'marcus_ironhand', 'green_speaker_l_decoy']
    },
    {
        id: 'battle_arcane_wraith',
        name: "Banishment of the Arcane Wraith",
        conflict: "Raventree Manor Crisis",
        arc: 'raventree_manor',
        date: { year: 1040, monthIndex: 6, day: 21, hour: 19, minute: 30 },
        location: "Raventree Manor - Lower Levels",
        belligerents: {
            side_a: { name: "The Party", factions: ['vigilance_crew'] },
            side_b: { name: "Arcane Wraith", factions: ['raventree_curse'] },
            side_c: { name: "The Audience", factions: ['mages_guild', 'iron_legion'] }
        },
        commanders: { side_a: ["Bowser", "Dan", "Oracle"], side_b: ["Fire Wraith"], side_c: ["Pernus Annmatar"] },
        outcome: "victory",
        outcomeDetail: "Wraith banished. Ectoplasm secured. Mages/Legion interference thwarted.",
        casualties: { 
            side_a: "Bowser (Internal Force Dmg/Possession trauma)", 
            side_b: "Banished", 
            side_c: "Pernus Annmatar (Thrown & Tripped)" 
        },
        strategicValue: "critical",
        description: `<p>The confrontation with the Fire Wraith turned into a chaotic three-way struggle. Dan, despite missing an arm, proved his lethality by landing deep hits with throwing axes. Bowser, overcoming his fear of ghosts ("That one's dressed nice—that's scary!"), physically pummeled the entity.</p>
        <p><strong>The Interlopers:</strong> The Mages' Guild representative, Pernus Annmatar, flew into the room to "give the audience a good show." He summoned dancing ghosts and even possessed Bowser's body. Bowser retaliated by physically throwing the Mage out of his body and later tripping him when the Mage tried to steal the kill.</p>
        <p><strong>Elemental Clash:</strong> Archie, finding a moment of clarity, unleashed a powerful ice blast that shattered the wraith temporarily. When the Legion and Mages surged in to capture the weakened entity, Bowser blocked them, declaring "My fight. My kill." The Oracle finally banished the creature, allowing Archie to harvest the ectoplasm.</p>`,
        tacticalNotes: "Physical force combined with elemental counters (Ice vs Fire Wraith) proved effective. External interference remains a major threat.",
        participatingCharacters: ['bowser', 'dan', 'archie', 'hjumpik', 'toad_lee', 'oracle', 'pernus_annmatar']
    },
    {
        id: 'capture_of_robinson',
        name: "The Silence of Dragon Mountain",
        conflict: "The Dragon Conspiracy",
        arc: 'dragon_mountain',
        date: { year: 1040, monthIndex: 6, day: 21, hour: 10, minute: 0 },
        location: "Dragon Mountain",
        belligerents: {
            side_a: { name: "Robinson & The Dragon", factions: ['unaligned'] },
            side_b: { name: "Iron Brigade", factions: ['iron_legion'] }
        },
        commanders: { side_a: ["Robinson"], side_b: ["Iron Brigade Captain"] },
        outcome: "defeat",
        outcomeDetail: "Dragon paralyzed by sonic weapon. Robinson captured.",
        casualties: { side_a: "Both captured", side_b: "None" },
        strategicValue: "high",
        description: `<p>Robinson (Markop's father) woke inside the Dragon's Den to find a Great Dragon coiling above him. The Dragon confessed a terrifying truth: The war between Dragons and the Regal Empire is a fabrication. The Empire has invented a sound frequency that paralyzes dragons, forcing them to spy on Markop and others.</p>
        <p>Moments after this confession, a horn sounded in the distance. The Dragon froze midair, unable to move, and slammed into the ground screaming. Iron Brigade soldiers stormed the area, securing the paralyzed beast and arresting Robinson. Both were evacuated to Aegis Command.</p>`,
        tacticalNotes: "Dragons possess a biological vulnerability to specific sonic frequencies. This is a critical weakness exploited by the Empire.",
        participatingCharacters: ['robinson', 'the_dragon']
    },
    
    {
        id: 'skirmish_rogueport_trade_ward',
        name: "The Night of Iron Knives",
        conflict: "Iron Legion Expansion", 
        arc: 'toad_liberation',
        date: { year: 1040, monthIndex: 6, day: 21, hour: 2, minute: 15 },
        location: "Rogueport - Trade Ward",
        belligerents: {
            side_a: { name: "Liberated Toads Ops", factions: ['liberated_toads'] },
            side_b: { name: "Iron Legion 'Iron Fists'", factions: ['iron_legion'] }
        },
        commanders: { side_a: ["Embercap", "Dewdrop"], side_b: ["Unit 734 (KIA)"] },
        outcome: "victory",
        outcomeDetail: "Death squad neutralized. Rakasha artifact retrieved.",
        casualties: { 
            side_a: "None (Erick disguised)", 
            side_b: "4 Iron Fist Elites (Mauled by Spirit Tiger)" 
        },
        strategicValue: "high",
        description: `<p>Following the negotiation of the 'Cheep-Cheep Treaty', a covert team (Embercap, Dewdrop, Erick) infiltrated Rogueport to secure payment for the Rakasha. They arrived to find the city under a shadow lockdown by the Iron Legion.</p>
        <p>The team intercepted an 'Iron Fist' assassination squad—elite Legionnaires tasked with purging local independent guards to destabilize the city. Realizing standard combat would fail against the heavily armored troopers, Dewdrop utilized a one-time summoning scroll provided by Rakasha leadership.</p>
        <p>The resulting Spirit Tiger manifestation decimated the Legion squad in seconds. The team successfully retrieved the stolen artifact from the Violet Emblem building and retreated before reinforcements arrived.</p>`,
        tacticalNotes: "Iron Legion heavy plate is vulnerable to magical beast attacks. Disguise tactics (Erick) proved effective for infiltration.",
        participatingCharacters: ['embercap', 'dewdrop', 'erick']
    },    
    {
        id: 'battle_solarium_shatter',
        name: "The Shattering of the Solarium",
        conflict: "Raventree Manor Crisis",
        arc: 'raventree_manor',
        date: { year: 1040, monthIndex: 6, day: 20, hour: 19, minute: 30 },
        location: "Raventree Manor - Solarium",
        belligerents: {
            side_a: { name: "The Party", factions: ['vigilance_crew'] },
            side_b: { name: "The Mirror Terror", factions: ['raventree_curse'] }
        },
        commanders: { side_a: ["Bowser", "Hjumpik"], side_b: ["Shard Stalker"] },
        outcome: "victory",
        outcomeDetail: "Monster neutralized. Mirror shards contained.",
        casualties: { side_a: "Minor injuries", side_b: "Destroyed" },
        strategicValue: "high",
        description: `<p>A chaotic engagement in the attic Solarium where the party utilized brute force and metaphysics to shatter the Shard Stalker. Bowser's fire breath proved ineffective against the crystalline entity, forcing Hjumpik to improvise with a dispelling ritual.</p>
        <p>The creature was ultimately destroyed when the party shattered all mirrors simultaneously, denying it any surface to manifest through.</p>`,
        tacticalNotes: "Mirror-based entities require simultaneous destruction of all reflective surfaces.",
        participatingCharacters: ['bowser', 'hjumpik', 'archie', 'markop']
    },
    {
        id: 'skirmish_surf_shack',
        name: "The Skirmish at Funky's Shack",
        conflict: "Kong-Kremling Cold War",
        arc: 'kong_kremling_cold_war',
        date: { year: 1040, monthIndex: 6, day: 20, hour: 18, minute: 0 },
        location: "Funky's Surf Shack, DK Island",
        belligerents: {
            side_a: { name: "DK Crew", factions: ['dk_crew'] },
            side_b: { name: "Kremling Assassin", factions: ['kremling_krew'] }
        },
        commanders: { side_a: ["Donkey Kong"], side_b: ["Galypso"] },
        outcome: "victory",
        outcomeDetail: "Assassination thwarted. Galypso escaped.",
        casualties: { side_a: "Surfboard destroyed", side_b: "None confirmed" },
        strategicValue: "medium",
        description: `<p>Donkey Kong intercepted a Kremling assassin targeting Funky Kong, ending the fragile truce between the factions. The assassin, identified as "Galypso," managed to escape into the jungle after a brief but intense confrontation.</p>`,
        tacticalNotes: "Kremling assassins favor poison-tipped weaponry.",
        participatingCharacters: ['donkey_kong', 'funky_kong']
    },
{
  id: 'skirmish_silent_grove',
  name: "The Silent Grove Purged",
  conflict: "Raventree Manor Crisis",
  arc: 'raventree_manor',
  date: { year: 1040, monthIndex: 6, day: 21, hour: 0, minute: 0 },
  location: "Raventree Manor, Silent Grove & Hedge Maze",
  belligerents: {
    side_a: { name: "Rescue Party", factions: ['liberated_toads'] },
    side_b: { name: "The Web-Weaver's Brood", factions: ['unaligned'] }
  },
  commanders: { 
    side_a: ["Markop (Titan Form)", "Remi", "The Oracle"], 
    side_b: ["Arachnid Matriarch"] 
  },
  outcome: "decisive_victory_a",
  outcomeDetail: "The Arachnid Matriarch was banished through the Oracle's ritual circle. The Silent Grove is now navigable.",
  casualties: {
    side_a: "Remi critically wounded and unconscious, Smoking J poisoned, Remi's mechanical hound damaged, party exhausted",
    side_b: "Arachnid Matriarch banished, entire spider brood eliminated"
  },
  strategicValue: "critical",
  description: `<p>The rescue mission to recover Eager from the web-choked grove culminated in a desperate final battle. Remi, depleted of mana and swarmed by minispiders, fell unconscious with defiance on her lips: "If I'm going down, I'm going down swinging." Meanwhile, Markop—still colossal from the Oracle's blessing—was tackled and webbed by the Arachnid Matriarch, locked in a titanic grapple.</p>
  
  <p><strong>The Flanking Maneuver:</strong> Toad Squad Alpha, having navigated the pitch-black flooded fountain district, emerged at a critical moment. Salem led his squad forward with torchlight, landing a devastating crossbow bolt directly into the Matriarch's eye. Smoking J, despite his venom-induced fear of the darkness, rallied with his comrades.</p>
  
  <p><strong>The Deadlock:</strong> Spider and giant toad locked claws, neither giving ground. The Matriarch spat poison breath, catching Waluigi in the crossfire. Waluigi retaliated with an arcane weakening ray, allowing Markop to push the creature back through the hedges. During the chaos, Rodger rushed to aid Eager, discovering a pressure point marked with a giant 'X' on his inflated form.</p>
  
  <p><strong>The Banishment:</strong> The Oracle had been preparing throughout the battle, drawing a chalk circle and setting candles. When the Matriarch leaped down for a killing blow, Markop sidestepped—and the spider crashed directly into the ritual circle. The arcane trap activated, consuming the creature in blinding light and banishing it from existence. Mossy's final bite and a toad's pistol shot had weakened it just enough.</p>
  
  <p>In the aftermath, the party claimed the Matriarch's hoard: a War Mage's Staff, Web-Woven Scale armor, and three healing potions. The toads sang victory songs as they tended their wounded.</p>`,
  tacticalNotes: "The Oracle's banishment circles require preparation time but can instantly remove even massive threats. Flanking maneuvers in low-visibility environments require strong leadership. Giant combatants create chaos that can be exploited by either side.",
  loot: [
    { name: "War Mage's Staff", claimedBy: "Markop (for Archie)" },
    { name: "Web-Woven Scale Armor", claimedBy: "Remi", description: "Armor twisted by the grove's magic, infused with supernatural web properties" },
    { name: "Healing Potions (x3)", claimedBy: "Rodger" }
  ],
  participatingCharacters: ['markop', 'remi', 'waluigi', 'eager', 'oracle', 'rodger', 'mossy', 'salem', 'smoking_j', 'perot']
},
    {
        id: 'skirmish_dance_hall',
        name: "The Dance Hall Discord",
        conflict: "Raventree Manor Crisis",
        arc: 'raventree_manor',
        date: { year: 1040, monthIndex: 6, day: 20, hour: 8, minute: 0 },
        location: "Raventree Manor - Grand Ballroom",
        belligerents: {
            side_a: { name: "The Party", factions: ['liberated_toads'] },
            side_b: { name: "Iron Legion & Magi", factions: ['iron_legion', 'mages_guild'] },
            side_c: { name: "Manor Entities", factions: ['unaligned'] }
        },
        commanders: { side_a: ["Archie", "Hjumpik"], side_b: ["Legion Spy"], side_c: ["Dancing Wraith"] },
        outcome: "retreat",
        outcomeDetail: "Legion captured a hostage. Party withdrew.",
        casualties: { side_a: "One toad captured", side_b: "1 Legion Spy killed", side_c: "Unknown" },
        strategicValue: "medium",
        description: `<p>A three-way standoff in the manor's grand ballroom was disrupted by a supernatural manifestation. The dancing wraith forced all parties to literally dance, creating chaos that the Legion exploited to capture a Toad hostage.</p>`,
        tacticalNotes: "Supernatural compulsion effects require high willpower to resist.",
        participatingCharacters: ['archie', 'hjumpik']
    },
    {
        id: 'iron_sky_breach',
        name: "The Iron Sky Breach",
        conflict: "Vigilance Crew Incidents",
        arc: 'raventree_manor',
        date: { year: 1040, monthIndex: 6, day: 20, hour: 16, minute: 30 },
        location: "Airship Vigilance - Skies Above Raventree",
        belligerents: {
            side_a: { name: "Vigilance Defenders", factions: ['liberated_toads'] },
            side_b: { name: "Iron Legion Boarding Party", factions: ['iron_legion'] }
        },
        commanders: { side_a: ["Ryan", "Skeleton Crew"], side_b: ["Colonel Steelstorm"] },
        outcome: "defeat",
        outcomeDetail: "Vigilance captured. Ryan escaped via freefall. Crew detained.",
        casualties: { 
            side_a: "Total - ship and crew lost", 
            side_b: "Minimal - surgical operation" 
        },
        strategicValue: "critical",
        description: `<p>While the main party was trapped in Raventree Manor dealing with supernatural threats, the Iron Legion executed a perfectly coordinated assault on the Vigilance. The skeleton crew left to guard the ship never stood a chance.</p>
        <p>Colonel Steelstorm, the Legion's premier tactical officer, led the boarding party personally. Legion skyhooks latched onto the Vigilance from three angles simultaneously, disgorging troops before the defenders could mount an organized response. The entire operation lasted less than fifteen minutes.</p>
        <p>Ryan, one of the few toads to escape, made a desperate leap from the ship rather than face capture. His survival—via an improvised parachute and a fortuitous landing near a Rakasha encampment—was miraculous. The intelligence he carried about Legion movements and the ship's capture would prove valuable.</p>`,
        tacticalNotes: "Never leave a strategic asset lightly defended. The Legion exploits any weakness.",
        participatingCharacters: ['ryan']
    },
    {
        id: 'skirmish_manor_parlor',
        name: "Markop & The First Cohort",
        conflict: "Raventree Manor Crisis",
        arc: 'raventree_manor',
        date: { year: 1040, monthIndex: 6, day: 19, hour: 6, minute: 30 },
        location: "Raventree Manor Parlor",
        belligerents: {
            side_a: { name: "Markop's Command", factions: ['liberated_toads'] },
            side_b: { name: "Manor Manifestations", factions: ['unaligned'] }
        },
        commanders: { side_a: ["Markop", "Rodger"], side_b: ["Wraiths"] },
        outcome: "victory",
        outcomeDetail: "Wraiths repelled. Defensive perimeter established.",
        casualties: { side_a: "1 Toad crushed by falling chandelier", side_b: "2 Wraiths dispersed" },
        strategicValue: "medium",
        description: `<p>Internal Toad politics were interrupted by a spectral ambush. Markop's quick thinking and Rodger's tactical positioning allowed the First Cohort to establish a defensive perimeter.</p>`,
        tacticalNotes: "Wraiths can be temporarily dispersed but will reform unless properly banished.",
        participatingCharacters: ['markop', 'rodger']
    },
    {
        id: 'raid_on_cohort_command',
        name: "Raid on Cohort Command",
        conflict: "Liberated Toads Internal Conflict",
        arc: 'toad_liberation',
        date: { year: 1040, monthIndex: 6, day: 19, hour: 14, minute: 0 },
        location: "First Cohort Command Post",
        belligerents: {
            side_a: { name: "Iron Legion", factions: ['iron_legion'] },
            side_b: { name: "First Cohort", factions: ['liberated_toads'] }
        },
        commanders: { side_a: ["Col. Steelstorm"], side_b: ["Speaker L"] },
        outcome: "defeat",
        outcomeDetail: "Speaker L captured. Command structure shattered.",
        casualties: { side_a: "Minimal", side_b: "Heavy - leadership decimated" },
        strategicValue: "critical",
        description: `<p>A decapitation strike by the Iron Legion neutralized the Toad leadership. Colonel Steelstorm personally led the assault, demonstrating the Legion's intelligence capabilities and tactical precision.</p>`,
        tacticalNotes: "Legion employs pre-dawn strikes. Counter-intelligence is critical.",
        participatingCharacters: ['speaker_l']
    },
    {
        id: 'siege_of_raventree_manor',
        name: "Siege of Raventree Manor",
        conflict: "Liberated Toads Internal Conflict",
        arc: 'raventree_manor',
        date: { year: 1040, monthIndex: 6, day: 19, hour: 6, minute: 0 },
        location: "Raventree Manor",
        belligerents: {
            side_a: { name: "First Cohort", factions: ['liberated_toads'] },
            side_b: { name: "Archie's Group", factions: ['liberated_toads'] },
            side_c: { name: "Manor Horrors", factions: ['unaligned'] }
        },
        commanders: { side_a: ["Speaker L"], side_b: ["Archie"], side_c: ["Unknown Entity"] },
        outcome: "stalemate",
        outcomeDetail: "Archie apprehended. Supernatural threat emerging.",
        casualties: { side_a: "Unknown", side_b: "One toad killed by Archie", side_c: "Awakening" },
        strategicValue: "high",
        description: `<p>A disciplinary action against Archie turned into a siege when the manor itself seemed to awaken. The conflict between Toad factions may have triggered a dormant supernatural threat.</p>`,
        tacticalNotes: "The manor responds to violence. Peaceful resolution may be key.",
        participatingCharacters: ['archie', 'speaker_l']
    },
    {
        id: 'kong_kremling_war_reignited',
        name: "The Kong Bug Revelation",
        conflict: "Kong-Kremling Cold War",
        arc: 'kong_kremling_cold_war',
        date: { year: 1040, monthIndex: 6, day: 18, hour: 11, minute: 0 },
        location: "DK Island - Funky's Surf Shack / Phone Lines",
        belligerents: {
            side_a: { name: "DK Crew", factions: ['dk_crew'] },
            side_b: { name: "Kremling Krew", factions: ['kremling_krew'] }
        },
        commanders: { side_a: ["Donkey Kong", "Funky Kong"], side_b: ["King K. Rool"] },
        outcome: "ongoing",
        outcomeDetail: "Cold war transformed to active hostilities. Assassination plot revealed.",
        casualties: { side_a: "None yet - but Funky marked for death", side_b: "Intelligence network exposed" },
        strategicValue: "critical",
        description: `<p>The discovery of a sophisticated Kremling listening device in Funky Kong's surf shack shattered years of uneasy peace between the two island powers. Funky, the DK Crew's Director of Intelligence and resident technical genius, found the bug during routine equipment maintenance—a discovery that would reshape the conflict entirely.</p>
        <p>The device was no crude wiretap. It represented Kremling technology at its finest: compact, long-range, and virtually undetectable by conventional means. Funky estimated it had been in place for at least six months, meaning the Kremlings had been listening to sensitive DK Crew discussions throughout the recent Democratic Summit preparations.</p>
        <p>Donkey Kong's response was immediate and undiplomatic. His phone call to King K. Rool—recorded by the DK Crew's own security systems—devolved quickly from accusation to threat. K. Rool, characteristically, denied everything while simultaneously threatening Funky's life if DK didn't "mind his own business."</p>`,
        tacticalNotes: "Funky Kong's technical expertise makes him a priority target. Protection details should be reinforced.",
        participatingCharacters: ['donkey_kong', 'funky_kong', 'king_k_rool']
    },
    {
        id: 'siege_of_bramblehaven',
        name: "Siege of Bramblehaven",
        conflict: "Mushroom Kingdom Civil War",
        arc: 'mushroom_civil_war',
        date: { year: 1040, monthIndex: 6, day: 17, hour: 12, minute: 0 },
        location: "Bramblehaven Fortress",
        belligerents: {
            side_a: { name: "Peach Loyalists", factions: ['peach_loyalists'] },
            side_b: { name: "Fawful's Forces", factions: ['fawfuls_furious_freaks'] }
        },
        commanders: { side_a: ["Cpt. Toadette", "Embercap"], side_b: ["Fawful Commander"] },
        outcome: "victory",
        outcomeDetail: "Town captured. Garrison executed. Strategic position secured.",
        casualties: { 
            side_a: "Heavy - estimated 180 killed, 60 wounded", 
            side_b: "Total annihilation - no survivors" 
        },
        strategicValue: "critical",
        description: `<p>The Siege of Bramblehaven represented the bloodiest single engagement of the current phase of the Mushroom Kingdom Civil War. Captain Toadette's Peach Loyalist forces, hardened by decades of guerrilla warfare and burning with zealous fury, descended upon the Fawful-held fortress with overwhelming force and absolutely no intention of taking prisoners.</p>
        <p>The assault began with a pre-dawn bombardment using captured Fawful technology—an irony not lost on the defenders. As the walls crumbled, Loyalist shock troops poured through the breaches, engaging in brutal room-to-room combat with Fawful's robotic defenders and organic troops alike.</p>`,
        tacticalNotes: "Loyalist forces fight with religious fervor. Expect no mercy and plan for asymmetric commitment.",
        participatingCharacters: ['captain_toadette', 'embercap']
    },
    {
        id: 'fall_of_bramblehaven_detailed',
        name: "The Fall of Bramblehaven (Detailed)",
        conflict: "Mushroom Kingdom Civil War",
        arc: 'mushroom_civil_war',
        date: { year: 1040, monthIndex: 6, day: 15, hour: 5, minute: 0 },
        location: "Bramblehaven Fortress",
        belligerents: {
            side_a: { name: "Peach Loyalists", factions: ['peach_loyalists'] },
            side_b: { name: "Fawful's Forces", factions: ['fawfuls_furious_freaks'] }
        },
        commanders: { side_a: ["Captain Toadette", "Embercap"], side_b: ["Fawful Commander Gearbolt"] },
        outcome: "victory",
        outcomeDetail: "Fortress captured. Garrison executed. Intel secured.",
        casualties: { 
            side_a: "Heavy - 30% of assault force killed or wounded", 
            side_b: "Total - no survivors among defenders" 
        },
        strategicValue: "critical",
        description: `<p>Embercap, the Loyalist infiltration specialist, had previously gathered intelligence on the fortress's weak points during a disastrous gala infiltration that cost the life of operative Jade Grit. This intelligence proved crucial, allowing the Loyalists to breach the eastern wall where the automated defenses had a blind spot.</p>
        <p>What followed was not a battle but a systematic slaughter. Toadette personally executed surrendering officers, declaring that "traitors to the Princess's memory deserve no mercy." The few Fawful soldiers who attempted to flee were hunted down by Loyalist cavalry.</p>`,
        tacticalNotes: "Fawful's automated defenses are powerful but have exploitable sensor gaps. Human intelligence remains superior to technological surveillance.",
        participatingCharacters: ['captain_toadette', 'embercap']
    },
    {
        id: 'skirmish_at_gilded_octopus',
        name: "Skirmish at the Gilded Octopus",
        conflict: "Vigilance Crew Incidents",
        arc: 'capital_intrigue',
        date: { year: 1040, monthIndex: 6, day: 14, hour: 19, minute: 0 },
        location: "The Gilded Octopus Restaurant, Midlands Capital",
        belligerents: {
            side_a: { name: "Vigilance Crew", factions: ['liberated_toads'] },
            side_b: { name: "Iron Legion", factions: ['iron_legion'] }
        },
        commanders: { side_a: ["Archie"], side_b: ["Legion Captain"] },
        outcome: "stalemate",
        outcomeDetail: "Crew escaped. Restaurant heavily damaged.",
        casualties: { side_a: "None", side_b: "Several wounded" },
        strategicValue: "low",
        description: `<p>A chaotic extraction mission went sideways when Legion forces cornered the party in an upscale restaurant. Archie's creative use of the kitchen's contents allowed the crew to escape.</p>`,
        tacticalNotes: "Urban environments favor the outnumbered but creative.",
        participatingCharacters: ['archie']
    },
    {
        id: 'democratic_summit_incident',
        name: "The Democratic Summit Disaster",
        conflict: "DK Island Conflicts",
        arc: 'kong_kremling_cold_war',
        date: { year: 1040, monthIndex: 6, day: 13, hour: 10, minute: 0 },
        location: "Democratic Summit Hall, Neutral Territory",
        belligerents: {
            side_a: { name: "DK Crew Delegation", factions: ['dk_crew'] },
            side_b: { name: "International Observers", factions: ['mushroom_regency', 'regal_empire'] }
        },
        commanders: { side_a: ["Lanky Kong (Acting Delegate)"], side_b: ["Various Diplomats"] },
        outcome: "defeat",
        outcomeDetail: "Diplomatic catastrophe. Economic sanctions threatened. DK Crew fractured.",
        casualties: { side_a: "Political credibility destroyed", side_b: "None physical; severe diplomatic damage" },
        strategicValue: "high",
        description: `<p>The Democratic Summit was intended to normalize relations between the DK Crew and the broader international community. Instead, it became a case study in diplomatic failure when Lanky Kong, substituting for the absent Donkey Kong, engaged in behavior so bizarre that multiple delegations walked out.</p>`,
        tacticalNotes: "Never send Lanky Kong to a diplomatic function. This should have been obvious.",
        participatingCharacters: ['donkey_kong']
    },
    {
        id: 'toad_town_coup',
        name: "The Toad Town Coup",
        conflict: "Mushroom Kingdom Civil War",
        arc: 'mushroom_civil_war',
        date: { year: 1040, monthIndex: 6, day: 12, hour: 9, minute: 0 },
        location: "Toad Town - Government District",
        belligerents: {
            side_a: { name: "Peach Loyalists", factions: ['peach_loyalists'] },
            side_b: { name: "Mushroom Regency", factions: ['mushroom_regency'] }
        },
        commanders: { side_a: ["Cpt. Toadette"], side_b: ["Chancellor Toadsworth"] },
        outcome: "victory",
        outcomeDetail: "Coup successful. Martial law declared.",
        casualties: { side_a: "Minimal", side_b: "Mayor assassinated, several officials detained" },
        strategicValue: "critical",
        description: `<p>Toadette declared martial law and seized control of Toad Town in a swift, surgical operation. The mayor was killed "resisting arrest," and Toadsworth was placed under house arrest.</p>`,
        tacticalNotes: "Political decapitation strikes are most effective at dawn.",
        participatingCharacters: ['captain_toadette', 'toadsworth']
    },
    {
        id: 'tea_party_massacre',
        name: "The Tea Party Massacre",
        conflict: "Underworld Conflicts",
        arc: 'capital_intrigue',
        date: { year: 1040, monthIndex: 6, day: 9, hour: 20, minute: 0 },
        location: "Abandoned Warehouse, Midlands Slums",
        belligerents: {
            side_a: { name: "Archie Miser (Solo)", factions: [] },
            side_b: { name: "Tea Leaf Syndicate", factions: ['tea_leaf_syndicate'] },
            side_c: { name: "Iron Legion Response Team", factions: ['iron_legion'] }
        },
        commanders: { side_a: ["Archie Miser"], side_b: ["Green T", "Earl Grey"], side_c: ["Legion Rapid Response"] },
        outcome: "victory",
        outcomeDetail: "Syndicate leadership annihilated. Archie escaped. Legion arrived too late.",
        casualties: { 
            side_a: "None", 
            side_b: "Catastrophic - 47 confirmed dead including most leadership", 
            side_c: "Unknown - arrived after primary engagement" 
        },
        strategicValue: "medium",
        description: `<p>What was intended as a negotiation meeting between Archie Miser and the Tea Leaf Syndicate devolved into one of the bloodiest single incidents in Midlands underworld history. The exact sequence of events remains disputed, but the outcome is not: nearly fifty people died in under three minutes.</p>
        <p>When someone—accounts differ on who—pressed a panic button, chaos erupted. Syndicate enforcers drew weapons, Legion agents burst through the doors, and Archie, feeling cornered, unleashed a high-level Fireball spell directly into the center of the room.</p>`,
        tacticalNotes: "Fireball spells in enclosed spaces with flammable materials create exponentially more destruction. Archie has demonstrated a pattern of excessive force.",
        participatingCharacters: ['archie']
    },
    {
        id: 'fawfuls_seizure_of_castle',
        name: "Fawful Seizes Peach's Castle",
        conflict: "Mushroom Kingdom Civil War",
        arc: 'mushroom_civil_war',
        date: { year: 1040, monthIndex: 6, day: 8, hour: 12, minute: 0 },
        location: "Peach's Castle",
        belligerents: {
            side_a: { name: "Fawful's Forces", factions: ['fawfuls_furious_freaks'] },
            side_b: { name: "Mushroom Regency", factions: ['mushroom_regency'] }
        },
        commanders: { side_a: ["Fawful"], side_b: ["Captain Toad"] },
        outcome: "victory",
        outcomeDetail: "Capital falls. Fawful establishes base.",
        casualties: { side_a: "Light", side_b: "Regency forces routed" },
        strategicValue: "critical",
        description: `<p>Fawful launched a surprise attack using high-tech weaponry and robotic minions. Captain Toad's conventional defenses were overwhelmed within hours.</p>`,
        tacticalNotes: "Fawful's technology is highly advanced but has specific weaknesses.",
        participatingCharacters: ['fawful', 'captain_toad']
    },
    {
        id: 'the_syrup_schism',
        name: "The Syrup Schism",
        conflict: "Vigilance Crew Incidents",
        arc: 'vigilance_saga',
        date: { year: 1040, monthIndex: 6, day: 6, hour: 12, minute: 0 },
        location: "Airship Vigilance - Engine Room",
        belligerents: {
            side_a: { name: "The Party", factions: ['liberated_toads'] },
            side_b: { name: "Capt. Syrup", factions: ['crimson_fleet'] }
        },
        commanders: { side_a: ["Markop"], side_b: ["Captain Syrup"] },
        outcome: "stalemate",
        outcomeDetail: "Ship crashed. Both parties survived.",
        casualties: { side_a: "None", side_b: "Engine core destroyed" },
        strategicValue: "high",
        description: `<p>A mutiny led to the destruction of the airship's engine core. Captain Syrup and Markop's confrontation in the engine room resulted in catastrophic damage to the vessel.</p>`,
        tacticalNotes: "Airship engine cores are volatile. Handle with care.",
        participatingCharacters: ['markop', 'captain_syrup']
    },
    {
        id: 'vigilance_liberation',
        name: "The Liberation of the Vigilance",
        conflict: "Vigilance Crew Incidents",
        arc: 'vigilance_saga',
        date: { year: 1040, monthIndex: 6, day: 5, hour: 18, minute: 45 },
        location: "Airship Vigilance - All Decks",
        belligerents: {
            side_a: { name: "Liberation Party", factions: ['liberated_toads'] },
            side_b: { name: "X.O.'s Mutineers", factions: ['crimson_fleet'] }
        },
        commanders: { side_a: ["Archie", "Markop", "Dan"], side_b: ["X.O."] },
        outcome: "victory",
        outcomeDetail: "X.O. neutralized. Ship secured. Toad slaves discovered.",
        casualties: { 
            side_a: "Moderate - several wounded including Bowser", 
            side_b: "Heavy - X.O. killed, most mutineers dead or captured" 
        },
        strategicValue: "critical",
        description: `<p>The battle to retake the Vigilance from X.O.'s control was a turning point for what would become the Liberated Toads movement. When the party boarded the hijacked airship, they expected a simple rescue mission. What they found changed everything.</p>
        <p>X.O., a former officer whose true allegiances remained murky, had seized the ship the previous day, taking Warlord Bowser captive in the process. Her motivations—whether personal vendetta, contract fulfillment, or ideological commitment—died with her in the final confrontation.</p>
        <p>The battle raged across multiple decks. Dan the Toad, newly freed from slavery, proved instrumental in rallying other captive toads to the party's cause. His knowledge of the ship's layout and the mutineers' positions turned what could have been a grinding battle of attrition into a surgical strike.</p>`,
        tacticalNotes: "Airship combat favors those who control the engine room and bridge. Securing these first should be priority.",
        participatingCharacters: ['archie', 'markop', 'dan', 'bowser']
    },
    {
        id: 'battle_for_the_vigilance',
        name: "Battle for the Vigilance",
        conflict: "Vigilance Crew Incidents",
        arc: 'vigilance_saga',
        date: { year: 1040, monthIndex: 6, day: 4, hour: 10, minute: 0 },
        location: "Airship Vigilance",
        belligerents: {
            side_a: { name: "The Party", factions: ['liberated_toads'] },
            side_b: { name: "Rogue Elements", factions: ['crimson_fleet'] }
        },
        commanders: { side_a: ["Archie"], side_b: ["X.O."] },
        outcome: "victory",
        outcomeDetail: "Ship secured. X.O. defeated.",
        casualties: { side_a: "Moderate", side_b: "Heavy - leadership killed" },
        strategicValue: "critical",
        description: `<p>The party fought to retake the ship from hijackers led by the mysterious X.O. The battle was fierce but ultimately successful, establishing the party's control over the Vigilance.</p>`,
        tacticalNotes: "Shipboard combat favors those who know the vessel's layout.",
        participatingCharacters: ['archie', 'markop', 'hjumpik']
    },
    {
        id: 'battle_of_ignis_peak',
        name: "Battle of Ignis Peak",
        conflict: "Early Party Adventures",
        arc: null,
        date: { year: 1040, monthIndex: 6, day: 1, hour: 14, minute: 0 },
        location: "Northern Mountains - Ignis Peak",
        belligerents: {
            side_a: { name: "Adventuring Party", factions: [] },
            side_b: { name: "Dragon 'Ignis'", factions: ['unaligned'] }
        },
        commanders: { side_a: ["Archie", "Markop"], side_b: ["Ignis the Red"] },
        outcome: "victory",
        outcomeDetail: "Dragon slain. Hoard claimed.",
        casualties: { side_a: "Minor injuries", side_b: "Dragon killed" },
        strategicValue: "low",
        description: `<p>The party hunted and killed a dragon terrorizing the northern trade routes. The battle was surprisingly one-sided, with Archie's fire immunity proving crucial against the fire-breathing beast.</p>`,
        tacticalNotes: "Fire-based dragons are vulnerable to their own element being resisted.",
        participatingCharacters: ['archie', 'markop']
    },
    {
        id: 'koopa_remnant_scuffles',
        name: "Koopa Remnant Scuffles",
        conflict: "Mushroom Kingdom Civil War",
        arc: 'mushroom_civil_war',
        date: { year: 1040, monthIndex: 6, day: 1, hour: 0, minute: 0 },
        location: "Mushroom Kingdom Borderlands",
        belligerents: {
            side_a: { name: "Koopa Remnants", factions: ['koopa_troop'] },
            side_b: { name: "Various Forces", factions: ['mushroom_regency', 'peach_loyalists'] }
        },
        commanders: { side_a: ["Kamek"], side_b: ["Various"] },
        outcome: "ongoing",
        outcomeDetail: "War of attrition continues.",
        casualties: { side_a: "Moderate", side_b: "Moderate" },
        strategicValue: "medium",
        description: `<p>Running skirmishes between scattered Koopa forces and their various enemies. Kamek's magical support keeps the remnants fighting despite overwhelming odds.</p>`,
        tacticalNotes: "Koopa remnants are desperate and unpredictable.",
        participatingCharacters: ['kamek']
    },
    {
        id: 'rise_of_iron_legion',
        name: "The Iron Consolidation",
        conflict: "Midlands Power Struggles",
        arc: null,
        date: { year: 1035, monthIndex: 6, day: 1, hour: 12, minute: 0 },
        location: "Midlands - Multiple Sites",
        belligerents: {
            side_a: { name: "Iron Legion", factions: ['iron_legion'] },
            side_b: { name: "Rival Mercenary Companies", factions: ['unaligned'] }
        },
        commanders: { side_a: ["The Iron Council"], side_b: ["Various Captains"] },
        outcome: "victory",
        outcomeDetail: "Iron Legion achieves regional dominance. Rivals absorbed or destroyed.",
        casualties: { side_a: "Moderate", side_b: "Catastrophic - most companies eliminated" },
        strategicValue: "historical",
        description: `<p>Over the course of a single bloody year, the Iron Legion transformed from one of many mercenary companies in the Midlands to the undisputed military power of the region. Through a combination of superior tactics, ruthless efficiency, and strategic marriages into noble houses, they eliminated or absorbed every significant rival.</p>`,
        tacticalNotes: "The Legion's intelligence apparatus was their true weapon. Military action was merely the final step in campaigns decided by information warfare.",
        participatingCharacters: []
    },
    {
        id: 'battle_of_bobomb_field',
        name: "Battle of Bob-omb Battlefield",
        conflict: "Second Koopa War",
        arc: 'mushroom_civil_war',
        date: { year: 1020, monthIndex: 5, day: 15, hour: 12, minute: 0 },
        location: "Bob-omb Battlefield",
        belligerents: {
            side_a: { name: "Mushroom Kingdom", factions: ['mushroom_regency'] },
            side_b: { name: "Koopa Troop", factions: ['koopa_troop'] }
        },
        commanders: { side_a: ["Gen. Toadstool"], side_b: ["Bowser"] },
        outcome: "stalemate",
        outcomeDetail: "Pyrrhic victory. Region transformed into wasteland.",
        casualties: { side_a: "Catastrophic", side_b: "Catastrophic" },
        strategicValue: "historical",
        description: `<p>A massive artillery exchange destroyed the region entirely. Both sides suffered catastrophic losses, and the battlefield remains a scarred wasteland to this day.</p>`,
        tacticalNotes: "This battle demonstrates the futility of total war.",
        participatingCharacters: ['bowser']
    },
    {
        id: 'first_koopa_war_climax',
        name: "The Siege of Koopa Keep",
        conflict: "The First Koopa War",
        arc: 'mushroom_civil_war',
        date: { year: 1000, monthIndex: 8, day: 15, hour: 6, minute: 0 },
        location: "Koopa Keep - Dark Land",
        belligerents: {
            side_a: { name: "Mushroom Alliance", factions: ['mushroom_regency'] },
            side_b: { name: "Koopa Troop", factions: ['koopa_troop'] }
        },
        commanders: { side_a: ["General Toadsworth Sr."], side_b: ["Bowser", "Kamek"] },
        outcome: "stalemate",
        outcomeDetail: "Siege broken. Armistice signed. Borders established.",
        casualties: { side_a: "Heavy - 40% of siege force", side_b: "Moderate - civilian population displaced" },
        strategicValue: "historical",
        description: `<p>The climactic battle of the First Koopa War saw the Mushroom Alliance's greatest army arrayed against Bowser's fortress homeland. For three months, the siege ground on, with neither side able to achieve decisive victory.</p>
        <p>The siege was finally broken not by military action but by exhaustion. Both sides had bled themselves white. The resulting armistice established the borders that would hold for decades—until Princess Peach's assassination shattered the peace.</p>`,
        tacticalNotes: "Kamek's weather manipulation spells proved decisive in breaking multiple assault attempts. Anti-magic units became a priority after this engagement.",
        participatingCharacters: ['bowser', 'kamek', 'toadsworth']
    },
    {
        id: 'bowsers_first_invasion',
        name: "Bowser's First Invasion",
        conflict: "The First Koopa War",
        arc: 'mushroom_civil_war',
        date: { year: 1000, monthIndex: 3, day: 1, hour: 6, minute: 0 },
        location: "Mushroom Plains",
        belligerents: {
            side_a: { name: "Mushroom Kingdom", factions: ['mushroom_regency'] },
            side_b: { name: "Koopa Troop", factions: ['koopa_troop'] }
        },
        commanders: { side_a: ["Princess Peach"], side_b: ["Bowser"] },
        outcome: "victory",
        outcomeDetail: "Invasion repelled. Bowser retreated.",
        casualties: { side_a: "Moderate", side_b: "Heavy Koopa losses" },
        strategicValue: "historical",
        description: `<p>Bowser's first attempt to conquer the Mushroom Kingdom ended in failure. Princess Peach's leadership and the kingdom's defenses proved too strong for the young Koopa King.</p>`,
        tacticalNotes: "This defeat shaped Bowser's future strategies.",
        participatingCharacters: ['bowser', 'princess_peach']
    },
    {
        id: 'assassination_of_peach',
        name: "The Assassination of Princess Peach",
        conflict: "Mushroom Kingdom Civil War",
        arc: 'mushroom_civil_war',
        date: { year: 955, monthIndex: 6, day: 1, hour: 14, minute: 0 },
        location: "Peach's Castle - Royal Chambers",
        belligerents: {
            side_a: { name: "Royal Guard", factions: ['mushroom_regency'] },
            side_b: { name: "Unknown Assassins", factions: ['unaligned'] }
        },
        commanders: { side_a: ["Captain of the Guard"], side_b: ["Unknown"] },
        outcome: "defeat",
        outcomeDetail: "Princess Peach killed. Assassins escaped. Kingdom shattered.",
        casualties: { side_a: "Princess Peach, 3 Royal Guards", side_b: "Unknown - presumed minimal" },
        strategicValue: "historical",
        description: `<p>The single most consequential act of violence in Mushroom Kingdom history. Princess Peach was found dead in her royal chambers under circumstances that remain disputed to this day. The official investigation was compromised within hours as various factions moved to secure power.</p>
        <p>Chief Thornpaw of the Rakasha Clans, who would later reveal he had been in a secret relationship with the Princess, discovered evidence of a hidden hatch in her room during a gala infiltration 85 years later—suggesting the assassins had intimate knowledge of the castle's secret passages.</p>`,
        tacticalNotes: "The castle's secret passages were never fully mapped. This intelligence gap contributed to the assassination's success.",
        participatingCharacters: ['princess_peach']
    }
];


// ============================================================================
// CONFLICT METADATA
// ============================================================================



// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Format a date object using the calendar system
 */
function formatDate(dateObj) {
    if (!dateObj || typeof dateObj !== 'object') return "Unknown Date";
    
    const month = CALENDAR_DATA.months.values[dateObj.monthIndex];
    const monthName = month ? month.name : `Month ${dateObj.monthIndex + 1}`;
    
    return `${dateObj.day} ${monthName}, ${dateObj.year}`;
}

/**
 * Format time from date object
 */
function formatTime(dateObj) {
    if (!dateObj || typeof dateObj !== 'object') return "";
    if (dateObj.hour === undefined) return "";
    
    const hour = dateObj.hour.toString().padStart(2, '0');
    const minute = (dateObj.minute || 0).toString().padStart(2, '0');
    return `${hour}:${minute}`;
}

/**
 * Get outcome styling class
 */
function getOutcomeClass(outcome) {
    const lower = outcome.toLowerCase();
    if (lower === 'victory') return 'outcome-victory';
    if (lower === 'defeat') return 'outcome-defeat';
    if (lower === 'stalemate') return 'outcome-stalemate';
    if (lower === 'ongoing' || lower === 'retreat') return 'outcome-ongoing';
    return 'outcome-unknown';
}

/**
 * Get strategic value icon
 */
function getStrategicIcon(value) {
    const icons = {
        'critical': '⚔️',
        'high': '🎯',
        'medium': '📍',
        'low': '📌',
        'historical': '📜'
    };
    return icons[value] || '❓';
}

/**
 * Calculate days ago from current game date
 */
function getDaysAgo(dateObj) {
    if (!dateObj || typeof dateObj !== 'object') return null;
    
    const currentTotal = (CURRENT_GAME_DATE.year * 365) + (CURRENT_GAME_DATE.monthIndex * 30) + CURRENT_GAME_DATE.day;
    const battleTotal = (dateObj.year * 365) + (dateObj.monthIndex * 30) + dateObj.day;
    
    return currentTotal - battleTotal;
}

/**
 * Checks if content should be visible based on CURRENT_GAME_DATE.
 * STRICTLY compares Year, Month, and Day. Ignores Time.
 * 
 * LOGIC:
 * 1. If date is past/present -> Visible.
 * 2. If date is future -> Hidden, UNLESS window.debugMode is true.
 */
function isContentVisible(dateObj) {
    if (!dateObj) return true; // Assume visible if no date structure provided

    let isFuture = false;

    // Check Year
    if (dateObj.year > CURRENT_GAME_DATE.year) isFuture = true;
    else if (dateObj.year === CURRENT_GAME_DATE.year) {
        // Check Month
        if (dateObj.monthIndex > CURRENT_GAME_DATE.monthIndex) isFuture = true;
        else if (dateObj.monthIndex === CURRENT_GAME_DATE.monthIndex) {
            // Check Day
            if (dateObj.day > CURRENT_GAME_DATE.day) isFuture = true;
        }
    }

    // If it's in the future, check for Debug Mode
    if (isFuture) {
        return window.debugMode === true;
    }

    return true;
}

/**
 * Helper to specifically identify future events for styling purposes.
 * Returns true if the event is in the future relative to CURRENT_GAME_DATE.
 */
function isFutureEvent(dateObj) {
    if (!dateObj) return false;
    if (dateObj.year > CURRENT_GAME_DATE.year) return true;
    if (dateObj.year === CURRENT_GAME_DATE.year && dateObj.monthIndex > CURRENT_GAME_DATE.monthIndex) return true;
    if (dateObj.year === CURRENT_GAME_DATE.year && dateObj.monthIndex === CURRENT_GAME_DATE.monthIndex && dateObj.day > CURRENT_GAME_DATE.day) return true;
    return false;
}

// ============================================================================
// RENDER FUNCTIONS
// ============================================================================

function renderBelligerents(belligerents) {
    const sides = ['side_a', 'side_b', 'side_c', 'side_d'];
    const sideColors = ['var(--positive-color)', 'var(--negative-color)', 'var(--accent-color)', 'var(--neutral-color)'];
    
    return sides.map((sideKey, index) => {
        if (!belligerents[sideKey]) return '';
        
        const side = belligerents[sideKey];
        const color = sideColors[index];
        
        const factionHTML = side.factions.map(fKey => {
            const faction = LORE_DATA.factions[fKey];
            if (faction) {
                return `
                    <div class="belligerent-badge" title="${faction.name}">
                        <img src="${faction.logo}" alt="${faction.name}" class="faction-icon">
                        <span>${faction.name}</span>
                    </div>
                `;
            }
            return `<div class="belligerent-badge text-only">${fKey.replace(/_/g, ' ')}</div>`;
        }).join('');

        return `
            <div class="belligerent-side" style="--side-color: ${color}">
                <div class="side-header">${side.name}</div>
                <div class="side-factions">${factionHTML || '<span class="no-faction">Independent</span>'}</div>
            </div>
        `;
    }).join('');
}

function renderCasualties(casualties) {
    if (!casualties || typeof casualties === 'string') {
        return `<p class="casualty-text">${casualties || 'Unknown'}</p>`;
    }
    
    return Object.entries(casualties).map(([side, detail]) => {
        const sideName = side.replace('side_', '').toUpperCase();
        return `<div class="casualty-row"><strong>Side ${sideName}:</strong> ${detail}</div>`;
    }).join('');
}

function renderBattle(battle) {
    // Visibility Check (Redundant if filtered, but good for safety)
    if (!isContentVisible(battle.date)) return '';

    const displayDate = formatDate(battle.date);
    const displayTime = formatTime(battle.date);
    const daysAgo = getDaysAgo(battle.date);
    const timeAgo = daysAgo !== null ? getDynamicTimestamp(battle.date) : '';
    const outcomeClass = getOutcomeClass(battle.outcome);
    const strategicIcon = getStrategicIcon(battle.strategicValue);
    
    // DEBUG: Styles for Future Events shown via Debug Mode
    const isHiddenFuture = isFutureEvent(battle.date);
    const debugBadge = isHiddenFuture 
        ? `<div style="background: repeating-linear-gradient(45deg, #aa0000, #aa0000 10px, #660000 10px, #660000 20px); color: #fff; padding: 4px; font-weight: bold; font-size: 0.8em; text-align: center; margin-bottom: 8px; border: 1px solid #ff4444; border-radius: 4px; text-transform: uppercase; letter-spacing: 1px;">⚠️ Debug: Hidden Future Event ⚠️</div>` 
        : '';
    const opacityStyle = isHiddenFuture ? 'style="opacity: 0.75; border: 2px dashed #ff4444;"' : '';

    // Get related arc info
    const arc = battle.arc ? STORY_ARCS[battle.arc] : null;
    const arcBadge = arc ? `
        <a href="#" class="arc-link" data-arc="${arc.id}" title="Part of: ${arc.name}">
            <span class="arc-icon">${arc.icon}</span>
            <span class="arc-name">${arc.name}</span>
        </a>
    ` : '';

    const commandersHTML = Object.entries(battle.commanders).map(([side, names]) => {
        const sideName = battle.belligerents[side]?.name || 'Unknown';
        const sideIndex = ['side_a', 'side_b', 'side_c', 'side_d'].indexOf(side);
        const colors = ['var(--positive-color)', 'var(--negative-color)', 'var(--accent-color)', 'var(--neutral-color)'];
        const color = colors[sideIndex] || 'var(--text-secondary)';
        
        return `
            <div class="commander-group">
                <span class="commander-side" style="color: ${color}">${sideName}:</span>
                <span class="commander-names">${names.join(', ')}</span>
            </div>
        `;
    }).join('');

    return `
    <article class="battle-entry" id="${battle.id}" 
             data-strategic="${battle.strategicValue}" 
             data-outcome="${battle.outcome}"
             data-conflict="${battle.conflict.toLowerCase().replace(/\s/g, '-')}"
             ${opacityStyle}>
            ${debugBadge}
            <header class="battle-header">
                <div class="battle-title-row">
                    <h3 class="battle-name">${battle.name}</h3>
                    <div class="battle-meta">
                        <span class="outcome-badge ${outcomeClass}">${battle.outcome.toUpperCase()}</span>
                        <span class="strategic-badge" title="Strategic Value: ${battle.strategicValue}">
                            ${strategicIcon} ${battle.strategicValue}
                        </span>
                    </div>
                </div>
                <div class="battle-subtitle">
                    <span class="battle-conflict">${battle.conflict}</span>
                    ${arcBadge}
                </div>
            </header>

            <div class="battle-content">
                <div class="battle-main">
                    <div class="battle-datetime">
                        <div class="datetime-primary">
                            <span class="date-icon">📅</span>
                            <span class="date-text">${displayDate}</span>
                            ${displayTime ? `<span class="time-text">@ ${displayTime}</span>` : ''}
                        </div>
                        ${timeAgo ? `<div class="datetime-secondary">${timeAgo}</div>` : ''}
                    </div>

                    <div class="battle-location">
                        <span class="location-icon">📍</span>
                        <span class="location-text">${battle.location}</span>
                    </div>

                    <div class="battle-narrative">
                        ${battle.description}
                    </div>

                    ${battle.tacticalNotes ? `
                        <div class="tactical-notes">
                            <span class="notes-icon">📋</span>
                            <span class="notes-label">Tactical Notes:</span>
                            <span class="notes-text">${battle.tacticalNotes}</span>
                        </div>
                    ` : ''}
                </div>

                <aside class="battle-sidebar">
                    <section class="sidebar-section">
                        <h5 class="section-title">Belligerents</h5>
                        <div class="belligerents-grid">
                            ${renderBelligerents(battle.belligerents)}
                        </div>
                    </section>

                    <section class="sidebar-section">
                        <h5 class="section-title">Commanders</h5>
                        <div class="commanders-list">
                            ${commandersHTML}
                        </div>
                    </section>

                    <section class="sidebar-section">
                        <h5 class="section-title">Outcome</h5>
                        <p class="outcome-detail">${battle.outcomeDetail}</p>
                    </section>

                    <section class="sidebar-section">
                        <h5 class="section-title">Casualties</h5>
                        <div class="casualties-list">
                            ${renderCasualties(battle.casualties)}
                        </div>
                    </section>
                </aside>
            </div>
        </article>
    `;
}

// ============================================================================
// CONFLICT AGGREGATION
// ============================================================================

function getConflictsData() {
    const conflicts = {};
    
    // Sort chronologically for timeline
    const chronoBattles = [...MAJOR_BATTLES].sort((a, b) => {
        const dateA = typeof a.date === 'object' ? new Date(a.date.year, a.date.monthIndex, a.date.day) : new Date(0);
        const dateB = typeof b.date === 'object' ? new Date(b.date.year, b.date.monthIndex, b.date.day) : new Date(0);
        return dateA - dateB;
    });

    chronoBattles.forEach(battle => {
        // FILTER: Check visibility (handles Dates + Debug Mode)
        if (!isContentVisible(battle.date)) return;

        const key = battle.conflict;
        if (!conflicts[key]) {
            conflicts[key] = {
                name: key,
                battles: [],
                factionsInvolved: new Set(),
                arcsInvolved: new Set(),
                startDate: null,
                lastUpdate: null,
                isActive: false,
                totalCasualties: 0,
                victories: { side_a: 0, side_b: 0 }
            };
        }

        const c = conflicts[key];
        c.battles.push(battle);

        if (!c.startDate) c.startDate = battle.date;
        c.lastUpdate = battle.date;

        // Track factions
        ['side_a', 'side_b', 'side_c', 'side_d'].forEach(side => {
            if (battle.belligerents[side]) {
                battle.belligerents[side].factions.forEach(f => c.factionsInvolved.add(f));
            }
        });

        // Track arcs
        if (battle.arc) c.arcsInvolved.add(battle.arc);

        // Determine if active
        const outcomeLower = battle.outcome.toLowerCase();
        if (outcomeLower === 'ongoing' || outcomeLower === 'retreat') {
            c.isActive = true;
        }
        
        // Count victories
        if (outcomeLower === 'victory') c.victories.side_a++;
        if (outcomeLower === 'defeat') c.victories.side_b++;
    });

    // Return visible conflicts
    return Object.values(conflicts)
        .filter(c => c.battles.length > 0)
        .sort((a, b) => {
            if (a.isActive !== b.isActive) return b.isActive - a.isActive;
            const dateA = a.lastUpdate ? new Date(a.lastUpdate.year, a.lastUpdate.monthIndex, a.lastUpdate.day) : new Date(0);
            const dateB = b.lastUpdate ? new Date(b.lastUpdate.year, b.lastUpdate.monthIndex, b.lastUpdate.day) : new Date(0);
            return dateB - dateA;
        });
}

function renderConflicts() {
    const container = document.getElementById('conflicts-container');
    if (!container) return;

    const conflicts = getConflictsData();

    container.innerHTML = conflicts.map(c => {
        const battleCount = c.battles.length;
        const statusClass = c.isActive ? 'status-active' : 'status-resolved';
        const statusText = c.isActive ? 'Active Conflict' : 'Dormant / Resolved';
        const statusIcon = c.isActive ? '🔴' : '🟢';

        // Generate Combatant Chips
        const combatantsHTML = Array.from(c.factionsInvolved).map(fKey => {
            const f = LORE_DATA.factions[fKey];
            if (f) {
                return `
                    <div class="combatant-chip" title="${f.name}">
                        <img src="${f.logo}" alt="${f.name}" class="combatant-icon">
                        <span class="combatant-name">${f.name}</span>
                    </div>
                `;
            }
            return `<div class="combatant-chip text-only">${fKey.replace(/_/g, ' ')}</div>`;
        }).join('');

        // Generate Arc Links
        const arcsHTML = Array.from(c.arcsInvolved).map(arcId => {
            const arc = STORY_ARCS[arcId];
            if (arc) {
                return `
                    <span class="arc-chip" title="${arc.name}">
                        ${arc.icon} ${arc.name}
                    </span>
                `;
            }
            return '';
        }).join('');

        // Generate Battle Timeline
        const battleListHTML = [...c.battles].reverse().map(b => {
            const outcomeClass = getOutcomeClass(b.outcome);
            const dateStr = formatDate(b.date);
            return `
                <a href="#${b.id}" class="timeline-entry" onclick="switchTab('battles')">
                    <span class="timeline-dot ${outcomeClass}"></span>
                    <span class="timeline-name">${b.name}</span>
                    <span class="timeline-date">${dateStr}</span>
                </a>
            `;
        }).join('');

        const conflictMeta = CONFLICT_DETAILS[c.name];
        const metaHTML = conflictMeta ? `
            <section class="conflict-section">
                <h6 class="section-header">Conflict Overview</h6>
                <p class="conflict-summary">${conflictMeta.summary}</p>
                <div class="conflict-meta-stats">
                    <span class="meta-stat">
                        <strong>Duration:</strong> ${conflictMeta.startYear === 1040 ? 'Ongoing (1040)' : `${1040 - conflictMeta.startYear} years`}
                    </span>
                    <span class="meta-stat">
                        <strong>Est. Casualties:</strong> ${conflictMeta.estimatedCasualties}
                    </span>
                </div>
            </section>
            <section class="conflict-section">
                <h6 class="section-header">Root Cause</h6>
                <p class="conflict-root-cause">${conflictMeta.rootCause}</p>
            </section>
        ` : '';

        return `
            <div class="conflict-card ${statusClass}">
                <div class="conflict-header">
                    <div class="conflict-title">
                        <h3>${c.name}</h3>
                        <span class="conflict-status">
                            ${statusIcon} ${statusText}
                        </span>
                    </div>
                    <div class="conflict-quick-stats">
                        <span class="quick-stat" title="Total Engagements">
                            ⚔️ ${battleCount} battles
                        </span>
                    </div>
                </div>
                
                <div class="conflict-body">
                    <div class="conflict-main">
                        <section class="conflict-section">
                            <h6 class="section-header">Combatants</h6>
                            <div class="combatant-grid">
                                ${combatantsHTML || '<em>No factions recorded</em>'}
                            </div>
                        </section>

                        ${arcsHTML ? `
                            <section class="conflict-section">
                                <h6 class="section-header">Related Story Arcs</h6>
                                <div class="arcs-grid">
                                    ${arcsHTML}
                                </div>
                            </section>
                        ` : ''}

                        ${metaHTML}

                        <section class="conflict-section conflict-dates">
                            <div class="date-box">
                                <span class="date-label">First Engagement</span>
                                <span class="date-value">${formatDate(c.startDate)}</span>
                            </div>
                            <div class="date-box">
                                <span class="date-label">Latest Engagement</span>
                                <span class="date-value">${formatDate(c.lastUpdate)}</span>
                            </div>
                        </section>
                    </div>

                    <aside class="conflict-timeline">
                        <h6 class="section-header">Battle Timeline</h6>
                        <div class="timeline-list">
                            ${battleListHTML}
                        </div>
                    </aside>
                </div>
            </div>
        `;
    }).join('');
}

// ============================================================================
// FILTERING & SORTING
// ============================================================================

function createFilterControls() {
    return `
        <div class="filter-controls">
            <div class="filter-group">
                <label class="filter-label">Sort By</label>
                <select id="sort-select" class="filter-select">
                    <option value="date-desc">Most Recent</option>
                    <option value="date-asc">Oldest First</option>
                    <option value="strategic">Strategic Value</option>
                    <option value="conflict">By Conflict</option>
                </select>
            </div>
            
            <div class="filter-group">
                <label class="filter-label">Outcome</label>
                <select id="outcome-filter" class="filter-select">
                    <option value="all">All Outcomes</option>
                    <option value="victory">Victories</option>
                    <option value="defeat">Defeats</option>
                    <option value="stalemate">Stalemates</option>
                    <option value="ongoing">Ongoing</option>
                </select>
            </div>

            <div class="filter-group">
                <label class="filter-label">Search</label>
                <input type="text" id="battle-search" class="filter-input" placeholder="Search battles...">
            </div>
        </div>
    `;
}

function applyFilters() {
    const sortValue = document.getElementById('sort-select')?.value || 'date-desc';
    const outcomeFilter = document.getElementById('outcome-filter')?.value || 'all';
    const searchTerm = document.getElementById('battle-search')?.value?.toLowerCase() || '';

    // FILTER: Start with visible battles (handles Dates + Debug)
    let filteredBattles = MAJOR_BATTLES.filter(b => isContentVisible(b.date));

    // Apply outcome filter
    if (outcomeFilter !== 'all') {
        filteredBattles = filteredBattles.filter(b => b.outcome.toLowerCase() === outcomeFilter);
    }

    // Apply search filter
    if (searchTerm) {
        filteredBattles = filteredBattles.filter(b => 
            b.name.toLowerCase().includes(searchTerm) ||
            b.conflict.toLowerCase().includes(searchTerm) ||
            b.location.toLowerCase().includes(searchTerm)
        );
    }

    // Apply sorting
    const strategicOrder = { critical: 0, high: 1, medium: 2, low: 3, historical: 4 };
    
    filteredBattles.sort((a, b) => {
        const dateA = typeof a.date === 'object' 
            ? new Date(a.date.year, a.date.monthIndex, a.date.day, a.date.hour || 0, a.date.minute || 0) 
            : new Date(0);
        const dateB = typeof b.date === 'object' 
            ? new Date(b.date.year, b.date.monthIndex, b.date.day, b.date.hour || 0, b.date.minute || 0) 
            : new Date(0);

        switch (sortValue) {
            case 'date-asc': return dateA - dateB;
            case 'date-desc': return dateB - dateA;
            case 'strategic': 
                return (strategicOrder[a.strategicValue] || 99) - (strategicOrder[b.strategicValue] || 99);
            case 'conflict': return a.conflict.localeCompare(b.conflict);
            default: return dateB - dateA;
        }
    });

    const container = document.getElementById('battlefield-container');
    const listContainer = container.querySelector('.battle-list');
    
    if (listContainer) {
        if (filteredBattles.length === 0) {
            listContainer.innerHTML = `
                <div class="no-results">
                    <span class="no-results-icon">🔍</span>
                    <p>No battles match your criteria</p>
                </div>
            `;
        } else {
            listContainer.innerHTML = filteredBattles.map(renderBattle).join('');
        }
    }
}

// ============================================================================
// TAB MANAGEMENT
// ============================================================================

function initTabs() {
    const buttons = document.querySelectorAll('.view-btn');
    const sections = document.querySelectorAll('.view-section');

    window.switchTab = (targetId) => {
        buttons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.target === targetId);
        });

        sections.forEach(sec => {
            const isTarget = 
                (targetId === 'battles' && sec.id === 'battlefield-container') ||
                (targetId === 'conflicts' && sec.id === 'conflicts-container');
            sec.style.display = isTarget ? 'block' : 'none';
        });

        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    buttons.forEach(btn => {
        btn.addEventListener('click', () => window.switchTab(btn.dataset.target));
    });
}

// ============================================================================
// STATISTICS DASHBOARD
// ============================================================================

function renderStatsDashboard() {
    // FILTER: Only include visible battles in stats
    const visibleBattles = MAJOR_BATTLES.filter(b => isContentVisible(b.date));

    const totalBattles = visibleBattles.length;
    const victories = visibleBattles.filter(b => b.outcome === 'victory').length;
    const ongoing = visibleBattles.filter(b => b.outcome === 'ongoing' || b.outcome === 'retreat').length;
    const uniqueConflicts = new Set(visibleBattles.map(b => b.conflict)).size;
    
    const factionCounts = {};
    visibleBattles.forEach(battle => {
        ['side_a', 'side_b', 'side_c', 'side_d'].forEach(side => {
            if (battle.belligerents[side]) {
                battle.belligerents[side].factions.forEach(f => {
                    factionCounts[f] = (factionCounts[f] || 0) + 1;
                });
            }
        });
    });
    
    const topFaction = Object.entries(factionCounts)
        .sort((a, b) => b[1] - a[1])[0];
    const topFactionData = topFaction ? LORE_DATA.factions[topFaction[0]] : null;

    return `
        <div class="stats-dashboard">
            <div class="stat-card">
                <span class="stat-icon">⚔️</span>
                <div class="stat-content">
                    <span class="stat-value">${totalBattles}</span>
                    <span class="stat-label">Total Battles</span>
                </div>
            </div>
            <div class="stat-card">
                <span class="stat-icon">🏆</span>
                <div class="stat-content">
                    <span class="stat-value">${victories}</span>
                    <span class="stat-label">Victories</span>
                </div>
            </div>
            <div class="stat-card">
                <span class="stat-icon">🔥</span>
                <div class="stat-content">
                    <span class="stat-value">${ongoing}</span>
                    <span class="stat-label">Ongoing</span>
                </div>
            </div>
            <div class="stat-card">
                <span class="stat-icon">📜</span>
                <div class="stat-content">
                    <span class="stat-value">${uniqueConflicts}</span>
                    <span class="stat-label">Conflicts</span>
                </div>
            </div>
            ${topFactionData ? `
                <div class="stat-card stat-card-wide">
                    <span class="stat-icon">
                        <img src="${topFactionData.logo}" alt="${topFactionData.name}" class="stat-faction-logo">
                    </span>
                    <div class="stat-content">
                        <span class="stat-value">${topFactionData.name}</span>
                        <span class="stat-label">Most Active (${topFaction[1]} battles)</span>
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}

// ============================================================================
// INITIALIZATION
// ============================================================================

function init() {
    const container = document.getElementById('battlefield-container');
    if (!container) return;
    const savedDebug = localStorage.getItem('vigilanceDebugMode');
    window.debugMode = savedDebug === 'true';
    // FILTER: Initial render uses visible battles
    const visibleBattles = MAJOR_BATTLES.filter(b => isContentVisible(b.date));

    const sortedBattles = [...visibleBattles].sort((a, b) => {
        const dateA = typeof a.date === 'object' 
            ? new Date(a.date.year, a.date.monthIndex, a.date.day, a.date.hour || 0, a.date.minute || 0) 
            : new Date(0);
        const dateB = typeof b.date === 'object' 
            ? new Date(b.date.year, b.date.monthIndex, b.date.day, b.date.hour || 0, b.date.minute || 0) 
            : new Date(0);
        return dateB - dateA;
    });

    container.innerHTML = `
        ${renderStatsDashboard()}
        ${createFilterControls()}
        <div class="battle-list">
            ${sortedBattles.map(renderBattle).join('')}
        </div>
    `;

    document.getElementById('sort-select')?.addEventListener('change', applyFilters);
    document.getElementById('outcome-filter')?.addEventListener('change', applyFilters);
    document.getElementById('battle-search')?.addEventListener('input', debounce(applyFilters, 300));

    renderConflicts();
    initTabs();

    if (window.location.hash) {
        const targetId = window.location.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        }
    }
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

init();