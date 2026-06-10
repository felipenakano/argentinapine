// ArgentinaPine.com — Sourcing Page
// Design: Timber Atlas

import { Link } from "wouter";
import { useLang } from "@/contexts/LangContext";
import { LANGUAGE_PATH_PREFIX } from "@/lib/i18n";
import Layout from "@/components/Layout";
import { sourcingPages } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export default function Sourcing() {
  const { t, lang } = useLang();
  const prefix = LANGUAGE_PATH_PREFIX[lang];

  return (
    <Layout>
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, var(--pine-green) 0%, var(--pine-green-dark) 100%)" }}
      >
        <div className="container">
          <span className="font-mono-label text-xs mb-3 block" style={{ color: "var(--amber-light)" }}>
            ArgentinaPine.com
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: "#fff" }}>
            {t.sourcing.title}
          </h1>
          <p className="mt-3 text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.78)", fontFamily: "'Lato', sans-serif" }}>
            Practical guides for international buyers sourcing pine products from Argentina.
          </p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "var(--warm-white)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sourcingPages.map(page => (
              <Link
                key={page.slug}
                href={`${prefix}/sourcing/${page.slug}`}
                className="group block rounded-lg p-7 card-lift no-underline"
                style={{
                  border: "1px solid var(--border-warm)",
                  backgroundColor: "var(--warm-white)",
                  boxShadow: "0 2px 8px rgba(26,26,24,0.06)",
                }}
              >
                <span className="accent-line" />
                <h2
                  className="font-display text-xl font-semibold mb-3"
                  style={{ color: "var(--pine-green)" }}
                >
                  {page.title}
                </h2>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: "var(--warm-gray)", fontFamily: "'Lato', sans-serif" }}
                >
                  {page.intro}
                </p>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-bold"
                  style={{ color: "var(--amber)", fontFamily: "'Lato', sans-serif" }}
                >
                  {t.common.learnMore} <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
