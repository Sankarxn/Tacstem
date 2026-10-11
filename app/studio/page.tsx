"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ProductWorkspace } from "@/components/landing/ProductWorkspace";

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-[#07080b] text-foreground p-2 sm:p-4 md:p-6 flex flex-col">
      <div className="max-w-[1560px] w-full mx-auto flex-1 flex flex-col">
        <div className="mb-3 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-1.5 font-mono text-xs text-gray-400 hover:text-[#c6ff1f] transition-colors"
          >
            <ArrowLeft className="size-4" />
            <span>Back to Home</span>
          </Link>
          <span className="font-mono text-[11px] uppercase tracking-wider text-gray-400">
            TacStem Interactive Analysis Workspace
          </span>
        </div>

        <div className="flex-1">
          <ProductWorkspace />
        </div>
      </div>
    </main>
  );
}
