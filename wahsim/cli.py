"""WahSim — turn-based AI simulation engine.

    python3 -m wahsim.cli                    interactive menu
    python3 -m wahsim.cli trial              jump straight to a mode
    python3 -m wahsim.cli congress --auto    watch the AI run it solo
    python3 -m wahsim.cli scene --premise "Wario sells gravity to a banker"
    python3 -m wahsim.cli trial --live       use a real model (see --help)
"""
from __future__ import annotations

import argparse
import sys
import textwrap

# Support both `python cli.py` (from inside the folder) and `python -m wahsim`.
if __package__ in (None, ''):
    import os

    sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    from wahsim import config
    from wahsim.core.brain import LMStudioBrain, make_brain
    from wahsim.core.dice import Dice, Modifier
    from wahsim.core.engine import Action, Session
    from wahsim.core.roster import has_data
    from wahsim.modes.congress import CongressMode
    from wahsim.modes.glazed import GlazedCongressMode
    from wahsim.modes.scene import SceneMode, direct_scene
    from wahsim.modes.trial import TrialMode
else:
    from . import config
    from .core.brain import LMStudioBrain, make_brain
    from .core.dice import Dice, Modifier
    from .core.engine import Action, Session
    from .core.roster import has_data
    from .modes.congress import CongressMode
    from .modes.glazed import GlazedCongressMode
    from .modes.scene import SceneMode, direct_scene
    from .modes.trial import TrialMode

W = 66
BAR = '═' * W


def rule(ch='─'):
    print(ch * W)


def head(t: str):
    print()
    print(BAR)
    print(f'  {t}')
    print(BAR)


def wrap(t: str, indent: str = '  ') -> str:
    return '\n'.join(textwrap.fill(p, W - 2, initial_indent=indent,
                                   subsequent_indent=indent)
                     for p in str(t).split('\n') if p.strip())


def ask(prompt: str, default: str = '') -> str:
    try:
        v = input(f'{prompt}{f" [{default}]" if default else ""}: ').strip()
    except (EOFError, KeyboardInterrupt):
        print()
        return default
    return v or default


# --------------------------------------------------------------------------
def run(session: Session, auto: bool = False, show_dice: bool = True):
    mode = session.mode
    head(mode.title.upper())
    if getattr(mode, 'premise', ''):
        print(wrap(mode.premise))
    if getattr(mode, 'setting', ''):
        print(wrap(mode.setting))
    if getattr(mode, 'motion', ''):
        print(wrap(f'MOTION: {mode.motion}'))
    if getattr(mode, 'case_name', ''):
        print(wrap(f'{mode.case_name} — {mode.charge}'))

    print()
    print('  CAST')
    for a in mode.actors():
        tag = ' ◀ YOU' if a.is_player else ''
        print(f'   {a.name:<28} {a.role:<11}{a.faction[:20]:<21}{tag}')

    last_phase = None
    guard = 0
    while not mode.finished() and guard < config.MAX_TURNS:
        guard += 1
        actor = session.current
        if actor is None:
            session.next_phase()
            continue

        if session.phase.key != last_phase:
            last_phase = session.phase.key
            head(f'PHASE — {session.phase.name}')
            print(wrap(session.phase.description))
            _order = session.turn_order()
            if _order:
                print()
                print('  TURN ORDER THIS PHASE:')
                for _i, _a in enumerate(_order, 1):
                    _me = '  ◀ you' if _a.is_player else ''
                    print(f'    {_i}. {_a.name} ({_a.role}){_me}')
                _rounds = session.phase.max_rounds
                print(f'    …repeating for {_rounds} round(s)' if _rounds
                      else '    …repeating until the phase ends')
            hook = getattr(mode, 'on_phase_start', None)
            if hook and session.round == 1:
                hook(session.phase)
            if mode.finished():
                break

        print()
        rule()
        _o = session.turn_order()
        _seat = (_o.index(actor) + 1) if actor in _o else 1
        print(f'  {session.phase.name} · round {session.round} · '
              f'turn {_seat}/{len(_o) or 1} — {actor.name} ({actor.role})')
        if len(_o) > 1:
            _nxt = _o[(session.turn_idx + 1) % len(_o)]
            print(f'  next up: {_nxt.name} ({_nxt.role})')
        print(f'  {mode.status()}')
        rule()

        opts = mode.options(actor)
        if not opts:
            session.advance()
            continue

        if actor.is_player and not auto:
            action = player_turn(session, actor, opts)
            if action is None:
                break
        else:
            idx = session.brain.choose(actor, opts, session.context())
            o = opts[max(0, min(idx, len(opts) - 1))]
            line = session.brain.speak(actor, session.context())
            action = Action(actor=actor, verb=o['verb'], text=line,
                            skill=o.get('skill', ''), ability=o.get('ability', ''),
                            dc=o.get('dc'))

        beat = mode.resolve(action)
        session.record(beat)
        print()
        print(beat.render(show_dice))
        session.advance()

    print(mode.epilogue())
    if isinstance(session.brain, LMStudioBrain):
        b = session.brain
        print(f'\n  [brain: {b.model} · {b.calls} calls · {b.failures} fallbacks]')
        if b.failures and b.last_error:
            print(f'  [last error: {b.last_error}]')
    print(f'  [seed {session.dice.seed} — reuse with --seed to replay]')


