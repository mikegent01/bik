// ===== BATTLE ENGINE - COMPLETE REWRITE WITH SMART AI =====

class BattleEngine {
    constructor(gameState) {
        this.state = gameState;
        this.logs = [];
        this.effects = [];
        this.projectiles = [];
        this.camps = [];
        this.bridges = [];
        this.tents = [];
        this.occupiedPositions = new Map();
        
        // NEW FEATURE 1: Weather System
        this.weather = this.randomWeather();
        this.weatherDuration = 10 + Math.floor(Math.random() * 15);
        
        // Army-wide stats
        this.armyStats = {
            A: { supply: 100, morale: 100, phase: 'attack', buildPoints: 0, resources: 50 },
            B: { supply: 100, morale: 100, phase: 'defend', buildPoints: 0, resources: 50 }
        };
        
        // Siege state
        this.siegeState = {
            turn: 0,
            phase: 'initial',
            stalemateCounter: 0,
            blockedUnits: { A: new Set(), B: new Set() }
        };
        
        // NEW FEATURE 2: Reinforcement tracking
        this.reinforcements = { A: 0, B: 0 };
        
        // Initialize units
        this.state.battleUnits.forEach(unit => {
            unit.maxMovement = this.getMaxMovement(unit);
            unit.movementRemaining = unit.maxMovement;
            unit.positionHistory = [{x: unit.x, y: unit.y, turn: 0}];
            unit.hasActedThisTurn = false;
            unit.isRetreating = false;
            unit.inCombat = false;
            unit.veteranLevel = 0;
            unit.kills = 0;
            unit.turnsAlive = 0;
            unit.isFortified = false;
            unit.isBlocked = false;
            unit.blockedTurns = 0;
            unit.lastTarget = null;
            unit.moraleModifier = 1;
            unit.experience = 0;
            unit.lastDamageTurn = 0;
            
            this.setOccupied(unit.x, unit.y, unit);
        });
        
        this.determineRoles();
    }
    
    // NEW FEATURE 3: Weather System
    randomWeather() {
        const weathers = ['clear', 'rain', 'fog', 'wind', 'storm'];
        const weights = [40, 20, 15, 15, 10];
        const total = weights.reduce((a, b) => a + b, 0);
        let rand = Math.random() * total;
        for (let i = 0; i < weathers.length; i++) {
            rand -= weights[i];
            if (rand <= 0) return weathers[i];
        }
        return 'clear';
    }
    
    getWeatherEffects() {
        switch(this.weather) {
            case 'rain':
                return { rangedPenalty: 0.7, speedPenalty: 0.9, description: '🌧️ Rain: Ranged -30%, Speed -10%' };
            case 'fog':
                return { rangedPenalty: 0.5, sightReduction: 2, description: '🌫️ Fog: Ranged -50%, Sight -2' };
            case 'wind':
                return { rangedPenalty: 0.85, flyingBonus: 1.2, description: '💨 Wind: Ranged -15%, Flying +20% speed' };
            case 'storm':
                return { rangedPenalty: 0.4, speedPenalty: 0.8, lightningChance: 0.05, description: '⛈️ Storm: Ranged -60%, Lightning strikes!' };
            default:
                return { description: '☀️ Clear: No effects' };
        }
    }
    
    posKey(x, y) {
        return `${x},${y}`;
    }
    
    setOccupied(x, y, unit) {
        this.occupiedPositions.set(this.posKey(x, y), unit);
    }
    
    clearOccupied(x, y) {
        this.occupiedPositions.delete(this.posKey(x, y));
    }
    
    getOccupant(x, y) {
        return this.occupiedPositions.get(this.posKey(x, y));
    }
    
    isOccupied(x, y, excludeUnit = null) {
        const occupant = this.getOccupant(x, y);
        return occupant && occupant !== excludeUnit && occupant.alive;
    }
    
    determineRoles() {
        const map = this.state.selectedMap;
        const aCenter = {
            x: (map.sideAZone.x1 + map.sideAZone.x2) / 2,
            y: (map.sideAZone.y1 + map.sideAZone.y2) / 2
        };
        const bCenter = {
            x: (map.sideBZone.x1 + map.sideBZone.x2) / 2,
            y: (map.sideBZone.y1 + map.sideBZone.y2) / 2
        };
        
        const mapCenter = { x: map.width / 2, y: map.height / 2 };
        const aDist = Math.abs(aCenter.x - mapCenter.x) + Math.abs(aCenter.y - mapCenter.y);
        const bDist = Math.abs(bCenter.x - mapCenter.x) + Math.abs(bCenter.y - mapCenter.y);
        
        if (aDist > bDist) {
            this.armyStats.A.phase = 'attack';
            this.armyStats.B.phase = 'defend';
        } else {
            this.armyStats.A.phase = 'defend';
            this.armyStats.B.phase = 'attack';
        }
    }
    
    getMaxMovement(unit) {
        const baseSpeed = unit.speed || 5;
        const movementBonuses = {
            'flying': 3, 'mounted': 2, 'cavalry': 2, 'ethereal': 2,
            'naval': 2, 'foot': 0, 'heavy': -1, 'mechanical': 0,
            'swimming': 1, 'amphibious': 1
        };
        return Math.max(1, Math.floor(baseSpeed / 2) + (movementBonuses[unit.movement] || 0));
    }
    
    getTerrainAt(x, y) {
        const terrain = this.state.selectedMap.terrain[y]?.[x] || 'g';
        return TERRAIN_TYPES[terrain] || TERRAIN_TYPES['g'];
    }
    
    getMovementCost(unit, x, y) {
        const terrain = this.state.selectedMap.terrain[y]?.[x] || 'g';
        const terrainName = TERRAIN_TYPES[terrain]?.name.toLowerCase() || 'grass';
        const movementType = MOVEMENT_TYPES[unit.movement] || MOVEMENT_TYPES.foot;
        
        if (terrain === 'w' && this.hasBridgeAt(x, y)) {
            return 1;
        }
        
        return movementType[terrainName] || 1;
    }
    
    canTraverse(unit, x, y) {
        const cost = this.getMovementCost(unit, x, y);
        return cost < 100;
    }
    
    isValidPosition(x, y) {
        return x >= 0 && x < this.state.selectedMap.width && 
               y >= 0 && y < this.state.selectedMap.height;
    }
    
    getDistance(a, b) {
        return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
    }
    
    hasBridgeAt(x, y) {
        return this.bridges.some(b => b.x === x && b.y === y);
    }
    
    hasCampAt(x, y) {
        return this.camps.some(c => c.x === x && c.y === y);
    }
    
    hasTentAt(x, y) {
        return this.tents.some(t => t.x === x && t.y === y);
    }
    
