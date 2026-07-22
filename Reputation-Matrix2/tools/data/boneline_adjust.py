"""Word-count tuning pass: APPEND one extra section to short articles and
TRIM redundant sentences from long ones, targeting 1,000-1,500 words each.
Applied by tools/expand_boneline_articles.py after the article merge.
"""

APPEND = {
"sans": """## The Hours Between Posts

The sentry routes are the only schedule Sans keeps, and he keeps them exactly, which is the detail visitors most consistently miss. He walks the same loops at the same hours — past the relay junction, past the lower-Ebott service access, past the stretch of road where the sky's enchantment wears thin — and the household reads his day by which loop he is on. Between posts he is at Bunny's inn, or napping at a station that is never, somehow, unwatched, or telling a joke so bad it functions as camouflage. The rhythm is the point: a sentry who is always where he is supposed to be has eyes everywhere he needs to be, and a town that knows where its sentry is can sleep. Papyrus calls it dedication. The registry calls it coverage. Sans calls it a walk. The three descriptions are, the household has noticed, exactly the same shape as the man himself: lazy on the surface, exact underneath, and impossible to tell apart from a joke until the joke has already saved you.""",

"papyrus": """## A Typical Watch

A patrol with Papyrus follows a structure he has refined over years and narrates, in full, to anyone walking beside him. First, the puzzles: each one inspected, reset, and complimented, because he maintains a puzzle left unsolved is a question left unasked, and Snowdin should ask its questions out loud. Then the perimeter, walked at his enormous stride, with a running commentary on snow quality, sight lines, and which drifts would make excellent fortifications if anyone ever needed a fort made of snow, which he hopes will be no one, but the option should exist. Visitors are challenged formally at every checkpoint and forgiven immediately. The patrol ends where it began, at the outer door, where he checks the latch twice and announces, to the door and to anyone present, that the household is safe for another rotation. Dedan, who walks the same perimeter with half the words and twice the suspicion, has said once, on the record, that the two patrols cover the same ground and none of the same threats, and that this is, reluctantly, optimal. Papyrus framed the quote. He has read it aloud to three visitors since, as if it were about pasta. It was not about pasta. Papyrus's readings of the record are, like Papyrus's invitations, final.""",

"grandpa_semi": """## A Day in the Keeping

A day with Grandpa Semi is mostly silence, and the silence is mostly work. He sorts the cedar chest in the morning light, moving cards between stacks by a system no one else can see, pausing over some for a long time, setting others aside as if they had asked a question he is not ready to answer. He takes his meals at the long table, in the seat nearest the door where the first household sat, and he leaves the near place set, the way it has always been set, for whatever watches. Relatives bring him disputes; he listens to the whole of them, often across several sittings, and then produces a card, or does not. He tells jokes halfway, on purpose — the setup, then a pause that can last days, then the punchline, delivered to a different person in a different room, because he maintains a joke, like a record, belongs to whoever needs it, whenever they need it. He is not, the household has learned, slow. He is careful, and the difference is the whole of his teaching: that the things worth keeping — people, promises, the truth about a winter, the name of a door — are worth taking the time to hold correctly. The chest grows. The cards wait. The near place stays set. The household, which he has kept, keeps him, and considers the exchange the fair one he taught it to expect.""",

"lazybones": """## A Day at the Nest

A day at the blanket nest looks, to the untrained eye, like nothing at all, which is the nest's primary design feature. Morning: the tea Lazybones does not remember asking for arrives, courtesy of a relative who was told to bring it by a relative who was told to ask by Lazybones — three sentences total, none of them longer than four words. Midday: a cousin passes through the warm hallway with a problem they have not said aloud, and receives, without anyone opening an eye, a murmur so precisely aimed that they stop, sit down on the floor, and have the conversation they came not to have. Evening: the message drop clicks, softly, under the blankets, and whatever was left there is somehow already handled by breakfast. The snacks reposition themselves. The cover stories go out in the hands of people who will never know who wrote them. Twice a day someone asks Lazybones for advice, and twice a day the answer arrives with eyes closed, in a voice that sounds like a nap, and lands, every time, exactly where it was needed. The household has stopped asking how. The household has started, quietly, organizing around the nest the way a town organizes around a watchtower: with gratitude, with trust, and with the unspoken understanding that the person who sees everything has chosen, for reasons of their own, to do the seeing horizontal. This is not idleness. This is the most efficient posture ever adopted in the history of the family. Lazybones, told this once, opened one eye, said 'mhm,' and went back to work.""",

"baby_bones": """## A Day at Full Rattle

A day with Baby Bones is a day at full rattle, and the household schedules accordingly. Morning begins with a demand for transport, granted by whichever adult is nearest, and a tour of the house at shoulder height, during which every object is inspected, several are confiscated, and one — today, a spoon — is promoted to permanent inventory. Mid-morning is patrol, riding Dedan or Papyrus or a rotating skull of Quantity, the rattle shaken at every checkpoint as inspection and verdict. Lunch is attended seriously, in the high seat, with a plate and a napkin and the ceremonial first bite that Papyrus narrates like a state occasion. The afternoon belongs to interruptions: the crisis meeting dissolved by a demand to be carried, the secret conference paused for a peekaboo ruling, the archive — Grandpa Semi's archive, which no one interrupts — interrupted, gently, with a card handed over for rattling inspection and handed back, approved. Evening is the rattle's slow diminuendo, the music mechanism played soft, the small figure passed from lap to lap around the long table until the rattling stops and the breathing does not. The household files the day under 'weather, favorable.' The household would not trade a single interrupted meeting. The household has, in fact, come to suspect that the meetings that got interrupted were the ones that needed interrupting, and that the smallest rattle in the house is somehow the family's most reliable early-warning system for its own nonsense. Baby Bones, asleep in the nearest lap, offers no comment. The rattle ticks once, softly, like a clock keeping a time only it knows.""",

"dirty_brother": """## Standing Watch

He checks the warm road's sealed branch every winter, alone, by lamplight, and the checking is itself a kind of vigil. The household knows the routine and does not interrupt it. He returns soot to the soot, green at the fingertips, and reports the same thing every year, in the same two words: 'unchanged, still.' The household files the report. The household sleeps easier for it. Whatever sleeps behind that seal, it sleeps watched — by the one person in Snowdin who has earned the right to watch it, and who will be there, lamp in hand, every winter, until the answer changes.""",

"will": """## The Pantry Wall

The motto on the pantry wall is not painted; it is a card, laminated, from the wartime column's old field manual — the only page Will kept when he walked away. The column's other rules he gave back. This one he kept, and refiled, and hung where every hand that reaches for the noodles sees it: feed first, worry later. Visitors read it as a slogan. Relatives read it as doctrine. Will reads it as the sentence that kept a relief column humane for three years and keeps a household pantry stocked for the next crisis, whoever it belongs to. Under the card, in smaller letters he added himself, is the rest of the rule, the half the column never printed: everyone eats, or no one has finished. The household follows both halves. The ledger follows both halves. The 'G.' deposits, whatever they are, follow both halves too, and Will suspects — has suspected, for years, in the part of his mind that still thinks in column routes and quartermaster codes — that whoever sends them learned the rule from the same manual, in the same winter, from the same hand. He has never checked the drawer. The drawer stays locked. The noodles worry no one.""",

"has_a_very_special_attack": """## The Purple Coat

The regalia is part of the work, and he maintains it with a seriousness the household finds both ridiculous and correct. The purple coat is brushed nightly. The pose is practiced in the hallway mirror until the silhouette reads from the back row. He has explained, to anyone who will listen, that an announcement owes its audience preparation, and preparation owes its audience respect, and that the difference between a spectacle and a disaster is whether the spectators were warned and given time to feel something. Papyrus helps with the coat. Sans helps by absenting himself, which the cousin counts, generously, as audience management. The chronicle notes one unexplained detail: a single wing-shaped pin, worn at the collar, that he has had since before the first announcement, and that he touches, once, before every performance — not for luck, he says, but for permission. Permission from whom, he answers with a bow, which is how he answers everything, and which the chronicle has begun to suspect is not an evasion at all.""",

"cursive": """## The Ink

He mixes his own ink, the old courier way, and the household recognizes his letters by smell before sight: iron and winter. He has never run out. He has never explained the supply. The chronicle notes, without pursuing it, that the ink matches, chemically, samples documented in pre-war diplomatic archives elsewhere in the campaign — a receipt no living service should still hold. He writes on. The letters go out. They are beautiful, and they help, and the ink, like the man, comes from somewhere the household has agreed not to ask about.""",

"times_new_roman": """## The Typeface

His serif is non-negotiable, and the household has learned to treat the arguments about it as a civic amenity. A family with a respectable typeface, he maintains, is a family that takes its own history seriously, and a family that takes its history seriously does not lose people to bad retellings. He has rejected eleven font proposals, one of them from Helvetica, in writing, with citations. The chronicle is set in the serif. The serif stays.""",

"prunsel": """## The Near Place

The place set at the table's near end — the founding precedent, the one that has never been removed — is Prunsel's, and the household sets it with the same steadiness it sets any relative's: plate, napkin, a portion no one expects to be eaten, and a chair angled, always, toward the window where the reflections happen. It has not, in the documented record, ever taken the seat. The household sets it anyway. Grandpa Semi sets it himself on the nights he can, and says good evening to the window glass, which is sometimes only glass, and sometimes is not. The household considers the practice sane. The household considers it the sanest thing it does: to set a place for the watcher, and to mean it, and to say, with a plate and a chair and a steady daily kindness, that whatever Prunsel is, it is not outside. It never was. The near place stays. The reflection, some nights, stays too. The household says good evening. The household has never once, in all the documented years, been afraid to.""",
}

