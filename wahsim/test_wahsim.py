"""Smoke + invariant tests.  python3 -m wahsim.test_wahsim"""
from __future__ import annotations

import contextlib
import io
import os
import sys

# Support both `python test_wahsim.py` and `python -m wahsim.test_wahsim`.
if __package__ in (None, ''):
    import os

    sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    from wahsim import config
    from wahsim.cli import run
    from wahsim.core.brain import LMStudioBrain, ScriptedBrain, make_brain
    from wahsim.core.dice import DC, Dice, Modifier, Outcome
    from wahsim.core.engine import Action, Session
    from wahsim.core.entities import build_actor
    from wahsim.core.roster import (actor_from_record, find_character,
                                    generate_actor, grant_abilities)
else:
    from . import config
    from .cli import run
    from .core.brain import LMStudioBrain, ScriptedBrain, make_brain
    from .core.dice import DC, Dice, Modifier, Outcome
    from .core.engine import Action, Session
    from .core.entities import build_actor
    from .core.roster import (actor_from_record, find_character,
                              generate_actor, grant_abilities)

# The bootstrap above guarantees the repo root is importable either way, so the
# mode imports can use one absolute form for both invocation styles.
from wahsim.modes.congress import CongressMode
from wahsim.modes.glazed import GlazedCongressMode
from wahsim.modes.scene import SceneMode, direct_scene
from wahsim.modes.trial import TrialMode

PASS = FAIL = 0


def check(name, cond, extra=''):
    global PASS, FAIL
    if cond:
        PASS += 1
        print(f'  ✓ {name}')
    else:
        FAIL += 1
        print(f'  ✗ {name} {extra}')


def silent(fn, *a, **k):
    buf = io.StringIO()
    with contextlib.redirect_stdout(buf):
        fn(*a, **k)
    return buf.getvalue()


def play(mode_cls, spec, seed=0):
    d = Dice(seed=seed)
    b = make_brain(d)
    m = mode_cls(d, b, spec)
    s = Session(m, d, b)
    out = silent(run, s, auto=True, show_dice=False)
    return m, s, out


# --------------------------------------------------------------------------
print('\nDICE')
d = Dice(seed=1)
r = d.check(15, [Modifier('x', 3)])
check('roll produces an outcome', r.outcome is not None)
check('explain() is non-empty', len(r.explain()) > 10)
check('determinism', Dice(seed=99).check(10).total == Dice(seed=99).check(10).total)
nat1 = next(x for x in (Dice(seed=s).check(20) for s in range(200)) if x.kept == 1)
check('natural 1 always botches', nat1.outcome == Outcome.BOTCH)
nat20 = next(x for x in (Dice(seed=s).check(99) for s in range(300)) if x.kept == 20)
check('natural 20 always crits', nat20.outcome == Outcome.CRIT)
adv = Dice(seed=4).check(10, advantage=1)
check('advantage keeps the higher die', adv.kept == max(adv.faces))
dis = Dice(seed=4).check(10, advantage=-1)
check('disadvantage keeps the lower die', dis.kept == min(dis.faces))

print('\nENTITIES')
d = Dice(seed=2)
a = build_actor('t', 'Tester', 'witness', d, strong=('logic',), skills={'advocacy': 3})
check('attrs stay in 1..10', all(1 <= v <= 10 for v in a.attrs.values()))
base = len(a.modifiers_for('advocacy'))
a.bruise(99)
check('composure floors at 0', a.composure == 0)
check('rattled adds a penalty', len(a.modifiers_for('advocacy')) > base)
a.steady(999)
check('steady caps at max', a.composure == a.max_composure)
grant_abilities(a, d, 3)
check('abilities granted', len(a.abilities) >= 3)
ab = next(x for x in a.abilities if x.uses > 0)
for _ in range(ab.uses):
    ab.spend()
check('limited abilities exhaust', not ab.available)

