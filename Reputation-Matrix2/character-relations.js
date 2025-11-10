
export const CHARACTER_RELATIONS = {
    // --- PARTY MEMBER OPINIONS ---
    'archie': {
        'hjumpik': { type: 'distrust', text: "Archie on Hjumpik: I told him to trust me. He hesitated. He listened to the toad. In the end, it didn't matter. My hands are up." },
        'speaker_l': { type: 'enemy', text: "Archie on Speaker L: He won. For now. He has me in chains. Let's see how long his 'order' lasts when the real monsters come out of the walls." },
        'dan': { type: 'pity', text: "Archie on Dan: Pathetic. He's completely broken. A useless liability." },
        'markop': { type: 'volatile', text: "Archie on Markop: He digs through the ash. He's always there to clean up the mess. Predictable. Honorable. He got everyone out. That's... something." }, // UPDATED        
        'bowser': { type: 'transactional', text: "Archie on Bowser: He offered a hand. I had other priorities. He's a king; he's used to being ignored. He'll get over it." }, // UPDATED        'remi': { type: 'transactional', text: "Archie on Remi: FNG is a surprisingly useful pawn. A little gullible, maybe. Helped pull her from that balcony wreckage. She's got potential... to be a great distraction." },
        'toad_lee': { type: 'transactional', text: "Archie on Toad Lee: Big axe, bigger frown. He's useful for hitting things, but don't expect any sparkling conversation." },
        'roger': { type: 'ally', text: "Archie on Roger: This one's got the right idea. A gun solves a lot of problems talk can't. Smart." },
        'eager': { type: 'ally', text: "Archie on Eager: The little idiot charged in. Almost got himself killed. But then he had the nerve to stop me from leaving. Wants answers. He's not just a follower anymore." }, // UPDATED        'roger': { type: 'ally', text: "Archie on Roger: This one's got the right idea. A gun solves a lot of problems talk can't. Smart." },
        'ryan': { type: 'rivalry', text: "Archie on Ryan: He talks about knowledge. I just blew up a building to save one person. We have different methods. Let's see whose works better in the long run." }, // UPDATED        'bones': { type: 'ally', text: "Archie on Bones: He gets it. The world's a trash fire. He's just trying to stay warm. Respectable." },
        'the_mole': { type: 'intrigue', text: "Archie on The Mole: So the Legion had a spy among my toads. Clever. Annoying, but clever. Now, who does he report to? That's the interesting part." },
        'oracle': { type: 'enemy', text: "Archie on The Oracle: He opened the door and let the fire out. He wanted to see what would happen. This isn't just a game to him; we're his lab rats. I'll burn his whole maze down." }, // UPDATED        'bones': { type: 'ally', text: "Archie on Bones: He gets it. The world's a trash fire. He's just trying to stay warm. Respectable." },
        'green_t': { type: 'enemy', text: "Archie on Green T: He locked us in. He needed a distraction. Simple. He's not chaotic, he's just a user. A much more boring kind of enemy." }, // UPDATED
        'emperor_elagabalus': { type: 'enemy', text: "Archie on Elagabalus: The ultimate symbol of the oppressive, boring order I despise. His Empire needs to be torn down, brick by brick." },        'general_marcus_ironhand': { type: 'enemy', text: "Archie on Ironhand: Discipline is just another word for boring. He wouldn't know a good opportunity if it blew up in his face. I should arrange that." },
        'lord_crimson': { type: 'volatile', text: "Archie on Lord Crimson: He understands the value of chaos. A dangerous, but amusing, player in the game." },
        'archmage_theron': { type: 'enemy', text: "Archie on Theron: All his rules and regulations for magic are a cage. Cages are meant to be broken." },
        'chief_thornpaw': { type: 'neutral', text: "Archie on Thornpaw: He talks to trees. Whatever. As long as he stays out of my way." },
        'high_inquisitor_vale': { type: 'enemy', text: "Archie on Vale: Another fanatic in a shiny suit who wants to burn anything fun. Get in line." },
        'captain_syrup': { type: 'rivalry', text: "Archie on Captain Syrup: She's got style, I'll give her that. But she's just as greedy as the rest. Got in my way." },
        'boss_knuckles': { type: 'enemy', text: "Archie on Knuckles: Thinks he's tough. He's just another obstacle. One that's fun to blow up." },
        'alpha_bloodmaw': { type: 'ally', text: "Archie on Bloodmaw: Angry, hairy, and hates vampires. What's not to like?" },
        'chancellor_toadsworth': { type: 'enemy', text: "Archie on Toadsworth: Just another bureaucrat trying to hold onto the scraps of a broken system. Pathetic." },
        'captain_toadette': { type: 'enemy', text: "Archie on Toadette: A fanatic. Blind loyalty is even more boring than regular loyalty. At least she's angry." },
        'humpik': { type: 'transactional', text: "Archie on Humpik: The Dwarf is simple. Predictable. Useful for hitting things, and apparently, for finding heavy planks. Points in the right direction and he goes." }, 
        'remi': { type: 'transactional', text: "Archie on Remi: She shoots first. I can respect that. Nearly took out my ride, but still. Good instincts." }, // UPDATED
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
        'speaker_l': { type: 'enemy', text: "Markop on Speaker L: He speaks of order and law, but he leads a choir of fanatics. He would let us die in here to prove his point. He is no leader; he is a zealot." },        
        'archie': { type: 'volatile', text: "Markop on Archie: Another fireball. Another disaster. He nearly got them all killed. And yet... he saved the boy. He chose to save one life over his own escape. I don't understand him. Is he a monster, or a martyr?" }, // UPDATED        'humpik': { type: 'ally', text: "Markop on Humpik: His loyalty is commendable, though his king is questionable. A strong arm in a just fight. A true friend." },
        'bowser': { type: 'distrust', text: "Markop on Bowser: He fled. When faced with bureaucracy and ghosts, he chose self-preservation. I cannot fault his logic, but he abandoned us." },        
        'remi': { type: 'ally', text: "Markop on Remi: She walked past my battle in search of breakfast. Pragmatism or foolishness? I can't be sure. But she survived the fire. She is resilient." }, // UPDATED        'dan': { type: 'enemy', text: "Markop on 'Dan': He is an impostor. Lario's warning cannot be ignored. His actions in the prison—locking us in, his erratic behavior—he is a danger to us all. I failed to see it. I must uncover his true purpose. His attempt to ride on my back during the book battle was undignified and tactically unsound." },
        'waluigi': { type: 'enemy', text: "Markop on Waluigi: An agent of pure chaos, often to his own detriment. He tried to extinguish a magical fire with a Fire Bolt, making the inferno worse. He is unpredictable and dangerous, a fool wielding power he doesn't comprehend." },
        'dan': { type: 'ally', text: "Markop on Dan: He healed Archie. The first true spell I've seen from him. It was a beacon of light in that horrible smoke. His training is bearing fruit. There is hope for him yet." }, // UPDATED (Changed from enemy 'imposter' view)
        'waluigi': { type: 'enemy', text: "Markop on Waluigi: He helped start the fire, then took credit for putting it out. He is a jester playing with lives, and I find none of it amusing." }, // UPDATED
        'green_t': { type: 'enemy', text: "Markop on Green T: He locked them in. He used their lives as a diversion for... a basket of fruit. Now he offers me a key and talks of trust. He is a serpent. I will not turn my back on him." }, // UPDATED                     
        'toad_lee': { type: 'ally', text: "Markop on Toad Lee: A steadfast warrior. His dedication to protecting the others is admirable. He is the rock upon which their safety is built." },
        'eager': { type: 'ally', text: "Markop on Eager: His speed is an asset, but he must learn to master his fear. Courage is not the absence of fear, but acting in spite of it." },
        'roger': { type: 'ally', text: "Markop on Roger: His methods are... direct. A firearm is not an honorable weapon, but in these times, survival often outweighs tradition. He is a capable protector." },
        'ryan': { type: 'ally', text: "Markop on Ryan: He has a gift. I hope he learns to wield it with wisdom and restraint, for magic is a powerful but dangerous tool." },
        'bones': { type: 'ally', text: "Markop on Bones: He has endured much. His cynicism is a scar, a shield against a world that has been cruel. But there is strength in him yet." },
        'emperor_elagabalus': { type: 'enemy', text: "Markop on Elagabalus: His Imperial 'peace' is a gilded cage built on the backs of the oppressed. True order comes from justice, not force." },
        'iron_legion': { type: 'enemy', text: "Markop on the Iron Legion: Incompetent, deceptive, and cruel. They tortured Eager, lied about the 'dragon' in the sewer, and used one of their own spies to lead us into a trap. They are not an army of order; they are a gang of thugs with better uniforms." },
        'captain_toadette': { type: 'enemy', text: "Markop on Toadette: Her loyalty is admirable, but it has become a blinding fanaticism. She cannot see that her actions are creating more chaos, not less." },
        'lario': { type: 'transactional', text: "Markop on Lario: He stole a logbook. While theft is dishonorable, if it contains a clue to Eager's whereabouts... it is a necessary evil. A tool we must use." }
    },
    'humpik': {
        'the_oracle': { type: 'enemy', text: "Hjumpik on The Oracle: The mirrors are watching. His mirrors. This is his house, his trap. I will smash every piece of glass in this place." },        
        'toad_lee': { type: 'distrust', text: "Hjumpik on Toad Lee: He talks about rooftops and solariums while a monster is behind the door. His plans are too complicated. We need to smash things." },        
        'archie': { type: 'volatile', text: "Hjumpik on Archie: He... killed the little toad. Just... snapped his neck. To feed Eager? I don't understand. Then he surrendered. I failed him. I should have fought." },
        'speaker_l': { type: 'enemy', text: "Hjumpik on Speaker L: He came with his army and his songs and pushed Archie to the brink. This is his fault. All of it." },
        'bowser': { type: 'loyalty', text: "Humpik on Bowser: King Bowser ate rusty monster! Now his teeth are funny color! But he fought good in the fire! He is still the strongest!" }, // UPDATED        'archie': { type: 'ally', text: "Humpik on Archie: The little guy is crazy! But he makes big explosions and finds big boards! Good to have in a scrap. He helped find the new girl." },
        'markop': { type: 'ally', text: "Humpik on Markop: The horse-man called King Bowser 'silly billy'. To his face. I... do not understand horse-man jokes. But he fights good, and helped look for the new girl. I respect that." },
        'waluigi': { type: 'volatile', text: "Humpik on Waluigi: He saved me, and for that, I owe him. But now he talks of... time travel and money with the Oracle. He is a strange and slippery friend. I will work with him, but I will watch him." },
        'oracle': { type: 'enemy', text: "Humpik on The Oracle: The smooth-talking man. He smiles, but his eyes are cold. He knows more than he says. The ghosts... he put them there. Or he controls them. He is not to be trusted. He is the enemy here." }
    },
    'bowser': {
        'speaker_l': { type: 'enemy', text: "Bowser on Speaker L: A singing, marching little mushroom who thinks he can give me orders? GWAHAHA! Pathetic. Let him have his haunted house. I've got better things to do than listen to his terrible music." },
        'green_t': { type: 'transactional', text: "Bowser on Green T: The little sponge is with me now. He's slippery and annoying, but he knows this place. He's useful, for as long as he's breathing." },
        'markop': { type: 'distrust', text: "Bowser on Markop: He saw the ghosts and his first instinct was to fight them. Admirable. Stupid. But admirable. He is a warrior, at least." },
        'archie': { type: 'pity', text: "Bowser on Archie: I saw them leading him away. The little toads in their silly uniforms. To get taken down by a marching band... pathetic. A waste of a good anarchist." },
        'humpik': { type: 'loyalty', text: "Bowser on Humpik: My most loyal ally! He has the strength of a mountain and the loyalty of a true friend! GWAHAHAHA!" },
        'waluigi': { type: 'volatile', text: "Bowser on Waluigi: The purple string bean? He's a schemer. Useful for now, but not to be trusted. He got Humpik out, so... credit where it's due." },
        'dan': { type: 'ally', text: "Bowser on Dan: The kid warned me about the rust-pork! I didn't listen. My teeth feel weird. He was right. And then he did that light-y healing thing. He's getting stronger. Good." }, // UPDATED
    },
    'remi': {
        'speaker_l': { type: 'intrigue', text: "Remi on Speaker L: The music... it was hypnotic. I had a drum. I was one of them for a minute. It was... scary. And kind of nice. I don't know what to think." },        
        'archie': { type: 'volatile', text: "Remi on Archie: He almost got us all killed with that fireball. But he did it to save Eager. He's a walking disaster area, but... I guess his heart is in the right place? Sometimes? It's confusing." }, // UPDATED
        'markop': { type: 'ally', text: "Remi on Markop: He was fighting a shadow and I walked past to get breakfast. He's probably mad. But then he dug everyone out of the fire. He's the responsible one. We need that." }, // UPDATED
        'waluigi': { type: 'distrust', text: "Remi on Waluigi: He yelled at me for shooting his pet dragon, then his friend locked us in a burning building to die. I don't care if he put the fire out, he's a menace." }, // UPDATED
        'green_t': { type: 'enemy', text: "Remi on Green T: He complimented my shot... right before he locked me in a greenhouse with fire and monsters. He's not just an enemy, he's a psychopath. I'll shoot his other wing next time." }, // UPDATED
        'bowser': { type: 'enemy', text: "Remi on Bowser: He knew the box was a bomb and just... watched. He's a monster. A king of monsters. I don't trust him for a second, even if we're on the same side for now." },
    },
    'waluigi': {
        'toad_lee': { type: 'rivalry', text: "Waluigi on Toad Lee: So serious! So much stomping and yelling! He has no appreciation for the beautiful, terrifying performance this house is putting on!" },        
        'speaker_l': { type: 'rivalry', text: "Waluigi on Speaker L: WAH! A musical number! With choreography! And a dramatic reading! He stole my act! This is an outrage! My own chaotic entrances are far superior!" },  
        'archie': { type: 'rivalry', text: "Waluigi on Archie: A FIREBALL?! WAH! So unoriginal! So crude! My firebolt was far more stylish, and my cone of cold was the perfect finale! He has no sense of showmanship!" }, // UPDATED        'bowser': { type: 'volatile', text: "Waluigi on Bowser: Another big, angry brute who wants to rule everything. So unoriginal! But his army is a useful distraction." },
        'green_t': { type: 'volatile', text: "Waluigi on Green T: He locked my backup singers in a burning building! A bit extreme for a 'distraction,' even for me! But... the results were magnificent! Our business partnership is becoming very... interesting!" }, // UPDATED    },
    },
    'wario': {
        'waluigi': { type: 'volatile', text: "Mr. Wario on Waluigi: He is chaos. Unpredictable. This makes him a useful tool and a dangerous liability. For now, the potential profit outweighs the risk. His... style... provides excellent cover for my own, more discreet operations." },
        'regal_empire': { type: 'enemy', text: "Mr. Wario on The Regal Empire: Bad for business. Their obsession with 'order' involves too many regulations, taxes, and patrols. Their stability is the stability of a stagnant pond. There's more profit in a hurricane."},
        'toad_lee': { type: 'neutral', text: "Mr. Wario on the Shadeward Toads: A bunch of noisy mushrooms. They got in the way of my deal with the Legion. Insignificant, but annoying."}
    },
    // --- LIBERATED TOADS OPINIONS ---
    'dan': {
        'markop': { type: 'loyalty', text: "Dan on Markop: He is my teacher and protector. His strength is not just in his arms, but in his heart. I trust him completely." },
        'archie': { type: 'neutral', text: "Dan on Archie: (Dan is currently catatonic and unable to form a coherent opinion.)" },
        'dan': { type: 'enemy', text: "Dan on Himself: Failure. I failed him. I hurt him. I'm a monster..." }        
    },
    'toad_lee': {
        'hjumpik': { type: 'frustration', text: "Toad Lee on Hjumpik: He has the subtlety of an avalanche. There are secret passages, tactical routes. But all he sees is a wall to be broken or a monster to be smashed. His strength is a tool, not a solution." },        
        'speaker_l': { type: 'enemy', text: "Toad Lee on Speaker L: I am receiving reports of a murder, a monster in the mirrors, and Archie in chains. Speaker L has lost control of this situation. He has gone too far." },        
        'markop': { type: 'ally', text: "Toad Lee on Markop: A true commander. He is strong, and he leads from the front. I would follow him into any battle." },
        'archie': { type: 'transactional', text: "Toad Lee on Archie: He is a necessary evil. A wild dog that bites our enemies. Better to have him on our leash than against us." },
        'ryan': { type: 'ally', text: "Toad Lee on Ryan: He provided a clear objective. The mission is now to capture. That is an order I can understand and enforce." },        
        'dan': { type: 'loyalty', text: "Toad Lee on Dan: His voice has returned. He spoke with the wisdom of a true leader, one who values the lives of his people. I was proud to stand with him. The Vow feels stronger today." },        'oracle': { type: 'enemy', text: "Toad Lee on The Oracle: His games are an insult. He toys with time and people for his own amusement. He is an agent of chaos in a scholar's robes." },
        'the_mole': { type: 'enemy', text: "Toad Lee on The Mole: He broke the vow. Betrayed his brothers. There is no greater crime. He will answer for it." },
        'iron_legion': { type: 'enemy', text: "Toad Lee on The Iron Legion: They sent a spy into our ranks. They orchestrated this pain. They are without honor." }
    },
    'eager': {
        'archie': { type: 'loyalty', text: "Eager on Archie: He saved me. When the roof was caving in and everyone was running, he came back for me. He pulled me out. I don't care what anyone says about him. He's a hero." }, // UPDATED
    },    
    'roger': {
        'oracle': { type: 'distrust', text: "Roger on The Oracle: An unstable variable. His control over the environment is a tactical nightmare. The robot double was... unexpected. He is a high-threat entity." },
        'the_mole': { type: 'enemy', text: "Roger on The Mole: A catastrophic failure in operational security. His presence invalidates all prior intelligence. All personnel must be re-vetted." },
        'iron_legion': { type: 'enemy', text: "Roger on The Iron Legion: Their willingness to use infiltration tactics confirms they are a sophisticated and dangerous enemy. Standard protocols are insufficient." }
    },
    'speaker_l': {
        'archie': { type: 'enemy', text: "Speaker L on Archie: He has surrendered. Justice will be swift and transparent. His chaos ends now." },
        'hjumpik': { type: 'distrust', text: "Hjumpik on Hjumpik: The Dwarf's loyalty is a problem. He questions the will of the Cohort. He must be watched." },        'dan': { type: 'ally', text: "Speaker L on Dan: His proposal aligns with our need to preserve our numbers. A leader who protects his people is one we can work with. For now." }
    },
    'bones': {
        'dan': { type: 'neutral', text: "Bones on Dan: The kid's plan is less efficient than mine, but it's better than Archie's. Fewer funerals is good for morale, I guess. It'll do." }
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
    'bones': {
        'oracle': { type: 'enemy', text: "Bones on The Oracle: Another creep in a fancy house playing games. The whole dinner was a sham. At least he wasn't boring." },
        'the_mole': { type: 'enemy', text: "Bones on The Mole: The little rat. He helped them grab me. I won't forget that. He'll get what's coming to him." },
        'dan': { type: 'neutral', text: "Bones on Dan: The kid's plan is less efficient than mine, but it's better than Archie's. Fewer funerals is good for morale, I guess. It'll do." },        
        'iron_legion': { type: 'enemy', text: "Bones on The Iron Legion: They talk a big game about order, but they're just thugs like everyone else. They asked their questions. They didn't like my answers. Tough." },
        'chai': { type: 'enemy', text: "Bones on Chai: She's a snake. I saw it in her eyes. Threatened her. She folded like a cheap suit. Weak." }
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
    'hjumpik': {
        'speaker_l': { type: 'enemy', text: "Hjumpik on Speaker L: The little toad shouts orders while our friend bleeds. He is not our leader. I protect my friends. He is in the way." }
    },
    // --- OTHER NPCS ---
    'captain_toadette': {
        'bowser': { type: 'enemy', text: "Toadette on Bowser: The beast is responsible for the Princess's death. This temporary truce is a bitter pill, a necessary evil to uncover the truth and punish the true villains." },
        'embercap': { type: 'loyalty', text: "Toadette on Embercap: My most steadfast soldier. He has seen the true face of the enemy and has been forged anew in the fires of conviction. His resolve is absolute, a perfect instrument of my will." }
    },
    'green_t': {
        'markop': { type: 'distrust', text: "Green T on Markop: The paladin grabbed me to 'save' me from the ghosts. Now he's dragging me through this nightmare. I should have taken my chances with the mirror." },        
        'speaker_l': { type: 'rivalry', text: "Waluigi on Speaker L: WAH! A musical number! With choreography! And a dramatic reading! He stole my act! This is an outrage! My own chaotic entrances are far superior!" },  
        'markop': { type: 'transactional', text: "Green T on Markop: The paladin is predictable. Honorable. That makes him the perfect piece to move. He'll take the key because his conscience demands it. And he'll walk right into the game." }, // UPDATED
        'remi': { type: 'ally', text: "Green T on Remi: The new girl can shoot. I respect that. A useful asset for future... 'distractions'." }, // UPDATED        
        'dan': { type: 'enemy', text: "Green T on Dan: He's a fool who played with power he couldn't control. The staff broke him. And he's still hiding the truth from his friends. Pathetic. Danger is coming, and his silence puts everyone at risk." },
        'waluigi': { type: 'volatile', text: "Green T on Waluigi: The purple guy is insane. 'Time-traveling properties'? 'Fifty-fifty split'? It's a ridiculous story. But he got us a ticket out of that madhouse on a wyvern. For now, he's the best bet I've got. I'll play along." }
    },
    'oracle': {
        'archie': { type: 'intrigue', text: "The Oracle on Archie: A fascinating specimen. When faced with annihilation, he sacrificed efficiency for sentiment. A chaotic variable, but one with a predictable emotional core. The results of the experiment were... illuminating." }, // UPDATED    }
    }
};