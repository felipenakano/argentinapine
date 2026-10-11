// ArgentinaPine.com — Buy Wood from Argentina commercial landing page
// Design: Timber Atlas — commercial intent hub for international wood buyers

import { Link } from "wouter";
import { useLang } from "@/contexts/LangContext";
import { LANGUAGE_PATH_PREFIX } from "@/lib/i18n";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import JsonLd from "@/components/JsonLd";
import { ArrowRight, CheckCircle2, ExternalLink, Ship, ClipboardList } from "lucide-react";

const BASE_URL = "https://www.argentinapine.com";
const PAGE_PATH = "/buy-wood-argentina";

const products = [
  {
    title: "Pine Timber & Boards",
    description: "Rough-sawn or dressed Pinus taeda boards for construction, furniture, joinery, crates, and general industrial use.",
    href: "/products/lumber-boards",
  },
  {
    title: "Pine Mouldings",
    description: "Kiln-dried profiled stock for architraves, skirting, trim, furniture components, and interior fit-out.",
    href: "/products/pine-mouldings",
  },
  {
    title: "Finger-Joint Mouldings",
    description: "Clear, paint-grade components made from short clear sections and supplied to profile and length requirements.",
    href: "/products/finger-joint-mouldings",
  },
  {
    title: "Panels & Sheet Goods",
    description: "Edge-glued panels, laminated boards, LVL, and structural sheet products for furniture and construction.",
    href: "/products/panels-sheet-goods",
  },
  {
    title: "Pallet Wood",
    description: "Cut-to-length boards and components for pallet manufacturing, export packaging, crating, and dunnage.",
    href: "/products/pallet-wood",
  },
];

const faqs = [
  {
    question: "What wood can international buyers buy from Argentina?",
    answer: "Argentina supplies a range of processed wood products, including Pinus taeda pine timber and boards, mouldings, finger-joint components, panels, pallet wood, and other export-ready products. The correct product depends on the buyer's dimensions, grade, moisture, treatment, volume, and destination requirements.",
  },
  {
    question: "What species is used for Argentine pine timber?",
    answer: "The principal commercial species for Argentine pine products is Pinus taeda, commonly known as loblolly pine. Buyers should state the species, product grade, and country of origin in the purchase specification rather than relying only on the word pine.",
  },
  {
    question: "Can I buy kiln-dried or heat-treated wood from Argentina?",
    answer: "Yes. Argentine export programmes can be quoted for kiln-dried timber and, where required for wood packaging or other regulated uses, heat-treated material. The quotation should state the target moisture content, treatment method, marking, documents, and inspection requirements. This site focuses on KD and HT supply rather than green or untreated export material.",
  },
  {
    question: "How is Argentine wood shipped to international buyers?",
    answer: "Export orders are coordinated from the Port of Buenos Aires. Buyers should compare the complete delivered cost, including inland haulage, ocean freight, insurance, destination charges, customs, and local handling. A quotation should also state the agreed Incoterm, shipment window, packing method, and document list.",
  },
];

