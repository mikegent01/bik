// FIX: Corrected import path for types to './types' to match the flat project structure.
import { BestiaryEntry } from './types';
import { BESTIARY_DATA_S2 } from './bestiary.s2';
import { BESTIARY_DATA_S3 } from './bestiary.s3';
import { BESTIARY_DATA_S4 } from './bestiary.s4';

const BESTIARY_DATA_S1: BestiaryEntry[] = [
    {
        name: "Mega X Gunners",
        description: "Standard, heavily-armed soldiers of the Mega X Empire. They serve as the primary military opposition and are encountered frequently as guards and ambushers.",
        firstAppearanceEpisode: 1,
        lastAppearanceEpisode: 27,
        type: 'Humanoid'
    },
    {
        name: "Adela Ponce (Mouthless Figure)",
        description: "A strange, mouthless woman encountered in the early levels of the backrooms. She possessed strange knowledge and was a source of early exposition and mystery.",
        firstAppearanceEpisode: 3,
        lastAppearanceEpisode: 3,
        type: 'Anomaly'
    },
    {
        name: "The 'Bugs'",
        description: "A swarm of unidentified creatures that threatened the group in the early labyrinth, forcing them to descend deeper through a 'door to Darkness'.",
        firstAppearanceEpisode: 3,
        lastAppearanceEpisode: 3,
        type: 'Monster'
    },
    {
        name: "Skin-Takers / 'A Bunch of Skin'",
        description: "Hostile entities that appear as shambling collections of skin. They ambushed the team in the FNAF Zone, spawning in large numbers.",
        firstAppearanceEpisode: 6,
        lastAppearanceEpisode: 9,
        type: 'Monster'
    },
    {
        name: "Semi-Transparent Red Figure",
        description: "A ghostly, red creature that attacked Mike and Kymar in the industrial zone, inflicting blindness and withering effects before vanishing.",
        firstAppearanceEpisode: 10,
        lastAppearanceEpisode: 10,
        type: 'Anomaly'
    },
    {
        name: "Smilers",
        description: "Creatures that lurk in the near-total darkness of Level 6. Mentioned by the Scientist as a primary threat in the dark.",
        firstAppearanceEpisode: 13,
        lastAppearanceEpisode: 13,
        type: 'Monster'
    },
    {
        name: "Giant Spiders",
        description: "Massive arachnids encountered in Level 6 and the Ravine of Slaughter. They are highly aggressive, emerging from walls and swarming in large numbers.",
        firstAppearanceEpisode: 13,
        lastAppearanceEpisode: 20,
        type: 'Monster'
    },
    {
        name: "Human Face Dog Creatures",
        description: "Horrifying entities mentioned by the Scientist in the Snack Rooms. Their presence is a constant, unseen threat.",
        firstAppearanceEpisode: 14,
        lastAppearanceEpisode: 14,
        type: 'Monster'
    },
    {
        name: "Howler",
        description: "A deadly new type of creature encountered in the Ravine of Slaughter. Their specific abilities are unknown, but they contributed to the team's heavy losses.",
        firstAppearanceEpisode: 20,
        lastAppearanceEpisode: 22,
        type: 'Monster'
    },
     {
        name: "Mega X Royalty",
        description: "A powerful, high-ranking member of the Mega X forces, encountered in the Surreal Circus Village. More formidable than standard guards.",
        firstAppearanceEpisode: 21,
        lastAppearanceEpisode: 21,
        type: 'Humanoid'
    },
    {
        name: "Gigantic Clown Boss",
        description: "A massive clown that served as the boss of the Grand Circus Tent. It fought the team on a lava-surrounded stage, aided by numerous minions.",
        firstAppearanceEpisode: 21,
        lastAppearanceEpisode: 21,
        type: 'Monster'
    },
    {
        name: "Pink Cat-Man",
        description: "A hostile, pink-clad character resembling Mega Man but with cat ears. Encountered in the Grand Library, he was quickly dispatched by Kymar with a grenade launcher.",
        firstAppearanceEpisode: 27,
        lastAppearanceEpisode: 27,
        type: 'Humanoid'
    },
    {
        name: "Mega X Royal Guard",
        description: "An elite, heavily armed Mega X soldier. More formidable than standard gunners, they have ambushed the team on the rooftop terrace and the bridge to the floating city.",
        firstAppearanceEpisode: 28,
        lastAppearanceEpisode: 29,
        type: 'Humanoid'
    },
    {
        name: "Mega X Fish Soldier",
        description: "A new type of Mega X soldier encountered in the warzone ruins after the team escapes the backrooms. One was found stuck in a pit.",
        firstAppearanceEpisode: 32,
        lastAppearanceEpisode: 32,
        type: 'Humanoid'
    },
];

export const BESTIARY_DATA: BestiaryEntry[] = [...BESTIARY_DATA_S1, ...BESTIARY_DATA_S2, ...BESTIARY_DATA_S3, ...BESTIARY_DATA_S4];