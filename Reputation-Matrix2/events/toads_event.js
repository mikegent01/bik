// Mission state, stages, rendering, and consequence handling
const STORAGE_KEY = 'vigi.liberatedToadsEvent';

const defaultState = {
  missionStage: 0, // 0..3, then 'end'
  metrics: { morale: 60, resources: 20, stealth: 80, cohesion: 70 },
  choices: [],
  outcome: null,
};

const STAGES = [
  {
    id: 'briefing',
    title: 'Stage 1: The Plan',
    narrative: 'A major opportunity and a major crisis. Intel points to a cache of pre-war medical supplies. Toad Lee and his "Strike Faction" demand an immediate assault to seize them. Roger and the "Shelter Faction" want to use the intel as a bargaining chip to trade for desperately needed food supplies with a neutral third party.',
    dynamicLine: 'This isn\'t just about tactics, Archie. This is political. Whichever path you choose, half our people will be furious. What do we do?',
    choices: [
      {
        id: 'strike',
        title: "Lee's Plan (Strike)",
        desc: 'Launch a direct military assault on the cache. Seize the supplies by force. Self-reliance through strength.',
        deltas: { morale: +15, resources: 0, stealth: -20, cohesion: -15 },
        outlook: 'The Strike Faction is emboldened, but the Shelter Faction sees this as reckless warmongering, damaging group unity.',
        goto: 1
      },
      {
        id: 'diplomacy',
        title: "Roger's Plan (Diplomacy)",
        desc: 'Make contact with the neutral traders. Use the intel to secure a long-term food source. Survival through caution.',
        deltas: { morale: -10, resources: -5, stealth: +15, cohesion: -10 },
        outlook: 'The Shelter Faction is relieved, but the Strike Faction views this as cowardly, hurting morale.',
        goto: 1
      },
      {
        id: 'subterfuge',
        title: "Archie's Plan (Subterfuge)",
        desc: 'Play both sides. Send a team to steal the supplies while another team pretends to negotiate a trade, creating a diversion.',
        deltas: { morale: +5, resources: 0, stealth: +5, cohesion: -5 },
        outlook: 'A risky gambit that could yield great rewards, but if it fails, you risk alienating everyone.',
        goto: 1
      }
    ]
  },
  {
    id: 'complication',
    title: 'Stage 2: The Complication',
    narrative: 'The plan hits a snag. The medical cache isn\'t just guarded by a few squatters—it\'s a makeshift field hospital for a platoon of well-armed Iron Fists mercenaries. The "neutral" traders are revealed to be the Tea Leaf Syndicate, led by Chai, who recognizes you. The situation is far more dangerous than anticipated.',
    dynamicLine: 'Iron Fists and the Syndicate... this is bad, Archie. They\'ll kill us on sight. We need a new plan, fast!',
    choices: [
      {
        id: 'attack',
        title: 'Full Frontal Assault',
        desc: 'Overwhelm the mercenaries with a surprise attack. A bloody, direct solution.',
        deltas: { morale: +10, resources: +30, stealth: -40, cohesion: +5 },
        outlook: 'High risk of casualties, but a decisive victory could secure massive resources and unite the Toads in battle.',
        goto: 2
      },
      {
        id: 'bluff',
        title: 'Bluff the Syndicate',
        desc: 'Attempt to outwit Chai in a negotiation, using misdirection and threats to get what you want without a fight.',
        deltas: { morale: +5, resources: +15, stealth: +10, cohesion: +10 },
        outlook: 'A battle of wits. Success will preserve stealth and unity, but failure could be disastrous.',
        goto: 2
      },
      {
        id: 'withdraw',
        title: 'Strategic Withdrawal',
        desc: 'Abort the mission. The risk is too high, and the most important thing is getting your people out alive.',
        deltas: { morale: -25, resources: -10, stealth: +20, cohesion: +5 },
        outlook: 'A safe choice that preserves the crew, but a devastating blow to morale. You\'ll return empty-handed.',
        goto: 2
      }
    ]
  },
  {
    id: 'sacrifice',
    title: 'Stage 3: The Sacrifice',
    narrative: 'During your escape, you stumble upon a small group of unaffiliated toad escapees, cornered and about to be captured by an enemy patrol. Saving them would mean making a huge noise and, more importantly, dropping some of your newly-acquired supplies to move faster.',
    dynamicLine: 'We have to help them! We can\'t just leave them! ...But the supplies... Archie, what\'s the call?',
    choices: [
      {
        id: 'save-toads',
        title: 'Save the Toads',
        desc: 'Prioritize lives over loot. Create a diversion and get the new toads to safety, even if it costs you resources.',
        deltas: { morale: +30, resources: -20, stealth: -35, cohesion: +15 },
        outlook: 'A powerful, unifying act of compassion that will inspire everyone, but at a significant material cost.',
        goto: 3
      },
      {
        id: 'secure-supplies',
        title: 'Secure the Supplies',
        desc: 'The mission comes first. Getting your own people and their hard-won supplies to safety is the only priority.',
        deltas: { morale: -30, resources: +5, stealth: +20, cohesion: -20 },
        outlook: 'A pragmatic but brutal choice that will haunt the crew and cause a massive blow to morale and cohesion.',
        goto: 3
      }
    ]
  },
  {
    id: 'aftermath',
    title: 'Stage 4: The New Path',
    narrative: 'You\'ve returned. The consequences of your mission are clear, for better or worse. The original rift has either been healed or has fractured into a permanent schism. Dan, shaped by what he has witnessed, calls a council to define the future of the Liberated Toads.',
    dynamicLine:
      'You led us through this, Archie. You showed us the way. Now, help me tell them what we stand for. What is our new code?',
    choices: [
      {
        id: 'warrior-code',
        title: 'The Warrior\'s Code',
        desc: '"Survival through strength. We take what we need. We are a hammer, and we will crush our enemies."',
        deltas: { morale: +10, resources: +10, stealth: -10, cohesion: -20 },
        outlook: 'The Toads become a hardened military faction. The pacifists and diplomats are alienated, fracturing the group.',
        goto: 'end'
      },
      {
        id: 'survivor-pact',
        title: 'The Survivor\'s Pact',
        desc: '"Survival through caution. We build alliances, we stay hidden, we endure."',
        deltas: { morale: +5, resources: -5, stealth: +15, cohesion: -15 },
        outlook: 'The Toads become a reclusive, defensive community. The warriors feel their potential is being wasted.',
        goto: 'end'
      },
      {
        id: 'unchained-path',
        title: 'The Unchained Path',
        desc: '"We survive for each other. Strength when we must, caution when we can. Our priority is our people. We are a family."',
        deltas: { morale: +20, resources: 0, stealth: +5, cohesion: +30 },
        outlook: 'Dan unites the factions under a new, balanced ideology. The Toads find a common purpose, stronger than before.',
        goto: 'end'
      }
    ]
  }
];

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : JSON.parse(JSON.stringify(defaultState));
  } catch {
    return JSON.parse(JSON.stringify(defaultState));
  }
}
function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function clamp(v) { return Math.max(0, Math.min(100, v)); }

