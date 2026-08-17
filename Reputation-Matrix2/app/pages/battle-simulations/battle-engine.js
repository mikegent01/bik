const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
  const field = document.createElement('textarea');
  field.value = text;
  field.setAttribute('readonly', '');
  field.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
  document.body.appendChild(field);
  field.select();
  const copied = document.execCommand('copy');
  field.remove();
  return copied ? Promise.resolve() : Promise.reject(new Error('Copy unavailable'));
}

/**
 * Reusable, dependency-free action-command runtime.
 *
 * Encounter modules provide combatant limits, sprite animation groups,
 * challenge records, effect objects/functions, and a resultFor(state) mapper.
 * The HTML contract is intentionally data-attribute based so future encounter
 * pages can retain their own art direction without forking the input engine.
 */
export class BattleSimulation {
  constructor(root, config) {
    if (!root) throw new Error('BattleSimulation requires a root element.');
    this.root = root;
    this.config = config;
    this.arena = root.querySelector('[data-arena]');
    this.els = this.collectElements();
    this.state = this.freshState();
    this.keysHeld = new Set();
    this.pointer = null;
    this.active = null;
    this.running = false;
    this.paused = false;
    this.muted = window.WarioSiteSounds ? !window.WarioSiteSounds.enabled : false;
    this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.animationState = { archie: 'mounted', enemy: 'idle', frame: 0, last: 0 };
    this.raf = 0;
    this.lastFrame = performance.now();
    this.transitionTimer = 0;
    this.bindControls();
    const muteButton = document.querySelector('[data-mute]');
    if (muteButton && this.muted) {
      muteButton.setAttribute('aria-pressed', 'true');
      muteButton.textContent = 'Sound off';
      muteButton.setAttribute('aria-label', 'Enable battle sounds');
    }
    this.resetPresentation();
    this.raf = requestAnimationFrame((time) => this.tick(time));
  }

  collectElements() {
    const one = (selector) => this.root.querySelector(selector);
    return {
      archie: one('[data-archie]'),
      archieSprite: one('[data-archie-sprite]'),
      scorncrow: one('[data-scorncrow]'),
      scorncrowSprite: one('[data-scorncrow-sprite]'),
      archieHp: one('[data-archie-hp]'),
      archieHpLabel: one('[data-archie-hp-label]'),
      nimbus: one('[data-nimbus]'),
      nimbusLabel: one('[data-nimbus-label]'),
      scornHp: one('[data-scorn-hp]'),
      scornHpLabel: one('[data-scorn-hp-label]'),
      scornDamage: one('[data-scorn-damage]'),
      phaseCount: one('[data-phase-count]'),
      phaseName: one('[data-phase-name]'),
      phaseTimer: one('[data-phase-timer]'),
      qtePanel: one('[data-qte-panel]'),
      qteKicker: one('[data-qte-kicker]'),
      qteCommand: one('[data-qte-command]'),
      qteTitle: one('[data-qte-title]'),
      qteInstruction: one('[data-qte-instruction]'),
      sequenceTrack: one('[data-sequence-track]'),
      timingTrack: one('[data-timing-track]'),
      timingZone: one('[data-timing-zone]'),
      timingMarker: one('[data-timing-marker]'),
      chargeTrack: one('[data-charge-track]'),
      chargeMeter: one('[data-charge-meter]'),
      pilotGate: one('[data-pilot-gate]'),
      hazards: [...this.root.querySelectorAll('[data-hazard]')],
      impactLayer: one('[data-impact-layer]'),
      toast: one('[data-battle-toast]'),
      startScreen: one('[data-start-screen]'),
      resultScreen: one('[data-result-screen]'),
      pauseScreen: one('[data-pause-screen]'),
      inputMode: one('[data-input-mode]'),
      liveMessage: one('[data-live-message]'),
      resultTitle: one('[data-result-title]'),
      resultSummary: one('[data-result-summary]'),
      resultArchieDamage: one('[data-result-archie-damage]'),
      resultArchieStatus: one('[data-result-archie-status]'),
      resultArchieImage: one('[data-result-archie-image]'),
      resultScornDamage: one('[data-result-scorn-damage]'),
      resultScornStatus: one('[data-result-scorn-status]'),
      resultNimbus: one('[data-result-nimbus]'),
      resultSuccesses: one('[data-result-successes]'),
      resultTier: one('[data-result-tier]'),
      resultCopyNotice: one('[data-result-copy-notice]')
    };
  }

