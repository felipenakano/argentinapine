// ArgentinaPine.com — Blog Post Page
// Design: Timber Atlas

import { Link } from "wouter";
import { useLang } from "@/contexts/LangContext";
import { LANGUAGE_PATH_PREFIX } from "@/lib/i18n";
import Layout from "@/components/Layout";
import { blogPosts } from "@/lib/content";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface Props {
  params: { slug: string };
}

// Parse a text string that may contain <a href="...">text</a> tags into React nodes.
function parseInlineLinks(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  const linkRegex = /<a href="([^"]+)">(.*?)<\/a>/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    const href = match[1];
    const label = match[2];
    parts.push(
      <Link
        key={match.index}
        href={href}
        style={{
          color: "var(--pine-green)",
          textDecoration: "underline",
          textUnderlineOffset: "3px",
          fontWeight: 600,
        }}
      >
        {label}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }
  return parts;
}

function renderBody(body: string) {
  return body.split("\n\n").map((para, i) => {
    // Heading block: **Heading Text**\nBody line(s)
    if (para.startsWith("**") && para.includes("**\n")) {
      const [heading, ...rest] = para.split("\n");
      const headingText = heading.replace(/\*\*/g, "");
      return (
        <div key={i}>
          <h2 className="font-display text-2xl font-semibold mt-10 mb-4" style={{ color: "var(--pine-green)" }}>
            {headingText}
          </h2>
          {rest.map((line, j) => (
            <p key={j} className="text-base leading-relaxed mb-4" style={{ color: "#3a3a38", fontFamily: "'Lato', sans-serif" }}>
              {parseInlineLinks(line)}
            </p>
          ))}
        </div>
      );
    }
    // Bullet list: lines starting with * or -
    if ((para.startsWith("* ") || para.startsWith("- ")) && !para.startsWith("**")) {
      const items = para.split("\n").filter(l => l.startsWith("* ") || l.startsWith("- "));
      return (
        <ul key={i} className="list-disc pl-5 mb-4 space-y-1">
          {items.map((item, j) => (
            <li key={j} className="text-base" style={{ color: "#3a3a38", fontFamily: "'Lato', sans-serif" }}>
              {parseInlineLinks(item.replace(/^[*-] /, ""))}
            </li>
          ))}
        </ul>
      );
    }
    // Plain paragraph — strip **bold** markers, parse links
    const cleaned = para.replace(/\*\*/g, "");
    return (
      <p key={i} className="text-base leading-relaxed mb-5" style={{ color: "#3a3a38", fontFamily: "'Lato', sans-serif" }}>
        {parseInlineLinks(cleaned)}
      </p>
    );
  });
}

export default function BlogPost({ params }: Props) {
  const { t, lang } = useLang();
  const prefix = LANGUAGE_PATH_PREFIX[lang];
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-display text-3xl" style={{ color: "var(--pine-green)" }}>Article not found</h1>
          <Link href={`${prefix}/blog`} className="mt-6 btn-pine inline-flex">
            <ArrowLeft size={16} /> {t.blog.title}
          </Link>
        </div>
      </Layout>
    );
  }

  const related = blogPosts
    .filter(p => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <Layout>
      <section
        className="py-14"
        style={{ background: "linear-gradient(135deg, var(--pine-green) 0%, var(--pine-green-dark) 100%)" }}
      >
        <div className="container">
          <Link
            href={`${prefix}/blog`}
            className="inline-flex items-center gap-1.5 text-xs mb-4"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Lato', sans-serif" }}
          >
            <ArrowLeft size={12} /> {t.blog.title}
          </Link>
          <span className="category-badge mb-4 block w-fit" style={{ backgroundColor: "rgba(255,255,255,0.15)", color: "var(--amber-light)", borderColor: "rgba(255,255,255,0.2)" }}>
            {(t.blog.categories as Record<string, string>)[post.category] ?? post.category}
          </span>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold max-w-3xl leading-tight" style={{ color: "#fff" }}>
            {post.title}
          </h1>
          <p className="mt-4 font-mono-label text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
            {new Date(post.date).toLocaleDateString(lang === "zh" ? "zh-CN" : lang === "vi" ? "vi-VN" : lang === "fil" ? "fil-PH" : "en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "var(--warm-white)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Article */}
            <article className="lg:col-span-2">
              <span className="accent-line" />
              <p
                className="text-lg leading-relaxed mb-8 font-light"
                style={{ color: "var(--pine-green)", fontFamily: "'Lato', sans-serif" }}
              >
                {post.excerpt}
              </p>
              <div className="prose-timber">
                {renderBody(post.body)}
              </div>

              {/* CTA inline */}
              <div
                className="mt-12 rounded-lg p-7"
                style={{ backgroundColor: "var(--cream)", border: "1px solid var(--border-warm)" }}
              >
                <h3 className="font-display text-xl font-semibold mb-2" style={{ color: "var(--pine-green)" }}>
                  {t.home.ctaTitle}
                </h3>
                <p className="text-sm mb-4" style={{ color: "var(--warm-gray)", fontFamily: "'Lato', sans-serif" }}>
                  {t.home.ctaBody}
                </p>
                <Link href={`${prefix}/contact`} className="btn-pine text-sm">
                  {t.nav.inquire} <ArrowRight size={14} />
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {related.length > 0 && (
                <div>
                  <h4 className="font-mono-label text-xs mb-4" style={{ color: "var(--warm-gray)" }}>
                    {lang === "vi" ? "Bài Viết Liên Quan" : lang === "fil" ? "Mga Kaugnay na Artikulo" : lang === "zh" ? "相关文章" : "Related Articles"}
                  </h4>
                  <div className="space-y-3">
                    {related.map(r => (
                      <Link
                        key={r.slug}
                        href={`${prefix}/blog/${r.slug}`}
                        className="block rounded-lg p-4 card-lift no-underline"
                        style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--cream)" }}
                      >
                        <span className="category-badge mb-2 block w-fit" style={{ fontSize: "0.6rem" }}>
                          {(t.blog.categories as Record<string, string>)[r.category] ?? r.category}
                        </span>
                        <h5 className="font-display text-sm font-semibold leading-snug" style={{ color: "var(--pine-green)" }}>
                          {r.title}
                        </h5>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              <div
                className="rounded-lg p-6"
                style={{ backgroundColor: "var(--pine-green)" }}
              >
                <h4 className="font-display text-lg font-semibold mb-2" style={{ color: "#fff" }}>
                  {t.nav.inquire}
                </h4>
                <p className="text-sm mb-4" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Lato', sans-serif" }}>
                  {t.contact.intro}
                </p>
                <Link
                  href={`${prefix}/contact`}
                  className="btn-amber-outline text-xs w-full justify-center"
                  style={{ color: "var(--amber-light)", borderColor: "var(--amber-light)" }}
                >
                  {t.contact.submit}
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </Layout>
  );
}
