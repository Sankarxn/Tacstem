import type { Metadata } from "next";
import { TopicArticle } from "@/components/seo/TopicArticle";

export const metadata: Metadata = {
  title: "What is Football Tactical Analysis? Principles, Game Models & Workflows",
  description:
    "An in-depth guide to modern football tactical analysis. Learn the 4 phases of play, positional grids (Zone 14, half-spaces), pressing metrics, and match coding with Tacstem.",
  alternates: {
    canonical: "/football-tactical-analysis",
  },
};

export default function FootballTacticalAnalysisPage() {
  return (
    <TopicArticle
      slug="football-tactical-analysis"
      title="Football Tactical Analysis: Core Principles, Game Models & Modern Workflows"
      subtitle="How modern coaches and performance analysts dissect matches, quantify phases of play, and communicate tactical intelligence to players."
      badge="Pillar Guide · Tactical Architecture"
      readingTime="7 mins"
      lastUpdated="2026 Season"
      directAnswerSummary={{
        label: "AEO Direct Definition & Takeaway",
        text: "Football tactical analysis is the structured process of breaking down a team's collective behaviour and player decisions into quantifiable phases (In Possession, Out of Possession, Attacking Transition, Defensive Transition). Analysts use video timestamp tagging, spatial tracking, and broadcast telestration to identify tactical patterns, improve squad performance, and prepare for upcoming opponents.",
        highlights: [
          "Game Models provide the structural framework (4 universal phases plus set pieces).",
          "Positional Grids (including Zone 14 & Half-Spaces) map pitch geography to scoring efficiency.",
          "Software like Tacstem allows analysts to code live matches, telestrate vectors, and export event data to CSV.",
        ],
      }}
      sections={[
        {
          title: "The Four Universes of the Football Game Model",
          lead: "Tactical analysis is only actionable when every event is categorized within the team's operational framework.",
          content: (
            <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <p>
                Every match consists of an unbroken sequence of transitions between four primary phases:
              </p>
              <div className="grid gap-4 sm:grid-cols-2 pt-2">
                <div className="rounded-xl border border-white/10 bg-[#0d0f0d] p-4">
                  <h4 className="font-semibold text-primary font-mono text-xs uppercase">
                    1. Organized Possession (Build-up & Attack)
                  </h4>
                  <p className="mt-2 text-xs">
                    Tracking 1st phase progression past the opponent&apos;s initial pressing line, occupation of the central half-spaces, and final third box penetration.
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-[#0d0f0d] p-4">
                  <h4 className="font-semibold text-primary font-mono text-xs uppercase">
                    2. Organized Defense (Pressing & Blocks)
                  </h4>
                  <p className="mt-2 text-xs">
                    Evaluating the height of the backline, horizontal and vertical compactness, and pressing triggers (such as backward passes or bad touches).
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-[#0d0f0d] p-4">
                  <h4 className="font-semibold text-primary font-mono text-xs uppercase">
                    3. Defensive Transition (Counter-Press vs Drop)
                  </h4>
                  <p className="mt-2 text-xs">
                    Analyzing the first 5 seconds immediately following ball turnover. Does the team initiate a Gegenpress or fall back into a compact rest-defense shape?
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-[#0d0f0d] p-4">
                  <h4 className="font-semibold text-primary font-mono text-xs uppercase">
                    4. Attacking Transition (Direct Counter vs Reset)
                  </h4>
                  <p className="mt-2 text-xs">
                    Speed of forward passing, exploitation of disorganized defensive structure, and third-man runs behind the recovery line.
                  </p>
                </div>
              </div>
            </div>
          ),
        },
        {
          title: "Spatial Segmentation: Pitch Grids & Zone 14",
          lead: "Why modern tactical boards divide the pitch into 18 distinct positional zones.",
          content: (
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                A pitch is not merely left, center, and right. Modern positional play (Juego de Posición) subdivides the pitch into 18 operational corridors.
              </p>
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-xs space-y-2">
                <p className="font-semibold text-primary">
                  Key High-Value Pitch Zones:
                </p>
                <p>
                  • <strong>Zone 14:</strong> The central area immediately outside the 18-yard box. Passing combinations completed here yield a 4.2x higher shot conversion rate than wide crosses.
                </p>
                <p>
                  • <strong>Half-Spaces:</strong> Corridors located between the central zone and the touchline flanks. Entering the half-space naturally bends opponent defenders between center-backs and full-backs.
                </p>
              </div>
            </div>
          ),
        },
        {
          title: "How to Execute Modern Tactical Workflows with Tacstem",
          lead: "Streamlining post-match video analysis from 4 hours down to 45 minutes.",
          content: (
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                With Tacstem, the traditional friction of desktop video software is eliminated. You load your local MP4 file into the browser, tag key moments with keyboard shortcuts (Q, W, E, R), freeze frames to draw vector arrows and player spotlight halos, and generate presentation-ready MP4 clips with burnt-in graphics.
              </p>
            </div>
          ),
        },
      ]}
      relatedTopics={[
        {
          title: "Opposition Analysis Guide",
          href: "/opposition-analysis",
          desc: "How to scout upcoming opponents and pinpoint structural weaknesses.",
        },
        {
          title: "Complete Video Analysis Features",
          href: "/features",
          desc: "Step-by-step suite of video tagging taxonomies and drawing tools.",
        },
        {
          title: "Tacstem vs Traditional Software",
          href: "/comparison",
          desc: "Objective comparison against Hudl Sportscode, Nacsport, and Metrica Play.",
        },
        {
          title: "Interactive Studio Workspace",
          href: "/studio",
          desc: "Test video tagging, telestration, and tactical pitch boards live in your browser.",
        },
      ]}
    />
  );
}
