import React, { useMemo, useState } from 'react';
// Use flat project structure imports to match other files
import { Location, BackroomsLocationNode, BackroomsConnection } from './types';
import { LOCATIONS_DATA } from './locations';
import { BACKROOMS_MAP_DATA, BACKROOMS_CONNECTIONS_DATA } from './map';
// ADD: outside world map data
import { OUTSIDE_WORLD_MAP_DATA, OUTSIDE_WORLD_CONNECTIONS_DATA } from './outsideMap';
import { FACILITY_MAP_DATA, FACILITY_CONNECTIONS_DATA } from './facilityMap';
import ProvinceMap from './ProvinceMap';

const SectionTitle: React.FC<{ title: string; subtitle?: string }> = ({ title, subtitle }) => (
  <div className="mb-4">
    <h2 className="text-2xl font-bold text-white">{title}</h2>
    {subtitle && <p className="text-slate-400 mt-1">{subtitle}</p>}
  </div>
);

const WorldMapView: React.FC = () => {
  // REFACTOR: Use separate node sources for each map
  const backroomsNodes: BackroomsLocationNode[] = useMemo(() => {
    try {
      return Array.isArray(BACKROOMS_MAP_DATA) ? BACKROOMS_MAP_DATA.filter(Boolean) : [];
    } catch {
      return [];
    }
  }, []);

  const backroomsConnections: BackroomsConnection[] = useMemo(() => {
    try {
      return Array.isArray(BACKROOMS_CONNECTIONS_DATA) ? BACKROOMS_CONNECTIONS_DATA.filter(Boolean) : [];
    } catch {
      return [];
    }
  }, []);

  // ADD: Outside world nodes/connections
  const outsideNodes: BackroomsLocationNode[] = useMemo(() => {
    try {
      return Array.isArray(OUTSIDE_WORLD_MAP_DATA) ? OUTSIDE_WORLD_MAP_DATA.filter(Boolean) : [];
    } catch {
      return [];
    }
  }, []);

  const outsideConnections: BackroomsConnection[] = useMemo(() => {
    try {
      return Array.isArray(OUTSIDE_WORLD_CONNECTIONS_DATA) ? OUTSIDE_WORLD_CONNECTIONS_DATA.filter(Boolean) : [];
    } catch {
      return [];
    }
  }, []);
  
  const facilityNodes: BackroomsLocationNode[] = useMemo(() => {
    try {
      return Array.isArray(FACILITY_MAP_DATA) ? FACILITY_MAP_DATA.filter(Boolean) : [];
    } catch {
      return [];
    }
  }, []);

  const facilityConnections: BackroomsConnection[] = useMemo(() => {
    try {
      return Array.isArray(FACILITY_CONNECTIONS_DATA) ? FACILITY_CONNECTIONS_DATA.filter(Boolean) : [];
    } catch {
      return [];
    }
  }, []);

  const locations: Location[] = useMemo(() => {
    try {
      return Array.isArray(LOCATIONS_DATA) ? LOCATIONS_DATA.filter(Boolean) : [];
    } catch {
      return [];
    }
  }, []);

  // ADD: Reusable interactive graph component for both maps
  const InteractiveGraph: React.FC<{
    nodes: BackroomsLocationNode[];
    connections: BackroomsConnection[];
    emptyMessage: string;
    ariaLabel: string;
  }> = ({ nodes, connections, emptyMessage, ariaLabel }) => {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const svgSize = useMemo(() => {
      if (!nodes.length) return { width: 800, height: 400 };
      const maxX = Math.max(...nodes.map(n => n.x));
      const maxY = Math.max(...nodes.map(n => n.y));
      return { width: maxX + 200, height: maxY + 200 };
    }, [nodes]);

    const nodeById = useMemo(() => {
      const map = new Map<string, BackroomsLocationNode>();
      nodes.forEach(n => map.set(n.id, n));
      return map;
    }, [nodes]);

    const selectedNode = selectedId ? nodeById.get(selectedId) ?? null : null;

    return (
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-4">
        {!nodes.length ? (
          <div className="text-slate-400">{emptyMessage}</div>
        ) : (
          <div className="relative overflow-auto" style={{ maxHeight: 600 }}>
            <svg
              width={svgSize.width}
              height={svgSize.height}
              className="bg-zinc-950/70 rounded-md"
              role="img"
              aria-label={ariaLabel}
            >
              {connections.map((conn, idx) => {
                const from = nodeById.get(conn.from);
                const to = nodeById.get(conn.to);
                if (!from || !to) return null;

                const isConnected =
                  selectedId && (conn.from === selectedId || conn.to === selectedId);

                return (
                  <line
                    key={`conn-${idx}-${conn.from}-${conn.to}`}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke={isConnected ? '#a3e635' : '#3f3f46'}
                    strokeWidth={isConnected ? 3 : 2}
                    strokeLinecap="round"
                  />
                );
              })}

              {nodes.map((node) => {
                const isSelected = selectedId === node.id;
                return (
                  <g
                    key={node.id}
                    transform={`translate(${node.x}, ${node.y})`}
                    onClick={() => setSelectedId(node.id)}
                    className="cursor-pointer"
                  >
                    <circle
                      r={18}
                      fill={isSelected ? '#65a30d' : '#27272a'}
                      stroke={isSelected ? '#a3e635' : '#3f3f46'}
                      strokeWidth={isSelected ? 3 : 2}
                    />
                    <text
                      x={0}
                      y={-28}
                      textAnchor="middle"
                      className="select-none"
                      fill="#cbd5e1"
                      fontSize={12}
                      fontWeight={600}
                    >
                      {node.label}
                    </text>
                    <text
                      x={0}
                      y={6}
                      textAnchor="middle"
                      className="select-none"
                      fill={isSelected ? '#e2e8f0' : '#94a3b8'}
                      fontSize={10}
                    >
                      Ep. {node.episode}
                    </text>
                  </g>
                );
              })}
            </svg>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-2">
                <p className="text-slate-300">
                  Click a node to highlight its connections and view details.
                </p>
              </div>
              <div className="md:col-span-1">
                <div className="rounded-md border border-zinc-800 bg-zinc-950/70 p-3">
                  <h3 className="text-lg font-semibold text-white">Selected Node</h3>
                  {!selectedNode ? (
                    <p className="text-slate-400 mt-2">No node selected.</p>
                  ) : (
                    <div className="mt-2">
                      <div className="text-slate-200 font-medium">{selectedNode.label}</div>
                      <div className="text-slate-400 text-sm">Episode: {selectedNode.episode}</div>
                      <div className="mt-3">
                        <div className="text-slate-400 text-sm mb-1">Connected to:</div>
                        <ul className="text-slate-300 text-sm list-disc ml-4">
                          {connections
                            .filter(c => c.from === selectedNode.id || c.to === selectedNode.id)
                            .map((c, i) => {
                              const otherId = c.from === selectedNode.id ? c.to : c.from;
                              const otherNode = nodeById.get(otherId);
                              return (
                                <li key={`sel-${selectedNode.id}-${i}`}>
                                  {otherNode ? otherNode.label : otherId}
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Campaign Setting Map */}
      <section aria-labelledby="province-map">
        <SectionTitle
          title="Campaign Setting: Northern USA"
          subtitle="A high-level overview of the campaign's geographical setting."
        />
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-4">
          <ProvinceMap />
        </div>
      </section>
      
      {/* Backrooms Journey */}
      <section aria-labelledby="backrooms-journey">
        <SectionTitle
          title="The Backrooms Journey"
          subtitle="Interactive graph of the team's path through the Backrooms levels."
        />
        <InteractiveGraph
          nodes={backroomsNodes}
          connections={backroomsConnections}
          emptyMessage="Unable to load Backrooms journey data. Please ensure map.tsx exports BACKROOMS_MAP_DATA and BACKROOMS_CONNECTIONS_DATA correctly."
          ariaLabel="Backrooms Journey Map"
        />
      </section>

      {/* ADD: Outside World Journey */}
      <section aria-labelledby="outside-world-journey">
        <SectionTitle
          title="Outside World Journey"
          subtitle="Interactive map of key locations in the real world after escaping the Backrooms."
        />
        <InteractiveGraph
          nodes={outsideNodes}
          connections={outsideConnections}
          emptyMessage="Unable to load outside world data. Please ensure outsideMap.tsx exports OUTSIDE_WORLD_MAP_DATA and OUTSIDE_WORLD_CONNECTIONS_DATA correctly."
          ariaLabel="Outside World Map"
        />
      </section>

      <section aria-labelledby="secret-facility-layout">
        <SectionTitle
          title="Secret Facility Layout"
          subtitle="Map of the top-secret facility discovered near the crater."
        />
        <InteractiveGraph
          nodes={facilityNodes}
          connections={facilityConnections}
          emptyMessage="Unable to load facility map data. Please ensure facilityMap.tsx exports its data correctly."
          ariaLabel="Secret Facility Map"
        />
      </section>

      {/* World Map (Locations list) */}
      <section aria-labelledby="world-map">
        <SectionTitle
          title="World Map"
          subtitle="Known locations across the campaign and their episode ranges."
        />
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-4">
          {!locations.length ? (
            <div className="text-slate-400">
              Unable to load locations. Please ensure locations.tsx exports LOCATIONS_DATA correctly.
            </div>
          ) : (
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {locations.map((loc) => (
                <li
                  key={loc.id}
                  className="rounded-md border border-zinc-800 bg-zinc-950/70 p-3"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="text-white font-semibold">{loc.name}</h3>
                    <span className="text-xs text-slate-400 ml-2">
                      Ep. {loc.firstAppearanceEpisode}–{loc.lastAppearanceEpisode}
                    </span>
                  </div>
                  <p className="text-slate-300 mt-2 text-sm">{loc.description}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
};

export default WorldMapView;