# (old, new) exact replacements applied to long articles. Each old string must
# match exactly once; the applier asserts this.
TRIM = {
"pet_rock": [
    ("The registry, presented with the paperwork, searched for grounds to object and found none that the household would have respected.",
     "The registry searched for grounds to object and found none the household would have respected."),
    ("The stone sat at the table. The stone has sat at the table, in one form or another, ever since.",
     "The stone has sat at the table, in one form or another, ever since."),
    ("The chronicle records the registry's retreat with the dry satisfaction of an archive watching a family out-love its own bureaucracy, which is, the chronicle maintains, the correct final score in every such contest.",
     "The chronicle records the retreat with the dry satisfaction of an archive watching a family out-love its own bureaucracy — the correct final score in every such contest."),
    ("The household has looked at the card. The household has looked at the stone. The household has set the tiny plate, as always, and decided",
     "The household has looked at the card, and at the stone, and set the tiny plate, as always, and decided"),
],
"dedan": [
    ("The household discusses both, constantly, with love, and files his protests under 'objections, ritual,' because the protests are ritual, and everyone knows it, including Dedan, who objects on schedule, and stands the next watch on schedule, and has not missed a Friday dinner in longer than he will admit.",
     "The household discusses both, constantly, with love, and files his protests under 'objections, ritual,' because the protests are ritual — and Dedan, who objects on schedule and stands the next watch on schedule, has not missed a Friday dinner in longer than he will admit."),
    ("The chronicle has tested the log. The log has been right, on the early entries, with an accuracy the chronicle finds difficult to reconcile with Dedan's stated methods and easy to reconcile with nothing else. The most unsettling entry",
     "The chronicle has tested the log, and the early entries have been right with an accuracy the chronicle finds difficult to reconcile with Dedan's stated methods and easy to reconcile with nothing else. The most unsettling entry"),
    ("He fed them, in other words, because the household had fed them, and the code, which governs doors, does not govern windows, and Papyrus's windows have never in the history of the house been anything but open. He spent the rest of the season",
     "The code governs doors; it does not govern windows, and Papyrus's windows have never been anything but open. He spent the rest of the season"),
    ("The household has honored the answer by not pressing it. The log continues.",
     "The log continues."),
    ("He objects to this reading, ritually. He leaves the log on the table. And the chronicle holds one final entry",
     "He objects to this reading, ritually, and leaves the log on the table. And the chronicle holds one final entry"),
],
"mystery_man": [
    ("The chronicle has documented forty-one such events across the household's history. The chronicle has explained none of them. The household has demanded no explanations, and the chronicle has slowly come to understand that the demand was the wrong instrument all along — that Mysteryman is not a question the family has failed to answer, but an answer the family has chosen, deliberately and with love, not to question. He is where unfinished things are. The family has unfinished things. The pattern is not evidence. It is company.",
     "The chronicle has documented forty-one such events. The chronicle has explained none of them. The household has demanded no explanations — and the chronicle has slowly come to understand that Mysteryman is not a question the family has failed to answer, but an answer the family has chosen, deliberately and with love, not to question."),
    ("He did not move. He did not threaten. He watched the disturbance the way the household watched it — with the stillness of a person waiting for something to resolve — and when the sky steadied, near dawn, he was gone, and the yard showed no footprints, which the chronicle records without surprise, because the file has never once contained footprints. But the season's real entry is the photograph.",
     "He did not move. He did not threaten. He watched the disturbance the way the household watched it, and when the sky steadied, near dawn, he was gone, and the yard showed no footprints — which the chronicle records without surprise, because the file has never once contained footprints. But the season's real entry is the photograph."),
    ("As if he had been watching the family for years, from the edges, from the locked rooms, from the warm-seat mornings, and had finally, on the worst night of the season, sat down at the table, and looked up, and wanted, for once, to be seen seeing. The photograph is in the file. The chronicle's annotation is one line, and the chronicle has never written a truer one: 'attended.' The household has not discussed the photograph at length. The household does not need to. The seat is set. The seat was occupied. The family, which has spent generations leaving room for someone to arrive in their own time and shape, looked up from dinner, and he was there, and the dinner continued, because that is what the household does — it continues, it includes, it sets the plate — and somewhere in the file, in a folder the household keeps sealed for the kindness of it, a drawing remains unfinished, and the household suspects — has suspected, since the photograph — that it may not need finishing anymore. That he may be finishing himself, slowly, at the table, one attended dinner at a time. The chronicle does not say this. The household says it, quietly, to each other, when the seat is warm in the morning: he's coming along. The seat stays.",
     "As if he had been watching the family for years and had finally, on the worst night of the season, sat down at the table, and looked up, and wanted, for once, to be seen seeing. The chronicle's annotation is one line, and the chronicle has never written a truer one: 'attended.' The household has not discussed the photograph at length. The seat is set. The seat was occupied. The dinner continued, because that is what the household does — it continues, it includes, it sets the plate — and the household says, quietly, to each other, when the seat is warm in the morning: he's coming along. The seat stays."),
    ("The entry remains open. The seat remains occupied, some nights. No one closes either.",
     "The entry remains open, as it should."),
    ("The household has interpreted the instruction the way the household interprets all of Grandpa Semi's silences: as care. Someone began to record Mysteryman",
     "Someone began to record Mysteryman"),
],
"sans_deltarune": [
    ("The shop's back room, which he keeps closed, has never been documented open, and the household has not asked, because the household has learned that his closed doors are not secrets but load-bearing walls, and that a cousin from a neighboring story is allowed to keep the architecture of his story to himself. He closes the shop when he leaves.",
     "The shop's back room stays closed, and the household has not asked, because a cousin from a neighboring story is allowed to keep the architecture of his story to himself. He closes the shop when he leaves."),
    ("Most of the ledger is ordinary — sales, stock, the strange conversions — but one line, in his usual lazy hand, carries a date that has not happened in this world yet. He jokes about it when asked. No one laughs loudly, because the household has learned that his jokes about the date are the one category of his jokes that are not jokes, and that the date is not a prediction but a memory — he has lived past it, in his world, and the ledger, which is his world's document, has simply kept its own calendar.",
     "Most of the ledger is ordinary — sales, stock, the strange conversions — but one line, in his usual lazy hand, carries a date that has not happened in this world yet. He jokes about it when asked. No one laughs loudly, because the date is not a prediction but a memory: he has lived past it, in his world, and the ledger has simply kept its own calendar."),
    ("The household's Sans has asked, twice, that the ledger be left alone, which is the closest thing to a formal request Sans has ever made of the archive, and the household has honored it: the ledger is filed under 'cross-world commerce, caution,' and is consulted only by consensus, and never about the date.",
     "The household's Sans has asked, twice, that the ledger be left alone, and the household has honored it: the ledger is filed under 'cross-world commerce, caution,' consulted only by consensus, and never about the date."),
    ("The household has shared the finding with its intelligence contacts. The household has not shared the cousin. Some sources, the household has decided, are family first, and the counterpart, asked whether he will help track the symbol, said he would 'keep the shop open,' which the household has learned to read, from him, as a yes with conditions, and a kindness, and a warning, all in four words.",
     "The household has shared the finding with its intelligence contacts. The household has not shared the cousin; some sources, the household has decided, are family first. Asked whether he will help track the symbol, the counterpart said he would 'keep the shop open,' which the household reads, from him, as a qualified yes."),
    ("The household dried the dishes very carefully. The household has understood, since that evening, that its own work — the feeding, the seating, the leaving-of-doors-open, the patient keeping of unfinished people and unfinished questions — is not a distraction from the campaign's larger dangers. It is, per a cousin who has lived past this world's current date and chosen to come back and say so, the method by which the dangers get understood.",
     "The household dried the dishes very carefully, and has understood, since that evening, that its own quiet work — the feeding, the seating, the leaving-of-doors-open — is not a distraction from the campaign's larger dangers. It is, per a cousin who has lived past this world's current date and chosen to come back and say so, the method by which the dangers get understood."),
    ("what the two of them say to each other, at the long table, in the plain-speech voice, about paths and choices that cannot be unwound — and whether the counterpart's visits are comfort, or counsel, or something closer to apology, delivered across worlds, from a cousin who made different choices and came back, each time, to sit across from the ones he didn't, and call them family. The household does not ask.",
     "what the two of them say to each other, at the long table, in the plain-speech voice, about paths and choices that cannot be unwound. The household does not ask."),
],
}

