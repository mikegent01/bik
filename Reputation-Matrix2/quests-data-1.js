// This file aggregates quest data from modular files.
import { MAIN_QUESTS } from './quests/quests-main.js';
import { MYSTERY_QUESTS } from './quests/quests-mysteries.js';
import { ARCHIE_QUESTS } from './quests/quests-archie.js';
import { MARKOP_QUESTS } from './quests/quests-markop.js';
import { HUMPIK_QUESTS } from './quests/quests-humpik.js';
import { BOWSER_QUESTS } from './quests/quests-bowser.js';
import { REMI_QUESTS } from './quests/quests-remi.js';
import { TOADS_QUESTS } from './quests/quests-toads.js';
import { WORLD_QUESTS } from './quests/quests-world.js';
import { GUILDS_QUESTS } from './quests/quests-guilds.js';
import { REQUESTS } from './quests/quests-requests.js';
import { NEW_MK_QUESTS } from './quests/quests-mushroom-kingdom-new.js';
import { NEW_MIDLANDS_QUESTS } from './quests/quests-midlands-new.js';
import { KIVOTOS_QUESTS } from './quests/quests-kivotos.js';
import { DK_QUESTS } from './quests/quests-dk.js';


export const QUEST_DATA = {
    ...MAIN_QUESTS,
    ...MYSTERY_QUESTS,
    ...ARCHIE_QUESTS,
    ...MARKOP_QUESTS,
    ...HUMPIK_QUESTS,
    ...BOWSER_QUESTS,
    ...REMI_QUESTS,
    ...TOADS_QUESTS,
    ...WORLD_QUESTS,
    ...GUILDS_QUESTS,
    ...REQUESTS,
    ...NEW_MK_QUESTS,
    ...NEW_MIDLANDS_QUESTS,
    ...KIVOTOS_QUESTS,
    ...DK_QUESTS,
};