// ===== BATTLE ENGINE =====

class BattleEngine {
    constructor(gameState) {
        this.state = gameState;
        this.logs = [];
        this.projectiles = [];
        this.effects = [];
    }
    
    // Check if unit can traverse terrain
    canTraverse(unit, x, y) {
        const terrain = this.state.selectedMap.terrain[y]?.[x] || 'g';
        const terrainName = TERRAIN_TYPES[terrain]?.name.toLowerCase() || 'grass';
        const movementType = MOVEMENT_TYPES[unit.movement] || MOVEMENT_TYPES.foot;
        const cost = movementType[terrainName];
        return cost < 100; // Less than 100 means traversable
    }
    
    // Get movement cost based on terrain and unit movement type
    getMovementCost(unit, x, y) {
        const terrain = this.state.selectedMap.terrain[y]?.[x] || 'g';
        const terrainName = TERRAIN_TYPES[terrain]?.name.toLowerCase() || 'grass';
        const movementType = MOVEMENT_TYPES[unit.movement] || MOVEMENT_TYPES.foot;
        return movementType[terrainName] || 1;
    }
    
    // Check if position is valid
    isValidPosition(x, y) {
        return x >= 0 && x < this.state.selectedMap.width && 
               y >= 0 && y < this.state.selectedMap.height;
    }
    
    // Check if cell is occupied
    isOccupied(x, y, excludeUnit = null) {
        return this.state.battleUnits.some(u => 
            u.alive && u.x === x && u.y === y && u !== excludeUnit
        );
    }
    
    // Get distance between two units/positions
    getDistance(a, b) {
        return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
    }
    
    // Simple direct movement towards target - much more reliable than A*
    findNextStep(unit, targetX, targetY) {
        const dx = targetX - unit.x;
        const dy = targetY - unit.y;
        
        // Already at target
        if (dx === 0 && dy === 0) return null;
        
        // Get possible moves sorted by priority
        const moves = [];
        
        // Prioritize moving in the direction of target
        if (dx > 0) moves.push({ x: unit.x + 1, y: unit.y, priority: 10 + Math.abs(dx) });
        if (dx < 0) moves.push({ x: unit.x - 1, y: unit.y, priority: 10 + Math.abs(dx) });
        if (dy > 0) moves.push({ x: unit.x, y: unit.y + 1, priority: 10 + Math.abs(dy) });
        if (dy < 0) moves.push({ x: unit.x, y: unit.y - 1, priority: 10 + Math.abs(dy) });
        
        // Add opposite directions with lower priority (for going around obstacles)
        if (dx <= 0) moves.push({ x: unit.x + 1, y: unit.y, priority: 1 });
        if (dx >= 0) moves.push({ x: unit.x - 1, y: unit.y, priority: 1 });
        if (dy <= 0) moves.push({ x: unit.x, y: unit.y + 1, priority: 1 });
        if (dy >= 0) moves.push({ x: unit.x, y: unit.y - 1, priority: 1 });
        
        // Sort by priority (higher first) with some randomness for variety
        moves.sort((a, b) => (b.priority + Math.random() * 2) - (a.priority + Math.random() * 2));
        
        // Find first valid move
        for (const move of moves) {
            if (this.isValidPosition(move.x, move.y) && 
                !this.isOccupied(move.x, move.y, unit) &&
                this.canTraverse(unit, move.x, move.y)) {
                return move;
            }
        }
        
        // If stuck, try any adjacent unoccupied cell
        const allMoves = [
            { x: unit.x + 1, y: unit.y },
            { x: unit.x - 1, y: unit.y },
            { x: unit.x, y: unit.y + 1 },
            { x: unit.x, y: unit.y - 1 }
        ];
        
        // Shuffle for randomness
        for (let i = allMoves.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allMoves[i], allMoves[j]] = [allMoves[j], allMoves[i]];
        }
        
        for (const move of allMoves) {
            if (this.isValidPosition(move.x, move.y) && 
                !this.isOccupied(move.x, move.y, unit) &&
                this.canTraverse(unit, move.x, move.y)) {
                return move;
            }
        }
        