  freshState() {
    return {
      archieHp: this.config.combatants.archie.maxHp,
      scorncrowHp: this.config.combatants.enemy.maxHp,
      nimbus: this.config.combatants.archie.mountMax,
      challengeIndex: -1,
      successes: 0,
      misses: 0,
      outcomes: [],
      fallen: false,
      ko: false,
      position: { ...this.config.startPosition }
    };
  }

  bindControls() {
    this.root.querySelector('[data-start-battle]')?.addEventListener('click', () => this.start());
    this.root.querySelector('[data-restart]')?.addEventListener('click', () => this.restart());
    this.root.querySelector('[data-copy-result]')?.addEventListener('click', () => this.copyResult());
    this.root.querySelector('[data-reduce-motion]')?.addEventListener('change', (event) => {
      this.reducedMotion = event.currentTarget.checked;
      this.root.classList.toggle('reduced-motion', this.reducedMotion);
    });

    document.querySelector('[data-copy-link]')?.addEventListener('click', () => {
      copyText(location.href.split('#')[0]).then(() => this.announce('Direct player link copied.'));
    });
    document.querySelector('[data-mute]')?.addEventListener('click', (event) => this.toggleMute(event.currentTarget));
    document.querySelector('[data-pause]')?.addEventListener('click', () => this.togglePause());
    document.querySelector('[data-reset]')?.addEventListener('click', () => {
      if (this.running || !this.els.resultScreen.hidden) this.restart();
      else this.resetPresentation();
    });
    this.root.querySelector('[data-resume]')?.addEventListener('click', () => this.togglePause(false));

    document.addEventListener('keydown', (event) => this.onKeyDown(event));
    document.addEventListener('keyup', (event) => this.onKeyUp(event));
    document.addEventListener('visibilitychange', () => {
      if (document.hidden && this.running && !this.paused) this.togglePause(true);
    });

    this.arena.addEventListener('pointerdown', (event) => this.onArenaPointerDown(event));
    this.arena.addEventListener('pointermove', (event) => this.onArenaPointerMove(event));
    this.arena.addEventListener('pointerup', (event) => this.onArenaPointerUp(event));
    this.arena.addEventListener('pointercancel', (event) => this.onArenaPointerUp(event));

    this.root.querySelectorAll('[data-control]').forEach((button) => {
      const token = button.dataset.control;
      button.addEventListener('pointerdown', (event) => {
        event.preventDefault();
        event.stopPropagation();
        button.setPointerCapture?.(event.pointerId);
        button.classList.add('active');
        this.setInputMode(event.pointerType === 'touch' ? 'touch controls' : 'pointer controls');
        if (token === 'action') this.actionDown();
        else {
          this.keysHeld.add(token);
          this.inputToken(token);
        }
      });
      const release = (event) => {
        event.preventDefault();
        event.stopPropagation();
        button.classList.remove('active');
        if (token === 'action') this.actionUp();
        else this.keysHeld.delete(token);
      };
      button.addEventListener('pointerup', release);
      button.addEventListener('pointercancel', release);
      button.addEventListener('contextmenu', (event) => event.preventDefault());
    });
  }

  resetPresentation() {
    this.state = this.freshState();
    this.active = null;
    this.running = false;
    this.paused = false;
    this.keysHeld.clear();
    this.state.position = { ...this.config.startPosition };
    this.placeArchie();
    this.setAnimation('archie', 'mounted');
    this.setAnimation('enemy', 'idle');
    this.updateHud();
    this.hideChallengeUi();
    this.els.resultScreen.hidden = true;
    this.els.pauseScreen.hidden = true;
    this.els.startScreen.hidden = false;
    this.els.archie.classList.remove('falling', 'hit', 'attacking', 'dodging');
    this.els.scorncrow.classList.remove('hit', 'attacking', 'dodging');
    this.els.impactLayer.replaceChildren();
    this.els.phaseCount.textContent = 'Opening sequence';
    this.els.phaseName.textContent = 'Awaiting pilot';
    this.els.phaseTimer.style.width = '0%';
    this.els.liveMessage.textContent = 'Enter the storm when ready.';
  }

