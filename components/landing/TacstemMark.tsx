import * as React from "react";

/** Tacstem mark: pitch outline, halfway line + centre circle, tactical trajectory pass. */
export function TacstemMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className || "size-6"}
    >
      <rect
        x="2.75"
        y="4.25"
        width="18.5"
        height="15.5"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.6"
        opacity="0.55"
      />
      <path
        d="M12 4.25v15.5"
        stroke="currentColor"
        strokeWidth="1.6"
        opacity="0.35"
      />
      <circle
        cx="12"
        cy="12"
        r="3.4"
        stroke="currentColor"
        strokeWidth="1.6"
        opacity="0.35"
      />
      <path
        d="M6.4 16.2 10.6 11l3.1 1.7 3.9-4.4"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.4 7.4h2.8v2.8"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
