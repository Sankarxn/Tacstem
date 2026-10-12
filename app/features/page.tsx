import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Download,
  FileSpreadsheet,
  Layers,
  Play,
  ShieldCheck,
  Zap,
  Sparkles,
  Keyboard,
  Video,
  Eye,
  Sliders,
  FolderSync,
  Bot,
  HelpCircle,
} from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Eyebrow, sectionTitleCls } from "@/components/landing/primitives";
import { FeaturesHeroVisual } from "@/components/landing/FeaturesHeroVisual";

export const metadata: Metadata = {
  title: "Football Video Analysis Features & Architecture | Tacstem",
  description:
    "Discover Tacstem's core capabilities: local in-memory 60 FPS video decoding, 9 broadcast telestration tools, custom hotkey match tagging, AI JSON taxonomy generator, and 1-click MP4/CSV exports.",
  keywords: [
    "football video analysis features",
    "soccer tactical telestration tools",
    "local video decoding software",
    "match event coding hotkeys",
    "tactical taxonomy json generator",
    "football video analysis software",
    "hudl sportscode alternative features",
  ],
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: "Football Video Analysis Features & Technical Architecture | Tacstem",
    description:
      "Explore the core capabilities of Tacstem: 60 FPS local video decoding, broadcast-quality vector telestrations, custom event tagging hotkeys, AI taxonomy generation, and 1-click video/CSV exports.",
    url: "https://tacstem.com/features",
    type: "website",
  },
};

const SAMPLE_TAXONOMY_CODE = `{
  "tacticalModel": "4-3-3 High Press & Positional Buildup",
  "categories": [
    {
      "name": "Phase 1 - Buildup",
      "tags": [
        { "code": "BU_1", "label": "1st Line Progression", "hotkey": "1" },
        { "code": "HALF_R", "label": "Right Half-Space Overload", "hotkey": "2" },
        { "code": "Z14_IN", "label": "Central Zone 14 Entry", "hotkey": "3" }
      ]
    },
    {
      "name": "Phase 2 - Out of Possession",
      "tags": [
        { "code": "PRESS_TRIG", "label": "Wide Pressing Trigger", "hotkey": "Q" },
        { "code": "REST_DEF", "label": "Counter-Press Rest Defense", "hotkey": "W" },
        { "code": "COMPACT_MID", "label": "Mid-Block Compactness", "hotkey": "E" }
      ]
    }
  ]
}`;

