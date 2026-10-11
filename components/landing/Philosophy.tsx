import {
  Container,
  Eyebrow,
  Reveal,
} from "@/components/landing/primitives";

const GRID_MASK = {
  maskImage: "radial-gradient(70% 70% at 50% 50%, black 20%, transparent 100%)",
  WebkitMaskImage: "radial-gradient(70% 70% at 50% 50%, black 20%, transparent 100%)",
};

/** Section 11 — product philosophy. */
export function Philosophy() {
  return (
    <section
      id="philosophy"
      className="relative overflow-hidden border-y border-white/10 bg-[#070807] py-32 md:py-44 perf-content"
    >
      <div
        aria-hidden="true"
        className="grid-lines pointer-events-none absolute inset-0 opacity-50"
        style={GRID_MASK}
      />
      <div
        aria-hidden="true"
        className="glow-lime-soft pointer-events-none absolute inset-x-0 bottom-0 h-[380px]"
      />

      <Container className="relative text-center">
        <Reveal y={12}>
          <Eyebrow index="09 — PHILOSOPHY" className="justify-center">
            Core Philosophy
          </Eyebrow>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-10 max-w-3xl text-[2.2rem] font-semibold leading-[1.06] tracking-[-0.03em] text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Less software overhead.
            <br />
            <span className="text-primary">More football thinking.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto mt-9 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            Tacstem is deliberately built to strip away unnecessary complexity, bloated licensing, and lagging native installers so analysts can invest their focus into understanding the game, communicating tactical principles, and developing winning teams.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
