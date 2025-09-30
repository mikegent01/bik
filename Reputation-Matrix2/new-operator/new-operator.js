import { playSound } from '../common.js';
import { LORE_DATA } from '../lore.js';
import { NEW_OPERATOR_QUESTS } from './new-operator-quests.js';
import { RACES, FACTIONS, WALUIGI_REGION_TIPS, RACE_QUESTS, REGION_STARTING_ITEMS } from './new-operator-data.js';

let currentStep = 1;
const totalSteps = 6;
let selectedRegion = null;

const REGION_IMAGE_MAP = {
    'Mushroom Kingdom': '../mushroom_kingdom.jpg',
    'The Midlands': '../fullmap.png',
    'The Internet': '../intermap.jpg',
    'Middle-earth': '../mide.webp',
    'The Fated Place': '../wa.jpg',
    'Kivotos': '../archive.png',
    'The Doughnut Hole': '../qaevyh08hsx51.webp',
    'Other Worlds': '../logo.png'
};

const state = {
    name: '',
    race: '',
    customRace: '',
    reason: '',
    region: '',
    faction: 'unaligned',
    quests: [],
    skills: {},
    baseStats: {},
    skillBonuses: {},
    tokenImage: null
};

// --- DOM ELEMENT CACHE ---
const wizard = document.getElementById('creator-wizard');
const commentaryText = document.getElementById('waluigi-commentary-text');
const regionGrid = document.getElementById('region-selection-grid');
const regionPreviewImage = document.getElementById('region-preview-image');
const regionPreviewPlaceholder = document.getElementById('region-preview-placeholder');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const stepIndicator = document.getElementById('step-indicator');
const operatorNameInput = document.getElementById('operator-name');
const operatorRaceSelect = document.getElementById('operator-race');
const operatorRaceCustomInput = document.getElementById('operator-race-custom');
const operatorReasonTextarea = document.getElementById('operator-reason');
const questDisplay = document.getElementById('quest-assignment-display');
const factionSelect = document.getElementById('operator-faction');
const factionTipBox = document.getElementById('faction-tip-box');
const skillAllocator = document.getElementById('skill-allocator');
const pointsValue = document.getElementById('points-value');
const characterSheet = document.getElementById('character-sheet');
const regionDetailsBox = document.getElementById('region-details-box');
const raceDetailsBox = document.getElementById('race-details-box');
const factionDetailsBox = document.getElementById('faction-details-box');
const tokenUploadBtn = document.getElementById('upload-token-btn');
const tokenUploadInput = document.getElementById('token-upload-input');
const sheetTokenImg = document.getElementById('sheet-token-img');


// --- INITIALIZATION ---
function init() {
    populateRegions();
    populateFactions();
    setupEventListeners();
    goToStep(1); // Start at step 1
}

// --- RENDER FUNCTIONS ---

function populateRegions() {
    const regions = Object.keys(WALUIGI_REGION_TIPS);
    regionGrid.innerHTML = regions.map(region => {
        const imageUrl = REGION_IMAGE_MAP[region] || '../logo.png';
        return `
            <div class="region-card" data-region-name="${region}">
                <img src="${imageUrl}" alt="${region} map thumbnail">
                <span>${region}</span>
            </div>
        `;
    }).join('');
}

function updateRegionPreview(regionName) {
    const imageUrl = REGION_IMAGE_MAP[regionName] || '../logo.png';
    
    regionPreviewImage.src = imageUrl;
    regionPreviewImage.style.display = 'block';
    regionPreviewPlaceholder.style.display = 'none';

    // Update Waluigi's commentary
    commentaryText.textContent = WALUIGI_REGION_TIPS[regionName] || "WAH! I have no strong opinions on this place. It must be very boring.";
    
    // Update region details box with starting items
    const items = REGION_STARTING_ITEMS[regionName] || [];
    if (items.length > 0) {
        const itemsHTML = items.map(item => `<li><strong>${item.name}:</strong> ${item.effect}</li>`).join('');
        regionDetailsBox.innerHTML = `
            <h5>Region Bonus: Starting Items</h5>
            <ul>${itemsHTML}</ul>
        `;
    } else {
        regionDetailsBox.innerHTML = '';
    }
}

function populateRaces(regionName) {
    operatorRaceSelect.innerHTML = '';
    const racesForRegion = RACES.filter(r => r.region === regionName || r.region === 'Universal');
    racesForRegion.forEach(race => {
        const option = document.createElement('option');
        option.value = race.name;
        option.textContent = race.name;
        operatorRaceSelect.appendChild(option);
    });
     // Add Custom option at the end
    const customOption = document.createElement('option');
    customOption.value = 'Custom';
    customOption.textContent = '--- Custom Race ---';
    operatorRaceSelect.appendChild(customOption);
    
    // Trigger change to update state and details for the default selection
    operatorRaceSelect.dispatchEvent(new Event('change'));
}

