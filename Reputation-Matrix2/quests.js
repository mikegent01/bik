import { QUEST_DATA } from './quests-data.js';
import { BOUNTY_BOARD_QUESTS } from './bounty-quests-data.js';
import { playSound } from './common.js';
import { state } from './state.js';
import { LORE_DATA } from './lore.js';
import { MAP_DATA } from './map-data.js';

const mainQuestContainer = document.getElementById('quest-container');
const bountyBoardContainer = document.getElementById('quest-board-list');
const questCounter = document.getElementById('quest-counter');
const sorterContainer = document.getElementById('quest-sorter');
const filtererContainer = document.getElementById('quest-filterer');
const statusFiltererContainer = document.getElementById('status-filterer');

let currentSort = 'status';

// Helper to create a consistent key from assignee names
function sanitizeKey(name) {
    if (!name) return '';
    return name.toLowerCase()
               .replace(/\s*&\s*/g, '_&_') // ' & ' -> '_&_'
               .replace(/[\s']/g, '_')     // ' ' or ''' -> '_'
               .replace(/[^a-z0-9_&]/g, ''); // remove other special chars
}

// Dynamically generate filter keys from the quest data
const allAssignees = [...new Set(Object.values(QUEST_DATA).map(q => q.assignee))];
let filterStates = allAssignees.reduce((acc, assignee) => {
    const key = sanitizeKey(assignee);
    if (key) {
        acc[key] = 'off';
    }
    return acc;
}, {});

let statusFilterStates = {
    active: 'off',
    ongoing: 'off',
    available: 'off',
    pending: 'off',
    completed: 'off',
    failed: 'off'
};


function findPoiById(poiId) {
    for (const mapKey in MAP_DATA) {
        const mapData = MAP_DATA[mapKey];
        if (mapData.pointsOfInterest) {
            const poi = mapData.pointsOfInterest.find(p => p.id === poiId);
            if (poi) return poi;
        }
    }
    return null;
}

function updateAssigneeFilterButtonsUI() {
    if (!filtererContainer) return;
    const filterButtons = filtererContainer.querySelectorAll('.control-btn');
    filterButtons.forEach(btn => {
        const filterKey = btn.dataset.filter;
        if (filterKey === 'reset') return; 

        btn.classList.remove('active-include', 'active-exclude');
        const state = filterStates[filterKey];
        if (state === 'include') {
            btn.classList.add('active-include');
        } else if (state === 'exclude') {
            btn.classList.add('active-exclude');
        }
    });
}

function updateStatusFilterButtonsUI() {
    if (!statusFiltererContainer) return;
    const filterButtons = statusFiltererContainer.querySelectorAll('.control-btn');
    filterButtons.forEach(btn => {
        const filterKey = btn.dataset.filter;
        btn.classList.remove('active-include', 'active-exclude');
        const state = statusFilterStates[filterKey];
        if (state === 'include') {
            btn.classList.add('active-include');
        } else if (state === 'exclude') {
            btn.classList.add('active-exclude');
        }
    });
}

function renderQuests() {
    if (!mainQuestContainer) return;

    // 1. Filter quests based on the new state object
    const includeAssignees = Object.keys(filterStates).filter(key => filterStates[key] === 'include');
    const excludeAssignees = Object.keys(filterStates).filter(key => filterStates[key] === 'exclude');
    const includeStatuses = Object.keys(statusFilterStates).filter(key => statusFilterStates[key] === 'include');
    const excludeStatuses = Object.keys(statusFilterStates).filter(key => statusFilterStates[key] === 'exclude');


    let questsToDisplay = Object.values(QUEST_DATA).filter(quest => {
        // Assignee Filtering
        const sanitizedAssignee = sanitizeKey(quest.assignee);
        const assigneeIncluded = includeAssignees.length === 0 || includeAssignees.includes(sanitizedAssignee);
        const assigneeExcluded = excludeAssignees.includes(sanitizedAssignee);
        if (!assigneeIncluded || assigneeExcluded) {
            return false;
        }
        
        // Status Filtering
        const questStatus = quest.status;
        const statusIncluded = includeStatuses.length === 0 || includeStatuses.includes(questStatus);
        const statusExcluded = excludeStatuses.includes(questStatus);
        if (!statusIncluded || statusExcluded) {
            return false;
        }

        return true;
    });
    
    // 2. Separate quests into buckets
    const completedQuests = [];
    const failedQuests = [];
    const otherQuests = [];

    for (const quest of questsToDisplay) {
        if (quest.status === 'hidden' && quest.steps?.every(s => s.status === 'locked')) {
            continue;
        }
        
        switch (quest.status) {
            case 'completed':
                completedQuests.push(quest);
                break;
            case 'failed':
                failedQuests.push(quest);
                break;
            default:
                otherQuests.push(quest);
                break;
        }
    }

    // 3. Group the "other" quests by their category
    const questsByCategory = {};
    for (const quest of otherQuests) {
        const category = quest.category || 'Miscellaneous';
        if (!questsByCategory[category]) {
            questsByCategory[category] = [];
        }
        questsByCategory[category].push(quest);
    }
    
    // 4. Sort quests within each category
    const statusOrder = { 'active': 1, 'ongoing': 1, 'pending': 2, 'available': 3, 'hidden': 4, 'completed': 5, 'failed': 6 };
    const typeOrder = { 'main': 1, 'personal': 2, 'side': 3, 'request': 4, 'mystery': 5, 'npc_plot': 6 };

    const sortFn = (a, b) => {
        if (currentSort === 'status') {
            return (statusOrder[a.status] || 99) - (statusOrder[b.status] || 99);
        }
        if (currentSort === 'type') {
            return (typeOrder[a.type] || 99) - (typeOrder[b.type] || 99);
        }
        return a.title.localeCompare(b.title);
    };

    for (const category in questsByCategory) {
        questsByCategory[category].sort(sortFn);
    }
    completedQuests.sort((a,b) => a.title.localeCompare(b.title));
    failedQuests.sort((a,b) => a.title.localeCompare(b.title));

    // 5. Build the final HTML
    let html = '';
    const sortedCategories = Object.keys(questsByCategory).sort((a, b) => {
        if (a === 'Main Story') return -1;
        if (b === 'Main Story') return 1;
        return a.localeCompare(b);
    });
    
    if(sortedCategories.length === 0 && completedQuests.length === 0 && failedQuests.length === 0) {
        html = `<div class="quest-category"><p>No quests match the current filter.</p></div>`;
    } else {
        for (const category of sortedCategories) {
            const quests = questsByCategory[category];
            html += renderCategory(category, quests);
        }
        if (completedQuests.length > 0) {
            html += renderCategory('Completed Quests', completedQuests, 'completed-quests');
        }
        if (failedQuests.length > 0) {
            html += renderCategory('Failed Quests', failedQuests, 'failed-quests');
        }
    }

    mainQuestContainer.innerHTML = html;

    // 6. Update quest counter
    updateQuestCounter();
}

function updateQuestCounter() {
    const players = state.party;
    const questLimit = 3;
    let counterHTML = '';

    players.forEach(playerKey => {
        const player = LORE_DATA.characters[playerKey];
        if (!player) return;

        const playerFirstName = player.name.split(' ')[0];
        const activeQuests = Object.values(QUEST_DATA).filter(q => q.assigneeKey === playerKey && q.status === 'active').length;

        const isOverLimit = activeQuests >= questLimit;
        counterHTML += `
            <div class="player-quest-count ${isOverLimit ? 'limit-reached' : ''}" title="${player.name}'s Active Quests">
                ${playerFirstName}: ${activeQuests} / ${questLimit}
            </div>
        `;
    });

    questCounter.innerHTML = counterHTML;
}


function renderCategory(title, quests, cssClass = '') {
    return `
        <div class="quest-category ${cssClass}">
            <h3 class="quest-category-title">${title}</h3>
            <div class="quest-list">
                ${quests.map(renderQuestCard).join('')}
            </div>
        </div>
    `;
}

function formatQuestType(type) {
    if (!type) return '';
    if (type === 'npc_plot') {
        return 'NPC Plot';
    }
    // Capitalize first letter of other types
    return type.charAt(0).toUpperCase() + type.slice(1);
}

function renderQuestCard(quest) {
    const contextHTML = quest.pending_condition ? `
        <div class="quest-context pending">
            <strong>Pending Activation:</strong> <p>${quest.pending_condition}</p>
        </div>
    ` : quest.motivation ? `
        <div class="quest-context">
            <strong>Motivation:</strong> <p>${quest.motivation}</p>
        </div>
    ` : quest.start_condition ? `
        <div class="quest-context">
            <strong>Start Condition:</strong> <p>${quest.start_condition}</p>
        </div>
    ` : '';
    
    const isHidden = quest.status === 'hidden';

    const stepsHTML = (quest.steps && quest.steps.length > 0) ? `
        <div class="quest-steps-container">
            <h5>Checkpoints</h5>
            <ul class="quest-step-list">
                ${quest.steps.map(step => renderQuestStep(step, isHidden)).join('')}
            </ul>
        </div>
    ` : '';

    let locationHTML = '';
    if (quest.type === 'request' && quest.locationId) {
        const location = findPoiById(quest.locationId);
        if (location) {
            locationHTML = `<p class="quest-location"><strong>Location:</strong> ${location.name}</p>`;
        }
    }

    const formattedType = formatQuestType(quest.type);

    return `
        <div class="quest-card status-${quest.status}" id="${quest.id}">
            <div class="quest-header">
                <div class="quest-title-section">
                    <h4 class="quest-title">${quest.title}</h4>
                    <p class="quest-type">${formattedType}</p>
                    <p class="quest-assignee">Assignee: ${quest.assignee}</p>
                    ${locationHTML}
                </div>
                <div class="quest-status">${quest.status}</div>
            </div>
            <div class="quest-body">
                <div class="quest-objective">
                    <h5>Objective</h5>
                    <p>${quest.objective}</p>
                </div>
                ${contextHTML}
                ${stepsHTML}
                ${quest.finalDecision ? `
                <div class="quest-final-decision">
                    <h5>Final Decision</h5>
                    <p>${quest.finalDecision.description}</p>
                </div>` : ''}
            </div>
        </div>
    `;
}

function renderQuestStep(step, isParentHidden) {
    if (isParentHidden && step.status === 'locked') {
        return `
            <li class="quest-step status-locked">
                <div class="step-marker"></div>
                <div class="step-content">
                    <p class="step-title">Undiscovered Step</p>
                    <p class="step-description">Further objectives are unknown at this time.</p>
                </div>
            </li>
        `;
    }

    return `
        <li class="quest-step status-${step.status}">
            <div class="step-marker"></div>
            <div class="step-content">
                <p class="step-title">${step.title}</p>
                <p class="step-description">${step.description}</p>
                ${step.options ? `
                <div class="step-options">
                    <h6>Options:</h6>
                    <ul>
                        ${step.options.map(opt => `<li>${opt}</li>`).join('')}
                    </ul>
                </div>` : ''}
            </div>
        </li>
    `;
}

function renderBountyBoard() {
    if (!bountyBoardContainer) return;

    bountyBoardContainer.innerHTML = BOUNTY_BOARD_QUESTS.map(quest => {
        const rewardClass = quest.reward_type || 'neutral';
        return `
            <div class="quest-note">
                <div class="quest-pin"></div>
                <h4 class="note-title">${quest.title}</h4>
                <p class="note-content">${quest.description}</p>
                <div class="note-footer">
                    <p><strong>Reward:</strong> <span class="${rewardClass}">${quest.reward}</span></p>
                    <p>- ${quest.posted_by}</p>
                </div>
            </div>
        `;
    }).join('');
}

function setupEventListeners() {
    if (mainQuestContainer) {
        mainQuestContainer.addEventListener('click', e => {
            const header = e.target.closest('.quest-header');
            if (header) {
                playSound('click.mp3');
                const card = header.closest('.quest-card');
                card.classList.toggle('is-expanded');
            }
        });
    }

    if (sorterContainer) {
        sorterContainer.addEventListener('click', e => {
            const button = e.target.closest('.sort-btn');
            if (button && !button.classList.contains('active')) {
                playSound('confirm.mp3', 0.5);
                currentSort = button.dataset.sort;
                sorterContainer.querySelectorAll('.sort-btn').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                renderQuests();
            }
        });
    }

    if (filtererContainer) {
        filtererContainer.addEventListener('click', e => {
            const button = e.target.closest('.control-btn');
            if (button) {
                playSound('confirm.mp3', 0.5);
                const filterKey = button.dataset.filter;

                if (filterKey === 'reset') {
                    for (const key in filterStates) {
                        filterStates[key] = 'off';
                    }
                    for (const key in statusFilterStates) {
                        statusFilterStates[key] = 'off';
                    }
                } else if (filterStates.hasOwnProperty(filterKey)) {
                    const currentState = filterStates[filterKey];
                    if (currentState === 'off') {
                        filterStates[filterKey] = 'include';
                    } else if (currentState === 'include') {
                        filterStates[filterKey] = 'exclude';
                    } else { // currentState is 'exclude'
                        filterStates[filterKey] = 'off';
                    }
                }
                
                updateAssigneeFilterButtonsUI();
                updateStatusFilterButtonsUI();
                renderQuests();
            }
        });
    }

    if (statusFiltererContainer) {
        statusFiltererContainer.addEventListener('click', e => {
            const button = e.target.closest('.control-btn');
            if (button) {
                playSound('confirm.mp3', 0.5);
                const filterKey = button.dataset.filter;
                if (statusFilterStates.hasOwnProperty(filterKey)) {
                    const currentState = statusFilterStates[filterKey];
                    if (currentState === 'off') {
                        statusFilterStates[filterKey] = 'include';
                    } else if (currentState === 'include') {
                        statusFilterStates[filterKey] = 'exclude';
                    } else { // currentState is 'exclude'
                        statusFilterStates[filterKey] = 'off';
                    }
                }
                updateStatusFilterButtonsUI();
                renderQuests();
            }
        });
    }
}

function init() {
    if (!mainQuestContainer) return;
    renderQuests();
    renderBountyBoard();
    setupEventListeners();
}

init();