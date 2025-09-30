import React from 'react';
import Card from './Card';
import { LOCATIONS_DATA } from './constants';
import { Location } from './types';

const LocationCard: React.FC<{ location: Location }> = ({ location }) => {
    return (
        <Card>
            <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg text-white mr-4">{location.name}</h3>
            </div>
            <p className="text-slate-400 mb-4">{location.description}</p>
            <div className="flex justify-end items-center text-xs text-slate-400 gap-2 border-t border-slate-700 pt-3 mt-auto">
                 <span className="bg-slate-700 text-slate-300 font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                    First: Ep. {location.firstAppearanceEpisode}
                 </span>
                 <span className="bg-slate-700 text-slate-300 font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">
                    Last: Ep. {location.lastAppearanceEpisode}
                 </span>
            </div>
        </Card>
    );
};

const LocationsView: React.FC = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-white mb-8">Locations</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {LOCATIONS_DATA.map(loc => <LocationCard key={loc.name} location={loc} />)}
      </div>
    </div>
  );
};

export default LocationsView;
