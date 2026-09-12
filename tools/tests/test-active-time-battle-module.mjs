// Static smoke test for the Foundry Active Time Battle module. The runtime needs
// Foundry, but this proves the shipped module folder has a sane manifest and the
// code contains the core mechanics the table asked for.
//
//   node tools/tests/test-active-time-battle-module.mjs
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const ROOT = path.resolve('Reputation-Matrix2/Foundry/active_time_battle');
const fail = [], ok = [];
const check = (label, cond, extra = '') => (cond ? ok : fail).push(label + (extra ? ` — ${extra}` : ''));

const manifestPath = path.join(ROOT, 'module.json');
const scriptPath = path.join(ROOT, 'scripts/active-time-battle.js');
const cssPath = path.join(ROOT, 'styles/active-time-battle.css');
const readmePath = path.join(ROOT, 'README.md');

check('manifest exists', fs.existsSync(manifestPath));
check('script exists', fs.existsSync(scriptPath));
check('css exists', fs.existsSync(cssPath));
check('README exists', fs.existsSync(readmePath));

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
check('module id is stable', manifest.id === 'active-time-battle', manifest.id);
check('manifest loads the ATB script', manifest.esmodules?.includes('scripts/active-time-battle.js'));
check('manifest loads the ATB stylesheet', manifest.styles?.includes('styles/active-time-battle.css'));
check('Foundry v12+ compatibility is declared', Number(manifest.compatibility?.minimum) <= 12 && Number(manifest.compatibility?.verified) >= 13);

const syntax = spawnSync(process.execPath, ['--check', scriptPath], { encoding: 'utf8' });
check('runtime script parses as JavaScript', syntax.status === 0, syntax.stderr.trim());

const js = fs.readFileSync(scriptPath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');
const readme = fs.readFileSync(readmePath, 'utf8');

for (const setting of [
  'baseReadySeconds', 'initiativeSpeedWeight', 'initiativeOpeningWeight',
  'openingReadiness', 'autoActivate', 'readyGraceSeconds', 'actionSeconds',
  'npcActionSeconds', 'playerActionSeconds', 'warningSeconds', 'playerWarningSeconds',
  'timeoutMode', 'delayPercent', 'strikesToGuard', 'overflowCap', 'pauseOnPlayerTurns', 'waitMode',
  'trackerStyle', 'queuePreview'
]) {
  check(`setting ${setting} is registered`, js.includes(`"${setting}"`));
}

check('initiative changes fill speed', /initiativeOf\(combatant\).*avg/.test(js) && js.includes('speedFactor'));
check('initiative changes opening readiness', js.includes('openingAtb') && js.includes('initiativeOpeningWeight'));
check('player turns get five minutes instead of the NPC clock', js.includes('function turnSecondsFor') && js.includes('"playerActionSeconds"') && js.includes('300') && js.includes('"npcActionSeconds"'));
check('player turns pause other gauges without pausing NPC turns', js.includes('function pauseOnPlayerTurn') && js.includes('pauseOnPlayerTurns') && js.includes('shouldTickGauges(combat, active)'));
check('player decision warnings are separate from NPC warnings', js.includes('function warningSecondsFor') && js.includes('"playerWarningSeconds"'));
check('ATB API exposes state for external automation bridges', js.includes('isRunning,') && js.includes('activeId') && js.includes('isPrimaryGM') && js.includes('That combatant is not the active ATB turn'));
check('READY queue sorts by overflow and initiative', js.includes('readyCombatants') && js.includes('overflow') && js.includes('initiativeOf(b) - initiativeOf(a)'));
check('players request GM-side actions by socket', js.includes('game.socket?.emit') && js.includes('game.socket?.on'));
check('player socket actions are re-authorized by the GM', js.includes('function canRequestAction') && js.includes('rejected unauthorized') && js.includes('userCanAct(combatant, user)'));
check('players cannot force early activation or end others turns', js.includes('{ ...data, force: false }') && js.includes('id !== activeId(combat)'));
check('a ready actor cannot overwrite an active spotlight', js.includes('Another combatant is already active') && js.includes('!busy && ready && userCanAct(c)'));
check('only one active GM mutates ATB state', js.includes('function isPrimaryGM') && js.includes('activeGMs') && js.includes('tickActiveCombat'));
check('manual turn changes are blocked while ATB is running', js.includes('preUpdateCombat') && js.includes('use Activate and End ATB Turn'));
check('rolling missing initiative does not reset a running fight', js.includes('do not reset the') && js.includes('Math.max(atbOf(c), openingAtb(c, avg))'));
check('combatant names are escaped before HTML output', js.includes('function escapeHtml') && js.includes('escapeHtml(combatantName'));
check('queue preview renders upcoming combatants', js.includes('function renderQueueStrip') && js.includes('queueCombatants') && css.includes('.atb-queue-chip'));
check('active turns use inline timer instead of modal dialog',
  js.includes('function renderActiveTimer') && js.includes('function refreshActiveTimers') &&
  js.includes('atb-active-timer') && css.includes('.atb-active-timer') &&
  !js.includes('new Dialog') && !js.includes('atb-active-dialog') && !js.includes('showActivePrompt'));
check('idle timeouts can delay', js.includes('delayPercent') && js.includes('timed out and delays'));
check('idle timeouts can guard', js.includes('Guard / Dodge') && js.includes('lastActedRound'));
check('rounds advance as ATB laps', js.includes('advanceRoundIfComplete') && js.includes('ATB lap'));
check('tracker shows ATB meters', css.includes('.atb-meter') && css.includes('atb-ready') && css.includes('atb-active'));
check('tracker has bar, classic, and compact styles', css.includes('atb-style-bars') && css.includes('atb-style-classic') && css.includes('atb-style-compact'));
check('README explains the inactivity solution', /YouTube/.test(readme) && /being absent does not freeze the table/.test(readme));
check('README documents Baldur-style player pause', /Baldur-style/.test(readme) && /five minutes/.test(readme) && /NPCs go, player decisions pause/.test(readme));
check('README install folder matches module id', readme.includes('Data/modules/active-time-battle'));
check('README documents visual styles and queue preview', /Visual styles/.test(readme) && /Classic badge/.test(readme) && /queue preview/.test(readme));
check('README documents inline timer and no popup', /inline countdown timer/.test(readme) && /no modal turn popup/.test(readme));

console.log(`\n${ok.length} passed, ${fail.length} failed`);
ok.forEach(l => console.log('  ok   ' + l));
fail.forEach(l => console.log('  FAIL ' + l));
process.exit(fail.length ? 1 : 0);
