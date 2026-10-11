import Link from "next/link";
import { ArrowRight, Play, ShieldCheck, Cpu, Globe2 } from "lucide-react";
import { Container } from "@/components/landing/primitives";
import { TacstemMark } from "@/components/landing/TacstemMark";
import { Button } from "@/components/ui/button";

const FOOTER_NAV = [
  {
    title: "Platform",
    links: [
      { label: "Interactive Studio", href: "/studio" },
      { label: "Telestration Suite", href: "/#telestration" },
      { label: "Features & Specs", href: "/features" },
      { label: "Transparent Pricing", href: "/pricing" },
      { label: "Matchday Workflow", href: "/#workflow" },
    ],
  },
  {
    title: "Tactical Knowledge",
    links: [
      { label: "Tactical Analysis Core", href: "/football-tactical-analysis" },
      { label: "Opposition Scouting Systems", href: "/opposition-analysis" },
      { label: "Hudl & Sportscode Comparison", href: "/comparison" },
      { label: "Tactical Knowledge Base (FAQ)", href: "/#faq" },
    ],
  },
  {
    title: "Standards & Machine Data",
    links: [
      { label: "LLMs Machine Spec (llms.txt)", href: "/llms.txt" },
      { label: "Sample Taxonomy Schema", href: "/tacstem-sample-taxonomy.json" },
      { label: "XML Sitemap", href: "/sitemap.xml" },
      { label: "Robots Protocol", href: "/robots.txt" },
    ],
  },
];

/**
 * Modern, minimalist footer architecture.
 * Semantic entity graphs, descriptive crawlable anchor paths, and conversion CTA.
 */
export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060706] text-foreground">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand Identity & Entity Information (2 Columns on large screens) */}
          <div className="lg:col-span-2 space-y-5">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-foreground group"
              aria-label="Tacstem Analysis Pro homepage"
            >
              <span className="grid size-8 place-items-center rounded-lg border border-primary/40 bg-primary/10 text-primary transition-transform group-hover:scale-105">
                <TacstemMark className="size-4 text-primary" />
              </span>
              <div className="flex flex-col">
                <span className="font-mono text-sm font-bold tracking-[0.2em] text-foreground">
                  TACSTEM
                </span>
                <span className="font-mono text-[8px] uppercase tracking-[0.24em] text-primary">
                  Analysis Pro
                </span>
              </div>
            </Link>

            <p className="max-w-sm text-xs leading-relaxed text-muted-foreground">
              Tacstem is the browser-native football video analysis, match coding, and broadcast telestration workstation built for football coaches, performance analysts, and scouts.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-[10px] text-muted-foreground">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1">
                <ShieldCheck className="size-3 text-primary" />
                Local-First Privacy
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-2.5 py-1">
                <Globe2 className="size-3 text-primary" />
                No Enterprise Sales Reps
              </span>
            </div>
          </div>

          {/* Nav Columns (3 Columns on large screens) */}
          {FOOTER_NAV.map((col) => (
            <div key={col.title} className="space-y-4">
              <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
                {col.title}
              </h4>
              <ul className="space-y-2.5 text-xs">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground hover:underline underline-offset-4"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Minimalist Bottom Bar */}
        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 font-mono text-[11px] text-muted-foreground/70">
          <p>© {new Date().getFullYear()} Tacstem Analysis Pro. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 text-[10px]">
            <span>60 FPS WebGL Engine</span>
            <span>·</span>
            <span>Zero Remote Transcoding Queue</span>
            <span>·</span>
            <span>Universal MP4/WebM Support</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
