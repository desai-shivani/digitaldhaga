const paths = {
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17L17 7M8 7h9v9" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c3.2 3.4 3.2 14.6 0 18M12 3c-3.2 3.4-3.2 14.6 0 18" />
    </>
  ),
  bolt: <path d="M13 3L5 13.5h6L10 21l8-10.5h-6z" />,
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M17 14c2.5 0 4.5 2 4.5 4.5" />
    </>
  ),
  headset: (
    <>
      <path d="M4 14v-2a8 8 0 0116 0v2" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M19 19c0 1.5-2 2.5-5 2.5" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 9h18M9 9v11" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2.5l2 11h10l2-8H7" />
      <circle cx="9" cy="19" r="1.4" />
      <circle cx="17" cy="19" r="1.4" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l5 5" />
    </>
  ),
  pen: (
    <>
      <path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 013 3L8 19z" />
      <path d="M14 7l3 3" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 5-9 5-9-5z" />
      <path d="M3 12.5l9 5 9-5M3 16.5l9 5 9-5" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="6.5" rx="2" />
      <rect x="3" y="13.5" width="18" height="6.5" rx="2" />
      <path d="M7 7.2h.01M7 16.8h.01" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </>
  ),
  call: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />,
  pin: (
    <>
      <path d="M12 21s7-6 7-11a7 7 0 10-14 0c0 5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.5 14l-1.5 7 5-2.5 5 2.5-1.5-7" />
    </>
  ),
  refresh: <path d="M20 11a8 8 0 00-14-4M4 5v4h4M4 13a8 8 0 0014 4M20 19v-4h-4" />,
  star: <path d="M12 3l2.6 5.6 6.1.7-4.5 4.2 1.2 6L12 16.4 6.6 19.5l1.2-6L3.3 9.3l6.1-.7z" />,
  heart: <path d="M12 20s-7-4.4-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.6-7 10-7 10zM8 11h2l1.5-2.5 2 5L15 11h1" />,
  bag: (
    <>
      <path d="M5 8h14l-1 12H6z" />
      <path d="M9 8V6a3 3 0 016 0v2" />
    </>
  ),
  home: <path d="M4 11l8-7 8 7M6 10v10h12V10M10 20v-6h4v6" />,
  cap: (
    <>
      <path d="M2 9l10-5 10 5-10 5z" />
      <path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5M22 9v6" />
    </>
  ),
  bed: <path d="M3 18V6M3 14h18v4M21 14v-2a3 3 0 00-3-3h-7v5M7 11.5a1.5 1.5 0 100-.01" />,
  truck: (
    <>
      <path d="M2 6h11v10H2zM13 9h4l4 4v3h-8" />
      <circle cx="7" cy="17.5" r="2" />
      <circle cx="17" cy="17.5" r="2" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M3 10h18M7 15h4" />
    </>
  ),
  factory: <path d="M3 20V9l6 4V9l6 4V5h3l0 15zM7 20v-3M12 20v-3M17 20v-3" />,
  plane: <path d="M21 4L3 11l6 2.5L11.5 20l2.5-5.5L21 4zM9 13.5l12-9.5" />,
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M9 7V5a1 1 0 011-1h4a1 1 0 011 1v2M3 13h18" />
    </>
  ),
  hands: <path d="M4 10h16v4H4zM6 14v6h12v-6M12 10v10M12 10c-3 0-5-1-5-3a2 2 0 013-1.5L12 10zM12 10c3 0 5-1 5-3a2 2 0 00-3-1.5L12 10z" />,
  rocket: (
    <>
      <path d="M12 3c3.5 2 5 6 4 11l-4 3-4-3c-1-5 .5-9 4-11z" />
      <circle cx="12" cy="10" r="1.6" />
      <path d="M8 15l-3 2 1 3 3-2M16 15l3 2-1 3-3-2" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10.5V16M8 7.8v.01M12 16v-5.5M12 13c0-1.5 1-2.6 2.5-2.6S17 11.4 17 13v3" />
    </>
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="3.8" />
      <path d="M17 7v.01" />
    </>
  ),
  facebook: <path d="M14 21v-8h2.8l.5-3.2H14V7.9c0-1 .5-1.9 2-1.9h1.4V3.3S16.2 3 15 3c-2.6 0-4.2 1.6-4.2 4.3v2.5H8V13h2.8v8z" />,
  x: <path d="M4 4l16 16M20 4L4 20" />,
  quote: <path d="M7 7h4v5c0 3-1.5 4.5-4 5M15 7h4v5c0 3-1.5 4.5-4 5" />,
};

export default function Icon({ name, size = 22, className = "", strokeWidth = 1.8, filled = false }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths[name] || null}
    </svg>
  );
}
