// FIX: Corrected import path for types to './types' to match the flat project structure.
import { GlossaryTerm } from './types';

export const GLOSSARY_DATA: GlossaryTerm[] = [
    {
        term: "The Backrooms",
        definition: "A surreal, extra-dimensional space where the laws of reality are unstable. It is composed of numerous 'Levels,' each with unique, often hostile, environments. It served as the team's prison for the majority of the season.",
        category: 'Location Type'
    },
    {
        term: "Mega X Empire",
        definition: "The primary antagonistic faction of the season, led by the mastermind 'Mega X.' A powerful, militaristic organization with a vast army of soldiers, guards, and other hostile agents.",
        category: 'Faction'
    },
    {
        term: "Levels",
        definition: "The distinct, themed environments that make up the Backrooms. Examples include Level 2 (Pipe Dreams), Level 4 (The Office), and Level 6 (The Darkness).",
        category: 'Location Type'
    },
    {
        term: "Skin-Takers",
        definition: "Monstrous entities that appear as shambling collections of skin. They are highly aggressive and capable of spawning in large numbers to ambush their prey.",
        category: 'Concept'
    },
    {
        term: "Howlers",
        definition: "A deadly type of creature first encountered in the Ravine of Slaughter. While their specific abilities are not fully detailed, their presence is associated with overwhelming and fatal assaults.",
        category: 'Concept'
    },
    {
        term: "Smilers",
        definition: "Entities that are said to lurk in the near-total darkness of Level 6. They are one of the primary threats in environments where light is ineffective.",
        category: 'Concept'
    },
    {
        term: "Liquid Pain",
        definition: "A mysterious and presumably hostile item. It was used by one player to kill another during the escape from the circus, suggesting it is a powerful weapon or poison.",
        category: 'Item'
    },
    {
        term: "The Troll Quest",
        definition: "A bizarre, season-spanning scavenger hunt orchestrated by 'Lando the Troll.' It forced the team to find and craft a series of absurd items, only to lead to a violent betrayal instead of a reward.",
        category: 'Concept'
    },
    {
        term: "Player Names",
        definition: "The in-game usernames of the main characters, often used to distinguish roles and actions throughout the season.",
        category: 'Concept'
    }
];

export default GLOSSARY_DATA;
