#!/usr/bin/env python3
"""File the Warp Pipe Junction session. Event written last."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "Reputation-Matrix2" / "data"
EID = "warp_pipe_junction_restricted_city"
BID = "warp_pipe_junction_ladder_fight"
DATE = "5 Aethel, 1040 BF"
DATE_SORT = 10400905


def load(name):
    return json.loads((DATA / name).read_text(encoding="utf-8"))


def save(name, obj):
    (DATA / name).write_text(json.dumps(obj, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


def xp(key, aid, name, cat, n, desc):
    return {
        "xpKey": key,
        "articleId": aid,
        "name": name,
        "cat": cat,
        "xp": n,
        "title": "Event — Warp Pipe Junction, the Shack, and the Five-Foot Crayfish",
        "desc": desc,
        "date": DATE,
        "dateSort": DATE_SORT,
    }


def main():
    locs = load("locations.json")
    if not any(l.get("id") == "warp_pipe_junction" for l in locs):
        locs.append({
            "id": "warp_pipe_junction",
            "name": "Warp Pipe Junction",
            "type": "Location / Pipe Hub / Contested Gate",
            "region": "Mushroom Kingdom — inland pipe network",
            "controllingFaction": "Disputed — posted as Bowser Bros only; Loyalists tested the sign",
            "population": "A gate crew of Goombas and Koopas, plus whoever the pipes dump",
            "climate": "Damp brick, pipe-steam, rust",
            "status": "Active — restricted city beyond the gate; Loyalist squad escaped 5 Aethel, 1040 BF",
            "summary": "A hub of Warp Pipes. Some open on the kingdom. Some open on worse. The posted city beyond the gate claims to be for Bowser Bros only. On 5 Aethel a Loyalist four tried the lie about a guildmaster and left by the ladders.",
            "description": "The Junction is mobility wearing brick. Whoever holds the mouths of the pipes can put a squad anywhere the old plumbers once bothered to connect. The map already had it as an unaligned ley-line POI. The session proved the next sentence: there is a restricted city behind a gate, and the people on that gate will assign you a Goomba if you say guildmaster with enough confidence.\n\nThe shack they were walked toward was rust and old wood. It was not a guildhouse. Toadette said so out loud. The Koopa who arrived to help the Goomba called the destination the house and promised real fun. That is the Junction's other product: a poor-town excuse with a closed gate behind you.",
            "notableFeatures": [
                "Interconnected Warp Pipes — kingdom routes and stranger ones",
                "A posted gate: Bowser Bros only",
                "Ladders on the castle-side wall that flank anyone who climbs",
                "A rust shack sold as a manor",
                "A gate winch Embercap can work if he reaches it",
            ],
            "relatedArticles": [
                "peach_loyalists",
                "captain_toadette",
                "embercap",
                "scribe_dewdrop",
                "big_r",
                "bramblehaven",
                "toad_town",
            ],
        })
        print("location warp_pipe_junction added")
    save("locations.json", locs)

    chars = load("characters.json")
    if not any(c.get("id") == "big_r" for c in chars):
        chars.append({
            "id": "big_r",
            "name": "Big R",
            "title": "The Living Siege / Codename ANCHOR",
            "race": "Toad (field-called the Black Bear)",
            "status": "Active — extracted Dewdrop from Warp Pipe Junction and waited at the opened gate for Toadette",
            "affiliation": "Peach Loyalists",
            "faction": "peach_loyalists",
            "membership": "Heavy assault — first up the ladder",
            "summary": "Big R is the Loyalists' heavy. The field tally writes Black Bear. The after-action writes ANCHOR. He boosts Embercap, misses twice in a row, then finishes a Koopa and carries Dewdrop's unconscious body while Embercap works the winch.",
            "description": "Waluigi was not on that wall. The tally was. It names a Black Bear as the most-targeted body in a five-round scrap, and it names Big R as ANCHOR in the same breath as a Magikoopa's attention. Waluigi is filing them as one person until a second hearing splits them.\n\n## What the session proved\n\nHe climbed last in a four-person ladder order: Embercap, Dewdrop, Toadette, then him. He boosted Embercap onto a Goomba and smiled when Embercap went prone to kill it. He fought a Magikoopa that would not stay in one place. He missed. He hit. He took a spear and five gold off a corpse because that is what a siege specialist does when the gate is finally open.\n\nHe picked Dewdrop up. That is the line Waluigi wants read twice.\n\n## Assessment\n\nA living siege tower is a compliment until you watch one fall to a teleporting mage. Big R got up. He waited at the entrance for Toadette. The army at the pipe-edge still had its heavy.",
            "keyEvents": ["warp_pipe_junction_restricted_city"],
            "relatedArticles": ["captain_toadette", "embercap", "scribe_dewdrop", "peach_loyalists", "warp_pipe_junction"],
        })
        print("character big_r added")
    for cid, status in {
        "captain_toadette": "Active — back from Warp Pipe Junction with dull claws and a closed question about rats",
        "embercap": "Active — opened the Junction gate from the inside and dragged Dewdrop through it",
        "scribe_dewdrop": "Active — twice unconscious on the Junction wall; carried out; blessed the squad from Big R's back between the two falls",
    }.items():
        for c in chars:
            if c.get("id") == cid:
                c["status"] = status
    save("characters.json", chars)

    # XP decided before prose
    awards = [
        xp("captain_toadette", "captain_toadette", "Captain Toadette", "magic", 280, "Wild-shaped into a five-foot crayfish and glued herself to a Koopa with claw and spore."),
        xp("captain_toadette", "captain_toadette", "Captain Toadette", "combat", 180, "Stayed on the same Koopa after the brick ruined a claw, then finished the wall."),
        xp("embercap", "embercap", "Embercap", "social", 200, "Sold the guildmaster lie at the Bowser Bros gate and the crew bought it."),
        xp("embercap", "embercap", "Embercap", "combat", 180, "Killed the Goomba from prone, worked the winch, dragged Dewdrop through the opened gate."),
        xp("embercap", "embercap", "Embercap", "survival", 120, "Took a Goomba on his head, dropped, and lived to climb again."),
        xp("big_r", "big_r", "Big R", "combat", 240, "Boost, misses, a kill, a Magikoopa that would not stay, and the last Koopa at the entrance."),
        xp("big_r", "big_r", "Big R", "loyalty", 160, "Carried Dewdrop and waited for Toadette instead of leaving first."),
        xp("dewdrop", "scribe_dewdrop", "Dewdrop", "survival", 220, "Critically speared, downed, woke, blessed the squad from Big R's back, downed again, extracted."),
        xp("dewdrop", "scribe_dewdrop", "Dewdrop", "magic", 120, "Staff work to get Embercap up and a blessing that landed while he could barely sit."),
    ]

    sections = [
        {
            "name": "The Edge of the Pipes",
            "icon": "🚧",
            "overview": """Toadette stood at the lip of the Warp Pipe Junction and did not go down.

