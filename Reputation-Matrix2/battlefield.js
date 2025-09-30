
const BATTLEFIELD_STATE = {
    mushroom_kingdom: {
        title: "Mushroom Kingdom Civil War (Toad Town Front)",
        image: "battle_mushroom_kingdom.png",
        image_alt: "A chaotic battlefield showing Mushroom Regency guards clashing with Peach Loyalists near a burning village, while Koopa Troop remnants skirmish in the background.",
        day: 13,
        time: "Afternoon",
        status: "Current Major Offensive",
        factions: {
            regency: {
                name: "Mushroom Regency Guard",
                commander: "Captain Toad",
                morale: 60,
                strength: "Approx. 800 guardsmen",
                orders: "Restore order and secure key infrastructure. Avoid direct confrontation with Loyalists if possible.",
                color: "var(--faction-mushroom_regency)",
                icon: "faction_mushroom_regency.png",
            },
            loyalists: {
                name: "Peach Loyalists Crusade",
                commander: "Captain Toadette",
                morale: 95,
                strength: "Approx. 500 zealous fighters",
                orders: "Hold Bowser accountable for the chaos that claimed the Princess. View the Regency as an illegitimate obstacle.",
                color: "var(--faction-peach_loyalists)",
                icon: "faction_peach_loyalists.png",
                units: ["Mistveil (Scout)", "Dewdrop (Medic)"]
            },
            koopa: {
                name: "Koopa Troop Remnants",
                commander: "Kamek",
                morale: 70,
                strength: "Unknown, scattered",
                orders: "Survive, regroup, and exploit the chaos. Avoid large-scale engagements.",
                color: "var(--faction-koopa_troop)",
                icon: "faction_koopa_troop.png",
            },
             fawful: {
                name: "Fawful's Furious Freaks",
                commander: "Fawful",
                morale: 100,
                strength: "An unknown number of minions and machines",
                orders: "Defend the newly-acquired castle from all intruders with maximum fury and chortles.",
                color: "var(--faction-fawfuls_furious_freaks)",
                icon: "faction_fawful.png",
            }
        },
        log: [
            { time: "22:15", entry: "Gala infiltration ends in chaos. Reports indicate temporal distortion from the 'God Toad'. Loyalist soldier Embercap listed as KIA after a heroic but foolish charge." },
            { time: "14:30", entry: "Loyalist forces under Captain Toadette intensify their siege on the outskirts of Toad Town." },
            { time: "13:00", entry: "Koopa remnants led by Kamek were spotted scavenging a recent battlefield for supplies." },
            { time: "11:15", entry: "Regency Guard successfully repelled a Toad Gang raid on a refugee supply convoy." },
            { time: "10:00", entry: "Strange green energy pulses detected from the occupied Peach's Castle. Fawful appears to be fortifying." },
        ]
    },
    ravencreek: {
        title: "The Battle of Ravencreek",
        image: "battle.png",
        image_alt: "A tactical overview of the Battle of Ravencreek",
        day: 4,
        time: "Mid-day",
        status: "Active Skirmishing",
        factions: {
            werewolves: {
                name: "Moonfang Pack Vanguard",
                commander: "Grak Ironhide",
                morale: 75,
                strength: "Approx. 450 warriors",
                orders: "Harass vampire flanks; secure the northern bridge access.",
                color: "var(--faction-moonfang_pack)",
                icon: "faction_moonfang.png",
            },
            vampires: {
                name: "Sanguine Legion",
                commander: "Baron Von Hess",
                morale: 85,
                strength: "Approx. 300 thralls, 50 knights",
                orders: "Hold Ravencreek at all costs; break the werewolf assault at the river.",
                color: "var(--faction-onyx_hand)",
                icon: "faction_onyx_hand.png",
            },
            regal: {
                name: "Imperial Expeditionary Force",
                commander: "Sir Reginald Stonebridge",
                morale: 100,
                strength: "120 Legionnaires",
                orders: "Observe and contain the conflict. Do not engage unless Imperial assets are threatened.",
                color: "var(--faction-regal_empire)",
                icon: "faction_regal_empire.png",
            }
        },
        log: [
            { time: "12:05", entry: "Vampire Blood Knights clash with Werewolf Pack Warriors at the Old Bridge." },
            { time: "11:45", entry: "Werewolf Stalkers spotted moving through the western woods, threatening supply lines." },
            { time: "11:00", entry: "Gargoyles take positions on Ravencreek rooftops, providing aerial recon." },
            { time: "10:15", entry: "Regal forces establish a fortified observation post on the southern ridge." },
            { time: "09:30", entry: "The main werewolf force began its assault on the north bank of the river." },
        ]
    }
};

function renderBattleCard(battleData) {
    let commandHTML = '';
    Object.entries(battleData.factions).forEach(([key, data]) => {
         const unitsHTML = data.units ? `<p><strong>Key Units:</strong> ${data.units.join(', ')}</p>` : '';
        commandHTML += `
             <div class="faction-command-card faction-${key}" style="border-left-color: ${data.color};">
                <h4>${data.name}</h4>
                <div class="command-details">
                    <p><strong>Commander:</strong> ${data.commander}</p>
                    <p><strong>Strength:</strong> ${data.strength}</p>
                    <p><strong>Morale:</strong> ${data.morale}%</p>
                    ${unitsHTML}
                    <p class="command-orders"><strong>Orders:</strong> ${data.orders}</p>
                </div>
            </div>
        `;
    });

    const logHTML = battleData.log.map(item => `<li><span class="log-time">${item.time}</span>${item.entry}</li>`).join('');

    return `
        <div class="battle-container">
            <h2 class="page-title">${battleData.title}: <span class="battle-meta">Day ${battleData.day}, ${battleData.time} | Status: <span class="neutral">${battleData.status}</span></span></h2>
            <img src="${battleData.image}" alt="${battleData.image_alt}" class="battle-image">
            <div class="battle-info-container">
                <section class="faction-command-container">
                     ${commandHTML}
                </section>
                <section class="battle-log">
                    <h4>Recent Events</h4>
                    <ul class="log-entries">
                        ${logHTML}
                    </ul>
                </section>
            </div>
        </div>
    `;
}

function renderBattlefield() {
    const displayContainer = document.getElementById('battlefield-display');
    if (!displayContainer) return;

    displayContainer.innerHTML = '';
    for (const battleKey in BATTLEFIELD_STATE) {
        displayContainer.innerHTML += renderBattleCard(BATTLEFIELD_STATE[battleKey]);
    }
}


function init() {
    if (!document.getElementById('battlefield-display')) return;
    renderBattlefield();
}

init();
