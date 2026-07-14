// PixelSeaMap.jsx
import { useState } from "react";

const DEALERS = {
  SG: {
    country: "Singapore",
    flag: "🇸🇬",
    type: "Authorised Distributor",
    company: "FGS Asia Pacific Pte. Ltd.",
    address: "10 Anson Road, #10-01, International Plaza, Singapore 079903",
    phone: "+65 6222 3388",
    email: "sg@fgs-asia.com",
    x: 64, // Shifted left to match the updated map layout
    y: 154,
  },
  MY: {
    country: "Malaysia",
    flag: "🇲🇾",
    type: "Authorised Dealer",
    company: "FGS Malaysia Sdn. Bhd.",
    address: "Jalan Ampang, KL City Centre, 50450 Kuala Lumpur",
    phone: "+60 3-2161 9900",
    email: "my@fgs-asia.com",
    x: 58, // Shifted left
    y: 130,
  },
  PH: {
    country: "Philippines",
    flag: "🇵🇭",
    type: "Authorised Dealer",
    company: "FGS Philippines Inc.",
    address: "36th Floor, Ayala Triangle, Makati City, Metro Manila 1200",
    phone: "+63 2-8888 4400",
    email: "ph@fgs-asia.com",
    x: 182, // Shifted left
    y: 104,
  },
  PH2: {
    country: "Philippines",
    flag: "🇵🇭",
    type: "Authorised Distributor",
    company: "FGS Philippines Support Inc.",
    address:
      "Unit 2502, 25th Floor, High Street South Corporate Plaza Tower 2, 26th St., BGC, Taguig City, Metro Manila 1634",
    phone: "+63 2-7900 5500",
    email: "support.ph@fgs-asia.com",
    x: 182,
    y: 104,
  },
  ID: {
    country: "Indonesia",
    flag: "🇮🇩",
    type: "Authorised Distributor",
    company: "PT FGS Indonesia",
    address: "Sudirman Central Business District, Jakarta Pusat 10220",
    phone: "+62 21-5789 2200",
    email: "id@fgs-asia.com",
    x: 110, // Shifted left
    y: 226,
  },
  VN: {
    country: "Vietnam",
    flag: "🇻🇳",
    type: "Authorised Dealer",
    company: "FGS Vietnam Co., Ltd.",
    address: "Level 12, Vincom Center, 72 Le Thanh Ton, Ho Chi Minh City",
    phone: "+84 28-3827 5500",
    email: "vn@fgs-asia.com",
    x: 94, // Shifted left
    y: 102,
  },
};

