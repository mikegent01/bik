// FIX: Corrected import path for types to './types' to match the flat project structure.
import { Character, CharacterFaction } from './types';
import { CHARACTER_DATA_S2 } from './characters.s2';
import { CHARACTER_DATA_S3 } from './characters.s3';
import { CHARACTER_DATA_S5 } from './characters.s5';

const CHARACTER_DATA_S1: Character[] = [
  // PROTAGONISTS
  {
    name: "Grape (The Leader)",
    description: "The group's erratic leader (player name 'thunderhead'). After the black hole incident, he resurfaced years later with the rest of the team, discovering Doctor Valeneria in a frozen research outpost.",
    faction: CharacterFaction.PROTAGONISTS,
    importance: 3,
    firstAppearanceEpisode: 1,
    lastAppearanceEpisode: 101
  },
  {
    name: "Kymar (The Sergeant)",
    description: "Advocates for loud, direct raids (player name 'Ghastly_Cat'). After being consumed by the black hole, he reappeared years later with his team, finding Doctor Valeneria and a new mystery involving ancient portals.",
    faction: CharacterFaction.PROTAGONISTS,
    importance: 3,
    firstAppearanceEpisode: 1,
    lastAppearanceEpisode: 101
  },
  {
    name: "Mike (The Narrator)",
    description: "The group's narrator and strategist, also known as 'Mikegent'. Years after the black hole incident, he and his team found their way to a desolate, frozen shelter, where they were reunited with a much-changed Doctor Valeneria.",
    faction: CharacterFaction.PROTAGONISTS,
    importance: 3,
    firstAppearanceEpisode: 1,
    lastAppearanceEpisode: 101
  },
  {
    name: "Domonic Nat",
    description: "A member of the Mega X Fishing team. Lore states he created the 'Domonicator 3000' game console and made a short film called 'Zombie vs Ninja' with DZ. He was once featured in a news article about catgirls, where he defended them as fictional characters.",
    faction: CharacterFaction.PROTAGONISTS,
    importance: 2,
    firstAppearanceEpisode: 0,
    lastAppearanceEpisode: 0
  },
  {
    name: "DZ The Great",
    description: "A stylish member of the Mega X Fishing team. Lore suggests he can get angry easily and tends to lash out. He is secretly in love with Grape and co-created the short film 'Zombie vs Ninja' with Domonic. He is also a singer and enjoys reading history books.",
    faction: CharacterFaction.PROTAGONISTS,
    importance: 2,
    firstAppearanceEpisode: 0,
    lastAppearanceEpisode: 0
  },
   {
    name: "Jerome",
    description: "A member of the Mega X Fishing team. According to the iceberg lore, he knows 'ben the dog' and created the famous 'isabelle black and white' GIF.",
    faction: CharacterFaction.PROTAGONISTS,
    importance: 2,
    firstAppearanceEpisode: 0,
    lastAppearanceEpisode: 0
  },
  {
    name: "Catgirl Noone",
    description: "A member of the Mega X Fishing team, represented by a dancing Neco-Arc avatar. The presence of cat ears is said to make her '100% better' than her normal version.",
    faction: CharacterFaction.PROTAGONISTS,
    importance: 1,
    firstAppearanceEpisode: 0,
    lastAppearanceEpisode: 0
  },
  {
    name: "Meowbahh",
    description: "A member of the Mega X Fishing team, described as the 'PNGTuber' and an 'interesting character.' She is represented by the anime character Madoka Kaname.",
    // FIX: Corrected typo in enum value from PROTAGONists to PROTAGONISTS.
    faction: CharacterFaction.PROTAGONISTS,
    importance: 1,
    firstAppearanceEpisode: 0,
    lastAppearanceEpisode: 0
  },
  {
    name: "Ratman",
    description: "The artist for the Mega X Fishing team who is credited with creating Mike's 'cursed' cartoon avatar. Represented by the character Dabi from My Hero Academia.",
    faction: CharacterFaction.PROTAGONISTS,
    importance: 1,
    firstAppearanceEpisode: 0,
    lastAppearanceEpisode: 0
  },
  {
    name: "Saul Goodnyan",
    description: "A powerful and scary member of the Mega X Fishing team, represented by a 3D animation of Neco-Arc in a business suit.",
    faction: CharacterFaction.PROTAGONISTS,
    importance: 2,
    firstAppearanceEpisode: 0,
    lastAppearanceEpisode: 0
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
    description: "A mysterious prisoner rescued from Mega X's castle. Her abilities and allegiances are unclear. She faded into the background after the initial escape and, in the chaos of the backrooms, was tragically forgotten and left behind, a fact the team only realized upon their return to the real world. A different version of her, 'Neko Noone,' is part of the rival Mega X team.",
    faction: CharacterFaction.ALLIES,
    importance: 2,
    firstAppearanceEpisode: 1,
    lastAppearanceEpisode: 3
  },
  {
    name: "Doctor Valeneria (The Reporter)",
    description: "A news reporter who was lost in the Backrooms. Years after being separated from the team, he was rediscovered in a frozen wasteland, having become an isolated, paranoid researcher studying ancient portals and creating clones to stave off loneliness.",
    faction: CharacterFaction.ALLIES,
    importance: 1,
    firstAppearanceEpisode: 5,
    lastAppearanceEpisode: 101
  },
  {
    name: "The Scientist",
    description: "A cowardly scientist in a hazmat suit first encountered in the Office level (Level 4). He claimed to be mapping the Backrooms but was incompetent and guided the team into more danger before being shot and disappearing in the Snack Rooms. His current status is unknown.",
    faction: CharacterFaction.ALLIES,
    importance: 1,
    firstAppearanceEpisode: 11,
    lastAppearanceEpisode: 14
  },
  {
    name: "Inspector Sir",
    description: "The host of the 'Corporate Interview' segment and the 'official Mega exhibition board meeting.' He attempts to maintain a professional, corporate tone but is constantly derailed by chaos, presenting absurd premises as if they are normal.",
    faction: CharacterFaction.ALLIES,
    importance: 1,
    firstAppearanceEpisode: 0,
    lastAppearanceEpisode: 0
  },

  // ANTAGONISTS
  {
    name: "Mega X (The Mastermind)",
    description: "The primary antagonist and leader of the Mega X Empire, also the leader of the rival 'Mega X' channel. Though he was only seen briefly during his escape, his influence is felt everywhere through his vast army and powerful associates. Lore suggests his rivalry with Mega X Fishing began when he became jealous of their success.",
    faction: CharacterFaction.ANTAGONISTS,
    importance: 3,
    firstAppearanceEpisode: 2,
    lastAppearanceEpisode: 2
  },
  {
    name: "Bloodless (The Architect)",
    description: "A powerful associate of Mega X. Before the campaign, she hijacked a board meeting and was comically defeated. In retaliation, she created the labyrinthine prison that trapped the team for the entirety of Season 1, revealing in a manifesto her goal was to stop them from uploading videos. Lore videos suggest she is a rival who tries to ruin the Mega X Fishing channel.",
    faction: CharacterFaction.ANTAGONISTS,
    importance: 3,
    firstAppearanceEpisode: 0,
    lastAppearanceEpisode: 32
  },
    {
    name: "Priest swimeonkim26",
    description: "A manipulative priest who sends the group on suicide missions. He mysteriously reappears multiple times, once atop the Great Wall of Canada, and later as part of 'The Pope's Navy' during a chaotic naval battle. After his ship was destroyed, he boarded the team's airship and comically surrendered, claiming it was an 'Italian tradition.' His true motives remain unknown.",
    faction: CharacterFaction.ANTAGONISTS,
    importance: 3,
    firstAppearanceEpisode: 32,
    lastAppearanceEpisode: 86
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
    name: "Doctor Mayor",
    description: "A member of the rival Mega X team. Described as a 'neutral one,' his 'true form' is represented by Walter White from Breaking Bad in a hazmat suit. Lore from the corporate interview suggests a 'Dr. Mayer' is the 'game master' responsible for chaotic scenarios involving chainsaws and tiger girls.",
    faction: CharacterFaction.ANTAGONISTS,
    importance: 2,
    firstAppearanceEpisode: 0,
    lastAppearanceEpisode: 0
  },
  {
    name: "Total Lori",
    description: "The 'alter ego' of Mega X, represented by an image of Walter White from Breaking Bad wearing a top hat. In the lore video, he is declared the winner in a versus montage against Mega X.",
    faction: CharacterFaction.ANTAGONISTS,
    importance: 2,
    firstAppearanceEpisode: 0,
    lastAppearanceEpisode: 0
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
    name: "Neko Noone",
    description: "A member of the rival Mega X team and the 'normal' version of Catgirl Noone from the protagonist team. The narrators express disgust that this version lacks cat ears.",
    faction: CharacterFaction.ANTAGONISTS,
    importance: 1,
    firstAppearanceEpisode: 0,
    lastAppearanceEpisode: 0
  },
  {
    name: "Saul Goodnyan Brother",
    description: "The 'evil version' and brother of Saul Goodnyan from the Mega X Fishing team. Represented by a crudely drawn anime character with brown cat ears.",
    faction: CharacterFaction.ANTAGONISTS,
    importance: 1,
    firstAppearanceEpisode: 0,
    lastAppearanceEpisode: 0
  },
  {
    name: "Mordecai DND",
    description: "A member of the rival Mega X team, represented by Mordecai from Regular Show. He is labeled a 'simp' for Neko Noone.",
    faction: CharacterFaction.ANTAGONISTS,
    importance: 1,
    firstAppearanceEpisode: 0,
    lastAppearanceEpisode: 0
  },
  {
    name: "Gus Fring",
    description: "A member of the rival Mega X team, represented by his actor from Breaking Bad. He is featured in the 'Versus' lore videos but has not yet appeared in the main campaign.",
    faction: CharacterFaction.ANTAGONISTS,
    importance: 1,
    firstAppearanceEpisode: 0,
    lastAppearanceEpisode: 0
  },
   {
    name: "Terumi Kun",
    description: "A member of the rival Mega X team, represented by a blocky, abstract drawing that the narrators find confusing.",
    faction: CharacterFaction.ANTAGONISTS,
    importance: 1,
    firstAppearanceEpisode: 0,
    lastAppearanceEpisode: 0
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

export const CHARACTER_DATA: Character[] = [...CHARACTER_DATA_S1, ...CHARACTER_DATA_S2, ...CHARACTER_DATA_S3, ...CHARACTER_DATA_S5];