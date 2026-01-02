// ==================== TABLE RENDERER ====================

function renderTable() {
    const display = document.getElementById('table-display');
    const suggested = ritual.getSuggestedAction();
    
    display.innerHTML = `
        <svg viewBox="0 0 600 600" class="w-full table-breathe">
            <defs>
                <radialGradient id="tableGradient">
                    <stop offset="0%" stop-color="#3d4a5c"/>
                    <stop offset="70%" stop-color="#2d3748"/>
                    <stop offset="100%" stop-color="#1a202c"/>
                </radialGradient>
                <radialGradient id="mirrorGradient">
                    <stop offset="0%" stop-color="#4a5568"/>
                    <stop offset="100%" stop-color="#1a202c"/>
                </radialGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
                <filter id="softGlow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            
            <!-- Floating feet beneath table -->
            ${renderFloatingFeet()}
            
            <!-- Main octagonal table surface -->
            ${renderTableSurface(suggested)}
            
            <!-- Grounding veins -->
            ${renderVeins(suggested)}
            
            <!-- Alignment circles carved into surface -->
            ${renderAlignmentCircles()}
            
            <!-- Mirror Assembly (center) -->
            ${renderMirror(suggested)}
            
            <!-- Candle Rails (left and right) -->
            ${renderCandleRails(suggested)}
            
            <!-- Ink Bowls (top) -->
            ${renderInkBowls()}
            
            <!-- Resonance Fork (top left) -->
            ${renderFork(suggested)}
            
            <!-- Bell (top right, separate stand) -->
            ${renderBell()}
            
            <!-- Governor Housing (bottom left) -->
            ${renderGovernor()}
            
            <!-- Shear Gauge (bottom right) -->
            ${renderShearGauge()}
            
            <!-- Entropy Ring Tray (bottom center) -->
            ${renderEntropyRing()}
            
            <!-- Labels -->
            ${renderLabels()}
            
            <!-- Ritual complete overlay effect -->
            ${ritual.ritualComplete ? renderCompleteEffect() : ''}
        </svg>
    `;
}

function renderFloatingFeet() {
    return [0,1,2,3,4,5,6,7].map(i => {
        const angle = (i * 45 + 22.5) * Math.PI / 180;
        const x = 300 + 175 * Math.cos(angle);
        const y = 300 + 175 * Math.sin(angle);
        return `
            <g class="floating-foot" style="animation-delay: ${i * 0.2}s">
                <ellipse cx="${x}" cy="${y + 12}" rx="12" ry="5" fill="#1a1a2e" opacity="0.5"/>
                <ellipse cx="${x}" cy="${y}" rx="15" ry="6" fill="#2d3748" stroke="#4a5568" stroke-width="1"/>
                ${ritual.veinsActive ? `
                    <ellipse cx="${x}" cy="${y}" rx="15" ry="6" fill="none" stroke="#94a3b8" stroke-width="0.5" opacity="0.3"/>
                ` : ''}
            </g>
        `;
    }).join('');
}

function renderTableSurface(suggested) {
    return `
        <g class="interactive-element" onclick="tapTable()">
            <polygon points="${[0,1,2,3,4,5,6,7].map(i => {
                const angle = (i * 45 + 22.5) * Math.PI / 180;
                return `${300 + 160 * Math.cos(angle)},${300 + 160 * Math.sin(angle)}`;
            }).join(' ')}" fill="url(#tableGradient)" stroke="#4a5568" stroke-width="3"/>
            <polygon points="${[0,1,2,3,4,5,6,7].map(i => {
                const angle = (i * 45 + 22.5) * Math.PI / 180;
                return `${300 + 155 * Math.cos(angle)},${300 + 155 * Math.sin(angle)}`;
            }).join(' ')}" fill="none" stroke="#374151" stroke-width="1"/>
            <!-- Shallow lip on each edge -->
            <polygon points="${[0,1,2,3,4,5,6,7].map(i => {
                const angle = (i * 45 + 22.5) * Math.PI / 180;
                return `${300 + 150 * Math.cos(angle)},${300 + 150 * Math.sin(angle)}`;
            }).join(' ')}" fill="none" stroke="#2d3748" stroke-width="0.5" stroke-dasharray="2 4"/>
        </g>
    `;
}

