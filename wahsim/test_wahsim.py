"""Smoke + invariant tests.  python3 -m wahsim.test_wahsim"""
from __future__ import annotations

import contextlib
import io
import sys

from .cli import run
from .core.brain import ScriptedBrain, make_brain
from .core.dice import DC, Dice, Modifier, Outcome
from .core.engine import Session
from .core.entities import build_actor
from .core.roster import find_character, generate_actor, grant_abilities
from .modes.congress import CongressMode
from .modes.scene import SceneMode, direct_scene
from .modes.trial import TrialMode

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

print('\nREPLAY')
a1, _, _ = play(TrialMode, {'prosecutor': 'edgeworth', 'witness_count': 3}, seed=404)
a2, _, _ = play(TrialMode, {'prosecutor': 'edgeworth', 'witness_count': 3}, seed=404)
check('same seed reproduces the verdict', a1.verdict == a2.verdict)

print(f'\n{"─"*50}\n  {PASS} passed, {FAIL} failed\n')
sys.exit(1 if FAIL else 0)