Behind her the army waited the way Loyalist armies wait: quiet, packed, watching the back of her head as if the next order might already be in her neck. In front of her the pipes breathed. Wet brick. Steam that smelled like old metal and someone else's destination.

She sat.

The thought she did not share with the ranks was small and ugly and correct. She should not have sent a rat to do reconnaissance. The rat had not come back.

*WAH! Waluigi was not on that lip. Waluigi has the after-action and a captain who will not write the sentence 'I was wrong about the rat.' So Waluigi will write it. She sat there knowing. That is better than most officers Waluigi has audited, and it is still a missing rat.*""",
        },
        {
            "name": "Bowser Bros Only",
            "icon": "🚫",
            "overview": """Halt.

The word came off the gate the way paint comes off a cheap sign: already peeling, still legally there. You may not enter. Restricted city. Bowser Bros only.

Embercap stepped forward with the crimson plume doing what it always does — making him visible on purpose.

“Can you make an exception,” he said, “to let us in.”

The gate did not move.

“We have a message for the guildmaster,” Embercap said. “We need to discuss matters.”

It was a lie. It was a clean lie. The kind of lie a field commander tells when the captain is still thinking about a rat and the army is still behind her and the only other option is to admit you have no paper.

They bought it.

A guard was assigned. The gates opened. A Goomba was given the four of them — Toadette, Embercap, Dewdrop, Big R, the Loyalist leadership in one stupid, hopeful line — and told to watch them.

“Alright,” Embercap said.

The Goomba said he would lead them to the manor.""",
        },
        {
            "name": "The Rust Shack",
            "icon": "🏚️",
            "overview": """Toadette could not tell if the Goomba was lying. That is not a metaphor. She looked at him and the read would not come.

“It's right in here,” the Goomba said, and pointed.

Rust. Old wood. A shack that had given up on being a building and become a warning that had not been written down.

“Hmm,” Toadette said. “Thought it would be more of a forewarning.”

She waited.

Then: “Wait a minute.”

The pause was long enough to be rude.

“This isn't the guildmaster's house, is it.”