function renderVeins(suggested) {
    const isSuggested = suggested === 'veins';
    const active = ritual.veinsActive;
    const veinColor = active ? '#e2e8f0' : '#94a3b8';
    const glowClass = active ? 'vein-active' : 'vein-glow';
    
    return `
        <g class="interactive-element ${glowClass} ${isSuggested ? 'suggested' : ''}" 
           onclick="activateVeins()" style="color: ${veinColor}">
            <!-- Main crossing veins -->
            <path d="M 200 300 Q 250 280 300 300 Q 350 320 400 300" 
                fill="none" stroke="${veinColor}" stroke-width="1.5" opacity="0.6"/>
            <path d="M 300 200 Q 280 250 300 300 Q 320 350 300 400" 
                fill="none" stroke="${veinColor}" stroke-width="1.5" opacity="0.6"/>
            <path d="M 220 220 Q 260 260 300 300 Q 340 340 380 380" 
                fill="none" stroke="${veinColor}" stroke-width="1" opacity="0.5"/>
            <path d="M 380 220 Q 340 260 300 300 Q 260 340 220 380" 
                fill="none" stroke="${veinColor}" stroke-width="1" opacity="0.5"/>
            
            <!-- Branching veins -->
            <path d="M 250 250 Q 230 270 240 290" fill="none" stroke="${veinColor}" stroke-width="0.7" opacity="0.4"/>
            <path d="M 350 250 Q 370 270 360 290" fill="none" stroke="${veinColor}" stroke-width="0.7" opacity="0.4"/>
            <path d="M 250 350 Q 230 330 240 310" fill="none" stroke="${veinColor}" stroke-width="0.7" opacity="0.4"/>
            <path d="M 350 350 Q 370 330 360 310" fill="none" stroke="${veinColor}" stroke-width="0.7" opacity="0.4"/>
            
            ${active ? `
                <circle cx="300" cy="300" r="20" fill="none" stroke="#e2e8f0" stroke-width="0.5" opacity="0.4">
                    <animate attributeName="r" values="20;80;20" dur="3s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite"/>
                </circle>
            ` : ''}
        </g>
    `;
}

