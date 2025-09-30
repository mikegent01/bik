// FIX: Corrected import path for types to './types' to match the flat project structure.
import { FactionDetail, CharacterFaction } from './types';

export const FACTIONS_DATA: FactionDetail[] = [
    {
        name: CharacterFaction.PROTAGONISTS,
        description: "The core group of players at the center of the story. Their primary goals have shifted from vengeance against Mega X to sheer survival within the backrooms, and now, to arming themselves for a fight against their manipulative new 'allies' in the real world.",
        members: ["Grape (The Leader)", "Kymar (The Sergeant)", "Mike (The Narrator)"]
    },
    {
        name: CharacterFaction.ALLIES,
        description: "A loose collection of individuals who have aided or been rescued by the protagonists. Their loyalties and usefulness vary wildly, from the once-helpful insider Rose to the incompetent Scientist and the forgotten No One. They represent both the hope of assistance and the burden of responsibility.",
        members: ["Rose", "No One", "Doctor Valeneria", "The Scientist"]
    },
    {
        name: CharacterFaction.ANTAGONISTS,
        description: "A diverse group of villains and hostile forces working against the protagonists. This includes the overarching Mega X Empire, the powerful and manipulative individuals like Bloodless and the Priest, and the chaotic tricksters like Lando and Jeremy. Their methods range from direct military assault to psychological torture and elaborate betrayal.",
        members: ["Mega X", "Bloodless", "Priest swimeonkim26", "Lando (The Troll)", "Jeremy (The Guide)", "Faceless", "Mega X Forces"]
    }
];
