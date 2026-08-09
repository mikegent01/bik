#!/usr/bin/env python3
"""
Builds Mount Ebott Survey Part VII and appends it to Reputation-Matrix2/data/events.json.
Follows STORY_FORMAT_GUIDE.md craft guidelines and includes all narrative beats from the user transcript.
"""

import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EVENTS_PATH = os.path.join(ROOT, 'Reputation-Matrix2', 'data', 'events.json')
CHARS_PATH = os.path.join(ROOT, 'Reputation-Matrix2', 'data', 'characters.json')

sections = [
    {
        "name": "The Red Bone Formation — The Puzzle That Was Never Accepted",
        "icon": "🦴",
        "overview": (
            "The red bones materialized out of thin air, colossal and jagged, towering high into the artificial sky of the false meadow. "
            "They locked into a massive X formation directly over the survey group, radiating pulses of raw gravity magic that made the dirt beneath their boots vibrate.\n\n"
            "**\"You should've accepted my challenge!\"** Papyrus shouted sternly, his posture rigid and his boisterous, patient demeanor entirely gone. "
            "His voice echoed through the blue distortion surrounding the field. **\"Disrespecting puzzles is a serious offense! You had one chance to solve it fairly — now you face my full wrath!\"**\n\n"
            "The massive enamel structures began advancing slowly, their sheer scale casting long, sharp shadows across the soil. "
            "Sans braced his boots on the shifting earth, his browbones drawn low. **\"We can't fight these head-on!\"** he yelled over the roaring distortion. "
            "His usual lazy grin had vanished, replaced by stark urgency.\n\n"
            "Dracule Mihawk stayed silent but focused. His golden eye tracked the red bone formation, scanning every joint and energy vector while his hand maintained a tight, practiced grip on Yoru's hilt. "
            "They needed an opening, and they needed it before the X formation closed.\n\n"
            "*WAH! Puzzle doctrine! In the Mushroom Regency, if you ignore a puzzle, a Toad hands you a hint card and a complimentary mushroom. "
            "In the Underground, disrespecting a puzzle means colossal red enamel spikes try to flatten your skull into a pancake! "
            "Waluigi respects the commitment to game design, even if the execution is an administrative nightmare! WAH.*"
        ),
        "waluigi_note": "Observe that Papyrus's rage is not triggered by tactical opposition, but by procedural disrespect. He views the puzzle as an honorable contract; breaking it converts him from a eccentric host into an executioner."
    },
    {
        "name": "The Multi-Color Tile Grid — Pattern Under Foot",
        "icon": "🎨",
        "overview": (
            "With a sharp hum, the colossal red bones disbursed into particle light. Beneath their feet, the dirt gave way as multi-colored floor tiles materialized across the clearing. "
            "The battlefield transformed into a giant glowing grid, each tile pulsing in vibrant hues of yellow, red, green, blue, and purple like an enormous board game.\n\n"
            "The floating platforms above dissolved entirely. Sans, Mihawk, and the Agent dropped through the air, landing heavily on the glowing tiles. "
            "The surface beneath them lit up instantly upon impact, sending soft hums of magical energy humming through the soles of their boots.\n\n"
            "**\"A new challenge...\"** Sans muttered, his eyelights scanning the colorful pattern with cautious eyes. **\"Papyrus's specialty.\"**\n\n"
            "Papyrus stood at the edge of the tile grid, arms crossed stiffly over his chest plate. **\"This is a tile-matching puzzle!\"** he declared, his voice carrying across the field with unquestioned authority. "
            "**\"You must step only on tiles that form a pattern — either by color or symbol. Fail to match properly, and you will be penalized. Your goal is simple: navigate from one side of this field... to the other... without stepping wrong.\"**\n\n"
            "**\"Well?\"** Sans finally said after a beat of heavy silence, glancing around at the glowing pattern. He looked toward Mihawk for insight, knowing full well that neither of them were puzzle technicians.\n\n"
            "*WAH! Color-coded floor tiles! The classic hazard of subterranean game design! Step on red, you burn; step on yellow, you get shocked; step on green, a monster bites your ankle! "
            "Waluigi once designed a tennis court with similar rules, but Wario refused to wear the required rubber boots and sued the league! WAH.*"
        ),
        "waluigi_note": "The tile-matching puzzle represents Papyrus's final effort to impose order on a chaotic encounter. The rules are clear, rigid, and non-negotiable."
    },
    {
        "name": "The Flying Bone — Magic At Exhaustion Point",
        "icon": "⚡",
        "overview": (
            "Before anyone could test the first tile, Papyrus snapped. **\"You think a battle will save you!\"** he bellowed, raising a gauntleted hand. "
            "A sharp, white bone materialized instantly and flew across the grid toward Sans at terrifying speed, fueled by Papyrus's mounting fury.\n\n"
            "Sans flinched, twisting his body sideways in a desperate attempt to avoid a direct hit. His reflexes kicked in just fast enough, but not by much. "
            "**\"Gah!\"** he grunted as the bone grazed his left shoulder, scorching the fabric of his blue hoodie and sending a spray of white sparks across the glowing tiles.\n\n"
            "A second bone whizzed inches past the Agent's temple. The Agent ducked low, feeling the wind of the projectile ruffle his collar. "
            "**\"We need to get out of the cage!\"** the Agent shouted, recovering his stance.\n\n"
            "Sans nodded in grim agreement, his breathing heavy. **\"If only I had more magic left...\"** he muttered under his breath. "
            "He looked down at his hands. The glowing blue aura around his knuckles flickered erratically—a clear sign that his magical reserves were nearly completely exhausted after maintaining the gravity fields and shortcuts.\n\n"
            "*WAH! Magical exhaustion! Skeletons look invincible until their blue glow drops below fifteen percent, at which point they become small men in oversized hoodies who cannot dodge a stray vegetable! "
            "Waluigi has seen Wario hit the exact same physical wall after twenty minutes on a treadmill! WAH.*"
        ),
        "waluigi_note": "Sans's magic is finite. The sustained strain of spatial manipulation and defensive shields has reduced his reserve to a critical threshold."
    },
    {
        "name": "The Vulnerable Monologue — What Papyrus Wanted",
        "icon": "💔",
        "overview": (
            "Papyrus suddenly stopped moving. His aggressive posture collapsed, his arms falling loosely to his sides. "
            "His glowing eye sockets dimmed slightly as he stared down at the colorful tiles beneath his boots. When he spoke again, his tone was uncharacteristically quiet—almost melancholic.\n\n"
            "**\"I wanted to look at things the way I wanted... hear only what I wanted to hear... and say what I wanted to say. That's the kind of life I wanted.\"**\n\n"
            "Sans tensed immediately, caught off guard by the sudden shift. He exchanged a quick, bewildered glance with Mihawk before addressing his brother cautiously. "
            "**\"Papyrus... is everything alright?\"**\n\n"
            "Papyrus clutched one fist tight against his chest plate, frustration bleeding through his soft voice. "
            "**\"I wanted a life where things made sense... where I wasn't constantly struggling against everything and everyone... But nothing ever goes how I want it to. Not my powers... not my family... not even simple conversations.\"**\n\n"
            "He took a shuddering breath, staring into the dirt. **\"I spent so much time training to be strong... trying to prove myself... that I never stopped to think about what I really wanted. Maybe if things had been different...\"**\n\n"
            "*WAH! The mid-combat emotional admission! The rarest and most dangerous moment on any battlefield! "
            "When a tall skeleton stops throwing furniture to explain his inner insecurities, you do not interrupt him — you look for the exit while he is distracted! WAH.*"
        ),
        "waluigi_note": "Papyrus's emotional collapse reveals the psychological toll of his ambition. His aggressiveness was a mask for profound isolation and frustration."
    },
    {
        "name": "The Strike From Behind — The Dusting of Papyrus",
        "icon": "🥀",
        "overview": (
            "As Papyrus stood lost in thought, the Agent seized the opportunity to scan the perimeter for an escape route. "
            "That was when he noticed it—not a weakness in the cage, but a shift in Papyrus's grip. Flowey, who had been held limp in Papyrus's gauntlet, was wriggling free.\n\n"
            "With Papyrus distracted by his own confession, the golden flower slid quietly through his loosened fingers. "
            "Papyrus sighed heavily, completely unaware. **\"All I ever did was push people away... or let them push me... Maybe that's why Sans left.\"**\n\n"
            "Slowly and silently, a thin green vine sprouted from the earth directly behind Papyrus. It lengthened, its tip hardening into a razor-sharp wooden spike pointed at his exposed spine. "
            "A raspy, malicious voice cut through the air: **\"You... you idiots!\"**\n\n"
            "Papyrus turned sharply—**\"Wha-?!\"**—but before he could react, the vine driven upward slammed into his chest, impaling him violently from behind. "
            "Papyrus let out a choked cry, looking down in horror at the green stalk protruding through his armor. **\"N-No!... Wh... Who... did... this...\"**\n\n"
            "His form rapidly disintegrated into swirling white dust particles. **\"I... didn't mean...\"** he whispered before dissolving entirely into the dirt. "
            "The blue gravity cage flickered wildly and shattered with a deafening crack. Sans stood frozen, staring at the empty space where his brother had stood. **\"No... No no no...\"**\n\n"
            "*WAH! Treachery from a potted plant! Flowey waited until Papyrus was emotionally vulnerable, then struck him in the back with a sharpened stem! "
            "This is why Waluigi never trusts indoor flora! You think it is decorating the windowsill, but it is actually plotting a flank attack! WAH.*"
        ),
        "waluigi_note": "Flowey's assassination of Papyrus is an act of pure opportunistic malice, exploiting a moment of familial vulnerability to break the battle."
    },
    {
        "name": "The Agreement — How to Kill a Flower",
        "icon": "🗡️",
        "overview": (
            "The clearing fell into an oppressive silence. The dust particles swirled once in the breeze before dissipating into thin air, leaving no body and no trace. "
            "Sans did not move. His eyelights were wide and unblinking, staring blankly at the empty soil.\n\n"
            "The Agent turned his gaze toward Mihawk, his jaw set. He gave a firm, single nod. **\"We need to kill Flowey.\"**\n\n"
            "Mihawk's golden eye locked onto the distant patch of grass where Flowey was retreating. Without a word of hesitation, the Warlord stepped forward, drawing Yoru smoothly from his back sheath. "
            "The massive black blade gleamed under the artificial light. **\"Agreed,\"** Mihawk said coldly.\n\n"
            "**\"How do we kill a flower?\"** the Agent asked, adjusting his stance.\n\n"
            "Mihawk tilted his head slightly, assessing the target with dispassionate pragmatism. **\"Burn it,\"** he stated plainly. **\"Fire is effective against plants.\"**\n\n"
            "Sans remained motionless beside them, his fists clenched so tightly his phalanges creaked under the pressure.\n\n"
            "*WAH! Tactical herbicidal doctrine! Swordsmen do not negotiate with weeds! "
            "When a garden specimen murders a municipal officer in front of his brother, you do not prune it — you fetch the incinerator! WAH.*"
        ),
        "waluigi_note": "Mihawk's response is purely functional. He categorizes Flowey not as an opponent of honor, but as a pest requiring eradication."
    },
    {
        "name": "The Midnight Tea — Sans's Memory of Asgore",
        "icon": "☕",
        "overview": (
            "The air around Sans warped suddenly as reality seemed to bend inward. For a brief, suspended beat, the meadow dissolved into the quiet warmth of a distant memory.\n\n"
            "It was night inside the royal castle. Outside the leaded windows, the Underground was peaceful and dark. Sans sat at a heavy wooden table while King Asgore walked slowly over, carrying a steaming teapot. "
            "**\"The tea is ready!\"** Asgore announced warmly, pouring a golden liquid into two clay cups.\n\n"
            "**\"Thank you, Asgore. It smells lovely,\"** Sans said, taking the cup. He blew on the hot liquid before taking a slow sip. **\"As good as always.\"**\n\n"
            "Asgore smiled pleasantly across the table. **\"I really am thankful that you decided to come over, Sans. I wasn't sure I'd ever have outside visitors again, but... It's been too long since I've had company. The castle feels... quieter than it used to. I hope you enjoy the tea, it's an old recipe of mine.\"**\n\n"
            "**\"It's excellent as always,\"** Sans replied, leaning back in his chair. **\"It's been a rough few months lately. I needed an evening like this.\"**\n\n"
            "**\"Ho ho ho! I'm so glad you like it!\"** Asgore chuckled.\n\n"
            "Sans smirked softly. **\"You never stop being so positive and kind, do you? You could never serve a bad cup of tea, Asgore. You'd need to lose your hands before that happened.\"**\n\n"
            "Asgore leaned forward, resting his large paws on the table. **\"I would like to catch up on your lives, if you will. Tell me, what do you do for an occupation? I am very curious to know what goes on outside these caverns.\"**\n\n"
            "**\"Well, I work as a sentry,\"** Sans explained, folding his hands. **\"It's not a particularly exciting job, but... it keeps me busy. You know the usual. I keep an eye out for humans, patrol the Snowdin woods, and... sleep on the job.\"**\n\n"
            "Asgore's expression grew thoughtful. **\"What do you think about the whole catching humans thing?\"**\n\n"
            "Sans exhaled slowly, his eyelights dimming. **\"Honestly? I don't agree with it. I've never caught a human. Never wanted to.\"**\n\n"
            "Asgore gazed at him with gentle faith. **\"I understand it's difficult to find the will to do what we must. But from what I can tell, you are an honest young man. I believe when the time comes you will do the right thing. So tell me... what keeps you going?\"**\n\n"
            "Sans looked down into his teacup. **\"Honestly? My brother. Papyrus... he keeps me going. I wanna make him proud, you know? He believes in being strong and noble, so I try to match that energy for him. And then there are little things too — like my friends in Snowdin. Grillby's diner...\"**\n\n"
            "**\"There is nothing wrong in finding solace in others,\"** Asgore said gently. **\"I assure you if we had more people like you and your brother we will have a peaceful future someday. Promise me this will you, Sans? Never give up this dream.\"**\n\n"
            "Sans looked out at the peaceful darkness beyond the glass. **\"Yeah... I do. More than anything, I want peace. I want everyone I care about to be happy and safe.\"**\n\n"
            "*WAH! The calm before the execution! A quiet cup of herbal tea between a depressed monarch and a sentry who refuses to do his job! "
            "In hindsight, this conversation explains why Sans spent four years sleeping at his guard post instead of turning in human footwear! WAH.*"
        ),
        "waluigi_note": "This flashback establishes the emotional core of Sans's character: his commitment to peace was anchored entirely in his promise to Asgore and his love for Papyrus."
    },
    {
        "name": "The Freeze and the Eruption — Sans Executes Flowey",
        "icon": "🔥",
        "overview": (
            "The memory snapped shut like a slammed door. Sans blinked, his eyelights returning to the present meadow where Gamma Agent and Mihawk were driving Flowey into a corner.\n\n"
            "Time froze. A sharp, audible *click* echoed through the atmosphere as the world turned monochrome gray. "
            "Sans materialized instantaneously beside Flowey, his presence silent, heavy, and absolute. His eye sockets were completely hollowed out—devoid of white lights.\n\n"
            "**\"Look at me,\"** Sans whispered in a voice cold enough to freeze blood. **\"You hurt Papyrus.\"**\n\n"
            "Flowey's eyes widened in sheer terror. **\"YOU DAMN BRAT!\"** the flower screamed, thrashing his vines. **\"YOU THINK A BATTLE CAN SAVE YOU!\"**\n\n"
            "A spell erupted from Sans in a catastrophic burst of blinding blue magic—an attack fueled by unadulterated, unbridled rage. "
            "The wave struck Flowey dead-on, scorching his petals and blasting him backward across the dirt with a agonizing shriek.\n\n"
            "Flowey hit the soil hard, smoking and battered, but Sans was already upon him. Sans grabbed Flowey by the stem and slammed him brutally into the ground, cratering the earth beneath them.\n\n"
            "**\"COME ON!\"** Sans roars, his teeth bared in a terrifying snarl as blue fire flared from his left socket. **\"WHERE'S THAT SPIRIT NOW!?!\"** He slammed the flower down again—*BAM!* **\"ANSWER ME! You don't get to hide! Why did you do it?! What was the point of hurting my brother!? ANSWER ME RIGHT NOW!\"**\n\n"
            "Time snapped back into motion. The color flooded back into the meadow as Sans released his grip. Flowey lay motionless in the crater, his petals crumpled and singed, his form disintegrating into limp green ash.\n\n"
            "The Agent stepped forward, staring at the ruined soil. **\"Sans... he's dead. You killed it.\"**\n\n"
            "Sans lowered his trembling hands slowly, staring down at the spot with a blank, hollow expression. **\"Guess I did,\"** he said quietly. **\"He deserved it.\"**\n\n"
            "*WAH! Time-stop beatdowns! Never make a short skeleton angry in front of a flower! "
            "Sans went from zero to localized apocalyptic beatdown in three-tenths of a second! Flowey learned the hard way that 'where is that spirit now' is not a rhetorical question! WAH.*"
        ),
        "waluigi_note": "Sans's execution of Flowey is a rare demonstration of his uninhibited combat capability when his personal boundaries are shattered."
    },
    {
        "name": "The Survey Machine Record — Ecological Miscalibration",
        "icon": "📡",
        "overview": (
            "With Flowey eliminated, the clearing grew silent. The Agent walked over to the Iron Legion survey machine resting on the grass, its brass housing humming softly.\n\n"
            "The interface screen flickered with stored data. The Agent stared at the monitor in utter disbelief—the machine had recorded the entire battle in meticulous detail. "
            "Timestamped movement vectors, magical energy spikes, the gravity cage collapse, and even Sans's final time-stop execution were fully logged.\n\n"
            "Mihawk stepped alongside him, crossing his arms as he examined the display. **\"Hm. That thing picked up everything.\"**\n\n"
            "**\"It's meant for ecological surveys,\"** the Agent said, frowning at the screen. **\"How did it record combat data?\"**\n\n"
            "Mihawk leaned in closer. **\"This data is messy. Half ecological readings, half combat logs. Soil samples and energy spikes... "
            "The device has been broken, repaired, and re-patched too many times to function properly. It picked up the magic by accident.\"**\n\n"
            "The Agent nodded, reaching down to unbuckle the heavy leather straps. **\"Whatever. I'm re-attaching the survey device and grabbing the straps to make a makeshift backpack. It's heavy, but we won't lose it this way — not again.\"**\n\n"
            "He hoisted the bulky metal unit onto his back, pulling the straps tight across his chest. He took two steps before the leather groaned under the strain. "
            "The makeshift harness snapped, and the survey device slid violently down his legs, clunking heavily against the dirt with a loud thud.\n\n"
            "The Agent stared down at the dropped machine. **\"It will not hold.\"**\n\n"
            "Mihawk exhaled dryly through his nose. **\"Told you.\"**\n\n"
            "*WAH! Repurposed technology! An ecological survey device that accidentally logged a murder and a time-stop assault because its sensors could not tell the difference between a root sample and a Gaster Blaster! "
            "Iron Legion engineering at its finest! WAH.*"
        ),
        "waluigi_note": "The survey machine's corrupted logs reflect its chaotic service history. Repaired by Flowey and salvaged by the Agent, it remains a fragile but vital intelligence asset."
    },
    {
        "name": "Egress Doctrine — The Law of the Barrier",
        "icon": "📜",
        "overview": (
            "Leaving the dropped machine on the ground for a moment, the Agent looked toward Sans. **\"We just have to get out of here. Asgore and the Queen know how to, right?\"**\n\n"
            "Sans scanned the quiet meadow, his posture weary. **\"We should go... before anything else happens. I think we need to find an exit from this place, somewhere that will take us back to New Home. Maybe the queen or Asgore can help. I don't know the exact way from here, though.\"**\n\n"
            "The Agent raised an eyebrow. **\"The Queen... you call her that a lot, but other people say Toriel. Why is that? Is her title not that big?\"**\n\n"
            "Sans's expression turned stern. **\"To me, she's the queen. Toriel is her name, yeah. But she's also the queen of monsters. She deserves to be called by her title. She's one of the only people I've met who is worthy of respect. So to me, she's the queen. Nothing less.\"**\n\n"
            "The Agent nodded, then glanced around. **\"Without a map... I guess we can discuss what to do if the Friendship comes back with Gaster and his pirates.\"**\n\n"
            "Mihawk glanced over curiously. **\"You're expecting the Friendship to return?\"**\n\n"
            "**\"Yes, why wouldn't I?\"** the Agent replied.\n\n"
            "Mihawk folded his arms. **\"Gaster's crew is unpredictable. They come and go as they please. If they do come back, we'll see what their intentions are before assuming anything helpful will happen.\"**\n\n"
            "The Agent turned back to Sans. **\"Also, Asgore and the Queen... Sans, you said they won't just let us out. Why? Why is leaving the Underground a different process than just leaving the Old World where I live?\"**\n\n"
            "Sans rubbed his skull thoughtfully. **\"Leaving the Underground isn't like leaving any random place in your world. There are rules down here. Laws. Barriers. "
            "A long time ago... a powerful human wizard put all of us here. He was trying to keep humans from leaving, but he kept us monsters trapped as well. The only way to leave... is for a human and monster to work together.\"**\n\n"
            "**\"So can you even leave when we try to exit?\"** the Agent asked.\n\n"
            "**\"Technically? Yeah,\"** Sans explained. **\"The wards don't stop us from exiting the Underground itself. But once we step out of here... we can't come back in easily. And if something happens on the surface...\"**\n\n"
            "**\"And the humans won the war?\"**\n\n"
            "**\"Yeah,\"** Sans said softly. **\"The humans won. They drove us underground and sealed us away permanently. To break the barrier for good... it takes massive effort. Both humans and monsters working together willingly.\"**\n\n"
            "*WAH! Dimensional boundary laws! The barrier was built by an ancient human wizard who wanted to lock monsters away, but he built the lock so poorly that people can leave but cannot get back in! "
            "Typical human wizard work — grand concept, terrible administrative execution! WAH.*"
        ),
        "waluigi_note": "Sans's explanation clarifies the asymmetrical nature of the Barrier: while egress is physically possible for individuals, permanent dissolution requires bilateral magical cooperation."
    },
    {
        "name": "The Cave Loop — Teleportation Under Whispers",
        "icon": "🌀",
        "overview": (
            "Sans took a deep breath, steeling himself. **\"Alright. Let me take the lead.\"**\n\n"
            "He raised a hand, his eye sockets flashing with a brief spark of blue light. The air around them folded inward, and the false meadow dissolved into dark, echoing stone corridors.\n\n"
            "They began walking briskly through the dimly lit tunnels. The Agent checked his wrist watch, tapping the glass face. **\"Huh. We've been walking for about twenty minutes now.\"**\n\n"
            "He looked around, noticing the grand architectural spires of New Home Castle looming directly ahead through the gloom. **\"So you teleported us closer to the king. I thought that was a random field, but you seemed to know where to go.\"**\n\n"
            "Sans shrugged casually. **\"Yeah... I knew where to go. The castle isn't exactly hard to find if you're familiar with the Underground. The Underground loops like a cave system — everything connects eventually if you walk far enough. There aren't really 'lost' places down here... just ones that are harder to get to. And this place? It's one of the major points on that loop.\"**\n\n"
            "The Agent slowed his pace slightly, stepping alongside Mihawk. He leaned in and whispered softly: **\"That was way too fast, don't you think? No interruptions... suddenly we're in the tunnels, then we're here that fast near the capital.\"**\n\n"
            "Mihawk kept his gaze fixed ahead, his voice low and unbothered. **\"Teleportation is fast... yes. But not unusual for monsters with magic. The capital isn't far from here anyway. It's normal to...\"**\n\n"
            "He cut himself off as three heavily armored royal guards stepped out from the shadows near the castle gates.\n\n"
            "*WAH! Spatial shortcuts! You think you are walking three miles through damp granite, but a skeleton blinks his eye sockets and suddenly you are standing in the king's front yard! "
            "Spatial efficiency or lazy map design? Waluigi says both! WAH.*"
        ),
        "waluigi_note": "Sans's reliance on spatial loops allows the group to bypass intermediate sub-zones, bringing them directly to the political center of the Underground."
    },
    {
        "name": "The Gate Guard Bluff — The Commissar Vexis Documents",
        "icon": "🛡️",
        "overview": (
            "The royal guards lowered their halberds, blocking the arched entrance to the courtyard. **\"Halt!\"** the lead guard commanded sharply. **\"State your business!\"**\n\n"
            "The guards narrowed their eyes, hands resting firmly on their sword hilts. **\"You there! Identify yourselves and state why you're approaching the castle!\"**\n\n"
            "Sans hesitated for a second too long, unsure how to frame their arrival. The lead guard stepped forward, his voice dripping with warning. **\"Last chance. Answer!\"**\n\n"
            "The Agent nudged Sans aside, stepping forward with crisp military posture. He puffed out his chest and spoke in a clear, practiced cadence: "
            "**\"We are the Iron Legion Commissar Royal Expedition Unit, codename Lone Snake, color Green. Primary purpose: classified due to being currently active. Secondary purpose: survey of unfamiliar area.\"**\n\n"
            "The guards blinked, utterly taken aback by the barrage of formal military terminology. **\"Iron Legion...? Commissar?\"** the lead guard muttered, exchanging bewildered looks with his men. "
            "**\"We weren't informed of any royal expedition unit arriving today. Do you have proof of your rank and mission parameters?\"**\n\n"
            "**\"Yes,\"** the Agent replied smoothly. **\"I have papers issued by Commissar Vexis.\"**\n\n"
            "He reached into his inner coat pocket and produced a official folder stamped with gold foil and sealed with heavy red wax, handing it to the lead guard.\n\n"
            "The guards crowded around, inspecting the documents carefully. **\"Hmph. These look legitimate enough...\"** the lead guard admitted begrudgingly, scrutinizing the official seal and Commissar Vexis's signature. "
            "**\"Though we were never issued orders regarding a commissar... Very well. You may enter... for now.\"**\n\n"
            "As they passed through the gates, Sans mumbled quietly with a smirk: **\"Guess those documents actually worked after all. We got lucky there. Good on you for getting all that military jargon down.\"**\n\n"
            "**\"Guess they're slow on the uptake, the guards,\"** the Agent chuckled.\n\n"
            "*WAH! Bureaucratic intimidation! Nothing confuses a checkpoint guard faster than a man in a green coat reading out sixteen syllables of fake classification numbers! "
            "Waluigi uses this exact trick when entering VIP lounges at kart races! WAH.*"
        ),
        "waluigi_note": "The Agent's military bluff demonstrates the power of formal documentation. In hierarchical societies, official seals often override operational security protocols."
    },
    {
        "name": "The Throne Room Audience — King Asgore and Queen Toriel",
        "icon": "👑",
        "overview": (
            "The grand wooden doors of the castle creaked open, revealing a vast throne room lit by flickering chandeliers and carpeted in golden buttercups. "
            "At the far end sat King Asgore upon his massive stone throne, his red cape draped over his shoulders and his trident resting beside his seat. "
            "Standing near him as royal advisor was Queen Toriel, her hands folded neatly in her white robes.\n\n"
            "Asgore looked up slowly as the group entered, his voice booming through the hall. **\"Who approaches my court? I don't recall being informed of an official military expedition passing through the Underground... nor a royal escort either. I'm not used to unexpected guests in my home, especially armed ones.\"**\n\n"
            "The Agent stepped forward, lowering his hands. **\"Oh no, we mean this place no harm. We are seeking an exit.\"**\n\n"
            "Asgore's expression shifted into a contemplative frown. **\"An exit...?\"**\n\n"
            "Toriel stepped forward gently, her golden eyes filled with quiet concern. **\"And what exactly do you mean by 'seeking an exit,' child? Do you wish to leave permanently?\"**\n\n"
            "**\"Yes, we wish to go to the surface,\"** the Agent affirmed.\n\n"
            "Asgore leaned back on his throne, steepling his large claws. **\"I see... And you believe there is an exit that can be opened? That it hasn't been sealed beyond return?\"**\n\n"
            "**\"No, no,\"** the Agent clarified, gesturing to Sans. **\"Our skeleton friend here told us you would be able to help see us out.\"**\n\n"
            "Asgore scrutinized Sans. **\"He is the one who suggested you seek me out for assistance? And you believe I have the power to simply... open a path for you? Just like that? The logistics of opening a path to the surface are not simple.\"**\n\n"
            "Sans stepped forward, dropping his casual demeanor entirely. **\"We're aware the barrier isn't easy to undo... but if anyone could do it, you could, right?\"**\n\n"
            "*WAH! Royal court manners! Entering a throne room with a giant sword and a broken survey machine is usually a recipe for getting executed, "
            "but King Asgore is so polite he offers tea before asking why you are standing on his rug! WAH.*"
        ),
        "waluigi_note": "The interaction in the throne room transitions the expedition from a tactical survival scenario into a high-level diplomatic negotiation."
    },
    {
        "name": "Barrier Logistics — Localized Transport vs Mass Destruction",
        "icon": "⚡",
        "overview": (
            "Asgore stroked his golden beard thoughtfully, his eyes heavy with ancient responsibility. "
            "**\"Breaking through centuries of magical barriers is no small task... It would require immense power and precision.\"**\n\n"
            "Toriel nodded in agreement. **\"If we attempt this... it must be done carefully. The last thing we need is for the barrier to collapse entirely or cause catastrophic damage.\"**\n\n"
            "The Agent frowned. **\"The last thing you want is for it to collapse...? Why wouldn't you want to destroy it?\"**\n\n"
            "Asgore explained in measured tones. **\"Destroying it outright would risk destabilizing the Underground entirely. The magic that keeps us here isn't just a prison — it's also what maintains our world as we know it. "
            "Think of it this way: if we tear down the barrier completely without care, the magic sustaining our world isn't infinite. It's balanced. Without careful control... everything could collapse inward like a dying star.\"**\n\n"
            "Toriel added gently: **\"And even worse — imagine if dangerous creatures or surface forces got through before proper precautions were taken! The surface wouldn't be safe either!\"**\n\n"
            "The Agent considered this before offering an alternative: **\"Then fine. Can we use a localized transport where we just send two people out?\"**\n\n"
            "Asgore looked thoughtful. **\"Yes... a localized transport might be an option. It would require tremendous power, but it could allow a few to pass through more safely.\"**\n\n"
            "Toriel stepped forward, her expression turning serious. **\"However... there is one other factor to consider. If we do this... you must understand that it's possible you may never return. Are you prepared for such a life?\"**\n\n"
            "The Agent met her gaze firmly. **\"Yes. I feel like I have gained what I wanted to here.\"**\n\n"
            "*WAH! Localized portal physics! Instead of tearing down the whole wall and letting the roof collapse, you cut a small envelope-sized hole in reality and push two men through! "
            "Precision magic over raw force every time! WAH.*"
        ),
        "waluigi_note": "The localized transport proposal solves the ecological risk of total barrier collapse, substituting systemic disruption with personal, one-way exile."
    },
    {
        "name": "The Oath of Secrecy — The Final Terms",
        "icon": "🖋️",
        "overview": (
            "Asgore and Toriel exchanged a brief, meaningful look, coming to a silent agreement.\n\n"
            "**\"Very well then,\"** Asgore said, his deep voice carrying finality. **\"We are willing to attempt the transport. I will prepare the necessary spellwork. However...\"**\n\n"
            "Toriel stepped forward, her expression stern yet protective. **\"We must ask one condition of you before we continue.\"**\n\n"
            "**\"What is it?\"** the Agent asked.\n\n"
            "Asgore folded his hands together over his chest. **\"Before we proceed... you must swear an oath. An oath of secrecy regarding the Underground and its people.\"**\n\n"
            "Toriel emphasized every word: **\"You cannot reveal our world to humans on the surface. Not fully, not carelessly. "
            "The safety of monsters depends on this barrier remaining intact in everyone's minds as a myth — not a reality they can exploit.\"**\n\n"
            "The Agent, Mihawk, and Sans stood together before the throne. The weight of the vow settled heavily in the air. The expedition had achieved its objective, but the price of egress was absolute silence.\n\n"
            "*WAH! The Non-Disclosure Agreement of Mount Ebott! A solemn vow made to a goat king and a queen that keeps seven hundred thousand underground monsters off surface television! "
            "Waluigi approves of non-disclosure agreements, especially when they prevent tax auditors from finding hidden gold reserves! WAH.*"
        ),
        "waluigi_note": "The Oath of Secrecy serves as the final diplomatic barrier. It ensures that while individuals may exit, the Underground remains protected by mythological obscurity."
    }
]

