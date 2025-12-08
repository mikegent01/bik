// =============================================
// RAKASHA CLANS SYSTEM - MAIN CONTROLLER
// =============================================

import { state } from './state.js';
import { CURRENT_GAME_DATE } from './calendar-data.js';

// =============================================
// RAKASHA DATA - Integrated with Plot
// =============================================

const RAKASHA_DATA = {
    description: "The Rakasha are a deeply traditional and secretive people. To outsiders, all members are known simply as 'Rakasha' to protect their identity. True names are only shared with trusted allies. Their society is built around three major clans, each following a different philosophy or 'College of Thought.'",
    
    clans: [
        {
            id: 'spirit_walkers',
            name: 'Spirit-Walkers',
            cssClass: 'spirit-walkers',
            icon: '👁️',
            colorClass: 'spirit',
            philosophy: 'College of the Unseen',
            philosophy_desc: 'Believe that the balance of the physical and spiritual worlds is paramount. They are the shamans, healers, and leaders who guide the clans with wisdom and foresight. Spirit-Walkers can perceive threads of fate and commune with ancestral spirits.',
            members: [
                { 
                    public_name: 'Rakasha', 
                    true_name: 'Chief Thornpaw', 
                    role: 'Clan Leader & High Shaman',
                    intel_required: 75,
                    highlight: true,
                    details: 'Chief Thornpaw holds a devastating secret - he was romantically involved with Princess Peach before her assassination. He knows of a secret hatch in her chambers, information that could reshape the investigation into her death.'
                },
                { 
                    public_name: 'Rakasha', 
                    true_name: 'Elder Moon-Eye', 
                    role: 'Seer of the Veil',
                    intel_required: 60,
                    highlight: false,
                    details: 'An ancient seer who claims to have witnessed the moment of Peach\'s death through spirit-sight. Her testimony is considered sacred but cryptic.'
                },
                { 
                    public_name: 'Dan', 
                    true_name: 'Dan (Initiate)', 
                    role: 'Acolyte Spirit-Walker',
                    intel_required: 40,
                    highlight: true,
                    details: 'A toad who found his way to the Rakasha seeking spiritual guidance. He has been training in the ways of the Spirit-Walkers and played a critical role in the party\'s confrontation with X.O.'
                }
            ]
        },
        {
            id: 'beast_riders',
            name: 'Beast-Riders',
            cssClass: 'beast-riders',
            icon: '🦁',
            colorClass: 'beast',
            philosophy: 'College of the Claw',
            philosophy_desc: 'Hold that strength and martial prowess are the highest virtues. They are the warriors and protectors of the clans, forming deep bonds with their animal mounts and seeking glory in honorable combat.',
            members: [
                { 
                    public_name: 'Rakasha', 
                    true_name: 'Warchief Ironmane', 
                    role: 'Champion of the Clans',
                    intel_required: 65,
                    highlight: false,
                    details: 'The greatest warrior among the Rakasha. He has refused all overtures from the Iron Legion to join their forces, viewing them as dishonorable mercenaries.'
                },
                { 
                    public_name: 'Rakasha', 
                    true_name: 'Kira Blood-Tusk', 
                    role: 'Rider Captain',
                    intel_required: 55,
                    highlight: false,
                    details: 'Commands the elite mounted scouts. She has been tracking Iron Legion movements near Rakasha territory with growing concern.'
                },
                { 
                    public_name: 'Rakasha', 
                    true_name: 'Gorok Stone-Hide', 
                    role: 'Beast Master',
                    intel_required: 70,
                    highlight: false,
                    details: 'Responsible for the sacred bond-rituals between Rakasha and their mounts. Rumored to have tamed a young wyvern.'
                }
            ]
        },
        {
            id: 'huntmasters',
            name: 'Huntmasters',
            cssClass: 'huntmasters',
            icon: '🏹',
            colorClass: 'hunt',
            philosophy: 'College of the Wild',
            philosophy_desc: 'Value survival, pragmatism, and a deep understanding of the natural world. They are the scouts, trackers, and providers who ensure the clans endure any hardship through cunning and resourcefulness.',
            members: [
                { 
                    public_name: 'Rakasha', 
                    true_name: 'Silent-Step', 
                    role: 'Master Tracker',
                    intel_required: 50,
                    highlight: false,
                    details: 'The greatest tracker among the clans. He discovered Iron Legion scouts mapping Rakasha territory and has been shadowing their movements.'
                },
                { 
                    public_name: 'Rakasha', 
                    true_name: 'Asha Whisperwind', 
                    role: 'Lead Scout & Spy',
                    intel_required: 80,
                    highlight: false,
                    details: 'Operates as the Rakasha\'s eyes in civilized lands. She was present at Fawful\'s victory gala in disguise and witnessed the revelation about the secret hatch.'
                }
            ]
        }
    ],
    
    traditions: [
        {
            id: 'festival_fallen',
            name: 'Festival of the Fallen',
            icon: '🔥',
            date: 'Highsun 20th',
            description: 'A sacred night where the Rakasha honor the cycle of life and death. Bonfires are lit to guide spirits, and chimes made from the bones of honored ancestors and prey are hung from trees to sing with the wind. It is a celebration of life\'s persistence, not a mourning of its end.',
            significance: 'This year\'s festival coincided with the Iron Mandate vote, creating tension between traditional observance and political crisis.',
            recent_occurrence: true
        },
        {
            id: 'naming_ceremony',
            name: 'The Naming',
            icon: '📜',
            date: 'Upon reaching adulthood',
            description: 'When a young Rakasha comes of age, they undergo a vision quest guided by the Spirit-Walkers. In their trance, they receive their true name from the ancestral spirits. This name holds power and is never spoken to outsiders.',
            significance: 'The giving of a true name to an outsider (like Dan) is extraordinarily rare and signifies complete trust.',
            recent_occurrence: false
        },
        {
            id: 'blood_oath',
            name: 'The Blood Oath',
            icon: '🩸',
            date: 'When treaties are sealed',
            description: 'When the Rakasha form an alliance, representatives from each party cut their palms and mingle blood over sacred flames. Breaking such an oath is believed to curse the oathbreaker for seven generations.',
            significance: 'The Rakasha have never sworn a Blood Oath with any outside power in recorded history.',
            recent_occurrence: false
        },
        {
            id: 'spirit_walk',
            name: 'The Spirit Walk',
            icon: '👣',
            date: 'During crises or great decisions',
            description: 'A ritual where Spirit-Walkers enter a trance to seek guidance from the ancestral realm. Ryan witnessed this sacred rite after his fall from the Vigilance, a rare honor for an outsider.',
            significance: 'Ryan\'s witnessing of this rite has created a unique bond between him and the Rakasha people.',
            recent_occurrence: true
        }
    ],
    
    intelligence_files: {
        'thornpaw-secret': {
            title: 'The Thornpaw Secret',
            classification: 'TOP SECRET',
            classificationStyle: 'top-secret',
            icon: '👑',
            min_intel: 60,
            sections: [
                {
                    title: 'Primary Intelligence',
                    content: `During Fawful's victory gala on Day 10, Peach Loyalist scouts Embercap and Mistveil made contact with Chief Thornpaw of the Rakasha. In a stunning revelation, Thornpaw disclosed that he was romantically involved with Princess Peach prior to her assassination in 955 BF.`,
                    min_intel: 0
                },
                {
                    title: 'The Secret Hatch',
                    content: `More critically, Thornpaw revealed knowledge of a secret passage behind the royal portrait in Princess Peach's private chambers. This information has never appeared in any official investigation and represents a massive new lead.`,
                    redacted_content: `More critically, Thornpaw revealed knowledge of a <span class="intel-redacted" data-reveal="secret passage behind the royal portrait">█████████████████████████████████</span> in Princess Peach's private chambers. This information has never appeared in any official investigation and represents a massive new lead.`,
                    min_intel: 75
                },
                {
                    title: 'Implications',
                    content: `If Thornpaw's information is accurate, it suggests the possibility that Peach's assassin used this hidden access point. This would fundamentally change our understanding of the assassination and potentially implicate individuals previously considered above suspicion.`,
                    min_intel: 0,
                    quote: {
                        text: 'She showed it to me once, in confidence. Said it was her escape route if the worst ever happened. It appears the worst came through it instead.',
                        source: '— Chief Thornpaw, as reported by Scout Mistveil'
                    }
                }
            ],
            action: {
                text: 'View Hatch Intelligence',
                action: 'openHatchModal',
                min_intel: 70
            }
        },
        'dan-connection': {
            title: 'Dan\'s Training with the Spirit-Walkers',
            classification: 'SECRET',
            classificationStyle: 'secret',
            icon: '🍄',
            min_intel: 30,
            sections: [
                {
                    title: 'Subject Background',
                    content: `Dan, a toad formerly associated with the Liberated Toads faction, sought out the Rakasha Spirit-Walkers for unknown reasons. He has been accepted as an acolyte - an unprecedented honor for an outsider.`,
                    min_intel: 0
                },
                {
                    title: 'Critical Contribution',
                    content: `Dan played a pivotal role during the confrontation with X.O. aboard the Vigilance on Day 5. His intervention, possibly utilizing techniques learned from the Spirit-Walkers, proved critical in neutralizing the threat and securing the airship.`,
                    min_intel: 0
                },
                {
                    title: 'Current Status',
                    content: `Dan sustained critical injuries during the Restaurant Raid on Day 14. The party descended into lava-filled sewers seeking a cure, only to be led into a trap. His current condition: recovering with Rakasha healers in a hidden sanctuary.`,
                    redacted_content: `Dan sustained critical injuries during the Restaurant Raid on Day 14. The party descended into lava-filled sewers seeking a cure, only to be led into a trap. His current condition and location are <span class="intel-redacted" data-reveal="recovering with Rakasha healers in a hidden sanctuary">███████████████████████████████████████████</span>.`,
                    min_intel: 65
                }
            ]
        },
        'iron-mandate': {
            title: 'Iron Mandate Threat Assessment',
            classification: 'URGENT',
            classificationStyle: 'urgent',
            icon: '⚔️',
            min_intel: 20,
            sections: [
                {
                    title: 'Legislative Action',
                    content: `On Day 21, the Midlands Diet passed the Iron Mandate by a vote of 28-8-3, granting the Iron Legion emergency powers to "purge supernatural threats." Speaker Rivers resigned in protest as Legion patrols mobilized immediately.`,
                    min_intel: 0
                },
                {
                    title: 'Impact on Rakasha',
                    content: `While the Rakasha are not explicitly supernatural, their Spirit-Walker practices and shamanic traditions could be classified as such under the Mandate's deliberately vague language. The Beast-Riders' bond with their mounts may also be targeted.`,
                    min_intel: 0
                },
                {
                    title: 'Threat Level',
                    content: `HIGH. Combined with the Supernatural Sovereignty Act passed on Day 18, the Rakasha face potential military action from both the Regal Empire and the Iron Legion. Their traditional territories are increasingly surrounded.`,
                    min_intel: 0,
                    quote: {
                        text: 'They will come for the vampires first, then the werewolves. And when those are gone, they will remember that our shamans speak to spirits, and they will come for us.',
                        source: '— Chief Thornpaw, private council session'
                    }
                }
            ]
        },
        'supernatural-act': {
            title: 'Supernatural Sovereignty Act Impact',
            classification: 'CLASSIFIED',
            classificationStyle: 'classified',
            icon: '📜',
            min_intel: 40,
            sections: [
                {
                    title: 'Legislative Summary',
                    content: `On Day 18, the Regal Empire passed the Supernatural Sovereignty Act, declaring organized vampires (Onyx Hand) and werewolves (Moonfang Pack) illegal. This effectively declares war on supernatural factions.`,
                    min_intel: 0
                },
                {
                    title: 'Rakasha Position',
                    content: `The Rakasha maintain careful neutrality but have historical ties to the Moonfang Pack through shared wilderness territories. The Act creates pressure for them to either abandon old allies or face guilt by association.`,
                    min_intel: 0
                },
                {
                    title: 'Strategic Concern',
                    content: `The Act's passage only 3 days before the Iron Mandate suggests coordinated action. The Rakasha spirit-walking traditions may be reframed as "supernatural" to justify intervention in their territories.`,
                    min_intel: 0
                }
            ]
        },
        'spirit-rites': {
            title: 'Spirit-Walker Rites (Observed)',
            classification: 'SECRET',
            classificationStyle: 'secret',
            icon: '👁️',
            min_intel: 50,
            sections: [
                {
                    title: 'Observation Report',
                    content: `Following his fall from the Vigilance on Day 20, Ryan was recovered by Rakasha scouts and brought to a Spirit-Walker encampment. There, he witnessed sacred rites normally forbidden to outsiders.`,
                    min_intel: 0
                },
                {
                    title: 'Ritual Description',
                    content: `The Spirit-Walk involves the ingestion of sacred herbs, rhythmic drumming, and a trance state during which the participant's consciousness reportedly enters the "spirit realm." Spirit-Walkers claim to commune with ancestors and perceive possible futures.`,
                    min_intel: 0
                },
                {
                    title: 'Ryan\'s Experience',
                    content: `Ryan reported seeing visions of possible futures during the rite. Most significantly, he claims to have seen the face of Princess Peach's true killer - though the vision was fragmented and unclear. Full debriefing is pending.`,
                    redacted_content: `Details of what Ryan witnessed or experienced during the rites remain <span class="intel-redacted" data-reveal="classified pending his full debriefing - he claims to have seen visions of Peach's killer">███████████████████████████████████████████████████████</span>. However, his survival and rescue by the Rakasha has created a potential diplomatic bridge.`,
                    min_intel: 85
                }
            ]
        }
    },
    
    timeline_events: [
        {
            date: { year: 955, monthIndex: 6, day: 1 },
            title: 'The Princess\'s Secret',
            description: 'Chief Thornpaw\'s relationship with Princess Peach is at its height. She shares the secret of the hidden hatch with him - a decision that would have massive implications 85 years later.',
            major: true,
            tag: 'Ancient Era',
            min_intel: 70
        },
        {
            date: { year: 1040, monthIndex: 6, day: 5 },
            title: 'Dan\'s Critical Intervention',
            description: 'During the confrontation with X.O. aboard the Vigilance, Dan - trained by Spirit-Walkers - provides critical assistance in neutralizing the threat.',
            major: false,
            tag: 'Party Involvement',
            min_intel: 20
        },
        {
            date: { year: 1040, monthIndex: 6, day: 10 },
            title: 'Secrets at the Gala',
            description: 'Chief Thornpaw finds scout Mistveil at Fawful\'s victory gala and reveals his relationship with Princess Peach and knowledge of the secret hatch. This provides a massive new lead.',
            major: true,
            tag: 'Intelligence Breakthrough',
            min_intel: 50
        },
        {
            date: { year: 1040, monthIndex: 6, day: 14 },
            title: 'Dan Critically Injured',
            description: 'During the Restaurant Raid, Dan sustains critical injuries. The party enters dangerous sewers seeking a cure, suggesting the depth of their bond with the Spirit-Walker acolyte.',
            major: false,
            tag: 'Party Involvement',
            min_intel: 20
        },
        {
            date: { year: 1040, monthIndex: 6, day: 18 },
            title: 'The Supernatural Sovereignty Act',
            description: 'The Regal Empire passes legislation targeting supernatural factions. While not directly naming the Rakasha, their spirit-walking practices create vulnerability.',
            major: true,
            tag: 'Political Threat',
            min_intel: 30
        },
        {
            date: { year: 1040, monthIndex: 6, day: 20 },
            title: 'Ryan & The Rakasha',
            description: 'After surviving his fall from the Vigilance, Ryan is taken in by Rakasha spirit-walkers. He witnesses their sacred rites - an honor rarely extended to outsiders.',
            major: true,
            tag: 'Party Involvement',
            min_intel: 40
        },
        {
            date: { year: 1040, monthIndex: 6, day: 21 },
            title: 'Iron Mandate Enacted',
            description: 'The Midlands Diet grants the Iron Legion emergency powers to purge "supernatural threats." The Rakasha\'s spirit practices may fall under this dangerously vague mandate.',
            major: true,
            tag: 'Political Threat',
            min_intel: 0
        }
    ]
};

