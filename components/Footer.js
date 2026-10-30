import Link from "next/link";
import Icon from "./Icon";
import Logo from "./Logo";
import { services } from "@/lib/data";
import { site } from "@/lib/site";

const socialIcon = { LinkedIn: "linkedin", Instagram: "instagram", Facebook: "facebook", X: "x" };

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-art" aria-hidden="true" />
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href="/" className="brand" aria-label={`${site.name} home`}>
            <Logo />
          </Link>
          <p>{site.description}</p>
          <ul className="social" aria-label="Social media">
            {site.social.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <Icon name={socialIcon[s.label] || "globe"} size={18} strokeWidth={1.9} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Company">
          <h3>Company</h3>
          <ul className="footer-links">
            <li><Link href="/about">About us</Link></li>
            <li><Link href="/our-work">Our work</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        <nav aria-label="Services">
          <h3>Services</h3>
          <ul className="footer-links">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-contact-card">
          <h3>Talk to us</h3>
          <ul className="footer-contact">
            <li>
              <span className="fc-icon"><Icon name="mail" size={18} /></span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <span className="fc-icon"><Icon name="call" size={18} /></span>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </li>
            <li>
              <span className="fc-icon"><Icon name="pin" size={18} /></span>
              <span>{site.address}</span>
            </li>
            <li>
              <span className="fc-icon"><Icon name="clock" size={18} /></span>
              <span>{site.hours}</span>
            </li>
            <li>
              <span className="fc-icon"><Icon name="globe" size={18} /></span>
              <span>Serving clients worldwide</span>
            </li>
          </ul>
          <Link href="/contact" className="btn btn-primary footer-btn">
            Get a free quote <Icon name="arrow" size={16} />
          </Link>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>Websites, stores and apps for businesses in every time zone.</p>
      </div>
    </footer>
  );
}
