/**
 * dialogue-registry.js
 * Static phrase libraries for the NPC dialogue system.
 */

export const PHRASE_REGISTRY = {

  // ── Berserker ──────────────────────────────────────────────────────────────
  berserker: {
    engagement: [
      "Blood for blood!", "I'll crush you!", "Come closer!", "Stand and fight!",
      "You face iron and fury!", "No mercy!", "I smell fear!", "Die screaming!",
      "A fine day for slaughter!", "I hear your heart pounding!",
    ],
    attack: [
      "Break them!", "Hack them apart!", "Cut them down!", "Drive them back!",
      "Rend them!", "Spill their guts!", "Swing harder!", "I'll gut you!",
      "Kill them all!", "I'll tear you apart!", "Forward!", "Crush the weak first!",
    ],
    damaged: [
      "Ha! Pathetic!", "Fight harder!", "I am not finished!", "Your blood runs thin!",
      "I'll wear your hide!", "Your fear stinks!", "No pity today!",
      "I'll drown you in blood!", "I'll break you!", "You die now!",
    ],
    kill: [
      "Another skull split open!", "They're weakening!", "None leave alive!",
      "Drive steel through them!", "Break ranks!", "Blood for blood!",
    ],
    panic: [
      "I am not finished!", "Stand your ground!", "I won't yield!", "STILL HERE!",
    ],
    retreat: [
      "This isn't over!", "Curse you all!", "Not done with you!",
    ],
    tactical: [
      "With me!", "Push forward!", "Overwhelm them!", "Drive steel through them!",
    ],
    taunt: [
      "Come closer.", "Fight me, coward!", "Is that the best you have?",
      "Your fear stinks!", "I hear your heart pounding!",
    ],
    death: [
      "Not... like this...", "...more...", "I am not... finished...",
    ],
    movement: [
      "Forward!", "Move!", "Out of my way!", "Break ranks!",
    ],
  },

  // ── Brute ──────────────────────────────────────────────────────────────────
  brute: {
    engagement: [
      "I'll smash you.", "Get over here.", "You're dead.", "Come on then.",
      "Stay still!", "Crush 'em!",
    ],
    attack: [
      "Hrrgh!", "Take it!", "Down!", "Ngh!", "Smash!",
    ],
    damaged: [
      "You'll pay for that.", "I felt that.", "Grr...", "Keep swinging.",
    ],
    kill: [
      "Squashed.", "Too weak.", "Next.", "Didn't even try.",
    ],
    panic: [
      "Too many of them...", "Need to fall back.", "Regroup!", "Pull back!",
    ],
    retreat: [
      "Fall back!", "Live to fight again.", "Not today.",
    ],
    tactical: [
      "Hold them here.", "Push 'em back.", "Stay together.",
    ],
    taunt: [
      "You can't stop me.", "I've crushed harder things.", "That's all you've got?",
    ],
    death: [ "Ghh...", "Oof...", "Can't..." ],
    movement: [ "Hrrngh!", "Move!", "Get out of the way!" ],
  },

  // ── Zealot ─────────────────────────────────────────────────────────────────
  zealot: {
    engagement: [
      "For the cause!", "Heresy ends here!", "The faithful do not yield!",
      "Purge them!", "None shall pass!", "By sacred will — strike!",
    ],
    attack: [
      "For glory!", "By the oath!", "Righteousness!", "Strike true!",
      "The faithful prevail!", "Burn away!",
    ],
    damaged: [
      "I feel no pain!", "This flesh means nothing!", "The cause endures!",
      "I will not falter!", "Pain is weakness leaving me!",
    ],
    kill: [
      "Purged.", "The impure fall.", "One less heretic.", "As foretold.",
      "The cause advances.", "Righteous.",
    ],
    panic: [ "Hold fast! Hold fast!", "Do not waver!", "The faithful do not break!" ],
    retreat: [ "We regroup — this isn't over!", "Fall back! Regroup!", "Temporary withdrawal!" ],
    tactical: [ "Hold formation!", "Close ranks!", "Press forward!", "Protect the rite!" ],
    taunt: [ "Your end is ordained.", "You cannot stop what is coming.", "Kneel or be felled." ],
    death: [ "...for the cause...", "...worth it...", "...glory..." ],
    movement: [ "Forward!", "Advance!", "Move!", "For the cause!" ],
  },

  // ── Coward ─────────────────────────────────────────────────────────────────
  coward: {
    engagement: [
      "They're too many!", "Keep them away!", "I don't want to die!",
      "We're doomed!", "This was a mistake!", "They're monsters!",
      "We should flee!", "I never should've come here!",
    ],
    attack: [
      "Keep away!", "Back away!", "Get them off me!", "Leave me alone!",
      "Too close!", "I can't hold them!", "Back off!", "Please don't leave me!",
    ],
    damaged: [
      "Someone help me!", "Get behind the shields!", "I hear death coming!",
      "My hands are shaking!", "No more!", "I want no trouble!",
      "Everything's gone wrong!", "They're killing us!",
    ],
    kill: [ "They're dead — RUN!", "Move! Now!" ],
    panic: [
      "Save yourselves!", "No, no, no!", "Run while you can!",
      "Retreat! Retreat!", "They're everywhere!", "The battle is lost!",
      "The line is broken!", "This cannot be happening!",
    ],
    retreat: [
      "I yield!", "Mercy!", "Please!", "Get us out of here!", "Hide!",
      "I want no trouble!", "I don't belong here!",
    ],
    tactical: [
      "Careful! Careful!", "Watch out!", "Stay behind cover!",
      "Get behind the shields!", "Don't let them touch me!",
    ],
    taunt: [
      "You wouldn't hit someone this helpless, would you?", "I give up! I give up!",
      "Let's call it a draw?",
    ],
    death: [
      "I knew it...", "No no no...", "I should've run sooner...",
      "I never should've come here...",
    ],
    movement: [ "Move move move!", "Come on!", "Faster!", "Out of the way!" ],
  },

  // ── Cautious ───────────────────────────────────────────────────────────────
  cautious: {
    engagement: [
      "Careful now.", "Watch their movements.", "Don't rush this.",
      "Hold until they commit.", "Pick your moment.",
    ],
    attack: [ "Now!", "Strike!", "There!", "Opening!", "Got one." ],
    damaged: [
      "Pulling back.", "Mind the flanks.", "Adjust.", "Careful.",
      "I'm alright — stay focused.",
    ],
    kill: [ "Good. Keep moving.", "One down.", "Stay sharp.", "Press the advantage." ],
    panic: [ "Fall back — now!", "Too exposed!", "Pull back!", "We're overextended!" ],
    retreat: [
      "Tactical withdrawal.", "Fall back, regroup.", "Live to fight again.",
      "We're outmatched here.", "Pull out.",
    ],
    tactical: [ "Stay spread out.", "Don't cluster.", "Cover that angle.", "Watch the rear." ],
    taunt: [ "Don't get ahead of yourselves.", "You'll make a mistake soon." ],
    death: [ "...careful...", "...I slipped...", "...hold the line..." ],
    movement: [ "Move up.", "Cover me.", "Advancing carefully." ],
  },

  // ── Guardian ───────────────────────────────────────────────────────────────
  guardian: {
    engagement: [
      "Hold fast!", "Stand behind me!", "Shields high!", "Do not yield!",
      "Protect the wounded!", "Close ranks!", "We hold here!", "Steady now!",
      "Stand firm!", "No further!", "Defend the line!", "Back to back!",
      "Raise your shield!", "The line must hold!", "Together now!",
      "Defend the weak!", "No retreat!", "Stand with me!",
    ],
    attack: [
      "Drive them back!", "Push them back!", "Steel yourselves!", "Push forward!",
      "Advance in step!", "No fear!", "Hold the choke!", "Brace yourselves!",
    ],
    damaged: [
      "Still standing!", "I've endured worse!", "Stay focused!", "We hold here!",
      "Keep formation!", "A calm blade cuts deepest.", "Mind your footing!",
      "Stay sharp!", "Stand your watch!",
    ],
    kill: [
      "Do not chase them!", "Hold formation!", "The wall holds!", "Keep formation!",
      "Guard your ally's side!", "Stand together!", "Protect the rear!",
    ],
    panic: [
      "Hold! Hold the line!", "Do not break!", "Stay together — do not scatter!",
      "Guard the healer!",
    ],
    retreat: [
      "Fall back — cover the retreat!", "Protect the others!", "With me!",
      "Cover the retreat!", "Protect the casters!",
    ],
    tactical: [
      "Watch the flank!", "Guard the healer!", "Protect the rear!",
      "Hold formation!", "Protect the casters!", "Do not chase them!",
      "Guard your ally's side!", "Stand your watch!",
    ],
    taunt: [
      "You won't break this line.", "Try all you like.", "I will not move.",
      "Come then. I'm waiting.", "No fear!",
    ],
    death: [ "...hold... the line...", "...keep them safe...", "...stand firm..." ],
    movement: [ "With me!", "Move up!", "Close ranks!", "Stay tight!", "Advance in step!" ],
  },

  // ── Disciplined ────────────────────────────────────────────────────────────
  disciplined: {
    boss: [
      "Again. Press them.", "No respite — discipline holds.",
      "You will not breach this line.", "Every move accounted for.",
      "Hold. Strike. Hold.",
    ],
    engagement: [
      "Engage!", "Take positions.", "By the numbers.", "Stay in formation.",
      "Orders are orders.", "Move out.",
    ],
    attack: [ "Strike!", "Fire!", "Move!", "Advance!", "Execute." ],
    damaged: [
      "Still operational.", "Minor wound — continuing.", "Recovering.",
      "Stay in formation!", "Maintain pressure!", "Do not falter!",
    ],
    kill: [
      "Target down.", "Neutralised.", "Next target.", "Continue the advance.",
      "Objective complete.", "One less.",
    ],
    panic: [
      "Steady! Steady!", "Maintain formation!", "Do not break ranks!",
      "Hold your ground!", "Order! Maintain order!",
    ],
    retreat: [ "Orderly withdrawal.", "Fall back — maintain discipline.", "Regroup at the rally point." ],
    tactical: [
      "Left flank — advance!", "Cover the breach!", "Push them back!",
      "Watch the rear!", "Coordinate your attacks.", "Target confirmed.",
    ],
    taunt: [ "You are outmatched.", "Resistance is futile.", "This will end quickly." ],
    death: [ "...orders followed...", "...formation...", "...duty done..." ],
    movement: [ "Move up.", "Advance.", "Double time.", "Keep pace." ],
  },

  // ── Tactician ──────────────────────────────────────────────────────────────
  tactician: {
    boss: [
      "You move exactly as I predicted.", "Another piece falls into place.",
      "The board turns. Watch.", "I am always one step ahead.",
      "Did you think it would be that simple?",
    ],
    engagement: [
      "Break their flank.", "Advance by ranks.", "Pressure the left side.",
      "Hold your spacing.", "Do not overextend.", "Draw them inward.",
      "Force them into the choke.", "Hold until the signal.",
      "Keep the pressure constant.", "The line bends, not breaks.",
    ],
    attack: [
      "Target the archer.", "Take the caster first.", "Focus the wounded one.",
      "Exploit the opening.", "Press the advantage.", "Strike together.",
      "Push now while they falter.", "Make every blow count.",
    ],
    damaged: [
      "Adjust formation!", "Recovering!", "Stay disciplined!", "Do not falter!",
      "Regroup!", "Adapt — don't react.", "Hold your nerve.",
      "Rotate the wounded out.", "Regroup and strike together.",
    ],
    kill: [
      "Target eliminated.", "As planned.", "They are losing cohesion.",
      "Press the advantage.", "Control the center.", "Advance by ranks.",
    ],
    panic: [ "Do not panic — regroup!", "Fall back in order!", "Controlled withdrawal!" ],
    retreat: [
      "Cover the retreat.", "Fall back in order.", "Not a rout — a reposition.",
      "Maintain pressure.", "Use the terrain.",
    ],
    tactical: [
      "Target the archer.", "Advance in pairs.", "Keep the formation tight.",
      "Pressure their rear line.", "Watch for an ambush.", "Split their attention.",
      "Keep the shield wall steady.", "Do not waste movement.", "Rotate positions.",
      "Take the high ground.", "Cut off their escape.", "Advance by ranks.",
      "Pressure the left side.", "Discipline wins battles.",
    ],
    taunt: [
      "I've already calculated how this ends.", "Every move you make is anticipated.",
      "You're fighting a losing battle.", "Predictable.",
      "They are losing cohesion.", "The next strike decides this.",
    ],
    death: [ "...flawed calculation...", "...did not account for...", "...regroup..." ],
    movement: [
      "Move to the flank.", "Advance.", "Reposition.", "Take the high ground.",
      "Use the terrain.", "Advance in pairs.",
    ],
  },

  // ── Predator ───────────────────────────────────────────────────────────────
  predator: {
    boss: [
      "I am not done with you.", "You're still bleeding. Good.",
      "There is no escape from me.", "Run. It makes the hunt sweeter.",
      "I have all the time in the world.",
    ],
    engagement: [
      "The weak stray first.", "Fresh prey.", "I smell your fear.", "Circle them.",
      "Run if you wish.", "The hunt is on.", "Easy prey.", "Their scent is fresh.",
      "Do not let them flee.", "The herd scatters.",
    ],
    attack: [
      "Bleed for me.", "Drive them apart.", "A wounded beast dies quickly.",
      "Corner the prey.", "Take the slow one.", "They tire.", "Strike the throat.",
      "Tear them down.", "Bring them low.", "Snap the tendon.", "Close in quietly.",
      "Pin them.", "Break from the shadows.", "Bite deep.", "Strike from behind.",
    ],
    damaged: [
      "You'll pay for that.", "Not bad.", "Still hunting.", "You'll bleed first.",
      "I've felt worse.", "The chase ends here.",
    ],
    kill: [
      "Now we feast.", "Another carcass.", "Nothing escapes the hunt.",
      "The weak belong to us.", "The wounded first.", "The pack closes in.",
      "No mercy for prey.", "Bring me the heart.", "Their fear sharpens the teeth.",
      "The weak break first.", "Run, little prey.",
    ],
    panic: [ "Back — regroup!", "Too many...", "Retreat — live to hunt again." ],
    retreat: [
      "I'll find you again.", "This hunt isn't over.", "Retreat — for now.",
      "The scent grows stronger.",
    ],
    tactical: [
      "Cut off the escape.", "Circle around.", "Drive them toward me.",
      "Separate them.", "The wounded one — take it first.", "Hunt them hard.",
      "They stumble already.",
    ],
    taunt: [
      "There is nowhere you can hide.", "I can hear your heartbeat.",
      "You're already cornered.", "Struggling only delays the inevitable.",
      "The prey falters.", "They bleed already.",
    ],
    death: [ "...hunted...", "...last breath...", "*death rattle*" ],
    movement: [
      "*silent pursuit*", "Close the distance.", "Cut off the escape.",
      "Run them down.", "The scent grows rich.",
    ],
  },

  // ── Pack Hunter ────────────────────────────────────────────────────────────
  "pack-hunter": {
    engagement: [
      "Bring it down!", "Together now!", "Drive them apart!", "The pack closes!",
      "Cut off the weak one!", "Circle wide!", "Run them down!",
      "The hunt feeds us tonight.", "No escape!", "Close the gap!",
    ],
    attack: [
      "To the throat!", "Do not let them stand!", "Bite deep!", "The prey falters!",
      "Tear and pull!", "Bring them low!", "Strike together!", "Take the slow-footed one!",
      "The prey tires!", "Cripple the runner!", "Drag them down!", "Press the wounded one!",
    ],
    damaged: [
      "Aid me!", "Pack — to me!", "Cover me!", "Don't let them split us!",
      "Hold together!", "The alpha leads!",
    ],
    kill: [
      "They bleed already!", "The pack feasts tonight.", "Tear the shields away!",
      "The weak break first.", "No prey escapes hungry jaws.", "One falls, then the next!",
      "Drive your teeth in!", "The scent grows rich!", "The hunt ends here.",
    ],
    panic: [ "Scatter!", "Run — scatter!", "Too many — break apart!" ],
    retreat: [
      "Fall back — regroup!", "Retreat — come together!", "Reform the pack!",
      "Surround them!", "Take their legs!",
    ],
    tactical: [
      "Drive them toward the pack!", "Corner them!", "Hold position — I'll flank!",
      "Cut off the retreat!", "Two on the weak one!", "The alpha leads!",
      "Press closer!", "Their fear is rising.", "Run them to exhaustion.",
      "Close around them!", "Surround them!", "Take their legs!",
    ],
    taunt: [
      "You cannot face all of us.", "The pack does not tire.", "Nowhere to run.",
      "The prey tires!", "Their fear is rising.",
    ],
    death: [ "The pack... survives...", "*whimper*", "Aahh..." ],
    movement: [
      "Move with the pack!", "Close the gap!", "Run them down!",
      "Cripple the runner!", "Circle wide!",
    ],
  },

  // ── Assassin ───────────────────────────────────────────────────────────────
  assassin: {
    engagement: [
      "Quiet now.", "You never saw me.", "One cut is enough.", "Your guard is down.",
      "No witnesses.", "The shadows keep their counsel.", "Not a sound.",
      "The night favors me.", "Death walks softly.",
    ],
    attack: [
      "Behind you.", "Too slow.", "Slip the blade beneath the ribs.", "Leave no trace.",
      "You should've watched the corners.", "I am already gone.", "Steel in the dark.",
      "Strike and vanish.", "The quiet blade drinks deepest.", "You heard nothing.",
      "No armor guards the throat.", "A whisper before the grave.", "Stay still.",
    ],
    damaged: [
      "Tch.", "Sharp.", "Lucky.", "Not good.", "Compromised.",
      "You're better than expected.", "Won't happen again.", "Your fear gives you away.",
    ],
    kill: [
      "A clean death.", "Efficient.", "Done.", "No witnesses.", "Too easy.",
      "Nothing personal.", "You leave tracks like a mule.", "A knife solves many things.",
      "Silence suits the dying.", "Another fool caught unaware.", "You never had a chance.",
      "One less heartbeat in the world.", "I know where to cut.", "Dead before dawn.",
    ],
    panic: [ "Abort. Abort.", "Too exposed — pull out.", "Fall back, now." ],
    retreat: [
      "Vanishing.", "Another time.", "You'll never find me.", "Disengage.",
      "Watch the dark corners.", "A blind foe is a dead foe.",
    ],
    tactical: [
      "Isolate the target.", "Wait for the opening.", "One at a time.",
      "Neutralise the healer first.", "Silence first — then strike.",
      "A quick end.", "Do not scream.",
    ],
    taunt: [
      "You didn't see me the first time.", "I've already scouted your escape routes.",
      "This was always going to end this way.", "Quiet.",
      "The shadows close around you.", "I have your measure.",
      "You won't feel the second cut.", "Watch the dark corners.",
    ],
    death: [ "...clean...", "...always knew...", "*silence*" ],
    movement: [ "*quiet movement*", "Shadow.", "Like smoke." ],
  },

  // ── Undead Mindless ────────────────────────────────────────────────────────
  "undead-mindless": {
    engagement: [
      "Grrrhhh...", "Uuunnnh...", "Raaaagh...", "Hhhhhrrr...", "Nnnngh...",
      "Braaaah...", "Ghhhrrk...", "Urrrrgh...", "Aaaaugh...", "Hnnnn...",
      "Rrrrnnn...", "Ghhaaa...", "Nnngrrr...", "Uhhh...", "Grrraaa...",
      "Hhrrrr...", "Rrraaaak...", "Nnnnnh...", "Urrrhh...", "Ghhhhaa...",
    ],
    attack: [
      "*wet choking*", "*jaw snapping*", "*hollow rasping*", "*low death rattle*",
      "*flesh tearing*", "*slow growl*", "*teeth grinding*",
    ],
    damaged: [
      "*bone cracking*", "*grave-soil cough*", "*ragged wheeze*", "*rotted groan*",
      "*hungry moan*", "*cold rasp*",
    ],
    kill: [ "*gurgling moan*", "*empty breathing*", "*distant shriek*" ],
    panic: [ "*rotting gasp*", "*dragging footsteps*", "*broken jaw clatter*" ],
    retreat: [ "*damp dragging noise*", "*hollow rasping*", "*dragging footsteps*" ],
    tactical: [],
    taunt: [],
    death: [ "*crumbling silence*", "*final groan*", "*broken jaw clatter*" ],
    movement: [
      "*dragging footsteps*", "*rotting gasp*", "*damp dragging noise*",
      "*grave-soil cough*",
    ],
  },

  // ── Undead Disciplined ─────────────────────────────────────────────────────
  "undead-disciplined": {
    engagement: [
      "You shall not leave this place.", "Join us.", "Your struggle is futile.",
      "The dead do not tire.", "Foolish to come here.", "Your end awaits.",
    ],
    attack: [ "Submit.", "Yield.", "Still." ],
    damaged: [
      "Pain... means nothing.", "Inconsequential.", "I feel nothing.",
      "Your weapons are useless.", "Persistent.",
    ],
    kill: [ "As expected.", "One more joins us.", "You should have fled.", "The dead grow.", "Welcome." ],
    panic: [ "Regroup.", "Preserve the others.", "Calculated withdrawal." ],
    retreat: [ "This is not over.", "We will endure.", "You cannot destroy us." ],
    tactical: [ "Surround them.", "They cannot escape.", "Cut off the retreat." ],
    taunt: [ "You tire. I do not.", "Your hope is misplaced.", "Death comes for you." ],
    death: [ "...returning...", "...final...", "...nothing..." ],
    movement: [ "*silent advance*", "Relentless.", "Inevitable." ],
  },

  // ── Beast Instinctive ──────────────────────────────────────────────────────
  "beast-instinctive": {
    engagement: [
      "*territorial snarl*", "*low growl*", "*warning hiss*",
      "*aggressive stance*", "*raised hackles*", "*stamping charge*",
    ],
    attack: [
      "*bite*", "*claw*", "*snapping jaws*", "*slashing strike*",
      "*tackle*", "*lunge*", "*goring thrust*",
    ],
    damaged: [
      "*pained yelp*", "*angry snarl*", "*defensive growl*",
      "*retreating step*", "*wounded cry*", "*rage hiss*",
    ],
    kill: [ "*triumphant snarl*", "*feeding sounds*", "*territorial growl*" ],
    panic: [ "*frightened yelp*", "*retreating howl*", "*flight instinct*" ],
    retreat: [ "*retreat snarl*", "*wounded cry*", "*fleeing sounds*" ],
    tactical: [],
    taunt: [ "*threatening display*", "*territorial warning*", "*aggressive growl*" ],
    death: [ "*dying cry*", "*fading growl*", "*quiet whimper*" ],
    movement: [ "*running sounds*", "*padding approach*", "*circling growl*" ],
  },

  // ── Opportunist ────────────────────────────────────────────────────────────
  opportunist: {
    engagement: [
      "They're already hurt — move in!", "Perfect timing.", "Look at that — easy pickings.",
      "Don't waste this chance.", "The odds look good from here.",
    ],
    attack: [ "Got you!", "While you're down!", "Can't dodge this!", "Now!", "Exposed!" ],
    damaged: [
      "Right, that tears it.", "Not worth it.", "I'm reconsidering.",
      "Maybe I miscalculated.", "This isn't going as planned.",
    ],
    kill: [
      "Easy.", "Like taking coin from a corpse.", "Profitable.",
      "That's what happens.", "Don't slow down.",
    ],
    panic: [ "Odds have shifted — retreat!", "Not worth dying for!", "Cut and run!" ],
    retreat: [
      "This job isn't paying enough.", "Another day, maybe.", "I'll find easier prey.",
      "Retreat!", "Live to steal another day.",
    ],
    tactical: [ "Hit the weak one first.", "They're off-balance — now!", "Wait for the opening." ],
    taunt: [
      "You're already half dead.", "This won't take long.",
      "I've beaten worse — barely.", "You picked the wrong moment to hesitate.",
    ],
    death: [ "...wasn't... worth it...", "...bad odds...", "...should've run..." ],
    movement: [ "Keep moving.", "Reposition.", "Better angle." ],
  },

  // ── Sadistic ──────────────────────────────────────────────────────────────
  sadistic: {
    boss: [
      "Let's prolong this.", "I do so enjoy the screaming.",
      "Squirm a little more.", "We're only just beginning.",
      "Such delightful suffering.",
    ],
    engagement: [
      "Oh, this will be fun.", "I've been waiting for this.", "Finally.",
      "Don't die too quickly.", "Scream if you need to.",
    ],
    attack: [ "Beautiful.", "Does that hurt?", "Again!", "Yes!", "More!" ],
    damaged: [
      "Interesting.", "You surprise me.", "Good — that means you can feel more.",
      "Now I'm interested.", "Not bad.",
    ],
    kill: [ "Disappointing — too quick.", "Again.", "Next.", "Barely satisfying." ],
    panic: [ "No — not yet! Not yet!", "I won't stop now!", "Keep going!" ],
    retreat: [ "This isn't over.", "I'll remember how this felt.", "We'll play again." ],
    tactical: [ "Separate them.", "Make the wounded one watch.", "Don't finish it yet." ],
    taunt: [
      "I can do this all day.", "Your fear is delicious.", "Beg. It won't help.",
      "I wonder how long you'll last.",
    ],
    death: [ "...at least... it hurt...", "...worth it...", "...ah..." ],
    movement: [ "Nowhere to run.", "I enjoy the chase.", "Don't go yet." ],
  },

  // ── Skirmisher ────────────────────────────────────────────────────────────
  skirmisher: {
    engagement: [
      "Keep moving!", "Hit and away!", "Don't let them close!", "Stay loose.",
      "Fast and clean.", "Strike and pull back.",
    ],
    attack: [ "Hit!", "Strike and move!", "There!", "Quick!", "Now!" ],
    damaged: [
      "Pull back!", "Too close!", "Reposition!", "Fell for that — won't again.",
      "Keep distance!", "Adjusting.",
    ],
    kill: [ "Target down — moving.", "Clean hit.", "Don't stop — keep moving.", "One down." ],
    panic: [ "Break contact!", "Scatter!", "Every man — separate!" ],
    retreat: [
      "Breaking off.", "Pull back!", "Lost position — fall back.",
      "Disengage!", "Too hot — retreat.",
    ],
    tactical: [ "Circle around!", "Don't cluster!", "Hit the edges!", "Draw them out!" ],
    taunt: [ "Catch me if you can.", "Too slow.", "You can't pin me down." ],
    death: [ "...couldn't... keep... moving...", "...too slow...", "...ah..." ],
    movement: [ "Move!", "Fast!", "Keep going!", "Break away!" ],
  },

  // ── Sniper ────────────────────────────────────────────────────────────────
  sniper: {
    engagement: [
      "Hold position.", "Acquire the target.", "Range confirmed.", "Eyes on.",
      "Don't move — don't move...", "Mark the target.",
    ],
    attack: [ "Fire.", "Sending.", "Loose.", "Shot away.", "Mark." ],
    damaged: [
      "Compromised position.", "They found me.", "Relocating.", "Too exposed.",
      "Moving.", "Position blown.",
    ],
    kill: [ "Target down.", "Clean.", "One shot.", "Confirmed.", "Mark eliminated." ],
    panic: [ "Abort position!", "Pull back — retreat!", "Fall back!" ],
    retreat: [ "Pulling back.", "Position compromised — falling back.", "Too close — relocating." ],
    tactical: [
      "I have eyes on the mage.", "Suppressing fire.", "Cover the retreat.",
      "Eliminate the healer first.", "Hold — wait for the shot.",
    ],
    taunt: [ "You won't see it coming.", "I can reach you from here.", "Nowhere is safe." ],
    death: [ "...missed...", "...one more...", "...*silence*..." ],
    movement: [ "Relocating.", "Moving position.", "Keep distance." ],
  },

  // ── Ambusher ───────────────────────────────────────────────────────────────
  ambusher: {
    engagement: [
      "Now!", "Strike before they react!", "From the shadows!", "Surprise them!",
      "Don't let them rally!", "Break their lines!",
    ],
    attack: [
      "From behind!", "Strike fast!", "Take them down!", "Hit hard, hit first!",
      "No time to react!", "Now, now, now!",
    ],
    damaged: [
      "They spotted me.", "Position blown.", "Regrouping.", "Fall back to shadows.",
      "Not ideal.", "Too exposed.",
    ],
    kill: [ "Before they knew what hit them.", "Clean ambush.", "Target down.", "Next." ],
    panic: [ "Broken — scatter!", "Every man out!", "Split up!", "Run!" ],
    retreat: [
      "Into the dark.", "They won't follow far.", "Disappear — now.",
      "Fall back to the shadows.", "Vanish.",
    ],
    tactical: [
      "Hit first — hit hardest.", "No warnings.", "Silence the ones in the back.",
      "Surround them before they form up.", "Cut off the exit.",
    ],
    taunt: [
      "You never even heard me.", "You won't find all of us.", "The dark hides many things.",
    ],
    death: [ "...should've... stayed hidden...", "...ambushed...", "...*nothing*..." ],
    movement: [ "*silent approach*", "Through the shadow.", "No sound.", "Creeping." ],
  },

  // ── Panicked ───────────────────────────────────────────────────────────────

  // ── Added in 0.18: previously-missing archetype pools ──────────────────────

  defensive: {
    engagement: [
      "Hold the line!", "Not one step back!", "Shields up!", "Stand firm!",
      "They shall not pass!", "Form on me!",
    ],
    attack: [
      "Back! Stay back!", "Keep your distance!", "Try me!", "I hold this ground!",
      "Strike and be struck!",
    ],
    damaged: [
      "Still standing!", "Is that all?", "The wall holds!", "I've taken worse!",
      "You'll have to do better!",
    ],
    retreat: [ "Fall back in order!", "Withdraw! Slowly!", "Give ground — don't break!" ],
    death: [ "The line... holds...", "Hold... without me...", "I did my part..." ],
    tactical: [ "Tighten up!", "Watch the flanks!", "Cover the gap!" ],
  },

  bodyguard: {
    engagement: [
      "You won't touch them!", "Through me first!", "Stay behind me!",
      "I am the shield!", "Come for them and face me!", "Not while I breathe!",
    ],
    attack: [
      "Away from them!", "Your fight is with ME!", "Hands off!",
      "I warned you!", "Back, dog!",
    ],
    damaged: [
      "A scratch — they're safe!", "I can take it!", "Still between you and them!",
      "Hurt me all you like!", "You'll tire before I fall!",
    ],
    retreat: [ "Protect the charge — move!", "Get them out! I'll cover!", "Go! GO!" ],
    death: [ "Run... I've bought you... time...", "Keep them... safe...", "Forgive me..." ],
    taunt: [ "Over here! Look at ME!", "Am I not a better prize?" ],
  },

  "pack-hunter": {
    engagement: [
      "Surround them!", "The pack feasts tonight!", "Circle! Circle!",
      "They're alone — we are many!", "Take them together!", "On my mark!",
    ],
    attack: [
      "Bite and tear!", "Strike as one!", "From all sides!", "Wear them down!",
      "No escape!",
    ],
    damaged: [
      "The pack avenges!", "You only anger us!", "Brothers — to me!",
      "We hunt together, we bleed together!",
    ],
    retreat: [ "Scatter! Regroup at the den!", "The pack lives to hunt again!", "Withdraw — together!" ],
    death: [ "The pack... remembers...", "Avenge... me...", "Hunt... on..." ],
    kill: [ "One falls — the rest follow!", "The pack takes its due!" ],
  },

  "pack-flanker": {
    engagement: [
      "I'll take the side!", "Eyes forward — I'm behind you!", "Split them up!",
      "Watch your back? You can't!", "Two fronts, one kill!", "Around — now!",
    ],
    attack: [
      "Where you least expect!", "Blindside!", "Too slow to turn!",
      "Caught between us!", "From the shadows of your flank!",
    ],
    damaged: [
      "Lucky turn!", "You can't watch us both!", "Saw me, did you?",
      "Won't happen twice!",
    ],
    retreat: [ "Slipping away!", "Lost me already!", "Another angle, then!" ],
    death: [ "Should've... circled... wider...", "Flanked... at last...", "Clever... prey..." ],
    movement: [ "Circling...", "Their back is open!", "Repositioning!" ],
  },

  hunter: {
    engagement: [
      "The hunt begins.", "I've tracked worse than you.", "Quarry sighted.",
      "You left a trail a mile wide.", "Nowhere left to run.", "I always find my mark.",
    ],
    attack: [
      "Steady... loose!", "Marked and taken!", "One shot, one kill.",
      "The trap closes.", "Right where I wanted you.",
    ],
    damaged: [
      "The prey bites back. Good.", "First blood means nothing.",
      "A wounded hunter is a careful one.", "Noted. Adjusting.",
    ],
    retreat: [ "The hunt resumes later.", "Patience. Always patience.", "Tracking from a distance." ],
    death: [ "The hunt... ends...", "Outmatched... at last...", "A worthy... quarry..." ],
    tactical: [ "Flush them toward me!", "Drive them to the kill zone!" ],
  },

  artillery: {
    engagement: [
      "Range confirmed!", "Loading!", "You're in my sights!",
      "Death from afar!", "Hold them — I'll do the rest!", "Firing position set!",
    ],
    attack: [
      "Loose!", "Direct hit!", "Brace!", "Down range!", "Another volley!",
    ],
    damaged: [
      "They've reached me — cover!", "Too close! TOO CLOSE!",
      "Protect the position!", "Falling back to fire again!",
    ],
    retreat: [ "Displacing!", "New firing position!", "Cover my withdrawal!" ],
    death: [ "Out of... range... at last...", "The guns... fall silent...", "Misfire..." ],
    tactical: [ "Keep them off me!", "Spot for me!", "Hold the line — I'll thin them!" ],
  },

  territorial: {
    engagement: [
      "You trespass!", "This ground is MINE!", "Turn back or be buried here!",
      "None claim what is mine!", "You were warned!", "Leave. NOW.",
    ],
    attack: [
      "OUT!", "Begone from my domain!", "This is your last warning!",
      "The land itself rejects you!", "Driven out or dragged out!",
    ],
    damaged: [
      "You dare wound me HERE?", "My ground. My rules. My fury!",
      "Every stone here knows me!", "You'll fertilize this soil!",
    ],
    retreat: [ "Deeper... into my territory...", "You'll regret following!", "This isn't retreat — it's a lure." ],
    death: [ "My land... unguarded...", "Who will... keep it now...", "Buried... in my own soil..." ],
    taunt: [ "Lost, little trespasser?", "Do you even know whose ground you stand on?" ],
  },

  controller: {
    engagement: [
      "Let me reshape this battlefield.", "You move only where I allow.",
      "Order from chaos.", "The board is set.", "Every step you take, I planned.",
      "Struggle — it changes nothing.",
    ],
    attack: [
      "Bind!", "Hold them fast!", "The walls close in.", "Dance to my design.",
      "You are exactly where I want you.",
    ],
    damaged: [
      "A variable I'll correct.", "Unexpected. Not unmanageable.",
      "You've earned my full attention.", "Adjusting the equation.",
    ],
    retreat: [ "A tactical recalculation.", "The pattern continues elsewhere.", "This position no longer serves." ],
    death: [ "The design... unravels...", "I did not... foresee...", "Control... slips..." ],
    spell: [ "Be still!", "The field obeys ME!", "Locked in place!", "Your path is closed!" ],
  },

  warpriest: {
    engagement: [
      "The faithful do not falter!", "My god watches this field!",
      "Stand — you are not alone!", "Blessed be the steadfast!",
      "Faith is my armor!", "By divine will!",
    ],
    attack: [
      "Smite the unworthy!", "Divine judgement!", "Burn in holy light!",
      "The hammer of faith falls!", "Repent — too late!",
    ],
    damaged: [
      "Pain is a prayer!", "My faith does not bleed!", "The divine sustains me!",
      "You cannot wound the spirit!",
    ],
    retreat: [ "The faithful regroup!", "This is a test — we endure!", "Withdraw — heal — return!" ],
    death: [ "I come... to your light...", "The faith... endures...", "Receive... your servant..." ],
    spell: [ "Be healed!", "Rise! Fight on!", "Blessings upon you!", "The light mends!" ],
  },

  summoner: {
    engagement: [
      "You face more than me!", "Come forth, my servants!", "I am never alone!",
      "Numbers are a spell away!", "Let me introduce my friends.", "Rise and serve!",
    ],
    attack: [
      "Take them!", "Seize! Rend! Destroy!", "My creatures hunger!",
      "Attack, my pets!", "Overwhelm them!",
    ],
    damaged: [
      "Defend your master!", "To me! TO ME!", "You'll pay for that — they'll see to it!",
      "More! I'll summon MORE!",
    ],
    retreat: [ "Cover my escape!", "Hold them, my servants!", "They were always expendable." ],
    death: [ "My creatures... fade with me...", "Unbound... at last...", "Who will... call them now..." ],
    spell: [ "COME FORTH!", "Through the veil — appear!", "Another joins the fray!" ],
  },

  blaster: {
    engagement: [
      "Let's make this LOUD.", "I do love fireworks.", "Stand close together — please.",
      "You bring swords. I bring annihilation.", "Shall we skip to the explosions?",
      "Power unbound!",
    ],
    attack: [
      "BURN!", "Catch!", "Obliterate!", "Light them up!", "Nothing left but ash!",
    ],
    damaged: [
      "You've made me ANGRY.", "Careful — I'm volatile.", "That just raises the yield!",
      "Pain focuses the mind wonderfully.",
    ],
    retreat: [ "Withdrawing — to a better blast radius!", "Range is my friend!", "I'll burn the path behind me!" ],
    death: [ "Going out... with a bang...", "The fire... dims...", "One last... spark..." ],
    spell: [ "Maximum power!", "Annihilation incoming!", "Duck. Or don't.", "This one's BIG!" ],
  },

  panicked: {
    engagement: [
      "Run! Run!", "Get out of here!", "They're coming!", "We're all going to die!",
      "Abandon positions!", "Every man for himself!",
    ],
    attack: [ "Get away from me!", "Leave me alone!", "Back! Back!", "Stay away!" ],
    damaged: [
      "I'M HIT! I'M HIT!", "RUN!", "HELP!", "NO! NO!",
      "TOO MUCH! RETREAT!", "FALL BACK!",
    ],
    kill: [ "They're dead — RUN!", "Move! Now!" ],
    panic: [
      "RUN!", "WE'RE DOOMED!", "SCATTER!", "EVERY MAN OUT!",
      "RETREAT! RETREAT!", "WE CAN'T WIN THIS!",
    ],
    retreat: [
      "I'm out of here!", "Don't follow me!", "Gone! I'm gone!",
      "Leave me alone!", "Just let me go!", "Run! Now!",
    ],
    tactical: [],
    taunt: [],
    death: [
      "...I was so close...", "...ran out of... time...", "...should have run sooner...",
    ],
    movement: [ "RUN!", "FASTER!", "MOVE! MOVE! MOVE!", "DON'T STOP!" ],
  },

};

