#!/usr/bin/env python3
import json, os, re, sys, difflib

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "Reputation-Matrix2", "data")

def build_commentary():
    sections = [
        {
            "id": "the-lurch",
            "icon": "📽️",
            "heading": "ROLL THE REEL — The Rotors Came Up Through Waluigi's Boots And The Cockpit Had The Wrong Man In It",
            "body": (
                "Roll the reel! Right there — start track one on the soundhead! Waluigi has the projector focused directly on the white "
                "workshop brick, and Waluigi wants every person sitting on these three folding chairs to look at the screen before anyone "
                "asks another foolish question about why our transport helicopter is currently a twisted pile of smoking scrap behind the "
                "clinic! Look at the timestamp! Look at the counter on the dial! Two weeks of quiet at the outpost, one signed agreement on "
                "the mahogany desk, and thirty seconds later Waluigi is airborne in a five-ton twin-turbine iron bird with the side cargo "
                "hatch completely unlatched and a freezing mountain gale whistling through Waluigi's mustache! "
                "\n\n"
                "Look at the cockpit camera mounted behind the cargo bench! Waluigi is sitting there, perfectly respectable, minding Waluigi's "
                "own business, holding a brand-new leather notebook with both hands like a true scholar of the realm! And then — BAM! Watch "
                "the whole frame shudder! The aircraft drops thirty feet into an empty air pocket in half a heartbeat! Waluigi hits the iron "
                "bulkhead so hard Waluigi's molars click together! Hear that on the cabin microphone? That is Waluigi screaming at the absolute "
                "top of Waluigi's lungs: *\"WAH! What are you doing?\"* Waluigi scrambles forward on hands and knees across the rattling floor "
                "plates, slams a purple fist against the pilot's high-backed steel seat, and expects to see a licensed professional with "
                "headphones, an altimeter, and a steady pulse! "
                "\n\n"
                "And who is in the chair? Freeze the frame right there! LOOK AT THAT HEAD! That is not an aviator! That is Wario! Wario in a "
                "sweaty purple tunic, wrestling two heavy control levers like he is trying to strangle a grease-bear in an alleyway! And look "
                "at his mouth on the audio playback! He turns his face around, his jaw turns the colour of an overripe eggplant, and he roars "
                "directly into the cockpit microphone: *\"I'M FLYING, YOU STRING BEAN!\"* Then one thick yellow glove clamps onto Waluigi's "
                "shoulder to hold Waluigi upright, and he bellows: *\"DON'T TOUCH THE CONTROLS! THAT PILOT IS ON MY TAB, AND I DON'T PAY FOR "
                "BROKEN EQUIPMENT!\"* "
                "\n\n"
                "Broken equipment! Waluigi wants everyone in this room to appreciate this moment! We are four hundred feet in the air over "
                "black limestone gorges, travelling at ninety miles an hour in freezing darkness, and the man with his heavy workboots on the "
                "directional rudder does not know how to fly a kite, let alone a multi-ton troop transport! He does not have a licence, he "
                "does not have a compass, and his entire aeronautical philosophy is based on shouting at the instrument dials!"
            )
        },
        {
            "id": "the-fired-pilot",
            "icon": "🚪",
            "heading": "'THE PILOT WAS A LIABILITY! HE ASKED FOR A RAISE, SO I FIRED HIM!' — The Pictures In The Manual",
            "body": (
                "Watch the secondary camera mounted inside the cargo hold! Waluigi stumbles backward against the shuddering ammunition crates, "
                "scanning the webbing and the vibrating airframe for anyone who actually attended flight school! Nobody! Waluigi has to yell "
                "at the top of Waluigi's lungs over the deafening whine of the turbine engines: *\"Where did the actual pilot go?\"* And without "
                "even turning his neck away from the windscreen, Wario barks into the rushing wind: *\"THE PILOT WAS A LIABILITY! HE ASKED FOR "
                "A RAISE, SO I FIRED HIM!\"* "
                "\n\n"
                "Look at Waluigi's face on the footage! That is the expression of an educated man discovering his business associate has "
                "terminated the contract of an aeronautical navigator while cruising through the stratosphere! Wario keeps right on roaring: "
                "*\"NOW I'M THE CAPTAIN, AND THE CAPTAIN DOESN'T TAKE ORDERS FROM THE CARGO!\"* Waluigi grabs an overhead cable, swaying wildly "
                "as the deck pitches, and shouts: *\"He was on the plane midair — what-a do you mean?\"* And Wario bellows through the engine "
                "noise: *\"HE'S IN THE REAR HOLD! I PUT HIM THERE FOR ‘CONSULTATION’! HE'LL BE FINE — OR HE'LL GET A VERY LOUD SEAT FOR THE "
                "NEXT TWO HOURS! EITHER WAY, HE'S OFF MY BALANCE SHEET!\"* "
                "\n\n"
                "Off his balance sheet! He latched the only trained aviator on the payroll inside a steel freight locker behind the main fuel cells "
                "because the man requested a standard hazard stipend! And when Waluigi asks how Wario proposes to keep five tons of screaming "
                "iron aloft without stalling, Wario wrenches a heavy hydraulic lever, tilts the cabin until loose cargo slides across the floor, "
                "and roars: *\"I DON'T NEED TO KNOW HOW, I JUST KNOW IT WORKS! I STUDIED THE MANUAL! WELL — I STOLE THE MANUAL AND READ THE "
                "PARTS WITH PICTURES! IT'S ALL ABOUT MOMENTUM, AND I HAVE A LOT OF MOMENTUM!\"* "
                "\n\n"
                "Momentum! He stole the technical maintenance binder and looked only at the coloured illustrations! Waluigi has watched this man "
                "order dinner by pointing at the drawings on the menu, and now he is navigating mountain peaks by the same intellectual method! "
                "Look at Wario on the footage, stabbing a greasy yellow thumb at a diagram of the hydraulic pitch control and insisting it was "
                "an acceleration button! The pilot who had read the words was locked in the dark, and the man who had admired the sketches was holding "
                "the stick while our lives hung by a thread!"
            )
        },
        {
            "id": "the-lime-green-cap",
            "icon": "🎯",
            "heading": "'THAT IS LUIGI IN THE STREET!' — Four Hundred Feet Above A Cobblestone Mistake",
            "body": (
                "Advance the film thirty feet! Waluigi pulls the seat harness across Waluigi's chest until the iron buckle bites through Waluigi's "
                "purple work clothes. Waluigi shouts over the rotor deafening din: *\"You better be sure about this.\"* And what does our grand "
                "captain bark back? *\"BETTER IS FOR PEOPLE WHO DON'T OWN THE MAP! I DON'T GUESS, I CALCULATE! AND MY CALCULATION SAYS WE LAND "
                "ON THAT ROOF OR WE DON'T LAND AT ALL — NO REFUNDS!\"* He slaps an emergency toggle on the dashboard, warning lamps start "
                "strobing across the canopy, and he yells: *\"HOLD YOUR BREATH THEN, STRINGS-BEAN, IT SAVES THE OXYGEN FOR THE PROFIT! WATCH "
                "THE GEARS DROP! WARIO SEES THE LANDING ZONE, AND THE LANDING ZONE OWES ME A FEE!\"* "
                "\n\n"
                "Look through the open cargo hatch! Down between the streetlamps of Star Hill, Waluigi spots a figure standing on the cracked "
                "pavement four hundred feet below. Overalls and a cap, bright lime green in the swirling mist! Not Luigi's green — Waluigi knew "
                "from the air that the shade was sickly and synthetic, like cheap dye brewed in a copper vat — but Waluigi points a long purple "
                "finger out into the freezing gale and screams: *\"THAT IS LUIGI IN THE STREET! HE IS STANDING THERE!\"* And Wario's eyes bulge "
                "against the windscreen like two greasy brass door knobs! *\"THAT'S NOT A LANDING ZONE, THAT'S A PAYDAY! HE LOOKS LIKE HE'S "
                "WAITING FOR SOMETHING — PROBABLY THE BILL I'M ABOUT TO SEND HIM!\"* "
                "\n\n"
                "Then a second figure steps out of the shadow into the lantern glow, carrying a heavy leather courier satchel and wearing thick "
                "workboots, completely unconcerned by the screaming rotors above. Waluigi shouts: *\"WAH! Who is that?\"* And Wario wrenches "
                "the stick hard to the left, sending the airframe into a violent side-slip that pushes Waluigi's stomach up behind Waluigi's teeth! "
                "*\"THAT'S A DISTRACTION! A DEBT COLLECTOR IN DISGUISE! I DON'T CARE WHO HE IS. IF HE'S TALKING TO THE GREEN ONE, HE'S "
                "INTERFERING WITH MY ACQUISITION!\"* Acquisition! The man was preparing to crash a multi-ton helicopter into a municipal thoroughfare, "
                "demolish private storefronts, and invoice the streetlamps for hazard disruption!"
            )
        },
        {
            "id": "the-mustache-rhyme",
            "icon": "📖",
            "heading": "'WHO'S THAT MAN YOU SEE WHO GROOMS HIS 'STACHE SO WELL?' — A Notebook Falls Out The Cargo Hatch",
            "body": (
                "Switch to the telephoto street lens mounted under the fuselage! Right on the cobblestones in front of Dr. Toad's shuttered clinic, "
                "the figure in lime green plants his boots, drops one shoulder, and begins reciting poetry as if the whole foggy square were his "
                "personal theater: *\"Who's that man you see who grooms his 'stache so well? This mystery will be unsolved by those whole souls "
                "fell to his hell.\"* And look at the courier standing across from him! Paulo does not have time for theatrical recitations! Paulo "
                "has a locked leather satchel strapped to his chest, a black-powder pistol in his grip, and zero patience! He draws the hammer "
                "back and snarls: *\"Who's that in the street stumbling like a drunken bum — get fucked, get out of my way. Do you not see the gun.\"* "
                "\n\n"
                "Up in the sky, Wario banks the helicopter sharply, and the rotor wash hits the street like a localized gale! Waluigi pulls "
                "Waluigi's leather-bound notebook from Waluigi's coat, desperately trying to transcribe the dialogue: *\"Look there, talking to "
                "each other! Luigi is there — he is talking!\"* But the green figure does not even flinch at the muzzle. He raises his chin and "
                "chants into the rotor wind: *\"Now behold the twilight of the so-called-a-hero, who somehow found it easy to betray he who he "
                "claimed to love, the one who laid me low from up above.\"* "
                "\n\n"
                "And Paulo's thumb turns white against the iron frame! *\"Cool but who asked — wait, I know the number — zero! I gotta go, you made "
                "me slow, I'm getting sick of ya.\"* Up above, the deck lurches forty-five degrees! Waluigi lunges across the vibrating deck plates, "
                "screaming: *\"They will see us! WAH! Get this damn thing under control!\"* Waluigi's boots slip on a loose bolt! The notebook flies "
                "from Waluigi's fingers, spins through the open hatchway like a fluttering white bird, and drops straight into the dark below! And "
                "what does Wario shout as our massive shadow falls over both men? *\"THEY'RE LOOKING AT US! THAT MEANS THEY CAN SEE THE PROFIT!\"* "
                "Profit! He watched our only intelligence notebook plummet into the street and saw a marketing opportunity!"
            )
        },
        {
            "id": "the-skinny-t-transformation",
            "icon": "👹",
            "heading": "'I DIDN'T KNOW SKINNY T WORE GREEN' — Red Eyes, Elongated Arms, And Black Powder",
            "body": (
                "Slow the playback down right here! This is the exact moment where the green figure stops looking like an eccentric recluse and "
                "turns into an unholy abomination! Look at those shoulders expand! The arms elongate until the tool-like hands scrape the stones, "
                "the eyes ignite into pulsing crimson coals, and the mouth widens past the ears like an open furnace door! Paulo does not step "
                "back an inch. He levels his pistol at the center of the chest, spits a glob of phlegm onto the cracked pavement, and says: "
                "*\"What the fuck is that thing? I don't give a damn what kind of freak show you're running, just get your oversized head out "
                "of my way. You think some spooky transformation makes you special? It just makes you a bigger target. Move. Now.\"* "
                "\n\n"
                "And Mr. L laughs from the sewer grating beneath his boots! Hear that metallic scrape on the audio track? He screams into the night: "
                "*\"Glad you're here. Now it's too late to escape! You will know the fear I felt as I began to melt in the flames of hate!\"* And "
                "Paulo sneers right into the monster's teeth: *\"Jesus Christ, you're the ugliest thing I've ever seen, fuckin' die! I didn't know "
                "skinny T wore green.\"* Skinny T! Waluigi wants that recorded in high fidelity! Paulo identifies him like a shady courier "
                "associate from the docks! "
                "\n\n"
                "Mr. L roars back, his long gray arms stretching into the lamplight: *\"Witness who's behind the mask — desecrated — you should "
                "have been afraid to ask. Now in my desolation you will bask!\"* And Paulo cocks the pistol: *\"Buncha fancy words for making dudes "
                "dead. Nothing I haven't heard before. Eat lead — die, motherfucker!\"* The pistol cracks! White muzzle flash strobes the square! "
                "Paulo drives a steel-toed boot straight into the creature's midsection, rolls behind a masonry pillar with his satchel pinned "
                "to his ribs, and shouts: *\"I don't care how much you ‘melted’ or who you were before. You're just a fucking target blocking my "
                "route. You want to talk about desolation? You're the one standing in front of a gun with nothing but hot air coming out your mouth!\"* "
                "That courier had ice in his veins!"
            )
        },
        {
            "id": "the-crash-and-tax-audit",
            "icon": "💥",
            "heading": "'RUN LIKE YOU'RE ESCAPING A TAX AUDIT!' — The Parapet Shreds The Rotor Blades",
            "body": (
                "Back to the rooftop perspective! Here comes the landing Wario calculated by momentum! Look at the left landing skid catch the "
                "jagged stone edge of the clinic parapet! CRUNCH! The entire five-ton airframe does not land — it gets tripped like a runaway pig! "
                "The main rotor blades strike the chimney masonry, disintegrating in a blinding spray of orange sparks and shredded titanium! "
                "The canopy implodes, metal grinds against brick, and the cabin smashes into the roof with a shockwave that knocks the audio feed "
                "into static! "
                "\n\n"
                "Look at the wreckage when the smoke clears! Steam is hissing from ruptured coolant lines, oil is blazing on the manifold, and "
                "Wario's purple face is mashed against the cracked dashboard! *“...At least we're on the ground,”* Wario wheezes, *“Now I just have "
                "to figure out how much the repairs are going to cost me.”* Waluigi is choking on powdered brick and copper dust: *\"Look over there. "
                "We have to get down.\"* Gunshots are echoing from the cobblestones below! And Wario kicks the mangled door off its hinges, seizes "
                "Waluigi by the collar, and roars: *\"GUNSHOTS? THAT'S JUST THE SOUND OF A BAD INVESTMENT! GET OUT! MOVE YOUR LEGS OR I'M CHARGING "
                "YOU FOR THE MEDICAL BILLS! WE MOVE NOW, OR WE BECOME PART OF THE DEBRIS!\"* "
                "\n\n"
                "Down in the street, Mr. L's elongated claw whips forward, snatches Paulo by the coat, and hurls him bodily through the clinic doors! "
                "Paulo crashes into plaster, rolls across broken timber, and fires straight back: *\"You're going to pay for that! I don't care about "
                "your tantrum or your goddamn ‘desolation,’ I just want to finish this delivery.\"* Two rounds kick up grit at the creature's boots: "
                "*\"Get your filthy claws off me! You think throwing me inside makes it easier for you? I'm still here, you overgrown freak, and "
                "I'm still pissed enough to bury you!\"* And Wario drags Waluigi across the asphalt, howling: *\"STRUGGLING IS A WASTE OF CALORIES! "
                "JUST MOVE! THEY'RE SHOOTING BECAUSE THEY DON'T LIKE THE COMPETITION — NOW GET OUT BEFORE I SELL YOUR BOOTS TO THE SCRAP DEALER! "
                "RUN! RUN LIKE YOU'RE ESCAPING A TAX AUDIT!\"* A tax audit! That is the single word in the language that terrifies Wario into a sprint!"
            )
        },
        {
            "id": "the-mario-reveal",
            "icon": "🔥",
            "heading": "'I DID LOVE YOU, MARIO — BUT WHY DID YOU TWIST THE KNIFE IN THE GASH?' — The Flesh-Paved Road",
            "body": (
                "Turn up the audio on channel two! This is the most staggering passage on the whole spool of tape! Mr. L stands in the center of the "
                "street, his elongated arms dangling past his knees like hanging ropes, chanting a verse that chilled Waluigi to the bone: "
                "*\"Standing at the bridge over the king's inferno, hand in hand, I thought that we'd fight together, and I never lost trust in "
                "my bro until he plunged me in the inferno.\"* *“Save your tragic little soap opera for someone who gives a damn!”* Paulo gasps, "
                "his back pinned flat to the clinic wall, *“I don't give a shit about your brother or your bridge, I just want you out of my way.”* "
                "Paulo fires a wild shot into the ceiling plaster to bring debris down! "
                "\n\n"
                "The cobblestones answer! Red fire climbs straight out of the cracks in the road! Mr. L throws his head back into the smoke and "
                "screams: *\"For his betrayal the world shall burn — those who feel no guilt, those who have no sense of shame, all will play my "
                "game, all will perish all the same! Know my name!\"* *“I don't care about your names or your games.”* Paulo snaps, his face bathed "
                "in blinding heat, *“You think I'm some hero who's gonna stand here and listen to you whine about shame? I just want the damn delivery "
                "made!”* Three heavy lead balls strike the monster's chest! "
                "\n\n"
                "And then — freeze the frame right here! Look at the street cobbles split open into wet pink flesh! Rows of jagged teeth sprouting "
                "across the roadway like the gullet of a leviathan! Mr. L twists his head completely backward on his neck, points a three-foot claw "
                "directly at Paulo, and screams: *\"I did love you, Mario — but why did you twist the knife in the gash?\"* Mario! Waluigi nearly "
                "dropped the clicker! He looked at a courier in grease-stained trousers holding an iron gun and called him Mario! And what does Paulo "
                "shout back? *“I don't know who your brother was, but he sounds like an absolute bastard. Stop screaming my name like we're some "
                "kind of friends — you're just another waste of space on my route.”* An absolute bastard! Paulo dismantled thirty years of legendary "
                "brotherhood in twelve words!"
            )
        },
        {
            "id": "the-stache-eye-and-falling-bar",
            "icon": "👁️",
            "heading": "'NO NEED FOR APOLOGIES — LONG PAST OVERDUE' — The Eyeball In The Road And The Falling Crossbar",
            "body": (
                "Roll the footage into the narrow clinic alleyway! Mr. L's voice crawls out of the pulsing street like grinding stones: *\"Who's "
                "that man you see who grooms his 'stache so well, who's the one who saw me as an empty shell to throw into the pyre, to damn within "
                "the fire? No need for apologies — long past overdue. Your sins you'll rue.\"* And right in front of the clinic threshold, a veiny, "
                "swollen eyeball the size of a beer barrel rises from the fleshy roadway and swivels toward the courier! Paulo does not hesitate! "
                "Paulo levels his pistol at point-blank range: *“I told you once, I don't give a damn about your poetry!”* Paulo spits, *“You keep "
                "talking like I'm some hero who owes you something. I just want to finish my job and get paid. Stop looking for an apology from "
                "someone who doesn't know your name!”* The hammer falls, and lead punches right into the vitreous fluid! "
                "\n\n"
                "Meanwhile, in the alley, Wario is hauling Waluigi through a choking cloud of soot! Waluigi sees orange flame leaping from the "
                "foundations and screams: *\"That's-a not tax collectors, Wario, let go of me! FIRE! FIRE! WAH, WE ARE GOING TO DIE!\"* And Wario's "
                "yellow grip tightens until Waluigi's purple fabric rips: *\"TAXES OR NOT, THE FLAMES DON'T CARE ABOUT YOUR ACCOUNTING! IF WE STAY "
                "IN THE OPEN, WE'RE JUST TARGET PRACTICE FOR THE UNEMPLOYED! GET DOWN! GET LOW!\"* "
                "\n\n"
                "A gas main ruptures five paces ahead, blossoming into a wall of roaring flame! Wario puts his head down, charges through the "
                "scorching smoke, and slams his entire three-hundred-pound bulk against the reinforced steel door of the clinic! The hinges give "
                "way, throwing both of us into the hallway! And what greets Wario? CLANG! A heavy rusted steel crossbar drops from the lintel "
                "and hits Wario directly across the back of his thick skull! He drops like an iron safe dropped down a mine shaft! And when Waluigi "
                "scrambles up, the corridor walls are throbbing with wet organic tissue, with Mr. L and Paulo facing us directly!"
            )
        },
        {
            "id": "the-single-slap-and-grimoire",
            "icon": "🧙‍♂️",
            "heading": "'MASTER OF ICE, KEEPER OF THE GRIMOIRE' — One Slap To Wario's Face And A Jammed Pistol",
            "body": (
                "Look at the corridor camera! Wario is spread-eagled on the grimy floor, snoring like a defective pump. Mr. L looms in the doorway, "
                "his layered voices clashing like gears: *\"Do you hear that? That is the sound of your hope curdling. Let me peel away every layer "
                "of your resolve until nothing remains.\"* Waluigi does not despair! Waluigi leans down, draws back Waluigi's purple glove, and "
                "delivers ONE sharp, educational SLAP across Wario's cheek! Just one slap! The precise therapeutic dose! "
                "\n\n"
                "Wario snaps awake, thrashing like a landed cod: *\"WAH! YOU TOUCH MY FACE?! I'm awake! I'm alert! I'm being assaulted by a "
                "coward! Is that thing... is it on the invoice? No. It doesn't have a permit! I'll charge you double for this! EXTRA_STRESS_FEE!\"* "
                "Then a crate scrapes and Paulo emerges with his gun aimed right at Waluigi's forehead: *\"Who the fuck are you!\"* "
                "\n\n"
                "Watch Waluigi rise! This is Waluigi's supreme moment of stage command! Waluigi straightens to Waluigi's full seven feet, raises "
                "one long purple finger between the barrel and Waluigi's nose, and delivers the unvarnished reality: *“Waluigi is not a fool!”* "
                "One long finger rises between the muzzle and Waluigi's eye: *“I am the master of ice, the keeper of the grimoire, and the only "
                "person in this wretched corridor with a coherent grasp on the current situation! Put that crude piece of iron away before you pull "
                "the trigger and discover it won't do a lick of good against something with — sub-surface intentions!”* Waluigi swallows hard, then "
                "finishes him off: *“Your shouting is giving me a headache, and if my head explodes, I shall be forced to file a very lengthy complaint "
                "against your estate in the afterlife!”* "
                "\n\n"
                "Suddenly shadowy green clones peel out of the walls, reaching with gray claws! Paulo pivots and rakes the hallway with lead: "
                "*\"Get your hands off my satchel or I'll break every finger you've got left!\"* And then — CLICK! The cylinder jams on a bad "
                "primer! Paulo looks at the hammer, mutters *\"Son of a bitch,\"* throws the dead iron on the floorboards, and bolts for the rear exit! "
                "Waluigi's speech bought that exact jam!"
            )
        },
        {
            "id": "dragging-wario-out",
            "icon": "🏃‍♂️",
            "heading": "'STAR-A CLINIC!' — Dragging A Screaming Partner Away From The Growing Walls",
            "body": (
                "Follow the interior tracking camera mounted high in the stairwell! Waluigi seizes Wario's thick wrist with both hands, plants "
                "Waluigi's pointed boots against the slimy boards, and drags: *\"We are giving up on the Star-a clinic. Let's go.\"* And Wario "
                "digs his yellow workboots into the muck, flailing like an overturned tortoise and bellowing at the ceiling: *\"LET GO OF MY "
                "HAND! THIS IS PRIVATE PROPERTY! I have — inventory! I have assets!\"* He had a severe concussion, grease burns on both elbows, "
                "and ripped purple trousers! He had no assets! Waluigi was literally hauling two hundred and eighty pounds of shrieking deadweight "
                "through an active demonic digestive tract! "
                "\n\n"
                "Behind us, Mr. L's layered voice crawls along the ceiling like damp mould: *\"Do not flee. Your legs will only carry you deeper "
                "into the maw of your own making. There is no exit from what has already been marked for consumption.\"* The hallway narrows by "
                "six inches every three seconds! Organic tendrils reach from the baseboards to snag our cuffs! Waluigi hits the heavy emergency "
                "exit with Waluigi's shoulder, throwing our combined weight against the latch and tumbling both of us out onto the freezing "
                "mountain dirt! Wario collapses face-down in the mud, clutching his battered temples and moaning: *\"GET ME OUT! GET ME OUT OF "
                "THIS STINKING HOLE! My boots! My glorious shoes are getting ruined by this — this organic sludge! I'm filing a claim... for every "
                "single scratch...\"* "
                "\n\n"
                "Waluigi turns back toward the open doorway, gasping for clean air. Mr. L stands directly on the threshold, flickering like a "
                "dying gaslamp in a draft, mist curling around his long gray boots: *\"You believe you have crossed a threshold. But there is no "
                "‘outside’ for one already marked. The gate remains open, and I am very, very patient.\"* Then the entire brick structure groans, "
                "mortar cracking as the building swells outward like rising bread! Waluigi heaves three hundred pounds of yelling partner over "
                "Waluigi's shoulder and runs for the wreck: *\"Wario, we got to get outta here!\"* Wario's skull bounces against Waluigi's spine "
                "with every stride: *\"PUT ME DOWN! I AM NOT A BAG OF POTATOES! I'm going to — sue — for the bruising of my ribs!\"* And Mr. L's "
                "parting words drift over the dark: *\"Flight is merely a change in altitude. The rot remains within you.\"* That voice echoed "
                "in Waluigi's ears for three straight nights!"
            )
        },
        {
            "id": "standoff-at-the-wreck",
            "icon": "🔫",
            "heading": "'PICK WHICH WAY YOU WANT TO BLEED' — Paulo Puts A Muzzle Against Waluigi's Forehead",
            "body": (
                "Roll to the wide shot of the square! The shattered helicopter lies tilted in the gravel, its hot turbines ticking like a dying "
                "clockwork mechanism while smoke curls from the crushed cowling. Mr. L's voice seems to seep from the very air between the stones: "
                "*\"Choice is a cruel needle, sewing your desperation into the fabric of your fate. Pick your poison, little spark.\"* And Wario "
                "clutches Waluigi's sleeve from behind a crumpled landing strut, shivering with rage and terror: *\"THE HELICOPTER! IT'S THE ONLY "
                "THING WITH A MOTOR! If we don't get that bird in the air, I'm going to be property of this land!\"* Property of the land! The "
                "man was still worried about real estate titles while surrounded by teeth! "
                "\n\n"
                "Then Waluigi spots something pale and rectangular lying in the gravel twenty feet away: Waluigi's dropped notebook, intact in the "
                "dust! But before Waluigi's fingers can close around the leather cover, the cold black iron barrel of a carbine presses straight "
                "against Waluigi's forehead! Paulo has stepped out of the swirling smoke, his jaw locked like a vise: *\"Get that piece of junk "
                "out of your hand before I put one in yours! You think you're making a choice? You're just picking which way you want to bleed. "
                "Give me the notebook! If it's got the coordinates, I can get us clear of this rot-zone in five minutes!\"* "
                "\n\n"
                "Waluigi stammers, staring down the black rifled bore: *\"Th-the notebook — WAH! Why would you need it at all?\"* And Paulo's teeth "
                "grind together in raw fury: *\"Because I'm the one who has to deal with the fallout of your failure, you moron! I don't care about "
                "‘why.’ I just need what's inside so I can clear my debt and get out of this god-forsaken crater! Hand it over before someone "
                "decides your head looks better with a hole in it!\"* He slams his heavy leather satchel onto the dirt, sending dust into the air! "
                "And what does our heroic syndicate boss yell from behind the bent landing gear? *\"THE NOTEBOOK! IT'S THE ONLY THING LEFT WITH "
                "ANY VALUE! Give it to him, you fool! It's the only way out of this contract!\"* Wario was already liquidating Waluigi's research "
                "to settle his own accounts!"
            )
        },
        {
            "id": "the-notebook-shield-and-blackout",
            "icon": "⚡",
            "heading": "'YOU'RE RUNNING INTO THE NEST!' — Charging The Clinic With Stitched Paper For Armor",
            "body": (
                "Watch the secondary camera angle on the auxiliary reel! Waluigi dives across the dirt, scoops up the leather-bound notebook, "
                "and holds it between Waluigi's temples and Paulo's gun! Paper! Waluigi used eighty pages of hand-ruled archival paper for body "
                "armour! But Waluigi does not sprint for the mangled helicopter! Waluigi charges straight back toward the clinic entrance! Wario "
                "screams from the ditch, waving his fat arms in hysterical protest: *\"NO! THE HELICOPTER IS THE EXIT! DON'T GO BACK! You're going "
                "to get us sued! The medical fees alone for this trip will be astronomical!\"* "
                "\n\n"
                "Paulo brings his carbine up, shouting through the swirling debris: *\"YOU IDIOT! YOU'RE RUNNING INTO THE NEST! If you go back "
                "there, you're just volunteering for a funeral! The clinic is a death trap! You're choosing the grave over the getaway!\"* BANG! "
                "The rifle blast tears through the mountain air! The muzzle flash illuminates the square in blinding white! The heavy lead slug "
                "strikes a jagged piece of sheared titanium a hand's width from Waluigi's left ear with a flat, screaming screech that vibrates "
                "straight down Waluigi's spine! Sparks shower across Waluigi's sleeves, and the shockwave nearly tears the paper from Waluigi's "
                "clenched fingers! "
                "\n\n"
                "And Wario screeches after Waluigi in total commercial contradiction: *\"THE CLINIC IS A LIABILITY! But if we don't — well, at "
                "least the settlement will be bigger! Whatever is in that building, it has to have more gold than this wasteland!\"* Gold! Even "
                "with high-calibre rounds tearing through the air, he was calculating insurance settlements! But Waluigi's boots hit a slick patch "
                "of gravel and motor oil. Waluigi's balance disappears. The stony ground rushes up and smacks Waluigi square in the teeth! Copper "
                "fills Waluigi's mouth, grit grinds against Waluigi's cheek, a high thin ringing drowns out the shouting, the notebook skids away "
                "across the cobbles, and the world goes completely black!"
            )
        },
        {
            "id": "wario-surrenders-the-intellectual-property",
            "icon": "🤝",
            "heading": "'FINE! FINE! TAKE THE DAMN THING!' — Three Demands Before The Trigger Finger Goes White",
            "body": (
                "Bring audio track two back up! Waluigi is lying unconscious in the gravel with a mouthful of dirt, but the directional microphones "
                "captured every single syllable of the transaction! Paulo steps right over Waluigi's outstretched boots, thumbing a fresh cartridge "
                "into his weapon, and levels the iron barrel straight at Wario's purple chest: *\"Seems like he couldn't take the heat. Hand it "
                "over.\"* Wario has the notebook clutched fiercely against his belly, backing against a crumpled stabilizer fin: *\"YOU'RE GOING "
                "TO PAY FOR THAT! YOU'RE GOING TO PAY IN INTEREST! Wario doesn't share! Wario keeps his assets! You want the book? Then you pay the "
                "processing fee! I'll call your father! I'll have you blacklisted from every trade route in the kingdom!\"* "
                "\n\n"
                "He threatened to contact the courier's father! In the middle of an exclusion zone surrounded by throbbing teeth and burning pipes! "
                "Paulo does not even blink. Paulo does not negotiate. Paulo tightens his grip on the carbine stock until his trigger finger turns "
                "dead white: *\"Last chance.\"* And that is the exact second where Wario's legendary financial bravery expires! He flings the "
                "notebook across the dirt: *\"FINE! FINE! TAKE THE DAMN THING! There! It's yours! Wario is retiring from this negotiation! Just "
                "take the asset and let me live to see my next audit!\"* "
                "\n\n"
                "The notebook hits the courier's chest. Paulo catches it against his heavy satchel, gives a thin, exhausted smile, and murmurs: "
                "*\"Now let's see what you wrote down here, purple boy.\"* And Wario scrabbles across the dirt on hands and knees like an enraged "
                "crab, clawing at Paulo's trouser cuffs: *\"HEY! THAT'S PRIVATE PROPERTY! That's an intellectual property violation! You haven't "
                "even signed the non-disclosure agreement! You're going to be audited! Wario will find your house! Wario will seize your shoes!\"* "
                "Seize his shoes! Paulo thumbed open the front cover and strolled into the fog, reading Waluigi's field intelligence like the morning "
                "paper while Wario swore vengeance on his footwear!"
            )
        },
        {
            "id": "the-thorn-scrap-and-the-paper-trail",
            "icon": "🌱",
            "heading": "'THEY'RE SCRAPPING THE STOCK!' — A Single Torn Margin In A Bramble",
            "body": (
                "Roll the final reel! Waluigi begins to regain consciousness in the freezing dirt. Mr. L's layered voice is drifting through the "
                "smoke: *\"Awaken, and face the tally of your choices. The ‘purple boy’ seeks his prize in the dark, while you crawl toward the "
                "light of a very cold sun. But remember: every page turned is a debt incurred in blood.\"* And from ten paces away, Wario is "
                "screaming into Waluigi's ear: *\"HURRY UP! GET UP! You're going to miss the audit!\"* "
                "\n\n"
                "Mr. L reaches down a long gray hand from the mist: *\"An eye for an eye. Such a primitive, charmingly violent sentiment. Wake, "
                "little scholar. The tally must be settled before the ink on your fate dries forever.\"* Wario screeches: *\"GET UP! DON'T LET "
                "HIM TOUCH THE ASSETS! If he touches you, the contract is voided!\"* Waluigi sits up screaming: *\"WAH!\"* And Wario scrambles "
                "over on his knees: *\"WAH! YOU SAID IT! That's the spirit of a winner! Now get up and grab that notebook before the debt collectors "
                "find us both!\"* Then the shadow pulls thin and vanishes into the air: *\"You were gone long enough for the tally to shift. The "
                "debt remains, even if the face of the collector changes.\"* "
                "\n\n"
                "Waluigi searches Waluigi's pockets in total panic: *\"My notebook? WAH? Where did it go? My notes! My new story I was writing — "
                "it had information about Luigi!\"* Wario claws through a briar patch and comes up with a tiny scrap of paper caught on a thorn: "
                "*\"THE NOTES! THE INTEL! THE ASSETS! Here! A piece! It's not the whole thing, but it's a start!\"* Waluigi grabs Wario's tunic: "
                "*\"Who took my-a notebook!\"* And Wario roars: *\"THEY'RE SCRAPPING THE STOCK! Some thief, some scavenger, some low-level bottom-feeder "
                "is trying to steal our monopoly! If they have those notes on the green one, they've just declared a hostile takeover of our "
                "interests! Give me a direction! Where did you last see it? We track the paper trail!\"* "
                "\n\n"
                "The paper trail! He handed the book over with both hands to save his own skin, and now he is declaring a hostile takeover against "
                "a courier who walked away ten minutes ago! Waluigi slipped the torn scrap into Waluigi's coat, and that is where it stays. Cut the "
                "projector motor! Turn off the lamp! The reel is spooled, the screen is dark, and Waluigi is going to bed!"
            )
        }
    ]

    comm = {
        "id": "the_rot_zone_at_star_hill_commentary",
        "sourceArticle": "the_rot_zone_at_star_hill",
        "title": "The Rot-Zone at Star Hill: A Fired Pilot, a Roof That Was Not a Landing Pad, the Man With Too Many Hands, and the Notebook That Left in a Courier's Satchel",
        "subtitle": "In Which Waluigi Screens The Flight Recorder, Reclaims The Grimoire, And Witnesses A Courier Dismiss Thirty Years Of Fraternal Tragedy",
        "filed": "3 Aethel, 1035 BF — recorded live at the workshop projector",
        "timeCode": "TC:1035-08-31/ROT-COM",
        "kicker": "Waluigi's Cut · Commentary Track",
        "pullQuote": "He called a courier with a black-powder pistol Mario! And Paulo told him his brother sounded like an absolute bastard!",
        "standfirst": (
            "Waluigi has loaded the twin reels of the Star Hill flight recorder and street survey onto the 16mm workshop projector. "
            "Down in the third row, nobody is permitted to leave until Waluigi establishes that Wario fired our licensed pilot at four "
            "thousand feet, that the roof was never a certified landing zone, and that the terrifying green horror in the street addressed "
            "a foul-mouthed courier as Mario before stealing Waluigi's leather-bound intellectual property."
        ),
        "sections": sections,
        "relatedArticles": [
            "the_rot_zone_at_star_hill",
            "the_lava_bridge_ambush_and_the_blue_luigi",
            "the_tape_and_the_wario_files",
            "the_embassy_ambush_and_luigi_interrogation"
        ]
    }
    return comm

