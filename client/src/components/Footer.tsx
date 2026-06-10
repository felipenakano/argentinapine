// ArgentinaPine.com — Footer Component
// Design: Timber Atlas — dark pine green footer, amber accents

import { Link } from "wouter";
import { useLang } from "@/contexts/LangContext";
import { LANGUAGE_PATH_PREFIX } from "@/lib/i18n";
import { Mail } from "lucide-react";

export default function Footer() {
  const { t, lang } = useLang();
  const prefix = LANGUAGE_PATH_PREFIX[lang];
  const year = new Date().getFullYear();

  const productLinks = [
    { href: `${prefix}/products/lumber-boards`, label: "Timber & Boards" },
    { href: `${prefix}/products/pine-mouldings`, label: "Pine Mouldings" },
    { href: `${prefix}/products/finger-joint-mouldings`, label: "Finger Joint Mouldings" },
    { href: `${prefix}/products/panels-sheet-goods`, label: "Panels & Sheet Goods" },
  ];

  const resourceLinks = [
    { href: `${prefix}/species`, label: t.nav.species },
    { href: `${prefix}/sourcing`, label: t.nav.sourcing },
    { href: `${prefix}/blog`, label: t.nav.blog },
    { href: `${prefix}/about`, label: t.nav.about },
    { href: `${prefix}/contact`, label: t.nav.contact },
  ];

  return (
    <footer style={{ backgroundColor: "var(--pine-green-dark)", color: "rgba(255,255,255,0.85)" }}>
      {/* Main footer */}
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href={`${prefix}/`} className="no-underline">
              <span className="font-display text-2xl font-semibold" style={{ color: "#fff" }}>
                ArgentinaPine
              </span>
              <span className="font-display text-2xl font-light" style={{ color: "var(--amber-light)" }}>
                .com
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'Lato', sans-serif" }}>
              {t.footer.tagline}
            </p>
            <a
              href="mailto:inquiry@argentinapine.com"
              className="mt-4 flex items-center gap-2 text-sm transition-colors hover:text-white"
              style={{ color: "var(--amber-light)", fontFamily: "'Lato', sans-serif" }}
            >
              <Mail size={15} />
              inquiry@argentinapine.com
            </a>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-mono-label text-xs mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
              {t.footer.products}
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white link-underline"
                    style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Lato', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-mono-label text-xs mb-4" style={{ color: "rgba(255,255,255,0.45)" }}>
              {t.footer.resources}
            </h4>
            <ul className="space-y-2.5">
              {resourceLinks.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:text-white link-underline"
                    style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Lato', sans-serif" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <div className="container py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Lato', sans-serif" }}>
            © {year} ArgentinaPine.com. {t.footer.rights}
          </p>
          <p className="text-xs max-w-lg" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "'Lato', sans-serif" }}>
            {t.footer.disclosure}
          </p>
        </div>
      </div>
    </footer>
  );
}
