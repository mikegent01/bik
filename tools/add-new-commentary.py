#!/usr/bin/env python3
import json
import re

new_commentary = {
    "id": "feyward_the_soul_ring_and_the_twenty_one_day_cut_commentary",
    "sourceArticle": "feyward_the_soul_ring_and_the_twenty_one_day_cut",
    "title": "The Soul-Ring, the Feywild Wildfire, and the Twenty-One Day Cut",
    "subtitle": "Waluigi's Cut: An Unlocked Manacle, a Dwarf's Chivalric Bargain, a Burning Corridor, and the Goblin Wall Clock",
    "filed": "10 October 2026",
    "timeCode": "TC:0922-09-02/FEY-2/CUT",
    "kicker": "THE WALUIGI CUT · FIELD AUDIT & DESK OBSERVATION",
    "pullQuote": "Cornburary brought a clipboard to a burning haunted house; Hjumpik gave away an ancient soul artifact for a smile; and I discovered our whole universe has an expiration date stamped on a goblin tavern wall. WAH!",
    "standfirst": "Waluigi watches the corridor minutes unfold from his desk, breaking down the exact moment Toad Lee woke up screaming, why an Iron Legion quartermaster tried to sue a collapsing ceiling, how emotional resonance burns purple, and why twenty-one days is twenty days more than Waluigi wanted to spend in the Feywild.",
    "sections": [
        {
            "id": "cut-sec-roast-and-manacles",
            "icon": "🍄",
            "heading": "Toad Lee Wakes Up Tied Like A Holiday Ham While Waluigi Enjoys Loose Wrists",
            "body": """Here is how the second chapter of this disaster opens: Toad Lee wakes up with his mushroom cap jammed against a damp baseboard, kicking his stubby legs like an overturned beetle, screaming at the top of his lungs. Waluigi was already awake. Waluigi has been awake for twenty minutes because Waluigi does not sleep on floors that smell like ancient cabbage and unwashed infantry socks.

Toad Lee looks down at his wrists. His cold-forged iron cuffs are latched dead tight, pinned behind his back. Then Toad Lee turns his bulging eyes toward Waluigi. Waluigi is sitting gracefully against the wainscoting, holding both wrists loose in Waluigi's lap with the clasps already sprung wide. Next to Waluigi, Hjumpik Deldkur is already testing the tension on his heavy bearded axe.

Toad Lee goes completely purple in the face and screeches: **"Waluigi! Why am I the only one who looks like a packaged roast?!"**

Waluigi did not even blink. Waluigi leaned forward, tapped the side of Waluigi's nose, and delivered pure tactical wisdom straight into Toad Lee's panicked face: **"Because an unlocked captive is a surprise, Toad. A locked captive is a baseline expectation."**

LOOK AT THE GENIUS OF IT! ABSOLUTE TACTICAL PERFECTION! If every single prisoner sits there untied and whistling, the guards get nervous and start stabbing through the door with halberds! But if you leave the loud mushroom tied up like a holiday ham at a Midland harvest festival, the guards look in the peephole, see one squirming vegetable shouting obscenities, and assume everything is perfectly under control! Waluigi slipped Waluigi's lock three seconds after the door swung shut because Waluigi always keeps a tension wire sewn into the left cuff of Waluigi's purple overalls! Hjumpik popped his with raw dwarf wrist torque! Toad Lee, meanwhile, was thrashing around like a sacked potato, demanding customer service from a dungeon! WAH!"""
        },
        {
            "id": "cut-sec-cornburary-and-clipboard",
            "icon": "📋",
            "heading": "Quartermaster Cornburary Brings A Clipboard To A Haunted House Collapse",
            "body": """The heavy oak door swings open, and who walks in? Not the execution squad. Not an astral dragon. No, it is Quartermaster Cornburary of the Iron Legion Colour Division, flanked by two pikemen who look like they would rather be anywhere else in creation.

Now, Waluigi needs to establish this for the permanent historical record because people keep confusing Cornburary with Thornbury: Thornbury is the high-and-mighty archmage in New Donk who drinks out of spun crystal and files petitions about Ley-line zoning. Cornburary is the quartermaster who measures field rations with a brass caliper, sleeps with an inventory ledger under his pillow, and genuinely believes that you can arrest an earthquake if you cite the proper municipal ordinance!

Cornburary marches straight into this moss-choked, root-tangled ruin, clears his throat with the dry rasp of an ungreased cart axle, points his quill at the ceiling, and bellows: **"This entire wing is an unauthorized structural alteration under Section Fourteen of the Cordon Mandate!"**

Waluigi stared at him. The ceiling is literally dripping fey dew and pulsating with eerie purple bioluminescence, and this idiot is waving an invoice!

The lead Legion pikeman didn't even turn his head as he gripped his polearm white-knuckled and muttered back: **"The only thing altering here, Cornburary, is whether your clipboard survives the next five seconds."**

Waluigi almost stood up and applauded! The Iron Legion is supposed to be the terrifying mechanical hammer of the Midlands, marching across frontiers with banners and siege engines, and their supply clerk is treating a decaying Feywild fortress like an unpermitted gazebo in a suburban backyard! You cannot write comedy this good! Waluigi wrote that line down on Waluigi's cuff immediately! WAH!"""
        },
        {
            "id": "cut-sec-lady-aurelia-standoff",
            "icon": "👑",
            "heading": "Lady Aurelia Arrives With Seven Inches Of Frost And An Unimpressed Glare",
            "body": """Before Cornburary could check off another box on his unauthorized parchment, the temperature in the corridor dropped thirty degrees in half a heartbeat. Waluigi felt the hairs on Waluigi's mustache freeze stiff like tiny violet icicles.

The double doors at the far end of the corridor groaned open, and Lady Aurelia entered the hall.

She did not walk; she drifted like winter fog rolling over a graveyard. Her gown was spun frost and pale silver lace, trailing across the rotting carpet without picking up a single speck of dust. In her right hand she carried a silver rapier whose hilt was carved from a single piece of frozen starlight, and around her shoulders hung a ruff of needles that hissed whenever her mood flared. Her eyes were chips of glacier ice, burning with that cold, sapphire light that tells you someone stopped caring about mortal laws roughly four hundred years ago.

The Colour Division guards immediately froze in place. Cornburary's quill hovered over his inkpot, shaking so violently that a drop of black ink spattered straight across his thumb.

Aurelia did not spare Cornburary a single glance. She swept right past the trembling Iron Legion squad, her gaze locking onto Hjumpik like a falcon fixing on a mountain hare. She stood over the dwarf, letting the cold radiating from her skin push the damp rot back into the floorboards, radiating pure ancient dominance. Waluigi stayed completely still against the wall. When a fey noblewoman looks ready to turn an entire hallway into an ice sculpture, Waluigi lets the dwarf do the talking! That is called survival arithmetic! WAH!"""
        },
        {
            "id": "cut-sec-soul-ring-bargain",
            "icon": "💍",
            "heading": "Hjumpik Drops A Family Heirloom On The Table And Breaks Waluigi's Heart",
            "body": """And what does Hjumpik Deldkur do? Does he raise his shield? Does he draw his steel? NO! Hjumpik plants his boots, looks this seven-foot frost queen straight in the face, reaches into the collar of his gambeson, and pulls out the Deldkur soul-ring!

Waluigi nearly screamed! Waluigi's soul left Waluigi's body! That ring is carved star-metal, forged in the deep mountain furnaces of the Deldkur clan before the Midlands even had a name, humming with the trapped soul-light of seven generations of dwarf ancestors! It is worth more than three entire merchant galleons loaded with raw gold! And Hjumpik is holding it out in his scarred palm like a copper coin he found behind a tavern barrel!

Lady Aurelia looked down at the ring, her lip curling with royal disgust: **"You come into my house with iron and dwarf-pride, offering words like honour to an heir of winter."**

Hjumpik didn't flinch. The dwarf stepped into her personal space, his eyes dead level with her frozen collarbone, and growled: **"Not words, my Lady. Steel and soul. Take the ring, or watch your halls burn down to moss."**

Waluigi was sweating bullets behind Waluigi's mustache! If she rejected the offer, she was going to turn everyone in the room into frozen garden gnomes! But Aurelia reached out with slender, pale fingers, touched the star-metal, and the moment her skin made contact, a shiver went through the entire manor. She accepted the pledge. Hjumpik bought our lives with a family treasure, and Waluigi had to watch millions of gold coins vanish into a fairy lady's pocket without Waluigi getting a single percentage point commission! THE PAIN! WAH!"""
        },
        {
            "id": "cut-sec-fey-wildfire",
            "icon": "🔥",
            "heading": "The Hallway Catches Violet Fire Because Fey People Can't Control Their Mood Swings",
            "body": """You would think that once the noble lady took the multi-million-coin soul ring, things would calm down and everyone could negotiate like civilized beings. NO! THIS IS THE FEYWILD! In the Feywild, when someone experiences an emotional flare-up, the ambient weather immediately tries to incinerate everyone standing in a forty-foot radius!

The second Aurelia's cold fingers closed around the dwarf ring, her grief, her suppressed fury, and three centuries of aristocratic resentment detonated through the corridor like an astral powder keg. The creeping green moss crawling along the ceiling molding suddenly flared bright violet. Then the violet moss ERUPTED INTO FLAME!

Violet wildfire! Everywhere! Rolling down the faded silk tapestries, crawling along the carved baseboards, licking across the heavy doorframes in sheets of crackling purple heat! It didn't burn like normal dry pine firewood either; it hissed and hummed with raw fey energy, filling the air with the suffocating stench of burnt lavender, crushed clover, and boiling ozone!

Toad Lee began shrieking at the top of his lungs, rolling across the floorboards trying to put out imaginary flames that hadn't even touched him yet. Cornburary was waving his burning clipboard in wild circles like a lunatic signaling a warship in a gale. Waluigi had to scramble on Waluigi's hands and knees across the sizzling floorboards to scoop up Waluigi's copper lock picks before the heat melted them into useless metal slag! Waluigi's purple hat was smoking! Waluigi's mustache tips were singed! Never make an emotional business deal in an enchanted hallway! The fey have zero emotional discipline, and Waluigi always ends up smelling like burnt garden salad! WAH!"""
        },
        {
            "id": "cut-sec-combat-chirurgeon",
            "icon": "🩺",
            "heading": "The Cordon Combat Chirurgeon Decides Screaming At The Fire Is Better Than Bandages",
            "body": """While the purple wildfire raged along the ceiling rafters and smoke filled the corridor, the Iron Legion squad completely lost what little military discipline they had left. Out from the swirling lavender smoke stumbled Combat Chirurgeon Vaelen, lugging a heavy brass-bound field trunk that clattered with iron bone saws, leather tourniquets, and glass vials of smelling salts.

Vaelen was not bandaging wounds or applying gentle field dressings. Vaelen was screaming at the ceiling in three different Midland provincial dialects, kicking over flaming armchairs, and slinging heavy wet salt-canvas over a fallen pikeman who had taken a massive chunk of falling plaster directly to the collarbone!

Waluigi watched this supposed medical professional grab a brass syringe full of glowing amber liquid, stab it directly through a soldier's thick woolen tunic without even bothering to look for a vein, and yell: *UP AND AT 'EM, PRIVATE! YOU DIE ON YOUR OWN SHIFT!*

The soldier bolted straight upright with eyes as wide as saucers, grabbed his fallen halberd, and immediately charged headfirst into a solid mahogany wardrobe with a deafening crash!

Waluigi looked at Hjumpik. Hjumpik looked at Waluigi. Even the dwarf, who respects military hierarchy and martial grit more than common sense, shook his bearded head in absolute disgust. The Cordon Mandate claims their combat medics are elite field surgeons trained in tactical battlefield preservation. In reality, they are stressed-out butchers with brass badges who use salt blankets, screaming threats, and raw adrenaline to keep troops marching through burning hallways! If Waluigi ever gets wounded in this dump, nobody let Vaelen touch Waluigi with a needle! Waluigi would rather let Toad Lee apply a swamp mud poultice! WAH!"""
        },
        {
            "id": "cut-sec-brad-tea",
            "icon": "🍵",
            "heading": "Brad Shows Up With A Silver Tray While The Roof Is Actively Caving In",
            "body": """Just as the structural beams were groaning and threatening to collapse onto everyone's heads, the pantry door creaked open, and who walks out through the violet smoke? BRAD THE WAITER!

Yes, THAT Brad! The very same butler-waiter who was pouring tea for the Duchess three rooms ago, still dressed in his soot-streaked formal livery, balancing a tarnished silver tray on one steady palm. On the tray sat three cracked porcelain teacups and a steaming pot of chamomile tea!

Toad Lee snatched up a splintered curtain rod and leveled it at Brad's throat like an anti-cavalry pike, ready to impale him on the spot. Brad didn't even drop a saucer. Brad gently pushed the curtain rod aside with a white-gloved knuckle, straightened his crooked bowtie, and let out the most exhausted sigh in the history of domestic service: **"I am three hours behind on the second course, and the dining room currently has five trees growing through the roast."**

Waluigi almost fell flat on the floor laughing! The entire estate is tearing itself apart at the planar seams, cosmic wildfire is eating the wainscoting, an ancient soul relic just changed hands, and Brad's primary professional crisis is that an ancient oak grove has sprouted straight through the prime rib!

You have to admire that kind of deranged professional commitment! Brad doesn't care about planar rifts. Brad cares about table settings and dinner schedules! Waluigi patted Brad on his soot-stained shoulder and took a cup of hot chamomile tea right off the tray while Toad Lee stood there with his jaw dragging on the floor! Tea in a burning hallway! Class never dies, even when the roof does! WAH!"""
        },
        {
            "id": "cut-sec-dumbwaiter-vault",
            "icon": "🚪",
            "heading": "Behind The Dish Scullery: How Waluigi Finds Every Secret Exit By Smelling Greed",
            "body": """Brad knew the manor house was doomed, so he offered the only sensible solution available: get out through the servant scullery before the roof collapsed entirely. He led Waluigi, Hjumpik, and Toad Lee down a narrow back service corridor, away from the screaming Legion guards and Cornburary's smoking paperwork.

The service passage brought us into the old dish scullery, right behind a massive copper grease-trough that smelled like rancid lard, stale vinegar, and forty years of greasy dishwater. Brad reached behind the trough, found a concealed iron lever, and pulled hard. A hidden counterweight groaned in the walls, and a secret panel in the false plaster swung open, revealing a steep downward maintenance ramp into the foundations!

Toad Lee immediately started whining about the damp slime on the floorboards and the grease ruining his clean shoes. Hjumpik had to unstrap his heavy heater shield and duck his broad, armored shoulders just to squeeze his dwarf frame through the low opening.

Waluigi, however, was having an absolutely magnificent time. As Waluigi slid past the old pantry sideboard toward the secret ramp, Waluigi noticed a velvet-lined cutlery drawer left wide open by fleeing scullery maids. Waluigi's hands moved like lightning! Three solid silver butter spoons, a pearl-handled fruit knife, and an embossed sterling napkin ring went straight into Waluigi's deep overall pockets! Toad Lee saw Waluigi do it and gasped like a puritan schoolteacher witnessing a crime! Waluigi gave him a cold, hard look: when a haunted fey manor goes down in violet flames, abandoned silverware is classified as emergency disaster salvage! Waluigi is providing a vital civic rescue service to fine dining utensils! WAH!"""
        },
        {
            "id": "cut-sec-goblin-cards",
            "icon": "🃏",
            "heading": "The Secret Basement Card Room: Copper Shillings, Cheating Imps, And Warm Ale",
            "body": """We tumbled down the ramp and landed right through an open ceiling hatch into a hidden stone cellar beneath the foundations. And what was down there? A secret goblin card parlor!

The air was dense with sulfur pipe smoke and the foul stench of fermenting mushroom liquor. In the center of the damp cavern, gathered around an upturned oak cask under a flickering tallow lamp, sat four goblin house servants and an ugly little redcap, furiously slamming heavy cards onto the wood!

There were piles of stamped brass tokens, clipped Midland shillings, and tarnished copper coins scattered across the cask head. When Waluigi, Toad Lee, and a seven-foot-wide dwarf crashed into their cellar, do you think those goblins drew daggers? DO YOU THINK THEY SOUNDED THE ALARM?

NOT A CHANCE! The goblins threw their arms over their copper piles, bared their pointed yellow teeth, and snarled at us to keep our dirty hands off the pot!

Waluigi took one look at the table layout and instantly read the entire scam. The redcap on the left had two extra Acorn cards tucked into the top of his greasy boot, and the dealer had a lead weight sewn into the deck's leather wrap! Waluigi respected the hustle immediately! Waluigi would have pulled up an empty keg and taken all their copper in three hands of draw poker if Hjumpik hadn't grabbed Waluigi by the collar of Waluigi's overalls and dragged Waluigi toward the far wall! Dwarves have zero appreciation for low-stakes cellar gambling! WAH!"""
        },
        {
            "id": "cut-sec-twenty-one-clock",
            "icon": "⏳",
            "heading": "The Twenty-One Day Cut: An Eviction Notice Carved Into Stone And The Whole Universe On A Timer",
            "body": """Hjumpik shoved the dealer aside, pointing his battle axe at the back wall of the cellar. There, gouged deep into the ancient foundation stone, was a massive astronomical wheel carved with jagged planar runes and twenty-one deep notches.

The goblin card dealer rubbed his greasy nose, spat a glob of black mushroom juice onto the stone floor, and grinned with all eight of his crooked teeth: **"Twenty-one days, big boy. Twenty-one sunrise cycles before the string snaps and this whole house drops into the soup."**

TWENTY-ONE DAYS! That was the grand reveal! The entire Feyward estate is not just an old haunted house falling apart because of neglect. It is anchored to an unstable planar fault line, tethered by ancient seasonal wards that are unraveling minute by minute! When that twenty-one-day counter reaches zero, the wards collapse completely, and this entire wing—the library, the ballroom, the cellars, the dining hall—drops straight into the astral abyss!

Cornburary is counting iron spikes, Lady Aurelia is nursing a frozen grudge, Hjumpik is bartering ancestor rings, and meanwhile the whole damn establishment has an expiration date stamped on the basement wall like a carton of bad milk!

Twenty-one days! That gives Waluigi exactly three weeks to crack open the Jul'library, grab every rare tome and magical trinket that isn't nailed down, settle the score with the Iron Legion, and haul Waluigi's purple rear end back to the mortal plane before the floor turns into cosmic soup! The clock is running! Waluigi is on the case! WAH!"""
        }
    ]
}

def add_commentary():
    path = "Reputation-Matrix2/data/commentaries.json"
    with open(path, "r", encoding="utf-8") as f:
        data = json.load(f)
    
    comms = data["commentaries"]
    # check if already exists
    for i, c in enumerate(comms):
        if c["id"] == new_commentary["id"]:
            comms[i] = new_commentary
            print(f"Updated existing commentary {new_commentary['id']}")
            break
    else:
        comms.append(new_commentary)
        print(f"Appended new commentary {new_commentary['id']}")
        
    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    print("Done writing commentaries.json")

if __name__ == "__main__":
    add_commentary()