function populateFactions() {
    const sortedFactions = Object.entries(LORE_DATA.factions)
        .sort(([, a], [, b]) => a.name.localeCompare(b.name));
    
    sortedFactions.forEach(([key, faction]) => {
        if (key === 'unaligned') return;
        const option = document.createElement('option');
        option.value = key;
        option.textContent = faction.name;
        factionSelect.appendChild(option);
    });
}

function updateWaluigiCommentaryForRace(raceName) {
    const race = RACES.find(r => r.name === raceName);
    if (race && race.waluigiCommentary) {
        commentaryText.textContent = race.waluigiCommentary;
    }
}

function renderQuestDisplay(quests) {
    state.quests = quests;
    questDisplay.innerHTML = quests.map(quest => `
        <div class="quest-option">
            <h5>${quest.title}</h5>
            <p>${quest.objective}</p>
        </div>
    `).join('');
}

function renderQuestSelection(quests) {
    let questHTML = `
        <p class="step-subtitle">You have ${quests.length} potential directives based on your background. Choose your two primary objectives.</p>
        <div id="quest-selection-list">
    `;
    quests.forEach(quest => {
        questHTML += `
            <div class="quest-selection-item">
                <input type="checkbox" id="quest-${quest.title.replace(/\s+/g, '')}" name="quest-selection" value="${quest.title}">
                <label for="quest-${quest.title.replace(/\s+/g, '')}">
                    <strong>${quest.title}</strong>
                    <span>${quest.objective}</span>
                </label>
            </div>
        `;
    });
    questHTML += `</div>`;
    questDisplay.innerHTML = questHTML;

    const checkboxes = questDisplay.querySelectorAll('input[name="quest-selection"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            const selected = questDisplay.querySelectorAll('input[name="quest-selection"]:checked');
            if (selected.length >= 2) {
                checkboxes.forEach(cb => {
                    if (!cb.checked) {
                        cb.disabled = true;
                    }
                });
                state.quests = Array.from(selected).map(s => quests.find(q => q.title === s.value));
                nextBtn.disabled = false;
            } else {
                checkboxes.forEach(cb => cb.disabled = false);
                state.quests = [];
                nextBtn.disabled = true;
            }
        });
    });
}


function assignQuests() {
    const baseQuests = [];
    
    const selectedRace = RACES.find(r => r.name === state.race);
    if (selectedRace && selectedRace.availableQuests) {
        baseQuests.push(...selectedRace.availableQuests);
    }
    
    const potentialQuests = [...new Set(baseQuests)]
        .map(id => RACE_QUESTS[id] || NEW_OPERATOR_QUESTS[id])
        .filter(Boolean);

    if (potentialQuests.length > 3) {
        nextBtn.disabled = true;
        renderQuestSelection(potentialQuests);
    } else {
        nextBtn.disabled = false;
        renderQuestDisplay(potentialQuests);
    }
}


// --- WIZARD NAVIGATION ---

function goToStep(stepNumber) {
    currentStep = stepNumber;
    
    // Hide all steps
    wizard.querySelectorAll('.wizard-step').forEach(step => step.classList.remove('active'));
    // Show the current step
    wizard.querySelector(`.wizard-step[data-step="${currentStep}"]`).classList.add('active');

    // Update indicator
    stepIndicator.textContent = `Step ${currentStep} of ${totalSteps}`;

    // Update button states
    prevBtn.disabled = currentStep === 1;
    nextBtn.textContent = currentStep === totalSteps ? 'Finalize Profile' : 'Next';
    nextBtn.disabled = false;

    // Step-specific logic
    switch(currentStep) {
        case 1:
            nextBtn.disabled = !selectedRegion;
            break;
        case 2:
            updateRaceDetails(operatorRaceSelect.value);
            break;
        case 3:
            assignQuests();
            break;
        case 4:
            updateFactionDetails(factionSelect.value);
            break;
        case 5:
            initializeSkills();
            break;
        case 6:
            generateCharacterSheet();
            break;
    }
}


