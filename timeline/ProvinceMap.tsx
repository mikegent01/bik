import React from 'react';

const ProvinceMap: React.FC = () => (
  <div className="relative bg-slate-900 rounded-md p-4 flex justify-center items-center">
    <svg viewBox="0 0 800 400" className="w-full h-auto" aria-label="Map of the campaign setting in Northern USA">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Simplified map outline of Northern USA */}
      <path d="M 61.12,185.74 C 47.88,181.79 38.3,171.74 34.19,159.2 C 27.5,139.1 20.31,119.34 16.03,98.66 C 14.16,89.57 18.06,82.25 26.69,79.59 C 45.42,73.81 64.44,72.48 83.3,76.5 C 99.1,79.8 113.6,86.82 129.2,90.41 C 137.9,92.43 146.9,92.51 155.6,90.41 C 168.4,87.21 179.3,80.12 191.6,76.5 C 205.2,72.48 219.4,72.48 233.5,76.5 C 255.3,82.43 276.5,92.83 298.6,99.2 C 315.6,104.2 333,106.8 350,104.2 C 374,100.2 395.9,89.92 419.6,86.27 C 438,83.47 456.6,84.52 474.9,88.7 C 492.3,92.68 509.3,99.2 526.9,104.2 C 543.8,108.8 560.9,111.4 578.1,110.1 C 603.2,108.1 627.4,100.2 651.9,96.3 C 673,92.83 694.4,92.83 715.7,96.3 C 732,98.92 748,103.7 763.5,108.1 C 770,110.1 773.4,115 771.6,121.7 C 765,145.4 756.9,168.1 744.5,188.8 C 738.2,199.1 729.1,206.2 717.8,208.2 C 685.1,213.9 652.1,215.9 619.1,214.6 C 585.5,213.2 552.1,208.2 519.3,204.3 C 476.3,199.3 433.4,199.3 390.4,204.3 C 352.2,208.7 313.7,212.6 275.2,214.6 C 242,216.4 208.8,214.6 175.7,212 C 146.4,209.7 117.2,204.3 88.5,199.3 C 78.4,197.3 69.4,192.4 61.12,185.74 z" fill="#334155" stroke="#475569" strokeWidth="1.5" />

      {/* Location markers */}
      <g transform="translate(180, 160)" className="cursor-pointer" aria-label="Location: The Warzone">
        <circle cx="0" cy="0" r="8" fill="#ef4444" filter="url(#glow)" />
        <text x="15" y="5" fill="#f87171" fontSize="14" fontWeight="bold" className="select-none">The Warzone (S1)</text>
      </g>
      <g transform="translate(580, 140)" className="cursor-pointer" aria-label="Location: Snowy City">
        <circle cx="0" cy="0" r="8" fill="#38bdf8" filter="url(#glow)" />
        <text x="15" y="5" fill="#7dd3fc" fontSize="14" fontWeight="bold" className="select-none">Snowy City (S2)</text>
      </g>

      <text x="400" y="30" textAnchor="middle" fill="#cbd5e1" fontSize="18" fontWeight="bold" className="select-none tracking-wider">
        Campaign Setting: Northern USA
      </text>
    </svg>
    <div className="absolute bottom-4 right-4 text-xs text-slate-500 italic select-none">
      Geographical locations are approximate for narrative purposes.
    </div>
  </div>
);

export default ProvinceMap;
