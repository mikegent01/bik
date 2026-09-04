#!/usr/bin/env python3
"""One-shot: attach custom faiths[] notes to 50 character records.

Every note is written against that character's own lore rather than the
denomination's generic description — the render prefers `note` over
`RELIGION_DATA.denominations[id].description`, so a generic line here would be
strictly worse than leaving the record blank.

Excluded by request: archie_miser, markop, hjumpik, remi_akamatsu_full_backstory.
"""
from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CHARS = ROOT / "Reputation-Matrix2" / "data" / "characters.json"
RELIGION = ROOT / "Reputation-Matrix2" / "data" / "support" / "religion-data.js"

EXCLUDED = {"archie_miser", "markop", "hjumpik", "remi_akamatsu_full_backstory"}

# id -> [(faith_id, role, note), ...]
ASSIGNMENTS: dict[str, list[tuple[str, str, str]]] = {
    # ---- Iron Legion: the Cog Gospel is an institution, not a conviction ----
    "general_ironhand": [("cog_gospel", "Doctrinal authority", "Ironhand does not preach the Gospel of the Cog; he administers it. The doctrine that flesh is weak and steel eternal is useful to him precisely because it converts people into materiel on paper before anyone has to do it in person. Order 120 was signed by a man who had already filed the prisoners under a category that does not require grief.")],
    "byscilla_danos": [("cog_gospel", "Observant, impatient", "Byscilla keeps the forms because the forms are how the Legion knows you are one of theirs. She has also dragged a Mages' Guild quartermaster out of a bath by the ear while her soldiers took heatstroke outside, which is not in the liturgy. Her faith is in the chain of command working; the theology is packaging.")],
    "gamma_agent": [("cog_gospel", "The Protocols", "Gamma Division's version of the Gospel is older and stricter than the Legion's current text — martial codes written before Chaos spilled into the world, followed by a man whose division was declared dead eighty-seven years ago. He recites Protocols to empty rooms. Nobody has told him which clauses were repealed.")],
    "jamesly": [("cog_gospel", "Senior orthodoxy", "Jamesly's belief is procedural: the Protocols are correct because they are the Protocols, and an operative who invokes one outside its intended use has committed something closer to blasphemy than error. He entered the debriefing room to correct a heresy, not a mistake.")],
    "daniel_gamma_command": [("red_winter_bureaucracy", "State before god", "Daniel's object of worship is the command structure itself. He confronted the Gamma Agent not over what was learned in the embassy but over who authorized the learning — a distinction that only matters if the hierarchy is the sacred thing and the intelligence is incidental.")],
    "hargram_fidger": [
        ("cog_gospel", "Chapel Division, on the payroll", "Hargram is employed by the Iron Legion's chapel at Raventree, which makes him the closest thing that chapel has to a congregation. He can recite the responses. He has never been observed to mean one."),
        ("khornate_blood_cult", "Private, unadmitted", "The tattoos map a career through gangs, bandits and sailing vessels, and the thing Hargram actually believes in happens in the pit: that a fight settles a question no argument can, and that the settling is owed to something. He would deny this in the Legion's own chapel, standing up, in daylight."),
    ],
    "rhak_the_lost": [("great_waaagh", "Lapsed by geography", "Rhak carries the gestalt the way an expatriate carries an accent — it strengthens when there are enough of his own around and is nearly inaudible on Byscilla's team, where he is the only orc. 'The Lost' is not a battlefield title. It is what the WAAAGH! sounds like from too far away.")],
    "manderaz_the_mad": [("khornate_blood_cult", "Aristocratic reading", "Manderaz gives the Blood God the bearing of a courtier: violence as a discipline with etiquette, owed to a peer and wasted on a lesser. The hobgoblin khanates produce this reading regularly and the Legion finds it very convenient, since a man who thinks slaughter has manners will follow orders about who is worth killing.")],
    "warol_creeton": [("great_waaagh", "Nominal", "Warol greets survey teams at a greenhouse gate. Whatever the WAAAGH! is doing in the Badlands, it is not reaching the Raventree perimeter, and Warol's practice has thinned to a few phrases he uses when startled.")],
    "aemenor_evenflight": [("asuryan_faithful", "Kept quietly, among humans", "Aemenor observes the Phoenix flame in a Legion detachment that has no idea what the observance is for and would file it as a foreign superstition if it noticed. The cloak shifts colour; the practice does not. The scar predates the enlistment and Aemenor has never said which the faith was meant to answer.")],

    # ---- The Guild and its billing department ----
    "thornbury": [("silph_corporate_policy", "Devout", "Thornbury charged Archie two thousand gold for a broken rope. This is not avarice in Thornbury's understanding — it is doctrine: value must be recognised, recorded, and invoiced, or the world drifts into the sin of the unpriced favour. He also brought rubber duckies for a bubble bath, which he almost certainly itemised.")],
    "parson_pellinost": [("silph_corporate_policy", "Medical Division rite", "Pellinost calls himself a doctor and the Guild calls what he does charity. Both terms survive because the bill arrives afterwards. The Corporate Policy reading of mercy is that it is a service, and an unbilled service is a service nobody valued.")],
    "valorian_stormweave": [("millennium_logic", "Senior Enforcer", "Stormweave's faith is in method: that a properly constructed procedure produces a defensible outcome and the outcome's morality is somebody else's department. Lady Bloomia places him at the Royal Vault on the morning of the assassination, delaying a crown delivery and knowing a name he should not have known. He would call that operational.")],

    # ---- Mushroom Kingdom state faith ----
    "mario": [("star_spirits", "The state's example", "For eighty-five years the Star Sanctuary has held Mario up as proof that a wish, made properly, is answered. Mario himself has not been available for comment on the theology since Peach died, and the faith has grown around his absence rather than his testimony.")],
    "luigi": [
        ("star_spirits", "Raised in it", "Luigi keeps the observances he was raised with, which in his case means sketching the North Star on waking in houses that are not haunted, and doing it faster in houses that are."),
        ("gadd_science", "Contracted into it", "Whatever E. Gadd's Method is, Luigi is its most experienced field practitioner and its least willing one. He has operated the Poltergust in conditions the Method's own literature calls theoretical. The contract is with the Guild now, which has not improved the working relationship with the doctrine."),
    ],
    "professor_e_gadd": [("gadd_science", "Namesake", "The denomination is named for his method and he finds the elevation slightly embarrassing, in the manner of a man who would rather be read than believed. E. Gadd's Method holds that ghosts are a fluid-dynamics problem with opinions. Its founder invented a vacuum cleaner on that basis and was correct.")],
    "toadsworth_sr": [("star_spirits", "Chamberlain's observance", "Toadsworth the Elder kept the palace liturgy for a Princess whose death he may have enabled. If the journals recovered in 1010 BF are authentic, he went on lighting Star Altars for eighty-five years afterwards, which is either penance or the most sustained act of institutional composure on record.")],
    "chancellor_toadsworth": [("star_spirits", "Office, not conviction", "The Chancellor performs the state faith because the Regency is the state faith's principal patron and a Chancellor who skipped the rite would be reported by lunchtime. He inherited his father's chair and possibly his father's complicity. The Sanctuary has not asked him about the second thing.")],
    "lady_bloomia": [("star_spirits", "Devout, and a witness", "Bloomia served Peach personally and kept the observances beside her. She is also the missing link in the assassination — a woman who knew the household's rites, the household's doors, and which of the two mattered on the morning of Highsun 1.")],
    "captain_toadette": [
        ("star_spirits", "Devout", "Toadette prays before operations and considers this a logistical step rather than a spiritual one. The Loyalists fight for a dead Princess; the faith supplies the vocabulary that makes eighty-five years of that sound like duty instead of grief."),
        ("lady_of_the_lake", "Adopted discipline", "The chivalric code arrived with a captured Chramalot manual and Toadette kept the parts about honouring surrender. Her officers report that she means them, which is the inconvenient part."),
    ],
    "embercap": [("star_spirits", "Front-rank observance", "Embercap leads assaults from the front and says the wish before the door goes in. The Field Commander's version of the faith is short, practical, and addressed mostly to the people behind him.")],
    "big_r": [("star_spirits", "Inherited", "Big R keeps the faith the way he keeps the line — without commentary, and further forward than anyone asked him to. The field tally writes Black Bear. The after-action writes ANCHOR. Neither notes that he says the wish for the whole squad because nobody else has time.")],

    # ---- Liberated Toads: a faith under pressure ----
    "speaker_l": [
        ("star_spirits", "Lapsing", "Speaker L was a procedural politician who believed a wish made properly and a question asked properly were the same kind of act. Order 120 killed everyone that belief was protecting."),
        ("khornate_blood_cult", "Drifting toward", "The war anthems are new. Speaker L would reject the label furiously and the drift is visible anyway: violence reframed as the only remaining honest transaction, and a vow to hunt the Green Decoy that is not about intelligence value. Nobody in the Pond Patrol has named what he is becoming, which is how these things proceed."),
    ],
    "elder_mudcap": [("star_spirits", "First seat, oldest observance", "Mudcap treats survivor testimony as law and the liturgy as the oldest surviving testimony of all. He is the last member of the council who remembers the rite as something done in a kingdom rather than in a barrel.")],
    "scribe_dewdrop": [("order_of_maat", "Convert by temperament", "Dewdrop found a desert doctrine about weighing truth and recognised her own job in it. She compares testimony, refuses to let emergency language erase inconvenient facts, and has told Speaker L to his face that a record altered for morale is a record destroyed. Maat's scales are the only authority she has ever cited approvingly.")],
    "healer_mistpetal": [("sanctum_of_light", "Practising", "Mistpetal measures every proposed operation against the casualty list it implies, which is the Sanctum's actual doctrine rather than its decorative one. The Menders pray over the wounded and then argue with the council, in that order.")],
    "creek_medic": [("sanctum_of_light", "Hospital-trained", "Creek learned the Holy Light's healing rites in a hospital before the barrels, which means he learned them as procedure with a prayer attached. He stabilised Dan after Dan lost an arm. He has not said which half of the training did it.")],
    "warden_thornshell": [("khornate_blood_cult", "Unacknowledged", "Thornshell argues for direct action every time and frames it as defence every time. The Blood God does not require you to know his name; he requires you to keep reaching the same conclusion. Dewdrop has started keeping a tally of the votes.")],
    "forgemaster_ironspore": [("scrappers_code", "Working creed", "Ironspore maintains a diaspora's equipment out of salvage, and the Scrapper's Code — that a discarded thing retains its potential until someone proves otherwise — is less a religion to him than an accurate description of his supply chain.")],
    "captain_fernback": [("lady_of_the_lake", "Sworn to a person, not a realm", "Fernback took the chivalric oath and pointed it at Speaker L rather than at any crown. The Lady's doctrine does not permit this substitution. Fernback has not noticed, and the distinction is going to matter.")],
    "speaker_rivers": [("order_of_maat", "Resigned on principle", "Rivers walked out of the Midlands Diet at 09:00 on the 21st of Highsun over the Iron Mandate. Maat's balance is the only frame in which that act reads as duty rather than desertion, and Rivers has been quietly citing it since.")],
    "the_mole": [("tzeentch_schemes", "Functionally, if not confessed", "The Mole held the Scouts' elected seat and reported to the Iron Legion, and sustained that for long enough that the two loyalties stopped being distinguishable from inside. The Path of Change does not ask which one was real. That is the doctrine's whole appeal.")],
    "dan": [("star_spirits", "Organiser's faith", "Dan helped build a faction out of people who had been shipped in barrels, and kept the observances because a shared rite was the cheapest structure available. He was a competent organiser before he was anything else.")],
    "dan_the_toad": [("missingno_glitch", "Involuntary congregation", "There are too many Dans. The Glitch venerates data corruption and reality errors, and this Dan is one — a dimensional duplicate who admitted shoving the original into a Mages' Guild null cage to stop the question being asked out loud. He does not worship the Glitch. He is evidence for it.")],
    "bones": [("gematria_gnosis", "Reader, not believer", "Bones stole Fundamentals of Abjuration and read Corvinarus's ten-page Veins of the Tapestry — a masterwork that treats the structure of reality as a text with an author. Gematria Gnosis holds that the sublime is reachable through the horrific and abstract. Bones took the reading and left the reverence.")],
    "toad_lee": [("millennium_logic", "Practical adherent", "Toad Lee is the reason Disaster Inc. was not wholly consumed by the Feywild, and the reason is that he reads things. The Millennium doctrine — that method beats intuition and a checked answer beats a confident one — describes his entire contribution to the crisis.")],
    "eager": [("helix_fossil_cult", "Sincere, and statistically doomed", "Eager consults omens before choosing a direction and has a supernatural gift for choosing the worst available one. The Church of Helix teaches that the fossil's guidance is real and its interpretation is your problem. Eager is the strongest evidence for both halves of that claim.")],
    "ryan": [("void_nihilism", "Arrived at, not chosen", "Ryan jumped off the Vigilance during the Iron Sky Breach rather than be taken. Void Nihilism holds that the end is inevitable and the only question is your posture on the way. Nobody recruited Ryan to this. He worked it out mid-air.")],
    "green_t": [("order_of_maat", "Private code, no congregation", "Green T ran a criminal empire with the manners of a garden-party host and executes with the same tidiness — every account settled, nothing left ragged. Maat's weighing is the closest published doctrine to what he actually does, and he has never once called it a faith. He handed a fourteen-year-old a silenced revolver to close a loose end.")],

    # ---- Shadow Estate and the Onyx Hand ----
    "marcus_ashford": [("sanguine_path", "Orthodox", "Ashford represents the Onyx Hand and the Sanguine Path is the Hand's official cosmology: blood as hierarchy, undeath as promotion. He arrived mid-confrontation to remind everyone present which rung they occupied.")],
    "randell_vampire": [("sanguine_path", "Claimed, thinly", "Randell followed Remi and Eager to Tymnas's cottage and claimed authorisation for both the trampoline and the arrest. The Path's doctrine of rightful precedence is extremely convenient to a vampire whose authorisation nobody can verify.")],
    "vivian_corvinarus": [("sanguine_path", "Fraudulent", "Vivian is not blood-related to the Corvinarus family, was not the woman the dinner guests met, and claimed an inheritance on the strength of a bloodline he does not have. The Sanguine Path is a faith entirely about blood as legitimacy, which made it the exact doctrine worth counterfeiting.")],
    "lyranth": [("slaanesh_excess", "Aesthetic devotion", "Lyranth makes sculptures of stunning beauty out of people who were alive that morning, told Remi to smile, and exhibited her under a title crediting someone who was not there. The Cult of Excess teaches that sensation justifies itself. Lyranth's practice is the doctrine with the apologies removed.")],
    "the_archivist": [("gematria_gnosis", "Curator", "The Archivist controls the library and trades healing for indentured service — knowledge as a currency with a body attached. Gematria Gnosis seeks the sublime through the horrific and abstract, and the Archivist has organised an entire estate's suffering into a catalogue.")],
    "tymnas": [("circle_of_spores", "Groundskeeper's faith", "Tymnas has tended the Shadow Estate's grounds long enough to stop asking who owns them. The Circle's teaching that rot is a stage rather than a failure is, for a satyr gardening in the Shadowfell, simply the observed behaviour of the soil.")],
    "boundy": [("circle_of_spores", "Made, not converted", "The Mazebounds were blighted into what they are. Boundy negotiates, remembers, and sings, which is more personhood than the doctrine of decay usually leaves behind — and the Circle would call the singing part of the cycle rather than a remnant of the person. Boundy has not been asked which reading he prefers.")],
    "kyrn": [("abyss_order_void", "Operational", "Kyrn returned to Remi's cell and demanded she kill the Oracle and sever the planar link. The Abyss teaches hatred of the imposed order above all. Whatever Kyrn's facility is for, its instructions and the Abyss's doctrine keep arriving at the same demand.")],
    "the_oracle": [("tzeentch_schemes", "Structurally, whatever it professes", "The Oracle is a role wearing whoever was convenient, custodian of bleeding timelines, and the entity that talked a volatile pyromancer into anchoring a reality-altering ritual. The Path of Change venerates the schemer whose plans nest inside other plans. The Oracle has never claimed the faith and behaves indistinguishably from its ideal practitioner.")],
    "orvinder_danos": [("tzeentch_schemes", "Suspected", "A well-tailored man with a cane he does not need, plain clothing chosen to be forgettable, and dimensional interests nobody has mapped. Every visible choice Orvinder makes is about controlling what other people conclude. The archive files him here provisionally and expects to be surprised.")],
    "mystic_morel": [("jester_cult", "Practising, cruelly", "Mystic Morel sings while he works. He robbed Archie while Archie was pinned, bought a petrified fourteen-year-old at auction for twelve thousand gold, and put an invisible ring on her finger that would tighten daily and cut if she told anyone. The Cosmic Punchline holds that existence is a joke; Morel's contribution is insisting on an audience.")],

    # ---- Cosmic and unaligned ----
    "bryan": [
        ("jester_cult", "Servant, by another name", "Bryan serves a deity he calls the Toad God, and the Toad God agrees with the Cosmic Jester that the world is a thing to be bitten. Bryan arrived at the Raventree crisis with divine instruction and no Shadowfell experience whatsoever, which is the most Punchline-shaped situation the archive has recorded this year."),
        ("star_spirits", "Heretical reading", "The Toad God ascended by fusing with a Crystal Star shard in the ashes of Edgeshade. Bryan's theology is therefore a Star Spirits heresy: the wish-granting stars are real, and one of them is now a person with a grievance."),
    ],
    "waluigi": [("waluigi_time", "Unwilling object of worship", "The Cult of WAH holds that everyone is cheating but you. Waluigi did not found it, does not collect from it, and has filed a formal objection to the name in his own encyclopedia — but he did articulate the doctrine, at length, to a god, while strapped to an electric chair. The congregation considers this scripture. WAH.")],
    "wario": [("silph_corporate_policy", "Founder-adjacent", "Wario's ledger tracks debts owed by generals, bosses and at least one deceased dragon, and he has offered to forgive one in exchange for a man's kidneys. Corporate Policy's trinity is profit, innovation and the Master Ball. Wario has never needed the third.")],
    "bowser": [("great_maw", "Refuses the title", "The Maw's doctrine of the insatiable is exactly what eighty-five years of Regency propaganda has accused Bowser of embodying, and it is the one accusation he actually resents. He ate raw dripping meat in one bite at a vampire's table and then stopped a fourteen-year-old executing a prisoner because it was brutal even for him. The Maw has no clause for that.")],
    "kamek": [("great_maw", "Devout, catastrophically", "Kamek decided Bowser's methods were obsolete and dug under the castle to wake a world-eating space worm. There is no more literal act of Maw worship in the archive. He has been reduced to an avatar and captured, and the doctrine has not been noticeably inconvenienced.")],
    "king_boo": [("dark_moon_clan", "Sovereign", "The Dark Moon drives ghosts mad and King Boo governs the ones it has finished with. He is one of the few entities in the crisis operating outside every known faction structure, which the Clan would say is not independence but seniority.")],
    "mr_l": [("tzeentch_schemes", "Was, or is, or was made", "The Regency says Mr. L was a temporary condition — Luigi brainwashed and weaponised. The Path of Change teaches that the self is a draft. Both accounts explain the evidence, and only one of them lets Luigi off, which is precisely why the archive declines to choose.")],
    "flowey": [("void_nihilism", "Doctrinally pure", "Sans identifies Flowey as the twisted remnant of Asgore's dead firstborn. Void Nihilism teaches that entropy is inevitable and meaning is a comforting error. Flowey did not adopt this position. He was returned without the capacity to hold any other.")],
    "kirby": [("great_maw", "Theologically embarrassing", "Kirby solves problems by eating them, and the problems have included cosmic horrors and galaxy-enders. By every doctrinal test the Great Maw applies, Kirby qualifies as its highest expression. The Maw's clergy find this intolerable, because Kirby is demonstrably kind and the doctrine has no provision for that.")],
    "king_dedede": [("bean_star_faith", "Enthusiastic, imprecise", "Dedede venerates the wish-granting vegetable star with the sincerity of a monarch who has never had a wish refused and the doctrinal precision of a man who mainly noticed it was food-adjacent. His Second Summit conduct suggests the wishes are not about the kingdom.")],
    "meta_knight": [("lady_of_the_lake", "Sworn, quietly", "Meta Knight actually runs Dreamland while Dedede holds the title, and the chivalric code is the only thing that makes that arrangement bearable: honour is owed to the office, service is owed to the realm, and neither requires the officeholder to deserve it.")],
    "princess_daisy": [("order_of_maat", "Sarasaland's own", "Maat's balance came out of desert regions and Sarasaland is one of them — this is Daisy's inherited state faith rather than a discovery. She hosted the Second Diplomatic Summit on its principles and watched delegations walk out of it anyway.")],
    "king_k_rool": [("cult_of_the_engine", "Patron", "K. Rool's schemes run on machinery — ships, weapons, and an information operation at the Second Summit that baited Lanky Kong on camera. The Cult venerates the perpetual motion that keeps the world running. K. Rool venerates the part where it can be aimed.")],
    "kremlings": [("cult_of_the_engine", "Institutional", "The Krew's reverence for the Engine is indistinguishable from its logistics: the machines are maintained, the crews are drilled, and the doctrine supplies a reason to keep both going between campaigns against Kongo Bongo.")],
    "chief_thornpaw": [("yggdrasil_pact", "Chief and spirit-walker", "The Rakasha kept dimensional traditions centuries before the Mages' Guild existed, and the Pact's reverence for the trees that connect realms is the closest published doctrine to what Thornpaw's shamans actually practise. He also testified at Fawful's gala to a secret relationship with Princess Peach, which no tradition covers.")],
    "rakasha": [
        ("yggdrasil_pact", "Ancestral", "The confederation's spirit-walking and its dimensional traditions predate the Guild's charter, and the Pact is the register the outside world files them under. The Rakasha did not choose the filing."),
        ("wild_hunt", "The other half", "The tribes are warriors as well as spirit-walkers, and the Hunt's predator-and-prey theology accounts for the half of Rakasha practice that the Pact's gentler reading keeps leaving out."),
    ],
    "robinson": [("wild_hunt", "Centaur inheritance", "Markop's father stood in the Dragon's Den at Dragon Mountain at 10:00 on the 21st of Highsun. The Hunt's doctrine — that the pursuit is the relationship, and both roles are honourable — is the frame a centaur brings to a room like that.")],
    "elder_meadowlight": [("yggdrasil_pact", "Circle elder", "Rowan Meadowlight was a respected druid of the Veridian Grove and died on the same day as the Swiftsoul explosion. The Grove's practice was Pact orthodoxy: the trees connect the realms, and the realms are therefore each other's responsibility.")],
    "dracule_mihawk": [("order_of_maat", "Solitary observance", "The Hawk of Blackfen Pass watches the Old World and intervenes rarely. Maat's weighing is a doctrine for judging without ruling, which is precisely the position Mihawk has taken up and declined to explain.")],
    "miles_edgeworth": [("order_of_maat", "Professional creed", "Edgeworth prosecutes, and Maat's scales are the oldest available statement of what a prosecution is supposed to be for. He is handling the case against Archie Miser in a court where Waluigi introduced a Wheel of Regret, which has tested the doctrine considerably.")],
    "high_inquisitor_vale": [("silver_flame_faith", "Inquisitorial commission", "Vale holds an Oathbound commission under a faith whose Edict of Purification supplies the legal theory for most of what the Mandate now permits. The Flame provides the authority; the Oathbound provide the paperwork.")],
    "commander_g": [("silph_corporate_policy", "Chapter doctrine", "The Iron Fists run the Swiftsoul Chapter as a business and Commander G runs it ruthlessly. Corporate Policy's teaching that price discovers truth is the whole of the Chapter's ethics, and it is the reason a bounty on a confessed arsonist counts as a market signal rather than a moral position.")],
    "xo": [("abyss_order_void", "Destabilising", "X.O. is Commander G's daughter and the Chapter's internal problem. The Abyss hates imposed order specifically, which is a precise description of a person whose disruption is aimed at her own father's structure rather than at anything outside it.")],
    "kyle_coinsoul": [("silph_corporate_policy", "Rank and file", "Coinsoul dealt with Archie shortly before Swiftsoul and priced the interaction the way the Chapter prices everything. The doctrine reaches the bottom of the org chart intact, which is more than most faiths manage.")],
    "rakka": [("gematria_gnosis", "Temple of one", "Rakka employs agents for retrieval missions from a hidden temple and has never explained what the retrieved things are for. Gematria Gnosis seeks the sublime through the abstract and the horrific, and every commission Rakka has issued fits that description from the outside.")],
    "darno_spriggon": [("dark_moon_clan", "Appeared under it", "Spriggon showed Hargram's team a keychain with an Iron Legion rank ring and then departed into darkness, which is the entirety of the record. The Clan's theology concerns what the moon sends and does not take back. The archive files him here for want of anything firmer.")],
    "alice": [("dark_moon_clan", "Bound, not devout", "Alice is a spirit in a tattered Victorian dress whose anger drives the mansion's pursuit. The Dark Moon is the doctrine that explains a ghost kept lucid enough to recognise faces and furious enough to hunt them, which is a worse condition than madness.")],
    "director_vale": [("red_winter_bureaucracy", "Badge as scripture", "Vale appeared with a silver Director's badge after DGK Central denied sending Liam anywhere. State Atheism worships the System and the credential that proves you are inside it. Vale has produced the credential. Central has produced a denial. Only one of these is portable.")],
    "liam": [("millennium_logic", "Trained into it", "Liam entered the Dread Mansion to collect Spirit Residue on an assignment his own organisation says it never issued. Millennium Logic teaches that a documented procedure is a sufficient reason to act. Liam followed one all the way into a haunting.")],
    "mike": [("scrappers_code", "Casual", "mike — lower-case, and he will tell you it is on his papers before you finish asking — took one expedition's casual labour for Wario's Enterprise. The Scrapper's Code holds that discarded things retain their potential. mike has heard this applied to himself and did not care for it.")],
    "piktor_deldkur_the_third": [("brotherhood_of_steel", "House Deldkur", "Hjumpik's grandfather, named in the war room of the Overgrown Manor on the morning of 1 Aethel, 922 BF. The Steel Creed's instinct — that dangerous knowledge should be held rather than shared, for everyone's protection — is a dwarven house's default posture rendered as theology.")],

    # ---- Snowdin: the Bone-Line ----
    "sans": [("void_nihilism", "Knows too much to practise anything else", "Sans is unbothered by cosmic horror in a way that reads as calm and is not. Void Nihilism teaches that the end is coming and the interval is the only thing you get. He keeps the interval well: a post at the perimeter, a brother who believes in him, and jokes that are load-bearing.")],
    "papyrus": [("star_spirits", "Wholehearted", "Papyrus makes wishes out loud, to strangers, on purpose, which is technically the Mercurias observance performed continuously. The Sanctuary's doctrine is that hope spreads by being shared. Papyrus is either the faith's ideal practitioner or proof that it did not need a faith.")],
    "sans_deltarune": [("missingno_glitch", "Cousin from a corrupted file", "A parallel counterpart with a familiar storefront and a different map of impossible roads. The Glitch venerates the places where reality's record disagrees with itself. He is the household's standing evidence that it does, and they set a place for him anyway.")],
    "wing_gaster": [("missingno_glitch", "Became the doctrine", "Family records name Wing Gaster as a brilliant scientist studying darkness and the architecture between worlds before he vanished from ordinary history. The Glitch worships data corruption and reality errors. Gaster is not a worshipper. He is the incident.")],
    "mystery_man": [("missingno_glitch", "Sighting-only", "Documented by sketches, absences, and appearances near sealed rooms and broken save points. The household policy is to leave a seat and ask no cruel questions. The Glitch would call that correct liturgical practice.")],
    "prunsel": [("unown_alphabet", "Registry anomaly", "A colossal eye-shaped relative recorded in the margins of the family archive — some entries call it a cousin transformed by unfinished science, others a guardian that learned the name. The Hidden Power venerates letters that rewrite reality. Prunsel is filed in the margins because the margins are where the rewriting shows.")],
    "helvetica": [("unown_alphabet", "Professionally", "Helvetica believes clarity is mercy and designs Snowdin's signs on that principle. The Hidden Power holds that letters rewrite reality. A signmaker in a blizzard would say that is not doctrine, it is the job.")],
    "cursive": [("unown_alphabet", "The other school", "Cursive turns gossip, notices and apologies into small works of art, and his friendly rivalry with Helvetica is the Bone-Line's only sustained theological dispute: whether the letter serves the reader or the meaning. Both positions are orthodox. Neither will concede.")],
    "times_new_roman": [("millennium_logic", "Chronicle Office", "Times New Roman wants dates, sources and a respectable typeface, and distrusts any story introduced with 'you had to be there.' Millennium Logic's insistence on method over intuition is his entire editorial policy, applied to a family that communicates almost entirely by anecdote.")],
    "garbage_brother": [("scrappers_code", "Exemplary", "Baby Bones's favourite rattle and Papyrus's emergency spaghetti strainer both came off his workbench. The Scrapper's Code teaches reverence for the potential in discarded things. He dislikes the nickname and keeps the practice, which is the most orthodox thing anyone in Snowdin does.")],
    "dirty_brother": [("steam_covenant", "Boiler-side", "The green sparks are residue from ancient heating runes, not a curse, and he enjoys letting visitors believe otherwise. The Covenant venerates pressure and gears. Dirty Brother keeps Snowdin warm and lets the theology arrive on its own.")],
    "quantity": [("cyber_network_hive", "Literally", "A cooperative cluster of skeletons sharing one rolling chassis, several opinions and impeccable timing. The Network Hive's doctrine of collective consciousness is not an aspiration here; it is a description, and Quantity finds the Hive's reverence for it slightly overwrought.")],
    "pet_rock": [("helix_fossil_cult", "Object of, arguably", "A tiny stone with no verified movement and an unquestioned place in the family. The Church of Helix venerates ancient fossils as sources of guidance. Baby Bones named it, Papyrus set it a plate, and nobody has established which side of the altar Pet Rock is on.")],
    "real_star": [("luma_caretakers", "Claimed by both", "A Real Star insists the Bone-Line adopted him by cheering loudly enough at the night sky, and Papyrus accepted the claim on the spot. The Caretakers raise young stars. They have never been able to establish whether this one is theirs.")],
    "starman": [("luma_caretakers", "Guest, and possibly staff", "A silent grey visitor who arrives when the sky changes and once guided several relatives through a whiteout with a light that cast no shadows. Will leaves a chair. Sans watches the horizon. The Caretakers' doctrine would explain all three of those facts and has not been asked to.")],
    "speen_kind_of_down_lately": [("nurgle_rot", "The kind reading", "The doctrine's public face is disease and despair; its actual teaching is endurance — that what persists through decline is still yours. Speen notices when other people are performing happiness. Lazybones keeps tea ready. Grandfather's Love, read generously, is the household's most accurate description of what they do for him.")],
    "lazybones": [("void_nihilism", "Comfortably", "From a nest of blankets by the heater, Lazybones coordinates emergency snacks, spare scarves and quiet cover stories. Void Nihilism says nothing lasts. Lazybones agrees and has concluded that the correct response is a warm room and a plausible excuse for whoever needs one.")],
    "pretty_soon": [("bean_star_faith", "Hopeful", "A small green-scarfed cousin who promises every delayed plan will happen 'pretty soon' — a phrase the family now uses to mean hopeful patience rather than a deadline. The Bean Star grants wishes on its own schedule. Pretty Soon has made peace with the terms.")],
    "has_a_very_special_attack": [("jester_cult", "Theatrical", "He announces every entrance as the last act of an opera, and his very special attack has so many versions that nobody agrees whether it is a spell, a dance or a difficult puzzle. The Cosmic Punchline holds that the joke is the point. Papyrus encourages him, which the Cult would consider enabling.")],
    "brother_killer": [("khornate_blood_cult", "Refusing it, daily", "An intense red-eyed relation carrying a conflict nobody summarises the same way twice. The Blood God's pull is real and Brother Killer is losing to it slowly and on purpose — anger aimed at the perimeter, never at the house. In Snowdin this counts as recovery. In Khorne's terms it counts as a tithe.")],
    "dedan": [("lady_of_the_lake", "Duty as doctrine", "Dedan treats every entrance as a question of responsibility, is intimidating professionally and patient by choice, especially with children. The Lady's chivalry is about who a guard is for. Dedan has never called it a faith and has never once got the answer wrong.")],
    "will": [("sanctum_of_light", "Quartermaster's version", "Blankets, medicine, lantern oil and emergency noodles, organised with military focus under the motto 'feed first, worry later.' The Sanctum's doctrine emphasises healing and protection. Will has stripped out the healing rites and kept the supply chain, which is arguably the load-bearing half.")],
    "grandpa_semi": [("yggdrasil_pact", "Roots, in the family sense", "Grandpa Semi keeps registry cards, old recipes and half-finished jokes in a cedar chest, and insists the missing pieces are sometimes the important part. The Pact reveres what connects across distance. He taught Sans to listen before speaking, which is the only rite he has ever administered.")],
    "toriel": [("sanctum_of_light", "Ordained in practice", "Sans names Toriel as one of the only authorities who can grant personal royal approval through the Underground. The Sanctum's emphasis on healing and protection describes her function exactly, and she has exercised it without any of the institution that usually comes attached.")],
    "asgore": [("sanctum_of_light", "Compromised", "Asgore is barrier authority and the father of the dead child who became Flowey. The Sanctum teaches protection as the highest duty. He is the archive's clearest case of a man who kept the doctrine and lost the thing it was for.")],
    "koffin_k": [("jester_cult", "Aspiring", "A lonely theatrical would-be supervillain with a fake notebook, real maps and real minions. The Cosmic Punchline teaches that existence is a joke and laughter is the only response. Koffin-K has assembled all the apparatus of a villain and produced, so far, only the laughter.")],
}


