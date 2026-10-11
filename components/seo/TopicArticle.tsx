import React from "react";
import Link from "next/link";
import { ArrowLeft, BookOpen, Check, Play, Sparkles } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";

export interface TopicSection {
  title: string;
  lead?: string;
  content: React.ReactNode;
}

export interface TopicArticleProps {
  slug: string;
  title: string;
  subtitle: string;
  badge?: string;
  readingTime?: string;
  lastUpdated?: string;
  directAnswerSummary: {
    label: string;
    text: string;
    highlights?: string[];
  };
  sections: TopicSection[];
  relatedTopics?: Array<{ title: string; href: string; desc: string }>;
}

/**
 * Reusable SEO & AEO Authority Topic Article Architecture
 * Formatted with strict semantic HTML (<article>, <header>, <section>, <dl>, <aside>),
 * structured metadata schemas, and AI Overviews direct answers.
 */
export function TopicArticle({
  slug,
  title,
  subtitle,
  badge = "Tactical Knowledge Base · AEO Curriculum",
  readingTime = "6 mins",
  lastUpdated = "2026 Season",
  directAnswerSummary,
  sections,
  relatedTopics = [],
}: TopicArticleProps) {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Analysis Topics", item: "/football-tactical-analysis" },
    { name: title, item: `/${slug}` },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLd
        breadcrumbs={breadcrumbs}
        article={{
          headline: title,
          description: subtitle,
          datePublished: "2026-01-15",
          dateModified: "2026-10-06",
          authorName: "Tacstem Tactical Research Group",
        }}
      />
      <Navbar />

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Breadcrumb nav */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href="/football-tactical-analysis"
                className="hover:text-primary transition-colors"
              >
                Analysis Topics
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground font-semibold truncate max-w-[200px] sm:max-w-none">
              {title}
            </li>
          </ol>
        </nav>

        {/* Semantic Article Header */}
        <header className="border-b border-white/10 pb-8">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
            <BookOpen className="size-4" />
            <span>{badge}</span>
          </div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl leading-tight">
            {title}
          </h1>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3 font-mono text-xs text-muted-foreground">
            <span>Reading Time: {readingTime}</span>
            <span>·</span>
            <span>Updated: {lastUpdated}</span>
            <span>·</span>
            <span className="text-primary font-semibold">Semantic AEO Format</span>
          </div>
        </header>

        {/* Structured Direct Answer Box for AI Citation */}
        <article className="mt-10 rounded-xl border border-primary/40 bg-[#0d100d] p-6 sm:p-8 shadow-[0_0_24px_-12px_rgba(201,247,60,0.2)]">
          <div className="flex items-center gap-2 font-mono text-xs uppercase text-primary">
            <Sparkles className="size-4" />
            <span>{directAnswerSummary.label}</span>
          </div>
          <p className="mt-3 text-base text-foreground leading-relaxed sm:text-lg">
            {directAnswerSummary.text}
          </p>
          {directAnswerSummary.highlights && (
            <ul className="mt-4 space-y-2 border-t border-white/10 pt-4 text-sm text-foreground/90">
              {directAnswerSummary.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="size-4 text-primary mt-1 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </article>

        {/* Core Content Sections */}
        <article className="mt-12 space-y-12 leading-relaxed">
          {sections.map((sec, idx) => (
            <section
              key={idx}
              className="space-y-4 border-t border-white/10 pt-10 first:border-t-0 first:pt-0"
            >
              <h2 className="text-2xl font-bold text-foreground">
                {idx + 1}. {sec.title}
              </h2>
              {sec.lead && (
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {sec.lead}
                </p>
              )}
              <div className="text-foreground/90">{sec.content}</div>
            </section>
          ))}
        </article>

        {/* Related Topics / Pillar Architecture */}
        {relatedTopics.length > 0 && (
          <aside className="mt-16 border-t border-white/10 pt-10">
            <h3 className="font-mono text-xs uppercase tracking-widest text-primary">
              Explore Football Tactical Knowledge Cluster
            </h3>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {relatedTopics.map((rel, i) => (
                <Link
                  key={i}
                  href={rel.href}
                  className="rounded-xl border border-white/10 bg-[#0b0c0b] p-4 transition-all hover:border-primary/40 hover:bg-white/[0.02]"
                >
                  <h4 className="font-semibold text-foreground text-sm flex items-center justify-between">
                    {rel.title}
                    <span className="text-primary font-mono text-xs">→</span>
                  </h4>
                  <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                    {rel.desc}
                  </p>
                </Link>
              ))}
            </div>
          </aside>
        )}

        {/* Action Callout */}
        <div className="mt-16 rounded-xl border border-primary/40 bg-primary/10 p-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-foreground">
            Execute This Analysis in Tacstem Studio
          </h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto">
            Load local match video with zero upload wait, tag moments with hotkeys, and draw broadcast telestrations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/studio">
                <Play className="size-4 mr-2" />
                Launch Interactive Studio
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">View Plans (€10/mo)</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
