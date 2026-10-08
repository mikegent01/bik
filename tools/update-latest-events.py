#!/usr/bin/env python3
"""Standardize the latest events on the homepage in events.json.
- Convert absolute GitHub Pages URLs to relative #/article/ routes.
- Retain concise lead summary in description.
- Structure narrative beats into canonical sections array with name, icon, overview, and waluigi_note.
"""
import json, re, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_PATH = os.path.join(ROOT, "Reputation-Matrix2", "data", "events.json")

def clean_urls(text):
    return re.sub(r'https://mikegent01\.github\.io/bik/index\.html(#/article/[a-zA-Z0-9_]+)', r'\1', text)

def process_event(ev, sec_meta):
    desc = clean_urls(ev.get('description', ''))
    parts = desc.split('\n## ')
    ev['description'] = parts[0].strip()

    sections = []
    for i, p in enumerate(parts[1:]):
        lines = p.split('\n')
        header = lines[0].strip()
        body = clean_urls('\n'.join(lines[1:]).strip())
        name, icon, note = sec_meta[i]
        sections.append({
            'name': name,
            'icon': icon,
            'overview': body,
            'waluigi_note': note
        })
    ev['sections'] = sections

def main():
    with open(DATA_PATH, 'r', encoding='utf-8') as f:
        events = json.load(f)

    events_by_id = {e['id']: e for e in events if e.get('id')}

    # 1. the_way_i_started_it
    ev_twisi = events_by_id.get('the_way_i_started_it')
    if ev_twisi:
        sec_meta_twisi = [
            ('I. Deeper in', '🌲', "The giant green spider closed on Markop in one filing, bit Archie through a paladin's shield in the next, and was described as the best fighter in the grove. It died to a Toad scout with short blades, past the ash, with no ceremony. Waluigi opens its file and closes it in the same sentence, which is more than it did for anybody."),
            ('II. One arm, two tools', '🛡️', "A man who can hold only one thing chose the tool that protects other people instead of the steel that protects himself. Waluigi records the arithmetic without comment, which for Waluigi is a comment."),
            ('III. The stump', '🪵', "Revving an idling motorbike in the dark to blow gravel into an ettercap's eyes is the machine's first useful act since it hit a pine tree two filings ago."),
            ('IV. The scream', '😱', "The scream was agreed as the retreat signal that nobody wanted to make. Tonight it was torn out of a wizard watching a paladin drop, and nobody retreated because retreat had already stopped being possible. Made on schedule, meaning something else entirely."),
            ('V. The way I started it', '🔥', "Archie has threatened fireball in hallways, faked it in the grove, and held it back when begged. This was the first time the real one arrived, whispered over a friend set down in the dirt with nothing left in the book behind it. Waluigi files the volume."),
            ('VI. Two hit points', '🩸', "Markop stayed where the plan put him; Eager thought he had been abandoned. Both men were right, and Waluigi has stopped expecting that to be unusual in this grove."),
            ('VII. The fist', '👊', "The grove took a scythe, a thunder-called warhammer, a javelin thrown across its full length, a whispered fireball, and most of a paladin. It ended on a bare knuckle punch from the man who never left the stump. Waluigi files that with something he declines to name."),
            ('VIII. The stump, again', '🏕️', "Markop's question is the only mention of Remi in the record tonight. He was outvoted, exhausted, and bleeding, and the record does not show him agreeing."),
            ('IX. The post-mortem, which the table held itself', '📜', "The table calls this a tactical lesson. The archive calls it the exact same failure as the last two filings with the furniture rearranged, and files it anyway."),
            ('X. The table', '🎲', "Of a hundred rows on the steel ladder, the die found the one injury that costs a one-armed paladin nothing. The thumb is real and splinted, but the rule applies to a body he does not have. The kindest joke the grove produced all night."),
            ('XI. Standing', '🏁', "Five people are going back to the stump to rest, which is where they were supposed to be an hour ago before any of this began. WAH.")
        ]
        process_event(ev_twisi, sec_meta_twisi)
        print("Updated the_way_i_started_it: 11 sections")

    # 2. you_said_leave_no_one_behind
    ev_yslnob = events_by_id.get('you_said_leave_no_one_behind')
    if ev_yslnob:
        sec_meta_yslnob = [
            ('I. The Worst First Ride in the Archive', '🏍️', "A centaur on a goblin-built motorbike with no clutch experience is an aviation disaster waiting to ignite. Waluigi records that the throttle survived the oak tree."),
            ('II. Let Him Go — He Is Awake', '👁️', "Quoting an army's official field manual back to a sentry holding a weapon is dangerous literature. Markop made the code work by standing between the guard and the trees."),
            ('III. Salam, You Rest', '🏹', "An order to rest is the rarest command in this archive, and Salam took it without an argument because his ribs were whistling like an open flute."),
            ('IV. The Toads Go Up', '🐸', "The Toads made their own arithmetic in the dark. In this archive, scouts who plan their disengagement before the shouting begins are usually the ones who survive to be audited."),
            ('V. A Legion Man Runs', '🏃', "A trained legionary does not run from bad weather. Whatever was coming through the branches behind him had stripped six months of drill right out of his boots."),
            ('VI. One Spell', '📖', "Holding one spell in reserve while surrounded by things with mandibles is a severe test of character. Archie held the book shut until the grove demanded the fire."),
            ('VII. Blades for a Doorway', '⚔️', "Eager made a doorway out of swinging steel. One Toad carving twenty seconds of free air for a wizard who was still trying to remember where he parked his boots."),
            ('VIII. The Green One', '🕷️', "The giant green spider did not negotiate. It closed the perimeter like an experienced bailiff with eight legs and an overactive venom gland."),
            ('IX. Stand Still, You Worm', '🛑', "Calling a wounded Toad a worm while trying to repossess him for a military hospital tab is standard Legion bedside manner. Salam's refusal was his best line all night."),
            ('X. The Syringe', '💉', "The Legion's idea of roadside first aid is an iron needle the size of a knitting needle shoved through combat fatigues without an antiseptic wipe."),
            ('XI. Standing', '🏁', "The code came back the other way, the scream was still trapped in Archie's throat, and the grove was about to demand the rest of the bill. WAH.")
        ]
        process_event(ev_yslnob, sec_meta_yslnob)
        print("Updated you_said_leave_no_one_behind: 11 sections")

    # 3. the_cut_and_the_puppet_master
    ev_cut = events_by_id.get('the_cut_and_the_puppet_master')
    if ev_cut:
        sec_meta_cut = [
            ('I. The Break Room, Inventoried', '☕', "The break room had four screens showing static and one showing a forged Mario beating the real one. Waluigi notes that broadcast production values have cratered across the provinces."),
            ('II. The Button That Made Coffee', '🔘', "An emergency exit button wired to a drip percolator is the ultimate corporate trap. Darian tested it with the grim fatalism of a man who expects the radiator to shoot at him."),
            ('III. Into the Ceiling', '🪜', "Arming yourself with an industrial rolling pin and a flashlight before crawling into sheet-metal air ducts is sound estate management when dealing with rogue media personnel."),
            ('IV. The Man at the Blue Light', '💻', "Luigi frantically typing in the dark at a maintenance terminal, trying to hack an access gate while muttering to himself. The first confirmed sighting of the real plumber in the complex."),
            ('V. The Rolling Pin, and the Arm That Stopped It', '🛑', "Darian dropping from the rafters to brain an unfamiliar plumber with kitchen hardware, only for Alistair to catch the swing. Restraint in an air shaft is hard to come by."),
            ('VI. Innocence Doesn\'t Get You Far', '😈', "The corrupted Mario kicking the door off its hinges with glowing red pupils and bruised knuckles. That voice had too much bass and bad intent for a licensed plumber."),
            ('VII. The Cape', '🪶', "Shadowy pixelated feathers moving like live leeches. The studio walls cracking and stage lights buzzing to the frequency of corrupt broadcast signals."),
            ('VIII. Plumber Man', '🎶', "Paratroopas flying in formation with combat ordnance to the rhythm of an unlicensed theme song. A choreographed television hit squad operating on camera cues."),
            ('IX. The Freeze, and the Yank', '❄️', "Darian commanding the frost spray, freezing the floor under the creature's boots and tearing the feathered mantle away with a grappling hook."),
            ('X. A Leaf, a Second Head, and a Very Stupid Return', '🍃', "A Tanuki leaf producing a fox tail and a grotesque second head muttering about broadcast ratings. Waluigi declines to audit the biological feasibility of studio props."),
            ('XI. Fire, Water, Ice', '🔥', "The creature shedding all anatomy to become an open pillar of kerosene flame, setting the acoustic ceiling tiles and set dressing ablaze."),
            ('XII. CUT', '🎬', "Darian shouting CUT at the top of his lungs and freezing the entire soundstage in place. One provincial lord out-reasoning a television crew with industry jargon."),
            ('XIII. Best Show on TV', '👏', "Wario emerging from the dark clapping his fat paws together, praising the special effects and trying to charge admission fees for an unlicenced brawl."),
            ('XIV. The Man Wario Bows To', '🧢', "A shadowy figure in a director's cap holding a television remote control, commanding the set and the budget. The one authority Wario does not dare invoice."),
            ('XV. The Watcher, the Hall, and the Remote', '📺', "Evil Mario lingering in the shadows with red eyes fixed on the Director. The mechanical chain of command behind the broadcast exposed."),
            ('XVI. Standing', '🏁', "Burned fingers, a bent rolling pin, a studio that refuses to stay dead, and a lord who understands that television is just debt in high definition. WAH.")
        ]
        process_event(ev_cut, sec_meta_cut)
        print("Updated the_cut_and_the_puppet_master: 16 sections")

    # 4. the_airlift_that_never_came
    ev_airlift = events_by_id.get('the_airlift_that_never_came')
    if ev_airlift:
        sec_meta_airlift = [
            ('I. The Guard, the Code, and the Argument Nobody Won', '🛡️', "An Iron Legion guard hoisting a casualty onto his shoulder and offering an evacuation hospital that doesn't exist. Waluigi records the military bedside manner."),
            ('II. A Helicopter, and a Toad Who Has Never Heard of One', '🚁', "Dan asking 'What's a helicopter?' while standing in burning ash. A paladin who understands planar rifts and holy smites completely baffled by rotary aviation."),
            ('III. Remi, Alone, Doing the Arithmetic', '🧮', "Checking the blood on her sleeve, counting remaining supplies, and preparing an exit route before the fire consumes the branches. Professional triage under fire."),
            ('IV. Markop, Surrounded', '🕸️', "Three spiders closing in on the centaur with egg sacs underfoot. Stopping his own bleeding first with bandages before raising the heavy pike."),
            ('V. Archie\'s Last High-Level Spell, Spent on a Bush', '🔥', "Circling the last spell slot with an ink pencil, roaring FIREBALL, and vaporizing an empty blackberry bramble. Magic spent on panic rather than line defense."),
            ('VI. The Toads, Singing, Being Followed', '🎶', "Singing hiking tunes while ettercaps stalk the tree canopy thirty feet overhead. Oblivious confidence in a hostile wetland."),
            ('VII. The Extraction, and What It Cost the Guards', '🩹', "A sentry attempting a fireman carry over uneven roots, tripping, and losing his grip on the patient while spiders close the distance."),
            ('VIII. Shatter, a Javelin, and a Barrier', '⚡', "Archie shattering the air around the perimeter; Dan stepping into the breach with an iron javelin to pin an ettercap to a cedar trunk."),
            ('IX. The Wrights, the Torch, and the Door', '🚪', "Wario providing torchlight only to reveal a cellar packed with animated wrights. Illumination is rarely an improvement in this grove."),
            ('X. Anamatar\'s Price', '💰', "Pierce Anamatar blocking the doorway, demanding trade terms and safe conduct fees while monsters claw at the doorframe outside."),
            ('XI. Where the Party Was When the Line Broke', '🗺️', "A tactical map of four separate factions stranded across two hundred yards of peat smoke with no working communications link."),
            ('XII. The First Retreat Was Not an Airlift', '🏃', "The promised air extraction dissolved into an undignified scramble through brambles and muddy ditch-lines."),
            ('XIII. The Cost of Getting Salam Out', '🩸', "Two guards wounded and one stretcher abandoned in the thorns. The true balance sheet of a botched casualty evacuation."),
            ('XIV. Remi’s Exit Is a Different Kind of Rescue', '🚪', "Remi negotiating her own transit with Anamatar rather than waiting for an army that isn't coming. Pragmatic survival over military allegiance."),
            ('XV. The Grove’s Last Sequence', '🔥', "The fire joining across the canopy, turning the Skittering Grove into an enclosed furnace while survivors crawl through the low brush."),
            ('XVI. The Price That Survives the Fire', '📜', "Promissory notes, blood-stained bandages, and broken weapon hafts left behind in the mud for future archivists to catalogue."),
            ('XVII. Standing', '🏁', "Spiders circling the perimeter, guards dragging stretchers, and three Toads wondering why the promised helicopter never arrived. WAH.")
        ]
        process_event(ev_airlift, sec_meta_airlift)
        print("Updated the_airlift_that_never_came: 17 sections")

    # 5. snowdin_bone_line_registry
    ev_snowdin = events_by_id.get('snowdin_bone_line_registry')
    if ev_snowdin:
        sec_meta_snowdin = [
            ('I. How Waluigi Got the Call', '📞', "Through an unmonitored Legion frequency during an authorized audit window. The Gamma Agent knew who kept the filing cabinets in working order."),
            ('II. The Interview, and the Witness Who Would Not Cooperate', '🩻', "Sans asleep under two loads of mismatched laundry, apologizing for his punctuality while dodging every single concrete genealogical query."),
            ('III. The Footage, and the Two Words That Were His', '📼', "Sans confirming his brother's special attack on video playback, then flatly refusing to authenticate the signatures on the household rolls."),
            ('IV. Dark, Darker, Yet Darker', '👁️', "Wing dings appearing on the terminal screen with chime audio. Sans tensing in the chair, dropping the jokes, and watching the monitor feed like a hawk."),
            ('V. Times New Roman, and a Signature Box', '📋', "Times New Roman walking in with wire-rim spectacles and an iron clipboard, moving like type that had never been folded or smudged."),
            ('VI. The Contract Burned', '🔥', "Heatless blue flames turning thirty names into smoke shaped like vertebrae. A legal document immolating itself without leaving soot on the carpet."),
            ('VII. And Then the Set Was Gone', '🚪', "The background set dissolving instantly without a fade. Just an empty room with dirty socks on the floor and a dial tone on the receiver."),
            ('VIII. What Waluigi Actually Holds', '📑', "An interview where the subject denied the document, the witness was erased, the paper burned, and the archive holds only the master tape. WAH.")
        ]
        process_event(ev_snowdin, sec_meta_snowdin)
        print("Updated snowdin_bone_line_registry: 8 sections")

    with open(DATA_PATH, 'w', encoding='utf-8') as f:
        json.dump(events, f, indent=2, ensure_ascii=False)

    print("Wrote events.json successfully.")

if __name__ == '__main__':
    main()
