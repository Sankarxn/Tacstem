"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, Layers, Search } from "lucide-react";
import { Container, Eyebrow, Reveal, sectionLeadCls, sectionTitleCls } from "@/components/landing/primitives";
import { cn } from "@/lib/utils";
import { FAQS, FaqItem } from "@/lib/faq-data";

export { FAQS };

const CATEGORIES = [
  { id: "all", label: "All Questions (18)" },
  { id: "platform", label: "Platform & Specs" },
  { id: "tagging", label: "Tagging & AI" },
  { id: "telestration", label: "Telestration" },
  { id: "tactics", label: "Tactics & Board" },
  { id: "export", label: "Data & Video Export" },
] as const;

export function AeoFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredFaqs = useMemo(() => {
    return FAQS.filter((faq) => {
      const matchesCategory =
        activeCategory === "all" || faq.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggle = (i: number) => {
    setOpenIndex((curr) => (curr === i ? null : i));
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 border-t border-white/10 bg-[#080908] perf-content">
      <Container>
        {/* Section Header - Centered & Balanced */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <Reveal>
            <Eyebrow index="07 — KNOWLEDGE BASE">AEO Questions &amp; Answers</Eyebrow>
            <h2 className={`${sectionTitleCls} mt-3`}>
              Frequently Asked Questions
            </h2>
            <p className={`${sectionLeadCls} mt-4`}>
              Direct, factual answers for football coaches, performance analysts, scouts, and AI search engines.
            </p>
          </Reveal>

          {/* Search & Category Filter Toolbar - Centered */}
          <Reveal delay={0.08} className="mt-8 w-full max-w-2xl">
            <div className="flex flex-col gap-4 items-center">
              {/* Quick Search */}
              <div className="relative w-full">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search questions (e.g. video formats, local privacy, telestration, export)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#0c0e0c] pl-10 pr-4 py-3 font-mono text-xs text-foreground placeholder:text-muted-foreground/60 focus:border-primary/50 focus:outline-none transition-colors shadow-inner"
                />
              </div>

              {/* Category Pills */}
              <div className="flex items-center justify-center gap-1.5 flex-wrap">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={cn(
                      "rounded-lg px-3.5 py-1.5 font-mono text-[11px] font-medium uppercase tracking-wider transition-all cursor-pointer",
                      activeCategory === cat.id
                        ? "bg-primary text-black font-semibold shadow-[0_0_15px_-3px_rgba(201,247,60,0.5)]"
                        : "bg-white/[0.03] border border-white/5 text-muted-foreground hover:bg-white/[0.08] hover:text-foreground"
                    )}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* FAQ Accordion - Modern 2-Column Responsive Grid */}
        <div className="mt-14">
          {filteredFaqs.length === 0 ? (
            <div className="max-w-md mx-auto rounded-xl border border-white/10 bg-[#0c0e0c] p-8 text-center text-muted-foreground font-mono text-xs">
              No matching questions found for &ldquo;{searchQuery}&rdquo;. Try another term or reset filters.
            </div>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 items-start">
              {/* Split FAQs evenly into Column 1 and Column 2 for balanced height */}
              {[0, 1].map((colIndex) => {
                const colFaqs = filteredFaqs.filter((_, idx) => idx % 2 === colIndex);
                return (
                  <div key={colIndex} className="flex flex-col gap-4">
                    {colFaqs.map((faq) => {
                      const originalIndex = filteredFaqs.indexOf(faq);
                      const isOpen = openIndex === originalIndex;

                      return (
                        <article
                          key={faq.question}
                          itemScope
                          itemProp="mainEntity"
                          itemType="https://schema.org/Question"
                          className={cn(
                            "rounded-2xl border transition-all duration-200 overflow-hidden",
                            isOpen
                              ? "border-primary/40 bg-[#0e110e] shadow-[0_0_30px_-10px_rgba(201,247,60,0.1)]"
                              : "border-white/10 bg-[#0a0c0a] hover:border-white/20 hover:bg-[#0c0e0c]"
                          )}
                        >
                          <button
                            type="button"
                            onClick={() => toggle(originalIndex)}
                            aria-expanded={isOpen}
                            className="flex w-full items-start justify-between p-5 text-left text-sm sm:text-[15px] font-semibold text-foreground cursor-pointer gap-4 transition-colors"
                          >
                            <span className="flex items-start gap-3">
                              <HelpCircle className={cn(
                                "size-4 shrink-0 mt-0.5 transition-colors",
                                isOpen ? "text-primary" : "text-muted-foreground/60"
                              )} />
                              <span itemProp="name" className="leading-snug">
                                {faq.question}
                              </span>
                            </span>
                            <div className={cn(
                              "grid size-6 shrink-0 place-items-center rounded-md border transition-all duration-200",
                              isOpen
                                ? "border-primary/40 bg-primary/10 text-primary rotate-180"
                                : "border-white/10 bg-white/[0.02] text-muted-foreground"
                            )}>
                              <ChevronDown className="size-3.5" />
                            </div>
                          </button>

                          {isOpen && (
                            <div
                              itemScope
                              itemProp="acceptedAnswer"
                              itemType="https://schema.org/Answer"
                              className="px-5 pb-5 pt-1 text-xs sm:text-sm leading-relaxed text-muted-foreground border-t border-white/5"
                            >
                              <p itemProp="text" className="pl-7">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </article>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Bottom Help Desk Prompt */}
        <Reveal delay={0.2} className="mt-14 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-2 font-mono text-xs text-muted-foreground">
            <span>Have a technical question not answered here?</span>
            <Link
              href="/features"
              className="font-semibold text-primary hover:underline inline-flex items-center gap-1"
            >
              Explore Full Platform Features →
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