print('\nROSTER')
check('canon lookup works', (find_character('edgeworth') or {}).get('name') == 'Miles Edgeworth')
check('fuzzy lookup works', find_character('bowser') is not None)
check('missing lookup is safe', find_character('zzzznope') is None)
g = generate_actor('judge', Dice(seed=3))
check('generated actor is usable', bool(g.name) and g.role == 'judge')

print('\nTRIAL')
m, s, out = play(TrialMode, {'prosecutor': 'edgeworth', 'defendant': 'archie',
                             'witness_count': 3}, seed=5)
check('trial reaches a verdict', bool(m.verdict), m.verdict)
check('trial produced beats', len(s.beats) > 10, str(len(s.beats)))
check('clocks never exceed size',
      all(c.filled <= c.size for c in m.clocks))
check('epilogue renders', 'VERDICT' in m.epilogue())
check('canon prosecutor used', any(x.name == 'Miles Edgeworth' for x in m.actors()))
verdicts = set()
for seed in range(12):
    mm, _, _ = play(TrialMode, {'prosecutor': 'edgeworth', 'witness_count': 3}, seed=seed)
    verdicts.add(mm.verdict.split(' —')[0].split(' on')[0])
check('verdicts vary across seeds', len(verdicts) > 1, str(verdicts))

print('\nCONGRESS')
m, s, out = play(CongressMode, {'motion': 'Test motion', 'delegate_count': 9}, seed=7)
check('congress reaches a result', m.result in ('CARRIED', 'FAILED'), m.result)
t = m.tally
check('every delegate votes exactly once',
      t['for'] + t['against'] + t['abstain'] == len(m.delegates))
check('leans stay in bounds', all(-100 <= d_.lean <= 100 for d_ in m.delegates))
check('floor chart renders', 'FOR' in m.floor_chart())
results = [play(CongressMode, {'motion': 'M', 'delegate_count': 9}, seed=s)[0].result
           for s in range(24)]
carried = results.count('CARRIED')
check('outcome is competitive, not fixed', 4 <= carried <= 20, f'{carried}/24 carried')

print('\nSCENE')
plan = direct_scene('Wario tries to sell gravity to a suspicious banker '
                    'while Waluigi objects', Dice(seed=9))
names = [c['name'] for c in plan['cast']]
check('director matched canon names', 'Wario' in names and 'Waluigi' in names, str(names))
check('director added the banker role', any('Banker' in n for n in names), str(names))
check('director set objectives', len(plan['objectives']) >= 2)
m, s, out = play(SceneMode, {'premise': 'A tense negotiation over a debt',
                             'play': False}, seed=11)
check('scene terminates', m.finished(), m.ended)
check('scene never says "abilitys"', 'abilitys' not in out)

print('\nENGINE / BRAIN')
d = Dice(seed=13)
b = ScriptedBrain(d)
act = generate_actor('witness', d)
check('brain speaks', len(b.speak(act, {})) > 5)
check('brain choice is in range',
      0 <= b.choose(act, [{'verb': 'a'}, {'verb': 'b'}], {}) < 2)
check('brain.choose handles empty list', b.choose(act, [], {}) == 0)
check('offline invent returns {}', b.invent({}) == {})

# No mode should ever hang.
for cls, spec in ((TrialMode, {'witness_count': 2}),
                  (CongressMode, {'motion': 'X', 'delegate_count': 5}),
                  (SceneMode, {'premise': 'A quiet threat', 'play': False})):
    mm, ss, _ = play(cls, spec, seed=17)
    check(f'{cls.__name__} terminates under the step guard', mm.finished())

print('\nLM STUDIO BRAIN')
lm = LMStudioBrain(ScriptedBrain(Dice(0)))
check('defaults to LM Studio port', lm.base == 'http://localhost:1234/v1', lm.base)
check('no real API key required', bool(lm.key))
check('ping returns (bool, str)',
      isinstance(lm.ping(), tuple) and isinstance(lm.ping()[0], bool))
check('list_models degrades to []', lm.list_models() == [])
check('speak falls back when offline', len(lm.speak(generate_actor('judge', Dice(1)), {})) > 5)
check('choose falls back when offline',
      0 <= lm.choose(generate_actor('judge', Dice(1)), [{'verb': 'a'}, {'verb': 'b'}], {}) < 2)
