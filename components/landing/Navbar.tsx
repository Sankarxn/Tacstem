"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TacstemMark } from "@/components/landing/TacstemMark";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Comparison", href: "/comparison" },
];

/** Sticky navigation with active status, responsive drawer, and Studio launch CTA */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b bg-[#0a0b0a]/90 backdrop-blur-xl transition-colors duration-300",
        scrolled || open ? "border-white/10" : "border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-foreground"
          aria-label="Tacstem Analysis Pro home"
        >
          <span className="grid size-9 place-items-center rounded-lg border border-primary/40 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
            <TacstemMark className="size-5 text-primary" />
          </span>
          <div className="flex flex-col">
            <span className="font-mono text-[14px] font-bold tracking-[0.22em] text-foreground">
              TACSTEM
            </span>
            <span className="font-mono text-[8px] uppercase tracking-[0.24em] text-primary">
              Analysis Pro
            </span>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="rounded-md px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-foreground"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden items-center gap-3 md:flex">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="h-9 gap-1.5 border-white/15 px-3.5 font-mono text-xs text-foreground hover:border-primary/50 hover:bg-primary/5"
          >
            <Link href="/studio">
              <Play className="size-3 text-primary" />
              Live Studio
            </Link>
          </Button>

          <Button
            asChild
            size="sm"
            className="group h-9 gap-1.5 px-4 font-mono text-xs uppercase tracking-wider shadow-[0_0_24px_-6px_rgba(201,247,60,0.7)] hover:shadow-[0_0_30px_-4px_rgba(201,247,60,0.9)]"
          >
            <Link href="/pricing">
              <span>Get Started</span>
              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid size-11 place-items-center rounded-md border border-white/10 text-muted-foreground transition-colors hover:text-foreground md:hidden cursor-pointer"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="border-b border-white/10 bg-[#0a0b0a] px-5 py-6 md:hidden">
          <div className="flex flex-col gap-2">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:bg-white/5 hover:text-foreground"
            >
              Overview
            </Link>
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground hover:bg-white/5 hover:text-foreground"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="mt-5 flex flex-col gap-2.5 pt-4 border-t border-white/10">
            <Button asChild variant="outline" className="w-full justify-center">
              <Link href="/studio" onClick={() => setOpen(false)}>
                Launch Interactive Studio
              </Link>
            </Button>
            <Button asChild className="w-full justify-center">
              <Link href="/pricing" onClick={() => setOpen(false)}>
                Start Analyzing (€10/mo)
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
