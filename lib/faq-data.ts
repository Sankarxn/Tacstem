export interface FaqItem {
  question: string;
  answer: string;
  category?: "platform" | "tagging" | "telestration" | "tactics" | "export";
}

export const FAQS: FaqItem[] = [
  {
    category: "platform",
    question: "What is Tacstem?",
    answer:
      "Tacstem is a browser-native football tactical analysis and video coding platform for coaches, analysts, and scouts. It allows users to tag match events, draw broadcast telestrations, create 2D tactical board animations, and export clips and CSV data without cloud upload delays or expensive hardware.",
  },
  {
    category: "platform",
    question: "Who is Tacstem for?",
    answer:
      "Tacstem is built for football coaches, performance analysts, opposition scouts, academy directors, tactical educators, and independent football writers who need professional match tagging and telestration without multi-thousand-euro enterprise contracts.",
  },
  {
    category: "tactics",
    question: "What is football tactical analysis software?",
    answer:
      "Football tactical analysis software is a digital tool that allows analysts and coaches to import match video, record timestamps for tactical events (such as build-up, pressing triggers, shots, and transitions), visualize tactical geometry with telestration, and analyze team and player performance metrics.",
  },
  {
    category: "platform",
    question: "Can football coaches use Tacstem?",
    answer:
      "Yes. Football coaches use Tacstem to prepare team tactical briefings, review match video with players, isolate set-piece tendencies, and communicate spatial adjustments using visual telestration and pitch board animations.",
  },
  {
    category: "platform",
    question: "Can football analysts use Tacstem?",
    answer:
      "Yes. Professional and aspiring football analysts use Tacstem as their primary workstation for post-match coding, event timestamping, data export to Excel or Python, and producing video clips with broadcast-style graphics.",
  },
  {
    category: "tactics",
    question: "Can Tacstem be used for opposition analysis?",
    answer:
      "Yes. Analysts use Tacstem to study opponent structures, press breaking patterns, defensive vulnerabilities, set-piece routines, and individual player tendencies across upcoming opponents.",
  },
  {
    category: "tagging",
    question: "Can I tag a football match live?",
    answer:
      "Yes. Tacstem supports live match tagging in real-time from the stadium stands, technical area, or broadcast feed using keyboard hotkeys or on-screen touch buttons.",
  },
  {
    category: "tagging",
    question: "Can I analyse a match without having the video yet?",
    answer:
      "Yes. With Tacstem's Live Tagging mode, you can log match phases, pressing moments, substitutions, and set pieces in real time without video loaded. When match video is acquired later, you can import it and synchronize your tagged timestamps with the footage in one click.",
  },
  {
    category: "tagging",
    question: "Can I create my own football coding system?",
    answer:
      "Yes. Tacstem provides a fully customizable taxonomy editor where you can define custom categories, descriptors, tags, button colors, and keyboard hotkeys tailored to your team's tactical game model.",
  },
  {
    category: "tagging",
    question: "Can I generate a Tacstem coding pad with ChatGPT or Gemini?",
    answer:
      "Yes. Tacstem supports AI JSON taxonomy import. You can prompt ChatGPT or Google Gemini to produce a tactical taxonomy JSON schema for your specific coaching philosophy and paste it directly into Tacstem to generate a configured coding pad instantly.",
  },
  {
    category: "telestration",
    question: "Can I telestrate football video?",
    answer:
      "Yes. Tacstem includes built-in broadcast-style telestration tools, including directional passing arrows, 3D aerial flight curves, player spotlight halos, defensive compactness polygons, optical magnification lenses, and radar graphics directly over match footage.",
  },
  {
    category: "telestration",
    question: "What broadcast telestration tools are included in Tacstem?",
    answer:
      "Tacstem includes 9 broadcast-grade telestration tools: 1) Dynamic directional arrows & curved runner vectors, 2) 3D aerial pass trajectory arcs with apex height & landing markers, 3) Quad/dual player rings with live inter-player distance lines, 4) Isolated player spotlight halos with pitch dimming, 5) Optical magnification lens for micro-space footwork, 6) Smart player identification name tags & jersey badges, 7) Shaded unit compactness polygons, 8) 60° situational vision scanning cones, and 9) 360° defensive proximity & pressure radar.",
  },
  {
    category: "telestration",
    question: "Can I create 3D aerial passing trajectories and player spotlights?",
    answer:
      "Yes. Unlike legacy suites that charge $1,500+ for separate studio plugins (like Hudl Studio or Piero), Tacstem natively renders 3D parabolic aerial ball arcs, landing drop markers, and player spotlight illumination halos directly in the browser at no additional cost.",
  },
  {
    category: "telestration",
    question: "Can I control when telestration appears?",
    answer:
      "Yes. Tacstem allows frame-by-frame timeline control, so you can set exact start timestamps, duration, and fade times for every individual visual annotation on your video clips.",
  },
  {
    category: "tactics",
    question: "Can I create tactical-board animations?",
    answer:
      "Yes. Tacstem features an integrated 2D tactical pitch board where you can place player tokens, draw passing and running lines, animate phases of play, and interleave tactical animations directly with match video clips.",
  },
  {
    category: "tagging",
    question: "Can I combine tagged events from multiple matches?",
    answer:
      "Yes. You can import and merge event datasets across multiple matches to analyze recurring patterns, multi-game player trends, and cumulative tactical statistics.",
  },
  {
    category: "export",
    question: "Can I export football tagging data as CSV?",
    answer:
      "Yes. Tacstem exports standard CSV data containing all event tags, timestamps, durations, categories, and coordinate metadata for analysis in Microsoft Excel, Google Sheets, Tableau, Power BI, or Python/R.",
  },
  {
    category: "export",
    question: "Can I export telestrated football video?",
    answer:
      "Yes. Tacstem renders and exports annotated video clips as standard MP4 files with burnt-in broadcast drawings and title cards, ready for coaching presentations and player sharing.",
  },
  {
    category: "platform",
    question: "Is Tacstem browser-based?",
    answer:
      "Yes. Tacstem runs entirely in modern web browsers (Chrome, Safari, Edge, Firefox). It processes video locally on your device with client-side decoding, meaning video files are scrubbed in real-time without uploading gigabytes of footage to remote cloud servers.",
  },
  {
    category: "platform",
    question: "How is Tacstem different from traditional football analysis software?",
    answer:
      "Traditional software like Hudl Sportscode or Nacsport requires expensive annual subscriptions ($1,000–$3,500+), platform lock-in (macOS-only or Windows-only), and heavy desktop installs. Tacstem is cross-platform, costs a flat €10/month, eliminates cloud upload wait times by decoding video locally, and includes video tagging, broadcast telestration, and a 2D tactical board in one integrated tool.",
  },
];