function setupEventListeners() {
    // --- Navigation ---
    prevBtn.addEventListener('click', () => goToStep(currentStep - 1));
    nextBtn.addEventListener('click', () => {
        if (currentStep < totalSteps) {
            goToStep(currentStep + 1);
        } else {
            // Finalize logic
            alert("WAH-nderful! Your profile is complete. Now get to work!");
        }
    });

    // --- Step 1: Region ---
    regionGrid.addEventListener('click', e => {
        const card = e.target.closest('.region-card');
        if (card) {
            playSound('click.mp3');
            const regionName = card.dataset.regionName;
            selectedRegion = regionName;
            state.region = regionName;

            // Update UI
            regionGrid.querySelectorAll('.region-card').forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            updateRegionPreview(regionName);
            populateRaces(regionName);

            // Enable next button
            nextBtn.disabled = false;
        }
    });
    
    // --- Step 2: Vitals ---
    operatorNameInput.addEventListener('change', e => state.name = e.target.value);
    operatorReasonTextarea.addEventListener('change', e => state.reason = e.target.value);
    operatorRaceSelect.addEventListener('change', e => {
        const raceName = e.target.value;
        state.race = raceName;
        operatorRaceCustomInput.style.display = raceName === 'Custom' ? 'block' : 'none';
        
        const selectedRaceData = RACES.find(r => r.name === raceName);
        if (selectedRaceData && selectedRaceData.faction) {
            factionSelect.value = selectedRaceData.faction;
            factionSelect.disabled = true;
            factionSelect.dispatchEvent(new Event('change'));
        } else {
            factionSelect.value = 'unaligned';
            factionSelect.disabled = false;
            factionSelect.dispatchEvent(new Event('change'));
        }

        updateWaluigiCommentaryForRace(raceName);
        updateRaceDetails(raceName);
    });
    operatorRaceCustomInput.addEventListener('change', e => state.customRace = e.target.value);
    
    // --- Step 4: Faction ---
    factionSelect.addEventListener('change', e => {
        state.faction = e.target.value;
        const factionData = LORE_DATA.factions[state.faction];
        if (factionData && factionData.waluigi_tip) {
            factionTipBox.innerHTML = `<img src="../logo.png" alt="Waluigi Logo"><div><h6>Waluigi's Cunning Plan</h6><p>${factionData.waluigi_tip}</p></div>`;
            factionTipBox.style.display = 'flex';
        } else {
            factionTipBox.style.display = 'none';
        }
        updateFactionDetails(state.faction);
    });

    // --- Step 6: Token Upload ---
    tokenUploadBtn.addEventListener('click', () => tokenUploadInput.click());
    tokenUploadInput.addEventListener('change', e => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                state.tokenImage = event.target.result;
                const img = document.createElement('img');
                img.src = state.tokenImage;
                sheetTokenImg.innerHTML = '';
                sheetTokenImg.appendChild(img);
                sheetTokenImg.classList.remove('placeholder');
            };
            reader.readAsDataURL(file);
        }
    });
}

function updateRaceDetails(raceName) {
    if (!raceDetailsBox) return;
    const race = RACES.find(r => r.name === raceName);
    if (!race) {
        raceDetailsBox.innerHTML = '';
        return;
    }

    let itemsHTML = '';
    if (race.startingItems && race.startingItems.length > 0) {
        itemsHTML = `
            <h5>Starting Items</h5>
            <ul>${race.startingItems.map(item => `<li><strong>${item.name}:</strong> ${item.effect}</li>`).join('')}</ul>
        `;
    }

    let skillsHTML = '';
    if (race.skillBonuses && Object.keys(race.skillBonuses).length > 0) {
        skillsHTML = `
            <h5>Skill Bonuses</h5>
            <ul>${Object.entries(race.skillBonuses).map(([skill, value]) => `<li>${skill.charAt(0).toUpperCase() + skill.slice(1)}: <strong>+${value}</strong></li>`).join('')}</ul>
        `;
    }

    let bonusesHTML = itemsHTML + skillsHTML;
    if (!bonusesHTML) {
        bonusesHTML = '<h5>Bonuses</h5><p>No specific racial bonuses.</p>';
    }

    raceDetailsBox.innerHTML = `
        <h5>Race Details: ${race.name}</h5>
        <p><strong class="ability-name">Ability:</strong> ${race.ability}</p>
        <p><strong>Standing:</strong> ${race.standing}</p>
        ${bonusesHTML}
    `;
}


function updateFactionDetails(factionKey) {
    if (!factionDetailsBox) return;
    const faction = FACTIONS[factionKey];
    if (!faction) {
        factionDetailsBox.innerHTML = '';
        return;
    }
    
    let bonusesHTML = '';
    if (faction.startingItems && faction.startingItems.length > 0) {
        bonusesHTML = `
            <h5>Faction Bonus: Starting Items</h5>
            <ul>${faction.startingItems.map(item => `<li><strong>${item.name}:</strong> ${item.effect}</li>`).join('')}</ul>
        `;
    } else if (faction.skillBonuses && Object.keys(faction.skillBonuses).length > 0) {
        bonusesHTML = `
            <h5>Faction Skill Bonuses</h5>
            <ul>${Object.entries(faction.skillBonuses).map(([skill, value]) => `<li>${skill.charAt(0).toUpperCase() + skill.slice(1)}: <strong>+${value}</strong></li>`).join('')}</ul>
        `;
    } else {
        bonusesHTML = ''; // No header if no bonuses
    }

    factionDetailsBox.innerHTML = bonusesHTML;
}