// =============================================
// STATE MANAGEMENT
// =============================================

let currentView = 'clans';
let selectedClan = null;
let selectedIntelCategory = 'thornpaw-secret';
let localDebugMode = false;

/**
 * Gets the current intel level for the Rakasha faction
 * Checks both state.debugMode and local debug toggle
 * Returns 100 if debug mode is active, otherwise returns stored intel level
 */
function getIntelLevel() {
    // Check for debug mode from state.js or local toggle
    if (state.debugMode || localDebugMode) {
        return 100;
    }
    
    // Check state.intelLevels for rakasha_clans or rakasha
    // Handle different possible key names
    if (state.intelLevels) {
        return state.intelLevels.rakasha_clans ?? 
               state.intelLevels.rakasha ?? 
               state.intelLevels['Rakasha Clans'] ?? 
               45; // Default intel level
    }
    
    return 45; // Fallback default
}

/**
 * Checks if content should be revealed based on intel requirements
 */
function meetsIntelRequirement(requiredIntel) {
    return getIntelLevel() >= requiredIntel;
}

/**
 * Checks if we're in full reveal mode (100% intel or debug)
 */
function isFullReveal() {
    return getIntelLevel() >= 100;
}

// =============================================
// INITIALIZATION
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('[Rakasha] Initializing system...');
    console.log('[Rakasha] Current intel level:', getIntelLevel());
    console.log('[Rakasha] State debug mode:', state.debugMode);
    
    initViewControls();
    initDebugToggle();
    renderCurrentView();
    updateIntelDisplay();
    initModalCloseHandlers();
});

