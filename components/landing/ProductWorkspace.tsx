"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeftRight,
  ChevronLeft,
  Circle,
  Clock,
  CornerUpRight,
  Crosshair,
  Download,
  Eraser,
  ExternalLink,
  FileCode,
  Flashlight,
  GripVertical,
  Hexagon,
  Layers,
  Minus,
  MousePointer2,
  MoveUpRight,
  Pause,
  Pencil,
  PenLine,
  Play,
  Plus,
  Redo2,
  RotateCcw,
  RotateCw,
  Save,
  Search,
  Settings,
  Settings2,
  SkipBack,
  SkipForward,
  Tag,
  Tags,
  Trash2,
  Type,
  Undo2,
  Upload,
  User,
  Volume2,
  Wand2,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

// 8 Top Bar and Kit Color Swatches matching screenshot
const SWATCHES = [
  { id: 1, name: "Red", value: "#ef4444" },
  { id: 2, name: "Yellow", value: "#facc15" },
  { id: 3, name: "Blue", value: "#3b82f6" },
  { id: 4, name: "Green", value: "#22c55e" },
  { id: 5, name: "White", value: "#ffffff" },
  { id: 6, name: "Cyan", value: "#06b6d4" },
  { id: 7, name: "Orange", value: "#f97316" },
  { id: 8, name: "Magenta", value: "#d946ef" },
];

export interface StampedPlayerTag {
  id: string;
  xPercent: number; // 0 to 100 percentage of container width
  yPercent: number; // 0 to 100 percentage of container height
  playerNumber: string;
  playerName: string;
  kitColor: string;
  fontSize: number;
  showNumber: boolean;
  uppercase: boolean;
}

export interface PlayerRosterItem {
  id: string;
  number: string;
  name: string;
}

const DEFAULT_HOME_PLAYERS: PlayerRosterItem[] = [
  { id: "h1", number: "31", name: "EDERSON" },
  { id: "h2", number: "2", name: "WALKER" },
  { id: "h3", number: "3", name: "DIAS" },
  { id: "h4", number: "25", name: "AKANJI" },
  { id: "h5", number: "24", name: "GVARDIOL" },
  { id: "h6", number: "16", name: "RODRI" },
  { id: "h7", number: "17", name: "DE BRUYNE" },
  { id: "h8", number: "8", name: "KOVACIC" },
  { id: "h9", number: "20", name: "BERNARDO" },
  { id: "h10", number: "9", name: "HAALAND" },
  { id: "h11", number: "47", name: "FODEN" },
];

const DEFAULT_AWAY_PLAYERS: PlayerRosterItem[] = [
  { id: "a1", number: "22", name: "RAYA" },
  { id: "a2", number: "4", name: "WHITE" },
  { id: "a3", number: "2", name: "SALIBA" },
  { id: "a4", number: "6", name: "GABRIEL" },
  { id: "a5", number: "12", name: "TIMBER" },
  { id: "a6", number: "41", name: "RICE" },
  { id: "a7", number: "8", name: "ODEGAARD" },
  { id: "a8", number: "23", name: "MERINO" },
  { id: "a9", number: "7", name: "SAKA" },
  { id: "a10", number: "29", name: "HAVERTZ" },
  { id: "a11", number: "11", name: "MARTINELLI" },
];

const DEFAULT_TAG_BUTTONS = [
  { id: "b1", name: "Goal", key: "1", color: "#3b82f6" },
  { id: "b2", name: "Shot on Target", key: "2", color: "#22c55e" },
  { id: "b3", name: "Shot off Target", key: "3", color: "#ef4444" },
  { id: "b4", name: "Key Pass / Chance", key: "4", color: "#facc15" },
  { id: "b5", name: "Cross", key: "5", color: "#06b6d4" },
  { id: "b6", name: "Interception", key: "6", color: "#a855f7" },
  { id: "b7", name: "Tackle / Duel", key: "7", color: "#f97316" },
  { id: "b8", name: "Foul Committed", key: "8", color: "#ec4899" },
  { id: "b9", name: "Corner Kick", key: "9", color: "#eab308" },
  { id: "b10", name: "Free Kick", key: "0", color: "#14b8a6" },
  { id: "b11", name: "Offside", key: "0", color: "#64748b" },
  { id: "b12", name: "Turnover / Lost", key: "T", color: "#ef4444" },
];

