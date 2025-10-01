// FIX: Corrected import path for types to './types' to match the flat project structure.
import { KeyItem } from './types';
import { KEY_ITEMS_DATA_S2 } from './season2Data';

const KEY_ITEMS_DATA_S1: KeyItem[] = [
    {
        name: "Bloodless's Research Papers",
        description: "A book of papers titled 'bloodlust' found early in the labyrinth, providing the first major clue about the nature of their prison and its creator.",
        firstAppearanceEpisode: 3,
        lastAppearanceEpisode: 3
    },
    {
        name: "Aqua Key",
        description: "A key found in a hidden chest in the poisoned safe room. Its purpose was never discovered as the team was teleported away immediately after finding it.",
        firstAppearanceEpisode: 20,
        lastAppearanceEpisode: 20
    },
    {
        name: "Liquid Pain",
        description: "A mysterious, presumably hostile item used by one player to kill another during the escape from the circus tent, highlighting the internal friction within the group.",
        firstAppearanceEpisode: 21,
        lastAppearanceEpisode: 21
    },
    {
        name: "Rocky Road Ice Cream",
        description: "The first item the team had to craft for the troll's scavenger hunt in the Endless Shopping Mall. The result was a lumpy, melted-looking concoction.",
        firstAppearanceEpisode: 24,
        lastAppearanceEpisode: 31
    },
    {
        name: "Bloodless's Manifesto",
        description: "A series of books found in the mall's bookstore, written by Bloodless herself. They revealed her motive for trapping the team: to prevent them from creating and uploading their videos.",
        firstAppearanceEpisode: 25,
        lastAppearanceEpisode: 25
    },
    {
        name: "Key 01 & Key 02",
        description: "Two of the three keys required to escape the modern complex. They were found in chests on the rooftop terrace after a chaotic ambush.",
        firstAppearanceEpisode: 28,
        lastAppearanceEpisode: 28
    },
    {
        name: "Troll Quest Items",
        description: "A bizarre collection of items needed for the scavenger hunt: a Diamond Block, Rocky Road, a flavored candy bar, a crayon candle, a bucket of purified water, and Almond Water. They were delivered to Lando the Troll in the poolrooms.",
        firstAppearanceEpisode: 29,
        lastAppearanceEpisode: 31
    },
];

export const KEY_ITEMS_DATA: KeyItem[] = [...KEY_ITEMS_DATA_S1, ...KEY_ITEMS_DATA_S2];