check('invent falls back to {}', lm.invent({'instruction': 'x'}) == {})
check('fallbacks were counted', lm.failures > 0)

print('\nCONFIG')
check('config exposes LM Studio base', config.LMSTUDIO_BASE.endswith('/v1'))
check('commit threshold is sane', 10 <= config.COMMIT_THRESHOLD <= 100)
check('max turns guard exists', config.MAX_TURNS > 50)

print('\nGUI')
from wahsim.gui import GAME, PAGE
check('page is served', '<html' in PAGE and 'WahSim' in PAGE)
st = GAME.start({'mode': 'congress', 'seed': 3,
                 'spec': {'motion': 'Test', 'delegate_count': 5}})
check('gui start returns state', st['started'] and st['title'] == 'Grand Congress')
check('gui exposes clocks', len(st['clocks']) >= 1)
check('gui exposes the floor chart', st['chart'] and len(st['chart']) == 5)
check('gui marks the player turn', st['current']['is_player'])
st = GAME.step(0, 'A speech for the record.')
check('gui step records a beat', len(st['beats']) == 1)
before = len(st['beats'])
st = GAME.autoplay()
# autoplay is *correct* to stop immediately when the player leads the next
# phase, so assert it never regresses and never runs past the human.
check('gui autoplay never regresses', len(st['beats']) >= before)
check('gui autoplay stops on the player',
      st['finished'] or not st['current'] or st['current']['is_player'])
for _ in range(30):
    if st['finished']:
        break
    st = GAME.autoplay()
    if st['current'] and st['current']['is_player'] and not st['finished']:
        st = GAME.step(0, 'Another point.')
check('gui reaches a result', st['finished'], str(st.get('round')))
check('gui returns an epilogue', 'RESULT' in st['epilogue'])
check('gui state is JSON-serialisable', bool(__import__('json').dumps(st)))

print('\nTURN ORDER (visibility + correctness)')
_d = Dice(seed=5); _b = make_brain(_d)
_tm = TrialMode(_d, _b, {'prosecutor': 'edgeworth', 'defendant': 'archie',
                         'player_side': 'defense', 'witness_count': 3})
_ts = Session(_tm, _d, _b)
_phases = {p.key: p for p in _tm.phases()}
check('opening alternates prosecution then defence',
      _phases['opening'].order == [_tm.prosecutor.key, _tm.defense.key])
check('judge only sits in evidence/verdict phases',
      _tm.judge.key not in _phases['opening'].order
      and _tm.judge.key in _phases['verdict'].order)

# Walk the real schedule and record who actually acts.
_seq, _prev = [], None
for _ in range(26):
    if _tm.finished():
        break
    _act = _ts.current
    if _act is None:
        _ts.next_phase(); continue
    if _ts.phase.key != _prev:
        _prev = _ts.phase.key
        _h = getattr(_tm, 'on_phase_start', None)
        if _h and _ts.round == 1:
            _h(_ts.phase)
    _seq.append((_ts.phase.key, _act.role, _act.key))
    _opt = _tm.options(_act)[0]
    _ts.record(_tm.resolve(Action(actor=_act, verb=_opt['verb'], text='.',
                                  skill=_opt.get('skill', ''), dc=_opt.get('dc'))))
    _ts.advance()
check('opening is exactly prosecutor then defence',
      [r for p_, r, _k in _seq if p_ == 'opening'] == ['prosecutor', 'defense'],
      str([r for p_, r, _k in _seq if p_ == 'opening']))
_ev = [r for p_, r, _k in _seq if p_ == 'evidence']
check('evidence cycles prosecutor/defense/judge',
      _ev[:6] == ['prosecutor', 'defense', 'judge'] * 2, str(_ev[:6]))
check('no individual acts twice in a row',
      all(_seq[i][2] != _seq[i + 1][2] for i in range(len(_seq) - 1)),
      str([(a[2], b[2]) for a, b in zip(_seq, _seq[1:]) if a[2] == b[2]][:2]))
