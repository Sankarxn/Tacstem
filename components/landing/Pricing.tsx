import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Container,
  Eyebrow,
  Reveal,
  sectionTitleCls,
} from "@/components/landing/primitives";

const PLAN = {
  name: "Tacstem All-in Plan",
  price: 10,
  currency: "€",
  period: "month",
  billing: "Per user · Billed monthly · Cancel anytime",
  features: [
    "Full coding panel + customizable tagging taxonomy",
    "Broadcast-style telestration (arrows, zones, spotlight, freehand)",
    "Live match tagging without video (stand/bench mode)",
    "Integrated tactical 2D board & player movement animations",
    "One-click telestrated video export + universal CSV data",
    "Batch opposition analysis across multiple fixtures",
    "Runs completely in modern browsers (Chrome, Edge, Safari, Firefox)",
    "Low-spec hardware performance tuning (no mid-export crashes)",
  ],
  cta: "Start Analyzing Now",
};

/** Section 12 — pricing. */
export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      <div
        aria-hidden="true"
        className="glow-lime-soft pointer-events-none absolute inset-x-0 top-1/3 h-[420px]"
      />

      <Container className="relative">
        <div className="text-center">
          <Reveal>
            <Eyebrow index="10 — PRICING" className="justify-center">
              Simple Pricing
            </Eyebrow>
            <h2 className={`${sectionTitleCls} mx-auto max-w-2xl`}>
              One plan. Every feature included.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
              No tier locks, no student limits, no hidden export fees. All tools unlocked from day one.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mx-auto mt-14 max-w-xl">
          <div className="relative overflow-hidden rounded-2xl border border-primary/40 bg-[#0d0f0d] p-8 sm:p-10 shadow-[0_0_60px_-20px_rgba(201,247,60,0.2)]">
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
            />

            <div className="flex items-center justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                  {PLAN.name}
                </span>
                <p className="mt-2 font-mono text-[11px] text-muted-foreground">
                  {PLAN.billing}
                </p>
              </div>

              <div className="text-right">
                <span className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  {PLAN.currency}{PLAN.price}
                </span>
                <span className="ml-1 text-sm font-normal text-muted-foreground">
                  /{PLAN.period}
                </span>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-8">
              <h3 className="font-mono text-xs uppercase tracking-wider text-foreground">
                Included in your subscription:
              </h3>
              <ul className="mt-4 space-y-3.5">
                {PLAN.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-foreground/90"
                  >
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-primary/20 text-primary">
                      <Check className="size-3" strokeWidth={3} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <Button
                asChild
                size="lg"
                className="group h-12 w-full gap-2 text-base font-semibold shadow-[0_0_30px_-6px_rgba(201,247,60,0.7)] hover:shadow-[0_0_40px_-4px_rgba(201,247,60,0.9)] cursor-pointer"
              >
                <Link href="/studio">
                  <span>{PLAN.cta}</span>
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                Instant browser access · No credit card required to demo
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
