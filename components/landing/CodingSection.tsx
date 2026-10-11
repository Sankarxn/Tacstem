"use client";

import {
  Container,
  Eyebrow,
  Reveal,
  sectionLeadCls,
  sectionTitleCls,
} from "@/components/landing/primitives";
import { TacticalTaggingPad } from "@/components/landing/TacticalTaggingPad";

const BULLETS = [
  "Multi-dimensional label matrix (Outcome, Pitch Zone, Body Part) bound to core match events.",
  "Zero-latency keyboard tagging (1–9, 0, T) while video footage continues uninterrupted.",
  "Integrated event timeline logging, tactical notes scratchpad, and video playlist generation.",
  "Instant export to Sportscode XML, Nacsport, and CSV for high-performance coaching staff.",
];

/** Section 03 — TAXONOMY: Match Coding & Tagging Pad */
export function CodingSection() {
  return (
    <section id="coding" className="relative py-24 md:py-32">
      <Container>
        <div className="space-y-12">
          {/* Header copy */}
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-end">
            <div>
              <Reveal>
                <Eyebrow index="03 — TAXONOMY">Match Coding & Tagging Pad</Eyebrow>
                <h2 className={sectionTitleCls}>
                  Build your own analysis language.
                </h2>
                <p className={sectionLeadCls}>
                  Structure match coding according to your club’s exact methodology —
                  not rigid presets. Combine contextual modifiers, spatial pitch zones,
                  and rapid event hotkeys mirroring our professional tactical tagging workspace.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <ul className="space-y-2.5 rounded-xl border border-white/10 bg-white/[0.02] p-5">
                {BULLETS.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground"
                  >
                    <span
                      className="mt-1.5 size-1.5 shrink-0 rotate-45 bg-primary"
                      aria-hidden="true"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Tagging Pad Workspace */}
          <Reveal delay={0.15}>
            <div className="w-full">
              <TacticalTaggingPad />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

