import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/ceflogo.png";
import { useTheme } from "../theme";

// Self-contained SVG Icons
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CrossIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const menuItems = [
    { label: "About", id: "about" },
    { label: "Team", id: "team" },
    { label: "Events", id: "events" },
    { label: "Competitions", id: "competitions", isPage: true },
    { label: "Guest Sessions", id: "guest-sessions", isPage: true },
    { label: "Magazine", id: "magazine", isPage: true },
    { label: "Study Material", id: "study-material", isPage: true },
    { label: "Alumni", id: "alumni" },
    { label: "Contact", id: "contact-us" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("about");
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isMenuOpen]);

  // Keep active item in sync with path and hash
  useEffect(() => {
    if (location.pathname === "/") {
      if (location.hash) {
        setActive(location.hash.replace("#", ""));
      } else {
        setActive("about");
      }
    } else {
      setActive(location.pathname.replace(/^\//, ""));
    }
  }, [location.pathname, location.hash]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 80;
    const y = el.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const handleNavClick = (e, item) => {
    if (!item.isPage && location.pathname === "/") {
      e.preventDefault();
      setActive(item.id);
      scrollToSection(item.id);
      window.history.pushState(null, "", `/#${item.id}`);
      if (isMenuOpen) setIsMenuOpen(false);
    } else if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-colors duration-200 ${
        scrolled
          ? "bg-white/85 dark:bg-[#080C14]/90 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-white/[0.08]"
          : "bg-white/40 dark:bg-[#080C14]/40 backdrop-blur-sm border-b border-slate-200/40 dark:border-white/[0.04]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 gap-4">
          {/* Logo & Department Brand */}
          <NavLink to="/" className="flex items-center gap-3 no-underline group flex-shrink-0">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 shadow-md ring-1 ring-slate-200 dark:ring-white/10 group-hover:ring-civil-amber transition-all">
              <img src={logo} alt="CEF IIT Delhi" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-sm tracking-tight text-slate-900 dark:text-slate-100 font-sans group-hover:text-civil-amber transition-colors">
                CEF IIT DELHI
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono tracking-wider uppercase mt-0.5">
                Dept. of Civil Engineering
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {menuItems.map((item) => {
              const to = item.isPage ? `/${item.id}` : `/#${item.id}`;
              const isActive = active === item.id;

              return (
                <NavLink
                  key={item.id}
                  to={to}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`relative px-2.5 py-1.5 rounded-md text-xs xl:text-sm font-medium transition-colors select-none no-underline ${
                    isActive
                      ? "text-slate-900 dark:text-slate-50 font-semibold"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-civil-amber rounded-full" />
                  )}
                </NavLink>
              );
            })}
          </div>

          {/* Action Center: Theme Toggle & Contact */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] border border-slate-200 dark:border-white/[0.08] transition-colors active:scale-95"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Department Conclave / Join CTA */}
            <a
              href="#contact-us"
              onClick={(e) => handleNavClick(e, { id: "contact-us" })}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider bg-civil-amber hover:bg-civil-amber-hover text-black shadow-sm transition-transform active:scale-95 no-underline"
            >
              Get in Touch
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open mobile menu"
              className="lg:hidden p-2 rounded-lg bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.08] text-slate-700 dark:text-slate-200 active:scale-95"
            >
              <MenuIcon />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          />

          <aside className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-[#0E1424] border-l border-slate-200 dark:border-white/[0.08] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <img src={logo} alt="CEF" className="w-8 h-8 rounded" />
                  <span className="font-bold text-sm text-slate-900 dark:text-slate-100">
                    CEF IIT Delhi
                  </span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                  className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.06] text-slate-700 dark:text-slate-300 active:scale-95"
                >
                  <CrossIcon />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="flex flex-col gap-1.5 mt-4">
                {menuItems.map((item) => {
                  const to = item.isPage ? `/${item.id}` : `/#${item.id}`;
                  const isActive = active === item.id;

                  return (
                    <NavLink
                      key={item.id}
                      to={to}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors no-underline ${
                        isActive
                          ? "bg-civil-amber/10 text-amber-700 dark:text-amber-400 font-semibold"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-white/[0.04]"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-civil-amber" />}
                    </NavLink>
                  );
                })}
              </nav>
            </div>

            {/* Drawer Footer with Theme Toggle */}
            <div className="pt-6 border-t border-slate-100 dark:border-white/[0.08] flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  Theme: {isDark ? "Dark Tectonic" : "Light Blueprint"}
                </span>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.06] border border-slate-200 dark:border-white/[0.08] text-xs font-medium"
                >
                  {isDark ? <SunIcon /> : <MoonIcon />}
                  <span>{isDark ? "Light" : "Dark"}</span>
                </button>
              </div>

              <a
                href="#contact-us"
                onClick={(e) => handleNavClick(e, { id: "contact-us" })}
                className="w-full text-center py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider bg-civil-amber text-black active:scale-98 transition-transform no-underline"
              >
                Contact Forum
              </a>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
