
import { LORE_DATA } from './lore.js';
import { FACTION_COLORS } from './factions/faction-colors.js';

export const MAJOR_BATTLES = [
    // --- NEW BATTLE ENTRY: Markop & The First Cohort ---
    {
        id: 'skirmish_dance_hall',
        name: "The Dance Hall Discord",
        conflict: "Raventree Manor Crisis",
        date: { year: 1040, monthIndex: 6, day: 20, hour: 8, minute: 0 },
        location: "Raventree Manor, Dance Hall",
        belligerents: {
            side_a: { name: "The Party & Oracle", factions: ['liberated_toads', 'unaligned'] },
            side_b: { name: "Iron Legion Spies & Magi", factions: ['iron_legion', 'mages_guild'] },
            side_c: { name: "Manor Entities", factions: ['unaligned'] }
        },
        commanders: { 
            side_a: ["Archie", "Hjumpik", "The Oracle"], 
            side_b: ["Legion Spy 'Baritone'", "Rogue Magi"],
            side_c: ["Arcane Wraith"]
        },
        outcome: "<span class='outcome ongoing'>Chaotic Retreat</span>; Legion captured a Toad hostage; Wraith repelled.",
        casualties: "One Iron Legion Spy (Mauled by Wraith). One Toad taken hostage.",
        description: `
            <p>A surreal confrontation in the Manor's Dance Hall. Iron Legion spies and rogue Magi held a theatrical 'performance', singing mocking anthems about the party's failures. The standoff was shattered when an Arcane Wraith manifested, causing panic.</p>
            <p>In the ensuing chaos, the Legion agents fled with a Toad hostage. The Oracle assisted in fighting off an animated coat, while Hjumpik secured mysterious dark crystals. The Magi attempted to arrest Archie for his earlier reckless magic but were forced to offer a 'plea deal' due to the overwhelming supernatural threat.</p>
        `
    },    
    {
        id: 'skirmish_manor_parlor',
        name: "Markop & The First Cohort",
        conflict: "Raventree Manor Crisis",
        date: { year: 1040, monthIndex: 6, day: 19, hour: 6, minute: 30 },
        location: "Raventree Manor Parlor",
        belligerents: {
            side_a: { name: "Markop's Command", factions: ['liberated_toads', 'unaligned'] }, // Markop, Toads, FNG, Rodger, Rounders
            side_b: { name: "Manor Manifestations", factions: ['unaligned'] } // Wraiths
        },
        commanders: { 
            side_a: ["Markop", "Rodger", "Rounders", "Speaker L (in spirit)"], 
            side_b: ["The Oracle (Observer)", "Arcane Wraiths"] 
        },
        outcome: "<span class='outcome victory'>Tactical Victory</span>; Wraiths repelled, but political schism deepens.",
        casualties: "1 Toad (Crushed), Markop's Sword (Shattered). Archie Miser surrendered to custody.",
        description: `
            <p>A tense standoff over authority between Markop and the zealous First Cohort toads was violently interrupted by the manifestation of two powerful Arcane Wraiths within the manor parlor. The spectral ambush shattered the room's doors and warped the hallway into a necrotic tunnel, forcing the divided toads into a desperate, ad-hoc defense.</p>
            <p>As Markop rallied the toads and unleashed divine fire, the battle turned chaotic with the sudden arrival of reinforcements. Rounders, blowing a hunting horn, triggered a ceiling collapse that dropped two summoned giants into the fray, while Rodger and FNG deployed alchemical explosives to disrupt the wraiths. Despite the overwhelming force, the wraiths claimed a casualty, crushing one toad before being driven back.</p>
            <p>The skirmish ended in a pyrrhic victory. While one wraith was destroyed and the other fled, the chaos allowed Speaker L to successfully apprehend Archie Miser. The mysterious Oracle observed the entire encounter with detached amusement before the surviving party members scattered to tend to their wounded.</p>
        `
    },
    // --- NEW BATTLE ENTRY ---
    {
        id: 'raid_on_cohort_command',
        name: "Raid on Cohort Command",
        conflict: "Liberated Toads Internal Conflict",
        date: { year: 1040, monthIndex: 6, day: 19, hour: 14, minute: 0 },
        location: "First Cohort Command Post, near Raventree Manor",
        belligerents: {
            side_a: { name: "Iron Legion Strike Team", factions: ['iron_legion'] },
            side_b: { name: "First Cohort Command", factions: ['liberated_toads'] }
        },
        commanders: { side_a: ["Colonel Vera Steelstorm (Overseeing)"], side_b: ["Speaker L"] },
        outcome: "<span class='outcome victory'>Decisive Iron Legion Victory</span>; Speaker L captured.",
        casualties: "Minimal Iron Legion casualties. Moderate First Cohort casualties. The Cohort's command structure is shattered.",
        description: `
            <p>In a stunning display of tactical opportunism, the Iron Legion launched a swift decapitation strike against the First Cohort's command post. Capitalizing on the chaos of Archie Miser's escape and the Cohort's internal disarray, an elite Legion strike team breached the compound under the cover of the ongoing storm.</p>
            <p>Using flashbangs and superior discipline, the Legion forces neutralized the disorganized Cohort leadership, capturing Speaker L with minimal resistance. The raid was a resounding success for the Legion, effectively neutralizing the First Cohort as an organized threat and securing a high-value political prisoner.</p>
        `
    },    
    {
        id: 'siege_of_raventree_manor',
        name: "The Siege Within Raventree Manor",
        conflict: "Liberated Toads Internal Conflict",
        date: { year: 1040, monthIndex: 6, day: 19, hour: 6, minute: 0 },
        location: "Raventree Manor, Midlands",
        belligerents: {
            side_a: { name: "The First Cohort (Pond Patrol)", factions: ['liberated_toads'] },
            side_b: { name: "Archie's Group", factions: ['liberated_toads'] },
            side_c: { name: "The Manor's Horrors", factions: ['unaligned'] }
        },
        commanders: { side_a: ["Speaker L"], side_b: ["Archie", "Hjumpik"], side_c: ["The Oracle (Presumed)"] },
        outcome: "<span class='outcome ongoing'>Archie Apprehended; Supernatural Threat Emerges</span>",
        casualties: "One toad killed by Archie (Toadsburt). Eager critically wounded. Green T MIA (absorbed by a mirror). Unknown Cohort casualties.",
        description: `
            <p>What began as an internal disciplinary action escalated into a supernatural crisis. The Liberated Toads' 'Pond Patrol', led by Speaker L, stormed Raventree Manor to apprehend Archie's group for the disastrous Greenhouse Inferno. Archie and Hjumpik barricaded themselves with a critically wounded Eager and a catatonic Dan.</p>
            <p>During the tense standoff, the manor itself awakened. Green T was violently pulled into a mirror, and hostile wraiths and other mirror-creatures began to manifest. Archie, after a brutal series of events including a mercy killing, ultimately surrendered to Speaker L. The conflict concluded not with order, but with the emergence of a new, terrifying supernatural threat that plunged the manor into chaos and darkness.</p>
        `
    },    
    {
        id: 'kong_kremling_war_reignited',
        name: "The Kong-Kremling War Rekindles",
        conflict: "DK Island Conflicts",
        date: { year: 1040, monthIndex: 6, day: 18, hour: 11, minute: 0 },
        location: "DK Island & Surrounding Waters",
        belligerents: {
            side_a: { name: "DK Crew", factions: ['dk_crew'] },
            side_b: { name: "Kremling Krew", factions: ['kremling_krew'] }
        },
        commanders: { side_a: ["Donkey Kong", "Diddy Kong"], side_b: ["King K. Rool"] },
        outcome: "<span class='outcome ongoing'>Hostilities Resumed</span>; Assassination plot revealed.",
        casualties: "Anticipated to be high. One Kremling agent, 'Galypso', is now a high-priority target.",
        description: `
            <p>The fragile peace between the Kongs and Kremlings has catastrophically collapsed. Following the discovery of a sophisticated Kremling listening device in his private office, Donkey Kong confronted King K. Rool in a tense, expletive-laden phone call.</p>
            <p>Instead of de-escalating, the call ended with K. Rool issuing a direct, secret order to his agent 'Galypso' to assassinate DK's Director of Intelligence, Funky Kong, to cover up the operation. With the plot revealed, the truce is void, and the long, bitter war between the two island powers has reignited with a new, personal intensity.</p>
        `
    },        
    {
        id: 'siege_of_bramblehaven',
        name: "Siege of Bramblehaven",
        conflict: "Mushroom Kingdom Civil War",
        date: { year: 1040, monthIndex: 6, day: 17, hour: 12, minute: 0 },
        location: "Bramblehaven, Mushroom Kingdom",
        belligerents: {
            side_a: { name: "Peach Loyalists", factions: ['peach_loyalists'] },
            side_b: { name: "Fawful's Forces", factions: ['fawfuls_furious_freaks'] }
        },
        commanders: { side_a: ["Captain Toadette", "Embercap", "Big R"], side_b: ["Unnamed Fawful Commander"] },
        outcome: "<span class='outcome victory'>Decisive Loyalist Victory</span>; Town captured.",
        casualties: "Heavy on both sides. Multiple Loyalist officers wounded. Fawful's command structure in the area was eliminated.",
        description: `
            <p>A brutal, day-long assault on the key Fawful stronghold of Bramblehaven. The Peach Loyalists, led by Captain Toadette, leveraged superior numbers and tactical ferocity to overwhelm the entrenched defenders. The battle was marked by chaotic street-to-street fighting, the use of a summoned bear from a magical artifact, and significant friendly fire from Big R's cannon. The battle culminated in a merciless final charge where surrendering Fawful troops were executed in the town square. The victory secured a vital strategic position for the Loyalists but cemented their reputation as ruthless fanatics.</p>
        `
    },

    {
        id: 'skirmish_at_gilded_octopus',
        name: "Skirmish at the Gilded Octopus",
        conflict: "Vigilance Crew Incidents",
        date: { year: 1040, monthIndex: 6, day: 14, hour: 19, minute: 0 },
        location: "The Gilded Octopus Restaurant, Midlands Capital",
        belligerents: {
            side_a: { name: "Vigilance Crew", factions: ['liberated_toads'] },
            side_b: { name: "Iron Legion", factions: ['iron_legion'] }
        },
        commanders: { side_a: ["Archie", "Markop"], side_b: ["Unknown Legion Captain"] },
        outcome: "<span class='outcome stalemate'>Stalemate</span>; Vigilance crew escapes via sewers.",
        casualties: "One restaurant worker accidentally evaporated by proprietor.",
        description: `
            <p>What began as an attempt by the Vigilance crew to extract the captive toad Eager from a restaurant escalated into a chaotic, multi-factional standoff. The Iron Legion raided the establishment in response to a separate murder plot involving the mysterious 'Ketchup Man'.</p>
            <p>The confrontation was a bizarre mix of espionage, combat, and negotiation, involving an incompetent Legion dragon-spy, a time-bending angelic proprietor, and bodies hidden inside an octopus. The crew ultimately escaped into the sewers, failing to rescue Eager but acquiring a cure for the injured Dan.</p>
        `
    },
    {
        id: 'toad_town_coup',
        name: "The Toad Town Coup & Sewer Test",
        conflict: "Mushroom Kingdom Civil War",
        date: { year: 1040, monthIndex: 6, day: 12, hour: 9, minute: 0 },
        location: "Toad Town",
        belligerents: {
            side_a: { name: "Peach Loyalists", factions: ['peach_loyalists'] },
            side_b: { name: "Mushroom Regency", factions: ['mushroom_regency'] }
        },
        commanders: { side_a: ["Captain Toadette"], side_b: ["Chancellor Toadsworth (Politically)"] },
        outcome: "<span class='outcome victory'>Loyalist political victory</span>; Toadette consolidates power.",
        casualties: "One mayor assassinated by Onyx Hand agents prior to the coup.",
        description: `
            <p>Following the assassination of the mayor, Captain Toadette declared martial law and seized control of Toad Town, ousting the Mushroom Regency's authority. This political coup was immediately followed by a brutal loyalty test, where Toadette subjected her own commanders to a series of terrifying illusions in the sewers to test their resolve.</p>
            <p>The event solidified her control, demonstrated her ruthless methods, and provoked the Iron Legion into establishing a permanent 'embassy' in the town square to monitor the unstable situation.</p>
        `
    },
    {
        id: 'fawfuls_seizure_of_castle',
        name: "Fawful's Seizure of Peach's Castle",
        conflict: "Mushroom Kingdom Civil War",
        date: { year: 1040, monthIndex: 6, day: 8, hour: 12, minute: 0 },
        location: "Peach's Castle, Mushroom Kingdom",
        belligerents: {
            side_a: { name: "Fawful's Forces", factions: ['fawfuls_furious_freaks'] },
            side_b: { name: "Mushroom Regency", factions: ['mushroom_regency'] }
        },
        commanders: { side_a: ["Fawful"], side_b: ["Captain Toad"] },
        outcome: "<span class='outcome victory'>Decisive Fawful Victory</span>; Mushroom Kingdom capital falls.",
        casualties: "Moderate Regency losses; Fawful's losses minimal.",
        description: `
            <p>In a shocking and audacious move, the Beanish villain Fawful launched a surprise assault on a vulnerable Peach's Castle. With the Regency's forces spread thin dealing with Loyalist and Koopa remnant threats, Fawful's army of bizarre mechanical minions and brainwashed soldiers met with little organized resistance.</p>
            <p>Using bizarre technology, including his signature Headgear to disable the castle's automated defenses, Fawful's forces swarmed the castle grounds. The undermanned Toadstool Guard under Captain Toad was quickly overwhelmed. The seizure of the capital sent shockwaves through the kingdom, solidifying the civil war's chaotic, multi-factional nature and giving Fawful a powerful base of operations.</p>
        `
    },
    {
        id: 'tea_party_incident',
        name: "The 'Tea Party' Incident",
        conflict: "Underworld Conflicts",
        date: { year: 1040, monthIndex: 6, day: 9, hour: 20, minute: 0 },
        location: "Midlands Capital Slums",
        belligerents: {
            side_a: { name: "Archie & Humpik", factions: [] },
            side_b: { name: "Tea Leaf Syndicate", factions: ['tea_leaf_syndicate'] },
            side_c: { name: "Iron Legion Forces", factions: ['iron_legion'] },
            side_d: { name: "Toad Gang Forces", factions: ['toad_gang'] }
        },
        commanders: { side_a: ["Archie"], side_b: ["Green T"], side_c: ["Unknown"], side_d: ["Unknown"] },
        outcome: "<span class='outcome victory'>Tea Leaf Syndicate crippled</span>; massive casualties across all factions.",
        casualties: "High. Most of the Syndicate's enforcers were eliminated.",
        description: `
            <p>A meeting between Archie and the Tea Leaf Syndicate, intended as a trap by the Syndicate, devolved into a massive, chaotic four-way brawl. The activation of a panic button summoned both Toad Gang and Iron Legion forces to the scene, turning the street into a warzone.</p>
            <p>In a desperate move, Archie unleashed a massive fireball, killing the majority of the combatants present and effectively shattering the Tea Leaf Syndicate's local power base.</p>
        `
    },
    {
        id: 'the_syrup_schism',
        name: "The Syrup Schism",
        conflict: "Vigilance Crew Incidents",
        date: { year: 1040, monthIndex: 6, day: 6, hour: 12, minute: 0 },
        location: "Aboard the Airship 'Vigilance'",
        belligerents: {
            side_a: { name: "The Party & Allies", factions: ['liberated_toads'] },
            side_b: { name: "Captain Syrup's Crew", factions: ['crimson_fleet'] }
        },
        commanders: { side_a: ["Markop"], side_b: ["Captain Syrup"] },
        outcome: "<span class='outcome stalemate'>Stalemate</span>; Captain Syrup escapes, but the Vigilance is critically damaged and sent into a nosedive.",
        casualties: "One traitorous toad killed. Severe damage to the Vigilance's power core.",
        description: `
            <p>Immediately after being freed, the pirate Captain Syrup turned on her liberators in a bid to seize the airship. A chaotic confrontation erupted across the ship's decks. The battle reached its climax in the engine room when Humpik, in a desperate attempt to prevent Syrup's allies from seizing the power core, threw his axe and critically damaged it. The act disabled the ship and sent it plummeting from the sky, forcing all parties to brace for impact.</p>
        `
    },
    {
        id: 'battle_for_the_vigilance',
        name: "The Battle for the Vigilance",
        conflict: "Vigilance Crew Incidents",
        date: { year: 1040, monthIndex: 6, day: 4, hour: 10, minute: 0 },
        location: "Aboard the Airship 'Vigilance'",
        belligerents: {
            side_a: { name: "The Party & Allies", factions: ['liberated_toads', 'koopa_troop'] },
            side_b: { name: "Rogue Elements", factions: ['crimson_fleet'] }
        },
        commanders: { side_a: ["Archie", "Markop", "Dan"], side_b: ["X.O.", "Captain Syrup"] },
        outcome: "<span class='outcome victory'>Party secures control of the Vigilance</span>; X.O. neutralized, Bowser and other key figures escape.",
        casualties: "Significant damage to the airship, multiple Liberated Toads injured.",
        description: `
            <p>A multi-day series of running battles and betrayals for control of the airship. The conflict began with the rogue mage X.O.'s hijacking and culminated in her defeat at the hands of the party and a newly freed toad, Dan. This was immediately followed by the 'Syrup Schism,' where the freed pirate Captain Syrup turned on the crew, leading to Humpik disabling the power core with an axe.</p>
            <p>The final phase saw the assassination of Big T, the revelation of a massive toad trafficking operation, and the escape of Bowser and Waluigi. The party ultimately secured the damaged but functional airship.</p>
        `
    },
     {
        id: 'koopa_remnant_scuffles',
        name: "The Koopa Remnant Scuffles",
        conflict: "Mushroom Kingdom Civil War",
        date: { year: 1040, monthIndex: 6, day: 1, hour: 0, minute: 0 }, // Start of current era
        location: "Various, Mushroom Kingdom Borderlands",
        belligerents: {
            side_a: { name: "Koopa Remnants", factions: ['koopa_troop'] },
            side_b: { name: "Various Enemies", factions: ['mushroom_regency', 'peach_loyalists', 'toad_gang'] }
        },
        commanders: { side_a: ["Kamek"], side_b: ["Various"] },
        outcome: "<span class='outcome stalemate'>Ongoing War of Attrition</span>; Koopa Remnants are losing ground but remain a threat.",
        casualties: "Moderate but steady losses for all involved.",
        description: `
            <p>With Bowser's absence, the Koopa Troop has fractured into scattered remnants. The largest contingent, led by the wily Kamek, is fighting a desperate war of survival. They face constant pressure from Regency patrols seeking to reclaim territory, Loyalist crusaders seeking vengeance, and Toad Gang opportunists looking to raid their weapon caches.</p>
            <p>These are not large-scale battles, but a series of brutal, running skirmishes in the hills and wastelands. Kamek's primary goal is to preserve his forces and regroup, waiting for an opportunity to strike back and reunite the Troop under Bowser's banner.</p>
        `
    },
     {
        id: 'battle_of_bobomb_field',
        name: "Battle of Bob-omb Battlefield",
        conflict: "Second Koopa War",
        date: { year: 1020, monthIndex: 5, day: 15, hour: 12, minute: 0 },
        location: "Bob-omb Battlefield, Mushroom Kingdom",
        belligerents: {
            side_a: { name: "Mushroom Kingdom Army", factions: ['mushroom_regency'] },
            side_b: { name: "Koopa Troop", factions: ['koopa_troop'] }
        },
        commanders: { side_a: ["General Toadstool"], side_b: ["Bowser"] },
        outcome: "<span class='outcome stalemate'>Pyrrhic Regency Victory</span>; Koopa forces repelled, but the battlefield was rendered a permanent wasteland.",
        casualties: "Catastrophic on both sides.",
        description: `
            <p>A pivotal and devastating battle during the Second Koopa War. The Mushroom Kingdom army made a desperate stand against Bowser's main invading force. The battle was defined by the massive, unprecedented use of Bob-omb artillery by both sides.</p>
            <p>While the Regency forces successfully halted Bowser's advance, the sheer volume of explosives used scorched the earth and left the area littered with thousands of unexploded, now-sentient Bob-ombs. The battlefield was declared uninhabitable and remains a dangerous, crater-pocked wasteland to this day, a source of salvage for the modern Koopa Remnants.</p>
        `
    },
     {
        id: 'bowsers_first_invasion',
        name: "Bowser's First Invasion",
        conflict: "The First Koopa War",
        date: { year: 1000, monthIndex: 3, day: 1, hour: 6, minute: 0 },
        location: "Mushroom Plains",
        belligerents: {
            side_a: { name: "Mushroom Kingdom", factions: ['mushroom_regency'] },
            side_b: { name: "Koopa Troop", factions: ['koopa_troop'] }
        },
        commanders: { side_a: ["Princess Peach"], side_b: ["Bowser"] },
        outcome: "<span class='outcome defeat'>Decisive Mushroom Kingdom Victory</span>; Koopa invasion repelled.",
        casualties: "Heavy Koopa Troop losses.",
        description: `
            <p>The first major conflict initiated by a young, ambitious King Bowser. Seeking to expand his territory, he launched a massive, direct assault on the Mushroom Kingdom from his domain in the Darklands. His army, though powerful, was tactically unsophisticated and unprepared for the strategic defense orchestrated by Princess Peach and her Royal Guard.</p>
            <p>After a series of crushing defeats on the Mushroom Plains, Bowser was forced into a humiliating retreat. The war established the long-standing enmity between the two kingdoms and marked the beginning of a generational conflict that would shape the political landscape for decades to come.</p>
        `
    },
    {
        id: 'battle_of_ignis_peak',
        name: "Battle of Ignis Peak",
        conflict: "Early Party Adventures",
        date: { year: 1040, monthIndex: 6, day: 1, hour: 14, minute: 0 },
        location: "Northern Mountains, Midlands",
        belligerents: {
            side_a: { name: "The Adventuring Party", factions: [] },
            side_b: { name: "Dragon 'Ignis'", factions: ['unaligned'] }
        },
        commanders: { side_a: ["Archie", "Markop", "Humpik", "Bowser"], side_b: ["Ignis"] },
        outcome: "<span class='outcome victory'>Dragon Slain</span>.",
        casualties: "Minor injuries to the party.",
        description: `
            <p>The party's first major recorded action. The group successfully hunted and defeated the dragon Ignis in its mountain lair. The act was praised by militaristic factions like the Iron Legion but condemned as a waste of a valuable magical specimen by the Mages' Guild, establishing the party's controversial reputation from the outset.</p>
        `
    }
];