export default function FeaturesPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Features & Architecture", item: "/features" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <JsonLd
        breadcrumbs={breadcrumbs}
        article={{
          headline: "Features & Technical Architecture of Tacstem Analysis Pro",
          description:
            "Comprehensive breakdown of Tacstem's local-first video decoding engine, 9-tool broadcast telestration suite, hotkey event tagging taxonomy, and multi-format export pipeline.",
          datePublished: "2026-01-10",
          dateModified: "2026-10-11",
          authorName: "Tacstem Technical Engineering",
        }}
      />
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <header className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 border-b border-white/10 bg-[#070807]">
          <div
            aria-hidden="true"
            className="grid-lines pointer-events-none absolute inset-0 opacity-40"
          />
          <Container className="relative">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumbs" className="mb-8">
              <ol className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-foreground font-semibold">Features &amp; Architecture</li>
              </ol>
            </nav>

            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Value proposition, headline, and CTAs */}
              <div className="flex flex-col gap-6 lg:col-span-6 xl:col-span-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-primary w-fit">
                  <span className="size-1.5 rounded-full bg-primary" />
                  Technical Specifications &amp; Workflows
                </div>

                <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-5xl xl:text-6xl text-balance">
                  Built for Matchday Speed.
                  <br />
                  <span className="text-primary">Engineered for Tactical Precision.</span>
                </h1>

                <p className="text-base text-muted-foreground sm:text-lg leading-relaxed max-w-xl">
                  Explore the four technical pillars behind Tacstem: zero-upload in-browser video decoding, broadcast-quality vector telestrations, customizable tagging pads, and universal exports.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
                  <Button asChild size="lg" className="h-12 gap-2 px-7 text-sm font-semibold shadow-[0_0_30px_-6px_rgba(201,247,60,0.7)] cursor-pointer">
                    <Link href="https://tacstempro.netlify.app/">
                      <Play className="size-4 fill-primary-foreground" />
                      <span>Launch Tacstem – Instant Access</span>
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-12 border-white/15 bg-transparent px-6 text-sm text-foreground hover:border-primary/40 hover:bg-primary/5 cursor-pointer">
                    <a href="#core-features">Explore Technical Pillars ↓</a>
                  </Button>
                </div>

                {/* Quick Spec Pills */}
                <div className="flex flex-wrap items-center gap-3 pt-2 font-mono text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1.5 text-foreground/90">
                    <span className="size-1.5 rounded-full bg-primary" />
                    Local GPU Decode
                  </span>
                  <span className="text-white/20">/</span>
                  <span className="flex items-center gap-1.5 text-foreground/90">
                    <span className="size-1.5 rounded-full bg-primary" />
                    9 Broadcast Tools
                  </span>
                  <span className="text-white/20">/</span>
                  <span className="flex items-center gap-1.5 text-foreground/90">
                    <span className="size-1.5 rounded-full bg-primary" />
                    100% Private Client-Side
                  </span>
                </div>
              </div>

              {/* Right Column: High-fidelity Live Studio & Telestration Visual */}
              <div className="lg:col-span-6 xl:col-span-6 w-full">
                <FeaturesHeroVisual />
              </div>
            </div>
          </Container>
        </header>

        {/* CORE FEATURES SECTION */}
        <section id="core-features" className="py-24 md:py-32 space-y-24">
          <Container>
            {/* PILLAR 1: LOCAL VIDEO ENGINE */}
            <article className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-5">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                  <Cpu className="size-4" />
                  <span>Pillar 01 · Local-First Engine</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Zero-Upload In-Memory Video Decoding
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Traditional web platforms force coaches to upload 5GB–15GB match files to remote cloud servers—wasting 2 to 3 hours before analysis can even start. Tacstem utilizes native browser stream decoders and GPU rendering.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold uppercase font-mono text-foreground">Instant 3-Second Playback</h4>
                      <p className="text-xs text-muted-foreground">Drag and drop any match file. It mounts directly in memory and scrubs smoothly at 60 FPS.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold uppercase font-mono text-foreground">Zero Bandwidth Consumed</h4>
                      <p className="text-xs text-muted-foreground">Analyze matches anywhere—in stadium dugouts, hotel rooms, or on team buses with zero Wi-Fi.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold uppercase font-mono text-foreground">Complete Tactical Confidentiality</h4>
                      <p className="text-xs text-muted-foreground">Proprietary match footage never touches external third-party servers. Your club IP stays 100% private.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Card */}
              <div className="rounded-2xl border border-white/10 bg-[#0c0e0c] p-6 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                    <span className="size-2 rounded-full bg-primary" />
                    <span>Engine Benchmark</span>
                  </div>
                  <span className="font-mono text-[10px] uppercase text-primary border border-primary/30 bg-primary/10 px-2 py-0.5 rounded">
                    Hardware Accelerated
                  </span>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="rounded-xl border border-white/5 bg-[#121512] p-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-muted-foreground">Initial Load Latency</p>
                      <p className="text-lg font-bold text-primary font-mono">&lt; 0.5 Seconds</p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">vs 2.5 hrs Cloud</span>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-[#121512] p-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-muted-foreground">Supported Resolutions</p>
                      <p className="text-lg font-bold text-foreground font-mono">1080p / 4K @ 60 FPS</p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">Full Frame Rate</span>
                  </div>
                  <div className="rounded-xl border border-white/5 bg-[#121512] p-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-muted-foreground">Network Data Uploaded</p>
                      <p className="text-lg font-bold text-primary font-mono">0 Bytes (Local GPU)</p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">100% Private</span>
                  </div>
                </div>
              </div>
            </article>

            {/* PILLAR 2: TELESTRATION SUITE */}
            <article className="mt-28 grid gap-10 lg:grid-cols-2 lg:items-center border-t border-white/10 pt-20">
              {/* Visual Card (Left) */}
              <div className="rounded-2xl border border-white/10 bg-[#0c0e0c] p-6 shadow-2xl space-y-4 order-2 lg:order-1">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                    <Layers className="size-4 text-primary" />
                    <span>9 Broadcast Presets Included</span>
                  </div>
                  <span className="font-mono text-[10px] text-primary uppercase">No Add-On Costs</span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-lg border border-white/5 bg-[#121512] p-3">
                    <p className="font-semibold text-foreground">3D Aerial Pass Arcs</p>
                    <p className="text-[11px] text-muted-foreground mt-1">Parabolic ball curves with landing markers.</p>
                  </div>
                  <div className="rounded-lg border border-white/5 bg-[#121512] p-3">
                    <p className="font-semibold text-foreground">Player Spotlight Halos</p>
                    <p className="text-[11px] text-muted-foreground mt-1">Pitch dimming to isolate decision-makers.</p>
                  </div>
                  <div className="rounded-lg border border-white/5 bg-[#121512] p-3">
                    <p className="font-semibold text-foreground">Defensive Polygons</p>
                    <p className="text-[11px] text-muted-foreground mt-1">Compact back-line and midfield unit shapes.</p>
                  </div>
                  <div className="rounded-lg border border-white/5 bg-[#121512] p-3">
                    <p className="font-semibold text-foreground">Tactical Distance Lines</p>
                    <p className="text-[11px] text-muted-foreground mt-1">Real-time inter-player spacing measurement.</p>
                  </div>
                </div>

                <div className="rounded-xl border border-primary/20 bg-primary/[0.03] p-3.5 flex items-center justify-between">
                  <p className="text-xs text-muted-foreground">
                    Save <span className="font-bold text-foreground">€1,500/year</span> compared to purchasing add-on studio telestration plugins.
                  </p>
                </div>
              </div>

              {/* Content (Right) */}
              <div className="space-y-5 order-1 lg:order-2">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                  <Layers className="size-4" />
                  <span>Pillar 02 · Broadcast Telestration</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Broadcast-Grade Visuals Players Actually Understand
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Stop explaining tactical adjustments with messy paint sketches. Tacstem includes nine television-grade visual tools right out of the box so you can command player focus during team briefings.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold uppercase font-mono text-foreground">Frame-Accurate Drawing Sync</h4>
                      <p className="text-xs text-muted-foreground">Freeze any frame, drop your graphics, set duration in milliseconds, and fade annotations smoothly.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold uppercase font-mono text-foreground">Dynamic Player Spotlights</h4>
                      <p className="text-xs text-muted-foreground">Dim background pitch lighting and illuminate key players to emphasize positioning and passing lanes.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold uppercase font-mono text-foreground">Defensive Compactness &amp; Vision Cones</h4>
                      <p className="text-xs text-muted-foreground">Highlight defensive chains, pressing units, and player scanning awareness with mathematical clarity.</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* PILLAR 3: EVENT CODING & HOTKEYS */}
            <article className="mt-28 grid gap-10 lg:grid-cols-2 lg:items-center border-t border-white/10 pt-20">
              <div className="space-y-5">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                  <Keyboard className="size-4" />
                  <span>Pillar 03 · Tactical Event Coding</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  Custom Event Taxonomies &amp; Rapid Hotkey Matrix
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Code match events as they unfold without ever reaching for your mouse. Create tailored tagging buttons matched to your tactical game model and trigger them with customizable single-key hotkeys.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold uppercase font-mono text-foreground">Single-Key Hotkey Scrubbing</h4>
                      <p className="text-xs text-muted-foreground">Map keys 1-9 and Q-P to log transitions, press triggers, and box entries with instantaneous response.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold uppercase font-mono text-foreground">Lead &amp; Lag Duration Presets</h4>
                      <p className="text-xs text-muted-foreground">Automatically capture 5 seconds before and 3 seconds after an event for perfect tactical context.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold uppercase font-mono text-foreground">Live Sideline Tagging Mode</h4>
                      <p className="text-xs text-muted-foreground">Tag live matches from the bench or stands without video loaded; sync footage in one click post-match.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Card (Tagging Hotkey Mockup) */}
              <div className="rounded-2xl border border-white/10 bg-[#0c0e0c] p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-mono text-xs text-muted-foreground">Tactical Matrix Pad</span>
                  <span className="font-mono text-[10px] text-primary border border-primary/30 bg-primary/10 px-2 py-0.5 rounded">
                    Live Active
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                  <div className="rounded-xl border border-primary/40 bg-primary/10 p-3.5 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-foreground">1st Line Buildup</span>
                      <p className="text-[10px] text-primary mt-0.5">Defensive 3rd</p>
                    </div>
                    <kbd className="rounded border border-primary/40 bg-black/60 px-2 py-1 text-primary text-xs font-bold">1</kbd>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-foreground">Press Trigger</span>
                      <p className="text-[10px] text-muted-foreground mt-0.5">High Block</p>
                    </div>
                    <kbd className="rounded border border-white/20 bg-black/60 px-2 py-1 text-muted-foreground text-xs font-bold">Q</kbd>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-foreground">Zone 14 Entry</span>
                      <p className="text-[10px] text-muted-foreground mt-0.5">Middle 3rd</p>
                    </div>
                    <kbd className="rounded border border-white/20 bg-black/60 px-2 py-1 text-muted-foreground text-xs font-bold">2</kbd>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-foreground">Counter-Press</span>
                      <p className="text-[10px] text-muted-foreground mt-0.5">Rest Defense</p>
                    </div>
                    <kbd className="rounded border border-white/20 bg-black/60 px-2 py-1 text-muted-foreground text-xs font-bold">W</kbd>
                  </div>
                </div>

                <p className="font-mono text-[11px] text-muted-foreground text-center pt-2">
                  Fully customizable layout · Instant JSON schema import
                </p>
              </div>
            </article>

            {/* PILLAR 4: UNIVERSAL EXPORTS */}
            <article className="mt-28 grid gap-10 lg:grid-cols-2 lg:items-center border-t border-white/10 pt-20">
              <div className="space-y-5">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                  <FileSpreadsheet className="size-4" />
                  <span>Pillar 04 · Multi-Format Export</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                  1-Click Video Clips &amp; Universal CSV Datasets
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                  Never be trapped in proprietary closed ecosystems. Export high-definition video clips with burnt-in broadcast drawings for the dressing room, plus structured CSV spreadsheets for data analysis.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold uppercase font-mono text-foreground">Burnt-In Broadcast MP4 Export</h4>
                      <p className="text-xs text-muted-foreground">Export clips with crisp drawings that play on any smartphone, projector, or team WhatsApp group.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold uppercase font-mono text-foreground">Excel, Power BI &amp; Python Ready</h4>
                      <p className="text-xs text-muted-foreground">Standardized CSV columns including timestamps, event types, coordinates, and duration.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-semibold uppercase font-mono text-foreground">Zero Watermark Restrictions</h4>
                      <p className="text-xs text-muted-foreground">Clean, professional exports with zero branding watermarks on both free and pro workflows.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Card (CSV Data Preview) */}
              <div className="rounded-2xl border border-white/10 bg-[#0c0e0c] p-6 shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="font-mono text-xs text-muted-foreground">Standardized CSV Schema</span>
                  <span className="font-mono text-[10px] text-primary uppercase">Universal Format</span>
                </div>

                <div className="rounded-xl border border-white/5 bg-[#121512] p-4 font-mono text-[11px] text-muted-foreground overflow-x-auto touch-scroll leading-relaxed">
                  <span className="text-foreground font-semibold">Timestamp,Event_Type,Tactical_Zone,Player,Outcome,Duration</span>
                  <br />
                  00:14:22,Buildup,Defensive Third,Rodri,Successful,07.4s
                  <br />
                  00:23:45,Zone 14 Entry,Attacking Third,Foden,Shot on Target,04.8s
                  <br />
                  00:36:10,High Press Trigger,Middle Third,Haaland,Turnover Won,09.2s
                  <br />
                  00:44:05,Counter-Press,Wing Channel,Team Unit,Foul Won,06.1s
                </div>

                <p className="font-mono text-[11px] text-muted-foreground text-center pt-2">
                  Directly importable into Tableau, Google Sheets, Excel &amp; pandas
                </p>
              </div>
            </article>
          </Container>
        </section>

        {/* REAL-WORLD MATCHDAY USE CASES */}
        <section className="py-24 border-t border-white/10 bg-[#080908]">
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <Eyebrow index="USE CASES" className="justify-center">Applied Workflows</Eyebrow>
              <h2 className={`${sectionTitleCls} mt-3`}>
                How Real Football Specialists Use Tacstem
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground">
                From weekend grassroots debriefs to high-stakes opposition scouting reports.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-[#0c0e0c] p-7 flex flex-col justify-between">
                <div>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] text-primary font-semibold">
                    Matchday Review
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    Sunday Evening Squad Debriefs
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Drop the raw match footage in without waiting 3 hours. Tag transitions and set pieces in 15 minutes, telestrate key decision points, and have video ready for Monday morning training.
                  </p>
                </div>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="font-mono text-xs text-primary font-semibold">Outcome: 60% Faster Delivery</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0c0e0c] p-7 flex flex-col justify-between">
                <div>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] text-primary font-semibold">
                    Opposition Scouting
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    Pressing &amp; Set-Piece Dossiers
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Study upcoming opponents across multiple matches. Diagram their corner routines, map out their buildup triggers, and create visual gameplans that players retain.
                  </p>
                </div>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="font-mono text-xs text-primary font-semibold">Outcome: Tactical Clarity</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0c0e0c] p-7 flex flex-col justify-between">
                <div>
                  <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] text-primary font-semibold">
                    Player Development
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    Individual 1-on-1 Video Feedback
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Isolate a player&apos;s touches, body shape, and scanning habits using spotlight halos and vision cones. Send 30-second clips straight to their phones for visual learning.
                  </p>
                </div>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="font-mono text-xs text-primary font-semibold">Outcome: Accelerated Development</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* TECHNICAL SPECIFICATION TABLE */}
        <section className="py-24 border-t border-white/10 bg-[#060706]">
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <Eyebrow index="SPECIFICATIONS" className="justify-center">Technical Matrix</Eyebrow>
              <h2 className={`${sectionTitleCls} mt-3`}>
                Complete Platform Architecture
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground">
                Factual specifications for analysts, coaches, and sports science departments.
              </p>
            </div>

            <div className="mt-12 overflow-x-auto rounded-2xl border border-white/10 bg-[#0c0e0c]">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02] text-primary uppercase tracking-wider">
                    <th className="p-4 sm:p-5">Specification Dimension</th>
                    <th className="p-4 sm:p-5">Tacstem Architecture Standard</th>
                    <th className="p-4 sm:p-5 text-muted-foreground">Legacy Cloud Standard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-muted-foreground">
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-foreground">Video Processing</td>
                    <td className="p-4 sm:p-5 text-primary">In-Memory Local Stream / WebCodecs</td>
                    <td className="p-4 sm:p-5">Mandatory Cloud Upload &amp; Transcode</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-foreground">Supported Formats</td>
                    <td className="p-4 sm:p-5 text-primary">MP4, WebM, MOV (H.264 / VP9 / AVC)</td>
                    <td className="p-4 sm:p-5">Restricted Proprietary Containers</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-foreground">Max Resolution</td>
                    <td className="p-4 sm:p-5 text-primary">Native 4K (3840×2160) @ 60 FPS</td>
                    <td className="p-4 sm:p-5">Often Downscaled to 720p Cloud Preview</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-foreground">Data Confidentiality</td>
                    <td className="p-4 sm:p-5 text-primary">100% Client-Side (Zero Server Storage)</td>
                    <td className="p-4 sm:p-5">Stored on Remote Vendor Servers</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-foreground">Telestration Tools</td>
                    <td className="p-4 sm:p-5 text-primary">9 Broadcast Tools Built-In (Free &amp; Pro)</td>
                    <td className="p-4 sm:p-5">Paid Add-Ons (€1,500/yr Piero/Studio)</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-foreground">Taxonomy Schema</td>
                    <td className="p-4 sm:p-5 text-primary">Open JSON / AI-Generated Compatible</td>
                    <td className="p-4 sm:p-5">Rigid Proprietary XML/Vendor Lock</td>
                  </tr>
                  <tr>
                    <td className="p-4 sm:p-5 font-semibold text-foreground">Data Export</td>
                    <td className="p-4 sm:p-5 text-primary">Standard CSV + Presentation MP4</td>
                    <td className="p-4 sm:p-5">Gated Behind Enterprise License Tiers</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Container>
        </section>

        {/* TERMINAL CONVERSION CTA */}
        <section className="relative overflow-hidden py-24 md:py-32 border-t border-white/10 bg-[#070807] text-center">
          <div
            aria-hidden="true"
            className="glow-lime pointer-events-none absolute inset-x-0 bottom-0 h-[400px] opacity-40"
          />
          <Container className="relative max-w-3xl flex flex-col items-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              Ready to Upgrade Your Tactical Workflow?
            </span>
            <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">
              Experience the Speed Difference on Your Next Match File.
            </h2>
            <p className="mt-5 text-sm sm:text-base text-muted-foreground max-w-xl">
              Launch the studio directly in your browser. Drag and drop any match MP4, test the 9 broadcast drawing tools, and export tactical clips with zero delay.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
              <Button asChild size="lg" className="h-12 w-full sm:w-auto justify-center gap-2 px-8 text-sm font-semibold shadow-[0_0_34px_-8px_rgba(201,247,60,0.75)] cursor-pointer">
                <Link href="https://tacstempro.netlify.app/">
                  <Play className="size-4 fill-primary-foreground" />
                  <span>Launch Tacstem – Instant Access</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 w-full sm:w-auto justify-center border-white/15 bg-transparent px-7 text-sm font-medium text-foreground hover:border-primary/40 hover:bg-primary/5 cursor-pointer">
                <Link href="/pricing">View All-in Plan (€10/mo)</Link>
              </Button>
            </div>

            <p className="mt-8 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              No credit card required · Instant in-browser execution · 100% private
            </p>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
