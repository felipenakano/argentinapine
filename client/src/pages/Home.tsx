// ArgentinaPine.com — Home Page
// Design: Timber Atlas — editorial hero, asymmetric sections, amber accents

import { Link } from "wouter";
import { useLang } from "@/contexts/LangContext";
import { LANGUAGE_PATH_PREFIX } from "@/lib/i18n";
import Layout from "@/components/Layout";
import { products, blogPosts, HERO_IMAGE, PRODUCT_IMAGES } from "@/lib/content";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  const { t, lang } = useLang();
  const prefix = LANGUAGE_PATH_PREFIX[lang];
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <Layout>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "88vh", display: "flex", alignItems: "center" }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        {/* Gradient overlay — dark green to transparent */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(26,50,20,0.92) 0%, rgba(26,50,20,0.75) 50%, rgba(26,50,20,0.35) 100%)",
          }}
        />

        <div className="container relative z-10 py-24">
          <div className="max-w-2xl animate-fade-up">
            <span className="font-mono-label text-xs mb-4 block" style={{ color: "var(--amber-light)" }}>
              ArgentinaPine.com
            </span>
            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6"
              style={{ color: "#fff" }}
            >
              {t.home.heroHeadline}
            </h1>
            <p
              className="text-lg md:text-xl mb-10 leading-relaxed"
              style={{ color: "rgba(255,255,255,0.82)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
            >
              {t.home.heroSub}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href={`${prefix}/products`} className="btn-pine text-sm">
                {t.home.heroCta}
                <ArrowRight size={16} />
              </Link>
              <Link
                href={`${prefix}/contact`}
                className="btn-amber-outline text-sm"
                style={{ color: "var(--amber-light)", borderColor: "var(--amber-light)" }}
              >
                {t.home.heroCtaSecondary}
              </Link>
            </div>
          </div>
        </div>

        {/* Amber accent bar at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: "linear-gradient(90deg, var(--amber) 0%, var(--amber-light) 100%)" }}
        />
      </section>

      {/* ── INTRO ────────────────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "var(--warm-white)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="accent-line" />
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6" style={{ color: "var(--pine-green)" }}>
                {t.home.introTitle}
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#3a3a38", fontFamily: "'Lato', sans-serif" }}>
                {t.home.introBody}
              </p>
              <Link
                href={`${prefix}/species`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold link-underline"
                style={{ color: "var(--pine-green)", fontFamily: "'Lato', sans-serif" }}
              >
                {t.common.learnMore} <ArrowRight size={14} />
              </Link>
            </div>
            {/* Stats block */}
            <div
              className="rounded-lg p-8"
              style={{ backgroundColor: "var(--cream)", border: "1px solid var(--border-warm)" }}
            >
              <div className="grid grid-cols-2 gap-6">
                {t.home.stats.map(stat => (
                  <div key={stat.label} className="text-center p-4">
                    <div
                      className="font-display text-3xl font-bold mb-1"
                      style={{ color: "var(--pine-green)" }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-xs leading-tight"
                      style={{ color: "var(--warm-gray)", fontFamily: "'Lato', sans-serif" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY ARGENTINA ────────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "var(--cream)" }}>
        <div className="container">
          <div className="text-center mb-14">
            <span className="accent-line mx-auto" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: "var(--pine-green)" }}>
              {t.home.whyTitle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {t.home.whyPoints.map((point, i) => (
              <div
                key={i}
                className="rounded-lg p-7 card-lift"
                style={{
                  backgroundColor: "var(--warm-white)",
                  border: "1px solid var(--border-warm)",
                  boxShadow: "0 2px 8px rgba(26,26,24,0.06)",
                }}
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2
                    size={22}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--pine-green)" }}
                  />
                  <div>
                    <h3
                      className="font-display text-lg font-semibold mb-2"
                      style={{ color: "var(--pine-green)" }}
                    >
                      {point.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#4a4a48", fontFamily: "'Lato', sans-serif" }}
                    >
                      {point.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS GRID ────────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "var(--warm-white)" }}>
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="accent-line" />
              <h2 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: "var(--pine-green)" }}>
                {t.products.title}
              </h2>
            </div>
            <Link
              href={`${prefix}/products`}
              className="hidden md:inline-flex items-center gap-2 text-sm font-bold link-underline"
              style={{ color: "var(--pine-green)", fontFamily: "'Lato', sans-serif" }}
            >
              {t.products.allProducts} <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map(product => (
              <Link
                key={product.slug}
                href={`${prefix}/products/${product.slug}`}
                className="group block rounded-lg overflow-hidden card-lift no-underline"
                style={{
                  border: "1px solid var(--border-warm)",
                  boxShadow: "0 2px 8px rgba(26,26,24,0.06)",
                  backgroundColor: "var(--warm-white)",
                }}
              >
                <div className="relative overflow-hidden" style={{ height: "220px" }}>
                  <img
                    src={PRODUCT_IMAGES[product.slug]}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(26,50,20,0.6) 0%, transparent 60%)",
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="font-display text-xl font-semibold mb-2"
                    style={{ color: "var(--pine-green)" }}
                  >
                    {product.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4"
                    style={{ color: "var(--warm-gray)", fontFamily: "'Lato', sans-serif" }}
                  >
                    {product.shortDesc}
                  </p>
                  <span
                    className="inline-flex items-center gap-1.5 text-sm font-bold"
                    style={{ color: "var(--amber)", fontFamily: "'Lato', sans-serif" }}
                  >
                    {t.common.learnMore} <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ─────────────────────────────────────────────────── */}
      <section className="py-20" style={{ backgroundColor: "var(--cream)" }}>
        <div className="container">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="accent-line" />
              <h2 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: "var(--pine-green)" }}>
                {t.home.latestPosts}
              </h2>
            </div>
            <Link
              href={`${prefix}/blog`}
              className="hidden md:inline-flex items-center gap-2 text-sm font-bold link-underline"
              style={{ color: "var(--pine-green)", fontFamily: "'Lato', sans-serif" }}
            >
              {t.blog.latestPosts} <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredPosts.map(post => (
              <Link
                key={post.slug}
                href={`${prefix}/blog/${post.slug}`}
                className="group block rounded-lg overflow-hidden card-lift no-underline"
                style={{
                  border: "1px solid var(--border-warm)",
                  backgroundColor: "var(--warm-white)",
                  boxShadow: "0 2px 8px rgba(26,26,24,0.06)",
                }}
              >
                <div className="p-6">
                  <span className="category-badge mb-3 block w-fit">
                    {(t.blog.categories as Record<string, string>)[post.category] ?? post.category}
                  </span>
                  <h3
                    className="font-display text-lg font-semibold mb-2 leading-snug"
                    style={{ color: "var(--pine-green)" }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-4 line-clamp-3"
                    style={{ color: "var(--warm-gray)", fontFamily: "'Lato', sans-serif" }}
                  >
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono-label text-xs"
                      style={{ color: "var(--warm-gray-light)" }}
                    >
                      {new Date(post.date).toLocaleDateString(lang === "zh" ? "zh-CN" : lang === "vi" ? "vi-VN" : lang === "fil" ? "fil-PH" : "en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span
                      className="inline-flex items-center gap-1 text-xs font-bold"
                      style={{ color: "var(--amber)", fontFamily: "'Lato', sans-serif" }}
                    >
                      {t.blog.readMore} <ArrowRight size={11} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(135deg, var(--pine-green) 0%, var(--pine-green-dark) 100%)",
        }}
      >
        <div className="container text-center">
          <span className="accent-line mx-auto" />
          <h2
            className="font-display text-3xl md:text-4xl font-semibold mb-4"
            style={{ color: "#fff" }}
          >
            {t.home.ctaTitle}
          </h2>
          <p
            className="text-base mb-8 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Lato', sans-serif" }}
          >
            {t.home.ctaBody}
          </p>
          <Link href={`${prefix}/contact`} className="btn-pine" style={{ backgroundColor: "var(--amber)", color: "#fff" }}>
            {t.home.ctaBtn}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