function initViewControls() {
    const viewBtns = document.querySelectorAll('.view-btn');
    viewBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            viewBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentView = btn.dataset.view;
            renderCurrentView();
        });
    });
}

function initDebugToggle() {
    const debugBtn = document.getElementById('debug-toggle');
    if (debugBtn) {
        // Sync with state.debugMode if it exists
        if (state.debugMode) {
            localDebugMode = true;
            debugBtn.classList.add('active');
            debugBtn.textContent = '🔓';
        }
        
        debugBtn.addEventListener('click', () => {
            localDebugMode = !localDebugMode;
            
            // Also update state.debugMode if possible
            if (typeof state.debugMode !== 'undefined') {
                state.debugMode = localDebugMode;
            }
            
            debugBtn.classList.toggle('active', localDebugMode);
            debugBtn.textContent = localDebugMode ? '🔓' : '🔒';
            
            console.log('[Rakasha] Debug mode:', localDebugMode);
            console.log('[Rakasha] Intel level now:', getIntelLevel());
            
            updateIntelDisplay();
            renderCurrentView();
        });
    }
}

function updateIntelDisplay() {
    const intelLevelEl = document.getElementById('intel-level');
    if (intelLevelEl) {
        const level = getIntelLevel();
        intelLevelEl.textContent = level;
        
        // Update styling based on level
        if (level >= 100) {
            intelLevelEl.style.color = '#00ff00';
            intelLevelEl.parentElement.querySelector('.warning-text').innerHTML = 
                `<span style="color: #00ff00;">FULL ACCESS GRANTED</span> — All intelligence files unlocked.`;
        } else if (level >= 75) {
            intelLevelEl.style.color = '#ffcc00';
        } else if (level >= 50) {
            intelLevelEl.style.color = '#ff8800';
        } else {
            intelLevelEl.style.color = '#ff4444';
        }
    }
}