def build_analysis():
    sections = [
        {
            "id": "the-mario-projection",
            "icon": "🩸",
            "heading": "He Addressed A Courier As Mario — The Fraternal Hallucination",
            "sourceAnchor": "Mr. L points at Paulo and asks why Mario twisted the knife in the gash.",
            "body": (
                "I have the scrap on the desk under the brass lamp. It has been squared against the green blotter since dawn, held down at "
                "one corner by a brass weight so the mountain draught does not take it. It is four inches wide, torn along my own ruled left "
                "margin, and the puncture from the thorn still shows near the top edge like an unhealed needle prick. Beside it lies the filed "
                "record of the Lava Bridge Ambush, open to the testimony of the bridgekeeper. "
                "\n\n"
                "Let me put the core forensic finding first: what happened outside Dr. Toad's clinic was not a random encounter with a mutated "
                "aberration, nor was it an attempt by Luigi to establish contact with our syndicate. It was an interrogation conducted by an "
                "entity trapped inside an unendurable memory. Mr. L stood in the middle of a street paved with wet teeth, looked directly at "
                "a cynical courier wearing grease-stained overalls and holding a black-powder pistol, and called him Mario. He did not ask "
                "who the man was. He did not check credentials. He demanded to know why Mario had twisted the knife in the gash. "
                "\n\n"
                "Paulo's response is the most important sentence spoken on Star Hill that night. A man trained in the heroic myth of the "
                "Mushroom Kingdom would have attempted to reason with the figure, or probed for Luigi's lost humanity. Paulo did neither. He "
                "spat on the cobblestones and delivered an unsparing verdict: he stated that he did not know who the speaker's brother was, but "
                "that the brother sounded like an absolute bastard. In one sentence, a courier with a delivery quota stripped away thirty years "
                "of sentimental fraternity and named the act for what it was: an execution disguised as an alliance."
            )
        },
        {
            "id": "the-lava-bridge-parallel",
            "icon": "🌉",
            "heading": "Twenty-Four Bricks From The Bell — The Stanzas Of The Inferno",
            "sourceAnchor": "Standing at the bridge over the king's inferno, hand in hand, until he plunged me in the inferno.",
            "body": (
                "The verses recited outside the clinic are not impromptu poetry; they are a verbatim recounting of the catastrophe filed under "
                "article the_lava_bridge_ambush_and_the_blue_luigi. When Mr. L chanted of standing hand in hand at the bridge over the king's "
                "inferno, he was citing the exact masonry above Bowser's subterranean magma works. The twenty-four bricks from the bell-tower "
                "is the precise structural span where the drop occurred during the failed siege. "
                "\n\n"
                "Notice the progression of the four stanzas preserved across the recording. The opening refrain begins as an unsolved mystery "
                "regarding a man who grooms his mustache. The second stanza speaks of betrayal by a so-called hero who laid him low from up "
                "above. The third verse explicitly invokes the flames of hate and melting in the inferno. And the fourth stanza closes the loop "
                "with an eyeball pushing from the road, declaring that the sinner was seen as an empty shell thrown into the pyre, long past "
                "the hour of apology. "
                "\n\n"
                "This confirms that the entity's psychological architecture is entirely anchored to the moment of betrayal. When Mr. L "
                "proclaimed that for his brother's betrayal the entire world shall burn, he was not articulating an ideology of conquest; he "
                "was projecting an infernal sentence upon every bystander who failed to prevent his fall. Paulo was simply the nearest living "
                "body standing in the path of that grievance."
            )
        },
        {
            "id": "the-issued-phrase",
            "icon": "📦",
            "heading": "A Courier Does Not Invent 'Rot-Zone' — The Institutional Quarantine",
            "sourceAnchor": "Paulo demands the notebook coordinates to clear the rot-zone in five minutes.",
            "body": (
                "I turn now to the legal and logistical vocabulary that entered the archive during the standoff at the wreckage. When Paulo "
                "levelled his weapon at my forehead, he demanded the notebook because it contained the coordinates required to clear the "
                "'rot-zone' and satisfy his outstanding debt. That phrase demands rigorous archival scrutiny. "
                "\n\n"
                "A freelance courier does not coin technical containment jargon under fire. 'Rot-zone' is not street slang; it is an "
                "administrative classification utilized in Regency quarantine warrants and high-security dispatch manifests. Paulo knew "
                "the term, he knew the boundary lines, and he possessed a pre-assigned extraction timetable of five minutes. This indicates "
                "with high probability that the clinic was already designated an active bio-arcane hazard by an external authority before our "
                "helicopter ever entered the airspace. "
                "\n\n"
                "Furthermore, Paulo's reference to clearing his debt ties directly into the commercial networks documented in our case files on "
                "syndicate debt enforcement. He was operating under a punitive delivery contract. To Paulo, the horror unfolding across Star "
                "Hill was neither supernatural nor tragic; it was an operational delay carrying financial penalties. That institutional "
                "indifference explains why he was entirely immune to Mr. L's theatrical verses."
            )
        },
        {
            "id": "the-skinny-t-dossier",
            "icon": "🍄",
            "heading": "The Green Overalls And The Skinny T Nickname",
            "sourceAnchor": "Paulo observes the green transformation and references skinny T.",
            "body": (
                "During the initial exchange of fire, Paulo muttered a curious line that deserves preservation in the intelligence registry: "
                "he expressed astonishment that 'skinny T' was wearing green. That remark was not an insult; it was an identification based "
                "on prior acquaintance. "
                "\n\n"
                "In the underworld registries maintained by the syndicate, operatives associated with Toad courier networks are frequently "
                "designated by single-letter callsigns. A tall, gaunt courier operating under the handle 'T' fits the profile of several "
                "intermediaries who have surfaced in our border smuggling investigations. Paulo saw a lanky figure in overalls, assumed he "
                "was confronting a known competitor or syndicate runner, and only realized his error when the musculature ruptured into claws. "
                "\n\n"
                "This detail reinforces our assessment of Paulo's background. He is connected to regional transit guilds that move sensitive "
                "parcels through contested territories. His presence outside Dr. Toad's clinic with a locked satchel was not an errand of "
                "mercy; it was a high-value courier extraction that coincided disastrously with Mr. L's emergence."
            )
        },
        {
            "id": "the-custody-of-the-scrap",
            "icon": "📜",
            "heading": "The Chain Of Possession — From The Fired Pilot To The Briar Thorn",
            "sourceAnchor": "Wario surrenders the notebook to Paulo upon the third demand.",
            "body": (
                "The material history of the documents involved in this operation must be entered cleanly into the ledger. The flight began "
                "with an act of gross managerial negligence: Wario fired our licensed pilot at altitude for requesting a salary increase and "
                "stowed him in the aft cargo hold. That decision invalidated our operating charter and placed an unqualified individual at the "
                "controls, directly causing the catastrophic collision with the parapet. "
                "\n\n"
                "When the aircraft struck the clinic roof, my working field notebook was ejected into the street, recovered by Wario, and held "
                "against two verbal demands from Paulo. The transcript demonstrates that Wario attempted to negotiate processing fees, threatened "
                "trade-route blacklists, and invoked intellectual property protections. However, the moment Paulo's finger turned white on the "
                "trigger, Wario surrendered the entire manuscript without further resistance. "
                "\n\n"
                "The only piece recovered by our syndicate is the scrap currently before me on the blotter, retrieved from a briar thorn. "
                "The remainder of my field notes regarding Luigi's movements, the verse fragments, and the navigational coordinates departed "
                "inside Paulo's satchel. From an evidentiary perspective, the courier now possesses the primary source record of the Star Hill "
                "incident, while we hold only this single torn margin."
            )
        },
        {
            "id": "the-verdict-on-fraternity",
            "icon": "⚖️",
            "heading": "The Archival Verdict — The Knife In The Gash",
            "sourceAnchor": "Waluigi enters his final appraisal of the fraternal conflict into the record.",
            "body": (
                "I conclude this filing with an honest admission of my own archival interest. When I leaned out of the helicopter door and saw "
                "a green cap four hundred feet below, I shouted Luigi's name because I wanted the search to be over. I wanted to believe that "
                "the elusive figure could be located, documented, and brought back under the syndicate's ledger. That was a failure of objectivity. "
                "The green was sickly and wrong, and I knew it before the skids touched stone. "
                "\n\n"
                "What we found instead was the ruin of the kingdom's greatest myth. For decades, official histories have celebrated the "
                "unbreakable bond between the brothers in red and green. But the testimony recorded outside Dr. Toad's clinic tells a far darker "
                "truth. When the crisis came at the Lava Bridge, trust did not triumph; one brother plunged the other into the inferno and "
                "twisted the knife in the wound. "
                "\n\n"
                "Mr. L is the physical embodiment of that unacknowledged betrayal. He is not seeking conquest or territory; he is demanding an "
                "accounting from a partner who discarded him. In that narrow sense, as I sit at this desk listening to the wind through the "
                "workshop eaves, I understand his fury better than the court scribes ever will. I enter this analysis into the permanent archive "
                "as evidence that the debt between the brothers remains unpaid, and that the fire at the bridge has not gone out."
            )
        }
    ]

    analysis = {
        "id": "the_rot_zone_at_star_hill_custody_reading",
        "sourceArticle": "the_rot_zone_at_star_hill",
        "title": "The Rot-Zone at Star Hill: A Reading of Custody, the Issued Phrase, and the Brother Addressed as Mario",
        "subtitle": "The archivist examines the single surviving scrap under the desk lamp and tracks the Lava Bridge parallel",
        "archivist": "Waluigi, Auditor-General",
        "filed": "3 Aethel, 1035 BF — after the session filing",
        "summary": "Waluigi argues that Mr. L's encounter with the courier was governed by the unresolved trauma of the Lava Bridge ambush, projecting Mario onto a stranger who rejected the myth of fraternity.",
        "thesis": (
            "I have the scrap on the desk under the brass lamp. It is roughly four inches wide, torn along my own hand-ruled left margin, "
            "and the single thorn puncture still shows near the top edge like an unhealed needle prick. Beside it lies the filed record of "
            "the Lava Bridge Ambush, open to the testimony of the bridgekeeper. "
            "\n\n"
            "Let me put the core forensic finding first: what happened outside Dr. Toad's clinic was not a random encounter with a mutated "
            "aberration, nor was it an attempt by Luigi to establish contact with our syndicate. It was an interrogation conducted by an "
            "entity trapped inside an unendurable memory. Mr. L stood in the middle of a street paved with wet teeth, looked directly at "
            "a cynical courier wearing grease-stained overalls and holding a black-powder pistol, and called him Mario. He did not ask "
            "who the man was. He did not check credentials. He demanded to know why Mario had twisted the knife in the gash. "
            "\n\n"
            "Paulo's response is the most important sentence spoken on Star Hill that night. A man trained in the heroic myth of the "
            "Mushroom Kingdom would have attempted to reason with the figure, or probed for Luigi's lost humanity. Paulo did neither. He "
            "spat on the cobblestones and delivered an unsparing verdict: he stated that he did not know who the speaker's brother was, but "
            "that the brother sounded like an absolute bastard. In one sentence, a courier with a delivery quota stripped away thirty years "
            "of sentimental fraternity and named the act for what it was: an execution disguised as an alliance."
        ),
        "sections": sections,
        "relatedArticles": [
            "the_rot_zone_at_star_hill",
            "the_lava_bridge_ambush_and_the_blue_luigi",
            "the_tape_and_the_wario_files",
            "the_embassy_ambush_and_luigi_interrogation"
        ]
    }
    return analysis