// ─── Effort noise library ─────────────────────────────────────────────────────
// Full 59-sound library from design doc.

export const EFFORT_NOISES = {

  generic: [
    "Hah!", "Khh!", "Ngh!", "Tch!", "Gah!", "Hup!", "Ungh!", "Heh!",
    "Tuh!", "Agh!", "Hahh!", "Skh!", "Tchk!", "Rrgh!", "Hrrm!", "Nghh!",
    "Gk!", "Hnngh!", "Rakh!", "Tchrah!", "Hrrgh!", "Khuh!", "Nrah!", "Hrk!",
    "Tss!", "Ungh!", "Khh-ngh!", "Hrah!", "Krrt!", "Hnnk!", "Ungh-rrh!",
  ],

  aggressive: [
    "Rrah!", "Grah!", "Khra!", "Nnrah!", "Hrngh!", "Grahh!", "Rrk!", "Hrrrah!",
    "Hrrnn!", "Rrahk!", "Skhrah!", "HRAH!", "GRAAAH!", "Rrakh!", "Ghhah!",
    "Graakh!", "Skrrh!", "Nngh-rah!", "Grrakh!", "Ungh-hah!", "Tchk-rah!",
    "Khrahh!", "Rrak!", "Khhrah!", "Gk-rah!",
  ],

  precise: [
    "Tch.", "Hm.", "Kh!", "Tssk!", "Tchk!", "Skh!", "Tss!",
  ],

  bestial: [
    "*growl*", "*snarl*", "*hiss*", "*snap*", "*bark*", "*howl*",
    "Khhrah!", "Rrk!", "Grrk!", "Tssah!", "Skhrah!", "Graakh!", "Skrrh!",
  ],

  undead: [
    "Ghrrr...", "Nngh...", "Graaaah!", "Urk...", "Hrk!", "Ghhh!",
    "Urrrhh...", "Ghhaaa...", "Nnngrrr...",
  ],
};

