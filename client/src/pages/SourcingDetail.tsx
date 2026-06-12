// ArgentinaPine.com — Sourcing Detail Page
// Design: Timber Atlas

import { Link } from "wouter";
import { useLang } from "@/contexts/LangContext";
import { LANGUAGE_PATH_PREFIX } from "@/lib/i18n";
import Layout from "@/components/Layout";
import { sourcingPages } from "@/lib/content";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  params: { slug: string };
}

function renderBody(body: string) {
  return body.split("\n\n").map((para, i) => {
    if (para.startsWith("**") && para.includes("**\n")) {
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
    if (para.startsWith("- ")) {
      const items = para.split("\n").filter(l => l.startsWith("- "));
      return (
        <ul key={i} className="list-disc pl-5 mb-4 space-y-1">
          {items.map((item, j) => (
            <li key={j} className="text-base" style={{ color: "#3a3a38", fontFamily: "'Lato', sans-serif" }}>
              {item.replace(/^- /, "")}
            </li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className="text-base leading-relaxed mb-4" style={{ color: "#3a3a38", fontFamily: "'Lato', sans-serif" }}>
        {para.replace(/\*\*/g, "")}
      </p>
    );
  });
}

export default function SourcingDetail({ params }: Props) {
  const { t, lang } = useLang();
  const prefix = LANGUAGE_PATH_PREFIX[lang];
  const page = sourcingPages.find(p => p.slug === params.slug);

  if (!page) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-display text-3xl" style={{ color: "var(--pine-green)" }}>Page not found</h1>
          <Link href={`${prefix}/sourcing`} className="mt-6 btn-pine inline-flex">
            <ArrowLeft size={16} /> {t.sourcing.title}
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
            href={`${prefix}/sourcing`}
            className="inline-flex items-center gap-1.5 text-xs mb-4"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Lato', sans-serif" }}
          >
            <ArrowLeft size={12} /> {t.sourcing.title}
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: "#fff" }}>
            {page.title}
          </h1>
          {page.slug === "ports-logistics" && (
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.2)" }}>
              <span style={{ fontSize: "1rem", lineHeight: 1 }}>🇦🇷</span>
              <span className="font-mono-label text-xs" style={{ color: "rgba(255,255,255,0.85)", letterSpacing: "0.1em" }}>PORT OF BUENOS AIRES</span>
            </div>
          )}
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "var(--warm-white)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span className="accent-line" />
              <p className="text-lg leading-relaxed mb-8 font-light" style={{ color: "var(--pine-green)", fontFamily: "'Lato', sans-serif" }}>
                {page.intro}
              </p>
              <div className="prose-timber">
                {renderBody(page.body)}
              </div>
            </div>
            <div className="space-y-6">
              <div
                className="rounded-lg p-6"
                style={{ backgroundColor: "var(--cream)", border: "1px solid var(--border-warm)" }}
              >
                <h3 className="font-display text-lg font-semibold mb-3" style={{ color: "var(--pine-green)" }}>
                  Ready to Source?
                </h3>
                <p className="text-sm mb-4" style={{ color: "var(--warm-gray)", fontFamily: "'Lato', sans-serif" }}>
                  {t.home.ctaBody}
                </p>
                <Link href={`${prefix}/contact`} className="btn-pine w-full justify-center text-sm">
                  {t.nav.inquire} <ArrowRight size={14} />
                </Link>
              </div>
              <div>
                <h4 className="font-mono-label text-xs mb-3" style={{ color: "var(--warm-gray)" }}>
                  Other Sourcing Guides
                </h4>
                <div className="space-y-2">
                  {sourcingPages
                    .filter(p => p.slug !== page.slug)
                    .map(p => (
                      <Link
                        key={p.slug}
                        href={`${prefix}/sourcing/${p.slug}`}
                        className="block text-sm p-3 rounded transition-colors hover:bg-[var(--cream)]"
                        style={{ color: "var(--pine-green)", fontFamily: "'Lato', sans-serif", border: "1px solid var(--border-warm)" }}
                      >
                        {p.title} <ArrowRight size={11} className="inline ml-1" />
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
