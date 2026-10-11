import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TACSTEM TACTICAL ANALYSIS, SIMPLIFIED.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#070807",
          backgroundImage:
            "radial-gradient(circle at 85% 20%, rgba(201, 247, 60, 0.18), transparent 45%), radial-gradient(circle at 15% 85%, rgba(45, 212, 191, 0.12), transparent 50%)",
          padding: "64px 80px",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          position: "relative",
        }}
      >
        {/* Background pitch line geometry simulation */}
        <div
          style={{
            position: "absolute",
            right: "40px",
            top: "50px",
            width: "480px",
            height: "530px",
            border: "2px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "16px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Penalty box */}
          <div
            style={{
              width: "320px",
              height: "200px",
              border: "2px solid rgba(201, 247, 60, 0.25)",
              borderTop: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                width: "120px",
                height: "60px",
                border: "2px solid rgba(255, 255, 255, 0.12)",
                borderTop: "none",
              }}
            />
          </div>
          {/* Tactical tactical markers */}
          <div
            style={{
              position: "absolute",
              top: "140px",
              left: "110px",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: "rgba(201, 247, 60, 0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 20px rgba(201, 247, 60, 0.8)",
              color: "#000",
              fontWeight: 800,
              fontSize: "13px",
            }}
          >
            8
          </div>
          <div
            style={{
              position: "absolute",
              top: "230px",
              left: "240px",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.85)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#000",
              fontWeight: 800,
              fontSize: "13px",
            }}
          >
            10
          </div>
          <div
            style={{
              position: "absolute",
              top: "320px",
              left: "170px",
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: "rgba(201, 247, 60, 0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 20px rgba(201, 247, 60, 0.8)",
              color: "#000",
              fontWeight: 800,
              fontSize: "13px",
            }}
          >
            9
          </div>
          {/* Passing vector badge */}
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 14px",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              border: "1px solid rgba(201, 247, 60, 0.4)",
              borderRadius: "20px",
              color: "#c9f73c",
              fontSize: "12px",
              letterSpacing: "0.15em",
              fontWeight: 600,
            }}
          >
            ZONE 14 PENETRATION · xG +0.38
          </div>
        </div>

        {/* Brand header */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "10px",
              backgroundColor: "rgba(201, 247, 60, 0.15)",
              border: "1.5px solid rgba(201, 247, 60, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#c9f73c",
              fontSize: "22px",
              fontWeight: 900,
            }}
          >
            T
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{
                fontSize: "20px",
                fontWeight: 800,
                letterSpacing: "0.2em",
                color: "#ffffff",
              }}
            >
              TACSTEM
            </span>
            <span
              style={{
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.25em",
                color: "#c9f73c",
              }}
            >
              FOOTBALL TACTICAL ANALYSIS
            </span>
          </div>
        </div>

        {/* Main Title & Hero message */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            maxWidth: "680px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "8px 16px",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              borderRadius: "8px",
              color: "#c9f73c",
              fontSize: "13px",
              letterSpacing: "0.15em",
              fontWeight: 700,
              alignSelf: "flex-start",
            }}
          >
            NEXT-GEN FOOTBALL WORKSTATION
          </div>

          <h1
            style={{
              fontSize: "56px",
              fontWeight: 900,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              margin: 0,
            }}
          >
            TACSTEM TACTICAL ANALYSIS, SIMPLIFIED.
          </h1>

          <p
            style={{
              fontSize: "20px",
              lineHeight: 1.45,
              color: "rgba(255, 255, 255, 0.7)",
              margin: 0,
            }}
          >
            Tag matches, telestrate video, build tactical boards, analyse events across matches and export your work.
          </p>
        </div>

        {/* Footer badges */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "28px",
            borderTop: "1px solid rgba(255, 255, 255, 0.12)",
            paddingTop: "24px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: "#c9f73c", fontSize: "16px" }}>●</span>
            <span style={{ color: "#fff", fontSize: "14px", fontWeight: 600 }}>
              Zero Cloud Upload Lag
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: "#c9f73c", fontSize: "16px" }}>●</span>
            <span style={{ color: "#fff", fontSize: "14px", fontWeight: 600 }}>
              Broadcast Telestration
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ color: "#c9f73c", fontSize: "16px" }}>●</span>
            <span style={{ color: "#fff", fontSize: "14px", fontWeight: 600 }}>
              Flat €10 / Month
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