description_lead = (
    "*\"I wanted to look at things the way I wanted... hear only what I wanted to hear... and say what I wanted to say. That's the kind of life I wanted.\"*\n"
    "— **[Papyrus](#/article/papyrus)**\n\n"
    "*\"You cannot reveal our world to humans on the surface. Not fully, not carelessly. The safety of monsters depends on this barrier remaining intact in everyone's minds as a myth — not a reality they can exploit.\"*\n"
    "— **[Queen Toriel](#/article/toriel)**\n\n"
    "*\"WAH! An oath of secrecy! A royal non-disclosure agreement written in ancient monster magic and sealed without a notary! Waluigi has signed many non-disclosure agreements, but usually they were to keep Wario from admitting who broke the court floodlights! WAH.\"*\n"
    "— **[Waluigi](#/article/waluigi), Auditor-General, Walupedia Editorial Board**\n\n"
    "---"
)

summary_text = (
    "Part VII completes the Mount Ebott Survey Expedition. Following the Gravity Cage assault, Papyrus attempts a tile-matching puzzle before suffering an emotional breakdown. "
    "Flowey slips from his grip and impales Papyrus from behind with a sharpened vine, reducing him to dust. Sans experiences a fleeting memory of drinking tea with King Asgore before freezing time "
    "and brutally executing Flowey in a burst of violent blue magic. The Agent recovers the survey machine—discovering it recorded the entire fight—and attempts to wear it as a backpack before the straps fail. "
    "Guided by Sans through the Underground's cave loop, the group reaches New Home Castle, where the Agent uses official Iron Legion documents signed by Commissar Vexis to bluff past the royal guards. "
    "In the throne room, King Asgore and Queen Toriel explain the Barrier's delicate balance and agree to grant localized transport to the surface under a binding Oath of Secrecy."
)