  start() {
    if (this.running) return;
    const reduceChoice = this.root.querySelector('[data-reduce-motion]');
    if (reduceChoice) this.reducedMotion = reduceChoice.checked || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.root.classList.toggle('reduced-motion', this.reducedMotion);
    this.running = true;
    this.paused = false;
    this.els.startScreen.hidden = true;
    this.arena.focus({ preventScroll: true });
    this.sound('open');
    this.showToast(this.config.openingToast, 'good');
    this.announce(this.config.openingAnnouncement);
    this.transitionTimer = window.setTimeout(() => this.beginNextChallenge(), 760);
  }

  restart() {
    window.clearTimeout(this.transitionTimer);
    this.resetPresentation();
    this.start();
  }

  beginNextChallenge() {
    if (!this.running) return;
    if (this.checkTerminal()) return;
    this.state.challengeIndex += 1;
    if (this.state.challengeIndex >= this.config.challenges.length) {
      this.finish();
      return;
    }

    const definition = this.config.challenges[this.state.challengeIndex];
    this.active = {
      definition,
      elapsed: 0,
      resolving: false,
      sequenceIndex: 0,
      mistakes: 0,
      chargeStartedAt: null,
      chargeValue: 0,
      gateIndex: 0,
      gatesCleared: 0,
      hitHazards: new Set()
    };

    this.els.phaseCount.textContent = `Command ${this.state.challengeIndex + 1} / ${this.config.challenges.length}`;
    this.els.phaseName.textContent = definition.shortName;
    this.renderChallenge(definition);
    this.setAnimation('archie', definition.archieAnimation || 'mounted');
    this.setAnimation('enemy', definition.enemyAnimation || 'idle');
    this.announce(`${definition.title}. ${definition.instruction}`);

    if (definition.type === 'pilot') this.startPilot(definition);
  }

  renderChallenge(challenge) {
    this.hideChallengeUi();
    this.els.qtePanel.hidden = false;
    this.els.qteKicker.textContent = challenge.kicker || 'Action command';
    this.els.qteCommand.textContent = challenge.command || '◆';
    this.els.qteTitle.textContent = challenge.title;
    this.els.qteInstruction.textContent = challenge.instruction;

    if (challenge.type === 'sequence') {
      this.els.sequenceTrack.hidden = false;
      this.els.sequenceTrack.innerHTML = '';
      challenge.sequence.forEach((token) => {
        const key = document.createElement('span');
        key.className = 'sequence-key';
        key.textContent = this.tokenGlyph(token);
        key.dataset.token = token;
        this.els.sequenceTrack.appendChild(key);
      });
    }

    if (challenge.type === 'timing') {
      this.els.timingTrack.hidden = false;
      const [start, end] = challenge.zone;
      this.els.timingZone.style.left = `${start * 100}%`;
      this.els.timingZone.style.width = `${(end - start) * 100}%`;
      this.els.timingMarker.style.left = '0%';
    }

    if (challenge.type === 'charge') {
      this.els.chargeTrack.hidden = false;
      this.els.chargeMeter.style.width = '0%';
    }
  }

  hideChallengeUi() {
    this.els.qtePanel.hidden = true;
    this.els.sequenceTrack.hidden = true;
    this.els.timingTrack.hidden = true;
    this.els.chargeTrack.hidden = true;
    this.els.pilotGate.hidden = true;
    this.els.hazards.forEach((hazard) => {
      hazard.hidden = true;
      hazard.classList.remove('collision');
    });
  }

  startPilot(challenge) {
    this.state.position = { ...(challenge.startPosition || this.config.startPosition) };
    this.placeArchie();
    challenge.hazards.forEach((point, index) => {
      const hazard = this.els.hazards[index];
      if (!hazard) return;
      hazard.hidden = false;
      hazard.style.left = `${point.x * 100}%`;
      hazard.style.top = `${point.y * 100}%`;
    });
    this.showPilotGate();
  }