    // Get structure at position for tooltips
    getStructureAt(x, y) {
        const camp = this.camps.find(c => c.x === x && c.y === y);
        if (camp) return { type: 'camp', data: camp };
        
        const bridge = this.bridges.find(b => b.x === x && b.y === y);
        if (bridge) return { type: 'bridge', data: bridge };
        
        const tent = this.tents.find(t => t.x === x && t.y === y);
        if (tent) return { type: 'tent', data: tent };
        
        return null;
    }
    
    getValidMoves(unit) {
        const moves = [];
        const directions = [
            { dx: 1, dy: 0 }, { dx: -1, dy: 0 },
            { dx: 0, dy: 1 }, { dx: 0, dy: -1 }
        ];
        
        for (const dir of directions) {
            const nx = unit.x + dir.dx;
            const ny = unit.y + dir.dy;
            
            if (!this.isValidPosition(nx, ny)) continue;
            if (this.isOccupied(nx, ny, unit)) continue;
            if (!this.canTraverse(unit, nx, ny)) continue;
            
            const cost = this.getMovementCost(unit, nx, ny);
            if (cost <= unit.movementRemaining) {
                moves.push({ x: nx, y: ny, cost });
            }
        }
        
        return moves;
    }
    
    canReachTarget(unit, targetX, targetY, maxSteps = 50) {
        const start = { x: unit.x, y: unit.y };
        const goal = { x: targetX, y: targetY };
        
        if (start.x === goal.x && start.y === goal.y) return { reachable: true, path: [] };
        
        const openSet = [{ ...start, g: 0, h: this.getDistance(start, goal), path: [] }];
        const closedSet = new Set();
        
        while (openSet.length > 0 && closedSet.size < maxSteps) {
            openSet.sort((a, b) => (a.g + a.h) - (b.g + b.h));
            const current = openSet.shift();
            
            const key = this.posKey(current.x, current.y);
            if (closedSet.has(key)) continue;
            closedSet.add(key);
            
            if (this.getDistance(current, goal) <= (unit.range || 1)) {
                return { reachable: true, path: current.path };
            }
            
            const directions = [
                { dx: 1, dy: 0 }, { dx: -1, dy: 0 },
                { dx: 0, dy: 1 }, { dx: 0, dy: -1 }
            ];
            
            for (const dir of directions) {
                const nx = current.x + dir.dx;
                const ny = current.y + dir.dy;
                
                if (!this.isValidPosition(nx, ny)) continue;
                
                const nKey = this.posKey(nx, ny);
                if (closedSet.has(nKey)) continue;
                
                let canPass = this.canTraverse(unit, nx, ny);
                
                const terrain = this.state.selectedMap.terrain[ny]?.[nx];
                if (terrain === 'w' && !canPass && unit.movement !== 'naval') {
                    canPass = true;
                }
                
                if (!canPass) continue;
                
                if (this.isOccupied(nx, ny, unit) && !(nx === goal.x && ny === goal.y)) continue;
                
                const cost = this.getMovementCost(unit, nx, ny);
                const newG = current.g + cost;
                
                openSet.push({
                    x: nx, y: ny,
                    g: newG,
                    h: this.getDistance({ x: nx, y: ny }, goal),
                    path: [...current.path, { x: nx, y: ny }]
                });
            }
        }
        
        return { reachable: false, path: [] };
    }
    
    findWaterBlockingPath(unit, target) {
        const dx = Math.sign(target.x - unit.x);
        const dy = Math.sign(target.y - unit.y);
        
        for (let dist = 1; dist <= 8; dist++) {
            const checkX = unit.x + dx * dist;
            const checkY = unit.y + dy * dist;
            
            if (!this.isValidPosition(checkX, checkY)) break;
            
            const terrain = this.state.selectedMap.terrain[checkY]?.[checkX];
            if (terrain === 'w' && !this.hasBridgeAt(checkX, checkY)) {
                return { x: checkX, y: checkY };
            }
        }
        
        for (let r = 1; r <= 6; r++) {
            for (let dy2 = -r; dy2 <= r; dy2++) {
                for (let dx2 = -r; dx2 <= r; dx2++) {
                    const checkX = unit.x + dx2;
                    const checkY = unit.y + dy2;
                    
                    if (!this.isValidPosition(checkX, checkY)) continue;
                    
                    const terrain = this.state.selectedMap.terrain[checkY]?.[checkX];
                    if (terrain === 'w' && !this.hasBridgeAt(checkX, checkY)) {
                        return { x: checkX, y: checkY };
                    }
                }
            }
        }
        
        return null;
    }
    
    isWaterBlocking(unit, target) {
        const dx = Math.sign(target.x - unit.x);
        const dy = Math.sign(target.y - unit.y);
        const dist = this.getDistance(unit, target);
        
        for (let i = 1; i < dist; i++) {
            const checkX = unit.x + Math.round(dx * i * (target.x - unit.x) / dist);
            const checkY = unit.y + Math.round(dy * i * (target.y - unit.y) / dist);
            
            if (!this.isValidPosition(checkX, checkY)) continue;
            
            const terrain = this.state.selectedMap.terrain[checkY]?.[checkX];
            if (terrain === 'w' && !this.hasBridgeAt(checkX, checkY)) {
                if (!this.canTraverse(unit, checkX, checkY)) {
                    return { x: checkX, y: checkY };
                }
            }
        }
        
        return null;
    }
    
