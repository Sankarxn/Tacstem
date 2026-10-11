"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  Tag,
  CheckSquare,
  Folder,
  Download,
  FilePlus2,
  Plus,
  GripVertical,
  Save,
  ExternalLink,
  SlidersHorizontal,
  Layers,
  FileCode,
  Trash2,
  Check,
  X,
  Clock,
  Sparkles,
  Maximize2,
  Minimize2,
  Volume2,
  VolumeX,
  Share2,
} from "lucide-react";
import { cn } from "@/lib/utils";

/** Event Matrix item definition matching the user's app */
interface MatrixTag {
  id: string;
  name: string;
  display?: string;
  hotkey: string;
  count: number;
  color: string;
}

/** Label item definition */
interface LabelItem {
  id: string;
  name: string;
  display?: string;
  count: number;
  category: "outcome" | "pitch-zone" | "body-part" | string;
}

/** Tagged Event record */
interface TaggedEvent {
  id: string;
  time: string;
  tagName: string;
  tagColor: string;
  labels: string[];
  number: number;
}

const INITIAL_TAGS: MatrixTag[] = [
  { id: "goal", name: "Goal", hotkey: "1", count: 0, color: "#22c55e" },
  { id: "shot-on-target", name: "Shot on Target", hotkey: "2", count: 0, color: "#3b82f6" },
  { id: "shot-off-target", name: "Shot off Target", hotkey: "3", count: 0, color: "#38bdf8" },
  { id: "key-pass", name: "Key Pass / Chance", hotkey: "4", count: 0, color: "#a3e635" },
  { id: "cross", name: "Cross", hotkey: "5", count: 0, color: "#f59e0b" },
  { id: "interception", name: "Interception", display: "Intercep\ntion", hotkey: "6", count: 0, color: "#a855f7" },
  { id: "tackle-duel", name: "Tackle / Duel", display: "Tackle /\nDuel", hotkey: "7", count: 0, color: "#ec4899" },
  { id: "foul-committed", name: "Foul Committed", display: "Foul\nComm...", hotkey: "8", count: 0, color: "#ef4444" },
  { id: "corner-kick", name: "Corner Kick", display: "Corner\nKick", hotkey: "9", count: 0, color: "#eab308" },
  { id: "free-kick", name: "Free Kick", display: "Free\nKick", hotkey: "0", count: 0, color: "#06b6d4" },
  { id: "offside", name: "Offside", hotkey: "0", count: 0, color: "#f97316" },
  { id: "turnover", name: "Turnover / Lost", display: "Turnover\n/ Lost", hotkey: "T", count: 0, color: "#b91c1c" },
];

const INITIAL_LABELS: Record<string, LabelItem[]> = {
  OUTCOME: [
    { id: "lbl-succ", name: "Successful", count: 0, category: "outcome" },
    { id: "lbl-unsucc", name: "Unsuccessful", count: 0, category: "outcome" },
    { id: "lbl-blocked", name: "Blocked / Deflected", display: "Blocked / Defle...", count: 0, category: "outcome" },
  ],
  "PITCH ZONE": [
    { id: "lbl-def3", name: "Defensive 3rd", count: 0, category: "pitch-zone" },
    { id: "lbl-mid3", name: "Middle 3rd", count: 0, category: "pitch-zone" },
    { id: "lbl-att3", name: "Attacking 3rd", count: 0, category: "pitch-zone" },
    { id: "lbl-box", name: "Penalty Box", count: 0, category: "pitch-zone" },
  ],
  "BODY PART": [
    { id: "lbl-rf", name: "Right Foot", count: 0, category: "body-part" },
    { id: "lbl-lf", name: "Left Foot", count: 0, category: "body-part" },
    { id: "lbl-head", name: "Header", count: 0, category: "body-part" },
  ],
};

const SAMPLE_MATCH_TIMES = [
  "12:45", "18:20", "24:11", "33:04", "41:50", "52:16", "67:12", "73:40", "81:05", "88:22"
];

