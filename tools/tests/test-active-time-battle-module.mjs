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
  'timeoutMode', 'delayPercent', 'strikesToGuard', 'overflowCap', 'waitMode'
]) {
  check(`setting ${setting} is registered`, js.includes(`"${setting}"`));
}

check('initiative changes fill speed', /initiativeOf\(combatant\).*avg/.test(js) && js.includes('speedFactor'));
check('initiative changes opening readiness', js.includes('openingAtb') && js.includes('initiativeOpeningWeight'));
check('READY queue sorts by overflow and initiative', js.includes('readyCombatants') && js.includes('overflow') && js.includes('initiativeOf(b) - initiativeOf(a)'));
check('players request GM-side actions by socket', js.includes('game.socket?.emit') && js.includes('game.socket?.on'));
check('idle timeouts can delay', js.includes('delayPercent') && js.includes('timed out and delays'));
check('idle timeouts can guard', js.includes('Guard / Dodge') && js.includes('lastActedRound'));
check('rounds advance as ATB laps', js.includes('advanceRoundIfComplete') && js.includes('ATB lap'));
check('tracker shows ATB meters', css.includes('.atb-meter') && css.includes('atb-ready') && css.includes('atb-active'));
check('README explains the inactivity solution', /YouTube/.test(readme) && /being absent does not freeze the table/.test(readme));

console.log(`\n${ok.length} passed, ${fail.length} failed`);
ok.forEach(l => console.log('  ok   ' + l));
fail.forEach(l => console.log('  FAIL ' + l));
process.exit(fail.length ? 1 : 0);
