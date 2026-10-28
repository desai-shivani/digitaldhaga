// Illustration set. Everything is inline SVG so it stays sharp at any size,
// ships with zero image requests and uses the brand palette.
// To use photography instead, drop files in /public/images and swap the
// <Art /> usages for <img> / next/image.

const O = "#fd6d1e";
const K = "#222222";
const C = "#f5f7fb";
const C2 = "#e9edf5";
const C3 = "#d9dfeb";
const W = "#ffffff";
const SW = 2;

function Browser({ x, y, w, h, fill = W, shadow = true, children }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {shadow && <rect x="6" y="6" width={w} height={h} rx="10" fill={K} />}
      <rect width={w} height={h} rx="10" fill={fill} stroke={K} strokeWidth={SW} />
      <path d={`M0 22H${w}`} stroke={K} strokeWidth={SW} />
      <circle cx="12" cy="11" r="3" fill={O} />
      <circle cx="23" cy="11" r="3" fill={K} />
      <circle cx="34" cy="11" r="3" fill={C3} stroke={K} strokeWidth="1" />
      {children}
    </g>
  );
}

function Backdrop({ bg = C2, blob = true }) {
  return (
    <>
      <rect width="400" height="300" fill={bg} />
      {blob && <circle cx="330" cy="46" r="92" fill={O} opacity=".16" />}
      {blob && <circle cx="40" cy="268" r="64" fill={K} opacity=".06" />}
    </>
  );
}

/* ─────────────  SERVICES  ───────────── */

