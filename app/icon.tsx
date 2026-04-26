import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#14130F",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            color: "#EFEAE0",
            fontSize: "14px",
            fontFamily: "serif",
            letterSpacing: "-0.01em",
          }}
        >
          K6
        </span>
      </div>
    ),
    { ...size }
  );
}
