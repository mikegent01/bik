// FIX: Corrected import path for types to './types' to match the flat project structure.
import { EpisodeSummary, PlotImpact } from './types';
import { EPISODES_DATA_EP31_40 } from './episodes.ep31-40';
import { EPISODES_DATA_EP41_50 } from './episodes.ep41-50';
import { EPISODES_DATA_EP51_60 } from './episodes.ep51-60';

const EPISODES_DATA_S1: EpisodeSummary[] = [
    { episode: 1, title: "The Raid", summary: "The team infiltrates Mega X's Castle for revenge, rescuing the prisoner 'No One' in a loud and destructive assault.", plotImpact: PlotImpact.MAJOR, tags: ['Mission Start', 'Combat', 'New Character', 'Rescue'] },
    { episode: 2, title: "The Escape", summary: "Mega X escapes to a ship. The team pursues, finds his associate 'Bloodless,' and rigs the ship to explode.", plotImpact: PlotImpact.MAJOR, tags: ['Escape', 'Confrontation', 'Climax'] },
    { episode: 3, title: "The Labyrinth", summary: "The team is trapped in a bizarre, looping backrooms-style prison, shifting their goal from vengeance to survival.", plotImpact: PlotImpact.MAJOR, tags: ['New Location', 'Surreal', 'Trap'] },
    { episode: 4, title: "The Descent", summary: "The labyrinth begins to collapse, forcing a frantic descent. Tensions rise as Grape gets separated and clues about 'Bloodless' emerge.", plotImpact: PlotImpact.MINOR, tags: ['Exploration', 'Team Dynamics', 'Lore'] },
    { episode: 5, title: "The War and The Betrayal", summary: "Doctor Valeneria announces a wider war against Mega X. The team is betrayed from within, ending in a shocking cliffhanger.", plotImpact: PlotImpact.MAJOR, tags: ['Lore', 'Betrayal', 'Climax'] },
    { episode: 6, title: "The Researchers", summary: "The group enters a creepy new level inhabited by 'researchers' and gains a suspicious new ally after a tense encounter.", plotImpact: PlotImpact.MINOR, tags: ['New Location', 'New Character', 'Team Dynamics'] },
    { episode: 8, title: "Pipe Dreams", summary: "In the dangerous Level 2, the team gets separated amidst new auditory threats and dwindling water supplies.", plotImpact: PlotImpact.MINOR, tags: ['Exploration', 'Survival', 'Team Dynamics'] },
    { episode: 9, title: "The FNAF Zone", summary: "A level resembling 'Five Nights at Freddy's' raises tensions as Rose's past betrayal is revealed, leading to a horrific ambush by 'Skin-Takers'.", plotImpact: PlotImpact.MAJOR, tags: ['New Location', 'Lore', 'Betrayal', 'Combat'] },
    { episode: 10, title: "The Industrial Zone", summary: "Mike and Kymar search a creepy industrial building, fighting off a semi-transparent red monster that inflicts blindness.", plotImpact: PlotImpact.MINOR, tags: ['Exploration', 'Combat', 'Monster'] },
    { episode: 11, title: "The Office", summary: "Mike, now alone, finds a camp of scientists in an office level and is given a map and armor by their untrustworthy guide.", plotImpact: PlotImpact.MINOR, tags: ['New Location', 'New Character', 'Exploration'] },
    { episode: 12, title: "The Event Hall", summary: "An elevator leads to a bizarre event hall with a red carpet and a strange, echoing opera monologue.", plotImpact: PlotImpact.MINOR, tags: ['Exploration', 'Surreal'] },
    { episode: 13, title: "The Darkness", summary: "The team enters Level 6, a place of near-total darkness. In a stroke of luck, they find Rose, missing since Episode 9, alive.", plotImpact: PlotImpact.MINOR, tags: ['New Location', 'Survival', 'Reunion'] },
    { episode: 14, title: "The Snack Rooms", summary: "In a hazardous level with slippery floors, the team faces new 'human face dog creatures.' The scientist guide is shot and disappears.", plotImpact: PlotImpact.MINOR, tags: ['New Location', 'Monster', 'Betrayal'] },
    { episode: 15, title: "The Endless Hallway", summary: "Trapped in a deceptively pleasant but looping hallway, the team makes a dangerous gamble on an untested teleporter.", plotImpact: PlotImpact.MINOR, tags: ['Surreal', 'Escape', 'Team Dynamics'] },
    { episode: 16, title: "The Titanic", summary: "The teleporter works, sending the group to a frozen ocean containing the RMS Titanic, where they learn Bloodless trapped Mega X soldiers.", plotImpact: PlotImpact.MINOR, tags: ['New Location', 'Surreal', 'Lore', 'Discovery'] },
    { episode: 17, title: "Lost at Sea", summary: "While exploring the flooded Titanic, both Rose and Grape get separated again, throwing the team into disarray.", plotImpact: PlotImpact.MINOR, tags: ['Exploration', 'Team Dynamics'] },
    { episode: 18, title: "The Spider Gauntlet", summary: "Fleeing the Titanic, the team is pursued by an entity called 'God' and ambushed by giant spiders. They rescue a trapped Doctor Valeneria.", plotImpact: PlotImpact.MINOR, tags: ['Combat', 'Monster', 'Escape', 'Rescue'] },
    { episode: 19, title: "The Ascent", summary: "In the dark Level !, the team sees monsters falling from the sky. They use a massive supply of ladders to build their way up and escape.", plotImpact: PlotImpact.MINOR, tags: ['Escape', 'Exploration', 'Surreal'] },
    { episode: 20, title: "The Ravine of Slaughter", summary: "After a hallway ambush, the team is teleported to a ravine swarming with monsters. Many are killed before the survivors find Lando's bizarre shop.", plotImpact: PlotImpact.MAJOR, tags: ['Major Death', 'Combat', 'New Location', 'Trap'] },
    { episode: 21, title: "The Circus", summary: "The team battles through a surreal circus village and faces a gigantic clown boss. The escape is marked by internal betrayal.", plotImpact: PlotImpact.MAJOR, tags: ['Combat', 'Boss Fight', 'Betrayal', 'Surreal'] },
    { episode: 22, title: "The Endless Train", summary: "After another slaughter in the ravine, the survivors escape to an impossibly long train car where the entire team is unexpectedly reunited.", plotImpact: PlotImpact.MAJOR, tags: ['Major Death', 'Escape', 'Reunion', 'New Location'] },
    { episode: 23, title: "The Station", summary: "Kymar is reunited with Mike and Grape. They use TNT to escape a barn and find themselves trapped in a familiar train station.", plotImpact: PlotImpact.MINOR, tags: ['Reunion', 'Escape'] },
    { episode: 24, title: "The Endless Mall", summary: "The train takes them to a vast, empty shopping mall where they receive a new quest: craft 'Rocky Road' ice cream for a troll.", plotImpact: PlotImpact.MINOR, tags: ['New Location', 'Surreal', 'Mission Start'] },
    { episode: 25, title: "The Manifesto", summary: "While exploring the mall, the team finds books written by Bloodless, revealing she trapped them to stop them from uploading their videos.", plotImpact: PlotImpact.MAJOR, tags: ['Lore', 'Discovery', 'Exploration'] },
    { episode: 26, title: "The False Friend", summary: "The team meets Jeremy, a deceptive trickster who claims to be a good guy. He leads them to a high bridge where he reveals his betrayal.", plotImpact: PlotImpact.MINOR, tags: ['New Character', 'Betrayal', 'Team Dynamics'] },
    { episode: 27, title: "The Frostbite Pursuit", summary: "The team chases Jeremy through a watery passage that inflicts 'Frostbite' damage, leading to a massive library where they are ambushed.", plotImpact: PlotImpact.MINOR, tags: ['Combat', 'Exploration', 'Trap'] },
    { episode: 28, title: "The Keys", summary: "After a rooftop ambush by Mega X forces, the team finds the first two of three keys needed to escape. A new, silent figure, 'Faceless,' appears.", plotImpact: PlotImpact.MINOR, tags: ['Combat', 'New Character', 'Key Item'] },
    { episode: 29, "title": "A World of Flesh", "summary": "After more explosions and another death, the team is teleported to a hellish dimension made of red flesh to continue their troll quest.", plotImpact: PlotImpact.MINOR, tags: ['New Location', 'Surreal', 'Major Death'] },
    { episode: 30, title: "The Two Jeremys", summary: "In the flesh dimension, the team is trolled by a skeleton guide and confused by two versions of Jeremy before finding the final quest item in a TNT crater.", plotImpact: PlotImpact.MINOR, tags: ['Surreal', 'Betrayal', 'Key Item'] },
    { episode: 31, title: "The Troll's Trap", summary: "The team delivers the items to Lando the Troll, who betrays them with a deadly trap before a disorienting chase leads to a final teleporter.", plotImpact: PlotImpact.MAJOR, tags: ['Betrayal', 'Trap', 'Major Death', 'Climax'] },
    { episode: 32, title: "The Conspiracy", summary: "Ejected from the backrooms into a warzone, the team is hired by a priest for a suicide mission and learns they are to be executed afterwards.", plotImpact: PlotImpact.MAJOR, tags: ['Escape', 'New Location', 'Betrayal', 'Mission Start', 'Climax'] }
];

const EPISODES_DATA_S2: EpisodeSummary[] = [
    ...EPISODES_DATA_EP31_40,
    ...EPISODES_DATA_EP41_50,
    ...EPISODES_DATA_EP51_60,
];

export const EPISODES_DATA: EpisodeSummary[] = [...EPISODES_DATA_S1, ...EPISODES_DATA_S2];