  showPilotGate() {
    if (!this.active?.definition || this.active.definition.type !== 'pilot') return;
    const point = this.active.definition.gates[this.active.gateIndex];
    if (!point) return;
    this.els.pilotGate.hidden = false;
    this.els.pilotGate.classList.remove('cleared');
    this.els.pilotGate.style.left = `${point.x * 100}%`;
    this.els.pilotGate.style.top = `${point.y * 100}%`;
  }

  tick(time) {
    const delta = Math.min(50, time - this.lastFrame || 0);
    this.lastFrame = time;
    this.animateSprites(time);

    if (this.running && !this.paused && this.active && !this.active.resolving) {
      this.active.elapsed += delta;
      const challenge = this.active.definition;
      const remaining = clamp(1 - this.active.elapsed / challenge.duration, 0, 1);
      this.els.phaseTimer.style.width = `${remaining * 100}%`;

      this.moveFromHeldKeys(delta);
      if (challenge.type === 'pilot') this.updatePilot();
      if (challenge.type === 'timing') this.updateTiming();
      if (challenge.type === 'charge') this.updateCharge();

      if (this.active && !this.active.resolving && this.active.elapsed >= challenge.duration) {
        this.resolveChallenge(false, { reason: 'timeout', gatesCleared: this.active.gatesCleared });
      }
    }

    this.raf = requestAnimationFrame((next) => this.tick(next));
  }

  animateSprites(time) {
    if (this.reducedMotion || time - this.animationState.last < 180) return;
    this.animationState.last = time;
    this.animationState.frame += 1;
    const archieFrames = this.config.animations.archie[this.animationState.archie] || this.config.animations.archie.mounted;
    const enemyFrames = this.config.animations.enemy[this.animationState.enemy] || this.config.animations.enemy.idle;
    this.els.archieSprite.src = archieFrames[this.animationState.frame % archieFrames.length];
    this.els.scorncrowSprite.src = enemyFrames[this.animationState.frame % enemyFrames.length];
  }

  setAnimation(who, name) {
    this.animationState[who] = name;
    this.animationState.frame = 0;
    const groups = who === 'archie' ? this.config.animations.archie : this.config.animations.enemy;
    const fallback = who === 'archie' ? groups.mounted : groups.idle;
    const frames = groups[name] || fallback;
    const sprite = who === 'archie' ? this.els.archieSprite : this.els.scorncrowSprite;
    if (frames?.[0]) sprite.src = frames[0];
  }

  updateTiming() {
    const challenge = this.active.definition;
    const cycle = challenge.cycle || 1050;
    const progress = (this.active.elapsed % cycle) / cycle;
    const marker = progress <= 0.5 ? progress * 2 : (1 - progress) * 2;
    this.active.marker = marker;
    this.els.timingMarker.style.left = `calc(${marker * 100}% - 2px)`;
  }

  updateCharge() {
    if (this.active.chargeStartedAt === null) return;
    const challenge = this.active.definition;
    const value = clamp((this.active.elapsed - this.active.chargeStartedAt) / challenge.chargeTime, 0, 1.08);
    this.active.chargeValue = value;
    this.els.chargeMeter.style.width = `${Math.min(1, value) * 100}%`;
    if (value >= challenge.overchargeAt) this.resolveChallenge(false, { reason: 'overcharge', charge: value });
  }

  updatePilot() {
    const challenge = this.active.definition;
    const gate = challenge.gates[this.active.gateIndex];
    if (gate && this.pointDistance(this.state.position, gate) <= (challenge.gateRadius || 0.105)) {
      this.active.gatesCleared += 1;
      this.active.gateIndex += 1;
      this.els.pilotGate.classList.add('cleared');
      this.sound('coin');
      this.announce(`Storm gate ${this.active.gatesCleared} cleared.`);
      if (this.active.gateIndex >= challenge.gates.length) {
        this.resolveChallenge(true, { gatesCleared: this.active.gatesCleared });
        return;
      }
      window.setTimeout(() => this.showPilotGate(), 210);
    }

    challenge.hazards.forEach((hazardPoint, index) => {
      if (this.active.hitHazards.has(index)) return;
      const dx = Math.abs(this.state.position.x - hazardPoint.x);
      const dy = Math.abs(this.state.position.y - hazardPoint.y);
      if (dx < 0.047 && dy < 0.27) {
        this.active.hitHazards.add(index);
        const hazard = this.els.hazards[index];
        hazard?.classList.add('collision');
        this.applyEffect(challenge.hazardEffect || { archieDamage: 3, nimbusDamage: 8 });
        this.showToast('Root strike! Nimbus buckles.', 'bad');
        this.sound('error');
        if (this.checkTerminal()) return;
      }
    });
  }