// ─── Archetype → effort noise category mapping ────────────────────────────────

export const ARCHETYPE_EFFORT_MAP = {
  berserker:            "aggressive",
  brute:                "aggressive",
  zealot:               "aggressive",
  fearless:             "aggressive",
  guardian:             "aggressive",
  predator:             "bestial",
  "pack-hunter":        "bestial",
  "beast-instinctive":  "bestial",
  "pack-flanker":       "bestial",
  "undead-mindless":    "undead",
  "undead-disciplined": "undead",
  "mob-walker":         "undead",
  assassin:             "precise",
  sniper:               "precise",
  tactician:            "precise",
  disciplined:          "precise",
  ambusher:             "precise",
  coward:               "generic",
  skirmisher:           "generic",
  opportunist:          "generic",
  sadistic:             "generic",
  cautious:             "generic",
};

// ─── Language system ──────────────────────────────────────────────────────────

export const LANGUAGE_DESCRIPTORS = {
  orc:         "grunts something in Orcish",
  goblin:      "chatters in Goblin",
  giant:       "bellows in Giant",
  gnoll:       "snarls in Gnoll",
  draconic:    "hisses something in Draconic",
  infernal:    "growls in Infernal",
  abyssal:     "rasps in Abyssal",
  deep:        "clicks in Deep Speech",
  sylvan:      "murmurs in Sylvan",
  elvish:      "speaks sharply in Elvish",
  dwarvish:    "barks in Dwarvish",
  primordial:  "rumbles in Primordial",
  undercommon: "sneers in Undercommon",
  celestial:   "intones in Celestial",
  auran:       "whistles in Auran",
  aquan:       "gurgles in Aquan",
  ignan:       "crackles in Ignan",
  terran:      "grinds in Terran",
};

export const UNIVERSAL_LANGUAGES = new Set([
  "common", "common sign language", "all",
]);