function initializeSkills() {
    const skillList = ["athletics", "acrobatics", "stealth", "technology", "investigation", "perception", "survival", "persuasion", "intimidation", "performance"];
    const race = RACES.find(r => r.name === state.race);
    const faction = FACTIONS[state.faction];

    state.skillBonuses = {};
    skillList.forEach(skill => {
        const raceBonus = race?.skillBonuses?.[skill] || 0;
        const factionBonus = faction?.skillBonuses?.[skill] || 0;
        state.skillBonuses[skill] = raceBonus + factionBonus;
        state.skills[skill] = state.skillBonuses[skill]; // Start with bonus points
    });

    let spentPoints = 0;
    pointsValue.textContent = 4;

    skillAllocator.innerHTML = skillList.map(skill => {
        const bonus = state.skillBonuses[skill];
        return `
            <div class="skill-row">
                <span class="skill-name ${bonus > 0 ? 'bonus' : ''}">${skill.charAt(0).toUpperCase() + skill.slice(1)}</span>
                <div class="skill-controls">
                    <button class="skill-btn" data-skill="${skill}" data-op="-1">-</button>
                    <span class="skill-value" id="skill-value-${skill}">${bonus}</span>
                    <button class="skill-btn" data-skill="${skill}" data-op="1">+</button>
                </div>
            </div>
        `;
    }).join('');

    skillAllocator.addEventListener('click', e => {
        const btn = e.target.closest('.skill-btn');
        if (btn) {
            const skill = btn.dataset.skill;
            const op = parseInt(btn.dataset.op);
            const valueSpan = document.getElementById(`skill-value-${skill}`);
            
            const baseValue = state.skillBonuses[skill];
            const currentValue = state.skills[skill] || baseValue; // Ensure it's a number
            const allocatedPoints = currentValue - baseValue;

            if (op === 1 && spentPoints < 4) {
                state.skills[skill] = currentValue + 1;
                spentPoints++;
            } else if (op === -1 && allocatedPoints > 0) {
                state.skills[skill] = currentValue - 1;
                spentPoints--;
            }
            
            valueSpan.textContent = state.skills[skill];
            pointsValue.textContent = 4 - spentPoints;
        }
    });
}

function generateCharacterSheet() {
    const race = RACES.find(r => r.name === state.race);
    const faction = FACTIONS[state.faction];
    state.baseStats = race ? { ...race.baseStats } : {};
    
    // Vitals
    document.getElementById('sheet-name').textContent = state.name || "Nameless Loser";
    document.getElementById('sheet-race').textContent = state.race === 'Custom' ? state.customRace : state.race;
    const factionName = LORE_DATA.factions[state.faction]?.name || "Unaligned";
    document.getElementById('sheet-faction').textContent = factionName;

    // Attributes
    const attributesGrid = document.querySelector('.sheet-attributes-grid');
    attributesGrid.innerHTML = Object.entries(state.baseStats).map(([attr, score]) => {
        const modifier = Math.floor((score - 10) / 2);
        return `
            <div class="sheet-attribute-box">
                <h5>${attr.toUpperCase()}</h5>
                <span class="attr-score">${score}</span>
                <span class="attr-modifier">${modifier >= 0 ? '+' : ''}${modifier}</span>
            </div>`;
    }).join('');

    // Skills
    const skillsList = document.querySelector('.sheet-skills-list');
    skillsList.innerHTML = Object.entries(state.skills).map(([skill, value]) => `
        <div class="sheet-skill-item">
            <span>${skill.charAt(0).toUpperCase() + skill.slice(1)}</span>
            <span class="sheet-skill-value">${value}</span>
        </div>
    `).join('');

    // Ability & Backstory
    document.getElementById('sheet-ability').textContent = race?.ability || "None.";
    document.getElementById('sheet-reason').textContent = state.reason || "No good reason.";

    // Equipment
    const regionItems = REGION_STARTING_ITEMS[state.region] || [];
    const raceItems = race?.startingItems || [];
    const factionItems = faction?.startingItems || [];
    const allItems = [...regionItems, ...raceItems, ...factionItems];

    const equipmentList = document.getElementById('sheet-equipment-list');
    if (allItems.length > 0) {
        equipmentList.innerHTML = allItems.map(item => `
            <li><strong>${item.name}:</strong> ${item.effect}</li>
        `).join('');
    } else {
        equipmentList.innerHTML = `<li>No special starting equipment.</li>`;
    }


    // Quests
    const questsList = document.getElementById('sheet-quests-list');
    questsList.innerHTML = state.quests.map(quest => `
        <li><strong>${quest.title}:</strong> ${quest.objective}</li>
    `).join('');
}


// Initialize the app
init();