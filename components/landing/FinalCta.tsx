import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container, Reveal } from "@/components/landing/primitives";

const GRID_MASK = {
  maskImage: "radial-gradient(75% 75% at 50% 55%, black 15%, transparent 100%)",
  WebkitMaskImage: "radial-gradient(75% 75% at 50% 55%, black 15%, transparent 100%)",
};

/** Final conversion section. */
export function FinalCta() {
  return (
    <section
      id="get-started"
      className="relative overflow-hidden py-28 md:py-40"
    >
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 opacity-60"
        style={GRID_MASK}
      />
      <div
        aria-hidden="true"
        className="glow-lime pointer-events-none absolute inset-x-0 bottom-0 h-[560px] rotate-180"
      />

      {/* Centre-circle watermark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10 sm:block"
      >
        <span className="absolute left-1/2 top-0 h-full w-px bg-primary/10" />
        <span className="absolute left-1/2 top-1/2 size-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />
        <span className="absolute left-1/2 top-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/40" />
      </div>

      <Container className="relative flex flex-col items-center text-center">
        <Reveal y={16}>
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-primary">
            Ready to cut your match analysis time in half?
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-7 max-w-3xl text-[2.2rem] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl lg:text-[4rem]">
            Stop Waiting on Video Uploads.
            <br />
            <span className="text-primary">Start Analyzing Now.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
            Join the modern coaches and analysts delivering elite tactical debriefs without the enterprise wait times, hardware lag, or thousands in subscription costs.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center w-full sm:w-auto">
            <Button
              asChild
              size="lg"
              className="group h-12 w-full sm:w-auto justify-center gap-2 px-8 text-[15px] font-semibold shadow-[0_0_34px_-8px_rgba(201,247,60,0.75)] hover:shadow-[0_0_40px_-6px_rgba(201,247,60,0.85)] cursor-pointer"
            >
              <Link href="/studio">
                <Play className="size-4 fill-primary-foreground" />
                <span>Launch Studio Free — Instant Access</span>
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 w-full sm:w-auto justify-center border-white/15 bg-transparent px-7 text-[15px] font-medium text-foreground hover:border-primary/40 hover:bg-primary/5 cursor-pointer"
            >
              <Link href="/pricing">View All-in Plan (€10/mo)</Link>
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            No credit card · Instant in-browser execution · 100% private local processing
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
