import React from "react";

// Sample condensed representation of the SEA dot matrix.
// x: horizontal coordinate, y: vertical coordinate, color: specific shade of blue/grey
const seaMapData = [
  // Myanmar / Northwest region (Light Blue)
  { x: 50, y: 30, color: "#7bc1eb" },
  { x: 55, y: 25, color: "#7bc1eb" },
  { x: 60, y: 20, color: "#7bc1eb" },
  { x: 50, y: 40, color: "#7bc1eb" },
  { x: 55, y: 35, color: "#7bc1eb" },
  { x: 65, y: 30, color: "#4b88be" },

  // Thailand / Cambodia / Vietnam (Medium Blues & Grays)
  { x: 80, y: 50, color: "#1d5a9c" },
  { x: 85, y: 45, color: "#7a8b99" },
  { x: 90, y: 55, color: "#1d5a9c" },
  { x: 95, y: 60, color: "#1d5a9c" },
  { x: 100, y: 65, color: "#4b88be" },
  { x: 105, y: 70, color: "#1d5a9c" },

  // Philippines (Light/Medium Blue Dots)
  { x: 180, y: 70, color: "#7bc1eb" },
  { x: 185, y: 80, color: "#7bc1eb" },
  { x: 190, y: 95, color: "#7bc1eb" },
  { x: 195, y: 110, color: "#7bc1eb" },
  { x: 205, y: 120, color: "#7bc1eb" },

  // Malaysia / Sumatra / Borneo (Deep Blues)
  { x: 70, y: 150, color: "#093b70" },
  { x: 80, y: 160, color: "#093b70" },
  { x: 90, y: 170, color: "#093b70" },
  { x: 130, y: 165, color: "#1d5a9c" },
  { x: 140, y: 175, color: "#093b70" },
  { x: 150, y: 160, color: "#4b88be" },

  // Java & Eastern Indonesia (Deep Blues)
  { x: 110, y: 230, color: "#093b70" },
  { x: 120, y: 230, color: "#093b70" },
  { x: 130, y: 232, color: "#093b70" },
  { x: 150, y: 235, color: "#093b70" },
  { x: 220, y: 210, color: "#093b70" },
  { x: 240, y: 215, color: "#093b70" },
];

const DotSoutheastAsiaMap = () => {
  return (
    <div className="w-full max-w-4xl p-6 bg-black rounded-xl shadow-2xl flex flex-col items-center justify-center">
      <h2 className="text-white text-lg font-semibold mb-4 tracking-wider">
        Southeast Asia Dot Map
      </h2>

      <div className="relative w-full aspect-[4/3] bg-neutral-950 rounded-lg overflow-hidden border border-neutral-800 p-4">
        <svg
          viewBox="0 0 300 250"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Loop through coordinates array to render each dot */}
          {seaMapData.map((dot, index) => (
            <circle
              key={`map-dot-${index}`}
              cx={dot.x}
              cy={dot.y}
              r="3" // Radius of the dot
              fill={dot.color}
              className="transition-all duration-300 hover:scale-150 hover:brightness-125 cursor-pointer origin-center"
              style={{ transformOrigin: `${dot.x}px ${dot.y}px` }}
            >
              <title>{`Region Point ${index + 1}`}</title>
            </circle>
          ))}
        </svg>
      </div>

      {/* Map Legend */}
      <div className="flex gap-6 mt-4 text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#7bc1eb]" /> Mainland North
          / Philippines
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#4b88be]" /> Mainland South
          / Central
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#093b70]" />{" "}
          Maritime/Maritime South
        </div>
      </div>
    </div>
  );
};

export default DotSoutheastAsiaMap;
