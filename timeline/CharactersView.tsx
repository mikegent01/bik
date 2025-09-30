import React from 'react';
import Card from './Card';
import { CHARACTER_DATA } from './constants';
import { Character, CharacterFaction } from './types';

const ImportanceDots: React.FC<{ level: number }> = ({ level }) => {
    return (
        <div className="flex items-center" aria-label={`Importance level ${level} out of 3`}>
            {Array.from({ length: 3 }).map((_, i) => (
                <span
                    key={i}
                    className={`h-2.5 w-2.5 rounded-full ml-1 ${
                        i < level ? 'bg-sky-400' : 'bg-slate-600'
                    }`}
                ></span>
            ))}
        </div>
    );
};

const CharacterCard: React.FC<{ character: Character }> = ({ character }) => {
    return (
        <Card className="flex flex-col">
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-white">{character.name}</h3>
                <ImportanceDots level={character.importance} />
            </div>
            <p className="text-slate-400 mb-4 flex-grow">{character.description}</p>
            <div className="flex justify-end items-center text-xs text-slate-400 gap-2 border-t border-slate-700 pt-3 mt-auto">
                 <span className="bg-slate-700 text-slate-300 font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                    First: Ep. {character.firstAppearanceEpisode}
                 </span>
                 <span className="bg-slate-700 text-slate-300 font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                    Last: Ep. {character.lastAppearanceEpisode}
                 </span>
            </div>
        </Card>
    );
};


const FactionSection: React.FC<{ title: string; characters: Character[] }> = ({ title, characters }) => {
    return (
        <div className="mb-10">
            <h3 className="text-2xl font-bold text-white border-b-2 border-slate-700 pb-2 mb-6">{title}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {characters.sort((a, b) => b.importance - a.importance).map(char => <CharacterCard key={char.name} character={char} />)}
            </div>
        </div>
    );
}

const CharactersView: React.FC = () => {
  const protagonists = CHARACTER_DATA.filter(c => c.faction === CharacterFaction.PROTAGONISTS);
  const allies = CHARACTER_DATA.filter(c => c.faction === CharacterFaction.ALLIES);
  const antagonists = CHARACTER_DATA.filter(c => c.faction === CharacterFaction.ANTAGONISTS);

  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Character Profiles</h2>
      
      <FactionSection title={CharacterFaction.PROTAGONISTS} characters={protagonists} />
      <FactionSection title={CharacterFaction.ALLIES} characters={allies} />
      <FactionSection title={CharacterFaction.ANTAGONISTS} characters={antagonists} />

    </div>
  );
};

export default CharactersView;