function initModalCloseHandlers() {
    // Close modals when clicking close button
    document.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });
    
    // Close modals when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // Close modals with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.style.display = 'none';
            });
        }
    });
}

// =============================================
// VIEW RENDERING
// =============================================

function renderCurrentView() {
    // Hide all views
    document.querySelectorAll('.rakasha-view').forEach(v => v.classList.remove('active'));
    
    // Show current view
    const currentViewEl = document.getElementById(`view-${currentView}`);
    if (currentViewEl) {
        currentViewEl.classList.add('active');
    }
    
    // Render view-specific content
    switch(currentView) {
        case 'clans':
            renderClansView();
            break;
        case 'traditions':
            renderTraditionsView();
            break;
        case 'intelligence':
            renderIntelligenceView();
            break;
        case 'timeline':
            renderTimelineView();
            break;
    }
}

// =============================================
// CLANS VIEW
// =============================================

function renderClansView() {
    renderTotemPole();
    
    // If a clan was previously selected, re-render its details
    if (selectedClan) {
        renderClanDetail(selectedClan);
    }
    
    initClanInteractions();
}

function renderTotemPole() {
    const container = document.getElementById('totem-pole');
    if (!container) return;
    
    container.innerHTML = RAKASHA_DATA.clans.map(clan => `
        <div class="rakasha-clan-sigil ${clan.cssClass} ${selectedClan === clan.id ? 'active' : ''}" 
             data-clan-id="${clan.id}"
             title="${clan.name} - ${clan.philosophy}">
            <span class="sigil-icon">${clan.icon}</span>
        </div>
    `).join('');
}