def main():
    comm = build_commentary()
    ana = build_analysis()

    with open(os.path.join(DATA, "commentaries.json"), "r", encoding="utf-8") as f:
        comms_doc = json.load(f)
    items = comms_doc.get("commentaries", [])
    idx = next((i for i, c in enumerate(items) if c.get("id") == comm["id"]), None)
    if idx is not None:
        items[idx] = comm
    else:
        items.append(comm)
    comms_doc["commentaries"] = items
    with open(os.path.join(DATA, "commentaries.json"), "w", encoding="utf-8") as f:
        json.dump(comms_doc, f, indent=2, ensure_ascii=False)
        f.write("\n")
    print(f"Saved commentary {comm['id']} ({len(comm['sections'])} sections)")

    with open(os.path.join(DATA, "articleAnalyses.json"), "r", encoding="utf-8") as f:
        ana_doc = json.load(f)
    anas = ana_doc.get("analyses", [])
    idx = next((i for i, a in enumerate(anas) if a.get("id") == ana["id"]), None)
    if idx is not None:
        anas[idx] = ana
    else:
        anas.append(ana)
    ana_doc["analyses"] = anas
    with open(os.path.join(DATA, "articleAnalyses.json"), "w", encoding="utf-8") as f:
        json.dump(ana_doc, f, indent=2, ensure_ascii=False)
        f.write("\n")
    print(f"Saved analysis {ana['id']} ({len(ana['sections'])} sections)")

if __name__ == "__main__":
    main()