const scenes = {
  "website-design-development": (
    <>
      <Browser x={46} y={44} w={262} h={190}>
        <rect x="16" y="36" width="110" height="10" rx="5" fill={K} />
        <rect x="16" y="52" width="82" height="10" rx="5" fill={K} />
        <rect x="16" y="72" width="104" height="5" rx="2.5" fill={C3} />
        <rect x="16" y="82" width="84" height="5" rx="2.5" fill={C3} />
        <rect x="16" y="98" width="58" height="18" rx="9" fill={O} stroke={K} strokeWidth="1.6" />
        <rect x="140" y="34" width="106" height="86" rx="8" fill={O} stroke={K} strokeWidth="1.6" />
        <circle cx="193" cy="74" r="19" fill={C} stroke={K} strokeWidth="1.6" />
        <path d="M140 100c18-14 34 8 54-2s34-6 52 2v20H140z" fill={K} />
        {[16, 95, 174].map((x) => (
          <g key={x}>
            <rect x={x} y="134" width="72" height="42" rx="6" fill={C2} stroke={K} strokeWidth="1.4" />
            <circle cx={x + 14} cy="148" r="5" fill={O} />
            <rect x={x + 24} y="145" width="36" height="4" rx="2" fill={K} />
            <rect x={x + 10} y="160" width="50" height="4" rx="2" fill={C3} />
          </g>
        ))}
      </Browser>
      <circle cx="338" cy="62" r="30" fill={K} />
      <text x="338" y="70" textAnchor="middle" fontFamily="monospace" fontWeight="700" fontSize="22" fill={O}>
        {"</>"}
      </text>
      <rect x="276" y="206" width="98" height="40" rx="20" fill={W} stroke={K} strokeWidth={SW} />
      <circle cx="298" cy="226" r="9" fill={O} />
      <rect x="314" y="218" width="48" height="5" rx="2.5" fill={K} />
      <rect x="314" y="228" width="34" height="5" rx="2.5" fill={C3} />
    </>
  ),

  "ecommerce-development": (
    <>
      <Browser x={36} y={40} w={256} h={206}>
        {[0, 1, 2, 3].map((i) => {
          const x = 14 + (i % 2) * 120;
          const y = 34 + Math.floor(i / 2) * 82;
          const fills = [O, K, C3, O];
          return (
            <g key={i}>
              <rect x={x} y={y} width="106" height="72" rx="8" fill={C} stroke={K} strokeWidth="1.5" />
              <rect x={x + 10} y={y + 8} width="86" height="36" rx="6" fill={fills[i]} stroke={K} strokeWidth="1.4" />
              <circle cx={x + 53} cy={y + 26} r="9" fill={i === 1 ? O : C} stroke={K} strokeWidth="1.4" />
              <rect x={x + 10} y={y + 52} width="44" height="5" rx="2.5" fill={K} />
              <rect x={x + 66} y={y + 50} width="30" height="10" rx="5" fill={O} stroke={K} strokeWidth="1.2" />
            </g>
          );
        })}
      </Browser>
      <circle cx="326" cy="84" r="36" fill={O} stroke={K} strokeWidth={SW} />
      <path d="M308 72h6l5 22h20l5-16h-28" fill="none" stroke={K} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="324" cy="102" r="3" fill={K} />
      <circle cx="338" cy="102" r="3" fill={K} />
      <circle cx="350" cy="58" r="13" fill={K} />
      <text x="350" y="63" textAnchor="middle" fontFamily="sans-serif" fontWeight="700" fontSize="14" fill={C}>3</text>
      <g transform="translate(22 6) rotate(-8 330 200)">
        <path d="M290 182h62l16 18-16 18h-62z" fill={W} stroke={K} strokeWidth={SW} />
        <circle cx="360" cy="200" r="3.5" fill={K} />
        <text x="320" y="205" textAnchor="middle" fontFamily="sans-serif" fontWeight="800" fontSize="15" fill={K}>50% off</text>
      </g>
    </>
  ),

  "web-app-development": (
    <>
      <Browser x={30} y={42} w={300} h={200}>
        <rect x="0" y="22" width="56" height="178" fill={K} />
        <rect x="0" y="22" width="56" height="2" fill={K} />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x="12" y={40 + i * 22} width="32" height="8" rx="4" fill={i === 1 ? O : "#555"} />
        ))}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={68 + i * 76} y="34" width="68" height="40" rx="7" fill={C} stroke={K} strokeWidth="1.4" />
            <rect x={76 + i * 76} y="42" width="26" height="5" rx="2.5" fill={C3} />
            <rect x={76 + i * 76} y="54" width="40" height="10" rx="3" fill={i === 0 ? O : K} />
          </g>
        ))}
        <rect x="68" y="84" width="150" height="100" rx="7" fill={W} stroke={K} strokeWidth="1.4" />
        <path d="M78 164l26-22 22 12 32-40 24 14 24-26v62H78z" fill={O} opacity=".25" />
        <path d="M78 164l26-22 22 12 32-40 24 14 24-26" fill="none" stroke={O} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="206" cy="102" r="4.5" fill={K} />
        <rect x="228" y="84" width="60" height="100" rx="7" fill={C} stroke={K} strokeWidth="1.4" />
        <circle cx="258" cy="122" r="22" fill="none" stroke={C3} strokeWidth="9" />
        <circle cx="258" cy="122" r="22" fill="none" stroke={O} strokeWidth="9" strokeDasharray="90 140" transform="rotate(-90 258 122)" />
        <rect x="240" y="156" width="36" height="5" rx="2.5" fill={K} />
        <rect x="244" y="168" width="28" height="4" rx="2" fill={C3} />
      </Browser>
      <rect x="276" y="22" width="102" height="38" rx="19" fill={W} stroke={K} strokeWidth={SW} />
      <circle cx="298" cy="41" r="9" fill={O} />
      <path d="M294 41l3 3 5-6" fill="none" stroke={K} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="313" y="34" width="50" height="5" rx="2.5" fill={K} />
      <rect x="313" y="43" width="34" height="5" rx="2.5" fill={C3} />
    </>
  ),

  "mobile-app-development": (
    <>
      <g transform="rotate(-7 160 150)">
        <rect x="108" y="30" width="108" height="226" rx="22" fill={K} />
        <rect x="108" y="30" width="108" height="226" rx="22" fill="none" stroke={K} strokeWidth={SW} />
        <rect x="116" y="42" width="92" height="202" rx="15" fill={C} />
        <rect x="144" y="34" width="36" height="6" rx="3" fill="#555" />
        <rect x="124" y="56" width="52" height="8" rx="4" fill={K} />
        <rect x="124" y="72" width="76" height="62" rx="9" fill={O} stroke={K} strokeWidth="1.5" />
        <path d="M124 118c16-14 28 4 44-6s24-2 32 2v18c0 4-3 8-8 8h-60c-5 0-8-4-8-8z" fill={K} />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <circle cx="132" cy={156 + i * 24} r="8" fill={i === 0 ? O : C3} stroke={K} strokeWidth="1.3" />
            <rect x="148" y={150 + i * 24} width="44" height="5" rx="2.5" fill={K} />
            <rect x="148" y={160 + i * 24} width="30" height="4" rx="2" fill={C3} />
          </g>
        ))}
      </g>
      <g transform="rotate(6 270 160)">
        <rect x="226" y="52" width="108" height="226" rx="22" fill={O} stroke={K} strokeWidth={SW} />
        <rect x="234" y="64" width="92" height="202" rx="15" fill={W} />
        <rect x="262" y="56" width="36" height="6" rx="3" fill={K} />
        <rect x="242" y="80" width="40" height="8" rx="4" fill={K} />
        <rect x="242" y="98" width="76" height="64" rx="9" fill={K} />
        <path d="M250 148l16-20 14 10 20-24 14 14" fill="none" stroke={O} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="242" y="174" width="34" height="34" rx="9" fill={C2} stroke={K} strokeWidth="1.4" />
        <rect x="284" y="174" width="34" height="34" rx="9" fill={O} stroke={K} strokeWidth="1.4" />
        <rect x="242" y="218" width="76" height="30" rx="15" fill={K} />
        <rect x="256" y="230" width="48" height="6" rx="3" fill={C} />
      </g>
      <circle cx="64" cy="76" r="22" fill={W} stroke={K} strokeWidth={SW} />
      <path d="M64 66v20M54 76h20" stroke={O} strokeWidth="4" strokeLinecap="round" />
    </>
  ),

  "ui-ux-design": (
    <>
      <path d="M56 54C120 4 250 4 330 50" fill="none" stroke={O} strokeWidth="3" strokeLinecap="round" />
      <path d="M56 54L100 22M330 50L286 22" stroke={K} strokeWidth="1.4" strokeDasharray="3 3" />
      {[[56, 54], [330, 50]].map(([x, y]) => (
        <rect key={x} x={x - 5} y={y - 5} width="10" height="10" fill={W} stroke={K} strokeWidth={SW} />
      ))}
      {[[100, 22], [286, 22]].map(([x, y]) => (
        <circle key={x} cx={x} cy={y} r="4.5" fill={O} stroke={K} strokeWidth="1.5" />
      ))}
      <rect x="44" y="88" width="128" height="170" rx="8" fill={W} stroke={K} strokeWidth={SW} strokeDasharray="6 5" />
      <text x="50" y="80" fontFamily="sans-serif" fontWeight="700" fontSize="12" fill={K}>Wireframe</text>
      <rect x="58" y="102" width="100" height="40" rx="4" fill="none" stroke={K} strokeWidth="1.5" />
      <path d="M58 102l100 40M158 102L58 142" stroke={C3} strokeWidth="1.5" />
      <rect x="58" y="154" width="70" height="7" rx="3.5" fill={C3} />
      <rect x="58" y="168" width="100" height="5" rx="2.5" fill={C3} />
      <rect x="58" y="178" width="84" height="5" rx="2.5" fill={C3} />
      <rect x="58" y="198" width="52" height="18" rx="4" fill="none" stroke={K} strokeWidth="1.5" />
      <rect x="198" y="100" width="150" height="158" rx="8" fill={K} />
      <text x="204" y="92" fontFamily="sans-serif" fontWeight="700" fontSize="12" fill={K}>Final UI</text>
      <rect x="198" y="100" width="150" height="158" rx="8" fill={K} stroke={K} strokeWidth={SW} />
      <rect x="212" y="114" width="122" height="52" rx="6" fill={O} />
      <circle cx="304" cy="140" r="14" fill={C} />
      <rect x="222" y="128" width="50" height="7" rx="3.5" fill={K} />
      <rect x="222" y="142" width="36" height="5" rx="2.5" fill={K} opacity=".5" />
      <rect x="212" y="178" width="122" height="6" rx="3" fill={C} opacity=".8" />
      <rect x="212" y="192" width="96" height="6" rx="3" fill={C} opacity=".5" />
      <rect x="212" y="214" width="62" height="24" rx="12" fill={O} />
      <path d="M268 190l0 34 8-8 8 18 6-3-8-17 12-1z" fill={W} stroke={K} strokeWidth="1.8" strokeLinejoin="round" transform="translate(32 -8)" />
      <rect x="298" y="234" width="56" height="20" rx="10" fill={W} stroke={K} strokeWidth="1.6" />
      <text x="326" y="248" textAnchor="middle" fontFamily="sans-serif" fontWeight="700" fontSize="10.5" fill={K}>You</text>
      {[O, K, C3].map((c, i) => (
        <circle key={i} cx={64 + i * 22} cy="282" r="8" fill={c} stroke={K} strokeWidth="1.5" />
      ))}
    </>
  ),

  "social-media-marketing": (
    <>
      <rect x="132" y="26" width="136" height="250" rx="22" fill={K} transform="translate(6 6)" />
      <rect x="132" y="26" width="136" height="250" rx="22" fill={W} stroke={K} strokeWidth={SW} />
      <rect x="176" y="36" width="48" height="8" rx="4" fill={K} />
      <circle cx="154" cy="68" r="11" fill={O} stroke={K} strokeWidth="1.6" />
      <rect x="171" y="62" width="58" height="6" rx="3" fill={K} />
      <rect x="171" y="73" width="38" height="5" rx="2.5" fill={C3} />
      <rect x="146" y="92" width="108" height="96" rx="10" fill={C} stroke={K} strokeWidth="1.6" />
      <circle cx="176" cy="122" r="12" fill={O} />
      <path d="M146 188l32-36 24 22 20-18 32 32z" fill={K} opacity=".85" />
      <path d="M156 210c-6-6-10-10-10-15a6 6 0 0110-4 6 6 0 0110 4c0 5-4 9-10 15z" fill={O} stroke={K} strokeWidth="1.4" />
      <rect x="176" y="198" width="30" height="6" rx="3" fill={K} />
      <rect x="146" y="226" width="108" height="8" rx="4" fill={C3} />
      <rect x="146" y="242" width="72" height="8" rx="4" fill={C3} />
      <g transform="translate(76 86)">
        <circle r="30" fill={O} stroke={K} strokeWidth={SW} />
        <path d="M0 14c-14-12-20-17-20-26a10 10 0 0120-6 10 10 0 0120 6c0 9-6 14-20 26z" transform="scale(.62) translate(0 -4)" fill={W} stroke={K} strokeWidth="2.6" strokeLinejoin="round" />
      </g>
      <g transform="translate(322 130)">
        <rect x="-44" y="-20" width="88" height="40" rx="20" fill={W} stroke={K} strokeWidth={SW} />
        <text x="0" y="6" textAnchor="middle" fontFamily="sans-serif" fontWeight="800" fontSize="17" fill={K}>+42K</text>
      </g>
      <g transform="translate(86 214)">
        <rect x="-40" y="-18" width="80" height="36" rx="18" fill={K} />
        <text x="0" y="6" textAnchor="middle" fontFamily="sans-serif" fontWeight="800" fontSize="15" fill={C}>2.4M</text>
      </g>
      <circle cx="334" cy="228" r="24" fill={W} stroke={K} strokeWidth={SW} />
      <path d="M322 232l8-14 6 8 6-10" fill="none" stroke={O} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),

  "seo-digital-marketing": (
    <>
      <rect x="46" y="30" width="214" height="34" rx="17" fill={W} stroke={K} strokeWidth={SW} />
      <circle cx="68" cy="47" r="7" fill="none" stroke={K} strokeWidth="2.2" />
      <path d="M73 52l6 6" stroke={K} strokeWidth="2.2" strokeLinecap="round" />
      <rect x="90" y="43" width="96" height="7" rx="3.5" fill={C3} />
      <rect x="196" y="38" width="54" height="18" rx="9" fill={O} stroke={K} strokeWidth="1.5" />
      {[0, 1, 2, 3, 4].map((i) => {
        const h = 40 + i * 28;
        return (
          <g key={i}>
            <rect x={70 + i * 50 + 5} y={256 - h + 5} width="36" height={h} rx="5" fill={K} />
            <rect x={70 + i * 50} y={256 - h} width="36" height={h} rx="5" fill={i === 4 ? O : i % 2 ? C : W} stroke={K} strokeWidth={SW} />
          </g>
        );
      })}
      <path d="M72 176l54-36 50 18 76-62" fill="none" stroke={K} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M262 92l16 0 -2 16" fill="none" stroke={K} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" transform="translate(-8 -6) rotate(8 270 100)" />
      <circle cx="326" cy="108" r="34" fill={O} stroke={K} strokeWidth={SW} />
      <text x="326" y="118" textAnchor="middle" fontFamily="sans-serif" fontWeight="800" fontSize="28" fill={K}>#1</text>
      <circle cx="334" cy="224" r="26" fill={W} stroke={K} strokeWidth={SW} />
      <circle cx="330" cy="220" r="11" fill="none" stroke={K} strokeWidth="3" />
      <path d="M338 228l12 12" stroke={K} strokeWidth="4" strokeLinecap="round" />
    </>
  ),

  "cms-headless-solutions": (
    <>
      <rect x="36" y="40" width="156" height="216" rx="12" fill={K} />
      <rect x="30" y="34" width="156" height="216" rx="12" fill={W} stroke={K} strokeWidth={SW} />
      <rect x="44" y="48" width="70" height="8" rx="4" fill={K} />
      <rect x="130" y="44" width="42" height="16" rx="8" fill={O} stroke={K} strokeWidth="1.4" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="44" y={74 + i * 44} width="128" height="36" rx="7" fill={i === 1 ? O : C} stroke={K} strokeWidth="1.5" />
          <g fill={K}>
            <circle cx="55" cy={88 + i * 44} r="1.8" />
            <circle cx="55" cy={96 + i * 44} r="1.8" />
            <circle cx="62" cy={88 + i * 44} r="1.8" />
            <circle cx="62" cy={96 + i * 44} r="1.8" />
          </g>
          <rect x="76" y={85 + i * 44} width={[70, 56, 64, 48][i]} height="6" rx="3" fill={K} />
          <rect x="76" y={96 + i * 44} width={[44, 70, 38, 56][i]} height="5" rx="2.5" fill={i === 1 ? C : C3} />
        </g>
      ))}
      <path d="M192 142h36" stroke={K} strokeWidth="2.4" strokeDasharray="5 5" />
      <path d="M224 134l10 8-10 8" fill="none" stroke={K} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <Browser x={240} y={84} w={138} h={140}>
        <rect x="12" y="34" width="70" height="8" rx="4" fill={K} />
        <rect x="12" y="48" width="104" height="22" rx="5" fill={O} stroke={K} strokeWidth="1.3" />
        <rect x="12" y="78" width="104" height="5" rx="2.5" fill={C3} />
        <rect x="12" y="88" width="80" height="5" rx="2.5" fill={C3} />
        <rect x="12" y="104" width="46" height="22" rx="5" fill={C2} stroke={K} strokeWidth="1.3" />
        <rect x="68" y="104" width="46" height="22" rx="5" fill={C2} stroke={K} strokeWidth="1.3" />
      </Browser>
      <circle cx="352" cy="52" r="22" fill={W} stroke={K} strokeWidth={SW} />
      <path d="M344 52l6 6 10-12" fill="none" stroke={O} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),

  "website-maintenance-support": (
    <>
      <path d="M206 66L296 98v62c0 46-38 78-90 98-52-20-90-52-90-98V98z" fill={K} transform="translate(7 7)" />
      <path d="M200 60L290 92v62c0 46-38 78-90 98-52-20-90-52-90-98V92z" fill={O} stroke={K} strokeWidth={SW} strokeLinejoin="round" />
      <path d="M200 84l68 24v46c0 34-28 58-68 74-40-16-68-40-68-74v-46z" fill={C} opacity=".35" />
      <path d="M164 160l26 26 46-52" fill="none" stroke={K} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="40" y="38" width="124" height="46" rx="12" fill={W} stroke={K} strokeWidth={SW} />
      {Array.from({ length: 12 }).map((_, i) => (
        <rect key={i} x={50 + i * 9.5} y={i === 7 ? 62 : 50} width="5" height={i === 7 ? 12 : 24} rx="2.5" fill={i === 7 ? C3 : O} />
      ))}
      <rect x="296" y="196" width="86" height="42" rx="21" fill={K} />
      <text x="339" y="223" textAnchor="middle" fontFamily="sans-serif" fontWeight="800" fontSize="17" fill={C}>99.9%</text>
      <g transform="translate(334 62)">
        <circle r="26" fill={W} stroke={K} strokeWidth={SW} />
        {Array.from({ length: 8 }).map((_, i) => (
          <rect key={i} x="-4" y="-34" width="8" height="12" rx="2" fill={K} transform={`rotate(${i * 45})`} />
        ))}
        <circle r="26" fill={W} stroke={K} strokeWidth={SW} />
        <circle r="9" fill={O} stroke={K} strokeWidth="1.8" />
      </g>
    </>
  ),
};

