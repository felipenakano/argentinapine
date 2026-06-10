// ArgentinaPine.com — Species Detail Page
// Design: Timber Atlas

import { Link } from "wouter";
import { useLang } from "@/contexts/LangContext";
import { LANGUAGE_PATH_PREFIX } from "@/lib/i18n";
import Layout from "@/components/Layout";
import { speciesPages } from "@/lib/content";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  params: { slug: string };
}

function renderBody(body: string) {
  // Simple markdown-like renderer for **bold** and paragraphs
  return body.split("\n\n").map((para, i) => {
    if (para.startsWith("**") && para.includes("**\n")) {
      // Heading-like bold paragraph
      const [heading, ...rest] = para.split("\n");
      const headingText = heading.replace(/\*\*/g, "");
      return (
        <div key={i}>
          <h2 className="font-display text-xl font-semibold mt-8 mb-3" style={{ color: "var(--pine-green)" }}>
            {headingText}
          </h2>
          {rest.map((line, j) => (
            <p key={j} className="text-base leading-relaxed mb-3" style={{ color: "#3a3a38", fontFamily: "'Lato', sans-serif" }}>
              {line}
            </p>
          ))}
        </div>
      );
    }
    return (
      <p key={i} className="text-base leading-relaxed mb-4" style={{ color: "#3a3a38", fontFamily: "'Lato', sans-serif" }}>
        {para.replace(/\*\*/g, "")}
      </p>
    );
  });
}

export default function SpeciesDetail({ params }: Props) {
  const { t, lang } = useLang();
  const prefix = LANGUAGE_PATH_PREFIX[lang];
  const page = speciesPages.find(p => p.slug === params.slug);

  if (!page) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-display text-3xl" style={{ color: "var(--pine-green)" }}>Page not found</h1>
          <Link href={`${prefix}/species`} className="mt-6 btn-pine inline-flex">
            <ArrowLeft size={16} /> {t.species.title}
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section
        className="py-14"
        style={{ background: "linear-gradient(135deg, var(--pine-green) 0%, var(--pine-green-dark) 100%)" }}
      >
        <div className="container">
          <Link
            href={`${prefix}/species`}
            className="inline-flex items-center gap-1.5 text-xs mb-4"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Lato', sans-serif" }}
          >
            <ArrowLeft size={12} /> {t.species.title}
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: "#fff" }}>
            {page.title}
          </h1>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "var(--warm-white)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <span className="accent-line" />
              <p
                className="text-lg leading-relaxed mb-8 font-light"
                style={{ color: "var(--pine-green)", fontFamily: "'Lato', sans-serif" }}
              >
                {page.intro}
              </p>
              <div className="prose-timber">
                {renderBody(page.body)}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Key Facts */}
              {page.keyFacts && (
                <div
                  className="rounded-lg overflow-hidden"
                  style={{ border: "1px solid var(--border-warm)" }}
                >
                  <div
                    className="px-5 py-3"
                    style={{ backgroundColor: "var(--pine-green)" }}
                  >
                    <h3 className="font-mono-label text-xs" style={{ color: "rgba(255,255,255,0.85)" }}>
                      {t.species.keyFacts}
                    </h3>
                  </div>
                  <div style={{ backgroundColor: "var(--cream)" }}>
                    <table className="spec-table w-full">
                      <tbody>
                        {page.keyFacts.map(fact => (
                          <tr key={fact.label}>
                            <td>{fact.label}</td>
                            <td>{fact.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Properties Table */}
              {page.propertiesTable && (
                <div
                  className="rounded-lg overflow-hidden"
                  style={{ border: "1px solid var(--border-warm)" }}
                >
                  <div
                    className="px-5 py-3"
                    style={{ backgroundColor: "var(--pine-green)" }}
                  >
                    <h3 className="font-mono-label text-xs" style={{ color: "rgba(255,255,255,0.85)" }}>
                      {t.species.properties}
                    </h3>
                  </div>
                  <div style={{ backgroundColor: "var(--cream)" }}>
                    <table className="spec-table w-full">
                      <tbody>
                        {page.propertiesTable.map(row => (
                          <tr key={row.property}>
                            <td>{row.property}</td>
                            <td>{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* CTA */}
              <Link href={`${prefix}/contact`} className="btn-pine w-full justify-center">
                {t.nav.inquire} <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Comparison Table */}
          {page.comparisonTable && (
            <div className="mt-14">
              <h2 className="font-display text-2xl font-semibold mb-6" style={{ color: "var(--pine-green)" }}>
                {t.species.comparison}
              </h2>
              <div
                className="rounded-lg overflow-hidden"
                style={{ border: "1px solid var(--border-warm)" }}
              >
                <table className="w-full text-sm" style={{ fontFamily: "'Space Mono', monospace" }}>
                  <thead>
                    <tr style={{ backgroundColor: "var(--pine-green)" }}>
                      {Object.keys(page.comparisonTable[0]).map(key => (
                        <th
                          key={key}
                          className="px-4 py-3 text-left font-medium capitalize"
                          style={{ color: "rgba(255,255,255,0.85)" }}
                        >
                          {key}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {page.comparisonTable.map((row, i) => (
                      <tr
                        key={i}
                        style={{
                          backgroundColor: i % 2 === 0 ? "var(--cream)" : "var(--warm-white)",
                          borderBottom: "1px solid var(--border-warm)",
                        }}
                      >
                        {Object.values(row).map((val, j) => (
                          <td
                            key={j}
                            className="px-4 py-3"
                            style={{
                              color: j === 0 ? "var(--warm-gray)" : "var(--charcoal)",
                              fontWeight: j === 0 ? 400 : 700,
                            }}
                          >
                            {val}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
