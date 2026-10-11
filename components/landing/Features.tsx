import Link from "next/link";
import {
  FolderKanban,
  ListVideo,
  MonitorPlay,
  PenLine,
  Share2,
  Tag,
  ArrowRight,
} from "lucide-react";
import {
  Container,
  Eyebrow,
  Reveal,
  sectionTitleCls,
  sectionLeadCls,
} from "@/components/landing/primitives";

const FEATURES = [
  {
    n: "01",
    Icon: MonitorPlay,
    title: "Match Video Analysis",
    copy: "Work directly with full match footage, drone recordings, or broadcast streams. Scrub frame by frame with millisecond keyboard precision.",
    meta: "Local File Decoding · Timeline Scrubber",
  },
  {
    n: "02",
    Icon: Tag,
    title: "Smart Taxonomy & Hotkeys",
    copy: "Design your custom football coding structure with attacking, defending, transitions, and set-piece taxonomies. Tag moments in a single keystroke.",
    meta: "Custom Hotkeys · JSON Import",
  },
  {
    n: "03",
    Icon: PenLine,
    title: "Broadcast Telestration",
    copy: "Draw dynamic aerial arrows, pressure cones, player tracking circles, and tactical zones directly over frozen or moving frames.",
    meta: "Aerial Arrows · Zone Highlighting",
  },
  {
    n: "04",
    Icon: ListVideo,
    title: "Curated Playlists",
    copy: "Group tagged clips into team meetings, unit debriefs, or individual 1-on-1 development sessions with one-click presentation mode.",
    meta: "Presentation Mode · Clip Reordering",
  },
  {
    n: "05",
    Icon: Share2,
    title: "Instant Video & CSV Export",
    copy: "Export telestrated clips with burnt-in graphics and download full CSV event data compatible with Tableau, PowerBI, and Excel.",
    meta: "MP4 Video · Universal CSV",
  },
  {
    n: "06",
    Icon: FolderKanban,
    title: "Season Batch Analysis",
    copy: "Track opposition patterns, build recurring set-piece databases, and maintain historical match records across a full 38-game campaign.",
    meta: "Opposition Scouting · Longitudinal Data",
  },
];

/** Section 03 — comprehensive features. */
export function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32 perf-content">
      <Container>
        <Reveal>
          <Eyebrow index="02 — CAPABILITIES">Core Engine</Eyebrow>
          <h2 className={`${sectionTitleCls} max-w-2xl`}>
            Everything required to analyze football at the highest level.
          </h2>
          <p className={sectionLeadCls}>
            Built specifically around the real daily demands of professional
            coaching staff, video analysts, and scouting departments.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ n, Icon, title, copy, meta }, i) => (
            <Reveal
              key={n}
              delay={0.08 * i}
              className="group flex flex-col justify-between rounded-xl border border-white/10 bg-[#0d0f0d] p-7 transition-all duration-300 hover:border-primary/40 hover:bg-[#121512]"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-primary/80">{n}</span>
                  <span className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary">
                    <Icon className="size-5" />
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {copy}
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-primary/90">
                  {meta}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary hover:underline"
          >
            <span>Explore technical deep dive and architecture</span>
            <ArrowRight className="size-3.5" />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
