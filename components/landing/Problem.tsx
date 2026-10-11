import Link from "next/link";
import { ArrowRight, CheckCircle2, Laptop, Clock, DollarSign, Layers, Play, XCircle } from "lucide-react";
import {
  Container,
  Eyebrow,
  Reveal,
  sectionLeadCls,
  sectionTitleCls,
} from "@/components/landing/primitives";
import { Button } from "@/components/ui/button";

const LEGACY_PAINS = [
  {
    title: "The 3-Hour Upload Trap",
    desc: "Waiting hours for 4K video to upload and transcode before you can tag a single tactical moment.",
    icon: Clock,
  },
  {
    title: "€2,500–€5,000 Enterprise Lock-In",
    desc: "Aggressive sales calls, mandatory multi-seat contracts, and annual price hikes just to review matches.",
    icon: DollarSign,
  },
  {
    title: "Overheating & Lagging Laptops",
    desc: "Bloated 15-year-old desktop software that overheats normal coaching laptops during Sunday evening reviews.",
    icon: Laptop,
  },
  {
    title: "Fragmented 5-Tool Stacks",
    desc: "Juggling media players, note apps, separate drawing tools, and spreadsheets across confusing windows.",
    icon: Layers,
  },
];

const TACSTEM_ADVANTAGES = [
  {
    title: "Instant In-Memory Playback",
    desc: "Drag and drop any match MP4. It decodes locally via your GPU at 60 FPS in 0.5s with zero bandwidth.",
  },
  {
    title: "Radically Transparent & Accessible",
    desc: "Launch studio free in one click. Pro features accessible at a flat €10/mo with zero sales calls.",
  },
  {
    title: "Built for Real Coaching Laptops",
    desc: "Hardware-accelerated browser engine that runs cool, fast, and responsive on standard MacBooks or PCs.",
  },
  {
    title: "All-in-One Tactical Workspace",
    desc: "Tagging, broadcast-grade telestration, tactical board, and 1-click video exports unified in one tab.",
  },
];

/** Section 02 — The Matchday Reality Check: Legacy Software vs The Tacstem Way */
export function Problem() {
  return (
    <section id="problem" className="relative py-24 md:py-32 border-t border-white/10 bg-[#090b09] perf-content">
      <Container>
        <Reveal>
          <Eyebrow index="02 — THE MATCHDAY REALITY">Legacy Pain vs The Tacstem Way</Eyebrow>
          <h2 className={`${sectionTitleCls} max-w-3xl`}>
            Traditional Video Analysis Software Was Built for Enterprise IT Budgets.
            <br />
            <span className="text-primary">Not for Coaches on Sunday Night.</span>
          </h2>
          <p className={`${sectionLeadCls} max-w-3xl`}>
            You shouldn&apos;t need a gaming rig or a five-figure club budget just to review weekend match footage with your squad. See how Tacstem eliminates legacy bottlenecks.
          </p>
        </Reveal>

        {/* Side-by-Side Comparison Matrix */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Legacy Suite Column */}
          <Reveal delay={0.1} className="rounded-2xl border border-red-500/20 bg-red-950/10 p-7 sm:p-8 backdrop-blur">
            <div className="flex items-center justify-between border-b border-red-500/20 pb-5">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-red-400">
                  The Broken Status Quo
                </span>
                <h3 className="mt-1 text-xl font-bold text-foreground">
                  Legacy Desktop &amp; Cloud Suites
                </h3>
              </div>
              <span className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 font-mono text-xs text-red-400">
                Outdated
              </span>
            </div>

            <ul className="mt-6 space-y-5">
              {LEGACY_PAINS.map((pain) => (
                <li key={pain.title} className="flex items-start gap-3.5">
                  <XCircle className="mt-0.5 size-5 shrink-0 text-red-400" />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {pain.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {pain.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Tacstem Column */}
          <Reveal delay={0.16} className="relative rounded-2xl border border-primary/40 bg-primary/[0.04] p-7 sm:p-8 shadow-[0_0_50px_-15px_rgba(201,247,60,0.15)] backdrop-blur">
            <div className="flex items-center justify-between border-b border-primary/20 pb-5">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-primary">
                  The Modern Standard
                </span>
                <h3 className="mt-1 text-xl font-bold text-foreground">
                  Tacstem Analysis Pro
                </h3>
              </div>
              <span className="rounded-full border border-primary/40 bg-primary/20 px-3 py-1 font-mono text-xs font-semibold text-primary">
                Fast &amp; Private
              </span>
            </div>

            <ul className="mt-6 space-y-5">
              {TACSTEM_ADVANTAGES.map((adv) => (
                <li key={adv.title} className="flex items-start gap-3.5">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {adv.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {adv.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Quick In-Section Conversion Callout */}
            <div className="mt-8 pt-6 border-t border-primary/20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xs font-semibold text-foreground">
                  Experience the speed difference right now.
                </p>
                <p className="text-[11px] text-muted-foreground">
                  Zero install. Your video never leaves your browser.
                </p>
              </div>
              <Button asChild size="sm" className="shrink-0 gap-1.5 shadow-[0_0_20px_-4px_rgba(201,247,60,0.6)]">
                <Link href="/studio">
                  <Play className="size-3.5 fill-primary-foreground" />
                  <span>Test in Studio</span>
                  <ArrowRight className="size-3.5" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
