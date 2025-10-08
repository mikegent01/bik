import { LORE_DATA } from './lore.js';
import { FACTION_COLORS } from './factions/faction-colors.js';

const MAJOR_BATTLES = [
    {
        id: 'siege_of_bramblehaven',
        name: "Siege of Bramblehaven",
        conflict: "Mushroom Kingdom Civil War",
        date: "Day 15, 1040 BF",
        location: "Bramblehaven, Fawthful Bastion",
        belligerents: {
            side_a: { name: "Peach Loyalists", factions: ['peach_loyalists'] },
            side_b: { name: "Fawful's Forces", factions: ['fawfuls_furious_freaks'] }
        },
        commanders: { side_a: ["Captain Toadette", "Embercap"], side_b: ["Unknown"] },
        outcome: "<span class='outcome victory'>Decisive Loyalist Victory</span>; Fortress captured.",
        casualties: "Heavy on both sides. Loyalist Commander Mistveil severely wounded.",
        description: `
            <p>A brutal, day-long assault on the key Fawful stronghold of Bramblehaven. The Peach Loyalists, led by Captain Toadette, leveraged superior numbers to overwhelm the entrenched defenders. Despite suffering heavy losses to Fawful's frost mages, the Loyalists pressed their attack relentlessly through day and night.</p>
            <p>The battle culminated in a merciless final charge where surrendering Fawful troops were not spared. The victory, though costly, secured a vital strategic position and valuable intelligence for the Loyalist cause, while cementing their reputation as ruthless fanatics.</p>
        `
    },
    {
        id: 'skirmish_at_gilded_octopus',
        name: "Skirmish at the Gilded Octopus",
        conflict: "Vigilance Crew Incidents",
        date: "Day 14, 1040 BF",
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
        date: "Day 14, 1040 BF",
        location: "Toad Town",
        belligerents: {
            side_a: { name: "Peach Loyalists", factions: ['peach_loyalists'] },
            side_b: { name: "Mushroom Regency", factions: ['mushroom_regency'] }
        },
        commanders: { side_a: ["Captain Toadette"], side_b: ["Chancellor Toadsworth (Politically)"] },
        outcome: "<span class='outcome victory'>Loyalist political victory</span>; Toadette consolidates power.",
        casualties: "None.",
        description: `
            <p>Following the assassination of the mayor, Captain Toadette declared martial law and seized control of Toad Town, ousting the Mushroom Regency's authority. This political coup was immediately followed by a brutal loyalty test, where Toadette subjected her own commanders and the main party to a series of terrifying illusions in the sewers to test their resolve.</p>
            <p>The event solidified her control, demonstrated her ruthless methods, and provoked the Iron Legion into establishing a permanent 'embassy' in the town square to monitor the unstable situation.</p>
        `
    },
    {
        id: 'tea_party_incident',
        name: "The 'Tea Party' Incident",
        conflict: "Underworld Conflicts",
        date: "Day 9, 1040 BF",
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
        id: 'battle_for_the_vigilance',
        name: "The Battle for the Vigilance",
        conflict: "Vigilance Crew Incidents",
        date: "Days 4-7, 1040 BF",
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
        id: 'battle_of_ignis_peak',
        name: "Battle of Ignis Peak",
        conflict: "Early Party Adventures",
        date: "Day 1, 1040 BF",
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
                        <p>${battle.date}<br>${battle.location}</p>
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
    
    // Sort battles by date, which is embedded in the `id` for simplicity
    // Newest first
    const sortedBattles = MAJOR_BATTLES.sort((a, b) => {
        const dayA = parseInt(a.date.match(/Day (\d+)/)?.[1] || 0);
        const dayB = parseInt(b.date.match(/Day (\d+)/)?.[1] || 0);
        return dayB - dayA;
    });

    container.innerHTML = sortedBattles.map(renderBattle).join('');
}

init();