import React, { useState, useRef, WheelEvent, MouseEvent, useEffect } from 'react';
import Card from './Card';
import { BACKROOMS_MAP_DATA, BACKROOMS_CONNECTIONS_DATA } from './constants';
import { BackroomsLocationNode } from './types';

// Tooltip component for better structure
const Tooltip: React.FC<{ content: string; x: number; y: number }> = ({ content, x, y }) => (
  <div
    className="absolute bg-slate-900 text-white text-sm px-3 py-1.5 rounded-md shadow-lg border border-slate-700 pointer-events-none z-10"
    style={{ left: x + 15, top: y + 15, transform: 'translateY(-100%)' }}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

const WorldMapView: React.FC = () => {
  const [transform, setTransform] = useState({ scale: 0.1, translateX: 0, translateY: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [startPanPoint, setStartPanPoint] = useState({ x: 0, y: 0 });
  const [tooltip, setTooltip] = useState<{ visible: boolean; content: string; x: number; y: number }>({
    visible: false,
    content: '',
    x: 0,
    y: 0,
  });

  const svgRef = useRef<SVGSVGElement>(null);

  // Center the view on initial load
  useEffect(() => {
    if (!svgRef.current) return;

    const svgRect = svgRef.current.getBoundingClientRect();
    const allX = BACKROOMS_MAP_DATA.map(n => n.x);
    const allY = BACKROOMS_MAP_DATA.map(n => n.y);
    const minX = Math.min(...allX);
    const maxX = Math.max(...allX);
    const minY = Math.min(...allY);
    const maxY = Math.max(...allY);
    
    const mapWidth = maxX - minX;
    const mapHeight = maxY - minY;
    
    // Find a good initial scale, adding padding
    const initialScale = Math.min(svgRect.width / (mapWidth + 400), svgRect.height / (mapHeight + 400), 0.15);

    // Center the map
    const centerX = mapWidth / 2 + minX;
    const centerY = mapHeight / 2 + minY;

    setTransform({
      scale: initialScale,
      translateX: svgRect.width / 2 - centerX * initialScale,
      translateY: svgRect.height / 2 - centerY * initialScale,
    });
  }, []);

  const handleWheel = (e: WheelEvent<SVGSVGElement>) => {
    e.preventDefault();
    const scaleAmount = -e.deltaY * 0.001;
    const newScale = Math.min(Math.max(transform.scale + scaleAmount, 0.05), 1);
    
    if (svgRef.current) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const mouseX = e.clientX - svgRect.left;
      const mouseY = e.clientY - svgRect.top;

      setTransform(prev => ({
        scale: newScale,
        translateX: mouseX - (mouseX - prev.translateX) * (newScale / prev.scale),
        translateY: mouseY - (mouseY - prev.translateY) * (newScale / prev.scale),
      }));
    }
  };

  const handleMouseDown = (e: MouseEvent<SVGSVGElement>) => {
    setIsPanning(true);
    setStartPanPoint({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: MouseEvent<SVGSVGElement>) => {
    if (tooltip.visible) {
      setTooltip(prev => ({...prev, x: e.clientX, y: e.clientY}));
    }
    if (!isPanning) return;
    const dx = e.clientX - startPanPoint.x;
    const dy = e.clientY - startPanPoint.y;
    setTransform(prev => ({
      ...prev,
      translateX: prev.translateX + dx,
      translateY: prev.translateY + dy,
    }));
    setStartPanPoint({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUpOrLeave = () => {
    setIsPanning(false);
  };

  const handleNodeMouseEnter = (e: MouseEvent, node: BackroomsLocationNode) => {
    setTooltip({
      visible: true,
      content: `<strong>${node.label}</strong><br/>First Seen: Ep. ${node.episode}`,
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleNodeMouseLeave = () => {
    setTooltip(prev => ({ ...prev, visible: false }));
  };

  // Color scale for episodes
  const getColorForEpisode = (episode: number) => {
      const maxEpisode = 32;
      // Interpolate from a cool blue (hsl(210, 70%, 50%)) to a hot pink (hsl(330, 70%, 50%))
      const hue = 210 + (episode / maxEpisode) * 120; 
      return `hsl(${hue}, 70%, 50%)`;
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold text-white mb-4">The Backrooms Journey Map</h2>
         <p className="text-slate-400 mb-6">
            An interactive map of the team's chaotic journey through the Backrooms. 
            Use your mouse wheel to zoom and click-and-drag to pan the map. Hover over nodes for details.
        </p>
        <Card className="p-0 overflow-hidden">
          <div className="relative w-full h-[75vh]">
            {tooltip.visible && <Tooltip content={tooltip.content} x={tooltip.x} y={tooltip.y} />}
            <svg
              ref={svgRef}
              className={`w-full h-full bg-slate-900/50 ${isPanning ? 'cursor-grabbing' : 'cursor-grab'}`}
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
            >
              <g transform={`translate(${transform.translateX}, ${transform.translateY}) scale(${transform.scale})`}>
                {/* Connections */}
                {BACKROOMS_CONNECTIONS_DATA.map((conn, index) => {
                  const fromNode = BACKROOMS_MAP_DATA.find(n => n.id === conn.from);
                  const toNode = BACKROOMS_MAP_DATA.find(n => n.id === conn.to);
                  if (!fromNode || !toNode) return null;
                  return (
                    <line
                      key={`conn-${index}`}
                      x1={fromNode.x}
                      y1={fromNode.y}
                      x2={toNode.x}
                      y2={toNode.y}
                      stroke="#475569" // slate-600
                      strokeWidth={10}
                    />
                  );
                })}

                {/* Nodes */}
                {BACKROOMS_MAP_DATA.map(node => (
                  <g
                    key={node.id}
                    transform={`translate(${node.x}, ${node.y})`}
                    className="cursor-pointer"
                    onMouseEnter={(e) => handleNodeMouseEnter(e, node)}
                    onMouseLeave={handleNodeMouseLeave}
                  >
                    <circle
                      r={40}
                      fill={getColorForEpisode(node.episode)}
                      stroke="#1e293b" // slate-800
                      strokeWidth={8}
                      className="transition-all duration-200"
                    />
                    <text
                      textAnchor="middle"
                      y={4}
                      fill="white"
                      fontSize={32}
                      fontWeight="bold"
                      paintOrder="stroke"
                      stroke="#0f172a"
                      strokeWidth="6px"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="pointer-events-none select-none"
                    >
                      {node.episode}
                    </text>
                  </g>
                ))}
              </g>
            </svg>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default WorldMapView;