check('everyone in the cast eventually acts',
      len({k for _, _, k in _seq}) >= 6, str(len({k for _, _, k in _seq})))
check('each actor gets one turn per round in a phase',
      len([1 for p_, _r, _k in _seq if p_ == 'evidence']) % 3 == 0)

# The actual reported bug: order was right but invisible.
_beat = _ts.beats[0]
check('beats record their phase', bool(_beat.phase_name), _beat.phase_name)
check('beats record the round', _beat.round_no >= 1)
check('beats record the seat (n/total)', '/' in _beat.seat, _beat.seat)
check('beats record the role', bool(_beat.role), _beat.role)
check('rendered beat shows turn context',
      'turn' in _beat.render() and _beat.phase_name in _beat.render())
check('session exposes turn_order()', len(_ts.turn_order()) >= 1)

print('\nTRANSCRIPT CLARITY')
_d2 = Dice(seed=5); _b2 = make_brain(_d2)
_t2 = TrialMode(_d2, _b2, {'prosecutor': 'edgeworth', 'witness_count': 3})
_s2 = Session(_t2, _d2, _b2)
_a2 = _s2.current
_ab2 = next(x for x in _a2.abilities if x.available)
_bt = _t2.resolve(Action(actor=_a2, verb='ability', text='.', ability=_ab2.key,
                         skill=_ab2.skill, dc=14))
check('ability beats name the ability, not "ability"',
      _bt.verb != 'ability' and _bt.verb == _ab2.name, _bt.verb)
check('no political abilities in a courtroom',
      not [1 for a in _t2.actors() for ab in a.abilities if 'political' in ab.tags],
      str([ab.name for a in _t2.actors() for ab in a.abilities
           if 'political' in ab.tags]))
_full = [a for a in _t2.actors() if a.composure == a.max_composure][0]
_sus = _full.ability('sustain')
_bt2 = _t2.resolve(Action(actor=_full, verb='ability', text='.', ability='sustain',
                          skill='composure', dc=5))
check('Sustain at full composure is not a wasted turn',
      'recovers 0' not in ' '.join(_bt2.effects), str(_bt2.effects))

print('\nABILITIES (from the canon shop)')
from wahsim.core.abilities import (ap_spent, describe, find, load_loadout,
                                   loadout_for, to_ability)
check('shop is indexed', find('Shadow Dodge') is not None)
check('lookup is case-insensitive', find('shadow dodge') is not None)
check('partial match prefers a prefix hit',
      str((find('Guardian') or {}).get('name', '')).lower().startswith('guardian'),
      str((find('Guardian') or {}).get('name')))
# Shorthand is inherently ambiguous ('Bullet' matches six abilities), so the
# real guarantee is that purchase sheets resolve EXACTLY, not fuzzily.
_names = ['Shadow Dodge', 'Hidden Potential', "Sharpshooter's Edge",
          "Guardian's Vigil", 'Bullet Speed', 'Bullet Swift']
check('every purchase name is an exact shop match',
      all((find(n) or {}).get('name') == n for n in _names),
      str([n for n in _names if (find(n) or {}).get('name') != n]))
check('unknown ability returns None', find('Definitely Not Real') is None)
_ab = to_ability(find('Shadow Dodge'))
check('translated ability has a skill', bool(_ab.skill))
check('translated ability has a bonus', 2 <= _ab.bonus <= 6, str(_ab.bonus))
check('tags are not duplicated', len(_ab.tags) == len(set(_ab.tags)), str(_ab.tags))
_arch = loadout_for('archie')
check("Archie's 6 purchases all resolve", len(_arch) == 6, str(len(_arch)))
check('AP total is computed', ap_spent('archie') >= 5, str(ap_spent('archie')))
check('lookup tolerates canon id vs shorthand',
      len(loadout_for('archie_miser')) == 6)
check('describe() renders', 'Shadow Dodge' in describe('archie'))
check('missing character is handled', loadout_for('nobody_here') == [])
check('unknown names are skipped, not fatal',
      len(load_loadout(['Shadow Dodge', 'Not A Real Ability'])) == 1)
