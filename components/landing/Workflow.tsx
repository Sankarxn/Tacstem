import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import {
  Container,
  Eyebrow,
  Reveal,
  sectionLeadCls,
  sectionTitleCls,
} from "@/components/landing/primitives";
import { Button } from "@/components/ui/button";

const STEPS = [
  {
    n: "01",
    title: "Drag & Drop Your Match Video",
    copy: "Zero upload queues. Drop your raw camera MP4 or tactical wide angle directly into Tacstem. Your browser decodes it locally via your GPU with 100% privacy.",
    meta: "Instant GPU Decode · Zero Bandwidth",
  },
  {
    n: "02",
    title: "Tag Key Phases & Add Telestrations",
    copy: "Scrub with frame-by-frame precision using rapid hotkeys. Draw broadcast arrows, player spotlight halos, and compactness polygons directly on the video.",
    meta: "Hotkeys · 9 Broadcast Presets",
  },
  {
    n: "03",
    title: "Export & Debrief Your Squad",
    copy: "Generate polished MP4 clips with burnt-in broadcast drawings and export structured CSV event data in one click for team meetings or player WhatsApp reviews.",
    meta: "MP4 Video + CSV · Presentation Ready",
  },
];

/** Section 04 — The 3-Step Matchday Workflow */
export function Workflow() {
  return (
    <section id="workflow" className="relative py-24 md:py-32 border-t border-white/10 bg-[#070807] perf-content">
      <Container>
        <Reveal>
          <Eyebrow index="04 — MATCHDAY PROCESS">3 Simple Steps</Eyebrow>
          <h2 className={`${sectionTitleCls} max-w-2xl`}>
            From Final Whistle to Player Debrief in Three Simple Steps.
          </h2>
          <p className={`${sectionLeadCls} max-w-2xl`}>
            Spend your Sunday evening coaching tactics—not troubleshooting software or waiting for uploads to transcode.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {STEPS.map(({ n, title, copy, meta }, i) => (
            <Reveal
              key={n}
              delay={0.08 * i}
              className="relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0c0e0c] p-7 transition-all hover:border-primary/40 hover:bg-[#121512]"
            >
              <div>
                <span className="font-mono text-3xl font-extrabold text-primary">
                  {n}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {copy}
                </p>
              </div>

              <div className="mt-8 border-t border-white/10 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                  {meta}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Small in-flow prompt */}
        <Reveal delay={0.25} className="mt-12 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            No steep learning curve · Master the workflow in under 5 minutes
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
