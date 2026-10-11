import * as React from "react";

const CYAN = "#2ee6f6";
const PITCH_LINE = "rgba(255,255,255,0.55)";

/** Even vertical mow bands, the way a side camera sees a pitch. */
const BANDS = Array.from({ length: 19 }, (_, i) => i * 89);

/** Deterministic crowd speckle for the stand beyond the far touchline. */
const CROWD = Array.from({ length: 340 }, (_, i) => ({
  x: (i * 173) % 1600,
  y: 5 + ((i * 97) % 114),
  r: 2 + ((i * 31) % 3),
  fill: ["#584d68", "#8a7f9c", "#3c3a49", "#9a8f7a", "#6b7f8a"][i % 5],
}));

/** LED advertising boards along the far touchline. */
const LEDS = Array.from({ length: 20 }, (_, i) => i * 84 + 8);

/** Figures further up the frame (deeper) are drawn smaller. */
const depth = (y: number) =>
  Math.min(1.18, Math.max(0.55, 0.6 + ((y - 170) / 714) * 0.58));

type Kit = "light" | "dark";

/** Stylised match figure: shadow, shorts, shirt, head. */
function Figure({ x, y, kit }: { x: number; y: number; kit: Kit }) {
  const s = depth(y);
  const shirt = kit === "light" ? "#8fc3ea" : "#7d1f3f";
  const shorts = kit === "light" ? "#16294a" : "#1d3f8f";
  return (
    <g>
      <ellipse
        cx={x}
        cy={y + 3 * s}
        rx={15 * s}
        ry={4.5 * s}
        fill="rgba(0,0,0,0.4)"
      />
      <rect
        x={x - 6 * s}
        y={y - 13 * s}
        width={12 * s}
        height={13 * s}
        rx={3 * s}
        fill={shorts}
      />
      <rect
        x={x - 8 * s}
        y={y - 31 * s}
        width={16 * s}
        height={20 * s}
        rx={5 * s}
        fill={shirt}
        stroke="rgba(0,0,0,0.28)"
        strokeWidth={1.3}
      />
      <circle cx={x} cy={y - 37 * s} r={5.4 * s} fill="#a8846a" />
    </g>
  );
}

const LIGHT: [number, number][] = [
  [540, 775],
  [648, 628],
  [470, 668],
  [836, 604],
  [905, 468],
  [1042, 418],
];

const DARK: [number, number][] = [
  [886, 566],
  [972, 486],
  [1074, 618],
  [775, 424],
  [1158, 528],
  [1004, 712],
];

/**
 * The match frame that lives inside the app window: daylight pitch with a
 * crowd and LED boards, two teams, and the cyan telestration the analyst has
 * drawn — a filled zone, a control line with handles and a curved aerial
 * arrow. Pure SVG so it stays razor sharp at any size.
 */
export const BroadcastScene = React.memo(function BroadcastScene({
  dashed = false,
}: {
  dashed?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    >
      <defs>
        <linearGradient id="tc-grass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3c7c31" />
          <stop offset="55%" stopColor="#4c9140" />
          <stop offset="100%" stopColor="#559c47" />
        </linearGradient>
        <radialGradient id="tc-vig" cx="50%" cy="46%" r="76%">
          <stop offset="55%" stopColor="#000000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000000" stopOpacity="0.5" />
        </radialGradient>
        <marker
          id="tc-head-cyan"
          viewBox="0 0 26 26"
          refX="23"
          refY="13"
          markerWidth="26"
          markerHeight="26"
          markerUnits="userSpaceOnUse"
          orient="auto"
        >
          <path d="M3 3 L24 13 L3 23 Z" fill={CYAN} />
        </marker>
      </defs>

      {/* Stand beyond the far touchline */}
      <rect x="0" y="0" width="1600" height="126" fill="#191420" />
      {CROWD.map((c, i) => (
        <circle key={i} cx={c.x} cy={c.y} r={c.r} fill={c.fill} />
      ))}

      {/* LED advertising boards */}
      <rect x="0" y="126" width="1600" height="46" fill="#6544e8" />
      <rect x="0" y="126" width="1600" height="3" fill="rgba(0,0,0,0.35)" />
      <rect x="0" y="169" width="1600" height="3" fill="rgba(0,0,0,0.35)" />
      {LEDS.map((x) => (
        <rect
          key={x}
          x={x}
          y={136}
          width={54}
          height={26}
          rx={3}
          fill="rgba(255,255,255,0.78)"
        />
      ))}

      {/* Grass + mow bands */}
      <rect x="0" y="172" width="1600" height="728" fill="url(#tc-grass)" />
      {BANDS.map((x, i) => (
        <rect
          key={x}
          x={x}
          y={172}
          width={89}
          height={728}
          fill={
            i % 2 === 0 ? "rgba(255,255,255,0.055)" : "rgba(0,0,0,0.075)"
          }
        />
      ))}

      {/* Pitch markings — far touchline, goal line, penalty area */}
      <g stroke={PITCH_LINE} strokeWidth="5" fill="none">
        <line x1="0" y1="176" x2="1600" y2="176" />
        <line x1="1556" y1="176" x2="1556" y2="900" />
        <line x1="1150" y1="466" x2="1556" y2="466" />
        <line x1="1150" y1="466" x2="1150" y2="778" />
        <line x1="1150" y1="778" x2="1556" y2="778" />
        <line x1="1392" y1="560" x2="1392" y2="684" />
        <line x1="1392" y1="560" x2="1556" y2="560" />
        <line x1="1392" y1="684" x2="1556" y2="684" />
      </g>
      <circle cx="1268" cy="622" r="6" fill="rgba(255,255,255,0.7)" />

      {/* ---- Telestration: filled zone with a control line + handles ---- */}
      <polygon
        points="500,625 715,478 808,575 592,740"
        fill="rgba(46,230,246,0.42)"
        stroke={CYAN}
        strokeWidth="7"
        strokeLinejoin="round"
      />
      <line
        x1="715"
        y1="478"
        x2="556"
        y2="398"
        stroke="#ffffff"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="715" cy="478" r="9" fill="#ffffff" stroke={CYAN} strokeWidth="4" />
      <circle cx="556" cy="398" r="9" fill="#ffffff" stroke={CYAN} strokeWidth="4" />

      {/* Players */}
      {DARK.map(([x, y]) => (
        <Figure key={`d-${x}-${y}`} x={x} y={y} kit="dark" />
      ))}
      {LIGHT.map(([x, y]) => (
        <Figure key={`a-${x}-${y}`} x={x} y={y} kit="light" />
      ))}

      {/* Ball */}
      <ellipse cx="700" cy="556" rx="8" ry="3" fill="rgba(0,0,0,0.4)" />
      <circle cx="700" cy="548" r="9" fill="#f5f7f2" />

      {/* Aerial arrow */}
      <path
        d="M 715 478 Q 950 235 1195 560"
        stroke={CYAN}
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        markerEnd="url(#tc-head-cyan)"
        {...(dashed
          ? { strokeDasharray: "16 11", className: "animate-tac-flow" }
          : {})}
      />

      {/* Vignette */}
      <rect x="0" y="0" width="1600" height="900" fill="url(#tc-vig)" />
    </svg>
  );
});
