import React from 'react';
import Card from './Card';
import { GLOSSARY_DATA } from './constants';
import { GlossaryTerm } from './types';

const GlossaryCard: React.FC<{ term: GlossaryTerm }> = ({ term }) => {
    const categoryColor: Record<string, string> = {
        'Concept': 'bg-sky-500/20 text-sky-300',
        'Faction': 'bg-amber-500/20 text-amber-300',
        'Location Type': 'bg-indigo-500/20 text-indigo-300',
        'Item': 'bg-teal-500/20 text-teal-300',
    };

    return (
        <Card>
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-white mr-4">{term.term}</h3>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap ${categoryColor[term.category] || ''}`}>
                    {term.category}
                </span>
            </div>
            <p className="text-slate-400">{term.definition}</p>
        </Card>
    );
};

const GlossaryView: React.FC = () => {
    const sortedTerms = [...GLOSSARY_DATA].sort((a, b) => a.term.localeCompare(b.term));

    return (
        <div>
            <h2 className="text-3xl font-bold text-white mb-8">Glossary & Lore</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedTerms.map(term => <GlossaryCard key={term.term} term={term} />)}
            </div>
        </div>
    );
};

export default GlossaryView;