export function ServiceArt({ slug }) {
  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Illustration of the service" className="art-svg">
      <Backdrop />
      {scenes[slug] || scenes["website-design-development"]}
    </svg>
  );
}

/* ─────────────  PRODUCTS  ───────────── */

const productScenes = {
  store: (
    <>
      <Browser x={40} y={30} w={250} h={190}>
        <rect x="14" y="34" width="222" height="38" rx="8" fill={O} stroke={K} strokeWidth="1.5" />
        <rect x="26" y="45" width="84" height="8" rx="4" fill={K} />
        <rect x="26" y="58" width="56" height="6" rx="3" fill={C} />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x={14 + i * 76} y="82" width="68" height="84" rx="7" fill={C} stroke={K} strokeWidth="1.4" />
            <rect x={22 + i * 76} y="90" width="52" height="40" rx="5" fill={[C3, K, O][i]} />
            <rect x={22 + i * 76} y="138" width="34" height="5" rx="2.5" fill={K} />
            <rect x={22 + i * 76} y="148" width="22" height="5" rx="2.5" fill={O} />
          </g>
        ))}
      </Browser>
      <circle cx="324" cy="80" r="34" fill={K} />
      <path d="M306 68h6l5 22h20l5-16h-28" fill="none" stroke={O} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="296" y="156" width="86" height="34" rx="17" fill={W} stroke={K} strokeWidth={SW} />
      <text x="339" y="178" textAnchor="middle" fontFamily="sans-serif" fontWeight="800" fontSize="14" fill={K}>Paid</text>
    </>
  ),
  booking: (
    <>
      <rect x="48" y="36" width="210" height="190" rx="12" fill={K} transform="translate(6 6)" />
      <rect x="48" y="36" width="210" height="190" rx="12" fill={W} stroke={K} strokeWidth={SW} />
      <rect x="48" y="36" width="210" height="36" rx="12" fill={O} stroke={K} strokeWidth={SW} />
      <rect x="62" y="50" width="70" height="8" rx="4" fill={K} />
      {Array.from({ length: 21 }).map((_, i) => {
        const x = 62 + (i % 7) * 27;
        const y = 86 + Math.floor(i / 7) * 28;
        const sel = i === 9;
        return (
          <g key={i}>
            <rect x={x} y={y} width="21" height="21" rx="6" fill={sel ? O : [3, 11, 16].includes(i) ? C3 : C} stroke={K} strokeWidth={sel ? 1.8 : 1} />
          </g>
        );
      })}
      <rect x="282" y="52" width="92" height="40" rx="10" fill={W} stroke={K} strokeWidth={SW} />
      <rect x="292" y="64" width="46" height="6" rx="3" fill={K} />
      <rect x="292" y="75" width="30" height="5" rx="2.5" fill={C3} />
      {["10:00", "11:30", "2:00"].map((t, i) => (
        <g key={t}>
          <rect x="282" y={108 + i * 38} width="92" height="30" rx="15" fill={i === 1 ? K : W} stroke={K} strokeWidth="1.8" />
          <text x="328" y={128 + i * 38} textAnchor="middle" fontFamily="sans-serif" fontWeight="700" fontSize="12" fill={i === 1 ? C : K}>{t}</text>
        </g>
      ))}
    </>
  ),
  crm: (
    <>
      <rect x="30" y="30" width="340" height="200" rx="12" fill={W} stroke={K} strokeWidth={SW} />
      {[
        ["New", 3],
        ["Talking", 2],
        ["Won", 1],
      ].map(([label, n], c) => (
        <g key={label}>
          <rect x={42 + c * 110} y="42" width="102" height="176" rx="8" fill={C2} />
          <rect x={50 + c * 110} y="52" width="40" height="7" rx="3.5" fill={K} />
          {Array.from({ length: n }).map((_, r) => (
            <g key={r}>
              <rect x={50 + c * 110} y={68 + r * 44} width="86" height="38" rx="7" fill={W} stroke={K} strokeWidth="1.4" />
              <circle cx={62 + c * 110} cy={80 + r * 44} r="6" fill={c === 2 ? O : r === 0 ? K : C3} />
              <rect x={74 + c * 110} y={76 + r * 44} width="44" height="5" rx="2.5" fill={K} />
              <rect x={58 + c * 110} y={92 + r * 44} width="60" height="4" rx="2" fill={C3} />
            </g>
          ))}
        </g>
      ))}
      <path d="M144 100h-20" stroke={O} strokeWidth="3" strokeLinecap="round" />
      <circle cx="360" cy="40" r="20" fill={O} stroke={K} strokeWidth={SW} />
      <path d="M352 40l6 6 10-12" fill="none" stroke={K} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),
  kits: (
    <>
      {[0, 1, 2].map((i) => (
        <Browser key={i} x={36 + i * 54} y={28 + i * 34} w={190} h={140} fill={i === 2 ? W : C}>
          {i === 2 ? (
            <>
              <rect x="12" y="34" width="84" height="9" rx="4.5" fill={K} />
              <rect x="12" y="50" width="62" height="9" rx="4.5" fill={K} />
              <rect x="12" y="72" width="48" height="16" rx="8" fill={O} stroke={K} strokeWidth="1.4" />
              <rect x="104" y="32" width="70" height="62" rx="7" fill={O} stroke={K} strokeWidth="1.4" />
              <circle cx="139" cy="60" r="14" fill={C} stroke={K} strokeWidth="1.4" />
              <rect x="12" y="104" width="50" height="22" rx="5" fill={C2} stroke={K} strokeWidth="1.2" />
              <rect x="68" y="104" width="50" height="22" rx="5" fill={C2} stroke={K} strokeWidth="1.2" />
              <rect x="124" y="104" width="50" height="22" rx="5" fill={C2} stroke={K} strokeWidth="1.2" />
            </>
          ) : (
            <rect x="12" y="34" width="60" height="8" rx="4" fill={K} opacity=".5" />
          )}
        </Browser>
      ))}
    </>
  ),
  menu: (
    <>
      <rect x="64" y="22" width="132" height="224" rx="24" fill={K} />
      <rect x="72" y="34" width="116" height="200" rx="16" fill={C} />
      <rect x="104" y="26" width="52" height="6" rx="3" fill="#555" />
      <rect x="82" y="48" width="64" height="9" rx="4.5" fill={K} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <rect x="82" y={68 + i * 40} width="96" height="34" rx="9" fill={W} stroke={K} strokeWidth="1.4" />
          <circle cx="98" cy={85 + i * 40} r="9" fill={i % 2 ? O : C3} stroke={K} strokeWidth="1.2" />
          <rect x="114" y={79 + i * 40} width="36" height="5" rx="2.5" fill={K} />
          <rect x="114" y={89 + i * 40} width="22" height="4" rx="2" fill={C3} />
          <circle cx="166" cy={85 + i * 40} r="7" fill={O} />
          <path d="M163 85h6M166 82v6" stroke={K} strokeWidth="1.6" strokeLinecap="round" />
        </g>
      ))}
      <rect x="236" y="62" width="124" height="124" rx="12" fill={W} stroke={K} strokeWidth={SW} />
      {Array.from({ length: 49 }).map((_, i) => {
        const x = i % 7;
        const y = Math.floor(i / 7);
        const corner = (x < 2 && y < 2) || (x > 4 && y < 2) || (x < 2 && y > 4);
        const on = corner || (x * 3 + y * 5 + x * y) % 3 === 0;
        return on ? <rect key={i} x={248 + x * 15} y={74 + y * 15} width="12" height="12" rx="2" fill={K} /> : null;
      })}
      <circle cx="298" cy="124" r="11" fill={O} stroke={K} strokeWidth="1.8" />
      <rect x="248" y="200" width="100" height="26" rx="13" fill={O} stroke={K} strokeWidth="1.8" />
      <text x="298" y="217" textAnchor="middle" fontFamily="sans-serif" fontWeight="800" fontSize="12" fill={K}>Scan to order</text>
    </>
  ),
  care: (
    <>
      <path d="M170 46L252 76v54c0 40-34 66-82 84-48-18-82-44-82-84V76z" fill={K} transform="translate(6 6)" />
      <path d="M170 46L252 76v54c0 40-34 66-82 84-48-18-82-44-82-84V76z" fill={O} stroke={K} strokeWidth={SW} strokeLinejoin="round" />
      <path d="M138 130l22 22 40-46" fill="none" stroke={K} strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="262" y="44" width="118" height="140" rx="12" fill={W} stroke={K} strokeWidth={SW} />
      {["Backups", "Security", "Updates", "Uptime"].map((l, i) => (
        <g key={l}>
          <rect x="274" y={58 + i * 30} width="18" height="18" rx="5" fill={i === 3 ? C3 : O} stroke={K} strokeWidth="1.5" />
          {i < 3 && <path d={`M278 ${67 + i * 30}l4 4 6-8`} fill="none" stroke={K} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />}
          <text x="300" y={72 + i * 30} fontFamily="sans-serif" fontWeight="700" fontSize="13" fill={K}>{l}</text>
        </g>
      ))}
    </>
  ),
};

