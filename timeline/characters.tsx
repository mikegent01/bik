// FIX: Corrected import path for types to './types' to match the flat project structure.
import { Character, CharacterFaction } from './types';

export const CHARACTER_DATA: Character[] = [
  // PROTAGONISTS
  {
    name: "Grape (The Leader)",
    description: "The group's erratic leader (player name 'thunderhead'). After escaping the backrooms, he is found praying in a church. Upon learning of the priest's betrayal, he immediately wants to retaliate with explosives but is convinced to play along and arm himself first.",
    faction: CharacterFaction.PROTAGONISTS,
    importance: 3,
    firstAppearanceEpisode: 1,
    lastAppearanceEpisode: 32
  },
  {
    name: "Kymar (The Sergeant)",
    description: "Advocates for loud, direct raids (player name 'Ghastly_Cat'). After being killed by the troll's trap and escaping the backrooms, he realizes they left No One behind. He helps formulate the plan to play along with the priest's suicide mission to find weapons.",
    faction: CharacterFaction.PROTAGONISTS,
    importance: 3,
    firstAppearanceEpisode: 1,
    lastAppearanceEpisode: 32
  },
  {
    name: "Mike (The Narrator)",
    description: "The group's narrator and strategist. After escaping the backrooms, he overhears the priest's plot. Realizing they are unarmed and walking into a trap, he agrees they must feign compliance to gear up for the inevitable confrontation with Jeremy.",
    faction: CharacterFaction.PROTAGONISTS,
    importance: 3,
    firstAppearanceEpisode: 1,
    lastAppearanceEpisode: 32
  },

  // ALLIES
  {
    name: "Rose (The Insider)",
    description: "Initially the team's insider who helped them infiltrate the castle. She betrayed Mega X, was lost for long periods in the Backrooms, and was eventually reunited with the full team on the endless train.",
    faction: CharacterFaction.ALLIES,
    importance: 2,
    firstAppearanceEpisode: 1,
    lastAppearanceEpisode: 29
  },
  {
    name: "No One (The Wild Card)",
    description: "A mysterious prisoner rescued from Mega X's castle. His abilities and allegiances are unclear, making him a volatile asset. He faded into the background after the initial escape and, in the chaos of the backrooms, was tragically forgotten and left behind, a fact the team only realized upon their return to the real world.",
    faction: CharacterFaction.ALLIES,
    importance: 2,
    firstAppearanceEpisode: 1,
    lastAppearanceEpisode: 3
  },
  {
    name: "Doctor Valeneria (The Reporter)",
    description: "A news reporter found trapped in the Backrooms. He provides world context and lore about the ongoing war with Mega X, though his survival skills and navigation tools have proven unreliable.",
    faction: CharacterFaction.ALLIES,
    importance: 1,
    firstAppearanceEpisode: 5,
    lastAppearanceEpisode: 29
  },
  {
    name: "The Scientist",
    description: "A cowardly scientist in a hazmat suit first encountered in the Office level. He claimed to be mapping the Backrooms but was incompetent and guided the team into more danger before disappearing. His current status is unknown.",
    faction: CharacterFaction.ALLIES,
    importance: 1,
    firstAppearanceEpisode: 1,
    lastAppearanceEpisode: 30
  },

  // ANTAGONISTS
  {
    name: "Mega X (The Mastermind)",
    description: "The primary antagonist and leader of the Mega X Empire. Though he was only seen briefly during his escape, his influence is felt everywhere through his vast army and powerful associates.",
    faction: CharacterFaction.ANTAGONISTS,
    importance: 3,
    firstAppearanceEpisode: 2,
    lastAppearanceEpisode: 2
  },
  {
    name: "Bloodless (The Architect)",
    description: "A powerful associate of Mega X who survived the ship explosion. She created the labyrinthine prison to trap the team and, as her manifesto revealed, prevent them from uploading their videos.",
    faction: CharacterFaction.ANTAGONISTS,
    importance: 3,
    firstAppearanceEpisode: 2,
    lastAppearanceEpisode: 25
  },
    {
    name: "Priest swimeonkim26",
    description: "The manipulative priest in charge of the church. He sends the group on a suicide mission to pillage a village, callously referring to them as 'disposable pawns.' He instructs Jeremy to eliminate them once they've served their purpose as a distraction.",
    faction: CharacterFaction.ANTAGONISTS,
    importance: 3,
    firstAppearanceEpisode: 32,
    lastAppearanceEpisode: 32
  },
  {
    name: "Lando (The Troll)",
    description: "The malevolent 'troll' behind the team's scavenger hunt. After they deliver the items, he traps them in his shop, kills Kymar, and forces the survivors on a disorienting chase before forcibly teleporting them out of the backrooms.",
    faction: CharacterFaction.ANTAGONISTS,
    importance: 2,
    firstAppearanceEpisode: 20,
    lastAppearanceEpisode: 32
  },
  {
    name: "Jeremy (The Guide)",
    description: "A deceptive trickster (player name 'ThatMew001'). After escaping the backrooms, his memory-wiped act is revealed to be a lie. He is actively conspiring with the priest to send the group on a suicide mission and has been ordered to execute them afterwards.",
    faction: CharacterFaction.ANTAGONISTS,
    importance: 2,
    firstAppearanceEpisode: 26,
    lastAppearanceEpisode: 32
  },
  {
    name: "Faceless (The Silent Knight)",
    description: "A silent character in white iron armor who appeared on the rooftop. His motives are unknown. He was last seen running a church, but has since been replaced by the manipulative Priest swimeonkim26.",
    faction: CharacterFaction.ANTAGONISTS,
    importance: 2,
    firstAppearanceEpisode: 28,
    lastAppearanceEpisode: 29
  },
  {
    name: "Skeleton Guide / Troll",
    description: "A skeleton mob in a teal shirt that pretends to guide the group in the Crimson Flesh Dimension, only to troll them with a fake grave and an explosion trap. Its body disappears, leaving a floating head that is eventually destroyed by Kymar.",
    faction: CharacterFaction.ANTAGONISTS,
    importance: 1,
    firstAppearanceEpisode: 30,
    lastAppearanceEpisode: 30
  },
  {
    name: "Pink Cat-Man",
    description: "A hostile, pink-clad character resembling Mega Man but with cat ears. Encountered in the Grand Library, he was quickly dispatched by Kymar with a grenade launcher.",
    faction: CharacterFaction.ANTAGONISTS,
    importance: 1,
    firstAppearanceEpisode: 27,
    lastAppearanceEpisode: 27
  },
  {
    name: "Mega X Royal Guard",
    description: "An elite, heavily armed Mega X soldier. More formidable than standard gunners, they have ambushed the team on the rooftop terrace and the bridge to the floating city.",
    faction: CharacterFaction.ANTAGONISTS,
    importance: 1,
    firstAppearanceEpisode: 28,
    lastAppearanceEpisode: 29
  },
  {
    name: "Mega X Gunners",
    description: "Standard soldiers in the Mega X army. They are frequently encountered as guards and ambushers in various locations.",
    faction: CharacterFaction.ANTAGONISTS,
    importance: 1,
    firstAppearanceEpisode: 1,
    lastAppearanceEpisode: 27
  },
  {
    name: "Mega X Fish Soldier",
    description: "A new type of Mega X soldier encountered in the warzone ruins after the team escapes the backrooms. One was found stuck in a pit, and Jeremy's attempt to 'help' with TNT was predictably destructive.",
    faction: CharacterFaction.ANTAGONISTS,
    importance: 1,
    firstAppearanceEpisode: 32,
    lastAppearanceEpisode: 32
  }
];
