import React from 'react';
// FIX: Corrected import path for types to './types' to match the flat project structure.
import { TimelineEvent } from './types';

const iconClass = "h-6 w-6 text-slate-300";

export const TIMELINE_DATA_EP1_10: TimelineEvent[] = [
  {
    title: "Prologue: The Board Meeting Hijacking",
    description: "Before the events of the campaign, a corporate board meeting for Mega X's birthday is hijacked by the villainous Bloodless. After threatening attendees with bombs, she is comically defeated by 'break' (Grape) with potent grape alcohol, establishing a bitter rivalry that will have dire consequences.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m6.75 3v6s0 4.5-4.5 4.5S12 18 12 18H3" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
      </svg>
    ),
    episode: 0,
    date: "October 5, 2020",
    category: 'Lore',
  },
  {
    title: "I. The Vengeance Mission and Infiltration",
    description: "The consequences of that meeting come to a head as the group, now seeking vengeance, launches an assault on Mega X's castle. Aided by their insider, Rose, they begin with a stealthy infiltration, only to abandon it for a loud, chaotic attack.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 4.5h1.5m-7.5 3h7.5m-7.5 3h7.5m3-13.5 3-3m0 0 3 3m-3-3v12.75A1.5 1.5 0 0 1 16.5 21h-9a1.5 1.5 0 0 1-1.5-1.5V7.5a1.5 1.5 0 0 1 1.5-1.5h3.75m-3.75 0h3.75M9 3.75h3.75" />
      </svg>
    ),
    episode: 1,
    date: "October 15, 2020",
    category: 'Mission',
  },
  {
    title: "II. The Rescue of No One",
    description: "Their explosive entrance continues inside, where they use TNT to blast through walls and rescue a mysterious prisoner known only as 'No One.' The rescue triggers a full-scale alarm, forcing a desperate fight through an army of guards.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
      </svg>
    ),
    episode: 1,
    date: "October 15, 2020",
    category: 'Combat',
  },
  {
    title: "III. The Sighting and Mega X's Escape",
    description: "Amidst the chaos, Mega X himself is spotted fleeing through a courtyard. The team's primary target is in sight, but their direct assault fails as he manages to escape through a back door before he can be cornered.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    episode: 2,
    date: "October 15, 2020",
    category: 'Mission',
  },
  {
    title: "IV. The Climax: Shifting Focus to the Ship",
    description: "Thwarted but not defeated, the team pursues their target to a nearby ship. They find his associate, 'Bloodless,' unconscious and decide to prevent Mega X's return by rigging the vessel to explode, taking her loot first.",
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 3.75 3.75 0 0 0-7.493-2.131 3.75 3.75 0 0 0-1.484 5.254A3.75 3.75 0 0 0 12 18Z" />
        </svg>
    ),
    episode: 2,
    date: "October 15, 2020",
    category: 'Climax',
  },
  {
    title: "V. Abrupt Transfer and Initial Confusion",
    description: "Their victory is short-lived. The team is abruptly transported to a bizarre, looping environment with a taunting message. They realize Bloodless somehow survived and has trapped them in a prison, turning their mission of vengeance into one of survival.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.691v4.992" />
      </svg>
    ),
    episode: 3,
    date: "October 16, 2020",
    category: 'Betrayal',
  },
  {
    title: "VI. Survival Objectives and Resource Conflict",
    description: "With their goals now shifted to survival, the group must find an exit while staying together. The scarcity of resources immediately creates friction, with arguments breaking out over bullets and the dwindling water supply.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
    ),
    episode: 3,
    date: "October 16, 2020",
    category: 'Character',
  },
  {
    title: "VII. Encountering Strange Phenomena",
    description: "The new reality of the backrooms presents itself through bizarre events: a statue vanishes after a 'tribute,' strange trades are made, and the constant threat of monsters spawning keeps them on edge, forcing them to stay on the move.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    episode: 3,
    date: "October 17, 2020",
    category: 'Exploration',
  },
  {
    title: "VIII. New Threats and Intelligence",
    description: "Their search for answers leads them to 'Adela Ponce,' a mouthless figure with strange knowledge, and a book of research papers titled 'bloodlust.' The discovery solidifies their new objective: find Bloodless's lair within the labyrinth.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6-2.292m0 0V3.75m0 16.5" />
      </svg>
    ),
    episode: 3,
    date: "October 18, 2020",
    category: 'Discovery',
  },
  {
    title: "IX. Grape's Leadership and The Descent",
    description: "Rallying behind Grape as their melee leader, the group confronts an approaching swarm of 'bugs.' With no other path forward, they make a fateful decision to descend deeper through a 'door to Darkness' to continue their quest.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    episode: 3,
    date: "October 18, 2020",
    category: 'Combat',
  },
  {
    title: "X. Descent into the Collapsing Labyrinth",
    description: "The descent takes them into a moldy, red-velvet labyrinth that is actively collapsing. They realize it's a deathtrap, forcing constant movement and leading to a member getting separated almost immediately.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
    episode: 4,
    date: "October 19, 2020",
    category: 'Exploration',
  },
  {
    title: "XI. The Search for Grape and Internal Conflict",
    description: "After tracking down the disoriented Grape, old tensions resurface over a past bad weapon trade, exacerbated by the dwindling water supply. Grape's unreliable navigation continues as he falls into a deeper pit, further fragmenting the group.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
      </svg>
    ),
    episode: 4,
    date: "October 19, 2020",
    category: 'Character',
  },
  {
    title: "XII. Antagonist Clues and Final Push",
    description: "A major clue appears with the discovery of a safe marked 'BNR'—confirming Bloodless's presence. Just as an exit is spotted, the episode ends in a frantic rush as enemies close in and Grape falls into yet another hole.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6A2.25 2.25 0 0 0 5.25 5.25v3.75m10.5 0v3.75m-10.5-3.75v3.75m10.5 0v3.75A2.25 2.25 0 0 1 13.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m10.5 0-3-3m-3 3 3-3m-3-3.75 3 3m-3-3-3 3" />
      </svg>
    ),
    episode: 4,
    date: "October 19, 2020",
    category: 'Discovery',
  },
  {
    title: "XIII. Dr. Valeneria's War Announcement",
    description: "The team's isolated struggle is suddenly put into a wider context by a formal news broadcast from Dr. Valeneria, announcing that Marine forces have declared war on the Mega X Empire, expecting a swift victory.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.136 12.006a8.25 8.25 0 0 1 13.728 0M1.984 8.974a12 12 0 0 1 20.032 0M12 18.75a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-1.5 0v-.008a.75.75 0 0 1 .75-.75Z" />
      </svg>
    ),
    episode: 5,
    date: "October 20, 2020",
    category: 'Lore',
  },
  {
    title: "XIV. Plot Shift & The Endless Loop",
    description: "Unaware of the war outside, the team's objective narrows again to simply escaping the labyrinth. They traverse corridors explicitly linked to Bloodless, only to find themselves back at their starting point after mining through a wall, trapped in a loop.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.691v4.992" />
      </svg>
    ),
    episode: 5,
    date: "October 20, 2020",
    category: 'Exploration',
  },
  {
    title: "XV. Navigating New Territory",
    description: "Led by Grape, the group continues to prioritize staying together. They finally break the loop by moving from the familiar textures of the labyrinth towards a new 'pink feminine Peach' area, though they express a desire to return to simpler times of direct combat.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    episode: 5,
    date: "October 21, 2020",
    category: 'Exploration',
  },
  {
    title: "XVI. The Violent Climax",
    description: "As the group advances, the fragile peace is shattered. A moment of thanks between two characters is immediately followed by a violent outburst: 'oh you killed me,' leaving the attacker and victim unidentified in a shocking cliffhanger.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
    episode: 5,
    date: "October 21, 2020",
    category: 'Betrayal',
  },
  {
    title: "XVII. Entering Level 1",
    description: "Reeling from the internal betrayal, the group enters a new, creepier level with functional lights. The unsettling environment is inhabited by other people, referred to ominously as 'researchers' and 'employees.'",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      </svg>
    ),
    episode: 6,
    date: "October 22, 2020",
    category: 'Exploration',
  },
  {
    title: "XVIII. Gaining an Ally",
    description: "Here they encounter a suspicious woman who fears they are 'skin takers.' To gain her trust, they offer her a button made of stone scraps. She joins them, though the tense encounter is marred by Mike accidentally attacking her.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
      </svg>
    ),
    episode: 6,
    date: "October 22, 2020",
    category: 'Character',
  },
  {
    title: "XIX. Torch Conservation Strategy",
    description: "With resources still a primary concern, Mike (the 'torch guy') devises a new strategy: he places torches to light the way, and another member picks them up from behind, ensuring they can be reused as they press deeper.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h18m-7.5-12L21 9m0 0L16.5 4.5M21 9H3" />
      </svg>
    ),
    episode: 6,
    date: "October 22, 2020",
    category: 'Exploration',
  },
  {
    title: "XX. Into Level 2: New Horrors",
    description: "This strategy becomes essential as they enter Level 2, described as 'one hell on to the next.' They navigate a split path, pushing forward as they are beset by new threats, including the sound of 'bees' and a disorienting growling.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
    ),
    episode: 8,
    date: "October 24, 2020",
    category: 'Exploration',
  },
  {
    title: "XXI. Separation and Dwindling Hope",
    description: "Amidst the auditory chaos, Mike and Rose get stuck and separated from Grape. Morale plummets as Mike, the designated 'water man,' announces their supply is down to a mere five portions, raising the stakes of their survival.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
    episode: 8,
    date: "October 24, 2020",
    category: 'Character',
  },
  {
    title: "XXII. Fragile Reunion and a Pause",
    description: "Mike carefully directs Grape back to their location, successfully reuniting the team. He comforts a distressed Rose, and they agree to pause their exploration after clearing the level. However, the episode concludes ominously with the hum of ventilation systems.",
    icon: (
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    episode: 8,
    date: "October 24, 2020",
    category: 'Character',
  },
  {
    title: "XXIII. Into the FNAF Zone",
    description: "The ventilation sounds lead the group into a new, darker level that strongly resembles the game 'Five Nights at Freddy's,' complete with a security desk. They find a 'box of goodies' but the unsettling environment puts everyone on edge.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
    ),
    episode: 9,
    date: "October 25, 2020",
    category: 'Exploration',
  },
  {
    title: "XXIV. Rose's Betrayal Revealed",
    description: "As they discuss giving armor to Rose, her past is brought up. The revelation that she 'betrayed Mega X' causes Mike to panic, questioning their alliance and refusing to arm her, creating a deep rift in the team's trust.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
      </svg>
    ),
    episode: 9,
    date: "October 25, 2020",
    category: 'Betrayal',
  },
  {
    title: "XXV. The Onslaught of Skin",
    description: "The tension culminates as they realize Mike is the only one with ammo. The sound of a 'party goer' signals imminent danger, followed by a horrific ambush as 'a bunch of skin' begins spawning all around them.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
    episode: 9,
    date: "October 25, 2020",
    category: 'Combat',
  },
  {
    title: "XXVI. Navigating the Industrial Zone",
    description: "Having survived the onslaught, a now-separated Mike and Kymar search a creepy, industrial building for a missing friend. The unsettling buzzing sound and dark corridors keep them on high alert.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m6.75 3v6s0 4.5-4.5 4.5S12 18 12 18H3" />
      </svg>
    ),
    episode: 10,
    date: "October 26, 2020",
    category: 'Exploration',
  },
  {
    title: "XXVII. First Encounter & Lore",
    description: "Their search is interrupted by a semi-transparent red figure that attacks, inflicting blindness and withering effects. The encounter confirms they are not alone and that the threats are becoming more supernatural.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
         <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.588 8.125a18.37 18.37 0 0 1-5.462 2.934c-.54.21-1.15.21-1.69 0a18.37 18.37 0 0 1-5.462-2.934A7.5 7.5 0 0 1 4.5 10.5a7.5 7.5 0 0 1 3.364-6.257Z" />
         <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
      </svg>
    ),
    episode: 10,
    date: "October 26, 2020",
    category: 'Combat',
  },
  {
    title: "XXVIII. Monster Ambush",
    description: "The tall red monster ambushes them again. Mike expends his ammo to make it vanish and gets a restock from Kymar, but they continue to face jump scares in their desperate search for an exit from the hostile zone.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6A2.25 2.25 0 0 0 5.25 5.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
      </svg>
    ),
    episode: 10,
    date: "October 26, 2020",
    category: 'Combat',
  }
];