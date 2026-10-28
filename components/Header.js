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
  const headerRef = useRef(null);
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

  // Lock page scroll behind the mobile menu.
  // Lock on <html>, not <body>: html has overflow-x: clip, so overflow on body would not
  // propagate to the viewport. The body would become its own scroll container and the
  // sticky header would scroll away (menu "breaks" when opened after scrolling down).
  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      root.style.overflow = "";
    };
  }, [mobileOpen]);

  // size the mobile panel to the space actually below the header (topbar may be scrolled away)
  useEffect(() => {
    if (!mobileOpen) return;
    const fit = () => {
      const h = headerRef.current;
      if (!h) return;
      const bottom = Math.max(0, h.getBoundingClientRect().bottom);
      h.style.setProperty("--mnav-max", `${Math.max(200, window.innerHeight - bottom)}px`);
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [mobileOpen]);

  // leave mobile mode cleanly if the viewport grows past the breakpoint
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1021px)");
    const onChange = (e) => {
      if (e.matches) setMobileOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

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
    closeTimer.current = setTimeout(() => setMenuOpen(false), 140);
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

      <header ref={headerRef} className={`site-header${scrolled ? " scrolled" : ""}`}>
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label={`${site.name} home`}>
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
                          <Link key={s.slug} href={`/services/${s.slug}`} className="mega-item" role="menuitem">
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
                        <Link href="/services" className="link-arrow">
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

        <div id="mobile-nav" className={`mobile-nav${mobileOpen ? " open" : ""}`} aria-hidden={!mobileOpen}>
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
                        <Icon name="chevron" size={18} />
                      </button>
                    </div>
                    <ul className={`m-sub${mobileServices ? " open" : ""}`}>
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link href={`/services/${s.slug}`} tabIndex={mobileOpen && mobileServices ? 0 : -1}>
                            <Icon name={s.icon} size={16} />
                            {s.title}
                          </Link>
                        </li>
                      ))}
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
