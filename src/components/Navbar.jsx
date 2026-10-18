import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/ceflogo.png";
import { useTheme } from "../theme";

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const logoClicksRef = useRef({ count: 0, lastTime: 0 });

  // 1. Secret Hotkey: Ctrl+Shift+A (or Cmd+Shift+A)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === "A" || e.key === "a")) {
        e.preventDefault();
        navigate("/admin");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigate]);

  // 2. Secret Logo Triple-Click Handler
  const handleLogoClick = (e) => {
    const now = Date.now();
    if (now - logoClicksRef.current.lastTime < 600) {
      logoClicksRef.current.count += 1;
    } else {
      logoClicksRef.current.count = 1;
    }
    logoClicksRef.current.lastTime = now;

    if (logoClicksRef.current.count >= 3) {
      e.preventDefault();
      logoClicksRef.current.count = 0;
      navigate("/admin");
    }
  };

  const menuItems = [
    { label: "About", id: "about" },
    { label: "Events", id: "events", isPage: true },
    { label: "Team", id: "team", isPage: true },
    { label: "Competitions", id: "events#competitions", isPage: true },
    { label: "Magazine", id: "magazine", isPage: true },
    { label: "Study Material", id: "study-material", isPage: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrollProgress(totalScroll > 0 ? currentScroll / totalScroll : 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Scroll Progress Indicator */}
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-[#8C1515] dark:bg-[#e54848] transition-transform duration-75"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />

      <header
        data-site-header="true"
        className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl"
      >
        {/* Stanford CEE Cardinal Top Brand Bar */}
        <div className="bg-[#8C1515] dark:bg-[#820000] text-white py-1 px-4 sm:px-6 lg:px-8 flex items-center justify-between text-[11px] font-mono tracking-wider uppercase border-b border-[#731010]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            <span className="font-bold tracking-widest">CIVIL &amp; ENVIRONMENTAL ENGINEERING</span>
          </div>
          <span className="hidden sm:inline text-white/80 text-[10px] tracking-widest font-mono">
            IIT DELHI // DEPT. EST. 1961
          </span>
        </div>

        <div className="mx-auto flex h-16 max-w-[96rem] items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          {/* Logo Brand */}
          <NavLink
            to="/"
            onClick={handleLogoClick}
            className="group flex min-w-0 items-center gap-3 no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-cardinal rounded-full"
            aria-label="Civil Engineering Forum IIT Delhi, home"
          >
            <img
              src={logo}
              alt=""
              width={36}
              height={36}
              className="shrink-0 rounded-lg transition-transform duration-200 group-hover:rotate-6 shadow-sm"
            />
            <span className="leading-none">
              <span className="block font-display text-xl font-extrabold tracking-tight text-foreground group-hover:text-brand-cardinal transition-colors">
                CEF
              </span>
              <span className="mt-0.5 block font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-muted">
                IIT Delhi
              </span>
            </span>
          </NavLink>

          {/* Desktop Navigation Links */}
          <nav className="hidden items-center self-stretch lg:flex gap-1" aria-label="Primary navigation">
            {menuItems.map((item) => {
              const to = item.isPage ? (item.id.startsWith("events#") ? `/${item.id}` : `/${item.id}`) : `/#${item.id}`;
              const isActive = location.pathname === `/${item.id}`;

              return (
                <NavLink
                  key={item.id}
                  to={to}
                  className={`px-3.5 py-1.5 text-sm font-semibold transition-colors no-underline rounded-full ${
                    isActive
                      ? "text-brand-cardinal font-bold bg-brand-cardinal/10 dark:bg-brand-cardinal/20"
                      : "text-muted hover:text-brand-cardinal hover:bg-muted/5"
                  }`}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Action Area */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:bg-muted/10 active:scale-95"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Pill CTA Button */}
            <a
              className="pill-cta text-xs py-2 px-5"
              href="#contact-us"
            >
              <span className="sm:hidden">Join</span>
              <span className="hidden sm:inline">Join Forum</span>
            </a>

            {/* Mobile Navigation Toggle */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground lg:hidden active:scale-95"
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMenuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <>
                    <path d="M4 6h16" />
                    <path d="M4 12h16" />
                    <path d="M4 18h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMenuOpen && (
          <div className="border-b border-border bg-background px-4 py-6 lg:hidden">
            <nav className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.isPage ? `/${item.id}` : `/#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-3 py-2 text-base font-semibold text-foreground no-underline hover:text-brand-cardinal"
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="pt-4 border-t border-border flex justify-between items-center">
                <span className="font-mono text-xs text-muted">Theme</span>
                <button
                  onClick={toggleTheme}
                  className="px-4 py-1.5 rounded-full border border-border text-xs font-semibold"
                >
                  {isDark ? "Light Mode" : "Dark Mode"}
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