export default function BuyWoodArgentina() {
  const { lang } = useLang();
  const prefix = LANGUAGE_PATH_PREFIX[lang];
  const canonicalUrl = `${BASE_URL}${PAGE_PATH}`;

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Buy Wood from Argentina | Export Timber Supplier",
    headline: "Buy Wood from Argentina",
    description: "Buy export-ready wood from Argentina: Pinus taeda pine timber, boards, mouldings, panels, and pallet wood shipped from Buenos Aires.",
    url: canonicalUrl,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: "ArgentinaPine.com", url: BASE_URL },
    about: [
      { "@type": "Thing", name: "Argentine wood exports" },
      { "@type": "Thing", name: "Pinus taeda timber" },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Buy Wood from Argentina", item: canonicalUrl },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <Layout>
      <SEOHead
        title="Buy Wood from Argentina | Export Timber Supplier"
        description="Buy wood from Argentina with a clear export specification: Pinus taeda timber, boards, mouldings, panels, and pallet wood shipped from Buenos Aires."
        canonical={canonicalUrl}
      />
      <JsonLd id="buy-wood-argentina-page" schema={webPageSchema} />
      <JsonLd id="buy-wood-argentina-breadcrumb" schema={breadcrumbSchema} />
      <JsonLd id="buy-wood-argentina-faq" schema={faqSchema} />

      <section
        className="relative overflow-hidden py-20 md:py-24"
        style={{ background: "linear-gradient(135deg, var(--pine-green) 0%, var(--pine-green-dark) 100%)" }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #e3b04b 0, transparent 28%), radial-gradient(circle at 85% 70%, #fff 0, transparent 22%)" }} />
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <span className="font-mono-label text-xs mb-4 block" style={{ color: "var(--amber-light)" }}>
              ARGENTINA WOOD EXPORTS / INTERNATIONAL BUYING GUIDE
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight" style={{ color: "#fff" }}>
              Buy Wood from Argentina
            </h1>
            <p className="mt-5 text-lg md:text-xl leading-relaxed max-w-2xl" style={{ color: "rgba(255,255,255,0.82)", fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
              Export-ready pine timber, boards, mouldings, panels, and pallet wood from Argentina — specified for international buyers and shipped through the Port of Buenos Aires.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Pinus taeda",
                "KD / HT supply",
                "Buenos Aires export port",
                "B2B volumes",
              ].map(item => (
                <span key={item} className="rounded-full px-3 py-1.5 text-xs" style={{ color: "var(--amber-light)", backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", fontFamily: "'Lato', sans-serif" }}>
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href={`${prefix}/contact`} className="btn-amber text-sm">
                Request a Wood Quote <ArrowRight size={16} />
              </Link>
              <Link href={`${prefix}/products`} className="btn-amber-outline text-sm" style={{ color: "var(--amber-light)", borderColor: "var(--amber-light)" }}>
                Browse Products <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--warm-white)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <span className="accent-line" />
              <h2 className="font-display text-3xl md:text-4xl font-semibold mb-5" style={{ color: "var(--pine-green)" }}>
                A direct route to buying wood from Argentina
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "#3a3a38", fontFamily: "'Lato', sans-serif" }}>
                Buyers searching for wood from Argentina usually need more than a supplier list. They need to know which species is available, whether the material is kiln-dried or heat-treated, which product form fits the application, how the shipment will be documented, and how the delivered cost will be calculated.
              </p>
              <p className="text-base leading-relaxed mb-5" style={{ color: "#3a3a38", fontFamily: "'Lato', sans-serif" }}>
                ArgentinaPine.com connects those questions into one practical buying path. Argentine plantation supply is centred on <Link href={`${prefix}/species/what-is-pinus-taeda`} className="font-semibold underline" style={{ color: "var(--pine-green)" }}>Pinus taeda</Link>, commonly known as loblolly pine. The product can be quoted as sawn timber, mouldings, panels, or pallet components, with the dimensions, grade, moisture content, treatment, packing, and shipment terms defined before production.
              </p>
              <p className="text-base leading-relaxed" style={{ color: "#3a3a38", fontFamily: "'Lato', sans-serif" }}>
                The Argentine Ministry of Foreign Affairs reports strong recent demand for processed wood products, including sawn timber, fibreboards, profiled wood, and particle boards. Its sector overview also identifies Buenos Aires and the northeastern plantation regions as important parts of the wider wood value chain. <a href="https://chamb.cancilleria.gob.ar/en/world-products-%E2%80%93-forest-and-wood-products" target="_blank" rel="noreferrer" className="font-semibold underline" style={{ color: "var(--pine-green)" }}>Read the Argentine government sector overview <ExternalLink size={12} className="inline" /></a>
              </p>
            </div>
            <div className="rounded-lg p-7" style={{ backgroundColor: "var(--cream)", border: "1px solid var(--border-warm)" }}>
              <div className="flex items-center gap-3 mb-4">
                <Ship size={22} style={{ color: "var(--amber)" }} />
                <h2 className="font-display text-xl font-semibold" style={{ color: "var(--pine-green)" }}>Export basis</h2>
              </div>
              <ul className="space-y-3">
                {[
                  "Origin: Argentine plantation supply",
                  "Species: Pinus taeda for pine orders",
                  "Condition: kiln-dried or heat-treated supply",
                  "Port: Buenos Aires",
                  "Buyer: importers, manufacturers, distributors",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: "#3a3a38", fontFamily: "'Lato', sans-serif" }}>
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: "var(--pine-green)" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--cream)" }}>
        <div className="container">
          <div className="flex items-end justify-between mb-10 gap-6">
            <div>
              <span className="accent-line" />
              <h2 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: "var(--pine-green)" }}>
                Wood products available from Argentina
              </h2>
            </div>
            <Link href={`${prefix}/products`} className="hidden md:inline-flex items-center gap-2 text-sm font-bold link-underline" style={{ color: "var(--pine-green)", fontFamily: "'Lato', sans-serif" }}>
              All product details <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <Link key={product.href} href={`${prefix}${product.href}`} className="block rounded-lg p-6 card-lift no-underline" style={{ backgroundColor: "var(--warm-white)", border: "1px solid var(--border-warm)" }}>
                <span className="accent-line" />
                <h3 className="font-display text-xl font-semibold mb-2" style={{ color: "var(--pine-green)" }}>{product.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--warm-gray)", fontFamily: "'Lato', sans-serif" }}>{product.description}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-bold" style={{ color: "var(--amber)", fontFamily: "'Lato', sans-serif" }}>
                  View specifications <ArrowRight size={13} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--warm-white)" }}>
        <div className="container">
          <div className="max-w-3xl mb-10">
            <span className="accent-line" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4" style={{ color: "var(--pine-green)" }}>
              How to buy wood from Argentina with fewer surprises
            </h2>
            <p className="text-base leading-relaxed" style={{ color: "#3a3a38", fontFamily: "'Lato', sans-serif" }}>
              The strongest export inquiries are specification-led. They allow the mill or exporter to quote the correct material instead of guessing from a product name or a nominal size.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              ["01", "Define the use", "Explain whether the wood is for construction, furniture, mouldings, pallets, packaging, or another application."],
              ["02", "State dimensions", "Provide actual thickness, width, and length in millimetres, including tolerances and fixed-length requirements."],
              ["03", "Set the quality", "Agree the grade, knot and wane limits, surface finish, moisture target, and whether pieces may be finger-jointed."],
              ["04", "Confirm treatment", "For export packaging or regulated uses, state the heat-treatment requirement, marking, and documents needed."],
              ["05", "Compare landed cost", "Request the Incoterm, Buenos Aires shipment basis, packing, lead time, payment structure, and destination charges."],
            ].map(([number, title, body]) => (
              <div key={number} className="rounded-lg p-5" style={{ border: "1px solid var(--border-warm)", backgroundColor: "var(--cream)" }}>
                <span className="font-mono-label text-xs" style={{ color: "var(--amber)" }}>{number}</span>
                <h3 className="font-display text-lg font-semibold mt-2 mb-2" style={{ color: "var(--pine-green)" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--warm-gray)", fontFamily: "'Lato', sans-serif" }}>{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-lg p-7" style={{ backgroundColor: "var(--pine-green)", color: "#fff" }}>
            <div className="flex items-start gap-4">
              <ClipboardList size={24} className="mt-1 shrink-0" style={{ color: "var(--amber-light)" }} />
              <div>
                <h3 className="font-display text-xl font-semibold mb-2">The minimum quote brief</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.78)", fontFamily: "'Lato', sans-serif" }}>
                  Send the species, product, dimensions, grade, moisture content, treatment, quantity, destination port, desired shipment window, and preferred payment terms. For an explanation of a negotiable 20% deposit and 80% documentary structure, see the <Link href={`${prefix}/blog/payment-terms-argentina-sawmills-20-deposit-lc-documents`} className="underline font-semibold" style={{ color: "var(--amber-light)" }}>Argentine sawmill payment-terms guide</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20" style={{ backgroundColor: "var(--cream)" }}>
        <div className="container">
          <div className="max-w-3xl mb-10">
            <span className="accent-line" />
            <h2 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: "var(--pine-green)" }}>
              Questions buyers ask before ordering Argentine wood
            </h2>
          </div>
          <div className="max-w-4xl space-y-4">
            {faqs.map(faq => (
              <details key={faq.question} className="rounded-lg p-5" style={{ backgroundColor: "var(--warm-white)", border: "1px solid var(--border-warm)" }}>
                <summary className="cursor-pointer font-display text-lg font-semibold" style={{ color: "var(--pine-green)" }}>{faq.question}</summary>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "#3a3a38", fontFamily: "'Lato', sans-serif" }}>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" style={{ background: "linear-gradient(135deg, var(--pine-green) 0%, var(--pine-green-dark) 100%)" }}>
        <div className="container text-center">
          <span className="accent-line mx-auto" />
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4" style={{ color: "#fff" }}>
            Ready to buy wood from Argentina?
          </h2>
          <p className="text-base mb-8 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.75)", fontFamily: "'Lato', sans-serif" }}>
            Send the product specification, volume, destination, and timing. We will help turn the requirement into a practical export quotation.
          </p>
          <Link href={`${prefix}/contact`} className="btn-amber text-sm">
            Send a Buying Inquiry <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