function applyDeltas(state, deltas) {
  const m = state.metrics;
  m.morale = clamp(m.morale + (deltas.morale || 0));
  m.resources = clamp(m.resources + (deltas.resources || 0));
  m.stealth = clamp(m.stealth + (deltas.stealth || 0));
  m.cohesion = clamp(m.cohesion + (deltas.cohesion || 0));
}

function renderMetrics(state) {
  const metrics = state.metrics;
  const set = (id, val) => {
    const bar = document.getElementById(id);
    if (bar) bar.style.width = `${clamp(val)}%`;
    const valEl = document.getElementById(`${id}-val`);
    if (valEl) valEl.textContent = clamp(val);
  };
  set('m-morale', metrics.morale);
  set('m-resources', metrics.resources);
  set('m-stealth', metrics.stealth);
  set('m-cohesion', metrics.cohesion);
}

function renderStage(state) {
  const container = document.getElementById('stage-container');
  const choicesContainer = document.getElementById('choices-container');
  const dialogueDynamic = document.getElementById('dynamic-dialogue');

  container.innerHTML = '';
  choicesContainer.innerHTML = '';

  if (state.outcome) {
    const summary = document.createElement('div');
    summary.className = 'stage-container';
    const title = document.createElement('div');
    title.className = 'stage-title';
    title.textContent = 'Mission Outcome';
    const body = document.createElement('div');
    body.className = 'stage-narrative';
    body.innerHTML = outcomeText(state);
    summary.appendChild(title);
    summary.appendChild(body);
    container.appendChild(summary);
    dialogueDynamic.innerHTML = `<div class="speaker">Dan</div><div class="content">${epilogueLine(state)}</div>`;
    const btn = document.createElement('a');
    btn.href = 'directory.html';
    btn.className = 'btn btn-primary';
    btn.textContent = 'Return to Directory';
    choicesContainer.appendChild(btn);
    return;
  }

  const stage = STAGES[state.missionStage];
  dialogueDynamic.innerHTML = `<div class="speaker">Dan</div><div class="content">${stage.dynamicLine}</div>`;

  const title = document.createElement('div');
  title.className = 'stage-title';
  title.textContent = stage.title;
  const narrative = document.createElement('div');
  narrative.className = 'stage-narrative';
  narrative.textContent = stage.narrative;
  container.appendChild(title);
  container.appendChild(narrative);

  stage.choices.forEach(choice => {
    const card = document.createElement('div');
    card.className = 'decision-card';

    const ct = document.createElement('div');
    ct.className = 'decision-title';
    ct.textContent = choice.title;

    const cd = document.createElement('div');
    cd.className = 'decision-desc';
    cd.textContent = choice.desc;

    const co = document.createElement('div');
    co.className = 'decision-outlook';
    co.textContent = `Outlook: ${choice.outlook}`;

    const actions = document.createElement('div');
    actions.className = 'decision-actions';
    const btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.textContent = 'Choose';
    btn.addEventListener('click', () => onChoose(state, choice));
    actions.appendChild(btn);

    card.appendChild(ct);
    card.appendChild(cd);
    card.appendChild(co);
    card.appendChild(actions);
    choicesContainer.appendChild(card);
  });
}

