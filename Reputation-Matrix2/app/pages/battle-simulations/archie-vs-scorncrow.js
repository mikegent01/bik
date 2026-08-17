import { BattleSimulation } from './battle-engine.js';

const ARCHIE = '../../../portraits/player/sprite-sheets/poses/archie/';
const SCORNCROW = '../../../portraits/player/sprite-sheets/poses/scorncrow/';
const reactionDirection = Math.random() < 0.5 ? 'left' : 'right';
const directionLabel = reactionDirection === 'left' ? 'LEFT' : 'RIGHT';
const directionGlyph = reactionDirection === 'left' ? '←' : '→';

const encounter = {
  id: 'archie-vs-scorncrow',
  title: 'Archie vs. the Scorncrow',
  storageKey: 'waluipedia:battle-sim:archie-vs-scorncrow:last-result:v1',
  openingToast: 'Nimbus enters the storm!',
  openingAnnouncement: 'The opening begins. Storm Nimbus is moving toward the Tree of Woe.',
  startPosition: { x: 0.14, y: 0.63 },
  moveSpeed: 0.00042,
  combatants: {
    archie: { maxHp: 100, mountMax: 100 },
    enemy: { maxHp: 120 }
  },
  animations: {
    archie: {
      mounted: [`${ARCHIE}13-nimbus-01.png`, `${ARCHIE}14-nimbus-02.png`, `${ARCHIE}15-nimbus-03.png`, `${ARCHIE}16-nimbus-04.png`],
      staff: [`${ARCHIE}09-staff-ready.png`, `${ARCHIE}10-staff-swing.png`],
      charge: [`${ARCHIE}11-cast-blue-flame.png`, `${ARCHIE}12-cast-lightning.png`],
      cast: [`${ARCHIE}12-cast-lightning.png`, `${ARCHIE}11-cast-blue-flame.png`],
      hurt: [`${ARCHIE}14-nimbus-02.png`, `${ARCHIE}16-nimbus-04.png`],
      fall: [`${ARCHIE}16-nimbus-04.png`, `${ARCHIE}03-idle-back.png`]
    },
    enemy: {
      idle: [`${SCORNCROW}09-scythe-ready.png`, `${SCORNCROW}13-laugh.png`],
      attack: [`${SCORNCROW}10-scythe-overhead.png`, `${SCORNCROW}11-scythe-swing.png`, `${SCORNCROW}12-low-reap.png`],
      thorn: [`${SCORNCROW}14-root-bow.png`, `${SCORNCROW}15-summon-thorn.png`],
      laugh: [`${SCORNCROW}13-laugh.png`, `${SCORNCROW}09-scythe-ready.png`],
      dissolve: [`${SCORNCROW}16-crow-dissolve.png`, `${SCORNCROW}09-scythe-ready.png`]
    }
  },
  challenges: [
    {
      id: 'storm-lift',
      type: 'direction',
      shortName: 'Break the downdraft',
      kicker: 'Launch command',
      command: '↑',
      title: 'Fly upward—now!',
      instruction: 'Swipe up or press Up Arrow / W before the downdraft catches Nimbus.',
      accept: ['up'],
      failOnWrong: false,
      duration: 2350,
      archieAnimation: 'mounted',
      enemyAnimation: 'idle',
      success: { scornDamage: 4 },
      failure: { archieDamage: 8, nimbusDamage: 20 },
      successText: 'Clean lift! The storm breaks around Archie.',
      failureText: 'The downdraft hammers Archie and Nimbus.'
    },
    {
      id: 'storm-gates',
      type: 'pilot',
      shortName: 'Thread the storm gates',
      kicker: 'Flight command',
      command: '◎',
      title: 'Pilot three gates',
      instruction: 'Move Archie through each blue ring. Avoid the vertical red root-lines.',
      duration: 7600,
      moveSpeed: 0.0005,
      startPosition: { x: 0.13, y: 0.66 },
      gateRadius: 0.105,
      gates: [
        { x: 0.28, y: 0.31 },
        { x: 0.49, y: 0.69 },
        { x: 0.71, y: 0.29 }
      ],
      hazards: [
        { x: 0.38, y: 0.64 },
        { x: 0.59, y: 0.34 },
        { x: 0.80, y: 0.63 }
      ],
      hazardEffect: { archieDamage: 3, nimbusDamage: 8 },
      archieAnimation: 'mounted',
      enemyAnimation: 'thorn',
      success: { scornDamage: 8 },
      failure: (detail) => {
        const cleared = detail.gatesCleared || 0;
        const missing = 3 - cleared;
        return { archieDamage: 5 + missing * 4, nimbusDamage: 8 + missing * 10, scornDamage: cleared * 2 };
      },
      successText: 'All three gates! Nimbus tears through the thorn canopy.',
      failureText: 'The closing roots clip Nimbus before the breach.'
    },
    {
      id: 'thorn-snare',
      type: 'sequence',
      shortName: 'Break the thorn snare',
      kicker: 'Escape command',
      command: '↔',
      title: 'Shake off the snare',
      instruction: 'Alternate left and right. Two wrong inputs let the thorns cinch shut.',
      sequence: ['left', 'right', 'left', 'right', 'left', 'right'],
      maxMistakes: 2,
      duration: 3900,
      archieAnimation: 'staff',
      enemyAnimation: 'thorn',
      success: { scornDamage: 10 },
      failure: { archieDamage: 12, nimbusDamage: 18 },
      successText: 'Snare shattered! Splinters rake the Scorncrow.',
      failureText: 'The thorns bite and wrench Archie sideways.'
    },
    {
      id: 'lightning-window',
      type: 'timing',
      shortName: 'Catch the lightning window',
      kicker: 'Timing command',
      command: '●',
      title: 'Strike in the green',
      instruction: 'Press Space / Enter or tap when the white marker crosses the green band.',
      zone: [0.58, 0.735],
      cycle: 1120,
      duration: 3150,
      archieAnimation: 'charge',
      enemyAnimation: 'attack',
      success: { scornDamage: 18 },
      failure: { archieDamage: 20, nimbusDamage: 6 },
      successText: 'Perfect interval! Lightning finds the Scorncrow.',
      failureText: 'The bolt grounds early; the scythe answers.'
    },
    {
      id: 'blue-fire-overcharge',
      type: 'charge',
      shortName: 'Overcharge blue fire',
      kicker: 'Hold / release command',
      command: '◉',
      title: 'Hold—then release in gold',
      instruction: 'Hold Space, Enter, the ACT pad, or the arena. Release in the gold band—do not overcharge.',
      chargeTime: 2050,
      chargeZone: [0.68, 0.89],
      overchargeAt: 0.995,
      duration: 4000,
      archieAnimation: 'charge',
      enemyAnimation: 'laugh',
      success: { scornDamage: 26 },
      failure: { archieDamage: 16, nimbusDamage: 18 },
      successText: 'Blue fire detonates across the Scorncrow’s ribs!',
      failureText: 'The charge ruptures and blows back through Nimbus.'
    },
    {
      id: 'scythe-reaction',
      type: 'reaction',
      shortName: 'Dodge the reaping arc',
      kicker: 'Reaction command',
      command: directionGlyph,
      title: `Dodge ${directionLabel}!`,
      instruction: `Swipe ${reactionDirection}, press ${directionLabel} Arrow / ${reactionDirection === 'left' ? 'A' : 'D'}, or use the directional pad.`,
      accept: [reactionDirection],
      failOnWrong: true,
      duration: 1350,
      archieAnimation: 'mounted',
      enemyAnimation: 'attack',
      success: { scornDamage: 8 },
      failure: { archieDamage: 26, nimbusDamage: 10 },
      successText: 'Nimbus slips the blade; Archie scorches the opening.',
      failureText: 'The low reap lands hard across Archie and cloud.'
    },
    {
      id: 'closing-chain',
      type: 'sequence',
      shortName: 'Complete the breach',
      kicker: 'Final chain',
      command: '5×',
      title: 'Finish the opening!',
      instruction: 'Up → Right → ACT → Left → ACT. Two mistakes break the chain.',
      sequence: ['up', 'right', 'action', 'left', 'action'],
      maxMistakes: 2,
      duration: 3650,
      archieAnimation: 'charge',
      enemyAnimation: 'dissolve',
      success: { scornDamage: 30 },
      failure: { archieDamage: 28, nimbusDamage: 12, scornDamage: 6 },
      successText: 'Full breach! Storm and blue fire drive the Scorncrow back.',
      failureText: 'The Scorncrow breaks the chain and owns the landing.'
    }
  ],

  resultFor(state) {
    const archieDamage = this.combatants.archie.maxHp - state.archieHp;
    const scorncrowDamage = this.combatants.enemy.maxHp - state.scorncrowHp;
    const mounted = !state.fallen && state.nimbus > 0;
    let title;
    let tier;
    let summary;
    let sound;

    if (state.fallen) {
      title = 'Archie falls from Nimbus';
      tier = 'Scorncrow advantage · Archie fallen';
      summary = 'Nimbus loses cohesion under the thorn storm. Archie hits the battlefield dismounted, and the Scorncrow controls the first exchange.';
      sound = 'wah';
    } else if (state.ko) {
      title = 'Archie is knocked out';
      tier = 'Scorncrow decisive advantage';
      summary = 'The opening sequence overwhelms Archie before initiative. The GM decides whether he begins unconscious or is pulled clear.';
      sound = 'error';
    } else if (state.successes >= 6 || (state.successes >= 5 && scorncrowDamage >= 70)) {
      title = 'Archie seizes the opening';
      tier = 'Archie advantage';
      summary = 'Archie rides the controlled storm all the way through and forces the Scorncrow to begin the battle wounded and off balance.';
      sound = 'success';
    } else if (state.successes >= 4) {
      title = 'The opening is contested';
      tier = 'Contested opening';
      summary = 'Both combatants land meaningful blows. Archie remains in the air, but neither side gets the clean opening it wanted.';
      sound = 'dice';
    } else {
      title = 'The Scorncrow claims the opening';
      tier = 'Scorncrow advantage';
      summary = 'Archie survives the approach, but the Scorncrow’s roots and scythe dictate where the tabletop battle begins.';
      sound = 'wah';
    }

    const archieCondition = state.ko
      ? 'Knocked out · dismounted'
      : state.fallen
        ? 'Fallen from Nimbus · prone'
        : archieDamage >= 55
          ? 'Bloodied · still mounted'
          : archieDamage >= 30
            ? 'Hurt · still mounted'
            : 'Ready · mounted';

    const scornCondition = scorncrowDamage >= 85
      ? 'Grievously scorched · off balance'
      : scorncrowDamage >= 55
        ? 'Wounded · guard broken'
        : scorncrowDamage >= 25
          ? 'Singed · battle ready'
          : 'Battle ready · opening control';

    const nimbusCondition = state.nimbus <= 0
      ? '0% · Collapsed'
      : state.nimbus <= 35
        ? `${state.nimbus}% · Barely coherent`
        : state.nimbus <= 70
          ? `${state.nimbus}% · Ragged`
          : `${state.nimbus}% · Stable`;

    return {
      title,
      tier,
      summary,
      sound,
      archieDamage,
      archieStatus: archieCondition,
      archieImage: mounted ? `${ARCHIE}16-nimbus-04.png` : `${ARCHIE}01-idle-front.png`,
      scorncrowDamage,
      scorncrowStatus: scornCondition,
      nimbusStatus: nimbusCondition
    };
  }
};

const root = document.querySelector('[data-battle-root]');
if (root) root.battleSimulation = new BattleSimulation(root, encounter);

export { encounter };
