"use client";

import { useEffect, useRef, useState } from "react";
import { GirlCodingArt } from "./Art";

// Photo of a woman working at her computer (Unsplash, free to use).
// If the photo cannot load, the illustration is shown instead.
const PHOTO =
  "https://images.unsplash.com/photo-1758876017801-f5a892ee460a?auto=format&fit=crop&w=1200&q=75";

export default function AboutHeroPhoto() {
  const [failed, setFailed] = useState(false);
  const ref = useRef(null);
  // the photo may fail before React attaches onError, so check once after mount too
  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);
  return (
    <div className="story-art story-photo card-hard">
      {failed ? (
        <GirlCodingArt />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img ref={ref} src={PHOTO} alt="A woman working on her computer at a desk" width="1200" height="900" loading="lazy" onError={() => setFailed(true)} />
      )}
    </div>
  );
}
