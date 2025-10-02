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
    episodeCount: 34,
    summary: "Ejected from the backrooms into a hostile new world, the team's journey continues through a snowy, post-apocalyptic landscape. They face new factions, suffer betrayals, and are hunted by mysterious forces. Their path leads them to the colossal 'Great Wall of Canada,' where they are trapped in a disorienting loop that shatters their sanity. Upon escaping, the world itself transforms, thrusting them into a primitive, frozen wilderness where they must fight monstrous new creatures to survive.",
    status: 'Ongoing'
  }
];