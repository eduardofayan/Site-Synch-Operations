import { ImageResponse } from "next/og";

export const alt = "Synch Operations: Transformando dados em decisões";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #050816 0%, #3a1505 55%, #7c2d0c 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#ff9a3d", letterSpacing: 4, textTransform: "uppercase" }}>
          Synch Operations
        </div>
        <div style={{ fontSize: 68, fontWeight: 700, marginTop: 24, lineHeight: 1.1 }}>
          Synch Insight: inteligência operacional com IA
        </div>
        <div style={{ fontSize: 30, color: "#94a3b8", marginTop: 28 }}>
          Transformando dados em decisões.
        </div>
      </div>
    ),
    { ...size },
  );
}
