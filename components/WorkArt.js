// Generated sample artwork for the "Our Work" tabs (social posts and logos).
// Replace by adding an `image` to an item in lib/data.js.

function PostShape({ shape, accent }) {
  const common = { fill: "none", stroke: accent, strokeWidth: 3, opacity: 0.35 };
  switch (shape) {
    case "burst":
      return <g opacity="0.22" fill={accent}><circle cx="330" cy="70" r="90" /><circle cx="330" cy="70" r="55" fill="none" stroke={accent} strokeWidth="4" /></g>;
    case "rings":
      return <g {...common}><circle cx="320" cy="320" r="60" /><circle cx="320" cy="320" r="100" /><circle cx="320" cy="320" r="140" /></g>;
    case "leaf":
      return <g fill={accent} opacity="0.25"><path d="M300 120c60-70 120-60 120-60s10 70-50 120c-40 34-90 20-90 20s-20-40 20-80z" /><path d="M250 200l110-90" stroke={accent} strokeWidth="4" fill="none" /></g>;
    case "bars":
      return <g fill={accent} opacity="0.9"><rect x="316" y="46" width="14" height="26" rx="4" /><rect x="336" y="34" width="14" height="38" rx="4" /><rect x="356" y="20" width="14" height="52" rx="4" /></g>;
    case "dots":
      return <g fill={accent} opacity="0.5">{Array.from({ length: 16 }).map((_, i) => <circle key={i} cx={260 + (i % 4) * 28} cy={40 + Math.floor(i / 4) * 28} r="5" />)}</g>;
    case "sun":
      return <g fill={accent} opacity="0.85"><circle cx="320" cy="90" r="46" /><g stroke={accent} strokeWidth="5" strokeLinecap="round">{Array.from({ length: 12 }).map((_, i) => { const a = (i * Math.PI) / 6; return <line key={i} x1={320 + Math.cos(a) * 62} y1={90 + Math.sin(a) * 62} x2={320 + Math.cos(a) * 78} y2={90 + Math.sin(a) * 78} />; })}</g></g>;
    case "stars":
      return <g fill={accent}>{[0, 1, 2, 3, 4].map((i) => <path key={i} transform={`translate(${232 + i * 30} 26) scale(0.8)`} d="M12 2l2.9 6.2 6.8.8-5 4.7 1.3 6.7L12 17.1 6 20.4l1.3-6.7-5-4.7 6.8-.8z" />)}</g>;
    case "stripes":
      return <g stroke={accent} strokeWidth="14" opacity="0.9" strokeLinecap="round"><path d="M270 40l-60 60M310 40l-100 100M350 40l-140 140" /></g>;
    default:
      return null;
  }
}

export function SocialPost({ p }) {
  return (
    <div className="post-tile" style={{ background: p.bg, color: p.fg }}>
      <svg viewBox="0 0 400 400" className="post-shapes" aria-hidden="true"><PostShape shape={p.shape} accent={p.accent} /></svg>
      <div className="post-top">
        <span className="post-avatar" style={{ background: p.accent }} />
        <span className="post-brand">{p.brand}</span>
      </div>
      <div className="post-main">
        <small style={{ color: p.accent }}>{p.kicker}</small>
        <strong>{p.title}</strong>
        <span>{p.sub}</span>
      </div>
      <span className="post-cta" style={{ background: p.accent, color: p.accent === "#ffffff" ? p.bg : (p.bg === "#ffffff" ? "#fff" : p.bg) }}>{p.cta}</span>
    </div>
  );
}

function LogoMarkArt({ mark, c1, c2 }) {
  const f = { fill: c1 };
  switch (mark) {
    case "orbit": return <g><circle cx="32" cy="32" r="12" {...f} /><ellipse cx="32" cy="32" rx="26" ry="10" fill="none" stroke={c2} strokeWidth="3" transform="rotate(-25 32 32)" /></g>;
    case "leaf": return <g><path d="M12 48C12 24 28 10 54 10c0 26-14 42-38 42" {...f} /><path d="M14 50L38 26" stroke="#fff" strokeWidth="3" strokeLinecap="round" /></g>;
    case "gem": return <g><path d="M18 14h28l12 14-26 28L6 28z" {...f} /><path d="M6 28h52M24 14l8 42 8-42" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinejoin="round" /></g>;
    case "cloud": return <g><path d="M20 46a12 12 0 010-24 16 16 0 0130-4 13 13 0 013 28z" {...f} /><path d="M26 38h14M33 31v14" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" /></g>;
    case "flame": return <g><path d="M32 6c4 12 18 18 18 34a18 18 0 01-36 0c0-8 4-12 8-16 0 6 3 8 6 8-2-10 0-18 4-26z" {...f} /><path d="M32 52a8 8 0 01-8-8c0-5 5-8 8-14 3 6 8 9 8 14a8 8 0 01-8 8z" fill="#fff" opacity=".9" /></g>;
    case "peak": return <g><path d="M4 52L26 14l12 20 8-12 14 30z" {...f} /><path d="M26 14l-7 12 7-4 6 4z" fill="#fff" /></g>;
    case "drop": return <g><path d="M32 6C20 22 14 30 14 40a18 18 0 0036 0C50 30 44 22 32 6z" {...f} /><path d="M24 42a8 8 0 008 8" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" fill="none" /></g>;
    case "hex": return <g><path d="M32 4l24 14v28L32 60 8 46V18z" {...f} /><path d="M32 18l12 7v14l-12 7-12-7V25z" fill="#fff" /></g>;
    default: return null;
  }
}

export function LogoTile({ l }) {
  return (
    <div className="logo-tile">
      <svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true"><LogoMarkArt mark={l.mark} c1={l.c1} c2={l.c2} /></svg>
      <strong style={{ color: l.c2 }}>{l.name}</strong>
      <small>{l.tagline}</small>
    </div>
  );
}
