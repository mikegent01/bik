// FIX: Corrected import path for types to './types' to match the flat project structure.
import { FactionDetail, CharacterFaction } from './types';

export const FACTIONS_DATA: FactionDetail[] = [
    {
        name: CharacterFaction.PROTAGONISTS,
        description: "The core group of players, also known as the 'Mega X Fishing' team. Their goals shifted from vengeance to survival after being trapped in the backrooms. After escaping, their journey through the outside world devolved into a chaotic spiral of self-sabotage and betrayal. At the end of Season 2, the team is shattered: Mike and EighthHalo are adrift at sea, Grape has been abandoned on a sinking ship, and Kymar is still missing.",
        members: ["Grape (The Leader)", "Kymar (The Sergeant)", "Mike (The Narrator)", "Catgirl Noone", "Domonic Nat", "DZ The Great", "Jerome", "Meowbahh", "Ratman", "Saul Goodnyan", "EighthHalo", "El muchacho"]
    },
    {
        name: CharacterFaction.ALLIES,
        description: "A loose collection of individuals who have aided or been rescued by the protagonists. Their loyalties and usefulness vary wildly, from the once-helpful insider Rose to the incompetent Scientist and the forgotten No One. They represent both the hope of assistance and the burden of responsibility.",
        members: ["Rose", "No One", "Doctor Valeneria", "The Scientist", "Inspector Sir", "darkphan"]
    },
    {
        name: CharacterFaction.ANTAGONISTS,
        description: "A diverse group of villains and hostile forces working against the protagonists. This includes the overarching Mega X Empire, its powerful associate Bloodless, and the rival 'Mega X' channel from the lore videos. The group is led by powerful, manipulative individuals and chaotic tricksters like Lando and Jeremy.",
        members: ["Mega X", "Bloodless", "Priest swimeonkim26", "Lando (The Troll)", "Jeremy (The Guide)", "Faceless", "Doctor Mayor", "Gus Fring", "Mordecai DND", "Neko Noone", "Saul Goodnyan Brother", "Terumi Kun", "Total Lori", "Mega X Forces"]
    },
    {
        name: CharacterFaction.MEGA_X_ARMY,
        description: "A resilient and heavily-armed military force still loyal to Mega X, encountered after the team's escape from the backrooms. Their soldiers are incredibly durable, able to survive catastrophic events and tank multiple bullets with ease.",
        members: ["Mega X Army Soldier", "Mega X Furry Unit"]
    },
    {
        name: CharacterFaction.THE_AUTHORITY,
        description: "The well-armed, armored guards who patrol the snowy, post-apocalyptic city in Season 2. Led by figures like AdmiralStewie, they are quick to label newcomers as 'intruders' and use lethal force to maintain control, serving as the season's initial antagonists.",
        members: ["AdmiralStewie", "City Guards"]
    },
    {
        name: CharacterFaction.THE_ALPONES,
        description: "A mysterious and apparently large military group operating in the post-apocalyptic world. Their member, Reese, claims they control half of the wasteland. Their intentions and relationship to the protagonists or Mega X are currently unknown.",
        members: ["Reese (bestyrelse)"]
    },
    {
        name: CharacterFaction.POPES_NAVY,
        description: "A hostile naval force whose ship, adorned with a large golden cross, engaged the team's airship in a chaotic battle. One of their members, 'swimeonkim26,' comically surrendered after his own vessel was destroyed, claiming it was an 'Italian tradition.' Their overall goals and power are unknown.",
        members: ["swimeonkim26"]
    }
];