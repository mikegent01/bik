import { Character, CharacterFaction } from './types';

export const CHARACTER_DATA_S3: Character[] = [
    {
        name: "Mushroom Man",
        description: "An eccentric man with a British accent and a mushroom for a hat, found living inside the colossal mushroom on the island. He tasks the team with gathering a large quantity of mushrooms to replace his lost 'magic spores,' offering gold coins as a reward.",
        faction: CharacterFaction.ALLIES,
        importance: 2,
        firstAppearanceEpisode: 73,
        lastAppearanceEpisode: 74,
    },
    {
        name: "Whispering Enchantress",
        description: "A mysterious, masked figure found in a submerged hut on the Mushroom Island. She claims to be a member of the 'Mega X Fishing Team' and provides the team with a map containing their next objective's coordinates before they promptly lose it.",
        faction: CharacterFaction.PROTAGONISTS,
        importance: 2,
        firstAppearanceEpisode: 74,
        lastAppearanceEpisode: 74,
    },
    {
        name: "President Joe Biden (Clone)",
        description: "A hostile, super-powered clone of the US President found guarding the Mega X headquarters in Russia. Possesses a powerful 'Biden Blast' attack and incredible durability.",
        faction: CharacterFaction.ANTAGONISTS,
        importance: 2,
        firstAppearanceEpisode: 77,
        lastAppearanceEpisode: 77,
    },
    {
        name: "President Donald Trump (Clone)",
        description: "A hostile, super-powered clone of the former US President. Extremely resilient, he relentlessly pursued the team during the battle at the Mega X headquarters.",
        faction: CharacterFaction.ANTAGONISTS,
        importance: 2,
        firstAppearanceEpisode: 77,
        lastAppearanceEpisode: 77,
    },
    {
        name: "President Barack Obama (Clone)",
        description: "A hostile, super-powered clone of the former US President found at the Mega X HQ. He possessed the ability to fly and withstood multiple drone strikes before being defeated.",
        faction: CharacterFaction.ANTAGONISTS,
        importance: 2,
        firstAppearanceEpisode: 77,
        lastAppearanceEpisode: 77,
    },
];