import React from 'react';
import Card from './Card';
import { KEY_ITEMS_DATA } from './constants';
import { KeyItem } from './types';

const ItemCard: React.FC<{ item: KeyItem }> = ({ item }) => {
    return (
        <Card>
            <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-lg text-white mr-4">{item.name}</h3>
                <span className="bg-slate-700 text-slate-300 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap">
                    EPISODE {item.firstAppearanceEpisode}
                </span>
            </div>
            <p className="text-slate-400">{item.description}</p>
        </Card>
    );
};

const ItemsView: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Key Items & Plot Devices</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {KEY_ITEMS_DATA.sort((a,b) => a.firstAppearanceEpisode - b.firstAppearanceEpisode).map(item => <ItemCard key={item.name} item={item} />)}
      </div>
    </div>
  );
};

export default ItemsView;
