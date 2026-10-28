import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} | Web Design, SEO & Social Media Marketing`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#12141a", color: "#fff" }}>
        <div style={{ display: "flex", fontSize: 30, color: "#fd6d1e", fontWeight: 700, letterSpacing: 2 }}>DIGITAL DHAGA</div>
        <div style={{ display: "flex", fontSize: 76, fontWeight: 800, lineHeight: 1.05, marginTop: 24 }}>Web Design, SEO &amp; Social Media Marketing</div>
        <div style={{ display: "flex", fontSize: 32, color: "#c9ccd3", marginTop: 28 }}>Websites and marketing that bring you more customers.</div>
      </div>
    ),
    size
  );
}
