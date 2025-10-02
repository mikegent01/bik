import React from 'react';

const ProvinceMap: React.FC = () => (
  <div className="relative bg-transparent rounded-md p-4 flex justify-center items-center">
    <svg viewBox="0 0 800 400" className="w-full h-auto" aria-label="Map of the campaign setting in Maine and path to Canada">
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Simplified map outline */}
      <path d="M 61.12,185.74 C 47.88,181.79 38.3,171.74 34.19,159.2 C 27.5,139.1 20.31,119.34 16.03,98.66 C 14.16,89.57 18.06,82.25 26.69,79.59 C 45.42,73.81 64.44,72.48 83.3,76.5 C 99.1,79.8 113.6,86.82 129.2,90.41 C 137.9,92.43 146.9,92.51 155.6,90.41 C 168.4,87.21 179.3,80.12 191.6,76.5 C 205.2,72.48 219.4,72.48 233.5,76.5 C 255.3,82.43 276.5,92.83 298.6,99.2 C 315.6,104.2 333,106.8 350,104.2 C 374,100.2 395.9,89.92 419.6,86.27 C 438,83.47 456.6,84.52 474.9,88.7 C 492.3,92.68 509.3,99.2 526.9,104.2 C 543.8,108.8 560.9,111.4 578.1,110.1 C 603.2,108.1 627.4,100.2 651.9,96.3 C 673,92.83 694.4,92.83 715.7,96.3 C 732,98.92 748,103.7 763.5,108.1 C 770,110.1 773.4,115 771.6,121.7 C 765,145.4 756.9,168.1 744.5,188.8 C 738.2,199.1 729.1,206.2 717.8,208.2 C 685.1,213.9 652.1,215.9 619.1,214.6 C 585.5,213.2 552.1,208.2 519.3,204.3 C 476.3,199.3 433.4,199.3 390.4,204.3 C 352.2,208.7 313.7,212.6 275.2,214.6 C 242,216.4 208.8,214.6 175.7,212 C 146.4,209.7 117.2,204.3 88.5,199.3 C 78.4,197.3 69.4,192.4 61.12,185.74 z" fill="#27272a" stroke="#3f3f46" strokeWidth="1.5" />

      {/* Dashed lines for journey path */}
      <path d="M 188,160 C 230,175 272,185 288,190 C 400,200 500,160 572,145 C 580,143 588,140 590,162 C 592,175 620,190 642,195 C 658,200 680,180 692,165 C 700,155 710,120 720,100" stroke="#a3e635" strokeWidth="2.5" strokeDasharray="6,6" fill="none" />
      
      {/* Location markers */}
      <g transform="translate(180, 160)" className="cursor-pointer" aria-label="Location: The Warzone">
        <circle cx="0" cy="0" r="8" fill="#ef4444" filter="url(#glow)" />
        <text x="15" y="5" fill="#f87171" fontSize="14" fontWeight="bold" className="select-none">The Warzone (S1)</text>
      </g>
      
       <g transform="translate(280, 190)" className="cursor-pointer" aria-label="Location: The Church">
        <circle cx="0" cy="0" r="6" fill="#f59e0b" />
        <text x="12" y="5" fill="#fcd34d" fontSize="12" fontWeight="semibold" className="select-none">Church</text>
      </g>

      <g transform="translate(580, 140)" className="cursor-pointer" aria-label="Location: Snowy City">
        <circle cx="0" cy="0" r="8" fill="#84cc16" filter="url(#glow)" />
        <text x="15" y="5" fill="#a3e635" fontSize="14" fontWeight="bold" className="select-none">Snowy City (S2)</text>
      </g>

       <g transform="translate(590, 170)" className="cursor-pointer" aria-label="Location: The Crater">
        <circle cx="0" cy="0" r="6" fill="#94a3b8" />
        <text x="-10" y="22" fill="#e4e4e7" fontSize="12" fontWeight="semibold" className="select-none" textAnchor="middle">The Crater</text>
      </g>
      
      <g transform="translate(650, 200)" className="cursor-pointer" aria-label="Location: Secret Facility">
        <circle cx="0" cy="0" r="6" fill="#a78bfa" />
        <text x="12" y="5" fill="#c4b5fd" fontSize="12" fontWeight="semibold" className="select-none">Secret Facility</text>
      </g>

      <g transform="translate(700, 210)" className="cursor-pointer" aria-label="Location: Ruined City">
        <circle cx="0" cy="0" r="5" fill="#4ade80" />
        <text x="-10" y="20" fill="#86efac" fontSize="11" fontWeight="semibold" className="select-none">Ruined City</text>
      </g>
      
      <g transform="translate(700, 160)" className="cursor-pointer" aria-label="Location: Waterfront City">
        <circle cx="0" cy="0" r="6" fill="#22d3ee" />
        <text x="-50" y="-5" fill="#67e8f9" fontSize="12" fontWeight="semibold" className="select-none">Waterfront City</text>
      </g>

      <g transform="translate(740, 190)" className="cursor-pointer" aria-label="Location: Jungle Outpost">
        <circle cx="0" cy="0" r="5" fill="#34d399" />
        <text x="10" y="5" fill="#6ee7b7" fontSize="11" fontWeight="semibold" className="select-none">Jungle Outpost</text>
      </g>
      
      <g transform="translate(720, 100)" className="cursor-pointer" aria-label="Location: Canadian Border">
        <circle cx="0" cy="0" r="7" fill="#f43f5e" />
        <text x="12" y="5" fill="#fb7185" fontSize="12" fontWeight="bold" className="select-none">Canadian Border</text>
      </g>

      <g transform="translate(680, 80)" className="cursor-pointer" aria-label="Location: Great Wall of Canada">
        <circle cx="0" cy="0" r="5" fill="#78716c" />
        <text x="-15" y="-10" fill="#a8a29e" fontSize="11" fontWeight="semibold" className="select-none">Great Wall</text>
      </g>
      
      <g transform="translate(750, 250)" className="cursor-pointer" aria-label="Location: The Stormy Sea">
        <circle cx="0" cy="0" r="8" fill="#3b82f6" filter="url(#glow)" />
        <text x="0" y="25" fill="#60a5fa" fontSize="14" fontWeight="bold" className="select-none" textAnchor="middle">Adrift at Sea</text>
      </g>

      <text x="400" y="30" textAnchor="middle" fill="#e4e4e7" fontSize="18" fontWeight="bold" className="select-none tracking-wider">
        Campaign Setting: Maine &amp; The North
      </text>
    </svg>
    <div className="absolute bottom-4 right-4 text-xs text-zinc-400 italic select-none">
      Geographical locations are approximate for narrative purposes.
    </div>
  </div>
);

export default ProvinceMap;