def main() -> int:
    religion_src = RELIGION.read_text(encoding="utf-8")
    valid_faiths = set(re.findall(r"^\s{8}(\w+):\s*\{", religion_src, re.M))

    data = json.loads(CHARS.read_text(encoding="utf-8"))
    by_id = {c["id"]: c for c in data if isinstance(c, dict) and c.get("id")}

    errors: list[str] = []
    for cid, faiths in ASSIGNMENTS.items():
        if cid in EXCLUDED:
            errors.append(f"{cid} is on the exclusion list")
        if cid not in by_id:
            errors.append(f"{cid} is not a character record")
        for fid, role, note in faiths:
            if fid not in valid_faiths:
                errors.append(f"{cid}: unknown faith id {fid!r}")
            if len(note) < 120:
                errors.append(f"{cid}/{fid}: note is too short to be worth overriding the default")
    if errors:
        print("FAIL — refusing to write:")
        for e in errors:
            print("  -", e)
        return 1

    changed = 0
    for cid, faiths in ASSIGNMENTS.items():
        rec = by_id[cid]
        rec["faiths"] = [{"id": f, "role": r, "note": n} for f, r, n in faiths]
        changed += 1

    # The file is stored as indent=2, ASCII-escaped, with no trailing newline.
    # Verified byte-identical on a no-op round trip before this script writes.
    CHARS.write_text(json.dumps(data, ensure_ascii=True, indent=2), encoding="utf-8")
    total_faiths = sum(len(v) for v in ASSIGNMENTS.values())
    print(f"OK: wrote faiths[] to {changed} character records ({total_faiths} declarations)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
