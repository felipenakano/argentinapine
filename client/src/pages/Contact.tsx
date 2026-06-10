// ArgentinaPine.com — Contact Page
// Design: Timber Atlas

import { useState } from "react";
import { useLang } from "@/contexts/LangContext";
import Layout from "@/components/Layout";
import { Mail, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const { t } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", company: "", country: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production this would POST to a backend / email service
    setSubmitted(true);
  };

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
            {t.contact.title}
          </h1>
          <p className="mt-3 text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.78)", fontFamily: "'Lato', sans-serif" }}>
            {t.contact.intro}
          </p>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "var(--warm-white)" }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              {submitted ? (
                <div
                  className="rounded-lg p-10 text-center"
                  style={{ backgroundColor: "var(--cream)", border: "1px solid var(--border-warm)" }}
                >
                  <CheckCircle2 size={48} className="mx-auto mb-4" style={{ color: "var(--pine-green)" }} />
                  <h2 className="font-display text-2xl font-semibold mb-2" style={{ color: "var(--pine-green)" }}>
                    Inquiry Sent
                  </h2>
                  <p className="text-base" style={{ color: "var(--warm-gray)", fontFamily: "'Lato', sans-serif" }}>
                    {t.contact.success}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { key: "name", label: t.contact.name, type: "text", required: true },
                    { key: "company", label: t.contact.company, type: "text", required: true },
                    { key: "country", label: t.contact.country, type: "text", required: true },
                  ].map(field => (
                    <div key={field.key}>
                      <label
                        className="block font-mono-label text-xs mb-1.5"
                        style={{ color: "var(--warm-gray)" }}
                      >
                        {field.label} {field.required && <span style={{ color: "var(--amber)" }}>*</span>}
                      </label>
                      <input
                        type={field.type}
                        required={field.required}
                        value={form[field.key as keyof typeof form]}
                        onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                        className="w-full rounded px-4 py-3 text-sm outline-none transition-all"
                        style={{
                          border: "1.5px solid var(--border-warm)",
                          backgroundColor: "#fff",
                          fontFamily: "'Lato', sans-serif",
                          color: "var(--charcoal)",
                        }}
                        onFocus={e => (e.target.style.borderColor = "var(--pine-green)")}
                        onBlur={e => (e.target.style.borderColor = "var(--border-warm)")}
                      />
                    </div>
                  ))}

                  <div>
                    <label
                      className="block font-mono-label text-xs mb-1.5"
                      style={{ color: "var(--warm-gray)" }}
                    >
                      {t.contact.message} <span style={{ color: "var(--amber)" }}>*</span>
                    </label>
                    <textarea
                      required
                      rows={6}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="Please describe the products you are looking for, including species, dimensions, grade, quantity, and destination port."
                      className="w-full rounded px-4 py-3 text-sm outline-none transition-all resize-none"
                      style={{
                        border: "1.5px solid var(--border-warm)",
                        backgroundColor: "#fff",
                        fontFamily: "'Lato', sans-serif",
                        color: "var(--charcoal)",
                      }}
                      onFocus={e => (e.target.style.borderColor = "var(--pine-green)")}
                      onBlur={e => (e.target.style.borderColor = "var(--border-warm)")}
                    />
                  </div>

                  <button type="submit" className="btn-pine w-full justify-center">
                    {t.contact.submit}
                  </button>

                  <p className="text-xs" style={{ color: "var(--warm-gray-light)", fontFamily: "'Lato', sans-serif" }}>
                    {t.contact.disclosure}
                  </p>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <span className="accent-line" />
                <h2 className="font-display text-2xl font-semibold mb-4" style={{ color: "var(--pine-green)" }}>
                  Email Us Directly
                </h2>
                <a
                  href="mailto:inquiry@argentinapine.com"
                  className="inline-flex items-center gap-2 text-base font-medium"
                  style={{ color: "var(--amber)", fontFamily: "'Lato', sans-serif" }}
                >
                  <Mail size={18} />
                  inquiry@argentinapine.com
                </a>
              </div>

              <div
                className="rounded-lg p-7"
                style={{ backgroundColor: "var(--cream)", border: "1px solid var(--border-warm)" }}
              >
                <h3 className="font-display text-lg font-semibold mb-4" style={{ color: "var(--pine-green)" }}>
                  What to Include in Your Inquiry
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "Product type (lumber, mouldings, panels, finger joint)",
                    "Species preference (Pinus taeda or no preference)",
                    "Dimensions required (thickness × width × length)",
                    "Grade required",
                    "Moisture content required",
                    "Quantity (m³ or linear metres)",
                    "Destination port",
                    "Target delivery date",
                  ].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm" style={{ color: "#3a3a38", fontFamily: "'Lato', sans-serif" }}>
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: "var(--amber)" }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
