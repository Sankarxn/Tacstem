"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  MoveUpRight,
  Orbit,
  CircleDot,
  Flashlight,
  Search,
  Tag,
  Hexagon,
  Scan,
  Radar,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import {
  Container,
  Eyebrow,
  Reveal,
  sectionTitleCls,
} from "@/components/landing/primitives";
import { cn } from "@/lib/utils";

export interface TelestrationTool {
  id: string;
  label: string;
  shortLabel: string;
  startTime: number;
  endTime: number;
  Icon: typeof MoveUpRight;
  description: string;
  tacticalUse: string;
  category: string;
}

/**
 * Exact frame-analyzed timestamps for each visual telestration animation:
 * Video Total Duration: ~22.86s
 * Timings are preserved internally for precise playback looping, but hidden from site visitors.
 */
export const TELESTRATION_TOOLS: TelestrationTool[] = [
  {
    id: "arrow-tools",
    label: "Arrow Tools",
    shortLabel: "Arrows",
    startTime: 0.0,
    endTime: 1.8,
    Icon: MoveUpRight,
    description: "Dynamic directional vectors & curved runner paths",
    tacticalUse: "Visualizing off-the-ball runs, passing options & direct progression lanes",
    category: "Vectors",
  },
  {
    id: "3d-aerial-pass",
    label: "3D Aerial Pass",
    shortLabel: "3D Pass",
    startTime: 2.2,
    endTime: 4.4,
    Icon: Orbit,
    description: "Parabolic trajectory height & 3D landing point marker",
    tacticalUse: "Analyzing lofted switches of play, cross trajectories & aerial delivery",
    category: "3D Flight",
  },
  {
    id: "rings-tactical-line",
    label: "Rings & Tactical Line",
    shortLabel: "Rings & Line",
    startTime: 4.6,
    endTime: 6.9,
    Icon: CircleDot,
    description: "Dual player ring halos connected by live distance vector",
    tacticalUse: "Measuring defensive compactness, distance between lines & pivot support",
    category: "Structure",
  },
  {
    id: "spotlight",
    label: "Spotlight",
    shortLabel: "Spotlight",
    startTime: 7.3,
    endTime: 9.5,
    Icon: Flashlight,
    description: "Player focus beam with darkened pitch vignette",
    tacticalUse: "Directing player attention to key decision-makers and defensive triggers",
    category: "Focus",
  },
  {
    id: "lens-tool",
    label: "Lens Tool",
    shortLabel: "Lens",
    startTime: 10.1,
    endTime: 13.0,
    Icon: Search,
    description: "Optical magnification lens for micro-space & footwork",
    tacticalUse: "Zooming in on body orientation, 1v1 shielding & first-touch mechanics",
    category: "Magnifier",
  },
  {
    id: "name-tag",
    label: "Name Tag",
    shortLabel: "Name Tag",
    startTime: 13.4,
    endTime: 15.6,
    Icon: Tag,
    description: "Player jersey identification tag with role indicators",
    tacticalUse: "Instant squad recognition, player numbering & tactical role assignment",
    category: "Player ID",
  },
  {
    id: "polygon",
    label: "Polygon",
    shortLabel: "Polygon",
    startTime: 16.0,
    endTime: 18.1,
    Icon: Hexagon,
    description: "Geometric team unit shape & shaded zone coverage",
    tacticalUse: "Highlighting defensive mid-block shape, back-four chain & press units",
    category: "Zoning",
  },
  {
    id: "scanning-tool",
    label: "Scanning Tool",
    shortLabel: "Scanning",
    startTime: 18.5,
    endTime: 20.3,
    Icon: Scan,
    description: "Field-of-view scanning cone & head-check indicator",
    tacticalUse: "Tracking player situational awareness, shoulder checks & blind spots",
    category: "Vision",
  },
  {
    id: "radar",
    label: "Radar",
    shortLabel: "Radar",
    startTime: 21.1,
    endTime: 22.6,
    Icon: Radar,
    description: "360° proximity radar & spatial pressure radius",
    tacticalUse: "Visualizing immediate passing angles, tackling radius & pressure sectors",
    category: "Proximity",
  },
];

const VIDEO_URL =
  "https://ik.imagekit.io/oi36ng8jx/Tacstem%20Landing%20Page%20FIles/paraguay-vs-france-1791308216267.webm";