export function ProductArt({ variant }) {
  return (
    <svg viewBox="0 0 400 250" role="img" aria-label="Product preview" className="art-svg">
      <rect width="400" height="250" fill={C2} />
      <circle cx="350" cy="30" r="70" fill={O} opacity=".18" />
      {productScenes[variant] || productScenes.store}
    </svg>
  );
}

/* ─────────────  PROJECTS  ───────────── */

export function ProjectArt({ variant, accent = O }) {
  const a = accent;
  const scene = {
    commerce: (
      <>
        <Browser x={44} y={40} w={290} h={220}>
          <rect x="14" y="34" width="262" height="76" rx="8" fill={a} stroke={K} strokeWidth="1.5" />
          <rect x="30" y="48" width="100" height="10" rx="5" fill={K} />
          <rect x="30" y="64" width="72" height="10" rx="5" fill={K} />
          <rect x="30" y="84" width="46" height="16" rx="8" fill={C} stroke={K} strokeWidth="1.3" />
          <rect x="176" y="46" width="78" height="52" rx="7" fill={C} stroke={K} strokeWidth="1.4" />
          <rect x="190" y="74" width="50" height="16" rx="4" fill={K} />
          <rect x="196" y="56" width="38" height="20" rx="10" fill={a} />
          {[0, 1, 2, 3].map((i) => (
            <g key={i}>
              <rect x={14 + i * 66} y="122" width="58" height="82" rx="6" fill={C} stroke={K} strokeWidth="1.3" />
              <rect x={20 + i * 66} y="128" width="46" height="40" rx="4" fill={[C3, a, K, C2][i]} />
              <rect x={20 + i * 66} y="176" width="30" height="5" rx="2.5" fill={K} />
              <rect x={20 + i * 66} y="187" width="20" height="5" rx="2.5" fill={a} />
            </g>
          ))}
        </Browser>
        <rect x="316" y="196" width="66" height="44" rx="12" fill={K} />
        <text x="349" y="216" textAnchor="middle" fontFamily="sans-serif" fontWeight="800" fontSize="15" fill={a}>+212%</text>
        <text x="349" y="231" textAnchor="middle" fontFamily="sans-serif" fontWeight="600" fontSize="8.5" fill={C}>revenue</text>
      </>
    ),
    dashboard: (
      <>
        <Browser x={36} y={36} w={314} h={228} fill={K}>
          <rect x="0" y="22" width="50" height="206" fill="#1a1a1a" />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x="12" y={40 + i * 24} width="26" height="8" rx="4" fill={i === 0 ? a : "#555"} />
          ))}
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={62 + i * 82} y="34" width="74" height="44" rx="7" fill="#333" />
              <rect x={70 + i * 82} y="43" width="30" height="5" rx="2.5" fill="#777" />
              <rect x={70 + i * 82} y="56" width="48" height="12" rx="3" fill={i === 0 ? a : C} />
            </g>
          ))}
          <rect x="62" y="88" width="190" height="122" rx="7" fill="#333" />
          <path d="M72 190l30-30 24 14 36-48 28 18 40-46v92H72z" fill={a} opacity=".28" />
          <path d="M72 190l30-30 24 14 36-48 28 18 40-46" fill="none" stroke={a} strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="260" y="88" width="46" height="122" rx="7" fill="#333" />
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x="268" y={100 + i * 26} width={[30, 22, 26, 14][i]} height="8" rx="4" fill={i === 0 ? a : "#777"} />
          ))}
        </Browser>
      </>
    ),
    booking: (
      <>
        <Browser x={40} y={40} w={280} h={218}>
          <rect x="14" y="34" width="148" height="162" rx="8" fill={C} stroke={K} strokeWidth="1.4" />
          {Array.from({ length: 28 }).map((_, i) => (
            <rect key={i} x={22 + (i % 7) * 19} y={64 + Math.floor(i / 7) * 28} width="14" height="20" rx="4" fill={i === 11 ? a : i % 5 === 0 ? C3 : W} stroke={K} strokeWidth="1" />
          ))}
          <rect x="22" y="44" width="60" height="8" rx="4" fill={K} />
          <rect x="176" y="34" width="94" height="72" rx="8" fill={W} stroke={K} strokeWidth="1.4" />
          <circle cx="198" cy="58" r="12" fill={a} stroke={K} strokeWidth="1.3" />
          <rect x="216" y="50" width="44" height="6" rx="3" fill={K} />
          <rect x="216" y="62" width="30" height="5" rx="2.5" fill={C3} />
          <rect x="186" y="82" width="74" height="16" rx="8" fill={a} stroke={K} strokeWidth="1.3" />
          <rect x="176" y="114" width="94" height="82" rx="8" fill={K} />
          <path d="M186 178l18-18 14 9 22-26 20 12" fill="none" stroke={a} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </Browser>
        <circle cx="344" cy="82" r="28" fill={W} stroke={K} strokeWidth={SW} />
        <path d="M332 82l9 9 16-18" fill="none" stroke={a} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),
    landing: (
      <>
        <Browser x={36} y={38} w={320} h={224}>
          <rect x="0" y="22" width="320" height="130" fill={a} opacity=".22" />
          <circle cx="240" cy="68" r="22" fill={C} stroke={K} strokeWidth="1.5" />
          <path d="M0 152L60 90l40 40 52-62 66 84z" fill={K} />
          <path d="M120 152l58-48 54 48z" fill={a} stroke={K} strokeWidth="1.4" />
          <rect x="22" y="38" width="108" height="11" rx="5.5" fill={K} />
          <rect x="22" y="56" width="78" height="11" rx="5.5" fill={K} />
          <rect x="24" y="130" width="272" height="42" rx="21" fill={W} stroke={K} strokeWidth="1.6" />
          <rect x="40" y="147" width="46" height="7" rx="3.5" fill={C3} />
          <rect x="110" y="147" width="46" height="7" rx="3.5" fill={C3} />
          <rect x="180" y="147" width="46" height="7" rx="3.5" fill={C3} />
          <rect x="240" y="138" width="48" height="26" rx="13" fill={a} stroke={K} strokeWidth="1.4" />
          {[0, 1, 2].map((i) => (
            <rect key={i} x={22 + i * 100} y="184" width="88" height="26" rx="6" fill={C2} stroke={K} strokeWidth="1.2" />
          ))}
        </Browser>
      </>
    ),
    learning: (
      <>
        <Browser x={36} y={38} w={320} h={226}>
          <rect x="14" y="34" width="196" height="118" rx="8" fill={K} />
          <circle cx="112" cy="90" r="24" fill={a} />
          <path d="M104 78l22 12-22 12z" fill={W} />
          <rect x="24" y="136" width="176" height="5" rx="2.5" fill="#555" />
          <rect x="24" y="136" width="96" height="5" rx="2.5" fill={a} />
          <rect x="222" y="34" width="84" height="170" rx="8" fill={C} stroke={K} strokeWidth="1.4" />
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i}>
              <circle cx="236" cy={52 + i * 30} r="7" fill={i < 2 ? a : W} stroke={K} strokeWidth="1.3" />
              <rect x="250" y={47 + i * 30} width="44" height="5" rx="2.5" fill={K} />
              <rect x="250" y={57 + i * 30} width="30" height="4" rx="2" fill={C3} />
            </g>
          ))}
          <rect x="14" y="164" width="196" height="40" rx="8" fill={W} stroke={K} strokeWidth="1.3" />
          <rect x="24" y="176" width="90" height="6" rx="3" fill={K} />
          <rect x="24" y="188" width="64" height="5" rx="2.5" fill={C3} />
        </Browser>
      </>
    ),
    app: (
      <>
        <Browser x={36} y={40} w={250} h={190} shadow>
          <rect x="14" y="34" width="222" height="52" rx="8" fill={a} stroke={K} strokeWidth="1.4" />
          <rect x="26" y="46" width="90" height="9" rx="4.5" fill={K} />
          <rect x="26" y="62" width="60" height="7" rx="3.5" fill={C} />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={14 + i * 76} y="98" width="68" height="76" rx="7" fill={C} stroke={K} strokeWidth="1.3" />
              <circle cx={48 + i * 76} cy="128" r="18" fill={[C3, a, K][i]} stroke={K} strokeWidth="1.3" />
              <rect x={22 + i * 76} y="154" width="36" height="5" rx="2.5" fill={K} />
            </g>
          ))}
        </Browser>
        <g transform="rotate(5 320 160)">
          <rect x="268" y="66" width="100" height="200" rx="20" fill={K} />
          <rect x="275" y="77" width="86" height="178" rx="14" fill={C} />
          <rect x="296" y="70" width="44" height="5" rx="2.5" fill="#555" />
          <rect x="284" y="90" width="50" height="8" rx="4" fill={K} />
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x="284" y={108 + i * 34} width="68" height="28" rx="8" fill={W} stroke={K} strokeWidth="1.2" />
              <circle cx="298" cy={122 + i * 34} r="7" fill={i === 1 ? a : C3} />
              <rect x="310" y={118 + i * 34} width="30" height="5" rx="2.5" fill={K} />
            </g>
          ))}
          <rect x="284" y="214" width="68" height="28" rx="14" fill={a} stroke={K} strokeWidth="1.4" />
        </g>
      </>
    ),
  }[variant];

  return (
    <svg viewBox="0 0 400 300" role="img" aria-label="Project preview" className="art-svg">
      <rect width="400" height="300" fill={C2} />
      <rect width="400" height="300" fill={a} opacity=".1" />
      <circle cx="350" cy="40" r="90" fill={a} opacity=".16" />
      {scene}
    </svg>
  );
}

