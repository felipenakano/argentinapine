// ArgentinaPine.com — Blog Listing Page
// Design: Timber Atlas

import { useState } from "react";
import { Link } from "wouter";
import { useLang } from "@/contexts/LangContext";
import { LANGUAGE_PATH_PREFIX } from "@/lib/i18n";
import Layout from "@/components/Layout";
import { blogPosts } from "@/lib/content";
import { ArrowRight } from "lucide-react";

const CATEGORIES = ["Species", "Products", "Sourcing", "Market Intelligence"];

export default function Blog() {
  const { t, lang } = useLang();
  const prefix = LANGUAGE_PATH_PREFIX[lang];
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? blogPosts.filter(p => p.category === activeCategory)
    : blogPosts;

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
            {t.blog.title}
          </h1>
          <p className="mt-3 text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.78)", fontFamily: "'Lato', sans-serif" }}>
            {t.blog.subtitle}
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-6 border-b" style={{ backgroundColor: "var(--cream)", borderColor: "var(--border-warm)" }}>
        <div className="container">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-mono-label text-xs" style={{ color: "var(--warm-gray)" }}>
              {t.blog.filterBy}:
            </span>
            <button
              onClick={() => setActiveCategory(null)}
              className="category-badge transition-all"
              style={{
                backgroundColor: !activeCategory ? "var(--pine-green)" : "var(--cream)",
                color: !activeCategory ? "#fff" : "var(--pine-green)",
                borderColor: !activeCategory ? "var(--pine-green)" : "var(--border-warm)",
              }}
            >
              {t.blog.allCategories}
            </button>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="category-badge transition-all"
                style={{
                  backgroundColor: activeCategory === cat ? "var(--pine-green)" : "var(--cream)",
                  color: activeCategory === cat ? "#fff" : "var(--pine-green)",
                  borderColor: activeCategory === cat ? "var(--pine-green)" : "var(--border-warm)",
                }}
              >
                {t.blog.categories[cat as keyof typeof t.blog.categories] || cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-16" style={{ backgroundColor: "var(--warm-white)" }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(post => (
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
                    {t.blog.categories[post.category as keyof typeof t.blog.categories] || post.category}
                  </span>
                  <h2
                    className="font-display text-lg font-semibold mb-2 leading-snug"
                    style={{ color: "var(--pine-green)" }}
                  >
                    {post.title}
                  </h2>
                  <p
                    className="text-sm leading-relaxed mb-5 line-clamp-3"
                    style={{ color: "var(--warm-gray)", fontFamily: "'Lato', sans-serif" }}
                  >
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-mono-label text-xs" style={{ color: "var(--warm-gray-light)" }}>
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

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="font-display text-xl" style={{ color: "var(--warm-gray)" }}>
                {lang === "vi" ? "Chưa có bài viết trong danh mục này." : lang === "fil" ? "Wala pang mga artikulo sa kategoryang ito." : lang === "zh" ? "此类别暂无文章。" : "No articles in this category yet."}
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
