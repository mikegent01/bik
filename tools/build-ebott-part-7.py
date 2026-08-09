#!/usr/bin/env python3
"""
Refined builder for Mount Ebott Survey Part VII.
Appends/updates mount_ebott_survey_part_7 in Reputation-Matrix2/data/events.json.

Fixes:
  1. FORMATTING FIX: Strips raw HTML <div class="wnote"> from section overviews so mdToHtml doesn't create invalid <p><div> DOM structures that cause side-by-side grid bugs.
  2. WALUIGI NOTES: Puts formal notes into the native `waluigi_note` field, which index.html renders cleanly as <div class="wnote"><b>Waluigi's Note:</b> ...</div>.
  3. WALUIGI ASIDES: Keeps inline *WAH! ...* asides inside overview as clean markdown paragraphs.
"""

import json
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
EVENTS_PATH = os.path.join(ROOT, 'Reputation-Matrix2', 'data', 'events.json')
CHARS_PATH = os.path.join(ROOT, 'Reputation-Matrix2', 'data', 'characters.json')

custom_css = (
    ".wiki-lead{background:linear-gradient(135deg,rgba(138,75,255,.16),rgba(30,20,50,.2),rgba(212,168,83,.1));padding:1.5rem;border-left:6px solid #8a4bff;border-radius:1rem;margin-bottom:20px}"
    ".prose blockquote{background:linear-gradient(135deg,rgba(138,75,255,.12),rgba(20,20,30,.15)),var(--bg2);border-left:4px solid #8a4bff;border-radius:0 10px 10px 0;padding:14px 20px;margin:18px 0;font-size:14.5px;line-height:1.8;color:var(--text)}"
    ".prose blockquote strong{color:#d4a853;letter-spacing:.03em}"
    ".prose blockquote em{color:#c9a6ff;font-style:italic}"
    ".prose h2{color:#d4a853;border-bottom:2px solid rgba(212,168,83,.3);padding-bottom:6px;font-family:var(--font-title,serif)}"
    ".wnote{background:linear-gradient(135deg,rgba(138,75,255,.14),rgba(40,20,60,.1)),var(--bg2);border-left:4px solid #8a4bff;padding:14px 18px;margin:20px 0;border-radius:0 8px 8px 0;font-size:13.5px;line-height:1.65}"
    ".wnote b{color:#d4a853;font-size:14px}"
)

