
import React from 'react';
import { 
    EpisodeSummary, 
    TimelineEvent,
    Character,
    CharacterFaction,
    Location,
    BestiaryEntry,
    KeyItem,
    StoryArc
} from './types';

const iconClass = "h-6 w-6 text-slate-300";

// --- EPISODES S2 ---
export const EPISODES_DATA_S2: EpisodeSummary[] = [
    { episode: 33, title: "The Snowy Expedition", summary: "The team arrives in a snowy, ruined city, finds weapons in an old shop, and is immediately ambushed and captured by a new faction, 'The Authority.' A chaotic prison break attempt results in a player's death and a desperate escape." },
    { episode: 34, title: "The Comically Large Missile", summary: "After clearing out the remaining villagers, the team uses a massive, faulty missile that obliterates the entire city—and them. In the aftermath, they discover a lone, powerful survivor from the 'Mega X Army' and investigate a nearby secret facility." },
];

// --- TIMELINE S2 ---
export const TIMELINE_DATA_S2: TimelineEvent[] = [
    {
        title: "XCV. A New Season, A New World",
        description: "Season 2 begins with the team driving through a snowy, post-apocalyptic city. They are immediately beset by hostile mobs, forcing them to seek weapons to survive in the new, hostile environment.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c-4.97 0-9-4.03-9-9S7.03 3 12 3s9 4.03 9 9-4.03 9-9 9Z" />
            </svg>
        ),
        episode: 33
    },
    {
        title: "XCVI. The Weapons Cache & The Trap",
        description: "The team finds a 'Weapons Smith' shop and equips themselves with guns and ammo. Their discovery is short-lived, as a public announcement declares 'INTRUDERS SPOTTED,' and armored guards immediately surround the building.",
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
        ),
        episode: 33
    },
    {
        title: "XCVII. Capture & Imprisonment",
        description: "After a tense standoff, Kymar ('Ghastly_Cat') is confronted by the guard leader, 'AdmiralStewie,' and forced to surrender. The team is captured and led to a prison where another player, 'EighthHalo,' is already being held.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
        ),
        episode: 33
    },
    {
        title: "XCVIII. The Disastrous Prison Break",
        description: "The imprisoned players hatch an escape plan that immediately fails when one player throws a watermelon at the guards. In the ensuing firefight, 'EighthHalo' throws a bomb, killing himself, and a 'RED ALERT' is triggered, plunging the prison into chaos.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 3.75 3.75 0 0 0-7.493-2.131 3.75 3.75 0 0 0-1.484 5.254A3.75 3.75 0 0 0 12 18Z" />
            </svg>
        ),
        episode: 33
    },
    {
        title: "XCIX. The City-Destroying Explosion",
        description: "With a casual attitude towards destruction, EighthHalo uses a 'comically large missile' to clear out the remaining villagers. The faulty explosive obliterates the entire city in a massive crater, killing the players in the blast.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 3.75 3.75 0 0 0-7.493-2.131 3.75 3.75 0 0 0-1.484 5.254A3.75 3.75 0 0 0 12 18Z" />
            </svg>
        ),
        episode: 34
    },
    {
        title: "C. The Aftermath and a Lone Survivor",
        description: "The players respawn in the massive crater where the city once stood. Amidst the ruins, they spot a heavily-armored sole survivor who tanks multiple bullets, identified as a member of the 'Mega X Army'.",
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
        ),
        episode: 34
    },
    {
        title: "CI. The Secret SCP Facility",
        description: "After chaotically repairing their truck, the team investigates a mysterious facility near the crater. They break in and discover it's an SCP Foundation site, battling hostile pink flamingos (SCP-1507) and deadly surgeon crabs (SCP-098) as they search for supplies.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21v-4.5m0 4.5h4.5m-4.5 0L9 15M3.75 3v4.5m0-4.5h4.5m-4.5 0L9 9m12 12v-4.5m0 4.5h-4.5m4.5 0L15 15m6-12v4.5m0-4.5h-4.5m4.5 0L15 9" />
            </svg>
        ),
        episode: 34
    },
];

