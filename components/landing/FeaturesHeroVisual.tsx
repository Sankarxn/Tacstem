"use client";

import React, { useState } from "react";
import {
  Activity,
  Compass,
  Cpu,
  Eye,
  Hexagon,
  Layers,
  Maximize2,
  MoveUpRight,
  Play,
  RotateCcw,
  Sparkles,
  Zap,
} from "lucide-react";

type ActiveMode = "telestration" | "tagging" | "engine";

export function FeaturesHeroVisual() {
  const [activeMode, setActiveMode] = useState<ActiveMode>("telestration");
  const [isLivePlaying, setIsLivePlaying] = useState<boolean>(true);

  return (
    <div className="relative w-full">
      {/* Outer Glow Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2 rounded-[32px] bg-gradient-to-tr from-primary/20 via-transparent to-primary/5 blur-2xl opacity-60"
      />

      {/* Main Studio Frame */}
      <div className="relative rounded-2xl md:rounded-3xl border border-white/15 bg-[#090b09] shadow-[0_30px_90px_-25px_rgba(0,0,0,0.95)] overflow-hidden">
        {/* Top Header / App Window Chrome */}
        <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-4 py-3 sm:px-5">
          <div className="flex items-center gap-3">
            {/* Mac-style window controls */}
            <div className="flex items-center gap-1.5">
              <span className="size-2.5 rounded-full bg-red-500/70" />
              <span className="size-2.5 rounded-full bg-amber-500/70" />
              <span className="size-2.5 rounded-full bg-emerald-500/70" />
            </div>

            <span className="h-3 w-px bg-white/10" />

            {/* Live Studio Badge */}
            <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-primary animate-tac-blink" />
              <span className="text-foreground font-semibold">Tacstem Studio Pro</span>
              <span className="text-white/30 hidden xs:inline">· Live Session</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-primary">
              <Zap className="size-3" />
              60 FPS GPU
            </span>
            <span className="hidden sm:inline-flex rounded border border-white/10 bg-black/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
              0 B Cloud
            </span>
          </div>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex items-center border-b border-white/10 bg-black/40 px-3 sm:px-4 py-2 gap-1.5 text-xs font-mono">
          <button
            type="button"
            onClick={() => setActiveMode("telestration")}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 transition-all cursor-pointer ${
              activeMode === "telestration"
                ? "bg-primary text-black font-semibold shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            }`}
          >
            <Layers className="size-3.5" />
            <span>9 Broadcast Tools</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveMode("tagging")}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 transition-all cursor-pointer ${
              activeMode === "tagging"
                ? "bg-primary text-black font-semibold shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            }`}
          >
            <Activity className="size-3.5" />
            <span>Hotkey Tagging</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveMode("engine")}
            className={`flex items-center gap-1.5 rounded-md px-2.5 py-1 transition-all cursor-pointer ${
              activeMode === "engine"
                ? "bg-primary text-black font-semibold shadow-sm"
                : "text-muted-foreground hover:text-foreground hover:bg-white/5"
            }`}
          >
            <Cpu className="size-3.5" />
            <span>Memory Engine</span>
          </button>
        </div>

        {/* Video Pitch & Telestration Viewport */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9.5] w-full bg-[#030403] overflow-hidden select-none">
          {/* Tactical Pitch Surface Graphic */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#17381b] via-[#0d2210] to-[#040905]">
            {/* Mow lawn stripes */}
            <div className="absolute inset-0 opacity-15 flex">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className={`flex-1 h-full ${i % 2 === 0 ? "bg-white/20" : "bg-transparent"}`}
                />
              ))}
            </div>

            {/* Pitch Markings SVG */}
            <svg
              className="absolute inset-0 size-full stroke-white/25 stroke-[1.5]"
              viewBox="0 0 600 360"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Touchlines and halfway line */}
              <rect x="25" y="25" width="550" height="310" rx="4" />
              <line x1="300" y1="25" x2="300" y2="335" />
              <circle cx="300" cy="180" r="48" />
              <circle cx="300" cy="180" r="3" fill="rgba(255,255,255,0.4)" stroke="none" />

              {/* Left Penalty Box */}
              <rect x="25" y="85" width="90" height="190" />
              <rect x="25" y="130" width="35" height="100" />
              <path d="M 115 150 A 42 42 0 0 1 115 210" />

              {/* Right Penalty Box */}
              <rect x="485" y="85" width="90" height="190" />
              <rect x="540" y="130" width="35" height="100" />
              <path d="M 485 150 A 42 42 0 0 0 485 210" />
            </svg>
          </div>

          {/* TELESTRATION OVERLAYS (Conditional or dynamically interactive) */}
          <svg
            className="absolute inset-0 size-full"
            viewBox="0 0 600 360"
            fill="none"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Defending compact unit: back-line chain */}
            <g className="transition-opacity duration-300">
              {/* Unit Polygon Shade */}
              <polygon
                points="185,120 280,105 320,195 210,215"
                fill="rgba(46,230,246,0.12)"
                stroke="#2ee6f6"
                strokeWidth="1.5"
                strokeDasharray="4 3"
              />

              {/* Inter-player spacing distance measurement line */}
              <line
                x1="210"
                y1="215"
                x2="320"
                y2="195"
                stroke="#2ee6f6"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="210" cy="215" r="5" fill="#2ee6f6" />
              <circle cx="320" cy="195" r="5" fill="#2ee6f6" />
              <rect x="250" y="196" width="32" height="16" rx="3" fill="#06161c" stroke="#2ee6f6" strokeWidth="1" />
              <text x="266" y="208" textAnchor="middle" fill="#2ee6f6" fontSize="9" fontFamily="monospace" fontWeight="600">
                14.2m
              </text>
            </g>

            {/* Ball Carrier with Animated Spotlight Halo */}
            <g>
              {/* Spotlight Ground Halo */}
              <ellipse
                cx="370"
                cy="235"
                rx="34"
                ry="18"
                fill="rgba(201,247,60,0.18)"
                stroke="#c9f73c"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                className="animate-pulse"
              />
              {/* Player Token */}
              <circle cx="370" cy="235" r="7" fill="#c9f73c" />
              <circle cx="370" cy="235" r="3" fill="#0c1206" />

              {/* Identification Jersey Tag */}
              <rect x="352" y="200" width="36" height="18" rx="4" fill="#080e06" stroke="#c9f73c" strokeWidth="1" />
              <text x="370" y="213" textAnchor="middle" fill="#c9f73c" fontSize="10" fontFamily="monospace" fontWeight="700">
                #8 CM
              </text>
            </g>

            {/* Off-the-ball Runner Trajectory Arc / Arrow */}
            <g>
              <path
                d="M 370 235 Q 430 190 480 220"
                stroke="#c9f73c"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="5 3"
                className="animate-tac-flow"
              />
              {/* Arrow Head */}
              <polygon points="485,221 475,214 476,225" fill="#c9f73c" />

              {/* Target Space Spotlight */}
              <ellipse
                cx="485"
                cy="222"
                rx="20"
                ry="10"
                fill="rgba(201,247,60,0.1)"
                stroke="#c9f73c"
                strokeWidth="1"
              />
            </g>

            {/* 3D Aerial Pass Trajectory Parabola */}
            <g opacity={activeMode === "telestration" ? 1 : 0.6}>
              <path
                d="M 210 215 Q 310 90 440 145"
                stroke="#ffdd57"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
              />
              <circle cx="310" cy="116" r="4" fill="#ffdd57" className="animate-ping" opacity="0.6" />
              <circle cx="310" cy="116" r="3" fill="#ffffff" />
              {/* Drop Landing Target */}
              <ellipse cx="440" cy="145" rx="14" ry="7" fill="rgba(255,221,87,0.2)" stroke="#ffdd57" strokeWidth="1.2" />
            </g>

            {/* Other contextual match figures */}
            <circle cx="185" cy="120" r="5" fill="#f43f5e" />
            <circle cx="280" cy="105" r="5" fill="#f43f5e" />
            <circle cx="440" cy="145" r="6" fill="#3b82f6" />
            <circle cx="130" cy="180" r="6" fill="#f43f5e" />
          </svg>

          {/* Floating Live Telemetry Overlay Bar */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/75 px-2.5 py-1.5 backdrop-blur-md">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-mono text-[10px] text-foreground font-semibold">
                67:14 · Press Break Sequence
              </span>
            </div>

            <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/75 px-2.5 py-1.5 backdrop-blur-md font-mono text-[10px] text-primary">
              <Sparkles className="size-3 text-primary" />
              <span>Telestration Overlay: Active</span>
            </div>
          </div>

          {/* Bottom Video Controls Scrubber */}
          <div className="absolute bottom-3 inset-x-3 rounded-lg border border-white/10 bg-black/85 p-2 backdrop-blur-md flex flex-col gap-1.5">
            {/* Timeline Progress Bar */}
            <div className="relative h-1.5 w-full rounded-full bg-white/15 overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-[64%] bg-primary rounded-full shadow-[0_0_12px_rgba(201,247,60,0.8)]" />
              {/* Event Markers on timeline */}
              <span className="absolute top-0 bottom-0 left-[24%] w-1 bg-amber-400" title="Key Pass" />
              <span className="absolute top-0 bottom-0 left-[48%] w-1 bg-cyan-400" title="Defensive Recovery" />
              <span className="absolute top-0 bottom-0 left-[64%] w-1.5 bg-primary" title="Telestration Frame" />
              <span className="absolute top-0 bottom-0 left-[82%] w-1 bg-rose-400" title="Shot on Target" />
            </div>

            {/* Play/Scrub Controls */}
            <div className="flex items-center justify-between text-muted-foreground font-mono text-[10px]">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsLivePlaying(!isLivePlaying)}
                  className="text-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  <Play className="size-3.5 fill-current" />
                </button>
                <span className="text-foreground">01:07:14</span>
                <span className="text-white/30">/</span>
                <span className="text-white/50">01:45:00</span>
              </div>

              <div className="flex items-center gap-2 text-[10px]">
                <span className="text-primary font-semibold">Q W E R Hotkeys</span>
                <span className="text-white/20">|</span>
                <span className="text-white/70">MP4 1080p @ 60fps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
