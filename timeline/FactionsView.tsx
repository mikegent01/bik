import React from 'react';
import Card from './Card';
import { FACTIONS_DATA } from './constants';
import { FactionDetail, CharacterFaction } from './types';

const FactionCard: React.FC<{ faction: FactionDetail }> = ({ faction }) => {
    const factionColorClasses = {
        [CharacterFaction.PROTAGONISTS]: 'border-sky-500',
        [CharacterFaction.ALLIES]: 'border-green-500',
        [CharacterFaction.ANTAGONISTS]: 'border-red-500',
    };
    
    return (
        <Card className={`border-l-4 ${factionColorClasses[faction.name]}`}>
            <h3 className="font-bold text-2xl text-white mb-3">{faction.name}</h3>
            <p className="text-slate-400 mb-6">{faction.description}</p>
            <div>
                <h4 className="font-semibold text-slate-300 mb-3">Key Members:</h4>
                <div className="flex flex-wrap gap-2">
                    {faction.members.map(member => (
                        <span key={member} className="bg-slate-700 text-slate-300 text-sm font-medium px-3 py-1 rounded-full">
                            {member}
                        </span>
                    ))}
                </div>
            </div>
        </Card>
    );
};

const FactionsView: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Faction Breakdowns</h2>
      <div className="space-y-8">
        {FACTIONS_DATA.map(faction => <FactionCard key={faction.name} faction={faction} />)}
      </div>
    </div>
  );
};

export default FactionsView;
