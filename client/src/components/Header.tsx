// ArgentinaPine.com — Header Component
// Design: Timber Atlas — deep forest green nav bar, amber accents, language switcher

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useLang } from "@/contexts/LangContext";
import { LANGUAGES, LANGUAGE_PATH_PREFIX, getPathForLang, Language, getLangFromPath } from "@/lib/i18n";
import { Menu, X, ChevronDown } from "lucide-react";

const LOGO_TEXT = "ArgentinaPine";
const LOGO_TLD = ".com";

export default function Header() {
  const { t, lang } = useLang();
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const prefix = LANGUAGE_PATH_PREFIX[lang];

  const navLinks = [
    { href: `${prefix}/`, label: t.nav.home },
    { href: `${prefix}/products`, label: t.nav.products },
    { href: `${prefix}/species`, label: t.nav.species },
    { href: `${prefix}/sourcing`, label: t.nav.sourcing },
    { href: `${prefix}/blog`, label: t.nav.blog },
    { href: `${prefix}/about`, label: t.nav.about },
  ];

  const currentLang = LANGUAGES.find(l => l.code === lang);

  return (
    <header
      style={{ backgroundColor: "var(--pine-green)" }}
      className="sticky top-0 z-50 shadow-lg"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`${prefix}/`} className="flex items-center gap-1 no-underline">
            <span
              className="font-display text-xl font-semibold tracking-tight"
              style={{ color: "#fff" }}
            >
              {LOGO_TEXT}
            </span>
            <span
              className="font-display text-xl font-light"
              style={{ color: "var(--amber-light)" }}
            >
              {LOGO_TLD}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium transition-colors duration-150 link-underline"
                style={{
                  color: location === link.href || (link.href !== `${prefix}/` && location.startsWith(link.href))
                    ? "var(--amber-light)"
                    : "rgba(255,255,255,0.85)",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Language switcher + CTA */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 font-mono-label text-xs transition-colors hover:opacity-100"
                style={{ color: "rgba(255,255,255,0.85)" }}
                aria-label="Switch language"
              >
                <span className="text-base leading-none">{currentLang?.flag}</span>
                <span className="tracking-wide">{currentLang?.nativeLabel ?? 'EN'}</span>
                <ChevronDown size={12} className={`transition-transform ${langOpen ? "rotate-180" : ""}`} />
              </button>
              {langOpen && (
                <div
                  className="absolute right-0 top-full mt-2 rounded shadow-xl border overflow-hidden z-50 min-w-[160px]"
                  style={{ backgroundColor: "var(--warm-white)", borderColor: "var(--border-warm)" }}
                >
                  {LANGUAGES.map(l => (
                    <Link
                      key={l.code}
                      href={getPathForLang(location, l.code as Language)}
                      onClick={() => setLangOpen(false)}
                      className="flex items-center gap-2.5 px-4 py-2.5 text-sm hover:bg-[var(--cream)] transition-colors"
                      style={{
                        color: l.code === lang ? "var(--pine-green)" : "var(--charcoal)",
                        fontWeight: l.code === lang ? 700 : 400,
                        fontFamily: "'Lato', sans-serif",
                      }}
                    >
                      <span>{l.flag}</span>
                      <span>{l.nativeLabel}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <Link
              href={`${prefix}/contact`}
              className="btn-amber-outline text-xs px-4 py-2"
              style={{ color: "var(--amber-light)", borderColor: "var(--amber-light)" }}
            >
              {t.nav.inquire}
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded"
            style={{ color: "#fff" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="lg:hidden border-t"
          style={{ backgroundColor: "var(--pine-green-dark)", borderColor: "rgba(255,255,255,0.1)" }}
        >
          <div className="container py-4 flex flex-col gap-1">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-2.5 px-3 rounded text-sm font-medium"
                style={{ color: "rgba(255,255,255,0.9)", fontFamily: "'Lato', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              <p className="font-mono-label text-xs mb-2" style={{ color: "rgba(255,255,255,0.5)" }}>
                Language
              </p>
              <div className="flex flex-wrap gap-2">
                {LANGUAGES.map(l => (
                  <Link
                    key={l.code}
                    href={getPathForLang(location, l.code as Language)}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs"
                    style={{
                      backgroundColor: l.code === lang ? "var(--amber)" : "rgba(255,255,255,0.1)",
                      color: "#fff",
                      fontFamily: "'Lato', sans-serif",
                    }}
                  >
                    <span>{l.flag}</span>
                    <span>{l.nativeLabel}</span>
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href={`${prefix}/contact`}
              onClick={() => setMobileOpen(false)}
              className="mt-3 btn-pine text-sm justify-center"
            >
              {t.nav.inquire}
            </Link>
          </div>
        </div>
      )}

      {/* Close lang dropdown on outside click */}
      {langOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setLangOpen(false)}
        />
      )}
    </header>
  );
}
