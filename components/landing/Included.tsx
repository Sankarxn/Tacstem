import {
  Braces,
  CalendarDays,
  Circle,
  Clock,
  Layers,
  Spline,
} from "lucide-react";
import {
  Container,
  Eyebrow,
  Reveal,
  sectionLeadCls,
  sectionTitleCls,
} from "@/components/landing/primitives";

const INCLUDED = [
  {
    icon: Circle,
    title: "Crash-Free Video Export",
    copy: "We watched whole analyst projects crash mid-export in rival software. Tacstem is built for low-end laptops: one minute of 1080p footage renders in about 60 seconds — reliably, without memory leaks.",
    meta: "No Crashes · Low-Spec Hardware Ready",
  },
  {
    icon: Braces,
    title: "AI JSON Taxonomy Design",
    copy: "Skip tedious manual button setup. Ask ChatGPT, Claude, or Gemini for the JSON structure of your desired football tagging methodology, paste it in, done. An hour of config done in 30 seconds.",
    meta: "1 Hour → 30 Seconds",
  },
  {
    icon: Clock,
    title: "Live Tagging Without Video",
    copy: "No need to wait until the broadcast or drone camera file arrives. Tag tactical phases directly from the stadium stands or dugout on your tablet — save up to 50% of post-match turnaround time.",
    meta: "Stadium Ready · Cut Post-Match Work",
  },
  {
    icon: Layers,
    title: "Layered Telestration Timeline",
    copy: "Some tools splash every drawing on screen at once. In Tacstem you control the reveal sequence: what appears first, which runner path animates next, and when arrows fade.",
    meta: "Sequential Reveal · Clean Visuals",
  },
  {
    icon: Spline,
    title: "Integrated Tactical 2D Board",
    copy: "Why should an analyst pay extra for a separate tactical magnetic board app? Ours is built right in — create tactical 2D pitch animations and merge them directly into your match video playlist.",
    meta: "Built-in · Zero Add-On Charges",
  },
  {
    icon: CalendarDays,
    title: "Season-Long Batch Analysis",
    copy: "Tag multiple fixtures over months. Filter by phase (e.g. 'Opponent Corner Defending' or 'Pressing Triggers') across 15 matches to reveal macro systemic patterns.",
    meta: "Multi-Match Data · Longitudinal Scouting",
  },
];

/** Section 09 — details that set Tacstem apart. */
export function Included() {
  return (
    <section id="included" className="relative py-24 md:py-32 perf-content">
      <Container>
        <Reveal>
          <Eyebrow index="07 — BUILT-IN ADVANTAGES">What’s Included</Eyebrow>
          <h2 className={`${sectionTitleCls} max-w-2xl`}>
            Built for how modern analysts actually work.
          </h2>
          <p className={sectionLeadCls}>
            Small workflow innovations that make a massive difference when you are
            racing against Sunday morning kickoff deadlines.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {INCLUDED.map(({ icon: Icon, title, copy, meta }, i) => (
            <Reveal
              key={title}
              delay={0.07 * i}
              className="flex flex-col justify-between rounded-xl border border-white/10 bg-[#0d0f0d] p-7 transition-colors hover:border-primary/40 hover:bg-[#121512]"
            >
              <div>
                <div className="grid size-11 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {copy}
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-primary">
                  {meta}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