export function TacticalTaggingPad({ isExpanded = false }: { isExpanded?: boolean }) {
  // Tabs
  const [activeTab, setActiveTab] = useState<"TAGS" | "EVENTS" | "NOTES" | "PLAYLIST">("TAGS");

  // Toggles
  const [eventTaggingOn, setEventTaggingOn] = useState(false);
  const [labelsOn, setLabelsOn] = useState(true);

  // Data
  const [tags, setTags] = useState<MatrixTag[]>(INITIAL_TAGS);
  const [labelGroups, setLabelGroups] = useState<Record<string, LabelItem[]>>(INITIAL_LABELS);
  const [selectedLabels, setSelectedLabels] = useState<Set<string>>(new Set());
  const [events, setEvents] = useState<TaggedEvent[]>([
    {
      id: "ev-seed-1",
      time: "20:52",
      tagName: "Key Pass / Chance",
      tagColor: "#a3e635",
      labels: ["Middle 3rd", "Right Foot", "Successful"],
      number: 1,
    },
    {
      id: "ev-seed-2",
      time: "27:52",
      tagName: "Shot on Target",
      tagColor: "#3b82f6",
      labels: ["Penalty Box", "Right Foot", "Blocked / Deflected"],
      number: 2,
    },
  ]);
  const [notes, setNotes] = useState<string[]>([
    "Heavy opposition pressure in central Middle 3rd during transitions.",
    "Wingers exploiting half-spaces behind the full-backs on turnovers.",
    "Set-piece setup: Near-post flick routine ready on attacking corners.",
  ]);
  const [newNoteInput, setNewNoteInput] = useState("");

  // UI state
  const [flashedTagId, setFlashedTagId] = useState<string | null>(null);
  const [lastTagged, setLastTagged] = useState<TaggedEvent | null>(null);
  const [saveToast, setSaveToast] = useState(false);
  const [isPadModalOpen, setIsPadModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [addLabelCategory, setAddLabelCategory] = useState<string | null>(null);
  const [newLabelName, setNewLabelName] = useState("");
  const [mobilePane, setMobilePane] = useState<"labels" | "tags">("tags");

  const tagCounterRef = useRef(events.length);
  const padContainerRef = useRef<HTMLDivElement>(null);

  // Play subtle feedback sound if enabled
  const playBeep = useCallback(() => {
    if (!soundEnabled || typeof window === "undefined") return;
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch {
      // AudioContext unavailable or blocked
    }
  }, [soundEnabled]);

  // Execute a tag action
  const triggerTag = useCallback(
    (tagId: string) => {
      const targetTag = tags.find((t) => t.id === tagId);
      if (!targetTag) return;

      tagCounterRef.current += 1;
      const currentNumber = tagCounterRef.current;
      const timeIndex = currentNumber % SAMPLE_MATCH_TIMES.length;
      const timeString = SAMPLE_MATCH_TIMES[timeIndex] || "72:14";

      // Increment tag count
      setTags((prev) =>
        prev.map((t) => (t.id === tagId ? { ...t, count: t.count + 1 } : t))
      );

      // Flash button
      setFlashedTagId(tagId);
      setTimeout(() => setFlashedTagId((curr) => (curr === tagId ? null : curr)), 500);

      // Gather active labels
      const attachedLabels: string[] = [];
      if (labelsOn) {
        Object.values(labelGroups).forEach((items) => {
          items.forEach((item) => {
            if (selectedLabels.has(item.id)) {
              attachedLabels.push(item.name);
            }
          });
        });
      }

      const newEvent: TaggedEvent = {
        id: `ev-${Date.now()}-${currentNumber}`,
        time: timeString,
        tagName: targetTag.name,
        tagColor: targetTag.color,
        labels: attachedLabels,
        number: currentNumber,
      };

      setEvents((prev) => [newEvent, ...prev]);
      setLastTagged(newEvent);
      playBeep();
    },
    [tags, labelsOn, labelGroups, selectedLabels, playBeep]
  );

  // Toggle or increment a label
  const toggleLabel = (labelId: string) => {
    setSelectedLabels((prev) => {
      const next = new Set(prev);
      if (next.has(labelId)) {
        next.delete(labelId);
      } else {
        next.add(labelId);
      }
      return next;
    });

    // Increment count of the label
    setLabelGroups((prev) => {
      const updated: Record<string, LabelItem[]> = {};
      Object.entries(prev).forEach(([category, list]) => {
        updated[category] = list.map((item) =>
          item.id === labelId ? { ...item, count: item.count + 1 } : item
        );
      });
      return updated;
    });
  };

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      const key = e.key.toUpperCase();
      // Match hotkeys: 1-9, 0, T
      const matched = tags.find((t) => t.hotkey.toUpperCase() === key);
      if (matched) {
        e.preventDefault();
        triggerTag(matched.id);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [tags, triggerTag]);

  // Total label count
  const totalLabelsCount = Object.values(labelGroups).reduce(
    (sum, list) => sum + list.length,
    0
  );

  // Add custom label handler
  const handleAddLabel = (category: string) => {
    if (!newLabelName.trim()) return;
    const newId = `lbl-custom-${Date.now()}`;
    const newItem: LabelItem = {
      id: newId,
      name: newLabelName.trim(),
      count: 0,
      category: category.toLowerCase(),
    };

    setLabelGroups((prev) => ({
      ...prev,
      [category]: [...(prev[category] || []), newItem],
    }));

    setNewLabelName("");
    setAddLabelCategory(null);
  };

  // Reset all counts
  const resetAllCounts = () => {
    setTags((prev) => prev.map((t) => ({ ...t, count: 0 })));
    setLabelGroups((prev) => {
      const updated: Record<string, LabelItem[]> = {};
      Object.entries(prev).forEach(([category, list]) => {
        updated[category] = list.map((item) => ({ ...item, count: 0 }));
      });
      return updated;
    });
    setLastTagged(null);
  };

  return (
    <div
      ref={padContainerRef}
      className={cn(
        "relative w-full rounded-2xl border border-white/10 bg-[#0a0c0e] font-sans text-white shadow-2xl overflow-hidden transition-all duration-300",
        isExpanded ? "p-0" : "max-w-6xl mx-auto"
      )}
    >
      {/* Mobile pane selector tabs */}
      <div className="flex border-b border-white/10 bg-[#0d0f13] lg:hidden">
        <button
          type="button"
          onClick={() => setMobilePane("labels")}
          className={cn(
            "flex-1 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors",
            mobilePane === "labels"
              ? "border-b-2 border-[#bef264] text-[#bef264] bg-white/[0.02]"
              : "text-zinc-400 hover:text-white"
          )}
        >
          Labels ({totalLabelsCount})
        </button>
        <button
          type="button"
          onClick={() => setMobilePane("tags")}
          className={cn(
            "flex-1 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors",
            mobilePane === "tags"
              ? "border-b-2 border-[#bef264] text-[#bef264] bg-white/[0.02]"
              : "text-zinc-400 hover:text-white"
          )}
        >
          Tags Matrix
        </button>
      </div>

      {/* Main 2-Pane Container */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] divide-y lg:divide-y-0 lg:divide-x divide-white/10">
        {/* ========================================================= */}
        {/* LEFT PANE: LABELS                                        */}
        {/* ========================================================= */}
        <div
          className={cn(
            "flex flex-col bg-[#0b0d10] p-4 sm:p-5 transition-opacity",
            mobilePane === "labels" ? "block" : "hidden lg:flex"
          )}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <Tag className="size-4.5 text-[#bef264] fill-[#bef264]" />
              <span className="font-bold text-sm tracking-wider text-white">
                LABELS
              </span>
            </div>

            {/* Right icons toolbar */}
            <div className="flex items-center gap-2.5 text-zinc-400">
              <button
                type="button"
                title="Select all / multi-select"
                onClick={() => {
                  if (selectedLabels.size > 0) {
                    setSelectedLabels(new Set());
                  } else {
                    const allIds = new Set<string>();
                    Object.values(labelGroups).forEach((list) =>
                      list.forEach((item) => allIds.add(item.id))
                    );
                    setSelectedLabels(allIds);
                  }
                }}
                className="p-1 hover:text-white hover:bg-white/5 rounded transition-colors"
              >
                <CheckSquare className="size-4" />
              </button>
              <button
                type="button"
                title="Label Templates Folder"
                onClick={() => alert("Label taxonomy saved in folder: Standard Match Analysis")}
                className="p-1 hover:text-white hover:bg-white/5 rounded transition-colors"
              >
                <Folder className="size-4" />
              </button>
              <button
                type="button"
                title="Import/Export Labels"
                onClick={() => {
                  const data = JSON.stringify(labelGroups, null, 2);
                  navigator.clipboard?.writeText(data);
                  alert("Label taxonomy copied to clipboard as JSON!");
                }}
                className="p-1 hover:text-white hover:bg-white/5 rounded transition-colors"
              >
                <Download className="size-4" />
              </button>
              <button
                type="button"
                title="New Code Sheet"
                onClick={() => alert("Ready to create new match code sheet")}
                className="p-1 hover:text-white hover:bg-white/5 rounded transition-colors"
              >
                <FilePlus2 className="size-4" />
              </button>
              <button
                type="button"
                title="Add Label to Outcome"
                onClick={() => setAddLabelCategory("OUTCOME")}
                className="p-1 hover:text-white hover:bg-white/5 rounded transition-colors"
              >
                <Plus className="size-4" />
              </button>
              <button
                type="button"
                title="Add New Category Group"
                onClick={() => {
                  const cat = prompt("Enter new category name (e.g. TACTICAL PHASE):");
                  if (cat && cat.trim()) {
                    setLabelGroups((prev) => ({
                      ...prev,
                      [cat.trim().toUpperCase()]: [],
                    }));
                  }
                }}
                className="p-1 hover:text-white hover:bg-white/5 rounded transition-colors"
              >
                <span className="flex items-center text-xs font-mono">
                  <Folder className="size-3.5 mr-0.5" />
                  <Plus className="size-2.5 -ml-1.5" />
                </span>
              </button>
            </div>
          </div>

          {/* Label Category Groups */}
          <div className="space-y-6 pt-4 flex-1">
            {Object.entries(labelGroups).map(([category, items]) => (
              <div key={category} className="space-y-2.5">
                {/* Category Header */}
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <GripVertical className="size-3.5 text-zinc-500" />
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-zinc-300">
                    {category}
                  </span>
                </div>

                {/* Grid of label buttons */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {items.map((item) => {
                    const isSelected = selectedLabels.has(item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleLabel(item.id)}
                        className={cn(
                          "group flex items-center justify-between gap-1.5 px-2.5 py-2 rounded-md text-left text-xs transition-all duration-150 border cursor-pointer",
                          isSelected
                            ? "bg-[#1f2812] border-[#a3e635] text-[#bef264] shadow-[0_0_12px_rgba(190,242,100,0.15)]"
                            : "bg-[#14161a] border-[#22262d] text-zinc-200 hover:bg-[#1a1e24] hover:border-zinc-700"
                        )}
                      >
                        <span className="flex items-center gap-1.5 min-w-0">
                          <GripVertical className="size-3 shrink-0 text-zinc-600 group-hover:text-zinc-400" />
                          <span className="truncate font-medium text-[11px] sm:text-xs">
                            {item.display || item.name}
                          </span>
                        </span>
                        <span className="font-mono text-[11px] tabular-nums text-zinc-400 group-hover:text-zinc-300 shrink-0">
                          {item.count}
                        </span>
                      </button>
                    );
                  })}

                  {/* Pitch zone row 2: "+ Add Labels" next to Penalty box if it's pitch zone */}
                  {category === "PITCH ZONE" && (
                    <button
                      type="button"
                      onClick={() => setAddLabelCategory(category)}
                      className="flex items-center justify-center gap-1 px-3 py-2 rounded-md border border-dashed border-zinc-700/80 bg-transparent text-zinc-400 text-xs hover:border-zinc-500 hover:text-zinc-200 transition-colors"
                    >
                      <Plus className="size-3" />
                      <span>Add Labels</span>
                    </button>
                  )}
                </div>

                {/* For OUTCOME, BODY PART: Add Labels below */}
                {category !== "PITCH ZONE" && (
                  <div>
                    <button
                      type="button"
                      onClick={() => setAddLabelCategory(category)}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-md border border-dashed border-zinc-700/80 bg-transparent text-zinc-400 text-xs hover:border-zinc-500 hover:text-zinc-200 transition-colors"
                    >
                      <Plus className="size-3" />
                      <span>Add Labels</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick instructions / Active Labels chip indicator */}
          <div className="mt-6 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px] text-zinc-400">
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-[#bef264]" />
              <span>
                {selectedLabels.size} active modifier{selectedLabels.size === 1 ? "" : "s"} selected
              </span>
            </span>
            <button
              type="button"
              onClick={() => setSelectedLabels(new Set())}
              className="text-zinc-500 hover:text-zinc-300 underline underline-offset-2"
            >
              Clear selection
            </button>
          </div>
        </div>

        {/* ========================================================= */}
        {/* RIGHT PANE: TAGS & MATRIX                                 */}
        {/* ========================================================= */}
        <div
          className={cn(
            "flex flex-col bg-[#08090b] p-4 sm:p-5",
            mobilePane === "tags" ? "block" : "hidden lg:flex"
          )}
        >
          {/* Top Tabs: TAGS | EVENTS | NOTES | PLAYLIST */}
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-6 sm:gap-8">
              {(["TAGS", "EVENTS", "NOTES", "PLAYLIST"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "relative pb-2 text-xs font-bold tracking-wider transition-colors cursor-pointer",
                    activeTab === tab
                      ? "text-[#bef264]"
                      : "text-zinc-400 hover:text-zinc-200"
                  )}
                >
                  {tab}
                  {activeTab === tab && (
                    <span className="absolute bottom-[-13px] left-0 right-0 h-[2px] bg-[#bef264]" />
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setSoundEnabled((prev) => !prev)}
                title={soundEnabled ? "Mute click sounds" : "Enable click sounds"}
                className="text-zinc-500 hover:text-zinc-300 p-1 rounded"
              >
                {soundEnabled ? (
                  <Volume2 className="size-3.5 text-[#bef264]" />
                ) : (
                  <VolumeX className="size-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* TAB CONTENT: TAGS */}
          {activeTab === "TAGS" && (
            <div className="space-y-4 pt-4 flex-1 flex flex-col justify-between">
              {/* Controls Rows: Event Tagging & Labels switches */}
              <div className="space-y-3">
                {/* Row 1: Event Tagging */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Tag className="size-4 text-[#bef264]" />
                    <span className="text-xs font-semibold text-zinc-100">
                      Event Tagging
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-semibold uppercase text-zinc-400">
                      {eventTaggingOn ? "ON" : "OFF"}
                    </span>
                    <button
                      type="button"
                      onClick={() => setEventTaggingOn((v) => !v)}
                      aria-label="Toggle Event Tagging"
                      className={cn(
                        "relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none",
                        eventTaggingOn ? "bg-[#bef264]" : "bg-zinc-800 border border-zinc-700"
                      )}
                    >
                      <span
                        className={cn(
                          "pointer-events-none inline-block size-4 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out mt-0.5",
                          eventTaggingOn ? "translate-x-4 bg-black" : "translate-x-0.5 bg-zinc-400"
                        )}
                      />
                    </button>
                  </div>
                </div>

                {/* Row 2: Labels */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Tag className="size-4 text-[#bef264]" />
                    <span className="text-xs font-semibold text-zinc-100">
                      Labels
                    </span>
                    <span className="rounded bg-zinc-800 border border-zinc-700/60 px-1.5 py-0.5 text-[10px] font-mono text-zinc-300">
                      {totalLabelsCount}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-semibold uppercase text-zinc-400">
                      {labelsOn ? "ON" : "OFF"}
                    </span>
                    <button
                      type="button"
                      onClick={() => setLabelsOn((v) => !v)}
                      aria-label="Toggle Labels"
                      className={cn(
                        "relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out focus:outline-none",
                        labelsOn ? "bg-[#bef264]" : "bg-zinc-800 border border-zinc-700"
                      )}
                    >
                      <span
                        className={cn(
                          "pointer-events-none inline-block size-4 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out mt-0.5",
                          labelsOn ? "translate-x-4 bg-black" : "translate-x-0.5 bg-zinc-400"
                        )}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Code File Banner */}
              <div className="flex items-center justify-between gap-3 rounded-lg border border-[#232730] bg-[#121418] px-3 py-2.5">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="flex size-7 items-center justify-center rounded-md border border-[#bef264]/40 bg-[#bef264]/10 text-[#bef264]">
                    <FileCode className="size-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[9px] uppercase tracking-wider text-zinc-400 font-medium">
                      CODE FILE
                    </div>
                    <div className="truncate text-xs font-semibold text-zinc-100">
                      Standard Match Analysis
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setSaveToast(true);
                    setTimeout(() => setSaveToast(false), 2000);
                  }}
                  className="flex items-center gap-1.5 rounded border border-[#52641a] bg-[#1d260c] px-3 py-1.5 text-xs font-medium text-[#bef264] hover:bg-[#25320f] transition-colors"
                >
                  {saveToast ? (
                    <>
                      <Check className="size-3.5" />
                      <span>Saved!</span>
                    </>
                  ) : (
                    <>
                      <Save className="size-3.5" />
                      <span>Save</span>
                    </>
                  )}
                </button>
              </div>

              {/* Pad Action Bar: Open Pad, Popout, Settings */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsPadModalOpen(true)}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#4d5f19] bg-[#19220a] hover:bg-[#212e0e] py-2 text-xs font-semibold tracking-wide text-[#bef264] transition-colors shadow-sm"
                >
                  <Layers className="size-3.5" />
                  <span>Open Pad</span>
                </button>

                <button
                  type="button"
                  title="Expand to Fullscreen / Popout"
                  onClick={() => setIsPadModalOpen((prev) => !prev)}
                  className="flex size-8.5 items-center justify-center rounded-lg border border-zinc-700/80 bg-[#14161a] hover:bg-zinc-800 text-zinc-300 transition-colors"
                >
                  <ExternalLink className="size-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => setIsSettingsOpen(true)}
                  className="flex items-center gap-1.5 rounded-lg border border-zinc-700/80 bg-[#14161a] hover:bg-zinc-800 px-3 py-2 text-xs font-medium text-zinc-300 transition-colors"
                >
                  <SlidersHorizontal className="size-3.5" />
                  <span>Settings</span>
                </button>
              </div>

              {/* 4x3 Tag Matrix (12 Event Buttons) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                {tags.map((item) => {
                  const isFlashed = flashedTagId === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => triggerTag(item.id)}
                      className={cn(
                        "group relative flex items-center justify-between rounded-lg border bg-[#14161b] px-2.5 py-2.5 text-left transition-all duration-150 cursor-pointer overflow-hidden",
                        isFlashed
                          ? "border-white bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.2)] scale-[1.02]"
                          : "border-[#22262d] hover:border-zinc-600 hover:bg-[#1a1e25]"
                      )}
                    >
                      {/* Left vertical color stripe matching screenshot */}
                      <span
                        className="absolute left-0 top-0 bottom-0 w-1 rounded-l"
                        style={{ backgroundColor: item.color }}
                        aria-hidden="true"
                      />

                      {/* Tag name */}
                      <span className="pl-1.5 text-[11px] sm:text-xs font-semibold leading-tight text-zinc-100 whitespace-pre-line">
                        {item.display || item.name}
                      </span>

                      {/* Hotkey and count on right */}
                      <span className="flex items-center gap-1.5 shrink-0 pl-1">
                        <span className="rounded bg-zinc-800/90 border border-zinc-700/80 px-1.5 py-0.5 font-mono text-[9px] text-zinc-300">
                          {item.hotkey}
                        </span>
                        <span className="font-mono text-xs tabular-nums text-zinc-400 group-hover:text-zinc-200">
                          {item.count}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Live Tagging Feedback Bar */}
              <div className="mt-2 rounded-md border border-white/10 bg-white/[0.02] px-3 py-2 flex items-center justify-between gap-2 text-[11px]">
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className={cn(
                      "size-2 rounded-full",
                      lastTagged ? "bg-[#bef264] animate-tac-ping" : "bg-zinc-600"
                    )}
                  />
                  {lastTagged ? (
                    <span className="truncate text-zinc-200">
                      <strong className="text-[#bef264]">{lastTagged.tagName}</strong> tagged @ {lastTagged.time}
                      {lastTagged.labels.length > 0 && (
                        <span className="text-zinc-400 ml-1">
                          ({lastTagged.labels.join(" · ")})
                        </span>
                      )}
                    </span>
                  ) : (
                    <span className="text-zinc-400">
                      Ready to tag · Press hotkeys [1-9, 0, T] or click buttons
                    </span>
                  )}
                </div>

                <button
                  type="button"
                  onClick={resetAllCounts}
                  title="Reset counts"
                  className="text-zinc-500 hover:text-zinc-300 shrink-0 font-mono text-[10px]"
                >
                  Reset
                </button>
              </div>
            </div>
          )}

          {/* TAB CONTENT: EVENTS */}
          {activeTab === "EVENTS" && (
            <div className="space-y-3 pt-4 flex-1 flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-zinc-400 pb-2 border-b border-white/10">
                <span>{events.length} Tagged Events Logged</span>
                <button
                  type="button"
                  onClick={() => setEvents([])}
                  className="flex items-center gap-1 text-red-400 hover:text-red-300 transition-colors"
                >
                  <Trash2 className="size-3" />
                  <span>Clear All</span>
                </button>
              </div>

              <div className="space-y-2 max-h-[340px] overflow-y-auto pr-1">
                {events.length === 0 ? (
                  <div className="py-12 text-center text-xs text-zinc-500">
                    No events recorded yet. Go to TAGS tab to log events.
                  </div>
                ) : (
                  events.map((ev) => (
                    <div
                      key={ev.id}
                      className="flex items-center justify-between gap-2 rounded-lg border border-white/5 bg-[#121418] p-2.5 text-xs hover:border-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="font-mono text-[11px] text-[#bef264] shrink-0 font-semibold">
                          {ev.time}
                        </span>
                        <span
                          className="size-2 rounded-full shrink-0"
                          style={{ backgroundColor: ev.tagColor }}
                        />
                        <div className="truncate">
                          <span className="font-semibold text-zinc-100">{ev.tagName}</span>
                          {ev.labels.length > 0 && (
                            <div className="text-[10px] text-zinc-400 truncate">
                              {ev.labels.join(" · ")}
                            </div>
                          )}
                        </div>
                      </div>

                      <span className="font-mono text-[10px] text-zinc-500 shrink-0">
                        #{ev.number}
                      </span>
                    </div>
                  ))
                )}
              </div>

              <div className="pt-2 flex items-center justify-between gap-2 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    const csvContent =
                      "data:text/csv;charset=utf-8," +
                      ["Time,Event,Modifiers"]
                        .concat(
                          events.map(
                            (e) => `"${e.time}","${e.tagName}","${e.labels.join(" | ")}"`
                          )
                        )
                        .join("\n");
                    const encodedUri = encodeURI(csvContent);
                    const link = document.createElement("a");
                    link.setAttribute("href", encodedUri);
                    link.setAttribute("download", "match_events_standard.csv");
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="flex items-center gap-1.5 rounded border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/10"
                >
                  <Download className="size-3" />
                  <span>Export CSV</span>
                </button>

                <button
                  type="button"
                  onClick={() => triggerTag("goal")}
                  className="flex items-center gap-1 rounded bg-[#bef264]/20 border border-[#bef264]/40 px-3 py-1.5 text-xs font-medium text-[#bef264] hover:bg-[#bef264]/30"
                >
                  <Plus className="size-3" />
                  <span>Simulate Tag</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB CONTENT: NOTES */}
          {activeTab === "NOTES" && (
            <div className="space-y-3 pt-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2.5 max-h-[290px] overflow-y-auto pr-1">
                {notes.map((note, idx) => (
                  <div
                    key={idx}
                    className="flex items-start justify-between gap-2 rounded-lg border border-white/5 bg-[#121418] p-3 text-xs leading-relaxed text-zinc-200"
                  >
                    <span>{note}</span>
                    <button
                      type="button"
                      onClick={() => setNotes((prev) => prev.filter((_, i) => i !== idx))}
                      className="text-zinc-500 hover:text-red-400 shrink-0"
                    >
                      <X className="size-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-white/10 flex gap-2">
                <input
                  type="text"
                  placeholder="Type analyst tactical note..."
                  value={newNoteInput}
                  onChange={(e) => setNewNoteInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && newNoteInput.trim()) {
                      setNotes((prev) => [...prev, newNoteInput.trim()]);
                      setNewNoteInput("");
                    }
                  }}
                  className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:border-[#bef264] focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => {
                    if (newNoteInput.trim()) {
                      setNotes((prev) => [...prev, newNoteInput.trim()]);
                      setNewNoteInput("");
                    }
                  }}
                  className="rounded-lg bg-[#bef264] px-3 py-1.5 text-xs font-semibold text-black hover:bg-[#a3e635]"
                >
                  Add
                </button>
              </div>
            </div>
          )}

          {/* TAB CONTENT: PLAYLIST */}
          {activeTab === "PLAYLIST" && (
            <div className="space-y-3 pt-4 flex-1 flex flex-col justify-between">
              <div className="space-y-2">
                {[
                  { name: "Goals & Chances", clips: 4, duration: "0:45", color: "#22c55e" },
                  { name: "Turnovers in Middle 3rd", clips: 3, duration: "0:38", color: "#b91c1c" },
                  { name: "Defensive Duels & Tackles", clips: 5, duration: "1:15", color: "#ec4899" },
                  { name: "Key Passes / Progressions", clips: 6, duration: "1:42", color: "#a3e635" },
                ].map((pl, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-lg border border-white/5 bg-[#121418] p-3 text-xs hover:border-[#bef264]/30 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="size-2 rounded-full"
                        style={{ backgroundColor: pl.color }}
                      />
                      <div>
                        <div className="font-semibold text-zinc-100">{pl.name}</div>
                        <div className="text-[10px] text-zinc-400">
                          {pl.clips} clips auto-generated · {pl.duration} total
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => alert(`Opening playlist: ${pl.name}`)}
                      className="rounded border border-white/10 px-2.5 py-1 text-[11px] text-zinc-300 hover:bg-white/10"
                    >
                      Play
                    </button>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-white/10 flex justify-between items-center text-xs text-zinc-400">
                <span>Playlists sync with video player clips timeline</span>
                <button
                  type="button"
                  onClick={() => alert("Exporting all clips to MP4 / XML timeline")}
                  className="text-[#bef264] hover:underline"
                >
                  Export Playlists
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ========================================================= */}
      {/* MODAL: ADD LABEL                                          */}
      {/* ========================================================= */}
      {addLabelCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-sm rounded-xl border border-white/10 bg-[#121418] p-5 shadow-2xl">
            <h3 className="text-sm font-bold text-white mb-1">
              Add Label to {addLabelCategory}
            </h3>
            <p className="text-xs text-zinc-400 mb-4">
              Create a custom tactical descriptor to attach during match events.
            </p>
            <input
              type="text"
              autoFocus
              placeholder="e.g. Under Pressure, Counter Attack, Half Space"
              value={newLabelName}
              onChange={(e) => setNewLabelName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleAddLabel(addLabelCategory);
              }}
              className="w-full rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm text-white placeholder-zinc-500 focus:border-[#bef264] focus:outline-none mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  setAddLabelCategory(null);
                  setNewLabelName("");
                }}
                className="rounded-lg border border-white/10 px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/5"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => handleAddLabel(addLabelCategory)}
                className="rounded-lg bg-[#bef264] px-4 py-1.5 text-xs font-semibold text-black hover:bg-[#a3e635]"
              >
                Add Label
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: SETTINGS & HOTKEYS                                */}
      {/* ========================================================= */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-xl border border-white/10 bg-[#121418] p-5 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="size-4 text-[#bef264]" />
                <h3 className="text-sm font-bold text-white">Tagging Pad Settings</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsSettingsOpen(false)}
                className="text-zinc-400 hover:text-white"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between py-2 border-b border-white/5">
                <div>
                  <div className="font-semibold text-zinc-100">Audio Feedback</div>
                  <div className="text-zinc-400 text-[11px]">Play subtle click tone on tagging</div>
                </div>
                <button
                  type="button"
                  onClick={() => setSoundEnabled((v) => !v)}
                  className={cn(
                    "relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors",
                    soundEnabled ? "bg-[#bef264]" : "bg-zinc-800"
                  )}
                >
                  <span
                    className={cn(
                      "pointer-events-none inline-block size-4 transform rounded-full bg-white shadow transition mt-0.5",
                      soundEnabled ? "translate-x-4 bg-black" : "translate-x-0.5 bg-zinc-400"
                    )}
                  />
                </button>
              </div>

              <div>
                <div className="font-semibold text-zinc-100 mb-2">Active Keyboard Hotkeys</div>
                <div className="grid grid-cols-2 gap-2 text-[11px] max-h-48 overflow-y-auto pr-1">
                  {tags.map((t) => (
                    <div
                      key={t.id}
                      className="flex items-center justify-between p-1.5 rounded bg-black/30 border border-white/5"
                    >
                      <span className="truncate text-zinc-300">{t.name}</span>
                      <kbd className="rounded border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-[#bef264]">
                        {t.hotkey}
                      </kbd>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex justify-between items-center text-[11px] text-zinc-400">
                <span>Export format: XML (Sportscode/Nacsport compatible)</span>
                <button
                  type="button"
                  onClick={() => {
                    alert("Export configuration saved");
                    setIsSettingsOpen(false);
                  }}
                  className="rounded bg-[#bef264] px-3 py-1.5 font-semibold text-black hover:bg-[#a3e635]"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* MODAL: FULLSCREEN / POPPED-OUT PAD                        */}
      {/* ========================================================= */}
      {isPadModalOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-[#07080a] p-4 sm:p-8 overflow-y-auto">
          <div className="max-w-6xl w-full mx-auto flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <Layers className="size-5 text-[#bef264]" />
              <div>
                <h2 className="text-base font-bold text-white">Tacstem Tagging Pad · Live Workspace</h2>
                <p className="text-xs text-zinc-400">Full analysis matrix active for keyboard and pointer coding</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsPadModalOpen(false)}
              className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-zinc-300 hover:bg-white/10"
            >
              <Minimize2 className="size-4" />
              <span>Back to Overview</span>
            </button>
          </div>

          <div className="max-w-6xl w-full mx-auto my-auto py-6">
            <TacticalTaggingPad isExpanded={true} />
          </div>
        </div>
      )}
    </div>
  );
}
