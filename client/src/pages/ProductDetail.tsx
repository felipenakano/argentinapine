// ArgentinaPine.com — Product Detail Page
// Design: Timber Atlas
// JSON-LD: Product schema + BreadcrumbList for every product detail page

import { Link } from "wouter";
import { useLang } from "@/contexts/LangContext";
import { LANGUAGE_PATH_PREFIX } from "@/lib/i18n";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";
import { products, PRODUCT_IMAGES } from "@/lib/content";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

const BASE_URL = "https://www.argentinapine.com";
const SITE_NAME = "ArgentinaPine.com";
const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663536877726/Tzc2WoRPUavmHoeUZjteAe/logo-icon-transparent-WJFxiLYFJGqHLMhMPMPCHN.png";

interface Props {
  params: { slug: string };
}

export default function ProductDetail({ params }: Props) {
  const { t, lang } = useLang();
  const prefix = LANGUAGE_PATH_PREFIX[lang];
  const product = products.find(p => p.slug === params.slug);

  if (!product) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-display text-3xl" style={{ color: "var(--pine-green)" }}>Product not found</h1>
          <Link href={`${prefix}/products`} className="mt-6 btn-pine inline-flex">
            <ArrowLeft size={16} /> {t.products.allProducts}
          </Link>
        </div>
      </Layout>
    );
  }

  const canonicalUrl = `${BASE_URL}/products/${product.slug}`;
  const imageUrl = PRODUCT_IMAGES[product.slug] ?? LOGO_URL;

  // ── JSON-LD: Product ────────────────────────────────────────────────────────
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: imageUrl,
    url: canonicalUrl,
    brand: {
      "@type": "Brand",
      name: SITE_NAME,
    },
    manufacturer: {
      "@type": "Organization",
      name: SITE_NAME,
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
    material: "Pinus taeda (Argentine plantation pine)",
    additionalProperty: product.specs.map(spec => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: SITE_NAME,
        url: BASE_URL,
      },
      url: `${BASE_URL}/contact`,
    },
  };

  // ── JSON-LD: BreadcrumbList ─────────────────────────────────────────────────
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: `${BASE_URL}/products`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: product.title,
        item: canonicalUrl,
      },
    ],
  };

  return (
    <Layout>
      <SEOHead
        title={product.title}
        description={product.shortDesc}
        canonical={canonicalUrl}
      />
      <JsonLd id={`product-${product.slug}`} schema={productSchema} />
      <JsonLd id={`breadcrumb-product-${product.slug}`} schema={breadcrumbSchema} />

      {/* Breadcrumb + header */}
      <section
        className="py-14"
        style={{ background: "linear-gradient(135deg, var(--pine-green) 0%, var(--pine-green-dark) 100%)" }}
      >
        <div className="container">
          <Link
            href={`${prefix}/products`}
            className="inline-flex items-center gap-1.5 text-xs mb-4 transition-colors hover:text-white"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Lato', sans-serif" }}
          >
            <ArrowLeft size={12} /> {t.products.allProducts}
          </Link>
          <h1 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: "#fff" }}>
            {product.title}
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="py-16" style={{ backgroundColor: "var(--warm-white)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left: image + specs */}
            <div className="lg:col-span-2 space-y-6">
              <div className="rounded-lg overflow-hidden" style={{ border: "1px solid var(--border-warm)" }}>
                <img
                  src={imageUrl}
                  alt={product.title}
                  className="w-full object-cover"
                  style={{ height: "280px" }}
                />
              </div>

              {/* Specs */}
              <div
                className="rounded-lg overflow-hidden"
                style={{ border: "1px solid var(--border-warm)" }}
              >
                <div
                  className="px-5 py-3 border-b"
                  style={{ backgroundColor: "var(--pine-green)", borderColor: "var(--pine-green-dark)" }}
                >
                  <h3 className="font-mono-label text-xs" style={{ color: "rgba(255,255,255,0.8)" }}>
                    {t.products.specs}
                  </h3>
                </div>
                <div style={{ backgroundColor: "var(--cream)" }}>
                  <table className="spec-table w-full">
                    <tbody>
                      {product.specs.map(spec => (
                        <tr key={spec.label}>
                          <td>{spec.label}</td>
                          <td>{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* CTA */}
              <Link href={`${prefix}/contact`} className="btn-pine w-full justify-center">
                {product.cta} <ArrowRight size={16} />
              </Link>
            </div>

            {/* Right: description, uses, grades */}
            <div className="lg:col-span-3 space-y-10">
              <div>
                <span className="accent-line" />
                <p className="text-base leading-relaxed" style={{ color: "#3a3a38", fontFamily: "'Lato', sans-serif" }}>
                  {product.description}
                </p>
              </div>

              {/* Grades */}
              <div>
                <h2
                  className="font-display text-2xl font-semibold mb-5"
                  style={{ color: "var(--pine-green)" }}
                >
                  {t.products.grades}
                </h2>
                <div className="space-y-4">
                  {product.grades.map(grade => (
                    <div
                      key={grade.name}
                      className="rounded-lg p-5"
                      style={{
                        backgroundColor: "var(--cream)",
                        border: "1px solid var(--border-warm)",
                      }}
                    >
                      <h3
                        className="font-display text-base font-semibold mb-1"
                        style={{ color: "var(--pine-green)" }}
                      >
                        {grade.name}
                      </h3>
                      <p className="text-sm" style={{ color: "var(--warm-gray)", fontFamily: "'Lato', sans-serif" }}>
                        {grade.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Uses */}
              <div>
                <h2
                  className="font-display text-2xl font-semibold mb-5"
                  style={{ color: "var(--pine-green)" }}
                >
                  {t.products.uses}
                </h2>
                <ul className="space-y-3">
                  {product.uses.map(use => (
                    <li key={use} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="mt-0.5 shrink-0" style={{ color: "var(--pine-green)" }} />
                      <span className="text-sm" style={{ color: "#3a3a38", fontFamily: "'Lato', sans-serif" }}>
                        {use}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Other products */}
              <div>
                <h2 className="font-display text-xl font-semibold mb-4" style={{ color: "var(--pine-green)" }}>
                  Other Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {products
                    .filter(p => p.slug !== product.slug)
                    .map(p => (
                      <Link
                        key={p.slug}
                        href={`${prefix}/products/${p.slug}`}
                        className="block rounded p-4 text-sm font-medium transition-colors hover:bg-[var(--cream)] card-lift"
                        style={{
                          border: "1px solid var(--border-warm)",
                          color: "var(--pine-green)",
                          fontFamily: "'Lato', sans-serif",
                        }}
                      >
                        {p.title} <ArrowRight size={12} className="inline ml-1" />
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
