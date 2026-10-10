#!/usr/bin/env python3
import json, os, re, sys

ROOT = "/home/user/bik"
DATA = os.path.join(ROOT, "Reputation-Matrix2", "data")

COMMENTARY_ID = "feyward_the_soul_ring_and_the_twenty_one_day_cut_commentary"

sections = [
    {
        "id": "overgrowth_and_axe_daydream",
        "icon": "🌿",
        "heading": "The Daydream of an Axe and the Unlocked Cuffs",
        "body": (
            "WAH! Look at where we open this filing! Toad Lee is tied to a chair in the middle of a bedroom being slowly swallowed "
            "by aggressive root systems, and his very first conscious reaction to being captured by foreign shock troops is to tell me "
            "about a pastoral family picnic! Listen to the transcript, word for word: \"Where am I, Waluigi? I was in a plain field "
            "with bright green grass, clear blue skies, there was a hill. I saw what seems to be my dad. We were play fighting. "
            "I was fighting with the axe I have, he was fighting with his? I don't know, I have some snippets of my father... "
            "ehh don't know.\" I am sitting right across from him in an armchair, wearing heavy steel handcuffs that I had already "
            "slipped five minutes ago. Waluigi does not stay locked in standard IRON restraints! Waluigi slipped them immediately and "
            "just sat there wearing them anyway because an uncuffed prisoner gets watched twice as hard by suspicious guards! "
            "I asked him if he wanted to go back to his daydream because, frankly, standing inside an overgrown bedroom with guards holding "
            "loaded crossbows on us is expensive. When Toad Lee asked me to remind him what happened, Waluigi gave him the clean tactical summary: "
            "Hjumpik traded us for an audience with a plant monster, either out of sheer desperation or raw SELFISHNESS. And the IRON LEGION guards "
            "standing by the door actually chimed in to validate my arithmetic! The guards say: \"He got the story mostly right.\" "
            "When the enemy's own sentries agree with Waluigi's breakdown of party loyalty, that is not cynicism—that is ACCURATE military accounting! "
            "Toad Lee apologized to our captors with a humble \"Sorry my sirs, didn't mean to\" and announced: \"While I wait for rescue, "
            "might as well look around.\" Waluigi admires the composure, even if the family AXE psychology requires its own separate case file. "
            "You wake up tied up by the IRON LEGION, and you immediately start browsing the furniture like it is a polite Sunday estate sale! "
            "Waluigi has seen many hostages in his career, but none who treated enemy captivity like a polite hotel lobby! "
            "Waluigi made a mental note to inspect the wardrobe hinges while our guards were busy chuckling at Toad Lee's manners. "
            "If an imperial garrison offers you hospitality while holding you hostage, Waluigi takes the armchairs and plans the exit! WAH!"
        )
    },
    {
        "id": "elven_books_and_colour_division",
        "icon": "📜",
        "heading": "Elven Desk Reference and Special Forces",
        "body": (
            "WAH! Toad Lee walked over to the fine writing desk and discovered a stack of journals, logbooks, and references, every single one of them "
            "penned in classical elven script. He turned to me and asked for paper and pen. Waluigi always carries a pristine field writing kit, "
            "so I handed it over without hesitation. Then Toad Lee turned to the two armored sentries and politely asked if they spoke elvish. "
            "The guards were completely baffled: \"What? We don't know that.\" Toad Lee pressed them, asking: \"What do you mean you don't know this? "
            "Weren't you guys denizens of the Feywild?\" And that is when they dropped the curtain: \"Huh? We're the Colour Division of the Iron Legion.\" "
            "They are not fey nobles! They are an external imperial expeditionary unit in full MAGITEK uniform! And their operational plan is "
            "delightfully blunt: \"We were sent here to capture Hjumpik. We needed you guys as leverage, and our plan is working. "
            "Once Aurelia beats up Hjumpik, we grab him and drag him out.\" Waluigi appreciates operational transparency! They did not invent "
            "a mystical excuse; they took hostages because a contractor broke his delivery schedule, and they are waiting for the homeowner to "
            "tenderize our dwarf so they can drag him home without taking structural damage. LEVERAGE. That is the word they used downstairs, "
            "and that is the only word that matters on an IRON LEGION balance sheet. And when Toad Lee asked if they were confident, they replied: "
            "\"Yes we are, as we are of Mr. Miser.\" Waluigi noted that line immediately in his private papers! They consider Archie Miser an inevitable "
            "target, but Hjumpik was the primary objective of the morning. Waluigi knew right then that this entire raid was about overdue DEBT "
            "and broken contracts, not fairy politics. When an empire shows up with handcuffs, they never come for the scenery! "
            "Waluigi adjusted his purple sleeves and prepared to document every single contract violation they had committed since crossing the border. "
            "A military force that mistakes an elven research suite for a standard holding cell is doomed to get surprised by the local ecology! WAH!"
        )
    },
    {
        "id": "cornburary_and_shadow_writers",
        "icon": "🗃️",
        "heading": "The Quartermaster and the Shadow Writers",
        "body": (
            "WAH! Enter Quartermaster Cornburary, stepping into the quarters with a greasy smirk and zero visible combat equipment. "
            "Toad Lee eyed him up and down immediately: \"Cornburary of the Legion... you don't have a weapon on you. Are you a combatant here "
            "like your guards?\" Cornburary dared him to strike: \"Is that a threat? Go ahead, hit me, see what happens.\" But when Toad Lee "
            "pressed for his actual function, Cornburary revealed the ultimate institutional insult. He called himself a journalist, then corrected "
            "himself: \"A bookkeeper, an archivist even. A better one than your friend over there.\" He insulted Waluigi! To my face! In my own "
            "presence! Waluigi shouted: \"WAH! I'll take you out!\" And the man had the sheer audacity to boast: \"I don't need to. I have a bunch "
            "of shadow writers that will do it for me.\" Shadow writers! Bureaucratic ghostwriters! Waluigi drew the Phase Spider gut tennis racket "
            "right there on the rug. I was prepared to volley a kinetic purple force orb straight through his ledger, but Toad Lee swiped at my racket "
            "and shouted: \"Friendly fire! You're threatening my livelihood!\" Toad Lee pleaded for restraint, pointing out that we were both "
            "banged up and asking: \"Who will archive... uhhh, me when I'm gone or something?\" Waluigi looked at him and said what had to be said: "
            "Waluigi will outlast everyone in this room! But Waluigi lowered the racket, because an archivist with real pride does not waste gut strings "
            "on a clerk who outsources his prose to SHADOW WRITERS. When Toad Lee asked if they were hunting Archie as well, they confirmed Archie was secondary. "
            "The entire IRON LEGION apparatus was pointed at our dwarf, and Cornburary was just the pencil-pusher sent to tally the bill! "
            "Waluigi remembers every single threat to his professional standing, and Cornburary just earned top billing in the docket! "
            "A man who hides behind ghostwriters is a man who cannot stand on his own sentences! "
            "Waluigi will personally challenge any shadow writer he employs to a public deposition in the capital! WAH!"
        )
    },
    {
        "id": "ravishing_tonight_and_lost_pants",
        "icon": "💍",
        "heading": "Ravishing Tonight and the Soul Ring Proposal",
        "body": (
            "WAH! Meanwhile, upstairs in the false sanctuary, Hjumpik was executing the single most unhinged diplomatic maneuver in Midlands history. "
            "Lady Aurelia touched a satyr and reduced him to smoking ash right before his eyes. Hjumpik called it out: \"It's a sham.\" "
            "And when she warned that this was her manor, Hjumpik fired back: \"I'm Hjumpik, so ho ho ho, I'm not afraid, and this isn't my manor.\" "
            "She warned that with one touch he would be gone too. Did Hjumpik run? No! He dropped down onto one knee, held up the glowing soul ring, "
            "and delivered this legendary line: \"You're right, I am proposing to you. Put on this ring, ignore everything I said before. "
            "You look ravishing tonight.\" Ravishing! She had vines crawling out of her sockets and ash on her dress! Aurelia smiled and produced "
            "a spiked ring designed to slowly devour his lifeforce: \"In fey culture males put on the ring. We will be bound once you put it in. "
            "It will slowly suck your lifeforce.\" Hjumpik agreed that it was terrifying, asked if she would release the manor, and then jammed "
            "our soul ring straight onto her finger instead! The binding phrase echoed through the stones: \"Yaoui Dhayemmn Dhwayelf!\" "
            "The enchantment hit her like a siege engine. Her strength collapsed, but as she went down, her clawed fingers snagged Hjumpik's belt—and "
            "his pants fell straight to his ankles! Right at that precise second, the Colour Division guards burst through the doors: "
            "\"WHAT THE? WITH THE LADY? WE CAUGHT YOU WITH YOUR PANTS DOWN!\" The guards immediately promised it would be included in the official "
            "after-action report. And when Hjumpik dragged her toward the bathroom, the guards yelled: \"NOW YOU'RE GOING TO THE BATHROOM WITH HER? "
            "GET BACK HERE!\" Waluigi has filed hundreds of tactical engagements; this is the first one where the victory condition required an immediate belt adjustment! "
            "Hjumpik traded trousers for planar liberation, and Waluigi will never let him forget it! "
            "Waluigi will carve that quotation into the wall of the guild hall in gold leaf! "
            "When the history of the Midlands is written, the battle of the sanctuary will be remembered as the night a dwarf proposed with a soul ring and lost his drawers to a countess! WAH!"
        )
    },
    {
        "id": "men_in_silver_and_syringe",
        "icon": "🧪",
        "heading": "The Men in Silver and the Fungal Manual",
        "body": (
            "WAH! Downstairs, Toad Lee was flipping through the desk's elven volumes and stumbled upon the mechanics of Feywild climate control: "
            "\"Mutsdoppms apnd yoput hopw mutsdoppms capn apffetct det fetywapdd\" the book is said. That is: how emotions react with environmental "
            "fungus to warp the plane. Before he could finish reading, the door opened for the silver-plated arrival of the Cordon Combat Chirurgeon. "
            "\"We are the CCC. We have to come eliminate the Feywild. With this solution we can simply inject the plants killing them.\" "
            "Toad Lee challenged their rationale immediately. When the CCC called the Feywild 'unpure,' Toad Lee demanded: \"Define unpure.\" "
            "The answer from the silver mask was the purest piece of imperial arrogance I have ever heard: \"Because we can.\" Toad Lee whispered to Waluigi "
            "to slip out the window and scout for surveillance probes. Waluigi gave him a knowing smile and slipped out into the vines, leaving Toad Lee "
            "to dismantle their ideology. When the CCC accidentally began admitting that the material plane was corrupted, Quartermaster Cornburary "
            "panicked: \"Shut up, you! Too much information!\" They started screaming at each other like angry scullions. Toad Lee pressed them on their "
            "heraldry and mentioned our yellow-clad allies feeding us coordinates. Waluigi was already outside enjoying the cool air, but the rhetorical "
            "fire inside that room was reaching critical mass. Toad Lee cornered their quartermaster with questions about their emblem, and Cornburary "
            "snarled: \"You trying to get information from me? You won't, not even from that birdbrain over there.\" Waluigi takes offense at 'birdbrain,' "
            "even in absentia! But Toad Lee stood his ground like a veteran! The CCC brought chemical warfare to a fairy garden, and Toad Lee turned "
            "their own interrogation into a public exposure! Waluigi watched through the foliage as their pristine discipline melted into petty squabbling! "
            "When two invading officers start shouting over classified operational details in front of their own prisoners, Waluigi knows the mission is already falling apart! WAH!"
        )
    },
    {
        "id": "thunder_hail_and_wildfire",
        "icon": "🔥",
        "heading": "Thunder, Hail, and the Emotional Wildfire",
        "body": (
            "WAH! Here is where Toad Lee proved that a furious Toad is more dangerous than an artillery battery. His temper snapped as he listened "
            "to these bureaucrats debate conquering living realms. And because the Feywild translates intense feeling directly into atmospheric "
            "phenomena, the room violently ignited! Thunder rattled the glass, hail smashed against the roof, and suddenly roots across the floor "
            "erupted into roaring sheets of flame—FIRE EVERYWHERE! Toad Lee shouted in amazement: \"What the... woah, woah!\" feeling the heat, "
            "and then exclaimed: \"Huh, so it actually worked, holy heck!\" He scooped up the elven books off the burning desk, saving the salvageable "
            "volumes while leaving others that were not entirely burnt. He dashed to the open window, noticed Waluigi had already departed, whispered "
            "\"What the dang,\" and delivered a magnificent speech: \"Listen man, the Feywild is not the type of place you want to set up shop "
            "outside of your imperialistic tendencies. Leave the Feywild alone! It has people living inside of it, they won't be happy when they find "
            "denizens invading on their own. Be warned!\" And then he dived headfirst out the window into the burning shrubbery! That is how you exit "
            "an interrogation. No surrender, no written confessions—just an EMOTIONAL WILDFIRE, stolen elven research, and a clean swan dive into the fog. "
            "Waluigi watched from behind a hedge with immense appreciation. The IRON LEGION came to collect a dwarf, and instead they got their eyebrows "
            "singed by a botanical weather event fueled entirely by righteous indignation! When Toad Lee gets mad, the entire climate takes notice! "
            "Waluigi has witnessed many arcane spells, but weaponized moral outrage will always be my favourite form of area-of-effect damage! "
            "Never underestimate a fungus with an axe and an ideology! WAH!"
        )
    },
    {
        "id": "waiter_guy_and_sunflower_division",
        "icon": "🕳️",
        "heading": "The Ceiling Toss and Brad the Waiter",
        "body": (
            "WAH! While Toad Lee was burning down the west wing, Hjumpik was in the sanctuary bathroom conducting what can only be described "
            "as dwarven gymnastics. He tossed the unconscious Lady Aurelia through a hole in the ceiling, caught her on the rebound, thought "
            "the words \"Princess carrying,\" tossed her again, and finally hammered her up to the second floor. Then he leaned over her face, "
            "and a white worm slithered right out of her eye socket! Horrifying! He cracked open a side door to escape, and who should be standing "
            "there but Brad the waiter! Hjumpik squinted: \"Are you the waiter guy?\" Brad has survived treants, poison soup, and the collapse "
            "of the house, and he immediately delivered the most comprehensive operational brief of the night. When Hjumpik asked why he sounded "
            "so down, Brad sighed: \"This place is too chaotic. We have to stabilize it somehow.\" Then Brad revealed the whole enemy hierarchy: "
            "\"Their commander, P.S., I think her name is, I don't know what it stands for. I think she's working with other legionnaires from the "
            "outside world. She is leading the Sunflower Division.\" The Sunflower Division! When Toad Lee's wildfire burst through the floorboards, "
            "Hjumpik shouted for water, scooped up Brad, charged through the blaze, used dwarven healing on his burns, and grunted: \"Whatever, I'm out.\" "
            "Waluigi salutes Brad. A waiter who gathers military intelligence during a planar disaster is a professional of the highest order. "
            "While the nobility of the manor was getting possessed and roasted, Brad was quietly tracking foreign division names and exit routes. "
            "Waluigi would hire Brad for Disaster Inc. tomorrow if Wario would authorize the payroll! A waiter with that level of tactical awareness "
            "deserves a massive promotion and hazard pay! Waluigi will personally recommend him for campaign honors once we clear this ruin! "
            "In a mansion where nobles lose their minds, the serving staff keeps their heads and checks the fire exits! WAH!"
        )
    },
    {
        "id": "mage_of_ice_and_secret",
        "icon": "❄️",
        "heading": "The Mage of Ice Extinguishes the Flame",
        "body": (
            "WAH! Outside on the soggy lawn, Toad Lee was wandering through the brambles yelling my name at the top of his lungs: \"WALUIGI!\" "
            "Waluigi walked up behind him and tapped him firmly on the shoulder. When he asked why I ran off, I pointed at the burning manor and told him "
            "I wasn't sure who those people were. When he asked about the CCC probe, I explained that I waved it off and let it fly away. "
            "Then Toad Lee looked me in the eye and confessed that he caused the wildfire, but added that he refused to tell me how he did it! "
            "\"Don't trust ME? How can I archive the answer to my million of fans?\" Waluigi demanded. He told me: \"Because knowing you, you will "
            "unleash chaos for the sake of it or for your interest.\" Hurtful! Completely accurate, but hurtful! Then we approached the threshold "
            "and found the corridor blocked by raging fire. Toad Lee asked how to extinguish it, and Waluigi delivered the immortal line: "
            "\"They don't call me writer or ice.\" Toad Lee replied: \"No worries, mage of ice, work your magic.\" Waluigi took one magnificent step "
            "into the blazing doorway, snapped the air, and every single tongue of fire died instantly! Toad Lee gasped: \"Oh, you really did "
            "work your magic!\" And Waluigi blinked in mild surprise before recovering his swagger: \"Huh, I did... yeah, I did!\" Waluigi graciously "
            "accepted the applause. A MAGE OF ICE never reveals his atmospheric secrets, especially when he isn't entirely sure how the room stopped burning! "
            "You call for ice, Waluigi delivers the freeze, and Disaster Inc. walks through the ashes without breaking a sweat! "
            "Waluigi will keep the title of Mage of Ice forever, and nobody at the table can contest the filing! "
            "A title won by walking through extinguished smoke is a title won for life! WAH!"
        )
    },
    {
        "id": "exorcised_demon_and_rotted_drop",
        "icon": "🤝",
        "heading": "Reunion and the Two-Story Drop",
        "body": (
            "WAH! We reunited with Hjumpik at the landing. Toad Lee didn't waste a single second on pleasantries: \"Glad to see you back, "
            "we're reunited. Did you sell us out to the Legion for Aurelia?\" Waluigi stayed completely quiet, letting the dwarf sweat under "
            "the cross-examination. Hjumpik stammered about the Legion trying to capture him, noticed our soot-stained faces, and explained "
            "the condition of the limp noblewoman in his arms: \"Took the demon out of her. She tried to fight me, I got the demon out... yeah. "
            "Yeah, I knocked—I didn't, I had to exorcise her.\" Exorcism with a warhammer! Standard dwarven medical doctrine! Brad cut off the debate "
            "before it became violent: \"Let's get a move on, you can talk while we move.\" He led us into the servant's common room. The floor was "
            "completely rotted away, with gaps opening onto a steep drop down to the library gangways a floor below, or straight to the ground floor "
            "for the unlucky. Walking across ancient joists while carrying an exorcised countess is what Disaster Inc. calls standard evening travel. "
            "Brad stepped onto a sound beam, reached up to an ancient bookshelf, and tilted a single volume. The entire shelf mechanism slid upward, "
            "and we stepped through into the secret dark in complete silence. Waluigi watched the floorboards creak beneath our boots and wondered how "
            "many generations of servants had used this secret flue to dodge the aristocracy! When an entire castle has floorboards rotting into a "
            "two-story void, finding a sliding bookshelf is the only piece of good luck we had seen all morning! "
            "Waluigi kept one hand on the wall and one hand on his notes, because falling through a floorboard ruins both your health and your penmanship! "
            "Disaster Inc. navigates collapsing estates with style or not at all! WAH!"
        )
    },
    {
        "id": "goblin_cards_and_twenty_one_days",
        "icon": "🃏",
        "heading": "The Goblin Card Room and the 21-Day Clock",
        "body": (
            "WAH! The bookcase opened into a room that looked like a library had detonated inside a compost bin. Giant mushrooms sprouted directly "
            "from piles of discarded books, and in the center of the mess sat a round table surrounded by surly goblins screaming over a filthy "
            "deck of cards. The wagers were magnificent: half-empty bottles of floor cleaner, rusty scrub brushes, and greasy waistcoats! "
            "This was the very table where Hjumpik played cards during his first arrival. Waluigi asked: \"Are you sure this is a good idea?\" "
            "When Toad Lee asked what the plan was for Lady Aurelia, Brad stated that he would handle it alone. Hjumpik scoffed that a push of wind "
            "would knock the waiter over, but Brad held firm. Brad reminded us: \"The three beasts of the manor still live... the Bramblyfly, "
            "the Revel... it was a complete failure, wasn't it?\" And then Brad looked Hjumpik in the eye and delivered the hardest truth of the war: "
            "\"We won, but not the war.\" And then Brad leaned forward and dropped the heaviest hammer of the night: \"I uhh eavesdropped earlier, "
            "you know that? They said they're cutting the Feywild in a few days right, or something? 21 days is that it... the end of the world.\" "
            "Twenty-one days! A hard planar deadline! The IRON LEGION isn't just collecting debt; they are preparing a planar guillotine! "
            "Hjumpik went silent: \"Oh... I see.\" And Waluigi closed his notebook, because the clock on this entire dimension is officially running. "
            "Twenty-one days until the cut. Disaster Inc. has survived dragons, bank robberies, and haunted manors, but a three-week countdown "
            "to planar obliteration means every single minute from here on is going to cost double! The curtain is coming down, and Waluigi has "
            "twenty-one days to get everyone out alive! Waluigi will make sure every second of those three weeks is logged in full ink! "
            "When an entire plane gets an expiration date, you do not argue with the calendar—you pack your gear and write fast! WAH!"
        )
    }
]

with open(os.path.join(DATA, "commentaries.json"), "r", encoding="utf-8") as f:
    comm_data = json.load(f)

for c in comm_data.get("commentaries", []):
    if c.get("id") == COMMENTARY_ID:
        c["title"] = "The Soul-Ring, the Feywild Wildfire, and the Twenty-One Day Cut: Waluigi's Cut"
        c["subtitle"] = "the waking Toad, Cornburary's shadow writers, the proposal with pants down, and twenty-one days on the clock"
        c["sections"] = sections
        c["relatedArticles"] = [
            "feyward_the_soul_ring_and_the_twenty_one_day_cut",
            "toad_lee",
            "hjumpik",
            "waluigi",
            "lady_aurelian",
            "quartermaster_cornburary",
            "brad_the_waiter",
            "iron_legion",
            "color_division"
        ]

with open(os.path.join(DATA, "commentaries.json"), "w", encoding="utf-8") as f:
    json.dump(comm_data, f, indent=2, ensure_ascii=False)

print("commentaries.json updated.")
