import { ImageResponse } from "next/og";

export const alt = "AI·LAB — รับทำโปรเจกต์ AI ที่ใช้งานได้จริง";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Latin-only on purpose: Satori ships no Thai glyphs, so Thai copy here would
 * render as tofu boxes unless a Thai font file is fetched at build time. The
 * all-caps terminal look suits the card anyway.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08090a",
          color: "#e8e8e3",
          fontFamily: "monospace",
          padding: 64,
          backgroundImage:
            "linear-gradient(to right, #26282b 1px, transparent 1px), linear-gradient(to bottom, #26282b 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22 }}>
          <span style={{ letterSpacing: 6, fontWeight: 700 }}>AI·LAB</span>
          <span style={{ letterSpacing: 6, color: "#8a8a82" }}>ISSUE #01 // VOL. 2026</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 26, letterSpacing: 8, color: "#c7f53e" }}>
            {"//"} SYSTEM ONLINE
          </span>
          <span
            style={{
              marginTop: 24,
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -2,
            }}
          >
            WE SHIP AI
          </span>
          <span
            style={{
              fontSize: 92,
              fontWeight: 700,
              lineHeight: 1.08,
              letterSpacing: -2,
              color: "#c7f53e",
            }}
          >
            THAT ACTUALLY RUNS
          </span>
        </div>

        <div style={{ display: "flex", gap: 20, fontSize: 22, color: "#8a8a82" }}>
          <span>[ CHATBOT ]</span>
          <span>[ RAG ]</span>
          <span>[ VISION ]</span>
          <span>[ AUTOMATION ]</span>
        </div>
      </div>
    ),
    size,
  );
}
