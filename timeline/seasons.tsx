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
    episodeCount: 40,
    summary: "Ejected from the backrooms into a hostile new world, the team's journey is a chaotic spiral of destruction and betrayal. From obliterating a city controlled by 'The Authority' to being hunted by new factions and monstrous creatures, their path leads them to the colossal 'Great Wall of Canada,' where a disorienting trap shatters their sanity. After a surreal world-shift thrusts them into a primitive frozen wilderness, they escape aboard a luxury liner that drives them to paranoid infighting. The season culminates in a series of self-sabotages, the destruction of multiple ships (including the Titanic), and a desperate escape that leaves them adrift at sea, with one member presumed dead and another still missing.",
    status: 'Concluded'
  }
];