function initClanInteractions() {
    const container = document.getElementById('totem-pole');
    if (!container) return;
    
    // Remove existing listeners by cloning
    const newContainer = container.cloneNode(true);
    container.parentNode.replaceChild(newContainer, container);
    
    newContainer.addEventListener('click', (e) => {
        const sigil = e.target.closest('.rakasha-clan-sigil');
        if (sigil) {
            selectedClan = sigil.dataset.clanId;
            
            // Update active states
            newContainer.querySelectorAll('.rakasha-clan-sigil').forEach(s => {
                s.classList.remove('active');
            });
            sigil.classList.add('active');
            
            renderClanDetail(selectedClan);
        }
    });
}

function renderClanDetail(clanId) {
    const panel = document.getElementById('clan-detail-panel');
    if (!panel) return;
    
    const clan = RAKASHA_DATA.clans.find(c => c.id === clanId);
    if (!clan) return;
    
    const intel = getIntelLevel();
    const fullReveal = isFullReveal();
    
    // Determine what level of member info to show
    let membersHTML = '';
    
    if (intel < 40 && !fullReveal) {
        membersHTML = `
            <div class="members-locked">
                <span class="lock-icon">🔒</span>
                <span>Member identities are protected. Intel level 40% required to begin identification.</span>
            </div>
        `;
    } else {
        membersHTML = `
            <div class="members-list">
                ${clan.members.map(member => renderMemberCard(member, intel, fullReveal)).join('')}
            </div>
        `;
    }
    
    panel.innerHTML = `
        <div class="clan-detail-content">
            <div class="clan-header">
                <div class="clan-header-icon ${clan.colorClass}">${clan.icon}</div>
                <div class="clan-header-text">
                    <h3>${clan.name}</h3>
                    <span class="clan-college">${clan.philosophy}</span>
                </div>
            </div>
            
            <div class="clan-philosophy">
                <p>${clan.philosophy_desc}</p>
            </div>
            
            <div class="clan-members-section">
                <h4>
                    <span>Known Members</span>
                    <span class="intel-indicator ${fullReveal ? 'full' : ''}" style="font-size: 0.8rem; color: var(--text-secondary); margin-left: 8px;">
                        ${fullReveal ? '✓ Full Access' : `(Intel: ${intel}%)`}
                    </span>
                </h4>
                ${membersHTML}
            </div>
        </div>
    `;
    
    // Attach member interaction handlers
    initMemberInteractions();
}

function renderMemberCard(member, intel, fullReveal) {
    const canSeeTrueName = fullReveal || intel >= member.intel_required;
    const highlightClass = member.highlight ? 'highlight' : '';
    
    let nameDisplay;
    if (canSeeTrueName) {
        nameDisplay = `
            <span class="member-true-name">${member.true_name}</span>
            <span class="member-public-name">(Known as: ${member.public_name})</span>
        `;
    } else {
        nameDisplay = `
            <span class="member-public-name">${member.public_name}</span>
            <span class="member-true-name"><span class="redacted">[REDACTED - ${member.intel_required}% required]</span></span>
        `;
    }
    
    return `
        <div class="member-card ${highlightClass}" data-member-name="${member.true_name}">
            <div class="member-info">
                ${nameDisplay}
            </div>
            <span class="member-role">${member.role}</span>
            ${canSeeTrueName ? `
                <button class="member-reveal-btn" data-member="${member.true_name}">
                    📋 Details
                </button>
            ` : `
                <button class="member-reveal-btn" disabled title="Requires ${member.intel_required}% intel">
                    🔒 ${member.intel_required}%
                </button>
            `}
        </div>
    `;
}

function initMemberInteractions() {
    document.querySelectorAll('.member-reveal-btn:not([disabled])').forEach(btn => {
        btn.addEventListener('click', () => {
            const memberName = btn.dataset.member;
            openIdentityModal(memberName);
        });
    });
}

