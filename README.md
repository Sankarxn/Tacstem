# Tacstem

Tacstem is a football tactical analysis website concept with an interactive browser-based workspace for organizing player tags, recording match events, and demonstrating tactical telestration workflows. The repository contains the Next.js website, product workspace UI, supporting content pages, and SEO metadata.

> **Project status:** The repository includes an interactive UI prototype and a public-facing product/marketing site. Not every control shown in the workspace is connected to a complete production workflow; see the notes below before treating it as a fully functional match-video editor.

## Features

- **Interactive tactical workspace** at `/studio` with a 16:9 pitch view, selectable home/away squads, custom player entries, and draggable player tags.
- **Event-tagging interface** with predefined football events, keyboard shortcuts, event counts, notes, and a CSV export flow in the tagging pad.
- **CSV export** from the main workspace for the current player tags and logged events.
- **Telestration showcase** on the landing page with an interactive demonstration of visual analysis tools.
- **Product and information pages** for features, pricing, comparisons, football tactical analysis, and opposition analysis.
- **SEO foundations** including route metadata, canonical URLs, Open Graph metadata, JSON-LD structured data, a generated sitemap, and crawler rules.
- **Sample football taxonomy** in `public/tacstem-sample-taxonomy.json` for a four-phase game-model tagging structure.

## Tech stack

Verified from the repository manifests and source files:

- **Next.js** 15 (App Router)
- **React** 19
- **TypeScript**
- **Tailwind CSS** 4 with Tailwind PostCSS integration
- **Lucide React** for icons
- **Motion** for animation
- **ESLint** for linting
- **Google GenAI SDK** is listed as a dependency; the reviewed workspace source does not establish that Gemini-powered functionality is wired into the current UI.

## Getting started

### Prerequisites

- Node.js (use a current LTS release)
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Sankarxn/Tacstem.git
   cd Tacstem
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a local environment file:

   **Windows (PowerShell):**
   ```powershell
   Copy-Item .env.example .env.local
   ```

   **macOS / Linux:**
   ```bash
   cp .env.example .env.local
   ```

4. Review the environment variables in `.env.local`:

   ```dotenv
   APP_URL=http://localhost:3000
   GEMINI_API_KEY=
   ```

   `APP_URL` is used as the site's metadata base URL and for generated crawler URLs. Set it to your local URL during development. `GEMINI_API_KEY` is present in the example environment file and is only required if you enable code paths that call the Google GenAI service; do not commit secrets.

5. Start the development server:

   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000).

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Next.js development server on port 3000. |
| `npm run build` | Creates a production build. |
| `npm run start` | Serves the built Next.js application. Run after `npm run build`. |
| `npm run lint` | Runs ESLint across the project. |
| `npm run clean` | Runs the configured Next.js clean command. |

## Usage guide

1. Start the app locally and open the home page to explore the product overview and telestration demo.
2. Open **[/studio](http://localhost:3000/studio)** to inspect the workspace UI.
3. In the workspace, select a home or away player and click the pitch image to place a player tag. Add players, change the tag style, move tags, or remove them using the available controls.
4. Use the event and tagging demonstrations to explore the event-coding interface. Some controls are illustrative; the workspace currently uses a static pitch image and simulated playback/timeline state rather than loading a local match video.
5. Use the CSV export control to download the player tags and logged event data represented in the current workspace state.
6. Browse `/features`, `/comparison`, `/pricing`, `/football-tactical-analysis`, and `/opposition-analysis` for product and topic pages.

## Project structure

```text
.
├── app/
│   ├── page.tsx                    # Home / product landing page
│   ├── studio/                     # Interactive workspace route
│   ├── features/                   # Feature overview page
│   ├── comparison/                 # Product comparison page
│   ├── pricing/                    # Pricing page
│   ├── football-tactical-analysis/  # Tactical analysis guide
│   ├── opposition-analysis/         # Opposition scouting guide
│   ├── robots.ts                   # Crawler rules
│   └── sitemap.ts                  # Sitemap generation
├── components/
│   ├── landing/                     # Landing page and workspace components
│   ├── seo/                         # JSON-LD and topic content components
│   └── ui/                          # Reusable interface components
├── hooks/                           # Shared React hooks
├── lib/                             # Utilities and FAQ content
├── public/
│   └── tacstem-sample-taxonomy.json # Example football tagging taxonomy
├── .env.example
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Current implementation notes

- The main `/studio` workspace shows a static football image. Its timeline and playback controls are simulated UI state, not a media player connected to user-supplied match footage.
- The workspace CSV export represents the current in-memory player tags and event list. The repository should not be described as providing persistent match projects or full MP4 rendering based on this workspace alone.
- Some import/undo/redo and similar controls display placeholder notifications rather than performing the named operation.
- The event tagging pad and telestration showcase are separate interactive components. Verify each flow independently before presenting it as part of a single end-to-end editing pipeline.
- The project has an environment variable for a Gemini API key and includes `@google/genai` in `package.json`, but dependency presence alone does not verify a user-facing AI analysis feature.

## Contributing

Issues and pull requests are welcome. For meaningful changes, describe the use case, the implementation, and any manual testing performed.

## License and Ownership

Copyright © 2026 Vishnu Perikamana. All rights reserved.

This project and its contents are owned by **Vishnu Perikamana**. No permission is granted to copy, modify, distribute, publish, or reuse this repository or its contents without prior written permission from the owner. This notice does not grant an open-source license.

For licensing, permission, or project inquiries, contact the owner on LinkedIn:

- [Vishnu Perikamana on LinkedIn](https://www.linkedin.com/in/vishnu-perikamana/)