“What do you mean.”

“Well,” she said, and this is the sentence Waluigi wants carved on the Junction, “if the guildmaster is sleeping anywhere, he would be sleeping in a guildhouse, where he hosts his guild.”

“Well,” said the Goomba, “it's a poor town.”

“Hmm. Now that you mention it. This isn't the real house, is it, Goomba boy.”""",
        },
        {
            "name": "You'll Have Real Fun",
            "icon": "🐢",
            "overview": """A Koopa came up the way help comes up when it is not help.

“These boys giving you trouble.”

“Nah,” said the Goomba. “I was leading them to the house.”

“Ohhh. The house. You guys are going to have real fun.”

They got the sense it was a lie. Toadette said the next part out loud, because saying it out loud is how she keeps a squad from walking into a shack.

“We get the sense the grandmaster lives there.”

They walked away. The Goomba and the Koopa followed.

“Leave us alone. We will report you to the authorities. We don't know the guild members personally.”

“You don't. That's the reason you went in the town.”

“Yeah… we're acquainted with him. Don't know their friends but umm. Uhh.”

They kept following.

“Don't worry,” one of them said. “We will take care of it for you.”

“Let's see some ID,” the Koopa asked, and the Goomba went to get the guards.

They ran.

The Koopa went, “Aw, sheet,” and charged Dewdrop. Dewdrop dodged and punched him.

“Sorry for wasting your time,” someone said, already moving. “We will be off now.”""",
        },
        {
            "name": "The Ladders",
            "icon": "🪜",
            "overview": """The gate was closed.

They did not have much time. They decided the way Loyalists decide when the front door has become a joke: they climbed the castle ladders.

Order: Embercap. Dewdrop. Toadette. Big R.

The squad was immediately surrounded. People ran down other ladders to flank. One of them threw a spear. Dewdrop went critically injured on the rungs, which is a sentence that should have ended the climb and did not.

Toadette waved her wand.

Her head shifted. Her body widened. She turned into a crab-like thing the after-action will call a monstrosity and the honest measurement will call five feet — bigger than a tiny crab, not a kaiju, a giant crayfish by Junction standards.

She charged a Koopa anyway. She grabbed it with the claw.

*WAH! Five feet. Waluigi has been waiting his entire career for a Loyalist wild-shape to be a dragon. He got a crayfish you could trip over. She still used it to hold a turtle. Competence does not require scale. Waluigi resents how often it has scale anyway.*""",
        },
        {
            "name": "Goomba on the Head",
            "icon": "🍄",
            "overview": """Big R boosted Embercap.

“Here goes nothing,” Embercap said, and jumped for a Goomba's head.

The Goomba pulled a fast one and jumped on his.

Embercap stabilized with a Goomba standing on his skull like a bad idea that had found a perch. He leaned backward so the Goomba would hang off the back of his head — a gift, if it worked, for Dewdrop and Big R and maybe even the crayfish.

The Goomba tried the back.

“I'm not going to fall that easy,” the Goomba said.

Embercap decided to drop.

He fell. He was prone. Big R smiled.

“Let's see if he survives these next attacks.”

A mace swing. Another.

The Goomba was dead. First kill.

“You murderer,” a Koopa cried, which is a rich sentence from a gate that had promised real fun in a rust shack.""",
        },
        {
            "name": "Dewdrop Goes Down",
            "icon": "⚕️",
            "overview": """Dewdrop threw a torch. It was not powerful enough to start a fire worth the word.

He used his staff. He helped Embercap up. A spear came. Embercap caught it.

“Eat a turtle,” Embercap said to the Koopa, because the Junction had already decided what kind of poetry it wanted.

Dewdrop was hit. Dewdrop went unconscious.

Toadette, still a crayfish, charged a bystander Koopa and knocked him back into his shell. She stayed glued to that one until he was down. She used what the new body had: poison spores, the kind of gift a five-foot crab should not have and did.

Embercap ran to Big R, who had a Magikoopa now. Embercap climbed, taunted, went for the hat. The Magikoopa ducked and scolded him.

“What the hell are you doing.”

Embercap jumped for the head. Desperation, and he knew it.

The Magikoopa teleported. Embercap grabbed the ladder, unharmed.

The Magikoopa teleported again as Big R swung and missed.

Big R sighed. “This guy is too strong.”""",
        },
        {
            "name": "Dull Claws, Open Gate",
            "icon": "🚪",
            "overview": """Big R charged the wall output and swung at a Koopa guard.

The bear — the tally's word, Big R's body — swung wildly and missed twice.

Embercap slid the ladder, threw a spear, missed.

Toadette swung again at the same Koopa, determined. She used a brick. It hurt the claw. One more like that and the claw would not be a claw. She missed.

Big R hit. A Koopa died. Another ran the roof. On that side there was a Koopa and a Magikoopa left.

The bear slashed from below. Chaos. Toadette clawed a running Koopa.

She went closer.

“You're a coward, turtle boy.”

Koopas are not turtles. Someone said so. The archive is keeping both sentences because the wall did.

Embercap moved a ladder, climbed, found the mechanism that pulls the gates, and started hauling.

The gates opened.

Big R took a spear and five gold off a Koopa corpse. He picked up Dewdrop's unconscious body and moved.

Embercap went downstairs and started sniping.

“Keep doing what you're doing,” he said. “We're getting out of here.”""",
        },
        {
            "name": "Blessing on a Bear's Back",
            "icon": "✨",
            "overview": """Toadette clawed again and missed. The claws were dull from missing. That is not a joke. That is what happens when you spend a fight on one enemy and a brick.

Dewdrop woke up.

“Thanks for waking me back up.”

He used the quarterstaff and blessed his teammates from Big R's back.

Then he went unconscious again, because a Koopa swiped him, and the Magikoopa put a blast into the bear, and the bear fell.

Embercap dragged Dewdrop toward the exit and pulled him through it.

Toadette hit the beaten-up Koopa who was still kicking. Big R finished him and used the shield to knock him away. He moved to the entrance and waited.

The crayfish came last.

Five rounds. The tally's busiest body was a standard Koopa. The most-targeted body was the Black Bear. Twenty-one attacks. One spell. A Magikoopa who would not stay put.

Toadette won the way Loyalists win when the plan is already a lie: the gate opened, the wounded left, and the captain did not leave first.""",
        },
    ]

    event = {
        "id": EID,
        "name": "Warp Pipe Junction — The Shack, the Ladders, and the Five-Foot Crayfish",
        "title": "The Restricted City and the Opened Gate",
        "date": DATE + " — Material clock; afternoon into the fight on the wall",
        "era": "Mushroom Kingdom Civil War",
        "location": "warp_pipe_junction",
        "type": "Infiltration / Fighting Withdrawal",
        "status": "Resolved — squad extracted; Junction not held",
        "summary": "5 Aethel, 1040 BF. Toadette sits the pipe-edge after a rat does not come back. Embercap lies them through a Bowser Bros gate. The manor is a rust shack. They climb the ladders. Dewdrop goes down twice. Toadette becomes a five-foot crayfish. Embercap opens the winch. Big R carries the medic-scribe out. They do not get a guildmaster. They get a gate that works from the inside.",
        "description": "",
        "sections": sections,
        "participants": [
            {"id": "captain_toadette", "name": "Captain Toadette", "role": "Captain / five-foot crayfish / last off the wall"},
            {"id": "embercap", "name": "Embercap", "role": "The guildmaster lie / the winch / Dewdrop's extraction"},
            {"id": "scribe_dewdrop", "name": "Dewdrop", "role": "Speared, blessed, downed twice, carried"},
            {"id": "big_r", "name": "Big R", "role": "Black Bear / ANCHOR / corpse-loot and carry"},
        ],
        "outcome": "Tactical escape. The restricted city was not entered as a city. The shack was not a guildhouse. Dewdrop lives. The rat does not. The Junction remains someone else's gate.",
        "notableFeatures": [
            "The rat sent for reconnaissance did not return",
            "Embercap's guildmaster lie opened a Bowser Bros gate",
            "The manor was a rust shack in a poor town",
            "Ladder order: Embercap, Dewdrop, Toadette, Big R",
            "Toadette's wild shape: a crayfish five feet long",
            "First kill: a Goomba, from prone, after it stood on Embercap's head",
            "Dewdrop blessed the squad from Big R's back and went down again",
            "Embercap opened the gate from the inside",
        ],
        "keyBattles": [BID],
        "relatedArticles": [
            "warp_pipe_junction",
            "peach_loyalists",
            "captain_toadette",
            "embercap",
            "scribe_dewdrop",
            "big_r",
            "bramblehaven",
            "toad_town",
            "mushroom_civil_war_file",
        ],
        "aftermath": "**Standing.** The Warp Pipe Junction is still a restricted mouth. The Loyalist four are on the army side of it again. They did not speak to a guildmaster. They spoke to a Goomba, a Koopa, a Magikoopa, and a winch.\n\n**Personnel.** Dewdrop has been unconscious twice in one afternoon and is alive because Embercap dragged him and Big R carried him. Toadette's claws are dull. Embercap's lie is now a known method. Big R has a spear and five gold that used to belong to a corpse.\n\n**Materiel.** One torch that would not start a fire. One spear caught in the air. One brick that hurt the wrong claw. The [[prop:prop_warp_pipe_restricted_notice|Bowser Bros restriction notice]] is still on the gate. The [[prop:prop_junction_ladder_tally|ladder tally]] is the only honest paper the wall produced.\n\n**Exposure.** The gate crew now has faces: a Loyalist captain who becomes a crayfish, a plume that lies, a scribe who will not stay down, and a bear who waits at the door.",
        "waluigiAssessment": "**1. The lie worked. The house did not.** Embercap sold a guildmaster and bought a shack. That is not a failure of nerve. That is what a restricted city does when you do not have paper. Waluigi will not scold the lie. Waluigi will scold anyone who walks into the shack after Toadette has already said the word guildhouse.\n\n**2. Five feet is enough.** The crayfish was not a dragon. It held a Koopa, put spores in the air, and stayed on one enemy until the brick taught it manners. Scale is a Loyalist temptation. This fight did not need it.\n\n**3. Dewdrop is the cost.** Speared on the climb, down, up, blessing, down. Extracted. If this squad keeps using ladders as a plan, file the next medic bill before the next lie.\n\n**4. The rat is still missing.** She sat on the lip and knew. Waluigi is not printing a first hearing on what ate it.\n\n**Recommendation.** Do not send vermin to map a pipe hub. Do not accept a manor that looks like a warning. If you must climb, open the winch first. Embercap already proved the gate has an inside.",
        "xpAwards": awards,
        "customCss": "",
    }

    events = load("events.json")
    events = [e for e in events if e.get("id") != EID]
    events.append(event)
    save("events.json", events)
    print("event filed", EID, "n", len(events))

    battles = load("battles.json")
    battles = [b for b in battles if b.get("id") != BID]
    battles.append({
        "id": BID,
        "name": "The Junction Ladders (The Five-Foot Crayfish and the Winch)",
        "date": DATE + " (Material clock)",
        "location": "Warp Pipe Junction — castle ladders, wall output, and the gate winch (location id: warp_pipe_junction)",
        "type": "Fighting Withdrawal / Wall Fight / Gate Seizure",
        "result": "Loyalist extraction. Dewdrop carried out. Gate opened from inside. Junction not held. First kill a Goomba. Magikoopa escaped by teleport.",
        "belligerents": {
            "attackers": {
                "name": "Peach Loyalist four",
                "factionId": "peach_loyalists",
                "commander": "Captain Toadette",
                "combatants": [
                    {"name": "Captain Toadette", "role": "crayfish / claw / spores", "fate": "stood", "leader": True, "fateNote": "claws dull; last off the wall"},
                    {"name": "Embercap", "role": "winch / extraction / first kill", "fate": "stood"},
                    {"name": "Dewdrop", "role": "speared, blessing, twice down", "fate": "carried", "fateNote": "dragged through the opened gate"},
                    {"name": "Big R", "role": "Black Bear / ANCHOR", "fate": "wounded", "fateNote": "Magikoopa blast put the bear down; got up; waited"},
                ],
            },
            "defenders": {
                "name": "Gate crew — Bowser Bros posted",
                "combatants": [
                    {"name": "the Goomba guide", "role": "escort / head-jumper", "fate": "fell", "fateNote": "died on Embercap, prone, two mace swings"},
                    {"name": "the charging Koopa", "role": "ID check / Dewdrop's first punch", "fate": "withdrew"},
                    {"name": "Koopa Troopa (standard)", "role": "busiest attacker on the tally", "fate": "fell"},
                    {"name": "the roof Koopa", "role": "ran", "fate": "fled"},
                    {"name": "Magikoopa (battle mage)", "role": "teleport / the one spell", "fate": "withdrew"},
                    {"name": "flanking spear-throwers", "role": "other ladders", "fate": "stood"},
                ],
            },
        },
        "casualties": {
            "attackers": "Dewdrop critically injured and twice unconscious, extracted. Big R dropped by a Magikoopa blast, stood. Toadette's claw hurt on a brick. Nobody of the four stayed on the wall.",
            "defenders": "Goomba guide dead. At least two Koopas dead. One ran. Magikoopa left by teleport. Gate opened against their posting.",
        },
        "summary": "Five rounds on the Junction ladders after a failed shack-as-manor trick. Dewdrop went down on the climb. Toadette became a five-foot crayfish. Embercap killed a Goomba from prone and opened the winch. Big R carried the wounded out.",
        "engagement": {
            "combatants": 10,
            "ledgerWindow": "5 Aethel, 1040 BF · five rounds · 25 NPC turns · 21 attacks · 1 spell",
            "scale": "A squad fight on ladders, not a siege. The army waited at the pipe-edge and did not come up.",
        },
        "keyMoments": [
            {"time": "climb", "who": "a spear", "act": "Hit Dewdrop on the rungs", "result": "Critically injured; the climb did not stop"},
            {"time": "climb", "who": "Toadette", "act": "Wild shape — five-foot crayfish", "result": "Claw on a Koopa", "decisive": True},
            {"time": "wall", "who": "Embercap", "act": "Dropped prone under a Goomba", "result": "Two maces; first kill", "decisive": True},
            {"time": "wall", "who": "Dewdrop", "act": "Staff, then a hit", "result": "Unconscious"},
            {"time": "wall", "who": "Magikoopa", "act": "Teleport, teleport, one blast", "result": "The bear fell"},
            {"time": "winch", "who": "Embercap", "act": "Hauled the gate open from inside", "result": "Extraction route", "decisive": True},
            {"time": "exit", "who": "Dewdrop", "act": "Woke, blessed from Big R's back", "result": "Down again; dragged through"},
        ],
        "description": """*Filed from the ladder tally. I was not on the wall. The four who were left me a count: five rounds, twenty-one attacks, one spell, a crayfish five feet long.*

## Part I — Up

They climbed because the gate they had talked through was shut. Embercap first. Dewdrop. Toadette. Big R last. A spear found Dewdrop on the rungs. Toadette became a crayfish and held a Koopa anyway.

## Part II — On the Head

Embercap jumped for a Goomba and got a Goomba on his skull. He dropped. The mace did the rest. First kill. A Koopa said murderer, which the shack had already earned.

## Part III — The Mage Who Would Not Stay

Dewdrop went down. The Magikoopa left twice and hit once. The bear fell. Embercap found the winch.

## Part IV — Out

The gate opened. Big R took a spear, five gold, and Dewdrop. Dewdrop woke long enough to bless the people carrying him and went out cold. Toadette came last with dull claws. The army was still at the pipes.
""",
        "aftermath": "The Junction is not Loyalist ground. The winch works from the inside. Dewdrop is the bill. The Magikoopa is still somewhere that is not a tally line.",
        "waluigiAssessment": "I have a five-round count and no guildmaster. That is the whole review. Embercap's lie was the only thing that worked until the winch. The crayfish was the only thing that held. Dewdrop is not a cost you get to pay twice a week.",
        "relatedArticles": [EID, "warp_pipe_junction", "peach_loyalists", "captain_toadette", "embercap", "scribe_dewdrop", "big_r"],
        "reputationChanges": {},
        "effects": {},
        "reputationNotes": {},
    })
    save("battles.json", battles)
    print("battle filed", BID)

    props = load("props.json")
    props["props"]["prop_warp_pipe_restricted_notice"] = {
        "kind": "order",
        "icon": "🚫",
        "title": "Restricted City — Bowser Bros Only",
        "subtitle": "Posted on the Warp Pipe Junction gate",
        "items": [],
        "articles": [EID, "warp_pipe_junction", BID],
        "note": "The sign Embercap talked past. Still up after they left.",
        "stamps": ["sealed"],
        "body": "<div class=\"pd-head\"><div class=\"pd-org\">Gate Authority — Warp Pipe Junction</div><div class=\"pd-sub\">Posted for all traffic</div></div><div class=\"pd-meta\">City beyond this gate: restricted</div><div class=\"pd-clause\">HALT. You may not enter.</div><div class=\"pd-clause\">This is a restricted city for Bowser Bros only. No exception is written here. No guildmaster is named here. No manor is promised here.</div><div class=\"pd-total\">By order of the posting crew.</div><div class=\"pd-margin--red\">They made an exception anyway. Embercap said guildmaster. The sign did not get a vote. — W.</div>",
    }
    props["props"]["prop_junction_ladder_tally"] = {
        "kind": "ledger",
        "icon": "📋",
        "title": "Ladder Tally — Junction Wall",
        "subtitle": "Five rounds · after-action",
        "items": [],
        "articles": [EID, BID, "captain_toadette"],
        "note": "Busiest: Koopa Troopa. Most-targeted: Black Bear. 21 attacks. 1 spell.",
        "stamps": ["evidence"],
        "body": "<div class=\"pd-head\"><div class=\"pd-org\">Peach Loyalist Field Count</div><div class=\"pd-sub\">Warp Pipe Junction ladders · 5 Aethel, 1040 BF</div></div><div class=\"pd-meta\">Rounds: 5 · NPC turns: 25 · Attacks: 21 · Spells: 1</div><div class=\"pd-clause\">Koopa Troopa (standard): 14 attacks, focused Black Bear.</div><div class=\"pd-clause\">Magikoopa (battle mage): 4 attacks, 1 spell, focused Big R / ANCHOR.</div><div class=\"pd-clause\">Black Bear: 2 multiattacks, 3 retreats, focused Koopa Troopa.</div><div class=\"pd-clause\">Goomba (conscript): 1 attack, then dead on Embercap.</div><div class=\"pd-total\">Result: gate opened from inside. Dewdrop extracted. Junction not held.</div><div class=\"pd-margin\">The crayfish is not on this sheet. The crayfish was five feet and still the captain. — W.</div>",
    }
    save("props.json", props)
    print("props 2")

    inv = load("investigations.json")
    mc = next(i for i in inv["investigations"] if i["id"] == "mushroom_civil_war_file")
    mc["lastFiled"] = DATE
    if not any(s.get("id") == "s_aethel5_warp_pipe" for s in mc.get("sessions") or []):
        mc.setdefault("sessions", []).append({
            "id": "s_aethel5_warp_pipe",
            "label": "The shack that was not a guildhouse",
            "date": DATE,
            "event": EID,
        })
    if EID not in (mc.get("relatedEvents") or []):
        mc.setdefault("relatedEvents", []).append(EID)
    if not any(e.get("id") == "ex_restricted_notice" for e in mc.get("exhibits") or []):
        mc.setdefault("exhibits", []).append({
            "id": "ex_restricted_notice",
            "propId": "prop_warp_pipe_restricted_notice",
            "session": "s_aethel5_warp_pipe",
            "icon": "🚫",
            "kind": "order",
            "title": "The sign they talked past",
            "secured": "Read on the Junction gate, 5 Aethel, 1040 BF",
            "custody": "Still posted",
            "visual": "<div style=\"width:120px;height:80px;border:3px solid #333;background:#c4a574;display:flex;align-items:center;justify-content:center;font:900 11px sans-serif;text-align:center;padding:6px\">BROS ONLY</div>",
            "onRecord": "A restriction notice. Bowser Bros only. No exception written.",
            "dc": 3,
            "analysis": "The paper did not fail. The crew did. Embercap named a guildmaster the sign does not contain. That is not a forged pass. That is a gate that wanted to believe it had a procedure.\n\n## What it does not prove\n\nIt does not prove a guildmaster lives beyond the pipes. The shack proved the opposite.\n\n[[roll:4|whether the posting crew reports to Bowser or only to the sign|A Bowser Bros posting that takes a guild lie is a crew that has not seen Bowser in a while.|A local hustle wearing a famous name. Either way the sign is real.]]",
            "links": {"events": [EID], "items": [], "characters": ["embercap", "captain_toadette"]},
        })
    if not any(e.get("id") == "ex_ladder_tally" for e in mc.get("exhibits") or []):
        mc.setdefault("exhibits", []).append({
            "id": "ex_ladder_tally",
            "propId": "prop_junction_ladder_tally",
            "session": "s_aethel5_warp_pipe",
            "icon": "📋",
            "kind": "ledger",
            "title": "Five rounds on the ladders",
            "secured": "Counted after extraction",
            "custody": "Loyalist field file",
            "visual": "<div style=\"width:130px;height:90px;background:#f4ecd8;border:1px solid #333;padding:6px;font:11px monospace\">5 rd<br>21 atk<br>1 spl<br>BEAR</div>",
            "onRecord": "Five rounds. Twenty-one attacks. One spell. Busiest: Koopa. Most-targeted: Black Bear.",
            "dc": 4,
            "analysis": "The tally will not write crayfish. It will write bear. Waluigi is keeping both. The Magikoopa's one spell is the only line that explains Big R on the ground.\n\n## Dewdrop\n\nHe is not a row. He is the reason the extraction is the result and not a hold.\n\n[[roll:3|whether ANCHOR and Black Bear are one body|One person. The field needed two names for the same back.|A bear and a toad sharing a ladder. Second hearing required.]]",
            "links": {"events": [EID], "items": [], "characters": ["big_r", "scribe_dewdrop"]},
        })
    if not any(t.get("id") == "th_pipe_gate" for t in mc.get("threads") or []):
        mc.setdefault("threads", []).append({
            "id": "th_pipe_gate",
            "title": "Who the Junction actually reports to",
            "text": "A Bowser Bros sign, a guildmaster who does not live in a shack, a Magikoopa who leaves. The pipes are a government or a costume.",
        })
    if not any(l.get("id") == "lead_missing_rat" for l in mc.get("leads") or []):
        mc.setdefault("leads", []).append({
            "id": "lead_missing_rat",
            "title": "What ate the reconnaissance rat",
            "state": "open",
            "priority": "medium",
            "objective": "Find what the rat found, or what found the rat, before the next pipe crossing.",
            "why": "Toadette already knows vermin recon failed. The next map of the Junction cannot be another animal.",
            "xp": 80,
            "exhibits": ["ex_restricted_notice"],
        })
    save("investigations.json", inv)
    print("investigation updated")

    mp = load("mainPage.json")
    mp["latestUpdate"] = {
        "id": EID,
        "label": "Latest File · Warp Pipe Junction",
        "excerpt": "5 Aethel, 1040 BF: Embercap lies them through a Bowser Bros gate. The manor is a shack. Toadette becomes a five-foot crayfish. The winch opens from the inside.",
    }
    mp["featuredArticle"] = {
        "id": EID,
        "type": "event",
        "excerpt": "A rat that did not come back, a guildmaster who does not live in rust, and a crayfish five feet long.",
        "label": "Featured File · The Junction Ladders",
    }
    save("mainPage.json", mp)

    cd = load("currentDate.json")
    cd["year"] = 1040
    cd["monthIndex"] = 8
    cd["day"] = 5
    save("currentDate.json", cd)
    print("currentDate 5 Aethel 1040")

    idx = ROOT / "index.html"
    text = idx.read_text(encoding="utf-8")
    needle = 'let SITE_UPDATES=[{"id":"feyward_battalion_of_six_and_the_bait_plan"'
    insert = (
        'let SITE_UPDATES=[{"id":"' + EID + '","kind":"event","label":"Latest Filing · Warp Pipe Junction",'
        '"title":"The Restricted City and the Five-Foot Crayfish",'
        '"summary":"5 Aethel, 1040 BF. Toadette sits the pipes after a rat does not return. Embercap lies them through a Bowser Bros gate. The manor is a rust shack. They climb. Dewdrop goes down twice. The crayfish holds. Embercap opens the winch.",'
        '"tags":["latest","loyalists","toadette","embercap","dewdrop","big r","junction"]},{"id":"feyward_battalion_of_six_and_the_bait_plan"'
    )
    if needle in text and EID not in text[text.find("let SITE_UPDATES=") : text.find("let SITE_UPDATES=") + 400]:
        idx.write_text(text.replace(needle, insert, 1), encoding="utf-8")
        print("SITE_UPDATES prepended")
    else:
        print("SITE_UPDATES skip or already")

    pending_path = ROOT / "tools" / "rnn-scripts" / "pending-news-articles.json"
    pending = json.loads(pending_path.read_text(encoding="utf-8"))
    if not any(x.get("id") == EID for x in pending.get("pending") or []):
        pending.setdefault("pending", []).append({
            "id": EID,
            "filed": DATE,
            "note": "Loyalist four at Warp Pipe Junction: shack-as-manor, crayfish, winch extraction",
        })
        pending_path.write_text(json.dumps(pending, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
        print("RNN pending +1")

    # light POI amend
    poi = ROOT / "Reputation-Matrix2" / "map-data" / "mushroom-kingdom-pois.js"
    pt = poi.read_text(encoding="utf-8")
    old = 'description: "A major hub of interconnected Warp Pipes, some leading to other parts of the kingdom, others to stranger, unknown dimensions. Controlling it offers unparalleled strategic mobility.",\n            factionId: \'unaligned\','
    new = 'description: "A major hub of interconnected Warp Pipes. On 5 Aethel, 1040 BF a Loyalist four talked past a Bowser Bros gate, were walked to a rust shack sold as a manor, climbed the castle ladders, and left by a winch Embercap opened from the inside. The pipes still go everywhere. The gate still lies about who it is for.",\n            factionId: \'unaligned\','
    if old in pt:
        poi.write_text(pt.replace(old, new, 1), encoding="utf-8")
        print("POI description updated (map remake still later)")


if __name__ == "__main__":
    main()