function openIdentityModal(memberName) {
    // Find member across all clans
    let member = null;
    let clanData = null;
    
    for (const clan of RAKASHA_DATA.clans) {
        const found = clan.members.find(m => m.true_name === memberName);
        if (found) {
            member = found;
            clanData = clan;
            break;
        }
    }
    
    if (!member) return;
    
    const modal = document.getElementById('identity-modal');
    const body = document.getElementById('identity-modal-body');
    
    body.innerHTML = `
        <div class="identity-reveal">
            <div class="identity-reveal-icon">${clanData.icon}</div>
            <div class="identity-true-name">${member.true_name}</div>
            <div class="identity-public-alias">Public Alias: "${member.public_name}"</div>
            <div class="identity-details">
                <p><strong>Role:</strong> ${member.role}</p>
                <p><strong>Clan:</strong> ${clanData.name}</p>
                <p><strong>Philosophy:</strong> ${clanData.philosophy}</p>
                <hr style="border-color: var(--rakasha-wood); margin: 12px 0;">
                <p><strong>Intelligence Notes:</strong></p>
                <p style="margin-top: 8px; line-height: 1.6;">${member.details}</p>
                ${member.highlight ? `
                    <div class="identity-highlight-note" style="margin-top: 12px; padding: 10px; background: rgba(218, 165, 32, 0.2); border-radius: 4px; border-left: 3px solid var(--rakasha-accent);">
                        ⚠️ This individual has direct relevance to current party operations.
                    </div>
                ` : ''}
            </div>
        </div>
    `;
    
    modal.style.display = 'flex';
}

// =============================================
// TRADITIONS VIEW
// =============================================

function renderTraditionsView() {
    const container = document.getElementById('traditions-grid');
    if (!container) return;
    
    container.innerHTML = RAKASHA_DATA.traditions.map(tradition => `
        <div class="tradition-card ${tradition.recent_occurrence ? 'recent' : ''}">
            <div class="tradition-header">
                <span class="tradition-icon">${tradition.icon}</span>
                <div>
                    <div class="tradition-title">${tradition.name}</div>
                    <div class="tradition-date">${tradition.date}</div>
                </div>
                ${tradition.recent_occurrence ? `
                    <span class="tradition-recent-badge" style="
                        background: var(--rakasha-accent);
                        color: var(--rakasha-dark);
                        font-size: 0.7rem;
                        padding: 2px 6px;
                        border-radius: 3px;
                        margin-left: auto;
                    ">RECENT</span>
                ` : ''}
            </div>
            <div class="tradition-body">
                <p class="tradition-description">${tradition.description}</p>
                <div class="tradition-significance">
                    <span class="sig-icon">✦</span>
                    <span>${tradition.significance}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// =============================================
// INTELLIGENCE VIEW
// =============================================

function renderIntelligenceView() {
    renderIntelCategories();
    renderIntelContent(selectedIntelCategory);
    initIntelCategoryListeners();
}

function renderIntelCategories() {
    const intel = getIntelLevel();
    
    // Update category states based on intel level
    document.querySelectorAll('.intel-category').forEach(cat => {
        const categoryId = cat.dataset.category;
        const file = RAKASHA_DATA.intelligence_files[categoryId];
        
        if (file && file.min_intel > intel && !isFullReveal()) {
            cat.classList.add('locked');
            cat.style.opacity = '0.5';
            cat.title = `Requires ${file.min_intel}% intel`;
        } else {
            cat.classList.remove('locked');
            cat.style.opacity = '1';
            cat.title = '';
        }
        
        // Update active state
        cat.classList.toggle('active', categoryId === selectedIntelCategory);
    });
}

function initIntelCategoryListeners() {
    const categories = document.querySelectorAll('.intel-category');
    categories.forEach(cat => {
        // Remove old listeners by cloning
        const newCat = cat.cloneNode(true);
        cat.parentNode.replaceChild(newCat, cat);
        
        newCat.addEventListener('click', () => {
            const categoryId = newCat.dataset.category;
            const file = RAKASHA_DATA.intelligence_files[categoryId];
            const intel = getIntelLevel();
            
            // Check if accessible
            if (file && file.min_intel > intel && !isFullReveal()) {
                // Show locked message
                const contentEl = document.getElementById('intel-content');
                contentEl.innerHTML = `
                    <div class="intel-locked-message" style="text-align: center; padding: 40px;">
                        <div style="font-size: 3rem; margin-bottom: 16px;">🔒</div>
                        <h4 style="color: var(--rakasha-accent);">Insufficient Intel Clearance</h4>
                        <p style="margin-top: 12px; color: var(--text-secondary);">
                            This file requires <strong>${file.min_intel}%</strong> intel level.<br>
                            Current level: <strong>${intel}%</strong>
                        </p>
                    </div>
                `;
                return;
            }
            
            // Update selection
            document.querySelectorAll('.intel-category').forEach(c => c.classList.remove('active'));
            newCat.classList.add('active');
            selectedIntelCategory = categoryId;
            renderIntelContent(categoryId);
        });
    });
}

function renderIntelContent(categoryId) {
    const container = document.getElementById('intel-content');
    if (!container) return;
    
    const file = RAKASHA_DATA.intelligence_files[categoryId];
    if (!file) {
        container.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Intelligence file not found.</p>';
        return;
    }
    
    const intel = getIntelLevel();
    const fullReveal = isFullReveal();
    
    // Check access
    if (file.min_intel > intel && !fullReveal) {
        container.innerHTML = `
            <div class="intel-locked-message" style="text-align: center; padding: 40px;">
                <div style="font-size: 3rem; margin-bottom: 16px;">🔒</div>
                <h4 style="color: var(--rakasha-accent);">Insufficient Intel Clearance</h4>
                <p style="margin-top: 12px; color: var(--text-secondary);">
                    This file requires <strong>${file.min_intel}%</strong> intel level.<br>
                    Current level: <strong>${intel}%</strong>
                </p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = `
        <div class="intel-file">
            <div class="intel-file-header">
                <span class="intel-file-title">${file.title}</span>
                <span class="intel-file-class intel-classification ${file.classificationStyle}">${file.classification}</span>
            </div>
            
            ${file.sections.map(section => {
                const sectionIntelMet = fullReveal || intel >= (section.min_intel || 0);
                
                // Determine which content to show
                let contentToShow = section.content;
                if (section.redacted_content && !sectionIntelMet) {
                    contentToShow = section.redacted_content;
                }
                
                return `
                    <div class="intel-section">
                        <h4>${section.title}</h4>
                        <p>${contentToShow}</p>
                        ${section.quote ? `
                            <div class="intel-quote">
                                "${section.quote.text}"
                                <span class="intel-quote-source">${section.quote.source}</span>
                            </div>
                        ` : ''}
                    </div>
                `;
            }).join('')}
            
            ${file.action ? renderIntelAction(file.action, intel, fullReveal) : ''}
        </div>
    `;
    
    // Handle redacted text reveals on click
    initRedactedReveals();
    
    // Handle action buttons
    initIntelActions();
}

function renderIntelAction(action, intel, fullReveal) {
    const canAccess = fullReveal || intel >= (action.min_intel || 0);
    
    if (canAccess) {
        return `
            <button class="intel-action-btn" data-action="${action.action}">
                📂 ${action.text}
            </button>
        `;
    } else {
        return `
            <button class="intel-action-btn" disabled title="Requires ${action.min_intel}% intel">
                🔒 ${action.text} (${action.min_intel}% required)
            </button>
        `;
    }
}

function initRedactedReveals() {
    const intel = getIntelLevel();
    const fullReveal = isFullReveal();
    
    document.querySelectorAll('.intel-redacted').forEach(el => {
        // If full reveal, show content immediately
        if (fullReveal) {
            el.classList.add('revealed');
            el.textContent = el.dataset.reveal;
            el.style.cursor = 'default';
        } else {
            // Allow click to reveal if intel is high enough
            el.addEventListener('click', () => {
                if (intel >= 75) {
                    el.classList.add('revealed');
                    el.textContent = el.dataset.reveal;
                }
            });
        }
    });
}

function initIntelActions() {
    document.querySelectorAll('.intel-action-btn:not([disabled])').forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.dataset.action;
            if (action === 'openHatchModal') {
                openHatchModal();
            }
        });
    });
}