/* ─────────────  TECH STACK (isometric)  ───────────── */

function Slab({ cx, cy, w, h, d, top, left, right }) {
  const t = `${cx},${cy - h / 2} ${cx + w / 2},${cy} ${cx},${cy + h / 2} ${cx - w / 2},${cy}`;
  const l = `${cx - w / 2},${cy} ${cx},${cy + h / 2} ${cx},${cy + h / 2 + d} ${cx - w / 2},${cy + d}`;
  const r = `${cx + w / 2},${cy} ${cx},${cy + h / 2} ${cx},${cy + h / 2 + d} ${cx + w / 2},${cy + d}`;
  return (
    <g strokeLinejoin="round" stroke={K} strokeWidth={SW}>
      <polygon points={l} fill={left} />
      <polygon points={r} fill={right} />
      <polygon points={t} fill={top} />
    </g>
  );
}

export function TechStackArt() {
  const layers = [
    { label: "Design", sub: "Figma, prototypes", top: C, left: C3, right: C2 },
    { label: "Front end", sub: "Next.js, React", top: O, left: "#d94f12", right: "#ec5c1d" },
    { label: "Back end", sub: "Node.js, APIs", top: "#3a3a3a", left: "#1a1a1a", right: K },
    { label: "Database", sub: "PostgreSQL, MongoDB", top: W, left: C3, right: C2 },
    { label: "Cloud", sub: "AWS, Vercel, CDN", top: O, left: "#d94f12", right: "#ec5c1d" },
  ];
  const cx = 150;
  return (
    <svg viewBox="0 0 500 420" role="img" aria-label="The layers of a modern website" className="art-svg">
      <ellipse cx={cx} cy="360" rx="130" ry="26" fill={K} opacity=".08" />
      {layers
        .map((l, i) => ({ ...l, i, cy: 78 + i * 64 }))
        .reverse()
        .map((l) => (
          <g key={l.label}>
            <Slab cx={cx} cy={l.cy} w={236} h={118} d={16} top={l.top} left={l.left} right={l.right} />
            <path d={`M${cx + 124} ${l.cy + 6}H${cx + 160}`} stroke={K} strokeWidth="1.6" strokeDasharray="3 3" />
            <circle cx={cx + 124} cy={l.cy + 6} r="3.5" fill={O} stroke={K} strokeWidth="1.5" />
            <text x={cx + 168} y={l.cy + 5} fontFamily="'Plus Jakarta Sans Variable', 'Plus Jakarta Sans', sans-serif" fontWeight="800" fontSize="17" fill={K}>
              {l.label}
            </text>
            <text x={cx + 168} y={l.cy + 22} fontFamily="'Plus Jakarta Sans Variable', 'Plus Jakarta Sans', sans-serif" fontSize="12" fill="#6b645a">
              {l.sub}
            </text>
          </g>
        ))}
    </svg>
  );
}