        return null;
    }
    
    // Get all enemies
    getEnemies(unit) {
        return this.state.battleUnits.filter(u => u.side !== unit.side && u.alive);
    }
    
    // Get all allies
    getAllies(unit) {
        return this.state.battleUnits.filter(u => u.side === unit.side && u.alive && u !== unit);
    }
    
    // Find closest enemy
    findClosestEnemy(unit) {
        const enemies = this.getEnemies(unit);
        if (enemies.length === 0) return null;
        
        let closest = enemies[0];
        let closestDist = this.getDistance(unit, closest);
        
        for (const enemy of enemies) {
            const dist = this.getDistance(unit, enemy);
            if (dist < closestDist) {
                closest = enemy;
                closestDist = dist;
            }
        }
        
        return closest;
    }
    
    // Find best target (considering weaknesses, HP, etc.)
    findBestTarget(unit) {
        const enemies = this.getEnemies(unit);
        if (enemies.length === 0) return null;
        
        // Score targets
        let bestEnemy = enemies[0];
        let bestScore = -Infinity;
        
        for (const enemy of enemies) {
            let score = 100;
            
            // Prefer low HP targets
            score += (1 - enemy.hp / enemy.maxHp) * 50;
            
            // Prefer closer targets
            const dist = this.getDistance(unit, enemy);
            score -= dist * 3;
            
            // Prefer targets in range
            if (dist <= unit.range) score += 40;
            
            // Prefer targets with weakness to our damage type
            if (enemy.weakness && unit.abilities?.some(a => a.type === enemy.weakness)) {
                score += 40;
            }
            
            // Prefer healers and mages
            if (enemy.role === 'healer') score += 25;
            if (enemy.role === 'mage') score += 15;
            
            // Add randomness
            score += Math.random() * 30;
            
            if (score > bestScore) {
                bestScore = score;
                bestEnemy = enemy;
            }
        }
        
        return bestEnemy;
    }
    
    // Find ally that needs healing
    findHealTarget(unit) {
        const allies = this.getAllies(unit);
        const wounded = allies.filter(a => a.hp < a.maxHp * 0.7);
        
        if (wounded.length === 0) return null;
        
        // Prioritize lowest HP allies in range
        const inRange = wounded.filter(a => this.getDistance(unit, a) <= unit.range);
        const targets = inRange.length > 0 ? inRange : wounded;
        
        let lowestHp = targets[0];
        for (const ally of targets) {
            if (ally.hp < lowestHp.hp) lowestHp = ally;
        }
        
        return lowestHp;
    }
    
    // Calculate damage
    calculateDamage(attacker, defender, ability = null) {
        let baseDamage = ability?.damage || attacker.attack;
        let defense = defender.defense;
        
        // Apply buffs/debuffs
        const atkBuff = attacker.buffs?.reduce((sum, b) => sum + (b.attackBonus || 0), 0) || 0;
        const atkDebuff = attacker.debuffs?.reduce((sum, d) => sum + (d.attackDebuff || 0), 0) || 0;
        const defBuff = defender.buffs?.reduce((sum, b) => sum + (b.defenseBonus || 0), 0) || 0;
        const defDebuff = defender.debuffs?.reduce((sum, d) => sum + (d.defenseDebuff || 0), 0) || 0;
        
        baseDamage += atkBuff - atkDebuff;
        defense += defBuff - defDebuff;
        defense = Math.max(0, defense);
        
        // Terrain defense bonus
        const terrain = this.state.selectedMap.terrain[defender.y]?.[defender.x] || 'g';
        defense += TERRAIN_TYPES[terrain]?.defenseBonus || 0;
        
        // Weakness bonus
        if (defender.weakness && ability?.type === defender.weakness) {
            baseDamage *= 2;
        }
        
        // Ship bonus damage to other ships
        if (attacker.isShip && defender.isShip) {
            baseDamage *= 1.5;
        }
        
        // Critical hit (10% base chance)
        const critChance = 0.1 + (attacker.critBonus || 0) / 100;
        const isCrit = Math.random() < critChance;
        if (isCrit) {
            baseDamage *= 1.5;
        }
        
        // Calculate final damage
        const damageReduction = defense / (defense + 50);
        let finalDamage = Math.floor(baseDamage * (1 - damageReduction));
        
        // Random variance (±20%)
        finalDamage = Math.floor(finalDamage * (0.8 + Math.random() * 0.4));
        
        // Minimum 1 damage
        finalDamage = Math.max(1, finalDamage);
        
        return { damage: finalDamage, isCrit };
    }
    
    // Process attack
    attack(attacker, defender) {
        const { damage, isCrit } = this.calculateDamage(attacker, defender);
        
        defender.hp -= damage;
        
        // Break stealth on attack
        if (attacker.stealthed) {
            attacker.stealthed = false;
        }
        
        const critText = isCrit ? ' 💥CRIT!' : '';
        this.addLog(`${attacker.sprite} ${attacker.name} → ${defender.name} (${damage} dmg${critText})`, 'attack');
        
        // Create effects
        this.addEffect(attacker, 'attack');
        this.addEffect(defender, 'damage');
        
        if (defender.hp <= 0) {
            this.killUnit(defender);
        }
        
        return damage;
    }
    
    // Use ability
    useAbility(unit, ability, target = null) {
        ability.currentCooldown = ability.cooldown;
        
        if (ability.heal && target) {
            const healAmount = ability.heal + (unit.healPower || 0);
            
            if (ability.aoe) {
                const allies = this.getAllies(unit).filter(a => 
                    this.getDistance(unit, a) <= ability.aoe && a.hp < a.maxHp
                );
                allies.forEach(ally => {
                    ally.hp = Math.min(ally.maxHp, ally.hp + healAmount);
                    this.addEffect(ally, 'heal');
                });
                this.addLog(`💚 ${unit.name} heals ${allies.length} allies for ${healAmount} HP!`, 'heal');
            } else {
                target.hp = Math.min(target.maxHp, target.hp + healAmount);
                this.addLog(`💚 ${unit.name} heals ${target.name} for ${healAmount} HP!`, 'heal');
                this.addEffect(target, 'heal');
            }
            
            this.addEffect(unit, 'ability');
            return;
        }
        
        if (ability.buff) {
            const targets = ability.teamWide 
                ? [unit, ...this.getAllies(unit).filter(a => 
                    ability.aoeRange ? this.getDistance(unit, a) <= ability.aoeRange : true
                  )]
                : ability.selfOnly ? [unit] : [target || unit];
            
            targets.forEach(t => {
                if (!t.buffs) t.buffs = [];
                t.buffs.push({
                    name: ability.name,
                    attackBonus: ability.attackBonus || 0,
                    defenseBonus: ability.defenseBonus || 0,
                    speedBonus: ability.speedBonus || 0,
                    hpBonus: ability.hpBonus || 0,
                    duration: ability.duration || 3
                });
                
                if (ability.hpBonus) {
                    t.hp += ability.hpBonus;
                    t.maxHp += ability.hpBonus;
                }
            });
            
            this.addLog(`✨ ${unit.name} uses ${ability.name}!`, 'ability');
            this.addEffect(unit, 'ability');
            return;
        }
        
        if (ability.debuff && target) {
            if (!target.debuffs) target.debuffs = [];
            target.debuffs.push({
                name: ability.name,
                attackDebuff: ability.attackDebuff || 0,
                defenseDebuff: ability.defenseDebuff || 0,
                speedDebuff: ability.speedDebuff || 0,
                duration: ability.duration || 3
            });
            
            this.addLog(`🔻 ${unit.name} debuffs ${target.name}!`, 'ability');
            this.addEffect(target, 'debuff');
            return;
        }
        
        if (ability.summon) {
            const summonData = SUMMONS[ability.summon];
            if (summonData) {
                const count = ability.count || 1;
                let summoned = 0;
                
                for (let i = 0; i < count; i++) {
                    const spots = [];
                    for (let dx = -2; dx <= 2; dx++) {
                        for (let dy = -2; dy <= 2; dy++) {
                            const nx = unit.x + dx;
                            const ny = unit.y + dy;
                            if (this.isValidPosition(nx, ny) && !this.isOccupied(nx, ny)) {
                                spots.push({ x: nx, y: ny });
                            }
                        }
                    }
                    
                    if (spots.length > 0) {
                        const spot = spots[Math.floor(Math.random() * spots.length)];
                        const summonedUnit = {
                            id: `summon_${Date.now()}_${Math.random()}`,
                            ...summonData,
                            x: spot.x,
                            y: spot.y,
                            side: unit.side,
                            maxHp: summonData.hp,
                            alive: true,
                            isSummon: true,
                            summonDuration: summonData.duration,
                            buffs: [],
                            debuffs: [],
                            abilities: []
                        };
                        this.state.battleUnits.push(summonedUnit);
                        summoned++;
                    }
                }
                
                if (summoned > 0) {
                    this.addLog(`🌀 ${unit.name} summons ${summoned} ${summonData.name}(s)!`, 'ability');
                }
            }
            this.addEffect(unit, 'ability');
            return;
        }
        
        if (ability.stealth) {
            unit.stealthed = true;
            unit.stealthDuration = ability.duration || 3;
            this.addLog(`👤 ${unit.name} vanishes!`, 'ability');
            this.addEffect(unit, 'ability');
            return;
        }
        
        if (ability.damage && target) {
            let damage = ability.damage;
            
            if (target.weakness && ability.type === target.weakness) {
                damage *= 2;
                this.addLog(`⚡ ${target.name} is weak to ${ability.type}!`, 'info');
            }
            
            if (ability.aoe) {
                const enemies = this.getEnemies(unit).filter(e => 
                    this.getDistance(target, e) <= ability.aoe
                );
                
                let totalDamage = 0;
                enemies.forEach(enemy => {
                    const { damage: dmg } = this.calculateDamage(unit, enemy, ability);
                    enemy.hp -= dmg;
                    totalDamage += dmg;
                    this.addEffect(enemy, 'damage');
                    
                    if (enemy.hp <= 0) {
                        this.killUnit(enemy);
                    }
                });
                
                this.addLog(`💥 ${unit.name} uses ${ability.name}! (${totalDamage} total dmg)`, 'ability');
            } else {
                const { damage: dmg, isCrit } = this.calculateDamage(unit, target, ability);
                target.hp -= dmg;
                
                const critText = isCrit ? ' CRIT!' : '';
                this.addLog(`✨ ${unit.name} → ${ability.name} → ${target.name} (${dmg}${critText})`, 'ability');
                
                this.addEffect(target, 'damage');
                
                if (ability.lifesteal) {
                    const healAmount = Math.floor(dmg * (ability.lifesteal / 100));
                    unit.hp = Math.min(unit.maxHp, unit.hp + healAmount);
                }
                
                if (ability.dot) {
                    if (!target.dots) target.dots = [];
                    target.dots.push({
                        damage: ability.dot,
                        duration: ability.duration || 3,
                        type: ability.type
                    });
                }
                
                if (target.hp <= 0) {
                    this.killUnit(target);
                }
            }
            
            if (ability.selfDamage) {
                unit.hp -= ability.selfDamage;
                if (unit.hp <= 0) {
                    this.killUnit(unit);
                    this.addLog(`💀 ${unit.name} sacrificed themselves!`, 'death');
                }
            }
            
            this.addEffect(unit, 'ability');
        }
    }
    
    // Kill unit
    killUnit(unit) {
        unit.alive = false;
        unit.hp = 0;
        this.addLog(`💀 ${unit.name} destroyed!`, 'death');
        this.addEffect(unit, 'death');
    }
    
    // Move unit towards target
    moveUnit(unit, targetX, targetY) {
        // Calculate how many steps based on speed
        const steps = Math.max(1, Math.floor(unit.speed / 3));
        
        for (let i = 0; i < steps; i++) {
            if (unit.x === targetX && unit.y === targetY) break;
            
            const nextStep = this.findNextStep(unit, targetX, targetY);
            if (nextStep) {
                unit.x = nextStep.x;
                unit.y = nextStep.y;
            } else {
                break; // Can't move
            }
        }
    }
    
    // Process single unit's turn
    processUnitTurn(unit) {
        if (!unit.alive) return;
        
        // Process stealth
        if (unit.stealthed) {
            unit.stealthDuration--;
            if (unit.stealthDuration <= 0) {
                unit.stealthed = false;
            }
        }
        
        // Reduce ability cooldowns
        if (unit.abilities) {
            unit.abilities.forEach(a => {
                if (a.currentCooldown > 0) a.currentCooldown--;
            });
        }
        
        // Process buffs
        if (unit.buffs) {
            unit.buffs = unit.buffs.filter(b => {
                b.duration--;
                if (b.duration <= 0 && b.hpBonus) {
                    unit.maxHp -= b.hpBonus;
                    unit.hp = Math.min(unit.hp, unit.maxHp);
                }
                return b.duration > 0;
            });
        }
        
        // Process debuffs
        if (unit.debuffs) {
            unit.debuffs = unit.debuffs.filter(d => {
                d.duration--;
                return d.duration > 0;
            });
        }
        
        // Process DOTs
        if (unit.dots && unit.dots.length > 0) {
            unit.dots = unit.dots.filter(dot => {
                unit.hp -= dot.damage;
                dot.duration--;
                
                if (unit.hp <= 0) {
                    this.killUnit(unit);
                }
                
                return dot.duration > 0 && unit.alive;
            });
        }
        
        // Process summon duration
        if (unit.isSummon) {
            unit.summonDuration--;
            if (unit.summonDuration <= 0) {
                unit.alive = false;
                this.addLog(`${unit.name} fades away...`, 'info');
                return;
            }
        }
        
        if (!unit.alive) return;
        
        const enemies = this.getEnemies(unit);
        if (enemies.length === 0) return;
        
        // Healers prioritize healing
        if ((unit.role === 'healer' || unit.healPower > 0) && Math.random() < 0.7) {
            const healTarget = this.findHealTarget(unit);
            if (healTarget) {
                const healAbility = unit.abilities?.find(a => a.heal && a.currentCooldown === 0);
                if (healAbility && this.getDistance(unit, healTarget) <= (healAbility.range || unit.range)) {
                    this.useAbility(unit, healAbility, healTarget);
                    return;
                } else {
                    this.moveUnit(unit, healTarget.x, healTarget.y);
                    return;
                }
            }
        }
        
        // Find target
        const target = this.findBestTarget(unit);
        if (!target) return;
        
        const distance = this.getDistance(unit, target);
        
        // Check for ability use
        if (unit.abilities && unit.abilities.length > 0 && Math.random() < 0.4) {
            // Damage abilities
            const damageAbility = unit.abilities.find(a => 
                a.currentCooldown === 0 && 
                a.damage && 
                distance <= (a.range || unit.range)
            );
            
            if (damageAbility) {
                this.useAbility(unit, damageAbility, target);
                return;
            }
            
            // Buff abilities
            const buffAbility = unit.abilities.find(a => 
                a.currentCooldown === 0 && 
                a.buff
            );
            
            if (buffAbility && Math.random() < 0.3) {
                this.useAbility(unit, buffAbility);
                return;
            }
            
            // Summon abilities
            const summonAbility = unit.abilities.find(a => 
                a.currentCooldown === 0 && 
                a.summon
            );
            
            if (summonAbility && Math.random() < 0.3) {
                this.useAbility(unit, summonAbility);
                return;
            }
        }
        
        // Attack if in range
        if (distance <= unit.range) {
            this.attack(unit, target);
        } else {
            // Move towards target
            this.moveUnit(unit, target.x, target.y);
            
            // Attack if now in range
            const newDistance = this.getDistance(unit, target);
            if (newDistance <= unit.range) {
                this.attack(unit, target);
            }
        }
    }
    
    // Process terrain damage
    processTerrainDamage() {
        this.state.battleUnits.filter(u => u.alive).forEach(unit => {
            const terrain = this.state.selectedMap.terrain[unit.y]?.[unit.x] || 'g';
            const terrainData = TERRAIN_TYPES[terrain];
            
            if (terrainData?.damage) {
                // Flying and ethereal units avoid most terrain damage
                if (unit.movement === 'flying' || unit.movement === 'ethereal') return;
                // Ships don't take water damage
                if (unit.movement === 'naval' && terrainData.name === 'Water') return;
                if (unit.movement === 'swimming' && terrainData.name === 'Water') return;
                
                unit.hp -= terrainData.damage;
                
                if (unit.hp <= 0) {
                    this.killUnit(unit);
                    this.addLog(`${unit.name} died from ${terrainData.name}!`, 'death');
                }
            }
        });
    }
    
    // Process full turn
    processTurn() {
        const aliveUnits = this.state.battleUnits.filter(u => u.alive);
        const sideAAlive = aliveUnits.filter(u => u.side === 'A');
        const sideBAlive = aliveUnits.filter(u => u.side === 'B');
        
        // Check victory conditions
        if (sideAAlive.length === 0) {
            return { winner: 'B', reason: 'All Side A units eliminated' };
        }
        if (sideBAlive.length === 0) {
            return { winner: 'A', reason: 'All Side B units eliminated' };
        }
        
        // Sort by speed with randomness
        aliveUnits.sort((a, b) => {
            const speedA = a.speed + (a.buffs?.reduce((s, buff) => s + (buff.speedBonus || 0), 0) || 0);
            const speedB = b.speed + (b.buffs?.reduce((s, buff) => s + (buff.speedBonus || 0), 0) || 0);
            return (speedB + Math.random() * 3) - (speedA + Math.random() * 3);
        });
        
        // Process each unit
        for (const unit of aliveUnits) {
            if (unit.alive) {
                this.processUnitTurn(unit);
            }
        }
        
        // Process terrain damage
        this.processTerrainDamage();
        
        // Clear expired effects
        this.effects = this.effects.filter(e => e.duration > 0);
        this.effects.forEach(e => e.duration--);
        
        this.state.turn++;
        
        return null;
    }
    
    // Add log entry
    addLog(message, type) {
        this.logs.push({
            turn: this.state.turn,
            message,
            type,
            timestamp: Date.now()
        });
        
        if (this.logs.length > 200) {
            this.logs.shift();
        }
    }
    
    // Add visual effect
    addEffect(unit, type) {
        this.effects.push({
            unitId: unit.id,
            type,
            duration: 2
        });
    }
    
    // Add projectile
    addProjectile(from, to, sprite) {
        this.projectiles.push({
            fromX: from.x,
            fromY: from.y,
            toX: to.x,
            toY: to.y,
            sprite,
            progress: 0
        });
    }
    
    // Get battle statistics
    getStats() {
        const sideA = this.state.battleUnits.filter(u => u.side === 'A');
        const sideB = this.state.battleUnits.filter(u => u.side === 'B');
        
        return {
            sideA: {
                total: sideA.length,
                alive: sideA.filter(u => u.alive).length,
                totalHp: sideA.filter(u => u.alive).reduce((s, u) => s + u.hp, 0),
                maxHp: sideA.filter(u => u.alive).reduce((s, u) => s + u.maxHp, 0)
            },
            sideB: {
                total: sideB.length,
                alive: sideB.filter(u => u.alive).length,
                totalHp: sideB.filter(u => u.alive).reduce((s, u) => s + u.hp, 0),
                maxHp: sideB.filter(u => u.alive).reduce((s, u) => s + u.maxHp, 0)
            }
        };
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BattleEngine };
}