def player_turn(session: Session, actor: 'Actor', opts: list[dict]):
    mode = session.mode
    print()
    print(f'  YOUR MOVE — {actor.name}')
    print(f'  composure {actor.composure_bar} {actor.composure}/{actor.max_composure}')
    for i, o in enumerate(opts, 1):
        print(f'   {i:2d}. {o["label"]}')
        if o.get('hint'):
            print(f'       {o["hint"]}')
    print('    s. sheet    t. transcript    c. chart/status    q. quit')

    while True:
        raw = ask('  choose')
        if not raw:
            continue
        low = raw.lower()
        if low == 'q':
            return None
        if low == 's':
            print()
            print(actor.sheet())
            continue
        if low == 't':
            print()
            print(session.transcript())
            continue
        if low == 'c':
            print()
            chart = getattr(mode, 'floor_chart', None)
            print(chart() if chart else mode.status())
            continue
        if low.isdigit() and 1 <= int(low) <= len(opts):
            o = opts[int(low) - 1]
            said = ask('  what do you say (blank to improvise)')
            if not said:
                said = session.brain.speak(actor, session.context())
            tgt = ''
            if o['verb'] in ('lobby', 'question', 'contest', 'present'):
                tgt = ask('  target (blank = auto)')
            return Action(actor=actor, verb=o['verb'], text=said,
                          target=tgt, skill=o.get('skill', ''),
                          ability=o.get('ability', ''), dc=o.get('dc'))
        print('  ?')


# --------------------------------------------------------------------------
def build_trial(dice, brain, args) -> TrialMode:
    if args.auto or args.yes:
        spec = {'case_name': args.case or 'Crown v. The Accused',
                'charge': args.charge or 'Conspiracy against the Crown',
                'prosecutor': 'edgeworth', 'defendant': 'archie',
                'player_side': 'defense', 'witness_count': 3}
    else:
        head('TRIAL SETUP')
        print(wrap('Blank answers are filled in for you. Names are matched '
                   'against the real character index when possible.'))
        print()
        spec = {
            'case_name': ask('  Case name', 'Crown v. The Accused'),
            'charge': ask('  Charge', 'Conspiracy against the Crown'),
            'judge': ask('  Judge (blank = generate)'),
            'prosecutor': ask('  Prosecutor', 'edgeworth'),
            'defense': ask('  Defence counsel (blank = generate)'),
            'defendant': ask('  Defendant', 'archie'),
            'player_side': ask('  You play (prosecution/defense)', 'defense'),
            'witness_count': int(ask('  Witnesses', '3') or 3),
        }
    return TrialMode(dice, brain, spec)


def build_congress(dice, brain, args) -> CongressMode:
    if args.auto or args.yes:
        spec = {'motion': args.motion or
                'Resolution 18: recognition of the Doughnut Hole as a sovereign anomaly',
                'delegate_count': 9}
    else:
        head('CONGRESS SETUP')
        spec = {
            'motion': ask('  The motion',
                          'Resolution 18: recognition of the Doughnut Hole'),
            'detail': ask('  Any detail (optional)'),
            'sponsor': ask('  You are the sponsor named', 'The Sponsor'),
            'threshold': ask('  Threshold (simple/super)', 'simple'),
            'delegate_count': int(ask('  Delegations', '9') or 9),
        }
    return CongressMode(dice, brain, spec)


def build_scene(dice, brain, args) -> SceneMode:
    prem = args.premise or (
        ask('  Describe the scene',
            'Wario tries to sell gravity while Waluigi objects')
        if not (args.auto or args.yes) else
        'Wario tries to sell gravity while Waluigi objects')
    print()
    print('  Directing…')
    plan = direct_scene(prem, dice, brain)
    print(f'  setting: {plan.get("setting","")}')
    for c in plan.get('cast', []):
        print(f'   · {c.get("name") or "(generated)":<24} {c.get("role","")}')
    return SceneMode(dice, brain, {'premise': prem, 'plan': plan,
                                   'play': not args.auto})


