// Iron Legion Dossier Page Controller

import { IRON_LEGION_DATA, LEGION_QUOTES, THREAT_ASSESSMENT } from './iron-legion-data.js';

class IronLegionDossier {
    constructor() {
        this.container = document.getElementById('legion-container');
        this.currentQuoteIndex = 0;
    }

    init() {
        this.render();
        this.setupEventListeners();
        this.startQuoteRotation();
    }

    render() {
        this.container.innerHTML = `
            <div class="legion-grid">
                ${this.renderOverviewPanel()}
                ${this.renderQuotePanel()}
                ${this.renderLeadershipPanel()}
                ${this.renderSubsidiaryPanel()}
                ${this.renderDoctrinePanel()}
                ${this.renderIdeologyPanel()}
                ${this.renderRecruitmentPanel()}
                ${this.renderOperationsPanel()}
                ${this.renderAssetsPanel()}
                ${this.renderPersonnelPanel()}
                ${this.renderVulnerabilitiesPanel()}
                ${this.renderRelationshipsPanel()}
                ${this.renderThreatAssessmentPanel()}
            </div>
        `;
    }

    renderOverviewPanel() {
        const data = IRON_LEGION_DATA.overview;
        return `
            <section class="legion-panel overview-panel">
                <h3 class="panel-title"><span class="icon">📋</span> Strategic Overview</h3>
                <div class="overview-grid">
                    <div class="overview-item">
                        <span class="label">Official Name</span>
                        <span class="value">${data.name}</span>
                    </div>
                    <div class="overview-item">
                        <span class="label">Known Aliases</span>
                        <span class="value">${data.alias.join(', ')}</span>
                    </div>
                    <div class="overview-item">
                        <span class="label">Founded</span>
                        <span class="value">${data.founded} BF</span>
                    </div>
                    <div class="overview-item">
                        <span class="label">Origin</span>
                        <span class="value">${data.foundedEvent}</span>
                    </div>
                    <div class="overview-item">
                        <span class="label">Headquarters</span>
                        <span class="value">${data.headquarters}</span>
                    </div>
                    <div class="overview-item">
                        <span class="label">Strength</span>
                        <span class="value strength-highlight">${data.estimatedStrength}</span>
                    </div>
                    <div class="overview-item">
                        <span class="label">Political Status</span>
                        <span class="value">${data.politicalStatus}</span>
                    </div>
                    <div class="overview-item full-width">
                        <span class="label">Current Objective</span>
                        <span class="value objective-text">${data.currentObjective}</span>
                    </div>
                </div>
            </section>
        `;
    }

    renderQuotePanel() {
        return `
            <section class="legion-panel quote-panel">
                <div class="quote-container">
                    <div class="quote-icon">⚔️</div>
                    <blockquote id="rotating-quote" class="legion-quote">
                        "${LEGION_QUOTES[0].text}"
                    </blockquote>
                    <cite id="quote-source" class="quote-source">— ${LEGION_QUOTES[0].source}</cite>
                </div>
            </section>
        `;
    }

