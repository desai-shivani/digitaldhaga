"use client";

import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import { aboutPhoto } from "@/lib/site";

// Real photo of a team at work. If the photo cannot load, the illustration is shown instead.
export default function AboutPhoto() {
  const [src, setSrc] = useState(aboutPhoto.src);
  const ref = useRef(null);
  // the photo may fail before React attaches onError, so check once after mount too
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setSrc(aboutPhoto.fallback);
  }, []);
  const failed = src === aboutPhoto.fallback;
  return (
    <div className={`about-photo${failed ? " is-fallback" : ""}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={ref}
        src={src}
        alt={aboutPhoto.alt}
        width="720"
        height="600"
        loading="lazy"
        onError={() => setSrc(aboutPhoto.fallback)}
      />
      {!failed && (
        <>
          <div className="about-chip about-chip-a">
            <span><Icon name="award" size={20} /></span>
            <div><strong>10+ years</strong><small>of experience</small></div>
          </div>
          <div className="about-chip about-chip-b">
            <span><Icon name="users" size={20} /></span>
            <div><strong>250+ projects</strong><small>delivered</small></div>
          </div>
        </>
      )}
    </div>
  );
}
