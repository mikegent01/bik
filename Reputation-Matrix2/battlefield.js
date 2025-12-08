import { LORE_DATA } from './lore.js';
import { FACTION_COLORS } from './factions/faction-colors.js';
import { CALENDAR_DATA, CURRENT_GAME_DATE, getDynamicTimestamp } from './calendar-data.js';
import { STORY_ARCS, getRumorsByArc } from './lore.js';
// ============================================================================
// CONFLICT METADATA - Add after MAJOR_BATTLES array
// ============================================================================

export const CONFLICT_DETAILS = {
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
            { name: "Crisis (Day 20-21)", description: "Full supernatural breach, Iron Legion involvement, multi-faction chaos." }
        ],
        keyFactions: ['liberated_toads', 'iron_legion', 'mages_guild'],
        estimatedCasualties: "Dozens of toads, multiple Legion agents, unknown supernatural entities"
    },
    "Vigilance Crew Incidents": {
        summary: "The ongoing adventures and conflicts surrounding the airship Vigilance and its liberator crew.",
        startYear: 1040,
        status: "active",
        rootCause: "The party's seizure of the toad-trafficking airship created instant enemies and responsibilities.",
        majorPhases: [
            { name: "Liberation (Day 4-5)", description: "Seizure of the Vigilance from X.O." },
            { name: "Consolidation (Day 6-10)", description: "Dealing with fallout, discovering trafficking operation." },
            { name: "Hunted (Day 11-Present)", description: "Multiple factions pursue the ship and crew." }
        ],
        keyFactions: ['liberated_toads', 'crimson_fleet', 'iron_legion'],
        estimatedCasualties: "Estimated 70+ across all incidents"
    }
};
export const MAJOR_BATTLES = [
    {
        id: 'battle_solarium_shatter',
        name: "The Shattering of the Solarium",
        conflict: "Raventree Manor Curse",
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
        name: "Ambush in the Silent Grove",
        conflict: "Raventree Manor Crisis",
        arc: 'raventree_manor',
        date: { year: 1040, monthIndex: 6, day: 20, hour: 23, minute: 30 },
        location: "Raventree Manor, Hedge Maze & Grove",
        belligerents: {
            side_a: { name: "Rescue Party", factions: ['liberated_toads'] },
            side_b: { name: "The Web-Weaver", factions: ['unaligned'] }
        },
        commanders: { side_a: ["Markop (Titan Form)", "Remi"], side_b: ["Arachnid Matriarch"] },
        outcome: "ongoing",
        outcomeDetail: "Markop transformed to giant size. Vigilance ignored battle. Squad scattered.",
        casualties: { 
            side_a: "Remi's Dog damaged, Smoking J poisoned, Toad squad lost in fountain area", 
            side_b: "Multiple lesser spiders killed" 
        },
        strategicValue: "critical",
        description: `<p>A desperate rescue mission descended into chaos in the web-choked grove. While Remi and her mechanical hound held off the initial assault—resulting in damage to the construct—the Toad squad splintered. 'Smoking J' took a venomous bite while trying to flank, and Salem's unit became disoriented and lost in a pitch-black, flooded fountain district.</p>
        <p>The tide turned when the Oracle appeared, casting a blinding illumination spell while Waluigi cleared a path with ice magic. In a desperate gamble, Markop accepted a cryptic blessing from the Oracle, instantly growing to colossal proportions (5x size) to grapple with the Arachnid Matriarch on equal footing.</p>
        <p><strong>The Airship Incident:</strong> Amidst the clash of titans—and Eager blindly firing pepper spray while trapped in his own enlarged form—the hijacked airship 'Vigilance' roared overhead. Blasting Iron Legion propaganda songs, it completely ignored the plight of its former crew, flying straight toward the manor proper.</p>`,
        tacticalNotes: "The Oracle's blessings grant immense power but likely carry a heavy price. Giant combatants require wide engagement zones.",
        participatingCharacters: ['markop', 'remi', 'waluigi', 'eager', 'oracle']
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
    <p>Donkey Kong's response was immediate and undiplomatic. His phone call to King K. Rool—recorded by the DK Crew's own security systems—devolved quickly from accusation to threat. K. Rool, characteristically, denied everything while simultaneously threatening Funky's life if DK didn't "mind his own business."</p>
    <p>The call ended with K. Rool's chilling words: "That surfboard-waxing fool should watch his back. The next wave he catches might be his last." Within hours, Kremling assassin Galypso was en route to DK Island.</p>
    <p><strong>Intelligence Assessment:</strong> The bug's placement in Funky's shack rather than DK's home suggests the Kremlings correctly identified Funky as the crew's intelligence backbone. Eliminating him would blind the DK Crew to future operations.</p>
    <p><strong>Strategic Implications:</strong> The cold war that has defined Kong-Kremling relations for decades is effectively over. Both sides are mobilizing for what may be a full-scale conflict. Neutral parties in the region are choosing sides or preparing to flee.</p>`,
    tacticalNotes: "Funky Kong's technical expertise makes him a priority target. Protection details should be reinforced.",
    participatingCharacters: ['donkey_kong', 'funky_kong', 'king_k_rool']
},
// ============================================================================
// HISTORICAL BATTLES - Add these to your MAJOR_BATTLES array
// ============================================================================

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
    <p>Chief Thornpaw of the Rakasha Clans, who would later reveal he had been in a secret relationship with the Princess, discovered evidence of a hidden hatch in her room during a gala infiltration 85 years later—suggesting the assassins had intimate knowledge of the castle's secret passages.</p>
    <p>The power vacuum created by her death triggered immediate factional violence. Within days, Bowser's Koopa Troop, the Mushroom Regency, and what would become the Peach Loyalists were at each other's throats. The war that followed would claim hundreds of thousands of lives and continues to this day.</p>
    <p><strong>Historical Note:</strong> Multiple theories persist about the assassination. Some blame Bowser, others point to internal Regency politics, and a growing faction believes interdimensional actors were involved. The truth may never be known.</p>`,
    tacticalNotes: "The castle's secret passages were never fully mapped. This intelligence gap contributed to the assassination's success.",
    participatingCharacters: ['princess_peach']
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
    description: `<p>Over the course of a single bloody year, the Iron Legion transformed from one of many mercenary companies in the Midlands to the undisputed military power of the region. Through a combination of superior tactics, ruthless efficiency, and strategic marriages into noble houses, they eliminated or absorbed every significant rival.</p>
    <p>The consolidation campaign was notable for its precision. Rather than costly open battles, the Legion favored intelligence operations, targeted assassinations, and economic warfare. Rival companies would find their contracts cancelled, their supply lines cut, and their officers dead in their beds.</p>
    <p>By year's end, the Legion had achieved something unprecedented: a mercenary company with the power of a nation-state. Their influence now extends into the Regal Empire's political structure, and they maintain a network of spies and informants that rivals any government agency.</p>
    <p><strong>Long-term Impact:</strong> The Iron Legion's rise fundamentally altered the balance of power in the region. They now control toad trafficking routes, maintain "security contracts" that amount to protection rackets, and have become kingmakers in Midlands politics.</p>`,
    tacticalNotes: "The Legion's intelligence apparatus was their true weapon. Military action was merely the final step in campaigns decided by information warfare.",
    participatingCharacters: []
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
    <p>The Mushroom forces, led by the elder Toadsworth (father of the current Chancellor), employed every conventional tactic: bombardment, starvation, tunneling, and repeated assaults on the walls. Each was countered by Kamek's magic and Bowser's seemingly inexhaustible ferocity.</p>
    <p>The siege was finally broken not by military action but by exhaustion. Both sides had bled themselves white. The resulting armistice established the borders that would hold for decades—until Princess Peach's assassination shattered the peace.</p>
    <p><strong>Military Analysis:</strong> This battle demonstrated the futility of conventional warfare against a magically-defended position. Future conflicts would see both sides develop new approaches: the Koopa Troop invested in mobile warfare and surprise attacks, while the Mushroom forces developed anti-magic countermeasures.</p>`,
    tacticalNotes: "Kamek's weather manipulation spells proved decisive in breaking multiple assault attempts. Anti-magic units became a priority after this engagement.",
    participatingCharacters: ['bowser', 'kamek', 'toadsworth']
},

{
    id: 'fall_of_bramblehaven_detailed',
    name: "The Fall of Bramblehaven",
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
    description: `<p>The assault on Bramblehaven began at dawn and did not end until well after sunset. Captain Toadette's Peach Loyalist forces, driven by decades of grief-fueled rage, showed absolutely no quarter to the Fawful defenders.</p>
    <p>The fortress, a critical Fawful supply depot and communications hub, was defended by approximately 200 soldiers equipped with Fawful's signature high-tech weaponry. The Loyalists attacked with nearly 600 troops, accepting horrific casualties in exchange for forward momentum.</p>
    <p>Embercap, the Loyalist infiltration specialist, had previously gathered intelligence on the fortress's weak points during a disastrous gala infiltration that cost the life of operative Jade Grit. This intelligence proved crucial, allowing the Loyalists to breach the eastern wall where the automated defenses had a blind spot.</p>
    <p>What followed was not a battle but a systematic slaughter. Toadette personally executed surrendering officers, declaring that "traitors to the Princess's memory deserve no mercy." The few Fawful soldiers who attempted to flee were hunted down by Loyalist cavalry.</p>
    <p><strong>War Crime Allegations:</strong> Neutral observers from the Regal Empire have documented the massacre for potential prosecution. The Loyalists' response has been defiant: "We are already at war with civilization. Their laws mean nothing to us."</p>
    <p><strong>Strategic Impact:</strong> The fall of Bramblehaven cuts Fawful's northern supply lines and provides the Loyalists with valuable intelligence on his technological capabilities. However, the brutality of the assault has driven wavering neutral parties toward Fawful's faction.</p>`,
    tacticalNotes: "Fawful's automated defenses are powerful but have exploitable sensor gaps. Human intelligence remains superior to technological surveillance.",
    participatingCharacters: ['captain_toadette', 'embercap']
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
    <p>The Syndicate, a mid-tier criminal organization specializing in narcotic tea blends and protection rackets, had summoned Archie to discuss "mutual interests." Unknown to Archie, they had also invited the Iron Legion to the same meeting, intending to sell him out for bounty money.</p>
    <p>When someone—accounts differ on who—pressed a panic button, chaos erupted. Syndicate enforcers drew weapons, Legion agents burst through the doors, and Archie, feeling cornered, unleashed a high-level Fireball spell directly into the center of the room.</p>
    <p>The warehouse's dry wooden structure and the presence of highly flammable tea compounds created a secondary conflagration. Earl Grey, the Syndicate's chief enforcer, was caught in the initial blast. His body, saturated with magical accelerants from years of enhanced tea consumption, literally exploded, scattering debris and shrapnel throughout the space.</p>
    <p>Green T survived only by virtue of his position near the exit. He would later resurface at Raventree Manor, nursing a vendetta against Archie and displaying bizarre new abilities—possibly gained from exposure to the magical explosion.</p>
    <p><strong>Aftermath:</strong> The Tea Leaf Syndicate effectively ceased to exist as an organization. Their territory was absorbed by rivals within days. The Iron Legion added the incident to Archie's growing file of "destabilizing activities." The Mages' Guild condemned the use of such powerful magic in a civilian area.</p>`,
    tacticalNotes: "Fireball spells in enclosed spaces with flammable materials create exponentially more destruction. Archie has demonstrated a pattern of excessive force.",
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
    description: `<p>The Democratic Summit was intended to normalize relations between the DK Crew and the broader international community. Instead, it became a case study in diplomatic failure when Lanky Kong, substituting for the absent Donkey Kong, engaged in behavior so bizarre that multiple delegations walked out.</p>
    <p>Eyewitness accounts describe Lanky performing inappropriate physical comedy during solemn proceedings, making nonsensical policy proposals, and at one point attempting to juggle classified documents. Whether this was deliberate sabotage, mental breakdown, or simply catastrophic judgment remains unclear.</p>
    <p>The Mushroom Kingdom delegation, already hostile to the DK Crew's neutrality in the Civil War, used the incident to push for economic sanctions. The Regal Empire's observers noted the chaos with undisguised interest, seeing opportunity in DK Island's weakened diplomatic position.</p>
    <p><strong>Internal Fallout:</strong> The summit disaster created deep fractures within the DK Crew. Donkey Kong's decision to skip the summit—later revealed to be due to intelligence about the Kremling listening device—was criticized by those who didn't know the full picture. Lanky Kong has been effectively sidelined from all future diplomatic activities.</p>
    <p><strong>Connection to Kremling Plot:</strong> Some analysts believe the Kremlings deliberately timed their espionage activities to coincide with the summit, knowing that DK's attention would be divided. The discovery of the listening device the following day suggests this was part of a coordinated intelligence operation.</p>`,
    tacticalNotes: "Never send Lanky Kong to a diplomatic function. This should have been obvious.",
    participatingCharacters: ['donkey_kong']
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
    <p>The battle raged across multiple decks. Dan the Toad, newly freed from slavery, proved instrumental in rallying other captive toads to the party's cause. His knowledge of the ship's layout and the mutineers' positions turned what could have been a grinding battle of attrition into a surgical strike.</p>
    <p>In the aftermath, the party discovered the true horror of the Vigilance's purpose: it had been used as a mobile toad trafficking operation. Over 150 toads were found hidden throughout the ship, crammed into barrels and secret compartments, awaiting sale to various buyers including, disturbingly, the Iron Legion.</p>
    <p><strong>Birth of a Movement:</strong> The liberation of the Vigilance's cargo created an instant constituency for toad rights. These freed toads, with nowhere else to go, became the founding members of the Liberated Toads faction. Dan's charisma and the party's combat prowess gave them a nucleus of leadership.</p>
    <p><strong>Unresolved Questions:</strong> X.O.'s staff, which was later used to restore the ship's power, contained technology and magic beyond anything the party had encountered. Who supplied her? What was her true mission? The answers went to her grave.</p>`,
    tacticalNotes: "Airship combat favors those who control the engine room and bridge. Securing these first should be priority.",
    participatingCharacters: ['archie', 'markop', 'dan', 'bowser']
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
    <p>Ryan, one of the few toads to escape, made a desperate leap from the ship rather than face capture. His survival—via an improvised parachute and a fortuitous landing near a Rakasha encampment—was miraculous. The intelligence he carried about Legion movements and the ship's capture would prove valuable.</p>
    <p><strong>Strategic Implications:</strong> The loss of the Vigilance was a devastating blow to the Liberated Toads. Their mobile base, their symbol of freedom, was now in enemy hands. The Legion immediately began exploiting the ship's records to identify and hunt down other freed toads.</p>
    <p><strong>Parallel Operations:</strong> The timing of the assault—while the party was trapped in the manor—suggests the Legion had intelligence about their movements. The spy later revealed within the Liberated Toads organization may have provided this information.</p>`,
    tacticalNotes: "Never leave a strategic asset lightly defended. The Legion exploits any weakness.",
    participatingCharacters: ['ryan']
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
    <p>The assault began with a pre-dawn bombardment using captured Fawful technology—an irony not lost on the defenders. As the walls crumbled, Loyalist shock troops poured through the breaches, engaging in brutal room-to-room combat with Fawful's robotic defenders and organic troops alike.</p>
    <p>Embercap's prior intelligence, gathered at the cost of operative Jade Grit's life during a gala infiltration, proved invaluable. The Loyalists knew which corridors to avoid, which automated defenses had blind spots, and where the command center was located.</p>
    <p>What transformed the battle into a massacre was Toadette's explicit "no quarter" order. Surrendering Fawful troops were executed on the spot. Wounded enemies were finished off rather than captured. When the fighting ended, not a single defender remained alive.</p>
    <p><strong>War Crimes Investigation:</strong> The Regal Empire has opened a formal inquiry into the Bramblehaven massacre. The Loyalists' response has been characteristically defiant: they consider themselves already at war with the established order and reject its legal authority.</p>
    <p><strong>Strategic Aftermath:</strong> Bramblehaven's fall cuts Fawful's northern supply lines and provides the Loyalists with intelligence on his technological capabilities. However, the brutality has alienated potential allies and strengthened Fawful's narrative of fighting against "murderous fanatics."</p>`,
    tacticalNotes: "Loyalist forces fight with religious fervor. Expect no mercy and plan for asymmetric commitment.",
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
        id: 'tea_party_incident',
        name: "The 'Tea Party' Incident",
        conflict: "Underworld Conflicts",
        arc: 'capital_intrigue',
        date: { year: 1040, monthIndex: 6, day: 9, hour: 20, minute: 0 },
        location: "Midlands Slums - Abandoned Warehouse",
        belligerents: {
            side_a: { name: "Archie (Solo)", factions: [] },
            side_b: { name: "Tea Leaf Syndicate", factions: ['tea_leaf_syndicate'] },
            side_c: { name: "Iron Legion", factions: ['iron_legion'] }
        },
        commanders: { side_a: ["Archie"], side_b: ["Green T"], side_c: ["Unknown"] },
        outcome: "victory",
        outcomeDetail: "Syndicate crippled. Green T presumed dead.",
        casualties: { side_a: "None", side_b: "Massive - organization destroyed", side_c: "Unknown" },
        strategicValue: "medium",
        description: `<p>A negotiation meeting turned into a massacre when Archie unleashed a high-level Fireball spell. The Tea Leaf Syndicate's leadership was incinerated instantly.</p>`,
        tacticalNotes: "Archie should not be allowed into negotiations unsupervised.",
        participatingCharacters: ['archie']
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
    }
];

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
    const displayDate = formatDate(battle.date);
    const displayTime = formatTime(battle.date);
    const daysAgo = getDaysAgo(battle.date);
    const timeAgo = daysAgo !== null ? getDynamicTimestamp(battle.date) : '';
    const outcomeClass = getOutcomeClass(battle.outcome);
    const strategicIcon = getStrategicIcon(battle.strategicValue);
    
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
             data-conflict="${battle.conflict.toLowerCase().replace(/\s/g, '-')}">
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
    
    const chronoBattles = [...MAJOR_BATTLES].sort((a, b) => {
        const dateA = typeof a.date === 'object' ? new Date(a.date.year, a.date.monthIndex, a.date.day) : new Date(0);
        const dateB = typeof b.date === 'object' ? new Date(b.date.year, b.date.monthIndex, b.date.day) : new Date(0);
        return dateA - dateB;
    });

    chronoBattles.forEach(battle => {
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

    // Sort by activity and recency
    return Object.values(conflicts).sort((a, b) => {
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

        // THIS IS THE KEY FIX - metaHTML is now generated HERE at the conflict level
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
                        <!-- Combatants Section -->
                        <section class="conflict-section">
                            <h6 class="section-header">Combatants</h6>
                            <div class="combatant-grid">
                                ${combatantsHTML || '<em>No factions recorded</em>'}
                            </div>
                        </section>

                        <!-- Story Arcs Section -->
                        ${arcsHTML ? `
                            <section class="conflict-section">
                                <h6 class="section-header">Related Story Arcs</h6>
                                <div class="arcs-grid">
                                    ${arcsHTML}
                                </div>
                            </section>
                        ` : ''}

                        <!-- META HTML GOES HERE - Overview and Root Cause -->
                        ${metaHTML}

                        <!-- Date boxes (shown if no meta, or always shown) -->
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
    const controlsHTML = `
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
    
    return controlsHTML;
}

function applyFilters() {
    const sortValue = document.getElementById('sort-select')?.value || 'date-desc';
    const outcomeFilter = document.getElementById('outcome-filter')?.value || 'all';
    const searchTerm = document.getElementById('battle-search')?.value?.toLowerCase() || '';

    let filteredBattles = [...MAJOR_BATTLES];

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

        // Scroll to top when switching tabs
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
    const totalBattles = MAJOR_BATTLES.length;
    const victories = MAJOR_BATTLES.filter(b => b.outcome === 'victory').length;
    const ongoing = MAJOR_BATTLES.filter(b => b.outcome === 'ongoing' || b.outcome === 'retreat').length;
    const uniqueConflicts = new Set(MAJOR_BATTLES.map(b => b.conflict)).size;
    
    // Calculate most active faction
    const factionCounts = {};
    MAJOR_BATTLES.forEach(battle => {
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
    
    // Sort battles by date (most recent first)
    const sortedBattles = [...MAJOR_BATTLES].sort((a, b) => {
        const dateA = typeof a.date === 'object' 
            ? new Date(a.date.year, a.date.monthIndex, a.date.day, a.date.hour || 0, a.date.minute || 0) 
            : new Date(0);
        const dateB = typeof b.date === 'object' 
            ? new Date(b.date.year, b.date.monthIndex, b.date.day, b.date.hour || 0, b.date.minute || 0) 
            : new Date(0);
        return dateB - dateA;
    });

    // Build the container content
    container.innerHTML = `
        ${renderStatsDashboard()}
        ${createFilterControls()}
        <div class="battle-list">
            ${sortedBattles.map(renderBattle).join('')}
        </div>
    `;

    // Add filter event listeners
    document.getElementById('sort-select')?.addEventListener('change', applyFilters);
    document.getElementById('outcome-filter')?.addEventListener('change', applyFilters);
    document.getElementById('battle-search')?.addEventListener('input', debounce(applyFilters, 300));

    // Initialize other sections
    renderConflicts();
    initTabs();

    // Handle anchor links from URL
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

// Debounce utility
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

// Run initialization
init();