// --- CHARACTERS S2 ---
export const CHARACTER_DATA_S2: Character[] = [
    {
        name: "EighthHalo",
        description: "A new player character in Season 2 with a penchant for massive explosives. He sacrifices himself with a bomb during a prison break and later uses a 'comically large missile' to obliterate an entire city, showing a casual disregard for collateral damage.",
        faction: CharacterFaction.PROTAGONISTS,
        importance: 2,
        firstAppearanceEpisode: 33,
        lastAppearanceEpisode: 34,
    },
    {
        name: "AdmiralStewie",
        description: "A heavily armored, high-ranking guard of 'The Authority' in the snowy city. He confronts and captures the players after they are discovered in the weapons shop.",
        faction: CharacterFaction.THE_AUTHORITY,
        importance: 2,
        firstAppearanceEpisode: 33,
        lastAppearanceEpisode: 33,
    },
    {
        name: "Mega X Army Soldier",
        description: "A heavily-armored soldier and the sole survivor of the city's destruction. He is incredibly durable, tanking multiple bullets with ease. His presence confirms the continued existence of a 'Mega X Army,' posing a new threat.",
        faction: CharacterFaction.MEGA_X_ARMY,
        importance: 2,
        firstAppearanceEpisode: 34,
        lastAppearanceEpisode: 34,
    },
    {
        name: "El muchacho",
        description: "A new player character seen briefly in a cutscene, riding through a forest. His role in the main story is not yet clear.",
        faction: CharacterFaction.PROTAGONISTS,
        importance: 1,
        firstAppearanceEpisode: 33,
        lastAppearanceEpisode: 33,
    },
    {
        name: "darkphan",
        description: "A mysterious player who appears at the very end of the SCP Facility incident, joining the team after they escape the complex.",
        faction: CharacterFaction.ALLIES,
        importance: 1,
        firstAppearanceEpisode: 34,
        lastAppearanceEpisode: 34,
    },
];

// --- LOCATIONS S2 ---
export const LOCATIONS_DATA_S2: Location[] = [
    {
        id: 'snowy_city',
        name: "Snowy Post-Apocalyptic City",
        description: "The primary setting for the start of Season 2. A ruined, snow-covered city patrolled by hostile mobs and 'The Authority.' It is completely obliterated by a massive missile in Episode 34.",
        firstAppearanceEpisode: 33,
        lastAppearanceEpisode: 34,
    },
    {
        id: 'weapons_shop',
        name: "Weapons Smith Shop",
        description: "A derelict shop in the snowy city where the team finds a cache of guns and ammunition, triggering an alarm that leads to their capture.",
        firstAppearanceEpisode: 33,
        lastAppearanceEpisode: 33,
    },
    {
        id: 'city_prison',
        name: "The City Prison",
        description: "A fortified prison where 'The Authority' holds the players and other villagers captive. It becomes the site of a chaotic and deadly escape attempt.",
        firstAppearanceEpisode: 33,
        lastAppearanceEpisode: 33,
    },
    {
        id: 'the_crater',
        name: "The Crater",
        description: "The massive, smoking crater left behind after EighthHalo's 'comically large missile' completely destroyed the snowy city. The team respawns here and finds a lone survivor.",
        firstAppearanceEpisode: 34,
        lastAppearanceEpisode: 34,
    },
    {
        id: 'secret_facility',
        name: "Secret Facility",
        description: "A mysterious, top-secret building located next to the crater. The team breaks in to find it is a derelict SCP Foundation site, containing hostile anomalies like SCP-1507 (flamingos) and SCP-098 (crabs), and a network of surveillance cameras.",
        firstAppearanceEpisode: 34,
        lastAppearanceEpisode: 34,
    }
];