    renderLeadershipPanel() {
        const data = IRON_LEGION_DATA.leadership;
        return `
            <section class="legion-panel leadership-panel">
                <h3 class="panel-title"><span class="icon">👑</span> ${data.title}</h3>
                
                <div class="supreme-command">
                    <div class="commander-card supreme">
                        <div class="rank-badge">${data.supremeCommand.rank}</div>
                        <div class="commander-name">${data.supremeCommand.name}</div>
                        <p class="commander-desc">${data.supremeCommand.description}</p>
                        <div class="status-tag active">${data.supremeCommand.status}</div>
                    </div>
                </div>

                <div class="council-section">
                    <h4 class="subsection-title">Council of Hammers</h4>
                    <p class="subsection-desc">${data.councilOfHammers.description}</p>
                    <div class="council-grid">
                        ${data.councilOfHammers.members.map(m => `
                            <div class="council-member">
                                <span class="member-name">${m.name}</span>
                                <span class="member-portfolio">${m.portfolio}</span>
                                <span class="member-notes">${m.notes}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="ranks-section">
                    <h4 class="subsection-title">Field Ranks</h4>
                    <table class="ranks-table">
                        <thead>
                            <tr>
                                <th>Rank</th>
                                <th>Count</th>
                                <th>Command</th>
                                <th>Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${data.fieldRanks.map(r => `
                                <tr>
                                    <td class="rank-name">${r.rank}</td>
                                    <td>${r.count}</td>
                                    <td>${r.command}</td>
                                    <td>${r.description}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </section>
        `;
    }

    renderSubsidiaryPanel() {
        const data = IRON_LEGION_DATA.subsidiaryForces;
        return `
            <section class="legion-panel subsidiary-panel">
                <h3 class="panel-title"><span class="icon">🔱</span> ${data.title}</h3>
                <div class="units-grid">
                    ${data.units.map(unit => `
                        <div class="unit-card ${unit.name === 'Iron Crown Brigade' ? 'primary-unit' : ''}">
                            <div class="unit-header">
                                <h4 class="unit-name">${unit.name}</h4>
                                <span class="unit-status ${unit.status.includes('ACTIVE') ? 'active' : ''}">${unit.status}</span>
                            </div>
                            <div class="unit-details">
                                <div class="detail-row">
                                    <span class="label">Commander:</span>
                                    <span class="value">${unit.commander}</span>
                                </div>
                                <div class="detail-row">
                                    <span class="label">Strength:</span>
                                    <span class="value">${unit.strength}</span>
                                </div>
                                <div class="detail-row">
                                    <span class="label">Location:</span>
                                    <span class="value">${unit.location}</span>
                                </div>
                                <div class="detail-row">
                                    <span class="label">Mission:</span>
                                    <span class="value">${unit.mission}</span>
                                </div>
                            </div>
                            <p class="unit-description">${unit.description}</p>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }

    renderDoctrinePanel() {
        const data = IRON_LEGION_DATA.doctrineAndTactics;
        return `
            <section class="legion-panel doctrine-panel">
                <h3 class="panel-title"><span class="icon">⚔️</span> ${data.title}</h3>
                <p class="philosophy-quote">"${data.corePhilosophy}"</p>
                
                <div class="tactics-container">
                    <div class="tactics-column">
                        <h4 class="subsection-title">Conventional Tactics</h4>
                        ${data.tacticalPrinciples.map(t => `
                            <div class="tactic-card">
                                <h5 class="tactic-name">${t.name}</h5>
                                <p class="tactic-desc">${t.description}</p>
                            </div>
                        `).join('')}
                    </div>
                    <div class="tactics-column">
                        <h4 class="subsection-title">Covert Operations</h4>
                        ${data.covertTactics.map(t => `
                            <div class="tactic-card covert">
                                <h5 class="tactic-name">${t.name}</h5>
                                <p class="tactic-desc">${t.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    renderIdeologyPanel() {
        const data = IRON_LEGION_DATA.ideology;
        return `
            <section class="legion-panel ideology-panel">
                <h3 class="panel-title"><span class="icon">📜</span> ${data.title}</h3>
                <p class="ideology-intro">${data.description}</p>
                
                <div class="tenets-grid">
                    ${data.tenets.map(t => `
                        <div class="tenet-card">
                            <div class="tenet-number">${t.number}</div>
                            <div class="tenet-content">
                                <h5 class="tenet-title">${t.tenet}</h5>
                                <p class="tenet-meaning">${t.meaning}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="rituals-section">
                    <h4 class="subsection-title">Rituals & Enforcement</h4>
                    <div class="rituals-grid">
                        ${data.rituals.map(r => `
                            <div class="ritual-card">
                                <span class="ritual-name">${r.name}</span>
                                <span class="ritual-desc">${r.description}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    }

    renderRecruitmentPanel() {
        const data = IRON_LEGION_DATA.recruitment;
        return `
            <section class="legion-panel recruitment-panel">
                <h3 class="panel-title"><span class="icon">🎯</span> ${data.title}</h3>
                
                <div class="recruitment-columns">
                    <div class="recruitment-program">
                        <h4 class="program-title">${data.midlandsProgram.name}</h4>
                        <span class="program-location">Midlands Operations</span>
                        <p class="program-desc">${data.midlandsProgram.description}</p>
                        <div class="process-list">
                            <h5>Recruitment Process:</h5>
                            <ol>
                                ${data.midlandsProgram.process.map(step => `<li>${step}</li>`).join('')}
                            </ol>
                        </div>
                        <div class="washout-stat">
                            <span class="label">Washout Rate:</span>
                            <span class="value">${data.midlandsProgram.washoutRate}</span>
                        </div>
                    </div>

                    <div class="recruitment-program covert">
                        <h4 class="program-title">${data.kingdomProgram.name}</h4>
                        <span class="program-location">Mushroom Kingdom Operations</span>
                        <p class="program-desc">${data.kingdomProgram.description}</p>
                        <div class="process-list">
                            <h5>Recruitment Process:</h5>
                            <ol>
                                ${data.kingdomProgram.process.map(step => `<li>${step}</li>`).join('')}
                            </ol>
                        </div>
                        <div class="zones-list">
                            <span class="label">Active Zones:</span>
                            <ul>
                                ${data.kingdomProgram.activeRecruitmentZones.map(z => `<li>${z}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderOperationsPanel() {
        const data = IRON_LEGION_DATA.recentOperations;
        return `
            <section class="legion-panel operations-panel">
                <h3 class="panel-title"><span class="icon">📍</span> ${data.title}</h3>
                <div class="operations-timeline">
                    ${data.operations.map(op => `
                        <div class="operation-card ${op.outcome.includes('SUCCESS') ? 'success' : op.outcome.includes('Failure') ? 'failure' : 'partial'}">
                            <div class="op-header">
                                <span class="op-date">${op.date}</span>
                                <span class="op-codename">${op.codename}</span>
                            </div>
                            <p class="op-description">${op.description}</p>
                            <div class="op-outcome">
                                <span class="label">Outcome:</span>
                                <span class="value">${op.outcome}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }

    renderAssetsPanel() {
        const data = IRON_LEGION_DATA.assets;
        return `
            <section class="legion-panel assets-panel">
                <h3 class="panel-title"><span class="icon">🏛️</span> ${data.title}</h3>
                
                <div class="assets-grid">
                    <div class="asset-category">
                        <h4 class="category-title">Military Assets</h4>
                        <table class="assets-table">
                            ${data.military.map(a => `
                                <tr>
                                    <td class="asset-type">${a.type}</td>
                                    <td class="asset-qty">${a.quantity}</td>
                                    <td class="asset-notes">${a.notes}</td>
                                </tr>
                            `).join('')}
                        </table>
                    </div>

                    <div class="asset-category">
                        <h4 class="category-title">Intelligence Assets</h4>
                        <table class="assets-table">
                            ${data.intelligence.map(a => `
                                <tr>
                                    <td class="asset-type">${a.type}</td>
                                    <td class="asset-qty">${a.quantity}</td>
                                    <td class="asset-notes">${a.notes}</td>
                                </tr>
                            `).join('')}
                        </table>
                    </div>

                    <div class="asset-category">
                        <h4 class="category-title">Political Assets</h4>
                        <table class="assets-table">
                            ${data.political.map(a => `
                                <tr>
                                    <td class="asset-type">${a.type}</td>
                                    <td class="asset-qty">${a.quantity}</td>
                                    <td class="asset-notes">${a.notes}</td>
                                </tr>
                            `).join('')}
                        </table>
                    </div>
                </div>
            </section>
        `;
    }

    renderPersonnelPanel() {
        const data = IRON_LEGION_DATA.knownPersonnel;
        return `
            <section class="legion-panel personnel-panel">
                <h3 class="panel-title"><span class="icon">👤</span> ${data.title}</h3>
                <div class="personnel-grid">
                    ${data.operatives.map(op => `
                        <div class="operative-card threat-${op.threatLevel.toLowerCase()}">
                            <div class="operative-header">
                                <span class="operative-name">${op.name}</span>
                                <span class="threat-badge ${op.threatLevel.toLowerCase()}">${op.threatLevel}</span>
                            </div>
                            <span class="operative-role">${op.role}</span>
                            <p class="operative-desc">${op.description}</p>
                            <div class="operative-status">
                                <span class="label">Status:</span>
                                <span class="value">${op.status}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }

    renderVulnerabilitiesPanel() {
        const data = IRON_LEGION_DATA.vulnerabilities;
        return `
            <section class="legion-panel vulnerabilities-panel">
                <h3 class="panel-title"><span class="icon">🎯</span> ${data.title}</h3>
                <div class="vulnerabilities-grid">
                    ${data.weaknesses.map(w => `
                        <div class="vulnerability-card exploit-${w.exploitability.toLowerCase().replace(' ', '-')}">
                            <div class="vuln-header">
                                <span class="vuln-category">${w.category}</span>
                                <span class="exploit-badge">${w.exploitability} Exploitability</span>
                            </div>
                            <p class="vuln-description">${w.description}</p>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }

    renderRelationshipsPanel() {
        const data = IRON_LEGION_DATA.relationships;
        return `
            <section class="legion-panel relationships-panel">
                <h3 class="panel-title"><span class="icon">🤝</span> ${data.title}</h3>
                <div class="relationships-grid">
                    ${data.factions.map(f => `
                        <div class="faction-relation status-${f.status.toLowerCase().replace(/[^a-z]/g, '')}">
                            <div class="faction-header">
                                <span class="faction-name">${f.name}</span>
                                <span class="status-badge">${f.status}</span>
                            </div>
                            <p class="faction-desc">${f.description}</p>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    }

    renderThreatAssessmentPanel() {
        return `
            <section class="legion-panel threat-panel">
                <h3 class="panel-title"><span class="icon">⚠️</span> Final Threat Assessment</h3>
                
                <div class="threat-metrics">
                    <div class="metric">
                        <span class="metric-label">Overall Threat</span>
                        <span class="metric-value ${THREAT_ASSESSMENT.overall.toLowerCase()}">${THREAT_ASSESSMENT.overall}</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Military</span>
                        <span class="metric-value ${THREAT_ASSESSMENT.military.toLowerCase()}">${THREAT_ASSESSMENT.military}</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Political</span>
                        <span class="metric-value ${THREAT_ASSESSMENT.political.toLowerCase()}">${THREAT_ASSESSMENT.political}</span>
                    </div>
                    <div class="metric">
                        <span class="metric-label">Intelligence</span>
                        <span class="metric-value ${THREAT_ASSESSMENT.intelligence.toLowerCase()}">${THREAT_ASSESSMENT.intelligence}</span>
                    </div>
                </div>

                <div class="assessment-columns">
                    <div class="immediate-threats">
                        <h4>Immediate Threats</h4>
                        <ul>
                            ${THREAT_ASSESSMENT.immediateThreats.map(t => `<li class="threat-item">${t}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="recommended-actions">
                        <h4>Recommended Actions</h4>
                        <ul>
                            ${THREAT_ASSESSMENT.recommendedActions.map(a => `<li class="action-item">${a}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </section>
        `;
    }

    setupEventListeners() {
        // Collapsible panels
        this.container.querySelectorAll('.panel-title').forEach(title => {
            title.addEventListener('click', (e) => {
                const panel = e.target.closest('.legion-panel');
                panel.classList.toggle('collapsed');
            });
        });
    }

    startQuoteRotation() {
        setInterval(() => {
            this.currentQuoteIndex = (this.currentQuoteIndex + 1) % LEGION_QUOTES.length;
            const quote = LEGION_QUOTES[this.currentQuoteIndex];
            const quoteEl = document.getElementById('rotating-quote');
            const sourceEl = document.getElementById('quote-source');
            
            if (quoteEl && sourceEl) {
                quoteEl.style.opacity = 0;
                sourceEl.style.opacity = 0;
                
                setTimeout(() => {
                    quoteEl.textContent = `"${quote.text}"`;
                    sourceEl.textContent = `— ${quote.source}`;
                    quoteEl.style.opacity = 1;
                    sourceEl.style.opacity = 1;
                }, 300);
            }
        }, 8000);
    }
}

// Initialize on DOM ready or immediately if already loaded
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    const dossier = new IronLegionDossier();
    dossier.init();
} else {
    document.addEventListener('DOMContentLoaded', () => {
        const dossier = new IronLegionDossier();
        dossier.init();
    });
}