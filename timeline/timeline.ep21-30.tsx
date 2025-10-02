import React from 'react';
// FIX: Corrected import path for types to './types' to match the flat project structure.
import { TimelineEvent } from './types';

const iconClass = "h-6 w-6 text-slate-300";

export const TIMELINE_DATA_EP21_30: TimelineEvent[] = [
    {
        title: "LVIII. The Surreal Circus Village",
        description: "The journey from Lando's shop leads the players to a surreal village dominated by a massive circus tent. The carnival atmosphere is shattered when they are attacked by 'Mega X Guards' and a powerful 'Mega X Royalty' creature.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a8.967 8.967 0 0 1-2.312 6.022m0 0A9.009 9.009 0 0 1 12 21a9.009 9.009 0 0 1-6.688-2.722m0 0a9 9 0 0 1-2.278-6.022V11.25a9 9 0 0 1 9-9 9 9 0 0 1 9 9Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a.75.75 0 0 0 .75-.75V15.75a.75.75 0 0 0-1.5 0v2.25a.75.75 0 0 0 .75.75Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 11.25a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
            </svg>
        ),
        episode: 21,
        date: "November 8, 2020",
        // FIX: Added missing 'category' property.
        category: 'Exploration',
      },
      {
        title: "LIX. The Clown Boss Battle",
        description: "Venturing inside the circus tent, the team confronts a gigantic clown boss on a lava-surrounded stage. The chaotic battle with the boss and its minions results in another player's death, thinning their ranks further.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 3.75 3.75 0 0 0-7.493-2.131 3.75 3.75 0 0 0-1.484 5.254A3.75 3.75 0 0 0 12 18Z" />
            </svg>
        ),
        episode: 21,
        date: "November 8, 2020",
        // FIX: Added missing 'category' property.
        category: 'Combat',
      },
      {
        title: "LX. Escape and Betrayal",
        description: "The survivors flee through a hospital-like ward and circus trailers. The external chaos is matched by internal conflict when one player kills another using a mysterious item called 'Liquid Pain,' fracturing the group's trust.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
        ),
        episode: 21,
        date: "November 8, 2020",
        // FIX: Added missing 'category' property.
        category: 'Betrayal',
      },
      {
        title: "LXI. The Loop Resets",
        description: "The frantic escape leads the team back to a familiar location from a previous adventure. The episode ends as they encounter a new, mysterious figure, realizing they are trapped once again in the surreal prison's loop.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.691v4.992" />
            </svg>
        ),
        episode: 21,
        date: "November 8, 2020",
        // FIX: Added missing 'category' property.
        category: 'Exploration',
      },
      {
        title: "LXII. The Surreal Forest & Failed Navigation",
        description: "The loop shifts, and the team finds themselves separated in a surreal forest with a cyan sky. Doctor Valeneria's 'Titanic Navigation Tool' proves useless, and their reunion is cut short by an ambush and another abrupt teleportation.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a12.022 12.022 0 0 0-5.84-2.56m0 0a12.022 12.022 0 0 1-5.84 2.56m5.84-2.56V4.72a6 6 0 0 1 5.84-2.38m-5.84 2.38a12.022 12.022 0 0 0-5.84 2.56m0 0a6 6 0 0 1-5.84-2.38m11.68 5.14a12.022 12.022 0 0 1-5.84-2.56" />
          </svg>
        ),
        episode: 22,
        date: "November 9, 2020",
        // FIX: Added missing 'category' property.
        category: 'Exploration',
      },
      {
        title: "LXIII. The Second Ravine Slaughter",
        description: "The group is cruelly teleported back into the deadly gray ravine, where they are once again overwhelmed by swarms of monsters. They make a desperate escape by building a pillar out of the pit, suffering more losses.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
        ),
        episode: 22,
        date: "November 9, 2020",
        // FIX: Added missing 'category' property.
        category: 'Combat',
      },
      {
        title: "LXIV. Reunion on the Endless Train",
        description: "Escaping the ravine leads them into an impossibly long train car. In a surprising turn, they are reunited with the entire team, including the long-lost Rose, but find themselves trapped together on a train to nowhere.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5v10.5h-7.5V6.75Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 1.5v4.5m0 12v4.5m-8.25-13.5L12 12.75l8.25-4.5" />
            </svg>
        ),
        episode: 22,
        date: "November 9, 2020",
        // FIX: Added missing 'category' property.
        category: 'Character',
      },
      {
        title: "LXV. Reunion in the Barn & A TNT Escape",
        description: "Meanwhile, Mike and Grape reunite with Kymar, who has returned from a traumatic fall through the backrooms. Trapped in a barn, Grape uses TNT to blast a hole in a wall, revealing a command block teleporter.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 3.75 3.75 0 0 0-7.493-2.131 3.75 3.75 0 0 0-1.484 5.254A3.75 3.75 0 0 0 12 18Z" />
            </svg>
        ),
        episode: 23,
        date: "November 10, 2020",
        // FIX: Added missing 'category' property.
        category: 'Character',
      },
      {
        title: "LXVI. The Ominous Highway Tunnel",
        description: "The teleporter takes them to a long, sterile highway tunnel. Kymar, paranoid from his ordeal, suspiciously questions Mike's actions, highlighting the psychological toll of their imprisonment as they enter a side room marked with a red 'X'.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
            </svg>
        ),
        episode: 23,
        date: "November 10, 2020",
        // FIX: Added missing 'category' property.
        category: 'Exploration',
      },
      {
        title: "LXVII. Trapped in the Train Station",
        description: "The door leads to a dark, modern train station that Kymar recognizes as his last location before getting lost. They find themselves trapped by invisible walls as a train's rumbling grows louder, signaling their fate.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
        ),
        episode: 23,
        date: "November 10, 2020",
        // FIX: Added missing 'category' property.
        category: 'Exploration',
      },
      {
        title: "LXVIII. All Aboard the Mystery Train",
        description: "A red and white train pulls into the station. The group scrambles aboard just as the doors close, finding themselves in the same passenger car as the rest of the team, finally reuniting everyone on the same uncertain journey.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
        ),
        episode: 23,
        date: "November 10, 2020",
        // FIX: Added missing 'category' property.
        category: 'Mission',
      },
      {
        title: "LXIX. The Endless Mall & A New Quest",
        description: "The train journey ends in a vast, empty shopping mall. A new quest materializes: find a 'Cat Girl Potion' and craft 'Rocky Road' for a troll. They explore deserted stores, finding only blank books and mysterious purple arrows.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l.383-1.437M7.5 14.25L5.106 5.165A2.25 2.25 0 0 0 2.868 3H2.25m5.25 9h11.218M15 15.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>
        ),
        episode: 24,
        date: "November 12, 2020",
        // FIX: Added missing 'category' property.
        category: 'Mission',
      },
      {
        title: "LXX. Crafting for a Troll",
        description: "Following the bizarre quest, they find an 'Ice Cube' and a cauldron. They chaotically combine ingredients to craft the lumpy, melted-looking 'Rocky Road,' putting them one step closer to satisfying their unseen tormentor.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
            </svg>
        ),
        episode: 24,
        date: "November 12, 2020",
        // FIX: Added missing 'category' property.
        category: 'Mission',
      },
      {
        title: "LXXI. Bloodless's Manifesto",
        description: "While exploring a bookstore in the mall, the team is ambushed by Mega X Gunners. After the fight, they find books written by Bloodless herself, revealing her motive: she trapped them to stop them from creating and uploading videos.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6-2.292m0 0V3.75m0 16.5" />
            </svg>
        ),
        episode: 25,
        date: "November 13, 2020",
        // FIX: Added missing 'category' property.
        category: 'Discovery',
      },
      {
        title: "LXXII. The False Friend",
        description: "Their quest continues into a medieval marketplace, where the team meets Jeremy, a player in a black coat who claims to be a 'good guy.' Kymar is immediately suspicious of his offer for help.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
        ),
        episode: 26,
        date: "November 14, 2020",
        // FIX: Added missing 'category' property.
        category: 'Character',
      },
      {
        title: "LXXIII. Betrayal on the Bridge",
        description: "Jeremy leads the group to a high quartz bridge. After Jeremy is pushed off only to teleport back unharmed, he drops his facade, declares he is no longer a good guy, and flees, initiating a chase.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
        ),
        episode: 26,
        date: "November 14, 2020",
        // FIX: Added missing 'category' property.
        category: 'Betrayal',
      },
      {
        title: "LXXIV. The Frostbite Pursuit",
        description: "The chase leads through a watery prismarine passage that inflicts a 'Frostbite' effect. Pursued by an unknown entity and harried by Grape's chaotic grenade explosions, the group flees frantically towards a massive library.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c-4.97 0-9-4.03-9-9S7.03 3 12 3s9 4.03 9 9-4.03 9-9 9Z" />
            </svg>
        ),
        episode: 27,
        date: "November 15, 2020",
        // FIX: Added missing 'category' property.
        category: 'Exploration',
      },
      {
        title: "LXXV. Ambush in the Grand Library",
        description: "The passage opens into the Grand Library, where the team is ambushed by Mega X Gunners and a new, pink cat-eared enemy. The battle is chaotic, with Grape accidentally shooting and nearly killing Mike in the crossfire.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        ),
        episode: 27,
        date: "November 15, 2020",
        // FIX: Added missing 'category' property.
        category: 'Combat',
      },
      {
        title: "LXXVI. The Untrustworthy Alliance",
        description: "Jeremy reappears, now claiming he was betrayed by Mega X and that they need three keys to escape. Distrustful but out of options, the team forms a fragile, temporary alliance with their former foe.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
        ),
        episode: 27,
        date: "November 15, 2020",
        // FIX: Added missing 'category' property.
        category: 'Character',
      },
      {
        title: "LXXVII. Glitching and a Grenade",
        description: "In a sterile white room, Kymar glitches through the floor while Jeremy is killed by a massive grenade explosion. To escape the chaos, the group decides their only way out is up.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 3.75 3.75 0 0 0-7.493-2.131 3.75 3.75 0 0 0-1.484 5.254A3.75 3.75 0 0 0 12 18Z" />
            </svg>
        ),
        episode: 28,
        date: "November 16, 2020",
        // FIX: Added missing 'category' property.
        category: 'Combat',
      },
      {
        title: "LXXVIII. Rooftop Ambush",
        description: "After ascending a long ladder shaft, the team is ambushed by Mega X soldiers and a Royal Guard on a rooftop terrace. Kymar is killed in the overwhelming assault, leaving the survivors exposed.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
        ),
        episode: 28,
        date: "November 16, 2020",
        // FIX: Added missing 'category' property.
        category: 'Combat',
      },
      {
        title: "LXXIX. The First Two Keys",
        description: "After regrouping, Kymar and Grape find chests containing 'Key 01' and 'Key 02.' They are joined by a new, silent figure in white armor named 'Faceless,' whose motives are a complete mystery.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
            </svg>
        ),
        episode: 28,
        date: "November 16, 2020",
        // FIX: Added missing 'category' property.
        category: 'Discovery',
      },
      {
        title: "LXXX. The Final Objective",
        description: "Jeremy, acting as their guide again, confirms the third and final key is located on a massive airship floating nearby, setting up the team's next seemingly impossible goal.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
        ),
        episode: 28,
        date: "November 16, 2020",
        // FIX: Added missing 'category' property.
        category: 'Mission',
      },
      {
        title: "LXXXI. Chaos in the Complex",
        description: "Before they can act, Jeremy and Grape cause a series of massive explosions that destroy the room, revealing a lava pit. Both Jeremy and Kymar are killed in the mayhem, throwing their escape plan into disarray.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 3.75 3.75 0 0 0-7.493-2.131 3.75 3.75 0 0 0-1.484 5.254A3.75 3.75 0 0 0 12 18Z" />
            </svg>
        ),
        episode: 29,
        date: "November 18, 2020",
        // FIX: Added missing 'category' property.
        category: 'Combat',
      },
      {
        title: "LXXXII. Bridge to the Sky City",
        description: "The survivors ascend to a long stone bridge leading to a floating medieval city. They are ambushed from behind by Mega X Royal Guards, and Kymar is killed for the second time in the episode.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
        ),
        episode: 29,
        date: "November 18, 2020",
        // FIX: Added missing 'category' property.
        category: 'Combat',
      },
      {
        title: "LXXXIII. A World of Flesh",
        description: "Inside the city, a command block teleports the group to a horrifying new dimension. They fall to their deaths in a surreal, foggy landscape of red flesh and crimson trees, respawning in a hellish new world.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.691v4.992" />
            </svg>
        ),
        episode: 29,
        date: "November 18, 2020",
        // FIX: Added missing 'category' property.
        category: 'Exploration',
      },
      {
        title: "LXXXIV. A Stroke of Luck",
        description: "As the group reviews their troll quest items, a skeleton drops both a bucket of milk and an empty water bucket in a moment of incredible luck, providing a key quest component before Grape sets the new world on fire.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
            </svg>
        ),
        episode: 29,
        date: "November 18, 2020",
        // FIX: Added missing 'category' property.
        category: 'Discovery',
      },
      {
        title: "LXXXV. The Skeleton's Trap",
        description: "Their luck runs out when a skeleton in a teal shirt guides them to a fake grave for Jeremy. After they dig it up, the skeleton's head detaches and a massive explosion reveals it was a trap.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.588 8.125a18.37 18.37 0 0 1-5.462 2.934c-.54.21-1.15.21-1.69 0a18.37 18.37 0 0 1-5.462-2.934A7.5 7.5 0 0 1 4.5 10.5a7.5 7.5 0 0 1 3.364-6.257Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" />
          </svg>
        ),
        episode: 30,
        date: "November 19, 2020",
        // FIX: Added missing 'category' property.
        category: 'Betrayal',
      },
      {
        title: "LXXXVI. The Two Jeremys",
        description: "Jeremy reappears with no memory of recent events, and the confusion multiplies when a second Jeremy in the skeleton's skin also appears. The original Jeremy provides the group with another quest item: an 'Invisible Flavor' candy bar.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 12.25-1.5-1.5m0 0-1.5-1.5m1.5 1.5 1.5 1.5m-1.5-1.5 1.5-1.5" />
          </svg>
        ),
        episode: 30,
        date: "November 19, 2020",
        // FIX: Added missing 'category' property.
        category: 'Character',
      },
      {
        title: "LXXXVII. Quest Complete",
        description: "Frustrated with the floating skeleton head, Kymar surrounds it with TNT. The massive explosion reveals a hidden chest containing the final quest item: Almond Water. With their scavenger hunt complete, their new objective is to return to the poolrooms.",
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={iconClass}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.981V18Z" />
          </svg>
        ),
        episode: 30,
        date: "November 19, 2020",
        // FIX: Added missing 'category' property.
        category: 'Mission',
      },
];