def build_glazed(dice, brain, args) -> 'GlazedCongressMode':
    if args.auto or args.yes:
        spec = {'motion': args.motion or
                'Ratification of the Species Recognition Compact', 'size': 100}
    else:
        head('GLAZED CONGRESS SETUP')
        print(wrap('The full chamber. Blocs are the unit of play: you whip '
                   'blocs and work swing seats rather than lobbying 100 seats '
                   'one at a time.'))
        spec = {
            'motion': ask('  The motion',
                          'Ratification of the Species Recognition Compact'),
            'sponsor': ask('  You are the sponsor named', 'The Sponsor'),
            'threshold': ask('  Threshold (simple/super)', 'simple'),
            'size': int(ask('  Chamber size', '100') or 100),
        }
    return GlazedCongressMode(dice, brain, spec)


MODES = {'trial': build_trial, 'congress': build_congress,
         'glazed': build_glazed, 'scene': build_scene}


def main(argv=None):
    p = argparse.ArgumentParser(
        prog='wahsim', description='Turn-based AI simulation engine.',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog=textwrap.dedent("""
        live model (LM Studio):
          1. Load a model in LM Studio
          2. Developer tab -> Start Server   (default port 1234)
          3. python3 -m wahsim.cli trial --live

        No API key needed. The loaded model is auto-detected.
        Check the connection first with:  python3 -m wahsim.cli --check

        Other OpenAI-compatible servers work too:
          --api-base http://localhost:11434/v1     (Ollama)
          WAHSIM_API_BASE / WAHSIM_MODEL / WAHSIM_API_KEY env vars
        """))
    p.add_argument('mode', nargs='?', choices=list(MODES), help='mode to run')
    p.add_argument('--seed', type=int, help='replay a previous session exactly')
    p.add_argument('--auto', action='store_true', help='AI plays every seat')
    p.add_argument('--yes', action='store_true', help='skip setup prompts')
    p.add_argument('--live', action='store_true', help='use a real model')
    p.add_argument('--model'); p.add_argument('--api-base'); p.add_argument('--api-key')
    p.add_argument('--premise', help='scene mode premise')
    p.add_argument('--motion', help='congress motion')
    p.add_argument('--case'); p.add_argument('--charge')
    p.add_argument('--no-dice', action='store_true', help='hide roll maths')
    p.add_argument('--check', action='store_true',
                   help='test the LM Studio connection and exit')
    p.add_argument('--gui', action='store_true', help='launch the browser GUI')
    p.add_argument('--port', type=int, default=8765, help='GUI port')
    p.add_argument('--verbose', action='store_true')
    args = p.parse_args(argv)

    if args.check:
        from wahsim.core.brain import LMStudioBrain, ScriptedBrain
        b = LMStudioBrain(ScriptedBrain(Dice(0)), base=args.api_base,
                          key=args.api_key, model=args.model)
        head('LM STUDIO CONNECTION')
        print(f'  endpoint : {b.base}')
        ok, msg = b.ping()
        print(f'  status   : {"CONNECTED" if ok else "NOT REACHABLE"}')
        print(f'  detail   : {msg}')
        if ok:
            print(f'  model    : {b.model}')
        else:
            print()
            print(wrap('Start LM Studio, load a model, then open the Developer '
                       'tab and click Start Server. Default port is 1234.'))
        return 0 if ok else 1

    if args.gui:
        from wahsim.gui import serve
        serve(live=args.live, model=args.model, api_base=args.api_base, port=args.port)
        return 0

    mode_key = args.mode
    if not mode_key:
        head('WAHSIM')
        print('  A modular, dice-driven simulation engine.')
        print(f'  canon data: {"loaded" if has_data() else "not found (generating cast)"}')
        print()
        print('   1. Trial      — courtroom: evidence, witnesses, verdict')
        print('   2. Congress   — small chamber: 9 delegations, seat by seat')
        print('   3. Glazed     — the FULL chamber: 100 delegations, whip blocs')
        print('   4. Scene      — describe any situation and play it out')
        print()
        c = ask('  mode', '1')
        mode_key = {'1': 'trial', '2': 'congress', '3': 'glazed',
                    '4': 'scene'}.get(c, c)
        if mode_key not in MODES:
            print('  unknown mode'); return 1

    dice = Dice(seed=args.seed)
    brain = make_brain(dice, live=args.live, model=args.model,
                       base=args.api_base, key=args.api_key,
                       verbose=args.verbose) if args.live else make_brain(dice)

    mode = MODES[mode_key](dice, brain, args)
    session = Session(mode, dice, brain)
    try:
        run(session, auto=args.auto, show_dice=not args.no_dice)
    except KeyboardInterrupt:
        print('\n  — session abandoned —')
    return 0


if __name__ == '__main__':
    sys.exit(main())
