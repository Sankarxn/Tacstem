import * as React from "react";

const LIME = "#c9f73c";
const MARK = "rgba(255,255,255,0.4)";

/** Even vertical mow bands across the pitch. */
const BANDS = Array.from({ length: 18 }, (_, i) => 60 + i * 65);

const WHITE = [
  { x: 95, y: 400, n: 1 },
  { x: 240, y: 300, n: 4 },
  { x: 240, y: 500, n: 2 },
  { x: 360, y: 400, n: 6 },
  { x: 470, y: 150, n: 3 },
  { x: 480, y: 655, n: 22 },
  { x: 560, y: 330, n: 8 },
  { x: 720, y: 430, n: 10 },
  { x: 790, y: 175, n: 11 },
  { x: 835, y: 640, n: 7 },
  { x: 955, y: 545, n: 9 },
];

const DARK = [
  { x: 1148, y: 400, n: 1 },
  { x: 1032, y: 320, n: 5 },
  { x: 1032, y: 470, n: 6 },
  { x: 945, y: 625, n: 2 },
  { x: 950, y: 225, n: 3 },
  { x: 870, y: 400, n: 4 },
  { x: 770, y: 290, n: 8 },
  { x: 690, y: 575, n: 16 },
  { x: 315, y: 435, n: 9 },
  { x: 540, y: 595, n: 11 },
];

function Token({
  x,
  y,
  n,
  light,
}: {
  x: number;
  y: number;
  n: number;
  light: boolean;
}) {
  return (
    <g>
      <circle cx={x + 3} cy={y + 4} r={17} fill="rgba(0,0,0,0.35)" />
      <circle
        cx={x}
        cy={y}
        r={17}
        fill={light ? "#f1f3ec" : "#2b3033"}
        stroke={light ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.65)"}
        strokeWidth="2"
      />
      <text
        x={x}
        y={y + 5}
        textAnchor="middle"
        fontFamily="'JetBrains Mono', monospace"
        fontSize="15"
        fontWeight="600"
        fill={light ? "#14160f" : "#eef1e9"}
      >
        {n}
      </text>
    </g>
  );
}

function Chip({
  x,
  y,
  w,
  text,
}: {
  x: number;
  y: number;
  w: number;
  text: string;
}) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        width={w}
        height={34}
        rx={6}
        fill="rgba(8,10,8,0.9)"
        stroke="rgba(201,247,60,0.45)"
      />
      <circle cx={13} cy={17} r={3} fill={LIME} />
      <text
        x={24}
        y={22}
        fontFamily="'JetBrains Mono', monospace"
        fontSize="14"
        letterSpacing="1.2"
        fill={LIME}
      >
        {text}
      </text>
    </g>
  );
}

/**
 * Full top-down pitch with a complete telestration pass: build-up triangle,
 * line-breaking pass, target zone, defensive line, player highlight, movement
 * path and an opposition press cue.
 */
