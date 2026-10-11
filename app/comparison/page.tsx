import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Play,
  Sparkles,
  Layers,
  Cpu,
  Monitor,
  ShieldCheck,
  Zap,
  Check,
  X,
  Scale,
} from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Eyebrow, sectionTitleCls } from "@/components/landing/primitives";
import { ComparisonTable } from "@/components/landing/ComparisonTable";

export const metadata: Metadata = {
  title: "Tacstem vs Hudl Sportscode & Nacsport | 2026 Comparison",
  description:
    "An objective, factual comparison between Tacstem, Hudl Sportscode, Nacsport, and manual analysis stacks. Discover why modern football coaches choose Tacstem for $10/mo flat pricing and zero cloud lag.",
  keywords: [
    "tacstem vs hudl sportscode",
    "hudl sportscode alternative",
    "nacsport alternative soccer",
    "affordable football analysis software",
    "soccer video analysis software comparison",
    "best football telestration software 2026",
  ],
  alternates: {
    canonical: "/comparison",
  },
  openGraph: {
    title: "Tacstem vs Hudl Sportscode & Nacsport | 2026 Comparison",
    description:
      "A fair, technical comparison of football video analysis tools: pricing, operating systems, cloud upload speeds, broadcast telestration, and export capabilities.",
    url: "https://tacstem.com/comparison",
    type: "website",
  },
};

const COMPARISON_PILLARS = [
  {
    title: "Enterprise Desktop Suites",
    examples: "Hudl Sportscode, Nacsport Elite",
    pros: "Multi-angle SDI live stadium capture rigs for elite 15-person video departments.",
    cons: "Cost barrier ($2,500 – $5,000/yr), mandatory annual contracts, strict OS locks (Sportscode is Mac-only, Nacsport is Windows-only), expensive add-on drawing tools.",
    badge: "Enterprise Only",
    badgeColor: "border-red-500/30 bg-red-500/10 text-red-400",
  },
  {
    title: "Fragmented Manual Stacks",
    examples: "VLC + PowerPoint + Excel + Screen Recorders",
    pros: "Free or low cost using software you already own.",
    cons: "Painfully slow. Constantly jumping between 4 windows, taking screenshots, manually drawing arrows, and trying to align spreadsheets on Sunday nights.",
    badge: "Time Consuming",
    badgeColor: "border-amber-500/30 bg-amber-500/10 text-amber-400",
  },
  {
    title: "Tacstem Analysis Pro",
    examples: "Browser-Native Tactical Workstation",
    pros: "60 FPS local in-memory GPU video decoding, 9 broadcast telestration instruments, custom hotkeys, 2D board, and 1-click video/CSV exports in one tab.",
    cons: "Flat $10/mo. Cancel anytime in 1 click. Zero OS barriers (runs on Mac, Windows, Linux, and tablets).",
    badge: "Modern Standard",
    badgeColor: "border-primary/40 bg-primary/20 text-primary font-bold",
    highlight: true,
  },
];

const SCENARIOS = [
  {
    role: "Grassroots & Academy Coaches",
    dilemma: "Limited software budget ($0 – $200/year), but need to teach tactical concepts with visual clarity.",
    resolution: "Tacstem gives youth coaches broadcast-style arrows, player spotlight halos, and 2D animated pitch tactics for $10/month without asking club boards for thousands in software grants.",
  },
  {
    role: "Independent & Freelance Analysts",
    dilemma: "Working on Windows or budget laptops; locked out by Mac-exclusive legacy software like Sportscode.",
    resolution: "Tacstem runs natively inside Google Chrome, Edge, and Safari on any operating system, decoding 1080p and 4K footage at 60 FPS without software crashes.",
  },
  {
    role: "First-Team Opposition Scouts",
    dilemma: "Need to review 5 upcoming opponent matches while traveling on the team bus with no stadium Wi-Fi.",
    resolution: "Tacstem's local-first architecture decodes footage directly from your hard drive with zero cloud bandwidth, allowing complete offline match analysis anywhere.",
  },
];