  pointDistance(a, b) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

  moveFromHeldKeys(delta) {
    if (!this.running || this.paused) return;
    const speed = (this.active?.definition.moveSpeed || this.config.moveSpeed) * delta;
    let dx = 0;
    let dy = 0;
    if (this.keysHeld.has('left')) dx -= speed;
    if (this.keysHeld.has('right')) dx += speed;
    if (this.keysHeld.has('up')) dy -= speed;
    if (this.keysHeld.has('down')) dy += speed;
    if (!dx && !dy) return;
    this.state.position.x = clamp(this.state.position.x + dx, 0.06, 0.84);
    this.state.position.y = clamp(this.state.position.y + dy, 0.17, 0.82);
    this.placeArchie();
  }

  placeArchie() {
    this.els.archie.style.left = `${this.state.position.x * 100}%`;
    this.els.archie.style.top = `${this.state.position.y * 100}%`;
  }

  onKeyDown(event) {
    if ((event.key === 'p' || event.key === 'P' || event.key === 'Escape') && this.running) {
      event.preventDefault();
      if (!event.repeat) this.togglePause();
      return;
    }
    if (!this.running || this.paused || event.metaKey || event.ctrlKey || event.altKey) return;
    const token = this.keyToken(event.code);
    if (!token) return;
    event.preventDefault();
    this.setInputMode('keyboard');
    if (token === 'action') {
      if (!event.repeat) this.actionDown();
      return;
    }
    this.keysHeld.add(token);
    if (!event.repeat) this.inputToken(token);
  }

  onKeyUp(event) {
    const token = this.keyToken(event.code);
    if (!token) return;
    if (token === 'action') this.actionUp();
    else this.keysHeld.delete(token);
  }

  keyToken(code) {
    return {
      ArrowUp: 'up', KeyW: 'up',
      ArrowDown: 'down', KeyS: 'down',
      ArrowLeft: 'left', KeyA: 'left',
      ArrowRight: 'right', KeyD: 'right',
      Space: 'action', Enter: 'action'
    }[code] || null;
  }

  onArenaPointerDown(event) {
    if (!this.running || this.paused || event.target.closest('button,a,input') || event.target.closest('[data-start-screen],[data-result-screen],[data-pause-screen]')) return;
    this.arena.setPointerCapture?.(event.pointerId);
    this.pointer = { id: event.pointerId, x: event.clientX, y: event.clientY, moved: false, type: event.pointerType };
    this.setInputMode(event.pointerType === 'touch' ? 'touch / swipe' : 'mouse / pointer');
    this.moveArchieToPointer(event);
    if (this.active?.definition.type === 'charge') this.actionDown();
  }

  onArenaPointerMove(event) {
    if (!this.running || this.paused) return;
    if (event.pointerType === 'mouse' || (this.pointer && this.pointer.id === event.pointerId)) {
      this.moveArchieToPointer(event);
      if (this.pointer) {
        const distance = Math.hypot(event.clientX - this.pointer.x, event.clientY - this.pointer.y);
        if (distance > 12) this.pointer.moved = true;
      }
    }
  }

  onArenaPointerUp(event) {
    if (!this.pointer || this.pointer.id !== event.pointerId) return;
    const start = this.pointer;
    this.pointer = null;
    if (!this.running || this.paused) return;
    const dx = event.clientX - start.x;
    const dy = event.clientY - start.y;
    const distance = Math.hypot(dx, dy);

    if (this.active?.definition.type === 'charge') {
      this.actionUp();
      return;
    }
    if (distance >= 38) {
      const token = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : (dy > 0 ? 'down' : 'up');
      this.inputToken(token);
    } else {
      this.inputToken('action');
    }
  }

