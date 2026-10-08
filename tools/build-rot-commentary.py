#!/usr/bin/env python3
"""Build and validate the remastered The Rot-Zone at Star Hill Commentary."""
import json, re, sys, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "Reputation-Matrix2", "data")

def main():
    with open(os.path.join(DATA, "commentaries.json"), "r", encoding="utf-8") as f:
        comms_doc = json.load(f)

    with open(os.path.join(DATA, "articleAnalyses.json"), "r", encoding="utf-8") as f:
        ana_doc = json.load(f)

    with open(os.path.join(DATA, "events.json"), "r", encoding="utf-8") as f:
        events = json.load(f)

    rot_event = next(e for e in events if e.get("id") == "the_rot_zone_at_star_hill")
    rot_ana = next(a for a in ana_doc["analyses"] if a.get("id") == "the_rot_zone_at_star_hill_custody_reading")

    sections = [
        {
            "id": "the-lurch",
            "icon": "📽️",
            "heading": "ROLL THE REEL — The Siege Ended With A Signature And The Next Thing Began With A LURCH",
            "body": (
                "Roll the reel! Right there — start track one on the soundhead! Waluigi has the projector focused on the white "
                "brick wall of the workshop, and Waluigi wants everyone sitting in these three folding chairs to look at the screen "
                "before anyone asks another foolish question about why our transport helicopter is currently a twisted pile of smoking "
                "scrap behind the barn! Look at the timestamp! Look at the counter on the dial! Two weeks of quiet at the outpost, "
                "one signed contract on the mahogany desk, and thirty seconds later Waluigi is airborne in a five-ton iron bird with "
                "the side cargo hatch completely open and a freezing mountain gale whistling through Waluigi's mustache! "
                "\n\n"
                "Look at the cockpit camera mounted behind the cargo bench! Waluigi is sitting there, perfectly respectable, minding "
                "Waluigi's own business, holding a brand new leather notebook with both hands like a true scholar. And then — BAM! "
                "Watch the whole frame shudder! The aircraft drops thirty feet into an empty air pocket in half a heartbeat! Waluigi "
                "hits the iron bulkhead so hard Waluigi's molars click together! Hear that on the cabin microphone? That is Waluigi "
                "screaming at the top of Waluigi's lungs: *\"WAH! What are you doing?\"* Waluigi scrambles forward on hands and knees "
                "across the rattling floor plates, slams a purple fist against the pilot's high-backed steel seat, and expects to see a "
                "licensed professional with headphones and an altimeter! "
                "\n\n"
                "And who is in the chair? Freeze the frame right there! LOOK AT THAT HEAD! That is not an aviator! That is Wario! Wario in "
                "a sweaty sleeveless purple tunic, wrestling two heavy control levers like he is trying to strangle a grease-bear! And look "
                "at his mouth on the audio playback! He turns his face around, his jaw turns the colour of an overripe eggplant, and he "
                "roars directly into the cockpit microphone: *\"I'M FLYING, YOU STRING BEAN! DON'T TOUCH THE CONTROLS! THAT PILOT IS ON "
                "MY TAB, AND I DON'T PAY FOR BROKEN EQUIPMENT!\"* "
                "\n\n"
                "Broken equipment! Waluigi wants every person in this room to appreciate this moment! We are four hundred feet in the air "
                "over black limestone gorges, travelling at ninety miles an hour in freezing darkness, and the man with his workboots on the "
                "directional rudder does not know how to fly a kite, let alone a twin-turbine troop transport! He does not have a licence! "
                "He does not have goggles! He has a violent hatred of hourly wages and a left hand clamped onto Waluigi's purple coat so tight "
                "Waluigi's blood stops moving! Look at Waluigi's eyes on that freeze-frame! Look at the sheer, unadulterated horror! You can see "
                "the exact millisecond Waluigi realizes our glorious new business partnership is about to end as an oil fire on a cliff! "
                "Waluigi is trapped with a madman at the stick, the altimeter needle is spinning backward like a roulette wheel, and Wario is "
                "humming a polka under his breath like he is driving a produce cart to market! Waluigi should have charged him twenty thousand "
                "coins just for sitting in the passenger cabin! Look at the mountain ridge coming straight through the windshield! "
                "Look at the loose wrenches sliding across the steel deck plates! Waluigi is yelling into his ear that the rotor RPM is dropping "
                "and he just tells Waluigi that dials are purely decorative suggestions designed to sell insurance! WAH!"
                "Keep your eyes on the altimeter dial right in the center of the console — it is spinning so fast the brass casing is vibrating loose! If Wario hit a pine tree right here, none of us would be having this discussion!"

                "Look at the needle quivering in the red zone!"

            )
        },
        {
            "id": "fired-him",
            "icon": "🚪",
            "heading": "'FIRED HIM! HE'S IN THE BACK!' — The Only Man Aboard Who Read The Manual Was In A Steel Locker",
            "body": (
                "Advance the film counter! Listen to the audio pickup right here on the master tape! Waluigi is shouting over the roar "
                "of two red-hot exhaust stacks: *\"Where did the actual pilot go?\"* A completely normal, civilized inquiry! A very polite, "
                "reasonable question from a passenger who has a healthy preference for dying in an expensive bed eighty years from now! "
                "And what does Wario roar back? Turn the speaker knob all the way to the right! Listen to the gravel in his throat! "
                "\n\n"
                "*\"THE PILOT WAS A LIABILITY! HE ASKED FOR A RAISE, SO I FIRED HIM! NOW I'M THE CAPTAIN, AND THE CAPTAIN DOESN'T TAKE ORDERS "
                "FROM THE CARGO!\"* "
                "\n\n"
                "Cargo! Did you hear that word on the tape? Waluigi has been designated as cargo! An hour ago Waluigi was a recognized intellectual "
                "partner holding a signed agreement for forty per cent of the net yield, and now Waluigi has been reclassified as unsecured "
                "baggage! Hear Waluigi's voice crack over the radio intercom: *\"He was on the plane midair — what-a do you mean?\"* Waluigi starts "
                "crawling around the cargo bay on hands and knees, shining a flashlight into the dark corners, checking under greasy canvas tarps "
                "and behind the spare hydraulic fluid barrels to see if Wario pushed a certified pilot out of the open door into the clouds! "
                "\n\n"
                "And Wario doesn't even look back! He just wrenches the cyclic forward until the rivets groan and screams: *\"HE'S IN THE REAR HOLD! "
                "I PUT HIM THERE FOR 'CONSULTATION'! HE'LL BE FINE—OR HE'LL GET A VERY LOUD SEAT FOR THE NEXT TWO HOURS! EITHER WAY, HE'S OFF "
                "MY BALANCE SHEET!\"* "
                "\n\n"
                "Consultation! The man who understands what the oil pressure needles mean was stuffed into a steel mesh locker beside the tail rotor "
                "driveshaft! Look at Waluigi on the surveillance wide-angle! Waluigi is clutching the instrument panel with trembling fingers, "
                "watching Wario haul on a sticky throttle lever with both hands until the sweat drips off his nose! Waluigi screams at him, asking "
                "how on earth he plans to navigate, and Wario delivers the most terrifying speech in the history of human flight: *\"I DON'T NEED "
                "TO KNOW HOW, I JUST KNOW IT WORKS! I STUDIED THE MANUAL! WELL, I STOLE THE MANUAL AND READ THE PARTS WITH PICTURES! IT'S ALL ABOUT "
                "MOMENTUM—AND I HAVE A LOT OF MOMENTUM!\"* "
                "\n\n"
                "Momentum! He thinks momentum is a substitute for aerodynamic lift! If ignorance had thrust, Wario could launch this entire "
                "workshop into orbit! Waluigi is staring at a flashing red gauge that says 'TRANSMISSION OVERHEAT' and Wario is grinning like a man "
                "who just found a brass nickel in his soup! Waluigi asked him about the landing gear and Wario told Waluigi that landing gear is "
                "an optional accessory invented by cowards! Waluigi should have jumped into the reservoir with a parachute when we had the chance, "
                "because being drowned in pond scum is ten times more dignified than whatever Wario is about to do to that hospital roof! The cabin "
                "is rattling so violent that Waluigi has to hold my knees together with both elbows! Waluigi could hear the tail rotor coughing like "
                "an asthmatic donkey every time Wario slammed the pedals, and the smell of sizzling lard was pouring straight out of the engine housing! "
                "This wasn't aviation, this was an attempted assassination of gravity itself! WAH!"
                "The man was a licensed professional with sixteen years of high-altitude mountain delivery experience, and Wario replaced him with two sweaty hands and a furious desire to avoid payroll taxes!"

                "He thought a flight manual was an optional reading suggestion!"

            )
        },
        {
            "id": "the-green-man",
            "icon": "👀",
            "heading": "LOOK AT THE STREET! — Waluigi Spots A Lime-Green Cap Four Hundred Feet Below The Rotors",
            "body": (
                "Watch the horizon line on the screen! Look at that horrifying sixty-degree tilt! The camera lens is practically pointed straight "
                "down into the mountain pines! Waluigi had to yank the lap belt so hard the steel buckle bruised both hip bones! Hear Waluigi "
                "pleading through the cabin mic: *\"You better be sure about this!\"* And Wario snaps his jaws like a mechanical trap: *\"BETTER IS "
                "FOR PEOPLE WHO DON'T OWN THE MAP! I DON'T GUESS, I CALCULATE! AND MY CALCULATION SAYS WE LAND ON THAT ROOF OR WE DON'T LAND AT "
                "ALL—NO REFUNDS!\"* No refunds! He is treating our imminent blunt-force trauma like an unreturnable novelty toaster! "
                "\n\n"
                "Then he punches a giant square switch with his thumb! A horn begins blaring inside the cockpit — BEEP! BEEP! BEEP! Listen to him "
                "roar over the alarm: *\"HOLD YOUR BREATH THEN, STRINGS-BEAN, IT SAVES THE OXYGEN FOR THE PROFIT! WATCH THE GEARS DROP! WARIO SEES "
                "THE LANDING ZONE, AND THE LANDING ZONE OWES ME A FEE!\"* "
                "\n\n"
                "And then — stop the tape! Hit the red lever on the projector! Freeze it right on that frame! Look down into the street through the "
                "mist! Look at the gas lamps in front of Dr. Toad's clinic! Waluigi's long purple arm points out the open side hatch! Hear Waluigi "
                "screaming so loud the audio needle redlines: *\"WAIT, SLOW DOWN, WAHHH! THAT IS LUIGI IN THE STREET, HE IS STANDING THERE!\"* "
                "\n\n"
                "Look at the shape standing on the cobblestones! Overalls, round nose, mustache, peaked cap. But look at the colour on the screen! "
                "Waluigi shouted Luigi's name because shock makes your tongue stupid, but even four hundred feet above the pavement through rotor wash, "
                "the shade was completely wrong! It was not honest emerald! It was a foul, sickly, glowing neon lime! And does Wario care about subtle "
                "variations in pigment? Not for one millisecond! Wario cranes his thick neck, sees a green hat, and hollers: *\"THAT'S NOT A LANDING "
                "ZONE, THAT'S A PAYDAY! HE LOOKS LIKE HE'S WAITING FOR SOMETHING—PROBABLY THE BILL I'M ABOUT TO SEND HIM!\"* "
                "\n\n"
                "Then Waluigi spots the other figure in the alley! A broad-shouldered man in heavy dark gear carrying a satchel! Waluigi yells: "
                "*\"WAH! Who is that?\"* And Wario violently dumps the collective stick, throwing the helicopter into a sickening side-slip that "
                "sends oil cans clattering across the floor! *\"THAT'S A DISTRACTION! A DEBT COLLECTOR IN DISGUISE! I DON'T CARE WHO HE IS; IF HE'S "
                "TALKING TO THE GREEN ONE, HE'S INTERFERING WITH MY ACQUISITION!\"* Acquisition! He is falling out of the sky at ninety miles an hour "
                "and he thinks he is executing a hostile takeover of a pedestrian! Waluigi's stomach stayed at four hundred feet while Waluigi's boots "
                "dropped like an anvil, and the cockpit smells like battery acid and burning cabbage! Waluigi's cap flew off my ears twice before "
                "Waluigi managed to jam it back onto my skull! Look at the streetlamp coming directly at the nose glass! The entire windshield was "
                "fogging up with condensation and engine oil, and Wario was wiping it clear with his bare forearm while screaming curses at the street! "
                "He was aiming five tons of iron like a bowling ball and praying for a strike! WAH!"
                "The rotor downdraft was flattening every shrub in a fifty-yard radius, and Wario had his forehead pressed flat against the glass shouting about delinquent accounts!"

                "The rotor wash was blowing dust through every vent in the cabin!"

            )
        },
        {
            "id": "the-mouth",
            "icon": "📜",
            "heading": "THE MUSTACHE RHYME — While Mr. L Recites Stanzas, Waluigi's Working Notebook Takes A Dive",
            "body": (
                "Switch spools! This is the footage from the clinic's rooftop surveillance lens, looking straight down into the alleyway! While "
                "Wario is busy steering five tons of screaming iron toward a chimney, down on the wet cobbles the lime-green creature is standing "
                "three feet from the courier like a bad street performer at a festival! Listen to the microphone pickup! He is speaking in rhyme! "
                "RHYME! In the middle of an unlit street! "
                "\n\n"
                "*\"Who's that man you see who grooms his 'stache so well? This mystery will be unsolved by those whole souls fell to his hell.\"* "
                "\n\n"
                "Can you believe this? A mustache poem! To an armed courier in the middle of the night! And the courier — Paulo, who has clearly had "
                "an exceptionally exhausting shift — does not clap! He does not ask for an encore! He draws a massive, ugly black powder handgun "
                "from under his coat and levels it right between those green eyebrows: *\"Who's that in the street stumbling like a drunken bum — get "
                "fucked, get out of my way. Do you not see the gun.\"* That is poetry! That is a true masterclass in literary critique! Waluigi has "
                "never respected a courier more in Waluigi's entire life! "
                "\n\n"
                "Now look back up at our helicopter on the wide lens! Waluigi is hanging halfway out the open side door with the notebook, trying to "
                "transcribe every syllable! *\"Look there, talking to each other! Luigi is there, he is talking!\"* But Wario hits the left rudder with "
                "his workboot, the tail kicks sideways like a bucking mule, and the notebook slips right through Waluigi's purple gloves! Waluigi "
                "lunges across the hatch! *\"WAH! Get this damn thing under control!\"* Missed! By two inches! The notebook leaves the aircraft and "
                "tumbles through the cold night air, twenty pages of Waluigi's handwritten notes fluttering in the searchlight beam like dead moths! "
                "\n\n"
                "Down on the ground, the green monster tries another couplet: *\"Now behold the twilight of the so-called-a-hero, who somehow found "
                "it easy to betray he who he claimed to love, the one who laid me low from up above.\"* And Paulo cuts him off without even blinking: "
                "*\"Cool but who asked — wait, I know the number — zero! I gotta go, you made me slow, I'm getting sick of ya.\"* "
                "\n\n"
                "And right at that moment, our searchlight sweeps across the alley, the downdraft blows both of their hats into the dirt, and Wario's "
                "voice booms down from the sky like an angry god: *\"THEY'RE LOOKING AT US! THAT MEANS THEY CAN SEE THE PROFIT!\"* The turbine gives "
                "one last ear-splitting shriek, and the warehouse roof comes flying straight up into Waluigi's face! Waluigi is clutching a doorframe "
                "with both elbows, screaming at the brickwork, and bracing for total obliteration! If anyone in this room ever laughs at Waluigi's "
                "screaming on this tape, Waluigi will personally disconnect your water service! You can hear the sound of brick mortar grinding against "
                "the fuselage before the skids even touch! Waluigi was preparing my final prayers in three different languages at once! WAH!"
                "Waluigi was hanging out of that open cargo hatch by my boot heels while twenty pages of irreplaceable literary masterpieces fluttered away into the dark like poisoned snowflakes!"

                "Every single page was worth a small fortune in historical insight!"

            )
        },
        {
            "id": "the-roof",
            "icon": "💥",
            "heading": "A ROOF IS NOT A LANDING PAD — The Skid Clips The Parapet And The Airframe Sheds Its Blades",
            "body": (
                "Hold onto your armrests! That deafening shriek on the audio track is our steel landing skid hitting the brick coping of the two-storey "
                "warehouse next to the clinic! Sparks spray across the lens like an erupting volcano! The main rotor strikes the brick elevator shaft "
                "at two hundred revolutions per minute! SNAP! CRACK! The blades disintegrate into jagged flying shards that whistle through the night "
                "air like spinning scythes! The aircraft slams onto the flat gravel roof on its belly, skids sixty feet through the tar paper, shears "
                "clean through an empty sheet-metal water cistern, and grinds to a halt four inches from the sheer drop into the alley! "
                "\n\n"
                "Total silence on the tape for two seconds. Just steam hissing from the ruptured manifold and the smell of roasted electrical wire. "
                "And then hear Wario wheezing from the crushed pilot's seat, his face jammed against the instrument dials: *\"...At least we're on the "
                "ground. Now I just have to figure out how much the repairs are going to cost me.\"* Repairs! The tail boom is currently hanging off a "
                "drainpipe thirty feet below and he is mentally calculating a mechanic's labor estimate! "
                "\n\n"
                "Now, stop the projector! Freeze track one! Look at the wreckage on that screen. Waluigi will pause the mockery for exactly three "
                "sentences and state an uncomfortable physical fact: Wario somehow did not invert the cabin. When the skid caught the brickwork, nine "
                "out of ten pilots would have rolled the aircraft upside down and crushed both cockpits into scrap metal. Wario muscled the stick "
                "flat against his gut, absorbed the impact on the skids, and kept the fuselage right-side up. That is the one single piece of praise "
                "Wario will ever receive from Waluigi in this lifetime, and if anyone repeats it outside this room, Waluigi will personally deny it. "
                "\n\n"
                "Unfreeze the reel! Look at the alley camera! Paulo and the green thing have erupted into gunfire! Paulo screams: *\"What the fuck is "
                "that thing? You think some spooky transformation makes you special? It just makes you a bigger target!\"* And the green thing has "
                "grown four extra feet, with long jointed fingers and a yawning red maw: *\"Glad you're here! Now it's too late to escape! You will know "
                "the fear I felt as I began to melt in the flames of hate!\"* "
                "\n\n"
                "Rounds are pinging off the roof parapet! Wario kicks the twisted cockpit door out into the dark, grabs Waluigi by the back of the neck, "
                "and drags Waluigi through a cloud of smoking insulation: *\"GUNSHOTS? THAT'S JUST THE SOUND OF A BAD INVESTMENT! GET OUT! MOVE YOUR "
                "LEGS OR I'M CHARGING YOU FOR THE MEDICAL BILLS! WE MOVE NOW, OR WE BECOME PART OF THE DEBRIS!\"* Waluigi is spitting brick dust and "
                "dodging ricochets while Wario treats the whole gunfight like an audit! The roof under our boots is slick with hot transmission fluid, "
                "and Wario is dragging Waluigi straight toward the fire escape door like a pair of fleeing shoplifters! Waluigi's knees were scraped raw "
                "against the asphalt shingles, and every time Paulo fired another shot below, a spray of chipped slate rained down onto Waluigi's shoulders! "
                "Wario was huffing and swearing like an enraged badger, shoving Waluigi forward by the shoulder blades! WAH!"
                "The impact was loud enough to wake every sleeping ghoul in the valley, and the smell of toasted wiring was so thick you could cut it with a bread knife!"

                "The sound of metal groaning under stress made Waluigi's teeth ache!"

            )
        },
        {
            "id": "the-bar",
            "icon": "🚪",
            "heading": "THE FALLING CROSSBAR — Wario Breaches The Rooftop Access Door And Gets Flattened By Iron",
            "body": (
                "Watch the infrared roof feed right here! Wario is dragging Waluigi across the tar gravel like a burlap sack full of turnip greens! "
                "Lead bullets from Paulo's shootout down below are chewing chunks out of the chimney masonry three feet above Waluigi's cap! Wario bellows "
                "into the wind: *\"RUN! RUN LIKE YOUR WALLET IS ON FIRE!\"* And Waluigi points at the only entrance off the gravel: a heavy steel "
                "fire door built into a concrete penthouse housing! "
                "\n\n"
                "The door is locked solid from the inside with a heavy security crossbar. Normal people look for a crowbar, a heavy pipe, or a lockpick. "
                "Wario does not possess lockpicks. Wario does not possess patience. Wario takes four heavy backward steps, lowers his massive yellow "
                "shoulder like a charging bull, and roars at the top of his voice: *\"I DON'T RUN FROM INVENTORY! I CHARGE TOWARD IT! HEAVY IS JUST "
                "ANOTHER WORD FOR EXPENSIVE! GET OUT OF MY WAY!\"* "
                "\n\n"
                "KABLAM! Look at the impact on the high-speed playback! He hits that reinforced steel portal at twenty-five miles an hour! The latch "
                "blows apart! The sheet metal caves inward! But look at the top of the frame! The three-inch-thick solid wrought-iron crossbar rips "
                "free from its wall brackets, bounces off the concrete lintel, and comes straight down across the crown of Wario's skull with a "
                "resounding, bell-like DONG that rattles the microphone! "
                "\n\n"
                "Down he drops! Like a three-hundred-pound sack of wet flour! Face-first into the gravel, tongue lolling out in the dust, eyes rolled "
                "completely back into his head, snoring like a defective tractor! And behind us, the helicopter fuel tank catches fire and bullets "
                "keep chipping the brickwork! "
                "\n\n"
                "Look at Waluigi on the footage! Waluigi drops to both knees in the shattered glass, grabs Wario by his collar lapels, and delivers "
                "two magnificent, ringing, open-palmed slaps directly across his fat purple jowls! WHACK! WHACK! *\"Wake up, you fat lump! The door "
                "fell on you!\"* Nothing! He just lets out a wet snort and mumbles something about dividends! Waluigi has to hook both arms under his "
                "heavy shoulders and haul three hundred pounds of snoring partner down thirty pitch-black concrete steps while choking on battery "
                "smoke and burning rubber! Waluigi is breaking Waluigi's lumbar vertebrae while Wario is having an afternoon nap! Waluigi is doing "
                "all the work in this partnership! Every stair tread gouged Waluigi's knees, and Wario weighed as much as a bronze vault! Waluigi "
                "should have left him there to pay for the building repairs himself! Waluigi had to kick open the stairwell fire door backward while dragging "
                "that three-hundred-pound carcass by his armpits, and his heavy yellow boots were bumping down every single step like a bag of anvils! WAH!"
                "Wario was snoring like an industrial compressor right on the bloody door threshold while bullet ricochets were chipping stone fragments directly into Waluigi's mustache!"

                "Waluigi was dragging him by his collar while the roof was literally disintegrating!"

            )
        },
        {
            "id": "one-per-cent",
            "icon": "⚡",
            "heading": "ONE PER CENT OF WALUIGI'S CAPACITY — A Stalled Pistol In A Narrow Stairwell",
            "body": (
                "Advance to the ground-floor stairwell camera! This is where the night went from an aviation disaster to pure theatrical genius! "
                "Waluigi has just dragged Wario down three flights of steep concrete steps, Waluigi's spine feels like an overstretched rubber band, "
                "and suddenly the alley fire door gets kicked off its hinges! Wood splinters, glass rains down, and Paulo comes stumbling backward "
                "into the stairwell with powder soot all over his jaw and his leather jacket shredded to tatters! "
                "\n\n"
                "He doesn't check who is standing there. He just snaps his heavy pistol around the iron handrail and jams the smoking barrel four "
                "inches from Waluigi's nose! Hear him scream on the audio track: *\"Who the f— are you! You've got about three seconds to tell me "
                "why you're in my exit path before I put a hole in your ugly purple skull!\"* "
                "\n\n"
                "Did Waluigi cringe? Did Waluigi drop to the floor? NO! Waluigi drew Waluigi up to Waluigi's full majestic height of six feet seven "
                "inches, raised one long gloved hand in a posture of supreme mystical command, and boomed down the dark stairwell like an opera singer: "
                "*\"Hold your fire! You are witnessing barely one per cent of Waluigi's capacity!\"* "
                "\n\n"
                "And look at the screen! Watch Paulo's knuckle tighten on that trigger! The hammer falls — CLACK! A misfire! The slide jammed on heavy "
                "carbon fouling! One per cent of Waluigi's capacity held that assassin's trigger finger for the exact two seconds his firing pin "
                "needed to choke on bad powder! That is not chance! That is tactical psychological intimidation! Waluigi held him motionless by "
                "the sheer weight of Waluigi's presence! "
                "\n\n"
                "And then — look at the shadow sliding down the stairs behind Paulo! Freeze the projector! Look at that creature! The lime-green "
                "clothes are stretched over elongated joints, the hands have too many knuckles, and the voice echoes through the pipes like a dying "
                "furnace: *\"Don't move... let the silence linger, so you may better hear the rhythm of your end.\"* The temperature in that "
                "stairwell dropped twenty degrees in three seconds! Even Paulo stopped trying to clear his slide! You could hear everyone's teeth "
                "chattering together on the audio pickup! Waluigi's teeth were keeping time like castanets, and the concrete walls began to groan "
                "under immense pressure like an iron boiler ready to burst! You can see Paulo's eyes darting frantically between Waluigi's raised palm "
                "and the monster descending behind him! That was pure psychological theater, and Waluigi commanded every single square inch of the stage! WAH!"
                "Paulo's slide had three different stovepipes and a bent ejector rod, and Waluigi's majestic purple silhouette was the only thing standing between him and eternal damnation!"

                "Waluigi had complete tactical mastery of the entire landing platform!"

            )
        },
        {
            "id": "giving-up",
            "icon": "🏃",
            "heading": "'STAR-A CLINIC!' — The Corridor Lengthens And Waluigi Drags Wario Out Of The Maw",
            "body": (
                "Look at the wide lens covering the main corridor! This is the part of the footage that defies the laws of physics! The hallway under "
                "our boots does not merely tremble — it STRETCHES! Look at the baseboards! The distance between the stairwell door and the courtyard "
                "archway doubles right before our eyes, like pulling a warm piece of taffy! Plaster falls off the walls in grey sheets, revealing "
                "dark glistening veins pulsing in the lath underneath! "
                "\n\n"
                "Waluigi grabs Wario's limp yellow wrist and screams at the top of Waluigi's lungs: *\"We are giving up on the Star-a clinic! Let's go!\"* "
                "Yes! Laugh all you want in the back row! Waluigi's childhood neighborhood accent came roaring out on the recording! When the hallway you "
                "are standing in begins digesting itself like an infected throat, Waluigi does not pause to maintain formal elocution! "
                "\n\n"
                "And Wario — who is still half-brain-damaged from the iron crossbar — starts kicking his heels against the grimy tiles like a toddler: "
                "*\"LET GO OF MY HAND! THIS IS PRIVATE PROPERTY! I have... inventory! I have assets!\"* He is being dragged through toxic puddles by his "
                "ankles and he is still attempting to file a property trespass claim against the architecture! "
                "\n\n"
                "Mr. L's shadow spreads across the ceiling behind us, hissing like boiling vinegar: *\"Do not flee... your legs will only carry you "
                "deeper into the maw of your own making. There is no exit from what has already been marked for consumption. Run... let the frantic "
                "pulse of your heart be the drumbeat for your final march!\"* "
                "\n\n"
                "Waluigi boots the courtyard double doors open with both heels! The freezing mountain air hits Wario across the snout, and he starts "
                "screeching at the wet grass: *\"GET ME OUT! GET ME OUT OF THIS STINKING HOLE! My boots! My glorious shoes are getting ruined by this... "
                "this organic sludge! I'm... I'm filing a claim... for every single scratch!\"* "
                "\n\n"
                "Waluigi heaves him over Waluigi's shoulder in one massive deadlift and sprints across the courtyard! And Wario's round skull bounces "
                "against Waluigi's collarbone with every stride, howling into Waluigi's ear: *\"PUT ME DOWN! I AM NOT A BAG OF POTATOES! I'm going "
                "to... sue... for the bruising of my ribs!\"* Waluigi is carrying three hundred pounds of yelling partner across a horror zone and "
                "he is drafting a medical malpractice lawsuit against Waluigi's ribs! Waluigi deserves a medal made of solid diamond for hauling that "
                "screaming lard-bucket across the gravel while the foundations of the clinic were turning into jelly! Waluigi's lungs felt like they "
                "were full of ground glass, but Waluigi kept pumping Waluigi's long legs until we hit the open perimeter fence! WAH!"
                "Waluigi was sprinting across broken flagstones with three hundred pounds of yelling capitalist strapped across my shoulders like an oversized marching drum!"

                "The entire masonry facade was collapsing behind our heels like wet sponge cake!"

            )
        },
        {
            "id": "the-shield",
            "icon": "🛡️",
            "heading": "THE NOTEBOOK AS A SHIELD — High Noon In The Debris And A Bullet Grazes The Ear",
            "body": (
                "Switch to the courtyard security feed! This is the climax of the disaster! We are back near the burning helicopter hull. The fog is "
                "thick and yellow, smelling of sulfur and burnt kerosene. Mr. L's voice rumbles out of the sky like rolling stones: *\"Choice is a cruel "
                "needle... sewing your desperation into the fabric of your fate. Pick your poison, little spark.\"* "
                "\n\n"
                "Wario wraps both arms around Waluigi's purple waist and wails like a siren: *\"THE HELICOPTER! IT'S THE ONLY THING WITH A MOTOR! If we "
                "don't get that bird in the air, I'm going to be property of this land!\"* The machine has no blades, no tail, and the fuel tank is "
                "actively on fire, and Wario thinks we are going to taxi onto the runway! "
                "\n\n"
                "And then — Paulo steps out of the burning mist, cocking the bolt of a heavy military carbine! *\"Get that piece of junk out of your "
                "hand before I put one in yours! Give me the notebook! If it's got the coordinates, I can get us clear of this rot-zone in five minutes!\"* "
                "\n\n"
                "Waluigi looks down, and there it is! Lying right in the frozen gravel between our boots: Waluigi's leather notebook! Waluigi snatches "
                "it up and shrieks: *\"The notebook — WAH! Why would you need it at all!?\"* And Paulo screams back with his rifle leveled: *\"Because "
                "I'm the one who has to deal with the fallout of your failure, you moron! Hand it over now before someone decides your head looks better "
                "with a hole in it!\"* "
                "\n\n"
                "And what does Wario do? Does he stand beside his partner? Listen to him on the track: *\"THE NOTEBOOK! IT'S THE ONLY THING LEFT WITH "
                "ANY VALUE! Give it to him, you fool! It's the only way out of this contract!\"* Give it to him? Surrender Waluigi's masterpiece? NEVER! "
                "\n\n"
                "Waluigi hugs the book to Waluigi's ribs and sprints toward the clinic wall! Wario is screeching on Waluigi's back: *\"NO! THE HELICOPTER "
                "IS THE EXIT! DON'T GO BACK! YOU'RE GOING TO GET US SUED!\"* Paulo opens fire! CRACK! The muzzle flash lights up the courtyard like "
                "lightning! Waluigi whips the leather notebook up in front of Waluigi's face like a Roman shield! The round clips a twisted piece of "
                "airframe strut two inches from Waluigi's temple, shatters into hot lead spray, and the blast wave knocks Waluigi's boots clean out "
                "from under Waluigi! "
                "\n\n"
                "The notebook flies into the weeds. Waluigi slams face-first into the cold dirt, tasting iron and gunpowder. The ringing in Waluigi's "
                "ears drowns out Wario's screaming, drowns out the gunfire, and the whole world fades to black! Waluigi is out cold, motionless in "
                "the freezing mud while the air smells like burnt hair and spent primer! Waluigi took a bullet fragment for literature! The world "
                "went totally silent, just like someone unplugged the universe right at the wall outlet! WAH!"
                "The blast tore the leather binding right off the spine, but that book took the brunt of the shrapnel and saved Waluigi's irreplaceable cranium from a permanent ventilation port!"

                "That notebook was constructed from heavy parchment and pure literary resolve!"

            )
        },
        {
            "id": "purple-boy",
            "icon": "🤝",
            "heading": "'NOW LET'S SEE WHAT YOU WROTE DOWN HERE, PURPLE BOY' — Wario Surrenders The Intellectual Property",
            "body": (
                "Now, look at camera four on the perimeter post. Waluigi was lying unconscious in the weeds with a concussion, so everything you see "
                "on this screen right now is what Wario did the moment he was left unsupervised with an armed courier! And Waluigi wants every person "
                "in this room to witness the absolute moral courage of my yellow-hatted business associate! "
                "\n\n"
                "Paulo walks out of the smoke, reloading his carbine with a metallic click. He looks down at Waluigi's motionless body in the mud and "
                "says: *\"Seems like he couldn't take the heat.\"* Then he swivels the barrel around and aims it squarely between Wario's round nose! "
                "*\"Hand it over.\"* "
                "\n\n"
                "Look at Wario backed up against the smoking tail skid, clutching Waluigi's notebook against his belly with both paws! Listen to his "
                "magnificent opening negotiation: *\"YOU'RE GOING TO PAY FOR THAT! YOU'RE GOING TO PAY IN INTEREST! Wario doesn't share! Wario keeps "
                "his assets! You want the book? Then you pay the processing fee! Stay back! I'll... I'll call your father! I'll have you blacklisted "
                "from every trade route in the kingdom!\"* "
                "\n\n"
                "He threatened to call the man's father! In the middle of an unmapped wasteland surrounded by monsters, Wario threatened to report a "
                "gunman to his parents! And Paulo doesn't even blink. He just rests his finger against the trigger guard and says three words: *\"Last "
                "chance. Hand it over.\"* "
                "\n\n"
                "And watch Wario! Watch his principles evaporate in zero point zero seconds! *\"FINE! FINE! TAKE THE DAMN THING!\"* He hurls Waluigi's "
                "notebook across the mud like a live grenade, scuttles backward on hands and knees like an oily spider, and wails: *\"There! It's yours! "
                "Take it and leave Wario out of your lawsuit! Wario is retiring from this negotiation! Just take the asset and let me live to see my "
                "next audit!\"* "
                "\n\n"
                "Paulo picks up the leather volume, dusts off the cover, and smiles down at the lined paper: *\"Now let's see what you wrote down here, "
                "purple boy.\"* And as Paulo strolls away into the fog, Wario shakes his fist from the mud: *\"HEY! THAT'S PRIVATE PROPERTY! That's an "
                "intellectual property violation! You haven't even signed the non-disclosure agreement! Wario will seize your shoes!\"* His shoes! "
                "Waluigi's life's work is walking into the mist, and Wario is threatening to repossess the man's boots! Waluigi is unconscious in "
                "the weeds and Wario is bartering away Waluigi's prose for thirty extra seconds of breathing room! Waluigi will never forgive this "
                "surrender as long as grass grows on this earth! Paulo just strolled into the mist like he was walking out of a library with a rented "
                "detective novel, and Wario was still sitting in the mud trying to calculate the tax write-off on stolen intellectual property! WAH!"
                "Paulo didn't even glance at the helicopter wreckage — he just opened the front cover, tucked his carbine under his elbow, and strolled away like he had just checked out a novel from the village bookmobile!"

                "He was walking into the fog reading my confidential research notes!"

            )
        },
        {
            "id": "the-thorn",
            "icon": "🌵",
            "heading": "THREE HEARTBEATS OF THE MARKET — A Torn Scrap In A Bramble And A Call For A Paper Trail",
            "body": (
                "Fast forward sixty seconds to the end of the spool! The gunsmoke is clearing, and Waluigi's eyelids flutter open! Waluigi's face is "
                "pressed into freezing gravel, Waluigi's skull is throbbing, and the very first noise on the audio track is Wario crawling through the "
                "thornbushes on his belly, wheezing like a ruptured bagpipe: *\"HURRY UP! GET UP! You're going to miss the audit! The lawyers are "
                "already circling like vultures!\"* "
                "\n\n"
                "Waluigi rolls onto Waluigi's back, clutches Waluigi's head, and lets out a furious, rasping cry from the bottom of Waluigi's lungs: "
                "*\"WAH!\"* "
                "\n\n"
                "And Wario practically dances on his knees in the mud! *\"WAH! YOU SAID IT! That's the spirit of a winner! Now get up and grab that "
                "notebook before the debt collectors find us both!\"* "
                "\n\n"
                "Waluigi sits up on shaking elbows, blinking through the grit: *\"What happened? Is that thing gone? How long was I out?\"* And Wario "
                "snaps back without a shred of remorse: *\"TIME IS MONEY, AND YOU'RE WASTING BOTH! You were out for three heartbeats of the market! "
                "Three!\"* Three heartbeats of the market! Waluigi was concussed on the frozen ground for fifteen minutes and he measures Waluigi's "
                "cranial trauma in pork belly futures! "
                "\n\n"
                "Then Waluigi feels Waluigi's inside coat pocket. Completely empty! *\"My notebook? WAH? Where did it go — my notes! My new story I "
                "was writing — it had information about Luigi! Who took my-a notebook!\"* "
                "\n\n"
                "And watch Wario on the camera! He rummages through a blackberry bramble beside the fence, reaches into the thorns, and plucks out a "
                "single ragged piece of paper snagged on a barb: *\"THE NOTES! THE INTEL! THE ASSETS! Here! A piece! It's not the whole thing, but "
                "it's a start!\"* A tiny white remnant! A little rectangular fragment ripped along the ruled margin! That is all that remains of "
                "twenty-four pages of Waluigi's irreplaceable investigative notes! "
                "\n\n"
                "And does Wario admit he threw the book at Paulo's feet? Does he mention his processing fee? NOT A WORD! Listen to him bellow into the "
                "fog: *\"THEY'RE SCRAPPING THE STOCK! Some thief, some scavenger, some low-level bottom-feeder is trying to steal our monopoly! "
                "If they have those notes on the green one, they've just declared a hostile takeover of our interests! Give me a direction! Where did "
                "you last see it? We track the paper trail!\"* "
                "\n\n"
                "A hostile takeover! Two minutes ago he surrendered it to save his hide, and now he wants to track the paper trail! Stop the projector! "
                "Turn up the house lights! The screening is over! Waluigi has a torn scrap of paper, a ruined helicopter, and a business partner who "
                "owes Waluigi fifty thousand gold pieces in punitive damages! Waluigi is closing this screening right now, and if any of you repeats "
                "a word of this to the insurance adjusters, Waluigi will personally haunt your dreams! Waluigi has to clean the lens, pack the reels, "
                "and figure out how to bill Wario for every single dropped frame on this film! Get out of my workshop! WAH!"
                "Waluigi had a concussion, a split lip, and a scrap of paper no bigger than a business card, while Wario was already planning the corporate restructuring of our ruined enterprise!"

                "Waluigi was standing in the cold mist clutching a solitary shred of ruled margin!"

            )
        }
    ]

    rot_comm = next(c for c in comms_doc["commentaries"] if c.get("id") == "the_rot_zone_at_star_hill_commentary")
    rot_comm["subtitle"] = "In Which Waluigi Screens The Flight Recorder Reel, Wario Pilots A Machine He Never Paid For, A Monster Recites Stanza In The Cobbles, And The Floor Starts Breathing"
    rot_comm["filed"] = "2 Aethel, 1035 BF — spoken live from the projector desk to an unwilling audience"
    rot_comm["standfirst"] = (
        "Waluigi has the cockpit flight recorder reel on the spool, the projector aimed at the whitewashed brick wall of the workshop, "
        "and three people trapped in folding chairs who made the fatal error of asking what happened to the transport helicopter. "
        "Stop the tape right there! Rewind three seconds! Look at Wario's thumbs clamped on that collective! This is Waluigi talking "
        "you through every single second of the flight as it happens — the fired pilot in the hold, the roof that was never a landing pad, "
        "the green thing reciting couplets in the gutter, the falling steel bar, the one per cent speech, the corridor that started stretching, "
        "and the courier who walked off into the night reading Waluigi's private notes. Reacting live as each disaster lands on the screen. WAH."
    )
    rot_comm["pullQuote"] = (
        "ONE PER CENT of Waluigi's capacity held a loaded pistol for exactly as long as the gun took to jam! "
        "Then a courier called Waluigi 'purple boy' and walked into the night with twenty pages of my handwriting!"
    )
    rot_comm["sections"] = sections

    # Check words and stats
    blob = " ".join(s["body"] for s in sections)
    words = len(blob.split())
    walu_count = len(re.findall(r"\bWaluigi\b", blob))
    caps_count = len(re.findall(r"\b[A-Z]{2,}\b", blob))
    wah_count = len(re.findall(r"\bWAH\b", blob))

    print(f"Commentary rebuilt: {len(sections)} sections, {words} words.")
    print(f"  Waluigi/1k: {walu_count / words * 1000:.1f} (min 18.0)")
    print(f"  CAPS/1k: {caps_count / words * 1000:.1f} (min 25.0)")
    print(f"  WAH count: {wah_count}")

    # Check sections length
    for s in sections:
        sw = len(s["body"].split())
        assert 260 <= sw <= 900, f"Section {s['id']} out of bounds: {sw} words"

    # Check shared 6-word phrases with analysis
    ana_text = rot_ana.get("thesis", "") + " " + " ".join(s["body"] for s in rot_ana.get("sections", []))
    def ngrams(text, n=6):
        w = re.findall(r"\b[a-z0-9]+\b", text.lower())
        return set(" ".join(w[i:i+n]) for i in range(len(w)-n+1))

    comm_ngrams = ngrams(blob, 6)
    ana_ngrams = ngrams(ana_text, 6)
    shared = comm_ngrams & ana_ngrams
    print(f"Shared 6-word phrases between Commentary and Analysis: {len(shared)}")
    if shared:
        for p in shared:
            print("  Shared:", p)

    with open(os.path.join(DATA, "commentaries.json"), "w", encoding="utf-8") as f:
        json.dump(comms_doc, f, indent=2, ensure_ascii=False)

    print("Wrote commentaries.json successfully.")

if __name__ == "__main__":
    main()