export const TelestrationPitch = React.memo(function TelestrationPitch() {
  return (
    <svg
      viewBox="0 0 1240 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <linearGradient id="tp-grass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#143019" />
          <stop offset="60%" stopColor="#17361f" />
          <stop offset="100%" stopColor="#122a18" />
        </linearGradient>
        <radialGradient id="tp-vig" cx="50%" cy="50%" r="78%">
          <stop offset="55%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
        </radialGradient>
        <marker
          id="tp-head"
          viewBox="0 0 26 26"
          refX="23"
          refY="13"
          markerWidth="24"
          markerHeight="24"
          markerUnits="userSpaceOnUse"
          orient="auto"
        >
          <path d="M3 3 L24 13 L3 23 Z" fill={LIME} />
        </marker>
        <marker
          id="tp-head-soft"
          viewBox="0 0 26 26"
          refX="23"
          refY="13"
          markerWidth="22"
          markerHeight="22"
          markerUnits="userSpaceOnUse"
          orient="auto"
        >
          <path d="M3 3 L24 13 L3 23 Z" fill="rgba(255,255,255,0.5)" />
        </marker>
      </defs>

      {/* Surface */}
      <rect x="0" y="0" width="1240" height="800" fill="url(#tp-grass)" />
      {BANDS.map((x, i) => (
        <rect
          key={x}
          x={x}
          y={0}
          width={65}
          height={800}
          fill={i % 2 === 0 ? "rgba(255,255,255,0.045)" : "rgba(0,0,0,0.07)"}
        />
      ))}

      {/* Markings */}
      <g stroke={MARK} strokeWidth="3" fill="none">
        <rect x="60" y="60" width="1120" height="680" />
        <line x1="620" y1="60" x2="620" y2="740" />
        <circle cx="620" cy="400" r="92" />
        {/* Penalty areas */}
        <rect x="60" y="198" width="165" height="403" />
        <rect x="1015" y="198" width="165" height="403" />
        {/* Six-yard boxes */}
        <rect x="60" y="308" width="58" height="183" />
        <rect x="1122" y="308" width="58" height="183" />
        {/* Penalty arcs */}
        <path d="M225 315 A 97.5 97.5 0 0 1 225 485" />
        <path d="M1015 315 A 97.5 97.5 0 0 0 1015 485" />
        {/* Corner arcs */}
        <path d="M166 60 A 106 100 0 0 1 60 160" />
        <path d="M1074 60 A 106 100 0 0 0 1180 160" />
        <path d="M166 740 A 106 100 0 0 0 60 640" />
        <path d="M1074 740 A 106 100 0 0 1 1180 640" />
        {/* Goals */}
        <rect x="44" y="363" width="16" height="74" />
        <rect x="1180" y="363" width="16" height="74" />
      </g>
      <g fill="rgba(255,255,255,0.6)">
        <circle cx="620" cy="400" r="5" />
        <circle cx="177" cy="400" r="5" />
        <circle cx="1063" cy="400" r="5" />
      </g>

      {/* Target zone — pocket between the DM and centre-backs */}
      <rect
        x="890"
        y="300"
        width="120"
        height="200"
        fill="rgba(201,247,60,0.08)"
        stroke="rgba(201,247,60,0.35)"
        strokeWidth="2.5"
        strokeDasharray="12 9"
      />
      <Chip x={866} y={258} w={140} text="ZONE 14" />

      {/* Build-up triangle */}
      <polygon
        points="240,500 360,400 560,330"
        fill="rgba(201,247,60,0.1)"
        stroke="rgba(201,247,60,0.5)"
        strokeWidth="2.5"
      />

      {/* Opposition press cue */}
      <path
        d="M 305 428 L 262 470"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="3"
        strokeDasharray="10 8"
        strokeLinecap="round"
        fill="none"
        markerEnd="url(#tp-head-soft)"
      />

      {/* Line-breaking pass */}
      <path
        d="M 254 490 L 527 349"
        stroke={LIME}
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
        markerEnd="url(#tp-head)"
      />

      {/* #10 arrives into zone 14 */}
      <path
        d="M 748 424 C 812 398, 872 366, 932 344"
        stroke={LIME}
        strokeOpacity="0.85"
        strokeWidth="3.5"
        strokeDasharray="13 7"
        strokeLinecap="round"
        fill="none"
        markerEnd="url(#tp-head)"
        className="animate-tac-flow"
      />

      {/* Defensive line */}
      <polyline
        points="950,215 1032,315 1032,475 950,628"
        fill="none"
        stroke={LIME}
        strokeOpacity="0.6"
        strokeWidth="3"
        strokeDasharray="16 12"
      />

      {/* Players */}
      {DARK.map((p) => (
        <Token key={`d-${p.n}-${p.x}`} x={p.x} y={p.y} n={p.n} light={false} />
      ))}
      {WHITE.map((p) => (
        <Token key={`w-${p.n}-${p.x}`} x={p.x} y={p.y} n={p.n} light />
      ))}

      {/* Target player highlight */}
      <circle
        cx="720"
        cy="430"
        r="32"
        fill="rgba(201,247,60,0.08)"
        stroke={LIME}
        strokeWidth="3"
        strokeDasharray="12 8"
        className="animate-tac-flow"
      />
      <circle
        cx="720"
        cy="430"
        r="32"
        fill="none"
        stroke={LIME}
        strokeWidth="2"
        className="animate-tac-ping"
      />
      <Chip x={686} y={478} w={172} text="10 · TARGET" />

      {/* Ball */}
      <circle cx="272" cy="528" r="9" fill="#f5f7f2" />
      <rect x="0" y="0" width="1240" height="800" fill="url(#tp-vig)" />
    </svg>
  );
});