function SeaMap({ activePin, onPinClick }) {
  const seaColor = "transparent";

  // High-contrast hex colors matching your reference image exactly
  const colors = {
    lightBlue: "#79c2eb", // Myanmar, Philippines, Northern parts
    midBlue: "#2768a9", // Thailand, Central areas
    darkBlue: "#073a70", // Indonesia, Maritime core base
    slateGray: "#647787", // Indochina border accents
    mapcreate: "#ff0000", // Indochina border accents
  };

  // Re-engineered micro-grid system recreating the image shapes
  const mapDots = [
    // --- MYANMAR (Top-Left Light Blue) ---
    { x: 36, y: 6, c: colors.mapcreate },
    { x: 38, y: 4, c: colors.lightBlue },
    { x: 40, y: 2, c: colors.lightBlue },
    { x: 34, y: 8, c: colors.lightBlue },
    { x: 36, y: 8, c: colors.lightBlue },
    { x: 38, y: 8, c: colors.lightBlue },
    { x: 32, y: 12, c: colors.lightBlue },
    { x: 34, y: 12, c: colors.lightBlue },
    { x: 36, y: 12, c: colors.lightBlue },
    { x: 38, y: 12, c: colors.lightBlue },
    { x: 28, y: 16, c: colors.lightBlue },
    { x: 30, y: 16, c: colors.lightBlue },
    { x: 32, y: 16, c: colors.lightBlue },
    { x: 34, y: 16, c: colors.lightBlue },
    { x: 36, y: 16, c: colors.lightBlue },
    { x: 24, y: 20, c: colors.lightBlue },
    { x: 26, y: 20, c: colors.lightBlue },
    { x: 28, y: 20, c: colors.lightBlue },
    { x: 30, y: 20, c: colors.lightBlue },
    { x: 32, y: 20, c: colors.lightBlue },
    { x: 34, y: 20, c: colors.lightBlue },
    { x: 22, y: 24, c: colors.lightBlue },
    { x: 24, y: 24, c: colors.lightBlue },
    { x: 26, y: 24, c: colors.lightBlue },
    { x: 28, y: 24, c: colors.lightBlue },
    { x: 30, y: 24, c: colors.lightBlue },
    { x: 32, y: 24, c: colors.lightBlue },
    { x: 20, y: 28, c: colors.lightBlue },
    { x: 22, y: 28, c: colors.lightBlue },
    { x: 24, y: 28, c: colors.lightBlue },
    { x: 26, y: 28, c: colors.lightBlue },
    { x: 28, y: 28, c: colors.lightBlue },
    { x: 30, y: 28, c: colors.lightBlue },
    { x: 20, y: 32, c: colors.lightBlue },
    { x: 22, y: 32, c: colors.lightBlue },
    { x: 24, y: 32, c: colors.lightBlue },
    { x: 26, y: 32, c: colors.lightBlue },
    { x: 28, y: 32, c: colors.lightBlue },
    { x: 30, y: 32, c: colors.lightBlue },
    { x: 22, y: 36, c: colors.lightBlue },
    { x: 24, y: 36, c: colors.lightBlue },
    { x: 26, y: 36, c: colors.lightBlue },
    { x: 28, y: 36, c: colors.lightBlue },
    { x: 30, y: 36, c: colors.lightBlue },

    // --- THAILAND & INDOCHINA (Mid Blue / Slate Gray / Blended Core) ---
    { x: 48, y: 40, c: colors.midBlue },
    { x: 50, y: 40, c: colors.midBlue },
    { x: 52, y: 40, c: colors.slateGray },
    { x: 76, y: 40, c: colors.midBlue },
    { x: 42, y: 44, c: colors.midBlue },
    { x: 44, y: 44, c: colors.midBlue },
    { x: 46, y: 44, c: colors.midBlue },
    { x: 48, y: 44, c: colors.slateGray },
    { x: 50, y: 44, c: colors.slateGray },
    { x: 74, y: 44, c: colors.midBlue },
    { x: 76, y: 44, c: colors.midBlue },
    { x: 40, y: 48, c: colors.midBlue },
    { x: 42, y: 48, c: colors.midBlue },
    { x: 44, y: 48, c: colors.midBlue },
    { x: 46, y: 48, c: colors.midBlue },
    { x: 48, y: 48, c: colors.midBlue },
    { x: 50, y: 48, c: colors.slateGray },
    { x: 72, y: 48, c: colors.midBlue },
    { x: 74, y: 48, c: colors.midBlue },
    { x: 38, y: 52, c: colors.lightBlue },
    { x: 40, y: 52, c: colors.midBlue },
    { x: 42, y: 52, c: colors.midBlue },
    { x: 44, y: 52, c: colors.midBlue },
    { x: 46, y: 52, c: colors.midBlue },
    { x: 48, y: 52, c: colors.midBlue },
    { x: 50, y: 52, c: colors.midBlue },
    { x: 68, y: 52, c: colors.midBlue },
    { x: 70, y: 52, c: colors.midBlue },
    { x: 72, y: 52, c: colors.midBlue },
    { x: 42, y: 56, c: colors.midBlue },
    { x: 44, y: 56, c: colors.midBlue },
    { x: 46, y: 56, c: colors.midBlue },
    { x: 48, y: 56, c: colors.midBlue },
    { x: 50, y: 56, c: colors.midBlue },
    { x: 52, y: 56, c: colors.midBlue },
    { x: 64, y: 56, c: colors.midBlue },
    { x: 66, y: 56, c: colors.slateGray },
    { x: 68, y: 56, c: colors.midBlue },
    { x: 70, y: 56, c: colors.midBlue },
    { x: 42, y: 60, c: colors.midBlue },
    { x: 44, y: 60, c: colors.midBlue },
    { x: 46, y: 60, c: colors.midBlue },
    { x: 48, y: 60, c: colors.midBlue },
    { x: 50, y: 60, c: colors.midBlue },
    { x: 52, y: 60, c: colors.midBlue },
    { x: 60, y: 60, c: colors.midBlue },
    { x: 62, y: 60, c: colors.midBlue },
    { x: 64, y: 60, c: colors.slateGray },
    { x: 66, y: 60, c: colors.slateGray },
    { x: 68, y: 60, c: colors.midBlue },
    { x: 44, y: 64, c: colors.midBlue },
    { x: 46, y: 64, c: colors.midBlue },
    { x: 48, y: 64, c: colors.midBlue },
    { x: 50, y: 64, c: colors.midBlue },
    { x: 52, y: 64, c: colors.midBlue },
    { x: 54, y: 64, c: colors.midBlue },
    { x: 56, y: 64, c: colors.midBlue },
    { x: 58, y: 64, c: colors.midBlue },
    { x: 60, y: 64, c: colors.midBlue },
    { x: 62, y: 64, c: colors.slateGray },
    { x: 64, y: 64, c: colors.midBlue },
    { x: 44, y: 68, c: colors.midBlue },
    { x: 46, y: 68, c: colors.midBlue },
    { x: 48, y: 68, c: colors.midBlue },
    { x: 50, y: 68, c: colors.midBlue },
    { x: 52, y: 68, c: colors.midBlue },
    { x: 54, y: 68, c: colors.midBlue },
    { x: 56, y: 68, c: colors.midBlue },
    { x: 58, y: 68, c: colors.midBlue },
    { x: 60, y: 68, c: colors.midBlue },
    { x: 62, y: 68, c: colors.midBlue },
    { x: 46, y: 72, c: colors.midBlue },
    { x: 48, y: 72, c: colors.midBlue },
    { x: 50, y: 72, c: colors.midBlue },
    { x: 52, y: 72, c: colors.midBlue },
    { x: 54, y: 72, c: colors.midBlue },
    { x: 56, y: 72, c: colors.midBlue },
    { x: 58, y: 72, c: colors.midBlue },
    { x: 60, y: 72, c: colors.midBlue },
    { x: 46, y: 76, c: colors.midBlue },
    { x: 48, y: 76, c: colors.midBlue },
    { x: 50, y: 76, c: colors.midBlue },
    { x: 52, y: 76, c: colors.midBlue },
    { x: 54, y: 76, c: colors.midBlue },
    { x: 56, y: 76, c: colors.midBlue },
    { x: 58, y: 76, c: colors.midBlue },
    { x: 46, y: 80, c: colors.midBlue },
    { x: 48, y: 80, c: colors.midBlue },
    { x: 50, y: 80, c: colors.midBlue },
    { x: 52, y: 80, c: colors.midBlue },
    { x: 54, y: 80, c: colors.midBlue },
    { x: 48, y: 84, c: colors.midBlue },
    { x: 50, y: 84, c: colors.midBlue },
    { x: 52, y: 84, c: colors.midBlue },
    { x: 66, y: 84, c: colors.midBlue },
    { x: 48, y: 88, c: colors.midBlue },
    { x: 50, y: 88, c: colors.midBlue },

    // --- MALAY PENINSULA (Narrow Strip) ---
    { x: 44, y: 96, c: colors.midBlue },
    { x: 44, y: 100, c: colors.midBlue },
    { x: 42, y: 104, c: colors.midBlue },
    { x: 42, y: 108, c: colors.midBlue },
    { x: 44, y: 112, c: colors.midBlue },
    { x: 46, y: 116, c: colors.midBlue },
    { x: 48, y: 120, c: colors.midBlue },
    { x: 50, y: 124, c: colors.midBlue },
    { x: 52, y: 128, c: colors.midBlue },
    { x: 54, y: 132, c: colors.midBlue },
    { x: 56, y: 136, c: colors.midBlue },
    { x: 58, y: 140, c: colors.midBlue },
    { x: 60, y: 144, c: colors.midBlue },
    { x: 62, y: 148, c: colors.midBlue },
    { x: 64, y: 152, c: colors.midBlue },

    // --- PHILIPPINES (Archipelago Light Blue Segment) ---
    { x: 172, y: 70, c: colors.lightBlue },
    { x: 174, y: 70, c: colors.lightBlue },
    { x: 172, y: 74, c: colors.lightBlue },
    { x: 168, y: 82, c: colors.lightBlue },
    { x: 170, y: 86, c: colors.lightBlue },
    { x: 172, y: 90, c: colors.lightBlue },
    { x: 180, y: 94, c: colors.lightBlue },
    { x: 182, y: 98, c: colors.lightBlue },
    { x: 184, y: 102, c: colors.lightBlue },
    { x: 158, y: 110, c: colors.lightBlue },
    { x: 162, y: 114, c: colors.lightBlue },
    { x: 166, y: 118, c: colors.lightBlue },
    { x: 188, y: 114, c: colors.lightBlue },
    { x: 190, y: 118, c: colors.lightBlue },
    { x: 192, y: 122, c: colors.lightBlue },
    { x: 182, y: 126, c: colors.lightBlue },
    { x: 184, y: 130, c: colors.lightBlue },
    { x: 196, y: 126, c: colors.lightBlue },
    { x: 198, y: 130, c: colors.lightBlue },
    { x: 198, y: 134, c: colors.lightBlue },

    // --- SUMATRA (Slanted Left Ribbon - Deep Dark Ocean Blue) ---
    { x: 24, y: 144, c: colors.darkBlue },
    { x: 28, y: 144, c: colors.darkBlue },
    { x: 32, y: 148, c: colors.darkBlue },
    { x: 36, y: 152, c: colors.darkBlue },
    { x: 40, y: 156, c: colors.darkBlue },
    { x: 44, y: 160, c: colors.darkBlue },
    { x: 48, y: 164, c: colors.darkBlue },
    { x: 52, y: 168, c: colors.darkBlue },
    { x: 56, y: 172, c: colors.darkBlue },
    { x: 60, y: 176, c: colors.darkBlue },
    { x: 64, y: 180, c: colors.darkBlue },
    { x: 68, y: 184, c: colors.darkBlue },
    { x: 72, y: 188, c: colors.darkBlue },
    { x: 76, y: 192, c: colors.darkBlue },
    { x: 80, y: 196, c: colors.darkBlue },
    { x: 84, y: 200, c: colors.darkBlue },
    { x: 88, y: 204, c: colors.darkBlue },

    // --- BORNEO & KALIMANTAN (Central Chunky Landmass) ---
    { x: 114, y: 134, c: colors.slateGray },
    { x: 120, y: 134, c: colors.midBlue },
    { x: 110, y: 140, c: colors.midBlue },
    { x: 114, y: 140, c: colors.midBlue },
    { x: 118, y: 140, c: colors.midBlue },
    { x: 124, y: 140, c: colors.midBlue },
    { x: 104, y: 146, c: colors.midBlue },
    { x: 108, y: 146, c: colors.midBlue },
    { x: 112, y: 146, c: colors.midBlue },
    { x: 116, y: 146, c: colors.midBlue },
    { x: 120, y: 146, c: colors.midBlue },
    { x: 126, y: 146, c: colors.midBlue },
    { x: 100, y: 152, c: colors.darkBlue },
    { x: 104, y: 152, c: colors.darkBlue },
    { x: 108, y: 152, c: colors.darkBlue },
    { x: 112, y: 152, c: colors.darkBlue },
    { x: 116, y: 152, c: colors.darkBlue },
    { x: 120, y: 152, c: colors.darkBlue },
    { x: 96, y: 158, c: colors.darkBlue },
    { x: 100, y: 158, c: colors.darkBlue },
    { x: 104, y: 158, c: colors.darkBlue },
    { x: 108, y: 158, c: colors.darkBlue },
    { x: 112, y: 158, c: colors.darkBlue },
    { x: 116, y: 158, c: colors.darkBlue },
    { x: 120, y: 158, c: colors.darkBlue },
    { x: 98, y: 164, c: colors.darkBlue },
    { x: 102, y: 164, c: colors.darkBlue },
    { x: 106, y: 164, c: colors.darkBlue },
    { x: 110, y: 164, c: colors.darkBlue },
    { x: 114, y: 164, c: colors.darkBlue },
    { x: 118, y: 164, c: colors.darkBlue },
    { x: 102, y: 170, c: colors.darkBlue },
    { x: 106, y: 170, c: colors.darkBlue },
    { x: 110, y: 170, c: colors.darkBlue },
    { x: 114, y: 170, c: colors.darkBlue },
    { x: 118, y: 170, c: colors.darkBlue },

    // --- JAVA & TIMOR chain (Long Thin Bottom Strip) ---
    { x: 92, y: 208, c: colors.darkBlue },
    { x: 96, y: 208, c: colors.darkBlue },
    { x: 100, y: 208, c: colors.darkBlue },
    { x: 104, y: 208, c: colors.darkBlue },
    { x: 108, y: 208, c: colors.darkBlue },
    { x: 112, y: 208, c: colors.darkBlue },
    { x: 116, y: 208, c: colors.darkBlue },
    { x: 120, y: 208, c: colors.darkBlue },
    { x: 132, y: 212, c: colors.darkBlue },
    { x: 136, y: 212, c: colors.darkBlue },
    { x: 140, y: 212, c: colors.darkBlue },
    { x: 144, y: 212, c: colors.darkBlue },
    { x: 148, y: 212, c: colors.darkBlue },
    { x: 156, y: 212, c: colors.darkBlue },
    { x: 160, y: 212, c: colors.darkBlue },
    { x: 168, y: 216, c: colors.darkBlue },
    { x: 172, y: 216, c: colors.darkBlue },
    { x: 176, y: 216, c: colors.darkBlue },
    { x: 184, y: 220, c: colors.darkBlue },

    // --- SULAWESI & EAST INDONESIA ISLANDS (Spiderlike grid on Right) ---
    { x: 138, y: 152, c: colors.darkBlue },
    { x: 142, y: 152, c: colors.darkBlue },
    { x: 146, y: 152, c: colors.darkBlue },
    { x: 158, y: 152, c: colors.darkBlue },
    { x: 138, y: 158, c: colors.darkBlue },
    { x: 148, y: 158, c: colors.darkBlue },
    { x: 152, y: 158, c: colors.darkBlue },
    { x: 156, y: 158, c: colors.darkBlue },
    { x: 138, y: 164, c: colors.darkBlue },
    { x: 142, y: 164, c: colors.darkBlue },
    { x: 146, y: 164, c: colors.darkBlue },
    { x: 172, y: 164, c: colors.darkBlue },
    { x: 138, y: 170, c: colors.darkBlue },
    { x: 142, y: 170, c: colors.darkBlue },
    { x: 166, y: 170, c: colors.darkBlue },
    { x: 170, y: 170, c: colors.darkBlue },
    { x: 174, y: 170, c: colors.darkBlue },
    { x: 138, y: 176, c: colors.darkBlue },
    { x: 154, y: 176, c: colors.darkBlue },
    { x: 158, y: 176, c: colors.darkBlue },
    { x: 174, y: 176, c: colors.darkBlue },
    { x: 178, y: 176, c: colors.darkBlue },
    { x: 138, y: 182, c: colors.darkBlue },
    { x: 154, y: 182, c: colors.darkBlue },
    { x: 182, y: 182, c: colors.darkBlue },
    { x: 186, y: 182, c: colors.darkBlue },
    { x: 186, y: 188, c: colors.darkBlue },
    { x: 190, y: 188, c: colors.darkBlue },
    { x: 194, y: 188, c: colors.darkBlue },
    { x: 198, y: 188, c: colors.darkBlue },
    { x: 190, y: 194, c: colors.darkBlue },
    { x: 194, y: 194, c: colors.darkBlue },
    { x: 198, y: 194, c: colors.darkBlue },
    { x: 202, y: 194, c: colors.darkBlue },
    { x: 206, y: 194, c: colors.darkBlue },
    { x: 194, y: 200, c: colors.darkBlue },
    { x: 198, y: 200, c: colors.darkBlue },
    { x: 202, y: 200, c: colors.darkBlue },
    { x: 206, y: 200, c: colors.darkBlue },
    { x: 206, y: 206, c: colors.darkBlue },
    { x: 206, y: 212, c: colors.darkBlue },
  ];

  // Tight circle radius configuration to match dense pixelation of your sample picture
  const DOT_RADIUS = 1.2;

  return (
    <div
      style={{
        backgroundColor: "#000",
        width: "100%",
        height: "100%",
        padding: "10px",
      }}
    >
      <svg
        viewBox="80 0 240 240"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Refined High-Density Dot Map of South East Asia"
        style={{ width: "100%", height: "100%" }}
      >
        <title>South East Asia dealer network</title>
        <rect x="0" y="0" width="240" height="240" fill={seaColor} />

        {/* Dense Dot Map Layer */}
        {mapDots.map((dot, idx) => (
          <circle
            key={`dense-dot-${idx}`}
            cx={dot.x}
            cy={dot.y}
            r={DOT_RADIUS}
            fill={dot.c}
          />
        ))}

        {/* Dealers Interaction Pin Layer */}
        {Object.entries(DEALERS).map(([code, d]) => {
          if (code === "PH2") return null;
          const isActive =
            activePin === code || (code === "PH" && activePin === "PH2");
          return (
            <g
              key={code}
              className={`fgs-pin${isActive ? " active" : ""}`}
              onClick={() => onPinClick(code)}
              role="button"
              aria-label={`${d.country} dealer`}
              tabIndex={0}
              style={{ cursor: "pointer", outline: "none" }}
              onKeyDown={(e) => e.key === "Enter" && onPinClick(code)}
            >
              {/* Outer Glow Halo Ring */}
              <circle
                cx={d.x}
                cy={d.y}
                r={isActive ? 11 : 7}
                fill={
                  isActive
                    ? "rgba(26, 26, 255, 0.25)"
                    : "rgba(74, 158, 255, 0.08)"
                }
                stroke="#4a9eff"
                strokeWidth={isActive ? 1.2 : 0.8}
                style={{ transition: "all 0.3s ease" }}
              />
              {/* Solid Pin Core */}
              <circle
                cx={d.x}
                cy={d.y}
                r={3.5}
                fill={isActive ? "#7ec8ff" : "#1e4a80"}
                stroke="#4a9eff"
                strokeWidth="1"
              />
              {/* Label Text */}
              <text
                x={d.x}
                y={d.y - 10}
                textAnchor="middle"
                fontSize="5.5"
                fill={isActive ? "#7ec8ff" : "#4a9eff"}
                fontWeight={isActive ? "700" : "500"}
                style={{
                  pointerEvents: "none",
                  fontFamily: "Inter, system-ui, sans-serif",
                  letterSpacing: "0.03em",
                }}
              >
                {d.country.toUpperCase()}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export { DEALERS, SeaMap };
