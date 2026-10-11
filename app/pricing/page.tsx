import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  HelpCircle,
  Play,
  ShieldCheck,
  Zap,
  Sparkles,
  CreditCard,
  XCircle,
  RotateCcw,
  Check,
} from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container, Eyebrow, sectionTitleCls } from "@/components/landing/primitives";

export const metadata: Metadata = {
  title: "Simple, Transparent Football Analysis Pricing | $10/mo | Tacstem",
  description:
    "Simple, transparent football tactical video analysis pricing. Flat $10/month for all coaches and analysts. No contracts, zero tier paywalls, no watermark limits. All features unlocked.",
  keywords: [
    "football video analysis pricing",
    "soccer tactical software cost",
    "affordable hudl sportscode alternative",
    "nacsport pricing alternative",
    "tactical analysis software subscription",
    "cheap football telestration software",
  ],
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Simple, Transparent Football Analysis Pricing | $10/mo | Tacstem",
    description:
      "All features unlocked for $10/month. Local GPU video decoding, 9 broadcast telestration tools, custom event tagging hotkeys, and unlimited exports. Cancel anytime.",
    url: "https://tacstem.com/pricing",
    type: "website",
  },
};

const INCLUDED_FEATURES = [
  "Local GPU Video Decoding (60 FPS, 1080p & 4K)",
  "All 9 Broadcast Telestration Tools (3D arcs, spotlights, zones)",
  "Custom Event Tagging & Single-Key Hotkey Matrix",
  "2D Pitch Tactical Board & Player Movement Animations",
  "Live Sideline Tagging Mode (Without video loaded)",
  "1-Click High-Definition MP4 Video Exports (No watermarks)",
  "Standardized CSV Match Event Data Exports",
  "100% Client-Side Video Privacy (Zero cloud upload wait)",
];

const VALUE_COMPARISON = [
  {
    dimension: "Annual Software Cost",
    legacy: "$2,500 – $5,000 / year",
    tacstem: "$10 / month (Cancel anytime)",
  },
  {
    dimension: "Contract & Commitment",
    legacy: "Mandatory 1-3 year contracts & sales calls",
    tacstem: "Zero lock-in. Subscribe & cancel in 1 click",
  },
  {
    dimension: "Telestration Access",
    legacy: "Paid add-ons ($1,500/yr Piero or Hudl Studio)",
    tacstem: "All 9 broadcast tools included in base plan",
  },
  {
    dimension: "Match Video Ingestion",
    legacy: "2-3 hour remote cloud upload queues",
    tacstem: "Instant 0.5s local in-memory GPU decode",
  },
  {
    dimension: "Data Confidentiality",
    legacy: "Tactical footage stored on remote vendor servers",
    tacstem: "100% private. Files never leave your device",
  },
];