  moveArchieToPointer(event) {
    const bounds = this.arena.getBoundingClientRect();
    this.state.position.x = clamp((event.clientX - bounds.left) / bounds.width, 0.06, 0.84);
    this.state.position.y = clamp((event.clientY - bounds.top) / bounds.height, 0.17, 0.82);
    this.placeArchie();
  }

  actionDown() {
    if (!this.running || this.paused || !this.active || this.active.resolving) return;
    if (this.active.definition.type === 'charge') {
      if (this.active.chargeStartedAt === null) {
        this.active.chargeStartedAt = this.active.elapsed;
        this.setAnimation('archie', 'charge');
        this.announce('Charging. Release inside the gold band.');
      }
      return;
    }
    this.inputToken('action');
  }

  actionUp() {
    if (!this.running || this.paused || !this.active || this.active.resolving) return;
    if (this.active.definition.type !== 'charge' || this.active.chargeStartedAt === null) return;
    const challenge = this.active.definition;
    const value = this.active.chargeValue;
    const success = value >= challenge.chargeZone[0] && value <= challenge.chargeZone[1];
    this.resolveChallenge(success, { reason: success ? 'charged' : 'bad-release', charge: value });
  }

  inputToken(token) {
    if (!this.running || this.paused || !this.active || this.active.resolving) return;
    const challenge = this.active.definition;
    if (challenge.type === 'pilot' || challenge.type === 'charge') return;

    if (challenge.type === 'direction' || challenge.type === 'reaction') {
      if (challenge.accept.includes(token)) this.resolveChallenge(true, { token });
      else if (challenge.failOnWrong) this.resolveChallenge(false, { reason: 'wrong-direction', token });
      else this.markWrongInput();
      return;
    }

    if (challenge.type === 'timing') {
      if (token !== 'action') {
        this.markWrongInput();
        return;
      }
      const marker = this.active.marker || 0;
      this.resolveChallenge(marker >= challenge.zone[0] && marker <= challenge.zone[1], { marker });
      return;
    }

    if (challenge.type === 'sequence') {
      const expected = challenge.sequence[this.active.sequenceIndex];
      const keys = [...this.els.sequenceTrack.children];
      if (token === expected) {
        keys[this.active.sequenceIndex]?.classList.add('done');
        this.active.sequenceIndex += 1;
        this.sound('select');
        if (this.active.sequenceIndex >= challenge.sequence.length) this.resolveChallenge(true, { mistakes: this.active.mistakes });
      } else {
        this.active.mistakes += 1;
        const current = keys[this.active.sequenceIndex];
        current?.classList.add('wrong');
        window.setTimeout(() => current?.classList.remove('wrong'), 250);
        this.sound('error');
        this.announce(`Wrong input. ${challenge.maxMistakes - this.active.mistakes} mistakes remain.`);
        if (this.active.mistakes >= challenge.maxMistakes) this.resolveChallenge(false, { reason: 'too-many-mistakes', mistakes: this.active.mistakes });
      }
    }
  }

  markWrongInput() {
    this.active.mistakes += 1;
    this.sound('error');
    this.showToast('Wrong command—recover!', 'bad');
  }

  resolveChallenge(success, detail = {}) {
    if (!this.active || this.active.resolving) return;
    this.active.resolving = true;
    const challenge = this.active.definition;
    const effectSource = success ? challenge.success : challenge.failure;
    const effect = typeof effectSource === 'function' ? effectSource(detail, this.state) : effectSource;

    this.state.successes += success ? 1 : 0;
    this.state.misses += success ? 0 : 1;
    this.state.outcomes.push({ id: challenge.id, success, detail });
    this.applyEffect(effect || {});
    this.hideChallengeUi();
    this.els.phaseTimer.style.width = '0%';

    if (success) {
      this.showToast(challenge.successText || 'Command landed!', 'good');
      this.sound('success');
      if ((effect?.scornDamage || 0) > 0) this.playAttackImpact();
      this.setAnimation('archie', challenge.successAnimation || 'cast');
      if ((effect?.scornDamage || 0) > 0) this.els.scorncrow.classList.add('hit');
    } else {
      this.showToast(challenge.failureText || 'Command missed!', 'bad');
      this.sound('error');
      this.playEnemyImpact();
      this.setAnimation('archie', challenge.failureAnimation || 'hurt');
      this.els.archie.classList.add('hit');
    }

    this.announce(`${success ? 'Success' : 'Miss'}. ${success ? challenge.successText : challenge.failureText}`);
    window.setTimeout(() => {
      this.els.archie.classList.remove('hit');
      this.els.scorncrow.classList.remove('hit');
    }, 520);

    this.transitionTimer = window.setTimeout(() => {
      this.active = null;
      if (!this.checkTerminal()) this.beginNextChallenge();
    }, challenge.recovery || 920);
  }

