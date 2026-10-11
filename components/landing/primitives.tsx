"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Shared page gutter so every section lines up on the same grid. */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}

/** Restrained scroll reveal — fades up smoothly. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

/** Mono section marker, e.g. "02 — FEATURES". */
export function Eyebrow({
  index,
  children,
  className,
}: {
  index: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.28em]",
        className
      )}
    >
      <span className="text-primary/80 font-semibold">{index}</span>
      <span className="h-px w-10 bg-primary/40" aria-hidden="true" />
      <span className="text-muted-foreground">{children}</span>
    </div>
  );
}

/** Consistent section headline scale. */
export const sectionTitleCls =
  "mt-6 text-3xl font-semibold leading-[1.08] tracking-[-0.025em] text-foreground sm:text-4xl md:text-5xl";

/** Consistent supporting copy scale. */
export const sectionLeadCls =
  "mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg";
