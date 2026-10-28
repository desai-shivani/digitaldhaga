"use client";

import { useRef } from "react";

// 3D tilt card (Aceternity-style): follows the cursor, springs back on leave.
export default function Tilt({ children, className = "", max = 8 }) {
  const ref = useRef(null);
  const move = (e) => {
    const el = ref.current;
    if (!el || !window.matchMedia("(hover: hover)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) scale(1.01)`;
  };
  const leave = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <div ref={ref} className={`tilt ${className}`} onMouseMove={move} onMouseLeave={leave}>
      {children}
    </div>
  );
}
