import React, { useState, useMemo } from 'react';
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
                        i < level ? 'bg-lime-400' : 'bg-zinc-800'
                    }`}
                ></span>
            ))}
        </div>
    );
};

const CharacterCard: React.FC<{ character: Character }> = ({ character }) => {
    const episodeSpan = character.lastAppearanceEpisode - character.firstAppearanceEpisode + 1;
    return (
        <Card className="flex flex-col">
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-white">{character.name}</h3>
                <ImportanceDots level={character.importance} />
            </div>
            <p className="text-slate-400 mb-4 flex-grow">{character.description}</p>
            <div className="flex justify-end items-center text-xs text-slate-400 gap-2 border-t border-zinc-700 pt-3 mt-auto">
                 <span className="bg-zinc-800 text-slate-300 font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                    First: Ep. {character.firstAppearanceEpisode}
                 </span>
                 <span className="bg-zinc-800 text-slate-300 font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                    Span: {episodeSpan} Ep{episodeSpan > 1 ? 's' : ''}
                 </span>
                 <span className="bg-zinc-800 text-slate-300 font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                    Last: Ep. {character.lastAppearanceEpisode}
                 </span>
            </div>
        </Card>
    );
};


const FactionSection: React.FC<{ title: string; characters: Character[] }> = ({ title, characters }) => {
    if (characters.length === 0) {
        return null;
    }
    return (
        <div className="mb-10">
            <h3 className="text-2xl font-bold text-white border-b-2 border-zinc-700 pb-2 mb-6">{title}</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {characters.sort((a, b) => b.importance - a.importance).map(char => <CharacterCard key={char.name} character={char} />)}
            </div>
        </div>
    );
}

const FilterControls: React.FC<{
    activeFilters: number[];
    onToggle: (level: number | null) => void;
}> = ({ activeFilters, onToggle }) => {
    const importanceLevels = [3, 2, 1];
    const levelLabels: Record<number, string> = {
        3: 'Main',
        2: 'Supporting',
        1: 'Minor',
    }
    return (
        <div className="mb-6 p-4 rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-zinc-800">
            <h4 className="text-sm font-semibold text-slate-300 mb-3">Filter by Importance</h4>
            <div className="flex flex-wrap gap-2">
                {importanceLevels.map(level => {
                    const isActive = activeFilters.includes(level);
                    return (
                        <button
                            key={level}
                            onClick={() => onToggle(level)}
                            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                                isActive 
                                ? 'bg-lime-500 text-black' 
                                : 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'
                            }`}
                        >
                           {levelLabels[level]} (Level {level})
                        </button>
                    );
                })}
                {activeFilters.length > 0 && (
                     <button
                        onClick={() => onToggle(null)}
                        className="px-3 py-1 text-xs font-medium rounded-full transition-colors bg-red-500/50 text-red-200 hover:bg-red-500/70"
                    >
                        Clear
                    </button>
                )}
            </div>
        </div>
    );
};


const CharactersView: React.FC = () => {
  const [activeImportance, setActiveImportance] = useState<number[]>([]);

  const handleToggleImportance = (level: number | null) => {
    if (level === null) {
        setActiveImportance([]);
        return;
    }
    setActiveImportance(prev => 
        prev.includes(level) 
            ? prev.filter(l => l !== level)
            : [...prev, level]
    );
  };
  
  const filteredCharacters = useMemo(() => {
    if (activeImportance.length === 0) {
        return CHARACTER_DATA;
    }
    return CHARACTER_DATA.filter(c => activeImportance.includes(c.importance));
  }, [activeImportance]);

  const protagonists = filteredCharacters.filter(c => c.faction === CharacterFaction.PROTAGONISTS);
  const allies = filteredCharacters.filter(c => c.faction === CharacterFaction.ALLIES);
  const antagonists = filteredCharacters.filter(c => c.faction === CharacterFaction.ANTAGONISTS);
  const theAuthority = filteredCharacters.filter(c => c.faction === CharacterFaction.THE_AUTHORITY);
  const megaXArmy = filteredCharacters.filter(c => c.faction === CharacterFaction.MEGA_X_ARMY);


  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Character Profiles</h2>
      
      <FilterControls activeFilters={activeImportance} onToggle={handleToggleImportance} />

      <FactionSection title={CharacterFaction.PROTAGONISTS} characters={protagonists} />
      <FactionSection title={CharacterFaction.ALLIES} characters={allies} />
      <FactionSection title={CharacterFaction.ANTAGONISTS} characters={antagonists} />
      <FactionSection title={CharacterFaction.MEGA_X_ARMY} characters={megaXArmy} />
      <FactionSection title={CharacterFaction.THE_AUTHORITY} characters={theAuthority} />

    </div>
  );
};

export default CharactersView;