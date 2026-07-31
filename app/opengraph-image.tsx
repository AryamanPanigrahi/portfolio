import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#08090a",
          backgroundImage:
            "radial-gradient(circle at 25px 25px, #10b98122 2%, transparent 0%), radial-gradient(circle at 75px 75px, #10b98122 2%, transparent 0%)",
          backgroundSize: "100px 100px",
        }}
      >
        <div style={{ width: 64, height: 4, background: "#10b981", display: "flex" }} />
        <div
          style={{
            marginTop: 40,
            fontSize: 26,
            fontWeight: 600,
            letterSpacing: 2,
            color: "#10b981",
            display: "flex",
          }}
        >
          SOFTWARE ENGINEERING · AI · CYBERSECURITY
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            display: "flex",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 32,
            color: "#a3abaf",
            display: "flex",
          }}
        >
          B.Tech CSE (Cybersecurity), VIT Vellore
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 26,
            color: "#767f84",
            display: "flex",
          }}
        >
          Backend Development · AI/LLM Evaluation · Applied Security
        </div>
      </div>
    ),
    { ...size }
  );
}
