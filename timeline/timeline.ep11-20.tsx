import React from 'react';
// FIX: Corrected import path for types to './types' to match the flat project structure.
import { TimelineEvent } from './types';

const iconClass = "h-6 w-6 text-slate-300";

export const TIMELINE_DATA_EP11_20: TimelineEvent[] = [
    {
        title: "XXIX. Level 4: The Office",
        description: "The search for an exit leads Mike to a new level resembling an office building. Believing himself to be the sole survivor after Grape was 'taken,' he is overcome with despair, thinking his entire team is dead.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m6.75 3v6s0 4.5-4.5 4.5S12 18 12 18H3" />
          </svg>
        ),
        episode: 11,
        date: "October 27, 2020",
        category: 'Exploration',
    },
    {
        title: "XXX. The Scientist Encounter",
        description: "His solitude is broken by the discovery of a camp of people in hazmat suits claiming to be scientists. Highly suspicious, he nevertheless accepts 'pajama' armor and a map from their storage, hoping for a guide.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
        ),
        episode: 11,
        date: "October 27, 2020",
        category: 'Character',
    },
    {
        title: "XXXI. The Lost Guide",
        description: "A scientist offers to guide Mike, but his incompetence quickly becomes clear as he gets them both lost. Their confused wandering eventually leads them to an elevator, their only clear path forward.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5M15 15l5.25 5.25" />
            </svg>
        ),
        episode: 11,
        date: "October 27, 2020",
        category: 'Exploration',
    },
    {
        title: "XXXII. The Red Carpet",
        description: "The elevator takes them 'back up' to an area that feels like a 'big time event,' complete with a red carpet. The scientist guide absurdly blames his forgetfulness on hypothermia from the cold, further eroding Mike's trust.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.321h5.365c.507 0 .713.663.321.988l-4.34 3.158a.563.563 0 0 0-.182.635l1.634 4.83a.563.563 0 0 1-.84.62l-4.106-3.182a.563.563 0 0 0-.668 0L5.43 19.34a.563.563 0 0 1-.84-.62l1.634-4.83a.563.563 0 0 0-.182-.635L2.003 9.92a.563.563 0 0 1 .321-.988h5.365a.563.563 0 0 0 .475-.321L11.48 3.5Z" />
            </svg>
        ),
        episode: 12,
        date: "October 28, 2020",
        category: 'Exploration',
    },
    {
        title: "XXXIII. The Opera and the Loot",
        description: "A strange, operatic monologue echoes through the hall. Mike dismisses the eerie performance and focuses on survival, noting chests and containers in the corners that may hold desperately needed supplies.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a8.967 8.967 0 0 1-2.312 6.022m0 0A9.009 9.009 0 0 1 12 21a9.009 9.009 0 0 1-6.688-2.722m0 0a9 9 0 0 1-2.278-6.022V11.25a9 9 0 0 1 9-9 9 9 0 0 1 9 9Zm-18 0h18" />
            </svg>
        ),
        episode: 12,
        date: "October 28, 2020",
        category: 'Discovery',
    },
    {
        title: "XXXIV. The Door to Darkness",
        description: "Their exploration leads them to Level 6, a disorienting place of near-total darkness where music causes physical pain. The scientist guide confirms creatures lurk in the shadows, making it one of the most dangerous levels yet.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m9-9H3" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 3.75 18 6m-5.25 12 2.25 2.25M3.75 15.75 6 18m12-5.25 2.25 2.25M3.75 8.25 6 6m12 5.25-2.25 2.25M6 8.25l-2.25-2.25M6 15.75 3.75 18" />
            </svg>
        ),
        episode: 13,
        date: "October 29, 2020",
        category: 'Exploration',
    },
    {
        title: "XXXV. The Return of Rose",
        description: "In a stroke of incredible luck, Rose—missing and presumed dead since the FNAF Zone ambush—is found alive, wandering atop a massive, bizarre tree. Her return brings the team's total count to five, reigniting a flicker of hope.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.742-.584M18 18.72a9.094 9.094 0 0 1-3.742-.584m-10.5 0a9.094 9.094 0 0 1 3.742-.584M12 18.135a9.094 9.094 0 0 1 0-11.27m0 11.27a9.094 9.094 0 0 0 0-11.27m0 0a9.094 9.094 0 0 0-3.742-.584M5.258 6.865a9.094 9.094 0 0 1 0 11.27m0 0a9.094 9.094 0 0 1-3.742.584M18.742 6.865a9.094 9.094 0 0 0-3.742-.584M12 5.25a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-1.5 0v-.008a.75.75 0 0 1 .75-.75Zm.75 6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Zm-6.75-2.25a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 1.5 0v-2.25Zm12 0a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 1.5 0v-2.25Z" />
            </svg>
        ),
        episode: 13,
        date: "October 29, 2020",
        category: 'Character',
    },
    {
        title: "XXXVI. The Coward's Confession",
        description: "The scientist's incompetence is fully revealed as he confesses he is a 'coward' who has never actually explored the Backrooms. He panics over a discovery, fearing he'll lose his doctorate, proving he is of no real help.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6-2.292m0 0V3.75m0 16.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 7.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0v-1.5Z" />
            </svg>
        ),
        episode: 13,
        date: "October 29, 2020",
        category: 'Character',
    },
    {
        title: "XXXVII. The Snack Rooms",
        description: "The team presses on into a new area with dangerously slippery floors, a bar, and snack vending machines. The bizarre environment is littered with weak glass and an excess of fire extinguishers, suggesting it's a hazardous, unstable level.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l.383-1.437M7.5 14.25L5.106 5.165A2.25 2.25 0 0 0 2.868 3H2.25m5.25 9h11.218M15 15.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
        ),
        episode: 14,
        date: "October 30, 2020",
        category: 'Exploration',
    },
    {
        title: "XXXVIII. New Horrors and a Ghostly Presence",
        description: "The scientist identifies a new threat: horrifying 'human face dog creatures.' Notes found nearby mention a ghost and other dangerous entities, while a mysterious pursuer referred to as 'she' forces the group to keep moving.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.588 8.125a18.37 18.37 0 0 1-5.462 2.934c-.54.21-1.15.21-1.69 0a18.37 18.37 0 0 1-5.462-2.934A7.5 7.5 0 0 1 4.5 10.5a7.5 7.5 0 0 1 3.364-6.257Z" />
                 <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
            </svg>
        ),
        episode: 14,
        date: "October 30, 2020",
        category: 'Discovery',
    },
    {
        title: "XXXIX. The Scientist's Exit",
        description: "Team dynamics shift again as Grape falls asleep. Mike shoots the scientist in the arm for unclear reasons, and shortly after, the scientist vanishes, leaving the group without their reluctant, and useless, guide.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
            </svg>
        ),
        episode: 14,
        date: "October 30, 2020",
        category: 'Character',
    },
    {
        title: "XL. The Endless Hallway",
        description: "Now on their own, the team finds themselves in a deceptively 'nice hallway' that feels like an endless loop. Haunted by moths and the dog-like creatures, the psychological toll begins to show as Mike expresses a desire to retreat.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.691v4.992" />
            </svg>
        ),
        episode: 15,
        date: "November 1, 2020",
        category: 'Exploration',
    },
    {
        title: "XLI. The Teleporter Dilemma",
        description: "Their only potential escape from the loop is a high-risk, untested teleporter. They learn previous versions had severe negative side effects and that it's intended only for dire, life-or-death scenarios.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
        ),
        episode: 15,
        date: "November 1, 2020",
        category: 'Lore',
    },
    {
        title: "XLII. A Dangerous Gamble",
        description: "Despite the risks, the team decides to use the teleporter while not in immediate danger, reasoning that waiting for a crisis would be too late if it fails. The decision marks a significant gamble for their potential escape.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 0 1 0 8.488M7.756 14.25a4.5 4.5 0 0 1 0-8.488M14.25 14.25 18 18m-3.75-3.75a4.5 4.5 0 0 0-8.488 0M18 6 6 18" />
            </svg>
        ),
        episode: 15,
        date: "November 1, 2020",
        category: 'Mission',
    },
    {
        title: "XLIII. The Titanic Anomaly",
        description: "The gamble pays off, but transports them to an even stranger location: Level 10, a freezing ocean where they see the impossible—the RMS Titanic. This surreal discovery confirms the laws of reality are completely broken here.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c-4.97 0-9-4.03-9-9S7.03 3 12 3s9 4.03 9 9-4.03 9-9 9Z" />
            </svg>
        ),
        episode: 16,
        date: "November 2, 2020",
        category: 'Discovery',
      },
      {
        title: "XLIV. Enemies on Board",
        description: "After crafting boats to reach the ship, they encounter 'Mega Xers.' They reveal a crucial piece of lore: they were trapped here by Bloodless, showcasing her immense power and control over the Backrooms.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.742-.584M18 18.72a9.094 9.094 0 0 1-3.742-.584m-10.5 0a9.094 9.094 0 0 1 3.742-.584M12 18.135a9.094 9.094 0 0 1 0-11.27m0 11.27a9.094 9.094 0 0 0 0-11.27m0 0a9.094 9.094 0 0 0-3.742-.584M5.258 6.865a9.094 9.094 0 0 1 0 11.27m0 0a9.094 9.094 0 0 1-3.742.584M18.742 6.865a9.094 9.094 0 0 0-3.742-.584M12 5.25a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-1.5 0v-.008a.75.75 0 0 1 .75-.75Zm.75 6a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0v-6Zm-6.75-2.25a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 1.5 0v-2.25Zm12 0a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 1.5 0v-2.25Z" />
            </svg>
        ),
        episode: 16,
        date: "November 2, 2020",
        category: 'Lore',
      },
      {
        title: "XLV. Lost Again",
        description: "While exploring the flooded, derelict ship, the team is thrown into chaos once more. Amidst encounters with guards and observations of strange physics, both Rose and Grape disappear again, leaving the remaining members scattered.",
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
        ),
        episode: 17,
        date: "November 3, 2020",
        category: 'Character',
      },
      {
        title: "XLVI. Desperate Flight & God's Pursuit",
        description: "Having lost their only way off the Titanic, the remaining team members are forced into a desperate flight through a hazardous gauntlet of water and clay, pursued by an unseen entity ominously referred to as 'God'.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.75 8.25 10.5 12.75 17.25 17.25 10.5 12.75 3.75Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.75 15 2.25 17.25 3.75 19.5 2.25 21.75 3.75 24 2.25" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 17.25 15 18.75 17.25 17.25 19.5 18.75 21.75 17.25 24 18.75" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 10.5 6 12 3.75 10.5 1.5 12 0 10.5" />
            </svg>
        ),
        episode: 18,
        date: "November 3, 2020",
        category: 'Exploration',
      },
      {
        title: "XLVII. The Spider Gauntlet",
        description: "The flight leads them into a new nightmare. Giant spiders pour out of the walls in a ferocious onslaught, and Mike is critically injured, left with only one heart.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
        ),
        episode: 18,
        date: "November 3, 2020",
        category: 'Combat',
      },
      {
        title: "XLVIII. Rescue of Doctor Valeneria",
        description: "The team discovers a locked door, which Mike breaks open with a pickaxe. Inside, they find a trapped and terrified Doctor Valeneria—the news reporter from the outside world—and rescue him.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75M3.75 18h16.5M12 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
        ),
        episode: 18,
        date: "November 3, 2020",
        category: 'Character',
      },
      {
        title: "XLIX. Recovery and New Dangers",
        description: "Mike recovers from the spider attack using 'Jamba Juice.' With their new member, the group observes more anomalies, including monsters falling from the sky and a 'big lanky man,' which they wisely avoid.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.981V18Z" />
            </svg>
        ),
        episode: 19,
        date: "November 4, 2020",
        category: 'Exploration',
      },
      {
        title: "L. Doctor Valeneria's Lore",
        description: "The newly rescued Doctor Valeneria explains his survival expertise comes from researching in the Amazon. He is writing a book about the Backrooms, believing it will make him rich, adding a layer of comic relief to their grim situation.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6-2.292m0 0V3.75m0 16.5" />
            </svg>
        ),
        episode: 19,
        date: "November 4, 2020",
        category: 'Lore',
      },
      {
        title: "LI. The Ascent",
        description: "With their path blocked, the group's new goal is to reach the 'surface.' Mike utilizes his massive supply of '10 stacks of ladders' to begin building upwards, hoping to escape the darkness from below.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
        ),
        episode: 19,
        date: "November 4, 2020",
        category: 'Exploration',
      },
      {
        title: "LII. Escape From Level !",
        description: "After a team member sacrifices a phone in a failed attempt to fix a broken radio, the group locates a ladder leading to a roof. They use it to successfully escape the dark Level !, emerging into a new, unknown area.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5M15 15l5.25 5.25" />
            </svg>
        ),
        episode: 19,
        date: "November 4, 2020",
        category: 'Climax',
      },
      {
        title: "LIII. The Hallway Ambush",
        description: "Their relief is brief as they enter a modern, white and blue hallway only to be ambushed by red, spider-like monsters emerging from the walls. Doctor Valeneria (Matt) is critically injured in the fight.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75v4.5m0-4.5h-4.5m4.5 0L15 9m5.25 11.25v-4.5m0 4.5h-4.5m4.5 0L15 15" />
            </svg>
        ),
        episode: 20,
        date: "November 5, 2020",
        category: 'Combat',
      },
      {
        title: "LIV. Poison Water & An Aqua Key",
        description: "Fleeing into a safe room, the team discovers one of two water pools is poisonous. A hidden chest yields an 'Aqua Key' just before they are abruptly teleported away, the key's purpose a mystery.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
            </svg>
        ),
        episode: 20,
        date: "November 5, 2020",
        category: 'Discovery',
      },
      {
        title: "LV. The Ravine of Slaughter",
        description: "They are transported to a dark ravine swarming with giant spiders, skeletons, moths, and deadly new 'Howler' monsters. The team is overwhelmed, and multiple players are slain in the assault.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
        ),
        episode: 20,
        date: "November 5, 2020",
        category: 'Combat',
      },
      {
        title: "LVI. Lando's Bizarre Shop",
        description: "After escaping the ravine by building upwards, the survivors find a bizarre, hidden shop run by 'Lando,' who sells absurd items like 'Fried Air' for potatoes and hugs, introducing a new, surreal element to their journey.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.25a.75.75 0 0 1-.75-.75V5.25c0-.414.336-.75.75-.75h19.5c.414 0 .75.336.75.75v14.25a.75.75 0 0 1-.75-.75h-5.25m-4.5 0H9.75" />
            </svg>
        ),
        episode: 20,
        date: "November 5, 2020",
        category: 'Exploration',
      },
      {
        title: "LVII. The Pool Room",
        description: "A player violates the shop's 'no firearms' rule and is kicked out. The remaining members proceed into the next area: a large, tiled, water-filled room, ending the episode on another cliffhanger.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
        ),
        episode: 20,
        date: "November 5, 2020",
        category: 'Exploration',
      },
];