sections = [
    {
        "name": "I. The Immediate Aftermath — How to Kill a Flower",
        "icon": "🗡️",
        "overview": (
            "The white dust from Papyrus's body hung suspended in the calm air of the false meadow for a single heartbeat before dispersing into the grass. "
            "His dark coat lay flat on the multi-colored tile grid. The blue gravity cage had shattered into glowing shards that faded into nothingness. "
            "Sans stood motionless in the center of the field, his hands half-raised, his eye sockets pitch black and completely devoid of white lights.\n\n"
            "The Agent turned his gaze toward Dracule Mihawk, his boots stepping over a cold brass tile. He gave a firm, singular nod.\n\n"
            "**\"We need to kill Flowey,\"** the Agent said.\n\n"
            "Mihawk did not hesitate. His golden eye locked onto the distant patch of loam where the yellow petals had submerged into the earth. "
            "With a single, fluid motion, the Warlord drew Yoru from his back sheath. The massive black blade caught the artificial sunlight, casting a sharp shadow across the soil.\n\n"
            "**\"Agreed,\"** Mihawk said coldly, taking a measured step forward.\n\n"
            "**\"How do we kill a flower?\"** the Agent asked, adjusting his posture and scanning the perimeter for vine movement.\n\n"
            "Mihawk tilted his head slightly, assessing the target with dispassionate tactical logic.\n\n"
            "**\"Burn it,\"** Mihawk replied plainly, his fingers adjusting on Yoru's hilt. **\"Fire is effective against plants.\"**\n\n"
            "Sans remained motionless beside them, his shoulders hunched under his blue hoodie, his breath coming out slow and shallow as the dust settled on his boots.\n\n"
            "*WAH! Waluigi agrees completely with this tactical assessment! When a garden specimen murders a municipal officer from behind during an emotional admission, you do not prune it! "
            "You do not give it plant food or put it in a decorative ceramic pot! You fetch a torch and incinerate the entire flowerbed until there is nothing left but carbon! WAH.*"
        ),
        "waluigi_note": "Observe that Dracule Mihawk does not attempt to categorize Flowey as a duelist or a combatant of honor. He categorizes him as agricultural pestilence. In military operations, treating an opportunistic wildcard as a formal opponent is a fatal error. Mihawk's immediate recommendation of fire reflects proper elemental counter-measures against root-based entities. WAH."
    },
    {
        "name": "II. The Midnight Tea — Sans's Memory of Asgore",
        "icon": "☕",
        "overview": (
            "Before Mihawk could strike his blade into the soil, the air around Sans warped violently. "
            "The fake meadow, the bright sky, and the color-tile grid dissolved for a brief, suspended moment as reality folded inward, drawing Sans into the quiet warmth of a distant memory.\n\n"
            "It was night inside the royal castle at New Home. Outside the leaded glass windows, the Underground was dark and still. "
            "Sans sat at a heavy oak table while King Asgore walked slowly across the stone floor, carrying a steaming clay teapot.\n\n"
            "**\"The tea is ready!\"** Asgore announced pleasantly, pouring a golden liquid into two cups.\n\n"
            "Sans took the cup, blowing softly on the steam before taking a careful sip. **\"Thank you, Asgore. It smells lovely... As good as always.\"**\n\n"
            "Asgore smiled across the table, his large paws wrapped around his teacup. "
            "**\"I really am thankful that you decided to come over, Sans. I wasn't sure I'd ever have outside visitors again, but... It's been too long since I've had company. The castle feels... quieter than it used to. I hope you enjoy the tea, it's an old recipe of mine.\"**\n\n"
            "**\"It's excellent as always,\"** Sans replied, leaning back in his wooden chair. **\"It's been a rough few months lately. I needed an evening like this.\"**\n\n"
            "**\"Ho ho ho! I'm so glad you like it!\"** Asgore chuckled softly.\n\n"
            "Sans smirked, a hint of genuine warmth returning to his eye sockets. **\"You never stop being so positive and kind, do you? You could never serve a bad cup of tea, Asgore. You'd need to lose your hands before that happened.\"**\n\n"
            "Asgore's expression turned earnest as he set his cup down. **\"I would like to catch up on your lives, if you will. Tell me, what do you do for an occupation? I am very curious to know what goes on outside these caverns.\"**\n\n"
            "Sans folded his hands over his stomach. **\"Well, I work as a sentry. It's not a particularly exciting job, but... it keeps me busy. You know the usual. I keep an eye out for humans, patrol the Snowdin woods, and... sleep on the job.\"**\n\n"
            "Asgore paused, his brow furrowing gently. **\"What do you think about the whole catching humans thing?\"**\n\n"
            "Sans exhaled slowly, looking down into his golden tea. **\"Honestly? I don't agree with it. I've never caught a human. Never wanted to.\"**\n\n"
            "Asgore gazed at him with quiet, paternal trust. **\"I understand it's difficult to find the will to do what we must. But from what I can tell, you are an honest young man. I believe when the time comes you will do the right thing. So tell me... what keeps you going?\"**\n\n"
            "Sans tapped his knuckles softly against the clay cup. **\"Honestly? My brother. Papyrus... he keeps me going. I wanna make him proud, you know? He believes in being strong and noble, so I try to match that energy for him. And then there are little things too — like my friends in Snowdin. Grillby's diner...\"**\n\n"
            "**\"There is nothing wrong in finding solace in others,\"** Asgore said softly. **\"I assure you if we had more people like you and your brother we will have a peaceful future someday. Promise me this will you, Sans? Never give up this dream.\"**\n\n"
            "Sans looked past Asgore at the peaceful darkness outside the glass. **\"Yeah... I do. More than anything, I want peace. I want everyone I care about to be happy and safe... A world where everyone can just... live without fighting. Without fear.\"**\n\n"
            "*WAH! The quiet tea-table summit! A depressed goat king and a sentry who refuses to do his job sitting in a castle drinking herbal tea at midnight! "
            "This memory explains everything about Sans! He spent four years sleeping at his guard post in Snowdin not because he was lazy, but because he promised King Asgore he would choose peace over human-hunting! WAH.*"
        ),
        "waluigi_note": "This memory is the exact structural anchor that held Sans together. His refusal to capture humans was not insubordination; it was compliance with a personal oath made to Asgore. When Flowey killed Papyrus, he did not merely murder a brother — he severed the exact reason Sans maintained his peaceful restraint. WAH."
    },
    {
        "name": "III. The Freeze and the Eruption — Sans Executes Flowey",
        "icon": "🔥",
        "overview": (
            "The memory snapped shut like a heavy book. Sans blinked, his eyelights snapping back into the present meadow where Flowey's golden head had just re-emerged from the dirt to mock them.\n\n"
            "Time froze. A sharp, loud *CLICK* echoed through the clearing as the entire world shifted into monochrome grayscale. "
            "Sans vanished from where he stood and materialized instantaneously directly beside Flowey. His eye sockets were pitch black.\n\n"
            "**\"Look at me,\"** Sans whispered. His voice was lower than death itself. **\"You hurt Papyrus.\"**\n\n"
            "Flowey's petals trembled in sudden, frantic panic. **\"YOU DAMN BRAT!\"** the flower shrieks, whipping his vines forward. **\"YOU THINK A BATTLE CAN SAVE YOU!\"**\n\n"
            "A catastrophic spell erupted from Sans in a blinding burst of violent blue magic. The surge struck Flowey dead-on, scorching his petals and blasting him across the dirt in a shower of sparks.\n\n"
            "Flowey hit the ground hard, but Sans was already standing over him. Sans grabbed Flowey by the central stem and slammed him brutally into the earth, creating a jagged crater in the soil.\n\n"
            "**\"COME ON!\"** Sans roared, his jaw set as brilliant blue fire flared wildly from his left socket. **\"WHERE'S THAT SPIRIT NOW!?!\"** He slammed the flower down again—*BAM!* **\"ANSWER ME! You don't get to hide! Why did you do it?! What was the point of hurting my brother!? ANSWER ME RIGHT NOW!\"**\n\n"
            "He pounded the flower into the dirt three more times until the stem broke and the petals disintegrated into black ash.\n\n"
            "Time snapped back into motion with a loud pop. Color flooded back into the meadow. Sans lowered his shaking hands, staring down at the crushed ash in the crater.\n\n"
            "The Agent stepped forward, staring at the ruined soil. **\"Sans... he's dead. The flower is dead, you killed it.\"**\n\n"
            "Sans exhaled slowly, his eyelights returning as dim white pinpricks. **\"Guess I did,\"** he muttered quietly. **\"He deserved it.\"**\n\n"
            "*WAH! Time-stop beatdowns! Never make a short skeleton angry in front of a flower! "
            "Sans went from zero magical reserve to a localized apocalyptic execution in three-tenths of a second! Flowey learned the hard way that 'where is that spirit now' is not a rhetorical question! WAH.*"
        ),
        "waluigi_note": "Notice that Sans did not use a complex puzzle, a bone storm, or a platform trap. He used absolute proximity and raw kinetic magic. When the limits of restraint are removed, Sans's combat efficiency is staggering. Flowey was given no opportunity to burrow, reset, or summon vines. WAH."
    },
    {
        "name": "IV. The Survey Machine Record — Ecological Miscalibration",
        "icon": "📡",
        "overview": (
            "With Flowey eliminated, the clearing grew silent. The Agent walked over to the Iron Legion survey machine resting on the grass, its heavy brass housing humming softly as data tray light flickered.\n\n"
            "The monitor screen displayed scrolling lines of text. The Agent stared at the monitor in utter disbelief—the machine had recorded the entire battle in meticulous detail. "
            "Timestamped movement vectors, magical energy spikes, the gravity cage collapse, and even Sans's final time-stop execution were fully logged alongside soil acidity and humidity readings.\n\n"
            "Mihawk stepped alongside him, crossing his arms as he examined the glowing display. **\"Hm. That thing picked up everything.\"**\n\n"
            "**\"It's meant for ecological surveys,\"** the Agent said, frowning at the screen. **\"How did it record combat data?\"**\n\n"
            "Mihawk leaned in closer, his golden eye taking in the scrolling columns. **\"This data is messy. Half ecological readings, half combat logs. Soil samples and energy spikes... "
            "The device has been broken, repaired, and re-patched too many times to function properly. It picked up the magic by accident.\"**\n\n"
            "The Agent nodded, reaching down to unbuckle the heavy leather harness. **\"Whatever. I'm re-attaching the survey device and grabbing the straps to make a makeshift backpack. It's heavy, but we won't lose it this way — not again.\"**\n\n"
            "He hoisted the bulky 80-pound brass unit onto his back, pulling the leather straps tight across his chest plate. He took two steps before the leather groaned under the strain. "
            "The makeshift harness snapped with a loud crack, and the survey device slid violently down his legs, clunking heavily against the dirt with a thud that shook the grass.\n\n"
            "The Agent stared down at the dropped machine, rubbing his shoulder. **\"It will not hold.\"**\n\n"
            "Mihawk exhaled dryly through his nose. **\"Told you.\"**\n\n"
            "*WAH! Repurposed technology! An ecological survey device that accidentally logged a murder and a time-stop assault because its sensors could not tell the difference between a root sample and a Gaster Blaster! "
            "Iron Legion engineering at its finest! And strap failure! Waluigi has told Wario a hundred times that you cannot wear a brass boiler as a rucksack! WAH.*"
        ),
        "waluigi_note": "The Agent's attempt to convert a stationary survey apparatus into a backpack using worn leather straps is a classic field error. Scientific instruments weighing eighty pounds require standardized transport carts or anti-gravity cradles. Attempting to wear them as luggage results in broken straps and bruised ankles. WAH."
    },
    {
        "name": "V. Egress Doctrine — The Law of the Barrier",
        "icon": "📜",
        "overview": (
            "Leaving the dropped machine on the grass for a moment, the Agent looked toward Sans. **\"We just have to get out of here. Asgore and the Queen know how to, right?\"**\n\n"
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
        "waluigi_note": "Notice the asymmetrical nature of the magical barrier. Individual egress is permitted under specific energy thresholds, but re-entry is blocked. This design prevents surface forces from launching counter-invasions while forcing exiting individuals into permanent exile. WAH."
    },
    {
        "name": "VI. The Cave Loop — Teleportation Under Whispers",
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
        "waluigi_note": "The Underground's geography operates on closed topology. Major hubs (Snowdin, Hotland, New Home) connect via compressed spatial corridors. Sans's ability to navigate these shortcuts allows the team to bypass days of transit in twenty minutes. WAH."
    },
    {
        "name": "VII. The Gate Guard Bluff — The Commissar Vexis Documents",
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
            "He reached into his inner coat pocket and produced an official folder stamped with gold foil and sealed with heavy red wax, handing it to the lead guard.\n\n"
            "The guards crowded around, inspecting the documents carefully. **\"Hmph. These look legitimate enough...\"** the lead guard admitted begrudgingly, scrutinizing the official seal and Commissar Vexis's signature. "
            "**\"Though we were never issued orders regarding a commissar... Very well. You may enter... for now.\"**\n\n"
            "As they passed through the gates, Sans mumbled quietly with a smirk: **\"Guess those documents actually worked after all. We got lucky there. Good on you for getting all that military jargon down.\"**\n\n"
            "**\"Guess they're slow on the uptake, the guards,\"** the Agent chuckled.\n\n"
            "*WAH! Bureaucratic intimidation! Nothing confuses a checkpoint guard faster than a man in a green coat reading out sixteen syllables of fake classification numbers! "
            "Waluigi uses this exact trick when entering VIP lounges at kart races! WAH.*"
        ),
        "waluigi_note": "Notice how easily the guards yielded when presented with wax-sealed paperwork signed by Commissar Vexis. Security personnel in formal hierarchies are trained to fear administrative reprimand more than unauthorized entry. A gold foil seal is effectively an invisible key. WAH."
    },
    {
        "name": "VIII. The Throne Room Audience — King Asgore and Queen Toriel",
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
        "waluigi_note": "The audience in the throne room transitions the expedition from tactical survival to high diplomacy. Asgore and Toriel receive the group not as invaders, but as petitioning travelers seeking egress. WAH."
    },
    {
        "name": "IX. Barrier Logistics — Localized Transport vs Mass Destruction",
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
        "waluigi_note": "Asgore's refusal to destroy the Barrier outright is rooted in ecological physics. The Barrier regulates the Underground's internal magic balance. A localized transport bypasses the barrier without destroying its structural load. WAH."
    },
    {
        "name": "X. The Oath of Secrecy — The Final Terms",
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
        "waluigi_note": "The Oath of Secrecy serves as the final diplomatic barrier. It ensures that while individuals may exit, the Underground remains protected by mythological obscurity. WAH."
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
    "Part VII completes the Mount Ebott Survey Expedition. Picking up immediately after Papyrus's dusting in the false meadow, Sans experiences a fleeting memory of drinking tea with King Asgore "
    "before snapping back to freeze time and brutally execute Flowey in a burst of violent blue magic. The Agent recovers the survey machine—discovering it recorded the entire fight—and attempts to wear it "
    "as a backpack before the straps fail. Guided by Sans through the Underground's cave loop, the group reaches New Home Castle, where the Agent uses official Iron Legion documents signed by Commissar Vexis "
    "to bluff past the royal guards. In the throne room, King Asgore and Queen Toriel explain the Barrier's delicate balance and agree to grant localized transport to the surface under a binding Oath of Secrecy."
)

aftermath_text = (
    "## Aftermath & Operational Standing\n\n"
    "**1. Operational Result:** The Mount Ebott Survey Expedition successfully reached the political center of the Underground at New Home Castle. "
    "The primary objective—locating an egress route to the surface—was negotiated directly with King Asgore and Queen Toriel.\n\n"
    "**2. Casualty & Personnel Status:** Papyrus was assassinated in Part VI. Flowey was subsequently executed by Sans in a time-stop magic eruption. "
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
    "**3. The Execution of Flowey — Functional Retribution.** Flowey's elimination by Sans in a localized time-stop was necessary for operational security. "
    "Allowing a hostile entity with cross-dimensional boundary data to remain mobile would have compromised both the Underground and surface operations. WAH.\n\n"
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
    "customCss": custom_css,
    "summary": summary_text,
    "description": description_lead,
    "sections": sections,
    "participants": ["dracule_mihawk", "sans", "gamma_agent", "flowey", "papyrus", "asgore", "toriel"],
    "outcome": "Flowey executed; Group reaches New Home Castle; Localized transport granted by Asgore and Toriel under Oath of Secrecy.",
    "notableFeatures": [
        "No duplicate events — picks up immediately after Papyrus's dusting in Part VI",
        "Sans's flashback memory of drinking tea with King Asgore",
        "Sans's time-stop execution of Flowey",
        "Recovery of the corrupted ecological survey machine and failed backpack attempt",
        "Sans's explanation of the Barrier, respect for Toriel, and Human-Monster war",
        "The Agent's military bluff using Commissar Vexis credentials",
        "Throne room negotiation with King Asgore and Queen Toriel",
        "The localized transport agreement and Oath of Secrecy",
        "Clean single-column layout formatting across all sections"
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

    existing_idx = next((i for i, e in enumerate(events) if e.get('id') == 'mount_ebott_survey_part_7'), None)
    if existing_idx is not None:
        events[existing_idx] = part_7_event
        print("Updated existing mount_ebott_survey_part_7 in events.json.")
    else:
        events.append(part_7_event)
        print("Appended mount_ebott_survey_part_7 to events.json.")

    with open(EVENTS_PATH, 'w', encoding='utf-8') as f:
        json.dump(events, f, indent=2, ensure_ascii=False)

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
