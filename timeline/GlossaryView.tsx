import React, { useState, useMemo } from 'react';
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

const FilterControls: React.FC<{
    options: string[];
    activeFilters: string[];
    onToggle: (option: string) => void;
}> = ({ options, activeFilters, onToggle }) => {
    return (
        <div className="mb-6 p-4 rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-zinc-800">
            <h4 className="text-sm font-semibold text-slate-300 mb-3">Filter by Category</h4>
            <div className="flex flex-wrap gap-2">
                {options.map(option => {
                    const isActive = activeFilters.includes(option);
                    return (
                        <button
                            key={option}
                            onClick={() => onToggle(option)}
                            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                                isActive 
                                ? 'bg-lime-500 text-black' 
                                : 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700'
                            }`}
                        >
                            {option}
                        </button>
                    );
                })}
                {activeFilters.length > 0 && (
                     <button
                        onClick={() => onToggle('__ALL__')}
                        className="px-3 py-1 text-xs font-medium rounded-full transition-colors bg-red-500/50 text-red-200 hover:bg-red-500/70"
                    >
                        Clear
                    </button>
                )}
            </div>
        </div>
    );
};


const GlossaryView: React.FC = () => {
    const [activeCategories, setActiveCategories] = useState<string[]>([]);
    
    const categories = useMemo(() => {
        const uniqueCategories = new Set(GLOSSARY_DATA.map(term => term.category));
        return Array.from(uniqueCategories).sort();
    }, []);

    const handleToggleCategory = (category: string) => {
        if (category === '__ALL__') {
            setActiveCategories([]);
            return;
        }
        setActiveCategories(prev => 
            prev.includes(category) 
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const filteredTerms = useMemo(() => {
        const sorted = [...GLOSSARY_DATA].sort((a, b) => a.term.localeCompare(b.term));
        if (activeCategories.length === 0) {
            return sorted;
        }
        return sorted.filter(term => activeCategories.includes(term.category));
    }, [activeCategories]);

    return (
        <div>
            <h2 className="text-3xl font-bold text-white mb-8">Glossary & Lore</h2>
            <FilterControls 
                options={categories}
                activeFilters={activeCategories}
                onToggle={handleToggleCategory}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTerms.map(term => <GlossaryCard key={term.term} term={term} />)}
            </div>
        </div>
    );
};

export default GlossaryView;