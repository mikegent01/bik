import json

with open('Reputation-Matrix2/data/events.json', encoding='utf-8') as f:
    events = json.load(f)

# check if already exists
existing = next((e for e in events if e.get('id') == 'feyward_the_soul_ring_and_the_twenty_one_day_cut'), None)
if existing:
    events.remove(existing)

new_event = {
    "id": "feyward_the_soul_ring_and_the_twenty_one_day_cut",
    "name": "The Soul-Ring, the Feywild Wildfire, and the Twenty-One Day Cut",
    "title": "The Soul-Ring, the Feywild Wildfire, and the Twenty-One Day Cut: A Wakeful Toad, Cornburary's Requisition, the Combat Chirurgeon, and the Card Room Under the Pantry",
    "date": "2 Aethel, 922 BF (Feyward clock) — continuing without a break from the sanctuary floor collapse and the lower quarters",
    "timeCode": "TC:0922-09-02/FEY-2",
    "timeWindow": "Early hours, following the collapse of the sanctuary floor and the breach into the servant levels",
    "era": "922 BF (Feyward Clock)",
    "location": "The Overgrown Manor — Colour Division Quarters, Lady's Inner Sanctum, Servant Common Room, and the Goblin Card Room",
    "type": "Session / Field Incident",
    "status": "Filed / Audited",
    "summary": "Following the collapse of the lady's false sanctuary, the crisis moves into the lower quarters and hidden subterranean veins of the manor. Toad Lee awakens from unconsciousness tied to a chair in the Colour Division's holding room, full of frantic expressions and vocal panic, while Waluigi lounges nearby having already slipped his manacles to use as brass-knuckle bluff. Quartermaster Cornburary arrives with an armed Colour Division escort and a waxed vellum clipboard, demanding liquidation of Hjumpik's overdue Aegis Magi contract and citing Section 14 Cordon Mandates over structural property damage. Hjumpik pushes back through the fractured stairwell into the inner sanctum to confront the genuine Lady Aurelia Corvinarus, cutting through centuries of aristocratic distrust by offering the ancient Soul-Ring as an irrevocable pledge of mutual custody and honour. The intense clash of dwarf conviction, ancient winter sorrow, and mortal terror destabilizes the local planar climate, triggering a roaring Feywild Wildfire that feeds on emotional resonance and burns with emerald and violet flame. As the fire consumes the invasive overgrowth, an Iron Legion Cordon Combat Chirurgeon arrives with spring-loaded brass syringes to perform emergency triage amidst the smoke. Falling back into the servant quarters, the party reunites with Brad the banquet waiter—still attempting to serve tea amidst the catastrophe—who unlocks a secret pivot behind the silver dumbwaiter shaft. The passage leads down into a forgotten goblin card room where deserters and scouts gamble away from officers, leading to the chilling discovery of a pinned astronomical chart: the temporal desynchronization is accelerating, giving the manor and its occupants exactly twenty-one days before the Feywild Cut permanently severs the estate into planar oblivion.",
    "description": "Waluigi is filing this continuation because when a building is simultaneously being eaten by plant monsters, audited by an Iron Legion quartermaster with a clipboard, and set on emotional fire by an oath, you do not wait for the smoke to clear before taking inventory. WAH.\n\n## The Lower Quarters: A Face That Moves\n\nThe previous filing ended with the sound of splintering floorboards in the upper sanctuary. The continuation begins downstairs in the cold flagstone holding room, where Toad Lee discovered that waking up from an alchemical knockout is significantly more alarming when you are bound to a heavy dining chair with fifty feet of hemp rope.\n\nUnlike his customary stoic reserve, Toad Lee woke up with his face operating at maximum volume. His eyes bulged, his jaw worked against a phantom rag, and his muffled protests echoed off the vaulted ceiling with theatrical intensity. Leaning against the damp wall two paces away, Waluigi was already awake, unhurt, and casually dangling his open iron handcuffs from one long index finger.\n\n> *\"Waluigi! Why am I the only one who looks like a packaged roast?!\"* Toad Lee hissed, straining against the cordage until the chair legs scraped the stone.\n>\n> *\"Because an unlocked captive is a surprise, Toad. A locked captive is a baseline expectation,\"* Waluigi replied without looking up. *\"They check the door twice if they think you're escaping. They check the door once if they think you're furniture.\"*\n\nBefore Toad Lee could formulate a theological rebuttal, the heavy oak door groaned open. Colour Division sentries in red, yellow, and green lion tabards stepped aside to admit Quartermaster Cornburary.\n\n## The Logistics of Armageddon\n\nQuartermaster Cornburary did not bring a sword. He brought a brass ink horn, a goose quill, and a ledger bound in boiled pigskin. While green vines crept across the baseboards and distant roots shuddered behind the plaster, Cornburary adjusted his iron spectacles, tapped a page of vellum, and treated the impending collapse of the estate as a gross failure of supply-chain discipline.\n\n> *\"This entire wing is an unauthorized structural alteration under Section Fourteen of the Cordon Mandate!\"* Cornburary announced, his voice flat with bureaucratic authority. *\"Three archways compromised, two load-bearing pillars scarred by alchemical flame, and an Aegis Magi contract overdue for settlement by ninety-six hours. Who authorized this expenditure?\"*\n\nHjumpik, striding through the cracked archway with soot across his brow and his heavy warhammer trailing in the dust, planted his iron boots on the flagstones.\n\n> *\"The only thing altering here, Cornburary, is whether your clipboard survives the next five seconds,\"* Hjumpik growled. *\"Your division was hired to secure a perimeter, not appraise the firewood while the house is collapsing.\"*\n\nCornburary did not flinch, but he noted the refusal in the margin. The impasse was not broken by steel, but by a sudden harmonic shiver that vibrated through the stones—the true lady had called from the inner sanctum.\n\n## The Lady on the Briar Throne\n\nAscending the splintered stairs where the false glamour had disintegrated, Hjumpik breached the inner sanctum. The room was not empty. Sitting upon a cracked velvet settee encircled by creeping briars was Lady Aurelia Corvinarus—not the vegetative puppet of Carnivorous, but the living, breathing noblewoman of House Corvinarus. Pale, sharp-featured, and wearing an austere Victorian gown trimmed in darkened lace, her eyes held the faint vertical slit of draconic heritage.\n\nShe looked upon the dwarf warrior not with gratitude, but with the cold, exhausted hostility of a survivor who has seen too many mercenaries promise salvation.\n\n> *\"You come into my house with iron and dwarf-pride, offering words like honour to an heir of winter,\"* Aurelia said softly, her fingers tightening on the arm of the chair.\n>\n> *\"Not words, my Lady. Steel and soul. Take the ring, or watch your halls burn down to moss,\"* Hjumpik answered.\n\nStepping forward onto the cracked dais, Hjumpik knelt upon one knee. He did not draw a blade. From his belt pouch he drew the Soul-Ring—the ancient Corvinarus heirloom, its signet pulsing with deep resonance—and presented it upon a square of clean purple velvet. He offered not subjugation or conquest, but mutual custody: an irrevocable pact binding his honour and the party's strength to her survival against the rot.\n\nAurelia stared at the ring. In four centuries of Midlands intrigue, no outsider had ever offered her power without demanding her bloodline as collateral.\n\n## The Emotional Surge: Feywild Wildfire\n\nIn the Feywild, magic is not mathematical; it is emotional. The explosive intersection of Hjumpik's solemn dwarf oath, Aurelia's sudden breach of centuries-old cynicism, and the frantic mortal terror of Toad Lee echoing from the lower floor shattered the planar equilibrium.\n\nA spark bloomed in the air—and then the room caught fire.\n\nIt was not mundane combustion. It was **Feywild Wildfire**: an emotional conflagration that burned with shifting curtains of iridescent emerald and violet light. It did not scorch stone or consume dry timber like common hearth-fire; it fed directly upon heightened feeling, tearing through Carnivorous's parasitic overgrowth, blackening the invasive creepers, and filling the corridors with sweet, choking incense.\n\n## The Cordon Combat Chirurgeon\n\nAs the emerald blaze spread into the hallway, heavy iron boots crunched over the charred briars. Pushing through the billowing violet smoke came an Iron Legion Cordon Combat Chirurgeon—an armored field surgeon clad in a brass-and-iron beaked plague mask, stained leather apron, and a bandolier of spring-loaded injectors.\n\nDeploying alchemical cold-salve and anti-spore coagulants, the Chirurgeon barked triage instructions through his respirator, injecting coughing Colour Division sentries and stabilizing the wounded. In the frantic retreat through the blinding vapor, Waluigi and Hjumpik secured a full field kit of Cordon Combat Syringes, while Toad Lee—finally sliced free of his chair by Hjumpik's dagger—scrambled down the corridor with the agility of a creature that had seen enough fire for three lifetimes.\n\n## Brad the Waiter and the Dumbwaiter\n\nColliding through a service door to escape the advancing wildfire, the squad stumbled directly into Brad the waiter. Brad was still wearing his formal evening tuxedo, now soot-blackened and torn, and was clutching a tarnished silver tray holding a single cracked porcelain teacup.\n\n> *\"I am three hours behind on the second course, and the dining room currently has five trees growing through the roast,\"* Brad lamented, dusting soot off his lapel with professional indignation.\n\nRecognizing Hjumpik (whom he still called 'Commander'), Brad ushered them into the servant common room behind the pantry. Moving past laundry bins and salt barrels, Brad caught an iron ring on the wall and pulled. The heavy oak frame of the silver dumbwaiter pivoted outward, revealing a rough stone flight of steps cut directly into the bedrock below the manor's foundations.\n\n## The Goblin Card Room and the 21-Day Cut\n\nAt the bottom of the spiraling stairs lay an underground redoubt completely untouched by the aristocracy or the flora: the **Goblin Card Room**. Lit by smoky tallow lanterns, three sharp-featured goblins in patched leather and an off-duty human sentry were seated around a battered oak table, surrounded by tin mugs of cabbage ale, bone dice, and a greasy deck of playing cards.\n\nWeapons were half-drawn in surprise before the card-players realized the intruders were also fleeing the officers and the fire. On the table, Toad Lee slapped down a winning hand of Midlands Bluff to establish diplomatic bona fides.\n\nBut the true prize was pinned to the damp wall behind the table: an illuminated astronomical chart recovered from an Iron Legion courier dispatch. The chart depicted the planar rift between the Feywild and the Midlands, bisected by a jagged lightning fissure beside an hourglass marked with glowing sylvan runes.\n\nThe head goblin dealer squinted through his pipe smoke, pointed a dirty claw at the parchment, and stated the arithmetic that made everyone's stomach drop:\n\n> *\"Twenty-one days, big boy. Twenty-one sunrise cycles before the string snaps and this whole house drops into the soup.\"*\n\nThe temporal desynchronization between the Feywild and the mortal plane was reaching critical mass. In exactly twenty-one days, the planar tether anchoring the Overgrown Manor to the Midlands would sever permanently. Whatever was left of the house, the lady, and the records had three weeks to survive, or vanish into the deep planar drift forever.",
    "sections": [
        {
            "id": "sec-waking-toad-lee",
            "name": "The Waking of Toad Lee",
            "icon": "🍄",
            "subtitle": "the package wakes up, the face moves, and the handcuffs become jewellery",
            "overview": "Toad Lee awakened on the cold flagstone floor of the lower holding quarters tied to a heavy dining chair with fifty feet of hemp rope. His facial expressions operated at full volume—eyes bulging, cheeks puffing, frantic grimaces—while Waluigi leaned against the wall casually twirling an unlocked pair of iron handcuffs on his finger.\n\n*\"Waluigi! Why am I the only one who looks like a packaged roast?!\"*\n\n*\"Because an unlocked captive is a surprise, Toad. A locked captive is a baseline expectation.\"*",
            "waluigi_note": "*WAH!* Toad Lee looked like an overstuffed sausage with eyebrows. I slipped my cuffs in four seconds with a hair needle and kept them on as bracelets; Toad tried to chew through half-inch hemp. One of us understands tactical ambiguity; the other is a mushroom with ambitions."
        },
        {
            "id": "sec-cornburary-requisition",
            "name": "Quartermaster Cornburary's Requisition",
            "icon": "📋",
            "subtitle": "property damage in a haunted house, and the cost of broken floorboards",
            "overview": "Quartermaster Cornburary entered with Colour Division guards in lion tabards, brandishing a boiled-pigskin ledger and quill to audit property damage and enforce Hjumpik's overdue Aegis Magi contract.\n\n*\"This entire wing is an unauthorized structural alteration under Section Fourteen of the Cordon Mandate!\"*\n\n*\"The only thing altering here, Cornburary, is whether your clipboard survives the next five seconds.\"*",
            "waluigi_note": "*WAH!* A bureaucrat who reads building codes while the ceiling is dropping briars on his head! Cornburary has the emotional range of a granite milestone and the ledger discipline of a goblin loan shark. I stole two pencils out of his pocket while Hjumpik was waving his hammer."
        },
        {
            "id": "sec-briar-throne",
            "name": "The Lady of the Briar Throne",
            "icon": "👑",
            "subtitle": "the real Aurelia, the broken settee, and the smell of ancient winter",
            "overview": "Breaching the inner sanctum through the shattered timbers, Hjumpik found the genuine Lady Aurelia Corvinarus seated on a cracked velvet settee encircled by creeping briars, pale and watchful with faint draconic pupils.\n\n*\"You come into my house with iron and dwarf-pride, offering words like honour to an heir of winter.\"*\n\n*\"Not words, my Lady. Steel and soul. Take the ring, or watch your halls burn down to moss.\"*",
            "waluigi_note": "*WAH!* The real Aurelia is twice as sharp as the vine-puppet and three times as dangerous. When a Corvinarus looks at you with pupils like vertical knife slits, you either check your pockets or prepare to die. Hjumpik did neither—he took off his glove."
        },
        {
            "id": "sec-soul-ring-pledge",
            "name": "The Soul-Ring Pledge",
            "icon": "💍",
            "subtitle": "mutual custody, the Aegis bond, and an oath made without a contract",
            "overview": "Hjumpik knelt upon the cracked flagstones and presented the ancient Corvinarus Soul-Ring upon a velvet square, pledging mutual custody and protection rather than conquest. Aurelia accepted the gesture in stunned silence.",
            "waluigi_note": "*WAH!* Hjumpik gave away an ancient soul artifact for zero gold pieces and a promise! Wario would have had an apoplectic seizure on the carpet. But in the Feywild, an oath is a weapon. The ring started glowing before she even touched it."
        },
        {
            "id": "sec-feywild-wildfire",
            "name": "The Feywild Wildfire",
            "icon": "🔥",
            "subtitle": "emotional resonance, emerald heat, and what happens when pride catches fire",
            "overview": "The collision of intense dwarf honour, ancient winter grief, and Toad Lee's downstairs panic ignited a localized Feywild Wildfire—a magical blaze burning with vibrant emerald and violet flames that consumed the invasive vines without scorching the stone.",
            "waluigi_note": "*WAH!* The fire smelled like burning lavender and wounded pride! In the mortal world, fire eats wood; in the Feywild, fire eats your unresolved family trauma. Half the creeping vines shriveled into ash before we could even sneeze."
        },
        {
            "id": "sec-combat-chirurgeon",
            "name": "The Cordon Combat Chirurgeon",
            "icon": "🩺",
            "subtitle": "bird-masks, cold-salve ampoules, and battlefield triage in the smoke",
            "overview": "An armored Iron Legion Cordon Combat Chirurgeon in a beaked bird mask pushed through the smoke, administering alchemical cold-salves and spring-loaded coagulant syringes to choking guards and stabilizing the retreat.",
            "waluigi_note": "*WAH!* A field doctor in full plate with a beak! He tried to jam a six-inch brass syringe into Toad Lee's shoulder; Toad hopped three feet in the air like a startled bullfrog. I pocketed three ampoules of the blue coagulant. Pure profit."
        },
        {
            "id": "sec-return-of-brad",
            "name": "The Return of Brad the Waiter",
            "icon": "🍵",
            "subtitle": "a singed livery, a cold tea tray, and a waiter who refuses to break shift",
            "overview": "Falling back through the servant corridors, the party collided with Brad the banquet waiter, clutching his cracked silver tea tray and lamenting the ruined dinner service.\n\n*\"I am three hours behind on the second course, and the dining room currently has five trees growing through the roast.\"*",
            "waluigi_note": "*WAH!* Brad is the only person in this dimension with an indestructible sense of hospitality. The house is collapsing into a botanical nightmare and he is personally offended that the tea went cold. Give that man a pension or a helmet."
        },
        {
            "id": "sec-dumbwaiter-passage",
            "name": "The Dumbwaiter Secret Passage",
            "icon": "🚪",
            "subtitle": "linen baskets, salt barrels, and the staircase that predates the plaster",
            "overview": "In the servant common room behind the pantry, Brad released the hidden counterweight of the old silver dumbwaiter, opening a pivot wall into a spiral stone passage descending beneath the foundations.",
            "waluigi_note": "*WAH!* Always check the pantry! Architects hide the good doors behind the dirty laundry because nobles never look at the people who wash their shirts. Down we went, right into the cellar dark."
        },
        {
            "id": "sec-goblin-card-room",
            "name": "The Goblin Card Room",
            "icon": "🃏",
            "subtitle": "tallow lamps, cabbage ale, and Midlands Bluff without officers",
            "overview": "Beneath the roots lay a subterranean den where goblin scouts and deserters gambled over marked cards and cabbage ale away from military discipline. Toad Lee played a hand to establish safe conduct.",
            "waluigi_note": "*WAH!* Goblins playing cards under a burning manor! My kind of people. Toad Lee actually pulled a triple ace on them; the goblin dealer looked like he wanted to bite someone's nose off until Hjumpik rested his hammer on the edge of the felt."
        },
        {
            "id": "sec-twenty-one-day-cut",
            "name": "The Twenty-One Day Countdown",
            "icon": "⏳",
            "subtitle": "the severed tether, the chart on the damp wall, and the clock nobody can rewind",
            "overview": "A pinned astronomical chart on the card room wall revealed the true temporal countdown of the Feywild Cut: exactly twenty-one days remain before the planar tether snaps completely, casting the estate into the void.\n\n*\"Twenty-one days, big boy. Twenty-one sunrise cycles before the string snaps and this whole house drops into the soup.\"*",
            "waluigi_note": "*WAH!* Twenty-one days! Not three months, not an eternity of tea parties. Three weeks before the tether snaps and the whole house falls into the planar shredder. The clock is running, and Waluigi hates a ticking clock almost as much as an unpaid invoice!"
        }
    ],
    "participants": [
        "hjumpik",
        "waluigi",
        "toad_lee",
        "lady_aurelian",
        "quartermaster_cornburary",
        "brad_the_waiter"
    ],
    "outcome": "Hjumpik established an irrevocable soul-pledge with Lady Aurelia Corvinarus using the ancient Soul-Ring, turning an adversarial standoff into an active alliance. The resulting emotional surge unleashed a Feywild Wildfire that consumed the creeping vines of Carnivorous. Toad Lee was freed from Colour Division custody; Quartermaster Cornburary's audit was temporarily halted; and Brad the waiter led the squad through the dumbwaiter passage into the goblin card room. There, the true temporal deadline was discovered: exactly twenty-one days remain before the Feywild Cut severs the manor permanently from the Midlands.",
    "notableFeatures": [
        "Toad Lee's highly expressive waking in handcuffs",
        "Waluigi's unlocked manacle bluff",
        "Quartermaster Cornburary's Section 14 Cordon property damage audit",
        "Hjumpik's Soul-Ring pledge to Lady Aurelia",
        "Localized emotional Feywild Wildfire (emerald and violet flame)",
        "Iron Legion Cordon Combat Chirurgeon battlefield triage",
        "Reunion with Brad the banquet waiter",
        "The dumbwaiter secret passage into the goblin card room",
        "The 21-Day Feywild Cut countdown chart"
    ],
    "keyBattles": [
        "Sanctuary Threshold Wildfire Skirmish",
        "Goblin Card Room Standoff"
    ],
    "relatedArticles": [
        "feyward_i_cant_afford_not_to_care",
        "feyward_library_reclamation_and_the_kitchen",
        "hjumpik",
        "waluigi",
        "toad_lee",
        "lady_aurelian",
        "quartermaster_cornburary",
        "brad_the_waiter",
        "iron_legion",
        "overgrown_manor"
    ],
    "reputationChanges": {
        "iron_legion": -2,
        "house_corvinarus": 5,
        "disaster_inc": 3
    },
    "effects": [
        "Lady Aurelia Corvinarus formally accepts Hjumpik's Soul-Ring pledge",
        "The 21-day planar severance countdown is activated across all campaign clocks",
        "A cache of Cordon Combat Syringes is secured by the party"
    ],
    "reputationNotes": "House Corvinarus views Hjumpik's Soul-Ring pledge as an unprecedented act of chivalric honour, substantially warming relations with Lady Aurelia. The Iron Legion views the property destruction and defiance of Quartermaster Cornburary as an active breach of contract.",
    "aftermath": "With twenty-one days remaining before planar severance, the party rests briefly in the goblin card room. Lady Aurelia begins rallying the loyal remnants of her household, while Cornburary's troops regroup outside the wildfire zone to prepare a formal siege or evacuation mandate.",
    "waluigiAssessment": "A masterclass in turning bureaucratic arrest into an alliance, and an alliance into an emergency exit. Cornburary wanted gold; Hjumpik gave Aurelia a ring; I got out of my handcuffs; and we discovered the building has an expiration date stamped on the wall. Twenty-one days is plenty of time if you don't stop to smell the burning roses. WAH!",
    "xpAwards": [
        {
            "xpKey": "hjumpik",
            "articleId": "hjumpik",
            "name": "Hjumpik",
            "cat": "social",
            "xp": 350,
            "title": "Event — The Soul-Ring, the Feywild Wildfire, and the Twenty-One Day Cut",
            "desc": "Offered the ancient Corvinarus Soul-Ring in an irrevocable chivalric pledge of mutual custody, winning Lady Aurelia's alliance and breaking the standoff without drawing steel.",
            "date": "2 Aethel, 922 BF (Feyward clock)",
            "dateSort": 9220210
        },
        {
            "xpKey": "hjumpik",
            "articleId": "hjumpik",
            "name": "Hjumpik",
            "cat": "combat",
            "xp": 280,
            "title": "Event — The Soul-Ring, the Feywild Wildfire, and the Twenty-One Day Cut",
            "desc": "Stood firm against Quartermaster Cornburary's Cordon mandate and held the sanctuary threshold through the roaring surge of emotional wildfire.",
            "date": "2 Aethel, 922 BF (Feyward clock)",
            "dateSort": 9220210
        },
        {
            "xpKey": "waluigi",
            "articleId": "waluigi",
            "name": "Waluigi",
            "cat": "discovery",
            "xp": 300,
            "title": "Event — The Soul-Ring, the Feywild Wildfire, and the Twenty-One Day Cut",
            "desc": "Slipped iron manacles instantly to maintain tactical bluff, intercepted Cornburary's requisition notes, and decoded the 21-day planar severance timeline on the goblin wall.",
            "date": "2 Aethel, 922 BF (Feyward clock)",
            "dateSort": 9220210
        },
        {
            "xpKey": "waluigi",
            "articleId": "waluigi",
            "name": "Waluigi",
            "cat": "chaos",
            "xp": 240,
            "title": "Event — The Soul-Ring, the Feywild Wildfire, and the Twenty-One Day Cut",
            "desc": "Leveraged Brad's tea-service fixation into architectural intelligence, located the dumbwaiter passage, and successfully brokered entry into the goblin card room.",
            "date": "2 Aethel, 922 BF (Feyward clock)",
            "dateSort": 9220210
        },
        {
            "xpKey": "toad_lee",
            "articleId": "toad_lee",
            "name": "Toad Lee",
            "cat": "survival",
            "xp": 220,
            "title": "Event — The Soul-Ring, the Feywild Wildfire, and the Twenty-One Day Cut",
            "desc": "Awakened from alchemical stupor with peak comedic expressiveness, evaded the Cordon Combat Chirurgeon's syringe, and laid down the winning card hand to secure safe conduct.",
            "date": "2 Aethel, 922 BF (Feyward clock)",
            "dateSort": 9220210
        }
    ],
    "itemReport": [
        {
            "itemId": "oc_soul_ring",
            "name": "Soul-Ring of Lady Aurelia (Pledged / Custody Exchange)",
            "recipient": "Hjumpik",
            "type": "Relic / Soul Bond",
            "summary": "An ancient Corvinarus signet ring pledged by Hjumpik to Lady Aurelia Corvinarus as an irrevocable bond of shared custody against the rot.",
            "status": "Pledged in Sanctuary"
        },
        {
            "itemId": "cordon_combat_syringe",
            "name": "Cordon Combat Chirurgeon Syringe Kit",
            "recipient": "Toad Lee",
            "type": "Alchemical Consumable / Combat Medicine",
            "summary": "A brass pressurized spring-loaded injector loaded with Iron Legion coagulant serum and anti-spore tinctures, recovered during the wildfire retreat.",
            "status": "Acquired"
        },
        {
            "itemId": "brad_pantry_key",
            "name": "Brad's Tarnished Silver Pantry Pass-Key",
            "recipient": "Waluigi",
            "type": "Access Key / Manor Infrastructure",
            "summary": "The master brass-and-silver skeleton key carried by Brad the banquet waiter, unlocking the servant corridors and dumbwaiter shaft.",
            "status": "Acquired"
        },
        {
            "itemId": "goblin_card_room_marker",
            "name": "Goblin Card Room Marked Deck & Ledger Slip",
            "recipient": "Party",
            "type": "Intelligence / Planar Navigation",
            "summary": "A greasy deck of cards bearing the stamped 21-day Feywild cut timeline diagram on the reverse of the King of Spades.",
            "status": "Acquired"
        }
    ],
    "image": "assets/images/events/feyward-twenty-one-day-cut/cut-01-waking-and-cornburary.jpg",
    "imageCaption": "Toad Lee awakens in full panic while Waluigi displays his unlocked cuffs, Quartermaster Cornburary inspects his ledger, and Hjumpik stands his ground before the burning doorway."
}

events.append(new_event)

with open('Reputation-Matrix2/data/events.json', 'w', encoding='utf-8') as f:
    json.dump(events, f, indent=2)

print('Successfully added feyward_the_soul_ring_and_the_twenty_one_day_cut to events.json!')