function renderBelligerents(belligerents) {
    let html = '';
    const sides = ['side_a', 'side_b', 'side_c', 'side_d'];
    sides.forEach(sideKey => {
        if (belligerents[sideKey]) {
            const side = belligerents[sideKey];
            const factionHTML = side.factions.map(fKey => {
                const faction = LORE_DATA.factions[fKey];
                return faction ? `<div class="belligerent-item"><img src="${faction.logo}" alt="${faction.name}" title="${faction.name}"></div>` : '';
            }).join('');

            html += `
                <div class="belligerent-group">
                    <strong>${side.name}</strong>
                    <div class="belligerent-list">${factionHTML}</div>
                </div>
            `;
        }
    });
    return html;
}

function renderBattle(battle) {
    const commandersHTML = Object.entries(battle.commanders).map(([side, names]) => {
        const sideName = battle.belligerents[side]?.name || 'Commanders';
        return `<strong>${sideName}:</strong> ${names.join(', ')}`;
    }).join('<br>');

    // Format date for display
    let displayDate = "Unknown Date";
    if (battle.date && typeof battle.date === 'object') {
         // Simple format: Day X, Year Y
         // Or reconstruct full string if we have helper access (simplified here for stability)
         displayDate = `Year ${battle.date.year}, Month ${battle.date.monthIndex + 1}, Day ${battle.date.day}`;
    } else if (battle.date) {
         displayDate = battle.date; // Fallback
    }

    return `
        <div class="battle-entry" id="${battle.id}">
            <h3>${battle.name}</h3>
            <div class="battle-layout">
                <div class="battle-narrative">
                    ${battle.description}
                </div>
                <aside class="battle-infobox">
                    <div class="infobox-item">
                        <h5>Conflict</h5>
                        <p>${battle.conflict}</p>
                    </div>
                    <div class="infobox-item">
                        <h5>Date & Location</h5>
                        <p>${displayDate}<br>${battle.location}</p>
                    </div>
                    <div class="infobox-item">
                        <h5>Belligerents</h5>
                        ${renderBelligerents(battle.belligerents)}
                    </div>
                    <div class="infobox-item">
                        <h5>Commanders</h5>
                        <p>${commandersHTML}</p>
                    </div>
                     <div class="infobox-item">
                        <h5>Outcome</h5>
                        <p>${battle.outcome}</p>
                    </div>
                    <div class="infobox-item">
                        <h5>Casualties</h5>
                        <p>${battle.casualties}</p>
                    </div>
                </aside>
            </div>
        </div>
    `;
}

function init() {
    const container = document.getElementById('battlefield-container');
    if (!container) return;
    
    // Sort battles by date (Newest first)
    const sortedBattles = MAJOR_BATTLES.sort((a, b) => {
        // Handle object dates
        const dateA = typeof a.date === 'object' 
            ? new Date(a.date.year, a.date.monthIndex, a.date.day, a.date.hour, a.date.minute) 
            : new Date(0); // Fallback for really old/weird dates
        
        const dateB = typeof b.date === 'object' 
            ? new Date(b.date.year, b.date.monthIndex, b.date.day, b.date.hour, b.date.minute) 
            : new Date(0);
            
        return dateB - dateA;
    });

    container.innerHTML = sortedBattles.map(renderBattle).join('');
}

init();
