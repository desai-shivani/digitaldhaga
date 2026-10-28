import { site } from "@/lib/site";

export default function CallButton() {
  return (
    <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="call-float" aria-label={`Call us on ${site.phone}`}>
      <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" focusable="false">
        <path
          fill="#fff"
          d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1z"
        />
      </svg>
    </a>
  );
}