  applyEffect(effect = {}) {
    this.state.archieHp = clamp(this.state.archieHp - (effect.archieDamage || 0), 0, this.config.combatants.archie.maxHp);
    this.state.nimbus = clamp(this.state.nimbus - (effect.nimbusDamage || 0), 0, this.config.combatants.archie.mountMax);
    this.state.scorncrowHp = clamp(this.state.scorncrowHp - (effect.scornDamage || 0), 0, this.config.combatants.enemy.maxHp);
    this.updateHud();
  }

  updateHud() {
    const { archie, enemy } = this.config.combatants;
    const archiePct = this.state.archieHp / archie.maxHp * 100;
    const enemyPct = this.state.scorncrowHp / enemy.maxHp * 100;
    const nimbusPct = this.state.nimbus / archie.mountMax * 100;
    this.els.archieHp.style.width = `${archiePct}%`;
    this.els.archieHpLabel.textContent = `${this.state.archieHp} / ${archie.maxHp}`;
    this.els.nimbus.style.width = `${nimbusPct}%`;
    this.els.nimbusLabel.textContent = `${this.state.nimbus}%`;
    this.els.scornHp.style.width = `${enemyPct}%`;
    this.els.scornHpLabel.textContent = `${this.state.scorncrowHp} / ${enemy.maxHp}`;
    this.els.scornDamage.textContent = String(enemy.maxHp - this.state.scorncrowHp);
  }

  checkTerminal() {
    if (!this.running) return true;
    if (this.state.nimbus <= 0) {
      if (this.active) this.active.resolving = true;
      this.state.fallen = true;
      this.els.archie.classList.add('falling');
      this.setAnimation('archie', 'fall');
      this.announce('Nimbus collapses. Archie is falling.');
      this.transitionTimer = window.setTimeout(() => this.finish(), 1100);
      return true;
    }
    if (this.state.archieHp <= 0) {
      if (this.active) this.active.resolving = true;
      this.state.ko = true;
      this.setAnimation('archie', 'hurt');
      this.announce('Archie is knocked out.');
      this.transitionTimer = window.setTimeout(() => this.finish(), 800);
      return true;
    }
    return false;
  }

  playAttackImpact() {
    this.els.archie.classList.add('attacking');
    const bolt = document.createElement('span');
    bolt.className = 'impact-bolt';
    bolt.style.left = `${Math.min(77, this.state.position.x * 100 + 5)}%`;
    bolt.style.top = `${this.state.position.y * 100}%`;
    this.els.impactLayer.appendChild(bolt);
    window.setTimeout(() => {
      bolt.remove();
      this.els.archie.classList.remove('attacking');
    }, 650);
  }

  playEnemyImpact() {
    this.els.scorncrow.classList.add('attacking');
    const thorn = document.createElement('span');
    thorn.className = 'impact-thorn';
    thorn.style.left = `${this.state.position.x * 100}%`;
    thorn.style.bottom = '0';
    this.els.impactLayer.appendChild(thorn);
    window.setTimeout(() => {
      thorn.remove();
      this.els.scorncrow.classList.remove('attacking');
    }, 760);
  }

