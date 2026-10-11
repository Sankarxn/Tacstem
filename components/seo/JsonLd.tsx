import { FAQS } from "@/lib/faq-data";

interface JsonLdProps {
  breadcrumbs?: Array<{ name: string; item: string }>;
  article?: {
    headline: string;
    description: string;
    datePublished: string;
    dateModified?: string;
    authorName?: string;
  };
  howTo?: {
    name: string;
    description: string;
    steps: Array<{ name: string; text: string; url?: string }>;
  };
}

export function JsonLd({ breadcrumbs, article, howTo }: JsonLdProps = {}) {
  const baseUrl = process.env.APP_URL || "https://tacstem.com";

  // 1. Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tacstem",
    legalName: "Tacstem Football Technologies",
    url: baseUrl,
    logo: `${baseUrl}/logo.svg`,
    sameAs: [
      "https://twitter.com/tacstem",
      "https://github.com/tacstem",
    ],
    description:
      "Football tactical analysis, video event coding, and broadcast telestration software for coaches, analysts and scouts.",
  };

  // 2. WebSite Schema
  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Tacstem",
    url: baseUrl,
    description:
      "Football tactical analysis software for coaches, analysts and scouts.",
  };

  // 3. SoftwareApplication / WebApplication Schema with aggregateRating & Offers
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": ["SoftwareApplication", "WebApplication"],
    name: "Tacstem",
    alternateName: "Tacstem Analysis Pro",
    url: baseUrl,
    description:
      "Football tactical analysis and video analysis software for coaches, analysts and scouts. Tag matches, telestrate video with broadcast graphics, build 2D pitch animations, analyse events across matches and export your work.",
    applicationCategory: "SportsApplication",
    operatingSystem: "Web (Chrome, Safari, Edge, Firefox, iOS, Android)",
    browserRequirements: "Requires HTML5 compatible web browser with WebCodecs/Canvas support",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      worstRating: "1",
      ratingCount: "148",
      reviewCount: "148",
    },
    offers: {
      "@type": "Offer",
      price: "10",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2027-12-31",
      category: "Monthly Subscription",
      description: "Flat €10/month with zero tier limits, all 9 telestration tools, and unlimited exports.",
    },
    featureList: [
      "In-browser match video scrubbing with zero remote upload lag",
      "Keyboard hotkey match coding and custom tactical taxonomies",
      "9 broadcast-grade telestration tools: directional vectors, 3D aerial pass arcs, player rings & distance lines, spotlights, optical zoom lens, player ID name tags, compactness polygons, 60° vision scanning cones, and proximity pressure radar",
      "Integrated 2D pitch tactical board animations interleaved with match video",
      "Live match tagging without video for stadium and dugout sideline use",
      "Multi-match event dataset combining and pattern querying",
      "Instant CSV event export and burnt-in annotated MP4 video export",
      "AI JSON coding pad schema import compatible with ChatGPT and Gemini",
    ],
  };

  // 4. VideoObject Schema with Google Key Moments (Clips)
  const videoObjectSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Tacstem Interactive Broadcast Telestration & Tactical Graphics Suite",
    description:
      "Interactive demonstration of 9 professional football video telestration tools in Tacstem: dynamic directional runner vectors, 3D aerial pass arcs, player spotlight rings & distance vectors, player focus halos, optical magnification lens, jersey ID cards, defensive compactness polygons, situational scanning cones, and pressure radar.",
    thumbnailUrl: `${baseUrl}/opengraph-image`,
    uploadDate: "2026-02-01T00:00:00Z",
    duration: "PT23S",
    contentUrl:
      "https://ik.imagekit.io/oi36ng8jx/Tacstem%20Landing%20Page%20FIles/paraguay-vs-france-1791308216267.webm",
    embedUrl: `${baseUrl}/#telestration`,
    publisher: organizationSchema,
    hasPart: [
      {
        "@type": "Clip",
        name: "Arrow Tools & Directional Vectors",
        startOffset: 0,
        endOffset: 2,
        url: `${baseUrl}/#arrow-tools`,
      },
      {
        "@type": "Clip",
        name: "3D Aerial Pass Trajectory & Arc",
        startOffset: 2,
        endOffset: 4,
        url: `${baseUrl}/#3d-aerial-pass`,
      },
      {
        "@type": "Clip",
        name: "Player Rings & Tactical Distance Line",
        startOffset: 4,
        endOffset: 7,
        url: `${baseUrl}/#rings-tactical-line`,
      },
      {
        "@type": "Clip",
        name: "Player Spotlight & Pitch Dimming",
        startOffset: 7,
        endOffset: 10,
        url: `${baseUrl}/#spotlight`,
      },
      {
        "@type": "Clip",
        name: "Tactical Optical Magnification Lens",
        startOffset: 10,
        endOffset: 13,
        url: `${baseUrl}/#lens-tool`,
      },
      {
        "@type": "Clip",
        name: "Player Name Tag & Jersey Card Identification",
        startOffset: 13,
        endOffset: 16,
        url: `${baseUrl}/#name-tag`,
      },
      {
        "@type": "Clip",
        name: "Defensive Unit Shape & Compactness Polygon",
        startOffset: 16,
        endOffset: 18,
        url: `${baseUrl}/#polygon`,
      },
      {
        "@type": "Clip",
        name: "Head-Check Scanning Tool & 60° Vision Cone",
        startOffset: 18,
        endOffset: 20,
        url: `${baseUrl}/#scanning-tool`,
      },
      {
        "@type": "Clip",
        name: "360° Defensive Pressure & Proximity Radar",
        startOffset: 21,
        endOffset: 23,
        url: `${baseUrl}/#radar`,
      },
    ],
  };

  // 5. FAQPage Schema (All natural-language Q&As)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  // 6. Default HowTo Schema for Football Video Analysis Workflow
  const defaultHowToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Conduct Football Video Analysis & Match Tagging in Tacstem",
    description:
      "A 5-step masterclass on loading match video with zero upload delay, coding tactical events with keyboard hotkeys, telestrating broadcast vectors, and exporting clips.",
    totalTime: "PT15M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "EUR",
      value: "10",
    },
    supply: [
      { "@type": "HowToSupply", name: "Match MP4 or WebM video file" },
      { "@type": "HowToSupply", name: "Tactical Game Model Taxonomy" },
    ],
    tool: [
      { "@type": "HowToTool", name: "Tacstem Analysis Pro Studio" },
      { "@type": "HowToTool", name: "Modern Web Browser (Chrome, Safari, Edge, Firefox)" },
    ],
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Load Local Match Video",
        text: "Drag and drop your match MP4 or WebM file directly into the Tacstem browser window. The file decodes in-memory within 3 seconds with zero cloud bandwidth.",
        url: `${baseUrl}/studio#step-load`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Code Match Events with Keyboard Hotkeys",
        text: "Play the footage and press keys (1-9, Q, W, E, R) to instantly log phases of play: 1st line buildup, half-space progression, Zone 14 entry, high press triggers, or counter-press rest defense.",
        url: `${baseUrl}/studio#step-code`,
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Apply Broadcast Telestrations on Keyframes",
        text: "Freeze any tactical moment to draw directional runner vectors, 3D aerial passing arcs, player spotlight halos, defensive compactness polygons, and 60° vision scanning cones.",
        url: `${baseUrl}/studio#step-telestrate`,
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Diagram Solutions with 2D Pitch Tactical Board",
        text: "Switch to the integrated 2D pitch board to animate player positioning adjustments and demonstrate the ideal tactical solution to players.",
        url: `${baseUrl}/studio#step-board`,
      },
      {
        "@type": "HowToStep",
        position: 5,
        name: "Export Annotated Video & CSV Event Data",
        text: "Export high-definition MP4 clips with burnt-in telestrations for team debriefs, and download standard CSV event logs for pandas, Tableau, or Wyscout merges.",
        url: `${baseUrl}/studio#step-export`,
      },
    ],
  };

  const customHowToSchema = howTo
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: howTo.name,
        description: howTo.description,
        step: howTo.steps.map((s, idx) => ({
          "@type": "HowToStep",
          position: idx + 1,
          name: s.name,
          text: s.text,
          ...(s.url ? { url: s.url.startsWith("http") ? s.url : `${baseUrl}${s.url}` } : {}),
        })),
      }
    : null;

  // 7. Optional BreadcrumbList Schema
  const breadcrumbSchema =
    breadcrumbs && breadcrumbs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((crumb, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: crumb.name,
            item: crumb.item.startsWith("http") ? crumb.item : `${baseUrl}${crumb.item}`,
          })),
        }
      : null;

  // 8. Optional Article Schema
  const articleSchema = article
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: article.headline,
        description: article.description,
        datePublished: article.datePublished,
        dateModified: article.dateModified || article.datePublished,
        author: {
          "@type": "Organization",
          name: article.authorName || "Tacstem Tactical Research",
        },
        publisher: organizationSchema,
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoObjectSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(customHowToSchema || defaultHowToSchema),
        }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
    </>
  );
}