function openHatchModal() {
    const modal = document.getElementById('hatch-modal');
    const body = document.getElementById('hatch-modal-body');
    
    const intel = getIntelLevel();
    const fullReveal = isFullReveal();
    
    body.innerHTML = `
        <div class="hatch-intel">
            <div class="hatch-section">
                <h4>📍 Location</h4>
                <p>The secret hatch is located behind a large portrait of Princess Peach in her private chambers within Mushroom Castle. The mechanism is concealed within the ornate frame.</p>
            </div>
            
            <div class="hatch-section">
                <h4>🔐 Access Mechanism</h4>
                <p>${fullReveal || intel >= 85
                    ? 'The hatch opens when specific pressure points on the frame are activated in sequence: <strong>upper-left crown jewel → lower-right flower → center heart</strong>. The passage leads to an underground escape route that emerges near the castle gardens.'
                    : '<span style="color: var(--classification-ts);">Access mechanism details require 85% intel clearance. Current: ' + intel + '%</span>'
                }</p>
            </div>
            
            <div class="hatch-diagram">
                <div style="font-size: 2rem; margin-bottom: 8px;">🖼️</div>
                [ARCHITECTURAL DIAGRAM PENDING RETRIEVAL]<br>
                <small>Peach Loyalist intelligence assets are working to obtain original castle blueprints.</small>
            </div>
            
            <div class="hatch-section">
                <h4>🔍 Investigative Implications</h4>
                <p>If the assassin used this passage, it would suggest:</p>
                <ul style="margin-top: 8px; padding-left: 20px; line-height: 1.8;">
                    <li>Intimate knowledge of the Princess's private security arrangements</li>
                    <li>Possible insider involvement in the assassination</li>
                    <li>The official investigation may have been deliberately misdirected</li>
                    <li>Chief Thornpaw's continued silence for 85 years raises questions</li>
                </ul>
            </div>
            
            <div class="hatch-section">
                <h4>👥 Known Individuals with Access Knowledge</h4>
                <p>
                    <strong style="color: var(--rakasha-accent);">Confirmed:</strong> Chief Thornpaw (via Princess Peach directly)<br><br>
                    <strong style="color: var(--rakasha-secondary);">Suspected:</strong> 
                    ${fullReveal || intel >= 90
                        ? 'Royal Chamberlain Toadsworth Sr. (deceased 960 BF), Head of Royal Guard Captain Silvercap (current whereabouts unknown, presumed dead), Princess Peach\'s handmaiden Lady Bloomia (missing since assassination)'
                        : '<span style="color: var(--classification-ts);">Additional names require 90% intel clearance.</span>'
                    }
                </p>
            </div>
            
            ${fullReveal ? `
                <div class="hatch-section" style="border-left-color: var(--classification-ts);">
                    <h4>⚠️ Analyst Notes (Full Access)</h4>
                    <p style="font-style: italic;">
                        Chief Thornpaw's 85-year silence on this matter is deeply troubling. Either he feared for his life, 
                        was complicit in covering up the true circumstances, or has his own reasons for only revealing 
                        this information now. His timing - at Fawful's gala, to Peach Loyalist operatives - suggests 
                        calculated political maneuvering. The question remains: why now?
                    </p>
                </div>
            ` : ''}
        </div>
    `;
    
    modal.style.display = 'flex';
}