aftermath_text = (
    "## Aftermath & Operational Standing\n\n"
    "**1. Operational Result:** The Mount Ebott Survey Expedition successfully reached the political center of the Underground at New Home Castle. "
    "The primary objective—locating an egress route to the surface—was negotiated directly with King Asgore and Queen Toriel.\n\n"
    "**2. Casualty & Personnel Status:** Papyrus was assassinated by Flowey via spine impalement and reduced to dust. Flowey was subsequently executed by Sans in a time-stop magic eruption. "
    "Sans remains mentally exhausted but operational. Dracule Mihawk and the Legionary Agent sustained minor graze injuries.\n\n"
    "**3. Materiel & Intelligence:** The Iron Legion survey machine was recovered, containing complete combat logs and barrier energy signatures despite its ecological miscalibration. "
    "Official Iron Legion documentation issued by Commissar Vexis proved 100% effective in bypassing municipal security checkpoints.\n\n"
    "**4. Diplomatic Agreement:** Egress will be executed via localized transport spellcraft, subject to a binding Oath of Secrecy regarding the Underground's existence."
)

assessment_text = (
    "## Waluigi's Assessment & Editorial Verdict\n\n"
    "**1. The Egress Protocol — A Masterclass in Localized Transport.** Waluigi commends King Asgore and Queen Toriel for rejecting the total destruction of the Barrier. "
    "Destroying a load-bearing dimensional seal to move two men is like blowing up a bridge to cross a puddle. Localized transport is clean, efficient, and keeps the roof where it belongs. WAH.\n\n"
    "**2. The Vexis Credentials — Administrative Victory.** The Agent's use of Commissar Vexis's papers proves Waluigi's long-standing thesis: "
    "guards at official gates do not read documents to verify truth; they read documents to relieve themselves of responsibility. A gold seal and a commissar's name will get you into almost any room in the multiverse. WAH.\n\n"
    "**3. The Death of Papyrus — A Warning on Emotional Vulnerability.** Papyrus died because he stopped fighting to express an emotional truth on an active battlefield. "
    "Waluigi is not devoid of sympathy, but in tactical environments, opening your heart to your opponent is simply an invitation for a weed to stab you in the spine. WAH.\n\n"
    "**4. The Oath of Secrecy — Legal Recommendation.** Waluigi advises all readers to respect the Oath of Secrecy. "
    "Not because of royal authority, but because if humans on the surface discover seven hundred thousand monsters living under a mountain, they will immediately try to tax them. WAH.\n\n"
    "**Final Recommendation:** Approve the Part VII filing. Close the Mount Ebott Survey dossier. File the Vexis documents in the Iron Legion archives under Class 1 Clearance. WAH!"
)

