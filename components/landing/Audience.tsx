import { Trophy, BarChart3, Video } from "lucide-react";
import {
  Container,
  Eyebrow,
  Reveal,
  sectionLeadCls,
  sectionTitleCls,
} from "@/components/landing/primitives";

const AUDIENCE = [
  {
    n: "01",
    Icon: Trophy,
    category: "Grassroots & Academies",
    title: "Head & Academy Coaches",
    copy: "Give your players elite visual feedback to accelerate their tactical understanding. Deliver professional match debriefs without needing IT departments or four-figure software budgets.",
    action: "Review match clips faster",
  },
  {
    n: "02",
    Icon: BarChart3,
    category: "Professional & Semi-Pro",
    title: "Performance Analysts & Scouts",
    copy: "Scrub through 90 minutes with 60 FPS frame-by-frame precision. Tag transition moments using keyboard hotkeys and export clean datasets for coaches and spreadsheets.",
    action: "Eliminate workflow lag",
  },
  {
    n: "03",
    Icon: Video,
    category: "Media & Creators",
    title: "Tactical Creators & Journalists",
    copy: "Create high-impact tactical breakdowns for Twitter, YouTube, and Substack. Use broadcast-quality spotlights, speed curves, and pitch overlays that build your authority.",
    action: "Produce broadcast graphics",
  },
];

/** Section 05 — Persona Validation: Built for Real Football Specialists */
export function Audience() {
  return (
    <section id="audience" className="relative py-24 md:py-32 border-t border-white/10 bg-[#090b09] perf-content">
      <Container>
        <Reveal>
          <Eyebrow index="05 — BUILT FOR SPECIALISTS">Engineered for Football Minds</Eyebrow>
          <h2 className={`${sectionTitleCls} max-w-2xl`}>
            Built for the People Who Live and Breathe the Game.
          </h2>
          <p className={`${sectionLeadCls} max-w-2xl`}>
            Whether you&apos;re preparing an academy squad for Saturday&apos;s cup final or producing a tactical breakdown for thousands of followers, Tacstem is built for your role.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {AUDIENCE.map((person, i) => (
            <Reveal
              key={person.title}
              delay={0.08 * i}
              className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#0c0e0c] p-7 transition-all hover:border-primary/40 hover:bg-[#121512]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-primary">
                    {person.n}
                  </span>
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] text-primary">
                    {person.category}
                  </span>
                </div>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-xl bg-white/[0.04] border border-white/10 text-primary">
                    <person.Icon className="size-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {person.title}
                  </h3>
                </div>
                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                  {person.copy}
                </p>
              </div>

              <div className="mt-8 border-t border-white/10 pt-4 flex items-center justify-between">
                <span className="font-mono text-[11px] text-primary/90 font-medium">
                  {person.action}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
