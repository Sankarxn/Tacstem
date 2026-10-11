"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Reveal } from "@/components/landing/primitives";
import { ProductWorkspace } from "@/components/landing/ProductWorkspace";

const GRID_MASK = {
  maskImage: "radial-gradient(90% 65% at 50% 25%, black 25%, transparent 100%)",
  WebkitMaskImage: "radial-gradient(90% 65% at 50% 25%, black 25%, transparent 100%)",
};

/** Hero — core promise, CTAs, direct AEO statement, and the product workspace mockup. */
export function Hero() {
  return (
    <section id="product" className="relative overflow-hidden pt-8 pb-16 md:pt-14 md:pb-24">
      {/* Blueprint grid + electric glow */}
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-x-0 top-0 h-[820px] opacity-70"
        style={GRID_MASK}
      />
      <div
        aria-hidden="true"
        className="glow-lime pointer-events-none absolute inset-x-0 top-0 h-[720px]"
      />

      <Container className="relative pt-6 md:pt-10">
        <Reveal y={14}>
          <div className="flex flex-wrap items-center gap-3">
            <p className="flex items-center gap-2.5 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.25em] text-primary">
              <span className="relative flex size-1.5">
                <span className="animate-tac-ping absolute inset-0 rounded-full bg-primary" />
                <span className="size-1.5 rounded-full bg-primary" />
              </span>
              LOCAL-FIRST FOOTBALL ANALYSIS · ZERO CLOUD UPLOADS
            </p>
            <span className="hidden font-mono text-[11px] text-muted-foreground sm:inline-block">
              60 FPS GPU Decoding · 100% Private
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mt-7 text-4xl xs:text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.035em] text-foreground sm:text-6xl lg:text-7xl xl:text-[4.75rem] text-balance">
            Stop Waiting on Video Uploads.
            <br />
            Start Analyzing in Seconds<span className="text-primary">.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            <span className="font-semibold text-foreground">
              Professional football video analysis and broadcast-grade telestration—running instantly in your browser.
            </span>{" "}
            No 3-hour cloud transcoding queues. No €3,000 enterprise seat locks. Zero laptop lag on matchday reviews.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              asChild
              size="lg"
              className="group h-12 w-full sm:w-auto justify-center gap-2 px-7 text-[15px] font-semibold shadow-[0_0_34px_-8px_rgba(201,247,60,0.75)] transition-shadow hover:shadow-[0_0_40px_-6px_rgba(201,247,60,0.85)] cursor-pointer"
            >
              <Link href="/studio">
                <Play className="size-4 fill-primary-foreground" />
                <span>Launch Studio Free — Start Analyzing</span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 w-full sm:w-auto justify-center border-white/15 bg-transparent px-6 text-[15px] font-medium text-foreground hover:border-primary/40 hover:bg-primary/5 cursor-pointer"
            >
              <a href="#telestration">See Telestration in Action ↓</a>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="flex items-center gap-2 text-foreground/90">
              <span className="size-1.5 rounded-full bg-primary" />
              No Credit Card Required
            </span>
            <span className="text-white/20">/</span>
            <span className="flex items-center gap-2 text-foreground/90">
              <span className="size-1.5 rounded-full bg-primary" />
              Works with Any Match MP4
            </span>
            <span className="text-white/20">/</span>
            <span className="flex items-center gap-2 text-foreground/90">
              <span className="size-1.5 rounded-full bg-primary" />
              Zero Lag on Standard Laptops
            </span>
          </div>
        </Reveal>
      </Container>

      {/* Workspace mockup */}
      <Container className="relative mt-12 md:mt-16">
        {/* Floating analysis annotations */}
        <div
          aria-hidden="true"
          className="animate-tac-float absolute -left-6 top-[44%] z-10 hidden items-center gap-2.5 rounded-lg border border-primary/40 bg-background/90 px-3.5 py-2 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur xl:flex"
        >
          <span className="relative flex size-2">
            <span className="animate-tac-ping absolute inset-0 rounded-full bg-primary" />
            <span className="size-2 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            67:12 · Press Break Progression
          </span>
        </div>

        <div
          aria-hidden="true"
          className="animate-tac-float absolute -right-6 -top-10 z-10 hidden items-center gap-2 rounded-lg border border-white/12 bg-background/90 px-3.5 py-2 shadow-[0_18px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur xl:flex"
          style={{ animationDelay: "1.4s" }}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Match Playlist · 05 Tactical Clips
          </span>
        </div>

        <Reveal y={40} delay={0.1} className="relative">
          <ProductWorkspace />
        </Reveal>
      </Container>
    </section>
  );
}