part_7_event = {
    "id": "mount_ebott_survey_part_7",
    "name": "The Mount Ebott Survey: Part VII — The Tea Promise, Flowey's Execution, and the Throne Room Oath",
    "title": "The Mount Ebott Survey: Part VII — The Tea Promise, Flowey's Execution, and the Throne Room Oath",
    "date": "Mid-10XX BF — Day 6",
    "era": "Modern Era",
    "location": "mount_ebott",
    "type": "expedition",
    "status": "Resolved",
    "customCss": ".prose blockquote { border-left-color: #8b0000; }",
    "summary": summary_text,
    "description": description_lead,
    "sections": sections,
    "participants": ["dracule_mihawk", "sans", "gamma_agent", "flowey", "papyrus", "asgore", "toriel"],
    "outcome": "Flowey executed; Papyrus dusted; Group reaches New Home Castle; Localized transport granted by Asgore and Toriel under Oath of Secrecy.",
    "notableFeatures": [
        "Papyrus's tile-matching puzzle phase and emotional monologue",
        "Flowey's betrayal and Papyrus's dusting",
        "Sans's flashback memory of drinking tea with King Asgore",
        "Sans's time-stop execution of Flowey",
        "Recovery of the corrupted ecological survey machine",
        "Sans's explanation of the Barrier and Human-Monster war",
        "The Agent's military bluff using Commissar Vexis credentials",
        "Throne room negotiation with King Asgore and Queen Toriel",
        "The localized transport agreement and Oath of Secrecy"
    ],
    "relatedArticles": [
        "mount_ebott_survey_part_6",
        "mount_ebott_survey_part_5",
        "mount_ebott_survey_part_4",
        "mount_ebott_survey_part_3",
        "mount_ebott_survey_part_2",
        "mount_ebott_survey_mission",
        "sans",
        "dracule_mihawk",
        "asgore",
        "toriel",
        "flowey",
        "papyrus",
        "iron_legion",
        "monster_underground"
    ],
    "aftermath": aftermath_text,
    "waluigiAssessment": assessment_text
}