function renderAlignmentCircles() {
    return `
        <g opacity="0.3">
            <circle cx="300" cy="300" r="120" fill="none" stroke="#4a5568" stroke-width="0.5" stroke-dasharray="3 5"/>
            <circle cx="300" cy="300" r="90" fill="none" stroke="#4a5568" stroke-width="0.5" stroke-dasharray="2 4"/>
            <circle cx="300" cy="300" r="60" fill="none" stroke="#4a5568" stroke-width="0.5" stroke-dasharray="1 3"/>
            <!-- Tick marks -->
            ${[0,45,90,135,180,225,270,315].map(angle => {
                const rad = angle * Math.PI / 180;
                const x1 = 300 + 115 * Math.cos(rad);
                const y1 = 300 + 115 * Math.sin(rad);
                const x2 = 300 + 125 * Math.cos(rad);
                const y2 = 300 + 125 * Math.sin(rad);
                return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#4a5568" stroke-width="0.5"/>`;
            }).join('')}
        </g>
    `;
}

function renderMirror(suggested) {
    const isSuggested = suggested === 'mirror';
    const filaments = ritual.filamentsActive;
    const awakened = ritual.mirrorAwakened;
    
    return `
        <g class="interactive-element ${isSuggested ? 'suggested' : ''}" onclick="tapMirror()" style="color: #8b5cf6">
            <!-- Blackened silver frame -->
            <rect x="248" y="258" width="104" height="84" rx="4" fill="#1a1a2e" stroke="#374151" stroke-width="2"/>
            <rect x="250" y="260" width="100" height="80" rx="3" fill="url(#mirrorGradient)" stroke="#1a1a2e" stroke-width="3"/>
            
            <!-- Cloudy glass surface -->
            <rect x="255" y="265" width="90" height="70" rx="2" fill="#0a0a0f" opacity="${awakened ? '0.6' : '0.85'}"/>
            
            <!-- Reference filaments along inner edge -->
            ${[0,1,2,3,4].map(i => `
                <line x1="${258 + i * 20}" y1="268" x2="${258 + i * 20}" y2="332" 
                    stroke="${filaments ? '#8b5cf6' : '#374151'}" stroke-width="0.5"
                    class="${filaments ? 'filament-glow' : ''}" style="animation-delay: ${i * 0.3}s"
                    ${filaments ? 'filter="url(#softGlow)"' : ''}/>
            `).join('')}
            ${[0,1,2].map(i => `
                <line x1="258" y1="${275 + i * 18}" x2="342" y2="${275 + i * 18}" 
                    stroke="${filaments ? '#06b6d4' : '#374151'}" stroke-width="0.3"
                    class="${filaments ? 'filament-glow' : ''}" style="animation-delay: ${i * 0.5}s"
                    ${filaments ? 'filter="url(#softGlow)"' : ''}/>
            `).join('')}
            
            ${awakened ? `
                <!-- Mirror interface active -->
                <ellipse cx="300" cy="300" rx="35" ry="25" fill="#8b5cf6" opacity="0.25" filter="url(#glow)">
                    <animate attributeName="opacity" values="0.15;0.35;0.15" dur="2s" repeatCount="indefinite"/>
                </ellipse>
                <text x="300" y="303" fill="#8b5cf6" font-size="8" text-anchor="middle" opacity="0.8" class="title-font">INTERFACE</text>
                
                <!-- Delayed reflection effect -->
                <rect x="275" y="280" width="50" height="35" fill="none" stroke="#8b5cf6" stroke-width="0.5" opacity="0.3">
                    <animate attributeName="opacity" values="0.3;0.1;0.3" dur="3s" repeatCount="indefinite"/>
                </rect>
            ` : ''}
            
            ${!filaments && !awakened ? `
                <text x="300" y="303" fill="#4a5568" font-size="7" text-anchor="middle" font-style="italic">bored</text>
            ` : ''}
        </g>
    `;
}

function renderCandleRails(suggested) {
    const isSuggested = suggested === 'candles';
    const acceptable = ritual.getAcceptableCandles();
    
    // Right rail (candles 7-12)
    const rightRail = `
        <g>
            <rect x="420" y="220" width="28" height="160" rx="3" fill="#374151" stroke="#4a5568" stroke-width="1"/>
            ${[0,1,2,3,4,5].map(i => {
                const y = 230 + i * 24;
                const candleNum = 12 - i; // 12, 11, 10, 9, 8, 7
                const isLit = ritual.candlesLit.includes(candleNum);
                const isAcceptable = acceptable.includes(candleNum);
                const shouldPulse = isSuggested && isAcceptable && !isLit;
                
                return `
                    <g class="interactive-element ${shouldPulse ? 'suggested' : ''}" 
                       onclick="lightCandle(${candleNum})" style="color: #fbbf24">
                        <!-- Ceramic collar -->
                        <rect x="424" y="${y}" width="18" height="18" rx="2" 
                            fill="${isLit ? '#78350f' : '#1f2937'}" stroke="#4a5568"/>
                        
                        ${isLit ? `
                            <!-- Lit candle with flame -->
                            <rect x="429" y="${y + 4}" width="8" height="10" fill="#f5f5dc" rx="1"/>
                            <ellipse cx="433" cy="${y - 2}" rx="5" ry="8" fill="#fbbf24" class="candle-flame" filter="url(#glow)"/>
                            <ellipse cx="433" cy="${y - 4}" rx="3" ry="5" fill="#fef3c7"/>
                        ` : `
                            <!-- Unlit candle stub -->
                            <rect x="429" y="${y + 4}" width="8" height="10" fill="#f5f5dc" rx="1"/>
                            <line x1="433" y1="${y + 2}" x2="433" y2="${y + 5}" stroke="#1f2937" stroke-width="1"/>
                        `}
                        
                        <!-- Number etching -->
                        <text x="450" y="${y + 13}" fill="${isAcceptable && !isLit ? '#fbbf24' : '#6b7280'}" 
                            font-size="9" class="notebook-font">${candleNum}</text>
                        
                        <!-- Copper tongue between candles -->
                        ${i < 5 ? `
                            <rect x="430" y="${y + 20}" width="6" height="3" fill="#b45309" opacity="0.6"/>
                        ` : ''}
                    </g>
                `;
            }).join('')}
        </g>
    `;
    
    // Left rail (candles 1-6)
    const leftRail = `
        <g>
            <rect x="152" y="220" width="28" height="160" rx="3" fill="#374151" stroke="#4a5568" stroke-width="1"/>
            ${[0,1,2,3,4,5].map(i => {
                const y = 230 + i * 24;
                const candleNum = i + 1; // 1, 2, 3, 4, 5, 6
                const isLit = ritual.candlesLit.includes(candleNum);
                const isAcceptable = acceptable.includes(candleNum);
                const shouldPulse = isSuggested && isAcceptable && !isLit;
                
                return `
                    <g class="interactive-element ${shouldPulse ? 'suggested' : ''}" 
                       onclick="lightCandle(${candleNum})" style="color: #fbbf24">
                        <!-- Ceramic collar -->
                        <rect x="158" y="${y}" width="18" height="18" rx="2" 
                            fill="${isLit ? '#78350f' : '#1f2937'}" stroke="#4a5568"/>
                        
                        ${isLit ? `
                            <!-- Lit candle with flame -->
                            <rect x="163" y="${y + 4}" width="8" height="10" fill="#f5f5dc" rx="1"/>
                            <ellipse cx="167" cy="${y - 2}" rx="5" ry="8" fill="#fbbf24" class="candle-flame" filter="url(#glow)"/>
                            <ellipse cx="167" cy="${y - 4}" rx="3" ry="5" fill="#fef3c7"/>
                        ` : `
                            <!-- Unlit candle stub -->
                            <rect x="163" y="${y + 4}" width="8" height="10" fill="#f5f5dc" rx="1"/>
                            <line x1="167" y1="${y + 2}" x2="167" y2="${y + 5}" stroke="#1f2937" stroke-width="1"/>
                        `}
                        
                        <!-- Number etching -->
                        <text x="142" y="${y + 13}" fill="${isAcceptable && !isLit ? '#fbbf24' : '#6b7280'}" 
                            font-size="9" text-anchor="end" class="notebook-font">${candleNum}</text>
                        
                        <!-- Copper tongue between candles -->
                        ${i < 5 ? `
                            <rect x="164" y="${y + 20}" width="6" height="3" fill="#b45309" opacity="0.6"/>
                        ` : ''}
                    </g>
                `;
            }).join('')}
        </g>
    `;
    
    return rightRail + leftRail;
}

function renderInkBowls() {
    return `
        <g>
            ${[[265, 175], [300, 160], [335, 175]].map(([x, y], i) => `
                <g class="interactive-element" onclick="tapInkBowl()" style="color: #06b6d4">
                    <!-- Bowl -->
                    <ellipse cx="${x}" cy="${y}" rx="20" ry="9" fill="#1a1a2e" stroke="#374151"/>
                    
                    <!-- Ink surface (never still) -->
                    <ellipse cx="${x}" cy="${y - 2}" rx="17" ry="7" fill="#0a0a0f">
                        <animate attributeName="ry" values="7;6;7.5;6.5;7" dur="${2.5 + i * 0.7}s" repeatCount="indefinite"/>
                    </ellipse>
                    
                    <!-- Ripple effect -->
                    <ellipse cx="${x}" cy="${y - 2}" rx="8" ry="3" fill="none" stroke="#374151" stroke-width="0.5" opacity="0.5">
                        <animate attributeName="rx" values="5;15;5" dur="${3 + i * 0.5}s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" values="0.5;0;0.5" dur="${3 + i * 0.5}s" repeatCount="indefinite"/>
                    </ellipse>
                    
                    <!-- Lens assembly above -->
                    <line x1="${x}" y1="${y - 12}" x2="${x}" y2="${y - 25}" stroke="#b45309" stroke-width="2"/>
                    <circle cx="${x}" cy="${y - 28}" r="6" fill="#1f2937" stroke="#92400e" stroke-width="2"/>
                    <circle cx="${x}" cy="${y - 28}" r="3" fill="#374151"/>
                    <circle cx="${x}" cy="${y - 28}" r="1.5" fill="#0a0a0f"/>
                </g>
            `).join('')}
        </g>
    `;
}

function renderFork(suggested) {
    const isSuggested = suggested === 'fork';
    const resonating = ritual.forkResonating;
    const struck = ritual.forkStruck;
    
    return `
        <g class="interactive-element ${isSuggested ? 'suggested' : ''}" onclick="strikeFork()" style="color: #8b5cf6">
            <!-- Felt base -->
            <rect x="125" y="150" width="50" height="20" fill="#4a3728" rx="3"/>
            
            <!-- Fork handle -->
            <rect x="145" y="155" width="10" height="12" fill="#6b7280" rx="1"/>
            
            <!-- Twin prongs -->
            <rect x="140" y="130" width="6" height="28" fill="#9ca3af" rx="1"/>
            <rect x="154" y="130" width="6" height="28" fill="#9ca3af" rx="1"/>
            
            <!-- Matching scars on prongs -->
            <line x1="141" y1="135" x2="145" y2="140" stroke="#4a5568" stroke-width="1"/>
            <line x1="155" y1="135" x2="159" y2="140" stroke="#4a5568" stroke-width="1"/>
            
            ${resonating ? `
                <!-- Resonance waves -->
                <ellipse cx="150" cy="140" rx="20" ry="8" fill="none" stroke="#8b5cf6" stroke-width="1" opacity="0.6" filter="url(#softGlow)">
                    <animate attributeName="rx" values="20;40;20" dur="0.3s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.6;0;0.6" dur="0.3s" repeatCount="indefinite"/>
                </ellipse>
            ` : ''}
            
            ${struck ? `
                <circle cx="150" cy="175" r="4" fill="#22c55e"/>
                <text x="150" y="190" fill="#22c55e" font-size="7" text-anchor="middle">VERIFIED</text>
            ` : `
                <text x="150" y="185" fill="#6b7280" font-size="7" text-anchor="middle">FORK</text>
            `}
        </g>
    `;
}

function renderBell() {
    const dangerous = ritual.bellRings >= 2;
    
    return `
        <g class="interactive-element" onclick="ringBell()" style="color: #f97316">
            <!-- Pale wood stand (separate from table) -->
            <rect x="455" y="115" width="10" height="70" fill="#d4a574" rx="2"/>
            <rect x="443" y="180" width="34" height="8" fill="#d4a574" rx="2"/>
            
            <!-- Bell (dull, unadorned) -->
            <g style="transform-origin: 460px 115px; ${ritual.bellRings > 0 ? 'animation: bellSwing 0.5s ease-in-out' : ''}">
                <path d="M 445 150 Q 445 130 460 125 Q 475 130 475 150 L 477 156 Q 477 162 460 162 Q 443 162 443 156 Z" 
                    fill="#78716c" stroke="#57534e" stroke-width="1"/>
                <ellipse cx="460" cy="160" rx="16" ry="4" fill="#57534e"/>
                
                <!-- Clapper -->
                <line x1="460" y1="145" x2="460" y2="158" stroke="#1f2937" stroke-width="2"/>
                <circle cx="460" cy="156" r="4" fill="#374151"/>
            </g>
            
            ${ritual.bellRings > 0 ? `
                <!-- Sound waves -->
                <circle cx="460" cy="145" r="25" fill="none" stroke="${dangerous ? '#ef4444' : '#f97316'}" stroke-width="1" opacity="0.4">
                    <animate attributeName="r" values="25;50;25" dur="1.5s" repeatCount="3"/>
                    <animate attributeName="opacity" values="0.4;0;0.4" dur="1.5s" repeatCount="3"/>
                </circle>
            ` : ''}
            
            <text x="460" y="${ritual.bellRings > 0 ? '200' : '195'}" 
                fill="${dangerous ? '#ef4444' : '#6b7280'}" font-size="8" text-anchor="middle">
                ${ritual.bellRings > 0 ? `BELL ×${ritual.bellRings}` : 'BELL'}
            </text>
            ${dangerous ? `<text x="460" y="210" fill="#ef4444" font-size="6" text-anchor="middle">LIMIT</text>` : ''}
        </g>
    `;
}

function renderGovernor() {
    return `
        <g>
            <!-- Iron block -->
            <rect x="115" y="380" width="90" height="60" fill="#1f2937" stroke="#4a5568" stroke-width="2" rx="3"
                class="interactive-element" onclick="showLore(lore.governor.title, lore.governor.content)"/>
            
            <!-- Vent slats -->
            ${[0,1,2,3,4].map(i => `
                <line x1="120" y1="${388 + i * 10}" x2="142" y2="${388 + i * 10}" stroke="#0a0a0f" stroke-width="2"/>
            `).join('')}
            
            <!-- Toggle switches -->
            ${[['line', 155, '─'], ['dot', 175, '•'], ['cross', 195, '✕']].map(([type, x, symbol]) => `
                <g class="interactive-element" onclick="toggleGovernor('${type}')" style="color: #ef4444">
                    <rect x="${x}" y="390" width="14" height="28" 
                        fill="${ritual.governorToggles[type] ? '#ef4444' : '#374151'}" 
                        stroke="#4a5568" rx="2" 
                        ${ritual.governorToggles[type] ? 'filter="url(#softGlow)"' : ''}/>
                    <rect x="${x + 3}" y="${ritual.governorToggles[type] ? 393 : 408}" 
                        width="8" height="8" fill="#6b7280" rx="1"/>
                </g>
            `).join('')}
            
            <!-- Labels -->
            <text x="155" y="432" fill="#6b7280" font-size="7">─</text>
            <text x="175" y="432" fill="#6b7280" font-size="7">•</text>
            <text x="195" y="432" fill="#6b7280" font-size="7">✕</text>
            <text x="160" y="450" fill="#4a5568" font-size="7" text-anchor="middle">GOVERNOR</text>
        </g>
    `;
}

function renderShearGauge() {
    const critical = ritual.shearLevel > 0.7;
    
    return `
        <g class="interactive-element" onclick="checkShear()" style="color: ${critical ? '#ef4444' : '#8b5cf6'}">
            <!-- Glass cylinder housing -->
            <rect x="395" y="380" width="70" height="80" fill="#1f2937" stroke="#4a5568" rx="3"/>
            <rect x="405" y="390" width="50" height="50" fill="#0a0a0f" stroke="#374151" rx="2"/>
            
            <!-- Floating rings inside (rotating out of sync) -->
            <g style="transform-origin: 430px 415px">
                <circle cx="430" cy="415" r="20" fill="none" 
                    stroke="${critical ? '#ef4444' : '#8b5cf6'}" stroke-width="1.5" 
                    class="shear-ring" ${critical ? 'filter="url(#glow)"' : ''}/>
                <circle cx="430" cy="415" r="14" fill="none" 
                    stroke="${ritual.shearLevel > 0.5 ? '#f97316' : '#06b6d4'}" stroke-width="1" 
                    class="shear-ring-reverse"/>
                <circle cx="430" cy="415" r="8" fill="none" 
                    stroke="#fbbf24" stroke-width="0.5" 
                    class="shear-ring-slow"/>
                    
                ${critical ? `
                    <!-- Warning pulse -->
                    <circle cx="430" cy="415" r="22" fill="none" stroke="#ef4444" stroke-width="2" opacity="0.5">
                        <animate attributeName="opacity" values="0.5;0;0.5" dur="0.5s" repeatCount="indefinite"/>
                    </circle>
                ` : ''}
            </g>
            
            <!-- Reading -->
            <text x="430" y="455" fill="${critical ? '#ef4444' : '#6b7280'}" font-size="10" text-anchor="middle" class="notebook-font">
                ${(ritual.shearLevel * 100).toFixed(0)}%
            </text>
            <text x="430" y="468" fill="#4a5568" font-size="7" text-anchor="middle">SHEAR</text>
        </g>
    `;
}

function renderEntropyRing() {
    const dangerous = ritual.entropyLevel > 70;
    
    return `
        <g class="interactive-element" onclick="chargeRing()" style="color: ${dangerous ? '#ef4444' : '#fbbf24'}">
            <!-- Lead-lined tray -->
            <rect x="260" y="410" width="80" height="50" fill="#374151" stroke="#4a5568" rx="2"/>
            <rect x="265" y="415" width="70" height="35" fill="#1f2937" stroke="#4a5568"/>
            
            <!-- Ring with spiral lattice -->
            <ellipse cx="300" cy="432" rx="22" ry="10" fill="none" stroke="#d97706" stroke-width="4"/>
            <ellipse cx="300" cy="432" rx="16" ry="7" fill="none" stroke="#fbbf24" stroke-width="1" opacity="0.6"/>
            <ellipse cx="300" cy="432" rx="10" ry="4" fill="none" stroke="#92400e" stroke-width="0.5" opacity="0.4"/>
            
            <!-- Probability sink visualization -->
            ${dangerous ? `
                <ellipse cx="300" cy="432" rx="25" ry="12" fill="none" stroke="#ef4444" stroke-width="1" opacity="0.5">
                    <animate attributeName="rx" values="25;28;25" dur="0.3s" repeatCount="indefinite"/>
                </ellipse>
            ` : ''}
            
            <!-- Fill indicator bar -->
            <rect x="265" y="452" width="${70 * (ritual.entropyLevel / 100)}" height="4" 
                fill="${dangerous ? '#ef4444' : '#8b5cf6'}" 
                ${dangerous ? 'filter="url(#softGlow)"' : ''}/>
            <rect x="265" y="452" width="70" height="4" fill="none" stroke="#4a5568" stroke-width="0.5"/>
            
            <text x="300" y="475" fill="${dangerous ? '#ef4444' : '#6b7280'}" font-size="8" text-anchor="middle">
                ENTROPY ${ritual.entropyLevel}%
            </text>
        </g>
    `;
}

function renderLabels() {
    return `
        <text x="300" y="35" fill="#8b5cf6" font-size="11" text-anchor="middle" class="title-font">OBSERVATIONAL ARRAY</text>
        <text x="300" y="555" fill="#6b7280" font-size="11" text-anchor="middle" class="title-font">TRI-AXIAL CONVERGENCE ENGINE</text>
        <text x="300" y="575" fill="#4a5568" font-size="9" text-anchor="middle" font-style="italic">Applied Metaphysics Division</text>
    `;
}

function renderCompleteEffect() {
    return `
        <circle cx="300" cy="300" r="140" fill="none" stroke="#22c55e" stroke-width="2" opacity="0.5" filter="url(#glow)">
            <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2s" repeatCount="indefinite"/>
        </circle>
        <circle cx="300" cy="300" r="100" fill="none" stroke="#8b5cf6" stroke-width="1" opacity="0.3">
            <animate attributeName="r" values="100;120;100" dur="3s" repeatCount="indefinite"/>
        </circle>
    `;
}
