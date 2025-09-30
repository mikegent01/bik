import React, { useState, useRef, WheelEvent, MouseEvent } from 'react';
import Card from './Card';
import { BACKROOMS_MAP_DATA, BACKROOMS_CONNECTIONS_DATA, LOCATIONS_DATA } from './constants';
import { BackroomsLocationNode } from './types';

const WorldMapView: React.FC = () => {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-8">The World Map</h2>
        <Card>
          <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center text-slate-300">
            World map visualization coming soon.
          </div>
        </Card>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-white mb-8">The Backrooms Journey</h2>
        <Card>
          <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center text-slate-300">
            Backrooms journey visualization coming soon.
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WorldMapView;
