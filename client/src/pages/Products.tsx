// ArgentinaPine.com — Products Listing Page
// Design: Timber Atlas

import { Link } from "wouter";
import { useLang } from "@/contexts/LangContext";
import { LANGUAGE_PATH_PREFIX } from "@/lib/i18n";
import Layout from "@/components/Layout";
import { products, PRODUCT_IMAGES } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export default function Products() {
  const { t, lang } = useLang();
  const prefix = LANGUAGE_PATH_PREFIX[lang];

  return (
    <Layout>
      {/* Page header */}
      <section
        className="py-16"
        style={{
          background: "linear-gradient(135deg, var(--pine-green) 0%, var(--pine-green-dark) 100%)",
        }}
      >
        <div className="container">
          <span className="font-mono-label text-xs mb-3 block" style={{ color: "var(--amber-light)" }}>
            ArgentinaPine.com
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-semibold mb-4" style={{ color: "#fff" }}>
            {t.products.title}
          </h1>
          <p
            className="text-lg max-w-2xl"
            style={{ color: "rgba(255,255,255,0.78)", fontFamily: "'Lato', sans-serif" }}
          >
            {t.products.subtitle}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12" style={{ backgroundColor: "var(--cream)" }}>
        <div className="container">
          <p className="text-base max-w-3xl" style={{ color: "#3a3a38", fontFamily: "'Lato', sans-serif", lineHeight: 1.75 }}>
            {t.products.intro}
          </p>
        </div>
      </section>

      {/* Products grid */}
      <section className="py-16" style={{ backgroundColor: "var(--warm-white)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map(product => (
              <Link
                key={product.slug}
                href={`${prefix}/products/${product.slug}`}
                className="group block rounded-lg overflow-hidden card-lift no-underline"
                style={{
                  border: "1px solid var(--border-warm)",
                  backgroundColor: "var(--warm-white)",
                  boxShadow: "0 2px 12px rgba(26,26,24,0.07)",
                }}
              >
                <div className="relative overflow-hidden" style={{ height: "260px" }}>
                  <img
                    src={PRODUCT_IMAGES[product.slug]}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to top, rgba(26,50,20,0.55) 0%, transparent 55%)",
                    }}
                  />
                </div>
                <div className="p-7">
                  <h2
                    className="font-display text-2xl font-semibold mb-3"
                    style={{ color: "var(--pine-green)" }}
                  >
                    {product.title}
                  </h2>
                  <p
                    className="text-sm leading-relaxed mb-5"
                    style={{ color: "var(--warm-gray)", fontFamily: "'Lato', sans-serif" }}
                  >
                    {product.shortDesc}
                  </p>
                  {/* Quick specs preview */}
                  <div
                    className="rounded p-4 mb-5"
                    style={{ backgroundColor: "var(--cream)", border: "1px solid var(--border-warm)" }}
                  >
                    <table className="spec-table w-full">
                      <tbody>
                        {product.specs.slice(0, 3).map(spec => (
                          <tr key={spec.label}>
                            <td>{spec.label}</td>
                            <td>{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <span
                    className="inline-flex items-center gap-2 text-sm font-bold"
                    style={{ color: "var(--amber)", fontFamily: "'Lato', sans-serif" }}
                  >
                    {t.common.learnMore} <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, var(--pine-green) 0%, var(--pine-green-dark) 100%)" }}
      >
        <div className="container text-center">
          <h2 className="font-display text-3xl font-semibold mb-4" style={{ color: "#fff" }}>
            {t.home.ctaTitle}
          </h2>
          <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Lato', sans-serif" }}>
            {t.home.ctaBody}
          </p>
          <Link href={`${prefix}/contact`} className="btn-pine" style={{ backgroundColor: "var(--amber)", color: "#fff" }}>
            {t.contact.submit} <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