    findBestBridgeSpot(unit, target) {
        const waterTiles = [];
        
        const minX = Math.min(unit.x, target.x) - 2;
        const maxX = Math.max(unit.x, target.x) + 2;
        const minY = Math.min(unit.y, target.y) - 2;
        const maxY = Math.max(unit.y, target.y) + 2;
        
        for (let y = minY; y <= maxY; y++) {
            for (let x = minX; x <= maxX; x++) {
                if (!this.isValidPosition(x, y)) continue;
                
                const terrain = this.state.selectedMap.terrain[y]?.[x];
                if (terrain === 'w' && !this.hasBridgeAt(x, y)) {
                    let adjacentToUnitSide = false;
                    let adjacentToTargetSide = false;
                    
                    const dirs = [{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];
                    for (const dir of dirs) {
                        const nx = x + dir.dx;
                        const ny = y + dir.dy;
                        if (!this.isValidPosition(nx, ny)) continue;
                        
                        const adjTerrain = this.state.selectedMap.terrain[ny]?.[nx];
                        if (adjTerrain !== 'w' && adjTerrain !== 'l' && adjTerrain !== 'v') {
                            const distToUnit = this.getDistance({x: nx, y: ny}, unit);
                            const distToTarget = this.getDistance({x: nx, y: ny}, target);
                            
                            if (distToUnit < distToTarget) adjacentToUnitSide = true;
                            else adjacentToTargetSide = true;
                        }
                    }
                    
                    waterTiles.push({
                        x, y,
                        distToUnit: this.getDistance({x, y}, unit),
                        distToTarget: this.getDistance({x, y}, target),
                        score: (adjacentToUnitSide ? 10 : 0) + (adjacentToTargetSide ? 10 : 0)
                    });
                }
            }
        }
        
        if (waterTiles.length === 0) return null;
        
        waterTiles.sort((a, b) => {
            if (b.score !== a.score) return b.score - a.score;
            return a.distToUnit - b.distToUnit;
        });
        
        return waterTiles[0];
    }
    
    moveToward(unit, targetX, targetY) {
        const moves = this.getValidMoves(unit);
        if (moves.length === 0) return false;
        
        const currentDist = this.getDistance(unit, { x: targetX, y: targetY });
        
        moves.forEach(move => {
            move.newDist = this.getDistance(move, { x: targetX, y: targetY });
            move.improvement = currentDist - move.newDist;
            
            const terrain = this.getTerrainAt(move.x, move.y);
            move.terrainBonus = terrain.defenseBonus || 0;
        });
        
        moves.sort((a, b) => {
            if (b.improvement !== a.improvement) return b.improvement - a.improvement;
            return b.terrainBonus - a.terrainBonus;
        });
        
        let bestMove = moves[0];
        if (moves.length > 1 && bestMove.improvement <= 0 && Math.random() < 0.3) {
            bestMove = moves[Math.floor(Math.random() * moves.length)];
        }
        
        if (bestMove.improvement > 0 || unit.blockedTurns > 2) {
            this.moveUnit(unit, bestMove.x, bestMove.y, bestMove.cost);
            return true;
        }
        
        return false;
    }
    
    moveUnit(unit, newX, newY, cost) {
        this.clearOccupied(unit.x, unit.y);
        
        unit.x = newX;
        unit.y = newY;
        unit.movementRemaining -= cost;
        
        this.setOccupied(newX, newY, unit);
        
        unit.positionHistory.push({ x: newX, y: newY, turn: this.state.turn });
        if (unit.positionHistory.length > 20) {
            unit.positionHistory.shift();
        }
        
        unit.isFortified = false;
        unit.blockedTurns = 0;
    }
    
    // NEW FEATURE 4: Bridge costs supply
    buildBridge(unit, x, y) {
        if (this.hasBridgeAt(x, y)) return false;
        
        const terrain = this.state.selectedMap.terrain[y]?.[x];
        if (terrain !== 'w') return false;
        
        const dist = this.getDistance(unit, { x, y });
        if (dist > 3) return false;
        
        // Check if we have a camp to draw resources from
        const nearbyCamp = this.camps.find(c => 
            c.side === unit.side && this.getDistance(c, unit) <= 5
        );
        
        // Bridge costs 15 supply/resources
        const bridgeCost = 15;
        if (!nearbyCamp || this.armyStats[unit.side].resources < bridgeCost) {
            if (unit.blockedTurns > 5) {
                // Desperate measure - build anyway but lose morale
                this.armyStats[unit.side].morale = Math.max(0, this.armyStats[unit.side].morale - 10);
                this.addLog(`⚠️ ${unit.name} built emergency bridge (no supplies, -10 morale)!`, 'info');
            } else {
                return false;
            }
        } else {
            this.armyStats[unit.side].resources -= bridgeCost;
        }
        
        const dirs = [{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];
        let adjacentToLand = false;
        
        for (const dir of dirs) {
            const nx = x + dir.dx;
            const ny = y + dir.dy;
            if (!this.isValidPosition(nx, ny)) continue;
            
            const adjTerrain = this.state.selectedMap.terrain[ny]?.[nx];
            if (adjTerrain && adjTerrain !== 'w' && adjTerrain !== 'l' && adjTerrain !== 'v') {
                adjacentToLand = true;
                break;
            }
        }
        
        if (!adjacentToLand) return false;
        
        this.bridges.push({
            x, y,
            side: unit.side,
            builtBy: unit.id,
            turn: this.state.turn,
            hp: 50
        });
        
        this.addLog(`🌉 ${unit.name} built a bridge at (${x},${y})! (-${bridgeCost} resources)`, 'info');
        this.addEffect(unit, 'ability');
        
        return true;
    }
    
    buildCamp(unit) {
        if (this.hasCampAt(unit.x, unit.y)) return false;
        
        const terrain = this.state.selectedMap.terrain[unit.y]?.[unit.x];
        if (['w', 'l', 'v'].includes(terrain)) return false;
        
        // Camp costs 20 resources
        const campCost = 20;
        if (this.armyStats[unit.side].resources < campCost) {
            return false;
        }
        
        this.armyStats[unit.side].resources -= campCost;
        
        this.camps.push({
            x: unit.x,
            y: unit.y,
            side: unit.side,
            builtBy: unit.id,
            turn: this.state.turn,
            hp: 100
        });
        
        this.addLog(`🏕️ ${unit.name} set up a supply camp! (-${campCost} resources, +25% supply)`, 'info');
        this.addEffect(unit, 'ability');
        
        this.armyStats[unit.side].supply = Math.min(100, this.armyStats[unit.side].supply + 15);
        
        return true;
    }
    
    buildTent(unit) {
        if (this.hasTentAt(unit.x, unit.y)) return false;
        
        const terrain = this.state.selectedMap.terrain[unit.y]?.[unit.x];
        if (['w', 'l', 'v'].includes(terrain)) return false;
        
        this.tents.push({
            x: unit.x,
            y: unit.y,
            side: unit.side,
            builtBy: unit.id,
            turn: this.state.turn
        });
        
        this.addLog(`⛺ ${unit.name} set up a tent!`, 'info');
        
        return true;
    }
    
    fortify(unit) {
        if (unit.isFortified) return;
        
        unit.isFortified = true;
        this.addLog(`🛡️ ${unit.name} fortified their position!`, 'info');
    }
    
    getEnemies(unit) {
        return this.state.battleUnits.filter(u => u.side !== unit.side && u.alive);
    }
    
    getAllies(unit) {
        return this.state.battleUnits.filter(u => u.side === unit.side && u.alive && u !== unit);
    }
    
    // NEW FEATURE 5: Flanking detection
    isFlankingTarget(attacker, defender) {
        // Check if attacker is behind the defender (relative to defender's last movement)
        const history = defender.positionHistory;
        if (history.length < 2) return false;
        
        const lastPos = history[history.length - 2];
        const currentPos = { x: defender.x, y: defender.y };
        
        // Direction defender was moving
        const defenderDx = currentPos.x - lastPos.x;
        const defenderDy = currentPos.y - lastPos.y;
        
        // Direction from defender to attacker
        const attackDx = attacker.x - defender.x;
        const attackDy = attacker.y - defender.y;
        
        // If attacker is opposite to movement direction, it's a flank
        if (defenderDx !== 0 || defenderDy !== 0) {
            const dotProduct = defenderDx * attackDx + defenderDy * attackDy;
            return dotProduct < 0;
        }
        
        return false;
    }
    
    // NEW FEATURE 6: Shield wall formation
    getShieldWallBonus(unit) {
        if (unit.role !== 'heavy' && unit.role !== 'infantry') return 0;
        
        const allies = this.getAllies(unit);
        let adjacentHeavy = 0;
        
        for (const ally of allies) {
            if (ally.role === 'heavy' || ally.role === 'infantry') {
                if (this.getDistance(unit, ally) === 1) {
                    adjacentHeavy++;
                }
            }
        }
        
        return adjacentHeavy * 5; // +5 defense per adjacent heavy/infantry
    }
    
    // NEW FEATURE 7: Commander aura
    getCommanderAura(unit) {
        const allies = this.getAllies(unit);
        let bonus = { attack: 0, defense: 0, morale: 0 };
        
        for (const ally of allies) {
            if (ally.isHero && this.getDistance(unit, ally) <= 3) {
                bonus.attack += 3;
                bonus.defense += 2;
                bonus.morale += 5;
            }
        }
        
        return bonus;
    }
    
    findBestTarget(unit) {
        const enemies = this.getEnemies(unit);
        if (enemies.length === 0) return null;
        
        let bestTarget = null;
        let bestScore = -Infinity;
        
        // Weather affects targeting for ranged
        const weather = this.getWeatherEffects();
        const sightReduction = weather.sightReduction || 0;
        const effectiveRange = unit.range - sightReduction;
        
        for (const enemy of enemies) {
            let score = 0;
            const dist = this.getDistance(unit, enemy);
            
            if (dist <= Math.max(1, effectiveRange)) score += 200;
            
            const hpPercent = enemy.hp / enemy.maxHp;
            score += (1 - hpPercent) * 80;
            
            score -= dist * 8;
            
            score += Math.max(0, 25 - enemy.defense);
            
            if (enemy.isHero) score += 50;
            if (enemy.role === 'healer') score += 60;
            if (enemy.role === 'mage') score += 40;
            if (enemy.role === 'siege') score += 30;
            
            // NEW: Ranged units prioritize other ranged/mages
            if ((unit.role === 'ranged' || unit.role === 'mage') && 
                (enemy.role === 'ranged' || enemy.role === 'mage' || enemy.role === 'healer')) {
                score += 30;
            }
            
            const reachCheck = this.canReachTarget(unit, enemy.x, enemy.y, 20);
            if (reachCheck.reachable) score += 100;
            
            // Flanking bonus
            if (this.isFlankingTarget(unit, enemy)) score += 25;
            
            score += Math.random() * 15;
            
            if (score > bestScore) {
                bestScore = score;
                bestTarget = enemy;
            }
        }
        
        return bestTarget;
    }
    
    findHealTarget(unit) {
        const allies = this.getAllies(unit);
        const wounded = allies.filter(a => a.hp < a.maxHp * 0.7);
        
        if (wounded.length === 0) return null;
        
        wounded.sort((a, b) => (a.hp / a.maxHp) - (b.hp / b.maxHp));
        
        const inRange = wounded.filter(a => this.getDistance(unit, a) <= (unit.range || 3));
        
        return inRange.length > 0 ? inRange[0] : wounded[0];
    }
    
    calculateDamage(attacker, defender, ability = null) {
        let baseDamage = ability?.damage || attacker.attack;
        let defense = defender.defense;
        
        // Morale modifier
        const morale = this.armyStats[attacker.side].morale / 100;
        baseDamage *= (0.7 + morale * 0.5);
        
        // Supply modifier
        const supply = this.armyStats[attacker.side].supply / 100;
        baseDamage *= (0.6 + supply * 0.4);
        
        // Weather effects for ranged
        const weather = this.getWeatherEffects();
        const dist = this.getDistance(attacker, defender);
        if (dist > 1 && weather.rangedPenalty) {
            baseDamage *= weather.rangedPenalty;
        }
        
        // Terrain defense bonus
        const terrain = this.getTerrainAt(defender.x, defender.y);
        defense += terrain.defenseBonus || 0;
        
        // Fortification bonus
        if (defender.isFortified) {
            defense += 20;
        }
        
        // Shield wall bonus
        defense += this.getShieldWallBonus(defender);
        
        // Commander aura
        const aura = this.getCommanderAura(attacker);
        baseDamage += aura.attack;
        
        // Near camp bonus for defender
        const nearCamp = this.camps.find(c => 
            c.side === defender.side && this.getDistance(defender, c) <= 3
        );
        if (nearCamp) defense += 5;
        
        // Veteran bonus
        baseDamage += attacker.veteranLevel * 5;
        defense += defender.veteranLevel * 3;
        
        // NEW FEATURE: Flanking bonus (+25% damage)
        let flankBonus = 1;
        if (this.isFlankingTarget(attacker, defender)) {
            flankBonus = 1.25;
            baseDamage *= flankBonus;
        }
        
        // Weakness check
        if (defender.weakness && ability?.type === defender.weakness) {
            baseDamage *= 2;
        }
        
        // Apply buffs
        const atkBuff = (attacker.buffs || []).reduce((s, b) => s + (b.attackBonus || 0), 0);
        const defDebuff = (defender.debuffs || []).reduce((s, d) => s + (d.defenseDebuff || 0), 0);
        baseDamage += atkBuff;
        defense = Math.max(0, defense - defDebuff);
        
        // Critical hit (15% chance, +10% per veteran level)
        const critChance = 0.15 + (attacker.veteranLevel * 0.05);
        const isCrit = Math.random() < critChance;
        if (isCrit) baseDamage *= 1.75;
        
        // Calculate final damage
        const reduction = defense / (defense + 60);
        let finalDamage = Math.floor(baseDamage * (1 - reduction));
        
        // Variance (±15%)
        finalDamage = Math.floor(finalDamage * (0.85 + Math.random() * 0.3));
        finalDamage = Math.max(1, finalDamage);
        
        return { damage: finalDamage, isCrit, isFlanking: flankBonus > 1 };
    }
    
    attack(attacker, defender) {
        const dist = this.getDistance(attacker, defender);
        if (dist > attacker.range) return 0;
        
        const { damage, isCrit, isFlanking } = this.calculateDamage(attacker, defender);
        
        defender.hp -= damage;
        defender.lastDamageTurn = this.state.turn;
        attacker.inCombat = true;
        defender.inCombat = true;
        
        if (attacker.stealthed) attacker.stealthed = false;
        
        let extras = [];
        if (isCrit) extras.push('💥CRIT');
        if (isFlanking) extras.push('🗡️FLANK');
        const extraText = extras.length > 0 ? ` ${extras.join(' ')}!` : '';
        
        this.addLog(`${attacker.sprite} ${attacker.name} hits ${defender.sprite} ${defender.name} for ${damage}${extraText}`, 'attack');
        
        this.addEffect(attacker, 'attack');
        this.addEffect(defender, 'damage', { amount: damage, isCrit, isFlanking });
        
        if (dist > 1) {
            this.addProjectile(attacker, defender);
        }
        
        // Give experience
        attacker.experience += Math.floor(damage / 5);
        
        if (defender.hp <= 0) {
            this.killUnit(defender, attacker);
        }
        
        return damage;
    }
    
    useAbility(unit, ability, target = null) {
        ability.currentCooldown = ability.cooldown;
        
        if (ability.heal && target) {
            const healAmount = ability.heal + (unit.healPower || 0);
            const actualHeal = Math.min(healAmount, target.maxHp - target.hp);
            target.hp += actualHeal;
            
            this.addLog(`💚 ${unit.name} heals ${target.name} for ${actualHeal}!`, 'heal');
            this.addEffect(target, 'heal', { amount: actualHeal });
            this.addEffect(unit, 'ability');
            return;
        }
        
        if (ability.buff) {
            const targets = ability.teamWide 
                ? [unit, ...this.getAllies(unit).filter(a => 
                    !ability.aoeRange || this.getDistance(unit, a) <= ability.aoeRange
                )]
                : ability.targetAlly && target ? [target] : [unit];
            
            targets.forEach(t => {
                if (!t.buffs) t.buffs = [];
                t.buffs.push({
                    name: ability.name,
                    attackBonus: ability.attackBonus || 0,
                    defenseBonus: ability.defenseBonus || 0,
                    speedBonus: ability.speedBonus || 0,
                    duration: ability.duration || 3
                });
            });
            
            this.addLog(`✨ ${unit.name} uses ${ability.name}!`, 'ability');
            this.addEffect(unit, 'ability');
            return;
        }
        
        if (ability.summon) {
            this.summonUnit(unit, ability);
            return;
        }
        
        if (ability.stealth) {
            unit.stealthed = true;
            unit.stealthDuration = ability.duration || 3;
            this.addLog(`👤 ${unit.name} vanishes into shadow!`, 'ability');
            this.addEffect(unit, 'ability');
            return;
        }
        
        if (ability.damage && target) {
            if (ability.aoe) {
                const enemies = this.getEnemies(unit).filter(e => 
                    this.getDistance(target, e) <= ability.aoe
                );
                
                let totalDamage = 0;
                enemies.forEach(enemy => {
                    const { damage: dmg, isCrit } = this.calculateDamage(unit, enemy, ability);
                    enemy.hp -= dmg;
                    totalDamage += dmg;
                    this.addEffect(enemy, 'damage', { amount: dmg, isCrit });
                    this.addProjectile(unit, enemy);
                    if (enemy.hp <= 0) this.killUnit(enemy, unit);
                });
                
                this.addLog(`💥 ${unit.name} uses ${ability.name} hitting ${enemies.length} enemies for ${totalDamage} total!`, 'ability');
            } else {
                const { damage: dmg, isCrit } = this.calculateDamage(unit, target, ability);
                target.hp -= dmg;
                
                this.addLog(`✨ ${unit.name} uses ${ability.name} on ${target.name} for ${dmg}!`, 'ability');
                this.addEffect(target, 'damage', { amount: dmg, isCrit });
                this.addProjectile(unit, target);
                
                if (ability.lifesteal) {
                    const heal = Math.floor(dmg * ability.lifesteal / 100);
                    unit.hp = Math.min(unit.maxHp, unit.hp + heal);
                    this.addLog(`🩸 ${unit.name} drains ${heal} HP!`, 'heal');
                }
                
                if (target.hp <= 0) this.killUnit(target, unit);
            }
            
            this.addEffect(unit, 'ability');
        }
    }
    
    summonUnit(summoner, ability) {
        const summonData = SUMMONS[ability.summon];
        if (!summonData) return;
        
        const count = ability.count || 1;
        let summoned = 0;
        
        for (let i = 0; i < count; i++) {
            let spot = null;
            for (let r = 1; r <= 3 && !spot; r++) {
                for (let dy = -r; dy <= r && !spot; dy++) {
                    for (let dx = -r; dx <= r && !spot; dx++) {
                        const nx = summoner.x + dx;
                        const ny = summoner.y + dy;
                        if (this.isValidPosition(nx, ny) && !this.isOccupied(nx, ny) && this.canTraverse(summoner, nx, ny)) {
                            spot = { x: nx, y: ny };
                        }
                    }
                }
            }
            
            if (spot) {
                const newUnit = {
                    id: `summon_${Date.now()}_${Math.random()}`,
                    ...summonData,
                    x: spot.x,
                    y: spot.y,
                    side: summoner.side,
                    maxHp: summonData.hp,
                    alive: true,
                    isSummon: true,
                    summonDuration: summonData.duration,
                    buffs: [],
                    debuffs: [],
                    abilities: [],
                    positionHistory: [{x: spot.x, y: spot.y, turn: this.state.turn}],
                    maxMovement: 3,
                    movementRemaining: 3,
                    veteranLevel: 0,
                    kills: 0,
                    experience: 0
                };
                
                this.state.battleUnits.push(newUnit);
                this.setOccupied(spot.x, spot.y, newUnit);
                summoned++;
            }
        }
        
        if (summoned > 0) {
            this.addLog(`🌀 ${summoner.name} summons ${summoned}x ${summonData.name}!`, 'ability');
        }
        this.addEffect(summoner, 'ability');
    }
    
    killUnit(unit, killer = null) {
        unit.alive = false;
        unit.hp = 0;
        
        this.clearOccupied(unit.x, unit.y);
        
        this.addLog(`💀 ${unit.sprite} ${unit.name} has been slain!`, 'death');
        this.addEffect(unit, 'death');
        
        const moraleLoss = unit.isHero ? 20 : 5;
        this.armyStats[unit.side].morale = Math.max(0, this.armyStats[unit.side].morale - moraleLoss);
        
        const enemySide = unit.side === 'A' ? 'B' : 'A';
        this.armyStats[enemySide].morale = Math.min(100, this.armyStats[enemySide].morale + (unit.isHero ? 10 : 2));
        
        if (killer) {
            killer.kills = (killer.kills || 0) + 1;
            killer.experience += unit.isHero ? 50 : 20;
            this.checkVeteranUpgrade(killer);
        }
    }
    
    checkVeteranUpgrade(unit) {
        const kills = unit.kills;
        if (kills >= 8 && unit.veteranLevel < 3) {
            unit.veteranLevel = 3;
            unit.attack += 8;
            unit.defense += 5;
            unit.maxHp += 20;
            unit.hp += 20;
            this.addLog(`⭐⭐⭐ ${unit.name} is now LEGENDARY!`, 'info');
        } else if (kills >= 4 && unit.veteranLevel < 2) {
            unit.veteranLevel = 2;
            unit.attack += 5;
            unit.defense += 3;
            unit.maxHp += 10;
            unit.hp += 10;
            this.addLog(`⭐⭐ ${unit.name} is now ELITE!`, 'info');
        } else if (kills >= 2 && unit.veteranLevel < 1) {
            unit.veteranLevel = 1;
            unit.attack += 3;
            unit.defense += 2;
            unit.maxHp += 5;
            unit.hp += 5;
            this.addLog(`⭐ ${unit.name} is now a VETERAN!`, 'info');
        }
    }
    
    shouldRetreat(unit) {
        if (unit.isHero) return false;
        if (unit.isRetreating) return true;
        
        const hpPercent = unit.hp / unit.maxHp;
        const morale = this.armyStats[unit.side].morale;
        
        if (hpPercent < 0.2 && morale < 30) {
            if (Math.random() < 0.5) {
                unit.isRetreating = true;
                this.addLog(`🏃 ${unit.name} is retreating!`, 'info');
                return true;
            }
        }
        
        return false;
    }
    
    getRetreatTarget(unit) {
        const enemies = this.getEnemies(unit);
        if (enemies.length === 0) return null;
        
        let avgX = 0, avgY = 0;
        enemies.forEach(e => { avgX += e.x; avgY += e.y; });
        avgX /= enemies.length;
        avgY /= enemies.length;
        
        const dx = unit.x - avgX;
        const dy = unit.y - avgY;
        
        return {
            x: Math.max(0, Math.min(this.state.selectedMap.width - 1, unit.x + Math.sign(dx) * 5)),
            y: Math.max(0, Math.min(this.state.selectedMap.height - 1, unit.y + Math.sign(dy) * 5))
        };
    }
    
    processAttacker(unit) {
        if (this.shouldRetreat(unit)) {
            const retreatTarget = this.getRetreatTarget(unit);
            if (retreatTarget) {
                this.moveToward(unit, retreatTarget.x, retreatTarget.y);
            }
            return;
        }
        
        // Healers prioritize healing
        if (unit.role === 'healer' || unit.healPower > 0) {
            const healTarget = this.findHealTarget(unit);
            if (healTarget) {
                const dist = this.getDistance(unit, healTarget);
                if (dist <= (unit.range || 3)) {
                    const healAbility = unit.abilities?.find(a => 
                        a.heal && (!a.currentCooldown || a.currentCooldown === 0)
                    );
                    if (healAbility) {
                        this.useAbility(unit, healAbility, healTarget);
                        return;
                    }
                    const healAmount = 10 + (unit.healPower || 0);
                    healTarget.hp = Math.min(healTarget.maxHp, healTarget.hp + healAmount);
                    this.addLog(`💚 ${unit.name} heals ${healTarget.name} for ${healAmount}!`, 'heal');
                    this.addEffect(healTarget, 'heal', { amount: healAmount });
                    return;
                } else {
                    this.moveToward(unit, healTarget.x, healTarget.y);
                    return;
                }
            }
        }
        
        const target = this.findBestTarget(unit);
        if (!target) return;
        
        const dist = this.getDistance(unit, target);
        const reachCheck = this.canReachTarget(unit, target.x, target.y);
        
        if (!reachCheck.reachable) {
            unit.blockedTurns++;
            unit.isBlocked = true;
            
            const waterBlocking = this.isWaterBlocking(unit, target);
            const bestBridgeSpot = this.findBestBridgeSpot(unit, target);
            
            // Try to build bridge if water is blocking - need a camp first
            if ((waterBlocking || bestBridgeSpot) && unit.blockedTurns >= 2) {
                const bridgeTarget = bestBridgeSpot || waterBlocking;
                
                // Check if we have a camp
                const hasCamp = this.camps.some(c => c.side === unit.side);
                
                if (!hasCamp && unit.isHero && !this.hasCampAt(unit.x, unit.y)) {
                    // Build camp first
                    this.buildCamp(unit);
                    return;
                }
                
                if (bridgeTarget && !this.hasBridgeAt(bridgeTarget.x, bridgeTarget.y)) {
                    const bridgeDist = this.getDistance(unit, bridgeTarget);
                    
                    if (bridgeDist <= 3) {
                        if (this.buildBridge(unit, bridgeTarget.x, bridgeTarget.y)) {
                            return;
                        }
                    }
                    
                    // Move toward bridge location
                    const dirs = [{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];
                    let bestLandSpot = null;
                    let bestDist = Infinity;
                    
                    for (const dir of dirs) {
                        const lx = bridgeTarget.x + dir.dx;
                        const ly = bridgeTarget.y + dir.dy;
                        
                        if (!this.isValidPosition(lx, ly)) continue;
                        
                        const terrain = this.state.selectedMap.terrain[ly]?.[lx];
                        if (terrain !== 'w' && terrain !== 'l' && terrain !== 'v') {
                            const d = this.getDistance(unit, {x: lx, y: ly});
                            if (d < bestDist && !this.isOccupied(lx, ly, unit)) {
                                bestDist = d;
                                bestLandSpot = {x: lx, y: ly};
                            }
                        }
                    }
                    
                    if (bestLandSpot) {
                        this.moveToward(unit, bestLandSpot.x, bestLandSpot.y);
                        return;
                    }
                }
            }
            
            // Build tent if blocked
            if (unit.blockedTurns >= 2 && !this.hasTentAt(unit.x, unit.y)) {
                this.buildTent(unit);
            }
            
            // Build camp if stuck
            if (unit.blockedTurns >= 3 && !this.hasCampAt(unit.x, unit.y) && unit.isHero) {
                this.buildCamp(unit);
                return;
            }
            
            this.moveToward(unit, target.x, target.y);
            return;
        } else {
            unit.blockedTurns = 0;
            unit.isBlocked = false;
        }
        
        // In range? Attack!
        if (dist <= unit.range) {
            if (unit.abilities && Math.random() < 0.4) {
                const ability = unit.abilities.find(a => 
                    (!a.currentCooldown || a.currentCooldown === 0) &&
                    a.damage &&
                    dist <= (a.range || unit.range)
                );
                if (ability) {
                    this.useAbility(unit, ability, target);
                    return;
                }
            }
            
            this.attack(unit, target);
        } else {
            const moved = this.moveToward(unit, target.x, target.y);
            
            if (moved) {
                const newDist = this.getDistance(unit, target);
                if (newDist <= unit.range && unit.movementRemaining >= 0) {
                    this.attack(unit, target);
                }
            }
        }
    }
    
    processDefender(unit) {
        if (this.shouldRetreat(unit)) {
            const retreatTarget = this.getRetreatTarget(unit);
            if (retreatTarget) {
                this.moveToward(unit, retreatTarget.x, retreatTarget.y);
            }
            return;
        }
        
        // Healers prioritize healing
        if (unit.role === 'healer' || unit.healPower > 0) {
            const healTarget = this.findHealTarget(unit);
            if (healTarget) {
                const dist = this.getDistance(unit, healTarget);
                if (dist <= (unit.range || 3)) {
                    const healAmount = 10 + (unit.healPower || 0);
                    healTarget.hp = Math.min(healTarget.maxHp, healTarget.hp + healAmount);
                    this.addLog(`💚 ${unit.name} heals ${healTarget.name} for ${healAmount}!`, 'heal');
                    this.addEffect(healTarget, 'heal', { amount: healAmount });
                    return;
                }
            }
        }
        
        const target = this.findBestTarget(unit);
        if (!target) return;
        
        const dist = this.getDistance(unit, target);
        const reachCheck = this.canReachTarget(unit, target.x, target.y, 20);
        
        if (!reachCheck.reachable) {
            unit.blockedTurns++;
            unit.isBlocked = true;
            
            // Defenders also build bridges if needed
            if (unit.blockedTurns >= 4) {
                const waterBlocking = this.isWaterBlocking(unit, target);
                if (waterBlocking) {
                    const bridgeDist = this.getDistance(unit, waterBlocking);
                    if (bridgeDist <= 3) {
                        this.buildBridge(unit, waterBlocking.x, waterBlocking.y);
                        return;
                    }
                }
            }
            
            if (!this.hasTentAt(unit.x, unit.y) && unit.blockedTurns >= 2) {
                this.buildTent(unit);
            }
            if (!this.hasCampAt(unit.x, unit.y) && unit.isHero && unit.blockedTurns >= 3) {
                this.buildCamp(unit);
                return;
            }
        } else {
            unit.blockedTurns = 0;
            unit.isBlocked = false;
        }
        
        const currentTerrain = this.getTerrainAt(unit.x, unit.y);
        const isDefensiveTerrain = currentTerrain.defenseBonus >= 10;
        
        // If on defensive terrain and enemy approaching, fortify
        if (isDefensiveTerrain && dist <= 5) {
            if (!unit.isFortified) {
                this.fortify(unit);
            }
            
            if (dist <= unit.range) {
                this.attack(unit, target);
            }
            return;
        }
        
        // Find nearby defensive terrain
        if (!unit.isFortified && dist > 4) {
            let bestDefSpot = null;
            let bestDefBonus = 0;
            
            for (let dy = -5; dy <= 5; dy++) {
                for (let dx = -5; dx <= 5; dx++) {
                    const checkX = unit.x + dx;
                    const checkY = unit.y + dy;
                    
                    if (!this.isValidPosition(checkX, checkY)) continue;
                    if (this.isOccupied(checkX, checkY, unit)) continue;
                    if (!this.canTraverse(unit, checkX, checkY)) continue;
                    
                    const terrain = this.getTerrainAt(checkX, checkY);
                    if (terrain.defenseBonus > bestDefBonus) {
                        bestDefBonus = terrain.defenseBonus;
                        bestDefSpot = { x: checkX, y: checkY };
                    }
                }
            }
            
            if (bestDefSpot && bestDefBonus > 5) {
                this.moveToward(unit, bestDefSpot.x, bestDefSpot.y);
                return;
            }
        }
        
        if (dist <= unit.range) {
            this.attack(unit, target);
        } else if (dist <= unit.range + 4) {
            this.moveToward(unit, target.x, target.y);
            
            const newDist = this.getDistance(unit, target);
            if (newDist <= unit.range) {
                this.attack(unit, target);
            }
        } else {
            if (!this.hasCampAt(unit.x, unit.y) && unit.isHero && Math.random() < 0.4) {
                this.buildCamp(unit);
                return;
            } else if (!this.hasTentAt(unit.x, unit.y) && Math.random() < 0.3) {
                this.buildTent(unit);
            }
            
            if (!unit.isFortified) {
                this.fortify(unit);
            }
        }
    }
    
    processUnit(unit) {
        if (!unit.alive) return;
        
        unit.turnsAlive++;
        unit.movementRemaining = unit.maxMovement;
        unit.hasActedThisTurn = false;
        
        // Weather effect on flying units
        const weather = this.getWeatherEffects();
        if (unit.movement === 'flying' && weather.flyingBonus) {
            unit.movementRemaining = Math.floor(unit.movementRemaining * weather.flyingBonus);
        }
        if (weather.speedPenalty) {
            unit.movementRemaining = Math.floor(unit.movementRemaining * weather.speedPenalty);
        }
        
        // Reduce cooldowns
        if (unit.abilities) {
            unit.abilities.forEach(a => {
                if (a.currentCooldown > 0) a.currentCooldown--;
            });
        }
        
        // Process buffs
        if (unit.buffs) {
            unit.buffs = unit.buffs.filter(b => {
                b.duration--;
                return b.duration > 0;
            });
        }
        
        // Process stealth
        if (unit.stealthed) {
            unit.stealthDuration--;
            if (unit.stealthDuration <= 0) {
                unit.stealthed = false;
                this.addLog(`${unit.name} is revealed!`, 'info');
            }
        }
        
        // Process summon duration
        if (unit.isSummon) {
            unit.summonDuration--;
            if (unit.summonDuration <= 0) {
                unit.alive = false;
                this.clearOccupied(unit.x, unit.y);
                this.addLog(`${unit.name} fades away...`, 'info');
                return;
            }
        }
        
        // Camp healing
        const nearCamp = this.camps.find(c => 
            c.side === unit.side && this.getDistance(unit, c) <= 3
        );
        if (nearCamp && unit.hp < unit.maxHp) {
            const heal = Math.min(5, unit.maxHp - unit.hp);
            unit.hp += heal;
        }
        
        // Passive HP regen if not in combat
        if (this.state.turn - unit.lastDamageTurn > 3 && unit.hp < unit.maxHp) {
            unit.hp = Math.min(unit.maxHp, unit.hp + 1);
        }
        
        // Process based on army phase
        const phase = this.armyStats[unit.side].phase;
        
        if (phase === 'defend') {
            this.processDefender(unit);
        } else {
            this.processAttacker(unit);
        }
    }
    
    processTerrainDamage() {
        this.state.battleUnits.filter(u => u.alive).forEach(unit => {
            const terrain = this.getTerrainAt(unit.x, unit.y);
            
            if (terrain.damage) {
                if (['flying', 'ethereal'].includes(unit.movement)) return;
                if (unit.movement === 'naval' && terrain.name === 'Water') return;
                if (unit.movement === 'swimming' && terrain.name === 'Water') return;
                if (unit.movement === 'amphibious' && terrain.name === 'Water') return;
                
                unit.hp -= terrain.damage;
                
                if (unit.hp <= 0) {
                    this.killUnit(unit);
                    this.addLog(`☠️ ${unit.name} perished in ${terrain.name}!`, 'death');
                }
            }
        });
    }
    
    // NEW FEATURE 8: Storm lightning strikes
    processWeatherEffects() {
        const weather = this.getWeatherEffects();
        
        if (weather.lightningChance) {
            this.state.battleUnits.filter(u => u.alive).forEach(unit => {
                if (Math.random() < weather.lightningChance) {
                    const damage = 10 + Math.floor(Math.random() * 15);
                    unit.hp -= damage;
                    this.addLog(`⚡ Lightning strikes ${unit.name} for ${damage}!`, 'attack');
                    this.addEffect(unit, 'damage', { amount: damage });
                    
                    if (unit.hp <= 0) {
                        this.killUnit(unit);
                    }
                }
            });
        }
    }
    
    updateArmyStats() {
        ['A', 'B'].forEach(side => {
            const units = this.state.battleUnits.filter(u => u.side === side && u.alive);
            
            // Base supply
            let supply = 40;
            
            // Supply from camps
            const camps = this.camps.filter(c => c.side === side);
            supply += camps.length * 25;
            
            // Tents add small supply
            const tents = this.tents.filter(t => t.side === side);
            supply += tents.length * 5;
            
            supply = Math.min(100, Math.max(0, supply));
            this.armyStats[side].supply = supply;
            
            // Resource generation from camps
            this.armyStats[side].resources = Math.min(100, 
                this.armyStats[side].resources + camps.length * 3
            );
            
            // Morale recovery near camps
            if (camps.length > 0 && this.armyStats[side].morale < 80) {
                this.armyStats[side].morale = Math.min(100, this.armyStats[side].morale + 1);
            }
        });
    }
    
    updateSiegeState() {
        const recentDeaths = this.logs.filter(l => 
            l.type === 'death' && l.turn >= this.state.turn - 8
        ).length;
        
        if (recentDeaths === 0 && this.state.turn > 15) {
            this.siegeState.stalemateCounter++;
            
            if (this.siegeState.stalemateCounter >= 6 && this.siegeState.phase !== 'stalemate') {
                this.siegeState.phase = 'stalemate';
                this.addLog('⚠️ The battle has reached a stalemate! Both sides are building up...', 'info');
            }
            
            if (this.siegeState.stalemateCounter >= 15) {
                this.siegeState.stalemateCounter = 0;
                this.siegeState.phase = 'assault';
                this.addLog('⚔️ RENEWED ASSAULT! Both sides charge forward!', 'info');
                
                this.armyStats.A.morale = Math.min(100, this.armyStats.A.morale + 25);
                this.armyStats.B.morale = Math.min(100, this.armyStats.B.morale + 25);
                
                this.state.battleUnits.filter(u => u.alive).forEach(u => {
                    if (this.armyStats[u.side].phase === 'attack') {
                        u.isFortified = false;
                        u.blockedTurns = 0;
                    }
                });
            }
        } else {
            this.siegeState.stalemateCounter = 0;
            this.siegeState.phase = 'combat';
        }
    }
    
    // NEW FEATURE 9: Weather changes
    updateWeather() {
        this.weatherDuration--;
        if (this.weatherDuration <= 0) {
            const oldWeather = this.weather;
            this.weather = this.randomWeather();
            this.weatherDuration = 10 + Math.floor(Math.random() * 15);
            
            if (oldWeather !== this.weather) {
                const effects = this.getWeatherEffects();
                this.addLog(`🌤️ Weather changed: ${effects.description}`, 'info');
            }
        }
    }
    
    processTurn() {
        const aAlive = this.state.battleUnits.filter(u => u.side === 'A' && u.alive);
        const bAlive = this.state.battleUnits.filter(u => u.side === 'B' && u.alive);
        
        if (aAlive.length === 0) {
            return { winner: 'B', reason: 'All Side A units eliminated!' };
        }
        if (bAlive.length === 0) {
            return { winner: 'A', reason: 'All Side B units eliminated!' };
        }
        
        if (this.armyStats.A.morale <= 0) {
            return { winner: 'B', reason: 'Side A morale collapsed - army routed!' };
        }
        if (this.armyStats.B.morale <= 0) {
            return { winner: 'A', reason: 'Side B morale collapsed - army routed!' };
        }
        
        this.state.turn++;
        
        this.updateArmyStats();
        this.updateSiegeState();
        this.updateWeather();
        
        const allAlive = [...aAlive, ...bAlive];
        allAlive.sort((a, b) => {
            const speedA = a.speed + Math.random() * 4;
            const speedB = b.speed + Math.random() * 4;
            return speedB - speedA;
        });
        
        for (const unit of allAlive) {
            if (unit.alive) {
                this.processUnit(unit);
            }
        }
        
        this.processTerrainDamage();
        this.processWeatherEffects();
        
        this.effects = this.effects.filter(e => e.duration > 0);
        this.effects.forEach(e => e.duration--);
        
        return null;
    }
    
    addLog(message, type) {
        this.logs.push({
            turn: this.state.turn,
            message,
            type,
            timestamp: Date.now()
        });
        
        if (this.logs.length > 300) this.logs.shift();
    }
    
    addEffect(unit, type, extra = {}) {
        this.effects.push({
            unitId: unit.id,
            type,
            duration: 4,
            fresh: true,
            ...extra
        });
    }
    
    addProjectile(from, to) {
        const sprite = this.getProjectileSprite(from);
        this.projectiles.push({
            id: Date.now() + Math.random(),
            fromX: from.x,
            fromY: from.y,
            toX: to.x,
            toY: to.y,
            sprite,
            progress: 0
        });
    }
    
    getProjectileSprite(unit) {
        const name = (unit.name || '').toLowerCase();
        if (name.includes('fire') || name.includes('flame')) return '🔥';
        if (name.includes('ice') || name.includes('frost')) return '❄️';
        if (name.includes('lightning') || name.includes('storm')) return '⚡';
        if (name.includes('arrow') || name.includes('bow') || name.includes('archer')) return '➵';
        if (name.includes('gun') || name.includes('laser')) return '💥';
        if (name.includes('dragon')) return '🔥';
        if (unit.role === 'mage') return '✨';
        if (unit.role === 'ranged') return '➸';
        if (unit.role === 'siege') return '💣';
        if (unit.role === 'warship' || unit.role === 'destroyer') return '💣';
        return '•';
    }
    
    getStats() {
        const sideA = this.state.battleUnits.filter(u => u.side === 'A');
        const sideB = this.state.battleUnits.filter(u => u.side === 'B');
        
        return {
            sideA: {
                total: sideA.length,
                alive: sideA.filter(u => u.alive).length,
                totalHp: sideA.filter(u => u.alive).reduce((s, u) => s + u.hp, 0),
                maxHp: sideA.filter(u => u.alive).reduce((s, u) => s + u.maxHp, 0),
                supply: Math.round(this.armyStats.A.supply),
                morale: Math.round(this.armyStats.A.morale),
                resources: Math.round(this.armyStats.A.resources)
            },
            sideB: {
                total: sideB.length,
                alive: sideB.filter(u => u.alive).length,
                totalHp: sideB.filter(u => u.alive).reduce((s, u) => s + u.hp, 0),
                maxHp: sideB.filter(u => u.alive).reduce((s, u) => s + u.maxHp, 0),
                supply: Math.round(this.armyStats.B.supply),
                morale: Math.round(this.armyStats.B.morale),
                resources: Math.round(this.armyStats.B.resources)
            },
            weather: this.getWeatherEffects()
        };
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BattleEngine };
}