/* ─────────────  ABOUT WORKSPACE  ───────────── */

export function WorkspaceArt() {
  return (
    <svg viewBox="0 0 480 380" role="img" aria-label="A web studio desk with a monitor, lamp and plant" className="art-svg">
      <rect width="480" height="380" fill={C2} />
      <rect x="296" y="30" width="150" height="170" rx="10" fill={C} stroke={K} strokeWidth={SW} />
      <path d="M371 30v170M296 115h150" stroke={K} strokeWidth={SW} />
      <circle cx="404" cy="152" r="34" fill={O} />
      <path d="M296 200v-30c30-20 54-8 74-26 24 8 52 6 76 26v30z" fill={K} opacity=".9" />
      <rect x="296" y="30" width="150" height="170" rx="10" fill="none" stroke={K} strokeWidth={SW} />
      <rect x="30" y="296" width="420" height="16" rx="4" fill={K} />
      <rect x="60" y="312" width="12" height="60" fill={K} />
      <rect x="408" y="312" width="12" height="60" fill={K} />
      <rect x="86" y="86" width="210" height="146" rx="10" fill={K} transform="translate(7 7)" />
      <rect x="86" y="86" width="210" height="146" rx="10" fill={W} stroke={K} strokeWidth={SW} />
      <rect x="100" y="100" width="182" height="118" rx="5" fill={K} />
      <rect x="112" y="114" width="40" height="6" rx="3" fill={O} />
      <rect x="158" y="114" width="70" height="6" rx="3" fill="#aaa" />
      <rect x="124" y="128" width="84" height="6" rx="3" fill="#777" />
      <rect x="124" y="142" width="56" height="6" rx="3" fill={O} />
      <rect x="186" y="142" width="64" height="6" rx="3" fill="#aaa" />
      <rect x="124" y="156" width="96" height="6" rx="3" fill="#777" />
      <rect x="112" y="170" width="28" height="6" rx="3" fill={O} />
      <rect x="112" y="186" width="56" height="6" rx="3" fill="#aaa" />
      <path d="M180 232h30l10 64h-50z" fill={K} />
      <rect x="150" y="288" width="90" height="10" rx="5" fill={K} />
      <rect x="330" y="262" width="34" height="34" rx="6" fill={W} stroke={K} strokeWidth={SW} />
      <path d="M364 272h8a6 6 0 010 14h-8" fill="none" stroke={K} strokeWidth={SW} />
      <path d="M340 252c-4-8 4-10 0-18M352 252c-4-8 4-10 0-18" fill="none" stroke={K} strokeWidth="2" strokeLinecap="round" />
      <path d="M412 296h38l-6 -44h-26z" fill={O} stroke={K} strokeWidth={SW} strokeLinejoin="round" />
      <path d="M431 252c-14-14-20-34-14-52M431 252c10-18 26-24 38-22M431 252c-2-22 4-38 18-52" fill="none" stroke={K} strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="418" cy="206" rx="10" ry="16" fill="#3a3a3a" transform="rotate(-24 418 206)" />
      <ellipse cx="456" cy="230" rx="9" ry="14" fill="#3a3a3a" transform="rotate(62 456 230)" />
      <ellipse cx="450" cy="204" rx="9" ry="16" fill={O} transform="rotate(14 450 204)" />
      <rect x="40" y="250" width="50" height="46" fill={C} stroke={K} strokeWidth={SW} />
      <rect x="40" y="228" width="50" height="22" fill={O} stroke={K} strokeWidth={SW} />
      <rect x="48" y="206" width="50" height="22" fill={W} stroke={K} strokeWidth={SW} />
    </svg>
  );
}

