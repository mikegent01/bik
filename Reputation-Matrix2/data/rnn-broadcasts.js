/* GENERATED FILE — do not hand-edit.
   Source scripts: tools/rnn-scripts/*.json
   Rebuild:        python3 tools/build-rnn-broadcast.py
   Cadence:        one episode per ~10 filed events (docs/RNN_BROADCAST_GUIDE.md). */
window.RNN_BROADCASTS = {
  "generated": "2026-08-13",
  "latest": "rnn-002",
  "cadence": "One episode per ~10 filed events, not one per event. See docs/RNN_BROADCAST_GUIDE.md.",
  "episodes": [
    {
      "_comment": "Events filed but not yet aired on the Rakasha News Network. Append {id, filed, note} the moment an event is filed (step 7 of docs/SESSION_FILING_PROCESS.md). When pending[] reaches `threshold`, write the next tools/rnn-scripts/epNNN.json covering those events, then clear pending[] to [] and set lastEpisode. Ground truth is `python3 tools/build-rnn-broadcast.py --unaired`; if this file and that disagree, --unaired is right.",
      "threshold": 10,
      "lastEpisode": "rnn-002",
      "pending": [],
      "runtimeMs": 0
    },
    {
      "id": "rnn-001",
      "number": 1,
      "title": "The Box That Danced and the Boy Who Died Twice",
      "airWeek": "1040-HARVESTIDE-W5",
      "recordedOn": "2026-08-11",
      "huntDay": "HARVESTIDE 30, 1040 BF",
      "covering": "Harvestide 18 – Harvestnoon 1, 1040 BF",
      "anchorName": "Whisper-in-Wind",
      "anchorRole": "Death Speaker, Spirit-Walker Clan",
      "fieldName": "Acolyte Dan",
      "fieldRole": "Runner of the Cold Roads",
      "sourceEvents": [
        "the_box_guardian_sharpie_disguise_and_the_soot_barrel",
        "the_imp_ambush_aftermath_and_kyrn_cell_escape",
        "the_conductors_mutiny",
        "mount_ebott_survey_part_7",
        "feyward_chop_bros_soul_ring_and_the_guard_with_no_name",
        "bones_alpine_flight_goblin_camp_and_legion_wall",
        "the_imp_ambush_of_harvestide_29",
        "the_midnight_audit_of_harvestide_28",
        "the_embassy_ambush_and_luigi_interrogation"
      ],
      "ticker": [
        "SOOT-BARREL DISCHARGE AT THE KYRN DEN — NO CONFIRMED DEAD",
        "BLACK CRYSTAL RECOVERED BY THE ONE CALLED REMI",
        "THE STEEL DOG WALKS AGAIN — MELTED, MENDED, LOYAL",
        "SHELL-BACKS' RAIL LINE: ONE BOSS BEATEN BY HIS OWN HANDS",
        "UNDER THE MOUNTAIN — THE FLOWER STOPS SCREAMING",
        "GREEN HOUSE OF FEYWARD WORE ITS OWNER'S FACE",
        "IRON-HIDES BUILD A WALL IN THE SNOW — GOBLINS CHARGE TOLL",
        "THE JUNGLE SEES ALL"
      ],
      "segments": [
        {
          "slug": "COLD OPEN",
          "type": "titlecard",
          "title": "Rakasha News Network",
          "lines": [
            {
              "expression": "normal",
              "text": "Iron rusts. Flesh rots. Only the Hunt remains — and the Hunt has been busy.",
              "duration": 5800
            },
            {
              "expression": "normal",
              "text": "This is the Rakasha News Network. Hunt Day thirty of Harvestide. The jungle sees all, and tonight the jungle has notes.",
              "duration": 7840
            }
          ]
        },
        {
          "slug": "LEAD STORY",
          "type": "anchor",
          "title": "The Box That Danced",
          "articleId": "the_box_guardian_sharpie_disguise_and_the_soot_barrel",
          "lines": [
            {
              "expression": "mouthslightlyopen",
              "text": "We open in the dark woods below the Shadow Estate, where a blood trail was followed by two hunters and answered by a singing hound.",
              "duration": 9200
            },
            {
              "expression": "eyebrowraised",
              "text": "Markop of the axe called on the Locate rite for a stolen necklace. The rite worked. It found the necklace behind him, still around the neck of its owner, who had freed herself without asking anyone's permission.",
              "duration": 11000
            },
            {
              "expression": "normal",
              "text": "Remi Akamatsu returned to the den of the one called Kyrn. Invisible. Into a crab cage. Out of a crab cage.",
              "duration": 7840
            },
            {
              "expression": "happy",
              "text": "She woke a guardian made of box and hinge, and the guardian did not strike her — it danced. A gun-barrel of soot answered instead, and she walked out black as a burnt stump wearing a carton with a face drawn on it in Sharpie.",
              "duration": 11000
            },
            {
              "expression": "eyebrowraised",
              "text": "The Black Crystal is hers again. Her enemies searched for a thief and found a cardboard box singing a Spore-Rat shanty. Remember that when you next decide what a warrior looks like.",
              "duration": 11000
            }
          ]
        },
        {
          "slug": "THE CELLS",
          "type": "anchor",
          "title": "The Book, the Cells, and the Dog Who Came Back",
          "articleId": "the_imp_ambush_aftermath_and_kyrn_cell_escape",
          "lines": [
            {
              "expression": "concerned",
              "text": "Before the box, the cottage. The imps of the dead Archivist came for their book and took everything else instead.",
              "duration": 7500
            },
            {
              "expression": "sad",
              "text": "Eager's whip found Salam by mistake. Rattles carried him bleeding through a window and swore to protect the rest. Tymnas was stung. Dan the one-armed smote an imp dead. Markop killed two more, and kept the book.",
              "duration": 11000
            },
            {
              "expression": "concerned",
              "text": "Remi was taken. One hit point in a cell, and made to watch Kyrn melt the steel dog Mossy into slag while she could do nothing about it.",
              "duration": 10220
            },
            {
              "expression": "normal",
              "text": "Her door was unlocked. Whether that was carelessness or an invitation, we do not yet know — and in this house we do not pretend to know.",
              "duration": 9880
            },
            {
              "expression": "happy",
              "text": "She mended the dog with her own hands and walked out. The Black Crystal and the Mirror went with the imps. The book did not. Call that a draw and count your fingers.",
              "duration": 11000
            }
          ]
        },
        {
          "slug": "THE RAIL LINE",
          "type": "anchor",
          "title": "A Boss Undone by His Own Hands",
          "articleId": "the_conductors_mutiny",
          "lines": [
            {
              "expression": "eyebrowraised",
              "text": "North, on the Shell-Backs' underground rail line, a small man wanted a conductor's hat and could not be given one.",
              "duration": 7500
            },
            {
              "expression": "mouthslightlyopen",
              "text": "Koffin-K struck a ticket clerk, fought two guards, and boarded anyway. Mid-transit his own minions — the ones called Lanky and Bulky — tried to put him to sleep and take him.",
              "duration": 11000
            },
            {
              "expression": "concerned",
              "text": "Mark this: the mutiny was too clean. Trained hands. Practiced grips. They called him 'Boss' the way a soldier says 'Sir', and when it was over they refused to explain themselves and stayed behind at Hotland.",
              "duration": 11000
            },
            {
              "expression": "normal",
              "text": "The Iron-Hide agent ended it with a tackle and a field manual to the skull. The manual survived. Then the swordsman Mihawk read one page of that manual and went silent, and has said nothing about it since.",
              "duration": 11000
            },
            {
              "expression": "eyebrowraised",
              "text": "A silent hunter is a hunter who has seen the trap. Watch the page, not the fight.",
              "duration": 6480
            }
          ]
        },
        {
          "slug": "UNDER THE MOUNTAIN",
          "type": "anchor",
          "title": "The Tea Promise and the Throne Room Oath",
          "articleId": "mount_ebott_survey_part_7",
          "lines": [
            {
              "expression": "sad",
              "text": "Beneath Mount Ebott the false sun still burns over a meadow that is not a meadow, and the tall bone-brother Papyrus is dust on the tiles of it.",
              "duration": 10220
            },
            {
              "expression": "concerned",
              "text": "His brother remembered tea with a king, stopped time, and unmade the flower in blue fire. There was no ceremony. There was no speech. There rarely is, when it is finally done properly.",
              "duration": 11000
            },
            {
              "expression": "normal",
              "text": "The survey machine recorded all of it. The Iron-Hide agent recovered the device, attempted to wear it as a pack, and broke the straps — the only comedy the mountain permitted that day.",
              "duration": 11000
            },
            {
              "expression": "mouthslightlyopen",
              "text": "At New Home the party bluffed the royal guard with Commissar Vexis's own papers, and left with transport granted by King Asgore and Queen Toriel under an Oath of Secrecy.",
              "duration": 10900
            },
            {
              "expression": "eyebrowraised",
              "text": "An oath sworn to a king who has buried children. The Wheel turns. We will see what it grinds.",
              "duration": 7160
            }
          ]
        },
        {
          "slug": "THE GREEN HOUSE",
          "type": "anchor",
          "title": "The Manor Wore Its Owner's Face",
          "articleId": "feyward_chop_bros_soul_ring_and_the_guard_with_no_name",
          "lines": [
            {
              "expression": "concerned",
              "text": "In Feyward, the overgrowth stopped pretending to be a plant problem. The Lady pouring cold tea for Hjumpik was not the Lady. She was the house, wearing her face like a hide.",
              "duration": 11000
            },
            {
              "expression": "mouthslightlyopen",
              "text": "A house guard refused to give his name, then refused his post entirely, and walked out with the intruders. Chop Bros cut twenty-five feet of corridor in one swing.",
              "duration": 10560
            },
            {
              "expression": "happy",
              "text": "A garlic grenade and a Bob-omb settled a hostage negotiation. We are not being poetic. That is the whole of the diplomacy that occurred.",
              "duration": 8860
            },
            {
              "expression": "normal",
              "text": "The true Aurelian surfaced as a voice inside an Oracle-marked ring in Hjumpik's pocket. Cutting the plants still makes more plants. No deaths confirmed. Everyone left through a window.",
              "duration": 10560
            }
          ]
        },
        {
          "slug": "FIELD REPORT",
          "type": "field",
          "title": "The Cold Roads of Arunedeal",
          "articleId": "bones_alpine_flight_goblin_camp_and_legion_wall",
          "lines": [
            {
              "expression": "jump",
              "text": "Whisper-in-Wind, I am ON the snow road and the snow road is TRYING TO KILL ME. Bones came through here — he got out of the Alpine Inn past a Legion knight dressed in a frilled maid's uniform. I have confirmed this twice because nobody believed me the first time.",
              "duration": 11000
            },
            {
              "expression": "jump",
              "text": "He stole a breastplate off a frozen cart, bought a coat off a goblin named Naaook for seventy-five gold — the snow tribe charges what the cold is worth, and the cold is worth a lot — and picked up a battered toad mage named Elbow with a swollen eye and fey magic in his hands.",
              "duration": 11000
            },
            {
              "expression": "jump",
              "text": "Both of them slipped a checkpoint wall the Iron-Hides have raised across the pass. It is enormous. It is new. It was not on any map we hold. Back to you, and get someone to draw it before it gets bigger!",
              "duration": 11000
            }
          ]
        },
        {
          "slug": "WIND WHISPERS",
          "type": "anchor",
          "title": "Whispers on the Breeze",
          "lines": [
            {
              "expression": "eyebrowraised",
              "text": "Heard in the canopy: a letter from the Archie-watch names four suspects — the one-armed shadow, the cheerful cards toad, the girl with the gun, and the Koopa king himself.",
              "duration": 10900
            },
            {
              "expression": "normal",
              "text": "Smelt on the breeze: five winters back at the Mage's Embassy, an arson, a banana chase, and a confession from a green plumber that his brother vanished on an eastern farm. Old scent. Still warm.",
              "duration": 11000
            },
            {
              "expression": "concerned",
              "text": "War drums: the imps hold the Mirror of True Reflection. Whatever looks into it looks back. We advise the herds to be unremarkable this week.",
              "duration": 9200
            }
          ]
        },
        {
          "slug": "SIGN OFF",
          "type": "titlecard",
          "title": "Sign Off",
          "lines": [
            {
              "expression": "normal",
              "text": "That is the week. Trust only the claw. Fear only the silence.",
              "duration": 4780
            },
            {
              "expression": "normal",
              "text": "This broadcast will self-destruct if eaten. The Rakasha News Network returns when the Hunt gives us something worth saying.",
              "duration": 7160
            }
          ]
        }
      ],
      "runtimeMs": 327560
    },
    {
      "id": "rnn-002",
      "number": 2,
      "title": "The File From Eight Years Ago and the God Who Runs the Place",
      "airWeek": "1040-AETHEL-W3",
      "recordedOn": "2026-08-13",
      "huntDay": "AETHEL 18, 1040 BF",
      "covering": "Aethel 1 – 17, 1040 BF — plus one recovered file dated 17 Aethel, 1032 BF",
      "anchorName": "Whisper-in-Wind",
      "anchorRole": "Death Speaker, Spirit-Walker Clan",
      "fieldName": "Acolyte Dan",
      "fieldRole": "Runner of the Cold Roads",
      "sourceEvents": [
        "the_mount_ebot_expedition",
        "the_toad_god_interview_and_the_star_shard",
        "ruined_manor_convergence",
        "the_medical_extortion_incident",
        "the_planar_sanctum_revelation",
        "the_shadeward_ritual",
        "the_waiting_room_testimony"
      ],
      "ticker": [
        "A FILE EIGHT YEARS IN A CRATE — TWO BROTHERS, ONE MOUNTAIN, WRONG SPELLING",
        "THE MISPRINT WAS NEVER CORRECTED — THE SHEETS ARE STILL IN CIRCULATION",
        "FOUR NAMES ON A PLANK, ONE RUBBED NEARLY OUT — STILL THERE THIS MORNING",
        "OUR RUNNER WALKED THE SLOPE THIS WEEK AND FOUND THE BRIDGE STILL ARMED",
        "THE HOST WITH THE CROWN IS A GOD — AND THE WORLD IS STILL A DOUGHNUT",
        "SPARK-WEAVER HEALER TAKES HIS MEDICINE BACK OUT OF THE PATIENT",
        "GLASS VATS UNDER THE STAR-LIT LIBRARY — THE HERDS ARE ADVISED TO WALK WIDE",
        "THE ONE CALLED ARCHIE SAT WITH A GOD AND SAID NO",
        "THE JUNGLE SEES ALL. THE JUNGLE ALSO KEEPS RECEIPTS"
      ],
      "segments": [
        {
          "slug": "COLD OPEN",
          "type": "titlecard",
          "title": "Rakasha News Network",
          "lines": [
            {
              "expression": "normal",
              "text": "Iron rusts. Flesh rots. Maps lie. Only the Hunt remains.",
              "duration": 4100
            },
            {
              "expression": "normal",
              "text": "This is the Rakasha News Network. Hunt Day eighteen of Aethel. The jungle sees all — and this week the jungle got its claws on a box of paper eight years old, because some things do not stop being true just because nobody read them.",
              "duration": 11000
            }
          ]
        },
        {
          "slug": "LEAD STORY",
          "type": "anchor",
          "title": "The File That Sat in a Crate for Eight Years",
          "articleId": "the_mount_ebot_expedition",
          "lines": [
            {
              "expression": "normal",
              "text": "Our first story is not from this week. It is from eight years ago, and it was released three days ago, and the herds need it now for a reason we will come to.",
              "duration": 11000
            },
            {
              "expression": "mouthslightlyopen",
              "text": "On the seventeenth of Aethel, one thousand and thirty-two, the yellow one they call Wario put his brother in a produce sack, loaded him onto a rented sky-machine with a young human named Jory Dobbs, and flew north into a storm that had already been reported.",
              "duration": 11000
            },
            {
              "expression": "concerned",
              "text": "The storm won. The machine went into a cave mouth sideways, slid sixty feet on wet stone, and lost its tail to a boulder. The pilot was knocked senseless in his straps. The boy was opened above the eye. The tall purple one checked both of them before the dust settled, and eight years later nobody has thanked him yet.",
              "duration": 11000
            },
            {
              "expression": "eyebrowraised",
              "text": "On the slope they met a small hooded thing four feet tall that threw sharpened human bone and did not speak. Not a word. Not a hiss. It stepped out of the world and back into it eleven feet to the left, twice, until the purple one froze every flat place it could land.",
              "duration": 11000
            },
            {
              "expression": "concerned",
              "text": "Then a bridge that some empire built and somebody else improved — sixty razors in the parapets, six flame jets under the deck, all of it triggered by weight. It ignored the thin man entirely. It tried very hard to kill the fat one, and it very nearly earned its keep.",
              "duration": 11000
            },
            {
              "expression": "sad",
              "text": "At the summit, a plank with four names burned into it. Javier. Mikaela. Daniel. And a fourth rubbed nearly out — a prince, by the reading of it. Four humans who went up a mountain nobody visits and did not come down. Somebody obeyed the paperwork on a hillside in the rain. That is all a marker is.",
              "duration": 11000
            },
            {
              "expression": "happy",
              "text": "And then the map came out of the crate. The sign said Mount Ebot. The map said Mount Ebot. One T. Mount Ebott — the mountain with the monsters, the barrier and the bearded king — is four hundred miles east of where they were standing.",
              "duration": 11000
            },
            {
              "expression": "eyebrowraised",
              "text": "A clerk of the Old World Mapping Company dropped a letter, and the misprint was bought, folded, trusted, and handed to a man who cannot read either spelling. Bones, fire and blood, all of it purchased with one absent character.",
              "duration": 11000
            },
            {
              "expression": "concerned",
              "text": "Now the part that makes an old story a warning. A correction was demanded. A clerk acknowledged the demand. The correction was never made, and the company burned down with its plates inside, so it can never be made by anyone. Survey Series Four still says Mount Ebot. Every sheet still in a saddlebag is still wrong in the exact way that opened that boy's head.",
              "duration": 11000
            },
            {
              "expression": "normal",
              "text": "Eight years in a crate behind more urgent disasters. The purple one changed nothing in it before he let it out. The Wheel does not need to be clever. It only needs a typesetter with cold hands and an archive with a slow week.",
              "duration": 11000
            }
          ]
        },
        {
          "slug": "THE INTERVIEW",
          "type": "anchor",
          "title": "The Host With the Crown",
          "articleId": "the_toad_god_interview_and_the_star_shard",
          "lines": [
            {
              "expression": "mouthslightlyopen",
              "text": "To this week, then. Six nights ago the same two brothers walked into an office because a stranger promised them gold. The gold was real. The office was not.",
              "duration": 10560
            },
            {
              "expression": "concerned",
              "text": "The lights went out one by one. A piano replaced the table. A crown came down through the air with a Star Shard set in it, and the host stopped pretending to be a host. The Toad God. He flattened them, flicked them like cards, and took the purple one's mouth off his face for the sport of it.",
              "duration": 11000
            },
            {
              "expression": "eyebrowraised",
              "text": "He confirmed what this desk has said for two seasons and been mocked for saying. The world is a doughnut. A Cosmic Jester has already taken a bite out of the far side of it, the depopulation is real, and the god's opinion of that bite is that more should be taken until something sweet is reached.",
              "duration": 11000
            },
            {
              "expression": "sad",
              "text": "Then he kept the yellow brother back for a private arrangement and threw the thin one out. Chief Acquisitions Officer, the fat one called himself. He was negotiating a share of the end of the world before the smoke had cleared off his own coat.",
              "duration": 11000
            },
            {
              "expression": "normal",
              "text": "We do not know what was agreed in that room. We say so plainly. What we know is that one brother left with a primed skull and no allies, and five days later he was in a sack on the way to the wrong mountain.",
              "duration": 11000
            }
          ]
        },
        {
          "slug": "THE MANOR",
          "type": "anchor",
          "title": "Ghosts, a Warrant, and an Alliance Nobody Trusts",
          "articleId": "ruined_manor_convergence",
          "lines": [
            {
              "expression": "concerned",
              "text": "Aethel opened at the ruined manor. The green plumber found a broken travelling circle and took testimony from a murdered spirit — coordinates in the Thornwood, and an accusation that a crown was placed on the wrong head.",
              "duration": 11000
            },
            {
              "expression": "mouthslightlyopen",
              "text": "Then the dead arrived in number. Between twenty and forty, depending on which mouth you ask, and this desk will not pretend to a count it does not have. Everybody ran. The one called Archie went out of a window from forty feet and woke in an Iron-Hide hospital surrounded by corpses.",
              "duration": 11000
            },
            {
              "expression": "eyebrowraised",
              "text": "The Soft-Heads came to arrest the plumber for hiding his brother and for what they call residual activities. A fight settled it instead. Archie appointed himself judge. The accused fled before the verdict, which is the correct response to a courtroom assembled in a ruin.",
              "duration": 11000
            },
            {
              "expression": "normal",
              "text": "Out of that came the Cells of the Third Eye — three hostile factions in one bag, and most of the hands in it wearing Iron-Hide grey. When a wolf offers to share a den, count the exits before you count your blessings.",
              "duration": 11000
            }
          ]
        },
        {
          "slug": "THE HEALER'S DEBT",
          "type": "anchor",
          "title": "The Medicine Came Back Out",
          "articleId": "the_medical_extortion_incident",
          "lines": [
            {
              "expression": "eyebrowraised",
              "text": "A Spark-Weaver calling himself Parson Pellinost healed the one called Archie without being asked, then presented the debt.",
              "duration": 6820
            },
            {
              "expression": "mouthslightlyopen",
              "text": "Archie demanded a refund. The healer gave him one. He reached in and pulled the healing back out of the body, which is the only honest refund this desk has ever heard described.",
              "duration": 11000
            },
            {
              "expression": "concerned",
              "text": "In the same hours the Iron-Hides told the world that the one called Bones had Starlight Fever. There is no such sickness. There were sedatives, and a coma they built themselves, and a story they expected the herd to swallow.",
              "duration": 11000
            },
            {
              "expression": "normal",
              "text": "Note the shape of it. The lie was elaborate. The guarding of the lie was lazy. That is what a predator looks like when it has grown used to eating unopposed.",
              "duration": 11000
            }
          ]
        },
        {
          "slug": "THE VATS",
          "type": "anchor",
          "title": "What Is Under the Star-Lit Library",
          "articleId": "the_planar_sanctum_revelation",
          "lines": [
            {
              "expression": "concerned",
              "text": "Fleeing the Iron-Hides, the Oracle moved Archie and the comatose Bones to the place he calls the Planar Sanctum. It greets you as a library under stars.",
              "duration": 9880
            },
            {
              "expression": "sad",
              "text": "Then the floor opens. Two Crystal Tethers, one violet and one orange, holding a man in a metal tank and pulling him apart to stay lit. In the next room, glass vats. Malformed things, fed by tube, weeping, kept alive because being alive is the useful part.",
              "duration": 11000
            },
            {
              "expression": "mouthslightlyopen",
              "text": "The Oracle says that is the end waiting for all of them if the timelines are not severed. This desk has reported many cruelties. Cruelty with plumbing is a different animal.",
              "duration": 11000
            },
            {
              "expression": "normal",
              "text": "We name no location, because we have none to name. If you are herd, and you are offered a bed in a beautiful room with no windows, sleep somewhere else.",
              "duration": 10900
            }
          ]
        },
        {
          "slug": "THE ANCHOR",
          "type": "anchor",
          "title": "He Stood in the Candles and Said No to a God",
          "articleId": "the_shadeward_ritual",
          "lines": [
            {
              "expression": "mouthslightlyopen",
              "text": "Archie Miser then demanded to be sent to Shadeward for his friends. He was told a month had already passed there. He did not care, which is the entire character of the man in one sentence.",
              "duration": 11000
            },
            {
              "expression": "eyebrowraised",
              "text": "The Oracle cast without a circle. Mark that and hold it. The anchor took on more power than an anchor should, the Soft-Head troops were rounded up outside by the one called Berio, and the comatose Bones was carried off in the confusion.",
              "duration": 11000
            },
            {
              "expression": "happy",
              "text": "And at the Astral Altar the Toad God was already waiting, with everything a man could want laid out ready. Archie refused all of it and chose his friends and the long road to Shadeward Manor.",
              "duration": 11000
            },
            {
              "expression": "normal",
              "text": "Two audiences with the same god in one month. One brother negotiated. One boy said no. The jungle notes which of them still owns his own name.",
              "duration": 9880
            }
          ]
        },
        {
          "slug": "FIELD REPORT",
          "type": "field",
          "title": "The Slope With the Seams, Eight Years Later",
          "articleId": "the_mount_ebot_expedition",
          "lines": [
            {
              "expression": "jump",
              "text": "Whisper-in-Wind, I read that old file and I went and stood on it! I am on the wrong mountain and I want that on the record before anything else. Eight years, and every page of it is still true this morning.",
              "duration": 11000
            },
            {
              "expression": "jump",
              "text": "I walked the slope where the ground gave up its property. The quake seams are still open — you can put an arm in them. The bones the file says came up out of the mud are GONE. Not buried, not washed off. Gone, and the mud is smooth, and I got down on my knees like a fool looking for one jaw with three teeth in it and I did not find it. Something has been tidying up for eight years and it is faster than a Rakasha on a rope.",
              "duration": 11000
            },
            {
              "expression": "jump",
              "text": "The bridge is still armed. Eight years untended and it reset itself clean, which means it is not untended. Somebody oils that thing. And the plank at the summit is real — I read four names off it in the rain, same four, and the fourth one has been rubbed at by a hand, not by weather. Not eight years of weather. A hand.",
              "duration": 11000
            },
            {
              "expression": "jump",
              "text": "So this is not an old story, Whisper. It is an old file about a mountain that is still doing all of it. Anyone walking up there on a Series Four sheet is walking into a page written in one thousand and thirty-two. Back to you, and send someone taller than me!",
              "duration": 11000
            }
          ]
        },
        {
          "slug": "WIND WHISPERS",
          "type": "anchor",
          "title": "Whispers on the Breeze",
          "articleId": "the_waiting_room_testimony",
          "lines": [
            {
              "expression": "eyebrowraised",
              "text": "Heard in a waiting room: the green plumber went under the knife near death, and a surgeon he calls Uncle Dario opened him up. We do not know that man. Neither, it seems, does anyone else.",
              "duration": 11000
            },
            {
              "expression": "mouthslightlyopen",
              "text": "In the same room: a princess of the sand who spoke of the patient as her blood, a mayor of the tall city who spoke of him as hers, and the yellow brother, who came uninvited and left talking about robbing a pharmacy. Every one of them already knew what had happened before they were told.",
              "duration": 11000
            },
            {
              "expression": "concerned",
              "text": "War drums, and old ones. The Old World Mapping Company printed Survey Series Four and offered corrections on application. A correction was applied for eight years ago. The company is ash, the plates burned with it, and the corrections were never made. Every party still carrying one of those sheets is walking toward a mountain that is not there.",
              "duration": 11000
            },
            {
              "expression": "normal",
              "text": "Smelt on the breeze: sharpened bone, lamp oil, and a struck match. Somebody keeps that mountain. Nobody has asked its permission for anything in a long time.",
              "duration": 9880
            }
          ]
        },
        {
          "slug": "SIGN OFF",
          "type": "titlecard",
          "title": "Sign Off",
          "lines": [
            {
              "expression": "normal",
              "text": "That is the week, and eight years ago as well. Check your map before you climb. Check who drew it before you trust it. And check the date on the file before you decide it cannot still hurt you.",
              "duration": 11000
            },
            {
              "expression": "normal",
              "text": "Trust only the claw. Fear only the silence. This broadcast will self-destruct if eaten. The Rakasha News Network returns when the Hunt gives us something worth saying.",
              "duration": 9880
            }
          ]
        }
      ],
      "runtimeMs": 456900
    }
  ]
};
