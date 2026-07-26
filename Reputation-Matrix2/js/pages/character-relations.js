export const CHARACTER_RELATIONS = {
    // --- PARTY MEMBER OPINIONS ---
    'archie': {
        'hjumpik': { type: 'ally', text: "Archie on hjumpik: He called me 'bandit' again. He was glad I wasn't dead. For a guy who just headbutted a ghost, he's alright." },
        'dan': { type: 'ally', text: "Archie on Dan: He's awake. Shaking, but awake. We're going to save the others. Together." },
        'bowser': { type: 'transactional', text: "Archie on Bowser: He's actually fighting for us. Weird day." },
        'green_t': { type: 'pity', text: "Archie on Green T: Trapped in glass. Nasty way to go. We'll get him out... eventually." },        
        'speaker_l': { type: 'enemy', text: "Archie on Speaker L: He won. For now. He has me in chains. Let's see how long his 'order' lasts when the real monsters come out of the walls." },
        'roger': { type: 'ally', text: "Archie on Roger: This one's got the right idea. A gun solves a lot of problems talk can't. Smart." },
        'eager': { type: 'ally', text: "Archie on Eager: The little idiot charged in. Almost got himself killed. But then he had the nerve to stop me from leaving. Wants answers. He's not just a follower anymore." },
        'ryan': { type: 'rivalry', text: "Archie on Ryan: He talks about knowledge. I just blew up a building to save one person. We have different methods. Let's see whose works better in the long run." },
        'bones': { type: 'ally', text: "Archie on Bones: He gets it. The world's a trash fire. He's just trying to stay warm. Respectable." },
        'the_mole': { type: 'enemy', text: "Archie on The Mole (The Warden): The smug little rat who put me in the cage. He's on the list." },
        'jerry_the_spy': { type: 'enemy', text: "Archie on Jerry (The Spy): He played me. Led me from one cage to another. An Iron Legion dog. He's at the top of the list." },
        'rakasha_spirit_walker': { type: 'transactional', text: "Archie on the Rakasha: They got me out. Owe them one. Their methods are... weird. But effective." },
        'xo': { type: 'neutral', text: "Archie on X.O.: Found her body in that... place. The mindflayers had her. I left her things. It felt... right. A debt paid, I guess." },
        'markop': { type: 'ally', text: "He's reckless, but he saved us in the greenhouse. I just wish he'd shut up about it." },
        'toad_lee': { type: 'enemy', text: "He surrendered to Speaker L. He gave up. I won't forget that." },
        'waluigi': { type: 'rivalry', text: "He laughs while the world burns. I hate that I kind of respect the style." },
        'oracle': { type: 'distrust', text: "He claims he saved me. He claims he knows 'Orange T'. I don't trust ghosts." },
        'emperor_elagabalus': { type: 'enemy', text: "Archie on Elagabalus: The ultimate symbol of the oppressive, boring order I despise. His Empire needs to be torn down, brick by brick." },
        'general_marcus_ironhand': { type: 'enemy', text: "Archie on Ironhand: Discipline is just another word for boring. He wouldn't know a good opportunity if it blew up in his face. I should arrange that." },
        'lord_crimson': { type: 'volatile', text: "Archie on Lord Crimson: He understands the value of chaos. A dangerous, but amusing, player in the game." },
        'archmage_theron': { type: 'enemy', text: "Archie on Theron: All his rules and regulations for magic are a cage. Cages are meant to be broken." },
        'captain_syrup': { type: 'rivalry', text: "Archie on Captain Syrup: She's got style, I'll give her that. But she's just as greedy as the rest. Got in my way." },
        'remi': { type: 'transactional', text: "Archie on Remi: She shoots first. I can respect that. Nearly took out my ride, but still. Good instincts." },
        'lario': { type: 'transactional', text: "Archie on Lario: The little goblin actually pulled it off! A logbook... could be useful. Maybe he's not entirely useless after all." },
        'bryan': { type: 'enemy', text: "Archie on Bryan: Another ghost from the past. He thinks I left him for dead? Please. In my line of work, people get left. He should have been faster. Now he's just another problem to solve." }
    },
    'kamek': {
        'captain_toadette': { type: 'enemy', text: "Kamek on Toadette: She sent an envoy armed with sentiment and a dead princess's seal. An insultingly naive gambit. They were dealt with. She has been reminded that the Valley of Bowser is not a place for diplomacy." },
        'fawful': { type: 'rivalry', text: "Kamek on Fawful: Let the green fool have his chortles in his stolen castle. He plays with toys. I play with kingdoms." }
    },
    'captain_toadette': {
        'kamek': { type: 'enemy', text: "Toadette on Kamek: He took my envoys. He answers our offer of a ceasefire with silence and a display of dark magic. He will regret this insult. The Koopa Troop has made its choice." }
    },
    'chancellor_toadsworth': {
        'captain_toadette': { type: 'distrust', text: "Toadsworth on Toadette: Her diplomatic overture to the Koopa Troop failed, exactly as I predicted. Her zealotry leads only to more bloodshed and isolates us further. She is a danger to what little remains of this Kingdom." }
    },    
    'markop': {
        'oracle': { type: 'volatile', text: "Markop on The Oracle: He offered me a hand when the beast was upon us. I took it. Now I stand as a giant, five times my size. I feel the power coursing through me... but at what cost? He claims dominion over life and death here. I am in his debt." },
        'speaker_l': { type: 'enemy', text: "Markop on Speaker L: He speaks of order and law, but he leads a choir of fanatics. He would let us die in here to prove his point. He is no leader; he is a zealot." },        
        'bowser': { type: 'distrust', text: "Markop on Bowser: He fled. When faced with bureaucracy and ghosts, he chose self-preservation. I cannot fault his logic, but he abandoned us." },        
        'remi': { type: 'protection', text: "Markop on Remi: She was cornered. I screamed for her to run to me. She is brave, but she cannot fight a giant spider alone. We must protect the flank." }, 
        'waluigi': { type: 'ally', text: "Markop on Waluigi: He asked if I was sure before I took the Oracle's hand. For a moment, he sounded... concerned? His ice magic is holding the line. We fight together, for now." },
        'dan': { type: 'ally', text: "Markop on Dan: He healed Archie. The first true spell I've seen from him. It was a beacon of light in that horrible smoke. His training is bearing fruit. There is hope for him yet." },
        'green_t': { type: 'enemy', text: "Markop on Green T: He locked them in. He used their lives as a diversion for... a basket of fruit. Now he offers me a key and talks of trust. He is a serpent. I will not turn my back on him." },                    
        'archie': { type: 'distrust', text: "His magic is dangerous. He draws too much attention when we need stealth." },
        'toad_lee': { type: 'ally', text: "A solid soldier. He held the line against the Coat." },
        'hjumpik': { type: 'ally', text: "Sturdy as the stone he carves. I'm glad he's watching our backs." },
        'eager': { type: 'ally', text: "Markop on Eager: His speed is an asset, but he must learn to master his fear. Courage is not the absence of fear, but acting in spite of it." },
        'roger': { type: 'ally', text: "Markop on Roger: His methods are... direct. A firearm is not an honorable weapon, but in these times, survival often outweighs tradition. He is a capable protector." },
        'ryan': { type: 'ally', text: "Markop on Ryan: He has a gift. I hope he learns to wield it with wisdom and restraint, for magic is a powerful but dangerous tool." },
        'bones': { type: 'ally', text: "Markop on Bones: He has endured much. His cynicism is a scar, a shield against a world that has been cruel. But there is strength in him yet." },
        'emperor_elagabalus': { type: 'enemy', text: "Markop on Elagabalus: His Imperial 'peace' is a gilded cage built on the backs of the oppressed. True order comes from justice, not force." },
        'iron_legion': { type: 'contempt', text: "Markop on the Iron Legion: The Vigilance flew right over us! Propaganda songs blasting while we fought for our lives in the mud. They saw the spiders. They saw us. And they did nothing. They are not protectors; they are a sickness." },
        'captain_toadette': { type: 'enemy', text: "Markop on Toadette: Her loyalty is admirable, but it has become a blinding fanaticism. She cannot see that her actions are creating more chaos, not less." },
        'lario': { type: 'transactional', text: "Markop on Lario: He stole a logbook. While theft is dishonorable, if it contains a clue to Eager's whereabouts... it is a necessary evil. A tool we must use." }
    },
    'hjumpik': {
        'archie': { type: 'distrust', text: "Reckless. Foolish. He treats magic like a toy. The Guild will have his head." },
        'bowser': { type: 'ally', text: "Strong arm. Good at smashing. He understands the value of force." },
        'oracle': { type: 'mystery', text: "Spooky man. Too many mirrors." },
        'waluigi': { type: 'neutral', text: "He helped with the rust monsters. Surprisingly competent for a beanpole." },
        'hjumpik': { type: 'pride', text: "hjumpik on hjumpik: Good job, hjumpik." },
        'the_oracle': { type: 'enemy', text: "Hjumpik on The Oracle: The mirrors are watching. His mirrors. This is his house, his trap. I will smash every piece of glass in this place." },        
        'toad_lee': { type: 'distrust', text: "Hjumpik on Toad Lee: He talks about rooftops and solariums while a monster is behind the door. His plans are too complicated. We need to smash things." },        
        'speaker_l': { type: 'enemy', text: "Hjumpik on Speaker L: The little toad shouts orders while our friend bleeds. He is not our leader. I protect my friends. He is in the way." },
        'markop': { type: 'ally', text: "hjumpik on Markop: The horse-man called King Bowser 'silly billy'. To his face. I... do not understand horse-man jokes. But he fights good, and helped look for the new girl. I respect that." },
    },
    'bowser': {
        'dan': { type: 'neutral', text: "Bowser on Dan: 'I think you're Dan.' He's useless in a fight, but he's got guts. I'll allow him to live." },
        'toad_lee': { type: 'frustration', text: "Bowser on Toad Lee: Tried to charge a ghost like an idiot. I had to save him. He owes me." },
        'speaker_l': { type: 'enemy', text: "Bowser on Speaker L: A singing, marching little mushroom who thinks he can give me orders? GWAHAHA! Pathetic. Let him have his haunted house. I've got better things to do than listen to his terrible music." },
        'markop': { type: 'distrust', text: "Bowser on Markop: He saw the ghosts and his first instinct was to fight them. Admirable. Stupid. But admirable. He is a warrior, at least." },
        'archie': { type: 'neutral', text: "Small fireball man needs to learn when to roast marshmallows and when to roast enemies." },
        'hjumpik': { type: 'ally', text: "This dwarf gets it! SMASH FIRST! Talk later!" },
        'waluigi': { type: 'ally', text: "My best minion! Even if he isn't technically a minion. We are looting this place dry!" },
        'green_t': { type: 'mourning', text: "The mirror took him. I will punch that mirror until it gives him back." }
    },
    'remi': {
        'speaker_l': { type: 'intrigue', text: "Remi on Speaker L: The music... it was hypnotic. I had a drum. I was one of them for a minute. It was... scary. And kind of nice. I don't know what to think." },        
        'archie': { type: 'volatile', text: "Remi on Archie: He almost got us all killed with that fireball. But he did it to save Eager. He's a walking disaster area, but... I guess his heart is in the right place? Sometimes? It's confusing." }, 
        'markop': { type: 'loyalty', text: "Remi on Markop: He stood between me and that monster. He told me to run. He's... he's really trying to keep us alive." },
        'waluigi': { type: 'distrust', text: "Remi on Waluigi: He yelled at me for shooting his pet dragon, then his friend locked us in a burning building to die. I don't care if he put the fire out, he's a menace." },
        'green_t': { type: 'enemy', text: "Remi on Green T: He complimented my shot... right before he locked me in a greenhouse with fire and monsters. He's not just an enemy, he's a psychopath. I'll shoot his other wing next time." }, 
        'bowser': { type: 'enemy', text: "Remi on Bowser: He knew the box was a bomb and just... watched. He's a monster. A king of monsters. I don't trust him for a second, even if we're on the same side for now." },
        'oracle': { type: 'desperation', text: "Remi on The Oracle: I ran into his circle. I didn't know where else to go. He said he decides who dies here. I just... I hope he decides I live." },
        'iron_legion': { type: 'enemy', text: "Remi on The Vigilance: I saw it! I thought they were coming to save us. Then they just... kept flying. Playing that stupid song. They left us to be eaten. I hate them." }
    },
    'waluigi': {
        'toad_lee': { type: 'rivalry', text: "Waluigi on Toad Lee: So serious! So much stomping and yelling! He has no appreciation for the beautiful, terrifying performance this house is putting on!" },        
        'speaker_l': { type: 'rivalry', text: "Waluigi on Speaker L: WAH! A musical number! With choreography! And a dramatic reading! He stole my act! This is an outrage! My own chaotic entrances are far superior!" },  
        'archie': { type: 'rivalry', text: "Waluigi on Archie: A FIREBALL?! WAH! So unoriginal! So crude! My firebolt was far more stylish, and my cone of cold was the perfect finale! He has no sense of showmanship!" }, 
        'bowser': { type: 'volatile', text: "Waluigi on Bowser: Another big, angry brute who wants to rule everything. So unoriginal! But his army is a useful distraction." },
        'green_t': { type: 'volatile', text: "Waluigi on Green T: He locked my backup singers in a burning building! A bit extreme for a 'distraction,' even for me! But... the results were magnificent! Our business partnership is becoming very... interesting!" }, 
        'markop': { type: 'intrigue', text: "Waluigi on Markop: He touched the ghost! He took the hand! Now he is GIANT! WAH-HAHA! Finally, someone with a sense for the dramatic! Crush the bug, big man!" }
    },
    'wario': {
        'waluigi': { type: 'volatile', text: "Mr. Wario on Waluigi: He is chaos. Unpredictable. This makes him a useful tool and a dangerous liability. For now, the potential profit outweighs the risk. His... style... provides excellent cover for my own, more discreet operations." },
        'regal_empire': { type: 'enemy', text: "Mr. Wario on The Regal Empire: Bad for business. Their obsession with 'order' involves too many regulations, taxes, and patrols. Their stability is the stability of a stagnant pond. There's more profit in a hurricane."},
        'toad_lee': { type: 'neutral', text: "Mr. Wario on the Shadeward Toads: A bunch of noisy mushrooms. They got in the way of my deal with the Legion. Insignificant, but annoying."}
    },
    // --- LIBERATED TOADS OPINIONS ---
    'dan': {
        'markop': { type: 'loyalty', text: "Dan on Markop: He is my teacher and protector. His strength is not just in his arms, but in his heart. I trust him completely." },
        'bowser': { type: 'mixed', text: "Dan on Bowser: He saved me. He called me Dan. He's a monster, but... he helped." },
        'archie': { type: 'fear', text: "He blew up the greenhouse. He's scary." },
        'toad_lee': { type: 'ally', text: "He protects us. I feel safe behind his axe." },
        'oracle': { type: 'enemy', text: "He tried to hurt us with the coat. Bad ghost." },
        'hjumpik': { type: 'respect', text: "Dan on hjumpik: He protected us. Good hit, hjumpik." },
        'dan': { type: 'enemy', text: "Dan on Himself: Failure. I failed him. I hurt him. I'm a monster..." }        
    },
    'toad_lee': {
        'hjumpik': { type: 'frustration', text: "Toad Lee on Hjumpik: He has the subtlety of an avalanche. There are secret passages, tactical routes. But all he sees is a wall to be broken or a monster to be smashed. His strength is a tool, not a solution." },        
        'markop': { type: 'ally', text: "Toad Lee on Markop: A true commander. He is strong, and he leads from the front. I would follow him into any battle." },
        'archie': { type: 'enemy', text: "A criminal. He endangers the Cohort. He must answer to Speaker L." },
        'speaker_l': { type: 'loyalty', text: "The Speaker brings order. We must follow the Mandate." },
        'dan': { type: 'protection', text: "I will keep him safe. He is the future of the Toads." },
        'ryan': { type: 'ally', text: "Toad Lee on Ryan: He provided a clear objective. The mission is now to capture. That is an order I can understand and enforce." },        
        'the_mole': { type: 'enemy', text: "Toad Lee on The Mole: He broke the vow. Betrayed his brothers. There is no greater crime. He will answer for it." },
        'iron_legion': { type: 'enemy', text: "Toad Lee on The Iron Legion: They sent a spy into our ranks. They orchestrated this pain. They are without honor." }
    },
    'eager': {
        'archie': { type: 'loyalty', text: "Eager on Archie: He saved me. When the roof was caving in and everyone was running, he came back for me. He pulled me out. I don't care what anyone says about him. He's a hero." },
        'eager': { type: 'frustration', text: "Eager on Himself: I'm too big! I can't aim! The pepper spray went everywhere but the spider's eyes! I feel... clumsy." }
    },    
    'roger': {
        'oracle': { type: 'distrust', text: "Roger on The Oracle: An unstable variable. His control over the environment is a tactical nightmare. The robot double was... unexpected. He is a high-threat entity." },
        'the_mole': { type: 'enemy', text: "Roger on The Mole: A catastrophic failure in operational security. His presence invalidates all prior intelligence. All personnel must be re-vetted." },
        'iron_legion': { type: 'enemy', text: "Roger on The Iron Legion: Their willingness to use infiltration tactics confirms they are a sophisticated and dangerous enemy. Standard protocols are insufficient." },
        'eager': { type: 'pragmatic', text: "Roger on Eager: The target is the giant spider. Eager is incapacitated and flailing. Logic dictates I focus fire on the primary threat. He'll have to handle himself." }
    },
    'speaker_l': {
        'archie': { type: 'enemy', text: "Speaker L on Archie: He has made a mockery of our authority and escaped. This is an unacceptable failure. The incompetence within our ranks will be purged. Miser will be found." },
        'iron_legion': { type: 'enemy', text: "Speaker L on the Iron Legion: They have infiltrated my Cohort. Not once, but twice. This is not just an external threat; it is a contamination. They will be scoured from our ranks." },        
        'hjumpik': { type: 'distrust', text: "Hjumpik on Hjumpik: The Dwarf's loyalty is a problem. He questions the will of the Cohort. He must be watched." },        'dan': { type: 'ally', text: "Speaker L on Dan: His proposal aligns with our need to preserve our numbers. A leader who protects his people is one we can work with. For now." },
        'archie': { type: 'enemy', text: "Speaker L on Archie: He has surrendered. Justice will be swift and transparent. His chaos ends now." },
    },
    'bones': {
        'dan': { type: 'neutral', text: "Bones on Dan: The kid's plan is less efficient than mine, but it's better than Archie's. Fewer funerals is good for morale, I guess. It'll do." },
        'oracle': { type: 'enemy', text: "Bones on The Oracle: Another creep in a fancy house playing games. The whole dinner was a sham. At least he wasn't boring." },
        'the_mole': { type: 'enemy', text: "Bones on The Mole: The little rat. He helped them grab me. I won't forget that. He'll get what's coming to him." },
        'iron_legion': { type: 'enemy', text: "Bones on The Iron Legion: They talk a big game about order, but they're just thugs like everyone else. They asked their questions. They didn't like my answers. Tough." },
        'chai': { type: 'enemy', text: "Bones on Chai: She's a snake. I saw it in her eyes. Threatened her. She folded like a cheap suit. Weak." }
    },    
    'ryan': {
        'archie': { type: 'distrust', text: "Ryan on Archie: His methods are direct, but short-sighted. He sees only the immediate threat. I'm relieved the cohort chose a path of knowledge over simple, bloody retribution." },        
        'oracle': { type: 'enemy', text: "Ryan on The Oracle: The temporal energy in that mansion... it was wrong. Twisted. He's not just observing time, he's breaking it. The robot, the clone... it's a perversion of arcane principles." },
        'the_mole': { type: 'distrust', text: "Ryan on The Mole: I didn't sense it. His intent was completely shielded. It's... unsettling. What other energies are people hiding from me?" },
        'iron_legion': { type: 'enemy', text: "Ryan on The Iron Legion: They create mockeries of life, clones and robots. They are no better than necromancers. They must be stopped." }
    },
    'donkey_kong': {
        'king_k_rool': { type: 'enemy', text: "Donkey Kong on K. Rool: The peace was a lie. He put a bug in my office and now he's trying to have Funky killed. There's no more talking. He's a dead lizard walking." }
    },
    'king_k_rool': {
        'donkey_kong': { type: 'enemy', text: "K. Rool on Donkey Kong: That sentimental ape actually thought I wanted peace? Keheheh! He's a fool. He's played his part, and now his little 'intelligence director' will pay the price. I want him dead. Now." }
    },
    'diddy_kong': {
        'king_k_rool': { type: 'enemy', text: "Diddy Kong on K. Rool: He's a snake. Always has been. The bug, the hit on Funky... this is it. No more second chances. We're ending this." }
    },    
    'the_mole': {
        'dan': { type: 'neutral', text: "The Mole on Dan: The broken 'hero.' An emotional liability. Irrelevant to the mission." },
        'toad_lee': { type: 'neutral', text: "The Mole on Toad Lee: All posturing. His 'vow' is a weakness the Legion will exploit." },
        'bones': { type: 'neutral', text: "The Mole on Bones: The target. Acquisition was successful. His personal feelings are not my concern." },
        'iron_legion': { type: 'loyalty', text: "The Mole on The Iron Legion: Order must be maintained. My loyalty is to the Hammer, not to these sentimental fools. The mission was a success." }
    },
    'purple_t': {
        'iron_legion': { type: 'enemy', text: "Purple T on The Iron Legion: GET OUT OF MY HOUSE! MY SHIP! MINE! YOU HAVE NO RIGHT! GET OUT!" }
    },
    // --- OTHER NPCS ---
    'captain_toadette': {
        'bowser': { type: 'enemy', text: "Toadette on Bowser: The beast is responsible for the Princess's death. This temporary truce is a bitter pill, a necessary evil to uncover the truth and punish the true villains." },
        'embercap': { type: 'loyalty', text: "Toadette on Embercap: My most steadfast soldier. He has seen the true face of the enemy and has been forged anew in the fires of conviction. His resolve is absolute, a perfect instrument of my will." }
    },
    'green_t': {
        'markop': { type: 'transactional', text: "Green T on Markop: The paladin is predictable. Honorable. That makes him the perfect piece to move. He'll take the key because his conscience demands it. And he'll walk right into the game." },
        'remi': { type: 'ally', text: "Green T on Remi: The new girl can shoot. I respect that. A useful asset for future... 'distractions'." }, 
        'dan': { type: 'enemy', text: "Green T on Dan: He's a fool who played with power he couldn't control. The staff broke him. And he's still hiding the truth from his friends. Pathetic. Danger is coming, and his silence puts everyone at risk." },
        'waluigi': { type: 'volatile', text: "Green T on Waluigi: The purple guy is insane. 'Time-traveling properties'? 'Fifty-fifty split'? It's a ridiculous story. But he got us a ticket out of that madhouse on a wyvern. For now, he's the best bet I've got. I'll play along." }
    },
    'oracle': {
        'archie': { type: 'intrigue', text: "The Oracle on Archie: A fascinating specimen. When faced with annihilation, he sacrificed efficiency for sentiment. A chaotic variable, but one with a predictable emotional core. The results of the experiment were... illuminating." },
        'markop': { type: 'proprietary', text: "The Oracle on Markop: He accepted the bargain. He is large now, powerful. But he forgets where he stands. In this grove, *I* decide who lives and who dies. He is mine to command." },
        'remi': { type: 'proprietary', text: "The Oracle on Remi: She sought shelter in my circle. Wise. She will not perish under my watch. She is part of the collection now." }
    }
};