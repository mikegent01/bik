

export const HISTORICAL_TIMELINE = [
    { type: 'era_header', title: 'Ancient Era: The First Wars' },
    { date: { year: 955, monthIndex: 6, day: 1, hour: 14, minute: 0 }, title: "The Princess is Dead", description: "Princess Peach is assassinated, plunging the Mushroom Kingdom into a century-long civil war.", icon: "icon_focus.png", category: "Political" },
    
    { type: 'era_header', title: 'The Middle Years: Stagnation' },
    { date: { year: 1035, monthIndex: 6, day: 1, hour: 14, minute: 0 }, title: "Rise of the Iron Legion", description: "In the Midlands, the Iron Legion consolidates power, turning a mercenary company into a state superpower.", icon: "faction_iron_legion.png", category: "Political" },

    { type: 'era_header', title: 'Current Era: 1040 BF (Day 1-10)' },
    { date: { year: 1040, monthIndex: 6, day: 1, hour: 14, minute: 0 }, title: "Dragon Slain", description: "The party defeats the dragon Ignis in the northern mountains, an act praised by militarists but condemned by magical researchers.", icon: "icon_focus.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 2, hour: 10, minute: 30 }, title: "Underworld Politics", description: "Archie Miser is acquitted of killing a mage by an Onyx Hand tribunal, greatly angering the Mages' Guild.", icon: "icon_reputation.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 3, hour: 22, minute: 15 }, title: "Smuggling Bust", description: "The party dismantles a key Iron Fists smuggling ring, placing a bounty on their heads.", icon: "faction_iron_fists.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 4, hour: 0, minute: 0 }, title: "Airship Hijacked", description: "X.O. betrays the party, seizing control of the airship 'Vigilance'. Warlord Bowser is taken captive.", icon: "newspaper_airship.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 5, hour: 18, minute: 45 }, title: "The Great Betrayal", description: "In a final, chaotic confrontation, the party, with the critical assistance of Dan the Toad, manages to neutralize X.O. and regain control of the Vigilance. The airship is secured, but the full extent of X.O.'s plans and the whereabouts of her allies remain unknown.", icon: "newspaper_airship.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 6, hour: 12, minute: 0 }, title: "The Syrup Schism & Core Crisis", description: "The party frees the pirate Captain Syrup, who immediately turns hostile. A chaotic confrontation ensues, revealing a traitorous toad and culminating in hjumpik disabling the airship's power core with an axe, sending the 'Vigilance' into a nose-dive.", icon: "faction_crimson_fleet.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 7, hour: 9, minute: 0 }, title: "Aftermath on the Vigilance", description: "The ship's power is restored using X.O.'s staff. In the chaos, Big T reappears only to be assassinated, Iron Legion agents attack and are detained, and Waluigi's agent 'Wally' is revealed before making a dramatic exit with Bowser, leaving the Liberated Toads critically injured.", icon: "faction_toad_gang.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 8, hour: 16, minute: 20 }, title: "Standoff at Raventree", description: "A tense negotiation with the Iron Legion leads to a bomb plot being uncovered. Captain Syrup escapes using an illusion, while Lario and a revived Big T are caught trying to sabotage the power core. hjumpik intervenes, forcing them both to retreat.", icon: "faction_iron_legion.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 9, hour: 20, minute: 0 }, title: "The Tea Party Incident", description: "An attempt by Archie to meet with the 'Tea Leaf Syndicate' devolved into a massive brawl after a panic button is pressed, summoning both Toad Gang and Iron Legion forces. In the chaos, Archie unleashes a fireball, killing numerous combatants, including most of the Syndicate's muscle.", icon: "icon_war.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 10, hour: 21, minute: 30 }, title: "Secrets at the Gala", description: "Peach Loyalist scouts Embercap and Mistveil infiltrate Fawful's victory gala. During the event, Chief Thornpaw of the Rakasha finds Mistveil and reveals a stunning secret: he was in a relationship with Princess Peach and knows of a secret hatch in her room. This provides a massive new lead in the investigation of her death.", icon: "faction_fawful.png", category: "Recent Event" },
    
    { type: 'era_header', title: 'Current Era: 1040 BF (Day 11-21)' },
    { date: { year: 1040, monthIndex: 6, day: 11, hour: 8, minute: 0 }, title: "Chaos on the Vigilance", description: "A series of chaotic events unfolds aboard the Vigilance. Fawful reveals an alliance with dragons. Embercap's infiltration of Fawful's gala goes wrong, resulting in the death of Jade Grit and his own banishment. The main party battles the Tea Leaf Syndicate and Iron Legion forces. Waluigi saves hjumpik, Wario is found in a barrel, and the ship's use in a massive toad trafficking operation is revealed. The day ends with the Iron Legion demanding the party hand over key prisoners, and a new, personal vendetta against Archie is revealed in the form of the toad, Bryan.", icon: "newspaper_airship.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 12, hour: 11, minute: 0 }, title: "An Explosive Proposition", description: "The newcomer FNG Remi is discovered in a crate. Wario gives her a box, which Bowser reveals is a bomb. The box explodes, injuring Remi, after which Wario offers her a place in his crew.", icon: "wario.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 12, hour: 11, minute: 15 }, title: "Friendly Fire Incident", description: "During a brawl, Waluigi casts a powerful 'Cone of Cold' spell, which accidentally freezes the toad Eager solid and injures FNG Remi. Eager is now presumed deceased by the crew.", icon: "icon_magic.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 12, hour: 13, minute: 45 }, title: "Syndicate Showdown", description: "Green T of the Tea Leaf Syndicate reveals a giant form and crushes an Iron Legion soldier. His enforcer, Earl Grey, is poisoned by Roger's dagger and explodes, scattering items everywhere. The Syndicate's power base on the ship is shattered.", icon: "icon_focus.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 12, hour: 15, minute: 0 }, title: "The Barrel Secret Revealed", description: "The Iron Legion reveals to hjumpik that the 150+ trafficked toads are not in a single cargo hold, but hidden individually in barrels throughout the ship, accessible via a secret compartment opened by a Mini-Mushroom.", icon: "faction_liberated_toads.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 12, hour: 16, minute: 30 }, title: "A Legion's Ruse", description: "An internal conflict within the Iron Legion boarding party is revealed to be a feint. The distraction allowed other Legion agents to sneak past the party and pursue their own hidden objectives aboard the Vigilance.", icon: "faction_iron_legion.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 13, hour: 10, minute: 0 }, title: "The Democratic Summit Disaster", description: "Lanky Kong's bizarre behavior at the Democratic Summit causes a major diplomatic incident, economic instability for the Mushroom Kingdom, and a deep fracture within the DK Crew.", icon: "icon_focus.png", category: "Political" },
    { date: { year: 1040, monthIndex: 6, day: 13, hour: 14, minute: 0 }, title: "Tense Negotiations", description: "Following the summit disaster, Donkey Kong schedules a conference call with King K. Rool, suggesting a potential shift in the long-standing enmity between the two factions.", icon: "icon_pirate.png", category: "Political" },
    { date: { year: 1040, monthIndex: 6, day: 14, hour: 19, minute: 0 }, title: "The Restaurant Raid & Sewer Stand-off", description: "A day of cascading chaos. Eager was tracked to a restaurant, but an extraction attempt failed when the Iron Legion raided the building, spurred by a murder plot involving a 'ketchup man' who hid bodies in an octopus. With Dan critically injured, the party descended into the lava-filled sewers seeking a cure, only to be led into a trap by a Legion spy and forced to fight a massive Behir.", icon: "icon_focus.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 15, hour: 5, minute: 0 }, title: "The Fall of Bramblehaven", description: "In a brutal, day-long assault, Captain Toadette's Peach Loyalist forces conquered the Fawful bastion of Bramblehaven. The Loyalists showed no mercy to surrendering troops, solidifying their reputation as ruthless fanatics. Though casualties were heavy on both sides, the Loyalists successfully retrieved valuable intel.", icon: "icon_war.png", category: "Military" },
    { date: { year: 1040, monthIndex: 6, day: 15, hour: 11, minute: 0 }, title: "The Blue Dragon's Bargain", description: "The party's clash with the 'blue dragon' (a Behir) resulted in a bizarre negotiation. A two-eyed clone of Archie, created via forbidden necromancy by the Iron Legion, was captured by the dragon who demanded a golden egg. hjumpik bargained for unneeded mushrooms, and the party escaped, learning of the clone's desire for Archie's third eye.", icon: "icon_magic.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 15, hour: 15, minute: 0 }, title: "The Haunting of Raventree Manor", description: "Following Bowser and Waluigi, the party began exploring the decaying Raventree Manor. Inside the parlor, they encountered the polite but unsettling ghost of a noble. The party split up: Markop, after a bizarre fight with his own enchanted clothes, got lost in the dilapidated east wing, discovering a note warning not to clean the mirrors. Meanwhile, Archie became trapped in the unstable western hall as the manor itself seemed to watch their every move.", icon: "icon_focus.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 16, hour: 2, minute: 0 }, title: "Manor of Madness", description: "The party's exploration of Raventree Manor descended into further chaos. After being separated, they battled swarms of haunted, flaming books, with Waluigi's 'help' only making the fire worse. Archie discovered a cryptic message on a balcony, and the party eventually regrouped with Bowser and Eager, uncovering some of Markop's personal effects, including a photograph of his lost father. Exhausted and wary, they have barricaded themselves in separate bedrooms for the night.", icon: "icon_focus.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 16, hour: 4, minute: 30 }, title: "The Oracle's Gambit", description: "The night brought no rest, as FNG fought off corrosive rust monsters with Waluigi's aid. A subsequent balcony collapse nearly killed her, but she was rescued by the party. Their search led them to the mansion's host, the mysterious 'Oracle,' who extended a cryptic invitation to his gardens. Suspicions mounted as hjumpik formed a shaky alliance with Waluigi to investigate the Oracle, while Archie rescued Eager from a ruined solarium. The chaotic night culminated in Waluigi and Green T making a dramatic escape from the mansion grounds on the back of a summoned wyvern.", icon: "icon_focus.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 16, hour: 14, minute: 0 }, title: "The Scavenging Doctrine Vote", description: "A vote was held to determine the Liberated Toads' resource gathering strategy. Archie's proposal for small, high-risk teams was overwhelmingly defeated by Dan's counter-proposal for larger, more cautious expeditions. The vote marks a significant return to influence for Dan and a strategic shift for the faction towards safety and unity.", icon: "icon_treaty.png", category: "Political"}, 
    { date: { year: 1040, monthIndex: 6, day: 16, hour: 19, minute: 30 }, title: "The Dinner That Broke Time", description: "The liberated toads entered the nearby Shadeward Mansion seeking Archie, but instead found the Oracle. The bizarre, looping dinner was interrupted by a fireball-wielding clone of Archie, a robotic double, and ultimately a full-scale raid by the Iron Legion. Amid the chaos, a toad was captured by the robot, a traitor was revealed, and Wario appeared, claiming to be working with the Legion to investigate the mansion's temporal instability. The toads fought, negotiated, and ultimately escaped, but not before the Oracle delivered a cryptic final message.", icon: "faction_iron_legion.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 16, hour: 21, minute: 0 }, title: "Betrayal on the Airship", description: "Returning to the Vigilance, the toads found it overrun by Iron Legion 'Royal Service' members. An intense confrontation erupted, and the rescued toad was taken to the mercenary Creek for emergency surgery. During the operation, an Iron Legion insignia was discovered on the wounded toad, exposing him as a plant and revealing the entire mansion raid was a setup.", icon: "icon_focus.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 17, hour: 10, minute: 0 }, title: "The Greenhouse Inferno", description: "A chaotic battle in the manor's greenhouse against rust monsters results in Archie unleashing a massive fireball to save the party. The structure is destroyed, and Green T gives Markop a mysterious key.", icon: "icon_magic.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 17, hour: 12, minute: 0 }, title: "The Capture of Bramblehaven", description: "Captain Toadette's Peach Loyalist forces seize the Fawful-held town of Bramblehaven in a brutal assault, executing prisoners and cementing their ruthless reputation.", icon: "icon_war.png", category: "Military" },
    { date: { year: 1040, monthIndex: 6, day: 18, hour: 9, minute: 0 }, title: "The Maze of Time", description: "Markop, Green T, and Bowser navigate a living hedge maze to find a hidden, abandoned version of the manor and evidence of a time war involving the Oracle.", icon: "icon_focus.png", category: "Recent Event" },    
    { date: { year: 1040, monthIndex: 6, day: 18, hour: 11, minute: 0 }, title: "The Kong Bug", description: "Donkey Kong discovers a Kremling listening device, leading to a total breakdown of relations with King K. Rool and a threat of assassination against Funky Kong.", icon: "faction_dk_crew.png", category: "Political" },     
    { date: { year: 1040, monthIndex: 6, day: 18, hour: 13, minute: 0 }, title: "The Supernatural Sovereignty Act", description: "The Regal Empire passes a law declaring organized vampires and werewolves illegal, effectively declaring war on the Onyx Hand and Moonfang Pack.", icon: "icon_treaty.png", category: "Political" },    
    { date: { year: 1040, monthIndex: 6, day: 18, hour: 16, minute: 0 }, title: "Kamek's Return", description: "Magical activity in the Valley of Bowser signals the return of Kamek, who consolidates control over the Koopa Troop remnants.", icon: "icon_magic.png", category: "Political" },    
    { date: { year: 1040, monthIndex: 6, day: 18, hour: 18, minute: 30 }, title: "Standoff at Raventree Manor", description: "Speaker L's Pond Patrol besieges Archie and Hjumpik in the manor after a failed healing attempt on Eager. Tensions reach a breaking point.", icon: "icon_war.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 19, hour: 6, minute: 30 }, title: "The Siege of Raventree", description: "The Pond Patrol creates a containment perimeter. The manor responds by manifesting powerful wraiths. Archie surrenders to Speaker L to buy time, but a glass monster emerges from a mirror.", icon: "icon_war.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 19, hour: 6, minute: 55 }, title: "Green T Lost", description: "During the chaos at the manor, Green T is violently pulled into a mirror dimension by a supernatural entity.", icon: "icon_magic.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 20, hour: 7, minute: 45 }, title: "Archie's Confession", description: "Archie Miser publicly confesses to the Greenhouse Inferno on Wahbook to justify his actions, drawing immediate Ire from the Mages' Guild.", icon: "icon_social.png", category: "Social" },
    { date: { year: 1040, monthIndex: 6, day: 20, hour: 8, minute: 15 }, title: "The Dance Hall Discord", description: "The party confronts Iron Legion spies and rogue Magi in the manor's dance hall. A mocking anthem is sung, and an Arcane Wraith attacks, scattering the combatants.", icon: "icon_war.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 20, hour: 8, minute: 45 }, title: "The Mirror Door Breach", description: "Led by the Oracle to a hidden upper house, the party barely escapes a mirror monster by slamming the door. The way back is sealed.", icon: "icon_magic.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 20, hour: 14, minute: 0 }, title: "The Third Eye Escape", description: "Archie escapes custody with help from an Iron Legion spy, traversing alien dimensions before returning. The event shatters the Cohort's containment.", icon: "faction_iron_legion.png", category: "Recent Event" },     
    { date: { year: 1040, monthIndex: 6, day: 20, hour: 16, minute: 30 }, title: "The Iron Sky Breach", description: "The Iron Legion boards and captures the Vigilance. Ryan is forced to jump from the ship to escape capture.", icon: "faction_iron_legion.png", category: "Military" },
    { date: { year: 1040, monthIndex: 6, day: 20, hour: 17, minute: 0 }, title: "Bones Undercover", description: "Bones infiltrates an Imperial Processing Facility disguised as a Legionnaire, uncovering a horrifying industrial complex.", icon: "faction_liberated_toads.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 20, hour: 17, minute: 30 }, title: "Ryan & The Rakasha", description: "Ryan survives his fall and is taken in by a Rakasha spirit-walker, witnessing their sacred rites.", icon: "faction_rakasha.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 20, hour: 18, minute: 0 }, title: "Assassination Foiled", description: "Donkey Kong intercepts the assassin Galypso at Funky's Surf Shack, preventing his brother's murder. The Kremling retreats, but the act of aggression ends the cold war.", icon: "faction_dk_crew.png", category: "Military" },
    { date: { year: 1040, monthIndex: 6, day: 20, hour: 23, minute: 15 }, title: "The Spider Grove Ambush", description: "Markop and Remi rescue Eager from a web-choked grove in Raventree Manor, defeating a massive Arachnid Matriarch with the chaotic assistance of Waluigi and a stolen Mages' Guild construct named Mossy.", icon: "faction_liberated_toads.png", category: "Combat"},
    { date: { year: 1040, monthIndex: 6, day: 20, hour: 12, minute: 0 }, title: "Professional Ambitions", description: "Amidst the chaos of the adventure, FNG Remi sends a formal application to the prestigious Deephold Smithing Guild.", icon: "icon_crafting.png", category: "Personal" },
    { date: { year: 1040, monthIndex: 6, day: 20, hour: 23, minute: 30 }, title: "Grove Chaos & The Oracle's Light", description: "The battle in the grove fractures the party. Remi and her dog hold off the giant spider before retreating, though her mechanical companion is damaged. Smoking J is bitten while the toad squad becomes lost in a dark, flooded fountain area. Amidst the fighting, the Oracle appears, casting a massive illumination spell to aid the party while Waluigi unleashes ice magic to clear a path.", icon: "faction_regal_empire.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 20, hour: 23, minute: 45 }, title: "Titan of the Grove", description: "Markop accepts a cryptic blessing from the Oracle, growing to a colossal size to match the Giant Spider. Eager, stuck in a massive form, indiscriminately uses pepper spray on the smaller arachnids. The skirmish is interrupted when the airship 'Vigilance' flies overhead, blasting Legion propaganda and ignoring the fight as it heads toward the manor.", icon: "icon_magic.png", category: "Recent Event" },    
    { date: { year: 1040, monthIndex: 6, day: 21, hour: 2, minute: 0 }, title: "The Shard Stalker & The Spy", description: "The party breached the Solarium to destroy the Mirror Monster. In the chaos, hjumpik was pulled into the Mirror Dimension where he fought a doppleganger and received aid from an Iron Legion Spy, who revealed the impending Supernatural Sovereignty Act. Archie punched a mirror in a blood rage, and the group retreated to a Ruined Hall to plan their next move against the spies.", icon: "icon_magic.png", category: "Recent Event" }, 
    {date: { year: 1040, monthIndex: 6, day: 21, hour: 9, minute: 0 },title: "Iron Mandate Enacted",description: "The Midlands Diet passes the Iron Mandate 28-8-3, granting the Iron Legion emergency powers to purge supernatural threats. Speaker Rivers resigns in protest as Legion patrols mobilize immediately.",icon: "faction_regal_empire.png",category: "Political"},
    { date: { year: 1040, monthIndex: 6, day: 21, hour: 10, minute: 0 }, title: "The Dragon Conspiracy Revealed", description: "At Dragon Mountain, Robinson uncovers the truth that the war between Dragons and the Regal Empire is a fabrication maintained by sonic control devices. He and the dragon 'Ignis-Major' are captured by the Iron Legion immediately after the discovery.", icon: "faction_regal_empire.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 21, hour: 14, minute: 30 }, title: "Massacre at Aegis Command", description: "Bones' infiltration of the Legion fortress ends in disaster when he is stabbed by General Ironhand. The mission reveals a Green Decoy posing as Speaker L, prompting Ironhand to issue 'Order 120': the immediate execution of all Toad prisoners.", icon: "faction_iron_legion.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 20, hour: 23, minute: 40 }, title: "Banishment of the Wraith", description: "The party battles an Arcane Wraith in Raventree Manor while fending off interference from the Mages' Guild and Iron Legion. Bowser physically assaults the ghost, Dan fights one-armed, and Archie uses ice magic to aid the Oracle in banishing the entity.", icon: "icon_magic.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 20, hour: 24, minute: 5 }, title: "The Arachnid Matriarch Falls", description: "The final battle against the giant spider reaches its climax. Remi is swarmed by minispiders and falls unconscious. Markop grapples with the Matriarch in a titan-scale deadlock while Waluigi weakens it with arcane rays. Salem lands a crossbow bolt through the creature's eye. The Oracle fires an arrow into its abdomen from below as Mossy bites into its legs. When the spider crashes into the Oracle's hastily-drawn banishment circle, it is consumed by light and vanishes.", icon: "icon_magic.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 21, hour: 0, minute: 15 }, title: "Spoils of the Silent Grove", description: "The party divides the Matriarch's hoard: Markop claims a War Mage's Staff for Archie, Remi recovers a set of Web-Woven Scale armor twisted by the grove's ambient magic, and Rodger desperately claims all three healing potions. Eager is stabilized and reunited with his whip, though still trapped in his inflated form.", icon: "icon_crafting.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 21, hour: 0, minute: 45 }, title: "The Many Oracles Revealed", description: "Returning to Raventree Manor, the party witnesses a startling revelation: there are multiple Oracles. One reveals a 'Star Shard,' a crystalline gift from the Toad God, and declares himself a 'Bearer.' The party reunites with Archie and Hjumpik, who have been in discussion with another Oracle. Preparations for a mysterious ritual begin immediately.", icon: "icon_magic.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 21, hour: 1, minute: 30 }, title: "The Shattered Ritual", description: "The Oracle attempts a synchronization rite to align the physical world, mirror-space, and the 'Deep Layers'. Due to internal conflict, missing participants, and the unstable nature of Archie Miser's magic, the ritual catastrophically fails, shattering local reality into three distinct planar shards.", icon: "icon_magic.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 21, hour: 1, minute: 45 }, title: "The Planar Fracture", description: "The party is violently separated across dimensions. Archie and Bowser are cast into the Shadowfell version of the Manor. Waluigi and Toad Lee fall into a Feywild overgrown attic. Markop, Remi, and the Oracle vanish into the Deep Mirror, while the physical room is seized by the Iron Legion.", icon: "icon_portal.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 21, hour: 3, minute: 0 }, title: "The Sleeper Agent", description: "Captured by the Iron Legion in the physical antechamber, Toadburt is subjected to magical interrogation by Agent Malissia. He is fitted with an Entropy Ring and deployed as a coerced agent into the Feywild with orders to capture the Oracle within three days.", icon: "faction_iron_legion.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 21, hour: 3, minute: 30 }, title: "Dinner with the Damned", description: "Trapped in the monochrome 'Shadow Estate,' Archie and Bowser encounter the Onyx Hand. Stripped of his fire magic by the plane's physics, Archie bluffs their way into a vampire dinner party hosted by 'Orangus Cornelius,' discovering that Green T is being held as a guest.", icon: "faction_onyx_hand.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 21, hour: 4, minute: 15 }, title: "The Overgrown Heist", description: "In the Feywild reflection of the manor, Waluigi and Toad Lee navigate a giant, insect-infested attic. Avoiding a massive Guardian Butterfly, they begin looting the hoard of a missing Archfey while attempting to link up with the rest of the squad.", icon: "icon_nature.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 22, hour: 8, minute: 0 }, title: "The Orange Alignment", description: "Hjumpik is shunted through the Guild's portal into the Dreaming Grove.  He stabilises the arcane filament at 96 %, rings the cow-bell twice, and steps into orange light.", icon: "icon_portal.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 22, hour: 8, minute: 30 }, title: "Dragon of the Dreaming Tree", description: "Atop an ancient tree he awakens a yellow-blue dragon bound by a princely curse.  Guards name the culprit: an orange figure in a purple suit—'the owner of the manor'.", icon: "icon_dragon.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 22, hour: 9, minute: 15 }, title: "Wario’s Infinite Catalogue", description: "In the fairy village Wario unfurls a 2 361-item wish-list, pricing a star rod at 900 trillion.  Hjumpik pays in 'experience' and leaves with absurd artefacts.", icon: "wario.png", category: "Social" },
    { date: { year: 1040, monthIndex: 6, day: 22, hour: 10, minute: 0 }, title: "Duel under the Dreaming Tree", description: "Hjumpik bests guard-captain Thistle in a single-combat duel; the grove concedes passage and reports the defeat to its unseen 'boss'.", icon: "icon_combat.png", category: "Combat" },
    { date: { year: 1040, monthIndex: 6, day: 23, hour: 2, minute: 15 }, title: "The Fractured Atrium", description: "The Oracle guides Markop and Remi to the 'Fractured Atrium,' a grand receiving area filled with statues of Corvinarus ancestors. Upon arrival, the teleportation sigils fade to grey, trapping them in a dimension where physics are unstable and objects vanish into the void.", icon: "icon_portal.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 23, hour: 3, minute: 0 }, title: "The Clockwork & The Tree", description: "Navigating shattered walkways, Markop and Remi discover a mesmerizing Clockwork Room where time is visibly decaying, and an Oak Tree growing from a staircase, pulsating with dangerous crystalline energy.", icon: "icon_magic.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 22, hour: 0, minute: 30 }, title: "The Midnight Gate", description: "Lost in the hedge maze, Hjumpik discovered an ancient shrine to a scythe-wielding entity. Reunited with Rakasha, they found the 'Midnight Gate' and communicated with Agent H via an entropy ring, confirming an 'Orange Target' was nearby.", icon: "icon_magic.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 22, hour: 3, minute: 30 }, title: "The Hag's Hut Heist", description: "Hjumpik and Rakasha infiltrated a hag's hut on the manor grounds, discovering Waluigi and Toad Lee trapped in cages intended for a stew. After a tense negotiation involving stolen potions and a bear trap, the group staged a daring jailbreak, leaping from a second-story window to escape.", icon: "icon_focus.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 22, hour: 4, minute: 0 }, title: "Sanctuary in the Greenhouse", description: "Fleeing the Hag, Hjumpik's ragtag group (Rakasha, Waluigi, Toad Lee) found refuge in a magical greenhouse guarded by armed sprites. They barricaded themselves inside as the sun began to rise on a fractured reality.", icon: "icon_nature.png", category: "Recent Event" },   
    { date: { year: 1040, monthIndex: 6, day: 23, hour: 3, minute: 20 }, title: "Shadow Estate Dinner", description: "In the Shadowfell, Archie and Bowser attend a formal dinner hosted by Orangus Cornelius and the Vampire Lords. Archie adopts the persona of 'Darman Knightly' to survive the social intrigue, while Green T signals a secret plan from the kids' table.", icon: "faction_onyx_hand.png", category: "Social" },
    { date: { year: 1040, monthIndex: 6, day: 23, hour: 4, minute: 10 }, title: "The Oracle's Laboratory", description: "Markop and Remi stumble upon a hidden laboratory in the Atrium containing tanks of malformed humanoids and a central 'Vessel' frozen in stasis. They realize the Oracle is not a mystic guide but a researcher conducting forbidden necromancy.", icon: "icon_focus.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 23, hour: 5, minute: 20 }, title: "Green T's Rebellion", description: "During a bathroom break, Green T reveals to Archie that he has stolen a key from Orangus and possesses a firearm. He outlines a desperate plan to kill the Vampire Lords, shatter the crystals, and force the timelines to merge by unleashing the Beast.", icon: "faction_liberated_toads.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 23, hour: 7, minute: 38 }, title: "Convergence Imminent", description: "As the dinner party reaches its climax, Remi and Markop breach the Atrium's ballroom, witnessing flickering visions of Archie in the Shadowfell. Both teams prepare for a synchronized assault across dimensions to stop—or start—the end of the world.", icon: "icon_war.png", category: "Recent Event" },
  {
    date: { year: 1040, monthIndex: 6, day: 22, hour: 4, minute: 10 },
    title: "After-Transit Complaints",
    description: "Waluigi collapses into dramatic demands after the Midnight Gate relocation; the camp regroups in a cultivated garden.",
    icon: "icon_complaint.png",
    category: "Recent Event"
  },
  {
    date: { year: 1040, monthIndex: 6, day: 22, hour: 4, minute: 38 },
    title: "Blood in the Staff Room",
    description: "Salam finds blood under harsh lighting—an environmental hazard for vampires and a signal that the manor is active, not abandoned.",
    icon: "icon_blood.png",
    category: "Recent Event"
  },
  {
    date: { year: 1040, monthIndex: 6, day: 22, hour: 4, minute: 55 },
    title: "Foyer Entry & Guestbook",
    description: "Markop enters the immaculate marble foyer and confirms names in the guestbook: Archie Miser, Toadburt.",
    icon: "icon_guestbook.png",
    category: "Recent Event"
  },
  {
    date: { year: 1040, monthIndex: 6, day: 22, hour: 5, minute: 6 },
    title: "Bat Passage Discovered",
    description: "Eager finds a hidden 'bat transport' wall route; guards mobilize into a pincer search after spotting Usk inside.",
    icon: "icon_passage.png",
    category: "Recent Event"
  },
  {
    date: { year: 1040, monthIndex: 6, day: 22, hour: 5, minute: 13 },
    title: "Headless Dancers Clash",
    description: "Remi is forced into combat with headless dancers; a ghost possession dispute ignites further suspicion in the corridors.",
    icon: "icon_mask.png",
    category: "Recent Event"
  },
  {
    date: { year: 1040, monthIndex: 6, day: 22, hour: 8, minute: 8 },
    title: "Twenty-Coin Peace",
    description: "Markop bribes the guards to avoid violence—only to accept a condition: Usk is arrested for possession of notes.",
    icon: "icon_coins.png",
    category: "Recent Event"
  },
  {
    date: { year: 1040, monthIndex: 6, day: 22, hour: 9, minute: 48 },
    title: "Perrius’ Theater Plan",
    description: "Perrius Annmatar pressures the group to stage a fake killing of the manor host, framing it as necessary 'survival theater.'",
    icon: "icon_dagger.png",
    category: "Recent Event"
  },
  {
    date: { year: 1040, monthIndex: 6, day: 22, hour: 10, minute: 0 },
    title: "Seated for Dinner",
    description: "Guards enforce attendance: one seat left, Remi sits, Bowser demands food; the Oracle begins speaking of convergence.",
    icon: "icon_table.png",
    category: "Recent Event"
  },
  {
    date: { year: 1040, monthIndex: 6, day: 22, hour: 13, minute: 24 },
    title: "The Feast Arrives",
    description: "Citrus is served to Markop and Remi; Archie taste-tests roast beef and finds blood mixed in, confirming ritual-grade dining.",
    icon: "icon_food.png",
    category: "Recent Event"
  },
  {
    date: { year: 1040, monthIndex: 6, day: 22, hour: 13, minute: 33 },
    title: "Exit Attempt & Door Lockdown",
    description: "Archie spots Green T and Eager attempting to slip out; guards swarm and close doors, forcing a public loyalty confrontation.",
    icon: "icon_lock.png",
    category: "Recent Event"
  },
  {
    date: { year: 1040, monthIndex: 6, day: 22, hour: 14, minute: 50 },
    title: "Orangus Names the Game",
    description: "The host reveals himself as Orangus Cornelious and explains: succession is in play, factions are present, and knives follow old monsters’ dinners.",
    icon: "icon_crown.png",
    category: "Recent Event"
  },
  {
    date: { year: 1040, monthIndex: 6, day: 22, hour: 14, minute: 53 },
    title: "Usk Brought In",
    description: "On Orangus’ command, guards bring Usk into the dining hall—turning the 'notes' arrest into a public leverage move.",
    icon: "icon_prisoner.png",
    category: "Recent Event"
  },
  { date: { year: 1040, monthIndex: 6, day: 22, hour: 5, minute: 0 }, title: "The Painful Healing", description: "In the Feywild Greenhouse, Sprites healed Waluigi's shattered leg using rapid-growth magic. The process was agonizing but effective. The group learned of 'Orangeus Cornelius' and a grand party happening in the manor.", icon: "icon_magic.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 22, hour: 6, minute: 0 }, title: "Arrested by Fey Guards", description: "Hjumpik, Rakasha, and Waluigi were captured by the Manor Guard while attempting to sneak out. Claiming to be sent by 'The Dragon', they were escorted to the main party instead of the dungeon.", icon: "icon_focus.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 22, hour: 11, minute: 30 }, title: "The Heir of Rot", description: "Hjumpik met the 'Orange Heir' of Lady Aurelian Corvinarus at a grotesque banquet filled with rotting food and living carpets. The Heir denied being the Master, pointing instead to a 'Reveal' planned for later.", icon: "icon_social.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 22, hour: 14, minute: 0 }, title: "Rakasha Vanishes", description: "In a moment of distraction, Rakasha disappeared from the group. Footprints indicated she left with an unknown fourth party. Hjumpik's attempt to find her led to an awkward encounter with a different tiger-person.", icon: "icon_mystery.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 22, hour: 15, minute: 0 }, title: "The Archmage's Warning", description: "Perrius Annmatar appeared to Hjumpik, urging him to 'sever the lineage' of the Corvinarus family to escape the dimension. He warned that the only way out is to kill the heirs and fake the deaths of the Oracles.", icon: "icon_magic.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 23, hour: 8, minute: 0 }, title: "The Kitchen Horror", description: "Hjumpik peered into the manor's kitchen and witnessed 'The Revel'—a red haze of mouths and limbs being fed corpses instead of food. The true nature of the manor's 'guests' became horrifyingly clear.", icon: "icon_combat.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 23, hour: 15, minute: 30 }, title: "The Lounge Clue", description: "Toad Lee interrogated a goblin bartender about 'Archie Miser'. He learned that a male beast-folk guest (not Rakasha) was taken to the private Theater. Realizing their mistake, the group headed for the stage.", icon: "icon_focus.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 23, hour: 18, minute: 9 }, title: "Entrance to the Theater", description: "Hjumpik, Waluigi, and Toad Lee breached the private Theater of the Lost, preparing to confront the mystery guest and find their missing companion. The stage is set for a final reveal.", icon: "icon_drama.png", category: "Recent Event" },  
{ date: { year: 1040, monthIndex: 6, day: 25, hour: 3, minute: 0 }, title: "The Satyr Eviction", description: "Hjumpik and Waluigi cleared the Guest Wing of unruly Satyrs by luring them with beer, pushing them off balconies, and directing them to a hag's hut. Lady Aurelian was pleased but demanded more service.", icon: "icon_social.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 25, hour: 12, minute: 0 }, title: "The Sleeping Guardian", description: "Toad Lee discovered a colossal butterfly blocking the upper hallway. The creature's snores were loud enough to shake the walls, forcing the group to find alternative routes.", icon: "icon_nature.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 26, hour: 4, minute: 0 }, title: "The Butterfly Scream", description: "Hjumpik woke the Guardian Butterfly, which unleashed a deafening roar. The noise summoned the goblin night shift, leading to a tense standoff.", icon: "icon_combat.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 26, hour: 5, minute: 0 }, title: "Reunion with Rakasha", description: "Hjumpik located Rakasha, who had been hired as manor staff along with another Rakshasa. She was reunited with the party, bringing the mechanical hound Steely (Mossy) with her.", icon: "icon_focus.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 26, hour: 6, minute: 18 }, title: "Perrius's Ultimatum", description: "Perrius Annmatar contacted Hjumpik telepathically, demanding he kill the Orange Heir to prevent the timelines from severing. Hjumpik resolved to find proof of the Heir's illegitimacy instead.", icon: "icon_magic.png", category: "Recent Event" },
{ date: { year: 1040, monthIndex: 6, day: 25, hour: 13, minute: 58 }, title: "The Satyr Problem", description: "Lady Aurelian tasked Hjumpik with removing drunken Satyrs from her party. Hjumpik discovered the guests were refusing to leave, leading to a tense standoff.", icon: "icon_social.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 25, hour: 15, minute: 0 }, title: "The Vine Room Trap", description: "Hjumpik was nearly consumed by a room of razor-vines. Waluigi incinerated the threat with fire magic, revealing a bio-lock requiring specific names to open.", icon: "icon_combat.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 25, hour: 18, minute: 30 }, title: "The Usk Connection", description: "On the mezzanine, Hjumpik found a note that triggered a vision of Usk, the foggy elf from the Shadowfell manor, confirming the dimensions are bleeding together.", icon: "icon_magic.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 24, hour: 7, minute: 20 }, title: "Archie's Paperwork Bluff", description: "In Shadeward Manor, Archie disguised himself as a vampire bureaucrat to rescue Green T from a locked room, bluffing his way past a guard by complaining about paperwork.", icon: "icon_social.png", category: "Recent Event" },
    { date: { year: 1040, monthIndex: 6, day: 26, hour: 14, minute: 0 }, title: "The Crashed Vigilance", description: "Archie and Green T reached the crash site of the Vigilance, finding it swarmed by mysterious 'Purple Legion' troops broadcasting compliance orders.", icon: "newspaper_airship.png", category: "Recent Event" },
// Append these to the HISTORICAL_TIMELINE array in timeline-data.js

    {
        id: '1040-vision-988',
        date: { year: 1040, monthIndex: 6, day: 26, hour: 17, minute: 15 },
        category: 'Recent Event',
        title: 'Vision of the Grafting',
        description: "Hjumpik touches a statue and sees a vision from 988: An Orange Robed figure cutting their palm over a screaming dragon egg. The origin of the Corvinarus power."
    },
    {
        id: '1040-wario-arrival',
        date: { year: 1040, monthIndex: 6, day: 26, hour: 17, minute: 30 },
        category: 'Social',
        title: 'The Merchant of Chaos',
        description: "Wario arrives in the Feywild manor. He provides Hjumpik with ancient Vampire Wine and reveals a massive debt ledger including Bowser and Waluigi."
    },
    {
        id: '1040-aurelian-meet',
        date: { year: 1040, monthIndex: 6, day: 26, hour: 18, minute: 0 },
        category: 'Social',
        title: 'The Delicate Fairy',
        description: "The party meets Aurelian Corvinarus in the overgrown Master Bedroom. She plays the role of a delicate host, asking for the Satyrs to be removed."
    },
    {
        id: '1040-circle-discovery',
        date: { year: 1040, monthIndex: 6, day: 26, hour: 18, minute: 20 },
        category: 'Recent Event',
        title: 'The Broken Circle',
        description: "Toad Lee identifies a broken magic circle under the rug. He estimates it will take 4 days to repair—aligning with the end of the month."
    },
    {
        id: '1040-butterfly-bomb',
        date: { year: 1040, monthIndex: 6, day: 26, hour: 18, minute: 50 },
        category: 'Combat',
        title: 'Wario\'s Gift',
        description: "Wario attempts to climb the manor walls to deliver a 'present' (a bomb) to the Giant Guardian Butterfly."
    },
    {
    "id": "1040-luigi-arrival",
    "date": { "year": 1040, "monthIndex": 6, "day": 26, "hour": 19, "minute": 0 },
    "category": "Arrival / Entrance",
    "title": "Luigi's Entrance",
    "description": "Come on in, they shout—a bump is heard at a nearby door. It opens, revealing Luigi."
  },
  {
    "id": "1040-markop-strangle",
    "date": { "year": 1040, "monthIndex": 6, "day": 26, "hour": 19, "minute": 2 },
    "category": "Combat",
    "title": "Markop Attacks Luigi",
    "description": "Cut to Markop guy strangling him."
  },
  {
    "id": "1040-perrius-anamatur",
    "date": { "year": 1040, "monthIndex": 6, "day": 26, "hour": 19, "minute": 5 },
    "category": "Magic / Transformation",
    "title": "Perrius Anamatur Melts",
    "description": "Perrius Anamatur dissolves the dancer on Markop; it melts on his skin."
  },
  {
    "id": "1040-toadburt-escape",
    "date": { "year": 1040, "monthIndex": 6, "day": 26, "hour": 19, "minute": 10 },
    "category": "Escape / Combat",
    "title": "Toadburt Flees",
    "description": "Toadburt in the other room runs away, dodging guards and attacks."
  },
  {
    "id": "1040-salam-breach",
    "date": { "year": 1040, "monthIndex": 6, "day": 26, "hour": 19, "minute": 12 },
    "category": "Combat Prep",
    "title": "Salam Prepares Breach",
    "description": "Salam runs to the door to breach, fails, and prepares his light crossbow."
  },
  {
    "id": "1040-onyx-swarm",
    "date": { "year": 1040, "monthIndex": 6, "day": 26, "hour": 19, "minute": 15 },
    "category": "Combat",
    "title": "Onyx Knights Swarm",
    "description": "Onyx knights swarm the dance hall."
  },
  {
    "id": "1040-onyx-eager-vampire",
    "date": { "year": 1040, "monthIndex": 6, "day": 26, "hour": 19, "minute": 18 },
    "category": "Threat / Dialogue",
    "title": "Onyx Knight Threatens Eager",
    "description": "Onyx knight holding Eager says he will turn Eager into a vampire for faster healing. Eager protests ('v-v-v-v--vampire we dont want to cause any trouble'), begs to heal normally, struggles, bites the onyx hand, and runs toward the door."
  },
  {
    "id": "1040-markop-bash-rescue",
    "date": { "year": 1040, "monthIndex": 6, "day": 26, "hour": 19, "minute": 22 },
    "category": "Rescue / Escape",
    "title": "Markop Bashes In",
    "description": "Markop bashes the lock open and rushes in with Bowser behind him, dodging onyx hand. Markop sees Remi, screams they have to get out—he's bleeding and they're after him. 'Leave, run, scram.'"
  },
  {
    "id": "1040-eager-window-crash",
    "date": { "year": 1040, "monthIndex": 6, "day": 26, "hour": 19, "minute": 25 },
    "category": "Escape",
    "title": "Eager's Window Escape",
    "description": "Eager dashes behind them, then in front, and crashes through the window. Markop removes broken glass and calls to Remi to leave through the window."
  },
  {
    "id": "1040-remi-front-door",
    "date": { "year": 1040, "monthIndex": 6, "day": 26, "hour": 19, "minute": 28 },
    "category": "Capture",
    "title": "Remi Follows Guards",
    "description": "Remi runs through front door. Guards open it, ask her to come with them. She says 'OK' and follows. Bowser climbs out window. Dan runs behind Remi and exits front door. Salam dashes to window and jumps out."
  },
  {
    "id": "1040-manor-drag",
    "date": { "year": 1040, "monthIndex": 6, "day": 26, "hour": 19, "minute": 30 },
    "category": "Capture",
    "title": "Remi Dragged In",
    "description": "They watch Remi get dragged into the manor. Markop says they need backup and suggests heading to the airship."
  },
  {
    "id": "1040-dan-authenticity",
    "date": { "year": 1040, "monthIndex": 6, "day": 26, "hour": 19, "minute": 35 },
    "category": "Dialogue / Doubt",
    "title": "Questioning Dan",
    "description": "Markop asks Dan 'how do I know you're real?' Dan replies 'I honestly don't know' and asks how he can prove himself. They head into a room."
  },
  {
    "id": "1040-kyrn-remi-drink",
    "date": { "year": 1040, "monthIndex": 6, "day": 26, "hour": 19, "minute": 40 },
    "category": "Social / Manipulation",
    "title": "Kyrn Offers Drink",
    "description": "Kyrn enters, asks Remi if she wants a drink. She declines ('no thanks, I'm not into blood'). Kyrn cuts to the point: the Oracle hand has no pulse—he is dead. Remi says she's looking for friends; Kyrn claims they abandoned her and offers friendship/care instead."
  },
  {
    "id": "1040-remi-napkin",
    "date": { "year": 1040, "monthIndex": 6, "day": 26, "hour": 19, "minute": 50 },
    "category": "Discovery",
    "title": "Remi Finds Battle Plan Napkin",
    "description": "Remi walks into a room, picks up a high-quality linen napkin from the Shadowfell dining table with Green T's frantic battle plan (stick figures of Bowser, Green T, Archie; notes: 'Kill Vampires,' 'Smash Crystals,' 'UNLEASH THE BEAST')."
  },
  {
    "id": "1040-forest-dan-reveal",
    "date": { "year": 1040, "monthIndex": 6, "day": 26, "hour": 20, "minute": 0 },
    "category": "Revelation",
    "title": "Parallel Dan Confession",
    "description": "Markop and co. in forest after rest. Markop presses Dan. Dan admits he's partially real—a parallel version. The mirror room Dan was fake; here in Shadowfell he's real. Original Dan is likely held by mages guild in a null cage."
  },
  {
    "id": "1040-ritual-intel",
    "date": { "year": 1040, "monthIndex": 6, "day": 26, "hour": 20, "minute": 10 },
    "category": "Lore / Dialogue",
    "title": "Ritual & Oracle Details",
    "description": "Discussion about ritual collapsing reality, previous failed Oracle frozen between crystals, Dan's role in disruption to protect himself. Zone of Truth fades; party thinks about Remi."
  },
  {
    "id": "1040-remi-wario-gift",
    "date": { "year": 1040, "monthIndex": 6, "day": 26, "hour": 20, "minute": 30 },
    "category": "Item Transfer",
    "title": "Wario Delivers Items",
    "description": "Remi bumps into Wario in hallway. He dumps fire resistance items and armor into her backpack, says goodbye, and heads to Oracle's master room. Guards chase him."
  },
  {
    "id": "1040-remi-library-imps",
    "date": { "year": 1040, "monthIndex": 6, "day": 26, "hour": 20, "minute": 45 },
    "category": "Exploration / Encounter",
    "title": "Library Imps & Locked In",
    "description": "Remi snoops, hears explosion, sees painting hint (toad petting dog—possibly Orangus Cornelius). Guards ask about ghost/bleeding toad. Perrius Anamatur and Toadburt run past. Remi enters study/library; imps appear, ask for library cards, close door trapping Toadburt and ghost inside."
  },
  {
    "id": "1040-veranda-maze",
    "date": { "year": 1040, "monthIndex": 6, "day": 26, "hour": 21, "minute": 0 },
    "category": "Exploration",
    "title": "Veranda & Maze Sign",
    "description": "Remi reaches veranda with crimson petals, eerie view of void. Markop & co. return, ask about little girl (Remi). Vivian appears; group runs. They reach 'MAZE THIS WAY' sign and head out."
  },
  {
    "id": "1040-archie-luigi-meet",
    "date": { "year": 1040, "monthIndex": 7, "day": 26, "hour": 14, "minute": 0 },
    "category": "Introduction / Alliance",
    "title": "Archie Meets Agent L (Luigi)",
    "description": "Cut to Archie. Luigi walks in and says hello. Mages Guild introduces him as Agent L."
  },
  {
    "id": "1040-contract-negotiation",
    "date": { "year": 1040, "monthIndex": 7, "day": 26, "hour": 14, "minute": 5 },
    "category": "Dialogue / Deal",
    "title": "Contract Discussion",
    "description": "Archie asks what happens after cleanup. Guild rep explains contract completion, most charges dropped, honorary fellowship badge. Archie skeptical, requests Emperor's seal; rep confused. They offer fast-tracked badge. Archie detects faint new magic on it, backs away claiming unworthiness. Rep assigns him and Agent L to clear the place."
  },
  {
    "id": "1040-poltergust-compass",
    "date": { "year": 1040, "monthIndex": 7, "day": 26, "hour": 14, "minute": 20 },
    "category": "Item / Exploration",
    "title": "Agent L's Devices",
    "description": "Agent L (Luigi) activates Poltergust, shows humming containment tank with trapped entities. Gives Archie a cracked brass compass radiating faint divination magic (needle spins irregularly). Archie has no idea what it is. Luigi points to shadow butler; Archie recalls plane-jumping ability and portal setup."
  },
  {
    "id": "1040-usk-orvinder-decline",
    "date": { "year": 1040, "monthIndex": 7, "day": 26, "hour": 14, "minute": 30 },
    "category": "Dialogue",
    "title": "Recruitment Attempt",
    "description": "Archie offers Usk and Orvinder to join; both decline, agreeing with goals but having own plans."
  },
  {
    "id": "1040-dance-hall-ghost-battle",
    "date": { "year": 1040, "monthIndex": 7, "day": 26, "hour": 15, "minute": 0 },
    "category": "Combat",
    "title": "Dance Hall Ghost Fight",
    "description": "They reach dance hall door; Luigi picks lock with Iron Legion marks coins. Room heavily damaged: shattered piano, collapsed mezzanine/ceiling, sagging dais. Single ghost remains. Luigi reveals it with flashlight. Battle: Ghost claps thunder sparks. Archie confirms wooden floor, fires firebolt; Luigi calls fireball (green, bounces—both dodge). Ghost flies through Luigi, punches Archie. Luigi vacuums; Archie slashes (tries ice—not effective). Archie finishes it off. Poltergust tank at capacity with minor ghosts and two red-zone entities."
  },
  {
    "id": "1040-housebound-capture",
    "date": { "year": 1040, "monthIndex": 7, "day": 26, "hour": 15, "minute": 10 },
    "category": "Combat",
    "title": "Housebound Ghost Encounter",
    "description": "They continue; encounter housebound ghost that captured a toad Archie seeks. Scary ghost appears; Agent L panics, crawls away. Archie screams, runs. Regroup: Luigi crying in corner. Archie motivates. They use darklight to reveal hidden wall. Ghost touches Luigi (shivers, strobe ignored). Archie fireballs; Luigi sneaks and sucks it up. Tank full—no more capacity."
  },
  {
    "id": "1040-guild-return-deposit",
    "date": { "year": 1040, "monthIndex": 7, "day": 26, "hour": 16, "minute": 0 },
    "category": "Return / Deposit",
    "title": "Return to Mages Guild",
    "description": "They head back. Luigi deposits ghosts (into jars). Discussion on ghost research for immortality—Luigi skeptical. Archie watches unseen. Poltergust couldn't be fixed but is empty now."
  },
  {
    "id": "1040-perrius-sitting-room",
    "date": { "year": 1040, "monthIndex": 7, "day": 27, "hour": 1, "minute": 27 },
    "category": "Encounter / Confrontation",
    "title": "Perrius Anamatar in Sitting Room",
    "description": "Archie brushes off Usk/Orvinder's portal room invite. They enter sitting room: Perrius Anamatar (mild-mannered, masked, sipping tea) greets politely, waiting for summons. Archie asks about captured toad. Perrius denies, accuses Archie of freeing it earlier. Ghosts in coats emerge, choke Luigi. Archie forms massive fireball; Perrius warns of collapse. Archie demands proof (open showroom—empty). Perrius runs; coats reactivate like zombies."
  },
  {
    "id": "1040-closet-escape",
    "date": { "year": 1040, "monthIndex": 7, "day": 27, "hour": 6, "minute": 12 },
    "category": "Escape / Disguise",
    "title": "Closet Hide & Disguise Exit",
    "description": "They hide in coat closet room (mildew, decayed/moth-eaten cloaks). Archie bangs window; they exit outside main entrance. Archie disguises as Iron Legion guard. Guides Luigi (Agent L) in. Guards question smell, shift excuses. Archie spots Vigilance airship, signals. Luigi sneaks past; Archie distracts with rock, locks door, grabs Luigi ('guard capturing me'). They return to portal room area. Luigi recognizes Royal Lion regiment, mentions William."
  },
  {
    "id": "1040-guard-quest-offer",
    "date": { "year": 1040, "monthIndex": 7, "day": 27, "hour": 10, "minute": 27 },
    "category": "Quest Offer",
    "title": "Missing Toad Quest",
    "description": "While resting, guard approaches Archie: 'Not all rejoice the nightborn house decree.' Offers quest to find missing toad."
  },
  {
    "id": "1040-ration-break-thornbury",
    "date": { "year": 1040, "monthIndex": 7, "day": 28, "hour": 7, "minute": 0 },
    "category": "Rest / Supplies",
    "title": "Ration Break with Thornbury",
    "description": "Archie and Luigi rest. Luigi opens military ration pack (scratched manufacturing marks, multilingual labels). Smell neutral. Luigi comments could be worse than Bowser's army rations. Archie wants to move on. Points to Mages Guild guard—asks if joining. Archie mentions only 5 rooms checked, more floors remain. Calls guard 'Placeman.' Guard reveals name: Thornbury."
  },
  {
    "id": "1040-servants-dining-secret-stash",
    "date": { "year": 1040, "monthIndex": 7, "day": 28, "hour": 7, "minute": 10 },
    "category": "Exploration / Loot",
    "title": "Servants' Dining Room Secret Stash",
    "description": "Explore ruined servants' recreational/dining room (tarnished tableware, valuables gone). Agent L at door. Thornbury uncovers secret stash: 35 gold, pearl necklace. Offers gold to Archie; Archie splits with Luigi (still eating ration). Archie fails lock pick; Luigi helps, wonders if it belongs to Oracle. Thornbury reads field notes book on opening unoccupied rooms—from Mages Guild. Archie sweats hearing Guild name."
  },
  {
    "id": "1040-tensor-box-ghost-fight",
    "date": { "year": 1040, "monthIndex": 7, "day": 28, "hour": 7, "minute": 20 },
    "category": "Combat",
    "title": "Tensor Box Ghost Detection",
    "description": "Thornbury sets up tensor box (Archie doesn't know what it is). Pings room—ghost seen, lurches at Archie ('bring it on!'). Guard slashes; Luigi's Poltergust roars, begins sucking. Archie screams, runs, hurls firebolts (all miss). Luigi continues vacuum. Mages Guild member asks if Archie will use compass, says he has matching one. Archie follows Guild person's compass."
  },
  {
    "id": "1040-sitting-room-spy-encounter",
    "date": { "year": 1040, "monthIndex": 7, "day": 28, "hour": 17, "minute": 0 },
    "category": "Encounter",
    "title": "Spy in Sitting Room",
    "description": "Archie opens door—spy from earlier is there. Sitting room: faded portraits, broken marble busts (ears/noses removed), ruined pool table (split by fallen beam), ransacked drinks cabinet, broken glass/alcohol smell on carpet. Ask about ghosts—spy mentions maybe flying jackets, no time to talk, looking for toad, leaves. Archie finds hidden door."
  },
  {
    "id": "1040-curio-room-statuette",
    "date": { "year": 1040, "monthIndex": 7, "day": 28, "hour": 17, "minute": 10 },
    "category": "Exploration / Discovery",
    "title": "Curio Collection Room",
    "description": "Enter curio/antiquities room (toppled statues, broken vases, green carpet path). North wall collapsed exposing broader collection. Tarnished gold mirror frame (shattered silver glass, bent) against SE wall; wallpaper torn with thick gouges beneath. Archie spots small statuette. Thornbury picks up—reads 'Dragonus Cornelius.' Looks at mirror back: complex magical inscription for planar travel (dimensional doorway transforming mirror into gateway). Guild guard thinks it's Oracle's notes. Deep gouges/marks = magical formulae. Says 'let me mark it.'"
  },
  {
    "id": "1040-stone-pendant-marking",
    "date": { "year": 1040, "monthIndex": 7, "day": 28, "hour": 17, "minute": 15 },
    "category": "Item / Marking",
    "title": "Gray Stone Pendant",
    "description": "Smooth gray stone in ornate brass pendant frame. Unremarkable appearance, slightly warm, occasionally pulses faint inner light. Brass frame bears tiny archaic inscriptions (resist casual translation). Used to mark location."
  },
  {
    "id": "1040-workshop-storage-room",
    "date": { "year": 1040, "monthIndex": 7, "day": 28, "hour": 17, "minute": 20 },
    "category": "Exploration",
    "title": "Workshop-Storage Confusion",
    "description": "Breach next door. Room confusing—combines two room types. Workshop tools scattered. Luxurious furnishings: mirror on dressing table, adorned divan (south corner), wooden screen with floral embossed panels sheltering armoire/stool. Jewelry box on floor (contents pillaged). Feminine furniture mixed with broken crates containing ruined dresses/regal clothing. Once workshop, became impromptu storage. Archie spots Thornbury pocket a ring from floor."
  },
  {
    "id": "1040-collapsed-floor-initials",
    "date": { "year": 1040, "monthIndex": 7, "day": 28, "hour": 17, "minute": 25 },
    "category": "Exploration / Discovery",
    "title": "Collapsed Floor Room",
    "description": "Enter utterly ruined room. Floor above partially collapsed—rests on west floor, leans against east ceiling like ramp to second floor. Dangerous, could finish collapsing. Dim light through drafty doorway above. West side pile of rubble/furniture/stone/wood. Whatever was here when ceiling collapsed is unrecoverable. Thornbury notices initials 'OC' and 'AC' carved into bedframe. Smells incense from upstairs. All prepare to climb collapsed roof."
  },
  {
    "id": "1040-archie-climb-fail",
    "date": { "year": 1040, "monthIndex": 7, "day": 28, "hour": 17, "minute": 30 },
    "category": "Action / Failure",
    "title": "Climbing Attempt Failures",
    "description": "Archie volunteers to climb first. Falls onto Mages Guild observer. Luigi climbs up. Archie tells guy he fell on to be careful—falls on him again. Guard reaches into adventurer's kit (bedroll, mess kit, tinderbox, 10 torches, 10 days rations, waterskin, 50 ft hempen rope, healer's kit 8 uses, 2 healing potions 2d4+2, 1 invisibility potion, 1 Sending scroll). Thornbury tracks supplies for reimbursement; invisibility reserved for extraction/escape. Tosses rope up; they begin climbing. Archie falls from rope. Guild man climbs successfully. Luigi tells Archie to go around."
  },
  {
    "id": "1040-encrypted-conversation",
    "date": { "year": 1040, "monthIndex": 7, "day": 29, "hour": 2, "minute": 37 },
    "category": "Dialogue / Conspiracy",
    "title": "Agent L & Guild Encrypted Talk",
    "description": "Archie feels footsteps approach. Mages Guild members walk into Archie, see rope, look up, ask for Agent L. Archie calls out. Luigi and her enter nearby room. Archie listens in. Conversation (partial encryption): 'Guild stuff to discuss... should we switch to encrypted coms... you can but I won't... I know Archie is listening anyway... the planar fracture pL1... it's destabilizing... not good... the less ghosts there are the better? or worse... need to get ghosts out of house... even if it destabilizes... even if it may kill Archie... yes... I understand... I will get it done... report back to me 2mor.' Rope snaps. Archie falls, says 'oww.' Thornbury upset—rope is Guild property, expensive. Archie tells him to come down. Calls 'THORNBERRY' as hears door open, Thornbury and Agent L talking, they walk away."
  },
  {
    "id": "1040-rope-bill",
    "date": { "year": 1040, "monthIndex": 7, "day": 29, "hour": 5, "minute": 6 },
    "category": "Item / Bureaucracy",
    "title": "Absurd Rope Replacement Bill",
    "description": "Archie claws up for 5 min (fails), gives up, opens door to Guild lady. She says unable to find toad on first floor. Hands Archie bill for rope: Guild Membership Levy (50gp), Master Weaver's Inspection (200gp), Arcane Certification Seal (150gp), Load-Test Certification (300gp), Environmental Impact Assessment (75gp), Quality Assurance Audit (100gp), Expedited Processing Fee (250gp), Admin Stamp & Wax (40gp), Hazardous Material Surcharge (80gp), Inflation Adjustment (100gp), Guild Master's Discretionary Gratuity (500gp), Sales Tax (217gp). Subtotal 1,525gp. Grand Total: 2,062gp 5sp. She laughs, walks off. Archie says he'll pay for it."
  },
  {
    "id": "1040-archie-ambush-injury",
    "date": { "year": 1040, "monthIndex": 7, "day": 29, "hour": 5, "minute": 10 },
    "category": "Combat / Injury",
    "title": "Library Ambush",
    "description": "Archie all alone now. Explores library they previously fought in. Ignus says Luigi went upstairs. Opens door, gets ambushed. Starts bleeding in pain ('shoot'), runs away, locks door, stares at it for half minute, composes self. Spots Usk passing by, points ('you were with Miss Ignus'). Begs Usk to help. 'Fine.' Head to door. Usk screams; Perrius Annmatar appears instead of earlier ghost. Archie admits hunting ghosts—only bad ghosts, not you. Perrius says not a ghost, wants peace/quiet in house, points to monster behind Archie. Archie banged on head, falls unconscious, bleeds."
  },
  {
    "id": "1040-archie-recovery",
    "date": { "year": 1040, "monthIndex": 7, "day": 30, "hour": 0, "minute": 29 },
    "category": "Recovery",
    "title": "Waking Up After Injury",
    "description": "Archie wakes hours later on bed. Agent L and Thornbury staring at him. 'What happened? I thought I died.' 'You fell unconscious right, then Mages Guild woman took you to us. We tucked you in, took care of more ghosts.' Archie asks them to keep watch while he rests up. Notices the toad, calls out."
  },
  {
    "id": "1040-purple-toad-fortune-teller",
    "date": { "year": 1040, "monthIndex": 7, "day": 30, "hour": 0, "minute": 30 },
    "category": "Encounter / Theft / Song",
    "title": "Purple Toad Fortune Teller",
    "description": "Purple toad enters, starts singing 'Shuffle the Deck, Dear Hero' (accordion, velvet table, spectacles). Song lyrics: cards, fate, tower cracked, friend not true, compass lost, Moon secrets, Sun promises, Fool walks off ledge, Ring glows bright (regulates day/night—who decides what's bound/found?), Heir grown not born (root and scale—cut vine or thread?), planar portal opening where never meant to. During song, purple toad takes Archie's watch, keys, other items from bag. Archie tries to get up (great pain); Luigi and guard hold him down ('be careful'). Purple toad asks: 'Have you ever seen a planar portal open where it never was meant to?' Opens portal with compass and tools from Archie's pocket. Steps through portal. Portal closes."
  },
  {
    "id": "1040-embercap-mages-guild-visit",
    "date": { "year": 1040, "monthIndex": 6, "day": 27, "hour": 0, "minute": 0 },
    "category": "Arrival / Lodging Offer",
    "title": "Toadsmith Guard Offers Lodging",
    "description": "FLASHBACK (Embercap 27, 6, 1040): Bang bang bang. 'OPEN THE DOOR, Toadsmith Poultice.' Eric asks who; Embercap says look alive. Guard opens door—Mages Guild nearby offers beds, must go now. Offers safe passage/rest. Leads them to elevator, upstairs. Toads get cold feet, leave Mages Guild."
  },
  {
    "id": "1040-bryan-portal-arrival",
    "date": { "year": 1040, "monthIndex": 6, "day": 27, "hour": 3, "minute": 8 },
    "category": "Arrival / Interrogation",
    "title": "Bryan's Portal Arrival",
    "description": "FLASHBACK continues: Portal activates in Mages Guild. Bryan comes through. 'What are you doing here?' Bryan: 'Well here I am now, this is what happens when you serve a g— this is what happens with my job. Outside of anything else, any news?' Purple T hands Bryan photograph (group of toads on airship deck, creased from handling, carefully preserved, irreplaceable—'creased faces smile from better days, frozen before everything burned'). Bryan: 'What? What is Archie doing there? Where did you get this?' 'I got it from under his pillow.' 'Where is he? Why is Archie here?' Grabs purple T by thorax. 'Where is he? Where is Archie?' 'He's at Raventree.' 'Hmm, Raventree, got it, thank you.'"
  },
  {
    "id": "1040-bryan-recruitment-offer",
    "date": { "year": 1040, "monthIndex": 6, "day": 27, "hour": 3, "minute": 15 },
    "category": "Recruitment",
    "title": "Bryan Recruits Purple T",
    "description": "FLASHBACK: They head to Dan's room (shared barracks with other mages). Bryan: 'Hey purple T, you jacked Archie's stuff and got away without laying a finger on him. You want to join forces?' Bryan walks in, sees Dan sleeping with other mages."
  },
  {
    "id": "1040-dan-guild-equipment",
    "date": { "year": 1040, "monthIndex": 6, "day": 27, "hour": 3, "minute": 20 },
    "category": "Item / Inventory",
    "title": "Dan's Guild Tracking Items",
    "description": "FLASHBACK: Dan's inventory noted. Brass badge #447 (Mages Guild seal, associate status proof, glows faint blue in Guild facilities, burns hot if removed improperly—learned hard way, tracking device for administrators, 'safety measure,' will be removed upon full membership—been told many things). Blue robes (short cut for toad physiology, fire-resistant thread, no official insignia—'associate' not full member, resistance to fire damage, interior component pockets, hood, brass clasp with number not name—'Associate 447' for past several days, feels gratitude and shame). Blackite wand (volcanic glass, southern lava tubes, ruby cap pulses inner fire, given after third day training, improves control not power, finest tool ever owned, also a leash—registered to Guild, magical signature tracked, taking outside without permission = immediate pursuit, +1 spell attack fire spells, add proficiency to fire cantrip damage, arcane focus). Hidden coded notes (paper scraps in mattress/stones/pages, toad counting rhyme cipher from grandmother, documents guard schedules/hierarchies/warded doors/instructors, maps facility, escape routes, sympathetic associates, observations on comforts accepted/justifications; recent note: 'They haven't mentioned the Vigilance in three days. Either they don't know where it is, or they're hiding something. Find out which.')."
  },
  {
    "id": "1040-purple-t-wakes-dan",
    "date": { "year": 1040, "monthIndex": 6, "day": 27, "hour": 3, "minute": 25 },
    "category": "Recruitment / Deception",
    "title": "Recruiting Dan & Mage",
    "description": "FLASHBACK: Purple T wakes Dan. 'Huh? What happened? Where did my thing go? Did you take it?' 'Me? No I didn't take anything.' Bryan sighs, gives it back. 'What was I doing with it? Someone stole it, it wasn't me.' Bryan introduces self: 'Servant of the toad god. I heard you had a fight to pick with Archie, is this correct?' 'Well I guess I'd want to see him again.' 'You want to take revenge?' '... ... yeah I do' (lie). 'You want to join the god toad to kill Archie?' 'I'll come along with you, yeah.' 'What about the guy sleeping there, is he coming?' 'HEY WAKE UP.' Mage: 'Yawn, what happened?' Bryan introduces self. Purple T: 'Alright, it'll take a month but I'll head over there by magical transport, open a plane where it doesn't belong, open up the gates and you'll swarm in.' Bryan: 'Are you certain you saw Archie?' Purple T: 'Have I ever been wrong?'"
  },
  {
    "id": "1040-purple-t-incense-plan",
    "date": { "year": 1040, "monthIndex": 6, "day": 27, "hour": 3, "minute": 30 },
    "category": "Item / Plan",
    "title": "Knockout Incense Candles",
    "description": "FLASHBACK: Purple T: 'I have a plan too. Check out these candles—one sniff of these, Archie will be out like a light.' Incense bundle: hand-rolled from dried mushroom stems, rare herbs, resins Morel collects. Thick sweet smoke, earthy ancient undertone, clings to fabric/hair for hours. One stick during important readings—clarifies visions, strengthens card connection. Burns 10 min. Divination magic in 10-ft radius functions one spell level higher; advantage on Insight checks for omens/symbols/cryptic messages. Downside: concentration difficult for non-divination—DC 10 Con save each turn to maintain. Morel carries 7 sticks (two weeks daily readings). Makes more with ingredients (several hours, ~5gp per stick)."
  },
  {
    "id": "1040-badge-removal-plan",
    "date": { "year": 1040, "monthIndex": 6, "day": 27, "hour": 13, "minute": 56 },
    "category": "Escape / Tracking Removal",
    "title": "Removing Guild Tracking",
    "description": "FLASHBACK (27 Highsun 13:56): 'Will the higher-ups crack down on us?' 'No no, it's fine. Be public, be loud, let them know we're coming.' Purple T rips Dan's shirt—part with identification badge gone. Rips off others' badges too. Head into room, shut down. 'So by removing these tracking devices provided by the Guild, we can go after Dan without other members involved. Must take these off if we do anything unauthorized, but everything on your terms, your power. If you get tired, Mages Guild won't save you. All Guild equipment disabled.' Purple T: 'Archie could be on three planes right now: Shadowfell, Feywild, and Material.' Dan to self: 'If I was a pyromaniac, where would I go?' 'Can we track him? Anything the Guild could track aside from picking randomly?' John the mage: 'Why don't we just track them on Wahbook with their posts?' Purple T: 'That's a brilliant idea. He posts every day about himself.' 'Should we kill him, capture him, bring him to authorities?' 'Everything is on the table. We are doing this for the good of the world.'"
  },
  {
    "id": "1040-portal-departure",
    "date": { "year": 1040, "monthIndex": 6, "day": 27, "hour": 13, "minute": 56 },
    "category": "Travel / Portal",
    "title": "Team Departs Through Portal",
    "description": "FLASHBACK continues: They all walk into portal. Order: Purple T first, then Bryan, then mages, and Dan."
  }
];