/* ─────────────  BLOG COVERS  ───────────── */

export function BlogArt({ index = 0 }) {
  const i = index % 6;
  const bgs = ["#f3e9df", "#e8ebf1", C3, W, "#efe6dc", "#e3e7ee"];
  const bg = bgs[i];
  const shapes = [
    <>
      <circle cx="300" cy="80" r="120" fill="#ffd9c2" />
      <circle cx="300" cy="80" r="70" fill={C} />
      <path d="M0 200c80-60 140 20 220-20s120-10 180-40v100H0z" fill={C} stroke={K} strokeWidth={SW} />
    </>,
    <>
      {[0, 1, 2, 3, 4, 5, 6].map((k) => (
        <rect key={k} x={40 + k * 46} y={170 - k * 20} width="30" height={70 + k * 20} rx="4" fill={k === 5 ? O : "#3a3a3a"} stroke={O} strokeWidth="1.5" />
      ))}
      <circle cx="90" cy="60" r="28" fill={O} />
    </>,
    <>
      <circle cx="200" cy="130" r="86" fill="none" stroke={K} strokeWidth="14" />
      <path d="M200 130L200 44" stroke={O} strokeWidth="14" strokeLinecap="round" />
      <path d="M200 130L262 160" stroke={K} strokeWidth="14" strokeLinecap="round" />
      <circle cx="200" cy="130" r="12" fill={O} />
    </>,
    <>
      <rect x="60" y="48" width="130" height="150" rx="14" fill={C} stroke={K} strokeWidth={SW} />
      <rect x="210" y="70" width="130" height="150" rx="14" fill={O} stroke={K} strokeWidth={SW} />
      <path d="M80 90h90M80 112h70M80 134h80M230 112h90M230 134h60" stroke={K} strokeWidth="6" strokeLinecap="round" />
    </>,
    <>
      <circle cx="200" cy="120" r="84" fill={C} stroke={K} strokeWidth={SW} />
      <path d="M116 120h168M200 36c-44 50-44 118 0 168M200 36c44 50 44 118 0 168" fill="none" stroke={K} strokeWidth="2.4" />
      <circle cx="270" cy="82" r="10" fill={O} stroke={K} strokeWidth="2" />
      <circle cx="158" cy="150" r="10" fill={K} />
    </>,
    <>
      <rect x="70" y="44" width="260" height="150" rx="14" fill="none" stroke={O} strokeWidth="3" />
      <rect x="92" y="66" width="90" height="18" rx="9" fill={O} />
      <rect x="92" y="98" width="200" height="8" rx="4" fill="#666" />
      <rect x="92" y="116" width="150" height="8" rx="4" fill="#666" />
      <rect x="92" y="150" width="64" height="26" rx="13" fill={C} />
      <circle cx="320" cy="44" r="22" fill={C} />
      <path d="M311 44l7 7 12-14" fill="none" stroke={K} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </>,
  ];
  return (
    <svg viewBox="0 0 400 240" role="img" aria-label="Article cover illustration" className="art-svg" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="240" fill={bg} />
      {shapes[i]}
    </svg>
  );
}

