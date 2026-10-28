// Large duotone icons for the service cards. Dark outline, orange accent, soft tint.
const O = "#fd6d1e";
const K = "#12141a";
const T = "#ffd9c3";
const W = "#ffffff";
const sw = 3;

const icons = {
  "website-design-development": (
    <>
      <rect x="10" y="16" width="76" height="58" rx="8" fill={W} stroke={K} strokeWidth={sw} />
      <path d="M10 32h76" stroke={K} strokeWidth={sw} />
      <circle cx="20" cy="24" r="2.6" fill={O} />
      <circle cx="29" cy="24" r="2.6" fill={T} stroke={K} strokeWidth="1.2" />
      <circle cx="38" cy="24" r="2.6" fill={T} stroke={K} strokeWidth="1.2" />
      <rect x="18" y="40" width="26" height="26" rx="4" fill={T} stroke={K} strokeWidth="2.4" />
      <path d="M52 44h26M52 54h20M52 64h14" stroke={K} strokeWidth="3" strokeLinecap="round" />
      <circle cx="74" cy="72" r="16" fill={O} stroke={K} strokeWidth={sw} />
      <path d="M69 66l-6 6 6 6M79 66l6 6-6 6" fill="none" stroke={W} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  "ecommerce-development": (
    <>
      <path d="M6 14h13l9 40h42l9-30H24" fill={W} stroke={K} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M31 24h46l-7 28H36z" fill={T} />
      <path d="M44 30v14M54 30v14M64 30v14" stroke={O} strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="38" cy="72" r="7" fill={O} stroke={K} strokeWidth={sw} />
      <circle cx="66" cy="72" r="7" fill={O} stroke={K} strokeWidth={sw} />
      <g transform="translate(70 12)">
        <circle r="13" fill={K} />
        <path d="M-5 0l4 4 7-8" fill="none" stroke={W} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </>
  ),
  "ui-ux-design": (
    <>
      <rect x="10" y="12" width="58" height="72" rx="8" fill={W} stroke={K} strokeWidth={sw} />
      <rect x="18" y="20" width="42" height="22" rx="4" fill={T} stroke={K} strokeWidth="2.4" />
      <path d="M18 52h42M18 62h30M18 72h20" stroke={K} strokeWidth="3" strokeLinecap="round" />
      <path d="M66 70l4-14 22-22 10 10-22 22z" transform="translate(-14 4) scale(.9)" fill={O} stroke={K} strokeWidth={sw} strokeLinejoin="round" />
      <path d="M60 62l-3 10 10-3z" fill={W} stroke={K} strokeWidth="2.4" strokeLinejoin="round" />
      <circle cx="18" cy="20" r="3.2" fill={W} stroke={K} strokeWidth="2" />
      <circle cx="60" cy="42" r="3.2" fill={W} stroke={K} strokeWidth="2" />
    </>
  ),
  "seo-digital-marketing": (
    <>
      <circle cx="42" cy="42" r="28" fill={W} stroke={K} strokeWidth={sw} />
      <path d="M62 62l24 24" stroke={K} strokeWidth="7" strokeLinecap="round" />
      <path d="M62 62l24 24" stroke={O} strokeWidth="3" strokeLinecap="round" />
      <rect x="26" y="44" width="8" height="14" rx="2" fill={T} stroke={K} strokeWidth="2.2" />
      <rect x="38" y="36" width="8" height="22" rx="2" fill={O} stroke={K} strokeWidth="2.2" />
      <rect x="50" y="28" width="8" height="30" rx="2" fill={T} stroke={K} strokeWidth="2.2" />
      <path d="M24 34l12-8 8 4 14-12" fill="none" stroke={K} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  "social-media-marketing": (
    <>
      <rect x="26" y="8" width="44" height="80" rx="9" fill={W} stroke={K} strokeWidth={sw} />
      <path d="M26 20h44M26 76h44" stroke={K} strokeWidth="2.4" />
      <path d="M48 62c-9-7-14-11-14-17a7 7 0 0114-3 7 7 0 0114 3c0 6-5 10-14 17z" fill={O} stroke={K} strokeWidth="2.6" strokeLinejoin="round" />
      <circle cx="48" cy="82" r="2.2" fill={K} />
      <g transform="translate(76 26)">
        <circle r="13" fill={O} stroke={K} strokeWidth={sw} />
        <path d="M-5 -1h10M-5 4h6" stroke={W} strokeWidth="3" strokeLinecap="round" />
      </g>
      <g transform="translate(18 62)">
        <circle r="12" fill={T} stroke={K} strokeWidth={sw} />
        <path d="M-5 1l3.5 3.5L5 -3.5" fill="none" stroke={K} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </>
  ),
  "cms-headless-solutions": (
    <>
      <path d="M48 12l38 18-38 18L10 30z" fill={T} stroke={K} strokeWidth={sw} strokeLinejoin="round" />
      <path d="M10 46l38 18 38-18" fill="none" stroke={K} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 62l38 18 38-18" fill="none" stroke={K} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M48 12l38 18-38 18L10 30z" fill="none" stroke={K} strokeWidth={sw} strokeLinejoin="round" />
      <circle cx="48" cy="30" r="9" fill={O} stroke={K} strokeWidth="2.6" />
      <path d="M44 30l3 3 5-6" fill="none" stroke={W} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
};

export default function ServiceIcon({ slug }) {
  return (
    <svg viewBox="0 0 96 96" className="service-icon-svg" role="img" aria-hidden="true" focusable="false">
      {icons[slug] || icons["website-design-development"]}
    </svg>
  );
}