function onChoose(state, choice) {
  applyDeltas(state, choice.deltas);
  state.choices.push(choice.id);

  state.missionStage = choice.goto === 'end' ? 'end' : choice.goto;

  if (state.missionStage === 'end') {
    state.outcome = evaluateOutcome(state);
  }

  saveState(state);
  renderMetrics(state);
  showConsequences(choice.deltas, () => renderStage(state));
}

function evaluateOutcome(state) {
  const m = state.metrics;
  if (m.cohesion >= 90 && m.morale >= 80 && m.resources >= 25) return 'perfectUnity';
  if (m.resources >= 40 && m.cohesion >= 50) return 'missionSuccess';
  if (m.stealth <= 15) return 'exposedAndHunted';
  if (m.morale <= 20) return 'brokenSpirits';
  if (m.cohesion <= 20) return 'crewFractured';
  return 'mixedOutcome';
}
function outcomeText(state) {
  switch (state.outcome) {
    case 'perfectUnity':
      return 'A masterful display of leadership. You navigated an impossible political crisis, secured vital supplies, and helped Dan forge a new, unified identity for the Liberated Toads. They are stronger and more hopeful than ever, a true family forged in fire.';
    case 'missionSuccess':
      return 'The mission was a success. You secured a good amount of supplies, and while there were some harsh disagreements, you held the crew together. A solid, if costly, victory.';
    case 'exposedAndHunted':
      return 'You got the supplies, but at what cost? Your actions were so loud and chaotic that you\'ve drawn the full attention of the Iron Fists and the Syndicate. The toads now have a massive target on their backs.';
    case 'brokenSpirits':
      return 'You made it back, but the moral compromises were too great. The toads are demoralized, questioning if survival is worth sacrificing their principles. Their fighting spirit is gone, replaced by fear and regret.';
    case 'crewFractured':
      return 'The mission has irrevocably shattered the Liberated Toads. The Strike and Shelter factions are now openly hostile, refusing to work together. You may have gained supplies, but you lost the community.';
    default:
      return 'You navigated a difficult mission. Some supplies were gained, but tensions remain high. The rift has not been healed, merely papered over. The crew survived, but their future is uncertain.';
  }
}
function epilogueLine(state) {
  const o = state.outcome;
  if (o === 'perfectUnity') return 'We did it, Archie. We faced ourselves and came out... better. United. Thank you for showing me the way.';
  if (o === 'missionSuccess') return 'We got what we came for, and we\'re still standing. That\'s a win in my book. Now, let\'s put these supplies to good use.';
  if (o === 'exposedAndHunted') return 'We have what we need to survive, for now. But we have more enemies than ever. I hope the price was worth it.';
  if (o === 'brokenSpirits') return 'This... this wasn\'t how it was supposed to go. We lost a part of ourselves back there. I don\'t know if we can get it back.';
  if (o === 'crewFractured') return 'They’re tearing themselves apart. I... I tried to hold them together, but it wasn\'t enough. What do we do now?';
  return 'It\'s over. We survived. But the arguments haven\'t stopped. We need to figure out who we are, and fast.';
}

function showConsequences(deltas, onClose) {
  const modal = document.getElementById('consequence-modal');
  const title = document.getElementById('consequence-title');
  const body = document.getElementById('consequence-body');
  const closeBtn = modal.querySelector('.modal-close');
  const contBtn = document.getElementById('modal-continue');

  title.textContent = 'Consequences';
  body.innerHTML = `
    <ul>
      <li>Toad Morale: ${fmtDelta(deltas.morale)}</li>
      <li>Resources Gained: ${fmtDelta(deltas.resources)}</li>
      <li>Stealth Integrity: ${fmtDelta(deltas.stealth)}</li>
      <li>Group Cohesion: ${fmtDelta(deltas.cohesion)}</li>
    </ul>
  `;
  modal.classList.add('open');

  function close() {
    modal.classList.remove('open');
    onClose && onClose();
  }
  closeBtn.onclick = close;
  contBtn.onclick = close;
}
function fmtDelta(v = 0) {
    if (v === 0) return '<span style="color: var(--text-secondary);">No change</span>';
    const sign = v > 0 ? '+' : '';
    const color = v > 0 ? 'var(--positive-color)' : 'var(--negative-color)';
    return `<span style="color: ${color}; font-weight: bold;">${sign}${v}</span>`;
}


function setupReset() {
  const btn = document.getElementById('reset-mission');
  btn.addEventListener('click', () => {
    localStorage.removeItem(STORAGE_KEY);
    const state = loadState();
    saveState(state);
    renderMetrics(state);
    renderStage(state);
  });
}

function init() {
  const state = loadState();
  renderMetrics(state);
  renderStage(state);
  setupReset();
}
document.addEventListener('DOMContentLoaded', init);