export default function ComparisonPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Software Comparison Matrix", item: "/comparison" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <JsonLd
        breadcrumbs={breadcrumbs}
        article={{
          headline: "Tacstem vs Traditional Football Video Analysis Software (2026 Comparison)",
          description:
            "An objective technical and economic breakdown comparing Tacstem Analysis Pro, Hudl Sportscode, Nacsport, and manual analysis workflows.",
          datePublished: "2026-01-20",
          dateModified: "2026-10-11",
          authorName: "Tacstem Software Architecture Team",
        }}
      />
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <header className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-white/10 bg-[#070807]">
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
                <li className="text-foreground font-semibold">Software Comparison</li>
              </ol>
            </nav>

            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Heading, Context, AEO Capsule & Actions */}
              <div className="flex flex-col gap-6 lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-primary w-fit">
                  <span className="size-1.5 rounded-full bg-primary" />
                  Objective Software Evaluation · 2026 Architecture
                </div>

                <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                  Enterprise Capabilities.
                  <br />
                  <span className="text-primary">Without the Enterprise Tax.</span>
                </h1>

                <p className="text-base text-muted-foreground sm:text-lg leading-relaxed max-w-xl">
                  An honest, factual technical breakdown for club managers, performance analysts, and coaches evaluating sports video analysis software.
                </p>

                {/* AEO Executive Summary Capsule */}
                <div className="rounded-2xl border border-primary/40 bg-[#0c0f0c] p-5 sm:p-6 shadow-xl space-y-2.5">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                    <Sparkles className="size-4" />
                    <span>AI Search Executive Summary</span>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                    <strong>The Reality:</strong> For elite Premier League clubs with 15-person video departments and enterprise budgets, legacy suites like Hudl Sportscode provide multi-camera live capture trucks. However, for <strong>95% of football analysts, grassroots coaches, academies, and freelance consultants</strong>, Tacstem provides the same core coding hotkeys, 60 FPS playback, and broadcast telestration at <strong>1/30th the cost ($10/mo vs $3,000+/yr)</strong> with zero operating system lock-in and instantaneous in-browser decoding.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
                  <Button asChild size="lg" className="h-12 gap-2 px-7 text-sm font-semibold shadow-[0_0_30px_-6px_rgba(201,247,60,0.7)] cursor-pointer">
                    <Link href="/studio">
                      <Play className="size-4 fill-primary-foreground" />
                      <span>Launch Studio Free — Verify Capabilities</span>
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-12 border-white/15 bg-transparent px-6 text-sm text-foreground hover:border-primary/40 hover:bg-primary/5 cursor-pointer">
                    <a href="#comparison-matrix">View Detailed Comparison Matrix ↓</a>
                  </Button>
                </div>
              </div>

              {/* Right Column: Side-by-Side Workflow UI Visual */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl border border-white/15 bg-[#0a0c0a] p-6 shadow-[0_30px_90px_-30px_rgba(0,0,0,0.9)] overflow-hidden">
                  {/* Subtle top indicator */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                      <span className="size-2 rounded-full bg-primary animate-tac-blink" />
                      <span>Sunday Night Workflow Contrast</span>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-primary border border-primary/30 bg-primary/10 px-2 py-0.5 rounded">
                      Live Benchmark
                    </span>
                  </div>

                  {/* Contrast Stack Cards */}
                  <div className="mt-5 space-y-4">
                    {/* The Fragmented Old Way Card */}
                    <div className="rounded-2xl border border-red-500/20 bg-red-950/[0.08] p-4.5 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] uppercase tracking-widest text-red-400 font-semibold flex items-center gap-1.5">
                          <XCircle className="size-3.5" />
                          Fragmented Legacy Stack
                        </span>
                        <span className="font-mono text-[10px] text-muted-foreground line-through">
                          3.5 Hours
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 font-mono text-[10px] text-muted-foreground pt-1">
                        <div className="rounded-lg border border-white/5 bg-black/40 p-2 text-center">
                          <p className="text-white/40">VLC Player</p>
                          <p className="text-[9px] text-red-400 mt-0.5">Scrubbing Lag</p>
                        </div>
                        <div className="rounded-lg border border-white/5 bg-black/40 p-2 text-center">
                          <p className="text-white/40">PowerPoint</p>
                          <p className="text-[9px] text-red-400 mt-0.5">Manual Arrows</p>
                        </div>
                        <div className="rounded-lg border border-white/5 bg-black/40 p-2 text-center">
                          <p className="text-white/40">Cloud Drives</p>
                          <p className="text-[9px] text-red-400 mt-0.5">3hr Uploads</p>
                        </div>
                      </div>
                    </div>

                    {/* Tacstem Unified Workspace Card */}
                    <div className="relative rounded-2xl border border-primary/40 bg-primary/[0.04] p-5 space-y-3.5 shadow-[0_0_40px_-15px_rgba(201,247,60,0.15)]">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] uppercase tracking-widest text-primary font-bold flex items-center gap-1.5">
                          <CheckCircle2 className="size-4 text-primary" />
                          Tacstem Studio Workflow
                        </span>
                        <span className="font-mono text-[10px] font-bold text-primary border border-primary/30 bg-primary/20 px-2 py-0.5 rounded">
                          0.5s Ingestion
                        </span>
                      </div>

                      {/* Mini Telestration Preview Pill */}
                      <div className="rounded-xl border border-white/10 bg-[#0e120e] p-3 space-y-2">
                        <div className="flex items-center justify-between font-mono text-[10px]">
                          <span className="text-foreground font-semibold flex items-center gap-1.5">
                            <span className="size-1.5 rounded-full bg-primary" />
                            67:12 · Press Break Telestration
                          </span>
                          <span className="text-primary font-mono">60 FPS</span>
                        </div>

                        {/* Visual SVG Mini-Pitch Overlay */}
                        <div className="relative aspect-[16/7] rounded-lg border border-white/10 bg-black/80 overflow-hidden flex items-center justify-center">
                          {/* Pitch markings */}
                          <div className="absolute inset-x-0 top-1/2 h-px bg-white/15" />
                          <div className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15" />

                          {/* Tactical Arrow & Spotlight Vector */}
                          <svg className="absolute inset-0 size-full" viewBox="0 0 200 90" fill="none">
                            {/* Spotlight Halo */}
                            <ellipse cx="65" cy="45" rx="18" ry="10" fill="rgba(201,247,60,0.2)" stroke="#c9f73c" strokeWidth="1" strokeDasharray="3 3" />
                            <circle cx="65" cy="45" r="4" fill="#c9f73c" />

                            {/* Runner Trajectory Arc */}
                            <path d="M65 45 C 95 30, 130 35, 155 52" stroke="#c9f73c" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 2" />
                            <polygon points="158,54 150,50 152,56" fill="#c9f73c" />

                            {/* Receiver Spotlight */}
                            <circle cx="155" cy="52" r="3.5" fill="#ffffff" />
                          </svg>

                          <span className="absolute bottom-1.5 right-2 font-mono text-[8px] uppercase tracking-wider text-primary/80">
                            Broadcast Vector Preview
                          </span>
                        </div>
                      </div>

                      {/* Feature Checklist Inside Visual */}
                      <div className="grid grid-cols-2 gap-2 font-mono text-[10px] text-muted-foreground pt-1">
                        <span className="flex items-center gap-1.5 text-foreground">
                          <Check className="size-3 text-primary" />
                          In-Browser GPU Decode
                        </span>
                        <span className="flex items-center gap-1.5 text-foreground">
                          <Check className="size-3 text-primary" />
                          9 Broadcast Presets
                        </span>
                        <span className="flex items-center gap-1.5 text-foreground">
                          <Check className="size-3 text-primary" />
                          Instant MP4/CSV Export
                        </span>
                        <span className="flex items-center gap-1.5 text-foreground">
                          <Check className="size-3 text-primary" />
                          $10/mo Flat (No Tiers)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </header>

        {/* 3 WORKFLOW PARADIGMS */}
        <section className="py-24 border-b border-white/10 bg-[#080908]">
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <Eyebrow index="THE THREE PATHS" className="justify-center">Workflow Choices</Eyebrow>
              <h2 className={`${sectionTitleCls} mt-3`}>
                The Three Ways Football Coaches Analyze Video Today
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground">
                Understand the real trade-offs between legacy suites, manual tools, and modern browser workstations.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {COMPARISON_PILLARS.map((pillar) => (
                <div
                  key={pillar.title}
                  className={`rounded-2xl border p-7 flex flex-col justify-between transition-all ${
                    pillar.highlight
                      ? "border-primary/50 bg-[#0c100c] shadow-[0_0_50px_-15px_rgba(201,247,60,0.2)]"
                      : "border-white/10 bg-[#0a0c0a]"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase ${pillar.badgeColor}`}>
                        {pillar.badge}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">{pillar.examples}</span>
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-foreground">{pillar.title}</h3>

                    <div className="mt-5 space-y-4 text-xs leading-relaxed">
                      <div>
                        <span className="font-mono text-muted-foreground uppercase text-[10px]">What Works:</span>
                        <p className="text-foreground/90 mt-1">{pillar.pros}</p>
                      </div>

                      <div>
                        <span className="font-mono text-muted-foreground uppercase text-[10px]">The Trade-Off:</span>
                        <p className="text-muted-foreground mt-1">{pillar.cons}</p>
                      </div>
                    </div>
                  </div>

                  {pillar.highlight ? (
                    <div className="mt-8 pt-5 border-t border-primary/20">
                      <Button asChild size="sm" className="w-full gap-2 shadow-sm font-semibold">
                        <Link href="/studio">
                          <span>Test Tacstem Free</span>
                          <ArrowRight className="size-3.5" />
                        </Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="mt-8 pt-5 border-t border-white/5">
                      <p className="font-mono text-[10px] text-muted-foreground text-center">Standard Industry Workflow</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* INTERACTIVE COMPARISON MATRIX TABLE */}
        <section id="comparison-matrix" className="py-24 border-b border-white/10 bg-[#070807]">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <Eyebrow index="FEATURE MATRIX" className="justify-center">Direct Contrast</Eyebrow>
              <h2 className={`${sectionTitleCls} mt-3`}>
                Feature-by-Feature Software Matrix
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground">
                Compare Tacstem directly against Hudl Sportscode, Nacsport, and Metrica Play.
              </p>
            </div>

            <ComparisonTable />
          </Container>
        </section>

        {/* RADICAL HONESTY SECTION: WHAT TACSTEM IS NOT */}
        <section className="py-24 border-b border-white/10 bg-[#090b09]">
          <Container>
            <div className="max-w-3xl mx-auto rounded-3xl border border-white/10 bg-[#0c0e0c] p-8 sm:p-12 space-y-6">
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary">
                <Scale className="size-4" />
                <span>Radical Honesty &amp; Technical Fit</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                When Should You NOT Choose Tacstem?
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We believe in total transparency. If you are a top-tier Premier League club requiring <strong>8 synchronized live SDI camera capture feeds</strong> connected to a broadcast truck during a live match, you need a $20,000 enterprise hardware rig like Sportscode Elite.
              </p>

              <div className="rounded-xl border border-white/10 bg-[#121512] p-5 space-y-2">
                <h4 className="text-xs font-mono uppercase text-foreground font-semibold">
                  When Tacstem Is the Superior Choice:
                </h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  If you are a coach, performance analyst, or scout who reviews single or dual-camera match footage, codes tactical events with custom hotkeys, draws broadcast telestrations, and needs polished debrief videos ready for players on Sunday night—<strong>Tacstem delivers that entire pipeline in your browser for $10/month with zero lag.</strong>
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* REAL-WORLD SCENARIOS */}
        <section className="py-24 border-b border-white/10 bg-[#070807]">
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <Eyebrow index="FIT & PERSONAS" className="justify-center">Real-World Matchday</Eyebrow>
              <h2 className={`${sectionTitleCls} mt-3`}>
                Who Benefits Most from Switching to Tacstem?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground">
                Practical matchday outcomes experienced by modern football specialists.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {SCENARIOS.map((scenario) => (
                <div key={scenario.role} className="rounded-2xl border border-white/10 bg-[#0c0e0c] p-7 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-xs font-semibold text-primary">{scenario.role}</span>
                    <h3 className="mt-4 text-sm font-semibold text-foreground">The Common Obstacle:</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{scenario.dilemma}</p>

                    <h3 className="mt-5 text-sm font-semibold text-foreground">The Tacstem Solution:</h3>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{scenario.resolution}</p>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <Link
                      href="/studio"
                      className="inline-flex items-center gap-1 font-mono text-[11px] text-primary hover:underline"
                    >
                      <span>Test in Studio →</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* TERMINAL CONVERSION CTA */}
        <section className="relative overflow-hidden py-24 md:py-32 bg-[#070807] text-center">
          <div
            aria-hidden="true"
            className="glow-lime pointer-events-none absolute inset-x-0 bottom-0 h-[400px] opacity-40"
          />
          <Container className="relative max-w-3xl flex flex-col items-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              Don&apos;t Take Our Word for It
            </span>
            <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">
              Test Tacstem Free.
              <br />
              <span className="text-primary">Judge the Performance for Yourself.</span>
            </h2>
            <p className="mt-5 text-sm sm:text-base text-muted-foreground max-w-xl">
              Drag and drop any match video into the Studio right now. Test the 60 FPS playback speed, test the 9 broadcast drawing tools, and export a sample clip in 2 minutes.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
              <Button asChild size="lg" className="h-12 w-full sm:w-auto justify-center gap-2 px-8 text-sm font-semibold shadow-[0_0_34px_-8px_rgba(201,247,60,0.75)] cursor-pointer">
                <Link href="/studio">
                  <Play className="size-4 fill-primary-foreground" />
                  <span>Launch Studio Free — Instant Access</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 w-full sm:w-auto justify-center border-white/15 bg-transparent px-7 text-sm font-medium text-foreground hover:border-primary/40 hover:bg-primary/5 cursor-pointer">
                <Link href="/pricing">View $10/mo Transparent Pricing</Link>
              </Button>
            </div>

            <p className="mt-8 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              No credit card required · Runs on Mac, PC, Linux &amp; tablets · 100% private
            </p>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