  finish() {
    if (!this.running) return;
    this.running = false;
    this.paused = false;
    this.active = null;
    this.keysHeld.clear();
    this.hideChallengeUi();
    this.els.archie.classList.remove('hit', 'attacking');
    this.els.scorncrow.classList.remove('hit', 'attacking');
    const result = this.config.resultFor(this.state);
    this.currentResult = result;

    this.els.resultTitle.textContent = result.title;
    this.els.resultSummary.textContent = result.summary;
    this.els.resultArchieDamage.textContent = `${result.archieDamage} damage`;
    this.els.resultArchieStatus.textContent = result.archieStatus;
    this.els.resultArchieImage.src = result.archieImage;
    this.els.resultScornDamage.textContent = `${result.scorncrowDamage} damage`;
    this.els.resultScornStatus.textContent = result.scorncrowStatus;
    this.els.resultNimbus.textContent = result.nimbusStatus;
    this.els.resultSuccesses.textContent = `${this.state.successes} / ${this.config.challenges.length}`;
    this.els.resultTier.textContent = result.tier;
    this.els.resultCopyNotice.textContent = '';
    this.els.resultScreen.hidden = false;
    this.sound(result.sound || (this.state.successes >= 4 ? 'success' : 'wah'));
    this.announce(`${result.title}. ${result.summary}`);

    const stored = {
      encounterId: this.config.id,
      completedAt: new Date().toISOString(),
      title: result.title,
      tier: result.tier,
      archieDamage: result.archieDamage,
      archieStatus: result.archieStatus,
      scorncrowDamage: result.scorncrowDamage,
      scorncrowStatus: result.scorncrowStatus,
      nimbus: this.state.nimbus,
      successes: this.state.successes,
      totalChallenges: this.config.challenges.length
    };
    try { localStorage.setItem(this.config.storageKey, JSON.stringify(stored)); } catch { /* private browsing can block storage */ }
  }

  copyResult() {
    if (!this.currentResult) return;
    const result = this.currentResult;
    const text = [
      `${this.config.title} — ${result.title}`,
      `Archie: ${result.archieDamage} starting damage; ${result.archieStatus}`,
      `Scorncrow: ${result.scorncrowDamage} starting damage; ${result.scorncrowStatus}`,
      `Storm Nimbus: ${this.state.nimbus}% stability`,
      `Commands landed: ${this.state.successes}/${this.config.challenges.length}`,
      `Opening status: ${result.tier}`
    ].join('\n');
    copyText(text).then(() => {
      this.els.resultCopyNotice.textContent = 'Tabletop result copied.';
      this.sound('coin');
    }).catch(() => { this.els.resultCopyNotice.textContent = 'Copy failed. Select the result values above.'; });
  }

  toggleMute(button = document.querySelector('[data-mute]')) {
    this.muted = !this.muted;
    if (this.muted) window.WarioSiteSounds?.disable?.();
    else window.WarioSiteSounds?.enable?.();
    if (button) {
      button.setAttribute('aria-pressed', String(this.muted));
      button.textContent = this.muted ? 'Sound off' : 'Sound on';
      button.setAttribute('aria-label', this.muted ? 'Enable battle sounds' : 'Mute battle sounds');
    }
    this.announce(this.muted ? 'Battle sound muted.' : 'Battle sound enabled.');
  }

  togglePause(force) {
    if (!this.running) return;
    this.paused = typeof force === 'boolean' ? force : !this.paused;
    this.els.pauseScreen.hidden = !this.paused;
    const button = document.querySelector('[data-pause]');
    button?.setAttribute('aria-pressed', String(this.paused));
    if (button) button.textContent = this.paused ? 'Resume' : 'Pause';
    if (!this.paused) {
      this.lastFrame = performance.now();
      this.arena.focus({ preventScroll: true });
    }
    this.announce(this.paused ? 'Battle paused.' : 'Battle resumed.');
  }

  tokenGlyph(token) {
    return { up: '↑', down: '↓', left: '←', right: '→', action: '●' }[token] || token;
  }

  setInputMode(label) {
    if (this.els.inputMode) this.els.inputMode.textContent = `Input: ${label}`;
  }

  announce(message) {
    if (this.els.liveMessage) this.els.liveMessage.textContent = message;
  }

  showToast(message, kind = '') {
    const toast = this.els.toast;
    toast.hidden = false;
    toast.textContent = message;
    toast.className = `battle-toast ${kind}`.trim();
    window.clearTimeout(this.toastTimer);
    this.toastTimer = window.setTimeout(() => { toast.hidden = true; }, 900);
  }

  sound(kind) {
    if (!this.muted) window.WarioSiteSounds?.play?.(kind);
  }
}

export { copyText };