export function ProductWorkspace() {
  // Top Match Name
  const [matchTitle, setMatchTitle] = useState("France vs Senegal");
  const [isEditingMatchTitle, setIsEditingMatchTitle] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  // Active Tool state (Player Tag tool is active by default and fully working)
  const [activeTool, setActiveTool] = useState<string>("tag");

  // Home / Away Team state
  const [activeTeam, setActiveTeam] = useState<"Home" | "Away">("Home");
  const [homeKitColor, setHomeKitColor] = useState("#06b6d4"); // Cyan for Man City / Home
  const [awayKitColor, setAwayKitColor] = useState("#ef4444"); // Red for Away
  const [homePlayers, setHomePlayers] = useState<PlayerRosterItem[]>(DEFAULT_HOME_PLAYERS);
  const [awayPlayers, setAwayPlayers] = useState<PlayerRosterItem[]>(DEFAULT_AWAY_PLAYERS);
  const [selectedPlayerId, setSelectedPlayerId] = useState<string>("h7"); // De Bruyne

  // Tag configuration
  const [tagSize, setTagSize] = useState<number>(14);
  const [showNumber, setShowNumber] = useState<boolean>(true);
  const [uppercase, setUppercase] = useState<boolean>(true);

  // Quick Add player inputs
  const [newNumber, setNewNumber] = useState("");
  const [newName, setNewName] = useState("");

  // Stamped Player Tags on Pitch (pre-seeded with realistic broadcast tags)
  const [stampedTags, setStampedTags] = useState<StampedPlayerTag[]>([
    {
      id: "seed-1",
      xPercent: 49.5,
      yPercent: 46.8,
      playerNumber: "17",
      playerName: "DE BRUYNE",
      kitColor: "#06b6d4",
      fontSize: 14,
      showNumber: true,
      uppercase: true,
    },
    {
      id: "seed-2",
      xPercent: 34.2,
      yPercent: 39.5,
      playerNumber: "9",
      playerName: "HAALAND",
      kitColor: "#06b6d4",
      fontSize: 14,
      showNumber: true,
      uppercase: true,
    },
  ]);

  const [selectedTagId, setSelectedTagId] = useState<string | null>(null);
  const [draggingTagId, setDraggingTagId] = useState<string | null>(null);

  // Video / Timeline controls
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSeconds, setCurrentSeconds] = useState<number>(28 * 60 + 14.3); // 28:14.3
  const totalDuration = 114 * 60 + 20.0; // 114:20.0
  const [speed, setSpeed] = useState<string>("1.0x");
  const [volume, setVolume] = useState<number>(65);

  // Mobile drawer view state: "playerTag" | "events" | "tools"
  const [mobileActivePanel, setMobileActivePanel] = useState<"playerTag" | "events" | "tools">("playerTag");

  // Right Sidebar State
  const [activeTab, setActiveTab] = useState<"TAGS" | "EVENTS" | "NOTES" | "PLAYLIST">("TAGS");
  const [eventTaggingOn, setEventTaggingOn] = useState<boolean>(false);
  const [labelsOn, setLabelsOn] = useState<boolean>(false);
  const [tagCounts, setTagCounts] = useState<Record<string, number>>({
    b1: 0,
    b2: 0,
    b3: 0,
    b4: 0,
    b5: 0,
    b6: 0,
    b7: 0,
    b8: 0,
    b9: 0,
    b10: 0,
    b11: 0,
    b12: 0,
  });

  const [loggedEvents, setLoggedEvents] = useState<Array<{ id: string; name: string; time: string; color: string }>>([
    { id: "e1", name: "Goal", time: "27:52.8", color: "#3b82f6" },
    { id: "e2", name: "Shot on Target", time: "18:34.1", color: "#22c55e" },
  ]);

  // Toast notifications
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 2800);
  };

  // Active Team variables
  const currentSquad = activeTeam === "Home" ? homePlayers : awayPlayers;
  const currentKitColor = activeTeam === "Home" ? homeKitColor : awayKitColor;
  const activePlayer =
    currentSquad.find((p) => p.id === selectedPlayerId) || currentSquad[0] || { id: "0", number: "17", name: "DE BRUYNE" };

  // Playing simulation
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentSeconds((prev) => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.1;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, totalDuration]);

  // Format seconds to mm:ss.f
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = (secs % 60).toFixed(1);
    const sPadded = Number(s) < 10 ? `0${s}` : s;
    return `${m}:${sPadded}`;
  };

  // Canvas interaction: click to stamp active player tag
  const pitchContainerRef = useRef<HTMLDivElement>(null);

  const stampAtPoint = (clientX: number, clientY: number) => {
    if (draggingTagId) return;
    if (!pitchContainerRef.current) return;

    const rect = pitchContainerRef.current.getBoundingClientRect();
    const clickX = clientX - rect.left;
    const clickY = clientY - rect.top;

    const xPercent = Math.max(2, Math.min(98, (clickX / rect.width) * 100));
    const yPercent = Math.max(5, Math.min(95, (clickY / rect.height) * 100));

    const newTag: StampedPlayerTag = {
      id: `tag-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      xPercent,
      yPercent,
      playerNumber: activePlayer.number,
      playerName: activePlayer.name,
      kitColor: currentKitColor,
      fontSize: tagSize,
      showNumber,
      uppercase,
    };

    setStampedTags((prev) => [...prev, newTag]);
    showToast(`Stamped #${activePlayer.number} ${activePlayer.name}`);
  };

  const handlePitchClick = (e: React.MouseEvent<HTMLDivElement>) => {
    stampAtPoint(e.clientX, e.clientY);
  };

  // Quick add player to squad
  const handleAddPlayer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const formattedName = uppercase ? newName.trim().toUpperCase() : newName.trim();
    const newPlayerItem: PlayerRosterItem = {
      id: `p-${Date.now()}`,
      number: newNumber.trim() || `${currentSquad.length + 1}`,
      name: formattedName,
    };

    if (activeTeam === "Home") {
      setHomePlayers((prev) => [...prev, newPlayerItem]);
    } else {
      setAwayPlayers((prev) => [...prev, newPlayerItem]);
    }

    setSelectedPlayerId(newPlayerItem.id);
    setNewNumber("");
    setNewName("");
    showToast(`Added ${formattedName} to ${activeTeam}`);
  };

  // Export CSV
  const handleExportCsv = () => {
    const csvRows = [
      ["Type", "Timestamp", "Player_Number", "Player_Name", "Team", "Match"],
      ...stampedTags.map((t) => [
        "Player_Tag",
        formatTime(currentSeconds),
        t.playerNumber,
        t.playerName,
        t.kitColor === homeKitColor ? "Home" : "Away",
        matchTitle,
      ]),
      ...loggedEvents.map((e) => ["Event_Tag", e.time, "", e.name, "", matchTitle]),
    ];

    const csvContent = "data:text/csv;charset=utf-8," + csvRows.map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `tacstem_${matchTitle.toLowerCase().replace(/\s+/g, "_")}_analysis.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    showToast("Exported analysis CSV successfully!");
  };

  // Handle Event Tag Button click - ONLY COUNTS IF EVENT TAGGING IS ON
  const handleTagButtonClick = (btn: (typeof DEFAULT_TAG_BUTTONS)[0]) => {
    if (!eventTaggingOn) {
      showToast(`Turn ON 'Event Tagging' toggle switch above to log ${btn.name}`);
      return;
    }

    setTagCounts((prev) => ({
      ...prev,
      [btn.id]: (prev[btn.id] || 0) + 1,
    }));

    setLoggedEvents((prev) => [
      {
        id: `ev-${prev.length + 1}-${Math.random().toString(36).slice(2, 6)}`,
        name: btn.name,
        time: formatTime(currentSeconds),
        color: btn.color,
      },
      ...prev,
    ]);
    showToast(`Logged event: ${btn.name} (${formatTime(currentSeconds)})`);
  };

  const progressPercent = Math.min(100, Math.max(0, (currentSeconds / totalDuration) * 100));

  return (
    <figure
      aria-label="TacStem Interactive Match Analysis Studio"
      className="relative w-full overflow-hidden rounded-xl border border-[#272a34] bg-[#0c0d11] text-gray-200 shadow-[0_40px_100px_-25px_rgba(0,0,0,0.95)] select-none font-sans"
    >
      {/* AEO Structured Semantic Content for Search Engines */}
      <figcaption className="sr-only">
        TacStem professional football video analysis workspace: 16:9 full HD tactical footage viewport, live player
        name tag stamping tool with kit color swatches, event coding pad, and timeline scrubber.
      </figcaption>

      {/* Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="absolute top-12 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full border border-[#c6ff1f]/60 bg-[#141812]/95 px-4 py-1.5 font-mono text-xs text-[#c6ff1f] shadow-2xl backdrop-blur"
        >
          <span className="size-1.5 rounded-full bg-[#c6ff1f] animate-ping" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ==================== 1. TOP BAR ==================== */}
      <header className="flex h-11 items-center justify-between border-b border-[#20232c] bg-[#090a0e] px-2 sm:px-3 text-xs">
        {/* Left: Back button & TacStem Logo & Match Title */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <Link
            href="/"
            className="flex items-center gap-1 rounded border border-[#2a2d38] bg-[#14161e] px-2.5 py-1 text-[10.5px] font-bold text-gray-300 transition-colors hover:border-[#c6ff1f]/50 hover:text-white"
          >
            <ChevronLeft className="size-3.5" />
            <span>BACK</span>
          </Link>

          {/* TacStem Logo */}
          <div className="flex items-center gap-2">
            <div className="relative flex size-5 items-center justify-center">
              <svg viewBox="0 0 24 24" className="size-5 text-[#c6ff1f]" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <circle cx="12" cy="12" r="3" />
                <path d="M9 3v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V3" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-sans text-[13px] font-black tracking-tight text-[#c6ff1f]">TacStem</span>
              <span className="font-mono text-[6.5px] font-bold tracking-[0.18em] text-gray-400">FOOTBALL ANALYSIS</span>
            </div>
          </div>

          <span className="h-4 w-px bg-[#20232c] hidden sm:block" />

          {/* Match Title Badge with Editable Pencil */}
          <div className="flex items-center gap-1.5 rounded-md border border-[#242732] bg-[#12141c] px-2 py-0.5 text-[11px] font-semibold text-gray-200">
            {isEditingMatchTitle ? (
              <input
                type="text"
                aria-label="Match title"
                value={matchTitle}
                onChange={(e) => setMatchTitle(e.target.value)}
                onBlur={() => setIsEditingMatchTitle(false)}
                onKeyDown={(e) => e.key === "Enter" && setIsEditingMatchTitle(false)}
                autoFocus
                className="bg-transparent text-white outline-none border-b border-[#c6ff1f] w-32"
              />
            ) : (
              <span onClick={() => setIsEditingMatchTitle(true)} className="cursor-pointer hover:text-[#c6ff1f] transition-colors truncate max-w-[110px] sm:max-w-none">
                {matchTitle}
              </span>
            )}
            <Pencil
              onClick={() => setIsEditingMatchTitle(true)}
              className="size-3 text-gray-400 hover:text-white cursor-pointer shrink-0"
            />
          </div>
        </div>

        {/* Center Actions: Undo, Redo, Eraser, Trash */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 text-gray-400">
          <button
            type="button"
            aria-label="Undo"
            onClick={() => showToast("Undo action")}
            className="hover:text-white transition-colors cursor-pointer p-1 touch-manipulation"
            title="Undo"
          >
            <Undo2 className="size-3.5 sm:size-4" />
          </button>
          <button
            type="button"
            aria-label="Redo"
            onClick={() => showToast("Redo action")}
            className="hover:text-white transition-colors cursor-pointer p-1 touch-manipulation"
            title="Redo"
          >
            <Redo2 className="size-3.5 sm:size-4" />
          </button>
          <button
            type="button"
            aria-label="Toggle Erase Tool"
            onClick={() => {
              const next = activeTool === "erase" ? "tag" : "erase";
              setActiveTool(next);
              showToast(next === "erase" ? "Erase Tool Active: Click any player tag on screen to erase it" : "Player Tag Tool Active");
            }}
            className={cn(
              "transition-all cursor-pointer p-1 rounded touch-manipulation",
              activeTool === "erase" ? "text-[#c6ff1f] bg-[#c6ff1f]/20 ring-1 ring-[#c6ff1f]" : "hover:text-white text-gray-400"
            )}
            title={activeTool === "erase" ? "Erase Tool (Active - click any tag on screen to erase)" : "Select Erase Tool"}
          >
            <Eraser className="size-3.5 sm:size-4" />
          </button>
          <button
            type="button"
            aria-label="Clear all stamped player tags"
            onClick={() => {
              setStampedTags([]);
              showToast("Cleared all stamped player tags");
            }}
            className="hover:text-red-400 transition-colors cursor-pointer p-1"
            title="Clear all canvas tags"
          >
            <Trash2 className="size-4" />
          </button>
        </div>

        {/* Right: Stopwatch, Record Button, Color Swatches */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            type="button"
            aria-label="Timer"
            onClick={() => showToast("Timer opened")}
            className="text-gray-400 hover:text-white p-1 cursor-pointer hidden xs:block"
            title="Timer"
          >
            <Clock className="size-4" />
          </button>

          {/* Record Button */}
          <button
            type="button"
            aria-label="Toggle Recording"
            onClick={() => {
              setIsRecording(!isRecording);
              showToast(isRecording ? "Recording stopped" : "Recording started (Mock)");
            }}
            className={cn(
              "flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider transition-all cursor-pointer",
              isRecording
                ? "border-red-500 bg-red-500/20 text-red-400 animate-pulse shadow-[0_0_12px_rgba(239,68,68,0.4)]"
                : "border-[#323644] bg-[#14161f] text-gray-300 hover:border-red-500/50 hover:text-white"
            )}
          >
            <span className="size-2 rounded-full bg-red-500" />
            <span>RECORD</span>
          </button>

          {/* 8 Color Swatches */}
          <div className="hidden lg:flex items-center gap-1.5 pl-1 border-l border-[#242732]">
            {SWATCHES.map((swatch) => (
              <button
                key={swatch.id}
                type="button"
                aria-label={`Set kit color to ${swatch.name}`}
                onClick={() => {
                  if (activeTeam === "Home") {
                    setHomeKitColor(swatch.value);
                  } else {
                    setAwayKitColor(swatch.value);
                  }
                  showToast(`${swatch.name} kit color applied`);
                }}
                className={cn(
                  "size-3.5 rounded-full transition-all cursor-pointer hover:scale-125",
                  currentKitColor === swatch.value && "ring-2 ring-white scale-110 shadow-sm"
                )}
                style={{ backgroundColor: swatch.value }}
                title={`Set kit color to ${swatch.name}`}
              />
            ))}
          </div>
        </div>
      </header>

      {/* Mobile Selector Bar for Panels (< lg screens) */}
      <div className="flex lg:hidden items-center justify-between border-b border-[#20232c] bg-[#11131b] px-2.5 py-1.5 text-xs overflow-x-auto custom-scrollbar">
        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            onClick={() => setMobileActivePanel("playerTag")}
            className={cn(
              "px-2.5 py-1 rounded text-[10px] font-bold font-mono uppercase tracking-wider transition-colors cursor-pointer touch-manipulation",
              mobileActivePanel === "playerTag" ? "bg-[#c6ff1f] text-black shadow-sm" : "text-gray-400 hover:text-white bg-[#161822]"
            )}
          >
            Roster ({activeTeam})
          </button>
          <button
            type="button"
            onClick={() => setMobileActivePanel("events")}
            className={cn(
              "px-2.5 py-1 rounded text-[10px] font-bold font-mono uppercase tracking-wider transition-colors cursor-pointer touch-manipulation",
              mobileActivePanel === "events" ? "bg-[#c6ff1f] text-black shadow-sm" : "text-gray-400 hover:text-white bg-[#161822]"
            )}
          >
            Event Pad ({loggedEvents.length + stampedTags.length})
          </button>
          <button
            type="button"
            onClick={() => setMobileActivePanel("tools")}
            className={cn(
              "px-2.5 py-1 rounded text-[10px] font-bold font-mono uppercase tracking-wider transition-colors cursor-pointer touch-manipulation",
              mobileActivePanel === "tools" ? "bg-[#c6ff1f] text-black shadow-sm" : "text-gray-400 hover:text-white bg-[#161822]"
            )}
          >
            Draw Tools
          </button>
        </div>

        <span className="text-[8.5px] font-mono text-[#c6ff1f] whitespace-nowrap pl-2 hidden xs:inline">
          Tap pitch to stamp
        </span>
      </div>

      {/* Mobile Horizontal Tool Rail (visible on mobile when "tools" panel is selected) */}
      {mobileActivePanel === "tools" && (
        <div className="flex lg:hidden items-center gap-1.5 border-b border-[#20232c] bg-[#0c0d12] px-2.5 py-2 overflow-x-auto custom-scrollbar shrink-0">
          {[
            { id: "select", Icon: MousePointer2, label: "Select (V)" },
            { id: "pen", Icon: PenLine, label: "Draw (D)" },
            { id: "arrow", Icon: MoveUpRight, label: "Arrow (A)" },
            { id: "curved-arrow", Icon: CornerUpRight, label: "Curved Arrow" },
            { id: "circle", Icon: Circle, label: "Ring (C)" },
            { id: "line", Icon: Minus, label: "Measure (L)" },
            { id: "spotlight", Icon: Flashlight, label: "Spotlight" },
            { id: "zoom", Icon: Search, label: "Zoom Lens" },
            { id: "user", Icon: User, label: "Player Token" },
            { id: "tag", Icon: Tag, label: "Player Tag" },
            { id: "erase", Icon: Eraser, label: "Erase (E)" },
            { id: "text", Icon: Type, label: "Text (T)" },
            { id: "polygon", Icon: Hexagon, label: "Polygon" },
            { id: "scanner", Icon: Crosshair, label: "Scanner" },
          ].map(({ id, Icon, label }) => {
            const isSelectedTool = activeTool === id;
            return (
              <button
                key={`mobile-${id}`}
                type="button"
                aria-label={label}
                title={label}
                onClick={() => {
                  if (id === "tag") {
                    setActiveTool("tag");
                    showToast("Player Tag Tool Active: Tap pitch to stamp");
                  } else if (id === "erase") {
                    const next = activeTool === "erase" ? "tag" : "erase";
                    setActiveTool(next);
                    showToast(next === "erase" ? "Erase Tool Active: Tap any tag on pitch to erase" : "Player Tag Tool Active");
                  } else {
                    showToast(`${label} selected`);
                  }
                }}
                className={cn(
                  "flex items-center gap-1 px-2.5 py-1.5 rounded text-[10px] font-mono shrink-0 transition-all cursor-pointer touch-manipulation",
                  isSelectedTool
                    ? "border border-[#c6ff1f] bg-[#c6ff1f]/20 text-[#c6ff1f] font-bold shadow-[0_0_8px_rgba(198,255,31,0.3)]"
                    : "border border-[#232734] bg-[#141620] text-gray-300 hover:text-white"
                )}
              >
                <Icon className="size-3.5" />
                <span>{label.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* ==================== 2. MAIN WORKSPACE BODY ==================== */}
      <div className="flex flex-col lg:flex-row overflow-hidden">
        {/* ----- 2A. LEFT VERTICAL TOOL RAIL (DESKTOP) ----- */}
        <nav
          aria-label="Telestration Drawing Toolbar"
          className="hidden lg:flex w-10 shrink-0 flex-col items-center gap-1 border-r border-[#20232c] bg-[#0c0d12] py-2"
        >
          {[
            { id: "select", Icon: MousePointer2, label: "Select (V)" },
            { id: "pen", Icon: PenLine, label: "Freehand Draw (D)" },
            { id: "arrow", Icon: MoveUpRight, label: "Aerial Arrow (A)" },
            { id: "curved-arrow", Icon: CornerUpRight, label: "Curved Arrow" },
            { id: "circle", Icon: Circle, label: "Player Ring (C)" },
            { id: "line", Icon: Minus, label: "Measure Line (L)" },
            { id: "spotlight", Icon: Flashlight, label: "Spotlight" },
            { id: "zoom", Icon: Search, label: "Zoom Lens" },
            { id: "user", Icon: User, label: "Player Token" },
            { id: "tag", Icon: Tag, label: "Player Tag Tool (Active)" }, // Active Working Tool
            { id: "erase", Icon: Eraser, label: "Erase Tool (E)" }, // Active Working Erase Tool
            { id: "text", Icon: Type, label: "Text Label (T)" },
            { id: "polygon", Icon: Hexagon, label: "Zone Polygon" },
            { id: "scanner", Icon: Crosshair, label: "Field Scanner" },
            { id: "settings", Icon: Settings, label: "Canvas Settings" },
          ].map(({ id, Icon, label }) => {
            const isSelectedTool = activeTool === id;
            return (
              <button
                key={id}
                type="button"
                aria-label={label}
                title={label}
                onClick={() => {
                  if (id === "tag") {
                    setActiveTool("tag");
                    showToast("Player Tag Tool Active: Click pitch to stamp tags");
                  } else if (id === "erase") {
                    const next = activeTool === "erase" ? "tag" : "erase";
                    setActiveTool(next);
                    showToast(next === "erase" ? "Erase Tool Active: Click any player tag on screen to erase it" : "Player Tag Tool Active");
                  } else {
                    showToast(`${label} (Mock UI) · Player Tag & Erase are active`);
                  }
                }}
                className={cn(
                  "grid size-7 place-items-center rounded transition-all cursor-pointer relative",
                  isSelectedTool
                    ? "border border-[#c6ff1f] bg-[#c6ff1f]/15 text-[#c6ff1f] shadow-[0_0_10px_rgba(198,255,31,0.25)]"
                    : "text-gray-400 hover:bg-[#181a24] hover:text-gray-200"
                )}
              >
                <Icon className="size-3.5" />
              </button>
            );
          })}
        </nav>

        {/* ----- 2B. LEFT SECONDARY PANEL: PLAYER TAG SUB-PANEL ----- */}
        <aside
          aria-label="Player Tag Roster Configuration"
          className={cn(
            "w-full lg:w-56 shrink-0 flex flex-col border-b lg:border-b-0 lg:border-r border-[#20232c] bg-[#0f1118] p-2.5 gap-2 text-xs",
            mobileActivePanel !== "playerTag" && "hidden lg:flex"
          )}
        >
          {/* Header with mini tag badge preview */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="p-0.5 rounded bg-indigo-500/10 text-indigo-400">
                <Tag className="size-3 text-[#c6ff1f]" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-tight text-white">PLAYER TAG</span>
            </div>

            {/* Live broadcast badge preview */}
            <div className="flex items-center rounded overflow-hidden shadow border border-black/50 text-[9px] max-w-[110px]">
              {showNumber && (
                <span
                  className="px-1.5 py-0.5 font-mono font-black text-black shrink-0"
                  style={{ backgroundColor: currentKitColor }}
                >
                  {activePlayer.number}
                </span>
              )}
              <span className="px-1.5 py-0.5 bg-[#12141c] text-white font-bold truncate text-[8.5px]">
                {uppercase ? activePlayer.name.toUpperCase() : activePlayer.name}
              </span>
            </div>
          </div>

          {/* Team Switcher Pill: Home 11 <-> Away 11 */}
          <div className="flex items-center gap-1 p-0.5 bg-[#141620] rounded-lg border border-[#242734]">
            {/* Home Tab */}
            <button
              type="button"
              onClick={() => {
                setActiveTeam("Home");
                setSelectedPlayerId(homePlayers[0]?.id || "h1");
                showToast("Switched to Home Squad");
              }}
              className={cn(
                "flex-1 flex items-center justify-between px-2 py-1 rounded transition-all text-left cursor-pointer",
                activeTeam === "Home"
                  ? "bg-[#202330] text-white shadow-sm border border-[#3b3f50]"
                  : "text-gray-400 hover:text-gray-200 hover:bg-[#181a24]"
              )}
            >
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="size-2 rounded-full shrink-0 shadow-sm" style={{ backgroundColor: homeKitColor }} />
                <span className="text-[9.5px] font-black">Home</span>
              </div>
              <span className="text-[8.5px] font-mono font-bold text-gray-400">{homePlayers.length}</span>
            </button>

            {/* Swap Button */}
            <button
              type="button"
              aria-label="Swap active team"
              onClick={() => {
                const nextTeam = activeTeam === "Home" ? "Away" : "Home";
                setActiveTeam(nextTeam);
                setSelectedPlayerId(nextTeam === "Home" ? homePlayers[0]?.id || "h1" : awayPlayers[0]?.id || "a1");
                showToast(`Swapped to ${nextTeam}`);
              }}
              className="p-1 text-gray-400 hover:text-white hover:bg-[#202330] rounded transition-all active:scale-90 shrink-0 cursor-pointer"
              title="Swap Team"
            >
              <ArrowLeftRight className="size-3 text-[#c6ff1f]" />
            </button>

            {/* Away Tab */}
            <button
              type="button"
              onClick={() => {
                setActiveTeam("Away");
                setSelectedPlayerId(awayPlayers[0]?.id || "a1");
                showToast("Switched to Away Squad");
              }}
              className={cn(
                "flex-1 flex items-center justify-between px-2 py-1 rounded transition-all text-left cursor-pointer",
                activeTeam === "Away"
                  ? "bg-[#202330] text-white shadow-sm border border-[#3b3f50]"
                  : "text-gray-400 hover:text-gray-200 hover:bg-[#181a24]"
              )}
            >
              <div className="flex items-center gap-1.5 min-w-0">
                <span className="size-2 rounded-full shrink-0 shadow-sm" style={{ backgroundColor: awayKitColor }} />
                <span className="text-[9.5px] font-black">Away</span>
              </div>
              <span className="text-[8.5px] font-mono font-bold text-gray-400">{awayPlayers.length}</span>
            </button>
          </div>

          {/* Kit Color Selector */}
          <div className="flex items-center justify-between px-2 py-1 bg-[#12141e] rounded-md border border-[#222532]">
            <div className="flex items-center gap-1">
              <span className="text-[8px] font-black text-gray-400 uppercase tracking-tight">KIT COLOR</span>
              <span className="text-[7.5px] text-gray-500 font-mono">({activeTeam})</span>
            </div>
            <div className="flex items-center gap-1">
              {SWATCHES.map((swatch) => (
                <button
                  key={`kit-${swatch.id}`}
                  type="button"
                  aria-label={`Select ${swatch.name} kit`}
                  onClick={() => {
                    if (activeTeam === "Home") {
                      setHomeKitColor(swatch.value);
                    } else {
                      setAwayKitColor(swatch.value);
                    }
                  }}
                  className={cn(
                    "size-3 rounded-full transition-all cursor-pointer",
                    currentKitColor === swatch.value ? "ring-1.5 ring-white scale-110" : "opacity-75 hover:opacity-100"
                  )}
                  style={{ backgroundColor: swatch.value }}
                />
              ))}
            </div>
          </div>

          {/* Size Slider & Format Toggles */}
          <div className="flex items-center justify-between gap-1.5 bg-[#10121a] p-1 px-1.5 rounded-md border border-[#20232e]">
            <div className="flex items-center gap-1.5 flex-1 min-w-0">
              <span className="text-[8px] font-black text-gray-400 uppercase tracking-tight shrink-0">SIZE</span>
              <input
                type="range"
                aria-label="Tag font size"
                min={10}
                max={26}
                value={tagSize}
                onChange={(e) => setTagSize(Number(e.target.value))}
                className="w-full h-1 bg-[#242836] rounded-full appearance-none cursor-pointer accent-[#c6ff1f]"
              />
              <span className="text-[8.5px] font-mono font-bold text-[#c6ff1f] shrink-0 w-6 text-right">{tagSize}px</span>
            </div>

            <div className="flex items-center gap-1 shrink-0 pl-1 border-l border-[#242736]">
              <button
                type="button"
                aria-label="Toggle player number"
                onClick={() => setShowNumber(!showNumber)}
                className={cn(
                  "px-1.5 py-0.5 rounded text-[8px] font-black transition-all cursor-pointer",
                  showNumber ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/40" : "text-gray-500 hover:text-gray-300"
                )}
                title="Toggle Jersey Number"
              >
                #
              </button>
              <button
                type="button"
                aria-label="Toggle uppercase text"
                onClick={() => setUppercase(!uppercase)}
                className={cn(
                  "px-1.5 py-0.5 rounded text-[8px] font-black transition-all cursor-pointer",
                  uppercase ? "bg-[#c6ff1f]/15 text-[#c6ff1f] border border-[#c6ff1f]/30" : "text-gray-500 hover:text-gray-300"
                )}
                title="Toggle Uppercase Naming"
              >
                AA
              </button>
            </div>
          </div>

          {/* Quick Add Player Row */}
          <form onSubmit={handleAddPlayer} className="flex items-center gap-1 shrink-0">
            <input
              type="text"
              aria-label="Player jersey number"
              value={newNumber}
              onChange={(e) => setNewNumber(e.target.value)}
              placeholder="#"
              maxLength={3}
              className="w-7 bg-[#141620] border border-[#2a2e3c] rounded px-0.5 py-0.5 text-[9.5px] font-black text-center text-[#c6ff1f] placeholder-gray-600 focus:outline-none focus:border-[#c6ff1f] font-mono shrink-0"
            />
            <input
              type="text"
              aria-label="Player name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Add player..."
              className="flex-1 min-w-0 bg-[#141620] border border-[#2a2e3c] rounded px-1.5 py-0.5 text-[9.5px] font-medium text-white placeholder-gray-600 focus:outline-none focus:border-[#c6ff1f] truncate"
            />
            <button
              type="submit"
              aria-label="Add player"
              disabled={!newName.trim()}
              className="px-1.5 py-0.5 bg-[#c6ff1f] hover:bg-[#b0e616] text-black font-black text-[9px] rounded flex items-center justify-center shrink-0 transition-all disabled:opacity-30 cursor-pointer"
              title="Add Player"
            >
              <Plus className="size-3 stroke-[3]" />
            </button>
            <button
              type="button"
              aria-label="Bulk Squad Paste"
              onClick={() => showToast("Bulk import enabled in Pro mode")}
              className="p-1 rounded text-gray-500 hover:text-gray-300 cursor-pointer shrink-0"
              title="Bulk import"
            >
              <Upload className="size-2.5" />
            </button>
          </form>

          {/* 11-Player Squad Roster List */}
          <div className="flex-1 min-h-0 flex flex-col space-y-[2px] overflow-y-auto pr-0.5 custom-scrollbar max-h-56 lg:max-h-[380px]">
            {currentSquad.map((player) => {
              const isSelected = selectedPlayerId === player.id;
              return (
                <div
                  key={player.id}
                  onClick={() => {
                    setSelectedPlayerId(player.id);
                    showToast(`Selected #${player.number} ${player.name} · Click pitch to stamp`);
                  }}
                  className={cn(
                    "h-[23px] flex items-center justify-between px-1.5 rounded transition-all cursor-pointer group",
                    isSelected
                      ? "bg-[#181b26] border border-[#c6ff1f]/70 shadow-sm"
                      : "bg-[#11131c] hover:bg-[#171924] border border-[#202330]"
                  )}
                >
                  <div className="flex items-center gap-1.5 flex-1 min-w-0">
                    <GripVertical className="size-2 text-gray-600 opacity-0 group-hover:opacity-100 cursor-grab shrink-0 -ml-0.5" />
                    {/* Jersey Number Badge */}
                    <div
                      className="w-4 h-3.5 rounded font-black text-[8px] flex items-center justify-center shrink-0 tracking-tight text-black"
                      style={{ backgroundColor: currentKitColor }}
                    >
                      {player.number}
                    </div>
                    {/* Player Name */}
                    <span
                      className={cn(
                        "text-[9px] font-bold truncate tracking-wide leading-none",
                        isSelected ? "text-white" : "text-gray-300"
                      )}
                    >
                      {uppercase ? player.name.toUpperCase() : player.name}
                    </span>
                  </div>

                  {isSelected && <span className="size-1.5 rounded-full bg-[#c6ff1f] shadow-[0_0_6px_#c6ff1f]" />}
                </div>
              );
            })}
          </div>

          {/* Bottom helper info */}
          <div className="flex items-center justify-between text-[8px] text-gray-500 font-mono pt-1 border-t border-[#20232c]">
            <span>Click player to select</span>
            <span className="text-[#c6ff1f]">Stamp on canvas</span>
          </div>
        </aside>

        {/* ----- 2C. CENTER: MATCH FOOTAGE & 16:9 INTERACTIVE CANVAS ----- */}
        <section aria-label="Tactical Pitch Broadcast Viewport" className="flex flex-1 flex-col min-w-0 bg-black relative">
          <div
            ref={pitchContainerRef}
            onClick={handlePitchClick}
            onTouchEnd={(e) => {
              if (e.changedTouches && e.changedTouches[0]) {
                const t = e.changedTouches[0];
                stampAtPoint(t.clientX, t.clientY);
              }
            }}
            className="relative w-full aspect-[16/9] bg-black overflow-hidden flex items-center justify-center cursor-crosshair group select-none"
            title="Click anywhere on the match footage to place active player tag!"
          >
            {/* The Full 16:9 Football Match Image */}
            <Image
              src="https://ik.imagekit.io/oi36ng8jx/Tacstem%20Landing%20Page%20FIles/Screenshot%202026-10-06%20235634.png"
              alt="Full 16:9 widescreen football match tactical broadcast scene"
              fill
              priority
              sizes="(max-width: 1440px) 100vw, 1440px"
              referrerPolicy="no-referrer"
              className="object-cover pointer-events-none w-full h-full"
            />

            {/* Interactive Player Tag Stamped Overlays */}
            {stampedTags.map((tag) => {
              const isTagSelected = selectedTagId === tag.id;
              const scaleRatio = tag.fontSize / 14;

              return (
                <div
                  key={tag.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (activeTool === "erase") {
                      setStampedTags((prev) => prev.filter((t) => t.id !== tag.id));
                      showToast(`Erased tag #${tag.playerNumber} ${tag.playerName}`);
                      return;
                    }
                    setSelectedTagId(tag.id);
                  }}
                  onMouseDown={(e) => {
                    if (activeTool === "erase") return;
                    e.stopPropagation();
                    setDraggingTagId(tag.id);

                    const startX = e.clientX;
                    const startY = e.clientY;
                    const initialXPercent = tag.xPercent;
                    const initialYPercent = tag.yPercent;

                    const handleMouseMove = (moveEvent: MouseEvent) => {
                      if (!pitchContainerRef.current) return;
                      const rect = pitchContainerRef.current.getBoundingClientRect();
                      const deltaXPercent = ((moveEvent.clientX - startX) / rect.width) * 100;
                      const deltaYPercent = ((moveEvent.clientY - startY) / rect.height) * 100;

                      setStampedTags((prev) =>
                        prev.map((t) =>
                          t.id === tag.id
                            ? {
                                ...t,
                                xPercent: Math.max(2, Math.min(98, initialXPercent + deltaXPercent)),
                                yPercent: Math.max(5, Math.min(95, initialYPercent + deltaYPercent)),
                              }
                            : t
                        )
                      );
                    };

                    const handleMouseUp = () => {
                      setDraggingTagId(null);
                      window.removeEventListener("mousemove", handleMouseMove);
                      window.removeEventListener("mouseup", handleMouseUp);
                    };

                    window.addEventListener("mousemove", handleMouseMove);
                    window.addEventListener("mouseup", handleMouseUp);
                  }}
                  onTouchStart={(e) => {
                    if (activeTool === "erase") {
                      setStampedTags((prev) => prev.filter((t) => t.id !== tag.id));
                      showToast(`Erased tag #${tag.playerNumber} ${tag.playerName}`);
                      return;
                    }
                    e.stopPropagation();
                    setSelectedTagId(tag.id);
                    setDraggingTagId(tag.id);
                  }}
                  onTouchMove={(e) => {
                    if (activeTool === "erase") return;
                    if (!pitchContainerRef.current || !e.touches[0]) return;
                    e.stopPropagation();

                    const touch = e.touches[0];
                    const rect = pitchContainerRef.current.getBoundingClientRect();
                    const newX = Math.max(2, Math.min(98, ((touch.clientX - rect.left) / rect.width) * 100));
                    const newY = Math.max(5, Math.min(95, ((touch.clientY - rect.top) / rect.height) * 100));

                    setStampedTags((prev) =>
                      prev.map((t) =>
                        t.id === tag.id
                          ? {
                              ...t,
                              xPercent: newX,
                              yPercent: newY,
                            }
                          : t
                      )
                    );
                  }}
                  onTouchEnd={(e) => {
                    e.stopPropagation();
                    setDraggingTagId(null);
                  }}
                  style={{
                    left: `${tag.xPercent}%`,
                    top: `${tag.yPercent}%`,
                    transform: "translate(-50%, -100%)",
                  }}
                  className={cn(
                    "absolute flex flex-col items-center cursor-move transition-transform duration-75 group/tag touch-none",
                    isTagSelected && "ring-1 ring-white/50 rounded"
                  )}
                >
                  {/* Outer Broadcast Tag Capsule */}
                  <div className="relative flex items-stretch rounded-[3px] bg-[#0c0e12]/95 shadow-[0_6px_16px_rgba(0,0,0,0.85)] border border-white/15 overflow-hidden text-[10.5px]">
                    {/* Left block: Jersey Number */}
                    {tag.showNumber && (
                      <span
                        className="flex items-center justify-center font-black font-mono text-black px-1.5 py-0.5 tracking-tight min-w-[20px] text-center"
                        style={{
                          backgroundColor: tag.kitColor,
                          fontSize: `${10 * scaleRatio}px`,
                        }}
                      >
                        {tag.playerNumber || "—"}
                      </span>
                    )}

                    {/* Right block: Player Name with bottom accent stripe */}
                    <div className="relative flex flex-col justify-center px-2 py-0.5 min-w-[55px]">
                      <span
                        className="font-bold text-white tracking-wide leading-tight whitespace-nowrap"
                        style={{ fontSize: `${10.5 * scaleRatio}px` }}
                      >
                        {tag.uppercase ? tag.playerName.toUpperCase() : tag.playerName}
                      </span>
                      {/* Bottom Accent stripe */}
                      <span
                        className="absolute bottom-0 left-0 right-0 h-[2px]"
                        style={{ backgroundColor: tag.kitColor }}
                      />
                    </div>
                  </div>

                  {/* 3D Downward Pointer pointing to ground point */}
                  <div
                    className="w-0 h-0 border-x-[5px] border-x-transparent border-t-[6px] drop-shadow-md -mt-px"
                    style={{ borderTopColor: tag.kitColor }}
                  />
                </div>
              );
            })}

            {/* Pitch Interactive Instruction Banner */}
            <div className="absolute top-3 right-3 flex items-center gap-2 rounded bg-black/85 px-3 py-1.5 text-[10px] font-mono text-gray-200 border border-white/15 backdrop-blur pointer-events-none shadow-lg">
              <span className={cn("size-2 rounded-full animate-ping", activeTool === "erase" ? "bg-red-500" : "bg-[#c6ff1f]")} />
              <span>
                {activeTool === "erase"
                  ? "Erase Mode Active · Click any player tag on screen to erase it"
                  : "Tag Tool Active · Click pitch to stamp · Drag to move"}
              </span>
            </div>
          </div>
        </section>

        {/* ----- 2D. RIGHT SIDEBAR: TAGS / EVENTS / NOTES / PLAYLIST ----- */}
        <aside
          aria-label="Tactical Tagging Pad and Analysis Logs"
          className={cn(
            "w-full lg:w-64 shrink-0 flex flex-col border-t lg:border-t-0 lg:border-l border-[#20232c] bg-[#0d0f16] overflow-hidden text-xs",
            mobileActivePanel !== "events" && "hidden lg:flex"
          )}
        >
          {/* Main 4 Tabs */}
          <div className="flex border-b border-[#20232c] bg-[#090a0f] text-[10px] font-bold uppercase tracking-wider shrink-0">
            {(["TAGS", "EVENTS", "NOTES", "PLAYLIST"] as const).map((tab) => (
              <button
                key={tab}
                type="button"
                aria-label={`Switch to ${tab} tab`}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "flex-1 py-2 text-center transition-all cursor-pointer",
                  activeTab === tab
                    ? "text-[#c6ff1f] bg-[#141620] border-t-2 border-t-[#c6ff1f]"
                    : "text-gray-400 hover:bg-[#10121a] hover:text-gray-200"
                )}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* TAB 1: TAGS PANEL */}
          {activeTab === "TAGS" && (
            <div className="flex flex-col h-full overflow-hidden">
              {/* Event Tagging toggle row */}
              <div className="px-2.5 py-1.5 border-b border-[#20232c] flex items-center justify-between shrink-0 bg-[#0e1017]">
                <div className="flex items-center gap-1.5">
                  <Tags className="size-3.5 text-[#c6ff1f]" />
                  <span className="text-[10.5px] font-bold text-white">Event Tagging</span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "text-[8.5px] font-mono font-bold transition-colors",
                      eventTaggingOn ? "text-red-400 font-black animate-pulse" : "text-gray-500"
                    )}
                  >
                    {eventTaggingOn ? "REC" : "OFF"}
                  </span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={eventTaggingOn}
                    aria-label="Toggle Event Tagging Recording Mode"
                    onClick={() => {
                      const next = !eventTaggingOn;
                      setEventTaggingOn(next);
                      showToast(next ? "Event Tagging ON: Click buttons to count & log events" : "Event Tagging OFF");
                    }}
                    className={cn(
                      "w-7 h-4 rounded-full relative transition-colors cursor-pointer ring-1 ring-white/10",
                      eventTaggingOn ? "bg-red-500" : "bg-gray-700"
                    )}
                  >
                    <span
                      className={cn(
                        "size-2.5 bg-white rounded-full absolute top-0.5 transition-all shadow-sm",
                        eventTaggingOn ? "left-[14px]" : "left-0.5"
                      )}
                    />
                  </button>
                </div>
              </div>

              {/* Labels toggle row */}
              <div className="px-2.5 py-1.5 border-b border-[#20232c] flex items-center justify-between shrink-0 bg-[#0b0c12]">
                <div className="flex items-center gap-1.5">
                  <Tag className="size-3 text-[#c6ff1f]" />
                  <span className="text-[10.5px] font-bold text-white">Labels</span>
                  <span className="px-1.5 py-0.2 bg-[#1a1d28] text-gray-400 rounded text-[8px] font-mono font-bold">10</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[8.5px] font-mono font-bold text-gray-500">{labelsOn ? "ON" : "OFF"}</span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={labelsOn}
                    aria-label="Toggle Match Labels"
                    onClick={() => {
                      setLabelsOn(!labelsOn);
                      showToast(labelsOn ? "Labels disabled" : "Labels enabled (Mock)");
                    }}
                    className={cn(
                      "w-7 h-4 rounded-full relative transition-colors cursor-pointer ring-1 ring-white/10",
                      labelsOn ? "bg-[#c6ff1f]" : "bg-gray-700"
                    )}
                  >
                    <span
                      className={cn(
                        "size-2.5 bg-white rounded-full absolute top-0.5 transition-all shadow-sm",
                        labelsOn ? "left-[14px]" : "left-0.5"
                      )}
                    />
                  </button>
                </div>
              </div>

              {/* Code File Box */}
              <div className="px-2.5 py-1.5 bg-[#12141d] border-b border-[#20232c] flex items-center justify-between gap-1.5 shrink-0">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="size-5 rounded bg-[#c6ff1f]/10 border border-[#c6ff1f]/30 flex items-center justify-center text-[#c6ff1f] shrink-0">
                    <FileCode className="size-3" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[7.5px] font-extrabold uppercase tracking-wider text-gray-400 leading-none">
                      CODE FILE
                    </span>
                    <span className="text-[9.5px] font-bold text-white truncate max-w-[120px]">Standard Match Analysis</span>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Save Code File"
                  onClick={() => showToast("Code template saved")}
                  className="px-2 py-0.5 bg-[#c6ff1f]/15 hover:bg-[#c6ff1f]/30 text-[#c6ff1f] border border-[#c6ff1f]/40 rounded text-[8.5px] font-bold flex items-center gap-1 transition-all cursor-pointer"
                >
                  <Save className="size-2.5" />
                  <span>Save</span>
                </button>
              </div>

              {/* Action Buttons: Open Pad, External, Settings */}
              <div className="p-1.5 bg-[#0f1118] border-b border-[#20232c] flex items-center justify-between gap-1.5 shrink-0">
                <button
                  type="button"
                  aria-label="Open Interactive Tagging Pad"
                  onClick={() => showToast("Interactive Tagging Pad open")}
                  className="flex-1 py-1 px-1.5 bg-[#c6ff1f]/10 hover:bg-[#c6ff1f]/20 border border-[#c6ff1f]/30 rounded text-[9px] font-bold tracking-tight text-[#c6ff1f] flex items-center justify-center gap-1 transition-all cursor-pointer"
                >
                  <Layers className="size-3" />
                  <span>Open Pad</span>
                </button>
                <button
                  type="button"
                  aria-label="Popout coding panel window"
                  onClick={() => showToast("Popped out coding window")}
                  className="py-1 px-1.5 bg-indigo-500/15 border border-indigo-500/30 rounded text-indigo-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
                >
                  <ExternalLink className="size-3" />
                </button>
                <button
                  type="button"
                  aria-label="Tag Settings"
                  onClick={() => showToast("Tag settings opened")}
                  className="py-1 px-1.5 bg-[#1a1d28] border border-[#2a2e3c] rounded text-[9px] font-medium text-gray-300 hover:text-white flex items-center justify-center gap-1 transition-colors cursor-pointer"
                >
                  <Settings2 className="size-3 text-gray-400" />
                  <span>Settings</span>
                </button>
              </div>

              {/* Notice when Event Tagging is OFF */}
              {!eventTaggingOn && (
                <div className="px-2 py-1 bg-[#10121a] border-b border-[#20232c] text-[8px] font-mono text-gray-400 text-center flex items-center justify-center gap-1">
                  <span className="size-1 rounded-full bg-amber-400" />
                  <span>Turn ON &apos;Event Tagging&apos; switch above to count</span>
                </div>
              )}

              {/* 12 Event Buttons Grid matching exact screenshot */}
              <div className="flex-1 overflow-y-auto p-2 custom-scrollbar max-h-56 lg:max-h-[360px]">
                <div className="grid grid-cols-2 gap-1.5">
                  {DEFAULT_TAG_BUTTONS.map((btn) => {
                    const count = tagCounts[btn.id] || 0;
                    return (
                      <button
                        key={btn.id}
                        type="button"
                        aria-label={`Log event: ${btn.name}`}
                        onClick={() => handleTagButtonClick(btn)}
                        className={cn(
                          "relative min-h-[38px] py-1 px-1.5 pl-2 rounded border flex items-center justify-between gap-1 transition-all overflow-hidden text-left cursor-pointer group active:scale-[0.98]",
                          eventTaggingOn
                            ? "border-[#303648] bg-[#161824] hover:bg-[#1f2334] hover:border-[#424b64] shadow-xs"
                            : "border-[#232734] bg-[#13151f] opacity-85 hover:opacity-100 hover:bg-[#181a26]"
                        )}
                      >
                        {/* Left accent bar */}
                        <div className="absolute left-0 top-0 bottom-0 w-[3px]" style={{ backgroundColor: btn.color }} />

                        {/* Event Name */}
                        <span className="font-medium text-[9px] text-gray-200 truncate leading-tight select-none flex-1 pr-1">
                          {btn.name}
                        </span>

                        {/* Hotkey badge and count */}
                        <div className="flex items-center gap-1 shrink-0">
                          <div className="flex items-center justify-center size-3.5 bg-[#202432] group-hover:bg-[#2b3042] rounded-sm text-[7.5px] font-bold text-gray-400 group-hover:text-white border border-[#33384a] font-mono">
                            {btn.key}
                          </div>
                          <span
                            className={cn(
                              "text-[8px] font-mono font-bold",
                              count > 0 ? "text-[#c6ff1f]" : "text-gray-500"
                            )}
                          >
                            {count}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: EVENTS LOG */}
          {activeTab === "EVENTS" && (
            <div className="flex flex-col h-full overflow-hidden">
              <div className="flex-1 overflow-y-auto p-2 space-y-1 custom-scrollbar max-h-56 lg:max-h-[380px]">
                <p className="text-[8.5px] font-mono uppercase tracking-wider text-gray-500 pb-1 border-b border-[#20232c]">
                  Logged Tactical Moments ({loggedEvents.length + stampedTags.length})
                </p>
                {stampedTags.map((tag) => (
                  <div
                    key={`log-${tag.id}`}
                    className="flex items-center justify-between rounded bg-[#13151e] border border-[#222532] p-1.5 text-[10px]"
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="size-1.5 rounded-full" style={{ backgroundColor: tag.kitColor }} />
                      <span className="font-bold text-white truncate">
                        #{tag.playerNumber} {tag.playerName}
                      </span>
                    </div>
                    <span className="font-mono text-[9px] text-[#c6ff1f]">{formatTime(currentSeconds)}</span>
                  </div>
                ))}
                {loggedEvents.map((ev) => (
                  <div
                    key={ev.id}
                    className="flex items-center justify-between rounded bg-[#13151e] border border-[#222532] p-1.5 text-[10px]"
                  >
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="size-1.5 rounded-full" style={{ backgroundColor: ev.color }} />
                      <span className="font-medium text-gray-200 truncate">{ev.name}</span>
                    </div>
                    <span className="font-mono text-[9px] text-gray-400">{ev.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: NOTES */}
          {activeTab === "NOTES" && (
            <div className="flex-1 overflow-y-auto p-2.5 space-y-2 custom-scrollbar max-h-56 lg:max-h-[380px]">
              <p className="text-[8.5px] font-mono uppercase tracking-wider text-gray-500">Match Tactical Observations</p>
              <div className="p-2 bg-[#12141d] rounded border border-[#20232c] text-[10px] text-gray-300 space-y-1.5">
                <p className="font-semibold text-white">Zone 14 Progression</p>
                <p className="text-gray-400 leading-relaxed">
                  Midfielder #17 (De Bruyne) finding consistent passing lanes behind the first pressing line.
                </p>
              </div>
              <div className="p-2 bg-[#12141d] rounded border border-[#20232c] text-[10px] text-gray-300 space-y-1.5">
                <p className="font-semibold text-white">Press Resistance</p>
                <p className="text-gray-400 leading-relaxed">
                  Defensive transition shape holding a compact 4-4-2 block in the second half.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: PLAYLIST */}
          {activeTab === "PLAYLIST" && (
            <div className="flex-1 overflow-y-auto p-2 space-y-1.5 custom-scrollbar max-h-56 lg:max-h-[380px]">
              <div className="flex items-center justify-between pb-1 border-b border-[#20232c]">
                <span className="text-[9px] font-mono uppercase text-gray-400">Match Clip Reels</span>
                <span className="text-[8.5px] font-mono text-[#c6ff1f] font-bold">2 Sequences</span>
              </div>
              <div className="p-2 bg-[#13151f] rounded border border-[#c6ff1f]/40 flex items-center justify-between">
                <div>
                  <p className="text-[10.5px] font-bold text-white">Goal #1 Buildup</p>
                  <p className="text-[8.5px] font-mono text-gray-400">27:52.8 - 28:14.3</p>
                </div>
                <button
                  type="button"
                  aria-label="Play Goal #1 Buildup Clip"
                  onClick={() => setIsPlaying(true)}
                  className="size-6 grid place-items-center rounded bg-[#c6ff1f] text-black hover:scale-105 cursor-pointer"
                >
                  <Play className="size-3 translate-x-0.2" />
                </button>
              </div>
            </div>
          )}
        </aside>
      </div>

      {/* ==================== 3. FULL-WIDTH BOTTOM TIMELINE PLAYBAR ==================== */}
      <footer aria-label="Timeline Scrubber and Export Actions" className="flex flex-col border-t border-[#20232c] bg-[#0c0e14]">
        {/* Scrubber Progress Bar & Dots */}
        <div
          className="relative h-5 px-3 flex items-center cursor-pointer bg-[#08090d] touch-none"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const pos = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
            setCurrentSeconds((pos / 100) * totalDuration);
          }}
          onTouchStart={(e) => {
            if (!e.touches[0]) return;
            const rect = e.currentTarget.getBoundingClientRect();
            const pos = Math.max(0, Math.min(100, ((e.touches[0].clientX - rect.left) / rect.width) * 100));
            setCurrentSeconds((pos / 100) * totalDuration);
          }}
          onTouchMove={(e) => {
            if (!e.touches[0]) return;
            const rect = e.currentTarget.getBoundingClientRect();
            const pos = Math.max(0, Math.min(100, ((e.touches[0].clientX - rect.left) / rect.width) * 100));
            setCurrentSeconds((pos / 100) * totalDuration);
          }}
        >
          {/* Dots row */}
          <div className="absolute inset-x-3 flex items-center justify-between pointer-events-none opacity-40">
            {Array.from({ length: 48 }).map((_, i) => (
              <span key={i} className="size-0.5 rounded-full bg-gray-400" />
            ))}
          </div>

          {/* Red Scrubber line */}
          <div className="relative w-full h-[3px] bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-red-600 transition-all duration-75" style={{ width: `${progressPercent}%` }} />
          </div>

          {/* Scrubber handle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 size-3 rounded-full bg-white shadow-[0_0_8px_white] pointer-events-none"
            style={{ left: `calc(${progressPercent}% + 4px)` }}
          />
        </div>

        {/* Transport Controls and Below-Timeline Export CSV Row */}
        <div className="flex items-center justify-between px-2 sm:px-3 py-1.5 text-xs text-gray-300 border-t border-[#1a1c24] gap-1.5 sm:gap-2">
          {/* Left: Play / Skip / Timecode */}
          <div className="flex items-center gap-1 sm:gap-2.5 shrink-0">
            <button
              type="button"
              aria-label="First Frame"
              onClick={() => setCurrentSeconds(0)}
              className="hover:text-white p-1 cursor-pointer hidden xxs:block touch-manipulation"
              title="First Frame"
            >
              <SkipBack className="size-3 sm:size-3.5" />
            </button>
            <button
              type="button"
              aria-label="Jump Back 5s"
              onClick={() => setCurrentSeconds((p) => Math.max(0, p - 5))}
              className="hover:text-white p-1 cursor-pointer touch-manipulation"
              title="Jump Back 5s"
            >
              <RotateCcw className="size-3 sm:size-3.5" />
            </button>

            {/* Big circular play button */}
            <button
              type="button"
              aria-label={isPlaying ? "Pause Video" : "Play Video"}
              onClick={() => setIsPlaying(!isPlaying)}
              className="grid size-7 sm:size-8 place-items-center rounded-full bg-white text-black transition-transform active:scale-95 cursor-pointer shadow-md touch-manipulation shrink-0"
              title={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="size-3.5 sm:size-4" /> : <Play className="size-3.5 sm:size-4 translate-x-0.5" />}
            </button>

            <button
              type="button"
              aria-label="Jump Forward 5s"
              onClick={() => setCurrentSeconds((p) => Math.min(totalDuration, p + 5))}
              className="hover:text-white p-1 cursor-pointer touch-manipulation"
              title="Jump Forward 5s"
            >
              <RotateCw className="size-3 sm:size-3.5" />
            </button>
            <button
              type="button"
              aria-label="Last Frame"
              onClick={() => setCurrentSeconds(totalDuration)}
              className="hover:text-white p-1 cursor-pointer hidden xxs:block touch-manipulation"
              title="Last Frame"
            >
              <SkipForward className="size-3 sm:size-3.5" />
            </button>

            {/* Timecode */}
            <span className="font-mono text-[9.5px] sm:text-[10.5px] tabular-nums font-semibold text-gray-200 pl-0.5">
              {formatTime(currentSeconds)}{" "}
              <span className="text-gray-500 font-normal hidden xs:inline">/ {formatTime(totalDuration)}</span>
            </span>
          </div>

          {/* Center controls: Zoom, Speed, Filter, Timeline */}
          <div className="hidden md:flex items-center gap-3 text-[10.5px]">
            {/* Zoom */}
            <div className="flex items-center gap-1 text-gray-400">
              <Search className="size-3" />
              <span className="font-mono">1x</span>
              <Search className="size-3" />
            </div>

            {/* Speed Slider */}
            <div className="flex items-center gap-1.5 pl-2 border-l border-[#20232e]">
              <span className="text-gray-400 font-mono text-[9px] uppercase">Speed</span>
              <input
                type="range"
                aria-label="Playback speed"
                min={0.5}
                max={2.0}
                step={0.1}
                value={parseFloat(speed)}
                onChange={(e) => setSpeed(`${e.target.value}x`)}
                className="w-14 h-1 bg-[#242836] rounded-full appearance-none cursor-pointer accent-white"
              />
              <span className="font-mono text-[9px] text-gray-300 w-6">{speed}</span>
            </div>

            {/* Timeline toggle */}
            <button
              type="button"
              aria-label="Toggle timeline view"
              onClick={() => showToast("Timeline expanded")}
              className="flex items-center gap-1 text-gray-300 hover:text-white cursor-pointer"
            >
              <span className="text-[9px] font-bold uppercase">∧ Timeline</span>
            </button>

            {/* Volume */}
            <div className="flex items-center gap-1 pl-2 border-l border-[#20232e] text-gray-400">
              <Volume2 className="size-3.5" />
              <input
                type="range"
                aria-label="Audio volume"
                min={0}
                max={100}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-12 h-1 bg-[#242836] rounded-full appearance-none cursor-pointer accent-white"
              />
            </div>
          </div>

          {/* Right: Events Data status, Import CSV, and Export CSV button below timeline */}
          <div className="flex items-center gap-2 shrink-0 ml-auto">
            <div className="flex flex-col text-right leading-tight hidden xs:flex">
              <span className="font-mono text-[7.5px] uppercase tracking-wider text-gray-400">Events Data</span>
              <span className="font-mono text-[9.5px] font-bold text-emerald-400">
                {stampedTags.length + loggedEvents.length} logged events
              </span>
            </div>

            <button
              type="button"
              aria-label="Import match CSV"
              onClick={() => showToast("Import CSV template")}
              className="hidden sm:flex items-center gap-1 rounded border border-[#2a2d3a] bg-[#141620] px-2.5 py-1 text-[9.5px] font-bold text-gray-300 hover:text-white cursor-pointer transition-colors"
            >
              <Upload className="size-2.5" />
              <span>Import CSV</span>
            </button>

            {/* Export CSV button positioned below timeline playbar */}
            <button
              type="button"
              aria-label="Export match analysis CSV"
              onClick={handleExportCsv}
              className="flex items-center gap-1 sm:gap-1.5 rounded-md bg-[#22c55e] hover:bg-[#16a34a] text-black px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[9.5px] sm:text-[10.5px] font-black uppercase tracking-wider transition-all cursor-pointer shadow-[0_0_15px_rgba(34,197,94,0.4)] shrink-0 touch-manipulation"
            >
              <Download className="size-3 sm:size-3.5 stroke-[2.5]" />
              <span>Export CSV</span>
            </button>
          </div>
        </div>
      </footer>
    </figure>
  );
}
