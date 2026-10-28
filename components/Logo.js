// Digital Dhaga logo: image only (public/images/logo.png), no text beside it.
export function LogoMark({ size = 54 }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/images/logo.png" alt="Digital Dhaga" width={Math.round(size * 0.72)} height={size} className="logo-mark" />
  );
}

export default function Logo() {
  return (
    <span className="logo">
      <LogoMark />
    </span>
  );
}