// --- BESTIARY S2 ---
export const BESTIARY_DATA_S2: BestiaryEntry[] = [
    {
        name: "Snowy Town Mobs",
        description: "Various hostile creatures found in the snowy city, including a pink creature and a large, yeti-like figure. They serve as environmental threats.",
        firstAppearanceEpisode: 33,
        lastAppearanceEpisode: 33,
        type: 'Monster'
    },
    {
        name: "The Authority Guards",
        description: "Well-armed, armored soldiers who patrol the snowy city. They are highly organized and use lethal force to suppress any perceived threats or 'intruders'.",
        firstAppearanceEpisode: 33,
        lastAppearanceEpisode: 33,
        type: 'Humanoid'
    },
    {
        name: "Mega X Army Soldier",
        description: "A heavily-armored soldier who survived the complete destruction of the snowy city. He is incredibly resilient, able to withstand multiple gunshots without issue. His presence confirms a continued threat from Mega X's forces.",
        firstAppearanceEpisode: 34,
        lastAppearanceEpisode: 34,
        type: 'Humanoid'
    },
    {
        name: "Hostile Pink Flamingos (SCP-1507)",
        description: "A flock of aggressive, plastic-like pink flamingos contained within the secret SCP facility. They attack on sight in large numbers.",
        firstAppearanceEpisode: 34,
        lastAppearanceEpisode: 34,
        type: 'Anomaly'
    },
    {
        name: "Surgeon Crabs (SCP-098)",
        description: "Large, red spider-like creatures with razor-sharp legs, found in the flooded containment area of the SCP facility. They are highly aggressive and capable of dismembering their prey.",
        firstAppearanceEpisode: 34,
        lastAppearanceEpisode: 34,
        type: 'Monster'
    },
];

// --- ITEMS S2 ---
export const KEY_ITEMS_DATA_S2: KeyItem[] = [
     {
        name: "Radios",
        description: "The players rediscover they have radios, allowing them to communicate over distances. However, they quickly realize that their enemies might be able to listen in on their conversations.",
        firstAppearanceEpisode: 33,
        lastAppearanceEpisode: 33
    },
    {
        name: "Watermelon (Weaponized)",
        description: "A seemingly harmless watermelon is used as an improvised projectile to instigate a prison riot, kicking off a disastrously chaotic escape attempt.",
        firstAppearanceEpisode: 33,
        lastAppearanceEpisode: 33
    },
    {
        name: "Bomb",
        description: "A powerful explosive used by EighthHalo as a last resort during the prison break. The detonation kills him and causes significant chaos, aiding the other players' escape.",
        firstAppearanceEpisode: 33,
        lastAppearanceEpisode: 33
    },
    {
        name: "Comically Large Missile",
        description: "A massive, faulty explosive used by EighthHalo. Intended to clear out a few villagers, it instead obliterates the entire city and the players in a gigantic explosion, reshaping the landscape.",
        firstAppearanceEpisode: 34,
        lastAppearanceEpisode: 34
    },
    {
        name: "Facility Computer",
        description: "A computer found in the secret facility. When enabled, it provides camera access, suggesting the team is being monitored via a surveillance network.",
        firstAppearanceEpisode: 34,
        lastAppearanceEpisode: 34,
    }
];

// --- STORY ARCS S2 ---
export const STORY_ARCS_DATA_S2: StoryArc[] = [
    {
        title: "The Snowy City & The Prison Break",
        episodeRange: "Episodes 33-34",
        summary: "Season 2 opens in a snowy city controlled by 'The Authority.' After being captured, the team makes a chaotic escape. Their mission to clear the city escalates dramatically when a massive, faulty missile is used, obliterating the entire area and leaving a massive crater. The aftermath reveals a new, powerful enemy from the 'Mega X Army,' and shifts the team's focus to a nearby secret SCP facility filled with dangerous anomalies.",
        characterDevelopments: [
            { characterName: "The Team", development: "Now battle-hardened, their first instinct is to find weapons, but they are outmaneuvered and captured, showing their vulnerability against an organized foe. Their problem-solving escalates to city-wide destruction." },
            { characterName: "EighthHalo", development: "Showcases an affinity for massive, unpredictable explosives and a casual disregard for collateral damage, first with a suicide bomb and then with a city-destroying missile." },
        ]
    }
];