// ArgentinaPine.com — About Page
// Design: Timber Atlas

import { Link } from "wouter";
import { useLang } from "@/contexts/LangContext";
import { LANGUAGE_PATH_PREFIX } from "@/lib/i18n";
import Layout from "@/components/Layout";
import { ArrowRight } from "lucide-react";

export default function About() {
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
            {t.about.title}
          </h1>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "var(--warm-white)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="accent-line" />
              <p className="text-base leading-relaxed mb-6" style={{ color: "#3a3a38", fontFamily: "'Lato', sans-serif" }}>
                ArgentinaPine.com is an independent online resource for international buyers of pine products from Argentina. The site provides information on product types, species characteristics, export logistics, and market intelligence to help buyers make informed sourcing decisions.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#3a3a38", fontFamily: "'Lato', sans-serif" }}>
                The site covers the full range of Argentine pine timber and wood products available for export, including sawn timber and boards, pine mouldings, finger joint mouldings, and panels and sheet goods. Content is produced by specialists with direct experience in the Argentine pine export market.
              </p>
              <p className="text-base leading-relaxed mb-8" style={{ color: "#3a3a38", fontFamily: "'Lato', sans-serif" }}>
              </p>
              <Link href={`${prefix}/contact`} className="btn-pine">
                {t.nav.inquire} <ArrowRight size={16} />
              </Link>
            </div>

            <div className="space-y-5">
              {[
                { title: "Independent Resource", body: "ArgentinaPine.com is an independent reference site, not affiliated with any single mill or exporter." },
                { title: "Specialist Knowledge", body: "Content is produced by specialists with direct experience in the Argentine pine export market." },
                { title: "International Focus", body: "The site is designed for international buyers in Asia, the Middle East, and the Pacific." },
                { title: "Multilingual", body: "Available in English, Vietnamese, Filipino, and Chinese to serve buyers across the region." },
              ].map(item => (
                <div
                  key={item.title}
                  className="rounded-lg p-6"
                  style={{ backgroundColor: "var(--cream)", border: "1px solid var(--border-warm)" }}
                >
                  <h3 className="font-display text-lg font-semibold mb-2" style={{ color: "var(--pine-green)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--warm-gray)", fontFamily: "'Lato', sans-serif" }}>
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