# Second tuning pass (applied after TRIM; anchors match post-TRIM text).
TRIM2 = {
"pet_rock": [
    ("The household keeps statistics, because the household is sentimental and calls it record-keeping, and Pet Rock's statistics are the file's quiet pride.",
     "The household keeps statistics, and Pet Rock's are the file's quiet pride."),
    ("The record is perfect, and the household is aware the record is perfect, and the household has made the record a point of principle, because the record is an argument: a family that leaves nothing behind is a family that has decided, in practice, that nothing in it is disposable.",
     "The record is perfect, and the household has made it a point of principle, because the record is an argument: a family that leaves nothing behind has decided, in practice, that nothing in it is disposable."),
    ("The chronicle examined the photograph. The chronicle examined the stone. The stone was a stone.",
     "The chronicle examined both. The stone was a stone."),
    ("The registry, notified in due course, examined the paperwork and found it, technically, irregular.",
     "The registry found the paperwork, technically, irregular."),
    ("Every relative knows the Pet Rock clause. Every relative knows that if the stone goes, everyone goes; the stone is the canary, the minimum, the line the household will not cross even in a fire.",
     "Every relative knows the clause: if the stone goes, everyone goes — the canary, the minimum, the line the household will not cross even in a fire."),
],
"dedan": [
    ("He came to the household as a professional, and the household has never quite let him remain one, and he has never quite let himself become anything else, and the tension between those facts is the whole of his file.",
     "He came to the household as a professional; the household has never quite let him remain one, and he has never quite let himself become anything else."),
    ("It is meticulous. It is also, the chronicle has documented across two seasons of cross-referencing, occasionally early.",
     "It is meticulous — and also, the chronicle has documented, occasionally early."),
    ("The team, whose briefing had not prepared it for a striped gatekeeper conducting a moral interview at the doorstep, failed the question three times and was turned three times, and the expedition's internal report describes the household's entrance as 'denied, local custom, unexplained.'",
     "The team, whose briefing had not prepared it for a moral interview at the doorstep, failed the question three times and was turned three times; the expedition's internal report describes the entrance as 'denied, local custom, unexplained.'"),
    ("The chronicle has begun, quietly, reading the log a day ahead, because the log, it turns out, is the household's best early-warning system, and Dedan, asked about this usage, objected, ritually, and left the log on the hallway table, where the chronicle could reach it, which is how Dedan says yes.",
     ""),
    ("As if the log knows, ahead of the household, who is still coming home. He objects to this reading, ritually, and leaves the log on the table.",
     "He objects to this reading, ritually, and leaves the log on the table."),
    ("He has declined to explain the evening. The log entry stands. The chronicle has annotated it with a single word, because the chronicle has learned, from this family, that some annotations should be small: 'listened.'",
     "The chronicle has annotated the entry with a single word, because the chronicle has learned, from this family, that some annotations should be small: 'listened.'"),
    ("The household framed the margin note. Dedan objected, ritually. The frame hangs in the hallway, beside the log, beside the rota, beside the evacuation plan. He walks past it twice a day. He has never once objected to its presence.",
     "The household framed the margin note. Dedan objected, ritually. The frame hangs in the hallway, beside the log and the rota. He walks past it twice a day, and has never once objected to its presence."),
    ("He does not guard against people. He guards the act of arrival, which he considers a sacred and underestimated thing: the moment a person stands at a door and asks, with their whole body, whether they will be received.",
     "He does not guard against people. He guards the act of arrival itself: the moment a person stands at a door and asks, with their whole body, whether they will be received."),
    ("He was hired, in the years after the war, to guard a house that could not afford a guard and could less afford not to have one — the household's door being, even then, famous in certain circles for opening too readily — and he brought with him a threshold code he has never written down and has never once violated:",
     "He was hired, in the years after the war, to guard a house that could not afford a guard and could less afford not to have one, and he brought with him a threshold code he has never written down and has never once violated:"),
],
"mystery_man": [
    ("The chronicle has never published the sketch's existence. The chronicle has published the policy. The household considers this the correct division of labor.",
     ""),
    ("The chronicle's formal position — adopted after long consideration, with Grandpa Semi's quiet approval — is that the questions the registry wants answered about Mysteryman are not the questions the file is for.",
     "The chronicle's formal position is that the questions the registry wants answered are not the questions the file is for."),
    ("is the seat warm this morning (sometimes). Did anyone set the extra plate at dinner (always, by rotation, without discussion). Is the drawing still unfinished (yes, by instruction, by kindness, and the household suspects, increasingly, by his own slow consent).",
     "is the seat warm this morning (sometimes); did anyone set the extra plate (always); is the drawing still unfinished (yes, by kindness, and increasingly, the household suspects, by his own slow consent)."),
    ("pale figure in black at the edge of the reunion photograph from four winters back, blurred, as if he had been moving, or had not entirely been there for the exposure.",
     "pale figure at the edge of the reunion photograph from four winters back, blurred, as if he had not entirely been there for the exposure."),
    ("that unfinished is not the same as absent, that partway is a direction, and that everyone — everyone — gets to arrive at the table in their own time, in their own shape, and be met, when they look up, by a family already glad they came.",
     "that unfinished is not the same as absent, that partway is a direction, and that everyone gets to arrive at the table in their own time, and be met by a family already glad they came."),
    ("The chronicle has documented forty-one such events. The chronicle has explained none of them. The household has demanded no explanations — and the chronicle has slowly come to understand that Mysteryman is not a question the family has failed to answer, but an answer the family has chosen, deliberately and with love, not to question.",
     "The chronicle has documented forty-one such events and explained none of them. The household has demanded no explanations — and the chronicle has come to understand that Mysteryman is not a question the family has failed to answer, but an answer it has chosen, with love, not to question."),
    ("He did not move. He did not threaten. He watched the disturbance the way the household watched it, and when the sky steadied, near dawn, he was gone, and the yard showed no footprints — which the chronicle records without surprise, because the file has never once contained footprints.",
     "He did not move. He did not threaten. He watched the disturbance the way the household watched it, and when the sky steadied he was gone, and the yard showed no footprints — which the file has never once contained."),
    ("The file is the archive's largest and its least full, and the chronicle has come to treat the emptiness as the content.",
     "The file is the archive's largest and its least full."),
],
"sans_deltarune": [
    ("He arrived during the household's strangest winter — the relay was acting up, the sealed folder had been a subject of quiet worry, and Sans had been quiet in the particular way that means the worrying is serious — and the counterpart simply walked in, in the middle of a Friday dinner, through the front door, which Dedan had locked, which Dedan, reviewing the log afterward, found he had logged as 'expected,' in handwriting Dedan did not remember using.",
     "He arrived during the household's strangest winter — the relay acting up, the sealed folder a subject of quiet worry — and simply walked in, in the middle of a Friday dinner, through the front door Dedan had locked, which Dedan, reviewing the log afterward, found he had logged as 'expected,' in handwriting he did not remember using."),
    ("The prices convert strangely: he accepts coins from this world at a rate that makes no mathematical sense, and he accepts, the chronicle has documented, other currencies too — a button, a story, a promise to 'tell the other me i said hey,' which he appeared to consider payment in full.",
     "The prices convert strangely: he accepts this world's coins at a rate that makes no mathematical sense, and other currencies too — a button, a story, a promise to 'tell the other me i said hey,' which he appeared to consider payment in full."),
    ("The chronicle has annotated the entry with the only word that fits: 'visited.' The household has annotated the season with it too.",
     "The chronicle has annotated the entry with the only word that fits: 'visited.'"),
    ("The map behind his counter shows roads this world does not have, and his shadow, the household has documented, occasionally falls the wrong way for the light.",
     "The map behind his counter shows roads this world does not have; his shadow occasionally falls the wrong way for the light."),
    ("'from home,' he said, and then, after a pause the chronicle records as load-bearing, 'but not mine.'",
     "'from home,' he said, and then, after a load-bearing pause, 'but not mine.'"),
    ("The storefront is vacant again by morning. The bell, once, was found still ringing after the shop was gone, and the household let it finish, because interrupting a farewell did not seem correct, even a farewell only the bell had been told about.",
     "The storefront is vacant again by morning. The bell, once, was found still ringing after the shop was gone; the household let it finish, because interrupting a farewell did not seem correct."),
    ("The departures without goodbye remain undecoded: he leaves mid-conversation, mid-visit, mid-sentence, by a pattern no one has mapped, and the household has decided — gently, formally — that the pattern is his, that a cousin from a neighboring story goes home on his story's schedule, and that the bell, ringing after, is farewell enough.",
     "The departures without goodbye remain undecoded: he leaves mid-conversation, mid-sentence, by a pattern no one has mapped, and the household has decided, gently and formally, that a cousin from a neighboring story goes home on his story's schedule — and that the bell, ringing after, is farewell enough."),
    ("and the ledger closed, and the questions kept, which is the household's oldest and truest form of love:",
     "and the questions kept, which is the household's oldest and truest form of love:"),
    ("The counterpart sat. He ate. He complimented the cooking with a joke the household had never heard, which the household took as a gift.",
     "The counterpart sat, ate, and complimented the cooking with a joke the household had never heard, which it took as a gift."),
    ("He sells snacks, household goods, and, on one documented occasion, a canned item whose label read only '??? (heals hp),'",
     "He sells snacks, household goods, and, once, a canned item labeled '??? (heals hp),'"),
],
}
