import { ImageResponse } from "next/og";

export const alt = "Kigali Six";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#14130F",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px 96px",
        }}
      >
        {/* Top eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "#8C8478",
            fontSize: "14px",
            fontFamily: "monospace",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          <span style={{ color: "#C8553D" }}>●</span>
          <span>CMU-Africa · MMXXVI · Kigali</span>
        </div>

        {/* Wordmark */}
        <div
          style={{
            fontSize: "144px",
            color: "#EFEAE0",
            lineHeight: "0.95",
            letterSpacing: "-0.02em",
            fontFamily: "serif",
            display: "flex",
          }}
        >
          <span>Kigali&nbsp;</span>
          <span style={{ fontStyle: "italic", color: "#C8553D" }}>Six</span>
        </div>

        {/* Bottom tagline */}
        <div
          style={{
            color: "#8C8478",
            fontSize: "14px",
            fontFamily: "monospace",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          Engineers · Researchers · Builders · Kigali
        </div>
      </div>
    ),
    { ...size }
  );
}
