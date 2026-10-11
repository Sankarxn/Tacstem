import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactive Tactical Analysis Studio & Tagging Workspace",
  description:
    "Live football video analysis studio. Load match video in-memory with zero cloud delay, code tactical events with keyboard hotkeys, and draw broadcast telestrations.",
  alternates: {
    canonical: "/studio",
  },
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