const TOTAL_DURATION = 22.86;

export function TelestrationSection() {
  const [activeToolIndex, setActiveToolIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loopCurrentTool, setLoopCurrentTool] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const activeTool = TELESTRATION_TOOLS[activeToolIndex];

  // Jump to specific tool sequence and play in loop
  const selectTool = useCallback((index: number) => {
    setActiveToolIndex(index);
    const target = TELESTRATION_TOOLS[index];
    const video = videoRef.current;
    if (video) {
      video.currentTime = target.startTime;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    }
  }, []);

  const handlePrevTool = () => {
    const nextIdx =
      activeToolIndex === 0 ? TELESTRATION_TOOLS.length - 1 : activeToolIndex - 1;
    selectTool(nextIdx);
  };

  const handleNextTool = () => {
    const nextIdx =
      activeToolIndex === TELESTRATION_TOOLS.length - 1 ? 0 : activeToolIndex + 1;
    selectTool(nextIdx);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
    } else {
      if (
        loopCurrentTool &&
        (video.currentTime >= activeTool.endTime ||
          video.currentTime < activeTool.startTime - 0.2)
      ) {
        video.currentTime = activeTool.startTime;
      }
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      try {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
        // Lock screen orientation to landscape on supporting mobile devices
        if (typeof window !== "undefined" && "screen" in window) {
          const screenObj = window.screen as unknown as { orientation?: { lock?: (o: string) => Promise<void> } };
          if (screenObj.orientation?.lock) {
            screenObj.orientation.lock("landscape").catch(() => {});
          }
        }
      } catch {
        // Fallback or permission denial handled gracefully
      }
    } else {
      try {
        await document.exitFullscreen();
        setIsFullscreen(false);
        if (typeof window !== "undefined" && "screen" in window) {
          const screenObj = window.screen as unknown as { orientation?: { unlock?: () => void } };
          if (screenObj.orientation?.unlock) {
            screenObj.orientation.unlock();
          }
        }
      } catch {
        // Fallback handled gracefully
      }
    }
  };

  useEffect(() => {
    const onFsChange = () => {
      const isFs = !!document.fullscreenElement;
      setIsFullscreen(isFs);
      if (!isFs && typeof window !== "undefined" && "screen" in window) {
        try {
          const screenObj = window.screen as unknown as { orientation?: { unlock?: () => void } };
          if (screenObj.orientation?.unlock) {
            screenObj.orientation.unlock();
          }
        } catch {
          // ignore
        }
      }
    };
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  // Frame-accurate sequence loop controller
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const checkLoop = () => {
      if (video && !video.paused) {
        const time = video.currentTime;
        setCurrentTime(time);

        if (loopCurrentTool) {
          const currentSeq = TELESTRATION_TOOLS[activeToolIndex];
          // When time crosses sequence boundary, instantly loop back to start of sequence
          if (time >= currentSeq.endTime) {
            video.currentTime = currentSeq.startTime;
          } else if (time < currentSeq.startTime - 0.25) {
            video.currentTime = currentSeq.startTime;
          }
        } else {
          // If free play mode, automatically update active tool to whichever sequence current time is in
          const matchedIndex = TELESTRATION_TOOLS.findIndex(
            (t) => time >= t.startTime && time < t.endTime
          );
          if (matchedIndex !== -1 && matchedIndex !== activeToolIndex) {
            setActiveToolIndex(matchedIndex);
          }
          if (time >= TOTAL_DURATION) {
            video.currentTime = 0;
          }
        }
      }
      animFrameRef.current = requestAnimationFrame(checkLoop);
    };

    animFrameRef.current = requestAnimationFrame(checkLoop);
    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [activeToolIndex, loopCurrentTool]);

  // Deep-link hash navigation for Video Key Moments (SEO Clips)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleHashChange = () => {
        const hash = window.location.hash.replace("#", "");
        if (hash) {
          const idx = TELESTRATION_TOOLS.findIndex((t) => t.id === hash);
          if (idx !== -1) {
            selectTool(idx);
          }
        }
      };

      handleHashChange();
      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, [selectTool]);

  // Initial autoplay handler
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.currentTime = TELESTRATION_TOOLS[0].startTime;
    video
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        setIsPlaying(false);
      });
  }, []);

  // Calculate current progress within the active tool sequence (0% - 100%)
  const seqDuration = Math.max(0.1, activeTool.endTime - activeTool.startTime);
  const seqElapsed = Math.max(
    0,
    Math.min(seqDuration, currentTime - activeTool.startTime)
  );
  const sequenceProgressPercent = (seqElapsed / seqDuration) * 100;

  return (
    <section id="telestration" className="relative py-24 md:py-32">
      <Container>
        {/* Header Section */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <Eyebrow index="03 — BROADCAST TELESTRATION">Visual Impact</Eyebrow>
            <h2 className={`${sectionTitleCls} max-w-2xl`}>
              Turn Tactical Ideas into Crystal-Clear Visuals Your Players Actually Remember.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Deliver Monday Night Football-quality analysis without spending hours inside complex video editors. Spotlight key decision-makers, track passing channels, and draw defensive structures in seconds.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap items-center gap-2 lg:max-w-md lg:justify-end">
              <span className="flex items-center gap-1.5 rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-primary">
                <span className="size-1.5 animate-tac-blink rounded-full bg-primary" />
                9 Broadcast Presets
              </span>
              <span className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                Zero Plugin Fees
              </span>
            </div>
          </Reveal>
        </div>

        {/* Video Player Showcase */}
        <Reveal delay={0.12} className="mt-10">
          <div
            ref={containerRef}
            className={cn(
              "telestration-fullscreen-container group relative transition-all duration-300",
              isFullscreen && "fullscreen-active"
            )}
          >
            {/* Mobile Video Status Header (Outside video canvas) */}
            <div className="mb-2 flex sm:hidden items-center justify-between px-1">
              <div className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-black/80 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-foreground backdrop-blur-md">
                <span className="size-1.5 animate-tac-blink rounded-full bg-primary shadow-[0_0_8px_rgba(201,247,60,0.9)]" />
                <span className="font-semibold text-white">Tacstem Engine</span>
                <span className="text-white/30">|</span>
                <span className="text-muted-foreground">Broadcast</span>
              </div>

              <div className="flex items-center gap-1.5 rounded-lg border border-primary/40 bg-primary/15 px-2 py-1 font-mono text-[10px] font-semibold text-primary backdrop-blur-md">
                <activeTool.Icon className="size-3 shrink-0" />
                <span className="uppercase tracking-wider">{activeTool.shortLabel || activeTool.label}</span>
                {loopCurrentTool && (
                  <span className="flex items-center gap-1 rounded bg-primary/25 px-1 py-0.5 text-[8px] uppercase tracking-widest text-primary">
                    <span className="size-1 animate-tac-blink rounded-full bg-primary" />
                    Loop
                  </span>
                )}
              </div>
            </div>

            <figure
              className={cn(
                "telestration-fullscreen-figure relative aspect-video overflow-hidden rounded-2xl border border-white/15 bg-black shadow-[0_50px_140px_-45px_rgba(0,0,0,0.95)] ring-1 ring-white/10 transition-all duration-300",
                isFullscreen && "!rounded-none !border-none !aspect-auto"
              )}
            >
              <div className="telestration-fullscreen-inner relative size-full flex items-center justify-center overflow-hidden">
                <figcaption className="sr-only">
                  Interactive demonstration of Tacstem 9 broadcast telestration tools:
                  arrows, 3D aerial passes, player rings, spotlights, magnification lens,
                  player ID tags, compactness polygons, vision scanning cones, and radar.
                </figcaption>

              {/* HTML5 Video element */}
              <video
                ref={videoRef}
                src={VIDEO_URL}
                playsInline
                muted={isMuted}
                autoPlay
                preload="metadata"
                onClick={togglePlay}
                onError={(e) => {
                  // Prevent synthetic unhandled browser event bubbling
                  e.stopPropagation();
                  setIsPlaying(false);
                }}
                className="h-full w-full cursor-pointer object-cover"
              />

              {/* Subtle Gradient Overlays for readable HUD elements on Desktop / Tablet only */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-24 sm:h-28 bg-gradient-to-b from-black/85 via-black/40 to-transparent hidden sm:block" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 sm:h-36 bg-gradient-to-t from-black/90 via-black/60 to-transparent hidden sm:block" />

            {/* Top HUD: Left Info + Right Tool Switcher Rail (Desktop & Tablet only) */}
            <div className="absolute inset-x-0 top-0 hidden sm:flex flex-row items-center justify-between p-2.5 sm:p-5 gap-2 pointer-events-none">
              {/* Match and active tool indicator */}
              <div className="flex flex-wrap items-center gap-1.5 pointer-events-auto">
                <div className="flex items-center gap-1.5 rounded-lg border border-white/15 bg-black/80 px-2 py-1 sm:px-2.5 sm:py-1.5 font-mono text-[9.5px] sm:text-[11px] uppercase tracking-[0.12em] text-foreground backdrop-blur-md shadow-lg">
                  <span className="size-1.5 sm:size-2 animate-tac-blink rounded-full bg-primary shadow-[0_0_8px_rgba(201,247,60,0.9)]" />
                  <span className="font-semibold text-white">Tacstem Engine</span>
                  <span className="text-white/30 hidden xs:inline">|</span>
                  <span className="text-muted-foreground hidden xs:inline">Broadcast</span>
                </div>

                {/* Active Tool badge */}
                <div className="flex items-center gap-1.5 rounded-lg border border-primary/40 bg-primary/15 px-2 py-1 font-mono text-[9.5px] sm:text-[11px] font-semibold text-primary backdrop-blur-md">
                  <activeTool.Icon className="size-3 sm:size-3.5 shrink-0" />
                  <span className="uppercase tracking-wider">{activeTool.shortLabel || activeTool.label}</span>
                  {loopCurrentTool && (
                    <span className="flex items-center gap-1 rounded bg-primary/25 px-1 sm:px-1.5 py-0.5 text-[8px] sm:text-[9px] uppercase tracking-widest text-primary">
                      <span className="size-1 animate-tac-blink rounded-full bg-primary" />
                      Loop
                    </span>
                  )}
                </div>
              </div>

              {/* Floating Tool Rail (Quick Icon Selector inside video on Desktop / Tablet only) */}
              <div
                className="hidden sm:flex items-center gap-1 overflow-x-auto rounded-xl border border-white/15 bg-black/85 p-1 sm:p-1.5 shadow-2xl backdrop-blur-md no-scrollbar pointer-events-auto"
              >
                {TELESTRATION_TOOLS.map((t, idx) => {
                  const isActive = activeToolIndex === idx;
                  const ToolIcon = t.Icon;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      title={t.label}
                      aria-label={t.label}
                      aria-pressed={isActive}
                      onClick={() => selectTool(idx)}
                      className={cn(
                        "relative flex size-6.5 sm:size-9 shrink-0 items-center justify-center rounded-lg transition-all duration-200 cursor-pointer touch-manipulation",
                        isActive
                          ? "bg-primary text-black font-semibold shadow-[0_0_14px_rgba(201,247,60,0.6)] scale-105"
                          : "text-white/70 hover:bg-white/15 hover:text-white"
                      )}
                    >
                      <ToolIcon className="size-3 sm:size-4" />
                      {isActive && (
                        <span className="absolute -bottom-1 size-1 rounded-full bg-black" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Middle Quick Click overlay notice if paused (Desktop & Tablet only) */}
            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 hidden sm:flex items-center justify-center bg-black/30 backdrop-blur-[2px] cursor-pointer"
              >
                <div className="flex items-center gap-2 sm:gap-3 rounded-full border border-primary/50 bg-black/85 px-4 sm:px-5 py-2 sm:py-2.5 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-primary shadow-2xl backdrop-blur-md transition-transform hover:scale-105">
                  <Play className="size-3.5 sm:size-4 fill-primary text-primary" />
                  <span>Click to Resume Sequence</span>
                </div>
              </div>
            )}

            {/* Bottom Overlay: Tactical Callout Banner (Desktop & Tablet only) */}
            <div className="absolute bottom-12 sm:bottom-16 left-2 sm:left-5 right-2 sm:right-5 hidden sm:flex flex-col xs:flex-row xs:items-center justify-between gap-1.5 pointer-events-none">
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-black/80 px-2.5 py-1 sm:px-3 sm:py-1.5 backdrop-blur-md max-w-xl">
                <span className="size-1.5 sm:size-2 rounded-full bg-primary shrink-0" />
                <p className="font-mono text-[10px] sm:text-xs text-white/90 truncate">
                  <span className="font-semibold text-primary uppercase">
                    {activeTool.label}:
                  </span>{" "}
                  {activeTool.description}
                </p>
              </div>

              {/* Loop Progress Bar for the active sequence */}
              <div className="hidden xs:flex items-center gap-2 rounded-lg border border-white/10 bg-black/80 px-2.5 py-1 sm:px-3 sm:py-1.5 font-mono text-[9.5px] sm:text-[10px] text-muted-foreground backdrop-blur-md shrink-0">
                <span className="uppercase tracking-wider">Loop</span>
                <div className="h-1.5 w-14 sm:w-20 overflow-hidden rounded-full bg-white/20">
                  <div
                    className="h-full bg-primary transition-[width] duration-75"
                    style={{ width: `${sequenceProgressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Bottom Interactive Transport Controls (Desktop & Tablet only) */}
            <div className="absolute inset-x-0 bottom-0 hidden sm:flex h-11 sm:h-14 items-center gap-1.5 sm:gap-3 border-t border-white/10 bg-black/85 px-2 sm:px-5 backdrop-blur-md">
              {/* Prev tool */}
              <button
                type="button"
                onClick={handlePrevTool}
                title="Previous Tool"
                aria-label="Previous tool"
                className="grid size-6.5 sm:size-8 shrink-0 place-items-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white cursor-pointer touch-manipulation"
              >
                <ChevronLeft className="size-3.5 sm:size-4" />
              </button>

              {/* Play / Pause */}
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause clip" : "Play clip"}
                className="grid size-6.5 sm:size-8 shrink-0 place-items-center rounded-full bg-primary text-black transition-transform active:scale-95 hover:bg-primary/90 cursor-pointer shadow-[0_0_12px_rgba(201,247,60,0.5)] touch-manipulation"
              >
                {isPlaying ? (
                  <Pause className="size-3 sm:size-3.5 fill-black" />
                ) : (
                  <Play className="size-3 sm:size-3.5 fill-black translate-x-[1px]" />
                )}
              </button>

              {/* Next tool */}
              <button
                type="button"
                onClick={handleNextTool}
                title="Next Tool"
                aria-label="Next tool"
                className="grid size-6.5 sm:size-8 shrink-0 place-items-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white cursor-pointer touch-manipulation"
              >
                <ChevronRight className="size-3.5 sm:size-4" />
              </button>

              {/* Real Timeline scrubber with calibrated tool blocks */}
              <div className="relative flex h-6 min-w-0 flex-1 items-center">
                <div className="relative h-2 sm:h-2.5 w-full overflow-hidden rounded-full bg-white/15">
                  {TELESTRATION_TOOLS.map((t, idx) => {
                    const leftPercent = (t.startTime / TOTAL_DURATION) * 100;
                    const widthPercent =
                      ((t.endTime - t.startTime) / TOTAL_DURATION) * 100;
                    const isSelected = activeToolIndex === idx;
                    return (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => selectTool(idx)}
                        title={t.label}
                        style={{
                          left: `${leftPercent}%`,
                          width: `${widthPercent}%`,
                        }}
                        className={cn(
                          "absolute top-0 h-full rounded-sm transition-all duration-150 cursor-pointer touch-manipulation",
                          isSelected
                            ? "bg-primary shadow-[0_0_12px_rgba(201,247,60,0.9)] z-10 brightness-110"
                            : "bg-white/30 hover:bg-white/60"
                        )}
                      />
                    );
                  })}
                </div>

                {/* Scrubber needle */}
                <div
                  className="pointer-events-none absolute top-1/2 size-3 sm:size-3.5 -translate-y-1/2 -translate-x-1/2 rounded-full border-2 border-black bg-primary shadow-[0_0_12px_rgba(201,247,60,1)] transition-transform"
                  style={{
                    left: `${Math.min(100, (currentTime / TOTAL_DURATION) * 100)}%`,
                  }}
                />
              </div>

              {/* Loop Toggle */}
              <button
                type="button"
                onClick={() => setLoopCurrentTool((v) => !v)}
                title={
                  loopCurrentTool
                    ? "Looping active tool (Click to play continuous)"
                    : "Continuous play (Click to loop active tool)"
                }
                className={cn(
                  "hidden sm:flex items-center gap-1 rounded-md px-2 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors cursor-pointer",
                  loopCurrentTool
                    ? "bg-primary/20 text-primary border border-primary/40 font-semibold"
                    : "text-muted-foreground hover:bg-white/10 hover:text-white"
                )}
              >
                <RotateCcw className="size-3" />
                <span className="hidden md:inline">Loop Tool</span>
              </button>

              {/* Mute / Unmute */}
              <button
                type="button"
                onClick={toggleMute}
                title={isMuted ? "Unmute Audio" : "Mute Audio"}
                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                className="grid size-6.5 sm:size-8 shrink-0 place-items-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white cursor-pointer touch-manipulation"
              >
                {isMuted ? (
                  <VolumeX className="size-3.5 sm:size-4" />
                ) : (
                  <Volume2 className="size-3.5 sm:size-4 text-primary" />
                )}
              </button>

              {/* Fullscreen */}
              <button
                type="button"
                onClick={toggleFullscreen}
                title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                className="grid size-6.5 sm:size-8 shrink-0 place-items-center rounded-lg text-white/70 transition-colors hover:bg-white/10 hover:text-white cursor-pointer touch-manipulation"
              >
                {isFullscreen ? (
                  <Minimize2 className="size-3.5 sm:size-4" />
                ) : (
                  <Maximize2 className="size-3.5 sm:size-4" />
                )}
              </button>
            </div>
            </div>
          </figure>

          {/* Mobile Transport Bar & Toolbox (Displayed directly below video on mobile screens without overlapping canvas, in normal view and in fullscreen) */}
          <div
            className={cn(
              "telestration-fullscreen-toolbox mt-3 block sm:hidden w-full",
              isFullscreen && "fullscreen-toolbox-active mt-2 px-2"
            )}
          >
            {/* Dedicated Mobile Playback & Transport Controls Bar (Outside video canvas) */}
            <div className="mb-2 flex items-center gap-1.5 rounded-xl border border-white/10 bg-[#0c0e0c]/95 px-2.5 py-1.5 shadow-lg backdrop-blur-md">
              {/* Play / Pause button */}
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause clip" : "Play clip"}
                className="grid size-7 shrink-0 place-items-center rounded-full bg-primary text-black transition-transform active:scale-95 cursor-pointer shadow-[0_0_10px_rgba(201,247,60,0.5)] touch-manipulation"
              >
                {isPlaying ? (
                  <Pause className="size-3 fill-black" />
                ) : (
                  <Play className="size-3 fill-black translate-x-[1px]" />
                )}
              </button>

              {/* Prev tool */}
              <button
                type="button"
                onClick={handlePrevTool}
                title="Previous Tool"
                aria-label="Previous tool"
                className="grid size-7 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white/80 active:bg-white/15 cursor-pointer touch-manipulation"
              >
                <ChevronLeft className="size-3.5" />
              </button>

              {/* Real Timeline scrubber with calibrated tool blocks */}
              <div className="relative flex h-6 min-w-0 flex-1 items-center">
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/15">
                  {TELESTRATION_TOOLS.map((t, idx) => {
                    const leftPercent = (t.startTime / TOTAL_DURATION) * 100;
                    const widthPercent =
                      ((t.endTime - t.startTime) / TOTAL_DURATION) * 100;
                    const isSelected = activeToolIndex === idx;
                    return (
                      <button
                        key={`mob-scrub-${t.id}`}
                        type="button"
                        onClick={() => selectTool(idx)}
                        title={t.label}
                        style={{
                          left: `${leftPercent}%`,
                          width: `${widthPercent}%`,
                        }}
                        className={cn(
                          "absolute top-0 h-full rounded-sm transition-all duration-150 cursor-pointer touch-manipulation",
                          isSelected
                            ? "bg-primary shadow-[0_0_10px_rgba(201,247,60,0.9)] z-10 brightness-110"
                            : "bg-white/30 hover:bg-white/60"
                        )}
                      />
                    );
                  })}
                </div>

                {/* Scrubber needle */}
                <div
                  className="pointer-events-none absolute top-1/2 size-3 -translate-y-1/2 -translate-x-1/2 rounded-full border-2 border-black bg-primary shadow-[0_0_10px_rgba(201,247,60,1)] transition-transform"
                  style={{
                    left: `${Math.min(100, (currentTime / TOTAL_DURATION) * 100)}%`,
                  }}
                />
              </div>

              {/* Next tool */}
              <button
                type="button"
                onClick={handleNextTool}
                title="Next Tool"
                aria-label="Next tool"
                className="grid size-7 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white/80 active:bg-white/15 cursor-pointer touch-manipulation"
              >
                <ChevronRight className="size-3.5" />
              </button>

              {/* Mute / Unmute */}
              <button
                type="button"
                onClick={toggleMute}
                title={isMuted ? "Unmute Audio" : "Mute Audio"}
                aria-label={isMuted ? "Unmute audio" : "Mute audio"}
                className="grid size-7 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white/80 active:bg-white/15 cursor-pointer touch-manipulation"
              >
                {isMuted ? (
                  <VolumeX className="size-3.5" />
                ) : (
                  <Volume2 className="size-3.5 text-primary" />
                )}
              </button>

              {/* Fullscreen */}
              <button
                type="button"
                onClick={toggleFullscreen}
                title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                className="grid size-7 shrink-0 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-white/80 active:bg-white/15 cursor-pointer touch-manipulation"
              >
                {isFullscreen ? (
                  <Minimize2 className="size-3.5" />
                ) : (
                  <Maximize2 className="size-3.5" />
                )}
              </button>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#0c0e0c]/95 p-2.5 sm:p-3 shadow-lg backdrop-blur-md">
              {/* Toolbox Header */}
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-primary font-semibold">
                  <Sparkles className="size-3.5 text-primary" />
                  <span>Telestration Toolbox</span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-muted-foreground">
                  <span className="text-foreground font-semibold">
                    {activeToolIndex + 1}/{TELESTRATION_TOOLS.length}
                  </span>
                  <span>·</span>
                  <button
                    type="button"
                    onClick={() => setLoopCurrentTool((v) => !v)}
                    className={cn(
                      "px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider transition-colors cursor-pointer border",
                      loopCurrentTool
                        ? "bg-primary/20 border-primary/40 text-primary font-bold"
                        : "border-white/10 text-muted-foreground bg-white/5"
                    )}
                  >
                    {loopCurrentTool ? "Loop On" : "Loop Off"}
                  </button>
                </div>
              </div>

              {/* Horizontal Scrollable Tool Selector Rail */}
              <div className="mt-2.5 flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar touch-pan-x">
                {TELESTRATION_TOOLS.map((t, idx) => {
                  const isActive = activeToolIndex === idx;
                  const ToolIcon = t.Icon;
                  return (
                    <button
                      key={`mob-tool-${t.id}`}
                      type="button"
                      aria-label={t.label}
                      aria-pressed={isActive}
                      onClick={() => selectTool(idx)}
                      className={cn(
                        "flex shrink-0 items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-left transition-all cursor-pointer touch-manipulation",
                        isActive
                          ? "border-primary bg-primary/15 text-primary font-semibold shadow-[0_0_12px_rgba(201,247,60,0.3)] ring-1 ring-primary/40"
                          : "border-white/10 bg-white/[0.03] text-white/70 hover:bg-white/[0.08] hover:text-white"
                      )}
                    >
                      <ToolIcon className={cn("size-3.5", isActive ? "text-primary" : "text-muted-foreground")} />
                      <span className="font-mono text-[11px] whitespace-nowrap">
                        {t.shortLabel || t.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Active Tool Summary Card */}
              <div className="mt-2.5 flex items-center justify-between rounded-lg border border-white/5 bg-black/60 px-3 py-2">
                <div className="flex items-center gap-2 min-w-0 pr-2">
                  <span className="size-1.5 rounded-full bg-primary shrink-0 animate-tac-blink" />
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] font-semibold text-foreground truncate">
                      {activeTool.label}
                      <span className="ml-1.5 text-[9.5px] font-normal text-primary">
                        ({activeTool.category})
                      </span>
                    </p>
                    <p className="text-[10px] text-muted-foreground truncate">
                      {activeTool.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={handlePrevTool}
                    aria-label="Previous tool"
                    className="grid size-7 place-items-center rounded-md border border-white/10 bg-white/[0.04] text-white/80 active:bg-white/15"
                  >
                    <ChevronLeft className="size-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNextTool}
                    aria-label="Next tool"
                    className="grid size-7 place-items-center rounded-md border border-primary/30 bg-primary/10 text-primary active:bg-primary/20"
                  >
                    <ChevronRight className="size-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

        {/* 9-Tool Interactive Selector Cards (Desktop & Tablet only) */}
        <Reveal delay={0.16} className="mt-8 hidden sm:block">
          <div className="flex items-center justify-between pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-primary" />
              <h3 className="font-mono text-xs uppercase tracking-[0.16em] text-foreground">
                Tactical Tools Library · Click to Preview
              </h3>
            </div>
            <span className="font-mono text-[11px] text-muted-foreground">
              Tool {activeToolIndex + 1} of {TELESTRATION_TOOLS.length}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9">
            {TELESTRATION_TOOLS.map((t, idx) => {
              const isActive = activeToolIndex === idx;
              const ToolIcon = t.Icon;
              return (
                <button
                  key={t.id}
                  id={t.id}
                  type="button"
                  onClick={() => selectTool(idx)}
                  className={cn(
                    "group relative flex flex-col justify-between rounded-xl p-3 text-left transition-all duration-200 cursor-pointer border",
                    isActive
                      ? "border-primary bg-primary/[0.08] shadow-[0_0_20px_rgba(201,247,60,0.15)] ring-1 ring-primary/40"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.04]"
                  )}
                >
                  {/* Top: Icon + Category Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className={cn(
                        "grid size-8 place-items-center rounded-lg transition-colors",
                        isActive
                          ? "bg-primary text-black font-semibold shadow-[0_0_10px_rgba(201,247,60,0.5)]"
                          : "border border-white/10 bg-black/40 text-muted-foreground group-hover:text-foreground group-hover:border-white/20"
                      )}
                    >
                      <ToolIcon className="size-4" />
                    </div>
                    <span
                      className={cn(
                        "rounded px-1.5 py-0.5 font-mono text-[10px] tracking-wide font-medium",
                        isActive
                          ? "bg-primary/20 text-primary"
                          : "bg-white/5 text-muted-foreground"
                      )}
                    >
                      {t.category}
                    </span>
                  </div>

                  {/* Middle: Title & Description */}
                  <div className="mt-3">
                    <p
                      className={cn(
                        "text-xs font-semibold tracking-tight transition-colors line-clamp-1",
                        isActive ? "text-primary" : "text-foreground"
                      )}
                    >
                      {t.label}
                    </p>
                    <p className="mt-1 font-mono text-[10px] text-muted-foreground line-clamp-2 leading-relaxed">
                      {t.description}
                    </p>
                  </div>

                  {/* Bottom: Active status indicator */}
                  <div className="mt-3 flex items-center gap-1.5 border-t border-white/5 pt-2">
                    {isActive ? (
                      <>
                        <span className="size-1.5 animate-tac-blink rounded-full bg-primary" />
                        <span className="font-mono text-[9px] uppercase tracking-wider text-primary font-semibold">
                          Active Loop
                        </span>
                      </>
                    ) : (
                      <span className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground/60 group-hover:text-muted-foreground">
                        Click to Loop
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Selected Tool Deep Dive Callout (Desktop & Tablet only) */}
        <Reveal delay={0.2} className="mt-6 hidden sm:block">
          <div className="flex flex-col gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 sm:p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start sm:items-center gap-3.5">
              <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/10 border border-primary/30 text-primary">
                <activeTool.Icon className="size-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-sm font-semibold text-foreground">
                    {activeTool.label}
                  </h4>
                  <span className="rounded bg-primary/15 px-2 py-0.5 font-mono text-[10px] font-semibold text-primary">
                    {activeTool.category} Preset
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {activeTool.tacticalUse}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
              <button
                type="button"
                onClick={handlePrevTool}
                className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground cursor-pointer"
              >
                <ChevronLeft className="size-3.5" />
                Prev Tool
              </button>
              <button
                type="button"
                onClick={handleNextTool}
                className="flex items-center gap-1.5 rounded-lg border border-primary/30 bg-primary/10 px-3 py-1.5 font-mono text-xs font-medium text-primary transition-colors hover:bg-primary/20 cursor-pointer"
              >
                Next Tool
                <ChevronRight className="size-3.5" />
              </button>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
