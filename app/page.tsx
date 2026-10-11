import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { AeoAnswerBox } from "@/components/landing/AeoAnswerBox";
import { Problem } from "@/components/landing/Problem";
import { TelestrationSection } from "@/components/landing/TelestrationSection";
import { Workflow } from "@/components/landing/Workflow";
import { Audience } from "@/components/landing/Audience";
import { AeoFaq } from "@/components/landing/AeoFaq";
import { FinalCta } from "@/components/landing/FinalCta";
import { Footer } from "@/components/landing/Footer";

/**
 * Tacstem Analysis Pro Landing Page
 * Optimized 8-Section High-Conversion Architecture:
 * 1. Hero + Live Studio Workspace Preview
 * 2. AEO Semantic Engine Capsule
 * 3. The Matchday Reality & Pain Contrast (Legacy vs Tacstem)
 * 4. The Broadcast Telestration Showcase (Interactive + Mid-Page CTA)
 * 5. 3-Step Matchday Workflow (Low Friction)
 * 6. Built for Specialists (Role Validation)
 * 7. FAQ & Objection Eliminator
 * 8. Terminal Action CTA
 */
export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <AeoAnswerBox />
        <Problem />
        <TelestrationSection />
        <Workflow />
        <Audience />
        <AeoFaq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