/* A girl coding at her desk (About page, "Who we are") */
export function GirlCodingArt() {
  const skin = "#f1c2a0";
  const hair = "#2b1d18";
  return (
    <svg viewBox="0 0 480 380" role="img" aria-label="A developer coding on a computer at her desk" className="art-svg">
      <rect width="480" height="380" fill="#fff0e6" />
      <circle cx="318" cy="150" r="126" fill="#ffdcc4" />
      <circle cx="318" cy="150" r="84" fill="none" stroke="#fd6d1e" strokeOpacity=".35" strokeWidth="2" strokeDasharray="5 8" />
      {/* shelf + frame */}
      <rect x="360" y="30" width="86" height="60" rx="6" fill="#fff" stroke="#222" strokeWidth="3" />
      <path d="M372 80l20-24 14 14 12-12 16 22z" fill="#fd6d1e" />
      <circle cx="424" cy="48" r="6" fill="#222" />
      {/* desk */}
      <rect x="28" y="296" width="424" height="14" rx="4" fill="#222" />
      <rect x="58" y="310" width="12" height="62" fill="#222" />
      <rect x="410" y="310" width="12" height="62" fill="#222" />
      {/* monitor */}
      <rect x="196" y="62" width="244" height="168" rx="12" fill="#222" />
      <rect x="208" y="74" width="220" height="144" rx="6" fill="#1b1f2b" />
      <rect x="222" y="90" width="44" height="7" rx="3.5" fill="#fd6d1e" />
      <rect x="272" y="90" width="84" height="7" rx="3.5" fill="#8fa0c8" />
      <rect x="236" y="106" width="100" height="7" rx="3.5" fill="#e5e9f5" />
      <rect x="236" y="122" width="62" height="7" rx="3.5" fill="#fd6d1e" />
      <rect x="304" y="122" width="76" height="7" rx="3.5" fill="#8fa0c8" />
      <rect x="236" y="138" width="116" height="7" rx="3.5" fill="#e5e9f5" />
      <rect x="236" y="154" width="48" height="7" rx="3.5" fill="#8fa0c8" />
      <rect x="290" y="154" width="70" height="7" rx="3.5" fill="#fd6d1e" />
      <rect x="222" y="170" width="30" height="7" rx="3.5" fill="#fd6d1e" />
      <rect x="222" y="186" width="70" height="7" rx="3.5" fill="#e5e9f5" />
      <rect x="384" y="188" width="30" height="20" rx="4" fill="#fd6d1e" />
      <path d="M392 198l5 4 8-9" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M298 230h34l8 50h-50z" fill="#222" />
      <rect x="276" y="278" width="78" height="10" rx="5" fill="#222" />
      {/* keyboard + mug */}
      <rect x="196" y="284" width="96" height="12" rx="4" fill="#fff" stroke="#222" strokeWidth="3" />
      <rect x="384" y="266" width="26" height="30" rx="6" fill="#fff" stroke="#222" strokeWidth="3" />
      <path d="M410 274h8a7 7 0 010 14h-8" fill="none" stroke="#222" strokeWidth="3" />
      {/* plant */}
      <rect x="426" y="270" width="22" height="26" rx="4" fill="#fd6d1e" />
      <path d="M437 270c-14-14-16-30-8-46 10 10 12 26 8 46zM437 270c10-10 20-22 16-40-12 8-18 22-16 40z" fill="#2f9e5b" />
      {/* chair */}
      <rect x="44" y="150" width="40" height="120" rx="18" fill="#3b3f4a" />
      <rect x="58" y="268" width="14" height="60" fill="#222" />
      <path d="M26 346h70M40 346l-6 14M82 346l6 14" stroke="#222" strokeWidth="5" strokeLinecap="round" />
      {/* legs */}
      <path d="M92 292h86c14 0 16 22 2 22h-66v46h-22z" fill="#3a4a73" />
      <rect x="104" y="356" width="34" height="12" rx="6" fill="#222" />
      <path d="M170 312h30v10h-30z" fill="#3a4a73" />
      {/* body */}
      <path d="M74 296c-6-52 6-96 44-100 30-2 46 26 46 62l-2 38z" fill="#fd6d1e" />
      {/* arm to keyboard */}
      <path d="M146 232c26 8 44 26 54 50l-14 8c-14-16-30-28-52-34z" fill="#fd6d1e" />
      <path d="M186 278c8 2 14 6 18 10l-6 8c-6-4-12-6-18-6z" fill={skin} />
      {/* head */}
      <rect x="118" y="178" width="20" height="26" rx="8" fill={skin} />
      <circle cx="128" cy="156" r="30" fill={skin} />
      {/* hair + ponytail */}
      <path d="M96 156c-4-36 24-52 46-44 20 8 22 30 14 44-8-18-26-24-40-18-10 6-14 16-20 18z" fill={hair} />
      <path d="M100 150c-18 4-24 26-14 44 6-10 8-20 12-28z" fill={hair} />
      <circle cx="98" cy="158" r="10" fill={hair} />
      {/* headphones */}
      <path d="M100 150c0-28 18-40 36-38 16 2 26 14 26 30" fill="none" stroke="#222" strokeWidth="6" strokeLinecap="round" />
      <rect x="142" y="140" width="14" height="28" rx="7" fill="#fd6d1e" stroke="#222" strokeWidth="3" />
      {/* face detail */}
      <circle cx="148" cy="156" r="2.4" fill="#222" />
      <path d="M146 170c4 3 8 3 11 0" fill="none" stroke="#b5613a" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
