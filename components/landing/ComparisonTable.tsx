"use client";

import { useState } from "react";
import { Check, ArrowRight, ChevronRight, SlidersHorizontal } from "lucide-react";
import { Container, Eyebrow, Reveal, sectionLeadCls, sectionTitleCls } from "@/components/landing/primitives";
import { cn } from "@/lib/utils";

type CompetitorKey = "hudl" | "nacsport" | "metrica";

const COMPETITORS: { id: CompetitorKey; label: string; name: string }[] = [
  { id: "hudl", label: "vs Hudl", name: "Hudl Sportscode" },
  { id: "nacsport", label: "vs Nacsport", name: "Nacsport" },
  { id: "metrica", label: "vs Metrica", name: "Metrica Play" },
];

const COMPARISON_ROWS = [
  {
    feature: "Pricing Model",
    tacstem: "€10 / month (Flat)",
    hudl: "$3,200+ / year",
    nacsport: "$650 – $2,400+ / yr",
    metrica: "$15 – $65 / month",
  },
  {
    feature: "Cloud Upload Requirement",
    tacstem: "None (Instant Local Load)",
    hudl: "Heavy Cloud or Local Mac",
    nacsport: "Local Windows software",
    metrica: "Cloud upload required",
  },
  {
    feature: "Operating System",
    tacstem: "Any browser (Mac, PC, Linux, iPad)",
    hudl: "Strictly Mac-only",
    nacsport: "Strictly Windows-only",
    metrica: "Web / Desktop",
  },
  {
    feature: "Broadcast Telestration Included",
    tacstem: "Yes (Curves, Pockets, Halo, Arrows)",
    hudl: "Requires Studio add-on ($$$)",
    nacsport: "Basic in entry plans",
    metrica: "Limited in entry plan",
  },
  {
    feature: "Tactical 2D Board & Animations",
    tacstem: "Yes (Built-in)",
    hudl: "Separate software needed",
    nacsport: "Separate KlipDraw add-on",
    metrica: "No 2D tactical board",
  },
  {
    feature: "Low-Spec Laptop Optimization",
    tacstem: "Optimized (No crash exports)",
    hudl: "Requires M2/M3 High-RAM Mac",
    nacsport: "High CPU utilization",
    metrica: "Browser GPU intensive",
  },
  {
    feature: "1-Click CSV & MP4 Export",
    tacstem: "Yes (Free unlimited)",
    hudl: "Yes",
    nacsport: "Tier-restricted",
    metrica: "Watermarked on free tier",
  },
];

export function ComparisonTable() {
  const [selectedCompetitor, setSelectedCompetitor] = useState<CompetitorKey>("hudl");

  return (
    <section id="compare-table" className="relative py-20 md:py-28 border-t border-white/10 bg-[#080908]">
      <Container>
        <Reveal>
          <Eyebrow index="08 — COMPARISON">Benchmarking</Eyebrow>
          <h2 className={`${sectionTitleCls} max-w-3xl`}>
            Tacstem vs Enterprise Football Analysis Suites
          </h2>
          <p className={sectionLeadCls}>
            See why grassroots clubs, semi-pro academies, and independent tactical analysts
            are replacing legacy $3,000+ enterprise bundles with Tacstem.
          </p>
        </Reveal>

        {/* Mobile View: Competitor Switcher & Side-by-Side Cards (< sm screens) */}
        <div className="mt-8 block sm:hidden">
          <div className="flex items-center gap-1.5 p-1 rounded-lg border border-white/10 bg-[#0c0e0c]">
            {COMPETITORS.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedCompetitor(c.id)}
                className={cn(
                  "flex-1 py-1.5 rounded-md font-mono text-[11px] font-semibold uppercase tracking-wider transition-colors text-center cursor-pointer",
                  selectedCompetitor === c.id
                    ? "bg-primary text-black shadow"
                    : "text-muted-foreground hover:text-white"
                )}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="mt-4 space-y-3">
            {COMPARISON_ROWS.map((row) => (
              <div
                key={`mob-${row.feature}`}
                className="rounded-xl border border-white/10 bg-[#0c0e0c] p-4 space-y-2.5"
              >
                <div className="flex items-center justify-between border-b border-white/5 pb-2">
                  <span className="font-mono text-xs font-semibold text-foreground uppercase tracking-wider">
                    {row.feature}
                  </span>
                </div>

                {/* Tacstem Pro Outcome */}
                <div className="flex items-start justify-between gap-2 rounded-lg border border-primary/30 bg-primary/10 p-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="grid size-4 place-items-center rounded-full bg-primary text-black">
                      <Check className="size-2.5 stroke-[3]" />
                    </span>
                    <span className="font-mono text-[10px] uppercase font-bold text-primary">
                      Tacstem Pro
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-primary text-right">
                    {row.tacstem}
                  </span>
                </div>

                {/* Competitor Outcome */}
                <div className="flex items-start justify-between gap-2 rounded-lg border border-white/5 bg-white/[0.02] p-2.5">
                  <span className="font-mono text-[10px] uppercase text-muted-foreground">
                    {COMPETITORS.find((c) => c.id === selectedCompetitor)?.name}
                  </span>
                  <span className="text-xs text-muted-foreground text-right">
                    {row[selectedCompetitor]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet & Desktop View: Sticky Columns Full Matrix (>= sm screens) */}
        <Reveal delay={0.12} className="mt-12 hidden sm:block overflow-x-auto touch-scroll">
          <div className="min-w-[680px] rounded-xl border border-white/10 bg-[#0c0e0c] shadow-2xl">
            <table className="w-full text-left border-collapse text-sm">
              <caption className="sr-only">
                Comparison of Tacstem vs Hudl Sportscode, Nacsport, and Metrica Play
              </caption>
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02]">
                  <th scope="col" className="p-4 sm:p-5 font-mono text-xs uppercase text-muted-foreground font-semibold sticky left-0 bg-[#0c0e0c] z-10">
                    Capability
                  </th>
                  <th scope="col" className="p-4 sm:p-5 font-mono text-xs uppercase text-primary font-bold bg-primary/10 border-x border-primary/20">
                    Tacstem Pro (Ours)
                  </th>
                  <th scope="col" className="p-4 sm:p-5 font-mono text-xs uppercase text-muted-foreground font-semibold">
                    Hudl Sportscode
                  </th>
                  <th scope="col" className="p-4 sm:p-5 font-mono text-xs uppercase text-muted-foreground font-semibold">
                    Nacsport
                  </th>
                  <th scope="col" className="p-4 sm:p-5 font-mono text-xs uppercase text-muted-foreground font-semibold">
                    Metrica Play
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature} className="hover:bg-white/[0.02] transition-colors">
                    <th scope="row" className="p-4 sm:p-5 font-medium text-foreground sticky left-0 bg-[#0c0e0c] z-10 border-r border-white/5">
                      {row.feature}
                    </th>
                    <td className="p-4 sm:p-5 font-semibold text-primary bg-primary/5 border-x border-primary/20">
                      {row.tacstem}
                    </td>
                    <td className="p-4 sm:p-5 text-muted-foreground">
                      {row.hudl}
                    </td>
                    <td className="p-4 sm:p-5 text-muted-foreground">
                      {row.nacsport}
                    </td>
                    <td className="p-4 sm:p-5 text-muted-foreground">
                      {row.metrica}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
