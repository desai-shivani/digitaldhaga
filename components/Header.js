"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import Logo from "./Logo";
import { nav, services } from "@/lib/data";
import { site } from "@/lib/site";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close everything on navigation
  useEffect(() => {
    setMobileOpen(false);
    setMenuOpen(false);
    setMobileServices(false);
  }, [pathname]);

  // lock page scroll behind the mobile menu.
  // Lock <html>, not <body>: the body has overflow-x: clip, so overflow: hidden on it would turn it into
  // its own scroll container and the sticky header would scroll away with the page.
  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      root.style.overflow = "";
    };
  }, [mobileOpen]);

  // escape key + click outside for the desktop dropdown
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setMobileOpen(false);
      }
    };
    const onDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, []);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  const openedAt = useRef(0);
  const openMenu = () => {
    clearTimeout(closeTimer.current);
    if (!menuOpen) openedAt.current = Date.now();
    setMenuOpen(true);
  };
  // A click right after a hover-open (or touch tap) should keep the menu open, not flip it shut.
  const toggleMenu = () => {
    if (Date.now() - openedAt.current < 500) return;
    setMenuOpen((v) => !v);
  };
  const closeMenuSoon = () => {
    clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMenuOpen(false), 260);
  };
  // Clicking a link to the page you are already on does not navigate, so close the menus
  // ourselves and scroll back to the top so the click visibly does something.
  const goTo = (href) => (e) => {
    setMenuOpen(false);
    setMobileOpen(false);
    if (pathname === href) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <p>Planning a website or online store? Get a consultation and a fixed quote.</p>
          <Link href="/contact" className="topbar-link">
            Book a call
          </Link>
        </div>
      </div>

      <header className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label={`${site.name} home`} onClick={goTo("/")}>
            <Logo />
          </Link>

          <nav className="desktop-nav" aria-label="Main" ref={navRef}>
            <ul>
              {nav.map((item) =>
                item.dropdown ? (
                  <li
                    key={item.href}
                    className={`has-menu${menuOpen ? " open" : ""}`}
                    onMouseEnter={openMenu}
                    onMouseLeave={closeMenuSoon}
                  >
                    <Link href={item.href} className={`nav-link${isActive(item.href) ? " active" : ""}`}>
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      className="menu-toggle"
                      aria-label="Show services menu"
                      aria-expanded={menuOpen}
                      aria-controls="services-menu"
                      onClick={toggleMenu}
                    >
                      <Icon name="chevron" size={16} strokeWidth={2.2} />
                    </button>

                    <div id="services-menu" className="mega" role="menu" hidden={!menuOpen}>
                      <div className="mega-grid">
                        {services.map((s) => (
                          <Link key={s.slug} href={`/services/${s.slug}`} className="mega-item" role="menuitem" onClick={goTo(`/services/${s.slug}`)}>
                            <span className="mega-icon">
                              <Icon name={s.icon} size={20} />
                            </span>
                            <span>
                              <strong>{s.title}</strong>
                              <small>{s.short}</small>
                            </span>
                          </Link>
                        ))}
                      </div>
                      <div className="mega-foot">
                        <span>Not sure what you need? We will help you pick.</span>
                        <Link href="/services" className="link-arrow" onClick={goTo("/services")}>
                          View all services <Icon name="arrow" size={16} />
                        </Link>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link href={item.href} className={`nav-link${isActive(item.href) ? " active" : ""}`}>
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="header-cta">
            <Link href="/contact" className="btn btn-dark btn-sm">
              Get a quote
            </Link>
          </div>

          <button
            type="button"
            className="burger"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Icon name={mobileOpen ? "close" : "menu"} size={26} />
          </button>
        </div>

        <div
          id="mobile-nav"
          className={`mobile-nav${mobileOpen ? " open" : ""}`}
          aria-hidden={!mobileOpen}
          // close the menu when any link is tapped (also when it points to the page you are already on)
          onClick={(e) => {
            const a = e.target.closest("a");
            if (!a) return;
            setMobileOpen(false);
            // tapping the page you are already on: scroll to the top instead of doing nothing
            if (a.getAttribute("href") === pathname) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
        >
          <nav aria-label="Mobile">
            <ul>
              {nav.map((item) =>
                item.dropdown ? (
                  <li key={item.href}>
                    <div className="m-row">
                      <Link href={item.href} className={isActive(item.href) ? "active" : ""} tabIndex={mobileOpen ? 0 : -1}>
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        aria-label="Show services"
                        aria-expanded={mobileServices}
                        onClick={() => setMobileServices((v) => !v)}
                        tabIndex={mobileOpen ? 0 : -1}
                      >
                        <Icon name="chevron" size={22} />
                      </button>
                    </div>
                    <ul className={`m-sub${mobileServices ? " open" : ""}`}>
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link href={`/services/${s.slug}`} tabIndex={mobileOpen && mobileServices ? 0 : -1}>
                            <Icon name={s.icon} size={18} />
                            {s.title}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link href="/services" className="m-all" tabIndex={mobileOpen && mobileServices ? 0 : -1} onClick={goTo("/services")}>
                          View all services <Icon name="arrow" size={16} />
                        </Link>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <li key={item.href}>
                    <div className="m-row">
                      <Link href={item.href} className={isActive(item.href) ? "active" : ""} tabIndex={mobileOpen ? 0 : -1}>
                        {item.label}
                      </Link>
                    </div>
                  </li>
                )
              )}
            </ul>
          </nav>
          <Link href="/contact" className="btn btn-primary btn-block" tabIndex={mobileOpen ? 0 : -1}>
            Get a quote
          </Link>
          <p className="m-contact">
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        </div>
      </header>
    </>
  );
}