export default function PricingPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Pricing & Plans", item: "/pricing" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <JsonLd
        breadcrumbs={breadcrumbs}
        article={{
          headline: "Tacstem Pricing: Flat $10/mo Football Video Analysis Software",
          description:
            "Transparent pricing for coaches and analysts. All features included for $10/month with zero tier lock-outs, no setup fees, and cancel-anytime flexibility.",
          datePublished: "2026-01-01",
          dateModified: "2026-10-11",
          authorName: "Tacstem Pricing Desk",
        }}
      />
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <header className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-white/10 bg-[#070807]">
          <div
            aria-hidden="true"
            className="grid-lines pointer-events-none absolute inset-0 opacity-40"
          />
          <Container className="relative">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumbs" className="mb-8">
              <ol className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li className="text-foreground font-semibold">Pricing &amp; Plans</li>
              </ol>
            </nav>

            <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
                <span className="size-1.5 rounded-full bg-primary" />
                Transparent Pricing · No Enterprise Sales Calls
              </div>

              <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                One Honest Price.
                <br />
                <span className="text-primary">Every Pro Feature Unlocked.</span>
              </h1>

              <p className="text-base text-muted-foreground sm:text-lg leading-relaxed max-w-2xl">
                No tier paywalls, no mandatory annual sales meetings, and no $1,500 telestration add-ons. Professional football video analysis built for real coaches at a flat $10/month.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2 font-mono text-[11px] text-muted-foreground">
                <span className="flex items-center gap-1.5 text-foreground/90">
                  <span className="size-1.5 rounded-full bg-primary" />
                  Cancel Anytime in 1 Click
                </span>
                <span className="text-white/20">/</span>
                <span className="flex items-center gap-1.5 text-foreground/90">
                  <span className="size-1.5 rounded-full bg-primary" />
                  Zero Setup Fees
                </span>
                <span className="text-white/20">/</span>
                <span className="flex items-center gap-1.5 text-foreground/90">
                  <span className="size-1.5 rounded-full bg-primary" />
                  Instant In-Browser Access
                </span>
              </div>
            </div>
          </Container>
        </header>

        {/* CORE PRICING CARD SECTION */}
        <section className="py-20 md:py-28 relative">
          <div
            aria-hidden="true"
            className="glow-lime-soft pointer-events-none absolute inset-x-0 top-1/4 h-[450px]"
          />
          <Container className="relative max-w-2xl">
            <div className="relative overflow-hidden rounded-3xl border border-primary/40 bg-[#0c0e0c] p-8 sm:p-12 shadow-[0_0_80px_-20px_rgba(201,247,60,0.2)]">
              {/* Top Accent Line */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
              />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 border-b border-white/10 pb-8">
                <div>
                  <span className="font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                    Tacstem Pro Plan
                  </span>
                  <h2 className="mt-1 text-2xl font-bold text-foreground">
                    All-in-One Tactical Access
                  </h2>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Full analysis suite for performance analysts, coaches &amp; scouts.
                  </p>
                </div>

                <div className="text-left sm:text-right shrink-0">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight">$10</span>
                    <span className="font-mono text-xs text-muted-foreground">/ month</span>
                  </div>
                  <p className="mt-1 font-mono text-[10px] text-primary">
                    Billed monthly · Cancel anytime
                  </p>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="mt-8 space-y-4">
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Everything Included in Your Subscription:
                </p>
                <ul className="grid gap-3 sm:grid-cols-1">
                  {INCLUDED_FEATURES.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="grid size-5 shrink-0 place-items-center rounded-full bg-primary/10 border border-primary/30 text-primary mt-0.5">
                        <Check className="size-3" />
                      </div>
                      <span className="text-xs sm:text-sm text-foreground/90 font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Conversion Actions */}
              <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center gap-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:flex-1 h-12 justify-center gap-2 text-sm font-bold shadow-[0_0_30px_-6px_rgba(201,247,60,0.7)] cursor-pointer"
                >
                  <Link href="/studio">
                    <CreditCard className="size-4" />
                    <span>Get Started for $10/mo</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto h-12 justify-center border-white/15 bg-transparent px-6 text-xs font-mono text-foreground hover:border-primary/40 hover:bg-primary/5 cursor-pointer"
                >
                  <Link href="/studio">Test Free in Studio →</Link>
                </Button>
              </div>

              <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                No credit card needed to test the studio preview
              </p>
            </div>
          </Container>
        </section>

        {/* VALUE CONTRAST: WHY $10 VS $3,000 */}
        <section className="py-24 border-t border-white/10 bg-[#080908]">
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <Eyebrow index="VALUE GAP" className="justify-center">The Contrast</Eyebrow>
              <h2 className={`${sectionTitleCls} mt-3`}>
                Why Does Tacstem Cost $10 When Legacy Suites Cost $3,000?
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Legacy software charges thousands to cover enterprise sales teams and massive cloud rendering server bills. Tacstem processes video on your local GPU—passing the cost savings directly to you.
              </p>
            </div>

            <div className="mt-12 overflow-x-auto rounded-2xl border border-white/10 bg-[#0c0e0c]">
              <table className="w-full text-left font-mono text-xs">
                <thead>
                  <tr className="border-b border-white/10 bg-white/[0.02] text-primary uppercase tracking-wider">
                    <th className="p-4 sm:p-5">Feature &amp; Commercial Terms</th>
                    <th className="p-4 sm:p-5 text-primary font-bold">Tacstem ($10/mo)</th>
                    <th className="p-4 sm:p-5 text-muted-foreground">Legacy Enterprise ($3,000+)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-muted-foreground">
                  {VALUE_COMPARISON.map((row) => (
                    <tr key={row.dimension}>
                      <td className="p-4 sm:p-5 font-semibold text-foreground">{row.dimension}</td>
                      <td className="p-4 sm:p-5 text-primary font-semibold">{row.tacstem}</td>
                      <td className="p-4 sm:p-5">{row.legacy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Container>
        </section>

        {/* 3-STEP INSTANT ACTIVATION */}
        <section className="py-24 border-t border-white/10 bg-[#070807]">
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <Eyebrow index="GETTING STARTED" className="justify-center">Zero Friction</Eyebrow>
              <h2 className={`${sectionTitleCls} mt-3`}>
                How Activation Works
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground">
                No sales demos, no vendor onboarding calls, and no waiting for license dongles.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-[#0c0e0c] p-7 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-3xl font-extrabold text-primary">01</span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">Subscribe in 60 Seconds</h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Simple, transparent monthly checkout. Zero mandatory discovery calls or contract negotiations.
                  </p>
                </div>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="font-mono text-[10px] text-primary uppercase">Immediate Access</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0c0e0c] p-7 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-3xl font-extrabold text-primary">02</span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">Launch Directly in Browser</h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Open Tacstem on any modern browser. Drop in your match MP4 and start tagging and drawing in seconds.
                  </p>
                </div>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="font-mono text-[10px] text-primary uppercase">No Heavy Installers</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0c0e0c] p-7 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-3xl font-extrabold text-primary">03</span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">Cancel Anytime in 1 Click</h3>
                  <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    Season ended? Manage your subscription directly from your settings with zero pushy cancellation calls.
                  </p>
                </div>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="font-mono text-[10px] text-primary uppercase">Total Freedom</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 4-CARD PURCHASE REASSURANCE & TRUST GUARANTEES */}
        <section className="py-24 border-t border-white/10 bg-[#080908]">
          <Container>
            <div className="text-center max-w-2xl mx-auto">
              <Eyebrow index="BUYER PROTECTION" className="justify-center">Zero Risk</Eyebrow>
              <h2 className={`${sectionTitleCls} mt-3`}>
                Designed for Complete Peace of Mind
              </h2>
              <p className="mt-4 text-sm sm:text-base text-muted-foreground">
                No surprises, no hidden clauses, and no fine print. Everything is built around coach convenience.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-[#0c0e0c] p-6 flex flex-col justify-between">
                <div>
                  <div className="grid size-10 place-items-center rounded-xl bg-primary/10 border border-primary/30 text-primary">
                    <RotateCcw className="size-5" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-foreground">Cancel Anytime in 1 Click</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    Pause or stop your subscription when your football season ends with zero penalty fees or phone calls.
                  </p>
                </div>
                <div className="mt-6 border-t border-white/10 pt-3">
                  <span className="font-mono text-[10px] text-primary uppercase font-semibold">100% Flexible</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0c0e0c] p-6 flex flex-col justify-between">
                <div>
                  <div className="grid size-10 place-items-center rounded-xl bg-primary/10 border border-primary/30 text-primary">
                    <Sparkles className="size-5" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-foreground">Zero Hidden Plugin Fees</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    All 9 broadcast telestration tools and unlimited MP4/CSV exports are unlocked in your $10/mo plan.
                  </p>
                </div>
                <div className="mt-6 border-t border-white/10 pt-3">
                  <span className="font-mono text-[10px] text-primary uppercase font-semibold">All Features Unlocked</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0c0e0c] p-6 flex flex-col justify-between">
                <div>
                  <div className="grid size-10 place-items-center rounded-xl bg-primary/10 border border-primary/30 text-primary">
                    <Play className="size-5 fill-primary" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-foreground">Test Free Before Paying</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    Launch the interactive Studio workspace immediately with zero credit card required to verify performance.
                  </p>
                </div>
                <div className="mt-6 border-t border-white/10 pt-3">
                  <span className="font-mono text-[10px] text-primary uppercase font-semibold">Instant In-Browser Demo</span>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0c0e0c] p-6 flex flex-col justify-between">
                <div>
                  <div className="grid size-10 place-items-center rounded-xl bg-primary/10 border border-primary/30 text-primary">
                    <ShieldCheck className="size-5" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-foreground">100% Local File Privacy</h3>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    Match videos are processed strictly on your computer&apos;s GPU hardware. Your club footage never touches our servers.
                  </p>
                </div>
                <div className="mt-6 border-t border-white/10 pt-3">
                  <span className="font-mono text-[10px] text-primary uppercase font-semibold">Total Confidentiality</span>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* TERMINAL CONVERSION CTA */}
        <section className="relative overflow-hidden py-24 md:py-32 border-t border-white/10 bg-[#070807] text-center">
          <div
            aria-hidden="true"
            className="glow-lime pointer-events-none absolute inset-x-0 bottom-0 h-[400px] opacity-40"
          />
          <Container className="relative max-w-3xl flex flex-col items-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-primary">
              Stop Overpaying for Video Analysis
            </span>
            <h2 className="mt-5 text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground text-balance">
              Professional Match Analysis.
              <br />
              <span className="text-primary">$10/month. Zero Lock-In.</span>
            </h2>
            <p className="mt-5 text-sm sm:text-base text-muted-foreground max-w-xl">
              Get immediate access to local 60 FPS video decoding, 9 broadcast telestration tools, custom hotkey tagging, and unlimited MP4/CSV exports.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3 w-full sm:w-auto">
              <Button asChild size="lg" className="h-12 w-full sm:w-auto justify-center gap-2 px-8 text-sm font-semibold shadow-[0_0_34px_-8px_rgba(201,247,60,0.75)] cursor-pointer">
                <Link href="/studio">
                  <CreditCard className="size-4" />
                  <span>Start Analyzing for $10/mo</span>
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 w-full sm:w-auto justify-center border-white/15 bg-transparent px-7 text-sm font-medium text-foreground hover:border-primary/40 hover:bg-primary/5 cursor-pointer">
                <Link href="/studio">Test Free in Studio First</Link>
              </Button>
            </div>

            <p className="mt-8 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              Instant activation · Cancel anytime in 1 click · 100% private
            </p>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
