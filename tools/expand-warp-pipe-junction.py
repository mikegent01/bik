#!/usr/bin/env python3
"""Thicken the Junction event, strip table-speak, file analysis + art."""
from __future__ import annotations

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "Reputation-Matrix2" / "data"
EID = "warp_pipe_junction_restricted_city"
AID = "warp_pipe_junction_waluigi_analysis"
IMG_WALL = "assets/images/events/warp-pipe-junction/junction-crayfish-wall.jpg"
IMG_SHACK = "assets/images/events/warp-pipe-junction/junction-rust-shack.jpg"


def load(name):
    return json.loads((DATA / name).read_text(encoding="utf-8"))


def save(name, obj):
    (DATA / name).write_text(json.dumps(obj, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")


SECTIONS = [
    {
        "name": "The Edge of the Pipes",
        "icon": "🚧",
        "overview": """Toadette stood at the lip of the Warp Pipe Junction and did not go down.

Behind her the army waited the way Loyalist armies wait: quiet, packed, watching the back of her head as if the next order might already be in her neck. In front of her the pipes breathed. Wet brick. Steam that smelled like old metal and someone else's destination. Condensation ran down the nearest mouth and made a black line in the mud.

She sat.

The thought she did not share with the ranks was small and ugly and correct. She should not have sent a rat to do reconnaissance. The rat had not come back. There was no body. There was no squeak. There was a hole in the afternoon the size of one animal and she put her weight on the brick instead of on the next order.

The army did not ask. That is what an army is for when it still trusts the back of a captain's head.

*WAH! Waluigi was not on that lip. Waluigi has the after-action and a captain who will not write the sentence 'I was wrong about the rat.' So Waluigi will write it. She sat there knowing. That is better than most officers Waluigi has audited, and it is still a missing rat.*""",
    },
    {
        "name": "Bowser Bros Only",
        "icon": "🚫",
        "overview": """Halt.

The word came off the gate the way paint comes off a cheap sign: already peeling, still legally there. You may not enter. Restricted city. Bowser Bros only. The letters had been brushed on by someone who believed the name would do the rest of the work.

Embercap stepped forward with the crimson plume doing what it always does — making him visible on purpose.

“Can you make an exception,” he said, “to let us in.”

The gate did not move.

“We have a message for the guildmaster,” Embercap said. “We need to discuss matters.”

It was a lie. It was a clean lie. The kind of lie a field commander tells when the captain is still thinking about a rat and the army is still behind her and the only other option is to admit you have no paper.

They bought it.

A guard was assigned. The gates opened on a groan that had rust in it. A Goomba was given the four of them — Toadette, Embercap, Dewdrop, Big R, the Loyalist leadership in one stupid, hopeful line — and told to watch them.

“Alright,” Embercap said.

The Goomba said he would lead them to the manor.

The army stayed on the pipe side. That is the last honest fact about the front door.""",
    },
    {
        "name": "The Rust Shack",
        "icon": "🏚️",
        "image": IMG_SHACK,
        "imageCaption": "The manor, as sold. Filed after the climb. The Goomba pointed here.",
        "overview": """Toadette could not tell if the Goomba was lying. That is not a metaphor. She looked at him and the read would not come. Poor town. Mud. A street that had given up on being a street.

“It's right in here,” the Goomba said, and pointed.

Rust. Old wood. A shack that had given up on being a building and become a warning that had not been written down. The roof sagged toward the alley. One window held a rag instead of glass. If a guildmaster slept here, the guild was already dead.

“Hmm,” Toadette said. “Thought it would be more of a forewarning.”

She waited.

Then: “Wait a minute.”

The pause was long enough to be rude.

“This isn't the guildmaster's house, is it.”

“What do you mean.”

“Well,” she said, and this is the sentence Waluigi wants carved on the Junction, “if the guildmaster is sleeping anywhere, he would be sleeping in a guildhouse, where he hosts his guild.”

“Well,” said the Goomba, “it's a poor town.”

“Hmm. Now that you mention it. This isn't the real house, is it, Goomba boy.”

The shack did not argue. Shacks never do. They wait for you to walk in anyway.""",
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

They walked away. The Goomba and the Koopa followed. The mud took their prints and kept them. Dewdrop stayed close enough to punch. Big R stayed close enough to be a wall.

“Leave us alone. We will report you to the authorities. We don't know the guild members personally.”

“You don't. That's the reason you went in the town.”

“Yeah… we're acquainted with him. Don't know their friends but umm. Uhh.”

They kept following.

“Don't worry,” one of them said. “We will take care of it for you.”

“Let's see some ID,” the Koopa asked, and the Goomba went to get the guards.

They ran.

The Koopa went, “Aw, sheet,” and charged Dewdrop. Dewdrop dodged and punched him. The sound was small and correct.

“Sorry for wasting your time,” someone said, already moving. “We will be off now.”

Behind them the gate they had talked through was already becoming a joke.""",
    },
    {
        "name": "The Ladders",
        "icon": "🪜",
        "image": IMG_WALL,
        "imageCaption": "The wall after the lie. Five feet of crayfish. The army stayed at the pipes.",
        "overview": """The gate was closed.

They did not have much time. They decided the way Loyalists decide when the front door has become a joke: they climbed the castle ladders. Wood slick with pipe-steam. Rungs that remembered other hands. Other ladders already moving on the flanks.

Order: Embercap. Dewdrop. Toadette. Big R.

People ran down those other ladders to meet them. One of them threw a spear. The spear found Dewdrop on the rungs. She folded around it the way a body folds when the afternoon has already used her once. The climb did not stop. That is the sentence that should have ended the climb and did not.

Toadette waved her wand.

Her head shifted. Her body widened. She became a crab-like thing the after-action will try to dress and the honest measurement will call five feet — bigger than a tiny crab, not a monster from a mural, a giant crayfish by Junction standards. Wet armor. One claw that could hold a shell.

She charged a Koopa anyway. She grabbed it with the claw. The Koopa kicked. The claw did not discuss it.

*WAH! Five feet. Waluigi has been waiting his entire career for a Loyalist change of shape to be a dragon. He got a crayfish you could trip over. She still used it to hold a turtle. Competence does not require size. Waluigi resents how often it has size anyway.*""",
    },
    {
        "name": "Goomba on the Head",
        "icon": "🍄",
        "overview": """Big R boosted Embercap.

“Here goes nothing,” Embercap said, and jumped for a Goomba's head.

The Goomba pulled a fast one and jumped on his.

Embercap stabilized with a Goomba standing on his skull like a bad idea that had found a perch. The plume bent. He leaned backward so the Goomba would hang off the back of his head — a gift, if it worked, for Dewdrop and Big R and maybe even the crayfish.

The Goomba tried the back.

“I'm not going to fall that easy,” the Goomba said.

Embercap decided to drop.

He fell. He hit the brick on his back. Big R smiled.

A mace swing. Another.

The Goomba was dead. First kill. The sound a Goomba makes when it stops being a guide is smaller than the speech it made about manors.

“You murderer,” a Koopa cried, which is a rich sentence from a gate that had promised real fun in a rust shack.""",
    },
    {
        "name": "Dewdrop Goes Down",
        "icon": "⚕️",
        "overview": """Dewdrop threw a torch. It was not powerful enough to start a fire worth the word. The flame licked wet brick and died like it had been insulted.

She used her staff. She helped Embercap up. A spear came. Embercap caught it. Wood on wood. His hands knew the work.

“Eat a turtle,” Embercap said to the Koopa, because the Junction had already decided what kind of poetry it wanted.

Dewdrop was hit. Dewdrop went unconscious. The staff clattered and stayed.

Toadette, still a crayfish, charged a bystander Koopa and knocked him back into his shell. She stayed glued to that one until he was down. She used what the new body had: poison spores, the kind of gift a five-foot crab should not have and did. The air went green and wrong.

Embercap ran to Big R, who had a Magikoopa now. Hat. Jump. The kind of enemy that refuses to be a place. Embercap climbed, taunted, went for the hat. The Magikoopa ducked and scolded him.

“What the hell are you doing.”

Embercap jumped for the head. Desperation, and he knew it.

The Magikoopa left the spot. Embercap grabbed the ladder, unharmed.

The Magikoopa left the spot again as Big R swung and missed.

Big R sighed. “This guy is too strong.”""",
    },
    {
        "name": "Dull Claws, Open Gate",
        "icon": "🚪",
        "overview": """Big R charged the wall output and swung at a Koopa guard.

The bear — the tally's word, Big R's body — swung wildly and missed twice. Brick dust. A grunt that belonged to a siege that had been asked to do ladder work.

Embercap slid the ladder, threw a spear, missed.

Toadette swung again at the same Koopa, determined. She used a brick. It hurt the claw. One more like that and the claw would not be a claw. She missed.

Big R hit. A Koopa died. Another ran the roof. On that side there was a Koopa and a Magikoopa left.

The bear slashed from below. Toadette clawed a running Koopa.

She went closer.

“You're a coward, turtle boy.”

Koopas are not turtles. Someone said so. The archive is keeping both sentences because the wall did.

Embercap moved a ladder, climbed, found the winch that pulls the gates, and started hauling. Chain. Rust. The honest machine in a dishonest town.

The gates opened.

Big R took a spear and five gold off a Koopa corpse. He picked up Dewdrop's unconscious body and moved.

Embercap went downstairs and started throwing from cover.

“Keep doing what you're doing,” he said. “We're getting out of here.”""",
    },
    {
        "name": "Blessing on a Bear's Back",
        "icon": "✨",
        "overview": """Toadette clawed again and missed. The claws were dull from missing. That is not a joke. That is what happens when you spend a fight on one enemy and a brick.

Dewdrop woke up.

“Thanks for waking me back up.”

She used the quarterstaff and blessed her teammates from Big R's back. The words were short. The back was moving. For a breath the wall had a medic again.

Then she went unconscious again, because a Koopa swiped her, and the Magikoopa put a blast into the bear, and the bear fell. The blessing stayed. The body did not.

Embercap dragged Dewdrop toward the exit and pulled her through it.

Toadette hit the beaten-up Koopa who was still kicking. Big R finished him and used the shield to knock him away. He moved to the entrance and waited.

The crayfish came last.

The tally later tried to make the wall into a count. Waluigi is not printing that count here. The wall was long enough for a Koopa to keep hitting the bear, for a Magikoopa to leave twice and land once, and for a crayfish to stay on one shell until the brick taught it manners.

Toadette won the way Loyalists win when the plan is already a lie: the gate opened, the wounded left, and the captain did not leave first.""",
    },
]


ANALYSIS = {
    "id": AID,
    "sourceArticle": EID,
    "title": "The Restricted City and the Opened Gate",
    "kicker": "Waluigi's Article Analysis",
    "subtitle": "The archivist argues with a gate that believed a guildmaster",
    "archivist": "Waluigi, Auditor-General",
    "filed": "5 Aethel, 1040 BF — after the extraction, Material clock",
    "summary": "The Junction is not a city. It is a sign that wants to be a city. Embercap proved the sign can be talked past. Toadette proved the shack is not a house. The winch proved the only door that mattered was already on their side of the brick.",
    "thesis": """I was not on that wall. I have a missing rat, a rust shack, a crayfish five feet long, and a medic who blessed people from a bear's back and went out cold twice. I am not going to pretend that is a campaign. It is a door problem that Loyalists keep solving with bodies.

My reading is simple and I am signing it: **the restricted city is a costume, the guildmaster is a password, and the winch is the only honest object in the filing.**

Embercap's lie worked because the gate wanted a procedure more than it wanted Bowser. Toadette's pause worked because she still remembers what a guildhouse is for. Dewdrop is the invoice. The rat is the only scout I trust, and the rat did not come back.

I like this squad. That is my bias. I will not let liking them turn a shack into a victory parade.""",
    "sections": [
        {
            "id": "the-sign",
            "icon": "🚫",
            "heading": "The Sign Wanted a Procedure",
            "sourceAnchor": "Halt. Restricted city. Bowser Bros only.",
            "body": """I have seen real Bowser paper. This is not it. This is a gate that borrowed a famous name so it would not have to invent a reason.

Embercap asked for an exception. The sign does not contain exceptions. Then he named a guildmaster. The sign does not contain a guildmaster either. The crew opened anyway. That is not a forged pass. That is a posting that missed having work.

I prefer the reading that these Bros have not seen Bowser in a while. The competing reading is worse: they have, and they still take guild gossip as a hall pass. Either way the Loyalist four walked in because the costume wanted to be worn.

I would have lied too. I am not proud of that. I am tired of watching honest captains sit on brick while the plume does the talking.""",
        },
        {
            "id": "the-shack",
            "icon": "🏚️",
            "heading": "A Manor Is a Word You Point At",
            "sourceAnchor": "If the guildmaster is sleeping anywhere, he would be sleeping in a guildhouse.",
            "body": """Toadette said the only adult sentence in the street. A guildmaster hosts. Hosts need a hall. A rust shack with a rag in the window is not a hall. It is a dare.

The Goomba said poor town. Poverty is real. Poverty is not a guild. I resent how often people use one to excuse the other. I have lived in worse rooms than that shack. I still knew they were rooms.

She waited. That pause is the whole infiltration. Most squads walk in because stopping is embarrassing. She embarrassed the street instead.

I am not calling her a genius. I am calling her a person who still believes buildings mean things. Keep her. The next lie will be prettier.""",
        },
        {
            "id": "the-rat",
            "icon": "🐀",
            "heading": "The Only Scout Who Told the Truth",
            "sourceAnchor": "She should not have sent a rat to do reconnaissance. The rat had not come back.",
            "body": """Everyone wants the crayfish to be the picture. I want the empty lip.

A missing animal is not cute. A missing animal is a map that ended. Toadette sat on that fact instead of sending a second rat. That is the first correct command decision in the file.

I do not know what ate it. I will not print a first hearing. Pipes eat things. Towns eat things. A Magikoopa who will not stay in one place eats things. The lead is already open. Do not close it with a joke.

I used to send people I did not like to look around corners. I am not better than her. I am louder.""",
        },
        {
            "id": "five-feet",
            "icon": "🦞",
            "heading": "Five Feet Is a Decision, Not a Costume",
            "sourceAnchor": "The honest measurement will call five feet.",
            "body": """I wanted a dragon. I always want a dragon. That is my problem and I am filing it.

She became a crayfish you could trip over and used it to hold one Koopa until the job was done. Then she hit a brick and the claw learned manners. That is not a mural. That is a captain staying on a problem.

Scale is a Loyalist temptation. Bramblehaven taught them that size can be policy. This wall taught them that size can also be a brick to the face.

If she had gone bigger, the ladders would have become a joke and Dewdrop would still have been bleeding on them. I prefer the five feet. I am annoyed that I prefer it.""",
        },
        {
            "id": "the-winch",
            "icon": "⚙️",
            "heading": "The Door Was Always a Machine",
            "sourceAnchor": "Embercap found the winch that pulls the gates, and started hauling.",
            "body": """They talked through a gate. They climbed because the talk closed. Then Embercap opened the same gate from the inside with a chain.

That is the article. Not the Goomba. Not the murderer speech. The winch.

If the next crossing starts with another guildmaster, I will throw the plume myself. The inside of the gate is a physical object. It does not require a password. It requires a person who can reach it without dying on the rungs.

I keep thinking about how many Loyalist plans are speeches. This one ended when someone shut up and pulled.""",
        },
        {
            "id": "dewdrop-bill",
            "icon": "⚕️",
            "heading": "Dewdrop Is Not a Method",
            "sourceAnchor": "She folded around it the way a body folds when the afternoon has already used her once.",
            "body": """Speared on the climb. Up. Blessing from a moving back. Down. Dragged through a winch-door. That is not toughness. That is a bill.

I will not merge her with the other Dewdrop in the ledger. This one is the scribe who will not stay down and the medic the faction page already spent. Two names can share a sound. They cannot share a spine.

If this squad keeps using ladders as a plan, file the next medic before the next lie. I like her. That is why I am being rude.""",
        },
        {
            "id": "the-bear",
            "icon": "🐻",
            "heading": "I Am Still Not Splitting the Bear",
            "sourceAnchor": "The bear — the tally's word, Big R's body",
            "body": """The wall called him Black Bear. The after-action called him ANCHOR. I called him Big R and I am keeping one person until somebody says the second name twice.

He boosted Embercap. He missed. He fell to a blast. He stood. He took a spear and five gold off a corpse because that is what a siege does when the door finally works. He carried Dewdrop. He waited.

Waiting is the line. Everyone wants the first kill. The captain needed a door that still had a person in it.

If a second hearing splits him, I will print the split. Until then I will not invent a second heavy to make the tally look tidy.""",
        },
    ],
    "verdict": """My verdict: they did not enter a city. They entered a story a gate tells itself, found a shack, and left by a machine.

Keep the lie off the next briefing. Keep the rat off the next briefing. Keep Dewdrop off the next ladder until someone else can bleed first. If you must go back, go for the winch, not the guildmaster.

The Magikoopa is still somewhere that is not a shack. The sign is still up. The army is still at the pipes, watching the back of a captain who now knows what five feet of crayfish costs.

That is enough spice. The rest is people wanting a mural.""",
    "relatedArticles": [
        EID,
        "warp_pipe_junction",
        "peach_loyalists",
        "captain_toadette",
        "embercap",
        "scribe_dewdrop",
        "big_r",
        "mushroom_civil_war_file",
        "warp_pipe_junction_ladder_fight",
    ],
    "researchDesk": {
        "title": "Waluigi's After-Hours Research Desk",
        "intro": "The verdict is filed. These checks do not change the wall. They test how far I will push three claims.",
        "rolls": [
            {
                "id": "sign-authority",
                "icon": "🚫",
                "title": "Who the posting crew reports to",
                "dc": 3,
                "prompt": "Set the Bowser Bros sign beside the fact that a guildmaster lie opened it.",
                "success": "Breakthrough: a crew that takes guild gossip as a pass has not seen Bowser recently enough to be afraid of him. I will treat the name as paint until a second paper shows a chain of command.",
                "failure": "Useful limit: I can show the sign opened. I cannot yet prove whether the fear is of Bowser or of looking unemployed.",
            },
            {
                "id": "missing-rat",
                "icon": "🐀",
                "title": "What ended the reconnaissance",
                "dc": 4,
                "prompt": "Separate a pipe that eats animals from a town that hides them.",
                "success": "Breakthrough: no body on the lip means the ending happened past the first mouth. The next scout cannot be another animal and cannot be a speech.",
                "failure": "Useful limit: absence is not a species. I know the rat is gone. I will not print a monster to feel finished.",
            },
            {
                "id": "bear-name",
                "icon": "🐻",
                "title": "Black Bear and ANCHOR",
                "dc": 4,
                "prompt": "Ask whether the tally's two names are one back.",
                "success": "Breakthrough: one body, two jobs. The field needed a beast and a code. I will not hire a second person to make the sheet neat.",
                "failure": "Useful limit: I was not there. A failed check here is exactly what I promised: no first hearing.",
            },
        ],
    },
}


def main():
    events = load("events.json")
    ev = next(e for e in events if e["id"] == EID)
    ev["image"] = IMG_WALL
    ev["sections"] = SECTIONS
    ev["notableFeatures"] = [
        "The rat sent for reconnaissance did not return",
        "Embercap's guildmaster lie opened a Bowser Bros gate",
        "The manor was a rust shack in a poor town",
        "Ladder order: Embercap, Dewdrop, Toadette, Big R",
        "Toadette became a crayfish five feet long",
        "First kill: a Goomba, after it stood on Embercap's head",
        "Dewdrop blessed the squad from Big R's back and went down again",
        "Embercap opened the gate from the inside",
    ]
    ev["aftermath"] = (
        "**Standing.** The Warp Pipe Junction is still a restricted mouth. The Loyalist four are on the army side of it again. They did not speak to a guildmaster. They spoke to a Goomba, a Koopa, a Magikoopa, and a winch.\n\n"
        "**Personnel.** Dewdrop has been unconscious twice in one afternoon and is alive because Embercap dragged her and Big R carried her. Toadette's claws are dull. Embercap's lie is now a known method. Big R has a spear and five gold that used to belong to a corpse.\n\n"
        "**Materiel.** One torch that would not start a fire. One spear caught in the air. One brick that hurt the wrong claw. The [[prop:prop_warp_pipe_restricted_notice|Bowser Bros restriction notice]] is still on the gate. The [[prop:prop_junction_ladder_tally|ladder tally]] is the only paper the wall produced, and Waluigi is not treating it as a sermon.\n\n"
        "**Exposure.** The gate crew now has faces: a Loyalist captain who becomes a crayfish, a plume that lies, a scribe who will not stay down, and a bear who waits at the door."
    )
    for a in ev.get("xpAwards") or []:
        if "Wild-shaped" in a.get("desc", ""):
            a["desc"] = "Became a five-foot crayfish and glued herself to a Koopa with claw and spore."
        if "from prone" in a.get("desc", ""):
            a["desc"] = "Killed the Goomba after dropping to the brick, worked the winch, dragged Dewdrop through the opened gate."
        if a.get("desc", "").startswith("Critically"):
            a["desc"] = "Speared on the climb, downed, woke, blessed the squad from Big R's back, downed again, extracted."
        if "while he could" in a.get("desc", ""):
            a["desc"] = "Staff work to get Embercap up and a blessing that landed while she could barely sit."
    save("events.json", events)
    print("event expanded")

    battles = load("battles.json")
    b = next(x for x in battles if x["id"] == "warp_pipe_junction_ladder_fight")
    b["summary"] = (
        "A wall fight after a failed shack-as-manor trick. Dewdrop went down on the climb. "
        "Toadette became a five-foot crayfish. Embercap killed a Goomba and opened the winch. Big R carried the wounded out."
    )
    if isinstance(b.get("engagement"), dict):
        b["engagement"]["ledgerWindow"] = "5 Aethel, 1040 BF · afternoon into the wall · extracted before dark"
        b["engagement"]["scale"] = "A squad fight on ladders, not a siege. The army waited at the pipe-edge and did not come up."
    b["description"] = (
        "*Filed after the climb. I was not on the wall. The four who were left me a crayfish, a winch, and a medic who would not stay down.*\n\n"
        "## Part I — Up\n\n"
        "They climbed because the gate they had talked through was shut. Embercap first. Dewdrop. Toadette. Big R last. A spear found Dewdrop on the rungs. Toadette became a crayfish and held a Koopa anyway.\n\n"
        "## Part II — On the Head\n\n"
        "Embercap jumped for a Goomba and got a Goomba on his skull. He dropped. The mace did the rest. First kill. A Koopa said murderer, which the shack had already earned.\n\n"
        "## Part III — The Mage Who Would Not Stay\n\n"
        "Dewdrop went down. The Magikoopa left twice and hit once. The bear fell. Embercap found the winch.\n\n"
        "## Part IV — Out\n\n"
        "The gate opened. Big R took a spear, five gold, and Dewdrop. Dewdrop woke long enough to bless the people carrying her and went out cold. Toadette came last with dull claws. The army was still at the pipes.\n"
    )
    b["waluigiAssessment"] = (
        "I have a wall and no guildmaster. That is the whole review. Embercap's lie was the only thing that worked until the winch. "
        "The crayfish was the only thing that held. Dewdrop is not a cost you get to pay twice a week."
    )
    b["casualties"]["attackers"] = (
        "Dewdrop speared and twice unconscious, extracted. Big R dropped by a Magikoopa blast, stood. "
        "Toadette's claw hurt on a brick. Nobody of the four stayed on the wall."
    )
    for km in b.get("keyMoments") or []:
        if "Critically" in str(km.get("result", "")):
            km["result"] = "Folded on the rungs; the climb did not stop"
        if km.get("act", "").startswith("Wild"):
            km["act"] = "Became a five-foot crayfish"
    save("battles.json", battles)
    print("battle cleaned")

    props = load("props.json")
    t = props["props"]["prop_junction_ladder_tally"]
    t["subtitle"] = "Field count after the climb"
    t["note"] = "Busiest body on the wall: a standard Koopa. The bear took the most attention. Magikoopa left twice."
    t["body"] = (
        "<div class=\"pd-head\"><div class=\"pd-org\">Peach Loyalist Field Count</div>"
        "<div class=\"pd-sub\">Warp Pipe Junction ladders · 5 Aethel, 1040 BF</div></div>"
        "<div class=\"pd-meta\">Afternoon into the wall. Extracted before dark.</div>"
        "<div class=\"pd-clause\">Koopa Troopa (standard): kept hitting the bear.</div>"
        "<div class=\"pd-clause\">Magikoopa: would not stay; one blast put the bear down.</div>"
        "<div class=\"pd-clause\">Black Bear / Big R: missed, hit, fell, stood, carried Dewdrop.</div>"
        "<div class=\"pd-clause\">Goomba (conscript): one try, then dead on Embercap.</div>"
        "<div class=\"pd-total\">Result: gate opened from inside. Dewdrop extracted. Junction not held.</div>"
        "<div class=\"pd-margin\">The crayfish is not on this sheet. The crayfish was five feet and still the captain. — W.</div>"
    )
    save("props.json", props)

    inv = load("investigations.json")
    mc = next(i for i in inv["investigations"] if i["id"] == "mushroom_civil_war_file")
    for ex in mc.get("exhibits") or []:
        if ex.get("id") == "ex_ladder_tally":
            ex["title"] = "What the wall actually produced"
            ex["onRecord"] = "A field count. Busiest: Koopa. Most attention: the bear. One Magikoopa blast."
            ex["visual"] = (
                "<div style=\"width:130px;height:90px;background:#f4ecd8;border:1px solid #333;padding:6px;font:11px monospace\">"
                "WALL<br>KOOPA<br>BEAR<br>WINCH</div>"
            )
            ex["analysis"] = (
                "The tally will not write crayfish. It will write bear. Waluigi is keeping both. "
                "The Magikoopa's blast is the only line that explains Big R on the ground.\n\n"
                "## Dewdrop\n\n"
                "She is not a row. She is the reason the extraction is the result and not a hold.\n\n"
                "[[roll:3|whether ANCHOR and Black Bear are one body|One person. The field needed two names for the same back.|A bear and a toad sharing a ladder. Second hearing required.]]"
            )
    save("investigations.json", inv)
    print("props/inv cleaned")

    aa = load("articleAnalyses.json")
    aa["analyses"] = [x for x in aa["analyses"] if x.get("id") != AID]
    aa["analyses"].append(ANALYSIS)
    save("articleAnalyses.json", aa)
    print("analysis filed", AID)

    # big_r five-round leftover
    chars = load("characters.json")
    for c in chars:
        if c.get("id") == "big_r" and "five-round" in (c.get("description") or ""):
            c["description"] = (c["description"] or "").replace(
                "a five-round scrap", "the Junction wall"
            )
    save("characters.json", chars)


if __name__ == "__main__":
    main()
