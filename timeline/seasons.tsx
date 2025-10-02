// FIX: Corrected import path for types to './types' to match the flat project structure.
import { Season } from './types';

export const SEASONS_DATA: Season[] = [
  {
    seasonNumber: 1,
    title: "The Castle & The Labyrinth",
    episodeCount: 32,
    summary: "What began as a raid spirals into a struggle for survival in a reality-bending labyrinth. After completing a bizarre scavenger hunt, the team is betrayed by a troll and forcibly ejected from the backrooms, losing all their items. They land in a warzone, realize a friend was left behind, and accept a morally questionable quest from a mysterious priest, setting them on a new path down a surreal highway in the sky.",
    status: 'Concluded'
  },
  {
    seasonNumber: 2,
    title: "The Authority",
    episodeCount: 8,
    summary: "The team's journey continues in a snowy, post-apocalyptic city controlled by a new, well-armed faction known as 'The Authority.' After finding weapons, they are quickly identified as intruders, captured, and thrown into a prison. A chaotic and ill-fated escape attempt results in a player's death and a desperate flight from their new, powerful enemies.",
    status: 'Ongoing'
  }
];