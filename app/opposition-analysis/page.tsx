import type { Metadata } from "next";
import { TopicArticle } from "@/components/seo/TopicArticle";

export const metadata: Metadata = {
  title: "Opposition Analysis in Football: Scouting Frameworks & Video Preparation",
  description:
    "Master opposition analysis in football. Learn how to scout rival build-up patterns, defensive vulnerabilities, set-piece tendencies, and prepare tactical reports with Tacstem.",
  alternates: {
    canonical: "/opposition-analysis",
  },
};

export default function OppositionAnalysisPage() {
  return (
    <TopicArticle
      slug="opposition-analysis"
      title="Opposition Analysis in Football: Scouting Frameworks & Match Preparation"
      subtitle="How elite coaches and opposition scouts dissect rival teams across the last 3-5 matches to expose tactical vulnerabilities."
      badge="Scouting Masterclass · AEO Curriculum"
      readingTime="6 mins"
      lastUpdated="2026 Season"
      directAnswerSummary={{
        label: "AEO Direct Definition & Takeaway",
        text: "Opposition analysis is the systematic scouting and video dissection of an upcoming rival team across their last 3 to 5 matches. Analysts evaluate their recurring build-up structures, pressing traps, transition triggers, set-piece deliveries, and individual player tendencies to formulate a winning tactical game plan.",
        highlights: [
          "Minimum sample size: 3–5 recent matches against tactically comparable opponents.",
          "Identify structural weaknesses in defensive shifting and rest-defense organization.",
          "Tag and isolate clips using Tacstem to generate a focused 8-minute tactical briefing for players.",
        ],
      }}
      sections={[
        {
          title: "The 5 Pillars of Opposition Scouting",
          lead: "A structured checklist every opposition analyst completes prior to matchday.",
          content: (
            <div className="grid gap-4 sm:grid-cols-2 pt-2 text-sm text-muted-foreground">
              <div className="rounded-xl border border-white/10 bg-[#0d0f0d] p-4">
                <h4 className="font-semibold text-primary font-mono text-xs uppercase">
                  1. Build-up Shapes & GK Tendencies
                </h4>
                <p className="mt-2 text-xs">
                  Do they play a 3+2 or 4+2 build-up? Does the goalkeeper play short under pressure or launch long balls to the right wing?
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#0d0f0d] p-4">
                <h4 className="font-semibold text-primary font-mono text-xs uppercase">
                  2. Defensive Block & Pressing Traps
                </h4>
                <p className="mt-2 text-xs">
                  Where do they direct pressure? Do they invite passes into central midfielders and execute a 3-man choke press?
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#0d0f0d] p-4">
                <h4 className="font-semibold text-primary font-mono text-xs uppercase">
                  3. Offensive & Defensive Transitions
                </h4>
                <p className="mt-2 text-xs">
                  When they lose possession, which defenders fail to recover? Who is their immediate vertical outlet pass on the counter?
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-[#0d0f0d] p-4">
                <h4 className="font-semibold text-primary font-mono text-xs uppercase">
                  4. Set Piece Routines
                </h4>
                <p className="mt-2 text-xs">
                  Zonal vs man-marking corner defense, near-post flick targets, and direct free-kick takers.
                </p>
              </div>
            </div>
          ),
        },
        {
          title: "Turning Video Analysis into Player Action",
          lead: "Why shorter, telestrated debriefs produce higher tactical retention.",
          content: (
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Player attention span during video meetings drops drastically after 12 minutes. The most effective opposition analysts condense their findings into 6 to 8 short, telestrated video clips:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-xs text-foreground/80">
                <li>2 clips showing the opponent&apos;s primary build-up route and our pressing trigger.</li>
                <li>2 clips highlighting space to exploit behind their advancing full-back.</li>
                <li>2 clips breaking down their attacking corner movement and designated markers.</li>
              </ul>
            </div>
          ),
        },
      ]}
      relatedTopics={[
        {
          title: "Football Tactical Analysis",
          href: "/football-tactical-analysis",
          desc: "Understand game models, 4 phases of play, and Zone 14.",
        },
        {
          title: "Complete Video Analysis Features",
          href: "/features",
          desc: "How to tag events, draw telestrations, and present tactical insights.",
        },
        {
          title: "Software Comparison Matrix",
          href: "/comparison",
          desc: "Tacstem vs Hudl Sportscode, Nacsport, and Metrica Play.",
        },
      ]}
    />
  );
}