// =============================================
// TIMELINE VIEW
// =============================================

function renderTimelineView() {
    const container = document.getElementById('rakasha-timeline');
    if (!container) return;
    
    const intel = getIntelLevel();
    const fullReveal = isFullReveal();
    
    // Filter and sort events based on intel level
    const visibleEvents = RAKASHA_DATA.timeline_events
        .filter(event => fullReveal || intel >= (event.min_intel || 0))
        .sort((a, b) => {
            // Sort by date
            if (a.date.year !== b.date.year) return a.date.year - b.date.year;
            if (a.date.monthIndex !== b.date.monthIndex) return a.date.monthIndex - b.date.monthIndex;
            return a.date.day - b.date.day;
        });
    
    // Count hidden events
    const hiddenCount = RAKASHA_DATA.timeline_events.length - visibleEvents.length;
    
    let html = '';
    
    if (hiddenCount > 0) {
        html += `
            <div class="timeline-hidden-notice" style="
                background: rgba(255, 68, 68, 0.1);
                border: 1px dashed var(--classification-ts);
                border-radius: 6px;
                padding: 12px 16px;
                margin-bottom: 20px;
                text-align: center;
                font-size: 0.9rem;
                color: var(--text-secondary);
            ">
                🔒 ${hiddenCount} event${hiddenCount > 1 ? 's' : ''} hidden due to insufficient intel clearance.
            </div>
        `;
    }
    
    html += visibleEvents.map(event => {
        const dateStr = formatEventDate(event.date);
        return `
            <div class="timeline-event ${event.major ? 'major' : ''}">
                <div class="timeline-date">${dateStr}</div>
                <div class="timeline-title">${event.title}</div>
                <p class="timeline-description">${event.description}</p>
                <span class="timeline-tag">${event.tag}</span>
            </div>
        `;
    }).join('');
    
    if (visibleEvents.length === 0) {
        html = `
            <div style="text-align: center; padding: 40px; color: var(--text-secondary);">
                <div style="font-size: 3rem; margin-bottom: 16px;">🔒</div>
                <p>No timeline events accessible at current intel level (${intel}%).</p>
                <p style="font-size: 0.85rem; margin-top: 8px;">Increase Rakasha faction intel to unlock historical records.</p>
            </div>
        `;
    }
    
    container.innerHTML = html;
}

function formatEventDate(date) {
    const months = [
        'Frostmelt', 'Seedsow', 'Bloomtide', 'Sunsheight', 
        'Highsun', 'Harvestmoon', 'Leaffall', 'Darkember'
    ];
    
    // Handle month index (0-7 for 8 months, or adjust based on your calendar)
    const monthName = months[date.monthIndex] || `Month ${date.monthIndex + 1}`;
    
    // Determine era based on year
    const era = date.year < 1000 ? 'Ancient Era' : 'Current Era';
    
    return `${monthName} ${date.day}, ${date.year} BF`;
}

// =============================================
// UTILITY FUNCTIONS
// =============================================

/**
 * Public function to refresh the display after intel changes
 * Can be called from other modules
 */
export function refreshRakashaDisplay() {
    updateIntelDisplay();
    renderCurrentView();
}

/**
 * Public function to set intel level for testing
 * Only works if not in production
 */
export function setIntelLevel(level) {
    if (state.intelLevels) {
        state.intelLevels.rakasha_clans = Math.max(0, Math.min(100, level));
        refreshRakashaDisplay();
        console.log('[Rakasha] Intel level set to:', level);
    }
}

/**
 * Get current system status
 */
export function getSystemStatus() {
    return {
        currentView,
        selectedClan,
        selectedIntelCategory,
        intelLevel: getIntelLevel(),
        debugMode: localDebugMode || state.debugMode,
        fullReveal: isFullReveal()
    };
}