def main():
    with open(EVENTS_PATH, 'r', encoding='utf-8') as f:
        events = json.load(f)

    # Check if mount_ebott_survey_part_7 already exists
    existing_idx = next((i for i, e in enumerate(events) if e.get('id') == 'mount_ebott_survey_part_7'), None)
    if existing_idx is not None:
        events[existing_idx] = part_7_event
        print("Updated existing mount_ebott_survey_part_7 in events.json.")
    else:
        events.append(part_7_event)
        print("Appended mount_ebott_survey_part_7 to events.json.")

    with open(EVENTS_PATH, 'w', encoding='utf-8') as f:
        json.dump(events, f, indent=2, ensure_ascii=False)

    # Also update characters.json to ensure flowey and papyrus have mount_ebott_survey_part_7 in keyEvents/relatedArticles
    if os.path.exists(CHARS_PATH):
        with open(CHARS_PATH, 'r', encoding='utf-8') as f:
            chars = json.load(f)

        updated_chars = False
        for c in chars:
            if c.get('id') in ['flowey', 'papyrus']:
                if 'keyEvents' in c and 'mount_ebott_survey_part_7' not in c['keyEvents']:
                    c['keyEvents'].append('mount_ebott_survey_part_7')
                    updated_chars = True
                if 'relatedArticles' in c and 'mount_ebott_survey_part_7' not in c['relatedArticles']:
                    c['relatedArticles'].append('mount_ebott_survey_part_7')
                    updated_chars = True

        if updated_chars:
            with open(CHARS_PATH, 'w', encoding='utf-8') as f:
                json.dump(chars, f, indent=2, ensure_ascii=False)
            print("Updated flowey and papyrus in characters.json.")

    print("Build complete.")

if __name__ == '__main__':
    main()