_a = actor_from_record(find_character('archie'), 'defendant', Dice(seed=2))
grant_abilities(_a, Dice(seed=2), 3)
check('purchases are granted to the actor in play',
      len(_a.meta.get('purchased', [])) == 6)
check('sustain is still granted alongside', _a.ability('sustain') is not None)

print('\nGLAZED CONGRESS (scale)')
_gm, _gs, _ = play(GlazedCongressMode, {'motion': 'Test', 'size': 100}, seed=3)
check('chamber holds 100 seats', len(_gm.seats) == 100, str(len(_gm.seats)))
check('but only a handful speak', len(_gm.actors()) <= 12, str(len(_gm.actors())))
check('reaches a result', _gm.result in ('CARRIED', 'FAILED'), _gm.result)
_t = _gm.tally
check('every seat votes exactly once',
      _t['for'] + _t['against'] + _t['abstain'] == len(_gm.seats))
check('resolves in a playable number of turns', len(_gs.beats) <= 60,
      str(len(_gs.beats)))
_chart = _gm.floor_chart()
check('chart fits one screen at 100 seats', len(_chart.splitlines()) <= 24,
      f'{len(_chart.splitlines())} lines')
check('chart is bloc-level, not seat-level', 'BLOC' in _chart)
check('swing list is surfaced', 'SWING SEATS' in _chart)
check('bloc drill-down works',
      'Sovereignty' in _gm.bloc_detail('Sovereignty'))
check('leans stay in bounds', all(-100 <= x.lean <= 100 for x in _gm.seats))
check('epilogue breaks down by bloc', 'FOR' in _gm.epilogue())
_res = [play(GlazedCongressMode, {'motion': 'M', 'size': 100}, seed=s)[0].result
        for s in range(10)]
check('outcome is competitive at scale', 2 <= _res.count('CARRIED') <= 8,
      f"{_res.count('CARRIED')}/10 carried")
_small, _, _ = play(GlazedCongressMode, {'motion': 'M', 'size': 20}, seed=1)
check('scales down to a small chamber', len(_small.seats) == 20)

print('\nENTRY POINTS')
os.environ['WAHSIM_NO_SUBTESTS'] = '1'
# Regression guard for the relative-import crash: every runnable file must work
# BOTH as `python file.py` (from inside the folder) and as `python -m ...`.
import subprocess
_here = os.path.dirname(os.path.abspath(__file__))
_root = os.path.dirname(_here)


def _runs(args, cwd, label):
    try:
        r = subprocess.run([sys.executable] + args, cwd=cwd, capture_output=True,
                           text=True, timeout=120)
        bad = 'ImportError' in r.stderr or 'ModuleNotFoundError' in r.stderr
        check(label, not bad, r.stderr.strip().splitlines()[-1] if bad else '')
    except subprocess.TimeoutExpired:
        check(label, False, 'timed out')


_runs(['cli.py', '--check'], _here, 'python cli.py (inside folder)')
_runs(['-c', 'import gui'], _here, 'import gui.py (inside folder)')
_runs(['-c', 'import run_gui'], _here, 'import run_gui.py (inside folder)')
_runs(['-m', 'wahsim', '--check'], _root, 'python -m wahsim (repo root)')
_runs(['-m', 'wahsim.cli', '--check'], _root, 'python -m wahsim.cli (repo root)')
_runs(['-c', 'import wahsim.gui'], _root, 'import wahsim.gui (repo root)')

print('\nREPLAY')
a1, _, _ = play(TrialMode, {'prosecutor': 'edgeworth', 'witness_count': 3}, seed=404)
a2, _, _ = play(TrialMode, {'prosecutor': 'edgeworth', 'witness_count': 3}, seed=404)
check('same seed reproduces the verdict', a1.verdict == a2.verdict)

print(f'\n{"─"*50}\n  {PASS} passed, {FAIL} failed\n')
sys.exit(1 if FAIL else 0)
